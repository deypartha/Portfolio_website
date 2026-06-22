# Portfolio - React + Vite + Tailwind CSS

A modern, responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations**: Framer Motion animations with scroll-triggered effects
- **Interactive UI**: Custom cursor, scroll progress indicator, smooth scrolling
- **Contact Form**: Functional contact form with validation and status feedback
- **Social Links**: GitHub, LinkedIn, Email, and other professional links
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Performance**: Optimized images, lazy loading, and efficient bundle size

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

## Customization

### Personal Information
Update the following files with your personal details:

| File | What to Change |
|------|---------------|
| `src/sections/Hero.jsx` | Name, title, description, social URLs |
| `src/sections/About.jsx` | About text, stats |
| `src/sections/Contact.jsx` | Email, phone, location, social links |
| `src/sections/Projects.jsx` | Your projects with images, links, descriptions |
| `src/sections/Skills.jsx` | Your technical skills and proficiency levels |

### Contact Form Backend
The contact form currently simulates submission. To make it functional:

1. Set up a backend API endpoint (Node.js/Express, serverless function, etc.)
2. Update the `handleSubmit` function in `src/sections/Contact.jsx`

Example using fetch:
```javascript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
})
```

### Images
Replace the project images in `src/sections/Projects.jsx` with your actual project screenshots.

## Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy dist folder to Netlify
```

## Project Structure

```
portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── CustomCursor.jsx
│   │   ├── Navbar.jsx
│   │   ├── ScrollProgress.jsx
│   │   └── SectionHeading.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## License

MIT License - feel free to use this template for your portfolio!
