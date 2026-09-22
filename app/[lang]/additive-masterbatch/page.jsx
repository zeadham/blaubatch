import { pageMetadata } from '@/lib/metadata'

export const generateMetadata = pageMetadata('/additive-masterbatch', {
  title: 'Additive Masterbatch — UV, Slip, Antiblock & More | Blau Batch',
  description: 'Functional additive masterbatch concentrates — UV stabilisers, HALS, slip agents, antiblock, antistatic, and processing aids in PE and PP carriers. Coraplast range, MENA & Europe.',
})

import AdditiveMB from '@/components/pages/AdditiveMB'
export default function Page() { return <AdditiveMB /> }
