import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_BJdmQt7F.mjs";
import { B as Button, $ as $$Layout } from "./Layout_BLze-jQV.mjs";
import { H as Header, F as Footer } from "./Footer_C1Kqf_vw.mjs";
import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Zap, ShieldCheck, HeadphonesIcon, Repeat, Maximize, Briefcase, FileText, Quote } from "lucide-react";
import { S as ServicesOverview } from "./ServicesOverview_DWlmj9Ou.mjs";
import { P as ProcessTimeline } from "./ProcessTimeline_CXAcLniy.mjs";
import { C as CTA } from "./CTA_RafQM8OH.mjs";
function Hero() {
  return /* @__PURE__ */ jsxs("section", { className: "relative min-h-screen flex items-center justify-center pt-20 overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 z-0", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-background" }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-[120px]" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-[120px]" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "container-custom relative z-10 text-center", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border mb-8",
          children: [
            /* @__PURE__ */ jsx("span", { className: "flex w-2 h-2 rounded-full bg-secondary-500 animate-pulse" }),
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
          className: "text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-text-primary mb-6",
          children: [
            "Build Your Workforce Faster ",
            /* @__PURE__ */ jsx("br", { className: "hidden md:block" }),
            /* @__PURE__ */ jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500", children: "With Reliable Staffing Solutions" })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.2 },
          className: "max-w-2xl mx-auto text-lg md:text-xl text-text-secondary mb-10 leading-relaxed",
          children: "From warehouse staff and delivery executives to retail and field teams, Skyward HR provides trained manpower and workforce management services across industries."
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
            /* @__PURE__ */ jsx(
              Button,
              {
                size: "lg",
                onClick: () => window.location.href = "/contact",
                rightIcon: ArrowRight,
                className: "w-full sm:w-auto",
                children: "Request Workforce"
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                variant: "secondary",
                size: "lg",
                onClick: () => window.location.href = "/contact",
                leftIcon: Calendar,
                className: "w-full sm:w-auto",
                children: "Talk To Our Team"
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
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-surface border-y border-border", children: /* @__PURE__ */ jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12", children: stats.map((stat, index) => /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.5, delay: index * 0.1 },
      className: "flex flex-col items-center text-center",
      children: [
        /* @__PURE__ */ jsx("div", { className: "text-4xl md:text-5xl lg:text-6xl font-bold text-primary-600 mb-2 tracking-tight", children: stat.value }),
        /* @__PURE__ */ jsx("div", { className: "text-sm md:text-base font-medium text-text-muted uppercase tracking-wider", children: stat.label })
      ]
    },
    stat.label
  )) }) }) });
}
const industries = [
  { name: "Quick Commerce", slug: "quick-commerce" },
  { name: "Warehousing", slug: "warehousing" },
  { name: "Logistics", slug: "logistics" },
  { name: "E-commerce", slug: "e-commerce" },
  { name: "Retail", slug: "retail" },
  { name: "Corporate Offices", slug: "corporate" },
  { name: "Educational Institutions", slug: "education" },
  { name: "Food Services", slug: "food-services" },
  { name: "SMEs", slug: "sme" }
];
function Industries() {
  return /* @__PURE__ */ jsx("section", { className: "py-24 bg-surface border-y border-border overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row items-center justify-between gap-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "lg:w-1/3 text-center lg:text-left", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-bold text-text-primary mb-6 tracking-tight", children: "Industries We Serve" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-text-secondary mb-8", children: "Empowering diverse sectors with reliable, trained, and verified manpower to meet dynamic business demands." }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/industries",
          className: "inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors",
          children: "View all industries →"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "lg:w-2/3 flex flex-wrap justify-center lg:justify-end gap-3", children: industries.map((industry, index) => /* @__PURE__ */ jsx(
      motion.a,
      {
        href: `/industries/${industry.slug}`,
        initial: { opacity: 0, scale: 0.9 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { duration: 0.4, delay: index * 0.05 },
        className: "px-6 py-3 rounded-full bg-background border border-border text-text-primary text-sm font-medium hover:border-primary-600 hover:text-primary-600 transition-colors shadow-sm",
        children: industry.name
      },
      industry.name
    )) })
  ] }) }) });
}
const features = [
  { title: "Fast Workforce Deployment", description: "Rapid turnaround time from requirement gathering to actual deployment.", icon: Zap },
  { title: "Verified Candidates", description: "Stringent background checks and document verification for every candidate.", icon: ShieldCheck },
  { title: "Dedicated HR Support", description: "Dedicated account managers for seamless communication and support.", icon: HeadphonesIcon },
  { title: "Attendance Tracking", description: "Real-time tracking and management of daily workforce attendance.", icon: Calendar },
  { title: "Replacement Support", description: "Hassle-free worker replacements to ensure zero operational downtime.", icon: Repeat },
  { title: "Scalable Staffing Solutions", description: "Easily scale your workforce up or down based on business demands.", icon: Maximize },
  { title: "Industry-Specific Expertise", description: "Tailored workforce solutions for logistics, retail, warehousing, and more.", icon: Briefcase },
  { title: "Transparent Communication", description: "Clear, GST-compliant invoicing with zero hidden charges or surprises.", icon: FileText }
];
function WhyChooseUs() {
  return /* @__PURE__ */ jsx("section", { className: "py-24 bg-background relative", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-bold text-text-primary mb-6 tracking-tight", children: "Trusted Workforce Partner For Growing Businesses" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-text-secondary", children: "We help businesses solve staffing challenges with rapid deployment, verified candidates, attendance management, replacement support, and workforce operations expertise." })
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
          className: "flex items-start gap-4 p-4 rounded-xl hover:bg-surface transition-colors",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 shrink-0 rounded-md bg-primary-600/10 border border-primary-600/20 flex items-center justify-center text-primary-600", children: /* @__PURE__ */ jsx(Icon, { size: 24 }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-text-primary mb-2", children: feature.title }),
              /* @__PURE__ */ jsx("p", { className: "text-text-secondary text-sm leading-relaxed", children: feature.description })
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
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Skyward HR | Leading Manpower Supply & Staffing Company in India", "description": "Skyward HR provides workforce management, staffing solutions, warehouse staffing, logistics staffing and contract manpower services across India." }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", Hero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/Hero", "client:component-export": "default" })} ${renderComponent($$result2, "Stats", Stats, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/Stats", "client:component-export": "default" })} ${renderComponent($$result2, "ServicesOverview", ServicesOverview, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/ServicesOverview", "client:component-export": "default" })} ${renderComponent($$result2, "Industries", Industries, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/Industries", "client:component-export": "default" })} ${renderComponent($$result2, "WhyChooseUs", WhyChooseUs, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/WhyChooseUs", "client:component-export": "default" })} ${renderComponent($$result2, "ProcessTimeline", ProcessTimeline, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/ProcessTimeline", "client:component-export": "default" })} ${renderComponent($$result2, "Testimonials", Testimonials, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/Testimonials", "client:component-export": "default" })} ${renderComponent($$result2, "CTA", CTA, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/CTA", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", Footer, {})} `, "head": ($$result2) => renderTemplate(_a || (_a = __template(['<script type="application/ld+json">\n		{\n			"@context": "https://schema.org",\n			"@type": "Organization",\n			"name": "Skyward HR Service",\n			"url": "https://skywardhr.com",\n			"logo": "https://skywardhr.com/logo.png",\n			"sameAs": [\n				"https://www.linkedin.com/company/skyward-hr",\n				"https://twitter.com/skywardhr"\n			],\n			"contactPoint": {\n				"@type": "ContactPoint",\n				"telephone": "+91-XXXXXXXXXX",\n				"contactType": "customer service"\n			}\n		}\n	<\/script>']))) })}`;
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
