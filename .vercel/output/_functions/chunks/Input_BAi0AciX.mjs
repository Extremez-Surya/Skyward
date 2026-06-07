import { jsxs, jsx } from "react/jsx-runtime";
import React from "react";
const Input = React.forwardRef(
  ({ label, error, helperText, isRequired, className = "", ...props }, ref) => {
    return /* @__PURE__ */ jsxs("div", { className: "w-full space-y-2", children: [
      label && /* @__PURE__ */ jsxs("label", { className: "block text-sm font-bold text-text-primary tracking-tight", children: [
        label,
        isRequired && /* @__PURE__ */ jsx("span", { className: "text-danger ml-1", children: "*" })
      ] }),
      /* @__PURE__ */ jsx(
        "input",
        {
          ref,
          className: `
            w-full h-[52px] px-5 rounded-xl border bg-background text-text-primary
            placeholder:text-text-muted focus:outline-none focus:ring-4 focus:ring-primary-600/10 focus:border-primary-600
            transition-all duration-300 shadow-sm
            ${error ? "border-danger ring-danger/10" : "border-border"}
            ${className}
          `,
          ...props
        }
      ),
      error && /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-danger", children: error }),
      !error && helperText && /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-text-muted", children: helperText })
    ] });
  }
);
Input.displayName = "Input";
const Textarea = React.forwardRef(
  ({ label, error, isRequired, className = "", ...props }, ref) => {
    return /* @__PURE__ */ jsxs("div", { className: "w-full space-y-2", children: [
      label && /* @__PURE__ */ jsxs("label", { className: "block text-sm font-bold text-text-primary tracking-tight", children: [
        label,
        isRequired && /* @__PURE__ */ jsx("span", { className: "text-danger ml-1", children: "*" })
      ] }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          ref,
          className: `
            w-full min-h-[140px] p-5 rounded-xl border bg-background text-text-primary
            placeholder:text-text-muted focus:outline-none focus:ring-4 focus:ring-primary-600/10 focus:border-primary-600
            transition-all duration-300 shadow-sm
            ${error ? "border-danger ring-danger/10" : "border-border"}
            ${className}
          `,
          ...props
        }
      ),
      error && /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-danger", children: error })
    ] });
  }
);
Textarea.displayName = "Textarea";
export {
  Input as I,
  Textarea as T
};
