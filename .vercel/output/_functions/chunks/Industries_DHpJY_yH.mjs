import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { motion } from "framer-motion";
const industries = [
  "Quick Commerce",
  "Warehousing",
  "Logistics",
  "E-commerce",
  "Retail",
  "Corporate Offices",
  "Educational Institutions",
  "Food Services",
  "SMEs"
];
function Industries() {
  return /* @__PURE__ */ jsx("section", { className: "py-24 bg-surface border-y border-surface-hover overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row items-center justify-between gap-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:w-1/3 text-center lg:text-left", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight", children: "Industries We Serve" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-text-muted mb-8", children: "Empowering diverse sectors with reliable, trained, and verified manpower to meet dynamic business demands." }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/industries",
          className: "inline-flex items-center text-primary font-semibold hover:text-primary-hover transition-colors",
          children: "View all industries →"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "lg:w-2/3 flex flex-wrap justify-center lg:justify-end gap-3", children: industries.map((industry, index) => /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.9 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { duration: 0.4, delay: index * 0.05 },
        className: "px-6 py-3 rounded-full bg-background border border-surface-hover text-text-main text-sm font-medium hover:border-accent hover:text-accent transition-colors cursor-pointer",
        children: industry
      },
      industry
    )) })
  ] }) }) });
}
export {
  Industries as I
};
