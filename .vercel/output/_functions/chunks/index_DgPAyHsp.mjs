import { c as createComponent } from "./astro-component_bcg0hk54.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_rsVvLGim.mjs";
import { r as renderComponent } from "./entrypoint_B9LsAA9s.mjs";
import { $ as $$DashboardLayout } from "./DashboardLayout_D-9FgQK8.mjs";
import { g as getUserProfile } from "./user_C13cBgEN.mjs";
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const { userId } = Astro2.locals.auth();
  if (!userId) {
    return Astro2.redirect("/sign-in");
  }
  const profile = await getUserProfile(userId);
  if (!profile || profile.role !== "client") {
    return Astro2.redirect("/dashboard");
  }
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Client Portal", "role": "client" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-3 gap-6"> <div class="p-6 bg-surface border border-surface/50 rounded-2xl"> <h3 class="text-sm font-medium text-text-muted mb-2">Active Workforce</h3> <p class="text-3xl font-bold">42</p> </div> <div class="p-6 bg-surface border border-surface/50 rounded-2xl"> <h3 class="text-sm font-medium text-text-muted mb-2">Today's Attendance</h3> <p class="text-3xl font-bold">38/42</p> <div class="mt-2 text-xs text-yellow-500 font-medium">4 delayed/absent</div> </div> <div class="p-6 bg-surface border border-surface/50 rounded-2xl"> <h3 class="text-sm font-medium text-text-muted mb-2">Pending Requests</h3> <p class="text-3xl font-bold">2</p> <div class="mt-2 text-xs text-blue-500 font-medium">1 replacement, 1 new requirement</div> </div> </div> <div class="mt-12"> <h2 class="text-xl font-bold mb-6">Recent Attendance</h2> <div class="bg-surface border border-surface/50 rounded-2xl overflow-hidden text-center p-12"> <p class="text-text-muted">Attendance data will appear here.</p> </div> </div> ` })}`;
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
