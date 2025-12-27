# 🎯 Quick Reference Guide

## 📍 Most Common Updates

### 1. Update Menu Items
**File:** `src/pages/Menu.tsx` (Line 13)
```tsx
const menuItems = [
  { id: 1, name: 'Dish Name', category: 'Main Courses', price: '৳350', desc: '...', image: dishImage, popular: true }
]
```

### 2. Change Translations
**File:** `src/contexts/LanguageContext.tsx` (Line 5)
```tsx
const translations = {
  en: { "nav.home": "Home" },
  bn: { "nav.home": "হোম" }
}
```

### 3. Update Navigation
**File:** `src/components/Navbar.tsx` (Line 22)
```tsx
const navLinks = [
  { path: '/', label: t('nav.home') }
]
```

### 4. Modify Homepage
**File:** `src/pages/Index.tsx`
- Line 16: Featured dishes
- Line 22: Features section
- Line 55: Welcome text

### 5. Change Colors
**File:** `tailwind.config.ts` (Line 13)
```ts
colors: {
  'ocean-deep': '#1a2332',
  'gold': '#d4af37'
}
```

### 6. Update Contact Info
**File:** `src/components/Footer.tsx`

---

## 📁 File Organization

```
Most Important Files:
├── src/pages/Menu.tsx          ← Menu items & prices
├── src/pages/Index.tsx         ← Homepage content
├── src/contexts/LanguageContext.tsx  ← All translations
├── src/components/Navbar.tsx   ← Navigation
├── src/components/Footer.tsx   ← Footer content
├── tailwind.config.ts          ← Colors & theme
└── src/index.css               ← Global styles
```

---

## 🛠️ Commands

```bash
npm run dev      # Start development
npm run build    # Build for production
npm run preview  # Preview build
```

---

## 🎨 Using Components

### Show Toast Notification
```tsx
import { useToast } from '@/hooks/use-toast';

const { toast } = useToast();
toast({ title: "Success!", description: "Message" });
```

### Add Animation
```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
>
  Content
</motion.div>
```

### Use Icons
```tsx
import { Home, Menu } from 'lucide-react';

<Home className="w-5 h-5" />
```

### Add Image
```tsx
import myImage from '@/assets/my-image.jpg';

<img src={myImage} alt="Description" />
```

---

## 📝 Adding New Page

1. Create `src/pages/NewPage.tsx`
2. Add route in `src/App.tsx`:
   ```tsx
   <Route path="/new" element={<NewPage />} />
   ```
3. Add link in `src/components/Navbar.tsx`:
   ```tsx
   { path: '/new', label: t('nav.new') }
   ```
4. Add translation in `src/contexts/LanguageContext.tsx`:
   ```tsx
   "nav.new": "New Page"
   ```

---

For complete documentation, see **[PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)**
