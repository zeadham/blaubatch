import { pageMetadata } from '@/lib/metadata'

export const dynamic = 'force-dynamic'

export const generateMetadata = pageMetadata('/blog/cost-optimization', {
  title: 'Masterbatch Cost Optimization Egypt | Blau Batch',
  description: 'Learn how to optimize your production costs using filler masterbatch. Calculate your savings and improve your margins with CaCO₃ mineral loading.',
})

import CostOptimization from '@/components/pages/blog/CostOptimization'
export default function Page() { return <CostOptimization /> }
