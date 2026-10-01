'use client'

import IndustryPage from '@/components/pages/industries/IndustryPage'

const CONFIG = {
  hero: {
    title: 'Masterbatch for Automotive',
    titleAccent: '& Technical Moulding',
    badge: 'AUTOMOTIVE INDUSTRY',
    accentColor: '#EF4444',
    bgImage: '/images/heroes/automotive.webp',
    sub: 'Colour, additive, and filler masterbatch for automotive interior trim, under-hood technical components, injection-moulded housings, and PP/ABS technical parts — heat-stable formulations for demanding processing conditions.',
  },
  applications: {
    title: 'Automotive & Technical Applications',
    sub: 'Automotive masterbatch must survive high injection temperatures, resist UV in interior applications, and meet OEM colour specifications. Our technical grades are formulated for these demands.',
    items: [
      { name: 'Interior Trim Components', desc: 'Dashboard, door panels, console trim in PP, ABS, or PC/ABS — colour matched to OEM RAL/NCS or Pantone specifications.' },
      { name: 'Under-hood Technical Parts', desc: 'Heat-stable colour and additive masterbatch for battery casings, fluid reservoirs, air ducts, and engine covers in PA and PP.' },
      { name: 'Bumpers & Exterior Cladding', desc: 'UV-stable colour masterbatch for PP bumper fascia, fender extensions, and exterior trim that requires outdoor UV stability.' },
      { name: 'Foam & Cushioning', desc: 'Colour masterbatch for PP foam and seat cushion components; anti-static grades for automotive electronics protection.' },
      { name: 'Technical Injection Moulding', desc: 'Filler masterbatch in PP and HDPE for engineering-class injection mouldings where stiffness and cost optimisation are required.' },
      { name: 'Wiring Harness & Connectors', desc: 'IEC-colour-coded masterbatch for automotive wiring harness insulation and connector housings.' },
    ],
  },
  keyPoints: [
    'Heat-stable pigment systems — processed at 220–280°C without colour shift or plate-out',
    'Light-stable grades with HALS UV stabilisers (UVS 406 / 439) for trim subject to solar load',
    'OEM colour matching capability — RAL, NCS, Pantone, or colour chip references accepted',
    'Filler masterbatch improves rigidity and reduces shrinkage in large-format structural PP parts',
    'Anti-static additive prevents dust attraction in instrument clusters and electronic housings',
    'Full CoA, colour batch records, and SVHC declarations available for tier-1 supplier audits',
  ],
  products: {
    industryName: 'Automotive & Technical',
    sub: 'Technical-grade masterbatch for automotive interior, exterior, and under-hood applications.',
    items: [
      {
        series: 'CMB SERIES',
        tag: 'OEM COLOUR MATCH',
        name: 'Colour Masterbatch',
        desc: 'Heat-stable, light-stable colour concentrates for PP, ABS, PA, and PC/ABS. OEM RAL/Pantone matching, custom colour development from chip.',
        href: '/color-masterbatch',
        quote: 'Colour Masterbatch',
      },
      {
        series: 'FMPP SERIES',
        tag: 'MANUFACTURED',
        name: 'Filler Masterbatch (PP)',
        desc: '70–80% CaCO₃ in PP homopolymer. Improves stiffness-to-weight in structural injection mouldings. Reduces material cost in high-volume automotive parts.',
        href: '/fmpp',
        quote: 'Filler MB PP Series',
      },
      {
        series: 'UVS 406 / 439',
        tag: 'UV STABLE',
        name: 'UV Stabiliser MB',
        desc: '20% HALS UV stabiliser in PP carrier. For exterior PP trim and bumper cladding — slows greying, chalking, and colour fade.',
        href: '/additive-masterbatch',
        quote: 'Additive MB UV Stabiliser',
      },
      {
        series: 'AST 349 / 335 / 347',
        tag: 'ANTI-STATIC',
        name: 'Anti-static Masterbatch',
        desc: 'Anti-static concentrates in PE (AST 349) and PS (AST 335, 347) carriers. For housings and covers where static charge attracts dust — ask us about compatibility with your polymer.',
        href: '/additive-masterbatch',
        quote: 'Additive MB Anti-static',
      },
      {
        series: 'BLACK 210 FF / 93 FF',
        name: 'Black MB — PP',
        desc: 'Carbon black in PP carrier (35% HMF / 40% ISAF). For black PP interior and under-hood mouldings — jet-black finish and UV protection.',
        href: '/black-masterbatch',
        quote: 'Black MB PP Series',
      },
      {
        series: 'FMPE SERIES',
        tag: 'MANUFACTURED',
        name: 'Filler Masterbatch (PE)',
        desc: 'LDPE carrier filler masterbatch for HDPE automotive components — fluid reservoirs, tool storage, wheel arch liners, and non-structural panels.',
        href: '/fmpe',
      },
    ],
  },
  quoteForm: {
    industryLabel: 'Automotive & Technical Moulding',
    defaultProduct: 'Colour Masterbatch',
    products: [
      { name: 'Colour Masterbatch (OEM match)', sub: 'PP / ABS / PA carrier · Interior & exterior', value: 'Colour Masterbatch' },
      { name: 'Filler Masterbatch (FMPP)', sub: 'PP carrier · Structural injection moulding', value: 'Filler MB PP Series' },
      { name: 'UV Stabiliser (UVS 406 / 439)', sub: 'HALS · PP exterior trim', value: 'Additive MB UV Stabiliser' },
      { name: 'Anti-static (AST series)', sub: 'PE / PS carrier · Housings', value: 'Additive MB Anti-static' },
      { name: 'Black MB — PP (BLACK 210 FF / 93 FF)', sub: 'PP carrier · Interior & under-hood', value: 'Black MB PP Series' },
      { name: 'Not sure yet', sub: "We'll recommend the right grade", value: 'Not sure — need recommendation' },
    ],
    applications: ['Interior Trim (Injection Moulding)', 'Exterior Cladding / Bumpers', 'Under-hood Components', 'Wiring Harness / Connectors', 'Seat Components', 'Electronic Housings', 'Foam & Cushioning', 'Fluid Reservoirs'],
  },
}

export default function AutomotivePage() {
  return <IndustryPage config={CONFIG} />
}
