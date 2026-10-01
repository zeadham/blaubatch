'use client'

import IndustryPage from '@/components/pages/industries/IndustryPage'

const CONFIG = {
  hero: {
    title: 'Masterbatch for Construction',
    titleAccent: '& Civil Engineering',
    badge: 'CONSTRUCTION INDUSTRY',
    accentColor: '#2B8DD0',
    bgImage: '/images/heroes/construction.webp',
    sub: 'Black, filler, and additive masterbatch for geomembranes, waterproofing sheets, drainage boards, geotextiles, and HDPE civil engineering applications — UV-stable grades for demanding outdoor service environments.',
  },
  applications: {
    title: 'Construction & Civil Engineering Applications',
    sub: 'Construction-grade masterbatch must perform over multi-decade service lives under UV, heat, chemical exposure, and mechanical stress. Our grades are engineered for these conditions.',
    items: [
      { name: 'Geomembranes', desc: 'HDPE and LLDPE geomembranes for pond liners, landfill caps, tailings ponds, and containment structures — high-loading carbon black grades for UV protection.' },
      { name: 'Waterproofing Sheet', desc: 'HDPE and PP waterproofing sheet for below-grade structures, tunnels, bridge decks, and foundation walls. Requires consistent dispersion and high melt strength.' },
      { name: 'Drainage & Geonet', desc: 'Geonet, drainage cell, and dimpled membrane in HDPE for subsurface drainage, green roof systems, and retaining wall drainage layers.' },
      { name: 'Geotextile & Non-Woven', desc: 'PP spunbond and needle-punched geotextile for erosion control, road sub-base separation, and slope stabilisation — colour-coded grades available.' },
      { name: 'HDPE Piping Systems', desc: 'Large-diameter HDPE pressure pipe and corrugated drainage pipe for municipal infrastructure, stormwater, and civil ducting applications.' },
      { name: 'Building Film & Wrap', desc: 'Vapour barriers, DPM films, and underlay films for residential and commercial construction — filler grades to reduce cost, UV-inhibitor for outdoor applications.' },
    ],
  },
  keyPoints: [
    'High-loading black masterbatch (BLACK 31 FF, 60% SRF) — combine with UVS 404 HALS for extra outdoor UV life',
    'Consistent carbon black dispersion batch-to-batch for geomembrane and sheet integrity',
    'Filler masterbatch (FMPE-1070) reduces HDPE pipe and sheet material cost without wall thickness compromise',
    'Processing aid with antioxidant (PROCESSING AID 707 / 709) for smoother thick-wall extrusion',
    'Colour-coded geotextile grades for layer identification on site — standard BS/RAL colours held in stock',
    'TDS and CoA issued per batch; SVHC and RoHS declarations available for environmental compliance',
  ],
  products: {
    industryName: 'Construction & Civil Engineering',
    sub: 'Masterbatch grades selected for geomembrane, waterproofing, and civil engineering plastics.',
    items: [
      {
        series: 'BLACK 31 FF / 03 FF',
        tag: 'HIGH LOADING',
        name: 'Black MB — Geomembrane',
        desc: 'High-loading carbon black in PE carrier (60% SRF / 45% HAF) for geomembrane and outdoor construction film. Add UVS 404 where extra UV life is needed.',
        href: '/black-masterbatch',
        quote: 'Black MB UV Stable',
      },
      {
        series: 'FMPE SERIES',
        tag: 'MANUFACTURED',
        name: 'Filler Masterbatch (PE)',
        desc: '70–80% CaCO₃ in LDPE/HDPE carrier. Reduces material cost in geomembrane, drainage board, and construction film applications without compromising tensile or elongation.',
        href: '/fmpe',
        quote: 'Filler MB PE Series',
      },
      {
        series: 'UVS 404',
        tag: 'ADDITIVE',
        name: 'UV Stabiliser MB',
        desc: '20% HALS UV stabiliser in PE carrier for extended outdoor weathering resistance — for applications where black pigment alone is not enough.',
        href: '/additive-masterbatch',
        quote: 'Additive MB UV Stabiliser',
      },
      {
        series: 'PROCESSING AID 707 / 709',
        tag: 'ADDITIVE',
        name: 'Processing Aid + Antioxidant',
        desc: 'PPA with antioxidant in PE carrier. Reduces die build-up and supports thermal stability in thick-wall pipe and geomembrane extrusion.',
        href: '/additive-masterbatch',
        quote: 'Additive MB Processing Aid',
      },
      {
        series: 'CMB SERIES',
        name: 'Colour Masterbatch',
        desc: 'Site-identification colour coding for geotextile, drainage cell, and building film. Standard construction colours — black, orange, green, white — held in stock.',
        href: '/color-masterbatch',
        quote: 'Colour Masterbatch',
      },
      {
        series: 'FMPP SERIES',
        tag: 'MANUFACTURED',
        name: 'Filler Masterbatch (PP)',
        desc: '70–80% CaCO₃ in PP carrier. For PP waterproofing sheet, drainage board, and non-woven geotextile where PP carrier is required.',
        href: '/fmpp',
        quote: 'Filler MB PP Series',
      },
    ],
  },
  quoteForm: {
    industryLabel: 'Construction & Civil Engineering',
    defaultProduct: 'Black MB UV Stable',
    products: [
      { name: 'Black MB — Geomembrane (BLACK 31 FF)', sub: 'PE carrier · Outdoor service', value: 'Black MB UV Stable' },
      { name: 'Filler Masterbatch (FMPE)', sub: 'PE carrier · Geomembrane & construction film', value: 'Filler MB PE Series' },
      { name: 'Filler Masterbatch (FMPP)', sub: 'PP carrier · Sheet & geotextile', value: 'Filler MB PP Series' },
      { name: 'UV Stabiliser (UVS 404)', sub: 'HALS · Outdoor weathering', value: 'Additive MB UV Stabiliser' },
      { name: 'Processing Aid + AO (707 / 709)', sub: 'PE carrier · Thick-wall extrusion', value: 'Additive MB Processing Aid' },
      { name: 'Colour Masterbatch', sub: 'Site identification · Standard colours', value: 'Colour Masterbatch' },
      { name: 'Not sure yet', sub: "We'll recommend the right grade", value: 'Not sure — need recommendation' },
    ],
    applications: ['Geomembrane (Pond / Landfill)', 'Waterproofing Sheet', 'Drainage Board / Geonet', 'Geotextile / Non-Woven', 'HDPE Pipe (Large Diameter)', 'Building Film / Vapour Barrier', 'DPM / Underlay Film', 'Retaining Wall Drainage'],
  },
}

export default function ConstructionPage() {
  return <IndustryPage config={CONFIG} />
}
