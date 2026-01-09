import { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { X, ZoomIn } from 'lucide-react';
import galleryDining from '@/assets/gcover2.jpg';
import heroImage from '@/assets/g1.jpg';
import dishHilsa from '@/assets/g2.jpg';
import dishDuck from '@/assets/g5.jpg';
import chefCooking from '@/assets/g4.jpg';
import dishKhichuri from '@/assets/g6.jpg';
import Coffee from '@/assets/g7.jpg';

const galleryImages = [
  { id: 1, title: 'Restaurant Ambiance', category: 'ambiance', image: heroImage },
  { id: 2, title: 'Shorisha Ilish', category: 'dishes', image: dishHilsa },
  { id: 3, title: 'Private Dining', category: 'ambiance', image: dishKhichuri },
  { id: 4, title: 'Duck Curry', category: 'dishes', image: dishDuck },
  { id: 5, title: 'Our Chef at Work', category: 'events', image: chefCooking },
  { id: 6, title: 'Khichuri Platter', category: 'dishes', image:  Coffee},
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { t } = useLanguage();

  const selectedItem = galleryImages.find(i => i.id === selectedImage);

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={galleryDining} 
            alt="Gallery ambiance" 
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-ocean-deep/85" />
          <div className="absolute inset-0 bg-bengali-pattern" />
          <div className="absolute inset-0 bg-texture opacity-15" />
        </div>
        <div className="elegant-container relative z-10">
          <SectionHeader subtitle={t('gallery.subtitle')} title={t('gallery.title')} light />
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-gradient-warm">
        <div className="elegant-container">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {galleryImages.map((img, index) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                onClick={() => setSelectedImage(img.id)}
                className="aspect-square cursor-pointer overflow-hidden rounded-lg group relative shadow-warm hover:shadow-warm-lg transition-shadow duration-500"
              >
                <img 
                  src={img.image} 
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/80 via-ocean-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-end p-6">
                  <ZoomIn className="w-8 h-8 text-white mb-3" />
                  <span className="font-display text-lg text-white text-center italic">
                    {img.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-ocean-deep/95 backdrop-blur-lg flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-primary-foreground hover:bg-white/20 transition-colors duration-300">
              <X size={24} />
            </button>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedItem.image} 
                alt={selectedItem.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                loading="eager"
                decoding="async"
              />
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.3 }}
                className="text-center mt-6 font-display text-2xl text-primary-foreground italic"
              >
                {selectedItem.title}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Gallery;
