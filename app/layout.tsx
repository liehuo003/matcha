import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sailtik | Matcha Powder Supplier for B2B Wholesale & OEM',
  description:
    'Matcha powder supplier for cafés, brands, distributors, and manufacturers. Multiple grades, OEM support, export-ready documentation.',
  openGraph: {
    title: 'Sailtik | Matcha Powder Supplier for B2B Wholesale & OEM',
    description:
      'Matcha powder supplier for cafés, brands, distributors, and manufacturers. Multiple grades, OEM support, export-ready documentation.',
    url: 'https://sailtik.com',
    siteName: 'Sailtik',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-slate-900 antialiased">{children}</body>
    </html>
  );
}
