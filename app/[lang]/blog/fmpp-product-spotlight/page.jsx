import { pageMetadata } from '@/lib/metadata'

export const dynamic = 'force-dynamic'

export const generateMetadata = pageMetadata('/blog/fmpp-product-spotlight', {
  title: 'FMPP Filler Masterbatch Polypropylene Egypt | Blau Batch',
  description: 'Explore the FMPP series from Blau Batch. Premium polypropylene filler masterbatch with 70–80% CaCO₃ loading for woven sacks, rafia, and injection molding.',
})

import FMPPProductSpotlight from '@/components/pages/blog/FMPPProductSpotlight'
export default function Page() { return <FMPPProductSpotlight /> }
