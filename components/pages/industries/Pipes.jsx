'use client'

import IndustryPage from '@/components/pages/industries/IndustryPage'

const CONFIG = {
  hero: {
    title: 'Masterbatch for Pipes,',
    titleAccent: 'Fittings & Profiles',
    badge: 'PIPE INDUSTRY',
    accentColor: '#D4840A',
    bgImage: '/images/heroes/pipes.webp',
    sub: 'Black, filler, and colour masterbatch for HDPE pressure pipe (PE100), PPR hot water systems, PVC drainage, corrugated conduit, and irrigation tubing — with TDS and CoA on every batch.',
  },
  applications: {
    title: 'Pipe & Fitting Applications',
    sub: 'From large-diameter HDPE pressure mains to small-bore irrigation drip tape, our masterbatch grades are formulated for the demanding requirements of pipe extrusion and injection-moulded fittings.',
    items: [
      { name: 'HDPE Pressure Pipe (PE100)', desc: '45% HAF carbon black in PE carrier (BLACK 03 FF / 51 FF), dosed to the carbon black level PE100 pipe standards require — typically 2–2.5%.' },
      { name: 'PPR Hot Water Systems', desc: 'Colour masterbatch in PP carrier for polypropylene random copolymer hot and cold water pipe systems.' },
      { name: 'PVC Drainage & Sewer', desc: 'Filler and colour masterbatch compatible with rigid PVC pipe extrusion; grey and black standard tones.' },
      { name: 'Corrugated Conduit', desc: 'HDPE and PP black masterbatch for corrugated electrical conduit and cable protection pipe.' },
      { name: 'Drip Irrigation Tubing', desc: 'Low-loading filler masterbatch and UV-stable black for LLDPE and LDPE drip tape and micro-irrigation tubing.' },
      { name: 'Injection-Moulded Fittings', desc: 'Colour and additive masterbatch for PE, PP, and PVC injection-moulded pipe fittings and connectors.' },
    ],
  },
  keyPoints: [
    'BLACK 03 FF / 51 FF: 45% HAF carbon black, dosed to reach the 2–2.5% carbon black typical of PE100 black pipe',
    'High-structure carbon black for maximum UV protection and long service life',
    'UV-stable black grades rated 10+ years outdoor performance for above-ground pipe',
    'Tight dispersion — no agglomerates that could cause stress concentrations in pressure pipe',
    'All pipe-grade concentrates supplied with full TDS, CoA, and material declarations',
    'Colour grades in PP carrier for PPR systems — heat-stable at PPR processing temperatures',
  ],
  products: {
    industryName: 'Pipes & Fittings',
    sub: 'Pipe-extrusion masterbatch with TDS and CoA on every batch. Contact us for a grade recommendation.',
    items: [
      {
        series: 'BLACK 03 FF / 51 FF',
        tag: 'PIPE EXTRUSION',
        name: 'Black MB — Pipe Extrusion',
        desc: '45% HAF carbon black in PE carrier. Dosed to the carbon black level your pipe standard specifies — typically 2–2.5% for PE100 black pipe. Good dispersion and UV protection.',
        href: '/black-masterbatch',
        quote: 'Black MB Pipe Grade',
      },
      {
        series: 'BLACK 10 FF',
        tag: 'UV STABLE',
        name: 'Black MB — UV Stable',
        desc: '40% ISAF carbon black in PE carrier. For above-ground pipe, drip tape, and corrugated conduit requiring long-term UV resistance.',
        href: '/black-masterbatch',
        quote: 'Black MB UV Stable',
      },
      {
        series: 'FMPE SERIES',
        tag: 'MANUFACTURED',
        name: 'Filler Masterbatch',
        desc: '70–80% CaCO₃ in LDPE. Used at low addition levels in drainage pipe and corrugated conduit to improve rigidity and reduce cost.',
        href: '/fmpe',
        quote: 'Filler MB PE Series',
      },
      {
        series: 'PPA 249 / PROCESSING AID 707',
        name: 'Processing Aid',
        desc: 'PFAS-free PPA (PPA 249) and PPA with antioxidant (PROCESSING AID 707) in PE carrier. Reduce die build-up and melt fracture in pipe and tubing extrusion.',
        href: '/additive-masterbatch',
        quote: 'Additive MB Processing Aid',
      },
      {
        series: 'CMB SERIES',
        name: 'Colour Masterbatch',
        desc: 'Custom colours for pipe system colour-coding (gas — yellow, water — blue, telecom — orange). RAL-matched on request.',
        href: '/color-masterbatch',
        quote: 'Colour Masterbatch',
      },
      {
        series: 'UVS 168 / 426',
        name: 'UV Stabiliser',
        desc: 'HALS-based UV stabiliser for drip tape, irrigation pipe, and thin-wall LDPE tubing used in outdoor agricultural applications.',
        href: '/additive-masterbatch',
      },
    ],
  },
  quoteForm: {
    industryLabel: 'Pipes & Fittings',
    defaultProduct: 'Black MB Pipe Grade',
    products: [
      { name: 'Black MB — Pipe Extrusion (BLACK 03 FF / 51 FF)', sub: 'PE carrier · 45% HAF', value: 'Black MB Pipe Grade' },
      { name: 'Black MB — UV Stable (BLACK 10 FF)', sub: 'PE carrier · Agricultural & conduit', value: 'Black MB UV Stable' },
      { name: 'Filler Masterbatch (FMPE)', sub: 'LDPE carrier · Drainage pipe', value: 'Filler MB PE Series' },
      { name: 'Processing Aid (PPA 249 / 707)', sub: 'PE carrier · Pipe extrusion', value: 'Additive MB Processing Aid' },
      { name: 'Colour Masterbatch', sub: 'Pipe colour coding', value: 'Colour Masterbatch' },
      { name: 'Not sure yet', sub: "We'll recommend the right grade", value: 'Not sure — need recommendation' },
    ],
    applications: ['HDPE Pressure Pipe (PE100)', 'PPR Hot Water Pipe', 'PVC Drainage', 'Corrugated Conduit', 'Drip Irrigation Tubing', 'Pipe Fittings (Injection Moulding)', 'Gas Pipe', 'Telecom Conduit'],
  },
}

export default function PipesPage() {
  return <IndustryPage config={CONFIG} />
}
