import { pageMetadata } from '@/lib/metadata'

export const generateMetadata = pageMetadata('/industries/pipes', {
  title: 'Masterbatch for Pipes, Fittings & Profiles | Blau Batch',
  description: 'Black masterbatch with UV stabilisation for PE and PP pipes, fittings, and profiles. Filler masterbatch for cost reduction in pipe extrusion — ISO-aligned quality, MENA & Europe.',
})

import Pipes from '@/components/pages/industries/Pipes'
export default function Page() { return <Pipes /> }
