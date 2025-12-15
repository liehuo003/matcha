const bulletPoints = [
  'Shade-grown style cultivation',
  'Steamed & dried',
  'Fine milling',
  'Quality control for color, taste, and fineness',
];

export default function Quality() {
  return (
    <section id="quality" className="bg-white py-14 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Quality & Process</p>
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Consistency for repeat orders</h2>
            <p className="text-slate-700">
              Factual process descriptions suited for B2B buyers who need reliability and traceability.
            </p>
          </div>
          <div className="grid gap-3 rounded-2xl border border-slate-200 bg-muted p-6 shadow-sm">
            {bulletPoints.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
                <p className="text-sm text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
