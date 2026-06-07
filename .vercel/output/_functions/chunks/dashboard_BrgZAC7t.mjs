import { c as createComponent } from "./astro-component_bcg0hk54.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_rsVvLGim.mjs";
import { r as renderComponent } from "./entrypoint_B9LsAA9s.mjs";
import { $ as $$Layout } from "./Layout_BkNHB0md.mjs";
import { g as getUserProfile } from "./user_C13cBgEN.mjs";
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Dashboard;
  const { userId } = Astro2.locals.auth();
  if (!userId) {
    return Astro2.redirect("/sign-in");
  }
  const profile = await getUserProfile(userId);
  if (!profile) {
    return Astro2.redirect("/");
  }
  switch (profile.role) {
    case "admin":
    case "manager":
      return Astro2.redirect("/admin");
    case "client":
      return Astro2.redirect("/client");
    case "candidate":
      return Astro2.redirect("/candidate");
    default:
      return Astro2.redirect("/");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Redirecting..." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex items-center justify-center min-h-screen"> <p>Redirecting to your dashboard...</p> </div> ` })}`;
}, "D:/skyward/src/pages/dashboard.astro", void 0);
const $$file = "D:/skyward/src/pages/dashboard.astro";
const $$url = "/dashboard";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
