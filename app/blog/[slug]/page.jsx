import { notFound } from 'next/navigation'
import { getArticleBySlug, ARTICLES } from '@/lib/blog-articles'
import BlogArticle from '@/components/pages/BlogArticle'

export async function generateStaticParams() {
  return ARTICLES.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.desc,
    alternates: { canonical: `https://blaubatch.com/blog/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.desc,
      url: `https://blaubatch.com/blog/${article.slug}`,
      type: 'article',
      publishedTime: article.date,
    },
  }
}

function buildArticleJsonLd(article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.desc,
    url: `https://blaubatch.com/blog/${article.slug}`,
    datePublished: article.date,
    author: {
      '@type': 'Organization',
      name: 'Blau Batch',
      url: 'https://blaubatch.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Blau Batch',
      url: 'https://blaubatch.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://blaubatch.com/logo-mark-navy.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://blaubatch.com/blog/${article.slug}`,
    },
  }
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildArticleJsonLd(article)) }}
      />
      <BlogArticle article={article} />
    </>
  )
}
