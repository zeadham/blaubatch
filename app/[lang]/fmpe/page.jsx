import { pageMetadata } from '@/lib/metadata'

export const generateMetadata = pageMetadata('/fmpe', {
  title: 'FMPE Series — PE Filler Masterbatch | Blau Batch',
  description: 'CaCO₃-based filler masterbatch in polyethylene carrier. 70%, 75%, and 80% loading grades for blown film, cast film, extrusion, and injection moulding. Quote within 24 hours.',
})

import FMPE from '@/components/pages/FMPE'
export default function Page() { return <FMPE /> }
