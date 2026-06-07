import React from 'react';
import { Mail, MapPin, ShieldCheck, Globe, MessageSquare, Share2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border pt-24 pb-12 mt-auto">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <a href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center shadow-premium">
                <ShieldCheck className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold tracking-tight text-text-primary">Skyward</span>
            </a>
            <p className="text-text-secondary text-lg leading-relaxed mb-8 max-w-sm">
              Professional workforce solutions for serious businesses. Deploy, manage, and scale your workforce with enterprise-grade technology.
            </p>
            <div className="flex items-center gap-4">
              {[Globe, MessageSquare, Share2].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center text-text-secondary hover:text-primary-600 hover:bg-primary-50 transition-all border border-transparent hover:border-primary-100"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-text-primary uppercase tracking-widest mb-6">Platform</h3>
            <ul className="space-y-4">
              {['Services', 'Industries', 'How it Works', 'Analytics', 'Compliance'].map((link) => (
                <li key={link}>
                  <a href={`/${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-text-secondary hover:text-primary-600 font-medium transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-text-primary uppercase tracking-widest mb-6">Company</h3>
            <ul className="space-y-4">
              {['About Us', 'Resources', 'Careers', 'Contact', 'Support'].map((link) => (
                <li key={link}>
                  <a href={`/${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-text-secondary hover:text-primary-600 font-medium transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-bold text-text-primary uppercase tracking-widest mb-6">Contact</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-surface border border-border">
                <MapPin className="text-primary-600 shrink-0 mt-1" size={20} />
                <div>
                  <div className="font-bold text-text-primary mb-1">Headquarters</div>
                  <div className="text-text-secondary text-sm leading-relaxed">123 Business Avenue, Cyber Park, Sector 44, Gurgaon 122002</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface border border-border">
                <Mail className="text-primary-600 shrink-0" size={20} />
                <div className="font-bold text-text-primary">contact@skywardhr.com</div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-text-secondary text-sm font-medium">
            &copy; {currentYear} Skyward HR Service Private Limited.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {[
              { name: 'Privacy', href: '/privacy-policy' },
              { name: 'Terms', href: '/terms-of-service' },
              { name: 'Compliance', href: '/compliance' },
              { name: 'Disclaimer', href: '/disclaimer' }
            ].map((link) => (
              <a key={link.name} href={link.href} className="text-text-muted hover:text-primary-600 text-sm font-medium transition-colors">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}