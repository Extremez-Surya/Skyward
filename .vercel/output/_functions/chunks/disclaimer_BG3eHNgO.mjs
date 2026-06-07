import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_C1ExgZnB.mjs";
import { $ as $$Layout } from "./Layout_7i-Rx9MZ.mjs";
import { H as Header, F as Footer } from "./Footer_JJNsdXAs.mjs";
import { C as CTA } from "./CTA_lFXRS-ma.mjs";
const $$Disclaimer = createComponent(($$result, $$props, $$slots) => {
  const lastUpdated = "June 7, 2026";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Disclaimer | Skyward HR Service" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-32 pb-20"> <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"> <div className="mb-12"> <h1 class="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Disclaimer</h1> <p class="text-text-muted">Last Updated: ${lastUpdated}</p> </div> <div class="prose prose-invert prose-blue max-w-none space-y-8 text-text-main/90"> <section> <h2 class="text-2xl font-bold mb-4 text-text-main">1. Platform Information</h2> <p>
The information provided by Skyward HR Service Private Limited ("we," "us," or "our") on this platform is for general informational purposes only. All information on the site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
</p> </section> <section> <h2 class="text-2xl font-bold mb-4 text-text-main">2. Workforce and Employment</h2> <p>
Skyward HR Service acts as a facilitator between clients and candidates. While we perform screening and verification processes, we do not guarantee the performance, behavior, or longevity of any candidate deployed to a client. Similarly, we do not guarantee employment or specific work assignments for candidates.
</p> </section> <section> <h2 class="text-2xl font-bold mb-4 text-text-main">3. External Links</h2> <p>
The platform may contain links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
</p> </section> <section> <h2 class="text-2xl font-bold mb-4 text-text-main">4. Professional Advice</h2> <p>
The platform cannot and does not contain legal or HR advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals.
</p> </section> <section> <h2 class="text-2xl font-bold mb-4 text-text-main">5. Limitation of Liability</h2> <p>
Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the platform or reliance on any information provided on the platform. Your use of the platform and your reliance on any information on the platform is solely at your own risk.
</p> </section> <section> <h2 class="text-2xl font-bold mb-4 text-text-main">6. Errors and Omissions</h2> <p>
While we have made every attempt to ensure that the information contained in this site has been obtained from reliable sources, Skyward HR Service is not responsible for any errors or omissions, or for the results obtained from the use of this information.
</p> </section> <section> <h2 class="text-2xl font-bold mb-4 text-text-main">7. Contact Us</h2> <p>
If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at:
<br> <strong>Email:</strong> info@skywardhr.com
</p> </section> </div> </div> </main> ${renderComponent($$result2, "CTA", CTA, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/CTA", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", Footer, {})} ` })}`;
}, "D:/skyward/src/pages/disclaimer.astro", void 0);
const $$file = "D:/skyward/src/pages/disclaimer.astro";
const $$url = "/disclaimer";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Disclaimer,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
