import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const industries = [
  { name: 'Quick Commerce', slug: 'quick-commerce' },
  { name: 'Warehousing', slug: 'warehousing' },
  { name: 'Logistics', slug: 'logistics' },
  { name: 'E-commerce', slug: 'e-commerce' },
  { name: 'Retail Operations', slug: 'retail' },
  { name: 'Corporate Support', slug: 'corporate' },
  { name: 'Educational Hubs', slug: 'education' },
  { name: 'Food Services', slug: 'food-services' },
  { name: 'SME Growth', slug: 'sme' }
];

export default function Industries() {
  return (
    <section className="section-padding bg-surface border-y border-border overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-text-primary mb-8 tracking-tight">Industries we <span className="text-primary-600">empower.</span></h2>
            <p className="text-xl text-text-secondary mb-10 leading-relaxed font-medium">
              We provide tailored workforce ecosystems for mission-critical operations across India's most demanding sectors.
            </p>
            <a 
              href="/industries" 
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white border border-border text-primary-600 font-bold hover:bg-primary-50 transition-all shadow-premium"
            >
              View all industries <ArrowRight size={20} />
            </a>
          </div>
          
          <div className="lg:w-1/2 flex flex-wrap justify-center lg:justify-end gap-4">
            {industries.map((industry, index) => (
              <motion.a
                href={`/industries/${industry.slug}`}
                key={industry.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="px-8 py-4 rounded-2xl bg-card border border-border text-text-primary text-base font-bold hover:border-primary-600 hover:text-primary-600 hover:shadow-lifted transition-all shadow-premium"
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