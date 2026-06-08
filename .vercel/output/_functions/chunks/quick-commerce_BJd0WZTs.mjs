import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_B82yBaQn.mjs";
import { $ as $$Layout } from "./Layout_Cf66BlEQ.mjs";
import { H as Header, F as Footer } from "./Footer_BDsLyvif.mjs";
import { C as CTA } from "./CTA_lFXRS-ma.mjs";
import { Timer, Zap, CheckCircle2 } from "lucide-react";
const $$QuickCommerce = createComponent(($$result, $$props, $$slots) => {
  const challenges = [
    "High demand volatility during peak hours and festive seasons.",
    "Requirement for ultra-fast last-mile delivery executives.",
    "High attrition rates typical of gig-economy roles.",
    "Need for localized presence and route expertise."
  ];
  const solutions = [
    "On-demand scaling of delivery fleets within 24 hours.",
    "Local sourcing of candidates with deep route knowledge.",
    "Continuous pipeline of screened and verified riders.",
    "Integrated attendance and location tracking."
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Quick Commerce Staffing Solutions | Skyward HR Service" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-32 pb-20"> <div class="container mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center"> <h1 class="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Quick Commerce <span class="text-primary">Staffing</span></h1> <p class="text-xl text-text-muted max-w-3xl mx-auto">
Powering 10-minute deliveries with reliable, fast, and verified delivery executives. Scale your fleet instantly with Skyward.
</p> </div> <div class="container mx-auto px-4 sm:px-6 lg:px-8 mb-32"> <div class="grid grid-cols-1 md:grid-cols-2 gap-16"> <div class="p-10 bg-surface border border-surface-hover rounded-3xl"> <h2 class="text-2xl font-bold mb-8 flex items-center gap-3"> ${renderComponent($$result2, "Timer", Timer, { "className": "text-primary" })} Industry Challenges
</h2> <div class="space-y-4"> ${challenges.map((c) => renderTemplate`<div class="flex items-start gap-3"> <div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></div> <p class="text-text-muted">${c}</p> </div>`)} </div> </div> <div class="p-10 bg-primary/5 border border-primary/20 rounded-3xl"> <h2 class="text-2xl font-bold mb-8 flex items-center gap-3"> ${renderComponent($$result2, "Zap", Zap, { "className": "text-primary" })} Skyward Solutions
</h2> <div class="space-y-4"> ${solutions.map((s) => renderTemplate`<div class="flex items-start gap-3"> ${renderComponent($$result2, "CheckCircle2", CheckCircle2, { "className": "text-primary mt-0.5 shrink-0", "size": 18 })} <p class="text-text-main">${s}</p> </div>`)} </div> </div> </div> </div> <div class="bg-surface/30 py-24 border-y border-surface-hover mb-32"> <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h2 class="text-3xl font-bold mb-12">Key Roles for Quick Commerce</h2> <div class="flex flex-wrap justify-center gap-4"> ${["Delivery Partners", "Dark Store Pickers", "Packers", "Store Supervisors"].map((role) => renderTemplate`<div class="px-8 py-4 bg-surface border border-surface-hover rounded-2xl font-medium text-lg"> ${role} </div>`)} </div> </div> </div> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> ${renderComponent($$result2, "CTA", CTA, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/CTA", "client:component-export": "default" })} </div> </main> ${renderComponent($$result2, "Footer", Footer, {})} ` })}`;
}, "D:/skyward/src/pages/industries/quick-commerce.astro", void 0);
const $$file = "D:/skyward/src/pages/industries/quick-commerce.astro";
const $$url = "/industries/quick-commerce";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$QuickCommerce,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
