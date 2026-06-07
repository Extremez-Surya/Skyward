import { c as createComponent } from "./astro-component_bcg0hk54.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_rsVvLGim.mjs";
import { r as renderComponent } from "./entrypoint_B9LsAA9s.mjs";
import { $ as $$Layout } from "./Layout_BkNHB0md.mjs";
import { H as Header, F as Footer } from "./Footer_H-YRcbhu.mjs";
import { I as Industries } from "./Industries_DHpJY_yH.mjs";
import { C as CTA } from "./CTA_-xkju_Yp.mjs";
const $$Industries = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Industries | Skyward HR Service" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-20 flex-grow"> <div class="pt-24 pb-12 text-center container mx-auto px-4"> <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">Industries We Serve</h1> <p class="text-xl text-text-muted max-w-2xl mx-auto">
Tailored workforce solutions for specific industry needs.
</p> </div> ${renderComponent($$result2, "IndustriesComponent", Industries, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/Industries", "client:component-export": "default" })} </main> ${renderComponent($$result2, "CTA", CTA, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/CTA", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", Footer, {})} ` })}`;
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
