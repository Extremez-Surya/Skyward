import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { B as Button } from "./Layout_BLze-jQV.mjs";
function CTA() {
  return /* @__PURE__ */ jsxs("section", { className: "py-24 bg-background relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-primary-600/5" }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary-600/10 blur-[150px] rounded-full pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "container-custom relative z-10 text-center", children: [
      /* @__PURE__ */ jsx(
        motion.h2,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
          className: "text-4xl md:text-6xl font-bold text-text-primary mb-6 tracking-tight",
          children: "Need Workforce Support?"
        }
      ),
      /* @__PURE__ */ jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: 0.1 },
          className: "text-xl text-text-secondary mb-10 max-w-2xl mx-auto",
          children: "Tell us your staffing requirements and our team will help you build the right workforce quickly and efficiently."
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: 0.2 },
          children: /* @__PURE__ */ jsx(
            Button,
            {
              size: "lg",
              onClick: () => window.location.href = "/contact",
              rightIcon: ArrowRight,
              children: "Request Workforce"
            }
          )
        }
      )
    ] })
  ] });
}
export {
  CTA as C
};
