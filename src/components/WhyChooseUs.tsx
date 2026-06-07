import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Repeat, HeadphonesIcon, FileText } from 'lucide-react';

const features = [
  { title: 'Verified Workforce', description: 'Stringent background checks and document verification for every candidate.', icon: ShieldCheck },
  { title: 'Quick Deployment', description: 'Rapid turnaround time from requirement gathering to actual deployment.', icon: Zap },
  { title: 'Replacement Support', description: 'Hassle-free worker replacements to ensure zero operational downtime.', icon: Repeat },
  { title: 'Professional Coordination', description: 'Dedicated account managers for seamless communication and support.', icon: HeadphonesIcon },
  { title: 'Transparent Billing', description: 'Clear, GST-compliant invoicing with zero hidden charges or surprises.', icon: FileText },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Why Businesses Trust Us
          </h2>
          <p className="text-lg text-text-muted">
            We don't just supply manpower; we partner with you to manage your workforce end-to-end.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 shrink-0 rounded-full bg-surface border border-surface-hover flex items-center justify-center text-accent">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-main mb-2">{feature.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}