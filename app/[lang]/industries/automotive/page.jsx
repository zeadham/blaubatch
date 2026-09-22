import { pageMetadata } from '@/lib/metadata'

export const generateMetadata = pageMetadata('/industries/automotive', {
  title: 'Masterbatch for Automotive & Technical Parts | Blau Batch',
  description: 'Colour, additive, and filler masterbatch for automotive interior and exterior components. Technical grades with UV, heat, and processing performance — distributed across MENA.',
})

import Automotive from '@/components/pages/industries/Automotive'
export default function Page() { return <Automotive /> }
