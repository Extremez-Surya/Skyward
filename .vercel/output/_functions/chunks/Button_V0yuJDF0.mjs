import { jsxs, jsx } from "react/jsx-runtime";
import React from "react";
import { motion } from "framer-motion";
const Button = React.forwardRef(
  ({
    variant = "primary",
    size = "md",
    isLoading,
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    children,
    className = "",
    ...props
  }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] cursor-pointer";
    const variants = {
      primary: "bg-primary-600 text-white hover:opacity-90 shadow-[0_1px_2px_rgba(0,0,0,0.05)] relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:-translate-x-full hover:before:animate-[shimmer_1.5s_infinite] isolate",
      secondary: "bg-background border border-border text-text-primary hover:bg-surface hover:border-text-primary/20",
      outline: "bg-transparent border border-border text-text-primary hover:bg-surface",
      ghost: "bg-transparent text-text-primary hover:bg-surface"
    };
    const sizes = {
      sm: "h-9 px-3 rounded-xl text-sm",
      md: "h-11 px-6 rounded-xl text-sm",
      lg: "h-14 px-8 rounded-2xl text-base",
      icon: "h-11 w-11 rounded-xl"
    };
    const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
    return /* @__PURE__ */ jsxs(
      motion.button,
      {
        ref,
        whileHover: { y: -2 },
        whileTap: { scale: 0.98 },
        className: combinedClasses,
        disabled: isLoading || props.disabled,
        ...props,
        children: [
          isLoading ? /* @__PURE__ */ jsx("div", { className: "w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" }) : LeftIcon && /* @__PURE__ */ jsx(LeftIcon, { size: size === "sm" ? 16 : 20, className: "mr-2" }),
          /* @__PURE__ */ jsx("span", { className: "relative z-10", children }),
          !isLoading && RightIcon && /* @__PURE__ */ jsx(RightIcon, { size: size === "sm" ? 16 : 20, className: "ml-2" })
        ]
      }
    );
  }
);
Button.displayName = "Button";
export {
  Button as B
};
