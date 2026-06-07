import { c as createComponent } from "./astro-component_bcg0hk54.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_rsVvLGim.mjs";
import { r as renderComponent } from "./entrypoint_B9LsAA9s.mjs";
import { $ as $$DashboardLayout } from "./DashboardLayout_D-9FgQK8.mjs";
import { g as getUserProfile } from "./user_C13cBgEN.mjs";
import { s as supabase } from "./supabase__9NutBMz.mjs";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { File, CheckCircle, Loader2, Upload } from "lucide-react";
function CandidateDocumentUpload({ candidateId }) {
  const [uploading, setUploading] = useState(false);
  const [documents, setDocuments] = useState([
    { type: "Aadhaar Card", status: "pending" },
    { type: "PAN Card", status: "pending" },
    { type: "Experience Letter", status: "pending" }
  ]);
  const handleUpload = async (e, docType) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${candidateId}/${docType.replace(/\s+/g, "_").toLowerCase()}_${Date.now()}.${fileExt}`;
      const filePath = `documents/${fileName}`;
      const { error: uploadError } = await supabase.storage.from("documents").upload(filePath, file);
      if (uploadError) throw uploadError;
      const { data: { publicUrl } } = supabase.storage.from("documents").getPublicUrl(filePath);
      const response = await fetch("/api/documents", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          candidate_id: candidateId,
          document_type: docType,
          document_url: publicUrl
        })
      });
      if (!response.ok) throw new Error("Failed to save document record");
      setDocuments((docs) => docs.map((d) => d.type === docType ? { ...d, status: "uploaded" } : d));
    } catch (error) {
      console.error("Error uploading document:", error);
      alert("Failed to upload document. Please try again.");
    } finally {
      setUploading(false);
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "space-y-4", children: documents.map((doc) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-4 bg-surface border border-surface/50 rounded-xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx("div", { className: `w-10 h-10 rounded-lg flex items-center justify-center ${doc.status === "uploaded" ? "bg-green-500/10 text-green-500" : "bg-primary/10 text-primary"}`, children: /* @__PURE__ */ jsx(File, { size: 20 }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-text-main", children: doc.type }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-text-muted", children: doc.status === "uploaded" ? "Verified" : "Required" })
      ] })
    ] }),
    doc.status === "uploaded" ? /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-green-500", children: [
      /* @__PURE__ */ jsx(CheckCircle, { size: 18 }),
      /* @__PURE__ */ jsx("span", { className: "text-xs font-medium", children: "Uploaded" })
    ] }) : /* @__PURE__ */ jsxs("label", { className: "cursor-pointer px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 rounded-lg text-xs font-semibold transition-colors flex items-center gap-2", children: [
      uploading ? /* @__PURE__ */ jsx(Loader2, { size: 14, className: "animate-spin" }) : /* @__PURE__ */ jsx(Upload, { size: 14 }),
      "Upload",
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "file",
          className: "hidden",
          accept: ".pdf,.jpg,.jpeg,.png",
          onChange: (e) => handleUpload(e, doc.type),
          disabled: uploading
        }
      )
    ] })
  ] }, doc.type)) });
}
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  const { userId } = Astro2.locals.auth();
  if (!userId) {
    return Astro2.redirect("/sign-in");
  }
  const profile = await getUserProfile(userId);
  if (!profile || profile.role !== "candidate") {
    return Astro2.redirect("/dashboard");
  }
  const { data: candidate } = await supabase.from("candidates").select("id, status").eq("user_id", profile.id).single();
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "My Portal", "role": "candidate" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div class="p-8 bg-surface border border-surface/50 rounded-2xl"> <h2 class="text-xl font-bold mb-4">Application Status</h2> <div class="flex items-center gap-4 mb-6"> <div class="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path> <polyline points="22 4 12 14.01 9 11.01"></polyline> </svg> </div> <div> <p class="text-sm text-text-muted">Current Stage</p> <p class="text-lg font-bold">${candidate?.status || "Screening"}</p> </div> </div> <div class="space-y-4"> <div class="flex items-center gap-3"> <div class="w-2 h-2 rounded-full bg-green-500"></div> <span class="text-sm font-medium">Profile Completed</span> </div> <div class="flex items-center gap-3"> <div class="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div> <span class="text-sm font-medium">Document Verification (In Progress)</span> </div> <div class="flex items-center gap-3"> <div class="w-2 h-2 rounded-full bg-gray-300"></div> <span class="text-sm font-medium text-text-muted">Deployment Interview</span> </div> </div> </div> <div class="p-8 bg-surface border border-surface/50 rounded-2xl"> <h2 class="text-xl font-bold mb-4">Documents Required</h2> ${candidate ? renderTemplate`${renderComponent($$result2, "CandidateDocumentUpload", CandidateDocumentUpload, { "candidateId": candidate.id, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/candidate/CandidateDocumentUpload", "client:component-export": "default" })}` : renderTemplate`<p class="text-text-muted">No candidate record found. Please complete your profile.</p>`} </div> </div> ` })}`;
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
