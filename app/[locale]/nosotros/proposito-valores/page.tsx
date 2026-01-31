"use client";

import { useEffect } from "react";
import Link from "next/link";
import nosotrosData from "../../data/nosotros.json";
import Breadcrumb from "../../components/Breadcrumb";

interface NosotrosSection {
  id: string;
  name: string;
  image: string;
}

export default function PropositoValoresPage() {
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
        { label: "Inicio", href: "/" },
        { label: "Nuestro Propósito y Valores" }
      ]} />
      
      {/* Main Layout: 20% Left Menu + 80% Content */}
      <div className="flex">
        {/* Left Sidebar - 20% - Nosotros Menu - Hidden on Mobile */}
        <aside className="hidden md:block md:w-[20%] p-6 bg-white min-h-screen">
          <h2 className="text-lg font-bold mb-4 text-red-600">Nosotros</h2>
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
                    {sec.name}
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
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Nuestro Propósito y Valores</h1>
          </div>

          {/* Content */}
          <div className="max-w-full md:max-w-4xl mx-auto space-y-8 md:space-y-12">
            {/* Section 1 */}
            <section className="value-section border-l-4 border-red-600 pl-4 md:pl-8 py-2 opacity-40 transition-all duration-500">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">Ser confiables, siempre</h2>
              <p className="text-lg md:text-xl italic text-gray-500 mb-4 md:mb-6">Coherencia, cumplimiento y responsabilidad</p>
              <div className="text-base md:text-lg text-gray-600 space-y-3 md:space-y-4 leading-relaxed">
                <p>
                  La confianza no se declara, se demuestra. La construimos cumpliendo lo acordado, respetando la normativa y respondiendo por cada decisión que tomamos. En entornos de alta exigencia institucional, la coherencia entre lo que se promete y lo que se entrega es esencial. Asumimos la responsabilidad integral de cada contrato, coordinando proveedores, equipos y territorios —incluidos aliados locales— con un único objetivo: cumplir, sin excusas, con quienes confían en nosotros.
                </p>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t-2 border-gray-200"></div>

            {/* Section 2 */}
            <section className="value-section border-l-4 border-red-600 pl-4 md:pl-8 py-2 opacity-40 transition-all duration-500">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">Servir donde más se necesita</h2>
              <p className="text-lg md:text-xl italic text-gray-500 mb-4 md:mb-6">La infraestructura como responsabilidad social</p>
              <div className="text-base md:text-lg text-gray-600 space-y-3 md:space-y-4 leading-relaxed">
                <p>
                  Entendemos la infraestructura como un deber con la sociedad y una forma concreta de ejercer lo público. En <strong>Panitex</strong>, cada sistema que implementamos —movilidad marítima y fluvial, protección, comunicaciones o dotaciones especializadas— busca reducir brechas en territorios donde el acceso, la seguridad y la presencia institucional son limitados. Servir donde más se necesita implica ejecutar con rigor, respeto por las personas y comprensión del territorio, generando soluciones que fortalecen el tejido social y la acción del Estado.
                </p>
                <p>
                  Cuando el contexto lo permite, articulamos nuestro trabajo con proveedores locales —incluidos astilleros regionales y comunitarios— para fortalecer capacidades productivas y asegurar soluciones pertinentes y sostenibles.
                </p>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t-2 border-gray-200"></div>

            {/* Section 3 */}
            <section className="value-section border-l-4 border-red-600 pl-4 md:pl-8 py-2 opacity-40 transition-all duration-500">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">Ejecutar con excelencia</h2>
              <p className="text-lg md:text-xl italic text-gray-500 mb-4 md:mb-6">Hacer las cosas bien, incluso bajo presión</p>
              <div className="text-base md:text-lg text-gray-600 space-y-3 md:space-y-4 leading-relaxed">
                <p>
                  La excelencia no es una promesa, es una disciplina. Operamos en contextos donde la complejidad técnica, la distancia y el riesgo exigen precisión, planificación y consistencia. Ejecutar con excelencia significa anticipar escenarios, coordinar múltiples actores y cumplir con estándares técnicos y normativos sin desviaciones. Integrar capacidades locales y especializadas —desde logística hasta producción— nos permite responder con eficacia en territorios de alta complejidad y entregar resultados confiables, aun bajo condiciones exigentes.
                </p>
              </div>
            </section>

            {/* Divider */}
            <div className="border-t-2 border-gray-200"></div>


            {/* Section 4 */}
            <section className="value-section border-l-4 border-red-600 pl-4 md:pl-8 py-2 opacity-40 transition-all duration-500">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">Actuar con ética y transparencia</h2>
              <p className="text-lg md:text-xl italic text-gray-500 mb-4 md:mb-6">Integridad sin atajos</p>
              <div className="text-base md:text-lg text-gray-600 space-y-3 md:space-y-4 leading-relaxed">
                <p>
                  Cada decisión que tomamos está guiada por principios claros de legalidad, integridad y apertura. Operamos con total transparencia, especialmente en entornos de contratación pública donde la confianza es un activo que debe protegerse. Rechazamos los atajos, los conflictos de interés y las prácticas opacas. Actuar con ética es una responsabilidad individual y colectiva que se refleja en cómo contratamos, ejecutamos y rendimos cuentas, incluyendo la relación clara y responsable con proveedores y aliados en territorio.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
