import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, CheckCircle2, TrendingUp, ShieldCheck } from 'lucide-react';
import { Button } from './ui/Button';

const DashboardPreview = () => {
  return (
    <div className="relative w-full aspect-[4/3] bg-card rounded-2xl shadow-2xl border border-border p-6 overflow-hidden group">
      {/* Sidebar placeholder */}
      <div className="absolute left-0 top-0 bottom-0 w-16 border-r border-border bg-surface/50 backdrop-blur-sm flex flex-col items-center py-6 gap-6">
        <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center text-white shadow-lg shadow-primary-600/20">
          <ShieldCheck size={20} />
        </div>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="w-8 h-8 rounded-lg bg-border/60 hover:bg-primary-600/20 transition-colors cursor-pointer flex items-center justify-center text-text-muted hover:text-primary-600">
            <div className="w-4 h-4 rounded-sm border-2 border-current opacity-50" />
          </div>
        ))}
      </div>
      
      {/* Content placeholder */}
      <div className="ml-20 h-full">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-600/10 flex items-center justify-center text-primary-600">
              <Users size={20} />
            </div>
            <div>
              <div className="h-2 w-16 bg-primary-600/20 rounded mb-1" />
              <div className="text-sm font-bold text-text-primary">Operations Hub</div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="px-3 py-1 bg-success/10 text-success rounded-full text-[10px] font-bold border border-success/20 flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
              Active
            </div>
            <div className="px-3 py-1 bg-primary-600/10 text-primary-600 rounded-full text-[10px] font-bold border border-primary-600/20">
              Region: North
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Deployed', value: '1,240', color: 'text-primary-600' },
            { label: 'Attendance', value: '98.4%', color: 'text-success' },
            { label: 'Compliance', value: '100%', color: 'text-accent' }
          ].map((stat, i) => (
            <div key={i} className="p-3 rounded-xl border border-border bg-background/50 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-[9px] font-bold text-text-muted uppercase tracking-wider mb-1">{stat.label}</div>
              <div className={`text-xl font-bold ${stat.color}`}>{stat.value}</div>
            </div>
          ))}
        </div>
        
        <div className="p-4 rounded-xl border border-border bg-background/50 shadow-sm h-44 relative overflow-hidden group/chart">
          <div className="flex justify-between items-center mb-4">
            <div className="text-xs font-bold text-text-primary flex items-center gap-2">
              Staffing Utilization
              <span className="text-[10px] font-medium text-text-muted">Last 12 Days</span>
            </div>
            <div className="flex gap-2">
              <div className="h-4 w-12 bg-primary-600/10 rounded-full border border-primary-600/20" />
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-28 flex items-end px-4 gap-1.5">
            {[40, 60, 30, 80, 50, 70, 90, 40, 60, 50, 80, 100].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 1, delay: 0.5 + i * 0.05 }}
                className="flex-1 bg-gradient-to-t from-primary-600/40 to-primary-600/5 rounded-t-sm group-hover/chart:from-primary-600/60 transition-colors"
              />
            ))}
          </div>
        </div>

        {/* New Mini List Option */}
        <div className="mt-6 flex gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex-1 flex items-center gap-2 p-2 rounded-lg bg-surface/30 border border-border">
              <div className="w-6 h-6 rounded-full bg-border" />
              <div className="space-y-1">
                <div className="h-1.5 w-8 bg-text-primary/20 rounded" />
                <div className="h-1 w-6 bg-text-muted/20 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Floating Status Card */}
      <motion.div 
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-20 -right-4 p-4 bg-card rounded-xl shadow-2xl border border-border flex items-center gap-4 z-20"
      >
        <div className="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center text-success shadow-inner">
          <CheckCircle2 size={24} />
        </div>
        <div>
          <div className="text-sm font-bold text-text-primary">Compliance Verified</div>
          <div className="text-[10px] font-medium text-text-secondary">All staff documents updated</div>
        </div>
      </motion.div>
    </div>
  );
};

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item: any = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative pt-24 pb-16 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.1] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-accent/10 blur-[120px] rounded-full" />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="text-center lg:text-left"
          >
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-600/10 border border-primary-600/20 mb-6 lg:mb-8"
            >
              <TrendingUp size={14} className="text-primary-600" />
              <span className="text-xs lg:text-sm font-semibold text-primary-600 uppercase tracking-wider">Enterprise Workforce 2026</span>
            </motion.div>

            <motion.h1 
              variants={item}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary mb-6 text-balance leading-[1.1]"
            >
              Professional workforce solutions for <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">serious businesses.</span>
            </motion.h1>

            <motion.p 
              variants={item}
              className="mx-auto lg:mx-0 max-w-xl text-base md:text-lg lg:text-xl text-text-secondary mb-10 leading-relaxed"
            >
              Scale your operations with Skyward HR. We provide trained manpower, AI-driven attendance tracking, and seamless compliance management for enterprise clients across India.
            </motion.p>

            <motion.div 
              variants={item}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <Button 
                size="lg"
                onClick={() => window.location.href = '/contact'}
                rightIcon={ArrowRight}
                className="w-full sm:w-auto shadow-lg shadow-primary-600/20 rounded-2xl"
              >
                Request Workforce
              </Button>
              <Button 
                variant="secondary"
                size="lg"
                onClick={() => window.location.href = '/contact'}
                className="w-full sm:w-auto border-border text-text-primary hover:bg-surface rounded-2xl"
              >
                View Solutions
              </Button>
            </motion.div>

            <motion.div 
              variants={item}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 lg:gap-8 pt-8 border-t border-border"
            >
              <div className="text-center lg:text-left">
                <div className="text-xl lg:text-2xl font-bold text-text-primary">500+</div>
                <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Clients</div>
              </div>
              <div className="w-px h-10 bg-border hidden sm:block" />
              <div className="text-center lg:text-left">
                <div className="text-xl lg:text-2xl font-bold text-text-primary">15k+</div>
                <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Staff</div>
              </div>
              <div className="w-px h-10 bg-border hidden sm:block" />
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                    <Users size={16} />
                  </div>
                  <div className="text-[10px] font-bold text-text-muted uppercase tracking-tighter">Trusted by 15,000+ staff</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-primary-600/10 blur-[120px] rounded-full" />
            <DashboardPreview />
            
            {/* Decorative Elements */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-card rounded-full flex items-center justify-center border border-border shadow-xl z-30"
            >
              <div className="w-16 h-16 bg-primary-600/10 rounded-full flex items-center justify-center text-primary-600">
                <Users size={32} />
              </div>
            </motion.div>

            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2, type: "spring" }}
              className="absolute -bottom-8 -left-8 p-4 bg-card rounded-2xl shadow-2xl border border-border z-30 flex items-center gap-3"
            >
              <div className="p-2 bg-warning/10 rounded-lg text-warning">
                <TrendingUp size={20} />
              </div>
              <div>
                <div className="text-xs font-bold text-text-muted uppercase">Growth</div>
                <div className="text-lg font-bold text-text-primary">+12.5%</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}