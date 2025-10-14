var Go = Object.defineProperty;
var Oo = (o, s, a) => s in o ? Go(o, s, { enumerable: !0, configurable: !0, writable: !0, value: a }) : o[s] = a;
var ke = (o, s, a) => (Oo(o, typeof s != "symbol" ? s + "" : s, a), a);
import { defineComponent as ue, openBlock as y, createElementBlock as D, createElementVNode as i, ref as E, computed as q, onMounted as Ce, onUnmounted as go, watch as fe, reactive as Bo, resolveComponent as ie, createBlock as Z, withCtx as f, toDisplayString as Y, createVNode as v, unref as W, withModifiers as de, createCommentVNode as K, createTextVNode as Q, Fragment as Le, createStaticVNode as Te, normalizeClass as $e, renderList as We, normalizeStyle as Fo } from "vue";
import { ElForm as jo, ElMessage as z, ElDialog as zo, ElIcon as Ve, ElButton as Ne, ElProgress as Ko, ElMessageBox as uo } from "element-plus";
import { i as Yo, g as ee, r as Ge, s as He } from "./supabase-f4e02f22.mjs";
import { c as ma, h as ka, b as _a, d as ya, a as ba } from "./supabase-f4e02f22.mjs";
import { clearSessionCookie as _e, ACCESS_COOKIE as ye, REFRESH_COOKIE as be, clearLocalStorageTokens as Oe, setSessionCookie as Se, syncCookiesToLocalStorage as Be, getPostLoginBase as qo } from "./utils/authRedirect.js";
import { LS_ACCESS_KEY as Ea, LS_REFRESH_KEY as Ca, buildOAuthRedirectUrl as Aa, ensureCrossSubdomainCookies as Ia, getCookie as La } from "./utils/authRedirect.js";
import { defineStore as Jo } from "pinia";
import { setupUniversalCallback as Va } from "./utils/universalCallback.js";
/*! Element Plus Icons Vue v2.3.2 */
var Xo = /* @__PURE__ */ ue({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(o) {
    return (s, a) => (y(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"
      })
    ]));
  }
}), po = Xo, Qo = /* @__PURE__ */ ue({
  name: "Check",
  __name: "check",
  setup(o) {
    return (s, a) => (y(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      })
    ]));
  }
}), Zo = Qo, es = /* @__PURE__ */ ue({
  name: "Lock",
  __name: "lock",
  setup(o) {
    return (s, a) => (y(), D("svg", {
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
}), fo = es, os = /* @__PURE__ */ ue({
  name: "Message",
  __name: "message",
  setup(o) {
    return (s, a) => (y(), D("svg", {
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
}), ss = os, ts = /* @__PURE__ */ ue({
  name: "Refresh",
  __name: "refresh",
  setup(o) {
    return (s, a) => (y(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), Fe = ts, as = /* @__PURE__ */ ue({
  name: "User",
  __name: "user",
  setup(o) {
    return (s, a) => (y(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"
      })
    ]));
  }
}), je = as, rs = /* @__PURE__ */ ue({
  name: "Warning",
  __name: "warning",
  setup(o) {
    return (s, a) => (y(), D("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"
      })
    ]));
  }
}), ho = rs;
class Ue extends Error {
  constructor(a, n = {}, g) {
    super(a);
    ke(this, "context");
    ke(this, "originalError");
    this.name = "PackageError", this.context = n, this.originalError = g;
  }
}
function Jt(o, s = {}, a) {
  try {
    const n = o();
    return n instanceof Promise ? n.catch((g) => {
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
    }) : n;
  } catch (n) {
    if (console.warn("[ErrorHandler] Operation failed:", {
      context: s,
      error: n instanceof Error ? n.message : String(n),
      stack: n instanceof Error ? n.stack : void 0
    }), a !== void 0)
      return a;
    throw new Ue(
      `Operation failed: ${n instanceof Error ? n.message : String(n)}`,
      s,
      n instanceof Error ? n : void 0
    );
  }
}
async function Xt(o, s = {}, a) {
  try {
    return await o();
  } catch (n) {
    if (console.warn("[ErrorHandler] Async operation failed:", {
      context: s,
      error: n instanceof Error ? n.message : String(n),
      stack: n instanceof Error ? n.stack : void 0
    }), a !== void 0)
      return a;
    throw new Ue(
      `Async operation failed: ${n instanceof Error ? n.message : String(n)}`,
      s,
      n instanceof Error ? n : void 0
    );
  }
}
function ns(o, s = {}) {
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
async function Qt(o, s = {}, a) {
  try {
    return await o();
  } catch (n) {
    return console.warn("[ErrorHandler] Import failed:", {
      context: s,
      error: n instanceof Error ? n.message : String(n)
    }), a !== void 0 ? a : void 0;
  }
}
function Zt(o) {
  var s;
  try {
    if (typeof document > "u")
      return null;
    const n = `; ${document.cookie}`.split(`; ${o}=`);
    return n.length === 2 && ((s = n.pop()) == null ? void 0 : s.split(";").shift()) || null;
  } catch (a) {
    return console.warn("[ErrorHandler] Cookie access failed:", {
      cookieName: o,
      error: a instanceof Error ? a.message : String(a)
    }), null;
  }
}
function ea(o, s, a = {}) {
  try {
    if (typeof document > "u")
      return !1;
    let n = `${o}=${s}`;
    return a.domain && (n += `; domain=${a.domain}`), a.path && (n += `; path=${a.path}`), a.secure && (n += "; secure"), a.sameSite && (n += `; samesite=${a.sameSite}`), a.maxAge && (n += `; max-age=${a.maxAge}`), document.cookie = n, !0;
  } catch (n) {
    return console.warn("[ErrorHandler] Cookie setting failed:", {
      cookieName: o,
      error: n instanceof Error ? n.message : String(n)
    }), !1;
  }
}
function oa(o) {
  try {
    return typeof localStorage > "u" ? null : localStorage.getItem(o);
  } catch (s) {
    return console.warn("[ErrorHandler] localStorage get failed:", {
      key: o,
      error: s instanceof Error ? s.message : String(s)
    }), null;
  }
}
function sa(o, s) {
  try {
    return typeof localStorage > "u" ? !1 : (localStorage.setItem(o, s), !0);
  } catch (a) {
    return console.warn("[ErrorHandler] localStorage set failed:", {
      key: o,
      error: a instanceof Error ? a.message : String(a)
    }), !1;
  }
}
function ta(o, s) {
  try {
    return typeof window > "u" ? s : o(window);
  } catch (a) {
    return console.warn("[ErrorHandler] Window operation failed:", {
      error: a instanceof Error ? a.message : String(a)
    }), s;
  }
}
function is() {
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
typeof window < "u" && is();
function ls() {
  const o = E({
    user: null,
    isAuthenticated: !1,
    isLoading: !0,
    error: null
  }), s = E(null), a = q(() => o.value.isAuthenticated), n = q(() => o.value.user), g = q(() => o.value.isLoading), k = async () => {
    var d, c, u, x, _, p, V, U, S, w, H, m, b, ae, J, F, G, re, j, L, N;
    try {
      console.log("[auth][enhanced] Starting loadUserInfo..."), console.log("[auth][enhanced] Ensuring cross-subdomain cookie synchronization...");
      const O = "sb-access-token", T = "sb-refresh-token", B = (P) => {
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
      B([O, T]), await new Promise((P) => setTimeout(P, 50)), B([O, T]), await new Promise((P) => setTimeout(P, 50));
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
          name: ((c = P.user_metadata) == null ? void 0 : c.name) || ((u = P.user_metadata) == null ? void 0 : u.user_name) || ((x = P.user_metadata) == null ? void 0 : x.full_name) || ((_ = P.email) == null ? void 0 : _.split("@")[0]) || "User",
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
          name: ((V = P.user_metadata) == null ? void 0 : V.name) || ((U = P.user_metadata) == null ? void 0 : U.user_name) || ((S = P.user_metadata) == null ? void 0 : S.full_name) || ((w = P.email) == null ? void 0 : w.split("@")[0]) || "User",
          email: P.email,
          avatar_url: ((H = P.user_metadata) == null ? void 0 : H.avatar_url) || null,
          user_metadata: P.user_metadata
        };
        return o.value = {
          user: M,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, s.value = ne.session, { user: M, session: s.value, error: null };
      } else {
        console.log("[auth][enhanced] Failed to restore session:", ne.error), console.log("[auth][enhanced] Retrying session restoration with extended delay..."), await new Promise((M) => setTimeout(M, 500)), B([O, T]);
        const P = await Ge();
        if (P.success && P.session) {
          console.log("[auth][enhanced] Session restored on retry");
          const M = P.session.user, se = {
            id: M.id,
            name: ((m = M.user_metadata) == null ? void 0 : m.name) || ((b = M.user_metadata) == null ? void 0 : b.user_name) || ((ae = M.user_metadata) == null ? void 0 : ae.full_name) || ((J = M.email) == null ? void 0 : J.split("@")[0]) || "User",
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
      console.error("Error getting Supabase session:", O), O instanceof Error && ns(O, {
        component: "useEnhancedAuth",
        function: "loadUserInfo",
        operation: "session_validation"
      });
      try {
        const T = await Ge();
        if (T.success && T.session) {
          console.log("[auth][enhanced] Session restored after error");
          const B = T.session.user, oe = {
            id: B.id,
            name: ((G = B.user_metadata) == null ? void 0 : G.name) || ((re = B.user_metadata) == null ? void 0 : re.user_name) || ((j = B.user_metadata) == null ? void 0 : j.full_name) || ((L = B.email) == null ? void 0 : L.split("@")[0]) || "User",
            email: B.email,
            avatar_url: ((N = B.user_metadata) == null ? void 0 : N.avatar_url) || null,
            user_metadata: B.user_metadata
          };
          return o.value = {
            user: oe,
            isAuthenticated: !0,
            isLoading: !1,
            error: null
          }, s.value = T.session, { user: oe, session: s.value, error: null };
        }
      } catch (T) {
        console.error("Error restoring session:", T);
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
  }, C = async (d, c) => {
    var u, x, _, p, V;
    try {
      o.value.isLoading = !0;
      const U = await ee(), { data: S, error: w } = await U.auth.signInWithPassword({
        email: d,
        password: c
      });
      if (w)
        throw w;
      if (S.session) {
        const H = S.session.user, m = {
          id: H.id,
          name: ((u = H.user_metadata) == null ? void 0 : u.name) || ((x = H.user_metadata) == null ? void 0 : x.user_name) || ((_ = H.user_metadata) == null ? void 0 : _.full_name) || ((p = H.email) == null ? void 0 : p.split("@")[0]) || "User",
          email: H.email,
          avatar_url: ((V = H.user_metadata) == null ? void 0 : V.avatar_url) || null,
          user_metadata: H.user_metadata
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
    var x, _, p, V, U;
    try {
      o.value.isLoading = !0;
      const S = await ee(), { data: w, error: H } = await S.auth.signUp({
        email: d,
        password: c,
        options: {
          data: u
        }
      });
      if (H)
        throw H;
      if (w.session) {
        const m = w.session.user, b = {
          id: m.id,
          name: ((x = m.user_metadata) == null ? void 0 : x.name) || ((_ = m.user_metadata) == null ? void 0 : _.user_name) || ((p = m.user_metadata) == null ? void 0 : p.full_name) || ((V = m.email) == null ? void 0 : V.split("@")[0]) || "User",
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
          access_token: w.session.access_token,
          refresh_token: w.session.refresh_token
        }, { user: b, session: s.value, error: null };
      }
      return { user: null, session: null, error: "No session returned" };
    } catch (S) {
      return console.error("Sign up error:", S), o.value.isLoading = !1, { user: null, session: null, error: String(S) };
    }
  }, h = async () => {
    await k();
  };
  return Ce(async () => {
    await Yo(), await h();
  }), {
    // State
    authState: o,
    currentSession: s,
    // Computed
    isAuthenticated: a,
    currentUser: n,
    isLoading: g,
    // Methods
    loadUserInfo: k,
    logout: I,
    signIn: C,
    signUp: $,
    checkAuth: h
  };
}
const we = {
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
}, cs = {
  ...we,
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
}, us = {
  ...we,
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
  ...we,
  normalCheckInterval: 1e4,
  // 10 seconds - faster for testing
  fastCheckInterval: 2e3,
  // 2 seconds - very fast for testing
  fastMonitoringDuration: 3e4,
  // 30 seconds - shorter for testing
  validationCacheDuration: 1e3
  // 1 second cache for testing
}, vo = {
  ...we,
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
      return we;
  }
}
function aa(o) {
  return {
    ...we,
    ...o
  };
}
const ds = {
  default: we,
  fast: cs,
  conservative: us,
  development: wo,
  production: vo
};
function ra(o) {
  return ds[o];
}
const na = {
  immediate: "Immediate (0-2 seconds) - When logout is detected via auth events",
  fast: "Fast (2-5 seconds) - When fast monitoring is active",
  normal: "Normal (up to 30 seconds) - Regular monitoring interval",
  conservative: "Conservative (up to 60 seconds) - Less frequent monitoring"
}, ia = {
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
function ps(o) {
  const s = E(!0), a = E(null), n = E(!1), g = E(!1), k = E(null), I = E(null), C = E(null), $ = { ...mo(), ...o }, h = $.normalCheckInterval, d = $.fastCheckInterval, c = $.fastMonitoringDuration, u = $.maxRetryAttempts, x = $.retryDelay, _ = q(() => !s.value && a.value !== null), p = q(
    () => {
      var L, N;
      return ((L = a.value) == null ? void 0 : L.canRetry) && ((N = a.value) == null ? void 0 : N.type) !== "manual_check_failed";
    }
  ), V = (L) => {
    var T;
    if (typeof document > "u")
      return null;
    const O = `; ${document.cookie}`.split(`; ${L}=`);
    return O.length === 2 && ((T = O.pop()) == null ? void 0 : T.split(";").shift()) || null;
  }, U = async () => {
    var L, N;
    try {
      console.log("[SessionMonitor] Validating session...");
      const O = V("sb-access-token"), T = V("sb-refresh-token");
      if (!O || !T)
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
      const L = V("sb-access-token"), N = V("sb-refresh-token");
      if (!L || !N)
        return console.log("[SessionMonitor] No tokens available for restoration"), !1;
      const O = await ee(), { data: T, error: B } = await O.auth.setSession({
        access_token: L,
        refresh_token: N
      });
      return B ? (console.warn("[SessionMonitor] Error restoring session:", B), !1) : T.session && T.session.user ? (console.log("[SessionMonitor] Session restored successfully"), k.value = /* @__PURE__ */ new Date(), !0) : !1;
    } catch (L) {
      return console.error("[SessionMonitor] Error restoring session:", L), !1;
    }
  }, w = (L, N, O = !0) => {
    console.warn("[SessionMonitor] Session loss detected:", { type: L, message: N }), s.value = !1, a.value = {
      type: L,
      message: N,
      timestamp: /* @__PURE__ */ new Date(),
      canRetry: O
    };
  }, H = async () => {
    console.log("[SessionMonitor] Retrying session validation...");
    for (let L = 1; L <= u; L++) {
      if (console.log(`[SessionMonitor] Retry attempt ${L}/${u}`), L > 1 && await new Promise((T) => setTimeout(T, x)), await S() && await U())
        return console.log("[SessionMonitor] Session restored and validated successfully"), s.value = !0, a.value = null, !0;
      if (await U())
        return console.log("[SessionMonitor] Session validated successfully on retry"), s.value = !0, a.value = null, !0;
    }
    return console.log("[SessionMonitor] All retry attempts failed"), !1;
  }, m = () => {
    console.log("[SessionMonitor] Clearing session loss state"), s.value = !0, a.value = null;
  }, b = () => {
    if (n.value) {
      console.log("[SessionMonitor] Already monitoring, skipping start");
      return;
    }
    console.log("[SessionMonitor] Starting session monitoring..."), n.value = !0, setTimeout(async () => {
      console.log("[SessionMonitor] Performing initial session validation..."), await U() ? console.log("[SessionMonitor] Initial validation successful") : (console.log("[SessionMonitor] Initial validation failed, but waiting for confirmation..."), setTimeout(async () => {
        await U() || w("session_expired", "Your session has expired. Please log in again.", !0);
      }, 3e3));
    }, 2e3), I.value = setInterval(async () => {
      console.log("[SessionMonitor] Periodic session check...");
      const L = await U();
      !L && s.value ? (console.log("[SessionMonitor] Session validation failed, performing confirmation check..."), setTimeout(async () => {
        await U() || w("session_expired", "Your session has expired. Please log in again.", !0);
      }, 2e3)) : L && !s.value && (console.log("[SessionMonitor] Session recovered"), m());
    }, h);
  }, ae = () => {
    if (g.value) {
      console.log("[SessionMonitor] Fast monitoring already active");
      return;
    }
    console.log("[SessionMonitor] Starting fast monitoring (5s intervals)..."), g.value = !0, C.value && clearInterval(C.value), C.value = setInterval(async () => {
      console.log("[SessionMonitor] Fast session check...");
      const L = await U();
      !L && s.value ? (console.log("[SessionMonitor] Fast monitoring detected potential session loss, confirming..."), setTimeout(async () => {
        await U() || (w("session_expired", "Your session has expired. Please log in again.", !0), J());
      }, 1e3)) : L && !s.value && (console.log("[SessionMonitor] Session recovered"), m(), J());
    }, d), setTimeout(() => {
      g.value && (console.log(`[SessionMonitor] Auto-stopping fast monitoring after ${c / 1e3} seconds`), J());
    }, c);
  }, J = () => {
    g.value && (console.log("[SessionMonitor] Stopping fast monitoring..."), g.value = !1, C.value && (clearInterval(C.value), C.value = null));
  }, F = () => {
    n.value && (console.log("[SessionMonitor] Stopping session monitoring..."), n.value = !1, I.value && (clearInterval(I.value), I.value = null), J());
  }, G = async () => {
    console.log("[SessionMonitor] Manual session check requested");
    const L = await U();
    return !L && !await S() ? (w("manual_check_failed", "Session validation failed. Please log in again.", !1), !1) : L;
  }, re = () => {
    console.log("[SessionMonitor] Network error detected, but not triggering immediate session loss"), s.value || w("network_error", "Network connection lost. Please check your internet connection and try again.", !0);
  }, j = () => {
    if (typeof window > "u")
      return;
    const L = () => {
      var T;
      console.log("[SessionMonitor] Network connection restored"), _.value && ((T = a.value) == null ? void 0 : T.type) === "network_error" && setTimeout(() => H(), 1e3);
    }, N = () => {
      console.log("[SessionMonitor] Network connection lost"), re();
    }, O = (T) => {
      console.log("[SessionMonitor] Logout detected, starting fast monitoring for immediate detection"), ae();
    };
    return window.addEventListener("online", L), window.addEventListener("offline", N), window.addEventListener("session-logout-detected", O), () => {
      window.removeEventListener("online", L), window.removeEventListener("offline", N), window.removeEventListener("session-logout-detected", O);
    };
  };
  return Ce(() => {
    console.log("[SessionMonitor] Mounted, setting up monitoring"), b(), j();
  }), go(() => {
    console.log("[SessionMonitor] Unmounted, cleaning up"), F();
  }), {
    // State
    isSessionValid: s,
    sessionLossEvent: a,
    isMonitoring: n,
    isFastMonitoring: g,
    lastValidSession: k,
    // Computed
    hasSessionLoss: _,
    canRetrySession: p,
    // Methods
    validateSession: U,
    restoreSession: S,
    retrySession: H,
    clearSessionLoss: m,
    startMonitoring: b,
    stopMonitoring: F,
    startFastMonitoring: ae,
    stopFastMonitoring: J,
    checkSession: G,
    handleNetworkError: re
  };
}
const fs = Jo("workspace", () => {
  const o = E(null), s = E([]), a = E(null), n = (h) => {
    o.value = h, localStorage.setItem("current_workspace", JSON.stringify(h));
  }, g = (h) => {
    s.value = h, localStorage.setItem("available_workspaces", JSON.stringify(h));
  };
  return {
    currentWorkspace: o,
    workspaces: s,
    user: a,
    setCurrentWorkspace: n,
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
        const { data: { user: d } } = await He.auth.getUser();
        if (!d)
          return [];
        let c = He.from("workspaces").select(`
          id, title, description, parent_workspace_id, created_by, archived, created_at, git_repo, 
          workspace_access!inner ( access_type, shared_with_user_id ),
          workspace_activities!left ( updated_at )
        `).eq("workspace_access.shared_with_user_id", d.id);
        h || (c = c.eq("archived", !1));
        const { data: u, error: x } = await c;
        if (x)
          throw x;
        const _ = /* @__PURE__ */ new Map();
        (u || []).forEach((w) => {
          (w.workspace_access || []).forEach((H) => {
            H.shared_with_user_id === d.id && _.set(w.id, H);
          });
        });
        const p = [...new Set(
          (u || []).filter((w) => w.parent_workspace_id).map((w) => w.parent_workspace_id).filter((w) => !_.has(w))
        )];
        let V = [];
        if (p.length) {
          let w = He.from("workspaces").select("id, title, description, parent_workspace_id, created_by, archived, created_at").in("id", p);
          h || (w = w.eq("archived", !1));
          const { data: H, error: m } = await w;
          if (m)
            throw m;
          V = H || [];
        }
        const S = [...u || [], ...V].map((w) => {
          var H, m, b;
          return {
            id: w.id,
            title: w.title,
            description: w.description || "No description",
            parent_workspace_id: w.parent_workspace_id,
            created_by: w.created_by,
            archived: w.archived,
            created_at: w.created_at,
            latest_activity: ((m = (H = w.workspace_activities) == null ? void 0 : H[0]) == null ? void 0 : m.updated_at) || w.created_at,
            hasAccess: _.has(w.id),
            accessType: ((b = _.get(w.id)) == null ? void 0 : b.access_type) || null
          };
        });
        return S.sort((w, H) => new Date(H.latest_activity) - new Date(w.latest_activity)), g(S), S;
      } catch (d) {
        return console.error("loadWorkspaces error", d), [];
      }
    }
  };
});
let Ee = null;
const ze = (o) => !(!o || typeof o != "string" || o.trim().length === 0 || o.trim().length < 20), gs = async () => {
  try {
    const { createClient: o } = await import("@supabase/supabase-js"), s = { VITE_SUPABASE_URL: void 0, VITE_SUPABASE_ANON_KEY: void 0, VITE_GITEA_HOST: "https://g.associateattorney.ai", VITE_GITEA_TOKEN: "52d93839f9b526be9bec18981ea5cb03db2c31e6", VITE_MIXPANEL_TOKEN: "1d129ee408cdfacaa318df9edf862d6a", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_SUPABASE_SERVICE_ROLE_KEY || { VITE_SUPABASE_URL: void 0, VITE_SUPABASE_ANON_KEY: void 0, VITE_GITEA_HOST: "https://g.associateattorney.ai", VITE_GITEA_TOKEN: "52d93839f9b526be9bec18981ea5cb03db2c31e6", VITE_MIXPANEL_TOKEN: "1d129ee408cdfacaa318df9edf862d6a", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_SUPABASE_SERVICE_KEY || window.__SUPABASE_SERVICE_KEY__;
    return s ? (console.log("[GitHub Config] Using service role key for settings access"), o(
      "https://sb.aiworkspace.pro",
      s
    )) : (console.log("[GitHub Config] No service key found, using regular client"), await ee());
  } catch (o) {
    return console.warn("[GitHub Config] Failed to create admin client, using regular client:", o), await ee();
  }
}, hs = async () => {
  var o;
  try {
    console.log("[GitHub Config] Attempting to fetch GitHub token from database...");
    const s = await gs();
    console.log("[GitHub Config] Testing table access methods...");
    const { data: a, error: n } = await s.from("settings").select("key_name, key_value");
    let g = a, k = n;
    if (n && n.code === "PGRST301") {
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
    const { data: I, error: C, count: $ } = await s.from("settings").select("key_value", { count: "exact" }).eq("key_name", "github_token");
    if (console.log("[GitHub Config] Specific query result:", { data: I, error: C, count: $ }), C)
      return console.warn("[GitHub Config] Database error details:", {
        code: C.code,
        message: C.message,
        details: C.details,
        hint: C.hint
      }), C.code === "PGRST116" ? console.info("[GitHub Config] No GitHub token configured in database (PGRST116)") : console.warn("[GitHub Config] Error fetching token from database:", C.message), null;
    const h = Array.isArray(I) ? I[0] : I;
    if (h != null && h.key_value) {
      const d = h.key_value.trim();
      return ze(d) ? (console.log("🔧 GitHub token fetched from database successfully"), console.log("Token preview:", d.substring(0, 8) + "..." + d.substring(d.length - 4)), console.log("Token length:", d.length), console.log("Token starts with:", d.substring(0, 4)), d) : (console.warn("[GitHub Config] Invalid GitHub token format in database"), null);
    }
    return console.warn("[GitHub Config] No GitHub token found in database - data was:", h), null;
  } catch (s) {
    return console.error("[GitHub Config] Failed to fetch token from database:", s), null;
  }
}, la = (o) => {
  if (!(o != null && o.token) || !ze(o.token))
    throw console.error("[GitHub Config] Invalid GitHub token provided"), new Error("Invalid GitHub token provided");
  Ee = o.token.trim(), console.log("🔧 GitHub token configured manually");
}, Ye = async () => {
  if (Ee)
    return Ee;
  try {
    const o = await hs();
    if (o)
      return Ee = o, o;
  } catch (o) {
    console.error("[GitHub Config] Failed to fetch token:", o);
  }
  return null;
}, ca = async () => {
  if (Ee !== null)
    return !0;
  try {
    return await Ye() !== null;
  } catch (o) {
    return console.error("[GitHub Config] Error checking configuration:", o), !1;
  }
}, ws = () => {
  Ee = null, console.log("🔧 GitHub token cache cleared");
}, ua = async () => (ws(), await Ye()), da = async () => {
  try {
    console.log("[GitHub Config Debug] Testing database connection...");
    const o = await ee(), { data: s, error: a } = await o.from("settings").select("*").limit(10);
    console.log("[GitHub Config Debug] Settings table sample (first 10 rows):", s), console.log("[GitHub Config Debug] Query error:", a), s && (console.log("[GitHub Config Debug] Column structure of first row:", Object.keys(s[0] || {})), console.log("[GitHub Config Debug] All key_name values:", s.map((h) => h.key_name)));
    const { data: n, error: g } = await o.from("settings").select("*").eq("key_name", "github_token");
    console.log("[GitHub Config Debug] Exact github_token match:", n), console.log("[GitHub Config Debug] Exact match error:", g);
    const { data: k, error: I } = await o.from("settings").select("*").ilike("key_name", "%github%");
    console.log("[GitHub Config Debug] Case-insensitive GitHub search:", k), console.log("[GitHub Config Debug] Case-insensitive error:", I);
    const { data: C, error: $ } = await o.rpc("get_table_columns", { table_name: "settings" }).limit(1);
    console.log("[GitHub Config Debug] Table structure info:", C), console.log("[GitHub Config Debug] Table structure error:", $);
  } catch (o) {
    console.error("[GitHub Config Debug] Database connection test failed:", o);
  }
};
function vs() {
  const o = E({
    user: null,
    isAuthenticated: !1,
    isLoading: !0,
    error: null
  }), s = E(window.location.href), a = async () => {
    var h, d, c, u, x, _, p, V;
    try {
      o.value.isLoading = !0;
      const U = await ee(), { data: { session: S }, error: w } = await U.auth.getSession();
      if (w) {
        console.error("Error checking auth status:", w), o.value = {
          user: null,
          isAuthenticated: !1,
          isLoading: !1,
          error: w.message
        };
        return;
      }
      S != null && S.user ? (o.value = {
        user: {
          id: S.user.id,
          email: S.user.email || "",
          name: ((h = S.user.user_metadata) == null ? void 0 : h.full_name) || ((d = S.user.user_metadata) == null ? void 0 : d.name) || ((c = S.user.email) == null ? void 0 : c.split("@")[0]) || "User",
          avatar_url: ((u = S.user.user_metadata) == null ? void 0 : u.avatar_url) || ((x = S.user.user_metadata) == null ? void 0 : x.picture) || null,
          initials: (((_ = S.user.user_metadata) == null ? void 0 : _.full_name) || ((p = S.user.user_metadata) == null ? void 0 : p.name) || ((V = S.user.email) == null ? void 0 : V.split("@")[0]) || "U").split(" ").map((H) => H[0]).join("").toUpperCase().substring(0, 2)
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
  }, n = async (h, d) => {
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
      const u = await ee(), { data: x, error: _ } = await u.auth.signUp({
        email: h,
        password: d
      });
      return _ ? { success: !1, error: _.message } : x.user && !x.user.email_confirmed_at ? { success: !0, needsConfirmation: !0 } : (c = x.session) != null && c.user ? (await a(), sessionStorage.setItem("post-login-redirect", s.value), { success: !0 }) : { success: !1, error: "No session created" };
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
      const x = s.value || window.location.href;
      return sessionStorage.setItem("post-login-redirect", x), localStorage.setItem("post-login-redirect", x), console.log("[OAuth] Stored redirect URL:", x), console.log("[OAuth] Current URL value:", s.value), console.log("[OAuth] Window location href:", window.location.href), { success: !0 };
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
  }, C = async (h) => {
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
  return Ce(async () => {
    $(), await a();
  }), fe(() => window.location.href, (h) => {
    s.value = h;
  }), {
    authState: q(() => o.value),
    isAuthenticated: q(() => o.value.isAuthenticated),
    user: q(() => o.value.user),
    isLoading: q(() => o.value.isLoading),
    checkAuthStatus: a,
    loginWithEmail: n,
    signupWithEmail: g,
    loginWithProvider: k,
    logout: I,
    resetPassword: C,
    currentUrl: q(() => s.value)
  };
}
const ms = { class: "login-container" }, ks = { class: "logo-section" }, _s = { class: "login-buttons" }, ys = {
  key: 0,
  class: "forgot-password"
}, bs = { class: "signup-link" }, Ss = /* @__PURE__ */ ue({
  __name: "LoginModal",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue", "login-success"],
  setup(o, { emit: s }) {
    const a = o, n = s, g = q({
      get: () => a.modelValue,
      set: (m) => n("update:modelValue", m)
    }), k = E(!1), I = E(!1), C = E(), { loginWithEmail: $, signupWithEmail: h, loginWithProvider: d, resetPassword: c } = vs(), u = Bo({
      email: "",
      password: "",
      confirmPassword: ""
    }), x = q(() => ({
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
    })), _ = () => {
      var m;
      k.value = !k.value, u.email = "", u.password = "", u.confirmPassword = "", (m = C.value) == null || m.clearValidate();
    }, p = () => {
      var m;
      g.value = !1, u.email = "", u.password = "", u.confirmPassword = "", k.value = !1, (m = C.value) == null || m.clearValidate();
    }, V = async () => {
      if (C.value)
        try {
          await C.value.validate(), I.value = !0, k.value ? await S() : await U();
        } catch (m) {
          console.error("Form validation failed:", m);
        } finally {
          I.value = !1;
        }
    }, U = async () => {
      const m = await $(u.email, u.password);
      m.success ? (z.success("Login successful"), n("login-success", { email: u.email }), p()) : z.error("Login failed: " + m.error);
    }, S = async () => {
      const m = await h(u.email, u.password);
      m.success ? m.needsConfirmation ? z.success("Please check your email to confirm your account") : (z.success("Account created successfully"), n("login-success", { email: u.email }), p()) : z.error("Signup failed: " + m.error);
    }, w = async (m) => {
      const b = await d(m);
      b.success ? z.success("Redirecting to login provider...") : z.error("Login failed: " + b.error);
    }, H = async () => {
      if (!u.email) {
        z.warning("Please enter your email address first");
        return;
      }
      const m = await c(u.email);
      m.success ? z.success("Password reset email sent! Please check your inbox.") : z.error("Failed to send reset email: " + m.error);
    };
    return (m, b) => {
      const ae = ie("el-icon"), J = ie("el-input"), F = ie("el-form-item"), G = ie("el-button"), re = ie("el-dialog");
      return y(), Z(re, {
        modelValue: g.value,
        "onUpdate:modelValue": b[6] || (b[6] = (j) => g.value = j),
        title: "",
        width: "500px",
        "close-on-click-modal": !1,
        "close-on-press-escape": !0,
        "show-close": !0,
        class: "login-modal",
        onClose: p
      }, {
        default: f(() => [
          i("div", ms, [
            i("div", ks, [
              i("h2", null, Y(k.value ? "Create Account" : "Welcome Back"), 1),
              i("p", null, Y(k.value ? "Sign up to get started with your account" : "Sign in to continue to your account"), 1)
            ]),
            v(W(jo), {
              model: u,
              rules: x.value,
              ref_key: "formRef",
              ref: C,
              class: "login-form",
              onSubmit: de(V, ["prevent"])
            }, {
              default: f(() => [
                v(F, { prop: "email" }, {
                  default: f(() => [
                    v(J, {
                      modelValue: u.email,
                      "onUpdate:modelValue": b[0] || (b[0] = (j) => u.email = j),
                      placeholder: "Email",
                      type: "email",
                      size: "large",
                      class: "form-input"
                    }, {
                      prefix: f(() => [
                        v(ae, null, {
                          default: f(() => [
                            v(W(ss))
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
                  default: f(() => [
                    v(J, {
                      modelValue: u.password,
                      "onUpdate:modelValue": b[1] || (b[1] = (j) => u.password = j),
                      placeholder: "Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: f(() => [
                        v(ae, null, {
                          default: f(() => [
                            v(W(fo))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                k.value ? (y(), Z(F, {
                  key: 0,
                  prop: "confirmPassword"
                }, {
                  default: f(() => [
                    v(J, {
                      modelValue: u.confirmPassword,
                      "onUpdate:modelValue": b[2] || (b[2] = (j) => u.confirmPassword = j),
                      placeholder: "Confirm Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: f(() => [
                        v(ae, null, {
                          default: f(() => [
                            v(W(fo))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                })) : K("", !0),
                v(F, null, {
                  default: f(() => [
                    v(G, {
                      type: "primary",
                      class: "submit-button",
                      loading: I.value,
                      onClick: V,
                      size: "large"
                    }, {
                      default: f(() => [
                        Q(Y(k.value ? "Sign Up" : "Sign In"), 1)
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
            i("div", _s, [
              v(G, {
                class: "login-button google",
                onClick: b[3] || (b[3] = (j) => w("google")),
                size: "large"
              }, {
                default: f(() => [...b[7] || (b[7] = [
                  i("span", { class: "social-icon" }, "G", -1),
                  Q(" Google ", -1)
                ])]),
                _: 1
              }),
              v(G, {
                class: "login-button github",
                onClick: b[4] || (b[4] = (j) => w("github")),
                size: "large"
              }, {
                default: f(() => [...b[8] || (b[8] = [
                  i("span", { class: "social-icon" }, "⚡", -1),
                  Q(" GitHub ", -1)
                ])]),
                _: 1
              }),
              v(G, {
                class: "login-button twitter",
                onClick: b[5] || (b[5] = (j) => w("twitter")),
                size: "large"
              }, {
                default: f(() => [...b[9] || (b[9] = [
                  i("span", { class: "social-icon" }, "X", -1),
                  Q(" X (Twitter) ", -1)
                ])]),
                _: 1
              })
            ]),
            b[11] || (b[11] = i("div", { class: "terms" }, " By continuing, you agree to AI Workspace's Terms of Service and Privacy Policy ", -1)),
            k.value ? K("", !0) : (y(), D("div", ys, [
              i("a", {
                href: "#",
                onClick: de(H, ["prevent"])
              }, "Forgot Password?")
            ])),
            i("div", bs, [
              Q(Y(k.value ? "Already have an account?" : "Don't have an account?") + " ", 1),
              i("a", {
                href: "#",
                onClick: de(_, ["prevent"])
              }, Y(k.value ? "Sign in" : "Sign up"), 1)
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
const Re = (o, s) => {
  const a = o.__vccOpts || o;
  for (const [n, g] of s)
    a[n] = g;
  return a;
}, Es = /* @__PURE__ */ Re(Ss, [["__scopeId", "data-v-684a3f28"]]), Cs = { class: "session-loss-content" }, As = { class: "session-loss-icon" }, Is = { class: "session-loss-message" }, Ls = {
  key: 0,
  class: "session-loss-details"
}, Ts = { class: "detail-item" }, Vs = { class: "detail-value" }, Hs = { class: "detail-item" }, Us = { class: "detail-value" }, Rs = { class: "session-loss-actions" }, Ps = {
  key: 0,
  class: "retry-status"
}, xs = { class: "retry-message" }, Ms = /* @__PURE__ */ ue({
  __name: "SessionLossModal",
  props: {
    modelValue: { type: Boolean },
    sessionLossEvent: {},
    canRetrySession: { type: Boolean }
  },
  emits: ["update:modelValue", "retry", "login", "refresh"],
  setup(o, { emit: s }) {
    const a = o, n = s, g = E(!1), k = E(0), I = E(void 0), C = E(""), $ = q({
      get: () => a.modelValue,
      set: (_) => n("update:modelValue", _)
    }), h = (_) => {
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
      if (g.value)
        return;
      g.value = !0, k.value = 0, I.value = void 0, C.value = "Attempting to restore session...";
      const _ = setInterval(() => {
        k.value < 90 && (k.value += Math.random() * 20);
      }, 200);
      try {
        n("retry"), await new Promise((p) => setTimeout(p, 2e3)), k.value = 100, I.value = "success", C.value = "Session restored successfully!", setTimeout(() => {
          $.value = !1;
        }, 1e3);
      } catch {
        k.value = 100, I.value = "exception", C.value = "Failed to restore session. Please log in again.", z.error("Session restoration failed");
      } finally {
        clearInterval(_), setTimeout(() => {
          g.value = !1, k.value = 0, I.value = void 0, C.value = "";
        }, 3e3);
      }
    }, u = () => {
      n("login"), $.value = !1;
    }, x = () => {
      n("refresh"), window.location.reload();
    };
    return fe(() => a.sessionLossEvent, (_) => {
      _ && (g.value = !1, k.value = 0, I.value = void 0, C.value = "");
    }), (_, p) => (y(), Z(W(zo), {
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
      default: f(() => {
        var V;
        return [
          i("div", Cs, [
            i("div", As, [
              v(W(Ve), {
                size: "48",
                color: "#f56c6c"
              }, {
                default: f(() => [
                  v(W(ho))
                ]),
                _: 1
              })
            ]),
            i("div", Is, [
              p[3] || (p[3] = i("h3", null, "Your session has expired", -1)),
              i("p", null, Y(((V = o.sessionLossEvent) == null ? void 0 : V.message) || "Please log in again to continue using the application."), 1),
              o.sessionLossEvent ? (y(), D("div", Ls, [
                i("div", Ts, [
                  p[1] || (p[1] = i("span", { class: "detail-label" }, "Issue:", -1)),
                  i("span", Vs, Y(h(o.sessionLossEvent.type)), 1)
                ]),
                i("div", Hs, [
                  p[2] || (p[2] = i("span", { class: "detail-label" }, "Time:", -1)),
                  i("span", Us, Y(d(o.sessionLossEvent.timestamp)), 1)
                ])
              ])) : K("", !0)
            ]),
            i("div", Rs, [
              o.canRetrySession && !g.value ? (y(), Z(W(Ne), {
                key: 0,
                type: "primary",
                onClick: c,
                loading: g.value
              }, {
                default: f(() => [
                  v(W(Ve), null, {
                    default: f(() => [
                      v(W(Fe))
                    ]),
                    _: 1
                  }),
                  p[4] || (p[4] = Q(" Try Again ", -1))
                ]),
                _: 1
              }, 8, ["loading"])) : K("", !0),
              v(W(Ne), {
                type: "primary",
                onClick: u,
                disabled: g.value
              }, {
                default: f(() => [
                  v(W(Ve), null, {
                    default: f(() => [
                      v(W(je))
                    ]),
                    _: 1
                  }),
                  p[5] || (p[5] = Q(" Log In ", -1))
                ]),
                _: 1
              }, 8, ["disabled"]),
              o.canRetrySession ? K("", !0) : (y(), Z(W(Ne), {
                key: 1,
                type: "info",
                onClick: x,
                disabled: g.value
              }, {
                default: f(() => [
                  v(W(Ve), null, {
                    default: f(() => [
                      v(W(Fe))
                    ]),
                    _: 1
                  }),
                  p[6] || (p[6] = Q(" Refresh Page ", -1))
                ]),
                _: 1
              }, 8, ["disabled"]))
            ]),
            g.value ? (y(), D("div", Ps, [
              v(W(Ko), {
                percentage: k.value,
                status: I.value,
                "stroke-width": 6
              }, null, 8, ["percentage", "status"]),
              i("p", xs, Y(C.value), 1)
            ])) : K("", !0)
          ])
        ];
      }),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const Ds = /* @__PURE__ */ Re(Ms, [["__scopeId", "data-v-0dd27f7f"]]), $s = { class: "aiworkspace-header" }, Ws = {
  key: 0,
  class: "header-content header-loading"
}, Ns = { class: "header-center" }, Gs = { class: "loading-text" }, Os = { key: 0 }, Bs = { key: 1 }, Fs = {
  key: 1,
  class: "header-content header-fallback"
}, js = {
  key: 2,
  class: "header-content header-restricted"
}, zs = { class: "header-center" }, Ks = { class: "restricted-text" }, Ys = { class: "header-right" }, qs = {
  key: 3,
  class: "header-content"
}, Js = { class: "header-left" }, Xs = { class: "logo-section" }, Qs = {
  href: "/",
  class: "logo"
}, Zs = ["src"], et = {
  key: 1,
  class: "text-logo"
}, ot = {
  key: 0,
  class: "header-center"
}, st = { class: "main-navigation" }, tt = { class: "nav-item" }, at = {
  href: "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard",
  class: "nav-link"
}, rt = { class: "workspace-dropdown-item" }, nt = ["href"], it = { class: "workspace-icon" }, lt = {
  key: 1,
  class: "nav-divider"
}, ct = { class: "nav-item" }, ut = ["href", "onClick"], dt = { class: "header-right" }, pt = { class: "user-profile" }, ft = { class: "user-info" }, gt = { class: "user-name" }, ht = { class: "user-avatar" }, wt = ["src", "alt"], vt = {
  key: 1,
  class: "avatar-placeholder"
}, mt = { class: "version-info" }, kt = { class: "version-hash" }, _t = {
  key: 4,
  class: "header-content header-unauthenticated"
}, yt = { class: "header-left" }, bt = { class: "logo-section" }, St = {
  href: "/",
  class: "logo"
}, Et = ["src"], Ct = {
  key: 1,
  class: "text-logo"
}, At = {
  key: 0,
  class: "header-right"
}, It = { class: "workspace-list" }, Lt = ["onClick"], Tt = { class: "workspace-icon" }, Vt = { class: "workspace-details" }, Ht = { class: "workspace-members" }, Ut = {
  key: 0,
  class: "current-indicator"
}, Rt = { class: "update-content" }, Pt = { class: "update-actions" }, Ie = 50, xt = 6e4, Mt = 30, Dt = /* @__PURE__ */ ue({
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
    const a = o, n = s, { authState: g, logout: k, isLoading: I } = ls(), {
      isSessionValid: C,
      sessionLossEvent: $,
      hasSessionLoss: h,
      canRetrySession: d,
      retrySession: c,
      clearSessionLoss: u
    } = ps(), x = () => {
      try {
        return fs();
      } catch {
        return console.warn("[AIWorkspaceHeader] Pinia not initialized yet, using fallback state"), null;
      }
    }, _ = () => {
      try {
        return typeof window < "u" ? !!window.__PINIA__ || !!window.Pinia : !1;
      } catch {
        return !1;
      }
    }, p = E(x()), V = q(() => !!p.value), U = E(0), S = () => {
      if (!p.value && U.value < Ie) {
        if (_()) {
          const t = x();
          if (t) {
            p.value = t, console.log("[AIWorkspaceHeader] Pinia store initialized successfully");
            return;
          }
        }
        U.value++, setTimeout(S, 100);
      } else
        U.value >= Ie && console.warn("[AIWorkspaceHeader] Pinia initialization failed after maximum retries, using fallback mode");
    };
    Ce(() => {
      p.value || S();
    });
    const w = E(!1), H = E(!1), m = E(!1), b = E([]), ae = E([]), J = E({
      name: "",
      email: "",
      avatar_url: null,
      initials: ""
    }), F = E("unknown"), G = E("unknown"), re = E(!1), j = E(null), L = E(null), N = E(!1), O = E([]), T = E([]), B = E(!1);
    fe(T, async (t) => {
      t.length > 0 && V.value && se.value && await M();
    }, { immediate: !1 }), fe(() => window.location.pathname + window.location.search + window.location.hash, async () => {
      V.value && se.value && await M();
    }, { immediate: !1 });
    const oe = E(window.location.pathname);
    fe(() => window.location.pathname, (t) => {
      oe.value = t;
    }, { immediate: !0 }), fe(V, (t) => {
      !t && U.value < Ie && S();
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
      if (!p.value || !V.value)
        return;
      const t = P();
      if (B.value = t, t) {
        p.value.currentWorkspace = null, localStorage.removeItem("current_workspace"), console.log("[AIWorkspaceHeader] Auto-selected all-workspace mode from URL");
        return;
      }
      const e = ne();
      if (e)
        try {
          T.value.length === 0 && await Qe();
          const r = T.value.find((l) => l.id.toString() === e);
          r ? (p.value.setCurrentWorkspace(r), console.log(`[AIWorkspaceHeader] Auto-selected workspace from URL: ${r.title} (ID: ${r.id})`), n("workspaceChange", r)) : console.warn(`[AIWorkspaceHeader] Workspace with ID ${e} not found in available workspaces`);
        } catch (r) {
          console.error("[AIWorkspaceHeader] Error auto-selecting workspace from URL:", r);
        }
    }, se = q(() => g.value.isAuthenticated), te = q(() => p.value ? p.value.currentWorkspace : null), pe = q(() => {
      try {
        return window.location.pathname.includes("shared-folder");
      } catch (t) {
        return console.warn("[AIWorkspaceHeader] Error checking shared-folder URL:", t), !1;
      }
    }), ge = E([
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
    ]), ko = E([
      { label: "Dashboard", key: "dashboard", url: "/dashboard" },
      { label: "All Tasks", key: "tasks", url: "/tasks" },
      { label: "All Goals", key: "goals", url: "/goals" },
      { label: "All Events", key: "events", url: "/events" },
      { label: "All Drive", key: "files", url: "/files" },
      { label: "All Contacts", key: "contacts", url: "/contacts" },
      { label: "All Settings", key: "settings", url: "/settings" }
    ]), Je = q(() => B.value ? ko.value : ge.value), _o = q(() => {
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
            const R = t.match(/\/([^\/]+)$/);
            R && (e = R[1]);
          }
        }
        if (e) {
          const l = Je.value.find(
            (R) => R.key === e || R.url.includes(`/${e}`) || R.url === `/${e}`
          );
          if (l)
            return l.label;
        }
        return "Dashboard";
      } catch (t) {
        return console.warn("[AIWorkspaceHeader] Error determining current section:", t), "Dashboard";
      }
    }), Pe = q(() => {
      try {
        return window.location.hostname === "worklog.aiworkspace.pro";
      } catch (t) {
        return console.warn("[AIWorkspaceHeader] Error checking worklog domain:", t), !1;
      }
    }), xe = q(() => a.showWorkspaceSelector && !Pe.value), yo = (t) => {
      const e = /* @__PURE__ */ new Map();
      t.forEach((R) => {
        e.set(R.id, { ...R, children: [] });
      });
      const r = [];
      e.forEach((R) => {
        R.parent_workspace_id && e.has(R.parent_workspace_id) ? e.get(R.parent_workspace_id).children.push(R) : r.push(R);
      });
      const l = (R) => {
        R.sort((X, ce) => X.title.localeCompare(ce.title)), R.forEach((X) => {
          X.children && l(X.children);
        });
      };
      return l(r), r;
    }, Xe = (t, e = 0, r = []) => (t.forEach((l) => {
      r.push({ ...l, level: e }), l.children && l.children.length && Xe(l.children, e + 1, r);
    }), r), Qe = async () => {
      var t, e, r;
      try {
        const l = await ((t = p.value) == null ? void 0 : t.loadWorkspaces());
        if (O.value = yo(l || []), T.value = Xe(O.value), ae.value = T.value, b.value = T.value, a.currentWorkspaceId) {
          const R = T.value.find((X) => {
            var ce;
            return X.id.toString() === ((ce = a.currentWorkspaceId) == null ? void 0 : ce.toString());
          });
          R && ((e = p.value) == null || e.setCurrentWorkspace(R));
        } else
          !te.value && T.value.length && ((r = p.value) == null || r.setCurrentWorkspace(T.value[0]));
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
    }, ve = (t) => {
      switch (t) {
        case "profile":
          a.onProfileClick ? a.onProfileClick() : z.info("Profile settings coming soon");
          break;
        case "workspaces":
          w.value = !0;
          break;
        case "allworkspaces":
          w.value = !0;
          break;
        case "worklogs":
          window.location.href = "https://worklog.aiworkspace.pro/worklogs";
          break;
        case "logout":
          Ao();
          break;
      }
    }, Ze = (t) => {
      var e;
      (e = p.value) == null || e.setCurrentWorkspace(t), w.value = !1, n("workspaceChange", t), z.success(`Switched to ${t.title}`);
    }, Co = () => {
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
        b.value.push(e), (r = p.value) == null || r.setWorkspaces(b.value), Ze(e), z.success(`Created workspace: ${t}`);
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
        })), n("logout"), z.success("Signed out successfully");
      }).catch(() => {
      });
    }, Me = async () => {
      var t, e;
      if (g.value.user) {
        const r = g.value.user;
        J.value = {
          name: r.name || ((t = r.email) == null ? void 0 : t.split("@")[0]) || "User",
          email: r.email || "",
          avatar_url: r.avatar_url || null,
          initials: (r.name || ((e = r.email) == null ? void 0 : e.split("@")[0]) || "U").split(" ").map((l) => l[0]).join("").toUpperCase().substring(0, 2)
        }, a.showWorkspaceSelector && await Qe();
      }
    };
    fe(() => g.value.user, (t) => {
      var e;
      t ? Me() : (J.value = { name: "", email: "", avatar_url: null, initials: "" }, (e = p.value) == null || e.clearData());
    }), fe(h, (t) => {
      t && se.value && (console.log("[AIWorkspaceHeader] Session loss detected, showing modal"), m.value = !0);
    }), fe(() => a.currentWorkspaceId, (t) => {
      var e;
      if (t && T.value.length) {
        const r = T.value.find((l) => l.id.toString() === t.toString());
        r && ((e = p.value) == null || e.setCurrentWorkspace(r));
      }
    }), Ce(async () => {
      se.value && (await Me(), await M()), await Uo(), io(), $o();
    });
    const Io = async (t) => {
      console.log("Login successful:", t), H.value = !1, await Me(), n("login"), z.success("Welcome back!");
    }, Lo = async () => {
      console.log("[AIWorkspaceHeader] Retrying session..."), await c() ? (m.value = !1, u(), z.success("Session restored successfully!")) : z.error("Failed to restore session. Please log in again.");
    }, To = () => {
      console.log("[AIWorkspaceHeader] Opening login modal from session loss"), m.value = !1, H.value = !0;
    }, Vo = () => {
      console.log("[AIWorkspaceHeader] Refreshing page due to session loss"), window.location.reload();
    }, Ho = () => {
      U.value = 0, S(), z.success("Manual Pinia retry initiated.");
    }, Uo = async () => {
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
        console.log("🔄 version.json not available, trying automatic detection..."), await oo();
      } catch (t) {
        console.log("Error loading version.json, trying automatic detection...", t), await oo();
      }
    }, eo = async () => {
      try {
        let t = await to();
        if (t || (t = so()), t) {
          const e = await no(t);
          e && e !== G.value && (console.log("🔄 New commit detected:", G.value, "→", e), G.value !== "unknown" && !re.value && (re.value = !0, j.value = e));
        }
      } catch (t) {
        console.log("Error checking for new commits:", t);
      }
    }, oo = async () => {
      try {
        let t = await to();
        if (t || (t = so()), t) {
          const R = await no(t);
          if (R) {
            F.value = R.substring(0, 7), G.value = R, console.log("✅ Loaded commit hash from GitHub API:", F.value);
            return;
          }
        }
        const e = await xo();
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
          const R = r.repository.url.match(/github\.com\/([^\/]+)\/([^\/]+)/);
          if (R)
            return console.log("✅ Found GitHub repo info:", R[1], R[2].replace(".git", "")), { owner: R[1], repo: R[2].replace(".git", "") };
        }
        return console.log("No valid GitHub repository found in package.json"), null;
      } catch (t) {
        return console.log("Could not get repo info from package.json:", t), null;
      }
    }, ao = E(0), De = E(0), ro = E(Date.now()), Ro = () => {
      const t = Date.now();
      t - ro.value > 60 * 60 * 1e3 && (De.value = 0, ro.value = t, console.log("🔄 GitHub API call counter reset"));
    }, Po = async () => {
      try {
        const e = await Ye();
        if (e)
          return console.log("✅ Using GitHub token from database"), e;
      } catch (e) {
        console.warn("Failed to get token from database:", e);
      }
      if ({ VITE_SUPABASE_URL: void 0, VITE_SUPABASE_ANON_KEY: void 0, VITE_GITEA_HOST: "https://g.associateattorney.ai", VITE_GITEA_TOKEN: "52d93839f9b526be9bec18981ea5cb03db2c31e6", VITE_MIXPANEL_TOKEN: "1d129ee408cdfacaa318df9edf862d6a", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_GITHUB_TOKEN)
        return console.log("✅ Using GitHub token from environment"), {}.VITE_GITHUB_TOKEN;
      const t = localStorage.getItem("github_token");
      return t ? (console.log("✅ Using GitHub token from localStorage"), t) : (console.warn("❌ No GitHub token found in any source"), null);
    }, no = async (t) => {
      var e;
      try {
        const r = Date.now();
        if (Ro(), r - ao.value < xt)
          return console.log("⏳ GitHub API rate limit: waiting before next call"), null;
        if (De.value >= Mt)
          return console.log("🚫 GitHub API hourly limit reached, skipping call"), null;
        const l = await Po(), R = {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "AIWorkspace-Header/1.0"
        };
        l ? (R.Authorization = `Bearer ${l}`, console.log("🔑 Using GitHub token for authentication"), console.log("Token preview:", l.substring(0, 8) + "..." + l.substring(l.length - 4)), console.log("Token length:", l.length), console.log("Authorization header:", `Bearer ${l.substring(0, 8)}...`)) : console.log("⚠️ No GitHub token found, trying unauthenticated request");
        const X = ["main", "master"];
        for (const ce of X)
          try {
            const le = await fetch(`https://api.github.com/repos/${t.owner}/${t.repo}/commits/${ce}`, {
              headers: R
            });
            if (ao.value = r, De.value++, le.ok) {
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
    }, Do = async () => {
      try {
        if (G.value === "unknown") {
          z.warning("Version information not available");
          return;
        }
        await navigator.clipboard.writeText(G.value), z.success("Version information copied to clipboard!");
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
          j.value = l.fullCommitHash, G.value !== j.value && (re.value || (re.value = !0, console.log("Version mismatch detected:", {
            currentVersion: G.value,
            latestVersion: j.value,
            serverBuildTime: l.buildTime
          })));
        } catch (t) {
          console.error("Error checking for updates:", t);
        } finally {
          N.value = !1;
        }
      }
    }, $o = () => {
      L.value = setInterval(() => {
        io(), eo();
      }, 5 * 60 * 1e3);
    }, Wo = () => {
      console.log("User reloaded for update:", {
        currentVersion: G.value,
        latestVersion: j.value
      }), window.location.reload();
    }, lo = () => {
      re.value = !1, console.log("Update alert dismissed:", {
        currentVersion: G.value,
        latestVersion: j.value
      });
    };
    return go(() => {
      L.value && clearInterval(L.value);
    }), (t, e) => {
      const r = ie("el-icon"), l = ie("el-button"), R = ie("el-tag"), X = ie("el-dropdown-item"), ce = ie("el-dropdown-menu"), le = ie("el-dropdown"), Ae = ie("el-dialog"), No = ie("el-alert");
      return y(), D(Le, null, [
        i("header", $s, [
          !V.value && U.value < Ie || W(I) ? (y(), D("div", Ws, [
            e[12] || (e[12] = Te('<div class="header-left" data-v-3dd138bf><div class="logo-section" data-v-3dd138bf><a href="/" class="logo" data-v-3dd138bf><div class="text-logo" data-v-3dd138bf><span class="logo-text" data-v-3dd138bf>AI Workspace</span></div></a></div></div>', 1)),
            i("div", Ns, [
              i("span", Gs, [
                W(I) ? (y(), D("span", Os, "Syncing authentication...")) : (y(), D("span", Bs, "Initializing..."))
              ])
            ])
          ])) : !V.value && U.value >= Ie ? (y(), D("div", Fs, [
            e[14] || (e[14] = Te('<div class="header-left" data-v-3dd138bf><div class="logo-section" data-v-3dd138bf><a href="/" class="logo" data-v-3dd138bf><div class="text-logo" data-v-3dd138bf><span class="logo-text" data-v-3dd138bf>AI Workspace</span></div></a></div></div>', 1)),
            i("div", { class: "header-center" }, [
              e[13] || (e[13] = i("span", { class: "fallback-text" }, "Header Ready (Fallback Mode)", -1)),
              i("button", {
                onClick: Ho,
                class: "retry-button"
              }, "Retry Pinia")
            ]),
            e[15] || (e[15] = Te('<div class="header-right" data-v-3dd138bf><div class="user-profile" data-v-3dd138bf><div class="user-info" data-v-3dd138bf><span class="user-name" data-v-3dd138bf>User</span></div><div class="user-avatar" data-v-3dd138bf><span class="avatar-placeholder" data-v-3dd138bf>U</span></div></div></div>', 1))
          ])) : se.value && !W(C) ? (y(), D("div", js, [
            e[18] || (e[18] = Te('<div class="header-left" data-v-3dd138bf><div class="logo-section" data-v-3dd138bf><a href="/" class="logo" data-v-3dd138bf><div class="text-logo" data-v-3dd138bf><span class="logo-text" data-v-3dd138bf>AI Workspace</span></div></a></div></div>', 1)),
            i("div", zs, [
              i("span", Ks, [
                v(r, null, {
                  default: f(() => [
                    v(W(ho))
                  ]),
                  _: 1
                }),
                e[16] || (e[16] = Q(" Session expired - Please log in again ", -1))
              ])
            ]),
            i("div", Ys, [
              v(l, {
                type: "primary",
                onClick: e[0] || (e[0] = (A) => H.value = !0)
              }, {
                default: f(() => [
                  v(r, null, {
                    default: f(() => [
                      v(W(je))
                    ]),
                    _: 1
                  }),
                  e[17] || (e[17] = Q(" Log In ", -1))
                ]),
                _: 1
              })
            ])
          ])) : se.value && W(C) ? (y(), D("div", qs, [
            i("div", Js, [
              i("div", Xs, [
                i("a", Qs, [
                  o.customLogo ? (y(), D("img", {
                    key: 0,
                    src: o.customLogo,
                    alt: "AIWorkspace",
                    class: "logo-image"
                  }, null, 8, Zs)) : (y(), D("div", et, [...e[19] || (e[19] = [
                    i("span", { class: "logo-text" }, "AI Workspace", -1)
                  ])]))
                ])
              ])
            ]),
            o.showSecondaryNavigation ? (y(), D("div", ot, [
              i("nav", st, [
                xe.value ? (y(), Z(le, {
                  key: 0,
                  onCommand: bo,
                  trigger: "hover"
                }, {
                  dropdown: f(() => [
                    v(ce, { class: "workspace-tree-dropdown" }, {
                      default: f(() => [
                        v(X, {
                          command: "all-workspace",
                          class: $e({ active: B.value })
                        }, {
                          default: f(() => [
                            i("a", at, [
                              i("div", rt, [
                                e[21] || (e[21] = i("span", { class: "workspace-icon" }, "🌐", -1)),
                                e[22] || (e[22] = i("span", null, "All workspace", -1)),
                                B.value ? (y(), Z(R, {
                                  key: 0,
                                  size: "small",
                                  type: "success"
                                }, {
                                  default: f(() => [...e[20] || (e[20] = [
                                    Q("Current", -1)
                                  ])]),
                                  _: 1
                                })) : K("", !0)
                              ])
                            ])
                          ]),
                          _: 1
                        }, 8, ["class"]),
                        T.value.length > 0 ? (y(), Z(X, {
                          key: 0,
                          divided: "",
                          disabled: ""
                        })) : K("", !0),
                        (y(!0), D(Le, null, We(T.value, (A) => (y(), Z(X, {
                          key: A.id,
                          command: `workspace-${A.id}`
                        }, {
                          default: f(() => {
                            var me;
                            return [
                              i("a", {
                                href: `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${A.id}/dashboard`,
                                class: "nav-link"
                              }, [
                                i("div", {
                                  class: "workspace-dropdown-item",
                                  style: Fo({ paddingLeft: (A.level || 0) * 16 + "px" })
                                }, [
                                  i("span", it, Y(A.children && A.children.length ? "📁" : "📄"), 1),
                                  i("span", null, Y(A.title), 1),
                                  A.id === ((me = te.value) == null ? void 0 : me.id) ? (y(), Z(R, {
                                    key: 0,
                                    size: "small",
                                    type: "success"
                                  }, {
                                    default: f(() => [...e[23] || (e[23] = [
                                      Q("Current", -1)
                                    ])]),
                                    _: 1
                                  })) : K("", !0)
                                ], 4)
                              ], 8, nt)
                            ];
                          }),
                          _: 2
                        }, 1032, ["command"]))), 128)),
                        T.value.length === 0 ? (y(), Z(X, {
                          key: 1,
                          disabled: ""
                        }, {
                          default: f(() => [...e[24] || (e[24] = [
                            Q(" No workspaces ", -1)
                          ])]),
                          _: 1
                        })) : K("", !0)
                      ]),
                      _: 1
                    })
                  ]),
                  default: f(() => {
                    var A;
                    return [
                      i("span", tt, [
                        Q(Y(B.value ? "All workspace" : ((A = te.value) == null ? void 0 : A.title) || "Select Workspace") + " ", 1),
                        v(r, { class: "nav-arrow" }, {
                          default: f(() => [
                            v(W(po))
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }),
                  _: 1
                })) : K("", !0),
                xe.value ? (y(), D("span", lt, "/")) : K("", !0),
                xe.value ? (y(), Z(le, {
                  key: 2,
                  trigger: "hover"
                }, {
                  dropdown: f(() => [
                    v(ce, null, {
                      default: f(() => [
                        (y(!0), D(Le, null, We(Je.value, (A) => (y(), Z(X, {
                          key: A.label,
                          class: $e({ active: A.active })
                        }, {
                          default: f(() => [
                            i("a", {
                              href: Eo(A),
                              class: "nav-link",
                              onClick: de((me) => So(A), ["prevent"])
                            }, Y(A.label), 9, ut)
                          ]),
                          _: 2
                        }, 1032, ["class"]))), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  default: f(() => [
                    i("span", ct, [
                      Q(Y(_o.value) + " ", 1),
                      v(r, { class: "nav-arrow" }, {
                        default: f(() => [
                          v(W(po))
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })) : K("", !0)
              ])
            ])) : K("", !0),
            i("div", dt, [
              v(le, {
                onCommand: ve,
                trigger: "click",
                placement: "bottom-end"
              }, {
                dropdown: f(() => [
                  v(ce, null, {
                    default: f(() => [
                      v(X, null, {
                        default: f(() => [
                          i("a", {
                            href: "/profile",
                            class: "nav-link",
                            onClick: e[1] || (e[1] = de((A) => ve("profile"), ["prevent"]))
                          }, "Profile Settings")
                        ]),
                        _: 1
                      }),
                      o.showWorkspaceSelector ? (y(), Z(X, { key: 0 }, {
                        default: f(() => [
                          i("a", {
                            href: "#switch-workspace",
                            class: "nav-link",
                            onClick: e[2] || (e[2] = de((A) => ve("workspaces"), ["prevent"]))
                          }, "Switch Workspace")
                        ]),
                        _: 1
                      })) : K("", !0),
                      Pe.value.value ? K("", !0) : (y(), Z(X, { key: 1 }, {
                        default: f(() => [
                          i("a", {
                            href: "https://worklog.aiworkspace.pro/worklogs",
                            class: "nav-link",
                            onClick: e[3] || (e[3] = de((A) => ve("worklogs"), ["prevent"]))
                          }, "Go to Worklogs")
                        ]),
                        _: 1
                      })),
                      Pe.value.value ? (y(), Z(X, { key: 2 }, {
                        default: f(() => [
                          i("a", {
                            href: "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard",
                            class: "nav-link",
                            onClick: e[4] || (e[4] = de((A) => ve("allworkspaces"), ["prevent"]))
                          }, "All workspaces")
                        ]),
                        _: 1
                      })) : K("", !0),
                      v(X, {
                        onClick: Do,
                        class: "version-item"
                      }, {
                        default: f(() => [
                          i("div", mt, [
                            e[25] || (e[25] = i("span", { class: "version-label" }, "Version:", -1)),
                            i("span", kt, Y(F.value), 1),
                            v(l, {
                              size: "small",
                              type: "text",
                              onClick: de(eo, ["stop"]),
                              class: "refresh-button",
                              loading: N.value
                            }, {
                              default: f(() => [
                                v(r, null, {
                                  default: f(() => [
                                    v(W(Fe))
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
                      v(X, { divided: "" }, {
                        default: f(() => [
                          i("a", {
                            href: "#signout",
                            class: "nav-link",
                            onClick: e[5] || (e[5] = de((A) => ve("logout"), ["prevent"]))
                          }, "Sign Out")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                default: f(() => [
                  i("div", pt, [
                    i("div", ft, [
                      i("span", gt, Y(J.value.name), 1)
                    ]),
                    i("div", ht, [
                      J.value.avatar_url ? (y(), D("img", {
                        key: 0,
                        src: J.value.avatar_url,
                        alt: J.value.name
                      }, null, 8, wt)) : (y(), D("span", vt, Y(J.value.initials), 1))
                    ])
                  ])
                ]),
                _: 1
              })
            ])
          ])) : (y(), D("div", _t, [
            i("div", yt, [
              i("div", bt, [
                i("a", St, [
                  o.customLogo ? (y(), D("img", {
                    key: 0,
                    src: o.customLogo,
                    alt: "AIWorkspace",
                    class: "logo-image"
                  }, null, 8, Et)) : (y(), D("div", Ct, [...e[26] || (e[26] = [
                    i("span", { class: "logo-text" }, "AI Workspace", -1)
                  ])]))
                ])
              ])
            ]),
            e[28] || (e[28] = i("div", { class: "header-center" }, [
              i("span", { class: "welcome-text" }, "Welcome to AI Workspace")
            ], -1)),
            pe.value ? K("", !0) : (y(), D("div", At, [
              v(l, {
                type: "primary",
                size: "large",
                class: "login-button",
                onClick: e[6] || (e[6] = (A) => H.value = !0)
              }, {
                default: f(() => [
                  v(r, null, {
                    default: f(() => [
                      v(W(je))
                    ]),
                    _: 1
                  }),
                  e[27] || (e[27] = Q(" Login / Signup ", -1))
                ]),
                _: 1
              })
            ]))
          ])),
          se.value && o.showWorkspaceSelector ? (y(), Z(Ae, {
            key: 5,
            modelValue: w.value,
            "onUpdate:modelValue": e[8] || (e[8] = (A) => w.value = A),
            title: "Switch Workspace",
            width: "500px",
            onClose: e[9] || (e[9] = (A) => w.value = !1)
          }, {
            footer: f(() => [
              v(l, {
                onClick: e[7] || (e[7] = (A) => w.value = !1)
              }, {
                default: f(() => [...e[29] || (e[29] = [
                  Q("Cancel", -1)
                ])]),
                _: 1
              }),
              v(l, {
                type: "primary",
                onClick: Co
              }, {
                default: f(() => [...e[30] || (e[30] = [
                  Q("Create New Workspace", -1)
                ])]),
                _: 1
              })
            ]),
            default: f(() => [
              i("div", It, [
                (y(!0), D(Le, null, We(b.value, (A) => {
                  var me, co;
                  return y(), D("div", {
                    key: A.id,
                    class: $e(["workspace-item", { active: A.id === ((me = te.value) == null ? void 0 : me.id) }]),
                    onClick: (Bt) => Ze(A)
                  }, [
                    i("div", Tt, Y(A.children && A.children.length ? "📁" : "📄"), 1),
                    i("div", Vt, [
                      i("h3", null, Y(A.title), 1),
                      i("p", null, Y(A.description), 1),
                      i("span", Ht, Y(A.hasAccess ? "Active" : "Inactive"), 1)
                    ]),
                    A.id === ((co = te.value) == null ? void 0 : co.id) ? (y(), D("div", Ut, [
                      v(r, null, {
                        default: f(() => [
                          v(W(Zo))
                        ]),
                        _: 1
                      })
                    ])) : K("", !0)
                  ], 10, Lt);
                }), 128))
              ])
            ]),
            _: 1
          }, 8, ["modelValue"])) : K("", !0),
          v(Es, {
            modelValue: H.value,
            "onUpdate:modelValue": e[10] || (e[10] = (A) => H.value = A),
            onLoginSuccess: Io
          }, null, 8, ["modelValue"]),
          v(Ds, {
            modelValue: m.value,
            "onUpdate:modelValue": e[11] || (e[11] = (A) => m.value = A),
            "session-loss-event": W($),
            "can-retry-session": W(d) || !1,
            onRetry: Lo,
            onLogin: To,
            onRefresh: Vo
          }, null, 8, ["modelValue", "session-loss-event", "can-retry-session"])
        ]),
        re.value ? (y(), Z(No, {
          key: 0,
          title: "New Version Available!",
          type: "warning",
          closable: !0,
          onClose: lo,
          "show-icon": "",
          class: "update-alert"
        }, {
          default: f(() => [
            i("div", Rt, [
              e[33] || (e[33] = i("p", null, "A new version of the application is available. Please reload to get the latest updates and features.", -1)),
              i("div", Pt, [
                v(l, {
                  type: "primary",
                  size: "small",
                  onClick: Wo
                }, {
                  default: f(() => [...e[31] || (e[31] = [
                    Q(" Reload Now ", -1)
                  ])]),
                  _: 1
                }),
                v(l, {
                  size: "small",
                  onClick: lo
                }, {
                  default: f(() => [...e[32] || (e[32] = [
                    Q(" Dismiss ", -1)
                  ])]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        })) : K("", !0)
      ], 64);
    };
  }
});
const pa = /* @__PURE__ */ Re(Dt, [["__scopeId", "data-v-3dd138bf"]]), $t = { class: "auth-callback" }, Wt = /* @__PURE__ */ ue({
  __name: "AuthCallback",
  setup(o) {
    Ce(async () => {
      console.log("[AuthCallback] Component mounted, starting callback processing..."), console.log("[AuthCallback] Current URL:", window.location.href), console.log("[AuthCallback] Current hash:", window.location.hash);
      try {
        await new Promise((g) => setTimeout(g, 500));
        const { data: a, error: n } = await He.auth.getSession();
        if (n) {
          console.error("Error processing callback:", n), s();
          return;
        }
        if (a != null && a.session) {
          const g = a.session.user;
          console.log("OAuth login successful:", g.email), a.session.access_token && Se(ye, a.session.access_token), a.session.refresh_token && Se(be, a.session.refresh_token), Be();
          const k = qo();
          console.log("[callback] Post-login redirect URL:", k), console.log("[callback] Session storage redirect:", sessionStorage.getItem("post-login-redirect")), console.log("[callback] Local storage redirect:", localStorage.getItem("post-login-redirect"));
          const I = k || "/";
          if (console.log("[callback] Final redirect URL:", I), I.startsWith("/")) {
            const C = window.location.origin, $ = `${C}${I}`;
            console.log("[callback] redirecting to:", $, { hostname: window.location.hostname, origin: C }), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
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
      const n = window.location.href.replace("/auth/callback", "");
      window.location.href = n;
    };
    return (a, n) => (y(), D("div", $t, [...n[0] || (n[0] = [
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
const fa = /* @__PURE__ */ Re(Wt, [["__scopeId", "data-v-acdf6325"]]), he = class he {
  constructor() {
    ke(this, "validationCache", /* @__PURE__ */ new Map());
    ke(this, "CACHE_DURATION", mo().validationCacheDuration);
  }
  // Helper function to get cookie value
  getCookieValue(s) {
    var g;
    if (typeof document > "u")
      return null;
    const n = `; ${document.cookie}`.split(`; ${s}=`);
    return n.length === 2 && ((g = n.pop()) == null ? void 0 : g.split(";").shift()) || null;
  }
  static getInstance() {
    return he.instance || (he.instance = new he()), he.instance;
  }
  /**
   * Validate current session with caching and improved reliability
   */
  async validateSession(s = !1) {
    var n, g;
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
        const _ = {
          isValid: !1,
          needsLogin: !0,
          error: "No authentication tokens found",
          canRetry: !1
        };
        return this.cacheResult(a, _), _;
      }
      const C = await ee();
      let $ = null, h = null;
      for (let _ = 1; _ <= 2; _++)
        try {
          const p = await C.auth.getSession();
          $ = p.data.session, h = p.error;
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
            return this.cacheResult(a, V), V;
          }
          await new Promise((V) => setTimeout(V, 1e3));
        }
      if (h) {
        console.warn("[SessionValidator] Error getting session:", h);
        const p = {
          isValid: !1,
          needsLogin: ((n = h.message) == null ? void 0 : n.includes("Invalid JWT")) || ((g = h.message) == null ? void 0 : g.includes("JWT expired")),
          error: `Session error: ${h.message}`,
          canRetry: !0
        };
        return this.cacheResult(a, p), p;
      }
      if (!$ || !$.user) {
        const _ = {
          isValid: !1,
          needsLogin: !0,
          error: "No valid session found",
          canRetry: !0
        };
        return this.cacheResult(a, _), _;
      }
      const d = /* @__PURE__ */ new Date(), c = new Date($.expires_at * 1e3), u = 5 * 60 * 1e3;
      if (d >= new Date(c.getTime() - u)) {
        const _ = {
          isValid: !1,
          needsLogin: !0,
          error: "Session is close to expiry or expired",
          canRetry: !0
        };
        return this.cacheResult(a, _), _;
      }
      const x = {
        isValid: !0,
        needsLogin: !1,
        canRetry: !1
      };
      return this.cacheResult(a, x), x;
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
      const n = await ee(), { data: g, error: k } = await n.auth.setSession({
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
ke(he, "instance");
let Ke = he;
const qe = Ke.getInstance(), Nt = (o = !1) => qe.validateSession(o), Gt = () => qe.restoreSession(), Ot = () => qe.clearCache();
async function ga() {
  console.log("[SessionValidator] Initializing session validation...");
  let o = await Nt();
  return !o.isValid && o.canRetry && (console.log("[SessionValidator] Attempting session restoration..."), o = await Gt()), o;
}
function ha() {
  if (typeof window > "u")
    return () => {
    };
  const o = () => {
    console.log("[SessionValidator] Network restored, clearing cache for revalidation"), Ot();
  }, s = () => {
    console.log("[SessionValidator] Network lost, session validation may fail");
  };
  return window.addEventListener("online", o), window.addEventListener("offline", s), () => {
    window.removeEventListener("online", o), window.removeEventListener("offline", s);
  };
}
export {
  ye as ACCESS_COOKIE,
  pa as AIWorkspaceHeader,
  fa as AuthCallback,
  Ea as LS_ACCESS_KEY,
  Ca as LS_REFRESH_KEY,
  Es as LoginModal,
  Ue as PackageError,
  be as REFRESH_COOKIE,
  Ds as SessionLossModal,
  Ke as SessionValidator,
  Aa as buildOAuthRedirectUrl,
  ws as clearGitHubTokenCache,
  Oe as clearLocalStorageTokens,
  Ot as clearSessionCache,
  _e as clearSessionCookie,
  la as configureGitHub,
  ma as configureSupabase,
  us as conservativeConfig,
  aa as createSessionConfig,
  da as debugDatabaseConnection,
  pa as default,
  we as defaultSessionConfig,
  ia as detectionScenarios,
  wo as developmentConfig,
  Ia as ensureCrossSubdomainCookies,
  cs as fastDetectionConfig,
  ra as getConfigByPreset,
  La as getCookie,
  Ye as getGitHubToken,
  qo as getPostLoginBase,
  mo as getSessionConfig,
  ee as getSupabase,
  ns as handleBundlingError,
  ka as handleDomainChangeAuth,
  Yo as initializeCrossSubdomainAuth,
  ga as initializeSessionValidation,
  ca as isGitHubConfigured,
  vo as productionConfig,
  ua as refreshGitHubToken,
  _a as restoreCrossSubdomainSession,
  Gt as restoreSession,
  Ge as restoreSessionWithRetry,
  Jt as safeExecute,
  Xt as safeExecuteAsync,
  Zt as safeGetCookie,
  oa as safeGetLocalStorage,
  Qt as safeImport,
  ea as safeSetCookie,
  sa as safeSetLocalStorage,
  ta as safeWindowOperation,
  ds as sessionConfigPresets,
  qe as sessionValidator,
  Se as setSessionCookie,
  ya as setupAuthStateListener,
  is as setupGlobalErrorHandler,
  ba as setupImmediateCrossSubdomainAuth,
  ha as setupNetworkAwareValidation,
  Va as setupUniversalCallback,
  He as supabase,
  Be as syncCookiesToLocalStorage,
  na as timingInfo,
  vs as useAuth,
  ls as useEnhancedAuth,
  ps as useSessionMonitor,
  fs as useWorkspaceStore,
  Nt as validateSession
};
