'use client';
import { Footer, Navbar } from '@/components';
import './globals.css';
import MainLoader from '@/components/MainLoader';
import { useEffect, useMemo, useState } from 'react';
import useBlobity from 'blobity/lib/react/useBlobity';

export default function RootLayout({ children }) {
  const [percent, setPercent] = useState(0);
  const options = useMemo(
    () => ({
      color: 'rgb(255, 0, 0)',
      dotColor: 'rgb(255, 0, 0)',
      zIndex: 500,
      opacity: 0.1,
      licenseKey: 'jsmastery',
      focusableElements: 'none',
      size: 30,
      dotSize: 6,
    }),
    []
  );
  useBlobity(options);
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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Pare India, Category:Innovative Designs, Owner:Pare India"
        />
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
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Pare India, Category:Innovative Designs, Owner:Pare India"
      />
      <title>Pare India</title>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
