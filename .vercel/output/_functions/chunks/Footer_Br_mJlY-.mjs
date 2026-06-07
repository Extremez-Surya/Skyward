import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Moon, Sun, ShieldCheck, ChevronRight, X, Menu, ArrowRight, Globe, MessageSquare, Share2, MapPin, Mail } from "lucide-react";
import { u as useAuth, U as UserButton } from "./index_CH41tSfv.mjs";
import { AnimatePresence, motion } from "framer-motion";
import { B as Button } from "./Button_V0yuJDF0.mjs";
function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    setMounted(true);
    const initialTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    setTheme(initialTheme);
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const isDark = document.documentElement.classList.contains("dark");
          setTheme(isDark ? "dark" : "light");
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };
  if (!mounted) {
    return /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-xl border border-border bg-surface" });
  }
  return /* @__PURE__ */ jsxs(
    "button",
    {
      onClick: toggleTheme,
      className: "relative p-2.5 rounded-xl bg-surface border border-border text-text-primary hover:border-primary-400 hover:text-primary-600 transition-all shadow-sm group overflow-hidden",
      "aria-label": "Toggle theme",
      children: [
        /* @__PURE__ */ jsx("div", { className: "relative w-5 h-5", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", initial: false, children: theme === "light" ? /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { y: 20, opacity: 0, rotate: 45 },
            animate: { y: 0, opacity: 1, rotate: 0 },
            exit: { y: -20, opacity: 0, rotate: -45 },
            transition: { duration: 0.2, ease: "easeOut" },
            className: "absolute inset-0 flex items-center justify-center",
            children: /* @__PURE__ */ jsx(Moon, { size: 20 })
          },
          "moon"
        ) : /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { y: 20, opacity: 0, rotate: -45 },
            animate: { y: 0, opacity: 1, rotate: 0 },
            exit: { y: -20, opacity: 0, rotate: 45 },
            transition: { duration: 0.2, ease: "easeOut" },
            className: "absolute inset-0 flex items-center justify-center",
            children: /* @__PURE__ */ jsx(Sun, { size: 20 })
          },
          "sun"
        ) }) }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity" })
      ]
    }
  );
}
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isSignedIn, isLoaded } = useAuth();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);
  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "About", href: "/about-us" },
    { name: "How it Works", href: "/how-it-works" },
    { name: "Contact", href: "/contact" }
  ];
  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  };
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled || mobileMenuOpen ? "bg-background/90 backdrop-blur-xl border-b border-border py-4 shadow-sm" : "bg-transparent py-6"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "container-custom flex justify-between items-center relative z-[101]", children: [
          /* @__PURE__ */ jsxs("a", { href: "/", className: "flex items-center gap-2 group", children: [
            /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center shadow-premium transform group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ jsx(ShieldCheck, { className: "text-white", size: 24 }) }),
            /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold tracking-tight text-text-primary", children: "Skyward" })
          ] }),
          /* @__PURE__ */ jsx("nav", { className: "hidden lg:flex items-center gap-10", children: navLinks.map((link) => /* @__PURE__ */ jsxs(
            "a",
            {
              href: link.href,
              className: "text-sm font-semibold text-text-secondary hover:text-primary-600 transition-colors relative group",
              children: [
                link.name,
                /* @__PURE__ */ jsx("span", { className: "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full" })
              ]
            },
            link.name
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex items-center gap-6", children: [
            /* @__PURE__ */ jsx(ThemeToggle, {}),
            isLoaded && !isSignedIn && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx("a", { href: "/sign-in", className: "text-sm font-semibold text-text-primary hover:text-primary-600 transition-colors", children: "Login" }),
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "primary",
                  size: "sm",
                  onClick: () => window.location.href = "/contact",
                  rightIcon: ChevronRight,
                  className: "rounded-full px-6",
                  children: "Get Started"
                }
              )
            ] }),
            isLoaded && isSignedIn && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx("a", { href: "/dashboard", className: "text-sm font-semibold text-text-primary hover:text-primary-600 transition-colors", children: "Dashboard" }),
              /* @__PURE__ */ jsx(UserButton, { afterSignOutUrl: "/" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 lg:hidden", children: [
            /* @__PURE__ */ jsx(ThemeToggle, {}),
            /* @__PURE__ */ jsx(
              "button",
              {
                className: "p-3 text-text-primary hover:bg-surface rounded-xl transition-all active:scale-95 flex items-center justify-center relative w-12 h-12",
                onClick: () => setMobileMenuOpen(!mobileMenuOpen),
                "aria-label": "Toggle Menu",
                children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: mobileMenuOpen ? /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, rotate: -90 },
                    animate: { opacity: 1, rotate: 0 },
                    exit: { opacity: 0, rotate: 90 },
                    transition: { duration: 0.2 },
                    children: /* @__PURE__ */ jsx(X, { size: 24 })
                  },
                  "close"
                ) : /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, rotate: 90 },
                    animate: { opacity: 1, rotate: 0 },
                    exit: { opacity: 0, rotate: -90 },
                    transition: { duration: 0.2 },
                    children: /* @__PURE__ */ jsx(Menu, { size: 24 })
                  },
                  "menu"
                ) })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(AnimatePresence, { children: mobileMenuOpen && /* @__PURE__ */ jsxs(
          motion.div,
          {
            variants: menuVariants,
            initial: "closed",
            animate: "open",
            exit: "closed",
            className: "lg:hidden fixed inset-0 bg-background z-[90] flex flex-col pt-32 pb-10 px-6",
            children: [
              /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-6 overflow-y-auto", children: navLinks.map((link) => /* @__PURE__ */ jsxs(
                motion.a,
                {
                  variants: itemVariants,
                  href: link.href,
                  className: "text-4xl font-bold text-text-primary hover:text-primary-600 transition-colors flex items-center justify-between group",
                  onClick: () => setMobileMenuOpen(false),
                  children: [
                    link.name,
                    /* @__PURE__ */ jsx(ArrowRight, { className: "opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary-600", size: 28 })
                  ]
                },
                link.name
              )) }),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  variants: itemVariants,
                  className: "mt-auto pt-10 border-t border-border flex flex-col gap-4",
                  children: [
                    isLoaded && !isSignedIn && /* @__PURE__ */ jsxs(Fragment, { children: [
                      /* @__PURE__ */ jsx(
                        Button,
                        {
                          variant: "secondary",
                          size: "lg",
                          className: "w-full rounded-2xl",
                          onClick: () => window.location.href = "/sign-in",
                          children: "Login to Account"
                        }
                      ),
                      /* @__PURE__ */ jsx(
                        Button,
                        {
                          variant: "primary",
                          size: "lg",
                          className: "w-full rounded-2xl",
                          onClick: () => window.location.href = "/contact",
                          children: "Get Started Now"
                        }
                      )
                    ] }),
                    isLoaded && isSignedIn && /* @__PURE__ */ jsxs(Fragment, { children: [
                      /* @__PURE__ */ jsx(
                        Button,
                        {
                          variant: "primary",
                          size: "lg",
                          className: "w-full rounded-2xl",
                          onClick: () => window.location.href = "/dashboard",
                          children: "Go to Dashboard"
                        }
                      ),
                      /* @__PURE__ */ jsx("div", { className: "flex justify-center p-4 bg-surface rounded-2xl", children: /* @__PURE__ */ jsx(UserButton, { showName: true }) })
                    ] })
                  ]
                }
              )
            ]
          }
        ) })
      ]
    }
  );
}
function Footer() {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsx("footer", { className: "bg-background border-t border-border pt-24 pb-12 mt-auto", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-4", children: [
        /* @__PURE__ */ jsxs("a", { href: "/", className: "flex items-center gap-2 mb-6 group", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center shadow-premium", children: /* @__PURE__ */ jsx(ShieldCheck, { className: "text-white", size: 24 }) }),
          /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold tracking-tight text-text-primary", children: "Skyward" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-text-secondary text-lg leading-relaxed mb-8 max-w-sm", children: "Professional workforce solutions for serious businesses. Deploy, manage, and scale your workforce with enterprise-grade technology." }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4", children: [Globe, MessageSquare, Share2].map((Icon, i) => /* @__PURE__ */ jsx(
          "a",
          {
            href: "#",
            className: "w-12 h-12 rounded-xl bg-surface flex items-center justify-center text-text-secondary hover:text-primary-600 hover:bg-primary-50 transition-all border border-transparent hover:border-primary-100",
            children: /* @__PURE__ */ jsx(Icon, { size: 20 })
          },
          i
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-text-primary uppercase tracking-widest mb-6", children: "Platform" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: ["Services", "Industries", "How it Works", "Analytics", "Compliance"].map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: `/${link.toLowerCase().replace(/\s+/g, "-")}`, className: "text-text-secondary hover:text-primary-600 font-medium transition-colors", children: link }) }, link)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-text-primary uppercase tracking-widest mb-6", children: "Company" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-4", children: ["About Us", "Resources", "Careers", "Contact", "Support"].map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: `/${link.toLowerCase().replace(/\s+/g, "-")}`, className: "text-text-secondary hover:text-primary-600 font-medium transition-colors", children: link }) }, link)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-text-primary uppercase tracking-widest mb-6", children: "Contact" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-4 rounded-2xl bg-surface border border-border", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "text-primary-600 shrink-0 mt-1", size: 20 }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-bold text-text-primary mb-1", children: "Headquarters" }),
              /* @__PURE__ */ jsx("div", { className: "text-text-secondary text-sm leading-relaxed", children: "123 Business Avenue, Cyber Park, Sector 44, Gurgaon 122002" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 p-4 rounded-2xl bg-surface border border-border", children: [
            /* @__PURE__ */ jsx(Mail, { className: "text-primary-600 shrink-0", size: 20 }),
            /* @__PURE__ */ jsx("div", { className: "font-bold text-text-primary", children: "contact@skywardhr.com" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "pt-12 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-text-secondary text-sm font-medium", children: [
        "© ",
        currentYear,
        " Skyward HR Service Private Limited."
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center justify-center gap-x-8 gap-y-2", children: [
        { name: "Privacy", href: "/privacy-policy" },
        { name: "Terms", href: "/terms-of-service" },
        { name: "Compliance", href: "/compliance" },
        { name: "Disclaimer", href: "/disclaimer" }
      ].map((link) => /* @__PURE__ */ jsx("a", { href: link.href, className: "text-text-muted hover:text-primary-600 text-sm font-medium transition-colors", children: link.name }, link.name)) })
    ] })
  ] }) });
}
export {
  Footer as F,
  Header as H
};
