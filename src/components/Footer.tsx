import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border pt-16 pb-8 mt-auto">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-600 rounded-md flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-text-primary">Skyward HR</span>
            </a>
            <p className="text-text-secondary text-sm leading-relaxed">
              A Workforce Management Platform that helps businesses deploy, manage, track, and scale manpower efficiently through technology-driven staffing solutions.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="mailto:contact@skywardhr.com" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-text-secondary hover:text-primary-600 transition-colors border border-border hover:border-primary-600/50">
                <Mail size={18} />
              </a>
              <a href="/contact" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-text-secondary hover:text-primary-600 transition-colors border border-border hover:border-primary-600/50">
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-text-primary">Company</h3>
            <ul className="flex flex-col gap-3">
              {['About Us', 'Services', 'Industries', 'How it Works', 'Resources', 'Blog', 'FAQs', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={link === 'Blog' ? '/resources/blog' : `/${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm text-text-secondary hover:text-primary-600 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-text-primary">Services</h3>
            <ul className="flex flex-col gap-3">
              {[
                { name: 'Logistics Staffing', slug: 'logistics' },
                { name: 'Warehouse Staffing', slug: 'warehouse' },
                { name: 'Retail Staffing', slug: 'retail' },
                { name: 'Office Support', slug: 'office-support' },
                { name: 'Housekeeping', slug: 'housekeeping' },
                { name: 'Supervisory Staff', slug: 'supervisory' }
              ].map((service) => (
                <li key={service.name}>
                  <a href={`/services/${service.slug}`} className="text-sm text-text-secondary hover:text-primary-600 transition-colors">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-text-primary">Locations</h3>
            <ul className="flex flex-col gap-3">
              {[
                { name: 'Delhi', slug: 'delhi' },
                { name: 'Gurgaon', slug: 'gurgaon' },
                { name: 'Noida', slug: 'noida' },
                { name: 'Faridabad', slug: 'faridabad' },
                { name: 'Ghaziabad', slug: 'ghaziabad' }
              ].map((location) => (
                <li key={location.name}>
                  <a href={`/locations/${location.slug}`} className="text-sm text-text-secondary hover:text-primary-600 transition-colors">
                    Manpower in {location.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-text-primary">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-text-secondary">
                <MapPin size={18} className="text-primary-600 shrink-0 mt-0.5" />
                <span>123 Business Avenue, Tech Park, Metropolis 500012</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-text-secondary">
                <Phone size={18} className="text-primary-600 shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-text-secondary">
                <Mail size={18} className="text-primary-600 shrink-0" />
                <span>contact@skywardhr.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} Skyward HR Service. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2">
            <a href="/privacy-policy" className="text-sm text-text-muted hover:text-primary-600 transition-colors whitespace-nowrap">Privacy Policy</a>
            <a href="/terms-of-service" className="text-sm text-text-muted hover:text-primary-600 transition-colors whitespace-nowrap">Terms of Service</a>
            <a href="/cookie-policy" className="text-sm text-text-muted hover:text-primary-600 transition-colors whitespace-nowrap">Cookie Policy</a>
            <a href="/disclaimer" className="text-sm text-text-muted hover:text-primary-600 transition-colors whitespace-nowrap">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}