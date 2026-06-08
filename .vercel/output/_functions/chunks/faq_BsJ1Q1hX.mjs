import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_B82yBaQn.mjs";
import { $ as $$Layout } from "./Layout_Cf66BlEQ.mjs";
import { H as Header, F as Footer } from "./Footer_BDsLyvif.mjs";
import { F as FAQAccordion } from "./FAQAccordion_D2aTWR9N.mjs";
import { C as CTA } from "./CTA_lFXRS-ma.mjs";
const $$Faq = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Frequently Asked Questions | Skyward HR Service" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-32 pb-20"> <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"> <div class="text-center mb-16"> <h1 class="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Frequently Asked Questions</h1> <p class="text-xl text-text-muted max-w-2xl mx-auto">
Find answers to common questions about our platform, workforce solutions, and how we help businesses and candidates.
</p> </div> ${renderComponent($$result2, "FAQAccordion", FAQAccordion, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/FAQAccordion", "client:component-export": "default" })} <div class="mt-20 p-8 bg-surface border border-surface-hover rounded-2xl text-center"> <h2 class="text-2xl font-bold mb-4">Still have questions?</h2> <p class="text-text-muted mb-8 max-w-xl mx-auto">
Our team is here to help you. Reach out to us via email or WhatsApp and we'll get back to you as soon as possible.
</p> <div class="flex flex-col sm:flex-row items-center justify-center gap-4"> <a href="/contact" class="px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-hover transition-colors w-full sm:w-auto">
Contact Us
</a> <a href="https://wa.me/919876543210" class="px-8 py-3 bg-surface border border-surface-hover text-text-main font-semibold rounded-full hover:bg-surface-hover transition-colors w-full sm:w-auto">
WhatsApp Support
</a> </div> </div> </div> </main> ${renderComponent($$result2, "CTA", CTA, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/CTA", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", Footer, {})} ` })}`;
}, "D:/skyward/src/pages/faq.astro", void 0);
const $$file = "D:/skyward/src/pages/faq.astro";
const $$url = "/faq";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Faq,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
