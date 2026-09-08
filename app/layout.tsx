import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Raiz Propiedades v2',
  description: 'Landing page for Raiz Propiedades, a trusted Mexico City real estate agency showcasing verified properties, advisory services, experienced agents, and a lead-generation contact flow. The experience will emphasize credibility, local expertise, and premium residential investment opportunities.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#F7F5F0', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
