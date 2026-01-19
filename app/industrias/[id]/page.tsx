import Link from "next/link";
import industriesData from "@/app/data/industries.json";
import projectsData from "@/app/data/projects.json";
import type { Industry, Project } from "@/app/types";

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const industries = industriesData as Industry[];
  const projects = projectsData as Project[];

  const industry = industries.find((ind) => ind.id === id);
  const industryProjects = projects.filter(
    (project) => project.industryId === id
  );

  if (!industry) {
    return (
      <main className="min-h-screen p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Industria no encontrada</h1>
          <Link
            href="/"
            className="text-red-600 hover:text-red-700 underline"
          >
            Volver al inicio
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{industry.name}</h1>
        <p className="text-lg text-gray-600 mb-8">{industry.description}</p>

        <h2 className="text-3xl font-bold mb-6">Proyectos</h2>
        {industryProjects.length === 0 ? (
          <p className="text-gray-600">
            No hay proyectos disponibles para esta industria.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryProjects.map((project) => (
              <div
                key={project.id}
                className="p-6 border rounded-lg hover:shadow-lg transition-shadow bg-white"
              >
                <h3 className="text-xl font-semibold mb-3">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="space-y-1 text-sm text-gray-500">
                  <p>
                    <strong>Cliente:</strong> {project.client}
                  </p>
                  <p>
                    <strong>Año:</strong> {project.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const industries = industriesData as Industry[];
  return industries.map((industry) => ({
    id: industry.id,
  }));
}
