import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Package, ShoppingCart, Briefcase, Sparkles, MapPin, Users, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Logistics Staffing',
    description: 'Delivery Executives, Riders, Route Support Staff.',
    icon: Truck,
  },
  {
    title: 'Warehouse Staffing',
    description: 'Pickers, Packers, Loaders, Inventory Assistants.',
    icon: Package,
  },
  {
    title: 'Retail Staffing',
    description: 'Store Helpers, Billing Staff, Sales Support Staff.',
    icon: ShoppingCart,
  },
  {
    title: 'Office Support',
    description: 'Data Entry Operators, Reception Support, Office Boys.',
    icon: Briefcase,
  },
  {
    title: 'Housekeeping',
    description: 'Cleaning Staff, Pantry Helpers, Housekeeping Personnel.',
    icon: Sparkles,
  },
  {
    title: 'Field Operations',
    description: 'Survey Staff, Promoters, Field Executives.',
    icon: MapPin,
  },
  {
    title: 'Supervisory Staff',
    description: 'Team Leaders, Shift Supervisors, Coordinators.',
    icon: Users,
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Comprehensive Staffing Solutions
          </h2>
          <p className="text-lg text-text-muted">
            We provide specialized workforce tailored to your industry needs, ensuring seamless operations and scalability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-surface border border-surface-hover hover:border-primary/50 transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.1)] flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white text-primary transition-colors">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-text-main mb-3">
                  {service.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                  Learn more <ArrowRight size={16} className="ml-1" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}