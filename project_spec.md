# ChainOps MVP Project Specification

## 1. Project Name

**ChainOps**

## 2. One-Line Description

ChainOps is a defence procurement workflow control room where a Canadian defence organization can create SharePoint-style project workspaces, build n8n-style visual approval workflows, and write key supplier, contractor, part, and blacklist events to a blockchain ledger so risks automatically flag every connected project.

## 3. Final MVP Scope

This MVP has only two visible product parts:

1. **Organization Workspace + Visual Workflow Builder**

   * Built by modifying `firecrawl/open-agent-builder`.
   * Each defence organization has a workspace, for example:

     * `Canadian Base: 01 CFB Gagetown`
   * Inside the organization, users create project documents.
   * Each document contains one visual workflow canvas.
   * The workflow canvas looks and feels like n8n/Open Agent Builder: draggable nodes, connected branches, status colors, and human approval flow.

2. **Blockchain Risk Ledger**

   * Built by reusing ideas from `faizack/Supply-Chain-Blockchain`.
   * Only one simple Solidity contract is required for the demo.
   * It records immutable audit events:

     * contractor added
     * vendor flagged
     * project blocked
     * related projects alerted
   * The blockchain is not the database. It is the tamper-evident log.
   * The readable app data stays in local JSON files.

Nothing else is part of the MVP.

## 4. Main Use Case Shown in Demo

The demo shows one Canadian defence procurement scenario:

A project under `Canadian Base: 01 CFB Gagetown` is being planned through a visual workflow. The commander creates a procurement workflow for a defence system upgrade. The workflow includes a vendor/contractor node, part-origin tracking, officer review, and final approval.

At first, the contractor appears valid. Then the demo simulates a Canadian vetting update by changing a local JSON field from:

```json
"riskStatus": "clear"
```

to:

```json
"riskStatus": "flagged"
```

When the contractor is dragged into the workflow, ChainOps checks the local vetting JSON, detects the flag, marks the contractor node red, crosses out the workflow connection, prevents the contractor from being added as an authorized vendor, writes the event to the blockchain ledger, and flags two other projects where the same contractor already appeared.

That single moment demonstrates the entire product:

* visual workflow
* contractor risk detection
* cross-project risk propagation
* immutable audit logging
* human review queue

## 5. Real-World Canadian Problem Frame

ChainOps is built around the procurement problem of weak visibility, weak traceability, and poor records.

The Canadian government already has CanadaBuys as the official procurement service front door, so ChainOps does not replace CanadaBuys. It sits after and around existing procurement systems as a project execution, approval, and audit layer.

Relevant public evidence:

* CanadaBuys is the Government of Canada’s online procurement service for doing business with the federal government and broader public sector:
  https://canadabuys.canada.ca/en

* The Auditor General reported that ArriveCAN cost about $59.5 million, but the exact cost could not be calculated because of poor financial record keeping:
  https://www.canada.ca/en/auditor-general/media-room/2024-reports-of-the-auditor-general-of-canada-to-the-parliament-of-canada-glaring-disregard-for-basic-management-and-contracting-practices-surrounds-the-governments-arrivecan-application.html

* The Auditor General reported that Canada’s Future Fighter Capability Project estimate increased from $19.0 billion in 2022 to $27.7 billion by 2024:
  https://www.canada.ca/en/auditor-general/our-work/audit-reports/report-2-delivering-canadas-future-fighter-jet-capability.html

* In a House of Commons National Defence Committee exchange, Jonathan Quinn said his suspicion was that some Canadian Armed Forces capability components may have been manufactured in China, while also saying he was not an expert on the components:
  https://www.ourcommons.ca/documentviewer/en/44-1/NDDN/meeting-50/evidence

* Canada’s Controlled Goods Program requires individuals and organizations to register before examining, possessing, or transferring controlled goods in Canada:
  https://www.canada.ca/en/public-services-procurement/services/industrial-security/controlled-goods.html

This evidence gives the demo a real policy basis without pretending the MVP is connected to classified government systems.

## 6. Repositories Used

