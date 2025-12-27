import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Flame, Images, CalendarCheck } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/menu', label: 'Menu', icon: Flame },
  { path: '/catering', label: 'Catering', icon: CalendarCheck },
  { path: '/gallery', label: 'Gallery', icon: Images },
];

const BottomNav = () => {
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5, type: 'spring', damping: 25 }}
      className="fixed bottom-3 inset-x-0 mx-auto w-fit z-40 lg:hidden"
    >
      <div className="flex items-center justify-center gap-0.5 px-1.5 py-1.5 bg-ocean-deep/90 backdrop-blur-md rounded-lg shadow-lg border border-gold/20">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-0.5 px-4 py-1.5 rounded-md font-body text-[10px] uppercase tracking-wide transition-all duration-300 ${
                isActive
                  ? 'bg-gold text-ocean-deep'
                  : 'text-primary-foreground/80 hover:bg-white/10'
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default BottomNav;
