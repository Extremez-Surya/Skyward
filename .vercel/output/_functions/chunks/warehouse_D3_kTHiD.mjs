import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_Eo3uqCG1.mjs";
import { $ as $$Layout } from "./Layout_OdHJPE5s.mjs";
import { H as Header, F as Footer } from "./Footer_Br_mJlY-.mjs";
import { C as CTA } from "./CTA_lFXRS-ma.mjs";
import { Archive, Box, ArrowUpDown, ClipboardList, CheckCircle2 } from "lucide-react";
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Warehouse = createComponent(($$result, $$props, $$slots) => {
  const roles = [
    {
      title: "Pickers",
      description: "Systematic staff for identifying and collecting items from inventory.",
      icon: Archive
    },
    {
      title: "Packers",
      description: "Efficient personnel for safe packaging and labeling of products.",
      icon: Box
    },
    {
      title: "Loaders",
      description: "Physically capable staff for loading and unloading shipments.",
      icon: ArrowUpDown
    },
    {
      title: "Inventory Assistants",
      description: "Support staff for stock counting and inventory management.",
      icon: ClipboardList
    }
  ];
  const benefits = [
    "Strict adherence to warehouse safety protocols.",
    "Initial training on inventory apps and barcode scanners.",
    "Scalable workforce for promotional events and sales peaks.",
    "Transparent attendance tracking via our portal."
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Warehouse Staffing Services | Contract Workforce Solutions | Skyward HR", "description": "Need warehouse staffing solutions? Skyward HR provides trained workforce, rapid deployment and workforce management services. Contact us today." }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-32 pb-20"> <div class="container mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center"> <h1 class="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Warehouse Staffing <span class="text-primary">Services</span></h1> <p class="text-xl text-text-muted max-w-3xl mx-auto">
Optimize your supply chain with our trained and verified warehouse manpower. From picking to loading, we've got you covered.
</p> </div> <div class="container mx-auto px-4 sm:px-6 lg:px-8 mb-32"> <h2 class="text-3xl font-bold mb-12 text-center">Roles We Offer</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> ${roles.map((role) => renderTemplate`<div class="p-8 bg-surface border border-surface-hover rounded-2xl hover:border-primary/50 transition-colors group"> <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform"> ${renderComponent($$result2, "role.icon", role.icon, { "size": 24 })} </div> <h3 class="text-xl font-bold mb-3">${role.title}</h3> <p class="text-text-muted leading-relaxed">${role.description}</p> </div>`)} </div> </div> <div class="bg-surface/30 py-24 border-y border-surface-hover mb-32"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex flex-col lg:flex-row gap-16 items-center"> <div class="lg:w-1/2"> <h2 class="text-3xl md:text-4xl font-bold mb-8 leading-tight">Why Choose Skyward for <span class="text-primary">Warehousing?</span></h2> <div class="space-y-6"> ${benefits.map((benefit) => renderTemplate`<div class="flex items-start gap-4"> <div class="mt-1 bg-primary/20 text-primary p-1 rounded-full"> ${renderComponent($$result2, "CheckCircle2", CheckCircle2, { "size": 16 })} </div> <p class="text-text-main text-lg">${benefit}</p> </div>`)} </div> </div> <div class="lg:w-1/2 grid grid-cols-2 gap-4"> <div class="aspect-square bg-surface border border-surface-hover rounded-2xl p-8 flex flex-col justify-center items-center text-center"> <span class="text-4xl font-bold text-primary mb-2">95%</span> <span class="text-sm text-text-muted">On-time Deployment</span> </div> <div class="aspect-square bg-surface border border-surface-hover rounded-2xl p-8 flex flex-col justify-center items-center text-center mt-8"> <span class="text-4xl font-bold text-primary mb-2">100%</span> <span class="text-sm text-text-muted">Verified Backgrounds</span> </div> </div> </div> </div> </div> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> ${renderComponent($$result2, "CTA", CTA, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/CTA", "client:component-export": "default" })} </div> </main> ${renderComponent($$result2, "Footer", Footer, {})} `, "head": ($$result2) => renderTemplate(_a || (_a = __template(['<script type="application/ld+json">\n    {\n      "@context": "https://schema.org",\n      "@type": "Service",\n      "name": "Warehouse Staffing Services",\n      "provider": {\n        "@type": "Organization",\n        "name": "Skyward HR Service"\n      },\n      "description": "Comprehensive warehouse staffing solutions including pickers, packers, loaders, and inventory assistants with rapid deployment and verified backgrounds.",\n      "areaServed": {\n        "@type": "Country",\n        "name": "India"\n      }\n    }\n  <\/script>']))) })}`;
}, "D:/skyward/src/pages/services/warehouse.astro", void 0);
const $$file = "D:/skyward/src/pages/services/warehouse.astro";
const $$url = "/services/warehouse";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Warehouse,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
