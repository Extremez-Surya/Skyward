import { jsx } from "react/jsx-runtime";
import "react";
import { motion } from "framer-motion";
const Card = ({
  children,
  variant = "standard",
  className = "",
  animate = true
}) => {
  const baseStyles = "bg-card border border-border overflow-hidden transition-all duration-300";
  const variants = {
    standard: "rounded-2xl p-6 shadow-premium hover:shadow-lifted",
    feature: "rounded-2xl p-8 shadow-premium hover:shadow-lifted hover:-translate-y-1",
    metric: "rounded-2xl p-6 bg-gradient-to-br from-card to-surface shadow-premium"
  };
  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;
  if (!animate) {
    return /* @__PURE__ */ jsx("div", { className: combinedClasses, children });
  }
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-50px" },
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
      className: combinedClasses,
      children
    }
  );
};
const CardTitle = ({ children, className = "" }) => /* @__PURE__ */ jsx("h3", { className: `text-2xl font-semibold text-text-primary tracking-tight ${className}`, children });
const CardDescription = ({ children, className = "" }) => /* @__PURE__ */ jsx("p", { className: `text-text-secondary text-base leading-relaxed ${className}`, children });
export {
  Card as C,
  CardTitle as a,
  CardDescription as b
};
