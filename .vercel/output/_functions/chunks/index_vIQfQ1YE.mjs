import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead, _ as addAttribute } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_Eo3uqCG1.mjs";
import { $ as $$DashboardLayout } from "./DashboardLayout_Dvff3abM.mjs";
import { g as getUserProfile } from "./user_QsKzDSkD.mjs";
import { A as AnalyticsChart } from "./AnalyticsChart_XtbgeqQ3.mjs";
import { Zap, Users, CalendarCheck, Clock, ArrowRight, FileText } from "lucide-react";
import { B as Button } from "./Button_V0yuJDF0.mjs";
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const { userId } = Astro2.locals.auth();
  if (!userId) {
    return Astro2.redirect("/sign-in");
  }
  const profile = await getUserProfile(userId);
  if (!profile || profile.role !== "client" && profile.role !== "admin" && profile.role !== "manager") {
    return Astro2.redirect("/dashboard");
  }
  const attendanceTrend = [
    { label: "Mon", value: 95 },
    { label: "Tue", value: 92 },
    { label: "Wed", value: 98 },
    { label: "Thu", value: 94 },
    { label: "Fri", value: 90 },
    { label: "Sat", value: 85 },
    { label: "Sun", value: 88 }
  ];
  const kpis = [
    { label: "Total Personnel", value: "42", change: "+4 this month", icon: Users, color: "text-primary-600", bg: "bg-primary-50" },
    { label: "Daily Attendance", value: "92.4%", change: "Above target", icon: CalendarCheck, color: "text-success", bg: "bg-success/10" },
    { label: "Deployment Time", value: "4.2h", change: "-15% avg", icon: Clock, color: "text-accent", bg: "bg-accent/10" }
  ];
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Client Overview" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-10 flex items-center justify-between"> <div> <h1 class="text-3xl font-bold text-text-primary tracking-tight">Enterprise Overview</h1> <p class="text-text-secondary font-medium">Welcome back. Here's what's happening across your locations.</p> </div> <div class="flex items-center gap-3"> ${renderComponent($$result2, "Button", Button, { "variant": "secondary", "size": "sm" }, { "default": async ($$result3) => renderTemplate`Download Report` })} ${renderComponent($$result2, "Button", Button, { "variant": "primary", "size": "sm", "rightIcon": Zap }, { "default": async ($$result3) => renderTemplate`New Request` })} </div> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"> ${kpis.map((kpi) => renderTemplate`<div class="p-8 bg-white border border-border rounded-2xl shadow-premium hover:shadow-lifted transition-all group"> <div class="flex items-start justify-between mb-6"> <div${addAttribute(`p-3 rounded-xl ${kpi.bg} ${kpi.color} group-hover:scale-110 transition-transform`, "class")}> ${renderComponent($$result2, "kpi.icon", kpi.icon, { "size": 24 })} </div> <div class="text-[10px] font-bold text-text-muted uppercase tracking-widest bg-surface px-2 py-1 rounded">24h Change</div> </div> <div class="text-4xl font-bold text-text-primary mb-2">${kpi.value}</div> <div class="text-sm font-bold text-text-secondary">${kpi.label}</div> <div class="mt-4 flex items-center gap-2 text-xs font-bold text-success"> <span class="px-2 py-0.5 bg-success/10 rounded-full">${kpi.change}</span> </div> </div>`)} </div> <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12"> <div class="lg:col-span-8"> ${renderComponent($$result2, "AnalyticsChart", AnalyticsChart, { "client:load": true, "title": "Workforce Attendance Trend", "data": attendanceTrend, "color": "bg-primary-600", "suffix": "%", "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/AnalyticsChart", "client:component-export": "default" })} </div> <div class="lg:col-span-4 flex flex-col gap-8"> <div class="p-8 bg-text-primary rounded-2xl text-white relative overflow-hidden flex-1"> <div class="relative z-10"> <h3 class="text-xl font-bold mb-4">Quick Actions</h3> <div class="space-y-4"> <a href="/client/requests" class="flex items-center justify-between p-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl transition-all group"> <div class="flex items-center gap-3"> ${renderComponent($$result2, "Users", Users, { "size": 18, "class": "text-primary-400" })} <span class="font-bold text-sm">Raise Workforce Request</span> </div> ${renderComponent($$result2, "ArrowRight", ArrowRight, { "size": 16, "class": "opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" })} </a> <a href="/client/attendance" class="flex items-center justify-between p-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl transition-all group"> <div class="flex items-center gap-3"> ${renderComponent($$result2, "FileText", FileText, { "size": 18, "class": "text-primary-400" })} <span class="font-bold text-sm">View Monthly Invoices</span> </div> ${renderComponent($$result2, "ArrowRight", ArrowRight, { "size": 16, "class": "opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" })} </a> </div> </div> <div class="absolute -bottom-12 -right-12 w-48 h-48 bg-primary-600/20 blur-[60px] rounded-full pointer-events-none"></div> </div> <div class="p-8 bg-card border border-border rounded-2xl flex-1 shadow-premium"> <h3 class="text-sm font-bold text-text-muted uppercase tracking-widest mb-6">Recent Activity</h3> <div class="space-y-6"> ${[1, 2, 3].map((i) => renderTemplate`<div class="flex gap-4"> <div class="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center shrink-0"> ${renderComponent($$result2, "Users", Users, { "size": 18, "className": "text-text-secondary" })} </div> <div> <div class="text-sm font-bold text-text-primary">New requirement posted</div> <div class="text-xs text-text-muted">Gurgaon Location • 2h ago</div> </div> </div>`)} </div> </div> </div> </div> ` })}
t>`;
}, "D:/skyward/src/pages/client/index.astro", void 0);
const $$file = "D:/skyward/src/pages/client/index.astro";
const $$url = "/client";
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
