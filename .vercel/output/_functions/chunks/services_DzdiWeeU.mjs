import { c as createComponent } from "./astro-component_bcg0hk54.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_rsVvLGim.mjs";
import { r as renderComponent } from "./entrypoint_B9LsAA9s.mjs";
import { $ as $$Layout } from "./Layout_BkNHB0md.mjs";
import { H as Header, F as Footer } from "./Footer_H-YRcbhu.mjs";
import { S as ServicesOverview } from "./ServicesOverview_fslatFLp.mjs";
import { C as CTA } from "./CTA_-xkju_Yp.mjs";
const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Services | Skyward HR Service" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-20 flex-grow"> ${renderComponent($$result2, "ServicesOverview", ServicesOverview, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/ServicesOverview", "client:component-export": "default" })} </main> ${renderComponent($$result2, "CTA", CTA, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/CTA", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", Footer, {})} ` })}`;
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
