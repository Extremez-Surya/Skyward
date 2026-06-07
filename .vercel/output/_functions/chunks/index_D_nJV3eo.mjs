import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_BJdmQt7F.mjs";
import { $ as $$Layout } from "./Layout_BLze-jQV.mjs";
import { H as Header, F as Footer } from "./Footer_C1Kqf_vw.mjs";
import { C as CTA } from "./CTA_RafQM8OH.mjs";
import { TrendingUp, PieChart, BarChart2 } from "lucide-react";
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const reports = [
    {
      title: "Q1 2026 Logistics Market Report",
      summary: "Analysis of market trends, wage benchmarks, and labor availability.",
      icon: TrendingUp
    },
    {
      title: "Staffing Trends in Quick Commerce",
      summary: "How rapid delivery needs are shaping the gig workforce.",
      icon: PieChart
    },
    {
      title: "Annual Workforce Compliance Audit",
      summary: "Key findings and regulatory updates for the fiscal year.",
      icon: BarChart2
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Industry Reports | Skyward HR Service" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-32 pb-20"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="mb-16"> <a href="/resources" class="text-primary font-semibold mb-4 inline-block">← Back to Resources</a> <h1 class="text-4xl md:text-6xl font-bold text-white tracking-tight">Industry <span class="text-primary">Reports</span></h1> </div> <div class="grid grid-cols-1 gap-6"> ${reports.map((report) => renderTemplate`<div class="p-8 bg-surface border border-surface-hover rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 hover:border-primary/30 transition-all group"> <div class="flex items-center gap-6"> <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors"> ${renderComponent($$result2, "report.icon", report.icon, { "size": 32 })} </div> <div> <h3 class="text-2xl font-bold mb-2">${report.title}</h3> <p class="text-text-muted">${report.summary}</p> </div> </div> <button class="px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-hover transition-colors whitespace-nowrap">
Access Report
</button> </div>`)} </div> <div class="mt-20 p-12 bg-surface/50 border border-surface-hover rounded-3xl text-center"> <h2 class="text-2xl font-bold mb-4">Request a Custom Report</h2> <p class="text-text-muted mb-8 max-w-2xl mx-auto">
Need specific market data or wage benchmarks for your region? Our analysts can help you with a tailored report for your business needs.
</p> <a href="/contact" class="inline-flex px-8 py-3 bg-surface border border-surface-hover text-text-main font-semibold rounded-full hover:bg-surface-hover transition-colors">
Talk to an Analyst
</a> </div> </div> </main> ${renderComponent($$result2, "CTA", CTA, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/CTA", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", Footer, {})} ` })}`;
}, "D:/skyward/src/pages/resources/reports/index.astro", void 0);
const $$file = "D:/skyward/src/pages/resources/reports/index.astro";
const $$url = "/resources/reports";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
