'use client'

import BlogPostLayout from '@/components/pages/blog/BlogPostLayout'
import { T } from '@/components/LocaleProvider'

export default function CoraplastPartnership() {
  return (
    <BlogPostLayout
      title="Blau Batch Announces"
      titleAccent="Coraplast Partnership"
      sub="Expanding our reach to provide a full-spectrum masterbatch solution including Black, White, Color, and Additives."
      badge="PARTNERSHIP"
      badgeColor="#D4840A"
      date="April 2026"
      readTime="3 min read"
      heroImage="/images/heroes/coraplast_morph.webp"
      seo={{
        title: 'Coraplast Authorized Distributor MENA & Europe | Blau Batch',
        description: 'Blau Batch is now an authorized distributor for Coraplast Industries, bringing premium Black, White, Color, and Additive masterbatch to our regional customers.',
        canonical: 'https://blaubatch.com/blog/coraplast-partnership',
      }}
    >
      <p>
        <T>In 2025, Blau Batch officially became an authorized distributor for </T><strong><T>Coraplast Industries</T></strong><T>, one of the region’s most respected names in premium color and additive masterbatch.</T>
      </p>

      <h2><T>The Strategic Match</T></h2>
      <p>
        <T>Since our founding, Blau Batch has been known for consistent, high-performance filler masterbatch. Our customers trusted our FMPE and FMPP series, but they were often sourcing their color, black, and white masterbatch from multiple other suppliers.</T>
      </p>
      <p>
        <T>The Coraplast partnership was born from a simple goal: </T><strong><T>One Source. Full Spectrum.</T></strong>
      </p>

      <h2><T>What This Means for Our Customers</T></h2>
      <p>
        <T>You can now consolidate your masterbatch supply chain through a single technical relationship. The same team that manages your filler supply now provides access to the full Coraplast range:</T>
      </p>
      <ul>
        <li><strong><T>Black Masterbatch</T></strong><T> — High-jetness grades for irrigation and packaging.</T></li>
        <li><strong><T>White Masterbatch</T></strong><T> — High-opacity TiO₂ grades for thin films.</T></li>
        <li><strong><T>Color Masterbatch</T></strong><T> — 40+ standard grades and custom matching.</T></li>
        <li><strong><T>Technical Additives</T></strong><T> — UV stabilizers, anti-block, and processing aids.</T></li>
      </ul>

      <h2><T>A Shared Commitment to Quality</T></h2>
      <p>
        <T>We didn't partner with Coraplast just for their range. We partnered with them because their manufacturing standards align with our own. Every grade in the range is supported by technical data sheets and rigorous quality control.</T>
      </p>

      <h2><T>Simplified Logistics</T></h2>
      <p>
        <T>Consolidating your orders with Blau Batch means simplified logistics, unified technical support, and the peace of mind that comes from working with a single, reliable partner for all your masterbatch requirements.</T>
      </p>

      <h2><T>The Path Forward</T></h2>
      <p>
        <T>This partnership is the cornerstone of our transition to a </T><strong><T>Full Spectrum Solutions Partner</T></strong><T>. We aren't just selling pellets; we’re providing the material foundation for your production’s success.</T>
      </p>
    </BlogPostLayout>
  )
}
