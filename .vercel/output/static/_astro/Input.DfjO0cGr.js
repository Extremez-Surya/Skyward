import{j as e}from"./jsx-runtime.u17CrQMm.js";import{R as o}from"./index.CaSDoa4f.js";const i=o.forwardRef(({label:a,error:t,helperText:r,isRequired:s,className:n="",...d},l)=>e.jsxs("div",{className:"w-full space-y-2",children:[a&&e.jsxs("label",{className:"block text-sm font-bold text-text-primary tracking-tight",children:[a,s&&e.jsx("span",{className:"text-danger ml-1",children:"*"})]}),e.jsx("input",{ref:l,className:`
            w-full h-[52px] px-5 rounded-xl border bg-background text-text-primary
            placeholder:text-text-muted focus:outline-none focus:ring-4 focus:ring-primary-600/10 focus:border-primary-600
            transition-all duration-300 shadow-sm
            ${t?"border-danger ring-danger/10":"border-border"}
            ${n}
          `,...d}),t&&e.jsx("p",{className:"text-sm font-bold text-danger",children:t}),!t&&r&&e.jsx("p",{className:"text-sm font-medium text-text-muted",children:r})]}));i.displayName="Input";const x=o.forwardRef(({label:a,error:t,isRequired:r,className:s="",...n},d)=>e.jsxs("div",{className:"w-full space-y-2",children:[a&&e.jsxs("label",{className:"block text-sm font-bold text-text-primary tracking-tight",children:[a,r&&e.jsx("span",{className:"text-danger ml-1",children:"*"})]}),e.jsx("textarea",{ref:d,className:`
            w-full min-h-[140px] p-5 rounded-xl border bg-background text-text-primary
            placeholder:text-text-muted focus:outline-none focus:ring-4 focus:ring-primary-600/10 focus:border-primary-600
            transition-all duration-300 shadow-sm
            ${t?"border-danger ring-danger/10":"border-border"}
            ${s}
          `,...n}),t&&e.jsx("p",{className:"text-sm font-bold text-danger",children:t})]}));x.displayName="Textarea";export{i as I,x as T};
