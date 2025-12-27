import { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { Calendar, Clock, Users, Send } from 'lucide-react';
import galleryDining from '@/assets/gallery-dining.jpg';

const Reservation = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', date: '', time: '', guests: '2', notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: t('reservation.success'), description: 'We will contact you shortly to confirm.' });
    setFormData({ name: '', email: '', phone: '', date: '', time: '', guests: '2', notes: '' });
  };

  const inputClass = "w-full px-5 py-4 bg-white border border-border rounded-lg focus:border-ocean-medium focus:ring-2 focus:ring-ocean-medium/20 outline-none transition-all duration-300 font-body text-foreground placeholder:text-muted-foreground/60";

  return (
    <main>
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={galleryDining} alt="Restaurant" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-ocean-deep/85" />
          <div className="absolute inset-0 bg-bengali-pattern" />
          <div className="absolute inset-0 bg-texture opacity-15" />
        </div>
        <div className="elegant-container relative z-10">
          <SectionHeader subtitle={t('reservation.subtitle')} title={t('reservation.title')} light />
        </div>
      </section>

      <section className="section-padding bg-gradient-warm">
        <div className="elegant-container max-w-2xl">
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="glass-card p-8 md:p-10 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <input type="text" placeholder={t('reservation.name')} required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className={inputClass} />
              <input type="email" placeholder={t('reservation.email')} required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className={inputClass} />
              <input type="tel" placeholder={t('reservation.phone')} required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className={inputClass} />
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                <input type="date" required value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} className={`${inputClass} pl-12`} />
              </div>
              <div className="relative">
                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                <select value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})} required className={`${inputClass} pl-12`}>
                  <option value="">{t('reservation.time')}</option>
                  {['12:00', '13:00', '14:00', '18:00', '19:00', '20:00', '21:00'].map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div className="relative">
                <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                <select value={formData.guests} onChange={e => setFormData({...formData, guests: e.target.value})} className={`${inputClass} pl-12`}>
                  {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                </select>
              </div>
            </div>
            <textarea placeholder={t('reservation.notes')} rows={4} value={formData.notes} onChange={e => setFormData({...formData, notes: e.target.value})} className={inputClass} />
            <button type="submit" className="btn-gold w-full">
              <Send className="w-4 h-4" />
              {t('reservation.submit')}
            </button>
          </motion.form>
        </div>
      </section>
    </main>
  );
};

export default Reservation;
