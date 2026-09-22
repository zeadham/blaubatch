import { pageMetadata } from '@/lib/metadata'

export const generateMetadata = pageMetadata('/industries/textiles', {
  title: 'Masterbatch for Textiles & Fibre | Blau Batch',
  description: 'Filler masterbatch for raffia, non-woven, and fibre applications. PP-carrier grades for polypropylene textile processes — cost reduction without compromising tenacity or uniformity.',
})

import Textiles from '@/components/pages/industries/Textiles'
export default function Page() { return <Textiles /> }
