const documents = [
  'COA / Specification',
  'Microbiological test (upon request)',
  'Pesticide residue test (upon request)',
  'Other documents as required by destination market',
];

export default function Compliance() {
  return (
    <section id="compliance" className="bg-white py-14 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Compliance & Documentation</p>
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Compliance & Documentation</h2>
          <p className="text-slate-700">
            COA, product specifications, and relevant certificates available upon request.
          </p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {documents.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-muted p-5 text-sm text-slate-800 shadow-sm">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
