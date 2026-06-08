import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_B82yBaQn.mjs";
import { $ as $$Layout } from "./Layout_Cf66BlEQ.mjs";
import { H as Header, F as Footer } from "./Footer_BDsLyvif.mjs";
import { C as CTA } from "./CTA_lFXRS-ma.mjs";
import { Briefcase, Rocket, Heart, Star, Users, MapPin, Clock } from "lucide-react";
import { B as Button } from "./Button_V0yuJDF0.mjs";
const $$Careers = createComponent(($$result, $$props, $$slots) => {
  const openPositions = [
    { title: "Operations Manager", department: "Operations", location: "Gurgaon, HR", type: "Full-time" },
    { title: "Field Coordinator", department: "Field Services", location: "Multiple Locations", type: "Full-time" },
    { title: "HR Business Partner", department: "Human Resources", location: "Remote / Gurgaon", type: "Full-time" },
    { title: "Account Executive", department: "Sales", location: "Noida, UP", type: "Full-time" }
  ];
  const perks = [
    { title: "Growth Mindset", description: "Continuous learning and clear career progression paths.", icon: Rocket },
    { title: "Wellbeing First", description: "Comprehensive health coverage and flexible work options.", icon: Heart },
    { title: "Impactful Work", description: "Build solutions that power the engine of the Indian economy.", icon: Star },
    { title: "Inclusive Culture", description: "A diverse workplace where every voice matters and thrives.", icon: Users }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Careers | Join the Skyward Team", "description": "Build the future of workforce management. Explore career opportunities at Skyward HR Service." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-32 pb-24 bg-background"> <div class="container-custom"> <div class="max-w-4xl mb-20"> <div class="inline-flex items-center px-4 py-2 rounded-full bg-primary-600/10 text-primary-600 text-sm font-bold mb-6"> ${renderComponent($$result2, "Briefcase", Briefcase, { "size": 16, "className": "mr-2" })}
Join Our Mission
</div> <h1 class="text-5xl md:text-7xl font-bold text-text-primary mb-8 tracking-tight leading-[1.1]">Shape the <span class="text-primary-600">future</span> of work.</h1> <p class="text-2xl text-text-secondary leading-relaxed font-medium">
We're on a mission to organize the workforce of the world's fastest-growing economy. Join a team of builders, thinkers, and operators.
</p> </div> <!-- Culture Section --> <section class="mb-32"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> ${perks.map((perk) => renderTemplate`<div class="p-8 rounded-2xl bg-surface border border-border hover:border-primary-600/30 transition-all group"> <div class="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-6 group-hover:scale-110 transition-transform"> ${renderComponent($$result2, "perk.icon", perk.icon, { "size": 28, "aria-hidden": "true" })} </div> <h3 class="text-xl font-bold text-text-primary mb-3">${perk.title}</h3> <p class="text-text-secondary text-sm leading-relaxed">${perk.description}</p> </div>`)} </div> </section> <!-- Open Positions --> <section id="jobs" class="bg-surface rounded-3xl p-12 lg:p-20 border border-border"> <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"> <div> <h2 class="text-4xl md:text-5xl font-bold text-text-primary mb-4">Open <span class="text-primary-600">Positions.</span></h2> <p class="text-xl text-text-secondary font-medium">Help us build the next generation of workforce technology.</p> </div> <div class="text-sm font-bold text-primary-600 bg-primary-50 px-4 py-2 rounded-full"> ${openPositions.length} Current Openings
</div> </div> <div class="space-y-4"> ${openPositions.map((job) => renderTemplate`<div class="p-6 md:p-8 rounded-xl bg-card border border-border hover:border-primary-100 transition-all group cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"> <div> <h3 class="text-2xl font-bold text-text-primary mb-2 group-hover:text-primary-600 transition-colors">${job.title}</h3> <div class="flex flex-wrap items-center gap-4 text-sm text-text-secondary font-medium"> <span class="flex items-center gap-1.5">${renderComponent($$result2, "Briefcase", Briefcase, { "size": 14, "aria-hidden": "true" })} ${job.department}</span> <span class="flex items-center gap-1.5">${renderComponent($$result2, "MapPin", MapPin, { "size": 14, "aria-hidden": "true" })} ${job.location}</span> <span class="flex items-center gap-1.5">${renderComponent($$result2, "Clock", Clock, { "size": 14, "aria-hidden": "true" })} ${job.type}</span> </div> </div> ${renderComponent($$result2, "Button", Button, { "client:load": true, "variant": "outline", "size": "sm", "className": "rounded-full group-hover:bg-primary-600 group-hover:text-white transition-all", "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/ui/Button", "client:component-export": "Button" }, { "default": ($$result3) => renderTemplate`
Apply Now
` })} </div>`)} </div> <div class="mt-16 p-8 rounded-2xl bg-primary-600 text-white flex flex-col md:flex-row items-center justify-between gap-8"> <div class="max-w-xl text-center md:text-left"> <h3 class="text-2xl font-bold mb-2">Don't see a fit?</h3> <p class="text-primary-100 opacity-90">We're always looking for exceptional talent. Send your CV to careers@skywardhr.com</p> </div> ${renderComponent($$result2, "Button", Button, { "client:load": true, "variant": "secondary", "className": "bg-white text-primary-600 hover:bg-primary-50 border-none shrink-0", "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/ui/Button", "client:component-export": "Button" }, { "default": ($$result3) => renderTemplate`
Submit CV
` })} </div> </section> </div> </main> ${renderComponent($$result2, "CTA", CTA, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/CTA", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", Footer, {})} ` })}`;
}, "D:/skyward/src/pages/careers.astro", void 0);
const $$file = "D:/skyward/src/pages/careers.astro";
const $$url = "/careers";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Careers,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
