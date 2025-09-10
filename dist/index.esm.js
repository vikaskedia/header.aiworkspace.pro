var Vs = Object.defineProperty;
var Ms = (t, o, a) => o in t ? Vs(t, o, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[o] = a;
var me = (t, o, a) => (Ms(t, typeof o != "symbol" ? o + "" : o, a), a);
import { defineComponent as le, openBlock as y, createElementBlock as T, createElementVNode as n, ref as C, computed as X, onMounted as Se, onUnmounted as ts, watch as ue, reactive as Ws, resolveComponent as ie, createBlock as oe, withCtx as d, toDisplayString as J, createVNode as h, unref as D, withModifiers as fe, createCommentVNode as Y, createTextVNode as q, Fragment as Ae, createStaticVNode as Ee, normalizeClass as Re, renderList as Ue, normalizeStyle as $s } from "vue";
import { ElForm as Rs, ElMessage as G, ElDialog as Us, ElIcon as Ie, ElButton as Pe, ElProgress as Ps, ElMessageBox as ss } from "element-plus";
import { i as xs, g as ae, r as xe, s as Le } from "./supabase-7523f80a.mjs";
import { c as Qa, h as Za, b as et, d as st, a as ot } from "./supabase-7523f80a.mjs";
import { clearSessionCookie as we, ACCESS_COOKIE as ke, REFRESH_COOKIE as _e, clearLocalStorageTokens as Te, setSessionCookie as ye, syncCookiesToLocalStorage as De, getPostLoginBase as Ts } from "./utils/authRedirect.js";
import { LS_ACCESS_KEY as tt, LS_REFRESH_KEY as rt, buildOAuthRedirectUrl as nt, ensureCrossSubdomainCookies as it, getCookie as lt } from "./utils/authRedirect.js";
import { defineStore as Ds } from "pinia";
import { setupUniversalCallback as ut } from "./utils/universalCallback.js";
/*! Element Plus Icons Vue v2.3.2 */
var Ns = /* @__PURE__ */ le({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(t) {
    return (o, a) => (y(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      n("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"
      })
    ]));
  }
}), os = Ns, Hs = /* @__PURE__ */ le({
  name: "Check",
  __name: "check",
  setup(t) {
    return (o, a) => (y(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      n("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      })
    ]));
  }
}), Os = Hs, Fs = /* @__PURE__ */ le({
  name: "Lock",
  __name: "lock",
  setup(t) {
    return (o, a) => (y(), T("svg", {
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
}), as = Fs, js = /* @__PURE__ */ le({
  name: "Message",
  __name: "message",
  setup(t) {
    return (o, a) => (y(), T("svg", {
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
}), zs = js, Bs = /* @__PURE__ */ le({
  name: "Refresh",
  __name: "refresh",
  setup(t) {
    return (o, a) => (y(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      n("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), Ne = Bs, Gs = /* @__PURE__ */ le({
  name: "User",
  __name: "user",
  setup(t) {
    return (o, a) => (y(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      n("path", {
        fill: "currentColor",
        d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"
      })
    ]));
  }
}), He = Gs, Js = /* @__PURE__ */ le({
  name: "Warning",
  __name: "warning",
  setup(t) {
    return (o, a) => (y(), T("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      n("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"
      })
    ]));
  }
}), rs = Js;
class Ve extends Error {
  constructor(a, i = {}, m) {
    super(a);
    me(this, "context");
    me(this, "originalError");
    this.name = "PackageError", this.context = i, this.originalError = m;
  }
}
function Ua(t, o = {}, a) {
  try {
    const i = t();
    return i instanceof Promise ? i.catch((m) => {
      if (console.warn("[ErrorHandler] Async operation failed:", {
        context: o,
        error: m.message,
        stack: m.stack
      }), a !== void 0)
        return a;
      throw new Ve(
        `Async operation failed: ${m.message}`,
        o,
        m
      );
    }) : i;
  } catch (i) {
    if (console.warn("[ErrorHandler] Operation failed:", {
      context: o,
      error: i instanceof Error ? i.message : String(i),
      stack: i instanceof Error ? i.stack : void 0
    }), a !== void 0)
      return a;
    throw new Ve(
      `Operation failed: ${i instanceof Error ? i.message : String(i)}`,
      o,
      i instanceof Error ? i : void 0
    );
  }
}
async function Pa(t, o = {}, a) {
  try {
    return await t();
  } catch (i) {
    if (console.warn("[ErrorHandler] Async operation failed:", {
      context: o,
      error: i instanceof Error ? i.message : String(i),
      stack: i instanceof Error ? i.stack : void 0
    }), a !== void 0)
      return a;
    throw new Ve(
      `Async operation failed: ${i instanceof Error ? i.message : String(i)}`,
      o,
      i instanceof Error ? i : void 0
    );
  }
}
function Ks(t, o = {}) {
  const a = t.message.toLowerCase();
  if (a.includes("is not a function") || a.includes("cannot read property") || a.includes("undefined is not a function")) {
    console.warn("[ErrorHandler] Bundling error detected:", {
      context: o,
      error: t.message,
      suggestion: "This may be due to minification or import issues. The package will continue with fallback behavior."
    });
    return;
  }
  throw new Ve(
    `Unexpected error: ${t.message}`,
    o,
    t
  );
}
async function xa(t, o = {}, a) {
  try {
    return await t();
  } catch (i) {
    return console.warn("[ErrorHandler] Import failed:", {
      context: o,
      error: i instanceof Error ? i.message : String(i)
    }), a !== void 0 ? a : void 0;
  }
}
function Ta(t) {
  var o;
  try {
    if (typeof document > "u")
      return null;
    const i = `; ${document.cookie}`.split(`; ${t}=`);
    return i.length === 2 && ((o = i.pop()) == null ? void 0 : o.split(";").shift()) || null;
  } catch (a) {
    return console.warn("[ErrorHandler] Cookie access failed:", {
      cookieName: t,
      error: a instanceof Error ? a.message : String(a)
    }), null;
  }
}
function Da(t, o, a = {}) {
  try {
    if (typeof document > "u")
      return !1;
    let i = `${t}=${o}`;
    return a.domain && (i += `; domain=${a.domain}`), a.path && (i += `; path=${a.path}`), a.secure && (i += "; secure"), a.sameSite && (i += `; samesite=${a.sameSite}`), a.maxAge && (i += `; max-age=${a.maxAge}`), document.cookie = i, !0;
  } catch (i) {
    return console.warn("[ErrorHandler] Cookie setting failed:", {
      cookieName: t,
      error: i instanceof Error ? i.message : String(i)
    }), !1;
  }
}
function Na(t) {
  try {
    return typeof localStorage > "u" ? null : localStorage.getItem(t);
  } catch (o) {
    return console.warn("[ErrorHandler] localStorage get failed:", {
      key: t,
      error: o instanceof Error ? o.message : String(o)
    }), null;
  }
}
function Ha(t, o) {
  try {
    return typeof localStorage > "u" ? !1 : (localStorage.setItem(t, o), !0);
  } catch (a) {
    return console.warn("[ErrorHandler] localStorage set failed:", {
      key: t,
      error: a instanceof Error ? a.message : String(a)
    }), !1;
  }
}
function Oa(t, o) {
  try {
    return typeof window > "u" ? o : t(window);
  } catch (a) {
    return console.warn("[ErrorHandler] Window operation failed:", {
      error: a instanceof Error ? a.message : String(a)
    }), o;
  }
}
function qs() {
  typeof window > "u" || (window.addEventListener("unhandledrejection", (t) => {
    const o = t.reason;
    if (o instanceof Error) {
      const a = o.message.toLowerCase();
      if (a.includes("is not a function") || a.includes("cannot read property") || a.includes("undefined is not a function")) {
        console.warn("[ErrorHandler] Unhandled promise rejection (bundling error):", {
          error: o.message,
          stack: o.stack
        }), t.preventDefault();
        return;
      }
    }
    console.error("[ErrorHandler] Unhandled promise rejection:", t.reason);
  }), window.addEventListener("error", (t) => {
    const o = t.error;
    if (o instanceof Error) {
      const a = o.message.toLowerCase();
      if (a.includes("is not a function") || a.includes("cannot read property") || a.includes("undefined is not a function")) {
        console.warn("[ErrorHandler] Uncaught error (bundling error):", {
          error: o.message,
          stack: o.stack
        }), t.preventDefault();
        return;
      }
    }
    console.error("[ErrorHandler] Uncaught error:", t.error);
  }));
}
typeof window < "u" && qs();
function Ys() {
  const t = C({
    user: null,
    isAuthenticated: !1,
    isLoading: !0,
    error: null
  }), o = C(null), a = X(() => t.value.isAuthenticated), i = X(() => t.value.user), m = X(() => t.value.isLoading), _ = async () => {
    var k, p, c, U, f, u, L, M, b, g, V, v, S, te, K, z, O, re, B, A, N;
    try {
      console.log("[auth][enhanced] Starting loadUserInfo..."), console.log("[auth][enhanced] Ensuring cross-subdomain cookie synchronization...");
      const F = "sb-access-token", E = "sb-refresh-token", j = (W) => {
        try {
          const P = location.hostname;
          if (P === "localhost" || /^\d+\.\d+\.\d+\.\d+$/.test(P)) {
            console.log("[auth][enhanced] Skipping cookie sync for localhost");
            return;
          }
          const Z = "aiworkspace.pro";
          if (!P.endsWith(`.${Z}`) && P !== Z) {
            console.log("[auth][enhanced] Skipping cookie sync - not under apex domain");
            return;
          }
          console.log("[auth][enhanced] Performing cookie synchronization"), W.forEach((ee) => {
            const ce = document.cookie.split(";").find((de) => de.trim().startsWith(ee + "="));
            if (ce) {
              console.log(`[auth][enhanced] Found cookie: ${ee}`);
              const de = ce.split("=")[1];
              de && (document.cookie = `${ee}=${de}; domain=.${Z}; path=/; secure; samesite=lax`);
            }
          });
        } catch (P) {
          console.warn("[auth][enhanced] Error in cookie sync:", P);
        }
      };
      j([F, E]), await new Promise((W) => setTimeout(W, 50)), j([F, E]), await new Promise((W) => setTimeout(W, 50));
      let Q = null;
      try {
        const P = await (await ae()).auth.getSession();
        Q = (k = P == null ? void 0 : P.data) == null ? void 0 : k.session;
      } catch (W) {
        console.warn("[auth][enhanced] Error getting Supabase session:", W);
      }
      if (Q && Q.user) {
        console.log("[auth][enhanced] Active Supabase session found");
        const W = Q.user, P = {
          id: W.id,
          name: ((p = W.user_metadata) == null ? void 0 : p.name) || ((c = W.user_metadata) == null ? void 0 : c.user_name) || ((U = W.user_metadata) == null ? void 0 : U.full_name) || ((f = W.email) == null ? void 0 : f.split("@")[0]) || "User",
          email: W.email,
          avatar_url: ((u = W.user_metadata) == null ? void 0 : u.avatar_url) || null,
          user_metadata: W.user_metadata
        };
        return t.value = {
          user: P,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, o.value = {
          user: P,
          access_token: Q.access_token,
          refresh_token: Q.refresh_token
        }, { user: P, session: o.value, error: null };
      }
      console.log("[auth][enhanced] No active session, attempting to restore from cookies...");
      const ne = await xe();
      if (ne.success && ne.session) {
        console.log("[auth][enhanced] Session restored successfully from cookies");
        const W = ne.session.user, P = {
          id: W.id,
          name: ((L = W.user_metadata) == null ? void 0 : L.name) || ((M = W.user_metadata) == null ? void 0 : M.user_name) || ((b = W.user_metadata) == null ? void 0 : b.full_name) || ((g = W.email) == null ? void 0 : g.split("@")[0]) || "User",
          email: W.email,
          avatar_url: ((V = W.user_metadata) == null ? void 0 : V.avatar_url) || null,
          user_metadata: W.user_metadata
        };
        return t.value = {
          user: P,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, o.value = ne.session, { user: P, session: o.value, error: null };
      } else {
        console.log("[auth][enhanced] Failed to restore session:", ne.error), console.log("[auth][enhanced] Retrying session restoration with extended delay..."), await new Promise((P) => setTimeout(P, 500)), j([F, E]);
        const W = await xe();
        if (W.success && W.session) {
          console.log("[auth][enhanced] Session restored on retry");
          const P = W.session.user, Z = {
            id: P.id,
            name: ((v = P.user_metadata) == null ? void 0 : v.name) || ((S = P.user_metadata) == null ? void 0 : S.user_name) || ((te = P.user_metadata) == null ? void 0 : te.full_name) || ((K = P.email) == null ? void 0 : K.split("@")[0]) || "User",
            email: P.email,
            avatar_url: ((z = P.user_metadata) == null ? void 0 : z.avatar_url) || null,
            user_metadata: P.user_metadata
          };
          return t.value = {
            user: Z,
            isAuthenticated: !0,
            isLoading: !1,
            error: null
          }, o.value = W.session, { user: Z, session: o.value, error: null };
        }
      }
    } catch (F) {
      console.error("Error getting Supabase session:", F), F instanceof Error && Ks(F, {
        component: "useEnhancedAuth",
        function: "loadUserInfo",
        operation: "session_validation"
      });
      try {
        const E = await xe();
        if (E.success && E.session) {
          console.log("[auth][enhanced] Session restored after error");
          const j = E.session.user, Q = {
            id: j.id,
            name: ((O = j.user_metadata) == null ? void 0 : O.name) || ((re = j.user_metadata) == null ? void 0 : re.user_name) || ((B = j.user_metadata) == null ? void 0 : B.full_name) || ((A = j.email) == null ? void 0 : A.split("@")[0]) || "User",
            email: j.email,
            avatar_url: ((N = j.user_metadata) == null ? void 0 : N.avatar_url) || null,
            user_metadata: j.user_metadata
          };
          return t.value = {
            user: Q,
            isAuthenticated: !0,
            isLoading: !1,
            error: null
          }, o.value = E.session, { user: Q, session: o.value, error: null };
        }
      } catch (E) {
        console.error("Error restoring session:", E);
      }
    }
    return console.log("[auth][enhanced] No valid authentication found"), t.value = {
      user: null,
      isAuthenticated: !1,
      isLoading: !1,
      error: "No valid session found"
    }, o.value = null, { user: null, session: null, error: "No valid session found" };
  }, R = async () => {
    try {
      await (await ae()).auth.signOut(), we(ke), we(_e), Te(), t.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      }, o.value = null, console.log("[auth][enhanced] User logged out successfully");
    } catch (k) {
      console.error("Error during logout:", k), t.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      }, o.value = null;
    }
  }, x = async (k, p) => {
    var c, U, f, u, L;
    try {
      t.value.isLoading = !0;
      const M = await ae(), { data: b, error: g } = await M.auth.signInWithPassword({
        email: k,
        password: p
      });
      if (g)
        throw g;
      if (b.session) {
        const V = b.session.user, v = {
          id: V.id,
          name: ((c = V.user_metadata) == null ? void 0 : c.name) || ((U = V.user_metadata) == null ? void 0 : U.user_name) || ((f = V.user_metadata) == null ? void 0 : f.full_name) || ((u = V.email) == null ? void 0 : u.split("@")[0]) || "User",
          email: V.email,
          avatar_url: ((L = V.user_metadata) == null ? void 0 : L.avatar_url) || null,
          user_metadata: V.user_metadata
        };
        return t.value = {
          user: v,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, o.value = {
          user: v,
          access_token: b.session.access_token,
          refresh_token: b.session.refresh_token
        }, { user: v, session: o.value, error: null };
      }
      return { user: null, session: null, error: "No session returned" };
    } catch (M) {
      return console.error("Sign in error:", M), t.value.isLoading = !1, { user: null, session: null, error: String(M) };
    }
  }, H = async (k, p, c) => {
    var U, f, u, L, M;
    try {
      t.value.isLoading = !0;
      const b = await ae(), { data: g, error: V } = await b.auth.signUp({
        email: k,
        password: p,
        options: {
          data: c
        }
      });
      if (V)
        throw V;
      if (g.session) {
        const v = g.session.user, S = {
          id: v.id,
          name: ((U = v.user_metadata) == null ? void 0 : U.name) || ((f = v.user_metadata) == null ? void 0 : f.user_name) || ((u = v.user_metadata) == null ? void 0 : u.full_name) || ((L = v.email) == null ? void 0 : L.split("@")[0]) || "User",
          email: v.email,
          avatar_url: ((M = v.user_metadata) == null ? void 0 : M.avatar_url) || null,
          user_metadata: v.user_metadata
        };
        return t.value = {
          user: S,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, o.value = {
          user: S,
          access_token: g.session.access_token,
          refresh_token: g.session.refresh_token
        }, { user: S, session: o.value, error: null };
      }
      return { user: null, session: null, error: "No session returned" };
    } catch (b) {
      return console.error("Sign up error:", b), t.value.isLoading = !1, { user: null, session: null, error: String(b) };
    }
  }, w = async () => {
    await _();
  };
  return Se(async () => {
    await xs(), await w();
  }), {
    // State
    authState: t,
    currentSession: o,
    // Computed
    isAuthenticated: a,
    currentUser: i,
    isLoading: m,
    // Methods
    loadUserInfo: _,
    logout: R,
    signIn: x,
    signUp: H,
    checkAuth: w
  };
}
const he = {
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
}, Xs = {
  ...he,
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
}, Qs = {
  ...he,
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
}, ns = {
  ...he,
  normalCheckInterval: 1e4,
  // 10 seconds - faster for testing
  fastCheckInterval: 2e3,
  // 2 seconds - very fast for testing
  fastMonitoringDuration: 3e4,
  // 30 seconds - shorter for testing
  validationCacheDuration: 1e3
  // 1 second cache for testing
}, is = {
  ...he,
  normalCheckInterval: 45e3,
  // 45 seconds - balanced monitoring
  fastCheckInterval: 3e3,
  // 3 seconds - quick detection
  fastMonitoringDuration: 9e4,
  // 1.5 minutes - reasonable fast monitoring
  validationCacheDuration: 1e4
  // 10 seconds cache for better performance
};
function ls() {
  switch ("production") {
    case "production":
      return is;
    case "development":
      return ns;
    default:
      return he;
  }
}
function Fa(t) {
  return {
    ...he,
    ...t
  };
}
const Zs = {
  default: he,
  fast: Xs,
  conservative: Qs,
  development: ns,
  production: is
};
function ja(t) {
  return Zs[t];
}
const za = {
  immediate: "Immediate (0-2 seconds) - When logout is detected via auth events",
  fast: "Fast (2-5 seconds) - When fast monitoring is active",
  normal: "Normal (up to 30 seconds) - Regular monitoring interval",
  conservative: "Conservative (up to 60 seconds) - Less frequent monitoring"
}, Ba = {
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
function eo(t) {
  const o = C(!0), a = C(null), i = C(!1), m = C(!1), _ = C(null), R = C(null), x = C(null), H = { ...ls(), ...t }, w = H.normalCheckInterval, k = H.fastCheckInterval, p = H.fastMonitoringDuration, c = H.maxRetryAttempts, U = H.retryDelay, f = X(() => !o.value && a.value !== null), u = X(
    () => {
      var A, N;
      return ((A = a.value) == null ? void 0 : A.canRetry) && ((N = a.value) == null ? void 0 : N.type) !== "manual_check_failed";
    }
  ), L = (A) => {
    var E;
    if (typeof document > "u")
      return null;
    const F = `; ${document.cookie}`.split(`; ${A}=`);
    return F.length === 2 && ((E = F.pop()) == null ? void 0 : E.split(";").shift()) || null;
  }, M = async () => {
    var A, N;
    try {
      console.log("[SessionMonitor] Validating session...");
      const F = L("sb-access-token"), E = L("sb-refresh-token");
      if (!F || !E)
        return console.log("[SessionMonitor] No tokens found in cookies"), !1;
      const j = await ae();
      let Q = null, ne = null;
      for (let ee = 1; ee <= 2; ee++)
        try {
          const ce = await j.auth.getSession();
          Q = ce.data.session, ne = ce.error;
          break;
        } catch (ce) {
          if (console.warn(`[SessionMonitor] Network error on attempt ${ee}:`, ce), ee === 2)
            return console.log("[SessionMonitor] Network issues detected, maintaining current session state"), o.value;
          await new Promise((de) => setTimeout(de, 1e3));
        }
      if (ne)
        return console.warn("[SessionMonitor] Error getting session:", ne), (A = ne.message) != null && A.includes("Invalid JWT") || (N = ne.message) != null && N.includes("JWT expired") ? !1 : o.value;
      if (!Q || !Q.user)
        return console.log("[SessionMonitor] No valid session found"), !1;
      const W = /* @__PURE__ */ new Date(), P = new Date(Q.expires_at * 1e3), Z = 5 * 60 * 1e3;
      return W >= new Date(P.getTime() - Z) ? (console.log("[SessionMonitor] Session is close to expiry or expired"), !1) : (console.log("[SessionMonitor] Session is valid"), _.value = /* @__PURE__ */ new Date(), !0);
    } catch (F) {
      return console.error("[SessionMonitor] Error validating session:", F), o.value;
    }
  }, b = async () => {
    try {
      console.log("[SessionMonitor] Attempting to restore session...");
      const A = L("sb-access-token"), N = L("sb-refresh-token");
      if (!A || !N)
        return console.log("[SessionMonitor] No tokens available for restoration"), !1;
      const F = await ae(), { data: E, error: j } = await F.auth.setSession({
        access_token: A,
        refresh_token: N
      });
      return j ? (console.warn("[SessionMonitor] Error restoring session:", j), !1) : E.session && E.session.user ? (console.log("[SessionMonitor] Session restored successfully"), _.value = /* @__PURE__ */ new Date(), !0) : !1;
    } catch (A) {
      return console.error("[SessionMonitor] Error restoring session:", A), !1;
    }
  }, g = (A, N, F = !0) => {
    console.warn("[SessionMonitor] Session loss detected:", { type: A, message: N }), o.value = !1, a.value = {
      type: A,
      message: N,
      timestamp: /* @__PURE__ */ new Date(),
      canRetry: F
    };
  }, V = async () => {
    console.log("[SessionMonitor] Retrying session validation...");
    for (let A = 1; A <= c; A++) {
      if (console.log(`[SessionMonitor] Retry attempt ${A}/${c}`), A > 1 && await new Promise((E) => setTimeout(E, U)), await b() && await M())
        return console.log("[SessionMonitor] Session restored and validated successfully"), o.value = !0, a.value = null, !0;
      if (await M())
        return console.log("[SessionMonitor] Session validated successfully on retry"), o.value = !0, a.value = null, !0;
    }
    return console.log("[SessionMonitor] All retry attempts failed"), !1;
  }, v = () => {
    console.log("[SessionMonitor] Clearing session loss state"), o.value = !0, a.value = null;
  }, S = () => {
    if (i.value) {
      console.log("[SessionMonitor] Already monitoring, skipping start");
      return;
    }
    console.log("[SessionMonitor] Starting session monitoring..."), i.value = !0, setTimeout(async () => {
      console.log("[SessionMonitor] Performing initial session validation..."), await M() ? console.log("[SessionMonitor] Initial validation successful") : (console.log("[SessionMonitor] Initial validation failed, but waiting for confirmation..."), setTimeout(async () => {
        await M() || g("session_expired", "Your session has expired. Please log in again.", !0);
      }, 3e3));
    }, 2e3), R.value = setInterval(async () => {
      console.log("[SessionMonitor] Periodic session check...");
      const A = await M();
      !A && o.value ? (console.log("[SessionMonitor] Session validation failed, performing confirmation check..."), setTimeout(async () => {
        await M() || g("session_expired", "Your session has expired. Please log in again.", !0);
      }, 2e3)) : A && !o.value && (console.log("[SessionMonitor] Session recovered"), v());
    }, w);
  }, te = () => {
    if (m.value) {
      console.log("[SessionMonitor] Fast monitoring already active");
      return;
    }
    console.log("[SessionMonitor] Starting fast monitoring (5s intervals)..."), m.value = !0, x.value && clearInterval(x.value), x.value = setInterval(async () => {
      console.log("[SessionMonitor] Fast session check...");
      const A = await M();
      !A && o.value ? (console.log("[SessionMonitor] Fast monitoring detected potential session loss, confirming..."), setTimeout(async () => {
        await M() || (g("session_expired", "Your session has expired. Please log in again.", !0), K());
      }, 1e3)) : A && !o.value && (console.log("[SessionMonitor] Session recovered"), v(), K());
    }, k), setTimeout(() => {
      m.value && (console.log(`[SessionMonitor] Auto-stopping fast monitoring after ${p / 1e3} seconds`), K());
    }, p);
  }, K = () => {
    m.value && (console.log("[SessionMonitor] Stopping fast monitoring..."), m.value = !1, x.value && (clearInterval(x.value), x.value = null));
  }, z = () => {
    i.value && (console.log("[SessionMonitor] Stopping session monitoring..."), i.value = !1, R.value && (clearInterval(R.value), R.value = null), K());
  }, O = async () => {
    console.log("[SessionMonitor] Manual session check requested");
    const A = await M();
    return !A && !await b() ? (g("manual_check_failed", "Session validation failed. Please log in again.", !1), !1) : A;
  }, re = () => {
    console.log("[SessionMonitor] Network error detected, but not triggering immediate session loss"), o.value || g("network_error", "Network connection lost. Please check your internet connection and try again.", !0);
  }, B = () => {
    if (typeof window > "u")
      return;
    const A = () => {
      var E;
      console.log("[SessionMonitor] Network connection restored"), f.value && ((E = a.value) == null ? void 0 : E.type) === "network_error" && setTimeout(() => V(), 1e3);
    }, N = () => {
      console.log("[SessionMonitor] Network connection lost"), re();
    }, F = (E) => {
      console.log("[SessionMonitor] Logout detected, starting fast monitoring for immediate detection"), te();
    };
    return window.addEventListener("online", A), window.addEventListener("offline", N), window.addEventListener("session-logout-detected", F), () => {
      window.removeEventListener("online", A), window.removeEventListener("offline", N), window.removeEventListener("session-logout-detected", F);
    };
  };
  return Se(() => {
    console.log("[SessionMonitor] Mounted, setting up monitoring"), S(), B();
  }), ts(() => {
    console.log("[SessionMonitor] Unmounted, cleaning up"), z();
  }), {
    // State
    isSessionValid: o,
    sessionLossEvent: a,
    isMonitoring: i,
    isFastMonitoring: m,
    lastValidSession: _,
    // Computed
    hasSessionLoss: f,
    canRetrySession: u,
    // Methods
    validateSession: M,
    restoreSession: b,
    retrySession: V,
    clearSessionLoss: v,
    startMonitoring: S,
    stopMonitoring: z,
    startFastMonitoring: te,
    stopFastMonitoring: K,
    checkSession: O,
    handleNetworkError: re
  };
}
const so = Ds("workspace", () => {
  const t = C(null), o = C([]), a = C(null), i = (w) => {
    t.value = w, localStorage.setItem("current_workspace", JSON.stringify(w));
  }, m = (w) => {
    o.value = w, localStorage.setItem("available_workspaces", JSON.stringify(w));
  };
  return {
    currentWorkspace: t,
    workspaces: o,
    user: a,
    setCurrentWorkspace: i,
    setWorkspaces: m,
    setUser: (w) => {
      a.value = w, localStorage.setItem("user_info", JSON.stringify(w));
    },
    loadPersistedData: () => {
      const w = localStorage.getItem("current_workspace");
      if (w)
        try {
          t.value = JSON.parse(w);
        } catch (c) {
          console.error("Error loading persisted workspace:", c);
        }
      const k = localStorage.getItem("available_workspaces");
      if (k)
        try {
          o.value = JSON.parse(k);
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
      t.value = null, o.value = [], a.value = null, localStorage.removeItem("current_workspace"), localStorage.removeItem("available_workspaces"), localStorage.removeItem("user_info");
    },
    loadWorkspaces: async (w = !1) => {
      try {
        const { data: { user: k } } = await Le.auth.getUser();
        if (!k)
          return [];
        let p = Le.from("workspaces").select(`
          id, title, description, parent_workspace_id, created_by, archived, created_at, git_repo, 
          workspace_access!inner ( access_type, shared_with_user_id ),
          workspace_activities!left ( updated_at )
        `).eq("workspace_access.shared_with_user_id", k.id);
        w || (p = p.eq("archived", !1));
        const { data: c, error: U } = await p;
        if (U)
          throw U;
        const f = /* @__PURE__ */ new Map();
        (c || []).forEach((g) => {
          (g.workspace_access || []).forEach((V) => {
            V.shared_with_user_id === k.id && f.set(g.id, V);
          });
        });
        const u = [...new Set(
          (c || []).filter((g) => g.parent_workspace_id).map((g) => g.parent_workspace_id).filter((g) => !f.has(g))
        )];
        let L = [];
        if (u.length) {
          let g = Le.from("workspaces").select("id, title, description, parent_workspace_id, created_by, archived, created_at").in("id", u);
          w || (g = g.eq("archived", !1));
          const { data: V, error: v } = await g;
          if (v)
            throw v;
          L = V || [];
        }
        const b = [...c || [], ...L].map((g) => {
          var V, v, S;
          return {
            id: g.id,
            title: g.title,
            description: g.description || "No description",
            parent_workspace_id: g.parent_workspace_id,
            created_by: g.created_by,
            archived: g.archived,
            created_at: g.created_at,
            latest_activity: ((v = (V = g.workspace_activities) == null ? void 0 : V[0]) == null ? void 0 : v.updated_at) || g.created_at,
            hasAccess: f.has(g.id),
            accessType: ((S = f.get(g.id)) == null ? void 0 : S.access_type) || null
          };
        });
        return b.sort((g, V) => new Date(V.latest_activity) - new Date(g.latest_activity)), m(b), b;
      } catch (k) {
        return console.error("loadWorkspaces error", k), [];
      }
    }
  };
});
function oo() {
  const t = C({
    user: null,
    isAuthenticated: !1,
    isLoading: !0,
    error: null
  }), o = C(window.location.href), a = async () => {
    var w, k, p, c, U, f, u, L;
    try {
      t.value.isLoading = !0;
      const M = await ae(), { data: { session: b }, error: g } = await M.auth.getSession();
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
          name: ((w = b.user.user_metadata) == null ? void 0 : w.full_name) || ((k = b.user.user_metadata) == null ? void 0 : k.name) || ((p = b.user.email) == null ? void 0 : p.split("@")[0]) || "User",
          avatar_url: ((c = b.user.user_metadata) == null ? void 0 : c.avatar_url) || ((U = b.user.user_metadata) == null ? void 0 : U.picture) || null,
          initials: (((f = b.user.user_metadata) == null ? void 0 : f.full_name) || ((u = b.user.user_metadata) == null ? void 0 : u.name) || ((L = b.user.email) == null ? void 0 : L.split("@")[0]) || "U").split(" ").map((V) => V[0]).join("").toUpperCase().substring(0, 2)
        },
        isAuthenticated: !0,
        isLoading: !1,
        error: null
      }, b.access_token && ye(ke, b.access_token), b.refresh_token && ye(_e, b.refresh_token), De()) : t.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      };
    } catch (M) {
      console.error("Auth check failed:", M), t.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: M.message || "Authentication check failed"
      };
    }
  }, i = async (w, k) => {
    try {
      const p = await ae(), { error: c } = await p.auth.signInWithPassword({
        email: w,
        password: k
      });
      return c ? { success: !1, error: c.message } : (await a(), sessionStorage.setItem("post-login-redirect", o.value), { success: !0 });
    } catch (p) {
      return console.error("Login error:", p), { success: !1, error: p.message || "Login failed" };
    }
  }, m = async (w, k) => {
    var p;
    try {
      const c = await ae(), { data: U, error: f } = await c.auth.signUp({
        email: w,
        password: k
      });
      return f ? { success: !1, error: f.message } : U.user && !U.user.email_confirmed_at ? { success: !0, needsConfirmation: !0 } : (p = U.session) != null && p.user ? (await a(), sessionStorage.setItem("post-login-redirect", o.value), { success: !0 }) : { success: !1, error: "No session created" };
    } catch (c) {
      return console.error("Signup error:", c), { success: !1, error: c.message || "Signup failed" };
    }
  }, _ = async (w) => {
    try {
      const k = `${window.location.origin}/auth/callback`;
      console.log("[OAuth] Starting login with provider:", w), console.log("[OAuth] Redirect URL:", k), console.log("[OAuth] Current URL:", o.value), console.log("[OAuth] Current origin:", window.location.origin);
      const p = await ae(), { error: c } = await p.auth.signInWithOAuth({
        provider: w,
        options: {
          redirectTo: k,
          queryParams: {
            redirect_origin: o.value
          }
        }
      });
      if (c)
        return console.error("[OAuth] Error:", c), { success: !1, error: c.message };
      const U = o.value || window.location.href;
      return sessionStorage.setItem("post-login-redirect", U), localStorage.setItem("post-login-redirect", U), console.log("[OAuth] Stored redirect URL:", U), console.log("[OAuth] Current URL value:", o.value), console.log("[OAuth] Window location href:", window.location.href), { success: !0 };
    } catch (k) {
      return console.error("OAuth login error:", k), { success: !1, error: k.message || "OAuth login failed" };
    }
  }, R = async () => {
    try {
      const w = await ae(), { error: k } = await w.auth.signOut();
      k && console.error("Logout error:", k), t.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      }, we(ke), we(_e), Te();
    } catch (w) {
      console.error("Logout error:", w);
    }
  }, x = async (w) => {
    try {
      const k = await ae(), { error: p } = await k.auth.resetPasswordForEmail(w, {
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
            }, we(ke), we(_e), Te();
            break;
          case "TOKEN_REFRESHED":
            p != null && p.access_token && ye(ke, p.access_token), p != null && p.refresh_token && ye(_e, p.refresh_token), De();
            break;
          case "USER_UPDATED":
            p != null && p.user && a();
            break;
        }
      });
    } catch (w) {
      console.warn("Failed to setup auth listener:", w);
    }
  };
  return Se(async () => {
    H(), await a();
  }), ue(() => window.location.href, (w) => {
    o.value = w;
  }), {
    authState: X(() => t.value),
    isAuthenticated: X(() => t.value.isAuthenticated),
    user: X(() => t.value.user),
    isLoading: X(() => t.value.isLoading),
    checkAuthStatus: a,
    loginWithEmail: i,
    signupWithEmail: m,
    loginWithProvider: _,
    logout: R,
    resetPassword: x,
    currentUrl: X(() => o.value)
  };
}
const ao = { class: "login-container" }, to = { class: "logo-section" }, ro = { class: "login-buttons" }, no = {
  key: 0,
  class: "forgot-password"
}, io = { class: "signup-link" }, lo = /* @__PURE__ */ le({
  __name: "LoginModal",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue", "login-success"],
  setup(t, { emit: o }) {
    const a = t, i = o, m = X({
      get: () => a.modelValue,
      set: (v) => i("update:modelValue", v)
    }), _ = C(!1), R = C(!1), x = C(), { loginWithEmail: H, signupWithEmail: w, loginWithProvider: k, resetPassword: p } = oo(), c = Ws({
      email: "",
      password: "",
      confirmPassword: ""
    }), U = X(() => ({
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
      _.value = !_.value, c.email = "", c.password = "", c.confirmPassword = "", (v = x.value) == null || v.clearValidate();
    }, u = () => {
      var v;
      m.value = !1, c.email = "", c.password = "", c.confirmPassword = "", _.value = !1, (v = x.value) == null || v.clearValidate();
    }, L = async () => {
      if (x.value)
        try {
          await x.value.validate(), R.value = !0, _.value ? await b() : await M();
        } catch (v) {
          console.error("Form validation failed:", v);
        } finally {
          R.value = !1;
        }
    }, M = async () => {
      const v = await H(c.email, c.password);
      v.success ? (G.success("Login successful"), i("login-success", { email: c.email }), u()) : G.error("Login failed: " + v.error);
    }, b = async () => {
      const v = await w(c.email, c.password);
      v.success ? v.needsConfirmation ? G.success("Please check your email to confirm your account") : (G.success("Account created successfully"), i("login-success", { email: c.email }), u()) : G.error("Signup failed: " + v.error);
    }, g = async (v) => {
      const S = await k(v);
      S.success ? G.success("Redirecting to login provider...") : G.error("Login failed: " + S.error);
    }, V = async () => {
      if (!c.email) {
        G.warning("Please enter your email address first");
        return;
      }
      const v = await p(c.email);
      v.success ? G.success("Password reset email sent! Please check your inbox.") : G.error("Failed to send reset email: " + v.error);
    };
    return (v, S) => {
      const te = ie("el-icon"), K = ie("el-input"), z = ie("el-form-item"), O = ie("el-button"), re = ie("el-dialog");
      return y(), oe(re, {
        modelValue: m.value,
        "onUpdate:modelValue": S[6] || (S[6] = (B) => m.value = B),
        title: "",
        width: "500px",
        "close-on-click-modal": !1,
        "close-on-press-escape": !0,
        "show-close": !0,
        class: "login-modal",
        onClose: u
      }, {
        default: d(() => [
          n("div", ao, [
            n("div", to, [
              n("h2", null, J(_.value ? "Create Account" : "Welcome Back"), 1),
              n("p", null, J(_.value ? "Sign up to get started with your account" : "Sign in to continue to your account"), 1)
            ]),
            h(D(Rs), {
              model: c,
              rules: U.value,
              ref_key: "formRef",
              ref: x,
              class: "login-form",
              onSubmit: fe(L, ["prevent"])
            }, {
              default: d(() => [
                h(z, { prop: "email" }, {
                  default: d(() => [
                    h(K, {
                      modelValue: c.email,
                      "onUpdate:modelValue": S[0] || (S[0] = (B) => c.email = B),
                      placeholder: "Email",
                      type: "email",
                      size: "large",
                      class: "form-input"
                    }, {
                      prefix: d(() => [
                        h(te, null, {
                          default: d(() => [
                            h(D(zs))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                h(z, { prop: "password" }, {
                  default: d(() => [
                    h(K, {
                      modelValue: c.password,
                      "onUpdate:modelValue": S[1] || (S[1] = (B) => c.password = B),
                      placeholder: "Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: d(() => [
                        h(te, null, {
                          default: d(() => [
                            h(D(as))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                _.value ? (y(), oe(z, {
                  key: 0,
                  prop: "confirmPassword"
                }, {
                  default: d(() => [
                    h(K, {
                      modelValue: c.confirmPassword,
                      "onUpdate:modelValue": S[2] || (S[2] = (B) => c.confirmPassword = B),
                      placeholder: "Confirm Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: d(() => [
                        h(te, null, {
                          default: d(() => [
                            h(D(as))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                })) : Y("", !0),
                h(z, null, {
                  default: d(() => [
                    h(O, {
                      type: "primary",
                      class: "submit-button",
                      loading: R.value,
                      onClick: L,
                      size: "large"
                    }, {
                      default: d(() => [
                        q(J(_.value ? "Sign Up" : "Sign In"), 1)
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
            n("div", ro, [
              h(O, {
                class: "login-button google",
                onClick: S[3] || (S[3] = (B) => g("google")),
                size: "large"
              }, {
                default: d(() => [...S[7] || (S[7] = [
                  n("span", { class: "social-icon" }, "G", -1),
                  q(" Google ", -1)
                ])]),
                _: 1
              }),
              h(O, {
                class: "login-button github",
                onClick: S[4] || (S[4] = (B) => g("github")),
                size: "large"
              }, {
                default: d(() => [...S[8] || (S[8] = [
                  n("span", { class: "social-icon" }, "⚡", -1),
                  q(" GitHub ", -1)
                ])]),
                _: 1
              }),
              h(O, {
                class: "login-button twitter",
                onClick: S[5] || (S[5] = (B) => g("twitter")),
                size: "large"
              }, {
                default: d(() => [...S[9] || (S[9] = [
                  n("span", { class: "social-icon" }, "X", -1),
                  q(" X (Twitter) ", -1)
                ])]),
                _: 1
              })
            ]),
            S[11] || (S[11] = n("div", { class: "terms" }, " By continuing, you agree to AI Workspace's Terms of Service and Privacy Policy ", -1)),
            _.value ? Y("", !0) : (y(), T("div", no, [
              n("a", {
                href: "#",
                onClick: fe(V, ["prevent"])
              }, "Forgot Password?")
            ])),
            n("div", io, [
              q(J(_.value ? "Already have an account?" : "Don't have an account?") + " ", 1),
              n("a", {
                href: "#",
                onClick: fe(f, ["prevent"])
              }, J(_.value ? "Sign in" : "Sign up"), 1)
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
const Me = (t, o) => {
  const a = t.__vccOpts || t;
  for (const [i, m] of o)
    a[i] = m;
  return a;
}, co = /* @__PURE__ */ Me(lo, [["__scopeId", "data-v-684a3f28"]]), uo = { class: "session-loss-content" }, po = { class: "session-loss-icon" }, fo = { class: "session-loss-message" }, go = {
  key: 0,
  class: "session-loss-details"
}, ho = { class: "detail-item" }, vo = { class: "detail-value" }, mo = { class: "detail-item" }, wo = { class: "detail-value" }, ko = { class: "session-loss-actions" }, _o = {
  key: 0,
  class: "retry-status"
}, yo = { class: "retry-message" }, So = /* @__PURE__ */ le({
  __name: "SessionLossModal",
  props: {
    modelValue: { type: Boolean },
    sessionLossEvent: {},
    canRetrySession: { type: Boolean }
  },
  emits: ["update:modelValue", "retry", "login", "refresh"],
  setup(t, { emit: o }) {
    const a = t, i = o, m = C(!1), _ = C(0), R = C(void 0), x = C(""), H = X({
      get: () => a.modelValue,
      set: (f) => i("update:modelValue", f)
    }), w = (f) => {
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
      if (m.value)
        return;
      m.value = !0, _.value = 0, R.value = void 0, x.value = "Attempting to restore session...";
      const f = setInterval(() => {
        _.value < 90 && (_.value += Math.random() * 20);
      }, 200);
      try {
        i("retry"), await new Promise((u) => setTimeout(u, 2e3)), _.value = 100, R.value = "success", x.value = "Session restored successfully!", setTimeout(() => {
          H.value = !1;
        }, 1e3);
      } catch {
        _.value = 100, R.value = "exception", x.value = "Failed to restore session. Please log in again.", G.error("Session restoration failed");
      } finally {
        clearInterval(f), setTimeout(() => {
          m.value = !1, _.value = 0, R.value = void 0, x.value = "";
        }, 3e3);
      }
    }, c = () => {
      i("login"), H.value = !1;
    }, U = () => {
      i("refresh"), window.location.reload();
    };
    return ue(() => a.sessionLossEvent, (f) => {
      f && (m.value = !1, _.value = 0, R.value = void 0, x.value = "");
    }), (f, u) => (y(), oe(D(Us), {
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
          n("div", uo, [
            n("div", po, [
              h(D(Ie), {
                size: "48",
                color: "#f56c6c"
              }, {
                default: d(() => [
                  h(D(rs))
                ]),
                _: 1
              })
            ]),
            n("div", fo, [
              u[3] || (u[3] = n("h3", null, "Your session has expired", -1)),
              n("p", null, J(((L = f.sessionLossEvent) == null ? void 0 : L.message) || "Please log in again to continue using the application."), 1),
              f.sessionLossEvent ? (y(), T("div", go, [
                n("div", ho, [
                  u[1] || (u[1] = n("span", { class: "detail-label" }, "Issue:", -1)),
                  n("span", vo, J(w(f.sessionLossEvent.type)), 1)
                ]),
                n("div", mo, [
                  u[2] || (u[2] = n("span", { class: "detail-label" }, "Time:", -1)),
                  n("span", wo, J(k(f.sessionLossEvent.timestamp)), 1)
                ])
              ])) : Y("", !0)
            ]),
            n("div", ko, [
              f.canRetrySession && !m.value ? (y(), oe(D(Pe), {
                key: 0,
                type: "primary",
                onClick: p,
                loading: m.value
              }, {
                default: d(() => [
                  h(D(Ie), null, {
                    default: d(() => [
                      h(D(Ne))
                    ]),
                    _: 1
                  }),
                  u[4] || (u[4] = q(" Try Again ", -1))
                ]),
                _: 1
              }, 8, ["loading"])) : Y("", !0),
              h(D(Pe), {
                type: "primary",
                onClick: c,
                disabled: m.value
              }, {
                default: d(() => [
                  h(D(Ie), null, {
                    default: d(() => [
                      h(D(He))
                    ]),
                    _: 1
                  }),
                  u[5] || (u[5] = q(" Log In ", -1))
                ]),
                _: 1
              }, 8, ["disabled"]),
              f.canRetrySession ? Y("", !0) : (y(), oe(D(Pe), {
                key: 1,
                type: "info",
                onClick: U,
                disabled: m.value
              }, {
                default: d(() => [
                  h(D(Ie), null, {
                    default: d(() => [
                      h(D(Ne))
                    ]),
                    _: 1
                  }),
                  u[6] || (u[6] = q(" Refresh Page ", -1))
                ]),
                _: 1
              }, 8, ["disabled"]))
            ]),
            m.value ? (y(), T("div", _o, [
              h(D(Ps), {
                percentage: _.value,
                status: R.value,
                "stroke-width": 6
              }, null, 8, ["percentage", "status"]),
              n("p", yo, J(x.value), 1)
            ])) : Y("", !0)
          ])
        ];
      }),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const bo = /* @__PURE__ */ Me(So, [["__scopeId", "data-v-0dd27f7f"]]), Co = { class: "aiworkspace-header" }, Ao = {
  key: 0,
  class: "header-content header-loading"
}, Eo = { class: "header-center" }, Io = { class: "loading-text" }, Lo = { key: 0 }, Vo = { key: 1 }, Mo = {
  key: 1,
  class: "header-content header-fallback"
}, Wo = {
  key: 2,
  class: "header-content header-restricted"
}, $o = { class: "header-center" }, Ro = { class: "restricted-text" }, Uo = { class: "header-right" }, Po = {
  key: 3,
  class: "header-content"
}, xo = { class: "header-left" }, To = { class: "logo-section" }, Do = {
  href: "/",
  class: "logo"
}, No = ["src"], Ho = {
  key: 1,
  class: "text-logo"
}, Oo = {
  key: 0,
  class: "header-center"
}, Fo = { class: "main-navigation" }, jo = { class: "nav-item" }, zo = {
  href: "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard",
  class: "nav-link"
}, Bo = { class: "workspace-dropdown-item" }, Go = ["href"], Jo = { class: "workspace-icon" }, Ko = {
  key: 1,
  class: "nav-divider"
}, qo = { class: "nav-item" }, Yo = ["href", "onClick"], Xo = { class: "header-right" }, Qo = { class: "user-profile" }, Zo = { class: "user-info" }, ea = { class: "user-name" }, sa = { class: "user-avatar" }, oa = ["src", "alt"], aa = {
  key: 1,
  class: "avatar-placeholder"
}, ta = { class: "version-info" }, ra = { class: "version-hash" }, na = {
  key: 4,
  class: "header-content header-unauthenticated"
}, ia = { class: "header-left" }, la = { class: "logo-section" }, ca = {
  href: "/",
  class: "logo"
}, ua = ["src"], da = {
  key: 1,
  class: "text-logo"
}, pa = { class: "header-right" }, fa = { class: "workspace-list" }, ga = ["onClick"], ha = { class: "workspace-icon" }, va = { class: "workspace-details" }, ma = { class: "workspace-members" }, wa = {
  key: 0,
  class: "current-indicator"
}, ka = { class: "update-content" }, _a = { class: "update-actions" }, be = 50, ya = /* @__PURE__ */ le({
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
  setup(t, { emit: o }) {
    const a = t, i = o, { authState: m, logout: _, isLoading: R } = Ys(), {
      isSessionValid: x,
      sessionLossEvent: H,
      hasSessionLoss: w,
      canRetrySession: k,
      retrySession: p,
      clearSessionLoss: c
    } = eo(), U = () => {
      try {
        return so();
      } catch {
        return console.warn("[AIWorkspaceHeader] Pinia not initialized yet, using fallback state"), null;
      }
    }, f = () => {
      try {
        return typeof window < "u" ? !!window.__PINIA__ || !!window.Pinia : !1;
      } catch {
        return !1;
      }
    }, u = C(U()), L = X(() => !!u.value), M = C(0), b = () => {
      if (!u.value && M.value < be) {
        if (f()) {
          const s = U();
          if (s) {
            u.value = s, console.log("[AIWorkspaceHeader] Pinia store initialized successfully");
            return;
          }
        }
        M.value++, setTimeout(b, 100);
      } else
        M.value >= be && console.warn("[AIWorkspaceHeader] Pinia initialization failed after maximum retries, using fallback mode");
    };
    Se(() => {
      u.value || b();
    });
    const g = C(!1), V = C(!1), v = C(!1), S = C([]), te = C([]), K = C({
      name: "",
      email: "",
      avatar_url: null,
      initials: ""
    }), z = C("unknown"), O = C("unknown"), re = C(!1), B = C(null), A = C(null), N = C(!1), F = C([]), E = C([]), j = C(!1);
    ue(E, async (s) => {
      s.length > 0 && L.value && Z.value && await P();
    }, { immediate: !1 }), ue(() => window.location.pathname + window.location.search + window.location.hash, async () => {
      L.value && Z.value && await P();
    }, { immediate: !1 });
    const Q = C(window.location.pathname);
    ue(() => window.location.pathname, (s) => {
      Q.value = s;
    }, { immediate: !0 }), ue(L, (s) => {
      !s && M.value < be && b();
    });
    const ne = () => {
      try {
        const s = window.location.pathname.match(/\/single-workspace\/(\d+)/);
        if (s)
          return s[1];
        const r = new URLSearchParams(window.location.search).get("workspace_id");
        if (r)
          return r;
        const l = window.location.hash.match(/workspace_id=(\d+)/);
        return l ? l[1] : null;
      } catch (s) {
        return console.warn("[AIWorkspaceHeader] Error parsing URL for workspace_id:", s), null;
      }
    }, W = () => {
      try {
        return window.location.pathname.includes("/all-workspace/");
      } catch (s) {
        return console.warn("[AIWorkspaceHeader] Error checking all-workspace mode:", s), !1;
      }
    }, P = async () => {
      if (!u.value || !L.value)
        return;
      const s = W();
      if (j.value = s, s) {
        u.value.currentWorkspace = null, localStorage.removeItem("current_workspace"), console.log("[AIWorkspaceHeader] Auto-selected all-workspace mode from URL");
        return;
      }
      const e = ne();
      if (e)
        try {
          E.value.length === 0 && await Be();
          const r = E.value.find((l) => l.id.toString() === e);
          r ? (u.value.setCurrentWorkspace(r), console.log(`[AIWorkspaceHeader] Auto-selected workspace from URL: ${r.title} (ID: ${r.id})`), i("workspaceChange", r)) : console.warn(`[AIWorkspaceHeader] Workspace with ID ${e} not found in available workspaces`);
        } catch (r) {
          console.error("[AIWorkspaceHeader] Error auto-selecting workspace from URL:", r);
        }
    }, Z = X(() => m.value.isAuthenticated), ee = X(() => u.value ? u.value.currentWorkspace : null), ce = C([
      { label: "Dashboard", key: "dashboard", url: "/dashboard" },
      { label: "Goals", key: "goals", url: "/goals" },
      { label: "Tasks", key: "tasks", url: "/tasks" },
      { label: "Events", key: "events", url: "/events" },
      { label: "Drive", key: "files", url: "/files" },
      { label: "Outlines", key: "outlines", url: "/outlines" },
      { label: "Communications", key: "communications", url: "/communications" },
      { label: "Canvas", key: "canvas", url: "/canvas" },
      { label: "AI Phone", key: "ai_phone", url: "/ai_phone" },
      { label: "AI Intake", key: "ai_intake", url: "/ai_intake" },
      { label: "AI Fax", key: "ai_fax", url: "/ai_fax" },
      { label: "AI Portfolios", key: "ai-portfolios", url: "/ai-portfolios" },
      { label: "AI Fund Analyst", key: "ai_fund_analyst", url: "/ai_fund_analyst" },
      { label: "Contacts", key: "contacts", url: "/contacts" },
      { label: "Settings", key: "settings", url: "/settings" }
    ]), de = C([
      { label: "Dashboard", key: "dashboard", url: "/dashboard" },
      { label: "All Tasks", key: "tasks", url: "/tasks" },
      { label: "All Goals", key: "goals", url: "/goals" },
      { label: "All Events", key: "events", url: "/events" },
      { label: "All Drive", key: "files", url: "/files" },
      { label: "All Contacts", key: "contacts", url: "/contacts" },
      { label: "All Settings", key: "settings", url: "/settings" }
    ]), je = X(() => j.value ? de.value : ce.value), cs = X(() => {
      try {
        const s = Q.value;
        let e = "";
        const r = s.match(/\/all-workspace\/([^\/]+)/);
        if (r)
          e = r[1];
        else {
          const l = s.match(/\/single-workspace\/\d+\/([^\/]+)/);
          if (l)
            e = l[1];
          else {
            const $ = s.match(/\/([^\/]+)$/);
            $ && (e = $[1]);
          }
        }
        if (e) {
          const l = je.value.find(
            ($) => $.key === e || $.url.includes(`/${e}`) || $.url === `/${e}`
          );
          if (l)
            return l.label;
        }
        return "Dashboard";
      } catch (s) {
        return console.warn("[AIWorkspaceHeader] Error determining current section:", s), "Dashboard";
      }
    }), us = (s) => {
      const e = /* @__PURE__ */ new Map();
      s.forEach(($) => {
        e.set($.id, { ...$, children: [] });
      });
      const r = [];
      e.forEach(($) => {
        $.parent_workspace_id && e.has($.parent_workspace_id) ? e.get($.parent_workspace_id).children.push($) : r.push($);
      });
      const l = ($) => {
        $.sort((se, pe) => se.title.localeCompare(pe.title)), $.forEach((se) => {
          se.children && l(se.children);
        });
      };
      return l(r), r;
    }, ze = (s, e = 0, r = []) => (s.forEach((l) => {
      r.push({ ...l, level: e }), l.children && l.children.length && ze(l.children, e + 1, r);
    }), r), Be = async () => {
      var s, e, r;
      try {
        const l = await ((s = u.value) == null ? void 0 : s.loadWorkspaces());
        if (F.value = us(l || []), E.value = ze(F.value), te.value = E.value, S.value = E.value, a.currentWorkspaceId) {
          const $ = E.value.find((se) => {
            var pe;
            return se.id.toString() === ((pe = a.currentWorkspaceId) == null ? void 0 : pe.toString());
          });
          $ && ((e = u.value) == null || e.setCurrentWorkspace($));
        } else
          !ee.value && E.value.length && ((r = u.value) == null || r.setCurrentWorkspace(E.value[0]));
      } catch (l) {
        console.error("loadWorkspaces (header) error", l);
      }
    }, ds = (s) => {
      if (console.log("Navigation command:", s), s === "all-workspace") {
        window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
        return;
      } else {
        const e = parseInt(s.replace("workspace-", ""));
        window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e}/dashboard`;
        return;
      }
    }, ps = (s) => {
      const e = ee.value, r = j.value;
      switch (s.key) {
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
            const l = `https://app.aiworkspace.pro/all-workspace/${s.key}`;
            window.location.href = l;
          } else if (e) {
            const l = `https://app.aiworkspace.pro/single-workspace/${e.id}/${s.key}`;
            window.location.href = l;
          } else {
            const l = `https://app.aiworkspace.pro/${s.key}`;
            window.location.href = l;
          }
          break;
      }
    }, fs = (s) => {
      const e = ee.value, r = j.value;
      switch (s.key) {
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
        case "goals":
          return r ? "https://app.aiworkspace.pro/all-workspace/goals" : e ? `https://app.aiworkspace.pro/single-workspace/${e.id}/goals` : "https://app.aiworkspace.pro/all-workspace/goals";
        case "events":
          return r ? "https://app.aiworkspace.pro/all-workspace/events" : e ? `https://app.aiworkspace.pro/single-workspace/${e.id}/events` : "https://app.aiworkspace.pro/all-workspace/events";
        case "contacts":
          return r ? "https://app.aiworkspace.pro/all-workspace/contacts" : e ? `https://app.aiworkspace.pro/single-workspace/${e.id}/contacts` : "https://app.aiworkspace.pro/all-workspace/contacts";
        case "settings":
          return r ? "https://settings.aiworkspace.pro/all-workspace/settings" : e ? `https://settings.aiworkspace.pro/single-workspace/${e.id}/settings` : "https://settings.aiworkspace.pro";
        default:
          return r ? `https://app.aiworkspace.pro/all-workspace/${s.key}` : e ? `https://app.aiworkspace.pro/single-workspace/${e.id}/${s.key}` : `https://app.aiworkspace.pro/${s.key}`;
      }
    }, Ce = (s) => {
      switch (s) {
        case "profile":
          a.onProfileClick ? a.onProfileClick() : G.info("Profile settings coming soon");
          break;
        case "workspaces":
          g.value = !0;
          break;
        case "logout":
          hs();
          break;
      }
    }, Ge = (s) => {
      var e;
      (e = u.value) == null || e.setCurrentWorkspace(s), g.value = !1, i("workspaceChange", s), G.success(`Switched to ${s.title}`);
    }, gs = () => {
      ss.prompt("Enter workspace name:", "Create New Workspace", {
        confirmButtonText: "Create",
        cancelButtonText: "Cancel",
        inputPattern: /\S/,
        inputErrorMessage: "Workspace name cannot be empty"
      }).then(({ value: s }) => {
        var r;
        const e = {
          id: Date.now(),
          title: s,
          description: "New workspace",
          archived: !1,
          created_by: "",
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          latest_activity: (/* @__PURE__ */ new Date()).toISOString(),
          hasAccess: !0,
          accessType: "edit"
        };
        S.value.push(e), (r = u.value) == null || r.setWorkspaces(S.value), Ge(e), G.success(`Created workspace: ${s}`);
      }).catch(() => {
      });
    }, hs = () => {
      ss.confirm(
        "Are you sure you want to sign out?",
        "Sign Out",
        {
          confirmButtonText: "Sign Out",
          cancelButtonText: "Cancel",
          type: "warning"
        }
      ).then(async () => {
        var s;
        (s = u.value) == null || s.clearData(), await _(), typeof window < "u" && window.dispatchEvent(new CustomEvent("session-logout-detected", {
          detail: { timestamp: /* @__PURE__ */ new Date(), source: "manual-logout" }
        })), i("logout"), G.success("Signed out successfully");
      }).catch(() => {
      });
    }, We = async () => {
      var s, e;
      if (m.value.user) {
        const r = m.value.user;
        K.value = {
          name: r.name || ((s = r.email) == null ? void 0 : s.split("@")[0]) || "User",
          email: r.email || "",
          avatar_url: r.avatar_url || null,
          initials: (r.name || ((e = r.email) == null ? void 0 : e.split("@")[0]) || "U").split(" ").map((l) => l[0]).join("").toUpperCase().substring(0, 2)
        }, a.showWorkspaceSelector && await Be();
      }
    };
    ue(() => m.value.user, (s) => {
      var e;
      s ? We() : (K.value = { name: "", email: "", avatar_url: null, initials: "" }, (e = u.value) == null || e.clearData());
    }), ue(w, (s) => {
      s && Z.value && (console.log("[AIWorkspaceHeader] Session loss detected, showing modal"), v.value = !0);
    }), ue(() => a.currentWorkspaceId, (s) => {
      var e;
      if (s && E.value.length) {
        const r = E.value.find((l) => l.id.toString() === s.toString());
        r && ((e = u.value) == null || e.setCurrentWorkspace(r));
      }
    }), Se(async () => {
      Z.value && (await We(), await P()), await ys(), Qe(), As();
    });
    const vs = async (s) => {
      console.log("Login successful:", s), V.value = !1, await We(), i("login"), G.success("Welcome back!");
    }, ms = async () => {
      console.log("[AIWorkspaceHeader] Retrying session..."), await p() ? (v.value = !1, c(), G.success("Session restored successfully!")) : G.error("Failed to restore session. Please log in again.");
    }, ws = () => {
      console.log("[AIWorkspaceHeader] Opening login modal from session loss"), v.value = !1, V.value = !0;
    }, ks = () => {
      console.log("[AIWorkspaceHeader] Refreshing page due to session loss"), window.location.reload();
    }, _s = () => {
      M.value = 0, b(), G.success("Manual Pinia retry initiated.");
    }, ys = async () => {
      try {
        const s = await fetch("/version.json");
        if (s.ok) {
          const e = s.headers.get("content-type");
          if (e && e.includes("application/json"))
            try {
              const r = await s.json();
              console.log("Version data received:", r), z.value = r.shortCommitHash || "unknown", O.value = r.fullCommitHash || "unknown", console.log("✅ Loaded commit hash from version.json:", z.value);
              return;
            } catch {
              console.log("Failed to parse version.json, trying fallback methods...");
            }
        }
        console.log("🔄 version.json not available, trying automatic detection..."), await Ke();
      } catch (s) {
        console.log("Error loading version.json, trying automatic detection...", s), await Ke();
      }
    }, Je = async () => {
      try {
        let s = await Ye();
        if (s || (s = qe()), s) {
          const e = await Xe(s);
          e && e !== O.value && (console.log("🔄 New commit detected:", O.value, "→", e), O.value !== "unknown" && !re.value && (re.value = !0, B.value = e));
        }
      } catch (s) {
        console.log("Error checking for new commits:", s);
      }
    }, Ke = async () => {
      try {
        let s = await Ye();
        if (s || (s = qe()), s) {
          const $ = await Xe(s);
          if ($) {
            z.value = $.substring(0, 7), O.value = $, console.log("✅ Loaded commit hash from GitHub API:", z.value);
            return;
          }
        }
        const e = await Ss();
        if (e && e.version) {
          z.value = e.version, O.value = e.version, console.log("✅ Loaded version from package.json:", z.value);
          return;
        }
        const r = await bs();
        if (r) {
          z.value = r, O.value = r, console.log("✅ Loaded version from build info:", z.value);
          return;
        }
        const l = Date.now().toString(36);
        z.value = l.substring(0, 7), O.value = l, console.log("✅ Using timestamp-based version:", z.value);
      } catch (s) {
        console.warn("❌ All automatic detection methods failed:", s), z.value = "unknown", O.value = "unknown";
      }
    }, qe = () => {
      try {
        const s = window.location.hostname;
        if (s.includes("github.io")) {
          const e = s.split(".");
          if (e.length >= 3) {
            const r = e[0], l = window.location.pathname.split("/")[1] || "unknown";
            return console.log("✅ Detected GitHub Pages repo:", r, l), { owner: r, repo: l };
          }
        }
        return console.log("Could not detect repository from domain:", s), null;
      } catch (s) {
        return console.log("Error detecting repo from domain:", s), null;
      }
    }, Ye = async () => {
      try {
        const s = await fetch("/package.json");
        if (!s.ok)
          return console.log("package.json not found or not accessible"), null;
        const e = s.headers.get("content-type");
        if (!e || !e.includes("application/json"))
          return console.log("package.json returned non-JSON content (likely HTML), skipping GitHub API"), null;
        const r = await s.json();
        if (r.repository && r.repository.url) {
          const $ = r.repository.url.match(/github\.com\/([^\/]+)\/([^\/]+)/);
          if ($)
            return console.log("✅ Found GitHub repo info:", $[1], $[2].replace(".git", "")), { owner: $[1], repo: $[2].replace(".git", "") };
        }
        return console.log("No valid GitHub repository found in package.json"), null;
      } catch (s) {
        return console.log("Could not get repo info from package.json:", s), null;
      }
    }, Xe = async (s) => {
      try {
        const e = ["main", "master"];
        for (const r of e)
          try {
            const l = await fetch(`https://api.github.com/repos/${s.owner}/${s.repo}/commits/${r}`);
            if (l.ok)
              return (await l.json()).sha;
          } catch (l) {
            console.log(`Could not get commit from ${r} branch:`, l);
          }
      } catch (e) {
        console.log("Could not get commit from GitHub API:", e);
      }
      return null;
    }, Ss = async () => {
      try {
        const s = await fetch("/package.json");
        if (!s.ok)
          return console.log("package.json not found or not accessible"), null;
        const e = s.headers.get("content-type");
        return !e || !e.includes("application/json") ? (console.log("package.json returned non-JSON content (likely HTML), skipping"), null) : await s.json();
      } catch (s) {
        console.log("Could not get package.json:", s);
      }
      return null;
    }, bs = async () => {
      try {
        const s = ["/build-manifest.json", "/build-info.json", "/.next/build-manifest.json"];
        for (const e of s)
          try {
            const r = await fetch(e);
            if (r.ok) {
              const l = await r.json();
              if (l.version || l.commitHash || l.buildId)
                return l.version || l.commitHash || l.buildId;
            }
          } catch {
          }
      } catch (s) {
        console.log("Could not get build info:", s);
      }
      return null;
    }, Cs = async () => {
      try {
        if (O.value === "unknown") {
          G.warning("Version information not available");
          return;
        }
        await navigator.clipboard.writeText(O.value), G.success("Version information copied to clipboard!");
      } catch (s) {
        console.error("Failed to copy version info:", s), G.error("Failed to copy version info");
      }
    }, Qe = async () => {
      if (!N.value) {
        N.value = !0;
        try {
          const s = Date.now(), e = await fetch(`/version.json?t=${s}`);
          if (!e.ok)
            throw new Error("Failed to fetch version info");
          const r = e.headers.get("content-type");
          if (!r || !r.includes("application/json")) {
            console.warn("Version check skipped: version.json not properly configured");
            return;
          }
          const l = await e.json();
          B.value = l.fullCommitHash, O.value !== B.value && (re.value || (re.value = !0, console.log("Version mismatch detected:", {
            currentVersion: O.value,
            latestVersion: B.value,
            serverBuildTime: l.buildTime
          })));
        } catch (s) {
          console.error("Error checking for updates:", s);
        } finally {
          N.value = !1;
        }
      }
    }, As = () => {
      A.value = setInterval(() => {
        Qe(), Je();
      }, 30 * 1e3);
    }, Es = () => {
      console.log("User reloaded for update:", {
        currentVersion: O.value,
        latestVersion: B.value
      }), window.location.reload();
    }, Ze = () => {
      re.value = !1, console.log("Update alert dismissed:", {
        currentVersion: O.value,
        latestVersion: B.value
      });
    };
    return ts(() => {
      A.value && clearInterval(A.value);
    }), (s, e) => {
      const r = ie("el-icon"), l = ie("el-button"), $ = ie("el-tag"), se = ie("el-dropdown-item"), pe = ie("el-dropdown-menu"), $e = ie("el-dropdown"), Is = ie("el-dialog"), Ls = ie("el-alert");
      return y(), T(Ae, null, [
        n("header", Co, [
          !L.value && M.value < be || D(R) ? (y(), T("div", Ao, [
            e[10] || (e[10] = Ee('<div class="header-left" data-v-beca904a><div class="logo-section" data-v-beca904a><a href="/" class="logo" data-v-beca904a><div class="text-logo" data-v-beca904a><span class="logo-text" data-v-beca904a>AI Workspace</span></div></a></div></div>', 1)),
            n("div", Eo, [
              n("span", Io, [
                D(R) ? (y(), T("span", Lo, "Syncing authentication...")) : (y(), T("span", Vo, "Initializing..."))
              ])
            ])
          ])) : !L.value && M.value >= be ? (y(), T("div", Mo, [
            e[12] || (e[12] = Ee('<div class="header-left" data-v-beca904a><div class="logo-section" data-v-beca904a><a href="/" class="logo" data-v-beca904a><div class="text-logo" data-v-beca904a><span class="logo-text" data-v-beca904a>AI Workspace</span></div></a></div></div>', 1)),
            n("div", { class: "header-center" }, [
              e[11] || (e[11] = n("span", { class: "fallback-text" }, "Header Ready (Fallback Mode)", -1)),
              n("button", {
                onClick: _s,
                class: "retry-button"
              }, "Retry Pinia")
            ]),
            e[13] || (e[13] = Ee('<div class="header-right" data-v-beca904a><div class="user-profile" data-v-beca904a><div class="user-info" data-v-beca904a><span class="user-name" data-v-beca904a>User</span></div><div class="user-avatar" data-v-beca904a><span class="avatar-placeholder" data-v-beca904a>U</span></div></div></div>', 1))
          ])) : Z.value && !D(x) ? (y(), T("div", Wo, [
            e[16] || (e[16] = Ee('<div class="header-left" data-v-beca904a><div class="logo-section" data-v-beca904a><a href="/" class="logo" data-v-beca904a><div class="text-logo" data-v-beca904a><span class="logo-text" data-v-beca904a>AI Workspace</span></div></a></div></div>', 1)),
            n("div", $o, [
              n("span", Ro, [
                h(r, null, {
                  default: d(() => [
                    h(D(rs))
                  ]),
                  _: 1
                }),
                e[14] || (e[14] = q(" Session expired - Please log in again ", -1))
              ])
            ]),
            n("div", Uo, [
              h(l, {
                type: "primary",
                onClick: e[0] || (e[0] = (I) => V.value = !0)
              }, {
                default: d(() => [
                  h(r, null, {
                    default: d(() => [
                      h(D(He))
                    ]),
                    _: 1
                  }),
                  e[15] || (e[15] = q(" Log In ", -1))
                ]),
                _: 1
              })
            ])
          ])) : Z.value && D(x) ? (y(), T("div", Po, [
            n("div", xo, [
              n("div", To, [
                n("a", Do, [
                  s.customLogo ? (y(), T("img", {
                    key: 0,
                    src: s.customLogo,
                    alt: "AIWorkspace",
                    class: "logo-image"
                  }, null, 8, No)) : (y(), T("div", Ho, [...e[17] || (e[17] = [
                    n("span", { class: "logo-text" }, "AI Workspace", -1)
                  ])]))
                ])
              ])
            ]),
            s.showSecondaryNavigation ? (y(), T("div", Oo, [
              n("nav", Fo, [
                s.showWorkspaceSelector ? (y(), oe($e, {
                  key: 0,
                  onCommand: ds,
                  trigger: "hover"
                }, {
                  dropdown: d(() => [
                    h(pe, { class: "workspace-tree-dropdown" }, {
                      default: d(() => [
                        h(se, {
                          command: "all-workspace",
                          class: Re({ active: j.value })
                        }, {
                          default: d(() => [
                            n("a", zo, [
                              n("div", Bo, [
                                e[19] || (e[19] = n("span", { class: "workspace-icon" }, "🌐", -1)),
                                e[20] || (e[20] = n("span", null, "All workspace", -1)),
                                j.value ? (y(), oe($, {
                                  key: 0,
                                  size: "small",
                                  type: "success"
                                }, {
                                  default: d(() => [...e[18] || (e[18] = [
                                    q("Current", -1)
                                  ])]),
                                  _: 1
                                })) : Y("", !0)
                              ])
                            ])
                          ]),
                          _: 1
                        }, 8, ["class"]),
                        E.value.length > 0 ? (y(), oe(se, {
                          key: 0,
                          divided: "",
                          disabled: ""
                        })) : Y("", !0),
                        (y(!0), T(Ae, null, Ue(E.value, (I) => (y(), oe(se, {
                          key: I.id,
                          command: `workspace-${I.id}`
                        }, {
                          default: d(() => {
                            var ve;
                            return [
                              n("a", {
                                href: `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${I.id}/dashboard`,
                                class: "nav-link"
                              }, [
                                n("div", {
                                  class: "workspace-dropdown-item",
                                  style: $s({ paddingLeft: (I.level || 0) * 16 + "px" })
                                }, [
                                  n("span", Jo, J(I.children && I.children.length ? "📁" : "📄"), 1),
                                  n("span", null, J(I.title), 1),
                                  I.id === ((ve = ee.value) == null ? void 0 : ve.id) ? (y(), oe($, {
                                    key: 0,
                                    size: "small",
                                    type: "success"
                                  }, {
                                    default: d(() => [...e[21] || (e[21] = [
                                      q("Current", -1)
                                    ])]),
                                    _: 1
                                  })) : Y("", !0)
                                ], 4)
                              ], 8, Go)
                            ];
                          }),
                          _: 2
                        }, 1032, ["command"]))), 128)),
                        E.value.length === 0 ? (y(), oe(se, {
                          key: 1,
                          disabled: ""
                        }, {
                          default: d(() => [...e[22] || (e[22] = [
                            q(" No workspaces ", -1)
                          ])]),
                          _: 1
                        })) : Y("", !0)
                      ]),
                      _: 1
                    })
                  ]),
                  default: d(() => {
                    var I;
                    return [
                      n("span", jo, [
                        q(J(j.value ? "All workspace" : ((I = ee.value) == null ? void 0 : I.title) || "Select Workspace") + " ", 1),
                        h(r, { class: "nav-arrow" }, {
                          default: d(() => [
                            h(D(os))
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }),
                  _: 1
                })) : Y("", !0),
                s.showWorkspaceSelector ? (y(), T("span", Ko, "/")) : Y("", !0),
                s.showSecondaryNavigation ? (y(), oe($e, {
                  key: 2,
                  trigger: "hover"
                }, {
                  dropdown: d(() => [
                    h(pe, null, {
                      default: d(() => [
                        (y(!0), T(Ae, null, Ue(je.value, (I) => (y(), oe(se, {
                          key: I.label,
                          class: Re({ active: I.active })
                        }, {
                          default: d(() => [
                            n("a", {
                              href: fs(I),
                              class: "nav-link",
                              onClick: fe((ve) => ps(I), ["prevent"])
                            }, J(I.label), 9, Yo)
                          ]),
                          _: 2
                        }, 1032, ["class"]))), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  default: d(() => [
                    n("span", qo, [
                      q(J(cs.value) + " ", 1),
                      h(r, { class: "nav-arrow" }, {
                        default: d(() => [
                          h(D(os))
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })) : Y("", !0)
              ])
            ])) : Y("", !0),
            n("div", Xo, [
              h($e, {
                onCommand: Ce,
                trigger: "click",
                placement: "bottom-end"
              }, {
                dropdown: d(() => [
                  h(pe, null, {
                    default: d(() => [
                      h(se, null, {
                        default: d(() => [
                          n("a", {
                            href: "/profile",
                            class: "nav-link",
                            onClick: e[1] || (e[1] = fe((I) => Ce("profile"), ["prevent"]))
                          }, "Profile Settings")
                        ]),
                        _: 1
                      }),
                      s.showWorkspaceSelector ? (y(), oe(se, { key: 0 }, {
                        default: d(() => [
                          n("a", {
                            href: "#switch-workspace",
                            class: "nav-link",
                            onClick: e[2] || (e[2] = fe((I) => Ce("workspaces"), ["prevent"]))
                          }, "Switch Workspace")
                        ]),
                        _: 1
                      })) : Y("", !0),
                      h(se, {
                        onClick: Cs,
                        class: "version-item"
                      }, {
                        default: d(() => [
                          n("div", ta, [
                            e[23] || (e[23] = n("span", { class: "version-label" }, "Version:", -1)),
                            n("span", ra, J(z.value), 1),
                            h(l, {
                              size: "small",
                              type: "text",
                              onClick: fe(Je, ["stop"]),
                              class: "refresh-button",
                              loading: N.value
                            }, {
                              default: d(() => [
                                h(r, null, {
                                  default: d(() => [
                                    h(D(Ne))
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
                      h(se, { divided: "" }, {
                        default: d(() => [
                          n("a", {
                            href: "#signout",
                            class: "nav-link",
                            onClick: e[3] || (e[3] = fe((I) => Ce("logout"), ["prevent"]))
                          }, "Sign Out")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                default: d(() => [
                  n("div", Qo, [
                    n("div", Zo, [
                      n("span", ea, J(K.value.name), 1)
                    ]),
                    n("div", sa, [
                      K.value.avatar_url ? (y(), T("img", {
                        key: 0,
                        src: K.value.avatar_url,
                        alt: K.value.name
                      }, null, 8, oa)) : (y(), T("span", aa, J(K.value.initials), 1))
                    ])
                  ])
                ]),
                _: 1
              })
            ])
          ])) : (y(), T("div", na, [
            n("div", ia, [
              n("div", la, [
                n("a", ca, [
                  s.customLogo ? (y(), T("img", {
                    key: 0,
                    src: s.customLogo,
                    alt: "AIWorkspace",
                    class: "logo-image"
                  }, null, 8, ua)) : (y(), T("div", da, [...e[24] || (e[24] = [
                    n("span", { class: "logo-text" }, "AI Workspace", -1)
                  ])]))
                ])
              ])
            ]),
            e[26] || (e[26] = n("div", { class: "header-center" }, [
              n("span", { class: "welcome-text" }, "Welcome to AI Workspace")
            ], -1)),
            n("div", pa, [
              h(l, {
                type: "primary",
                size: "large",
                class: "login-button",
                onClick: e[4] || (e[4] = (I) => V.value = !0)
              }, {
                default: d(() => [
                  h(r, null, {
                    default: d(() => [
                      h(D(He))
                    ]),
                    _: 1
                  }),
                  e[25] || (e[25] = q(" Login / Signup ", -1))
                ]),
                _: 1
              })
            ])
          ])),
          Z.value && s.showWorkspaceSelector ? (y(), oe(Is, {
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
                  q("Cancel", -1)
                ])]),
                _: 1
              }),
              h(l, {
                type: "primary",
                onClick: gs
              }, {
                default: d(() => [...e[28] || (e[28] = [
                  q("Create New Workspace", -1)
                ])]),
                _: 1
              })
            ]),
            default: d(() => [
              n("div", fa, [
                (y(!0), T(Ae, null, Ue(S.value, (I) => {
                  var ve, es;
                  return y(), T("div", {
                    key: I.id,
                    class: Re(["workspace-item", { active: I.id === ((ve = ee.value) == null ? void 0 : ve.id) }]),
                    onClick: (Ia) => Ge(I)
                  }, [
                    n("div", ha, J(I.children && I.children.length ? "📁" : "📄"), 1),
                    n("div", va, [
                      n("h3", null, J(I.title), 1),
                      n("p", null, J(I.description), 1),
                      n("span", ma, J(I.hasAccess ? "Active" : "Inactive"), 1)
                    ]),
                    I.id === ((es = ee.value) == null ? void 0 : es.id) ? (y(), T("div", wa, [
                      h(r, null, {
                        default: d(() => [
                          h(D(Os))
                        ]),
                        _: 1
                      })
                    ])) : Y("", !0)
                  ], 10, ga);
                }), 128))
              ])
            ]),
            _: 1
          }, 8, ["modelValue"])) : Y("", !0),
          h(co, {
            modelValue: V.value,
            "onUpdate:modelValue": e[8] || (e[8] = (I) => V.value = I),
            onLoginSuccess: vs
          }, null, 8, ["modelValue"]),
          h(bo, {
            modelValue: v.value,
            "onUpdate:modelValue": e[9] || (e[9] = (I) => v.value = I),
            "session-loss-event": D(H),
            "can-retry-session": D(k) || !1,
            onRetry: ms,
            onLogin: ws,
            onRefresh: ks
          }, null, 8, ["modelValue", "session-loss-event", "can-retry-session"])
        ]),
        re.value ? (y(), oe(Ls, {
          key: 0,
          title: "New Version Available!",
          type: "warning",
          closable: !0,
          onClose: Ze,
          "show-icon": "",
          class: "update-alert"
        }, {
          default: d(() => [
            n("div", ka, [
              e[31] || (e[31] = n("p", null, "A new version of the application is available. Please reload to get the latest updates and features.", -1)),
              n("div", _a, [
                h(l, {
                  type: "primary",
                  size: "small",
                  onClick: Es
                }, {
                  default: d(() => [...e[29] || (e[29] = [
                    q(" Reload Now ", -1)
                  ])]),
                  _: 1
                }),
                h(l, {
                  size: "small",
                  onClick: Ze
                }, {
                  default: d(() => [...e[30] || (e[30] = [
                    q(" Dismiss ", -1)
                  ])]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        })) : Y("", !0)
      ], 64);
    };
  }
});
const Ga = /* @__PURE__ */ Me(ya, [["__scopeId", "data-v-beca904a"]]), Sa = { class: "auth-callback" }, ba = /* @__PURE__ */ le({
  __name: "AuthCallback",
  setup(t) {
    Se(async () => {
      console.log("[AuthCallback] Component mounted, starting callback processing..."), console.log("[AuthCallback] Current URL:", window.location.href), console.log("[AuthCallback] Current hash:", window.location.hash);
      try {
        await new Promise((m) => setTimeout(m, 500));
        const { data: a, error: i } = await Le.auth.getSession();
        if (i) {
          console.error("Error processing callback:", i), o();
          return;
        }
        if (a != null && a.session) {
          const m = a.session.user;
          console.log("OAuth login successful:", m.email), a.session.access_token && ye(ke, a.session.access_token), a.session.refresh_token && ye(_e, a.session.refresh_token), De();
          const _ = Ts();
          console.log("[callback] Post-login redirect URL:", _), console.log("[callback] Session storage redirect:", sessionStorage.getItem("post-login-redirect")), console.log("[callback] Local storage redirect:", localStorage.getItem("post-login-redirect"));
          const R = _ || "/";
          if (console.log("[callback] Final redirect URL:", R), R.startsWith("/")) {
            const x = window.location.origin, H = `${x}${R}`;
            console.log("[callback] redirecting to:", H, { hostname: window.location.hostname, origin: x }), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
              window.location.href = H;
            }, 100);
          } else
            console.log("[callback] redirecting to absolute URL:", R), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
              window.location.href = R;
            }, 100);
        } else
          o();
      } catch (a) {
        console.error("Error processing callback:", a), o();
      }
    });
    const o = () => {
      const i = window.location.href.replace("/auth/callback", "");
      window.location.href = i;
    };
    return (a, i) => (y(), T("div", Sa, [...i[0] || (i[0] = [
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
const Ja = /* @__PURE__ */ Me(ba, [["__scopeId", "data-v-acdf6325"]]), ge = class ge {
  constructor() {
    me(this, "validationCache", /* @__PURE__ */ new Map());
    me(this, "CACHE_DURATION", ls().validationCacheDuration);
  }
  // Helper function to get cookie value
  getCookieValue(o) {
    var m;
    if (typeof document > "u")
      return null;
    const i = `; ${document.cookie}`.split(`; ${o}=`);
    return i.length === 2 && ((m = i.pop()) == null ? void 0 : m.split(";").shift()) || null;
  }
  static getInstance() {
    return ge.instance || (ge.instance = new ge()), ge.instance;
  }
  /**
   * Validate current session with caching and improved reliability
   */
  async validateSession(o = !1) {
    var i, m;
    const a = "session_validation";
    if (!o) {
      const _ = this.validationCache.get(a);
      if (_ && Date.now() - _.timestamp < this.CACHE_DURATION)
        return console.log("[SessionValidator] Using cached validation result"), _.result;
    }
    console.log("[SessionValidator] Validating session...");
    try {
      const _ = this.getCookieValue("sb-access-token"), R = this.getCookieValue("sb-refresh-token");
      if (!_ || !R) {
        const f = {
          isValid: !1,
          needsLogin: !0,
          error: "No authentication tokens found",
          canRetry: !1
        };
        return this.cacheResult(a, f), f;
      }
      const x = await ae();
      let H = null, w = null;
      for (let f = 1; f <= 2; f++)
        try {
          const u = await x.auth.getSession();
          H = u.data.session, w = u.error;
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
      if (w) {
        console.warn("[SessionValidator] Error getting session:", w);
        const u = {
          isValid: !1,
          needsLogin: ((i = w.message) == null ? void 0 : i.includes("Invalid JWT")) || ((m = w.message) == null ? void 0 : m.includes("JWT expired")),
          error: `Session error: ${w.message}`,
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
      const U = {
        isValid: !0,
        needsLogin: !1,
        canRetry: !1
      };
      return this.cacheResult(a, U), U;
    } catch (_) {
      console.error("[SessionValidator] Error validating session:", _);
      const R = {
        isValid: !1,
        needsLogin: !1,
        // Don't force login on unexpected errors
        error: `Validation error: ${_}`,
        canRetry: !0
      };
      return this.cacheResult(a, R), R;
    }
  }
  /**
   * Attempt to restore session from tokens
   */
  async restoreSession() {
    console.log("[SessionValidator] Attempting to restore session...");
    try {
      const o = this.getCookieValue("sb-access-token"), a = this.getCookieValue("sb-refresh-token");
      if (!o || !a)
        return {
          isValid: !1,
          needsLogin: !0,
          error: "No tokens available for restoration",
          canRetry: !1
        };
      const i = await ae(), { data: m, error: _ } = await i.auth.setSession({
        access_token: o,
        refresh_token: a
      });
      return _ ? (console.warn("[SessionValidator] Error restoring session:", _), {
        isValid: !1,
        needsLogin: !0,
        error: `Restoration error: ${_.message}`,
        canRetry: !0
      }) : m.session && m.session.user ? (console.log("[SessionValidator] Session restored successfully"), this.clearCache(), {
        isValid: !0,
        needsLogin: !1,
        canRetry: !1
      }) : {
        isValid: !1,
        needsLogin: !0,
        error: "Session restoration failed",
        canRetry: !0
      };
    } catch (o) {
      return console.error("[SessionValidator] Error restoring session:", o), {
        isValid: !1,
        needsLogin: !0,
        error: `Restoration error: ${o}`,
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
  cacheResult(o, a) {
    this.validationCache.set(o, {
      result: a,
      timestamp: Date.now()
    });
  }
  /**
   * Get cached validation result
   */
  getCachedResult() {
    const o = this.validationCache.get("session_validation");
    return o && Date.now() - o.timestamp < this.CACHE_DURATION ? o.result : null;
  }
};
me(ge, "instance");
let Oe = ge;
const Fe = Oe.getInstance(), Ca = (t = !1) => Fe.validateSession(t), Aa = () => Fe.restoreSession(), Ea = () => Fe.clearCache();
async function Ka() {
  console.log("[SessionValidator] Initializing session validation...");
  let t = await Ca();
  return !t.isValid && t.canRetry && (console.log("[SessionValidator] Attempting session restoration..."), t = await Aa()), t;
}
function qa() {
  if (typeof window > "u")
    return () => {
    };
  const t = () => {
    console.log("[SessionValidator] Network restored, clearing cache for revalidation"), Ea();
  }, o = () => {
    console.log("[SessionValidator] Network lost, session validation may fail");
  };
  return window.addEventListener("online", t), window.addEventListener("offline", o), () => {
    window.removeEventListener("online", t), window.removeEventListener("offline", o);
  };
}
export {
  ke as ACCESS_COOKIE,
  Ga as AIWorkspaceHeader,
  Ja as AuthCallback,
  tt as LS_ACCESS_KEY,
  rt as LS_REFRESH_KEY,
  co as LoginModal,
  Ve as PackageError,
  _e as REFRESH_COOKIE,
  bo as SessionLossModal,
  Oe as SessionValidator,
  nt as buildOAuthRedirectUrl,
  Te as clearLocalStorageTokens,
  Ea as clearSessionCache,
  we as clearSessionCookie,
  Qa as configureSupabase,
  Qs as conservativeConfig,
  Fa as createSessionConfig,
  Ga as default,
  he as defaultSessionConfig,
  Ba as detectionScenarios,
  ns as developmentConfig,
  it as ensureCrossSubdomainCookies,
  Xs as fastDetectionConfig,
  ja as getConfigByPreset,
  lt as getCookie,
  Ts as getPostLoginBase,
  ls as getSessionConfig,
  ae as getSupabase,
  Ks as handleBundlingError,
  Za as handleDomainChangeAuth,
  xs as initializeCrossSubdomainAuth,
  Ka as initializeSessionValidation,
  is as productionConfig,
  et as restoreCrossSubdomainSession,
  Aa as restoreSession,
  xe as restoreSessionWithRetry,
  Ua as safeExecute,
  Pa as safeExecuteAsync,
  Ta as safeGetCookie,
  Na as safeGetLocalStorage,
  xa as safeImport,
  Da as safeSetCookie,
  Ha as safeSetLocalStorage,
  Oa as safeWindowOperation,
  Zs as sessionConfigPresets,
  Fe as sessionValidator,
  ye as setSessionCookie,
  st as setupAuthStateListener,
  qs as setupGlobalErrorHandler,
  ot as setupImmediateCrossSubdomainAuth,
  qa as setupNetworkAwareValidation,
  ut as setupUniversalCallback,
  Le as supabase,
  De as syncCookiesToLocalStorage,
  za as timingInfo,
  oo as useAuth,
  Ys as useEnhancedAuth,
  eo as useSessionMonitor,
  so as useWorkspaceStore,
  Ca as validateSession
};
