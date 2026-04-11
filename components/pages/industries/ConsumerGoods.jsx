'use client'

import IndustryPage from '@/components/pages/industries/IndustryPage'

const CONFIG = {
  hero: {
    title: 'Masterbatch for Consumer Goods',
    titleAccent: '& Housewares',
    badge: 'CONSUMER GOODS INDUSTRY',
    accentColor: '#2B8DD0',
    bgImage: '/images/industries/consumer_goods.png',
    sub: 'Food-contact colour, white, and additive masterbatch for injection-moulded housewares, caps and closures, toy components, appliance housings, and personal care packaging — consistent colour lot-to-lot for retail brand standards.',
  },
  applications: {
    title: 'Consumer Goods Applications',
    sub: 'Consumer goods masterbatch must deliver consistent colour, food-contact safety where required, and cosmetic surface quality at high injection throughputs.',
    items: [
      { name: 'Caps & Closures', desc: 'Colour and white masterbatch for PP and HDPE beverage caps, dispensing closures, and flip-top caps — food-contact compliant grades as standard.' },
      { name: 'Housewares & Storage', desc: 'Injection-moulded PP and HDPE storage containers, laundry baskets, hangers, and kitchen accessories — colour-matched to brand standards.' },
      { name: 'Toy Components', desc: 'Colour masterbatch for PP, PE, and ABS toy parts. Migration-tested pigments, RoHS compliant, and EN 71-3 toy safety relevant grades available.' },
      { name: 'Personal Care Packaging', desc: 'White and colour masterbatch for shampoo bottles, lotion pumps, cosmetic jars, and personal care tubes in PP and HDPE.' },
      { name: 'Appliance Housings', desc: 'Colour masterbatch for PP small appliance housings, outer shells, and aesthetic panels — heat-stable grades processed at 200–250°C.' },
      { name: 'Food Containers & Trays', desc: 'Food-grade colour and white masterbatch for PP/PE food containers, microwave trays, and reusable storage solutions with direct food contact.' },
    ],
  },
  keyPoints: [
    'Food-contact white grades (WMB-FC20) — EU Regulation 10/2011 compliant for direct food packaging',
    'Colour lot-to-lot ΔE < 0.5 consistency for retail brand colour standards — maintained across production runs',
    'Migration-tested pigment systems for toy applications — EN 71-3 / RoHS relevant grades available',
    'Anti-scratch and anti-static additive masterbatch for high-gloss appliance and electronics housings',
    'Heat-stable formulations for thin-wall injection at 220–260°C without discolouration or plate-out',
    'TDS, CoA, and food-contact declaration issued per batch for regulatory compliance documentation',
  ],
  products: {
    industryName: 'Consumer Goods & Housewares',
    sub: 'Colour, white, and additive masterbatch grades for consumer-facing injection moulding applications.',
    items: [
      {
        series: 'CMB SERIES',
        tag: 'FOOD CONTACT',
        name: 'Colour Masterbatch',
        desc: 'Full-spectrum colour matching — RAL, Pantone, brand standards — in PP and PE carriers. Food-contact grades, consistent lot-to-lot ΔE for retail brand applications.',
        href: '/color-masterbatch',
      },
      {
        series: 'WMB SERIES',
        tag: 'FOOD CONTACT',
        name: 'White Masterbatch',
        desc: 'TiO₂-based white concentrates for PP and HDPE. High opacity grades for closures, housewares, and personal care packaging. EU 10/2011 compliant food-contact grades.',
        href: '/white-masterbatch',
      },
      {
        series: 'FMPP SERIES',
        tag: 'MANUFACTURED',
        name: 'Filler Masterbatch (PP)',
        desc: '70–80% CaCO₃ in PP carrier. Reduces material cost in PP housewares, storage, and non-food-contact consumer parts without visible surface impact.',
        href: '/fmpp',
      },
      {
        series: 'AMB-AS10',
        tag: 'ANTI-STATIC',
        name: 'Anti-static MB',
        desc: 'Permanent anti-static for appliance housings, electronics packaging, and consumer parts where static charge attracts dust or risks ESD damage.',
        href: '/additive-masterbatch',
      },
      {
        series: 'AMB-SA/AB',
        name: 'Slip & Antiblock',
        desc: 'For consumer film, flexible packaging, and bag applications — reduces COF, prevents blocking, and improves machinability on packaging lines.',
        href: '/additive-masterbatch',
      },
      {
        series: 'FMPE SERIES',
        tag: 'MANUFACTURED',
        name: 'Filler Masterbatch (PE)',
        desc: 'LDPE carrier filler masterbatch for HDPE and LDPE consumer goods — bin liners, bags, flexible packaging accessories, and non-food-contact PE mouldings.',
        href: '/fmpe',
      },
    ],
  },
  quoteForm: {
    industryLabel: 'Consumer Goods & Housewares',
    defaultProduct: 'Colour Masterbatch',
    products: [
      { name: 'Colour Masterbatch', sub: 'PP / PE carrier · Food-contact grades available', value: 'Colour Masterbatch' },
      { name: 'White Masterbatch', sub: 'TiO₂-based · Caps, closures & housewares', value: 'White MB PE Series' },
      { name: 'Filler Masterbatch (FMPP)', sub: 'PP carrier · Housewares & storage', value: 'Filler MB PP Series' },
      { name: 'Filler Masterbatch (FMPE)', sub: 'PE carrier · Bags & flexible consumer goods', value: 'Filler MB PE Series' },
      { name: 'Anti-static (AMB-AS10)', sub: 'Permanent · Appliance & electronics housings', value: 'Additive MB Anti-static' },
      { name: 'Not sure yet', sub: "We'll recommend the right grade", value: 'Not sure — need recommendation' },
    ],
    applications: ['Caps & Closures', 'Housewares & Storage', 'Toy Components', 'Personal Care Packaging', 'Appliance Housings', 'Food Containers', 'Bags & Flexible Consumer Goods', 'Electronics Packaging'],
  },
}

export default function ConsumerGoodsPage() {
  return <IndustryPage config={CONFIG} />
}
