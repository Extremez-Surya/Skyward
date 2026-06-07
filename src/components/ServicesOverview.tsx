import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Package, ShoppingCart, Briefcase, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { Card, CardTitle, CardDescription } from './ui/Card';

const services = [
  {
    title: 'Logistics Staffing',
    description: 'Expert delivery executives, riders, and route support staff optimized for rapid fulfillment.',
    icon: Truck,
    slug: 'logistics'
  },
  {
    title: 'Warehouse Operations',
    description: 'Specialized pickers, packers, loaders, and inventory experts for seamless supply chain management.',
    icon: Package,
    slug: 'warehouse'
  },
  {
    title: 'Retail Solutions',
    description: 'Professional store helpers, billing staff, and sales support teams to elevate your customer experience.',
    icon: ShoppingCart,
    slug: 'retail'
  },
  {
    title: 'Enterprise Support',
    description: 'Data entry operators, receptionists, and administrative support for high-growth corporate environments.',
    icon: Briefcase,
    slug: 'office-support'
  },
  {
    title: 'Facility Management',
    description: 'Trained housekeeping personnel and pantry helpers to maintain world-class facility standards.',
    icon: Sparkles,
    slug: 'housekeeping'
  },
  {
    title: 'Field Operations',
    description: 'Scalable survey staff, promoters, and field executives for pan-India market research and sales.',
    icon: MapPin,
    slug: 'field-operations'
  },
];

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto mb-24 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-600/10 text-primary-600 text-sm font-bold mb-6">
            <Sparkles size={16} className="mr-2" />
            Our Workforce Model
          </div>
          <h2 className="text-text-primary mb-8 leading-[1.1]">
            Workforce solutions <br />
            <span className="text-primary-600">tailored for scale.</span>
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed mb-10 font-medium max-w-2xl mx-auto">
            We've developed a high-density recruitment and deployment model that bridges the gap between massive operational demands and reliable human capital.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { label: 'Onboarding Speed', value: '24-48hrs' },
              { label: 'Deployment Scale', value: 'Pan-India' },
              { label: 'Compliance Rate', value: '100%' },
              { label: 'Retention Focus', value: '92%' }
            ].map((stat) => (
              <div key={stat.label} className="p-4 rounded-2xl bg-surface border border-border">
                <div className="text-2xl font-bold text-primary-600 mb-1">{stat.value}</div>
                <div className="text-sm text-text-secondary font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.a 
                href={`/services/${service.slug}`} 
                key={service.title} 
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card 
                  variant="feature"
                  className="h-full bg-card flex flex-col items-start border-transparent hover:border-primary-100"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary-600/10 flex items-center justify-center mb-8 group-hover:bg-primary-600 group-hover:text-white text-primary-600 transition-all duration-300">
                    <Icon size={28} />
                  </div>
                  <CardTitle className="mb-4">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="flex-grow mb-8">
                    {service.description}
                  </CardDescription>
                  <div className="flex items-center text-sm font-bold text-primary-600 group-hover:gap-2 transition-all">
                    View Solution <ArrowRight size={18} className="ml-1" />
                  </div>
                </Card>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}