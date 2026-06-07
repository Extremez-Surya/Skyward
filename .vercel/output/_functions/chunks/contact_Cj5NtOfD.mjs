import { c as createComponent } from "./astro-component_bcg0hk54.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_rsVvLGim.mjs";
import { r as renderComponent } from "./entrypoint_B9LsAA9s.mjs";
import { $ as $$Layout } from "./Layout_BkNHB0md.mjs";
import { H as Header, F as Footer } from "./Footer_H-YRcbhu.mjs";
import { MapPin, Phone, Mail } from "lucide-react";
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact Us | Skyward HR Service" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-32 pb-24 flex-grow"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center max-w-3xl mx-auto mb-16"> <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">Contact Us</h1> <p class="text-xl text-text-muted">
Ready to scale your workforce? Get in touch with our team today.
</p> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto"> <div class="bg-surface border border-surface-hover p-8 rounded-2xl"> <h2 class="text-2xl font-bold text-white mb-6">Send us a message</h2> <form class="space-y-4"> <div> <label class="block text-sm font-medium text-text-muted mb-1">Full Name</label> <input type="text" class="w-full bg-background border border-surface-hover rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John Doe"> </div> <div> <label class="block text-sm font-medium text-text-muted mb-1">Company Name</label> <input type="text" class="w-full bg-background border border-surface-hover rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Acme Corp"> </div> <div> <label class="block text-sm font-medium text-text-muted mb-1">Email</label> <input type="email" class="w-full bg-background border border-surface-hover rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com"> </div> <div> <label class="block text-sm font-medium text-text-muted mb-1">Requirement</label> <textarea class="w-full bg-background border border-surface-hover rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors h-32" placeholder="Tell us about your workforce needs..."></textarea> </div> <button class="w-full py-4 rounded-lg bg-primary hover:bg-primary-hover text-white font-semibold transition-all">
Submit Request
</button> </form> </div> <div class="space-y-8"> <div class="bg-surface border border-surface-hover p-8 rounded-2xl flex items-start gap-4"> <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"> ${renderComponent($$result2, "MapPin", MapPin, { "size": 24 })} </div> <div> <h3 class="text-lg font-bold text-white mb-2">Office Address</h3> <p class="text-text-muted">123 Business Avenue, Tech Park,<br>Metropolis 500012</p> </div> </div> <div class="bg-surface border border-surface-hover p-8 rounded-2xl flex items-start gap-4"> <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"> ${renderComponent($$result2, "Phone", Phone, { "size": 24 })} </div> <div> <h3 class="text-lg font-bold text-white mb-2">Phone</h3> <p class="text-text-muted">+91 98765 43210</p> </div> </div> <div class="bg-surface border border-surface-hover p-8 rounded-2xl flex items-start gap-4"> <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"> ${renderComponent($$result2, "Mail", Mail, { "size": 24 })} </div> <div> <h3 class="text-lg font-bold text-white mb-2">Email</h3> <p class="text-text-muted">contact@skywardhr.com</p> </div> </div> </div> </div> </div> </main> ${renderComponent($$result2, "Footer", Footer, {})} ` })}`;
}, "D:/skyward/src/pages/contact.astro", void 0);
const $$file = "D:/skyward/src/pages/contact.astro";
const $$url = "/contact";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
