import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, bj as renderSlot, _ as addAttribute, bk as renderHead } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_C1ExgZnB.mjs";
/* empty css                 */
import { U as UserButton } from "./index_CH41tSfv.mjs";
import { Bell, Search, Settings, LayoutDashboard, Users, Briefcase, CalendarDays, FileText, BarChart3, ShieldCheck } from "lucide-react";
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$DashboardLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$DashboardLayout;
  const { title } = Astro2.props;
  const isDev = false;
  const menuItems = [
    { name: "Overview", icon: LayoutDashboard, href: "/dashboard", active: true },
    { name: "Workforce", icon: Users, href: "/dashboard/workforce" },
    { name: "Deployments", icon: Briefcase, href: "/dashboard/deployments" },
    { name: "Attendance", icon: CalendarDays, href: "/dashboard/attendance" },
    { name: "Invoices", icon: FileText, href: "/dashboard/invoices" },
    { name: "Analytics", icon: BarChart3, href: "/dashboard/analytics" }
  ];
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>', ` | Skyward Dashboard</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet"><script>
      const theme = (() => {
        if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
          return localStorage.getItem('theme');
        }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          return 'dark';
        }
        return 'light';
      })();
    
      if (theme === 'light') {
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.add('dark');
      }
      window.localStorage.setItem('theme', theme);
    <\/script>`, '</head> <body class="bg-background min-h-screen flex">  <aside class="w-64 border-r border-border bg-card flex flex-col fixed inset-y-0 left-0 z-50"> <div class="p-6 border-b border-border"> <a href="/" class="flex items-center gap-2 group"> <div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center text-white shadow-sm"> ', ' </div> <span class="text-xl font-bold tracking-tight text-text-primary">Skyward</span> </a> </div> <nav class="flex-1 p-4 space-y-1 overflow-y-auto"> ', ' </nav> <div class="p-4 border-t border-border space-y-1"> <a href="/dashboard/settings" class="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-semibold text-text-secondary hover:bg-surface hover:text-text-primary transition-all"> ', '\nSettings\n</a> <div class="pt-4 px-3 flex items-center justify-between"> ', ' <div class="text-xs font-bold text-text-muted uppercase tracking-widest">Enterprise</div> </div> </div> </aside>  <main class="flex-1 ml-64 flex flex-col">  <header class="h-16 border-b border-border bg-background/80 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-40"> <div class="flex items-center gap-4 flex-1"> <div class="relative max-w-md w-full"> ', ' <input type="text" placeholder="Search workforce, deployments..." class="w-full pl-10 pr-4 py-2 bg-surface border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary-600/20 focus:border-primary-600 transition-all text-text-primary"> </div> </div> <div class="flex items-center gap-4"> <button class="p-2 text-text-secondary hover:bg-surface rounded-lg transition-colors relative"> ', ' <span class="absolute top-2 right-2 w-2 h-2 bg-danger rounded-full border-2 border-background"></span> </button> <div class="h-8 w-px bg-border"></div> <div class="flex items-center gap-3"> <div class="text-right hidden sm:block"> <div class="text-sm font-bold text-text-primary line-clamp-1">Enterprise Admin</div> <div class="text-[10px] font-bold text-text-muted uppercase tracking-widest">Skyward Partner</div> </div> <div class="w-10 h-10 rounded-full bg-primary-600/10 border border-primary-600/20 flex items-center justify-center text-primary-600 font-bold">\nEA\n</div> </div> </div> </header>  <div class="p-8"> ', " </div> </main> ", " </body></html>"])), title, renderHead(), renderComponent($$result, "ShieldCheck", ShieldCheck, { "size": 20 }), menuItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${item.active ? "bg-primary-600/10 text-primary-600" : "text-text-secondary hover:bg-surface hover:text-text-primary"}`, "class")}> ${renderComponent($$result, "item.icon", item.icon, { "size": 18 })} ${item.name} </a>`), renderComponent($$result, "Settings", Settings, { "size": 18 }), renderComponent($$result, "UserButton", UserButton, { "afterSignOutUrl": "/" }), renderComponent($$result, "Search", Search, { "size": 18, "class": "absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" }), renderComponent($$result, "Bell", Bell, { "size": 20 }), renderSlot($$result, $$slots["default"]), isDev);
}, "D:/skyward/src/layouts/dashboards/DashboardLayout.astro", void 0);
export {
  $$DashboardLayout as $
};
