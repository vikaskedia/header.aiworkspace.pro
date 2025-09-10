var Ls = Object.defineProperty;
var Vs = (t, s, o) => s in t ? Ls(t, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[s] = o;
var me = (t, s, o) => (Vs(t, typeof s != "symbol" ? s + "" : s, o), o);
import { defineComponent as le, openBlock as y, createElementBlock as x, createElementVNode as n, ref as C, computed as X, onMounted as Se, onUnmounted as as, watch as ue, reactive as Ms, resolveComponent as ne, createBlock as oe, withCtx as d, toDisplayString as K, createVNode as v, unref as D, withModifiers as fe, createCommentVNode as Y, createTextVNode as J, createStaticVNode as Ae, normalizeClass as Ue, Fragment as Re, renderList as Pe, normalizeStyle as Ws } from "vue";
import { ElForm as $s, ElMessage as j, ElDialog as Us, ElIcon as Ee, ElButton as xe, ElProgress as Rs, ElMessageBox as es } from "element-plus";
import { i as Ps, g as ae, r as De, s as Ie } from "./supabase-7523f80a.mjs";
import { c as Xa, h as Qa, b as Za, d as et, a as st } from "./supabase-7523f80a.mjs";
import { clearSessionCookie as we, ACCESS_COOKIE as ke, REFRESH_COOKIE as _e, clearLocalStorageTokens as Te, setSessionCookie as ye, syncCookiesToLocalStorage as Ne, getPostLoginBase as xs } from "./utils/authRedirect.js";
import { LS_ACCESS_KEY as at, LS_REFRESH_KEY as tt, buildOAuthRedirectUrl as rt, ensureCrossSubdomainCookies as nt, getCookie as it } from "./utils/authRedirect.js";
import { defineStore as Ds } from "pinia";
import { setupUniversalCallback as ct } from "./utils/universalCallback.js";
/*! Element Plus Icons Vue v2.3.2 */
var Ts = /* @__PURE__ */ le({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(t) {
    return (s, o) => (y(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      n("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"
      })
    ]));
  }
}), ss = Ts, Ns = /* @__PURE__ */ le({
  name: "Check",
  __name: "check",
  setup(t) {
    return (s, o) => (y(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      n("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      })
    ]));
  }
}), Hs = Ns, Os = /* @__PURE__ */ le({
  name: "Lock",
  __name: "lock",
  setup(t) {
    return (s, o) => (y(), x("svg", {
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
}), os = Os, Fs = /* @__PURE__ */ le({
  name: "Message",
  __name: "message",
  setup(t) {
    return (s, o) => (y(), x("svg", {
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
}), zs = Fs, Bs = /* @__PURE__ */ le({
  name: "Refresh",
  __name: "refresh",
  setup(t) {
    return (s, o) => (y(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      n("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), He = Bs, js = /* @__PURE__ */ le({
  name: "User",
  __name: "user",
  setup(t) {
    return (s, o) => (y(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      n("path", {
        fill: "currentColor",
        d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"
      })
    ]));
  }
}), Oe = js, Gs = /* @__PURE__ */ le({
  name: "Warning",
  __name: "warning",
  setup(t) {
    return (s, o) => (y(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      n("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"
      })
    ]));
  }
}), ts = Gs;
class Le extends Error {
  constructor(o, i = {}, m) {
    super(o);
    me(this, "context");
    me(this, "originalError");
    this.name = "PackageError", this.context = i, this.originalError = m;
  }
}
function Ua(t, s = {}, o) {
  try {
    const i = t();
    return i instanceof Promise ? i.catch((m) => {
      if (console.warn("[ErrorHandler] Async operation failed:", {
        context: s,
        error: m.message,
        stack: m.stack
      }), o !== void 0)
        return o;
      throw new Le(
        `Async operation failed: ${m.message}`,
        s,
        m
      );
    }) : i;
  } catch (i) {
    if (console.warn("[ErrorHandler] Operation failed:", {
      context: s,
      error: i instanceof Error ? i.message : String(i),
      stack: i instanceof Error ? i.stack : void 0
    }), o !== void 0)
      return o;
    throw new Le(
      `Operation failed: ${i instanceof Error ? i.message : String(i)}`,
      s,
      i instanceof Error ? i : void 0
    );
  }
}
async function Ra(t, s = {}, o) {
  try {
    return await t();
  } catch (i) {
    if (console.warn("[ErrorHandler] Async operation failed:", {
      context: s,
      error: i instanceof Error ? i.message : String(i),
      stack: i instanceof Error ? i.stack : void 0
    }), o !== void 0)
      return o;
    throw new Le(
      `Async operation failed: ${i instanceof Error ? i.message : String(i)}`,
      s,
      i instanceof Error ? i : void 0
    );
  }
}
function Ks(t, s = {}) {
  const o = t.message.toLowerCase();
  if (o.includes("is not a function") || o.includes("cannot read property") || o.includes("undefined is not a function")) {
    console.warn("[ErrorHandler] Bundling error detected:", {
      context: s,
      error: t.message,
      suggestion: "This may be due to minification or import issues. The package will continue with fallback behavior."
    });
    return;
  }
  throw new Le(
    `Unexpected error: ${t.message}`,
    s,
    t
  );
}
async function Pa(t, s = {}, o) {
  try {
    return await t();
  } catch (i) {
    return console.warn("[ErrorHandler] Import failed:", {
      context: s,
      error: i instanceof Error ? i.message : String(i)
    }), o !== void 0 ? o : void 0;
  }
}
function xa(t) {
  var s;
  try {
    if (typeof document > "u")
      return null;
    const i = `; ${document.cookie}`.split(`; ${t}=`);
    return i.length === 2 && ((s = i.pop()) == null ? void 0 : s.split(";").shift()) || null;
  } catch (o) {
    return console.warn("[ErrorHandler] Cookie access failed:", {
      cookieName: t,
      error: o instanceof Error ? o.message : String(o)
    }), null;
  }
}
function Da(t, s, o = {}) {
  try {
    if (typeof document > "u")
      return !1;
    let i = `${t}=${s}`;
    return o.domain && (i += `; domain=${o.domain}`), o.path && (i += `; path=${o.path}`), o.secure && (i += "; secure"), o.sameSite && (i += `; samesite=${o.sameSite}`), o.maxAge && (i += `; max-age=${o.maxAge}`), document.cookie = i, !0;
  } catch (i) {
    return console.warn("[ErrorHandler] Cookie setting failed:", {
      cookieName: t,
      error: i instanceof Error ? i.message : String(i)
    }), !1;
  }
}
function Ta(t) {
  try {
    return typeof localStorage > "u" ? null : localStorage.getItem(t);
  } catch (s) {
    return console.warn("[ErrorHandler] localStorage get failed:", {
      key: t,
      error: s instanceof Error ? s.message : String(s)
    }), null;
  }
}
function Na(t, s) {
  try {
    return typeof localStorage > "u" ? !1 : (localStorage.setItem(t, s), !0);
  } catch (o) {
    return console.warn("[ErrorHandler] localStorage set failed:", {
      key: t,
      error: o instanceof Error ? o.message : String(o)
    }), !1;
  }
}
function Ha(t, s) {
  try {
    return typeof window > "u" ? s : t(window);
  } catch (o) {
    return console.warn("[ErrorHandler] Window operation failed:", {
      error: o instanceof Error ? o.message : String(o)
    }), s;
  }
}
function qs() {
  typeof window > "u" || (window.addEventListener("unhandledrejection", (t) => {
    const s = t.reason;
    if (s instanceof Error) {
      const o = s.message.toLowerCase();
      if (o.includes("is not a function") || o.includes("cannot read property") || o.includes("undefined is not a function")) {
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
      const o = s.message.toLowerCase();
      if (o.includes("is not a function") || o.includes("cannot read property") || o.includes("undefined is not a function")) {
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
typeof window < "u" && qs();
function Js() {
  const t = C({
    user: null,
    isAuthenticated: !1,
    isLoading: !0,
    error: null
  }), s = C(null), o = X(() => t.value.isAuthenticated), i = X(() => t.value.user), m = X(() => t.value.isLoading), _ = async () => {
    var k, p, c, U, f, u, L, M, b, g, V, h, S, te, q, O, B, ie, G, A, N;
    try {
      console.log("[auth][enhanced] Starting loadUserInfo..."), console.log("[auth][enhanced] Ensuring cross-subdomain cookie synchronization...");
      const F = "sb-access-token", E = "sb-refresh-token", z = (W) => {
        try {
          const R = location.hostname;
          if (R === "localhost" || /^\d+\.\d+\.\d+\.\d+$/.test(R)) {
            console.log("[auth][enhanced] Skipping cookie sync for localhost");
            return;
          }
          const Z = "aiworkspace.pro";
          if (!R.endsWith(`.${Z}`) && R !== Z) {
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
        } catch (R) {
          console.warn("[auth][enhanced] Error in cookie sync:", R);
        }
      };
      z([F, E]), await new Promise((W) => setTimeout(W, 50)), z([F, E]), await new Promise((W) => setTimeout(W, 50));
      let Q = null;
      try {
        const R = await (await ae()).auth.getSession();
        Q = (k = R == null ? void 0 : R.data) == null ? void 0 : k.session;
      } catch (W) {
        console.warn("[auth][enhanced] Error getting Supabase session:", W);
      }
      if (Q && Q.user) {
        console.log("[auth][enhanced] Active Supabase session found");
        const W = Q.user, R = {
          id: W.id,
          name: ((p = W.user_metadata) == null ? void 0 : p.name) || ((c = W.user_metadata) == null ? void 0 : c.user_name) || ((U = W.user_metadata) == null ? void 0 : U.full_name) || ((f = W.email) == null ? void 0 : f.split("@")[0]) || "User",
          email: W.email,
          avatar_url: ((u = W.user_metadata) == null ? void 0 : u.avatar_url) || null,
          user_metadata: W.user_metadata
        };
        return t.value = {
          user: R,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, s.value = {
          user: R,
          access_token: Q.access_token,
          refresh_token: Q.refresh_token
        }, { user: R, session: s.value, error: null };
      }
      console.log("[auth][enhanced] No active session, attempting to restore from cookies...");
      const re = await De();
      if (re.success && re.session) {
        console.log("[auth][enhanced] Session restored successfully from cookies");
        const W = re.session.user, R = {
          id: W.id,
          name: ((L = W.user_metadata) == null ? void 0 : L.name) || ((M = W.user_metadata) == null ? void 0 : M.user_name) || ((b = W.user_metadata) == null ? void 0 : b.full_name) || ((g = W.email) == null ? void 0 : g.split("@")[0]) || "User",
          email: W.email,
          avatar_url: ((V = W.user_metadata) == null ? void 0 : V.avatar_url) || null,
          user_metadata: W.user_metadata
        };
        return t.value = {
          user: R,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, s.value = re.session, { user: R, session: s.value, error: null };
      } else {
        console.log("[auth][enhanced] Failed to restore session:", re.error), console.log("[auth][enhanced] Retrying session restoration with extended delay..."), await new Promise((R) => setTimeout(R, 500)), z([F, E]);
        const W = await De();
        if (W.success && W.session) {
          console.log("[auth][enhanced] Session restored on retry");
          const R = W.session.user, Z = {
            id: R.id,
            name: ((h = R.user_metadata) == null ? void 0 : h.name) || ((S = R.user_metadata) == null ? void 0 : S.user_name) || ((te = R.user_metadata) == null ? void 0 : te.full_name) || ((q = R.email) == null ? void 0 : q.split("@")[0]) || "User",
            email: R.email,
            avatar_url: ((O = R.user_metadata) == null ? void 0 : O.avatar_url) || null,
            user_metadata: R.user_metadata
          };
          return t.value = {
            user: Z,
            isAuthenticated: !0,
            isLoading: !1,
            error: null
          }, s.value = W.session, { user: Z, session: s.value, error: null };
        }
      }
    } catch (F) {
      console.error("Error getting Supabase session:", F), F instanceof Error && Ks(F, {
        component: "useEnhancedAuth",
        function: "loadUserInfo",
        operation: "session_validation"
      });
      try {
        const E = await De();
        if (E.success && E.session) {
          console.log("[auth][enhanced] Session restored after error");
          const z = E.session.user, Q = {
            id: z.id,
            name: ((B = z.user_metadata) == null ? void 0 : B.name) || ((ie = z.user_metadata) == null ? void 0 : ie.user_name) || ((G = z.user_metadata) == null ? void 0 : G.full_name) || ((A = z.email) == null ? void 0 : A.split("@")[0]) || "User",
            email: z.email,
            avatar_url: ((N = z.user_metadata) == null ? void 0 : N.avatar_url) || null,
            user_metadata: z.user_metadata
          };
          return t.value = {
            user: Q,
            isAuthenticated: !0,
            isLoading: !1,
            error: null
          }, s.value = E.session, { user: Q, session: s.value, error: null };
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
    }, s.value = null, { user: null, session: null, error: "No valid session found" };
  }, $ = async () => {
    try {
      await (await ae()).auth.signOut(), we(ke), we(_e), Te(), t.value = {
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
  }, P = async (k, p) => {
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
        const V = b.session.user, h = {
          id: V.id,
          name: ((c = V.user_metadata) == null ? void 0 : c.name) || ((U = V.user_metadata) == null ? void 0 : U.user_name) || ((f = V.user_metadata) == null ? void 0 : f.full_name) || ((u = V.email) == null ? void 0 : u.split("@")[0]) || "User",
          email: V.email,
          avatar_url: ((L = V.user_metadata) == null ? void 0 : L.avatar_url) || null,
          user_metadata: V.user_metadata
        };
        return t.value = {
          user: h,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, s.value = {
          user: h,
          access_token: b.session.access_token,
          refresh_token: b.session.refresh_token
        }, { user: h, session: s.value, error: null };
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
        const h = g.session.user, S = {
          id: h.id,
          name: ((U = h.user_metadata) == null ? void 0 : U.name) || ((f = h.user_metadata) == null ? void 0 : f.user_name) || ((u = h.user_metadata) == null ? void 0 : u.full_name) || ((L = h.email) == null ? void 0 : L.split("@")[0]) || "User",
          email: h.email,
          avatar_url: ((M = h.user_metadata) == null ? void 0 : M.avatar_url) || null,
          user_metadata: h.user_metadata
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
  }, w = async () => {
    await _();
  };
  return Se(async () => {
    await Ps(), await w();
  }), {
    // State
    authState: t,
    currentSession: s,
    // Computed
    isAuthenticated: o,
    currentUser: i,
    isLoading: m,
    // Methods
    loadUserInfo: _,
    logout: $,
    signIn: P,
    signUp: H,
    checkAuth: w
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
}, Ys = {
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
}, Xs = {
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
}, rs = {
  ...ve,
  normalCheckInterval: 1e4,
  // 10 seconds - faster for testing
  fastCheckInterval: 2e3,
  // 2 seconds - very fast for testing
  fastMonitoringDuration: 3e4,
  // 30 seconds - shorter for testing
  validationCacheDuration: 1e3
  // 1 second cache for testing
}, ns = {
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
function is() {
  switch ("production") {
    case "production":
      return ns;
    case "development":
      return rs;
    default:
      return ve;
  }
}
function Oa(t) {
  return {
    ...ve,
    ...t
  };
}
const Qs = {
  default: ve,
  fast: Ys,
  conservative: Xs,
  development: rs,
  production: ns
};
function Fa(t) {
  return Qs[t];
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
function Zs(t) {
  const s = C(!0), o = C(null), i = C(!1), m = C(!1), _ = C(null), $ = C(null), P = C(null), H = { ...is(), ...t }, w = H.normalCheckInterval, k = H.fastCheckInterval, p = H.fastMonitoringDuration, c = H.maxRetryAttempts, U = H.retryDelay, f = X(() => !s.value && o.value !== null), u = X(
    () => {
      var A, N;
      return ((A = o.value) == null ? void 0 : A.canRetry) && ((N = o.value) == null ? void 0 : N.type) !== "manual_check_failed";
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
      const z = await ae();
      let Q = null, re = null;
      for (let ee = 1; ee <= 2; ee++)
        try {
          const ce = await z.auth.getSession();
          Q = ce.data.session, re = ce.error;
          break;
        } catch (ce) {
          if (console.warn(`[SessionMonitor] Network error on attempt ${ee}:`, ce), ee === 2)
            return console.log("[SessionMonitor] Network issues detected, maintaining current session state"), s.value;
          await new Promise((de) => setTimeout(de, 1e3));
        }
      if (re)
        return console.warn("[SessionMonitor] Error getting session:", re), (A = re.message) != null && A.includes("Invalid JWT") || (N = re.message) != null && N.includes("JWT expired") ? !1 : s.value;
      if (!Q || !Q.user)
        return console.log("[SessionMonitor] No valid session found"), !1;
      const W = /* @__PURE__ */ new Date(), R = new Date(Q.expires_at * 1e3), Z = 5 * 60 * 1e3;
      return W >= new Date(R.getTime() - Z) ? (console.log("[SessionMonitor] Session is close to expiry or expired"), !1) : (console.log("[SessionMonitor] Session is valid"), _.value = /* @__PURE__ */ new Date(), !0);
    } catch (F) {
      return console.error("[SessionMonitor] Error validating session:", F), s.value;
    }
  }, b = async () => {
    try {
      console.log("[SessionMonitor] Attempting to restore session...");
      const A = L("sb-access-token"), N = L("sb-refresh-token");
      if (!A || !N)
        return console.log("[SessionMonitor] No tokens available for restoration"), !1;
      const F = await ae(), { data: E, error: z } = await F.auth.setSession({
        access_token: A,
        refresh_token: N
      });
      return z ? (console.warn("[SessionMonitor] Error restoring session:", z), !1) : E.session && E.session.user ? (console.log("[SessionMonitor] Session restored successfully"), _.value = /* @__PURE__ */ new Date(), !0) : !1;
    } catch (A) {
      return console.error("[SessionMonitor] Error restoring session:", A), !1;
    }
  }, g = (A, N, F = !0) => {
    console.warn("[SessionMonitor] Session loss detected:", { type: A, message: N }), s.value = !1, o.value = {
      type: A,
      message: N,
      timestamp: /* @__PURE__ */ new Date(),
      canRetry: F
    };
  }, V = async () => {
    console.log("[SessionMonitor] Retrying session validation...");
    for (let A = 1; A <= c; A++) {
      if (console.log(`[SessionMonitor] Retry attempt ${A}/${c}`), A > 1 && await new Promise((E) => setTimeout(E, U)), await b() && await M())
        return console.log("[SessionMonitor] Session restored and validated successfully"), s.value = !0, o.value = null, !0;
      if (await M())
        return console.log("[SessionMonitor] Session validated successfully on retry"), s.value = !0, o.value = null, !0;
    }
    return console.log("[SessionMonitor] All retry attempts failed"), !1;
  }, h = () => {
    console.log("[SessionMonitor] Clearing session loss state"), s.value = !0, o.value = null;
  }, S = () => {
    if (i.value) {
      console.log("[SessionMonitor] Already monitoring, skipping start");
      return;
    }
    console.log("[SessionMonitor] Starting session monitoring..."), i.value = !0, setTimeout(async () => {
      console.log("[SessionMonitor] Performing initial session validation..."), await M() ? console.log("[SessionMonitor] Initial validation successful") : (console.log("[SessionMonitor] Initial validation failed, but waiting for confirmation..."), setTimeout(async () => {
        await M() || g("session_expired", "Your session has expired. Please log in again.", !0);
      }, 3e3));
    }, 2e3), $.value = setInterval(async () => {
      console.log("[SessionMonitor] Periodic session check...");
      const A = await M();
      !A && s.value ? (console.log("[SessionMonitor] Session validation failed, performing confirmation check..."), setTimeout(async () => {
        await M() || g("session_expired", "Your session has expired. Please log in again.", !0);
      }, 2e3)) : A && !s.value && (console.log("[SessionMonitor] Session recovered"), h());
    }, w);
  }, te = () => {
    if (m.value) {
      console.log("[SessionMonitor] Fast monitoring already active");
      return;
    }
    console.log("[SessionMonitor] Starting fast monitoring (5s intervals)..."), m.value = !0, P.value && clearInterval(P.value), P.value = setInterval(async () => {
      console.log("[SessionMonitor] Fast session check...");
      const A = await M();
      !A && s.value ? (console.log("[SessionMonitor] Fast monitoring detected potential session loss, confirming..."), setTimeout(async () => {
        await M() || (g("session_expired", "Your session has expired. Please log in again.", !0), q());
      }, 1e3)) : A && !s.value && (console.log("[SessionMonitor] Session recovered"), h(), q());
    }, k), setTimeout(() => {
      m.value && (console.log(`[SessionMonitor] Auto-stopping fast monitoring after ${p / 1e3} seconds`), q());
    }, p);
  }, q = () => {
    m.value && (console.log("[SessionMonitor] Stopping fast monitoring..."), m.value = !1, P.value && (clearInterval(P.value), P.value = null));
  }, O = () => {
    i.value && (console.log("[SessionMonitor] Stopping session monitoring..."), i.value = !1, $.value && (clearInterval($.value), $.value = null), q());
  }, B = async () => {
    console.log("[SessionMonitor] Manual session check requested");
    const A = await M();
    return !A && !await b() ? (g("manual_check_failed", "Session validation failed. Please log in again.", !1), !1) : A;
  }, ie = () => {
    console.log("[SessionMonitor] Network error detected, but not triggering immediate session loss"), s.value || g("network_error", "Network connection lost. Please check your internet connection and try again.", !0);
  }, G = () => {
    if (typeof window > "u")
      return;
    const A = () => {
      var E;
      console.log("[SessionMonitor] Network connection restored"), f.value && ((E = o.value) == null ? void 0 : E.type) === "network_error" && setTimeout(() => V(), 1e3);
    }, N = () => {
      console.log("[SessionMonitor] Network connection lost"), ie();
    }, F = (E) => {
      console.log("[SessionMonitor] Logout detected, starting fast monitoring for immediate detection"), te();
    };
    return window.addEventListener("online", A), window.addEventListener("offline", N), window.addEventListener("session-logout-detected", F), () => {
      window.removeEventListener("online", A), window.removeEventListener("offline", N), window.removeEventListener("session-logout-detected", F);
    };
  };
  return Se(() => {
    console.log("[SessionMonitor] Mounted, setting up monitoring"), S(), G();
  }), as(() => {
    console.log("[SessionMonitor] Unmounted, cleaning up"), O();
  }), {
    // State
    isSessionValid: s,
    sessionLossEvent: o,
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
    clearSessionLoss: h,
    startMonitoring: S,
    stopMonitoring: O,
    startFastMonitoring: te,
    stopFastMonitoring: q,
    checkSession: B,
    handleNetworkError: ie
  };
}
const eo = Ds("workspace", () => {
  const t = C(null), s = C([]), o = C(null), i = (w) => {
    t.value = w, localStorage.setItem("current_workspace", JSON.stringify(w));
  }, m = (w) => {
    s.value = w, localStorage.setItem("available_workspaces", JSON.stringify(w));
  };
  return {
    currentWorkspace: t,
    workspaces: s,
    user: o,
    setCurrentWorkspace: i,
    setWorkspaces: m,
    setUser: (w) => {
      o.value = w, localStorage.setItem("user_info", JSON.stringify(w));
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
          s.value = JSON.parse(k);
        } catch (c) {
          console.error("Error loading persisted workspaces:", c);
        }
      const p = localStorage.getItem("user_info");
      if (p)
        try {
          o.value = JSON.parse(p);
        } catch (c) {
          console.error("Error loading persisted user:", c);
        }
    },
    clearData: () => {
      t.value = null, s.value = [], o.value = null, localStorage.removeItem("current_workspace"), localStorage.removeItem("available_workspaces"), localStorage.removeItem("user_info");
    },
    loadWorkspaces: async (w = !1) => {
      try {
        const { data: { user: k } } = await Ie.auth.getUser();
        if (!k)
          return [];
        let p = Ie.from("workspaces").select(`
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
          let g = Ie.from("workspaces").select("id, title, description, parent_workspace_id, created_by, archived, created_at").in("id", u);
          w || (g = g.eq("archived", !1));
          const { data: V, error: h } = await g;
          if (h)
            throw h;
          L = V || [];
        }
        const b = [...c || [], ...L].map((g) => {
          var V, h, S;
          return {
            id: g.id,
            title: g.title,
            description: g.description || "No description",
            parent_workspace_id: g.parent_workspace_id,
            created_by: g.created_by,
            archived: g.archived,
            created_at: g.created_at,
            latest_activity: ((h = (V = g.workspace_activities) == null ? void 0 : V[0]) == null ? void 0 : h.updated_at) || g.created_at,
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
function so() {
  const t = C({
    user: null,
    isAuthenticated: !1,
    isLoading: !0,
    error: null
  }), s = C(window.location.href), o = async () => {
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
      }, b.access_token && ye(ke, b.access_token), b.refresh_token && ye(_e, b.refresh_token), Ne()) : t.value = {
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
      return c ? { success: !1, error: c.message } : (await o(), sessionStorage.setItem("post-login-redirect", s.value), { success: !0 });
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
      return f ? { success: !1, error: f.message } : U.user && !U.user.email_confirmed_at ? { success: !0, needsConfirmation: !0 } : (p = U.session) != null && p.user ? (await o(), sessionStorage.setItem("post-login-redirect", s.value), { success: !0 }) : { success: !1, error: "No session created" };
    } catch (c) {
      return console.error("Signup error:", c), { success: !1, error: c.message || "Signup failed" };
    }
  }, _ = async (w) => {
    try {
      const k = `${window.location.origin}/auth/callback`;
      console.log("[OAuth] Starting login with provider:", w), console.log("[OAuth] Redirect URL:", k), console.log("[OAuth] Current URL:", s.value), console.log("[OAuth] Current origin:", window.location.origin);
      const p = await ae(), { error: c } = await p.auth.signInWithOAuth({
        provider: w,
        options: {
          redirectTo: k,
          queryParams: {
            redirect_origin: s.value
          }
        }
      });
      if (c)
        return console.error("[OAuth] Error:", c), { success: !1, error: c.message };
      const U = s.value || window.location.href;
      return sessionStorage.setItem("post-login-redirect", U), localStorage.setItem("post-login-redirect", U), console.log("[OAuth] Stored redirect URL:", U), console.log("[OAuth] Current URL value:", s.value), console.log("[OAuth] Window location href:", window.location.href), { success: !0 };
    } catch (k) {
      return console.error("OAuth login error:", k), { success: !1, error: k.message || "OAuth login failed" };
    }
  }, $ = async () => {
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
  }, P = async (w) => {
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
            p != null && p.user && o();
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
            p != null && p.access_token && ye(ke, p.access_token), p != null && p.refresh_token && ye(_e, p.refresh_token), Ne();
            break;
          case "USER_UPDATED":
            p != null && p.user && o();
            break;
        }
      });
    } catch (w) {
      console.warn("Failed to setup auth listener:", w);
    }
  };
  return Se(async () => {
    H(), await o();
  }), ue(() => window.location.href, (w) => {
    s.value = w;
  }), {
    authState: X(() => t.value),
    isAuthenticated: X(() => t.value.isAuthenticated),
    user: X(() => t.value.user),
    isLoading: X(() => t.value.isLoading),
    checkAuthStatus: o,
    loginWithEmail: i,
    signupWithEmail: m,
    loginWithProvider: _,
    logout: $,
    resetPassword: P,
    currentUrl: X(() => s.value)
  };
}
const oo = { class: "login-container" }, ao = { class: "logo-section" }, to = { class: "login-buttons" }, ro = {
  key: 0,
  class: "forgot-password"
}, no = { class: "signup-link" }, io = /* @__PURE__ */ le({
  __name: "LoginModal",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue", "login-success"],
  setup(t, { emit: s }) {
    const o = t, i = s, m = X({
      get: () => o.modelValue,
      set: (h) => i("update:modelValue", h)
    }), _ = C(!1), $ = C(!1), P = C(), { loginWithEmail: H, signupWithEmail: w, loginWithProvider: k, resetPassword: p } = so(), c = Ms({
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
            validator: (h, S, te) => {
              S !== c.password ? te(new Error("Passwords do not match")) : te();
            },
            trigger: "blur"
          }
        ]
      } : {}
    })), f = () => {
      var h;
      _.value = !_.value, c.email = "", c.password = "", c.confirmPassword = "", (h = P.value) == null || h.clearValidate();
    }, u = () => {
      var h;
      m.value = !1, c.email = "", c.password = "", c.confirmPassword = "", _.value = !1, (h = P.value) == null || h.clearValidate();
    }, L = async () => {
      if (P.value)
        try {
          await P.value.validate(), $.value = !0, _.value ? await b() : await M();
        } catch (h) {
          console.error("Form validation failed:", h);
        } finally {
          $.value = !1;
        }
    }, M = async () => {
      const h = await H(c.email, c.password);
      h.success ? (j.success("Login successful"), i("login-success", { email: c.email }), u()) : j.error("Login failed: " + h.error);
    }, b = async () => {
      const h = await w(c.email, c.password);
      h.success ? h.needsConfirmation ? j.success("Please check your email to confirm your account") : (j.success("Account created successfully"), i("login-success", { email: c.email }), u()) : j.error("Signup failed: " + h.error);
    }, g = async (h) => {
      const S = await k(h);
      S.success ? j.success("Redirecting to login provider...") : j.error("Login failed: " + S.error);
    }, V = async () => {
      if (!c.email) {
        j.warning("Please enter your email address first");
        return;
      }
      const h = await p(c.email);
      h.success ? j.success("Password reset email sent! Please check your inbox.") : j.error("Failed to send reset email: " + h.error);
    };
    return (h, S) => {
      const te = ne("el-icon"), q = ne("el-input"), O = ne("el-form-item"), B = ne("el-button"), ie = ne("el-dialog");
      return y(), oe(ie, {
        modelValue: m.value,
        "onUpdate:modelValue": S[6] || (S[6] = (G) => m.value = G),
        title: "",
        width: "500px",
        "close-on-click-modal": !1,
        "close-on-press-escape": !0,
        "show-close": !0,
        class: "login-modal",
        onClose: u
      }, {
        default: d(() => [
          n("div", oo, [
            n("div", ao, [
              n("h2", null, K(_.value ? "Create Account" : "Welcome Back"), 1),
              n("p", null, K(_.value ? "Sign up to get started with your account" : "Sign in to continue to your account"), 1)
            ]),
            v(D($s), {
              model: c,
              rules: U.value,
              ref_key: "formRef",
              ref: P,
              class: "login-form",
              onSubmit: fe(L, ["prevent"])
            }, {
              default: d(() => [
                v(O, { prop: "email" }, {
                  default: d(() => [
                    v(q, {
                      modelValue: c.email,
                      "onUpdate:modelValue": S[0] || (S[0] = (G) => c.email = G),
                      placeholder: "Email",
                      type: "email",
                      size: "large",
                      class: "form-input"
                    }, {
                      prefix: d(() => [
                        v(te, null, {
                          default: d(() => [
                            v(D(zs))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                v(O, { prop: "password" }, {
                  default: d(() => [
                    v(q, {
                      modelValue: c.password,
                      "onUpdate:modelValue": S[1] || (S[1] = (G) => c.password = G),
                      placeholder: "Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: d(() => [
                        v(te, null, {
                          default: d(() => [
                            v(D(os))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                _.value ? (y(), oe(O, {
                  key: 0,
                  prop: "confirmPassword"
                }, {
                  default: d(() => [
                    v(q, {
                      modelValue: c.confirmPassword,
                      "onUpdate:modelValue": S[2] || (S[2] = (G) => c.confirmPassword = G),
                      placeholder: "Confirm Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: d(() => [
                        v(te, null, {
                          default: d(() => [
                            v(D(os))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                })) : Y("", !0),
                v(O, null, {
                  default: d(() => [
                    v(B, {
                      type: "primary",
                      class: "submit-button",
                      loading: $.value,
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
            S[10] || (S[10] = n("div", { class: "divider" }, [
              n("span", null, "Or continue with")
            ], -1)),
            n("div", to, [
              v(B, {
                class: "login-button google",
                onClick: S[3] || (S[3] = (G) => g("google")),
                size: "large"
              }, {
                default: d(() => [...S[7] || (S[7] = [
                  n("span", { class: "social-icon" }, "G", -1),
                  J(" Google ", -1)
                ])]),
                _: 1
              }),
              v(B, {
                class: "login-button github",
                onClick: S[4] || (S[4] = (G) => g("github")),
                size: "large"
              }, {
                default: d(() => [...S[8] || (S[8] = [
                  n("span", { class: "social-icon" }, "⚡", -1),
                  J(" GitHub ", -1)
                ])]),
                _: 1
              }),
              v(B, {
                class: "login-button twitter",
                onClick: S[5] || (S[5] = (G) => g("twitter")),
                size: "large"
              }, {
                default: d(() => [...S[9] || (S[9] = [
                  n("span", { class: "social-icon" }, "X", -1),
                  J(" X (Twitter) ", -1)
                ])]),
                _: 1
              })
            ]),
            S[11] || (S[11] = n("div", { class: "terms" }, " By continuing, you agree to AI Workspace's Terms of Service and Privacy Policy ", -1)),
            _.value ? Y("", !0) : (y(), x("div", ro, [
              n("a", {
                href: "#",
                onClick: fe(V, ["prevent"])
              }, "Forgot Password?")
            ])),
            n("div", no, [
              J(K(_.value ? "Already have an account?" : "Don't have an account?") + " ", 1),
              n("a", {
                href: "#",
                onClick: fe(f, ["prevent"])
              }, K(_.value ? "Sign in" : "Sign up"), 1)
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
const Ve = (t, s) => {
  const o = t.__vccOpts || t;
  for (const [i, m] of s)
    o[i] = m;
  return o;
}, lo = /* @__PURE__ */ Ve(io, [["__scopeId", "data-v-684a3f28"]]), co = { class: "session-loss-content" }, uo = { class: "session-loss-icon" }, po = { class: "session-loss-message" }, fo = {
  key: 0,
  class: "session-loss-details"
}, go = { class: "detail-item" }, vo = { class: "detail-value" }, ho = { class: "detail-item" }, mo = { class: "detail-value" }, wo = { class: "session-loss-actions" }, ko = {
  key: 0,
  class: "retry-status"
}, _o = { class: "retry-message" }, yo = /* @__PURE__ */ le({
  __name: "SessionLossModal",
  props: {
    modelValue: { type: Boolean },
    sessionLossEvent: {},
    canRetrySession: { type: Boolean }
  },
  emits: ["update:modelValue", "retry", "login", "refresh"],
  setup(t, { emit: s }) {
    const o = t, i = s, m = C(!1), _ = C(0), $ = C(void 0), P = C(""), H = X({
      get: () => o.modelValue,
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
      m.value = !0, _.value = 0, $.value = void 0, P.value = "Attempting to restore session...";
      const f = setInterval(() => {
        _.value < 90 && (_.value += Math.random() * 20);
      }, 200);
      try {
        i("retry"), await new Promise((u) => setTimeout(u, 2e3)), _.value = 100, $.value = "success", P.value = "Session restored successfully!", setTimeout(() => {
          H.value = !1;
        }, 1e3);
      } catch {
        _.value = 100, $.value = "exception", P.value = "Failed to restore session. Please log in again.", j.error("Session restoration failed");
      } finally {
        clearInterval(f), setTimeout(() => {
          m.value = !1, _.value = 0, $.value = void 0, P.value = "";
        }, 3e3);
      }
    }, c = () => {
      i("login"), H.value = !1;
    }, U = () => {
      i("refresh"), window.location.reload();
    };
    return ue(() => o.sessionLossEvent, (f) => {
      f && (m.value = !1, _.value = 0, $.value = void 0, P.value = "");
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
          n("div", co, [
            n("div", uo, [
              v(D(Ee), {
                size: "48",
                color: "#f56c6c"
              }, {
                default: d(() => [
                  v(D(ts))
                ]),
                _: 1
              })
            ]),
            n("div", po, [
              u[3] || (u[3] = n("h3", null, "Your session has expired", -1)),
              n("p", null, K(((L = f.sessionLossEvent) == null ? void 0 : L.message) || "Please log in again to continue using the application."), 1),
              f.sessionLossEvent ? (y(), x("div", fo, [
                n("div", go, [
                  u[1] || (u[1] = n("span", { class: "detail-label" }, "Issue:", -1)),
                  n("span", vo, K(w(f.sessionLossEvent.type)), 1)
                ]),
                n("div", ho, [
                  u[2] || (u[2] = n("span", { class: "detail-label" }, "Time:", -1)),
                  n("span", mo, K(k(f.sessionLossEvent.timestamp)), 1)
                ])
              ])) : Y("", !0)
            ]),
            n("div", wo, [
              f.canRetrySession && !m.value ? (y(), oe(D(xe), {
                key: 0,
                type: "primary",
                onClick: p,
                loading: m.value
              }, {
                default: d(() => [
                  v(D(Ee), null, {
                    default: d(() => [
                      v(D(He))
                    ]),
                    _: 1
                  }),
                  u[4] || (u[4] = J(" Try Again ", -1))
                ]),
                _: 1
              }, 8, ["loading"])) : Y("", !0),
              v(D(xe), {
                type: "primary",
                onClick: c,
                disabled: m.value
              }, {
                default: d(() => [
                  v(D(Ee), null, {
                    default: d(() => [
                      v(D(Oe))
                    ]),
                    _: 1
                  }),
                  u[5] || (u[5] = J(" Log In ", -1))
                ]),
                _: 1
              }, 8, ["disabled"]),
              f.canRetrySession ? Y("", !0) : (y(), oe(D(xe), {
                key: 1,
                type: "info",
                onClick: U,
                disabled: m.value
              }, {
                default: d(() => [
                  v(D(Ee), null, {
                    default: d(() => [
                      v(D(He))
                    ]),
                    _: 1
                  }),
                  u[6] || (u[6] = J(" Refresh Page ", -1))
                ]),
                _: 1
              }, 8, ["disabled"]))
            ]),
            m.value ? (y(), x("div", ko, [
              v(D(Rs), {
                percentage: _.value,
                status: $.value,
                "stroke-width": 6
              }, null, 8, ["percentage", "status"]),
              n("p", _o, K(P.value), 1)
            ])) : Y("", !0)
          ])
        ];
      }),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const So = /* @__PURE__ */ Ve(yo, [["__scopeId", "data-v-0dd27f7f"]]), bo = { class: "aiworkspace-header" }, Co = {
  key: 0,
  class: "header-content header-loading"
}, Ao = { class: "header-center" }, Eo = { class: "loading-text" }, Io = { key: 0 }, Lo = { key: 1 }, Vo = {
  key: 1,
  class: "header-content header-fallback"
}, Mo = {
  key: 2,
  class: "header-content header-restricted"
}, Wo = { class: "header-center" }, $o = { class: "restricted-text" }, Uo = { class: "header-right" }, Ro = {
  key: 3,
  class: "header-content"
}, Po = { class: "header-left" }, xo = { class: "logo-section" }, Do = {
  href: "/",
  class: "logo"
}, To = ["src"], No = {
  key: 1,
  class: "text-logo"
}, Ho = {
  key: 0,
  class: "header-center"
}, Oo = { class: "main-navigation" }, Fo = { class: "nav-item" }, zo = {
  href: "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard",
  class: "nav-link"
}, Bo = { class: "workspace-dropdown-item" }, jo = ["href"], Go = { class: "workspace-icon" }, Ko = {
  key: 1,
  class: "nav-divider"
}, qo = { class: "nav-item" }, Jo = ["href", "onClick"], Yo = { class: "header-right" }, Xo = { class: "user-profile" }, Qo = { class: "user-info" }, Zo = { class: "user-name" }, ea = { class: "user-avatar" }, sa = ["src", "alt"], oa = {
  key: 1,
  class: "avatar-placeholder"
}, aa = { class: "version-info" }, ta = { class: "version-hash" }, ra = {
  key: 4,
  class: "header-content header-unauthenticated"
}, na = { class: "header-left" }, ia = { class: "logo-section" }, la = {
  href: "/",
  class: "logo"
}, ca = ["src"], ua = {
  key: 1,
  class: "text-logo"
}, da = { class: "header-right" }, pa = { class: "workspace-list" }, fa = ["onClick"], ga = { class: "workspace-icon" }, va = { class: "workspace-details" }, ha = { class: "workspace-members" }, ma = {
  key: 0,
  class: "current-indicator"
}, wa = { class: "update-content" }, ka = { class: "update-actions" }, be = 50, _a = /* @__PURE__ */ le({
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
    const o = t, i = s, { authState: m, logout: _, isLoading: $ } = Js(), {
      isSessionValid: P,
      sessionLossEvent: H,
      hasSessionLoss: w,
      canRetrySession: k,
      retrySession: p,
      clearSessionLoss: c
    } = Zs(), U = () => {
      try {
        return eo();
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
          const a = U();
          if (a) {
            u.value = a, console.log("[AIWorkspaceHeader] Pinia store initialized successfully");
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
    const g = C(!1), V = C(!1), h = C(!1), S = C([]), te = C([]), q = C({
      name: "",
      email: "",
      avatar_url: null,
      initials: ""
    }), O = C("unknown"), B = C("unknown"), ie = C(!1), G = C(null), A = C(null), N = C(!1), F = C([]), E = C([]), z = C(!1);
    ue(E, async (a) => {
      a.length > 0 && L.value && Z.value && await R();
    }, { immediate: !1 }), ue(() => window.location.pathname + window.location.search + window.location.hash, async () => {
      L.value && Z.value && await R();
    }, { immediate: !1 });
    const Q = C(window.location.pathname);
    ue(() => window.location.pathname, (a) => {
      Q.value = a;
    }, { immediate: !0 }), ue(L, (a) => {
      !a && M.value < be && b();
    });
    const re = () => {
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
    }, W = () => {
      try {
        return window.location.pathname.includes("/all-workspace/");
      } catch (a) {
        return console.warn("[AIWorkspaceHeader] Error checking all-workspace mode:", a), !1;
      }
    }, R = async () => {
      if (!u.value || !L.value)
        return;
      const a = W();
      if (z.value = a, a) {
        u.value.currentWorkspace = null, localStorage.removeItem("current_workspace"), console.log("[AIWorkspaceHeader] Auto-selected all-workspace mode from URL");
        return;
      }
      const e = re();
      if (e)
        try {
          E.value.length === 0 && await Ge();
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
    ]), Be = X(() => z.value ? de.value : ce.value), ls = X(() => {
      try {
        const a = Q.value;
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
          const l = Be.value.find(
            (T) => T.key === e || T.url.includes(`/${e}`) || T.url === `/${e}`
          );
          if (l)
            return l.label;
        }
        return "Dashboard";
      } catch (a) {
        return console.warn("[AIWorkspaceHeader] Error determining current section:", a), "Dashboard";
      }
    }), cs = (a) => {
      const e = /* @__PURE__ */ new Map();
      a.forEach((T) => {
        e.set(T.id, { ...T, children: [] });
      });
      const r = [];
      e.forEach((T) => {
        T.parent_workspace_id && e.has(T.parent_workspace_id) ? e.get(T.parent_workspace_id).children.push(T) : r.push(T);
      });
      const l = (T) => {
        T.sort((se, pe) => se.title.localeCompare(pe.title)), T.forEach((se) => {
          se.children && l(se.children);
        });
      };
      return l(r), r;
    }, je = (a, e = 0, r = []) => (a.forEach((l) => {
      r.push({ ...l, level: e }), l.children && l.children.length && je(l.children, e + 1, r);
    }), r), Ge = async () => {
      var a, e, r;
      try {
        const l = await ((a = u.value) == null ? void 0 : a.loadWorkspaces());
        if (F.value = cs(l || []), E.value = je(F.value), te.value = E.value, S.value = E.value, o.currentWorkspaceId) {
          const T = E.value.find((se) => {
            var pe;
            return se.id.toString() === ((pe = o.currentWorkspaceId) == null ? void 0 : pe.toString());
          });
          T && ((e = u.value) == null || e.setCurrentWorkspace(T));
        } else
          !ee.value && E.value.length && ((r = u.value) == null || r.setCurrentWorkspace(E.value[0]));
      } catch (l) {
        console.error("loadWorkspaces (header) error", l);
      }
    }, us = (a) => {
      if (console.log("Navigation command:", a), a === "all-workspace") {
        window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
        return;
      } else {
        const e = parseInt(a.replace("workspace-", ""));
        window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e}/dashboard`;
        return;
      }
    }, ds = (a) => {
      const e = ee.value, r = z.value;
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
    }, ps = (a) => {
      const e = ee.value, r = z.value;
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
    }, Ce = (a) => {
      switch (a) {
        case "profile":
          o.onProfileClick ? o.onProfileClick() : j.info("Profile settings coming soon");
          break;
        case "workspaces":
          g.value = !0;
          break;
        case "logout":
          gs();
          break;
      }
    }, Ke = (a) => {
      var e;
      (e = u.value) == null || e.setCurrentWorkspace(a), g.value = !1, i("workspaceChange", a), j.success(`Switched to ${a.title}`);
    }, fs = () => {
      es.prompt("Enter workspace name:", "Create New Workspace", {
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
        S.value.push(e), (r = u.value) == null || r.setWorkspaces(S.value), Ke(e), j.success(`Created workspace: ${a}`);
      }).catch(() => {
      });
    }, gs = () => {
      es.confirm(
        "Are you sure you want to sign out?",
        "Sign Out",
        {
          confirmButtonText: "Sign Out",
          cancelButtonText: "Cancel",
          type: "warning"
        }
      ).then(async () => {
        var a;
        (a = u.value) == null || a.clearData(), await _(), typeof window < "u" && window.dispatchEvent(new CustomEvent("session-logout-detected", {
          detail: { timestamp: /* @__PURE__ */ new Date(), source: "manual-logout" }
        })), i("logout"), j.success("Signed out successfully");
      }).catch(() => {
      });
    }, Me = async () => {
      var a, e;
      if (m.value.user) {
        const r = m.value.user;
        q.value = {
          name: r.name || ((a = r.email) == null ? void 0 : a.split("@")[0]) || "User",
          email: r.email || "",
          avatar_url: r.avatar_url || null,
          initials: (r.name || ((e = r.email) == null ? void 0 : e.split("@")[0]) || "U").split(" ").map((l) => l[0]).join("").toUpperCase().substring(0, 2)
        }, o.showWorkspaceSelector && await Ge();
      }
    };
    ue(() => m.value.user, (a) => {
      var e;
      a ? Me() : (q.value = { name: "", email: "", avatar_url: null, initials: "" }, (e = u.value) == null || e.clearData());
    }), ue(w, (a) => {
      a && Z.value && (console.log("[AIWorkspaceHeader] Session loss detected, showing modal"), h.value = !0);
    }), ue(() => o.currentWorkspaceId, (a) => {
      var e;
      if (a && E.value.length) {
        const r = E.value.find((l) => l.id.toString() === a.toString());
        r && ((e = u.value) == null || e.setCurrentWorkspace(r));
      }
    }), Se(async () => {
      Z.value && (await Me(), await R()), await _s(), Xe(), Cs();
    });
    const vs = async (a) => {
      console.log("Login successful:", a), V.value = !1, await Me(), i("login"), j.success("Welcome back!");
    }, hs = async () => {
      console.log("[AIWorkspaceHeader] Retrying session..."), await p() ? (h.value = !1, c(), j.success("Session restored successfully!")) : j.error("Failed to restore session. Please log in again.");
    }, ms = () => {
      console.log("[AIWorkspaceHeader] Opening login modal from session loss"), h.value = !1, V.value = !0;
    }, ws = () => {
      console.log("[AIWorkspaceHeader] Refreshing page due to session loss"), window.location.reload();
    }, ks = () => {
      M.value = 0, b(), j.success("Manual Pinia retry initiated.");
    }, _s = async () => {
      try {
        const a = await fetch("/version.json");
        if (a.ok) {
          const e = a.headers.get("content-type");
          if (e && e.includes("application/json"))
            try {
              const r = await a.json();
              console.log("Version data received:", r), O.value = r.shortCommitHash || "unknown", B.value = r.fullCommitHash || "unknown", console.log("✅ Loaded commit hash from version.json:", O.value);
              return;
            } catch {
              console.log("Failed to parse version.json, trying fallback methods...");
            }
        }
        console.log("🔄 version.json not available, trying automatic detection..."), await qe();
      } catch (a) {
        console.log("Error loading version.json, trying automatic detection...", a), await qe();
      }
    }, We = async () => {
      try {
        const a = await Je();
        if (a) {
          const e = await Ye(a);
          if (e && e !== B.value) {
            const r = O.value;
            O.value = e.substring(0, 7), B.value = e, console.log("🔄 Updated commit hash:", r, "→", O.value), r !== "unknown" && r !== e.substring(0, 7) && j.info(`Version updated to ${O.value}`);
          }
        }
      } catch (a) {
        console.log("Error refreshing commit hash:", a);
      }
    }, qe = async () => {
      try {
        const a = await Je();
        if (a) {
          const T = await Ye(a);
          if (T) {
            O.value = T.substring(0, 7), B.value = T, console.log("✅ Loaded commit hash from GitHub API:", O.value);
            return;
          }
        }
        const e = await ys();
        if (e && e.version) {
          O.value = e.version, B.value = e.version, console.log("✅ Loaded version from package.json:", O.value);
          return;
        }
        const r = await Ss();
        if (r) {
          O.value = r, B.value = r, console.log("✅ Loaded version from build info:", O.value);
          return;
        }
        const l = Date.now().toString(36);
        O.value = l.substring(0, 7), B.value = l, console.log("✅ Using timestamp-based version:", O.value);
      } catch (a) {
        console.warn("❌ All automatic detection methods failed:", a), O.value = "unknown", B.value = "unknown";
      }
    }, Je = async () => {
      try {
        const a = await fetch("/package.json");
        if (a.ok) {
          const e = await a.json();
          if (e.repository && e.repository.url) {
            const l = e.repository.url.match(/github\.com\/([^\/]+)\/([^\/]+)/);
            if (l)
              return { owner: l[1], repo: l[2].replace(".git", "") };
          }
        }
      } catch (a) {
        console.log("Could not get repo info from package.json:", a);
      }
      return null;
    }, Ye = async (a) => {
      try {
        const e = ["main", "master"];
        for (const r of e)
          try {
            const l = await fetch(`https://api.github.com/repos/${a.owner}/${a.repo}/commits/${r}`);
            if (l.ok)
              return (await l.json()).sha;
          } catch (l) {
            console.log(`Could not get commit from ${r} branch:`, l);
          }
      } catch (e) {
        console.log("Could not get commit from GitHub API:", e);
      }
      return null;
    }, ys = async () => {
      try {
        const a = await fetch("/package.json");
        if (a.ok)
          return await a.json();
      } catch (a) {
        console.log("Could not get package.json:", a);
      }
      return null;
    }, Ss = async () => {
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
    }, bs = async () => {
      try {
        if (B.value === "unknown") {
          j.warning("Version information not available");
          return;
        }
        await navigator.clipboard.writeText(B.value), j.success("Version information copied to clipboard!");
      } catch (a) {
        console.error("Failed to copy version info:", a), j.error("Failed to copy version info");
      }
    }, Xe = async () => {
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
          G.value = l.fullCommitHash, B.value !== G.value && (ie.value = !0, console.log("Version mismatch detected:", {
            currentVersion: B.value,
            latestVersion: G.value,
            serverBuildTime: l.buildTime
          }));
        } catch (a) {
          console.error("Error checking for updates:", a);
        } finally {
          N.value = !1;
        }
      }
    }, Cs = () => {
      A.value = setInterval(() => {
        Xe(), We();
      }, 30 * 1e3), setInterval(() => {
        We();
      }, 2 * 60 * 1e3);
    }, As = () => {
      console.log("User reloaded for update:", {
        currentVersion: B.value,
        latestVersion: G.value
      }), window.location.reload();
    }, Qe = () => {
      ie.value = !1, console.log("Update alert dismissed:", {
        currentVersion: B.value,
        latestVersion: G.value
      });
    };
    return as(() => {
      A.value && clearInterval(A.value);
    }), (a, e) => {
      const r = ne("el-icon"), l = ne("el-button"), T = ne("el-tag"), se = ne("el-dropdown-item"), pe = ne("el-dropdown-menu"), $e = ne("el-dropdown"), Es = ne("el-dialog"), Is = ne("el-alert");
      return y(), x("header", bo, [
        !L.value && M.value < be || D($) ? (y(), x("div", Co, [
          e[10] || (e[10] = Ae('<div class="header-left" data-v-afe6bfeb><div class="logo-section" data-v-afe6bfeb><a href="/" class="logo" data-v-afe6bfeb><div class="text-logo" data-v-afe6bfeb><span class="logo-text" data-v-afe6bfeb>AI Workspace</span></div></a></div></div>', 1)),
          n("div", Ao, [
            n("span", Eo, [
              D($) ? (y(), x("span", Io, "Syncing authentication...")) : (y(), x("span", Lo, "Initializing..."))
            ])
          ])
        ])) : !L.value && M.value >= be ? (y(), x("div", Vo, [
          e[12] || (e[12] = Ae('<div class="header-left" data-v-afe6bfeb><div class="logo-section" data-v-afe6bfeb><a href="/" class="logo" data-v-afe6bfeb><div class="text-logo" data-v-afe6bfeb><span class="logo-text" data-v-afe6bfeb>AI Workspace</span></div></a></div></div>', 1)),
          n("div", { class: "header-center" }, [
            e[11] || (e[11] = n("span", { class: "fallback-text" }, "Header Ready (Fallback Mode)", -1)),
            n("button", {
              onClick: ks,
              class: "retry-button"
            }, "Retry Pinia")
          ]),
          e[13] || (e[13] = Ae('<div class="header-right" data-v-afe6bfeb><div class="user-profile" data-v-afe6bfeb><div class="user-info" data-v-afe6bfeb><span class="user-name" data-v-afe6bfeb>User</span></div><div class="user-avatar" data-v-afe6bfeb><span class="avatar-placeholder" data-v-afe6bfeb>U</span></div></div></div>', 1))
        ])) : Z.value && !D(P) ? (y(), x("div", Mo, [
          e[16] || (e[16] = Ae('<div class="header-left" data-v-afe6bfeb><div class="logo-section" data-v-afe6bfeb><a href="/" class="logo" data-v-afe6bfeb><div class="text-logo" data-v-afe6bfeb><span class="logo-text" data-v-afe6bfeb>AI Workspace</span></div></a></div></div>', 1)),
          n("div", Wo, [
            n("span", $o, [
              v(r, null, {
                default: d(() => [
                  v(D(ts))
                ]),
                _: 1
              }),
              e[14] || (e[14] = J(" Session expired - Please log in again ", -1))
            ])
          ]),
          n("div", Uo, [
            v(l, {
              type: "primary",
              onClick: e[0] || (e[0] = (I) => V.value = !0)
            }, {
              default: d(() => [
                v(r, null, {
                  default: d(() => [
                    v(D(Oe))
                  ]),
                  _: 1
                }),
                e[15] || (e[15] = J(" Log In ", -1))
              ]),
              _: 1
            })
          ])
        ])) : Z.value && D(P) ? (y(), x("div", Ro, [
          n("div", Po, [
            n("div", xo, [
              n("a", Do, [
                a.customLogo ? (y(), x("img", {
                  key: 0,
                  src: a.customLogo,
                  alt: "AIWorkspace",
                  class: "logo-image"
                }, null, 8, To)) : (y(), x("div", No, [...e[17] || (e[17] = [
                  n("span", { class: "logo-text" }, "AI Workspace", -1)
                ])]))
              ])
            ])
          ]),
          a.showSecondaryNavigation ? (y(), x("div", Ho, [
            n("nav", Oo, [
              a.showWorkspaceSelector ? (y(), oe($e, {
                key: 0,
                onCommand: us,
                trigger: "hover"
              }, {
                dropdown: d(() => [
                  v(pe, { class: "workspace-tree-dropdown" }, {
                    default: d(() => [
                      v(se, {
                        command: "all-workspace",
                        class: Ue({ active: z.value })
                      }, {
                        default: d(() => [
                          n("a", zo, [
                            n("div", Bo, [
                              e[19] || (e[19] = n("span", { class: "workspace-icon" }, "🌐", -1)),
                              e[20] || (e[20] = n("span", null, "All workspace", -1)),
                              z.value ? (y(), oe(T, {
                                key: 0,
                                size: "small",
                                type: "success"
                              }, {
                                default: d(() => [...e[18] || (e[18] = [
                                  J("Current", -1)
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
                      (y(!0), x(Re, null, Pe(E.value, (I) => (y(), oe(se, {
                        key: I.id,
                        command: `workspace-${I.id}`
                      }, {
                        default: d(() => {
                          var he;
                          return [
                            n("a", {
                              href: `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${I.id}/dashboard`,
                              class: "nav-link"
                            }, [
                              n("div", {
                                class: "workspace-dropdown-item",
                                style: Ws({ paddingLeft: (I.level || 0) * 16 + "px" })
                              }, [
                                n("span", Go, K(I.children && I.children.length ? "📁" : "📄"), 1),
                                n("span", null, K(I.title), 1),
                                I.id === ((he = ee.value) == null ? void 0 : he.id) ? (y(), oe(T, {
                                  key: 0,
                                  size: "small",
                                  type: "success"
                                }, {
                                  default: d(() => [...e[21] || (e[21] = [
                                    J("Current", -1)
                                  ])]),
                                  _: 1
                                })) : Y("", !0)
                              ], 4)
                            ], 8, jo)
                          ];
                        }),
                        _: 2
                      }, 1032, ["command"]))), 128)),
                      E.value.length === 0 ? (y(), oe(se, {
                        key: 1,
                        disabled: ""
                      }, {
                        default: d(() => [...e[22] || (e[22] = [
                          J(" No workspaces ", -1)
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
                    n("span", Fo, [
                      J(K(z.value ? "All workspace" : ((I = ee.value) == null ? void 0 : I.title) || "Select Workspace") + " ", 1),
                      v(r, { class: "nav-arrow" }, {
                        default: d(() => [
                          v(D(ss))
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }),
                _: 1
              })) : Y("", !0),
              a.showWorkspaceSelector ? (y(), x("span", Ko, "/")) : Y("", !0),
              a.showSecondaryNavigation ? (y(), oe($e, {
                key: 2,
                trigger: "hover"
              }, {
                dropdown: d(() => [
                  v(pe, null, {
                    default: d(() => [
                      (y(!0), x(Re, null, Pe(Be.value, (I) => (y(), oe(se, {
                        key: I.label,
                        class: Ue({ active: I.active })
                      }, {
                        default: d(() => [
                          n("a", {
                            href: ps(I),
                            class: "nav-link",
                            onClick: fe((he) => ds(I), ["prevent"])
                          }, K(I.label), 9, Jo)
                        ]),
                        _: 2
                      }, 1032, ["class"]))), 128))
                    ]),
                    _: 1
                  })
                ]),
                default: d(() => [
                  n("span", qo, [
                    J(K(ls.value) + " ", 1),
                    v(r, { class: "nav-arrow" }, {
                      default: d(() => [
                        v(D(ss))
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })) : Y("", !0)
            ])
          ])) : Y("", !0),
          n("div", Yo, [
            v($e, {
              onCommand: Ce,
              trigger: "click",
              placement: "bottom-end"
            }, {
              dropdown: d(() => [
                v(pe, null, {
                  default: d(() => [
                    v(se, null, {
                      default: d(() => [
                        n("a", {
                          href: "/profile",
                          class: "nav-link",
                          onClick: e[1] || (e[1] = fe((I) => Ce("profile"), ["prevent"]))
                        }, "Profile Settings")
                      ]),
                      _: 1
                    }),
                    a.showWorkspaceSelector ? (y(), oe(se, { key: 0 }, {
                      default: d(() => [
                        n("a", {
                          href: "#switch-workspace",
                          class: "nav-link",
                          onClick: e[2] || (e[2] = fe((I) => Ce("workspaces"), ["prevent"]))
                        }, "Switch Workspace")
                      ]),
                      _: 1
                    })) : Y("", !0),
                    v(se, {
                      onClick: bs,
                      class: "version-item"
                    }, {
                      default: d(() => [
                        n("div", aa, [
                          e[23] || (e[23] = n("span", { class: "version-label" }, "Version:", -1)),
                          n("span", ta, K(O.value), 1),
                          v(l, {
                            size: "small",
                            type: "text",
                            onClick: fe(We, ["stop"]),
                            class: "refresh-button",
                            loading: N.value
                          }, {
                            default: d(() => [
                              v(r, null, {
                                default: d(() => [
                                  v(D(He))
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
                    v(se, { divided: "" }, {
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
                n("div", Xo, [
                  n("div", Qo, [
                    n("span", Zo, K(q.value.name), 1)
                  ]),
                  n("div", ea, [
                    q.value.avatar_url ? (y(), x("img", {
                      key: 0,
                      src: q.value.avatar_url,
                      alt: q.value.name
                    }, null, 8, sa)) : (y(), x("span", oa, K(q.value.initials), 1))
                  ])
                ])
              ]),
              _: 1
            })
          ])
        ])) : (y(), x("div", ra, [
          n("div", na, [
            n("div", ia, [
              n("a", la, [
                a.customLogo ? (y(), x("img", {
                  key: 0,
                  src: a.customLogo,
                  alt: "AIWorkspace",
                  class: "logo-image"
                }, null, 8, ca)) : (y(), x("div", ua, [...e[24] || (e[24] = [
                  n("span", { class: "logo-text" }, "AI Workspace", -1)
                ])]))
              ])
            ])
          ]),
          e[26] || (e[26] = n("div", { class: "header-center" }, [
            n("span", { class: "welcome-text" }, "Welcome to AI Workspace")
          ], -1)),
          n("div", da, [
            v(l, {
              type: "primary",
              size: "large",
              class: "login-button",
              onClick: e[4] || (e[4] = (I) => V.value = !0)
            }, {
              default: d(() => [
                v(r, null, {
                  default: d(() => [
                    v(D(Oe))
                  ]),
                  _: 1
                }),
                e[25] || (e[25] = J(" Login / Signup ", -1))
              ]),
              _: 1
            })
          ])
        ])),
        Z.value && a.showWorkspaceSelector ? (y(), oe(Es, {
          key: 5,
          modelValue: g.value,
          "onUpdate:modelValue": e[6] || (e[6] = (I) => g.value = I),
          title: "Switch Workspace",
          width: "500px",
          onClose: e[7] || (e[7] = (I) => g.value = !1)
        }, {
          footer: d(() => [
            v(l, {
              onClick: e[5] || (e[5] = (I) => g.value = !1)
            }, {
              default: d(() => [...e[27] || (e[27] = [
                J("Cancel", -1)
              ])]),
              _: 1
            }),
            v(l, {
              type: "primary",
              onClick: fs
            }, {
              default: d(() => [...e[28] || (e[28] = [
                J("Create New Workspace", -1)
              ])]),
              _: 1
            })
          ]),
          default: d(() => [
            n("div", pa, [
              (y(!0), x(Re, null, Pe(S.value, (I) => {
                var he, Ze;
                return y(), x("div", {
                  key: I.id,
                  class: Ue(["workspace-item", { active: I.id === ((he = ee.value) == null ? void 0 : he.id) }]),
                  onClick: (Ea) => Ke(I)
                }, [
                  n("div", ga, K(I.children && I.children.length ? "📁" : "📄"), 1),
                  n("div", va, [
                    n("h3", null, K(I.title), 1),
                    n("p", null, K(I.description), 1),
                    n("span", ha, K(I.hasAccess ? "Active" : "Inactive"), 1)
                  ]),
                  I.id === ((Ze = ee.value) == null ? void 0 : Ze.id) ? (y(), x("div", ma, [
                    v(r, null, {
                      default: d(() => [
                        v(D(Hs))
                      ]),
                      _: 1
                    })
                  ])) : Y("", !0)
                ], 10, fa);
              }), 128))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])) : Y("", !0),
        v(lo, {
          modelValue: V.value,
          "onUpdate:modelValue": e[8] || (e[8] = (I) => V.value = I),
          onLoginSuccess: vs
        }, null, 8, ["modelValue"]),
        v(So, {
          modelValue: h.value,
          "onUpdate:modelValue": e[9] || (e[9] = (I) => h.value = I),
          "session-loss-event": D(H),
          "can-retry-session": D(k) || !1,
          onRetry: hs,
          onLogin: ms,
          onRefresh: ws
        }, null, 8, ["modelValue", "session-loss-event", "can-retry-session"]),
        ie.value ? (y(), oe(Is, {
          key: 6,
          title: "New Version Available!",
          type: "warning",
          closable: !0,
          onClose: Qe,
          "show-icon": "",
          class: "update-alert"
        }, {
          default: d(() => [
            n("div", wa, [
              e[31] || (e[31] = n("p", null, "A new version of the application is available. Please reload to get the latest updates and features.", -1)),
              n("div", ka, [
                v(l, {
                  type: "primary",
                  size: "small",
                  onClick: As
                }, {
                  default: d(() => [...e[29] || (e[29] = [
                    J(" Reload Now ", -1)
                  ])]),
                  _: 1
                }),
                v(l, {
                  size: "small",
                  onClick: Qe
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
        })) : Y("", !0)
      ]);
    };
  }
});
const ja = /* @__PURE__ */ Ve(_a, [["__scopeId", "data-v-afe6bfeb"]]), ya = { class: "auth-callback" }, Sa = /* @__PURE__ */ le({
  __name: "AuthCallback",
  setup(t) {
    Se(async () => {
      console.log("[AuthCallback] Component mounted, starting callback processing..."), console.log("[AuthCallback] Current URL:", window.location.href), console.log("[AuthCallback] Current hash:", window.location.hash);
      try {
        await new Promise((m) => setTimeout(m, 500));
        const { data: o, error: i } = await Ie.auth.getSession();
        if (i) {
          console.error("Error processing callback:", i), s();
          return;
        }
        if (o != null && o.session) {
          const m = o.session.user;
          console.log("OAuth login successful:", m.email), o.session.access_token && ye(ke, o.session.access_token), o.session.refresh_token && ye(_e, o.session.refresh_token), Ne();
          const _ = xs();
          console.log("[callback] Post-login redirect URL:", _), console.log("[callback] Session storage redirect:", sessionStorage.getItem("post-login-redirect")), console.log("[callback] Local storage redirect:", localStorage.getItem("post-login-redirect"));
          const $ = _ || "/";
          if (console.log("[callback] Final redirect URL:", $), $.startsWith("/")) {
            const P = window.location.origin, H = `${P}${$}`;
            console.log("[callback] redirecting to:", H, { hostname: window.location.hostname, origin: P }), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
              window.location.href = H;
            }, 100);
          } else
            console.log("[callback] redirecting to absolute URL:", $), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
              window.location.href = $;
            }, 100);
        } else
          s();
      } catch (o) {
        console.error("Error processing callback:", o), s();
      }
    });
    const s = () => {
      const i = window.location.href.replace("/auth/callback", "");
      window.location.href = i;
    };
    return (o, i) => (y(), x("div", ya, [...i[0] || (i[0] = [
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
const Ga = /* @__PURE__ */ Ve(Sa, [["__scopeId", "data-v-acdf6325"]]), ge = class ge {
  constructor() {
    me(this, "validationCache", /* @__PURE__ */ new Map());
    me(this, "CACHE_DURATION", is().validationCacheDuration);
  }
  // Helper function to get cookie value
  getCookieValue(s) {
    var m;
    if (typeof document > "u")
      return null;
    const i = `; ${document.cookie}`.split(`; ${s}=`);
    return i.length === 2 && ((m = i.pop()) == null ? void 0 : m.split(";").shift()) || null;
  }
  static getInstance() {
    return ge.instance || (ge.instance = new ge()), ge.instance;
  }
  /**
   * Validate current session with caching and improved reliability
   */
  async validateSession(s = !1) {
    var i, m;
    const o = "session_validation";
    if (!s) {
      const _ = this.validationCache.get(o);
      if (_ && Date.now() - _.timestamp < this.CACHE_DURATION)
        return console.log("[SessionValidator] Using cached validation result"), _.result;
    }
    console.log("[SessionValidator] Validating session...");
    try {
      const _ = this.getCookieValue("sb-access-token"), $ = this.getCookieValue("sb-refresh-token");
      if (!_ || !$) {
        const f = {
          isValid: !1,
          needsLogin: !0,
          error: "No authentication tokens found",
          canRetry: !1
        };
        return this.cacheResult(o, f), f;
      }
      const P = await ae();
      let H = null, w = null;
      for (let f = 1; f <= 2; f++)
        try {
          const u = await P.auth.getSession();
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
            return this.cacheResult(o, L), L;
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
        return this.cacheResult(o, u), u;
      }
      if (!H || !H.user) {
        const f = {
          isValid: !1,
          needsLogin: !0,
          error: "No valid session found",
          canRetry: !0
        };
        return this.cacheResult(o, f), f;
      }
      const k = /* @__PURE__ */ new Date(), p = new Date(H.expires_at * 1e3), c = 5 * 60 * 1e3;
      if (k >= new Date(p.getTime() - c)) {
        const f = {
          isValid: !1,
          needsLogin: !0,
          error: "Session is close to expiry or expired",
          canRetry: !0
        };
        return this.cacheResult(o, f), f;
      }
      const U = {
        isValid: !0,
        needsLogin: !1,
        canRetry: !1
      };
      return this.cacheResult(o, U), U;
    } catch (_) {
      console.error("[SessionValidator] Error validating session:", _);
      const $ = {
        isValid: !1,
        needsLogin: !1,
        // Don't force login on unexpected errors
        error: `Validation error: ${_}`,
        canRetry: !0
      };
      return this.cacheResult(o, $), $;
    }
  }
  /**
   * Attempt to restore session from tokens
   */
  async restoreSession() {
    console.log("[SessionValidator] Attempting to restore session...");
    try {
      const s = this.getCookieValue("sb-access-token"), o = this.getCookieValue("sb-refresh-token");
      if (!s || !o)
        return {
          isValid: !1,
          needsLogin: !0,
          error: "No tokens available for restoration",
          canRetry: !1
        };
      const i = await ae(), { data: m, error: _ } = await i.auth.setSession({
        access_token: s,
        refresh_token: o
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
  cacheResult(s, o) {
    this.validationCache.set(s, {
      result: o,
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
me(ge, "instance");
let Fe = ge;
const ze = Fe.getInstance(), ba = (t = !1) => ze.validateSession(t), Ca = () => ze.restoreSession(), Aa = () => ze.clearCache();
async function Ka() {
  console.log("[SessionValidator] Initializing session validation...");
  let t = await ba();
  return !t.isValid && t.canRetry && (console.log("[SessionValidator] Attempting session restoration..."), t = await Ca()), t;
}
function qa() {
  if (typeof window > "u")
    return () => {
    };
  const t = () => {
    console.log("[SessionValidator] Network restored, clearing cache for revalidation"), Aa();
  }, s = () => {
    console.log("[SessionValidator] Network lost, session validation may fail");
  };
  return window.addEventListener("online", t), window.addEventListener("offline", s), () => {
    window.removeEventListener("online", t), window.removeEventListener("offline", s);
  };
}
export {
  ke as ACCESS_COOKIE,
  ja as AIWorkspaceHeader,
  Ga as AuthCallback,
  at as LS_ACCESS_KEY,
  tt as LS_REFRESH_KEY,
  lo as LoginModal,
  Le as PackageError,
  _e as REFRESH_COOKIE,
  So as SessionLossModal,
  Fe as SessionValidator,
  rt as buildOAuthRedirectUrl,
  Te as clearLocalStorageTokens,
  Aa as clearSessionCache,
  we as clearSessionCookie,
  Xa as configureSupabase,
  Xs as conservativeConfig,
  Oa as createSessionConfig,
  ja as default,
  ve as defaultSessionConfig,
  Ba as detectionScenarios,
  rs as developmentConfig,
  nt as ensureCrossSubdomainCookies,
  Ys as fastDetectionConfig,
  Fa as getConfigByPreset,
  it as getCookie,
  xs as getPostLoginBase,
  is as getSessionConfig,
  ae as getSupabase,
  Ks as handleBundlingError,
  Qa as handleDomainChangeAuth,
  Ps as initializeCrossSubdomainAuth,
  Ka as initializeSessionValidation,
  ns as productionConfig,
  Za as restoreCrossSubdomainSession,
  Ca as restoreSession,
  De as restoreSessionWithRetry,
  Ua as safeExecute,
  Ra as safeExecuteAsync,
  xa as safeGetCookie,
  Ta as safeGetLocalStorage,
  Pa as safeImport,
  Da as safeSetCookie,
  Na as safeSetLocalStorage,
  Ha as safeWindowOperation,
  Qs as sessionConfigPresets,
  ze as sessionValidator,
  ye as setSessionCookie,
  et as setupAuthStateListener,
  qs as setupGlobalErrorHandler,
  st as setupImmediateCrossSubdomainAuth,
  qa as setupNetworkAwareValidation,
  ct as setupUniversalCallback,
  Ie as supabase,
  Ne as syncCookiesToLocalStorage,
  za as timingInfo,
  so as useAuth,
  Js as useEnhancedAuth,
  Zs as useSessionMonitor,
  eo as useWorkspaceStore,
  ba as validateSession
};
