import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { _ as addAttribute, bj as renderSlot, bk as renderHead, I as renderTemplate } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_BJdmQt7F.mjs";
import { jsxs, jsx } from "react/jsx-runtime";
import React, { useState } from "react";
import { Bot, X, Loader2, Send, MessageSquare } from "lucide-react";
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
    const baseStyles = "inline-flex items-center justify-center font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95";
    const variants = {
      primary: "bg-primary-600 text-white hover:bg-primary-700 shadow-sm",
      secondary: "bg-transparent border border-primary-600 text-primary-600 hover:bg-primary-50 shadow-sm",
      outline: "bg-transparent border-2 border-primary-600 text-primary-600 hover:bg-primary-50",
      ghost: "bg-transparent text-primary-600 hover:bg-primary-50"
    };
    const sizes = {
      sm: "h-9 px-4 rounded-sm text-sm",
      md: "h-12 px-8 rounded-md text-base",
      lg: "h-14 px-10 rounded-lg text-lg",
      icon: "h-12 w-12 rounded-md"
    };
    const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
    return /* @__PURE__ */ jsxs(
      motion.button,
      {
        ref,
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 },
        className: combinedClasses,
        disabled: isLoading || props.disabled,
        ...props,
        children: [
          isLoading ? /* @__PURE__ */ jsx("div", { className: "w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" }) : LeftIcon && /* @__PURE__ */ jsx(LeftIcon, { size: size === "sm" ? 16 : 20, className: "mr-2" }),
          children,
          !isLoading && RightIcon && /* @__PURE__ */ jsx(RightIcon, { size: size === "sm" ? 16 : 20, className: "ml-2" })
        ]
      }
    );
  }
);
Button.displayName = "Button";
function AIChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello, I'm your Skyward HR Assistant. I can help answer questions about workforce services, staffing solutions, deployment timelines, and workforce management." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    try {
      const response = await fetch("/api/ai/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] })
      });
      const data = await response.json();
      if (data.reply) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.reply.content }]);
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [...prev, { role: "assistant", content: "Sorry, I encountered an error. Please try again." }]);
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "fixed bottom-6 right-6 z-[60]", children: isOpen ? /* @__PURE__ */ jsxs("div", { className: "w-80 sm:w-96 h-[500px] bg-card border border-border rounded-lg shadow-2xl flex flex-col overflow-hidden animate-fade-up", children: [
    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-primary-600 text-white flex justify-between items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Bot, { size: 20 }),
        /* @__PURE__ */ jsx("span", { className: "font-semibold text-sm", children: "Skyward AI Assistant" })
      ] }),
      /* @__PURE__ */ jsx("button", { onClick: () => setIsOpen(false), className: "hover:bg-white/10 p-1 rounded-md transition-colors", children: /* @__PURE__ */ jsx(X, { size: 20 }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-4 bg-background/50", children: [
      messages.map((msg, i) => /* @__PURE__ */ jsx("div", { className: `flex ${msg.role === "user" ? "justify-end" : "justify-start"}`, children: /* @__PURE__ */ jsx("div", { className: `max-w-[80%] p-3 rounded-lg text-sm ${msg.role === "user" ? "bg-primary-600 text-white rounded-tr-none" : "bg-surface border border-border text-text-primary rounded-tl-none shadow-sm"}`, children: msg.content }) }, i)),
      loading && /* @__PURE__ */ jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ jsx("div", { className: "bg-surface border border-border p-3 rounded-lg rounded-tl-none", children: /* @__PURE__ */ jsx(Loader2, { size: 16, className: "animate-spin text-primary-600" }) }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "p-4 bg-surface border-t border-border", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          placeholder: "Ask something...",
          className: "flex-1 bg-background border border-border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-4 focus:ring-primary-200 focus:border-primary-600 transition-all",
          value: input,
          onChange: (e) => setInput(e.target.value),
          onKeyDown: (e) => e.key === "Enter" && handleSend()
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          onClick: handleSend,
          isLoading: loading,
          size: "icon",
          className: "h-10 w-10 min-w-[40px]",
          children: /* @__PURE__ */ jsx(Send, { size: 18 })
        }
      )
    ] }) })
  ] }) : /* @__PURE__ */ jsx(
    "button",
    {
      onClick: () => setIsOpen(true),
      className: "w-14 h-14 bg-primary-600 text-white rounded-md shadow-lg hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all flex items-center justify-center transform hover:scale-110 group",
      children: /* @__PURE__ */ jsx(MessageSquare, { className: "group-hover:rotate-12 transition-transform" })
    }
  ) });
}
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Skyward HR Service | Workforce Management Platform",
    description = "Reliable Workforce Solutions for Modern Businesses. Manpower Supply, Staffing Solutions, HR Support Services, and Workforce Management.",
    image = "/og-image.jpg",
    canonicalURL = Astro2.url.href,
    type = "website"
  } = Astro2.props;
  return renderTemplate`<html lang="en" class="dark"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Open Graph / Facebook --><meta property="og:type"${addAttribute(type, "content")}><meta property="og:url"${addAttribute(Astro2.url.href, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url.href, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">${renderSlot($$result, $$slots["head"])}${renderHead()}</head> <body class="min-h-screen bg-background text-foreground flex flex-col"> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "AIChatAssistant", AIChatAssistant, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/AIChatAssistant", "client:component-export": "default" })} </body></html>`;
}, "D:/skyward/src/layouts/Layout.astro", void 0);
export {
  $$Layout as $,
  Button as B
};
