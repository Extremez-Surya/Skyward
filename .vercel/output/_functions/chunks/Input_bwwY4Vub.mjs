import { jsxs, jsx } from "react/jsx-runtime";
import React from "react";
const Input = React.forwardRef(
  ({ label, error, helperText, isRequired, className = "", ...props }, ref) => {
    return /* @__PURE__ */ jsxs("div", { className: "w-full space-y-2", children: [
      label && /* @__PURE__ */ jsxs("label", { className: "block text-sm font-medium text-text-secondary", children: [
        label,
        isRequired && /* @__PURE__ */ jsx("span", { className: "text-danger ml-1", children: "*" })
      ] }),
      /* @__PURE__ */ jsx(
        "input",
        {
          ref,
          className: `
            w-full h-12 px-4 rounded-md border bg-surface text-foreground
            placeholder:text-text-muted focus:outline-none focus:ring-4 focus:ring-primary-200 focus:border-primary-600
            transition-all duration-200
            ${error ? "border-danger ring-danger/20" : "border-border"}
            ${className}
          `,
          ...props
        }
      ),
      error && /* @__PURE__ */ jsx("p", { className: "text-sm text-danger", children: error }),
      !error && helperText && /* @__PURE__ */ jsx("p", { className: "text-sm text-text-muted", children: helperText })
    ] });
  }
);
Input.displayName = "Input";
const Textarea = React.forwardRef(
  ({ label, error, isRequired, className = "", ...props }, ref) => {
    return /* @__PURE__ */ jsxs("div", { className: "w-full space-y-2", children: [
      label && /* @__PURE__ */ jsxs("label", { className: "block text-sm font-medium text-text-secondary", children: [
        label,
        isRequired && /* @__PURE__ */ jsx("span", { className: "text-danger ml-1", children: "*" })
      ] }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          ref,
          className: `
            w-full min-h-[120px] p-4 rounded-md border bg-surface text-foreground
            placeholder:text-text-muted focus:outline-none focus:ring-4 focus:ring-primary-200 focus:border-primary-600
            transition-all duration-200
            ${error ? "border-danger ring-danger/20" : "border-border"}
            ${className}
          `,
          ...props
        }
      ),
      error && /* @__PURE__ */ jsx("p", { className: "text-sm text-danger", children: error })
    ] });
  }
);
Textarea.displayName = "Textarea";
export {
  Input as I,
  Textarea as T
};
