import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_Eo3uqCG1.mjs";
import { $ as $$Layout } from "./Layout_OdHJPE5s.mjs";
import { H as Header, F as Footer } from "./Footer_Br_mJlY-.mjs";
import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { TrendingUp, ArrowRight, Users, ShieldCheck, CheckCircle2, Clock, Search, ShieldAlert, AlertCircle, Users2, Cpu, BarChart3, Star, Quote } from "lucide-react";
import { B as Button } from "./Button_V0yuJDF0.mjs";
import { S as ServicesOverview } from "./ServicesOverview_Ccqr2E2P.mjs";
import { C as Card } from "./Card_DgTW5Sf9.mjs";
import { C as CTA } from "./CTA_lFXRS-ma.mjs";
import { F as FAQAccordion } from "./FAQAccordion_D2aTWR9N.mjs";
const DashboardPreview = () => {
  return /* @__PURE__ */ jsxs("div", { className: "relative w-full aspect-[4/3] bg-card rounded-2xl shadow-2xl border border-border p-6 overflow-hidden group", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute left-0 top-0 bottom-0 w-16 border-r border-border bg-surface/50 backdrop-blur-sm flex flex-col items-center py-6 gap-6", children: [
      /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center text-white shadow-lg shadow-primary-600/20", children: /* @__PURE__ */ jsx(ShieldCheck, { size: 20 }) }),
      [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-lg bg-border/60 hover:bg-primary-600/20 transition-colors cursor-pointer flex items-center justify-center text-text-muted hover:text-primary-600", children: /* @__PURE__ */ jsx("div", { className: "w-4 h-4 rounded-sm border-2 border-current opacity-50" }) }, i))
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "ml-20 h-full", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-primary-600/10 flex items-center justify-center text-primary-600", children: /* @__PURE__ */ jsx(Users, { size: 20 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "h-2 w-16 bg-primary-600/20 rounded mb-1" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-text-primary", children: "Operations Hub" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "px-3 py-1 bg-success/10 text-success rounded-full text-[10px] font-bold border border-success/20 flex items-center gap-1", children: [
            /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-success animate-pulse" }),
            "Active"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "px-3 py-1 bg-primary-600/10 text-primary-600 rounded-full text-[10px] font-bold border border-primary-600/20", children: "Region: North" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-4 mb-8", children: [
        { label: "Deployed", value: "1,240", color: "text-primary-600" },
        { label: "Attendance", value: "98.4%", color: "text-success" },
        { label: "Compliance", value: "100%", color: "text-accent" }
      ].map((stat, i) => /* @__PURE__ */ jsxs("div", { className: "p-3 rounded-xl border border-border bg-background/50 shadow-sm hover:shadow-md transition-shadow", children: [
        /* @__PURE__ */ jsx("div", { className: "text-[9px] font-bold text-text-muted uppercase tracking-wider mb-1", children: stat.label }),
        /* @__PURE__ */ jsx("div", { className: `text-xl font-bold ${stat.color}`, children: stat.value })
      ] }, i)) }),
      /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-xl border border-border bg-background/50 shadow-sm h-44 relative overflow-hidden group/chart", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-xs font-bold text-text-primary flex items-center gap-2", children: [
            "Staffing Utilization",
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-medium text-text-muted", children: "Last 12 Days" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: /* @__PURE__ */ jsx("div", { className: "h-4 w-12 bg-primary-600/10 rounded-full border border-primary-600/20" }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 bottom-0 h-28 flex items-end px-4 gap-1.5", children: [40, 60, 30, 80, 50, 70, 90, 40, 60, 50, 80, 100].map((h, i) => /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { height: 0 },
            animate: { height: `${h}%` },
            transition: { duration: 1, delay: 0.5 + i * 0.05 },
            className: "flex-1 bg-gradient-to-t from-primary-600/40 to-primary-600/5 rounded-t-sm group-hover/chart:from-primary-600/60 transition-colors"
          },
          i
        )) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 flex gap-4", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxs("div", { className: "flex-1 flex items-center gap-2 p-2 rounded-lg bg-surface/30 border border-border", children: [
        /* @__PURE__ */ jsx("div", { className: "w-6 h-6 rounded-full bg-border" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx("div", { className: "h-1.5 w-8 bg-text-primary/20 rounded" }),
          /* @__PURE__ */ jsx("div", { className: "h-1 w-6 bg-text-muted/20 rounded" })
        ] })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { x: 20, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        transition: { delay: 1 },
        className: "absolute bottom-20 -right-4 p-4 bg-card rounded-xl shadow-2xl border border-border flex items-center gap-4 z-20",
        children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-success/10 flex items-center justify-center text-success shadow-inner", children: /* @__PURE__ */ jsx(CheckCircle2, { size: 24 }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-text-primary", children: "Compliance Verified" }),
            /* @__PURE__ */ jsx("div", { className: "text-[10px] font-medium text-text-secondary", children: "All staff documents updated" })
          ] })
        ]
      }
    )
  ] });
};
function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };
  return /* @__PURE__ */ jsxs("section", { className: "relative pt-24 pb-16 lg:pt-48 lg:pb-32 overflow-hidden bg-background", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.05] dark:opacity-[0.1] pointer-events-none", style: { backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)", backgroundSize: "40px 40px" } }),
    /* @__PURE__ */ jsxs("div", { className: "absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-600/10 blur-[120px] rounded-full" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-accent/10 blur-[120px] rounded-full" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "container-custom relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          variants: container,
          initial: "hidden",
          animate: "show",
          className: "text-center lg:text-left",
          children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                variants: item,
                className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-600/10 border border-primary-600/20 mb-6 lg:mb-8",
                children: [
                  /* @__PURE__ */ jsx(TrendingUp, { size: 14, className: "text-primary-600" }),
                  /* @__PURE__ */ jsx("span", { className: "text-xs lg:text-sm font-semibold text-primary-600 uppercase tracking-wider", children: "Enterprise Workforce 2026" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.h1,
              {
                variants: item,
                className: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary mb-6 text-balance leading-[1.1]",
                children: [
                  "Professional workforce solutions for ",
                  /* @__PURE__ */ jsx("br", { className: "hidden md:block" }),
                  /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent", children: "serious businesses." })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              motion.p,
              {
                variants: item,
                className: "mx-auto lg:mx-0 max-w-xl text-base md:text-lg lg:text-xl text-text-secondary mb-10 leading-relaxed",
                children: "Scale your operations with Skyward HR. We provide trained manpower, AI-driven attendance tracking, and seamless compliance management for enterprise clients across India."
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                variants: item,
                className: "flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12",
                children: [
                  /* @__PURE__ */ jsx(
                    Button,
                    {
                      size: "lg",
                      onClick: () => window.location.href = "/contact",
                      rightIcon: ArrowRight,
                      className: "w-full sm:w-auto shadow-lg shadow-primary-600/20 rounded-2xl",
                      children: "Request Workforce"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    Button,
                    {
                      variant: "secondary",
                      size: "lg",
                      onClick: () => window.location.href = "/contact",
                      className: "w-full sm:w-auto border-border text-text-primary hover:bg-surface rounded-2xl",
                      children: "View Solutions"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                variants: item,
                className: "flex flex-wrap items-center justify-center lg:justify-start gap-6 lg:gap-8 pt-8 border-t border-border",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-center lg:text-left", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-xl lg:text-2xl font-bold text-text-primary", children: "500+" }),
                    /* @__PURE__ */ jsx("div", { className: "text-[10px] font-bold text-text-muted uppercase tracking-widest", children: "Clients" })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "w-px h-10 bg-border hidden sm:block" }),
                  /* @__PURE__ */ jsxs("div", { className: "text-center lg:text-left", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-xl lg:text-2xl font-bold text-text-primary", children: "15k+" }),
                    /* @__PURE__ */ jsx("div", { className: "text-[10px] font-bold text-text-muted uppercase tracking-widest", children: "Staff" })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "w-px h-10 bg-border hidden sm:block" }),
                  /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-2", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center text-[10px] font-bold text-white shadow-sm", children: /* @__PURE__ */ jsx(Users, { size: 16 }) }),
                    /* @__PURE__ */ jsx("div", { className: "text-[10px] font-bold text-text-muted uppercase tracking-tighter", children: "Trusted by 15,000+ staff" })
                  ] }) })
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 40 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 },
          className: "relative hidden lg:block",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-primary-600/10 blur-[120px] rounded-full" }),
            /* @__PURE__ */ jsx(DashboardPreview, {}),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                animate: { y: [0, -10, 0] },
                transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                className: "absolute -top-6 -right-6 w-24 h-24 bg-card rounded-full flex items-center justify-center border border-border shadow-xl z-30",
                children: /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-primary-600/10 rounded-full flex items-center justify-center text-primary-600", children: /* @__PURE__ */ jsx(Users, { size: 32 }) })
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { scale: 0 },
                animate: { scale: 1 },
                transition: { delay: 1.2, type: "spring" },
                className: "absolute -bottom-8 -left-8 p-4 bg-card rounded-2xl shadow-2xl border border-border z-30 flex items-center gap-3",
                children: [
                  /* @__PURE__ */ jsx("div", { className: "p-2 bg-warning/10 rounded-lg text-warning", children: /* @__PURE__ */ jsx(TrendingUp, { size: 20 }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "text-xs font-bold text-text-muted uppercase", children: "Growth" }),
                    /* @__PURE__ */ jsx("div", { className: "text-lg font-bold text-text-primary", children: "+12.5%" })
                  ] })
                ]
              }
            )
          ]
        }
      )
    ] }) })
  ] });
}
const companies = [
  "Reliance",
  "Amazon",
  "Flipkart",
  "BigBasket",
  "Zomato",
  "Swiggy",
  "DHL",
  "BlueDart"
];
function TrustedCompanies() {
  return /* @__PURE__ */ jsx("section", { className: "py-12 bg-background border-y border-border overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
    /* @__PURE__ */ jsx("p", { className: "text-center text-sm font-semibold text-text-secondary mb-10 uppercase tracking-widest", children: "Trusted by 500+ Enterprise Operations" }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-50 dark:opacity-70 grayscale hover:grayscale-0 transition-all duration-500", children: companies.map((company) => /* @__PURE__ */ jsx(
      motion.div,
      {
        whileHover: { scale: 1.05 },
        className: "text-2xl md:text-3xl font-bold text-text-primary transition-all duration-300 cursor-default",
        children: company
      },
      company
    )) })
  ] }) });
}
const challenges = [
  {
    icon: Clock,
    title: "High Turnover Rates",
    description: "Traditional staffing agencies often fail to provide stable, long-term manpower, leading to constant retraining and operational delays."
  },
  {
    icon: Search,
    title: "Lack of Transparency",
    description: "Companies struggle with visibility into worker attendance, performance, and real-time deployment status."
  },
  {
    icon: ShieldAlert,
    title: "Compliance Risks",
    description: "Managing PF, ESI, and labor law compliance for a large-scale workforce is complex and prone to legal vulnerabilities."
  },
  {
    icon: AlertCircle,
    title: "Unpredictable Scaling",
    description: "Rapidly scaling workforce during peak seasons (like BBD or Diwali sales) is often a bottleneck for logistics and retail."
  }
];
function WorkforceChallenges() {
  return /* @__PURE__ */ jsx("section", { className: "section-padding bg-background border-b border-border", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mb-20", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-text-primary mb-6", children: [
        "Workforce management is ",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "text-danger", children: "broken." }),
        " We fixed it."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-text-secondary leading-relaxed", children: "Scaling a modern business requires more than just manpower. It requires a reliable, transparent, and compliant workforce ecosystem." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8", children: challenges.map((challenge, index) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: index * 0.1 },
        className: "p-8 rounded-2xl bg-card border border-border shadow-premium",
        children: [
          /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-danger/10 flex items-center justify-center text-danger mb-6", children: /* @__PURE__ */ jsx(challenge.icon, { size: 24 }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-4", children: challenge.title }),
          /* @__PURE__ */ jsx("p", { className: "text-text-secondary leading-relaxed", children: challenge.description })
        ]
      },
      challenge.title
    )) })
  ] }) });
}
const solutions = [
  {
    icon: Users2,
    title: "Vetted & Trained Manpower",
    description: "Every worker undergoes rigorous background checks and industry-specific training before deployment."
  },
  {
    icon: Cpu,
    title: "AI-Powered Monitoring",
    description: "Our proprietary platform tracks attendance, performance, and real-time location using AI and Geo-fencing."
  },
  {
    icon: BarChart3,
    title: "Enterprise Compliance",
    description: "Automated management of ESI, PF, and Statutory Compliance with 100% legal coverage for your business."
  }
];
function Solutions() {
  return /* @__PURE__ */ jsx("section", { className: "section-padding bg-background overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "container-custom", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-text-primary mb-8 tracking-tight leading-tight", children: [
        "Workforce solutions for ",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "text-primary-600", children: "serious businesses." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-text-secondary mb-10 leading-relaxed", children: "We don't just supply manpower; we provide a complete workforce management system designed for enterprise-scale operations." }),
      /* @__PURE__ */ jsx("div", { className: "space-y-6 mb-12", children: solutions.map((item, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { delay: index * 0.1 },
          className: "flex gap-4",
          children: [
            /* @__PURE__ */ jsx("div", { className: "mt-1 w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-primary-600/20", children: /* @__PURE__ */ jsx(CheckCircle2, { size: 16 }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-text-primary mb-1", children: item.title }),
              /* @__PURE__ */ jsx("p", { className: "text-text-secondary", children: item.description })
            ] })
          ]
        },
        item.title
      )) }),
      /* @__PURE__ */ jsx(Button, { size: "lg", className: "rounded-full shadow-xl shadow-primary-600/10", children: "Explore Our Platform" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.9 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true },
          className: "relative z-10 rounded-3xl overflow-hidden shadow-2xl border border-border",
          children: /* @__PURE__ */ jsxs("div", { className: "bg-card p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center text-white shadow-lg shadow-primary-600/20", children: /* @__PURE__ */ jsx(Users2, { size: 24 }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-text-primary", children: "Worker Registry" }),
                  /* @__PURE__ */ jsx("div", { className: "text-[10px] font-medium text-text-secondary uppercase tracking-wider", children: "Active Deployments" })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "h-8 w-8 rounded-full bg-surface border border-border flex items-center justify-center text-text-secondary", children: /* @__PURE__ */ jsx(BarChart3, { size: 16 }) })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
              { name: "Rahul Sharma", role: "Warehouse Assoc.", status: "On-Site", time: "08:00 AM" },
              { name: "Priya Patel", role: "Data Entry Opt.", status: "Verified", time: "09:15 AM" },
              { name: "Amit Kumar", role: "Logistics Lead", status: "In-Transit", time: "07:45 AM" },
              { name: "Sneha Gupta", role: "Quality Analyst", status: "On-Site", time: "09:00 AM" }
            ].map((worker, i) => /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: 20 },
                whileInView: { opacity: 1, x: 0 },
                transition: { delay: 0.2 + i * 0.1 },
                className: "p-4 bg-surface rounded-xl border border-border flex justify-between items-center shadow-sm hover:shadow-premium transition-all cursor-default group",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-primary-600/10 flex items-center justify-center text-primary-600 font-bold text-xs group-hover:bg-primary-600 group-hover:text-white transition-colors", children: worker.name.split(" ").map((n) => n[0]).join("") }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("div", { className: "text-xs font-bold text-text-primary", children: worker.name }),
                      /* @__PURE__ */ jsx("div", { className: "text-[10px] text-text-secondary font-medium", children: worker.role })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
                    /* @__PURE__ */ jsx("div", { className: `h-5 px-2 bg-success/10 text-success text-[9px] font-bold rounded-full flex items-center justify-center mb-1 uppercase tracking-tighter border border-success/20`, children: worker.status }),
                    /* @__PURE__ */ jsx("div", { className: "text-[9px] text-text-secondary font-medium uppercase tracking-widest", children: worker.time })
                  ] })
                ]
              },
              i
            )) })
          ] })
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          className: "absolute -bottom-6 -right-6 p-4 bg-card rounded-2xl shadow-2xl border border-border z-20 hidden sm:flex items-center gap-3",
          children: [
            /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-secondary-500/10 flex items-center justify-center text-secondary-500", children: /* @__PURE__ */ jsx(Cpu, { size: 20 }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "text-[10px] font-bold text-text-secondary uppercase", children: "Uptime" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-text-primary", children: "99.98%" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute -top-12 -right-12 w-64 h-64 bg-primary-600/5 blur-[100px] rounded-full" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-12 -left-12 w-64 h-64 bg-secondary-500/5 blur-[100px] rounded-full" })
    ] })
  ] }) }) });
}
const Counter = ({ value, duration = 2 }) => {
  const numericValue = parseInt(value.replace(/[,+%.]/g, "")) || 0;
  const suffix = value.replace(/[0-9,]/g, "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    const val = Math.round(latest);
    if (value.includes(",")) {
      return val.toLocaleString() + suffix;
    }
    return val + suffix;
  });
  const [displayValue, setDisplayValue] = useState("0" + suffix);
  useEffect(() => {
    const controls = rounded.onChange((v) => setDisplayValue(v));
    return () => controls();
  }, [rounded]);
  return /* @__PURE__ */ jsx(
    motion.span,
    {
      onViewportEnter: () => {
        animate(count, numericValue, { duration, ease: "easeOut" });
      },
      viewport: { once: true },
      children: displayValue
    }
  );
};
const stats = [
  { label: "Active Personnel", value: "15,000+", description: "Trained and deployed across India" },
  { label: "Enterprise Clients", value: "500+", description: "Including Fortune 500 companies" },
  { label: "Cities Covered", value: "35+", description: "Pan-India presence for rapid scaling" },
  { label: "Uptime Reliability", value: "99%", description: "Guaranteed workforce availability" }
];
function AnalyticsSection() {
  return /* @__PURE__ */ jsxs("section", { className: "section-padding bg-background border-y border-border overflow-hidden relative", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0", style: { backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)", backgroundSize: "40px 40px" } }) }),
    /* @__PURE__ */ jsxs("div", { className: "container-custom relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mb-24", children: [
        /* @__PURE__ */ jsxs(
          motion.h2,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            className: "text-text-primary mb-8",
            children: [
              "Workforce operations, ",
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "text-primary-600", children: "visualized in real-time." })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: 0.1 },
            className: "text-xl text-text-secondary leading-relaxed",
            children: "Data is the heartbeat of our operations. We track every deployment, attendance record, and compliance metric to ensure your business never misses a beat."
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-12", children: stats.map((stat, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: index * 0.1 },
          className: "flex flex-col p-6 rounded-2xl bg-surface border border-border shadow-sm hover:shadow-premium transition-all",
          children: [
            /* @__PURE__ */ jsx("div", { className: "text-5xl lg:text-6xl font-bold text-primary-600 mb-4 tracking-tighter", children: /* @__PURE__ */ jsx(Counter, { value: stat.value }) }),
            /* @__PURE__ */ jsx("div", { className: "text-xl font-bold text-text-primary mb-2", children: stat.label }),
            /* @__PURE__ */ jsx("p", { className: "text-text-secondary leading-relaxed text-sm", children: stat.description })
          ]
        },
        stat.label
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-32 relative", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-end gap-1 sm:gap-2 h-64", children: Array.from({ length: 40 }).map((_, i) => /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { height: 0 },
            whileInView: { height: `${20 + Math.random() * 80}%` },
            viewport: { once: true },
            transition: { duration: 1, delay: i * 0.02, ease: "easeOut" },
            className: `flex-1 rounded-t ${i % 3 === 0 ? "bg-primary-500" : i % 3 === 1 ? "bg-primary-400" : "bg-primary-600"} opacity-40 hover:opacity-100 transition-opacity`
          },
          i
        )) }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 p-6 bg-card/80 backdrop-blur-md rounded-2xl border border-border hidden md:block shadow-xl", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-4", children: [
          { label: "Attendance", value: "98.4%", color: "bg-primary-500" },
          { label: "Compliance", value: "100%", color: "bg-primary-400" },
          { label: "Efficiency", value: "94.2%", color: "bg-primary-600" }
        ].map((item) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: `w-3 h-3 rounded-full ${item.color}` }),
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-text-secondary uppercase tracking-widest", children: item.label }),
          /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-text-primary ml-auto", children: item.value })
        ] }, item.label)) }) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex justify-between text-[10px] font-bold text-text-muted uppercase tracking-[0.2em] border-t border-border pt-4", children: [
          /* @__PURE__ */ jsx("span", { children: "Operational Timeline" }),
          /* @__PURE__ */ jsx("span", { children: "Last 24 Hours" })
        ] })
      ] })
    ] })
  ] });
}
const testimonials = [
  {
    quote: "Skyward HR completely transformed how we handle warehouse staffing. Their platform makes deployment and tracking seamless across multiple fulfillment centers.",
    author: "Rajesh Kumar",
    role: "Director of Operations, FastCart Logistics",
    avatar: "RK"
  },
  {
    quote: "The reliability of their workforce is unmatched. We never face downtime during peak sales because they always have backup staff ready and trained.",
    author: "Priya Sharma",
    role: "Head of HR, Metro Retail Group",
    avatar: "PS"
  },
  {
    quote: "Professional, transparent, and incredibly fast. They provided 500+ delivery executives in just 3 days during our national scaling phase.",
    author: "Amit Patel",
    role: "Chief Operating Officer, QuickDelivery",
    avatar: "AP"
  }
];
function Testimonials() {
  return /* @__PURE__ */ jsx("section", { className: "section-padding bg-background overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center max-w-3xl mx-auto mb-20", children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-text-primary mb-6", children: [
        "Trusted by industry ",
        /* @__PURE__ */ jsx("span", { className: "text-primary-600", children: "leaders." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-text-secondary leading-relaxed", children: "Hear from the operational heads of India's largest logistics, retail, and e-commerce companies." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: testimonials.map((testimonial, index) => /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: index * 0.1 },
        children: /* @__PURE__ */ jsxs(
          Card,
          {
            variant: "feature",
            className: "h-full bg-card border-border flex flex-col justify-between",
            children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "flex gap-1 mb-6", children: [1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsx(Star, { size: 16, className: "fill-warning text-warning" }, i)) }),
                /* @__PURE__ */ jsx(Quote, { size: 40, className: "text-primary-600/20 mb-6" }),
                /* @__PURE__ */ jsxs("p", { className: "text-lg text-text-primary mb-10 leading-relaxed font-medium italic", children: [
                  '"',
                  testimonial.quote,
                  '"'
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 pt-6 border-t border-border", children: [
                /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold", children: testimonial.avatar }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-bold text-text-primary", children: testimonial.author }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-text-secondary", children: testimonial.role })
                ] })
              ] })
            ]
          }
        )
      },
      index
    )) })
  ] }) });
}
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Skyward HR | Professional Workforce Solutions for Serious Businesses", "description": "Skyward HR provides premium enterprise-grade workforce management, staffing solutions, and contract manpower services across India." }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", Hero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/Hero", "client:component-export": "default" })} ${renderComponent($$result2, "TrustedCompanies", TrustedCompanies, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/TrustedCompanies", "client:component-export": "default" })} ${renderComponent($$result2, "WorkforceChallenges", WorkforceChallenges, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/WorkforceChallenges", "client:component-export": "default" })} ${renderComponent($$result2, "Solutions", Solutions, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/Solutions", "client:component-export": "default" })} ${renderComponent($$result2, "ServicesOverview", ServicesOverview, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/ServicesOverview", "client:component-export": "default" })} ${renderComponent($$result2, "AnalyticsSection", AnalyticsSection, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/AnalyticsSection", "client:component-export": "default" })} ${renderComponent($$result2, "Testimonials", Testimonials, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/Testimonials", "client:component-export": "default" })} ${renderComponent($$result2, "FAQAccordion", FAQAccordion, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/FAQAccordion", "client:component-export": "default" })} ${renderComponent($$result2, "CTA", CTA, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/CTA", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", Footer, {})} `, "head": ($$result2) => renderTemplate(_a || (_a = __template(['<script type="application/ld+json">\n		{\n			"@context": "https://schema.org",\n			"@type": "Organization",\n			"name": "Skyward HR Service",\n			"url": "https://skywardhr.com",\n			"logo": "https://skywardhr.com/logo.png",\n			"sameAs": [\n				"https://www.linkedin.com/company/skyward-hr",\n				"https://twitter.com/skywardhr"\n			],\n			"contactPoint": {\n				"@type": "ContactPoint",\n				"telephone": "+91-XXXXXXXXXX",\n				"contactType": "customer service"\n			}\n		}\n	<\/script>']))) })}`;
}, "D:/skyward/src/pages/index.astro", void 0);
const $$file = "D:/skyward/src/pages/index.astro";
const $$url = "";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
