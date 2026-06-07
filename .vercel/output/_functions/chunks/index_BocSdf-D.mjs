import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead, _ as addAttribute } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_Eo3uqCG1.mjs";
import { $ as $$Layout } from "./Layout_OdHJPE5s.mjs";
import { H as Header, F as Footer } from "./Footer_Br_mJlY-.mjs";
import { C as CTA } from "./CTA_lFXRS-ma.mjs";
import { BookOpen, FileText, BarChart3, ArrowRight } from "lucide-react";
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const sections = [
    {
      title: "Company Blog",
      description: "Latest news, updates, and insights from the Skyward HR team.",
      icon: BookOpen,
      href: "/resources/blog",
      color: "bg-blue-500/10 text-blue-500"
    },
    {
      title: "Hiring Guides",
      description: "Expert advice on workforce management, recruitment, and compliance.",
      icon: FileText,
      href: "/resources/guides",
      color: "bg-green-500/10 text-green-500"
    },
    {
      title: "Industry Reports",
      description: "In-depth analysis and trends in the staffing and logistics industry.",
      icon: BarChart3,
      href: "/resources/reports",
      color: "bg-purple-500/10 text-purple-500"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Resources | Skyward HR Service" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-32 pb-20"> <div class="text-center container mx-auto px-4 mb-20"> <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Resource <span class="text-primary">Hub</span></h1> <p class="text-xl text-text-muted max-w-2xl mx-auto">
Your go-to destination for industry insights, hiring best practices, and the latest news from Skyward HR.
</p> </div> <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl"> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${sections.map((section) => renderTemplate`<a${addAttribute(section.href, "href")} class="p-8 bg-surface border border-surface-hover rounded-3xl hover:border-primary/50 transition-all group flex flex-col h-full"> <div${addAttribute(`w-14 h-14 rounded-2xl ${section.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`, "class")}> ${renderComponent($$result2, "section.icon", section.icon, { "size": 28 })} </div> <h3 class="text-2xl font-bold mb-4">${section.title}</h3> <p class="text-text-muted leading-relaxed mb-8 flex-grow">${section.description}</p> <div class="flex items-center text-primary font-semibold gap-2">
Explore ${section.title.split(" ")[1]} ${renderComponent($$result2, "ArrowRight", ArrowRight, { "size": 18 })} </div> </a>`)} </div> <div class="mt-20 p-12 bg-primary/5 border border-primary/20 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8"> <div class="text-center md:text-left"> <h2 class="text-2xl font-bold mb-2">Subscribe to our Newsletter</h2> <p class="text-text-muted">Get the latest staffing insights delivered to your inbox.</p> </div> <div class="flex w-full md:w-auto gap-3"> <input type="email" placeholder="Enter your email" class="px-6 py-3 bg-background border border-surface-hover rounded-full focus:outline-none focus:border-primary w-full md:w-64"> <button class="px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-hover transition-colors whitespace-nowrap">
Join Now
</button> </div> </div> </div> </main> ${renderComponent($$result2, "CTA", CTA, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/CTA", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", Footer, {})} ` })}`;
}, "D:/skyward/src/pages/resources/index.astro", void 0);
const $$file = "D:/skyward/src/pages/resources/index.astro";
const $$url = "/resources";
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
