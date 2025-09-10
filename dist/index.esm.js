var Is = Object.defineProperty;
var Ls = (t, s, o) => s in t ? Is(t, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[s] = o;
var me = (t, s, o) => (Ls(t, typeof s != "symbol" ? s + "" : s, o), o);
import { defineComponent as le, openBlock as y, createElementBlock as x, createElementVNode as r, ref as C, computed as X, onMounted as Se, onUnmounted as es, watch as ue, reactive as Vs, resolveComponent as ne, createBlock as oe, withCtx as g, toDisplayString as K, createVNode as h, unref as T, withModifiers as ge, createCommentVNode as Y, createTextVNode as J, createStaticVNode as Ae, normalizeClass as $e, Fragment as Ue, renderList as Re, normalizeStyle as Ms } from "vue";
import { ElForm as Ws, ElMessage as j, ElDialog as $s, ElIcon as Ee, ElButton as Pe, ElProgress as Us, ElMessageBox as Ye } from "element-plus";
import { i as Rs, g as ae, r as xe, s as Ie } from "./supabase-7523f80a.mjs";
import { c as Ya, h as Xa, b as Qa, d as Za, a as et } from "./supabase-7523f80a.mjs";
import { clearSessionCookie as we, ACCESS_COOKIE as ke, REFRESH_COOKIE as _e, clearLocalStorageTokens as De, setSessionCookie as ye, syncCookiesToLocalStorage as Te, getPostLoginBase as Ps } from "./utils/authRedirect.js";
import { LS_ACCESS_KEY as ot, LS_REFRESH_KEY as at, buildOAuthRedirectUrl as tt, ensureCrossSubdomainCookies as rt, getCookie as nt } from "./utils/authRedirect.js";
import { defineStore as xs } from "pinia";
import { setupUniversalCallback as lt } from "./utils/universalCallback.js";
/*! Element Plus Icons Vue v2.3.2 */
var Ds = /* @__PURE__ */ le({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(t) {
    return (s, o) => (y(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      r("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"
      })
    ]));
  }
}), Xe = Ds, Ts = /* @__PURE__ */ le({
  name: "Check",
  __name: "check",
  setup(t) {
    return (s, o) => (y(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      r("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      })
    ]));
  }
}), Ns = Ts, Hs = /* @__PURE__ */ le({
  name: "Lock",
  __name: "lock",
  setup(t) {
    return (s, o) => (y(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      r("path", {
        fill: "currentColor",
        d: "M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96"
      }),
      r("path", {
        fill: "currentColor",
        d: "M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32m192-160v-64a192 192 0 1 0-384 0v64zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64"
      })
    ]));
  }
}), Qe = Hs, Os = /* @__PURE__ */ le({
  name: "Message",
  __name: "message",
  setup(t) {
    return (s, o) => (y(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      r("path", {
        fill: "currentColor",
        d: "M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64"
      }),
      r("path", {
        fill: "currentColor",
        d: "M904 224 656.512 506.88a192 192 0 0 1-289.024 0L120 224zm-698.944 0 210.56 240.704a128 128 0 0 0 192.704 0L818.944 224z"
      })
    ]));
  }
}), Fs = Os, Bs = /* @__PURE__ */ le({
  name: "Refresh",
  __name: "refresh",
  setup(t) {
    return (s, o) => (y(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      r("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), Ze = Bs, zs = /* @__PURE__ */ le({
  name: "User",
  __name: "user",
  setup(t) {
    return (s, o) => (y(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      r("path", {
        fill: "currentColor",
        d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"
      })
    ]));
  }
}), Ne = zs, js = /* @__PURE__ */ le({
  name: "Warning",
  __name: "warning",
  setup(t) {
    return (s, o) => (y(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      r("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"
      })
    ]));
  }
}), ss = js;
class Le extends Error {
  constructor(o, n = {}, m) {
    super(o);
    me(this, "context");
    me(this, "originalError");
    this.name = "PackageError", this.context = n, this.originalError = m;
  }
}
function $a(t, s = {}, o) {
  try {
    const n = t();
    return n instanceof Promise ? n.catch((m) => {
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
    }) : n;
  } catch (n) {
    if (console.warn("[ErrorHandler] Operation failed:", {
      context: s,
      error: n instanceof Error ? n.message : String(n),
      stack: n instanceof Error ? n.stack : void 0
    }), o !== void 0)
      return o;
    throw new Le(
      `Operation failed: ${n instanceof Error ? n.message : String(n)}`,
      s,
      n instanceof Error ? n : void 0
    );
  }
}
async function Ua(t, s = {}, o) {
  try {
    return await t();
  } catch (n) {
    if (console.warn("[ErrorHandler] Async operation failed:", {
      context: s,
      error: n instanceof Error ? n.message : String(n),
      stack: n instanceof Error ? n.stack : void 0
    }), o !== void 0)
      return o;
    throw new Le(
      `Async operation failed: ${n instanceof Error ? n.message : String(n)}`,
      s,
      n instanceof Error ? n : void 0
    );
  }
}
function Gs(t, s = {}) {
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
async function Ra(t, s = {}, o) {
  try {
    return await t();
  } catch (n) {
    return console.warn("[ErrorHandler] Import failed:", {
      context: s,
      error: n instanceof Error ? n.message : String(n)
    }), o !== void 0 ? o : void 0;
  }
}
function Pa(t) {
  var s;
  try {
    if (typeof document > "u")
      return null;
    const n = `; ${document.cookie}`.split(`; ${t}=`);
    return n.length === 2 && ((s = n.pop()) == null ? void 0 : s.split(";").shift()) || null;
  } catch (o) {
    return console.warn("[ErrorHandler] Cookie access failed:", {
      cookieName: t,
      error: o instanceof Error ? o.message : String(o)
    }), null;
  }
}
function xa(t, s, o = {}) {
  try {
    if (typeof document > "u")
      return !1;
    let n = `${t}=${s}`;
    return o.domain && (n += `; domain=${o.domain}`), o.path && (n += `; path=${o.path}`), o.secure && (n += "; secure"), o.sameSite && (n += `; samesite=${o.sameSite}`), o.maxAge && (n += `; max-age=${o.maxAge}`), document.cookie = n, !0;
  } catch (n) {
    return console.warn("[ErrorHandler] Cookie setting failed:", {
      cookieName: t,
      error: n instanceof Error ? n.message : String(n)
    }), !1;
  }
}
function Da(t) {
  try {
    return typeof localStorage > "u" ? null : localStorage.getItem(t);
  } catch (s) {
    return console.warn("[ErrorHandler] localStorage get failed:", {
      key: t,
      error: s instanceof Error ? s.message : String(s)
    }), null;
  }
}
function Ta(t, s) {
  try {
    return typeof localStorage > "u" ? !1 : (localStorage.setItem(t, s), !0);
  } catch (o) {
    return console.warn("[ErrorHandler] localStorage set failed:", {
      key: t,
      error: o instanceof Error ? o.message : String(o)
    }), !1;
  }
}
function Na(t, s) {
  try {
    return typeof window > "u" ? s : t(window);
  } catch (o) {
    return console.warn("[ErrorHandler] Window operation failed:", {
      error: o instanceof Error ? o.message : String(o)
    }), s;
  }
}
function Ks() {
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
typeof window < "u" && Ks();
function qs() {
  const t = C({
    user: null,
    isAuthenticated: !1,
    isLoading: !0,
    error: null
  }), s = C(null), o = X(() => t.value.isAuthenticated), n = X(() => t.value.user), m = X(() => t.value.isLoading), _ = async () => {
    var k, d, c, U, p, u, L, M, b, f, V, v, S, te, q, B, z, ie, G, A, H;
    try {
      console.log("[auth][enhanced] Starting loadUserInfo..."), console.log("[auth][enhanced] Ensuring cross-subdomain cookie synchronization...");
      const O = "sb-access-token", E = "sb-refresh-token", F = (W) => {
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
      F([O, E]), await new Promise((W) => setTimeout(W, 50)), F([O, E]), await new Promise((W) => setTimeout(W, 50));
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
          name: ((d = W.user_metadata) == null ? void 0 : d.name) || ((c = W.user_metadata) == null ? void 0 : c.user_name) || ((U = W.user_metadata) == null ? void 0 : U.full_name) || ((p = W.email) == null ? void 0 : p.split("@")[0]) || "User",
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
      const re = await xe();
      if (re.success && re.session) {
        console.log("[auth][enhanced] Session restored successfully from cookies");
        const W = re.session.user, R = {
          id: W.id,
          name: ((L = W.user_metadata) == null ? void 0 : L.name) || ((M = W.user_metadata) == null ? void 0 : M.user_name) || ((b = W.user_metadata) == null ? void 0 : b.full_name) || ((f = W.email) == null ? void 0 : f.split("@")[0]) || "User",
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
        console.log("[auth][enhanced] Failed to restore session:", re.error), console.log("[auth][enhanced] Retrying session restoration with extended delay..."), await new Promise((R) => setTimeout(R, 500)), F([O, E]);
        const W = await xe();
        if (W.success && W.session) {
          console.log("[auth][enhanced] Session restored on retry");
          const R = W.session.user, Z = {
            id: R.id,
            name: ((v = R.user_metadata) == null ? void 0 : v.name) || ((S = R.user_metadata) == null ? void 0 : S.user_name) || ((te = R.user_metadata) == null ? void 0 : te.full_name) || ((q = R.email) == null ? void 0 : q.split("@")[0]) || "User",
            email: R.email,
            avatar_url: ((B = R.user_metadata) == null ? void 0 : B.avatar_url) || null,
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
    } catch (O) {
      console.error("Error getting Supabase session:", O), O instanceof Error && Gs(O, {
        component: "useEnhancedAuth",
        function: "loadUserInfo",
        operation: "session_validation"
      });
      try {
        const E = await xe();
        if (E.success && E.session) {
          console.log("[auth][enhanced] Session restored after error");
          const F = E.session.user, Q = {
            id: F.id,
            name: ((z = F.user_metadata) == null ? void 0 : z.name) || ((ie = F.user_metadata) == null ? void 0 : ie.user_name) || ((G = F.user_metadata) == null ? void 0 : G.full_name) || ((A = F.email) == null ? void 0 : A.split("@")[0]) || "User",
            email: F.email,
            avatar_url: ((H = F.user_metadata) == null ? void 0 : H.avatar_url) || null,
            user_metadata: F.user_metadata
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
      await (await ae()).auth.signOut(), we(ke), we(_e), De(), t.value = {
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
  }, P = async (k, d) => {
    var c, U, p, u, L;
    try {
      t.value.isLoading = !0;
      const M = await ae(), { data: b, error: f } = await M.auth.signInWithPassword({
        email: k,
        password: d
      });
      if (f)
        throw f;
      if (b.session) {
        const V = b.session.user, v = {
          id: V.id,
          name: ((c = V.user_metadata) == null ? void 0 : c.name) || ((U = V.user_metadata) == null ? void 0 : U.user_name) || ((p = V.user_metadata) == null ? void 0 : p.full_name) || ((u = V.email) == null ? void 0 : u.split("@")[0]) || "User",
          email: V.email,
          avatar_url: ((L = V.user_metadata) == null ? void 0 : L.avatar_url) || null,
          user_metadata: V.user_metadata
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
    } catch (M) {
      return console.error("Sign in error:", M), t.value.isLoading = !1, { user: null, session: null, error: String(M) };
    }
  }, N = async (k, d, c) => {
    var U, p, u, L, M;
    try {
      t.value.isLoading = !0;
      const b = await ae(), { data: f, error: V } = await b.auth.signUp({
        email: k,
        password: d,
        options: {
          data: c
        }
      });
      if (V)
        throw V;
      if (f.session) {
        const v = f.session.user, S = {
          id: v.id,
          name: ((U = v.user_metadata) == null ? void 0 : U.name) || ((p = v.user_metadata) == null ? void 0 : p.user_name) || ((u = v.user_metadata) == null ? void 0 : u.full_name) || ((L = v.email) == null ? void 0 : L.split("@")[0]) || "User",
          email: v.email,
          avatar_url: ((M = v.user_metadata) == null ? void 0 : M.avatar_url) || null,
          user_metadata: v.user_metadata
        };
        return t.value = {
          user: S,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, s.value = {
          user: S,
          access_token: f.session.access_token,
          refresh_token: f.session.refresh_token
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
    await Rs(), await w();
  }), {
    // State
    authState: t,
    currentSession: s,
    // Computed
    isAuthenticated: o,
    currentUser: n,
    isLoading: m,
    // Methods
    loadUserInfo: _,
    logout: $,
    signIn: P,
    signUp: N,
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
}, Js = {
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
}, Ys = {
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
}, os = {
  ...ve,
  normalCheckInterval: 1e4,
  // 10 seconds - faster for testing
  fastCheckInterval: 2e3,
  // 2 seconds - very fast for testing
  fastMonitoringDuration: 3e4,
  // 30 seconds - shorter for testing
  validationCacheDuration: 1e3
  // 1 second cache for testing
}, as = {
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
function ts() {
  switch ("production") {
    case "production":
      return as;
    case "development":
      return os;
    default:
      return ve;
  }
}
function Ha(t) {
  return {
    ...ve,
    ...t
  };
}
const Xs = {
  default: ve,
  fast: Js,
  conservative: Ys,
  development: os,
  production: as
};
function Oa(t) {
  return Xs[t];
}
const Fa = {
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
function Qs(t) {
  const s = C(!0), o = C(null), n = C(!1), m = C(!1), _ = C(null), $ = C(null), P = C(null), N = { ...ts(), ...t }, w = N.normalCheckInterval, k = N.fastCheckInterval, d = N.fastMonitoringDuration, c = N.maxRetryAttempts, U = N.retryDelay, p = X(() => !s.value && o.value !== null), u = X(
    () => {
      var A, H;
      return ((A = o.value) == null ? void 0 : A.canRetry) && ((H = o.value) == null ? void 0 : H.type) !== "manual_check_failed";
    }
  ), L = (A) => {
    var E;
    if (typeof document > "u")
      return null;
    const O = `; ${document.cookie}`.split(`; ${A}=`);
    return O.length === 2 && ((E = O.pop()) == null ? void 0 : E.split(";").shift()) || null;
  }, M = async () => {
    var A, H;
    try {
      console.log("[SessionMonitor] Validating session...");
      const O = L("sb-access-token"), E = L("sb-refresh-token");
      if (!O || !E)
        return console.log("[SessionMonitor] No tokens found in cookies"), !1;
      const F = await ae();
      let Q = null, re = null;
      for (let ee = 1; ee <= 2; ee++)
        try {
          const ce = await F.auth.getSession();
          Q = ce.data.session, re = ce.error;
          break;
        } catch (ce) {
          if (console.warn(`[SessionMonitor] Network error on attempt ${ee}:`, ce), ee === 2)
            return console.log("[SessionMonitor] Network issues detected, maintaining current session state"), s.value;
          await new Promise((de) => setTimeout(de, 1e3));
        }
      if (re)
        return console.warn("[SessionMonitor] Error getting session:", re), (A = re.message) != null && A.includes("Invalid JWT") || (H = re.message) != null && H.includes("JWT expired") ? !1 : s.value;
      if (!Q || !Q.user)
        return console.log("[SessionMonitor] No valid session found"), !1;
      const W = /* @__PURE__ */ new Date(), R = new Date(Q.expires_at * 1e3), Z = 5 * 60 * 1e3;
      return W >= new Date(R.getTime() - Z) ? (console.log("[SessionMonitor] Session is close to expiry or expired"), !1) : (console.log("[SessionMonitor] Session is valid"), _.value = /* @__PURE__ */ new Date(), !0);
    } catch (O) {
      return console.error("[SessionMonitor] Error validating session:", O), s.value;
    }
  }, b = async () => {
    try {
      console.log("[SessionMonitor] Attempting to restore session...");
      const A = L("sb-access-token"), H = L("sb-refresh-token");
      if (!A || !H)
        return console.log("[SessionMonitor] No tokens available for restoration"), !1;
      const O = await ae(), { data: E, error: F } = await O.auth.setSession({
        access_token: A,
        refresh_token: H
      });
      return F ? (console.warn("[SessionMonitor] Error restoring session:", F), !1) : E.session && E.session.user ? (console.log("[SessionMonitor] Session restored successfully"), _.value = /* @__PURE__ */ new Date(), !0) : !1;
    } catch (A) {
      return console.error("[SessionMonitor] Error restoring session:", A), !1;
    }
  }, f = (A, H, O = !0) => {
    console.warn("[SessionMonitor] Session loss detected:", { type: A, message: H }), s.value = !1, o.value = {
      type: A,
      message: H,
      timestamp: /* @__PURE__ */ new Date(),
      canRetry: O
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
  }, v = () => {
    console.log("[SessionMonitor] Clearing session loss state"), s.value = !0, o.value = null;
  }, S = () => {
    if (n.value) {
      console.log("[SessionMonitor] Already monitoring, skipping start");
      return;
    }
    console.log("[SessionMonitor] Starting session monitoring..."), n.value = !0, setTimeout(async () => {
      console.log("[SessionMonitor] Performing initial session validation..."), await M() ? console.log("[SessionMonitor] Initial validation successful") : (console.log("[SessionMonitor] Initial validation failed, but waiting for confirmation..."), setTimeout(async () => {
        await M() || f("session_expired", "Your session has expired. Please log in again.", !0);
      }, 3e3));
    }, 2e3), $.value = setInterval(async () => {
      console.log("[SessionMonitor] Periodic session check...");
      const A = await M();
      !A && s.value ? (console.log("[SessionMonitor] Session validation failed, performing confirmation check..."), setTimeout(async () => {
        await M() || f("session_expired", "Your session has expired. Please log in again.", !0);
      }, 2e3)) : A && !s.value && (console.log("[SessionMonitor] Session recovered"), v());
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
        await M() || (f("session_expired", "Your session has expired. Please log in again.", !0), q());
      }, 1e3)) : A && !s.value && (console.log("[SessionMonitor] Session recovered"), v(), q());
    }, k), setTimeout(() => {
      m.value && (console.log(`[SessionMonitor] Auto-stopping fast monitoring after ${d / 1e3} seconds`), q());
    }, d);
  }, q = () => {
    m.value && (console.log("[SessionMonitor] Stopping fast monitoring..."), m.value = !1, P.value && (clearInterval(P.value), P.value = null));
  }, B = () => {
    n.value && (console.log("[SessionMonitor] Stopping session monitoring..."), n.value = !1, $.value && (clearInterval($.value), $.value = null), q());
  }, z = async () => {
    console.log("[SessionMonitor] Manual session check requested");
    const A = await M();
    return !A && !await b() ? (f("manual_check_failed", "Session validation failed. Please log in again.", !1), !1) : A;
  }, ie = () => {
    console.log("[SessionMonitor] Network error detected, but not triggering immediate session loss"), s.value || f("network_error", "Network connection lost. Please check your internet connection and try again.", !0);
  }, G = () => {
    if (typeof window > "u")
      return;
    const A = () => {
      var E;
      console.log("[SessionMonitor] Network connection restored"), p.value && ((E = o.value) == null ? void 0 : E.type) === "network_error" && setTimeout(() => V(), 1e3);
    }, H = () => {
      console.log("[SessionMonitor] Network connection lost"), ie();
    }, O = (E) => {
      console.log("[SessionMonitor] Logout detected, starting fast monitoring for immediate detection"), te();
    };
    return window.addEventListener("online", A), window.addEventListener("offline", H), window.addEventListener("session-logout-detected", O), () => {
      window.removeEventListener("online", A), window.removeEventListener("offline", H), window.removeEventListener("session-logout-detected", O);
    };
  };
  return Se(() => {
    console.log("[SessionMonitor] Mounted, setting up monitoring"), S(), G();
  }), es(() => {
    console.log("[SessionMonitor] Unmounted, cleaning up"), B();
  }), {
    // State
    isSessionValid: s,
    sessionLossEvent: o,
    isMonitoring: n,
    isFastMonitoring: m,
    lastValidSession: _,
    // Computed
    hasSessionLoss: p,
    canRetrySession: u,
    // Methods
    validateSession: M,
    restoreSession: b,
    retrySession: V,
    clearSessionLoss: v,
    startMonitoring: S,
    stopMonitoring: B,
    startFastMonitoring: te,
    stopFastMonitoring: q,
    checkSession: z,
    handleNetworkError: ie
  };
}
const Zs = xs("workspace", () => {
  const t = C(null), s = C([]), o = C(null), n = (w) => {
    t.value = w, localStorage.setItem("current_workspace", JSON.stringify(w));
  }, m = (w) => {
    s.value = w, localStorage.setItem("available_workspaces", JSON.stringify(w));
  };
  return {
    currentWorkspace: t,
    workspaces: s,
    user: o,
    setCurrentWorkspace: n,
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
      const d = localStorage.getItem("user_info");
      if (d)
        try {
          o.value = JSON.parse(d);
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
        let d = Ie.from("workspaces").select(`
          id, title, description, parent_workspace_id, created_by, archived, created_at, git_repo, 
          workspace_access!inner ( access_type, shared_with_user_id ),
          workspace_activities!left ( updated_at )
        `).eq("workspace_access.shared_with_user_id", k.id);
        w || (d = d.eq("archived", !1));
        const { data: c, error: U } = await d;
        if (U)
          throw U;
        const p = /* @__PURE__ */ new Map();
        (c || []).forEach((f) => {
          (f.workspace_access || []).forEach((V) => {
            V.shared_with_user_id === k.id && p.set(f.id, V);
          });
        });
        const u = [...new Set(
          (c || []).filter((f) => f.parent_workspace_id).map((f) => f.parent_workspace_id).filter((f) => !p.has(f))
        )];
        let L = [];
        if (u.length) {
          let f = Ie.from("workspaces").select("id, title, description, parent_workspace_id, created_by, archived, created_at").in("id", u);
          w || (f = f.eq("archived", !1));
          const { data: V, error: v } = await f;
          if (v)
            throw v;
          L = V || [];
        }
        const b = [...c || [], ...L].map((f) => {
          var V, v, S;
          return {
            id: f.id,
            title: f.title,
            description: f.description || "No description",
            parent_workspace_id: f.parent_workspace_id,
            created_by: f.created_by,
            archived: f.archived,
            created_at: f.created_at,
            latest_activity: ((v = (V = f.workspace_activities) == null ? void 0 : V[0]) == null ? void 0 : v.updated_at) || f.created_at,
            hasAccess: p.has(f.id),
            accessType: ((S = p.get(f.id)) == null ? void 0 : S.access_type) || null
          };
        });
        return b.sort((f, V) => new Date(V.latest_activity) - new Date(f.latest_activity)), m(b), b;
      } catch (k) {
        return console.error("loadWorkspaces error", k), [];
      }
    }
  };
});
function eo() {
  const t = C({
    user: null,
    isAuthenticated: !1,
    isLoading: !0,
    error: null
  }), s = C(window.location.href), o = async () => {
    var w, k, d, c, U, p, u, L;
    try {
      t.value.isLoading = !0;
      const M = await ae(), { data: { session: b }, error: f } = await M.auth.getSession();
      if (f) {
        console.error("Error checking auth status:", f), t.value = {
          user: null,
          isAuthenticated: !1,
          isLoading: !1,
          error: f.message
        };
        return;
      }
      b != null && b.user ? (t.value = {
        user: {
          id: b.user.id,
          email: b.user.email || "",
          name: ((w = b.user.user_metadata) == null ? void 0 : w.full_name) || ((k = b.user.user_metadata) == null ? void 0 : k.name) || ((d = b.user.email) == null ? void 0 : d.split("@")[0]) || "User",
          avatar_url: ((c = b.user.user_metadata) == null ? void 0 : c.avatar_url) || ((U = b.user.user_metadata) == null ? void 0 : U.picture) || null,
          initials: (((p = b.user.user_metadata) == null ? void 0 : p.full_name) || ((u = b.user.user_metadata) == null ? void 0 : u.name) || ((L = b.user.email) == null ? void 0 : L.split("@")[0]) || "U").split(" ").map((V) => V[0]).join("").toUpperCase().substring(0, 2)
        },
        isAuthenticated: !0,
        isLoading: !1,
        error: null
      }, b.access_token && ye(ke, b.access_token), b.refresh_token && ye(_e, b.refresh_token), Te()) : t.value = {
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
  }, n = async (w, k) => {
    try {
      const d = await ae(), { error: c } = await d.auth.signInWithPassword({
        email: w,
        password: k
      });
      return c ? { success: !1, error: c.message } : (await o(), sessionStorage.setItem("post-login-redirect", s.value), { success: !0 });
    } catch (d) {
      return console.error("Login error:", d), { success: !1, error: d.message || "Login failed" };
    }
  }, m = async (w, k) => {
    var d;
    try {
      const c = await ae(), { data: U, error: p } = await c.auth.signUp({
        email: w,
        password: k
      });
      return p ? { success: !1, error: p.message } : U.user && !U.user.email_confirmed_at ? { success: !0, needsConfirmation: !0 } : (d = U.session) != null && d.user ? (await o(), sessionStorage.setItem("post-login-redirect", s.value), { success: !0 }) : { success: !1, error: "No session created" };
    } catch (c) {
      return console.error("Signup error:", c), { success: !1, error: c.message || "Signup failed" };
    }
  }, _ = async (w) => {
    try {
      const k = `${window.location.origin}/auth/callback`;
      console.log("[OAuth] Starting login with provider:", w), console.log("[OAuth] Redirect URL:", k), console.log("[OAuth] Current URL:", s.value), console.log("[OAuth] Current origin:", window.location.origin);
      const d = await ae(), { error: c } = await d.auth.signInWithOAuth({
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
      }, we(ke), we(_e), De();
    } catch (w) {
      console.error("Logout error:", w);
    }
  }, P = async (w) => {
    try {
      const k = await ae(), { error: d } = await k.auth.resetPasswordForEmail(w, {
        redirectTo: `${window.location.origin}/auth/reset-password`
      });
      return d ? { success: !1, error: d.message } : { success: !0 };
    } catch (k) {
      return console.error("Password reset error:", k), { success: !1, error: k.message || "Password reset failed" };
    }
  }, N = async () => {
    try {
      (await ae()).auth.onAuthStateChange((k, d) => {
        var c;
        switch (console.log("Auth state changed:", k, (c = d == null ? void 0 : d.user) == null ? void 0 : c.email), k) {
          case "SIGNED_IN":
            d != null && d.user && o();
            break;
          case "SIGNED_OUT":
            t.value = {
              user: null,
              isAuthenticated: !1,
              isLoading: !1,
              error: null
            }, we(ke), we(_e), De();
            break;
          case "TOKEN_REFRESHED":
            d != null && d.access_token && ye(ke, d.access_token), d != null && d.refresh_token && ye(_e, d.refresh_token), Te();
            break;
          case "USER_UPDATED":
            d != null && d.user && o();
            break;
        }
      });
    } catch (w) {
      console.warn("Failed to setup auth listener:", w);
    }
  };
  return Se(async () => {
    N(), await o();
  }), ue(() => window.location.href, (w) => {
    s.value = w;
  }), {
    authState: X(() => t.value),
    isAuthenticated: X(() => t.value.isAuthenticated),
    user: X(() => t.value.user),
    isLoading: X(() => t.value.isLoading),
    checkAuthStatus: o,
    loginWithEmail: n,
    signupWithEmail: m,
    loginWithProvider: _,
    logout: $,
    resetPassword: P,
    currentUrl: X(() => s.value)
  };
}
const so = { class: "login-container" }, oo = { class: "logo-section" }, ao = { class: "login-buttons" }, to = {
  key: 0,
  class: "forgot-password"
}, ro = { class: "signup-link" }, no = /* @__PURE__ */ le({
  __name: "LoginModal",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue", "login-success"],
  setup(t, { emit: s }) {
    const o = t, n = s, m = X({
      get: () => o.modelValue,
      set: (v) => n("update:modelValue", v)
    }), _ = C(!1), $ = C(!1), P = C(), { loginWithEmail: N, signupWithEmail: w, loginWithProvider: k, resetPassword: d } = eo(), c = Vs({
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
    })), p = () => {
      var v;
      _.value = !_.value, c.email = "", c.password = "", c.confirmPassword = "", (v = P.value) == null || v.clearValidate();
    }, u = () => {
      var v;
      m.value = !1, c.email = "", c.password = "", c.confirmPassword = "", _.value = !1, (v = P.value) == null || v.clearValidate();
    }, L = async () => {
      if (P.value)
        try {
          await P.value.validate(), $.value = !0, _.value ? await b() : await M();
        } catch (v) {
          console.error("Form validation failed:", v);
        } finally {
          $.value = !1;
        }
    }, M = async () => {
      const v = await N(c.email, c.password);
      v.success ? (j.success("Login successful"), n("login-success", { email: c.email }), u()) : j.error("Login failed: " + v.error);
    }, b = async () => {
      const v = await w(c.email, c.password);
      v.success ? v.needsConfirmation ? j.success("Please check your email to confirm your account") : (j.success("Account created successfully"), n("login-success", { email: c.email }), u()) : j.error("Signup failed: " + v.error);
    }, f = async (v) => {
      const S = await k(v);
      S.success ? j.success("Redirecting to login provider...") : j.error("Login failed: " + S.error);
    }, V = async () => {
      if (!c.email) {
        j.warning("Please enter your email address first");
        return;
      }
      const v = await d(c.email);
      v.success ? j.success("Password reset email sent! Please check your inbox.") : j.error("Failed to send reset email: " + v.error);
    };
    return (v, S) => {
      const te = ne("el-icon"), q = ne("el-input"), B = ne("el-form-item"), z = ne("el-button"), ie = ne("el-dialog");
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
        default: g(() => [
          r("div", so, [
            r("div", oo, [
              r("h2", null, K(_.value ? "Create Account" : "Welcome Back"), 1),
              r("p", null, K(_.value ? "Sign up to get started with your account" : "Sign in to continue to your account"), 1)
            ]),
            h(T(Ws), {
              model: c,
              rules: U.value,
              ref_key: "formRef",
              ref: P,
              class: "login-form",
              onSubmit: ge(L, ["prevent"])
            }, {
              default: g(() => [
                h(B, { prop: "email" }, {
                  default: g(() => [
                    h(q, {
                      modelValue: c.email,
                      "onUpdate:modelValue": S[0] || (S[0] = (G) => c.email = G),
                      placeholder: "Email",
                      type: "email",
                      size: "large",
                      class: "form-input"
                    }, {
                      prefix: g(() => [
                        h(te, null, {
                          default: g(() => [
                            h(T(Fs))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                h(B, { prop: "password" }, {
                  default: g(() => [
                    h(q, {
                      modelValue: c.password,
                      "onUpdate:modelValue": S[1] || (S[1] = (G) => c.password = G),
                      placeholder: "Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: g(() => [
                        h(te, null, {
                          default: g(() => [
                            h(T(Qe))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                _.value ? (y(), oe(B, {
                  key: 0,
                  prop: "confirmPassword"
                }, {
                  default: g(() => [
                    h(q, {
                      modelValue: c.confirmPassword,
                      "onUpdate:modelValue": S[2] || (S[2] = (G) => c.confirmPassword = G),
                      placeholder: "Confirm Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: g(() => [
                        h(te, null, {
                          default: g(() => [
                            h(T(Qe))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                })) : Y("", !0),
                h(B, null, {
                  default: g(() => [
                    h(z, {
                      type: "primary",
                      class: "submit-button",
                      loading: $.value,
                      onClick: L,
                      size: "large"
                    }, {
                      default: g(() => [
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
            S[10] || (S[10] = r("div", { class: "divider" }, [
              r("span", null, "Or continue with")
            ], -1)),
            r("div", ao, [
              h(z, {
                class: "login-button google",
                onClick: S[3] || (S[3] = (G) => f("google")),
                size: "large"
              }, {
                default: g(() => [...S[7] || (S[7] = [
                  r("span", { class: "social-icon" }, "G", -1),
                  J(" Google ", -1)
                ])]),
                _: 1
              }),
              h(z, {
                class: "login-button github",
                onClick: S[4] || (S[4] = (G) => f("github")),
                size: "large"
              }, {
                default: g(() => [...S[8] || (S[8] = [
                  r("span", { class: "social-icon" }, "⚡", -1),
                  J(" GitHub ", -1)
                ])]),
                _: 1
              }),
              h(z, {
                class: "login-button twitter",
                onClick: S[5] || (S[5] = (G) => f("twitter")),
                size: "large"
              }, {
                default: g(() => [...S[9] || (S[9] = [
                  r("span", { class: "social-icon" }, "X", -1),
                  J(" X (Twitter) ", -1)
                ])]),
                _: 1
              })
            ]),
            S[11] || (S[11] = r("div", { class: "terms" }, " By continuing, you agree to AI Workspace's Terms of Service and Privacy Policy ", -1)),
            _.value ? Y("", !0) : (y(), x("div", to, [
              r("a", {
                href: "#",
                onClick: ge(V, ["prevent"])
              }, "Forgot Password?")
            ])),
            r("div", ro, [
              J(K(_.value ? "Already have an account?" : "Don't have an account?") + " ", 1),
              r("a", {
                href: "#",
                onClick: ge(p, ["prevent"])
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
  for (const [n, m] of s)
    o[n] = m;
  return o;
}, io = /* @__PURE__ */ Ve(no, [["__scopeId", "data-v-684a3f28"]]), lo = { class: "session-loss-content" }, co = { class: "session-loss-icon" }, uo = { class: "session-loss-message" }, po = {
  key: 0,
  class: "session-loss-details"
}, fo = { class: "detail-item" }, go = { class: "detail-value" }, vo = { class: "detail-item" }, ho = { class: "detail-value" }, mo = { class: "session-loss-actions" }, wo = {
  key: 0,
  class: "retry-status"
}, ko = { class: "retry-message" }, _o = /* @__PURE__ */ le({
  __name: "SessionLossModal",
  props: {
    modelValue: { type: Boolean },
    sessionLossEvent: {},
    canRetrySession: { type: Boolean }
  },
  emits: ["update:modelValue", "retry", "login", "refresh"],
  setup(t, { emit: s }) {
    const o = t, n = s, m = C(!1), _ = C(0), $ = C(void 0), P = C(""), N = X({
      get: () => o.modelValue,
      set: (p) => n("update:modelValue", p)
    }), w = (p) => {
      switch (p) {
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
    }, k = (p) => p.toLocaleString(), d = async () => {
      if (m.value)
        return;
      m.value = !0, _.value = 0, $.value = void 0, P.value = "Attempting to restore session...";
      const p = setInterval(() => {
        _.value < 90 && (_.value += Math.random() * 20);
      }, 200);
      try {
        n("retry"), await new Promise((u) => setTimeout(u, 2e3)), _.value = 100, $.value = "success", P.value = "Session restored successfully!", setTimeout(() => {
          N.value = !1;
        }, 1e3);
      } catch {
        _.value = 100, $.value = "exception", P.value = "Failed to restore session. Please log in again.", j.error("Session restoration failed");
      } finally {
        clearInterval(p), setTimeout(() => {
          m.value = !1, _.value = 0, $.value = void 0, P.value = "";
        }, 3e3);
      }
    }, c = () => {
      n("login"), N.value = !1;
    }, U = () => {
      n("refresh"), window.location.reload();
    };
    return ue(() => o.sessionLossEvent, (p) => {
      p && (m.value = !1, _.value = 0, $.value = void 0, P.value = "");
    }), (p, u) => (y(), oe(T($s), {
      modelValue: N.value,
      "onUpdate:modelValue": u[0] || (u[0] = (L) => N.value = L),
      title: "Session Expired",
      width: "500px",
      "close-on-click-modal": !1,
      "close-on-press-escape": !1,
      "show-close": !1,
      class: "session-loss-modal",
      center: ""
    }, {
      default: g(() => {
        var L;
        return [
          r("div", lo, [
            r("div", co, [
              h(T(Ee), {
                size: "48",
                color: "#f56c6c"
              }, {
                default: g(() => [
                  h(T(ss))
                ]),
                _: 1
              })
            ]),
            r("div", uo, [
              u[3] || (u[3] = r("h3", null, "Your session has expired", -1)),
              r("p", null, K(((L = p.sessionLossEvent) == null ? void 0 : L.message) || "Please log in again to continue using the application."), 1),
              p.sessionLossEvent ? (y(), x("div", po, [
                r("div", fo, [
                  u[1] || (u[1] = r("span", { class: "detail-label" }, "Issue:", -1)),
                  r("span", go, K(w(p.sessionLossEvent.type)), 1)
                ]),
                r("div", vo, [
                  u[2] || (u[2] = r("span", { class: "detail-label" }, "Time:", -1)),
                  r("span", ho, K(k(p.sessionLossEvent.timestamp)), 1)
                ])
              ])) : Y("", !0)
            ]),
            r("div", mo, [
              p.canRetrySession && !m.value ? (y(), oe(T(Pe), {
                key: 0,
                type: "primary",
                onClick: d,
                loading: m.value
              }, {
                default: g(() => [
                  h(T(Ee), null, {
                    default: g(() => [
                      h(T(Ze))
                    ]),
                    _: 1
                  }),
                  u[4] || (u[4] = J(" Try Again ", -1))
                ]),
                _: 1
              }, 8, ["loading"])) : Y("", !0),
              h(T(Pe), {
                type: "primary",
                onClick: c,
                disabled: m.value
              }, {
                default: g(() => [
                  h(T(Ee), null, {
                    default: g(() => [
                      h(T(Ne))
                    ]),
                    _: 1
                  }),
                  u[5] || (u[5] = J(" Log In ", -1))
                ]),
                _: 1
              }, 8, ["disabled"]),
              p.canRetrySession ? Y("", !0) : (y(), oe(T(Pe), {
                key: 1,
                type: "info",
                onClick: U,
                disabled: m.value
              }, {
                default: g(() => [
                  h(T(Ee), null, {
                    default: g(() => [
                      h(T(Ze))
                    ]),
                    _: 1
                  }),
                  u[6] || (u[6] = J(" Refresh Page ", -1))
                ]),
                _: 1
              }, 8, ["disabled"]))
            ]),
            m.value ? (y(), x("div", wo, [
              h(T(Us), {
                percentage: _.value,
                status: $.value,
                "stroke-width": 6
              }, null, 8, ["percentage", "status"]),
              r("p", ko, K(P.value), 1)
            ])) : Y("", !0)
          ])
        ];
      }),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const yo = /* @__PURE__ */ Ve(_o, [["__scopeId", "data-v-0dd27f7f"]]), So = { class: "aiworkspace-header" }, bo = {
  key: 0,
  class: "header-content header-loading"
}, Co = { class: "header-center" }, Ao = { class: "loading-text" }, Eo = { key: 0 }, Io = { key: 1 }, Lo = {
  key: 1,
  class: "header-content header-fallback"
}, Vo = {
  key: 2,
  class: "header-content header-restricted"
}, Mo = { class: "header-center" }, Wo = { class: "restricted-text" }, $o = { class: "header-right" }, Uo = {
  key: 3,
  class: "header-content"
}, Ro = { class: "header-left" }, Po = { class: "logo-section" }, xo = {
  href: "/",
  class: "logo"
}, Do = ["src"], To = {
  key: 1,
  class: "text-logo"
}, No = {
  key: 0,
  class: "header-center"
}, Ho = { class: "main-navigation" }, Oo = { class: "nav-item" }, Fo = {
  href: "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard",
  class: "nav-link"
}, Bo = { class: "workspace-dropdown-item" }, zo = ["href"], jo = { class: "workspace-icon" }, Go = {
  key: 1,
  class: "nav-divider"
}, Ko = { class: "nav-item" }, qo = ["href", "onClick"], Jo = { class: "header-right" }, Yo = { class: "user-profile" }, Xo = { class: "user-info" }, Qo = { class: "user-name" }, Zo = { class: "user-avatar" }, ea = ["src", "alt"], sa = {
  key: 1,
  class: "avatar-placeholder"
}, oa = { class: "version-info" }, aa = { class: "version-hash" }, ta = {
  key: 4,
  class: "header-content header-unauthenticated"
}, ra = { class: "header-left" }, na = { class: "logo-section" }, ia = {
  href: "/",
  class: "logo"
}, la = ["src"], ca = {
  key: 1,
  class: "text-logo"
}, ua = { class: "header-right" }, da = { class: "workspace-list" }, pa = ["onClick"], fa = { class: "workspace-icon" }, ga = { class: "workspace-details" }, va = { class: "workspace-members" }, ha = {
  key: 0,
  class: "current-indicator"
}, ma = { class: "update-content" }, wa = { class: "update-actions" }, be = 50, ka = /* @__PURE__ */ le({
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
    const o = t, n = s, { authState: m, logout: _, isLoading: $ } = qs(), {
      isSessionValid: P,
      sessionLossEvent: N,
      hasSessionLoss: w,
      canRetrySession: k,
      retrySession: d,
      clearSessionLoss: c
    } = Qs(), U = () => {
      try {
        return Zs();
      } catch {
        return console.warn("[AIWorkspaceHeader] Pinia not initialized yet, using fallback state"), null;
      }
    }, p = () => {
      try {
        return typeof window < "u" ? !!window.__PINIA__ || !!window.Pinia : !1;
      } catch {
        return !1;
      }
    }, u = C(U()), L = X(() => !!u.value), M = C(0), b = () => {
      if (!u.value && M.value < be) {
        if (p()) {
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
    const f = C(!1), V = C(!1), v = C(!1), S = C([]), te = C([]), q = C({
      name: "",
      email: "",
      avatar_url: null,
      initials: ""
    }), B = C("unknown"), z = C("unknown"), ie = C(!1), G = C(null), A = C(null), H = C(!1), O = C([]), E = C([]), F = C(!1);
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
        const i = new URLSearchParams(window.location.search).get("workspace_id");
        if (i)
          return i;
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
      if (F.value = a, a) {
        u.value.currentWorkspace = null, localStorage.removeItem("current_workspace"), console.log("[AIWorkspaceHeader] Auto-selected all-workspace mode from URL");
        return;
      }
      const e = re();
      if (e)
        try {
          E.value.length === 0 && await ze();
          const i = E.value.find((l) => l.id.toString() === e);
          i ? (u.value.setCurrentWorkspace(i), console.log(`[AIWorkspaceHeader] Auto-selected workspace from URL: ${i.title} (ID: ${i.id})`), n("workspaceChange", i)) : console.warn(`[AIWorkspaceHeader] Workspace with ID ${e} not found in available workspaces`);
        } catch (i) {
          console.error("[AIWorkspaceHeader] Error auto-selecting workspace from URL:", i);
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
    ]), Fe = X(() => F.value ? de.value : ce.value), rs = X(() => {
      try {
        const a = Q.value;
        let e = "";
        const i = a.match(/\/all-workspace\/([^\/]+)/);
        if (i)
          e = i[1];
        else {
          const l = a.match(/\/single-workspace\/\d+\/([^\/]+)/);
          if (l)
            e = l[1];
          else {
            const D = a.match(/\/([^\/]+)$/);
            D && (e = D[1]);
          }
        }
        if (e) {
          const l = Fe.value.find(
            (D) => D.key === e || D.url.includes(`/${e}`) || D.url === `/${e}`
          );
          if (l)
            return l.label;
        }
        return "Dashboard";
      } catch (a) {
        return console.warn("[AIWorkspaceHeader] Error determining current section:", a), "Dashboard";
      }
    }), ns = (a) => {
      const e = /* @__PURE__ */ new Map();
      a.forEach((D) => {
        e.set(D.id, { ...D, children: [] });
      });
      const i = [];
      e.forEach((D) => {
        D.parent_workspace_id && e.has(D.parent_workspace_id) ? e.get(D.parent_workspace_id).children.push(D) : i.push(D);
      });
      const l = (D) => {
        D.sort((se, pe) => se.title.localeCompare(pe.title)), D.forEach((se) => {
          se.children && l(se.children);
        });
      };
      return l(i), i;
    }, Be = (a, e = 0, i = []) => (a.forEach((l) => {
      i.push({ ...l, level: e }), l.children && l.children.length && Be(l.children, e + 1, i);
    }), i), ze = async () => {
      var a, e, i;
      try {
        const l = await ((a = u.value) == null ? void 0 : a.loadWorkspaces());
        if (O.value = ns(l || []), E.value = Be(O.value), te.value = E.value, S.value = E.value, o.currentWorkspaceId) {
          const D = E.value.find((se) => {
            var pe;
            return se.id.toString() === ((pe = o.currentWorkspaceId) == null ? void 0 : pe.toString());
          });
          D && ((e = u.value) == null || e.setCurrentWorkspace(D));
        } else
          !ee.value && E.value.length && ((i = u.value) == null || i.setCurrentWorkspace(E.value[0]));
      } catch (l) {
        console.error("loadWorkspaces (header) error", l);
      }
    }, is = (a) => {
      if (console.log("Navigation command:", a), a === "all-workspace") {
        window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
        return;
      } else {
        const e = parseInt(a.replace("workspace-", ""));
        window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e}/dashboard`;
        return;
      }
    }, ls = (a) => {
      const e = ee.value, i = F.value;
      switch (a.key) {
        case "dashboard":
          i ? window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard" : e ? window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e.id}/dashboard` : window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
          break;
        case "outlines":
          if (i)
            window.location.href = "https://outline.aiworkspace.pro/all-workspace/outlines";
          else if (e) {
            const l = `https://outline.aiworkspace.pro/single-workspace/${e.id}/outlines`;
            window.location.href = l;
          } else
            window.location.href = "https://outline.aiworkspace.pro";
          break;
        case "canvas":
          if (i)
            window.location.href = "https://canvas.aiworkspace.pro/all-workspace/canvas";
          else if (e) {
            const l = `https://canvas.aiworkspace.pro/single-workspace/${e.id}/canvas`;
            window.location.href = l;
          } else
            window.location.href = "https://canvas.aiworkspace.pro";
          break;
        case "files":
          if (i)
            window.location.href = "https://drive.aiworkspace.pro/all-workspace/files";
          else if (e) {
            const l = `https://drive.aiworkspace.pro/single-workspace/${e.id}/files`;
            window.location.href = l;
          } else
            window.location.href = "https://drive.aiworkspace.pro";
          break;
        case "tasks":
          if (i)
            window.location.href = "https://tasks.aiworkspace.pro/all-workspace/tasks";
          else if (e) {
            const l = `https://tasks.aiworkspace.pro/single-workspace/${e.id}/tasks`;
            window.location.href = l;
          } else
            window.location.href = "https://tasks.aiworkspace.pro";
          break;
        case "goals":
          if (i)
            window.location.href = "https://app.aiworkspace.pro/all-workspace/goals";
          else if (e) {
            const l = `https://app.aiworkspace.pro/single-workspace/${e.id}/goals`;
            window.location.href = l;
          } else
            window.location.href = "https://app.aiworkspace.pro/all-workspace/goals";
          break;
        case "events":
          if (i)
            window.location.href = "https://app.aiworkspace.pro/all-workspace/events";
          else if (e) {
            const l = `https://app.aiworkspace.pro/single-workspace/${e.id}/events`;
            window.location.href = l;
          } else
            window.location.href = "https://app.aiworkspace.pro/all-workspace/events";
          break;
        case "contacts":
          if (i)
            window.location.href = "https://app.aiworkspace.pro/all-workspace/contacts";
          else if (e) {
            const l = `https://app.aiworkspace.pro/single-workspace/${e.id}/contacts`;
            window.location.href = l;
          } else
            window.location.href = "https://app.aiworkspace.pro/all-workspace/contacts";
          break;
        case "ai-portfolios":
          if (i)
            window.location.href = "https://spreadsheet.aiworkspace.pro/all-workspace/ai-portfolios";
          else if (e) {
            const l = `https://spreadsheet.aiworkspace.pro/single-workspace/${e.id}/ai-portfolios`;
            window.location.href = l;
          } else
            window.location.href = "https://spreadsheet.aiworkspace.pro";
          break;
        case "settings":
          if (i)
            window.location.href = "https://settings.aiworkspace.pro/all-workspace/settings";
          else if (e) {
            const l = `https://settings.aiworkspace.pro/single-workspace/${e.id}/settings`;
            window.location.href = l;
          } else
            window.location.href = "https://settings.aiworkspace.pro";
          break;
        default:
          if (i) {
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
    }, cs = (a) => {
      const e = ee.value, i = F.value;
      switch (a.key) {
        case "dashboard":
          return i ? "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard" : e ? `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e.id}/dashboard` : "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
        case "ai-portfolios":
          return i ? "https://spreadsheet.aiworkspace.pro/all-workspace/ai-portfolios" : e ? `https://spreadsheet.aiworkspace.pro/single-workspace/${e.id}/ai-portfolios` : "https://spreadsheet.aiworkspace.pro";
        case "outlines":
          return i ? "https://outline.aiworkspace.pro/all-workspace/outlines" : e ? `https://outline.aiworkspace.pro/single-workspace/${e.id}/outlines` : "https://outline.aiworkspace.pro";
        case "canvas":
          return i ? "https://canvas.aiworkspace.pro/all-workspace/canvas" : e ? `https://canvas.aiworkspace.pro/single-workspace/${e.id}/canvas` : "https://canvas.aiworkspace.pro";
        case "files":
          return i ? "https://drive.aiworkspace.pro/all-workspace/files" : e ? `https://drive.aiworkspace.pro/single-workspace/${e.id}/files` : "https://drive.aiworkspace.pro";
        case "tasks":
          return i ? "https://tasks.aiworkspace.pro/all-workspace/tasks" : e ? `https://tasks.aiworkspace.pro/single-workspace/${e.id}/tasks` : "https://tasks.aiworkspace.pro";
        case "goals":
          return i ? "https://app.aiworkspace.pro/all-workspace/goals" : e ? `https://app.aiworkspace.pro/single-workspace/${e.id}/goals` : "https://app.aiworkspace.pro/all-workspace/goals";
        case "events":
          return i ? "https://app.aiworkspace.pro/all-workspace/events" : e ? `https://app.aiworkspace.pro/single-workspace/${e.id}/events` : "https://app.aiworkspace.pro/all-workspace/events";
        case "contacts":
          return i ? "https://app.aiworkspace.pro/all-workspace/contacts" : e ? `https://app.aiworkspace.pro/single-workspace/${e.id}/contacts` : "https://app.aiworkspace.pro/all-workspace/contacts";
        case "settings":
          return i ? "https://settings.aiworkspace.pro/all-workspace/settings" : e ? `https://settings.aiworkspace.pro/single-workspace/${e.id}/settings` : "https://settings.aiworkspace.pro";
        default:
          return i ? `https://app.aiworkspace.pro/all-workspace/${a.key}` : e ? `https://app.aiworkspace.pro/single-workspace/${e.id}/${a.key}` : `https://app.aiworkspace.pro/${a.key}`;
      }
    }, Ce = (a) => {
      switch (a) {
        case "profile":
          o.onProfileClick ? o.onProfileClick() : j.info("Profile settings coming soon");
          break;
        case "workspaces":
          f.value = !0;
          break;
        case "logout":
          ds();
          break;
      }
    }, je = (a) => {
      var e;
      (e = u.value) == null || e.setCurrentWorkspace(a), f.value = !1, n("workspaceChange", a), j.success(`Switched to ${a.title}`);
    }, us = () => {
      Ye.prompt("Enter workspace name:", "Create New Workspace", {
        confirmButtonText: "Create",
        cancelButtonText: "Cancel",
        inputPattern: /\S/,
        inputErrorMessage: "Workspace name cannot be empty"
      }).then(({ value: a }) => {
        var i;
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
        S.value.push(e), (i = u.value) == null || i.setWorkspaces(S.value), je(e), j.success(`Created workspace: ${a}`);
      }).catch(() => {
      });
    }, ds = () => {
      Ye.confirm(
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
        })), n("logout"), j.success("Signed out successfully");
      }).catch(() => {
      });
    }, Me = async () => {
      var a, e;
      if (m.value.user) {
        const i = m.value.user;
        q.value = {
          name: i.name || ((a = i.email) == null ? void 0 : a.split("@")[0]) || "User",
          email: i.email || "",
          avatar_url: i.avatar_url || null,
          initials: (i.name || ((e = i.email) == null ? void 0 : e.split("@")[0]) || "U").split(" ").map((l) => l[0]).join("").toUpperCase().substring(0, 2)
        }, o.showWorkspaceSelector && await ze();
      }
    };
    ue(() => m.value.user, (a) => {
      var e;
      a ? Me() : (q.value = { name: "", email: "", avatar_url: null, initials: "" }, (e = u.value) == null || e.clearData());
    }), ue(w, (a) => {
      a && Z.value && (console.log("[AIWorkspaceHeader] Session loss detected, showing modal"), v.value = !0);
    }), ue(() => o.currentWorkspaceId, (a) => {
      var e;
      if (a && E.value.length) {
        const i = E.value.find((l) => l.id.toString() === a.toString());
        i && ((e = u.value) == null || e.setCurrentWorkspace(i));
      }
    }), Se(async () => {
      Z.value && (await Me(), await R()), await ms(), Ke(), bs();
    });
    const ps = async (a) => {
      console.log("Login successful:", a), V.value = !1, await Me(), n("login"), j.success("Welcome back!");
    }, fs = async () => {
      console.log("[AIWorkspaceHeader] Retrying session..."), await d() ? (v.value = !1, c(), j.success("Session restored successfully!")) : j.error("Failed to restore session. Please log in again.");
    }, gs = () => {
      console.log("[AIWorkspaceHeader] Opening login modal from session loss"), v.value = !1, V.value = !0;
    }, vs = () => {
      console.log("[AIWorkspaceHeader] Refreshing page due to session loss"), window.location.reload();
    }, hs = () => {
      M.value = 0, b(), j.success("Manual Pinia retry initiated.");
    }, ms = async () => {
      try {
        const a = await fetch("/version.json");
        if (a.ok) {
          const e = a.headers.get("content-type");
          if (e && e.includes("application/json"))
            try {
              const i = await a.json();
              console.log("Version data received:", i), B.value = i.shortCommitHash || "unknown", z.value = i.fullCommitHash || "unknown", console.log("✅ Loaded commit hash from version.json:", B.value);
              return;
            } catch {
              console.log("Failed to parse version.json, trying fallback methods...");
            }
        }
        console.log("🔄 version.json not available, trying automatic detection..."), await Ge();
      } catch (a) {
        console.log("Error loading version.json, trying automatic detection...", a), await Ge();
      }
    }, Ge = async () => {
      try {
        const a = await ws();
        if (a) {
          const D = await ks(a);
          if (D) {
            B.value = D.substring(0, 7), z.value = D, console.log("✅ Loaded commit hash from GitHub API:", B.value);
            return;
          }
        }
        const e = await _s();
        if (e && e.version) {
          B.value = e.version, z.value = e.version, console.log("✅ Loaded version from package.json:", B.value);
          return;
        }
        const i = await ys();
        if (i) {
          B.value = i, z.value = i, console.log("✅ Loaded version from build info:", B.value);
          return;
        }
        const l = Date.now().toString(36);
        B.value = l.substring(0, 7), z.value = l, console.log("✅ Using timestamp-based version:", B.value);
      } catch (a) {
        console.warn("❌ All automatic detection methods failed:", a), B.value = "unknown", z.value = "unknown";
      }
    }, ws = async () => {
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
    }, ks = async (a) => {
      try {
        const e = ["main", "master"];
        for (const i of e)
          try {
            const l = await fetch(`https://api.github.com/repos/${a.owner}/${a.repo}/commits/${i}`);
            if (l.ok)
              return (await l.json()).sha;
          } catch (l) {
            console.log(`Could not get commit from ${i} branch:`, l);
          }
      } catch (e) {
        console.log("Could not get commit from GitHub API:", e);
      }
      return null;
    }, _s = async () => {
      try {
        const a = await fetch("/package.json");
        if (a.ok)
          return await a.json();
      } catch (a) {
        console.log("Could not get package.json:", a);
      }
      return null;
    }, ys = async () => {
      try {
        const a = ["/build-manifest.json", "/build-info.json", "/.next/build-manifest.json"];
        for (const e of a)
          try {
            const i = await fetch(e);
            if (i.ok) {
              const l = await i.json();
              if (l.version || l.commitHash || l.buildId)
                return l.version || l.commitHash || l.buildId;
            }
          } catch {
          }
      } catch (a) {
        console.log("Could not get build info:", a);
      }
      return null;
    }, Ss = async () => {
      try {
        if (z.value === "unknown") {
          j.warning("Version information not available");
          return;
        }
        await navigator.clipboard.writeText(z.value), j.success("Version information copied to clipboard!");
      } catch (a) {
        console.error("Failed to copy version info:", a), j.error("Failed to copy version info");
      }
    }, Ke = async () => {
      if (!H.value) {
        H.value = !0;
        try {
          const a = Date.now(), e = await fetch(`/version.json?t=${a}`);
          if (!e.ok)
            throw new Error("Failed to fetch version info");
          const i = e.headers.get("content-type");
          if (!i || !i.includes("application/json")) {
            console.warn("Version check skipped: version.json not properly configured");
            return;
          }
          const l = await e.json();
          G.value = l.fullCommitHash, z.value !== G.value && (ie.value = !0, console.log("Version mismatch detected:", {
            currentVersion: z.value,
            latestVersion: G.value,
            serverBuildTime: l.buildTime
          }));
        } catch (a) {
          console.error("Error checking for updates:", a);
        } finally {
          H.value = !1;
        }
      }
    }, bs = () => {
      A.value = setInterval(() => {
        Ke();
      }, 30 * 1e3);
    }, Cs = () => {
      console.log("User reloaded for update:", {
        currentVersion: z.value,
        latestVersion: G.value
      }), window.location.reload();
    }, qe = () => {
      ie.value = !1, console.log("Update alert dismissed:", {
        currentVersion: z.value,
        latestVersion: G.value
      });
    };
    return es(() => {
      A.value && clearInterval(A.value);
    }), (a, e) => {
      const i = ne("el-icon"), l = ne("el-button"), D = ne("el-tag"), se = ne("el-dropdown-item"), pe = ne("el-dropdown-menu"), We = ne("el-dropdown"), As = ne("el-dialog"), Es = ne("el-alert");
      return y(), x("header", So, [
        !L.value && M.value < be || T($) ? (y(), x("div", bo, [
          e[10] || (e[10] = Ae('<div class="header-left" data-v-13064358><div class="logo-section" data-v-13064358><a href="/" class="logo" data-v-13064358><div class="text-logo" data-v-13064358><span class="logo-text" data-v-13064358>AI Workspace</span></div></a></div></div>', 1)),
          r("div", Co, [
            r("span", Ao, [
              T($) ? (y(), x("span", Eo, "Syncing authentication...")) : (y(), x("span", Io, "Initializing..."))
            ])
          ])
        ])) : !L.value && M.value >= be ? (y(), x("div", Lo, [
          e[12] || (e[12] = Ae('<div class="header-left" data-v-13064358><div class="logo-section" data-v-13064358><a href="/" class="logo" data-v-13064358><div class="text-logo" data-v-13064358><span class="logo-text" data-v-13064358>AI Workspace</span></div></a></div></div>', 1)),
          r("div", { class: "header-center" }, [
            e[11] || (e[11] = r("span", { class: "fallback-text" }, "Header Ready (Fallback Mode)", -1)),
            r("button", {
              onClick: hs,
              class: "retry-button"
            }, "Retry Pinia")
          ]),
          e[13] || (e[13] = Ae('<div class="header-right" data-v-13064358><div class="user-profile" data-v-13064358><div class="user-info" data-v-13064358><span class="user-name" data-v-13064358>User</span></div><div class="user-avatar" data-v-13064358><span class="avatar-placeholder" data-v-13064358>U</span></div></div></div>', 1))
        ])) : Z.value && !T(P) ? (y(), x("div", Vo, [
          e[16] || (e[16] = Ae('<div class="header-left" data-v-13064358><div class="logo-section" data-v-13064358><a href="/" class="logo" data-v-13064358><div class="text-logo" data-v-13064358><span class="logo-text" data-v-13064358>AI Workspace</span></div></a></div></div>', 1)),
          r("div", Mo, [
            r("span", Wo, [
              h(i, null, {
                default: g(() => [
                  h(T(ss))
                ]),
                _: 1
              }),
              e[14] || (e[14] = J(" Session expired - Please log in again ", -1))
            ])
          ]),
          r("div", $o, [
            h(l, {
              type: "primary",
              onClick: e[0] || (e[0] = (I) => V.value = !0)
            }, {
              default: g(() => [
                h(i, null, {
                  default: g(() => [
                    h(T(Ne))
                  ]),
                  _: 1
                }),
                e[15] || (e[15] = J(" Log In ", -1))
              ]),
              _: 1
            })
          ])
        ])) : Z.value && T(P) ? (y(), x("div", Uo, [
          r("div", Ro, [
            r("div", Po, [
              r("a", xo, [
                a.customLogo ? (y(), x("img", {
                  key: 0,
                  src: a.customLogo,
                  alt: "AIWorkspace",
                  class: "logo-image"
                }, null, 8, Do)) : (y(), x("div", To, [...e[17] || (e[17] = [
                  r("span", { class: "logo-text" }, "AI Workspace", -1)
                ])]))
              ])
            ])
          ]),
          a.showSecondaryNavigation ? (y(), x("div", No, [
            r("nav", Ho, [
              a.showWorkspaceSelector ? (y(), oe(We, {
                key: 0,
                onCommand: is,
                trigger: "hover"
              }, {
                dropdown: g(() => [
                  h(pe, { class: "workspace-tree-dropdown" }, {
                    default: g(() => [
                      h(se, {
                        command: "all-workspace",
                        class: $e({ active: F.value })
                      }, {
                        default: g(() => [
                          r("a", Fo, [
                            r("div", Bo, [
                              e[19] || (e[19] = r("span", { class: "workspace-icon" }, "🌐", -1)),
                              e[20] || (e[20] = r("span", null, "All workspace", -1)),
                              F.value ? (y(), oe(D, {
                                key: 0,
                                size: "small",
                                type: "success"
                              }, {
                                default: g(() => [...e[18] || (e[18] = [
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
                      (y(!0), x(Ue, null, Re(E.value, (I) => (y(), oe(se, {
                        key: I.id,
                        command: `workspace-${I.id}`
                      }, {
                        default: g(() => {
                          var he;
                          return [
                            r("a", {
                              href: `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${I.id}/dashboard`,
                              class: "nav-link"
                            }, [
                              r("div", {
                                class: "workspace-dropdown-item",
                                style: Ms({ paddingLeft: (I.level || 0) * 16 + "px" })
                              }, [
                                r("span", jo, K(I.children && I.children.length ? "📁" : "📄"), 1),
                                r("span", null, K(I.title), 1),
                                I.id === ((he = ee.value) == null ? void 0 : he.id) ? (y(), oe(D, {
                                  key: 0,
                                  size: "small",
                                  type: "success"
                                }, {
                                  default: g(() => [...e[21] || (e[21] = [
                                    J("Current", -1)
                                  ])]),
                                  _: 1
                                })) : Y("", !0)
                              ], 4)
                            ], 8, zo)
                          ];
                        }),
                        _: 2
                      }, 1032, ["command"]))), 128)),
                      E.value.length === 0 ? (y(), oe(se, {
                        key: 1,
                        disabled: ""
                      }, {
                        default: g(() => [...e[22] || (e[22] = [
                          J(" No workspaces ", -1)
                        ])]),
                        _: 1
                      })) : Y("", !0)
                    ]),
                    _: 1
                  })
                ]),
                default: g(() => {
                  var I;
                  return [
                    r("span", Oo, [
                      J(K(F.value ? "All workspace" : ((I = ee.value) == null ? void 0 : I.title) || "Select Workspace") + " ", 1),
                      h(i, { class: "nav-arrow" }, {
                        default: g(() => [
                          h(T(Xe))
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }),
                _: 1
              })) : Y("", !0),
              a.showWorkspaceSelector ? (y(), x("span", Go, "/")) : Y("", !0),
              a.showSecondaryNavigation ? (y(), oe(We, {
                key: 2,
                trigger: "hover"
              }, {
                dropdown: g(() => [
                  h(pe, null, {
                    default: g(() => [
                      (y(!0), x(Ue, null, Re(Fe.value, (I) => (y(), oe(se, {
                        key: I.label,
                        class: $e({ active: I.active })
                      }, {
                        default: g(() => [
                          r("a", {
                            href: cs(I),
                            class: "nav-link",
                            onClick: ge((he) => ls(I), ["prevent"])
                          }, K(I.label), 9, qo)
                        ]),
                        _: 2
                      }, 1032, ["class"]))), 128))
                    ]),
                    _: 1
                  })
                ]),
                default: g(() => [
                  r("span", Ko, [
                    J(K(rs.value) + " ", 1),
                    h(i, { class: "nav-arrow" }, {
                      default: g(() => [
                        h(T(Xe))
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })) : Y("", !0)
            ])
          ])) : Y("", !0),
          r("div", Jo, [
            h(We, {
              onCommand: Ce,
              trigger: "click",
              placement: "bottom-end"
            }, {
              dropdown: g(() => [
                h(pe, null, {
                  default: g(() => [
                    h(se, null, {
                      default: g(() => [
                        r("a", {
                          href: "/profile",
                          class: "nav-link",
                          onClick: e[1] || (e[1] = ge((I) => Ce("profile"), ["prevent"]))
                        }, "Profile Settings")
                      ]),
                      _: 1
                    }),
                    a.showWorkspaceSelector ? (y(), oe(se, { key: 0 }, {
                      default: g(() => [
                        r("a", {
                          href: "#switch-workspace",
                          class: "nav-link",
                          onClick: e[2] || (e[2] = ge((I) => Ce("workspaces"), ["prevent"]))
                        }, "Switch Workspace")
                      ]),
                      _: 1
                    })) : Y("", !0),
                    h(se, {
                      onClick: Ss,
                      class: "version-item"
                    }, {
                      default: g(() => [
                        r("div", oa, [
                          e[23] || (e[23] = r("span", { class: "version-label" }, "Version:", -1)),
                          r("span", aa, K(B.value), 1)
                        ])
                      ]),
                      _: 1
                    }),
                    h(se, { divided: "" }, {
                      default: g(() => [
                        r("a", {
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
              default: g(() => [
                r("div", Yo, [
                  r("div", Xo, [
                    r("span", Qo, K(q.value.name), 1)
                  ]),
                  r("div", Zo, [
                    q.value.avatar_url ? (y(), x("img", {
                      key: 0,
                      src: q.value.avatar_url,
                      alt: q.value.name
                    }, null, 8, ea)) : (y(), x("span", sa, K(q.value.initials), 1))
                  ])
                ])
              ]),
              _: 1
            })
          ])
        ])) : (y(), x("div", ta, [
          r("div", ra, [
            r("div", na, [
              r("a", ia, [
                a.customLogo ? (y(), x("img", {
                  key: 0,
                  src: a.customLogo,
                  alt: "AIWorkspace",
                  class: "logo-image"
                }, null, 8, la)) : (y(), x("div", ca, [...e[24] || (e[24] = [
                  r("span", { class: "logo-text" }, "AI Workspace", -1)
                ])]))
              ])
            ])
          ]),
          e[26] || (e[26] = r("div", { class: "header-center" }, [
            r("span", { class: "welcome-text" }, "Welcome to AI Workspace")
          ], -1)),
          r("div", ua, [
            h(l, {
              type: "primary",
              size: "large",
              class: "login-button",
              onClick: e[4] || (e[4] = (I) => V.value = !0)
            }, {
              default: g(() => [
                h(i, null, {
                  default: g(() => [
                    h(T(Ne))
                  ]),
                  _: 1
                }),
                e[25] || (e[25] = J(" Login / Signup ", -1))
              ]),
              _: 1
            })
          ])
        ])),
        Z.value && a.showWorkspaceSelector ? (y(), oe(As, {
          key: 5,
          modelValue: f.value,
          "onUpdate:modelValue": e[6] || (e[6] = (I) => f.value = I),
          title: "Switch Workspace",
          width: "500px",
          onClose: e[7] || (e[7] = (I) => f.value = !1)
        }, {
          footer: g(() => [
            h(l, {
              onClick: e[5] || (e[5] = (I) => f.value = !1)
            }, {
              default: g(() => [...e[27] || (e[27] = [
                J("Cancel", -1)
              ])]),
              _: 1
            }),
            h(l, {
              type: "primary",
              onClick: us
            }, {
              default: g(() => [...e[28] || (e[28] = [
                J("Create New Workspace", -1)
              ])]),
              _: 1
            })
          ]),
          default: g(() => [
            r("div", da, [
              (y(!0), x(Ue, null, Re(S.value, (I) => {
                var he, Je;
                return y(), x("div", {
                  key: I.id,
                  class: $e(["workspace-item", { active: I.id === ((he = ee.value) == null ? void 0 : he.id) }]),
                  onClick: (Aa) => je(I)
                }, [
                  r("div", fa, K(I.children && I.children.length ? "📁" : "📄"), 1),
                  r("div", ga, [
                    r("h3", null, K(I.title), 1),
                    r("p", null, K(I.description), 1),
                    r("span", va, K(I.hasAccess ? "Active" : "Inactive"), 1)
                  ]),
                  I.id === ((Je = ee.value) == null ? void 0 : Je.id) ? (y(), x("div", ha, [
                    h(i, null, {
                      default: g(() => [
                        h(T(Ns))
                      ]),
                      _: 1
                    })
                  ])) : Y("", !0)
                ], 10, pa);
              }), 128))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])) : Y("", !0),
        h(io, {
          modelValue: V.value,
          "onUpdate:modelValue": e[8] || (e[8] = (I) => V.value = I),
          onLoginSuccess: ps
        }, null, 8, ["modelValue"]),
        h(yo, {
          modelValue: v.value,
          "onUpdate:modelValue": e[9] || (e[9] = (I) => v.value = I),
          "session-loss-event": T(N),
          "can-retry-session": T(k) || !1,
          onRetry: fs,
          onLogin: gs,
          onRefresh: vs
        }, null, 8, ["modelValue", "session-loss-event", "can-retry-session"]),
        ie.value ? (y(), oe(Es, {
          key: 6,
          title: "New Version Available!",
          type: "warning",
          closable: !0,
          onClose: qe,
          "show-icon": "",
          class: "update-alert"
        }, {
          default: g(() => [
            r("div", ma, [
              e[31] || (e[31] = r("p", null, "A new version of the application is available. Please reload to get the latest updates and features.", -1)),
              r("div", wa, [
                h(l, {
                  type: "primary",
                  size: "small",
                  onClick: Cs
                }, {
                  default: g(() => [...e[29] || (e[29] = [
                    J(" Reload Now ", -1)
                  ])]),
                  _: 1
                }),
                h(l, {
                  size: "small",
                  onClick: qe
                }, {
                  default: g(() => [...e[30] || (e[30] = [
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
const za = /* @__PURE__ */ Ve(ka, [["__scopeId", "data-v-13064358"]]), _a = { class: "auth-callback" }, ya = /* @__PURE__ */ le({
  __name: "AuthCallback",
  setup(t) {
    Se(async () => {
      console.log("[AuthCallback] Component mounted, starting callback processing..."), console.log("[AuthCallback] Current URL:", window.location.href), console.log("[AuthCallback] Current hash:", window.location.hash);
      try {
        await new Promise((m) => setTimeout(m, 500));
        const { data: o, error: n } = await Ie.auth.getSession();
        if (n) {
          console.error("Error processing callback:", n), s();
          return;
        }
        if (o != null && o.session) {
          const m = o.session.user;
          console.log("OAuth login successful:", m.email), o.session.access_token && ye(ke, o.session.access_token), o.session.refresh_token && ye(_e, o.session.refresh_token), Te();
          const _ = Ps();
          console.log("[callback] Post-login redirect URL:", _), console.log("[callback] Session storage redirect:", sessionStorage.getItem("post-login-redirect")), console.log("[callback] Local storage redirect:", localStorage.getItem("post-login-redirect"));
          const $ = _ || "/";
          if (console.log("[callback] Final redirect URL:", $), $.startsWith("/")) {
            const P = window.location.origin, N = `${P}${$}`;
            console.log("[callback] redirecting to:", N, { hostname: window.location.hostname, origin: P }), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
              window.location.href = N;
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
      const n = window.location.href.replace("/auth/callback", "");
      window.location.href = n;
    };
    return (o, n) => (y(), x("div", _a, [...n[0] || (n[0] = [
      r("div", { class: "callback-container" }, [
        r("div", { class: "loading-spinner" }, [
          r("div", { class: "spinner" })
        ]),
        r("h2", null, "Processing login..."),
        r("p", null, "Please wait while we complete your authentication.")
      ], -1)
    ])]));
  }
});
const ja = /* @__PURE__ */ Ve(ya, [["__scopeId", "data-v-acdf6325"]]), fe = class fe {
  constructor() {
    me(this, "validationCache", /* @__PURE__ */ new Map());
    me(this, "CACHE_DURATION", ts().validationCacheDuration);
  }
  // Helper function to get cookie value
  getCookieValue(s) {
    var m;
    if (typeof document > "u")
      return null;
    const n = `; ${document.cookie}`.split(`; ${s}=`);
    return n.length === 2 && ((m = n.pop()) == null ? void 0 : m.split(";").shift()) || null;
  }
  static getInstance() {
    return fe.instance || (fe.instance = new fe()), fe.instance;
  }
  /**
   * Validate current session with caching and improved reliability
   */
  async validateSession(s = !1) {
    var n, m;
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
        const p = {
          isValid: !1,
          needsLogin: !0,
          error: "No authentication tokens found",
          canRetry: !1
        };
        return this.cacheResult(o, p), p;
      }
      const P = await ae();
      let N = null, w = null;
      for (let p = 1; p <= 2; p++)
        try {
          const u = await P.auth.getSession();
          N = u.data.session, w = u.error;
          break;
        } catch (u) {
          if (console.warn(`[SessionValidator] Network error on attempt ${p}:`, u), p === 2) {
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
          needsLogin: ((n = w.message) == null ? void 0 : n.includes("Invalid JWT")) || ((m = w.message) == null ? void 0 : m.includes("JWT expired")),
          error: `Session error: ${w.message}`,
          canRetry: !0
        };
        return this.cacheResult(o, u), u;
      }
      if (!N || !N.user) {
        const p = {
          isValid: !1,
          needsLogin: !0,
          error: "No valid session found",
          canRetry: !0
        };
        return this.cacheResult(o, p), p;
      }
      const k = /* @__PURE__ */ new Date(), d = new Date(N.expires_at * 1e3), c = 5 * 60 * 1e3;
      if (k >= new Date(d.getTime() - c)) {
        const p = {
          isValid: !1,
          needsLogin: !0,
          error: "Session is close to expiry or expired",
          canRetry: !0
        };
        return this.cacheResult(o, p), p;
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
      const n = await ae(), { data: m, error: _ } = await n.auth.setSession({
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
me(fe, "instance");
let He = fe;
const Oe = He.getInstance(), Sa = (t = !1) => Oe.validateSession(t), ba = () => Oe.restoreSession(), Ca = () => Oe.clearCache();
async function Ga() {
  console.log("[SessionValidator] Initializing session validation...");
  let t = await Sa();
  return !t.isValid && t.canRetry && (console.log("[SessionValidator] Attempting session restoration..."), t = await ba()), t;
}
function Ka() {
  if (typeof window > "u")
    return () => {
    };
  const t = () => {
    console.log("[SessionValidator] Network restored, clearing cache for revalidation"), Ca();
  }, s = () => {
    console.log("[SessionValidator] Network lost, session validation may fail");
  };
  return window.addEventListener("online", t), window.addEventListener("offline", s), () => {
    window.removeEventListener("online", t), window.removeEventListener("offline", s);
  };
}
export {
  ke as ACCESS_COOKIE,
  za as AIWorkspaceHeader,
  ja as AuthCallback,
  ot as LS_ACCESS_KEY,
  at as LS_REFRESH_KEY,
  io as LoginModal,
  Le as PackageError,
  _e as REFRESH_COOKIE,
  yo as SessionLossModal,
  He as SessionValidator,
  tt as buildOAuthRedirectUrl,
  De as clearLocalStorageTokens,
  Ca as clearSessionCache,
  we as clearSessionCookie,
  Ya as configureSupabase,
  Ys as conservativeConfig,
  Ha as createSessionConfig,
  za as default,
  ve as defaultSessionConfig,
  Ba as detectionScenarios,
  os as developmentConfig,
  rt as ensureCrossSubdomainCookies,
  Js as fastDetectionConfig,
  Oa as getConfigByPreset,
  nt as getCookie,
  Ps as getPostLoginBase,
  ts as getSessionConfig,
  ae as getSupabase,
  Gs as handleBundlingError,
  Xa as handleDomainChangeAuth,
  Rs as initializeCrossSubdomainAuth,
  Ga as initializeSessionValidation,
  as as productionConfig,
  Qa as restoreCrossSubdomainSession,
  ba as restoreSession,
  xe as restoreSessionWithRetry,
  $a as safeExecute,
  Ua as safeExecuteAsync,
  Pa as safeGetCookie,
  Da as safeGetLocalStorage,
  Ra as safeImport,
  xa as safeSetCookie,
  Ta as safeSetLocalStorage,
  Na as safeWindowOperation,
  Xs as sessionConfigPresets,
  Oe as sessionValidator,
  ye as setSessionCookie,
  Za as setupAuthStateListener,
  Ks as setupGlobalErrorHandler,
  et as setupImmediateCrossSubdomainAuth,
  Ka as setupNetworkAwareValidation,
  lt as setupUniversalCallback,
  Ie as supabase,
  Te as syncCookiesToLocalStorage,
  Fa as timingInfo,
  eo as useAuth,
  qs as useEnhancedAuth,
  Qs as useSessionMonitor,
  Zs as useWorkspaceStore,
  Sa as validateSession
};
