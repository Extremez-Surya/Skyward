import { c as createComponent } from "./astro-component_B6BbrFHn.mjs";
import "piccolore";
import { I as renderTemplate, u as maybeRenderHead } from "./sequence_C1wAh64A.mjs";
import { r as renderComponent } from "./entrypoint_B82yBaQn.mjs";
import { $ as $$Layout } from "./Layout_Cf66BlEQ.mjs";
import { $ as $$InternalUIComponentRenderer } from "./InternalUIComponentRenderer_OEsUU-pX.mjs";
const $$SignUp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SignUp;
  return renderTemplate`${renderComponent($$result, "InternalUIComponentRenderer", $$InternalUIComponentRenderer, { ...Astro2.props, "component": "sign-up" })}`;
}, "D:/skyward/node_modules/@clerk/astro/components/interactive/SignUp.astro", void 0);
const $$ = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sign Up | Skyward HR" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex items-center justify-center min-h-screen py-12"> ${renderComponent($$result2, "SignUp", $$SignUp, {})} </div> ` })}`;
}, "D:/skyward/src/pages/sign-up/[...index].astro", void 0);
const $$file = "D:/skyward/src/pages/sign-up/[...index].astro";
const $$url = "/sign-up/[...index]";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page
};
