import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'bn';

interface Translations {
  [key: string]: {
    en: string;
    bn: string;
  };
}

export const translations: Translations = {
  // Navigation
  'nav.home': { en: 'Home', bn: 'হোম' },
  'nav.menu': { en: 'Menu', bn: 'মেনু' },
  'nav.about': { en: 'About', bn: 'আমাদের সম্পর্কে' },
  'nav.gallery': { en: 'Gallery', bn: 'গ্যালারি' },
  'nav.reservation': { en: 'Reservation', bn: 'রিজার্ভেশন' },
  
  // Hero
  'hero.subtitle': { en: 'Authentic Bangladeshi Cuisine', bn: 'অথেনটিক বাংলাদেশি রান্না' },
  'hero.title': { en: 'Healthy Food', bn: 'হেলদি ফুড' },
  'hero.description': { en: 'Crafted with Honesty, Inspired by Tradition', bn: 'সততার সাথে তৈরি, ঐতিহ্যে অনুপ্রাণিত' },
  'hero.cta': { en: 'Reserve a Table', bn: 'টেবিল রিজার্ভ করুন' },
  'hero.explore': { en: 'Explore Menu', bn: 'মেনু দেখুন' },

  // About
  'about.title': { en: 'Our Story', bn: 'আমাদের গল্প' },
  'about.subtitle': { en: 'A Return to Sincerity', bn: 'আন্তরিকতায় ফিরে আসা' },
  'about.philosophy': { en: 'Our Philosophy', bn: 'আমাদের দর্শন' },
  'about.chefs': { en: 'Our Chefs', bn: 'আমাদের শেফ' },
  'about.ingredients': { en: 'Fresh Ingredients', bn: 'তাজা উপাদান' },

  // Menu
  'menu.title': { en: 'Our Menu', bn: 'আমাদের মেনু' },
  'menu.subtitle': { en: 'A Culinary Journey Through Bangladesh', bn: 'বাংলাদেশের রান্নার যাত্রা' },
  'menu.appetizers': { en: 'Appetizers', bn: 'অ্যাপেটাইজার' },
  'menu.mains': { en: 'Main Courses', bn: 'মূল কোর্স' },
  'menu.fish': { en: 'Fish Specialties', bn: 'মাছের বিশেষত্ব' },
  'menu.desserts': { en: 'Desserts', bn: 'ডেজার্ট' },
  'menu.beverages': { en: 'Beverages', bn: 'পানীয়' },

  // Gallery
  'gallery.title': { en: 'Gallery', bn: 'গ্যালারি' },
  'gallery.subtitle': { en: 'Moments & Memories', bn: 'মুহূর্ত ও স্মৃতি' },

  // Reservation
  'reservation.title': { en: 'Make a Reservation', bn: 'রিজার্ভেশন করুন' },
  'reservation.subtitle': { en: 'Book Your Table', bn: 'আপনার টেবিল বুক করুন' },
  'reservation.name': { en: 'Full Name', bn: 'পুরো নাম' },
  'reservation.email': { en: 'Email Address', bn: 'ইমেইল' },
  'reservation.phone': { en: 'Phone Number', bn: 'ফোন নম্বর' },
  'reservation.date': { en: 'Date', bn: 'তারিখ' },
  'reservation.time': { en: 'Time', bn: 'সময়' },
  'reservation.guests': { en: 'Number of Guests', bn: 'অতিথির সংখ্যা' },
  'reservation.notes': { en: 'Special Requests', bn: 'বিশেষ অনুরোধ' },
  'reservation.submit': { en: 'Confirm Reservation', bn: 'রিজার্ভেশন নিশ্চিত করুন' },
  'reservation.success': { en: 'Reservation confirmed! We look forward to serving you.', bn: 'রিজার্ভেশন নিশ্চিত! আপনাকে সেবা দিতে পেরে আমরা আনন্দিত।' },

  // Footer
  'footer.hours': { en: 'Opening Hours', bn: 'খোলার সময়' },
  'footer.location': { en: 'Location', bn: 'ঠিকানা' },
  'footer.contact': { en: 'Contact', bn: 'যোগাযোগ' },
  'footer.follow': { en: 'Follow Us', bn: 'আমাদের অনুসরণ করুন' },
  'footer.rights': { en: 'All Rights Reserved', bn: 'সর্বস্বত্ব সংরক্ষিত' },

  // Common
  'common.readMore': { en: 'Read More', bn: 'আরও পড়ুন' },
  'common.viewAll': { en: 'View All', bn: 'সব দেখুন' },
  'common.close': { en: 'Close', bn: 'বন্ধ করুন' },

  // CTA
  'cta.subtitle': { en: 'Experience Authentic Tradition', bn: 'অথেনটিক ঐতিহ্য অনুভব করুন' },
  'cta.title': { en: 'Reserve Your Table Today', bn: 'আজই আপনার টেবিল রিজার্ভ করুন' },
  'cta.button': { en: 'Book Now', bn: 'এখনই বুক করুন' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[language] || translation.en || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};