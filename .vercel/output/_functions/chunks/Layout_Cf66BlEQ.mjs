import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, bj as renderSlot, bk as renderHead, _ as addAttribute } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_B82yBaQn.mjs";
/* empty css                 */
import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Sparkles, X, Loader2, Send } from "lucide-react";
import { B as Button } from "./Button_V0yuJDF0.mjs";
function AIChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello, I'm your Skyward AI Assistant. How can I help you scale your workforce today?" }
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
  return /* @__PURE__ */ jsx("div", { className: "fixed bottom-8 right-8 z-[60]", children: isOpen ? /* @__PURE__ */ jsxs("div", { className: "w-80 sm:w-[400px] h-[600px] bg-background border border-border rounded-[32px] shadow-2xl flex flex-col overflow-hidden animate-fade-up", children: [
    /* @__PURE__ */ jsxs("div", { className: "p-6 bg-text-primary text-background flex justify-between items-center relative overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 relative z-10", children: [
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-primary-600 flex items-center justify-center", children: /* @__PURE__ */ jsx(Sparkles, { size: 20, className: "text-white" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-bold text-sm tracking-tight text-white", children: "Skyward AI" }),
          /* @__PURE__ */ jsx("div", { className: "text-[10px] font-bold text-primary-400 uppercase tracking-widest", children: "Active Now" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("button", { onClick: () => setIsOpen(false), className: "hover:bg-white/10 p-2 rounded-xl transition-all relative z-10 text-white", children: /* @__PURE__ */ jsx(X, { size: 20 }) }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-12 -right-12 w-32 h-32 bg-primary-600/20 blur-[40px] rounded-full pointer-events-none" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 overflow-y-auto p-6 space-y-6 bg-surface", children: [
      messages.map((msg, i) => /* @__PURE__ */ jsx("div", { className: `flex ${msg.role === "user" ? "justify-end" : "justify-start"}`, children: /* @__PURE__ */ jsx("div", { className: `max-w-[85%] p-4 rounded-2xl text-sm font-medium leading-relaxed ${msg.role === "user" ? "bg-primary-600 text-white rounded-tr-none shadow-premium" : "bg-background border border-border text-text-primary rounded-tl-none shadow-premium"}`, children: msg.content }) }, i)),
      loading && /* @__PURE__ */ jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ jsx("div", { className: "bg-background border border-border p-4 rounded-2xl rounded-tl-none shadow-premium", children: /* @__PURE__ */ jsx(Loader2, { size: 18, className: "animate-spin text-primary-600" }) }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "p-6 bg-background border-t border-border", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          placeholder: "Ask our AI...",
          className: "flex-1 bg-surface border border-border rounded-xl px-5 py-3 text-sm font-medium text-text-primary focus:outline-none focus:ring-4 focus:ring-primary-600/10 focus:border-primary-600 transition-all",
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
          className: "h-12 w-12 min-w-[48px] rounded-xl",
          children: /* @__PURE__ */ jsx(Send, { size: 18 })
        }
      )
    ] }) })
  ] }) : /* @__PURE__ */ jsxs(
    "button",
    {
      onClick: () => setIsOpen(true),
      className: "w-16 h-16 bg-primary-600 text-white rounded-[24px] shadow-lifted hover:shadow-glow transition-all flex items-center justify-center transform hover:scale-110 group relative",
      children: [
        /* @__PURE__ */ jsx(Sparkles, { className: "group-hover:rotate-12 transition-transform", size: 28 }),
        /* @__PURE__ */ jsx("span", { className: "absolute -top-1 -right-1 w-4 h-4 bg-danger border-4 border-background rounded-full" })
      ]
    }
  ) });
}
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
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
  const isDev = false;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><meta name="generator"', "><title>", '</title><meta name="description"', '><link rel="canonical"', '><!-- Open Graph / Facebook --><meta property="og:type"', '><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', `><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"><script>
			const theme = (() => {
				if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
					return localStorage.getItem('theme');
				}
				if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
					return 'dark';
				}
				return 'light';
			})();
		
			if (theme === 'light') {
				document.documentElement.classList.remove('dark');
			} else {
				document.documentElement.classList.add('dark');
			}
			window.localStorage.setItem('theme', theme);
		<\/script>`, "", '</head> <body class="min-h-screen bg-background text-foreground flex flex-col"> ', " ", " ", " </body></html>"])), addAttribute(Astro2.generator, "content"), title, addAttribute(description, "content"), addAttribute(canonicalURL, "href"), addAttribute(type, "content"), addAttribute(Astro2.url.href, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), addAttribute(Astro2.url.href, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(new URL(image, Astro2.url), "content"), renderSlot($$result, $$slots["head"]), renderHead(), renderSlot($$result, $$slots["default"]), renderComponent($$result, "AIChatAssistant", AIChatAssistant, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/AIChatAssistant", "client:component-export": "default" }), isDev);
}, "D:/skyward/src/layouts/Layout.astro", void 0);
export {
  $$Layout as $
};
