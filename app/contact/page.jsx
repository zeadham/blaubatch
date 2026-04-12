export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Contact Us — Request a Quote | Blau Batch',
  description: 'Request a masterbatch quote, ask for technical support, or enquire about our product range. We respond within 24 hours. Based in Egypt, serving MENA and Europe.',
  alternates: { canonical: 'https://blaubatch.com/contact' },
  openGraph: {
    title: 'Contact Us — Request a Quote | Blau Batch',
    description: 'Request a masterbatch quote, ask for technical support, or enquire about our product range. We respond within 24 hours. Based in Egypt, serving MENA and Europe.',
    url: 'https://blaubatch.com/contact',
  },
}

import Contact from '@/components/pages/Contact'
export default function Page() { return <Contact /> }
