import { pageMetadata } from '@/lib/metadata'
import { getArticleBySlug } from '@/lib/blog-articles'
import BlogArticle from '@/components/pages/BlogArticle'

export const generateMetadata = pageMetadata('/blog/sustainable-plastics-masterbatch', {
  title: 'UV Stabilisation in Agricultural Film: What Makes a Masterbatch Last 10+ Years?',
  description: 'How HALS-based UV stabilisers in black and additive masterbatch protect agricultural films from photodegradation in MENA and Mediterranean climates.',
})

export default function Page() {
  const article = getArticleBySlug('uv-stabilisation-agricultural-film')
  return <BlogArticle article={article} />
}
