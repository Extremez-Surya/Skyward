import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import "./sequence_C1wAh64A.mjs";
import "clsx";
import "./Layout_OdHJPE5s.mjs";
import { g as getUserProfile } from "./user_QsKzDSkD.mjs";
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
      return Astro2.redirect("/admin");
    case "manager":
      return Astro2.redirect("/hr");
    case "client":
      return Astro2.redirect("/client");
    case "candidate":
      return Astro2.redirect("/candidate");
    default:
      return Astro2.redirect("/");
  }
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
