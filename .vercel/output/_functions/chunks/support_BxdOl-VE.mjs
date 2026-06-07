import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead, _ as addAttribute } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_Eo3uqCG1.mjs";
import { $ as $$Layout } from "./Layout_OdHJPE5s.mjs";
import { H as Header, F as Footer } from "./Footer_Br_mJlY-.mjs";
import { C as CTA } from "./CTA_lFXRS-ma.mjs";
import { MessageSquare, HelpCircle, FileText, Phone, Mail, ExternalLink } from "lucide-react";
import { B as Button } from "./Button_V0yuJDF0.mjs";
const $$Support = createComponent(($$result, $$props, $$slots) => {
  const supportChannels = [
    {
      title: "Customer Support",
      description: "Existing clients can reach out for operational issues or workforce updates.",
      icon: MessageSquare,
      action: "Contact Support",
      link: "mailto:support@skywardhr.com"
    },
    {
      title: "Candidate Help",
      description: "Questions about your application, documents, or deployment status.",
      icon: HelpCircle,
      action: "Get Help",
      link: "/faq"
    },
    {
      title: "Billing & Invoices",
      description: "Resolve queries regarding payments, invoices, or financial reporting.",
      icon: FileText,
      action: "Billing Desk",
      link: "mailto:accounts@skywardhr.com"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Support | How can we help you?", "description": "Get help with Skyward HR Service. Access customer support, candidate help, and technical documentation." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-32 pb-24 bg-background"> <div class="container-custom"> <div class="max-w-4xl mb-20"> <div class="inline-flex items-center px-4 py-2 rounded-full bg-primary-600/10 text-primary-600 text-sm font-bold mb-6"> ${renderComponent($$result2, "MessageSquare", MessageSquare, { "size": 16, "className": "mr-2" })}
Support Center
</div> <h1 class="text-5xl md:text-7xl font-bold text-text-primary mb-8 tracking-tight leading-[1.1]">How can we <span class="text-primary-600">help</span> you?</h1> <p class="text-2xl text-text-secondary leading-relaxed font-medium">
Whether you're an enterprise client or a candidate, our team is here to ensure your experience with Skyward is seamless.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"> ${supportChannels.map((channel) => renderTemplate`<div class="p-10 rounded-[40px] bg-surface border border-border hover:border-primary-100 transition-all group"> <div class="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-8 group-hover:scale-110 transition-transform"> ${renderComponent($$result2, "channel.icon", channel.icon, { "size": 32 })} </div> <h3 class="text-2xl font-bold text-text-primary mb-4">${channel.title}</h3> <p class="text-text-secondary leading-relaxed mb-8 font-medium">${channel.description}</p> <a${addAttribute(channel.link, "href")}> ${renderComponent($$result2, "Button", Button, { "variant": "outline", "className": "w-full rounded-full" }, { "default": ($$result3) => renderTemplate`${channel.action}` })} </a> </div>`)} </div> <section class="bg-card border border-border rounded-[48px] p-12 lg:p-20 relative overflow-hidden"> <div class="grid lg:grid-cols-2 gap-16 items-center"> <div> <h2 class="text-text-primary mb-6">Direct <span class="text-primary-600">Contact.</span></h2> <div class="space-y-8"> <div class="flex items-start gap-6"> <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 shrink-0"> ${renderComponent($$result2, "Phone", Phone, { "size": 24 })} </div> <div> <div class="text-sm text-text-muted font-bold uppercase tracking-wider mb-1">Call Us</div> <div class="text-xl font-bold text-text-primary">+91 124 456 7890</div> <div class="text-sm text-text-secondary mt-1">Mon-Sat, 9am - 7pm IST</div> </div> </div> <div class="flex items-start gap-6"> <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 shrink-0"> ${renderComponent($$result2, "Mail", Mail, { "size": 24 })} </div> <div> <div class="text-sm text-text-muted font-bold uppercase tracking-wider mb-1">Email Us</div> <div class="text-xl font-bold text-text-primary">support@skywardhr.com</div> <div class="text-sm text-text-secondary mt-1">Typically responds within 4 hours</div> </div> </div> </div> <div class="mt-12"> <a href="/faq" class="inline-flex items-center gap-2 text-primary-600 font-bold hover:underline">
Browse our FAQs ${renderComponent($$result2, "ExternalLink", ExternalLink, { "size": 16 })} </a> </div> </div> <div class="bg-surface border border-border p-8 rounded-[32px] shadow-premium"> <h3 class="text-2xl font-bold text-text-primary mb-6">Quick Inquiry</h3> <form class="space-y-4"> <div class="grid grid-cols-2 gap-4"> <div class="space-y-2"> <label class="text-sm font-bold text-text-secondary ml-1">Name</label> <input type="text" placeholder="John Doe" class="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary-600 outline-none transition-all"> </div> <div class="space-y-2"> <label class="text-sm font-bold text-text-secondary ml-1">Email</label> <input type="email" placeholder="john@example.com" class="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary-600 outline-none transition-all"> </div> </div> <div class="space-y-2"> <label class="text-sm font-bold text-text-secondary ml-1">Subject</label> <select class="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary-600 outline-none transition-all"> <option>Deployment Query</option> <option>Payment Issue</option> <option>Account Access</option> <option>Other</option> </select> </div> <div class="space-y-2"> <label class="text-sm font-bold text-text-secondary ml-1">Message</label> <textarea rows="4" placeholder="How can we help?" class="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary-600 outline-none transition-all"></textarea> </div> ${renderComponent($$result2, "Button", Button, { "variant": "primary", "className": "w-full py-4 rounded-xl" }, { "default": ($$result3) => renderTemplate`
Send Message
` })} </form> </div> </div> <div class="absolute -top-24 -right-24 w-96 h-96 bg-primary-600/5 blur-[120px] rounded-full"></div> </section> </div> </main> ${renderComponent($$result2, "CTA", CTA, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/CTA", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", Footer, {})} ` })}`;
}, "D:/skyward/src/pages/support.astro", void 0);
const $$file = "D:/skyward/src/pages/support.astro";
const $$url = "/support";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Support,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
