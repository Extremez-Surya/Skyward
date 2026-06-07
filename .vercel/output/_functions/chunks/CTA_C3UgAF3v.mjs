import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { B as Button } from "./Button_CrV2lgV8.mjs";
function CTA() {
  return /* @__PURE__ */ jsx("section", { className: "section-padding bg-background relative overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxs("div", { className: "relative z-10 p-12 lg:p-20 bg-card border border-border rounded-[40px] overflow-hidden text-center lg:text-left shadow-premium", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-600/5 to-transparent pointer-events-none" }),
    /* @__PURE__ */ jsx("div", { className: "absolute -bottom-24 -right-24 w-96 h-96 bg-primary-600/5 blur-[120px] rounded-full pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center relative z-20", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-8 tracking-tight leading-tight", children: [
          "Ready to scale your ",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-primary-600", children: "workforce?" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-text-secondary mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium", children: "Join 500+ enterprise companies that trust Skyward HR for their mission-critical workforce operations." }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center lg:justify-start gap-6 mb-12", children: ["Trained Personnel", "AI Monitoring", "100% Compliant"].map((benefit) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-text-primary font-bold text-sm", children: [
          /* @__PURE__ */ jsx("div", { className: "w-5 h-5 rounded-full bg-success/10 flex items-center justify-center text-success", children: /* @__PURE__ */ jsx(CheckCircle2, { size: 14 }) }),
          benefit
        ] }, benefit)) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row justify-center lg:justify-start gap-4", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "primary",
              size: "lg",
              onClick: () => window.location.href = "/contact",
              rightIcon: ArrowRight,
              className: "rounded-full px-12 shadow-lg shadow-primary-600/20",
              children: "Request Workforce"
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "secondary",
              size: "lg",
              onClick: () => window.location.href = "/contact",
              className: "rounded-full",
              children: "Talk to Our Team"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "hidden lg:block", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4", children: [
        { label: "Fulfillment", value: "98%", desc: "Avg. rate across India" },
        { label: "Onboarding", value: "24h", desc: "Rapid staff deployment" },
        { label: "Retention", value: "85%", desc: "Industry-leading stability" },
        { label: "Accuracy", value: "100%", desc: "Payroll & Compliance" }
      ].map((stat, i) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.9 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true },
          transition: { delay: i * 0.1 },
          whileHover: { y: -5 },
          className: "p-6 bg-surface border border-border rounded-[32px] transition-shadow hover:shadow-premium cursor-default",
          children: [
            /* @__PURE__ */ jsx("div", { className: "text-[10px] font-bold text-primary-600 uppercase tracking-[0.2em] mb-2", children: stat.label }),
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-text-primary mb-1 tracking-tight", children: stat.value }),
            /* @__PURE__ */ jsx("div", { className: "text-[10px] text-text-secondary font-semibold", children: stat.desc })
          ]
        },
        stat.label
      )) }) })
    ] })
  ] }) }) });
}
export {
  CTA as C
};
