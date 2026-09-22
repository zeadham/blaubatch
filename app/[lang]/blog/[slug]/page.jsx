import { notFound } from 'next/navigation'
import { getArticleBySlug, ARTICLES } from '@/lib/blog-articles'
import BlogArticle from '@/components/pages/BlogArticle'
import { AR_META } from '@/lib/ar/meta'

export async function generateStaticParams() {
  return ARTICLES.map(a => ({ slug: a.slug }))
}

export async function generateMetadata({ params }) {
  const { lang, slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}
  const isAr = lang === 'ar'
  const loc = isAr ? AR_META[`/blog/${slug}`] : null
  const title = loc?.title || article.title
  const description = loc?.description || article.desc
  const url = `https://blaubatch.com${isAr ? '/ar' : ''}/blog/${article.slug}`
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        en: `https://blaubatch.com/blog/${article.slug}`,
        ar: `https://blaubatch.com/ar/blog/${article.slug}`,
        'x-default': `https://blaubatch.com/blog/${article.slug}`,
      },
    },
    openGraph: {
      title, description, url, type: 'article', publishedTime: article.date, locale: isAr ? 'ar_EG' : 'en_US',
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
