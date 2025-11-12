# POM CAR MOTORS LIMITED
Live Demo

https://frontend-app-5u6h.onrender.com

# Project Overview

This website represents POM, a trusted name in car sales and automotive services. The goal was to create a modern, responsive, and user-friendly platform that showcases a wide range of vehicles while reflecting the brand’s commitment to quality, reliability, and customer satisfaction. The design focuses on easy navigation, visual appeal, and clear presentation of car listings, allowing users to explore, compare, and connect effortlessly across all devices.

# Brand Identity
## Color System

* Primary: RED (Used for main buttons, headings, and highlights to convey trust and professionalism)
* Secondary: #Sky  (Used for accents, hover states, and call-to-action elements to create contrast)
* Neutral: #white (Background and subtle UI elements for balance)
* Error/Alert: #amber (For warnings and validation errors)


# Typography

* Headings: Poppins, sans-serif — clean, modern, and highly readable for large displays.
* Body: Roboto, sans-serif — easy to read on all screen sizes, complements the headings without distraction.


# Design Decisions
## Layout Adherence

* Spacing follows a 4px grid system using Tailwind’s spacing utilities.
* Components and containers were aligned using Figma guides and Tailwind classes to ensure consistency across breakpoints.


# Creative Departures

* Content strategy focused on clarity and conversion, emphasizing key features and CTAs.
* Brand positioning is reinforced with consistent visual hierarchy and a warm, professional palette.
* Responsive breakpoints were handled at md (768px) and lg (1024px), ensuring seamless mobile-to-desktop experience.


# Component Architecture

* Atomic Design Approach: Buttons, Inputs, and Cards are reusable across pages.


# Performance Optimizations

* Code Splitting with React lazy loading for routes.
* Tailwind JIT mode to reduce unused CSS in production.
* Optimized images using WebP format and lazy loading.
* Vite build optimization for smaller bundle size.


# Image Credits
* Cars of Motors – for original photos of vehicles and dealership imagery.
*Unsplash – for additional stock photography.
*Icons8 – for iconography used throughout the website.


# Installation & Setup

*Clone the repository:

```bash

*git clone https://github.com/yourusername/your-brand.git

*npm install
*npm run dev
*npm run build
*npm run preview

```
# Technologies Used

* React ^18.2.0
* Tailwind CSS ^3.3.0
* Vite ^5.0.0


# Challenges & Solutions

* Responsive Layout Issues – Solved by using Tailwind’s responsive utilities and custom breakpoints.
* Optimizing Images – Compressed images with Squoosh and lazy-loaded using loading="lazy".
* Routing Conflicts on Render – Fixed by adding _redirects file for SPA routing:

# Future Improvements

* Add dark mode toggle for better UX.
* Implement server-side rendering for SEO improvements.
* Add analytics integration to track user interactions.
