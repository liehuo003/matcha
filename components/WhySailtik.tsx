const reasons = [
  'Focused on matcha powder only',
  'Clear grade system for different applications',
  'B2B export experience',
  'Consistent quality for repeat orders',
  'OEM support for brand owners',
  'Responsive communication',
];

export default function WhySailtik() {
  return (
    <section id="why" className="bg-white py-14 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Why Sailtik</p>
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Built for B2B buyers</h2>
          <p className="text-slate-700">Focused positioning, OEM readiness, and consistent supply.</p>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-muted p-5 text-sm font-medium text-slate-900 shadow-sm">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
