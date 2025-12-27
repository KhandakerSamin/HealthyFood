import SectionHeader from '@/components/SectionHeader';
import { motion } from 'framer-motion';
import { Users, Clock, CheckCircle, Phone } from 'lucide-react';
import galleryDining from '@/assets/gallery-dining.jpg';
import dishBiryani from '@/assets/dish-biryani.jpg';

const Catering = () => {
  const packages = [
    {
      id: 1,
      name: 'Set Menu 01',
      price: '৳2500',
      serves: '1 Person',
      items: [
        'Fried Rice',
        'Chicken Fry',
        'Prawn Tempura',
        'Mutton Rezala',
        'Beef Mezbani',
        'Fish Finger',
        'Yogurt',
        'Borhani',
        'Drinks'
      ],
      popular: true
    },
    {
      id: 2,
      name: 'Set Menu 02',
      price: '৳1930',
      serves: '1 Person',
      items: [
        'Basmati Pulao',
        'Mezbani Beef',
        'Mutton Rezala',
        'Kabab',
        'Fish',
        'Yogurt/Borhani',
        'Drinks'
      ],
      popular: false
    },
    {
      id: 3,
      name: 'Set Menu 03 - Kacchi Biriyani',
      price: 'Contact for Price',
      serves: 'Custom',
      items: [
        'Kacchi Biriyani',
        'Kabab',
        'Borhani',
        'Yogurt',
        'Water',
        'Fish Fry'
      ],
      popular: true
    }
  ];

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
          />
          <div className="absolute inset-0 bg-ocean-deep/85" />
          <div className="absolute inset-0 bg-bengali-pattern" />
          <div className="absolute inset-0 bg-texture opacity-15" />
        </div>
        <div className="elegant-container relative z-10 text-center">
          <SectionHeader subtitle="For Your Special Events" title="Catering Service" light />
          <motion.a
            href="tel:+8801234567890"
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
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="glass-card p-8 text-center group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-ocean-deep/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-ocean-deep group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-7 h-7 text-ocean-deep group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-display text-xl text-ocean-deep mb-3 italic">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Catering Packages */}
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-display text-3xl md:text-4xl text-ocean-deep mb-4 italic">Our Catering Packages</h2>
              <p className="font-body text-lg text-muted-foreground">Choose from our carefully curated set menus</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`relative card-elegant p-8 flex flex-col ${pkg.popular ? 'border-2 border-gold' : ''}`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 px-4 py-1.5 bg-gold text-ocean-deep font-body text-xs font-medium rounded-full">
                        ★ Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="font-display text-2xl text-ocean-deep mb-2 italic">{pkg.name}</h3>
                    <p className="font-display text-3xl text-gold font-medium mb-1">{pkg.price}</p>
                    <p className="font-body text-sm text-muted-foreground">{pkg.serves}</p>
                  </div>

                  <div className="space-y-3 mb-8 flex-grow">
                    {pkg.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm">
                        <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                        <span className="font-body text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="tel:+8801234567890"
                    className="block w-full py-3 text-center bg-ocean-deep text-white font-body text-sm uppercase tracking-wide rounded-lg hover:bg-ocean-medium transition-colors duration-300 mt-auto"
                  >
                    Order Now
                  </a>
                </motion.div>
              ))}
            </div>
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
