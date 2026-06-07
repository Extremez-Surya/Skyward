import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_Eo3uqCG1.mjs";
import { $ as $$Layout } from "./Layout_OdHJPE5s.mjs";
import { H as Header, F as Footer } from "./Footer_Br_mJlY-.mjs";
import { C as CTA } from "./CTA_lFXRS-ma.mjs";
import { Truck, Navigation, CheckCircle2 } from "lucide-react";
const $$Logistics = createComponent(($$result, $$props, $$slots) => {
  const challenges = [
    "Complex route management and last-mile delivery hurdles.",
    "Requirement for riders with valid documentation and vehicles.",
    "High demand for seasonal staff during e-commerce sales.",
    "Ensuring timely deliveries and customer satisfaction."
  ];
  const solutions = [
    "Fleet of verified and trained delivery executives.",
    "Flexible staffing models to handle peak load shifts.",
    "Integrated tracking for better route efficiency.",
    "Compliance-first approach to documentation and payroll."
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Logistics Industry Solutions | Skyward HR Service" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-32 pb-20"> <div class="container mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center"> <h1 class="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Logistics <span class="text-primary">Industry</span></h1> <p class="text-xl text-text-muted max-w-3xl mx-auto">
Empowering the logistics sector with a mobile and efficient workforce. We provide the manpower that moves your business forward.
</p> </div> <div class="container mx-auto px-4 sm:px-6 lg:px-8 mb-32"> <div class="grid grid-cols-1 md:grid-cols-2 gap-16"> <div class="p-10 bg-surface border border-surface-hover rounded-3xl"> <h2 class="text-2xl font-bold mb-8 flex items-center gap-3"> ${renderComponent($$result2, "Truck", Truck, { "className": "text-primary" })} Industry Challenges
</h2> <div class="space-y-4"> ${challenges.map((c) => renderTemplate`<div class="flex items-start gap-3"> <div class="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></div> <p class="text-text-muted">${c}</p> </div>`)} </div> </div> <div class="p-10 bg-primary/5 border border-primary/20 rounded-3xl"> <h2 class="text-2xl font-bold mb-8 flex items-center gap-3"> ${renderComponent($$result2, "Navigation", Navigation, { "className": "text-primary" })} Skyward Solutions
</h2> <div class="space-y-4"> ${solutions.map((s) => renderTemplate`<div class="flex items-start gap-3"> ${renderComponent($$result2, "CheckCircle2", CheckCircle2, { "className": "text-primary mt-0.5 shrink-0", "size": 18 })} <p class="text-text-main">${s}</p> </div>`)} </div> </div> </div> </div> <div class="bg-surface/30 py-24 border-y border-surface-hover mb-32"> <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h2 class="text-3xl font-bold mb-12">Key Roles for Logistics</h2> <div class="flex flex-wrap justify-center gap-4"> ${["Delivery Executives", "Riders", "Van Drivers", "Route Coordinators", "Hub Supervisors"].map((role) => renderTemplate`<div class="px-8 py-4 bg-surface border border-surface-hover rounded-2xl font-medium text-lg"> ${role} </div>`)} </div> </div> </div> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> ${renderComponent($$result2, "CTA", CTA, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/CTA", "client:component-export": "default" })} </div> </main> ${renderComponent($$result2, "Footer", Footer, {})} ` })}`;
}, "D:/skyward/src/pages/industries/logistics.astro", void 0);
const $$file = "D:/skyward/src/pages/industries/logistics.astro";
const $$url = "/industries/logistics";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Logistics,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
