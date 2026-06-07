import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead, _ as addAttribute } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_C1ExgZnB.mjs";
import { $ as $$DashboardLayout } from "./DashboardLayout_DvujC7xG.mjs";
import { g as getClientProfile, a as getClientAttendance } from "./client_CAUf0W2L.mjs";
import { Search, Download, Calendar, UserCheck, UserX, Clock, Users } from "lucide-react";
import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { B as Button } from "./Button_V0yuJDF0.mjs";
import { I as Input } from "./Input_BAi0AciX.mjs";
import { B as Badge } from "./Badge_DYl_Q3GX.mjs";
import { C as Card } from "./Card_DgTW5Sf9.mjs";
function AttendanceTable({ attendance }) {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredAttendance = attendance.filter(
    (record) => record.deployments.candidates.full_name.toLowerCase().includes(searchTerm.toLowerCase()) || record.deployments.role.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const exportToCSV = () => {
    const headers = ["Staff Member", "Role", "Status", "Check In", "Check Out", "Date"];
    const rows = filteredAttendance.map((record) => [
      record.deployments.candidates.full_name,
      record.deployments.role,
      record.status,
      record.check_in ? new Date(record.check_in).toLocaleTimeString("en-IN") : "-",
      record.check_out ? new Date(record.check_out).toLocaleTimeString("en-IN") : "-",
      record.attendance_date
    ]);
    const csvContent = [
      headers.join(","),
      ...rows.map((row) => row.join(","))
    ].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `attendance_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-start md:items-center gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative w-full md:w-80", children: [
        /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 text-text-muted z-10", size: 18 }),
        /* @__PURE__ */ jsx(
          Input,
          {
            placeholder: "Filter by name or role...",
            className: "pl-10",
            value: searchTerm,
            onChange: (e) => setSearchTerm(e.target.value)
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        Button,
        {
          onClick: exportToCSV,
          variant: "outline",
          className: "border-success text-success hover:bg-success/10",
          leftIcon: Download,
          children: "Export CSV"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(Card, { variant: "standard", animate: false, className: "p-0 border-border overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "hidden md:block overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-border bg-surface", children: [
          /* @__PURE__ */ jsx("th", { className: "px-6 h-[56px] text-xs font-semibold uppercase tracking-wider text-text-muted", children: "Staff Member" }),
          /* @__PURE__ */ jsx("th", { className: "px-6 h-[56px] text-xs font-semibold uppercase tracking-wider text-text-muted", children: "Role" }),
          /* @__PURE__ */ jsx("th", { className: "px-6 h-[56px] text-xs font-semibold uppercase tracking-wider text-text-muted", children: "Status" }),
          /* @__PURE__ */ jsx("th", { className: "px-6 h-[56px] text-xs font-semibold uppercase tracking-wider text-text-muted", children: "Check In" }),
          /* @__PURE__ */ jsx("th", { className: "px-6 h-[56px] text-xs font-semibold uppercase tracking-wider text-text-muted", children: "Check Out" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-border", children: filteredAttendance.length > 0 ? filteredAttendance.map((record) => /* @__PURE__ */ jsxs("tr", { className: "hover:bg-primary-600/5 transition-colors group", children: [
          /* @__PURE__ */ jsx("td", { className: "px-6 h-[56px]", children: /* @__PURE__ */ jsx("span", { className: "font-medium text-text-primary group-hover:text-primary-600 transition-colors", children: record.deployments.candidates.full_name }) }),
          /* @__PURE__ */ jsx("td", { className: "px-6 h-[56px] text-text-secondary", children: record.deployments.role }),
          /* @__PURE__ */ jsx("td", { className: "px-6 h-[56px]", children: /* @__PURE__ */ jsx(Badge, { variant: record.status === "present" ? "success" : record.status === "absent" ? "danger" : "warning", children: record.status.charAt(0).toUpperCase() + record.status.slice(1) }) }),
          /* @__PURE__ */ jsx("td", { className: "px-6 h-[56px] text-text-secondary", children: record.check_in ? new Date(record.check_in).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }) : "-" }),
          /* @__PURE__ */ jsx("td", { className: "px-6 h-[56px] text-text-secondary", children: record.check_out ? new Date(record.check_out).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }) : "-" })
        ] }, record.id)) : /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: 5, className: "px-6 py-12 text-center text-text-muted", children: "No attendance records found for today." }) }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "md:hidden divide-y divide-border", children: filteredAttendance.length > 0 ? filteredAttendance.map((record) => /* @__PURE__ */ jsxs("div", { className: "p-5 flex flex-col gap-4 active:bg-surface transition-colors", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "font-bold text-text-primary text-lg leading-tight", children: record.deployments.candidates.full_name }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-text-secondary font-medium", children: record.deployments.role })
          ] }),
          /* @__PURE__ */ jsx(Badge, { variant: record.status === "present" ? "success" : record.status === "absent" ? "danger" : "warning", children: record.status.charAt(0).toUpperCase() + record.status.slice(1) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 pt-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-3 rounded-xl bg-surface border border-border/50", children: [
            /* @__PURE__ */ jsx("div", { className: "text-[10px] font-bold text-text-muted uppercase tracking-wider mb-1", children: "Check In" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-text-primary", children: record.check_in ? new Date(record.check_in).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }) : "-" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-3 rounded-xl bg-surface border border-border/50", children: [
            /* @__PURE__ */ jsx("div", { className: "text-[10px] font-bold text-text-muted uppercase tracking-wider mb-1", children: "Check Out" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-text-primary", children: record.check_out ? new Date(record.check_out).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }) : "-" })
          ] })
        ] })
      ] }, record.id)) : /* @__PURE__ */ jsx("div", { className: "px-6 py-12 text-center text-text-muted", children: "No attendance records found." }) })
    ] })
  ] });
}
const $$Attendance = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Attendance;
  const { userId } = Astro2.locals.auth();
  if (!userId) {
    return Astro2.redirect("/sign-in");
  }
  const profile = await getClientProfile(userId);
  if (!profile) {
    return Astro2.redirect("/dashboard");
  }
  const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
  const attendance = await getClientAttendance(profile.id, today);
  const stats = {
    present: attendance.filter((a) => a.status === "present").length,
    absent: attendance.filter((a) => a.status === "absent").length,
    late: attendance.filter((a) => a.status === "late").length,
    total: attendance.length
  };
  const kpis = [
    { label: "Present", value: stats.present, icon: UserCheck, color: "text-success", bg: "bg-success/10" },
    { label: "Absent", value: stats.absent, icon: UserX, color: "text-danger", bg: "bg-danger/10" },
    { label: "Late", value: stats.late, icon: Clock, color: "text-warning", bg: "bg-warning/10" },
    { label: "Total Deployed", value: stats.total, icon: Users, color: "text-primary-600", bg: "bg-primary-50" }
  ];
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Workforce Attendance" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-10 flex items-center justify-between"> <div> <h1 class="text-3xl font-bold text-text-primary tracking-tight">Daily Attendance</h1> <p class="text-text-secondary font-medium">Monitoring for ${(/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", { dateStyle: "full" })}</p> </div> ${renderComponent($$result2, "Button", Button, { "variant": "secondary", "size": "sm", "leftIcon": Calendar }, { "default": async ($$result3) => renderTemplate`Change Date` })} </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"> ${kpis.map((kpi) => renderTemplate`<div class="p-6 bg-white border border-border rounded-2xl shadow-premium hover:shadow-lifted transition-all group"> <div class="flex items-center gap-4 mb-4"> <div${addAttribute(`w-10 h-10 rounded-xl ${kpi.bg} ${kpi.color} flex items-center justify-center transition-transform group-hover:scale-110`, "class")}> ${renderComponent($$result2, "kpi.icon", kpi.icon, { "size": 20 })} </div> <div class="text-sm font-bold text-text-muted uppercase tracking-widest">${kpi.label}</div> </div> <div${addAttribute(`text-3xl font-bold ${kpi.color === "text-primary-600" ? "text-text-primary" : kpi.color}`, "class")}> ${kpi.value} </div> </div>`)} </div> <div class="bg-card border border-border rounded-[32px] shadow-premium p-8"> <div class="mb-8"> <h2 class="text-xl font-bold text-text-primary tracking-tight">Deployment Roster</h2> <p class="text-sm text-text-secondary font-medium">Detailed log of personnel activity for today.</p> </div> ${renderComponent($$result2, "AttendanceTable", AttendanceTable, { "attendance": attendance, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/AttendanceTable", "client:component-export": "default" })} </div> ` })}`;
}, "D:/skyward/src/pages/client/attendance.astro", void 0);
const $$file = "D:/skyward/src/pages/client/attendance.astro";
const $$url = "/client/attendance";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Attendance,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
