import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero.png';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Elegant restaurant interior" 
          className="w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-deep/60 via-ocean-deep/40 to-ocean-deep/70" />
        <div className="absolute inset-0 bg-bengali-pattern opacity-50" />
        <div className="absolute inset-0 bg-texture opacity-10" />
        <div className="absolute inset-0 opacity-30 mix-blend-soft-light bg-[radial-gradient(ellipse_at_top,_hsl(var(--gold)/0.2)_0%,_transparent_60%)]" />
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-20 left-8 lg:left-16 text-gold/30 text-4xl font-display hidden md:block">❧</div>
      <div className="absolute top-20 right-8 lg:right-16 text-gold/30 text-4xl font-display hidden md:block rotate-180">❧</div>
      <div className="absolute bottom-32 left-8 lg:left-16 text-gold/30 text-4xl font-display hidden md:block rotate-180">❧</div>
      <div className="absolute bottom-32 right-8 lg:right-16 text-gold/30 text-4xl font-display hidden md:block">❧</div>

      {/* Subtle decorative lines */}
      <div className="absolute top-1/4 left-12 w-px h-[120px] bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden lg:block" />
      <div className="absolute bottom-1/4 right-12 w-px h-[120px] bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gold/10 border border-gold/30 mb-8"
        >
          <span className="text-gold text-sm">✦</span>
          <span className="font-display-alt text-sm text-white uppercase tracking-[0.25em] text-gold">
            {t('hero.subtitle')}
          </span>
          <span className="text-gold text-sm">✦</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary-foreground mb-6 tracking-tight leading-[1.1] italic"
        >
          {t('hero.title')}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="divider-ornate max-w-[250px] mx-auto mb-8"
        >
          <span className="px-4 text-gold text-xl">❧</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="font-display text-xl md:text-2xl text-primary-foreground/85 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          {t('hero.description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="https://wa.me/8801309225522" target="_blank" rel="noopener noreferrer" className="btn-gold">
            <span>{t('hero.cta')}</span>
          </a>
          <Link
            to="/menu"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-body font-medium uppercase tracking-[0.15em]
                     border-2 border-primary-foreground/30 text-primary-foreground bg-white/5 backdrop-blur-sm
                     hover:bg-white/15 hover:border-primary-foreground/50
                     transition-all duration-300 ease-out rounded-md"
          >
            <span>{t('hero.explore')}</span>
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3 text-primary-foreground/60">
          <span className="font-display text-xs uppercase tracking-[0.25em] italic">Discover</span>
          <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-current"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
