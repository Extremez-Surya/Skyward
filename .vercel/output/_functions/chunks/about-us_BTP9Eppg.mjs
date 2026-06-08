import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_B82yBaQn.mjs";
import { $ as $$Layout } from "./Layout_Cf66BlEQ.mjs";
import { H as Header, F as Footer } from "./Footer_BDsLyvif.mjs";
import { C as CTA } from "./CTA_lFXRS-ma.mjs";
import { Users, Target, ShieldCheck, Eye, Zap, Heart } from "lucide-react";
import { C as Card, a as CardTitle, b as CardDescription } from "./Card_DgTW5Sf9.mjs";
const $$AboutUs = createComponent(($$result, $$props, $$slots) => {
  const values = [
    { title: "Reliability", description: "We deliver dependable workforce solutions that your business can rely on 24/7.", icon: ShieldCheck },
    { title: "Transparency", description: "Real-time visibility and clear accountability in every deployment and metric.", icon: Eye },
    { title: "Operational Speed", description: "Rapid mobilization of personnel to meet changing market demands instantly.", icon: Zap },
    { title: "True Partnership", description: "We work as a strategic extension of your operational and HR teams.", icon: Heart }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About Us | Skyward HR Service", "description": "Learn about Skyward HR Service's mission to simplify workforce management through enterprise-grade staffing solutions." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-32 pb-24 bg-background"> <div class="container-custom"> <div class="max-w-4xl mb-20"> <div class="inline-flex items-center px-4 py-2 rounded-full bg-primary-600/10 text-primary-600 text-sm font-bold mb-6"> ${renderComponent($$result2, "Users", Users, { "size": 16, "className": "mr-2" })}
The Skyward Story
</div> <h1 class="text-5xl md:text-7xl font-bold text-text-primary mb-8 tracking-tight leading-[1.1]">Redefining <span class="text-primary-600">workforce</span> management.</h1> <p class="text-2xl text-text-secondary leading-relaxed font-medium">
Skyward HR Service is a technology-driven workforce management platform designed for the modern enterprise. We bridge the gap between complex operational needs and reliable human capital.
</p> </div> <!-- Impact Section --> <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24"> ${[
    { label: "Personnel Deployed", value: "25,000+" },
    { label: "Enterprise Clients", value: "120+" },
    { label: "States Covered", value: "18+" },
    { label: "Compliance Audit", value: "100%" }
  ].map((stat) => renderTemplate`<div class="p-8 rounded-[32px] bg-surface border border-border shadow-premium group hover:border-primary-600/30 transition-all"> <div class="text-4xl font-bold text-primary-600 mb-2 group-hover:scale-105 transition-transform">${stat.value}</div> <div class="text-sm text-text-secondary font-bold uppercase tracking-wider">${stat.label}</div> </div>`)} </div> <div class="grid lg:grid-cols-2 gap-10 mb-24"> <div class="p-10 rounded-[40px] bg-surface border border-border relative overflow-hidden group"> <div class="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-premium group-hover:scale-110 transition-transform"> ${renderComponent($$result2, "Target", Target, { "size": 32 })} </div> <h2 class="text-4xl font-bold text-text-primary mb-6 tracking-tight">Our Mission</h2> <p class="text-xl text-text-secondary leading-relaxed font-medium">
To empower businesses with a transparent, compliant, and highly efficient workforce ecosystem through innovation and exceptional service standards.
</p> <div class="absolute -bottom-12 -right-12 w-64 h-64 bg-primary-600/5 blur-[100px] rounded-full"></div> </div> <div class="p-10 rounded-[40px] bg-card border border-border relative overflow-hidden group"> <div class="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center text-primary-600 mb-8 shadow-premium group-hover:scale-110 transition-transform"> ${renderComponent($$result2, "Users", Users, { "size": 32 })} </div> <h2 class="text-4xl font-bold text-text-primary mb-6 tracking-tight">Our Vision</h2> <p class="text-xl text-text-secondary leading-relaxed font-medium">
To become India's definitive standard for enterprise workforce solutions, recognized for our reliability, speed, and technology-first approach.
</p> <div class="absolute -bottom-12 -right-12 w-64 h-64 bg-primary-600/10 blur-[100px] rounded-full"></div> </div> </div> <section class="bg-surface rounded-[48px] p-12 lg:p-20 border border-border"> <div class="text-center mb-16"> <h2 class="text-text-primary mb-4">Our core <span class="text-primary-600">values.</span></h2> <p class="text-xl text-text-secondary max-w-2xl mx-auto font-medium">The principles that guide every deployment and client partnership.</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> ${values.map((value) => renderTemplate`${renderComponent($$result2, "Card", Card, { "client:visible": true, "variant": "feature", "className": "bg-card border-border hover:border-primary-100 flex flex-col items-center text-center p-8", "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/ui/Card", "client:component-export": "Card" }, { "default": ($$result3) => renderTemplate` <div class="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-6"> ${renderComponent($$result3, "value.icon", value.icon, { "size": 28 })} </div> ${renderComponent($$result3, "CardTitle", CardTitle, { "className": "mb-3 text-xl" }, { "default": ($$result4) => renderTemplate`${value.title}` })} ${renderComponent($$result3, "CardDescription", CardDescription, { "className": "text-sm" }, { "default": ($$result4) => renderTemplate`${value.description}` })} ` })}`)} </div> </section> </div> </main> ${renderComponent($$result2, "CTA", CTA, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/CTA", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", Footer, {})} ` })}`;
}, "D:/skyward/src/pages/about-us.astro", void 0);
const $$file = "D:/skyward/src/pages/about-us.astro";
const $$url = "/about-us";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$AboutUs,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
