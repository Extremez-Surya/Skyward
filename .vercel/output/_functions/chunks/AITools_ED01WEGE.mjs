import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Sparkles, Send } from "lucide-react";
import { B as Button } from "./Button_CrV2lgV8.mjs";
function AITools({ role }) {
  const [jdRole, setJdRole] = useState("");
  const [jdOutput, setJdOutput] = useState("");
  const [reqText, setReqText] = useState("");
  const [reqAnalysis, setReqAnalysis] = useState(null);
  const [loading, setLoading] = useState(null);
  const showJD = role === "admin" || role === "manager";
  const showAnalyzer = role === "admin" || role === "manager" || role === "client";
  if (!showJD && !showAnalyzer) return null;
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
  return /* @__PURE__ */ jsxs("div", { className: `grid grid-cols-1 ${showJD && showAnalyzer ? "lg:grid-cols-2" : ""} gap-8`, children: [
    showJD && /* @__PURE__ */ jsxs("div", { className: "p-8 bg-card border border-border rounded-[32px] shadow-premium space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-primary-600", children: [
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center", children: /* @__PURE__ */ jsx(Sparkles, { size: 20 }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-text-primary tracking-tight", children: "AI Job Description" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            placeholder: "e.g. Warehouse Supervisor",
            className: "flex-1 bg-surface border border-border rounded-xl px-5 py-3 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-primary-600/10 transition-all",
            value: jdRole,
            onChange: (e) => setJdRole(e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            onClick: generateJD,
            isLoading: loading === "jd",
            size: "md",
            className: "px-6 rounded-xl",
            children: "Generate"
          }
        )
      ] }),
      jdOutput && /* @__PURE__ */ jsx("div", { className: "mt-6 p-6 bg-surface border border-border rounded-2xl max-h-80 overflow-y-auto whitespace-pre-wrap text-sm text-text-secondary leading-relaxed font-medium", children: jdOutput })
    ] }),
    showAnalyzer && /* @__PURE__ */ jsxs("div", { className: "p-8 bg-card border border-border rounded-[32px] shadow-premium space-y-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-primary-600", children: [
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center", children: /* @__PURE__ */ jsx(Sparkles, { size: 20 }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-text-primary tracking-tight", children: "Requirement Analyzer" })
      ] }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          placeholder: "Paste raw client requirement text here...",
          className: "w-full h-32 bg-surface border border-border rounded-2xl px-5 py-4 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-primary-600/10 transition-all resize-none",
          value: reqText,
          onChange: (e) => setReqText(e.target.value)
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          onClick: analyzeRequirement,
          isLoading: loading === "req",
          className: "w-full rounded-xl",
          rightIcon: Send,
          children: "Analyze Requirement"
        }
      ),
      reqAnalysis && /* @__PURE__ */ jsxs("div", { className: "mt-6 grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "p-4 bg-surface border border-border rounded-xl", children: [
          /* @__PURE__ */ jsx("div", { className: "text-[10px] font-bold text-text-muted uppercase tracking-widest mb-1", children: "Workforce Type" }),
          /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-text-primary", children: reqAnalysis.workforce_type })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-4 bg-surface border border-border rounded-xl", children: [
          /* @__PURE__ */ jsx("div", { className: "text-[10px] font-bold text-text-muted uppercase tracking-widest mb-1", children: "Timeline" }),
          /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-text-primary", children: reqAnalysis.estimated_hiring_timeline })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-4 bg-surface border border-border rounded-xl col-span-2", children: [
          /* @__PURE__ */ jsx("div", { className: "text-[10px] font-bold text-text-muted uppercase tracking-widest mb-1", children: "Recommendation" }),
          /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-text-secondary leading-relaxed", children: reqAnalysis.staffing_recommendation })
        ] })
      ] })
    ] })
  ] });
}
export {
  AITools as A
};