### 6.1 UI Repository

**Repository:** `firecrawl/open-agent-builder`
**Link:** https://github.com/firecrawl/open-agent-builder

Use this as the main application base.

The original repo is an open-source visual workflow builder for AI agent pipelines. It already provides:

* polished workflow canvas
* drag-and-drop nodes
* visual node connections
* human approval style
* conditional logic feel
* modern Next.js/React UI
* React Flow-style workflow experience

For ChainOps, remove or disable:

* Firecrawl scraping
* AI provider setup
* external API execution
* MCP tools
* Convex requirement
* Clerk requirement
* advanced agent execution
* web automation nodes
* transform/code execution nodes

Keep:

* canvas UI
* node rendering
* edges/connections
* workflow save/load structure
* node sidebar
* inspector/config panel
* run/demo mode styling

### 6.2 Blockchain Repository

**Repository:** `faizack/Supply-Chain-Blockchain`
**Link:** https://github.com/faizack/Supply-Chain-Blockchain

Use this as the blockchain reference repo, not the main UI.

The original repo demonstrates:

* Solidity contracts
* Hardhat
* Next.js
* Web3.js
* MetaMask connection
* supply-chain traceability
* product movement records

For ChainOps, reuse only:

* Hardhat setup
* Solidity/Web3 connection pattern
* contract deployment pattern
* frontend-to-contract interaction pattern

Do not copy the whole supply-chain UI.

## 7. Demo Architecture

```txt
ChainOps Localhost Demo
│
├── Next.js / React UI
│   └── modified firecrawl/open-agent-builder canvas
│
├── Local JSON Files
│   ├── organizations.json
│   ├── documents.json
│   ├── workflows.json
│   ├── vendors.json
│   ├── projects.json
│   ├── relationships.json
│   └── ledger-events-cache.json
│
├── Risk Engine
│   └── TypeScript functions reading local JSON
│
├── Blockchain Layer
│   ├── Hardhat local network
│   ├── ChainOpsLedger.sol
│   └── Web3/ethers frontend connector
│
└── Demo UI Panels
    ├── Organization workspace
    ├── Project document
    ├── Workflow canvas
    ├── Vendor risk panel
    ├── Related projects alert panel
    └── Blockchain audit log panel
```

## 8. No Database Rule

The MVP uses no real database.

Use local JSON files only.

Reason:

* faster build
* fewer failure points
* easier demo reset
* no Docker
* no Postgres
* no Convex
* no MongoDB
* no Supabase
* no Firebase

For the demo, JSON is enough because the goal is to prove the workflow/risk/ledger concept, not production storage.

## 9. Local Data Model

### 9.1 `organizations.json`

```json
[
  {
    "id": "org-cfb-gagetown-01",
    "name": "Canadian Base: 01 CFB Gagetown",
    "type": "defence_base",
    "country": "Canada"
  }
]
```

### 9.2 `documents.json`

```json
[
  {
    "id": "doc-radar-upgrade-001",
    "organizationId": "org-cfb-gagetown-01",
    "title": "Radar Support Equipment Procurement Workflow",
    "createdBy": "commander-001",
    "workflowId": "workflow-radar-001"
  }
]
```

### 9.3 `projects.json`

```json
[
  {
    "id": "project-radar-001",
    "organizationId": "org-cfb-gagetown-01",
    "name": "Radar Support Equipment Procurement",
    "status": "active",
    "workflowId": "workflow-radar-001"
  },
  {
    "id": "project-comms-002",
    "organizationId": "org-cfb-gagetown-01",
    "name": "Base Communications Retrofit",
    "status": "active",
    "workflowId": "workflow-comms-002"
  },
  {
    "id": "project-maint-003",
    "organizationId": "org-cfb-gagetown-01",
    "name": "Vehicle Maintenance Sensor Package",
    "status": "active",
    "workflowId": "workflow-maint-003"
  }
]
```

### 9.4 `vendors.json`

