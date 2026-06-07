import { c as createComponent } from "./astro-component_bcg0hk54.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_rsVvLGim.mjs";
import { r as renderComponent } from "./entrypoint_B9LsAA9s.mjs";
import { $ as $$Layout } from "./Layout_BkNHB0md.mjs";
import { H as Header, F as Footer } from "./Footer_H-YRcbhu.mjs";
import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, ShieldCheck, Zap, Repeat, HeadphonesIcon, FileText, Quote } from "lucide-react";
import { S as ServicesOverview } from "./ServicesOverview_fslatFLp.mjs";
import { I as Industries } from "./Industries_DHpJY_yH.mjs";
import { P as ProcessTimeline } from "./ProcessTimeline_Ca5jsTsa.mjs";
import { C as CTA } from "./CTA_-xkju_Yp.mjs";
function Hero() {
  return /* @__PURE__ */ jsxs("section", { className: "relative min-h-screen flex items-center justify-center pt-20 overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-background" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-surface-hover mb-8",
          children: [
            /* @__PURE__ */ jsx("span", { className: "flex w-2 h-2 rounded-full bg-accent animate-pulse" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-text-muted", children: "Enterprise-Grade Workforce Platform" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.h1,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.1 },
          className: "text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6",
          children: [
            "Reliable Workforce Solutions ",
            /* @__PURE__ */ jsx("br", { className: "hidden md:block" }),
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary", children: "for Modern Businesses" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.2 },
          className: "max-w-2xl mx-auto text-lg md:text-xl text-text-muted mb-10 leading-relaxed",
          children: "Manpower Supply, Staffing Solutions, HR Support Services, and Workforce Management. Deploy, manage, and scale your workforce efficiently."
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.3 },
          className: "flex flex-col sm:flex-row items-center justify-center gap-4",
          children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "/contact",
                className: "w-full sm:w-auto px-8 py-4 rounded-lg bg-primary hover:bg-primary-hover text-white text-base font-semibold transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2",
                children: [
                  "Request Workforce",
                  /* @__PURE__ */ jsx(ArrowRight, { size: 20 })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "/book-consultation",
                className: "w-full sm:w-auto px-8 py-4 rounded-lg bg-surface border border-surface-hover hover:border-text-muted text-text-main text-base font-semibold transition-all flex items-center justify-center gap-2",
                children: [
                  /* @__PURE__ */ jsx(Calendar, { size: 20, className: "text-text-muted" }),
                  "Book Consultation"
                ]
              }
            )
          ]
        }
      )
    ] })
  ] });
}
const stats = [
  { label: "Active Workers", value: "10,000+", suffix: "" },
  { label: "Partner Companies", value: "500", suffix: "+" },
  { label: "Deployments Completed", value: "50", suffix: "k+" },
  { label: "Cities Served", value: "35", suffix: "+" }
];
function Stats() {
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-surface border-y border-surface-hover", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12", children: stats.map((stat, index) => /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.5, delay: index * 0.1 },
      className: "flex flex-col items-center text-center",
      children: [
        /* @__PURE__ */ jsx("div", { className: "text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 tracking-tight", children: stat.value }),
        /* @__PURE__ */ jsx("div", { className: "text-sm md:text-base font-medium text-text-muted uppercase tracking-wider", children: stat.label })
      ]
    },
    stat.label
  )) }) }) });
}
const features = [
  { title: "Verified Workforce", description: "Stringent background checks and document verification for every candidate.", icon: ShieldCheck },
  { title: "Quick Deployment", description: "Rapid turnaround time from requirement gathering to actual deployment.", icon: Zap },
  { title: "Replacement Support", description: "Hassle-free worker replacements to ensure zero operational downtime.", icon: Repeat },
  { title: "Professional Coordination", description: "Dedicated account managers for seamless communication and support.", icon: HeadphonesIcon },
  { title: "Transparent Billing", description: "Clear, GST-compliant invoicing with zero hidden charges or surprises.", icon: FileText }
];
function WhyChooseUs() {
  return /* @__PURE__ */ jsx("section", { className: "py-24 bg-background relative", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight", children: "Why Businesses Trust Us" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-text-muted", children: "We don't just supply manpower; we partner with you to manage your workforce end-to-end." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: features.map((feature, index) => {
      const Icon = feature.icon;
      return /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: index * 0.1 },
          className: "flex items-start gap-4",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 shrink-0 rounded-full bg-surface border border-surface-hover flex items-center justify-center text-accent", children: /* @__PURE__ */ jsx(Icon, { size: 24 }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-text-main mb-2", children: feature.title }),
              /* @__PURE__ */ jsx("p", { className: "text-text-muted text-sm leading-relaxed", children: feature.description })
            ] })
          ]
        },
        feature.title
      );
    }) })
  ] }) });
}
const testimonials = [
  {
    quote: "Skyward HR completely transformed how we handle warehouse staffing. Their platform makes deployment and tracking seamless.",
    author: "Rajesh Kumar",
    role: "Operations Manager, FastCart Logistics"
  },
  {
    quote: "The replacement support is a game-changer. We never face downtime anymore because they always have backup staff ready.",
    author: "Priya Sharma",
    role: "HR Head, Metro Retail"
  },
  {
    quote: "Professional, transparent, and incredibly fast. They provided 50 delivery executives in just 3 days during our peak season.",
    author: "Amit Patel",
    role: "City Head, QuickDelivery"
  }
];
function Testimonials() {
  return /* @__PURE__ */ jsx("section", { className: "py-24 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight", children: "What Our Clients Say" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-text-muted", children: "Hear from industry leaders who have scaled their operations with our workforce solutions." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: testimonials.map((testimonial, index) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: index * 0.1 },
        className: "p-8 rounded-2xl bg-surface border border-surface-hover relative",
        children: [
          /* @__PURE__ */ jsx(Quote, { size: 40, className: "text-primary/20 absolute top-6 right-6" }),
          /* @__PURE__ */ jsxs("p", { className: "text-text-main text-lg mb-8 relative z-10 leading-relaxed", children: [
            '"',
            testimonial.quote,
            '"'
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white", children: testimonial.author }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-text-muted", children: testimonial.role })
          ] })
        ]
      },
      index
    )) })
  ] }) });
}
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", Hero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/Hero", "client:component-export": "default" })} ${renderComponent($$result2, "Stats", Stats, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/Stats", "client:component-export": "default" })} ${renderComponent($$result2, "ServicesOverview", ServicesOverview, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/ServicesOverview", "client:component-export": "default" })} ${renderComponent($$result2, "Industries", Industries, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/Industries", "client:component-export": "default" })} ${renderComponent($$result2, "WhyChooseUs", WhyChooseUs, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/WhyChooseUs", "client:component-export": "default" })} ${renderComponent($$result2, "ProcessTimeline", ProcessTimeline, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/ProcessTimeline", "client:component-export": "default" })} ${renderComponent($$result2, "Testimonials", Testimonials, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/Testimonials", "client:component-export": "default" })} ${renderComponent($$result2, "CTA", CTA, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/CTA", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", Footer, {})} ` })}`;
}, "D:/skyward/src/pages/index.astro", void 0);
const $$file = "D:/skyward/src/pages/index.astro";
const $$url = "";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
