import { pageMetadata } from '@/lib/metadata'

export const generateMetadata = pageMetadata('/black-masterbatch', {
  title: 'Black Masterbatch — UV-Stable Carbon Black Grades',
  description: 'Carbon black masterbatch for pipes, agricultural film, cable jacketing, and packaging. UV-stable grades and food-contact options. Distributed across MENA and Europe.',
})

import BlackMB from '@/components/pages/BlackMB'
export default function Page() { return <BlackMB /> }
