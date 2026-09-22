import { pageMetadata } from '@/lib/metadata'

export const generateMetadata = pageMetadata('/distributors', {
  title: 'Distributors — Become a Blau Batch Partner | Blau Batch',
  description: 'Interested in distributing Blau Batch masterbatch in your region? We partner with established plastics distributors across MENA and Europe. Enquire about distribution opportunities.',
})

import Distributors from '@/components/pages/Distributors'
export default function Page() { return <Distributors /> }
