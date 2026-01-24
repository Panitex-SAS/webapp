import Link from "next/link";
import Image from "next/image";
import nosotrosData from "@/app/data/nosotros.json";
import Breadcrumb from "@/app/components/Breadcrumb";

interface NosotrosSection {
  id: string;
  name: string;
  image: string;
}

export default function CEOPage() {
  const sections = nosotrosData as NosotrosSection[];

  return (
    <main className="min-h-screen">
      <Breadcrumb items={[
        { label: "Inicio", href: "/" },
        { label: "Nuestro CEO" }
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
                      sec.id === "ceo"
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
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-6">Nuestro CEO</h1>
          </div>

          {/* Content: Full width layout */}
          <div className="max-w-5xl mx-auto space-y-8">
            {/* First Paragraph */}
            <div className="text-lg text-gray-600 leading-relaxed">
              <p>
                René Silva lidera hoy a Panitex como su fundador y CEO, dirigiendo la estrategia y la ejecución de proyectos de alta complejidad para el sector público. Con más de 30 años de experiencia en contratación pública y privada, ha sido responsable de la ejecución de más de 60 contratos públicos, además de atender a 127 comunidades indígenas tras la integración de movilidad fluvial y marítima, protección, comunicaciones y dotaciones especializadas en territorios de difícil acceso.
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
                El principio rector de René sigue siendo el mismo que ha guiado toda su trayectoria: &quot;Ser confiables, siempre&quot;. Para él, liderar Panitex significa asumir que cada contrato ejecutado impacta vidas, instituciones y comunidades. Por eso, la confianza no es solo un valor corporativo: es la base sobre la cual se construyen relaciones duraderas con el Estado, proveedores y con los territorios que más lo necesitan.
              </p>
              <p>
                Formado en el sector textil desde sus cimientos, René Silva desarrolló su carrera entendiendo que <strong>la confianza no es un discurso, sino un resultado</strong>. Su experiencia abarcó toda la cadena productiva textil y la dirección de equipos comerciales en compañías líderes del país. Este recorrido le permitió comprender cómo estructurar operaciones eficientes, cumplir estándares técnicos exigentes y responder con precisión a contratos de alta responsabilidad institucional.
              </p>
              <p>
                A esta experiencia se suma una amplia exposición internacional a lo largo de su carrera empresarial, que ha permitido a René desarrollar una <strong>capacidad de reconocimiento de patrones</strong> operativos, culturales y logísticos. Esta habilidad le ha facilitado adaptar soluciones, anticipar riesgos y tomar decisiones informadas en contextos diversos, trasladando aprendizajes globales a realidades locales complejas.
              </p>
              <p>
                Hoy, René Silva entiende el desarrollo social no como un discurso, sino como un resultado medible de una ejecución bien hecha. Su liderazgo se centra en construir equipos, procesos y relaciones institucionales que permitan cumplir lo pactado, incluso en los escenarios más exigentes. Ese enfoque ha definido la cultura de Panitex desde su origen y sigue siendo el centro de la confiabilidad que caracteriza a la empresa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
