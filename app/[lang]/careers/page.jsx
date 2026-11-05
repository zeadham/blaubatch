import { pageMetadata } from '@/lib/metadata'

export const generateMetadata = pageMetadata('/careers', {
  title: 'Careers — Join the Blau Batch Team',
  description: 'Open roles at Blau Batch in production and sales: build a career in filler, colour and additive masterbatch with an Egyptian manufacturer and Coraplast distributor.',
})

import Careers from '@/components/pages/Careers'
export default function Page() { return <Careers /> }
