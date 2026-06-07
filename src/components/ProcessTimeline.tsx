import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Users, ShieldCheck, Rocket, HeadphonesIcon } from 'lucide-react';

const steps = [
  { 
    number: '01', 
    title: 'Consultation', 
    desc: 'Deep-dive into your operational scale and workforce requirements.',
    icon: MessageSquare
  },
  { 
    number: '02', 
    title: 'Precision Sourcing', 
    desc: 'Matching requirements with our pre-vetted, high-performance talent pool.',
    icon: Users
  },
  { 
    number: '03', 
    title: 'Rigorous Verification', 
    desc: '100% document verification and industry-specific skill assessment.',
    icon: ShieldCheck
  },
  { 
    number: '04', 
    title: 'Rapid Deployment', 
    desc: 'Seamless onboarding and mobilization at your designated locations.',
    icon: Rocket
  },
  { 
    number: '05', 
    title: 'Continuous Optimization', 
    desc: 'AI-driven monitoring, attendance management, and proactive support.',
    icon: HeadphonesIcon
  },
];

export default function ProcessTimeline() {
  return (
    <section className="section-padding bg-background overflow-hidden relative">
      {/* Decorative background element for blending */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-radial-gradient from-primary-600/10 via-transparent to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-text-primary mb-6 tracking-tight">Our deployment <span className="text-primary-600">engine.</span></h2>
          <p className="text-xl text-text-secondary leading-relaxed font-medium">
            A battle-tested 5-step process designed for speed, compliance, and enterprise reliability.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-border/50 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-[90px] h-[90px] rounded-[32px] bg-card border border-border flex items-center justify-center mb-8 shadow-premium group-hover:shadow-glow group-hover:border-primary-600/30 transition-all duration-500 relative">
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary-600 text-white text-xs font-bold flex items-center justify-center border-4 border-card">
                    {step.number}
                  </div>
                  <step.icon size={32} className="text-primary-600 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-4 px-4 group-hover:text-primary-600 transition-colors">{step.title}</h3>
                <p className="text-text-secondary leading-relaxed font-medium px-2">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}