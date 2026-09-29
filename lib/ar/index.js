import common from './common'
import fmpe from './fmpe'
import products from './products'
import industriesA from './industries-a'
import industriesB from './industries-b'
import company from './company'
import pagesExtra from './pages-extra'
import legalBlog from './legal-blog'
import grades from './grades'

// Glossary: "full range" / "full spectrum" / "comprehensive" → شامل / شاملة (never طيف كامل or متكامل). Write "Coraplast" in Arabic as كورابلاست (Coraplast Industries → كورابلاست للصناعات).
// Merge every page dictionary here. Keys are the exact English strings used in the UI.
export const AR_DICT = { ...pagesExtra, ...legalBlog, ...common, ...fmpe, ...products, ...industriesA, ...industriesB, ...company, ...grades }
