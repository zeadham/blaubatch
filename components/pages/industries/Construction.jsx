'use client'

import IndustryPage from '@/components/pages/industries/IndustryPage'

const CONFIG = {
  hero: {
    title: 'Masterbatch for Construction',
    titleAccent: '& Civil Engineering',
    badge: 'CONSTRUCTION INDUSTRY',
    accentColor: '#2B8DD0',
    bgImage: '/images/industries/construction.png',
    sub: 'Black, filler, and additive masterbatch for geomembranes, waterproofing sheets, drainage boards, geotextiles, and HDPE civil engineering applications — UV-stable grades for demanding outdoor service environments.',
  },
  applications: {
    title: 'Construction & Civil Engineering Applications',
    sub: 'Construction-grade masterbatch must perform over multi-decade service lives under UV, heat, chemical exposure, and mechanical stress. Our grades are engineered for these conditions.',
    items: [
      { name: 'Geomembranes', desc: 'HDPE and LLDPE geomembranes for pond liners, landfill caps, tailings ponds, and containment structures — UV-stabilised black grades with ASTM D6693 compliance.' },
      { name: 'Waterproofing Sheet', desc: 'HDPE and PP waterproofing sheet for below-grade structures, tunnels, bridge decks, and foundation walls. Requires consistent dispersion and high melt strength.' },
      { name: 'Drainage & Geonet', desc: 'Geonet, drainage cell, and dimpled membrane in HDPE for subsurface drainage, green roof systems, and retaining wall drainage layers.' },
      { name: 'Geotextile & Non-Woven', desc: 'PP spunbond and needle-punched geotextile for erosion control, road sub-base separation, and slope stabilisation — colour-coded grades available.' },
      { name: 'HDPE Piping Systems', desc: 'Large-diameter HDPE pressure pipe and corrugated drainage pipe for municipal infrastructure, stormwater, and civil ducting applications.' },
      { name: 'Building Film & Wrap', desc: 'Vapour barriers, DPM films, and underlay films for residential and commercial construction — filler grades to reduce cost, UV-inhibitor for outdoor applications.' },
    ],
  },
  keyPoints: [
    'UV-stable black masterbatch (BMB-UV) for 50-year geomembrane service life — ASTM D1435 weathering tested',
    'Carbon black dispersion rated at ≤3 on ASTM D5596 agglomerate scale for geomembrane integrity',
    'Filler masterbatch (FMPE-70) reduces HDPE pipe and sheet material cost without wall thickness compromise',
    'Anti-oxidant additive concentrates extend processing stability in thick-wall extrusion applications',
    'Colour-coded geotextile grades for layer identification on site — standard BS/RAL colours held in stock',
    'TDS and CoA issued per batch; SVHC and RoHS declarations available for environmental compliance',
  ],
  products: {
    industryName: 'Construction & Civil Engineering',
    sub: 'Masterbatch grades selected for geomembrane, waterproofing, and civil engineering plastics.',
    items: [
      {
        series: 'BMB-UV SERIES',
        tag: 'UV STABLE',
        name: 'UV-Stable Black MB',
        desc: 'High-loading carbon black with HALS UV stabiliser for outdoor geomembrane and construction film. Long-term UV resistance for multi-decade service life.',
        href: '/black-masterbatch',
      },
      {
        series: 'FMPE SERIES',
        tag: 'MANUFACTURED',
        name: 'Filler Masterbatch (PE)',
        desc: '70–80% CaCO₃ in LDPE/HDPE carrier. Reduces material cost in geomembrane, drainage board, and construction film applications without compromising tensile or elongation.',
        href: '/fmpe',
      },
      {
        series: 'AMB-UV10',
        tag: 'ADDITIVE',
        name: 'UV Stabiliser MB',
        desc: 'HALS and UV absorber concentrate for extended outdoor weathering resistance. For applications where black pigment alone is insufficient.',
        href: '/additive-masterbatch',
      },
      {
        series: 'AMB-AO05',
        tag: 'ADDITIVE',
        name: 'Anti-oxidant MB',
        desc: 'Phosphite/phenolic anti-oxidant concentrate for thermal stability in thick-wall pipe and geomembrane extrusion at elevated processing temperatures.',
        href: '/additive-masterbatch',
      },
      {
        series: 'CMB SERIES',
        name: 'Colour Masterbatch',
        desc: 'Site-identification colour coding for geotextile, drainage cell, and building film. Standard construction colours — black, orange, green, white — held in stock.',
        href: '/color-masterbatch',
      },
      {
        series: 'FMPP SERIES',
        tag: 'MANUFACTURED',
        name: 'Filler Masterbatch (PP)',
        desc: '70–80% CaCO₃ in PP carrier. For PP waterproofing sheet, drainage board, and non-woven geotextile where PP carrier is required.',
        href: '/fmpp',
      },
    ],
  },
  quoteForm: {
    industryLabel: 'Construction & Civil Engineering',
    defaultProduct: 'UV-Stable Black MB',
    products: [
      { name: 'UV-Stable Black MB (BMB-UV)', sub: 'HDPE geomembrane · Outdoor service', value: 'Black MB UV Stable' },
      { name: 'Filler Masterbatch (FMPE)', sub: 'PE carrier · Geomembrane & construction film', value: 'Filler MB PE Series' },
      { name: 'Filler Masterbatch (FMPP)', sub: 'PP carrier · Sheet & geotextile', value: 'Filler MB PP Series' },
      { name: 'UV Stabiliser (AMB-UV10)', sub: 'HALS · Outdoor weathering', value: 'Additive MB UV Stabiliser' },
      { name: 'Anti-oxidant (AMB-AO05)', sub: 'Thermal stability · Thick-wall extrusion', value: 'Additive MB Anti-oxidant' },
      { name: 'Colour Masterbatch', sub: 'Site identification · Standard colours', value: 'Colour Masterbatch' },
      { name: 'Not sure yet', sub: "We'll recommend the right grade", value: 'Not sure — need recommendation' },
    ],
    applications: ['Geomembrane (Pond / Landfill)', 'Waterproofing Sheet', 'Drainage Board / Geonet', 'Geotextile / Non-Woven', 'HDPE Pipe (Large Diameter)', 'Building Film / Vapour Barrier', 'DPM / Underlay Film', 'Retaining Wall Drainage'],
  },
}

export default function ConstructionPage() {
  return <IndustryPage config={CONFIG} />
}
