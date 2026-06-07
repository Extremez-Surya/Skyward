import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_C1ExgZnB.mjs";
import { $ as $$DashboardLayout } from "./DashboardLayout_DvujC7xG.mjs";
import { g as getUserProfile } from "./user_QsKzDSkD.mjs";
const $$Invoices = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Invoices;
  const { userId } = Astro2.locals.auth();
  if (!userId) return Astro2.redirect("/sign-in");
  const profile = await getUserProfile(userId);
  if (!profile) return Astro2.redirect("/dashboard");
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Billing & Invoices" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-10"> <h1 class="text-3xl font-bold text-text-primary tracking-tight">Billing & Invoices</h1> <p class="text-text-secondary font-medium">Manage your payments and download GST-compliant invoices.</p> </div> <div class="p-20 bg-card border border-border rounded-[32px] shadow-premium text-center"> <div class="w-20 h-20 bg-primary-50 rounded-[24px] flex items-center justify-center text-primary-600 mx-auto mb-8"> <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line> </svg> </div> <h2 class="text-2xl font-bold text-text-primary mb-4">Module Under Development</h2> <p class="text-text-secondary max-w-md mx-auto leading-relaxed font-medium">
Our automated billing system is being finalized to provide you with instant access to all financial records.
</p> </div> ` })}`;
}, "D:/skyward/src/pages/client/invoices.astro", void 0);
const $$file = "D:/skyward/src/pages/client/invoices.astro";
const $$url = "/client/invoices";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Invoices,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
