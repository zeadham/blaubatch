import { pageMetadata } from '@/lib/metadata'

export const generateMetadata = pageMetadata('/industries/construction', {
  title: 'Masterbatch for Construction & Civil Engineering | Blau Batch',
  description: 'Black, filler, and additive masterbatch for geomembranes, waterproofing sheets, drainage boards, geotextiles, and HDPE civil engineering applications — UV-stable grades for demanding outdoor service environments.',
})

import Construction from '@/components/pages/industries/Construction'
export default function Page() { return <Construction /> }