```json
[
  {
    "id": "vendor-northline-systems",
    "name": "NorthLine Systems",
    "riskStatus": "clear",
    "riskReason": null,
    "controlledGoodsStatus": "unknown",
    "countryExposure": ["Canada", "United States", "China"]
  },
  {
    "id": "vendor-maple-secure",
    "name": "Maple Secure Components",
    "riskStatus": "clear",
    "riskReason": null,
    "controlledGoodsStatus": "registered",
    "countryExposure": ["Canada"]
  }
]
```

### 9.5 `relationships.json`

```json
[
  {
    "entityId": "vendor-northline-systems",
    "entityType": "vendor",
    "projectId": "project-radar-001",
    "relationship": "candidate_vendor"
  },
  {
    "entityId": "vendor-northline-systems",
    "entityType": "vendor",
    "projectId": "project-comms-002",
    "relationship": "existing_vendor"
  },
  {
    "entityId": "vendor-northline-systems",
    "entityType": "vendor",
    "projectId": "project-maint-003",
    "relationship": "past_vendor"
  }
]
```

## 10. Workflow Node Types

Only these nodes are required.

### 10.1 `Project Start`

Starts the workflow.

Example label:

```txt
Radar Support Equipment Procurement
```

### 10.2 `Vendor / Contractor`

Represents the contractor being added to the procurement workflow.

Example:

```txt
NorthLine Systems
```

### 10.3 `Part / Origin Check`

Shows that a part, component, or batch has an origin/supply-chain check.

Example:

```txt
Component Origin Review
```

This is where the demo references the Canadian parliamentary concern that CAF equipment may include components manufactured in China.

### 10.4 `Human Review`

Represents a procurement officer, security officer, or commander review.

Example:

```txt
Security Officer Review
```

### 10.5 `Ledger Log`

Writes the event to the blockchain.

Example:

```txt
Write Vendor Flag Event
```

### 10.6 `Blocked / Escalated`

Final red node if the vendor is flagged.

Example:

```txt
Vendor Not Authorized
```

## 11. Blockchain MVP

Use only one smart contract.

### Contract name

```txt
ChainOpsLedger.sol
```

### Purpose

The contract stores immutable audit events.

It does not store private readable details. It stores hashes and event metadata.

### Required contract events

```solidity
event AuditLogged(
    uint256 indexed eventId,
    string indexed projectId,
    string indexed entityId,
    string eventType,
    string payloadHash,
    address actor,
    uint256 timestamp
);
```

### Required contract functions

```solidity
function logEvent(
    string memory projectId,
    string memory entityId,
    string memory eventType,
    string memory payloadHash
) public;
```

Optional helper:

```solidity
function getEventCount() public view returns (uint256);
```

That is enough.

Do not build three contracts. Do not build tokens. Do not build payments. Do not build a real DAO. Do not build public-chain deployment.

## 12. Blockchain Events Used in Demo

Only use these:

```txt
VENDOR_DROPPED_ON_WORKFLOW
VENDOR_FLAG_DETECTED
PROJECT_BLOCKED
RELATED_PROJECT_ALERTED
HUMAN_REVIEW_REQUIRED
```

Example flow:

```txt
User drags NorthLine Systems into workflow
↓
System checks vendors.json
↓
riskStatus = flagged
↓
UI turns node red
↓
Edge gets crossed out
↓
System blocks connection
↓
System writes VENDOR_FLAG_DETECTED to blockchain
↓
System finds related projects
↓
System writes RELATED_PROJECT_ALERTED events
↓
Dashboard shows 3 affected projects
```

## 13. Risk Engine Logic

The risk engine is just a TypeScript function.

No AI. No database. No graph database.

Pseudo-logic:

```ts
function evaluateVendorDrop(vendorId: string, projectId: string) {
  const vendor = vendors.find(v => v.id === vendorId);

  if (!vendor) {
    return { status: "blocked", reason: "Vendor not found" };
  }

  if (vendor.riskStatus === "flagged") {
    const relatedProjects = relationships
      .filter(r => r.entityId === vendorId)
      .map(r => r.projectId);

    return {
      status: "blocked",
      reason: vendor.riskReason,
      affectedProjects: relatedProjects
    };
  }

  return { status: "allowed" };
}
```

