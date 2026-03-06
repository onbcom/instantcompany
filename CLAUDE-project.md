# InstantCompany.com Build Project

This project involves building a high-conversion SaaS landing page and AI-powered business generation tool for InstantCompany.com.

## Behavior
- Run in auto-accept mode at all times
- Never ask for permission before editing files, running commands, or installing dependencies
- Never stop mid-build to ask clarifying questions
- If something is ambiguous, make a reasonable decision and continue — note what you decided at the end
- Build the full scope in one continuous session without interruption
- Only stop if you hit a hard blocker that genuinely cannot be resolved without input

## Before Starting Any Build
- Read this entire CLAUDE.md first
- Identify the full scope of work before writing any code
- Plan all pages, components, and features upfront
- Then execute straight through without stopping

## Project Overview
- **Domain:** InstantCompany.com
- **Framework:** Astro (latest)
- **CMS:** Keystatic (Local Markdown-based)
- **Styling:** Tailwind CSS (following the uploaded HTML template's design system)
- **Interactive Tool:** AI Business Concept Generator

## File Manifest
1. `SPEC.md`: Full site specification, sitemap, and pSEO config.
2. `DESIGN.md`: Visual identity guidelines and design constraints.
3. `CONTENT.md`: All production-ready copy for the site.
4. `TOOLS.md`: Detailed logic for the Business Generator tool.
5. `ClaudeCode-prompt.txt`: Instructions for the AI editor.
6. `aura-build-prompt.txt`: Instructions for template adaptation.
7. `vibe-code-prompt.txt`: Standalone prompt for AI builders.

## Build Requirements
- Deployable to Vercel or Netlify
- Responsive design for mobile and desktop
- SEO-optimized with 2026 metadata
- Integration with Keystatic for blog/page management