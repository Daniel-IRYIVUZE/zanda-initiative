# Zanda Initiative - Website

A modern, responsive React website for the Zanda Initiative, a social enterprise empowering young women and teenage mothers in Rwanda through skills training and entrepreneurship.

## Features

- **Multilingual Support** - English and Kinyarwanda
- **Responsive Design** - Works on all devices
- **Interactive Donation System** - Multi-step form with mobile money integration
- **Course Library** - Video courses with modal popups
- **WhatsApp Integration** - Direct chat with the team
- **Local Storage** - Saves user preferences and form data
- **Modern UI** - Built with Tailwind CSS and Lucide icons

## Quick Start

### Prerequisites

Make sure you have the following installed:

- Node.js (version 14 or higher)
- npm or yarn

### Installation & Running

1. **Clone the repository**

   ```bash
   git clone https://github.com/Daniel-IRYIVUZE/zanda-initiative.git
   cd zanda-initiative
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application.

### Build for Production

1. **Create production build**

   ```bash
   npm run build
   ```

2. **Preview production build**
   ```bash
   npm run preview
   ```

## Pages Overview

- **Home** - Landing page with hero section and key information
- **Our Story** - Mission, vision, values, and founder's story
- **Our Program** - Training curriculum, courses, and learning approach
- **Our Impact** - Success stories, metrics, and donation system
- **Get Involved** - Partnership opportunities and volunteer options
- **Contact** - Contact form and team information

## Technology Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM

## Color Palette

The application uses the Zanda Initiative brand colors:

- green: `#735399` (Purple)
- Accent: `#f5a833` (Orange/Gold)
- Background: `#edebef` (Light gray)
- Text: Various shades of gray

## Key Functionalities

### Language Support

- Toggle between English and Kinyarwanda
- Language preference saved in localStorage
- All content dynamically translated

### Donation System

- Multi-step donation form
- Mobile money integration
- Form data saved to localStorage
- WhatsApp integration for direct contact

### Course Videos

- Interactive video library
- Modal popups for detailed course information
- Responsive video embeds

### Contact Forms

- Contact form with data persistence
- Multiple contact methods (email, phone, WhatsApp)
- Form validation

## Configuration Files

- `tailwind.config.js` - Tailwind CSS configuration with custom colors
- `vite.config.js` - Vite build tool configuration
- `postcss.config.js` - PostCSS configuration for Tailwind

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Main page components
├── App.jsx         # Main app component with routing
└── main.jsx        # Application entry point
```

## Deployment

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag the `dist` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Environment Variables

Currently, no environment variables are required. All configuration is handled in the code.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## Support

For technical support or questions about the Zanda Initiative:

- Email: danieliryivuze4@gmail.com
- Phone: +250 780 162 164
- WhatsApp: +250 780 162 164

## License

This project is developed for the Zanda Initiative. All rights reserved.

---

**Built with Founder of Zanda Initiative - Empowering Her to Build Her Tomorrow**

````

## Additional Setup Instructions

### After cloning, here's exactly what to do:

1. **Install all dependencies:**
   ```bash
   npm install
````

This will install:

- React & React DOM
- React Router DOM
- Lucide React icons
- Tailwind CSS
- PostCSS
- Vite and related plugins

2. **Start the development server:**

   ```bash
   npm run dev
   ```

3. **Open your browser to the provided localhost URL (usually http://localhost:5173)**

### If you encounter any issues:

**Common troubleshooting steps:**

1. **Clear node_modules and reinstall:**

   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Check Node.js version:**

   ```bash
   node --version
   ```

   Should be 14 or higher.

3. **If port 5173 is busy, Vite will automatically use another port**

### To build for production:

```bash
npm run build
```