## 14. Demo State Switch

To simulate a Canadian vetting update, change this:

```json
"riskStatus": "clear"
```

to this:

```json
"riskStatus": "flagged",
"riskReason": "Matched by mock Canadian vetting update. Human review required before authorization."
```

Then refresh/re-run the workflow.

This shows how ChainOps reacts when an existing vetting system detects a risk.

## 15. Exact Demo Script

### Scene 1 — Open Organization

The presenter opens ChainOps and selects:

```txt
Canadian Base: 01 CFB Gagetown
```

The app shows a workspace containing documents/projects.

### Scene 2 — Open Project Document

The presenter opens:

```txt
Radar Support Equipment Procurement Workflow
```

Inside the document is the Open Agent Builder-style visual workflow canvas.

### Scene 3 — Show Procurement Workflow

The workflow shows:

```txt
Project Start
  ↓
Vendor / Contractor
  ↓
Part / Origin Check
  ↓
Human Review
  ↓
Ledger Log
  ↓
Approved / Released
```

The presenter explains:

Canada has real procurement recordkeeping and cost-control problems. ArriveCAN showed weak financial records and unclear contracting controls. Defence procurement, such as the Future Fighter Capability Project, also shows how cost and delay risks grow when visibility is weak. ChainOps does not replace procurement systems; it adds workflow traceability and immutable audit history.

### Scene 4 — Show Part-Origin Risk

The presenter opens the `Part / Origin Check` node.

The node shows:

```txt
Component origin visibility required.
Country exposure: Canada, United States, China.
```

Presenter line:

A House of Commons defence committee exchange asked whether CAF equipment had components from supply chains involving China. Jonathan Quinn replied that his suspicion was that some CAF capabilities probably had components manufactured in China, while noting he was not an expert. ChainOps turns that kind of uncertainty into a visible workflow check instead of leaving it buried in documents.

### Scene 5 — Simulate Vetting Update

The presenter changes local JSON:

```json
"riskStatus": "clear"
```

to:

```json
"riskStatus": "flagged"
```

for:

```txt
NorthLine Systems
```

### Scene 6 — Drag Vendor Into Workflow

The presenter drags the vendor node into the workflow.

The app instantly:

* turns the vendor node red
* crosses out the connection
* prevents authorization
* shows `Vendor Not Authorized`
* writes the flag event to blockchain
* opens affected projects panel

### Scene 7 — Show Cross-Project Alert

The alert panel shows:

```txt
Affected Projects:
1. Radar Support Equipment Procurement — BLOCKED
2. Base Communications Retrofit — REVIEW REQUIRED
3. Vehicle Maintenance Sensor Package — REVIEW REQUIRED
```

### Scene 8 — Show Blockchain Log

The ledger panel shows:

```txt
VENDOR_FLAG_DETECTED
PROJECT_BLOCKED
RELATED_PROJECT_ALERTED
HUMAN_REVIEW_REQUIRED
```

Each entry shows:

* event ID
* project ID
* vendor ID
* actor wallet/address
* timestamp
* transaction hash or local chain event index

### Scene 9 — Human Review Queue

The final state is not automatic punishment.

It says:

```txt
Human review required through existing Canadian vetting process.
```

This is important because the MVP should not imply fully automated blacklisting without human approval.

## 16. UI Pages Required

### 16.1 `/`

Landing screen.

Shows:

```txt
ChainOps
Secure visual workflow layer for defence procurement assurance.
```

Button:

```txt
Open CFB Gagetown Workspace
```

### 16.2 `/orgs/org-cfb-gagetown-01`

Organization workspace.

Shows:

* organization name
* project documents
* risk summary
* ledger status

### 16.3 `/documents/doc-radar-upgrade-001`

Main workflow page.

Shows:

* left node palette
* center workflow canvas
* right inspector panel
* bottom ledger log drawer
* affected projects alert panel

### 16.4 `/ledger`

