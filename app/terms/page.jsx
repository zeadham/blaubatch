export const metadata = {
  title: 'Terms & Conditions | Blau Batch',
  description: 'Blau Batch Terms & Conditions — governing the supply of masterbatch products and services. Covers orders, pricing, delivery, quality, and liability.',
  alternates: { canonical: 'https://blaubatch.com/terms' },
  robots: { index: false },
  openGraph: {
    title: 'Terms & Conditions | Blau Batch',
    description: 'Terms governing the supply of masterbatch products and services by Blau Batch Trading & Distribution Co.',
    url: 'https://blaubatch.com/terms',
  },
}

import Terms from '@/components/pages/Terms'
export default function Page() { return <Terms /> }
