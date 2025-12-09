var Oo = Object.defineProperty;
var Bo = (o, s, a) => s in o ? Oo(o, s, { enumerable: !0, configurable: !0, writable: !0, value: a }) : o[s] = a;
var ke = (o, s, a) => (Bo(o, typeof s != "symbol" ? s + "" : s, a), a);
import { defineComponent as de, openBlock as _, createElementBlock as x, createElementVNode as n, ref as C, computed as Y, onMounted as Ee, onUnmounted as ho, watch as fe, reactive as Fo, resolveComponent as ie, createBlock as Z, withCtx as f, toDisplayString as J, createVNode as w, unref as W, withModifiers as ue, createCommentVNode as j, createTextVNode as Q, Fragment as Re, createStaticVNode as Ve, normalizeClass as $e, renderList as We, normalizeStyle as jo } from "vue";
import { ElForm as zo, ElMessage as K, ElDialog as Ko, ElIcon as Ue, ElButton as Ne, ElProgress as Yo, ElMessageBox as po } from "element-plus";
import { i as qo, g as ee, r as Ge, s as Te } from "./supabase-667a6377.mjs";
import { c as ya, h as ba, b as Sa, d as Ca, a as Ea } from "./supabase-667a6377.mjs";
import { clearSessionCookie as _e, ACCESS_COOKIE as ye, REFRESH_COOKIE as be, clearLocalStorageTokens as Oe, setSessionCookie as Se, syncCookiesToLocalStorage as Be, getPostLoginBase as Jo } from "./utils/authRedirect.js";
import { LS_ACCESS_KEY as Ia, LS_REFRESH_KEY as La, buildOAuthRedirectUrl as Ha, ensureCrossSubdomainCookies as Ra, getCookie as Va } from "./utils/authRedirect.js";
import { defineStore as Xo } from "pinia";
import { setupUniversalCallback as Ta } from "./utils/universalCallback.js";
/*! Element Plus Icons Vue v2.3.2 */
var Qo = /* @__PURE__ */ de({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(o) {
    return (s, a) => (_(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      n("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"
      })
    ]));
  }
}), fo = Qo, Zo = /* @__PURE__ */ de({
  name: "Check",
  __name: "check",
  setup(o) {
    return (s, a) => (_(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      n("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      })
    ]));
  }
}), es = Zo, os = /* @__PURE__ */ de({
  name: "Lock",
  __name: "lock",
  setup(o) {
    return (s, a) => (_(), x("svg", {
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
}), go = os, ss = /* @__PURE__ */ de({
  name: "Message",
  __name: "message",
  setup(o) {
    return (s, a) => (_(), x("svg", {
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
}), ts = ss, as = /* @__PURE__ */ de({
  name: "Refresh",
  __name: "refresh",
  setup(o) {
    return (s, a) => (_(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      n("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), Fe = as, rs = /* @__PURE__ */ de({
  name: "User",
  __name: "user",
  setup(o) {
    return (s, a) => (_(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      n("path", {
        fill: "currentColor",
        d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"
      })
    ]));
  }
}), je = rs, ns = /* @__PURE__ */ de({
  name: "Warning",
  __name: "warning",
  setup(o) {
    return (s, a) => (_(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      n("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"
      })
    ]));
  }
}), wo = ns;
class Pe extends Error {
  constructor(a, i = {}, g) {
    super(a);
    ke(this, "context");
    ke(this, "originalError");
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
      throw new Pe(
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
    throw new Pe(
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
    throw new Pe(
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
  throw new Pe(
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
  const o = C({
    user: null,
    isAuthenticated: !1,
    isLoading: !0,
    error: null
  }), s = C(null), a = Y(() => o.value.isAuthenticated), i = Y(() => o.value.user), g = Y(() => o.value.isLoading), k = async () => {
    var d, c, u, D, y, p, R, U, S, v, V, m, b, ae, X, F, G, re, z, L, N;
    try {
      console.log("[auth][enhanced] Starting loadUserInfo..."), console.log("[auth][enhanced] Ensuring cross-subdomain cookie synchronization...");
      const O = "sb-access-token", H = "sb-refresh-token", B = (P) => {
        try {
          const M = location.hostname;
          if (M === "localhost" || /^\d+\.\d+\.\d+\.\d+$/.test(M)) {
            console.log("[auth][enhanced] Skipping cookie sync for localhost");
            return;
          }
          const se = "aiworkspace.pro";
          if (!M.endsWith(`.${se}`) && M !== se) {
            console.log("[auth][enhanced] Skipping cookie sync - not under apex domain");
            return;
          }
          console.log("[auth][enhanced] Performing cookie synchronization"), P.forEach((te) => {
            const pe = document.cookie.split(";").find((ge) => ge.trim().startsWith(te + "="));
            if (pe) {
              console.log(`[auth][enhanced] Found cookie: ${te}`);
              const ge = pe.split("=")[1];
              ge && (document.cookie = `${te}=${ge}; domain=.${se}; path=/; secure; samesite=lax`);
            }
          });
        } catch (M) {
          console.warn("[auth][enhanced] Error in cookie sync:", M);
        }
      };
      B([O, H]), await new Promise((P) => setTimeout(P, 50)), B([O, H]), await new Promise((P) => setTimeout(P, 50));
      let oe = null;
      try {
        const M = await (await ee()).auth.getSession();
        oe = (d = M == null ? void 0 : M.data) == null ? void 0 : d.session;
      } catch (P) {
        console.warn("[auth][enhanced] Error getting Supabase session:", P);
      }
      if (oe && oe.user) {
        console.log("[auth][enhanced] Active Supabase session found");
        const P = oe.user, M = {
          id: P.id,
          name: ((c = P.user_metadata) == null ? void 0 : c.name) || ((u = P.user_metadata) == null ? void 0 : u.user_name) || ((D = P.user_metadata) == null ? void 0 : D.full_name) || ((y = P.email) == null ? void 0 : y.split("@")[0]) || "User",
          email: P.email,
          avatar_url: ((p = P.user_metadata) == null ? void 0 : p.avatar_url) || null,
          user_metadata: P.user_metadata
        };
        return o.value = {
          user: M,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, s.value = {
          user: M,
          access_token: oe.access_token,
          refresh_token: oe.refresh_token
        }, { user: M, session: s.value, error: null };
      }
      console.log("[auth][enhanced] No active session, attempting to restore from cookies...");
      const ne = await Ge();
      if (ne.success && ne.session) {
        console.log("[auth][enhanced] Session restored successfully from cookies");
        const P = ne.session.user, M = {
          id: P.id,
          name: ((R = P.user_metadata) == null ? void 0 : R.name) || ((U = P.user_metadata) == null ? void 0 : U.user_name) || ((S = P.user_metadata) == null ? void 0 : S.full_name) || ((v = P.email) == null ? void 0 : v.split("@")[0]) || "User",
          email: P.email,
          avatar_url: ((V = P.user_metadata) == null ? void 0 : V.avatar_url) || null,
          user_metadata: P.user_metadata
        };
        return o.value = {
          user: M,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, s.value = ne.session, { user: M, session: s.value, error: null };
      } else {
        console.log("[auth][enhanced] Failed to restore session:", ne.error), console.log("[auth][enhanced] Retrying session restoration with extended delay..."), await new Promise((M) => setTimeout(M, 500)), B([O, H]);
        const P = await Ge();
        if (P.success && P.session) {
          console.log("[auth][enhanced] Session restored on retry");
          const M = P.session.user, se = {
            id: M.id,
            name: ((m = M.user_metadata) == null ? void 0 : m.name) || ((b = M.user_metadata) == null ? void 0 : b.user_name) || ((ae = M.user_metadata) == null ? void 0 : ae.full_name) || ((X = M.email) == null ? void 0 : X.split("@")[0]) || "User",
            email: M.email,
            avatar_url: ((F = M.user_metadata) == null ? void 0 : F.avatar_url) || null,
            user_metadata: M.user_metadata
          };
          return o.value = {
            user: se,
            isAuthenticated: !0,
            isLoading: !1,
            error: null
          }, s.value = P.session, { user: se, session: s.value, error: null };
        }
      }
    } catch (O) {
      console.error("Error getting Supabase session:", O), O instanceof Error && is(O, {
        component: "useEnhancedAuth",
        function: "loadUserInfo",
        operation: "session_validation"
      });
      try {
        const H = await Ge();
        if (H.success && H.session) {
          console.log("[auth][enhanced] Session restored after error");
          const B = H.session.user, oe = {
            id: B.id,
            name: ((G = B.user_metadata) == null ? void 0 : G.name) || ((re = B.user_metadata) == null ? void 0 : re.user_name) || ((z = B.user_metadata) == null ? void 0 : z.full_name) || ((L = B.email) == null ? void 0 : L.split("@")[0]) || "User",
            email: B.email,
            avatar_url: ((N = B.user_metadata) == null ? void 0 : N.avatar_url) || null,
            user_metadata: B.user_metadata
          };
          return o.value = {
            user: oe,
            isAuthenticated: !0,
            isLoading: !1,
            error: null
          }, s.value = H.session, { user: oe, session: s.value, error: null };
        }
      } catch (H) {
        console.error("Error restoring session:", H);
      }
    }
    return console.log("[auth][enhanced] No valid authentication found"), o.value = {
      user: null,
      isAuthenticated: !1,
      isLoading: !1,
      error: "No valid session found"
    }, s.value = null, { user: null, session: null, error: "No valid session found" };
  }, I = async () => {
    try {
      await (await ee()).auth.signOut(), _e(ye), _e(be), Oe(), o.value = {
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
  }, E = async (d, c) => {
    var u, D, y, p, R;
    try {
      o.value.isLoading = !0;
      const U = await ee(), { data: S, error: v } = await U.auth.signInWithPassword({
        email: d,
        password: c
      });
      if (v)
        throw v;
      if (S.session) {
        const V = S.session.user, m = {
          id: V.id,
          name: ((u = V.user_metadata) == null ? void 0 : u.name) || ((D = V.user_metadata) == null ? void 0 : D.user_name) || ((y = V.user_metadata) == null ? void 0 : y.full_name) || ((p = V.email) == null ? void 0 : p.split("@")[0]) || "User",
          email: V.email,
          avatar_url: ((R = V.user_metadata) == null ? void 0 : R.avatar_url) || null,
          user_metadata: V.user_metadata
        };
        return o.value = {
          user: m,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, s.value = {
          user: m,
          access_token: S.session.access_token,
          refresh_token: S.session.refresh_token
        }, { user: m, session: s.value, error: null };
      }
      return { user: null, session: null, error: "No session returned" };
    } catch (U) {
      return console.error("Sign in error:", U), o.value.isLoading = !1, { user: null, session: null, error: String(U) };
    }
  }, $ = async (d, c, u) => {
    var D, y, p, R, U;
    try {
      o.value.isLoading = !0;
      const S = await ee(), { data: v, error: V } = await S.auth.signUp({
        email: d,
        password: c,
        options: {
          data: u
        }
      });
      if (V)
        throw V;
      if (v.session) {
        const m = v.session.user, b = {
          id: m.id,
          name: ((D = m.user_metadata) == null ? void 0 : D.name) || ((y = m.user_metadata) == null ? void 0 : y.user_name) || ((p = m.user_metadata) == null ? void 0 : p.full_name) || ((R = m.email) == null ? void 0 : R.split("@")[0]) || "User",
          email: m.email,
          avatar_url: ((U = m.user_metadata) == null ? void 0 : U.avatar_url) || null,
          user_metadata: m.user_metadata
        };
        return o.value = {
          user: b,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, s.value = {
          user: b,
          access_token: v.session.access_token,
          refresh_token: v.session.refresh_token
        }, { user: b, session: s.value, error: null };
      }
      return { user: null, session: null, error: "No session returned" };
    } catch (S) {
      return console.error("Sign up error:", S), o.value.isLoading = !1, { user: null, session: null, error: String(S) };
    }
  }, h = async () => {
    await k();
  };
  return Ee(async () => {
    await qo(), await h();
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
    logout: I,
    signIn: E,
    signUp: $,
    checkAuth: h
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
}, us = {
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
}, ds = {
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
}, vo = {
  ...ve,
  normalCheckInterval: 1e4,
  // 10 seconds - faster for testing
  fastCheckInterval: 2e3,
  // 2 seconds - very fast for testing
  fastMonitoringDuration: 3e4,
  // 30 seconds - shorter for testing
  validationCacheDuration: 1e3
  // 1 second cache for testing
}, mo = {
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
function ko() {
  switch ("production") {
    case "production":
      return mo;
    case "development":
      return vo;
    default:
      return ve;
  }
}
function ia(o) {
  return {
    ...ve,
    ...o
  };
}
const ps = {
  default: ve,
  fast: us,
  conservative: ds,
  development: vo,
  production: mo
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
  const s = C(!0), a = C(null), i = C(!1), g = C(!1), k = C(null), I = C(null), E = C(null), $ = { ...ko(), ...o }, h = $.normalCheckInterval, d = $.fastCheckInterval, c = $.fastMonitoringDuration, u = $.maxRetryAttempts, D = $.retryDelay, y = Y(() => !s.value && a.value !== null), p = Y(
    () => {
      var L, N;
      return ((L = a.value) == null ? void 0 : L.canRetry) && ((N = a.value) == null ? void 0 : N.type) !== "manual_check_failed";
    }
  ), R = (L) => {
    var H;
    if (typeof document > "u")
      return null;
    const O = `; ${document.cookie}`.split(`; ${L}=`);
    return O.length === 2 && ((H = O.pop()) == null ? void 0 : H.split(";").shift()) || null;
  }, U = async () => {
    var L, N;
    try {
      console.log("[SessionMonitor] Validating session...");
      const O = R("sb-access-token"), H = R("sb-refresh-token");
      if (!O || !H)
        return console.log("[SessionMonitor] No tokens found in cookies"), !1;
      const B = await ee();
      let oe = null, ne = null;
      for (let te = 1; te <= 2; te++)
        try {
          const pe = await B.auth.getSession();
          oe = pe.data.session, ne = pe.error;
          break;
        } catch (pe) {
          if (console.warn(`[SessionMonitor] Network error on attempt ${te}:`, pe), te === 2)
            return console.log("[SessionMonitor] Network issues detected, maintaining current session state"), s.value;
          await new Promise((ge) => setTimeout(ge, 1e3));
        }
      if (ne)
        return console.warn("[SessionMonitor] Error getting session:", ne), (L = ne.message) != null && L.includes("Invalid JWT") || (N = ne.message) != null && N.includes("JWT expired") ? !1 : s.value;
      if (!oe || !oe.user)
        return console.log("[SessionMonitor] No valid session found"), !1;
      const P = /* @__PURE__ */ new Date(), M = new Date(oe.expires_at * 1e3), se = 5 * 60 * 1e3;
      return P >= new Date(M.getTime() - se) ? (console.log("[SessionMonitor] Session is close to expiry or expired"), !1) : (console.log("[SessionMonitor] Session is valid"), k.value = /* @__PURE__ */ new Date(), !0);
    } catch (O) {
      return console.error("[SessionMonitor] Error validating session:", O), s.value;
    }
  }, S = async () => {
    try {
      console.log("[SessionMonitor] Attempting to restore session...");
      const L = R("sb-access-token"), N = R("sb-refresh-token");
      if (!L || !N)
        return console.log("[SessionMonitor] No tokens available for restoration"), !1;
      const O = await ee(), { data: H, error: B } = await O.auth.setSession({
        access_token: L,
        refresh_token: N
      });
      return B ? (console.warn("[SessionMonitor] Error restoring session:", B), !1) : H.session && H.session.user ? (console.log("[SessionMonitor] Session restored successfully"), k.value = /* @__PURE__ */ new Date(), !0) : !1;
    } catch (L) {
      return console.error("[SessionMonitor] Error restoring session:", L), !1;
    }
  }, v = (L, N, O = !0) => {
    console.warn("[SessionMonitor] Session loss detected:", { type: L, message: N }), s.value = !1, a.value = {
      type: L,
      message: N,
      timestamp: /* @__PURE__ */ new Date(),
      canRetry: O
    };
  }, V = async () => {
    console.log("[SessionMonitor] Retrying session validation...");
    for (let L = 1; L <= u; L++) {
      if (console.log(`[SessionMonitor] Retry attempt ${L}/${u}`), L > 1 && await new Promise((H) => setTimeout(H, D)), await S() && await U())
        return console.log("[SessionMonitor] Session restored and validated successfully"), s.value = !0, a.value = null, !0;
      if (await U())
        return console.log("[SessionMonitor] Session validated successfully on retry"), s.value = !0, a.value = null, !0;
    }
    return console.log("[SessionMonitor] All retry attempts failed"), !1;
  }, m = () => {
    console.log("[SessionMonitor] Clearing session loss state"), s.value = !0, a.value = null;
  }, b = () => {
    if (i.value) {
      console.log("[SessionMonitor] Already monitoring, skipping start");
      return;
    }
    console.log("[SessionMonitor] Starting session monitoring..."), i.value = !0, setTimeout(async () => {
      console.log("[SessionMonitor] Performing initial session validation..."), await U() ? console.log("[SessionMonitor] Initial validation successful") : (console.log("[SessionMonitor] Initial validation failed, but waiting for confirmation..."), setTimeout(async () => {
        await U() || v("session_expired", "Your session has expired. Please log in again.", !0);
      }, 3e3));
    }, 2e3), I.value = setInterval(async () => {
      console.log("[SessionMonitor] Periodic session check...");
      const L = await U();
      !L && s.value ? (console.log("[SessionMonitor] Session validation failed, performing confirmation check..."), setTimeout(async () => {
        await U() || v("session_expired", "Your session has expired. Please log in again.", !0);
      }, 2e3)) : L && !s.value && (console.log("[SessionMonitor] Session recovered"), m());
    }, h);
  }, ae = () => {
    if (g.value) {
      console.log("[SessionMonitor] Fast monitoring already active");
      return;
    }
    console.log("[SessionMonitor] Starting fast monitoring (5s intervals)..."), g.value = !0, E.value && clearInterval(E.value), E.value = setInterval(async () => {
      console.log("[SessionMonitor] Fast session check...");
      const L = await U();
      !L && s.value ? (console.log("[SessionMonitor] Fast monitoring detected potential session loss, confirming..."), setTimeout(async () => {
        await U() || (v("session_expired", "Your session has expired. Please log in again.", !0), X());
      }, 1e3)) : L && !s.value && (console.log("[SessionMonitor] Session recovered"), m(), X());
    }, d), setTimeout(() => {
      g.value && (console.log(`[SessionMonitor] Auto-stopping fast monitoring after ${c / 1e3} seconds`), X());
    }, c);
  }, X = () => {
    g.value && (console.log("[SessionMonitor] Stopping fast monitoring..."), g.value = !1, E.value && (clearInterval(E.value), E.value = null));
  }, F = () => {
    i.value && (console.log("[SessionMonitor] Stopping session monitoring..."), i.value = !1, I.value && (clearInterval(I.value), I.value = null), X());
  }, G = async () => {
    console.log("[SessionMonitor] Manual session check requested");
    const L = await U();
    return !L && !await S() ? (v("manual_check_failed", "Session validation failed. Please log in again.", !1), !1) : L;
  }, re = () => {
    console.log("[SessionMonitor] Network error detected, but not triggering immediate session loss"), s.value || v("network_error", "Network connection lost. Please check your internet connection and try again.", !0);
  }, z = () => {
    if (typeof window > "u")
      return;
    const L = () => {
      var H;
      console.log("[SessionMonitor] Network connection restored"), y.value && ((H = a.value) == null ? void 0 : H.type) === "network_error" && setTimeout(() => V(), 1e3);
    }, N = () => {
      console.log("[SessionMonitor] Network connection lost"), re();
    }, O = (H) => {
      console.log("[SessionMonitor] Logout detected, starting fast monitoring for immediate detection"), ae();
    };
    return window.addEventListener("online", L), window.addEventListener("offline", N), window.addEventListener("session-logout-detected", O), () => {
      window.removeEventListener("online", L), window.removeEventListener("offline", N), window.removeEventListener("session-logout-detected", O);
    };
  };
  return Ee(() => {
    console.log("[SessionMonitor] Mounted, setting up monitoring"), b(), z();
  }), ho(() => {
    console.log("[SessionMonitor] Unmounted, cleaning up"), F();
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
    restoreSession: S,
    retrySession: V,
    clearSessionLoss: m,
    startMonitoring: b,
    stopMonitoring: F,
    startFastMonitoring: ae,
    stopFastMonitoring: X,
    checkSession: G,
    handleNetworkError: re
  };
}
const gs = Xo("workspace", () => {
  const o = C(null), s = C([]), a = C(null), i = (h) => {
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
        const { data: { user: d } } = await Te.auth.getUser();
        if (!d)
          return [];
        let c = Te.from("workspaces").select(`
          id, title, description, parent_workspace_id, created_by, archived, created_at, git_repo, 
          workspace_access!inner ( access_type, shared_with_user_id ),
          workspace_activities!left ( updated_at )
        `).eq("workspace_access.shared_with_user_id", d.id);
        h || (c = c.eq("archived", !1));
        const { data: u, error: D } = await c;
        if (D)
          throw D;
        const y = /* @__PURE__ */ new Map();
        (u || []).forEach((v) => {
          (v.workspace_access || []).forEach((V) => {
            V.shared_with_user_id === d.id && y.set(v.id, V);
          });
        });
        const p = [...new Set(
          (u || []).filter((v) => v.parent_workspace_id).map((v) => v.parent_workspace_id).filter((v) => !y.has(v))
        )];
        let R = [];
        if (p.length) {
          let v = Te.from("workspaces").select("id, title, description, parent_workspace_id, created_by, archived, created_at").in("id", p);
          h || (v = v.eq("archived", !1));
          const { data: V, error: m } = await v;
          if (m)
            throw m;
          R = V || [];
        }
        const S = [...u || [], ...R].map((v) => {
          var V, m, b;
          return {
            id: v.id,
            title: v.title,
            description: v.description || "No description",
            parent_workspace_id: v.parent_workspace_id,
            created_by: v.created_by,
            archived: v.archived,
            created_at: v.created_at,
            latest_activity: ((m = (V = v.workspace_activities) == null ? void 0 : V[0]) == null ? void 0 : m.updated_at) || v.created_at,
            hasAccess: y.has(v.id),
            accessType: ((b = y.get(v.id)) == null ? void 0 : b.access_type) || null
          };
        });
        return S.sort((v, V) => new Date(V.latest_activity) - new Date(v.latest_activity)), g(S), S;
      } catch (d) {
        return console.error("loadWorkspaces error", d), [];
      }
    }
  };
});
let Ce = null;
const ze = (o) => !(!o || typeof o != "string" || o.trim().length === 0 || o.trim().length < 20), hs = async () => {
  try {
    const { createClient: o } = await import("@supabase/supabase-js"), s = { VITE_SUPABASE_URL: void 0, VITE_SUPABASE_ANON_KEY: void 0, BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_SUPABASE_SERVICE_ROLE_KEY || { VITE_SUPABASE_URL: void 0, VITE_SUPABASE_ANON_KEY: void 0, BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_SUPABASE_SERVICE_KEY || window.__SUPABASE_SERVICE_KEY__;
    return s ? (console.log("[GitHub Config] Using service role key for settings access"), o(
      "https://sb.aiworkspace.pro",
      s
    )) : (console.log("[GitHub Config] No service key found, using regular client"), await ee());
  } catch (o) {
    return console.warn("[GitHub Config] Failed to create admin client, using regular client:", o), await ee();
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
        if (c && ze(c))
          return console.log("🔧 GitHub token found in general query!"), console.log("Token preview:", c.substring(0, 8) + "..." + c.substring(c.length - 4)), console.log("Token length:", c.length), console.log("Token starts with:", c.substring(0, 4)), c;
      }
    }
    const { data: I, error: E, count: $ } = await s.from("settings").select("key_value", { count: "exact" }).eq("key_name", "github_token");
    if (console.log("[GitHub Config] Specific query result:", { data: I, error: E, count: $ }), E)
      return console.warn("[GitHub Config] Database error details:", {
        code: E.code,
        message: E.message,
        details: E.details,
        hint: E.hint
      }), E.code === "PGRST116" ? console.info("[GitHub Config] No GitHub token configured in database (PGRST116)") : console.warn("[GitHub Config] Error fetching token from database:", E.message), null;
    const h = Array.isArray(I) ? I[0] : I;
    if (h != null && h.key_value) {
      const d = h.key_value.trim();
      return ze(d) ? (console.log("🔧 GitHub token fetched from database successfully"), console.log("Token preview:", d.substring(0, 8) + "..." + d.substring(d.length - 4)), console.log("Token length:", d.length), console.log("Token starts with:", d.substring(0, 4)), d) : (console.warn("[GitHub Config] Invalid GitHub token format in database"), null);
    }
    return console.warn("[GitHub Config] No GitHub token found in database - data was:", h), null;
  } catch (s) {
    return console.error("[GitHub Config] Failed to fetch token from database:", s), null;
  }
}, da = (o) => {
  if (!(o != null && o.token) || !ze(o.token))
    throw console.error("[GitHub Config] Invalid GitHub token provided"), new Error("Invalid GitHub token provided");
  Ce = o.token.trim(), console.log("🔧 GitHub token configured manually");
}, Ye = async () => {
  if (Ce)
    return Ce;
  try {
    const o = await ws();
    if (o)
      return Ce = o, o;
  } catch (o) {
    console.error("[GitHub Config] Failed to fetch token:", o);
  }
  return null;
}, pa = async () => {
  if (Ce !== null)
    return !0;
  try {
    return await Ye() !== null;
  } catch (o) {
    return console.error("[GitHub Config] Error checking configuration:", o), !1;
  }
}, vs = () => {
  Ce = null, console.log("🔧 GitHub token cache cleared");
}, fa = async () => (vs(), await Ye()), ga = async () => {
  try {
    console.log("[GitHub Config Debug] Testing database connection...");
    const o = await ee(), { data: s, error: a } = await o.from("settings").select("*").limit(10);
    console.log("[GitHub Config Debug] Settings table sample (first 10 rows):", s), console.log("[GitHub Config Debug] Query error:", a), s && (console.log("[GitHub Config Debug] Column structure of first row:", Object.keys(s[0] || {})), console.log("[GitHub Config Debug] All key_name values:", s.map((h) => h.key_name)));
    const { data: i, error: g } = await o.from("settings").select("*").eq("key_name", "github_token");
    console.log("[GitHub Config Debug] Exact github_token match:", i), console.log("[GitHub Config Debug] Exact match error:", g);
    const { data: k, error: I } = await o.from("settings").select("*").ilike("key_name", "%github%");
    console.log("[GitHub Config Debug] Case-insensitive GitHub search:", k), console.log("[GitHub Config Debug] Case-insensitive error:", I);
    const { data: E, error: $ } = await o.rpc("get_table_columns", { table_name: "settings" }).limit(1);
    console.log("[GitHub Config Debug] Table structure info:", E), console.log("[GitHub Config Debug] Table structure error:", $);
  } catch (o) {
    console.error("[GitHub Config Debug] Database connection test failed:", o);
  }
};
function ms() {
  const o = C({
    user: null,
    isAuthenticated: !1,
    isLoading: !0,
    error: null
  }), s = C(window.location.href), a = async () => {
    var h, d, c, u, D, y, p, R;
    try {
      o.value.isLoading = !0;
      const U = await ee(), { data: { session: S }, error: v } = await U.auth.getSession();
      if (v) {
        console.error("Error checking auth status:", v), o.value = {
          user: null,
          isAuthenticated: !1,
          isLoading: !1,
          error: v.message
        };
        return;
      }
      S != null && S.user ? (o.value = {
        user: {
          id: S.user.id,
          email: S.user.email || "",
          name: ((h = S.user.user_metadata) == null ? void 0 : h.full_name) || ((d = S.user.user_metadata) == null ? void 0 : d.name) || ((c = S.user.email) == null ? void 0 : c.split("@")[0]) || "User",
          avatar_url: ((u = S.user.user_metadata) == null ? void 0 : u.avatar_url) || ((D = S.user.user_metadata) == null ? void 0 : D.picture) || null,
          initials: (((y = S.user.user_metadata) == null ? void 0 : y.full_name) || ((p = S.user.user_metadata) == null ? void 0 : p.name) || ((R = S.user.email) == null ? void 0 : R.split("@")[0]) || "U").split(" ").map((V) => V[0]).join("").toUpperCase().substring(0, 2)
        },
        isAuthenticated: !0,
        isLoading: !1,
        error: null
      }, S.access_token && Se(ye, S.access_token), S.refresh_token && Se(be, S.refresh_token), Be()) : o.value = {
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
      const c = await ee(), { error: u } = await c.auth.signInWithPassword({
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
      const u = await ee(), { data: D, error: y } = await u.auth.signUp({
        email: h,
        password: d
      });
      return y ? { success: !1, error: y.message } : D.user && !D.user.email_confirmed_at ? { success: !0, needsConfirmation: !0 } : (c = D.session) != null && c.user ? (await a(), sessionStorage.setItem("post-login-redirect", s.value), { success: !0 }) : { success: !1, error: "No session created" };
    } catch (u) {
      return console.error("Signup error:", u), { success: !1, error: u.message || "Signup failed" };
    }
  }, k = async (h) => {
    try {
      const d = `${window.location.origin}/auth/callback`;
      console.log("[OAuth] Starting login with provider:", h), console.log("[OAuth] Redirect URL:", d), console.log("[OAuth] Current URL:", s.value), console.log("[OAuth] Current origin:", window.location.origin);
      const c = await ee(), { error: u } = await c.auth.signInWithOAuth({
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
      const D = s.value || window.location.href;
      return sessionStorage.setItem("post-login-redirect", D), localStorage.setItem("post-login-redirect", D), console.log("[OAuth] Stored redirect URL:", D), console.log("[OAuth] Current URL value:", s.value), console.log("[OAuth] Window location href:", window.location.href), { success: !0 };
    } catch (d) {
      return console.error("OAuth login error:", d), { success: !1, error: d.message || "OAuth login failed" };
    }
  }, I = async () => {
    try {
      const h = await ee(), { error: d } = await h.auth.signOut();
      d && console.error("Logout error:", d), o.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      }, _e(ye), _e(be), Oe();
    } catch (h) {
      console.error("Logout error:", h);
    }
  }, E = async (h) => {
    try {
      const d = await ee(), { error: c } = await d.auth.resetPasswordForEmail(h, {
        redirectTo: `${window.location.origin}/auth/reset-password`
      });
      return c ? { success: !1, error: c.message } : { success: !0 };
    } catch (d) {
      return console.error("Password reset error:", d), { success: !1, error: d.message || "Password reset failed" };
    }
  }, $ = async () => {
    try {
      (await ee()).auth.onAuthStateChange((d, c) => {
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
            }, _e(ye), _e(be), Oe();
            break;
          case "TOKEN_REFRESHED":
            c != null && c.access_token && Se(ye, c.access_token), c != null && c.refresh_token && Se(be, c.refresh_token), Be();
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
  return Ee(async () => {
    $(), await a();
  }), fe(() => window.location.href, (h) => {
    s.value = h;
  }), {
    authState: Y(() => o.value),
    isAuthenticated: Y(() => o.value.isAuthenticated),
    user: Y(() => o.value.user),
    isLoading: Y(() => o.value.isLoading),
    checkAuthStatus: a,
    loginWithEmail: i,
    signupWithEmail: g,
    loginWithProvider: k,
    logout: I,
    resetPassword: E,
    currentUrl: Y(() => s.value)
  };
}
const ks = { class: "login-container" }, _s = { class: "logo-section" }, ys = { class: "login-buttons" }, bs = {
  key: 0,
  class: "forgot-password"
}, Ss = { class: "signup-link" }, Cs = /* @__PURE__ */ de({
  __name: "LoginModal",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue", "login-success"],
  setup(o, { emit: s }) {
    const a = o, i = s, g = Y({
      get: () => a.modelValue,
      set: (m) => i("update:modelValue", m)
    }), k = C(!1), I = C(!1), E = C(), { loginWithEmail: $, signupWithEmail: h, loginWithProvider: d, resetPassword: c } = ms(), u = Fo({
      email: "",
      password: "",
      confirmPassword: ""
    }), D = Y(() => ({
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
            validator: (m, b, ae) => {
              b !== u.password ? ae(new Error("Passwords do not match")) : ae();
            },
            trigger: "blur"
          }
        ]
      } : {}
    })), y = () => {
      var m;
      k.value = !k.value, u.email = "", u.password = "", u.confirmPassword = "", (m = E.value) == null || m.clearValidate();
    }, p = () => {
      var m;
      g.value = !1, u.email = "", u.password = "", u.confirmPassword = "", k.value = !1, (m = E.value) == null || m.clearValidate();
    }, R = async () => {
      if (E.value)
        try {
          await E.value.validate(), I.value = !0, k.value ? await S() : await U();
        } catch (m) {
          console.error("Form validation failed:", m);
        } finally {
          I.value = !1;
        }
    }, U = async () => {
      const m = await $(u.email, u.password);
      m.success ? (K.success("Login successful"), i("login-success", { email: u.email }), p()) : K.error("Login failed: " + m.error);
    }, S = async () => {
      const m = await h(u.email, u.password);
      m.success ? m.needsConfirmation ? K.success("Please check your email to confirm your account") : (K.success("Account created successfully"), i("login-success", { email: u.email }), p()) : K.error("Signup failed: " + m.error);
    }, v = async (m) => {
      const b = await d(m);
      b.success ? K.success("Redirecting to login provider...") : K.error("Login failed: " + b.error);
    }, V = async () => {
      if (!u.email) {
        K.warning("Please enter your email address first");
        return;
      }
      const m = await c(u.email);
      m.success ? K.success("Password reset email sent! Please check your inbox.") : K.error("Failed to send reset email: " + m.error);
    };
    return (m, b) => {
      const ae = ie("el-icon"), X = ie("el-input"), F = ie("el-form-item"), G = ie("el-button"), re = ie("el-dialog");
      return _(), Z(re, {
        modelValue: g.value,
        "onUpdate:modelValue": b[6] || (b[6] = (z) => g.value = z),
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
              n("h2", null, J(k.value ? "Create Account" : "Welcome Back"), 1),
              n("p", null, J(k.value ? "Sign up to get started with your account" : "Sign in to continue to your account"), 1)
            ]),
            w(W(zo), {
              model: u,
              rules: D.value,
              ref_key: "formRef",
              ref: E,
              class: "login-form",
              onSubmit: ue(R, ["prevent"])
            }, {
              default: f(() => [
                w(F, { prop: "email" }, {
                  default: f(() => [
                    w(X, {
                      modelValue: u.email,
                      "onUpdate:modelValue": b[0] || (b[0] = (z) => u.email = z),
                      placeholder: "Email",
                      type: "email",
                      size: "large",
                      class: "form-input"
                    }, {
                      prefix: f(() => [
                        w(ae, null, {
                          default: f(() => [
                            w(W(ts))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                w(F, { prop: "password" }, {
                  default: f(() => [
                    w(X, {
                      modelValue: u.password,
                      "onUpdate:modelValue": b[1] || (b[1] = (z) => u.password = z),
                      placeholder: "Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: f(() => [
                        w(ae, null, {
                          default: f(() => [
                            w(W(go))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                k.value ? (_(), Z(F, {
                  key: 0,
                  prop: "confirmPassword"
                }, {
                  default: f(() => [
                    w(X, {
                      modelValue: u.confirmPassword,
                      "onUpdate:modelValue": b[2] || (b[2] = (z) => u.confirmPassword = z),
                      placeholder: "Confirm Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: f(() => [
                        w(ae, null, {
                          default: f(() => [
                            w(W(go))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                })) : j("", !0),
                w(F, null, {
                  default: f(() => [
                    w(G, {
                      type: "primary",
                      class: "submit-button",
                      loading: I.value,
                      onClick: R,
                      size: "large"
                    }, {
                      default: f(() => [
                        Q(J(k.value ? "Sign Up" : "Sign In"), 1)
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model", "rules"]),
            b[10] || (b[10] = n("div", { class: "divider" }, [
              n("span", null, "Or continue with")
            ], -1)),
            n("div", ys, [
              w(G, {
                class: "login-button google",
                onClick: b[3] || (b[3] = (z) => v("google")),
                size: "large"
              }, {
                default: f(() => [...b[7] || (b[7] = [
                  n("span", { class: "social-icon" }, "G", -1),
                  Q(" Google ", -1)
                ])]),
                _: 1
              }),
              w(G, {
                class: "login-button github",
                onClick: b[4] || (b[4] = (z) => v("github")),
                size: "large"
              }, {
                default: f(() => [...b[8] || (b[8] = [
                  n("span", { class: "social-icon" }, "⚡", -1),
                  Q(" GitHub ", -1)
                ])]),
                _: 1
              }),
              w(G, {
                class: "login-button twitter",
                onClick: b[5] || (b[5] = (z) => v("twitter")),
                size: "large"
              }, {
                default: f(() => [...b[9] || (b[9] = [
                  n("span", { class: "social-icon" }, "X", -1),
                  Q(" X (Twitter) ", -1)
                ])]),
                _: 1
              })
            ]),
            b[11] || (b[11] = n("div", { class: "terms" }, " By continuing, you agree to AI Workspace's Terms of Service and Privacy Policy ", -1)),
            k.value ? j("", !0) : (_(), x("div", bs, [
              n("a", {
                href: "#",
                onClick: ue(V, ["prevent"])
              }, "Forgot Password?")
            ])),
            n("div", Ss, [
              Q(J(k.value ? "Already have an account?" : "Don't have an account?") + " ", 1),
              n("a", {
                href: "#",
                onClick: ue(y, ["prevent"])
              }, J(k.value ? "Sign in" : "Sign up"), 1)
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
const xe = (o, s) => {
  const a = o.__vccOpts || o;
  for (const [i, g] of s)
    a[i] = g;
  return a;
}, Es = /* @__PURE__ */ xe(Cs, [["__scopeId", "data-v-684a3f28"]]), As = { class: "session-loss-content" }, Is = { class: "session-loss-icon" }, Ls = { class: "session-loss-message" }, Hs = {
  key: 0,
  class: "session-loss-details"
}, Rs = { class: "detail-item" }, Vs = { class: "detail-value" }, Us = { class: "detail-item" }, Ts = { class: "detail-value" }, Ps = { class: "session-loss-actions" }, xs = {
  key: 0,
  class: "retry-status"
}, Ds = { class: "retry-message" }, Ms = /* @__PURE__ */ de({
  __name: "SessionLossModal",
  props: {
    modelValue: { type: Boolean },
    sessionLossEvent: {},
    canRetrySession: { type: Boolean }
  },
  emits: ["update:modelValue", "retry", "login", "refresh"],
  setup(o, { emit: s }) {
    const a = o, i = s, g = C(!1), k = C(0), I = C(void 0), E = C(""), $ = Y({
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
      g.value = !0, k.value = 0, I.value = void 0, E.value = "Attempting to restore session...";
      const y = setInterval(() => {
        k.value < 90 && (k.value += Math.random() * 20);
      }, 200);
      try {
        i("retry"), await new Promise((p) => setTimeout(p, 2e3)), k.value = 100, I.value = "success", E.value = "Session restored successfully!", setTimeout(() => {
          $.value = !1;
        }, 1e3);
      } catch {
        k.value = 100, I.value = "exception", E.value = "Failed to restore session. Please log in again.", K.error("Session restoration failed");
      } finally {
        clearInterval(y), setTimeout(() => {
          g.value = !1, k.value = 0, I.value = void 0, E.value = "";
        }, 3e3);
      }
    }, u = () => {
      i("login"), $.value = !1;
    }, D = () => {
      i("refresh"), window.location.reload();
    };
    return fe(() => a.sessionLossEvent, (y) => {
      y && (g.value = !1, k.value = 0, I.value = void 0, E.value = "");
    }), (y, p) => (_(), Z(W(Ko), {
      modelValue: $.value,
      "onUpdate:modelValue": p[0] || (p[0] = (R) => $.value = R),
      title: "Session Expired",
      width: "500px",
      "close-on-click-modal": !1,
      "close-on-press-escape": !1,
      "show-close": !1,
      class: "session-loss-modal",
      center: ""
    }, {
      default: f(() => {
        var R;
        return [
          n("div", As, [
            n("div", Is, [
              w(W(Ue), {
                size: "48",
                color: "#f56c6c"
              }, {
                default: f(() => [
                  w(W(wo))
                ]),
                _: 1
              })
            ]),
            n("div", Ls, [
              p[3] || (p[3] = n("h3", null, "Your session has expired", -1)),
              n("p", null, J(((R = o.sessionLossEvent) == null ? void 0 : R.message) || "Please log in again to continue using the application."), 1),
              o.sessionLossEvent ? (_(), x("div", Hs, [
                n("div", Rs, [
                  p[1] || (p[1] = n("span", { class: "detail-label" }, "Issue:", -1)),
                  n("span", Vs, J(h(o.sessionLossEvent.type)), 1)
                ]),
                n("div", Us, [
                  p[2] || (p[2] = n("span", { class: "detail-label" }, "Time:", -1)),
                  n("span", Ts, J(d(o.sessionLossEvent.timestamp)), 1)
                ])
              ])) : j("", !0)
            ]),
            n("div", Ps, [
              o.canRetrySession && !g.value ? (_(), Z(W(Ne), {
                key: 0,
                type: "primary",
                onClick: c,
                loading: g.value
              }, {
                default: f(() => [
                  w(W(Ue), null, {
                    default: f(() => [
                      w(W(Fe))
                    ]),
                    _: 1
                  }),
                  p[4] || (p[4] = Q(" Try Again ", -1))
                ]),
                _: 1
              }, 8, ["loading"])) : j("", !0),
              w(W(Ne), {
                type: "primary",
                onClick: u,
                disabled: g.value
              }, {
                default: f(() => [
                  w(W(Ue), null, {
                    default: f(() => [
                      w(W(je))
                    ]),
                    _: 1
                  }),
                  p[5] || (p[5] = Q(" Log In ", -1))
                ]),
                _: 1
              }, 8, ["disabled"]),
              o.canRetrySession ? j("", !0) : (_(), Z(W(Ne), {
                key: 1,
                type: "info",
                onClick: D,
                disabled: g.value
              }, {
                default: f(() => [
                  w(W(Ue), null, {
                    default: f(() => [
                      w(W(Fe))
                    ]),
                    _: 1
                  }),
                  p[6] || (p[6] = Q(" Refresh Page ", -1))
                ]),
                _: 1
              }, 8, ["disabled"]))
            ]),
            g.value ? (_(), x("div", xs, [
              w(W(Yo), {
                percentage: k.value,
                status: I.value,
                "stroke-width": 6
              }, null, 8, ["percentage", "status"]),
              n("p", Ds, J(E.value), 1)
            ])) : j("", !0)
          ])
        ];
      }),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const $s = /* @__PURE__ */ xe(Ms, [["__scopeId", "data-v-0dd27f7f"]]), Ws = { class: "aiworkspace-header" }, Ns = {
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
}, Rt = { class: "workspace-list" }, Vt = ["onClick"], Ut = { class: "workspace-icon" }, Tt = { class: "workspace-details" }, Pt = { class: "workspace-members" }, xt = {
  key: 0,
  class: "current-indicator"
}, Dt = { class: "update-content" }, Mt = { class: "update-actions" }, Le = 50, $t = 6e4, Wt = 30, Nt = /* @__PURE__ */ de({
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
    const a = o, i = s, { authState: g, logout: k, isLoading: I } = cs(), {
      isSessionValid: E,
      sessionLossEvent: $,
      hasSessionLoss: h,
      canRetrySession: d,
      retrySession: c,
      clearSessionLoss: u
    } = fs(), D = () => {
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
    }, p = C(D()), R = Y(() => !!p.value), U = C(0), S = () => {
      if (!p.value && U.value < Le) {
        if (y()) {
          const t = D();
          if (t) {
            p.value = t, console.log("[AIWorkspaceHeader] Pinia store initialized successfully");
            return;
          }
        }
        U.value++, setTimeout(S, 100);
      } else
        U.value >= Le && console.warn("[AIWorkspaceHeader] Pinia initialization failed after maximum retries, using fallback mode");
    };
    Ee(() => {
      p.value || S();
    });
    const v = C(!1), V = C(!1), m = C(!1), b = C([]), ae = C([]), X = C({
      name: "",
      email: "",
      avatar_url: null,
      initials: ""
    }), F = C("unknown"), G = C("unknown"), re = C(!1), z = C(null), L = C(null), N = C(!1), O = C([]), H = C([]), B = C(!1);
    fe(H, async (t) => {
      t.length > 0 && R.value && se.value && await M();
    }, { immediate: !1 }), fe(() => window.location.pathname + window.location.search + window.location.hash, async () => {
      R.value && se.value && await M();
    }, { immediate: !1 });
    const oe = C(window.location.pathname);
    fe(() => window.location.pathname, (t) => {
      oe.value = t;
    }, { immediate: !0 }), fe(R, (t) => {
      !t && U.value < Le && S();
    });
    const ne = () => {
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
    }, P = () => {
      try {
        return window.location.pathname.includes("/all-workspace/");
      } catch (t) {
        return console.warn("[AIWorkspaceHeader] Error checking all-workspace mode:", t), !1;
      }
    }, M = async () => {
      if (!p.value || !R.value)
        return;
      const t = P();
      if (B.value = t, t) {
        p.value.currentWorkspace = null, localStorage.removeItem("current_workspace"), console.log("[AIWorkspaceHeader] Auto-selected all-workspace mode from URL");
        return;
      }
      const e = ne();
      if (e)
        try {
          H.value.length === 0 && await Ze();
          const r = H.value.find((l) => l.id.toString() === e);
          r ? (p.value.setCurrentWorkspace(r), console.log(`[AIWorkspaceHeader] Auto-selected workspace from URL: ${r.title} (ID: ${r.id})`), i("workspaceChange", r)) : console.warn(`[AIWorkspaceHeader] Workspace with ID ${e} not found in available workspaces`);
        } catch (r) {
          console.error("[AIWorkspaceHeader] Error auto-selecting workspace from URL:", r);
        }
    }, se = Y(() => g.value.isAuthenticated), te = Y(() => p.value ? p.value.currentWorkspace : null), pe = Y(() => {
      try {
        return window.location.pathname.includes("shared-folder");
      } catch (t) {
        return console.warn("[AIWorkspaceHeader] Error checking shared-folder URL:", t), !1;
      }
    }), ge = C([
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
    ]), _o = C([
      { label: "Dashboard", key: "dashboard", url: "/dashboard" },
      { label: "All Tasks", key: "tasks", url: "/tasks" },
      { label: "All Goals", key: "goals", url: "/goals" },
      { label: "All Events", key: "events", url: "/events" },
      { label: "All Drive", key: "files", url: "/files" },
      { label: "All Contacts", key: "contacts", url: "/contacts" },
      { label: "All Settings", key: "settings", url: "/settings" }
    ]), Je = Y(() => B.value ? _o.value : ge.value), yo = Y(() => {
      try {
        const t = oe.value;
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
          const l = Je.value.find(
            (T) => T.key === e || T.url.includes(`/${e}`) || T.url === `/${e}`
          );
          if (l)
            return l.label;
        }
        return "Dashboard";
      } catch (t) {
        return console.warn("[AIWorkspaceHeader] Error determining current section:", t), "Dashboard";
      }
    }), He = Y(() => {
      try {
        return window.location.hostname === "worklog.aiworkspace.pro";
      } catch (t) {
        return console.warn("[AIWorkspaceHeader] Error checking worklog domain:", t), !1;
      }
    }), Xe = Y(() => {
      try {
        return window.location.hostname === "drms.aiworkspace.pro";
      } catch (t) {
        return console.warn("[AIWorkspaceHeader] Error checking DRMS domain:", t), !1;
      }
    }), Ae = Y(() => a.showWorkspaceSelector && !He.value && !Xe.value), bo = (t) => {
      const e = /* @__PURE__ */ new Map();
      t.forEach((T) => {
        e.set(T.id, { ...T, children: [] });
      });
      const r = [];
      e.forEach((T) => {
        T.parent_workspace_id && e.has(T.parent_workspace_id) ? e.get(T.parent_workspace_id).children.push(T) : r.push(T);
      });
      const l = (T) => {
        T.sort((q, ce) => q.title.localeCompare(ce.title)), T.forEach((q) => {
          q.children && l(q.children);
        });
      };
      return l(r), r;
    }, Qe = (t, e = 0, r = []) => (t.forEach((l) => {
      r.push({ ...l, level: e }), l.children && l.children.length && Qe(l.children, e + 1, r);
    }), r), Ze = async () => {
      var t, e, r;
      try {
        const l = await ((t = p.value) == null ? void 0 : t.loadWorkspaces());
        if (O.value = bo(l || []), H.value = Qe(O.value), ae.value = H.value, b.value = H.value, a.currentWorkspaceId) {
          const T = H.value.find((q) => {
            var ce;
            return q.id.toString() === ((ce = a.currentWorkspaceId) == null ? void 0 : ce.toString());
          });
          T && ((e = p.value) == null || e.setCurrentWorkspace(T));
        } else
          !te.value && H.value.length && ((r = p.value) == null || r.setCurrentWorkspace(H.value[0]));
      } catch (l) {
        console.error("loadWorkspaces (header) error", l);
      }
    }, So = (t) => {
      if (console.log("Navigation command:", t), t === "all-workspace") {
        window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
        return;
      } else {
        const e = parseInt(t.replace("workspace-", ""));
        window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e}/dashboard`;
        return;
      }
    }, Co = (t) => {
      const e = te.value, r = B.value;
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
    }, Eo = (t) => {
      const e = te.value, r = B.value;
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
    }, he = (t) => {
      switch (t) {
        case "profile":
          a.onProfileClick ? a.onProfileClick() : K.info("Profile settings coming soon");
          break;
        case "workspaces":
          v.value = !0;
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
          Io();
          break;
      }
    }, eo = (t) => {
      var e;
      (e = p.value) == null || e.setCurrentWorkspace(t), v.value = !1, i("workspaceChange", t), K.success(`Switched to ${t.title}`);
    }, Ao = () => {
      po.prompt("Enter workspace name:", "Create New Workspace", {
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
        b.value.push(e), (r = p.value) == null || r.setWorkspaces(b.value), eo(e), K.success(`Created workspace: ${t}`);
      }).catch(() => {
      });
    }, Io = () => {
      po.confirm(
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
        })), i("logout"), K.success("Signed out successfully");
      }).catch(() => {
      });
    }, De = async () => {
      var t, e;
      if (g.value.user) {
        const r = g.value.user;
        X.value = {
          name: r.name || ((t = r.email) == null ? void 0 : t.split("@")[0]) || "User",
          email: r.email || "",
          avatar_url: r.avatar_url || null,
          initials: (r.name || ((e = r.email) == null ? void 0 : e.split("@")[0]) || "U").split(" ").map((l) => l[0]).join("").toUpperCase().substring(0, 2)
        }, a.showWorkspaceSelector && await Ze();
      }
    };
    fe(() => g.value.user, (t) => {
      var e;
      t ? De() : (X.value = { name: "", email: "", avatar_url: null, initials: "" }, (e = p.value) == null || e.clearData());
    }), fe(h, (t) => {
      t && se.value && (console.log("[AIWorkspaceHeader] Session loss detected, showing modal"), m.value = !0);
    }), fe(() => a.currentWorkspaceId, (t) => {
      var e;
      if (t && H.value.length) {
        const r = H.value.find((l) => l.id.toString() === t.toString());
        r && ((e = p.value) == null || e.setCurrentWorkspace(r));
      }
    }), Ee(async () => {
      se.value && (await De(), await M()), await To(), lo(), Wo();
    });
    const Lo = async (t) => {
      console.log("Login successful:", t), V.value = !1, await De(), i("login"), K.success("Welcome back!");
    }, Ho = async () => {
      console.log("[AIWorkspaceHeader] Retrying session..."), await c() ? (m.value = !1, u(), K.success("Session restored successfully!")) : K.error("Failed to restore session. Please log in again.");
    }, Ro = () => {
      console.log("[AIWorkspaceHeader] Opening login modal from session loss"), m.value = !1, V.value = !0;
    }, Vo = () => {
      console.log("[AIWorkspaceHeader] Refreshing page due to session loss"), window.location.reload();
    }, Uo = () => {
      U.value = 0, S(), K.success("Manual Pinia retry initiated.");
    }, To = async () => {
      try {
        const t = await fetch("/version.json");
        if (t.ok) {
          const e = t.headers.get("content-type");
          if (e && e.includes("application/json"))
            try {
              const r = await t.json();
              console.log("Version data received:", r), F.value = r.shortCommitHash || "unknown", G.value = r.fullCommitHash || "unknown", console.log("✅ Loaded commit hash from version.json:", F.value);
              return;
            } catch {
              console.log("Failed to parse version.json, trying fallback methods...");
            }
        }
        console.log("🔄 version.json not available, trying automatic detection..."), await so();
      } catch (t) {
        console.log("Error loading version.json, trying automatic detection...", t), await so();
      }
    }, oo = async () => {
      try {
        let t = await ao();
        if (t || (t = to()), t) {
          const e = await io(t);
          e && e !== G.value && (console.log("🔄 New commit detected:", G.value, "→", e), G.value !== "unknown" && !re.value && (re.value = !0, z.value = e));
        }
      } catch (t) {
        console.log("Error checking for new commits:", t);
      }
    }, so = async () => {
      try {
        let t = await ao();
        if (t || (t = to()), t) {
          const T = await io(t);
          if (T) {
            F.value = T.substring(0, 7), G.value = T, console.log("✅ Loaded commit hash from GitHub API:", F.value);
            return;
          }
        }
        const e = await Do();
        if (e && e.version) {
          F.value = e.version, G.value = e.version, console.log("✅ Loaded version from package.json:", F.value);
          return;
        }
        const r = await Mo();
        if (r) {
          F.value = r, G.value = r, console.log("✅ Loaded version from build info:", F.value);
          return;
        }
        const l = Date.now().toString(36);
        F.value = l.substring(0, 7), G.value = l, console.log("✅ Using timestamp-based version:", F.value);
      } catch (t) {
        console.warn("❌ All automatic detection methods failed:", t), F.value = "unknown", G.value = "unknown";
      }
    }, to = () => {
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
    }, ao = async () => {
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
    }, ro = C(0), Me = C(0), no = C(Date.now()), Po = () => {
      const t = Date.now();
      t - no.value > 60 * 60 * 1e3 && (Me.value = 0, no.value = t, console.log("🔄 GitHub API call counter reset"));
    }, xo = async () => {
      try {
        const e = await Ye();
        if (e)
          return console.log("✅ Using GitHub token from database"), e;
      } catch (e) {
        console.warn("Failed to get token from database:", e);
      }
      if ({ VITE_SUPABASE_URL: void 0, VITE_SUPABASE_ANON_KEY: void 0, BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_GITHUB_TOKEN)
        return console.log("✅ Using GitHub token from environment"), {}.VITE_GITHUB_TOKEN;
      const t = localStorage.getItem("github_token");
      return t ? (console.log("✅ Using GitHub token from localStorage"), t) : (console.warn("❌ No GitHub token found in any source"), null);
    }, io = async (t) => {
      var e;
      try {
        const r = Date.now();
        if (Po(), r - ro.value < $t)
          return console.log("⏳ GitHub API rate limit: waiting before next call"), null;
        if (Me.value >= Wt)
          return console.log("🚫 GitHub API hourly limit reached, skipping call"), null;
        const l = await xo(), T = {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "AIWorkspace-Header/1.0"
        };
        l ? (T.Authorization = `Bearer ${l}`, console.log("🔑 Using GitHub token for authentication"), console.log("Token preview:", l.substring(0, 8) + "..." + l.substring(l.length - 4)), console.log("Token length:", l.length), console.log("Authorization header:", `Bearer ${l.substring(0, 8)}...`)) : console.log("⚠️ No GitHub token found, trying unauthenticated request");
        const q = ["main", "master"];
        for (const ce of q)
          try {
            const le = await fetch(`https://api.github.com/repos/${t.owner}/${t.repo}/commits/${ce}`, {
              headers: T
            });
            if (ro.value = r, Me.value++, le.ok) {
              const Ie = await le.json();
              return console.log("✅ GitHub API call successful:", Ie.sha.substring(0, 7)), Ie.sha;
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
    }, Do = async () => {
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
    }, Mo = async () => {
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
    }, $o = async () => {
      try {
        if (G.value === "unknown") {
          K.warning("Version information not available");
          return;
        }
        await navigator.clipboard.writeText(G.value), K.success("Version information copied to clipboard!");
      } catch (t) {
        console.error("Failed to copy version info:", t), K.error("Failed to copy version info");
      }
    }, lo = async () => {
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
          z.value = l.fullCommitHash, G.value !== z.value && (re.value || (re.value = !0, console.log("Version mismatch detected:", {
            currentVersion: G.value,
            latestVersion: z.value,
            serverBuildTime: l.buildTime
          })));
        } catch (t) {
          console.error("Error checking for updates:", t);
        } finally {
          N.value = !1;
        }
      }
    }, Wo = () => {
      L.value = setInterval(() => {
        lo(), oo();
      }, 5 * 60 * 1e3);
    }, No = () => {
      console.log("User reloaded for update:", {
        currentVersion: G.value,
        latestVersion: z.value
      }), window.location.reload();
    }, co = () => {
      re.value = !1, console.log("Update alert dismissed:", {
        currentVersion: G.value,
        latestVersion: z.value
      });
    };
    return ho(() => {
      L.value && clearInterval(L.value);
    }), (t, e) => {
      const r = ie("el-icon"), l = ie("el-button"), T = ie("el-tag"), q = ie("el-dropdown-item"), ce = ie("el-dropdown-menu"), le = ie("el-dropdown"), Ie = ie("el-dialog"), Go = ie("el-alert");
      return _(), x(Re, null, [
        n("header", Ws, [
          !R.value && U.value < Le || W(I) ? (_(), x("div", Ns, [
            e[13] || (e[13] = Ve('<div class="header-left" data-v-4964adfd><div class="logo-section" data-v-4964adfd><a href="/" class="logo" data-v-4964adfd><div class="text-logo" data-v-4964adfd><span class="logo-text" data-v-4964adfd>AI Workspace</span></div></a></div></div>', 1)),
            n("div", Gs, [
              n("span", Os, [
                W(I) ? (_(), x("span", Bs, "Syncing authentication...")) : (_(), x("span", Fs, "Initializing..."))
              ])
            ])
          ])) : !R.value && U.value >= Le ? (_(), x("div", js, [
            e[15] || (e[15] = Ve('<div class="header-left" data-v-4964adfd><div class="logo-section" data-v-4964adfd><a href="/" class="logo" data-v-4964adfd><div class="text-logo" data-v-4964adfd><span class="logo-text" data-v-4964adfd>AI Workspace</span></div></a></div></div>', 1)),
            n("div", { class: "header-center" }, [
              e[14] || (e[14] = n("span", { class: "fallback-text" }, "Header Ready (Fallback Mode)", -1)),
              n("button", {
                onClick: Uo,
                class: "retry-button"
              }, "Retry Pinia")
            ]),
            e[16] || (e[16] = Ve('<div class="header-right" data-v-4964adfd><div class="user-profile" data-v-4964adfd><div class="user-info" data-v-4964adfd><span class="user-name" data-v-4964adfd>User</span></div><div class="user-avatar" data-v-4964adfd><span class="avatar-placeholder" data-v-4964adfd>U</span></div></div></div>', 1))
          ])) : se.value && !W(E) ? (_(), x("div", zs, [
            e[19] || (e[19] = Ve('<div class="header-left" data-v-4964adfd><div class="logo-section" data-v-4964adfd><a href="/" class="logo" data-v-4964adfd><div class="text-logo" data-v-4964adfd><span class="logo-text" data-v-4964adfd>AI Workspace</span></div></a></div></div>', 1)),
            n("div", Ks, [
              n("span", Ys, [
                w(r, null, {
                  default: f(() => [
                    w(W(wo))
                  ]),
                  _: 1
                }),
                e[17] || (e[17] = Q(" Session expired - Please log in again ", -1))
              ])
            ]),
            n("div", qs, [
              w(l, {
                type: "primary",
                onClick: e[0] || (e[0] = (A) => V.value = !0)
              }, {
                default: f(() => [
                  w(r, null, {
                    default: f(() => [
                      w(W(je))
                    ]),
                    _: 1
                  }),
                  e[18] || (e[18] = Q(" Log In ", -1))
                ]),
                _: 1
              })
            ])
          ])) : se.value && W(E) ? (_(), x("div", Js, [
            n("div", Xs, [
              n("div", Qs, [
                n("a", Zs, [
                  o.customLogo ? (_(), x("img", {
                    key: 0,
                    src: o.customLogo,
                    alt: "AIWorkspace",
                    class: "logo-image"
                  }, null, 8, et)) : (_(), x("div", ot, [...e[20] || (e[20] = [
                    n("span", { class: "logo-text" }, "AI Workspace", -1)
                  ])]))
                ])
              ])
            ]),
            o.showSecondaryNavigation ? (_(), x("div", st, [
              n("nav", tt, [
                Ae.value ? (_(), Z(le, {
                  key: 0,
                  onCommand: So,
                  trigger: "hover"
                }, {
                  dropdown: f(() => [
                    w(ce, { class: "workspace-tree-dropdown" }, {
                      default: f(() => [
                        w(q, {
                          command: "all-workspace",
                          class: $e({ active: B.value })
                        }, {
                          default: f(() => [
                            n("a", rt, [
                              n("div", nt, [
                                e[22] || (e[22] = n("span", { class: "workspace-icon" }, "🌐", -1)),
                                e[23] || (e[23] = n("span", null, "All workspace", -1)),
                                B.value ? (_(), Z(T, {
                                  key: 0,
                                  size: "small",
                                  type: "success"
                                }, {
                                  default: f(() => [...e[21] || (e[21] = [
                                    Q("Current", -1)
                                  ])]),
                                  _: 1
                                })) : j("", !0)
                              ])
                            ])
                          ]),
                          _: 1
                        }, 8, ["class"]),
                        H.value.length > 0 ? (_(), Z(q, {
                          key: 0,
                          divided: "",
                          disabled: ""
                        })) : j("", !0),
                        (_(!0), x(Re, null, We(H.value, (A) => (_(), Z(q, {
                          key: A.id,
                          command: `workspace-${A.id}`
                        }, {
                          default: f(() => {
                            var me;
                            return [
                              n("a", {
                                href: `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${A.id}/dashboard`,
                                class: "nav-link"
                              }, [
                                n("div", {
                                  class: "workspace-dropdown-item",
                                  style: jo({ paddingLeft: (A.level || 0) * 16 + "px" })
                                }, [
                                  n("span", lt, J(A.children && A.children.length ? "📁" : "📄"), 1),
                                  n("span", null, J(A.title), 1),
                                  A.id === ((me = te.value) == null ? void 0 : me.id) ? (_(), Z(T, {
                                    key: 0,
                                    size: "small",
                                    type: "success"
                                  }, {
                                    default: f(() => [...e[24] || (e[24] = [
                                      Q("Current", -1)
                                    ])]),
                                    _: 1
                                  })) : j("", !0)
                                ], 4)
                              ], 8, it)
                            ];
                          }),
                          _: 2
                        }, 1032, ["command"]))), 128)),
                        H.value.length === 0 ? (_(), Z(q, {
                          key: 1,
                          disabled: ""
                        }, {
                          default: f(() => [...e[25] || (e[25] = [
                            Q(" No workspaces ", -1)
                          ])]),
                          _: 1
                        })) : j("", !0)
                      ]),
                      _: 1
                    })
                  ]),
                  default: f(() => {
                    var A;
                    return [
                      n("span", at, [
                        Q(J(B.value ? "All workspace" : ((A = te.value) == null ? void 0 : A.title) || "Select Workspace") + " ", 1),
                        w(r, { class: "nav-arrow" }, {
                          default: f(() => [
                            w(W(fo))
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }),
                  _: 1
                })) : j("", !0),
                Ae.value ? (_(), x("span", ct, "/")) : j("", !0),
                Ae.value ? (_(), Z(le, {
                  key: 2,
                  trigger: "hover"
                }, {
                  dropdown: f(() => [
                    w(ce, null, {
                      default: f(() => [
                        (_(!0), x(Re, null, We(Je.value, (A) => (_(), Z(q, {
                          key: A.label,
                          class: $e({ active: A.active })
                        }, {
                          default: f(() => [
                            n("a", {
                              href: Eo(A),
                              class: "nav-link",
                              onClick: ue((me) => Co(A), ["prevent"])
                            }, J(A.label), 9, dt)
                          ]),
                          _: 2
                        }, 1032, ["class"]))), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  default: f(() => [
                    n("span", ut, [
                      Q(J(yo.value) + " ", 1),
                      w(r, { class: "nav-arrow" }, {
                        default: f(() => [
                          w(W(fo))
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })) : j("", !0)
              ]),
              !Ae.value && He.value ? (_(), x("div", pt, [...e[26] || (e[26] = [
                n("h1", null, "Team Worklogs", -1),
                n("p", null, "View all team member work entries and progress updates", -1)
              ])])) : j("", !0),
              !Ae.value && Xe.value ? (_(), x("div", ft)) : j("", !0)
            ])) : j("", !0),
            n("div", gt, [
              w(le, {
                onCommand: he,
                trigger: "click",
                placement: "bottom-end"
              }, {
                dropdown: f(() => [
                  w(ce, null, {
                    default: f(() => [
                      w(q, null, {
                        default: f(() => [
                          n("a", {
                            href: "/profile",
                            class: "nav-link",
                            onClick: e[1] || (e[1] = ue((A) => he("profile"), ["prevent"]))
                          }, "Profile Settings")
                        ]),
                        _: 1
                      }),
                      o.showWorkspaceSelector ? (_(), Z(q, { key: 0 }, {
                        default: f(() => [
                          n("a", {
                            href: "#switch-workspace",
                            class: "nav-link",
                            onClick: e[2] || (e[2] = ue((A) => he("workspaces"), ["prevent"]))
                          }, "Switch Workspace")
                        ]),
                        _: 1
                      })) : j("", !0),
                      He.value ? j("", !0) : (_(), Z(q, { key: 1 }, {
                        default: f(() => [
                          n("a", {
                            href: "https://worklog.aiworkspace.pro/worklogs",
                            class: "nav-link",
                            onClick: e[3] || (e[3] = ue((A) => he("worklogs"), ["prevent"]))
                          }, "Worklogs")
                        ]),
                        _: 1
                      })),
                      w(q, null, {
                        default: f(() => [
                          n("a", {
                            href: "https://drms.aiworkspace.pro/dashboard",
                            class: "nav-link",
                            onClick: e[4] || (e[4] = ue((A) => he("drms"), ["prevent"]))
                          }, "Direct Reportee")
                        ]),
                        _: 1
                      }),
                      He.value ? (_(), Z(q, { key: 2 }, {
                        default: f(() => [
                          n("a", {
                            href: "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard",
                            class: "nav-link",
                            onClick: e[5] || (e[5] = ue((A) => he("allworkspaces"), ["prevent"]))
                          }, "All workspaces")
                        ]),
                        _: 1
                      })) : j("", !0),
                      w(q, {
                        onClick: $o,
                        class: "version-item"
                      }, {
                        default: f(() => [
                          n("div", yt, [
                            e[27] || (e[27] = n("span", { class: "version-label" }, "Version:", -1)),
                            n("span", bt, J(F.value), 1),
                            w(l, {
                              size: "small",
                              type: "text",
                              onClick: ue(oo, ["stop"]),
                              class: "refresh-button",
                              loading: N.value
                            }, {
                              default: f(() => [
                                w(r, null, {
                                  default: f(() => [
                                    w(W(Fe))
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
                      w(q, { divided: "" }, {
                        default: f(() => [
                          n("a", {
                            href: "#signout",
                            class: "nav-link",
                            onClick: e[6] || (e[6] = ue((A) => he("logout"), ["prevent"]))
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
                      n("span", vt, J(X.value.name), 1)
                    ]),
                    n("div", mt, [
                      X.value.avatar_url ? (_(), x("img", {
                        key: 0,
                        src: X.value.avatar_url,
                        alt: X.value.name
                      }, null, 8, kt)) : (_(), x("span", _t, J(X.value.initials), 1))
                    ])
                  ])
                ]),
                _: 1
              })
            ])
          ])) : (_(), x("div", St, [
            n("div", Ct, [
              n("div", Et, [
                n("a", At, [
                  o.customLogo ? (_(), x("img", {
                    key: 0,
                    src: o.customLogo,
                    alt: "AIWorkspace",
                    class: "logo-image"
                  }, null, 8, It)) : (_(), x("div", Lt, [...e[28] || (e[28] = [
                    n("span", { class: "logo-text" }, "AI Workspace", -1)
                  ])]))
                ])
              ])
            ]),
            e[30] || (e[30] = n("div", { class: "header-center" }, [
              n("span", { class: "welcome-text" }, "Welcome to AI Workspace")
            ], -1)),
            pe.value ? j("", !0) : (_(), x("div", Ht, [
              w(l, {
                type: "primary",
                size: "large",
                class: "login-button",
                onClick: e[7] || (e[7] = (A) => V.value = !0)
              }, {
                default: f(() => [
                  w(r, null, {
                    default: f(() => [
                      w(W(je))
                    ]),
                    _: 1
                  }),
                  e[29] || (e[29] = Q(" Login / Signup ", -1))
                ]),
                _: 1
              })
            ]))
          ])),
          se.value && o.showWorkspaceSelector ? (_(), Z(Ie, {
            key: 5,
            modelValue: v.value,
            "onUpdate:modelValue": e[9] || (e[9] = (A) => v.value = A),
            title: "Switch Workspace",
            width: "500px",
            onClose: e[10] || (e[10] = (A) => v.value = !1)
          }, {
            footer: f(() => [
              w(l, {
                onClick: e[8] || (e[8] = (A) => v.value = !1)
              }, {
                default: f(() => [...e[31] || (e[31] = [
                  Q("Cancel", -1)
                ])]),
                _: 1
              }),
              w(l, {
                type: "primary",
                onClick: Ao
              }, {
                default: f(() => [...e[32] || (e[32] = [
                  Q("Create New Workspace", -1)
                ])]),
                _: 1
              })
            ]),
            default: f(() => [
              n("div", Rt, [
                (_(!0), x(Re, null, We(b.value, (A) => {
                  var me, uo;
                  return _(), x("div", {
                    key: A.id,
                    class: $e(["workspace-item", { active: A.id === ((me = te.value) == null ? void 0 : me.id) }]),
                    onClick: (zt) => eo(A)
                  }, [
                    n("div", Ut, J(A.children && A.children.length ? "📁" : "📄"), 1),
                    n("div", Tt, [
                      n("h3", null, J(A.title), 1),
                      n("p", null, J(A.description), 1),
                      n("span", Pt, J(A.hasAccess ? "Active" : "Inactive"), 1)
                    ]),
                    A.id === ((uo = te.value) == null ? void 0 : uo.id) ? (_(), x("div", xt, [
                      w(r, null, {
                        default: f(() => [
                          w(W(es))
                        ]),
                        _: 1
                      })
                    ])) : j("", !0)
                  ], 10, Vt);
                }), 128))
              ])
            ]),
            _: 1
          }, 8, ["modelValue"])) : j("", !0),
          w(Es, {
            modelValue: V.value,
            "onUpdate:modelValue": e[11] || (e[11] = (A) => V.value = A),
            onLoginSuccess: Lo
          }, null, 8, ["modelValue"]),
          w($s, {
            modelValue: m.value,
            "onUpdate:modelValue": e[12] || (e[12] = (A) => m.value = A),
            "session-loss-event": W($),
            "can-retry-session": W(d) || !1,
            onRetry: Ho,
            onLogin: Ro,
            onRefresh: Vo
          }, null, 8, ["modelValue", "session-loss-event", "can-retry-session"])
        ]),
        re.value ? (_(), Z(Go, {
          key: 0,
          title: "New Version Available!",
          type: "warning",
          closable: !0,
          onClose: co,
          "show-icon": "",
          class: "update-alert"
        }, {
          default: f(() => [
            n("div", Dt, [
              e[35] || (e[35] = n("p", null, "A new version of the application is available. Please reload to get the latest updates and features.", -1)),
              n("div", Mt, [
                w(l, {
                  type: "primary",
                  size: "small",
                  onClick: No
                }, {
                  default: f(() => [...e[33] || (e[33] = [
                    Q(" Reload Now ", -1)
                  ])]),
                  _: 1
                }),
                w(l, {
                  size: "small",
                  onClick: co
                }, {
                  default: f(() => [...e[34] || (e[34] = [
                    Q(" Dismiss ", -1)
                  ])]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        })) : j("", !0)
      ], 64);
    };
  }
});
const ha = /* @__PURE__ */ xe(Nt, [["__scopeId", "data-v-4964adfd"]]), Gt = { class: "auth-callback" }, Ot = /* @__PURE__ */ de({
  __name: "AuthCallback",
  setup(o) {
    Ee(async () => {
      console.log("[AuthCallback] Component mounted, starting callback processing..."), console.log("[AuthCallback] Current URL:", window.location.href), console.log("[AuthCallback] Current hash:", window.location.hash);
      try {
        await new Promise((g) => setTimeout(g, 500));
        const { data: a, error: i } = await Te.auth.getSession();
        if (i) {
          console.error("Error processing callback:", i), s();
          return;
        }
        if (a != null && a.session) {
          const g = a.session.user;
          console.log("OAuth login successful:", g.email), a.session.access_token && Se(ye, a.session.access_token), a.session.refresh_token && Se(be, a.session.refresh_token), Be();
          const k = Jo();
          console.log("[callback] Post-login redirect URL:", k), console.log("[callback] Session storage redirect:", sessionStorage.getItem("post-login-redirect")), console.log("[callback] Local storage redirect:", localStorage.getItem("post-login-redirect"));
          const I = k || "/";
          if (console.log("[callback] Final redirect URL:", I), I.startsWith("/")) {
            const E = window.location.origin, $ = `${E}${I}`;
            console.log("[callback] redirecting to:", $, { hostname: window.location.hostname, origin: E }), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
              window.location.href = $;
            }, 100);
          } else
            console.log("[callback] redirecting to absolute URL:", I), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
              window.location.href = I;
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
    return (a, i) => (_(), x("div", Gt, [...i[0] || (i[0] = [
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
const wa = /* @__PURE__ */ xe(Ot, [["__scopeId", "data-v-acdf6325"]]), we = class we {
  constructor() {
    ke(this, "validationCache", /* @__PURE__ */ new Map());
    ke(this, "CACHE_DURATION", ko().validationCacheDuration);
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
    return we.instance || (we.instance = new we()), we.instance;
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
      const k = this.getCookieValue("sb-access-token"), I = this.getCookieValue("sb-refresh-token");
      if (!k || !I) {
        const y = {
          isValid: !1,
          needsLogin: !0,
          error: "No authentication tokens found",
          canRetry: !1
        };
        return this.cacheResult(a, y), y;
      }
      const E = await ee();
      let $ = null, h = null;
      for (let y = 1; y <= 2; y++)
        try {
          const p = await E.auth.getSession();
          $ = p.data.session, h = p.error;
          break;
        } catch (p) {
          if (console.warn(`[SessionValidator] Network error on attempt ${y}:`, p), y === 2) {
            const R = {
              isValid: !1,
              needsLogin: !1,
              // Don't force login on network issues
              error: "Network error during validation",
              canRetry: !0
            };
            return this.cacheResult(a, R), R;
          }
          await new Promise((R) => setTimeout(R, 1e3));
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
      if (!$ || !$.user) {
        const y = {
          isValid: !1,
          needsLogin: !0,
          error: "No valid session found",
          canRetry: !0
        };
        return this.cacheResult(a, y), y;
      }
      const d = /* @__PURE__ */ new Date(), c = new Date($.expires_at * 1e3), u = 5 * 60 * 1e3;
      if (d >= new Date(c.getTime() - u)) {
        const y = {
          isValid: !1,
          needsLogin: !0,
          error: "Session is close to expiry or expired",
          canRetry: !0
        };
        return this.cacheResult(a, y), y;
      }
      const D = {
        isValid: !0,
        needsLogin: !1,
        canRetry: !1
      };
      return this.cacheResult(a, D), D;
    } catch (k) {
      console.error("[SessionValidator] Error validating session:", k);
      const I = {
        isValid: !1,
        needsLogin: !1,
        // Don't force login on unexpected errors
        error: `Validation error: ${k}`,
        canRetry: !0
      };
      return this.cacheResult(a, I), I;
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
      const i = await ee(), { data: g, error: k } = await i.auth.setSession({
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
ke(we, "instance");
let Ke = we;
const qe = Ke.getInstance(), Bt = (o = !1) => qe.validateSession(o), Ft = () => qe.restoreSession(), jt = () => qe.clearCache();
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
  ye as ACCESS_COOKIE,
  ha as AIWorkspaceHeader,
  wa as AuthCallback,
  Ia as LS_ACCESS_KEY,
  La as LS_REFRESH_KEY,
  Es as LoginModal,
  Pe as PackageError,
  be as REFRESH_COOKIE,
  $s as SessionLossModal,
  Ke as SessionValidator,
  Ha as buildOAuthRedirectUrl,
  vs as clearGitHubTokenCache,
  Oe as clearLocalStorageTokens,
  jt as clearSessionCache,
  _e as clearSessionCookie,
  da as configureGitHub,
  ya as configureSupabase,
  ds as conservativeConfig,
  ia as createSessionConfig,
  ga as debugDatabaseConnection,
  ha as default,
  ve as defaultSessionConfig,
  ua as detectionScenarios,
  vo as developmentConfig,
  Ra as ensureCrossSubdomainCookies,
  us as fastDetectionConfig,
  la as getConfigByPreset,
  Va as getCookie,
  Ye as getGitHubToken,
  Jo as getPostLoginBase,
  ko as getSessionConfig,
  ee as getSupabase,
  is as handleBundlingError,
  ba as handleDomainChangeAuth,
  qo as initializeCrossSubdomainAuth,
  va as initializeSessionValidation,
  pa as isGitHubConfigured,
  mo as productionConfig,
  fa as refreshGitHubToken,
  Sa as restoreCrossSubdomainSession,
  Ft as restoreSession,
  Ge as restoreSessionWithRetry,
  Zt as safeExecute,
  ea as safeExecuteAsync,
  sa as safeGetCookie,
  aa as safeGetLocalStorage,
  oa as safeImport,
  ta as safeSetCookie,
  ra as safeSetLocalStorage,
  na as safeWindowOperation,
  ps as sessionConfigPresets,
  qe as sessionValidator,
  Se as setSessionCookie,
  Ca as setupAuthStateListener,
  ls as setupGlobalErrorHandler,
  Ea as setupImmediateCrossSubdomainAuth,
  ma as setupNetworkAwareValidation,
  Ta as setupUniversalCallback,
  Te as supabase,
  Be as syncCookiesToLocalStorage,
  ca as timingInfo,
  ms as useAuth,
  cs as useEnhancedAuth,
  fs as useSessionMonitor,
  gs as useWorkspaceStore,
  Bt as validateSession
};
