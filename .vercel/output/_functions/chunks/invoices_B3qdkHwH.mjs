import { c as createComponent } from "./astro-component_bcg0hk54.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_rsVvLGim.mjs";
import { r as renderComponent } from "./entrypoint_B9LsAA9s.mjs";
import { $ as $$DashboardLayout } from "./DashboardLayout_D-9FgQK8.mjs";
import { g as getUserProfile } from "./user_C13cBgEN.mjs";
const $$Invoices = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Invoices;
  const { userId } = Astro2.locals.auth();
  if (!userId) return Astro2.redirect("/sign-in");
  const profile = await getUserProfile(userId);
  if (!profile) return Astro2.redirect("/dashboard");
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Invoices", "role": "client" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-12 bg-surface border border-surface/50 rounded-2xl text-center"> <p class="text-text-muted">This module is under development.</p> </div> ` })}`;
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
