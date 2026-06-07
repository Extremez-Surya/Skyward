import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_C1ExgZnB.mjs";
import { $ as $$Layout } from "./Layout_7i-Rx9MZ.mjs";
import { H as Header, F as Footer } from "./Footer_JJNsdXAs.mjs";
import { C as CTA } from "./CTA_lFXRS-ma.mjs";
import { BarChart3, Activity, Zap, ShieldCheck, TrendingUp, PieChart, Cpu } from "lucide-react";
const $$Analytics = createComponent(($$result, $$props, $$slots) => {
  const analyticalFeatures = [
    {
      title: "Real-time Attendance",
      description: "Track daily deployments with GPS-verified attendance and instant reporting.",
      icon: Activity
    },
    {
      title: "Deployment Velocity",
      description: "Analyze the speed of fulfillment across different zones and job roles.",
      icon: Zap
    },
    {
      title: "Compliance Health",
      description: "A dedicated score reflecting statutory adherence and audit readiness.",
      icon: ShieldCheck
    },
    {
      title: "Cost Optimization",
      description: "Identify patterns to reduce operational overhead and improve workforce ROI.",
      icon: TrendingUp
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Analytics | Data-Driven Workforce Intelligence", "description": "Gain deep insights into your workforce operations. Real-time metrics, deployment tracking, and performance analytics with Skyward." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-32 pb-24 bg-background"> <div class="container-custom"> <div class="max-w-4xl mb-20"> <div class="inline-flex items-center px-4 py-2 rounded-full bg-primary-600/10 text-primary-600 text-sm font-bold mb-6"> ${renderComponent($$result2, "BarChart3", BarChart3, { "size": 16, "className": "mr-2" })}
Intelligence Platform
</div> <h1 class="text-5xl md:text-7xl font-bold text-text-primary mb-8 tracking-tight leading-[1.1]">Decisions driven by <span class="text-primary-600">data.</span></h1> <p class="text-2xl text-text-secondary leading-relaxed font-medium">
Stop guessing. Our enterprise-grade analytics engine provides deep visibility into your workforce operations, allowing you to optimize performance in real-time.
</p> </div> <!-- Feature Grid --> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32"> ${analyticalFeatures.map((feature) => renderTemplate`<div class="p-10 rounded-[40px] bg-surface border border-border hover:border-primary-100 transition-all group flex gap-8"> <div class="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 shrink-0 group-hover:scale-110 transition-transform"> ${renderComponent($$result2, "feature.icon", feature.icon, { "size": 32 })} </div> <div> <h3 class="text-2xl font-bold text-text-primary mb-4">${feature.title}</h3> <p class="text-text-secondary leading-relaxed font-medium">${feature.description}</p> </div> </div>`)} </div> <!-- Visualization Section --> <section class="bg-card border border-border rounded-[48px] p-12 lg:p-20 mb-24 relative overflow-hidden"> <div class="grid lg:grid-cols-2 gap-16 items-center"> <div> <h2 class="text-text-primary mb-8">The <span class="text-primary-600">Command Center</span> for your workforce.</h2> <p class="text-xl text-text-secondary leading-relaxed mb-10 font-medium">
Every client gets a customized dashboard that visualizes the metrics that matter most to their industry. From logistics turnaround times to retail footfall alignment.
</p> <ul class="space-y-6"> ${[
    "Automated daily/weekly reporting",
    "Custom KPI tracking and alerts",
    "Historical trend analysis",
    "Geographic deployment heatmaps"
  ].map((item) => renderTemplate`<li class="flex items-center gap-3 text-lg font-bold text-text-primary"> <div class="w-6 h-6 bg-primary-600/10 rounded-full flex items-center justify-center text-primary-600"> ${renderComponent($$result2, "PieChart", PieChart, { "size": 14 })} </div> ${item} </li>`)} </ul> </div> <div class="relative"> <div class="aspect-square bg-surface border border-border rounded-[40px] shadow-premium p-8 flex items-center justify-center overflow-hidden"> <!-- Placeholder for a dashboard visual --> <div class="w-full h-full border-2 border-dashed border-border rounded-3xl flex flex-col items-center justify-center text-text-muted"> ${renderComponent($$result2, "Cpu", Cpu, { "size": 64, "className": "mb-4 opacity-20" })} <span class="font-bold text-sm tracking-widest uppercase">Visual Intelligence Engine</span> </div> <!-- Floating UI elements for effect --> <div class="absolute top-10 -left-10 p-4 bg-primary-600 rounded-2xl shadow-xl animate-bounce" style="animation-duration: 4s;"> ${renderComponent($$result2, "Activity", Activity, { "className": "text-white", "size": 24 })} </div> <div class="absolute bottom-10 -right-10 p-4 bg-background border border-border rounded-2xl shadow-xl animate-pulse"> ${renderComponent($$result2, "TrendingUp", TrendingUp, { "className": "text-primary-600", "size": 24 })} </div> </div> </div> </div> </section> </div> </main> ${renderComponent($$result2, "CTA", CTA, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/CTA", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", Footer, {})} ` })}`;
}, "D:/skyward/src/pages/analytics.astro", void 0);
const $$file = "D:/skyward/src/pages/analytics.astro";
const $$url = "/analytics";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Analytics,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
