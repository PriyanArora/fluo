const fs = require("node:fs");
const path = require("node:path");
const { ethers } = require("hardhat");

async function main() {
  const ChainOpsLedger = await ethers.getContractFactory("ChainOpsLedger");
  const ledger = await ChainOpsLedger.deploy({ gasLimit: 2_000_000 });

  await ledger.waitForDeployment();

  const address = await ledger.getAddress();
  const network = await ethers.provider.getNetwork();
  const deploymentPath = path.join(process.cwd(), "data", "contract-address.json");

  fs.writeFileSync(
    deploymentPath,
    `${JSON.stringify(
      {
        address,
        chainId: Number(network.chainId),
        network: "localhost",
      },
      null,
      2,
    )}\n`,
  );

  console.log(`ChainOpsLedger deployed to ${address}`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exit(1);
});
