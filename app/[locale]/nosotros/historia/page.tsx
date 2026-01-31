"use client";

import {Link} from "../../../../i18n/routing";
import {useLocale, useTranslations} from 'next-intl';
import nosotrosData from "@locale/data/nosotros.json";
import type { LocalizedString } from "@locale/types";
import Breadcrumb from "@locale/components/Breadcrumb";
import { useEffect, useRef } from "react";

interface NosotrosSection {
  id: string;
  name: LocalizedString;
  image: string;
}

export default function HistoriaPage() {
  const t = useTranslations('Historia');
  const locale = useLocale() as 'es' | 'en';
  const sections = nosotrosData as NosotrosSection[];
  const timelineRef = useRef<HTMLDivElement>(null);

  const timelineEvents = [
    { year: "2009", title: t('events.2009.title'), description: t('events.2009.description') },
    { year: "2010", title: t('events.2010.title'), description: t('events.2010.description') },
    { year: "2011", title: t('events.2011.title'), description: t('events.2011.description') },
    { year: "2016", title: t('events.2016.title'), description: t('events.2016.description') },
    { year: "2018", title: t('events.2018.title'), description: t('events.2018.description') },
    { year: "2019", title: t('events.2019.title'), description: t('events.2019.description') },
    { year: "2020", title: t('events.2020.title'), description: t('events.2020.description') },
    { year: "2020–2026", title: t('events.2020-2026.title'), description: t('events.2020-2026.description') },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("timeline-item-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = timelineRef.current?.querySelectorAll(".timeline-item");
    items?.forEach((item) => observer.observe(item));

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
                      sec.id === "historia"
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

          {/* Timeline */}
          <div ref={timelineRef} className="relative max-w-full md:max-w-4xl mx-auto pr-6 md:pr-0">
            {/* Vertical line - Adjusted position for mobile */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-red-200"></div>

            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className="timeline-item group relative pl-12 md:pl-20 pb-8 md:pb-12 opacity-0 translate-x-5 transition-all duration-700 ease-out"
              >
                {/* Year dot - Smaller on mobile */}
                <div className="absolute left-2 md:left-4 top-2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-red-600 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-125 md:group-hover:scale-150 group-hover:shadow-2xl group-hover:shadow-red-600/50">
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white transition-all duration-300 group-hover:scale-0"></div>
                  <div className="absolute inset-0 rounded-full bg-red-600 animate-ping opacity-0 group-hover:opacity-75"></div>
                </div>

                {/* Connecting bar that grows on hover - Hidden on mobile */}
                <div className="hidden md:block absolute left-12 top-4 h-0.5 bg-red-600 w-0 group-hover:w-7 transition-all duration-300"></div>

                {/* Content card - Optimized for mobile */}
                <div className="relative bg-white rounded-lg shadow-lg p-4 md:p-6 transition-all duration-300 group-hover:shadow-2xl md:group-hover:scale-105 md:group-hover:translate-x-2 group-hover:bg-linear-to-br group-hover:from-white group-hover:to-red-50 before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-red-600 before:opacity-0 before:scale-95 group-hover:before:opacity-100 group-hover:before:scale-100 before:transition-all before:duration-300">
                  <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-3 mb-2 md:mb-3">
                    <span className="text-xl md:text-2xl font-bold text-red-600 transition-all duration-300 group-hover:scale-110">{event.year}</span>
                    <span className="hidden md:inline text-gray-400 transition-colors duration-300 group-hover:text-red-400">—</span>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-red-700">{event.title}</h3>
                  </div>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .timeline-item-visible {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
      `}</style>
    </main>
  );
}
