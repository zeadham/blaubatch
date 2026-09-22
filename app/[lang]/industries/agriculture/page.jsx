import { pageMetadata } from '@/lib/metadata'

export const generateMetadata = pageMetadata('/industries/agriculture', {
  title: 'Masterbatch for Agriculture — Mulch, Greenhouse & Drip Film | Blau Batch',
  description: 'UV-stable black masterbatch and additive concentrates for agricultural films — mulch film, greenhouse covers, silage film, and drip irrigation systems for MENA climates.',
})

import Agriculture from '@/components/pages/industries/Agriculture'
export default function Page() { return <Agriculture /> }
