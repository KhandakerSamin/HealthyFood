import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@/assets/HF_Logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/about', label: 'About' },
    { path: '/catering', label: 'Catering' },
  ];

  // Homepage: transparent -> solid on scroll
  // Other pages: always solid
  const getNavbarStyle = () => {
    if (!isHomePage) {
      return 'bg-ocean-deep/95 backdrop-blur-lg py-4 shadow-warm-lg';
    }
    return isScrolled
      ? 'bg-ocean-deep/95 backdrop-blur-lg py-4 shadow-warm-lg'
      : 'bg-gradient-to-b from-ocean-deep/50 to-transparent py-4';
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0  z-50 transition-all duration-500 ${getNavbarStyle()}`}
    >
      <nav className="elegant-container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group flex items-center gap-3">
            <img src={logo} alt="Healthy Food" className="h-20 w-20" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-body text-sm uppercase tracking-[0.12em] transition-colors duration-300 py-2 ${
                  location.pathname === link.path
                    ? 'text-gold'
                    : 'text-primary-foreground/75 hover:text-primary-foreground'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gold rounded-full"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-primary-foreground p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-ocean-deep/98 backdrop-blur-lg border-t border-white/10"
          >
            <div className="elegant-container py-6 space-y-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-3.5 px-4 rounded-lg font-body text-base tracking-wide transition-colors ${
                      location.pathname === link.path
                        ? 'text-gold bg-white/5'
                        : 'text-primary-foreground/80 hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
