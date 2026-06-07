import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_BJdmQt7F.mjs";
import { $ as $$DashboardLayout } from "./DashboardLayout_BUz5DuYj.mjs";
import { g as getUserProfile } from "./user_B_TByeCD.mjs";
import { s as supabase } from "./supabase_BQIL2gf4.mjs";
import { C as CandidateDocumentUpload } from "./CandidateDocumentUpload_B2iDIHA2.mjs";
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
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "My Portal", "role": profile.role }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div class="p-8 bg-surface border border-surface/50 rounded-2xl"> <h2 class="text-xl font-bold mb-4">Application Status</h2> <div class="flex items-center gap-4 mb-6"> <div class="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path> <polyline points="22 4 12 14.01 9 11.01"></polyline> </svg> </div> <div> <p class="text-sm text-text-muted">Current Stage</p> <p class="text-lg font-bold">${candidate?.status || "Screening"}</p> </div> </div> <div class="space-y-4"> <div class="flex items-center gap-3"> <div class="w-2 h-2 rounded-full bg-green-500"></div> <span class="text-sm font-medium">Profile Completed</span> </div> <div class="flex items-center gap-3"> <div class="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div> <span class="text-sm font-medium">Document Verification (In Progress)</span> </div> <div class="flex items-center gap-3"> <div class="w-2 h-2 rounded-full bg-gray-300"></div> <span class="text-sm font-medium text-text-muted">Deployment Interview</span> </div> </div> </div> <div class="p-8 bg-surface border border-surface/50 rounded-2xl"> <h2 class="text-xl font-bold mb-4">Documents Required</h2> ${candidate ? renderTemplate`${renderComponent($$result2, "CandidateDocumentUpload", CandidateDocumentUpload, { "candidateId": candidate.id, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/candidate/CandidateDocumentUpload", "client:component-export": "default" })}` : renderTemplate`<p class="text-text-muted">No candidate record found. Please complete your profile.</p>`} </div> </div> ` })}`;
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
