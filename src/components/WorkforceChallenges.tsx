import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Clock, Search, ShieldAlert } from 'lucide-react';

const challenges = [
  {
    icon: Clock,
    title: "High Turnover Rates",
    description: "Traditional staffing agencies often fail to provide stable, long-term manpower, leading to constant retraining and operational delays."
  },
  {
    icon: Search,
    title: "Lack of Transparency",
    description: "Companies struggle with visibility into worker attendance, performance, and real-time deployment status."
  },
  {
    icon: ShieldAlert,
    title: "Compliance Risks",
    description: "Managing PF, ESI, and labor law compliance for a large-scale workforce is complex and prone to legal vulnerabilities."
  },
  {
    icon: AlertCircle,
    title: "Unpredictable Scaling",
    description: "Rapidly scaling workforce during peak seasons (like BBD or Diwali sales) is often a bottleneck for logistics and retail."
  }
];

export default function WorkforceChallenges() {
  return (
    <section className="section-padding bg-background border-b border-border">
      <div className="container-custom">
        <div className="max-w-3xl mb-20">
          <h2 className="text-text-primary mb-6">Workforce management is <br /><span className="text-danger">broken.</span> We fixed it.</h2>
          <p className="text-xl text-text-secondary leading-relaxed">
            Scaling a modern business requires more than just manpower. It requires a reliable, transparent, and compliant workforce ecosystem.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={challenge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-card border border-border shadow-premium"
            >
              <div className="w-12 h-12 rounded-xl bg-danger/10 flex items-center justify-center text-danger mb-6">
                <challenge.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">{challenge.title}</h3>
              <p className="text-text-secondary leading-relaxed">{challenge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}