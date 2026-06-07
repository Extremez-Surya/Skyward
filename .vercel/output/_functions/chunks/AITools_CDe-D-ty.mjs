import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Sparkles, Loader2, Send } from "lucide-react";
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
    showJD && /* @__PURE__ */ jsxs("div", { className: "p-6 bg-surface border border-surface/50 rounded-2xl space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-primary", children: [
        /* @__PURE__ */ jsx(Sparkles, { size: 20 }),
        /* @__PURE__ */ jsx("h3", { className: "font-bold", children: "AI JD Generator" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            placeholder: "Enter role name (e.g. Warehouse Supervisor)",
            className: "flex-1 bg-background border border-surface/50 rounded-xl px-4 py-2 text-sm focus:outline-none",
            value: jdRole,
            onChange: (e) => setJdRole(e.target.value)
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: generateJD,
            disabled: !!loading,
            className: "px-4 py-2 bg-primary text-white rounded-xl text-sm font-medium hover:bg-primary-hover disabled:opacity-50",
            children: loading === "jd" ? /* @__PURE__ */ jsx(Loader2, { size: 18, className: "animate-spin" }) : "Generate"
          }
        )
      ] }),
      jdOutput && /* @__PURE__ */ jsx("div", { className: "mt-4 p-4 bg-background border border-surface/50 rounded-xl max-h-60 overflow-y-auto whitespace-pre-wrap text-xs text-text-muted", children: jdOutput })
    ] }),
    showAnalyzer && /* @__PURE__ */ jsxs("div", { className: "p-6 bg-surface border border-surface/50 rounded-2xl space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-primary", children: [
        /* @__PURE__ */ jsx(Sparkles, { size: 20 }),
        /* @__PURE__ */ jsx("h3", { className: "font-bold", children: "AI Requirement Analyzer" })
      ] }),
      /* @__PURE__ */ jsx(
        "textarea",
        {
          placeholder: "Paste client requirement text here...",
          className: "w-full h-24 bg-background border border-surface/50 rounded-xl px-4 py-3 text-sm focus:outline-none resize-none",
          value: reqText,
          onChange: (e) => setReqText(e.target.value)
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: analyzeRequirement,
          disabled: !!loading,
          className: "w-full py-2 bg-primary text-white rounded-xl text-sm font-medium hover:bg-primary-hover disabled:opacity-50 flex items-center justify-center gap-2",
          children: loading === "req" ? /* @__PURE__ */ jsx(Loader2, { size: 18, className: "animate-spin" }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Send, { size: 16 }),
            " Analyze"
          ] })
        }
      ),
      reqAnalysis && /* @__PURE__ */ jsxs("div", { className: "mt-4 p-4 bg-background border border-surface/50 rounded-xl text-xs space-y-2", children: [
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Workforce Type:" }),
          " ",
          reqAnalysis.workforce_type
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Timeline:" }),
          " ",
          reqAnalysis.estimated_hiring_timeline
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Recommendation:" }),
          " ",
          reqAnalysis.staffing_recommendation
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Key Skills:" }),
          " ",
          reqAnalysis.key_skills_needed
        ] })
      ] })
    ] })
  ] });
}
export {
  AITools as A
};
