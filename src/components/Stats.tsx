import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Active Workforce', value: '15,000+', suffix: '' },
  { label: 'Enterprise Partners', value: '500', suffix: '+' },
  { label: 'Annual Deployments', value: '50', suffix: 'k+' },
  { label: 'Pan-India Cities', value: '35', suffix: '+' },
];

export default function Stats() {
  return (
    <section className="py-24 bg-white border-y border-border overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left"
            >
              <div className="text-5xl md:text-6xl font-bold text-text-primary mb-4 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-text-muted uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}