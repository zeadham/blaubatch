import { pageMetadata } from '@/lib/metadata'

export const dynamic = 'force-dynamic'

export const generateMetadata = pageMetadata('/blog/company-story', {
  title: 'The Blau Batch Story | Masterbatch Manufacturer Egypt',
  description: 'Founded in 2022, Blau Batch was built to fill a reliability gap in the MENA filler masterbatch market. Learn about our journey to becoming a regional leader.',
})

import CompanyStory from '@/components/pages/blog/CompanyStory'
export default function Page() { return <CompanyStory /> }
