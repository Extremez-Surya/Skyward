import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { Truck, Package, ShoppingCart, Briefcase, Sparkles, MapPin, Users, ArrowRight } from "lucide-react";
import { C as Card } from "./Card_BvMXtm5W.mjs";
const services = [
  {
    title: "Logistics Staffing",
    description: "Delivery Executives, Riders, Route Support Staff.",
    icon: Truck,
    slug: "logistics"
  },
  {
    title: "Warehouse Staffing",
    description: "Pickers, Packers, Loaders, Inventory Assistants.",
    icon: Package,
    slug: "warehouse"
  },
  {
    title: "Retail Staffing",
    description: "Store Helpers, Billing Staff, Sales Support Staff.",
    icon: ShoppingCart,
    slug: "retail"
  },
  {
    title: "Office Support",
    description: "Data Entry Operators, Reception Support, Office Boys.",
    icon: Briefcase,
    slug: "office-support"
  },
  {
    title: "Housekeeping",
    description: "Cleaning Staff, Pantry Helpers, Housekeeping Personnel.",
    icon: Sparkles,
    slug: "housekeeping"
  },
  {
    title: "Field Operations",
    description: "Survey Staff, Promoters, Field Executives.",
    icon: MapPin,
    slug: "field-operations"
  },
  {
    title: "Supervisory Staff",
    description: "Team Leaders, Shift Supervisors, Coordinators.",
    icon: Users,
    slug: "supervisory"
  }
];
function ServicesOverview() {
  return /* @__PURE__ */ jsx("section", { className: "py-24 bg-background relative overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "container-custom relative z-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-bold text-text-primary mb-6 tracking-tight", children: "Workforce Solutions Built For Every Business" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-text-secondary", children: "Whether you need temporary staff, contract workers, warehouse teams, retail support, or logistics manpower, Skyward HR delivers workforce solutions tailored to your business needs." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6", children: services.map((service, index) => {
      const Icon = service.icon;
      return /* @__PURE__ */ jsx("a", { href: `/services/${service.slug}`, className: "group", children: /* @__PURE__ */ jsxs(
        Card,
        {
          variant: "feature",
          className: "h-full flex flex-col items-start",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-md bg-primary-600/10 flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white text-primary-600 transition-colors", children: /* @__PURE__ */ jsx(Icon, { size: 24 }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-text-primary mb-3", children: service.title }),
            /* @__PURE__ */ jsx("p", { className: "text-text-secondary text-sm leading-relaxed flex-grow", children: service.description }),
            /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center text-sm font-medium text-primary-600 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all", children: [
              "Learn more ",
              /* @__PURE__ */ jsx(ArrowRight, { size: 16, className: "ml-1" })
            ] })
          ]
        }
      ) }, service.title);
    }) })
  ] }) });
}
export {
  ServicesOverview as S
};
