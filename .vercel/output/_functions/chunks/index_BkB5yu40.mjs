import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_HIjeTOta.mjs";
import { $ as $$Layout } from "./Layout_DCMQM-e0.mjs";
import { H as Header, F as Footer } from "./Footer_DayAmnRb.mjs";
import { C as CTA } from "./CTA_C3UgAF3v.mjs";
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const posts = [
    {
      title: "The Future of Last-Mile Delivery in 2026",
      excerpt: "Exploring how technology and rapid staffing are changing the logistics landscape.",
      date: "June 1, 2026",
      category: "Logistics"
    },
    {
      title: "5 Tips for Reducing Warehouse Attrition",
      excerpt: "Best practices for keeping your warehouse workforce engaged and productive.",
      date: "May 28, 2026",
      category: "Warehousing"
    },
    {
      title: "Scaling for Festive Peaks: A Guide for Retailers",
      excerpt: "How to manage your store workforce during high-demand shopping seasons.",
      date: "May 15, 2026",
      category: "Retail"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog | Skyward HR Service" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-32 pb-20"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="mb-16"> <a href="/resources" class="text-primary font-semibold mb-4 inline-block">← Back to Resources</a> <h1 class="text-4xl md:text-6xl font-bold text-white tracking-tight">Company <span class="text-primary">Blog</span></h1> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${posts.map((post) => renderTemplate`<article class="bg-surface border border-surface-hover rounded-2xl overflow-hidden hover:border-primary/30 transition-all group"> <div class="aspect-video bg-primary/10 flex items-center justify-center"> <span class="text-primary/40 font-bold text-lg">Image Placeholder</span> </div> <div class="p-8"> <div class="flex items-center gap-4 mb-4"> <span class="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider">${post.category}</span> <span class="text-text-muted text-xs">${post.date}</span> </div> <h3 class="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">${post.title}</h3> <p class="text-text-muted leading-relaxed mb-6">${post.excerpt}</p> <a href="#" class="text-primary font-semibold inline-flex items-center gap-2 group-hover:underline">
Read Full Story
</a> </div> </article>`)} </div> <div class="mt-20 text-center"> <p class="text-text-muted italic">More articles coming soon...</p> </div> </div> </main> ${renderComponent($$result2, "CTA", CTA, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/CTA", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", Footer, {})} ` })}`;
}, "D:/skyward/src/pages/resources/blog/index.astro", void 0);
const $$file = "D:/skyward/src/pages/resources/blog/index.astro";
const $$url = "/resources/blog";
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
