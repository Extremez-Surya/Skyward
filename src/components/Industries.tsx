import React from 'react';
import { motion } from 'framer-motion';

const industries = [
  'Quick Commerce',
  'Warehousing',
  'Logistics',
  'E-commerce',
  'Retail',
  'Corporate Offices',
  'Educational Institutions',
  'Food Services',
  'SMEs'
];

export default function Industries() {
  return (
    <section className="py-24 bg-surface border-y border-surface-hover overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/3 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Industries We Serve
            </h2>
            <p className="text-lg text-text-muted mb-8">
              Empowering diverse sectors with reliable, trained, and verified manpower to meet dynamic business demands.
            </p>
            <a 
              href="/industries" 
              className="inline-flex items-center text-primary font-semibold hover:text-primary-hover transition-colors"
            >
              View all industries →
            </a>
          </div>
          
          <div className="lg:w-2/3 flex flex-wrap justify-center lg:justify-end gap-3">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="px-6 py-3 rounded-full bg-background border border-surface-hover text-text-main text-sm font-medium hover:border-accent hover:text-accent transition-colors cursor-pointer"
              >
                {industry}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}