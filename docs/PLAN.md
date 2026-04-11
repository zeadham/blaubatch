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
