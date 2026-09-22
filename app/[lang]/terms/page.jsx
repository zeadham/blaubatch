import { pageMetadata } from '@/lib/metadata'

export const generateMetadata = pageMetadata('/terms', {
  title: 'Terms & Conditions | Blau Batch',
  description: 'Blau Batch Terms & Conditions — governing the supply of masterbatch products and services. Covers orders, pricing, delivery, quality, and liability.',
})

import Terms from '@/components/pages/Terms'
export default function Page() { return <Terms /> }