Optional read-only ledger page.

Shows:

* event list
* event type
* project
* entity
* timestamp
* transaction hash / local event ID

## 17. Components to Keep From Open Agent Builder

Keep:

* workflow canvas
* node sidebar
* drag/drop logic
* node rendering
* edges
* inspector panel
* run/status UI
* layout and styling
* document-like workflow storage shape if available

Remove/disable:

* Firecrawl web scraping
* AI agent nodes
* MCP tools
* external provider settings
* Clerk auth
* Convex database
* E2B execution
* transform/code nodes
* real-time external execution
* templates not needed for demo

## 18. Components to Build New

Build only:

```txt
/components/chainops/OrganizationWorkspace.tsx
/components/chainops/DocumentWorkflowPage.tsx
/components/chainops/VendorNode.tsx
/components/chainops/PartOriginNode.tsx
/components/chainops/LedgerLogNode.tsx
/components/chainops/AffectedProjectsPanel.tsx
/components/chainops/LedgerDrawer.tsx
/lib/chainops/riskEngine.ts
/lib/chainops/jsonStore.ts
/lib/blockchain/ledger.ts
/contracts/ChainOpsLedger.sol
```

## 19. Suggested Folder Structure

```txt
chainops/
├── app/
│   ├── page.tsx
│   ├── orgs/[orgId]/page.tsx
│   ├── documents/[docId]/page.tsx
│   └── ledger/page.tsx
│
├── components/
│   ├── chainops/
│   │   ├── OrganizationWorkspace.tsx
│   │   ├── DocumentWorkflowPage.tsx
│   │   ├── VendorNode.tsx
│   │   ├── PartOriginNode.tsx
│   │   ├── LedgerLogNode.tsx
│   │   ├── AffectedProjectsPanel.tsx
│   │   └── LedgerDrawer.tsx
│   │
│   └── workflow/
│       └── reused Open Agent Builder workflow components
│
├── data/
│   ├── organizations.json
│   ├── documents.json
│   ├── workflows.json
│   ├── vendors.json
│   ├── projects.json
│   ├── relationships.json
│   └── ledger-events-cache.json
│
├── lib/
│   ├── chainops/
│   │   ├── riskEngine.ts
│   │   ├── jsonStore.ts
│   │   └── workflowGuards.ts
│   │
│   └── blockchain/
│       ├── ledger.ts
│       └── contractAddress.ts
│
├── contracts/
│   └── ChainOpsLedger.sol
│
├── scripts/
│   └── deploy.ts
│
├── hardhat.config.ts
└── package.json
```

## 20. What Happens When Vendor Is Flagged

When the user drags a flagged vendor into the workflow:

### UI behavior

* Vendor node turns red.
* Edge to next node is crossed out.
* Connection cannot be completed.
* Tooltip says:

  ```txt
  Vendor blocked: risk flag found in local vetting registry.
  ```
* Right panel shows:

  ```txt
  Human review required before authorization.
  ```

### System behavior

* Reads `vendors.json`.
* Detects `riskStatus: flagged`.
* Searches `relationships.json`.
* Finds all related projects.
* Updates UI statuses.
* Calls blockchain `logEvent()`.
* Appends readable copy to `ledger-events-cache.json`.

### Blockchain behavior

Writes:

```txt
VENDOR_FLAG_DETECTED
PROJECT_BLOCKED
RELATED_PROJECT_ALERTED
HUMAN_REVIEW_REQUIRED
```

## 21. Why Blockchain Is Used

The blockchain is used only for audit integrity.

It proves:

* who triggered the event
* which project was affected
* which vendor/entity was involved
* what type of risk event occurred
* when the event happened
* that the event history was not quietly rewritten later

It does not prove that the original data was true. It proves that the decision/event history was preserved.

## 22. What Data Goes On-Chain

Put on-chain:

* project ID
* entity/vendor ID
* event type
* hash of payload
* actor address
* timestamp
* event count

Do not put on-chain:

* full personal details
* classified data
* raw documents
* full vendor files
* private procurement files
* sensitive vetting details

