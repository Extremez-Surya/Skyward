import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Skyward HR completely transformed how we handle warehouse staffing. Their platform makes deployment and tracking seamless.",
    author: "Rajesh Kumar",
    role: "Operations Manager, FastCart Logistics",
  },
  {
    quote: "The replacement support is a game-changer. We never face downtime anymore because they always have backup staff ready.",
    author: "Priya Sharma",
    role: "HR Head, Metro Retail",
  },
  {
    quote: "Professional, transparent, and incredibly fast. They provided 50 delivery executives in just 3 days during our peak season.",
    author: "Amit Patel",
    role: "City Head, QuickDelivery",
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-lg text-text-muted">
            Hear from industry leaders who have scaled their operations with our workforce solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-surface border border-surface-hover relative"
            >
              <Quote size={40} className="text-primary/20 absolute top-6 right-6" />
              <p className="text-text-main text-lg mb-8 relative z-10 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <h4 className="font-semibold text-white">{testimonial.author}</h4>
                <p className="text-sm text-text-muted">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}