import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_BJdmQt7F.mjs";
import { B as Button, $ as $$Layout } from "./Layout_BLze-jQV.mjs";
import { H as Header, F as Footer } from "./Footer_C1Kqf_vw.mjs";
import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { CheckCircle, Send, MapPin, Phone, Mail } from "lucide-react";
import { I as Input, T as Textarea } from "./Input_bwwY4Vub.mjs";
import { C as Card } from "./Card_BvMXtm5W.mjs";
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
      /* @__PURE__ */ jsx("h2", { class: "text-2xl font-bold text-text-primary", children: "Thank you for your request!" }),
      /* @__PURE__ */ jsx("p", { class: "text-text-secondary", children: "Our team will review your requirements and contact you shortly." }),
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact Us | Skyward HR Service" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/Header", "client:component-export": "default" })} ${maybeRenderHead()}<main class="pt-32 pb-24 flex-grow"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center max-w-3xl mx-auto mb-16"> <h1 class="text-4xl md:text-6xl font-bold text-text-main mb-6">Contact Skyward HR</h1> <p class="text-xl text-text-muted">
Speak with our workforce experts and discuss your staffing requirements.
</p> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto"> <div class="bg-surface border border-surface/50 p-8 rounded-2xl"> <h2 class="text-2xl font-bold text-text-main mb-6">Send us a message</h2> ${renderComponent($$result2, "ContactForm", ContactForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "D:/skyward/src/components/ContactForm", "client:component-export": "default" })} </div> <div class="space-y-8"> <div class="bg-surface border border-surface-hover p-8 rounded-2xl flex items-start gap-4"> <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"> ${renderComponent($$result2, "MapPin", MapPin, { "size": 24 })} </div> <div> <h3 class="text-lg font-bold text-white mb-2">Office Address</h3> <p class="text-text-muted">123 Business Avenue, Tech Park,<br>Metropolis 500012</p> </div> </div> <div class="bg-surface border border-surface-hover p-8 rounded-2xl flex items-start gap-4"> <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"> ${renderComponent($$result2, "Phone", Phone, { "size": 24 })} </div> <div> <h3 class="text-lg font-bold text-white mb-2">Phone</h3> <p class="text-text-muted">+91 98765 43210</p> </div> </div> <div class="bg-surface border border-surface-hover p-8 rounded-2xl flex items-start gap-4"> <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0"> ${renderComponent($$result2, "Mail", Mail, { "size": 24 })} </div> <div> <h3 class="text-lg font-bold text-white mb-2">Email</h3> <p class="text-text-muted">contact@skywardhr.com</p> </div> </div> </div> </div> </div> </main> ${renderComponent($$result2, "Footer", Footer, {})} ` })}`;
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
