# 🌟 Digioptimized - Modern Digital Marketing Website

A stunning, high-performance website built with React, Vite, and Tailwind CSS featuring smooth animations, glassmorphism design, and interactive elements.

## ✨ Features

- 🎨 **Modern Design** - Glassmorphism effects with gradient animations
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 📱 **Fully Responsive** - Perfect on mobile, tablet, and desktop
- 🎭 **Smooth Animations** - 60fps scroll-triggered transitions
- 🖱️ **Interactive Footer** - Dynamic mouse-tracking spotlight effect
- 🎯 **SEO Optimized** - Search engine friendly structure
- ♿ **Accessible** - WCAG compliant components

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Navigation with smooth scrolling
│   ├── Hero.jsx        # Landing section
│   ├── About.jsx       # About section
│   ├── Services.jsx    # Services showcase
│   ├── Portfolio.jsx   # Portfolio gallery
│   ├── Process.jsx     # Work process
│   ├── FAQ.jsx         # FAQ section
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Interactive footer
├── App.jsx             # Main app with animations
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## 🛠️ Built With

- **React 19.1.1** - UI framework
- **Vite 7.1.7** - Build tool
- **Tailwind CSS 3.4.18** - Styling
- **react-scroll** - Smooth navigation
- **lucide-react** - Icons
- **League Spartan** - Display font

## 📦 Deployment

See `DEPLOYMENT_GUIDE.md` for detailed deployment instructions.

### Quick Deploy Options
- **Netlify**: Drag `dist` folder to [app.netlify.com/drop](https://app.netlify.com/drop)
- **Vercel**: Deploy via [vercel.com](https://vercel.com)
- **GitHub Pages**: Enable in repository settings

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme.

### Content
All content is in `src/components/` - edit the JSX files.

### Animations
Modify animation timings in `tailwind.config.js` and `src/index.css`.

## 📄 License

This project is built with open-source technologies:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## 📞 Support

For questions or issues, refer to the documentation files:
- `CLIENT_HANDOFF.md` - Complete handoff guide
- `DEPLOYMENT_GUIDE.md` - Deployment instructions

---

**Built with ❤️ using modern web technologies**

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
