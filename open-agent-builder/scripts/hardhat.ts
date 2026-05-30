import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);

if (args.length === 0) {
  console.error("Usage: tsx scripts/hardhat.ts <hardhat command>");
  process.exit(1);
}

const hardhatHome = path.join(process.cwd(), ".hardhat-home");
fs.mkdirSync(hardhatHome, { recursive: true });

const child = spawn("npx", ["hardhat", ...args], {
  cwd: process.cwd(),
  env: { ...process.env, HOME: hardhatHome },
  shell: process.platform === "win32",
  stdio: "inherit",
});

child.on("exit", (code) => {
  process.exit(code ?? 0);
});

child.on("error", (error) => {
  console.error(error);
  process.exit(1);
});
