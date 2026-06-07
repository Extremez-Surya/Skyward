import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead, _ as addAttribute } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_Eo3uqCG1.mjs";
import { $ as $$DashboardLayout } from "./DashboardLayout_Dvff3abM.mjs";
import { g as getUserProfile } from "./user_QsKzDSkD.mjs";
import { s as supabase } from "./supabase_CCoL1XUf.mjs";
import { A as AITools } from "./AITools_BZyntWln.mjs";
import { A as AnalyticsChart } from "./AnalyticsChart_XtbgeqQ3.mjs";
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const { userId } = Astro2.locals.auth();
  if (!userId) {
    return Astro2.redirect("/sign-in");
  }
  const profile = await getUserProfile(userId);
  if (!profile || profile.role !== "admin" && profile.role !== "manager") {
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
  const { count: activeWorkforce } = await supabase.from("deployments").select("*", { count: "exact", head: true }).eq("status", "active");
  const { count: newCandidates } = await supabase.from("candidates").select("*", { count: "exact", head: true }).eq("status", "screening");
  const { count: openRequirements } = await supabase.from("job_requirements").select("*", { count: "exact", head: true }).eq("status", "open");
  const { data: recentDeployments } = await supabase.from("deployments").select(`
        id,
        role,
        status,
        candidates:candidate_id (full_name),
        clients:client_id (company_name)
    `).order("created_at", { ascending: false }).limit(5);
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "HR Management Dashboard", "role": profile.role }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"> <div class="p-6 bg-surface border border-surface/50 rounded-2xl"> <h3 class="text-sm font-medium text-text-muted mb-2">Active Workforce</h3> <p class="text-3xl font-bold">${activeWorkforce || 0}</p> </div> <div class="p-6 bg-surface border border-surface/50 rounded-2xl"> <h3 class="text-sm font-medium text-text-muted mb-2">New Candidates</h3> <p class="text-3xl font-bold">${newCandidates || 0}</p> <div class="mt-2 text-xs text-blue-500 font-medium">Pending screening</div> </div> <div class="p-6 bg-surface border border-surface/50 rounded-2xl"> <h3 class="text-sm font-medium text-text-muted mb-2">Open Requirements</h3> <p class="text-3xl font-bold">${openRequirements || 0}</p> </div> </div> <div class="grid grid-cols-1 gap-6 mb-12"> ${renderComponent($$result2, "AnalyticsChart", AnalyticsChart, { "client:visible": true, "title": "Active Deployments Growth", "data": workforceData, "color": "bg-primary", "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/AnalyticsChart", "client:component-export": "default" })} </div> <div class="mb-12"> <h2 class="text-xl font-bold mb-6">HR AI Assistant</h2> ${renderComponent($$result2, "AITools", AITools, { "role": profile.role, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/admin/AITools", "client:component-export": "default" })} </div> <div> <h2 class="text-xl font-bold mb-6">Recent Deployments</h2> <div class="bg-surface border border-surface/50 rounded-2xl overflow-hidden"> <table class="w-full text-left"> <thead> <tr class="border-b border-surface/50 bg-surface/50"> <th class="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-muted">Candidate</th> <th class="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-muted">Client</th> <th class="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-muted">Role</th> <th class="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-muted">Status</th> </tr> </thead> <tbody class="divide-y divide-surface/50"> ${recentDeployments && recentDeployments.length > 0 ? recentDeployments.map((dep) => renderTemplate`<tr class="hover:bg-primary/5 transition-colors"> <td class="px-6 py-4 text-text-main font-medium">${dep.candidates?.full_name}</td> <td class="px-6 py-4 text-text-muted">${dep.clients?.company_name}</td> <td class="px-6 py-4 text-text-muted">${dep.role}</td> <td class="px-6 py-4"> <span${addAttribute(`px-2 py-1 text-xs font-medium rounded-full ${dep.status === "active" ? "bg-green-500/10 text-green-500" : "bg-gray-500/10 text-gray-500"}`, "class")}> ${dep.status} </span> </td> </tr>`) : renderTemplate`<tr> <td colspan="4" class="px-6 py-12 text-center text-text-muted">No recent deployments.</td> </tr>`} </tbody> </table> </div> </div> ` })}`;
}, "D:/skyward/src/pages/hr/index.astro", void 0);
const $$file = "D:/skyward/src/pages/hr/index.astro";
const $$url = "/hr";
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
