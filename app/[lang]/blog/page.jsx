import { pageMetadata } from '@/lib/metadata'

export const generateMetadata = pageMetadata('/blog', {
  title: 'Technical Blog — Masterbatch Insights & Guides | Blau Batch',
  description: 'In-depth articles on filler masterbatch selection, CaCO₃ loading, carrier systems, UV stabilisation, and quality control — written for plastics engineers and procurement professionals.',
})

import BlogIndex from '@/components/pages/blog/BlogIndex'
export default function Page() { return <BlogIndex /> }
