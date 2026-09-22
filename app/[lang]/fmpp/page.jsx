import { pageMetadata } from '@/lib/metadata'

export const generateMetadata = pageMetadata('/fmpp', {
  title: 'FMPP Series — PP Filler Masterbatch | Blau Batch',
  description: 'CaCO₃-based filler masterbatch in polypropylene carrier. 70%, 75%, and 80% loading grades for raffia, non-woven, injection moulding, and BOPP film. Quote within 24 hours.',
})

import FMPP from '@/components/pages/FMPP'
export default function Page() { return <FMPP /> }
