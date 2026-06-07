import { c as createComponent } from "./astro-component_bcg0hk54.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_rsVvLGim.mjs";
import { r as renderComponent } from "./entrypoint_B9LsAA9s.mjs";
import { $ as $$Layout } from "./Layout_BkNHB0md.mjs";
import { H as Header, F as Footer } from "./Footer_H-YRcbhu.mjs";
import { C as CTA } from "./CTA_-xkju_Yp.mjs";
const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About Us | Skyward HR Service" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-32 pb-24 flex-grow"> <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"> <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">About Skyward HR</h1> <p class="text-xl text-text-muted mb-12">
We are a technology-driven workforce management platform transforming how businesses source, deploy, and manage their manpower.
</p> <div class="space-y-12"> <section> <h2 class="text-2xl font-bold text-white mb-4">Our Vision</h2> <p class="text-text-muted leading-relaxed">
To be the most reliable and efficient workforce management platform globally, bridging the gap between talent and opportunity through technology and process excellence.
</p> </section> <section> <h2 class="text-2xl font-bold text-white mb-4">Our Mission</h2> <p class="text-text-muted leading-relaxed">
To provide businesses with seamless, verified, and ready-to-deploy manpower while offering our workforce fair opportunities, transparent processes, and consistent growth.
</p> </section> </div> </div> </main> ${renderComponent($$result2, "CTA", CTA, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/CTA", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", Footer, {})} ` })}`;
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
