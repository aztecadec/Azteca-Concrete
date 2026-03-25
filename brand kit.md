# Design System Strategy: The Organic Artisan

## 1. Overview & Creative North Star
This design system is built upon the Creative North Star of **"The Digital Curator."** We are not building a standard trade website; we are crafting a digital gallery for high-end concrete craftsmanship. The aesthetic prioritizes "Quiet Luxury"—an approach where the interface recedes to let the texture of the work and the depth of the palette speak.

To move beyond a "template" look, the system leverages **Intentional Asymmetry**. We break the rigid grid by using overlapping imagery, large-scale editorial type that bleeds into whitespace, and staggered card layouts. This mimics the organic, bespoke nature of concrete and nature itself.

---

## 2. Color & Tonal Depth

### Palette Philosophy
The palette is rooted in deep, arboreal greens and mineral tones.
- **Primary (`#b7cbbe`):** Used for key actions and subtle highlights.
- **Surface & Background (`#0d1511`):** A rich, near-black evergreen that provides the "canvas."
- **Deep Fir Tones:** Used to create "tonal pools" that guide the eye without the need for sharp lines.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders for sectioning or containment. 
Boundaries must be defined solely through:
- **Background Color Shifts:** A `surface-container-low` (`#151d19`) section sitting on a `surface` (`#0d1511`) background.
- **Vertical Whitespace:** Utilizing the Spacing Scale (Tokens 16-24) to create mental breaks between content blocks.

### Surface Hierarchy & Nesting
Treat the UI as physical layers. Use the `surface-container` tiers to create "nested" importance:
1. **Base:** `surface` (The floor)
2. **Sectioning:** `surface-container-low` (The area)
3. **Primary Content Cards:** `surface-container-highest` (The pedestal)

### The "Glass & Gradient" Rule
To add a premium "soul," use subtle linear gradients (e.g., `primary` to `primary-container`) on large CTAs. For floating navigation or modal overlays, apply **Glassmorphism**: use `surface` at 70% opacity with a `backdrop-blur` of 20px. This softens the digital edge and integrates the UI with the photography.

---

## 3. Typography: Editorial Authority

The typography scale balances the timeless weight of a Serif with the precision of a Modern Sans.

- **Display & Headline (Noto Serif):** These are the "hero" elements. Use `display-lg` (3.5rem) with tighter letter-spacing (-0.02em) to create an authoritative, editorial feel. These should often be the only elements in a large whitespace block.
- **Body & Titles (Manrope):** A clean, geometric sans-serif that ensures readability. `body-lg` (1rem) is the standard for descriptive text, while `title-lg` (1.375rem) provides a clear hierarchy for sub-headers.
- **Label (Manrope):** Use `label-md` (0.75rem) in uppercase with increased letter-spacing (+0.1em) for utility text like "SERVICE CATEGORY" to evoke a luxury fashion or architectural magazine feel.

---

## 4. Elevation & Depth

### The Layering Principle
Hierarchy is achieved through **Tonal Layering**. Instead of using shadows to lift an element, place a `surface-container-lowest` (`#08100c`) card inside a `surface-container-high` (`#242c27`) section. This creates a "recessed" or "inset" look that feels more architectural and stable than a floating shadow.

### Ambient Shadows
If an element must float (e.g., a "Get Estimate" floating button):
- **Blur:** Large (30px - 60px).
- **Opacity:** 4% - 8%.
- **Color:** Use a tinted version of the background (`#050c08`), never pure black. This mimics natural light diffusing through a space.

### The "Ghost Border" Fallback
If accessibility requires a container boundary, use a **Ghost Border**: `outline-variant` at 15% opacity. It should be felt, not seen.

---

## 5. Components

### Buttons
- **Primary:** `xl` roundedness (3rem). Background: `primary` gradient. Text: `on-primary`.
- **Secondary:** Transparent background with a `Ghost Border`. Text: `primary`.
- **Motion:** On hover, primary buttons should subtly expand their "inner glow" (box-shadow: inset 0 1px 1px rgba(255,255,255,0.1)).

### Cards & Lists
- **Rule:** Forbid divider lines.
- **Execution:** Use `md` (1.5rem) or `lg` (2rem) corner radii. Separate list items with Spacing Token 4 (1.4rem). Use a subtle `surface-container-highest` background for the active or hovered list item.
- **Imagery:** Cards should feature high-quality photography with `xl` (3rem) corner radii on one or two corners to create a signature "leaf" or "stone" shape.

### Input Fields
- **Style:** Underlined or softly filled (`surface-container-highest`). No four-sided borders.
- **Label:** Floating `label-sm` text that appears above the input upon focus.

### Navigation (The Signature Header)
Use a minimalist tree icon (the "Azteca" mark) as a center-aligned or far-left anchor. The navigation links should use `label-md` with generous horizontal spacing (Token 6).

---

## 6. Do's and Don'ts

### Do:
- **Use "Tonal Pools":** Use large, soft radial gradients in the background to highlight specific content areas.
- **Embrace Asymmetry:** Offset images from their text descriptions to create a sense of movement.
- **Prioritize Breathing Room:** If in doubt, add more whitespace. High-end brands aren't afraid of "empty" space.

### Don't:
- **Never use 100% opaque borders.** It breaks the "Quiet Luxury" aesthetic and feels like a bootstrap template.
- **Avoid standard "Material" shadows.** Harsh, small shadows look cheap in this context.
- **No pure white text.** Use `on-surface` (`#dce5dd`) to keep the "cozy" and "warm" tone of the brand. Pure white is too high-contrast for this palette.

### Accessibility Note:
While we use tonal shifts, ensure the contrast ratio between text (`on-surface`) and its immediate container (`surface-container`) always meets WCAG AA standards. If a background is too light for light text, switch to `on-primary-fixed` for that specific element.