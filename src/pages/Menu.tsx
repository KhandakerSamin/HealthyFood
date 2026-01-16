import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';
import { ShoppingBag, ArrowUp } from 'lucide-react';
import galleryDining from '@/assets/menu1.jpg';

interface MenuItem {
  name: string;
  price: number;
  description?: string;
}

const menuData = {
  breakfast: {
    title: 'Breakfast',
    healthyFoodSpecial: [
      { name: 'Green Coconut Water', price: 200 ,description:'Start Your Day Refreshed With Freshly Served Coconut Water. No Added Sugar' }
    ],
    carbohydrate: [
      { name: 'Chapati', price: 20 },
      { name: 'Special Paratha', price: 50 },
      { name: 'Tandoori Roti', price: 50 },
      { name: 'Luchi', price: 25 },
      { name: 'Rumali Roti', price: 40 },
      { name: 'Special Healthy Khichuri', price: 150 }
    ],
    protein: [
      { name: 'Fried Duck & Chicken Egg', price: 50 },
      { name: 'Boiled Duck & Chicken Egg', price: 40 },
      { name: 'Mixed Vegetables', price: 70 },
      { name: 'Mung Dal Bhuna', price: 60 },
      { name: 'Beef with Urad Dal', price: 220 },
      { name: 'Mutton with Mung Dal', price: 450 },
      { name: 'Goat Trotters', price: 220 },
      { name: 'Desi Chicken Curry', price: 280 },
      { name: 'Healthy Desi Chicken Soup', price: 300 },
      { name: 'Beef Liver Bhuna', price: 375 },
      { name: 'Fried Hilsa', price: 750 },
      { name: 'Pomfret Fry', price: 750 }
    ]
  },

  lunch: {
    title: 'Lunch',
    carbohydrate: [
      { name: 'Steamed Rice', price: 70 },
      { name: 'Chinigura Rice Pulao', price: 100 },
      { name: 'Special Mutton Tehari', price: 480 },
      { name: 'Special Healthy Fried Rice', price: 250 }
    ],
    vegetarian: [
      { name: 'Mixed Vegetables', price: 70 },
      { name: 'Bitter Gourd with Prawn', price: 100 },
      { name: 'Fried Leafy Vegetables', price: 60 },
      { name: 'Mung Dal', price: 50 },
      { name: 'Lau Chingri', price: 120 },
      { name: 'Fish Head with Mung Dal', price: 150 },
      { name: 'Bhorta Platter', price: 100 }
    ],
    fish: [
      { name: 'Jamuna Ailia Fish', price: 300 },
      { name: 'Indian Potasi Fish', price: 300 },
      { name: 'Mola Fish', price: 200 },
      { name: 'Kachki Fish', price: 200 },
      { name: 'Desi Tengra Fish', price: 300 },
      { name: 'Baim Fish', price: 350 },
      { name: 'Koi Fish', price: 400 },
      { name: 'Shing / Magur Fish', price: 380 },
      { name: 'Ayer Fish', price: 680 },
      { name: 'Boal Fish', price: 650 },
      { name: 'Coral Fish', price: 650 },
      { name: 'River Pangasius', price: 520 },
      { name: 'Chital Fish Kofta', price: 350 },
      { name: 'Poa Fish', price: 200 },
      { name: 'Shoal Fish Bhuna', price: 350 },
      { name: 'Shrimp Do Pyaza', price: 500 },
      { name: 'Rohu Fish Fry', price: 300 }
    ],
    meat: [
      { name: 'Desi Chicken Roast', price: 280 },
      { name: 'Desi Chicken Curry', price: 280 },
      { name: 'Mezbani Beef', price: 350 },
      { name: 'Mutton Rezala', price: 450 }
    ],
    regularItems: [
      { name: 'Salmon Steak', price: 2000 },
      { name: 'Pomfret Fish Fry', price: 750 },
      { name: 'Fried Hilsa / Mustard Hilsa', price: 750 },
      { name: 'Bombay Duck Fry', price: 180 }
    ]
  },

  dinner: {
    title: 'Dinner',
    carbohydrate: [
      { name: 'Boiled Rice', price: 70 },
      { name: 'Rice Flour Bread', price: 20 },
      { name: 'Chapati', price: 20 },
      { name: 'Rumali Roti', price: 40 },
      { name: 'Special Mutton Tehari', price: 480 },
      { name: 'Special Healthy Fried Rice', price: 250 }
    ],
    proteinFish: [
      { name: 'Jamuna Ailia Fish', price: 300 },
      { name: 'Mola Fish', price: 200 },
      { name: 'Desi Tengra Fish', price: 300 },
      { name: 'Koi Fish', price: 400 },
      { name: 'Ayer Fish', price: 680 },
      { name: 'Coral Fish', price: 650 },
      { name: 'Chital Fish Kofta', price: 350 },
      { name: 'Shoal Fish Bhuna', price: 350 },
      { name: 'Rohu Fish Fry', price: 300 },
      { name: 'Indian Potasi Fish', price: 300 },
      { name: 'Kachki Fish', price: 200 },
      { name: 'Baim Fish', price: 350 },
      { name: 'Shing / Magur Fish', price: 380 },
      { name: 'Boal Fish', price: 650 },
      { name: 'River Pangasius', price: 520 },
      { name: 'River / Sea Poa Fish', price: 200 },
      { name: 'Shrimp Do Pyaza', price: 500 }
    ],
    meat: [
      { name: 'Desi Chicken Roast', price: 280 },
      { name: 'Mezbani Beef', price: 350 },
      { name: 'Spicy Duck Curry', price: 450 }
    ]
  },

  hangout: {
    title: 'From Afternoon to Late Night Hangout',
    snacks: [
      { name: 'Special Mutton Tehari', price: 480 },
      { name: 'Special Healthy Fried Rice', price: 250 },
      { name: 'Pomfret Fish Fry', price: 750 },
      { name: 'Fried Hilsa / Mustard Hilsa', price: 750 },
      { name: 'Bombay Duck Fry', price: 180 }
    ],
    beverages: [
      { name: 'Borhani', price: 100 },
      { name: 'Sweet Lassi', price: 100 },
      { name: 'Green Coconut Water', price: 200, description: 'Fresh, no added sugar' }
    ],
    tea: [
      { name: 'Special Malai Tea', price: 50 },
      { name: 'Special Masala Tea', price: 50 },
      { name: 'Black Tea', price: 50 },
      { name: 'Green Tea', price: 50 },
      { name: 'Ginger Tea', price: 50 }
    ]
  },

  coffee_and_beverage: {
    title: 'Coffee & Beverage',

    coffee: [
      { name: 'Cappuccino', price: 220 },
      { name: 'Latte', price: 240 },
      { name: 'Americano', price: 200 },
      { name: 'Long Black', price: 200 },
      { name: 'Espresso', price: 170 },
      { name: 'Caramel Macchiato', price: 350 }
    ],

    houseMocktail: [
      { name: 'Blue Mountain', price: 450 },
      { name: 'Orange Julius', price: 450 },
      { name: 'Orange Mojito', price: 420 },
      { name: 'Hawaiian Mojito', price: 320 },
      { name: 'Green Apple Mojito', price: 350 },
      { name: 'Rainbow', price: 300 }
    ],

    crazyIcedCoffee: [
      { name: 'Brown Sugar Mocha', price: 420 },
      { name: 'Honey Coffee', price: 350 },
      { name: 'Banoffee with Caramel', price: 450 },
      { name: "Matcha De' Strawberry", price: 450 },
      { name: 'Matcha Cheesecake Coco', price: 450 },
      { name: 'Keystroke', price: 420 },
      { name: 'Cold Brew Coconut', price: 450 }
    ],

    healthySmoothie: [
      { name: 'Famous Strawberry', price: 400 },
      { name: 'Avow Splash Smoothie', price: 450 },
      { name: 'Mango Pistachio', price: 450 },
      { name: 'Beet Banana', price: 450 },
      { name: 'Wild Mint', price: 380 }
    ],

    margarita: [
      { name: 'Classic Margarita', price: 420 },
      { name: 'Orange Margarita', price: 420 },
      { name: 'Blue Ocean Margarita', price: 420 },
      { name: 'Red Lady Margarita', price: 420 },
      { name: 'Bloody Margarita', price: 420 }
    ],

    freshJuice: [
      { name: 'Fresh Orange Chiller', price: 420 },
      { name: 'Fresh Watermelon Chiller', price: 350 },
      { name: 'Fresh Papaya Chiller', price: 320 },
      { name: 'Fresh Dragon Fruit Chiller', price: 350 }
    ],

    iceCreamLover: [
      { name: 'Sugar Bugger', price: 200 },
      { name: 'Love Bite', price: 280 },
      { name: 'Choco Hunter', price: 260 }
    ],

    drink: [
      { name: 'Borhani', price: 100 },
      { name: 'Water', price: 20 },
      { name: 'Sweet Lassi', price: 100 }
    ],

    dessert: [
      { name: 'Sweet Curd', price: 100 },
      { name: 'Sour Curd', price: 100 }
    ],

    teaItems: [
      { name: 'Special Malai Tea', price: 50 },
      { name: 'Special Masala Tea', price: 50 },
      { name: 'Black Tea', price: 50 },
      { name: 'Green Tea', price: 50 },
      { name: 'Ginger Tea', price: 50 }
    ],

    addFlavor: { price: 70 }
  },

  catering: {
    title: 'Catering Set Menu',
    setMenu01: [
      { name: '1. Special Healthy Fried Rice', price: 250 },
      { name: '2. Desi Chicken Fry (8-10 Piece)', price: 650 },
      { name: '3. Special Healthy Soup', price: 300 },
      { name: '4. Prawn Tempura (6 Piece)', price: 700 },
      { name: '5. Mutton Rezala', price: 450 },
      { name: '6. Beef Mezbani', price: 350 },
      { name: '7. Fish Finger (6 Piece)', price: 450 },
      { name: '8. Yogurt', price: 100 },
      { name: '9. Borhani', price: 100 },
      { name: '10. Drinks', price: 0, description: 'MRP' }
    ],
    setMenu02: [
      { name: '1. Chinigura Rice Pulao', price: 100 },
      { name: '2. Desi Chicken Roast', price: 280 },
      { name: '3. Mezbani Beef', price: 350 },
      { name: '4. Mutton Rezala', price: 450 },
      { name: '5. Rohu Fish Fry', price: 300 },
      { name: '6. Pomfret (Fry/Curry/Grill)', price: 750 },
      { name: '7. Fried Hilsa/Mustard Hilsa', price: 750 },
      { name: '8. Yogurt', price: 100 },
      { name: '9. Borhani', price: 100 },
      { name: '10. Drinks', price: 0, description: 'MRP' }
    ],
    setMenu03: [
      { name: '1. Special Kacchi Biryani', price: 650 },
      { name: '2. Desi Chicken Roast', price: 280 },
      { name: '3. Special Naan', price: 60 },
      { name: '4. Mezbani Beef', price: 350 },
      { name: '5. Kebab', price: 25 },
      { name: '6. Borhani', price: 100 },
      { name: '7. Yogurt', price: 100 },
      { name: '8. Water', price: 0, description: 'MRP' }
    ]
  }
};


