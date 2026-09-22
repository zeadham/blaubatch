export const dynamic = 'force-dynamic'

import { pageMetadata } from '@/lib/metadata'

export const generateMetadata = pageMetadata('/contact', {
  title: 'Contact Us — Request a Quote | Blau Batch',
  description: 'Request a masterbatch quote, ask for technical support, or enquire about our product range. We respond within 24 hours. Based in Egypt, serving MENA and Europe.',
})

import Contact from '@/components/pages/Contact'
export default function Page() { return <Contact /> }
