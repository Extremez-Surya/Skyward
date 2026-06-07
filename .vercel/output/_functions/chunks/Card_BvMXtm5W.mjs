import { jsx } from "react/jsx-runtime";
import "react";
import { motion } from "framer-motion";
const Card = ({
  children,
  variant = "standard",
  className = "",
  animate = true
}) => {
  const baseStyles = "bg-card border border-border overflow-hidden";
  const variants = {
    standard: "rounded-lg p-6 shadow-md",
    feature: "rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
    metric: "rounded-lg p-6 bg-gradient-to-br from-card to-surface shadow-sm"
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
      viewport: { once: true },
      transition: { duration: 0.5 },
      className: combinedClasses,
      children
    }
  );
};
export {
  Card as C
};
