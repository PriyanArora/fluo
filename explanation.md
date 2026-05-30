# fluo MVP Explanation

## Root Folders

- `open-agent-builder/`: Main fluo application. This is the modified UI app that runs the procurement workflow demo.
- `Supply-Chain-Blockchain/`: Reference clone only. It was used for Hardhat/Solidity structure ideas, not as the app UI.
- `stitch_flu_procurement_workflow_interface/`: Static design reference. The fluo frontend copies its sharp, monochrome, node-oriented interface style.
- `project_spec.md`: Product boundary and MVP source of truth.
- `progress.md`: Implementation checklist and status log.

## Main App Folders

- `open-agent-builder/app/`: Next.js routes for `/`, `/orgs/org-cfb-gagetown-01`, `/documents/doc-radar-upgrade-001`, `/ledger`, and the ChainOps API endpoints.
- `open-agent-builder/components/chainops/`: fluo UI components for the organization workspace, workflow canvas, vendor node, part-origin node, ledger node, affected-project panel, and ledger drawer.
- `open-agent-builder/data/`: Local JSON storage. This replaces a database for organizations, documents, projects, vendors, relationships, workflows, ledger cache, and deployed contract address.
- `open-agent-builder/lib/chainops/`: Server-side JSON store and vendor risk engine.
- `open-agent-builder/lib/blockchain/`: Local ledger helper. It hashes payloads, writes to the local Solidity contract when available, and appends readable events to JSON.
- `open-agent-builder/contracts/`: One Solidity contract, `ChainOpsLedger.sol`.
- `open-agent-builder/scripts/`: Dev launcher, contract deploy script, and spec check script.
- `open-agent-builder/public/images/`: Local Canadian defence images used by the frontend.
- `open-agent-builder/styles/`: Tailwind/global CSS plus `fluo.css`, which implements the stitch design language.

## Non-Standard Tech

- `React Flow` (`@xyflow/react`): Provides the workflow canvas foundation. fluo overlays deterministic node and edge rendering on top so the demo remains stable while preserving the n8n-style canvas behavior.
- `Solidity`: Defines the local audit ledger contract. It stores event metadata and payload hashes, not readable sensitive procurement details.
- `Hardhat`: Runs the local blockchain and deploys `ChainOpsLedger.sol` for the localhost demo.
- `ethers`: Connects the Next.js API to the local Hardhat chain and calls `logEvent()`.
- `Local JSON`: Acts as the demo data store. It is intentionally not a production database.
- `Payload hashing`: The app hashes readable event payloads before logging them to the contract so the chain records integrity evidence without storing full details.

## Running

From `open-agent-builder/`, run:

```bash
npm run dev
```

That starts the Hardhat local chain, deploys `ChainOpsLedger.sol`, writes its address to `data/contract-address.json`, and then starts the Next.js app.

No API keys are required.
