# 🍽️ Healthy Food Restaurant Website

A modern, elegant restaurant website featuring multi-language support (English/Bengali), smooth animations, and a responsive design.

---

## 📚 **START HERE - Documentation Guide**

### 🆕 New to this project? Start with:
**[🗺️ NAVIGATION_GUIDE.md](NAVIGATION_GUIDE.md)** ← **Best starting point!**  
Visual guide with "I want to update..." sections

### 📖 All Documentation:

| Document | When to Use |
|----------|-------------|
| **[🗺️ NAVIGATION_GUIDE.md](NAVIGATION_GUIDE.md)** | Quick "where do I update X?" lookup |
| **[🎯 QUICK_REFERENCE.md](QUICK_REFERENCE.md)** | Code snippets & common tasks |
| **[📖 PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)** | Complete detailed documentation |
| **[✅ CLEANUP_SUMMARY.md](CLEANUP_SUMMARY.md)** | What was cleaned from the project |

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## ✨ Features

- 🌐 **Bilingual** - English and Bengali language support
- 📱 **Responsive** - Works on desktop, tablet, and mobile
- 🎨 **Modern UI** - Clean design with smooth animations
- 🍴 **Menu Management** - Easy to update dishes and prices
- 📝 **Reservation Form** - Simple booking interface
- 🖼️ **Gallery** - Showcase restaurant ambiance
- ⚡ **Fast** - Built with Vite for optimal performance

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **Lucide React** - Icons

## 📂 Project Structure

```
src/
├── assets/          # Images
├── components/      # Reusable components
├── contexts/        # Language context
├── hooks/           # Custom hooks
├── pages/           # Page components
├── lib/             # Utilities
└── App.tsx          # Main app
```

## 🔧 Common Updates

| What to Update | File Location |
|----------------|---------------|
| Menu items & prices | `src/pages/Menu.tsx` |
| Language translations | `src/contexts/LanguageContext.tsx` |
| Homepage content | `src/pages/Index.tsx` |
| Navigation links | `src/components/Navbar.tsx` |
| Colors & theme | `tailwind.config.ts` |
| Reservation form | `src/pages/Reservation.tsx` |

For detailed instructions, see [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)

## 📦 Scripts

```bash
npm run dev         # Start dev server (localhost:5173)
npm run build       # Build for production
npm run build:dev   # Build in development mode
npm run lint        # Run linter
npm run preview     # Preview production build
```

## 📝 Notes

- This is a frontend-only project (no backend)
- Form submissions show notifications (no data storage)
- All content is static and easily editable
- Images should be placed in `src/assets/`

## 🤝 Contributing

1. Make changes to the code
2. Test locally with `npm run dev`
3. Build with `npm run build` to ensure no errors
4. Commit your changes

---

**Built with ❤️ for Healthy Food Restaurant**
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
