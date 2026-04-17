'use client'

import BlogPostLayout from '@/components/pages/blog/BlogPostLayout'

export default function CompanyStory() {
  return (
    <BlogPostLayout
      title="From Gap in the Market"
      titleAccent="to Factory Floor"
      sub="How a reliability gap in the MENA masterbatch market led to the founding of Egypt’s most consistent filler manufacturer."
      badge="COMPANY STORY"
      badgeColor="#2B8DD0"
      date="April 2026"
      readTime="4 min read"
      heroImage="/images/heroes/factory_morph.webp"
      seo={{
        title: 'The Blau Batch Story | Masterbatch Manufacturer Egypt',
        description: 'Founded in 2022, Blau Batch was built to fill a reliability gap in the MENA filler masterbatch market. Learn about our journey to becoming a regional leader.',
        canonical: 'https://blaubatch.com/blog/company-story',
      }}
    >
      <p>
        Blau Batch was not founded on a business plan template. It was founded on a gap.
      </p>

      <h2>The Problem We Saw</h2>
      <p>
        In 2022, we looked at the MENA filler masterbatch market and saw the same story repeating: converters importing filler from distant suppliers, dealing with long lead times, inconsistent quality, and no direct technical support. Local options existed, but few were manufacturing to the standards that serious production lines demand.
      </p>
      <p><strong>The gap was not supply — it was reliability.</strong></p>

      <h2>What We Built</h2>
      <p>
        We established our manufacturing facility in the 6th of October Industrial Zone, one of Egypt's primary industrial hubs. Our focus from day one was narrow and deliberate: CaCO₃-based filler masterbatch for PE and PP carrier systems.
      </p>
      <ul>
        <li><strong>FMPE Series</strong> — Four grades on LLDPE and LDPE carriers, 70–80% CaCO₃</li>
        <li><strong>FMPP Series</strong> — Four grades on PP and PPH carriers, 70–80% CaCO₃</li>
        <li><strong>Custom Formulations (FMPC)</strong> — Any loading, any carrier blend, minimum 1 MT</li>
      </ul>

      <h2>2024 — MENA to Europe</h2>
      <p>
        By 2024, we had expanded our logistics to serve European markets. Poland was among our first EU destinations. The demand was the same: consistent filler masterbatch, competitive pricing, and a supplier that actually responds.
      </p>

      <h2>2025 — The Coraplast Partnership</h2>
      <p>
        In 2025, we became an authorized distributor for Coraplast Industries, adding black, white, color, and specialty masterbatch to our range. This was a direct response to what our customers were asking for — a single source for all their masterbatch needs, with the same reliability they knew from our filler products.
      </p>

      <h2>What Has Not Changed</h2>
      <p>
        We still pick up the phone. We still respond to quotes within 24 hours. We still treat consistency as the baseline, not a bonus. We are still a lean team that knows its customers by name.
      </p>

      <h2>What Is Next</h2>
      <p>
        More capacity. More grades. Wider reach. But the same principle: every batch performs exactly like the last one.
      </p>
    </BlogPostLayout>
  )
}
