import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_B82yBaQn.mjs";
import { $ as $$Layout } from "./Layout_Cf66BlEQ.mjs";
import { H as Header, F as Footer } from "./Footer_BDsLyvif.mjs";
import { C as CTA } from "./CTA_lFXRS-ma.mjs";
import { UserPlus, Wallet, CheckCircle2 } from "lucide-react";
const $$Sme = createComponent(($$result, $$props, $$slots) => {
  const challenges = [
    "Difficulty in managing small teams with high administrative overhead.",
    "Lack of specialized HR support for recruitment and compliance.",
    "Need for flexible manpower to handle business growth spurts.",
    "High impact of even a single staff vacancy on daily operations."
  ];
  const solutions = [
    "End-to-end workforce management for even 1-2 workers.",
    "Zero administrative burden with automated payroll and compliance.",
    "Access to a wide pool of pre-screened local candidates.",
    "Dedicated support for rapid replacements and query resolution."
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "SME Workforce Solutions | Skyward HR Service" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-32 pb-20"> <div class="container mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center"> <h1 class="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Small & Medium <span class="text-primary">Enterprises</span></h1> <p class="text-xl text-text-muted max-w-3xl mx-auto">
Empowering SMEs with professional workforce management. We handle the HR, so you can focus on growing your business.
</p> </div> <div class="container mx-auto px-4 sm:px-6 lg:px-8 mb-32"> <div class="grid grid-cols-1 md:grid-cols-2 gap-16"> <div class="p-10 bg-surface border border-surface-hover rounded-3xl"> <h2 class="text-2xl font-bold mb-8 flex items-center gap-3"> ${renderComponent($$result2, "UserPlus", UserPlus, { "className": "text-primary" })} Industry Challenges
</h2> <div class="space-y-4"> ${challenges.map((c) => renderTemplate`<div class="flex items-start gap-3"> <div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></div> <p class="text-text-muted">${c}</p> </div>`)} </div> </div> <div class="p-10 bg-primary/5 border border-primary/20 rounded-3xl"> <h2 class="text-2xl font-bold mb-8 flex items-center gap-3"> ${renderComponent($$result2, "Wallet", Wallet, { "className": "text-primary" })} Skyward Solutions
</h2> <div class="space-y-4"> ${solutions.map((s) => renderTemplate`<div class="flex items-start gap-3"> ${renderComponent($$result2, "CheckCircle2", CheckCircle2, { "className": "text-primary mt-0.5 shrink-0", "size": 18 })} <p class="text-text-main">${s}</p> </div>`)} </div> </div> </div> </div> <div class="bg-surface/30 py-24 border-y border-surface-hover mb-32"> <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h2 class="text-3xl font-bold mb-12">Key Roles for SMEs</h2> <div class="flex flex-wrap justify-center gap-4"> ${["Office Assistants", "Delivery Runners", "Sales Helpers", "Store Support", "General Utility"].map((role) => renderTemplate`<div class="px-8 py-4 bg-surface border border-surface-hover rounded-2xl font-medium text-lg"> ${role} </div>`)} </div> </div> </div> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> ${renderComponent($$result2, "CTA", CTA, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/CTA", "client:component-export": "default" })} </div> </main> ${renderComponent($$result2, "Footer", Footer, {})} ` })}`;
}, "D:/skyward/src/pages/industries/sme.astro", void 0);
const $$file = "D:/skyward/src/pages/industries/sme.astro";
const $$url = "/industries/sme";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Sme,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
