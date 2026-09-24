import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aneis',
  description: 'Verified college communities. Trusted access. Secure connections.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
