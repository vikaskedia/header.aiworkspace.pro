var Ws = Object.defineProperty;
var Ds = (t, s, a) => s in t ? Ws(t, s, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[s] = a;
var me = (t, s, a) => (Ds(t, typeof s != "symbol" ? s + "" : s, a), a);
import { defineComponent as ue, openBlock as y, createElementBlock as T, createElementVNode as i, ref as A, computed as q, onMounted as be, onUnmounted as cs, watch as pe, reactive as xs, resolveComponent as ie, createBlock as oe, withCtx as d, toDisplayString as K, createVNode as h, unref as D, withModifiers as ge, createCommentVNode as X, createTextVNode as J, Fragment as Ie, createStaticVNode as Le, normalizeClass as $e, renderList as Te, normalizeStyle as Hs } from "vue";
import { ElForm as Os, ElMessage as z, ElDialog as Bs, ElIcon as Ue, ElButton as We, ElProgress as Fs, ElMessageBox as ns } from "element-plus";
import { i as Gs, g as ae, r as De, s as Pe } from "./supabase-510327ca.mjs";
import { c as ft, h as gt, b as ht, d as vt, a as wt } from "./supabase-510327ca.mjs";
import { clearSessionCookie as ke, ACCESS_COOKIE as _e, REFRESH_COOKIE as ye, clearLocalStorageTokens as xe, setSessionCookie as Se, syncCookiesToLocalStorage as He, getPostLoginBase as js } from "./utils/authRedirect.js";
import { LS_ACCESS_KEY as kt, LS_REFRESH_KEY as _t, buildOAuthRedirectUrl as yt, ensureCrossSubdomainCookies as St, getCookie as bt } from "./utils/authRedirect.js";
import { defineStore as zs } from "pinia";
import { setupUniversalCallback as Et } from "./utils/universalCallback.js";
/*! Element Plus Icons Vue v2.3.2 */
var Ks = /* @__PURE__ */ ue({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(t) {
    return (s, a) => (y(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"
      })
    ]));
  }
}), is = Ks, Ys = /* @__PURE__ */ ue({
  name: "Check",
  __name: "check",
  setup(t) {
    return (s, a) => (y(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      })
    ]));
  }
}), Js = Ys, Xs = /* @__PURE__ */ ue({
  name: "Lock",
  __name: "lock",
  setup(t) {
    return (s, a) => (y(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96"
      }),
      i("path", {
        fill: "currentColor",
        d: "M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32m192-160v-64a192 192 0 1 0-384 0v64zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64"
      })
    ]));
  }
}), ls = Xs, qs = /* @__PURE__ */ ue({
  name: "Message",
  __name: "message",
  setup(t) {
    return (s, a) => (y(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64"
      }),
      i("path", {
        fill: "currentColor",
        d: "M904 224 656.512 506.88a192 192 0 0 1-289.024 0L120 224zm-698.944 0 210.56 240.704a128 128 0 0 0 192.704 0L818.944 224z"
      })
    ]));
  }
}), Qs = qs, Zs = /* @__PURE__ */ ue({
  name: "Refresh",
  __name: "refresh",
  setup(t) {
    return (s, a) => (y(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), Oe = Zs, eo = /* @__PURE__ */ ue({
  name: "User",
  __name: "user",
  setup(t) {
    return (s, a) => (y(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"
      })
    ]));
  }
}), Be = eo, so = /* @__PURE__ */ ue({
  name: "Warning",
  __name: "warning",
  setup(t) {
    return (s, a) => (y(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"
      })
    ]));
  }
}), us = so;
class Ve extends Error {
  constructor(a, n = {}, w) {
    super(a);
    me(this, "context");
    me(this, "originalError");
    this.name = "PackageError", this.context = n, this.originalError = w;
  }
}
function ja(t, s = {}, a) {
  try {
    const n = t();
    return n instanceof Promise ? n.catch((w) => {
      if (console.warn("[ErrorHandler] Async operation failed:", {
        context: s,
        error: w.message,
        stack: w.stack
      }), a !== void 0)
        return a;
      throw new Ve(
        `Async operation failed: ${w.message}`,
        s,
        w
      );
    }) : n;
  } catch (n) {
    if (console.warn("[ErrorHandler] Operation failed:", {
      context: s,
      error: n instanceof Error ? n.message : String(n),
      stack: n instanceof Error ? n.stack : void 0
    }), a !== void 0)
      return a;
    throw new Ve(
      `Operation failed: ${n instanceof Error ? n.message : String(n)}`,
      s,
      n instanceof Error ? n : void 0
    );
  }
}
async function za(t, s = {}, a) {
  try {
    return await t();
  } catch (n) {
    if (console.warn("[ErrorHandler] Async operation failed:", {
      context: s,
      error: n instanceof Error ? n.message : String(n),
      stack: n instanceof Error ? n.stack : void 0
    }), a !== void 0)
      return a;
    throw new Ve(
      `Async operation failed: ${n instanceof Error ? n.message : String(n)}`,
      s,
      n instanceof Error ? n : void 0
    );
  }
}
function oo(t, s = {}) {
  const a = t.message.toLowerCase();
  if (a.includes("is not a function") || a.includes("cannot read property") || a.includes("undefined is not a function")) {
    console.warn("[ErrorHandler] Bundling error detected:", {
      context: s,
      error: t.message,
      suggestion: "This may be due to minification or import issues. The package will continue with fallback behavior."
    });
    return;
  }
  throw new Ve(
    `Unexpected error: ${t.message}`,
    s,
    t
  );
}
async function Ka(t, s = {}, a) {
  try {
    return await t();
  } catch (n) {
    return console.warn("[ErrorHandler] Import failed:", {
      context: s,
      error: n instanceof Error ? n.message : String(n)
    }), a !== void 0 ? a : void 0;
  }
}
function Ya(t) {
  var s;
  try {
    if (typeof document > "u")
      return null;
    const n = `; ${document.cookie}`.split(`; ${t}=`);
    return n.length === 2 && ((s = n.pop()) == null ? void 0 : s.split(";").shift()) || null;
  } catch (a) {
    return console.warn("[ErrorHandler] Cookie access failed:", {
      cookieName: t,
      error: a instanceof Error ? a.message : String(a)
    }), null;
  }
}
function Ja(t, s, a = {}) {
  try {
    if (typeof document > "u")
      return !1;
    let n = `${t}=${s}`;
    return a.domain && (n += `; domain=${a.domain}`), a.path && (n += `; path=${a.path}`), a.secure && (n += "; secure"), a.sameSite && (n += `; samesite=${a.sameSite}`), a.maxAge && (n += `; max-age=${a.maxAge}`), document.cookie = n, !0;
  } catch (n) {
    return console.warn("[ErrorHandler] Cookie setting failed:", {
      cookieName: t,
      error: n instanceof Error ? n.message : String(n)
    }), !1;
  }
}
function Xa(t) {
  try {
    return typeof localStorage > "u" ? null : localStorage.getItem(t);
  } catch (s) {
    return console.warn("[ErrorHandler] localStorage get failed:", {
      key: t,
      error: s instanceof Error ? s.message : String(s)
    }), null;
  }
}
function qa(t, s) {
  try {
    return typeof localStorage > "u" ? !1 : (localStorage.setItem(t, s), !0);
  } catch (a) {
    return console.warn("[ErrorHandler] localStorage set failed:", {
      key: t,
      error: a instanceof Error ? a.message : String(a)
    }), !1;
  }
}
function Qa(t, s) {
  try {
    return typeof window > "u" ? s : t(window);
  } catch (a) {
    return console.warn("[ErrorHandler] Window operation failed:", {
      error: a instanceof Error ? a.message : String(a)
    }), s;
  }
}
function ao() {
  typeof window > "u" || (window.addEventListener("unhandledrejection", (t) => {
    const s = t.reason;
    if (s instanceof Error) {
      const a = s.message.toLowerCase();
      if (a.includes("is not a function") || a.includes("cannot read property") || a.includes("undefined is not a function")) {
        console.warn("[ErrorHandler] Unhandled promise rejection (bundling error):", {
          error: s.message,
          stack: s.stack
        }), t.preventDefault();
        return;
      }
    }
    console.error("[ErrorHandler] Unhandled promise rejection:", t.reason);
  }), window.addEventListener("error", (t) => {
    const s = t.error;
    if (s instanceof Error) {
      const a = s.message.toLowerCase();
      if (a.includes("is not a function") || a.includes("cannot read property") || a.includes("undefined is not a function")) {
        console.warn("[ErrorHandler] Uncaught error (bundling error):", {
          error: s.message,
          stack: s.stack
        }), t.preventDefault();
        return;
      }
    }
    console.error("[ErrorHandler] Uncaught error:", t.error);
  }));
}
typeof window < "u" && ao();
function to() {
  const t = A({
    user: null,
    isAuthenticated: !1,
    isLoading: !0,
    error: null
  }), s = A(null), a = q(() => t.value.isAuthenticated), n = q(() => t.value.user), w = q(() => t.value.isLoading), _ = async () => {
    var k, p, c, N, f, u, L, P, b, g, U, v, S, te, Y, G, O, re, j, E, x;
    try {
      console.log("[auth][enhanced] Starting loadUserInfo..."), console.log("[auth][enhanced] Ensuring cross-subdomain cookie synchronization...");
      const B = "sb-access-token", C = "sb-refresh-token", F = (R) => {
        try {
          const $ = location.hostname;
          if ($ === "localhost" || /^\d+\.\d+\.\d+\.\d+$/.test($)) {
            console.log("[auth][enhanced] Skipping cookie sync for localhost");
            return;
          }
          const ee = "aiworkspace.pro";
          if (!$.endsWith(`.${ee}`) && $ !== ee) {
            console.log("[auth][enhanced] Skipping cookie sync - not under apex domain");
            return;
          }
          console.log("[auth][enhanced] Performing cookie synchronization"), R.forEach((se) => {
            const de = document.cookie.split(";").find((fe) => fe.trim().startsWith(se + "="));
            if (de) {
              console.log(`[auth][enhanced] Found cookie: ${se}`);
              const fe = de.split("=")[1];
              fe && (document.cookie = `${se}=${fe}; domain=.${ee}; path=/; secure; samesite=lax`);
            }
          });
        } catch ($) {
          console.warn("[auth][enhanced] Error in cookie sync:", $);
        }
      };
      F([B, C]), await new Promise((R) => setTimeout(R, 50)), F([B, C]), await new Promise((R) => setTimeout(R, 50));
      let Z = null;
      try {
        const $ = await (await ae()).auth.getSession();
        Z = (k = $ == null ? void 0 : $.data) == null ? void 0 : k.session;
      } catch (R) {
        console.warn("[auth][enhanced] Error getting Supabase session:", R);
      }
      if (Z && Z.user) {
        console.log("[auth][enhanced] Active Supabase session found");
        const R = Z.user, $ = {
          id: R.id,
          name: ((p = R.user_metadata) == null ? void 0 : p.name) || ((c = R.user_metadata) == null ? void 0 : c.user_name) || ((N = R.user_metadata) == null ? void 0 : N.full_name) || ((f = R.email) == null ? void 0 : f.split("@")[0]) || "User",
          email: R.email,
          avatar_url: ((u = R.user_metadata) == null ? void 0 : u.avatar_url) || null,
          user_metadata: R.user_metadata
        };
        return t.value = {
          user: $,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, s.value = {
          user: $,
          access_token: Z.access_token,
          refresh_token: Z.refresh_token
        }, { user: $, session: s.value, error: null };
      }
      console.log("[auth][enhanced] No active session, attempting to restore from cookies...");
      const ne = await De();
      if (ne.success && ne.session) {
        console.log("[auth][enhanced] Session restored successfully from cookies");
        const R = ne.session.user, $ = {
          id: R.id,
          name: ((L = R.user_metadata) == null ? void 0 : L.name) || ((P = R.user_metadata) == null ? void 0 : P.user_name) || ((b = R.user_metadata) == null ? void 0 : b.full_name) || ((g = R.email) == null ? void 0 : g.split("@")[0]) || "User",
          email: R.email,
          avatar_url: ((U = R.user_metadata) == null ? void 0 : U.avatar_url) || null,
          user_metadata: R.user_metadata
        };
        return t.value = {
          user: $,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, s.value = ne.session, { user: $, session: s.value, error: null };
      } else {
        console.log("[auth][enhanced] Failed to restore session:", ne.error), console.log("[auth][enhanced] Retrying session restoration with extended delay..."), await new Promise(($) => setTimeout($, 500)), F([B, C]);
        const R = await De();
        if (R.success && R.session) {
          console.log("[auth][enhanced] Session restored on retry");
          const $ = R.session.user, ee = {
            id: $.id,
            name: ((v = $.user_metadata) == null ? void 0 : v.name) || ((S = $.user_metadata) == null ? void 0 : S.user_name) || ((te = $.user_metadata) == null ? void 0 : te.full_name) || ((Y = $.email) == null ? void 0 : Y.split("@")[0]) || "User",
            email: $.email,
            avatar_url: ((G = $.user_metadata) == null ? void 0 : G.avatar_url) || null,
            user_metadata: $.user_metadata
          };
          return t.value = {
            user: ee,
            isAuthenticated: !0,
            isLoading: !1,
            error: null
          }, s.value = R.session, { user: ee, session: s.value, error: null };
        }
      }
    } catch (B) {
      console.error("Error getting Supabase session:", B), B instanceof Error && oo(B, {
        component: "useEnhancedAuth",
        function: "loadUserInfo",
        operation: "session_validation"
      });
      try {
        const C = await De();
        if (C.success && C.session) {
          console.log("[auth][enhanced] Session restored after error");
          const F = C.session.user, Z = {
            id: F.id,
            name: ((O = F.user_metadata) == null ? void 0 : O.name) || ((re = F.user_metadata) == null ? void 0 : re.user_name) || ((j = F.user_metadata) == null ? void 0 : j.full_name) || ((E = F.email) == null ? void 0 : E.split("@")[0]) || "User",
            email: F.email,
            avatar_url: ((x = F.user_metadata) == null ? void 0 : x.avatar_url) || null,
            user_metadata: F.user_metadata
          };
          return t.value = {
            user: Z,
            isAuthenticated: !0,
            isLoading: !1,
            error: null
          }, s.value = C.session, { user: Z, session: s.value, error: null };
        }
      } catch (C) {
        console.error("Error restoring session:", C);
      }
    }
    return console.log("[auth][enhanced] No valid authentication found"), t.value = {
      user: null,
      isAuthenticated: !1,
      isLoading: !1,
      error: "No valid session found"
    }, s.value = null, { user: null, session: null, error: "No valid session found" };
  }, M = async () => {
    try {
      await (await ae()).auth.signOut(), ke(_e), ke(ye), xe(), t.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      }, s.value = null, console.log("[auth][enhanced] User logged out successfully");
    } catch (k) {
      console.error("Error during logout:", k), t.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      }, s.value = null;
    }
  }, W = async (k, p) => {
    var c, N, f, u, L;
    try {
      t.value.isLoading = !0;
      const P = await ae(), { data: b, error: g } = await P.auth.signInWithPassword({
        email: k,
        password: p
      });
      if (g)
        throw g;
      if (b.session) {
        const U = b.session.user, v = {
          id: U.id,
          name: ((c = U.user_metadata) == null ? void 0 : c.name) || ((N = U.user_metadata) == null ? void 0 : N.user_name) || ((f = U.user_metadata) == null ? void 0 : f.full_name) || ((u = U.email) == null ? void 0 : u.split("@")[0]) || "User",
          email: U.email,
          avatar_url: ((L = U.user_metadata) == null ? void 0 : L.avatar_url) || null,
          user_metadata: U.user_metadata
        };
        return t.value = {
          user: v,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, s.value = {
          user: v,
          access_token: b.session.access_token,
          refresh_token: b.session.refresh_token
        }, { user: v, session: s.value, error: null };
      }
      return { user: null, session: null, error: "No session returned" };
    } catch (P) {
      return console.error("Sign in error:", P), t.value.isLoading = !1, { user: null, session: null, error: String(P) };
    }
  }, H = async (k, p, c) => {
    var N, f, u, L, P;
    try {
      t.value.isLoading = !0;
      const b = await ae(), { data: g, error: U } = await b.auth.signUp({
        email: k,
        password: p,
        options: {
          data: c
        }
      });
      if (U)
        throw U;
      if (g.session) {
        const v = g.session.user, S = {
          id: v.id,
          name: ((N = v.user_metadata) == null ? void 0 : N.name) || ((f = v.user_metadata) == null ? void 0 : f.user_name) || ((u = v.user_metadata) == null ? void 0 : u.full_name) || ((L = v.email) == null ? void 0 : L.split("@")[0]) || "User",
          email: v.email,
          avatar_url: ((P = v.user_metadata) == null ? void 0 : P.avatar_url) || null,
          user_metadata: v.user_metadata
        };
        return t.value = {
          user: S,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, s.value = {
          user: S,
          access_token: g.session.access_token,
          refresh_token: g.session.refresh_token
        }, { user: S, session: s.value, error: null };
      }
      return { user: null, session: null, error: "No session returned" };
    } catch (b) {
      return console.error("Sign up error:", b), t.value.isLoading = !1, { user: null, session: null, error: String(b) };
    }
  }, m = async () => {
    await _();
  };
  return be(async () => {
    await Gs(), await m();
  }), {
    // State
    authState: t,
    currentSession: s,
    // Computed
    isAuthenticated: a,
    currentUser: n,
    isLoading: w,
    // Methods
    loadUserInfo: _,
    logout: M,
    signIn: W,
    signUp: H,
    checkAuth: m
  };
}
const ve = {
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
}, ro = {
  ...ve,
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
}, no = {
  ...ve,
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
}, ds = {
  ...ve,
  normalCheckInterval: 1e4,
  // 10 seconds - faster for testing
  fastCheckInterval: 2e3,
  // 2 seconds - very fast for testing
  fastMonitoringDuration: 3e4,
  // 30 seconds - shorter for testing
  validationCacheDuration: 1e3
  // 1 second cache for testing
}, ps = {
  ...ve,
  normalCheckInterval: 45e3,
  // 45 seconds - balanced monitoring
  fastCheckInterval: 3e3,
  // 3 seconds - quick detection
  fastMonitoringDuration: 9e4,
  // 1.5 minutes - reasonable fast monitoring
  validationCacheDuration: 1e4
  // 10 seconds cache for better performance
};
function fs() {
  switch ("production") {
    case "production":
      return ps;
    case "development":
      return ds;
    default:
      return ve;
  }
}
function Za(t) {
  return {
    ...ve,
    ...t
  };
}
const io = {
  default: ve,
  fast: ro,
  conservative: no,
  development: ds,
  production: ps
};
function et(t) {
  return io[t];
}
const st = {
  immediate: "Immediate (0-2 seconds) - When logout is detected via auth events",
  fast: "Fast (2-5 seconds) - When fast monitoring is active",
  normal: "Normal (up to 30 seconds) - Regular monitoring interval",
  conservative: "Conservative (up to 60 seconds) - Less frequent monitoring"
}, ot = {
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
function lo(t) {
  const s = A(!0), a = A(null), n = A(!1), w = A(!1), _ = A(null), M = A(null), W = A(null), H = { ...fs(), ...t }, m = H.normalCheckInterval, k = H.fastCheckInterval, p = H.fastMonitoringDuration, c = H.maxRetryAttempts, N = H.retryDelay, f = q(() => !s.value && a.value !== null), u = q(
    () => {
      var E, x;
      return ((E = a.value) == null ? void 0 : E.canRetry) && ((x = a.value) == null ? void 0 : x.type) !== "manual_check_failed";
    }
  ), L = (E) => {
    var C;
    if (typeof document > "u")
      return null;
    const B = `; ${document.cookie}`.split(`; ${E}=`);
    return B.length === 2 && ((C = B.pop()) == null ? void 0 : C.split(";").shift()) || null;
  }, P = async () => {
    var E, x;
    try {
      console.log("[SessionMonitor] Validating session...");
      const B = L("sb-access-token"), C = L("sb-refresh-token");
      if (!B || !C)
        return console.log("[SessionMonitor] No tokens found in cookies"), !1;
      const F = await ae();
      let Z = null, ne = null;
      for (let se = 1; se <= 2; se++)
        try {
          const de = await F.auth.getSession();
          Z = de.data.session, ne = de.error;
          break;
        } catch (de) {
          if (console.warn(`[SessionMonitor] Network error on attempt ${se}:`, de), se === 2)
            return console.log("[SessionMonitor] Network issues detected, maintaining current session state"), s.value;
          await new Promise((fe) => setTimeout(fe, 1e3));
        }
      if (ne)
        return console.warn("[SessionMonitor] Error getting session:", ne), (E = ne.message) != null && E.includes("Invalid JWT") || (x = ne.message) != null && x.includes("JWT expired") ? !1 : s.value;
      if (!Z || !Z.user)
        return console.log("[SessionMonitor] No valid session found"), !1;
      const R = /* @__PURE__ */ new Date(), $ = new Date(Z.expires_at * 1e3), ee = 5 * 60 * 1e3;
      return R >= new Date($.getTime() - ee) ? (console.log("[SessionMonitor] Session is close to expiry or expired"), !1) : (console.log("[SessionMonitor] Session is valid"), _.value = /* @__PURE__ */ new Date(), !0);
    } catch (B) {
      return console.error("[SessionMonitor] Error validating session:", B), s.value;
    }
  }, b = async () => {
    try {
      console.log("[SessionMonitor] Attempting to restore session...");
      const E = L("sb-access-token"), x = L("sb-refresh-token");
      if (!E || !x)
        return console.log("[SessionMonitor] No tokens available for restoration"), !1;
      const B = await ae(), { data: C, error: F } = await B.auth.setSession({
        access_token: E,
        refresh_token: x
      });
      return F ? (console.warn("[SessionMonitor] Error restoring session:", F), !1) : C.session && C.session.user ? (console.log("[SessionMonitor] Session restored successfully"), _.value = /* @__PURE__ */ new Date(), !0) : !1;
    } catch (E) {
      return console.error("[SessionMonitor] Error restoring session:", E), !1;
    }
  }, g = (E, x, B = !0) => {
    console.warn("[SessionMonitor] Session loss detected:", { type: E, message: x }), s.value = !1, a.value = {
      type: E,
      message: x,
      timestamp: /* @__PURE__ */ new Date(),
      canRetry: B
    };
  }, U = async () => {
    console.log("[SessionMonitor] Retrying session validation...");
    for (let E = 1; E <= c; E++) {
      if (console.log(`[SessionMonitor] Retry attempt ${E}/${c}`), E > 1 && await new Promise((C) => setTimeout(C, N)), await b() && await P())
        return console.log("[SessionMonitor] Session restored and validated successfully"), s.value = !0, a.value = null, !0;
      if (await P())
        return console.log("[SessionMonitor] Session validated successfully on retry"), s.value = !0, a.value = null, !0;
    }
    return console.log("[SessionMonitor] All retry attempts failed"), !1;
  }, v = () => {
    console.log("[SessionMonitor] Clearing session loss state"), s.value = !0, a.value = null;
  }, S = () => {
    if (n.value) {
      console.log("[SessionMonitor] Already monitoring, skipping start");
      return;
    }
    console.log("[SessionMonitor] Starting session monitoring..."), n.value = !0, setTimeout(async () => {
      console.log("[SessionMonitor] Performing initial session validation..."), await P() ? console.log("[SessionMonitor] Initial validation successful") : (console.log("[SessionMonitor] Initial validation failed, but waiting for confirmation..."), setTimeout(async () => {
        await P() || g("session_expired", "Your session has expired. Please log in again.", !0);
      }, 3e3));
    }, 2e3), M.value = setInterval(async () => {
      console.log("[SessionMonitor] Periodic session check...");
      const E = await P();
      !E && s.value ? (console.log("[SessionMonitor] Session validation failed, performing confirmation check..."), setTimeout(async () => {
        await P() || g("session_expired", "Your session has expired. Please log in again.", !0);
      }, 2e3)) : E && !s.value && (console.log("[SessionMonitor] Session recovered"), v());
    }, m);
  }, te = () => {
    if (w.value) {
      console.log("[SessionMonitor] Fast monitoring already active");
      return;
    }
    console.log("[SessionMonitor] Starting fast monitoring (5s intervals)..."), w.value = !0, W.value && clearInterval(W.value), W.value = setInterval(async () => {
      console.log("[SessionMonitor] Fast session check...");
      const E = await P();
      !E && s.value ? (console.log("[SessionMonitor] Fast monitoring detected potential session loss, confirming..."), setTimeout(async () => {
        await P() || (g("session_expired", "Your session has expired. Please log in again.", !0), Y());
      }, 1e3)) : E && !s.value && (console.log("[SessionMonitor] Session recovered"), v(), Y());
    }, k), setTimeout(() => {
      w.value && (console.log(`[SessionMonitor] Auto-stopping fast monitoring after ${p / 1e3} seconds`), Y());
    }, p);
  }, Y = () => {
    w.value && (console.log("[SessionMonitor] Stopping fast monitoring..."), w.value = !1, W.value && (clearInterval(W.value), W.value = null));
  }, G = () => {
    n.value && (console.log("[SessionMonitor] Stopping session monitoring..."), n.value = !1, M.value && (clearInterval(M.value), M.value = null), Y());
  }, O = async () => {
    console.log("[SessionMonitor] Manual session check requested");
    const E = await P();
    return !E && !await b() ? (g("manual_check_failed", "Session validation failed. Please log in again.", !1), !1) : E;
  }, re = () => {
    console.log("[SessionMonitor] Network error detected, but not triggering immediate session loss"), s.value || g("network_error", "Network connection lost. Please check your internet connection and try again.", !0);
  }, j = () => {
    if (typeof window > "u")
      return;
    const E = () => {
      var C;
      console.log("[SessionMonitor] Network connection restored"), f.value && ((C = a.value) == null ? void 0 : C.type) === "network_error" && setTimeout(() => U(), 1e3);
    }, x = () => {
      console.log("[SessionMonitor] Network connection lost"), re();
    }, B = (C) => {
      console.log("[SessionMonitor] Logout detected, starting fast monitoring for immediate detection"), te();
    };
    return window.addEventListener("online", E), window.addEventListener("offline", x), window.addEventListener("session-logout-detected", B), () => {
      window.removeEventListener("online", E), window.removeEventListener("offline", x), window.removeEventListener("session-logout-detected", B);
    };
  };
  return be(() => {
    console.log("[SessionMonitor] Mounted, setting up monitoring"), S(), j();
  }), cs(() => {
    console.log("[SessionMonitor] Unmounted, cleaning up"), G();
  }), {
    // State
    isSessionValid: s,
    sessionLossEvent: a,
    isMonitoring: n,
    isFastMonitoring: w,
    lastValidSession: _,
    // Computed
    hasSessionLoss: f,
    canRetrySession: u,
    // Methods
    validateSession: P,
    restoreSession: b,
    retrySession: U,
    clearSessionLoss: v,
    startMonitoring: S,
    stopMonitoring: G,
    startFastMonitoring: te,
    stopFastMonitoring: Y,
    checkSession: O,
    handleNetworkError: re
  };
}
const co = zs("workspace", () => {
  const t = A(null), s = A([]), a = A(null), n = (m) => {
    t.value = m, localStorage.setItem("current_workspace", JSON.stringify(m));
  }, w = (m) => {
    s.value = m, localStorage.setItem("available_workspaces", JSON.stringify(m));
  };
  return {
    currentWorkspace: t,
    workspaces: s,
    user: a,
    setCurrentWorkspace: n,
    setWorkspaces: w,
    setUser: (m) => {
      a.value = m, localStorage.setItem("user_info", JSON.stringify(m));
    },
    loadPersistedData: () => {
      const m = localStorage.getItem("current_workspace");
      if (m)
        try {
          t.value = JSON.parse(m);
        } catch (c) {
          console.error("Error loading persisted workspace:", c);
        }
      const k = localStorage.getItem("available_workspaces");
      if (k)
        try {
          s.value = JSON.parse(k);
        } catch (c) {
          console.error("Error loading persisted workspaces:", c);
        }
      const p = localStorage.getItem("user_info");
      if (p)
        try {
          a.value = JSON.parse(p);
        } catch (c) {
          console.error("Error loading persisted user:", c);
        }
    },
    clearData: () => {
      t.value = null, s.value = [], a.value = null, localStorage.removeItem("current_workspace"), localStorage.removeItem("available_workspaces"), localStorage.removeItem("user_info");
    },
    loadWorkspaces: async (m = !1) => {
      try {
        const { data: { user: k } } = await Pe.auth.getUser();
        if (!k)
          return [];
        let p = Pe.from("workspaces").select(`
          id, title, description, parent_workspace_id, created_by, archived, created_at, git_repo, 
          workspace_access!inner ( access_type, shared_with_user_id ),
          workspace_activities!left ( updated_at )
        `).eq("workspace_access.shared_with_user_id", k.id);
        m || (p = p.eq("archived", !1));
        const { data: c, error: N } = await p;
        if (N)
          throw N;
        const f = /* @__PURE__ */ new Map();
        (c || []).forEach((g) => {
          (g.workspace_access || []).forEach((U) => {
            U.shared_with_user_id === k.id && f.set(g.id, U);
          });
        });
        const u = [...new Set(
          (c || []).filter((g) => g.parent_workspace_id).map((g) => g.parent_workspace_id).filter((g) => !f.has(g))
        )];
        let L = [];
        if (u.length) {
          let g = Pe.from("workspaces").select("id, title, description, parent_workspace_id, created_by, archived, created_at").in("id", u);
          m || (g = g.eq("archived", !1));
          const { data: U, error: v } = await g;
          if (v)
            throw v;
          L = U || [];
        }
        const b = [...c || [], ...L].map((g) => {
          var U, v, S;
          return {
            id: g.id,
            title: g.title,
            description: g.description || "No description",
            parent_workspace_id: g.parent_workspace_id,
            created_by: g.created_by,
            archived: g.archived,
            created_at: g.created_at,
            latest_activity: ((v = (U = g.workspace_activities) == null ? void 0 : U[0]) == null ? void 0 : v.updated_at) || g.created_at,
            hasAccess: f.has(g.id),
            accessType: ((S = f.get(g.id)) == null ? void 0 : S.access_type) || null
          };
        });
        return b.sort((g, U) => new Date(U.latest_activity) - new Date(g.latest_activity)), w(b), b;
      } catch (k) {
        return console.error("loadWorkspaces error", k), [];
      }
    }
  };
});
let Ge = null;
const at = (t) => {
  Ge = t.token, console.log("🔧 GitHub token configured");
}, uo = () => Ge, tt = () => Ge !== null;
function po() {
  const t = A({
    user: null,
    isAuthenticated: !1,
    isLoading: !0,
    error: null
  }), s = A(window.location.href), a = async () => {
    var m, k, p, c, N, f, u, L;
    try {
      t.value.isLoading = !0;
      const P = await ae(), { data: { session: b }, error: g } = await P.auth.getSession();
      if (g) {
        console.error("Error checking auth status:", g), t.value = {
          user: null,
          isAuthenticated: !1,
          isLoading: !1,
          error: g.message
        };
        return;
      }
      b != null && b.user ? (t.value = {
        user: {
          id: b.user.id,
          email: b.user.email || "",
          name: ((m = b.user.user_metadata) == null ? void 0 : m.full_name) || ((k = b.user.user_metadata) == null ? void 0 : k.name) || ((p = b.user.email) == null ? void 0 : p.split("@")[0]) || "User",
          avatar_url: ((c = b.user.user_metadata) == null ? void 0 : c.avatar_url) || ((N = b.user.user_metadata) == null ? void 0 : N.picture) || null,
          initials: (((f = b.user.user_metadata) == null ? void 0 : f.full_name) || ((u = b.user.user_metadata) == null ? void 0 : u.name) || ((L = b.user.email) == null ? void 0 : L.split("@")[0]) || "U").split(" ").map((U) => U[0]).join("").toUpperCase().substring(0, 2)
        },
        isAuthenticated: !0,
        isLoading: !1,
        error: null
      }, b.access_token && Se(_e, b.access_token), b.refresh_token && Se(ye, b.refresh_token), He()) : t.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      };
    } catch (P) {
      console.error("Auth check failed:", P), t.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: P.message || "Authentication check failed"
      };
    }
  }, n = async (m, k) => {
    try {
      const p = await ae(), { error: c } = await p.auth.signInWithPassword({
        email: m,
        password: k
      });
      return c ? { success: !1, error: c.message } : (await a(), sessionStorage.setItem("post-login-redirect", s.value), { success: !0 });
    } catch (p) {
      return console.error("Login error:", p), { success: !1, error: p.message || "Login failed" };
    }
  }, w = async (m, k) => {
    var p;
    try {
      const c = await ae(), { data: N, error: f } = await c.auth.signUp({
        email: m,
        password: k
      });
      return f ? { success: !1, error: f.message } : N.user && !N.user.email_confirmed_at ? { success: !0, needsConfirmation: !0 } : (p = N.session) != null && p.user ? (await a(), sessionStorage.setItem("post-login-redirect", s.value), { success: !0 }) : { success: !1, error: "No session created" };
    } catch (c) {
      return console.error("Signup error:", c), { success: !1, error: c.message || "Signup failed" };
    }
  }, _ = async (m) => {
    try {
      const k = `${window.location.origin}/auth/callback`;
      console.log("[OAuth] Starting login with provider:", m), console.log("[OAuth] Redirect URL:", k), console.log("[OAuth] Current URL:", s.value), console.log("[OAuth] Current origin:", window.location.origin);
      const p = await ae(), { error: c } = await p.auth.signInWithOAuth({
        provider: m,
        options: {
          redirectTo: k,
          queryParams: {
            redirect_origin: s.value
          }
        }
      });
      if (c)
        return console.error("[OAuth] Error:", c), { success: !1, error: c.message };
      const N = s.value || window.location.href;
      return sessionStorage.setItem("post-login-redirect", N), localStorage.setItem("post-login-redirect", N), console.log("[OAuth] Stored redirect URL:", N), console.log("[OAuth] Current URL value:", s.value), console.log("[OAuth] Window location href:", window.location.href), { success: !0 };
    } catch (k) {
      return console.error("OAuth login error:", k), { success: !1, error: k.message || "OAuth login failed" };
    }
  }, M = async () => {
    try {
      const m = await ae(), { error: k } = await m.auth.signOut();
      k && console.error("Logout error:", k), t.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      }, ke(_e), ke(ye), xe();
    } catch (m) {
      console.error("Logout error:", m);
    }
  }, W = async (m) => {
    try {
      const k = await ae(), { error: p } = await k.auth.resetPasswordForEmail(m, {
        redirectTo: `${window.location.origin}/auth/reset-password`
      });
      return p ? { success: !1, error: p.message } : { success: !0 };
    } catch (k) {
      return console.error("Password reset error:", k), { success: !1, error: k.message || "Password reset failed" };
    }
  }, H = async () => {
    try {
      (await ae()).auth.onAuthStateChange((k, p) => {
        var c;
        switch (console.log("Auth state changed:", k, (c = p == null ? void 0 : p.user) == null ? void 0 : c.email), k) {
          case "SIGNED_IN":
            p != null && p.user && a();
            break;
          case "SIGNED_OUT":
            t.value = {
              user: null,
              isAuthenticated: !1,
              isLoading: !1,
              error: null
            }, ke(_e), ke(ye), xe();
            break;
          case "TOKEN_REFRESHED":
            p != null && p.access_token && Se(_e, p.access_token), p != null && p.refresh_token && Se(ye, p.refresh_token), He();
            break;
          case "USER_UPDATED":
            p != null && p.user && a();
            break;
        }
      });
    } catch (m) {
      console.warn("Failed to setup auth listener:", m);
    }
  };
  return be(async () => {
    H(), await a();
  }), pe(() => window.location.href, (m) => {
    s.value = m;
  }), {
    authState: q(() => t.value),
    isAuthenticated: q(() => t.value.isAuthenticated),
    user: q(() => t.value.user),
    isLoading: q(() => t.value.isLoading),
    checkAuthStatus: a,
    loginWithEmail: n,
    signupWithEmail: w,
    loginWithProvider: _,
    logout: M,
    resetPassword: W,
    currentUrl: q(() => s.value)
  };
}
const fo = { class: "login-container" }, go = { class: "logo-section" }, ho = { class: "login-buttons" }, vo = {
  key: 0,
  class: "forgot-password"
}, wo = { class: "signup-link" }, mo = /* @__PURE__ */ ue({
  __name: "LoginModal",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue", "login-success"],
  setup(t, { emit: s }) {
    const a = t, n = s, w = q({
      get: () => a.modelValue,
      set: (v) => n("update:modelValue", v)
    }), _ = A(!1), M = A(!1), W = A(), { loginWithEmail: H, signupWithEmail: m, loginWithProvider: k, resetPassword: p } = po(), c = xs({
      email: "",
      password: "",
      confirmPassword: ""
    }), N = q(() => ({
      email: [
        { required: !0, message: "Please enter your email", trigger: "blur" },
        { type: "email", message: "Please enter a valid email", trigger: "blur" }
      ],
      password: [
        { required: !0, message: "Please enter your password", trigger: "blur" },
        { min: 6, message: "Password must be at least 6 characters", trigger: "blur" }
      ],
      ..._.value ? {
        confirmPassword: [
          { required: !0, message: "Please confirm your password", trigger: "blur" },
          {
            validator: (v, S, te) => {
              S !== c.password ? te(new Error("Passwords do not match")) : te();
            },
            trigger: "blur"
          }
        ]
      } : {}
    })), f = () => {
      var v;
      _.value = !_.value, c.email = "", c.password = "", c.confirmPassword = "", (v = W.value) == null || v.clearValidate();
    }, u = () => {
      var v;
      w.value = !1, c.email = "", c.password = "", c.confirmPassword = "", _.value = !1, (v = W.value) == null || v.clearValidate();
    }, L = async () => {
      if (W.value)
        try {
          await W.value.validate(), M.value = !0, _.value ? await b() : await P();
        } catch (v) {
          console.error("Form validation failed:", v);
        } finally {
          M.value = !1;
        }
    }, P = async () => {
      const v = await H(c.email, c.password);
      v.success ? (z.success("Login successful"), n("login-success", { email: c.email }), u()) : z.error("Login failed: " + v.error);
    }, b = async () => {
      const v = await m(c.email, c.password);
      v.success ? v.needsConfirmation ? z.success("Please check your email to confirm your account") : (z.success("Account created successfully"), n("login-success", { email: c.email }), u()) : z.error("Signup failed: " + v.error);
    }, g = async (v) => {
      const S = await k(v);
      S.success ? z.success("Redirecting to login provider...") : z.error("Login failed: " + S.error);
    }, U = async () => {
      if (!c.email) {
        z.warning("Please enter your email address first");
        return;
      }
      const v = await p(c.email);
      v.success ? z.success("Password reset email sent! Please check your inbox.") : z.error("Failed to send reset email: " + v.error);
    };
    return (v, S) => {
      const te = ie("el-icon"), Y = ie("el-input"), G = ie("el-form-item"), O = ie("el-button"), re = ie("el-dialog");
      return y(), oe(re, {
        modelValue: w.value,
        "onUpdate:modelValue": S[6] || (S[6] = (j) => w.value = j),
        title: "",
        width: "500px",
        "close-on-click-modal": !1,
        "close-on-press-escape": !0,
        "show-close": !0,
        class: "login-modal",
        onClose: u
      }, {
        default: d(() => [
          i("div", fo, [
            i("div", go, [
              i("h2", null, K(_.value ? "Create Account" : "Welcome Back"), 1),
              i("p", null, K(_.value ? "Sign up to get started with your account" : "Sign in to continue to your account"), 1)
            ]),
            h(D(Os), {
              model: c,
              rules: N.value,
              ref_key: "formRef",
              ref: W,
              class: "login-form",
              onSubmit: ge(L, ["prevent"])
            }, {
              default: d(() => [
                h(G, { prop: "email" }, {
                  default: d(() => [
                    h(Y, {
                      modelValue: c.email,
                      "onUpdate:modelValue": S[0] || (S[0] = (j) => c.email = j),
                      placeholder: "Email",
                      type: "email",
                      size: "large",
                      class: "form-input"
                    }, {
                      prefix: d(() => [
                        h(te, null, {
                          default: d(() => [
                            h(D(Qs))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                h(G, { prop: "password" }, {
                  default: d(() => [
                    h(Y, {
                      modelValue: c.password,
                      "onUpdate:modelValue": S[1] || (S[1] = (j) => c.password = j),
                      placeholder: "Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: d(() => [
                        h(te, null, {
                          default: d(() => [
                            h(D(ls))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                _.value ? (y(), oe(G, {
                  key: 0,
                  prop: "confirmPassword"
                }, {
                  default: d(() => [
                    h(Y, {
                      modelValue: c.confirmPassword,
                      "onUpdate:modelValue": S[2] || (S[2] = (j) => c.confirmPassword = j),
                      placeholder: "Confirm Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: d(() => [
                        h(te, null, {
                          default: d(() => [
                            h(D(ls))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                })) : X("", !0),
                h(G, null, {
                  default: d(() => [
                    h(O, {
                      type: "primary",
                      class: "submit-button",
                      loading: M.value,
                      onClick: L,
                      size: "large"
                    }, {
                      default: d(() => [
                        J(K(_.value ? "Sign Up" : "Sign In"), 1)
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model", "rules"]),
            S[10] || (S[10] = i("div", { class: "divider" }, [
              i("span", null, "Or continue with")
            ], -1)),
            i("div", ho, [
              h(O, {
                class: "login-button google",
                onClick: S[3] || (S[3] = (j) => g("google")),
                size: "large"
              }, {
                default: d(() => [...S[7] || (S[7] = [
                  i("span", { class: "social-icon" }, "G", -1),
                  J(" Google ", -1)
                ])]),
                _: 1
              }),
              h(O, {
                class: "login-button github",
                onClick: S[4] || (S[4] = (j) => g("github")),
                size: "large"
              }, {
                default: d(() => [...S[8] || (S[8] = [
                  i("span", { class: "social-icon" }, "⚡", -1),
                  J(" GitHub ", -1)
                ])]),
                _: 1
              }),
              h(O, {
                class: "login-button twitter",
                onClick: S[5] || (S[5] = (j) => g("twitter")),
                size: "large"
              }, {
                default: d(() => [...S[9] || (S[9] = [
                  i("span", { class: "social-icon" }, "X", -1),
                  J(" X (Twitter) ", -1)
                ])]),
                _: 1
              })
            ]),
            S[11] || (S[11] = i("div", { class: "terms" }, " By continuing, you agree to AI Workspace's Terms of Service and Privacy Policy ", -1)),
            _.value ? X("", !0) : (y(), T("div", vo, [
              i("a", {
                href: "#",
                onClick: ge(U, ["prevent"])
              }, "Forgot Password?")
            ])),
            i("div", wo, [
              J(K(_.value ? "Already have an account?" : "Don't have an account?") + " ", 1),
              i("a", {
                href: "#",
                onClick: ge(f, ["prevent"])
              }, K(_.value ? "Sign in" : "Sign up"), 1)
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
const Re = (t, s) => {
  const a = t.__vccOpts || t;
  for (const [n, w] of s)
    a[n] = w;
  return a;
}, ko = /* @__PURE__ */ Re(mo, [["__scopeId", "data-v-684a3f28"]]), _o = { class: "session-loss-content" }, yo = { class: "session-loss-icon" }, So = { class: "session-loss-message" }, bo = {
  key: 0,
  class: "session-loss-details"
}, Ao = { class: "detail-item" }, Eo = { class: "detail-value" }, Co = { class: "detail-item" }, Io = { class: "detail-value" }, Lo = { class: "session-loss-actions" }, Uo = {
  key: 0,
  class: "retry-status"
}, Po = { class: "retry-message" }, Vo = /* @__PURE__ */ ue({
  __name: "SessionLossModal",
  props: {
    modelValue: { type: Boolean },
    sessionLossEvent: {},
    canRetrySession: { type: Boolean }
  },
  emits: ["update:modelValue", "retry", "login", "refresh"],
  setup(t, { emit: s }) {
    const a = t, n = s, w = A(!1), _ = A(0), M = A(void 0), W = A(""), H = q({
      get: () => a.modelValue,
      set: (f) => n("update:modelValue", f)
    }), m = (f) => {
      switch (f) {
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
    }, k = (f) => f.toLocaleString(), p = async () => {
      if (w.value)
        return;
      w.value = !0, _.value = 0, M.value = void 0, W.value = "Attempting to restore session...";
      const f = setInterval(() => {
        _.value < 90 && (_.value += Math.random() * 20);
      }, 200);
      try {
        n("retry"), await new Promise((u) => setTimeout(u, 2e3)), _.value = 100, M.value = "success", W.value = "Session restored successfully!", setTimeout(() => {
          H.value = !1;
        }, 1e3);
      } catch {
        _.value = 100, M.value = "exception", W.value = "Failed to restore session. Please log in again.", z.error("Session restoration failed");
      } finally {
        clearInterval(f), setTimeout(() => {
          w.value = !1, _.value = 0, M.value = void 0, W.value = "";
        }, 3e3);
      }
    }, c = () => {
      n("login"), H.value = !1;
    }, N = () => {
      n("refresh"), window.location.reload();
    };
    return pe(() => a.sessionLossEvent, (f) => {
      f && (w.value = !1, _.value = 0, M.value = void 0, W.value = "");
    }), (f, u) => (y(), oe(D(Bs), {
      modelValue: H.value,
      "onUpdate:modelValue": u[0] || (u[0] = (L) => H.value = L),
      title: "Session Expired",
      width: "500px",
      "close-on-click-modal": !1,
      "close-on-press-escape": !1,
      "show-close": !1,
      class: "session-loss-modal",
      center: ""
    }, {
      default: d(() => {
        var L;
        return [
          i("div", _o, [
            i("div", yo, [
              h(D(Ue), {
                size: "48",
                color: "#f56c6c"
              }, {
                default: d(() => [
                  h(D(us))
                ]),
                _: 1
              })
            ]),
            i("div", So, [
              u[3] || (u[3] = i("h3", null, "Your session has expired", -1)),
              i("p", null, K(((L = f.sessionLossEvent) == null ? void 0 : L.message) || "Please log in again to continue using the application."), 1),
              f.sessionLossEvent ? (y(), T("div", bo, [
                i("div", Ao, [
                  u[1] || (u[1] = i("span", { class: "detail-label" }, "Issue:", -1)),
                  i("span", Eo, K(m(f.sessionLossEvent.type)), 1)
                ]),
                i("div", Co, [
                  u[2] || (u[2] = i("span", { class: "detail-label" }, "Time:", -1)),
                  i("span", Io, K(k(f.sessionLossEvent.timestamp)), 1)
                ])
              ])) : X("", !0)
            ]),
            i("div", Lo, [
              f.canRetrySession && !w.value ? (y(), oe(D(We), {
                key: 0,
                type: "primary",
                onClick: p,
                loading: w.value
              }, {
                default: d(() => [
                  h(D(Ue), null, {
                    default: d(() => [
                      h(D(Oe))
                    ]),
                    _: 1
                  }),
                  u[4] || (u[4] = J(" Try Again ", -1))
                ]),
                _: 1
              }, 8, ["loading"])) : X("", !0),
              h(D(We), {
                type: "primary",
                onClick: c,
                disabled: w.value
              }, {
                default: d(() => [
                  h(D(Ue), null, {
                    default: d(() => [
                      h(D(Be))
                    ]),
                    _: 1
                  }),
                  u[5] || (u[5] = J(" Log In ", -1))
                ]),
                _: 1
              }, 8, ["disabled"]),
              f.canRetrySession ? X("", !0) : (y(), oe(D(We), {
                key: 1,
                type: "info",
                onClick: N,
                disabled: w.value
              }, {
                default: d(() => [
                  h(D(Ue), null, {
                    default: d(() => [
                      h(D(Oe))
                    ]),
                    _: 1
                  }),
                  u[6] || (u[6] = J(" Refresh Page ", -1))
                ]),
                _: 1
              }, 8, ["disabled"]))
            ]),
            w.value ? (y(), T("div", Uo, [
              h(D(Fs), {
                percentage: _.value,
                status: M.value,
                "stroke-width": 6
              }, null, 8, ["percentage", "status"]),
              i("p", Po, K(W.value), 1)
            ])) : X("", !0)
          ])
        ];
      }),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const Ro = /* @__PURE__ */ Re(Vo, [["__scopeId", "data-v-0dd27f7f"]]), Mo = { class: "aiworkspace-header" }, No = {
  key: 0,
  class: "header-content header-loading"
}, $o = { class: "header-center" }, To = { class: "loading-text" }, Wo = { key: 0 }, Do = { key: 1 }, xo = {
  key: 1,
  class: "header-content header-fallback"
}, Ho = {
  key: 2,
  class: "header-content header-restricted"
}, Oo = { class: "header-center" }, Bo = { class: "restricted-text" }, Fo = { class: "header-right" }, Go = {
  key: 3,
  class: "header-content"
}, jo = { class: "header-left" }, zo = { class: "logo-section" }, Ko = {
  href: "/",
  class: "logo"
}, Yo = ["src"], Jo = {
  key: 1,
  class: "text-logo"
}, Xo = {
  key: 0,
  class: "header-center"
}, qo = { class: "main-navigation" }, Qo = { class: "nav-item" }, Zo = {
  href: "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard",
  class: "nav-link"
}, ea = { class: "workspace-dropdown-item" }, sa = ["href"], oa = { class: "workspace-icon" }, aa = {
  key: 1,
  class: "nav-divider"
}, ta = { class: "nav-item" }, ra = ["href", "onClick"], na = { class: "header-right" }, ia = { class: "user-profile" }, la = { class: "user-info" }, ca = { class: "user-name" }, ua = { class: "user-avatar" }, da = ["src", "alt"], pa = {
  key: 1,
  class: "avatar-placeholder"
}, fa = { class: "version-info" }, ga = { class: "version-hash" }, ha = {
  key: 4,
  class: "header-content header-unauthenticated"
}, va = { class: "header-left" }, wa = { class: "logo-section" }, ma = {
  href: "/",
  class: "logo"
}, ka = ["src"], _a = {
  key: 1,
  class: "text-logo"
}, ya = {
  key: 0,
  class: "header-right"
}, Sa = { class: "workspace-list" }, ba = ["onClick"], Aa = { class: "workspace-icon" }, Ea = { class: "workspace-details" }, Ca = { class: "workspace-members" }, Ia = {
  key: 0,
  class: "current-indicator"
}, La = { class: "update-content" }, Ua = { class: "update-actions" }, Ee = 50, Pa = 6e4, Va = 30, Ra = /* @__PURE__ */ ue({
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
  setup(t, { emit: s }) {
    const a = t, n = s, { authState: w, logout: _, isLoading: M } = to(), {
      isSessionValid: W,
      sessionLossEvent: H,
      hasSessionLoss: m,
      canRetrySession: k,
      retrySession: p,
      clearSessionLoss: c
    } = lo(), N = () => {
      try {
        return co();
      } catch {
        return console.warn("[AIWorkspaceHeader] Pinia not initialized yet, using fallback state"), null;
      }
    }, f = () => {
      try {
        return typeof window < "u" ? !!window.__PINIA__ || !!window.Pinia : !1;
      } catch {
        return !1;
      }
    }, u = A(N()), L = q(() => !!u.value), P = A(0), b = () => {
      if (!u.value && P.value < Ee) {
        if (f()) {
          const o = N();
          if (o) {
            u.value = o, console.log("[AIWorkspaceHeader] Pinia store initialized successfully");
            return;
          }
        }
        P.value++, setTimeout(b, 100);
      } else
        P.value >= Ee && console.warn("[AIWorkspaceHeader] Pinia initialization failed after maximum retries, using fallback mode");
    };
    be(() => {
      u.value || b();
    });
    const g = A(!1), U = A(!1), v = A(!1), S = A([]), te = A([]), Y = A({
      name: "",
      email: "",
      avatar_url: null,
      initials: ""
    }), G = A("unknown"), O = A("unknown"), re = A(!1), j = A(null), E = A(null), x = A(!1), B = A([]), C = A([]), F = A(!1);
    pe(C, async (o) => {
      o.length > 0 && L.value && ee.value && await $();
    }, { immediate: !1 }), pe(() => window.location.pathname + window.location.search + window.location.hash, async () => {
      L.value && ee.value && await $();
    }, { immediate: !1 });
    const Z = A(window.location.pathname);
    pe(() => window.location.pathname, (o) => {
      Z.value = o;
    }, { immediate: !0 }), pe(L, (o) => {
      !o && P.value < Ee && b();
    });
    const ne = () => {
      try {
        const o = window.location.pathname.match(/\/single-workspace\/(\d+)/);
        if (o)
          return o[1];
        const r = new URLSearchParams(window.location.search).get("workspace_id");
        if (r)
          return r;
        const l = window.location.hash.match(/workspace_id=(\d+)/);
        return l ? l[1] : null;
      } catch (o) {
        return console.warn("[AIWorkspaceHeader] Error parsing URL for workspace_id:", o), null;
      }
    }, R = () => {
      try {
        return window.location.pathname.includes("/all-workspace/");
      } catch (o) {
        return console.warn("[AIWorkspaceHeader] Error checking all-workspace mode:", o), !1;
      }
    }, $ = async () => {
      if (!u.value || !L.value)
        return;
      const o = R();
      if (F.value = o, o) {
        u.value.currentWorkspace = null, localStorage.removeItem("current_workspace"), console.log("[AIWorkspaceHeader] Auto-selected all-workspace mode from URL");
        return;
      }
      const e = ne();
      if (e)
        try {
          C.value.length === 0 && await Ye();
          const r = C.value.find((l) => l.id.toString() === e);
          r ? (u.value.setCurrentWorkspace(r), console.log(`[AIWorkspaceHeader] Auto-selected workspace from URL: ${r.title} (ID: ${r.id})`), n("workspaceChange", r)) : console.warn(`[AIWorkspaceHeader] Workspace with ID ${e} not found in available workspaces`);
        } catch (r) {
          console.error("[AIWorkspaceHeader] Error auto-selecting workspace from URL:", r);
        }
    }, ee = q(() => w.value.isAuthenticated), se = q(() => u.value ? u.value.currentWorkspace : null), de = q(() => {
      try {
        return window.location.pathname.includes("shared-folder");
      } catch (o) {
        return console.warn("[AIWorkspaceHeader] Error checking shared-folder URL:", o), !1;
      }
    }), fe = A([
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
      { label: "AI Portfolios", key: "ai-portfolios", url: "/ai-portfolios" },
      { label: "AI Fund Analyst", key: "ai_fund_analyst", url: "/ai_fund_analyst" },
      { label: "Contacts", key: "contacts", url: "/contacts" },
      { label: "Settings", key: "settings", url: "/settings" }
    ]), hs = A([
      { label: "Dashboard", key: "dashboard", url: "/dashboard" },
      { label: "All Tasks", key: "tasks", url: "/tasks" },
      { label: "All Goals", key: "goals", url: "/goals" },
      { label: "All Events", key: "events", url: "/events" },
      { label: "All Drive", key: "files", url: "/files" },
      { label: "All Contacts", key: "contacts", url: "/contacts" },
      { label: "All Settings", key: "settings", url: "/settings" }
    ]), ze = q(() => F.value ? hs.value : fe.value), vs = q(() => {
      try {
        const o = Z.value;
        let e = "";
        const r = o.match(/\/all-workspace\/([^\/]+)/);
        if (r)
          e = r[1];
        else {
          const l = o.match(/\/single-workspace\/\d+\/([^\/]+)/);
          if (l)
            e = l[1];
          else {
            const V = o.match(/\/([^\/]+)$/);
            V && (e = V[1]);
          }
        }
        if (e) {
          const l = ze.value.find(
            (V) => V.key === e || V.url.includes(`/${e}`) || V.url === `/${e}`
          );
          if (l)
            return l.label;
        }
        return "Dashboard";
      } catch (o) {
        return console.warn("[AIWorkspaceHeader] Error determining current section:", o), "Dashboard";
      }
    }), ws = (o) => {
      const e = /* @__PURE__ */ new Map();
      o.forEach((V) => {
        e.set(V.id, { ...V, children: [] });
      });
      const r = [];
      e.forEach((V) => {
        V.parent_workspace_id && e.has(V.parent_workspace_id) ? e.get(V.parent_workspace_id).children.push(V) : r.push(V);
      });
      const l = (V) => {
        V.sort((Q, ce) => Q.title.localeCompare(ce.title)), V.forEach((Q) => {
          Q.children && l(Q.children);
        });
      };
      return l(r), r;
    }, Ke = (o, e = 0, r = []) => (o.forEach((l) => {
      r.push({ ...l, level: e }), l.children && l.children.length && Ke(l.children, e + 1, r);
    }), r), Ye = async () => {
      var o, e, r;
      try {
        const l = await ((o = u.value) == null ? void 0 : o.loadWorkspaces());
        if (B.value = ws(l || []), C.value = Ke(B.value), te.value = C.value, S.value = C.value, a.currentWorkspaceId) {
          const V = C.value.find((Q) => {
            var ce;
            return Q.id.toString() === ((ce = a.currentWorkspaceId) == null ? void 0 : ce.toString());
          });
          V && ((e = u.value) == null || e.setCurrentWorkspace(V));
        } else
          !se.value && C.value.length && ((r = u.value) == null || r.setCurrentWorkspace(C.value[0]));
      } catch (l) {
        console.error("loadWorkspaces (header) error", l);
      }
    }, ms = (o) => {
      if (console.log("Navigation command:", o), o === "all-workspace") {
        window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
        return;
      } else {
        const e = parseInt(o.replace("workspace-", ""));
        window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e}/dashboard`;
        return;
      }
    }, ks = (o) => {
      const e = se.value, r = F.value;
      switch (o.key) {
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
            const l = `https://app.aiworkspace.pro/all-workspace/${o.key}`;
            window.location.href = l;
          } else if (e) {
            const l = `https://app.aiworkspace.pro/single-workspace/${e.id}/${o.key}`;
            window.location.href = l;
          } else {
            const l = `https://app.aiworkspace.pro/${o.key}`;
            window.location.href = l;
          }
          break;
      }
    }, _s = (o) => {
      const e = se.value, r = F.value;
      switch (o.key) {
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
          return r ? `https://app.aiworkspace.pro/all-workspace/${o.key}` : e ? `https://app.aiworkspace.pro/single-workspace/${e.id}/${o.key}` : `https://app.aiworkspace.pro/${o.key}`;
      }
    }, Ce = (o) => {
      switch (o) {
        case "profile":
          a.onProfileClick ? a.onProfileClick() : z.info("Profile settings coming soon");
          break;
        case "workspaces":
          g.value = !0;
          break;
        case "logout":
          Ss();
          break;
      }
    }, Je = (o) => {
      var e;
      (e = u.value) == null || e.setCurrentWorkspace(o), g.value = !1, n("workspaceChange", o), z.success(`Switched to ${o.title}`);
    }, ys = () => {
      ns.prompt("Enter workspace name:", "Create New Workspace", {
        confirmButtonText: "Create",
        cancelButtonText: "Cancel",
        inputPattern: /\S/,
        inputErrorMessage: "Workspace name cannot be empty"
      }).then(({ value: o }) => {
        var r;
        const e = {
          id: Date.now(),
          title: o,
          description: "New workspace",
          archived: !1,
          created_by: "",
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          latest_activity: (/* @__PURE__ */ new Date()).toISOString(),
          hasAccess: !0,
          accessType: "edit"
        };
        S.value.push(e), (r = u.value) == null || r.setWorkspaces(S.value), Je(e), z.success(`Created workspace: ${o}`);
      }).catch(() => {
      });
    }, Ss = () => {
      ns.confirm(
        "Are you sure you want to sign out?",
        "Sign Out",
        {
          confirmButtonText: "Sign Out",
          cancelButtonText: "Cancel",
          type: "warning"
        }
      ).then(async () => {
        var o;
        (o = u.value) == null || o.clearData(), await _(), typeof window < "u" && window.dispatchEvent(new CustomEvent("session-logout-detected", {
          detail: { timestamp: /* @__PURE__ */ new Date(), source: "manual-logout" }
        })), n("logout"), z.success("Signed out successfully");
      }).catch(() => {
      });
    }, Me = async () => {
      var o, e;
      if (w.value.user) {
        const r = w.value.user;
        Y.value = {
          name: r.name || ((o = r.email) == null ? void 0 : o.split("@")[0]) || "User",
          email: r.email || "",
          avatar_url: r.avatar_url || null,
          initials: (r.name || ((e = r.email) == null ? void 0 : e.split("@")[0]) || "U").split(" ").map((l) => l[0]).join("").toUpperCase().substring(0, 2)
        }, a.showWorkspaceSelector && await Ye();
      }
    };
    pe(() => w.value.user, (o) => {
      var e;
      o ? Me() : (Y.value = { name: "", email: "", avatar_url: null, initials: "" }, (e = u.value) == null || e.clearData());
    }), pe(m, (o) => {
      o && ee.value && (console.log("[AIWorkspaceHeader] Session loss detected, showing modal"), v.value = !0);
    }), pe(() => a.currentWorkspaceId, (o) => {
      var e;
      if (o && C.value.length) {
        const r = C.value.find((l) => l.id.toString() === o.toString());
        r && ((e = u.value) == null || e.setCurrentWorkspace(r));
      }
    }), be(async () => {
      ee.value && (await Me(), await $()), await Ls(), as(), Ns();
    });
    const bs = async (o) => {
      console.log("Login successful:", o), U.value = !1, await Me(), n("login"), z.success("Welcome back!");
    }, As = async () => {
      console.log("[AIWorkspaceHeader] Retrying session..."), await p() ? (v.value = !1, c(), z.success("Session restored successfully!")) : z.error("Failed to restore session. Please log in again.");
    }, Es = () => {
      console.log("[AIWorkspaceHeader] Opening login modal from session loss"), v.value = !1, U.value = !0;
    }, Cs = () => {
      console.log("[AIWorkspaceHeader] Refreshing page due to session loss"), window.location.reload();
    }, Is = () => {
      P.value = 0, b(), z.success("Manual Pinia retry initiated.");
    }, Ls = async () => {
      try {
        const o = await fetch("/version.json");
        if (o.ok) {
          const e = o.headers.get("content-type");
          if (e && e.includes("application/json"))
            try {
              const r = await o.json();
              console.log("Version data received:", r), G.value = r.shortCommitHash || "unknown", O.value = r.fullCommitHash || "unknown", console.log("✅ Loaded commit hash from version.json:", G.value);
              return;
            } catch {
              console.log("Failed to parse version.json, trying fallback methods...");
            }
        }
        console.log("🔄 version.json not available, trying automatic detection..."), await qe();
      } catch (o) {
        console.log("Error loading version.json, trying automatic detection...", o), await qe();
      }
    }, Xe = async () => {
      try {
        let o = await Ze();
        if (o || (o = Qe()), o) {
          const e = await os(o);
          e && e !== O.value && (console.log("🔄 New commit detected:", O.value, "→", e), O.value !== "unknown" && !re.value && (re.value = !0, j.value = e));
        }
      } catch (o) {
        console.log("Error checking for new commits:", o);
      }
    }, qe = async () => {
      try {
        let o = await Ze();
        if (o || (o = Qe()), o) {
          const V = await os(o);
          if (V) {
            G.value = V.substring(0, 7), O.value = V, console.log("✅ Loaded commit hash from GitHub API:", G.value);
            return;
          }
        }
        const e = await Vs();
        if (e && e.version) {
          G.value = e.version, O.value = e.version, console.log("✅ Loaded version from package.json:", G.value);
          return;
        }
        const r = await Rs();
        if (r) {
          G.value = r, O.value = r, console.log("✅ Loaded version from build info:", G.value);
          return;
        }
        const l = Date.now().toString(36);
        G.value = l.substring(0, 7), O.value = l, console.log("✅ Using timestamp-based version:", G.value);
      } catch (o) {
        console.warn("❌ All automatic detection methods failed:", o), G.value = "unknown", O.value = "unknown";
      }
    }, Qe = () => {
      try {
        const o = window.location.hostname;
        if (o.includes("github.io")) {
          const e = o.split(".");
          if (e.length >= 3) {
            const r = e[0], l = window.location.pathname.split("/")[1] || "unknown";
            return console.log("✅ Detected GitHub Pages repo:", r, l), { owner: r, repo: l };
          }
        }
        return console.log("Could not detect repository from domain:", o), null;
      } catch (o) {
        return console.log("Error detecting repo from domain:", o), null;
      }
    }, Ze = async () => {
      try {
        const o = await fetch("/package.json");
        if (!o.ok)
          return console.log("package.json not found or not accessible"), null;
        const e = o.headers.get("content-type");
        if (!e || !e.includes("application/json"))
          return console.log("package.json returned non-JSON content (likely HTML), skipping GitHub API"), null;
        const r = await o.json();
        if (r.repository && r.repository.url) {
          const V = r.repository.url.match(/github\.com\/([^\/]+)\/([^\/]+)/);
          if (V)
            return console.log("✅ Found GitHub repo info:", V[1], V[2].replace(".git", "")), { owner: V[1], repo: V[2].replace(".git", "") };
        }
        return console.log("No valid GitHub repository found in package.json"), null;
      } catch (o) {
        return console.log("Could not get repo info from package.json:", o), null;
      }
    }, es = A(0), Ne = A(0), ss = A(Date.now()), Us = () => {
      const o = Date.now();
      o - ss.value > 60 * 60 * 1e3 && (Ne.value = 0, ss.value = o, console.log("🔄 GitHub API call counter reset"));
    }, Ps = () => {
      const o = uo();
      if (o)
        return o;
      if ({}.GITHUB_TOKEN)
        return {}.GITHUB_TOKEN;
      const e = localStorage.getItem("github_token");
      return e || null;
    }, os = async (o) => {
      var e;
      try {
        const r = Date.now();
        if (Us(), r - es.value < Pa)
          return console.log("⏳ GitHub API rate limit: waiting before next call"), null;
        if (Ne.value >= Va)
          return console.log("🚫 GitHub API hourly limit reached, skipping call"), null;
        const l = Ps(), V = {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "AIWorkspace-Header/1.0"
        };
        l ? (V.Authorization = `token ${l}`, console.log("🔑 Using GitHub token for authentication")) : console.log("⚠️ No GitHub token found, trying unauthenticated request");
        const Q = ["main", "master"];
        for (const ce of Q)
          try {
            const le = await fetch(`https://api.github.com/repos/${o.owner}/${o.repo}/commits/${ce}`, {
              headers: V
            });
            if (es.value = r, Ne.value++, le.ok) {
              const Ae = await le.json();
              return console.log("✅ GitHub API call successful:", Ae.sha.substring(0, 7)), Ae.sha;
            } else if (le.status === 403) {
              if ((e = (await le.json()).message) != null && e.includes("rate limit"))
                return console.log("🚫 GitHub API rate limit exceeded, will retry later"), null;
            } else {
              if (le.status === 404)
                return console.log("🚫 Repository not found or private (404). Consider adding a GitHub token."), null;
              if (le.status === 401)
                return console.log("🚫 Unauthorized (401). GitHub token may be invalid or expired."), null;
            }
          } catch (le) {
            console.log(`Failed to get commit from ${ce} branch:`, le);
          }
      } catch (r) {
        console.log("Could not get commit from GitHub API:", r);
      }
      return null;
    }, Vs = async () => {
      try {
        const o = await fetch("/package.json");
        if (!o.ok)
          return console.log("package.json not found or not accessible"), null;
        const e = o.headers.get("content-type");
        return !e || !e.includes("application/json") ? (console.log("package.json returned non-JSON content (likely HTML), skipping"), null) : await o.json();
      } catch (o) {
        console.log("Could not get package.json:", o);
      }
      return null;
    }, Rs = async () => {
      try {
        const o = ["/build-manifest.json", "/build-info.json", "/.next/build-manifest.json"];
        for (const e of o)
          try {
            const r = await fetch(e);
            if (r.ok) {
              const l = await r.json();
              if (l.version || l.commitHash || l.buildId)
                return l.version || l.commitHash || l.buildId;
            }
          } catch {
          }
      } catch (o) {
        console.log("Could not get build info:", o);
      }
      return null;
    }, Ms = async () => {
      try {
        if (O.value === "unknown") {
          z.warning("Version information not available");
          return;
        }
        await navigator.clipboard.writeText(O.value), z.success("Version information copied to clipboard!");
      } catch (o) {
        console.error("Failed to copy version info:", o), z.error("Failed to copy version info");
      }
    }, as = async () => {
      if (!x.value) {
        x.value = !0;
        try {
          const o = Date.now(), e = await fetch(`/version.json?t=${o}`);
          if (!e.ok)
            throw new Error("Failed to fetch version info");
          const r = e.headers.get("content-type");
          if (!r || !r.includes("application/json")) {
            console.warn("Version check skipped: version.json not properly configured");
            return;
          }
          const l = await e.json();
          j.value = l.fullCommitHash, O.value !== j.value && (re.value || (re.value = !0, console.log("Version mismatch detected:", {
            currentVersion: O.value,
            latestVersion: j.value,
            serverBuildTime: l.buildTime
          })));
        } catch (o) {
          console.error("Error checking for updates:", o);
        } finally {
          x.value = !1;
        }
      }
    }, Ns = () => {
      E.value = setInterval(() => {
        as(), Xe();
      }, 5 * 60 * 1e3);
    }, $s = () => {
      console.log("User reloaded for update:", {
        currentVersion: O.value,
        latestVersion: j.value
      }), window.location.reload();
    }, ts = () => {
      re.value = !1, console.log("Update alert dismissed:", {
        currentVersion: O.value,
        latestVersion: j.value
      });
    };
    return cs(() => {
      E.value && clearInterval(E.value);
    }), (o, e) => {
      const r = ie("el-icon"), l = ie("el-button"), V = ie("el-tag"), Q = ie("el-dropdown-item"), ce = ie("el-dropdown-menu"), le = ie("el-dropdown"), Ae = ie("el-dialog"), Ts = ie("el-alert");
      return y(), T(Ie, null, [
        i("header", Mo, [
          !L.value && P.value < Ee || D(M) ? (y(), T("div", No, [
            e[10] || (e[10] = Le('<div class="header-left" data-v-40c8a261><div class="logo-section" data-v-40c8a261><a href="/" class="logo" data-v-40c8a261><div class="text-logo" data-v-40c8a261><span class="logo-text" data-v-40c8a261>AI Workspace</span></div></a></div></div>', 1)),
            i("div", $o, [
              i("span", To, [
                D(M) ? (y(), T("span", Wo, "Syncing authentication...")) : (y(), T("span", Do, "Initializing..."))
              ])
            ])
          ])) : !L.value && P.value >= Ee ? (y(), T("div", xo, [
            e[12] || (e[12] = Le('<div class="header-left" data-v-40c8a261><div class="logo-section" data-v-40c8a261><a href="/" class="logo" data-v-40c8a261><div class="text-logo" data-v-40c8a261><span class="logo-text" data-v-40c8a261>AI Workspace</span></div></a></div></div>', 1)),
            i("div", { class: "header-center" }, [
              e[11] || (e[11] = i("span", { class: "fallback-text" }, "Header Ready (Fallback Mode)", -1)),
              i("button", {
                onClick: Is,
                class: "retry-button"
              }, "Retry Pinia")
            ]),
            e[13] || (e[13] = Le('<div class="header-right" data-v-40c8a261><div class="user-profile" data-v-40c8a261><div class="user-info" data-v-40c8a261><span class="user-name" data-v-40c8a261>User</span></div><div class="user-avatar" data-v-40c8a261><span class="avatar-placeholder" data-v-40c8a261>U</span></div></div></div>', 1))
          ])) : ee.value && !D(W) ? (y(), T("div", Ho, [
            e[16] || (e[16] = Le('<div class="header-left" data-v-40c8a261><div class="logo-section" data-v-40c8a261><a href="/" class="logo" data-v-40c8a261><div class="text-logo" data-v-40c8a261><span class="logo-text" data-v-40c8a261>AI Workspace</span></div></a></div></div>', 1)),
            i("div", Oo, [
              i("span", Bo, [
                h(r, null, {
                  default: d(() => [
                    h(D(us))
                  ]),
                  _: 1
                }),
                e[14] || (e[14] = J(" Session expired - Please log in again ", -1))
              ])
            ]),
            i("div", Fo, [
              h(l, {
                type: "primary",
                onClick: e[0] || (e[0] = (I) => U.value = !0)
              }, {
                default: d(() => [
                  h(r, null, {
                    default: d(() => [
                      h(D(Be))
                    ]),
                    _: 1
                  }),
                  e[15] || (e[15] = J(" Log In ", -1))
                ]),
                _: 1
              })
            ])
          ])) : ee.value && D(W) ? (y(), T("div", Go, [
            i("div", jo, [
              i("div", zo, [
                i("a", Ko, [
                  o.customLogo ? (y(), T("img", {
                    key: 0,
                    src: o.customLogo,
                    alt: "AIWorkspace",
                    class: "logo-image"
                  }, null, 8, Yo)) : (y(), T("div", Jo, [...e[17] || (e[17] = [
                    i("span", { class: "logo-text" }, "AI Workspace", -1)
                  ])]))
                ])
              ])
            ]),
            o.showSecondaryNavigation ? (y(), T("div", Xo, [
              i("nav", qo, [
                o.showWorkspaceSelector ? (y(), oe(le, {
                  key: 0,
                  onCommand: ms,
                  trigger: "hover"
                }, {
                  dropdown: d(() => [
                    h(ce, { class: "workspace-tree-dropdown" }, {
                      default: d(() => [
                        h(Q, {
                          command: "all-workspace",
                          class: $e({ active: F.value })
                        }, {
                          default: d(() => [
                            i("a", Zo, [
                              i("div", ea, [
                                e[19] || (e[19] = i("span", { class: "workspace-icon" }, "🌐", -1)),
                                e[20] || (e[20] = i("span", null, "All workspace", -1)),
                                F.value ? (y(), oe(V, {
                                  key: 0,
                                  size: "small",
                                  type: "success"
                                }, {
                                  default: d(() => [...e[18] || (e[18] = [
                                    J("Current", -1)
                                  ])]),
                                  _: 1
                                })) : X("", !0)
                              ])
                            ])
                          ]),
                          _: 1
                        }, 8, ["class"]),
                        C.value.length > 0 ? (y(), oe(Q, {
                          key: 0,
                          divided: "",
                          disabled: ""
                        })) : X("", !0),
                        (y(!0), T(Ie, null, Te(C.value, (I) => (y(), oe(Q, {
                          key: I.id,
                          command: `workspace-${I.id}`
                        }, {
                          default: d(() => {
                            var we;
                            return [
                              i("a", {
                                href: `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${I.id}/dashboard`,
                                class: "nav-link"
                              }, [
                                i("div", {
                                  class: "workspace-dropdown-item",
                                  style: Hs({ paddingLeft: (I.level || 0) * 16 + "px" })
                                }, [
                                  i("span", oa, K(I.children && I.children.length ? "📁" : "📄"), 1),
                                  i("span", null, K(I.title), 1),
                                  I.id === ((we = se.value) == null ? void 0 : we.id) ? (y(), oe(V, {
                                    key: 0,
                                    size: "small",
                                    type: "success"
                                  }, {
                                    default: d(() => [...e[21] || (e[21] = [
                                      J("Current", -1)
                                    ])]),
                                    _: 1
                                  })) : X("", !0)
                                ], 4)
                              ], 8, sa)
                            ];
                          }),
                          _: 2
                        }, 1032, ["command"]))), 128)),
                        C.value.length === 0 ? (y(), oe(Q, {
                          key: 1,
                          disabled: ""
                        }, {
                          default: d(() => [...e[22] || (e[22] = [
                            J(" No workspaces ", -1)
                          ])]),
                          _: 1
                        })) : X("", !0)
                      ]),
                      _: 1
                    })
                  ]),
                  default: d(() => {
                    var I;
                    return [
                      i("span", Qo, [
                        J(K(F.value ? "All workspace" : ((I = se.value) == null ? void 0 : I.title) || "Select Workspace") + " ", 1),
                        h(r, { class: "nav-arrow" }, {
                          default: d(() => [
                            h(D(is))
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }),
                  _: 1
                })) : X("", !0),
                o.showWorkspaceSelector ? (y(), T("span", aa, "/")) : X("", !0),
                o.showSecondaryNavigation ? (y(), oe(le, {
                  key: 2,
                  trigger: "hover"
                }, {
                  dropdown: d(() => [
                    h(ce, null, {
                      default: d(() => [
                        (y(!0), T(Ie, null, Te(ze.value, (I) => (y(), oe(Q, {
                          key: I.label,
                          class: $e({ active: I.active })
                        }, {
                          default: d(() => [
                            i("a", {
                              href: _s(I),
                              class: "nav-link",
                              onClick: ge((we) => ks(I), ["prevent"])
                            }, K(I.label), 9, ra)
                          ]),
                          _: 2
                        }, 1032, ["class"]))), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  default: d(() => [
                    i("span", ta, [
                      J(K(vs.value) + " ", 1),
                      h(r, { class: "nav-arrow" }, {
                        default: d(() => [
                          h(D(is))
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })) : X("", !0)
              ])
            ])) : X("", !0),
            i("div", na, [
              h(le, {
                onCommand: Ce,
                trigger: "click",
                placement: "bottom-end"
              }, {
                dropdown: d(() => [
                  h(ce, null, {
                    default: d(() => [
                      h(Q, null, {
                        default: d(() => [
                          i("a", {
                            href: "/profile",
                            class: "nav-link",
                            onClick: e[1] || (e[1] = ge((I) => Ce("profile"), ["prevent"]))
                          }, "Profile Settings")
                        ]),
                        _: 1
                      }),
                      o.showWorkspaceSelector ? (y(), oe(Q, { key: 0 }, {
                        default: d(() => [
                          i("a", {
                            href: "#switch-workspace",
                            class: "nav-link",
                            onClick: e[2] || (e[2] = ge((I) => Ce("workspaces"), ["prevent"]))
                          }, "Switch Workspace")
                        ]),
                        _: 1
                      })) : X("", !0),
                      h(Q, {
                        onClick: Ms,
                        class: "version-item"
                      }, {
                        default: d(() => [
                          i("div", fa, [
                            e[23] || (e[23] = i("span", { class: "version-label" }, "Version:", -1)),
                            i("span", ga, K(G.value), 1),
                            h(l, {
                              size: "small",
                              type: "text",
                              onClick: ge(Xe, ["stop"]),
                              class: "refresh-button",
                              loading: x.value
                            }, {
                              default: d(() => [
                                h(r, null, {
                                  default: d(() => [
                                    h(D(Oe))
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
                      h(Q, { divided: "" }, {
                        default: d(() => [
                          i("a", {
                            href: "#signout",
                            class: "nav-link",
                            onClick: e[3] || (e[3] = ge((I) => Ce("logout"), ["prevent"]))
                          }, "Sign Out")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                default: d(() => [
                  i("div", ia, [
                    i("div", la, [
                      i("span", ca, K(Y.value.name), 1)
                    ]),
                    i("div", ua, [
                      Y.value.avatar_url ? (y(), T("img", {
                        key: 0,
                        src: Y.value.avatar_url,
                        alt: Y.value.name
                      }, null, 8, da)) : (y(), T("span", pa, K(Y.value.initials), 1))
                    ])
                  ])
                ]),
                _: 1
              })
            ])
          ])) : (y(), T("div", ha, [
            i("div", va, [
              i("div", wa, [
                i("a", ma, [
                  o.customLogo ? (y(), T("img", {
                    key: 0,
                    src: o.customLogo,
                    alt: "AIWorkspace",
                    class: "logo-image"
                  }, null, 8, ka)) : (y(), T("div", _a, [...e[24] || (e[24] = [
                    i("span", { class: "logo-text" }, "AI Workspace", -1)
                  ])]))
                ])
              ])
            ]),
            e[26] || (e[26] = i("div", { class: "header-center" }, [
              i("span", { class: "welcome-text" }, "Welcome to AI Workspace")
            ], -1)),
            de.value ? X("", !0) : (y(), T("div", ya, [
              h(l, {
                type: "primary",
                size: "large",
                class: "login-button",
                onClick: e[4] || (e[4] = (I) => U.value = !0)
              }, {
                default: d(() => [
                  h(r, null, {
                    default: d(() => [
                      h(D(Be))
                    ]),
                    _: 1
                  }),
                  e[25] || (e[25] = J(" Login / Signup ", -1))
                ]),
                _: 1
              })
            ]))
          ])),
          ee.value && o.showWorkspaceSelector ? (y(), oe(Ae, {
            key: 5,
            modelValue: g.value,
            "onUpdate:modelValue": e[6] || (e[6] = (I) => g.value = I),
            title: "Switch Workspace",
            width: "500px",
            onClose: e[7] || (e[7] = (I) => g.value = !1)
          }, {
            footer: d(() => [
              h(l, {
                onClick: e[5] || (e[5] = (I) => g.value = !1)
              }, {
                default: d(() => [...e[27] || (e[27] = [
                  J("Cancel", -1)
                ])]),
                _: 1
              }),
              h(l, {
                type: "primary",
                onClick: ys
              }, {
                default: d(() => [...e[28] || (e[28] = [
                  J("Create New Workspace", -1)
                ])]),
                _: 1
              })
            ]),
            default: d(() => [
              i("div", Sa, [
                (y(!0), T(Ie, null, Te(S.value, (I) => {
                  var we, rs;
                  return y(), T("div", {
                    key: I.id,
                    class: $e(["workspace-item", { active: I.id === ((we = se.value) == null ? void 0 : we.id) }]),
                    onClick: (Da) => Je(I)
                  }, [
                    i("div", Aa, K(I.children && I.children.length ? "📁" : "📄"), 1),
                    i("div", Ea, [
                      i("h3", null, K(I.title), 1),
                      i("p", null, K(I.description), 1),
                      i("span", Ca, K(I.hasAccess ? "Active" : "Inactive"), 1)
                    ]),
                    I.id === ((rs = se.value) == null ? void 0 : rs.id) ? (y(), T("div", Ia, [
                      h(r, null, {
                        default: d(() => [
                          h(D(Js))
                        ]),
                        _: 1
                      })
                    ])) : X("", !0)
                  ], 10, ba);
                }), 128))
              ])
            ]),
            _: 1
          }, 8, ["modelValue"])) : X("", !0),
          h(ko, {
            modelValue: U.value,
            "onUpdate:modelValue": e[8] || (e[8] = (I) => U.value = I),
            onLoginSuccess: bs
          }, null, 8, ["modelValue"]),
          h(Ro, {
            modelValue: v.value,
            "onUpdate:modelValue": e[9] || (e[9] = (I) => v.value = I),
            "session-loss-event": D(H),
            "can-retry-session": D(k) || !1,
            onRetry: As,
            onLogin: Es,
            onRefresh: Cs
          }, null, 8, ["modelValue", "session-loss-event", "can-retry-session"])
        ]),
        re.value ? (y(), oe(Ts, {
          key: 0,
          title: "New Version Available!",
          type: "warning",
          closable: !0,
          onClose: ts,
          "show-icon": "",
          class: "update-alert"
        }, {
          default: d(() => [
            i("div", La, [
              e[31] || (e[31] = i("p", null, "A new version of the application is available. Please reload to get the latest updates and features.", -1)),
              i("div", Ua, [
                h(l, {
                  type: "primary",
                  size: "small",
                  onClick: $s
                }, {
                  default: d(() => [...e[29] || (e[29] = [
                    J(" Reload Now ", -1)
                  ])]),
                  _: 1
                }),
                h(l, {
                  size: "small",
                  onClick: ts
                }, {
                  default: d(() => [...e[30] || (e[30] = [
                    J(" Dismiss ", -1)
                  ])]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        })) : X("", !0)
      ], 64);
    };
  }
});
const rt = /* @__PURE__ */ Re(Ra, [["__scopeId", "data-v-40c8a261"]]), Ma = { class: "auth-callback" }, Na = /* @__PURE__ */ ue({
  __name: "AuthCallback",
  setup(t) {
    be(async () => {
      console.log("[AuthCallback] Component mounted, starting callback processing..."), console.log("[AuthCallback] Current URL:", window.location.href), console.log("[AuthCallback] Current hash:", window.location.hash);
      try {
        await new Promise((w) => setTimeout(w, 500));
        const { data: a, error: n } = await Pe.auth.getSession();
        if (n) {
          console.error("Error processing callback:", n), s();
          return;
        }
        if (a != null && a.session) {
          const w = a.session.user;
          console.log("OAuth login successful:", w.email), a.session.access_token && Se(_e, a.session.access_token), a.session.refresh_token && Se(ye, a.session.refresh_token), He();
          const _ = js();
          console.log("[callback] Post-login redirect URL:", _), console.log("[callback] Session storage redirect:", sessionStorage.getItem("post-login-redirect")), console.log("[callback] Local storage redirect:", localStorage.getItem("post-login-redirect"));
          const M = _ || "/";
          if (console.log("[callback] Final redirect URL:", M), M.startsWith("/")) {
            const W = window.location.origin, H = `${W}${M}`;
            console.log("[callback] redirecting to:", H, { hostname: window.location.hostname, origin: W }), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
              window.location.href = H;
            }, 100);
          } else
            console.log("[callback] redirecting to absolute URL:", M), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
              window.location.href = M;
            }, 100);
        } else
          s();
      } catch (a) {
        console.error("Error processing callback:", a), s();
      }
    });
    const s = () => {
      const n = window.location.href.replace("/auth/callback", "");
      window.location.href = n;
    };
    return (a, n) => (y(), T("div", Ma, [...n[0] || (n[0] = [
      i("div", { class: "callback-container" }, [
        i("div", { class: "loading-spinner" }, [
          i("div", { class: "spinner" })
        ]),
        i("h2", null, "Processing login..."),
        i("p", null, "Please wait while we complete your authentication.")
      ], -1)
    ])]));
  }
});
const nt = /* @__PURE__ */ Re(Na, [["__scopeId", "data-v-acdf6325"]]), he = class he {
  constructor() {
    me(this, "validationCache", /* @__PURE__ */ new Map());
    me(this, "CACHE_DURATION", fs().validationCacheDuration);
  }
  // Helper function to get cookie value
  getCookieValue(s) {
    var w;
    if (typeof document > "u")
      return null;
    const n = `; ${document.cookie}`.split(`; ${s}=`);
    return n.length === 2 && ((w = n.pop()) == null ? void 0 : w.split(";").shift()) || null;
  }
  static getInstance() {
    return he.instance || (he.instance = new he()), he.instance;
  }
  /**
   * Validate current session with caching and improved reliability
   */
  async validateSession(s = !1) {
    var n, w;
    const a = "session_validation";
    if (!s) {
      const _ = this.validationCache.get(a);
      if (_ && Date.now() - _.timestamp < this.CACHE_DURATION)
        return console.log("[SessionValidator] Using cached validation result"), _.result;
    }
    console.log("[SessionValidator] Validating session...");
    try {
      const _ = this.getCookieValue("sb-access-token"), M = this.getCookieValue("sb-refresh-token");
      if (!_ || !M) {
        const f = {
          isValid: !1,
          needsLogin: !0,
          error: "No authentication tokens found",
          canRetry: !1
        };
        return this.cacheResult(a, f), f;
      }
      const W = await ae();
      let H = null, m = null;
      for (let f = 1; f <= 2; f++)
        try {
          const u = await W.auth.getSession();
          H = u.data.session, m = u.error;
          break;
        } catch (u) {
          if (console.warn(`[SessionValidator] Network error on attempt ${f}:`, u), f === 2) {
            const L = {
              isValid: !1,
              needsLogin: !1,
              // Don't force login on network issues
              error: "Network error during validation",
              canRetry: !0
            };
            return this.cacheResult(a, L), L;
          }
          await new Promise((L) => setTimeout(L, 1e3));
        }
      if (m) {
        console.warn("[SessionValidator] Error getting session:", m);
        const u = {
          isValid: !1,
          needsLogin: ((n = m.message) == null ? void 0 : n.includes("Invalid JWT")) || ((w = m.message) == null ? void 0 : w.includes("JWT expired")),
          error: `Session error: ${m.message}`,
          canRetry: !0
        };
        return this.cacheResult(a, u), u;
      }
      if (!H || !H.user) {
        const f = {
          isValid: !1,
          needsLogin: !0,
          error: "No valid session found",
          canRetry: !0
        };
        return this.cacheResult(a, f), f;
      }
      const k = /* @__PURE__ */ new Date(), p = new Date(H.expires_at * 1e3), c = 5 * 60 * 1e3;
      if (k >= new Date(p.getTime() - c)) {
        const f = {
          isValid: !1,
          needsLogin: !0,
          error: "Session is close to expiry or expired",
          canRetry: !0
        };
        return this.cacheResult(a, f), f;
      }
      const N = {
        isValid: !0,
        needsLogin: !1,
        canRetry: !1
      };
      return this.cacheResult(a, N), N;
    } catch (_) {
      console.error("[SessionValidator] Error validating session:", _);
      const M = {
        isValid: !1,
        needsLogin: !1,
        // Don't force login on unexpected errors
        error: `Validation error: ${_}`,
        canRetry: !0
      };
      return this.cacheResult(a, M), M;
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
      const n = await ae(), { data: w, error: _ } = await n.auth.setSession({
        access_token: s,
        refresh_token: a
      });
      return _ ? (console.warn("[SessionValidator] Error restoring session:", _), {
        isValid: !1,
        needsLogin: !0,
        error: `Restoration error: ${_.message}`,
        canRetry: !0
      }) : w.session && w.session.user ? (console.log("[SessionValidator] Session restored successfully"), this.clearCache(), {
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
me(he, "instance");
let Fe = he;
const je = Fe.getInstance(), $a = (t = !1) => je.validateSession(t), Ta = () => je.restoreSession(), Wa = () => je.clearCache();
async function it() {
  console.log("[SessionValidator] Initializing session validation...");
  let t = await $a();
  return !t.isValid && t.canRetry && (console.log("[SessionValidator] Attempting session restoration..."), t = await Ta()), t;
}
function lt() {
  if (typeof window > "u")
    return () => {
    };
  const t = () => {
    console.log("[SessionValidator] Network restored, clearing cache for revalidation"), Wa();
  }, s = () => {
    console.log("[SessionValidator] Network lost, session validation may fail");
  };
  return window.addEventListener("online", t), window.addEventListener("offline", s), () => {
    window.removeEventListener("online", t), window.removeEventListener("offline", s);
  };
}
function gs() {
  let t = "", s = "", a = "";
  {
    const n = { VITE_APEX_DOMAIN: "aiworkspace.pro", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1, SUPABASE_URL: void 0, SUPABASE_ANON_KEY: void 0 };
    t = n.VITE_SUPABASE_URL || n.SUPABASE_URL || "", s = n.VITE_SUPABASE_ANON_KEY || n.SUPABASE_ANON_KEY || "", a = n.VITE_APEX_DOMAIN;
  }
  if ((!t || !s) && typeof process < "u" && process.env && (t = t || process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || "", s = s || process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || "", a = a || process.env.VITE_APEX_DOMAIN || process.env.APEX_DOMAIN || ""), (!t || !s) && typeof window < "u") {
    const n = window;
    t = t || n.__SUPABASE_URL__ || "", s = s || n.__SUPABASE_ANON_KEY__ || "", a = a || n.__APEX_DOMAIN__ || "";
  }
  return t && s ? {
    supabaseUrl: t,
    supabaseAnonKey: s,
    apexDomain: a
  } : null;
}
function ct() {
  const t = gs();
  t ? import("./supabase-510327ca.mjs").then((s) => s.e).then(({ configureSupabase: s }) => {
    s({
      url: t.supabaseUrl,
      anonKey: t.supabaseAnonKey
    }), console.log("[EnvConfig] Auto-configured Supabase from environment variables");
  }).catch((s) => {
    console.warn("[EnvConfig] Failed to auto-configure Supabase:", s);
  }) : console.warn("[EnvConfig] No valid environment configuration found");
}
function ut() {
  const t = gs();
  console.log("[EnvConfig] Debug info:", {
    config: t,
    importMetaEnv: { VITE_APEX_DOMAIN: "aiworkspace.pro", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1, SUPABASE_URL: void 0, SUPABASE_ANON_KEY: void 0 },
    processEnv: typeof process < "u" ? {
      SUPABASE_URL: !!process.env.SUPABASE_URL,
      SUPABASE_ANON_KEY: !!process.env.SUPABASE_ANON_KEY,
      VITE_SUPABASE_URL: !!process.env.VITE_SUPABASE_URL,
      VITE_SUPABASE_ANON_KEY: !!process.env.VITE_SUPABASE_ANON_KEY
    } : "N/A"
  });
}
export {
  _e as ACCESS_COOKIE,
  rt as AIWorkspaceHeader,
  nt as AuthCallback,
  kt as LS_ACCESS_KEY,
  _t as LS_REFRESH_KEY,
  ko as LoginModal,
  Ve as PackageError,
  ye as REFRESH_COOKIE,
  Ro as SessionLossModal,
  Fe as SessionValidator,
  ct as autoConfigureFromEnv,
  yt as buildOAuthRedirectUrl,
  xe as clearLocalStorageTokens,
  Wa as clearSessionCache,
  ke as clearSessionCookie,
  at as configureGitHub,
  ft as configureSupabase,
  no as conservativeConfig,
  Za as createSessionConfig,
  ut as debugEnvConfig,
  rt as default,
  ve as defaultSessionConfig,
  ot as detectionScenarios,
  ds as developmentConfig,
  St as ensureCrossSubdomainCookies,
  ro as fastDetectionConfig,
  et as getConfigByPreset,
  bt as getCookie,
  uo as getGitHubToken,
  js as getPostLoginBase,
  fs as getSessionConfig,
  ae as getSupabase,
  oo as handleBundlingError,
  gt as handleDomainChangeAuth,
  Gs as initializeCrossSubdomainAuth,
  it as initializeSessionValidation,
  tt as isGitHubConfigured,
  gs as loadEnvConfig,
  ps as productionConfig,
  ht as restoreCrossSubdomainSession,
  Ta as restoreSession,
  De as restoreSessionWithRetry,
  ja as safeExecute,
  za as safeExecuteAsync,
  Ya as safeGetCookie,
  Xa as safeGetLocalStorage,
  Ka as safeImport,
  Ja as safeSetCookie,
  qa as safeSetLocalStorage,
  Qa as safeWindowOperation,
  io as sessionConfigPresets,
  je as sessionValidator,
  Se as setSessionCookie,
  vt as setupAuthStateListener,
  ao as setupGlobalErrorHandler,
  wt as setupImmediateCrossSubdomainAuth,
  lt as setupNetworkAwareValidation,
  Et as setupUniversalCallback,
  Pe as supabase,
  He as syncCookiesToLocalStorage,
  st as timingInfo,
  po as useAuth,
  to as useEnhancedAuth,
  lo as useSessionMonitor,
  co as useWorkspaceStore,
  $a as validateSession
};
