# 🍽️ Healthy Food Restaurant - Project Documentation

## 📋 Project Overview
A modern, responsive restaurant website built with React, TypeScript, and Tailwind CSS. Features multi-language support (English/Bengali), elegant animations, and a clean UI.

---

## 🗂️ Project Structure

```
healthyFoodFinal/
├── public/               # Static assets
│   └── robots.txt       # SEO configuration
│
├── src/
│   ├── assets/          # Images (dishes, gallery, etc.)
│   │
│   ├── components/      # Reusable UI components
│   │   ├── ui/         # Shadcn UI components (Toast, Tooltip, Sonner)
│   │   ├── Navbar.tsx      # Top navigation bar
│   │   ├── Footer.tsx      # Footer section
│   │   ├── BottomNav.tsx   # Mobile bottom navigation
│   │   ├── Hero.tsx        # Homepage hero section
│   │   ├── NavLink.tsx     # Navigation link component
│   │   └── SectionHeader.tsx  # Reusable section header
│   │
│   ├── contexts/        # React Context providers
│   │   └── LanguageContext.tsx  # Multi-language (EN/BN) support
│   │
│   ├── hooks/          # Custom React hooks
│   │   ├── use-mobile.tsx   # Mobile detection hook
│   │   └── use-toast.ts     # Toast notification hook
│   │
│   ├── lib/            # Utility libraries
│   │   └── utils.ts        # Helper functions (cn, classNames)
│   │
│   ├── pages/          # Page components (routes)
│   │   ├── Index.tsx       # Homepage
│   │   ├── Menu.tsx        # Menu page
│   │   ├── About.tsx       # About us page
│   │   ├── Gallery.tsx     # Photo gallery
│   │   ├── Reservation.tsx # Booking form
│   │   ├── Popular.tsx     # Popular dishes
│   │   └── NotFound.tsx    # 404 page
│   │
│   ├── App.tsx         # Main app component with routing
│   ├── main.tsx        # App entry point
│   └── index.css       # Global styles & Tailwind imports
│
├── package.json        # Dependencies and scripts
├── vite.config.ts      # Vite configuration
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── components.json     # Shadcn UI configuration
```

---

## 🎯 Where to Update Specific Features

### 🌍 **Language & Translations**
**File:** [`src/contexts/LanguageContext.tsx`](src/contexts/LanguageContext.tsx)

- Add/modify English and Bengali translations in the `translations` object
- Search for the translation key (e.g., `nav.home`, `menu.title`)
- Update both `en` and `bn` properties

```tsx
const translations = {
  en: { "nav.home": "Home" },
  bn: { "nav.home": "হোম" }
};
```

---

### 🍽️ **Menu Items & Prices**
**File:** [`src/pages/Menu.tsx`](src/pages/Menu.tsx)

- Locate the `menuItems` array (around line 13)
- Add/edit/remove menu items with this structure:

```tsx
{
  id: 1,
  name: 'Dish Name',
  category: 'Main Courses', // Categories: Appetizers, Main Courses, Fish Specialties, Desserts, Beverages
  price: '৳350',
  desc: 'Description here',
  image: dishImage,
  popular: true // Optional: mark as popular
}
```

- Update `menuCategories` array (line 12) to change category filters

---

### 🏠 **Homepage Content**
**File:** [`src/pages/Index.tsx`](src/pages/Index.tsx)

**Featured Dishes:** Lines 16-20
```tsx
const featuredDishes = [
  { image: dishHilsa, name: 'Shorisha Ilish', desc: 'Description', price: '৳650' },
  // Add more dishes here
];
```

**Features Section:** Lines 22-26
```tsx
const features = [
  { icon: Leaf, title: 'Feature Title', desc: 'Description' },
  // Add more features here
];
```

**Welcome Text:** Around line 55 - Edit the heading and paragraph content

---

### 📝 **Reservation Form**
**File:** [`src/pages/Reservation.tsx`](src/pages/Reservation.tsx)

- **Form Fields:** Lines 13-15 (formData state)
- **Submission Logic:** Lines 17-21 (handleSubmit function)
- **Input Styling:** Line 24 (inputClass variable)
- **Form Structure:** Lines 48-60 (form JSX)

To add new fields:
1. Add field to `formData` state
2. Add input element in the form JSX
3. Handle the new field in `handleSubmit`

---

### 🖼️ **Gallery**
**File:** [`src/pages/Gallery.tsx`](src/pages/Gallery.tsx)

- Add/remove images in the gallery grid
- Update image imports at the top of the file
- Modify the gallery layout in the JSX section

---

### 📄 **About Page**
**File:** [`src/pages/About.tsx`](src/pages/About.tsx)

- Update restaurant story and information
- Modify team members or values
- Change images and descriptions

---

### 🌟 **Popular Dishes**
**File:** [`src/pages/Popular.tsx`](src/pages/Popular.tsx)

- Similar structure to Menu.tsx
- Update the popular dishes array
- Modify display layout as needed

---

### 🧭 **Navigation**
**File:** [`src/components/Navbar.tsx`](src/components/Navbar.tsx)

**Navigation Links:** Lines 22-28
```tsx
const navLinks = [
  { path: '/', label: t('nav.home') },
  { path: '/menu', label: t('nav.menu') },
  // Add/remove links here
];
```

**Logo:** Lines 48-54
**Language Toggle:** Line 32 (toggleLanguage function)

