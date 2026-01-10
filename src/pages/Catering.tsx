import SectionHeader from '@/components/SectionHeader';
import { motion } from 'framer-motion';
import { Users, Clock, CheckCircle, Phone } from 'lucide-react';
import galleryDining from '@/assets/catering.jpg';
import dishBiryani from '@/assets/dish-biryani.jpg';

const Catering = () => {
  const setMenus = [
    {
      id: 1,
      name: 'Set Menu 01',
      items: [
        { name: 'Special Healthy Fried Rice', price: 250 },
        { name: 'Desi Chicken Fry (8-10 Piece)', price: 650 },
        { name: 'Special Healthy Soup', price: 300 },
        { name: 'Prawn Tempura (6 Piece)', price: 700 },
        { name: 'Mutton Rezala', price: 450 },
        { name: 'Beef Mezbani', price: 350 },
        { name: 'Fish Finger (6 Piece)', price: 450 },
        { name: 'Yogurt', price: 100 },
        { name: 'Borhani', price: 100 },
        { name: 'Drinks', price: 'MRP', priceNote: true }
      ],
      popular: true
    },
    {
      id: 2,
      name: 'Set Menu 02',
      items: [
        { name: 'Chinigura Rice Pulao', price: 100 },
        { name: 'Desi Chicken Roast', price: 280 },
        { name: 'Mezbani Beef', price: 350 },
        { name: 'Mutton Rezala', price: 450 },
        { name: 'Rohu Fish Fry', price: 300 },
        { name: 'Pomfret (Fry/Curry/Grill)', price: 750 },
        { name: 'Fried Hilsa/Mustard Hilsa', price: 750 },
        { name: 'Yogurt', price: 100 },
        { name: 'Borhani', price: 100 },
        { name: 'Drinks', price: 'MRP', priceNote: true }
      ],
      popular: false
    },
    {
      id: 3,
      name: 'Set Menu 03',
      items: [
        { name: 'Special Kacchi Biryani', price: 650 },
        { name: 'Desi Chicken Roast', price: 280 },
        { name: 'Special Naan', price: 60 },
        { name: 'Mezbani Beef', price: 350 },
        { name: 'Kebab', price: 25 },
        { name: 'Borhani', price: 100 },
        { name: 'Yogurt', price: 100 },
        { name: 'Water', price: 'MRP', priceNote: true }
      ],
      popular: true
    }
  ];

  const calculateTotal = (items: { name: string; price: number | string; priceNote?: boolean }[]) => {
    return items.reduce((sum, item) => {
      if (typeof item.price === 'number') {
        return sum + item.price;
      }
      return sum;
    }, 0);
  };

  const features = [
    { icon: Users, title: 'Custom Portions', desc: 'Flexible serving sizes for any group' },
    { icon: Clock, title: 'Timely Service', desc: 'On-time delivery guaranteed' },
    { icon: CheckCircle, title: 'Fresh Ingredients', desc: 'Prepared with authentic Bengali spices' },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={galleryDining} 
            alt="Catering Services" 
            className="w-full h-full object-cover"
            style={{ imageOrientation: 'from-image' }}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-ocean-deep/85" />
          <div className="absolute inset-0 bg-bengali-pattern" />
          <div className="absolute inset-0 bg-texture opacity-15" />
        </div>
        <div className="elegant-container relative z-10 text-center">
          <SectionHeader subtitle="For Your Special Events" title="Catering Service" light />
          <motion.a
            href="https://wa.me/8801309225522"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 mt-6 px-8 py-3 bg-gold text-ocean-deep font-body text-sm uppercase tracking-wide rounded-lg hover:bg-gold/90 transition-colors duration-300"
          >
            <Phone className="w-4 h-4" />
            Book Your Order
          </motion.a>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-gradient-warm">
        <div className="elegant-container">
          

          {/* Catering Packages */}
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl text-ocean-deep mb-4 italic">Set Menu for Catering</h2>
              <p className="font-body text-lg text-muted-foreground">Choose from our carefully curated set menus</p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {setMenus.map((menu, index) => (
                <motion.div
                  key={menu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative card-elegant p-6 flex flex-col border-2 border-gold"
                >
                  
                  <div className="text-center mb-6 pb-4 border-b border-border">
                    <h3 className="font-display text-2xl text-ocean-deep mb-2 italic">{menu.name}</h3>
                    <p className="font-body text-sm text-muted-foreground">Per Person</p>
                  </div>

                  <div className="space-y-2 mb-6 flex-grow">
                    {menu.items.map((item, i) => (
                      <div key={i} className="flex items-center justify-between gap-3 py-2 border-b border-border/50 last:border-0">
                        <span className="font-body text-sm text-ocean-deep flex-1">{i + 1}. {item.name}</span>
                        <span className="font-display text-base text-gold font-medium whitespace-nowrap">
                          {item.priceNote ? item.price : `৳${item.price}`}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t-2 border-gold/30 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-lg text-ocean-deep font-medium">Total:</span>
                      <span className="font-display text-2xl text-gold font-bold">৳{calculateTotal(menu.items)}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 text-right">+ MRP drinks</p>
                  </div>

                  <a
                    href="https://wa.me/8801309225522"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 text-center bg-ocean-deep text-white font-body text-sm uppercase tracking-wide rounded-lg hover:bg-ocean-medium transition-colors duration-300 mt-auto"
                  >
                    Order Now
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Note */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 text-center glass-card p-6"
            >
              <p className="font-body text-base text-ocean-deep">
                <span className="font-medium">Note:</span> Customers can add or subtract items before ordering
              </p>
            </motion.div>
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center glass-card p-8 md:p-12"
          >
            <Phone className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="font-display text-2xl md:text-3xl text-ocean-deep mb-4 italic">Need a Custom Package?</h3>
            <p className="font-body text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Contact us for customized catering solutions for weddings, corporate events, or large gatherings.
            </p>
            <a
              href="tel:+8801234567890"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gold text-ocean-deep font-body text-sm uppercase tracking-wide rounded-lg hover:bg-gold/90 transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              Call Us Now
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Catering;
