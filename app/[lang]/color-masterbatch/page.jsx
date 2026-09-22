import { pageMetadata } from '@/lib/metadata'

export const generateMetadata = pageMetadata('/color-masterbatch', {
  title: 'Colour Masterbatch — RAL, Pantone & Custom Matching | Blau Batch',
  description: 'Full-spectrum colour masterbatch in PE and PP carriers. RAL and Pantone matching, custom colour development, and food-contact grades. Coraplast range distributed across MENA.',
})

import ColorMB from '@/components/pages/ColorMB'
export default function Page() { return <ColorMB /> }
