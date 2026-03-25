# Design System Document: Editorial Excellence

## 1. Overview & Creative North Star

### The Creative North Star: "The Heritage Curator"
This design system is not merely a collection of components; it is an editorial manifesto. We move away from the "disposable digital" look of the modern web and embrace the permanence of a high-end physical publication. Our North Star is the **Heritage Curator**—an identity that feels established, authoritative, yet deeply cozy and inviting.

To achieve this, the system breaks from the rigid, centered grid. We favor **intentional asymmetry**: large, serif headlines that bleed into gutters, overlapping image-on-surface layouts, and significant shifts in tonal depth. We use the contrast between deep, shadowed greens and luminous gold to guide the eye through a narrative, rather than a list of features.

---

## 2. Colors

The palette is rooted in the "Forest & Gold" archetype. It uses deep, desaturated greens to provide a sense of security, accented by a premium golden primary color that mimics light hitting a dark room.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections or containers. The concept of a "line" is too clinical for this system. Boundaries must be defined through:
1. **Background Color Shifts:** Use `surface-container-low` against `surface` to define a section.
2. **Shadow play:** Using ambient, diffused depth to imply a container.
3. **Negative Space:** Using the Spacing Scale to let white space act as the divider.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of luxury cardstock. 
- **Base Layer:** `surface` (#0d1511).
- **Submerged Sections:** Use `surface-container-lowest` (#08100c) for footers or utility bars.
- **Elevated Modules:** Use `surface-container-high` (#242c27) for cards or interactive modules.
- **Nesting:** An "inner card" should always be one tier higher or lower than its parent container to create natural depth without borders.

### The Glass & Gradient Rule
To move beyond a flat "template" feel, use **Glassmorphism** for floating elements (like navigation bars or hovering action cards). 
- Use `surface-variant` with a 60-80% opacity and a `backdrop-blur` of 20px–40px.
- **Signature Gradients:** For primary CTAs or Hero backgrounds, use a subtle linear gradient from `primary` (#e9c176) to `primary_container` (#463100). This adds "soul" and a metallic, premium luster.

---

## 3. Typography

The typography is the voice of the curator. We exclusively use **Noto Serif** to maintain a classic, editorial feel.

- **Display Scale (`display-lg` to `display-sm`):** Reserved for high-level storytelling. Use these for the "Golden" headlines. The gold (`primary`) on the dark green background provides a high-contrast, trustworthy focal point.
- **Headline & Title Scale:** These provide the structural narrative. Use `on_surface` for standard headlines, switching to `primary` only for the most critical value propositions.
- **Body Scale:** High legibility is key. Use `body-lg` (1rem) as the standard to ensure the experience feels unhurried and premium.
- **Labels:** Use sparingly in `label-md` for metadata.

The combination of the serif's thick-and-thin strokes with the golden hue creates an "engraved" effect, reinforcing the brand's heritage.

---

## 4. Elevation & Depth

We eschew traditional "Material" shadows in favor of **Tonal Layering**.

- **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section. The human eye perceives the color shift as a change in depth, creating a soft, natural lift.
- **Ambient Shadows:** When a floating element is required (e.g., a modal or floating CTA), use an "Ambient Shadow." 
  - **Blur:** 40px–80px.
  - **Opacity:** 4%–8%.
  - **Color:** Use a tinted version of `on_surface` (a very dark green-grey) rather than pure black. This mimics natural light.
- **The "Ghost Border" Fallback:** If accessibility requires a border, use the `outline-variant` token at **15% opacity**. It should be felt, not seen.
- **Glassmorphism:** Use it to "ground" the UI. A frosted glass header allows the rich forest-green background to bleed through, making the site feel like one cohesive environment rather than separate blocks.

---

## 5. Components

### Buttons
- **Primary:** Gradient fill (`primary` to `primary_container`), `on_primary` text. High roundness (`full` or `xl`).
- **Secondary:** `surface-container-highest` background with a "Ghost Border."
- **Tertiary:** Text-only in `primary`, using `title-sm` weight.

### Cards & Lists
- **Prohibition:** No divider lines. Use `spacing.8` or `spacing.10` to separate list items.
- **Style:** Cards use `lg` (2rem) or `xl` (3rem) corner radius. Use `surface-container-high` to make them "pop" against the background.

### Input Fields
- Avoid boxes. Use a `surface-container-low` fill with a high roundness (`md`). The label should sit in `label-md` atop the field in `on_surface_variant`.

### Signature Component: The Editorial Spread
A layout component that combines a `display-md` headline in `primary`, an asymmetrical image with an `xl` corner radius, and `body-lg` text. This component should intentionally break the vertical rhythm to feel like a magazine feature.

---

## 6. Do's and Don'ts

### Do
- **Do** use the "Golden" `primary` color for the most important word in a headline to create a "highlight" effect.
- **Do** use `xl` (3rem) roundness for large layout containers to soften the "Monolith" feel.
- **Do** allow images to overlap container edges to create a sense of three-dimensional space.

### Don't
- **Don't** use 1px solid white or grey lines. Ever.
- **Don't** use pure black (#000000) for shadows. Use the deep green tones of the system.
- **Don't** cramp the content. If in doubt, increase the spacing by one tier (e.g., move from `spacing.6` to `spacing.8`).
- **Don't** use sans-serif fonts. The identity relies entirely on the sophisticated rhythm of Noto Serif.