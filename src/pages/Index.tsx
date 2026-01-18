import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Leaf, Music, Wind, BadgeCheck, Truck, UtensilsCrossed } from 'lucide-react';
import dish1 from '@/assets/fi-1.jpg';
import dish2 from '@/assets/fi-2.jpg';
import dish3 from '@/assets/fi-3.jpg';
import galleryDining from '@/assets/dining.jpg';
import chefCooking from '@/assets/philosophy.png';
import aboutImage from '@/assets/HCatering.jpg';

const Index = () => {
  const { t } = useLanguage();

  const featuredDishes = [
    { image: dish1, name: 'Shorisha Ilish', desc: 'Hilsa in mustard sauce', price: '650 /=' },
    { image: dish2, name: 'Mutton Biryani', desc: 'Saffron-infused perfection', price: '420 /=' },
    { image: dish3, name: 'Duck Curry', desc: 'Traditional delicacy', price: '750 /=' },
  ];

  const features = [
    { icon: Music, title: 'Live Music & Karaoke', desc: 'Entertainment station for your enjoyment' },
    { icon: Wind, title: 'Modern Smoking Zone', desc: 'Separate area with air purifiers' },
    { icon: BadgeCheck, title: 'Transparent Pricing', desc: 'No hidden charges, VAT included' },
    { icon: Truck, title: 'In-House Delivery', desc: 'Fresh food delivered to your door' },
    { icon: UtensilsCrossed, title: 'Party & Catering', desc: 'Complete event services available' },
    { icon: Leaf, title: 'Healthy & Hygienic', desc: 'Open kitchen with fresh ingredients' },
  ];

  return (
    <main>
      <Hero />
      
      {/* Welcome Section */}
      <section className="section-padding bg-gradient-warm bg-food-pattern relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gradient-radial-gold blur-2xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-ocean-pale/10 blur-3xl" />
        </div>

        <div className="elegant-container relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block font-display-alt text-sm uppercase tracking-[0.25em] text-gold mb-4">
                ✦ Our Philosophy ✦
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ocean-deep mb-6 leading-[1.1] italic">
                Honest Food,<br />
                <span className="text-ocean-medium not-italic">Honest Taste</span>
              </h2>
              <div className="divider-ornate max-w-[200px] mb-8">
                <span className="px-4 text-gold text-lg">❧</span>
              </div>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
                In a city where shortcuts have become the norm, we choose the longer path. 
                Fresh spices ground daily, responsibly sourced meats, and absolutely no artificial enhancers. 
                Just food the way your mother made it.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 font-display text-lg text-ocean-deep hover:text-gold transition-colors duration-300 group"
              >
                <span className="link-underline italic">Learn our story</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              <div className="image-hover aspect-[4/5]">
                <img 
                  src={chefCooking} 
                  alt="Chef cooking"
                  className="w-full h-full object-cover"
                  style={{ imageOrientation: 'from-image' }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -bottom-8 -left-8 glass-card p-6 max-w-[240px] bg-texture"
              >
                <p className="font-display text-4xl text-ocean-deep mb-1 italic">10+</p>
                <p className="font-body text-sm text-muted-foreground">Years of serving authentic Bengali cuisine</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-16 bg-ocean-deep bg-bengali-pattern relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-deep via-ocean-dark to-ocean-deep opacity-85" />
        <div className="elegant-container relative">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-center gap-3 md:gap-5 p-4 md:p-6"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-gold flex items-center justify-center shrink-0 shadow-gold">
                  <feature.icon className="w-5 h-5 md:w-7 md:h-7 text-ocean-deep" />
                </div>
                <div>
                  <h3 className="font-display text-base md:text-xl text-primary-foreground mb-1 italic leading-tight">{feature.title}</h3>
                  <p className="font-body text-xs md:text-sm text-primary-foreground/60 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section id="popular" className="section-padding bg-background bg-food-pattern relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        <div className="elegant-container relative">
          <SectionHeader subtitle="Culinary Excellence" title="Signature Dishes" />
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="image-hover aspect-[4/5] mb-5">
                  <img 
                    src={dish.image} 
                    alt={dish.name}
                    className="w-full h-full object-cover"
                    style={{ imageOrientation: 'from-image' }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-display text-2xl text-ocean-deep mb-1 group-hover:text-gold transition-colors italic">
                      {dish.name}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">{dish.desc}</p>
                  </div>
                  <span className="font-display text-xl text-gold">{dish.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-14"
          >
            <Link to="/menu" className="btn-elegant-outline">
              View Full Menu
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Catering Services Section */}
      <section className="section-padding bg-ocean-mist relative overflow-hidden">
        <div className="absolute inset-0 bg-food-pattern opacity-50" />
        <div className="elegant-container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block font-display-alt text-sm uppercase tracking-[0.25em] text-gold mb-4">
                ✦ Corporate & Events ✦
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-ocean-deep mb-6 leading-tight italic">
                Catering Services
              </h2>
              <div className="divider-ornate max-w-[180px] mb-6">
                <span className="px-4 text-gold text-lg">❧</span>
              </div>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                From intimate birthday celebrations to large corporate events, we bring authentic Bengali cuisine to your special occasions. 
                Custom menus, professional service, and the same healthy cooking you trust.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 font-body text-ocean-deep">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  Office Lunch & Corporate Events
                </li>
                <li className="flex items-center gap-3 font-body text-ocean-deep">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  Birthday & Family Programs
                </li>
                <li className="flex items-center gap-3 font-body text-ocean-deep">
                  <span className="w-2 h-2 rounded-full bg-gold" />
                  Custom Menu Planning
                </li>
              </ul>
              <a 
                href="https://wa.me/8801309225522" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-elegant-outline"
              >
                Call to Book: 01309-225522
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
                <div className="image-hover aspect-[4/3] rounded-lg overflow-hidden relative">
                <img 
                  src={aboutImage} 
                  alt="Catering services"
                  className="w-full h-full object-cover"
                  style={{ imageOrientation: 'from-image' }}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-ocean-deep/30" />
                </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={galleryDining} 
            alt="Restaurant ambiance"
            className="w-full h-full object-cover"
            style={{ imageOrientation: 'from-image' }}
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-ocean-deep/85" />
          <div className="absolute inset-0 bg-bengali-pattern" />
          <div className="absolute inset-0 bg-texture opacity-20" />
        </div>
        
        <div className="elegant-container relative text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block font-display-alt text-sm uppercase tracking-[0.25em] text-gold mb-4"
          >
            ✦ {t('cta.subtitle')} ✦
          </motion.span>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4 max-w-3xl mx-auto leading-tight italic"
          >
            {t('cta.title')}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="divider-ornate max-w-[200px] mx-auto mb-8"
          >
            <span className="px-4 text-gold text-lg">❧</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="https://wa.me/8801309225522" target="_blank" rel="noopener noreferrer" className="btn-gold">
              {t('cta.button')}
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
