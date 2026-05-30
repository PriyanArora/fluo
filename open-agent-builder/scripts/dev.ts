import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { setTimeout as delay } from "node:timers/promises";

type Child = ReturnType<typeof spawn>;

const children: Child[] = [];

function run(command: string, args: string[], name: string) {
  const hardhatHome = path.join(process.cwd(), ".hardhat-home");
  fs.mkdirSync(hardhatHome, { recursive: true });

  const child = spawn(command, args, {
    cwd: process.cwd(),
    env: { ...process.env, HOME: hardhatHome },
    shell: process.platform === "win32",
    stdio: ["ignore", "pipe", "pipe"],
  });

  children.push(child);

  child.stdout.on("data", (chunk) => {
    process.stdout.write(`[${name}] ${chunk}`);
  });

  child.stderr.on("data", (chunk) => {
    process.stderr.write(`[${name}] ${chunk}`);
  });

  child.on("exit", (code) => {
    if (code && code !== 0) {
      process.exitCode = code;
      stopAll();
    }
  });

  return child;
}

async function waitForHardhat() {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      const response = await fetch("http://127.0.0.1:8545", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jsonrpc: "2.0",
          method: "eth_chainId",
          params: [],
          id: 1,
        }),
      });

      if (response.ok) {
        return;
      }
    } catch {
      await delay(500);
    }
  }

  throw new Error("Hardhat local chain did not start on port 8545.");
}

function stopAll() {
  for (const child of children) {
    if (!child.killed) {
      child.kill();
    }
  }
}

async function main() {
  process.on("SIGINT", () => {
    stopAll();
    process.exit(0);
  });
  process.on("SIGTERM", () => {
    stopAll();
    process.exit(0);
  });

  run("npx", ["hardhat", "node", "--hostname", "127.0.0.1"], "chain");
  await waitForHardhat();

  const deploy = run(
    "npx",
    ["hardhat", "run", "scripts/deploy.ts", "--network", "localhost"],
    "deploy",
  );

  await new Promise<void>((resolve, reject) => {
    deploy.on("exit", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Contract deployment failed with code ${code}.`));
      }
    });
  });

  run("next", ["dev"], "web");
}

main().catch((error) => {
  console.error(error);
  stopAll();
  process.exit(1);
});
