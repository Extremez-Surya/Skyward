import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_C1ExgZnB.mjs";
import { $ as $$DashboardLayout } from "./DashboardLayout_DvujC7xG.mjs";
import { g as getUserProfile } from "./user_QsKzDSkD.mjs";
const $$Deployments = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Deployments;
  const { userId } = Astro2.locals.auth();
  if (!userId) return Astro2.redirect("/sign-in");
  const profile = await getUserProfile(userId);
  if (!profile) return Astro2.redirect("/dashboard");
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Deployments", "role": profile.role }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-12 bg-surface border border-surface/50 rounded-2xl text-center"> <p class="text-text-muted">This module is under development.</p> </div> ` })}`;
}, "D:/skyward/src/pages/hr/deployments.astro", void 0);
const $$file = "D:/skyward/src/pages/hr/deployments.astro";
const $$url = "/hr/deployments";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Deployments,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
