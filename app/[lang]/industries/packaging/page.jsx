import { pageMetadata } from '@/lib/metadata'

export const generateMetadata = pageMetadata('/industries/packaging', {
  title: 'Masterbatch for Packaging & Flexible Film | Blau Batch',
  description: 'Filler, white, black, and colour masterbatch for flexible packaging, blown film, cast film, and food-contact applications. Technical grades for the packaging industry — MENA & Europe.',
})

import Packaging from '@/components/pages/industries/Packaging'
export default function Page() { return <Packaging /> }
