import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead, _ as addAttribute } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_BJdmQt7F.mjs";
import { $ as $$DashboardLayout } from "./DashboardLayout_BUz5DuYj.mjs";
import { g as getUserProfile } from "./user_B_TByeCD.mjs";
import { s as supabase } from "./supabase_BQIL2gf4.mjs";
const $$Users = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Users;
  const { userId } = Astro2.locals.auth();
  if (!userId) return Astro2.redirect("/sign-in");
  const profile = await getUserProfile(userId);
  if (!profile || profile.role !== "admin") return Astro2.redirect("/dashboard");
  const { data: allUsers } = await supabase.from("users").select("*").order("created_at", { ascending: false });
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "User Management", "role": "admin" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-surface border border-surface/50 rounded-2xl overflow-hidden"> <table class="w-full text-left"> <thead> <tr class="border-b border-surface/50 bg-surface/50"> <th class="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-muted">User</th> <th class="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-muted">Email</th> <th class="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-muted">Role</th> <th class="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-muted">Status</th> <th class="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-muted">Joined</th> </tr> </thead> <tbody class="divide-y divide-surface/50"> ${allUsers?.map((user) => renderTemplate`<tr class="hover:bg-primary/5 transition-colors"> <td class="px-6 py-4 text-text-main font-medium">${user.full_name || "N/A"}</td> <td class="px-6 py-4 text-text-muted">${user.email}</td> <td class="px-6 py-4"> <span class="px-2 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-500 capitalize"> ${user.role} </span> </td> <td class="px-6 py-4"> <span${addAttribute(`px-2 py-1 text-xs font-medium rounded-full ${user.status === "active" ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"}`, "class")}> ${user.status} </span> </td> <td class="px-6 py-4 text-text-muted"> ${new Date(user.created_at).toLocaleDateString()} </td> </tr>`)} </tbody> </table> </div> ` })}`;
}, "D:/skyward/src/pages/admin/users.astro", void 0);
const $$file = "D:/skyward/src/pages/admin/users.astro";
const $$url = "/admin/users";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Users,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
