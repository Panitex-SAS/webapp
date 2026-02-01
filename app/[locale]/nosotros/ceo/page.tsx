"use client";

import {Link} from "../../../../i18n/routing";
import Image from "next/image";
import {useTranslations, useLocale} from 'next-intl';
import nosotrosData from "@locale/data/nosotros.json";
import type { LocalizedString } from "@locale/types";
import Breadcrumb from "@locale/components/Breadcrumb";

interface NosotrosSection {
  id: string;
  name: LocalizedString;
  image: string;
}

export default function CEOPage() {
  const t = useTranslations('CEO');
  const locale = useLocale() as 'es' | 'en';
  const sections = nosotrosData as NosotrosSection[];

  return (
    <main className="min-h-screen">
      <Breadcrumb items={[
        { label: locale === 'es' ? "Inicio" : "Home", href: "/" },
        { label: t('title') }
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
                      sec.id === "ceo"
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
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-6">{t('title')}</h1>
          </div>

          {/* Content: Full width layout */}
          <div className="max-w-5xl mx-auto space-y-8">
            {/* First Paragraph */}
            <div className="text-lg text-gray-600 leading-relaxed">
              <p>
                {t('intro')}
              </p>
            </div>

            {/* Horizontal Photo */}
            <div className="relative w-full h-64 md:h-125 shadow-xl">
              <Image
                src="/images/nosotros/rene_silva.png"
                alt="René Silva - CEO de Panitex"
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-cover rounded-lg"
                style={{ objectPosition: 'center calc(50% + 20px)' }}
              />
            </div>

            {/* Remaining Paragraphs */}
            <div className="text-lg text-gray-600 space-y-6 leading-relaxed">
              <p>
                {t('principle')}
              </p>
              <p>
                {t.rich('formation', {
                  b: (chunks) => <strong>{chunks}</strong>,
                  br: () => <br />,
                })}
              </p>
              <p>
                {t.rich('international', {
                  b: (chunks) => <strong>{chunks}</strong>,
                  br: () => <br />,
                })}
              </p>
              <p>
                {t('leadership')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
