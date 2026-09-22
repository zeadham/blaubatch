import { pageMetadata } from '@/lib/metadata'

export const generateMetadata = pageMetadata('/sustainability', {
  title: 'Sustainability — Responsible Masterbatch Manufacturing | Blau Batch',
  description: "Blau Batch's approach to sustainable masterbatch production — reduced polymer waste, CaCO₃ as a renewable filler, and responsible sourcing across our supply chain.",
})

import Sustainability from '@/components/pages/Sustainability'
export default function Page() { return <Sustainability /> }
