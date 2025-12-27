import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/SectionHeader';
import { useLanguage } from '@/contexts/LanguageContext';
import dishHilsa from '@/assets/dish-hilsa.jpg';
import dishBiryani from '@/assets/dish-biryani.jpg';
import dishDuck from '@/assets/dish-duck.jpg';
import dishKhichuri from '@/assets/dish-khichuri.jpg';
import dishSamosa from '@/assets/dish-samosa.jpg';
import galleryDining from '@/assets/gallery-dining.jpg';

const menuCategories = ['All', 'Most Popular', 'Appetizers', 'Main Courses', 'Fish Specialties', 'Desserts', 'Beverages'];

const menuItems = [
  { id: 1, name: 'Special Healthy Khichuri', category: 'Main Courses', price: '৳350', desc: 'Slow-cooked rice and lentils with fresh vegetables and aromatic spices.', image: dishKhichuri, popular: true },
  { id: 2, name: 'Beef Kolija Bhuna', category: 'Main Courses', price: '৳420', desc: 'Tender liver cooked in rich Bangla spices until perfectly aromatic.', image: dishBiryani, popular: true },
  { id: 3, name: 'Shorisha Ilish', category: 'Fish Specialties', price: '৳650', desc: 'Hilsa fish in authentic mustard sauce — a timeless Bengali classic.', image: dishHilsa, popular: true },
  { id: 4, name: 'Fried Hilsa', category: 'Fish Specialties', price: '৳580', desc: 'Crispy river hilsa with its iconic fragrance, lightly seasoned.', image: dishHilsa, popular: true },
  { id: 5, name: 'Duck with Chaal er Ruti', category: 'Main Courses', price: '৳750', desc: 'Traditional duck curry served with hand-prepared rice flour bread.', image: dishDuck, popular: true },
  { id: 6, name: 'Salmon Fish Steak', category: 'Fish Specialties', price: '৳890', desc: 'Modern fusion — seared salmon with Bengali-inspired seasoning.', image: dishHilsa, popular: true },
  { id: 7, name: 'Loitta Fry', category: 'Fish Specialties', price: '৳320', desc: 'Crispy fried Bombay duck — a beloved Bangladeshi delicacy.', image: dishSamosa, popular: true },
  { id: 8, name: 'Duck Curry', category: 'Main Courses', price: '৳680', desc: 'Rich and aromatic traditional duck preparation with Bangla spices.', image: dishDuck },
  { id: 9, name: 'Mutton Biryani', category: 'Main Courses', price: '৳450', desc: 'Saffron-infused rice layered with slow-cooked tender mutton.', image: dishBiryani, popular: true },
  { id: 10, name: 'Vegetable Pakora', category: 'Appetizers', price: '৳180', desc: 'Crispy vegetable fritters with house-made chutneys.', image: dishSamosa },
  { id: 11, name: 'Mango Lassi', category: 'Beverages', price: '৳150', desc: 'Creamy yogurt drink with fresh seasonal mangoes.', image: dishKhichuri },
  { id: 12, name: 'Borhani', category: 'Beverages', price: '৳120', desc: 'Traditional spiced yogurt drink — refreshing and digestive.', image: dishKhichuri },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const { t } = useLanguage();

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : activeCategory === 'Most Popular'
    ? menuItems.filter(item => item.popular)
    : menuItems.filter(item => item.category === activeCategory);

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
        <div className="elegant-container relative z-10">
          <SectionHeader subtitle={t('menu.subtitle')} title={t('menu.title')} light />
        </div>
      </section>

      {/* Menu Content */}
      <section className="section-padding bg-gradient-warm">
        <div className="elegant-container">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {menuCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 font-body text-xs uppercase tracking-wider rounded-md transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-ocean-deep text-primary-foreground shadow-warm'
                    : 'bg-white text-ocean-deep hover:bg-ocean-mist border border-border'
                } ${cat === 'Most Popular' && activeCategory !== cat ? 'border-gold/40 text-gold' : ''}`}
              >
                {cat === 'Most Popular' ? '★ ' + cat : cat}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="card-elegant p-0 overflow-hidden flex group"
              >
                <div className="w-36 h-36 sm:w-40 sm:h-40 flex-shrink-0 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 lg:p-6 flex-1 flex flex-col justify-center">
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-display text-xl lg:text-2xl text-ocean-deep group-hover:text-ocean-medium transition-colors duration-300 italic">
                        {item.name}
                      </h3>
                      {item.popular && (
                        <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-body italic text-gold border border-gold/40 rounded">
                          ★ Popular
                        </span>
                      )}
                    </div>
                    <span className="font-display text-lg text-gold shrink-0">{item.price}</span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-2">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Menu;
