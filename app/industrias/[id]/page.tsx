import Link from "next/link";
import Image from "next/image";
import industriesData from "@/app/data/industries.json";
import projectsData from "@/app/data/projects.json";
import type { Industry, Project } from "@/app/types";
import Breadcrumb from "@/app/components/Breadcrumb";

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
        <Breadcrumb items={[
          { label: "Inicio", href: "/" },
          { label: "Industria no encontrada" }
        ]} />
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
    <main className="min-h-screen">
      <Breadcrumb items={[
        { label: "Inicio", href: "/" },
        { label: "Sistemas de Desarrollo Social", href: "/industrias" },
        { label: industry.name }
      ]} />
      
      {/* Main Layout: 20% Left Menu + 80% Content */}
      <div className="flex">
        {/* Left Sidebar - 20% - Industries Menu */}
        <aside className="w-[20%] p-6 bg-gray-50 min-h-screen">
          <h2 className="text-lg font-bold mb-4 text-red-600">Sistemas de Desarrollo Social</h2>
          <nav>
            <ul className="space-y-1 pl-4">
              {industries.map((ind) => (
                <li key={ind.id}>
                  <Link
                    href={`/industrias/${ind.id}`}
                    className={`block py-2 text-sm transition-colors ${
                      ind.id === id
                        ? "text-red-600 font-semibold underline"
                        : "text-gray-700 hover:text-red-600 hover:underline"
                    }`}
                  >
                    {ind.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Right Content - 80% */}
        <div className="w-[80%] p-8">
          {/* Header Section - Full Width of Right Side */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{industry.name}</h1>
            <p className="text-lg text-gray-600">{industry.description}</p>
          </div>

          {/* Industry Image - Full Width of Right Side */}
          {industry.image && (
            <div className="relative w-full h-125 mb-8 rounded-lg overflow-hidden">
              <Image
                src={industry.image}
                alt={industry.name}
                fill
                sizes="70vw"
                className="object-cover"
              />
            </div>
          )}

          {/* Split Content: 40% Projects + 30% Valores */}
          <div className="flex gap-8">
            {/* Center Section - 40% of Full Page (57% of 70%) */}
            <div className="flex-6">
              <h2 className="text-2xl font-bold mb-6">Proyectos</h2>
              {industryProjects.length === 0 ? (
                <p className="text-gray-600 text-sm">
                  No hay proyectos disponibles para esta industria.
                </p>
              ) : (
                <div className="space-y-4">
                  {industryProjects.map((project) => (
                    <div
                      key={project.id}
                      className="p-4 border rounded-lg hover:shadow-lg transition-shadow bg-white"
                    >
                      <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                      <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                      <div className="space-y-1 text-xs text-gray-500">
                        {project.client && (
                          <p>
                            <strong>Cliente:</strong> {project.client}
                          </p>
                        )}
                        <p>
                          <strong>Año:</strong> {project.year}
                        </p>
                        {project.sourceUrl && (
                          <p>
                            <a
                              href={project.sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-red-600 hover:underline"
                            >
                              Ver en SECOP →
                            </a>
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Right Section - 30% of Full Page (43% of 70%) */}
            <div className="flex-2">
              <h2 className="text-2xl font-bold mb-4">Valores Organizacionales</h2>
              <div className="text-sm text-gray-600 space-y-3">
                <h3 className="font-semibold text-base text-gray-800 mb-1">
                  Responsabilidad social en Panitex</h3>
                <p>
                  Desde los sistemas que implementamos hasta la forma en que los ejecutamos, <b>Panitex</b> trabaja para fortalecer el desarrollo social en territorios de alta complejidad.
                </p>
                <h3 className="font-semibold text-base text-gray-800 mb-1 mt-4">
                  Conoce a nuestro CEO</h3>
                <p>
                  René Silva cuenta con más de 30 años de experiencia en contratación pública y privada. Su trayectoria guiada siempre por el mismo dictum: “Ser confiables, siempre”.
                </p>
                <h3 className="font-semibold text-base text-gray-800 mb-1 mt-4">
                  Ser confiables, siempre</h3>
                <p>
                  La confiabilidad se construye cumpliendo. En Panitex, honramos cada compromiso mediante una ejecución rigurosa, el respeto por la normativa y la responsabilidad total sobre los resultados.
                </p>
              </div>
            </div>
          </div>
        </div>
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
