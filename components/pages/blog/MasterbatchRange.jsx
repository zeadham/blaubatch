'use client'

import BlogPostLayout from '@/components/pages/blog/BlogPostLayout'
import { T } from '@/components/LocaleProvider'

export default function MasterbatchRange() {
  return (
    <BlogPostLayout
      title="Beyond Filler:"
      titleAccent="The Full Range"
      sub="Exploring our comprehensive portfolio of 40+ Black, White, and Color masterbatch grades now available through the Coraplast partnership."
      badge="FULL SPECTRUM"
      badgeColor="#2B8DD0"
      date="April 2026"
      readTime="5 min read"
      heroImage="/images/heroes/campaign_hero.webp"
      seo={{
        title: 'Complete Masterbatch Range MENA & Europe | Blau Batch',
        description: 'Explore the full spectrum of masterbatch solutions from Blau Batch. Black, White, Color, and Additives for all plastic manufacturing applications.',
        canonical: 'https://blaubatch.com/blog/masterbatch-range',
      }}
    >
      <p>
        <T>For years, Blau Batch was synonymous with world-class filler. With our 2025 Coraplast partnership, that synonymous relationship now extends to the entire spectrum of masterbatch solutions.</T> 
      </p>

      <h2><T>One Source. Full Spectrum.</T></h2>
      <p>
        <T>The complexity of sourcing multiple masterbatch types from different suppliers often leads to technical inconsistencies, logistics headaches, and procurement delays. We've solved that by providing a single, unified source for all four major masterbatch categories.</T>
      </p>

      <h2><T>1. The White Masterbatch Series</T></h2>
      <p>
        <T>Our white range is built around high-concentration TiO₂ (Titanium Dioxide), ranging from 40% up to 75%. These grades are designed for high opacity and UV stability in everything from thin film packaging to high-gloss industrial parts.</T>
      </p>

      <h2><T>2. The Black Masterbatch Series</T></h2>
      <p>
        <T>Carbon black concentration is critical for UV protection and jetness. Our range includes P-type and HAF-type carbon black grades suitable for irrigation pipes, geomembranes, and automotive components.</T>
      </p>

      <h2><T>3. The Color Masterbatch Series</T></h2>
      <p>
        <T>With over 40 standard color grades and a limitless custom-matching service, we provide consistent, vibrant results. Our colors are formulated with high-quality pigments to ensure migration resistance and high thermal stability.</T>
      </p>

      <h2><T>4. Technical Additives</T></h2>
      <p>
        <T>Beyond color, we provide the technical "performance" layer for your polymer:</T>
      </p>
      <ul>
        <li><strong><T>UV Stabilizers</T></strong><T> — Essential for outdoor agricultural and construction films.</T></li>
        <li><strong><T>Anti-Block & Slip Agents</T></strong><T> — Critical for high-speed automated packaging lines.</T></li>
        <li><strong><T>Processing Aids</T></strong><T> — Reducing melt fracture and improving surface quality in extrusion.</T></li>
      </ul>

      <h2><T>A Solution for Every Application</T></h2>
      <ol>
        <li><strong><T>Flexible Packaging</T></strong><T> — High-opacity whites and vibrant colors for brand visibility.</T></li>
        <li><strong><T>Agriculture</T></strong><T> — UV-stabilized blacks and specialty additives for mulch and silage films.</T></li>
        <li><strong><T>Pipes & Construction</T></strong><T> — Carbon black masterbatch with high dispersion for pressure pipes.</T></li>
      </ol>

      <h2><T>The Strategic Advantage</T></h2>
      <p>
        <T>Choosing Blau Batch as your "Full Spectrum" partner means consistency across your entire production. The same technical team that knows your process and your filler requirements can now optimize your color and additive spend under one roof.</T>
      </p>
    </BlogPostLayout>
  )
}
