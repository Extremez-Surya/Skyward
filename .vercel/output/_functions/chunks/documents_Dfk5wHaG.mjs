import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_B82yBaQn.mjs";
import { $ as $$DashboardLayout } from "./DashboardLayout_BSplHS1s.mjs";
import { a as getCandidateProfile } from "./user_QsKzDSkD.mjs";
import { C as CandidateDocumentUpload } from "./CandidateDocumentUpload_CJpIVYbc.mjs";
const $$Documents = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Documents;
  const { userId } = Astro2.locals.auth();
  if (!userId) {
    return Astro2.redirect("/sign-in");
  }
  const profile = await getCandidateProfile(userId);
  if (!profile) {
    return Astro2.redirect("/dashboard");
  }
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Documents", "role": "candidate" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto"> <div class="mb-8"> <h1 class="text-2xl font-bold text-text-main mb-2">Document Verification</h1> <p class="text-text-muted">Please upload clear copies of your documents for verification.</p> </div> ${renderComponent($$result2, "CandidateDocumentUpload", CandidateDocumentUpload, { "candidateId": profile.id, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/candidate/CandidateDocumentUpload", "client:component-export": "default" })} <div class="mt-8 p-6 bg-blue-500/5 border border-blue-500/20 rounded-2xl"> <h3 class="text-sm font-semibold text-primary mb-2">Why is this required?</h3> <p class="text-xs text-text-muted leading-relaxed">
As per labor regulations and company policy, we require verified identification for all deployed workforce. 
                Your documents are securely stored and used only for compliance and verification purposes.
</p> </div> </div> ` })}`;
}, "D:/skyward/src/pages/candidate/documents.astro", void 0);
const $$file = "D:/skyward/src/pages/candidate/documents.astro";
const $$url = "/candidate/documents";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Documents,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
