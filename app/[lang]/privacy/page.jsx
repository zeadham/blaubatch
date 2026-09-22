import { pageMetadata } from '@/lib/metadata'

export const generateMetadata = pageMetadata('/privacy', {
  title: 'Privacy Policy | Blau Batch',
  description: 'Blau Batch Privacy Policy — how we collect, use, and protect your personal data when you use our website or submit an enquiry.',
})

import Privacy from '@/components/pages/Privacy'
export default function Page() { return <Privacy /> }
