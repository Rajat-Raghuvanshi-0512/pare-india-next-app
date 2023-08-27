'use client';
import { Footer, Navbar } from '@/components';
import './globals.css';
import { Inter } from 'next/font/google';
import MainLoader from '@/components/MainLoader';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const [percent, setPercent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (percent <= 100) {
        setPercent((prev) => prev + 1);
      }
    }, 10);
    return () => clearInterval(interval);
  }, [percent]);

  if (percent <= 100) {
    return (
      <html lang="en">
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Pare India</title>
        <body>
          <MainLoader percent={percent} />
        </body>
      </html>
    );
  }
  return (
    <html lang="en">
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Pare India</title>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
