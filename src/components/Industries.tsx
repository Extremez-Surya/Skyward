import React from 'react';
import { motion } from 'framer-motion';

const industries = [
  { name: 'Quick Commerce', slug: 'quick-commerce' },
  { name: 'Warehousing', slug: 'warehousing' },
  { name: 'Logistics', slug: 'logistics' },
  { name: 'E-commerce', slug: 'e-commerce' },
  { name: 'Retail', slug: 'retail' },
  { name: 'Corporate Offices', slug: 'corporate' },
  { name: 'Educational Institutions', slug: 'education' },
  { name: 'Food Services', slug: 'food-services' },
  { name: 'SMEs', slug: 'sme' }
];

export default function Industries() {
  return (
    <section className="py-24 bg-surface border-y border-border overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/3 text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6 tracking-tight">
              Industries We Serve
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Empowering diverse sectors with reliable, trained, and verified manpower to meet dynamic business demands.
            </p>
            <a 
              href="/industries" 
              className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              View all industries →
            </a>
          </div>
          
          <div className="lg:w-2/3 flex flex-wrap justify-center lg:justify-end gap-3">
            {industries.map((industry, index) => (
              <motion.a
                href={`/industries/${industry.slug}`}
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="px-6 py-3 rounded-full bg-background border border-border text-text-primary text-sm font-medium hover:border-primary-600 hover:text-primary-600 transition-colors shadow-sm"
              >
                {industry.name}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}