import Link from 'next/link';
import { Check } from 'lucide-react';

const bulletPoints = [
  'Multiple grades (2A–7A) for different applications',
  'OEM / Private Label supported',
  'Export-ready packaging & documentation',
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-muted" id="hero">
      <div className="absolute inset-y-0 right-0 w-1/2 bg-green-gradient opacity-80 blur-3xl" aria-hidden />
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-10 px-4 py-16 md:flex-row md:items-center md:gap-16 md:px-6 lg:px-8 lg:py-20">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-primary ring-1 ring-primary/20">
            Sailtik · Matcha Powder Supplier
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold leading-tight text-slate-900 md:text-4xl lg:text-5xl">
              Matcha Powder Supplier for Global B2B Buyers
            </h1>
            <p className="text-lg text-slate-700 md:text-xl">
              Multiple grades for cafés, brands, distributors, and manufacturers. OEM supported. Consistent quality for repeat orders.
            </p>
          </div>
          <ul className="grid gap-3 text-slate-800 sm:grid-cols-2">
            {bulletPoints.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm md:text-base">
                <span className="mt-1 rounded-full bg-primary/10 p-1 text-primary">
                  <Check className="h-4 w-4" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#contact"
              className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90"
            >
              Get a Quote
            </Link>
            <Link
              href="#grades"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary ring-1 ring-primary/20 transition hover:ring-primary/40"
            >
              View Grades
            </Link>
          </div>
        </div>
        <div className="flex-1">
          <div className="gradient-block relative h-72 w-full overflow-hidden rounded-2xl bg-green-gradient shadow-xl">
            <div className="absolute inset-6 rounded-xl border border-white/30 bg-white/10 backdrop-blur" />
          </div>
        </div>
      </div>
    </section>
  );
}
