import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_B82yBaQn.mjs";
import { $ as $$Layout } from "./Layout_Cf66BlEQ.mjs";
import { H as Header, F as Footer } from "./Footer_BDsLyvif.mjs";
import { C as CTA } from "./CTA_lFXRS-ma.mjs";
import { ShieldCheck, Landmark, FileCheck, CheckCircle2, AlertCircle, Gavel } from "lucide-react";
const $$Compliance = createComponent(($$result, $$props, $$slots) => {
  const complianceAreas = [
    {
      title: "Statutory Compliance",
      items: ["PF & ESI Management", "Labor Law Adherence", "Minimum Wage Compliance", "Professional Tax Management"],
      icon: Landmark
    },
    {
      title: "Digital Security",
      items: ["Data Privacy Protocols", "Secure Document Storage", "Encrypted Client Portals", "Regular Security Audits"],
      icon: ShieldCheck
    },
    {
      title: "Operational Excellence",
      items: ["ISO Certified Processes", "Transparent Reporting", "Anti-Bribery Policy", "Ethical Sourcing"],
      icon: FileCheck
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Compliance | Enterprise-Grade Standards", "description": "Skyward HR Service maintains 100% compliance across all operations. Learn about our statutory and regulatory standards." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-32 pb-24 bg-background"> <div class="container-custom"> <div class="max-w-4xl mb-20"> <div class="inline-flex items-center px-4 py-2 rounded-full bg-primary-600/10 text-primary-600 text-sm font-bold mb-6"> ${renderComponent($$result2, "ShieldCheck", ShieldCheck, { "size": 16, "className": "mr-2" })}
Regulatory Excellence
</div> <h1 class="text-5xl md:text-7xl font-bold text-text-primary mb-8 tracking-tight leading-[1.1]">Built on <span class="text-primary-600">integrity</span> and law.</h1> <p class="text-2xl text-text-secondary leading-relaxed font-medium">
Compliance isn't a checkbox; it's our foundation. We ensure 100% adherence to all regional and national labor regulations, protecting both our clients and our workforce.
</p> </div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24"> ${complianceAreas.map((area) => renderTemplate`<div class="p-10 rounded-[40px] bg-surface border border-border group"> <div class="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-8 group-hover:rotate-6 transition-transform"> ${renderComponent($$result2, "area.icon", area.icon, { "size": 32 })} </div> <h3 class="text-2xl font-bold text-text-primary mb-6">${area.title}</h3> <ul class="space-y-4"> ${area.items.map((item) => renderTemplate`<li class="flex items-center gap-3 text-text-secondary font-medium"> ${renderComponent($$result2, "CheckCircle2", CheckCircle2, { "size": 18, "className": "text-primary-600 shrink-0" })} ${item} </li>`)} </ul> </div>`)} </div> <section class="bg-card border border-border rounded-[48px] p-12 lg:p-20 relative overflow-hidden mb-24"> <div class="max-w-3xl"> <h2 class="text-text-primary mb-8">The Skyward <span class="text-primary-600">Compliance</span> Guarantee.</h2> <p class="text-xl text-text-secondary leading-relaxed mb-10 font-medium">
We provide our clients with real-time access to compliance dashboards. From ECR copies to salary disbursement proofs, every document is verifiable and audit-ready at any moment.
</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div class="flex items-start gap-4 p-6 rounded-3xl bg-surface border border-border"> ${renderComponent($$result2, "AlertCircle", AlertCircle, { "className": "text-primary-600 shrink-0 mt-1", "size": 24 })} <div> <div class="font-bold text-text-primary mb-1">Zero Penalty Track Record</div> <p class="text-sm text-text-secondary">Our proactive auditing ensures zero regulatory penalties for our clients.</p> </div> </div> <div class="flex items-start gap-4 p-6 rounded-3xl bg-surface border border-border"> ${renderComponent($$result2, "Gavel", Gavel, { "className": "text-primary-600 shrink-0 mt-1", "size": 24 })} <div> <div class="font-bold text-text-primary mb-1">Legal Support</div> <p class="text-sm text-text-secondary">Full legal coverage and representation for labor-related inquiries.</p> </div> </div> </div> </div> </section> <!-- Certifications --> <div class="text-center"> <h3 class="text-sm font-bold text-text-muted uppercase tracking-widest mb-10">Our Certifications & Memberships</h3> <div class="flex flex-wrap justify-center items-center gap-12 grayscale opacity-60"> <div class="text-2xl font-black italic text-text-primary">ISO 9001:2015</div> <div class="text-2xl font-black italic text-text-primary">ISF MEMBER</div> <div class="text-2xl font-black italic text-text-primary">NASSCOM</div> <div class="text-2xl font-black italic text-text-primary">MSME REGISTERED</div> </div> </div> </div> </main> ${renderComponent($$result2, "CTA", CTA, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/CTA", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", Footer, {})} ` })}`;
}, "D:/skyward/src/pages/compliance.astro", void 0);
const $$file = "D:/skyward/src/pages/compliance.astro";
const $$url = "/compliance";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Compliance,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
