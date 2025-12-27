import SectionHeader from '@/components/SectionHeader';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Leaf, Award, Users, Quote } from 'lucide-react';
import chefCooking from '@/assets/chef-cooking.jpg';
import galleryDining from '@/assets/gallery-dining.jpg';

const About = () => {
  const { t } = useLanguage();

  const values = [
    { icon: Leaf, title: 'Pure Ingredients', desc: 'No harmful oils, no shortcuts. Just clean, fresh food sourced responsibly.' },
    { icon: Award, title: 'No Hidden Costs', desc: 'Transparent pricing with no service charges or hidden VAT surprises.' },
    { icon: Users, title: 'For Everyone', desc: 'Families, professionals, students — everyone finds comfort at our table.' },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={galleryDining} 
            alt="Restaurant ambiance" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-ocean-deep/85" />
          <div className="absolute inset-0 bg-bengali-pattern" />
          <div className="absolute inset-0 bg-texture opacity-15" />
        </div>
        <div className="elegant-container relative z-10">
          <SectionHeader subtitle={t('about.subtitle')} title={t('about.title')} light />
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-gradient-warm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
        
        <div className="elegant-container relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-warm-lg">
                <img 
                  src={chefCooking} 
                  alt="Our chef preparing dishes"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gold/30 rounded-lg -z-10" />
            </motion.div>
            
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <Quote className="w-12 h-12 text-gold/30 mb-4" />
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-display text-2xl md:text-3xl text-ocean-deep leading-relaxed mb-8 italic"
              >
                "In a city where fast food has quietly replaced family recipes, we arrive with a refreshing promise."
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="font-body text-lg text-muted-foreground leading-relaxed mb-6"
              >
                We celebrate Bangla cuisine in its most authentic, health-conscious form — prepared with care, 
                hygiene, and ingredients that come from honest sources.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="font-body text-lg text-muted-foreground leading-relaxed"
              >
                Every dish begins with uncompromised decisions: fresh spices ground daily, responsibly sourced 
                meats, desi chickens, and absolutely no food color, preservatives, or artificial enhancers.
              </motion.p>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8 mt-24">
            {values.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
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
        </div>
      </section>
    </main>
  );
};

export default About;
