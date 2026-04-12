export const metadata = {
  title: 'Compare Masterbatch Grades — FMPE vs FMPP vs Colour vs Additive | Blau Batch',
  description: 'Side-by-side comparison of all Blau Batch masterbatch grades — filler, white, black, colour, and additive. Find the right product for your polymer and application.',
  alternates: { canonical: 'https://blaubatch.com/compare' },
  openGraph: {
    title: 'Compare Masterbatch Grades | Blau Batch',
    description: 'Side-by-side comparison of all Blau Batch masterbatch grades. Find the right product for your polymer and application.',
    url: 'https://blaubatch.com/compare',
  },
}

import Compare from '@/components/pages/Compare'
export default function Page() { return <Compare /> }
