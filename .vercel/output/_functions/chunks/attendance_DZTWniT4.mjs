import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_BJdmQt7F.mjs";
import { $ as $$DashboardLayout } from "./DashboardLayout_BUz5DuYj.mjs";
import { g as getClientProfile, a as getClientAttendance } from "./client_BVEngwvD.mjs";
import { Search, Download, Calendar, UserCheck, UserX, Clock } from "lucide-react";
import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { B as Button } from "./Layout_BLze-jQV.mjs";
import { I as Input } from "./Input_bwwY4Vub.mjs";
import { B as Badge } from "./Badge_DYl_Q3GX.mjs";
import { C as Card } from "./Card_BvMXtm5W.mjs";
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
    /* @__PURE__ */ jsx(Card, { variant: "standard", animate: false, className: "p-0 border-border overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left", children: [
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
    ] }) }) })
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
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Attendance", "role": "client" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="space-y-8"> <div class="flex flex-col md:flex-row md:items-center justify-between gap-4"> <div> <h1 class="text-2xl font-bold text-text-main">Daily Attendance</h1> <p class="text-text-muted">Monitoring for ${(/* @__PURE__ */ new Date()).toLocaleDateString("en-IN", { dateStyle: "full" })}</p> </div> <div class="flex items-center gap-2 px-4 py-2 bg-surface border border-surface/50 rounded-xl text-sm font-medium"> ${renderComponent($$result2, "Calendar", Calendar, { "size": 18, "className": "text-primary" })} <span>Change Date</span> </div> </div> <div class="grid grid-cols-1 md:grid-cols-4 gap-6"> <div class="p-6 bg-surface border border-surface/50 rounded-2xl"> <div class="flex items-center gap-3 text-text-muted mb-2"> ${renderComponent($$result2, "UserCheck", UserCheck, { "size": 18 })} <span class="text-xs font-medium uppercase tracking-wider">Present</span> </div> <p class="text-3xl font-bold text-green-500">${stats.present}</p> </div> <div class="p-6 bg-surface border border-surface/50 rounded-2xl"> <div class="flex items-center gap-3 text-text-muted mb-2"> ${renderComponent($$result2, "UserX", UserX, { "size": 18 })} <span class="text-xs font-medium uppercase tracking-wider">Absent</span> </div> <p class="text-3xl font-bold text-red-500">${stats.absent}</p> </div> <div class="p-6 bg-surface border border-surface/50 rounded-2xl"> <div class="flex items-center gap-3 text-text-muted mb-2"> ${renderComponent($$result2, "Clock", Clock, { "size": 18 })} <span class="text-xs font-medium uppercase tracking-wider">Late</span> </div> <p class="text-3xl font-bold text-yellow-500">${stats.late}</p> </div> <div class="p-6 bg-surface border border-surface/50 rounded-2xl"> <div class="flex items-center gap-3 text-text-muted mb-2"> ${renderComponent($$result2, "UserCheck", UserCheck, { "size": 18 })} <span class="text-xs font-medium uppercase tracking-wider">Total Deployed</span> </div> <p class="text-3xl font-bold text-text-main">${stats.total}</p> </div> </div> ${renderComponent($$result2, "AttendanceTable", AttendanceTable, { "attendance": attendance, "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/AttendanceTable", "client:component-export": "default" })} </div> ` })}`;
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
