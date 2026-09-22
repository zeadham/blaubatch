import { pageMetadata } from '@/lib/metadata'

export const dynamic = 'force-dynamic'

export const generateMetadata = pageMetadata('/fullrange', {
  title: 'One Supplier for Every Masterbatch Grade | Blau Batch',
  description: 'Filler masterbatch made in-house plus the complete Coraplast colour, white, black and additive range — one supplier, one invoice across MENA and Europe.',
})

import Campaign from '@/components/pages/Campaign'
export default function Page() { return <Campaign /> }
