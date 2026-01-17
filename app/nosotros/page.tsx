export default function NosotrosPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Nosotros</h1>
        <section className="space-y-4">
          <p className="text-lg">
            Placeholder: Información sobre Panitex, nuestra historia y misión.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 border rounded-lg">
              <h2 className="text-2xl font-semibold mb-3">Nuestra Historia</h2>
              <p>Contenido de historia pendiente...</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h2 className="text-2xl font-semibold mb-3">Nuestra Misión</h2>
              <p>Contenido de misión pendiente...</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
