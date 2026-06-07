import { c as createComponent } from "./astro-component_bcg0hk54.mjs";
import "piccolore";
import { _ as addAttribute, bj as renderHead, bk as renderSlot, I as renderTemplate } from "./sequence_rsVvLGim.mjs";
import { r as renderComponent } from "./entrypoint_B9LsAA9s.mjs";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Bot, X, Loader2, Send, MessageSquare } from "lucide-react";
function AIChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! I am the Skyward HR Assistant. How can I help you today?" }
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
  return /* @__PURE__ */ jsx("div", { className: "fixed bottom-6 right-6 z-[60]", children: isOpen ? /* @__PURE__ */ jsxs("div", { className: "w-80 sm:w-96 h-[500px] bg-surface border border-surface/50 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300", children: [
    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-primary text-white flex justify-between items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Bot, { size: 20 }),
        /* @__PURE__ */ jsx("span", { className: "font-semibold text-sm", children: "Skyward AI Assistant" })
      ] }),
      /* @__PURE__ */ jsx("button", { onClick: () => setIsOpen(false), className: "hover:bg-white/10 p-1 rounded-lg transition-colors", children: /* @__PURE__ */ jsx(X, { size: 20 }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 overflow-y-auto p-4 space-y-4 bg-background/50", children: [
      messages.map((msg, i) => /* @__PURE__ */ jsx("div", { className: `flex ${msg.role === "user" ? "justify-end" : "justify-start"}`, children: /* @__PURE__ */ jsx("div", { className: `max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === "user" ? "bg-primary text-white rounded-tr-none" : "bg-surface border border-surface/50 text-text-main rounded-tl-none shadow-sm"}`, children: msg.content }) }, i)),
      loading && /* @__PURE__ */ jsx("div", { className: "flex justify-start", children: /* @__PURE__ */ jsx("div", { className: "bg-surface border border-surface/50 p-3 rounded-2xl rounded-tl-none", children: /* @__PURE__ */ jsx(Loader2, { size: 16, className: "animate-spin text-primary" }) }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "p-4 bg-surface border-t border-surface/50", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          placeholder: "Ask something...",
          className: "flex-1 bg-background border border-surface/50 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20",
          value: input,
          onChange: (e) => setInput(e.target.value),
          onKeyDown: (e) => e.key === "Enter" && handleSend()
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: handleSend,
          disabled: loading,
          className: "p-2 bg-primary text-white rounded-xl hover:bg-primary-hover transition-colors disabled:opacity-50",
          children: /* @__PURE__ */ jsx(Send, { size: 18 })
        }
      )
    ] }) })
  ] }) : /* @__PURE__ */ jsx(
    "button",
    {
      onClick: () => setIsOpen(true),
      className: "w-14 h-14 bg-primary text-white rounded-2xl shadow-lg hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all flex items-center justify-center transform hover:scale-110",
      children: /* @__PURE__ */ jsx(MessageSquare, { size: 24 })
    }
  ) });
}
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Skyward HR Service | Workforce Management Platform",
    description = "Reliable Workforce Solutions for Modern Businesses. Manpower Supply, Staffing Solutions, HR Support Services, and Workforce Management."
  } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">${renderHead()}</head> <body class="min-h-screen bg-background text-text-main flex flex-col"> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "AIChatAssistant", AIChatAssistant, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/AIChatAssistant", "client:component-export": "default" })} </body></html>`;
}, "D:/skyward/src/layouts/Layout.astro", void 0);
export {
  $$Layout as $
};
