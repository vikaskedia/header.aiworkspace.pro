var Oo = Object.defineProperty;
var Bo = (o, s, a) => s in o ? Oo(o, s, { enumerable: !0, configurable: !0, writable: !0, value: a }) : o[s] = a;
var be = (o, s, a) => (Bo(o, typeof s != "symbol" ? s + "" : s, a), a);
import { defineComponent as ie, openBlock as y, createElementBlock as M, createElementVNode as n, ref as I, computed as j, onMounted as Ee, onUnmounted as wo, watch as ge, reactive as Fo, resolveComponent as oe, createBlock as Q, withCtx as g, toDisplayString as q, createVNode as w, unref as $, withModifiers as ne, createCommentVNode as B, createTextVNode as J, Fragment as Ve, createStaticVNode as He, normalizeClass as Ne, renderList as Ge, normalizeStyle as jo } from "vue";
import { ElForm as zo, ElMessage as F, ElDialog as Ko, ElIcon as Ue, ElButton as Oe, ElProgress as Yo, ElMessageBox as po } from "element-plus";
import { i as qo, g as Z, r as Jo, s as Me } from "./supabase-6cdf6543.mjs";
import { c as Ca, b as Ea, h as Aa, a as Ia, e as La, f as Ra, d as Ta, w as Va } from "./supabase-6cdf6543.mjs";
import { broadcastAuthState as Xo, clearSessionCookie as Se, ACCESS_COOKIE as le, REFRESH_COOKIE as ce, clearLocalStorageTokens as Be, ensureCrossSubdomainCookies as fo, setSessionCookie as ue, syncCookiesToLocalStorage as Re, listenForAuthBroadcasts as Qo, getPostLoginBase as Zo } from "./utils/authRedirect.js";
import { AUTH_BROADCAST_CHANNEL as Ua, AUTH_BROADCAST_KEY as Ma, LS_ACCESS_KEY as Da, LS_REFRESH_KEY as xa, buildOAuthRedirectUrl as Pa, getCookie as Wa, syncCookiesAndBroadcast as $a } from "./utils/authRedirect.js";
import { defineStore as es } from "pinia";
import { setupUniversalCallback as Ga } from "./utils/universalCallback.js";
/*! Element Plus Icons Vue v2.3.2 */
var os = /* @__PURE__ */ ie({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(o) {
    return (s, a) => (y(), M("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      n("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"
      })
    ]));
  }
}), go = os, ss = /* @__PURE__ */ ie({
  name: "Check",
  __name: "check",
  setup(o) {
    return (s, a) => (y(), M("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      n("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      })
    ]));
  }
}), ts = ss, as = /* @__PURE__ */ ie({
  name: "Lock",
  __name: "lock",
  setup(o) {
    return (s, a) => (y(), M("svg", {
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
}), ho = as, rs = /* @__PURE__ */ ie({
  name: "Message",
  __name: "message",
  setup(o) {
    return (s, a) => (y(), M("svg", {
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
}), ns = rs, is = /* @__PURE__ */ ie({
  name: "Refresh",
  __name: "refresh",
  setup(o) {
    return (s, a) => (y(), M("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      n("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), Fe = is, ls = /* @__PURE__ */ ie({
  name: "User",
  __name: "user",
  setup(o) {
    return (s, a) => (y(), M("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      n("path", {
        fill: "currentColor",
        d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"
      })
    ]));
  }
}), je = ls, cs = /* @__PURE__ */ ie({
  name: "Warning",
  __name: "warning",
  setup(o) {
    return (s, a) => (y(), M("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      n("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"
      })
    ]));
  }
}), vo = cs;
class De extends Error {
  constructor(a, i = {}, h) {
    super(a);
    be(this, "context");
    be(this, "originalError");
    this.name = "PackageError", this.context = i, this.originalError = h;
  }
}
function sa(o, s = {}, a) {
  try {
    const i = o();
    return i instanceof Promise ? i.catch((h) => {
      if (console.warn("[ErrorHandler] Async operation failed:", {
        context: s,
        error: h.message,
        stack: h.stack
      }), a !== void 0)
        return a;
      throw new De(
        `Async operation failed: ${h.message}`,
        s,
        h
      );
    }) : i;
  } catch (i) {
    if (console.warn("[ErrorHandler] Operation failed:", {
      context: s,
      error: i instanceof Error ? i.message : String(i),
      stack: i instanceof Error ? i.stack : void 0
    }), a !== void 0)
      return a;
    throw new De(
      `Operation failed: ${i instanceof Error ? i.message : String(i)}`,
      s,
      i instanceof Error ? i : void 0
    );
  }
}
async function ta(o, s = {}, a) {
  try {
    return await o();
  } catch (i) {
    if (console.warn("[ErrorHandler] Async operation failed:", {
      context: s,
      error: i instanceof Error ? i.message : String(i),
      stack: i instanceof Error ? i.stack : void 0
    }), a !== void 0)
      return a;
    throw new De(
      `Async operation failed: ${i instanceof Error ? i.message : String(i)}`,
      s,
      i instanceof Error ? i : void 0
    );
  }
}
function us(o, s = {}) {
  const a = o.message.toLowerCase();
  if (a.includes("is not a function") || a.includes("cannot read property") || a.includes("undefined is not a function")) {
    console.warn("[ErrorHandler] Bundling error detected:", {
      context: s,
      error: o.message,
      suggestion: "This may be due to minification or import issues. The package will continue with fallback behavior."
    });
    return;
  }
  throw new De(
    `Unexpected error: ${o.message}`,
    s,
    o
  );
}
async function aa(o, s = {}, a) {
  try {
    return await o();
  } catch (i) {
    return console.warn("[ErrorHandler] Import failed:", {
      context: s,
      error: i instanceof Error ? i.message : String(i)
    }), a !== void 0 ? a : void 0;
  }
}
function ra(o) {
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
function na(o, s, a = {}) {
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
function ia(o) {
  try {
    return typeof localStorage > "u" ? null : localStorage.getItem(o);
  } catch (s) {
    return console.warn("[ErrorHandler] localStorage get failed:", {
      key: o,
      error: s instanceof Error ? s.message : String(s)
    }), null;
  }
}
function la(o, s) {
  try {
    return typeof localStorage > "u" ? !1 : (localStorage.setItem(o, s), !0);
  } catch (a) {
    return console.warn("[ErrorHandler] localStorage set failed:", {
      key: o,
      error: a instanceof Error ? a.message : String(a)
    }), !1;
  }
}
function ca(o, s) {
  try {
    return typeof window > "u" ? s : o(window);
  } catch (a) {
    return console.warn("[ErrorHandler] Window operation failed:", {
      error: a instanceof Error ? a.message : String(a)
    }), s;
  }
}
function ds() {
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
typeof window < "u" && ds();
function ps() {
  const o = I({
    user: null,
    isAuthenticated: !1,
    isLoading: !0,
    error: null
  }), s = I(null), a = j(() => o.value.isAuthenticated), i = j(() => o.value.user), h = j(() => o.value.isLoading), v = async () => {
    var d, c, u, D, _, f, H, V, E, m, R;
    try {
      console.log("[auth][enhanced] Starting loadUserInfo..."), console.log("[auth][enhanced] Ensuring cross-subdomain cookie synchronization..."), ((S) => {
        try {
          const G = location.hostname;
          if (G === "localhost" || /^\d+\.\d+\.\d+\.\d+$/.test(G)) {
            console.log("[auth][enhanced] Skipping cookie sync for localhost");
            return;
          }
          const O = "aiworkspace.pro";
          if (!G.endsWith(`.${O}`) && G !== O) {
            console.log("[auth][enhanced] Skipping cookie sync - not under apex domain");
            return;
          }
          console.log("[auth][enhanced] Performing cookie synchronization"), S.forEach((de) => {
            const A = document.cookie.split(";").find((x) => x.trim().startsWith(de + "="));
            if (A) {
              console.log(`[auth][enhanced] Found cookie: ${de}`);
              const x = A.split("=")[1];
              x && (document.cookie = `${de}=${x}; domain=.${O}; path=/; secure; samesite=lax`);
            }
          });
        } catch (G) {
          console.warn("[auth][enhanced] Error in cookie sync:", G);
        }
      })(["sb-access-token", "sb-refresh-token"]);
      let z = null;
      try {
        const G = await (await Z()).auth.getSession();
        z = (d = G == null ? void 0 : G.data) == null ? void 0 : d.session;
      } catch (S) {
        console.warn("[auth][enhanced] Error getting Supabase session:", S);
      }
      if (z && z.user) {
        console.log("[auth][enhanced] Active Supabase session found");
        const S = z.user, G = {
          id: S.id,
          name: ((c = S.user_metadata) == null ? void 0 : c.name) || ((u = S.user_metadata) == null ? void 0 : u.user_name) || ((D = S.user_metadata) == null ? void 0 : D.full_name) || ((_ = S.email) == null ? void 0 : _.split("@")[0]) || "User",
          email: S.email,
          avatar_url: ((f = S.user_metadata) == null ? void 0 : f.avatar_url) || null,
          user_metadata: S.user_metadata
        };
        return o.value = {
          user: G,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, s.value = {
          user: G,
          access_token: z.access_token,
          refresh_token: z.refresh_token
        }, { user: G, session: s.value, error: null };
      }
      console.log("[auth][enhanced] No active session, attempting to restore from cookies...");
      const N = await Jo(5, 200);
      if (N.success && N.session) {
        console.log("[auth][enhanced] Session restored successfully from cookies");
        const S = N.session.user, G = {
          id: S.id,
          name: ((H = S.user_metadata) == null ? void 0 : H.name) || ((V = S.user_metadata) == null ? void 0 : V.user_name) || ((E = S.user_metadata) == null ? void 0 : E.full_name) || ((m = S.email) == null ? void 0 : m.split("@")[0]) || "User",
          email: S.email,
          avatar_url: ((R = S.user_metadata) == null ? void 0 : R.avatar_url) || null,
          user_metadata: S.user_metadata
        };
        return o.value = {
          user: G,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, s.value = N.session, { user: G, session: s.value, error: null };
      } else
        console.log("[auth][enhanced] Failed to restore session:", N.error);
    } catch (k) {
      console.error("Error getting Supabase session:", k), k instanceof Error && us(k, {
        component: "useEnhancedAuth",
        function: "loadUserInfo",
        operation: "session_validation"
      });
    }
    return console.log("[auth][enhanced] No valid authentication found"), o.value = {
      user: null,
      isAuthenticated: !1,
      isLoading: !1,
      error: "No valid session found"
    }, s.value = null, { user: null, session: null, error: "No valid session found" };
  }, C = async () => {
    try {
      Xo({
        type: "SIGNED_OUT",
        timestamp: Date.now()
      }), await (await Z()).auth.signOut(), Se(le), Se(ce), Be(), o.value = {
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
  }, T = async (d, c) => {
    var u, D, _, f, H;
    try {
      o.value.isLoading = !0;
      const V = await Z(), { data: E, error: m } = await V.auth.signInWithPassword({
        email: d,
        password: c
      });
      if (m)
        throw m;
      if (E.session) {
        const R = E.session.user, k = {
          id: R.id,
          name: ((u = R.user_metadata) == null ? void 0 : u.name) || ((D = R.user_metadata) == null ? void 0 : D.user_name) || ((_ = R.user_metadata) == null ? void 0 : _.full_name) || ((f = R.email) == null ? void 0 : f.split("@")[0]) || "User",
          email: R.email,
          avatar_url: ((H = R.user_metadata) == null ? void 0 : H.avatar_url) || null,
          user_metadata: R.user_metadata
        };
        return o.value = {
          user: k,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, s.value = {
          user: k,
          access_token: E.session.access_token,
          refresh_token: E.session.refresh_token
        }, { user: k, session: s.value, error: null };
      }
      return { user: null, session: null, error: "No session returned" };
    } catch (V) {
      return console.error("Sign in error:", V), o.value.isLoading = !1, { user: null, session: null, error: String(V) };
    }
  }, W = async (d, c, u) => {
    var D, _, f, H, V;
    try {
      o.value.isLoading = !0;
      const E = await Z(), { data: m, error: R } = await E.auth.signUp({
        email: d,
        password: c,
        options: {
          data: u
        }
      });
      if (R)
        throw R;
      if (m.session) {
        const k = m.session.user, b = {
          id: k.id,
          name: ((D = k.user_metadata) == null ? void 0 : D.name) || ((_ = k.user_metadata) == null ? void 0 : _.user_name) || ((f = k.user_metadata) == null ? void 0 : f.full_name) || ((H = k.email) == null ? void 0 : H.split("@")[0]) || "User",
          email: k.email,
          avatar_url: ((V = k.user_metadata) == null ? void 0 : V.avatar_url) || null,
          user_metadata: k.user_metadata
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
    } catch (E) {
      return console.error("Sign up error:", E), o.value.isLoading = !1, { user: null, session: null, error: String(E) };
    }
  }, p = async () => {
    await v();
  };
  return Ee(async () => {
    await qo(), await p();
  }), {
    // State
    authState: o,
    currentSession: s,
    // Computed
    isAuthenticated: a,
    currentUser: i,
    isLoading: h,
    // Methods
    loadUserInfo: v,
    logout: C,
    signIn: T,
    signUp: W,
    checkAuth: p
  };
}
const ke = {
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
}, fs = {
  ...ke,
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
}, gs = {
  ...ke,
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
}, mo = {
  ...ke,
  normalCheckInterval: 1e4,
  // 10 seconds - faster for testing
  fastCheckInterval: 2e3,
  // 2 seconds - very fast for testing
  fastMonitoringDuration: 3e4,
  // 30 seconds - shorter for testing
  validationCacheDuration: 1e3
  // 1 second cache for testing
}, ko = {
  ...ke,
  normalCheckInterval: 45e3,
  // 45 seconds - balanced monitoring
  fastCheckInterval: 3e3,
  // 3 seconds - quick detection
  fastMonitoringDuration: 9e4,
  // 1.5 minutes - reasonable fast monitoring
  validationCacheDuration: 1e4
  // 10 seconds cache for better performance
};
function _o() {
  switch ("production") {
    case "production":
      return ko;
    case "development":
      return mo;
    default:
      return ke;
  }
}
function ua(o) {
  return {
    ...ke,
    ...o
  };
}
const hs = {
  default: ke,
  fast: fs,
  conservative: gs,
  development: mo,
  production: ko
};
function da(o) {
  return hs[o];
}
const pa = {
  immediate: "Immediate (0-2 seconds) - When logout is detected via auth events",
  fast: "Fast (2-5 seconds) - When fast monitoring is active",
  normal: "Normal (up to 30 seconds) - Regular monitoring interval",
  conservative: "Conservative (up to 60 seconds) - Less frequent monitoring"
}, fa = {
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
function ws(o) {
  const s = I(!0), a = I(null), i = I(!1), h = I(!1), v = I(null), C = I(null), T = I(null), W = { ..._o(), ...o }, p = W.normalCheckInterval, d = W.fastCheckInterval, c = W.fastMonitoringDuration, u = W.maxRetryAttempts, D = W.retryDelay, _ = j(() => !s.value && a.value !== null), f = j(
    () => {
      var A, x;
      return ((A = a.value) == null ? void 0 : A.canRetry) && ((x = a.value) == null ? void 0 : x.type) !== "manual_check_failed";
    }
  ), H = (A) => {
    var K;
    if (typeof document > "u")
      return null;
    const P = `; ${document.cookie}`.split(`; ${A}=`);
    return P.length === 2 && ((K = P.pop()) == null ? void 0 : K.split(";").shift()) || null;
  }, V = async () => {
    var A, x;
    try {
      console.log("[SessionMonitor] Validating session..."), fo([le, ce]);
      const P = H("sb-access-token"), K = H("sb-refresh-token");
      if (!P || !K)
        return console.log("[SessionMonitor] No tokens found in cookies"), !1;
      const te = await Z();
      let he = null, pe = null;
      for (let we = 1; we <= 2; we++)
        try {
          const _e = await te.auth.getSession();
          he = _e.data.session, pe = _e.error;
          break;
        } catch (_e) {
          if (console.warn(`[SessionMonitor] Network error on attempt ${we}:`, _e), we === 2)
            return console.log("[SessionMonitor] Network issues detected, maintaining current session state"), s.value;
          await new Promise((Pe) => setTimeout(Pe, 1e3));
        }
      if (pe)
        return console.warn("[SessionMonitor] Error getting session:", pe), (A = pe.message) != null && A.includes("Invalid JWT") || (x = pe.message) != null && x.includes("JWT expired") ? (console.log("[SessionMonitor] JWT may be expired, attempting refresh..."), await E(te) ? (console.log("[SessionMonitor] Token refresh successful after JWT error"), v.value = /* @__PURE__ */ new Date(), !0) : !1) : s.value;
      if (!he || !he.user)
        return console.log("[SessionMonitor] No valid session found"), !1;
      const X = /* @__PURE__ */ new Date(), ee = new Date(he.expires_at * 1e3), fe = 5 * 60 * 1e3;
      return X >= new Date(ee.getTime() - fe) ? (console.log("[SessionMonitor] Session is close to expiry or expired, attempting refresh..."), await E(te) ? (console.log("[SessionMonitor] Token refresh successful"), v.value = /* @__PURE__ */ new Date(), !0) : (console.log("[SessionMonitor] Token refresh failed, session is expired"), !1)) : (console.log("[SessionMonitor] Session is valid"), v.value = /* @__PURE__ */ new Date(), !0);
    } catch (P) {
      return console.error("[SessionMonitor] Error validating session:", P), s.value;
    }
  }, E = async (A) => {
    try {
      console.log("[SessionMonitor] Attempting token refresh...");
      const { data: x, error: P } = await A.auth.refreshSession();
      return P ? (console.warn("[SessionMonitor] Token refresh failed:", P), !1) : x.session ? (console.log("[SessionMonitor] Token refresh successful, updating cookies..."), ue(le, x.session.access_token, 60 * 60 * 24 * 365), ue(ce, x.session.refresh_token, 60 * 60 * 24 * 365), Re(), !0) : !1;
    } catch (x) {
      return console.error("[SessionMonitor] Error during token refresh:", x), !1;
    }
  }, m = async () => {
    try {
      console.log("[SessionMonitor] Attempting to restore session...");
      const A = H("sb-access-token"), x = H("sb-refresh-token");
      if (!A || !x)
        return console.log("[SessionMonitor] No tokens available for restoration"), !1;
      const P = await Z(), { data: K, error: te } = await P.auth.setSession({
        access_token: A,
        refresh_token: x
      });
      return te ? (console.warn("[SessionMonitor] Error restoring session:", te), !1) : K.session && K.session.user ? (console.log("[SessionMonitor] Session restored successfully"), v.value = /* @__PURE__ */ new Date(), !0) : !1;
    } catch (A) {
      return console.error("[SessionMonitor] Error restoring session:", A), !1;
    }
  }, R = (A, x, P = !0) => {
    console.warn("[SessionMonitor] Session loss detected:", { type: A, message: x }), s.value = !1, a.value = {
      type: A,
      message: x,
      timestamp: /* @__PURE__ */ new Date(),
      canRetry: P
    };
  }, k = async () => {
    console.log("[SessionMonitor] Retrying session validation...");
    for (let A = 1; A <= u; A++) {
      if (console.log(`[SessionMonitor] Retry attempt ${A}/${u}`), A > 1 && await new Promise((K) => setTimeout(K, D)), await m() && await V())
        return console.log("[SessionMonitor] Session restored and validated successfully"), s.value = !0, a.value = null, !0;
      if (await V())
        return console.log("[SessionMonitor] Session validated successfully on retry"), s.value = !0, a.value = null, !0;
    }
    return console.log("[SessionMonitor] All retry attempts failed"), !1;
  }, b = () => {
    console.log("[SessionMonitor] Clearing session loss state"), s.value = !0, a.value = null;
  }, se = () => {
    if (i.value) {
      console.log("[SessionMonitor] Already monitoring, skipping start");
      return;
    }
    console.log("[SessionMonitor] Starting session monitoring..."), i.value = !0, setTimeout(async () => {
      console.log("[SessionMonitor] Performing initial session validation..."), await V() ? console.log("[SessionMonitor] Initial validation successful") : (console.log("[SessionMonitor] Initial validation failed, but waiting for confirmation..."), setTimeout(async () => {
        await V() || R("session_expired", "Your session has expired. Please log in again.", !0);
      }, 3e3));
    }, 2e3), C.value = setInterval(async () => {
      console.log("[SessionMonitor] Periodic session check...");
      const A = await V();
      !A && s.value ? (console.log("[SessionMonitor] Session validation failed, performing confirmation check..."), setTimeout(async () => {
        await V() || R("session_expired", "Your session has expired. Please log in again.", !0);
      }, 2e3)) : A && !s.value && (console.log("[SessionMonitor] Session recovered"), b());
    }, p);
  }, z = () => {
    if (h.value) {
      console.log("[SessionMonitor] Fast monitoring already active");
      return;
    }
    console.log("[SessionMonitor] Starting fast monitoring (5s intervals)..."), h.value = !0, T.value && clearInterval(T.value), T.value = setInterval(async () => {
      console.log("[SessionMonitor] Fast session check...");
      const A = await V();
      !A && s.value ? (console.log("[SessionMonitor] Fast monitoring detected potential session loss, confirming..."), setTimeout(async () => {
        await V() || (R("session_expired", "Your session has expired. Please log in again.", !0), N());
      }, 1e3)) : A && !s.value && (console.log("[SessionMonitor] Session recovered"), b(), N());
    }, d), setTimeout(() => {
      h.value && (console.log(`[SessionMonitor] Auto-stopping fast monitoring after ${c / 1e3} seconds`), N());
    }, c);
  }, N = () => {
    h.value && (console.log("[SessionMonitor] Stopping fast monitoring..."), h.value = !1, T.value && (clearInterval(T.value), T.value = null));
  }, S = () => {
    i.value && (console.log("[SessionMonitor] Stopping session monitoring..."), i.value = !1, C.value && (clearInterval(C.value), C.value = null), N());
  }, G = async () => {
    console.log("[SessionMonitor] Manual session check requested");
    const A = await V();
    return !A && !await m() ? (R("manual_check_failed", "Session validation failed. Please log in again.", !1), !1) : A;
  }, O = () => {
    console.log("[SessionMonitor] Network error detected, but not triggering immediate session loss"), s.value || R("network_error", "Network connection lost. Please check your internet connection and try again.", !0);
  }, de = () => {
    if (typeof window > "u")
      return;
    const A = [], x = () => {
      var X;
      console.log("[SessionMonitor] Network connection restored"), _.value && ((X = a.value) == null ? void 0 : X.type) === "network_error" && setTimeout(() => k(), 1e3);
    }, P = () => {
      console.log("[SessionMonitor] Network connection lost"), O();
    }, K = (X) => {
      console.log("[SessionMonitor] Logout detected, starting fast monitoring for immediate detection"), z();
    }, te = async () => {
      document.visibilityState === "visible" && (console.log("[SessionMonitor] Page became visible, validating session..."), fo([le, ce]), await new Promise((ee) => setTimeout(ee, 500)), await V() ? (console.log("[SessionMonitor] Session is still valid after visibility change"), _.value && b()) : (console.log("[SessionMonitor] Session validation failed after visibility change, will retry..."), await V() && (console.log("[SessionMonitor] Session recovered on retry after visibility change"), _.value && b())));
    }, he = async (X) => {
      switch (console.log("[SessionMonitor] Received auth broadcast:", X.type), X.type) {
        case "SIGNED_IN":
        case "SESSION_RESTORED":
        case "TOKEN_REFRESHED":
          X.accessToken && X.refreshToken && (console.log("[SessionMonitor] Updating local session from broadcast"), ue(le, X.accessToken, 60 * 60 * 24 * 365), ue(ce, X.refreshToken, 60 * 60 * 24 * 365), Re()), await V() && (console.log("[SessionMonitor] Session validated after auth broadcast"), s.value = !0, _.value && b());
          break;
        case "SIGNED_OUT":
          console.log("[SessionMonitor] Sign-out detected from broadcast"), R("session_expired", "You have been signed out in another window.", !1);
          break;
      }
    };
    window.addEventListener("online", x), window.addEventListener("offline", P), window.addEventListener("session-logout-detected", K), document.addEventListener("visibilitychange", te), A.push(() => {
      window.removeEventListener("online", x), window.removeEventListener("offline", P), window.removeEventListener("session-logout-detected", K), document.removeEventListener("visibilitychange", te);
    });
    const pe = Qo(he);
    return A.push(pe), () => {
      A.forEach((X) => X());
    };
  };
  return Ee(() => {
    console.log("[SessionMonitor] Mounted, setting up monitoring"), se(), de();
  }), wo(() => {
    console.log("[SessionMonitor] Unmounted, cleaning up"), S();
  }), {
    // State
    isSessionValid: s,
    sessionLossEvent: a,
    isMonitoring: i,
    isFastMonitoring: h,
    lastValidSession: v,
    // Computed
    hasSessionLoss: _,
    canRetrySession: f,
    // Methods
    validateSession: V,
    restoreSession: m,
    retrySession: k,
    clearSessionLoss: b,
    startMonitoring: se,
    stopMonitoring: S,
    startFastMonitoring: z,
    stopFastMonitoring: N,
    checkSession: G,
    handleNetworkError: O
  };
}
const vs = es("workspace", () => {
  const o = I(null), s = I([]), a = I(null), i = (p) => {
    o.value = p, localStorage.setItem("current_workspace", JSON.stringify(p));
  }, h = (p) => {
    s.value = p, localStorage.setItem("available_workspaces", JSON.stringify(p));
  };
  return {
    currentWorkspace: o,
    workspaces: s,
    user: a,
    setCurrentWorkspace: i,
    setWorkspaces: h,
    setUser: (p) => {
      a.value = p, localStorage.setItem("user_info", JSON.stringify(p));
    },
    loadPersistedData: () => {
      const p = localStorage.getItem("current_workspace");
      if (p)
        try {
          o.value = JSON.parse(p);
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
    loadWorkspaces: async (p = !1) => {
      try {
        const { data: { user: d } } = await Me.auth.getUser();
        if (!d)
          return [];
        let c = Me.from("workspaces").select(`
          id, title, description, parent_workspace_id, created_by, archived, created_at, git_repo, 
          workspace_access!inner ( access_type, shared_with_user_id ),
          workspace_activities!left ( updated_at )
        `).eq("workspace_access.shared_with_user_id", d.id);
        p || (c = c.eq("archived", !1));
        const { data: u, error: D } = await c;
        if (D)
          throw D;
        const _ = /* @__PURE__ */ new Map();
        (u || []).forEach((m) => {
          (m.workspace_access || []).forEach((R) => {
            R.shared_with_user_id === d.id && _.set(m.id, R);
          });
        });
        const f = [...new Set(
          (u || []).filter((m) => m.parent_workspace_id).map((m) => m.parent_workspace_id).filter((m) => !_.has(m))
        )];
        let H = [];
        if (f.length) {
          let m = Me.from("workspaces").select("id, title, description, parent_workspace_id, created_by, archived, created_at").in("id", f);
          p || (m = m.eq("archived", !1));
          const { data: R, error: k } = await m;
          if (k)
            throw k;
          H = R || [];
        }
        const E = [...u || [], ...H].map((m) => {
          var R, k, b;
          return {
            id: m.id,
            title: m.title,
            description: m.description || "No description",
            parent_workspace_id: m.parent_workspace_id,
            created_by: m.created_by,
            archived: m.archived,
            created_at: m.created_at,
            latest_activity: ((k = (R = m.workspace_activities) == null ? void 0 : R[0]) == null ? void 0 : k.updated_at) || m.created_at,
            hasAccess: _.has(m.id),
            accessType: ((b = _.get(m.id)) == null ? void 0 : b.access_type) || null
          };
        });
        return E.sort((m, R) => new Date(R.latest_activity) - new Date(m.latest_activity)), h(E), E;
      } catch (d) {
        return console.error("loadWorkspaces error", d), [];
      }
    }
  };
});
let Ce = null;
const ze = (o) => !(!o || typeof o != "string" || o.trim().length === 0 || o.trim().length < 20), ms = async () => {
  try {
    const { createClient: o } = await import("@supabase/supabase-js"), s = { VITE_SUPABASE_URL: void 0, VITE_SUPABASE_ANON_KEY: void 0, BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_SUPABASE_SERVICE_ROLE_KEY || { VITE_SUPABASE_URL: void 0, VITE_SUPABASE_ANON_KEY: void 0, BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_SUPABASE_SERVICE_KEY || window.__SUPABASE_SERVICE_KEY__;
    return s ? (console.log("[GitHub Config] Using service role key for settings access"), o(
      "https://sb.aiworkspace.pro",
      s
    )) : (console.log("[GitHub Config] No service key found, using regular client"), await Z());
  } catch (o) {
    return console.warn("[GitHub Config] Failed to create admin client, using regular client:", o), await Z();
  }
}, ks = async () => {
  var o;
  try {
    console.log("[GitHub Config] Attempting to fetch GitHub token from database...");
    const s = await ms();
    console.log("[GitHub Config] Testing table access methods...");
    const { data: a, error: i } = await s.from("settings").select("key_name, key_value");
    let h = a, v = i;
    if (i && i.code === "PGRST301") {
      console.log("[GitHub Config] Direct access blocked by RLS, trying alternative method...");
      const { data: d, error: c } = await s.from("settings").select("key_name, key_value").eq("key_name", "github_token");
      h = d, v = c;
    }
    if (console.log("[GitHub Config] All settings rows:", h), console.log("[GitHub Config] Query error (if any):", v), h) {
      console.log("[GitHub Config] Looking for github_token in rows...");
      const d = h.filter(
        (c) => c.key_name && (c.key_name.toLowerCase() === "github_token" || c.key_name === "github_token" || c.key_name.includes("github"))
      );
      if (console.log("[GitHub Config] GitHub-related rows found:", d), d.length > 0) {
        const c = (o = d[0].key_value) == null ? void 0 : o.trim();
        if (c && ze(c))
          return console.log("🔧 GitHub token found in general query!"), console.log("Token preview:", c.substring(0, 8) + "..." + c.substring(c.length - 4)), console.log("Token length:", c.length), console.log("Token starts with:", c.substring(0, 4)), c;
      }
    }
    const { data: C, error: T, count: W } = await s.from("settings").select("key_value", { count: "exact" }).eq("key_name", "github_token");
    if (console.log("[GitHub Config] Specific query result:", { data: C, error: T, count: W }), T)
      return console.warn("[GitHub Config] Database error details:", {
        code: T.code,
        message: T.message,
        details: T.details,
        hint: T.hint
      }), T.code === "PGRST116" ? console.info("[GitHub Config] No GitHub token configured in database (PGRST116)") : console.warn("[GitHub Config] Error fetching token from database:", T.message), null;
    const p = Array.isArray(C) ? C[0] : C;
    if (p != null && p.key_value) {
      const d = p.key_value.trim();
      return ze(d) ? (console.log("🔧 GitHub token fetched from database successfully"), console.log("Token preview:", d.substring(0, 8) + "..." + d.substring(d.length - 4)), console.log("Token length:", d.length), console.log("Token starts with:", d.substring(0, 4)), d) : (console.warn("[GitHub Config] Invalid GitHub token format in database"), null);
    }
    return console.warn("[GitHub Config] No GitHub token found in database - data was:", p), null;
  } catch (s) {
    return console.error("[GitHub Config] Failed to fetch token from database:", s), null;
  }
}, ga = (o) => {
  if (!(o != null && o.token) || !ze(o.token))
    throw console.error("[GitHub Config] Invalid GitHub token provided"), new Error("Invalid GitHub token provided");
  Ce = o.token.trim(), console.log("🔧 GitHub token configured manually");
}, Ye = async () => {
  if (Ce)
    return Ce;
  try {
    const o = await ks();
    if (o)
      return Ce = o, o;
  } catch (o) {
    console.error("[GitHub Config] Failed to fetch token:", o);
  }
  return null;
}, ha = async () => {
  if (Ce !== null)
    return !0;
  try {
    return await Ye() !== null;
  } catch (o) {
    return console.error("[GitHub Config] Error checking configuration:", o), !1;
  }
}, _s = () => {
  Ce = null, console.log("🔧 GitHub token cache cleared");
}, wa = async () => (_s(), await Ye()), va = async () => {
  try {
    console.log("[GitHub Config Debug] Testing database connection...");
    const o = await Z(), { data: s, error: a } = await o.from("settings").select("*").limit(10);
    console.log("[GitHub Config Debug] Settings table sample (first 10 rows):", s), console.log("[GitHub Config Debug] Query error:", a), s && (console.log("[GitHub Config Debug] Column structure of first row:", Object.keys(s[0] || {})), console.log("[GitHub Config Debug] All key_name values:", s.map((p) => p.key_name)));
    const { data: i, error: h } = await o.from("settings").select("*").eq("key_name", "github_token");
    console.log("[GitHub Config Debug] Exact github_token match:", i), console.log("[GitHub Config Debug] Exact match error:", h);
    const { data: v, error: C } = await o.from("settings").select("*").ilike("key_name", "%github%");
    console.log("[GitHub Config Debug] Case-insensitive GitHub search:", v), console.log("[GitHub Config Debug] Case-insensitive error:", C);
    const { data: T, error: W } = await o.rpc("get_table_columns", { table_name: "settings" }).limit(1);
    console.log("[GitHub Config Debug] Table structure info:", T), console.log("[GitHub Config Debug] Table structure error:", W);
  } catch (o) {
    console.error("[GitHub Config Debug] Database connection test failed:", o);
  }
};
function ys() {
  const o = I({
    user: null,
    isAuthenticated: !1,
    isLoading: !0,
    error: null
  }), s = I(window.location.href), a = async () => {
    var p, d, c, u, D, _, f, H;
    try {
      o.value.isLoading = !0;
      const V = await Z(), { data: { session: E }, error: m } = await V.auth.getSession();
      if (m) {
        console.error("Error checking auth status:", m), o.value = {
          user: null,
          isAuthenticated: !1,
          isLoading: !1,
          error: m.message
        };
        return;
      }
      E != null && E.user ? (o.value = {
        user: {
          id: E.user.id,
          email: E.user.email || "",
          name: ((p = E.user.user_metadata) == null ? void 0 : p.full_name) || ((d = E.user.user_metadata) == null ? void 0 : d.name) || ((c = E.user.email) == null ? void 0 : c.split("@")[0]) || "User",
          avatar_url: ((u = E.user.user_metadata) == null ? void 0 : u.avatar_url) || ((D = E.user.user_metadata) == null ? void 0 : D.picture) || null,
          initials: (((_ = E.user.user_metadata) == null ? void 0 : _.full_name) || ((f = E.user.user_metadata) == null ? void 0 : f.name) || ((H = E.user.email) == null ? void 0 : H.split("@")[0]) || "U").split(" ").map((R) => R[0]).join("").toUpperCase().substring(0, 2)
        },
        isAuthenticated: !0,
        isLoading: !1,
        error: null
      }, E.access_token && ue(le, E.access_token), E.refresh_token && ue(ce, E.refresh_token), Re()) : o.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      };
    } catch (V) {
      console.error("Auth check failed:", V), o.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: V.message || "Authentication check failed"
      };
    }
  }, i = async (p, d) => {
    try {
      const c = await Z(), { error: u } = await c.auth.signInWithPassword({
        email: p,
        password: d
      });
      return u ? { success: !1, error: u.message } : (await a(), sessionStorage.setItem("post-login-redirect", s.value), { success: !0 });
    } catch (c) {
      return console.error("Login error:", c), { success: !1, error: c.message || "Login failed" };
    }
  }, h = async (p, d) => {
    var c;
    try {
      const u = await Z(), { data: D, error: _ } = await u.auth.signUp({
        email: p,
        password: d
      });
      return _ ? { success: !1, error: _.message } : D.user && !D.user.email_confirmed_at ? { success: !0, needsConfirmation: !0 } : (c = D.session) != null && c.user ? (await a(), sessionStorage.setItem("post-login-redirect", s.value), { success: !0 }) : { success: !1, error: "No session created" };
    } catch (u) {
      return console.error("Signup error:", u), { success: !1, error: u.message || "Signup failed" };
    }
  }, v = async (p) => {
    try {
      const d = `${window.location.origin}/auth/callback`;
      console.log("[OAuth] Starting login with provider:", p), console.log("[OAuth] Redirect URL:", d), console.log("[OAuth] Current URL:", s.value), console.log("[OAuth] Current origin:", window.location.origin);
      const c = await Z(), { error: u } = await c.auth.signInWithOAuth({
        provider: p,
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
  }, C = async () => {
    try {
      const p = await Z(), { error: d } = await p.auth.signOut();
      d && console.error("Logout error:", d), o.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      }, Se(le), Se(ce), Be();
    } catch (p) {
      console.error("Logout error:", p);
    }
  }, T = async (p) => {
    try {
      const d = await Z(), { error: c } = await d.auth.resetPasswordForEmail(p, {
        redirectTo: `${window.location.origin}/auth/reset-password`
      });
      return c ? { success: !1, error: c.message } : { success: !0 };
    } catch (d) {
      return console.error("Password reset error:", d), { success: !1, error: d.message || "Password reset failed" };
    }
  }, W = async () => {
    try {
      (await Z()).auth.onAuthStateChange((d, c) => {
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
            }, Se(le), Se(ce), Be();
            break;
          case "TOKEN_REFRESHED":
            c != null && c.access_token && ue(le, c.access_token), c != null && c.refresh_token && ue(ce, c.refresh_token), Re();
            break;
          case "USER_UPDATED":
            c != null && c.user && a();
            break;
        }
      });
    } catch (p) {
      console.warn("Failed to setup auth listener:", p);
    }
  };
  return Ee(async () => {
    W(), await a();
  }), ge(() => window.location.href, (p) => {
    s.value = p;
  }), {
    authState: j(() => o.value),
    isAuthenticated: j(() => o.value.isAuthenticated),
    user: j(() => o.value.user),
    isLoading: j(() => o.value.isLoading),
    checkAuthStatus: a,
    loginWithEmail: i,
    signupWithEmail: h,
    loginWithProvider: v,
    logout: C,
    resetPassword: T,
    currentUrl: j(() => s.value)
  };
}
const bs = { class: "login-container" }, Ss = { class: "logo-section" }, Cs = { class: "login-buttons" }, Es = {
  key: 0,
  class: "forgot-password"
}, As = { class: "signup-link" }, Is = /* @__PURE__ */ ie({
  __name: "LoginModal",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue", "login-success"],
  setup(o, { emit: s }) {
    const a = o, i = s, h = j({
      get: () => a.modelValue,
      set: (k) => i("update:modelValue", k)
    }), v = I(!1), C = I(!1), T = I(), { loginWithEmail: W, signupWithEmail: p, loginWithProvider: d, resetPassword: c } = ys(), u = Fo({
      email: "",
      password: "",
      confirmPassword: ""
    }), D = j(() => ({
      email: [
        { required: !0, message: "Please enter your email", trigger: "blur" },
        { type: "email", message: "Please enter a valid email", trigger: "blur" }
      ],
      password: [
        { required: !0, message: "Please enter your password", trigger: "blur" },
        { min: 6, message: "Password must be at least 6 characters", trigger: "blur" }
      ],
      ...v.value ? {
        confirmPassword: [
          { required: !0, message: "Please confirm your password", trigger: "blur" },
          {
            validator: (k, b, se) => {
              b !== u.password ? se(new Error("Passwords do not match")) : se();
            },
            trigger: "blur"
          }
        ]
      } : {}
    })), _ = () => {
      var k;
      v.value = !v.value, u.email = "", u.password = "", u.confirmPassword = "", (k = T.value) == null || k.clearValidate();
    }, f = () => {
      var k;
      h.value = !1, u.email = "", u.password = "", u.confirmPassword = "", v.value = !1, (k = T.value) == null || k.clearValidate();
    }, H = async () => {
      if (T.value)
        try {
          await T.value.validate(), C.value = !0, v.value ? await E() : await V();
        } catch (k) {
          console.error("Form validation failed:", k);
        } finally {
          C.value = !1;
        }
    }, V = async () => {
      const k = await W(u.email, u.password);
      k.success ? (F.success("Login successful"), i("login-success", { email: u.email }), f()) : F.error("Login failed: " + k.error);
    }, E = async () => {
      const k = await p(u.email, u.password);
      k.success ? k.needsConfirmation ? F.success("Please check your email to confirm your account") : (F.success("Account created successfully"), i("login-success", { email: u.email }), f()) : F.error("Signup failed: " + k.error);
    }, m = async (k) => {
      const b = await d(k);
      b.success ? F.success("Redirecting to login provider...") : F.error("Login failed: " + b.error);
    }, R = async () => {
      if (!u.email) {
        F.warning("Please enter your email address first");
        return;
      }
      const k = await c(u.email);
      k.success ? F.success("Password reset email sent! Please check your inbox.") : F.error("Failed to send reset email: " + k.error);
    };
    return (k, b) => {
      const se = oe("el-icon"), z = oe("el-input"), N = oe("el-form-item"), S = oe("el-button"), G = oe("el-dialog");
      return y(), Q(G, {
        modelValue: h.value,
        "onUpdate:modelValue": b[6] || (b[6] = (O) => h.value = O),
        title: "",
        width: "500px",
        "close-on-click-modal": !1,
        "close-on-press-escape": !0,
        "show-close": !0,
        class: "login-modal",
        onClose: f
      }, {
        default: g(() => [
          n("div", bs, [
            n("div", Ss, [
              n("h2", null, q(v.value ? "Create Account" : "Welcome Back"), 1),
              n("p", null, q(v.value ? "Sign up to get started with your account" : "Sign in to continue to your account"), 1)
            ]),
            w($(zo), {
              model: u,
              rules: D.value,
              ref_key: "formRef",
              ref: T,
              class: "login-form",
              onSubmit: ne(H, ["prevent"])
            }, {
              default: g(() => [
                w(N, { prop: "email" }, {
                  default: g(() => [
                    w(z, {
                      modelValue: u.email,
                      "onUpdate:modelValue": b[0] || (b[0] = (O) => u.email = O),
                      placeholder: "Email",
                      type: "email",
                      size: "large",
                      class: "form-input"
                    }, {
                      prefix: g(() => [
                        w(se, null, {
                          default: g(() => [
                            w($(ns))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                w(N, { prop: "password" }, {
                  default: g(() => [
                    w(z, {
                      modelValue: u.password,
                      "onUpdate:modelValue": b[1] || (b[1] = (O) => u.password = O),
                      placeholder: "Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: g(() => [
                        w(se, null, {
                          default: g(() => [
                            w($(ho))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                v.value ? (y(), Q(N, {
                  key: 0,
                  prop: "confirmPassword"
                }, {
                  default: g(() => [
                    w(z, {
                      modelValue: u.confirmPassword,
                      "onUpdate:modelValue": b[2] || (b[2] = (O) => u.confirmPassword = O),
                      placeholder: "Confirm Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: g(() => [
                        w(se, null, {
                          default: g(() => [
                            w($(ho))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                })) : B("", !0),
                w(N, null, {
                  default: g(() => [
                    w(S, {
                      type: "primary",
                      class: "submit-button",
                      loading: C.value,
                      onClick: H,
                      size: "large"
                    }, {
                      default: g(() => [
                        J(q(v.value ? "Sign Up" : "Sign In"), 1)
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
            n("div", Cs, [
              w(S, {
                class: "login-button google",
                onClick: b[3] || (b[3] = (O) => m("google")),
                size: "large"
              }, {
                default: g(() => [...b[7] || (b[7] = [
                  n("span", { class: "social-icon" }, "G", -1),
                  J(" Google ", -1)
                ])]),
                _: 1
              }),
              w(S, {
                class: "login-button github",
                onClick: b[4] || (b[4] = (O) => m("github")),
                size: "large"
              }, {
                default: g(() => [...b[8] || (b[8] = [
                  n("span", { class: "social-icon" }, "⚡", -1),
                  J(" GitHub ", -1)
                ])]),
                _: 1
              }),
              w(S, {
                class: "login-button twitter",
                onClick: b[5] || (b[5] = (O) => m("twitter")),
                size: "large"
              }, {
                default: g(() => [...b[9] || (b[9] = [
                  n("span", { class: "social-icon" }, "X", -1),
                  J(" X (Twitter) ", -1)
                ])]),
                _: 1
              })
            ]),
            b[11] || (b[11] = n("div", { class: "terms" }, " By continuing, you agree to AI Workspace's Terms of Service and Privacy Policy ", -1)),
            v.value ? B("", !0) : (y(), M("div", Es, [
              n("a", {
                href: "#",
                onClick: ne(R, ["prevent"])
              }, "Forgot Password?")
            ])),
            n("div", As, [
              J(q(v.value ? "Already have an account?" : "Don't have an account?") + " ", 1),
              n("a", {
                href: "#",
                onClick: ne(_, ["prevent"])
              }, q(v.value ? "Sign in" : "Sign up"), 1)
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
  for (const [i, h] of s)
    a[i] = h;
  return a;
}, Ls = /* @__PURE__ */ xe(Is, [["__scopeId", "data-v-684a3f28"]]), Rs = { class: "session-loss-content" }, Ts = { class: "session-loss-icon" }, Vs = { class: "session-loss-message" }, Hs = {
  key: 0,
  class: "session-loss-details"
}, Us = { class: "detail-item" }, Ms = { class: "detail-value" }, Ds = { class: "detail-item" }, xs = { class: "detail-value" }, Ps = { class: "session-loss-actions" }, Ws = {
  key: 0,
  class: "retry-status"
}, $s = { class: "retry-message" }, Ns = /* @__PURE__ */ ie({
  __name: "SessionLossModal",
  props: {
    modelValue: { type: Boolean },
    sessionLossEvent: {},
    canRetrySession: { type: Boolean }
  },
  emits: ["update:modelValue", "retry", "login", "refresh"],
  setup(o, { emit: s }) {
    const a = o, i = s, h = I(!1), v = I(0), C = I(void 0), T = I(""), W = j({
      get: () => a.modelValue,
      set: (_) => i("update:modelValue", _)
    }), p = (_) => {
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
      if (h.value)
        return;
      h.value = !0, v.value = 0, C.value = void 0, T.value = "Attempting to restore session...";
      const _ = setInterval(() => {
        v.value < 90 && (v.value += Math.random() * 20);
      }, 200);
      try {
        i("retry"), await new Promise((f) => setTimeout(f, 2e3)), v.value = 100, C.value = "success", T.value = "Session restored successfully!", setTimeout(() => {
          W.value = !1;
        }, 1e3);
      } catch {
        v.value = 100, C.value = "exception", T.value = "Failed to restore session. Please log in again.", F.error("Session restoration failed");
      } finally {
        clearInterval(_), setTimeout(() => {
          h.value = !1, v.value = 0, C.value = void 0, T.value = "";
        }, 3e3);
      }
    }, u = () => {
      i("login"), W.value = !1;
    }, D = () => {
      i("refresh"), window.location.reload();
    };
    return ge(() => a.sessionLossEvent, (_) => {
      _ && (h.value = !1, v.value = 0, C.value = void 0, T.value = "");
    }), (_, f) => (y(), Q($(Ko), {
      modelValue: W.value,
      "onUpdate:modelValue": f[0] || (f[0] = (H) => W.value = H),
      title: "Session Expired",
      width: "500px",
      "close-on-click-modal": !1,
      "close-on-press-escape": !1,
      "show-close": !1,
      class: "session-loss-modal",
      center: ""
    }, {
      default: g(() => {
        var H;
        return [
          n("div", Rs, [
            n("div", Ts, [
              w($(Ue), {
                size: "48",
                color: "#f56c6c"
              }, {
                default: g(() => [
                  w($(vo))
                ]),
                _: 1
              })
            ]),
            n("div", Vs, [
              f[3] || (f[3] = n("h3", null, "Your session has expired", -1)),
              n("p", null, q(((H = o.sessionLossEvent) == null ? void 0 : H.message) || "Please log in again to continue using the application."), 1),
              o.sessionLossEvent ? (y(), M("div", Hs, [
                n("div", Us, [
                  f[1] || (f[1] = n("span", { class: "detail-label" }, "Issue:", -1)),
                  n("span", Ms, q(p(o.sessionLossEvent.type)), 1)
                ]),
                n("div", Ds, [
                  f[2] || (f[2] = n("span", { class: "detail-label" }, "Time:", -1)),
                  n("span", xs, q(d(o.sessionLossEvent.timestamp)), 1)
                ])
              ])) : B("", !0)
            ]),
            n("div", Ps, [
              o.canRetrySession && !h.value ? (y(), Q($(Oe), {
                key: 0,
                type: "primary",
                onClick: c,
                loading: h.value
              }, {
                default: g(() => [
                  w($(Ue), null, {
                    default: g(() => [
                      w($(Fe))
                    ]),
                    _: 1
                  }),
                  f[4] || (f[4] = J(" Try Again ", -1))
                ]),
                _: 1
              }, 8, ["loading"])) : B("", !0),
              w($(Oe), {
                type: "primary",
                onClick: u,
                disabled: h.value
              }, {
                default: g(() => [
                  w($(Ue), null, {
                    default: g(() => [
                      w($(je))
                    ]),
                    _: 1
                  }),
                  f[5] || (f[5] = J(" Log In ", -1))
                ]),
                _: 1
              }, 8, ["disabled"]),
              o.canRetrySession ? B("", !0) : (y(), Q($(Oe), {
                key: 1,
                type: "info",
                onClick: D,
                disabled: h.value
              }, {
                default: g(() => [
                  w($(Ue), null, {
                    default: g(() => [
                      w($(Fe))
                    ]),
                    _: 1
                  }),
                  f[6] || (f[6] = J(" Refresh Page ", -1))
                ]),
                _: 1
              }, 8, ["disabled"]))
            ]),
            h.value ? (y(), M("div", Ws, [
              w($(Yo), {
                percentage: v.value,
                status: C.value,
                "stroke-width": 6
              }, null, 8, ["percentage", "status"]),
              n("p", $s, q(T.value), 1)
            ])) : B("", !0)
          ])
        ];
      }),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const Gs = /* @__PURE__ */ xe(Ns, [["__scopeId", "data-v-0dd27f7f"]]), Os = { class: "aiworkspace-header" }, Bs = {
  key: 0,
  class: "header-content header-loading"
}, Fs = { class: "header-center" }, js = { class: "loading-text" }, zs = { key: 0 }, Ks = { key: 1 }, Ys = {
  key: 1,
  class: "header-content header-fallback"
}, qs = {
  key: 2,
  class: "header-content header-restricted"
}, Js = { class: "header-center" }, Xs = { class: "restricted-text" }, Qs = { class: "header-right" }, Zs = {
  key: 3,
  class: "header-content"
}, et = { class: "header-left" }, ot = { class: "logo-section" }, st = {
  href: "/",
  class: "logo"
}, tt = ["src"], at = {
  key: 1,
  class: "text-logo"
}, rt = {
  key: 0,
  class: "header-center"
}, nt = { class: "main-navigation" }, it = { class: "nav-item" }, lt = {
  href: "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard",
  class: "nav-link"
}, ct = { class: "workspace-dropdown-item" }, ut = ["href"], dt = { class: "workspace-icon" }, pt = {
  key: 1,
  class: "nav-divider"
}, ft = { class: "nav-item" }, gt = ["href", "onClick"], ht = {
  key: 0,
  class: "header-placeholder"
}, wt = {
  key: 1,
  class: "header-placeholder"
}, vt = { class: "header-right" }, mt = { class: "user-profile" }, kt = { class: "user-info" }, _t = { class: "user-name" }, yt = { class: "user-avatar" }, bt = ["src", "alt"], St = {
  key: 1,
  class: "avatar-placeholder"
}, Ct = { class: "version-info" }, Et = { class: "version-hash" }, At = {
  key: 4,
  class: "header-content header-unauthenticated"
}, It = { class: "header-left" }, Lt = { class: "logo-section" }, Rt = {
  href: "/",
  class: "logo"
}, Tt = ["src"], Vt = {
  key: 1,
  class: "text-logo"
}, Ht = {
  key: 0,
  class: "header-right"
}, Ut = { class: "workspace-list" }, Mt = ["onClick"], Dt = { class: "workspace-icon" }, xt = { class: "workspace-details" }, Pt = { class: "workspace-members" }, Wt = {
  key: 0,
  class: "current-indicator"
}, $t = { class: "update-content" }, Nt = { class: "update-actions" }, Le = 50, Gt = 6e4, Ot = 30, Bt = /* @__PURE__ */ ie({
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
    const a = o, i = s, { authState: h, logout: v, isLoading: C } = ps(), {
      isSessionValid: T,
      sessionLossEvent: W,
      hasSessionLoss: p,
      canRetrySession: d,
      retrySession: c,
      clearSessionLoss: u
    } = ws(), D = () => {
      try {
        return vs();
      } catch {
        return console.warn("[AIWorkspaceHeader] Pinia not initialized yet, using fallback state"), null;
      }
    }, _ = () => {
      try {
        return typeof window < "u" ? !!window.__PINIA__ || !!window.Pinia : !1;
      } catch {
        return !1;
      }
    }, f = I(D()), H = j(() => !!f.value), V = I(0), E = () => {
      if (!f.value && V.value < Le) {
        if (_()) {
          const t = D();
          if (t) {
            f.value = t, console.log("[AIWorkspaceHeader] Pinia store initialized successfully");
            return;
          }
        }
        V.value++, setTimeout(E, 100);
      } else
        V.value >= Le && console.warn("[AIWorkspaceHeader] Pinia initialization failed after maximum retries, using fallback mode");
    };
    Ee(() => {
      f.value || E();
    });
    const m = I(!1), R = I(!1), k = I(!1), b = I([]), se = I([]), z = I({
      name: "",
      email: "",
      avatar_url: null,
      initials: ""
    }), N = I("unknown"), S = I("unknown"), G = I(!1), O = I(null), de = I(null), A = I(!1), x = I([]), P = I([]), K = I(!1);
    ge(P, async (t) => {
      t.length > 0 && H.value && ee.value && await X();
    }, { immediate: !1 }), ge(() => window.location.pathname + window.location.search + window.location.hash, async () => {
      H.value && ee.value && await X();
    }, { immediate: !1 });
    const te = I(window.location.pathname);
    ge(() => window.location.pathname, (t) => {
      te.value = t;
    }, { immediate: !0 }), ge(H, (t) => {
      !t && V.value < Le && E();
    });
    const he = () => {
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
    }, pe = () => {
      try {
        return window.location.pathname.includes("/all-workspace/");
      } catch (t) {
        return console.warn("[AIWorkspaceHeader] Error checking all-workspace mode:", t), !1;
      }
    }, X = async () => {
      if (!f.value || !H.value)
        return;
      const t = pe();
      if (K.value = t, t) {
        f.value.currentWorkspace = null, localStorage.removeItem("current_workspace"), console.log("[AIWorkspaceHeader] Auto-selected all-workspace mode from URL");
        return;
      }
      const e = he();
      if (e)
        try {
          P.value.length === 0 && await Ze();
          const r = P.value.find((l) => l.id.toString() === e);
          r ? (f.value.setCurrentWorkspace(r), console.log(`[AIWorkspaceHeader] Auto-selected workspace from URL: ${r.title} (ID: ${r.id})`), i("workspaceChange", r)) : console.warn(`[AIWorkspaceHeader] Workspace with ID ${e} not found in available workspaces`);
        } catch (r) {
          console.error("[AIWorkspaceHeader] Error auto-selecting workspace from URL:", r);
        }
    }, ee = j(() => h.value.isAuthenticated), fe = j(() => f.value ? f.value.currentWorkspace : null), we = j(() => {
      try {
        return window.location.pathname.includes("shared-folder");
      } catch (t) {
        return console.warn("[AIWorkspaceHeader] Error checking shared-folder URL:", t), !1;
      }
    }), _e = I([
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
    ]), Pe = I([
      { label: "Dashboard", key: "dashboard", url: "/dashboard" },
      { label: "All Tasks", key: "tasks", url: "/tasks" },
      { label: "All Goals", key: "goals", url: "/goals" },
      { label: "All Events", key: "events", url: "/events" },
      { label: "All Drive", key: "files", url: "/files" },
      { label: "All Contacts", key: "contacts", url: "/contacts" },
      { label: "All Settings", key: "settings", url: "/settings" }
    ]), Je = j(() => K.value ? Pe.value : _e.value), yo = j(() => {
      try {
        const t = te.value;
        let e = "";
        const r = t.match(/\/all-workspace\/([^\/]+)/);
        if (r)
          e = r[1];
        else {
          const l = t.match(/\/single-workspace\/\d+\/([^\/]+)/);
          if (l)
            e = l[1];
          else {
            const U = t.match(/\/([^\/]+)$/);
            U && (e = U[1]);
          }
        }
        if (e) {
          const l = Je.value.find(
            (U) => U.key === e || U.url.includes(`/${e}`) || U.url === `/${e}`
          );
          if (l)
            return l.label;
        }
        return "Dashboard";
      } catch (t) {
        return console.warn("[AIWorkspaceHeader] Error determining current section:", t), "Dashboard";
      }
    }), Te = j(() => {
      try {
        return window.location.hostname === "worklog.aiworkspace.pro";
      } catch (t) {
        return console.warn("[AIWorkspaceHeader] Error checking worklog domain:", t), !1;
      }
    }), Xe = j(() => {
      try {
        return window.location.hostname === "drms.aiworkspace.pro" || window.location.hostname === "localhost" && window.location.pathname.startsWith("/dashboard");
      } catch (t) {
        return console.warn("[AIWorkspaceHeader] Error checking DRMS domain:", t), !1;
      }
    }), Ae = j(() => a.showWorkspaceSelector && !Te.value && !Xe.value), bo = (t) => {
      const e = /* @__PURE__ */ new Map();
      t.forEach((U) => {
        e.set(U.id, { ...U, children: [] });
      });
      const r = [];
      e.forEach((U) => {
        U.parent_workspace_id && e.has(U.parent_workspace_id) ? e.get(U.parent_workspace_id).children.push(U) : r.push(U);
      });
      const l = (U) => {
        U.sort((Y, re) => Y.title.localeCompare(re.title)), U.forEach((Y) => {
          Y.children && l(Y.children);
        });
      };
      return l(r), r;
    }, Qe = (t, e = 0, r = []) => (t.forEach((l) => {
      r.push({ ...l, level: e }), l.children && l.children.length && Qe(l.children, e + 1, r);
    }), r), Ze = async () => {
      var t, e, r;
      try {
        const l = await ((t = f.value) == null ? void 0 : t.loadWorkspaces());
        if (x.value = bo(l || []), P.value = Qe(x.value), se.value = P.value, b.value = P.value, a.currentWorkspaceId) {
          const U = P.value.find((Y) => {
            var re;
            return Y.id.toString() === ((re = a.currentWorkspaceId) == null ? void 0 : re.toString());
          });
          U && ((e = f.value) == null || e.setCurrentWorkspace(U));
        } else
          !fe.value && P.value.length && ((r = f.value) == null || r.setCurrentWorkspace(P.value[0]));
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
      const e = fe.value, r = K.value;
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
      const e = fe.value, r = K.value;
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
          a.onProfileClick ? a.onProfileClick() : F.info("Profile settings coming soon");
          break;
        case "workspaces":
          m.value = !0;
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
      (e = f.value) == null || e.setCurrentWorkspace(t), m.value = !1, i("workspaceChange", t), F.success(`Switched to ${t.title}`);
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
        b.value.push(e), (r = f.value) == null || r.setWorkspaces(b.value), eo(e), F.success(`Created workspace: ${t}`);
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
        (t = f.value) == null || t.clearData(), await v(), typeof window < "u" && window.dispatchEvent(new CustomEvent("session-logout-detected", {
          detail: { timestamp: /* @__PURE__ */ new Date(), source: "manual-logout" }
        })), i("logout"), F.success("Signed out successfully");
      }).catch(() => {
      });
    }, We = async () => {
      var t, e;
      if (h.value.user) {
        const r = h.value.user;
        z.value = {
          name: r.name || ((t = r.email) == null ? void 0 : t.split("@")[0]) || "User",
          email: r.email || "",
          avatar_url: r.avatar_url || null,
          initials: (r.name || ((e = r.email) == null ? void 0 : e.split("@")[0]) || "U").split(" ").map((l) => l[0]).join("").toUpperCase().substring(0, 2)
        }, a.showWorkspaceSelector && await Ze();
      }
    };
    ge(() => h.value.user, (t) => {
      var e;
      t ? We() : (z.value = { name: "", email: "", avatar_url: null, initials: "" }, (e = f.value) == null || e.clearData());
    }), ge(p, (t) => {
      t && ee.value && (console.log("[AIWorkspaceHeader] Session loss detected, showing modal"), k.value = !0);
    }), ge(() => a.currentWorkspaceId, (t) => {
      var e;
      if (t && P.value.length) {
        const r = P.value.find((l) => l.id.toString() === t.toString());
        r && ((e = f.value) == null || e.setCurrentWorkspace(r));
      }
    }), Ee(async () => {
      ee.value && (await We(), await X()), await Uo(), lo(), $o();
    });
    const Lo = async (t) => {
      console.log("Login successful:", t), R.value = !1, await We(), i("login"), F.success("Welcome back!");
    }, Ro = async () => {
      console.log("[AIWorkspaceHeader] Retrying session..."), await c() ? (k.value = !1, u(), F.success("Session restored successfully!")) : F.error("Failed to restore session. Please log in again.");
    }, To = () => {
      console.log("[AIWorkspaceHeader] Opening login modal from session loss"), k.value = !1, R.value = !0;
    }, Vo = () => {
      console.log("[AIWorkspaceHeader] Refreshing page due to session loss"), window.location.reload();
    }, Ho = () => {
      V.value = 0, E(), F.success("Manual Pinia retry initiated.");
    }, Uo = async () => {
      try {
        const t = await fetch("/version.json");
        if (t.ok) {
          const e = t.headers.get("content-type");
          if (e && e.includes("application/json"))
            try {
              const r = await t.json();
              console.log("Version data received:", r), N.value = r.shortCommitHash || "unknown", S.value = r.fullCommitHash || "unknown", console.log("✅ Loaded commit hash from version.json:", N.value);
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
          e && e !== S.value && (console.log("🔄 New commit detected:", S.value, "→", e), S.value !== "unknown" && !G.value && (G.value = !0, O.value = e));
        }
      } catch (t) {
        console.log("Error checking for new commits:", t);
      }
    }, so = async () => {
      try {
        let t = await ao();
        if (t || (t = to()), t) {
          const U = await io(t);
          if (U) {
            N.value = U.substring(0, 7), S.value = U, console.log("✅ Loaded commit hash from GitHub API:", N.value);
            return;
          }
        }
        const e = await xo();
        if (e && e.version) {
          N.value = e.version, S.value = e.version, console.log("✅ Loaded version from package.json:", N.value);
          return;
        }
        const r = await Po();
        if (r) {
          N.value = r, S.value = r, console.log("✅ Loaded version from build info:", N.value);
          return;
        }
        const l = Date.now().toString(36);
        N.value = l.substring(0, 7), S.value = l, console.log("✅ Using timestamp-based version:", N.value);
      } catch (t) {
        console.warn("❌ All automatic detection methods failed:", t), N.value = "unknown", S.value = "unknown";
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
          const U = r.repository.url.match(/github\.com\/([^\/]+)\/([^\/]+)/);
          if (U)
            return console.log("✅ Found GitHub repo info:", U[1], U[2].replace(".git", "")), { owner: U[1], repo: U[2].replace(".git", "") };
        }
        return console.log("No valid GitHub repository found in package.json"), null;
      } catch (t) {
        return console.log("Could not get repo info from package.json:", t), null;
      }
    }, ro = I(0), $e = I(0), no = I(Date.now()), Mo = () => {
      const t = Date.now();
      t - no.value > 60 * 60 * 1e3 && ($e.value = 0, no.value = t, console.log("🔄 GitHub API call counter reset"));
    }, Do = async () => {
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
        if (Mo(), r - ro.value < Gt)
          return console.log("⏳ GitHub API rate limit: waiting before next call"), null;
        if ($e.value >= Ot)
          return console.log("🚫 GitHub API hourly limit reached, skipping call"), null;
        const l = await Do(), U = {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "AIWorkspace-Header/1.0"
        };
        l ? (U.Authorization = `Bearer ${l}`, console.log("🔑 Using GitHub token for authentication"), console.log("Token preview:", l.substring(0, 8) + "..." + l.substring(l.length - 4)), console.log("Token length:", l.length), console.log("Authorization header:", `Bearer ${l.substring(0, 8)}...`)) : console.log("⚠️ No GitHub token found, trying unauthenticated request");
        const Y = ["main", "master"];
        for (const re of Y)
          try {
            const ae = await fetch(`https://api.github.com/repos/${t.owner}/${t.repo}/commits/${re}`, {
              headers: U
            });
            if (ro.value = r, $e.value++, ae.ok) {
              const Ie = await ae.json();
              return console.log("✅ GitHub API call successful:", Ie.sha.substring(0, 7)), Ie.sha;
            } else if (ae.status === 403) {
              if ((e = (await ae.json()).message) != null && e.includes("rate limit"))
                return console.log("🚫 GitHub API rate limit exceeded, will retry later"), null;
            } else {
              if (ae.status === 404)
                return console.log("🚫 Repository not found or private (404). Consider adding a GitHub token."), null;
              if (ae.status === 401)
                return console.log("🚫 Unauthorized (401). GitHub token may be invalid or expired."), null;
            }
          } catch (ae) {
            console.log(`Failed to get commit from ${re} branch:`, ae);
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
    }, Po = async () => {
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
    }, Wo = async () => {
      try {
        if (S.value === "unknown") {
          F.warning("Version information not available");
          return;
        }
        await navigator.clipboard.writeText(S.value), F.success("Version information copied to clipboard!");
      } catch (t) {
        console.error("Failed to copy version info:", t), F.error("Failed to copy version info");
      }
    }, lo = async () => {
      if (!A.value) {
        A.value = !0;
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
          O.value = l.fullCommitHash, S.value !== O.value && (G.value || (G.value = !0, console.log("Version mismatch detected:", {
            currentVersion: S.value,
            latestVersion: O.value,
            serverBuildTime: l.buildTime
          })));
        } catch (t) {
          console.error("Error checking for updates:", t);
        } finally {
          A.value = !1;
        }
      }
    }, $o = () => {
      de.value = setInterval(() => {
        lo(), oo();
      }, 5 * 60 * 1e3);
    }, No = () => {
      console.log("User reloaded for update:", {
        currentVersion: S.value,
        latestVersion: O.value
      }), window.location.reload();
    }, co = () => {
      G.value = !1, console.log("Update alert dismissed:", {
        currentVersion: S.value,
        latestVersion: O.value
      });
    };
    return wo(() => {
      de.value && clearInterval(de.value);
    }), (t, e) => {
      const r = oe("el-icon"), l = oe("el-button"), U = oe("el-tag"), Y = oe("el-dropdown-item"), re = oe("el-dropdown-menu"), ae = oe("el-dropdown"), Ie = oe("el-dialog"), Go = oe("el-alert");
      return y(), M(Ve, null, [
        n("header", Os, [
          !H.value && V.value < Le || $(C) ? (y(), M("div", Bs, [
            e[13] || (e[13] = He('<div class="header-left" data-v-d2716831><div class="logo-section" data-v-d2716831><a href="/" class="logo" data-v-d2716831><div class="text-logo" data-v-d2716831><span class="logo-text" data-v-d2716831>AI Workspace</span></div></a></div></div>', 1)),
            n("div", Fs, [
              n("span", js, [
                $(C) ? (y(), M("span", zs, "Syncing authentication...")) : (y(), M("span", Ks, "Initializing..."))
              ])
            ])
          ])) : !H.value && V.value >= Le ? (y(), M("div", Ys, [
            e[15] || (e[15] = He('<div class="header-left" data-v-d2716831><div class="logo-section" data-v-d2716831><a href="/" class="logo" data-v-d2716831><div class="text-logo" data-v-d2716831><span class="logo-text" data-v-d2716831>AI Workspace</span></div></a></div></div>', 1)),
            n("div", { class: "header-center" }, [
              e[14] || (e[14] = n("span", { class: "fallback-text" }, "Header Ready (Fallback Mode)", -1)),
              n("button", {
                onClick: Ho,
                class: "retry-button"
              }, "Retry Pinia")
            ]),
            e[16] || (e[16] = He('<div class="header-right" data-v-d2716831><div class="user-profile" data-v-d2716831><div class="user-info" data-v-d2716831><span class="user-name" data-v-d2716831>User</span></div><div class="user-avatar" data-v-d2716831><span class="avatar-placeholder" data-v-d2716831>U</span></div></div></div>', 1))
          ])) : ee.value && !$(T) ? (y(), M("div", qs, [
            e[19] || (e[19] = He('<div class="header-left" data-v-d2716831><div class="logo-section" data-v-d2716831><a href="/" class="logo" data-v-d2716831><div class="text-logo" data-v-d2716831><span class="logo-text" data-v-d2716831>AI Workspace</span></div></a></div></div>', 1)),
            n("div", Js, [
              n("span", Xs, [
                w(r, null, {
                  default: g(() => [
                    w($(vo))
                  ]),
                  _: 1
                }),
                e[17] || (e[17] = J(" Session expired - Please log in again ", -1))
              ])
            ]),
            n("div", Qs, [
              w(l, {
                type: "primary",
                onClick: e[0] || (e[0] = (L) => R.value = !0)
              }, {
                default: g(() => [
                  w(r, null, {
                    default: g(() => [
                      w($(je))
                    ]),
                    _: 1
                  }),
                  e[18] || (e[18] = J(" Log In ", -1))
                ]),
                _: 1
              })
            ])
          ])) : ee.value && $(T) ? (y(), M("div", Zs, [
            n("div", et, [
              n("div", ot, [
                n("a", st, [
                  o.customLogo ? (y(), M("img", {
                    key: 0,
                    src: o.customLogo,
                    alt: "AIWorkspace",
                    class: "logo-image"
                  }, null, 8, tt)) : (y(), M("div", at, [...e[20] || (e[20] = [
                    n("span", { class: "logo-text" }, "AI Workspace", -1)
                  ])]))
                ])
              ])
            ]),
            o.showSecondaryNavigation ? (y(), M("div", rt, [
              n("nav", nt, [
                Ae.value ? (y(), Q(ae, {
                  key: 0,
                  onCommand: So,
                  trigger: "hover"
                }, {
                  dropdown: g(() => [
                    w(re, { class: "workspace-tree-dropdown" }, {
                      default: g(() => [
                        w(Y, {
                          command: "all-workspace",
                          class: Ne({ active: K.value })
                        }, {
                          default: g(() => [
                            n("a", lt, [
                              n("div", ct, [
                                e[22] || (e[22] = n("span", { class: "workspace-icon" }, "🌐", -1)),
                                e[23] || (e[23] = n("span", null, "All workspace", -1)),
                                K.value ? (y(), Q(U, {
                                  key: 0,
                                  size: "small",
                                  type: "success"
                                }, {
                                  default: g(() => [...e[21] || (e[21] = [
                                    J("Current", -1)
                                  ])]),
                                  _: 1
                                })) : B("", !0)
                              ])
                            ])
                          ]),
                          _: 1
                        }, 8, ["class"]),
                        P.value.length > 0 ? (y(), Q(Y, {
                          key: 0,
                          divided: "",
                          disabled: ""
                        })) : B("", !0),
                        (y(!0), M(Ve, null, Ge(P.value, (L) => (y(), Q(Y, {
                          key: L.id,
                          command: `workspace-${L.id}`
                        }, {
                          default: g(() => {
                            var ye;
                            return [
                              n("a", {
                                href: `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${L.id}/dashboard`,
                                class: "nav-link"
                              }, [
                                n("div", {
                                  class: "workspace-dropdown-item",
                                  style: jo({ paddingLeft: (L.level || 0) * 16 + "px" })
                                }, [
                                  n("span", dt, q(L.children && L.children.length ? "📁" : "📄"), 1),
                                  n("span", null, q(L.title), 1),
                                  L.id === ((ye = fe.value) == null ? void 0 : ye.id) ? (y(), Q(U, {
                                    key: 0,
                                    size: "small",
                                    type: "success"
                                  }, {
                                    default: g(() => [...e[24] || (e[24] = [
                                      J("Current", -1)
                                    ])]),
                                    _: 1
                                  })) : B("", !0)
                                ], 4)
                              ], 8, ut)
                            ];
                          }),
                          _: 2
                        }, 1032, ["command"]))), 128)),
                        P.value.length === 0 ? (y(), Q(Y, {
                          key: 1,
                          disabled: ""
                        }, {
                          default: g(() => [...e[25] || (e[25] = [
                            J(" No workspaces ", -1)
                          ])]),
                          _: 1
                        })) : B("", !0)
                      ]),
                      _: 1
                    })
                  ]),
                  default: g(() => {
                    var L;
                    return [
                      n("span", it, [
                        J(q(K.value ? "All workspace" : ((L = fe.value) == null ? void 0 : L.title) || "Select Workspace") + " ", 1),
                        w(r, { class: "nav-arrow" }, {
                          default: g(() => [
                            w($(go))
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }),
                  _: 1
                })) : B("", !0),
                Ae.value ? (y(), M("span", pt, "/")) : B("", !0),
                Ae.value ? (y(), Q(ae, {
                  key: 2,
                  trigger: "hover"
                }, {
                  dropdown: g(() => [
                    w(re, null, {
                      default: g(() => [
                        (y(!0), M(Ve, null, Ge(Je.value, (L) => (y(), Q(Y, {
                          key: L.label,
                          class: Ne({ active: L.active })
                        }, {
                          default: g(() => [
                            n("a", {
                              href: Eo(L),
                              class: "nav-link",
                              onClick: ne((ye) => Co(L), ["prevent"])
                            }, q(L.label), 9, gt)
                          ]),
                          _: 2
                        }, 1032, ["class"]))), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  default: g(() => [
                    n("span", ft, [
                      J(q(yo.value) + " ", 1),
                      w(r, { class: "nav-arrow" }, {
                        default: g(() => [
                          w($(go))
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })) : B("", !0)
              ]),
              !Ae.value && Te.value ? (y(), M("div", ht, [...e[26] || (e[26] = [
                n("h1", null, "Team Worklogs", -1),
                n("p", null, "View all team member work entries and progress updates", -1)
              ])])) : B("", !0),
              !Ae.value && Xe.value ? (y(), M("div", wt, [...e[27] || (e[27] = [
                n("h1", null, "Direct Reportee Management System", -1),
                n("p", null, "Manage your direct reportees tasks and progress", -1)
              ])])) : B("", !0)
            ])) : B("", !0),
            n("div", vt, [
              w(ae, {
                onCommand: ve,
                trigger: "click",
                placement: "bottom-end"
              }, {
                dropdown: g(() => [
                  w(re, null, {
                    default: g(() => [
                      w(Y, null, {
                        default: g(() => [
                          n("a", {
                            href: "/profile",
                            class: "nav-link",
                            onClick: e[1] || (e[1] = ne((L) => ve("profile"), ["prevent"]))
                          }, "Profile Settings")
                        ]),
                        _: 1
                      }),
                      o.showWorkspaceSelector ? (y(), Q(Y, { key: 0 }, {
                        default: g(() => [
                          n("a", {
                            href: "#switch-workspace",
                            class: "nav-link",
                            onClick: e[2] || (e[2] = ne((L) => ve("workspaces"), ["prevent"]))
                          }, "Switch Workspace")
                        ]),
                        _: 1
                      })) : B("", !0),
                      Te.value ? B("", !0) : (y(), Q(Y, { key: 1 }, {
                        default: g(() => [
                          n("a", {
                            href: "https://worklog.aiworkspace.pro/worklogs",
                            class: "nav-link",
                            onClick: e[3] || (e[3] = ne((L) => ve("worklogs"), ["prevent"]))
                          }, "Worklogs")
                        ]),
                        _: 1
                      })),
                      w(Y, null, {
                        default: g(() => [
                          n("a", {
                            href: "https://drms.aiworkspace.pro/dashboard",
                            class: "nav-link",
                            onClick: e[4] || (e[4] = ne((L) => ve("drms"), ["prevent"]))
                          }, "Direct Reportee")
                        ]),
                        _: 1
                      }),
                      Te.value ? (y(), Q(Y, { key: 2 }, {
                        default: g(() => [
                          n("a", {
                            href: "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard",
                            class: "nav-link",
                            onClick: e[5] || (e[5] = ne((L) => ve("allworkspaces"), ["prevent"]))
                          }, "All workspaces")
                        ]),
                        _: 1
                      })) : B("", !0),
                      w(Y, {
                        onClick: Wo,
                        class: "version-item"
                      }, {
                        default: g(() => [
                          n("div", Ct, [
                            e[28] || (e[28] = n("span", { class: "version-label" }, "Version:", -1)),
                            n("span", Et, q(N.value), 1),
                            w(l, {
                              size: "small",
                              type: "text",
                              onClick: ne(oo, ["stop"]),
                              class: "refresh-button",
                              loading: A.value
                            }, {
                              default: g(() => [
                                w(r, null, {
                                  default: g(() => [
                                    w($(Fe))
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
                      w(Y, { divided: "" }, {
                        default: g(() => [
                          n("a", {
                            href: "#signout",
                            class: "nav-link",
                            onClick: e[6] || (e[6] = ne((L) => ve("logout"), ["prevent"]))
                          }, "Sign Out")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                default: g(() => [
                  n("div", mt, [
                    n("div", kt, [
                      n("span", _t, q(z.value.name), 1)
                    ]),
                    n("div", yt, [
                      z.value.avatar_url ? (y(), M("img", {
                        key: 0,
                        src: z.value.avatar_url,
                        alt: z.value.name
                      }, null, 8, bt)) : (y(), M("span", St, q(z.value.initials), 1))
                    ])
                  ])
                ]),
                _: 1
              })
            ])
          ])) : (y(), M("div", At, [
            n("div", It, [
              n("div", Lt, [
                n("a", Rt, [
                  o.customLogo ? (y(), M("img", {
                    key: 0,
                    src: o.customLogo,
                    alt: "AIWorkspace",
                    class: "logo-image"
                  }, null, 8, Tt)) : (y(), M("div", Vt, [...e[29] || (e[29] = [
                    n("span", { class: "logo-text" }, "AI Workspace", -1)
                  ])]))
                ])
              ])
            ]),
            e[31] || (e[31] = n("div", { class: "header-center" }, [
              n("span", { class: "welcome-text" }, "Welcome to AI Workspace")
            ], -1)),
            we.value ? B("", !0) : (y(), M("div", Ht, [
              w(l, {
                type: "primary",
                size: "large",
                class: "login-button",
                onClick: e[7] || (e[7] = (L) => R.value = !0)
              }, {
                default: g(() => [
                  w(r, null, {
                    default: g(() => [
                      w($(je))
                    ]),
                    _: 1
                  }),
                  e[30] || (e[30] = J(" Login / Signup ", -1))
                ]),
                _: 1
              })
            ]))
          ])),
          ee.value && o.showWorkspaceSelector ? (y(), Q(Ie, {
            key: 5,
            modelValue: m.value,
            "onUpdate:modelValue": e[9] || (e[9] = (L) => m.value = L),
            title: "Switch Workspace",
            width: "500px",
            onClose: e[10] || (e[10] = (L) => m.value = !1)
          }, {
            footer: g(() => [
              w(l, {
                onClick: e[8] || (e[8] = (L) => m.value = !1)
              }, {
                default: g(() => [...e[32] || (e[32] = [
                  J("Cancel", -1)
                ])]),
                _: 1
              }),
              w(l, {
                type: "primary",
                onClick: Ao
              }, {
                default: g(() => [...e[33] || (e[33] = [
                  J("Create New Workspace", -1)
                ])]),
                _: 1
              })
            ]),
            default: g(() => [
              n("div", Ut, [
                (y(!0), M(Ve, null, Ge(b.value, (L) => {
                  var ye, uo;
                  return y(), M("div", {
                    key: L.id,
                    class: Ne(["workspace-item", { active: L.id === ((ye = fe.value) == null ? void 0 : ye.id) }]),
                    onClick: (qt) => eo(L)
                  }, [
                    n("div", Dt, q(L.children && L.children.length ? "📁" : "📄"), 1),
                    n("div", xt, [
                      n("h3", null, q(L.title), 1),
                      n("p", null, q(L.description), 1),
                      n("span", Pt, q(L.hasAccess ? "Active" : "Inactive"), 1)
                    ]),
                    L.id === ((uo = fe.value) == null ? void 0 : uo.id) ? (y(), M("div", Wt, [
                      w(r, null, {
                        default: g(() => [
                          w($(ts))
                        ]),
                        _: 1
                      })
                    ])) : B("", !0)
                  ], 10, Mt);
                }), 128))
              ])
            ]),
            _: 1
          }, 8, ["modelValue"])) : B("", !0),
          w(Ls, {
            modelValue: R.value,
            "onUpdate:modelValue": e[11] || (e[11] = (L) => R.value = L),
            onLoginSuccess: Lo
          }, null, 8, ["modelValue"]),
          w(Gs, {
            modelValue: k.value,
            "onUpdate:modelValue": e[12] || (e[12] = (L) => k.value = L),
            "session-loss-event": $(W),
            "can-retry-session": $(d) || !1,
            onRetry: Ro,
            onLogin: To,
            onRefresh: Vo
          }, null, 8, ["modelValue", "session-loss-event", "can-retry-session"])
        ]),
        G.value ? (y(), Q(Go, {
          key: 0,
          title: "New Version Available!",
          type: "warning",
          closable: !0,
          onClose: co,
          "show-icon": "",
          class: "update-alert"
        }, {
          default: g(() => [
            n("div", $t, [
              e[36] || (e[36] = n("p", null, "A new version of the application is available. Please reload to get the latest updates and features.", -1)),
              n("div", Nt, [
                w(l, {
                  type: "primary",
                  size: "small",
                  onClick: No
                }, {
                  default: g(() => [...e[34] || (e[34] = [
                    J(" Reload Now ", -1)
                  ])]),
                  _: 1
                }),
                w(l, {
                  size: "small",
                  onClick: co
                }, {
                  default: g(() => [...e[35] || (e[35] = [
                    J(" Dismiss ", -1)
                  ])]),
                  _: 1
                })
              ])
            ])
          ]),
          _: 1
        })) : B("", !0)
      ], 64);
    };
  }
});
const ma = /* @__PURE__ */ xe(Bt, [["__scopeId", "data-v-d2716831"]]), Ft = { class: "auth-callback" }, jt = /* @__PURE__ */ ie({
  __name: "AuthCallback",
  setup(o) {
    Ee(async () => {
      console.log("[AuthCallback] Component mounted, starting callback processing..."), console.log("[AuthCallback] Current URL:", window.location.href), console.log("[AuthCallback] Current hash:", window.location.hash);
      try {
        await new Promise((h) => setTimeout(h, 500));
        const { data: a, error: i } = await Me.auth.getSession();
        if (i) {
          console.error("Error processing callback:", i), s();
          return;
        }
        if (a != null && a.session) {
          const h = a.session.user;
          console.log("OAuth login successful:", h.email), a.session.access_token && ue(le, a.session.access_token), a.session.refresh_token && ue(ce, a.session.refresh_token), Re();
          const v = Zo();
          console.log("[callback] Post-login redirect URL:", v), console.log("[callback] Session storage redirect:", sessionStorage.getItem("post-login-redirect")), console.log("[callback] Local storage redirect:", localStorage.getItem("post-login-redirect"));
          let C = v || "/";
          (C === "/auth/callback" || C.includes("/auth/callback")) && (console.log("[callback] Avoiding redirect to /auth/callback, using /"), C = "/"), console.log("[callback] Final redirect URL:", C), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
            if (C.startsWith("/")) {
              const W = window.location.origin, p = `${W}${C}`;
              console.log("[callback] redirecting to:", p, { hostname: window.location.hostname, origin: W }), window.location.href = p, setTimeout(() => {
                window.location.pathname === "/auth/callback" && (console.log("[callback] Redirect did not work, trying replace..."), window.location.replace(p));
              }, 500);
            } else
              console.log("[callback] redirecting to absolute URL:", C), window.location.href = C, setTimeout(() => {
                window.location.pathname === "/auth/callback" && (console.log("[callback] Redirect did not work, trying replace..."), window.location.replace(C));
              }, 500);
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
    return (a, i) => (y(), M("div", Ft, [...i[0] || (i[0] = [
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
const ka = /* @__PURE__ */ xe(jt, [["__scopeId", "data-v-4857b2b4"]]), me = class me {
  constructor() {
    be(this, "validationCache", /* @__PURE__ */ new Map());
    be(this, "CACHE_DURATION", _o().validationCacheDuration);
  }
  // Helper function to get cookie value
  getCookieValue(s) {
    var h;
    if (typeof document > "u")
      return null;
    const i = `; ${document.cookie}`.split(`; ${s}=`);
    return i.length === 2 && ((h = i.pop()) == null ? void 0 : h.split(";").shift()) || null;
  }
  static getInstance() {
    return me.instance || (me.instance = new me()), me.instance;
  }
  /**
   * Validate current session with caching and improved reliability
   */
  async validateSession(s = !1) {
    var i, h;
    const a = "session_validation";
    if (!s) {
      const v = this.validationCache.get(a);
      if (v && Date.now() - v.timestamp < this.CACHE_DURATION)
        return console.log("[SessionValidator] Using cached validation result"), v.result;
    }
    console.log("[SessionValidator] Validating session...");
    try {
      const v = this.getCookieValue("sb-access-token"), C = this.getCookieValue("sb-refresh-token");
      if (!v || !C) {
        const _ = {
          isValid: !1,
          needsLogin: !0,
          error: "No authentication tokens found",
          canRetry: !1
        };
        return this.cacheResult(a, _), _;
      }
      const T = await Z();
      let W = null, p = null;
      for (let _ = 1; _ <= 2; _++)
        try {
          const f = await T.auth.getSession();
          W = f.data.session, p = f.error;
          break;
        } catch (f) {
          if (console.warn(`[SessionValidator] Network error on attempt ${_}:`, f), _ === 2) {
            const H = {
              isValid: !1,
              needsLogin: !1,
              // Don't force login on network issues
              error: "Network error during validation",
              canRetry: !0
            };
            return this.cacheResult(a, H), H;
          }
          await new Promise((H) => setTimeout(H, 1e3));
        }
      if (p) {
        console.warn("[SessionValidator] Error getting session:", p);
        const f = {
          isValid: !1,
          needsLogin: ((i = p.message) == null ? void 0 : i.includes("Invalid JWT")) || ((h = p.message) == null ? void 0 : h.includes("JWT expired")),
          error: `Session error: ${p.message}`,
          canRetry: !0
        };
        return this.cacheResult(a, f), f;
      }
      if (!W || !W.user) {
        const _ = {
          isValid: !1,
          needsLogin: !0,
          error: "No valid session found",
          canRetry: !0
        };
        return this.cacheResult(a, _), _;
      }
      const d = /* @__PURE__ */ new Date(), c = new Date(W.expires_at * 1e3), u = 5 * 60 * 1e3;
      if (d >= new Date(c.getTime() - u)) {
        const _ = {
          isValid: !1,
          needsLogin: !0,
          error: "Session is close to expiry or expired",
          canRetry: !0
        };
        return this.cacheResult(a, _), _;
      }
      const D = {
        isValid: !0,
        needsLogin: !1,
        canRetry: !1
      };
      return this.cacheResult(a, D), D;
    } catch (v) {
      console.error("[SessionValidator] Error validating session:", v);
      const C = {
        isValid: !1,
        needsLogin: !1,
        // Don't force login on unexpected errors
        error: `Validation error: ${v}`,
        canRetry: !0
      };
      return this.cacheResult(a, C), C;
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
      const i = await Z(), { data: h, error: v } = await i.auth.setSession({
        access_token: s,
        refresh_token: a
      });
      return v ? (console.warn("[SessionValidator] Error restoring session:", v), {
        isValid: !1,
        needsLogin: !0,
        error: `Restoration error: ${v.message}`,
        canRetry: !0
      }) : h.session && h.session.user ? (console.log("[SessionValidator] Session restored successfully"), this.clearCache(), {
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
be(me, "instance");
let Ke = me;
const qe = Ke.getInstance(), zt = (o = !1) => qe.validateSession(o), Kt = () => qe.restoreSession(), Yt = () => qe.clearCache();
async function _a() {
  console.log("[SessionValidator] Initializing session validation...");
  let o = await zt();
  return !o.isValid && o.canRetry && (console.log("[SessionValidator] Attempting session restoration..."), o = await Kt()), o;
}
function ya() {
  if (typeof window > "u")
    return () => {
    };
  const o = () => {
    console.log("[SessionValidator] Network restored, clearing cache for revalidation"), Yt();
  }, s = () => {
    console.log("[SessionValidator] Network lost, session validation may fail");
  };
  return window.addEventListener("online", o), window.addEventListener("offline", s), () => {
    window.removeEventListener("online", o), window.removeEventListener("offline", s);
  };
}
export {
  le as ACCESS_COOKIE,
  ma as AIWorkspaceHeader,
  Ua as AUTH_BROADCAST_CHANNEL,
  Ma as AUTH_BROADCAST_KEY,
  ka as AuthCallback,
  Da as LS_ACCESS_KEY,
  xa as LS_REFRESH_KEY,
  Ls as LoginModal,
  De as PackageError,
  ce as REFRESH_COOKIE,
  Gs as SessionLossModal,
  Ke as SessionValidator,
  Xo as broadcastAuthState,
  Pa as buildOAuthRedirectUrl,
  _s as clearGitHubTokenCache,
  Be as clearLocalStorageTokens,
  Yt as clearSessionCache,
  Se as clearSessionCookie,
  ga as configureGitHub,
  Ca as configureSupabase,
  gs as conservativeConfig,
  ua as createSessionConfig,
  va as debugDatabaseConnection,
  ma as default,
  ke as defaultSessionConfig,
  fa as detectionScenarios,
  mo as developmentConfig,
  fo as ensureCrossSubdomainCookies,
  fs as fastDetectionConfig,
  Ea as getAuthReadyResult,
  da as getConfigByPreset,
  Wa as getCookie,
  Ye as getGitHubToken,
  Zo as getPostLoginBase,
  _o as getSessionConfig,
  Z as getSupabase,
  us as handleBundlingError,
  Aa as handleDomainChangeAuth,
  qo as initializeCrossSubdomainAuth,
  _a as initializeSessionValidation,
  Ia as isAuthReadySync,
  ha as isGitHubConfigured,
  Qo as listenForAuthBroadcasts,
  ko as productionConfig,
  wa as refreshGitHubToken,
  La as restoreCrossSubdomainSession,
  Kt as restoreSession,
  Jo as restoreSessionWithRetry,
  sa as safeExecute,
  ta as safeExecuteAsync,
  ra as safeGetCookie,
  ia as safeGetLocalStorage,
  aa as safeImport,
  na as safeSetCookie,
  la as safeSetLocalStorage,
  ca as safeWindowOperation,
  hs as sessionConfigPresets,
  qe as sessionValidator,
  ue as setSessionCookie,
  Ra as setupAuthStateListener,
  ds as setupGlobalErrorHandler,
  Ta as setupImmediateCrossSubdomainAuth,
  ya as setupNetworkAwareValidation,
  Ga as setupUniversalCallback,
  Me as supabase,
  $a as syncCookiesAndBroadcast,
  Re as syncCookiesToLocalStorage,
  pa as timingInfo,
  ys as useAuth,
  ps as useEnhancedAuth,
  ws as useSessionMonitor,
  vs as useWorkspaceStore,
  zt as validateSession,
  Va as waitForAuthReady
};
