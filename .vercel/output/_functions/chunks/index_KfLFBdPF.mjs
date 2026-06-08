import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_B82yBaQn.mjs";
import { $ as $$Layout } from "./Layout_Cf66BlEQ.mjs";
import { H as Header, F as Footer } from "./Footer_BDsLyvif.mjs";
import { C as CTA } from "./CTA_lFXRS-ma.mjs";
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const guides = [
    {
      title: "The Ultimate Guide to Compliance",
      description: "Understanding labor laws and workforce compliance in India.",
      icon: "⚖️"
    },
    {
      title: "Workforce Retention Blueprint",
      description: "Strategies for building a loyal and motivated field team.",
      icon: "🏗️"
    },
    {
      title: "Scaling 101 for Startups",
      description: "How to hire and manage your first 100 delivery partners.",
      icon: "🚀"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Hiring Guides | Skyward HR Service" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-32 pb-20"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="mb-16"> <a href="/resources" class="text-primary font-semibold mb-4 inline-block">← Back to Resources</a> <h1 class="text-4xl md:text-6xl font-bold text-white tracking-tight">Hiring <span class="text-primary">Guides</span></h1> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${guides.map((guide) => renderTemplate`<div class="p-8 bg-surface border border-surface-hover rounded-2xl hover:border-primary/30 transition-all group flex flex-col"> <div class="text-4xl mb-6">${guide.icon}</div> <h3 class="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">${guide.title}</h3> <p class="text-text-muted leading-relaxed mb-8 flex-grow">${guide.description}</p> <button class="px-6 py-3 bg-background border border-primary/20 text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all w-full">
Download PDF Guide
</button> </div>`)} </div> <div class="mt-20 text-center"> <p class="text-text-muted italic">More guides are currently being developed.</p> </div> </div> </main> ${renderComponent($$result2, "CTA", CTA, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/CTA", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", Footer, {})} ` })}`;
}, "D:/skyward/src/pages/resources/guides/index.astro", void 0);
const $$file = "D:/skyward/src/pages/resources/guides/index.astro";
const $$url = "/resources/guides";
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
