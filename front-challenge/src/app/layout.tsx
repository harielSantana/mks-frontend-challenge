// RootLayout.tsx
import { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import React from 'react';

import './clean.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MKS - Store',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
          {children}
      </body>
    </html>
  );
}
