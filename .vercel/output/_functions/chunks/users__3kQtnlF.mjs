import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead, _ as addAttribute } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_C1ExgZnB.mjs";
import { $ as $$DashboardLayout } from "./DashboardLayout_DvujC7xG.mjs";
import { g as getUserProfile } from "./user_QsKzDSkD.mjs";
import { s as supabase } from "./supabase_CCoL1XUf.mjs";
import { Shield } from "lucide-react";
import { B as Button } from "./Button_V0yuJDF0.mjs";
const $$Users = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Users;
  const { userId } = Astro2.locals.auth();
  if (!userId) return Astro2.redirect("/sign-in");
  const profile = await getUserProfile(userId);
  if (!profile || profile.role !== "admin") return Astro2.redirect("/dashboard");
  const { data: allUsers } = await supabase.from("users").select("*").order("created_at", { ascending: false });
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "User Management" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-10 flex items-center justify-between"> <div> <h1 class="text-3xl font-bold text-text-primary tracking-tight">User Management</h1> <p class="text-text-secondary font-medium">Overview of all registered platform accounts.</p> </div> <div class="flex items-center gap-3"> ${renderComponent($$result2, "Button", Button, { "variant": "secondary", "size": "sm" }, { "default": async ($$result3) => renderTemplate`Invite User` })} </div> </div> <div class="bg-card border border-border rounded-[32px] overflow-hidden shadow-premium"> <table class="w-full text-left"> <thead> <tr class="border-b border-border bg-surface"> <th class="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-text-muted">Account Holder</th> <th class="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-text-muted">Role</th> <th class="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-text-muted">Status</th> <th class="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-text-muted text-right">Registered On</th> </tr> </thead> <tbody class="divide-y divide-border"> ${allUsers?.map((user) => renderTemplate`<tr class="hover:bg-primary-50/50 transition-colors group"> <td class="px-8 py-5"> <div class="flex items-center gap-4"> <div class="w-10 h-10 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center font-bold text-sm"> ${user.full_name ? user.full_name.charAt(0) : "?"} </div> <div class="flex flex-col"> <span class="font-bold text-text-primary text-sm">${user.full_name || "Anonymous User"}</span> <span class="text-xs font-medium text-text-secondary">${user.email}</span> </div> </div> </td> <td class="px-8 py-5"> <span${addAttribute(`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full flex w-fit items-center gap-1.5 ${user.role === "admin" ? "bg-primary-600 text-white" : user.role === "manager" ? "bg-accent/10 text-accent" : "bg-surface border border-border text-text-secondary"}`, "class")}> ${user.role === "admin" && renderTemplate`${renderComponent($$result2, "Shield", Shield, { "size": 10 })}`} ${user.role} </span> </td> <td class="px-8 py-5"> <span${addAttribute(`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full ${user.status === "active" ? "bg-success/10 text-success" : "bg-danger/10 text-danger"}`, "class")}> ${user.status} </span> </td> <td class="px-8 py-5 text-right text-xs font-bold text-text-muted"> ${new Date(user.created_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })} </td> </tr>`)} </tbody> </table> </div> ` })}`;
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
