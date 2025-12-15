const packaging = ['Tins', 'Pouches', 'Bulk bags'];
const services = ['Printing', 'Filling', 'Labeling', 'One-stop coordination'];
const steps = ['Requirements', 'Grade selection', 'Pre-production confirmation', 'Production', 'Shipment'];

export default function OEM() {
  return (
    <section id="oem" className="bg-muted py-14 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">OEM / Private Label</p>
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">OEM / Private Label Supported</h2>
            <p className="text-slate-700">
              Packaging and coordination support for brand owners and distributors. No MOQ highlighted.
            </p>
          </div>
          <div className="grid w-full max-w-xl gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase text-slate-900">Packaging options</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {packaging.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase text-slate-900">Services</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {services.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:col-span-2">
              <h3 className="text-sm font-semibold uppercase text-slate-900">Simple process</h3>
              <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-700">
                {steps.map((step, idx) => (
                  <div key={step} className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                    {idx < steps.length - 1 && <span className="text-slate-400">→</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
