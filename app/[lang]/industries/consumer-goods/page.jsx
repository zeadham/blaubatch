import { pageMetadata } from '@/lib/metadata'

export const generateMetadata = pageMetadata('/industries/consumer-goods', {
  title: 'Masterbatch for Consumer Goods & Housewares | Blau Batch',
  description: 'Food-contact colour, white, and additive masterbatch for injection-moulded housewares, caps and closures, toy components, appliance housings, and personal care packaging — consistent colour lot-to-lot for retail brand standards.',
})

import ConsumerGoods from '@/components/pages/industries/ConsumerGoods'
export default function Page() { return <ConsumerGoods /> }
