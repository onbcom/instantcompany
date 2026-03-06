# Design Guidelines: InstantCompany.com

## Primary Directive
If an HTML/CSS template is provided, its visual identity (colors, typography, spacing, layout patterns, CSS classes, and style conventions) MUST be followed exactly. Do not override or reinterpret the aesthetics.

## Fallback Design (Only if no template is provided)
- **Core Aesthetic:** "High-Tech Minimalist" - clean, fast-loading, professional but modern.
- **Color Palette:**
  - Primary: Indigo (#4F46E5) - Represents trust and technology.
  - Secondary: Emerald (#10B981) - Represents growth and "Go" signal.
  - Background: Off-white (#F9FAFB) with pure white (#FFFFFF) cards.
  - Text: Slate-900 (#0F172A) for readability.
- **Typography:**
  - Sans-serif stack: Inter or Geist.
  - Headings: Bold, tight letter-spacing.
  - Body: Regular, leading-relaxed.

## Layout Patterns
- **Header:** Sticky navigation with logo on left, "Login" and "Start Now" (Primary CTA) on right.
- **Hero:** Centered or Split layout. Large input field must be the focal point.
- **Results Page:** A "Dashboard" feel with white cards on a light gray background to separate the generated assets (Name, Logo, Copy, etc.).
- **Footer:** 4-column layout (Product, Resources, Company, Legal).

## Responsive Rules
- Mobile first.
- Input fields must be at least 16px font size to prevent iOS zooming.
- Stack feature cards on mobile; 3-column on desktop.

## Components
- **The "Pulse" Loader:** When generating a business, use a sleek progress bar or a pulsing logo to indicate the AI is "thinking."
- **Copy-to-Clipboard:** Every generated asset (name, copy, pricing) should have a one-click copy button.