import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_BJdmQt7F.mjs";
import { $ as $$Layout } from "./Layout_BLze-jQV.mjs";
import { H as Header, F as Footer } from "./Footer_C1Kqf_vw.mjs";
import { C as CTA } from "./CTA_RafQM8OH.mjs";
import { Clipboard, Target, Map, CheckCircle2 } from "lucide-react";
const $$FieldOperations = createComponent(($$result, $$props, $$slots) => {
  const roles = [
    {
      title: "Survey Staff",
      description: "Trained personnel for data collection, market research, and on-ground surveys.",
      icon: Clipboard
    },
    {
      title: "Promoters",
      description: "Energetic staff for brand promotion, product sampling, and event activation.",
      icon: Target
    },
    {
      title: "Field Executives",
      description: "Mobile workforce for merchant onboarding, audits, and site visits.",
      icon: Map
    }
  ];
  const benefits = [
    "Tech-savvy staff capable of using field-tracking apps.",
    "GPS-verified attendance and location reporting.",
    "Quick ramp-up for short-term marketing campaigns.",
    "Performance-linked tracking and reporting."
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Field Operations Staffing | Skyward HR Service" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-32 pb-20"> <div class="container mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center"> <h1 class="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Field Operations <span class="text-primary">Staffing</span></h1> <p class="text-xl text-text-muted max-w-3xl mx-auto">
Scale your on-ground presence with our verified field workforce. From surveys to merchant onboarding, we provide results-driven manpower.
</p> </div> <div class="container mx-auto px-4 sm:px-6 lg:px-8 mb-32"> <h2 class="text-3xl font-bold mb-12 text-center">Roles We Offer</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${roles.map((role) => renderTemplate`<div class="p-8 bg-surface border border-surface-hover rounded-2xl hover:border-primary/50 transition-colors group"> <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform"> ${renderComponent($$result2, "role.icon", role.icon, { "size": 24 })} </div> <h3 class="text-xl font-bold mb-3">${role.title}</h3> <p class="text-text-muted leading-relaxed">${role.description}</p> </div>`)} </div> </div> <div class="bg-surface/30 py-24 border-y border-surface-hover mb-32"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex flex-col lg:flex-row gap-16 items-center"> <div class="lg:w-1/2"> <h2 class="text-3xl md:text-4xl font-bold mb-8 leading-tight">Why Choose Skyward for <span class="text-primary">Field Ops?</span></h2> <div class="space-y-6"> ${benefits.map((benefit) => renderTemplate`<div class="flex items-start gap-4"> <div class="mt-1 bg-primary/20 text-primary p-1 rounded-full"> ${renderComponent($$result2, "CheckCircle2", CheckCircle2, { "size": 16 })} </div> <p class="text-text-main text-lg">${benefit}</p> </div>`)} </div> </div> <div class="lg:w-1/2 grid grid-cols-2 gap-4"> <div class="aspect-square bg-surface border border-surface-hover rounded-2xl p-8 flex flex-col justify-center items-center text-center"> <span class="text-4xl font-bold text-primary mb-2">GPS</span> <span class="text-sm text-text-muted">Tracked Workforce</span> </div> <div class="aspect-square bg-surface border border-surface-hover rounded-2xl p-8 flex flex-col justify-center items-center text-center mt-8"> <span class="text-4xl font-bold text-primary mb-2">90%</span> <span class="text-sm text-text-muted">Campaign Completion</span> </div> </div> </div> </div> </div> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> ${renderComponent($$result2, "CTA", CTA, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/CTA", "client:component-export": "default" })} </div> </main> ${renderComponent($$result2, "Footer", Footer, {})} ` })}`;
}, "D:/skyward/src/pages/services/field-operations.astro", void 0);
const $$file = "D:/skyward/src/pages/services/field-operations.astro";
const $$url = "/services/field-operations";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$FieldOperations,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