---

### 🦶 **Footer**
**File:** [`src/components/Footer.tsx`](src/components/Footer.tsx)

- Update contact information
- Modify social media links
- Change footer sections and content

---

### 📱 **Mobile Bottom Navigation**
**File:** [`src/components/BottomNav.tsx`](src/components/BottomNav.tsx)

- Update mobile menu items
- Change icons (from lucide-react)
- Modify navigation structure

---

### 🎨 **Styling & Theme**

#### **Global Styles**
**File:** [`src/index.css`](src/index.css)
- Custom CSS variables
- Tailwind base styles
- Global component styles

#### **Tailwind Configuration**
**File:** [`tailwind.config.ts`](tailwind.config.ts)
- Custom colors (ocean-deep, gold, etc.)
- Font families
- Custom animations
- Extend theme

**Key Color Variables:**
- `ocean-deep` - Main dark blue
- `ocean-medium` - Medium blue
- `ocean-light` - Light blue
- `gold` - Accent gold color

---

### 🔧 **UI Components**

#### **Toast Notifications**
**Files:** 
- [`src/components/ui/toast.tsx`](src/components/ui/toast.tsx)
- [`src/components/ui/toaster.tsx`](src/components/ui/toaster.tsx)
- [`src/hooks/use-toast.ts`](src/hooks/use-toast.ts)

**Usage:**
```tsx
import { useToast } from '@/hooks/use-toast';

const { toast } = useToast();
toast({
  title: "Success!",
  description: "Your message here"
});
```

#### **Sonner Notifications**
**File:** [`src/components/ui/sonner.tsx`](src/components/ui/sonner.tsx)

Alternative toast system with different styling

#### **Tooltips**
**File:** [`src/components/ui/tooltip.tsx`](src/components/ui/tooltip.tsx)

**Usage:**
```tsx
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>Hover me</TooltipTrigger>
    <TooltipContent>Tooltip text</TooltipContent>
  </Tooltip>
</TooltipProvider>
```

---

### 🖼️ **Images**
**Location:** `src/assets/`

To update images:
1. Add new image files to `src/assets/`
2. Import in the relevant page/component:
   ```tsx
   import myImage from '@/assets/my-image.jpg';
   ```
3. Use in JSX:
   ```tsx
   <img src={myImage} alt="Description" />
   ```

---

### 🛣️ **Routing**
**File:** [`src/App.tsx`](src/App.tsx)

**Add New Route:**
```tsx
import NewPage from './pages/NewPage';

// In Routes component:
<Route path="/new-page" element={<NewPage />} />
```

**Current Routes:**
- `/` - Homepage
- `/menu` - Menu page
- `/about` - About page
- `/gallery` - Gallery
- `/reservation` - Reservation form
- `/popular` - Popular dishes
- `*` - 404 Not Found

---

## 📦 Available Scripts

```bash
npm run dev         # Start development server
npm run build       # Build for production
npm run build:dev   # Build in development mode
npm run lint        # Run ESLint
npm run preview     # Preview production build
```

---

## 🔌 Key Dependencies

| Package | Purpose |
|---------|---------|
| `react` | UI library |
| `react-router-dom` | Routing |
| `framer-motion` | Animations |
| `lucide-react` | Icons |
| `@tanstack/react-query` | Data fetching |
| `tailwindcss` | Styling |
| `sonner` | Toast notifications |

---

## 💡 Tips for Development

### Adding a New Page
1. Create file in `src/pages/` (e.g., `Contact.tsx`)
2. Add route in `src/App.tsx`
3. Add navigation link in `src/components/Navbar.tsx`
4. Add translations in `src/contexts/LanguageContext.tsx`

### Changing Colors
Edit [`tailwind.config.ts`](tailwind.config.ts) colors section:
```ts
colors: {
  'ocean-deep': '#1a2332',
  'gold': '#d4af37',
  // Add custom colors here
}
```

### Adding Animations
Use Framer Motion:
```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

### Using Icons
Import from lucide-react:
```tsx
import { Home, Menu, Phone } from 'lucide-react';

<Home className="w-5 h-5" />
```

---

## 🐛 Common Issues

**Images not loading?**
- Check import path uses `@/assets/`
- Verify file exists in `src/assets/`

**Styles not applying?**
- Run `npm run dev` to rebuild Tailwind
- Check className spelling
- Verify Tailwind classes in `tailwind.config.ts`

**Translation missing?**
- Add key to both `en` and `bn` in `LanguageContext.tsx`
- Use `t('key')` in component

---

## 📞 Project Structure Summary

```
📱 Frontend: React + TypeScript + Vite
🎨 Styling: Tailwind CSS + Custom Animations
🛣️ Routing: React Router v6
🌐 i18n: Custom Context (EN/BN)
🎬 Animations: Framer Motion
🔔 Notifications: Sonner + Custom Toast
📦 State: React Query + Context API
```

---

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   ```
   http://localhost:5173
   ```

---

## 📝 Notes

- This is a **frontend-only** project (no backend/database)
- Form submissions show toast notifications (no actual data storage)
- All content is static and can be updated in the files mentioned above
- Images should be placed in `src/assets/` directory
- The project uses TypeScript for type safety

---

**Last Updated:** December 27, 2025
**Framework:** React 18 + Vite + TypeScript
**UI Library:** Tailwind CSS + Shadcn UI (minimal components)
