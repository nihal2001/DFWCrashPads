# DFW Crash Pads

A light, minimalistic website for a bouldering crash pad rental service in the Dallas-Fort Worth area.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Editing Content

All pricing and contact information can be easily updated by editing the configuration file:

**`config/site.json`**

This file contains:
- Business name and tagline
- Contact information (email, phone, Instagram)
- Pricing tiers (individual pads and combo packs)
- Pad dimensions for each size
- Reservation message

Simply edit the values in this JSON file and the changes will automatically appear throughout the website.

### Example: Updating Pricing

```json
"pricing": {
  "large": {
    "price": "$35",              // Change price
    "size": "Large Pad",
    "dimensions": "4ft x 5ft x 4in",  // Update dimensions
    "description": "Perfect for tall problems and hard landings"
  }
}
```

### Example: Updating Contact Info

```json
"contact": {
  "email": "rentals@dfwcrashpads.com",  // Change email
  "phone": "(214) 555-7237",             // Change phone
  "instagram": "@dfwcrashpads",          // Change Instagram handle
  "reservationMessage": "Contact us to reserve your crash pads"
}
```

## Design

The site features a light, minimalistic, outdoorsy aesthetic with:
- Clean, boxy design with rounded corners
- Custom typography (Outfit, DM Sans)
- Light color scheme with sage green and terracotta accents
- Gentle animations and smooth transitions
- Fully responsive design

## Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Google Fonts** - Custom typography

## Deployment

The site can be deployed to any platform that supports Next.js:

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
- Netlify
- AWS Amplify
- Railway
- Render

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Homepage component
│   └── globals.css      # Global styles and theme
├── config/
│   └── site.json        # Editable content configuration
└── public/              # Static assets
```
