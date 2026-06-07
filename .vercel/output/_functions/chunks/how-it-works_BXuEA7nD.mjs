import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_HIjeTOta.mjs";
import { $ as $$Layout } from "./Layout_DCMQM-e0.mjs";
import { H as Header, F as Footer } from "./Footer_DayAmnRb.mjs";
import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { motion } from "framer-motion";
import { MessageSquare, Users, ShieldCheck, Rocket, HeadphonesIcon } from "lucide-react";
import { C as CTA } from "./CTA_C3UgAF3v.mjs";
const steps = [
  {
    number: "01",
    title: "Consultation",
    desc: "Deep-dive into your operational scale and workforce requirements.",
    icon: MessageSquare
  },
  {
    number: "02",
    title: "Precision Sourcing",
    desc: "Matching requirements with our pre-vetted, high-performance talent pool.",
    icon: Users
  },
  {
    number: "03",
    title: "Rigorous Verification",
    desc: "100% document verification and industry-specific skill assessment.",
    icon: ShieldCheck
  },
  {
    number: "04",
    title: "Rapid Deployment",
    desc: "Seamless onboarding and mobilization at your designated locations.",
    icon: Rocket
  },
  {
    number: "05",
    title: "Continuous Optimization",
    desc: "AI-driven monitoring, attendance management, and proactive support.",
    icon: HeadphonesIcon
  }
];
function ProcessTimeline() {
  return /* @__PURE__ */ jsxs("section", { className: "section-padding bg-background overflow-hidden relative", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl opacity-30 dark:opacity-20 pointer-events-none", children: /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-full bg-radial-gradient from-primary-600/10 via-transparent to-transparent" }) }),
    /* @__PURE__ */ jsxs("div", { className: "container-custom relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-24", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-text-primary mb-6 tracking-tight", children: [
          "Our deployment ",
          /* @__PURE__ */ jsx("span", { className: "text-primary-600", children: "engine." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-text-secondary leading-relaxed font-medium", children: "A battle-tested 5-step process designed for speed, compliance, and enterprise reliability." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-border/50 z-0" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 relative z-10", children: steps.map((step, index) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] },
            className: "flex flex-col items-center text-center group",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "w-[90px] h-[90px] rounded-[32px] bg-card border border-border flex items-center justify-center mb-8 shadow-premium group-hover:shadow-glow group-hover:border-primary-600/30 transition-all duration-500 relative", children: [
                /* @__PURE__ */ jsx("div", { className: "absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary-600 text-white text-xs font-bold flex items-center justify-center border-4 border-card", children: step.number }),
                /* @__PURE__ */ jsx(step.icon, { size: 32, className: "text-primary-600 group-hover:scale-110 transition-transform duration-500" })
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-text-primary mb-4 px-4 group-hover:text-primary-600 transition-colors", children: step.title }),
              /* @__PURE__ */ jsx("p", { className: "text-text-secondary leading-relaxed font-medium px-2", children: step.desc })
            ]
          },
          step.number
        )) })
      ] })
    ] })
  ] });
}
const $$HowItWorks = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "How It Works | Skyward HR Service", "description": "Discover our battle-tested workforce deployment process, designed for enterprise speed, transparency, and 100% compliance." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-24 flex-grow bg-background"> ${renderComponent($$result2, "ProcessTimeline", ProcessTimeline, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/ProcessTimeline", "client:component-export": "default" })} </main> ${renderComponent($$result2, "CTA", CTA, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/CTA", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", Footer, {})} ` })}`;
}, "D:/skyward/src/pages/how-it-works.astro", void 0);
const $$file = "D:/skyward/src/pages/how-it-works.astro";
const $$url = "/how-it-works";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$HowItWorks,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
