import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_C1ExgZnB.mjs";
import { $ as $$Layout } from "./Layout_7i-Rx9MZ.mjs";
import { H as Header, F as Footer } from "./Footer_JJNsdXAs.mjs";
import { C as CTA } from "./CTA_lFXRS-ma.mjs";
const $$CookiePolicy = createComponent(($$result, $$props, $$slots) => {
  const lastUpdated = "June 7, 2026";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Cookie Policy | Skyward HR Service" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-32 pb-20"> <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"> <div className="mb-12"> <h1 class="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Cookie Policy</h1> <p class="text-text-muted">Last Updated: ${lastUpdated}</p> </div> <div class="prose prose-invert prose-blue max-w-none space-y-8 text-text-main/90"> <section> <h2 class="text-2xl font-bold mb-4 text-text-main">1. What Are Cookies</h2> <p>
Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.
</p> </section> <section> <h2 class="text-2xl font-bold mb-4 text-text-main">2. How We Use Cookies</h2> <p>
Skyward HR Service uses cookies for several reasons:
</p> <ul class="list-disc pl-6 space-y-4 mt-4"> <li> <strong>Essential Cookies:</strong> These are necessary for the platform to function. For example, we use Clerk for authentication, which relies on cookies to keep you logged in.
</li> <li> <strong>Performance and Analytics Cookies:</strong> These help us understand how visitors interact with our platform by collecting and reporting information anonymously.
</li> <li> <strong>Functionality Cookies:</strong> These allow the platform to remember choices you make (such as your username or language) and provide enhanced features.
</li> </ul> </section> <section> <h2 class="text-2xl font-bold mb-4 text-text-main">3. Third-Party Cookies</h2> <p>
In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Service and so on.
</p> <ul class="list-disc pl-6 space-y-2 mt-4"> <li><strong>Clerk:</strong> For identity management and session handling.</li> <li><strong>Supabase:</strong> For database interactions and occasional session tokens.</li> <li><strong>Google Analytics:</strong> To understand traffic patterns and user behavior.</li> </ul> </section> <section> <h2 class="text-2xl font-bold mb-4 text-text-main">4. Managing Cookies</h2> <p>
Most web browsers allow you to control cookies through their settings. You can choose to block or delete cookies, but doing so may limit your ability to use certain features of our platform.
</p> </section> <section> <h2 class="text-2xl font-bold mb-4 text-text-main">5. Changes to This Policy</h2> <p>
We may update our Cookie Policy from time to time. We encourage you to periodically review this page for the latest information on our cookie practices.
</p> </section> <section> <h2 class="text-2xl font-bold mb-4 text-text-main">6. Contact Us</h2> <p>
If you have any questions about our use of cookies, please contact us at:
<br> <strong>Email:</strong> privacy@skywardhr.com
</p> </section> </div> </div> </main> ${renderComponent($$result2, "CTA", CTA, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/CTA", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", Footer, {})} ` })}`;
}, "D:/skyward/src/pages/cookie-policy.astro", void 0);
const $$file = "D:/skyward/src/pages/cookie-policy.astro";
const $$url = "/cookie-policy";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$CookiePolicy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
