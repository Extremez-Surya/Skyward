import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_BJdmQt7F.mjs";
import { $ as $$Layout } from "./Layout_BLze-jQV.mjs";
import { H as Header, F as Footer } from "./Footer_C1Kqf_vw.mjs";
import { C as CTA } from "./CTA_RafQM8OH.mjs";
const $$TermsOfService = createComponent(($$result, $$props, $$slots) => {
  const lastUpdated = "June 7, 2026";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Terms of Service | Skyward HR Service" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-32 pb-20"> <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"> <div className="mb-12"> <h1 class="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Terms of Service</h1> <p class="text-text-muted">Last Updated: ${lastUpdated}</p> </div> <div class="prose prose-invert prose-blue max-w-none space-y-8 text-text-main/90"> <section> <h2 class="text-2xl font-bold mb-4 text-text-main">1. Acceptance of Terms</h2> <p>
By accessing or using the Skyward HR Service platform, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our services.
</p> </section> <section> <h2 class="text-2xl font-bold mb-4 text-text-main">2. Use of the Platform</h2> <p>
You must be at least 18 years old to use this platform. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
</p> <p class="mt-4">
You are responsible for safeguarding your account credentials and for any activities or actions under your account.
</p> </section> <section> <h2 class="text-2xl font-bold mb-4 text-text-main">3. Services for Candidates</h2> <p>
Skyward HR Service provides a platform for candidates to apply for workforce opportunities. We do not guarantee employment or specific assignments. Candidates are responsible for the accuracy of their profiles and documentation.
</p> </section> <section> <h2 class="text-2xl font-bold mb-4 text-text-main">4. Services for Clients</h2> <p>
Clients using our platform for workforce requirements agree to comply with all applicable labor laws and regulations. Billing and payment terms will be specified in individual service agreements.
</p> </section> <section> <h2 class="text-2xl font-bold mb-4 text-text-main">5. Prohibited Conduct</h2> <p>You agree not to:</p> <ul class="list-disc pl-6 space-y-2 mt-4"> <li>Use the platform for any illegal purpose.</li> <li>Submit false or misleading information.</li> <li>Interfere with or disrupt the integrity or performance of the platform.</li> <li>Attempt to gain unauthorized access to any part of the platform.</li> </ul> </section> <section> <h2 class="text-2xl font-bold mb-4 text-text-main">6. Intellectual Property</h2> <p>
All content on the Skyward HR Service platform, including text, graphics, logos, and software, is the property of Skyward HR Service or its licensors and is protected by intellectual property laws.
</p> </section> <section> <h2 class="text-2xl font-bold mb-4 text-text-main">7. Limitation of Liability</h2> <p>
To the maximum extent permitted by law, Skyward HR Service shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
</p> </section> <section> <h2 class="text-2xl font-bold mb-4 text-text-main">8. Termination</h2> <p>
We reserve the right to suspend or terminate your account and access to our platform at our sole discretion, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users or our business interests.
</p> </section> <section> <h2 class="text-2xl font-bold mb-4 text-text-main">9. Governing Law</h2> <p>
These Terms of Service shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
</p> </section> <section> <h2 class="text-2xl font-bold mb-4 text-text-main">10. Contact Us</h2> <p>
If you have any questions about these Terms, please contact us at:
<br> <strong>Email:</strong> legal@skywardhr.com
</p> </section> </div> </div> </main> ${renderComponent($$result2, "CTA", CTA, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/CTA", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", Footer, {})} ` })}`;
}, "D:/skyward/src/pages/terms-of-service.astro", void 0);
const $$file = "D:/skyward/src/pages/terms-of-service.astro";
const $$url = "/terms-of-service";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$TermsOfService,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
