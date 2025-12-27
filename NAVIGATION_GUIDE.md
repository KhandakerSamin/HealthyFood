# 🗺️ Project Navigation Guide

## 🎯 "I want to update..."

### 🍽️ Menu Items & Prices
**Go to:** [src/pages/Menu.tsx](src/pages/Menu.tsx) → Line 13  
**Look for:** `const menuItems = [`  
**What to edit:**
```tsx
{ 
  id: 1, 
  name: 'Dish Name',           // ← Change dish name
  category: 'Main Courses',    // ← Change category
  price: '৳350',              // ← Change price
  desc: 'Description',         // ← Change description
  image: dishImage,            // ← Change image
  popular: true                // ← Mark as popular (optional)
}
```

---

### 🌐 Language & Translations
**Go to:** [src/contexts/LanguageContext.tsx](src/contexts/LanguageContext.tsx) → Line 5  
**Look for:** `const translations = {`  
**What to edit:**
```tsx
const translations = {
  en: { "nav.home": "Home" },      // ← English text
  bn: { "nav.home": "হোম" }        // ← Bengali text
};
```

---

### 🏠 Homepage Content
**Go to:** [src/pages/Index.tsx](src/pages/Index.tsx)

**Featured Dishes** → Line 16
```tsx
const featuredDishes = [
  { image: dishHilsa, name: 'Shorisha Ilish', desc: '...', price: '৳650' }
];
```

**Features Section** → Line 22
```tsx
const features = [
  { icon: Leaf, title: 'Feature Title', desc: 'Description' }
];
```

**Welcome Text** → Line 55  
Edit the heading and paragraph directly in JSX

---

### 🧭 Navigation Menu
**Go to:** [src/components/Navbar.tsx](src/components/Navbar.tsx) → Line 22  
**Look for:** `const navLinks = [`  
**What to edit:**
```tsx
{ path: '/', label: t('nav.home') },  // ← Add/remove links
{ path: '/menu', label: t('nav.menu') }
```

---

### 🎨 Colors & Theme
**Go to:** [tailwind.config.ts](tailwind.config.ts) → Line 13  
**Look for:** `colors: {`  
**What to edit:**
```tsx
colors: {
  'ocean-deep': '#1a2332',   // ← Main dark blue
  'ocean-medium': '#2d4a68', // ← Medium blue
  'ocean-light': '#5b7da3',  // ← Light blue
  'gold': '#d4af37',         // ← Accent gold
  // Add your custom colors here
}
```

---

### 📝 Reservation Form
**Go to:** [src/pages/Reservation.tsx](src/pages/Reservation.tsx)

**Form Fields** → Line 13
```tsx
const [formData, setFormData] = useState({
  name: '', email: '', phone: '', date: '', time: '', guests: '2', notes: ''
});
```

**Submission Logic** → Line 17
```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // Add your logic here
};
```

---

### 🦶 Footer Content
**Go to:** [src/components/Footer.tsx](src/components/Footer.tsx)  
**Edit:** Contact info, social links, footer sections

---

### 🖼️ Images
**Location:** `src/assets/`

**To add new image:**
1. Put image file in `src/assets/`
2. Import in your component:
   ```tsx
   import myImage from '@/assets/my-image.jpg';
   ```
3. Use in JSX:
   ```tsx
   <img src={myImage} alt="Description" />
   ```

---

### 📱 Mobile Bottom Navigation
**Go to:** [src/components/BottomNav.tsx](src/components/BottomNav.tsx)  
**Edit:** Mobile navigation items and icons

---

## 🔀 Routing (Add New Page)

### Step 1: Create Page Component
**Create:** `src/pages/NewPage.tsx`
```tsx
const NewPage = () => {
  return (
    <main className="pt-24">
      <h1>New Page</h1>
    </main>
  );
};
export default NewPage;
```

### Step 2: Add Route
**File:** [src/App.tsx](src/App.tsx) → Line 29  
**Add:**
```tsx
import NewPage from './pages/NewPage';
// ...
<Route path="/new" element={<NewPage />} />
```

### Step 3: Add Navigation Link
**File:** [src/components/Navbar.tsx](src/components/Navbar.tsx) → Line 22  
**Add:**
```tsx
{ path: '/new', label: t('nav.new') }
```

### Step 4: Add Translation
**File:** [src/contexts/LanguageContext.tsx](src/contexts/LanguageContext.tsx) → Line 5  
**Add:**
```tsx
"nav.new": "New Page"  // English
"nav.new": "নতুন পাতা"  // Bengali
```

---

## 📦 Package Management

### Install New Package
```bash
npm install package-name
```

### Remove Package
```bash
npm uninstall package-name
```

### Update Packages
```bash
npm update
```

---

## 🎨 Styling

### Using Tailwind Classes
```tsx
<div className="bg-ocean-deep text-gold p-4 rounded-lg">
  Content
</div>
```

### Custom CSS
**File:** [src/index.css](src/index.css)
```css
.my-custom-class {
  /* Your styles */
}
```

---

## 🎬 Animations

### Using Framer Motion
```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Animated content
</motion.div>
```

---

## 🔔 Notifications

### Show Toast
```tsx
import { useToast } from '@/hooks/use-toast';

const { toast } = useToast();

toast({
  title: "Success!",
  description: "Your message here",
});
```

---

## 🎯 Icons

### Using Lucide Icons
```tsx
import { Home, Menu, Phone, Mail } from 'lucide-react';

<Home className="w-5 h-5" />
<Menu className="w-6 h-6 text-gold" />
```

**Browse icons:** https://lucide.dev/icons/

---

## 📚 Full Documentation

- **[README.md](README.md)** - Project overview & quick start
- **[PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)** - Complete documentation
- **[QUICK_REFERENCE.md](QUICK_REFERENCE.md)** - Quick tips & snippets
- **[CLEANUP_SUMMARY.md](CLEANUP_SUMMARY.md)** - What was cleaned

---

## 🚀 Development Commands

```bash
npm run dev         # Start development server (localhost:5173)
npm run build       # Build for production
npm run preview     # Preview production build
npm run lint        # Check code quality
```

---

**Pro Tip:** Use Ctrl+P in VS Code and type the file name to quickly open any file!
