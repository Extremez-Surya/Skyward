import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Cpu, BarChart3, Users2 } from 'lucide-react';
import { Button } from './ui/Button';

const solutions = [
  {
    icon: Users2,
    title: "Vetted & Trained Manpower",
    description: "Every worker undergoes rigorous background checks and industry-specific training before deployment."
  },
  {
    icon: Cpu,
    title: "AI-Powered Monitoring",
    description: "Our proprietary platform tracks attendance, performance, and real-time location using AI and Geo-fencing."
  },
  {
    icon: BarChart3,
    title: "Enterprise Compliance",
    description: "Automated management of ESI, PF, and Statutory Compliance with 100% legal coverage for your business."
  }
];

export default function Solutions() {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-text-primary mb-8 tracking-tight leading-tight">
              Workforce solutions for <br />
              <span className="text-primary-600">serious businesses.</span>
            </h2>
            <p className="text-xl text-text-secondary mb-10 leading-relaxed">
              We don't just supply manpower; we provide a complete workforce management system designed for enterprise-scale operations.
            </p>
            
            <div className="space-y-6 mb-12">
              {solutions.map((item, index) => (
                <motion.div 
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary-600/20">
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-text-primary mb-1">{item.title}</h4>
                    <p className="text-text-secondary">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <Button size="lg" className="rounded-full shadow-xl shadow-primary-600/10">
              Explore Our Platform
            </Button>
          </div>
          
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-border"
            >
              <div className="bg-card p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center text-white shadow-lg shadow-primary-600/20">
                      <Users2 size={24} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-text-primary">Worker Registry</div>
                      <div className="text-[10px] font-medium text-text-secondary uppercase tracking-wider">Active Deployments</div>
                    </div>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-surface border border-border flex items-center justify-center text-text-secondary">
                    <BarChart3 size={16} />
                  </div>
                </div>
                
                <div className="space-y-3">
                  {[
                    { name: 'Rahul Sharma', role: 'Warehouse Assoc.', status: 'On-Site', time: '08:00 AM' },
                    { name: 'Priya Patel', role: 'Data Entry Opt.', status: 'Verified', time: '09:15 AM' },
                    { name: 'Amit Kumar', role: 'Logistics Lead', status: 'In-Transit', time: '07:45 AM' },
                    { name: 'Sneha Gupta', role: 'Quality Analyst', status: 'On-Site', time: '09:00 AM' }
                  ].map((worker, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="p-4 bg-surface rounded-xl border border-border flex justify-between items-center shadow-sm hover:shadow-premium transition-all cursor-default group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary-600/10 flex items-center justify-center text-primary-600 font-bold text-xs group-hover:bg-primary-600 group-hover:text-white transition-colors">
                          {worker.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-text-primary">{worker.name}</div>
                          <div className="text-[10px] text-text-secondary font-medium">{worker.role}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`h-5 px-2 bg-success/10 text-success text-[9px] font-bold rounded-full flex items-center justify-center mb-1 uppercase tracking-tighter border border-success/20`}>{worker.status}</div>
                        <div className="text-[9px] text-text-secondary font-medium uppercase tracking-widest">{worker.time}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Floating Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="absolute -bottom-6 -right-6 p-4 bg-card rounded-2xl shadow-2xl border border-border z-20 hidden sm:flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-secondary-500/10 flex items-center justify-center text-secondary-500">
                <Cpu size={20} />
              </div>
              <div>
                <div className="text-[10px] font-bold text-text-secondary uppercase">Uptime</div>
                <div className="text-sm font-bold text-text-primary">99.98%</div>
              </div>
            </motion.div>
            
            {/* Decorative BG */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary-600/5 blur-[100px] rounded-full" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-secondary-500/5 blur-[100px] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}