import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useAuth, UserButton } from '@clerk/astro/react';

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

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'How it Works', href: '/how-it-works' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-surface/50 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight">Skyward HR</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-text-muted hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA & Auth */}
        <div className="hidden md:flex items-center gap-4">
          {isLoaded && !isSignedIn && (
            <>
              <a href="/sign-in" className="text-sm font-medium text-text-main hover:text-primary transition-colors">
                Login
              </a>
              <a 
                href="/contact" 
                className="px-5 py-2.5 rounded-lg bg-primary hover:bg-primary-hover text-white text-sm font-medium transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center gap-2"
              >
                Request Workforce
                <ChevronRight size={16} />
              </a>
            </>
          )}
          {isLoaded && isSignedIn && (
            <>
              <a href="/dashboard" className="text-sm font-medium text-text-main hover:text-primary transition-colors">
                Dashboard
              </a>
              <UserButton afterSignOutUrl="/" />
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-text-main"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-surface border-b border-surface-hover shadow-xl py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-base font-medium text-text-main py-2 border-b border-surface-hover/50"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-2">
            {isLoaded && !isSignedIn && (
              <>
                <a 
                  href="/sign-in" 
                  className="w-full text-center py-3 rounded-lg border border-surface-hover text-text-main font-medium"
                >
                  Login
                </a>
                <a 
                  href="/contact" 
                  className="w-full text-center py-3 rounded-lg bg-primary hover:bg-primary-hover text-white font-medium"
                >
                  Request Workforce
                </a>
              </>
            )}
            {isLoaded && isSignedIn && (
              <>
                <a 
                  href="/dashboard" 
                  className="w-full text-center py-3 rounded-lg border border-surface-hover text-text-main font-medium"
                >
                  Dashboard
                </a>
                <div className="flex justify-center py-2">
                  <UserButton afterSignOutUrl="/" />
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}