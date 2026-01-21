var Go = Object.defineProperty;
var Oo = (o, s, a) => s in o ? Go(o, s, { enumerable: !0, configurable: !0, writable: !0, value: a }) : o[s] = a;
var we = (o, s, a) => (Oo(o, typeof s != "symbol" ? s + "" : s, a), a);
import { defineComponent as ne, openBlock as _, createElementBlock as P, createElementVNode as n, ref as E, computed as K, onMounted as be, onUnmounted as go, watch as le, reactive as Bo, resolveComponent as ee, createBlock as X, withCtx as f, toDisplayString as q, createVNode as v, unref as M, withModifiers as re, createCommentVNode as F, createTextVNode as J, Fragment as Le, createStaticVNode as He, normalizeClass as $e, renderList as We, normalizeStyle as Fo } from "vue";
import { ElForm as jo, ElMessage as z, ElDialog as zo, ElIcon as Ve, ElButton as Ne, ElProgress as Ko, ElMessageBox as uo } from "element-plus";
import { i as Yo, g as Q, r as qo, s as Re } from "./supabase-5c60842e.mjs";
import { c as ya, h as ba, b as Sa, d as Ca, a as Ea } from "./supabase-5c60842e.mjs";
import { clearSessionCookie as ve, ACCESS_COOKIE as me, REFRESH_COOKIE as ke, clearLocalStorageTokens as Ge, setSessionCookie as _e, syncCookiesToLocalStorage as Oe, getPostLoginBase as Jo } from "./utils/authRedirect.js";
import { LS_ACCESS_KEY as Ia, LS_REFRESH_KEY as La, buildOAuthRedirectUrl as Ha, ensureCrossSubdomainCookies as Va, getCookie as Ra } from "./utils/authRedirect.js";
import { defineStore as Xo } from "pinia";
import { setupUniversalCallback as Ta } from "./utils/universalCallback.js";
/*! Element Plus Icons Vue v2.3.2 */
var Qo = /* @__PURE__ */ ne({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(o) {
    return (s, a) => (_(), P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      n("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"
      })
    ]));
  }
}), po = Qo, Zo = /* @__PURE__ */ ne({
  name: "Check",
  __name: "check",
  setup(o) {
    return (s, a) => (_(), P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      n("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      })
    ]));
  }
}), es = Zo, os = /* @__PURE__ */ ne({
  name: "Lock",
  __name: "lock",
  setup(o) {
    return (s, a) => (_(), P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      n("path", {
        fill: "currentColor",
        d: "M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96"
      }),
      n("path", {
        fill: "currentColor",
        d: "M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32m192-160v-64a192 192 0 1 0-384 0v64zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64"
      })
    ]));
  }
}), fo = os, ss = /* @__PURE__ */ ne({
  name: "Message",
  __name: "message",
  setup(o) {
    return (s, a) => (_(), P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      n("path", {
        fill: "currentColor",
        d: "M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64"
      }),
      n("path", {
        fill: "currentColor",
        d: "M904 224 656.512 506.88a192 192 0 0 1-289.024 0L120 224zm-698.944 0 210.56 240.704a128 128 0 0 0 192.704 0L818.944 224z"
      })
    ]));
  }
}), ts = ss, as = /* @__PURE__ */ ne({
  name: "Refresh",
  __name: "refresh",
  setup(o) {
    return (s, a) => (_(), P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      n("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), Be = as, rs = /* @__PURE__ */ ne({
  name: "User",
  __name: "user",
  setup(o) {
    return (s, a) => (_(), P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      n("path", {
        fill: "currentColor",
        d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"
      })
    ]));
  }
}), Fe = rs, ns = /* @__PURE__ */ ne({
  name: "Warning",
  __name: "warning",
  setup(o) {
    return (s, a) => (_(), P("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      n("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"
      })
    ]));
  }
}), ho = ns;
class Ue extends Error {
  constructor(a, i = {}, g) {
    super(a);
    we(this, "context");
    we(this, "originalError");
    this.name = "PackageError", this.context = i, this.originalError = g;
  }
}
function Zt(o, s = {}, a) {
  try {
    const i = o();
    return i instanceof Promise ? i.catch((g) => {
      if (console.warn("[ErrorHandler] Async operation failed:", {
        context: s,
        error: g.message,
        stack: g.stack
      }), a !== void 0)
        return a;
      throw new Ue(
        `Async operation failed: ${g.message}`,
        s,
        g
      );
    }) : i;
  } catch (i) {
    if (console.warn("[ErrorHandler] Operation failed:", {
      context: s,
      error: i instanceof Error ? i.message : String(i),
      stack: i instanceof Error ? i.stack : void 0
    }), a !== void 0)
      return a;
    throw new Ue(
      `Operation failed: ${i instanceof Error ? i.message : String(i)}`,
      s,
      i instanceof Error ? i : void 0
    );
  }
}
async function ea(o, s = {}, a) {
  try {
    return await o();
  } catch (i) {
    if (console.warn("[ErrorHandler] Async operation failed:", {
      context: s,
      error: i instanceof Error ? i.message : String(i),
      stack: i instanceof Error ? i.stack : void 0
    }), a !== void 0)
      return a;
    throw new Ue(
      `Async operation failed: ${i instanceof Error ? i.message : String(i)}`,
      s,
      i instanceof Error ? i : void 0
    );
  }
}
function is(o, s = {}) {
  const a = o.message.toLowerCase();
  if (a.includes("is not a function") || a.includes("cannot read property") || a.includes("undefined is not a function")) {
    console.warn("[ErrorHandler] Bundling error detected:", {
      context: s,
      error: o.message,
      suggestion: "This may be due to minification or import issues. The package will continue with fallback behavior."
    });
    return;
  }
  throw new Ue(
    `Unexpected error: ${o.message}`,
    s,
    o
  );
}
async function oa(o, s = {}, a) {
  try {
    return await o();
  } catch (i) {
    return console.warn("[ErrorHandler] Import failed:", {
      context: s,
      error: i instanceof Error ? i.message : String(i)
    }), a !== void 0 ? a : void 0;
  }
}
function sa(o) {
  var s;
  try {
    if (typeof document > "u")
      return null;
    const i = `; ${document.cookie}`.split(`; ${o}=`);
    return i.length === 2 && ((s = i.pop()) == null ? void 0 : s.split(";").shift()) || null;
  } catch (a) {
    return console.warn("[ErrorHandler] Cookie access failed:", {
      cookieName: o,
      error: a instanceof Error ? a.message : String(a)
    }), null;
  }
}
function ta(o, s, a = {}) {
  try {
    if (typeof document > "u")
      return !1;
    let i = `${o}=${s}`;
    return a.domain && (i += `; domain=${a.domain}`), a.path && (i += `; path=${a.path}`), a.secure && (i += "; secure"), a.sameSite && (i += `; samesite=${a.sameSite}`), a.maxAge && (i += `; max-age=${a.maxAge}`), document.cookie = i, !0;
  } catch (i) {
    return console.warn("[ErrorHandler] Cookie setting failed:", {
      cookieName: o,
      error: i instanceof Error ? i.message : String(i)
    }), !1;
  }
}
function aa(o) {
  try {
    return typeof localStorage > "u" ? null : localStorage.getItem(o);
  } catch (s) {
    return console.warn("[ErrorHandler] localStorage get failed:", {
      key: o,
      error: s instanceof Error ? s.message : String(s)
    }), null;
  }
}
function ra(o, s) {
  try {
    return typeof localStorage > "u" ? !1 : (localStorage.setItem(o, s), !0);
  } catch (a) {
    return console.warn("[ErrorHandler] localStorage set failed:", {
      key: o,
      error: a instanceof Error ? a.message : String(a)
    }), !1;
  }
}
function na(o, s) {
  try {
    return typeof window > "u" ? s : o(window);
  } catch (a) {
    return console.warn("[ErrorHandler] Window operation failed:", {
      error: a instanceof Error ? a.message : String(a)
    }), s;
  }
}
function ls() {
  typeof window > "u" || (window.addEventListener("unhandledrejection", (o) => {
    const s = o.reason;
    if (s instanceof Error) {
      const a = s.message.toLowerCase();
      if (a.includes("is not a function") || a.includes("cannot read property") || a.includes("undefined is not a function")) {
        console.warn("[ErrorHandler] Unhandled promise rejection (bundling error):", {
          error: s.message,
          stack: s.stack
        }), o.preventDefault();
        return;
      }
    }
    console.error("[ErrorHandler] Unhandled promise rejection:", o.reason);
  }), window.addEventListener("error", (o) => {
    const s = o.error;
    if (s instanceof Error) {
      const a = s.message.toLowerCase();
      if (a.includes("is not a function") || a.includes("cannot read property") || a.includes("undefined is not a function")) {
        console.warn("[ErrorHandler] Uncaught error (bundling error):", {
          error: s.message,
          stack: s.stack
        }), o.preventDefault();
        return;
      }
    }
    console.error("[ErrorHandler] Uncaught error:", o.error);
  }));
}
typeof window < "u" && ls();
function cs() {
  const o = E({
    user: null,
    isAuthenticated: !1,
    isLoading: !0,
    error: null
  }), s = E(null), a = K(() => o.value.isAuthenticated), i = K(() => o.value.user), g = K(() => o.value.isLoading), k = async () => {
    var d, c, u, x, y, p, V, U, C, m, R;
    try {
      console.log("[auth][enhanced] Starting loadUserInfo..."), console.log("[auth][enhanced] Ensuring cross-subdomain cookie synchronization...");
      const w = "sb-access-token", S = "sb-refresh-token", Z = (b) => {
        try {
          const $ = location.hostname;
          if ($ === "localhost" || /^\d+\.\d+\.\d+\.\d+$/.test($)) {
            console.log("[auth][enhanced] Skipping cookie sync for localhost");
            return;
          }
          const B = "aiworkspace.pro";
          if (!$.endsWith(`.${B}`) && $ !== B) {
            console.log("[auth][enhanced] Skipping cookie sync - not under apex domain");
            return;
          }
          console.log("[auth][enhanced] Performing cookie synchronization"), b.forEach((H) => {
            const N = document.cookie.split(";").find((j) => j.trim().startsWith(H + "="));
            if (N) {
              console.log(`[auth][enhanced] Found cookie: ${H}`);
              const j = N.split("=")[1];
              j && (document.cookie = `${H}=${j}; domain=.${B}; path=/; secure; samesite=lax`);
            }
          });
        } catch ($) {
          console.warn("[auth][enhanced] Error in cookie sync:", $);
        }
      };
      Z([w, S]), await new Promise((b) => setTimeout(b, 50)), Z([w, S]), await new Promise((b) => setTimeout(b, 50));
      let O = null;
      try {
        const $ = await (await Q()).auth.getSession();
        O = (d = $ == null ? void 0 : $.data) == null ? void 0 : d.session;
      } catch (b) {
        console.warn("[auth][enhanced] Error getting Supabase session:", b);
      }
      if (O && O.user) {
        console.log("[auth][enhanced] Active Supabase session found");
        const b = O.user, $ = {
          id: b.id,
          name: ((c = b.user_metadata) == null ? void 0 : c.name) || ((u = b.user_metadata) == null ? void 0 : u.user_name) || ((x = b.user_metadata) == null ? void 0 : x.full_name) || ((y = b.email) == null ? void 0 : y.split("@")[0]) || "User",
          email: b.email,
          avatar_url: ((p = b.user_metadata) == null ? void 0 : p.avatar_url) || null,
          user_metadata: b.user_metadata
        };
        return o.value = {
          user: $,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, s.value = {
          user: $,
          access_token: O.access_token,
          refresh_token: O.refresh_token
        }, { user: $, session: s.value, error: null };
      }
      console.log("[auth][enhanced] No active session, attempting to restore from cookies...");
      const G = await qo(15, 200);
      if (G.success && G.session) {
        console.log("[auth][enhanced] Session restored successfully from cookies");
        const b = G.session.user, $ = {
          id: b.id,
          name: ((V = b.user_metadata) == null ? void 0 : V.name) || ((U = b.user_metadata) == null ? void 0 : U.user_name) || ((C = b.user_metadata) == null ? void 0 : C.full_name) || ((m = b.email) == null ? void 0 : m.split("@")[0]) || "User",
          email: b.email,
          avatar_url: ((R = b.user_metadata) == null ? void 0 : R.avatar_url) || null,
          user_metadata: b.user_metadata
        };
        return o.value = {
          user: $,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, s.value = G.session, { user: $, session: s.value, error: null };
      } else
        console.log("[auth][enhanced] Failed to restore session:", G.error);
    } catch (w) {
      console.error("Error getting Supabase session:", w), w instanceof Error && is(w, {
        component: "useEnhancedAuth",
        function: "loadUserInfo",
        operation: "session_validation"
      });
    }
    return console.log("[auth][enhanced] No valid authentication found"), o.value = {
      user: null,
      isAuthenticated: !1,
      isLoading: !1,
      error: "No valid session found"
    }, s.value = null, { user: null, session: null, error: "No valid session found" };
  }, L = async () => {
    try {
      await (await Q()).auth.signOut(), ve(me), ve(ke), Ge(), o.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      }, s.value = null, console.log("[auth][enhanced] User logged out successfully");
    } catch (d) {
      console.error("Error during logout:", d), o.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      }, s.value = null;
    }
  }, A = async (d, c) => {
    var u, x, y, p, V;
    try {
      o.value.isLoading = !0;
      const U = await Q(), { data: C, error: m } = await U.auth.signInWithPassword({
        email: d,
        password: c
      });
      if (m)
        throw m;
      if (C.session) {
        const R = C.session.user, w = {
          id: R.id,
          name: ((u = R.user_metadata) == null ? void 0 : u.name) || ((x = R.user_metadata) == null ? void 0 : x.user_name) || ((y = R.user_metadata) == null ? void 0 : y.full_name) || ((p = R.email) == null ? void 0 : p.split("@")[0]) || "User",
          email: R.email,
          avatar_url: ((V = R.user_metadata) == null ? void 0 : V.avatar_url) || null,
          user_metadata: R.user_metadata
        };
        return o.value = {
          user: w,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, s.value = {
          user: w,
          access_token: C.session.access_token,
          refresh_token: C.session.refresh_token
        }, { user: w, session: s.value, error: null };
      }
      return { user: null, session: null, error: "No session returned" };
    } catch (U) {
      return console.error("Sign in error:", U), o.value.isLoading = !1, { user: null, session: null, error: String(U) };
    }
  }, D = async (d, c, u) => {
    var x, y, p, V, U;
    try {
      o.value.isLoading = !0;
      const C = await Q(), { data: m, error: R } = await C.auth.signUp({
        email: d,
        password: c,
        options: {
          data: u
        }
      });
      if (R)
        throw R;
      if (m.session) {
        const w = m.session.user, S = {
          id: w.id,
          name: ((x = w.user_metadata) == null ? void 0 : x.name) || ((y = w.user_metadata) == null ? void 0 : y.user_name) || ((p = w.user_metadata) == null ? void 0 : p.full_name) || ((V = w.email) == null ? void 0 : V.split("@")[0]) || "User",
          email: w.email,
          avatar_url: ((U = w.user_metadata) == null ? void 0 : U.avatar_url) || null,
          user_metadata: w.user_metadata
        };
        return o.value = {
          user: S,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, s.value = {
          user: S,
          access_token: m.session.access_token,
          refresh_token: m.session.refresh_token
        }, { user: S, session: s.value, error: null };
      }
      return { user: null, session: null, error: "No session returned" };
    } catch (C) {
      return console.error("Sign up error:", C), o.value.isLoading = !1, { user: null, session: null, error: String(C) };
    }
  }, h = async () => {
    await k();
  };
  return be(async () => {
    await Yo(), await h();
  }), {
    // State
    authState: o,
    currentSession: s,
    // Computed
    isAuthenticated: a,
    currentUser: i,
    isLoading: g,
    // Methods
    loadUserInfo: k,
    logout: L,
    signIn: A,
    signUp: D,
    checkAuth: h
  };
}
const fe = {
  // Monitoring intervals - less aggressive to reduce false positives
  normalCheckInterval: 45e3,
  // 45 seconds - normal monitoring (increased from 30s)
  fastCheckInterval: 8e3,
  // 8 seconds - fast monitoring (increased from 5s)
  fastMonitoringDuration: 18e4,
  // 3 minutes - how long to run fast monitoring (increased from 2m)
  // Retry configuration
  maxRetryAttempts: 3,
  // 3 retry attempts
  retryDelay: 2e3,
  // 2 seconds between retries
  // Cache configuration - longer cache to reduce API calls
  validationCacheDuration: 1e4,
  // 10 seconds cache duration (increased from 5s)
  // Detection modes
  enableImmediateDetection: !0,
  // Enable immediate detection on logout
  enableFastMonitoring: !0,
  // Enable fast monitoring mode
  enableNetworkAwareness: !0
  // Enable network-aware monitoring
}, us = {
  ...fe,
  normalCheckInterval: 1e4,
  // 10 seconds - faster normal monitoring
  fastCheckInterval: 2e3,
  // 2 seconds - very fast monitoring
  fastMonitoringDuration: 6e4,
  // 1 minute - shorter fast monitoring duration
  maxRetryAttempts: 2,
  // Fewer retry attempts for faster response
  retryDelay: 1e3
  // 1 second between retries
}, ds = {
  ...fe,
  normalCheckInterval: 6e4,
  // 1 minute - less frequent monitoring
  fastCheckInterval: 1e4,
  // 10 seconds - slower fast monitoring
  fastMonitoringDuration: 3e5,
  // 5 minutes - longer fast monitoring duration
  maxRetryAttempts: 5,
  // More retry attempts
  retryDelay: 3e3,
  // 3 seconds between retries
  enableFastMonitoring: !1
  // Disable fast monitoring to save resources
}, wo = {
  ...fe,
  normalCheckInterval: 1e4,
  // 10 seconds - faster for testing
  fastCheckInterval: 2e3,
  // 2 seconds - very fast for testing
  fastMonitoringDuration: 3e4,
  // 30 seconds - shorter for testing
  validationCacheDuration: 1e3
  // 1 second cache for testing
}, vo = {
  ...fe,
  normalCheckInterval: 45e3,
  // 45 seconds - balanced monitoring
  fastCheckInterval: 3e3,
  // 3 seconds - quick detection
  fastMonitoringDuration: 9e4,
  // 1.5 minutes - reasonable fast monitoring
  validationCacheDuration: 1e4
  // 10 seconds cache for better performance
};
function mo() {
  switch ("production") {
    case "production":
      return vo;
    case "development":
      return wo;
    default:
      return fe;
  }
}
function ia(o) {
  return {
    ...fe,
    ...o
  };
}
const ps = {
  default: fe,
  fast: us,
  conservative: ds,
  development: wo,
  production: vo
};
function la(o) {
  return ps[o];
}
const ca = {
  immediate: "Immediate (0-2 seconds) - When logout is detected via auth events",
  fast: "Fast (2-5 seconds) - When fast monitoring is active",
  normal: "Normal (up to 30 seconds) - Regular monitoring interval",
  conservative: "Conservative (up to 60 seconds) - Less frequent monitoring"
}, ua = {
  manualLogout: {
    timing: "Immediate (0-2 seconds)",
    description: "User clicks logout button",
    method: "Auth state change event + fast monitoring"
  },
  sessionExpiry: {
    timing: "Fast (2-5 seconds)",
    description: "Session token expires naturally",
    method: "Fast monitoring detects invalid session"
  },
  tokenInvalidation: {
    timing: "Normal (up to 30 seconds)",
    description: "Token is invalidated server-side",
    method: "Regular monitoring detects validation failure"
  },
  networkIssues: {
    timing: "Immediate (0-1 second)",
    description: "Network connection lost",
    method: "Network event listener"
  },
  crossTabLogout: {
    timing: "Fast (2-5 seconds)",
    description: "User logs out in another tab",
    method: "Storage event listener + fast monitoring"
  }
};
function fs(o) {
  const s = E(!0), a = E(null), i = E(!1), g = E(!1), k = E(null), L = E(null), A = E(null), D = { ...mo(), ...o }, h = D.normalCheckInterval, d = D.fastCheckInterval, c = D.fastMonitoringDuration, u = D.maxRetryAttempts, x = D.retryDelay, y = K(() => !s.value && a.value !== null), p = K(
    () => {
      var H, N;
      return ((H = a.value) == null ? void 0 : H.canRetry) && ((N = a.value) == null ? void 0 : N.type) !== "manual_check_failed";
    }
  ), V = (H) => {
    var W;
    if (typeof document > "u")
      return null;
    const j = `; ${document.cookie}`.split(`; ${H}=`);
    return j.length === 2 && ((W = j.pop()) == null ? void 0 : W.split(";").shift()) || null;
  }, U = async () => {
    var H, N;
    try {
      console.log("[SessionMonitor] Validating session...");
      const j = V("sb-access-token"), W = V("sb-refresh-token");
      if (!j || !W)
        return console.log("[SessionMonitor] No tokens found in cookies"), !1;
      const oe = await Q();
      let ce = null, ue = null;
      for (let se = 1; se <= 2; se++)
        try {
          const ge = await oe.auth.getSession();
          ce = ge.data.session, ue = ge.error;
          break;
        } catch (ge) {
          if (console.warn(`[SessionMonitor] Network error on attempt ${se}:`, ge), se === 2)
            return console.log("[SessionMonitor] Network issues detected, maintaining current session state"), s.value;
          await new Promise((xe) => setTimeout(xe, 1e3));
        }
      if (ue)
        return console.warn("[SessionMonitor] Error getting session:", ue), (H = ue.message) != null && H.includes("Invalid JWT") || (N = ue.message) != null && N.includes("JWT expired") ? !1 : s.value;
      if (!ce || !ce.user)
        return console.log("[SessionMonitor] No valid session found"), !1;
      const Pe = /* @__PURE__ */ new Date(), Se = new Date(ce.expires_at * 1e3), ie = 5 * 60 * 1e3;
      return Pe >= new Date(Se.getTime() - ie) ? (console.log("[SessionMonitor] Session is close to expiry or expired"), !1) : (console.log("[SessionMonitor] Session is valid"), k.value = /* @__PURE__ */ new Date(), !0);
    } catch (j) {
      return console.error("[SessionMonitor] Error validating session:", j), s.value;
    }
  }, C = async () => {
    try {
      console.log("[SessionMonitor] Attempting to restore session...");
      const H = V("sb-access-token"), N = V("sb-refresh-token");
      if (!H || !N)
        return console.log("[SessionMonitor] No tokens available for restoration"), !1;
      const j = await Q(), { data: W, error: oe } = await j.auth.setSession({
        access_token: H,
        refresh_token: N
      });
      return oe ? (console.warn("[SessionMonitor] Error restoring session:", oe), !1) : W.session && W.session.user ? (console.log("[SessionMonitor] Session restored successfully"), k.value = /* @__PURE__ */ new Date(), !0) : !1;
    } catch (H) {
      return console.error("[SessionMonitor] Error restoring session:", H), !1;
    }
  }, m = (H, N, j = !0) => {
    console.warn("[SessionMonitor] Session loss detected:", { type: H, message: N }), s.value = !1, a.value = {
      type: H,
      message: N,
      timestamp: /* @__PURE__ */ new Date(),
      canRetry: j
    };
  }, R = async () => {
    console.log("[SessionMonitor] Retrying session validation...");
    for (let H = 1; H <= u; H++) {
      if (console.log(`[SessionMonitor] Retry attempt ${H}/${u}`), H > 1 && await new Promise((W) => setTimeout(W, x)), await C() && await U())
        return console.log("[SessionMonitor] Session restored and validated successfully"), s.value = !0, a.value = null, !0;
      if (await U())
        return console.log("[SessionMonitor] Session validated successfully on retry"), s.value = !0, a.value = null, !0;
    }
    return console.log("[SessionMonitor] All retry attempts failed"), !1;
  }, w = () => {
    console.log("[SessionMonitor] Clearing session loss state"), s.value = !0, a.value = null;
  }, S = () => {
    if (i.value) {
      console.log("[SessionMonitor] Already monitoring, skipping start");
      return;
    }
    console.log("[SessionMonitor] Starting session monitoring..."), i.value = !0, setTimeout(async () => {
      console.log("[SessionMonitor] Performing initial session validation..."), await U() ? console.log("[SessionMonitor] Initial validation successful") : (console.log("[SessionMonitor] Initial validation failed, but waiting for confirmation..."), setTimeout(async () => {
        await U() || m("session_expired", "Your session has expired. Please log in again.", !0);
      }, 3e3));
    }, 2e3), L.value = setInterval(async () => {
      console.log("[SessionMonitor] Periodic session check...");
      const H = await U();
      !H && s.value ? (console.log("[SessionMonitor] Session validation failed, performing confirmation check..."), setTimeout(async () => {
        await U() || m("session_expired", "Your session has expired. Please log in again.", !0);
      }, 2e3)) : H && !s.value && (console.log("[SessionMonitor] Session recovered"), w());
    }, h);
  }, Z = () => {
    if (g.value) {
      console.log("[SessionMonitor] Fast monitoring already active");
      return;
    }
    console.log("[SessionMonitor] Starting fast monitoring (5s intervals)..."), g.value = !0, A.value && clearInterval(A.value), A.value = setInterval(async () => {
      console.log("[SessionMonitor] Fast session check...");
      const H = await U();
      !H && s.value ? (console.log("[SessionMonitor] Fast monitoring detected potential session loss, confirming..."), setTimeout(async () => {
        await U() || (m("session_expired", "Your session has expired. Please log in again.", !0), O());
      }, 1e3)) : H && !s.value && (console.log("[SessionMonitor] Session recovered"), w(), O());
    }, d), setTimeout(() => {
      g.value && (console.log(`[SessionMonitor] Auto-stopping fast monitoring after ${c / 1e3} seconds`), O());
    }, c);
  }, O = () => {
    g.value && (console.log("[SessionMonitor] Stopping fast monitoring..."), g.value = !1, A.value && (clearInterval(A.value), A.value = null));
  }, G = () => {
    i.value && (console.log("[SessionMonitor] Stopping session monitoring..."), i.value = !1, L.value && (clearInterval(L.value), L.value = null), O());
  }, b = async () => {
    console.log("[SessionMonitor] Manual session check requested");
    const H = await U();
    return !H && !await C() ? (m("manual_check_failed", "Session validation failed. Please log in again.", !1), !1) : H;
  }, $ = () => {
    console.log("[SessionMonitor] Network error detected, but not triggering immediate session loss"), s.value || m("network_error", "Network connection lost. Please check your internet connection and try again.", !0);
  }, B = () => {
    if (typeof window > "u")
      return;
    const H = () => {
      var W;
      console.log("[SessionMonitor] Network connection restored"), y.value && ((W = a.value) == null ? void 0 : W.type) === "network_error" && setTimeout(() => R(), 1e3);
    }, N = () => {
      console.log("[SessionMonitor] Network connection lost"), $();
    }, j = (W) => {
      console.log("[SessionMonitor] Logout detected, starting fast monitoring for immediate detection"), Z();
    };
    return window.addEventListener("online", H), window.addEventListener("offline", N), window.addEventListener("session-logout-detected", j), () => {
      window.removeEventListener("online", H), window.removeEventListener("offline", N), window.removeEventListener("session-logout-detected", j);
    };
  };
  return be(() => {
    console.log("[SessionMonitor] Mounted, setting up monitoring"), S(), B();
  }), go(() => {
    console.log("[SessionMonitor] Unmounted, cleaning up"), G();
  }), {
    // State
    isSessionValid: s,
    sessionLossEvent: a,
    isMonitoring: i,
    isFastMonitoring: g,
    lastValidSession: k,
    // Computed
    hasSessionLoss: y,
    canRetrySession: p,
    // Methods
    validateSession: U,
    restoreSession: C,
    retrySession: R,
    clearSessionLoss: w,
    startMonitoring: S,
    stopMonitoring: G,
    startFastMonitoring: Z,
    stopFastMonitoring: O,
    checkSession: b,
    handleNetworkError: $
  };
}
const gs = Xo("workspace", () => {
  const o = E(null), s = E([]), a = E(null), i = (h) => {
    o.value = h, localStorage.setItem("current_workspace", JSON.stringify(h));
  }, g = (h) => {
    s.value = h, localStorage.setItem("available_workspaces", JSON.stringify(h));
  };
  return {
    currentWorkspace: o,
    workspaces: s,
    user: a,
    setCurrentWorkspace: i,
    setWorkspaces: g,
    setUser: (h) => {
      a.value = h, localStorage.setItem("user_info", JSON.stringify(h));
    },
    loadPersistedData: () => {
      const h = localStorage.getItem("current_workspace");
      if (h)
        try {
          o.value = JSON.parse(h);
        } catch (u) {
          console.error("Error loading persisted workspace:", u);
        }
      const d = localStorage.getItem("available_workspaces");
      if (d)
        try {
          s.value = JSON.parse(d);
        } catch (u) {
          console.error("Error loading persisted workspaces:", u);
        }
      const c = localStorage.getItem("user_info");
      if (c)
        try {
          a.value = JSON.parse(c);
        } catch (u) {
          console.error("Error loading persisted user:", u);
        }
    },
    clearData: () => {
      o.value = null, s.value = [], a.value = null, localStorage.removeItem("current_workspace"), localStorage.removeItem("available_workspaces"), localStorage.removeItem("user_info");
    },
    loadWorkspaces: async (h = !1) => {
      try {
        const { data: { user: d } } = await Re.auth.getUser();
        if (!d)
          return [];
        let c = Re.from("workspaces").select(`
          id, title, description, parent_workspace_id, created_by, archived, created_at, git_repo, 
          workspace_access!inner ( access_type, shared_with_user_id ),
          workspace_activities!left ( updated_at )
        `).eq("workspace_access.shared_with_user_id", d.id);
        h || (c = c.eq("archived", !1));
        const { data: u, error: x } = await c;
        if (x)
          throw x;
        const y = /* @__PURE__ */ new Map();
        (u || []).forEach((m) => {
          (m.workspace_access || []).forEach((R) => {
            R.shared_with_user_id === d.id && y.set(m.id, R);
          });
        });
        const p = [...new Set(
          (u || []).filter((m) => m.parent_workspace_id).map((m) => m.parent_workspace_id).filter((m) => !y.has(m))
        )];
        let V = [];
        if (p.length) {
          let m = Re.from("workspaces").select("id, title, description, parent_workspace_id, created_by, archived, created_at").in("id", p);
          h || (m = m.eq("archived", !1));
          const { data: R, error: w } = await m;
          if (w)
            throw w;
          V = R || [];
        }
        const C = [...u || [], ...V].map((m) => {
          var R, w, S;
          return {
            id: m.id,
            title: m.title,
            description: m.description || "No description",
            parent_workspace_id: m.parent_workspace_id,
            created_by: m.created_by,
            archived: m.archived,
            created_at: m.created_at,
            latest_activity: ((w = (R = m.workspace_activities) == null ? void 0 : R[0]) == null ? void 0 : w.updated_at) || m.created_at,
            hasAccess: y.has(m.id),
            accessType: ((S = y.get(m.id)) == null ? void 0 : S.access_type) || null
          };
        });
        return C.sort((m, R) => new Date(R.latest_activity) - new Date(m.latest_activity)), g(C), C;
      } catch (d) {
        return console.error("loadWorkspaces error", d), [];
      }
    }
  };
});
let ye = null;
const je = (o) => !(!o || typeof o != "string" || o.trim().length === 0 || o.trim().length < 20), hs = async () => {
  try {
    const { createClient: o } = await import("@supabase/supabase-js"), s = { VITE_SUPABASE_URL: void 0, VITE_SUPABASE_ANON_KEY: void 0, BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_SUPABASE_SERVICE_ROLE_KEY || { VITE_SUPABASE_URL: void 0, VITE_SUPABASE_ANON_KEY: void 0, BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_SUPABASE_SERVICE_KEY || window.__SUPABASE_SERVICE_KEY__;
    return s ? (console.log("[GitHub Config] Using service role key for settings access"), o(
      "https://sb.aiworkspace.pro",
      s
    )) : (console.log("[GitHub Config] No service key found, using regular client"), await Q());
  } catch (o) {
    return console.warn("[GitHub Config] Failed to create admin client, using regular client:", o), await Q();
  }
}, ws = async () => {
  var o;
  try {
    console.log("[GitHub Config] Attempting to fetch GitHub token from database...");
    const s = await hs();
    console.log("[GitHub Config] Testing table access methods...");
    const { data: a, error: i } = await s.from("settings").select("key_name, key_value");
    let g = a, k = i;
    if (i && i.code === "PGRST301") {
      console.log("[GitHub Config] Direct access blocked by RLS, trying alternative method...");
      const { data: d, error: c } = await s.from("settings").select("key_name, key_value").eq("key_name", "github_token");
      g = d, k = c;
    }
    if (console.log("[GitHub Config] All settings rows:", g), console.log("[GitHub Config] Query error (if any):", k), g) {
      console.log("[GitHub Config] Looking for github_token in rows...");
      const d = g.filter(
        (c) => c.key_name && (c.key_name.toLowerCase() === "github_token" || c.key_name === "github_token" || c.key_name.includes("github"))
      );
      if (console.log("[GitHub Config] GitHub-related rows found:", d), d.length > 0) {
        const c = (o = d[0].key_value) == null ? void 0 : o.trim();
        if (c && je(c))
          return console.log("🔧 GitHub token found in general query!"), console.log("Token preview:", c.substring(0, 8) + "..." + c.substring(c.length - 4)), console.log("Token length:", c.length), console.log("Token starts with:", c.substring(0, 4)), c;
      }
    }
    const { data: L, error: A, count: D } = await s.from("settings").select("key_value", { count: "exact" }).eq("key_name", "github_token");
    if (console.log("[GitHub Config] Specific query result:", { data: L, error: A, count: D }), A)
      return console.warn("[GitHub Config] Database error details:", {
        code: A.code,
        message: A.message,
        details: A.details,
        hint: A.hint
      }), A.code === "PGRST116" ? console.info("[GitHub Config] No GitHub token configured in database (PGRST116)") : console.warn("[GitHub Config] Error fetching token from database:", A.message), null;
    const h = Array.isArray(L) ? L[0] : L;
    if (h != null && h.key_value) {
      const d = h.key_value.trim();
      return je(d) ? (console.log("🔧 GitHub token fetched from database successfully"), console.log("Token preview:", d.substring(0, 8) + "..." + d.substring(d.length - 4)), console.log("Token length:", d.length), console.log("Token starts with:", d.substring(0, 4)), d) : (console.warn("[GitHub Config] Invalid GitHub token format in database"), null);
    }
    return console.warn("[GitHub Config] No GitHub token found in database - data was:", h), null;
  } catch (s) {
    return console.error("[GitHub Config] Failed to fetch token from database:", s), null;
  }
}, da = (o) => {
  if (!(o != null && o.token) || !je(o.token))
    throw console.error("[GitHub Config] Invalid GitHub token provided"), new Error("Invalid GitHub token provided");
  ye = o.token.trim(), console.log("🔧 GitHub token configured manually");
}, Ke = async () => {
  if (ye)
    return ye;
  try {
    const o = await ws();
    if (o)
      return ye = o, o;
  } catch (o) {
    console.error("[GitHub Config] Failed to fetch token:", o);
  }
  return null;
}, pa = async () => {
  if (ye !== null)
    return !0;
  try {
    return await Ke() !== null;
  } catch (o) {
    return console.error("[GitHub Config] Error checking configuration:", o), !1;
  }
}, vs = () => {
  ye = null, console.log("🔧 GitHub token cache cleared");
}, fa = async () => (vs(), await Ke()), ga = async () => {
  try {
    console.log("[GitHub Config Debug] Testing database connection...");
    const o = await Q(), { data: s, error: a } = await o.from("settings").select("*").limit(10);
    console.log("[GitHub Config Debug] Settings table sample (first 10 rows):", s), console.log("[GitHub Config Debug] Query error:", a), s && (console.log("[GitHub Config Debug] Column structure of first row:", Object.keys(s[0] || {})), console.log("[GitHub Config Debug] All key_name values:", s.map((h) => h.key_name)));
    const { data: i, error: g } = await o.from("settings").select("*").eq("key_name", "github_token");
    console.log("[GitHub Config Debug] Exact github_token match:", i), console.log("[GitHub Config Debug] Exact match error:", g);
    const { data: k, error: L } = await o.from("settings").select("*").ilike("key_name", "%github%");
    console.log("[GitHub Config Debug] Case-insensitive GitHub search:", k), console.log("[GitHub Config Debug] Case-insensitive error:", L);
    const { data: A, error: D } = await o.rpc("get_table_columns", { table_name: "settings" }).limit(1);
    console.log("[GitHub Config Debug] Table structure info:", A), console.log("[GitHub Config Debug] Table structure error:", D);
  } catch (o) {
    console.error("[GitHub Config Debug] Database connection test failed:", o);
  }
};
function ms() {
  const o = E({
    user: null,
    isAuthenticated: !1,
    isLoading: !0,
    error: null
  }), s = E(window.location.href), a = async () => {
    var h, d, c, u, x, y, p, V;
    try {
      o.value.isLoading = !0;
      const U = await Q(), { data: { session: C }, error: m } = await U.auth.getSession();
      if (m) {
        console.error("Error checking auth status:", m), o.value = {
          user: null,
          isAuthenticated: !1,
          isLoading: !1,
          error: m.message
        };
        return;
      }
      C != null && C.user ? (o.value = {
        user: {
          id: C.user.id,
          email: C.user.email || "",
          name: ((h = C.user.user_metadata) == null ? void 0 : h.full_name) || ((d = C.user.user_metadata) == null ? void 0 : d.name) || ((c = C.user.email) == null ? void 0 : c.split("@")[0]) || "User",
          avatar_url: ((u = C.user.user_metadata) == null ? void 0 : u.avatar_url) || ((x = C.user.user_metadata) == null ? void 0 : x.picture) || null,
          initials: (((y = C.user.user_metadata) == null ? void 0 : y.full_name) || ((p = C.user.user_metadata) == null ? void 0 : p.name) || ((V = C.user.email) == null ? void 0 : V.split("@")[0]) || "U").split(" ").map((R) => R[0]).join("").toUpperCase().substring(0, 2)
        },
        isAuthenticated: !0,
        isLoading: !1,
        error: null
      }, C.access_token && _e(me, C.access_token), C.refresh_token && _e(ke, C.refresh_token), Oe()) : o.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      };
    } catch (U) {
      console.error("Auth check failed:", U), o.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: U.message || "Authentication check failed"
      };
    }
  }, i = async (h, d) => {
    try {
      const c = await Q(), { error: u } = await c.auth.signInWithPassword({
        email: h,
        password: d
      });
      return u ? { success: !1, error: u.message } : (await a(), sessionStorage.setItem("post-login-redirect", s.value), { success: !0 });
    } catch (c) {
      return console.error("Login error:", c), { success: !1, error: c.message || "Login failed" };
    }
  }, g = async (h, d) => {
    var c;
    try {
      const u = await Q(), { data: x, error: y } = await u.auth.signUp({
        email: h,
        password: d
      });
      return y ? { success: !1, error: y.message } : x.user && !x.user.email_confirmed_at ? { success: !0, needsConfirmation: !0 } : (c = x.session) != null && c.user ? (await a(), sessionStorage.setItem("post-login-redirect", s.value), { success: !0 }) : { success: !1, error: "No session created" };
    } catch (u) {
      return console.error("Signup error:", u), { success: !1, error: u.message || "Signup failed" };
    }
  }, k = async (h) => {
    try {
      const d = `${window.location.origin}/auth/callback`;
      console.log("[OAuth] Starting login with provider:", h), console.log("[OAuth] Redirect URL:", d), console.log("[OAuth] Current URL:", s.value), console.log("[OAuth] Current origin:", window.location.origin);
      const c = await Q(), { error: u } = await c.auth.signInWithOAuth({
        provider: h,
        options: {
          redirectTo: d,
          queryParams: {
            redirect_origin: s.value
          }
        }
      });
      if (u)
        return console.error("[OAuth] Error:", u), { success: !1, error: u.message };
      const x = s.value || window.location.href;
      return sessionStorage.setItem("post-login-redirect", x), localStorage.setItem("post-login-redirect", x), console.log("[OAuth] Stored redirect URL:", x), console.log("[OAuth] Current URL value:", s.value), console.log("[OAuth] Window location href:", window.location.href), { success: !0 };
    } catch (d) {
      return console.error("OAuth login error:", d), { success: !1, error: d.message || "OAuth login failed" };
    }
  }, L = async () => {
    try {
      const h = await Q(), { error: d } = await h.auth.signOut();
      d && console.error("Logout error:", d), o.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      }, ve(me), ve(ke), Ge();
    } catch (h) {
      console.error("Logout error:", h);
    }
  }, A = async (h) => {
    try {
      const d = await Q(), { error: c } = await d.auth.resetPasswordForEmail(h, {
        redirectTo: `${window.location.origin}/auth/reset-password`
      });
      return c ? { success: !1, error: c.message } : { success: !0 };
    } catch (d) {
      return console.error("Password reset error:", d), { success: !1, error: d.message || "Password reset failed" };
    }
  }, D = async () => {
    try {
      (await Q()).auth.onAuthStateChange((d, c) => {
        var u;
        switch (console.log("Auth state changed:", d, (u = c == null ? void 0 : c.user) == null ? void 0 : u.email), d) {
          case "SIGNED_IN":
            c != null && c.user && a();
            break;
          case "SIGNED_OUT":
            o.value = {
              user: null,
              isAuthenticated: !1,
              isLoading: !1,
              error: null
            }, ve(me), ve(ke), Ge();
            break;
          case "TOKEN_REFRESHED":
            c != null && c.access_token && _e(me, c.access_token), c != null && c.refresh_token && _e(ke, c.refresh_token), Oe();
            break;
          case "USER_UPDATED":
            c != null && c.user && a();
            break;
        }
      });
    } catch (h) {
      console.warn("Failed to setup auth listener:", h);
    }
  };
  return be(async () => {
    D(), await a();
  }), le(() => window.location.href, (h) => {
    s.value = h;
  }), {
    authState: K(() => o.value),
    isAuthenticated: K(() => o.value.isAuthenticated),
    user: K(() => o.value.user),
    isLoading: K(() => o.value.isLoading),
    checkAuthStatus: a,
    loginWithEmail: i,
    signupWithEmail: g,
    loginWithProvider: k,
    logout: L,
    resetPassword: A,
    currentUrl: K(() => s.value)
  };
}
const ks = { class: "login-container" }, _s = { class: "logo-section" }, ys = { class: "login-buttons" }, bs = {
  key: 0,
  class: "forgot-password"
}, Ss = { class: "signup-link" }, Cs = /* @__PURE__ */ ne({
  __name: "LoginModal",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue", "login-success"],
  setup(o, { emit: s }) {
    const a = o, i = s, g = K({
      get: () => a.modelValue,
      set: (w) => i("update:modelValue", w)
    }), k = E(!1), L = E(!1), A = E(), { loginWithEmail: D, signupWithEmail: h, loginWithProvider: d, resetPassword: c } = ms(), u = Bo({
      email: "",
      password: "",
      confirmPassword: ""
    }), x = K(() => ({
      email: [
        { required: !0, message: "Please enter your email", trigger: "blur" },
        { type: "email", message: "Please enter a valid email", trigger: "blur" }
      ],
      password: [
        { required: !0, message: "Please enter your password", trigger: "blur" },
        { min: 6, message: "Password must be at least 6 characters", trigger: "blur" }
      ],
      ...k.value ? {
        confirmPassword: [
          { required: !0, message: "Please confirm your password", trigger: "blur" },
          {
            validator: (w, S, Z) => {
              S !== u.password ? Z(new Error("Passwords do not match")) : Z();
            },
            trigger: "blur"
          }
        ]
      } : {}
    })), y = () => {
      var w;
      k.value = !k.value, u.email = "", u.password = "", u.confirmPassword = "", (w = A.value) == null || w.clearValidate();
    }, p = () => {
      var w;
      g.value = !1, u.email = "", u.password = "", u.confirmPassword = "", k.value = !1, (w = A.value) == null || w.clearValidate();
    }, V = async () => {
      if (A.value)
        try {
          await A.value.validate(), L.value = !0, k.value ? await C() : await U();
        } catch (w) {
          console.error("Form validation failed:", w);
        } finally {
          L.value = !1;
        }
    }, U = async () => {
      const w = await D(u.email, u.password);
      w.success ? (z.success("Login successful"), i("login-success", { email: u.email }), p()) : z.error("Login failed: " + w.error);
    }, C = async () => {
      const w = await h(u.email, u.password);
      w.success ? w.needsConfirmation ? z.success("Please check your email to confirm your account") : (z.success("Account created successfully"), i("login-success", { email: u.email }), p()) : z.error("Signup failed: " + w.error);
    }, m = async (w) => {
      const S = await d(w);
      S.success ? z.success("Redirecting to login provider...") : z.error("Login failed: " + S.error);
    }, R = async () => {
      if (!u.email) {
        z.warning("Please enter your email address first");
        return;
      }
      const w = await c(u.email);
      w.success ? z.success("Password reset email sent! Please check your inbox.") : z.error("Failed to send reset email: " + w.error);
    };
    return (w, S) => {
      const Z = ee("el-icon"), O = ee("el-input"), G = ee("el-form-item"), b = ee("el-button"), $ = ee("el-dialog");
      return _(), X($, {
        modelValue: g.value,
        "onUpdate:modelValue": S[6] || (S[6] = (B) => g.value = B),
        title: "",
        width: "500px",
        "close-on-click-modal": !1,
        "close-on-press-escape": !0,
        "show-close": !0,
        class: "login-modal",
        onClose: p
      }, {
        default: f(() => [
          n("div", ks, [
            n("div", _s, [
              n("h2", null, q(k.value ? "Create Account" : "Welcome Back"), 1),
              n("p", null, q(k.value ? "Sign up to get started with your account" : "Sign in to continue to your account"), 1)
            ]),
            v(M(jo), {
              model: u,
              rules: x.value,
              ref_key: "formRef",
              ref: A,
              class: "login-form",
              onSubmit: re(V, ["prevent"])
            }, {
              default: f(() => [
                v(G, { prop: "email" }, {
                  default: f(() => [
                    v(O, {
                      modelValue: u.email,
                      "onUpdate:modelValue": S[0] || (S[0] = (B) => u.email = B),
                      placeholder: "Email",
                      type: "email",
                      size: "large",
                      class: "form-input"
                    }, {
                      prefix: f(() => [
                        v(Z, null, {
                          default: f(() => [
                            v(M(ts))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                v(G, { prop: "password" }, {
                  default: f(() => [
                    v(O, {
                      modelValue: u.password,
                      "onUpdate:modelValue": S[1] || (S[1] = (B) => u.password = B),
                      placeholder: "Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: f(() => [
                        v(Z, null, {
                          default: f(() => [
                            v(M(fo))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                k.value ? (_(), X(G, {
                  key: 0,
                  prop: "confirmPassword"
                }, {
                  default: f(() => [
                    v(O, {
                      modelValue: u.confirmPassword,
                      "onUpdate:modelValue": S[2] || (S[2] = (B) => u.confirmPassword = B),
                      placeholder: "Confirm Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: f(() => [
                        v(Z, null, {
                          default: f(() => [
                            v(M(fo))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                })) : F("", !0),
                v(G, null, {
                  default: f(() => [
                    v(b, {
                      type: "primary",
                      class: "submit-button",
                      loading: L.value,
                      onClick: V,
                      size: "large"
                    }, {
                      default: f(() => [
                        J(q(k.value ? "Sign Up" : "Sign In"), 1)
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model", "rules"]),
            S[10] || (S[10] = n("div", { class: "divider" }, [
              n("span", null, "Or continue with")
            ], -1)),
            n("div", ys, [
              v(b, {
                class: "login-button google",
                onClick: S[3] || (S[3] = (B) => m("google")),
                size: "large"
              }, {
                default: f(() => [...S[7] || (S[7] = [
                  n("span", { class: "social-icon" }, "G", -1),
                  J(" Google ", -1)
                ])]),
                _: 1
              }),
              v(b, {
                class: "login-button github",
                onClick: S[4] || (S[4] = (B) => m("github")),
                size: "large"
              }, {
                default: f(() => [...S[8] || (S[8] = [
                  n("span", { class: "social-icon" }, "⚡", -1),
                  J(" GitHub ", -1)
                ])]),
                _: 1
              }),
              v(b, {
                class: "login-button twitter",
                onClick: S[5] || (S[5] = (B) => m("twitter")),
                size: "large"
              }, {
                default: f(() => [...S[9] || (S[9] = [
                  n("span", { class: "social-icon" }, "X", -1),
                  J(" X (Twitter) ", -1)
                ])]),
                _: 1
              })
            ]),
            S[11] || (S[11] = n("div", { class: "terms" }, " By continuing, you agree to AI Workspace's Terms of Service and Privacy Policy ", -1)),
            k.value ? F("", !0) : (_(), P("div", bs, [
              n("a", {
                href: "#",
                onClick: re(R, ["prevent"])
              }, "Forgot Password?")
            ])),
            n("div", Ss, [
              J(q(k.value ? "Already have an account?" : "Don't have an account?") + " ", 1),
              n("a", {
                href: "#",
                onClick: re(y, ["prevent"])
              }, q(k.value ? "Sign in" : "Sign up"), 1)
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
const Te = (o, s) => {
  const a = o.__vccOpts || o;
  for (const [i, g] of s)
    a[i] = g;
  return a;
}, Es = /* @__PURE__ */ Te(Cs, [["__scopeId", "data-v-684a3f28"]]), As = { class: "session-loss-content" }, Is = { class: "session-loss-icon" }, Ls = { class: "session-loss-message" }, Hs = {
  key: 0,
  class: "session-loss-details"
}, Vs = { class: "detail-item" }, Rs = { class: "detail-value" }, Us = { class: "detail-item" }, Ts = { class: "detail-value" }, Ps = { class: "session-loss-actions" }, xs = {
  key: 0,
  class: "retry-status"
}, Ds = { class: "retry-message" }, Ms = /* @__PURE__ */ ne({
  __name: "SessionLossModal",
  props: {
    modelValue: { type: Boolean },
    sessionLossEvent: {},
    canRetrySession: { type: Boolean }
  },
  emits: ["update:modelValue", "retry", "login", "refresh"],
  setup(o, { emit: s }) {
    const a = o, i = s, g = E(!1), k = E(0), L = E(void 0), A = E(""), D = K({
      get: () => a.modelValue,
      set: (y) => i("update:modelValue", y)
    }), h = (y) => {
      switch (y) {
        case "session_expired":
          return "Authentication session has expired";
        case "token_invalid":
          return "Authentication token is invalid or corrupted";
        case "network_error":
          return "Network connection issue detected";
        case "manual_check_failed":
          return "Session validation failed";
        default:
          return "Unknown authentication issue";
      }
    }, d = (y) => y.toLocaleString(), c = async () => {
      if (g.value)
        return;
      g.value = !0, k.value = 0, L.value = void 0, A.value = "Attempting to restore session...";
      const y = setInterval(() => {
        k.value < 90 && (k.value += Math.random() * 20);
      }, 200);
      try {
        i("retry"), await new Promise((p) => setTimeout(p, 2e3)), k.value = 100, L.value = "success", A.value = "Session restored successfully!", setTimeout(() => {
          D.value = !1;
        }, 1e3);
      } catch {
        k.value = 100, L.value = "exception", A.value = "Failed to restore session. Please log in again.", z.error("Session restoration failed");
      } finally {
        clearInterval(y), setTimeout(() => {
          g.value = !1, k.value = 0, L.value = void 0, A.value = "";
        }, 3e3);
      }
    }, u = () => {
      i("login"), D.value = !1;
    }, x = () => {
      i("refresh"), window.location.reload();
    };
    return le(() => a.sessionLossEvent, (y) => {
      y && (g.value = !1, k.value = 0, L.value = void 0, A.value = "");
    }), (y, p) => (_(), X(M(zo), {
      modelValue: D.value,
      "onUpdate:modelValue": p[0] || (p[0] = (V) => D.value = V),
      title: "Session Expired",
      width: "500px",
      "close-on-click-modal": !1,
      "close-on-press-escape": !1,
      "show-close": !1,
      class: "session-loss-modal",
      center: ""
    }, {
      default: f(() => {
        var V;
        return [
          n("div", As, [
            n("div", Is, [
              v(M(Ve), {
                size: "48",
                color: "#f56c6c"
              }, {
                default: f(() => [
                  v(M(ho))
                ]),
                _: 1
              })
            ]),
            n("div", Ls, [
              p[3] || (p[3] = n("h3", null, "Your session has expired", -1)),
              n("p", null, q(((V = o.sessionLossEvent) == null ? void 0 : V.message) || "Please log in again to continue using the application."), 1),
              o.sessionLossEvent ? (_(), P("div", Hs, [
                n("div", Vs, [
                  p[1] || (p[1] = n("span", { class: "detail-label" }, "Issue:", -1)),
                  n("span", Rs, q(h(o.sessionLossEvent.type)), 1)
                ]),
                n("div", Us, [
                  p[2] || (p[2] = n("span", { class: "detail-label" }, "Time:", -1)),
                  n("span", Ts, q(d(o.sessionLossEvent.timestamp)), 1)
                ])
              ])) : F("", !0)
            ]),
            n("div", Ps, [
              o.canRetrySession && !g.value ? (_(), X(M(Ne), {
                key: 0,
                type: "primary",
                onClick: c,
                loading: g.value
              }, {
                default: f(() => [
                  v(M(Ve), null, {
                    default: f(() => [
                      v(M(Be))
                    ]),
                    _: 1
                  }),
                  p[4] || (p[4] = J(" Try Again ", -1))
                ]),
                _: 1
              }, 8, ["loading"])) : F("", !0),
              v(M(Ne), {
                type: "primary",
                onClick: u,
                disabled: g.value
              }, {
                default: f(() => [
                  v(M(Ve), null, {
                    default: f(() => [
                      v(M(Fe))
                    ]),
                    _: 1
                  }),
                  p[5] || (p[5] = J(" Log In ", -1))
                ]),
                _: 1
              }, 8, ["disabled"]),
              o.canRetrySession ? F("", !0) : (_(), X(M(Ne), {
                key: 1,
                type: "info",
                onClick: x,
                disabled: g.value
              }, {
                default: f(() => [
                  v(M(Ve), null, {
                    default: f(() => [
                      v(M(Be))
                    ]),
                    _: 1
                  }),
                  p[6] || (p[6] = J(" Refresh Page ", -1))
                ]),
                _: 1
              }, 8, ["disabled"]))
            ]),
            g.value ? (_(), P("div", xs, [
              v(M(Ko), {
                percentage: k.value,
                status: L.value,
                "stroke-width": 6
              }, null, 8, ["percentage", "status"]),
              n("p", Ds, q(A.value), 1)
            ])) : F("", !0)
          ])
        ];
      }),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const $s = /* @__PURE__ */ Te(Ms, [["__scopeId", "data-v-0dd27f7f"]]), Ws = { class: "aiworkspace-header" }, Ns = {
  key: 0,
  class: "header-content header-loading"
}, Gs = { class: "header-center" }, Os = { class: "loading-text" }, Bs = { key: 0 }, Fs = { key: 1 }, js = {
  key: 1,
  class: "header-content header-fallback"
}, zs = {
  key: 2,
  class: "header-content header-restricted"
}, Ks = { class: "header-center" }, Ys = { class: "restricted-text" }, qs = { class: "header-right" }, Js = {
  key: 3,
  class: "header-content"
}, Xs = { class: "header-left" }, Qs = { class: "logo-section" }, Zs = {
  href: "/",
  class: "logo"
}, et = ["src"], ot = {
  key: 1,
  class: "text-logo"
}, st = {
  key: 0,
  class: "header-center"
}, tt = { class: "main-navigation" }, at = { class: "nav-item" }, rt = {
  href: "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard",
  class: "nav-link"
}, nt = { class: "workspace-dropdown-item" }, it = ["href"], lt = { class: "workspace-icon" }, ct = {
  key: 1,
  class: "nav-divider"
}, ut = { class: "nav-item" }, dt = ["href", "onClick"], pt = {
  key: 0,
  class: "header-placeholder"
}, ft = {
  key: 1,
  class: "header-placeholder"
}, gt = { class: "header-right" }, ht = { class: "user-profile" }, wt = { class: "user-info" }, vt = { class: "user-name" }, mt = { class: "user-avatar" }, kt = ["src", "alt"], _t = {
  key: 1,
  class: "avatar-placeholder"
}, yt = { class: "version-info" }, bt = { class: "version-hash" }, St = {
  key: 4,
  class: "header-content header-unauthenticated"
}, Ct = { class: "header-left" }, Et = { class: "logo-section" }, At = {
  href: "/",
  class: "logo"
}, It = ["src"], Lt = {
  key: 1,
  class: "text-logo"
}, Ht = {
  key: 0,
  class: "header-right"
}, Vt = { class: "workspace-list" }, Rt = ["onClick"], Ut = { class: "workspace-icon" }, Tt = { class: "workspace-details" }, Pt = { class: "workspace-members" }, xt = {
  key: 0,
  class: "current-indicator"
}, Dt = { class: "update-content" }, Mt = { class: "update-actions" }, Ae = 50, $t = 6e4, Wt = 30, Nt = /* @__PURE__ */ ne({
  __name: "AIWorkspaceHeader",
  props: {
    customLogo: { default: "" },
    customLinks: { default: () => [] },
    showUserMenu: { type: Boolean, default: !0 },
    showWorkspaceSelector: { type: Boolean, default: !0 },
    showSecondaryNavigation: { type: Boolean, default: !0 },
    currentWorkspaceId: {},
    onProfileClick: {},
    onSettingsClick: {},
    onWorkspaceChange: {},
    onLogout: {},
    onLogin: {}
  },
  emits: ["workspaceChange", "logout", "login", "profileClick", "settingsClick"],
  setup(o, { emit: s }) {
    const a = o, i = s, { authState: g, logout: k, isLoading: L } = cs(), {
      isSessionValid: A,
      sessionLossEvent: D,
      hasSessionLoss: h,
      canRetrySession: d,
      retrySession: c,
      clearSessionLoss: u
    } = fs(), x = () => {
      try {
        return gs();
      } catch {
        return console.warn("[AIWorkspaceHeader] Pinia not initialized yet, using fallback state"), null;
      }
    }, y = () => {
      try {
        return typeof window < "u" ? !!window.__PINIA__ || !!window.Pinia : !1;
      } catch {
        return !1;
      }
    }, p = E(x()), V = K(() => !!p.value), U = E(0), C = () => {
      if (!p.value && U.value < Ae) {
        if (y()) {
          const t = x();
          if (t) {
            p.value = t, console.log("[AIWorkspaceHeader] Pinia store initialized successfully");
            return;
          }
        }
        U.value++, setTimeout(C, 100);
      } else
        U.value >= Ae && console.warn("[AIWorkspaceHeader] Pinia initialization failed after maximum retries, using fallback mode");
    };
    be(() => {
      p.value || C();
    });
    const m = E(!1), R = E(!1), w = E(!1), S = E([]), Z = E([]), O = E({
      name: "",
      email: "",
      avatar_url: null,
      initials: ""
    }), G = E("unknown"), b = E("unknown"), $ = E(!1), B = E(null), H = E(null), N = E(!1), j = E([]), W = E([]), oe = E(!1);
    le(W, async (t) => {
      t.length > 0 && V.value && ie.value && await Se();
    }, { immediate: !1 }), le(() => window.location.pathname + window.location.search + window.location.hash, async () => {
      V.value && ie.value && await Se();
    }, { immediate: !1 });
    const ce = E(window.location.pathname);
    le(() => window.location.pathname, (t) => {
      ce.value = t;
    }, { immediate: !0 }), le(V, (t) => {
      !t && U.value < Ae && C();
    });
    const ue = () => {
      try {
        const t = window.location.pathname.match(/\/single-workspace\/(\d+)/);
        if (t)
          return t[1];
        const r = new URLSearchParams(window.location.search).get("workspace_id");
        if (r)
          return r;
        const l = window.location.hash.match(/workspace_id=(\d+)/);
        return l ? l[1] : null;
      } catch (t) {
        return console.warn("[AIWorkspaceHeader] Error parsing URL for workspace_id:", t), null;
      }
    }, Pe = () => {
      try {
        return window.location.pathname.includes("/all-workspace/");
      } catch (t) {
        return console.warn("[AIWorkspaceHeader] Error checking all-workspace mode:", t), !1;
      }
    }, Se = async () => {
      if (!p.value || !V.value)
        return;
      const t = Pe();
      if (oe.value = t, t) {
        p.value.currentWorkspace = null, localStorage.removeItem("current_workspace"), console.log("[AIWorkspaceHeader] Auto-selected all-workspace mode from URL");
        return;
      }
      const e = ue();
      if (e)
        try {
          W.value.length === 0 && await Qe();
          const r = W.value.find((l) => l.id.toString() === e);
          r ? (p.value.setCurrentWorkspace(r), console.log(`[AIWorkspaceHeader] Auto-selected workspace from URL: ${r.title} (ID: ${r.id})`), i("workspaceChange", r)) : console.warn(`[AIWorkspaceHeader] Workspace with ID ${e} not found in available workspaces`);
        } catch (r) {
          console.error("[AIWorkspaceHeader] Error auto-selecting workspace from URL:", r);
        }
    }, ie = K(() => g.value.isAuthenticated), se = K(() => p.value ? p.value.currentWorkspace : null), ge = K(() => {
      try {
        return window.location.pathname.includes("shared-folder");
      } catch (t) {
        return console.warn("[AIWorkspaceHeader] Error checking shared-folder URL:", t), !1;
      }
    }), xe = E([
      { label: "Dashboard", key: "dashboard", url: "/dashboard" },
      { label: "Goals", key: "goals", url: "/goals" },
      { label: "Tasks", key: "tasks", url: "/tasks" },
      { label: "Events", key: "events", url: "/events" },
      { label: "Drive", key: "files", url: "/files" },
      { label: "Outlines", key: "outlines", url: "/outlines" },
      { label: "Communications", key: "communications", url: "/communications" },
      { label: "Canvas", key: "canvas", url: "/canvas" },
      { label: "AI Phone", key: "phone", url: "/phone" },
      { label: "AI Intake", key: "ai_intake", url: "/ai_intake" },
      { label: "AI Fax", key: "ai_fax", url: "/ai_fax" },
      { label: "Portfolio Analysis", key: "ai-portfolios", url: "/ai-portfolios" },
      { label: "AI Fund Analyst", key: "ai_fund_analyst", url: "/ai_fund_analyst" },
      { label: "Contacts", key: "contacts", url: "/contacts" },
      { label: "Settings", key: "settings", url: "/settings" }
    ]), ko = E([
      { label: "Dashboard", key: "dashboard", url: "/dashboard" },
      { label: "All Tasks", key: "tasks", url: "/tasks" },
      { label: "All Goals", key: "goals", url: "/goals" },
      { label: "All Events", key: "events", url: "/events" },
      { label: "All Drive", key: "files", url: "/files" },
      { label: "All Contacts", key: "contacts", url: "/contacts" },
      { label: "All Settings", key: "settings", url: "/settings" }
    ]), qe = K(() => oe.value ? ko.value : xe.value), _o = K(() => {
      try {
        const t = ce.value;
        let e = "";
        const r = t.match(/\/all-workspace\/([^\/]+)/);
        if (r)
          e = r[1];
        else {
          const l = t.match(/\/single-workspace\/\d+\/([^\/]+)/);
          if (l)
            e = l[1];
          else {
            const T = t.match(/\/([^\/]+)$/);
            T && (e = T[1]);
          }
        }
        if (e) {
          const l = qe.value.find(
            (T) => T.key === e || T.url.includes(`/${e}`) || T.url === `/${e}`
          );
          if (l)
            return l.label;
        }
        return "Dashboard";
      } catch (t) {
        return console.warn("[AIWorkspaceHeader] Error determining current section:", t), "Dashboard";
      }
    }), Ie = K(() => {
      try {
        return window.location.hostname === "worklog.aiworkspace.pro";
      } catch (t) {
        return console.warn("[AIWorkspaceHeader] Error checking worklog domain:", t), !1;
      }
    }), Je = K(() => {
      try {
        return window.location.hostname === "drms.aiworkspace.pro" || window.location.hostname === "localhost" && window.location.pathname.startsWith("/dashboard");
      } catch (t) {
        return console.warn("[AIWorkspaceHeader] Error checking DRMS domain:", t), !1;
      }
    }), Ce = K(() => a.showWorkspaceSelector && !Ie.value && !Je.value), yo = (t) => {
      const e = /* @__PURE__ */ new Map();
      t.forEach((T) => {
        e.set(T.id, { ...T, children: [] });
      });
      const r = [];
      e.forEach((T) => {
        T.parent_workspace_id && e.has(T.parent_workspace_id) ? e.get(T.parent_workspace_id).children.push(T) : r.push(T);
      });
      const l = (T) => {
        T.sort((Y, ae) => Y.title.localeCompare(ae.title)), T.forEach((Y) => {
          Y.children && l(Y.children);
        });
      };
      return l(r), r;
    }, Xe = (t, e = 0, r = []) => (t.forEach((l) => {
      r.push({ ...l, level: e }), l.children && l.children.length && Xe(l.children, e + 1, r);
    }), r), Qe = async () => {
      var t, e, r;
      try {
        const l = await ((t = p.value) == null ? void 0 : t.loadWorkspaces());
        if (j.value = yo(l || []), W.value = Xe(j.value), Z.value = W.value, S.value = W.value, a.currentWorkspaceId) {
          const T = W.value.find((Y) => {
            var ae;
            return Y.id.toString() === ((ae = a.currentWorkspaceId) == null ? void 0 : ae.toString());
          });
          T && ((e = p.value) == null || e.setCurrentWorkspace(T));
        } else
          !se.value && W.value.length && ((r = p.value) == null || r.setCurrentWorkspace(W.value[0]));
      } catch (l) {
        console.error("loadWorkspaces (header) error", l);
      }
    }, bo = (t) => {
      if (console.log("Navigation command:", t), t === "all-workspace") {
        window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
        return;
      } else {
        const e = parseInt(t.replace("workspace-", ""));
        window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e}/dashboard`;
        return;
      }
    }, So = (t) => {
      const e = se.value, r = oe.value;
      switch (t.key) {
        case "dashboard":
          r ? window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard" : e ? window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e.id}/dashboard` : window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
          break;
        case "outlines":
          if (r)
            window.location.href = "https://outline.aiworkspace.pro/all-workspace/outlines";
          else if (e) {
            const l = `https://outline.aiworkspace.pro/single-workspace/${e.id}/outlines`;
            window.location.href = l;
          } else
            window.location.href = "https://outline.aiworkspace.pro";
          break;
        case "canvas":
          if (r)
            window.location.href = "https://canvas.aiworkspace.pro/all-workspace/canvas";
          else if (e) {
            const l = `https://canvas.aiworkspace.pro/single-workspace/${e.id}/canvas`;
            window.location.href = l;
          } else
            window.location.href = "https://canvas.aiworkspace.pro";
          break;
        case "files":
          if (r)
            window.location.href = "https://drive.aiworkspace.pro/all-workspace/files";
          else if (e) {
            const l = `https://drive.aiworkspace.pro/single-workspace/${e.id}/files`;
            window.location.href = l;
          } else
            window.location.href = "https://drive.aiworkspace.pro";
          break;
        case "tasks":
          if (r)
            window.location.href = "https://tasks.aiworkspace.pro/all-workspace/tasks";
          else if (e) {
            const l = `https://tasks.aiworkspace.pro/single-workspace/${e.id}/tasks`;
            window.location.href = l;
          } else
            window.location.href = "https://tasks.aiworkspace.pro";
          break;
        case "phone":
          if (r)
            window.location.href = "https://phone.aiworkspace.pro/all-workspace/phone";
          else if (e) {
            const l = `https://phone.aiworkspace.pro/single-workspace/${e.id}/phone`;
            window.location.href = l;
          } else
            window.location.href = "https://phone.aiworkspace.pro";
          break;
        case "ai_fax":
          if (r)
            window.location.href = "https://fax.aiworkspace.pro/all-workspace/ai_fax";
          else if (e) {
            const l = `https://fax.aiworkspace.pro/single-workspace/${e.id}/ai_fax`;
            window.location.href = l;
          } else
            window.location.href = "https://fax.aiworkspace.pro";
          break;
        case "goals":
          if (r)
            window.location.href = "https://app.aiworkspace.pro/all-workspace/goals";
          else if (e) {
            const l = `https://app.aiworkspace.pro/single-workspace/${e.id}/goals`;
            window.location.href = l;
          } else
            window.location.href = "https://app.aiworkspace.pro/all-workspace/goals";
          break;
        case "events":
          if (r)
            window.location.href = "https://app.aiworkspace.pro/all-workspace/events";
          else if (e) {
            const l = `https://app.aiworkspace.pro/single-workspace/${e.id}/events`;
            window.location.href = l;
          } else
            window.location.href = "https://app.aiworkspace.pro/all-workspace/events";
          break;
        case "contacts":
          if (r)
            window.location.href = "https://app.aiworkspace.pro/all-workspace/contacts";
          else if (e) {
            const l = `https://app.aiworkspace.pro/single-workspace/${e.id}/contacts`;
            window.location.href = l;
          } else
            window.location.href = "https://app.aiworkspace.pro/all-workspace/contacts";
          break;
        case "ai-portfolios":
          if (r)
            window.location.href = "https://spreadsheet.aiworkspace.pro/all-workspace/ai-portfolios";
          else if (e) {
            const l = `https://spreadsheet.aiworkspace.pro/single-workspace/${e.id}/ai-portfolios`;
            window.location.href = l;
          } else
            window.location.href = "https://spreadsheet.aiworkspace.pro";
          break;
        case "settings":
          if (r)
            window.location.href = "https://settings.aiworkspace.pro/all-workspace/settings";
          else if (e) {
            const l = `https://settings.aiworkspace.pro/single-workspace/${e.id}/settings`;
            window.location.href = l;
          } else
            window.location.href = "https://settings.aiworkspace.pro";
          break;
        default:
          if (r) {
            const l = `https://app.aiworkspace.pro/all-workspace/${t.key}`;
            window.location.href = l;
          } else if (e) {
            const l = `https://app.aiworkspace.pro/single-workspace/${e.id}/${t.key}`;
            window.location.href = l;
          } else {
            const l = `https://app.aiworkspace.pro/${t.key}`;
            window.location.href = l;
          }
          break;
      }
    }, Co = (t) => {
      const e = se.value, r = oe.value;
      switch (t.key) {
        case "dashboard":
          return r ? "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard" : e ? `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e.id}/dashboard` : "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
        case "ai-portfolios":
          return r ? "https://spreadsheet.aiworkspace.pro/all-workspace/ai-portfolios" : e ? `https://spreadsheet.aiworkspace.pro/single-workspace/${e.id}/ai-portfolios` : "https://spreadsheet.aiworkspace.pro";
        case "outlines":
          return r ? "https://outline.aiworkspace.pro/all-workspace/outlines" : e ? `https://outline.aiworkspace.pro/single-workspace/${e.id}/outlines` : "https://outline.aiworkspace.pro";
        case "canvas":
          return r ? "https://canvas.aiworkspace.pro/all-workspace/canvas" : e ? `https://canvas.aiworkspace.pro/single-workspace/${e.id}/canvas` : "https://canvas.aiworkspace.pro";
        case "files":
          return r ? "https://drive.aiworkspace.pro/all-workspace/files" : e ? `https://drive.aiworkspace.pro/single-workspace/${e.id}/files` : "https://drive.aiworkspace.pro";
        case "tasks":
          return r ? "https://tasks.aiworkspace.pro/all-workspace/tasks" : e ? `https://tasks.aiworkspace.pro/single-workspace/${e.id}/tasks` : "https://tasks.aiworkspace.pro";
        case "phone":
          return r ? "https://phone.aiworkspace.pro/all-workspace/phone" : e ? `https://phone.aiworkspace.pro/single-workspace/${e.id}/phone` : "https://phone.aiworkspace.pro";
        case "ai_fax":
          return r ? "https://fax.aiworkspace.pro/all-workspace/ai_fax" : e ? `https://fax.aiworkspace.pro/single-workspace/${e.id}/ai_fax` : "https://fax.aiworkspace.pro";
        case "goals":
          return r ? "https://app.aiworkspace.pro/all-workspace/goals" : e ? `https://app.aiworkspace.pro/single-workspace/${e.id}/goals` : "https://app.aiworkspace.pro/all-workspace/goals";
        case "events":
          return r ? "https://app.aiworkspace.pro/all-workspace/events" : e ? `https://app.aiworkspace.pro/single-workspace/${e.id}/events` : "https://app.aiworkspace.pro/all-workspace/events";
        case "contacts":
          return r ? "https://app.aiworkspace.pro/all-workspace/contacts" : e ? `https://app.aiworkspace.pro/single-workspace/${e.id}/contacts` : "https://app.aiworkspace.pro/all-workspace/contacts";
        case "settings":
          return r ? "https://settings.aiworkspace.pro/all-workspace/settings" : e ? `https://settings.aiworkspace.pro/single-workspace/${e.id}/settings` : "https://settings.aiworkspace.pro";
        default:
          return r ? `https://app.aiworkspace.pro/all-workspace/${t.key}` : e ? `https://app.aiworkspace.pro/single-workspace/${e.id}/${t.key}` : `https://app.aiworkspace.pro/${t.key}`;
      }
    }, de = (t) => {
      switch (t) {
        case "profile":
          a.onProfileClick ? a.onProfileClick() : z.info("Profile settings coming soon");
          break;
        case "workspaces":
          m.value = !0;
          break;
        case "allworkspaces":
          window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
          break;
        case "worklogs":
          window.location.href = "https://worklog.aiworkspace.pro/worklogs";
          break;
        case "drms":
          window.location.href = "https://drms.aiworkspace.pro/dashboard";
          break;
        case "logout":
          Ao();
          break;
      }
    }, Ze = (t) => {
      var e;
      (e = p.value) == null || e.setCurrentWorkspace(t), m.value = !1, i("workspaceChange", t), z.success(`Switched to ${t.title}`);
    }, Eo = () => {
      uo.prompt("Enter workspace name:", "Create New Workspace", {
        confirmButtonText: "Create",
        cancelButtonText: "Cancel",
        inputPattern: /\S/,
        inputErrorMessage: "Workspace name cannot be empty"
      }).then(({ value: t }) => {
        var r;
        const e = {
          id: Date.now(),
          title: t,
          description: "New workspace",
          archived: !1,
          created_by: "",
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          latest_activity: (/* @__PURE__ */ new Date()).toISOString(),
          hasAccess: !0,
          accessType: "edit"
        };
        S.value.push(e), (r = p.value) == null || r.setWorkspaces(S.value), Ze(e), z.success(`Created workspace: ${t}`);
      }).catch(() => {
      });
    }, Ao = () => {
      uo.confirm(
        "Are you sure you want to sign out?",
        "Sign Out",
        {
          confirmButtonText: "Sign Out",
          cancelButtonText: "Cancel",
          type: "warning"
        }
      ).then(async () => {
        var t;
        (t = p.value) == null || t.clearData(), await k(), typeof window < "u" && window.dispatchEvent(new CustomEvent("session-logout-detected", {
          detail: { timestamp: /* @__PURE__ */ new Date(), source: "manual-logout" }
        })), i("logout"), z.success("Signed out successfully");
      }).catch(() => {
      });
    }, De = async () => {
      var t, e;
      if (g.value.user) {
        const r = g.value.user;
        O.value = {
          name: r.name || ((t = r.email) == null ? void 0 : t.split("@")[0]) || "User",
          email: r.email || "",
          avatar_url: r.avatar_url || null,
          initials: (r.name || ((e = r.email) == null ? void 0 : e.split("@")[0]) || "U").split(" ").map((l) => l[0]).join("").toUpperCase().substring(0, 2)
        }, a.showWorkspaceSelector && await Qe();
      }
    };
    le(() => g.value.user, (t) => {
      var e;
      t ? De() : (O.value = { name: "", email: "", avatar_url: null, initials: "" }, (e = p.value) == null || e.clearData());
    }), le(h, (t) => {
      t && ie.value && (console.log("[AIWorkspaceHeader] Session loss detected, showing modal"), w.value = !0);
    }), le(() => a.currentWorkspaceId, (t) => {
      var e;
      if (t && W.value.length) {
        const r = W.value.find((l) => l.id.toString() === t.toString());
        r && ((e = p.value) == null || e.setCurrentWorkspace(r));
      }
    }), be(async () => {
      ie.value && (await De(), await Se()), await Uo(), io(), $o();
    });
    const Io = async (t) => {
      console.log("Login successful:", t), R.value = !1, await De(), i("login"), z.success("Welcome back!");
    }, Lo = async () => {
      console.log("[AIWorkspaceHeader] Retrying session..."), await c() ? (w.value = !1, u(), z.success("Session restored successfully!")) : z.error("Failed to restore session. Please log in again.");
    }, Ho = () => {
      console.log("[AIWorkspaceHeader] Opening login modal from session loss"), w.value = !1, R.value = !0;
    }, Vo = () => {
      console.log("[AIWorkspaceHeader] Refreshing page due to session loss"), window.location.reload();
    }, Ro = () => {
      U.value = 0, C(), z.success("Manual Pinia retry initiated.");
    }, Uo = async () => {
      try {
        const t = await fetch("/version.json");
        if (t.ok) {
          const e = t.headers.get("content-type");
          if (e && e.includes("application/json"))
            try {
              const r = await t.json();
              console.log("Version data received:", r), G.value = r.shortCommitHash || "unknown", b.value = r.fullCommitHash || "unknown", console.log("✅ Loaded commit hash from version.json:", G.value);
              return;
            } catch {
              console.log("Failed to parse version.json, trying fallback methods...");
            }
        }
        console.log("🔄 version.json not available, trying automatic detection..."), await oo();
      } catch (t) {
        console.log("Error loading version.json, trying automatic detection...", t), await oo();
      }
    }, eo = async () => {
      try {
        let t = await to();
        if (t || (t = so()), t) {
          const e = await no(t);
          e && e !== b.value && (console.log("🔄 New commit detected:", b.value, "→", e), b.value !== "unknown" && !$.value && ($.value = !0, B.value = e));
        }
      } catch (t) {
        console.log("Error checking for new commits:", t);
      }
    }, oo = async () => {
      try {
        let t = await to();
        if (t || (t = so()), t) {
          const T = await no(t);
          if (T) {
            G.value = T.substring(0, 7), b.value = T, console.log("✅ Loaded commit hash from GitHub API:", G.value);
            return;
          }
        }
        const e = await xo();
        if (e && e.version) {
          G.value = e.version, b.value = e.version, console.log("✅ Loaded version from package.json:", G.value);
          return;
        }
        const r = await Do();
        if (r) {
          G.value = r, b.value = r, console.log("✅ Loaded version from build info:", G.value);
          return;
        }
        const l = Date.now().toString(36);
        G.value = l.substring(0, 7), b.value = l, console.log("✅ Using timestamp-based version:", G.value);
      } catch (t) {
        console.warn("❌ All automatic detection methods failed:", t), G.value = "unknown", b.value = "unknown";
      }
    }, so = () => {
      try {
        const t = window.location.hostname;
        if (t.includes("github.io")) {
          const e = t.split(".");
          if (e.length >= 3) {
            const r = e[0], l = window.location.pathname.split("/")[1] || "unknown";
            return console.log("✅ Detected GitHub Pages repo:", r, l), { owner: r, repo: l };
          }
        }
        return console.log("Could not detect repository from domain:", t), null;
      } catch (t) {
        return console.log("Error detecting repo from domain:", t), null;
      }
    }, to = async () => {
      try {
        const t = await fetch("/package.json");
        if (!t.ok)
          return console.log("package.json not found or not accessible"), null;
        const e = t.headers.get("content-type");
        if (!e || !e.includes("application/json"))
          return console.log("package.json returned non-JSON content (likely HTML), skipping GitHub API"), null;
        const r = await t.json();
        if (r.repository && r.repository.url) {
          const T = r.repository.url.match(/github\.com\/([^\/]+)\/([^\/]+)/);
          if (T)
            return console.log("✅ Found GitHub repo info:", T[1], T[2].replace(".git", "")), { owner: T[1], repo: T[2].replace(".git", "") };
        }
        return console.log("No valid GitHub repository found in package.json"), null;
      } catch (t) {
        return console.log("Could not get repo info from package.json:", t), null;
      }
    }, ao = E(0), Me = E(0), ro = E(Date.now()), To = () => {
      const t = Date.now();
      t - ro.value > 60 * 60 * 1e3 && (Me.value = 0, ro.value = t, console.log("🔄 GitHub API call counter reset"));
    }, Po = async () => {
      try {
        const e = await Ke();
        if (e)
          return console.log("✅ Using GitHub token from database"), e;
      } catch (e) {
        console.warn("Failed to get token from database:", e);
      }
      if ({ VITE_SUPABASE_URL: void 0, VITE_SUPABASE_ANON_KEY: void 0, BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_GITHUB_TOKEN)
        return console.log("✅ Using GitHub token from environment"), {}.VITE_GITHUB_TOKEN;
      const t = localStorage.getItem("github_token");
      return t ? (console.log("✅ Using GitHub token from localStorage"), t) : (console.warn("❌ No GitHub token found in any source"), null);
    }, no = async (t) => {
      var e;
      try {
        const r = Date.now();
        if (To(), r - ao.value < $t)
          return console.log("⏳ GitHub API rate limit: waiting before next call"), null;
        if (Me.value >= Wt)
          return console.log("🚫 GitHub API hourly limit reached, skipping call"), null;
        const l = await Po(), T = {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "AIWorkspace-Header/1.0"
        };
        l ? (T.Authorization = `Bearer ${l}`, console.log("🔑 Using GitHub token for authentication"), console.log("Token preview:", l.substring(0, 8) + "..." + l.substring(l.length - 4)), console.log("Token length:", l.length), console.log("Authorization header:", `Bearer ${l.substring(0, 8)}...`)) : console.log("⚠️ No GitHub token found, trying unauthenticated request");
        const Y = ["main", "master"];
        for (const ae of Y)
          try {
            const te = await fetch(`https://api.github.com/repos/${t.owner}/${t.repo}/commits/${ae}`, {
              headers: T
            });
            if (ao.value = r, Me.value++, te.ok) {
              const Ee = await te.json();
              return console.log("✅ GitHub API call successful:", Ee.sha.substring(0, 7)), Ee.sha;
            } else if (te.status === 403) {
              if ((e = (await te.json()).message) != null && e.includes("rate limit"))
                return console.log("🚫 GitHub API rate limit exceeded, will retry later"), null;
            } else {
              if (te.status === 404)
                return console.log("🚫 Repository not found or private (404). Consider adding a GitHub token."), null;
              if (te.status === 401)
                return console.log("🚫 Unauthorized (401). GitHub token may be invalid or expired."), null;
            }
          } catch (te) {
            console.log(`Failed to get commit from ${ae} branch:`, te);
          }
      } catch (r) {
        console.log("Could not get commit from GitHub API:", r);
      }
      return null;
    }, xo = async () => {
      try {
        const t = await fetch("/package.json");
        if (!t.ok)
          return console.log("package.json not found or not accessible"), null;
        const e = t.headers.get("content-type");
        return !e || !e.includes("application/json") ? (console.log("package.json returned non-JSON content (likely HTML), skipping"), null) : await t.json();
      } catch (t) {
        console.log("Could not get package.json:", t);
      }
      return null;
    }, Do = async () => {
      try {
        const t = ["/build-manifest.json", "/build-info.json", "/.next/build-manifest.json"];
        for (const e of t)
          try {
            const r = await fetch(e);
            if (r.ok) {
              const l = await r.json();
              if (l.version || l.commitHash || l.buildId)
                return l.version || l.commitHash || l.buildId;
            }
          } catch {
          }
      } catch (t) {
        console.log("Could not get build info:", t);
      }
      return null;
    }, Mo = async () => {
      try {
        if (b.value === "unknown") {
          z.warning("Version information not available");
          return;
        }
        await navigator.clipboard.writeText(b.value), z.success("Version information copied to clipboard!");
      } catch (t) {
        console.error("Failed to copy version info:", t), z.error("Failed to copy version info");
      }
    }, io = async () => {
      if (!N.value) {
        N.value = !0;
        try {
          const t = Date.now(), e = await fetch(`/version.json?t=${t}`);
          if (!e.ok)
            throw new Error("Failed to fetch version info");
          const r = e.headers.get("content-type");
          if (!r || !r.includes("application/json")) {
            console.warn("Version check skipped: version.json not properly configured");
            return;
          }
          const l = await e.json();
          B.value = l.fullCommitHash, b.value !== B.value && ($.value || ($.value = !0, console.log("Version mismatch detected:", {
            currentVersion: b.value,
            latestVersion: B.value,
            serverBuildTime: l.buildTime
          })));
        } catch (t) {
          console.error("Error checking for updates:", t);
        } finally {
          N.value = !1;
        }
      }
    }, $o = () => {
      H.value = setInterval(() => {
        io(), eo();
      }, 5 * 60 * 1e3);
    }, Wo = () => {
      console.log("User reloaded for update:", {
        currentVersion: b.value,
        latestVersion: B.value
      }), window.location.reload();
    }, lo = () => {
      $.value = !1, console.log("Update alert dismissed:", {
        currentVersion: b.value,
        latestVersion: B.value
      });
    };
    return go(() => {
      H.value && clearInterval(H.value);
    }), (t, e) => {
      const r = ee("el-icon"), l = ee("el-button"), T = ee("el-tag"), Y = ee("el-dropdown-item"), ae = ee("el-dropdown-menu"), te = ee("el-dropdown"), Ee = ee("el-dialog"), No = ee("el-alert");
      return _(), P(Le, null, [
        n("header", Ws, [
          !V.value && U.value < Ae || M(L) ? (_(), P("div", Ns, [
            e[13] || (e[13] = He('<div class="header-left" data-v-d2716831><div class="logo-section" data-v-d2716831><a href="/" class="logo" data-v-d2716831><div class="text-logo" data-v-d2716831><span class="logo-text" data-v-d2716831>AI Workspace</span></div></a></div></div>', 1)),
            n("div", Gs, [
              n("span", Os, [
                M(L) ? (_(), P("span", Bs, "Syncing authentication...")) : (_(), P("span", Fs, "Initializing..."))
              ])
            ])
          ])) : !V.value && U.value >= Ae ? (_(), P("div", js, [
            e[15] || (e[15] = He('<div class="header-left" data-v-d2716831><div class="logo-section" data-v-d2716831><a href="/" class="logo" data-v-d2716831><div class="text-logo" data-v-d2716831><span class="logo-text" data-v-d2716831>AI Workspace</span></div></a></div></div>', 1)),
            n("div", { class: "header-center" }, [
              e[14] || (e[14] = n("span", { class: "fallback-text" }, "Header Ready (Fallback Mode)", -1)),
              n("button", {
                onClick: Ro,
                class: "retry-button"
              }, "Retry Pinia")
            ]),
            e[16] || (e[16] = He('<div class="header-right" data-v-d2716831><div class="user-profile" data-v-d2716831><div class="user-info" data-v-d2716831><span class="user-name" data-v-d2716831>User</span></div><div class="user-avatar" data-v-d2716831><span class="avatar-placeholder" data-v-d2716831>U</span></div></div></div>', 1))
          ])) : ie.value && !M(A) ? (_(), P("div", zs, [
            e[19] || (e[19] = He('<div class="header-left" data-v-d2716831><div class="logo-section" data-v-d2716831><a href="/" class="logo" data-v-d2716831><div class="text-logo" data-v-d2716831><span class="logo-text" data-v-d2716831>AI Workspace</span></div></a></div></div>', 1)),
            n("div", Ks, [
              n("span", Ys, [
                v(r, null, {
                  default: f(() => [
                    v(M(ho))
                  ]),
                  _: 1
                }),
                e[17] || (e[17] = J(" Session expired - Please log in again ", -1))
              ])
            ]),
            n("div", qs, [
              v(l, {
                type: "primary",
                onClick: e[0] || (e[0] = (I) => R.value = !0)
              }, {
                default: f(() => [
                  v(r, null, {
                    default: f(() => [
                      v(M(Fe))
                    ]),
                    _: 1
                  }),
                  e[18] || (e[18] = J(" Log In ", -1))
                ]),
                _: 1
              })
            ])
          ])) : ie.value && M(A) ? (_(), P("div", Js, [
            n("div", Xs, [
              n("div", Qs, [
                n("a", Zs, [
                  o.customLogo ? (_(), P("img", {
                    key: 0,
                    src: o.customLogo,
                    alt: "AIWorkspace",
                    class: "logo-image"
                  }, null, 8, et)) : (_(), P("div", ot, [...e[20] || (e[20] = [
                    n("span", { class: "logo-text" }, "AI Workspace", -1)
                  ])]))
                ])
              ])
            ]),
            o.showSecondaryNavigation ? (_(), P("div", st, [
              n("nav", tt, [
                Ce.value ? (_(), X(te, {
                  key: 0,
                  onCommand: bo,
                  trigger: "hover"
                }, {
                  dropdown: f(() => [
                    v(ae, { class: "workspace-tree-dropdown" }, {
                      default: f(() => [
                        v(Y, {
                          command: "all-workspace",
                          class: $e({ active: oe.value })
                        }, {
                          default: f(() => [
                            n("a", rt, [
                              n("div", nt, [
                                e[22] || (e[22] = n("span", { class: "workspace-icon" }, "🌐", -1)),
                                e[23] || (e[23] = n("span", null, "All workspace", -1)),
                                oe.value ? (_(), X(T, {
                                  key: 0,
                                  size: "small",
                                  type: "success"
                                }, {
                                  default: f(() => [...e[21] || (e[21] = [
                                    J("Current", -1)
                                  ])]),
                                  _: 1
                                })) : F("", !0)
                              ])
                            ])
                          ]),
                          _: 1
                        }, 8, ["class"]),
                        W.value.length > 0 ? (_(), X(Y, {
                          key: 0,
                          divided: "",
                          disabled: ""
                        })) : F("", !0),
                        (_(!0), P(Le, null, We(W.value, (I) => (_(), X(Y, {
                          key: I.id,
                          command: `workspace-${I.id}`
                        }, {
                          default: f(() => {
                            var he;
                            return [
                              n("a", {
                                href: `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${I.id}/dashboard`,
                                class: "nav-link"
                              }, [
                                n("div", {
                                  class: "workspace-dropdown-item",
                                  style: Fo({ paddingLeft: (I.level || 0) * 16 + "px" })
                                }, [
                                  n("span", lt, q(I.children && I.children.length ? "📁" : "📄"), 1),
                                  n("span", null, q(I.title), 1),
                                  I.id === ((he = se.value) == null ? void 0 : he.id) ? (_(), X(T, {
                                    key: 0,
                                    size: "small",
                                    type: "success"
                                  }, {
                                    default: f(() => [...e[24] || (e[24] = [
                                      J("Current", -1)
                                    ])]),
                                    _: 1
                                  })) : F("", !0)
                                ], 4)
                              ], 8, it)
                            ];
                          }),
                          _: 2
                        }, 1032, ["command"]))), 128)),
                        W.value.length === 0 ? (_(), X(Y, {
                          key: 1,
                          disabled: ""
                        }, {
                          default: f(() => [...e[25] || (e[25] = [
                            J(" No workspaces ", -1)
                          ])]),
                          _: 1
                        })) : F("", !0)
                      ]),
                      _: 1
                    })
                  ]),
                  default: f(() => {
                    var I;
                    return [
                      n("span", at, [
                        J(q(oe.value ? "All workspace" : ((I = se.value) == null ? void 0 : I.title) || "Select Workspace") + " ", 1),
                        v(r, { class: "nav-arrow" }, {
                          default: f(() => [
                            v(M(po))
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }),
                  _: 1
                })) : F("", !0),
                Ce.value ? (_(), P("span", ct, "/")) : F("", !0),
                Ce.value ? (_(), X(te, {
                  key: 2,
                  trigger: "hover"
                }, {
                  dropdown: f(() => [
                    v(ae, null, {
                      default: f(() => [
                        (_(!0), P(Le, null, We(qe.value, (I) => (_(), X(Y, {
                          key: I.label,
                          class: $e({ active: I.active })
                        }, {
                          default: f(() => [
                            n("a", {
                              href: Co(I),
                              class: "nav-link",
                              onClick: re((he) => So(I), ["prevent"])
                            }, q(I.label), 9, dt)
                          ]),
                          _: 2
                        }, 1032, ["class"]))), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  default: f(() => [
                    n("span", ut, [
                      J(q(_o.value) + " ", 1),
                      v(r, { class: "nav-arrow" }, {
                        default: f(() => [
                          v(M(po))
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })) : F("", !0)
              ]),
              !Ce.value && Ie.value ? (_(), P("div", pt, [...e[26] || (e[26] = [
                n("h1", null, "Team Worklogs", -1),
                n("p", null, "View all team member work entries and progress updates", -1)
              ])])) : F("", !0),
              !Ce.value && Je.value ? (_(), P("div", ft, [...e[27] || (e[27] = [
                n("h1", null, "Direct Reportee Management System", -1),
                n("p", null, "Manage your direct reportees tasks and progress", -1)
              ])])) : F("", !0)
            ])) : F("", !0),
            n("div", gt, [
              v(te, {
                onCommand: de,
                trigger: "click",
                placement: "bottom-end"
              }, {
                dropdown: f(() => [
                  v(ae, null, {
                    default: f(() => [
                      v(Y, null, {
                        default: f(() => [
                          n("a", {
                            href: "/profile",
                            class: "nav-link",
                            onClick: e[1] || (e[1] = re((I) => de("profile"), ["prevent"]))
                          }, "Profile Settings")
                        ]),
                        _: 1
                      }),
                      o.showWorkspaceSelector ? (_(), X(Y, { key: 0 }, {
                        default: f(() => [
                          n("a", {
                            href: "#switch-workspace",
                            class: "nav-link",
                            onClick: e[2] || (e[2] = re((I) => de("workspaces"), ["prevent"]))
                          }, "Switch Workspace")
                        ]),
                        _: 1
                      })) : F("", !0),
                      Ie.value ? F("", !0) : (_(), X(Y, { key: 1 }, {
                        default: f(() => [
                          n("a", {
                            href: "https://worklog.aiworkspace.pro/worklogs",
                            class: "nav-link",
                            onClick: e[3] || (e[3] = re((I) => de("worklogs"), ["prevent"]))
                          }, "Worklogs")
                        ]),
                        _: 1
                      })),
                      v(Y, null, {
                        default: f(() => [
                          n("a", {
                            href: "https://drms.aiworkspace.pro/dashboard",
                            class: "nav-link",
                            onClick: e[4] || (e[4] = re((I) => de("drms"), ["prevent"]))
                          }, "Direct Reportee")
                        ]),
                        _: 1
                      }),
                      Ie.value ? (_(), X(Y, { key: 2 }, {
                        default: f(() => [
                          n("a", {
                            href: "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard",
                            class: "nav-link",
                            onClick: e[5] || (e[5] = re((I) => de("allworkspaces"), ["prevent"]))
                          }, "All workspaces")
                        ]),
                        _: 1
                      })) : F("", !0),
                      v(Y, {
                        onClick: Mo,
                        class: "version-item"
                      }, {
                        default: f(() => [
                          n("div", yt, [
                            e[28] || (e[28] = n("span", { class: "version-label" }, "Version:", -1)),
                            n("span", bt, q(G.value), 1),
                            v(l, {
                              size: "small",
                              type: "text",
                              onClick: re(eo, ["stop"]),
                              class: "refresh-button",
                              loading: N.value
                            }, {
                              default: f(() => [
                                v(r, null, {
                                  default: f(() => [
                                    v(M(Be))
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }, 8, ["loading"])
                          ])
                        ]),
                        _: 1
                      }),
                      v(Y, { divided: "" }, {
                        default: f(() => [
                          n("a", {
                            href: "#signout",
                            class: "nav-link",
                            onClick: e[6] || (e[6] = re((I) => de("logout"), ["prevent"]))
                          }, "Sign Out")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                default: f(() => [
                  n("div", ht, [
                    n("div", wt, [
                      n("span", vt, q(O.value.name), 1)
                    ]),
                    n("div", mt, [
                      O.value.avatar_url ? (_(), P("img", {
                        key: 0,
                        src: O.value.avatar_url,
                        alt: O.value.name
                      }, null, 8, kt)) : (_(), P("span", _t, q(O.value.initials), 1))
                    ])
                  ])
                ]),
                _: 1
              })
            ])
          ])) : (_(), P("div", St, [
            n("div", Ct, [
              n("div", Et, [
                n("a", At, [
                  o.customLogo ? (_(), P("img", {
                    key: 0,
                    src: o.customLogo,
                    alt: "AIWorkspace",
                    class: "logo-image"
                  }, null, 8, It)) : (_(), P("div", Lt, [...e[29] || (e[29] = [
                    n("span", { class: "logo-text" }, "AI Workspace", -1)
                  ])]))
                ])
              ])
            ]),
            e[31] || (e[31] = n("div", { class: "header-center" }, [
              n("span", { class: "welcome-text" }, "Welcome to AI Workspace")
            ], -1)),
            ge.value ? F("", !0) : (_(), P("div", Ht, [
              v(l, {
                type: "primary",
                size: "large",
                class: "login-button",
                onClick: e[7] || (e[7] = (I) => R.value = !0)
              }, {
                default: f(() => [
                  v(r, null, {
                    default: f(() => [
                      v(M(Fe))
                    ]),
                    _: 1
                  }),
                  e[30] || (e[30] = J(" Login / Signup ", -1))
                ]),
                _: 1
              })
            ]))
          ])),
          ie.value && o.showWorkspaceSelector ? (_(), X(Ee, {
            key: 5,
            modelValue: m.value,
            "onUpdate:modelValue": e[9] || (e[9] = (I) => m.value = I),
            title: "Switch Workspace",
            width: "500px",
            onClose: e[10] || (e[10] = (I) => m.value = !1)
          }, {
            footer: f(() => [
              v(l, {
                onClick: e[8] || (e[8] = (I) => m.value = !1)
              }, {
                default: f(() => [...e[32] || (e[32] = [
                  J("Cancel", -1)
                ])]),
                _: 1
              }),
              v(l, {
                type: "primary",
                onClick: Eo
              }, {
                default: f(() => [...e[33] || (e[33] = [
                  J("Create New Workspace", -1)
                ])]),
                _: 1
              })
            ]),
            default: f(() => [
              n("div", Vt, [
                (_(!0), P(Le, null, We(S.value, (I) => {
                  var he, co;
                  return _(), P("div", {
                    key: I.id,
                    class: $e(["workspace-item", { active: I.id === ((he = se.value) == null ? void 0 : he.id) }]),
                    onClick: (zt) => Ze(I)
                  }, [
                    n("div", Ut, q(I.children && I.children.length ? "📁" : "📄"), 1),
                    n("div", Tt, [
                      n("h3", null, q(I.title), 1),
                      n("p", null, q(I.description), 1),
                      n("span", Pt, q(I.hasAccess ? "Active" : "Inactive"), 1)
                    ]),
                    I.id === ((co = se.value) == null ? void 0 : co.id) ? (_(), P("div", xt, [
                      v(r, null, {
                        default: f(() => [
                          v(M(es))
                        ]),
                        _: 1
                      })
                    ])) : F("", !0)
                  ], 10, Rt);
                }), 128))
              ])
            ]),
            _: 1
          }, 8, ["modelValue"])) : F("", !0),
          v(Es, {
            modelValue: R.value,
            "onUpdate:modelValue": e[11] || (e[11] = (I) => R.value = I),
            onLoginSuccess: Io
          }, null, 8, ["modelValue"]),
          v($s, {
            modelValue: w.value,
            "onUpdate:modelValue": e[12] || (e[12] = (I) => w.value = I),
            "session-loss-event": M(D),
            "can-retry-session": M(d) || !1,
            onRetry: Lo,
            onLogin: Ho,
            onRefresh: Vo
          }, null, 8, ["modelValue", "session-loss-event", "can-retry-session"])
        ]),
        $.value ? (_(), X(No, {
          key: 0,
          title: "New Version Available!",
          type: "warning",
          closable: !0,
          onClose: lo,
          "show-icon": "",
          class: "update-alert"
        }, {
          default: f(() => [
            n("div", Dt, [
              e[36] || (e[36] = n("p", null, "A new version of the application is available. Please reload to get the latest updates and features.", -1)),
              n("div", Mt, [
                v(l, {
                  type: "primary",
                  size: "small",
                  onClick: Wo
                }, {
                  default: f(() => [...e[34] || (e[34] = [
                    J(" Reload Now ", -1)
                  ])]),
                  _: 1
                }),
                v(l, {
                  size: "small",
                  onClick: lo
                }, {
                  default: f(() => [...e[35] || (e[35] = [
                    J(" Dismiss ", -1)
                  ])]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        })) : F("", !0)
      ], 64);
    };
  }
});
const ha = /* @__PURE__ */ Te(Nt, [["__scopeId", "data-v-d2716831"]]), Gt = { class: "auth-callback" }, Ot = /* @__PURE__ */ ne({
  __name: "AuthCallback",
  setup(o) {
    be(async () => {
      console.log("[AuthCallback] Component mounted, starting callback processing..."), console.log("[AuthCallback] Current URL:", window.location.href), console.log("[AuthCallback] Current hash:", window.location.hash);
      try {
        await new Promise((g) => setTimeout(g, 500));
        const { data: a, error: i } = await Re.auth.getSession();
        if (i) {
          console.error("Error processing callback:", i), s();
          return;
        }
        if (a != null && a.session) {
          const g = a.session.user;
          console.log("OAuth login successful:", g.email), a.session.access_token && _e(me, a.session.access_token), a.session.refresh_token && _e(ke, a.session.refresh_token), Oe();
          const k = Jo();
          console.log("[callback] Post-login redirect URL:", k), console.log("[callback] Session storage redirect:", sessionStorage.getItem("post-login-redirect")), console.log("[callback] Local storage redirect:", localStorage.getItem("post-login-redirect"));
          const L = k || "/";
          if (console.log("[callback] Final redirect URL:", L), L.startsWith("/")) {
            const A = window.location.origin, D = `${A}${L}`;
            console.log("[callback] redirecting to:", D, { hostname: window.location.hostname, origin: A }), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
              window.location.href = D;
            }, 100);
          } else
            console.log("[callback] redirecting to absolute URL:", L), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
              window.location.href = L;
            }, 100);
        } else
          s();
      } catch (a) {
        console.error("Error processing callback:", a), s();
      }
    });
    const s = () => {
      const i = window.location.href.replace("/auth/callback", "");
      window.location.href = i;
    };
    return (a, i) => (_(), P("div", Gt, [...i[0] || (i[0] = [
      n("div", { class: "callback-container" }, [
        n("div", { class: "loading-spinner" }, [
          n("div", { class: "spinner" })
        ]),
        n("h2", null, "Processing login..."),
        n("p", null, "Please wait while we complete your authentication.")
      ], -1)
    ])]));
  }
});
const wa = /* @__PURE__ */ Te(Ot, [["__scopeId", "data-v-acdf6325"]]), pe = class pe {
  constructor() {
    we(this, "validationCache", /* @__PURE__ */ new Map());
    we(this, "CACHE_DURATION", mo().validationCacheDuration);
  }
  // Helper function to get cookie value
  getCookieValue(s) {
    var g;
    if (typeof document > "u")
      return null;
    const i = `; ${document.cookie}`.split(`; ${s}=`);
    return i.length === 2 && ((g = i.pop()) == null ? void 0 : g.split(";").shift()) || null;
  }
  static getInstance() {
    return pe.instance || (pe.instance = new pe()), pe.instance;
  }
  /**
   * Validate current session with caching and improved reliability
   */
  async validateSession(s = !1) {
    var i, g;
    const a = "session_validation";
    if (!s) {
      const k = this.validationCache.get(a);
      if (k && Date.now() - k.timestamp < this.CACHE_DURATION)
        return console.log("[SessionValidator] Using cached validation result"), k.result;
    }
    console.log("[SessionValidator] Validating session...");
    try {
      const k = this.getCookieValue("sb-access-token"), L = this.getCookieValue("sb-refresh-token");
      if (!k || !L) {
        const y = {
          isValid: !1,
          needsLogin: !0,
          error: "No authentication tokens found",
          canRetry: !1
        };
        return this.cacheResult(a, y), y;
      }
      const A = await Q();
      let D = null, h = null;
      for (let y = 1; y <= 2; y++)
        try {
          const p = await A.auth.getSession();
          D = p.data.session, h = p.error;
          break;
        } catch (p) {
          if (console.warn(`[SessionValidator] Network error on attempt ${y}:`, p), y === 2) {
            const V = {
              isValid: !1,
              needsLogin: !1,
              // Don't force login on network issues
              error: "Network error during validation",
              canRetry: !0
            };
            return this.cacheResult(a, V), V;
          }
          await new Promise((V) => setTimeout(V, 1e3));
        }
      if (h) {
        console.warn("[SessionValidator] Error getting session:", h);
        const p = {
          isValid: !1,
          needsLogin: ((i = h.message) == null ? void 0 : i.includes("Invalid JWT")) || ((g = h.message) == null ? void 0 : g.includes("JWT expired")),
          error: `Session error: ${h.message}`,
          canRetry: !0
        };
        return this.cacheResult(a, p), p;
      }
      if (!D || !D.user) {
        const y = {
          isValid: !1,
          needsLogin: !0,
          error: "No valid session found",
          canRetry: !0
        };
        return this.cacheResult(a, y), y;
      }
      const d = /* @__PURE__ */ new Date(), c = new Date(D.expires_at * 1e3), u = 5 * 60 * 1e3;
      if (d >= new Date(c.getTime() - u)) {
        const y = {
          isValid: !1,
          needsLogin: !0,
          error: "Session is close to expiry or expired",
          canRetry: !0
        };
        return this.cacheResult(a, y), y;
      }
      const x = {
        isValid: !0,
        needsLogin: !1,
        canRetry: !1
      };
      return this.cacheResult(a, x), x;
    } catch (k) {
      console.error("[SessionValidator] Error validating session:", k);
      const L = {
        isValid: !1,
        needsLogin: !1,
        // Don't force login on unexpected errors
        error: `Validation error: ${k}`,
        canRetry: !0
      };
      return this.cacheResult(a, L), L;
    }
  }
  /**
   * Attempt to restore session from tokens
   */
  async restoreSession() {
    console.log("[SessionValidator] Attempting to restore session...");
    try {
      const s = this.getCookieValue("sb-access-token"), a = this.getCookieValue("sb-refresh-token");
      if (!s || !a)
        return {
          isValid: !1,
          needsLogin: !0,
          error: "No tokens available for restoration",
          canRetry: !1
        };
      const i = await Q(), { data: g, error: k } = await i.auth.setSession({
        access_token: s,
        refresh_token: a
      });
      return k ? (console.warn("[SessionValidator] Error restoring session:", k), {
        isValid: !1,
        needsLogin: !0,
        error: `Restoration error: ${k.message}`,
        canRetry: !0
      }) : g.session && g.session.user ? (console.log("[SessionValidator] Session restored successfully"), this.clearCache(), {
        isValid: !0,
        needsLogin: !1,
        canRetry: !1
      }) : {
        isValid: !1,
        needsLogin: !0,
        error: "Session restoration failed",
        canRetry: !0
      };
    } catch (s) {
      return console.error("[SessionValidator] Error restoring session:", s), {
        isValid: !1,
        needsLogin: !0,
        error: `Restoration error: ${s}`,
        canRetry: !0
      };
    }
  }
  /**
   * Clear validation cache
   */
  clearCache() {
    this.validationCache.clear(), console.log("[SessionValidator] Cache cleared");
  }
  /**
   * Cache validation result
   */
  cacheResult(s, a) {
    this.validationCache.set(s, {
      result: a,
      timestamp: Date.now()
    });
  }
  /**
   * Get cached validation result
   */
  getCachedResult() {
    const s = this.validationCache.get("session_validation");
    return s && Date.now() - s.timestamp < this.CACHE_DURATION ? s.result : null;
  }
};
we(pe, "instance");
let ze = pe;
const Ye = ze.getInstance(), Bt = (o = !1) => Ye.validateSession(o), Ft = () => Ye.restoreSession(), jt = () => Ye.clearCache();
async function va() {
  console.log("[SessionValidator] Initializing session validation...");
  let o = await Bt();
  return !o.isValid && o.canRetry && (console.log("[SessionValidator] Attempting session restoration..."), o = await Ft()), o;
}
function ma() {
  if (typeof window > "u")
    return () => {
    };
  const o = () => {
    console.log("[SessionValidator] Network restored, clearing cache for revalidation"), jt();
  }, s = () => {
    console.log("[SessionValidator] Network lost, session validation may fail");
  };
  return window.addEventListener("online", o), window.addEventListener("offline", s), () => {
    window.removeEventListener("online", o), window.removeEventListener("offline", s);
  };
}
export {
  me as ACCESS_COOKIE,
  ha as AIWorkspaceHeader,
  wa as AuthCallback,
  Ia as LS_ACCESS_KEY,
  La as LS_REFRESH_KEY,
  Es as LoginModal,
  Ue as PackageError,
  ke as REFRESH_COOKIE,
  $s as SessionLossModal,
  ze as SessionValidator,
  Ha as buildOAuthRedirectUrl,
  vs as clearGitHubTokenCache,
  Ge as clearLocalStorageTokens,
  jt as clearSessionCache,
  ve as clearSessionCookie,
  da as configureGitHub,
  ya as configureSupabase,
  ds as conservativeConfig,
  ia as createSessionConfig,
  ga as debugDatabaseConnection,
  ha as default,
  fe as defaultSessionConfig,
  ua as detectionScenarios,
  wo as developmentConfig,
  Va as ensureCrossSubdomainCookies,
  us as fastDetectionConfig,
  la as getConfigByPreset,
  Ra as getCookie,
  Ke as getGitHubToken,
  Jo as getPostLoginBase,
  mo as getSessionConfig,
  Q as getSupabase,
  is as handleBundlingError,
  ba as handleDomainChangeAuth,
  Yo as initializeCrossSubdomainAuth,
  va as initializeSessionValidation,
  pa as isGitHubConfigured,
  vo as productionConfig,
  fa as refreshGitHubToken,
  Sa as restoreCrossSubdomainSession,
  Ft as restoreSession,
  qo as restoreSessionWithRetry,
  Zt as safeExecute,
  ea as safeExecuteAsync,
  sa as safeGetCookie,
  aa as safeGetLocalStorage,
  oa as safeImport,
  ta as safeSetCookie,
  ra as safeSetLocalStorage,
  na as safeWindowOperation,
  ps as sessionConfigPresets,
  Ye as sessionValidator,
  _e as setSessionCookie,
  Ca as setupAuthStateListener,
  ls as setupGlobalErrorHandler,
  Ea as setupImmediateCrossSubdomainAuth,
  ma as setupNetworkAwareValidation,
  Ta as setupUniversalCallback,
  Re as supabase,
  Oe as syncCookiesToLocalStorage,
  ca as timingInfo,
  ms as useAuth,
  cs as useEnhancedAuth,
  fs as useSessionMonitor,
  gs as useWorkspaceStore,
  Bt as validateSession
};
