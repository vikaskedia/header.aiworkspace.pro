var Ss = Object.defineProperty;
var bs = (a, s, o) => s in a ? Ss(a, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : a[s] = o;
var me = (a, s, o) => (bs(a, typeof s != "symbol" ? s + "" : s, o), o);
import { defineComponent as le, openBlock as y, createElementBlock as x, createElementVNode as r, ref as C, computed as J, onMounted as Se, onUnmounted as Ze, watch as ue, reactive as Cs, resolveComponent as ne, createBlock as se, withCtx as f, toDisplayString as B, createVNode as v, unref as T, withModifiers as ge, createCommentVNode as q, createTextVNode as j, createStaticVNode as Ae, normalizeClass as $e, Fragment as Ue, renderList as Re, normalizeStyle as As } from "vue";
import { ElForm as Es, ElMessage as G, ElDialog as Is, ElIcon as Ee, ElButton as Pe, ElProgress as Ls, ElMessageBox as Je } from "element-plus";
import { i as Vs, g as oe, r as xe, s as Ie } from "./supabase-7523f80a.mjs";
import { c as Ga, h as Ka, b as ja, d as qa, a as Ja } from "./supabase-7523f80a.mjs";
import { clearSessionCookie as we, ACCESS_COOKIE as ke, REFRESH_COOKIE as _e, clearLocalStorageTokens as Te, setSessionCookie as ye, syncCookiesToLocalStorage as De, getPostLoginBase as Ms } from "./utils/authRedirect.js";
import { LS_ACCESS_KEY as Xa, LS_REFRESH_KEY as Qa, buildOAuthRedirectUrl as Za, ensureCrossSubdomainCookies as et, getCookie as st } from "./utils/authRedirect.js";
import { defineStore as Ws } from "pinia";
import { setupUniversalCallback as at } from "./utils/universalCallback.js";
/*! Element Plus Icons Vue v2.3.2 */
var $s = /* @__PURE__ */ le({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(a) {
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
}), Ye = $s, Us = /* @__PURE__ */ le({
  name: "Check",
  __name: "check",
  setup(a) {
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
}), Rs = Us, Ps = /* @__PURE__ */ le({
  name: "Lock",
  __name: "lock",
  setup(a) {
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
}), Xe = Ps, xs = /* @__PURE__ */ le({
  name: "Message",
  __name: "message",
  setup(a) {
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
}), Ts = xs, Ds = /* @__PURE__ */ le({
  name: "Refresh",
  __name: "refresh",
  setup(a) {
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
}), Qe = Ds, Ns = /* @__PURE__ */ le({
  name: "User",
  __name: "user",
  setup(a) {
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
}), Ne = Ns, Os = /* @__PURE__ */ le({
  name: "Warning",
  __name: "warning",
  setup(a) {
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
}), es = Os;
class Le extends Error {
  constructor(o, n = {}, m) {
    super(o);
    me(this, "context");
    me(this, "originalError");
    this.name = "PackageError", this.context = n, this.originalError = m;
  }
}
function Ia(a, s = {}, o) {
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
async function La(a, s = {}, o) {
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
function Hs(a, s = {}) {
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
async function Va(a, s = {}, o) {
  try {
    return await a();
  } catch (n) {
    return console.warn("[ErrorHandler] Import failed:", {
      context: s,
      error: n instanceof Error ? n.message : String(n)
    }), o !== void 0 ? o : void 0;
  }
}
function Ma(a) {
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
function Wa(a, s, o = {}) {
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
function $a(a) {
  try {
    return typeof localStorage > "u" ? null : localStorage.getItem(a);
  } catch (s) {
    return console.warn("[ErrorHandler] localStorage get failed:", {
      key: a,
      error: s instanceof Error ? s.message : String(s)
    }), null;
  }
}
function Ua(a, s) {
  try {
    return typeof localStorage > "u" ? !1 : (localStorage.setItem(a, s), !0);
  } catch (o) {
    return console.warn("[ErrorHandler] localStorage set failed:", {
      key: a,
      error: o instanceof Error ? o.message : String(o)
    }), !1;
  }
}
function Ra(a, s) {
  try {
    return typeof window > "u" ? s : a(window);
  } catch (o) {
    return console.warn("[ErrorHandler] Window operation failed:", {
      error: o instanceof Error ? o.message : String(o)
    }), s;
  }
}
function Fs() {
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
typeof window < "u" && Fs();
function zs() {
  const a = C({
    user: null,
    isAuthenticated: !1,
    isLoading: !0,
    error: null
  }), s = C(null), o = J(() => a.value.isAuthenticated), n = J(() => a.value.user), m = J(() => a.value.isLoading), _ = async () => {
    var k, u, l, U, d, c, L, M, b, p, V, h, S, ae, K, te, X, ie, z, A, N;
    try {
      console.log("[auth][enhanced] Starting loadUserInfo..."), console.log("[auth][enhanced] Ensuring cross-subdomain cookie synchronization...");
      const O = "sb-access-token", E = "sb-refresh-token", H = (W) => {
        try {
          const R = location.hostname;
          if (R === "localhost" || /^\d+\.\d+\.\d+\.\d+$/.test(R)) {
            console.log("[auth][enhanced] Skipping cookie sync for localhost");
            return;
          }
          const Q = "aiworkspace.pro";
          if (!R.endsWith(`.${Q}`) && R !== Q) {
            console.log("[auth][enhanced] Skipping cookie sync - not under apex domain");
            return;
          }
          console.log("[auth][enhanced] Performing cookie synchronization"), W.forEach((Z) => {
            const ce = document.cookie.split(";").find((de) => de.trim().startsWith(Z + "="));
            if (ce) {
              console.log(`[auth][enhanced] Found cookie: ${Z}`);
              const de = ce.split("=")[1];
              de && (document.cookie = `${Z}=${de}; domain=.${Q}; path=/; secure; samesite=lax`);
            }
          });
        } catch (R) {
          console.warn("[auth][enhanced] Error in cookie sync:", R);
        }
      };
      H([O, E]), await new Promise((W) => setTimeout(W, 50)), H([O, E]), await new Promise((W) => setTimeout(W, 50));
      let Y = null;
      try {
        const R = await (await oe()).auth.getSession();
        Y = (k = R == null ? void 0 : R.data) == null ? void 0 : k.session;
      } catch (W) {
        console.warn("[auth][enhanced] Error getting Supabase session:", W);
      }
      if (Y && Y.user) {
        console.log("[auth][enhanced] Active Supabase session found");
        const W = Y.user, R = {
          id: W.id,
          name: ((u = W.user_metadata) == null ? void 0 : u.name) || ((l = W.user_metadata) == null ? void 0 : l.user_name) || ((U = W.user_metadata) == null ? void 0 : U.full_name) || ((d = W.email) == null ? void 0 : d.split("@")[0]) || "User",
          email: W.email,
          avatar_url: ((c = W.user_metadata) == null ? void 0 : c.avatar_url) || null,
          user_metadata: W.user_metadata
        };
        return a.value = {
          user: R,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, s.value = {
          user: R,
          access_token: Y.access_token,
          refresh_token: Y.refresh_token
        }, { user: R, session: s.value, error: null };
      }
      console.log("[auth][enhanced] No active session, attempting to restore from cookies...");
      const re = await xe();
      if (re.success && re.session) {
        console.log("[auth][enhanced] Session restored successfully from cookies");
        const W = re.session.user, R = {
          id: W.id,
          name: ((L = W.user_metadata) == null ? void 0 : L.name) || ((M = W.user_metadata) == null ? void 0 : M.user_name) || ((b = W.user_metadata) == null ? void 0 : b.full_name) || ((p = W.email) == null ? void 0 : p.split("@")[0]) || "User",
          email: W.email,
          avatar_url: ((V = W.user_metadata) == null ? void 0 : V.avatar_url) || null,
          user_metadata: W.user_metadata
        };
        return a.value = {
          user: R,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, s.value = re.session, { user: R, session: s.value, error: null };
      } else {
        console.log("[auth][enhanced] Failed to restore session:", re.error), console.log("[auth][enhanced] Retrying session restoration with extended delay..."), await new Promise((R) => setTimeout(R, 500)), H([O, E]);
        const W = await xe();
        if (W.success && W.session) {
          console.log("[auth][enhanced] Session restored on retry");
          const R = W.session.user, Q = {
            id: R.id,
            name: ((h = R.user_metadata) == null ? void 0 : h.name) || ((S = R.user_metadata) == null ? void 0 : S.user_name) || ((ae = R.user_metadata) == null ? void 0 : ae.full_name) || ((K = R.email) == null ? void 0 : K.split("@")[0]) || "User",
            email: R.email,
            avatar_url: ((te = R.user_metadata) == null ? void 0 : te.avatar_url) || null,
            user_metadata: R.user_metadata
          };
          return a.value = {
            user: Q,
            isAuthenticated: !0,
            isLoading: !1,
            error: null
          }, s.value = W.session, { user: Q, session: s.value, error: null };
        }
      }
    } catch (O) {
      console.error("Error getting Supabase session:", O), O instanceof Error && Hs(O, {
        component: "useEnhancedAuth",
        function: "loadUserInfo",
        operation: "session_validation"
      });
      try {
        const E = await xe();
        if (E.success && E.session) {
          console.log("[auth][enhanced] Session restored after error");
          const H = E.session.user, Y = {
            id: H.id,
            name: ((X = H.user_metadata) == null ? void 0 : X.name) || ((ie = H.user_metadata) == null ? void 0 : ie.user_name) || ((z = H.user_metadata) == null ? void 0 : z.full_name) || ((A = H.email) == null ? void 0 : A.split("@")[0]) || "User",
            email: H.email,
            avatar_url: ((N = H.user_metadata) == null ? void 0 : N.avatar_url) || null,
            user_metadata: H.user_metadata
          };
          return a.value = {
            user: Y,
            isAuthenticated: !0,
            isLoading: !1,
            error: null
          }, s.value = E.session, { user: Y, session: s.value, error: null };
        }
      } catch (E) {
        console.error("Error restoring session:", E);
      }
    }
    return console.log("[auth][enhanced] No valid authentication found"), a.value = {
      user: null,
      isAuthenticated: !1,
      isLoading: !1,
      error: "No valid session found"
    }, s.value = null, { user: null, session: null, error: "No valid session found" };
  }, $ = async () => {
    try {
      await (await oe()).auth.signOut(), we(ke), we(_e), Te(), a.value = {
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
  }, P = async (k, u) => {
    var l, U, d, c, L;
    try {
      a.value.isLoading = !0;
      const M = await oe(), { data: b, error: p } = await M.auth.signInWithPassword({
        email: k,
        password: u
      });
      if (p)
        throw p;
      if (b.session) {
        const V = b.session.user, h = {
          id: V.id,
          name: ((l = V.user_metadata) == null ? void 0 : l.name) || ((U = V.user_metadata) == null ? void 0 : U.user_name) || ((d = V.user_metadata) == null ? void 0 : d.full_name) || ((c = V.email) == null ? void 0 : c.split("@")[0]) || "User",
          email: V.email,
          avatar_url: ((L = V.user_metadata) == null ? void 0 : L.avatar_url) || null,
          user_metadata: V.user_metadata
        };
        return a.value = {
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
      return console.error("Sign in error:", M), a.value.isLoading = !1, { user: null, session: null, error: String(M) };
    }
  }, D = async (k, u, l) => {
    var U, d, c, L, M;
    try {
      a.value.isLoading = !0;
      const b = await oe(), { data: p, error: V } = await b.auth.signUp({
        email: k,
        password: u,
        options: {
          data: l
        }
      });
      if (V)
        throw V;
      if (p.session) {
        const h = p.session.user, S = {
          id: h.id,
          name: ((U = h.user_metadata) == null ? void 0 : U.name) || ((d = h.user_metadata) == null ? void 0 : d.user_name) || ((c = h.user_metadata) == null ? void 0 : c.full_name) || ((L = h.email) == null ? void 0 : L.split("@")[0]) || "User",
          email: h.email,
          avatar_url: ((M = h.user_metadata) == null ? void 0 : M.avatar_url) || null,
          user_metadata: h.user_metadata
        };
        return a.value = {
          user: S,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, s.value = {
          user: S,
          access_token: p.session.access_token,
          refresh_token: p.session.refresh_token
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
    await Vs(), await w();
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
    logout: $,
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
}, Bs = {
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
}, Gs = {
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
}, ss = {
  ...he,
  normalCheckInterval: 1e4,
  // 10 seconds - faster for testing
  fastCheckInterval: 2e3,
  // 2 seconds - very fast for testing
  fastMonitoringDuration: 3e4,
  // 30 seconds - shorter for testing
  validationCacheDuration: 1e3
  // 1 second cache for testing
}, os = {
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
function as() {
  switch ("production") {
    case "production":
      return os;
    case "development":
      return ss;
    default:
      return he;
  }
}
function Pa(a) {
  return {
    ...he,
    ...a
  };
}
const Ks = {
  default: he,
  fast: Bs,
  conservative: Gs,
  development: ss,
  production: os
};
function xa(a) {
  return Ks[a];
}
const Ta = {
  immediate: "Immediate (0-2 seconds) - When logout is detected via auth events",
  fast: "Fast (2-5 seconds) - When fast monitoring is active",
  normal: "Normal (up to 30 seconds) - Regular monitoring interval",
  conservative: "Conservative (up to 60 seconds) - Less frequent monitoring"
}, Da = {
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
function js(a) {
  const s = C(!0), o = C(null), n = C(!1), m = C(!1), _ = C(null), $ = C(null), P = C(null), D = { ...as(), ...a }, w = D.normalCheckInterval, k = D.fastCheckInterval, u = D.fastMonitoringDuration, l = D.maxRetryAttempts, U = D.retryDelay, d = J(() => !s.value && o.value !== null), c = J(
    () => {
      var A, N;
      return ((A = o.value) == null ? void 0 : A.canRetry) && ((N = o.value) == null ? void 0 : N.type) !== "manual_check_failed";
    }
  ), L = (A) => {
    var E;
    if (typeof document > "u")
      return null;
    const O = `; ${document.cookie}`.split(`; ${A}=`);
    return O.length === 2 && ((E = O.pop()) == null ? void 0 : E.split(";").shift()) || null;
  }, M = async () => {
    var A, N;
    try {
      console.log("[SessionMonitor] Validating session...");
      const O = L("sb-access-token"), E = L("sb-refresh-token");
      if (!O || !E)
        return console.log("[SessionMonitor] No tokens found in cookies"), !1;
      const H = await oe();
      let Y = null, re = null;
      for (let Z = 1; Z <= 2; Z++)
        try {
          const ce = await H.auth.getSession();
          Y = ce.data.session, re = ce.error;
          break;
        } catch (ce) {
          if (console.warn(`[SessionMonitor] Network error on attempt ${Z}:`, ce), Z === 2)
            return console.log("[SessionMonitor] Network issues detected, maintaining current session state"), s.value;
          await new Promise((de) => setTimeout(de, 1e3));
        }
      if (re)
        return console.warn("[SessionMonitor] Error getting session:", re), (A = re.message) != null && A.includes("Invalid JWT") || (N = re.message) != null && N.includes("JWT expired") ? !1 : s.value;
      if (!Y || !Y.user)
        return console.log("[SessionMonitor] No valid session found"), !1;
      const W = /* @__PURE__ */ new Date(), R = new Date(Y.expires_at * 1e3), Q = 5 * 60 * 1e3;
      return W >= new Date(R.getTime() - Q) ? (console.log("[SessionMonitor] Session is close to expiry or expired"), !1) : (console.log("[SessionMonitor] Session is valid"), _.value = /* @__PURE__ */ new Date(), !0);
    } catch (O) {
      return console.error("[SessionMonitor] Error validating session:", O), s.value;
    }
  }, b = async () => {
    try {
      console.log("[SessionMonitor] Attempting to restore session...");
      const A = L("sb-access-token"), N = L("sb-refresh-token");
      if (!A || !N)
        return console.log("[SessionMonitor] No tokens available for restoration"), !1;
      const O = await oe(), { data: E, error: H } = await O.auth.setSession({
        access_token: A,
        refresh_token: N
      });
      return H ? (console.warn("[SessionMonitor] Error restoring session:", H), !1) : E.session && E.session.user ? (console.log("[SessionMonitor] Session restored successfully"), _.value = /* @__PURE__ */ new Date(), !0) : !1;
    } catch (A) {
      return console.error("[SessionMonitor] Error restoring session:", A), !1;
    }
  }, p = (A, N, O = !0) => {
    console.warn("[SessionMonitor] Session loss detected:", { type: A, message: N }), s.value = !1, o.value = {
      type: A,
      message: N,
      timestamp: /* @__PURE__ */ new Date(),
      canRetry: O
    };
  }, V = async () => {
    console.log("[SessionMonitor] Retrying session validation...");
    for (let A = 1; A <= l; A++) {
      if (console.log(`[SessionMonitor] Retry attempt ${A}/${l}`), A > 1 && await new Promise((E) => setTimeout(E, U)), await b() && await M())
        return console.log("[SessionMonitor] Session restored and validated successfully"), s.value = !0, o.value = null, !0;
      if (await M())
        return console.log("[SessionMonitor] Session validated successfully on retry"), s.value = !0, o.value = null, !0;
    }
    return console.log("[SessionMonitor] All retry attempts failed"), !1;
  }, h = () => {
    console.log("[SessionMonitor] Clearing session loss state"), s.value = !0, o.value = null;
  }, S = () => {
    if (n.value) {
      console.log("[SessionMonitor] Already monitoring, skipping start");
      return;
    }
    console.log("[SessionMonitor] Starting session monitoring..."), n.value = !0, setTimeout(async () => {
      console.log("[SessionMonitor] Performing initial session validation..."), await M() ? console.log("[SessionMonitor] Initial validation successful") : (console.log("[SessionMonitor] Initial validation failed, but waiting for confirmation..."), setTimeout(async () => {
        await M() || p("session_expired", "Your session has expired. Please log in again.", !0);
      }, 3e3));
    }, 2e3), $.value = setInterval(async () => {
      console.log("[SessionMonitor] Periodic session check...");
      const A = await M();
      !A && s.value ? (console.log("[SessionMonitor] Session validation failed, performing confirmation check..."), setTimeout(async () => {
        await M() || p("session_expired", "Your session has expired. Please log in again.", !0);
      }, 2e3)) : A && !s.value && (console.log("[SessionMonitor] Session recovered"), h());
    }, w);
  }, ae = () => {
    if (m.value) {
      console.log("[SessionMonitor] Fast monitoring already active");
      return;
    }
    console.log("[SessionMonitor] Starting fast monitoring (5s intervals)..."), m.value = !0, P.value && clearInterval(P.value), P.value = setInterval(async () => {
      console.log("[SessionMonitor] Fast session check...");
      const A = await M();
      !A && s.value ? (console.log("[SessionMonitor] Fast monitoring detected potential session loss, confirming..."), setTimeout(async () => {
        await M() || (p("session_expired", "Your session has expired. Please log in again.", !0), K());
      }, 1e3)) : A && !s.value && (console.log("[SessionMonitor] Session recovered"), h(), K());
    }, k), setTimeout(() => {
      m.value && (console.log(`[SessionMonitor] Auto-stopping fast monitoring after ${u / 1e3} seconds`), K());
    }, u);
  }, K = () => {
    m.value && (console.log("[SessionMonitor] Stopping fast monitoring..."), m.value = !1, P.value && (clearInterval(P.value), P.value = null));
  }, te = () => {
    n.value && (console.log("[SessionMonitor] Stopping session monitoring..."), n.value = !1, $.value && (clearInterval($.value), $.value = null), K());
  }, X = async () => {
    console.log("[SessionMonitor] Manual session check requested");
    const A = await M();
    return !A && !await b() ? (p("manual_check_failed", "Session validation failed. Please log in again.", !1), !1) : A;
  }, ie = () => {
    console.log("[SessionMonitor] Network error detected, but not triggering immediate session loss"), s.value || p("network_error", "Network connection lost. Please check your internet connection and try again.", !0);
  }, z = () => {
    if (typeof window > "u")
      return;
    const A = () => {
      var E;
      console.log("[SessionMonitor] Network connection restored"), d.value && ((E = o.value) == null ? void 0 : E.type) === "network_error" && setTimeout(() => V(), 1e3);
    }, N = () => {
      console.log("[SessionMonitor] Network connection lost"), ie();
    }, O = (E) => {
      console.log("[SessionMonitor] Logout detected, starting fast monitoring for immediate detection"), ae();
    };
    return window.addEventListener("online", A), window.addEventListener("offline", N), window.addEventListener("session-logout-detected", O), () => {
      window.removeEventListener("online", A), window.removeEventListener("offline", N), window.removeEventListener("session-logout-detected", O);
    };
  };
  return Se(() => {
    console.log("[SessionMonitor] Mounted, setting up monitoring"), S(), z();
  }), Ze(() => {
    console.log("[SessionMonitor] Unmounted, cleaning up"), te();
  }), {
    // State
    isSessionValid: s,
    sessionLossEvent: o,
    isMonitoring: n,
    isFastMonitoring: m,
    lastValidSession: _,
    // Computed
    hasSessionLoss: d,
    canRetrySession: c,
    // Methods
    validateSession: M,
    restoreSession: b,
    retrySession: V,
    clearSessionLoss: h,
    startMonitoring: S,
    stopMonitoring: te,
    startFastMonitoring: ae,
    stopFastMonitoring: K,
    checkSession: X,
    handleNetworkError: ie
  };
}
const qs = Ws("workspace", () => {
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
      const u = localStorage.getItem("user_info");
      if (u)
        try {
          o.value = JSON.parse(u);
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
        let u = Ie.from("workspaces").select(`
          id, title, description, parent_workspace_id, created_by, archived, created_at, git_repo, 
          workspace_access!inner ( access_type, shared_with_user_id ),
          workspace_activities!left ( updated_at )
        `).eq("workspace_access.shared_with_user_id", k.id);
        w || (u = u.eq("archived", !1));
        const { data: l, error: U } = await u;
        if (U)
          throw U;
        const d = /* @__PURE__ */ new Map();
        (l || []).forEach((p) => {
          (p.workspace_access || []).forEach((V) => {
            V.shared_with_user_id === k.id && d.set(p.id, V);
          });
        });
        const c = [...new Set(
          (l || []).filter((p) => p.parent_workspace_id).map((p) => p.parent_workspace_id).filter((p) => !d.has(p))
        )];
        let L = [];
        if (c.length) {
          let p = Ie.from("workspaces").select("id, title, description, parent_workspace_id, created_by, archived, created_at").in("id", c);
          w || (p = p.eq("archived", !1));
          const { data: V, error: h } = await p;
          if (h)
            throw h;
          L = V || [];
        }
        const b = [...l || [], ...L].map((p) => {
          var V, h, S;
          return {
            id: p.id,
            title: p.title,
            description: p.description || "No description",
            parent_workspace_id: p.parent_workspace_id,
            created_by: p.created_by,
            archived: p.archived,
            created_at: p.created_at,
            latest_activity: ((h = (V = p.workspace_activities) == null ? void 0 : V[0]) == null ? void 0 : h.updated_at) || p.created_at,
            hasAccess: d.has(p.id),
            accessType: ((S = d.get(p.id)) == null ? void 0 : S.access_type) || null
          };
        });
        return b.sort((p, V) => new Date(V.latest_activity) - new Date(p.latest_activity)), m(b), b;
      } catch (k) {
        return console.error("loadWorkspaces error", k), [];
      }
    }
  };
});
function Js() {
  const a = C({
    user: null,
    isAuthenticated: !1,
    isLoading: !0,
    error: null
  }), s = C(window.location.href), o = async () => {
    var w, k, u, l, U, d, c, L;
    try {
      a.value.isLoading = !0;
      const M = await oe(), { data: { session: b }, error: p } = await M.auth.getSession();
      if (p) {
        console.error("Error checking auth status:", p), a.value = {
          user: null,
          isAuthenticated: !1,
          isLoading: !1,
          error: p.message
        };
        return;
      }
      b != null && b.user ? (a.value = {
        user: {
          id: b.user.id,
          email: b.user.email || "",
          name: ((w = b.user.user_metadata) == null ? void 0 : w.full_name) || ((k = b.user.user_metadata) == null ? void 0 : k.name) || ((u = b.user.email) == null ? void 0 : u.split("@")[0]) || "User",
          avatar_url: ((l = b.user.user_metadata) == null ? void 0 : l.avatar_url) || ((U = b.user.user_metadata) == null ? void 0 : U.picture) || null,
          initials: (((d = b.user.user_metadata) == null ? void 0 : d.full_name) || ((c = b.user.user_metadata) == null ? void 0 : c.name) || ((L = b.user.email) == null ? void 0 : L.split("@")[0]) || "U").split(" ").map((V) => V[0]).join("").toUpperCase().substring(0, 2)
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
      const u = await oe(), { error: l } = await u.auth.signInWithPassword({
        email: w,
        password: k
      });
      return l ? { success: !1, error: l.message } : (await o(), sessionStorage.setItem("post-login-redirect", s.value), { success: !0 });
    } catch (u) {
      return console.error("Login error:", u), { success: !1, error: u.message || "Login failed" };
    }
  }, m = async (w, k) => {
    var u;
    try {
      const l = await oe(), { data: U, error: d } = await l.auth.signUp({
        email: w,
        password: k
      });
      return d ? { success: !1, error: d.message } : U.user && !U.user.email_confirmed_at ? { success: !0, needsConfirmation: !0 } : (u = U.session) != null && u.user ? (await o(), sessionStorage.setItem("post-login-redirect", s.value), { success: !0 }) : { success: !1, error: "No session created" };
    } catch (l) {
      return console.error("Signup error:", l), { success: !1, error: l.message || "Signup failed" };
    }
  }, _ = async (w) => {
    try {
      const k = `${window.location.origin}/auth/callback`;
      console.log("[OAuth] Starting login with provider:", w), console.log("[OAuth] Redirect URL:", k), console.log("[OAuth] Current URL:", s.value), console.log("[OAuth] Current origin:", window.location.origin);
      const u = await oe(), { error: l } = await u.auth.signInWithOAuth({
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
  }, $ = async () => {
    try {
      const w = await oe(), { error: k } = await w.auth.signOut();
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
      const k = await oe(), { error: u } = await k.auth.resetPasswordForEmail(w, {
        redirectTo: `${window.location.origin}/auth/reset-password`
      });
      return u ? { success: !1, error: u.message } : { success: !0 };
    } catch (k) {
      return console.error("Password reset error:", k), { success: !1, error: k.message || "Password reset failed" };
    }
  }, D = async () => {
    try {
      (await oe()).auth.onAuthStateChange((k, u) => {
        var l;
        switch (console.log("Auth state changed:", k, (l = u == null ? void 0 : u.user) == null ? void 0 : l.email), k) {
          case "SIGNED_IN":
            u != null && u.user && o();
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
            u != null && u.access_token && ye(ke, u.access_token), u != null && u.refresh_token && ye(_e, u.refresh_token), De();
            break;
          case "USER_UPDATED":
            u != null && u.user && o();
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
    authState: J(() => a.value),
    isAuthenticated: J(() => a.value.isAuthenticated),
    user: J(() => a.value.user),
    isLoading: J(() => a.value.isLoading),
    checkAuthStatus: o,
    loginWithEmail: n,
    signupWithEmail: m,
    loginWithProvider: _,
    logout: $,
    resetPassword: P,
    currentUrl: J(() => s.value)
  };
}
const Ys = { class: "login-container" }, Xs = { class: "logo-section" }, Qs = { class: "login-buttons" }, Zs = {
  key: 0,
  class: "forgot-password"
}, eo = { class: "signup-link" }, so = /* @__PURE__ */ le({
  __name: "LoginModal",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue", "login-success"],
  setup(a, { emit: s }) {
    const o = a, n = s, m = J({
      get: () => o.modelValue,
      set: (h) => n("update:modelValue", h)
    }), _ = C(!1), $ = C(!1), P = C(), { loginWithEmail: D, signupWithEmail: w, loginWithProvider: k, resetPassword: u } = Js(), l = Cs({
      email: "",
      password: "",
      confirmPassword: ""
    }), U = J(() => ({
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
            validator: (h, S, ae) => {
              S !== l.password ? ae(new Error("Passwords do not match")) : ae();
            },
            trigger: "blur"
          }
        ]
      } : {}
    })), d = () => {
      var h;
      _.value = !_.value, l.email = "", l.password = "", l.confirmPassword = "", (h = P.value) == null || h.clearValidate();
    }, c = () => {
      var h;
      m.value = !1, l.email = "", l.password = "", l.confirmPassword = "", _.value = !1, (h = P.value) == null || h.clearValidate();
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
      const h = await D(l.email, l.password);
      h.success ? (G.success("Login successful"), n("login-success", { email: l.email }), c()) : G.error("Login failed: " + h.error);
    }, b = async () => {
      const h = await w(l.email, l.password);
      h.success ? h.needsConfirmation ? G.success("Please check your email to confirm your account") : (G.success("Account created successfully"), n("login-success", { email: l.email }), c()) : G.error("Signup failed: " + h.error);
    }, p = async (h) => {
      const S = await k(h);
      S.success ? G.success("Redirecting to login provider...") : G.error("Login failed: " + S.error);
    }, V = async () => {
      if (!l.email) {
        G.warning("Please enter your email address first");
        return;
      }
      const h = await u(l.email);
      h.success ? G.success("Password reset email sent! Please check your inbox.") : G.error("Failed to send reset email: " + h.error);
    };
    return (h, S) => {
      const ae = ne("el-icon"), K = ne("el-input"), te = ne("el-form-item"), X = ne("el-button"), ie = ne("el-dialog");
      return y(), se(ie, {
        modelValue: m.value,
        "onUpdate:modelValue": S[6] || (S[6] = (z) => m.value = z),
        title: "",
        width: "500px",
        "close-on-click-modal": !1,
        "close-on-press-escape": !0,
        "show-close": !0,
        class: "login-modal",
        onClose: c
      }, {
        default: f(() => [
          r("div", Ys, [
            r("div", Xs, [
              r("h2", null, B(_.value ? "Create Account" : "Welcome Back"), 1),
              r("p", null, B(_.value ? "Sign up to get started with your account" : "Sign in to continue to your account"), 1)
            ]),
            v(T(Es), {
              model: l,
              rules: U.value,
              ref_key: "formRef",
              ref: P,
              class: "login-form",
              onSubmit: ge(L, ["prevent"])
            }, {
              default: f(() => [
                v(te, { prop: "email" }, {
                  default: f(() => [
                    v(K, {
                      modelValue: l.email,
                      "onUpdate:modelValue": S[0] || (S[0] = (z) => l.email = z),
                      placeholder: "Email",
                      type: "email",
                      size: "large",
                      class: "form-input"
                    }, {
                      prefix: f(() => [
                        v(ae, null, {
                          default: f(() => [
                            v(T(Ts))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                v(te, { prop: "password" }, {
                  default: f(() => [
                    v(K, {
                      modelValue: l.password,
                      "onUpdate:modelValue": S[1] || (S[1] = (z) => l.password = z),
                      placeholder: "Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: f(() => [
                        v(ae, null, {
                          default: f(() => [
                            v(T(Xe))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                _.value ? (y(), se(te, {
                  key: 0,
                  prop: "confirmPassword"
                }, {
                  default: f(() => [
                    v(K, {
                      modelValue: l.confirmPassword,
                      "onUpdate:modelValue": S[2] || (S[2] = (z) => l.confirmPassword = z),
                      placeholder: "Confirm Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: f(() => [
                        v(ae, null, {
                          default: f(() => [
                            v(T(Xe))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                })) : q("", !0),
                v(te, null, {
                  default: f(() => [
                    v(X, {
                      type: "primary",
                      class: "submit-button",
                      loading: $.value,
                      onClick: L,
                      size: "large"
                    }, {
                      default: f(() => [
                        j(B(_.value ? "Sign Up" : "Sign In"), 1)
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
            r("div", Qs, [
              v(X, {
                class: "login-button google",
                onClick: S[3] || (S[3] = (z) => p("google")),
                size: "large"
              }, {
                default: f(() => [...S[7] || (S[7] = [
                  r("span", { class: "social-icon" }, "G", -1),
                  j(" Google ", -1)
                ])]),
                _: 1
              }),
              v(X, {
                class: "login-button github",
                onClick: S[4] || (S[4] = (z) => p("github")),
                size: "large"
              }, {
                default: f(() => [...S[8] || (S[8] = [
                  r("span", { class: "social-icon" }, "⚡", -1),
                  j(" GitHub ", -1)
                ])]),
                _: 1
              }),
              v(X, {
                class: "login-button twitter",
                onClick: S[5] || (S[5] = (z) => p("twitter")),
                size: "large"
              }, {
                default: f(() => [...S[9] || (S[9] = [
                  r("span", { class: "social-icon" }, "X", -1),
                  j(" X (Twitter) ", -1)
                ])]),
                _: 1
              })
            ]),
            S[11] || (S[11] = r("div", { class: "terms" }, " By continuing, you agree to AI Workspace's Terms of Service and Privacy Policy ", -1)),
            _.value ? q("", !0) : (y(), x("div", Zs, [
              r("a", {
                href: "#",
                onClick: ge(V, ["prevent"])
              }, "Forgot Password?")
            ])),
            r("div", eo, [
              j(B(_.value ? "Already have an account?" : "Don't have an account?") + " ", 1),
              r("a", {
                href: "#",
                onClick: ge(d, ["prevent"])
              }, B(_.value ? "Sign in" : "Sign up"), 1)
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
}, oo = /* @__PURE__ */ Ve(so, [["__scopeId", "data-v-684a3f28"]]), ao = { class: "session-loss-content" }, to = { class: "session-loss-icon" }, ro = { class: "session-loss-message" }, no = {
  key: 0,
  class: "session-loss-details"
}, io = { class: "detail-item" }, lo = { class: "detail-value" }, co = { class: "detail-item" }, uo = { class: "detail-value" }, po = { class: "session-loss-actions" }, fo = {
  key: 0,
  class: "retry-status"
}, go = { class: "retry-message" }, ho = /* @__PURE__ */ le({
  __name: "SessionLossModal",
  props: {
    modelValue: { type: Boolean },
    sessionLossEvent: {},
    canRetrySession: { type: Boolean }
  },
  emits: ["update:modelValue", "retry", "login", "refresh"],
  setup(a, { emit: s }) {
    const o = a, n = s, m = C(!1), _ = C(0), $ = C(void 0), P = C(""), D = J({
      get: () => o.modelValue,
      set: (d) => n("update:modelValue", d)
    }), w = (d) => {
      switch (d) {
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
    }, k = (d) => d.toLocaleString(), u = async () => {
      if (m.value)
        return;
      m.value = !0, _.value = 0, $.value = void 0, P.value = "Attempting to restore session...";
      const d = setInterval(() => {
        _.value < 90 && (_.value += Math.random() * 20);
      }, 200);
      try {
        n("retry"), await new Promise((c) => setTimeout(c, 2e3)), _.value = 100, $.value = "success", P.value = "Session restored successfully!", setTimeout(() => {
          D.value = !1;
        }, 1e3);
      } catch {
        _.value = 100, $.value = "exception", P.value = "Failed to restore session. Please log in again.", G.error("Session restoration failed");
      } finally {
        clearInterval(d), setTimeout(() => {
          m.value = !1, _.value = 0, $.value = void 0, P.value = "";
        }, 3e3);
      }
    }, l = () => {
      n("login"), D.value = !1;
    }, U = () => {
      n("refresh"), window.location.reload();
    };
    return ue(() => o.sessionLossEvent, (d) => {
      d && (m.value = !1, _.value = 0, $.value = void 0, P.value = "");
    }), (d, c) => (y(), se(T(Is), {
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
      default: f(() => {
        var L;
        return [
          r("div", ao, [
            r("div", to, [
              v(T(Ee), {
                size: "48",
                color: "#f56c6c"
              }, {
                default: f(() => [
                  v(T(es))
                ]),
                _: 1
              })
            ]),
            r("div", ro, [
              c[3] || (c[3] = r("h3", null, "Your session has expired", -1)),
              r("p", null, B(((L = d.sessionLossEvent) == null ? void 0 : L.message) || "Please log in again to continue using the application."), 1),
              d.sessionLossEvent ? (y(), x("div", no, [
                r("div", io, [
                  c[1] || (c[1] = r("span", { class: "detail-label" }, "Issue:", -1)),
                  r("span", lo, B(w(d.sessionLossEvent.type)), 1)
                ]),
                r("div", co, [
                  c[2] || (c[2] = r("span", { class: "detail-label" }, "Time:", -1)),
                  r("span", uo, B(k(d.sessionLossEvent.timestamp)), 1)
                ])
              ])) : q("", !0)
            ]),
            r("div", po, [
              d.canRetrySession && !m.value ? (y(), se(T(Pe), {
                key: 0,
                type: "primary",
                onClick: u,
                loading: m.value
              }, {
                default: f(() => [
                  v(T(Ee), null, {
                    default: f(() => [
                      v(T(Qe))
                    ]),
                    _: 1
                  }),
                  c[4] || (c[4] = j(" Try Again ", -1))
                ]),
                _: 1
              }, 8, ["loading"])) : q("", !0),
              v(T(Pe), {
                type: "primary",
                onClick: l,
                disabled: m.value
              }, {
                default: f(() => [
                  v(T(Ee), null, {
                    default: f(() => [
                      v(T(Ne))
                    ]),
                    _: 1
                  }),
                  c[5] || (c[5] = j(" Log In ", -1))
                ]),
                _: 1
              }, 8, ["disabled"]),
              d.canRetrySession ? q("", !0) : (y(), se(T(Pe), {
                key: 1,
                type: "info",
                onClick: U,
                disabled: m.value
              }, {
                default: f(() => [
                  v(T(Ee), null, {
                    default: f(() => [
                      v(T(Qe))
                    ]),
                    _: 1
                  }),
                  c[6] || (c[6] = j(" Refresh Page ", -1))
                ]),
                _: 1
              }, 8, ["disabled"]))
            ]),
            m.value ? (y(), x("div", fo, [
              v(T(Ls), {
                percentage: _.value,
                status: $.value,
                "stroke-width": 6
              }, null, 8, ["percentage", "status"]),
              r("p", go, B(P.value), 1)
            ])) : q("", !0)
          ])
        ];
      }),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const vo = /* @__PURE__ */ Ve(ho, [["__scopeId", "data-v-0dd27f7f"]]), mo = { class: "aiworkspace-header" }, wo = {
  key: 0,
  class: "header-content header-loading"
}, ko = { class: "header-center" }, _o = { class: "loading-text" }, yo = { key: 0 }, So = { key: 1 }, bo = {
  key: 1,
  class: "header-content header-fallback"
}, Co = {
  key: 2,
  class: "header-content header-restricted"
}, Ao = { class: "header-center" }, Eo = { class: "restricted-text" }, Io = { class: "header-right" }, Lo = {
  key: 3,
  class: "header-content"
}, Vo = { class: "header-left" }, Mo = { class: "logo-section" }, Wo = {
  href: "/",
  class: "logo"
}, $o = ["src"], Uo = {
  key: 1,
  class: "text-logo"
}, Ro = {
  key: 0,
  class: "header-center"
}, Po = { class: "main-navigation" }, xo = { class: "nav-item" }, To = {
  href: "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard",
  class: "nav-link"
}, Do = { class: "workspace-dropdown-item" }, No = ["href"], Oo = { class: "workspace-icon" }, Ho = {
  key: 1,
  class: "nav-divider"
}, Fo = { class: "nav-item" }, zo = ["href", "onClick"], Bo = { class: "header-right" }, Go = { class: "user-profile" }, Ko = { class: "user-info" }, jo = { class: "user-name" }, qo = { class: "user-avatar" }, Jo = ["src", "alt"], Yo = {
  key: 1,
  class: "avatar-placeholder"
}, Xo = { class: "version-info" }, Qo = { class: "version-hash" }, Zo = {
  key: 4,
  class: "header-content header-unauthenticated"
}, ea = { class: "header-left" }, sa = { class: "logo-section" }, oa = {
  href: "/",
  class: "logo"
}, aa = ["src"], ta = {
  key: 1,
  class: "text-logo"
}, ra = { class: "header-right" }, na = { class: "workspace-list" }, ia = ["onClick"], la = { class: "workspace-icon" }, ca = { class: "workspace-details" }, ua = { class: "workspace-members" }, da = {
  key: 0,
  class: "current-indicator"
}, pa = { class: "update-content" }, fa = { class: "update-actions" }, be = 50, ga = /* @__PURE__ */ le({
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
    const o = a, n = s, { authState: m, logout: _, isLoading: $ } = zs(), {
      isSessionValid: P,
      sessionLossEvent: D,
      hasSessionLoss: w,
      canRetrySession: k,
      retrySession: u,
      clearSessionLoss: l
    } = js(), U = () => {
      try {
        return qs();
      } catch {
        return console.warn("[AIWorkspaceHeader] Pinia not initialized yet, using fallback state"), null;
      }
    }, d = () => {
      try {
        return typeof window < "u" ? !!window.__PINIA__ || !!window.Pinia : !1;
      } catch {
        return !1;
      }
    }, c = C(U()), L = J(() => !!c.value), M = C(0), b = () => {
      if (!c.value && M.value < be) {
        if (d()) {
          const t = U();
          if (t) {
            c.value = t, console.log("[AIWorkspaceHeader] Pinia store initialized successfully");
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
    const p = C(!1), V = C(!1), h = C(!1), S = C([]), ae = C([]), K = C({
      name: "",
      email: "",
      avatar_url: null,
      initials: ""
    }), te = C("unknown"), X = C("unknown"), ie = C(!1), z = C(null), A = C(null), N = C(!1), O = C([]), E = C([]), H = C(!1);
    ue(E, async (t) => {
      t.length > 0 && L.value && Q.value && await R();
    }, { immediate: !1 }), ue(() => window.location.pathname + window.location.search + window.location.hash, async () => {
      L.value && Q.value && await R();
    }, { immediate: !1 });
    const Y = C(window.location.pathname);
    ue(() => window.location.pathname, (t) => {
      Y.value = t;
    }, { immediate: !0 }), ue(L, (t) => {
      !t && M.value < be && b();
    });
    const re = () => {
      try {
        const t = window.location.pathname.match(/\/single-workspace\/(\d+)/);
        if (t)
          return t[1];
        const i = new URLSearchParams(window.location.search).get("workspace_id");
        if (i)
          return i;
        const g = window.location.hash.match(/workspace_id=(\d+)/);
        return g ? g[1] : null;
      } catch (t) {
        return console.warn("[AIWorkspaceHeader] Error parsing URL for workspace_id:", t), null;
      }
    }, W = () => {
      try {
        return window.location.pathname.includes("/all-workspace/");
      } catch (t) {
        return console.warn("[AIWorkspaceHeader] Error checking all-workspace mode:", t), !1;
      }
    }, R = async () => {
      if (!c.value || !L.value)
        return;
      const t = W();
      if (H.value = t, t) {
        c.value.currentWorkspace = null, localStorage.removeItem("current_workspace"), console.log("[AIWorkspaceHeader] Auto-selected all-workspace mode from URL");
        return;
      }
      const e = re();
      if (e)
        try {
          E.value.length === 0 && await Be();
          const i = E.value.find((g) => g.id.toString() === e);
          i ? (c.value.setCurrentWorkspace(i), console.log(`[AIWorkspaceHeader] Auto-selected workspace from URL: ${i.title} (ID: ${i.id})`), n("workspaceChange", i)) : console.warn(`[AIWorkspaceHeader] Workspace with ID ${e} not found in available workspaces`);
        } catch (i) {
          console.error("[AIWorkspaceHeader] Error auto-selecting workspace from URL:", i);
        }
    }, Q = J(() => m.value.isAuthenticated), Z = J(() => c.value ? c.value.currentWorkspace : null), ce = C([
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
    ]), Fe = J(() => H.value ? de.value : ce.value), ts = J(() => {
      try {
        const t = Y.value;
        let e = "";
        const i = t.match(/\/all-workspace\/([^\/]+)/);
        if (i)
          e = i[1];
        else {
          const g = t.match(/\/single-workspace\/\d+\/([^\/]+)/);
          if (g)
            e = g[1];
          else {
            const F = t.match(/\/([^\/]+)$/);
            F && (e = F[1]);
          }
        }
        if (e) {
          const g = Fe.value.find(
            (F) => F.key === e || F.url.includes(`/${e}`) || F.url === `/${e}`
          );
          if (g)
            return g.label;
        }
        return "Dashboard";
      } catch (t) {
        return console.warn("[AIWorkspaceHeader] Error determining current section:", t), "Dashboard";
      }
    }), rs = (t) => {
      const e = /* @__PURE__ */ new Map();
      t.forEach((F) => {
        e.set(F.id, { ...F, children: [] });
      });
      const i = [];
      e.forEach((F) => {
        F.parent_workspace_id && e.has(F.parent_workspace_id) ? e.get(F.parent_workspace_id).children.push(F) : i.push(F);
      });
      const g = (F) => {
        F.sort((ee, pe) => ee.title.localeCompare(pe.title)), F.forEach((ee) => {
          ee.children && g(ee.children);
        });
      };
      return g(i), i;
    }, ze = (t, e = 0, i = []) => (t.forEach((g) => {
      i.push({ ...g, level: e }), g.children && g.children.length && ze(g.children, e + 1, i);
    }), i), Be = async () => {
      var t, e, i;
      try {
        const g = await ((t = c.value) == null ? void 0 : t.loadWorkspaces());
        if (O.value = rs(g || []), E.value = ze(O.value), ae.value = E.value, S.value = E.value, o.currentWorkspaceId) {
          const F = E.value.find((ee) => {
            var pe;
            return ee.id.toString() === ((pe = o.currentWorkspaceId) == null ? void 0 : pe.toString());
          });
          F && ((e = c.value) == null || e.setCurrentWorkspace(F));
        } else
          !Z.value && E.value.length && ((i = c.value) == null || i.setCurrentWorkspace(E.value[0]));
      } catch (g) {
        console.error("loadWorkspaces (header) error", g);
      }
    }, ns = (t) => {
      if (console.log("Navigation command:", t), t === "all-workspace") {
        window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
        return;
      } else {
        const e = parseInt(t.replace("workspace-", ""));
        window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e}/dashboard`;
        return;
      }
    }, is = (t) => {
      const e = Z.value, i = H.value;
      switch (t.key) {
        case "dashboard":
          i ? window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard" : e ? window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e.id}/dashboard` : window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
          break;
        case "outlines":
          if (i)
            window.location.href = "https://outline.aiworkspace.pro/all-workspace/outlines";
          else if (e) {
            const g = `https://outline.aiworkspace.pro/single-workspace/${e.id}/outlines`;
            window.location.href = g;
          } else
            window.location.href = "https://outline.aiworkspace.pro";
          break;
        case "canvas":
          if (i)
            window.location.href = "https://canvas.aiworkspace.pro/all-workspace/canvas";
          else if (e) {
            const g = `https://canvas.aiworkspace.pro/single-workspace/${e.id}/canvas`;
            window.location.href = g;
          } else
            window.location.href = "https://canvas.aiworkspace.pro";
          break;
        case "files":
          if (i)
            window.location.href = "https://drive.aiworkspace.pro/all-workspace/files";
          else if (e) {
            const g = `https://drive.aiworkspace.pro/single-workspace/${e.id}/files`;
            window.location.href = g;
          } else
            window.location.href = "https://drive.aiworkspace.pro";
          break;
        case "tasks":
          if (i)
            window.location.href = "https://tasks.aiworkspace.pro/all-workspace/tasks";
          else if (e) {
            const g = `https://tasks.aiworkspace.pro/single-workspace/${e.id}/tasks`;
            window.location.href = g;
          } else
            window.location.href = "https://tasks.aiworkspace.pro";
          break;
        case "goals":
          if (i)
            window.location.href = "https://app.aiworkspace.pro/all-workspace/goals";
          else if (e) {
            const g = `https://app.aiworkspace.pro/single-workspace/${e.id}/goals`;
            window.location.href = g;
          } else
            window.location.href = "https://app.aiworkspace.pro/all-workspace/goals";
          break;
        case "events":
          if (i)
            window.location.href = "https://app.aiworkspace.pro/all-workspace/events";
          else if (e) {
            const g = `https://app.aiworkspace.pro/single-workspace/${e.id}/events`;
            window.location.href = g;
          } else
            window.location.href = "https://app.aiworkspace.pro/all-workspace/events";
          break;
        case "contacts":
          if (i)
            window.location.href = "https://app.aiworkspace.pro/all-workspace/contacts";
          else if (e) {
            const g = `https://app.aiworkspace.pro/single-workspace/${e.id}/contacts`;
            window.location.href = g;
          } else
            window.location.href = "https://app.aiworkspace.pro/all-workspace/contacts";
          break;
        case "ai-portfolios":
          if (i)
            window.location.href = "https://spreadsheet.aiworkspace.pro/all-workspace/ai-portfolios";
          else if (e) {
            const g = `https://spreadsheet.aiworkspace.pro/single-workspace/${e.id}/ai-portfolios`;
            window.location.href = g;
          } else
            window.location.href = "https://spreadsheet.aiworkspace.pro";
          break;
        case "settings":
          if (i)
            window.location.href = "https://settings.aiworkspace.pro/all-workspace/settings";
          else if (e) {
            const g = `https://settings.aiworkspace.pro/single-workspace/${e.id}/settings`;
            window.location.href = g;
          } else
            window.location.href = "https://settings.aiworkspace.pro";
          break;
        default:
          if (i) {
            const g = `https://app.aiworkspace.pro/all-workspace/${t.key}`;
            window.location.href = g;
          } else if (e) {
            const g = `https://app.aiworkspace.pro/single-workspace/${e.id}/${t.key}`;
            window.location.href = g;
          } else {
            const g = `https://app.aiworkspace.pro/${t.key}`;
            window.location.href = g;
          }
          break;
      }
    }, ls = (t) => {
      const e = Z.value, i = H.value;
      switch (t.key) {
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
          return i ? `https://app.aiworkspace.pro/all-workspace/${t.key}` : e ? `https://app.aiworkspace.pro/single-workspace/${e.id}/${t.key}` : `https://app.aiworkspace.pro/${t.key}`;
      }
    }, Ce = (t) => {
      switch (t) {
        case "profile":
          o.onProfileClick ? o.onProfileClick() : G.info("Profile settings coming soon");
          break;
        case "workspaces":
          p.value = !0;
          break;
        case "logout":
          us();
          break;
      }
    }, Ge = (t) => {
      var e;
      (e = c.value) == null || e.setCurrentWorkspace(t), p.value = !1, n("workspaceChange", t), G.success(`Switched to ${t.title}`);
    }, cs = () => {
      Je.prompt("Enter workspace name:", "Create New Workspace", {
        confirmButtonText: "Create",
        cancelButtonText: "Cancel",
        inputPattern: /\S/,
        inputErrorMessage: "Workspace name cannot be empty"
      }).then(({ value: t }) => {
        var i;
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
        S.value.push(e), (i = c.value) == null || i.setWorkspaces(S.value), Ge(e), G.success(`Created workspace: ${t}`);
      }).catch(() => {
      });
    }, us = () => {
      Je.confirm(
        "Are you sure you want to sign out?",
        "Sign Out",
        {
          confirmButtonText: "Sign Out",
          cancelButtonText: "Cancel",
          type: "warning"
        }
      ).then(async () => {
        var t;
        (t = c.value) == null || t.clearData(), await _(), typeof window < "u" && window.dispatchEvent(new CustomEvent("session-logout-detected", {
          detail: { timestamp: /* @__PURE__ */ new Date(), source: "manual-logout" }
        })), n("logout"), G.success("Signed out successfully");
      }).catch(() => {
      });
    }, Me = async () => {
      var t, e;
      if (m.value.user) {
        const i = m.value.user;
        K.value = {
          name: i.name || ((t = i.email) == null ? void 0 : t.split("@")[0]) || "User",
          email: i.email || "",
          avatar_url: i.avatar_url || null,
          initials: (i.name || ((e = i.email) == null ? void 0 : e.split("@")[0]) || "U").split(" ").map((g) => g[0]).join("").toUpperCase().substring(0, 2)
        }, o.showWorkspaceSelector && await Be();
      }
    };
    ue(() => m.value.user, (t) => {
      var e;
      t ? Me() : (K.value = { name: "", email: "", avatar_url: null, initials: "" }, (e = c.value) == null || e.clearData());
    }), ue(w, (t) => {
      t && Q.value && (console.log("[AIWorkspaceHeader] Session loss detected, showing modal"), h.value = !0);
    }), ue(() => o.currentWorkspaceId, (t) => {
      var e;
      if (t && E.value.length) {
        const i = E.value.find((g) => g.id.toString() === t.toString());
        i && ((e = c.value) == null || e.setCurrentWorkspace(i));
      }
    }), Se(async () => {
      Q.value && (await Me(), await R()), await vs(), Ke(), ws();
    });
    const ds = async (t) => {
      console.log("Login successful:", t), V.value = !1, await Me(), n("login"), G.success("Welcome back!");
    }, ps = async () => {
      console.log("[AIWorkspaceHeader] Retrying session..."), await u() ? (h.value = !1, l(), G.success("Session restored successfully!")) : G.error("Failed to restore session. Please log in again.");
    }, fs = () => {
      console.log("[AIWorkspaceHeader] Opening login modal from session loss"), h.value = !1, V.value = !0;
    }, gs = () => {
      console.log("[AIWorkspaceHeader] Refreshing page due to session loss"), window.location.reload();
    }, hs = () => {
      M.value = 0, b(), G.success("Manual Pinia retry initiated.");
    }, vs = async () => {
      try {
        const t = await fetch("/version.json");
        if (t.ok) {
          const e = await t.json();
          te.value = e.shortCommitHash || "unknown", X.value = e.fullCommitHash || "unknown", console.log("Loaded commit hash from consuming app:", te.value);
        } else
          console.warn("Could not load version.json from consuming app");
      } catch (t) {
        console.warn("Error loading commit hash from consuming app:", t);
      }
    }, ms = async () => {
      try {
        await navigator.clipboard.writeText(X.value), G.success("Commit hash copied to clipboard!");
      } catch (t) {
        console.error("Failed to copy commit hash:", t), G.error("Failed to copy commit hash");
      }
    }, Ke = async () => {
      if (!N.value) {
        N.value = !0;
        try {
          const t = Date.now(), e = await fetch(`/version.json?t=${t}`);
          if (!e.ok)
            throw new Error("Failed to fetch version info");
          const i = await e.json();
          z.value = i.fullCommitHash, X.value !== z.value && (ie.value = !0, console.log("Version mismatch detected:", {
            currentVersion: X.value,
            latestVersion: z.value,
            serverBuildTime: i.buildTime
          }));
        } catch (t) {
          console.error("Error checking for updates:", t);
        } finally {
          N.value = !1;
        }
      }
    }, ws = () => {
      A.value = setInterval(() => {
        Ke();
      }, 30 * 1e3);
    }, ks = () => {
      console.log("User reloaded for update:", {
        currentVersion: X.value,
        latestVersion: z.value
      }), window.location.reload();
    }, je = () => {
      ie.value = !1, console.log("Update alert dismissed:", {
        currentVersion: X.value,
        latestVersion: z.value
      });
    };
    return Ze(() => {
      A.value && clearInterval(A.value);
    }), (t, e) => {
      const i = ne("el-icon"), g = ne("el-button"), F = ne("el-tag"), ee = ne("el-dropdown-item"), pe = ne("el-dropdown-menu"), We = ne("el-dropdown"), _s = ne("el-dialog"), ys = ne("el-alert");
      return y(), x("header", mo, [
        !L.value && M.value < be || T($) ? (y(), x("div", wo, [
          e[10] || (e[10] = Ae('<div class="header-left" data-v-1fb32dde><div class="logo-section" data-v-1fb32dde><a href="/" class="logo" data-v-1fb32dde><div class="text-logo" data-v-1fb32dde><span class="logo-text" data-v-1fb32dde>AI Workspace</span></div></a></div></div>', 1)),
          r("div", ko, [
            r("span", _o, [
              T($) ? (y(), x("span", yo, "Syncing authentication...")) : (y(), x("span", So, "Initializing..."))
            ])
          ])
        ])) : !L.value && M.value >= be ? (y(), x("div", bo, [
          e[12] || (e[12] = Ae('<div class="header-left" data-v-1fb32dde><div class="logo-section" data-v-1fb32dde><a href="/" class="logo" data-v-1fb32dde><div class="text-logo" data-v-1fb32dde><span class="logo-text" data-v-1fb32dde>AI Workspace</span></div></a></div></div>', 1)),
          r("div", { class: "header-center" }, [
            e[11] || (e[11] = r("span", { class: "fallback-text" }, "Header Ready (Fallback Mode)", -1)),
            r("button", {
              onClick: hs,
              class: "retry-button"
            }, "Retry Pinia")
          ]),
          e[13] || (e[13] = Ae('<div class="header-right" data-v-1fb32dde><div class="user-profile" data-v-1fb32dde><div class="user-info" data-v-1fb32dde><span class="user-name" data-v-1fb32dde>User</span></div><div class="user-avatar" data-v-1fb32dde><span class="avatar-placeholder" data-v-1fb32dde>U</span></div></div></div>', 1))
        ])) : Q.value && !T(P) ? (y(), x("div", Co, [
          e[16] || (e[16] = Ae('<div class="header-left" data-v-1fb32dde><div class="logo-section" data-v-1fb32dde><a href="/" class="logo" data-v-1fb32dde><div class="text-logo" data-v-1fb32dde><span class="logo-text" data-v-1fb32dde>AI Workspace</span></div></a></div></div>', 1)),
          r("div", Ao, [
            r("span", Eo, [
              v(i, null, {
                default: f(() => [
                  v(T(es))
                ]),
                _: 1
              }),
              e[14] || (e[14] = j(" Session expired - Please log in again ", -1))
            ])
          ]),
          r("div", Io, [
            v(g, {
              type: "primary",
              onClick: e[0] || (e[0] = (I) => V.value = !0)
            }, {
              default: f(() => [
                v(i, null, {
                  default: f(() => [
                    v(T(Ne))
                  ]),
                  _: 1
                }),
                e[15] || (e[15] = j(" Log In ", -1))
              ]),
              _: 1
            })
          ])
        ])) : Q.value && T(P) ? (y(), x("div", Lo, [
          r("div", Vo, [
            r("div", Mo, [
              r("a", Wo, [
                t.customLogo ? (y(), x("img", {
                  key: 0,
                  src: t.customLogo,
                  alt: "AIWorkspace",
                  class: "logo-image"
                }, null, 8, $o)) : (y(), x("div", Uo, [...e[17] || (e[17] = [
                  r("span", { class: "logo-text" }, "AI Workspace", -1)
                ])]))
              ])
            ])
          ]),
          t.showSecondaryNavigation ? (y(), x("div", Ro, [
            r("nav", Po, [
              t.showWorkspaceSelector ? (y(), se(We, {
                key: 0,
                onCommand: ns,
                trigger: "hover"
              }, {
                dropdown: f(() => [
                  v(pe, { class: "workspace-tree-dropdown" }, {
                    default: f(() => [
                      v(ee, {
                        command: "all-workspace",
                        class: $e({ active: H.value })
                      }, {
                        default: f(() => [
                          r("a", To, [
                            r("div", Do, [
                              e[19] || (e[19] = r("span", { class: "workspace-icon" }, "🌐", -1)),
                              e[20] || (e[20] = r("span", null, "All workspace", -1)),
                              H.value ? (y(), se(F, {
                                key: 0,
                                size: "small",
                                type: "success"
                              }, {
                                default: f(() => [...e[18] || (e[18] = [
                                  j("Current", -1)
                                ])]),
                                _: 1
                              })) : q("", !0)
                            ])
                          ])
                        ]),
                        _: 1
                      }, 8, ["class"]),
                      E.value.length > 0 ? (y(), se(ee, {
                        key: 0,
                        divided: "",
                        disabled: ""
                      })) : q("", !0),
                      (y(!0), x(Ue, null, Re(E.value, (I) => (y(), se(ee, {
                        key: I.id,
                        command: `workspace-${I.id}`
                      }, {
                        default: f(() => {
                          var ve;
                          return [
                            r("a", {
                              href: `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${I.id}/dashboard`,
                              class: "nav-link"
                            }, [
                              r("div", {
                                class: "workspace-dropdown-item",
                                style: As({ paddingLeft: (I.level || 0) * 16 + "px" })
                              }, [
                                r("span", Oo, B(I.children && I.children.length ? "📁" : "📄"), 1),
                                r("span", null, B(I.title), 1),
                                I.id === ((ve = Z.value) == null ? void 0 : ve.id) ? (y(), se(F, {
                                  key: 0,
                                  size: "small",
                                  type: "success"
                                }, {
                                  default: f(() => [...e[21] || (e[21] = [
                                    j("Current", -1)
                                  ])]),
                                  _: 1
                                })) : q("", !0)
                              ], 4)
                            ], 8, No)
                          ];
                        }),
                        _: 2
                      }, 1032, ["command"]))), 128)),
                      E.value.length === 0 ? (y(), se(ee, {
                        key: 1,
                        disabled: ""
                      }, {
                        default: f(() => [...e[22] || (e[22] = [
                          j(" No workspaces ", -1)
                        ])]),
                        _: 1
                      })) : q("", !0)
                    ]),
                    _: 1
                  })
                ]),
                default: f(() => {
                  var I;
                  return [
                    r("span", xo, [
                      j(B(H.value ? "All workspace" : ((I = Z.value) == null ? void 0 : I.title) || "Select Workspace") + " ", 1),
                      v(i, { class: "nav-arrow" }, {
                        default: f(() => [
                          v(T(Ye))
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }),
                _: 1
              })) : q("", !0),
              t.showWorkspaceSelector ? (y(), x("span", Ho, "/")) : q("", !0),
              t.showSecondaryNavigation ? (y(), se(We, {
                key: 2,
                trigger: "hover"
              }, {
                dropdown: f(() => [
                  v(pe, null, {
                    default: f(() => [
                      (y(!0), x(Ue, null, Re(Fe.value, (I) => (y(), se(ee, {
                        key: I.label,
                        class: $e({ active: I.active })
                      }, {
                        default: f(() => [
                          r("a", {
                            href: ls(I),
                            class: "nav-link",
                            onClick: ge((ve) => is(I), ["prevent"])
                          }, B(I.label), 9, zo)
                        ]),
                        _: 2
                      }, 1032, ["class"]))), 128))
                    ]),
                    _: 1
                  })
                ]),
                default: f(() => [
                  r("span", Fo, [
                    j(B(ts.value) + " ", 1),
                    v(i, { class: "nav-arrow" }, {
                      default: f(() => [
                        v(T(Ye))
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })) : q("", !0)
            ])
          ])) : q("", !0),
          r("div", Bo, [
            v(We, {
              onCommand: Ce,
              trigger: "click",
              placement: "bottom-end"
            }, {
              dropdown: f(() => [
                v(pe, null, {
                  default: f(() => [
                    v(ee, null, {
                      default: f(() => [
                        r("a", {
                          href: "/profile",
                          class: "nav-link",
                          onClick: e[1] || (e[1] = ge((I) => Ce("profile"), ["prevent"]))
                        }, "Profile Settings")
                      ]),
                      _: 1
                    }),
                    t.showWorkspaceSelector ? (y(), se(ee, { key: 0 }, {
                      default: f(() => [
                        r("a", {
                          href: "#switch-workspace",
                          class: "nav-link",
                          onClick: e[2] || (e[2] = ge((I) => Ce("workspaces"), ["prevent"]))
                        }, "Switch Workspace")
                      ]),
                      _: 1
                    })) : q("", !0),
                    v(ee, {
                      onClick: ms,
                      class: "version-item"
                    }, {
                      default: f(() => [
                        r("div", Xo, [
                          e[23] || (e[23] = r("span", { class: "version-label" }, "Version:", -1)),
                          r("span", Qo, B(te.value), 1)
                        ])
                      ]),
                      _: 1
                    }),
                    v(ee, { divided: "" }, {
                      default: f(() => [
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
              default: f(() => [
                r("div", Go, [
                  r("div", Ko, [
                    r("span", jo, B(K.value.name), 1)
                  ]),
                  r("div", qo, [
                    K.value.avatar_url ? (y(), x("img", {
                      key: 0,
                      src: K.value.avatar_url,
                      alt: K.value.name
                    }, null, 8, Jo)) : (y(), x("span", Yo, B(K.value.initials), 1))
                  ])
                ])
              ]),
              _: 1
            })
          ])
        ])) : (y(), x("div", Zo, [
          r("div", ea, [
            r("div", sa, [
              r("a", oa, [
                t.customLogo ? (y(), x("img", {
                  key: 0,
                  src: t.customLogo,
                  alt: "AIWorkspace",
                  class: "logo-image"
                }, null, 8, aa)) : (y(), x("div", ta, [...e[24] || (e[24] = [
                  r("span", { class: "logo-text" }, "AI Workspace", -1)
                ])]))
              ])
            ])
          ]),
          e[26] || (e[26] = r("div", { class: "header-center" }, [
            r("span", { class: "welcome-text" }, "Welcome to AI Workspace")
          ], -1)),
          r("div", ra, [
            v(g, {
              type: "primary",
              size: "large",
              class: "login-button",
              onClick: e[4] || (e[4] = (I) => V.value = !0)
            }, {
              default: f(() => [
                v(i, null, {
                  default: f(() => [
                    v(T(Ne))
                  ]),
                  _: 1
                }),
                e[25] || (e[25] = j(" Login / Signup ", -1))
              ]),
              _: 1
            })
          ])
        ])),
        Q.value && t.showWorkspaceSelector ? (y(), se(_s, {
          key: 5,
          modelValue: p.value,
          "onUpdate:modelValue": e[6] || (e[6] = (I) => p.value = I),
          title: "Switch Workspace",
          width: "500px",
          onClose: e[7] || (e[7] = (I) => p.value = !1)
        }, {
          footer: f(() => [
            v(g, {
              onClick: e[5] || (e[5] = (I) => p.value = !1)
            }, {
              default: f(() => [...e[27] || (e[27] = [
                j("Cancel", -1)
              ])]),
              _: 1
            }),
            v(g, {
              type: "primary",
              onClick: cs
            }, {
              default: f(() => [...e[28] || (e[28] = [
                j("Create New Workspace", -1)
              ])]),
              _: 1
            })
          ]),
          default: f(() => [
            r("div", na, [
              (y(!0), x(Ue, null, Re(S.value, (I) => {
                var ve, qe;
                return y(), x("div", {
                  key: I.id,
                  class: $e(["workspace-item", { active: I.id === ((ve = Z.value) == null ? void 0 : ve.id) }]),
                  onClick: (_a) => Ge(I)
                }, [
                  r("div", la, B(I.children && I.children.length ? "📁" : "📄"), 1),
                  r("div", ca, [
                    r("h3", null, B(I.title), 1),
                    r("p", null, B(I.description), 1),
                    r("span", ua, B(I.hasAccess ? "Active" : "Inactive"), 1)
                  ]),
                  I.id === ((qe = Z.value) == null ? void 0 : qe.id) ? (y(), x("div", da, [
                    v(i, null, {
                      default: f(() => [
                        v(T(Rs))
                      ]),
                      _: 1
                    })
                  ])) : q("", !0)
                ], 10, ia);
              }), 128))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])) : q("", !0),
        v(oo, {
          modelValue: V.value,
          "onUpdate:modelValue": e[8] || (e[8] = (I) => V.value = I),
          onLoginSuccess: ds
        }, null, 8, ["modelValue"]),
        v(vo, {
          modelValue: h.value,
          "onUpdate:modelValue": e[9] || (e[9] = (I) => h.value = I),
          "session-loss-event": T(D),
          "can-retry-session": T(k) || !1,
          onRetry: ps,
          onLogin: fs,
          onRefresh: gs
        }, null, 8, ["modelValue", "session-loss-event", "can-retry-session"]),
        ie.value ? (y(), se(ys, {
          key: 6,
          title: "New Version Available!",
          type: "warning",
          closable: !0,
          onClose: je,
          "show-icon": "",
          class: "update-alert"
        }, {
          default: f(() => [
            r("div", pa, [
              e[31] || (e[31] = r("p", null, "A new version of the application is available. Please reload to get the latest updates and features.", -1)),
              r("div", fa, [
                v(g, {
                  type: "primary",
                  size: "small",
                  onClick: ks
                }, {
                  default: f(() => [...e[29] || (e[29] = [
                    j(" Reload Now ", -1)
                  ])]),
                  _: 1
                }),
                v(g, {
                  size: "small",
                  onClick: je
                }, {
                  default: f(() => [...e[30] || (e[30] = [
                    j(" Dismiss ", -1)
                  ])]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        })) : q("", !0)
      ]);
    };
  }
});
const Na = /* @__PURE__ */ Ve(ga, [["__scopeId", "data-v-1fb32dde"]]), ha = { class: "auth-callback" }, va = /* @__PURE__ */ le({
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
          const _ = Ms();
          console.log("[callback] Post-login redirect URL:", _), console.log("[callback] Session storage redirect:", sessionStorage.getItem("post-login-redirect")), console.log("[callback] Local storage redirect:", localStorage.getItem("post-login-redirect"));
          const $ = _ || "/";
          if (console.log("[callback] Final redirect URL:", $), $.startsWith("/")) {
            const P = window.location.origin, D = `${P}${$}`;
            console.log("[callback] redirecting to:", D, { hostname: window.location.hostname, origin: P }), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
              window.location.href = D;
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
    return (o, n) => (y(), x("div", ha, [...n[0] || (n[0] = [
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
const Oa = /* @__PURE__ */ Ve(va, [["__scopeId", "data-v-acdf6325"]]), fe = class fe {
  constructor() {
    me(this, "validationCache", /* @__PURE__ */ new Map());
    me(this, "CACHE_DURATION", as().validationCacheDuration);
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
        const d = {
          isValid: !1,
          needsLogin: !0,
          error: "No authentication tokens found",
          canRetry: !1
        };
        return this.cacheResult(o, d), d;
      }
      const P = await oe();
      let D = null, w = null;
      for (let d = 1; d <= 2; d++)
        try {
          const c = await P.auth.getSession();
          D = c.data.session, w = c.error;
          break;
        } catch (c) {
          if (console.warn(`[SessionValidator] Network error on attempt ${d}:`, c), d === 2) {
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
        const d = {
          isValid: !1,
          needsLogin: !0,
          error: "No valid session found",
          canRetry: !0
        };
        return this.cacheResult(o, d), d;
      }
      const k = /* @__PURE__ */ new Date(), u = new Date(D.expires_at * 1e3), l = 5 * 60 * 1e3;
      if (k >= new Date(u.getTime() - l)) {
        const d = {
          isValid: !1,
          needsLogin: !0,
          error: "Session is close to expiry or expired",
          canRetry: !0
        };
        return this.cacheResult(o, d), d;
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
      const n = await oe(), { data: m, error: _ } = await n.auth.setSession({
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
const He = Oe.getInstance(), ma = (a = !1) => He.validateSession(a), wa = () => He.restoreSession(), ka = () => He.clearCache();
async function Ha() {
  console.log("[SessionValidator] Initializing session validation...");
  let a = await ma();
  return !a.isValid && a.canRetry && (console.log("[SessionValidator] Attempting session restoration..."), a = await wa()), a;
}
function Fa() {
  if (typeof window > "u")
    return () => {
    };
  const a = () => {
    console.log("[SessionValidator] Network restored, clearing cache for revalidation"), ka();
  }, s = () => {
    console.log("[SessionValidator] Network lost, session validation may fail");
  };
  return window.addEventListener("online", a), window.addEventListener("offline", s), () => {
    window.removeEventListener("online", a), window.removeEventListener("offline", s);
  };
}
export {
  ke as ACCESS_COOKIE,
  Na as AIWorkspaceHeader,
  Oa as AuthCallback,
  Xa as LS_ACCESS_KEY,
  Qa as LS_REFRESH_KEY,
  oo as LoginModal,
  Le as PackageError,
  _e as REFRESH_COOKIE,
  vo as SessionLossModal,
  Oe as SessionValidator,
  Za as buildOAuthRedirectUrl,
  Te as clearLocalStorageTokens,
  ka as clearSessionCache,
  we as clearSessionCookie,
  Ga as configureSupabase,
  Gs as conservativeConfig,
  Pa as createSessionConfig,
  Na as default,
  he as defaultSessionConfig,
  Da as detectionScenarios,
  ss as developmentConfig,
  et as ensureCrossSubdomainCookies,
  Bs as fastDetectionConfig,
  xa as getConfigByPreset,
  st as getCookie,
  Ms as getPostLoginBase,
  as as getSessionConfig,
  oe as getSupabase,
  Hs as handleBundlingError,
  Ka as handleDomainChangeAuth,
  Vs as initializeCrossSubdomainAuth,
  Ha as initializeSessionValidation,
  os as productionConfig,
  ja as restoreCrossSubdomainSession,
  wa as restoreSession,
  xe as restoreSessionWithRetry,
  Ia as safeExecute,
  La as safeExecuteAsync,
  Ma as safeGetCookie,
  $a as safeGetLocalStorage,
  Va as safeImport,
  Wa as safeSetCookie,
  Ua as safeSetLocalStorage,
  Ra as safeWindowOperation,
  Ks as sessionConfigPresets,
  He as sessionValidator,
  ye as setSessionCookie,
  qa as setupAuthStateListener,
  Fs as setupGlobalErrorHandler,
  Ja as setupImmediateCrossSubdomainAuth,
  Fa as setupNetworkAwareValidation,
  at as setupUniversalCallback,
  Ie as supabase,
  De as syncCookiesToLocalStorage,
  Ta as timingInfo,
  Js as useAuth,
  zs as useEnhancedAuth,
  js as useSessionMonitor,
  qs as useWorkspaceStore,
  ma as validateSession
};
