export const metadata = {
  title: 'Technical Resources — TDS, Guides & FAQ | Blau Batch',
  description: 'Download technical data sheets, product overviews, processing guides, and certificates of analysis for all Blau Batch masterbatch grades. Plus FAQ and technical articles.',
  alternates: { canonical: 'https://blaubatch.com/resources' },
  openGraph: {
    title: 'Technical Resources — TDS, Guides & FAQ | Blau Batch',
    description: 'Download technical data sheets, product overviews, processing guides, and certificates of analysis for all Blau Batch masterbatch grades. Plus FAQ and technical articles.',
    url: 'https://blaubatch.com/resources',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is filler masterbatch and how does it reduce my costs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Filler masterbatch is a concentrated blend of CaCO₃ (calcium carbonate) dispersed in a polymer carrier (PE or PP). By replacing a portion of your virgin polymer with filler masterbatch, you reduce raw material cost while maintaining acceptable mechanical properties. Typical cost savings are 10–30% depending on the price differential and dosage rate.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between FMPE and FMPP Series?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FMPE uses a polyethylene (PE) carrier and is designed for PE applications: blown film, cast film, extrusion coating, and injection moulding. FMPP uses a polypropylene (PP) carrier and is designed for PP applications: raffia tape, non-woven, BOPP film, and PP injection moulding.',
      },
    },
    {
      '@type': 'Question',
      name: 'What dosage rate should I start with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We recommend starting at 15% for most blown film applications and adjusting in 5% increments while monitoring mechanical properties. For raffia and non-woven, start at 10–15%. Contact our technical team for application-specific guidance.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is the masterbatch packaged and what is the shelf life?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our masterbatch is available in 25 kg PP woven bags (standard) and 500–1000 kg FIBC big bags. Shelf life is 24 months from production date when stored in original sealed packaging in a cool, dry environment below 30°C.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get a sample before placing a full order?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We offer pre-production samples upon request — typically 5–25 kg quantities for processing trials. Contact us with your polymer type, application, and processing parameters.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you provide food-contact grade masterbatch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Through our Coraplast partnership, we offer white, black, and colour masterbatch grades compliant with EU 10/2011 Regulation and FDA 21 CFR requirements for food contact applications.',
      },
    },
    {
      '@type': 'Question',
      name: 'What quality control tests do you run on each batch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Each production batch is tested for Melt Flow Index (ISO 1133), ash content (ISO 3451), moisture content, colour consistency, and visual dispersibility. A Certificate of Analysis (CoA) is issued for every batch.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is your lead time and minimum order quantity?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lead times depend on product type and stock availability — typically 3–7 business days for stocked items. Minimum order quantities vary by product. Contact us with your volume requirements for a specific commercial offer.',
      },
    },
  ],
}

import Resources from '@/components/pages/Resources'

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Resources />
    </>
  )
}
