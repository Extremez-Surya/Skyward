import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead, _ as addAttribute } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_BJdmQt7F.mjs";
import { $ as $$Layout } from "./Layout_BLze-jQV.mjs";
import { H as Header, F as Footer } from "./Footer_C1Kqf_vw.mjs";
import { C as CTA } from "./CTA_RafQM8OH.mjs";
import { Truck, Box, ShoppingCart, Users, Building2, Globe, GraduationCap, UtensilsCrossed, Briefcase } from "lucide-react";
const $$Industries = createComponent(($$result, $$props, $$slots) => {
  const industryList = [
    { name: "Logistics", slug: "logistics", icon: Truck, description: "Workforce solutions for transportation and delivery operations." },
    { name: "Warehousing", slug: "warehousing", icon: Box, description: "Staffing support for warehouses, fulfillment centers, and inventory operations." },
    { name: "E-commerce", slug: "e-commerce", icon: ShoppingCart, description: "Flexible workforce for online retail and fulfillment operations." },
    { name: "Retail", slug: "retail", icon: Users, description: "Store operations, customer support, and sales assistance staffing." },
    { name: "Corporate", slug: "corporate", icon: Building2, description: "Office support and administrative workforce solutions." },
    { name: "Quick Commerce", slug: "quick-commerce", icon: Globe, description: "Powering 10-minute deliveries with fast manpower." },
    { name: "Educational Institutions", slug: "education", icon: GraduationCap, description: "Safe and verified staff for campus operations." },
    { name: "Food Services", slug: "food-services", icon: UtensilsCrossed, description: "Hygienic support for kitchens and restaurants." },
    { name: "SMEs", slug: "sme", icon: Briefcase, description: "Flexible workforce management for growing businesses." }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Industries We Serve | Skyward HR Service" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-32 pb-20"> <div class="text-center container mx-auto px-4 mb-20"> <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Industries We <span class="text-primary">Serve</span></h1> <p class="text-xl text-text-muted max-w-2xl mx-auto">
Skyward HR provides workforce solutions across a wide range of industries.
</p> </div> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${industryList.map((industry) => renderTemplate`<a${addAttribute(`/industries/${industry.slug}`, "href")} class="p-8 bg-surface border border-surface-hover rounded-2xl hover:border-primary/50 transition-all group"> <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors"> ${renderComponent($$result2, "industry.icon", industry.icon, { "size": 24 })} </div> <h3 class="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">${industry.name}</h3> <p class="text-text-muted leading-relaxed mb-6">${industry.description}</p> <span class="text-sm font-semibold text-primary inline-flex items-center gap-2">
View Solutions
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-1 transition-transform"> <path d="M5 12h14M12 5l7 7-7 7"></path> </svg> </span> </a>`)} </div> </div> </main> ${renderComponent($$result2, "CTA", CTA, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/CTA", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", Footer, {})} ` })}`;
}, "D:/skyward/src/pages/industries.astro", void 0);
const $$file = "D:/skyward/src/pages/industries.astro";
const $$url = "/industries";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Industries,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
