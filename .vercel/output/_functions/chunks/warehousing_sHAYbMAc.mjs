import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_HIjeTOta.mjs";
import { $ as $$Layout } from "./Layout_DCMQM-e0.mjs";
import { H as Header, F as Footer } from "./Footer_DayAmnRb.mjs";
import { C as CTA } from "./CTA_C3UgAF3v.mjs";
import { Box, ShieldCheck, CheckCircle2 } from "lucide-react";
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Warehousing = createComponent(($$result, $$props, $$slots) => {
  const challenges = [
    "Large-scale recruitment needs for regional distribution centers.",
    "Requirement for staff trained in warehouse management systems (WMS).",
    "Ensuring safety compliance and reducing workplace incidents.",
    "Managing seasonal shifts in inventory movement."
  ];
  const solutions = [
    "Bulk hiring capabilities for rapid facility ramp-ups.",
    "Initial training on safety protocols and inventory tools.",
    "On-site coordinators for large-scale workforce management.",
    "Real-time attendance reporting for optimized shift planning."
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Warehouse & Distribution Center Staffing | Skyward HR", "description": "Optimize your supply chain with Skyward HR. We provide bulk hiring, safety training, and on-site workforce management for warehouses and distribution centers." }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-32 pb-20"> <div class="container mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center"> <h1 class="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Warehousing <span class="text-primary">Staffing</span></h1> <p class="text-xl text-text-muted max-w-3xl mx-auto">
Supporting your supply chain with reliable, trained, and safe warehouse manpower. From regional hubs to dark stores.
</p> </div> <div class="container mx-auto px-4 sm:px-6 lg:px-8 mb-32"> <div class="grid grid-cols-1 md:grid-cols-2 gap-16"> <div class="p-10 bg-surface border border-surface-hover rounded-3xl"> <h2 class="text-2xl font-bold mb-8 flex items-center gap-3"> ${renderComponent($$result2, "Box", Box, { "className": "text-primary" })} Industry Challenges
</h2> <div class="space-y-4"> ${challenges.map((c) => renderTemplate`<div class="flex items-start gap-3"> <div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></div> <p class="text-text-muted">${c}</p> </div>`)} </div> </div> <div class="p-10 bg-primary/5 border border-primary/20 rounded-3xl"> <h2 class="text-2xl font-bold mb-8 flex items-center gap-3"> ${renderComponent($$result2, "ShieldCheck", ShieldCheck, { "className": "text-primary" })} Skyward Solutions
</h2> <div class="space-y-4"> ${solutions.map((s) => renderTemplate`<div class="flex items-start gap-3"> ${renderComponent($$result2, "CheckCircle2", CheckCircle2, { "className": "text-primary mt-0.5 shrink-0", "size": 18 })} <p class="text-text-main">${s}</p> </div>`)} </div> </div> </div> </div> <div class="bg-surface/30 py-24 border-y border-surface-hover mb-32"> <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h2 class="text-3xl font-bold mb-12">Key Roles for Warehousing</h2> <div class="flex flex-wrap justify-center gap-4"> ${["Pickers", "Packers", "Loaders & Unloaders", "Inventory Assistants", "Warehouse Supervisors"].map((role) => renderTemplate`<div class="px-8 py-4 bg-surface border border-surface-hover rounded-2xl font-medium text-lg"> ${role} </div>`)} </div> </div> </div> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> ${renderComponent($$result2, "CTA", CTA, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/CTA", "client:component-export": "default" })} </div> </main> ${renderComponent($$result2, "Footer", Footer, {})} `, "head": ($$result2) => renderTemplate(_a || (_a = __template(['<script type="application/ld+json">\n    {\n      "@context": "https://schema.org",\n      "@type": "Service",\n      "name": "Warehouse Staffing Solutions",\n      "provider": {\n        "@type": "Organization",\n        "name": "Skyward HR Service"\n      },\n      "description": "Specialized staffing for regional distribution centers, dark stores, and warehouse facilities across India.",\n      "areaServed": {\n        "@type": "Country",\n        "name": "India"\n      }\n    }\n  <\/script>']))) })}`;
}, "D:/skyward/src/pages/industries/warehousing.astro", void 0);
const $$file = "D:/skyward/src/pages/industries/warehousing.astro";
const $$url = "/industries/warehousing";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Warehousing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
