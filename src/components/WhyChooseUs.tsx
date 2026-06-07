import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Repeat, HeadphonesIcon, FileText, Calendar, Maximize, Briefcase } from 'lucide-react';

const features = [
  { title: 'Fast Workforce Deployment', description: 'Rapid turnaround time from requirement gathering to actual deployment.', icon: Zap },
  { title: 'Verified Candidates', description: 'Stringent background checks and document verification for every candidate.', icon: ShieldCheck },
  { title: 'Dedicated HR Support', description: 'Dedicated account managers for seamless communication and support.', icon: HeadphonesIcon },
  { title: 'Attendance Tracking', description: 'Real-time tracking and management of daily workforce attendance.', icon: Calendar },
  { title: 'Replacement Support', description: 'Hassle-free worker replacements to ensure zero operational downtime.', icon: Repeat },
  { title: 'Scalable Staffing Solutions', description: 'Easily scale your workforce up or down based on business demands.', icon: Maximize },
  { title: 'Industry-Specific Expertise', description: 'Tailored workforce solutions for logistics, retail, warehousing, and more.', icon: Briefcase },
  { title: 'Transparent Communication', description: 'Clear, GST-compliant invoicing with zero hidden charges or surprises.', icon: FileText },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-background relative">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6 tracking-tight">
            Trusted Workforce Partner For Growing Businesses
          </h2>
          <p className="text-lg text-text-secondary">
            We help businesses solve staffing challenges with rapid deployment, verified candidates, attendance management, replacement support, and workforce operations expertise.
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
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface transition-colors"
              >
                <div className="w-12 h-12 shrink-0 rounded-md bg-primary-600/10 border border-primary-600/20 flex items-center justify-center text-primary-600">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">{feature.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}