import { pageMetadata } from '@/lib/metadata'

export const dynamic = 'force-dynamic'

export const generateMetadata = pageMetadata('/blog/masterbatch-range', {
  title: 'Complete Masterbatch Range MENA & Europe | Blau Batch',
  description: 'Explore the full spectrum of masterbatch solutions from Blau Batch. Black, White, Color, and Additives for all plastic manufacturing applications.',
})

import MasterbatchRange from '@/components/pages/blog/MasterbatchRange'
export default function Page() { return <MasterbatchRange /> }
