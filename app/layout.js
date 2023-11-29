import { ContactFloatBtn, Footer, Navbar } from '@/components';
import './globals.css';

export default function RootLayout({ children }) {
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
        <ContactFloatBtn />
        <Footer />
      </body>
    </html>
  );
}
