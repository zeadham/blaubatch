'use client'

import IndustryPage from '@/components/pages/industries/IndustryPage'

const CONFIG = {
  hero: {
    title: 'Masterbatch for',
    titleAccent: 'Wire & Cable',
    badge: 'WIRE & CABLE INDUSTRY',
    accentColor: '#F59E0B',
    bgImage: '/images/heroes/wire_cable.webp',
    sub: 'Carbon black, anti-static, colour, and processing-aid masterbatch for cable jacketing, electrical conduit, cable trunking, and data cable sheathing.',
  },
  applications: {
    title: 'Wire & Cable Applications',
    sub: 'Cable and wire applications place demanding requirements on masterbatch — consistent carbon black dispersion, UV protection, and smooth extrusion batch-to-batch.',
    items: [
      { name: 'Cable Jacketing', desc: 'PE cable jacketing with BLACK 10 FF (40% ISAF carbon black) for a jet-black finish and UV protection.' },
      { name: 'Insulation Compound', desc: 'Colour and processing-aid masterbatch for PE insulation compounds — smooth extrusion and consistent colour coding.' },
      { name: 'Electrical Conduit', desc: 'Black masterbatch for rigid and flexible PVC/HDPE electrical conduit. UV-stable for surface-mounted installation.' },
      { name: 'Armoured Cable Sheathing', desc: 'Carbon black masterbatch for armoured and instrumentation cable outer sheathing — UV protection for outdoor runs.' },
      { name: 'Data & Telecom Cable', desc: 'Carbon black masterbatch for fibre-optic duct, Cat5/6 data cable jacket, and coaxial cable outer sheath.' },
      { name: 'Automotive Wiring Harness', desc: 'Colour masterbatch for PE and PP automotive wiring harness insulation and jacket tubing.' },
    ],
  },
  keyPoints: [
    'BLACK 10 FF: 40% ISAF carbon black in PE carrier for cable jacketing',
    'Processing aids (PPA 249, PROCESSING AID 707 / 709) reduce die build-up and melt fracture in cable extrusion',
    'High-structure carbon black for superior UV protection and consistent jet-black appearance',
    'Anti-static masterbatch (AST 349, PE carrier) for cable protection sleeves and conduit',
    'Colour masterbatch for wire colour coding — matched to your standard or a reference sample',
    'All cable grades supplied with TDS and MSDS on request',
  ],
  products: {
    industryName: 'Wire & Cable',
    sub: 'Masterbatch for cable jacketing, conduit, and colour coding — carbon black, anti-static, colour, and processing aids.',
    items: [
      {
        series: 'BLACK 10 FF',
        tag: 'CABLE JACKETING',
        name: 'Black MB — Cable Jacketing',
        desc: '40% ISAF carbon black in PE carrier. For cable jacketing and conduit — good dispersion, UV protection, and a jet-black finish.',
        href: '/black-masterbatch',
        quote: 'Black MB Cable Grade',
      },
      {
        series: 'PPA 249 / PROCESSING AID 707',
        tag: 'PROCESSING AID',
        name: 'Processing Aid',
        desc: 'PFAS-free PPA (PPA 249) or PPA with antioxidant (PROCESSING AID 707 / 709) in PE carrier. Reduces die build-up and melt fracture for smoother cable extrusion.',
        href: '/additive-masterbatch',
        quote: 'Additive MB Processing Aid',
      },
      {
        series: 'AST 349',
        tag: 'ANTI-STATIC',
        name: 'Anti-static Masterbatch',
        desc: '15% anti-static in PE carrier. For cable protection sleeves, shielding tubes, and conduit where static build-up attracts dust.',
        href: '/additive-masterbatch',
        quote: 'Additive MB Anti-static',
      },
      {
        series: 'BLACK 08 FF',
        name: 'Black MB — Economy',
        desc: '30% HAF carbon black with CaCO₃ in PE carrier. For general-purpose conduit, cable trunking, and non-critical jacketing.',
        href: '/black-masterbatch',
      },
      {
        series: 'CMB SERIES',
        name: 'Colour Masterbatch',
        desc: 'IEC 60173-compliant colour coding for automotive and industrial wiring harness insulation — red, blue, green/yellow, orange, black, white, grey, brown.',
        href: '/color-masterbatch',
        quote: 'Colour Masterbatch',
      },
      {
        series: 'UVS 404',
        name: 'UV Stabiliser',
        desc: 'HALS UV stabiliser for conduit and cable duct installed outdoors where carbon black pigmentation alone is not sufficient for long-term UV resistance.',
        href: '/additive-masterbatch',
      },
    ],
  },
  quoteForm: {
    industryLabel: 'Wire & Cable',
    defaultProduct: 'Black MB Cable Grade',
    products: [
      { name: 'Black MB — Cable Jacketing (BLACK 10 FF)', sub: 'PE carrier · Jacketing & conduit', value: 'Black MB Cable Grade' },
      { name: 'Processing Aid (PPA 249 / 707)', sub: 'PE carrier · Smoother extrusion', value: 'Additive MB Processing Aid' },
      { name: 'Anti-static MB (AST 349)', sub: 'PE carrier · Sleeves & conduit', value: 'Additive MB Anti-static' },
      { name: 'Colour MB (IEC colour coding)', sub: 'Harness insulation colours', value: 'Colour Masterbatch' },
      { name: 'Not sure yet', sub: "We'll recommend the right grade", value: 'Not sure — need recommendation' },
    ],
    applications: ['Cable Jacketing', 'Insulation Compound', 'Electrical Conduit', 'Armoured Sheathing', 'Data & Telecom Cable', 'Automotive Wiring Harness', 'Cable Trunking', 'Fibre-optic Duct'],
  },
}

export default function WireCablePage() {
  return <IndustryPage config={CONFIG} />
}
