# Menu Redesign - 2026-02-22

## Overview
Redesign the menu layout to match the requested 4-column item grid with decorative card elements, while maintaining the "BloomsBerry" brand identity (Approach 2: Branded Fusion).

## User Review Required
> [!IMPORTANT]
> The design uses Approach 2 (Branded Fusion), which incorporates existing brand colors (Forest Green) into the new layout structure.

## Proposed Design

### Component Structure
- **Menu.tsx**: Main container using CSS Grid for responsive layout.
- **MenuItemCard.tsx**: New component for individual menu item cards.
- **Category Tabs**: Existing functional tabs for filtering.

### Visual Elements
- **Card Styling**: White background, soft-rounded corners (`rounded-2xl`), shadow-md with hover uplift.
- **Border**: Thin sage green border (`border border-[#AFC8B2]/30`).
- **Images**: High-quality burger placeholders with a wavy bottom edge (SVG mask).
- **Badge**: "New" green label at the top left of items.
- **Button**: Forest Green (`bg-[#5F8F72]`) "ADD TO TRAY" button.

### Data
- Add image URLs and "New" badges to the `menuData` structure.

## Technical Details
- **Responsive**: 1 column on mobile, 2 on tablet, 4 on desktop.
- **Animations**: Framer Motion for card entry and hover effects.
- **Typography**: Playfair Display for headings, Poppins for body.

## Rationale
Approach 2 was selected to ensure the new layout feels like a natural part of the BloomsBerry website by using consistent brand colors and typography.
