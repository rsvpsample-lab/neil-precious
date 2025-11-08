# Wedding Invitation Website

## Overview
This project is a full-stack JavaScript application for a wedding invitation website for Dong & Riza, celebrating their wedding on January 10, 2026. It features a responsive, interactive, and modern design with multiple sections including hero, slideshow, invitation details, countdown, story, venue, RSVP, and more. The website aims to provide an elegant and engaging experience for wedding guests. Key capabilities include an interactive quiz game to reveal different invitation designs, background music with user interaction, and SEO optimization.

## User Preferences
- Background music should play automatically when clicking "Open Invitation" with NO control buttons
- Clean, sophisticated design without visual artifacts or decorative elements that interfere with images
- Elegant wedding-appropriate typography using Google Fonts

## System Architecture
The application is a full-stack JavaScript project using a React frontend with TypeScript, Vite for bundling, and Tailwind CSS with shadcn/ui for styling. The backend is an Express.js server also written in TypeScript. Routing is handled by Wouter, and server state management uses TanStack Query. Data is currently stored in-memory using MemStorage, with potential for PostgreSQL integration. The UI/UX incorporates a dark mode aesthetic with an "old money" style, elegant Google Fonts (Playfair Display, Cormorant Garamond, Inter), and sophisticated components from shadcn/ui. Core features include an interactive quiz game that determines the invitation design (premium vs. standard based on score), responsive design for various devices, and a background music feature that respects user interaction for playback. The system is designed for deployment on platforms like Replit, with specific configurations for port handling and static asset serving.

## External Dependencies
- **Cloudinary CDN**: Used for hosting audio files and images.
- **Google Fonts**: Playfair Display, Cormorant Garamond, Inter for typography.
- **Tailwind CSS**: For utility-first styling.
- **shadcn/ui**: UI component library.
- **TanStack Query**: For server state management.
- **Wouter**: For client-side routing.
- **Express.js**: Backend server framework.
- **Vite**: Frontend build tool.

## Recent Changes
- **2025-11-07**: Complete content overhaul for Dong & Riza's wedding:
  - Updated all components with new couple names "Dong & Riza"
  - Changed wedding date to January 10, 2026 at 2:00 PM
  - Updated venues to two separate locations:
    - Ceremony: Diocesan Shrine and Parish of Our Lady of the Pillar - Imus, Cavite
    - Reception: Sañez Farm Events Place – Imus, Cavite
  - Updated dress code section with new Filipino formal attire guidelines:
    - Principal Sponsors: Gentlemen - Barong attire with brown or khaki slacks, Ladies - Modern Filipiniana or Long Evening Gown
    - Guests: Gentlemen - Barong or Polo Barong in Black Slacks, Ladies - Modern Filipiniana or Long Evening Gown
    - Added important reminders: No jeans, denim, slippers or rubber shoes
  - Updated wedding guest color motif with earth tones:
    - Olive Green (#6B6F3C), Light Brown (#B8906B), Sage Green (#C8C89E), Cream Beige (#D5C9B1)
  - Updated wedding timeline:
    - 1:30 PM: Guest Arrival
    - 2:00 PM: Wedding Ceremony
    - 4:00 PM: Cocktail Hours
    - 5:30 PM: Reception
  - Changed wedding hashtags to #TheweddingofD&R and #D&R2026
  - Updated HTML title and meta description with new couple names and date
  - Updated countdown timer to January 10, 2026 at 2:00 PM
  - Removed TimelineCardsSection and LoveStoryCover components from the website
  - Completely redesigned love story section:
    - Removed horizontal scrolling effects and GSAP animations
    - Simplified to single, elegant section with no scrolling
    - Updated story text: December 2020 beginning, March 2021 commitment, fur babies Maxi and Mocha
    - Added two new story images (beach scene and couple image)
    - Clean, simple layout with text and images in a responsive grid

