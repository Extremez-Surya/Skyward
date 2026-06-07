import { jsx, jsxs } from "react/jsx-runtime";
import "react";
import { motion } from "framer-motion";
import { Sparkles, Truck, Package, ShoppingCart, Briefcase, MapPin, ArrowRight } from "lucide-react";
import { C as Card, a as CardTitle, b as CardDescription } from "./Card_DgTW5Sf9.mjs";
const services = [
  {
    title: "Logistics Staffing",
    description: "Expert delivery executives, riders, and route support staff optimized for rapid fulfillment.",
    icon: Truck,
    slug: "logistics"
  },
  {
    title: "Warehouse Operations",
    description: "Specialized pickers, packers, loaders, and inventory experts for seamless supply chain management.",
    icon: Package,
    slug: "warehouse"
  },
  {
    title: "Retail Solutions",
    description: "Professional store helpers, billing staff, and sales support teams to elevate your customer experience.",
    icon: ShoppingCart,
    slug: "retail"
  },
  {
    title: "Enterprise Support",
    description: "Data entry operators, receptionists, and administrative support for high-growth corporate environments.",
    icon: Briefcase,
    slug: "office-support"
  },
  {
    title: "Facility Management",
    description: "Trained housekeeping personnel and pantry helpers to maintain world-class facility standards.",
    icon: Sparkles,
    slug: "housekeeping"
  },
  {
    title: "Field Operations",
    description: "Scalable survey staff, promoters, and field executives for pan-India market research and sales.",
    icon: MapPin,
    slug: "field-operations"
  }
];
function ServicesOverview() {
  return /* @__PURE__ */ jsx("section", { className: "section-padding bg-background overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto mb-24 text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center px-4 py-2 rounded-full bg-primary-600/10 text-primary-600 text-sm font-bold mb-6", children: [
        /* @__PURE__ */ jsx(Sparkles, { size: 16, className: "mr-2" }),
        "Our Workforce Model"
      ] }),
      /* @__PURE__ */ jsxs("h2", { className: "text-text-primary mb-8 leading-[1.1]", children: [
        "Workforce solutions ",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "text-primary-600", children: "tailored for scale." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-text-secondary leading-relaxed mb-10 font-medium max-w-2xl mx-auto", children: "We've developed a high-density recruitment and deployment model that bridges the gap between massive operational demands and reliable human capital." }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 mt-12", children: [
        { label: "Onboarding Speed", value: "24-48hrs" },
        { label: "Deployment Scale", value: "Pan-India" },
        { label: "Compliance Rate", value: "100%" },
        { label: "Retention Focus", value: "92%" }
      ].map((stat) => /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-2xl bg-surface border border-border", children: [
        /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-primary-600 mb-1", children: stat.value }),
        /* @__PURE__ */ jsx("div", { className: "text-sm text-text-secondary font-semibold", children: stat.label })
      ] }, stat.label)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: services.map((service, index) => {
      const Icon = service.icon;
      return /* @__PURE__ */ jsx(
        motion.a,
        {
          href: `/services/${service.slug}`,
          className: "group",
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: index * 0.05 },
          children: /* @__PURE__ */ jsxs(
            Card,
            {
              variant: "feature",
              className: "h-full bg-card flex flex-col items-start border-transparent hover:border-primary-100",
              children: [
                /* @__PURE__ */ jsx("div", { className: "w-14 h-14 rounded-2xl bg-primary-600/10 flex items-center justify-center mb-8 group-hover:bg-primary-600 group-hover:text-white text-primary-600 transition-all duration-300", children: /* @__PURE__ */ jsx(Icon, { size: 28 }) }),
                /* @__PURE__ */ jsx(CardTitle, { className: "mb-4", children: service.title }),
                /* @__PURE__ */ jsx(CardDescription, { className: "flex-grow mb-8", children: service.description }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center text-sm font-bold text-primary-600 group-hover:gap-2 transition-all", children: [
                  "View Solution ",
                  /* @__PURE__ */ jsx(ArrowRight, { size: 18, className: "ml-1" })
                ] })
              ]
            }
          )
        },
        service.title
      );
    }) })
  ] }) });
}
export {
  ServicesOverview as S
};
