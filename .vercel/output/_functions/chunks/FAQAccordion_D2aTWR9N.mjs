import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
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
function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);
  return /* @__PURE__ */ jsx("section", { className: "section-padding bg-background", children: /* @__PURE__ */ jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-12 gap-16", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-text-primary mb-6", children: [
        "Frequently asked ",
        /* @__PURE__ */ jsx("span", { className: "text-primary-600", children: "questions." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-text-secondary leading-relaxed mb-10", children: "Everything you need to know about our workforce solutions and enterprise platform." }),
      /* @__PURE__ */ jsxs("div", { className: "p-8 bg-background border border-border rounded-2xl shadow-sm relative overflow-hidden group", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-24 h-24 bg-primary-600/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" }),
        /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-text-primary mb-2", children: "Still have questions?" }),
        /* @__PURE__ */ jsx("p", { className: "text-text-secondary text-sm mb-6", children: "Can't find the answer you're looking for? Please chat to our friendly team." }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => window.location.href = "/contact",
            className: "inline-flex items-center text-primary-600 font-bold hover:text-primary-700 transition-colors gap-2",
            children: [
              "Get in touch",
              /* @__PURE__ */ jsx(ChevronDown, { size: 16, className: "-rotate-90" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "lg:col-span-7 space-y-4", children: faqs.map((faq, index) => {
      const isOpen = openIndex === index;
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: `border border-border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? "bg-card shadow-lifted" : "bg-transparent"}`,
          children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => setOpenIndex(isOpen ? null : index),
                className: "w-full px-8 py-6 flex items-center justify-between text-left gap-4 group",
                children: [
                  /* @__PURE__ */ jsx("span", { className: `text-lg font-bold transition-colors ${isOpen ? "text-primary-600" : "text-text-primary group-hover:text-primary-600"}`, children: faq.question }),
                  /* @__PURE__ */ jsx("div", { className: `w-8 h-8 rounded-full flex items-center justify-center transition-all ${isOpen ? "bg-primary-600 text-white rotate-180" : "bg-surface text-text-muted"}`, children: /* @__PURE__ */ jsx(ChevronDown, { size: 20 }) })
                ]
              }
            ),
            /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { height: 0, opacity: 0 },
                animate: { height: "auto", opacity: 1 },
                exit: { height: 0, opacity: 0 },
                transition: { duration: 0.3, ease: "easeInOut" },
                children: /* @__PURE__ */ jsx("div", { className: "px-8 pb-8 text-text-secondary leading-relaxed text-lg", children: faq.answer })
              }
            ) })
          ]
        },
        index
      );
    }) })
  ] }) }) });
}
export {
  FAQAccordion as F
};
