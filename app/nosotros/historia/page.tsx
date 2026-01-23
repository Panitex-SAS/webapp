"use client";

import Link from "next/link";
import nosotrosData from "@/app/data/nosotros.json";
import Breadcrumb from "@/app/components/Breadcrumb";
import { useEffect, useRef } from "react";

interface NosotrosSection {
  id: string;
  name: string;
  image: string;
}

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "2009",
    title: "Fundación y primer gran contrato",
    description: "Se funda Panitex. Ese mismo año ejecuta su primera facturación relevante con Totto, suministrando camisetas a gran escala, consolidando capacidades productivas y logísticas."
  },
  {
    year: "2010",
    title: "Desarrollo de material balístico",
    description: "Inicio de la línea de material balístico, enfocada en chalecos antibalas, marcando la entrada de Panitex al sector de protección y seguridad."
  },
  {
    year: "2011",
    title: "Blindaje vehicular",
    description: "Expansión hacia el blindaje de vehículos, fortaleciendo el conocimiento técnico y normativo en soluciones de protección para contextos de riesgo."
  },
  {
    year: "2016",
    title: "Primer contrato con formación institucional",
    description: "Ejecución del primer contrato con la Escuela de Suboficiales, suministrando dotaciones especializadas y validando la capacidad de cumplimiento en entornos institucionales exigentes."
  },
  {
    year: "2018",
    title: "Primer contrato con la UNP",
    description: "Inicio de operaciones con la Unidad Nacional de Protección (UNP), entregando dotaciones especializadas para comunidades indígenas y abriendo una nueva etapa de impacto social en territorios de alta complejidad."
  },
  {
    year: "2019",
    title: "Línea marítima y fluvial",
    description: "Desarrollo de la línea de transporte marítimo y fluvial, integrando embarcaciones, motores y accesorios para mejorar la movilidad en regiones de difícil acceso."
  },
  {
    year: "2020",
    title: "Blindaje arquitectónico",
    description: "Lanzamiento de la línea de blindaje arquitectónico, incluyendo cerramientos, puertas, ventanas y sistemas electrónicos de protección para personas e instalaciones en riesgo."
  },
  {
    year: "2020–2026",
    title: "Escalamiento territorial",
    description: "Panitex amplía su alcance y llega a más de 120 comunidades indígenas, implementando sistemas integrales de movilidad, comunicación, protección y dotación especializada, consolidando su rol como aliado estratégico del Estado."
  }
];

export default function HistoriaPage() {
  const sections = nosotrosData as NosotrosSection[];
  const timelineRef = useRef<HTMLDivElement>(null);

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
        { label: "Inicio", href: "/" },
        { label: "Nuestra Historia" }
      ]} />
      
      {/* Main Layout: 20% Left Menu + 80% Content */}
      <div className="flex">
        {/* Left Sidebar - 20% - Nosotros Menu */}
        <aside className="w-[20%] p-6 bg-white min-h-screen">
          <h2 className="text-lg font-bold mb-4 text-red-600">Nosotros</h2>
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
                    {sec.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Right Content - 80% */}
        <div className="w-[80%] p-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-6">Nuestra Historia</h1>
          </div>

          {/* Timeline */}
          <div ref={timelineRef} className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-red-200"></div>

            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className="timeline-item group relative pl-20 pb-12 opacity-0 translate-x-5 transition-all duration-700 ease-out"
              >
                {/* Year dot */}
                <div className="absolute left-4 top-2 w-8 h-8 rounded-full bg-red-600 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-150 group-hover:shadow-2xl group-hover:shadow-red-600/50">
                  <div className="w-3 h-3 rounded-full bg-white transition-all duration-300 group-hover:scale-0"></div>
                  <div className="absolute inset-0 rounded-full bg-red-600 animate-ping opacity-0 group-hover:opacity-75"></div>
                </div>

                {/* Connecting bar that grows on hover */}
                <div className="absolute left-12 top-4 h-0.5 bg-red-600 w-0 group-hover:w-7 transition-all duration-300"></div>

                {/* Content card */}
                <div className="relative bg-white rounded-lg shadow-lg p-6 transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105 group-hover:translate-x-2 group-hover:bg-linear-to-br group-hover:from-white group-hover:to-red-50 before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-red-600 before:opacity-0 before:scale-95 group-hover:before:opacity-100 group-hover:before:scale-100 before:transition-all before:duration-300">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-2xl font-bold text-red-600 transition-all duration-300 group-hover:scale-110">{event.year}</span>
                    <span className="text-gray-400 transition-colors duration-300 group-hover:text-red-400">—</span>
                    <h3 className="text-xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-red-700">{event.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">{event.description}</p>
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
