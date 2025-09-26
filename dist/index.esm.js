var Wo = Object.defineProperty;
var No = (o, s, t) => s in o ? Wo(o, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[s] = t;
var we = (o, s, t) => (No(o, typeof s != "symbol" ? s + "" : s, t), t);
import { defineComponent as ue, openBlock as y, createElementBlock as M, createElementVNode as i, ref as C, computed as X, onMounted as Ce, onUnmounted as po, watch as pe, reactive as Go, resolveComponent as ie, createBlock as te, withCtx as h, toDisplayString as K, createVNode as v, unref as W, withModifiers as ge, createCommentVNode as J, createTextVNode as q, Fragment as Le, createStaticVNode as He, normalizeClass as De, renderList as Me, normalizeStyle as Oo } from "vue";
import { ElForm as Bo, ElMessage as z, ElDialog as Fo, ElIcon as Ve, ElButton as $e, ElProgress as jo, ElMessageBox as lo } from "element-plus";
import { i as zo, g as Z, r as We, s as Ue } from "./supabase-667a6377.mjs";
import { c as ma, h as va, b as wa, d as ka, a as _a } from "./supabase-667a6377.mjs";
import { clearSessionCookie as ke, ACCESS_COOKIE as _e, REFRESH_COOKIE as ye, clearLocalStorageTokens as Ne, setSessionCookie as be, syncCookiesToLocalStorage as Ge, getPostLoginBase as Ko } from "./utils/authRedirect.js";
import { LS_ACCESS_KEY as ba, LS_REFRESH_KEY as Sa, buildOAuthRedirectUrl as Ca, ensureCrossSubdomainCookies as Ea, getCookie as Aa } from "./utils/authRedirect.js";
import { defineStore as Yo } from "pinia";
import { setupUniversalCallback as La } from "./utils/universalCallback.js";
/*! Element Plus Icons Vue v2.3.2 */
var qo = /* @__PURE__ */ ue({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(o) {
    return (s, t) => (y(), M("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"
      })
    ]));
  }
}), co = qo, Jo = /* @__PURE__ */ ue({
  name: "Check",
  __name: "check",
  setup(o) {
    return (s, t) => (y(), M("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      })
    ]));
  }
}), Xo = Jo, Qo = /* @__PURE__ */ ue({
  name: "Lock",
  __name: "lock",
  setup(o) {
    return (s, t) => (y(), M("svg", {
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
}), uo = Qo, Zo = /* @__PURE__ */ ue({
  name: "Message",
  __name: "message",
  setup(o) {
    return (s, t) => (y(), M("svg", {
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
}), es = Zo, os = /* @__PURE__ */ ue({
  name: "Refresh",
  __name: "refresh",
  setup(o) {
    return (s, t) => (y(), M("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), Oe = os, ss = /* @__PURE__ */ ue({
  name: "User",
  __name: "user",
  setup(o) {
    return (s, t) => (y(), M("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"
      })
    ]));
  }
}), Be = ss, ts = /* @__PURE__ */ ue({
  name: "Warning",
  __name: "warning",
  setup(o) {
    return (s, t) => (y(), M("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"
      })
    ]));
  }
}), fo = ts;
class Re extends Error {
  constructor(t, n = {}, f) {
    super(t);
    we(this, "context");
    we(this, "originalError");
    this.name = "PackageError", this.context = n, this.originalError = f;
  }
}
function Yt(o, s = {}, t) {
  try {
    const n = o();
    return n instanceof Promise ? n.catch((f) => {
      if (console.warn("[ErrorHandler] Async operation failed:", {
        context: s,
        error: f.message,
        stack: f.stack
      }), t !== void 0)
        return t;
      throw new Re(
        `Async operation failed: ${f.message}`,
        s,
        f
      );
    }) : n;
  } catch (n) {
    if (console.warn("[ErrorHandler] Operation failed:", {
      context: s,
      error: n instanceof Error ? n.message : String(n),
      stack: n instanceof Error ? n.stack : void 0
    }), t !== void 0)
      return t;
    throw new Re(
      `Operation failed: ${n instanceof Error ? n.message : String(n)}`,
      s,
      n instanceof Error ? n : void 0
    );
  }
}
async function qt(o, s = {}, t) {
  try {
    return await o();
  } catch (n) {
    if (console.warn("[ErrorHandler] Async operation failed:", {
      context: s,
      error: n instanceof Error ? n.message : String(n),
      stack: n instanceof Error ? n.stack : void 0
    }), t !== void 0)
      return t;
    throw new Re(
      `Async operation failed: ${n instanceof Error ? n.message : String(n)}`,
      s,
      n instanceof Error ? n : void 0
    );
  }
}
function as(o, s = {}) {
  const t = o.message.toLowerCase();
  if (t.includes("is not a function") || t.includes("cannot read property") || t.includes("undefined is not a function")) {
    console.warn("[ErrorHandler] Bundling error detected:", {
      context: s,
      error: o.message,
      suggestion: "This may be due to minification or import issues. The package will continue with fallback behavior."
    });
    return;
  }
  throw new Re(
    `Unexpected error: ${o.message}`,
    s,
    o
  );
}
async function Jt(o, s = {}, t) {
  try {
    return await o();
  } catch (n) {
    return console.warn("[ErrorHandler] Import failed:", {
      context: s,
      error: n instanceof Error ? n.message : String(n)
    }), t !== void 0 ? t : void 0;
  }
}
function Xt(o) {
  var s;
  try {
    if (typeof document > "u")
      return null;
    const n = `; ${document.cookie}`.split(`; ${o}=`);
    return n.length === 2 && ((s = n.pop()) == null ? void 0 : s.split(";").shift()) || null;
  } catch (t) {
    return console.warn("[ErrorHandler] Cookie access failed:", {
      cookieName: o,
      error: t instanceof Error ? t.message : String(t)
    }), null;
  }
}
function Qt(o, s, t = {}) {
  try {
    if (typeof document > "u")
      return !1;
    let n = `${o}=${s}`;
    return t.domain && (n += `; domain=${t.domain}`), t.path && (n += `; path=${t.path}`), t.secure && (n += "; secure"), t.sameSite && (n += `; samesite=${t.sameSite}`), t.maxAge && (n += `; max-age=${t.maxAge}`), document.cookie = n, !0;
  } catch (n) {
    return console.warn("[ErrorHandler] Cookie setting failed:", {
      cookieName: o,
      error: n instanceof Error ? n.message : String(n)
    }), !1;
  }
}
function Zt(o) {
  try {
    return typeof localStorage > "u" ? null : localStorage.getItem(o);
  } catch (s) {
    return console.warn("[ErrorHandler] localStorage get failed:", {
      key: o,
      error: s instanceof Error ? s.message : String(s)
    }), null;
  }
}
function ea(o, s) {
  try {
    return typeof localStorage > "u" ? !1 : (localStorage.setItem(o, s), !0);
  } catch (t) {
    return console.warn("[ErrorHandler] localStorage set failed:", {
      key: o,
      error: t instanceof Error ? t.message : String(t)
    }), !1;
  }
}
function oa(o, s) {
  try {
    return typeof window > "u" ? s : o(window);
  } catch (t) {
    return console.warn("[ErrorHandler] Window operation failed:", {
      error: t instanceof Error ? t.message : String(t)
    }), s;
  }
}
function rs() {
  typeof window > "u" || (window.addEventListener("unhandledrejection", (o) => {
    const s = o.reason;
    if (s instanceof Error) {
      const t = s.message.toLowerCase();
      if (t.includes("is not a function") || t.includes("cannot read property") || t.includes("undefined is not a function")) {
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
      const t = s.message.toLowerCase();
      if (t.includes("is not a function") || t.includes("cannot read property") || t.includes("undefined is not a function")) {
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
typeof window < "u" && rs();
function ns() {
  const o = C({
    user: null,
    isAuthenticated: !1,
    isLoading: !0,
    error: null
  }), s = C(null), t = X(() => o.value.isAuthenticated), n = X(() => o.value.user), f = X(() => o.value.isLoading), k = async () => {
    var d, c, u, x, _, p, V, R, S, m, U, w, b, ae, Y, F, G, re, j, I, N;
    try {
      console.log("[auth][enhanced] Starting loadUserInfo..."), console.log("[auth][enhanced] Ensuring cross-subdomain cookie synchronization...");
      const O = "sb-access-token", L = "sb-refresh-token", B = (P) => {
        try {
          const D = location.hostname;
          if (D === "localhost" || /^\d+\.\d+\.\d+\.\d+$/.test(D)) {
            console.log("[auth][enhanced] Skipping cookie sync for localhost");
            return;
          }
          const oe = "aiworkspace.pro";
          if (!D.endsWith(`.${oe}`) && D !== oe) {
            console.log("[auth][enhanced] Skipping cookie sync - not under apex domain");
            return;
          }
          console.log("[auth][enhanced] Performing cookie synchronization"), P.forEach((se) => {
            const de = document.cookie.split(";").find((fe) => fe.trim().startsWith(se + "="));
            if (de) {
              console.log(`[auth][enhanced] Found cookie: ${se}`);
              const fe = de.split("=")[1];
              fe && (document.cookie = `${se}=${fe}; domain=.${oe}; path=/; secure; samesite=lax`);
            }
          });
        } catch (D) {
          console.warn("[auth][enhanced] Error in cookie sync:", D);
        }
      };
      B([O, L]), await new Promise((P) => setTimeout(P, 50)), B([O, L]), await new Promise((P) => setTimeout(P, 50));
      let ee = null;
      try {
        const D = await (await Z()).auth.getSession();
        ee = (d = D == null ? void 0 : D.data) == null ? void 0 : d.session;
      } catch (P) {
        console.warn("[auth][enhanced] Error getting Supabase session:", P);
      }
      if (ee && ee.user) {
        console.log("[auth][enhanced] Active Supabase session found");
        const P = ee.user, D = {
          id: P.id,
          name: ((c = P.user_metadata) == null ? void 0 : c.name) || ((u = P.user_metadata) == null ? void 0 : u.user_name) || ((x = P.user_metadata) == null ? void 0 : x.full_name) || ((_ = P.email) == null ? void 0 : _.split("@")[0]) || "User",
          email: P.email,
          avatar_url: ((p = P.user_metadata) == null ? void 0 : p.avatar_url) || null,
          user_metadata: P.user_metadata
        };
        return o.value = {
          user: D,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, s.value = {
          user: D,
          access_token: ee.access_token,
          refresh_token: ee.refresh_token
        }, { user: D, session: s.value, error: null };
      }
      console.log("[auth][enhanced] No active session, attempting to restore from cookies...");
      const ne = await We();
      if (ne.success && ne.session) {
        console.log("[auth][enhanced] Session restored successfully from cookies");
        const P = ne.session.user, D = {
          id: P.id,
          name: ((V = P.user_metadata) == null ? void 0 : V.name) || ((R = P.user_metadata) == null ? void 0 : R.user_name) || ((S = P.user_metadata) == null ? void 0 : S.full_name) || ((m = P.email) == null ? void 0 : m.split("@")[0]) || "User",
          email: P.email,
          avatar_url: ((U = P.user_metadata) == null ? void 0 : U.avatar_url) || null,
          user_metadata: P.user_metadata
        };
        return o.value = {
          user: D,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, s.value = ne.session, { user: D, session: s.value, error: null };
      } else {
        console.log("[auth][enhanced] Failed to restore session:", ne.error), console.log("[auth][enhanced] Retrying session restoration with extended delay..."), await new Promise((D) => setTimeout(D, 500)), B([O, L]);
        const P = await We();
        if (P.success && P.session) {
          console.log("[auth][enhanced] Session restored on retry");
          const D = P.session.user, oe = {
            id: D.id,
            name: ((w = D.user_metadata) == null ? void 0 : w.name) || ((b = D.user_metadata) == null ? void 0 : b.user_name) || ((ae = D.user_metadata) == null ? void 0 : ae.full_name) || ((Y = D.email) == null ? void 0 : Y.split("@")[0]) || "User",
            email: D.email,
            avatar_url: ((F = D.user_metadata) == null ? void 0 : F.avatar_url) || null,
            user_metadata: D.user_metadata
          };
          return o.value = {
            user: oe,
            isAuthenticated: !0,
            isLoading: !1,
            error: null
          }, s.value = P.session, { user: oe, session: s.value, error: null };
        }
      }
    } catch (O) {
      console.error("Error getting Supabase session:", O), O instanceof Error && as(O, {
        component: "useEnhancedAuth",
        function: "loadUserInfo",
        operation: "session_validation"
      });
      try {
        const L = await We();
        if (L.success && L.session) {
          console.log("[auth][enhanced] Session restored after error");
          const B = L.session.user, ee = {
            id: B.id,
            name: ((G = B.user_metadata) == null ? void 0 : G.name) || ((re = B.user_metadata) == null ? void 0 : re.user_name) || ((j = B.user_metadata) == null ? void 0 : j.full_name) || ((I = B.email) == null ? void 0 : I.split("@")[0]) || "User",
            email: B.email,
            avatar_url: ((N = B.user_metadata) == null ? void 0 : N.avatar_url) || null,
            user_metadata: B.user_metadata
          };
          return o.value = {
            user: ee,
            isAuthenticated: !0,
            isLoading: !1,
            error: null
          }, s.value = L.session, { user: ee, session: s.value, error: null };
        }
      } catch (L) {
        console.error("Error restoring session:", L);
      }
    }
    return console.log("[auth][enhanced] No valid authentication found"), o.value = {
      user: null,
      isAuthenticated: !1,
      isLoading: !1,
      error: "No valid session found"
    }, s.value = null, { user: null, session: null, error: "No valid session found" };
  }, A = async () => {
    try {
      await (await Z()).auth.signOut(), ke(_e), ke(ye), Ne(), o.value = {
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
    var u, x, _, p, V;
    try {
      o.value.isLoading = !0;
      const R = await Z(), { data: S, error: m } = await R.auth.signInWithPassword({
        email: d,
        password: c
      });
      if (m)
        throw m;
      if (S.session) {
        const U = S.session.user, w = {
          id: U.id,
          name: ((u = U.user_metadata) == null ? void 0 : u.name) || ((x = U.user_metadata) == null ? void 0 : x.user_name) || ((_ = U.user_metadata) == null ? void 0 : _.full_name) || ((p = U.email) == null ? void 0 : p.split("@")[0]) || "User",
          email: U.email,
          avatar_url: ((V = U.user_metadata) == null ? void 0 : V.avatar_url) || null,
          user_metadata: U.user_metadata
        };
        return o.value = {
          user: w,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, s.value = {
          user: w,
          access_token: S.session.access_token,
          refresh_token: S.session.refresh_token
        }, { user: w, session: s.value, error: null };
      }
      return { user: null, session: null, error: "No session returned" };
    } catch (R) {
      return console.error("Sign in error:", R), o.value.isLoading = !1, { user: null, session: null, error: String(R) };
    }
  }, $ = async (d, c, u) => {
    var x, _, p, V, R;
    try {
      o.value.isLoading = !0;
      const S = await Z(), { data: m, error: U } = await S.auth.signUp({
        email: d,
        password: c,
        options: {
          data: u
        }
      });
      if (U)
        throw U;
      if (m.session) {
        const w = m.session.user, b = {
          id: w.id,
          name: ((x = w.user_metadata) == null ? void 0 : x.name) || ((_ = w.user_metadata) == null ? void 0 : _.user_name) || ((p = w.user_metadata) == null ? void 0 : p.full_name) || ((V = w.email) == null ? void 0 : V.split("@")[0]) || "User",
          email: w.email,
          avatar_url: ((R = w.user_metadata) == null ? void 0 : R.avatar_url) || null,
          user_metadata: w.user_metadata
        };
        return o.value = {
          user: b,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, s.value = {
          user: b,
          access_token: m.session.access_token,
          refresh_token: m.session.refresh_token
        }, { user: b, session: s.value, error: null };
      }
      return { user: null, session: null, error: "No session returned" };
    } catch (S) {
      return console.error("Sign up error:", S), o.value.isLoading = !1, { user: null, session: null, error: String(S) };
    }
  }, g = async () => {
    await k();
  };
  return Ce(async () => {
    await zo(), await g();
  }), {
    // State
    authState: o,
    currentSession: s,
    // Computed
    isAuthenticated: t,
    currentUser: n,
    isLoading: f,
    // Methods
    loadUserInfo: k,
    logout: A,
    signIn: E,
    signUp: $,
    checkAuth: g
  };
}
const me = {
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
}, is = {
  ...me,
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
}, ls = {
  ...me,
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
}, go = {
  ...me,
  normalCheckInterval: 1e4,
  // 10 seconds - faster for testing
  fastCheckInterval: 2e3,
  // 2 seconds - very fast for testing
  fastMonitoringDuration: 3e4,
  // 30 seconds - shorter for testing
  validationCacheDuration: 1e3
  // 1 second cache for testing
}, ho = {
  ...me,
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
      return ho;
    case "development":
      return go;
    default:
      return me;
  }
}
function sa(o) {
  return {
    ...me,
    ...o
  };
}
const cs = {
  default: me,
  fast: is,
  conservative: ls,
  development: go,
  production: ho
};
function ta(o) {
  return cs[o];
}
const aa = {
  immediate: "Immediate (0-2 seconds) - When logout is detected via auth events",
  fast: "Fast (2-5 seconds) - When fast monitoring is active",
  normal: "Normal (up to 30 seconds) - Regular monitoring interval",
  conservative: "Conservative (up to 60 seconds) - Less frequent monitoring"
}, ra = {
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
function us(o) {
  const s = C(!0), t = C(null), n = C(!1), f = C(!1), k = C(null), A = C(null), E = C(null), $ = { ...mo(), ...o }, g = $.normalCheckInterval, d = $.fastCheckInterval, c = $.fastMonitoringDuration, u = $.maxRetryAttempts, x = $.retryDelay, _ = X(() => !s.value && t.value !== null), p = X(
    () => {
      var I, N;
      return ((I = t.value) == null ? void 0 : I.canRetry) && ((N = t.value) == null ? void 0 : N.type) !== "manual_check_failed";
    }
  ), V = (I) => {
    var L;
    if (typeof document > "u")
      return null;
    const O = `; ${document.cookie}`.split(`; ${I}=`);
    return O.length === 2 && ((L = O.pop()) == null ? void 0 : L.split(";").shift()) || null;
  }, R = async () => {
    var I, N;
    try {
      console.log("[SessionMonitor] Validating session...");
      const O = V("sb-access-token"), L = V("sb-refresh-token");
      if (!O || !L)
        return console.log("[SessionMonitor] No tokens found in cookies"), !1;
      const B = await Z();
      let ee = null, ne = null;
      for (let se = 1; se <= 2; se++)
        try {
          const de = await B.auth.getSession();
          ee = de.data.session, ne = de.error;
          break;
        } catch (de) {
          if (console.warn(`[SessionMonitor] Network error on attempt ${se}:`, de), se === 2)
            return console.log("[SessionMonitor] Network issues detected, maintaining current session state"), s.value;
          await new Promise((fe) => setTimeout(fe, 1e3));
        }
      if (ne)
        return console.warn("[SessionMonitor] Error getting session:", ne), (I = ne.message) != null && I.includes("Invalid JWT") || (N = ne.message) != null && N.includes("JWT expired") ? !1 : s.value;
      if (!ee || !ee.user)
        return console.log("[SessionMonitor] No valid session found"), !1;
      const P = /* @__PURE__ */ new Date(), D = new Date(ee.expires_at * 1e3), oe = 5 * 60 * 1e3;
      return P >= new Date(D.getTime() - oe) ? (console.log("[SessionMonitor] Session is close to expiry or expired"), !1) : (console.log("[SessionMonitor] Session is valid"), k.value = /* @__PURE__ */ new Date(), !0);
    } catch (O) {
      return console.error("[SessionMonitor] Error validating session:", O), s.value;
    }
  }, S = async () => {
    try {
      console.log("[SessionMonitor] Attempting to restore session...");
      const I = V("sb-access-token"), N = V("sb-refresh-token");
      if (!I || !N)
        return console.log("[SessionMonitor] No tokens available for restoration"), !1;
      const O = await Z(), { data: L, error: B } = await O.auth.setSession({
        access_token: I,
        refresh_token: N
      });
      return B ? (console.warn("[SessionMonitor] Error restoring session:", B), !1) : L.session && L.session.user ? (console.log("[SessionMonitor] Session restored successfully"), k.value = /* @__PURE__ */ new Date(), !0) : !1;
    } catch (I) {
      return console.error("[SessionMonitor] Error restoring session:", I), !1;
    }
  }, m = (I, N, O = !0) => {
    console.warn("[SessionMonitor] Session loss detected:", { type: I, message: N }), s.value = !1, t.value = {
      type: I,
      message: N,
      timestamp: /* @__PURE__ */ new Date(),
      canRetry: O
    };
  }, U = async () => {
    console.log("[SessionMonitor] Retrying session validation...");
    for (let I = 1; I <= u; I++) {
      if (console.log(`[SessionMonitor] Retry attempt ${I}/${u}`), I > 1 && await new Promise((L) => setTimeout(L, x)), await S() && await R())
        return console.log("[SessionMonitor] Session restored and validated successfully"), s.value = !0, t.value = null, !0;
      if (await R())
        return console.log("[SessionMonitor] Session validated successfully on retry"), s.value = !0, t.value = null, !0;
    }
    return console.log("[SessionMonitor] All retry attempts failed"), !1;
  }, w = () => {
    console.log("[SessionMonitor] Clearing session loss state"), s.value = !0, t.value = null;
  }, b = () => {
    if (n.value) {
      console.log("[SessionMonitor] Already monitoring, skipping start");
      return;
    }
    console.log("[SessionMonitor] Starting session monitoring..."), n.value = !0, setTimeout(async () => {
      console.log("[SessionMonitor] Performing initial session validation..."), await R() ? console.log("[SessionMonitor] Initial validation successful") : (console.log("[SessionMonitor] Initial validation failed, but waiting for confirmation..."), setTimeout(async () => {
        await R() || m("session_expired", "Your session has expired. Please log in again.", !0);
      }, 3e3));
    }, 2e3), A.value = setInterval(async () => {
      console.log("[SessionMonitor] Periodic session check...");
      const I = await R();
      !I && s.value ? (console.log("[SessionMonitor] Session validation failed, performing confirmation check..."), setTimeout(async () => {
        await R() || m("session_expired", "Your session has expired. Please log in again.", !0);
      }, 2e3)) : I && !s.value && (console.log("[SessionMonitor] Session recovered"), w());
    }, g);
  }, ae = () => {
    if (f.value) {
      console.log("[SessionMonitor] Fast monitoring already active");
      return;
    }
    console.log("[SessionMonitor] Starting fast monitoring (5s intervals)..."), f.value = !0, E.value && clearInterval(E.value), E.value = setInterval(async () => {
      console.log("[SessionMonitor] Fast session check...");
      const I = await R();
      !I && s.value ? (console.log("[SessionMonitor] Fast monitoring detected potential session loss, confirming..."), setTimeout(async () => {
        await R() || (m("session_expired", "Your session has expired. Please log in again.", !0), Y());
      }, 1e3)) : I && !s.value && (console.log("[SessionMonitor] Session recovered"), w(), Y());
    }, d), setTimeout(() => {
      f.value && (console.log(`[SessionMonitor] Auto-stopping fast monitoring after ${c / 1e3} seconds`), Y());
    }, c);
  }, Y = () => {
    f.value && (console.log("[SessionMonitor] Stopping fast monitoring..."), f.value = !1, E.value && (clearInterval(E.value), E.value = null));
  }, F = () => {
    n.value && (console.log("[SessionMonitor] Stopping session monitoring..."), n.value = !1, A.value && (clearInterval(A.value), A.value = null), Y());
  }, G = async () => {
    console.log("[SessionMonitor] Manual session check requested");
    const I = await R();
    return !I && !await S() ? (m("manual_check_failed", "Session validation failed. Please log in again.", !1), !1) : I;
  }, re = () => {
    console.log("[SessionMonitor] Network error detected, but not triggering immediate session loss"), s.value || m("network_error", "Network connection lost. Please check your internet connection and try again.", !0);
  }, j = () => {
    if (typeof window > "u")
      return;
    const I = () => {
      var L;
      console.log("[SessionMonitor] Network connection restored"), _.value && ((L = t.value) == null ? void 0 : L.type) === "network_error" && setTimeout(() => U(), 1e3);
    }, N = () => {
      console.log("[SessionMonitor] Network connection lost"), re();
    }, O = (L) => {
      console.log("[SessionMonitor] Logout detected, starting fast monitoring for immediate detection"), ae();
    };
    return window.addEventListener("online", I), window.addEventListener("offline", N), window.addEventListener("session-logout-detected", O), () => {
      window.removeEventListener("online", I), window.removeEventListener("offline", N), window.removeEventListener("session-logout-detected", O);
    };
  };
  return Ce(() => {
    console.log("[SessionMonitor] Mounted, setting up monitoring"), b(), j();
  }), po(() => {
    console.log("[SessionMonitor] Unmounted, cleaning up"), F();
  }), {
    // State
    isSessionValid: s,
    sessionLossEvent: t,
    isMonitoring: n,
    isFastMonitoring: f,
    lastValidSession: k,
    // Computed
    hasSessionLoss: _,
    canRetrySession: p,
    // Methods
    validateSession: R,
    restoreSession: S,
    retrySession: U,
    clearSessionLoss: w,
    startMonitoring: b,
    stopMonitoring: F,
    startFastMonitoring: ae,
    stopFastMonitoring: Y,
    checkSession: G,
    handleNetworkError: re
  };
}
const ds = Yo("workspace", () => {
  const o = C(null), s = C([]), t = C(null), n = (g) => {
    o.value = g, localStorage.setItem("current_workspace", JSON.stringify(g));
  }, f = (g) => {
    s.value = g, localStorage.setItem("available_workspaces", JSON.stringify(g));
  };
  return {
    currentWorkspace: o,
    workspaces: s,
    user: t,
    setCurrentWorkspace: n,
    setWorkspaces: f,
    setUser: (g) => {
      t.value = g, localStorage.setItem("user_info", JSON.stringify(g));
    },
    loadPersistedData: () => {
      const g = localStorage.getItem("current_workspace");
      if (g)
        try {
          o.value = JSON.parse(g);
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
          t.value = JSON.parse(c);
        } catch (u) {
          console.error("Error loading persisted user:", u);
        }
    },
    clearData: () => {
      o.value = null, s.value = [], t.value = null, localStorage.removeItem("current_workspace"), localStorage.removeItem("available_workspaces"), localStorage.removeItem("user_info");
    },
    loadWorkspaces: async (g = !1) => {
      try {
        const { data: { user: d } } = await Ue.auth.getUser();
        if (!d)
          return [];
        let c = Ue.from("workspaces").select(`
          id, title, description, parent_workspace_id, created_by, archived, created_at, git_repo, 
          workspace_access!inner ( access_type, shared_with_user_id ),
          workspace_activities!left ( updated_at )
        `).eq("workspace_access.shared_with_user_id", d.id);
        g || (c = c.eq("archived", !1));
        const { data: u, error: x } = await c;
        if (x)
          throw x;
        const _ = /* @__PURE__ */ new Map();
        (u || []).forEach((m) => {
          (m.workspace_access || []).forEach((U) => {
            U.shared_with_user_id === d.id && _.set(m.id, U);
          });
        });
        const p = [...new Set(
          (u || []).filter((m) => m.parent_workspace_id).map((m) => m.parent_workspace_id).filter((m) => !_.has(m))
        )];
        let V = [];
        if (p.length) {
          let m = Ue.from("workspaces").select("id, title, description, parent_workspace_id, created_by, archived, created_at").in("id", p);
          g || (m = m.eq("archived", !1));
          const { data: U, error: w } = await m;
          if (w)
            throw w;
          V = U || [];
        }
        const S = [...u || [], ...V].map((m) => {
          var U, w, b;
          return {
            id: m.id,
            title: m.title,
            description: m.description || "No description",
            parent_workspace_id: m.parent_workspace_id,
            created_by: m.created_by,
            archived: m.archived,
            created_at: m.created_at,
            latest_activity: ((w = (U = m.workspace_activities) == null ? void 0 : U[0]) == null ? void 0 : w.updated_at) || m.created_at,
            hasAccess: _.has(m.id),
            accessType: ((b = _.get(m.id)) == null ? void 0 : b.access_type) || null
          };
        });
        return S.sort((m, U) => new Date(U.latest_activity) - new Date(m.latest_activity)), f(S), S;
      } catch (d) {
        return console.error("loadWorkspaces error", d), [];
      }
    }
  };
});
let Se = null;
const Fe = (o) => !(!o || typeof o != "string" || o.trim().length === 0 || o.trim().length < 20), ps = async () => {
  try {
    const { createClient: o } = await import("@supabase/supabase-js"), s = { VITE_SUPABASE_URL: void 0, VITE_SUPABASE_ANON_KEY: void 0, BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_SUPABASE_SERVICE_ROLE_KEY || { VITE_SUPABASE_URL: void 0, VITE_SUPABASE_ANON_KEY: void 0, BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_SUPABASE_SERVICE_KEY || window.__SUPABASE_SERVICE_KEY__;
    return s ? (console.log("[GitHub Config] Using service role key for settings access"), o(
      "https://sb.aiworkspace.pro",
      s
    )) : (console.log("[GitHub Config] No service key found, using regular client"), await Z());
  } catch (o) {
    return console.warn("[GitHub Config] Failed to create admin client, using regular client:", o), await Z();
  }
}, fs = async () => {
  var o;
  try {
    console.log("[GitHub Config] Attempting to fetch GitHub token from database...");
    const s = await ps();
    console.log("[GitHub Config] Testing table access methods...");
    const { data: t, error: n } = await s.from("settings").select("key_name, key_value");
    let f = t, k = n;
    if (n && n.code === "PGRST301") {
      console.log("[GitHub Config] Direct access blocked by RLS, trying alternative method...");
      const { data: d, error: c } = await s.from("settings").select("key_name, key_value").eq("key_name", "github_token");
      f = d, k = c;
    }
    if (console.log("[GitHub Config] All settings rows:", f), console.log("[GitHub Config] Query error (if any):", k), f) {
      console.log("[GitHub Config] Looking for github_token in rows...");
      const d = f.filter(
        (c) => c.key_name && (c.key_name.toLowerCase() === "github_token" || c.key_name === "github_token" || c.key_name.includes("github"))
      );
      if (console.log("[GitHub Config] GitHub-related rows found:", d), d.length > 0) {
        const c = (o = d[0].key_value) == null ? void 0 : o.trim();
        if (c && Fe(c))
          return console.log("🔧 GitHub token found in general query!"), console.log("Token preview:", c.substring(0, 8) + "..." + c.substring(c.length - 4)), console.log("Token length:", c.length), console.log("Token starts with:", c.substring(0, 4)), c;
      }
    }
    const { data: A, error: E, count: $ } = await s.from("settings").select("key_value", { count: "exact" }).eq("key_name", "github_token");
    if (console.log("[GitHub Config] Specific query result:", { data: A, error: E, count: $ }), E)
      return console.warn("[GitHub Config] Database error details:", {
        code: E.code,
        message: E.message,
        details: E.details,
        hint: E.hint
      }), E.code === "PGRST116" ? console.info("[GitHub Config] No GitHub token configured in database (PGRST116)") : console.warn("[GitHub Config] Error fetching token from database:", E.message), null;
    const g = Array.isArray(A) ? A[0] : A;
    if (g != null && g.key_value) {
      const d = g.key_value.trim();
      return Fe(d) ? (console.log("🔧 GitHub token fetched from database successfully"), console.log("Token preview:", d.substring(0, 8) + "..." + d.substring(d.length - 4)), console.log("Token length:", d.length), console.log("Token starts with:", d.substring(0, 4)), d) : (console.warn("[GitHub Config] Invalid GitHub token format in database"), null);
    }
    return console.warn("[GitHub Config] No GitHub token found in database - data was:", g), null;
  } catch (s) {
    return console.error("[GitHub Config] Failed to fetch token from database:", s), null;
  }
}, na = (o) => {
  if (!(o != null && o.token) || !Fe(o.token))
    throw console.error("[GitHub Config] Invalid GitHub token provided"), new Error("Invalid GitHub token provided");
  Se = o.token.trim(), console.log("🔧 GitHub token configured manually");
}, ze = async () => {
  if (Se)
    return Se;
  try {
    const o = await fs();
    if (o)
      return Se = o, o;
  } catch (o) {
    console.error("[GitHub Config] Failed to fetch token:", o);
  }
  return null;
}, ia = async () => {
  if (Se !== null)
    return !0;
  try {
    return await ze() !== null;
  } catch (o) {
    return console.error("[GitHub Config] Error checking configuration:", o), !1;
  }
}, gs = () => {
  Se = null, console.log("🔧 GitHub token cache cleared");
}, la = async () => (gs(), await ze()), ca = async () => {
  try {
    console.log("[GitHub Config Debug] Testing database connection...");
    const o = await Z(), { data: s, error: t } = await o.from("settings").select("*").limit(10);
    console.log("[GitHub Config Debug] Settings table sample (first 10 rows):", s), console.log("[GitHub Config Debug] Query error:", t), s && (console.log("[GitHub Config Debug] Column structure of first row:", Object.keys(s[0] || {})), console.log("[GitHub Config Debug] All key_name values:", s.map((g) => g.key_name)));
    const { data: n, error: f } = await o.from("settings").select("*").eq("key_name", "github_token");
    console.log("[GitHub Config Debug] Exact github_token match:", n), console.log("[GitHub Config Debug] Exact match error:", f);
    const { data: k, error: A } = await o.from("settings").select("*").ilike("key_name", "%github%");
    console.log("[GitHub Config Debug] Case-insensitive GitHub search:", k), console.log("[GitHub Config Debug] Case-insensitive error:", A);
    const { data: E, error: $ } = await o.rpc("get_table_columns", { table_name: "settings" }).limit(1);
    console.log("[GitHub Config Debug] Table structure info:", E), console.log("[GitHub Config Debug] Table structure error:", $);
  } catch (o) {
    console.error("[GitHub Config Debug] Database connection test failed:", o);
  }
};
function hs() {
  const o = C({
    user: null,
    isAuthenticated: !1,
    isLoading: !0,
    error: null
  }), s = C(window.location.href), t = async () => {
    var g, d, c, u, x, _, p, V;
    try {
      o.value.isLoading = !0;
      const R = await Z(), { data: { session: S }, error: m } = await R.auth.getSession();
      if (m) {
        console.error("Error checking auth status:", m), o.value = {
          user: null,
          isAuthenticated: !1,
          isLoading: !1,
          error: m.message
        };
        return;
      }
      S != null && S.user ? (o.value = {
        user: {
          id: S.user.id,
          email: S.user.email || "",
          name: ((g = S.user.user_metadata) == null ? void 0 : g.full_name) || ((d = S.user.user_metadata) == null ? void 0 : d.name) || ((c = S.user.email) == null ? void 0 : c.split("@")[0]) || "User",
          avatar_url: ((u = S.user.user_metadata) == null ? void 0 : u.avatar_url) || ((x = S.user.user_metadata) == null ? void 0 : x.picture) || null,
          initials: (((_ = S.user.user_metadata) == null ? void 0 : _.full_name) || ((p = S.user.user_metadata) == null ? void 0 : p.name) || ((V = S.user.email) == null ? void 0 : V.split("@")[0]) || "U").split(" ").map((U) => U[0]).join("").toUpperCase().substring(0, 2)
        },
        isAuthenticated: !0,
        isLoading: !1,
        error: null
      }, S.access_token && be(_e, S.access_token), S.refresh_token && be(ye, S.refresh_token), Ge()) : o.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      };
    } catch (R) {
      console.error("Auth check failed:", R), o.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: R.message || "Authentication check failed"
      };
    }
  }, n = async (g, d) => {
    try {
      const c = await Z(), { error: u } = await c.auth.signInWithPassword({
        email: g,
        password: d
      });
      return u ? { success: !1, error: u.message } : (await t(), sessionStorage.setItem("post-login-redirect", s.value), { success: !0 });
    } catch (c) {
      return console.error("Login error:", c), { success: !1, error: c.message || "Login failed" };
    }
  }, f = async (g, d) => {
    var c;
    try {
      const u = await Z(), { data: x, error: _ } = await u.auth.signUp({
        email: g,
        password: d
      });
      return _ ? { success: !1, error: _.message } : x.user && !x.user.email_confirmed_at ? { success: !0, needsConfirmation: !0 } : (c = x.session) != null && c.user ? (await t(), sessionStorage.setItem("post-login-redirect", s.value), { success: !0 }) : { success: !1, error: "No session created" };
    } catch (u) {
      return console.error("Signup error:", u), { success: !1, error: u.message || "Signup failed" };
    }
  }, k = async (g) => {
    try {
      const d = `${window.location.origin}/auth/callback`;
      console.log("[OAuth] Starting login with provider:", g), console.log("[OAuth] Redirect URL:", d), console.log("[OAuth] Current URL:", s.value), console.log("[OAuth] Current origin:", window.location.origin);
      const c = await Z(), { error: u } = await c.auth.signInWithOAuth({
        provider: g,
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
  }, A = async () => {
    try {
      const g = await Z(), { error: d } = await g.auth.signOut();
      d && console.error("Logout error:", d), o.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      }, ke(_e), ke(ye), Ne();
    } catch (g) {
      console.error("Logout error:", g);
    }
  }, E = async (g) => {
    try {
      const d = await Z(), { error: c } = await d.auth.resetPasswordForEmail(g, {
        redirectTo: `${window.location.origin}/auth/reset-password`
      });
      return c ? { success: !1, error: c.message } : { success: !0 };
    } catch (d) {
      return console.error("Password reset error:", d), { success: !1, error: d.message || "Password reset failed" };
    }
  }, $ = async () => {
    try {
      (await Z()).auth.onAuthStateChange((d, c) => {
        var u;
        switch (console.log("Auth state changed:", d, (u = c == null ? void 0 : c.user) == null ? void 0 : u.email), d) {
          case "SIGNED_IN":
            c != null && c.user && t();
            break;
          case "SIGNED_OUT":
            o.value = {
              user: null,
              isAuthenticated: !1,
              isLoading: !1,
              error: null
            }, ke(_e), ke(ye), Ne();
            break;
          case "TOKEN_REFRESHED":
            c != null && c.access_token && be(_e, c.access_token), c != null && c.refresh_token && be(ye, c.refresh_token), Ge();
            break;
          case "USER_UPDATED":
            c != null && c.user && t();
            break;
        }
      });
    } catch (g) {
      console.warn("Failed to setup auth listener:", g);
    }
  };
  return Ce(async () => {
    $(), await t();
  }), pe(() => window.location.href, (g) => {
    s.value = g;
  }), {
    authState: X(() => o.value),
    isAuthenticated: X(() => o.value.isAuthenticated),
    user: X(() => o.value.user),
    isLoading: X(() => o.value.isLoading),
    checkAuthStatus: t,
    loginWithEmail: n,
    signupWithEmail: f,
    loginWithProvider: k,
    logout: A,
    resetPassword: E,
    currentUrl: X(() => s.value)
  };
}
const ms = { class: "login-container" }, vs = { class: "logo-section" }, ws = { class: "login-buttons" }, ks = {
  key: 0,
  class: "forgot-password"
}, _s = { class: "signup-link" }, ys = /* @__PURE__ */ ue({
  __name: "LoginModal",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue", "login-success"],
  setup(o, { emit: s }) {
    const t = o, n = s, f = X({
      get: () => t.modelValue,
      set: (w) => n("update:modelValue", w)
    }), k = C(!1), A = C(!1), E = C(), { loginWithEmail: $, signupWithEmail: g, loginWithProvider: d, resetPassword: c } = hs(), u = Go({
      email: "",
      password: "",
      confirmPassword: ""
    }), x = X(() => ({
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
            validator: (w, b, ae) => {
              b !== u.password ? ae(new Error("Passwords do not match")) : ae();
            },
            trigger: "blur"
          }
        ]
      } : {}
    })), _ = () => {
      var w;
      k.value = !k.value, u.email = "", u.password = "", u.confirmPassword = "", (w = E.value) == null || w.clearValidate();
    }, p = () => {
      var w;
      f.value = !1, u.email = "", u.password = "", u.confirmPassword = "", k.value = !1, (w = E.value) == null || w.clearValidate();
    }, V = async () => {
      if (E.value)
        try {
          await E.value.validate(), A.value = !0, k.value ? await S() : await R();
        } catch (w) {
          console.error("Form validation failed:", w);
        } finally {
          A.value = !1;
        }
    }, R = async () => {
      const w = await $(u.email, u.password);
      w.success ? (z.success("Login successful"), n("login-success", { email: u.email }), p()) : z.error("Login failed: " + w.error);
    }, S = async () => {
      const w = await g(u.email, u.password);
      w.success ? w.needsConfirmation ? z.success("Please check your email to confirm your account") : (z.success("Account created successfully"), n("login-success", { email: u.email }), p()) : z.error("Signup failed: " + w.error);
    }, m = async (w) => {
      const b = await d(w);
      b.success ? z.success("Redirecting to login provider...") : z.error("Login failed: " + b.error);
    }, U = async () => {
      if (!u.email) {
        z.warning("Please enter your email address first");
        return;
      }
      const w = await c(u.email);
      w.success ? z.success("Password reset email sent! Please check your inbox.") : z.error("Failed to send reset email: " + w.error);
    };
    return (w, b) => {
      const ae = ie("el-icon"), Y = ie("el-input"), F = ie("el-form-item"), G = ie("el-button"), re = ie("el-dialog");
      return y(), te(re, {
        modelValue: f.value,
        "onUpdate:modelValue": b[6] || (b[6] = (j) => f.value = j),
        title: "",
        width: "500px",
        "close-on-click-modal": !1,
        "close-on-press-escape": !0,
        "show-close": !0,
        class: "login-modal",
        onClose: p
      }, {
        default: h(() => [
          i("div", ms, [
            i("div", vs, [
              i("h2", null, K(k.value ? "Create Account" : "Welcome Back"), 1),
              i("p", null, K(k.value ? "Sign up to get started with your account" : "Sign in to continue to your account"), 1)
            ]),
            v(W(Bo), {
              model: u,
              rules: x.value,
              ref_key: "formRef",
              ref: E,
              class: "login-form",
              onSubmit: ge(V, ["prevent"])
            }, {
              default: h(() => [
                v(F, { prop: "email" }, {
                  default: h(() => [
                    v(Y, {
                      modelValue: u.email,
                      "onUpdate:modelValue": b[0] || (b[0] = (j) => u.email = j),
                      placeholder: "Email",
                      type: "email",
                      size: "large",
                      class: "form-input"
                    }, {
                      prefix: h(() => [
                        v(ae, null, {
                          default: h(() => [
                            v(W(es))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                v(F, { prop: "password" }, {
                  default: h(() => [
                    v(Y, {
                      modelValue: u.password,
                      "onUpdate:modelValue": b[1] || (b[1] = (j) => u.password = j),
                      placeholder: "Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: h(() => [
                        v(ae, null, {
                          default: h(() => [
                            v(W(uo))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                k.value ? (y(), te(F, {
                  key: 0,
                  prop: "confirmPassword"
                }, {
                  default: h(() => [
                    v(Y, {
                      modelValue: u.confirmPassword,
                      "onUpdate:modelValue": b[2] || (b[2] = (j) => u.confirmPassword = j),
                      placeholder: "Confirm Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: h(() => [
                        v(ae, null, {
                          default: h(() => [
                            v(W(uo))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                })) : J("", !0),
                v(F, null, {
                  default: h(() => [
                    v(G, {
                      type: "primary",
                      class: "submit-button",
                      loading: A.value,
                      onClick: V,
                      size: "large"
                    }, {
                      default: h(() => [
                        q(K(k.value ? "Sign Up" : "Sign In"), 1)
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model", "rules"]),
            b[10] || (b[10] = i("div", { class: "divider" }, [
              i("span", null, "Or continue with")
            ], -1)),
            i("div", ws, [
              v(G, {
                class: "login-button google",
                onClick: b[3] || (b[3] = (j) => m("google")),
                size: "large"
              }, {
                default: h(() => [...b[7] || (b[7] = [
                  i("span", { class: "social-icon" }, "G", -1),
                  q(" Google ", -1)
                ])]),
                _: 1
              }),
              v(G, {
                class: "login-button github",
                onClick: b[4] || (b[4] = (j) => m("github")),
                size: "large"
              }, {
                default: h(() => [...b[8] || (b[8] = [
                  i("span", { class: "social-icon" }, "⚡", -1),
                  q(" GitHub ", -1)
                ])]),
                _: 1
              }),
              v(G, {
                class: "login-button twitter",
                onClick: b[5] || (b[5] = (j) => m("twitter")),
                size: "large"
              }, {
                default: h(() => [...b[9] || (b[9] = [
                  i("span", { class: "social-icon" }, "X", -1),
                  q(" X (Twitter) ", -1)
                ])]),
                _: 1
              })
            ]),
            b[11] || (b[11] = i("div", { class: "terms" }, " By continuing, you agree to AI Workspace's Terms of Service and Privacy Policy ", -1)),
            k.value ? J("", !0) : (y(), M("div", ks, [
              i("a", {
                href: "#",
                onClick: ge(U, ["prevent"])
              }, "Forgot Password?")
            ])),
            i("div", _s, [
              q(K(k.value ? "Already have an account?" : "Don't have an account?") + " ", 1),
              i("a", {
                href: "#",
                onClick: ge(_, ["prevent"])
              }, K(k.value ? "Sign in" : "Sign up"), 1)
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
const Te = (o, s) => {
  const t = o.__vccOpts || o;
  for (const [n, f] of s)
    t[n] = f;
  return t;
}, bs = /* @__PURE__ */ Te(ys, [["__scopeId", "data-v-684a3f28"]]), Ss = { class: "session-loss-content" }, Cs = { class: "session-loss-icon" }, Es = { class: "session-loss-message" }, As = {
  key: 0,
  class: "session-loss-details"
}, Is = { class: "detail-item" }, Ls = { class: "detail-value" }, Hs = { class: "detail-item" }, Vs = { class: "detail-value" }, Us = { class: "session-loss-actions" }, Rs = {
  key: 0,
  class: "retry-status"
}, Ts = { class: "retry-message" }, Ps = /* @__PURE__ */ ue({
  __name: "SessionLossModal",
  props: {
    modelValue: { type: Boolean },
    sessionLossEvent: {},
    canRetrySession: { type: Boolean }
  },
  emits: ["update:modelValue", "retry", "login", "refresh"],
  setup(o, { emit: s }) {
    const t = o, n = s, f = C(!1), k = C(0), A = C(void 0), E = C(""), $ = X({
      get: () => t.modelValue,
      set: (_) => n("update:modelValue", _)
    }), g = (_) => {
      switch (_) {
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
    }, d = (_) => _.toLocaleString(), c = async () => {
      if (f.value)
        return;
      f.value = !0, k.value = 0, A.value = void 0, E.value = "Attempting to restore session...";
      const _ = setInterval(() => {
        k.value < 90 && (k.value += Math.random() * 20);
      }, 200);
      try {
        n("retry"), await new Promise((p) => setTimeout(p, 2e3)), k.value = 100, A.value = "success", E.value = "Session restored successfully!", setTimeout(() => {
          $.value = !1;
        }, 1e3);
      } catch {
        k.value = 100, A.value = "exception", E.value = "Failed to restore session. Please log in again.", z.error("Session restoration failed");
      } finally {
        clearInterval(_), setTimeout(() => {
          f.value = !1, k.value = 0, A.value = void 0, E.value = "";
        }, 3e3);
      }
    }, u = () => {
      n("login"), $.value = !1;
    }, x = () => {
      n("refresh"), window.location.reload();
    };
    return pe(() => t.sessionLossEvent, (_) => {
      _ && (f.value = !1, k.value = 0, A.value = void 0, E.value = "");
    }), (_, p) => (y(), te(W(Fo), {
      modelValue: $.value,
      "onUpdate:modelValue": p[0] || (p[0] = (V) => $.value = V),
      title: "Session Expired",
      width: "500px",
      "close-on-click-modal": !1,
      "close-on-press-escape": !1,
      "show-close": !1,
      class: "session-loss-modal",
      center: ""
    }, {
      default: h(() => {
        var V;
        return [
          i("div", Ss, [
            i("div", Cs, [
              v(W(Ve), {
                size: "48",
                color: "#f56c6c"
              }, {
                default: h(() => [
                  v(W(fo))
                ]),
                _: 1
              })
            ]),
            i("div", Es, [
              p[3] || (p[3] = i("h3", null, "Your session has expired", -1)),
              i("p", null, K(((V = o.sessionLossEvent) == null ? void 0 : V.message) || "Please log in again to continue using the application."), 1),
              o.sessionLossEvent ? (y(), M("div", As, [
                i("div", Is, [
                  p[1] || (p[1] = i("span", { class: "detail-label" }, "Issue:", -1)),
                  i("span", Ls, K(g(o.sessionLossEvent.type)), 1)
                ]),
                i("div", Hs, [
                  p[2] || (p[2] = i("span", { class: "detail-label" }, "Time:", -1)),
                  i("span", Vs, K(d(o.sessionLossEvent.timestamp)), 1)
                ])
              ])) : J("", !0)
            ]),
            i("div", Us, [
              o.canRetrySession && !f.value ? (y(), te(W($e), {
                key: 0,
                type: "primary",
                onClick: c,
                loading: f.value
              }, {
                default: h(() => [
                  v(W(Ve), null, {
                    default: h(() => [
                      v(W(Oe))
                    ]),
                    _: 1
                  }),
                  p[4] || (p[4] = q(" Try Again ", -1))
                ]),
                _: 1
              }, 8, ["loading"])) : J("", !0),
              v(W($e), {
                type: "primary",
                onClick: u,
                disabled: f.value
              }, {
                default: h(() => [
                  v(W(Ve), null, {
                    default: h(() => [
                      v(W(Be))
                    ]),
                    _: 1
                  }),
                  p[5] || (p[5] = q(" Log In ", -1))
                ]),
                _: 1
              }, 8, ["disabled"]),
              o.canRetrySession ? J("", !0) : (y(), te(W($e), {
                key: 1,
                type: "info",
                onClick: x,
                disabled: f.value
              }, {
                default: h(() => [
                  v(W(Ve), null, {
                    default: h(() => [
                      v(W(Oe))
                    ]),
                    _: 1
                  }),
                  p[6] || (p[6] = q(" Refresh Page ", -1))
                ]),
                _: 1
              }, 8, ["disabled"]))
            ]),
            f.value ? (y(), M("div", Rs, [
              v(W(jo), {
                percentage: k.value,
                status: A.value,
                "stroke-width": 6
              }, null, 8, ["percentage", "status"]),
              i("p", Ts, K(E.value), 1)
            ])) : J("", !0)
          ])
        ];
      }),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const xs = /* @__PURE__ */ Te(Ps, [["__scopeId", "data-v-0dd27f7f"]]), Ds = { class: "aiworkspace-header" }, Ms = {
  key: 0,
  class: "header-content header-loading"
}, $s = { class: "header-center" }, Ws = { class: "loading-text" }, Ns = { key: 0 }, Gs = { key: 1 }, Os = {
  key: 1,
  class: "header-content header-fallback"
}, Bs = {
  key: 2,
  class: "header-content header-restricted"
}, Fs = { class: "header-center" }, js = { class: "restricted-text" }, zs = { class: "header-right" }, Ks = {
  key: 3,
  class: "header-content"
}, Ys = { class: "header-left" }, qs = { class: "logo-section" }, Js = {
  href: "/",
  class: "logo"
}, Xs = ["src"], Qs = {
  key: 1,
  class: "text-logo"
}, Zs = {
  key: 0,
  class: "header-center"
}, et = { class: "main-navigation" }, ot = { class: "nav-item" }, st = {
  href: "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard",
  class: "nav-link"
}, tt = { class: "workspace-dropdown-item" }, at = ["href"], rt = { class: "workspace-icon" }, nt = {
  key: 1,
  class: "nav-divider"
}, it = { class: "nav-item" }, lt = ["href", "onClick"], ct = { class: "header-right" }, ut = { class: "user-profile" }, dt = { class: "user-info" }, pt = { class: "user-name" }, ft = { class: "user-avatar" }, gt = ["src", "alt"], ht = {
  key: 1,
  class: "avatar-placeholder"
}, mt = { class: "version-info" }, vt = { class: "version-hash" }, wt = {
  key: 4,
  class: "header-content header-unauthenticated"
}, kt = { class: "header-left" }, _t = { class: "logo-section" }, yt = {
  href: "/",
  class: "logo"
}, bt = ["src"], St = {
  key: 1,
  class: "text-logo"
}, Ct = {
  key: 0,
  class: "header-right"
}, Et = { class: "workspace-list" }, At = ["onClick"], It = { class: "workspace-icon" }, Lt = { class: "workspace-details" }, Ht = { class: "workspace-members" }, Vt = {
  key: 0,
  class: "current-indicator"
}, Ut = { class: "update-content" }, Rt = { class: "update-actions" }, Ae = 50, Tt = 6e4, Pt = 30, xt = /* @__PURE__ */ ue({
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
    const t = o, n = s, { authState: f, logout: k, isLoading: A } = ns(), {
      isSessionValid: E,
      sessionLossEvent: $,
      hasSessionLoss: g,
      canRetrySession: d,
      retrySession: c,
      clearSessionLoss: u
    } = us(), x = () => {
      try {
        return ds();
      } catch {
        return console.warn("[AIWorkspaceHeader] Pinia not initialized yet, using fallback state"), null;
      }
    }, _ = () => {
      try {
        return typeof window < "u" ? !!window.__PINIA__ || !!window.Pinia : !1;
      } catch {
        return !1;
      }
    }, p = C(x()), V = X(() => !!p.value), R = C(0), S = () => {
      if (!p.value && R.value < Ae) {
        if (_()) {
          const a = x();
          if (a) {
            p.value = a, console.log("[AIWorkspaceHeader] Pinia store initialized successfully");
            return;
          }
        }
        R.value++, setTimeout(S, 100);
      } else
        R.value >= Ae && console.warn("[AIWorkspaceHeader] Pinia initialization failed after maximum retries, using fallback mode");
    };
    Ce(() => {
      p.value || S();
    });
    const m = C(!1), U = C(!1), w = C(!1), b = C([]), ae = C([]), Y = C({
      name: "",
      email: "",
      avatar_url: null,
      initials: ""
    }), F = C("unknown"), G = C("unknown"), re = C(!1), j = C(null), I = C(null), N = C(!1), O = C([]), L = C([]), B = C(!1);
    pe(L, async (a) => {
      a.length > 0 && V.value && oe.value && await D();
    }, { immediate: !1 }), pe(() => window.location.pathname + window.location.search + window.location.hash, async () => {
      V.value && oe.value && await D();
    }, { immediate: !1 });
    const ee = C(window.location.pathname);
    pe(() => window.location.pathname, (a) => {
      ee.value = a;
    }, { immediate: !0 }), pe(V, (a) => {
      !a && R.value < Ae && S();
    });
    const ne = () => {
      try {
        const a = window.location.pathname.match(/\/single-workspace\/(\d+)/);
        if (a)
          return a[1];
        const r = new URLSearchParams(window.location.search).get("workspace_id");
        if (r)
          return r;
        const l = window.location.hash.match(/workspace_id=(\d+)/);
        return l ? l[1] : null;
      } catch (a) {
        return console.warn("[AIWorkspaceHeader] Error parsing URL for workspace_id:", a), null;
      }
    }, P = () => {
      try {
        return window.location.pathname.includes("/all-workspace/");
      } catch (a) {
        return console.warn("[AIWorkspaceHeader] Error checking all-workspace mode:", a), !1;
      }
    }, D = async () => {
      if (!p.value || !V.value)
        return;
      const a = P();
      if (B.value = a, a) {
        p.value.currentWorkspace = null, localStorage.removeItem("current_workspace"), console.log("[AIWorkspaceHeader] Auto-selected all-workspace mode from URL");
        return;
      }
      const e = ne();
      if (e)
        try {
          L.value.length === 0 && await Je();
          const r = L.value.find((l) => l.id.toString() === e);
          r ? (p.value.setCurrentWorkspace(r), console.log(`[AIWorkspaceHeader] Auto-selected workspace from URL: ${r.title} (ID: ${r.id})`), n("workspaceChange", r)) : console.warn(`[AIWorkspaceHeader] Workspace with ID ${e} not found in available workspaces`);
        } catch (r) {
          console.error("[AIWorkspaceHeader] Error auto-selecting workspace from URL:", r);
        }
    }, oe = X(() => f.value.isAuthenticated), se = X(() => p.value ? p.value.currentWorkspace : null), de = X(() => {
      try {
        return window.location.pathname.includes("shared-folder");
      } catch (a) {
        return console.warn("[AIWorkspaceHeader] Error checking shared-folder URL:", a), !1;
      }
    }), fe = C([
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
    ]), vo = C([
      { label: "Dashboard", key: "dashboard", url: "/dashboard" },
      { label: "All Tasks", key: "tasks", url: "/tasks" },
      { label: "All Goals", key: "goals", url: "/goals" },
      { label: "All Events", key: "events", url: "/events" },
      { label: "All Drive", key: "files", url: "/files" },
      { label: "All Contacts", key: "contacts", url: "/contacts" },
      { label: "All Settings", key: "settings", url: "/settings" }
    ]), Ye = X(() => B.value ? vo.value : fe.value), wo = X(() => {
      try {
        const a = ee.value;
        let e = "";
        const r = a.match(/\/all-workspace\/([^\/]+)/);
        if (r)
          e = r[1];
        else {
          const l = a.match(/\/single-workspace\/\d+\/([^\/]+)/);
          if (l)
            e = l[1];
          else {
            const T = a.match(/\/([^\/]+)$/);
            T && (e = T[1]);
          }
        }
        if (e) {
          const l = Ye.value.find(
            (T) => T.key === e || T.url.includes(`/${e}`) || T.url === `/${e}`
          );
          if (l)
            return l.label;
        }
        return "Dashboard";
      } catch (a) {
        return console.warn("[AIWorkspaceHeader] Error determining current section:", a), "Dashboard";
      }
    }), ko = (a) => {
      const e = /* @__PURE__ */ new Map();
      a.forEach((T) => {
        e.set(T.id, { ...T, children: [] });
      });
      const r = [];
      e.forEach((T) => {
        T.parent_workspace_id && e.has(T.parent_workspace_id) ? e.get(T.parent_workspace_id).children.push(T) : r.push(T);
      });
      const l = (T) => {
        T.sort((Q, ce) => Q.title.localeCompare(ce.title)), T.forEach((Q) => {
          Q.children && l(Q.children);
        });
      };
      return l(r), r;
    }, qe = (a, e = 0, r = []) => (a.forEach((l) => {
      r.push({ ...l, level: e }), l.children && l.children.length && qe(l.children, e + 1, r);
    }), r), Je = async () => {
      var a, e, r;
      try {
        const l = await ((a = p.value) == null ? void 0 : a.loadWorkspaces());
        if (O.value = ko(l || []), L.value = qe(O.value), ae.value = L.value, b.value = L.value, t.currentWorkspaceId) {
          const T = L.value.find((Q) => {
            var ce;
            return Q.id.toString() === ((ce = t.currentWorkspaceId) == null ? void 0 : ce.toString());
          });
          T && ((e = p.value) == null || e.setCurrentWorkspace(T));
        } else
          !se.value && L.value.length && ((r = p.value) == null || r.setCurrentWorkspace(L.value[0]));
      } catch (l) {
        console.error("loadWorkspaces (header) error", l);
      }
    }, _o = (a) => {
      if (console.log("Navigation command:", a), a === "all-workspace") {
        window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
        return;
      } else {
        const e = parseInt(a.replace("workspace-", ""));
        window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e}/dashboard`;
        return;
      }
    }, yo = (a) => {
      const e = se.value, r = B.value;
      switch (a.key) {
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
            const l = `https://app.aiworkspace.pro/all-workspace/${a.key}`;
            window.location.href = l;
          } else if (e) {
            const l = `https://app.aiworkspace.pro/single-workspace/${e.id}/${a.key}`;
            window.location.href = l;
          } else {
            const l = `https://app.aiworkspace.pro/${a.key}`;
            window.location.href = l;
          }
          break;
      }
    }, bo = (a) => {
      const e = se.value, r = B.value;
      switch (a.key) {
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
          return r ? `https://app.aiworkspace.pro/all-workspace/${a.key}` : e ? `https://app.aiworkspace.pro/single-workspace/${e.id}/${a.key}` : `https://app.aiworkspace.pro/${a.key}`;
      }
    }, Ie = (a) => {
      switch (a) {
        case "profile":
          t.onProfileClick ? t.onProfileClick() : z.info("Profile settings coming soon");
          break;
        case "workspaces":
          m.value = !0;
          break;
        case "logout":
          Co();
          break;
      }
    }, Xe = (a) => {
      var e;
      (e = p.value) == null || e.setCurrentWorkspace(a), m.value = !1, n("workspaceChange", a), z.success(`Switched to ${a.title}`);
    }, So = () => {
      lo.prompt("Enter workspace name:", "Create New Workspace", {
        confirmButtonText: "Create",
        cancelButtonText: "Cancel",
        inputPattern: /\S/,
        inputErrorMessage: "Workspace name cannot be empty"
      }).then(({ value: a }) => {
        var r;
        const e = {
          id: Date.now(),
          title: a,
          description: "New workspace",
          archived: !1,
          created_by: "",
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          latest_activity: (/* @__PURE__ */ new Date()).toISOString(),
          hasAccess: !0,
          accessType: "edit"
        };
        b.value.push(e), (r = p.value) == null || r.setWorkspaces(b.value), Xe(e), z.success(`Created workspace: ${a}`);
      }).catch(() => {
      });
    }, Co = () => {
      lo.confirm(
        "Are you sure you want to sign out?",
        "Sign Out",
        {
          confirmButtonText: "Sign Out",
          cancelButtonText: "Cancel",
          type: "warning"
        }
      ).then(async () => {
        var a;
        (a = p.value) == null || a.clearData(), await k(), typeof window < "u" && window.dispatchEvent(new CustomEvent("session-logout-detected", {
          detail: { timestamp: /* @__PURE__ */ new Date(), source: "manual-logout" }
        })), n("logout"), z.success("Signed out successfully");
      }).catch(() => {
      });
    }, Pe = async () => {
      var a, e;
      if (f.value.user) {
        const r = f.value.user;
        Y.value = {
          name: r.name || ((a = r.email) == null ? void 0 : a.split("@")[0]) || "User",
          email: r.email || "",
          avatar_url: r.avatar_url || null,
          initials: (r.name || ((e = r.email) == null ? void 0 : e.split("@")[0]) || "U").split(" ").map((l) => l[0]).join("").toUpperCase().substring(0, 2)
        }, t.showWorkspaceSelector && await Je();
      }
    };
    pe(() => f.value.user, (a) => {
      var e;
      a ? Pe() : (Y.value = { name: "", email: "", avatar_url: null, initials: "" }, (e = p.value) == null || e.clearData());
    }), pe(g, (a) => {
      a && oe.value && (console.log("[AIWorkspaceHeader] Session loss detected, showing modal"), w.value = !0);
    }), pe(() => t.currentWorkspaceId, (a) => {
      var e;
      if (a && L.value.length) {
        const r = L.value.find((l) => l.id.toString() === a.toString());
        r && ((e = p.value) == null || e.setCurrentWorkspace(r));
      }
    }), Ce(async () => {
      oe.value && (await Pe(), await D()), await Vo(), ro(), Do();
    });
    const Eo = async (a) => {
      console.log("Login successful:", a), U.value = !1, await Pe(), n("login"), z.success("Welcome back!");
    }, Ao = async () => {
      console.log("[AIWorkspaceHeader] Retrying session..."), await c() ? (w.value = !1, u(), z.success("Session restored successfully!")) : z.error("Failed to restore session. Please log in again.");
    }, Io = () => {
      console.log("[AIWorkspaceHeader] Opening login modal from session loss"), w.value = !1, U.value = !0;
    }, Lo = () => {
      console.log("[AIWorkspaceHeader] Refreshing page due to session loss"), window.location.reload();
    }, Ho = () => {
      R.value = 0, S(), z.success("Manual Pinia retry initiated.");
    }, Vo = async () => {
      try {
        const a = await fetch("/version.json");
        if (a.ok) {
          const e = a.headers.get("content-type");
          if (e && e.includes("application/json"))
            try {
              const r = await a.json();
              console.log("Version data received:", r), F.value = r.shortCommitHash || "unknown", G.value = r.fullCommitHash || "unknown", console.log("✅ Loaded commit hash from version.json:", F.value);
              return;
            } catch {
              console.log("Failed to parse version.json, trying fallback methods...");
            }
        }
        console.log("🔄 version.json not available, trying automatic detection..."), await Ze();
      } catch (a) {
        console.log("Error loading version.json, trying automatic detection...", a), await Ze();
      }
    }, Qe = async () => {
      try {
        let a = await oo();
        if (a || (a = eo()), a) {
          const e = await ao(a);
          e && e !== G.value && (console.log("🔄 New commit detected:", G.value, "→", e), G.value !== "unknown" && !re.value && (re.value = !0, j.value = e));
        }
      } catch (a) {
        console.log("Error checking for new commits:", a);
      }
    }, Ze = async () => {
      try {
        let a = await oo();
        if (a || (a = eo()), a) {
          const T = await ao(a);
          if (T) {
            F.value = T.substring(0, 7), G.value = T, console.log("✅ Loaded commit hash from GitHub API:", F.value);
            return;
          }
        }
        const e = await To();
        if (e && e.version) {
          F.value = e.version, G.value = e.version, console.log("✅ Loaded version from package.json:", F.value);
          return;
        }
        const r = await Po();
        if (r) {
          F.value = r, G.value = r, console.log("✅ Loaded version from build info:", F.value);
          return;
        }
        const l = Date.now().toString(36);
        F.value = l.substring(0, 7), G.value = l, console.log("✅ Using timestamp-based version:", F.value);
      } catch (a) {
        console.warn("❌ All automatic detection methods failed:", a), F.value = "unknown", G.value = "unknown";
      }
    }, eo = () => {
      try {
        const a = window.location.hostname;
        if (a.includes("github.io")) {
          const e = a.split(".");
          if (e.length >= 3) {
            const r = e[0], l = window.location.pathname.split("/")[1] || "unknown";
            return console.log("✅ Detected GitHub Pages repo:", r, l), { owner: r, repo: l };
          }
        }
        return console.log("Could not detect repository from domain:", a), null;
      } catch (a) {
        return console.log("Error detecting repo from domain:", a), null;
      }
    }, oo = async () => {
      try {
        const a = await fetch("/package.json");
        if (!a.ok)
          return console.log("package.json not found or not accessible"), null;
        const e = a.headers.get("content-type");
        if (!e || !e.includes("application/json"))
          return console.log("package.json returned non-JSON content (likely HTML), skipping GitHub API"), null;
        const r = await a.json();
        if (r.repository && r.repository.url) {
          const T = r.repository.url.match(/github\.com\/([^\/]+)\/([^\/]+)/);
          if (T)
            return console.log("✅ Found GitHub repo info:", T[1], T[2].replace(".git", "")), { owner: T[1], repo: T[2].replace(".git", "") };
        }
        return console.log("No valid GitHub repository found in package.json"), null;
      } catch (a) {
        return console.log("Could not get repo info from package.json:", a), null;
      }
    }, so = C(0), xe = C(0), to = C(Date.now()), Uo = () => {
      const a = Date.now();
      a - to.value > 60 * 60 * 1e3 && (xe.value = 0, to.value = a, console.log("🔄 GitHub API call counter reset"));
    }, Ro = async () => {
      try {
        const e = await ze();
        if (e)
          return console.log("✅ Using GitHub token from database"), e;
      } catch (e) {
        console.warn("Failed to get token from database:", e);
      }
      if ({ VITE_SUPABASE_URL: void 0, VITE_SUPABASE_ANON_KEY: void 0, BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_GITHUB_TOKEN)
        return console.log("✅ Using GitHub token from environment"), {}.VITE_GITHUB_TOKEN;
      const a = localStorage.getItem("github_token");
      return a ? (console.log("✅ Using GitHub token from localStorage"), a) : (console.warn("❌ No GitHub token found in any source"), null);
    }, ao = async (a) => {
      var e;
      try {
        const r = Date.now();
        if (Uo(), r - so.value < Tt)
          return console.log("⏳ GitHub API rate limit: waiting before next call"), null;
        if (xe.value >= Pt)
          return console.log("🚫 GitHub API hourly limit reached, skipping call"), null;
        const l = await Ro(), T = {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "AIWorkspace-Header/1.0"
        };
        l ? (T.Authorization = `Bearer ${l}`, console.log("🔑 Using GitHub token for authentication"), console.log("Token preview:", l.substring(0, 8) + "..." + l.substring(l.length - 4)), console.log("Token length:", l.length), console.log("Authorization header:", `Bearer ${l.substring(0, 8)}...`)) : console.log("⚠️ No GitHub token found, trying unauthenticated request");
        const Q = ["main", "master"];
        for (const ce of Q)
          try {
            const le = await fetch(`https://api.github.com/repos/${a.owner}/${a.repo}/commits/${ce}`, {
              headers: T
            });
            if (so.value = r, xe.value++, le.ok) {
              const Ee = await le.json();
              return console.log("✅ GitHub API call successful:", Ee.sha.substring(0, 7)), Ee.sha;
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
    }, To = async () => {
      try {
        const a = await fetch("/package.json");
        if (!a.ok)
          return console.log("package.json not found or not accessible"), null;
        const e = a.headers.get("content-type");
        return !e || !e.includes("application/json") ? (console.log("package.json returned non-JSON content (likely HTML), skipping"), null) : await a.json();
      } catch (a) {
        console.log("Could not get package.json:", a);
      }
      return null;
    }, Po = async () => {
      try {
        const a = ["/build-manifest.json", "/build-info.json", "/.next/build-manifest.json"];
        for (const e of a)
          try {
            const r = await fetch(e);
            if (r.ok) {
              const l = await r.json();
              if (l.version || l.commitHash || l.buildId)
                return l.version || l.commitHash || l.buildId;
            }
          } catch {
          }
      } catch (a) {
        console.log("Could not get build info:", a);
      }
      return null;
    }, xo = async () => {
      try {
        if (G.value === "unknown") {
          z.warning("Version information not available");
          return;
        }
        await navigator.clipboard.writeText(G.value), z.success("Version information copied to clipboard!");
      } catch (a) {
        console.error("Failed to copy version info:", a), z.error("Failed to copy version info");
      }
    }, ro = async () => {
      if (!N.value) {
        N.value = !0;
        try {
          const a = Date.now(), e = await fetch(`/version.json?t=${a}`);
          if (!e.ok)
            throw new Error("Failed to fetch version info");
          const r = e.headers.get("content-type");
          if (!r || !r.includes("application/json")) {
            console.warn("Version check skipped: version.json not properly configured");
            return;
          }
          const l = await e.json();
          j.value = l.fullCommitHash, G.value !== j.value && (re.value || (re.value = !0, console.log("Version mismatch detected:", {
            currentVersion: G.value,
            latestVersion: j.value,
            serverBuildTime: l.buildTime
          })));
        } catch (a) {
          console.error("Error checking for updates:", a);
        } finally {
          N.value = !1;
        }
      }
    }, Do = () => {
      I.value = setInterval(() => {
        ro(), Qe();
      }, 5 * 60 * 1e3);
    }, Mo = () => {
      console.log("User reloaded for update:", {
        currentVersion: G.value,
        latestVersion: j.value
      }), window.location.reload();
    }, no = () => {
      re.value = !1, console.log("Update alert dismissed:", {
        currentVersion: G.value,
        latestVersion: j.value
      });
    };
    return po(() => {
      I.value && clearInterval(I.value);
    }), (a, e) => {
      const r = ie("el-icon"), l = ie("el-button"), T = ie("el-tag"), Q = ie("el-dropdown-item"), ce = ie("el-dropdown-menu"), le = ie("el-dropdown"), Ee = ie("el-dialog"), $o = ie("el-alert");
      return y(), M(Le, null, [
        i("header", Ds, [
          !V.value && R.value < Ae || W(A) ? (y(), M("div", Ms, [
            e[10] || (e[10] = He('<div class="header-left" data-v-bc5c0dab><div class="logo-section" data-v-bc5c0dab><a href="/" class="logo" data-v-bc5c0dab><div class="text-logo" data-v-bc5c0dab><span class="logo-text" data-v-bc5c0dab>AI Workspace</span></div></a></div></div>', 1)),
            i("div", $s, [
              i("span", Ws, [
                W(A) ? (y(), M("span", Ns, "Syncing authentication...")) : (y(), M("span", Gs, "Initializing..."))
              ])
            ])
          ])) : !V.value && R.value >= Ae ? (y(), M("div", Os, [
            e[12] || (e[12] = He('<div class="header-left" data-v-bc5c0dab><div class="logo-section" data-v-bc5c0dab><a href="/" class="logo" data-v-bc5c0dab><div class="text-logo" data-v-bc5c0dab><span class="logo-text" data-v-bc5c0dab>AI Workspace</span></div></a></div></div>', 1)),
            i("div", { class: "header-center" }, [
              e[11] || (e[11] = i("span", { class: "fallback-text" }, "Header Ready (Fallback Mode)", -1)),
              i("button", {
                onClick: Ho,
                class: "retry-button"
              }, "Retry Pinia")
            ]),
            e[13] || (e[13] = He('<div class="header-right" data-v-bc5c0dab><div class="user-profile" data-v-bc5c0dab><div class="user-info" data-v-bc5c0dab><span class="user-name" data-v-bc5c0dab>User</span></div><div class="user-avatar" data-v-bc5c0dab><span class="avatar-placeholder" data-v-bc5c0dab>U</span></div></div></div>', 1))
          ])) : oe.value && !W(E) ? (y(), M("div", Bs, [
            e[16] || (e[16] = He('<div class="header-left" data-v-bc5c0dab><div class="logo-section" data-v-bc5c0dab><a href="/" class="logo" data-v-bc5c0dab><div class="text-logo" data-v-bc5c0dab><span class="logo-text" data-v-bc5c0dab>AI Workspace</span></div></a></div></div>', 1)),
            i("div", Fs, [
              i("span", js, [
                v(r, null, {
                  default: h(() => [
                    v(W(fo))
                  ]),
                  _: 1
                }),
                e[14] || (e[14] = q(" Session expired - Please log in again ", -1))
              ])
            ]),
            i("div", zs, [
              v(l, {
                type: "primary",
                onClick: e[0] || (e[0] = (H) => U.value = !0)
              }, {
                default: h(() => [
                  v(r, null, {
                    default: h(() => [
                      v(W(Be))
                    ]),
                    _: 1
                  }),
                  e[15] || (e[15] = q(" Log In ", -1))
                ]),
                _: 1
              })
            ])
          ])) : oe.value && W(E) ? (y(), M("div", Ks, [
            i("div", Ys, [
              i("div", qs, [
                i("a", Js, [
                  o.customLogo ? (y(), M("img", {
                    key: 0,
                    src: o.customLogo,
                    alt: "AIWorkspace",
                    class: "logo-image"
                  }, null, 8, Xs)) : (y(), M("div", Qs, [...e[17] || (e[17] = [
                    i("span", { class: "logo-text" }, "AI Workspace", -1)
                  ])]))
                ])
              ])
            ]),
            o.showSecondaryNavigation ? (y(), M("div", Zs, [
              i("nav", et, [
                o.showWorkspaceSelector ? (y(), te(le, {
                  key: 0,
                  onCommand: _o,
                  trigger: "hover"
                }, {
                  dropdown: h(() => [
                    v(ce, { class: "workspace-tree-dropdown" }, {
                      default: h(() => [
                        v(Q, {
                          command: "all-workspace",
                          class: De({ active: B.value })
                        }, {
                          default: h(() => [
                            i("a", st, [
                              i("div", tt, [
                                e[19] || (e[19] = i("span", { class: "workspace-icon" }, "🌐", -1)),
                                e[20] || (e[20] = i("span", null, "All workspace", -1)),
                                B.value ? (y(), te(T, {
                                  key: 0,
                                  size: "small",
                                  type: "success"
                                }, {
                                  default: h(() => [...e[18] || (e[18] = [
                                    q("Current", -1)
                                  ])]),
                                  _: 1
                                })) : J("", !0)
                              ])
                            ])
                          ]),
                          _: 1
                        }, 8, ["class"]),
                        L.value.length > 0 ? (y(), te(Q, {
                          key: 0,
                          divided: "",
                          disabled: ""
                        })) : J("", !0),
                        (y(!0), M(Le, null, Me(L.value, (H) => (y(), te(Q, {
                          key: H.id,
                          command: `workspace-${H.id}`
                        }, {
                          default: h(() => {
                            var ve;
                            return [
                              i("a", {
                                href: `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${H.id}/dashboard`,
                                class: "nav-link"
                              }, [
                                i("div", {
                                  class: "workspace-dropdown-item",
                                  style: Oo({ paddingLeft: (H.level || 0) * 16 + "px" })
                                }, [
                                  i("span", rt, K(H.children && H.children.length ? "📁" : "📄"), 1),
                                  i("span", null, K(H.title), 1),
                                  H.id === ((ve = se.value) == null ? void 0 : ve.id) ? (y(), te(T, {
                                    key: 0,
                                    size: "small",
                                    type: "success"
                                  }, {
                                    default: h(() => [...e[21] || (e[21] = [
                                      q("Current", -1)
                                    ])]),
                                    _: 1
                                  })) : J("", !0)
                                ], 4)
                              ], 8, at)
                            ];
                          }),
                          _: 2
                        }, 1032, ["command"]))), 128)),
                        L.value.length === 0 ? (y(), te(Q, {
                          key: 1,
                          disabled: ""
                        }, {
                          default: h(() => [...e[22] || (e[22] = [
                            q(" No workspaces ", -1)
                          ])]),
                          _: 1
                        })) : J("", !0)
                      ]),
                      _: 1
                    })
                  ]),
                  default: h(() => {
                    var H;
                    return [
                      i("span", ot, [
                        q(K(B.value ? "All workspace" : ((H = se.value) == null ? void 0 : H.title) || "Select Workspace") + " ", 1),
                        v(r, { class: "nav-arrow" }, {
                          default: h(() => [
                            v(W(co))
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }),
                  _: 1
                })) : J("", !0),
                o.showWorkspaceSelector ? (y(), M("span", nt, "/")) : J("", !0),
                o.showSecondaryNavigation ? (y(), te(le, {
                  key: 2,
                  trigger: "hover"
                }, {
                  dropdown: h(() => [
                    v(ce, null, {
                      default: h(() => [
                        (y(!0), M(Le, null, Me(Ye.value, (H) => (y(), te(Q, {
                          key: H.label,
                          class: De({ active: H.active })
                        }, {
                          default: h(() => [
                            i("a", {
                              href: bo(H),
                              class: "nav-link",
                              onClick: ge((ve) => yo(H), ["prevent"])
                            }, K(H.label), 9, lt)
                          ]),
                          _: 2
                        }, 1032, ["class"]))), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  default: h(() => [
                    i("span", it, [
                      q(K(wo.value) + " ", 1),
                      v(r, { class: "nav-arrow" }, {
                        default: h(() => [
                          v(W(co))
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })) : J("", !0)
              ])
            ])) : J("", !0),
            i("div", ct, [
              v(le, {
                onCommand: Ie,
                trigger: "click",
                placement: "bottom-end"
              }, {
                dropdown: h(() => [
                  v(ce, null, {
                    default: h(() => [
                      v(Q, null, {
                        default: h(() => [
                          i("a", {
                            href: "/profile",
                            class: "nav-link",
                            onClick: e[1] || (e[1] = ge((H) => Ie("profile"), ["prevent"]))
                          }, "Profile Settings")
                        ]),
                        _: 1
                      }),
                      o.showWorkspaceSelector ? (y(), te(Q, { key: 0 }, {
                        default: h(() => [
                          i("a", {
                            href: "#switch-workspace",
                            class: "nav-link",
                            onClick: e[2] || (e[2] = ge((H) => Ie("workspaces"), ["prevent"]))
                          }, "Switch Workspace")
                        ]),
                        _: 1
                      })) : J("", !0),
                      v(Q, {
                        onClick: xo,
                        class: "version-item"
                      }, {
                        default: h(() => [
                          i("div", mt, [
                            e[23] || (e[23] = i("span", { class: "version-label" }, "Version:", -1)),
                            i("span", vt, K(F.value), 1),
                            v(l, {
                              size: "small",
                              type: "text",
                              onClick: ge(Qe, ["stop"]),
                              class: "refresh-button",
                              loading: N.value
                            }, {
                              default: h(() => [
                                v(r, null, {
                                  default: h(() => [
                                    v(W(Oe))
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
                      v(Q, { divided: "" }, {
                        default: h(() => [
                          i("a", {
                            href: "#signout",
                            class: "nav-link",
                            onClick: e[3] || (e[3] = ge((H) => Ie("logout"), ["prevent"]))
                          }, "Sign Out")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                default: h(() => [
                  i("div", ut, [
                    i("div", dt, [
                      i("span", pt, K(Y.value.name), 1)
                    ]),
                    i("div", ft, [
                      Y.value.avatar_url ? (y(), M("img", {
                        key: 0,
                        src: Y.value.avatar_url,
                        alt: Y.value.name
                      }, null, 8, gt)) : (y(), M("span", ht, K(Y.value.initials), 1))
                    ])
                  ])
                ]),
                _: 1
              })
            ])
          ])) : (y(), M("div", wt, [
            i("div", kt, [
              i("div", _t, [
                i("a", yt, [
                  o.customLogo ? (y(), M("img", {
                    key: 0,
                    src: o.customLogo,
                    alt: "AIWorkspace",
                    class: "logo-image"
                  }, null, 8, bt)) : (y(), M("div", St, [...e[24] || (e[24] = [
                    i("span", { class: "logo-text" }, "AI Workspace", -1)
                  ])]))
                ])
              ])
            ]),
            e[26] || (e[26] = i("div", { class: "header-center" }, [
              i("span", { class: "welcome-text" }, "Welcome to AI Workspace")
            ], -1)),
            de.value ? J("", !0) : (y(), M("div", Ct, [
              v(l, {
                type: "primary",
                size: "large",
                class: "login-button",
                onClick: e[4] || (e[4] = (H) => U.value = !0)
              }, {
                default: h(() => [
                  v(r, null, {
                    default: h(() => [
                      v(W(Be))
                    ]),
                    _: 1
                  }),
                  e[25] || (e[25] = q(" Login / Signup ", -1))
                ]),
                _: 1
              })
            ]))
          ])),
          oe.value && o.showWorkspaceSelector ? (y(), te(Ee, {
            key: 5,
            modelValue: m.value,
            "onUpdate:modelValue": e[6] || (e[6] = (H) => m.value = H),
            title: "Switch Workspace",
            width: "500px",
            onClose: e[7] || (e[7] = (H) => m.value = !1)
          }, {
            footer: h(() => [
              v(l, {
                onClick: e[5] || (e[5] = (H) => m.value = !1)
              }, {
                default: h(() => [...e[27] || (e[27] = [
                  q("Cancel", -1)
                ])]),
                _: 1
              }),
              v(l, {
                type: "primary",
                onClick: So
              }, {
                default: h(() => [...e[28] || (e[28] = [
                  q("Create New Workspace", -1)
                ])]),
                _: 1
              })
            ]),
            default: h(() => [
              i("div", Et, [
                (y(!0), M(Le, null, Me(b.value, (H) => {
                  var ve, io;
                  return y(), M("div", {
                    key: H.id,
                    class: De(["workspace-item", { active: H.id === ((ve = se.value) == null ? void 0 : ve.id) }]),
                    onClick: (Gt) => Xe(H)
                  }, [
                    i("div", It, K(H.children && H.children.length ? "📁" : "📄"), 1),
                    i("div", Lt, [
                      i("h3", null, K(H.title), 1),
                      i("p", null, K(H.description), 1),
                      i("span", Ht, K(H.hasAccess ? "Active" : "Inactive"), 1)
                    ]),
                    H.id === ((io = se.value) == null ? void 0 : io.id) ? (y(), M("div", Vt, [
                      v(r, null, {
                        default: h(() => [
                          v(W(Xo))
                        ]),
                        _: 1
                      })
                    ])) : J("", !0)
                  ], 10, At);
                }), 128))
              ])
            ]),
            _: 1
          }, 8, ["modelValue"])) : J("", !0),
          v(bs, {
            modelValue: U.value,
            "onUpdate:modelValue": e[8] || (e[8] = (H) => U.value = H),
            onLoginSuccess: Eo
          }, null, 8, ["modelValue"]),
          v(xs, {
            modelValue: w.value,
            "onUpdate:modelValue": e[9] || (e[9] = (H) => w.value = H),
            "session-loss-event": W($),
            "can-retry-session": W(d) || !1,
            onRetry: Ao,
            onLogin: Io,
            onRefresh: Lo
          }, null, 8, ["modelValue", "session-loss-event", "can-retry-session"])
        ]),
        re.value ? (y(), te($o, {
          key: 0,
          title: "New Version Available!",
          type: "warning",
          closable: !0,
          onClose: no,
          "show-icon": "",
          class: "update-alert"
        }, {
          default: h(() => [
            i("div", Ut, [
              e[31] || (e[31] = i("p", null, "A new version of the application is available. Please reload to get the latest updates and features.", -1)),
              i("div", Rt, [
                v(l, {
                  type: "primary",
                  size: "small",
                  onClick: Mo
                }, {
                  default: h(() => [...e[29] || (e[29] = [
                    q(" Reload Now ", -1)
                  ])]),
                  _: 1
                }),
                v(l, {
                  size: "small",
                  onClick: no
                }, {
                  default: h(() => [...e[30] || (e[30] = [
                    q(" Dismiss ", -1)
                  ])]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        })) : J("", !0)
      ], 64);
    };
  }
});
const ua = /* @__PURE__ */ Te(xt, [["__scopeId", "data-v-bc5c0dab"]]), Dt = { class: "auth-callback" }, Mt = /* @__PURE__ */ ue({
  __name: "AuthCallback",
  setup(o) {
    Ce(async () => {
      console.log("[AuthCallback] Component mounted, starting callback processing..."), console.log("[AuthCallback] Current URL:", window.location.href), console.log("[AuthCallback] Current hash:", window.location.hash);
      try {
        await new Promise((f) => setTimeout(f, 500));
        const { data: t, error: n } = await Ue.auth.getSession();
        if (n) {
          console.error("Error processing callback:", n), s();
          return;
        }
        if (t != null && t.session) {
          const f = t.session.user;
          console.log("OAuth login successful:", f.email), t.session.access_token && be(_e, t.session.access_token), t.session.refresh_token && be(ye, t.session.refresh_token), Ge();
          const k = Ko();
          console.log("[callback] Post-login redirect URL:", k), console.log("[callback] Session storage redirect:", sessionStorage.getItem("post-login-redirect")), console.log("[callback] Local storage redirect:", localStorage.getItem("post-login-redirect"));
          const A = k || "/";
          if (console.log("[callback] Final redirect URL:", A), A.startsWith("/")) {
            const E = window.location.origin, $ = `${E}${A}`;
            console.log("[callback] redirecting to:", $, { hostname: window.location.hostname, origin: E }), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
              window.location.href = $;
            }, 100);
          } else
            console.log("[callback] redirecting to absolute URL:", A), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
              window.location.href = A;
            }, 100);
        } else
          s();
      } catch (t) {
        console.error("Error processing callback:", t), s();
      }
    });
    const s = () => {
      const n = window.location.href.replace("/auth/callback", "");
      window.location.href = n;
    };
    return (t, n) => (y(), M("div", Dt, [...n[0] || (n[0] = [
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
const da = /* @__PURE__ */ Te(Mt, [["__scopeId", "data-v-acdf6325"]]), he = class he {
  constructor() {
    we(this, "validationCache", /* @__PURE__ */ new Map());
    we(this, "CACHE_DURATION", mo().validationCacheDuration);
  }
  // Helper function to get cookie value
  getCookieValue(s) {
    var f;
    if (typeof document > "u")
      return null;
    const n = `; ${document.cookie}`.split(`; ${s}=`);
    return n.length === 2 && ((f = n.pop()) == null ? void 0 : f.split(";").shift()) || null;
  }
  static getInstance() {
    return he.instance || (he.instance = new he()), he.instance;
  }
  /**
   * Validate current session with caching and improved reliability
   */
  async validateSession(s = !1) {
    var n, f;
    const t = "session_validation";
    if (!s) {
      const k = this.validationCache.get(t);
      if (k && Date.now() - k.timestamp < this.CACHE_DURATION)
        return console.log("[SessionValidator] Using cached validation result"), k.result;
    }
    console.log("[SessionValidator] Validating session...");
    try {
      const k = this.getCookieValue("sb-access-token"), A = this.getCookieValue("sb-refresh-token");
      if (!k || !A) {
        const _ = {
          isValid: !1,
          needsLogin: !0,
          error: "No authentication tokens found",
          canRetry: !1
        };
        return this.cacheResult(t, _), _;
      }
      const E = await Z();
      let $ = null, g = null;
      for (let _ = 1; _ <= 2; _++)
        try {
          const p = await E.auth.getSession();
          $ = p.data.session, g = p.error;
          break;
        } catch (p) {
          if (console.warn(`[SessionValidator] Network error on attempt ${_}:`, p), _ === 2) {
            const V = {
              isValid: !1,
              needsLogin: !1,
              // Don't force login on network issues
              error: "Network error during validation",
              canRetry: !0
            };
            return this.cacheResult(t, V), V;
          }
          await new Promise((V) => setTimeout(V, 1e3));
        }
      if (g) {
        console.warn("[SessionValidator] Error getting session:", g);
        const p = {
          isValid: !1,
          needsLogin: ((n = g.message) == null ? void 0 : n.includes("Invalid JWT")) || ((f = g.message) == null ? void 0 : f.includes("JWT expired")),
          error: `Session error: ${g.message}`,
          canRetry: !0
        };
        return this.cacheResult(t, p), p;
      }
      if (!$ || !$.user) {
        const _ = {
          isValid: !1,
          needsLogin: !0,
          error: "No valid session found",
          canRetry: !0
        };
        return this.cacheResult(t, _), _;
      }
      const d = /* @__PURE__ */ new Date(), c = new Date($.expires_at * 1e3), u = 5 * 60 * 1e3;
      if (d >= new Date(c.getTime() - u)) {
        const _ = {
          isValid: !1,
          needsLogin: !0,
          error: "Session is close to expiry or expired",
          canRetry: !0
        };
        return this.cacheResult(t, _), _;
      }
      const x = {
        isValid: !0,
        needsLogin: !1,
        canRetry: !1
      };
      return this.cacheResult(t, x), x;
    } catch (k) {
      console.error("[SessionValidator] Error validating session:", k);
      const A = {
        isValid: !1,
        needsLogin: !1,
        // Don't force login on unexpected errors
        error: `Validation error: ${k}`,
        canRetry: !0
      };
      return this.cacheResult(t, A), A;
    }
  }
  /**
   * Attempt to restore session from tokens
   */
  async restoreSession() {
    console.log("[SessionValidator] Attempting to restore session...");
    try {
      const s = this.getCookieValue("sb-access-token"), t = this.getCookieValue("sb-refresh-token");
      if (!s || !t)
        return {
          isValid: !1,
          needsLogin: !0,
          error: "No tokens available for restoration",
          canRetry: !1
        };
      const n = await Z(), { data: f, error: k } = await n.auth.setSession({
        access_token: s,
        refresh_token: t
      });
      return k ? (console.warn("[SessionValidator] Error restoring session:", k), {
        isValid: !1,
        needsLogin: !0,
        error: `Restoration error: ${k.message}`,
        canRetry: !0
      }) : f.session && f.session.user ? (console.log("[SessionValidator] Session restored successfully"), this.clearCache(), {
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
  cacheResult(s, t) {
    this.validationCache.set(s, {
      result: t,
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
we(he, "instance");
let je = he;
const Ke = je.getInstance(), $t = (o = !1) => Ke.validateSession(o), Wt = () => Ke.restoreSession(), Nt = () => Ke.clearCache();
async function pa() {
  console.log("[SessionValidator] Initializing session validation...");
  let o = await $t();
  return !o.isValid && o.canRetry && (console.log("[SessionValidator] Attempting session restoration..."), o = await Wt()), o;
}
function fa() {
  if (typeof window > "u")
    return () => {
    };
  const o = () => {
    console.log("[SessionValidator] Network restored, clearing cache for revalidation"), Nt();
  }, s = () => {
    console.log("[SessionValidator] Network lost, session validation may fail");
  };
  return window.addEventListener("online", o), window.addEventListener("offline", s), () => {
    window.removeEventListener("online", o), window.removeEventListener("offline", s);
  };
}
export {
  _e as ACCESS_COOKIE,
  ua as AIWorkspaceHeader,
  da as AuthCallback,
  ba as LS_ACCESS_KEY,
  Sa as LS_REFRESH_KEY,
  bs as LoginModal,
  Re as PackageError,
  ye as REFRESH_COOKIE,
  xs as SessionLossModal,
  je as SessionValidator,
  Ca as buildOAuthRedirectUrl,
  gs as clearGitHubTokenCache,
  Ne as clearLocalStorageTokens,
  Nt as clearSessionCache,
  ke as clearSessionCookie,
  na as configureGitHub,
  ma as configureSupabase,
  ls as conservativeConfig,
  sa as createSessionConfig,
  ca as debugDatabaseConnection,
  ua as default,
  me as defaultSessionConfig,
  ra as detectionScenarios,
  go as developmentConfig,
  Ea as ensureCrossSubdomainCookies,
  is as fastDetectionConfig,
  ta as getConfigByPreset,
  Aa as getCookie,
  ze as getGitHubToken,
  Ko as getPostLoginBase,
  mo as getSessionConfig,
  Z as getSupabase,
  as as handleBundlingError,
  va as handleDomainChangeAuth,
  zo as initializeCrossSubdomainAuth,
  pa as initializeSessionValidation,
  ia as isGitHubConfigured,
  ho as productionConfig,
  la as refreshGitHubToken,
  wa as restoreCrossSubdomainSession,
  Wt as restoreSession,
  We as restoreSessionWithRetry,
  Yt as safeExecute,
  qt as safeExecuteAsync,
  Xt as safeGetCookie,
  Zt as safeGetLocalStorage,
  Jt as safeImport,
  Qt as safeSetCookie,
  ea as safeSetLocalStorage,
  oa as safeWindowOperation,
  cs as sessionConfigPresets,
  Ke as sessionValidator,
  be as setSessionCookie,
  ka as setupAuthStateListener,
  rs as setupGlobalErrorHandler,
  _a as setupImmediateCrossSubdomainAuth,
  fa as setupNetworkAwareValidation,
  La as setupUniversalCallback,
  Ue as supabase,
  Ge as syncCookiesToLocalStorage,
  aa as timingInfo,
  hs as useAuth,
  ns as useEnhancedAuth,
  us as useSessionMonitor,
  ds as useWorkspaceStore,
  $t as validateSession
};
