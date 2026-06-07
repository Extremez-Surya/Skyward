import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "How quickly can Skyward deploy workforce at scale?",
    answer: "Our enterprise deployment engine can mobilize up to 500+ personnel within 72 hours for standard roles like logistics and warehousing, thanks to our pre-vetted talent pool."
  },
  {
    question: "How do you handle compliance and labor laws?",
    answer: "We provide 100% statutory compliance. Our platform automates the management of ESI, PF, PT, and all labor law requirements, providing you with monthly compliance reports."
  },
  {
    question: "Can we track worker performance and attendance in real-time?",
    answer: "Yes. Our client dashboard provides real-time visibility into attendance via geo-fenced mobile check-ins and performance metrics tailored to your KPIs."
  },
  {
    question: "What is your replacement policy for deployed staff?",
    answer: "We maintain a 'Zero Downtime' policy. If a staff member is unavailable, our system automatically triggers a replacement from our standby pool to ensure your operations never stop."
  },
  {
    question: "Do you serve businesses outside of Delhi NCR?",
    answer: "Yes, Skyward HR has a pan-India presence, serving major industrial and commercial hubs across 35+ cities including Bangalore, Mumbai, Pune, and Hyderabad."
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-text-primary mb-6">Frequently asked <span className="text-primary-600">questions.</span></h2>
            <p className="text-xl text-text-secondary leading-relaxed mb-10">
              Everything you need to know about our workforce solutions and enterprise platform.
            </p>

            <div className="p-8 bg-background border border-border rounded-2xl shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary-600/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
              <h4 className="text-lg font-bold text-text-primary mb-2">Still have questions?</h4>
              <p className="text-text-secondary text-sm mb-6">
                Can't find the answer you're looking for? Please chat to our friendly team.
              </p>
              <button 
                onClick={() => window.location.href = '/contact'}
                className="inline-flex items-center text-primary-600 font-bold hover:text-primary-700 transition-colors gap-2"
              >
                Get in touch
                <ChevronDown size={16} className="-rotate-90" />
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`border border-border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-card shadow-lifted' : 'bg-transparent'}`}
                >
                  <button 
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left gap-4 group"
                  >
                    <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-primary-600' : 'text-text-primary group-hover:text-primary-600'}`}>
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-primary-600 text-white rotate-180' : 'bg-surface text-text-muted'}`}>
                      <ChevronDown size={20} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-8 pb-8 text-text-secondary leading-relaxed text-lg">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}