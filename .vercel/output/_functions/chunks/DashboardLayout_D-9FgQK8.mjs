import { c as createComponent } from "./astro-component_bcg0hk54.mjs";
import "piccolore";
import { J as createRenderInstruction, bk as renderSlot, I as renderTemplate, bl as defineScriptVars, u as maybeRenderHead, _ as addAttribute } from "./sequence_rsVvLGim.mjs";
import { r as renderComponent } from "./entrypoint_B9LsAA9s.mjs";
import { $ as $$Layout } from "./Layout_BkNHB0md.mjs";
import { $ as $$InternalUIComponentRenderer } from "./InternalUIComponentRenderer_DUp9piIv.mjs";
import "clsx";
async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}<\/script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}
const $$UserButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$UserButton;
  return renderTemplate`${renderComponent($$result, "InternalUIComponentRenderer", $$InternalUIComponentRenderer, { ...Astro2.props, "component": "user-button" })} ${renderSlot($$result, $$slots["default"])}`;
}, "D:/skyward/node_modules/@clerk/astro/components/interactive/UserButton/UserButton.astro", void 0);
var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$MenuItemRenderer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$MenuItemRenderer;
  const { label, href, open, clickIdentifier, parent } = Astro2.props;
  let labelIcon = "";
  if (Astro2.slots.has("label-icon")) {
    labelIcon = await Astro2.slots.render("label-icon");
  }
  const isDevMode = false;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<script>(function(){", "\n  const parentElement = document.currentScript.parentElement;\n\n  // We used a web component in the `<UserButton.MenuItems>` component.\n  const hasParentMenuItem = parentElement.tagName.toLowerCase() === 'clerk-user-button-menu-items';\n  if (!hasParentMenuItem) {\n    if (isDevMode) {\n      throw new Error(\n        `Clerk: <UserButton.MenuItems /> component can only accept <UserButton.Action /> and <UserButton.Link /> as its children. Any other provided component will be ignored.`,\n      );\n    }\n    return;\n  }\n\n  // Get the user button map from window that we set in the `<InternalUIComponentRenderer />`.\n  const userButtonComponentMap = window.__astro_clerk_component_props.get('user-button');\n\n  let userButton;\n  if (parent) {\n    userButton = document.querySelector(`[data-clerk-id=\"clerk-user-button-${parent}\"]`);\n  } else {\n    userButton = document.querySelector('[data-clerk-id^=\"clerk-user-button\"]');\n  }\n\n  const safeId = userButton.getAttribute('data-clerk-id');\n  const currentOptions = userButtonComponentMap.get(safeId);\n\n  const reorderItemsLabels = ['manageAccount', 'signOut'];\n  const isReorderItem = reorderItemsLabels.includes(label);\n\n  let newMenuItem = {\n    label,\n  };\n\n  if (!isReorderItem) {\n    newMenuItem = {\n      ...newMenuItem,\n      mountIcon: el => {\n        el.innerHTML = labelIcon;\n      },\n      unmountIcon: () => {\n        /* What to clean up? */\n      },\n    };\n\n    if (href) {\n      newMenuItem.href = href;\n    } else if (open) {\n      newMenuItem.open = open.startsWith('/') ? open : `/${open}`;\n    } else if (clickIdentifier) {\n      const clickEvent = new CustomEvent('clerk:menu-item-click', { detail: clickIdentifier });\n      newMenuItem.onClick = () => {\n        document.dispatchEvent(clickEvent);\n      };\n    }\n  }\n\n  userButtonComponentMap.set(safeId, {\n    ...currentOptions,\n    customMenuItems: [...(currentOptions?.customMenuItems ?? []), newMenuItem],\n  });\n})();<\/script>"], ["<script>(function(){", "\n  const parentElement = document.currentScript.parentElement;\n\n  // We used a web component in the \\`<UserButton.MenuItems>\\` component.\n  const hasParentMenuItem = parentElement.tagName.toLowerCase() === 'clerk-user-button-menu-items';\n  if (!hasParentMenuItem) {\n    if (isDevMode) {\n      throw new Error(\n        \\`Clerk: <UserButton.MenuItems /> component can only accept <UserButton.Action /> and <UserButton.Link /> as its children. Any other provided component will be ignored.\\`,\n      );\n    }\n    return;\n  }\n\n  // Get the user button map from window that we set in the \\`<InternalUIComponentRenderer />\\`.\n  const userButtonComponentMap = window.__astro_clerk_component_props.get('user-button');\n\n  let userButton;\n  if (parent) {\n    userButton = document.querySelector(\\`[data-clerk-id=\"clerk-user-button-\\${parent}\"]\\`);\n  } else {\n    userButton = document.querySelector('[data-clerk-id^=\"clerk-user-button\"]');\n  }\n\n  const safeId = userButton.getAttribute('data-clerk-id');\n  const currentOptions = userButtonComponentMap.get(safeId);\n\n  const reorderItemsLabels = ['manageAccount', 'signOut'];\n  const isReorderItem = reorderItemsLabels.includes(label);\n\n  let newMenuItem = {\n    label,\n  };\n\n  if (!isReorderItem) {\n    newMenuItem = {\n      ...newMenuItem,\n      mountIcon: el => {\n        el.innerHTML = labelIcon;\n      },\n      unmountIcon: () => {\n        /* What to clean up? */\n      },\n    };\n\n    if (href) {\n      newMenuItem.href = href;\n    } else if (open) {\n      newMenuItem.open = open.startsWith('/') ? open : \\`/\\${open}\\`;\n    } else if (clickIdentifier) {\n      const clickEvent = new CustomEvent('clerk:menu-item-click', { detail: clickIdentifier });\n      newMenuItem.onClick = () => {\n        document.dispatchEvent(clickEvent);\n      };\n    }\n  }\n\n  userButtonComponentMap.set(safeId, {\n    ...currentOptions,\n    customMenuItems: [...(currentOptions?.customMenuItems ?? []), newMenuItem],\n  });\n})();<\/script>"])), defineScriptVars({ label, href, open, clickIdentifier, labelIcon, isDevMode, parent }));
}, "D:/skyward/node_modules/@clerk/astro/components/interactive/UserButton/MenuItemRenderer.astro", void 0);
const $$UserButtonLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$UserButtonLink;
  const { label, href, parent } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MenuItemRenderer", $$MenuItemRenderer, { "label": label, "href": href, "parent": parent }, { "label-icon": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["label-icon"])}` })}`;
}, "D:/skyward/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonLink.astro", void 0);
const $$UserButtonAction = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$UserButtonAction;
  const { label, open, clickIdentifier, parent } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MenuItemRenderer", $$MenuItemRenderer, { "label": label, "open": open, "clickIdentifier": clickIdentifier, "parent": parent }, { "label-icon": ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["label-icon"])}` })}`;
}, "D:/skyward/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonAction.astro", void 0);
const $$UserButtonMenuItems = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "clerk-user-button-menu-items", "clerk-user-button-menu-items", {}, { "default": () => renderTemplate` ${renderSlot($$result, $$slots["default"])} ` })} ${renderScript($$result, "D:/skyward/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonMenuItems.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/skyward/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonMenuItems.astro", void 0);
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$UserButtonUserProfilePage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$UserButtonUserProfilePage;
  const { url, label, parent } = Astro2.props;
  let labelIcon = "";
  let content = "";
  if (Astro2.slots.has("label-icon")) {
    labelIcon = await Astro2.slots.render("label-icon");
  }
  if (Astro2.slots.has("default")) {
    content = await Astro2.slots.render("default");
  }
  return renderTemplate(_a || (_a = __template(["<script>(function(){", "\n  // Get the user button map from window that we set in the `<InternalUIComponentRenderer />`.\n  const userButtonComponentMap = window.__astro_clerk_component_props.get('user-button');\n\n  let userButton;\n  if (parent) {\n    userButton = document.querySelector(`[data-clerk-id=\"clerk-user-button-${parent}\"]`);\n  } else {\n    userButton = document.querySelector('[data-clerk-id^=\"clerk-user-button\"]');\n  }\n\n  const safeId = userButton.getAttribute('data-clerk-id');\n  const currentOptions = userButtonComponentMap.get(safeId);\n\n  const newCustomPage = {\n    label,\n    url,\n    mountIcon: el => {\n      el.innerHTML = labelIcon;\n    },\n    unmountIcon: () => {\n      /* What to clean up? */\n    },\n    mount: el => {\n      el.innerHTML = content;\n    },\n    unmount: () => {\n      /* What to clean up? */\n    },\n  };\n\n  userButtonComponentMap.set(safeId, {\n    ...currentOptions,\n    userProfileProps: {\n      customPages: [...(currentOptions?.userProfileProps?.customPages ?? []), newCustomPage],\n    },\n  });\n})();<\/script>"], ["<script>(function(){", "\n  // Get the user button map from window that we set in the \\`<InternalUIComponentRenderer />\\`.\n  const userButtonComponentMap = window.__astro_clerk_component_props.get('user-button');\n\n  let userButton;\n  if (parent) {\n    userButton = document.querySelector(\\`[data-clerk-id=\"clerk-user-button-\\${parent}\"]\\`);\n  } else {\n    userButton = document.querySelector('[data-clerk-id^=\"clerk-user-button\"]');\n  }\n\n  const safeId = userButton.getAttribute('data-clerk-id');\n  const currentOptions = userButtonComponentMap.get(safeId);\n\n  const newCustomPage = {\n    label,\n    url,\n    mountIcon: el => {\n      el.innerHTML = labelIcon;\n    },\n    unmountIcon: () => {\n      /* What to clean up? */\n    },\n    mount: el => {\n      el.innerHTML = content;\n    },\n    unmount: () => {\n      /* What to clean up? */\n    },\n  };\n\n  userButtonComponentMap.set(safeId, {\n    ...currentOptions,\n    userProfileProps: {\n      customPages: [...(currentOptions?.userProfileProps?.customPages ?? []), newCustomPage],\n    },\n  });\n})();<\/script>"])), defineScriptVars({ url, label, content, labelIcon, parent }));
}, "D:/skyward/node_modules/@clerk/astro/components/interactive/UserButton/UserButtonUserProfilePage.astro", void 0);
const UserButton = Object.assign($$UserButton, {
  MenuItems: $$UserButtonMenuItems,
  Link: $$UserButtonLink,
  Action: $$UserButtonAction,
  UserProfilePage: $$UserButtonUserProfilePage
});
const $$DashboardLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$DashboardLayout;
  const { title, role } = Astro2.props;
  const navItems = {
    admin: [
      { name: "Overview", href: "/admin", icon: "LayoutDashboard" },
      { name: "Candidates", href: "/admin/candidates", icon: "Users" },
      { name: "Clients", href: "/admin/clients", icon: "Building2" },
      { name: "Deployments", href: "/admin/deployments", icon: "UserCheck" },
      { name: "Invoices", href: "/admin/invoices", icon: "FileText" }
    ],
    client: [
      { name: "Overview", href: "/client", icon: "LayoutDashboard" },
      { name: "Workforce", href: "/client/workforce", icon: "Users" },
      { name: "Attendance", href: "/client/attendance", icon: "Calendar" },
      { name: "Requests", href: "/client/requests", icon: "MessageSquare" },
      { name: "Invoices", href: "/client/invoices", icon: "FileText" }
    ],
    candidate: [
      { name: "My Profile", href: "/candidate", icon: "User" },
      { name: "Documents", href: "/candidate/documents", icon: "FileUp" },
      { name: "Applications", href: "/candidate/applications", icon: "Briefcase" }
    ],
    manager: []
    // Fallback or same as admin
  };
  const items = navItems[role] || [];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${title} | Skyward HR` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex min-h-screen bg-background"> <!-- Sidebar --> <aside class="w-64 border-r border-surface/50 bg-surface/30 backdrop-blur-md hidden md:flex flex-col sticky top-0 h-screen"> <div class="p-6"> <a href="/" className="flex items-center gap-2 group"> <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300"> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </svg> </div> <span className="text-lg font-bold tracking-tight">Skyward HR</span> </a> </div> <nav class="flex-1 px-4 py-4 space-y-1"> ${items.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-text-muted hover:text-primary hover:bg-primary/5 transition-all"> <span>${item.name}</span> </a>`)} </nav> <div class="p-4 border-t border-surface/50"> <div class="flex items-center gap-3 px-4 py-2"> ${renderComponent($$result2, "UserButton", UserButton, {})} <div class="flex flex-col"> <span class="text-xs font-semibold uppercase tracking-wider text-text-muted">${role}</span> </div> </div> </div> </aside> <!-- Main Content --> <div class="flex-1 flex flex-col min-w-0"> <!-- Mobile Header --> <header class="md:hidden flex items-center justify-between p-4 border-b border-surface/50 bg-surface/30 backdrop-blur-md"> <a href="/" class="text-lg font-bold">Skyward HR</a> ${renderComponent($$result2, "UserButton", UserButton, {})} </header> <main class="flex-1 p-6 md:p-8"> <div class="max-w-7xl mx-auto"> <div class="flex justify-between items-center mb-8"> <h1 class="text-2xl font-bold text-text-main">${title}</h1> </div> ${renderSlot($$result2, $$slots["default"])} </div> </main> </div> </div> ` })}`;
}, "D:/skyward/src/layouts/dashboards/DashboardLayout.astro", void 0);
export {
  $$DashboardLayout as $
};
