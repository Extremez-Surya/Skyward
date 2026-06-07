import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead, _ as addAttribute } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_C1ExgZnB.mjs";
import { $ as $$DashboardLayout } from "./DashboardLayout_DvujC7xG.mjs";
import { g as getUserProfile } from "./user_QsKzDSkD.mjs";
import { s as supabase } from "./supabase_CCoL1XUf.mjs";
import { C as CandidateDocumentUpload } from "./CandidateDocumentUpload_CJpIVYbc.mjs";
import { ShieldCheck, CheckCircle2, UploadCloud } from "lucide-react";
import { C as Card, a as CardTitle } from "./Card_DgTW5Sf9.mjs";
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const { userId } = Astro2.locals.auth();
  if (!userId) {
    return Astro2.redirect("/sign-in");
  }
  const profile = await getUserProfile(userId);
  if (!profile || profile.role !== "candidate" && profile.role !== "admin" && profile.role !== "manager") {
    return Astro2.redirect("/dashboard");
  }
  const { data: candidate } = await supabase.from("candidates").select("id, status").eq("user_id", profile.id).single();
  const stages = [
    { label: "Profile Completed", status: "completed" },
    { label: "Document Verification", status: "in-progress" },
    { label: "Deployment Interview", status: "pending" }
  ];
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Candidate Portal" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-10"> <h1 class="text-3xl font-bold text-text-primary tracking-tight text-balance">Candidate Portal</h1> <p class="text-text-secondary font-medium">Manage your profile and track deployment status.</p> </div> <div class="grid grid-cols-1 lg:grid-cols-12 gap-8"> <div class="lg:col-span-5"> ${renderComponent($$result2, "Card", Card, { "client:load": true, "className": "h-full bg-white border-border shadow-premium p-8", "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/ui/Card", "client:component-export": "Card" }, { "default": async ($$result3) => renderTemplate` <div class="flex items-center gap-4 mb-8"> <div class="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600"> ${renderComponent($$result3, "ShieldCheck", ShieldCheck, { "size": 28 })} </div> <div> <div class="text-sm font-bold text-text-muted uppercase tracking-widest">Application Status</div> <div class="text-xl font-bold text-text-primary">${candidate?.status || "Screening"}</div> </div> </div> <div class="space-y-6 relative">  <div class="absolute left-[11px] top-2 bottom-2 w-0.5 bg-border z-0"></div> ${stages.map((stage) => renderTemplate`<div class="flex items-center gap-4 relative z-10"> <div${addAttribute(`w-6 h-6 rounded-full border-4 border-white shadow-sm flex items-center justify-center ${stage.status === "completed" ? "bg-success text-white" : stage.status === "in-progress" ? "bg-primary-600 animate-pulse" : "bg-border"}`, "class")}> ${stage.status === "completed" && renderTemplate`${renderComponent($$result3, "CheckCircle2", CheckCircle2, { "size": 12 })}`} </div> <div> <div${addAttribute(`text-sm font-bold ${stage.status === "pending" ? "text-text-muted" : "text-text-primary"}`, "class")}> ${stage.label} </div> ${stage.status === "in-progress" && renderTemplate`<div class="text-[10px] font-bold text-primary-600 uppercase tracking-widest mt-0.5">Awaiting Review</div>`} </div> </div>`)} </div> ` })} </div> <div class="lg:col-span-7"> ${renderComponent($$result2, "Card", Card, { "client:load": true, "className": "h-full bg-card border-border shadow-premium p-8", "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/ui/Card", "client:component-export": "Card" }, { "default": async ($$result3) => renderTemplate` <div class="flex items-center gap-3 mb-8"> <div class="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600"> ${renderComponent($$result3, "UploadCloud", UploadCloud, { "size": 20 })} </div> ${renderComponent($$result3, "CardTitle", CardTitle, {}, { "default": async ($$result4) => renderTemplate`Required Documents` })} </div> ${candidate ? renderTemplate`${renderComponent($$result3, "CandidateDocumentUpload", CandidateDocumentUpload, { "candidateId": candidate.id, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/candidate/CandidateDocumentUpload", "client:component-export": "default" })}` : renderTemplate`<div class="p-12 text-center bg-surface border border-dashed border-border rounded-2xl"> <p class="text-text-muted font-medium italic">No candidate record found. Please contact support if this is an error.</p> </div>`}` })} </div> </div> ` })}`;
}, "D:/skyward/src/pages/candidate/index.astro", void 0);
const $$file = "D:/skyward/src/pages/candidate/index.astro";
const $$url = "/candidate";
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
