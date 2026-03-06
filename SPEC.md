# Site Specification: InstantCompany.com

## Inputs & Assumptions
- **Niche:** AI-driven business creation and entrepreneurial tools.
- **Target Audience:** Aspiring founders, serial entrepreneurs, and domain flippers.
- **Tech Stack:** Astro, Keystatic (CMS), Tailwind CSS.

## Sitemap & Routes
1. **Home (`/`):** Hero with business generator input, social proof, how it works.
2. **Generator Results (`/generate`):** Dynamic route to display the generated business blueprint.
3. **Industries (`/industries`):** pSEO hub listing all supported sectors.
4. **Industry Detail (`/industries/[industry]`):** pSEO landing pages for specific niches.
5. **Success Stories (`/stories`):** Blog/Case studies of companies started using the tool.
6. **Pricing (`/pricing`):** Simple tiered pricing for "Pro" features (PDF export, domain registration).

## pSEO Configuration
- **Entity Type:** Startup Niche / Business Category
- **Target Keywords:** "How to start a [Niche] business", "Business plan for [Niche]", "AI [Niche] generator".
- **Route Options:**
  1. `/start-a-[niche]-business`: Good for "How-to" intent.
  2. `/ideas/[niche]`: Better for inspiration seekers.
  3. `/ai-generator/[niche]`: (Selected) Directly aligns with the tool's core value proposition and captures high-intent AI search traffic.
- **Selected Route:** `/ai-generator/[niche]`
- **Sample Entities:** "Real Estate", "Pet Grooming", "SaaS", "E-commerce", "Coffee Shop", "Consulting".

## CMS Setup (Keystatic)
- **Collection: Stories**
  - Fields: Title, Industry, Founder Name, Quote, Body (Markdown).
- **Collection: Guides**
  - Fields: Title, Category, Meta Description, Content (Long-form SEO content).

## Conversion Specs
- **Primary Goal:** User submits the business idea form.
- **Secondary Goal:** User signs up for the "Full Blueprint" (Lead magnet/Pro tier).
- **Tracking:** Event trigger on "Generate" button click; Event trigger on "Copy to Clipboard".

## Compliance
- Standard Terms of Service and Privacy Policy pages required.
- Disclaimer: "AI-generated content is for inspirational purposes. Entrepreneurship involves risk." (Included in footer).