import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { Card } from './ui/Card';

const testimonials = [
  {
    quote: "Skyward HR completely transformed how we handle warehouse staffing. Their platform makes deployment and tracking seamless across multiple fulfillment centers.",
    author: "Rajesh Kumar",
    role: "Director of Operations, FastCart Logistics",
    avatar: "RK"
  },
  {
    quote: "The reliability of their workforce is unmatched. We never face downtime during peak sales because they always have backup staff ready and trained.",
    author: "Priya Sharma",
    role: "Head of HR, Metro Retail Group",
    avatar: "PS"
  },
  {
    quote: "Professional, transparent, and incredibly fast. They provided 500+ delivery executives in just 3 days during our national scaling phase.",
    author: "Amit Patel",
    role: "Chief Operating Officer, QuickDelivery",
    avatar: "AP"
  }
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-text-primary mb-6">Trusted by industry <span className="text-primary-600">leaders.</span></h2>
          <p className="text-xl text-text-secondary leading-relaxed">
            Hear from the operational heads of India's largest logistics, retail, and e-commerce companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card 
                variant="feature"
                className="h-full bg-card border-border flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={16} className="fill-warning text-warning" />
                    ))}
                  </div>
                  <Quote size={40} className="text-primary-600/20 mb-6" />
                  <p className="text-lg text-text-primary mb-10 leading-relaxed font-medium italic">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <div className="w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary">{testimonial.author}</h4>
                    <p className="text-sm text-text-secondary">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}