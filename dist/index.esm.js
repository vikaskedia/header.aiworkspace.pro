var ls = Object.defineProperty;
var cs = (a, o, s) => o in a ? ls(a, o, { enumerable: !0, configurable: !0, writable: !0, value: s }) : a[o] = s;
var ve = (a, o, s) => (cs(a, typeof o != "symbol" ? o + "" : o, s), s);
import { defineComponent as re, openBlock as _, createElementBlock as U, createElementVNode as r, ref as I, computed as K, onMounted as ye, onUnmounted as us, watch as ie, reactive as ds, resolveComponent as te, createBlock as Q, withCtx as h, toDisplayString as G, createVNode as w, unref as D, withModifiers as de, createCommentVNode as j, createTextVNode as J, createStaticVNode as Ae, normalizeClass as $e, Fragment as Ve, renderList as Ue, normalizeStyle as ps } from "vue";
import { ElForm as fs, ElMessage as Y, ElDialog as gs, ElIcon as Ee, ElButton as Pe, ElProgress as hs, ElMessageBox as Be } from "element-plus";
import { i as vs, g as ee, r as xe, s as Ie } from "./supabase-c9edd337.mjs";
import { a as La, b as Ma } from "./supabase-c9edd337.mjs";
import { clearSessionCookie as we, ACCESS_COOKIE as me, REFRESH_COOKIE as ke, clearLocalStorageTokens as De, setSessionCookie as _e, syncCookiesToLocalStorage as Ne, getPostLoginBase as ws } from "./utils/authRedirect.js";
import { LS_ACCESS_KEY as Ra, LS_REFRESH_KEY as $a, buildOAuthRedirectUrl as Va, ensureCrossSubdomainCookies as Ua, getCookie as Pa } from "./utils/authRedirect.js";
import { defineStore as ms } from "pinia";
import { setupUniversalCallback as Da } from "./utils/universalCallback.js";
/*! Element Plus Icons Vue v2.3.2 */
var ks = /* @__PURE__ */ re({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(a) {
    return (o, s) => (_(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      r("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"
      })
    ]));
  }
}), Ge = ks, _s = /* @__PURE__ */ re({
  name: "Check",
  __name: "check",
  setup(a) {
    return (o, s) => (_(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      r("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      })
    ]));
  }
}), ys = _s, Ss = /* @__PURE__ */ re({
  name: "Lock",
  __name: "lock",
  setup(a) {
    return (o, s) => (_(), U("svg", {
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
}), Ye = Ss, bs = /* @__PURE__ */ re({
  name: "Message",
  __name: "message",
  setup(a) {
    return (o, s) => (_(), U("svg", {
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
}), Cs = bs, As = /* @__PURE__ */ re({
  name: "Refresh",
  __name: "refresh",
  setup(a) {
    return (o, s) => (_(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      r("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), qe = As, Es = /* @__PURE__ */ re({
  name: "User",
  __name: "user",
  setup(a) {
    return (o, s) => (_(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      r("path", {
        fill: "currentColor",
        d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"
      })
    ]));
  }
}), Te = Es, Is = /* @__PURE__ */ re({
  name: "Warning",
  __name: "warning",
  setup(a) {
    return (o, s) => (_(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      r("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"
      })
    ]));
  }
}), Je = Is;
class Le extends Error {
  constructor(s, t = {}, d) {
    super(s);
    ve(this, "context");
    ve(this, "originalError");
    this.name = "PackageError", this.context = t, this.originalError = d;
  }
}
function ua(a, o = {}, s) {
  try {
    const t = a();
    return t instanceof Promise ? t.catch((d) => {
      if (console.warn("[ErrorHandler] Async operation failed:", {
        context: o,
        error: d.message,
        stack: d.stack
      }), s !== void 0)
        return s;
      throw new Le(
        `Async operation failed: ${d.message}`,
        o,
        d
      );
    }) : t;
  } catch (t) {
    if (console.warn("[ErrorHandler] Operation failed:", {
      context: o,
      error: t instanceof Error ? t.message : String(t),
      stack: t instanceof Error ? t.stack : void 0
    }), s !== void 0)
      return s;
    throw new Le(
      `Operation failed: ${t instanceof Error ? t.message : String(t)}`,
      o,
      t instanceof Error ? t : void 0
    );
  }
}
async function da(a, o = {}, s) {
  try {
    return await a();
  } catch (t) {
    if (console.warn("[ErrorHandler] Async operation failed:", {
      context: o,
      error: t instanceof Error ? t.message : String(t),
      stack: t instanceof Error ? t.stack : void 0
    }), s !== void 0)
      return s;
    throw new Le(
      `Async operation failed: ${t instanceof Error ? t.message : String(t)}`,
      o,
      t instanceof Error ? t : void 0
    );
  }
}
function Ls(a, o = {}) {
  const s = a.message.toLowerCase();
  if (s.includes("is not a function") || s.includes("cannot read property") || s.includes("undefined is not a function")) {
    console.warn("[ErrorHandler] Bundling error detected:", {
      context: o,
      error: a.message,
      suggestion: "This may be due to minification or import issues. The package will continue with fallback behavior."
    });
    return;
  }
  throw new Le(
    `Unexpected error: ${a.message}`,
    o,
    a
  );
}
async function pa(a, o = {}, s) {
  try {
    return await a();
  } catch (t) {
    return console.warn("[ErrorHandler] Import failed:", {
      context: o,
      error: t instanceof Error ? t.message : String(t)
    }), s !== void 0 ? s : void 0;
  }
}
function fa(a) {
  var o;
  try {
    if (typeof document > "u")
      return null;
    const t = `; ${document.cookie}`.split(`; ${a}=`);
    return t.length === 2 && ((o = t.pop()) == null ? void 0 : o.split(";").shift()) || null;
  } catch (s) {
    return console.warn("[ErrorHandler] Cookie access failed:", {
      cookieName: a,
      error: s instanceof Error ? s.message : String(s)
    }), null;
  }
}
function ga(a, o, s = {}) {
  try {
    if (typeof document > "u")
      return !1;
    let t = `${a}=${o}`;
    return s.domain && (t += `; domain=${s.domain}`), s.path && (t += `; path=${s.path}`), s.secure && (t += "; secure"), s.sameSite && (t += `; samesite=${s.sameSite}`), s.maxAge && (t += `; max-age=${s.maxAge}`), document.cookie = t, !0;
  } catch (t) {
    return console.warn("[ErrorHandler] Cookie setting failed:", {
      cookieName: a,
      error: t instanceof Error ? t.message : String(t)
    }), !1;
  }
}
function ha(a) {
  try {
    return typeof localStorage > "u" ? null : localStorage.getItem(a);
  } catch (o) {
    return console.warn("[ErrorHandler] localStorage get failed:", {
      key: a,
      error: o instanceof Error ? o.message : String(o)
    }), null;
  }
}
function va(a, o) {
  try {
    return typeof localStorage > "u" ? !1 : (localStorage.setItem(a, o), !0);
  } catch (s) {
    return console.warn("[ErrorHandler] localStorage set failed:", {
      key: a,
      error: s instanceof Error ? s.message : String(s)
    }), !1;
  }
}
function wa(a, o) {
  try {
    return typeof window > "u" ? o : a(window);
  } catch (s) {
    return console.warn("[ErrorHandler] Window operation failed:", {
      error: s instanceof Error ? s.message : String(s)
    }), o;
  }
}
function Ms() {
  typeof window > "u" || (window.addEventListener("unhandledrejection", (a) => {
    const o = a.reason;
    if (o instanceof Error) {
      const s = o.message.toLowerCase();
      if (s.includes("is not a function") || s.includes("cannot read property") || s.includes("undefined is not a function")) {
        console.warn("[ErrorHandler] Unhandled promise rejection (bundling error):", {
          error: o.message,
          stack: o.stack
        }), a.preventDefault();
        return;
      }
    }
    console.error("[ErrorHandler] Unhandled promise rejection:", a.reason);
  }), window.addEventListener("error", (a) => {
    const o = a.error;
    if (o instanceof Error) {
      const s = o.message.toLowerCase();
      if (s.includes("is not a function") || s.includes("cannot read property") || s.includes("undefined is not a function")) {
        console.warn("[ErrorHandler] Uncaught error (bundling error):", {
          error: o.message,
          stack: o.stack
        }), a.preventDefault();
        return;
      }
    }
    console.error("[ErrorHandler] Uncaught error:", a.error);
  }));
}
typeof window < "u" && Ms();
function Ws() {
  const a = I({
    user: null,
    isAuthenticated: !1,
    isLoading: !0,
    error: null
  }), o = I(null), s = K(() => a.value.isAuthenticated), t = K(() => a.value.user), d = K(() => a.value.isLoading), b = async () => {
    var v, i, c, P, S, p, M, W, y, u, E, f, k, se, B, oe, O, X, q, C, z;
    try {
      console.log("[auth][enhanced] Starting loadUserInfo..."), console.log("[auth][enhanced] Ensuring cross-subdomain cookie synchronization...");
      const F = "sb-access-token", R = "sb-refresh-token", N = (V) => {
        try {
          const x = location.hostname;
          if (x === "localhost" || /^\d+\.\d+\.\d+\.\d+$/.test(x)) {
            console.log("[auth][enhanced] Skipping cookie sync for localhost");
            return;
          }
          const le = "aiworkspace.pro";
          if (!x.endsWith(`.${le}`) && x !== le) {
            console.log("[auth][enhanced] Skipping cookie sync - not under apex domain");
            return;
          }
          console.log("[auth][enhanced] Performing cookie synchronization"), V.forEach((fe) => {
            const Se = document.cookie.split(";").find((ge) => ge.trim().startsWith(fe + "="));
            if (Se) {
              console.log(`[auth][enhanced] Found cookie: ${fe}`);
              const ge = Se.split("=")[1];
              ge && (document.cookie = `${fe}=${ge}; domain=.${le}; path=/; secure; samesite=lax`);
            }
          });
        } catch (x) {
          console.warn("[auth][enhanced] Error in cookie sync:", x);
        }
      };
      N([F, R]), await new Promise((V) => setTimeout(V, 100));
      let ae = null;
      try {
        const x = await (await ee()).auth.getSession();
        ae = (v = x == null ? void 0 : x.data) == null ? void 0 : v.session;
      } catch (V) {
        console.warn("[auth][enhanced] Error getting Supabase session:", V);
      }
      if (ae && ae.user) {
        console.log("[auth][enhanced] Active Supabase session found");
        const V = ae.user, x = {
          id: V.id,
          name: ((i = V.user_metadata) == null ? void 0 : i.name) || ((c = V.user_metadata) == null ? void 0 : c.user_name) || ((P = V.user_metadata) == null ? void 0 : P.full_name) || ((S = V.email) == null ? void 0 : S.split("@")[0]) || "User",
          email: V.email,
          avatar_url: ((p = V.user_metadata) == null ? void 0 : p.avatar_url) || null,
          user_metadata: V.user_metadata
        };
        return a.value = {
          user: x,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, o.value = {
          user: x,
          access_token: ae.access_token,
          refresh_token: ae.refresh_token
        }, { user: x, session: o.value, error: null };
      }
      console.log("[auth][enhanced] No active session, attempting to restore from cookies...");
      const ne = await xe();
      if (ne.success && ne.session) {
        console.log("[auth][enhanced] Session restored successfully from cookies");
        const V = ne.session.user, x = {
          id: V.id,
          name: ((M = V.user_metadata) == null ? void 0 : M.name) || ((W = V.user_metadata) == null ? void 0 : W.user_name) || ((y = V.user_metadata) == null ? void 0 : y.full_name) || ((u = V.email) == null ? void 0 : u.split("@")[0]) || "User",
          email: V.email,
          avatar_url: ((E = V.user_metadata) == null ? void 0 : E.avatar_url) || null,
          user_metadata: V.user_metadata
        };
        return a.value = {
          user: x,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, o.value = ne.session, { user: x, session: o.value, error: null };
      } else {
        console.log("[auth][enhanced] Failed to restore session:", ne.error), console.log("[auth][enhanced] Retrying session restoration with extended delay..."), await new Promise((x) => setTimeout(x, 500)), N([F, R]);
        const V = await xe();
        if (V.success && V.session) {
          console.log("[auth][enhanced] Session restored on retry");
          const x = V.session.user, le = {
            id: x.id,
            name: ((f = x.user_metadata) == null ? void 0 : f.name) || ((k = x.user_metadata) == null ? void 0 : k.user_name) || ((se = x.user_metadata) == null ? void 0 : se.full_name) || ((B = x.email) == null ? void 0 : B.split("@")[0]) || "User",
            email: x.email,
            avatar_url: ((oe = x.user_metadata) == null ? void 0 : oe.avatar_url) || null,
            user_metadata: x.user_metadata
          };
          return a.value = {
            user: le,
            isAuthenticated: !0,
            isLoading: !1,
            error: null
          }, o.value = V.session, { user: le, session: o.value, error: null };
        }
      }
    } catch (F) {
      console.error("Error getting Supabase session:", F), F instanceof Error && Ls(F, {
        component: "useEnhancedAuth",
        function: "loadUserInfo",
        operation: "session_validation"
      });
      try {
        const R = await xe();
        if (R.success && R.session) {
          console.log("[auth][enhanced] Session restored after error");
          const N = R.session.user, ae = {
            id: N.id,
            name: ((O = N.user_metadata) == null ? void 0 : O.name) || ((X = N.user_metadata) == null ? void 0 : X.user_name) || ((q = N.user_metadata) == null ? void 0 : q.full_name) || ((C = N.email) == null ? void 0 : C.split("@")[0]) || "User",
            email: N.email,
            avatar_url: ((z = N.user_metadata) == null ? void 0 : z.avatar_url) || null,
            user_metadata: N.user_metadata
          };
          return a.value = {
            user: ae,
            isAuthenticated: !0,
            isLoading: !1,
            error: null
          }, o.value = R.session, { user: ae, session: o.value, error: null };
        }
      } catch (R) {
        console.error("Error restoring session:", R);
      }
    }
    return console.log("[auth][enhanced] No valid authentication found"), a.value = {
      user: null,
      isAuthenticated: !1,
      isLoading: !1,
      error: "No valid session found"
    }, o.value = null, { user: null, session: null, error: "No valid session found" };
  }, $ = async () => {
    try {
      await (await ee()).auth.signOut(), we(me), we(ke), De(), a.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      }, o.value = null, console.log("[auth][enhanced] User logged out successfully");
    } catch (v) {
      console.error("Error during logout:", v), a.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      }, o.value = null;
    }
  }, L = async (v, i) => {
    var c, P, S, p, M;
    try {
      a.value.isLoading = !0;
      const W = await ee(), { data: y, error: u } = await W.auth.signInWithPassword({
        email: v,
        password: i
      });
      if (u)
        throw u;
      if (y.session) {
        const E = y.session.user, f = {
          id: E.id,
          name: ((c = E.user_metadata) == null ? void 0 : c.name) || ((P = E.user_metadata) == null ? void 0 : P.user_name) || ((S = E.user_metadata) == null ? void 0 : S.full_name) || ((p = E.email) == null ? void 0 : p.split("@")[0]) || "User",
          email: E.email,
          avatar_url: ((M = E.user_metadata) == null ? void 0 : M.avatar_url) || null,
          user_metadata: E.user_metadata
        };
        return a.value = {
          user: f,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, o.value = {
          user: f,
          access_token: y.session.access_token,
          refresh_token: y.session.refresh_token
        }, { user: f, session: o.value, error: null };
      }
      return { user: null, session: null, error: "No session returned" };
    } catch (W) {
      return console.error("Sign in error:", W), a.value.isLoading = !1, { user: null, session: null, error: String(W) };
    }
  }, T = async (v, i, c) => {
    var P, S, p, M, W;
    try {
      a.value.isLoading = !0;
      const y = await ee(), { data: u, error: E } = await y.auth.signUp({
        email: v,
        password: i,
        options: {
          data: c
        }
      });
      if (E)
        throw E;
      if (u.session) {
        const f = u.session.user, k = {
          id: f.id,
          name: ((P = f.user_metadata) == null ? void 0 : P.name) || ((S = f.user_metadata) == null ? void 0 : S.user_name) || ((p = f.user_metadata) == null ? void 0 : p.full_name) || ((M = f.email) == null ? void 0 : M.split("@")[0]) || "User",
          email: f.email,
          avatar_url: ((W = f.user_metadata) == null ? void 0 : W.avatar_url) || null,
          user_metadata: f.user_metadata
        };
        return a.value = {
          user: k,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, o.value = {
          user: k,
          access_token: u.session.access_token,
          refresh_token: u.session.refresh_token
        }, { user: k, session: o.value, error: null };
      }
      return { user: null, session: null, error: "No session returned" };
    } catch (y) {
      return console.error("Sign up error:", y), a.value.isLoading = !1, { user: null, session: null, error: String(y) };
    }
  }, m = async () => {
    await b();
  };
  return ye(async () => {
    await vs(), await m();
  }), {
    // State
    authState: a,
    currentSession: o,
    // Computed
    isAuthenticated: s,
    currentUser: t,
    isLoading: d,
    // Methods
    loadUserInfo: b,
    logout: $,
    signIn: L,
    signUp: T,
    checkAuth: m
  };
}
const pe = {
  // Monitoring intervals
  normalCheckInterval: 3e4,
  // 30 seconds - normal monitoring
  fastCheckInterval: 5e3,
  // 5 seconds - fast monitoring for immediate detection
  fastMonitoringDuration: 12e4,
  // 2 minutes - how long to run fast monitoring
  // Retry configuration
  maxRetryAttempts: 3,
  // 3 retry attempts
  retryDelay: 2e3,
  // 2 seconds between retries
  // Cache configuration
  validationCacheDuration: 5e3,
  // 5 seconds cache duration
  // Detection modes
  enableImmediateDetection: !0,
  // Enable immediate detection on logout
  enableFastMonitoring: !0,
  // Enable fast monitoring mode
  enableNetworkAwareness: !0
  // Enable network-aware monitoring
}, Rs = {
  ...pe,
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
}, $s = {
  ...pe,
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
}, Ke = {
  ...pe,
  normalCheckInterval: 1e4,
  // 10 seconds - faster for testing
  fastCheckInterval: 2e3,
  // 2 seconds - very fast for testing
  fastMonitoringDuration: 3e4,
  // 30 seconds - shorter for testing
  validationCacheDuration: 1e3
  // 1 second cache for testing
}, je = {
  ...pe,
  normalCheckInterval: 45e3,
  // 45 seconds - balanced monitoring
  fastCheckInterval: 3e3,
  // 3 seconds - quick detection
  fastMonitoringDuration: 9e4,
  // 1.5 minutes - reasonable fast monitoring
  validationCacheDuration: 1e4
  // 10 seconds cache for better performance
};
function Xe() {
  switch ("production") {
    case "production":
      return je;
    case "development":
      return Ke;
    default:
      return pe;
  }
}
function ma(a) {
  return {
    ...pe,
    ...a
  };
}
const Vs = {
  default: pe,
  fast: Rs,
  conservative: $s,
  development: Ke,
  production: je
};
function ka(a) {
  return Vs[a];
}
const _a = {
  immediate: "Immediate (0-2 seconds) - When logout is detected via auth events",
  fast: "Fast (2-5 seconds) - When fast monitoring is active",
  normal: "Normal (up to 30 seconds) - Regular monitoring interval",
  conservative: "Conservative (up to 60 seconds) - Less frequent monitoring"
}, ya = {
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
function Us(a) {
  const o = I(!0), s = I(null), t = I(!1), d = I(!1), b = I(null), $ = I(null), L = I(null), T = { ...Xe(), ...a }, m = T.normalCheckInterval, v = T.fastCheckInterval, i = T.fastMonitoringDuration, c = T.maxRetryAttempts, P = T.retryDelay, S = K(() => !o.value && s.value !== null), p = K(
    () => {
      var C, z;
      return ((C = s.value) == null ? void 0 : C.canRetry) && ((z = s.value) == null ? void 0 : z.type) !== "manual_check_failed";
    }
  ), M = (C) => {
    var R;
    if (typeof document > "u")
      return null;
    const F = `; ${document.cookie}`.split(`; ${C}=`);
    return F.length === 2 && ((R = F.pop()) == null ? void 0 : R.split(";").shift()) || null;
  }, W = async () => {
    try {
      console.log("[SessionMonitor] Validating session...");
      const C = M("sb-access-token"), z = M("sb-refresh-token");
      if (!C || !z)
        return console.log("[SessionMonitor] No tokens found in cookies"), !1;
      const F = await ee(), { data: { session: R }, error: N } = await F.auth.getSession();
      if (N)
        return console.warn("[SessionMonitor] Error getting session:", N), !1;
      if (!R || !R.user)
        return console.log("[SessionMonitor] No valid session found"), !1;
      const ae = /* @__PURE__ */ new Date(), ne = new Date(R.expires_at * 1e3);
      return ae >= ne ? (console.log("[SessionMonitor] Session has expired"), !1) : (console.log("[SessionMonitor] Session is valid"), b.value = /* @__PURE__ */ new Date(), !0);
    } catch (C) {
      return console.error("[SessionMonitor] Error validating session:", C), !1;
    }
  }, y = async () => {
    try {
      console.log("[SessionMonitor] Attempting to restore session...");
      const C = M("sb-access-token"), z = M("sb-refresh-token");
      if (!C || !z)
        return console.log("[SessionMonitor] No tokens available for restoration"), !1;
      const F = await ee(), { data: R, error: N } = await F.auth.setSession({
        access_token: C,
        refresh_token: z
      });
      return N ? (console.warn("[SessionMonitor] Error restoring session:", N), !1) : R.session && R.session.user ? (console.log("[SessionMonitor] Session restored successfully"), b.value = /* @__PURE__ */ new Date(), !0) : !1;
    } catch (C) {
      return console.error("[SessionMonitor] Error restoring session:", C), !1;
    }
  }, u = (C, z, F = !0) => {
    console.warn("[SessionMonitor] Session loss detected:", { type: C, message: z }), o.value = !1, s.value = {
      type: C,
      message: z,
      timestamp: /* @__PURE__ */ new Date(),
      canRetry: F
    };
  }, E = async () => {
    console.log("[SessionMonitor] Retrying session validation...");
    for (let C = 1; C <= c; C++) {
      if (console.log(`[SessionMonitor] Retry attempt ${C}/${c}`), C > 1 && await new Promise((R) => setTimeout(R, P)), await y() && await W())
        return console.log("[SessionMonitor] Session restored and validated successfully"), o.value = !0, s.value = null, !0;
      if (await W())
        return console.log("[SessionMonitor] Session validated successfully on retry"), o.value = !0, s.value = null, !0;
    }
    return console.log("[SessionMonitor] All retry attempts failed"), !1;
  }, f = () => {
    console.log("[SessionMonitor] Clearing session loss state"), o.value = !0, s.value = null;
  }, k = () => {
    if (t.value) {
      console.log("[SessionMonitor] Already monitoring, skipping start");
      return;
    }
    console.log("[SessionMonitor] Starting session monitoring..."), t.value = !0, W().then((C) => {
      C || u("session_expired", "Your session has expired. Please log in again.", !0);
    }), $.value = setInterval(async () => {
      console.log("[SessionMonitor] Periodic session check...");
      const C = await W();
      !C && o.value ? u("session_expired", "Your session has expired. Please log in again.", !0) : C && !o.value && (console.log("[SessionMonitor] Session recovered"), f());
    }, m);
  }, se = () => {
    if (d.value) {
      console.log("[SessionMonitor] Fast monitoring already active");
      return;
    }
    console.log("[SessionMonitor] Starting fast monitoring (5s intervals)..."), d.value = !0, L.value && clearInterval(L.value), L.value = setInterval(async () => {
      console.log("[SessionMonitor] Fast session check...");
      const C = await W();
      !C && o.value ? (u("session_expired", "Your session has expired. Please log in again.", !0), B()) : C && !o.value && (console.log("[SessionMonitor] Session recovered"), f(), B());
    }, v), setTimeout(() => {
      d.value && (console.log(`[SessionMonitor] Auto-stopping fast monitoring after ${i / 1e3} seconds`), B());
    }, i);
  }, B = () => {
    d.value && (console.log("[SessionMonitor] Stopping fast monitoring..."), d.value = !1, L.value && (clearInterval(L.value), L.value = null));
  }, oe = () => {
    t.value && (console.log("[SessionMonitor] Stopping session monitoring..."), t.value = !1, $.value && (clearInterval($.value), $.value = null), B());
  }, O = async () => {
    console.log("[SessionMonitor] Manual session check requested");
    const C = await W();
    return !C && !await y() ? (u("manual_check_failed", "Session validation failed. Please log in again.", !1), !1) : C;
  }, X = () => {
    u("network_error", "Network connection lost. Please check your internet connection and try again.", !0);
  }, q = () => {
    if (typeof window > "u")
      return;
    const C = () => {
      var R;
      console.log("[SessionMonitor] Network connection restored"), S.value && ((R = s.value) == null ? void 0 : R.type) === "network_error" && setTimeout(() => E(), 1e3);
    }, z = () => {
      console.log("[SessionMonitor] Network connection lost"), X();
    }, F = (R) => {
      console.log("[SessionMonitor] Logout detected, starting fast monitoring for immediate detection"), se();
    };
    return window.addEventListener("online", C), window.addEventListener("offline", z), window.addEventListener("session-logout-detected", F), () => {
      window.removeEventListener("online", C), window.removeEventListener("offline", z), window.removeEventListener("session-logout-detected", F);
    };
  };
  return ye(() => {
    console.log("[SessionMonitor] Mounted, setting up monitoring"), k(), q();
  }), us(() => {
    console.log("[SessionMonitor] Unmounted, cleaning up"), oe();
  }), {
    // State
    isSessionValid: o,
    sessionLossEvent: s,
    isMonitoring: t,
    isFastMonitoring: d,
    lastValidSession: b,
    // Computed
    hasSessionLoss: S,
    canRetrySession: p,
    // Methods
    validateSession: W,
    restoreSession: y,
    retrySession: E,
    clearSessionLoss: f,
    startMonitoring: k,
    stopMonitoring: oe,
    startFastMonitoring: se,
    stopFastMonitoring: B,
    checkSession: O,
    handleNetworkError: X
  };
}
const Ps = ms("workspace", () => {
  const a = I(null), o = I([]), s = I(null), t = (m) => {
    a.value = m, localStorage.setItem("current_workspace", JSON.stringify(m));
  }, d = (m) => {
    o.value = m, localStorage.setItem("available_workspaces", JSON.stringify(m));
  };
  return {
    currentWorkspace: a,
    workspaces: o,
    user: s,
    setCurrentWorkspace: t,
    setWorkspaces: d,
    setUser: (m) => {
      s.value = m, localStorage.setItem("user_info", JSON.stringify(m));
    },
    loadPersistedData: () => {
      const m = localStorage.getItem("current_workspace");
      if (m)
        try {
          a.value = JSON.parse(m);
        } catch (c) {
          console.error("Error loading persisted workspace:", c);
        }
      const v = localStorage.getItem("available_workspaces");
      if (v)
        try {
          o.value = JSON.parse(v);
        } catch (c) {
          console.error("Error loading persisted workspaces:", c);
        }
      const i = localStorage.getItem("user_info");
      if (i)
        try {
          s.value = JSON.parse(i);
        } catch (c) {
          console.error("Error loading persisted user:", c);
        }
    },
    clearData: () => {
      a.value = null, o.value = [], s.value = null, localStorage.removeItem("current_workspace"), localStorage.removeItem("available_workspaces"), localStorage.removeItem("user_info");
    },
    loadWorkspaces: async (m = !1) => {
      try {
        const { data: { user: v } } = await Ie.auth.getUser();
        if (!v)
          return [];
        let i = Ie.from("workspaces").select(`
          id, title, description, parent_workspace_id, created_by, archived, created_at, git_repo, 
          workspace_access!inner ( access_type, shared_with_user_id ),
          workspace_activities!left ( updated_at )
        `).eq("workspace_access.shared_with_user_id", v.id);
        m || (i = i.eq("archived", !1));
        const { data: c, error: P } = await i;
        if (P)
          throw P;
        const S = /* @__PURE__ */ new Map();
        (c || []).forEach((u) => {
          (u.workspace_access || []).forEach((E) => {
            E.shared_with_user_id === v.id && S.set(u.id, E);
          });
        });
        const p = [...new Set(
          (c || []).filter((u) => u.parent_workspace_id).map((u) => u.parent_workspace_id).filter((u) => !S.has(u))
        )];
        let M = [];
        if (p.length) {
          let u = Ie.from("workspaces").select("id, title, description, parent_workspace_id, created_by, archived, created_at").in("id", p);
          m || (u = u.eq("archived", !1));
          const { data: E, error: f } = await u;
          if (f)
            throw f;
          M = E || [];
        }
        const y = [...c || [], ...M].map((u) => {
          var E, f, k;
          return {
            id: u.id,
            title: u.title,
            description: u.description || "No description",
            parent_workspace_id: u.parent_workspace_id,
            created_by: u.created_by,
            archived: u.archived,
            created_at: u.created_at,
            latest_activity: ((f = (E = u.workspace_activities) == null ? void 0 : E[0]) == null ? void 0 : f.updated_at) || u.created_at,
            hasAccess: S.has(u.id),
            accessType: ((k = S.get(u.id)) == null ? void 0 : k.access_type) || null
          };
        });
        return y.sort((u, E) => new Date(E.latest_activity) - new Date(u.latest_activity)), d(y), y;
      } catch (v) {
        return console.error("loadWorkspaces error", v), [];
      }
    }
  };
});
function xs() {
  const a = I({
    user: null,
    isAuthenticated: !1,
    isLoading: !0,
    error: null
  }), o = I(window.location.href), s = async () => {
    var m, v, i, c, P, S, p, M;
    try {
      a.value.isLoading = !0;
      const W = await ee(), { data: { session: y }, error: u } = await W.auth.getSession();
      if (u) {
        console.error("Error checking auth status:", u), a.value = {
          user: null,
          isAuthenticated: !1,
          isLoading: !1,
          error: u.message
        };
        return;
      }
      y != null && y.user ? (a.value = {
        user: {
          id: y.user.id,
          email: y.user.email || "",
          name: ((m = y.user.user_metadata) == null ? void 0 : m.full_name) || ((v = y.user.user_metadata) == null ? void 0 : v.name) || ((i = y.user.email) == null ? void 0 : i.split("@")[0]) || "User",
          avatar_url: ((c = y.user.user_metadata) == null ? void 0 : c.avatar_url) || ((P = y.user.user_metadata) == null ? void 0 : P.picture) || null,
          initials: (((S = y.user.user_metadata) == null ? void 0 : S.full_name) || ((p = y.user.user_metadata) == null ? void 0 : p.name) || ((M = y.user.email) == null ? void 0 : M.split("@")[0]) || "U").split(" ").map((E) => E[0]).join("").toUpperCase().substring(0, 2)
        },
        isAuthenticated: !0,
        isLoading: !1,
        error: null
      }, y.access_token && _e(me, y.access_token), y.refresh_token && _e(ke, y.refresh_token), Ne()) : a.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      };
    } catch (W) {
      console.error("Auth check failed:", W), a.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: W.message || "Authentication check failed"
      };
    }
  }, t = async (m, v) => {
    try {
      const i = await ee(), { error: c } = await i.auth.signInWithPassword({
        email: m,
        password: v
      });
      return c ? { success: !1, error: c.message } : (await s(), sessionStorage.setItem("post-login-redirect", o.value), { success: !0 });
    } catch (i) {
      return console.error("Login error:", i), { success: !1, error: i.message || "Login failed" };
    }
  }, d = async (m, v) => {
    var i;
    try {
      const c = await ee(), { data: P, error: S } = await c.auth.signUp({
        email: m,
        password: v
      });
      return S ? { success: !1, error: S.message } : P.user && !P.user.email_confirmed_at ? { success: !0, needsConfirmation: !0 } : (i = P.session) != null && i.user ? (await s(), sessionStorage.setItem("post-login-redirect", o.value), { success: !0 }) : { success: !1, error: "No session created" };
    } catch (c) {
      return console.error("Signup error:", c), { success: !1, error: c.message || "Signup failed" };
    }
  }, b = async (m) => {
    try {
      const v = `${window.location.origin}/auth/callback`;
      console.log("[OAuth] Starting login with provider:", m), console.log("[OAuth] Redirect URL:", v), console.log("[OAuth] Current URL:", o.value), console.log("[OAuth] Current origin:", window.location.origin);
      const i = await ee(), { error: c } = await i.auth.signInWithOAuth({
        provider: m,
        options: {
          redirectTo: v,
          queryParams: {
            redirect_origin: o.value
          }
        }
      });
      if (c)
        return console.error("[OAuth] Error:", c), { success: !1, error: c.message };
      const P = o.value || window.location.href;
      return sessionStorage.setItem("post-login-redirect", P), localStorage.setItem("post-login-redirect", P), console.log("[OAuth] Stored redirect URL:", P), console.log("[OAuth] Current URL value:", o.value), console.log("[OAuth] Window location href:", window.location.href), { success: !0 };
    } catch (v) {
      return console.error("OAuth login error:", v), { success: !1, error: v.message || "OAuth login failed" };
    }
  }, $ = async () => {
    try {
      const m = await ee(), { error: v } = await m.auth.signOut();
      v && console.error("Logout error:", v), a.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      }, we(me), we(ke), De();
    } catch (m) {
      console.error("Logout error:", m);
    }
  }, L = async (m) => {
    try {
      const v = await ee(), { error: i } = await v.auth.resetPasswordForEmail(m, {
        redirectTo: `${window.location.origin}/auth/reset-password`
      });
      return i ? { success: !1, error: i.message } : { success: !0 };
    } catch (v) {
      return console.error("Password reset error:", v), { success: !1, error: v.message || "Password reset failed" };
    }
  }, T = async () => {
    try {
      (await ee()).auth.onAuthStateChange((v, i) => {
        var c;
        switch (console.log("Auth state changed:", v, (c = i == null ? void 0 : i.user) == null ? void 0 : c.email), v) {
          case "SIGNED_IN":
            i != null && i.user && s();
            break;
          case "SIGNED_OUT":
            a.value = {
              user: null,
              isAuthenticated: !1,
              isLoading: !1,
              error: null
            }, we(me), we(ke), De();
            break;
          case "TOKEN_REFRESHED":
            i != null && i.access_token && _e(me, i.access_token), i != null && i.refresh_token && _e(ke, i.refresh_token), Ne();
            break;
          case "USER_UPDATED":
            i != null && i.user && s();
            break;
        }
      });
    } catch (m) {
      console.warn("Failed to setup auth listener:", m);
    }
  };
  return ye(async () => {
    T(), await s();
  }), ie(() => window.location.href, (m) => {
    o.value = m;
  }), {
    authState: K(() => a.value),
    isAuthenticated: K(() => a.value.isAuthenticated),
    user: K(() => a.value.user),
    isLoading: K(() => a.value.isLoading),
    checkAuthStatus: s,
    loginWithEmail: t,
    signupWithEmail: d,
    loginWithProvider: b,
    logout: $,
    resetPassword: L,
    currentUrl: K(() => o.value)
  };
}
const Ds = { class: "login-container" }, Ns = { class: "logo-section" }, Ts = { class: "login-buttons" }, Os = {
  key: 0,
  class: "forgot-password"
}, Hs = { class: "signup-link" }, Fs = /* @__PURE__ */ re({
  __name: "LoginModal",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue", "login-success"],
  setup(a, { emit: o }) {
    const s = a, t = o, d = K({
      get: () => s.modelValue,
      set: (f) => t("update:modelValue", f)
    }), b = I(!1), $ = I(!1), L = I(), { loginWithEmail: T, signupWithEmail: m, loginWithProvider: v, resetPassword: i } = xs(), c = ds({
      email: "",
      password: "",
      confirmPassword: ""
    }), P = K(() => ({
      email: [
        { required: !0, message: "Please enter your email", trigger: "blur" },
        { type: "email", message: "Please enter a valid email", trigger: "blur" }
      ],
      password: [
        { required: !0, message: "Please enter your password", trigger: "blur" },
        { min: 6, message: "Password must be at least 6 characters", trigger: "blur" }
      ],
      ...b.value ? {
        confirmPassword: [
          { required: !0, message: "Please confirm your password", trigger: "blur" },
          {
            validator: (f, k, se) => {
              k !== c.password ? se(new Error("Passwords do not match")) : se();
            },
            trigger: "blur"
          }
        ]
      } : {}
    })), S = () => {
      var f;
      b.value = !b.value, c.email = "", c.password = "", c.confirmPassword = "", (f = L.value) == null || f.clearValidate();
    }, p = () => {
      var f;
      d.value = !1, c.email = "", c.password = "", c.confirmPassword = "", b.value = !1, (f = L.value) == null || f.clearValidate();
    }, M = async () => {
      if (L.value)
        try {
          await L.value.validate(), $.value = !0, b.value ? await y() : await W();
        } catch (f) {
          console.error("Form validation failed:", f);
        } finally {
          $.value = !1;
        }
    }, W = async () => {
      const f = await T(c.email, c.password);
      f.success ? (Y.success("Login successful"), t("login-success", { email: c.email }), p()) : Y.error("Login failed: " + f.error);
    }, y = async () => {
      const f = await m(c.email, c.password);
      f.success ? f.needsConfirmation ? Y.success("Please check your email to confirm your account") : (Y.success("Account created successfully"), t("login-success", { email: c.email }), p()) : Y.error("Signup failed: " + f.error);
    }, u = async (f) => {
      const k = await v(f);
      k.success ? Y.success("Redirecting to login provider...") : Y.error("Login failed: " + k.error);
    }, E = async () => {
      if (!c.email) {
        Y.warning("Please enter your email address first");
        return;
      }
      const f = await i(c.email);
      f.success ? Y.success("Password reset email sent! Please check your inbox.") : Y.error("Failed to send reset email: " + f.error);
    };
    return (f, k) => {
      const se = te("el-icon"), B = te("el-input"), oe = te("el-form-item"), O = te("el-button"), X = te("el-dialog");
      return _(), Q(X, {
        modelValue: d.value,
        "onUpdate:modelValue": k[6] || (k[6] = (q) => d.value = q),
        title: "",
        width: "500px",
        "close-on-click-modal": !1,
        "close-on-press-escape": !0,
        "show-close": !0,
        class: "login-modal",
        onClose: p
      }, {
        default: h(() => [
          r("div", Ds, [
            r("div", Ns, [
              r("h2", null, G(b.value ? "Create Account" : "Welcome Back"), 1),
              r("p", null, G(b.value ? "Sign up to get started with your account" : "Sign in to continue to your account"), 1)
            ]),
            w(D(fs), {
              model: c,
              rules: P.value,
              ref_key: "formRef",
              ref: L,
              class: "login-form",
              onSubmit: de(M, ["prevent"])
            }, {
              default: h(() => [
                w(oe, { prop: "email" }, {
                  default: h(() => [
                    w(B, {
                      modelValue: c.email,
                      "onUpdate:modelValue": k[0] || (k[0] = (q) => c.email = q),
                      placeholder: "Email",
                      type: "email",
                      size: "large",
                      class: "form-input"
                    }, {
                      prefix: h(() => [
                        w(se, null, {
                          default: h(() => [
                            w(D(Cs))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                w(oe, { prop: "password" }, {
                  default: h(() => [
                    w(B, {
                      modelValue: c.password,
                      "onUpdate:modelValue": k[1] || (k[1] = (q) => c.password = q),
                      placeholder: "Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: h(() => [
                        w(se, null, {
                          default: h(() => [
                            w(D(Ye))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                b.value ? (_(), Q(oe, {
                  key: 0,
                  prop: "confirmPassword"
                }, {
                  default: h(() => [
                    w(B, {
                      modelValue: c.confirmPassword,
                      "onUpdate:modelValue": k[2] || (k[2] = (q) => c.confirmPassword = q),
                      placeholder: "Confirm Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: h(() => [
                        w(se, null, {
                          default: h(() => [
                            w(D(Ye))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                })) : j("", !0),
                w(oe, null, {
                  default: h(() => [
                    w(O, {
                      type: "primary",
                      class: "submit-button",
                      loading: $.value,
                      onClick: M,
                      size: "large"
                    }, {
                      default: h(() => [
                        J(G(b.value ? "Sign Up" : "Sign In"), 1)
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model", "rules"]),
            k[10] || (k[10] = r("div", { class: "divider" }, [
              r("span", null, "Or continue with")
            ], -1)),
            r("div", Ts, [
              w(O, {
                class: "login-button google",
                onClick: k[3] || (k[3] = (q) => u("google")),
                size: "large"
              }, {
                default: h(() => [...k[7] || (k[7] = [
                  r("span", { class: "social-icon" }, "G", -1),
                  J(" Google ", -1)
                ])]),
                _: 1
              }),
              w(O, {
                class: "login-button github",
                onClick: k[4] || (k[4] = (q) => u("github")),
                size: "large"
              }, {
                default: h(() => [...k[8] || (k[8] = [
                  r("span", { class: "social-icon" }, "⚡", -1),
                  J(" GitHub ", -1)
                ])]),
                _: 1
              }),
              w(O, {
                class: "login-button twitter",
                onClick: k[5] || (k[5] = (q) => u("twitter")),
                size: "large"
              }, {
                default: h(() => [...k[9] || (k[9] = [
                  r("span", { class: "social-icon" }, "X", -1),
                  J(" X (Twitter) ", -1)
                ])]),
                _: 1
              })
            ]),
            k[11] || (k[11] = r("div", { class: "terms" }, " By continuing, you agree to AI Workspace's Terms of Service and Privacy Policy ", -1)),
            b.value ? j("", !0) : (_(), U("div", Os, [
              r("a", {
                href: "#",
                onClick: de(E, ["prevent"])
              }, "Forgot Password?")
            ])),
            r("div", Hs, [
              J(G(b.value ? "Already have an account?" : "Don't have an account?") + " ", 1),
              r("a", {
                href: "#",
                onClick: de(S, ["prevent"])
              }, G(b.value ? "Sign in" : "Sign up"), 1)
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
const Me = (a, o) => {
  const s = a.__vccOpts || a;
  for (const [t, d] of o)
    s[t] = d;
  return s;
}, zs = /* @__PURE__ */ Me(Fs, [["__scopeId", "data-v-684a3f28"]]), Bs = { class: "session-loss-content" }, Gs = { class: "session-loss-icon" }, Ys = { class: "session-loss-message" }, qs = {
  key: 0,
  class: "session-loss-details"
}, Js = { class: "detail-item" }, Ks = { class: "detail-value" }, js = { class: "detail-item" }, Xs = { class: "detail-value" }, Zs = { class: "session-loss-actions" }, Qs = {
  key: 0,
  class: "retry-status"
}, eo = { class: "retry-message" }, so = /* @__PURE__ */ re({
  __name: "SessionLossModal",
  props: {
    modelValue: { type: Boolean },
    sessionLossEvent: {},
    canRetrySession: { type: Boolean }
  },
  emits: ["update:modelValue", "retry", "login", "refresh"],
  setup(a, { emit: o }) {
    const s = a, t = o, d = I(!1), b = I(0), $ = I(void 0), L = I(""), T = K({
      get: () => s.modelValue,
      set: (S) => t("update:modelValue", S)
    }), m = (S) => {
      switch (S) {
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
    }, v = (S) => S.toLocaleString(), i = async () => {
      if (d.value)
        return;
      d.value = !0, b.value = 0, $.value = void 0, L.value = "Attempting to restore session...";
      const S = setInterval(() => {
        b.value < 90 && (b.value += Math.random() * 20);
      }, 200);
      try {
        t("retry"), await new Promise((p) => setTimeout(p, 2e3)), b.value = 100, $.value = "success", L.value = "Session restored successfully!", setTimeout(() => {
          T.value = !1;
        }, 1e3);
      } catch {
        b.value = 100, $.value = "exception", L.value = "Failed to restore session. Please log in again.", Y.error("Session restoration failed");
      } finally {
        clearInterval(S), setTimeout(() => {
          d.value = !1, b.value = 0, $.value = void 0, L.value = "";
        }, 3e3);
      }
    }, c = () => {
      t("login"), T.value = !1;
    }, P = () => {
      t("refresh"), window.location.reload();
    };
    return ie(() => s.sessionLossEvent, (S) => {
      S && (d.value = !1, b.value = 0, $.value = void 0, L.value = "");
    }), (S, p) => (_(), Q(D(gs), {
      modelValue: T.value,
      "onUpdate:modelValue": p[0] || (p[0] = (M) => T.value = M),
      title: "Session Expired",
      width: "500px",
      "close-on-click-modal": !1,
      "close-on-press-escape": !1,
      "show-close": !1,
      class: "session-loss-modal",
      center: ""
    }, {
      default: h(() => {
        var M;
        return [
          r("div", Bs, [
            r("div", Gs, [
              w(D(Ee), {
                size: "48",
                color: "#f56c6c"
              }, {
                default: h(() => [
                  w(D(Je))
                ]),
                _: 1
              })
            ]),
            r("div", Ys, [
              p[3] || (p[3] = r("h3", null, "Your session has expired", -1)),
              r("p", null, G(((M = S.sessionLossEvent) == null ? void 0 : M.message) || "Please log in again to continue using the application."), 1),
              S.sessionLossEvent ? (_(), U("div", qs, [
                r("div", Js, [
                  p[1] || (p[1] = r("span", { class: "detail-label" }, "Issue:", -1)),
                  r("span", Ks, G(m(S.sessionLossEvent.type)), 1)
                ]),
                r("div", js, [
                  p[2] || (p[2] = r("span", { class: "detail-label" }, "Time:", -1)),
                  r("span", Xs, G(v(S.sessionLossEvent.timestamp)), 1)
                ])
              ])) : j("", !0)
            ]),
            r("div", Zs, [
              S.canRetrySession && !d.value ? (_(), Q(D(Pe), {
                key: 0,
                type: "primary",
                onClick: i,
                loading: d.value
              }, {
                default: h(() => [
                  w(D(Ee), null, {
                    default: h(() => [
                      w(D(qe))
                    ]),
                    _: 1
                  }),
                  p[4] || (p[4] = J(" Try Again ", -1))
                ]),
                _: 1
              }, 8, ["loading"])) : j("", !0),
              w(D(Pe), {
                type: "primary",
                onClick: c,
                disabled: d.value
              }, {
                default: h(() => [
                  w(D(Ee), null, {
                    default: h(() => [
                      w(D(Te))
                    ]),
                    _: 1
                  }),
                  p[5] || (p[5] = J(" Log In ", -1))
                ]),
                _: 1
              }, 8, ["disabled"]),
              S.canRetrySession ? j("", !0) : (_(), Q(D(Pe), {
                key: 1,
                type: "info",
                onClick: P,
                disabled: d.value
              }, {
                default: h(() => [
                  w(D(Ee), null, {
                    default: h(() => [
                      w(D(qe))
                    ]),
                    _: 1
                  }),
                  p[6] || (p[6] = J(" Refresh Page ", -1))
                ]),
                _: 1
              }, 8, ["disabled"]))
            ]),
            d.value ? (_(), U("div", Qs, [
              w(D(hs), {
                percentage: b.value,
                status: $.value,
                "stroke-width": 6
              }, null, 8, ["percentage", "status"]),
              r("p", eo, G(L.value), 1)
            ])) : j("", !0)
          ])
        ];
      }),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const oo = /* @__PURE__ */ Me(so, [["__scopeId", "data-v-0dd27f7f"]]), ao = { class: "aiworkspace-header" }, to = {
  key: 0,
  class: "header-content header-loading"
}, ro = { class: "header-center" }, no = { class: "loading-text" }, io = { key: 0 }, lo = { key: 1 }, co = {
  key: 1,
  class: "header-content header-fallback"
}, uo = {
  key: 2,
  class: "header-content header-restricted"
}, po = { class: "header-center" }, fo = { class: "restricted-text" }, go = { class: "header-right" }, ho = {
  key: 3,
  class: "header-content"
}, vo = { class: "header-left" }, wo = { class: "logo-section" }, mo = {
  href: "/",
  class: "logo"
}, ko = ["src"], _o = {
  key: 1,
  class: "text-logo"
}, yo = {
  key: 0,
  class: "header-center"
}, So = { class: "main-navigation" }, bo = { class: "nav-item" }, Co = {
  href: "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard",
  class: "nav-link"
}, Ao = { class: "workspace-dropdown-item" }, Eo = ["href"], Io = { class: "workspace-icon" }, Lo = {
  key: 1,
  class: "nav-divider"
}, Mo = { class: "nav-item" }, Wo = ["href", "onClick"], Ro = { class: "header-right" }, $o = { class: "user-profile" }, Vo = { class: "user-info" }, Uo = { class: "user-name" }, Po = { class: "user-avatar" }, xo = ["src", "alt"], Do = {
  key: 1,
  class: "avatar-placeholder"
}, No = {
  key: 4,
  class: "header-content header-unauthenticated"
}, To = { class: "header-left" }, Oo = { class: "logo-section" }, Ho = {
  href: "/",
  class: "logo"
}, Fo = ["src"], zo = {
  key: 1,
  class: "text-logo"
}, Bo = { class: "header-right" }, Go = { class: "workspace-list" }, Yo = ["onClick"], qo = { class: "workspace-icon" }, Jo = { class: "workspace-details" }, Ko = { class: "workspace-members" }, jo = {
  key: 0,
  class: "current-indicator"
}, be = 50, Xo = /* @__PURE__ */ re({
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
  setup(a, { emit: o }) {
    const s = a, t = o, { authState: d, logout: b, isLoading: $ } = Ws(), {
      isSessionValid: L,
      sessionLossEvent: T,
      hasSessionLoss: m,
      canRetrySession: v,
      retrySession: i,
      clearSessionLoss: c
    } = Us(), P = () => {
      try {
        return Ps();
      } catch {
        return console.warn("[AIWorkspaceHeader] Pinia not initialized yet, using fallback state"), null;
      }
    }, S = () => {
      try {
        return typeof window < "u" ? !!window.__PINIA__ || !!window.Pinia : !1;
      } catch {
        return !1;
      }
    }, p = I(P()), M = K(() => !!p.value), W = I(0), y = () => {
      if (!p.value && W.value < be) {
        if (S()) {
          const n = P();
          if (n) {
            p.value = n, console.log("[AIWorkspaceHeader] Pinia store initialized successfully");
            return;
          }
        }
        W.value++, setTimeout(y, 100);
      } else
        W.value >= be && console.warn("[AIWorkspaceHeader] Pinia initialization failed after maximum retries, using fallback mode");
    };
    ye(() => {
      p.value || y();
    });
    const u = I(!1), E = I(!1), f = I(!1), k = I([]), se = I([]), B = I({
      name: "",
      email: "",
      avatar_url: null,
      initials: ""
    }), oe = I([]), O = I([]), X = I(!1);
    ie(O, async (n) => {
      n.length > 0 && M.value && R.value && await F();
    }, { immediate: !1 }), ie(() => window.location.pathname + window.location.search + window.location.hash, async () => {
      M.value && R.value && await F();
    }, { immediate: !1 });
    const q = I(window.location.pathname);
    ie(() => window.location.pathname, (n) => {
      q.value = n;
    }, { immediate: !0 }), ie(M, (n) => {
      !n && W.value < be && y();
    });
    const C = () => {
      try {
        const n = window.location.pathname.match(/\/single-workspace\/(\d+)/);
        if (n)
          return n[1];
        const l = new URLSearchParams(window.location.search).get("workspace_id");
        if (l)
          return l;
        const g = window.location.hash.match(/workspace_id=(\d+)/);
        return g ? g[1] : null;
      } catch (n) {
        return console.warn("[AIWorkspaceHeader] Error parsing URL for workspace_id:", n), null;
      }
    }, z = () => {
      try {
        return window.location.pathname.includes("/all-workspace/");
      } catch (n) {
        return console.warn("[AIWorkspaceHeader] Error checking all-workspace mode:", n), !1;
      }
    }, F = async () => {
      if (!p.value || !M.value)
        return;
      const n = z();
      if (X.value = n, n) {
        p.value.currentWorkspace = null, localStorage.removeItem("current_workspace"), console.log("[AIWorkspaceHeader] Auto-selected all-workspace mode from URL");
        return;
      }
      const e = C();
      if (e)
        try {
          O.value.length === 0 && await Se();
          const l = O.value.find((g) => g.id.toString() === e);
          l ? (p.value.setCurrentWorkspace(l), console.log(`[AIWorkspaceHeader] Auto-selected workspace from URL: ${l.title} (ID: ${l.id})`), t("workspaceChange", l)) : console.warn(`[AIWorkspaceHeader] Workspace with ID ${e} not found in available workspaces`);
        } catch (l) {
          console.error("[AIWorkspaceHeader] Error auto-selecting workspace from URL:", l);
        }
    }, R = K(() => d.value.isAuthenticated), N = K(() => p.value ? p.value.currentWorkspace : null), ae = I([
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
    ]), ne = I([
      { label: "Dashboard", key: "dashboard", url: "/dashboard" },
      { label: "All Tasks", key: "tasks", url: "/tasks" },
      { label: "All Goals", key: "goals", url: "/goals" },
      { label: "All Events", key: "events", url: "/events" },
      { label: "All Drive", key: "files", url: "/files" },
      { label: "All Contacts", key: "contacts", url: "/contacts" },
      { label: "All Settings", key: "settings", url: "/settings" }
    ]), V = K(() => X.value ? ne.value : ae.value), x = K(() => {
      try {
        const n = q.value;
        let e = "";
        const l = n.match(/\/all-workspace\/([^\/]+)/);
        if (l)
          e = l[1];
        else {
          const g = n.match(/\/single-workspace\/\d+\/([^\/]+)/);
          if (g)
            e = g[1];
          else {
            const H = n.match(/\/([^\/]+)$/);
            H && (e = H[1]);
          }
        }
        if (e) {
          const g = V.value.find(
            (H) => H.key === e || H.url.includes(`/${e}`) || H.url === `/${e}`
          );
          if (g)
            return g.label;
        }
        return "Dashboard";
      } catch (n) {
        return console.warn("[AIWorkspaceHeader] Error determining current section:", n), "Dashboard";
      }
    }), le = (n) => {
      const e = /* @__PURE__ */ new Map();
      n.forEach((H) => {
        e.set(H.id, { ...H, children: [] });
      });
      const l = [];
      e.forEach((H) => {
        H.parent_workspace_id && e.has(H.parent_workspace_id) ? e.get(H.parent_workspace_id).children.push(H) : l.push(H);
      });
      const g = (H) => {
        H.sort((Z, ce) => Z.title.localeCompare(ce.title)), H.forEach((Z) => {
          Z.children && g(Z.children);
        });
      };
      return g(l), l;
    }, fe = (n, e = 0, l = []) => (n.forEach((g) => {
      l.push({ ...g, level: e }), g.children && g.children.length && fe(g.children, e + 1, l);
    }), l), Se = async () => {
      var n, e, l;
      try {
        const g = await ((n = p.value) == null ? void 0 : n.loadWorkspaces());
        if (oe.value = le(g || []), O.value = fe(oe.value), se.value = O.value, k.value = O.value, s.currentWorkspaceId) {
          const H = O.value.find((Z) => {
            var ce;
            return Z.id.toString() === ((ce = s.currentWorkspaceId) == null ? void 0 : ce.toString());
          });
          H && ((e = p.value) == null || e.setCurrentWorkspace(H));
        } else
          !N.value && O.value.length && ((l = p.value) == null || l.setCurrentWorkspace(O.value[0]));
      } catch (g) {
        console.error("loadWorkspaces (header) error", g);
      }
    }, ge = (n) => {
      if (console.log("Navigation command:", n), n === "all-workspace") {
        window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
        return;
      } else {
        const e = parseInt(n.replace("workspace-", ""));
        window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e}/dashboard`;
        return;
      }
    }, Ze = (n) => {
      const e = N.value, l = X.value;
      switch (n.key) {
        case "dashboard":
          l ? window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard" : e ? window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e.id}/dashboard` : window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
          break;
        case "outlines":
          if (l)
            window.location.href = "https://outline.aiworkspace.pro/all-workspace/outlines";
          else if (e) {
            const g = `https://outline.aiworkspace.pro/single-workspace/${e.id}/outlines`;
            window.location.href = g;
          } else
            window.location.href = "https://outline.aiworkspace.pro";
          break;
        case "canvas":
          if (l)
            window.location.href = "https://canvas.aiworkspace.pro/all-workspace/canvas";
          else if (e) {
            const g = `https://canvas.aiworkspace.pro/single-workspace/${e.id}/canvas`;
            window.location.href = g;
          } else
            window.location.href = "https://canvas.aiworkspace.pro";
          break;
        case "files":
          if (l)
            window.location.href = "https://drive.aiworkspace.pro/all-workspace/files";
          else if (e) {
            const g = `https://drive.aiworkspace.pro/single-workspace/${e.id}/files`;
            window.location.href = g;
          } else
            window.location.href = "https://drive.aiworkspace.pro";
          break;
        case "tasks":
          if (l)
            window.location.href = "https://tasks.aiworkspace.pro/all-workspace/tasks";
          else if (e) {
            const g = `https://tasks.aiworkspace.pro/single-workspace/${e.id}/tasks`;
            window.location.href = g;
          } else
            window.location.href = "https://tasks.aiworkspace.pro";
          break;
        case "goals":
          if (l)
            window.location.href = "https://app.aiworkspace.pro/all-workspace/goals";
          else if (e) {
            const g = `https://app.aiworkspace.pro/single-workspace/${e.id}/goals`;
            window.location.href = g;
          } else
            window.location.href = "https://app.aiworkspace.pro/all-workspace/goals";
          break;
        case "events":
          if (l)
            window.location.href = "https://app.aiworkspace.pro/all-workspace/events";
          else if (e) {
            const g = `https://app.aiworkspace.pro/single-workspace/${e.id}/events`;
            window.location.href = g;
          } else
            window.location.href = "https://app.aiworkspace.pro/all-workspace/events";
          break;
        case "contacts":
          if (l)
            window.location.href = "https://app.aiworkspace.pro/all-workspace/contacts";
          else if (e) {
            const g = `https://app.aiworkspace.pro/single-workspace/${e.id}/contacts`;
            window.location.href = g;
          } else
            window.location.href = "https://app.aiworkspace.pro/all-workspace/contacts";
          break;
        case "ai-portfolios":
          if (l)
            window.location.href = "https://spreadsheet.aiworkspace.pro/all-workspace/ai-portfolios";
          else if (e) {
            const g = `https://spreadsheet.aiworkspace.pro/single-workspace/${e.id}/ai-portfolios`;
            window.location.href = g;
          } else
            window.location.href = "https://spreadsheet.aiworkspace.pro";
          break;
        case "settings":
          if (l)
            window.location.href = "https://settings.aiworkspace.pro/all-workspace/settings";
          else if (e) {
            const g = `https://settings.aiworkspace.pro/single-workspace/${e.id}/settings`;
            window.location.href = g;
          } else
            window.location.href = "https://settings.aiworkspace.pro";
          break;
        default:
          if (l) {
            const g = `https://app.aiworkspace.pro/all-workspace/${n.key}`;
            window.location.href = g;
          } else if (e) {
            const g = `https://app.aiworkspace.pro/single-workspace/${e.id}/${n.key}`;
            window.location.href = g;
          } else {
            const g = `https://app.aiworkspace.pro/${n.key}`;
            window.location.href = g;
          }
          break;
      }
    }, Qe = (n) => {
      const e = N.value, l = X.value;
      switch (n.key) {
        case "dashboard":
          return l ? "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard" : e ? `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e.id}/dashboard` : "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
        case "ai-portfolios":
          return l ? "https://spreadsheet.aiworkspace.pro/all-workspace/ai-portfolios" : e ? `https://spreadsheet.aiworkspace.pro/single-workspace/${e.id}/ai-portfolios` : "https://spreadsheet.aiworkspace.pro";
        case "outlines":
          return l ? "https://outline.aiworkspace.pro/all-workspace/outlines" : e ? `https://outline.aiworkspace.pro/single-workspace/${e.id}/outlines` : "https://outline.aiworkspace.pro";
        case "canvas":
          return l ? "https://canvas.aiworkspace.pro/all-workspace/canvas" : e ? `https://canvas.aiworkspace.pro/single-workspace/${e.id}/canvas` : "https://canvas.aiworkspace.pro";
        case "files":
          return l ? "https://drive.aiworkspace.pro/all-workspace/files" : e ? `https://drive.aiworkspace.pro/single-workspace/${e.id}/files` : "https://drive.aiworkspace.pro";
        case "tasks":
          return l ? "https://tasks.aiworkspace.pro/all-workspace/tasks" : e ? `https://tasks.aiworkspace.pro/single-workspace/${e.id}/tasks` : "https://tasks.aiworkspace.pro";
        case "goals":
          return l ? "https://app.aiworkspace.pro/all-workspace/goals" : e ? `https://app.aiworkspace.pro/single-workspace/${e.id}/goals` : "https://app.aiworkspace.pro/all-workspace/goals";
        case "events":
          return l ? "https://app.aiworkspace.pro/all-workspace/events" : e ? `https://app.aiworkspace.pro/single-workspace/${e.id}/events` : "https://app.aiworkspace.pro/all-workspace/events";
        case "contacts":
          return l ? "https://app.aiworkspace.pro/all-workspace/contacts" : e ? `https://app.aiworkspace.pro/single-workspace/${e.id}/contacts` : "https://app.aiworkspace.pro/all-workspace/contacts";
        case "settings":
          return l ? "https://settings.aiworkspace.pro/all-workspace/settings" : e ? `https://settings.aiworkspace.pro/single-workspace/${e.id}/settings` : "https://settings.aiworkspace.pro";
        default:
          return l ? `https://app.aiworkspace.pro/all-workspace/${n.key}` : e ? `https://app.aiworkspace.pro/single-workspace/${e.id}/${n.key}` : `https://app.aiworkspace.pro/${n.key}`;
      }
    }, Ce = (n) => {
      switch (n) {
        case "profile":
          s.onProfileClick ? s.onProfileClick() : Y.info("Profile settings coming soon");
          break;
        case "workspaces":
          u.value = !0;
          break;
        case "logout":
          ss();
          break;
      }
    }, Fe = (n) => {
      var e;
      (e = p.value) == null || e.setCurrentWorkspace(n), u.value = !1, t("workspaceChange", n), Y.success(`Switched to ${n.title}`);
    }, es = () => {
      Be.prompt("Enter workspace name:", "Create New Workspace", {
        confirmButtonText: "Create",
        cancelButtonText: "Cancel",
        inputPattern: /\S/,
        inputErrorMessage: "Workspace name cannot be empty"
      }).then(({ value: n }) => {
        var l;
        const e = {
          id: Date.now(),
          title: n,
          description: "New workspace",
          archived: !1,
          created_by: "",
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          latest_activity: (/* @__PURE__ */ new Date()).toISOString(),
          hasAccess: !0,
          accessType: "edit"
        };
        k.value.push(e), (l = p.value) == null || l.setWorkspaces(k.value), Fe(e), Y.success(`Created workspace: ${n}`);
      }).catch(() => {
      });
    }, ss = () => {
      Be.confirm(
        "Are you sure you want to sign out?",
        "Sign Out",
        {
          confirmButtonText: "Sign Out",
          cancelButtonText: "Cancel",
          type: "warning"
        }
      ).then(async () => {
        var n;
        (n = p.value) == null || n.clearData(), await b(), typeof window < "u" && window.dispatchEvent(new CustomEvent("session-logout-detected", {
          detail: { timestamp: /* @__PURE__ */ new Date(), source: "manual-logout" }
        })), t("logout"), Y.success("Signed out successfully");
      }).catch(() => {
      });
    }, We = async () => {
      var n, e;
      if (d.value.user) {
        const l = d.value.user;
        B.value = {
          name: l.name || ((n = l.email) == null ? void 0 : n.split("@")[0]) || "User",
          email: l.email || "",
          avatar_url: l.avatar_url || null,
          initials: (l.name || ((e = l.email) == null ? void 0 : e.split("@")[0]) || "U").split(" ").map((g) => g[0]).join("").toUpperCase().substring(0, 2)
        }, s.showWorkspaceSelector && await Se();
      }
    };
    ie(() => d.value.user, (n) => {
      var e;
      n ? We() : (B.value = { name: "", email: "", avatar_url: null, initials: "" }, (e = p.value) == null || e.clearData());
    }), ie(m, (n) => {
      n && R.value && (console.log("[AIWorkspaceHeader] Session loss detected, showing modal"), f.value = !0);
    }), ie(() => s.currentWorkspaceId, (n) => {
      var e;
      if (n && O.value.length) {
        const l = O.value.find((g) => g.id.toString() === n.toString());
        l && ((e = p.value) == null || e.setCurrentWorkspace(l));
      }
    }), ye(async () => {
      R.value && (await We(), await F());
    });
    const os = async (n) => {
      console.log("Login successful:", n), E.value = !1, await We(), t("login"), Y.success("Welcome back!");
    }, as = async () => {
      console.log("[AIWorkspaceHeader] Retrying session..."), await i() ? (f.value = !1, c(), Y.success("Session restored successfully!")) : Y.error("Failed to restore session. Please log in again.");
    }, ts = () => {
      console.log("[AIWorkspaceHeader] Opening login modal from session loss"), f.value = !1, E.value = !0;
    }, rs = () => {
      console.log("[AIWorkspaceHeader] Refreshing page due to session loss"), window.location.reload();
    }, ns = () => {
      W.value = 0, y(), Y.success("Manual Pinia retry initiated.");
    };
    return (n, e) => {
      const l = te("el-icon"), g = te("el-button"), H = te("el-tag"), Z = te("el-dropdown-item"), ce = te("el-dropdown-menu"), Re = te("el-dropdown"), is = te("el-dialog");
      return _(), U("header", ao, [
        !M.value && W.value < be || D($) ? (_(), U("div", to, [
          e[10] || (e[10] = Ae('<div class="header-left" data-v-2d5d4116><div class="logo-section" data-v-2d5d4116><a href="/" class="logo" data-v-2d5d4116><div class="text-logo" data-v-2d5d4116><span class="logo-text" data-v-2d5d4116>AI Workspace</span></div></a></div></div>', 1)),
          r("div", ro, [
            r("span", no, [
              D($) ? (_(), U("span", io, "Syncing authentication...")) : (_(), U("span", lo, "Initializing..."))
            ])
          ])
        ])) : !M.value && W.value >= be ? (_(), U("div", co, [
          e[12] || (e[12] = Ae('<div class="header-left" data-v-2d5d4116><div class="logo-section" data-v-2d5d4116><a href="/" class="logo" data-v-2d5d4116><div class="text-logo" data-v-2d5d4116><span class="logo-text" data-v-2d5d4116>AI Workspace</span></div></a></div></div>', 1)),
          r("div", { class: "header-center" }, [
            e[11] || (e[11] = r("span", { class: "fallback-text" }, "Header Ready (Fallback Mode)", -1)),
            r("button", {
              onClick: ns,
              class: "retry-button"
            }, "Retry Pinia")
          ]),
          e[13] || (e[13] = Ae('<div class="header-right" data-v-2d5d4116><div class="user-profile" data-v-2d5d4116><div class="user-info" data-v-2d5d4116><span class="user-name" data-v-2d5d4116>User</span></div><div class="user-avatar" data-v-2d5d4116><span class="avatar-placeholder" data-v-2d5d4116>U</span></div></div></div>', 1))
        ])) : R.value && !D(L) ? (_(), U("div", uo, [
          e[16] || (e[16] = Ae('<div class="header-left" data-v-2d5d4116><div class="logo-section" data-v-2d5d4116><a href="/" class="logo" data-v-2d5d4116><div class="text-logo" data-v-2d5d4116><span class="logo-text" data-v-2d5d4116>AI Workspace</span></div></a></div></div>', 1)),
          r("div", po, [
            r("span", fo, [
              w(l, null, {
                default: h(() => [
                  w(D(Je))
                ]),
                _: 1
              }),
              e[14] || (e[14] = J(" Session expired - Please log in again ", -1))
            ])
          ]),
          r("div", go, [
            w(g, {
              type: "primary",
              onClick: e[0] || (e[0] = (A) => E.value = !0)
            }, {
              default: h(() => [
                w(l, null, {
                  default: h(() => [
                    w(D(Te))
                  ]),
                  _: 1
                }),
                e[15] || (e[15] = J(" Log In ", -1))
              ]),
              _: 1
            })
          ])
        ])) : R.value && D(L) ? (_(), U("div", ho, [
          r("div", vo, [
            r("div", wo, [
              r("a", mo, [
                n.customLogo ? (_(), U("img", {
                  key: 0,
                  src: n.customLogo,
                  alt: "AIWorkspace",
                  class: "logo-image"
                }, null, 8, ko)) : (_(), U("div", _o, [...e[17] || (e[17] = [
                  r("span", { class: "logo-text" }, "AI Workspace", -1)
                ])]))
              ])
            ])
          ]),
          n.showSecondaryNavigation ? (_(), U("div", yo, [
            r("nav", So, [
              n.showWorkspaceSelector ? (_(), Q(Re, {
                key: 0,
                onCommand: ge,
                trigger: "hover"
              }, {
                dropdown: h(() => [
                  w(ce, { class: "workspace-tree-dropdown" }, {
                    default: h(() => [
                      w(Z, {
                        command: "all-workspace",
                        class: $e({ active: X.value })
                      }, {
                        default: h(() => [
                          r("a", Co, [
                            r("div", Ao, [
                              e[19] || (e[19] = r("span", { class: "workspace-icon" }, "🌐", -1)),
                              e[20] || (e[20] = r("span", null, "All workspace", -1)),
                              X.value ? (_(), Q(H, {
                                key: 0,
                                size: "small",
                                type: "success"
                              }, {
                                default: h(() => [...e[18] || (e[18] = [
                                  J("Current", -1)
                                ])]),
                                _: 1
                              })) : j("", !0)
                            ])
                          ])
                        ]),
                        _: 1
                      }, 8, ["class"]),
                      O.value.length > 0 ? (_(), Q(Z, {
                        key: 0,
                        divided: "",
                        disabled: ""
                      })) : j("", !0),
                      (_(!0), U(Ve, null, Ue(O.value, (A) => (_(), Q(Z, {
                        key: A.id,
                        command: `workspace-${A.id}`
                      }, {
                        default: h(() => {
                          var he;
                          return [
                            r("a", {
                              href: `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${A.id}/dashboard`,
                              class: "nav-link"
                            }, [
                              r("div", {
                                class: "workspace-dropdown-item",
                                style: ps({ paddingLeft: (A.level || 0) * 16 + "px" })
                              }, [
                                r("span", Io, G(A.children && A.children.length ? "📁" : "📄"), 1),
                                r("span", null, G(A.title), 1),
                                A.id === ((he = N.value) == null ? void 0 : he.id) ? (_(), Q(H, {
                                  key: 0,
                                  size: "small",
                                  type: "success"
                                }, {
                                  default: h(() => [...e[21] || (e[21] = [
                                    J("Current", -1)
                                  ])]),
                                  _: 1
                                })) : j("", !0)
                              ], 4)
                            ], 8, Eo)
                          ];
                        }),
                        _: 2
                      }, 1032, ["command"]))), 128)),
                      O.value.length === 0 ? (_(), Q(Z, {
                        key: 1,
                        disabled: ""
                      }, {
                        default: h(() => [...e[22] || (e[22] = [
                          J(" No workspaces ", -1)
                        ])]),
                        _: 1
                      })) : j("", !0)
                    ]),
                    _: 1
                  })
                ]),
                default: h(() => {
                  var A;
                  return [
                    r("span", bo, [
                      J(G(X.value ? "All workspace" : ((A = N.value) == null ? void 0 : A.title) || "Select Workspace") + " ", 1),
                      w(l, { class: "nav-arrow" }, {
                        default: h(() => [
                          w(D(Ge))
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }),
                _: 1
              })) : j("", !0),
              n.showWorkspaceSelector ? (_(), U("span", Lo, "/")) : j("", !0),
              n.showSecondaryNavigation ? (_(), Q(Re, {
                key: 2,
                trigger: "hover"
              }, {
                dropdown: h(() => [
                  w(ce, null, {
                    default: h(() => [
                      (_(!0), U(Ve, null, Ue(V.value, (A) => (_(), Q(Z, {
                        key: A.label,
                        class: $e({ active: A.active })
                      }, {
                        default: h(() => [
                          r("a", {
                            href: Qe(A),
                            class: "nav-link",
                            onClick: de((he) => Ze(A), ["prevent"])
                          }, G(A.label), 9, Wo)
                        ]),
                        _: 2
                      }, 1032, ["class"]))), 128))
                    ]),
                    _: 1
                  })
                ]),
                default: h(() => [
                  r("span", Mo, [
                    J(G(x.value) + " ", 1),
                    w(l, { class: "nav-arrow" }, {
                      default: h(() => [
                        w(D(Ge))
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })) : j("", !0)
            ])
          ])) : j("", !0),
          r("div", Ro, [
            w(Re, {
              onCommand: Ce,
              trigger: "click",
              placement: "bottom-end"
            }, {
              dropdown: h(() => [
                w(ce, null, {
                  default: h(() => [
                    w(Z, null, {
                      default: h(() => [
                        r("a", {
                          href: "/profile",
                          class: "nav-link",
                          onClick: e[1] || (e[1] = de((A) => Ce("profile"), ["prevent"]))
                        }, "Profile Settings")
                      ]),
                      _: 1
                    }),
                    n.showWorkspaceSelector ? (_(), Q(Z, { key: 0 }, {
                      default: h(() => [
                        r("a", {
                          href: "#switch-workspace",
                          class: "nav-link",
                          onClick: e[2] || (e[2] = de((A) => Ce("workspaces"), ["prevent"]))
                        }, "Switch Workspace")
                      ]),
                      _: 1
                    })) : j("", !0),
                    w(Z, { divided: "" }, {
                      default: h(() => [
                        r("a", {
                          href: "#signout",
                          class: "nav-link",
                          onClick: e[3] || (e[3] = de((A) => Ce("logout"), ["prevent"]))
                        }, "Sign Out")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              default: h(() => [
                r("div", $o, [
                  r("div", Vo, [
                    r("span", Uo, G(B.value.name), 1)
                  ]),
                  r("div", Po, [
                    B.value.avatar_url ? (_(), U("img", {
                      key: 0,
                      src: B.value.avatar_url,
                      alt: B.value.name
                    }, null, 8, xo)) : (_(), U("span", Do, G(B.value.initials), 1))
                  ])
                ])
              ]),
              _: 1
            })
          ])
        ])) : (_(), U("div", No, [
          r("div", To, [
            r("div", Oo, [
              r("a", Ho, [
                n.customLogo ? (_(), U("img", {
                  key: 0,
                  src: n.customLogo,
                  alt: "AIWorkspace",
                  class: "logo-image"
                }, null, 8, Fo)) : (_(), U("div", zo, [...e[23] || (e[23] = [
                  r("span", { class: "logo-text" }, "AI Workspace", -1)
                ])]))
              ])
            ])
          ]),
          e[25] || (e[25] = r("div", { class: "header-center" }, [
            r("span", { class: "welcome-text" }, "Welcome to AI Workspace")
          ], -1)),
          r("div", Bo, [
            w(g, {
              type: "primary",
              size: "large",
              class: "login-button",
              onClick: e[4] || (e[4] = (A) => E.value = !0)
            }, {
              default: h(() => [
                w(l, null, {
                  default: h(() => [
                    w(D(Te))
                  ]),
                  _: 1
                }),
                e[24] || (e[24] = J(" Login / Signup ", -1))
              ]),
              _: 1
            })
          ])
        ])),
        R.value && n.showWorkspaceSelector ? (_(), Q(is, {
          key: 5,
          modelValue: u.value,
          "onUpdate:modelValue": e[6] || (e[6] = (A) => u.value = A),
          title: "Switch Workspace",
          width: "500px",
          onClose: e[7] || (e[7] = (A) => u.value = !1)
        }, {
          footer: h(() => [
            w(g, {
              onClick: e[5] || (e[5] = (A) => u.value = !1)
            }, {
              default: h(() => [...e[26] || (e[26] = [
                J("Cancel", -1)
              ])]),
              _: 1
            }),
            w(g, {
              type: "primary",
              onClick: es
            }, {
              default: h(() => [...e[27] || (e[27] = [
                J("Create New Workspace", -1)
              ])]),
              _: 1
            })
          ]),
          default: h(() => [
            r("div", Go, [
              (_(!0), U(Ve, null, Ue(k.value, (A) => {
                var he, ze;
                return _(), U("div", {
                  key: A.id,
                  class: $e(["workspace-item", { active: A.id === ((he = N.value) == null ? void 0 : he.id) }]),
                  onClick: (aa) => Fe(A)
                }, [
                  r("div", qo, G(A.children && A.children.length ? "📁" : "📄"), 1),
                  r("div", Jo, [
                    r("h3", null, G(A.title), 1),
                    r("p", null, G(A.description), 1),
                    r("span", Ko, G(A.hasAccess ? "Active" : "Inactive"), 1)
                  ]),
                  A.id === ((ze = N.value) == null ? void 0 : ze.id) ? (_(), U("div", jo, [
                    w(l, null, {
                      default: h(() => [
                        w(D(ys))
                      ]),
                      _: 1
                    })
                  ])) : j("", !0)
                ], 10, Yo);
              }), 128))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])) : j("", !0),
        w(zs, {
          modelValue: E.value,
          "onUpdate:modelValue": e[8] || (e[8] = (A) => E.value = A),
          onLoginSuccess: os
        }, null, 8, ["modelValue"]),
        w(oo, {
          modelValue: f.value,
          "onUpdate:modelValue": e[9] || (e[9] = (A) => f.value = A),
          "session-loss-event": D(T),
          "can-retry-session": D(v) || !1,
          onRetry: as,
          onLogin: ts,
          onRefresh: rs
        }, null, 8, ["modelValue", "session-loss-event", "can-retry-session"])
      ]);
    };
  }
});
const Sa = /* @__PURE__ */ Me(Xo, [["__scopeId", "data-v-2d5d4116"]]), Zo = { class: "auth-callback" }, Qo = /* @__PURE__ */ re({
  __name: "AuthCallback",
  setup(a) {
    ye(async () => {
      console.log("[AuthCallback] Component mounted, starting callback processing..."), console.log("[AuthCallback] Current URL:", window.location.href), console.log("[AuthCallback] Current hash:", window.location.hash);
      try {
        await new Promise((d) => setTimeout(d, 500));
        const { data: s, error: t } = await Ie.auth.getSession();
        if (t) {
          console.error("Error processing callback:", t), o();
          return;
        }
        if (s != null && s.session) {
          const d = s.session.user;
          console.log("OAuth login successful:", d.email), s.session.access_token && _e(me, s.session.access_token), s.session.refresh_token && _e(ke, s.session.refresh_token), Ne();
          const b = ws();
          console.log("[callback] Post-login redirect URL:", b), console.log("[callback] Session storage redirect:", sessionStorage.getItem("post-login-redirect")), console.log("[callback] Local storage redirect:", localStorage.getItem("post-login-redirect"));
          const $ = b || "/";
          if (console.log("[callback] Final redirect URL:", $), $.startsWith("/")) {
            const L = window.location.origin, T = `${L}${$}`;
            console.log("[callback] redirecting to:", T, { hostname: window.location.hostname, origin: L }), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
              window.location.href = T;
            }, 100);
          } else
            console.log("[callback] redirecting to absolute URL:", $), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
              window.location.href = $;
            }, 100);
        } else
          o();
      } catch (s) {
        console.error("Error processing callback:", s), o();
      }
    });
    const o = () => {
      const t = window.location.href.replace("/auth/callback", "");
      window.location.href = t;
    };
    return (s, t) => (_(), U("div", Zo, [...t[0] || (t[0] = [
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
const ba = /* @__PURE__ */ Me(Qo, [["__scopeId", "data-v-acdf6325"]]), ue = class ue {
  constructor() {
    ve(this, "validationCache", /* @__PURE__ */ new Map());
    ve(this, "CACHE_DURATION", Xe().validationCacheDuration);
  }
  // Helper function to get cookie value
  getCookieValue(o) {
    var d;
    if (typeof document > "u")
      return null;
    const t = `; ${document.cookie}`.split(`; ${o}=`);
    return t.length === 2 && ((d = t.pop()) == null ? void 0 : d.split(";").shift()) || null;
  }
  static getInstance() {
    return ue.instance || (ue.instance = new ue()), ue.instance;
  }
  /**
   * Validate current session with caching
   */
  async validateSession(o = !1) {
    const s = "session_validation";
    if (!o) {
      const t = this.validationCache.get(s);
      if (t && Date.now() - t.timestamp < this.CACHE_DURATION)
        return console.log("[SessionValidator] Using cached validation result"), t.result;
    }
    console.log("[SessionValidator] Validating session...");
    try {
      const t = this.getCookieValue("sb-access-token"), d = this.getCookieValue("sb-refresh-token");
      if (!t || !d) {
        const i = {
          isValid: !1,
          needsLogin: !0,
          error: "No authentication tokens found",
          canRetry: !1
        };
        return this.cacheResult(s, i), i;
      }
      const b = await ee(), { data: { session: $ }, error: L } = await b.auth.getSession();
      if (L) {
        console.warn("[SessionValidator] Error getting session:", L);
        const i = {
          isValid: !1,
          needsLogin: !0,
          error: `Session error: ${L.message}`,
          canRetry: !0
        };
        return this.cacheResult(s, i), i;
      }
      if (!$ || !$.user) {
        const i = {
          isValid: !1,
          needsLogin: !0,
          error: "No valid session found",
          canRetry: !0
        };
        return this.cacheResult(s, i), i;
      }
      const T = /* @__PURE__ */ new Date(), m = new Date($.expires_at * 1e3);
      if (T >= m) {
        const i = {
          isValid: !1,
          needsLogin: !0,
          error: "Session has expired",
          canRetry: !0
        };
        return this.cacheResult(s, i), i;
      }
      const v = {
        isValid: !0,
        needsLogin: !1,
        canRetry: !1
      };
      return this.cacheResult(s, v), v;
    } catch (t) {
      console.error("[SessionValidator] Error validating session:", t);
      const d = {
        isValid: !1,
        needsLogin: !0,
        error: `Validation error: ${t}`,
        canRetry: !0
      };
      return this.cacheResult(s, d), d;
    }
  }
  /**
   * Attempt to restore session from tokens
   */
  async restoreSession() {
    console.log("[SessionValidator] Attempting to restore session...");
    try {
      const o = this.getCookieValue("sb-access-token"), s = this.getCookieValue("sb-refresh-token");
      if (!o || !s)
        return {
          isValid: !1,
          needsLogin: !0,
          error: "No tokens available for restoration",
          canRetry: !1
        };
      const t = await ee(), { data: d, error: b } = await t.auth.setSession({
        access_token: o,
        refresh_token: s
      });
      return b ? (console.warn("[SessionValidator] Error restoring session:", b), {
        isValid: !1,
        needsLogin: !0,
        error: `Restoration error: ${b.message}`,
        canRetry: !0
      }) : d.session && d.session.user ? (console.log("[SessionValidator] Session restored successfully"), this.clearCache(), {
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
  cacheResult(o, s) {
    this.validationCache.set(o, {
      result: s,
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
ve(ue, "instance");
let Oe = ue;
const He = Oe.getInstance(), ea = (a = !1) => He.validateSession(a), sa = () => He.restoreSession(), oa = () => He.clearCache();
async function Ca() {
  console.log("[SessionValidator] Initializing session validation...");
  let a = await ea();
  return !a.isValid && a.canRetry && (console.log("[SessionValidator] Attempting session restoration..."), a = await sa()), a;
}
function Aa() {
  if (typeof window > "u")
    return () => {
    };
  const a = () => {
    console.log("[SessionValidator] Network restored, clearing cache for revalidation"), oa();
  }, o = () => {
    console.log("[SessionValidator] Network lost, session validation may fail");
  };
  return window.addEventListener("online", a), window.addEventListener("offline", o), () => {
    window.removeEventListener("online", a), window.removeEventListener("offline", o);
  };
}
export {
  me as ACCESS_COOKIE,
  Sa as AIWorkspaceHeader,
  ba as AuthCallback,
  Ra as LS_ACCESS_KEY,
  $a as LS_REFRESH_KEY,
  zs as LoginModal,
  Le as PackageError,
  ke as REFRESH_COOKIE,
  oo as SessionLossModal,
  Oe as SessionValidator,
  Va as buildOAuthRedirectUrl,
  De as clearLocalStorageTokens,
  oa as clearSessionCache,
  we as clearSessionCookie,
  $s as conservativeConfig,
  ma as createSessionConfig,
  pe as defaultSessionConfig,
  ya as detectionScenarios,
  Ke as developmentConfig,
  Ua as ensureCrossSubdomainCookies,
  Rs as fastDetectionConfig,
  ka as getConfigByPreset,
  Pa as getCookie,
  ws as getPostLoginBase,
  Xe as getSessionConfig,
  Ls as handleBundlingError,
  vs as initializeCrossSubdomainAuth,
  Ca as initializeSessionValidation,
  je as productionConfig,
  La as restoreCrossSubdomainSession,
  sa as restoreSession,
  xe as restoreSessionWithRetry,
  ua as safeExecute,
  da as safeExecuteAsync,
  fa as safeGetCookie,
  ha as safeGetLocalStorage,
  pa as safeImport,
  ga as safeSetCookie,
  va as safeSetLocalStorage,
  wa as safeWindowOperation,
  Vs as sessionConfigPresets,
  He as sessionValidator,
  _e as setSessionCookie,
  Ma as setupAuthStateListener,
  Ms as setupGlobalErrorHandler,
  Aa as setupNetworkAwareValidation,
  Da as setupUniversalCallback,
  Ie as supabase,
  Ne as syncCookiesToLocalStorage,
  _a as timingInfo,
  xs as useAuth,
  Ws as useEnhancedAuth,
  Us as useSessionMonitor,
  Ps as useWorkspaceStore,
  ea as validateSession
};
