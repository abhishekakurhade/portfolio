# Abhishek's Interactive Portfolio

A modern, fully interactive React portfolio application built with TypeScript, Tailwind CSS, and Framer Motion animations.

## 🚀 Features

- **Beautiful Dark Theme** - Modern dark-themed design optimized for readability
- **Smooth Animations** - Powered by Framer Motion for engaging interactions
- **Responsive Design** - Fully responsive on mobile, tablet, and desktop
- **Interactive Components**:
  - Dynamic Navigation Bar with mobile menu
  - Hero section with scroll indicators
  - About page with tech stack showcase
  - Projects gallery with hover effects
  - Skills section with animated progress bars
  - Contact form with email integration
  - Social media links
  - Dynamic footer

- **Performance Optimized** - Built with Vite for lightning-fast development and production builds
- **Type-Safe** - Full TypeScript support for robust code

## 🛠 Technologies Used

- **React 18+** - Frontend framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Modern build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **PostCSS** - CSS processing

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx      - Navigation with mobile menu
│   │   ├── Home.tsx        - Hero section
│   │   ├── About.tsx       - About me with tech stack
│   │   ├── Projects.tsx    - Project showcase
│   │   ├── Skills.tsx      - Skills with progress bars
│   │   └── Contact.tsx     - Contact form
│   ├── App.tsx             - Main app with routing
│   ├── main.tsx            - React entry point
│   └── index.css           - Global styles with Tailwind
├── public/                 - Static assets
├── index.html              - HTML entry point
├── vite.config.ts          - Vite configuration
├── tailwind.config.js      - Tailwind CSS configuration
├── postcss.config.js       - PostCSS configuration
├── tsconfig.json           - TypeScript configuration
└── package.json            - Dependencies and scripts
```

## 🎨 Customization

### Colors
Edit the Tailwind config colors in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      dark: { /* your colors */ },
      accent: '#3b82f6', // Blue - change to your brand color
    }
  }
}
```

### Content
Update component content in `src/components/`:
- Change your name and bio in `Home.tsx`
- Add your projects in `Projects.tsx`
- Update skills in `Skills.tsx`
- Modify contact information in `Contact.tsx`

### Animations
Framer Motion animations can be customized by editing the `variants` in each component.

## 📦 Available Scripts

```bash
# Development
npm run dev           # Start dev server at http://localhost:5173

# Production
npm run build         # Build for production (outputs to dist/)
npm run preview       # Preview production build locally

# Code Quality
npm run lint          # Run ESLint
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The optimized production files will be in the `dist/` folder.

### Deploy Options
- **Vercel** (Recommended for React/Vite projects):
  ```bash
  npm install -g vercel
  vercel
  ```

- **Netlify**:
  1. Connect your git repository
  2. Build command: `npm run build`
  3. Publish directory: `dist`

- **GitHub Pages**, AWS S3, or any static hosting

## 🎯 Next Steps

1. **Update Personal Information**:
   - Replace placeholder content in all components
   - Add your real projects
   - Update social media links
   - Add actual project URLs

2. **Add Images**:
   - Replace emoji placeholders with actual project images
   - Add a professional profile photo

3. **Implement Contact Form**:
   - Connect to a backend service (Firebase, Formspree, etc.)
   - Add email notifications

4. **SEO Optimization**:
   - Update meta tags in `index.html`
   - Add Open Graph tags
   - Create a sitemap

5. **Analytics**:
   - Add Google Analytics
   - Track user interactions

6. **Custom Domain**:
   - Deploy to your custom domain
   - Set up SSL certificate

## 🎓 Learn More

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [React Router](https://reactrouter.com)

## 📝 License

This portfolio template is free to use and customize for personal or commercial purposes.

## 💡 Tips

- Use React DevTools to inspect components
- Framer Motion has great inspector tools for debugging animations
- Tailwind CSS IntelliSense extension helps with class suggestions
- Keep component sizes manageable by splitting large components

---

**Ready to showcase your work? Start customizing and deploying! 🚀**
