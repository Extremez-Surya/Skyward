import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, ShieldCheck, ArrowRight } from 'lucide-react';
import { useAuth, UserButton } from '@clerk/astro/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isSignedIn, isLoaded } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'About', href: '/about-us' },
    { name: 'How it Works', href: '/how-it-works' },
    { name: 'Contact', href: '/contact' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-100 transition-all duration-500 ${
        isScrolled || mobileMenuOpen ? 'bg-background/90 backdrop-blur-xl border-b border-border py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex justify-between items-center relative z-101">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center shadow-premium transform group-hover:scale-110 transition-transform duration-300">
            <ShieldCheck className="text-white" size={24} />
          </div>
          <span className="text-2xl font-bold tracking-tight text-text-primary">Skyward</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-semibold text-text-secondary hover:text-primary-600 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop CTA & Auth */}
        <div className="hidden lg:flex items-center gap-6">
          <ThemeToggle />
          {isLoaded && isSignedIn ? (
            <>
              <a href="/dashboard" className="text-sm font-semibold text-text-primary hover:text-primary-600 transition-colors">
                Dashboard
              </a>
              <UserButton />
            </>
          ) : (
            <>
              <a href="/sign-in" className="text-sm font-semibold text-text-primary hover:text-primary-600 transition-colors">
                Login
              </a>
              <Button 
                variant="primary"
                size="sm"
                onClick={() => window.location.href = '/contact'}
                rightIcon={ChevronRight}
                className="rounded-full px-6"
              >
                Get Started
              </Button>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button 
            className="p-3 text-text-primary hover:bg-surface rounded-xl transition-all active:scale-95 flex items-center justify-center relative w-12 h-12"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            variants={menuVariants as any}
            initial="closed"
            animate="open"
            exit="closed"
            className="lg:hidden fixed inset-0 bg-background z-90 flex flex-col pt-32 pb-10 px-6"
          >
            <div className="flex flex-col gap-6 overflow-y-auto">
              {navLinks.map((link) => (
                <motion.a 
                  variants={itemVariants}
                  key={link.name} 
                  href={link.href}
                  className="text-4xl font-bold text-text-primary hover:text-primary-600 transition-colors flex items-center justify-between group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                  <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary-600" size={28} />
                </motion.a>
              ))}
            </div>

            <motion.div 
              variants={itemVariants}
              className="mt-auto pt-10 border-t border-border flex flex-col gap-4"
            >
              {isLoaded && isSignedIn ? (
                <>
                  <Button 
                    variant="primary"
                    size="lg"
                    className="w-full rounded-2xl"
                    onClick={() => window.location.href = '/dashboard'}
                  >
                    Go to Dashboard
                  </Button>
                  <div className="flex justify-center p-4 bg-surface rounded-2xl">
                    <UserButton showName />
                  </div>
                </>
              ) : (
                <>
                  <Button 
                    variant="secondary" 
                    size="lg"
                    className="w-full rounded-2xl"
                    onClick={() => window.location.href = '/sign-in'}
                  >
                    Login to Account
                  </Button>
                  <div className="flex justify-center p-4 bg-surface rounded-2xl">
                    <Button 
                      variant="primary"
                      size="lg"
                      className="w-full rounded-2xl"
                      onClick={() => window.location.href = '/contact'}
                    >
                      Get Started Now
                    </Button>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}