import { pageMetadata } from '@/lib/metadata'

export const dynamic = 'force-dynamic'

export const generateMetadata = pageMetadata('/blog/fmpe-product-spotlight', {
  title: 'FMPE Filler Masterbatch PE Egypt | Blau Batch',
  description: 'Explore the FMPE series from Blau Batch. Premium polyethylene filler masterbatch with 70–80% CaCO₃ loading for thin films, bags, and industrial packaging.',
})

import FMPEProductSpotlight from '@/components/pages/blog/FMPEProductSpotlight'
export default function Page() { return <FMPEProductSpotlight /> }
