import{j as e}from"./jsx-runtime.u17CrQMm.js";import{R as o}from"./index.CaSDoa4f.js";const c=o.forwardRef(({label:s,error:t,helperText:r,isRequired:a,className:n="",...d},l)=>e.jsxs("div",{className:"w-full space-y-2",children:[s&&e.jsxs("label",{className:"block text-sm font-medium text-text-secondary",children:[s,a&&e.jsx("span",{className:"text-danger ml-1",children:"*"})]}),e.jsx("input",{ref:l,className:`
            w-full h-12 px-4 rounded-md border bg-surface text-foreground
            placeholder:text-text-muted focus:outline-none focus:ring-4 focus:ring-primary-200 focus:border-primary-600
            transition-all duration-200
            ${t?"border-danger ring-danger/20":"border-border"}
            ${n}
          `,...d}),t&&e.jsx("p",{className:"text-sm text-danger",children:t}),!t&&r&&e.jsx("p",{className:"text-sm text-text-muted",children:r})]}));c.displayName="Input";const m=o.forwardRef(({label:s,error:t,isRequired:r,className:a="",...n},d)=>e.jsxs("div",{className:"w-full space-y-2",children:[s&&e.jsxs("label",{className:"block text-sm font-medium text-text-secondary",children:[s,r&&e.jsx("span",{className:"text-danger ml-1",children:"*"})]}),e.jsx("textarea",{ref:d,className:`
            w-full min-h-[120px] p-4 rounded-md border bg-surface text-foreground
            placeholder:text-text-muted focus:outline-none focus:ring-4 focus:ring-primary-200 focus:border-primary-600
            transition-all duration-200
            ${t?"border-danger ring-danger/20":"border-border"}
            ${a}
          `,...n}),t&&e.jsx("p",{className:"text-sm text-danger",children:t})]}));m.displayName="Textarea";export{c as I,m as T};
