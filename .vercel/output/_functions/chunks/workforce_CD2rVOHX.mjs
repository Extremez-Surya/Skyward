import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_B82yBaQn.mjs";
import { $ as $$DashboardLayout } from "./DashboardLayout_BSplHS1s.mjs";
import { g as getUserProfile } from "./user_QsKzDSkD.mjs";
const $$Workforce = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Workforce;
  const { userId } = Astro2.locals.auth();
  if (!userId) return Astro2.redirect("/sign-in");
  const profile = await getUserProfile(userId);
  if (!profile) return Astro2.redirect("/dashboard");
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "My Workforce" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-10"> <h1 class="text-3xl font-bold text-text-primary tracking-tight">My Workforce</h1> <p class="text-text-secondary font-medium">Manage and view all personnel deployed at your locations.</p> </div> <div class="p-20 bg-card border border-border rounded-[32px] shadow-premium text-center"> <div class="w-20 h-20 bg-primary-50 rounded-[24px] flex items-center justify-center text-primary-600 mx-auto mb-8"> <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path> </svg> </div> <h2 class="text-2xl font-bold text-text-primary mb-4">Module Under Development</h2> <p class="text-text-secondary max-w-md mx-auto leading-relaxed font-medium">
We are currently enhancing the workforce management module to provide deeper insights into staff performance and documentation.
</p> </div> ` })}`;
}, "D:/skyward/src/pages/client/workforce.astro", void 0);
const $$file = "D:/skyward/src/pages/client/workforce.astro";
const $$url = "/client/workforce";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Workforce,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
