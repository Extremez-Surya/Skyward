import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_BJdmQt7F.mjs";
import { $ as $$DashboardLayout } from "./DashboardLayout_BUz5DuYj.mjs";
import { g as getUserProfile } from "./user_B_TByeCD.mjs";
import { A as AnalyticsChart } from "./AnalyticsChart_BBp92HmK.mjs";
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
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Client Portal", "role": profile.role }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"> <div class="p-6 bg-surface border border-surface/50 rounded-2xl"> <h3 class="text-sm font-medium text-text-muted mb-2">Active Workforce</h3> <p class="text-3xl font-bold">42</p> </div> <div class="p-6 bg-surface border border-surface/50 rounded-2xl"> <h3 class="text-sm font-medium text-text-muted mb-2">Today's Attendance</h3> <p class="text-3xl font-bold">38/42</p> <div class="mt-2 text-xs text-yellow-500 font-medium">4 delayed/absent</div> </div> <div class="p-6 bg-surface border border-surface/50 rounded-2xl"> <h3 class="text-sm font-medium text-text-muted mb-2">Pending Requests</h3> <p class="text-3xl font-bold">2</p> <div class="mt-2 text-xs text-blue-500 font-medium">1 replacement, 1 new requirement</div> </div> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"> ${renderComponent($$result2, "AnalyticsChart", AnalyticsChart, { "client:load": true, "title": "Weekly Attendance Rate (%)", "data": attendanceTrend, "color": "bg-accent", "suffix": "%", "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/AnalyticsChart", "client:component-export": "default" })} <div class="p-8 bg-primary/5 border border-primary/20 rounded-2xl flex flex-col justify-center"> <h2 class="text-2xl font-bold mb-4">Quick Actions</h2> <div class="grid grid-cols-2 gap-4"> <a href="/client/requests" class="p-4 bg-surface border border-surface-hover rounded-xl text-center hover:border-primary/50 transition-colors"> <span class="block text-sm font-bold">Raise Request</span> </a> <a href="/client/attendance" class="p-4 bg-surface border border-surface-hover rounded-xl text-center hover:border-primary/50 transition-colors"> <span class="block text-sm font-bold">View Reports</span> </a> </div> </div> </div> <div class="mt-12"> <h2 class="text-xl font-bold mb-6">Recent Attendance</h2> <div class="bg-surface border border-surface/50 rounded-2xl overflow-hidden text-center p-12"> <p class="text-text-muted">Attendance data will appear here.</p> </div> </div> ` })}`;
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
