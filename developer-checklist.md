# Developer Checklist: Geographic Relevance for "Carpentersville"

Implement the following changes across the website to ensure complete geographic relevance and consistency for our target service area, **Carpentersville**.

---

## 1. URL Slug Structure

- [ ] Ensure all 12 core service pages follow a **flat URL architecture** containing the service and city name, with no subfolders.
  - Format: `mydomain.com/epoxy-flooring-carpentersville`
  - **Do not use `/services/` folders.**

---

## 2. Title Tags & Meta Data

- [ ] **Title Tags:** Update the title tag for every service page to explicitly include the service and the city name.
  - Do not leave any title tags as just "Home" or just the brand name.
  - Format: `[Service Name] in Carpentersville, IL | [Brand Name]`
- [ ] **H1 Tags:** Ensure the primary `<h1>` heading on every page matches the intent of the title tag by including both the specific service and "Carpentersville".

---

## 3. "Above the Fold" Content (Goal Completion)

- [ ] The very first paragraph on every page must establish "goal completion" by immediately answering the user's need.
- [ ] It must mention the specific service **and** "Carpentersville" in the first 1–2 sentences.
  - Example: *"Need professional epoxy flooring in Carpentersville? We provide..."*

---

## 4. Schema Markup (Critical)

- [ ] Add **LocalBusiness Schema in JSON-LD format** to the `<head>` section of the GBP landing page (homepage).
- [ ] Schema must include:
  - Exact business name
  - Phone number
  - Carpentersville address
  - All fields must match our **Google Business Profile character-for-character**
- [ ] Test the schema in the [Google Structured Data Testing Tool](https://search.google.com/test/rich-results) — **zero errors required**.

---

## 5. NAP (Name, Address, Phone) Consistency

- [ ] Audit the entire site — header, footer, contact pages, and all hardcoded text — to ensure the address explicitly lists **Carpentersville** and matches the Google Business Profile format exactly.
- [ ] Search the codebase for any old city names previously targeted (e.g., **"Chicago"**) and replace with **Carpentersville** to prevent confusing Google's algorithm.
  - Run a full codebase search: look for `Chicago`, `Naperville`, `Schaumburg`, and any other cities used in copy or metadata.

---

## 6. Internal Linking & Embeds

- [ ] When linking from the homepage to service pages, use **contextual editorial links within paragraphs** that mention "Carpentersville" and the service — do not rely solely on the navigation bar.
- [ ] Embed the **actual Google Business Profile map** for the Carpentersville location on the homepage and contact page — not a generic Google map of the city.
  - The GBP map iframe is already embedded on the homepage in `ServiceAreas.astro`. Verify it points to the correct GBP listing.
