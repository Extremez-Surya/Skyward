import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const faqs: FAQCategory[] = [
  {
    title: "Workforce & Staffing",
    items: [
      {
        question: "How quickly can workforce be deployed?",
        answer: "Deployment timelines vary based on workforce requirements, location, and candidate availability."
      },
      {
        question: "Do you provide replacement support?",
        answer: "Yes. We provide workforce replacement assistance when required."
      },
      {
        question: "What industries do you serve?",
        answer: "We serve logistics, warehousing, retail, e-commerce, corporate, and other workforce-intensive industries."
      },
      {
        question: "Do you verify candidates?",
        answer: "Yes. Candidate screening and document verification are part of our staffing process."
      }
    ]
  },
  {
    title: "For Candidates",
    items: [
      {
        question: "How can I register as a candidate?",
        answer: "You can register by clicking the 'Candidate Login/Sign Up' button. Fill in your basic details, upload the required documents (Aadhaar, PAN, etc.), and our team will contact you for the next steps."
      },
      {
        question: "Is there any registration fee?",
        answer: "No, Skyward HR Service does not charge any registration or processing fee from candidates. Be wary of any individuals asking for money in our name."
      }
    ]
  },
  {
    title: "General Questions",
    items: [
      {
        question: "What is Skyward HR Service?",
        answer: "Skyward HR Service is a workforce management and staffing company focused on helping businesses meet their manpower requirements efficiently. We provide recruitment support, workforce deployment, attendance management, and replacement services."
      }
    ]
  }
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className="space-y-12">
      {faqs.map((category, catIdx) => (
        <div key={catIdx} className="space-y-4">
          <h2 className="text-2xl font-bold text-text-main border-l-4 border-primary pl-4">{category.title}</h2>
          <div className="space-y-3">
            {category.items.map((item, itemIdx) => {
              const id = `${catIdx}-${itemIdx}`;
              const isOpen = openIndex === id;
              return (
                <div 
                  key={id} 
                  className={`border border-surface-hover rounded-xl overflow-hidden transition-all ${isOpen ? 'bg-surface/50' : 'bg-surface'}`}
                >
                  <button 
                    onClick={() => toggle(id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
                  >
                    <span className="font-medium text-text-main md:text-lg">{item.question}</span>
                    {isOpen ? <ChevronUp className="text-primary shrink-0" /> : <ChevronDown className="text-text-muted shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-text-muted leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}