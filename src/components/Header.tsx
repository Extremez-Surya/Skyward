import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useAuth, UserButton } from '@clerk/astro/react';
import { Button } from './ui/Button';

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
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary-600 rounded-md flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-text-primary">Skyward HR</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-text-secondary hover:text-primary-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA & Auth */}
        <div className="hidden md:flex items-center gap-4">
          {isLoaded && !isSignedIn && (
            <>
              <a href="/sign-in" className="text-sm font-medium text-text-primary hover:text-primary-600 transition-colors">
                Login
              </a>
              <Button 
                variant="primary"
                size="md"
                onClick={() => window.location.href = '/contact'}
                rightIcon={ChevronRight}
              >
                Request Workforce
              </Button>
            </>
          )}
          {isLoaded && isSignedIn && (
            <>
              <a href="/dashboard" className="text-sm font-medium text-text-primary hover:text-primary-600 transition-colors">
                Dashboard
              </a>
              <UserButton afterSignOutUrl="/" />
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-surface border-b border-border shadow-xl py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-base font-medium text-text-primary py-2 border-b border-border"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-2">
            {isLoaded && !isSignedIn && (
              <>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.location.href = '/sign-in'}
                >
                  Login
                </Button>
                <Button 
                  variant="primary"
                  className="w-full"
                  onClick={() => window.location.href = '/contact'}
                >
                  Request Workforce
                </Button>
              </>
            )}
            {isLoaded && isSignedIn && (
              <>
                <Button 
                  variant="outline"
                  className="w-full"
                  onClick={() => window.location.href = '/dashboard'}
                >
                  Dashboard
                </Button>
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