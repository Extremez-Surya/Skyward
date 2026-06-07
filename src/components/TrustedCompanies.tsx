import React from 'react';
import { motion } from 'framer-motion';

const companies = [
  'Reliance', 'Amazon', 'Flipkart', 'BigBasket', 'Zomato', 'Swiggy', 'DHL', 'BlueDart'
];

export default function TrustedCompanies() {
  return (
    <section className="py-12 bg-background border-y border-border overflow-hidden">
      <div className="container-custom">
        <p className="text-center text-sm font-semibold text-text-secondary mb-10 uppercase tracking-widest">
          Trusted by 500+ Enterprise Operations
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-50 dark:opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {companies.map((company) => (
            <motion.div
              key={company}
              whileHover={{ scale: 1.05 }}
              className="text-2xl md:text-3xl font-bold text-text-primary transition-all duration-300 cursor-default"
            >
              {company}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}