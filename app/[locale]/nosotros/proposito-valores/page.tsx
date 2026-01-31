"use client";

import { useEffect } from "react";
import {Link} from "../../../../i18n/routing";
import {useLocale, useTranslations} from 'next-intl';
import nosotrosData from "@locale/data/nosotros.json";
import type { LocalizedString } from "@locale/types";
import Breadcrumb from "@locale/components/Breadcrumb";

interface NosotrosSection {
  id: string;
  name: LocalizedString;
  image: string;
}

export default function PropositoValoresPage() {
  const t = useTranslations('PurposeValues');
  const locale = useLocale() as 'es' | 'en';
  const sections = nosotrosData as NosotrosSection[];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
          }
        });
      },
      { threshold: 0.3, rootMargin: "-50px" }
    );

    const sectionElements = document.querySelectorAll(".value-section");
    sectionElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen">
      <Breadcrumb items={[
        { label: locale === 'es' ? "Inicio" : "Home", href: "/" },
        { label: t('breadcrumbLabel') }
      ]} />
      
      {/* Main Layout: 20% Left Menu + 80% Content */}
      <div className="flex">
        {/* Left Sidebar - 20% - Nosotros Menu - Hidden on Mobile */}
        <aside className="hidden md:block md:w-[20%] p-6 bg-white min-h-screen">
          <h2 className="text-lg font-bold mb-4 text-red-600">{locale === 'es' ? 'Nosotros' : 'About Us'}</h2>
          <nav>
            <ul className="space-y-1 pl-4">
              {sections.map((sec) => (
                <li key={sec.id}>
                  <Link
                    href={`/nosotros/${sec.id}`}
                    className={`block py-2 text-sm transition-colors ${
                      sec.id === "proposito-valores"
                        ? "text-red-600 font-semibold underline"
                        : "text-gray-700 hover:text-red-600 hover:underline"
                    }`}
                  >
                    {sec.name[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Right Content - 80% on desktop, 100% on mobile */}
        <div className="w-full md:w-[80%] p-4 md:p-8">
          {/* Header */}
          <div className="mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{t('title')}</h1>
          </div>

          {/* Content */}
          <div className="max-w-full md:max-w-4xl mx-auto space-y-8 md:space-y-12">
            {/* Section 1 */}
            <section className="value-section border-l-4 border-red-600 pl-4 md:pl-8 py-2 opacity-40 transition-all duration-500">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">{t('sections.reliability.title')}</h2>
              <p className="text-lg md:text-xl italic text-gray-500 mb-4 md:mb-6">{t('sections.reliability.subtitle')}</p>
              <div className="text-base md:text-lg text-gray-600 space-y-3 md:space-y-4 leading-relaxed">
                <p>{t('sections.reliability.content')}</p>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t-2 border-gray-200"></div>

            {/* Section 2 */}
            <section className="value-section border-l-4 border-red-600 pl-4 md:pl-8 py-2 opacity-40 transition-all duration-500">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">{t('sections.service.title')}</h2>
              <p className="text-lg md:text-xl italic text-gray-500 mb-4 md:mb-6">{t('sections.service.subtitle')}</p>
              <div className="text-base md:text-lg text-gray-600 space-y-3 md:space-y-4 leading-relaxed">
                <p dangerouslySetInnerHTML={{ __html: t('sections.service.content1') }} />
                <p>{t('sections.service.content2')}</p>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t-2 border-gray-200"></div>

            {/* Section 3 */}
            <section className="value-section border-l-4 border-red-600 pl-4 md:pl-8 py-2 opacity-40 transition-all duration-500">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">{t('sections.excellence.title')}</h2>
              <p className="text-lg md:text-xl italic text-gray-500 mb-4 md:mb-6">{t('sections.excellence.subtitle')}</p>
              <div className="text-base md:text-lg text-gray-600 space-y-3 md:space-y-4 leading-relaxed">
                <p>{t('sections.excellence.content')}</p>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t-2 border-gray-200"></div>


            {/* Section 4 */}
            <section className="value-section border-l-4 border-red-600 pl-4 md:pl-8 py-2 opacity-40 transition-all duration-500">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">{t('sections.ethics.title')}</h2>
              <p className="text-lg md:text-xl italic text-gray-500 mb-4 md:mb-6">{t('sections.ethics.subtitle')}</p>
              <div className="text-base md:text-lg text-gray-600 space-y-3 md:space-y-4 leading-relaxed">
                <p>{t('sections.ethics.content')}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
