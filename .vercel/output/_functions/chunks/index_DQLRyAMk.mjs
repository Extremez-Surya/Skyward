import { c as createComponent } from "./astro-component_bcg0hk54.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_rsVvLGim.mjs";
import { r as renderComponent } from "./entrypoint_B9LsAA9s.mjs";
import { $ as $$DashboardLayout } from "./DashboardLayout_D-9FgQK8.mjs";
import { g as getUserProfile } from "./user_C13cBgEN.mjs";
import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Sparkles, Loader2, Send } from "lucide-react";
function AITools() {
  const [jdRole, setJdRole] = useState("");
  const [jdOutput, setJdOutput] = useState("");
  const [reqText, setReqText] = useState("");
  const [reqAnalysis, setReqAnalysis] = useState(null);
  const [loading, setLoading] = useState(null);
  const generateJD = async () => {
    setLoading("jd");
    try {
      const res = await fetch("/api/ai/generate-jd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role_name: jdRole })
      });
      const data = await res.json();
      setJdOutput(data.jd);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(null);
    }
  };
  const analyzeRequirement = async () => {
    setLoading("req");
    try {
      const res = await fetch("/api/ai/analyze-requirement", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ requirement: reqText })
      });
      const data = await res.json();
      setReqAnalysis(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(null);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "p-6 bg-surface border border-surface/50 rounded-2xl space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-primary", children: [
        /* @__PURE__ */ jsx(Sparkles, { size: 20 }),
        /* @__PURE__ */ jsx("h3", { className: "font-bold", children: "AI JD Generator" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            placeholder: "Enter role name (e.g. Warehouse Supervisor)",
            className: "flex-1 bg-background border border-surface/50 rounded-xl px-4 py-2 text-sm focus:outline-none",
            value: jdRole,
            onChange: (e) => setJdRole(e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: generateJD,
            disabled: !!loading,
            className: "px-4 py-2 bg-primary text-white rounded-xl text-sm font-medium hover:bg-primary-hover disabled:opacity-50",
            children: loading === "jd" ? /* @__PURE__ */ jsx(Loader2, { size: 18, className: "animate-spin" }) : "Generate"
          }
        )
      ] }),
      jdOutput && /* @__PURE__ */ jsx("div", { className: "mt-4 p-4 bg-background border border-surface/50 rounded-xl max-h-60 overflow-y-auto whitespace-pre-wrap text-xs text-text-muted", children: jdOutput })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "p-6 bg-surface border border-surface/50 rounded-2xl space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-primary", children: [
        /* @__PURE__ */ jsx(Sparkles, { size: 20 }),
        /* @__PURE__ */ jsx("h3", { className: "font-bold", children: "AI Requirement Analyzer" })
      ] }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          placeholder: "Paste client requirement text here...",
          className: "w-full h-24 bg-background border border-surface/50 rounded-xl px-4 py-3 text-sm focus:outline-none resize-none",
          value: reqText,
          onChange: (e) => setReqText(e.target.value)
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: analyzeRequirement,
          disabled: !!loading,
          className: "w-full py-2 bg-primary text-white rounded-xl text-sm font-medium hover:bg-primary-hover disabled:opacity-50 flex items-center justify-center gap-2",
          children: loading === "req" ? /* @__PURE__ */ jsx(Loader2, { size: 18, className: "animate-spin" }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Send, { size: 16 }),
            " Analyze"
          ] })
        }
      ),
      reqAnalysis && /* @__PURE__ */ jsxs("div", { className: "mt-4 p-4 bg-background border border-surface/50 rounded-xl text-xs space-y-2", children: [
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Workforce Type:" }),
          " ",
          reqAnalysis.workforce_type
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Timeline:" }),
          " ",
          reqAnalysis.estimated_hiring_timeline
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Recommendation:" }),
          " ",
          reqAnalysis.staffing_recommendation
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Key Skills:" }),
          " ",
          reqAnalysis.key_skills_needed
        ] })
      ] })
    ] })
  ] });
}
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
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Admin Overview", "role": profile.role }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"> <div class="p-6 bg-surface border border-surface/50 rounded-2xl"> <h3 class="text-sm font-medium text-text-muted mb-2">Active Workforce</h3> <p class="text-3xl font-bold">124</p> <div class="mt-2 text-xs text-green-500 font-medium">+12% from last month</div> </div> <div class="p-6 bg-surface border border-surface/50 rounded-2xl"> <h3 class="text-sm font-medium text-text-muted mb-2">New Candidates</h3> <p class="text-3xl font-bold">48</p> <div class="mt-2 text-xs text-blue-500 font-medium">8 pending screening</div> </div> <div class="p-6 bg-surface border border-surface/50 rounded-2xl"> <h3 class="text-sm font-medium text-text-muted mb-2">Open Requirements</h3> <p class="text-3xl font-bold">15</p> <div class="mt-2 text-xs text-yellow-500 font-medium">Across 5 clients</div> </div> <div class="p-6 bg-surface border border-surface/50 rounded-2xl"> <h3 class="text-sm font-medium text-text-muted mb-2">Pending Invoices</h3> <p class="text-3xl font-bold">7</p> <div class="mt-2 text-xs text-red-500 font-medium">3 overdue</div> </div> </div> <div class="mb-12"> <h2 class="text-xl font-bold mb-6">AI Workspace</h2> ${renderComponent($$result2, "AITools", AITools, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/admin/AITools", "client:component-export": "default" })} </div> <div> <h2 class="text-xl font-bold mb-6">Recent Deployments</h2> <div class="bg-surface border border-surface/50 rounded-2xl overflow-hidden"> <table class="w-full text-left"> <thead> <tr class="border-b border-surface/50 bg-surface/50"> <th class="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-muted">Candidate</th> <th class="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-muted">Client</th> <th class="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-muted">Role</th> <th class="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-muted">Status</th> </tr> </thead> <tbody class="divide-y divide-surface/50"> <tr class="hover:bg-primary/5 transition-colors"> <td class="px-6 py-4">Rahul Sharma</td> <td class="px-6 py-4">TechLogistics Ltd</td> <td class="px-6 py-4">Warehouse Associate</td> <td class="px-6 py-4"><span class="px-2 py-1 bg-green-500/10 text-green-500 text-xs font-medium rounded-full">Active</span></td> </tr> <tr class="hover:bg-primary/5 transition-colors"> <td class="px-6 py-4">Anita Desai</td> <td class="px-6 py-4">Global Retail Corp</td> <td class="px-6 py-4">Security Guard</td> <td class="px-6 py-4"><span class="px-2 py-1 bg-green-500/10 text-green-500 text-xs font-medium rounded-full">Active</span></td> </tr> </tbody> </table> </div> </div> ` })}`;
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