const Menu = () => {
  const [activeTab, setActiveTab] = useState('breakfast');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show/hide scroll to top button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const tabs = [
    { key: 'breakfast', label: 'Breakfast Item' },
    { key: 'lunch', label: 'Lunch Item' },
    { key: 'hangout', label: 'From Afternoon to Late Night Hangout' },
    { key: 'dinner', label: 'Dinner Item' },
    { key: 'coffee_and_beverage', label: 'Coffee & Beverage' },
    { key: 'catering', label: 'Catering Set Menu' }
  ];

  // Convert camelCase or snake_case to Title Case with spaces
  const formatSectionTitle = (key: string): string => {
    return key
      .replace(/_/g, ' ') // Replace underscores with spaces
      .replace(/([A-Z])/g, ' $1') // Add space before capital letters
      .trim() // Remove leading/trailing spaces
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  const renderMenuSection = (sectionTitle: string, items: MenuItem[]) => (
    <div className="mb-16">
      <div className="mb-8">
        <h3 className="font-display text-3xl md:text-4xl text-ocean-deep mb-3 italic">{sectionTitle}</h3>
        <div className="flex items-center gap-3">
          <div className="h-px w-12 bg-gold"></div>
          <span className="text-gold text-xl">✦</span>
          <div className="h-px w-20 bg-gold"></div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.02 }}
            className="card-elegant p-4 group hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <h4 className="font-display text-lg text-ocean-deep group-hover:text-ocean-medium transition-colors duration-300">{item.name}</h4>
                {item.description && (
                  <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                )}
              </div>
              <span className="font-display text-xl text-gold font-medium whitespace-nowrap">৳{item.price}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const renderAddFlavorSection = () => (
    <div className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="card-elegant p-6 bg-gradient-to-br from-gold/5 to-ocean-mist/30 border-2 border-gold/20 text-center max-w-md mx-auto"
      >
        <div className="flex items-center justify-center gap-4">
          <div className="flex-1">
            <h4 className="font-display text-xl text-ocean-deep mb-1">Add Flavour</h4>
            <p className="text-sm text-muted-foreground">Customize your ice cream</p>
          </div>
          <span className="font-display text-2xl text-gold font-medium">৳70</span>
        </div>
      </motion.div>
    </div>
  );

  const renderCateringMenu = () => {
    const cateringData = menuData.catering;
    const setMenuNames = ['Set Menu 01', 'Set Menu 02', 'Set Menu 03'];
    const setMenuKeys = ['setMenu01', 'setMenu02', 'setMenu03'];

    const calculateTotal = (items: MenuItem[]) => {
      return items.reduce((sum, item) => sum + item.price, 0);
    };

    return (
      <div className="space-y-12">
        {setMenuKeys.map((key, index) => {
          const items = cateringData[key as keyof typeof cateringData] as MenuItem[];
          const total = calculateTotal(items);

          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-12"
            >
              {/* Set Menu Title */}
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-3">
                  <h3 className="font-display text-3xl md:text-4xl text-ocean-deep italic">{setMenuNames[index]}</h3>
                  <div className="flex-1 h-px bg-gold/30"></div>
                  <span className="font-display text-2xl text-gold font-bold">৳{total}</span>
                </div>
                <p className="text-sm text-muted-foreground pl-1">Complete set menu per person (+ MRP drinks)</p>
              </div>

              {/* Items Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                {items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.02 }}
                    className="card-elegant p-4 group hover:border-gold/30 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="font-display text-base text-ocean-deep group-hover:text-ocean-medium transition-colors duration-300">
                          {item.name}
                        </h4>
                      </div>
                      <span className="font-display text-lg text-gold font-medium whitespace-nowrap">
                        {item.price === 0 ? item.description : `৳${item.price}`}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-elegant p-6 bg-gradient-to-br from-gold/5 to-ocean-mist/10 border-gold/20 text-center"
        >
          <p className="font-body text-base text-ocean-deep">
            <span className="font-medium">Note:</span> Customers can add or subtract items before ordering
          </p>
        </motion.div>
      </div>
    );
  };

  const currentMenu = menuData[activeTab as keyof typeof menuData];

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={galleryDining} alt="Menu" className="w-full h-full object-cover" style={{ imageOrientation: 'from-image' }} loading="eager" fetchPriority="high" decoding="async" />
          <div className="absolute inset-0 bg-ocean-deep/85" />
          <div className="absolute inset-0 bg-bengali-pattern" />
          <div className="absolute inset-0 bg-texture opacity-15" />
        </div>
        <div className="elegant-container relative z-10 text-center">
          <SectionHeader subtitle="Our Selection" title="Menu" light />
          <motion.a
            href="https://wa.me/8801309225522"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 mt-6 px-8 py-3 bg-gold text-ocean-deep font-body text-sm uppercase tracking-wide rounded-lg hover:bg-gold/90 transition-colors duration-300"
          >
            <ShoppingBag className="w-4 h-4" />
            Order Now
          </motion.a>
        </div>
      </section>

      {/* Menu Content */}
      <section className="pt-8 md:pt-12 pb-20 md:pb-28 lg:pb-36 bg-gradient-warm">
        <div className="elegant-container">
          {/* Tabs - Sticky on scroll */}
          <div className="mb-12 sticky top-24 md:top-28 z-30 bg-cream/95 backdrop-blur-md py-4 md:py-5 -mx-4 px-4 md:-mx-6 md:px-6">
            {/* Mobile: Horizontal scroll with gradient indicators */}
            <div className="md:hidden relative">
              {/* Left gradient fade */}
              <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none"></div>
              {/* Right gradient fade */}
              <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none"></div>
              
              <div className="overflow-x-auto scrollbar-hide pb-3 px-1">
                <div className="flex gap-3 px-2" style={{ scrollSnapType: 'x mandatory' }}>
                  {tabs.map((tab) => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      style={{ scrollSnapAlign: 'start' }}
                      className={`px-5 py-3 font-body text-sm tracking-wide rounded-xl transition-all duration-300 whitespace-nowrap  flex-shrink-0 ${
                        activeTab === tab.key
                          ? 'bg-ocean-deep text-white  scale-105'
                          : 'bg-white text-ocean-deep hover:bg-ocean-mist border-2 border-ocean-deep/10'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Scroll hint text */}
              <p className="text-center text-xs text-muted-foreground mt-2 opacity-60">
                ← Swipe to see more →
              </p>
            </div>

            {/* Desktop: Centered tabs */}
            <div className="hidden md:flex gap-3 justify-center flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-6 py-3 font-body text-sm tracking-wide rounded-xl transition-all duration-300 whitespace-nowrap  ${
                    activeTab === tab.key
                      ? 'bg-ocean-deep text-white  scale-105'
                      : 'bg-white text-ocean-deep hover:bg-ocean-mist border-2 border-ocean-deep/10 hover:border-ocean-deep/30'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items */}
          <div className="max-w-6xl mx-auto">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-12">
                <div className="inline-block">
                  <span className="block font-display-alt text-sm uppercase tracking-[0.3em] text-gold mb-3">
                    ✦ Menu Selection ✦
                  </span>
                  <h2 className="font-display text-4xl md:text-6xl text-ocean-deep mb-4 italic relative">
                    {currentMenu.title}
                  </h2>
                  <div className="flex items-center justify-center gap-4 mb-2">
                    <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold"></div>
                    <span className="text-gold text-2xl">❧</span>
                    <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold"></div>
                  </div>
                </div>
              </div>

              {/* Render each category */}
              {activeTab === 'catering' ? (
                renderCateringMenu()
              ) : (
                Object.entries(currentMenu).map(([key, value]) => {
                  if (key === 'title' || key === 'addFlavor') return null;
                  
                  return (
                    <div key={key}>
                      {renderMenuSection(formatSectionTitle(key), value as MenuItem[])}
                      {/* Show Add Flavour section after Ice Cream Lover */}
                      {key === 'iceCreamLover' && activeTab === 'coffee_and_beverage' && renderAddFlavorSection()}
                    </div>
                  );
                })
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-50 p-3 md:p-4 bg-ocean-deep text-white rounded-full shadow-2xl hover:bg-ocean-medium transition-all duration-300 hover:scale-110 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-y-1 transition-transform duration-300" />
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Menu;
