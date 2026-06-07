import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background" />
        {/* Animated grid or radial gradient could go here */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-surface-hover mb-8"
        >
          <span className="flex w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm font-medium text-text-muted">Enterprise-Grade Workforce Platform</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6"
        >
          Reliable Workforce Solutions <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            for Modern Businesses
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-text-muted mb-10 leading-relaxed"
        >
          Manpower Supply, Staffing Solutions, HR Support Services, and Workforce Management. Deploy, manage, and scale your workforce efficiently.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="/contact" 
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-primary hover:bg-primary-hover text-white text-base font-semibold transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2"
          >
            Request Workforce
            <ArrowRight size={20} />
          </a>
          <a 
            href="/book-consultation" 
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-surface border border-surface-hover hover:border-text-muted text-text-main text-base font-semibold transition-all flex items-center justify-center gap-2"
          >
            <Calendar size={20} className="text-text-muted" />
            Book Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}