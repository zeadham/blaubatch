import { pageMetadata } from '@/lib/metadata'

export const generateMetadata = pageMetadata('/compare', {
  title: 'Compare Masterbatch Grades — FMPE vs FMPP vs Colour vs Additive | Blau Batch',
  description: 'Side-by-side comparison of all Blau Batch masterbatch grades — filler, white, black, colour, and additive. Find the right product for your polymer and application.',
})

import Compare from '@/components/pages/Compare'
export default function Page() { return <Compare /> }