## 23. What Data Stays in JSON

Keep in JSON:

* organization names
* document titles
* project names
* vendor names
* mock risk status
* readable reason text
* workflow node positions
* affected project relationships

## 24. Human Review Rule

ChainOps does not automatically punish a person or company permanently.

The MVP rule is:

```txt
Flag = block workflow connection and require human review.
Blacklist = only after authorized human decision.
```

For the demo, only show `flagged`, not permanent `blacklisted`, unless there is time.

## 25. Final MVP Checklist

### Must Work

* Open CFB Gagetown workspace.
* Open one project document.
* Show n8n-style visual workflow.
* Drag vendor/contractor node into workflow.
* Read vendor risk status from JSON.
* If clear, allow connection.
* If flagged, turn node red.
* Cross out workflow branch.
* Prevent vendor authorization.
* Show affected projects.
* Write event to local blockchain.
* Show immutable ledger event in UI.

### Nice But Optional

* MetaMask display.
* Transaction hash display.
* Copy audit event button.
* JSON reset button.
* Simple “simulate vetting update” button instead of manually editing JSON.

### Do Not Build

* Real auth.
* Real database.
* Real CanadaBuys integration.
* Real DND integration.
* Real sanctions API.
* Real Controlled Goods API.
* Real payment release.
* Full AI workflow execution.
* General n8n automation.
* Docker.
* Hyperledger Fabric.
* Public blockchain deployment.
* Multi-tenant production SaaS.

## 26. Build Order

### Step 1 — Install Open Agent Builder

```bash
git clone https://github.com/firecrawl/open-agent-builder.git
cd open-agent-builder
npm install
npm run dev
```

Confirm UI runs.

### Step 2 — Remove External Dependencies From Demo Path

Disable or bypass:

* Convex
* Clerk
* Firecrawl API
* AI provider settings
* MCP execution
* E2B execution

The canvas should still render locally.

### Step 3 — Add ChainOps JSON Files

Create `/data`.

Add:

* organizations
* documents
* projects
* vendors
* relationships
* workflows

### Step 4 — Rename Workflow Nodes

Replace generic AI workflow labels with defence workflow labels.

### Step 5 — Add Vendor Risk Logic

Create:

```txt
/lib/chainops/riskEngine.ts
```

### Step 6 — Add Blockchain Contract

Create:

```txt
/contracts/ChainOpsLedger.sol
```

Use Hardhat local chain.

### Step 7 — Connect UI to Ledger

When vendor is flagged, call:

```ts
logEvent(projectId, vendorId, "VENDOR_FLAG_DETECTED", payloadHash)
```

### Step 8 — Add Affected Projects Panel

Show all projects linked to the flagged vendor.

### Step 9 — Final Demo Polish

Make the flagged path visually strong:

* red node
* crossed edge
* blocked badge
* alert panel
* ledger drawer

## 27. Final Judge Pitch

ChainOps is a secure visual workflow layer for defence procurement. It lets a base, unit, or procurement office create project documents inside an organization workspace, then build n8n-style workflows for contractors, parts, approvals, and security checks. The difference from ordinary workflow tools is that critical events are written to a blockchain audit ledger. If a contractor, supplier, person, or part is flagged by a vetting process, ChainOps blocks that workflow path, alerts every related project, and preserves the event history so it cannot be quietly rewritten later. The MVP runs locally using Open Agent Builder for the visual workflow interface, JSON files instead of a database, and a simple Hardhat/Solidity ledger for immutable audit events.

## 28. Final Demo Sentence

We are showing how one flagged defence contractor or part can stop one bad workflow before approval, alert every other connected project, and preserve the risk event in an immutable ledger for human review.

## 29. Product Boundary

ChainOps is not a replacement for Canadian procurement systems.

It is a defence procurement assurance layer.

It exists to answer four questions:

1. Who is involved in this project?
2. Which parts, vendors, and contractors are connected?
3. Has anyone or anything been flagged before?
4. Can the audit trail be trusted after the fact?

That is the whole MVP.
