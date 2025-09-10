var Es = Object.defineProperty;
var As = (a, s, o) => s in a ? Es(a, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : a[s] = o;
var me = (a, s, o) => (As(a, typeof s != "symbol" ? s + "" : s, o), o);
import { defineComponent as le, openBlock as y, createElementBlock as x, createElementVNode as t, ref as C, computed as X, onMounted as Se, onUnmounted as ss, watch as ue, reactive as Is, resolveComponent as ne, createBlock as Z, withCtx as d, toDisplayString as J, createVNode as h, unref as T, withModifiers as ge, createCommentVNode as Y, createTextVNode as j, createStaticVNode as Ee, normalizeClass as We, Fragment as Ue, renderList as $e, normalizeStyle as Ls } from "vue";
import { ElForm as Vs, ElMessage as F, ElDialog as Ms, ElIcon as Ae, ElButton as Pe, ElProgress as Rs, ElMessageBox as Ye } from "element-plus";
import { i as Ws, g as ae, r as xe, s as Ie } from "./supabase-7523f80a.mjs";
import { c as Ya, h as Xa, b as Qa, d as Za, a as et } from "./supabase-7523f80a.mjs";
import { clearSessionCookie as we, ACCESS_COOKIE as ke, REFRESH_COOKIE as _e, clearLocalStorageTokens as Te, setSessionCookie as ye, syncCookiesToLocalStorage as De, getPostLoginBase as Us } from "./utils/authRedirect.js";
import { LS_ACCESS_KEY as ot, LS_REFRESH_KEY as at, buildOAuthRedirectUrl as tt, ensureCrossSubdomainCookies as rt, getCookie as nt } from "./utils/authRedirect.js";
import { defineStore as $s } from "pinia";
import { setupUniversalCallback as lt } from "./utils/universalCallback.js";
/*! Element Plus Icons Vue v2.3.2 */
var Ps = /* @__PURE__ */ le({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(a) {
    return (s, o) => (y(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      t("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"
      })
    ]));
  }
}), Xe = Ps, xs = /* @__PURE__ */ le({
  name: "Check",
  __name: "check",
  setup(a) {
    return (s, o) => (y(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      t("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      })
    ]));
  }
}), Ts = xs, Ds = /* @__PURE__ */ le({
  name: "Lock",
  __name: "lock",
  setup(a) {
    return (s, o) => (y(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      t("path", {
        fill: "currentColor",
        d: "M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96"
      }),
      t("path", {
        fill: "currentColor",
        d: "M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32m192-160v-64a192 192 0 1 0-384 0v64zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64"
      })
    ]));
  }
}), Qe = Ds, Ns = /* @__PURE__ */ le({
  name: "Message",
  __name: "message",
  setup(a) {
    return (s, o) => (y(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      t("path", {
        fill: "currentColor",
        d: "M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64"
      }),
      t("path", {
        fill: "currentColor",
        d: "M904 224 656.512 506.88a192 192 0 0 1-289.024 0L120 224zm-698.944 0 210.56 240.704a128 128 0 0 0 192.704 0L818.944 224z"
      })
    ]));
  }
}), Os = Ns, Hs = /* @__PURE__ */ le({
  name: "Refresh",
  __name: "refresh",
  setup(a) {
    return (s, o) => (y(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      t("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), Ze = Hs, Fs = /* @__PURE__ */ le({
  name: "User",
  __name: "user",
  setup(a) {
    return (s, o) => (y(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      t("path", {
        fill: "currentColor",
        d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"
      })
    ]));
  }
}), Ne = Fs, zs = /* @__PURE__ */ le({
  name: "Warning",
  __name: "warning",
  setup(a) {
    return (s, o) => (y(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      t("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"
      })
    ]));
  }
}), os = zs;
class Le extends Error {
  constructor(o, n = {}, m) {
    super(o);
    me(this, "context");
    me(this, "originalError");
    this.name = "PackageError", this.context = n, this.originalError = m;
  }
}
function Wa(a, s = {}, o) {
  try {
    const n = a();
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
async function Ua(a, s = {}, o) {
  try {
    return await a();
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
function Bs(a, s = {}) {
  const o = a.message.toLowerCase();
  if (o.includes("is not a function") || o.includes("cannot read property") || o.includes("undefined is not a function")) {
    console.warn("[ErrorHandler] Bundling error detected:", {
      context: s,
      error: a.message,
      suggestion: "This may be due to minification or import issues. The package will continue with fallback behavior."
    });
    return;
  }
  throw new Le(
    `Unexpected error: ${a.message}`,
    s,
    a
  );
}
async function $a(a, s = {}, o) {
  try {
    return await a();
  } catch (n) {
    return console.warn("[ErrorHandler] Import failed:", {
      context: s,
      error: n instanceof Error ? n.message : String(n)
    }), o !== void 0 ? o : void 0;
  }
}
function Pa(a) {
  var s;
  try {
    if (typeof document > "u")
      return null;
    const n = `; ${document.cookie}`.split(`; ${a}=`);
    return n.length === 2 && ((s = n.pop()) == null ? void 0 : s.split(";").shift()) || null;
  } catch (o) {
    return console.warn("[ErrorHandler] Cookie access failed:", {
      cookieName: a,
      error: o instanceof Error ? o.message : String(o)
    }), null;
  }
}
function xa(a, s, o = {}) {
  try {
    if (typeof document > "u")
      return !1;
    let n = `${a}=${s}`;
    return o.domain && (n += `; domain=${o.domain}`), o.path && (n += `; path=${o.path}`), o.secure && (n += "; secure"), o.sameSite && (n += `; samesite=${o.sameSite}`), o.maxAge && (n += `; max-age=${o.maxAge}`), document.cookie = n, !0;
  } catch (n) {
    return console.warn("[ErrorHandler] Cookie setting failed:", {
      cookieName: a,
      error: n instanceof Error ? n.message : String(n)
    }), !1;
  }
}
function Ta(a) {
  try {
    return typeof localStorage > "u" ? null : localStorage.getItem(a);
  } catch (s) {
    return console.warn("[ErrorHandler] localStorage get failed:", {
      key: a,
      error: s instanceof Error ? s.message : String(s)
    }), null;
  }
}
function Da(a, s) {
  try {
    return typeof localStorage > "u" ? !1 : (localStorage.setItem(a, s), !0);
  } catch (o) {
    return console.warn("[ErrorHandler] localStorage set failed:", {
      key: a,
      error: o instanceof Error ? o.message : String(o)
    }), !1;
  }
}
function Na(a, s) {
  try {
    return typeof window > "u" ? s : a(window);
  } catch (o) {
    return console.warn("[ErrorHandler] Window operation failed:", {
      error: o instanceof Error ? o.message : String(o)
    }), s;
  }
}
function js() {
  typeof window > "u" || (window.addEventListener("unhandledrejection", (a) => {
    const s = a.reason;
    if (s instanceof Error) {
      const o = s.message.toLowerCase();
      if (o.includes("is not a function") || o.includes("cannot read property") || o.includes("undefined is not a function")) {
        console.warn("[ErrorHandler] Unhandled promise rejection (bundling error):", {
          error: s.message,
          stack: s.stack
        }), a.preventDefault();
        return;
      }
    }
    console.error("[ErrorHandler] Unhandled promise rejection:", a.reason);
  }), window.addEventListener("error", (a) => {
    const s = a.error;
    if (s instanceof Error) {
      const o = s.message.toLowerCase();
      if (o.includes("is not a function") || o.includes("cannot read property") || o.includes("undefined is not a function")) {
        console.warn("[ErrorHandler] Uncaught error (bundling error):", {
          error: s.message,
          stack: s.stack
        }), a.preventDefault();
        return;
      }
    }
    console.error("[ErrorHandler] Uncaught error:", a.error);
  }));
}
typeof window < "u" && js();
function qs() {
  const a = C({
    user: null,
    isAuthenticated: !1,
    isLoading: !0,
    error: null
  }), s = C(null), o = X(() => a.value.isAuthenticated), n = X(() => a.value.user), m = X(() => a.value.isLoading), _ = async () => {
    var k, p, l, U, f, c, L, M, b, g, V, v, S, te, G, q, z, ie, K, E, N;
    try {
      console.log("[auth][enhanced] Starting loadUserInfo..."), console.log("[auth][enhanced] Ensuring cross-subdomain cookie synchronization...");
      const O = "sb-access-token", A = "sb-refresh-token", H = (R) => {
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
            const ce = document.cookie.split(";").find((de) => de.trim().startsWith(se + "="));
            if (ce) {
              console.log(`[auth][enhanced] Found cookie: ${se}`);
              const de = ce.split("=")[1];
              de && (document.cookie = `${se}=${de}; domain=.${ee}; path=/; secure; samesite=lax`);
            }
          });
        } catch ($) {
          console.warn("[auth][enhanced] Error in cookie sync:", $);
        }
      };
      H([O, A]), await new Promise((R) => setTimeout(R, 50)), H([O, A]), await new Promise((R) => setTimeout(R, 50));
      let Q = null;
      try {
        const $ = await (await ae()).auth.getSession();
        Q = (k = $ == null ? void 0 : $.data) == null ? void 0 : k.session;
      } catch (R) {
        console.warn("[auth][enhanced] Error getting Supabase session:", R);
      }
      if (Q && Q.user) {
        console.log("[auth][enhanced] Active Supabase session found");
        const R = Q.user, $ = {
          id: R.id,
          name: ((p = R.user_metadata) == null ? void 0 : p.name) || ((l = R.user_metadata) == null ? void 0 : l.user_name) || ((U = R.user_metadata) == null ? void 0 : U.full_name) || ((f = R.email) == null ? void 0 : f.split("@")[0]) || "User",
          email: R.email,
          avatar_url: ((c = R.user_metadata) == null ? void 0 : c.avatar_url) || null,
          user_metadata: R.user_metadata
        };
        return a.value = {
          user: $,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, s.value = {
          user: $,
          access_token: Q.access_token,
          refresh_token: Q.refresh_token
        }, { user: $, session: s.value, error: null };
      }
      console.log("[auth][enhanced] No active session, attempting to restore from cookies...");
      const re = await xe();
      if (re.success && re.session) {
        console.log("[auth][enhanced] Session restored successfully from cookies");
        const R = re.session.user, $ = {
          id: R.id,
          name: ((L = R.user_metadata) == null ? void 0 : L.name) || ((M = R.user_metadata) == null ? void 0 : M.user_name) || ((b = R.user_metadata) == null ? void 0 : b.full_name) || ((g = R.email) == null ? void 0 : g.split("@")[0]) || "User",
          email: R.email,
          avatar_url: ((V = R.user_metadata) == null ? void 0 : V.avatar_url) || null,
          user_metadata: R.user_metadata
        };
        return a.value = {
          user: $,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, s.value = re.session, { user: $, session: s.value, error: null };
      } else {
        console.log("[auth][enhanced] Failed to restore session:", re.error), console.log("[auth][enhanced] Retrying session restoration with extended delay..."), await new Promise(($) => setTimeout($, 500)), H([O, A]);
        const R = await xe();
        if (R.success && R.session) {
          console.log("[auth][enhanced] Session restored on retry");
          const $ = R.session.user, ee = {
            id: $.id,
            name: ((v = $.user_metadata) == null ? void 0 : v.name) || ((S = $.user_metadata) == null ? void 0 : S.user_name) || ((te = $.user_metadata) == null ? void 0 : te.full_name) || ((G = $.email) == null ? void 0 : G.split("@")[0]) || "User",
            email: $.email,
            avatar_url: ((q = $.user_metadata) == null ? void 0 : q.avatar_url) || null,
            user_metadata: $.user_metadata
          };
          return a.value = {
            user: ee,
            isAuthenticated: !0,
            isLoading: !1,
            error: null
          }, s.value = R.session, { user: ee, session: s.value, error: null };
        }
      }
    } catch (O) {
      console.error("Error getting Supabase session:", O), O instanceof Error && Bs(O, {
        component: "useEnhancedAuth",
        function: "loadUserInfo",
        operation: "session_validation"
      });
      try {
        const A = await xe();
        if (A.success && A.session) {
          console.log("[auth][enhanced] Session restored after error");
          const H = A.session.user, Q = {
            id: H.id,
            name: ((z = H.user_metadata) == null ? void 0 : z.name) || ((ie = H.user_metadata) == null ? void 0 : ie.user_name) || ((K = H.user_metadata) == null ? void 0 : K.full_name) || ((E = H.email) == null ? void 0 : E.split("@")[0]) || "User",
            email: H.email,
            avatar_url: ((N = H.user_metadata) == null ? void 0 : N.avatar_url) || null,
            user_metadata: H.user_metadata
          };
          return a.value = {
            user: Q,
            isAuthenticated: !0,
            isLoading: !1,
            error: null
          }, s.value = A.session, { user: Q, session: s.value, error: null };
        }
      } catch (A) {
        console.error("Error restoring session:", A);
      }
    }
    return console.log("[auth][enhanced] No valid authentication found"), a.value = {
      user: null,
      isAuthenticated: !1,
      isLoading: !1,
      error: "No valid session found"
    }, s.value = null, { user: null, session: null, error: "No valid session found" };
  }, W = async () => {
    try {
      await (await ae()).auth.signOut(), we(ke), we(_e), Te(), a.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      }, s.value = null, console.log("[auth][enhanced] User logged out successfully");
    } catch (k) {
      console.error("Error during logout:", k), a.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      }, s.value = null;
    }
  }, P = async (k, p) => {
    var l, U, f, c, L;
    try {
      a.value.isLoading = !0;
      const M = await ae(), { data: b, error: g } = await M.auth.signInWithPassword({
        email: k,
        password: p
      });
      if (g)
        throw g;
      if (b.session) {
        const V = b.session.user, v = {
          id: V.id,
          name: ((l = V.user_metadata) == null ? void 0 : l.name) || ((U = V.user_metadata) == null ? void 0 : U.user_name) || ((f = V.user_metadata) == null ? void 0 : f.full_name) || ((c = V.email) == null ? void 0 : c.split("@")[0]) || "User",
          email: V.email,
          avatar_url: ((L = V.user_metadata) == null ? void 0 : L.avatar_url) || null,
          user_metadata: V.user_metadata
        };
        return a.value = {
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
      return console.error("Sign in error:", M), a.value.isLoading = !1, { user: null, session: null, error: String(M) };
    }
  }, D = async (k, p, l) => {
    var U, f, c, L, M;
    try {
      a.value.isLoading = !0;
      const b = await ae(), { data: g, error: V } = await b.auth.signUp({
        email: k,
        password: p,
        options: {
          data: l
        }
      });
      if (V)
        throw V;
      if (g.session) {
        const v = g.session.user, S = {
          id: v.id,
          name: ((U = v.user_metadata) == null ? void 0 : U.name) || ((f = v.user_metadata) == null ? void 0 : f.user_name) || ((c = v.user_metadata) == null ? void 0 : c.full_name) || ((L = v.email) == null ? void 0 : L.split("@")[0]) || "User",
          email: v.email,
          avatar_url: ((M = v.user_metadata) == null ? void 0 : M.avatar_url) || null,
          user_metadata: v.user_metadata
        };
        return a.value = {
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
      return console.error("Sign up error:", b), a.value.isLoading = !1, { user: null, session: null, error: String(b) };
    }
  }, w = async () => {
    await _();
  };
  return Se(async () => {
    await Ws(), await w();
  }), {
    // State
    authState: a,
    currentSession: s,
    // Computed
    isAuthenticated: o,
    currentUser: n,
    isLoading: m,
    // Methods
    loadUserInfo: _,
    logout: W,
    signIn: P,
    signUp: D,
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
}, Js = {
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
}, Ks = {
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
}, as = {
  ...he,
  normalCheckInterval: 1e4,
  // 10 seconds - faster for testing
  fastCheckInterval: 2e3,
  // 2 seconds - very fast for testing
  fastMonitoringDuration: 3e4,
  // 30 seconds - shorter for testing
  validationCacheDuration: 1e3
  // 1 second cache for testing
}, ts = {
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
function rs() {
  switch ("production") {
    case "production":
      return ts;
    case "development":
      return as;
    default:
      return he;
  }
}
function Oa(a) {
  return {
    ...he,
    ...a
  };
}
const Gs = {
  default: he,
  fast: Js,
  conservative: Ks,
  development: as,
  production: ts
};
function Ha(a) {
  return Gs[a];
}
const Fa = {
  immediate: "Immediate (0-2 seconds) - When logout is detected via auth events",
  fast: "Fast (2-5 seconds) - When fast monitoring is active",
  normal: "Normal (up to 30 seconds) - Regular monitoring interval",
  conservative: "Conservative (up to 60 seconds) - Less frequent monitoring"
}, za = {
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
function Ys(a) {
  const s = C(!0), o = C(null), n = C(!1), m = C(!1), _ = C(null), W = C(null), P = C(null), D = { ...rs(), ...a }, w = D.normalCheckInterval, k = D.fastCheckInterval, p = D.fastMonitoringDuration, l = D.maxRetryAttempts, U = D.retryDelay, f = X(() => !s.value && o.value !== null), c = X(
    () => {
      var E, N;
      return ((E = o.value) == null ? void 0 : E.canRetry) && ((N = o.value) == null ? void 0 : N.type) !== "manual_check_failed";
    }
  ), L = (E) => {
    var A;
    if (typeof document > "u")
      return null;
    const O = `; ${document.cookie}`.split(`; ${E}=`);
    return O.length === 2 && ((A = O.pop()) == null ? void 0 : A.split(";").shift()) || null;
  }, M = async () => {
    var E, N;
    try {
      console.log("[SessionMonitor] Validating session...");
      const O = L("sb-access-token"), A = L("sb-refresh-token");
      if (!O || !A)
        return console.log("[SessionMonitor] No tokens found in cookies"), !1;
      const H = await ae();
      let Q = null, re = null;
      for (let se = 1; se <= 2; se++)
        try {
          const ce = await H.auth.getSession();
          Q = ce.data.session, re = ce.error;
          break;
        } catch (ce) {
          if (console.warn(`[SessionMonitor] Network error on attempt ${se}:`, ce), se === 2)
            return console.log("[SessionMonitor] Network issues detected, maintaining current session state"), s.value;
          await new Promise((de) => setTimeout(de, 1e3));
        }
      if (re)
        return console.warn("[SessionMonitor] Error getting session:", re), (E = re.message) != null && E.includes("Invalid JWT") || (N = re.message) != null && N.includes("JWT expired") ? !1 : s.value;
      if (!Q || !Q.user)
        return console.log("[SessionMonitor] No valid session found"), !1;
      const R = /* @__PURE__ */ new Date(), $ = new Date(Q.expires_at * 1e3), ee = 5 * 60 * 1e3;
      return R >= new Date($.getTime() - ee) ? (console.log("[SessionMonitor] Session is close to expiry or expired"), !1) : (console.log("[SessionMonitor] Session is valid"), _.value = /* @__PURE__ */ new Date(), !0);
    } catch (O) {
      return console.error("[SessionMonitor] Error validating session:", O), s.value;
    }
  }, b = async () => {
    try {
      console.log("[SessionMonitor] Attempting to restore session...");
      const E = L("sb-access-token"), N = L("sb-refresh-token");
      if (!E || !N)
        return console.log("[SessionMonitor] No tokens available for restoration"), !1;
      const O = await ae(), { data: A, error: H } = await O.auth.setSession({
        access_token: E,
        refresh_token: N
      });
      return H ? (console.warn("[SessionMonitor] Error restoring session:", H), !1) : A.session && A.session.user ? (console.log("[SessionMonitor] Session restored successfully"), _.value = /* @__PURE__ */ new Date(), !0) : !1;
    } catch (E) {
      return console.error("[SessionMonitor] Error restoring session:", E), !1;
    }
  }, g = (E, N, O = !0) => {
    console.warn("[SessionMonitor] Session loss detected:", { type: E, message: N }), s.value = !1, o.value = {
      type: E,
      message: N,
      timestamp: /* @__PURE__ */ new Date(),
      canRetry: O
    };
  }, V = async () => {
    console.log("[SessionMonitor] Retrying session validation...");
    for (let E = 1; E <= l; E++) {
      if (console.log(`[SessionMonitor] Retry attempt ${E}/${l}`), E > 1 && await new Promise((A) => setTimeout(A, U)), await b() && await M())
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
        await M() || g("session_expired", "Your session has expired. Please log in again.", !0);
      }, 3e3));
    }, 2e3), W.value = setInterval(async () => {
      console.log("[SessionMonitor] Periodic session check...");
      const E = await M();
      !E && s.value ? (console.log("[SessionMonitor] Session validation failed, performing confirmation check..."), setTimeout(async () => {
        await M() || g("session_expired", "Your session has expired. Please log in again.", !0);
      }, 2e3)) : E && !s.value && (console.log("[SessionMonitor] Session recovered"), v());
    }, w);
  }, te = () => {
    if (m.value) {
      console.log("[SessionMonitor] Fast monitoring already active");
      return;
    }
    console.log("[SessionMonitor] Starting fast monitoring (5s intervals)..."), m.value = !0, P.value && clearInterval(P.value), P.value = setInterval(async () => {
      console.log("[SessionMonitor] Fast session check...");
      const E = await M();
      !E && s.value ? (console.log("[SessionMonitor] Fast monitoring detected potential session loss, confirming..."), setTimeout(async () => {
        await M() || (g("session_expired", "Your session has expired. Please log in again.", !0), G());
      }, 1e3)) : E && !s.value && (console.log("[SessionMonitor] Session recovered"), v(), G());
    }, k), setTimeout(() => {
      m.value && (console.log(`[SessionMonitor] Auto-stopping fast monitoring after ${p / 1e3} seconds`), G());
    }, p);
  }, G = () => {
    m.value && (console.log("[SessionMonitor] Stopping fast monitoring..."), m.value = !1, P.value && (clearInterval(P.value), P.value = null));
  }, q = () => {
    n.value && (console.log("[SessionMonitor] Stopping session monitoring..."), n.value = !1, W.value && (clearInterval(W.value), W.value = null), G());
  }, z = async () => {
    console.log("[SessionMonitor] Manual session check requested");
    const E = await M();
    return !E && !await b() ? (g("manual_check_failed", "Session validation failed. Please log in again.", !1), !1) : E;
  }, ie = () => {
    console.log("[SessionMonitor] Network error detected, but not triggering immediate session loss"), s.value || g("network_error", "Network connection lost. Please check your internet connection and try again.", !0);
  }, K = () => {
    if (typeof window > "u")
      return;
    const E = () => {
      var A;
      console.log("[SessionMonitor] Network connection restored"), f.value && ((A = o.value) == null ? void 0 : A.type) === "network_error" && setTimeout(() => V(), 1e3);
    }, N = () => {
      console.log("[SessionMonitor] Network connection lost"), ie();
    }, O = (A) => {
      console.log("[SessionMonitor] Logout detected, starting fast monitoring for immediate detection"), te();
    };
    return window.addEventListener("online", E), window.addEventListener("offline", N), window.addEventListener("session-logout-detected", O), () => {
      window.removeEventListener("online", E), window.removeEventListener("offline", N), window.removeEventListener("session-logout-detected", O);
    };
  };
  return Se(() => {
    console.log("[SessionMonitor] Mounted, setting up monitoring"), S(), K();
  }), ss(() => {
    console.log("[SessionMonitor] Unmounted, cleaning up"), q();
  }), {
    // State
    isSessionValid: s,
    sessionLossEvent: o,
    isMonitoring: n,
    isFastMonitoring: m,
    lastValidSession: _,
    // Computed
    hasSessionLoss: f,
    canRetrySession: c,
    // Methods
    validateSession: M,
    restoreSession: b,
    retrySession: V,
    clearSessionLoss: v,
    startMonitoring: S,
    stopMonitoring: q,
    startFastMonitoring: te,
    stopFastMonitoring: G,
    checkSession: z,
    handleNetworkError: ie
  };
}
const Xs = $s("workspace", () => {
  const a = C(null), s = C([]), o = C(null), n = (w) => {
    a.value = w, localStorage.setItem("current_workspace", JSON.stringify(w));
  }, m = (w) => {
    s.value = w, localStorage.setItem("available_workspaces", JSON.stringify(w));
  };
  return {
    currentWorkspace: a,
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
          a.value = JSON.parse(w);
        } catch (l) {
          console.error("Error loading persisted workspace:", l);
        }
      const k = localStorage.getItem("available_workspaces");
      if (k)
        try {
          s.value = JSON.parse(k);
        } catch (l) {
          console.error("Error loading persisted workspaces:", l);
        }
      const p = localStorage.getItem("user_info");
      if (p)
        try {
          o.value = JSON.parse(p);
        } catch (l) {
          console.error("Error loading persisted user:", l);
        }
    },
    clearData: () => {
      a.value = null, s.value = [], o.value = null, localStorage.removeItem("current_workspace"), localStorage.removeItem("available_workspaces"), localStorage.removeItem("user_info");
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
        const { data: l, error: U } = await p;
        if (U)
          throw U;
        const f = /* @__PURE__ */ new Map();
        (l || []).forEach((g) => {
          (g.workspace_access || []).forEach((V) => {
            V.shared_with_user_id === k.id && f.set(g.id, V);
          });
        });
        const c = [...new Set(
          (l || []).filter((g) => g.parent_workspace_id).map((g) => g.parent_workspace_id).filter((g) => !f.has(g))
        )];
        let L = [];
        if (c.length) {
          let g = Ie.from("workspaces").select("id, title, description, parent_workspace_id, created_by, archived, created_at").in("id", c);
          w || (g = g.eq("archived", !1));
          const { data: V, error: v } = await g;
          if (v)
            throw v;
          L = V || [];
        }
        const b = [...l || [], ...L].map((g) => {
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
function Qs() {
  const a = C({
    user: null,
    isAuthenticated: !1,
    isLoading: !0,
    error: null
  }), s = C(window.location.href), o = async () => {
    var w, k, p, l, U, f, c, L;
    try {
      a.value.isLoading = !0;
      const M = await ae(), { data: { session: b }, error: g } = await M.auth.getSession();
      if (g) {
        console.error("Error checking auth status:", g), a.value = {
          user: null,
          isAuthenticated: !1,
          isLoading: !1,
          error: g.message
        };
        return;
      }
      b != null && b.user ? (a.value = {
        user: {
          id: b.user.id,
          email: b.user.email || "",
          name: ((w = b.user.user_metadata) == null ? void 0 : w.full_name) || ((k = b.user.user_metadata) == null ? void 0 : k.name) || ((p = b.user.email) == null ? void 0 : p.split("@")[0]) || "User",
          avatar_url: ((l = b.user.user_metadata) == null ? void 0 : l.avatar_url) || ((U = b.user.user_metadata) == null ? void 0 : U.picture) || null,
          initials: (((f = b.user.user_metadata) == null ? void 0 : f.full_name) || ((c = b.user.user_metadata) == null ? void 0 : c.name) || ((L = b.user.email) == null ? void 0 : L.split("@")[0]) || "U").split(" ").map((V) => V[0]).join("").toUpperCase().substring(0, 2)
        },
        isAuthenticated: !0,
        isLoading: !1,
        error: null
      }, b.access_token && ye(ke, b.access_token), b.refresh_token && ye(_e, b.refresh_token), De()) : a.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      };
    } catch (M) {
      console.error("Auth check failed:", M), a.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: M.message || "Authentication check failed"
      };
    }
  }, n = async (w, k) => {
    try {
      const p = await ae(), { error: l } = await p.auth.signInWithPassword({
        email: w,
        password: k
      });
      return l ? { success: !1, error: l.message } : (await o(), sessionStorage.setItem("post-login-redirect", s.value), { success: !0 });
    } catch (p) {
      return console.error("Login error:", p), { success: !1, error: p.message || "Login failed" };
    }
  }, m = async (w, k) => {
    var p;
    try {
      const l = await ae(), { data: U, error: f } = await l.auth.signUp({
        email: w,
        password: k
      });
      return f ? { success: !1, error: f.message } : U.user && !U.user.email_confirmed_at ? { success: !0, needsConfirmation: !0 } : (p = U.session) != null && p.user ? (await o(), sessionStorage.setItem("post-login-redirect", s.value), { success: !0 }) : { success: !1, error: "No session created" };
    } catch (l) {
      return console.error("Signup error:", l), { success: !1, error: l.message || "Signup failed" };
    }
  }, _ = async (w) => {
    try {
      const k = `${window.location.origin}/auth/callback`;
      console.log("[OAuth] Starting login with provider:", w), console.log("[OAuth] Redirect URL:", k), console.log("[OAuth] Current URL:", s.value), console.log("[OAuth] Current origin:", window.location.origin);
      const p = await ae(), { error: l } = await p.auth.signInWithOAuth({
        provider: w,
        options: {
          redirectTo: k,
          queryParams: {
            redirect_origin: s.value
          }
        }
      });
      if (l)
        return console.error("[OAuth] Error:", l), { success: !1, error: l.message };
      const U = s.value || window.location.href;
      return sessionStorage.setItem("post-login-redirect", U), localStorage.setItem("post-login-redirect", U), console.log("[OAuth] Stored redirect URL:", U), console.log("[OAuth] Current URL value:", s.value), console.log("[OAuth] Window location href:", window.location.href), { success: !0 };
    } catch (k) {
      return console.error("OAuth login error:", k), { success: !1, error: k.message || "OAuth login failed" };
    }
  }, W = async () => {
    try {
      const w = await ae(), { error: k } = await w.auth.signOut();
      k && console.error("Logout error:", k), a.value = {
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
  }, D = async () => {
    try {
      (await ae()).auth.onAuthStateChange((k, p) => {
        var l;
        switch (console.log("Auth state changed:", k, (l = p == null ? void 0 : p.user) == null ? void 0 : l.email), k) {
          case "SIGNED_IN":
            p != null && p.user && o();
            break;
          case "SIGNED_OUT":
            a.value = {
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
            p != null && p.user && o();
            break;
        }
      });
    } catch (w) {
      console.warn("Failed to setup auth listener:", w);
    }
  };
  return Se(async () => {
    D(), await o();
  }), ue(() => window.location.href, (w) => {
    s.value = w;
  }), {
    authState: X(() => a.value),
    isAuthenticated: X(() => a.value.isAuthenticated),
    user: X(() => a.value.user),
    isLoading: X(() => a.value.isLoading),
    checkAuthStatus: o,
    loginWithEmail: n,
    signupWithEmail: m,
    loginWithProvider: _,
    logout: W,
    resetPassword: P,
    currentUrl: X(() => s.value)
  };
}
const Zs = { class: "login-container" }, eo = { class: "logo-section" }, so = { class: "login-buttons" }, oo = {
  key: 0,
  class: "forgot-password"
}, ao = { class: "signup-link" }, to = /* @__PURE__ */ le({
  __name: "LoginModal",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue", "login-success"],
  setup(a, { emit: s }) {
    const o = a, n = s, m = X({
      get: () => o.modelValue,
      set: (v) => n("update:modelValue", v)
    }), _ = C(!1), W = C(!1), P = C(), { loginWithEmail: D, signupWithEmail: w, loginWithProvider: k, resetPassword: p } = Qs(), l = Is({
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
              S !== l.password ? te(new Error("Passwords do not match")) : te();
            },
            trigger: "blur"
          }
        ]
      } : {}
    })), f = () => {
      var v;
      _.value = !_.value, l.email = "", l.password = "", l.confirmPassword = "", (v = P.value) == null || v.clearValidate();
    }, c = () => {
      var v;
      m.value = !1, l.email = "", l.password = "", l.confirmPassword = "", _.value = !1, (v = P.value) == null || v.clearValidate();
    }, L = async () => {
      if (P.value)
        try {
          await P.value.validate(), W.value = !0, _.value ? await b() : await M();
        } catch (v) {
          console.error("Form validation failed:", v);
        } finally {
          W.value = !1;
        }
    }, M = async () => {
      const v = await D(l.email, l.password);
      v.success ? (F.success("Login successful"), n("login-success", { email: l.email }), c()) : F.error("Login failed: " + v.error);
    }, b = async () => {
      const v = await w(l.email, l.password);
      v.success ? v.needsConfirmation ? F.success("Please check your email to confirm your account") : (F.success("Account created successfully"), n("login-success", { email: l.email }), c()) : F.error("Signup failed: " + v.error);
    }, g = async (v) => {
      const S = await k(v);
      S.success ? F.success("Redirecting to login provider...") : F.error("Login failed: " + S.error);
    }, V = async () => {
      if (!l.email) {
        F.warning("Please enter your email address first");
        return;
      }
      const v = await p(l.email);
      v.success ? F.success("Password reset email sent! Please check your inbox.") : F.error("Failed to send reset email: " + v.error);
    };
    return (v, S) => {
      const te = ne("el-icon"), G = ne("el-input"), q = ne("el-form-item"), z = ne("el-button"), ie = ne("el-dialog");
      return y(), Z(ie, {
        modelValue: m.value,
        "onUpdate:modelValue": S[6] || (S[6] = (K) => m.value = K),
        title: "",
        width: "500px",
        "close-on-click-modal": !1,
        "close-on-press-escape": !0,
        "show-close": !0,
        class: "login-modal",
        onClose: c
      }, {
        default: d(() => [
          t("div", Zs, [
            t("div", eo, [
              t("h2", null, J(_.value ? "Create Account" : "Welcome Back"), 1),
              t("p", null, J(_.value ? "Sign up to get started with your account" : "Sign in to continue to your account"), 1)
            ]),
            h(T(Vs), {
              model: l,
              rules: U.value,
              ref_key: "formRef",
              ref: P,
              class: "login-form",
              onSubmit: ge(L, ["prevent"])
            }, {
              default: d(() => [
                h(q, { prop: "email" }, {
                  default: d(() => [
                    h(G, {
                      modelValue: l.email,
                      "onUpdate:modelValue": S[0] || (S[0] = (K) => l.email = K),
                      placeholder: "Email",
                      type: "email",
                      size: "large",
                      class: "form-input"
                    }, {
                      prefix: d(() => [
                        h(te, null, {
                          default: d(() => [
                            h(T(Os))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                h(q, { prop: "password" }, {
                  default: d(() => [
                    h(G, {
                      modelValue: l.password,
                      "onUpdate:modelValue": S[1] || (S[1] = (K) => l.password = K),
                      placeholder: "Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: d(() => [
                        h(te, null, {
                          default: d(() => [
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
                _.value ? (y(), Z(q, {
                  key: 0,
                  prop: "confirmPassword"
                }, {
                  default: d(() => [
                    h(G, {
                      modelValue: l.confirmPassword,
                      "onUpdate:modelValue": S[2] || (S[2] = (K) => l.confirmPassword = K),
                      placeholder: "Confirm Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: d(() => [
                        h(te, null, {
                          default: d(() => [
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
                h(q, null, {
                  default: d(() => [
                    h(z, {
                      type: "primary",
                      class: "submit-button",
                      loading: W.value,
                      onClick: L,
                      size: "large"
                    }, {
                      default: d(() => [
                        j(J(_.value ? "Sign Up" : "Sign In"), 1)
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model", "rules"]),
            S[10] || (S[10] = t("div", { class: "divider" }, [
              t("span", null, "Or continue with")
            ], -1)),
            t("div", so, [
              h(z, {
                class: "login-button google",
                onClick: S[3] || (S[3] = (K) => g("google")),
                size: "large"
              }, {
                default: d(() => [...S[7] || (S[7] = [
                  t("span", { class: "social-icon" }, "G", -1),
                  j(" Google ", -1)
                ])]),
                _: 1
              }),
              h(z, {
                class: "login-button github",
                onClick: S[4] || (S[4] = (K) => g("github")),
                size: "large"
              }, {
                default: d(() => [...S[8] || (S[8] = [
                  t("span", { class: "social-icon" }, "⚡", -1),
                  j(" GitHub ", -1)
                ])]),
                _: 1
              }),
              h(z, {
                class: "login-button twitter",
                onClick: S[5] || (S[5] = (K) => g("twitter")),
                size: "large"
              }, {
                default: d(() => [...S[9] || (S[9] = [
                  t("span", { class: "social-icon" }, "X", -1),
                  j(" X (Twitter) ", -1)
                ])]),
                _: 1
              })
            ]),
            S[11] || (S[11] = t("div", { class: "terms" }, " By continuing, you agree to AI Workspace's Terms of Service and Privacy Policy ", -1)),
            _.value ? Y("", !0) : (y(), x("div", oo, [
              t("a", {
                href: "#",
                onClick: ge(V, ["prevent"])
              }, "Forgot Password?")
            ])),
            t("div", ao, [
              j(J(_.value ? "Already have an account?" : "Don't have an account?") + " ", 1),
              t("a", {
                href: "#",
                onClick: ge(f, ["prevent"])
              }, J(_.value ? "Sign in" : "Sign up"), 1)
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
const Ve = (a, s) => {
  const o = a.__vccOpts || a;
  for (const [n, m] of s)
    o[n] = m;
  return o;
}, ro = /* @__PURE__ */ Ve(to, [["__scopeId", "data-v-684a3f28"]]), no = { class: "session-loss-content" }, io = { class: "session-loss-icon" }, lo = { class: "session-loss-message" }, co = {
  key: 0,
  class: "session-loss-details"
}, uo = { class: "detail-item" }, po = { class: "detail-value" }, fo = { class: "detail-item" }, go = { class: "detail-value" }, ho = { class: "session-loss-actions" }, vo = {
  key: 0,
  class: "retry-status"
}, mo = { class: "retry-message" }, wo = /* @__PURE__ */ le({
  __name: "SessionLossModal",
  props: {
    modelValue: { type: Boolean },
    sessionLossEvent: {},
    canRetrySession: { type: Boolean }
  },
  emits: ["update:modelValue", "retry", "login", "refresh"],
  setup(a, { emit: s }) {
    const o = a, n = s, m = C(!1), _ = C(0), W = C(void 0), P = C(""), D = X({
      get: () => o.modelValue,
      set: (f) => n("update:modelValue", f)
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
      m.value = !0, _.value = 0, W.value = void 0, P.value = "Attempting to restore session...";
      const f = setInterval(() => {
        _.value < 90 && (_.value += Math.random() * 20);
      }, 200);
      try {
        n("retry"), await new Promise((c) => setTimeout(c, 2e3)), _.value = 100, W.value = "success", P.value = "Session restored successfully!", setTimeout(() => {
          D.value = !1;
        }, 1e3);
      } catch {
        _.value = 100, W.value = "exception", P.value = "Failed to restore session. Please log in again.", F.error("Session restoration failed");
      } finally {
        clearInterval(f), setTimeout(() => {
          m.value = !1, _.value = 0, W.value = void 0, P.value = "";
        }, 3e3);
      }
    }, l = () => {
      n("login"), D.value = !1;
    }, U = () => {
      n("refresh"), window.location.reload();
    };
    return ue(() => o.sessionLossEvent, (f) => {
      f && (m.value = !1, _.value = 0, W.value = void 0, P.value = "");
    }), (f, c) => (y(), Z(T(Ms), {
      modelValue: D.value,
      "onUpdate:modelValue": c[0] || (c[0] = (L) => D.value = L),
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
          t("div", no, [
            t("div", io, [
              h(T(Ae), {
                size: "48",
                color: "#f56c6c"
              }, {
                default: d(() => [
                  h(T(os))
                ]),
                _: 1
              })
            ]),
            t("div", lo, [
              c[3] || (c[3] = t("h3", null, "Your session has expired", -1)),
              t("p", null, J(((L = f.sessionLossEvent) == null ? void 0 : L.message) || "Please log in again to continue using the application."), 1),
              f.sessionLossEvent ? (y(), x("div", co, [
                t("div", uo, [
                  c[1] || (c[1] = t("span", { class: "detail-label" }, "Issue:", -1)),
                  t("span", po, J(w(f.sessionLossEvent.type)), 1)
                ]),
                t("div", fo, [
                  c[2] || (c[2] = t("span", { class: "detail-label" }, "Time:", -1)),
                  t("span", go, J(k(f.sessionLossEvent.timestamp)), 1)
                ])
              ])) : Y("", !0)
            ]),
            t("div", ho, [
              f.canRetrySession && !m.value ? (y(), Z(T(Pe), {
                key: 0,
                type: "primary",
                onClick: p,
                loading: m.value
              }, {
                default: d(() => [
                  h(T(Ae), null, {
                    default: d(() => [
                      h(T(Ze))
                    ]),
                    _: 1
                  }),
                  c[4] || (c[4] = j(" Try Again ", -1))
                ]),
                _: 1
              }, 8, ["loading"])) : Y("", !0),
              h(T(Pe), {
                type: "primary",
                onClick: l,
                disabled: m.value
              }, {
                default: d(() => [
                  h(T(Ae), null, {
                    default: d(() => [
                      h(T(Ne))
                    ]),
                    _: 1
                  }),
                  c[5] || (c[5] = j(" Log In ", -1))
                ]),
                _: 1
              }, 8, ["disabled"]),
              f.canRetrySession ? Y("", !0) : (y(), Z(T(Pe), {
                key: 1,
                type: "info",
                onClick: U,
                disabled: m.value
              }, {
                default: d(() => [
                  h(T(Ae), null, {
                    default: d(() => [
                      h(T(Ze))
                    ]),
                    _: 1
                  }),
                  c[6] || (c[6] = j(" Refresh Page ", -1))
                ]),
                _: 1
              }, 8, ["disabled"]))
            ]),
            m.value ? (y(), x("div", vo, [
              h(T(Rs), {
                percentage: _.value,
                status: W.value,
                "stroke-width": 6
              }, null, 8, ["percentage", "status"]),
              t("p", mo, J(P.value), 1)
            ])) : Y("", !0)
          ])
        ];
      }),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const ko = /* @__PURE__ */ Ve(wo, [["__scopeId", "data-v-0dd27f7f"]]), _o = { class: "aiworkspace-header" }, yo = {
  key: 0,
  class: "header-content header-loading"
}, So = { class: "header-center" }, bo = { class: "loading-text" }, Co = { key: 0 }, Eo = { key: 1 }, Ao = {
  key: 1,
  class: "header-content header-fallback"
}, Io = {
  key: 2,
  class: "header-content header-restricted"
}, Lo = { class: "header-center" }, Vo = { class: "restricted-text" }, Mo = { class: "header-right" }, Ro = {
  key: 3,
  class: "header-content"
}, Wo = { class: "header-left" }, Uo = { class: "logo-section" }, $o = {
  href: "/",
  class: "logo"
}, Po = ["src"], xo = {
  key: 1,
  class: "text-logo"
}, To = {
  key: 0,
  class: "header-center"
}, Do = { class: "main-navigation" }, No = { class: "nav-item" }, Oo = {
  href: "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard",
  class: "nav-link"
}, Ho = { class: "workspace-dropdown-item" }, Fo = ["href"], zo = { class: "workspace-icon" }, Bo = {
  key: 1,
  class: "nav-divider"
}, jo = { class: "nav-item" }, qo = ["href", "onClick"], Jo = { class: "header-right" }, Ko = { class: "user-profile" }, Go = { class: "user-info" }, Yo = { class: "user-name" }, Xo = { class: "user-avatar" }, Qo = ["src", "alt"], Zo = {
  key: 1,
  class: "avatar-placeholder"
}, ea = { class: "version-info" }, sa = { class: "version-hash" }, oa = {
  key: 4,
  class: "header-content header-unauthenticated"
}, aa = { class: "header-left" }, ta = { class: "logo-section" }, ra = {
  href: "/",
  class: "logo"
}, na = ["src"], ia = {
  key: 1,
  class: "text-logo"
}, la = { class: "header-right" }, ca = { class: "workspace-list" }, ua = ["onClick"], da = { class: "workspace-icon" }, pa = { class: "workspace-details" }, fa = { class: "workspace-members" }, ga = {
  key: 0,
  class: "current-indicator"
}, ha = { class: "update-content" }, va = { class: "update-actions" }, ma = { class: "setup-content" }, wa = { class: "setup-actions" }, be = 50, es = `node -e "const fs=require('fs');const{execSync}=require('child_process');const hash=execSync('git rev-parse HEAD').toString().trim();const data={fullCommitHash:hash,shortCommitHash:hash.substring(0,7),timestamp:new Date().toISOString(),buildTime:new Date().toISOString()};fs.mkdirSync('public',{recursive:true});fs.writeFileSync('public/version.json',JSON.stringify(data,null,2));console.log('✅ Created version.json with hash:',hash.substring(0,7));"`, ka = /* @__PURE__ */ le({
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
  setup(a, { emit: s }) {
    const o = a, n = s, { authState: m, logout: _, isLoading: W } = qs(), {
      isSessionValid: P,
      sessionLossEvent: D,
      hasSessionLoss: w,
      canRetrySession: k,
      retrySession: p,
      clearSessionLoss: l
    } = Ys(), U = () => {
      try {
        return Xs();
      } catch {
        return console.warn("[AIWorkspaceHeader] Pinia not initialized yet, using fallback state"), null;
      }
    }, f = () => {
      try {
        return typeof window < "u" ? !!window.__PINIA__ || !!window.Pinia : !1;
      } catch {
        return !1;
      }
    }, c = C(U()), L = X(() => !!c.value), M = C(0), b = () => {
      if (!c.value && M.value < be) {
        if (f()) {
          const r = U();
          if (r) {
            c.value = r, console.log("[AIWorkspaceHeader] Pinia store initialized successfully");
            return;
          }
        }
        M.value++, setTimeout(b, 100);
      } else
        M.value >= be && console.warn("[AIWorkspaceHeader] Pinia initialization failed after maximum retries, using fallback mode");
    };
    Se(() => {
      c.value || b();
    });
    const g = C(!1), V = C(!1), v = C(!1), S = C([]), te = C([]), G = C({
      name: "",
      email: "",
      avatar_url: null,
      initials: ""
    }), q = C("unknown"), z = C("unknown"), ie = C(!1), K = C(null), E = C(null), N = C(!1), O = C([]), A = C([]), H = C(!1);
    ue(A, async (r) => {
      r.length > 0 && L.value && ee.value && await $();
    }, { immediate: !1 }), ue(() => window.location.pathname + window.location.search + window.location.hash, async () => {
      L.value && ee.value && await $();
    }, { immediate: !1 });
    const Q = C(window.location.pathname);
    ue(() => window.location.pathname, (r) => {
      Q.value = r;
    }, { immediate: !0 }), ue(L, (r) => {
      !r && M.value < be && b();
    });
    const re = () => {
      try {
        const r = window.location.pathname.match(/\/single-workspace\/(\d+)/);
        if (r)
          return r[1];
        const i = new URLSearchParams(window.location.search).get("workspace_id");
        if (i)
          return i;
        const u = window.location.hash.match(/workspace_id=(\d+)/);
        return u ? u[1] : null;
      } catch (r) {
        return console.warn("[AIWorkspaceHeader] Error parsing URL for workspace_id:", r), null;
      }
    }, R = () => {
      try {
        return window.location.pathname.includes("/all-workspace/");
      } catch (r) {
        return console.warn("[AIWorkspaceHeader] Error checking all-workspace mode:", r), !1;
      }
    }, $ = async () => {
      if (!c.value || !L.value)
        return;
      const r = R();
      if (H.value = r, r) {
        c.value.currentWorkspace = null, localStorage.removeItem("current_workspace"), console.log("[AIWorkspaceHeader] Auto-selected all-workspace mode from URL");
        return;
      }
      const e = re();
      if (e)
        try {
          A.value.length === 0 && await Be();
          const i = A.value.find((u) => u.id.toString() === e);
          i ? (c.value.setCurrentWorkspace(i), console.log(`[AIWorkspaceHeader] Auto-selected workspace from URL: ${i.title} (ID: ${i.id})`), n("workspaceChange", i)) : console.warn(`[AIWorkspaceHeader] Workspace with ID ${e} not found in available workspaces`);
        } catch (i) {
          console.error("[AIWorkspaceHeader] Error auto-selecting workspace from URL:", i);
        }
    }, ee = X(() => m.value.isAuthenticated), se = X(() => c.value ? c.value.currentWorkspace : null), ce = C([
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
    ]), Fe = X(() => H.value ? de.value : ce.value), ns = X(() => {
      try {
        const r = Q.value;
        let e = "";
        const i = r.match(/\/all-workspace\/([^\/]+)/);
        if (i)
          e = i[1];
        else {
          const u = r.match(/\/single-workspace\/\d+\/([^\/]+)/);
          if (u)
            e = u[1];
          else {
            const B = r.match(/\/([^\/]+)$/);
            B && (e = B[1]);
          }
        }
        if (e) {
          const u = Fe.value.find(
            (B) => B.key === e || B.url.includes(`/${e}`) || B.url === `/${e}`
          );
          if (u)
            return u.label;
        }
        return "Dashboard";
      } catch (r) {
        return console.warn("[AIWorkspaceHeader] Error determining current section:", r), "Dashboard";
      }
    }), is = (r) => {
      const e = /* @__PURE__ */ new Map();
      r.forEach((B) => {
        e.set(B.id, { ...B, children: [] });
      });
      const i = [];
      e.forEach((B) => {
        B.parent_workspace_id && e.has(B.parent_workspace_id) ? e.get(B.parent_workspace_id).children.push(B) : i.push(B);
      });
      const u = (B) => {
        B.sort((oe, pe) => oe.title.localeCompare(pe.title)), B.forEach((oe) => {
          oe.children && u(oe.children);
        });
      };
      return u(i), i;
    }, ze = (r, e = 0, i = []) => (r.forEach((u) => {
      i.push({ ...u, level: e }), u.children && u.children.length && ze(u.children, e + 1, i);
    }), i), Be = async () => {
      var r, e, i;
      try {
        const u = await ((r = c.value) == null ? void 0 : r.loadWorkspaces());
        if (O.value = is(u || []), A.value = ze(O.value), te.value = A.value, S.value = A.value, o.currentWorkspaceId) {
          const B = A.value.find((oe) => {
            var pe;
            return oe.id.toString() === ((pe = o.currentWorkspaceId) == null ? void 0 : pe.toString());
          });
          B && ((e = c.value) == null || e.setCurrentWorkspace(B));
        } else
          !se.value && A.value.length && ((i = c.value) == null || i.setCurrentWorkspace(A.value[0]));
      } catch (u) {
        console.error("loadWorkspaces (header) error", u);
      }
    }, ls = (r) => {
      if (console.log("Navigation command:", r), r === "all-workspace") {
        window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
        return;
      } else {
        const e = parseInt(r.replace("workspace-", ""));
        window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e}/dashboard`;
        return;
      }
    }, cs = (r) => {
      const e = se.value, i = H.value;
      switch (r.key) {
        case "dashboard":
          i ? window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard" : e ? window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e.id}/dashboard` : window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
          break;
        case "outlines":
          if (i)
            window.location.href = "https://outline.aiworkspace.pro/all-workspace/outlines";
          else if (e) {
            const u = `https://outline.aiworkspace.pro/single-workspace/${e.id}/outlines`;
            window.location.href = u;
          } else
            window.location.href = "https://outline.aiworkspace.pro";
          break;
        case "canvas":
          if (i)
            window.location.href = "https://canvas.aiworkspace.pro/all-workspace/canvas";
          else if (e) {
            const u = `https://canvas.aiworkspace.pro/single-workspace/${e.id}/canvas`;
            window.location.href = u;
          } else
            window.location.href = "https://canvas.aiworkspace.pro";
          break;
        case "files":
          if (i)
            window.location.href = "https://drive.aiworkspace.pro/all-workspace/files";
          else if (e) {
            const u = `https://drive.aiworkspace.pro/single-workspace/${e.id}/files`;
            window.location.href = u;
          } else
            window.location.href = "https://drive.aiworkspace.pro";
          break;
        case "tasks":
          if (i)
            window.location.href = "https://tasks.aiworkspace.pro/all-workspace/tasks";
          else if (e) {
            const u = `https://tasks.aiworkspace.pro/single-workspace/${e.id}/tasks`;
            window.location.href = u;
          } else
            window.location.href = "https://tasks.aiworkspace.pro";
          break;
        case "goals":
          if (i)
            window.location.href = "https://app.aiworkspace.pro/all-workspace/goals";
          else if (e) {
            const u = `https://app.aiworkspace.pro/single-workspace/${e.id}/goals`;
            window.location.href = u;
          } else
            window.location.href = "https://app.aiworkspace.pro/all-workspace/goals";
          break;
        case "events":
          if (i)
            window.location.href = "https://app.aiworkspace.pro/all-workspace/events";
          else if (e) {
            const u = `https://app.aiworkspace.pro/single-workspace/${e.id}/events`;
            window.location.href = u;
          } else
            window.location.href = "https://app.aiworkspace.pro/all-workspace/events";
          break;
        case "contacts":
          if (i)
            window.location.href = "https://app.aiworkspace.pro/all-workspace/contacts";
          else if (e) {
            const u = `https://app.aiworkspace.pro/single-workspace/${e.id}/contacts`;
            window.location.href = u;
          } else
            window.location.href = "https://app.aiworkspace.pro/all-workspace/contacts";
          break;
        case "ai-portfolios":
          if (i)
            window.location.href = "https://spreadsheet.aiworkspace.pro/all-workspace/ai-portfolios";
          else if (e) {
            const u = `https://spreadsheet.aiworkspace.pro/single-workspace/${e.id}/ai-portfolios`;
            window.location.href = u;
          } else
            window.location.href = "https://spreadsheet.aiworkspace.pro";
          break;
        case "settings":
          if (i)
            window.location.href = "https://settings.aiworkspace.pro/all-workspace/settings";
          else if (e) {
            const u = `https://settings.aiworkspace.pro/single-workspace/${e.id}/settings`;
            window.location.href = u;
          } else
            window.location.href = "https://settings.aiworkspace.pro";
          break;
        default:
          if (i) {
            const u = `https://app.aiworkspace.pro/all-workspace/${r.key}`;
            window.location.href = u;
          } else if (e) {
            const u = `https://app.aiworkspace.pro/single-workspace/${e.id}/${r.key}`;
            window.location.href = u;
          } else {
            const u = `https://app.aiworkspace.pro/${r.key}`;
            window.location.href = u;
          }
          break;
      }
    }, us = (r) => {
      const e = se.value, i = H.value;
      switch (r.key) {
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
          return i ? `https://app.aiworkspace.pro/all-workspace/${r.key}` : e ? `https://app.aiworkspace.pro/single-workspace/${e.id}/${r.key}` : `https://app.aiworkspace.pro/${r.key}`;
      }
    }, Ce = (r) => {
      switch (r) {
        case "profile":
          o.onProfileClick ? o.onProfileClick() : F.info("Profile settings coming soon");
          break;
        case "workspaces":
          g.value = !0;
          break;
        case "logout":
          ps();
          break;
      }
    }, je = (r) => {
      var e;
      (e = c.value) == null || e.setCurrentWorkspace(r), g.value = !1, n("workspaceChange", r), F.success(`Switched to ${r.title}`);
    }, ds = () => {
      Ye.prompt("Enter workspace name:", "Create New Workspace", {
        confirmButtonText: "Create",
        cancelButtonText: "Cancel",
        inputPattern: /\S/,
        inputErrorMessage: "Workspace name cannot be empty"
      }).then(({ value: r }) => {
        var i;
        const e = {
          id: Date.now(),
          title: r,
          description: "New workspace",
          archived: !1,
          created_by: "",
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          latest_activity: (/* @__PURE__ */ new Date()).toISOString(),
          hasAccess: !0,
          accessType: "edit"
        };
        S.value.push(e), (i = c.value) == null || i.setWorkspaces(S.value), je(e), F.success(`Created workspace: ${r}`);
      }).catch(() => {
      });
    }, ps = () => {
      Ye.confirm(
        "Are you sure you want to sign out?",
        "Sign Out",
        {
          confirmButtonText: "Sign Out",
          cancelButtonText: "Cancel",
          type: "warning"
        }
      ).then(async () => {
        var r;
        (r = c.value) == null || r.clearData(), await _(), typeof window < "u" && window.dispatchEvent(new CustomEvent("session-logout-detected", {
          detail: { timestamp: /* @__PURE__ */ new Date(), source: "manual-logout" }
        })), n("logout"), F.success("Signed out successfully");
      }).catch(() => {
      });
    }, Me = async () => {
      var r, e;
      if (m.value.user) {
        const i = m.value.user;
        G.value = {
          name: i.name || ((r = i.email) == null ? void 0 : r.split("@")[0]) || "User",
          email: i.email || "",
          avatar_url: i.avatar_url || null,
          initials: (i.name || ((e = i.email) == null ? void 0 : e.split("@")[0]) || "U").split(" ").map((u) => u[0]).join("").toUpperCase().substring(0, 2)
        }, o.showWorkspaceSelector && await Be();
      }
    };
    ue(() => m.value.user, (r) => {
      var e;
      r ? Me() : (G.value = { name: "", email: "", avatar_url: null, initials: "" }, (e = c.value) == null || e.clearData());
    }), ue(w, (r) => {
      r && ee.value && (console.log("[AIWorkspaceHeader] Session loss detected, showing modal"), v.value = !0);
    }), ue(() => o.currentWorkspaceId, (r) => {
      var e;
      if (r && A.value.length) {
        const i = A.value.find((u) => u.id.toString() === r.toString());
        i && ((e = c.value) == null || e.setCurrentWorkspace(i));
      }
    }), Se(async () => {
      ee.value && (await Me(), await $()), await ws(), qe(), _s();
    });
    const fs = async (r) => {
      console.log("Login successful:", r), V.value = !1, await Me(), n("login"), F.success("Welcome back!");
    }, gs = async () => {
      console.log("[AIWorkspaceHeader] Retrying session..."), await p() ? (v.value = !1, l(), F.success("Session restored successfully!")) : F.error("Failed to restore session. Please log in again.");
    }, hs = () => {
      console.log("[AIWorkspaceHeader] Opening login modal from session loss"), v.value = !1, V.value = !0;
    }, vs = () => {
      console.log("[AIWorkspaceHeader] Refreshing page due to session loss"), window.location.reload();
    }, ms = () => {
      M.value = 0, b(), F.success("Manual Pinia retry initiated.");
    }, ws = async () => {
      try {
        const r = await fetch("/version.json");
        if (console.log("Version.json response status:", r.status, "Content-Type:", r.headers.get("content-type")), r.ok) {
          const e = r.headers.get("content-type");
          if (e && e.includes("application/json"))
            try {
              const i = await r.json();
              console.log("Version data received:", i), q.value = i.shortCommitHash || "unknown", z.value = i.fullCommitHash || "unknown", console.log("✅ Loaded commit hash from consuming app:", q.value);
            } catch (i) {
              console.error("Failed to parse version.json:", i), q.value = "parse-error", z.value = "parse-error";
            }
          else
            console.warn("❌ version.json returned non-JSON content type:", e), console.warn("📋 This means the consuming app has not set up version.json generation"), console.warn("🔧 The server is returning HTML instead of JSON - likely a 404 page or index.html"), console.warn("📖 Please follow the setup guide: QUICK_FIX_VERSION.md"), console.warn("🚀 Quick fix: Create a version.json file in your app's public directory"), console.warn(""), console.warn("🔧 IMMEDIATE FIX: Copy and run this in your app's terminal:"), console.warn(`   node -e "const fs=require('fs');const{execSync}=require('child_process');const path=require('path');const hash=execSync('git rev-parse HEAD').toString().trim();const data={fullCommitHash:hash,shortCommitHash:hash.substring(0,7),timestamp:new Date().toISOString(),buildTime:new Date().toISOString()};fs.mkdirSync('public',{recursive:true});fs.writeFileSync('public/version.json',JSON.stringify(data,null,2));console.log('✅ Created version.json with hash:',hash.substring(0,7));"`), console.warn(""), console.warn("📁 Or manually create public/version.json with your git commit hash"), q.value = "setup-required", z.value = "setup-required";
        } else
          console.warn("❌ Could not load version.json from consuming app - Status:", r.status), console.warn("📋 This usually means the consuming app has not set up version.json generation"), console.warn("📖 Please follow the setup guide: QUICK_FIX_VERSION.md"), q.value = "not-found", z.value = "not-found";
      } catch (r) {
        console.warn("❌ Error loading commit hash from consuming app:", r), console.warn("📖 Please follow the setup guide: QUICK_FIX_VERSION.md"), q.value = "error", z.value = "error";
      }
    }, ks = async () => {
      try {
        if (z.value === "setup-required") {
          F.warning("Version setup required - see console for details");
          return;
        }
        if (z.value === "not-found" || z.value === "error" || z.value === "parse-error") {
          F.warning("Version information not available");
          return;
        }
        await navigator.clipboard.writeText(z.value), F.success("Commit hash copied to clipboard!");
      } catch (r) {
        console.error("Failed to copy commit hash:", r), F.error("Failed to copy commit hash");
      }
    }, qe = async () => {
      if (!N.value) {
        N.value = !0;
        try {
          const r = Date.now(), e = await fetch(`/version.json?t=${r}`);
          if (!e.ok)
            throw new Error("Failed to fetch version info");
          const i = e.headers.get("content-type");
          if (!i || !i.includes("application/json")) {
            console.warn("Version check skipped: version.json not properly configured");
            return;
          }
          const u = await e.json();
          K.value = u.fullCommitHash, z.value !== K.value && (ie.value = !0, console.log("Version mismatch detected:", {
            currentVersion: z.value,
            latestVersion: K.value,
            serverBuildTime: u.buildTime
          }));
        } catch (r) {
          console.error("Error checking for updates:", r);
        } finally {
          N.value = !1;
        }
      }
    }, _s = () => {
      E.value = setInterval(() => {
        qe();
      }, 30 * 1e3);
    }, ys = () => {
      console.log("User reloaded for update:", {
        currentVersion: z.value,
        latestVersion: K.value
      }), window.location.reload();
    }, Je = () => {
      ie.value = !1, console.log("Update alert dismissed:", {
        currentVersion: z.value,
        latestVersion: K.value
      });
    }, Ss = async () => {
      try {
        await navigator.clipboard.writeText(es), F.success("Setup command copied to clipboard!");
      } catch (r) {
        console.error("Failed to copy setup command:", r), F.error("Failed to copy setup command");
      }
    }, bs = () => {
      window.open("https://github.com/aiworkspace/header-package/blob/main/README_VERSION_SETUP.md", "_blank");
    };
    return ss(() => {
      E.value && clearInterval(E.value);
    }), (r, e) => {
      const i = ne("el-icon"), u = ne("el-button"), B = ne("el-tag"), oe = ne("el-dropdown-item"), pe = ne("el-dropdown-menu"), Re = ne("el-dropdown"), Cs = ne("el-dialog"), Ke = ne("el-alert");
      return y(), x("header", _o, [
        !L.value && M.value < be || T(W) ? (y(), x("div", yo, [
          e[10] || (e[10] = Ee('<div class="header-left" data-v-cfb0a76e><div class="logo-section" data-v-cfb0a76e><a href="/" class="logo" data-v-cfb0a76e><div class="text-logo" data-v-cfb0a76e><span class="logo-text" data-v-cfb0a76e>AI Workspace</span></div></a></div></div>', 1)),
          t("div", So, [
            t("span", bo, [
              T(W) ? (y(), x("span", Co, "Syncing authentication...")) : (y(), x("span", Eo, "Initializing..."))
            ])
          ])
        ])) : !L.value && M.value >= be ? (y(), x("div", Ao, [
          e[12] || (e[12] = Ee('<div class="header-left" data-v-cfb0a76e><div class="logo-section" data-v-cfb0a76e><a href="/" class="logo" data-v-cfb0a76e><div class="text-logo" data-v-cfb0a76e><span class="logo-text" data-v-cfb0a76e>AI Workspace</span></div></a></div></div>', 1)),
          t("div", { class: "header-center" }, [
            e[11] || (e[11] = t("span", { class: "fallback-text" }, "Header Ready (Fallback Mode)", -1)),
            t("button", {
              onClick: ms,
              class: "retry-button"
            }, "Retry Pinia")
          ]),
          e[13] || (e[13] = Ee('<div class="header-right" data-v-cfb0a76e><div class="user-profile" data-v-cfb0a76e><div class="user-info" data-v-cfb0a76e><span class="user-name" data-v-cfb0a76e>User</span></div><div class="user-avatar" data-v-cfb0a76e><span class="avatar-placeholder" data-v-cfb0a76e>U</span></div></div></div>', 1))
        ])) : ee.value && !T(P) ? (y(), x("div", Io, [
          e[16] || (e[16] = Ee('<div class="header-left" data-v-cfb0a76e><div class="logo-section" data-v-cfb0a76e><a href="/" class="logo" data-v-cfb0a76e><div class="text-logo" data-v-cfb0a76e><span class="logo-text" data-v-cfb0a76e>AI Workspace</span></div></a></div></div>', 1)),
          t("div", Lo, [
            t("span", Vo, [
              h(i, null, {
                default: d(() => [
                  h(T(os))
                ]),
                _: 1
              }),
              e[14] || (e[14] = j(" Session expired - Please log in again ", -1))
            ])
          ]),
          t("div", Mo, [
            h(u, {
              type: "primary",
              onClick: e[0] || (e[0] = (I) => V.value = !0)
            }, {
              default: d(() => [
                h(i, null, {
                  default: d(() => [
                    h(T(Ne))
                  ]),
                  _: 1
                }),
                e[15] || (e[15] = j(" Log In ", -1))
              ]),
              _: 1
            })
          ])
        ])) : ee.value && T(P) ? (y(), x("div", Ro, [
          t("div", Wo, [
            t("div", Uo, [
              t("a", $o, [
                r.customLogo ? (y(), x("img", {
                  key: 0,
                  src: r.customLogo,
                  alt: "AIWorkspace",
                  class: "logo-image"
                }, null, 8, Po)) : (y(), x("div", xo, [...e[17] || (e[17] = [
                  t("span", { class: "logo-text" }, "AI Workspace", -1)
                ])]))
              ])
            ])
          ]),
          r.showSecondaryNavigation ? (y(), x("div", To, [
            t("nav", Do, [
              r.showWorkspaceSelector ? (y(), Z(Re, {
                key: 0,
                onCommand: ls,
                trigger: "hover"
              }, {
                dropdown: d(() => [
                  h(pe, { class: "workspace-tree-dropdown" }, {
                    default: d(() => [
                      h(oe, {
                        command: "all-workspace",
                        class: We({ active: H.value })
                      }, {
                        default: d(() => [
                          t("a", Oo, [
                            t("div", Ho, [
                              e[19] || (e[19] = t("span", { class: "workspace-icon" }, "🌐", -1)),
                              e[20] || (e[20] = t("span", null, "All workspace", -1)),
                              H.value ? (y(), Z(B, {
                                key: 0,
                                size: "small",
                                type: "success"
                              }, {
                                default: d(() => [...e[18] || (e[18] = [
                                  j("Current", -1)
                                ])]),
                                _: 1
                              })) : Y("", !0)
                            ])
                          ])
                        ]),
                        _: 1
                      }, 8, ["class"]),
                      A.value.length > 0 ? (y(), Z(oe, {
                        key: 0,
                        divided: "",
                        disabled: ""
                      })) : Y("", !0),
                      (y(!0), x(Ue, null, $e(A.value, (I) => (y(), Z(oe, {
                        key: I.id,
                        command: `workspace-${I.id}`
                      }, {
                        default: d(() => {
                          var ve;
                          return [
                            t("a", {
                              href: `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${I.id}/dashboard`,
                              class: "nav-link"
                            }, [
                              t("div", {
                                class: "workspace-dropdown-item",
                                style: Ls({ paddingLeft: (I.level || 0) * 16 + "px" })
                              }, [
                                t("span", zo, J(I.children && I.children.length ? "📁" : "📄"), 1),
                                t("span", null, J(I.title), 1),
                                I.id === ((ve = se.value) == null ? void 0 : ve.id) ? (y(), Z(B, {
                                  key: 0,
                                  size: "small",
                                  type: "success"
                                }, {
                                  default: d(() => [...e[21] || (e[21] = [
                                    j("Current", -1)
                                  ])]),
                                  _: 1
                                })) : Y("", !0)
                              ], 4)
                            ], 8, Fo)
                          ];
                        }),
                        _: 2
                      }, 1032, ["command"]))), 128)),
                      A.value.length === 0 ? (y(), Z(oe, {
                        key: 1,
                        disabled: ""
                      }, {
                        default: d(() => [...e[22] || (e[22] = [
                          j(" No workspaces ", -1)
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
                    t("span", No, [
                      j(J(H.value ? "All workspace" : ((I = se.value) == null ? void 0 : I.title) || "Select Workspace") + " ", 1),
                      h(i, { class: "nav-arrow" }, {
                        default: d(() => [
                          h(T(Xe))
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }),
                _: 1
              })) : Y("", !0),
              r.showWorkspaceSelector ? (y(), x("span", Bo, "/")) : Y("", !0),
              r.showSecondaryNavigation ? (y(), Z(Re, {
                key: 2,
                trigger: "hover"
              }, {
                dropdown: d(() => [
                  h(pe, null, {
                    default: d(() => [
                      (y(!0), x(Ue, null, $e(Fe.value, (I) => (y(), Z(oe, {
                        key: I.label,
                        class: We({ active: I.active })
                      }, {
                        default: d(() => [
                          t("a", {
                            href: us(I),
                            class: "nav-link",
                            onClick: ge((ve) => cs(I), ["prevent"])
                          }, J(I.label), 9, qo)
                        ]),
                        _: 2
                      }, 1032, ["class"]))), 128))
                    ]),
                    _: 1
                  })
                ]),
                default: d(() => [
                  t("span", jo, [
                    j(J(ns.value) + " ", 1),
                    h(i, { class: "nav-arrow" }, {
                      default: d(() => [
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
          t("div", Jo, [
            h(Re, {
              onCommand: Ce,
              trigger: "click",
              placement: "bottom-end"
            }, {
              dropdown: d(() => [
                h(pe, null, {
                  default: d(() => [
                    h(oe, null, {
                      default: d(() => [
                        t("a", {
                          href: "/profile",
                          class: "nav-link",
                          onClick: e[1] || (e[1] = ge((I) => Ce("profile"), ["prevent"]))
                        }, "Profile Settings")
                      ]),
                      _: 1
                    }),
                    r.showWorkspaceSelector ? (y(), Z(oe, { key: 0 }, {
                      default: d(() => [
                        t("a", {
                          href: "#switch-workspace",
                          class: "nav-link",
                          onClick: e[2] || (e[2] = ge((I) => Ce("workspaces"), ["prevent"]))
                        }, "Switch Workspace")
                      ]),
                      _: 1
                    })) : Y("", !0),
                    h(oe, {
                      onClick: ks,
                      class: "version-item"
                    }, {
                      default: d(() => [
                        t("div", ea, [
                          e[23] || (e[23] = t("span", { class: "version-label" }, "Version:", -1)),
                          t("span", sa, J(q.value), 1)
                        ])
                      ]),
                      _: 1
                    }),
                    h(oe, { divided: "" }, {
                      default: d(() => [
                        t("a", {
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
                t("div", Ko, [
                  t("div", Go, [
                    t("span", Yo, J(G.value.name), 1)
                  ]),
                  t("div", Xo, [
                    G.value.avatar_url ? (y(), x("img", {
                      key: 0,
                      src: G.value.avatar_url,
                      alt: G.value.name
                    }, null, 8, Qo)) : (y(), x("span", Zo, J(G.value.initials), 1))
                  ])
                ])
              ]),
              _: 1
            })
          ])
        ])) : (y(), x("div", oa, [
          t("div", aa, [
            t("div", ta, [
              t("a", ra, [
                r.customLogo ? (y(), x("img", {
                  key: 0,
                  src: r.customLogo,
                  alt: "AIWorkspace",
                  class: "logo-image"
                }, null, 8, na)) : (y(), x("div", ia, [...e[24] || (e[24] = [
                  t("span", { class: "logo-text" }, "AI Workspace", -1)
                ])]))
              ])
            ])
          ]),
          e[26] || (e[26] = t("div", { class: "header-center" }, [
            t("span", { class: "welcome-text" }, "Welcome to AI Workspace")
          ], -1)),
          t("div", la, [
            h(u, {
              type: "primary",
              size: "large",
              class: "login-button",
              onClick: e[4] || (e[4] = (I) => V.value = !0)
            }, {
              default: d(() => [
                h(i, null, {
                  default: d(() => [
                    h(T(Ne))
                  ]),
                  _: 1
                }),
                e[25] || (e[25] = j(" Login / Signup ", -1))
              ]),
              _: 1
            })
          ])
        ])),
        ee.value && r.showWorkspaceSelector ? (y(), Z(Cs, {
          key: 5,
          modelValue: g.value,
          "onUpdate:modelValue": e[6] || (e[6] = (I) => g.value = I),
          title: "Switch Workspace",
          width: "500px",
          onClose: e[7] || (e[7] = (I) => g.value = !1)
        }, {
          footer: d(() => [
            h(u, {
              onClick: e[5] || (e[5] = (I) => g.value = !1)
            }, {
              default: d(() => [...e[27] || (e[27] = [
                j("Cancel", -1)
              ])]),
              _: 1
            }),
            h(u, {
              type: "primary",
              onClick: ds
            }, {
              default: d(() => [...e[28] || (e[28] = [
                j("Create New Workspace", -1)
              ])]),
              _: 1
            })
          ]),
          default: d(() => [
            t("div", ca, [
              (y(!0), x(Ue, null, $e(S.value, (I) => {
                var ve, Ge;
                return y(), x("div", {
                  key: I.id,
                  class: We(["workspace-item", { active: I.id === ((ve = se.value) == null ? void 0 : ve.id) }]),
                  onClick: (Ea) => je(I)
                }, [
                  t("div", da, J(I.children && I.children.length ? "📁" : "📄"), 1),
                  t("div", pa, [
                    t("h3", null, J(I.title), 1),
                    t("p", null, J(I.description), 1),
                    t("span", fa, J(I.hasAccess ? "Active" : "Inactive"), 1)
                  ]),
                  I.id === ((Ge = se.value) == null ? void 0 : Ge.id) ? (y(), x("div", ga, [
                    h(i, null, {
                      default: d(() => [
                        h(T(Ts))
                      ]),
                      _: 1
                    })
                  ])) : Y("", !0)
                ], 10, ua);
              }), 128))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])) : Y("", !0),
        h(ro, {
          modelValue: V.value,
          "onUpdate:modelValue": e[8] || (e[8] = (I) => V.value = I),
          onLoginSuccess: fs
        }, null, 8, ["modelValue"]),
        h(ko, {
          modelValue: v.value,
          "onUpdate:modelValue": e[9] || (e[9] = (I) => v.value = I),
          "session-loss-event": T(D),
          "can-retry-session": T(k) || !1,
          onRetry: gs,
          onLogin: hs,
          onRefresh: vs
        }, null, 8, ["modelValue", "session-loss-event", "can-retry-session"]),
        ie.value ? (y(), Z(Ke, {
          key: 6,
          title: "New Version Available!",
          type: "warning",
          closable: !0,
          onClose: Je,
          "show-icon": "",
          class: "update-alert"
        }, {
          default: d(() => [
            t("div", ha, [
              e[31] || (e[31] = t("p", null, "A new version of the application is available. Please reload to get the latest updates and features.", -1)),
              t("div", va, [
                h(u, {
                  type: "primary",
                  size: "small",
                  onClick: ys
                }, {
                  default: d(() => [...e[29] || (e[29] = [
                    j(" Reload Now ", -1)
                  ])]),
                  _: 1
                }),
                h(u, {
                  size: "small",
                  onClick: Je
                }, {
                  default: d(() => [...e[30] || (e[30] = [
                    j(" Dismiss ", -1)
                  ])]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        })) : Y("", !0),
        q.value === "setup-required" || q.value === "not-found" || q.value === "error" || q.value === "parse-error" ? (y(), Z(Ke, {
          key: 7,
          title: "Version Setup Required",
          type: "error",
          closable: !1,
          "show-icon": "",
          class: "version-setup-alert"
        }, {
          default: d(() => [
            t("div", ma, [
              e[35] || (e[35] = t("p", null, [
                t("strong", null, "The header package needs version.json to be set up in your app.")
              ], -1)),
              e[36] || (e[36] = t("p", null, `This allows the header to display your app's commit hash instead of "setup-required".`, -1)),
              t("div", wa, [
                h(u, {
                  type: "primary",
                  size: "small",
                  onClick: Ss
                }, {
                  default: d(() => [...e[32] || (e[32] = [
                    j(" Copy Fix Command ", -1)
                  ])]),
                  _: 1
                }),
                h(u, {
                  size: "small",
                  onClick: bs
                }, {
                  default: d(() => [...e[33] || (e[33] = [
                    j(" View Setup Guide ", -1)
                  ])]),
                  _: 1
                })
              ]),
              t("div", { class: "setup-command" }, [
                e[34] || (e[34] = t("p", null, [
                  t("strong", null, "Quick Fix:"),
                  j(" Run this command in your app's terminal:")
                ], -1)),
                t("pre", null, J(es))
              ])
            ])
          ]),
          _: 1
        })) : Y("", !0)
      ]);
    };
  }
});
const Ba = /* @__PURE__ */ Ve(ka, [["__scopeId", "data-v-cfb0a76e"]]), _a = { class: "auth-callback" }, ya = /* @__PURE__ */ le({
  __name: "AuthCallback",
  setup(a) {
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
          console.log("OAuth login successful:", m.email), o.session.access_token && ye(ke, o.session.access_token), o.session.refresh_token && ye(_e, o.session.refresh_token), De();
          const _ = Us();
          console.log("[callback] Post-login redirect URL:", _), console.log("[callback] Session storage redirect:", sessionStorage.getItem("post-login-redirect")), console.log("[callback] Local storage redirect:", localStorage.getItem("post-login-redirect"));
          const W = _ || "/";
          if (console.log("[callback] Final redirect URL:", W), W.startsWith("/")) {
            const P = window.location.origin, D = `${P}${W}`;
            console.log("[callback] redirecting to:", D, { hostname: window.location.hostname, origin: P }), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
              window.location.href = D;
            }, 100);
          } else
            console.log("[callback] redirecting to absolute URL:", W), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
              window.location.href = W;
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
      t("div", { class: "callback-container" }, [
        t("div", { class: "loading-spinner" }, [
          t("div", { class: "spinner" })
        ]),
        t("h2", null, "Processing login..."),
        t("p", null, "Please wait while we complete your authentication.")
      ], -1)
    ])]));
  }
});
const ja = /* @__PURE__ */ Ve(ya, [["__scopeId", "data-v-acdf6325"]]), fe = class fe {
  constructor() {
    me(this, "validationCache", /* @__PURE__ */ new Map());
    me(this, "CACHE_DURATION", rs().validationCacheDuration);
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
      const _ = this.getCookieValue("sb-access-token"), W = this.getCookieValue("sb-refresh-token");
      if (!_ || !W) {
        const f = {
          isValid: !1,
          needsLogin: !0,
          error: "No authentication tokens found",
          canRetry: !1
        };
        return this.cacheResult(o, f), f;
      }
      const P = await ae();
      let D = null, w = null;
      for (let f = 1; f <= 2; f++)
        try {
          const c = await P.auth.getSession();
          D = c.data.session, w = c.error;
          break;
        } catch (c) {
          if (console.warn(`[SessionValidator] Network error on attempt ${f}:`, c), f === 2) {
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
        const c = {
          isValid: !1,
          needsLogin: ((n = w.message) == null ? void 0 : n.includes("Invalid JWT")) || ((m = w.message) == null ? void 0 : m.includes("JWT expired")),
          error: `Session error: ${w.message}`,
          canRetry: !0
        };
        return this.cacheResult(o, c), c;
      }
      if (!D || !D.user) {
        const f = {
          isValid: !1,
          needsLogin: !0,
          error: "No valid session found",
          canRetry: !0
        };
        return this.cacheResult(o, f), f;
      }
      const k = /* @__PURE__ */ new Date(), p = new Date(D.expires_at * 1e3), l = 5 * 60 * 1e3;
      if (k >= new Date(p.getTime() - l)) {
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
      const W = {
        isValid: !1,
        needsLogin: !1,
        // Don't force login on unexpected errors
        error: `Validation error: ${_}`,
        canRetry: !0
      };
      return this.cacheResult(o, W), W;
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
let Oe = fe;
const He = Oe.getInstance(), Sa = (a = !1) => He.validateSession(a), ba = () => He.restoreSession(), Ca = () => He.clearCache();
async function qa() {
  console.log("[SessionValidator] Initializing session validation...");
  let a = await Sa();
  return !a.isValid && a.canRetry && (console.log("[SessionValidator] Attempting session restoration..."), a = await ba()), a;
}
function Ja() {
  if (typeof window > "u")
    return () => {
    };
  const a = () => {
    console.log("[SessionValidator] Network restored, clearing cache for revalidation"), Ca();
  }, s = () => {
    console.log("[SessionValidator] Network lost, session validation may fail");
  };
  return window.addEventListener("online", a), window.addEventListener("offline", s), () => {
    window.removeEventListener("online", a), window.removeEventListener("offline", s);
  };
}
export {
  ke as ACCESS_COOKIE,
  Ba as AIWorkspaceHeader,
  ja as AuthCallback,
  ot as LS_ACCESS_KEY,
  at as LS_REFRESH_KEY,
  ro as LoginModal,
  Le as PackageError,
  _e as REFRESH_COOKIE,
  ko as SessionLossModal,
  Oe as SessionValidator,
  tt as buildOAuthRedirectUrl,
  Te as clearLocalStorageTokens,
  Ca as clearSessionCache,
  we as clearSessionCookie,
  Ya as configureSupabase,
  Ks as conservativeConfig,
  Oa as createSessionConfig,
  Ba as default,
  he as defaultSessionConfig,
  za as detectionScenarios,
  as as developmentConfig,
  rt as ensureCrossSubdomainCookies,
  Js as fastDetectionConfig,
  Ha as getConfigByPreset,
  nt as getCookie,
  Us as getPostLoginBase,
  rs as getSessionConfig,
  ae as getSupabase,
  Bs as handleBundlingError,
  Xa as handleDomainChangeAuth,
  Ws as initializeCrossSubdomainAuth,
  qa as initializeSessionValidation,
  ts as productionConfig,
  Qa as restoreCrossSubdomainSession,
  ba as restoreSession,
  xe as restoreSessionWithRetry,
  Wa as safeExecute,
  Ua as safeExecuteAsync,
  Pa as safeGetCookie,
  Ta as safeGetLocalStorage,
  $a as safeImport,
  xa as safeSetCookie,
  Da as safeSetLocalStorage,
  Na as safeWindowOperation,
  Gs as sessionConfigPresets,
  He as sessionValidator,
  ye as setSessionCookie,
  Za as setupAuthStateListener,
  js as setupGlobalErrorHandler,
  et as setupImmediateCrossSubdomainAuth,
  Ja as setupNetworkAwareValidation,
  lt as setupUniversalCallback,
  Ie as supabase,
  De as syncCookiesToLocalStorage,
  Fa as timingInfo,
  Qs as useAuth,
  qs as useEnhancedAuth,
  Ys as useSessionMonitor,
  Xs as useWorkspaceStore,
  Sa as validateSession
};
