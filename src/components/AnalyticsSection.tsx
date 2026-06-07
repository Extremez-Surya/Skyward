import React, { useEffect, useState } from 'react';
import { motion, useTransform, useMotionValue, animate } from 'framer-motion';

const Counter = ({ value, duration = 2 }: { value: string, duration?: number }) => {
  const numericValue = parseInt(value.replace(/[,+%.]/g, '')) || 0;
  const suffix = value.replace(/[0-9,]/g, '');
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    const val = Math.round(latest);
    if (value.includes(',')) {
      return val.toLocaleString() + suffix;
    }
    return val + suffix;
  });

  const [displayValue, setDisplayValue] = useState('0' + suffix);

  useEffect(() => {
    const controls = rounded.onChange(v => setDisplayValue(v));
    return () => controls();
  }, [rounded]);

  return (
    <motion.span
      onViewportEnter={() => {
        (animate as any)(count, numericValue, { duration, ease: "easeOut" });
      }}
      viewport={{ once: true }}
    >
      {displayValue}
    </motion.span>
  );
};

const stats = [
  { label: 'Active Personnel', value: '15,000+', description: 'Trained and deployed across India' },
  { label: 'Enterprise Clients', value: '500+', description: 'Including Fortune 500 companies' },
  { label: 'Cities Covered', value: '35+', description: 'Pan-India presence for rapid scaling' },
  { label: 'Uptime Reliability', value: '99%', description: 'Guaranteed workforce availability' },
];

export default function AnalyticsSection() {
  return (
    <section className="section-padding bg-background border-y border-border overflow-hidden relative">
      {/* Abstract Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-text-primary mb-8"
          >
            Workforce operations, <br /><span className="text-primary-600">visualized in real-time.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-text-secondary leading-relaxed"
          >
            Data is the heartbeat of our operations. We track every deployment, attendance record, and compliance metric to ensure your business never misses a beat.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col p-6 rounded-2xl bg-surface border border-border shadow-sm hover:shadow-premium transition-all"
            >
              <div className="text-5xl lg:text-6xl font-bold text-primary-600 mb-4 tracking-tighter">
                <Counter value={stat.value} />
              </div>
              <div className="text-xl font-bold text-text-primary mb-2">{stat.label}</div>
              <p className="text-text-secondary leading-relaxed text-sm">{stat.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Animated Bar visualization */}
        <div className="mt-32 relative">
          <div className="flex items-end gap-1 sm:gap-2 h-64">
            {Array.from({ length: 40 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${20 + Math.random() * 80}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.02, ease: "easeOut" }}
                className={`flex-1 rounded-t ${i % 3 === 0 ? 'bg-primary-500' : i % 3 === 1 ? 'bg-primary-400' : 'bg-primary-600'} opacity-40 hover:opacity-100 transition-opacity`}
              />
            ))}
          </div>
          
          {/* Labels for visualization */}
          <div className="absolute top-0 right-0 p-6 bg-card/80 backdrop-blur-md rounded-2xl border border-border hidden md:block shadow-xl">
            <div className="flex flex-col gap-4">
              {[
                { label: 'Attendance', value: '98.4%', color: 'bg-primary-500' },
                { label: 'Compliance', value: '100%', color: 'bg-primary-400' },
                { label: 'Efficiency', value: '94.2%', color: 'bg-primary-600' }
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className={`w-3 h-3 rounded-full ${item.color}`} />
                  <span className="text-xs font-bold text-text-secondary uppercase tracking-widest">{item.label}</span>
                  <span className="text-xs font-bold text-text-primary ml-auto">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 flex justify-between text-[10px] font-bold text-text-muted uppercase tracking-[0.2em] border-t border-border pt-4">
            <span>Operational Timeline</span>
            <span>Last 24 Hours</span>
          </div>
        </div>
      </div>
    </section>
  );
}