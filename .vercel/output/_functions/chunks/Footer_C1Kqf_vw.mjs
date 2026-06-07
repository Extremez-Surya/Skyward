import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import React, { useCallback, useSyncExternalStore, useEffect, useState } from "react";
import { ChevronRight, X, Menu, Mail, Phone, MapPin } from "lucide-react";
import { d as $authStore, a as $csrState, $ as $clerk } from "./chunk-IFEBM3MJ_CVicszTE.mjs";
import { computed } from "nanostores";
import { createCheckAuthorization, resolveAuthState } from "@clerk/shared/authorization";
import { deriveState } from "@clerk/shared/deriveState";
import { a as authAsyncStorage } from "./async-local-storage.server_DQ7sHqiS.mjs";
import "@clerk/shared/react";
import { B as Button } from "./Layout_BLze-jQV.mjs";
function useStore(store) {
  const get = store.get.bind(store);
  return React.useSyncExternalStore(store.listen, get, get);
}
var withClerk = (Component, displayName) => {
  displayName = displayName || Component.displayName || Component.name || "Component";
  Component.displayName = displayName;
  const HOC = (props) => {
    const clerk = useStore(
      computed([$csrState, $clerk], (state, clerk2) => {
        return state.isLoaded ? clerk2 : null;
      })
    );
    return /* @__PURE__ */ jsx(
      Component,
      {
        ...props,
        clerk
      },
      clerk ? "a" : "b"
    );
  };
  HOC.displayName = `withClerk(${displayName})`;
  return HOC;
};
var assertSingleChild = (children) => (name) => {
  try {
    return React.Children.only(children);
  } catch {
    const childArray = React.Children.toArray(children);
    if (childArray.length === 1 && React.isValidElement(childArray[0])) {
      return childArray[0];
    }
    return `You've passed multiple children components to <${name}/>. You can only pass a single child component or text.`;
  }
};
var normalizeWithDefaultValue = (children, defaultText) => {
  if (!children) {
    children = defaultText;
  }
  if (typeof children === "string") {
    children = /* @__PURE__ */ jsx("button", { type: "button", children });
  }
  return children;
};
var safeExecute = (cb) => (...args) => {
  if (cb && typeof cb === "function") {
    return cb(...args);
  }
};
withClerk(
  ({ clerk, children, ...props }) => {
    const {
      planId,
      planPeriod,
      for: _for,
      onSubscriptionComplete,
      newSubscriptionRedirectUrl,
      checkoutProps,
      ...rest
    } = props;
    children = normalizeWithDefaultValue(children, "Checkout");
    const child = assertSingleChild(children)("CheckoutButton");
    const clickHandler = () => {
      if (!clerk) {
        return;
      }
      return clerk.__internal_openCheckout({
        planId,
        planPeriod,
        for: _for,
        onSubscriptionComplete,
        newSubscriptionRedirectUrl,
        ...checkoutProps
      });
    };
    const wrappedChildClickHandler = (e) => {
      if (child && typeof child === "object" && "props" in child) {
        void safeExecute(child.props.onClick)(e);
      }
      return clickHandler();
    };
    const childProps = { ...rest, onClick: wrappedChildClickHandler };
    return React.cloneElement(child, childProps);
  },
  "CheckoutButton"
);
withClerk(
  ({ clerk, children, ...props }) => {
    const { plan, planId, initialPlanPeriod, planDetailsProps, ...rest } = props;
    children = normalizeWithDefaultValue(children, "Plan details");
    const child = assertSingleChild(children)("PlanDetailsButton");
    const clickHandler = () => {
      if (!clerk) {
        return;
      }
      return clerk.__internal_openPlanDetails({
        plan,
        planId,
        initialPlanPeriod,
        ...planDetailsProps
      });
    };
    const wrappedChildClickHandler = (e) => {
      if (child && typeof child === "object" && "props" in child) {
        void safeExecute(child.props.onClick)(e);
      }
      return clickHandler();
    };
    const childProps = { ...rest, onClick: wrappedChildClickHandler };
    return React.cloneElement(child, childProps);
  },
  "PlanDetailsButton"
);
withClerk(
  ({ clerk, children, ...props }) => {
    const { signUpFallbackRedirectUrl, forceRedirectUrl, fallbackRedirectUrl, signUpForceRedirectUrl, mode, ...rest } = props;
    children = normalizeWithDefaultValue(children, "Sign in");
    const child = assertSingleChild(children)("SignInButton");
    const clickHandler = () => {
      const opts = {
        forceRedirectUrl,
        fallbackRedirectUrl,
        signUpFallbackRedirectUrl,
        signUpForceRedirectUrl
      };
      if (!clerk) {
        return;
      }
      if (mode === "modal") {
        return clerk.openSignIn({ ...opts, appearance: props.appearance });
      }
      return clerk.redirectToSignIn({
        ...opts,
        signInFallbackRedirectUrl: fallbackRedirectUrl,
        signInForceRedirectUrl: forceRedirectUrl
      });
    };
    const wrappedChildClickHandler = async (e) => {
      if (child && typeof child === "object" && "props" in child) {
        await safeExecute(child.props.onClick)(e);
      }
      return clickHandler();
    };
    const childProps = { ...rest, onClick: wrappedChildClickHandler };
    return React.cloneElement(child, childProps);
  },
  "SignInButton"
);
withClerk(
  ({ clerk, children, ...props }) => {
    const { redirectUrl = "/", sessionId, ...rest } = props;
    children = normalizeWithDefaultValue(children, "Sign out");
    const child = assertSingleChild(children)("SignOutButton");
    const clickHandler = () => clerk?.signOut({ redirectUrl, sessionId });
    const wrappedChildClickHandler = async (e) => {
      if (child && typeof child === "object" && "props" in child) {
        await safeExecute(child.props.onClick)(e);
      }
      return clickHandler();
    };
    const childProps = { ...rest, onClick: wrappedChildClickHandler };
    return React.cloneElement(child, childProps);
  },
  "SignOutButton"
);
withClerk(
  ({ clerk, children, ...props }) => {
    const { fallbackRedirectUrl, forceRedirectUrl, signInFallbackRedirectUrl, signInForceRedirectUrl, mode, ...rest } = props;
    children = normalizeWithDefaultValue(children, "Sign up");
    const child = assertSingleChild(children)("SignUpButton");
    const clickHandler = () => {
      const opts = {
        fallbackRedirectUrl,
        forceRedirectUrl,
        signInFallbackRedirectUrl,
        signInForceRedirectUrl
      };
      if (!clerk) {
        return;
      }
      if (mode === "modal") {
        return clerk.openSignUp({
          ...opts,
          appearance: props.appearance,
          unsafeMetadata: props.unsafeMetadata
        });
      }
      return clerk.redirectToSignUp({
        ...opts,
        signUpFallbackRedirectUrl: fallbackRedirectUrl,
        signUpForceRedirectUrl: forceRedirectUrl
      });
    };
    const wrappedChildClickHandler = async (e) => {
      if (child && typeof child === "object" && "props" in child) {
        await safeExecute(child.props.onClick)(e);
      }
      return clickHandler();
    };
    const childProps = { ...rest, onClick: wrappedChildClickHandler };
    return React.cloneElement(child, childProps);
  },
  "SignUpButton"
);
withClerk(
  ({
    clerk,
    children,
    ...props
  }) => {
    const { for: _for, subscriptionDetailsProps, onSubscriptionCancel, ...rest } = props;
    children = normalizeWithDefaultValue(children, "Subscription details");
    const child = assertSingleChild(children)("SubscriptionDetailsButton");
    const clickHandler = () => {
      if (!clerk) {
        return;
      }
      return clerk.__internal_openSubscriptionDetails({
        for: _for,
        onSubscriptionCancel,
        ...subscriptionDetailsProps
      });
    };
    const wrappedChildClickHandler = (e) => {
      if (child && typeof child === "object" && "props" in child) {
        void safeExecute(child.props.onClick)(e);
      }
      return clickHandler();
    };
    const childProps = { ...rest, onClick: wrappedChildClickHandler };
    return React.cloneElement(child, childProps);
  },
  "SubscriptionDetailsButton"
);
var isMountProps = (props) => {
  return "mount" in props;
};
var isOpenProps = (props) => {
  return "open" in props;
};
var Portal = class extends React.PureComponent {
  portalRef = React.createRef();
  componentDidUpdate(prevProps) {
    if (!isMountProps(prevProps) || !isMountProps(this.props)) {
      return;
    }
    if (prevProps.props.appearance !== this.props.props.appearance || prevProps.props?.customPages?.length !== this.props.props?.customPages?.length) {
      this.props.updateProps?.({
        node: this.portalRef.current,
        props: this.props.props
      });
    }
  }
  componentDidMount() {
    if (this.portalRef.current) {
      if (isMountProps(this.props)) {
        this.props.mount?.(this.portalRef.current, this.props.props);
      }
      if (isOpenProps(this.props)) {
        this.props.open?.(this.props.props);
      }
    }
  }
  componentWillUnmount() {
    if (this.portalRef.current) {
      if (isMountProps(this.props)) {
        this.props.unmount?.(this.portalRef.current);
      }
      if (isOpenProps(this.props)) {
        this.props.close?.();
      }
    }
  }
  render() {
    return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { ref: this.portalRef }) });
  }
};
withClerk(({ clerk, ...props }) => {
  return /* @__PURE__ */ jsx(
    Portal,
    {
      mount: clerk?.mountSignIn,
      unmount: clerk?.unmountSignIn,
      updateProps: clerk?.__internal_updateProps,
      props
    }
  );
}, "SignIn");
withClerk(({ clerk, ...props }) => {
  return /* @__PURE__ */ jsx(
    Portal,
    {
      mount: clerk?.mountSignUp,
      unmount: clerk?.unmountSignUp,
      updateProps: clerk?.__internal_updateProps,
      props
    }
  );
}, "SignUp");
var UserButton = withClerk(({ clerk, ...props }) => {
  return /* @__PURE__ */ jsx(
    Portal,
    {
      mount: clerk?.mountUserButton,
      unmount: clerk?.unmountUserButton,
      updateProps: clerk?.__internal_updateProps,
      props
    }
  );
}, "UserButton");
withClerk(({ clerk, ...props }) => {
  return /* @__PURE__ */ jsx(
    Portal,
    {
      mount: clerk?.mountUserProfile,
      unmount: clerk?.unmountUserProfile,
      updateProps: clerk?.__internal_updateProps,
      props
    }
  );
}, "UserProfile");
withClerk(({ clerk, ...props }) => {
  return /* @__PURE__ */ jsx(
    Portal,
    {
      mount: clerk?.mountOrganizationProfile,
      unmount: clerk?.unmountOrganizationProfile,
      updateProps: clerk?.__internal_updateProps,
      props
    }
  );
}, "OrganizationProfile");
withClerk(({ clerk, ...props }) => {
  return /* @__PURE__ */ jsx(
    Portal,
    {
      mount: clerk?.mountOrganizationSwitcher,
      unmount: clerk?.unmountOrganizationSwitcher,
      updateProps: clerk?.__internal_updateProps,
      props
    }
  );
}, "OrganizationSwitcher");
withClerk(({ clerk, ...props }) => {
  return /* @__PURE__ */ jsx(
    Portal,
    {
      mount: clerk?.mountOrganizationList,
      unmount: clerk?.unmountOrganizationList,
      updateProps: clerk?.__internal_updateProps,
      props
    }
  );
}, "OrganizationList");
withClerk(({ clerk, ...props }) => {
  return /* @__PURE__ */ jsx(
    Portal,
    {
      open: clerk?.openGoogleOneTap,
      close: clerk?.closeGoogleOneTap,
      props
    }
  );
}, "GoogleOneTap");
withClerk(({ clerk, ...props }) => {
  return /* @__PURE__ */ jsx(
    Portal,
    {
      mount: clerk?.mountWaitlist,
      unmount: clerk?.unmountWaitlist,
      props
    }
  );
}, "Waitlist");
withClerk(({ clerk, ...props }) => {
  return /* @__PURE__ */ jsx(
    Portal,
    {
      mount: clerk?.mountPricingTable,
      unmount: clerk?.unmountPricingTable,
      props
    }
  );
}, "PricingTable");
withClerk(({ clerk, ...props }) => {
  return /* @__PURE__ */ jsx(
    Portal,
    {
      mount: clerk?.mountOAuthConsent,
      unmount: clerk?.unmountOAuthConsent,
      props
    }
  );
}, "OAuthConsent");
var clerkLoaded = () => {
  return new Promise((resolve) => {
    $csrState.subscribe(({ isLoaded }) => {
      if (isLoaded) {
        resolve($clerk.get());
      }
    });
  });
};
var createGetToken = () => {
  return async (options) => {
    const clerk = await clerkLoaded();
    if (!clerk.session) {
      return null;
    }
    return clerk.session.getToken(options);
  };
};
var createSignOut = () => {
  return async (...args) => {
    const clerk = await clerkLoaded();
    return clerk.signOut(...args);
  };
};
var useAuth = ({ treatPendingAsSignedOut } = {}) => {
  const authContext = useAuthStore();
  const getToken = useCallback(createGetToken(), []);
  const signOut = useCallback(createSignOut(), []);
  const { userId, orgId, orgRole, orgPermissions, factorVerificationAge, sessionClaims } = authContext;
  const has = useCallback(
    (params) => {
      return createCheckAuthorization({
        userId,
        orgId,
        orgRole,
        orgPermissions,
        factorVerificationAge,
        features: sessionClaims?.fea || "",
        plans: sessionClaims?.pla || ""
      })(params);
    },
    [userId, orgId, orgRole, orgPermissions, factorVerificationAge, sessionClaims]
  );
  const payload = resolveAuthState({
    authObject: {
      ...authContext,
      getToken,
      signOut,
      has
    },
    options: {
      treatPendingAsSignedOut
    }
  });
  if (!payload) {
    throw new Error("Invalid state. Feel free to submit a bug or reach out to support");
  }
  return payload;
};
function useStore2(store, getServerSnapshot) {
  const get = store.get.bind(store);
  return useSyncExternalStore(store.listen, get, getServerSnapshot || get);
}
function useAuthStore() {
  const get = $authStore.get.bind($authStore);
  return useStore2($authStore, () => {
    if (typeof window === "undefined") {
      return deriveState(
        false,
        {
          user: null,
          session: null,
          client: null,
          organization: null
        },
        authAsyncStorage.getStore()
      );
    }
    return get();
  });
}
computed($csrState, (state) => state.isLoaded);
withClerk(
  ({ clerk, ...handleRedirectCallbackParams }) => {
    useEffect(() => {
      void clerk?.handleRedirectCallback(handleRedirectCallbackParams);
    }, []);
    return null;
  },
  "AuthenticateWithRedirectCallback"
);
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
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "How it Works", href: "/how-it-works" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" }
  ];
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "container-custom flex justify-between items-center", children: [
          /* @__PURE__ */ jsxs("a", { href: "/", className: "flex items-center gap-2 group", children: [
            /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-primary-600 rounded-md flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300", children: /* @__PURE__ */ jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
              /* @__PURE__ */ jsx("path", { d: "M12 2L2 7L12 12L22 7L12 2Z", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
              /* @__PURE__ */ jsx("path", { d: "M2 17L12 22L22 17", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
              /* @__PURE__ */ jsx("path", { d: "M2 12L12 17L22 12", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
            ] }) }),
            /* @__PURE__ */ jsx("span", { className: "text-xl font-bold tracking-tight text-text-primary", children: "Skyward HR" })
          ] }),
          /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center gap-8", children: navLinks.map((link) => /* @__PURE__ */ jsx(
            "a",
            {
              href: link.href,
              className: "text-sm font-medium text-text-secondary hover:text-primary-600 transition-colors",
              children: link.name
            },
            link.name
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-4", children: [
            isLoaded && !isSignedIn && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx("a", { href: "/sign-in", className: "text-sm font-medium text-text-primary hover:text-primary-600 transition-colors", children: "Login" }),
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "primary",
                  size: "md",
                  onClick: () => window.location.href = "/contact",
                  rightIcon: ChevronRight,
                  children: "Request Workforce"
                }
              )
            ] }),
            isLoaded && isSignedIn && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx("a", { href: "/dashboard", className: "text-sm font-medium text-text-primary hover:text-primary-600 transition-colors", children: "Dashboard" }),
              /* @__PURE__ */ jsx(UserButton, { afterSignOutUrl: "/" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "md:hidden text-text-primary",
              onClick: () => setMobileMenuOpen(!mobileMenuOpen),
              children: mobileMenuOpen ? /* @__PURE__ */ jsx(X, { size: 24 }) : /* @__PURE__ */ jsx(Menu, { size: 24 })
            }
          )
        ] }),
        mobileMenuOpen && /* @__PURE__ */ jsxs("div", { className: "md:hidden absolute top-full left-0 right-0 bg-surface border-b border-border shadow-xl py-4 px-4 flex flex-col gap-4", children: [
          navLinks.map((link) => /* @__PURE__ */ jsx(
            "a",
            {
              href: link.href,
              className: "text-base font-medium text-text-primary py-2 border-b border-border",
              onClick: () => setMobileMenuOpen(false),
              children: link.name
            },
            link.name
          )),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 mt-2", children: [
            isLoaded && !isSignedIn && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "outline",
                  className: "w-full",
                  onClick: () => window.location.href = "/sign-in",
                  children: "Login"
                }
              ),
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "primary",
                  className: "w-full",
                  onClick: () => window.location.href = "/contact",
                  children: "Request Workforce"
                }
              )
            ] }),
            isLoaded && isSignedIn && /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "outline",
                  className: "w-full",
                  onClick: () => window.location.href = "/dashboard",
                  children: "Dashboard"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "flex justify-center py-2", children: /* @__PURE__ */ jsx(UserButton, { afterSignOutUrl: "/" }) })
            ] })
          ] })
        ] })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "bg-surface border-t border-border pt-16 pb-8 mt-auto", children: /* @__PURE__ */ jsxs("div", { className: "container-custom", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxs("a", { href: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-primary-600 rounded-md flex items-center justify-center", children: /* @__PURE__ */ jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
            /* @__PURE__ */ jsx("path", { d: "M12 2L2 7L12 12L22 7L12 2Z", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
            /* @__PURE__ */ jsx("path", { d: "M2 17L12 22L22 17", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
            /* @__PURE__ */ jsx("path", { d: "M2 12L12 17L22 12", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })
          ] }) }),
          /* @__PURE__ */ jsx("span", { className: "text-xl font-bold tracking-tight text-text-primary", children: "Skyward HR" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-text-secondary text-sm leading-relaxed", children: "A Workforce Management Platform that helps businesses deploy, manage, track, and scale manpower efficiently through technology-driven staffing solutions." }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mt-2", children: [
          /* @__PURE__ */ jsx("a", { href: "mailto:contact@skywardhr.com", className: "w-10 h-10 rounded-full bg-background flex items-center justify-center text-text-secondary hover:text-primary-600 transition-colors border border-border hover:border-primary-600/50", children: /* @__PURE__ */ jsx(Mail, { size: 18 }) }),
          /* @__PURE__ */ jsx("a", { href: "/contact", className: "w-10 h-10 rounded-full bg-background flex items-center justify-center text-text-secondary hover:text-primary-600 transition-colors border border-border hover:border-primary-600/50", children: /* @__PURE__ */ jsx(Phone, { size: 18 }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-text-primary", children: "Company" }),
        /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-3", children: ["About Us", "Services", "Industries", "How it Works", "Resources", "Blog", "FAQs", "Contact"].map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: link === "Blog" ? "/resources/blog" : `/${link.toLowerCase().replace(/\s+/g, "-")}`, className: "text-sm text-text-secondary hover:text-primary-600 transition-colors", children: link }) }, link)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-text-primary", children: "Services" }),
        /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-3", children: [
          { name: "Logistics Staffing", slug: "logistics" },
          { name: "Warehouse Staffing", slug: "warehouse" },
          { name: "Retail Staffing", slug: "retail" },
          { name: "Office Support", slug: "office-support" },
          { name: "Housekeeping", slug: "housekeeping" },
          { name: "Supervisory Staff", slug: "supervisory" }
        ].map((service) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: `/services/${service.slug}`, className: "text-sm text-text-secondary hover:text-primary-600 transition-colors", children: service.name }) }, service.name)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-text-primary", children: "Locations" }),
        /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-3", children: [
          { name: "Delhi", slug: "delhi" },
          { name: "Gurgaon", slug: "gurgaon" },
          { name: "Noida", slug: "noida" },
          { name: "Faridabad", slug: "faridabad" },
          { name: "Ghaziabad", slug: "ghaziabad" }
        ].map((location) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: `/locations/${location.slug}`, className: "text-sm text-text-secondary hover:text-primary-600 transition-colors", children: [
          "Manpower in ",
          location.name
        ] }) }, location.name)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-text-primary", children: "Contact Us" }),
        /* @__PURE__ */ jsxs("ul", { className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-sm text-text-secondary", children: [
            /* @__PURE__ */ jsx(MapPin, { size: 18, className: "text-primary-600 shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { children: "123 Business Avenue, Tech Park, Metropolis 500012" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3 text-sm text-text-secondary", children: [
            /* @__PURE__ */ jsx(Phone, { size: 18, className: "text-primary-600 shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "+91 98765 43210" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3 text-sm text-text-secondary", children: [
            /* @__PURE__ */ jsx(Mail, { size: 18, className: "text-primary-600 shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "contact@skywardhr.com" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-sm text-text-muted", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Skyward HR Service. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2", children: [
        /* @__PURE__ */ jsx("a", { href: "/privacy-policy", className: "text-sm text-text-muted hover:text-primary-600 transition-colors whitespace-nowrap", children: "Privacy Policy" }),
        /* @__PURE__ */ jsx("a", { href: "/terms-of-service", className: "text-sm text-text-muted hover:text-primary-600 transition-colors whitespace-nowrap", children: "Terms of Service" }),
        /* @__PURE__ */ jsx("a", { href: "/cookie-policy", className: "text-sm text-text-muted hover:text-primary-600 transition-colors whitespace-nowrap", children: "Cookie Policy" }),
        /* @__PURE__ */ jsx("a", { href: "/disclaimer", className: "text-sm text-text-muted hover:text-primary-600 transition-colors whitespace-nowrap", children: "Disclaimer" })
      ] })
    ] })
  ] }) });
}
export {
  Footer as F,
  Header as H
};
