import { notFound } from "next/navigation";

import DocumentWorkflowPage from "@/components/chainops/DocumentWorkflowPage";
import { getChainOpsData } from "@/lib/chainops/jsonStore";

export default async function ChainOpsDocumentPage({
  params,
}: {
  params: Promise<{ docId: string }>;
}) {
  const { docId } = await params;
  const data = await getChainOpsData();
  const document = data.documents.find((candidate) => candidate.id === docId);

  if (!document) {
    notFound();
  }

  const organization = data.organizations.find(
    (candidate) => candidate.id === document.organizationId,
  );
  const workflow = data.workflows.find(
    (candidate) => candidate.id === document.workflowId,
  );
  const project = workflow
    ? data.projects.find((candidate) => candidate.id === workflow.projectId)
    : undefined;

  if (!organization || !workflow || !project) {
    notFound();
  }

  return (
    <DocumentWorkflowPage
      document={document}
      ledgerEvents={data.ledgerEvents}
      organization={organization}
      project={project}
      projects={data.projects}
      vendors={data.vendors}
      workflow={workflow}
    />
  );
}
