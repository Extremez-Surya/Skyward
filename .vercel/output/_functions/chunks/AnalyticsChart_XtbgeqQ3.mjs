import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { motion } from "framer-motion";
function AnalyticsChart({ title, data, color = "bg-primary-600", suffix = "" }) {
  const maxValue = Math.max(...data.map((d) => d.value));
  return /* @__PURE__ */ jsxs("div", { className: "p-8 bg-white border border-border rounded-2xl flex flex-col h-full shadow-premium hover:shadow-lifted transition-all", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-8", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-text-muted uppercase tracking-widest", children: title }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("div", { className: `w-2 h-2 rounded-full ${color}` }),
        /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-text-secondary", children: "Real-time Data" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex-grow flex items-end gap-3 min-h-[200px]", children: data.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col items-center gap-4 group relative", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute bottom-full mb-3 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 bg-text-primary text-white text-[11px] font-bold px-3 py-1.5 rounded-lg pointer-events-none whitespace-nowrap z-10 shadow-xl border border-white/10", children: [
        item.value,
        suffix
      ] }),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { height: 0 },
          whileInView: { height: `${item.value / maxValue * 100}%` },
          viewport: { once: true },
          transition: { duration: 1, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] },
          className: `w-full ${color} rounded-t-xl opacity-20 group-hover:opacity-100 transition-all min-h-[4px] relative`,
          children: /* @__PURE__ */ jsx("div", { className: `absolute top-0 inset-x-0 h-1 ${color} brightness-125 rounded-t-xl opacity-50` })
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "text-[11px] text-text-muted font-bold tracking-tighter uppercase w-full text-center", children: item.label })
    ] }, i)) })
  ] });
}
export {
  AnalyticsChart as A
};
