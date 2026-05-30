import { notFound } from "next/navigation";

import OrganizationWorkspace from "@/components/chainops/OrganizationWorkspace";
import { getChainOpsData } from "@/lib/chainops/jsonStore";

export default async function OrganizationPage({
  params,
}: {
  params: Promise<{ orgId: string }>;
}) {
  const { orgId } = await params;
  const { organizations, documents, projects, vendors, ledgerEvents } =
    await getChainOpsData();
  const organization = organizations.find((candidate) => candidate.id === orgId);

  if (!organization) {
    notFound();
  }

  const organizationDocuments = documents.filter(
    (document) => document.organizationId === organization.id,
  );
  const organizationProjects = projects.filter(
    (project) => project.organizationId === organization.id,
  );

  return (
    <OrganizationWorkspace
      documents={organizationDocuments}
      ledgerEvents={ledgerEvents}
      organization={organization}
      projects={organizationProjects}
      vendors={vendors}
    />
  );
}
