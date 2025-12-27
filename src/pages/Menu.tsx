import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';
import { ShoppingBag } from 'lucide-react';
import galleryDining from '@/assets/gallery-dining.jpg';

interface MenuItem {
  name: string;
  price: number;
  description?: string;
}

const menuData = {
  breakfast: {
    title: 'Breakfast',
    beverages: [
      { name: 'Green Coconut Water', price: 200, description: 'No added sugar' }
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
      { name: 'Fried Duck & Chicken Egg', price: 60 },
      { name: 'Boiled Duck & Chicken Egg', price: 50 },
      { name: 'Beef with Urad Dal', price: 220 },
      { name: 'Mutton with Mung Dal', price: 450 },
      { name: 'Mixed Vegetables', price: 70 },
      { name: 'Goat Trotters', price: 220 },
      { name: 'Healthy Desi Chicken Soup', price: 300 },
      { name: 'Desi Chicken Curry', price: 280 },
      { name: 'Beef Liver Bhuna', price: 375 },
      { name: 'Fried Hilsa', price: 750 },
      { name: 'Pomfret Fry', price: 750 }
    ]
  },
  lunch: {
    title: 'Lunch',
    carbohydrate: [
      { name: 'Steamed Rice', price: 70 },
      { name: 'Basmati Pulao', price: 100 },
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
      { name: 'Desi Tengra', price: 300 },
      { name: 'Baim Fish', price: 350 },
      { name: 'Koi Fish', price: 400 },
      { name: 'Shing/Magur Fish', price: 380 },
      { name: 'Ayer Fish', price: 680 },
      { name: 'Boal Fish', price: 650 },
      { name: 'Coral Fish', price: 650 },
      { name: 'River Pangasius', price: 520 },
      { name: 'Chital Kofta', price: 350 },
      { name: 'Poa Fish', price: 200 },
      { name: 'Shoal Bhuna', price: 350 },
      { name: 'Shrimp Do Pyaza', price: 500 },
      { name: 'Rohu Fry', price: 300 }
    ],
    meat: [
      { name: 'Desi Chicken Roast', price: 280 },
      { name: 'Desi Chicken Curry', price: 280 },
      { name: 'Mezbani Beef', price: 350 },
      { name: 'Mutton Rezala', price: 450 }
    ]
  },
  hangout: {
    title: 'Late Afternoon to Late Night',
    items: [
      { name: 'Beef Adana Kebab', price: 380 },
      { name: 'Beef Seekh Kebab', price: 350 },
      { name: 'Beef Boti Kebab', price: 350 },
      { name: 'Mutton Boti Kebab', price: 450 },
      { name: 'Tuna Fish Kebab', price: 440 },
      { name: 'Salmon Steak', price: 2000 },
      { name: 'Pomfret Grill', price: 700 },
      { name: 'Shrimp Tempura (6 pcs)', price: 700 },
      { name: 'Thai Crispy Prawn (6 pcs)', price: 720 },
      { name: 'Chicken Fry (8 pcs)', price: 650 },
      { name: 'Fish & Chips', price: 450 },
      { name: 'Healthy Chowmein', price: 350 },
      { name: 'Cashew Nut Salad', price: 250 },
      { name: 'Healthy Soup', price: 300 }
    ]
  },
  dinner: {
    title: 'Dinner',
    carbohydrate: [
      { name: 'Boiled Rice', price: 70 },
      { name: 'Rice Flour Bread', price: 20 },
      { name: 'Chapati', price: 20 },
      { name: 'Rumali Roti', price: 40 }
    ],
    meat: [
      { name: 'Desi Chicken Roast', price: 350 },
      { name: 'Mezbani Beef', price: 350 },
      { name: 'Spicy Duck Curry', price: 450 }
    ]
  },
  coffee_and_beverage: {
    title: 'Coffee & Beverage',
    coffee: [
      { name: 'Cappuccino', price: 220 },
      { name: 'Latte', price: 240 },
      { name: 'Americano', price: 200 },
      { name: 'Espresso', price: 170 },
      { name: 'Caramel Macchiato', price: 350 }
    ],
    juice: [
      { name: 'Fresh Orange Chiller', price: 500 },
      { name: 'Watermelon Chiller', price: 350 },
      { name: 'Papaya Chiller', price: 320 },
      { name: 'Dragon Fruit Chiller', price: 350 }
    ],
    tea_and_dairy: [
      { name: 'Special Malai Tea', price: 100 },
      { name: 'Masala Tea', price: 50 },
      { name: 'Black Tea', price: 50 },
      { name: 'Green Tea', price: 50 },
      { name: 'Sweet Lassi', price: 100 },
      { name: 'Sweet Yogurt', price: 100 },
      { name: 'Sour Yogurt', price: 100 }
    ]
  }
};

const Menu = () => {
  const [activeTab, setActiveTab] = useState('breakfast');

  const tabs = [
    { key: 'breakfast', label: 'Breakfast Item' },
    { key: 'lunch', label: 'Lunch Item' },
    { key: 'hangout', label: 'From Afternoon to Late Night Hangout' },
    { key: 'dinner', label: 'Dinner Item' },
    { key: 'coffee_and_beverage', label: 'Coffee & Beverage' }
  ];

  const renderMenuSection = (sectionTitle: string, items: MenuItem[]) => (
    <div className="mb-12">
      <h3 className="font-display text-2xl text-ocean-deep mb-6 italic capitalize">{sectionTitle}</h3>
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

  const currentMenu = menuData[activeTab as keyof typeof menuData];

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={galleryDining} alt="Menu" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ocean-deep/85" />
          <div className="absolute inset-0 bg-bengali-pattern" />
          <div className="absolute inset-0 bg-texture opacity-15" />
        </div>
        <div className="elegant-container relative z-10 text-center">
          <SectionHeader subtitle="Our Selection" title="Menu" light />
          <motion.a
            href="tel:+8801234567890"
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
      <section className="section-padding bg-gradient-warm">
        <div className="elegant-container">
          {/* Tabs */}
          <div className="mb-12 overflow-x-auto pb-2">
            <div className="flex gap-2 min-w-max md:justify-center">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-2.5 font-body text-xs sm:text-sm tracking-wide rounded-full transition-all duration-300 whitespace-nowrap ${
                    activeTab === tab.key
                      ? 'bg-ocean-deep text-white shadow-lg scale-105'
                      : 'bg-white text-ocean-deep hover:bg-ocean-mist border border-border hover:border-ocean-deep/30'
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
              <h2 className="font-display text-3xl md:text-5xl text-ocean-deep mb-8 text-center italic">
                {currentMenu.title}
              </h2>

              {/* Render each category */}
              {Object.entries(currentMenu).map(([key, value]) => {
                if (key === 'title') return null;
                return renderMenuSection(key.replace(/_/g, ' '), value as MenuItem[]);
              })}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Menu;
