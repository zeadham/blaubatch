import { getArticleBySlug } from '@/lib/blog-articles'
import BlogArticle from '@/components/pages/BlogArticle'

export default function Page() {
  const article = getArticleBySlug('what-is-filler-masterbatch')
  return <BlogArticle article={article} />
}
