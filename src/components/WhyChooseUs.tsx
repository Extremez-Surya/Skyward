import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Repeat, HeadphonesIcon, FileText, Calendar, Maximize, Briefcase } from 'lucide-react';
import { Card, CardTitle, CardDescription } from './ui/Card';

const features = [
  { title: 'Rapid Mobilization', description: 'Industry-leading turnaround time from requirement to full-scale deployment.', icon: Zap },
  { title: 'Verified Talent', description: 'Stringent background checks and document verification for every personnel.', icon: ShieldCheck },
  { title: 'Dedicated Management', description: 'Enterprise account managers for seamless communication and operational sync.', icon: HeadphonesIcon },
  { title: 'Geo-Fenced Tracking', description: 'Real-time visibility into daily workforce attendance and performance metrics.', icon: Calendar },
  { title: 'Zero Downtime', description: 'Automatic standby replacements to ensure your operations never stop.', icon: Repeat },
  { title: 'Elastic Scaling', description: 'Effortlessly scale your workforce up or down based on seasonal demands.', icon: Maximize },
  { title: 'Sector Expertise', description: 'Tailored solutions for logistics, retail, warehousing, and rapid fulfillment.', icon: Briefcase },
  { title: 'Compliant Billing', description: 'Transparent, GST-compliant invoicing with absolute legal coverage.', icon: FileText },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-surface overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-text-primary mb-6 tracking-tight">The Skyward <span className="text-primary-600">advantage.</span></h2>
          <p className="text-xl text-text-secondary leading-relaxed font-medium">
            We combine high-performance human capital with enterprise-grade technology to deliver a superior staffing experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <Card className="h-full bg-card border-transparent hover:border-primary-100 flex flex-col items-start text-left group">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary-600/10 flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                    <Icon size={24} />
                  </div>
                  <CardTitle className="text-lg mb-3">{feature.title}</CardTitle>
                  <CardDescription className="text-sm">{feature.description}</CardDescription>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}