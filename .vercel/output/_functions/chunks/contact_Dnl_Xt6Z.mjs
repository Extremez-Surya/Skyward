import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_Eo3uqCG1.mjs";
import { $ as $$Layout } from "./Layout_OdHJPE5s.mjs";
import { H as Header, F as Footer } from "./Footer_Br_mJlY-.mjs";
import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { CheckCircle, Send, MapPin, Phone, Mail } from "lucide-react";
import { B as Button } from "./Button_V0yuJDF0.mjs";
import { I as Input, T as Textarea } from "./Input_BAi0AciX.mjs";
import { C as Card } from "./Card_DgTW5Sf9.mjs";
function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    full_name: "",
    company_name: "",
    email: "",
    phone: "",
    requirement: ""
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error("Failed to submit request");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  if (submitted) {
    return /* @__PURE__ */ jsxs(Card, { variant: "standard", className: "text-center space-y-4 animate-fade-up", children: [
      /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsx(CheckCircle, { size: 32 }) }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-text-primary", children: "Thank you for your request!" }),
      /* @__PURE__ */ jsx("p", { className: "text-text-secondary", children: "Our team will review your requirements and contact you shortly." }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setSubmitted(false),
          className: "text-primary-600 text-sm font-semibold hover:underline",
          children: "Send another message"
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxs("form", { className: "space-y-4", onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsx(
      Input,
      {
        label: "Full Name",
        type: "text",
        required: true,
        placeholder: "John Doe",
        value: formData.full_name,
        onChange: (e) => setFormData({ ...formData, full_name: e.target.value }),
        isRequired: true
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsx(
        Input,
        {
          label: "Company Name",
          type: "text",
          placeholder: "Acme Corp",
          value: formData.company_name,
          onChange: (e) => setFormData({ ...formData, company_name: e.target.value })
        }
      ),
      /* @__PURE__ */ jsx(
        Input,
        {
          label: "Email",
          type: "email",
          required: true,
          placeholder: "john@example.com",
          value: formData.email,
          onChange: (e) => setFormData({ ...formData, email: e.target.value }),
          isRequired: true
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      Input,
      {
        label: "Phone Number",
        type: "tel",
        required: true,
        placeholder: "+91 98765 43210",
        value: formData.phone,
        onChange: (e) => setFormData({ ...formData, phone: e.target.value }),
        isRequired: true
      }
    ),
    /* @__PURE__ */ jsx(
      Textarea,
      {
        label: "Requirement",
        required: true,
        placeholder: "Tell us about your workforce needs...",
        className: "h-32",
        value: formData.requirement,
        onChange: (e) => setFormData({ ...formData, requirement: e.target.value }),
        isRequired: true
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        type: "submit",
        isLoading: loading,
        className: "w-full",
        rightIcon: Send,
        children: "Submit Request"
      }
    )
  ] });
}
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact Us | Skyward HR Service" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-48 pb-32 flex-grow bg-background"> <div class="container-custom"> <div class="text-center max-w-3xl mx-auto mb-20"> <h1 class="text-5xl md:text-7xl font-bold text-text-primary mb-6 tracking-tight">Let's build your <span class="text-primary-600">workforce.</span></h1> <p class="text-xl text-text-secondary leading-relaxed font-medium">
Speak with our enterprise experts to design a workforce solution tailored to your operational scale and efficiency targets.
</p> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto"> <div class="bg-card border border-border p-10 rounded-[32px] shadow-premium"> <h2 class="text-2xl font-bold text-text-primary mb-8">Send an Inquiry</h2> ${renderComponent($$result2, "ContactForm", ContactForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/ContactForm", "client:component-export": "default" })} </div> <div class="space-y-6"> <div class="p-8 rounded-[32px] bg-card border border-border shadow-premium flex items-start gap-6 hover:shadow-lifted hover:-translate-y-1 transition-all duration-300 group"> <div class="w-14 h-14 rounded-2xl bg-primary-600/10 flex items-center justify-center text-primary-600 shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300"> ${renderComponent($$result2, "MapPin", MapPin, { "size": 28 })} </div> <div> <h3 class="text-xl font-bold text-text-primary mb-2">Headquarters</h3> <p class="text-text-secondary text-lg leading-relaxed font-medium">123 Business Avenue, Cyber Park, Sector 44, Gurgaon 122002</p> </div> </div> <div class="p-8 rounded-[32px] bg-card border border-border shadow-premium flex items-start gap-6 hover:shadow-lifted hover:-translate-y-1 transition-all duration-300 group"> <div class="w-14 h-14 rounded-2xl bg-primary-600/10 flex items-center justify-center text-primary-600 shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300"> ${renderComponent($$result2, "Phone", Phone, { "size": 28 })} </div> <div> <h3 class="text-xl font-bold text-text-primary mb-2">Call Operations</h3> <p class="text-text-secondary text-lg font-medium">+91 98765 43210</p> </div> </div> <div class="p-8 rounded-[32px] bg-card border border-border shadow-premium flex items-start gap-6 hover:shadow-lifted hover:-translate-y-1 transition-all duration-300 group"> <div class="w-14 h-14 rounded-2xl bg-primary-600/10 flex items-center justify-center text-primary-600 shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300"> ${renderComponent($$result2, "Mail", Mail, { "size": 28 })} </div> <div> <h3 class="text-xl font-bold text-text-primary mb-2">Email Support</h3> <p class="text-text-secondary text-lg font-medium">contact@skywardhr.com</p> </div> </div> <div class="p-8 rounded-[32px] bg-slate-900 dark:bg-primary-900 text-white flex flex-col gap-6 relative overflow-hidden shadow-premium"> <h3 class="text-xl font-bold text-white relative z-10">Corporate Inquiries</h3> <p class="text-white/70 relative z-10 font-medium">For partnership and investor relations, please reach out to our corporate strategy team.</p> <a href="mailto:corporate@skywardhr.com" class="text-primary-400 font-bold hover:text-primary-300 transition-colors relative z-10 inline-flex items-center gap-2">
corporate@skywardhr.com <span>→</span> </a> <div class="absolute -bottom-12 -right-12 w-48 h-48 bg-primary-600/30 blur-[60px] rounded-full pointer-events-none"></div> </div> </div> </div> </div> </main> ${renderComponent($$result2, "Footer", Footer, {})} ` })}`;
}, "D:/skyward/src/pages/contact.astro", void 0);
const $$file = "D:/skyward/src/pages/contact.astro";
const $$url = "/contact";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
