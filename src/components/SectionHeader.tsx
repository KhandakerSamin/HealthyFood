import { motion } from 'framer-motion';

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  light?: boolean;
  centered?: boolean;
}

const SectionHeader = ({ subtitle, title, description, light = false, centered = true }: SectionHeaderProps) => {
  return (
    <div className={`mb-14 lg:mb-20 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-3 font-display-alt text-sm uppercase tracking-[0.25em] mb-4 text-gold"
        >
          <span>✦</span>
          {subtitle}
          <span>✦</span>
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`font-display text-4xl md:text-5xl lg:text-6xl leading-tight italic ${
          light ? 'text-primary-foreground' : 'text-ocean-deep'
        }`}
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className={`divider-ornate max-w-[180px] mt-4 ${centered ? 'mx-auto' : ''}`}
      >
        <span className="px-3 text-gold">❧</span>
      </motion.div>
      {description && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`font-body text-lg max-w-2xl mt-6 leading-relaxed ${centered ? 'mx-auto' : ''} ${
            light ? 'text-primary-foreground/70' : 'text-muted-foreground'
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
