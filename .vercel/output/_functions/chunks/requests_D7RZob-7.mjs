import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead, _ as addAttribute } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_B82yBaQn.mjs";
import { $ as $$DashboardLayout } from "./DashboardLayout_BSplHS1s.mjs";
import { s as submitJobRequirement, b as getClientWorkforce, c as submitReplacementRequest, g as getClientProfile, d as getClientRequirements, e as getClientReplacementRequests } from "./client_CAUf0W2L.mjs";
import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Plus, CheckCircle, Sparkles, Send, UserMinus, Loader2, History, Briefcase, Zap } from "lucide-react";
import { B as Button } from "./Button_V0yuJDF0.mjs";
import { T as Textarea, I as Input } from "./Input_BAi0AciX.mjs";
import { C as Card } from "./Card_DgTW5Sf9.mjs";
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
  return /* @__PURE__ */ jsxs(Card, { variant: "standard", animate: false, className: "bg-white border-border shadow-premium p-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-primary-600 mb-8", children: [
      /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center", children: /* @__PURE__ */ jsx(Plus, { size: 20 }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-text-primary tracking-tight", children: "New Workforce Request" })
    ] }),
    success ? /* @__PURE__ */ jsxs("div", { className: "py-12 text-center space-y-4 animate-fade-up", children: [
      /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto shadow-sm", children: /* @__PURE__ */ jsx(CheckCircle, { size: 32 }) }),
      /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-text-primary tracking-tight", children: "Request Received" }),
      /* @__PURE__ */ jsx("p", { className: "text-text-secondary font-medium", children: "Our team will review your requirements and contact you shortly." })
    ] }) : /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "p-6 bg-surface border border-border rounded-2xl space-y-4 relative overflow-hidden group transition-all", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-primary-600 relative z-10", children: [
          /* @__PURE__ */ jsx(Sparkles, { size: 16 }),
          /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-widest", children: "Smart AI Assistant" })
        ] }),
        /* @__PURE__ */ jsx(
          Textarea,
          {
            placeholder: "e.g. Need 50 Packers in Gurgaon for night shift joining next week.",
            className: "bg-white border-border",
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
            variant: "secondary",
            className: "w-full text-xs h-12 rounded-xl",
            leftIcon: Sparkles,
            children: "Analyze with AI"
          }
        ),
        aiAnalysis && /* @__PURE__ */ jsxs("div", { className: "mt-4 p-4 bg-white border border-border rounded-xl text-[11px] font-medium space-y-2 animate-fade-up relative z-10", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-text-primary", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-primary-600 uppercase tracking-tighter mr-1", children: "Recommendation:" }),
            " ",
            aiAnalysis.staffing_recommendation
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-text-primary", children: [
            /* @__PURE__ */ jsx("strong", { className: "text-primary-600 uppercase tracking-tighter mr-1", children: "Timeline:" }),
            " ",
            aiAnalysis.estimated_hiring_timeline
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "absolute -bottom-8 -right-8 w-32 h-32 bg-primary-600/5 blur-[40px] rounded-full pointer-events-none" })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
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
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("label", { className: "block text-sm font-bold text-text-primary tracking-tight", children: "Shift Type" }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                className: "w-full h-[52px] px-5 rounded-xl border border-border bg-white text-text-primary font-medium focus:outline-none focus:ring-4 focus:ring-primary-600/10 focus:border-primary-600 transition-all shadow-sm",
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
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsx(
            Input,
            {
              label: "Salary Range (Monthly)",
              placeholder: "e.g. 15,000 - 18,000",
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
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "pt-4", children: /* @__PURE__ */ jsx(
          Button,
          {
            type: "submit",
            isLoading: loading,
            className: "w-full rounded-xl",
            rightIcon: Send,
            children: "Submit Workforce Request"
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
  return /* @__PURE__ */ jsxs(Card, { variant: "standard", animate: false, className: "bg-white border-border shadow-premium p-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-danger mb-8", children: [
      /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-danger/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(UserMinus, { size: 20 }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-text-primary tracking-tight", children: "Replacement Request" })
    ] }),
    success ? /* @__PURE__ */ jsxs("div", { className: "py-12 text-center space-y-4 animate-fade-up", children: [
      /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto shadow-sm", children: /* @__PURE__ */ jsx(CheckCircle, { size: 32 }) }),
      /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-text-primary tracking-tight", children: "Request Submitted" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-text-secondary font-medium", children: "We will find a suitable replacement and notify you shortly." })
    ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-bold text-text-primary tracking-tight", children: "Select Worker" }),
        fetchingWorkforce ? /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-text-muted text-sm px-5 py-3 bg-surface border border-border rounded-xl", children: [
          /* @__PURE__ */ jsx(Loader2, { size: 16, className: "animate-spin text-primary-600" }),
          /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Loading workforce data..." })
        ] }) : /* @__PURE__ */ jsxs(
          "select",
          {
            required: true,
            className: "w-full h-[52px] px-5 rounded-xl border border-border bg-white text-text-primary font-medium focus:outline-none focus:ring-4 focus:ring-primary-600/10 focus:border-primary-600 transition-all shadow-sm",
            value: formData.deployment_id,
            onChange: (e) => setFormData({ ...formData, deployment_id: e.target.value }),
            children: [
              /* @__PURE__ */ jsx("option", { value: "", children: "Choose a worker to replace" }),
              workforce.map((item) => /* @__PURE__ */ jsxs("option", { value: item.id, children: [
                item.candidates.full_name,
                " — ",
                item.role
              ] }, item.id))
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-bold text-text-primary tracking-tight", children: "Reason for Replacement" }),
        /* @__PURE__ */ jsx(
          "textarea",
          {
            required: true,
            className: "w-full min-h-[120px] px-5 py-4 rounded-xl border border-border bg-white text-text-primary font-medium placeholder:text-text-muted focus:outline-none focus:ring-4 focus:ring-primary-600/10 focus:border-primary-600 transition-all shadow-sm resize-none",
            placeholder: "Explain the requirement (e.g. performance issues, frequent absence)",
            value: formData.reason,
            onChange: (e) => setFormData({ ...formData, reason: e.target.value })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-bold text-text-primary tracking-tight", children: "Priority Level" }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-4", children: ["Normal", "Urgent"].map((p) => /* @__PURE__ */ jsxs("label", { className: "flex-1 cursor-pointer group", children: [
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
          /* @__PURE__ */ jsx("div", { className: `text-center py-3 rounded-xl border text-sm font-bold transition-all shadow-sm ${formData.priority === p ? "bg-primary-600 border-primary-600 text-white shadow-lifted" : "bg-white border-border text-text-secondary hover:border-primary-100 hover:bg-primary-50"}`, children: p })
        ] }, p)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "pt-4", children: /* @__PURE__ */ jsx(
        Button,
        {
          type: "submit",
          isLoading: loading,
          disabled: !formData.deployment_id,
          className: "w-full rounded-xl",
          rightIcon: Send,
          children: "Submit Replacement Request"
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
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Client Requests" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-10 flex items-center justify-between"> <div> <h1 class="text-3xl font-bold text-text-primary tracking-tight">Requests & Support</h1> <p class="text-text-secondary font-medium">Manage workforce requirements and operational support.</p> </div> <div class="flex items-center gap-3"> ${renderComponent($$result2, "Button", Button, { "variant": "secondary", "size": "sm", "leftIcon": History }, { "default": async ($$result3) => renderTemplate`Request History` })} </div> </div> <div class="grid grid-cols-1 lg:grid-cols-12 gap-12"> <div class="lg:col-span-8 space-y-12">  <section> <div class="flex items-center gap-3 mb-6"> <div class="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600"> ${renderComponent($$result2, "Briefcase", Briefcase, { "size": 20 })} </div> <h2 class="text-xl font-bold text-text-primary tracking-tight">Active Requirements</h2> </div> <div class="bg-card border border-border rounded-[32px] overflow-hidden shadow-premium"> <table class="w-full text-left"> <thead> <tr class="border-b border-border bg-surface"> <th class="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-text-muted">Role & Location</th> <th class="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-text-muted">Headcount</th> <th class="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-text-muted">Status</th> <th class="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-text-muted text-right">Submitted</th> </tr> </thead> <tbody class="divide-y divide-border"> ${requirements.length > 0 ? requirements.map((req) => renderTemplate`<tr class="hover:bg-primary-50/50 transition-colors"> <td class="px-8 py-5"> <div class="flex flex-col"> <span class="font-bold text-text-primary">${req.role_name}</span> <span class="text-xs font-medium text-text-secondary">${req.location}</span> </div> </td> <td class="px-8 py-5 text-sm font-bold text-text-secondary">${req.worker_count}</td> <td class="px-8 py-5"> <span${addAttribute(`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full ${req.status === "open" ? "bg-primary-600/10 text-primary-600" : req.status === "fulfilled" ? "bg-success/10 text-success" : "bg-text-muted/10 text-text-muted"}`, "class")}> ${req.status} </span> </td> <td class="px-8 py-5 text-right text-xs font-bold text-text-muted"> ${new Date(req.created_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short" })} </td> </tr>`) : renderTemplate`<tr> <td colspan="4" class="px-8 py-16 text-center text-text-muted font-medium italic">
No workforce requirements submitted yet.
</td> </tr>`} </tbody> </table> </div> </section>  <section> <div class="flex items-center gap-3 mb-6"> <div class="w-10 h-10 rounded-xl bg-danger/10 flex items-center justify-center text-danger"> ${renderComponent($$result2, "UserMinus", UserMinus, { "size": 20 })} </div> <h2 class="text-xl font-bold text-text-primary tracking-tight">Replacement Status</h2> </div> <div class="bg-card border border-border rounded-[32px] overflow-hidden shadow-premium"> <table class="w-full text-left"> <thead> <tr class="border-b border-border bg-surface"> <th class="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-text-muted">Staff Member</th> <th class="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-text-muted">Reason</th> <th class="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-text-muted">Status</th> <th class="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-text-muted text-right">Requested</th> </tr> </thead> <tbody class="divide-y divide-border"> ${replacementRequests.length > 0 ? replacementRequests.map((req) => renderTemplate`<tr class="hover:bg-primary-50/50 transition-colors"> <td class="px-8 py-5"> <div class="flex flex-col"> <span class="font-bold text-text-primary">${req.deployments?.candidates?.full_name}</span> <span class="text-xs font-medium text-text-secondary">${req.deployments?.role}</span> </div> </td> <td class="px-8 py-5 text-sm font-medium text-text-secondary truncate max-w-[180px]">${req.reason}</td> <td class="px-8 py-5"> <span${addAttribute(`px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full ${req.status === "pending" ? "bg-warning/10 text-warning" : req.status === "completed" ? "bg-success/10 text-success" : "bg-text-muted/10 text-text-muted"}`, "class")}> ${req.status} </span> </td> <td class="px-8 py-5 text-right text-xs font-bold text-text-muted"> ${new Date(req.created_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short" })} </td> </tr>`) : renderTemplate`<tr> <td colspan="4" class="px-8 py-16 text-center text-text-muted font-medium italic">
No replacement requests found.
</td> </tr>`} </tbody> </table> </div> </section> </div> <div class="lg:col-span-4 space-y-8"> ${renderComponent($$result2, "RequirementForm", RequirementForm, { "clientId": profile.id, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/RequirementForm", "client:component-export": "default" })} ${renderComponent($$result2, "ReplacementRequestForm", ReplacementRequestForm, { "clientId": profile.id, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/ReplacementRequestForm", "client:component-export": "default" })} <div class="p-8 bg-text-primary rounded-[32px] text-white relative overflow-hidden group"> <h3 class="text-xl font-bold mb-4 relative z-10">Need instant support?</h3> <p class="text-text-muted mb-8 relative z-10 font-medium">Our dedicated enterprise support team is available 24/7 for urgent operational needs.</p> ${renderComponent($$result2, "Button", Button, { "variant": "primary", "className": "w-full relative z-10 bg-primary-600 border-none rounded-xl", "leftIcon": Zap }, { "default": async ($$result3) => renderTemplate`
Contact Support
` })} <div class="absolute -bottom-12 -right-12 w-48 h-48 bg-primary-600/20 blur-[60px] rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-700"></div> </div> </div> </div> ` })}`;
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
