import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_BJdmQt7F.mjs";
import { $ as $$Layout } from "./Layout_BLze-jQV.mjs";
import { H as Header, F as Footer } from "./Footer_C1Kqf_vw.mjs";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { C as CTA } from "./CTA_RafQM8OH.mjs";
const faqs = [
  {
    title: "Workforce & Staffing",
    items: [
      {
        question: "How quickly can workforce be deployed?",
        answer: "Deployment timelines vary based on workforce requirements, location, and candidate availability."
      },
      {
        question: "Do you provide replacement support?",
        answer: "Yes. We provide workforce replacement assistance when required."
      },
      {
        question: "What industries do you serve?",
        answer: "We serve logistics, warehousing, retail, e-commerce, corporate, and other workforce-intensive industries."
      },
      {
        question: "Do you verify candidates?",
        answer: "Yes. Candidate screening and document verification are part of our staffing process."
      }
    ]
  },
  {
    title: "For Candidates",
    items: [
      {
        question: "How can I register as a candidate?",
        answer: "You can register by clicking the 'Candidate Login/Sign Up' button. Fill in your basic details, upload the required documents (Aadhaar, PAN, etc.), and our team will contact you for the next steps."
      },
      {
        question: "Is there any registration fee?",
        answer: "No, Skyward HR Service does not charge any registration or processing fee from candidates. Be wary of any individuals asking for money in our name."
      }
    ]
  },
  {
    title: "General Questions",
    items: [
      {
        question: "What is Skyward HR Service?",
        answer: "Skyward HR Service is a workforce management and staffing company focused on helping businesses meet their manpower requirements efficiently. We provide recruitment support, workforce deployment, attendance management, and replacement services."
      }
    ]
  }
];
function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (id) => {
    setOpenIndex(openIndex === id ? null : id);
  };
  return /* @__PURE__ */ jsx("div", { className: "space-y-12", children: faqs.map((category, catIdx) => /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-text-main border-l-4 border-primary pl-4", children: category.title }),
    /* @__PURE__ */ jsx("div", { className: "space-y-3", children: category.items.map((item, itemIdx) => {
      const id = `${catIdx}-${itemIdx}`;
      const isOpen = openIndex === id;
      return /* @__PURE__ */ jsxs(
        "div",
        {
          className: `border border-surface-hover rounded-xl overflow-hidden transition-all ${isOpen ? "bg-surface/50" : "bg-surface"}`,
          children: [
            /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => toggle(id),
                className: "w-full px-6 py-5 flex items-center justify-between text-left gap-4",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "font-medium text-text-main md:text-lg", children: item.question }),
                  isOpen ? /* @__PURE__ */ jsx(ChevronUp, { className: "text-primary shrink-0" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "text-text-muted shrink-0" })
                ]
              }
            ),
            isOpen && /* @__PURE__ */ jsx("div", { className: "px-6 pb-6 text-text-muted leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300", children: item.answer })
          ]
        },
        id
      );
    }) })
  ] }, catIdx)) });
}
const $$Faq = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Frequently Asked Questions | Skyward HR Service" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-32 pb-20"> <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"> <div class="text-center mb-16"> <h1 class="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Frequently Asked Questions</h1> <p class="text-xl text-text-muted max-w-2xl mx-auto">
Find answers to common questions about our platform, workforce solutions, and how we help businesses and candidates.
</p> </div> ${renderComponent($$result2, "FAQAccordion", FAQAccordion, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/FAQAccordion", "client:component-export": "default" })} <div class="mt-20 p-8 bg-surface border border-surface-hover rounded-2xl text-center"> <h2 class="text-2xl font-bold mb-4">Still have questions?</h2> <p class="text-text-muted mb-8 max-w-xl mx-auto">
Our team is here to help you. Reach out to us via email or WhatsApp and we'll get back to you as soon as possible.
</p> <div class="flex flex-col sm:flex-row items-center justify-center gap-4"> <a href="/contact" class="px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-hover transition-colors w-full sm:w-auto">
Contact Us
</a> <a href="https://wa.me/919876543210" class="px-8 py-3 bg-surface border border-surface-hover text-text-main font-semibold rounded-full hover:bg-surface-hover transition-colors w-full sm:w-auto">
WhatsApp Support
</a> </div> </div> </div> </main> ${renderComponent($$result2, "CTA", CTA, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/skyward/src/components/CTA", "client:component-export": "default" })} ${renderComponent($$result2, "Footer", Footer, {})} ` })}`;
}, "D:/skyward/src/pages/faq.astro", void 0);
const $$file = "D:/skyward/src/pages/faq.astro";
const $$url = "/faq";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Faq,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
