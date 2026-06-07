import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-surface-hover pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight">Skyward HR</span>
            </a>
            <p className="text-text-muted text-sm leading-relaxed">
              A Workforce Management Platform that helps businesses deploy, manage, track, and scale manpower efficiently through technology-driven staffing solutions.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="mailto:contact@skywardhr.com" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-text-muted hover:text-primary transition-colors border border-surface-hover hover:border-primary/50">
                <Mail size={18} />
              </a>
              <a href="/contact" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-text-muted hover:text-primary transition-colors border border-surface-hover hover:border-primary/50">
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-text-main">Company</h3>
            <ul className="flex flex-col gap-3">
              {['About Us', 'Services', 'Industries', 'How it Works', 'Careers', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`/${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-text-muted hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-text-main">Services</h3>
            <ul className="flex flex-col gap-3">
              {['Logistics Staffing', 'Warehouse Staffing', 'Retail Staffing', 'Office Support', 'Housekeeping', 'Supervisory Staff'].map((link) => (
                <li key={link}>
                  <a href="/services" className="text-sm text-text-muted hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-text-main">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-text-muted">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>123 Business Avenue, Tech Park, Metropolis 500012</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-text-muted">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-text-muted">
                <Mail size={18} className="text-primary shrink-0" />
                <span>contact@skywardhr.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-surface-hover flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} Skyward HR Service. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy-policy" className="text-sm text-text-muted hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="text-sm text-text-muted hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}