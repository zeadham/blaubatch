import { pageMetadata } from '@/lib/metadata'

export const dynamic = 'force-dynamic'

export const generateMetadata = pageMetadata('/blog/coraplast-partnership', {
  title: 'Coraplast Authorized Distributor MENA & Europe | Blau Batch',
  description: 'Blau Batch is now an authorized distributor for Coraplast Industries, bringing premium Black, White, Color, and Additive masterbatch to our regional customers.',
})

import CoraplastPartnership from '@/components/pages/blog/CoraplastPartnership'
export default function Page() { return <CoraplastPartnership /> }
