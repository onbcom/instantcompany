# Interactive Tool: AI Business Generator

## Tool Type
AI-Driven Concept to Blueprint Generator (Multi-step output).

## User Flow
1. **The Spark:** User enters 10-50 words describing an idea in the hero text area.
2. **The "Fabrication":** UI shows a loading state with cycling messages:
   - "Analyzing market gaps..."
   - "Generating brand identities..."
   - "Calculating optimal pricing..."
   - "Drafting launch copy..."
3. **The Reveal:** A structured results page appears.

## Specific Inputs & Outputs
- **Input:** `idea_description` (Text Area)
- **Outputs (Generated via AI Prompts):**
  - **Company Names:** 5 creative suggestions.
  - **Domain Names:** 3 available-style suggestions (e.g., [Name]HQ.com, Get[Name].co).
  - **Logo Concept:** A text description of a logo (e.g., "A minimalist bird icon in navy and gold").
  - **Positioning Statement:** "We help [Audience] do [Action] by [Unique Value]."
  - **Landing Page Copy:**
    - Hero Headline
    - 3 Benefit Bullets
    - 1 Social Proof Placeholder
  - **Pricing Model:** Suggested pricing (e.g., "$29/mo Subscription" or "$499 One-time").

## Post-Result CTA
- **Primary:** "Save Full Blueprint (Free Account)"
- **Secondary:** "Register [Domain Name]" (Affiliate link to registrar).

## Tracking Events
- `tool_start`: When the user clicks generate.
- `tool_complete`: When the results page fully loads.
- `blueprint_saved`: When the user converts on the results page.
- `copy_asset`: When the user clicks a copy-to-clipboard button on a specific section.

## Implementation Note
For the MVP/Standard build, use a pre-set library of high-quality prompt templates that inject the user's "Idea Description" into the system prompt to ensure the output is niche-specific and coherent.