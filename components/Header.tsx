'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Products', href: '#products' },
  { label: 'Grades & Uses', href: '#grades' },
  { label: 'OEM', href: '#oem' },
  { label: 'Compliance', href: '#compliance' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        <Link href="#" className="text-xl font-semibold text-primary">
          Sailtik
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="transition hover:text-primary">
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="rounded-full bg-primary px-4 py-2 text-white shadow-sm transition hover:bg-primary/90"
          >
            Get a Quote
          </Link>
        </nav>
        <button
          className="inline-flex items-center rounded-md p-2 text-slate-700 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-700 transition hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex w-fit rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
