import {Link} from "@/i18n/routing";
import Image from "next/image";
import { getTranslations } from 'next-intl/server';
import industriesData from "@locale/data/industries.json";
import projectsData from "@locale/data/projects.json";
import type { Industry, Project } from "@locale/types";
import Breadcrumb from "@locale/components/Breadcrumb";

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id, locale } = await params;
  const localeKey = locale as 'es' | 'en';
  const t = await getTranslations('IndustryDetail');
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
          { label: localeKey === 'es' ? "Inicio" : "Home", href: "/" },
          { label: localeKey === 'es' ? "Industria no encontrada" : "Industry not found" }
        ]} />
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">{localeKey === 'es' ? 'Industria no encontrada' : 'Industry not found'}</h1>
          <Link
            href="/"
            className="text-red-600 hover:text-red-700 underline"
          >
            {localeKey === 'es' ? 'Volver al inicio' : 'Back to home'}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Breadcrumb items={[
        { label: localeKey === 'es' ? "Inicio" : "Home", href: "/" },
        { label: localeKey === 'es' ? "Sistemas de Desarrollo Social" : "Social Development Systems", href: "/industrias" },
        { label: industry.name[localeKey] }
      ]} />
      
      {/* Main Layout: 20% Left Menu + 80% Content */}
      <div className="flex">
        {/* Left Sidebar - 20% - Industries Menu - Hidden on Mobile */}
        <aside className="hidden md:block md:w-[20%] p-6 bg-gray-50 min-h-screen">
          <h2 className="text-lg font-bold mb-4 text-red-600">{localeKey === 'es' ? 'Sistemas de Desarrollo Social' : 'Social Development Systems'}</h2>
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
                    {ind.name[localeKey]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Right Content - 80% on desktop, 100% on mobile */}
        <div className="w-full md:w-[80%] p-4 md:p-8">
          {/* Header Section - Full Width of Right Side */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{industry.name[localeKey]}</h1>
            <p className="text-lg text-gray-600">{industry.description[localeKey]}</p>
          </div>

          {/* Industry Image - Responsive Height */}
          {industry.image && (
            <div className="relative w-full h-64 md:h-125 mb-8 rounded-lg overflow-hidden">
              <Image
                src={industry.image}
                alt={industry.name[localeKey]}
                fill
                sizes="70vw"
                className="object-cover"
              />
            </div>
          )}

          {/* Split Content: Stack on mobile, side-by-side on desktop */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Projects Section - Full width on mobile, 60% on desktop */}
            <div className="w-full md:flex-6">
              <h2 className="text-2xl font-bold mb-6">{t('projectsTitle')}</h2>
              {industryProjects.length === 0 ? (
                <p className="text-gray-600 text-sm">
                  {t('noProjects')}
                </p>
              ) : (
                <div className="space-y-4">
                  {industryProjects.map((project) => (
                    <div
                      key={project.id}
                      className="p-4 border rounded-lg hover:shadow-lg transition-shadow bg-white"
                    >
                      <h3 className="text-lg font-semibold mb-2">{project.name[localeKey]}</h3>
                      <p className="text-gray-600 text-sm mb-3">{project.description[localeKey]}</p>
                      <div className="space-y-1 text-xs text-gray-500">
                        {project.client && (
                          <p>
                            <strong>{t('client')}:</strong> {project.client}
                          </p>
                        )}
                        <p>
                          <strong>{t('year')}:</strong> {project.year}
                        </p>
                        {project.sourceUrl && (
                          <p>
                            <a
                              href={project.sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-red-600 hover:underline"
                            >
                              {t('viewSecop')} →
                            </a>
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Sobre Panitex Section - Below projects on mobile, right side on desktop */}
            <div className="w-full md:flex-2">
              <h2 className="text-2xl font-bold mb-4">{t('aboutPanitex')}</h2>
              <div className="text-sm text-gray-600 space-y-3">
                <h3 className="font-semibold text-base text-gray-800 mb-1">
                  {t('socialResponsibility.title')}</h3>
                <p>
                  {t('socialResponsibility.content')}
                </p>
                <h3 className="font-semibold text-base text-gray-800 mb-1 mt-4">
                  {t('ceo.title')}</h3>
                <p>
                  {t('ceo.content')}
                </p>
                <h3 className="font-semibold text-base text-gray-800 mb-1 mt-4">
                  {t('reliability.title')}</h3>
                <p>
                  {t('reliability.content')}
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
