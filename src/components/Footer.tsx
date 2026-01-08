import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/HF_Logo.png';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-ocean-deep text-primary-foreground relative overflow-hidden">
      {/* Bengali pattern */}
      <div className="absolute inset-0 bg-bengali-pattern" />
      <div className="absolute inset-0 bg-texture opacity-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-ocean-dark/50 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-gold/5 blur-3xl" />

      {/* Main Footer */}
      <div className="elegant-container py-20 lg:py-24 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
              <img 
                src={logo} 
                alt="Healthy Food Logo" 
                className="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-105"
              />

            </Link>
            <p className="font-body text-sm text-primary-foreground/60 leading-relaxed mb-8">
              Crafted with Honesty, Inspired by Tradition. Authentic Bangladeshi cuisine made with fresh, 
              clean ingredients in the heart of Eskaton.
            </p>
            <div className="flex gap-3 mb-6">
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-ocean-dark/80 flex items-center justify-center 
                         hover:bg-gold hover:text-ocean-deep transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-ocean-dark/80 flex items-center justify-center 
                         hover:bg-gold hover:text-ocean-deep transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
            
            {/* Delivery Partners */}
            <div>
              <p className="font-body text-xs text-primary-foreground/50 mb-3 uppercase tracking-wider">Order via</p>
              <div className="flex gap-3">
                <a 
                  href="https://www.foodpanda.com.bd" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#d70f64] text-white text-xs font-semibold hover:opacity-90 transition-opacity"
                >
                  Foodpanda
                </a>
                <a 
                  href="https://pathao.com/food" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-[#0d8d00] text-white text-xs font-semibold hover:opacity-90 transition-opacity"
                >
                  Pathao Food
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-display text-lg mb-6 flex items-center gap-2 italic">
              <span className="w-8 h-0.5 bg-gold rounded-full" />
              {t('footer.hours')}
            </h3>
            <ul className="space-y-4 font-body text-sm">
              <li className="flex justify-between text-primary-foreground/70">
                <span>Saturday - Thursday</span>
                <span className="text-primary-foreground">12:00 PM - 11:00 PM</span>
              </li>
              <li className="flex justify-between text-primary-foreground/70">
                <span>Friday</span>
                <span className="text-primary-foreground">2:00 PM - 11:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-display text-lg mb-6 flex items-center gap-2 italic">
              <span className="w-8 h-0.5 bg-gold rounded-full" />
              {t('footer.location')}
            </h3>
            <div className="flex gap-3 text-primary-foreground/70 font-body text-sm">
              <MapPin size={18} className="shrink-0 mt-0.5 text-gold" />
              <span>Eskaton, Moghbazar<br />Dhaka 1217, Bangladesh</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg mb-6 flex items-center gap-2 italic">
              <span className="w-8 h-0.5 bg-gold rounded-full" />
              {t('footer.contact')}
            </h3>
            <ul className="space-y-4 font-body text-sm">
              <li>
                <a href="tel:+8801309225522" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 group">
                  <Phone size={18} className="text-gold" />
                  <span>01309-225522</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
              <li>
                <a href="mailto:info@healthyfooddhaka.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 group">
                  <Mail size={18} className="text-gold" />
                  <span>info@healthyfooddhaka.com</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative">
        <div className="elegant-container pt-6 pb-2 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-primary-foreground/40 tracking-wide">
            © {new Date().getFullYear()} Healthy Food. {t('footer.rights')}
          </p>
          <div className="flex gap-8">
            {['menu', 'about',].map((item) => (
              <Link 
                key={item}
                to={`/${item === 'menu' ? 'menu' : item}`} 
                className="font-body text-xs text-primary-foreground/40 hover:text-primary-foreground transition-colors duration-300 tracking-wide capitalize"
              >
                {t(`nav.${item}`)}
              </Link>
            ))}
          </div>
        </div>
        <div className="elegant-container pb-2 text-center">
          <p className="font-body text-xs text-primary-foreground/40 tracking-wide">
            Design And Developed By Orituree.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
