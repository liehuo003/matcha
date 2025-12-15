const products = [
  {
    title: 'Ceremonial-style grades',
    description: 'Fine texture and vibrant color suited for premium tea service and retail blends.',
  },
  {
    title: 'Café & beverage grades',
    description: 'Balanced flavor for lattes, matcha bars, and beverage programs that need consistency.',
  },
  {
    title: 'Food & baking grades',
    description: 'Formulated for stability in baking, confectionery, and manufacturing applications.',
  },
  {
    title: 'Custom blends (on request)',
    description: 'Tailored profiles for specific product lines or regional preferences.',
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-white py-14 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Products</p>
          <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Matcha powder focus</h2>
          <p className="text-slate-700">
            We focus on matcha powder only, with a grade system suitable for different use cases.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {products.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
