import { pageMetadata } from '@/lib/metadata'
import { getArticleBySlug } from '@/lib/blog-articles'
import BlogArticle from '@/components/pages/BlogArticle'

export const generateMetadata = pageMetadata('/blog/what-is-filler-masterbatch', {
  title: 'What is Filler Masterbatch and How Does it Reduce Material Costs?',
  description: "A complete guide to CaCO₃-based filler masterbatch — how it works, how it's made, and how to calculate cost savings for your specific application.",
})

export default function Page() {
  const article = getArticleBySlug('what-is-filler-masterbatch')
  return <BlogArticle article={article} />
}
