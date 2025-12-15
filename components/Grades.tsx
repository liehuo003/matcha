const grades = [
  { grade: '2A', uses: 'Baking, smoothies, everyday food' },
  { grade: '3A', uses: 'Café drinks, matcha latte, versatile manufacturing' },
  { grade: '4A', uses: 'Entry ceremonial-style, premium drinks & retail blends' },
  { grade: '5A', uses: 'High ceremonial-style, high-end beverages & branded retail tins' },
  { grade: '6A', uses: 'Top ceremonial-style, premium cafés & boutique brands' },
  { grade: '7A', uses: 'Ultra-premium ceremonial-style, luxury tea brands & gift products' },
];

export default function Grades() {
  return (
    <section id="grades" className="bg-muted py-14 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Grades & Uses</p>
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Grades aligned to applications</h2>
          <p className="text-slate-700">Choose based on flavor profile, color, and application.</p>
        </div>
        <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="hidden grid-cols-8 bg-slate-50 px-6 py-3 text-sm font-semibold text-slate-700 md:grid">
            <div className="col-span-2">Grade</div>
            <div className="col-span-6">Suggested uses</div>
          </div>
          <div className="divide-y divide-slate-200">
            {grades.map((item) => (
              <div
                key={item.grade}
                className="grid grid-cols-1 gap-2 px-6 py-4 md:grid-cols-8 md:items-center"
              >
                <div className="col-span-2 text-base font-semibold text-primary">{item.grade}</div>
                <div className="col-span-6 text-sm text-slate-700">{item.uses}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 text-sm text-slate-800">
          Tell us your use case →{' '}
          <a
            href="#contact"
            className="font-semibold text-primary underline-offset-4 hover:underline"
          >
            we’ll recommend grades.
          </a>
        </div>
      </div>
    </section>
  );
}
