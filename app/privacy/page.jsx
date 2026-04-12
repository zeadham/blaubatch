export const metadata = {
  title: 'Privacy Policy | Blau Batch',
  description: 'Blau Batch Privacy Policy — how we collect, use, and protect your personal data when you use our website or submit an enquiry.',
  alternates: { canonical: 'https://blaubatch.com/privacy' },
  robots: { index: false },
  openGraph: {
    title: 'Privacy Policy | Blau Batch',
    description: 'How Blau Batch collects, uses, and protects your personal data.',
    url: 'https://blaubatch.com/privacy',
  },
}

import Privacy from '@/components/pages/Privacy'
export default function Page() { return <Privacy /> }
