# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DFW Crash Pads is a single-page marketing website for a bouldering crash pad rental service. The site features a light, minimalistic, boxy design with outdoorsy, approachable aesthetics.

**Tech Stack:**
- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4 (with new `@theme` directive syntax)
- Google Fonts (Outfit, DM Sans)

## Development Commands

```bash
# Install dependencies
npm install

# Development server (localhost:3000)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Content Management

**All pricing and contact information is stored in `config/site.json`.**

This is the primary file users edit to update:
- Business name and tagline
- Contact details (email, phone, Instagram)
- Pricing tiers (individual pads and combo packs with dimensions)
- Reservation message

The site automatically pulls all content from this JSON configuration. When users ask to update pricing or contact info, edit this file.

**Pricing Structure:**
- All rentals are per day
- Individual pads: Large ($35), Medium ($25), Small/Supplement ($10)
- Combo packs with multiple pads for better value
- Each pricing tier includes dimensions and description

## Architecture

### Single-Page Application Structure

The site uses a single-page design with smooth scroll navigation:

1. **Hero Section** - Clean typography with location badge and CTAs
2. **Pricing Section** - Grid of pricing cards for individual pads and combo packs
3. **Contact Section** - Email, phone, and Instagram contact details
4. **Footer** - Simple decorative elements and copyright

### Styling Architecture

**Tailwind CSS v4 (New Syntax):**
- Uses `@theme inline` directive in `app/globals.css` instead of `tailwind.config.ts`
- Custom CSS variables defined in `:root`
- Theme tokens defined in `@theme` block
- Imports must come BEFORE `@import "tailwindcss"`

**Color Palette (Outdoorsy, Light Theme with Pastels):**
- Background: Off-white (#faf9f6)
- Cream: #f5f3ed
- Sage: #8b9d77 (soft green)
- Moss: #5a6f4a (darker green)
- Terracotta: #d4846c (warm accent)
- Sand: #e8dcc4
- Forest: #3d4f2f (dark text)

**Simplified Color Palette:**

Primary accent colors (used consistently throughout):
- Lime Green: #7cb342 (primary CTA button, popular badge, decorative bars, location badge border)
- Orange: #ff9800 (secondary CTA button, decorative bars)

Supporting colors:
- Light green background: #e8f5e9 (popular pricing cards, location badge)
- Light gray: #f5f5f5 (contact boxes, neutral backgrounds)
- Border gray: #e0e0e0 (subtle borders)
- White: #ffffff (pricing cards, main backgrounds)
- Cream: #fff9f0 (pricing section background)

The design uses a minimal color palette focused on green and orange accents, with neutral backgrounds to keep the design clean and simple.

**Typography:**
- Display/Headings: Outfit (modern, friendly, slightly rounded)
- Body: DM Sans (clean, readable)
- All fonts loaded via Google Fonts CDN in `globals.css`

### Design System

**Minimalistic, Boxy Approach:**
- Rounded corners (rounded-xl, rounded-2xl, rounded-3xl) instead of sharp angles
- Simple box shadows for depth instead of complex clip paths
- Generous padding on all boxes (p-10 to p-16 for major containers, p-6 to p-8 for cards)
- Each pricing card and contact box has distinct pastel background colors
- Gradient backgrounds on pricing and contact sections
- Clean, uncluttered layouts with colorful accents

**Animations:**
- All keyframes defined in `globals.css`
- `fadeInUp`, `fadeIn`, `gentleFloat` - soft, subtle animations
- Staggered animations using inline delays for pricing cards
- Hover effects: scale transforms and shadow increases

**Responsive Design:**
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Grid layouts collapse to single column on mobile
- Pricing grid: 1 col mobile, 2 cols tablet, 3 cols desktop

## Key Files

- `app/page.tsx` - Main homepage component (server component)
- `app/layout.tsx` - Root layout with metadata from config
- `app/globals.css` - Global styles, theme variables, animations, fonts
- `config/site.json` - **Editable content configuration**

## Common Tasks

### Updating Content
Edit `config/site.json` directly. The page component imports and renders this data.

### Changing Colors
Update CSS variables in `app/globals.css` `:root` block and `@theme` directive.

### Adding New Sections
Add new `<section>` components in `app/page.tsx`. Follow existing patterns:
- Use CSS variables for colors
- Apply `clipPath` for geometric shapes
- Add staggered `fadeIn` animations
- Maintain responsive grid layouts

### Modifying Typography
Fonts are loaded from Google Fonts in `globals.css`. To change fonts:
1. Update the `@import url()` in globals.css
2. Update the `--font-*` variables in the `@theme` block
3. Update usage in components

## Important Notes

- **Server Components:** All components are server components by default (no `"use client"`)
- **No styled-jsx:** Next.js v16 prefers CSS-in-JS alternatives; use inline styles or CSS modules
- **Import Order:** Google Fonts import MUST come before `@import "tailwindcss"` in globals.css
- **TypeScript:** The pricing config has optional `popular` field; use `'popular' in plan` check before accessing
- **Build Target:** Static export capable (all pages pre-rendered)

## Deployment

The site is optimized for deployment on Vercel (zero-config), but also supports:
- Netlify
- AWS Amplify
- Any platform supporting Next.js

Static export can be enabled by adding `output: 'export'` to `next.config.ts` if needed.
