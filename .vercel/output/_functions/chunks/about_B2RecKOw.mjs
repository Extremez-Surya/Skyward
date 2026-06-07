import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_BJdmQt7F.mjs";
import { $ as $$Layout } from "./Layout_BLze-jQV.mjs";
import { H as Header, F as Footer } from "./Footer_C1Kqf_vw.mjs";
import { C as CTA } from "./CTA_RafQM8OH.mjs";
const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About Us | Skyward HR Service" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-32 pb-24 flex-grow"> <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"> <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">About Skyward HR Service</h1> <p class="text-xl text-text-muted mb-12">
Skyward HR Service is a workforce management and staffing company focused on helping businesses meet their manpower requirements efficiently. We provide recruitment support, workforce deployment, attendance management, and replacement services to organizations operating across multiple industries.
</p> <div class="space-y-16"> <section> <h2 class="text-3xl font-bold text-white mb-6 border-l-4 border-primary pl-4">Our Mission</h2> <p class="text-text-muted text-lg leading-relaxed">
To simplify workforce management through reliable staffing solutions and exceptional service.
</p> </section> <section> <h2 class="text-3xl font-bold text-white mb-6 border-l-4 border-primary pl-4">Our Vision</h2> <p class="text-text-muted text-lg leading-relaxed">
To become one of India's most trusted workforce and staffing partners.
</p> </section> <section> <h2 class="text-3xl font-bold text-white mb-8 border-l-4 border-primary pl-4">Core Values</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> <div class="bg-surface border border-surface-hover p-6 rounded-xl"> <h3 class="text-xl font-bold text-primary mb-2">Reliability</h3> <p class="text-text-muted">We deliver dependable workforce solutions.</p> </div> <div class="bg-surface border border-surface-hover p-6 rounded-xl"> <h3 class="text-xl font-bold text-primary mb-2">Transparency</h3> <p class="text-text-muted">We believe in clear communication and accountability.</p> </div> <div class="bg-surface border border-surface-hover p-6 rounded-xl"> <h3 class="text-xl font-bold text-primary mb-2">Speed</h3> <p class="text-text-muted">We respond quickly to changing workforce demands.</p> </div> <div class="bg-surface border border-surface-hover p-6 rounded-xl"> <h3 class="text-xl font-bold text-primary mb-2">Partnership</h3> <p class="text-text-muted">We work as an extension of our clients' teams.</p> </div> </div> </section> </div> </div> </main> ${renderComponent($$result2, "CTA", CTA, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/CTA", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", Footer, {})} ` })}`;
}, "D:/skyward/src/pages/about.astro", void 0);
const $$file = "D:/skyward/src/pages/about.astro";
const $$url = "/about";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
