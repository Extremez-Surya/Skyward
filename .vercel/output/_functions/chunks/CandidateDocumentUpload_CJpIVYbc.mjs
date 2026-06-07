import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { File, CheckCircle, Loader2, Upload } from "lucide-react";
import { s as supabase } from "./supabase_CCoL1XUf.mjs";
function CandidateDocumentUpload({ candidateId }) {
  const [uploading, setUploading] = useState(false);
  const [documents, setDocuments] = useState([
    { type: "Aadhaar Card", status: "pending" },
    { type: "PAN Card", status: "pending" },
    { type: "Resume", status: "pending" },
    { type: "Photograph", status: "pending" }
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
export {
  CandidateDocumentUpload as C
};
