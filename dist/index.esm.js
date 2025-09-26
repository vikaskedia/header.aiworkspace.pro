var Ps = Object.defineProperty;
var Ds = (s, o, t) => o in s ? Ps(s, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[o] = t;
var me = (s, o, t) => (Ds(s, typeof o != "symbol" ? o + "" : o, t), t);
import { defineComponent as ue, openBlock as y, createElementBlock as H, createElementVNode as i, ref as C, computed as X, onMounted as Ce, onUnmounted as us, watch as pe, reactive as Ns, resolveComponent as ie, createBlock as oe, withCtx as d, toDisplayString as K, createVNode as g, unref as P, withModifiers as ge, createCommentVNode as Y, createTextVNode as J, Fragment as Le, createStaticVNode as Ve, normalizeClass as He, renderList as Te, normalizeStyle as Os } from "vue";
import { ElForm as Gs, ElMessage as z, ElDialog as Fs, ElIcon as xe, ElButton as Pe, ElProgress as Bs, ElMessageBox as is } from "element-plus";
import { i as js, g as te, r as De, s as Ue } from "./supabase-667a6377.mjs";
import { c as ga, h as ha, b as va, d as wa, a as ma } from "./supabase-667a6377.mjs";
import { clearSessionCookie as ke, ACCESS_COOKIE as _e, REFRESH_COOKIE as ye, clearLocalStorageTokens as Ne, setSessionCookie as be, syncCookiesToLocalStorage as Oe, getPostLoginBase as zs } from "./utils/authRedirect.js";
import { LS_ACCESS_KEY as _a, LS_REFRESH_KEY as ya, buildOAuthRedirectUrl as ba, ensureCrossSubdomainCookies as Sa, getCookie as Ca } from "./utils/authRedirect.js";
import { defineStore as Ks } from "pinia";
import { setupUniversalCallback as Ea } from "./utils/universalCallback.js";
/*! Element Plus Icons Vue v2.3.2 */
var qs = /* @__PURE__ */ ue({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(s) {
    return (o, t) => (y(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"
      })
    ]));
  }
}), ls = qs, Js = /* @__PURE__ */ ue({
  name: "Check",
  __name: "check",
  setup(s) {
    return (o, t) => (y(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      })
    ]));
  }
}), Ys = Js, Xs = /* @__PURE__ */ ue({
  name: "Lock",
  __name: "lock",
  setup(s) {
    return (o, t) => (y(), H("svg", {
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
}), cs = Xs, Qs = /* @__PURE__ */ ue({
  name: "Message",
  __name: "message",
  setup(s) {
    return (o, t) => (y(), H("svg", {
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
}), Zs = Qs, eo = /* @__PURE__ */ ue({
  name: "Refresh",
  __name: "refresh",
  setup(s) {
    return (o, t) => (y(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), Ge = eo, so = /* @__PURE__ */ ue({
  name: "User",
  __name: "user",
  setup(s) {
    return (o, t) => (y(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"
      })
    ]));
  }
}), Fe = so, oo = /* @__PURE__ */ ue({
  name: "Warning",
  __name: "warning",
  setup(s) {
    return (o, t) => (y(), H("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"
      })
    ]));
  }
}), ds = oo;
class Me extends Error {
  constructor(t, n = {}, v) {
    super(t);
    me(this, "context");
    me(this, "originalError");
    this.name = "PackageError", this.context = n, this.originalError = v;
  }
}
function Kt(s, o = {}, t) {
  try {
    const n = s();
    return n instanceof Promise ? n.catch((v) => {
      if (console.warn("[ErrorHandler] Async operation failed:", {
        context: o,
        error: v.message,
        stack: v.stack
      }), t !== void 0)
        return t;
      throw new Me(
        `Async operation failed: ${v.message}`,
        o,
        v
      );
    }) : n;
  } catch (n) {
    if (console.warn("[ErrorHandler] Operation failed:", {
      context: o,
      error: n instanceof Error ? n.message : String(n),
      stack: n instanceof Error ? n.stack : void 0
    }), t !== void 0)
      return t;
    throw new Me(
      `Operation failed: ${n instanceof Error ? n.message : String(n)}`,
      o,
      n instanceof Error ? n : void 0
    );
  }
}
async function qt(s, o = {}, t) {
  try {
    return await s();
  } catch (n) {
    if (console.warn("[ErrorHandler] Async operation failed:", {
      context: o,
      error: n instanceof Error ? n.message : String(n),
      stack: n instanceof Error ? n.stack : void 0
    }), t !== void 0)
      return t;
    throw new Me(
      `Async operation failed: ${n instanceof Error ? n.message : String(n)}`,
      o,
      n instanceof Error ? n : void 0
    );
  }
}
function to(s, o = {}) {
  const t = s.message.toLowerCase();
  if (t.includes("is not a function") || t.includes("cannot read property") || t.includes("undefined is not a function")) {
    console.warn("[ErrorHandler] Bundling error detected:", {
      context: o,
      error: s.message,
      suggestion: "This may be due to minification or import issues. The package will continue with fallback behavior."
    });
    return;
  }
  throw new Me(
    `Unexpected error: ${s.message}`,
    o,
    s
  );
}
async function Jt(s, o = {}, t) {
  try {
    return await s();
  } catch (n) {
    return console.warn("[ErrorHandler] Import failed:", {
      context: o,
      error: n instanceof Error ? n.message : String(n)
    }), t !== void 0 ? t : void 0;
  }
}
function Yt(s) {
  var o;
  try {
    if (typeof document > "u")
      return null;
    const n = `; ${document.cookie}`.split(`; ${s}=`);
    return n.length === 2 && ((o = n.pop()) == null ? void 0 : o.split(";").shift()) || null;
  } catch (t) {
    return console.warn("[ErrorHandler] Cookie access failed:", {
      cookieName: s,
      error: t instanceof Error ? t.message : String(t)
    }), null;
  }
}
function Xt(s, o, t = {}) {
  try {
    if (typeof document > "u")
      return !1;
    let n = `${s}=${o}`;
    return t.domain && (n += `; domain=${t.domain}`), t.path && (n += `; path=${t.path}`), t.secure && (n += "; secure"), t.sameSite && (n += `; samesite=${t.sameSite}`), t.maxAge && (n += `; max-age=${t.maxAge}`), document.cookie = n, !0;
  } catch (n) {
    return console.warn("[ErrorHandler] Cookie setting failed:", {
      cookieName: s,
      error: n instanceof Error ? n.message : String(n)
    }), !1;
  }
}
function Qt(s) {
  try {
    return typeof localStorage > "u" ? null : localStorage.getItem(s);
  } catch (o) {
    return console.warn("[ErrorHandler] localStorage get failed:", {
      key: s,
      error: o instanceof Error ? o.message : String(o)
    }), null;
  }
}
function Zt(s, o) {
  try {
    return typeof localStorage > "u" ? !1 : (localStorage.setItem(s, o), !0);
  } catch (t) {
    return console.warn("[ErrorHandler] localStorage set failed:", {
      key: s,
      error: t instanceof Error ? t.message : String(t)
    }), !1;
  }
}
function ea(s, o) {
  try {
    return typeof window > "u" ? o : s(window);
  } catch (t) {
    return console.warn("[ErrorHandler] Window operation failed:", {
      error: t instanceof Error ? t.message : String(t)
    }), o;
  }
}
function ao() {
  typeof window > "u" || (window.addEventListener("unhandledrejection", (s) => {
    const o = s.reason;
    if (o instanceof Error) {
      const t = o.message.toLowerCase();
      if (t.includes("is not a function") || t.includes("cannot read property") || t.includes("undefined is not a function")) {
        console.warn("[ErrorHandler] Unhandled promise rejection (bundling error):", {
          error: o.message,
          stack: o.stack
        }), s.preventDefault();
        return;
      }
    }
    console.error("[ErrorHandler] Unhandled promise rejection:", s.reason);
  }), window.addEventListener("error", (s) => {
    const o = s.error;
    if (o instanceof Error) {
      const t = o.message.toLowerCase();
      if (t.includes("is not a function") || t.includes("cannot read property") || t.includes("undefined is not a function")) {
        console.warn("[ErrorHandler] Uncaught error (bundling error):", {
          error: o.message,
          stack: o.stack
        }), s.preventDefault();
        return;
      }
    }
    console.error("[ErrorHandler] Uncaught error:", s.error);
  }));
}
typeof window < "u" && ao();
function ro() {
  const s = C({
    user: null,
    isAuthenticated: !1,
    isLoading: !0,
    error: null
  }), o = C(null), t = X(() => s.value.isAuthenticated), n = X(() => s.value.user), v = X(() => s.value.isLoading), _ = async () => {
    var m, p, c, R, k, u, L, x, S, f, V, h, b, ae, q, B, O, re, j, A, D;
    try {
      console.log("[auth][enhanced] Starting loadUserInfo..."), console.log("[auth][enhanced] Ensuring cross-subdomain cookie synchronization...");
      const G = "sb-access-token", E = "sb-refresh-token", F = (M) => {
        try {
          const W = location.hostname;
          if (W === "localhost" || /^\d+\.\d+\.\d+\.\d+$/.test(W)) {
            console.log("[auth][enhanced] Skipping cookie sync for localhost");
            return;
          }
          const ee = "aiworkspace.pro";
          if (!W.endsWith(`.${ee}`) && W !== ee) {
            console.log("[auth][enhanced] Skipping cookie sync - not under apex domain");
            return;
          }
          console.log("[auth][enhanced] Performing cookie synchronization"), M.forEach((se) => {
            const de = document.cookie.split(";").find((fe) => fe.trim().startsWith(se + "="));
            if (de) {
              console.log(`[auth][enhanced] Found cookie: ${se}`);
              const fe = de.split("=")[1];
              fe && (document.cookie = `${se}=${fe}; domain=.${ee}; path=/; secure; samesite=lax`);
            }
          });
        } catch (W) {
          console.warn("[auth][enhanced] Error in cookie sync:", W);
        }
      };
      F([G, E]), await new Promise((M) => setTimeout(M, 50)), F([G, E]), await new Promise((M) => setTimeout(M, 50));
      let Z = null;
      try {
        const W = await (await te()).auth.getSession();
        Z = (m = W == null ? void 0 : W.data) == null ? void 0 : m.session;
      } catch (M) {
        console.warn("[auth][enhanced] Error getting Supabase session:", M);
      }
      if (Z && Z.user) {
        console.log("[auth][enhanced] Active Supabase session found");
        const M = Z.user, W = {
          id: M.id,
          name: ((p = M.user_metadata) == null ? void 0 : p.name) || ((c = M.user_metadata) == null ? void 0 : c.user_name) || ((R = M.user_metadata) == null ? void 0 : R.full_name) || ((k = M.email) == null ? void 0 : k.split("@")[0]) || "User",
          email: M.email,
          avatar_url: ((u = M.user_metadata) == null ? void 0 : u.avatar_url) || null,
          user_metadata: M.user_metadata
        };
        return s.value = {
          user: W,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, o.value = {
          user: W,
          access_token: Z.access_token,
          refresh_token: Z.refresh_token
        }, { user: W, session: o.value, error: null };
      }
      console.log("[auth][enhanced] No active session, attempting to restore from cookies...");
      const ne = await De();
      if (ne.success && ne.session) {
        console.log("[auth][enhanced] Session restored successfully from cookies");
        const M = ne.session.user, W = {
          id: M.id,
          name: ((L = M.user_metadata) == null ? void 0 : L.name) || ((x = M.user_metadata) == null ? void 0 : x.user_name) || ((S = M.user_metadata) == null ? void 0 : S.full_name) || ((f = M.email) == null ? void 0 : f.split("@")[0]) || "User",
          email: M.email,
          avatar_url: ((V = M.user_metadata) == null ? void 0 : V.avatar_url) || null,
          user_metadata: M.user_metadata
        };
        return s.value = {
          user: W,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, o.value = ne.session, { user: W, session: o.value, error: null };
      } else {
        console.log("[auth][enhanced] Failed to restore session:", ne.error), console.log("[auth][enhanced] Retrying session restoration with extended delay..."), await new Promise((W) => setTimeout(W, 500)), F([G, E]);
        const M = await De();
        if (M.success && M.session) {
          console.log("[auth][enhanced] Session restored on retry");
          const W = M.session.user, ee = {
            id: W.id,
            name: ((h = W.user_metadata) == null ? void 0 : h.name) || ((b = W.user_metadata) == null ? void 0 : b.user_name) || ((ae = W.user_metadata) == null ? void 0 : ae.full_name) || ((q = W.email) == null ? void 0 : q.split("@")[0]) || "User",
            email: W.email,
            avatar_url: ((B = W.user_metadata) == null ? void 0 : B.avatar_url) || null,
            user_metadata: W.user_metadata
          };
          return s.value = {
            user: ee,
            isAuthenticated: !0,
            isLoading: !1,
            error: null
          }, o.value = M.session, { user: ee, session: o.value, error: null };
        }
      }
    } catch (G) {
      console.error("Error getting Supabase session:", G), G instanceof Error && to(G, {
        component: "useEnhancedAuth",
        function: "loadUserInfo",
        operation: "session_validation"
      });
      try {
        const E = await De();
        if (E.success && E.session) {
          console.log("[auth][enhanced] Session restored after error");
          const F = E.session.user, Z = {
            id: F.id,
            name: ((O = F.user_metadata) == null ? void 0 : O.name) || ((re = F.user_metadata) == null ? void 0 : re.user_name) || ((j = F.user_metadata) == null ? void 0 : j.full_name) || ((A = F.email) == null ? void 0 : A.split("@")[0]) || "User",
            email: F.email,
            avatar_url: ((D = F.user_metadata) == null ? void 0 : D.avatar_url) || null,
            user_metadata: F.user_metadata
          };
          return s.value = {
            user: Z,
            isAuthenticated: !0,
            isLoading: !1,
            error: null
          }, o.value = E.session, { user: Z, session: o.value, error: null };
        }
      } catch (E) {
        console.error("Error restoring session:", E);
      }
    }
    return console.log("[auth][enhanced] No valid authentication found"), s.value = {
      user: null,
      isAuthenticated: !1,
      isLoading: !1,
      error: "No valid session found"
    }, o.value = null, { user: null, session: null, error: "No valid session found" };
  }, $ = async () => {
    try {
      await (await te()).auth.signOut(), ke(_e), ke(ye), Ne(), s.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      }, o.value = null, console.log("[auth][enhanced] User logged out successfully");
    } catch (m) {
      console.error("Error during logout:", m), s.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      }, o.value = null;
    }
  }, T = async (m, p) => {
    var c, R, k, u, L;
    try {
      s.value.isLoading = !0;
      const x = await te(), { data: S, error: f } = await x.auth.signInWithPassword({
        email: m,
        password: p
      });
      if (f)
        throw f;
      if (S.session) {
        const V = S.session.user, h = {
          id: V.id,
          name: ((c = V.user_metadata) == null ? void 0 : c.name) || ((R = V.user_metadata) == null ? void 0 : R.user_name) || ((k = V.user_metadata) == null ? void 0 : k.full_name) || ((u = V.email) == null ? void 0 : u.split("@")[0]) || "User",
          email: V.email,
          avatar_url: ((L = V.user_metadata) == null ? void 0 : L.avatar_url) || null,
          user_metadata: V.user_metadata
        };
        return s.value = {
          user: h,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, o.value = {
          user: h,
          access_token: S.session.access_token,
          refresh_token: S.session.refresh_token
        }, { user: h, session: o.value, error: null };
      }
      return { user: null, session: null, error: "No session returned" };
    } catch (x) {
      return console.error("Sign in error:", x), s.value.isLoading = !1, { user: null, session: null, error: String(x) };
    }
  }, N = async (m, p, c) => {
    var R, k, u, L, x;
    try {
      s.value.isLoading = !0;
      const S = await te(), { data: f, error: V } = await S.auth.signUp({
        email: m,
        password: p,
        options: {
          data: c
        }
      });
      if (V)
        throw V;
      if (f.session) {
        const h = f.session.user, b = {
          id: h.id,
          name: ((R = h.user_metadata) == null ? void 0 : R.name) || ((k = h.user_metadata) == null ? void 0 : k.user_name) || ((u = h.user_metadata) == null ? void 0 : u.full_name) || ((L = h.email) == null ? void 0 : L.split("@")[0]) || "User",
          email: h.email,
          avatar_url: ((x = h.user_metadata) == null ? void 0 : x.avatar_url) || null,
          user_metadata: h.user_metadata
        };
        return s.value = {
          user: b,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, o.value = {
          user: b,
          access_token: f.session.access_token,
          refresh_token: f.session.refresh_token
        }, { user: b, session: o.value, error: null };
      }
      return { user: null, session: null, error: "No session returned" };
    } catch (S) {
      return console.error("Sign up error:", S), s.value.isLoading = !1, { user: null, session: null, error: String(S) };
    }
  }, w = async () => {
    await _();
  };
  return Ce(async () => {
    await js(), await w();
  }), {
    // State
    authState: s,
    currentSession: o,
    // Computed
    isAuthenticated: t,
    currentUser: n,
    isLoading: v,
    // Methods
    loadUserInfo: _,
    logout: $,
    signIn: T,
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
}, no = {
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
}, io = {
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
}, ps = {
  ...ve,
  normalCheckInterval: 1e4,
  // 10 seconds - faster for testing
  fastCheckInterval: 2e3,
  // 2 seconds - very fast for testing
  fastMonitoringDuration: 3e4,
  // 30 seconds - shorter for testing
  validationCacheDuration: 1e3
  // 1 second cache for testing
}, fs = {
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
function gs() {
  switch ("production") {
    case "production":
      return fs;
    case "development":
      return ps;
    default:
      return ve;
  }
}
function sa(s) {
  return {
    ...ve,
    ...s
  };
}
const lo = {
  default: ve,
  fast: no,
  conservative: io,
  development: ps,
  production: fs
};
function oa(s) {
  return lo[s];
}
const ta = {
  immediate: "Immediate (0-2 seconds) - When logout is detected via auth events",
  fast: "Fast (2-5 seconds) - When fast monitoring is active",
  normal: "Normal (up to 30 seconds) - Regular monitoring interval",
  conservative: "Conservative (up to 60 seconds) - Less frequent monitoring"
}, aa = {
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
function co(s) {
  const o = C(!0), t = C(null), n = C(!1), v = C(!1), _ = C(null), $ = C(null), T = C(null), N = { ...gs(), ...s }, w = N.normalCheckInterval, m = N.fastCheckInterval, p = N.fastMonitoringDuration, c = N.maxRetryAttempts, R = N.retryDelay, k = X(() => !o.value && t.value !== null), u = X(
    () => {
      var A, D;
      return ((A = t.value) == null ? void 0 : A.canRetry) && ((D = t.value) == null ? void 0 : D.type) !== "manual_check_failed";
    }
  ), L = (A) => {
    var E;
    if (typeof document > "u")
      return null;
    const G = `; ${document.cookie}`.split(`; ${A}=`);
    return G.length === 2 && ((E = G.pop()) == null ? void 0 : E.split(";").shift()) || null;
  }, x = async () => {
    var A, D;
    try {
      console.log("[SessionMonitor] Validating session...");
      const G = L("sb-access-token"), E = L("sb-refresh-token");
      if (!G || !E)
        return console.log("[SessionMonitor] No tokens found in cookies"), !1;
      const F = await te();
      let Z = null, ne = null;
      for (let se = 1; se <= 2; se++)
        try {
          const de = await F.auth.getSession();
          Z = de.data.session, ne = de.error;
          break;
        } catch (de) {
          if (console.warn(`[SessionMonitor] Network error on attempt ${se}:`, de), se === 2)
            return console.log("[SessionMonitor] Network issues detected, maintaining current session state"), o.value;
          await new Promise((fe) => setTimeout(fe, 1e3));
        }
      if (ne)
        return console.warn("[SessionMonitor] Error getting session:", ne), (A = ne.message) != null && A.includes("Invalid JWT") || (D = ne.message) != null && D.includes("JWT expired") ? !1 : o.value;
      if (!Z || !Z.user)
        return console.log("[SessionMonitor] No valid session found"), !1;
      const M = /* @__PURE__ */ new Date(), W = new Date(Z.expires_at * 1e3), ee = 5 * 60 * 1e3;
      return M >= new Date(W.getTime() - ee) ? (console.log("[SessionMonitor] Session is close to expiry or expired"), !1) : (console.log("[SessionMonitor] Session is valid"), _.value = /* @__PURE__ */ new Date(), !0);
    } catch (G) {
      return console.error("[SessionMonitor] Error validating session:", G), o.value;
    }
  }, S = async () => {
    try {
      console.log("[SessionMonitor] Attempting to restore session...");
      const A = L("sb-access-token"), D = L("sb-refresh-token");
      if (!A || !D)
        return console.log("[SessionMonitor] No tokens available for restoration"), !1;
      const G = await te(), { data: E, error: F } = await G.auth.setSession({
        access_token: A,
        refresh_token: D
      });
      return F ? (console.warn("[SessionMonitor] Error restoring session:", F), !1) : E.session && E.session.user ? (console.log("[SessionMonitor] Session restored successfully"), _.value = /* @__PURE__ */ new Date(), !0) : !1;
    } catch (A) {
      return console.error("[SessionMonitor] Error restoring session:", A), !1;
    }
  }, f = (A, D, G = !0) => {
    console.warn("[SessionMonitor] Session loss detected:", { type: A, message: D }), o.value = !1, t.value = {
      type: A,
      message: D,
      timestamp: /* @__PURE__ */ new Date(),
      canRetry: G
    };
  }, V = async () => {
    console.log("[SessionMonitor] Retrying session validation...");
    for (let A = 1; A <= c; A++) {
      if (console.log(`[SessionMonitor] Retry attempt ${A}/${c}`), A > 1 && await new Promise((E) => setTimeout(E, R)), await S() && await x())
        return console.log("[SessionMonitor] Session restored and validated successfully"), o.value = !0, t.value = null, !0;
      if (await x())
        return console.log("[SessionMonitor] Session validated successfully on retry"), o.value = !0, t.value = null, !0;
    }
    return console.log("[SessionMonitor] All retry attempts failed"), !1;
  }, h = () => {
    console.log("[SessionMonitor] Clearing session loss state"), o.value = !0, t.value = null;
  }, b = () => {
    if (n.value) {
      console.log("[SessionMonitor] Already monitoring, skipping start");
      return;
    }
    console.log("[SessionMonitor] Starting session monitoring..."), n.value = !0, setTimeout(async () => {
      console.log("[SessionMonitor] Performing initial session validation..."), await x() ? console.log("[SessionMonitor] Initial validation successful") : (console.log("[SessionMonitor] Initial validation failed, but waiting for confirmation..."), setTimeout(async () => {
        await x() || f("session_expired", "Your session has expired. Please log in again.", !0);
      }, 3e3));
    }, 2e3), $.value = setInterval(async () => {
      console.log("[SessionMonitor] Periodic session check...");
      const A = await x();
      !A && o.value ? (console.log("[SessionMonitor] Session validation failed, performing confirmation check..."), setTimeout(async () => {
        await x() || f("session_expired", "Your session has expired. Please log in again.", !0);
      }, 2e3)) : A && !o.value && (console.log("[SessionMonitor] Session recovered"), h());
    }, w);
  }, ae = () => {
    if (v.value) {
      console.log("[SessionMonitor] Fast monitoring already active");
      return;
    }
    console.log("[SessionMonitor] Starting fast monitoring (5s intervals)..."), v.value = !0, T.value && clearInterval(T.value), T.value = setInterval(async () => {
      console.log("[SessionMonitor] Fast session check...");
      const A = await x();
      !A && o.value ? (console.log("[SessionMonitor] Fast monitoring detected potential session loss, confirming..."), setTimeout(async () => {
        await x() || (f("session_expired", "Your session has expired. Please log in again.", !0), q());
      }, 1e3)) : A && !o.value && (console.log("[SessionMonitor] Session recovered"), h(), q());
    }, m), setTimeout(() => {
      v.value && (console.log(`[SessionMonitor] Auto-stopping fast monitoring after ${p / 1e3} seconds`), q());
    }, p);
  }, q = () => {
    v.value && (console.log("[SessionMonitor] Stopping fast monitoring..."), v.value = !1, T.value && (clearInterval(T.value), T.value = null));
  }, B = () => {
    n.value && (console.log("[SessionMonitor] Stopping session monitoring..."), n.value = !1, $.value && (clearInterval($.value), $.value = null), q());
  }, O = async () => {
    console.log("[SessionMonitor] Manual session check requested");
    const A = await x();
    return !A && !await S() ? (f("manual_check_failed", "Session validation failed. Please log in again.", !1), !1) : A;
  }, re = () => {
    console.log("[SessionMonitor] Network error detected, but not triggering immediate session loss"), o.value || f("network_error", "Network connection lost. Please check your internet connection and try again.", !0);
  }, j = () => {
    if (typeof window > "u")
      return;
    const A = () => {
      var E;
      console.log("[SessionMonitor] Network connection restored"), k.value && ((E = t.value) == null ? void 0 : E.type) === "network_error" && setTimeout(() => V(), 1e3);
    }, D = () => {
      console.log("[SessionMonitor] Network connection lost"), re();
    }, G = (E) => {
      console.log("[SessionMonitor] Logout detected, starting fast monitoring for immediate detection"), ae();
    };
    return window.addEventListener("online", A), window.addEventListener("offline", D), window.addEventListener("session-logout-detected", G), () => {
      window.removeEventListener("online", A), window.removeEventListener("offline", D), window.removeEventListener("session-logout-detected", G);
    };
  };
  return Ce(() => {
    console.log("[SessionMonitor] Mounted, setting up monitoring"), b(), j();
  }), us(() => {
    console.log("[SessionMonitor] Unmounted, cleaning up"), B();
  }), {
    // State
    isSessionValid: o,
    sessionLossEvent: t,
    isMonitoring: n,
    isFastMonitoring: v,
    lastValidSession: _,
    // Computed
    hasSessionLoss: k,
    canRetrySession: u,
    // Methods
    validateSession: x,
    restoreSession: S,
    retrySession: V,
    clearSessionLoss: h,
    startMonitoring: b,
    stopMonitoring: B,
    startFastMonitoring: ae,
    stopFastMonitoring: q,
    checkSession: O,
    handleNetworkError: re
  };
}
const uo = Ks("workspace", () => {
  const s = C(null), o = C([]), t = C(null), n = (w) => {
    s.value = w, localStorage.setItem("current_workspace", JSON.stringify(w));
  }, v = (w) => {
    o.value = w, localStorage.setItem("available_workspaces", JSON.stringify(w));
  };
  return {
    currentWorkspace: s,
    workspaces: o,
    user: t,
    setCurrentWorkspace: n,
    setWorkspaces: v,
    setUser: (w) => {
      t.value = w, localStorage.setItem("user_info", JSON.stringify(w));
    },
    loadPersistedData: () => {
      const w = localStorage.getItem("current_workspace");
      if (w)
        try {
          s.value = JSON.parse(w);
        } catch (c) {
          console.error("Error loading persisted workspace:", c);
        }
      const m = localStorage.getItem("available_workspaces");
      if (m)
        try {
          o.value = JSON.parse(m);
        } catch (c) {
          console.error("Error loading persisted workspaces:", c);
        }
      const p = localStorage.getItem("user_info");
      if (p)
        try {
          t.value = JSON.parse(p);
        } catch (c) {
          console.error("Error loading persisted user:", c);
        }
    },
    clearData: () => {
      s.value = null, o.value = [], t.value = null, localStorage.removeItem("current_workspace"), localStorage.removeItem("available_workspaces"), localStorage.removeItem("user_info");
    },
    loadWorkspaces: async (w = !1) => {
      try {
        const { data: { user: m } } = await Ue.auth.getUser();
        if (!m)
          return [];
        let p = Ue.from("workspaces").select(`
          id, title, description, parent_workspace_id, created_by, archived, created_at, git_repo, 
          workspace_access!inner ( access_type, shared_with_user_id ),
          workspace_activities!left ( updated_at )
        `).eq("workspace_access.shared_with_user_id", m.id);
        w || (p = p.eq("archived", !1));
        const { data: c, error: R } = await p;
        if (R)
          throw R;
        const k = /* @__PURE__ */ new Map();
        (c || []).forEach((f) => {
          (f.workspace_access || []).forEach((V) => {
            V.shared_with_user_id === m.id && k.set(f.id, V);
          });
        });
        const u = [...new Set(
          (c || []).filter((f) => f.parent_workspace_id).map((f) => f.parent_workspace_id).filter((f) => !k.has(f))
        )];
        let L = [];
        if (u.length) {
          let f = Ue.from("workspaces").select("id, title, description, parent_workspace_id, created_by, archived, created_at").in("id", u);
          w || (f = f.eq("archived", !1));
          const { data: V, error: h } = await f;
          if (h)
            throw h;
          L = V || [];
        }
        const S = [...c || [], ...L].map((f) => {
          var V, h, b;
          return {
            id: f.id,
            title: f.title,
            description: f.description || "No description",
            parent_workspace_id: f.parent_workspace_id,
            created_by: f.created_by,
            archived: f.archived,
            created_at: f.created_at,
            latest_activity: ((h = (V = f.workspace_activities) == null ? void 0 : V[0]) == null ? void 0 : h.updated_at) || f.created_at,
            hasAccess: k.has(f.id),
            accessType: ((b = k.get(f.id)) == null ? void 0 : b.access_type) || null
          };
        });
        return S.sort((f, V) => new Date(V.latest_activity) - new Date(f.latest_activity)), v(S), S;
      } catch (m) {
        return console.error("loadWorkspaces error", m), [];
      }
    }
  };
});
let Se = null;
const hs = (s) => !(!s || typeof s != "string" || s.trim().length === 0 || s.trim().length < 20), po = async () => {
  try {
    const s = await te(), { data: o, error: t } = await s.from("settings").select("key_value").eq("key_name", "github_token").single();
    if (t)
      return t.code === "PGRST116" ? console.info("[GitHub Config] No GitHub token configured in database") : console.warn("[GitHub Config] Error fetching token from database:", t.message), null;
    if (o != null && o.key_value) {
      const n = o.key_value.trim();
      return hs(n) ? (console.log("🔧 GitHub token fetched from database"), n) : (console.warn("[GitHub Config] Invalid GitHub token format in database"), null);
    }
    return console.warn("[GitHub Config] No GitHub token found in database"), null;
  } catch (s) {
    return console.error("[GitHub Config] Failed to fetch token from database:", s), null;
  }
}, ra = (s) => {
  if (!(s != null && s.token) || !hs(s.token))
    throw console.error("[GitHub Config] Invalid GitHub token provided"), new Error("Invalid GitHub token provided");
  Se = s.token.trim(), console.log("🔧 GitHub token configured manually");
}, je = async () => {
  if (Se)
    return Se;
  try {
    const s = await po();
    if (s)
      return Se = s, s;
  } catch (s) {
    console.error("[GitHub Config] Failed to fetch token:", s);
  }
  return null;
}, na = async () => {
  if (Se !== null)
    return !0;
  try {
    return await je() !== null;
  } catch (s) {
    return console.error("[GitHub Config] Error checking configuration:", s), !1;
  }
}, fo = () => {
  Se = null, console.log("🔧 GitHub token cache cleared");
}, ia = async () => (fo(), await je());
function go() {
  const s = C({
    user: null,
    isAuthenticated: !1,
    isLoading: !0,
    error: null
  }), o = C(window.location.href), t = async () => {
    var w, m, p, c, R, k, u, L;
    try {
      s.value.isLoading = !0;
      const x = await te(), { data: { session: S }, error: f } = await x.auth.getSession();
      if (f) {
        console.error("Error checking auth status:", f), s.value = {
          user: null,
          isAuthenticated: !1,
          isLoading: !1,
          error: f.message
        };
        return;
      }
      S != null && S.user ? (s.value = {
        user: {
          id: S.user.id,
          email: S.user.email || "",
          name: ((w = S.user.user_metadata) == null ? void 0 : w.full_name) || ((m = S.user.user_metadata) == null ? void 0 : m.name) || ((p = S.user.email) == null ? void 0 : p.split("@")[0]) || "User",
          avatar_url: ((c = S.user.user_metadata) == null ? void 0 : c.avatar_url) || ((R = S.user.user_metadata) == null ? void 0 : R.picture) || null,
          initials: (((k = S.user.user_metadata) == null ? void 0 : k.full_name) || ((u = S.user.user_metadata) == null ? void 0 : u.name) || ((L = S.user.email) == null ? void 0 : L.split("@")[0]) || "U").split(" ").map((V) => V[0]).join("").toUpperCase().substring(0, 2)
        },
        isAuthenticated: !0,
        isLoading: !1,
        error: null
      }, S.access_token && be(_e, S.access_token), S.refresh_token && be(ye, S.refresh_token), Oe()) : s.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      };
    } catch (x) {
      console.error("Auth check failed:", x), s.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: x.message || "Authentication check failed"
      };
    }
  }, n = async (w, m) => {
    try {
      const p = await te(), { error: c } = await p.auth.signInWithPassword({
        email: w,
        password: m
      });
      return c ? { success: !1, error: c.message } : (await t(), sessionStorage.setItem("post-login-redirect", o.value), { success: !0 });
    } catch (p) {
      return console.error("Login error:", p), { success: !1, error: p.message || "Login failed" };
    }
  }, v = async (w, m) => {
    var p;
    try {
      const c = await te(), { data: R, error: k } = await c.auth.signUp({
        email: w,
        password: m
      });
      return k ? { success: !1, error: k.message } : R.user && !R.user.email_confirmed_at ? { success: !0, needsConfirmation: !0 } : (p = R.session) != null && p.user ? (await t(), sessionStorage.setItem("post-login-redirect", o.value), { success: !0 }) : { success: !1, error: "No session created" };
    } catch (c) {
      return console.error("Signup error:", c), { success: !1, error: c.message || "Signup failed" };
    }
  }, _ = async (w) => {
    try {
      const m = `${window.location.origin}/auth/callback`;
      console.log("[OAuth] Starting login with provider:", w), console.log("[OAuth] Redirect URL:", m), console.log("[OAuth] Current URL:", o.value), console.log("[OAuth] Current origin:", window.location.origin);
      const p = await te(), { error: c } = await p.auth.signInWithOAuth({
        provider: w,
        options: {
          redirectTo: m,
          queryParams: {
            redirect_origin: o.value
          }
        }
      });
      if (c)
        return console.error("[OAuth] Error:", c), { success: !1, error: c.message };
      const R = o.value || window.location.href;
      return sessionStorage.setItem("post-login-redirect", R), localStorage.setItem("post-login-redirect", R), console.log("[OAuth] Stored redirect URL:", R), console.log("[OAuth] Current URL value:", o.value), console.log("[OAuth] Window location href:", window.location.href), { success: !0 };
    } catch (m) {
      return console.error("OAuth login error:", m), { success: !1, error: m.message || "OAuth login failed" };
    }
  }, $ = async () => {
    try {
      const w = await te(), { error: m } = await w.auth.signOut();
      m && console.error("Logout error:", m), s.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      }, ke(_e), ke(ye), Ne();
    } catch (w) {
      console.error("Logout error:", w);
    }
  }, T = async (w) => {
    try {
      const m = await te(), { error: p } = await m.auth.resetPasswordForEmail(w, {
        redirectTo: `${window.location.origin}/auth/reset-password`
      });
      return p ? { success: !1, error: p.message } : { success: !0 };
    } catch (m) {
      return console.error("Password reset error:", m), { success: !1, error: m.message || "Password reset failed" };
    }
  }, N = async () => {
    try {
      (await te()).auth.onAuthStateChange((m, p) => {
        var c;
        switch (console.log("Auth state changed:", m, (c = p == null ? void 0 : p.user) == null ? void 0 : c.email), m) {
          case "SIGNED_IN":
            p != null && p.user && t();
            break;
          case "SIGNED_OUT":
            s.value = {
              user: null,
              isAuthenticated: !1,
              isLoading: !1,
              error: null
            }, ke(_e), ke(ye), Ne();
            break;
          case "TOKEN_REFRESHED":
            p != null && p.access_token && be(_e, p.access_token), p != null && p.refresh_token && be(ye, p.refresh_token), Oe();
            break;
          case "USER_UPDATED":
            p != null && p.user && t();
            break;
        }
      });
    } catch (w) {
      console.warn("Failed to setup auth listener:", w);
    }
  };
  return Ce(async () => {
    N(), await t();
  }), pe(() => window.location.href, (w) => {
    o.value = w;
  }), {
    authState: X(() => s.value),
    isAuthenticated: X(() => s.value.isAuthenticated),
    user: X(() => s.value.user),
    isLoading: X(() => s.value.isLoading),
    checkAuthStatus: t,
    loginWithEmail: n,
    signupWithEmail: v,
    loginWithProvider: _,
    logout: $,
    resetPassword: T,
    currentUrl: X(() => o.value)
  };
}
const ho = { class: "login-container" }, vo = { class: "logo-section" }, wo = { class: "login-buttons" }, mo = {
  key: 0,
  class: "forgot-password"
}, ko = { class: "signup-link" }, _o = /* @__PURE__ */ ue({
  __name: "LoginModal",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue", "login-success"],
  setup(s, { emit: o }) {
    const t = s, n = o, v = X({
      get: () => t.modelValue,
      set: (h) => n("update:modelValue", h)
    }), _ = C(!1), $ = C(!1), T = C(), { loginWithEmail: N, signupWithEmail: w, loginWithProvider: m, resetPassword: p } = go(), c = Ns({
      email: "",
      password: "",
      confirmPassword: ""
    }), R = X(() => ({
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
            validator: (h, b, ae) => {
              b !== c.password ? ae(new Error("Passwords do not match")) : ae();
            },
            trigger: "blur"
          }
        ]
      } : {}
    })), k = () => {
      var h;
      _.value = !_.value, c.email = "", c.password = "", c.confirmPassword = "", (h = T.value) == null || h.clearValidate();
    }, u = () => {
      var h;
      v.value = !1, c.email = "", c.password = "", c.confirmPassword = "", _.value = !1, (h = T.value) == null || h.clearValidate();
    }, L = async () => {
      if (T.value)
        try {
          await T.value.validate(), $.value = !0, _.value ? await S() : await x();
        } catch (h) {
          console.error("Form validation failed:", h);
        } finally {
          $.value = !1;
        }
    }, x = async () => {
      const h = await N(c.email, c.password);
      h.success ? (z.success("Login successful"), n("login-success", { email: c.email }), u()) : z.error("Login failed: " + h.error);
    }, S = async () => {
      const h = await w(c.email, c.password);
      h.success ? h.needsConfirmation ? z.success("Please check your email to confirm your account") : (z.success("Account created successfully"), n("login-success", { email: c.email }), u()) : z.error("Signup failed: " + h.error);
    }, f = async (h) => {
      const b = await m(h);
      b.success ? z.success("Redirecting to login provider...") : z.error("Login failed: " + b.error);
    }, V = async () => {
      if (!c.email) {
        z.warning("Please enter your email address first");
        return;
      }
      const h = await p(c.email);
      h.success ? z.success("Password reset email sent! Please check your inbox.") : z.error("Failed to send reset email: " + h.error);
    };
    return (h, b) => {
      const ae = ie("el-icon"), q = ie("el-input"), B = ie("el-form-item"), O = ie("el-button"), re = ie("el-dialog");
      return y(), oe(re, {
        modelValue: v.value,
        "onUpdate:modelValue": b[6] || (b[6] = (j) => v.value = j),
        title: "",
        width: "500px",
        "close-on-click-modal": !1,
        "close-on-press-escape": !0,
        "show-close": !0,
        class: "login-modal",
        onClose: u
      }, {
        default: d(() => [
          i("div", ho, [
            i("div", vo, [
              i("h2", null, K(_.value ? "Create Account" : "Welcome Back"), 1),
              i("p", null, K(_.value ? "Sign up to get started with your account" : "Sign in to continue to your account"), 1)
            ]),
            g(P(Gs), {
              model: c,
              rules: R.value,
              ref_key: "formRef",
              ref: T,
              class: "login-form",
              onSubmit: ge(L, ["prevent"])
            }, {
              default: d(() => [
                g(B, { prop: "email" }, {
                  default: d(() => [
                    g(q, {
                      modelValue: c.email,
                      "onUpdate:modelValue": b[0] || (b[0] = (j) => c.email = j),
                      placeholder: "Email",
                      type: "email",
                      size: "large",
                      class: "form-input"
                    }, {
                      prefix: d(() => [
                        g(ae, null, {
                          default: d(() => [
                            g(P(Zs))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                g(B, { prop: "password" }, {
                  default: d(() => [
                    g(q, {
                      modelValue: c.password,
                      "onUpdate:modelValue": b[1] || (b[1] = (j) => c.password = j),
                      placeholder: "Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: d(() => [
                        g(ae, null, {
                          default: d(() => [
                            g(P(cs))
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
                  default: d(() => [
                    g(q, {
                      modelValue: c.confirmPassword,
                      "onUpdate:modelValue": b[2] || (b[2] = (j) => c.confirmPassword = j),
                      placeholder: "Confirm Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: d(() => [
                        g(ae, null, {
                          default: d(() => [
                            g(P(cs))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                })) : Y("", !0),
                g(B, null, {
                  default: d(() => [
                    g(O, {
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
            b[10] || (b[10] = i("div", { class: "divider" }, [
              i("span", null, "Or continue with")
            ], -1)),
            i("div", wo, [
              g(O, {
                class: "login-button google",
                onClick: b[3] || (b[3] = (j) => f("google")),
                size: "large"
              }, {
                default: d(() => [...b[7] || (b[7] = [
                  i("span", { class: "social-icon" }, "G", -1),
                  J(" Google ", -1)
                ])]),
                _: 1
              }),
              g(O, {
                class: "login-button github",
                onClick: b[4] || (b[4] = (j) => f("github")),
                size: "large"
              }, {
                default: d(() => [...b[8] || (b[8] = [
                  i("span", { class: "social-icon" }, "⚡", -1),
                  J(" GitHub ", -1)
                ])]),
                _: 1
              }),
              g(O, {
                class: "login-button twitter",
                onClick: b[5] || (b[5] = (j) => f("twitter")),
                size: "large"
              }, {
                default: d(() => [...b[9] || (b[9] = [
                  i("span", { class: "social-icon" }, "X", -1),
                  J(" X (Twitter) ", -1)
                ])]),
                _: 1
              })
            ]),
            b[11] || (b[11] = i("div", { class: "terms" }, " By continuing, you agree to AI Workspace's Terms of Service and Privacy Policy ", -1)),
            _.value ? Y("", !0) : (y(), H("div", mo, [
              i("a", {
                href: "#",
                onClick: ge(V, ["prevent"])
              }, "Forgot Password?")
            ])),
            i("div", ko, [
              J(K(_.value ? "Already have an account?" : "Don't have an account?") + " ", 1),
              i("a", {
                href: "#",
                onClick: ge(k, ["prevent"])
              }, K(_.value ? "Sign in" : "Sign up"), 1)
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
const $e = (s, o) => {
  const t = s.__vccOpts || s;
  for (const [n, v] of o)
    t[n] = v;
  return t;
}, yo = /* @__PURE__ */ $e(_o, [["__scopeId", "data-v-684a3f28"]]), bo = { class: "session-loss-content" }, So = { class: "session-loss-icon" }, Co = { class: "session-loss-message" }, Ao = {
  key: 0,
  class: "session-loss-details"
}, Eo = { class: "detail-item" }, Io = { class: "detail-value" }, Lo = { class: "detail-item" }, Vo = { class: "detail-value" }, xo = { class: "session-loss-actions" }, Uo = {
  key: 0,
  class: "retry-status"
}, Mo = { class: "retry-message" }, $o = /* @__PURE__ */ ue({
  __name: "SessionLossModal",
  props: {
    modelValue: { type: Boolean },
    sessionLossEvent: {},
    canRetrySession: { type: Boolean }
  },
  emits: ["update:modelValue", "retry", "login", "refresh"],
  setup(s, { emit: o }) {
    const t = s, n = o, v = C(!1), _ = C(0), $ = C(void 0), T = C(""), N = X({
      get: () => t.modelValue,
      set: (k) => n("update:modelValue", k)
    }), w = (k) => {
      switch (k) {
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
    }, m = (k) => k.toLocaleString(), p = async () => {
      if (v.value)
        return;
      v.value = !0, _.value = 0, $.value = void 0, T.value = "Attempting to restore session...";
      const k = setInterval(() => {
        _.value < 90 && (_.value += Math.random() * 20);
      }, 200);
      try {
        n("retry"), await new Promise((u) => setTimeout(u, 2e3)), _.value = 100, $.value = "success", T.value = "Session restored successfully!", setTimeout(() => {
          N.value = !1;
        }, 1e3);
      } catch {
        _.value = 100, $.value = "exception", T.value = "Failed to restore session. Please log in again.", z.error("Session restoration failed");
      } finally {
        clearInterval(k), setTimeout(() => {
          v.value = !1, _.value = 0, $.value = void 0, T.value = "";
        }, 3e3);
      }
    }, c = () => {
      n("login"), N.value = !1;
    }, R = () => {
      n("refresh"), window.location.reload();
    };
    return pe(() => t.sessionLossEvent, (k) => {
      k && (v.value = !1, _.value = 0, $.value = void 0, T.value = "");
    }), (k, u) => (y(), oe(P(Fs), {
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
      default: d(() => {
        var L;
        return [
          i("div", bo, [
            i("div", So, [
              g(P(xe), {
                size: "48",
                color: "#f56c6c"
              }, {
                default: d(() => [
                  g(P(ds))
                ]),
                _: 1
              })
            ]),
            i("div", Co, [
              u[3] || (u[3] = i("h3", null, "Your session has expired", -1)),
              i("p", null, K(((L = s.sessionLossEvent) == null ? void 0 : L.message) || "Please log in again to continue using the application."), 1),
              s.sessionLossEvent ? (y(), H("div", Ao, [
                i("div", Eo, [
                  u[1] || (u[1] = i("span", { class: "detail-label" }, "Issue:", -1)),
                  i("span", Io, K(w(s.sessionLossEvent.type)), 1)
                ]),
                i("div", Lo, [
                  u[2] || (u[2] = i("span", { class: "detail-label" }, "Time:", -1)),
                  i("span", Vo, K(m(s.sessionLossEvent.timestamp)), 1)
                ])
              ])) : Y("", !0)
            ]),
            i("div", xo, [
              s.canRetrySession && !v.value ? (y(), oe(P(Pe), {
                key: 0,
                type: "primary",
                onClick: p,
                loading: v.value
              }, {
                default: d(() => [
                  g(P(xe), null, {
                    default: d(() => [
                      g(P(Ge))
                    ]),
                    _: 1
                  }),
                  u[4] || (u[4] = J(" Try Again ", -1))
                ]),
                _: 1
              }, 8, ["loading"])) : Y("", !0),
              g(P(Pe), {
                type: "primary",
                onClick: c,
                disabled: v.value
              }, {
                default: d(() => [
                  g(P(xe), null, {
                    default: d(() => [
                      g(P(Fe))
                    ]),
                    _: 1
                  }),
                  u[5] || (u[5] = J(" Log In ", -1))
                ]),
                _: 1
              }, 8, ["disabled"]),
              s.canRetrySession ? Y("", !0) : (y(), oe(P(Pe), {
                key: 1,
                type: "info",
                onClick: R,
                disabled: v.value
              }, {
                default: d(() => [
                  g(P(xe), null, {
                    default: d(() => [
                      g(P(Ge))
                    ]),
                    _: 1
                  }),
                  u[6] || (u[6] = J(" Refresh Page ", -1))
                ]),
                _: 1
              }, 8, ["disabled"]))
            ]),
            v.value ? (y(), H("div", Uo, [
              g(P(Bs), {
                percentage: _.value,
                status: $.value,
                "stroke-width": 6
              }, null, 8, ["percentage", "status"]),
              i("p", Mo, K(T.value), 1)
            ])) : Y("", !0)
          ])
        ];
      }),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const Ro = /* @__PURE__ */ $e($o, [["__scopeId", "data-v-0dd27f7f"]]), Wo = { class: "aiworkspace-header" }, Ho = {
  key: 0,
  class: "header-content header-loading"
}, To = { class: "header-center" }, Po = { class: "loading-text" }, Do = { key: 0 }, No = { key: 1 }, Oo = {
  key: 1,
  class: "header-content header-fallback"
}, Go = {
  key: 2,
  class: "header-content header-restricted"
}, Fo = { class: "header-center" }, Bo = { class: "restricted-text" }, jo = { class: "header-right" }, zo = {
  key: 3,
  class: "header-content"
}, Ko = { class: "header-left" }, qo = { class: "logo-section" }, Jo = {
  href: "/",
  class: "logo"
}, Yo = ["src"], Xo = {
  key: 1,
  class: "text-logo"
}, Qo = {
  key: 0,
  class: "header-center"
}, Zo = { class: "main-navigation" }, et = { class: "nav-item" }, st = {
  href: "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard",
  class: "nav-link"
}, ot = { class: "workspace-dropdown-item" }, tt = ["href"], at = { class: "workspace-icon" }, rt = {
  key: 1,
  class: "nav-divider"
}, nt = { class: "nav-item" }, it = ["href", "onClick"], lt = { class: "header-right" }, ct = { class: "user-profile" }, ut = { class: "user-info" }, dt = { class: "user-name" }, pt = { class: "user-avatar" }, ft = ["src", "alt"], gt = {
  key: 1,
  class: "avatar-placeholder"
}, ht = { class: "version-info" }, vt = { class: "version-hash" }, wt = {
  key: 4,
  class: "header-content header-unauthenticated"
}, mt = { class: "header-left" }, kt = { class: "logo-section" }, _t = {
  href: "/",
  class: "logo"
}, yt = ["src"], bt = {
  key: 1,
  class: "text-logo"
}, St = {
  key: 0,
  class: "header-right"
}, Ct = { class: "workspace-list" }, At = ["onClick"], Et = { class: "workspace-icon" }, It = { class: "workspace-details" }, Lt = { class: "workspace-members" }, Vt = {
  key: 0,
  class: "current-indicator"
}, xt = { class: "update-content" }, Ut = { class: "update-actions" }, Ee = 50, Mt = 6e4, $t = 30, Rt = /* @__PURE__ */ ue({
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
  setup(s, { emit: o }) {
    const t = s, n = o, { authState: v, logout: _, isLoading: $ } = ro(), {
      isSessionValid: T,
      sessionLossEvent: N,
      hasSessionLoss: w,
      canRetrySession: m,
      retrySession: p,
      clearSessionLoss: c
    } = co(), R = () => {
      try {
        return uo();
      } catch {
        return console.warn("[AIWorkspaceHeader] Pinia not initialized yet, using fallback state"), null;
      }
    }, k = () => {
      try {
        return typeof window < "u" ? !!window.__PINIA__ || !!window.Pinia : !1;
      } catch {
        return !1;
      }
    }, u = C(R()), L = X(() => !!u.value), x = C(0), S = () => {
      if (!u.value && x.value < Ee) {
        if (k()) {
          const a = R();
          if (a) {
            u.value = a, console.log("[AIWorkspaceHeader] Pinia store initialized successfully");
            return;
          }
        }
        x.value++, setTimeout(S, 100);
      } else
        x.value >= Ee && console.warn("[AIWorkspaceHeader] Pinia initialization failed after maximum retries, using fallback mode");
    };
    Ce(() => {
      u.value || S();
    });
    const f = C(!1), V = C(!1), h = C(!1), b = C([]), ae = C([]), q = C({
      name: "",
      email: "",
      avatar_url: null,
      initials: ""
    }), B = C("unknown"), O = C("unknown"), re = C(!1), j = C(null), A = C(null), D = C(!1), G = C([]), E = C([]), F = C(!1);
    pe(E, async (a) => {
      a.length > 0 && L.value && ee.value && await W();
    }, { immediate: !1 }), pe(() => window.location.pathname + window.location.search + window.location.hash, async () => {
      L.value && ee.value && await W();
    }, { immediate: !1 });
    const Z = C(window.location.pathname);
    pe(() => window.location.pathname, (a) => {
      Z.value = a;
    }, { immediate: !0 }), pe(L, (a) => {
      !a && x.value < Ee && S();
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
    }, M = () => {
      try {
        return window.location.pathname.includes("/all-workspace/");
      } catch (a) {
        return console.warn("[AIWorkspaceHeader] Error checking all-workspace mode:", a), !1;
      }
    }, W = async () => {
      if (!u.value || !L.value)
        return;
      const a = M();
      if (F.value = a, a) {
        u.value.currentWorkspace = null, localStorage.removeItem("current_workspace"), console.log("[AIWorkspaceHeader] Auto-selected all-workspace mode from URL");
        return;
      }
      const e = ne();
      if (e)
        try {
          E.value.length === 0 && await Je();
          const r = E.value.find((l) => l.id.toString() === e);
          r ? (u.value.setCurrentWorkspace(r), console.log(`[AIWorkspaceHeader] Auto-selected workspace from URL: ${r.title} (ID: ${r.id})`), n("workspaceChange", r)) : console.warn(`[AIWorkspaceHeader] Workspace with ID ${e} not found in available workspaces`);
        } catch (r) {
          console.error("[AIWorkspaceHeader] Error auto-selecting workspace from URL:", r);
        }
    }, ee = X(() => v.value.isAuthenticated), se = X(() => u.value ? u.value.currentWorkspace : null), de = X(() => {
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
    ]), vs = C([
      { label: "Dashboard", key: "dashboard", url: "/dashboard" },
      { label: "All Tasks", key: "tasks", url: "/tasks" },
      { label: "All Goals", key: "goals", url: "/goals" },
      { label: "All Events", key: "events", url: "/events" },
      { label: "All Drive", key: "files", url: "/files" },
      { label: "All Contacts", key: "contacts", url: "/contacts" },
      { label: "All Settings", key: "settings", url: "/settings" }
    ]), Ke = X(() => F.value ? vs.value : fe.value), ws = X(() => {
      try {
        const a = Z.value;
        let e = "";
        const r = a.match(/\/all-workspace\/([^\/]+)/);
        if (r)
          e = r[1];
        else {
          const l = a.match(/\/single-workspace\/\d+\/([^\/]+)/);
          if (l)
            e = l[1];
          else {
            const U = a.match(/\/([^\/]+)$/);
            U && (e = U[1]);
          }
        }
        if (e) {
          const l = Ke.value.find(
            (U) => U.key === e || U.url.includes(`/${e}`) || U.url === `/${e}`
          );
          if (l)
            return l.label;
        }
        return "Dashboard";
      } catch (a) {
        return console.warn("[AIWorkspaceHeader] Error determining current section:", a), "Dashboard";
      }
    }), ms = (a) => {
      const e = /* @__PURE__ */ new Map();
      a.forEach((U) => {
        e.set(U.id, { ...U, children: [] });
      });
      const r = [];
      e.forEach((U) => {
        U.parent_workspace_id && e.has(U.parent_workspace_id) ? e.get(U.parent_workspace_id).children.push(U) : r.push(U);
      });
      const l = (U) => {
        U.sort((Q, ce) => Q.title.localeCompare(ce.title)), U.forEach((Q) => {
          Q.children && l(Q.children);
        });
      };
      return l(r), r;
    }, qe = (a, e = 0, r = []) => (a.forEach((l) => {
      r.push({ ...l, level: e }), l.children && l.children.length && qe(l.children, e + 1, r);
    }), r), Je = async () => {
      var a, e, r;
      try {
        const l = await ((a = u.value) == null ? void 0 : a.loadWorkspaces());
        if (G.value = ms(l || []), E.value = qe(G.value), ae.value = E.value, b.value = E.value, t.currentWorkspaceId) {
          const U = E.value.find((Q) => {
            var ce;
            return Q.id.toString() === ((ce = t.currentWorkspaceId) == null ? void 0 : ce.toString());
          });
          U && ((e = u.value) == null || e.setCurrentWorkspace(U));
        } else
          !se.value && E.value.length && ((r = u.value) == null || r.setCurrentWorkspace(E.value[0]));
      } catch (l) {
        console.error("loadWorkspaces (header) error", l);
      }
    }, ks = (a) => {
      if (console.log("Navigation command:", a), a === "all-workspace") {
        window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
        return;
      } else {
        const e = parseInt(a.replace("workspace-", ""));
        window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e}/dashboard`;
        return;
      }
    }, _s = (a) => {
      const e = se.value, r = F.value;
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
    }, ys = (a) => {
      const e = se.value, r = F.value;
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
          f.value = !0;
          break;
        case "logout":
          Ss();
          break;
      }
    }, Ye = (a) => {
      var e;
      (e = u.value) == null || e.setCurrentWorkspace(a), f.value = !1, n("workspaceChange", a), z.success(`Switched to ${a.title}`);
    }, bs = () => {
      is.prompt("Enter workspace name:", "Create New Workspace", {
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
        b.value.push(e), (r = u.value) == null || r.setWorkspaces(b.value), Ye(e), z.success(`Created workspace: ${a}`);
      }).catch(() => {
      });
    }, Ss = () => {
      is.confirm(
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
        })), n("logout"), z.success("Signed out successfully");
      }).catch(() => {
      });
    }, Re = async () => {
      var a, e;
      if (v.value.user) {
        const r = v.value.user;
        q.value = {
          name: r.name || ((a = r.email) == null ? void 0 : a.split("@")[0]) || "User",
          email: r.email || "",
          avatar_url: r.avatar_url || null,
          initials: (r.name || ((e = r.email) == null ? void 0 : e.split("@")[0]) || "U").split(" ").map((l) => l[0]).join("").toUpperCase().substring(0, 2)
        }, t.showWorkspaceSelector && await Je();
      }
    };
    pe(() => v.value.user, (a) => {
      var e;
      a ? Re() : (q.value = { name: "", email: "", avatar_url: null, initials: "" }, (e = u.value) == null || e.clearData());
    }), pe(w, (a) => {
      a && ee.value && (console.log("[AIWorkspaceHeader] Session loss detected, showing modal"), h.value = !0);
    }), pe(() => t.currentWorkspaceId, (a) => {
      var e;
      if (a && E.value.length) {
        const r = E.value.find((l) => l.id.toString() === a.toString());
        r && ((e = u.value) == null || e.setCurrentWorkspace(r));
      }
    }), Ce(async () => {
      ee.value && (await Re(), await W()), await Vs(), as(), Ws();
    });
    const Cs = async (a) => {
      console.log("Login successful:", a), V.value = !1, await Re(), n("login"), z.success("Welcome back!");
    }, As = async () => {
      console.log("[AIWorkspaceHeader] Retrying session..."), await p() ? (h.value = !1, c(), z.success("Session restored successfully!")) : z.error("Failed to restore session. Please log in again.");
    }, Es = () => {
      console.log("[AIWorkspaceHeader] Opening login modal from session loss"), h.value = !1, V.value = !0;
    }, Is = () => {
      console.log("[AIWorkspaceHeader] Refreshing page due to session loss"), window.location.reload();
    }, Ls = () => {
      x.value = 0, S(), z.success("Manual Pinia retry initiated.");
    }, Vs = async () => {
      try {
        const a = await fetch("/version.json");
        if (a.ok) {
          const e = a.headers.get("content-type");
          if (e && e.includes("application/json"))
            try {
              const r = await a.json();
              console.log("Version data received:", r), B.value = r.shortCommitHash || "unknown", O.value = r.fullCommitHash || "unknown", console.log("✅ Loaded commit hash from version.json:", B.value);
              return;
            } catch {
              console.log("Failed to parse version.json, trying fallback methods...");
            }
        }
        console.log("🔄 version.json not available, trying automatic detection..."), await Qe();
      } catch (a) {
        console.log("Error loading version.json, trying automatic detection...", a), await Qe();
      }
    }, Xe = async () => {
      try {
        let a = await es();
        if (a || (a = Ze()), a) {
          const e = await ts(a);
          e && e !== O.value && (console.log("🔄 New commit detected:", O.value, "→", e), O.value !== "unknown" && !re.value && (re.value = !0, j.value = e));
        }
      } catch (a) {
        console.log("Error checking for new commits:", a);
      }
    }, Qe = async () => {
      try {
        let a = await es();
        if (a || (a = Ze()), a) {
          const U = await ts(a);
          if (U) {
            B.value = U.substring(0, 7), O.value = U, console.log("✅ Loaded commit hash from GitHub API:", B.value);
            return;
          }
        }
        const e = await Ms();
        if (e && e.version) {
          B.value = e.version, O.value = e.version, console.log("✅ Loaded version from package.json:", B.value);
          return;
        }
        const r = await $s();
        if (r) {
          B.value = r, O.value = r, console.log("✅ Loaded version from build info:", B.value);
          return;
        }
        const l = Date.now().toString(36);
        B.value = l.substring(0, 7), O.value = l, console.log("✅ Using timestamp-based version:", B.value);
      } catch (a) {
        console.warn("❌ All automatic detection methods failed:", a), B.value = "unknown", O.value = "unknown";
      }
    }, Ze = () => {
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
    }, es = async () => {
      try {
        const a = await fetch("/package.json");
        if (!a.ok)
          return console.log("package.json not found or not accessible"), null;
        const e = a.headers.get("content-type");
        if (!e || !e.includes("application/json"))
          return console.log("package.json returned non-JSON content (likely HTML), skipping GitHub API"), null;
        const r = await a.json();
        if (r.repository && r.repository.url) {
          const U = r.repository.url.match(/github\.com\/([^\/]+)\/([^\/]+)/);
          if (U)
            return console.log("✅ Found GitHub repo info:", U[1], U[2].replace(".git", "")), { owner: U[1], repo: U[2].replace(".git", "") };
        }
        return console.log("No valid GitHub repository found in package.json"), null;
      } catch (a) {
        return console.log("Could not get repo info from package.json:", a), null;
      }
    }, ss = C(0), We = C(0), os = C(Date.now()), xs = () => {
      const a = Date.now();
      a - os.value > 60 * 60 * 1e3 && (We.value = 0, os.value = a, console.log("🔄 GitHub API call counter reset"));
    }, Us = () => {
      const a = je();
      if (a)
        return a;
      if ({}.VITE_GITHUB_TOKEN)
        return {}.VITE_GITHUB_TOKEN;
      const e = localStorage.getItem("github_token");
      return e || null;
    }, ts = async (a) => {
      var e;
      try {
        const r = Date.now();
        if (xs(), r - ss.value < Mt)
          return console.log("⏳ GitHub API rate limit: waiting before next call"), null;
        if (We.value >= $t)
          return console.log("🚫 GitHub API hourly limit reached, skipping call"), null;
        const l = Us(), U = {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "AIWorkspace-Header/1.0"
        };
        l ? (U.Authorization = `token ${l}`, console.log("🔑 Using GitHub token for authentication")) : console.log("⚠️ No GitHub token found, trying unauthenticated request");
        const Q = ["main", "master"];
        for (const ce of Q)
          try {
            const le = await fetch(`https://api.github.com/repos/${a.owner}/${a.repo}/commits/${ce}`, {
              headers: U
            });
            if (ss.value = r, We.value++, le.ok) {
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
    }, Ms = async () => {
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
    }, $s = async () => {
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
    }, Rs = async () => {
      try {
        if (O.value === "unknown") {
          z.warning("Version information not available");
          return;
        }
        await navigator.clipboard.writeText(O.value), z.success("Version information copied to clipboard!");
      } catch (a) {
        console.error("Failed to copy version info:", a), z.error("Failed to copy version info");
      }
    }, as = async () => {
      if (!D.value) {
        D.value = !0;
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
          j.value = l.fullCommitHash, O.value !== j.value && (re.value || (re.value = !0, console.log("Version mismatch detected:", {
            currentVersion: O.value,
            latestVersion: j.value,
            serverBuildTime: l.buildTime
          })));
        } catch (a) {
          console.error("Error checking for updates:", a);
        } finally {
          D.value = !1;
        }
      }
    }, Ws = () => {
      A.value = setInterval(() => {
        as(), Xe();
      }, 5 * 60 * 1e3);
    }, Hs = () => {
      console.log("User reloaded for update:", {
        currentVersion: O.value,
        latestVersion: j.value
      }), window.location.reload();
    }, rs = () => {
      re.value = !1, console.log("Update alert dismissed:", {
        currentVersion: O.value,
        latestVersion: j.value
      });
    };
    return us(() => {
      A.value && clearInterval(A.value);
    }), (a, e) => {
      const r = ie("el-icon"), l = ie("el-button"), U = ie("el-tag"), Q = ie("el-dropdown-item"), ce = ie("el-dropdown-menu"), le = ie("el-dropdown"), Ae = ie("el-dialog"), Ts = ie("el-alert");
      return y(), H(Le, null, [
        i("header", Wo, [
          !L.value && x.value < Ee || P($) ? (y(), H("div", Ho, [
            e[10] || (e[10] = Ve('<div class="header-left" data-v-5e60b21d><div class="logo-section" data-v-5e60b21d><a href="/" class="logo" data-v-5e60b21d><div class="text-logo" data-v-5e60b21d><span class="logo-text" data-v-5e60b21d>AI Workspace</span></div></a></div></div>', 1)),
            i("div", To, [
              i("span", Po, [
                P($) ? (y(), H("span", Do, "Syncing authentication...")) : (y(), H("span", No, "Initializing..."))
              ])
            ])
          ])) : !L.value && x.value >= Ee ? (y(), H("div", Oo, [
            e[12] || (e[12] = Ve('<div class="header-left" data-v-5e60b21d><div class="logo-section" data-v-5e60b21d><a href="/" class="logo" data-v-5e60b21d><div class="text-logo" data-v-5e60b21d><span class="logo-text" data-v-5e60b21d>AI Workspace</span></div></a></div></div>', 1)),
            i("div", { class: "header-center" }, [
              e[11] || (e[11] = i("span", { class: "fallback-text" }, "Header Ready (Fallback Mode)", -1)),
              i("button", {
                onClick: Ls,
                class: "retry-button"
              }, "Retry Pinia")
            ]),
            e[13] || (e[13] = Ve('<div class="header-right" data-v-5e60b21d><div class="user-profile" data-v-5e60b21d><div class="user-info" data-v-5e60b21d><span class="user-name" data-v-5e60b21d>User</span></div><div class="user-avatar" data-v-5e60b21d><span class="avatar-placeholder" data-v-5e60b21d>U</span></div></div></div>', 1))
          ])) : ee.value && !P(T) ? (y(), H("div", Go, [
            e[16] || (e[16] = Ve('<div class="header-left" data-v-5e60b21d><div class="logo-section" data-v-5e60b21d><a href="/" class="logo" data-v-5e60b21d><div class="text-logo" data-v-5e60b21d><span class="logo-text" data-v-5e60b21d>AI Workspace</span></div></a></div></div>', 1)),
            i("div", Fo, [
              i("span", Bo, [
                g(r, null, {
                  default: d(() => [
                    g(P(ds))
                  ]),
                  _: 1
                }),
                e[14] || (e[14] = J(" Session expired - Please log in again ", -1))
              ])
            ]),
            i("div", jo, [
              g(l, {
                type: "primary",
                onClick: e[0] || (e[0] = (I) => V.value = !0)
              }, {
                default: d(() => [
                  g(r, null, {
                    default: d(() => [
                      g(P(Fe))
                    ]),
                    _: 1
                  }),
                  e[15] || (e[15] = J(" Log In ", -1))
                ]),
                _: 1
              })
            ])
          ])) : ee.value && P(T) ? (y(), H("div", zo, [
            i("div", Ko, [
              i("div", qo, [
                i("a", Jo, [
                  s.customLogo ? (y(), H("img", {
                    key: 0,
                    src: s.customLogo,
                    alt: "AIWorkspace",
                    class: "logo-image"
                  }, null, 8, Yo)) : (y(), H("div", Xo, [...e[17] || (e[17] = [
                    i("span", { class: "logo-text" }, "AI Workspace", -1)
                  ])]))
                ])
              ])
            ]),
            s.showSecondaryNavigation ? (y(), H("div", Qo, [
              i("nav", Zo, [
                s.showWorkspaceSelector ? (y(), oe(le, {
                  key: 0,
                  onCommand: ks,
                  trigger: "hover"
                }, {
                  dropdown: d(() => [
                    g(ce, { class: "workspace-tree-dropdown" }, {
                      default: d(() => [
                        g(Q, {
                          command: "all-workspace",
                          class: He({ active: F.value })
                        }, {
                          default: d(() => [
                            i("a", st, [
                              i("div", ot, [
                                e[19] || (e[19] = i("span", { class: "workspace-icon" }, "🌐", -1)),
                                e[20] || (e[20] = i("span", null, "All workspace", -1)),
                                F.value ? (y(), oe(U, {
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
                        E.value.length > 0 ? (y(), oe(Q, {
                          key: 0,
                          divided: "",
                          disabled: ""
                        })) : Y("", !0),
                        (y(!0), H(Le, null, Te(E.value, (I) => (y(), oe(Q, {
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
                                  style: Os({ paddingLeft: (I.level || 0) * 16 + "px" })
                                }, [
                                  i("span", at, K(I.children && I.children.length ? "📁" : "📄"), 1),
                                  i("span", null, K(I.title), 1),
                                  I.id === ((we = se.value) == null ? void 0 : we.id) ? (y(), oe(U, {
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
                              ], 8, tt)
                            ];
                          }),
                          _: 2
                        }, 1032, ["command"]))), 128)),
                        E.value.length === 0 ? (y(), oe(Q, {
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
                      i("span", et, [
                        J(K(F.value ? "All workspace" : ((I = se.value) == null ? void 0 : I.title) || "Select Workspace") + " ", 1),
                        g(r, { class: "nav-arrow" }, {
                          default: d(() => [
                            g(P(ls))
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }),
                  _: 1
                })) : Y("", !0),
                s.showWorkspaceSelector ? (y(), H("span", rt, "/")) : Y("", !0),
                s.showSecondaryNavigation ? (y(), oe(le, {
                  key: 2,
                  trigger: "hover"
                }, {
                  dropdown: d(() => [
                    g(ce, null, {
                      default: d(() => [
                        (y(!0), H(Le, null, Te(Ke.value, (I) => (y(), oe(Q, {
                          key: I.label,
                          class: He({ active: I.active })
                        }, {
                          default: d(() => [
                            i("a", {
                              href: ys(I),
                              class: "nav-link",
                              onClick: ge((we) => _s(I), ["prevent"])
                            }, K(I.label), 9, it)
                          ]),
                          _: 2
                        }, 1032, ["class"]))), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  default: d(() => [
                    i("span", nt, [
                      J(K(ws.value) + " ", 1),
                      g(r, { class: "nav-arrow" }, {
                        default: d(() => [
                          g(P(ls))
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })) : Y("", !0)
              ])
            ])) : Y("", !0),
            i("div", lt, [
              g(le, {
                onCommand: Ie,
                trigger: "click",
                placement: "bottom-end"
              }, {
                dropdown: d(() => [
                  g(ce, null, {
                    default: d(() => [
                      g(Q, null, {
                        default: d(() => [
                          i("a", {
                            href: "/profile",
                            class: "nav-link",
                            onClick: e[1] || (e[1] = ge((I) => Ie("profile"), ["prevent"]))
                          }, "Profile Settings")
                        ]),
                        _: 1
                      }),
                      s.showWorkspaceSelector ? (y(), oe(Q, { key: 0 }, {
                        default: d(() => [
                          i("a", {
                            href: "#switch-workspace",
                            class: "nav-link",
                            onClick: e[2] || (e[2] = ge((I) => Ie("workspaces"), ["prevent"]))
                          }, "Switch Workspace")
                        ]),
                        _: 1
                      })) : Y("", !0),
                      g(Q, {
                        onClick: Rs,
                        class: "version-item"
                      }, {
                        default: d(() => [
                          i("div", ht, [
                            e[23] || (e[23] = i("span", { class: "version-label" }, "Version:", -1)),
                            i("span", vt, K(B.value), 1),
                            g(l, {
                              size: "small",
                              type: "text",
                              onClick: ge(Xe, ["stop"]),
                              class: "refresh-button",
                              loading: D.value
                            }, {
                              default: d(() => [
                                g(r, null, {
                                  default: d(() => [
                                    g(P(Ge))
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
                      g(Q, { divided: "" }, {
                        default: d(() => [
                          i("a", {
                            href: "#signout",
                            class: "nav-link",
                            onClick: e[3] || (e[3] = ge((I) => Ie("logout"), ["prevent"]))
                          }, "Sign Out")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                default: d(() => [
                  i("div", ct, [
                    i("div", ut, [
                      i("span", dt, K(q.value.name), 1)
                    ]),
                    i("div", pt, [
                      q.value.avatar_url ? (y(), H("img", {
                        key: 0,
                        src: q.value.avatar_url,
                        alt: q.value.name
                      }, null, 8, ft)) : (y(), H("span", gt, K(q.value.initials), 1))
                    ])
                  ])
                ]),
                _: 1
              })
            ])
          ])) : (y(), H("div", wt, [
            i("div", mt, [
              i("div", kt, [
                i("a", _t, [
                  s.customLogo ? (y(), H("img", {
                    key: 0,
                    src: s.customLogo,
                    alt: "AIWorkspace",
                    class: "logo-image"
                  }, null, 8, yt)) : (y(), H("div", bt, [...e[24] || (e[24] = [
                    i("span", { class: "logo-text" }, "AI Workspace", -1)
                  ])]))
                ])
              ])
            ]),
            e[26] || (e[26] = i("div", { class: "header-center" }, [
              i("span", { class: "welcome-text" }, "Welcome to AI Workspace")
            ], -1)),
            de.value ? Y("", !0) : (y(), H("div", St, [
              g(l, {
                type: "primary",
                size: "large",
                class: "login-button",
                onClick: e[4] || (e[4] = (I) => V.value = !0)
              }, {
                default: d(() => [
                  g(r, null, {
                    default: d(() => [
                      g(P(Fe))
                    ]),
                    _: 1
                  }),
                  e[25] || (e[25] = J(" Login / Signup ", -1))
                ]),
                _: 1
              })
            ]))
          ])),
          ee.value && s.showWorkspaceSelector ? (y(), oe(Ae, {
            key: 5,
            modelValue: f.value,
            "onUpdate:modelValue": e[6] || (e[6] = (I) => f.value = I),
            title: "Switch Workspace",
            width: "500px",
            onClose: e[7] || (e[7] = (I) => f.value = !1)
          }, {
            footer: d(() => [
              g(l, {
                onClick: e[5] || (e[5] = (I) => f.value = !1)
              }, {
                default: d(() => [...e[27] || (e[27] = [
                  J("Cancel", -1)
                ])]),
                _: 1
              }),
              g(l, {
                type: "primary",
                onClick: bs
              }, {
                default: d(() => [...e[28] || (e[28] = [
                  J("Create New Workspace", -1)
                ])]),
                _: 1
              })
            ]),
            default: d(() => [
              i("div", Ct, [
                (y(!0), H(Le, null, Te(b.value, (I) => {
                  var we, ns;
                  return y(), H("div", {
                    key: I.id,
                    class: He(["workspace-item", { active: I.id === ((we = se.value) == null ? void 0 : we.id) }]),
                    onClick: (Nt) => Ye(I)
                  }, [
                    i("div", Et, K(I.children && I.children.length ? "📁" : "📄"), 1),
                    i("div", It, [
                      i("h3", null, K(I.title), 1),
                      i("p", null, K(I.description), 1),
                      i("span", Lt, K(I.hasAccess ? "Active" : "Inactive"), 1)
                    ]),
                    I.id === ((ns = se.value) == null ? void 0 : ns.id) ? (y(), H("div", Vt, [
                      g(r, null, {
                        default: d(() => [
                          g(P(Ys))
                        ]),
                        _: 1
                      })
                    ])) : Y("", !0)
                  ], 10, At);
                }), 128))
              ])
            ]),
            _: 1
          }, 8, ["modelValue"])) : Y("", !0),
          g(yo, {
            modelValue: V.value,
            "onUpdate:modelValue": e[8] || (e[8] = (I) => V.value = I),
            onLoginSuccess: Cs
          }, null, 8, ["modelValue"]),
          g(Ro, {
            modelValue: h.value,
            "onUpdate:modelValue": e[9] || (e[9] = (I) => h.value = I),
            "session-loss-event": P(N),
            "can-retry-session": P(m) || !1,
            onRetry: As,
            onLogin: Es,
            onRefresh: Is
          }, null, 8, ["modelValue", "session-loss-event", "can-retry-session"])
        ]),
        re.value ? (y(), oe(Ts, {
          key: 0,
          title: "New Version Available!",
          type: "warning",
          closable: !0,
          onClose: rs,
          "show-icon": "",
          class: "update-alert"
        }, {
          default: d(() => [
            i("div", xt, [
              e[31] || (e[31] = i("p", null, "A new version of the application is available. Please reload to get the latest updates and features.", -1)),
              i("div", Ut, [
                g(l, {
                  type: "primary",
                  size: "small",
                  onClick: Hs
                }, {
                  default: d(() => [...e[29] || (e[29] = [
                    J(" Reload Now ", -1)
                  ])]),
                  _: 1
                }),
                g(l, {
                  size: "small",
                  onClick: rs
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
      ], 64);
    };
  }
});
const la = /* @__PURE__ */ $e(Rt, [["__scopeId", "data-v-5e60b21d"]]), Wt = { class: "auth-callback" }, Ht = /* @__PURE__ */ ue({
  __name: "AuthCallback",
  setup(s) {
    Ce(async () => {
      console.log("[AuthCallback] Component mounted, starting callback processing..."), console.log("[AuthCallback] Current URL:", window.location.href), console.log("[AuthCallback] Current hash:", window.location.hash);
      try {
        await new Promise((v) => setTimeout(v, 500));
        const { data: t, error: n } = await Ue.auth.getSession();
        if (n) {
          console.error("Error processing callback:", n), o();
          return;
        }
        if (t != null && t.session) {
          const v = t.session.user;
          console.log("OAuth login successful:", v.email), t.session.access_token && be(_e, t.session.access_token), t.session.refresh_token && be(ye, t.session.refresh_token), Oe();
          const _ = zs();
          console.log("[callback] Post-login redirect URL:", _), console.log("[callback] Session storage redirect:", sessionStorage.getItem("post-login-redirect")), console.log("[callback] Local storage redirect:", localStorage.getItem("post-login-redirect"));
          const $ = _ || "/";
          if (console.log("[callback] Final redirect URL:", $), $.startsWith("/")) {
            const T = window.location.origin, N = `${T}${$}`;
            console.log("[callback] redirecting to:", N, { hostname: window.location.hostname, origin: T }), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
              window.location.href = N;
            }, 100);
          } else
            console.log("[callback] redirecting to absolute URL:", $), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
              window.location.href = $;
            }, 100);
        } else
          o();
      } catch (t) {
        console.error("Error processing callback:", t), o();
      }
    });
    const o = () => {
      const n = window.location.href.replace("/auth/callback", "");
      window.location.href = n;
    };
    return (t, n) => (y(), H("div", Wt, [...n[0] || (n[0] = [
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
const ca = /* @__PURE__ */ $e(Ht, [["__scopeId", "data-v-acdf6325"]]), he = class he {
  constructor() {
    me(this, "validationCache", /* @__PURE__ */ new Map());
    me(this, "CACHE_DURATION", gs().validationCacheDuration);
  }
  // Helper function to get cookie value
  getCookieValue(o) {
    var v;
    if (typeof document > "u")
      return null;
    const n = `; ${document.cookie}`.split(`; ${o}=`);
    return n.length === 2 && ((v = n.pop()) == null ? void 0 : v.split(";").shift()) || null;
  }
  static getInstance() {
    return he.instance || (he.instance = new he()), he.instance;
  }
  /**
   * Validate current session with caching and improved reliability
   */
  async validateSession(o = !1) {
    var n, v;
    const t = "session_validation";
    if (!o) {
      const _ = this.validationCache.get(t);
      if (_ && Date.now() - _.timestamp < this.CACHE_DURATION)
        return console.log("[SessionValidator] Using cached validation result"), _.result;
    }
    console.log("[SessionValidator] Validating session...");
    try {
      const _ = this.getCookieValue("sb-access-token"), $ = this.getCookieValue("sb-refresh-token");
      if (!_ || !$) {
        const k = {
          isValid: !1,
          needsLogin: !0,
          error: "No authentication tokens found",
          canRetry: !1
        };
        return this.cacheResult(t, k), k;
      }
      const T = await te();
      let N = null, w = null;
      for (let k = 1; k <= 2; k++)
        try {
          const u = await T.auth.getSession();
          N = u.data.session, w = u.error;
          break;
        } catch (u) {
          if (console.warn(`[SessionValidator] Network error on attempt ${k}:`, u), k === 2) {
            const L = {
              isValid: !1,
              needsLogin: !1,
              // Don't force login on network issues
              error: "Network error during validation",
              canRetry: !0
            };
            return this.cacheResult(t, L), L;
          }
          await new Promise((L) => setTimeout(L, 1e3));
        }
      if (w) {
        console.warn("[SessionValidator] Error getting session:", w);
        const u = {
          isValid: !1,
          needsLogin: ((n = w.message) == null ? void 0 : n.includes("Invalid JWT")) || ((v = w.message) == null ? void 0 : v.includes("JWT expired")),
          error: `Session error: ${w.message}`,
          canRetry: !0
        };
        return this.cacheResult(t, u), u;
      }
      if (!N || !N.user) {
        const k = {
          isValid: !1,
          needsLogin: !0,
          error: "No valid session found",
          canRetry: !0
        };
        return this.cacheResult(t, k), k;
      }
      const m = /* @__PURE__ */ new Date(), p = new Date(N.expires_at * 1e3), c = 5 * 60 * 1e3;
      if (m >= new Date(p.getTime() - c)) {
        const k = {
          isValid: !1,
          needsLogin: !0,
          error: "Session is close to expiry or expired",
          canRetry: !0
        };
        return this.cacheResult(t, k), k;
      }
      const R = {
        isValid: !0,
        needsLogin: !1,
        canRetry: !1
      };
      return this.cacheResult(t, R), R;
    } catch (_) {
      console.error("[SessionValidator] Error validating session:", _);
      const $ = {
        isValid: !1,
        needsLogin: !1,
        // Don't force login on unexpected errors
        error: `Validation error: ${_}`,
        canRetry: !0
      };
      return this.cacheResult(t, $), $;
    }
  }
  /**
   * Attempt to restore session from tokens
   */
  async restoreSession() {
    console.log("[SessionValidator] Attempting to restore session...");
    try {
      const o = this.getCookieValue("sb-access-token"), t = this.getCookieValue("sb-refresh-token");
      if (!o || !t)
        return {
          isValid: !1,
          needsLogin: !0,
          error: "No tokens available for restoration",
          canRetry: !1
        };
      const n = await te(), { data: v, error: _ } = await n.auth.setSession({
        access_token: o,
        refresh_token: t
      });
      return _ ? (console.warn("[SessionValidator] Error restoring session:", _), {
        isValid: !1,
        needsLogin: !0,
        error: `Restoration error: ${_.message}`,
        canRetry: !0
      }) : v.session && v.session.user ? (console.log("[SessionValidator] Session restored successfully"), this.clearCache(), {
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
  cacheResult(o, t) {
    this.validationCache.set(o, {
      result: t,
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
me(he, "instance");
let Be = he;
const ze = Be.getInstance(), Tt = (s = !1) => ze.validateSession(s), Pt = () => ze.restoreSession(), Dt = () => ze.clearCache();
async function ua() {
  console.log("[SessionValidator] Initializing session validation...");
  let s = await Tt();
  return !s.isValid && s.canRetry && (console.log("[SessionValidator] Attempting session restoration..."), s = await Pt()), s;
}
function da() {
  if (typeof window > "u")
    return () => {
    };
  const s = () => {
    console.log("[SessionValidator] Network restored, clearing cache for revalidation"), Dt();
  }, o = () => {
    console.log("[SessionValidator] Network lost, session validation may fail");
  };
  return window.addEventListener("online", s), window.addEventListener("offline", o), () => {
    window.removeEventListener("online", s), window.removeEventListener("offline", o);
  };
}
export {
  _e as ACCESS_COOKIE,
  la as AIWorkspaceHeader,
  ca as AuthCallback,
  _a as LS_ACCESS_KEY,
  ya as LS_REFRESH_KEY,
  yo as LoginModal,
  Me as PackageError,
  ye as REFRESH_COOKIE,
  Ro as SessionLossModal,
  Be as SessionValidator,
  ba as buildOAuthRedirectUrl,
  fo as clearGitHubTokenCache,
  Ne as clearLocalStorageTokens,
  Dt as clearSessionCache,
  ke as clearSessionCookie,
  ra as configureGitHub,
  ga as configureSupabase,
  io as conservativeConfig,
  sa as createSessionConfig,
  la as default,
  ve as defaultSessionConfig,
  aa as detectionScenarios,
  ps as developmentConfig,
  Sa as ensureCrossSubdomainCookies,
  no as fastDetectionConfig,
  oa as getConfigByPreset,
  Ca as getCookie,
  je as getGitHubToken,
  zs as getPostLoginBase,
  gs as getSessionConfig,
  te as getSupabase,
  to as handleBundlingError,
  ha as handleDomainChangeAuth,
  js as initializeCrossSubdomainAuth,
  ua as initializeSessionValidation,
  na as isGitHubConfigured,
  fs as productionConfig,
  ia as refreshGitHubToken,
  va as restoreCrossSubdomainSession,
  Pt as restoreSession,
  De as restoreSessionWithRetry,
  Kt as safeExecute,
  qt as safeExecuteAsync,
  Yt as safeGetCookie,
  Qt as safeGetLocalStorage,
  Jt as safeImport,
  Xt as safeSetCookie,
  Zt as safeSetLocalStorage,
  ea as safeWindowOperation,
  lo as sessionConfigPresets,
  ze as sessionValidator,
  be as setSessionCookie,
  wa as setupAuthStateListener,
  ao as setupGlobalErrorHandler,
  ma as setupImmediateCrossSubdomainAuth,
  da as setupNetworkAwareValidation,
  Ea as setupUniversalCallback,
  Ue as supabase,
  Oe as syncCookiesToLocalStorage,
  ta as timingInfo,
  go as useAuth,
  ro as useEnhancedAuth,
  co as useSessionMonitor,
  uo as useWorkspaceStore,
  Tt as validateSession
};
