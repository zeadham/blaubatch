import { pageMetadata } from '@/lib/metadata'

export const generateMetadata = pageMetadata('/about', {
  title: 'About Blau Batch — Egypt\'s Masterbatch Manufacturer',
  description: 'Blau Batch is an Egyptian manufacturer of Filler Masterbatch and authorised Coraplast distributor, serving the plastics industry across MENA and Europe with consistent quality and fast response.',
})

import About from '@/components/pages/About'
export default function Page() { return <About /> }
