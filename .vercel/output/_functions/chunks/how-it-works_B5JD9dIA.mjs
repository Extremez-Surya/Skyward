import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_BJdmQt7F.mjs";
import { $ as $$Layout } from "./Layout_BLze-jQV.mjs";
import { H as Header, F as Footer } from "./Footer_C1Kqf_vw.mjs";
import { P as ProcessTimeline } from "./ProcessTimeline_CXAcLniy.mjs";
import { C as CTA } from "./CTA_RafQM8OH.mjs";
const $$HowItWorks = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "How It Works | Skyward HR Service" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-20 flex-grow"> ${renderComponent($$result2, "ProcessTimeline", ProcessTimeline, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/ProcessTimeline", "client:component-export": "default" })} </main> ${renderComponent($$result2, "CTA", CTA, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/CTA", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", Footer, {})} ` })}`;
}, "D:/skyward/src/pages/how-it-works.astro", void 0);
const $$file = "D:/skyward/src/pages/how-it-works.astro";
const $$url = "/how-it-works";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$HowItWorks,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
