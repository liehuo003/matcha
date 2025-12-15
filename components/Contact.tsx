'use client';

import { useState } from 'react';

const monthlyUsage = ['1–5 kg', '5–10 kg', '10–20 kg', '20–50 kg', '50+ kg'];
const interestOptions = ['Bulk', 'OEM', 'Café supply', 'Distribution'];

type FormState = {
  fullName: string;
  company: string;
  email: string;
  country: string;
  usage: string;
  interests: string[];
  message: string;
};

const initialForm: FormState = {
  fullName: '',
  company: '',
  email: '',
  country: '',
  usage: '',
  interests: [],
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const toggleInterest = (interest: string) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Request failed');

      setStatus('success');
      setForm(initialForm);
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-muted py-14 md:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Contact</p>
            <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Tell us your use case</h2>
            <p className="text-slate-700">
              Send a short brief and we’ll respond within 1 business day with grade suggestions and next steps.
            </p>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase text-slate-900">Other ways to reach us</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>Email: <a className="font-semibold text-primary" href="mailto:sales@sailtik.com">sales@sailtik.com</a></li>
                <li>WhatsApp: <a className="font-semibold text-primary" href="https://wa.me/1234567890">Chat on WhatsApp</a></li>
              </ul>
            </div>
            {status === 'success' && (
              <div className="rounded-xl border border-green-200 bg-white p-4 text-sm text-primary shadow-sm">
                Thanks! We’ll get back within 1 business day.
              </div>
            )}
            {status === 'error' && (
              <div className="rounded-xl border border-red-200 bg-white p-4 text-sm text-red-600 shadow-sm">
                Something went wrong. Please try again.
              </div>
            )}
          </div>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-800" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/30"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-800" htmlFor="company">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  required
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/30"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-800" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/30"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-800" htmlFor="country">
                  Country/Region
                </label>
                <input
                  id="country"
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  required
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/30"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-slate-800" htmlFor="usage">
                  Monthly Usage
                </label>
                <select
                  id="usage"
                  name="usage"
                  value={form.usage}
                  onChange={handleChange}
                  required
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/30"
                >
                  <option value="">Select</option>
                  {monthlyUsage.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-800">Interested In</span>
                <div className="grid grid-cols-2 gap-2 text-sm text-slate-800">
                  {interestOptions.map((option) => (
                    <label key={option} className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 shadow-sm">
                      <input
                        type="checkbox"
                        checked={form.interests.includes(option)}
                        onChange={() => toggleInterest(option)}
                        className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary/40"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-800" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary/30"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === 'submitting' ? 'Sending...' : 'Send Inquiry'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
