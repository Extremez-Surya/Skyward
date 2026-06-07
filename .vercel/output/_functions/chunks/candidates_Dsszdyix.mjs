import { c as createComponent } from "./astro-component_bcg0hk54.mjs";
import "piccolore";
import { I as renderTemplate } from "./sequence_rsVvLGim.mjs";
import { r as renderComponent } from "./entrypoint_B9LsAA9s.mjs";
import { $ as $$DashboardLayout } from "./DashboardLayout_D-9FgQK8.mjs";
import { g as getUserProfile } from "./user_C13cBgEN.mjs";
import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Search, Plus, Edit2, Trash2 } from "lucide-react";
function CandidateTable() {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
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
  const filteredCandidates = candidates.filter(
    (c) => c.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) || c.email?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative w-full sm:w-96", children: [
        /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 text-text-muted", size: 18 }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            placeholder: "Search candidates...",
            className: "w-full pl-10 pr-4 py-2.5 bg-surface border border-surface/50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20",
            value: searchTerm,
            onChange: (e) => setSearchTerm(e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("button", { className: "px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-medium hover:bg-primary-hover transition-all flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Plus, { size: 18 }),
        "Add Candidate"
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "bg-surface border border-surface/50 rounded-2xl overflow-hidden", children: loading ? /* @__PURE__ */ jsx("div", { className: "p-12 text-center text-text-muted", children: "Loading candidates..." }) : filteredCandidates.length === 0 ? /* @__PURE__ */ jsx("div", { className: "p-12 text-center text-text-muted", children: "No candidates found." }) : /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left", children: [
      /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-surface/50 bg-surface/50", children: [
        /* @__PURE__ */ jsx("th", { className: "px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-muted", children: "Candidate" }),
        /* @__PURE__ */ jsx("th", { className: "px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-muted", children: "Experience" }),
        /* @__PURE__ */ jsx("th", { className: "px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-muted", children: "Status" }),
        /* @__PURE__ */ jsx("th", { className: "px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-muted", children: "Joined" }),
        /* @__PURE__ */ jsx("th", { className: "px-6 py-4 text-xs font-semibold uppercase tracking-wider text-text-muted text-right", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-surface/50", children: filteredCandidates.map((candidate) => /* @__PURE__ */ jsxs("tr", { className: "hover:bg-primary/5 transition-colors group", children: [
        /* @__PURE__ */ jsx("td", { className: "px-6 py-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-text-main", children: candidate.full_name }),
          /* @__PURE__ */ jsx("span", { className: "text-xs text-text-muted", children: candidate.email })
        ] }) }),
        /* @__PURE__ */ jsx("td", { className: "px-6 py-4 text-sm text-text-muted", children: candidate.experience || "N/A" }),
        /* @__PURE__ */ jsx("td", { className: "px-6 py-4", children: /* @__PURE__ */ jsx("span", { className: `px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${candidate.status === "active" ? "bg-green-500/10 text-green-500" : candidate.status === "screening" ? "bg-blue-500/10 text-blue-500" : "bg-gray-500/10 text-gray-500"}`, children: candidate.status }) }),
        /* @__PURE__ */ jsx("td", { className: "px-6 py-4 text-sm text-text-muted", children: new Date(candidate.created_at).toLocaleDateString() }),
        /* @__PURE__ */ jsx("td", { className: "px-6 py-4 text-right", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity", children: [
          /* @__PURE__ */ jsx("button", { className: "p-2 hover:bg-surface-hover rounded-lg text-text-muted hover:text-primary transition-colors", children: /* @__PURE__ */ jsx(Edit2, { size: 16 }) }),
          /* @__PURE__ */ jsx("button", { className: "p-2 hover:bg-surface-hover rounded-lg text-text-muted hover:text-red-500 transition-colors", children: /* @__PURE__ */ jsx(Trash2, { size: 16 }) })
        ] }) })
      ] }, candidate.id)) })
    ] }) }) })
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
}, "D:/skyward/src/pages/admin/candidates.astro", void 0);
const $$file = "D:/skyward/src/pages/admin/candidates.astro";
const $$url = "/admin/candidates";
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
