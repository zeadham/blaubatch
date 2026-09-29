'use client'

import IndustryPage from '@/components/pages/industries/IndustryPage'

const CONFIG = {
  hero: {
    title: 'Masterbatch for',
    titleAccent: 'Agriculture',
    badge: 'AGRICULTURE INDUSTRY',
    accentColor: '#22C55E',
    bgImage: '/images/heroes/agriculture.webp',
    sub: 'UV-stabilised and carbon-black masterbatch for mulch film, greenhouse covering, silage wrap, drip irrigation tubing, and shade netting — formulated for MENA and Mediterranean growing conditions.',
  },
  applications: {
    title: 'Agricultural Film & Covering Applications',
    sub: 'From season-length mulch film to multi-year greenhouse covering, our agricultural grades are HALS-stabilised and field-tested for Egypt and MENA climate conditions.',
    items: [
      { name: 'Mulch Film', desc: 'Black and coloured LLDPE/LDPE mulch film with UV stability rated 1–3 seasons. CaCO₃ filler reduces cost.' },
      { name: 'Greenhouse Covering Film', desc: 'UV-transparent or thermal greenhouse film — UV stabiliser grades rated 3–5 years under continuous exposure.' },
      { name: 'Silage Wrap & Bale Film', desc: 'Black UV-stable stretch film for silage bales and fodder preservation. Tear-resistant formulations.' },
      { name: 'Drip Irrigation Tubing', desc: 'Black LLDPE/LDPE tape with UV stabiliser and filler masterbatch for multi-season drip systems.' },
      { name: 'Shade Netting', desc: 'PP monofilament shade netting with UV stabiliser masterbatch — 30%, 50%, and 80% shading levels.' },
      { name: 'Soil Fumigation Film', desc: 'Clear or black low-thickness LDPE film for solarisation and chemical soil treatment applications.' },
    ],
  },
  keyPoints: [
    'HALS (Hindered Amine Light Stabiliser) technology — proven protection in high UV-index regions',
    'UV stabiliser loading customised to expected service life: 1 season, 3 years, or 5+ years',
    'Black carbon black grades provide combined UV protection and soil-heating effect for mulch',
    'Filler masterbatch at 5–10% reduces blown film cost without compromising tensile strength',
    'Anti-fog additive (AFG 8012) for greenhouse film to improve condensation management',
    'All agricultural grades supplied with TDS showing UV transmittance and weathering data',
  ],
  products: {
    industryName: 'Agriculture',
    sub: 'UV protection, filler, and colour grades for all major agricultural film and covering applications.',
    items: [
      {
        series: 'UVS 168 / 426 / 404',
        tag: 'UV STABILISER',
        name: 'UV Additive Masterbatch',
        desc: 'HALS UV stabilisers in PE carrier at 10%, 15%, and 20% loading. For mulch film, greenhouse cover, and drip tape — UVS 406 / 439 for PP shade netting.',
        href: '/additive-masterbatch',
      },
      {
        series: 'BLACK 10 FF',
        tag: 'UV STABLE',
        name: 'Black MB — Agricultural',
        desc: '40% ISAF carbon black in PE carrier. For mulch film, silage wrap, and drip tape — provides UV protection and soil-heat effect simultaneously.',
        href: '/black-masterbatch',
      },
      {
        series: 'FMPE SERIES',
        tag: 'MANUFACTURED',
        name: 'Filler Masterbatch',
        desc: '70–80% CaCO₃ in LDPE. Used at 5–12% in agricultural film to reduce cost while maintaining the elongation and tear resistance needed in the field.',
        href: '/fmpe',
      },
      {
        series: 'CMB SERIES',
        name: 'Colour Masterbatch',
        desc: 'Red, green, black, white, and grey for coloured mulch film. Different colours affect soil temperature and weed suppression differently.',
        href: '/color-masterbatch',
      },
      {
        series: 'SLIP CE 105',
        name: 'Slip Additive',
        desc: '5% erucamide slip agent in PE carrier. Improves film-to-film release in greenhouse and mulch film rolls and reduces friction during mechanical laying.',
        href: '/additive-masterbatch',
      },
      {
        series: 'WHITE 57 FF',
        name: 'White Masterbatch',
        desc: 'Reflective white mulch film grade — increases light reflection to the crop canopy. Used in strawberry, vegetable, and melon cultivation.',
        href: '/white-masterbatch',
      },
    ],
  },
  quoteForm: {
    industryLabel: 'Agricultural Film & Covering',
    defaultProduct: 'Additive MB UV Stabiliser',
    products: [
      { name: 'UV Stabiliser Additive (UVS series)', sub: 'HALS-based · Mulch & greenhouse film', value: 'Additive MB UV Stabiliser' },
      { name: 'Black MB — Agricultural (BLACK 10 FF)', sub: 'UV stable · Mulch film & drip tape', value: 'Black MB UV Stable' },
      { name: 'Filler Masterbatch (FMPE)', sub: 'LDPE carrier · Cost reduction in film', value: 'Filler MB PE Series' },
      { name: 'Colour Masterbatch', sub: 'Coloured mulch film', value: 'Colour Masterbatch' },
      { name: 'Not sure yet', sub: "We'll recommend the right grade", value: 'Not sure — need recommendation' },
    ],
    applications: ['Mulch Film', 'Greenhouse Film', 'Silage Wrap', 'Drip Irrigation Tubing', 'Shade Netting', 'Soil Fumigation Film', 'Tunnel Cover Film', 'Twine & Baler Twine'],
  },
}

export default function AgriculturePage() {
  return <IndustryPage config={CONFIG} />
}
