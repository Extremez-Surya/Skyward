import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { motion } from "framer-motion";
const steps = [
  { number: "01", title: "Requirement Discussion", desc: "We understand your specific workforce needs and operational goals." },
  { number: "02", title: "Candidate Sourcing", desc: "Our team sources the best-fit candidates from our extensive database." },
  { number: "03", title: "Screening", desc: "Rigorous interviews and skill assessments to filter top talent." },
  { number: "04", title: "Documentation", desc: "Complete background checks and document verification." },
  { number: "05", title: "Briefing & Training", desc: "Candidates are briefed on your company policies and roles." },
  { number: "06", title: "Deployment", desc: "Workers are deployed at your site, ready to start." },
  { number: "07", title: "Attendance Management", desc: "We track and manage daily attendance and performance." },
  { number: "08", title: "Replacement Support", desc: "Instant replacements provided in case of attrition or mismatch." }
];
function ProcessTimeline() {
  return /* @__PURE__ */ jsx("section", { className: "py-24 bg-surface border-y border-surface-hover", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-20", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight", children: "How It Works" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-text-muted", children: "A streamlined, 8-step process to ensure you get the right workforce, right on time." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-surface-hover -translate-y-1/2 z-0" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8 gap-y-16 relative z-10", children: steps.map((step, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: index * 0.1 },
          className: "relative text-center flex flex-col items-center",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center text-xl font-bold text-white mb-6 shadow-[0_0_15px_rgba(37,99,235,0.3)] z-10", children: step.number }),
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-text-main mb-2", children: step.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-text-muted max-w-[200px]", children: step.desc })
          ]
        },
        step.number
      )) })
    ] })
  ] }) });
}
export {
  ProcessTimeline as P
};
