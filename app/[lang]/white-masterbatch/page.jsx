import { pageMetadata } from '@/lib/metadata'

export const generateMetadata = pageMetadata('/white-masterbatch', {
  title: 'White Masterbatch — TiO₂ Concentrates | Blau Batch',
  description: 'High-opacity TiO₂-based white masterbatch for PE and PP applications. Food-contact compliant grades available. Distributed across MENA and Europe from Egypt.',
})

import WhiteMB from '@/components/pages/WhiteMB'
export default function Page() { return <WhiteMB /> }
