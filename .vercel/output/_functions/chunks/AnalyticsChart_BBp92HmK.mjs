import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { motion } from "framer-motion";
function AnalyticsChart({ title, data, color = "bg-primary", suffix = "" }) {
  const maxValue = Math.max(...data.map((d) => d.value));
  return /* @__PURE__ */ jsxs("div", { className: "p-6 bg-surface border border-surface/50 rounded-2xl flex flex-col h-full", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium text-text-muted mb-6 uppercase tracking-wider", children: title }),
    /* @__PURE__ */ jsx("div", { className: "flex-grow flex items-end gap-3 min-h-[150px]", children: data.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col items-center gap-2 group relative", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-primary text-white text-[10px] font-bold px-2 py-1 rounded pointer-events-none whitespace-nowrap z-10", children: [
        item.value,
        suffix
      ] }),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { height: 0 },
          whileInView: { height: `${item.value / maxValue * 100}%` },
          viewport: { once: true },
          transition: { duration: 0.8, delay: i * 0.1, ease: "easeOut" },
          className: `w-full ${color} rounded-t-lg opacity-80 group-hover:opacity-100 transition-opacity min-h-[4px]`
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "text-[10px] text-text-muted font-medium truncate w-full text-center", children: item.label })
    ] }, i)) })
  ] });
}
export {
  AnalyticsChart as A
};
