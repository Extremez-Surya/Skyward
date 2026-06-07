import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Package, ShoppingCart, Briefcase, Sparkles, MapPin, Users, ArrowRight } from 'lucide-react';
import { Card } from './ui/Card';

const services = [
  {
    title: 'Logistics Staffing',
    description: 'Delivery Executives, Riders, Route Support Staff.',
    icon: Truck,
    slug: 'logistics'
  },
  {
    title: 'Warehouse Staffing',
    description: 'Pickers, Packers, Loaders, Inventory Assistants.',
    icon: Package,
    slug: 'warehouse'
  },
  {
    title: 'Retail Staffing',
    description: 'Store Helpers, Billing Staff, Sales Support Staff.',
    icon: ShoppingCart,
    slug: 'retail'
  },
  {
    title: 'Office Support',
    description: 'Data Entry Operators, Reception Support, Office Boys.',
    icon: Briefcase,
    slug: 'office-support'
  },
  {
    title: 'Housekeeping',
    description: 'Cleaning Staff, Pantry Helpers, Housekeeping Personnel.',
    icon: Sparkles,
    slug: 'housekeeping'
  },
  {
    title: 'Field Operations',
    description: 'Survey Staff, Promoters, Field Executives.',
    icon: MapPin,
    slug: 'field-operations'
  },
  {
    title: 'Supervisory Staff',
    description: 'Team Leaders, Shift Supervisors, Coordinators.',
    icon: Users,
    slug: 'supervisory'
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6 tracking-tight">
            Workforce Solutions Built For Every Business
          </h2>
          <p className="text-lg text-text-secondary">
            Whether you need temporary staff, contract workers, warehouse teams, retail support, or logistics manpower, Skyward HR delivers workforce solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <a href={`/services/${service.slug}`} key={service.title} className="group">
                <Card 
                  variant="feature"
                  className="h-full flex flex-col items-start"
                >
                  <div className="w-12 h-12 rounded-md bg-primary-600/10 flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white text-primary-600 transition-colors">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-center text-sm font-medium text-primary-600 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                    Learn more <ArrowRight size={16} className="ml-1" />
                  </div>
                </Card>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}