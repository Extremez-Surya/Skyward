import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead, _ as addAttribute } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_HIjeTOta.mjs";
import { $ as $$DashboardLayout } from "./DashboardLayout_D6hQ14cC.mjs";
import { g as getUserProfile } from "./user_B_TByeCD.mjs";
import { s as supabase } from "./supabase_BQIL2gf4.mjs";
import { A as AITools } from "./AITools_ED01WEGE.mjs";
import { A as AnalyticsChart } from "./AnalyticsChart_XtbgeqQ3.mjs";
import { Zap, Users, UserPlus, Briefcase, FileText } from "lucide-react";
import { B as Button } from "./Button_CrV2lgV8.mjs";
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const { userId } = Astro2.locals.auth();
  if (!userId) {
    return Astro2.redirect("/sign-in");
  }
  const profile = await getUserProfile(userId);
  if (!profile || profile.role !== "admin") {
    return Astro2.redirect("/dashboard");
  }
  const workforceData = [
    { label: "Jan", value: 45 },
    { label: "Feb", value: 52 },
    { label: "Mar", value: 48 },
    { label: "Apr", value: 61 },
    { label: "May", value: 55 },
    { label: "Jun", value: 67 }
  ];
  const revenueData = [
    { label: "Jan", value: 120 },
    { label: "Feb", value: 145 },
    { label: "Mar", value: 132 },
    { label: "Apr", value: 178 },
    { label: "May", value: 165 },
    { label: "Jun", value: 210 }
  ];
  const { count: activeWorkforce } = await supabase.from("deployments").select("*", { count: "exact", head: true }).eq("status", "active");
  const { count: newCandidates } = await supabase.from("candidates").select("*", { count: "exact", head: true }).eq("status", "screening");
  const { count: openRequirements } = await supabase.from("job_requirements").select("*", { count: "exact", head: true }).eq("status", "open");
  const { count: pendingInvoices } = await supabase.from("invoices").select("*", { count: "exact", head: true }).eq("status", "unpaid");
  const { data: recentDeployments } = await supabase.from("deployments").select(`
        id,
        role,
        status,
        candidates:candidate_id (full_name),
        clients:client_id (company_name)
    `).order("created_at", { ascending: false }).limit(5);
  const stats = [
    { label: "Active Workforce", value: activeWorkforce || 0, icon: Users, color: "text-primary-600", bg: "bg-primary-50" },
    { label: "New Candidates", value: newCandidates || 0, icon: UserPlus, color: "text-success", bg: "bg-success/10", sub: "Pending screening" },
    { label: "Open Jobs", value: openRequirements || 0, icon: Briefcase, color: "text-accent", bg: "bg-accent/10" },
    { label: "Unpaid Invoices", value: pendingInvoices || 0, icon: FileText, color: "text-warning", bg: "bg-warning/10" }
  ];
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Admin Command Center" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-10 flex items-center justify-between"> <div> <h1 class="text-3xl font-bold text-text-primary tracking-tight">Command Center</h1> <p class="text-text-secondary font-medium">Skyward HR Operations Overview</p> </div> <div class="flex items-center gap-3"> ${renderComponent($$result2, "Button", Button, { "variant": "secondary", "size": "sm" }, { "default": async ($$result3) => renderTemplate`Export Data` })} ${renderComponent($$result2, "Button", Button, { "variant": "primary", "size": "sm", "rightIcon": Zap }, { "default": async ($$result3) => renderTemplate`Quick Action` })} </div> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"> ${stats.map((stat) => renderTemplate`<div class="p-6 bg-card border border-border rounded-2xl shadow-premium hover:shadow-lifted transition-all group"> <div class="flex items-center gap-4 mb-4"> <div${addAttribute(`w-10 h-10 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center transition-transform group-hover:scale-110`, "class")}> ${renderComponent($$result2, "stat.icon", stat.icon, { "size": 20 })} </div> <div class="text-sm font-bold text-text-muted uppercase tracking-widest">${stat.label}</div> </div> <div class="text-3xl font-bold text-text-primary">${stat.value}</div> ${stat.sub && renderTemplate`<div class="mt-2 text-[10px] font-bold text-success uppercase tracking-wider">${stat.sub}</div>`} </div>`)} </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"> ${renderComponent($$result2, "AnalyticsChart", AnalyticsChart, { "client:visible": true, "title": "Deployment Growth", "data": workforceData, "color": "bg-primary-600", "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/AnalyticsChart", "client:component-export": "default" })} ${renderComponent($$result2, "AnalyticsChart", AnalyticsChart, { "client:visible": true, "title": "Revenue Trend (₹)", "data": revenueData, "color": "bg-accent", "suffix": "k", "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/AnalyticsChart", "client:component-export": "default" })} </div> <div class="mb-12"> <h2 class="text-xl font-bold text-text-primary mb-6 tracking-tight">Intelligent Workspace</h2> ${renderComponent($$result2, "AITools", AITools, { "role": profile.role, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/admin/AITools", "client:component-export": "default" })} </div> <div> <div class="flex items-center justify-between mb-6"> <h2 class="text-xl font-bold text-text-primary tracking-tight">Recent Deployments</h2> ${renderComponent($$result2, "Button", Button, { "variant": "ghost", "size": "sm" }, { "default": async ($$result3) => renderTemplate`View All` })} </div> <div class="bg-card border border-border rounded-2xl overflow-hidden shadow-premium"> <table class="w-full text-left"> <thead> <tr class="border-b border-border bg-surface"> <th class="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-text-muted">Candidate</th> <th class="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-text-muted">Client</th> <th class="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-text-muted">Role</th> <th class="px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-text-muted">Status</th> </tr> </thead> <tbody class="divide-y divide-border"> ${recentDeployments && recentDeployments.length > 0 ? recentDeployments.map((dep) => renderTemplate`<tr class="hover:bg-primary-50/50 transition-colors"> <td class="px-6 py-5 text-sm font-bold text-text-primary">${dep.candidates?.full_name}</td> <td class="px-6 py-5 text-sm font-medium text-text-secondary">${dep.clients?.company_name}</td> <td class="px-6 py-5 text-sm font-medium text-text-secondary">${dep.role}</td> <td class="px-6 py-5"> <span${addAttribute(`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full ${dep.status === "active" ? "bg-success/10 text-success" : "bg-text-muted/10 text-text-muted"}`, "class")}> ${dep.status} </span> </td> </tr>`) : renderTemplate`<tr> <td colspan="4" class="px-6 py-16 text-center text-text-muted font-medium">No recent deployments found in the system.</td> </tr>`} </tbody> </table> </div> </div> ` })}`;
}, "D:/skyward/src/pages/admin/index.astro", void 0);
const $$file = "D:/skyward/src/pages/admin/index.astro";
const $$url = "/admin";
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
