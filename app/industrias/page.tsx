import industriesData from "@/app/data/industries.json";

interface Industry {
  id: string;
  name: string;
  description: string;
  image?: string;
}

export default function IndustriasPage() {
  const industries = industriesData as Industry[];

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Industrias</h1>
        <section className="space-y-6">
          <p className="text-lg">
            Placeholder: Experiencia en contratos con diferentes industrias.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-semibold mb-3">{industry.name}</h2>
                <p>{industry.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
