import { getArticleBySlug } from '@/lib/blog-articles'
import BlogArticle from '@/components/pages/BlogArticle'

export default function Page() {
  const article = getArticleBySlug('uv-stabilisation-agricultural-film')
  return <BlogArticle article={article} />
}
