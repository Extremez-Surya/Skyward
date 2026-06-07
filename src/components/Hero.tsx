import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from './ui/Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border mb-8"
        >
          <span className="flex w-2 h-2 rounded-full bg-secondary-500 animate-pulse" />
          <span className="text-sm font-medium text-text-muted">Enterprise-Grade Workforce Platform</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-text-primary mb-6"
        >
          Build Your Workforce Faster <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">
            With Reliable Staffing Solutions
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-text-secondary mb-10 leading-relaxed"
        >
          From warehouse staff and delivery executives to retail and field teams, Skyward HR provides trained manpower and workforce management services across industries.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button 
            size="lg"
            onClick={() => window.location.href = '/contact'}
            rightIcon={ArrowRight}
            className="w-full sm:w-auto"
          >
            Request Workforce
          </Button>
          <Button 
            variant="secondary"
            size="lg"
            onClick={() => window.location.href = '/contact'}
            leftIcon={Calendar}
            className="w-full sm:w-auto"
          >
            Talk To Our Team
          </Button>
        </motion.div>
      </div>
    </section>
  );
}