import { pageMetadata } from '@/lib/metadata'

export const dynamic = 'force-dynamic'

export const generateMetadata = pageMetadata('/blog/technical-guide', {
  title: 'Filler Masterbatch Technical Guide CaCO3 Egypt | Blau Batch',
  description: 'Understand the technical foundations of filler masterbatch. Mineral loading percentages, carrier resin selection, and dispersion explained by technical experts.',
})

import TechnicalGuide from '@/components/pages/blog/TechnicalGuide'
export default function Page() { return <TechnicalGuide /> }
