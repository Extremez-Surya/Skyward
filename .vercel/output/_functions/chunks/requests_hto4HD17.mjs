import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead, _ as addAttribute } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_BJdmQt7F.mjs";
import { $ as $$DashboardLayout } from "./DashboardLayout_BUz5DuYj.mjs";
import { s as submitJobRequirement, b as getClientWorkforce, c as submitReplacementRequest, g as getClientProfile, d as getClientRequirements, e as getClientReplacementRequests } from "./client_BVEngwvD.mjs";
import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Plus, CheckCircle, Sparkles, Send, UserMinus, Loader2 } from "lucide-react";
import { B as Button } from "./Layout_BLze-jQV.mjs";
import { T as Textarea, I as Input } from "./Input_bwwY4Vub.mjs";
import { C as Card } from "./Card_BvMXtm5W.mjs";
function RequirementForm({ clientId }) {
  const [loading, setLoading] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [aiAnalysis, setAiAnalysis] = useState(null);
  const [aiText, setAiText] = useState("");
  const [formData, setFormData] = useState({
    role_name: "",
    worker_count: 1,
    shift_type: "Day",
    location: "",
    salary: "",
    joining_date: ""
  });
  const handleAIAnalyze = async () => {
    if (!aiText) return;
    setAiLoading(true);
    try {
      const res = await fetch("/api/ai/analyze-requirement", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ requirement: aiText })
      });
      const data = await res.json();
      setAiAnalysis(data);
      if (data.role_name) setFormData((prev) => ({ ...prev, role_name: data.role_name }));
      if (data.worker_count) setFormData((prev) => ({ ...prev, worker_count: data.worker_count }));
      if (data.location) setFormData((prev) => ({ ...prev, location: data.location }));
    } catch (err) {
      console.error(err);
    } finally {
      setAiLoading(false);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await submitJobRequirement({
        client_id: clientId,
        ...formData
      });
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setFormData({
          role_name: "",
          worker_count: 1,
          shift_type: "Day",
          location: "",
          salary: "",
          joining_date: ""
        });
        setAiAnalysis(null);
        setAiText("");
      }, 3e3);
    } catch (error) {
      console.error("Error submitting requirement:", error);
      alert("Failed to submit requirement.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs(Card, { variant: "standard", animate: false, className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-primary-600 mb-6", children: [
      /* @__PURE__ */ jsx(Plus, { size: 20 }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-text-primary", children: "New Workforce Request" })
    ] }),
    success ? /* @__PURE__ */ jsxs("div", { className: "py-12 text-center space-y-4 animate-fade-up", children: [
      /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsx(CheckCircle, { size: 32 }) }),
      /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-text-primary", children: "Thank you for your request." }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-text-secondary", children: "Our team will review your requirements and contact you shortly." })
    ] }) : /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "p-4 bg-primary-600/5 border border-primary-600/10 rounded-md space-y-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-primary-600", children: [
          /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold uppercase tracking-wider", children: "Smart AI Assistant" })
        ] }),
        /* @__PURE__ */ jsx(
          Textarea,
          {
            placeholder: "Example: Need 50 Packers in Gurgaon for night shift joining next week.",
            className: "h-24 bg-background",
            value: aiText,
            onChange: (e) => setAiText(e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            onClick: handleAIAnalyze,
            isLoading: aiLoading,
            disabled: !aiText,
            variant: "outline",
            className: "w-full text-xs h-10",
            leftIcon: Sparkles,
            children: "Analyze with AI"
          }
        ),
        aiAnalysis && /* @__PURE__ */ jsxs("div", { className: "mt-3 p-3 bg-surface border border-primary-600/10 rounded-md text-xs space-y-2 animate-fade-up", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-text-primary", children: [
            /* @__PURE__ */ jsx("strong", { children: "Recommendation:" }),
            " ",
            aiAnalysis.staffing_recommendation
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-text-primary", children: [
            /* @__PURE__ */ jsx("strong", { children: "Timeline:" }),
            " ",
            aiAnalysis.estimated_hiring_timeline
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsx(
          Input,
          {
            label: "Role Required",
            required: true,
            placeholder: "e.g. Delivery Executive",
            value: formData.role_name,
            onChange: (e) => setFormData({ ...formData, role_name: e.target.value }),
            isRequired: true
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            label: "Number of Workers",
            type: "number",
            required: true,
            min: "1",
            value: formData.worker_count,
            onChange: (e) => setFormData({ ...formData, worker_count: parseInt(e.target.value) }),
            isRequired: true
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-text-secondary", children: "Shift Type" }),
          /* @__PURE__ */ jsxs(
            "select",
            {
              className: "w-full h-12 px-4 rounded-md border border-border bg-surface text-foreground focus:outline-none focus:ring-4 focus:ring-primary-200 focus:border-primary-600 transition-all",
              value: formData.shift_type,
              onChange: (e) => setFormData({ ...formData, shift_type: e.target.value }),
              children: [
                /* @__PURE__ */ jsx("option", { children: "Day" }),
                /* @__PURE__ */ jsx("option", { children: "Night" }),
                /* @__PURE__ */ jsx("option", { children: "Rotational" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          Input,
          {
            label: "Location",
            required: true,
            placeholder: "e.g. Okhla Phase III, Delhi",
            value: formData.location,
            onChange: (e) => setFormData({ ...formData, location: e.target.value }),
            isRequired: true
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            label: "Expected Salary Range",
            placeholder: "e.g. 15,000 - 18,000 per month",
            value: formData.salary,
            onChange: (e) => setFormData({ ...formData, salary: e.target.value })
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            label: "Target Joining Date",
            type: "date",
            required: true,
            value: formData.joining_date,
            onChange: (e) => setFormData({ ...formData, joining_date: e.target.value }),
            isRequired: true
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "md:col-span-2 pt-4", children: /* @__PURE__ */ jsx(
          Button,
          {
            type: "submit",
            isLoading: loading,
            className: "w-full",
            rightIcon: Send,
            children: "Submit Requirement"
          }
        ) })
      ] })
    ] })
  ] });
}
function ReplacementRequestForm({ clientId }) {
  const [loading, setLoading] = useState(false);
  const [fetchingWorkforce, setFetchingWorkforce] = useState(true);
  const [success, setSuccess] = useState(false);
  const [workforce, setWorkforce] = useState([]);
  const [formData, setFormData] = useState({
    deployment_id: "",
    reason: "",
    priority: "Normal"
  });
  useEffect(() => {
    async function loadWorkforce() {
      try {
        const data = await getClientWorkforce(clientId);
        setWorkforce(data);
      } catch (err) {
        console.error(err);
      } finally {
        setFetchingWorkforce(false);
      }
    }
    loadWorkforce();
  }, [clientId]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.deployment_id) return;
    setLoading(true);
    try {
      await submitReplacementRequest({
        client_id: clientId,
        ...formData
      });
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setFormData({
          deployment_id: "",
          reason: "",
          priority: "Normal"
        });
      }, 3e3);
    } catch (error) {
      console.error("Error submitting replacement request:", error);
      alert("Failed to submit replacement request.");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "p-8 bg-surface border border-surface/50 rounded-2xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-primary mb-6", children: [
      /* @__PURE__ */ jsx(UserMinus, { size: 20 }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-text-main", children: "Replacement Request" })
    ] }),
    success ? /* @__PURE__ */ jsxs("div", { className: "py-12 text-center space-y-4 animate-in fade-in zoom-in duration-300", children: [
      /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsx(CheckCircle, { size: 32 }) }),
      /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold", children: "Request Submitted!" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-text-muted", children: "We will find a suitable replacement and notify you shortly." })
    ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("label", { className: "text-xs font-semibold uppercase tracking-wider text-text-muted", children: "Select Worker" }),
        fetchingWorkforce ? /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-text-muted text-sm px-4 py-3 bg-background border border-surface/50 rounded-xl", children: [
          /* @__PURE__ */ jsx(Loader2, { size: 16, className: "animate-spin" }),
          " Loading workforce..."
        ] }) : /* @__PURE__ */ jsxs(
          "select",
          {
            required: true,
            className: "w-full bg-background border border-surface/50 rounded-xl px-4 py-3 text-sm focus:outline-none",
            value: formData.deployment_id,
            onChange: (e) => setFormData({ ...formData, deployment_id: e.target.value }),
            children: [
              /* @__PURE__ */ jsx("option", { value: "", children: "Choose a worker to replace" }),
              workforce.map((item) => /* @__PURE__ */ jsxs("option", { value: item.id, children: [
                item.candidates.full_name,
                " (",
                item.role,
                ")"
              ] }, item.id))
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("label", { className: "text-xs font-semibold uppercase tracking-wider text-text-muted", children: "Reason for Replacement" }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            required: true,
            className: "w-full bg-background border border-surface/50 rounded-xl px-4 py-3 text-sm focus:outline-none min-h-[100px]",
            placeholder: "Please explain why a replacement is needed (e.g. poor performance, frequent absence, etc.)",
            value: formData.reason,
            onChange: (e) => setFormData({ ...formData, reason: e.target.value })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("label", { className: "text-xs font-semibold uppercase tracking-wider text-text-muted", children: "Priority" }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-4", children: ["Normal", "Urgent"].map((p) => /* @__PURE__ */ jsxs("label", { className: "flex-1 cursor-pointer", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "radio",
              name: "priority",
              className: "hidden peer",
              checked: formData.priority === p,
              onChange: () => setFormData({ ...formData, priority: p })
            }
          ),
          /* @__PURE__ */ jsx("div", { className: `text-center py-3 rounded-xl border text-sm font-semibold transition-all ${formData.priority === p ? "bg-primary/10 border-primary text-primary" : "bg-background border-surface/50 text-text-muted hover:border-surface-hover"}`, children: p })
        ] }, p)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "pt-4", children: /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          disabled: loading || !formData.deployment_id,
          className: "w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary-hover transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg shadow-primary/20",
          children: loading ? /* @__PURE__ */ jsx(Loader2, { size: 20, className: "animate-spin" }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Send, { size: 18 }),
            " Submit Request"
          ] })
        }
      ) })
    ] })
  ] });
}
const $$Requests = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Requests;
  const { userId } = Astro2.locals.auth();
  if (!userId) {
    return Astro2.redirect("/sign-in");
  }
  const profile = await getClientProfile(userId);
  if (!profile) {
    return Astro2.redirect("/dashboard");
  }
  const requirements = await getClientRequirements(profile.id);
  const replacementRequests = await getClientReplacementRequests(profile.id);
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Requests", "role": "client" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 lg:grid-cols-3 gap-8"> <div class="lg:col-span-2 space-y-12"> <div> <h2 class="text-xl font-bold mb-6">Workforce Requirements</h2> <div class="bg-surface border border-surface/50 rounded-2xl overflow-hidden"> <table class="w-full text-left"> <thead> <tr class="border-b border-surface/50 bg-surface/50"> <th class="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-muted">Role</th> <th class="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-muted">Count</th> <th class="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-muted">Status</th> <th class="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-muted text-right">Date</th> </tr> </thead> <tbody class="divide-y divide-surface/50"> ${requirements.length > 0 ? requirements.map((req) => renderTemplate`<tr class="hover:bg-primary/5 transition-colors"> <td class="px-6 py-4"> <div class="flex flex-col"> <span class="font-medium text-text-main">${req.role_name}</span> <span class="text-xs text-text-muted">${req.location}</span> </div> </td> <td class="px-6 py-4 text-text-muted">${req.worker_count}</td> <td class="px-6 py-4"> <span${addAttribute(`px-2 py-1 text-xs font-medium rounded-full ${req.status === "open" ? "bg-blue-500/10 text-blue-500" : req.status === "fulfilled" ? "bg-green-500/10 text-green-500" : "bg-gray-500/10 text-gray-500"}`, "class")}> ${req.status.charAt(0).toUpperCase() + req.status.slice(1)} </span> </td> <td class="px-6 py-4 text-right text-text-muted text-xs"> ${new Date(req.created_at).toLocaleDateString()} </td> </tr>`) : renderTemplate`<tr> <td colspan="4" class="px-6 py-12 text-center text-text-muted italic">
No requirements submitted yet.
</td> </tr>`} </tbody> </table> </div> </div> <div> <h2 class="text-xl font-bold mb-6">Replacement Requests</h2> <div class="bg-surface border border-surface/50 rounded-2xl overflow-hidden"> <table class="w-full text-left"> <thead> <tr class="border-b border-surface/50 bg-surface/50"> <th class="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-muted">Worker</th> <th class="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-muted">Reason</th> <th class="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-muted">Status</th> <th class="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-muted text-right">Date</th> </tr> </thead> <tbody class="divide-y divide-surface/50"> ${replacementRequests.length > 0 ? replacementRequests.map((req) => renderTemplate`<tr class="hover:bg-primary/5 transition-colors"> <td class="px-6 py-4"> <div class="flex flex-col"> <span class="font-medium text-text-main">${req.deployments?.candidates?.full_name}</span> <span class="text-xs text-text-muted">${req.deployments?.role}</span> </div> </td> <td class="px-6 py-4 text-text-muted text-sm truncate max-w-[200px]">${req.reason}</td> <td class="px-6 py-4"> <span${addAttribute(`px-2 py-1 text-xs font-medium rounded-full ${req.status === "pending" ? "bg-yellow-500/10 text-yellow-500" : req.status === "completed" ? "bg-green-500/10 text-green-500" : "bg-gray-500/10 text-gray-500"}`, "class")}> ${req.status.charAt(0).toUpperCase() + req.status.slice(1)} </span> </td> <td class="px-6 py-4 text-right text-text-muted text-xs"> ${new Date(req.created_at).toLocaleDateString()} </td> </tr>`) : renderTemplate`<tr> <td colspan="4" class="px-6 py-12 text-center text-text-muted italic">
No replacement requests submitted yet.
</td> </tr>`} </tbody> </table> </div> </div> </div> <div class="lg:col-span-1 space-y-8"> ${renderComponent($$result2, "RequirementForm", RequirementForm, { "clientId": profile.id, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/RequirementForm", "client:component-export": "default" })} ${renderComponent($$result2, "ReplacementRequestForm", ReplacementRequestForm, { "clientId": profile.id, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/ReplacementRequestForm", "client:component-export": "default" })} </div> </div> ` })}`;
}, "D:/skyward/src/pages/client/requests.astro", void 0);
const $$file = "D:/skyward/src/pages/client/requests.astro";
const $$url = "/client/requests";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Requests,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
