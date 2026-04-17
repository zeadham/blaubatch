# Implementation Plan - Performance & UX Audit Fixes

Based on the website audit, the following actionable steps need to be executed to bring the site's performance score up and fix accessibility/UX issues.

## Proposed Steps

1. **[Claude Code] Compress Hero Image**
   - **Task**: Reduce `public/images/heroes/home.png` from 7.17 MB to ~300 KB using WebP. Use a node script with `sharp` or an external tool if available.
   - **Definition of Done**: `home.png` is replaced or accompanied by a smaller `home.webp` and `<Image>` in `Hero.jsx` points to the optimized asset.

2. **[Claude Code] Clean Up Duplicate Fonts**
   - **Task**: Remove `@import url(...)` for Google Fonts at the top of `app/globals.css`. The font is already being loaded optimally in `layout.jsx`.
   - **Definition of Done**: `@import` removed from `globals.css` with no loss of typography styles.

3. **[Claude Code] Remove Placeholder Client Logos**
   - **Task**: In `components/Clients.jsx`, either remove the placeholder SVG logos and comment out the section in `Home.jsx`, or replace them with text indicating they are pending. It is recommended to comment out the `<Clients />` usage in the App until real logos are provided.
   - **Definition of Done**: Dummy/placeholder logos no longer render on the live site.

4. **[Claude Code] Use `<Image>` tag in Industries.jsx**
   - **Task**: Replace the raw `<img>` tag inside `components/Industries.jsx` with Next.js `<Image src={ind.image} alt={ind.name} fill />` and manage the container position.
   - **Definition of Done**: Images in Industries section lazy-load and have proper `srcset` generation.

5. **[Claude Code] Optimize SVG Assets**
   - **Task**: Shrink `favicon.svg` and `logo-mark-navy.svg` (currently 250 KB each). You can use a Node script or run `npx svgo` to optimize them.
   - **Definition of Done**: Both SVGs are under ~10 KB.

6. **[Claude Code] Add `<main>` Landmark & Skip Link**
   - **Task**: Wrap `{children}` in `app/layout.jsx` in a `<main>` tag. Add a "Skip to content" anchor at the very top of `<body>` that targets `<main id="main-content">`.
   - **Definition of Done**: Screen readers can jump directly to `<main id="main-content">`.

7. **[Claude Code] Fix Color Contrast**
   - **Task**: In `Footer.jsx` and dropdowns, increase the opacity/lightness of subtitle text (e.g., `rgba(255,255,255,0.3)` -> `0.6`) to pass WCAG AA (4.5:1 ratio).
   - **Definition of Done**: Footer text is more readable and passes contrast checks.

8. **[Claude Code] Remove Dead Tailwind Usage**
   - **Task**: Since Tailwind is not being used in the components, remove `@import "tailwindcss";` from `globals.css` to save CSS bundle size.
   - **Definition of Done**: Dead CSS weight is removed.

9. **[Claude Code] Consolidate Component Data (Optional/Next Sprint)**
   - **Task**: Move `PRODUCTS` and `INDUSTRIES` arrays from inside components to a shared `lib/constants.js` file.
   - **Definition of Done**: DRY principles applied to navigation data.

## Files to Create/Modify
- `public/images/heroes/home.png` [MODIFY]
- `public/favicon.svg` [MODIFY]
- `public/logo-mark-navy.svg` [MODIFY]
- `app/globals.css` [MODIFY]
- `app/layout.jsx` [MODIFY]
- `components/Hero.jsx` [MODIFY]
- `components/Clients.jsx` / `components/Home.jsx` [MODIFY]
- `components/Industries.jsx` [MODIFY]
- `components/Footer.jsx` [MODIFY]

## Risks and Edge Cases
- **Image Next.js layout shift**: When swapping `<img>` for Next.js `<Image className="object-cover" fill />`, make sure the parent container maintains `position: relative` so the layout doesn't break.
- **Removing Tailwind**: Ensure no components secretly rely on Tailwind utility classes before removing the import.

---

# Implementation Plan - Masterbatch Object Morphs (Sustainability, Resources, Contact)

Shift the aesthetic focus from "dynamic splashes" to "morphed objects," where masterbatch pellets combine to form symbolic shapes for each page. Each image will maintain the high-end macro studio photography look with 3D rim lighting.

## Proposed Steps

1. **[Antigravity] Generate Sustainability Morph**: 
   - **Concept**: A lush **Green Leaf** or **Seedling** formed entirely by white and green masterbatch pellets. Some pellets are captured mid-air, falling away from the shape to signify growth.
   - **Definition of Done**: High-res PNG with sharp macro detail.

2. **[Antigravity] Generate Resources Morph**:
   - **Concept**: A **Lightbulb** or **Scientific Flask** composed of white and translucent pellets, symbolizing "Technical Insights" and "Full Spectrum Solutions."
   - **Definition of Done**: High-res PNG with crystalline detail.

3. **[Antigravity] Generate Contact Morph**:
   - **Concept**: A **Globe** or **Intertwined Hands/Partnership shape** formed by white and navy blue pellets, symbolizing global connectivity and collaboration.
   - **Definition of Done**: High-res PNG with strong 3D volume.

4. **[Antigravity] Asset Deployment**:
   - Move all generated assets to `public/images/brand-assets/`.
   - Update `MasterbatchDynamics.jsx` and the showcase page with these "Object" variants.

5. **[Claude Code] Page Integration**:
   - Update the heroes on their respective pages to use these new symbolic assets.

## Files to Create/Modify
- `public/images/brand-assets/sustainability-leaf.png` [NEW]
- `public/images/brand-assets/resources-insights.png` [NEW]
- `public/images/brand-assets/contact-partnership.png` [NEW]
- `components/shared/MasterbatchDynamics.jsx` [MODIFY]
- `app/brand-visuals/page.jsx` [MODIFY]

---

# Phase 3: Material Authenticity Reset [DONE]

Focus on hyper-macro landscapes and dynamic industrial contexts to achieve high realism.

12. **[Antigravity] Generate Component 1-3: Authenticity Series** [DONE]
    - Final selection: `hero-masterbatch-white.png` (White-on-White, Filled Frame, Authentic Texture).

13. **[Antigravity] Asset Deployment** [DONE]
    - Assets moved to `public/images/brand-assets/hero/`.

14. **[Claude Code] Hero Implementation** [PENDING HANDOFF]
    - Integrate `hero-masterbatch-white.png` as the primary background for the hero section.
    - Update `MasterbatchDynamics.jsx` to use the new "Authentic" asset.
