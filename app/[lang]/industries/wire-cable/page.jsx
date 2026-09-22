import { pageMetadata } from '@/lib/metadata'

export const generateMetadata = pageMetadata('/industries/wire-cable', {
  title: 'Masterbatch for Wire & Cable | Blau Batch',
  description: 'Black and additive masterbatch for wire insulation and cable jacketing — carbon black grades, UV-stable formulations, and flame-retardant additive options. MENA & Europe supply.',
})

import WireCable from '@/components/pages/industries/WireCable'
export default function Page() { return <WireCable /> }
