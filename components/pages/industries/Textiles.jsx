'use client'

import IndustryPage from '@/components/pages/industries/IndustryPage'

const CONFIG = {
  hero: {
    title: 'Masterbatch for',
    titleAccent: 'Textiles & Fibre',
    badge: 'TEXTILES INDUSTRY',
    accentColor: '#A855F7',
    bgImage: '/images/heroes/textiles.webp',
    sub: 'Colour, black, filler, and UV-stabiliser masterbatch for PP non-woven, filament yarn, staple fibre, geotextiles, and spunbond fabric — formulated for fibre-spinning and fine-denier applications.',
  },
  applications: {
    title: 'Textile & Fibre Applications',
    sub: 'Masterbatch for fibre and textile processing requires exceptional dispersion — any agglomerates will cause filament breaks, nozzle blockage, and fabric defects. Our fibre grades are formulated accordingly.',
    items: [
      { name: 'PP Non-woven (Spunbond / Meltblown)', desc: 'Colour, black, and filler masterbatch for hygiene, medical, and geotextile spunbond PP non-woven fabric.' },
      { name: 'Filament Yarn (BCF & FDY)', desc: 'Fine-denier PP and PET carpet yarn and fashion yarn — colour masterbatch with zero agglomerates and MFI-matched carriers.' },
      { name: 'Staple Fibre', desc: 'PP staple fibre for wadding, stuffing, automotive NVH, and technical felts. Colour and filler masterbatch grades.' },
      { name: 'Raffia & Woven Fabric', desc: 'PP raffia tape for FIBC bags, woven sacks, carpet backing, and geotextiles. Filler and colour masterbatch.' },
      { name: 'Geotextiles', desc: 'UV-stabilised PP geotextile non-woven and woven fabric for road construction, drainage, and erosion control.' },
      { name: 'Spunlace & Airlaid', desc: 'Colour and functional additive masterbatch for spunlace non-woven used in wipes and medical applications.' },
    ],
  },
  keyPoints: [
    'Fibre-grade dispersion rating — particle size <5 µm to prevent filament breaks in fine-denier spinning',
    'MFI-matched carrier selection ensures no viscosity upset at the spinning die',
    'Black fibre grades in PP (BLACK 93 FF, 210 FF) and in PET for high-speed spinning (BLACK 207 FY, 284 FY)',
    'Optical brightener (BRIGHTNER 1602) for a brighter white in non-woven and fibre',
    'PP homopolymer carrier grades compatible with standard PP fibre and raffia extrusion lines',
    'Full CoA and colour batch records for quality traceability in textile supply chains',
  ],
  products: {
    industryName: 'Textiles & Fibre',
    sub: 'Fibre-grade masterbatch for PP non-woven, yarn, raffia, and geotextile applications.',
    items: [
      {
        series: 'CMB SERIES',
        name: 'Colour Masterbatch',
        desc: 'Fibre-grade colour concentrates in PP homopolymer carrier. Full colour gamut, RAL/Pantone matching, MFI-optimised for spinning.',
        href: '/color-masterbatch',
      },
      {
        series: 'BLACK 93 FF / 210 FF',
        name: 'Black MB — PP Fibre',
        desc: 'Carbon black in PP carrier (40% ISAF / 35% HMF). For PP non-woven, filament yarn, and raffia — BLACK 93 FF is food-compliant (EU AP 89(1)).',
        href: '/black-masterbatch',
      },
      {
        series: 'FMPP SERIES',
        tag: 'MANUFACTURED',
        name: 'Filler Masterbatch (PP)',
        desc: '70–80% CaCO₃ in PP homopolymer carrier. Used in raffia, woven sacks, and staple fibre to reduce cost and improve stiffness.',
        href: '/fmpp',
      },
      {
        series: 'BLACK 207 FY / 284 FY',
        tag: 'PET FIBRE',
        name: 'Black MB — PET Fibre',
        desc: '30% carbon black in PET carrier, made for high-speed filament and fibre spinning.',
        href: '/black-masterbatch',
      },
      {
        series: 'BRIGHTNER 1602',
        tag: 'OPTICAL BRIGHTENER',
        name: 'Optical Brightener',
        desc: 'Optical brightener in PE carrier. Lifts whiteness in non-woven, fibre, and woven fabric — ask us about compatibility with your PP line.',
        href: '/additive-masterbatch',
      },
      {
        series: 'UVS 406 / 439',
        name: 'UV Stabiliser',
        desc: '20% HALS UV stabiliser in PP carrier for outdoor geotextile and construction fabric that needs long-term UV resistance.',
        href: '/additive-masterbatch',
      },
    ],
  },
  quoteForm: {
    industryLabel: 'Textiles & Fibre',
    defaultProduct: 'Colour Masterbatch',
    products: [
      { name: 'Colour Masterbatch', sub: 'Fibre-grade · PP carrier', value: 'Colour Masterbatch' },
      { name: 'Black MB — Fibre (BLACK 93 FF / 207 FY)', sub: 'PP & PET fibre', value: 'Black MB Fibre' },
      { name: 'Filler Masterbatch (FMPP)', sub: 'CaCO₃ · Raffia & woven sacks', value: 'Filler MB PP Series' },
      { name: 'UV Stabiliser (UVS 406 / 439)', sub: 'PP carrier · Geotextiles', value: 'Additive MB UV Stabiliser' },
      { name: 'Optical Brightener (BRIGHTNER 1602)', sub: 'PE carrier · Whiteness boost', value: 'Additive MB Optical Brightener' },
      { name: 'Not sure yet', sub: "We'll recommend the right grade", value: 'Not sure — need recommendation' },
    ],
    applications: ['PP Non-woven (Spunbond)', 'PP Non-woven (Meltblown)', 'Filament Yarn', 'Staple Fibre', 'Raffia / Woven Sacks', 'Geotextiles', 'Spunlace / Wipes', 'FIBC Bags'],
  },
}

export default function TextilesPage() {
  return <IndustryPage config={CONFIG} />
}
