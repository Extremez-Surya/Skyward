import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Active Workers', value: '10,000+', suffix: '' },
  { label: 'Partner Companies', value: '500', suffix: '+' },
  { label: 'Deployments Completed', value: '50', suffix: 'k+' },
  { label: 'Cities Served', value: '35', suffix: '+' },
];

export default function Stats() {
  return (
    <section className="py-20 bg-surface border-y border-surface-hover">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-medium text-text-muted uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}