import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
function CTA() {
  return /* @__PURE__ */ jsxs("section", { className: "py-24 bg-background relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-primary/5" }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 blur-[150px] rounded-full pointer-events-none" }),
    /* @__PURE__ */ jsxs("div", { className: "container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsx(
        motion.h2,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
          className: "text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight",
          children: "Need Workforce Fast?"
        }
      ),
      /* @__PURE__ */ jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: 0.1 },
          className: "text-xl text-text-muted mb-10 max-w-2xl mx-auto",
          children: "Request staffing support today and experience the efficiency of a tech-driven workforce management platform."
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: 0.2 },
          children: /* @__PURE__ */ jsxs(
            "a",
            {
              href: "/contact",
              className: "inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary hover:bg-primary-hover text-white text-lg font-semibold transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]",
              children: [
                "Request Staffing Support Today",
                /* @__PURE__ */ jsx(ArrowRight, { size: 20 })
              ]
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
