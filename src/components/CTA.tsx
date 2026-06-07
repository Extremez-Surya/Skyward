import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';

export default function CTA() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom">
        <div className="relative z-10 p-12 lg:p-20 bg-card border border-border rounded-[40px] overflow-hidden text-center lg:text-left shadow-premium">
          {/* Background Decorative */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-600/5 to-transparent pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary-600/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-20">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-8 tracking-tight leading-tight">
                Ready to scale your <br />
                <span className="text-primary-600">workforce?</span>
              </h2>
              <p className="text-xl text-text-secondary mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Join 500+ enterprise companies that trust Skyward HR for their mission-critical workforce operations.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-12">
                {['Trained Personnel', 'AI Monitoring', '100% Compliant'].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 text-text-primary font-bold text-sm">
                    <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center text-success">
                      <CheckCircle2 size={14} />
                    </div>
                    {benefit}
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Button 
                  variant="primary"
                  size="lg"
                  onClick={() => window.location.href = '/contact'}
                  rightIcon={ArrowRight}
                  className="rounded-full px-12 shadow-lg shadow-primary-600/20"
                >
                  Request Workforce
                </Button>
                <Button 
                  variant="secondary"
                  size="lg"
                  onClick={() => window.location.href = '/contact'}
                  className="rounded-full"
                >
                  Talk to Our Team
                </Button>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Fulfillment', value: '98%', desc: 'Avg. rate across India' },
                  { label: 'Onboarding', value: '24h', desc: 'Rapid staff deployment' },
                  { label: 'Retention', value: '85%', desc: 'Industry-leading stability' },
                  { label: 'Accuracy', value: '100%', desc: 'Payroll & Compliance' }
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="p-6 bg-surface border border-border rounded-[32px] transition-shadow hover:shadow-premium cursor-default"
                  >
                    <div className="text-[10px] font-bold text-primary-600 uppercase tracking-[0.2em] mb-2">{stat.label}</div>
                    <div className="text-3xl font-bold text-text-primary mb-1 tracking-tight">{stat.value}</div>
                    <div className="text-[10px] text-text-secondary font-semibold">{stat.desc}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}