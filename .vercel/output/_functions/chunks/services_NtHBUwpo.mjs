import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_C1ExgZnB.mjs";
import { $ as $$Layout } from "./Layout_7i-Rx9MZ.mjs";
import { H as Header, F as Footer } from "./Footer_JJNsdXAs.mjs";
import { S as ServicesOverview } from "./ServicesOverview_Ccqr2E2P.mjs";
import { C as CTA } from "./CTA_lFXRS-ma.mjs";
const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Our Services | Skyward HR Service", "description": "Explore our range of workforce solutions including logistics staffing, warehouse operations, retail support, and facility management." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-24 flex-grow bg-background"> ${renderComponent($$result2, "ServicesOverview", ServicesOverview, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/ServicesOverview", "client:component-export": "default" })} </main> ${renderComponent($$result2, "CTA", CTA, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/CTA", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", Footer, {})} ` })}`;
}, "D:/skyward/src/pages/services.astro", void 0);
const $$file = "D:/skyward/src/pages/services.astro";
const $$url = "/services";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
