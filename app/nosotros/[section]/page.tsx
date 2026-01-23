import Link from "next/link";
import Image from "next/image";
import nosotrosData from "@/app/data/nosotros.json";
import Breadcrumb from "@/app/components/Breadcrumb";

interface NosotrosSection {
  id: string;
  name: string;
  image: string;
}

export default async function NosotrosDetailPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const sections = nosotrosData as NosotrosSection[];

  const currentSection = sections.find((sec) => sec.id === section);

  if (!currentSection) {
    return (
      <main className="min-h-screen p-8">
        <Breadcrumb items={[
          { label: "Inicio", href: "/" },
          { label: "Sección no encontrada" }
        ]} />
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Sección no encontrada</h1>
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

  // Content for each section
  const getContent = () => {
    switch (section) {
      case "ceo":
        return (
          <>
            <p>
              Panitex S.A.S se origina en la experiencia de su CEO, con más de 20 años liderando contratos públicos de alta complejidad técnica y logística en Colombia, respaldado por una sólida formación en la industria textil y conocimiento integral de la cadena productiva.
            </p>
            <p>
              En sus inicios, la empresa ejecutó contratos de blindaje vehicular y chalecos antibalas, fortaleciendo capacidades en cumplimiento técnico, control de calidad y logística especializada, lo que permitió su expansión hacia dotaciones especializadas para la Policía Nacional y comunidades indígenas en coordinación con la UNP.
            </p>
            <p>
              Actualmente, Panitex concentra uno de sus principales enfoques en la ejecución de soluciones de transporte marítimo y fluvial para comunidades indígenas remotas, garantizando conectividad, acceso a bienes esenciales y presencia institucional en territorios de difícil acceso.
            </p>
            <p>
              De manera complementaria, la compañía desarrolla proyectos de blindaje arquitectónico y dotaciones especializadas, consolidándose hoy como un proveedor integral de soluciones de movilidad, protección y dotación especializada, con amplio conocimiento del territorio colombiano.
            </p>
          </>
        );
      case "historia":
        return (
          <>
            <p>
              Panitex S.A.S nace de una visión estratégica basada en más de dos décadas de experiencia en la gestión de contratos públicos de alta complejidad en Colombia. Desde sus inicios, la empresa se ha caracterizado por su capacidad de adaptación y su compromiso con la excelencia operativa.
            </p>
            <p>
              Los primeros proyectos de la compañía se centraron en el blindaje vehicular y la fabricación de chalecos antibalas, estableciendo estándares rigurosos en control de calidad y logística especializada. Esta fase inicial permitió consolidar capacidades técnicas fundamentales.
            </p>
            <p>
              Con el tiempo, Panitex expandió su portafolio hacia dotaciones especializadas para instituciones como la Policía Nacional y programas de protección de comunidades indígenas en coordinación con la Unidad Nacional de Protección (UNP).
            </p>
            <p>
              Hoy, la empresa es reconocida por su liderazgo en soluciones de transporte marítimo y fluvial para comunidades remotas, combinando experiencia técnica, conocimiento territorial y compromiso social en cada uno de sus proyectos.
            </p>
          </>
        );
      case "proposito-valores":
        return (
          <>
            <h3 className="font-semibold text-lg text-gray-800 mt-6 mb-2">Nuestro Propósito</h3>
            <p>
              Conectar territorios y comunidades de difícil acceso mediante soluciones integrales de transporte, protección y dotación especializada, garantizando la presencia del Estado y el acceso equitativo a servicios esenciales en todo el territorio colombiano.
            </p>
            
            <h3 className="font-semibold text-lg text-gray-800 mt-6 mb-2">Excelencia e Integridad</h3>
            <p>
              En Panitex, nuestros valores fundamentales guían cada proyecto y decisión que tomamos. Nos comprometemos con la excelencia, la integridad y la innovación en todo lo que hacemos.
            </p>
            
            <h3 className="font-semibold text-lg text-gray-800 mt-6 mb-2">Responsabilidad Social</h3>
            <p>
              Trabajamos con responsabilidad social, asegurando que nuestras soluciones generen un impacto positivo en las comunidades y el entorno donde operamos.
            </p>
            
            <h3 className="font-semibold text-lg text-gray-800 mt-6 mb-2">Transparencia y Respeto</h3>
            <p>
              La transparencia y el respeto son pilares de nuestra cultura organizacional, permitiéndonos construir relaciones duraderas basadas en la confianza mutua.
            </p>
          </>
        );
      default:
        return <p>Contenido no disponible.</p>;
    }
  };

  return (
    <main className="min-h-screen">
      <Breadcrumb items={[
        { label: "Inicio", href: "/" },
        { label: "Nosotros", href: "/nosotros/ceo" },
        { label: currentSection.name }
      ]} />
      
      {/* Main Layout: 20% Left Menu + 80% Content */}
      <div className="flex">
        {/* Left Sidebar - 20% - Nosotros Menu */}
        <aside className="w-[20%] p-6 bg-[rgb(237,241,237)] min-h-screen">
          <h2 className="text-lg font-bold mb-4 text-red-600">Nosotros</h2>
          <nav>
            <ul className="space-y-1 pl-4">
              {sections.map((sec) => (
                <li key={sec.id}>
                  <Link
                    href={`/nosotros/${sec.id}`}
                    className={`block py-2 text-sm transition-colors ${
                      sec.id === section
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
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-6">{currentSection.name}</h1>
          </div>

          {/* Content: Image on left + Text on right */}
          <div className="flex gap-8">
            {/* Image Section - 40% */}
            <div className="flex-[2]">
              <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-xl sticky top-8">
                <Image
                  src={currentSection.image}
                  alt={currentSection.name}
                  fill
                  sizes="40vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text Section - 60% */}
            <div className="flex-[3]">
              <div className="text-lg text-gray-600 space-y-4">
                {getContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const sections = nosotrosData as NosotrosSection[];
  return sections.map((section) => ({
    section: section.id,
  }));
}
