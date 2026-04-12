import './globals.css'
import Script from 'next/script'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsApp from '@/components/WhatsApp'
import CookieConsent from '@/components/CookieConsent'

const GA_ID = 'G-LV0BX0J38H'

const BASE_URL = 'https://blaubatch.com'

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Blau Batch | Masterbatch Manufacturer & Distributor — Egypt & MENA',
    template: '%s | Blau Batch',
  },
  description: 'Blau Batch manufactures Filler Masterbatch (FMPE & FMPP) and distributes the complete Coraplast range — White, Black, Colour, and Additive Masterbatch — across MENA and Europe.',
  keywords: [
    'masterbatch', 'filler masterbatch', 'FMPE', 'FMPP', 'calcium carbonate masterbatch',
    'white masterbatch', 'black masterbatch', 'colour masterbatch', 'additive masterbatch',
    'Coraplast distributor', 'masterbatch Egypt', 'masterbatch MENA', 'CaCO3 masterbatch',
    'plastic additives Egypt', 'masterbatch manufacturer Egypt',
  ],
  authors: [{ name: 'Blau Batch Trading & Distribution Co.' }],
  creator: 'Blau Batch',
  publisher: 'Blau Batch',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Blau Batch',
    title: 'Blau Batch | Masterbatch Manufacturer & Distributor — Egypt & MENA',
    description: 'Blau Batch manufactures Filler Masterbatch and distributes the complete Coraplast range across MENA and Europe. Quote within 24 hours.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blau Batch | Masterbatch Manufacturer & Distributor — Egypt & MENA',
    description: 'Blau Batch manufactures Filler Masterbatch and distributes the complete Coraplast range across MENA and Europe.',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/logo-mark.png',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: 'Blau Batch Trading & Distribution Co.',
      alternateName: 'Blau Batch',
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logo-mark.png`,
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+20-102-222-7723',
        contactType: 'sales',
        email: 'info@blaubatch.com',
        areaServed: ['EG', 'SA', 'AE', 'JO', 'LY', 'EU'],
        availableLanguage: ['English', 'Arabic'],
      },
      sameAs: [
        'https://linkedin.com/company/blaubatch',
        'https://www.facebook.com/profile.php?id=61553290265555',
        'https://www.instagram.com/blaubatch/',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${BASE_URL}/#localbusiness`,
      name: 'Blau Batch Trading & Distribution Co.',
      description: 'Manufacturer of Filler Masterbatch and authorised distributor of the Coraplast masterbatch range across MENA and Europe.',
      url: BASE_URL,
      telephone: '+20-102-222-7723',
      email: 'info@blaubatch.com',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Arkan Plaza, Building 4, 4th Floor',
        addressLocality: 'Sheikh Zayed City, Giza',
        addressCountry: 'EG',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 30.0131,
        longitude: 30.9638,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '09:00',
        closes: '17:00',
      },
    },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <WhatsApp />
        <Footer />
        <CookieConsent />

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { page_path: window.location.pathname });
          `}
        </Script>
      </body>
    </html>
  )
}
