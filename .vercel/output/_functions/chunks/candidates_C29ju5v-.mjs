import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_BJdmQt7F.mjs";
import { $ as $$DashboardLayout } from "./DashboardLayout_BUz5DuYj.mjs";
import { g as getUserProfile } from "./user_B_TByeCD.mjs";
import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Search, Plus, FileText, Edit2, Trash2, X, ExternalLink } from "lucide-react";
import { B as Button } from "./Layout_BLze-jQV.mjs";
import { I as Input } from "./Input_bwwY4Vub.mjs";
import { B as Badge } from "./Badge_DYl_Q3GX.mjs";
import { C as Card } from "./Card_BvMXtm5W.mjs";
function CandidateTable() {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  useEffect(() => {
    fetchCandidates();
  }, []);
  const fetchCandidates = async () => {
    try {
      const response = await fetch("/api/candidates");
      const data = await response.json();
      setCandidates(data);
    } catch (error) {
      console.error("Error fetching candidates:", error);
    } finally {
      setLoading(false);
    }
  };
  const viewDocuments = async (id) => {
    try {
      const response = await fetch(`/api/candidates/${id}`);
      const data = await response.json();
      setSelectedCandidate(data);
    } catch (error) {
      console.error("Error fetching candidate documents:", error);
    }
  };
  const updateStatus = async (id, status) => {
    try {
      await fetch(`/api/candidates/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status })
      });
      fetchCandidates();
      setSelectedCandidate(null);
    } catch (error) {
      console.error("Error updating candidate status:", error);
    }
  };
  const filteredCandidates = candidates.filter(
    (c) => c.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) || c.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative w-full sm:w-96", children: [
        /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 text-text-muted z-10", size: 18 }),
        /* @__PURE__ */ jsx(
          Input,
          {
            placeholder: "Search candidates...",
            className: "pl-10",
            value: searchTerm,
            onChange: (e) => setSearchTerm(e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsx(Button, { leftIcon: Plus, children: "Add Candidate" })
    ] }),
    /* @__PURE__ */ jsx(Card, { variant: "standard", animate: false, className: "p-0 overflow-hidden border-border", children: loading ? /* @__PURE__ */ jsx("div", { className: "p-12 text-center text-text-secondary", children: "Loading candidates..." }) : filteredCandidates.length === 0 ? /* @__PURE__ */ jsx("div", { className: "p-12 text-center text-text-secondary", children: "No candidates found." }) : /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-border bg-surface", children: [
        /* @__PURE__ */ jsx("th", { className: "px-6 h-[56px] text-xs font-semibold uppercase tracking-wider text-text-muted", children: "Candidate" }),
        /* @__PURE__ */ jsx("th", { className: "px-6 h-[56px] text-xs font-semibold uppercase tracking-wider text-text-muted", children: "Experience" }),
        /* @__PURE__ */ jsx("th", { className: "px-6 h-[56px] text-xs font-semibold uppercase tracking-wider text-text-muted", children: "Status" }),
        /* @__PURE__ */ jsx("th", { className: "px-6 h-[56px] text-xs font-semibold uppercase tracking-wider text-text-muted", children: "Joined" }),
        /* @__PURE__ */ jsx("th", { className: "px-6 h-[56px] text-xs font-semibold uppercase tracking-wider text-text-muted text-right", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-border", children: filteredCandidates.map((candidate) => /* @__PURE__ */ jsxs("tr", { className: "hover:bg-primary-600/5 transition-colors group", children: [
        /* @__PURE__ */ jsx("td", { className: "px-6 h-[56px]", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-text-primary group-hover:text-primary-600 transition-colors", children: candidate.full_name }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-text-muted", children: candidate.email })
        ] }) }),
        /* @__PURE__ */ jsx("td", { className: "px-6 h-[56px] text-sm text-text-secondary", children: candidate.experience || "N/A" }),
        /* @__PURE__ */ jsx("td", { className: "px-6 h-[56px]", children: /* @__PURE__ */ jsx(Badge, { variant: candidate.status === "active" ? "success" : candidate.status === "screening" ? "primary" : "info", children: candidate.status }) }),
        /* @__PURE__ */ jsx("td", { className: "px-6 h-[56px] text-sm text-text-secondary", children: new Date(candidate.created_at).toLocaleDateString() }),
        /* @__PURE__ */ jsx("td", { className: "px-6 h-[56px] text-right", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => viewDocuments(candidate.id),
              className: "p-2 hover:bg-surface rounded-lg text-text-muted hover:text-primary-600 transition-colors",
              title: "View Documents",
              children: /* @__PURE__ */ jsx(FileText, { size: 16 })
            }
          ),
          /* @__PURE__ */ jsx("button", { className: "p-2 hover:bg-surface rounded-lg text-text-muted hover:text-primary-600 transition-colors", children: /* @__PURE__ */ jsx(Edit2, { size: 16 }) }),
          /* @__PURE__ */ jsx("button", { className: "p-2 hover:bg-surface rounded-lg text-text-muted hover:text-danger transition-colors", children: /* @__PURE__ */ jsx(Trash2, { size: 16 }) })
        ] }) })
      ] }, candidate.id)) })
    ] }) }) }),
    selectedCandidate && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-up", children: /* @__PURE__ */ jsxs(Card, { variant: "standard", animate: false, className: "w-full max-w-lg p-0 shadow-2xl overflow-hidden border-border bg-card", children: [
      /* @__PURE__ */ jsxs("div", { className: "p-6 border-b border-border flex justify-between items-center bg-surface/50", children: [
        /* @__PURE__ */ jsxs("h3", { className: "font-bold text-lg text-text-primary", children: [
          "Documents: ",
          selectedCandidate.full_name
        ] }),
        /* @__PURE__ */ jsx("button", { onClick: () => setSelectedCandidate(null), className: "p-2 hover:bg-surface rounded-lg text-text-muted transition-colors", children: /* @__PURE__ */ jsx(X, { size: 20 }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "p-6 space-y-4 max-h-[60vh] overflow-y-auto", children: selectedCandidate.documents && selectedCandidate.documents.length > 0 ? selectedCandidate.documents.map((doc) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-4 bg-background border border-border rounded-md group hover:border-primary-600/50 transition-colors", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(FileText, { className: "text-primary-600", size: 20 }),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-text-primary", children: doc.document_type })
        ] }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: doc.document_url,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center gap-2 text-xs font-semibold text-primary-600 hover:underline",
            children: [
              "View ",
              /* @__PURE__ */ jsx(ExternalLink, { size: 14 })
            ]
          }
        )
      ] }, doc.id)) : /* @__PURE__ */ jsx("div", { className: "py-8 text-center text-text-muted italic", children: "No documents uploaded yet." }) }),
      /* @__PURE__ */ jsxs("div", { className: "p-6 bg-surface/50 border-t border-border flex justify-between items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              size: "sm",
              variant: "primary",
              className: "bg-success hover:bg-success/90 border-none",
              onClick: () => updateStatus(selectedCandidate.id, "approved"),
              children: "Approve"
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              size: "sm",
              variant: "primary",
              className: "bg-danger hover:bg-danger/90 border-none",
              onClick: () => updateStatus(selectedCandidate.id, "rejected"),
              children: "Reject"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          Button,
          {
            size: "sm",
            variant: "outline",
            onClick: () => setSelectedCandidate(null),
            children: "Close"
          }
        )
      ] })
    ] }) })
  ] });
}
const $$Candidates = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Candidates;
  const { userId } = Astro2.locals.auth();
  if (!userId) return Astro2.redirect("/sign-in");
  const profile = await getUserProfile(userId);
  if (!profile) return Astro2.redirect("/dashboard");
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Candidates", "role": profile.role }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "CandidateTable", CandidateTable, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/admin/CandidateTable", "client:component-export": "default" })} ` })}`;
}, "D:/skyward/src/pages/hr/candidates.astro", void 0);
const $$file = "D:/skyward/src/pages/hr/candidates.astro";
const $$url = "/hr/candidates";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Candidates,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
