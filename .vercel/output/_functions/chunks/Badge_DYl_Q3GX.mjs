import { jsx } from "react/jsx-runtime";
import "react";
const Badge = ({ children, variant = "info", className = "" }) => {
  const variants = {
    primary: "bg-primary-100 text-primary-700",
    success: "bg-success/10 text-success border border-success/20",
    warning: "bg-warning/10 text-warning border border-warning/20",
    danger: "bg-danger/10 text-danger border border-danger/20",
    info: "bg-info/10 text-info border border-info/20"
  };
  return /* @__PURE__ */ jsx("span", { className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`, children });
};
export {
  Badge as B
};
