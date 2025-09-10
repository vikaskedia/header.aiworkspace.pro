var Rs = Object.defineProperty;
var $s = (a, o, t) => o in a ? Rs(a, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : a[o] = t;
var me = (a, o, t) => ($s(a, typeof o != "symbol" ? o + "" : o, t), t);
import { defineComponent as ce, openBlock as y, createElementBlock as x, createElementVNode as n, ref as C, computed as Q, onMounted as Se, onUnmounted as is, watch as de, reactive as Us, resolveComponent as ie, createBlock as oe, withCtx as d, toDisplayString as K, createVNode as v, unref as D, withModifiers as fe, createCommentVNode as X, createTextVNode as q, Fragment as Ae, createStaticVNode as Ee, normalizeClass as $e, renderList as Ue, normalizeStyle as Ts } from "vue";
import { ElForm as xs, ElMessage as J, ElDialog as Ds, ElIcon as Ie, ElButton as Te, ElProgress as Ns, ElMessageBox as as } from "element-plus";
import { i as Hs, g as te, r as xe, s as Le } from "./supabase-7523f80a.mjs";
import { c as aa, h as ra, b as na, d as ia, a as la } from "./supabase-7523f80a.mjs";
import { clearSessionCookie as we, ACCESS_COOKIE as ke, REFRESH_COOKIE as _e, clearLocalStorageTokens as De, setSessionCookie as ye, syncCookiesToLocalStorage as Ne, getPostLoginBase as Os } from "./utils/authRedirect.js";
import { LS_ACCESS_KEY as ua, LS_REFRESH_KEY as da, buildOAuthRedirectUrl as pa, ensureCrossSubdomainCookies as fa, getCookie as ga } from "./utils/authRedirect.js";
import { defineStore as Fs } from "pinia";
import { setupUniversalCallback as ha } from "./utils/universalCallback.js";
/*! Element Plus Icons Vue v2.3.2 */
var js = /* @__PURE__ */ ce({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(a) {
    return (o, t) => (y(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      n("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"
      })
    ]));
  }
}), rs = js, Bs = /* @__PURE__ */ ce({
  name: "Check",
  __name: "check",
  setup(a) {
    return (o, t) => (y(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      n("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      })
    ]));
  }
}), zs = Bs, Gs = /* @__PURE__ */ ce({
  name: "Lock",
  __name: "lock",
  setup(a) {
    return (o, t) => (y(), x("svg", {
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
}), ns = Gs, Js = /* @__PURE__ */ ce({
  name: "Message",
  __name: "message",
  setup(a) {
    return (o, t) => (y(), x("svg", {
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
}), Ks = Js, Ys = /* @__PURE__ */ ce({
  name: "Refresh",
  __name: "refresh",
  setup(a) {
    return (o, t) => (y(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      n("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), He = Ys, qs = /* @__PURE__ */ ce({
  name: "User",
  __name: "user",
  setup(a) {
    return (o, t) => (y(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      n("path", {
        fill: "currentColor",
        d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"
      })
    ]));
  }
}), Oe = qs, Xs = /* @__PURE__ */ ce({
  name: "Warning",
  __name: "warning",
  setup(a) {
    return (o, t) => (y(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      n("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"
      })
    ]));
  }
}), ls = Xs;
class Ve extends Error {
  constructor(t, i = {}, m) {
    super(t);
    me(this, "context");
    me(this, "originalError");
    this.name = "PackageError", this.context = i, this.originalError = m;
  }
}
function Ht(a, o = {}, t) {
  try {
    const i = a();
    return i instanceof Promise ? i.catch((m) => {
      if (console.warn("[ErrorHandler] Async operation failed:", {
        context: o,
        error: m.message,
        stack: m.stack
      }), t !== void 0)
        return t;
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
    }), t !== void 0)
      return t;
    throw new Ve(
      `Operation failed: ${i instanceof Error ? i.message : String(i)}`,
      o,
      i instanceof Error ? i : void 0
    );
  }
}
async function Ot(a, o = {}, t) {
  try {
    return await a();
  } catch (i) {
    if (console.warn("[ErrorHandler] Async operation failed:", {
      context: o,
      error: i instanceof Error ? i.message : String(i),
      stack: i instanceof Error ? i.stack : void 0
    }), t !== void 0)
      return t;
    throw new Ve(
      `Async operation failed: ${i instanceof Error ? i.message : String(i)}`,
      o,
      i instanceof Error ? i : void 0
    );
  }
}
function Qs(a, o = {}) {
  const t = a.message.toLowerCase();
  if (t.includes("is not a function") || t.includes("cannot read property") || t.includes("undefined is not a function")) {
    console.warn("[ErrorHandler] Bundling error detected:", {
      context: o,
      error: a.message,
      suggestion: "This may be due to minification or import issues. The package will continue with fallback behavior."
    });
    return;
  }
  throw new Ve(
    `Unexpected error: ${a.message}`,
    o,
    a
  );
}
async function Ft(a, o = {}, t) {
  try {
    return await a();
  } catch (i) {
    return console.warn("[ErrorHandler] Import failed:", {
      context: o,
      error: i instanceof Error ? i.message : String(i)
    }), t !== void 0 ? t : void 0;
  }
}
function jt(a) {
  var o;
  try {
    if (typeof document > "u")
      return null;
    const i = `; ${document.cookie}`.split(`; ${a}=`);
    return i.length === 2 && ((o = i.pop()) == null ? void 0 : o.split(";").shift()) || null;
  } catch (t) {
    return console.warn("[ErrorHandler] Cookie access failed:", {
      cookieName: a,
      error: t instanceof Error ? t.message : String(t)
    }), null;
  }
}
function Bt(a, o, t = {}) {
  try {
    if (typeof document > "u")
      return !1;
    let i = `${a}=${o}`;
    return t.domain && (i += `; domain=${t.domain}`), t.path && (i += `; path=${t.path}`), t.secure && (i += "; secure"), t.sameSite && (i += `; samesite=${t.sameSite}`), t.maxAge && (i += `; max-age=${t.maxAge}`), document.cookie = i, !0;
  } catch (i) {
    return console.warn("[ErrorHandler] Cookie setting failed:", {
      cookieName: a,
      error: i instanceof Error ? i.message : String(i)
    }), !1;
  }
}
function zt(a) {
  try {
    return typeof localStorage > "u" ? null : localStorage.getItem(a);
  } catch (o) {
    return console.warn("[ErrorHandler] localStorage get failed:", {
      key: a,
      error: o instanceof Error ? o.message : String(o)
    }), null;
  }
}
function Gt(a, o) {
  try {
    return typeof localStorage > "u" ? !1 : (localStorage.setItem(a, o), !0);
  } catch (t) {
    return console.warn("[ErrorHandler] localStorage set failed:", {
      key: a,
      error: t instanceof Error ? t.message : String(t)
    }), !1;
  }
}
function Jt(a, o) {
  try {
    return typeof window > "u" ? o : a(window);
  } catch (t) {
    return console.warn("[ErrorHandler] Window operation failed:", {
      error: t instanceof Error ? t.message : String(t)
    }), o;
  }
}
function Zs() {
  typeof window > "u" || (window.addEventListener("unhandledrejection", (a) => {
    const o = a.reason;
    if (o instanceof Error) {
      const t = o.message.toLowerCase();
      if (t.includes("is not a function") || t.includes("cannot read property") || t.includes("undefined is not a function")) {
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
      const t = o.message.toLowerCase();
      if (t.includes("is not a function") || t.includes("cannot read property") || t.includes("undefined is not a function")) {
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
typeof window < "u" && Zs();
function eo() {
  const a = C({
    user: null,
    isAuthenticated: !1,
    isLoading: !0,
    error: null
  }), o = C(null), t = Q(() => a.value.isAuthenticated), i = Q(() => a.value.user), m = Q(() => a.value.isLoading), _ = async () => {
    var k, p, c, $, f, u, L, M, b, g, V, h, S, ae, Y, B, O, re, G, A, N;
    try {
      console.log("[auth][enhanced] Starting loadUserInfo..."), console.log("[auth][enhanced] Ensuring cross-subdomain cookie synchronization...");
      const F = "sb-access-token", E = "sb-refresh-token", j = (P) => {
        try {
          const U = location.hostname;
          if (U === "localhost" || /^\d+\.\d+\.\d+\.\d+$/.test(U)) {
            console.log("[auth][enhanced] Skipping cookie sync for localhost");
            return;
          }
          const ee = "aiworkspace.pro";
          if (!U.endsWith(`.${ee}`) && U !== ee) {
            console.log("[auth][enhanced] Skipping cookie sync - not under apex domain");
            return;
          }
          console.log("[auth][enhanced] Performing cookie synchronization"), P.forEach((se) => {
            const ue = document.cookie.split(";").find((pe) => pe.trim().startsWith(se + "="));
            if (ue) {
              console.log(`[auth][enhanced] Found cookie: ${se}`);
              const pe = ue.split("=")[1];
              pe && (document.cookie = `${se}=${pe}; domain=.${ee}; path=/; secure; samesite=lax`);
            }
          });
        } catch (U) {
          console.warn("[auth][enhanced] Error in cookie sync:", U);
        }
      };
      j([F, E]), await new Promise((P) => setTimeout(P, 50)), j([F, E]), await new Promise((P) => setTimeout(P, 50));
      let Z = null;
      try {
        const U = await (await te()).auth.getSession();
        Z = (k = U == null ? void 0 : U.data) == null ? void 0 : k.session;
      } catch (P) {
        console.warn("[auth][enhanced] Error getting Supabase session:", P);
      }
      if (Z && Z.user) {
        console.log("[auth][enhanced] Active Supabase session found");
        const P = Z.user, U = {
          id: P.id,
          name: ((p = P.user_metadata) == null ? void 0 : p.name) || ((c = P.user_metadata) == null ? void 0 : c.user_name) || (($ = P.user_metadata) == null ? void 0 : $.full_name) || ((f = P.email) == null ? void 0 : f.split("@")[0]) || "User",
          email: P.email,
          avatar_url: ((u = P.user_metadata) == null ? void 0 : u.avatar_url) || null,
          user_metadata: P.user_metadata
        };
        return a.value = {
          user: U,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, o.value = {
          user: U,
          access_token: Z.access_token,
          refresh_token: Z.refresh_token
        }, { user: U, session: o.value, error: null };
      }
      console.log("[auth][enhanced] No active session, attempting to restore from cookies...");
      const ne = await xe();
      if (ne.success && ne.session) {
        console.log("[auth][enhanced] Session restored successfully from cookies");
        const P = ne.session.user, U = {
          id: P.id,
          name: ((L = P.user_metadata) == null ? void 0 : L.name) || ((M = P.user_metadata) == null ? void 0 : M.user_name) || ((b = P.user_metadata) == null ? void 0 : b.full_name) || ((g = P.email) == null ? void 0 : g.split("@")[0]) || "User",
          email: P.email,
          avatar_url: ((V = P.user_metadata) == null ? void 0 : V.avatar_url) || null,
          user_metadata: P.user_metadata
        };
        return a.value = {
          user: U,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, o.value = ne.session, { user: U, session: o.value, error: null };
      } else {
        console.log("[auth][enhanced] Failed to restore session:", ne.error), console.log("[auth][enhanced] Retrying session restoration with extended delay..."), await new Promise((U) => setTimeout(U, 500)), j([F, E]);
        const P = await xe();
        if (P.success && P.session) {
          console.log("[auth][enhanced] Session restored on retry");
          const U = P.session.user, ee = {
            id: U.id,
            name: ((h = U.user_metadata) == null ? void 0 : h.name) || ((S = U.user_metadata) == null ? void 0 : S.user_name) || ((ae = U.user_metadata) == null ? void 0 : ae.full_name) || ((Y = U.email) == null ? void 0 : Y.split("@")[0]) || "User",
            email: U.email,
            avatar_url: ((B = U.user_metadata) == null ? void 0 : B.avatar_url) || null,
            user_metadata: U.user_metadata
          };
          return a.value = {
            user: ee,
            isAuthenticated: !0,
            isLoading: !1,
            error: null
          }, o.value = P.session, { user: ee, session: o.value, error: null };
        }
      }
    } catch (F) {
      console.error("Error getting Supabase session:", F), F instanceof Error && Qs(F, {
        component: "useEnhancedAuth",
        function: "loadUserInfo",
        operation: "session_validation"
      });
      try {
        const E = await xe();
        if (E.success && E.session) {
          console.log("[auth][enhanced] Session restored after error");
          const j = E.session.user, Z = {
            id: j.id,
            name: ((O = j.user_metadata) == null ? void 0 : O.name) || ((re = j.user_metadata) == null ? void 0 : re.user_name) || ((G = j.user_metadata) == null ? void 0 : G.full_name) || ((A = j.email) == null ? void 0 : A.split("@")[0]) || "User",
            email: j.email,
            avatar_url: ((N = j.user_metadata) == null ? void 0 : N.avatar_url) || null,
            user_metadata: j.user_metadata
          };
          return a.value = {
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
    return console.log("[auth][enhanced] No valid authentication found"), a.value = {
      user: null,
      isAuthenticated: !1,
      isLoading: !1,
      error: "No valid session found"
    }, o.value = null, { user: null, session: null, error: "No valid session found" };
  }, R = async () => {
    try {
      await (await te()).auth.signOut(), we(ke), we(_e), De(), a.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      }, o.value = null, console.log("[auth][enhanced] User logged out successfully");
    } catch (k) {
      console.error("Error during logout:", k), a.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      }, o.value = null;
    }
  }, T = async (k, p) => {
    var c, $, f, u, L;
    try {
      a.value.isLoading = !0;
      const M = await te(), { data: b, error: g } = await M.auth.signInWithPassword({
        email: k,
        password: p
      });
      if (g)
        throw g;
      if (b.session) {
        const V = b.session.user, h = {
          id: V.id,
          name: ((c = V.user_metadata) == null ? void 0 : c.name) || (($ = V.user_metadata) == null ? void 0 : $.user_name) || ((f = V.user_metadata) == null ? void 0 : f.full_name) || ((u = V.email) == null ? void 0 : u.split("@")[0]) || "User",
          email: V.email,
          avatar_url: ((L = V.user_metadata) == null ? void 0 : L.avatar_url) || null,
          user_metadata: V.user_metadata
        };
        return a.value = {
          user: h,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, o.value = {
          user: h,
          access_token: b.session.access_token,
          refresh_token: b.session.refresh_token
        }, { user: h, session: o.value, error: null };
      }
      return { user: null, session: null, error: "No session returned" };
    } catch (M) {
      return console.error("Sign in error:", M), a.value.isLoading = !1, { user: null, session: null, error: String(M) };
    }
  }, H = async (k, p, c) => {
    var $, f, u, L, M;
    try {
      a.value.isLoading = !0;
      const b = await te(), { data: g, error: V } = await b.auth.signUp({
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
          name: (($ = h.user_metadata) == null ? void 0 : $.name) || ((f = h.user_metadata) == null ? void 0 : f.user_name) || ((u = h.user_metadata) == null ? void 0 : u.full_name) || ((L = h.email) == null ? void 0 : L.split("@")[0]) || "User",
          email: h.email,
          avatar_url: ((M = h.user_metadata) == null ? void 0 : M.avatar_url) || null,
          user_metadata: h.user_metadata
        };
        return a.value = {
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
      return console.error("Sign up error:", b), a.value.isLoading = !1, { user: null, session: null, error: String(b) };
    }
  }, w = async () => {
    await _();
  };
  return Se(async () => {
    await Hs(), await w();
  }), {
    // State
    authState: a,
    currentSession: o,
    // Computed
    isAuthenticated: t,
    currentUser: i,
    isLoading: m,
    // Methods
    loadUserInfo: _,
    logout: R,
    signIn: T,
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
}, so = {
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
}, oo = {
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
}, cs = {
  ...ve,
  normalCheckInterval: 1e4,
  // 10 seconds - faster for testing
  fastCheckInterval: 2e3,
  // 2 seconds - very fast for testing
  fastMonitoringDuration: 3e4,
  // 30 seconds - shorter for testing
  validationCacheDuration: 1e3
  // 1 second cache for testing
}, us = {
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
function ds() {
  switch ("production") {
    case "production":
      return us;
    case "development":
      return cs;
    default:
      return ve;
  }
}
function Kt(a) {
  return {
    ...ve,
    ...a
  };
}
const to = {
  default: ve,
  fast: so,
  conservative: oo,
  development: cs,
  production: us
};
function Yt(a) {
  return to[a];
}
const qt = {
  immediate: "Immediate (0-2 seconds) - When logout is detected via auth events",
  fast: "Fast (2-5 seconds) - When fast monitoring is active",
  normal: "Normal (up to 30 seconds) - Regular monitoring interval",
  conservative: "Conservative (up to 60 seconds) - Less frequent monitoring"
}, Xt = {
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
function ao(a) {
  const o = C(!0), t = C(null), i = C(!1), m = C(!1), _ = C(null), R = C(null), T = C(null), H = { ...ds(), ...a }, w = H.normalCheckInterval, k = H.fastCheckInterval, p = H.fastMonitoringDuration, c = H.maxRetryAttempts, $ = H.retryDelay, f = Q(() => !o.value && t.value !== null), u = Q(
    () => {
      var A, N;
      return ((A = t.value) == null ? void 0 : A.canRetry) && ((N = t.value) == null ? void 0 : N.type) !== "manual_check_failed";
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
      const j = await te();
      let Z = null, ne = null;
      for (let se = 1; se <= 2; se++)
        try {
          const ue = await j.auth.getSession();
          Z = ue.data.session, ne = ue.error;
          break;
        } catch (ue) {
          if (console.warn(`[SessionMonitor] Network error on attempt ${se}:`, ue), se === 2)
            return console.log("[SessionMonitor] Network issues detected, maintaining current session state"), o.value;
          await new Promise((pe) => setTimeout(pe, 1e3));
        }
      if (ne)
        return console.warn("[SessionMonitor] Error getting session:", ne), (A = ne.message) != null && A.includes("Invalid JWT") || (N = ne.message) != null && N.includes("JWT expired") ? !1 : o.value;
      if (!Z || !Z.user)
        return console.log("[SessionMonitor] No valid session found"), !1;
      const P = /* @__PURE__ */ new Date(), U = new Date(Z.expires_at * 1e3), ee = 5 * 60 * 1e3;
      return P >= new Date(U.getTime() - ee) ? (console.log("[SessionMonitor] Session is close to expiry or expired"), !1) : (console.log("[SessionMonitor] Session is valid"), _.value = /* @__PURE__ */ new Date(), !0);
    } catch (F) {
      return console.error("[SessionMonitor] Error validating session:", F), o.value;
    }
  }, b = async () => {
    try {
      console.log("[SessionMonitor] Attempting to restore session...");
      const A = L("sb-access-token"), N = L("sb-refresh-token");
      if (!A || !N)
        return console.log("[SessionMonitor] No tokens available for restoration"), !1;
      const F = await te(), { data: E, error: j } = await F.auth.setSession({
        access_token: A,
        refresh_token: N
      });
      return j ? (console.warn("[SessionMonitor] Error restoring session:", j), !1) : E.session && E.session.user ? (console.log("[SessionMonitor] Session restored successfully"), _.value = /* @__PURE__ */ new Date(), !0) : !1;
    } catch (A) {
      return console.error("[SessionMonitor] Error restoring session:", A), !1;
    }
  }, g = (A, N, F = !0) => {
    console.warn("[SessionMonitor] Session loss detected:", { type: A, message: N }), o.value = !1, t.value = {
      type: A,
      message: N,
      timestamp: /* @__PURE__ */ new Date(),
      canRetry: F
    };
  }, V = async () => {
    console.log("[SessionMonitor] Retrying session validation...");
    for (let A = 1; A <= c; A++) {
      if (console.log(`[SessionMonitor] Retry attempt ${A}/${c}`), A > 1 && await new Promise((E) => setTimeout(E, $)), await b() && await M())
        return console.log("[SessionMonitor] Session restored and validated successfully"), o.value = !0, t.value = null, !0;
      if (await M())
        return console.log("[SessionMonitor] Session validated successfully on retry"), o.value = !0, t.value = null, !0;
    }
    return console.log("[SessionMonitor] All retry attempts failed"), !1;
  }, h = () => {
    console.log("[SessionMonitor] Clearing session loss state"), o.value = !0, t.value = null;
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
      }, 2e3)) : A && !o.value && (console.log("[SessionMonitor] Session recovered"), h());
    }, w);
  }, ae = () => {
    if (m.value) {
      console.log("[SessionMonitor] Fast monitoring already active");
      return;
    }
    console.log("[SessionMonitor] Starting fast monitoring (5s intervals)..."), m.value = !0, T.value && clearInterval(T.value), T.value = setInterval(async () => {
      console.log("[SessionMonitor] Fast session check...");
      const A = await M();
      !A && o.value ? (console.log("[SessionMonitor] Fast monitoring detected potential session loss, confirming..."), setTimeout(async () => {
        await M() || (g("session_expired", "Your session has expired. Please log in again.", !0), Y());
      }, 1e3)) : A && !o.value && (console.log("[SessionMonitor] Session recovered"), h(), Y());
    }, k), setTimeout(() => {
      m.value && (console.log(`[SessionMonitor] Auto-stopping fast monitoring after ${p / 1e3} seconds`), Y());
    }, p);
  }, Y = () => {
    m.value && (console.log("[SessionMonitor] Stopping fast monitoring..."), m.value = !1, T.value && (clearInterval(T.value), T.value = null));
  }, B = () => {
    i.value && (console.log("[SessionMonitor] Stopping session monitoring..."), i.value = !1, R.value && (clearInterval(R.value), R.value = null), Y());
  }, O = async () => {
    console.log("[SessionMonitor] Manual session check requested");
    const A = await M();
    return !A && !await b() ? (g("manual_check_failed", "Session validation failed. Please log in again.", !1), !1) : A;
  }, re = () => {
    console.log("[SessionMonitor] Network error detected, but not triggering immediate session loss"), o.value || g("network_error", "Network connection lost. Please check your internet connection and try again.", !0);
  }, G = () => {
    if (typeof window > "u")
      return;
    const A = () => {
      var E;
      console.log("[SessionMonitor] Network connection restored"), f.value && ((E = t.value) == null ? void 0 : E.type) === "network_error" && setTimeout(() => V(), 1e3);
    }, N = () => {
      console.log("[SessionMonitor] Network connection lost"), re();
    }, F = (E) => {
      console.log("[SessionMonitor] Logout detected, starting fast monitoring for immediate detection"), ae();
    };
    return window.addEventListener("online", A), window.addEventListener("offline", N), window.addEventListener("session-logout-detected", F), () => {
      window.removeEventListener("online", A), window.removeEventListener("offline", N), window.removeEventListener("session-logout-detected", F);
    };
  };
  return Se(() => {
    console.log("[SessionMonitor] Mounted, setting up monitoring"), S(), G();
  }), is(() => {
    console.log("[SessionMonitor] Unmounted, cleaning up"), B();
  }), {
    // State
    isSessionValid: o,
    sessionLossEvent: t,
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
    stopMonitoring: B,
    startFastMonitoring: ae,
    stopFastMonitoring: Y,
    checkSession: O,
    handleNetworkError: re
  };
}
const ro = Fs("workspace", () => {
  const a = C(null), o = C([]), t = C(null), i = (w) => {
    a.value = w, localStorage.setItem("current_workspace", JSON.stringify(w));
  }, m = (w) => {
    o.value = w, localStorage.setItem("available_workspaces", JSON.stringify(w));
  };
  return {
    currentWorkspace: a,
    workspaces: o,
    user: t,
    setCurrentWorkspace: i,
    setWorkspaces: m,
    setUser: (w) => {
      t.value = w, localStorage.setItem("user_info", JSON.stringify(w));
    },
    loadPersistedData: () => {
      const w = localStorage.getItem("current_workspace");
      if (w)
        try {
          a.value = JSON.parse(w);
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
          t.value = JSON.parse(p);
        } catch (c) {
          console.error("Error loading persisted user:", c);
        }
    },
    clearData: () => {
      a.value = null, o.value = [], t.value = null, localStorage.removeItem("current_workspace"), localStorage.removeItem("available_workspaces"), localStorage.removeItem("user_info");
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
        const { data: c, error: $ } = await p;
        if ($)
          throw $;
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
function no() {
  const a = C({
    user: null,
    isAuthenticated: !1,
    isLoading: !0,
    error: null
  }), o = C(window.location.href), t = async () => {
    var w, k, p, c, $, f, u, L;
    try {
      a.value.isLoading = !0;
      const M = await te(), { data: { session: b }, error: g } = await M.auth.getSession();
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
          avatar_url: ((c = b.user.user_metadata) == null ? void 0 : c.avatar_url) || (($ = b.user.user_metadata) == null ? void 0 : $.picture) || null,
          initials: (((f = b.user.user_metadata) == null ? void 0 : f.full_name) || ((u = b.user.user_metadata) == null ? void 0 : u.name) || ((L = b.user.email) == null ? void 0 : L.split("@")[0]) || "U").split(" ").map((V) => V[0]).join("").toUpperCase().substring(0, 2)
        },
        isAuthenticated: !0,
        isLoading: !1,
        error: null
      }, b.access_token && ye(ke, b.access_token), b.refresh_token && ye(_e, b.refresh_token), Ne()) : a.value = {
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
  }, i = async (w, k) => {
    try {
      const p = await te(), { error: c } = await p.auth.signInWithPassword({
        email: w,
        password: k
      });
      return c ? { success: !1, error: c.message } : (await t(), sessionStorage.setItem("post-login-redirect", o.value), { success: !0 });
    } catch (p) {
      return console.error("Login error:", p), { success: !1, error: p.message || "Login failed" };
    }
  }, m = async (w, k) => {
    var p;
    try {
      const c = await te(), { data: $, error: f } = await c.auth.signUp({
        email: w,
        password: k
      });
      return f ? { success: !1, error: f.message } : $.user && !$.user.email_confirmed_at ? { success: !0, needsConfirmation: !0 } : (p = $.session) != null && p.user ? (await t(), sessionStorage.setItem("post-login-redirect", o.value), { success: !0 }) : { success: !1, error: "No session created" };
    } catch (c) {
      return console.error("Signup error:", c), { success: !1, error: c.message || "Signup failed" };
    }
  }, _ = async (w) => {
    try {
      const k = `${window.location.origin}/auth/callback`;
      console.log("[OAuth] Starting login with provider:", w), console.log("[OAuth] Redirect URL:", k), console.log("[OAuth] Current URL:", o.value), console.log("[OAuth] Current origin:", window.location.origin);
      const p = await te(), { error: c } = await p.auth.signInWithOAuth({
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
      const $ = o.value || window.location.href;
      return sessionStorage.setItem("post-login-redirect", $), localStorage.setItem("post-login-redirect", $), console.log("[OAuth] Stored redirect URL:", $), console.log("[OAuth] Current URL value:", o.value), console.log("[OAuth] Window location href:", window.location.href), { success: !0 };
    } catch (k) {
      return console.error("OAuth login error:", k), { success: !1, error: k.message || "OAuth login failed" };
    }
  }, R = async () => {
    try {
      const w = await te(), { error: k } = await w.auth.signOut();
      k && console.error("Logout error:", k), a.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      }, we(ke), we(_e), De();
    } catch (w) {
      console.error("Logout error:", w);
    }
  }, T = async (w) => {
    try {
      const k = await te(), { error: p } = await k.auth.resetPasswordForEmail(w, {
        redirectTo: `${window.location.origin}/auth/reset-password`
      });
      return p ? { success: !1, error: p.message } : { success: !0 };
    } catch (k) {
      return console.error("Password reset error:", k), { success: !1, error: k.message || "Password reset failed" };
    }
  }, H = async () => {
    try {
      (await te()).auth.onAuthStateChange((k, p) => {
        var c;
        switch (console.log("Auth state changed:", k, (c = p == null ? void 0 : p.user) == null ? void 0 : c.email), k) {
          case "SIGNED_IN":
            p != null && p.user && t();
            break;
          case "SIGNED_OUT":
            a.value = {
              user: null,
              isAuthenticated: !1,
              isLoading: !1,
              error: null
            }, we(ke), we(_e), De();
            break;
          case "TOKEN_REFRESHED":
            p != null && p.access_token && ye(ke, p.access_token), p != null && p.refresh_token && ye(_e, p.refresh_token), Ne();
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
  return Se(async () => {
    H(), await t();
  }), de(() => window.location.href, (w) => {
    o.value = w;
  }), {
    authState: Q(() => a.value),
    isAuthenticated: Q(() => a.value.isAuthenticated),
    user: Q(() => a.value.user),
    isLoading: Q(() => a.value.isLoading),
    checkAuthStatus: t,
    loginWithEmail: i,
    signupWithEmail: m,
    loginWithProvider: _,
    logout: R,
    resetPassword: T,
    currentUrl: Q(() => o.value)
  };
}
const io = { class: "login-container" }, lo = { class: "logo-section" }, co = { class: "login-buttons" }, uo = {
  key: 0,
  class: "forgot-password"
}, po = { class: "signup-link" }, fo = /* @__PURE__ */ ce({
  __name: "LoginModal",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue", "login-success"],
  setup(a, { emit: o }) {
    const t = a, i = o, m = Q({
      get: () => t.modelValue,
      set: (h) => i("update:modelValue", h)
    }), _ = C(!1), R = C(!1), T = C(), { loginWithEmail: H, signupWithEmail: w, loginWithProvider: k, resetPassword: p } = no(), c = Us({
      email: "",
      password: "",
      confirmPassword: ""
    }), $ = Q(() => ({
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
              S !== c.password ? ae(new Error("Passwords do not match")) : ae();
            },
            trigger: "blur"
          }
        ]
      } : {}
    })), f = () => {
      var h;
      _.value = !_.value, c.email = "", c.password = "", c.confirmPassword = "", (h = T.value) == null || h.clearValidate();
    }, u = () => {
      var h;
      m.value = !1, c.email = "", c.password = "", c.confirmPassword = "", _.value = !1, (h = T.value) == null || h.clearValidate();
    }, L = async () => {
      if (T.value)
        try {
          await T.value.validate(), R.value = !0, _.value ? await b() : await M();
        } catch (h) {
          console.error("Form validation failed:", h);
        } finally {
          R.value = !1;
        }
    }, M = async () => {
      const h = await H(c.email, c.password);
      h.success ? (J.success("Login successful"), i("login-success", { email: c.email }), u()) : J.error("Login failed: " + h.error);
    }, b = async () => {
      const h = await w(c.email, c.password);
      h.success ? h.needsConfirmation ? J.success("Please check your email to confirm your account") : (J.success("Account created successfully"), i("login-success", { email: c.email }), u()) : J.error("Signup failed: " + h.error);
    }, g = async (h) => {
      const S = await k(h);
      S.success ? J.success("Redirecting to login provider...") : J.error("Login failed: " + S.error);
    }, V = async () => {
      if (!c.email) {
        J.warning("Please enter your email address first");
        return;
      }
      const h = await p(c.email);
      h.success ? J.success("Password reset email sent! Please check your inbox.") : J.error("Failed to send reset email: " + h.error);
    };
    return (h, S) => {
      const ae = ie("el-icon"), Y = ie("el-input"), B = ie("el-form-item"), O = ie("el-button"), re = ie("el-dialog");
      return y(), oe(re, {
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
          n("div", io, [
            n("div", lo, [
              n("h2", null, K(_.value ? "Create Account" : "Welcome Back"), 1),
              n("p", null, K(_.value ? "Sign up to get started with your account" : "Sign in to continue to your account"), 1)
            ]),
            v(D(xs), {
              model: c,
              rules: $.value,
              ref_key: "formRef",
              ref: T,
              class: "login-form",
              onSubmit: fe(L, ["prevent"])
            }, {
              default: d(() => [
                v(B, { prop: "email" }, {
                  default: d(() => [
                    v(Y, {
                      modelValue: c.email,
                      "onUpdate:modelValue": S[0] || (S[0] = (G) => c.email = G),
                      placeholder: "Email",
                      type: "email",
                      size: "large",
                      class: "form-input"
                    }, {
                      prefix: d(() => [
                        v(ae, null, {
                          default: d(() => [
                            v(D(Ks))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                v(B, { prop: "password" }, {
                  default: d(() => [
                    v(Y, {
                      modelValue: c.password,
                      "onUpdate:modelValue": S[1] || (S[1] = (G) => c.password = G),
                      placeholder: "Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: d(() => [
                        v(ae, null, {
                          default: d(() => [
                            v(D(ns))
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
                    v(Y, {
                      modelValue: c.confirmPassword,
                      "onUpdate:modelValue": S[2] || (S[2] = (G) => c.confirmPassword = G),
                      placeholder: "Confirm Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: d(() => [
                        v(ae, null, {
                          default: d(() => [
                            v(D(ns))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                })) : X("", !0),
                v(B, null, {
                  default: d(() => [
                    v(O, {
                      type: "primary",
                      class: "submit-button",
                      loading: R.value,
                      onClick: L,
                      size: "large"
                    }, {
                      default: d(() => [
                        q(K(_.value ? "Sign Up" : "Sign In"), 1)
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
            n("div", co, [
              v(O, {
                class: "login-button google",
                onClick: S[3] || (S[3] = (G) => g("google")),
                size: "large"
              }, {
                default: d(() => [...S[7] || (S[7] = [
                  n("span", { class: "social-icon" }, "G", -1),
                  q(" Google ", -1)
                ])]),
                _: 1
              }),
              v(O, {
                class: "login-button github",
                onClick: S[4] || (S[4] = (G) => g("github")),
                size: "large"
              }, {
                default: d(() => [...S[8] || (S[8] = [
                  n("span", { class: "social-icon" }, "⚡", -1),
                  q(" GitHub ", -1)
                ])]),
                _: 1
              }),
              v(O, {
                class: "login-button twitter",
                onClick: S[5] || (S[5] = (G) => g("twitter")),
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
            _.value ? X("", !0) : (y(), x("div", uo, [
              n("a", {
                href: "#",
                onClick: fe(V, ["prevent"])
              }, "Forgot Password?")
            ])),
            n("div", po, [
              q(K(_.value ? "Already have an account?" : "Don't have an account?") + " ", 1),
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
const Me = (a, o) => {
  const t = a.__vccOpts || a;
  for (const [i, m] of o)
    t[i] = m;
  return t;
}, go = /* @__PURE__ */ Me(fo, [["__scopeId", "data-v-684a3f28"]]), vo = { class: "session-loss-content" }, ho = { class: "session-loss-icon" }, mo = { class: "session-loss-message" }, wo = {
  key: 0,
  class: "session-loss-details"
}, ko = { class: "detail-item" }, _o = { class: "detail-value" }, yo = { class: "detail-item" }, So = { class: "detail-value" }, bo = { class: "session-loss-actions" }, Co = {
  key: 0,
  class: "retry-status"
}, Ao = { class: "retry-message" }, Eo = /* @__PURE__ */ ce({
  __name: "SessionLossModal",
  props: {
    modelValue: { type: Boolean },
    sessionLossEvent: {},
    canRetrySession: { type: Boolean }
  },
  emits: ["update:modelValue", "retry", "login", "refresh"],
  setup(a, { emit: o }) {
    const t = a, i = o, m = C(!1), _ = C(0), R = C(void 0), T = C(""), H = Q({
      get: () => t.modelValue,
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
      m.value = !0, _.value = 0, R.value = void 0, T.value = "Attempting to restore session...";
      const f = setInterval(() => {
        _.value < 90 && (_.value += Math.random() * 20);
      }, 200);
      try {
        i("retry"), await new Promise((u) => setTimeout(u, 2e3)), _.value = 100, R.value = "success", T.value = "Session restored successfully!", setTimeout(() => {
          H.value = !1;
        }, 1e3);
      } catch {
        _.value = 100, R.value = "exception", T.value = "Failed to restore session. Please log in again.", J.error("Session restoration failed");
      } finally {
        clearInterval(f), setTimeout(() => {
          m.value = !1, _.value = 0, R.value = void 0, T.value = "";
        }, 3e3);
      }
    }, c = () => {
      i("login"), H.value = !1;
    }, $ = () => {
      i("refresh"), window.location.reload();
    };
    return de(() => t.sessionLossEvent, (f) => {
      f && (m.value = !1, _.value = 0, R.value = void 0, T.value = "");
    }), (f, u) => (y(), oe(D(Ds), {
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
          n("div", vo, [
            n("div", ho, [
              v(D(Ie), {
                size: "48",
                color: "#f56c6c"
              }, {
                default: d(() => [
                  v(D(ls))
                ]),
                _: 1
              })
            ]),
            n("div", mo, [
              u[3] || (u[3] = n("h3", null, "Your session has expired", -1)),
              n("p", null, K(((L = f.sessionLossEvent) == null ? void 0 : L.message) || "Please log in again to continue using the application."), 1),
              f.sessionLossEvent ? (y(), x("div", wo, [
                n("div", ko, [
                  u[1] || (u[1] = n("span", { class: "detail-label" }, "Issue:", -1)),
                  n("span", _o, K(w(f.sessionLossEvent.type)), 1)
                ]),
                n("div", yo, [
                  u[2] || (u[2] = n("span", { class: "detail-label" }, "Time:", -1)),
                  n("span", So, K(k(f.sessionLossEvent.timestamp)), 1)
                ])
              ])) : X("", !0)
            ]),
            n("div", bo, [
              f.canRetrySession && !m.value ? (y(), oe(D(Te), {
                key: 0,
                type: "primary",
                onClick: p,
                loading: m.value
              }, {
                default: d(() => [
                  v(D(Ie), null, {
                    default: d(() => [
                      v(D(He))
                    ]),
                    _: 1
                  }),
                  u[4] || (u[4] = q(" Try Again ", -1))
                ]),
                _: 1
              }, 8, ["loading"])) : X("", !0),
              v(D(Te), {
                type: "primary",
                onClick: c,
                disabled: m.value
              }, {
                default: d(() => [
                  v(D(Ie), null, {
                    default: d(() => [
                      v(D(Oe))
                    ]),
                    _: 1
                  }),
                  u[5] || (u[5] = q(" Log In ", -1))
                ]),
                _: 1
              }, 8, ["disabled"]),
              f.canRetrySession ? X("", !0) : (y(), oe(D(Te), {
                key: 1,
                type: "info",
                onClick: $,
                disabled: m.value
              }, {
                default: d(() => [
                  v(D(Ie), null, {
                    default: d(() => [
                      v(D(He))
                    ]),
                    _: 1
                  }),
                  u[6] || (u[6] = q(" Refresh Page ", -1))
                ]),
                _: 1
              }, 8, ["disabled"]))
            ]),
            m.value ? (y(), x("div", Co, [
              v(D(Ns), {
                percentage: _.value,
                status: R.value,
                "stroke-width": 6
              }, null, 8, ["percentage", "status"]),
              n("p", Ao, K(T.value), 1)
            ])) : X("", !0)
          ])
        ];
      }),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const Io = /* @__PURE__ */ Me(Eo, [["__scopeId", "data-v-0dd27f7f"]]), Lo = { class: "aiworkspace-header" }, Vo = {
  key: 0,
  class: "header-content header-loading"
}, Mo = { class: "header-center" }, Wo = { class: "loading-text" }, Po = { key: 0 }, Ro = { key: 1 }, $o = {
  key: 1,
  class: "header-content header-fallback"
}, Uo = {
  key: 2,
  class: "header-content header-restricted"
}, To = { class: "header-center" }, xo = { class: "restricted-text" }, Do = { class: "header-right" }, No = {
  key: 3,
  class: "header-content"
}, Ho = { class: "header-left" }, Oo = { class: "logo-section" }, Fo = {
  href: "/",
  class: "logo"
}, jo = ["src"], Bo = {
  key: 1,
  class: "text-logo"
}, zo = {
  key: 0,
  class: "header-center"
}, Go = { class: "main-navigation" }, Jo = { class: "nav-item" }, Ko = {
  href: "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard",
  class: "nav-link"
}, Yo = { class: "workspace-dropdown-item" }, qo = ["href"], Xo = { class: "workspace-icon" }, Qo = {
  key: 1,
  class: "nav-divider"
}, Zo = { class: "nav-item" }, et = ["href", "onClick"], st = { class: "header-right" }, ot = { class: "user-profile" }, tt = { class: "user-info" }, at = { class: "user-name" }, rt = { class: "user-avatar" }, nt = ["src", "alt"], it = {
  key: 1,
  class: "avatar-placeholder"
}, lt = { class: "version-info" }, ct = { class: "version-hash" }, ut = {
  key: 4,
  class: "header-content header-unauthenticated"
}, dt = { class: "header-left" }, pt = { class: "logo-section" }, ft = {
  href: "/",
  class: "logo"
}, gt = ["src"], vt = {
  key: 1,
  class: "text-logo"
}, ht = { class: "header-right" }, mt = { class: "workspace-list" }, wt = ["onClick"], kt = { class: "workspace-icon" }, _t = { class: "workspace-details" }, yt = { class: "workspace-members" }, St = {
  key: 0,
  class: "current-indicator"
}, bt = { class: "update-content" }, Ct = { class: "update-actions" }, be = 50, At = 6e4, Et = 30, It = /* @__PURE__ */ ce({
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
    const t = a, i = o, { authState: m, logout: _, isLoading: R } = eo(), {
      isSessionValid: T,
      sessionLossEvent: H,
      hasSessionLoss: w,
      canRetrySession: k,
      retrySession: p,
      clearSessionLoss: c
    } = ao(), $ = () => {
      try {
        return ro();
      } catch {
        return console.warn("[AIWorkspaceHeader] Pinia not initialized yet, using fallback state"), null;
      }
    }, f = () => {
      try {
        return typeof window < "u" ? !!window.__PINIA__ || !!window.Pinia : !1;
      } catch {
        return !1;
      }
    }, u = C($()), L = Q(() => !!u.value), M = C(0), b = () => {
      if (!u.value && M.value < be) {
        if (f()) {
          const s = $();
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
    const g = C(!1), V = C(!1), h = C(!1), S = C([]), ae = C([]), Y = C({
      name: "",
      email: "",
      avatar_url: null,
      initials: ""
    }), B = C("unknown"), O = C("unknown"), re = C(!1), G = C(null), A = C(null), N = C(!1), F = C([]), E = C([]), j = C(!1);
    de(E, async (s) => {
      s.length > 0 && L.value && ee.value && await U();
    }, { immediate: !1 }), de(() => window.location.pathname + window.location.search + window.location.hash, async () => {
      L.value && ee.value && await U();
    }, { immediate: !1 });
    const Z = C(window.location.pathname);
    de(() => window.location.pathname, (s) => {
      Z.value = s;
    }, { immediate: !0 }), de(L, (s) => {
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
    }, P = () => {
      try {
        return window.location.pathname.includes("/all-workspace/");
      } catch (s) {
        return console.warn("[AIWorkspaceHeader] Error checking all-workspace mode:", s), !1;
      }
    }, U = async () => {
      if (!u.value || !L.value)
        return;
      const s = P();
      if (j.value = s, s) {
        u.value.currentWorkspace = null, localStorage.removeItem("current_workspace"), console.log("[AIWorkspaceHeader] Auto-selected all-workspace mode from URL");
        return;
      }
      const e = ne();
      if (e)
        try {
          E.value.length === 0 && await Ge();
          const r = E.value.find((l) => l.id.toString() === e);
          r ? (u.value.setCurrentWorkspace(r), console.log(`[AIWorkspaceHeader] Auto-selected workspace from URL: ${r.title} (ID: ${r.id})`), i("workspaceChange", r)) : console.warn(`[AIWorkspaceHeader] Workspace with ID ${e} not found in available workspaces`);
        } catch (r) {
          console.error("[AIWorkspaceHeader] Error auto-selecting workspace from URL:", r);
        }
    }, ee = Q(() => m.value.isAuthenticated), se = Q(() => u.value ? u.value.currentWorkspace : null), ue = C([
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
    ]), pe = C([
      { label: "Dashboard", key: "dashboard", url: "/dashboard" },
      { label: "All Tasks", key: "tasks", url: "/tasks" },
      { label: "All Goals", key: "goals", url: "/goals" },
      { label: "All Events", key: "events", url: "/events" },
      { label: "All Drive", key: "files", url: "/files" },
      { label: "All Contacts", key: "contacts", url: "/contacts" },
      { label: "All Settings", key: "settings", url: "/settings" }
    ]), Be = Q(() => j.value ? pe.value : ue.value), ps = Q(() => {
      try {
        const s = Z.value;
        let e = "";
        const r = s.match(/\/all-workspace\/([^\/]+)/);
        if (r)
          e = r[1];
        else {
          const l = s.match(/\/single-workspace\/\d+\/([^\/]+)/);
          if (l)
            e = l[1];
          else {
            const W = s.match(/\/([^\/]+)$/);
            W && (e = W[1]);
          }
        }
        if (e) {
          const l = Be.value.find(
            (W) => W.key === e || W.url.includes(`/${e}`) || W.url === `/${e}`
          );
          if (l)
            return l.label;
        }
        return "Dashboard";
      } catch (s) {
        return console.warn("[AIWorkspaceHeader] Error determining current section:", s), "Dashboard";
      }
    }), fs = (s) => {
      const e = /* @__PURE__ */ new Map();
      s.forEach((W) => {
        e.set(W.id, { ...W, children: [] });
      });
      const r = [];
      e.forEach((W) => {
        W.parent_workspace_id && e.has(W.parent_workspace_id) ? e.get(W.parent_workspace_id).children.push(W) : r.push(W);
      });
      const l = (W) => {
        W.sort((z, le) => z.title.localeCompare(le.title)), W.forEach((z) => {
          z.children && l(z.children);
        });
      };
      return l(r), r;
    }, ze = (s, e = 0, r = []) => (s.forEach((l) => {
      r.push({ ...l, level: e }), l.children && l.children.length && ze(l.children, e + 1, r);
    }), r), Ge = async () => {
      var s, e, r;
      try {
        const l = await ((s = u.value) == null ? void 0 : s.loadWorkspaces());
        if (F.value = fs(l || []), E.value = ze(F.value), ae.value = E.value, S.value = E.value, t.currentWorkspaceId) {
          const W = E.value.find((z) => {
            var le;
            return z.id.toString() === ((le = t.currentWorkspaceId) == null ? void 0 : le.toString());
          });
          W && ((e = u.value) == null || e.setCurrentWorkspace(W));
        } else
          !se.value && E.value.length && ((r = u.value) == null || r.setCurrentWorkspace(E.value[0]));
      } catch (l) {
        console.error("loadWorkspaces (header) error", l);
      }
    }, gs = (s) => {
      if (console.log("Navigation command:", s), s === "all-workspace") {
        window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
        return;
      } else {
        const e = parseInt(s.replace("workspace-", ""));
        window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e}/dashboard`;
        return;
      }
    }, vs = (s) => {
      const e = se.value, r = j.value;
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
    }, hs = (s) => {
      const e = se.value, r = j.value;
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
          t.onProfileClick ? t.onProfileClick() : J.info("Profile settings coming soon");
          break;
        case "workspaces":
          g.value = !0;
          break;
        case "logout":
          ws();
          break;
      }
    }, Je = (s) => {
      var e;
      (e = u.value) == null || e.setCurrentWorkspace(s), g.value = !1, i("workspaceChange", s), J.success(`Switched to ${s.title}`);
    }, ms = () => {
      as.prompt("Enter workspace name:", "Create New Workspace", {
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
        S.value.push(e), (r = u.value) == null || r.setWorkspaces(S.value), Je(e), J.success(`Created workspace: ${s}`);
      }).catch(() => {
      });
    }, ws = () => {
      as.confirm(
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
        })), i("logout"), J.success("Signed out successfully");
      }).catch(() => {
      });
    }, We = async () => {
      var s, e;
      if (m.value.user) {
        const r = m.value.user;
        Y.value = {
          name: r.name || ((s = r.email) == null ? void 0 : s.split("@")[0]) || "User",
          email: r.email || "",
          avatar_url: r.avatar_url || null,
          initials: (r.name || ((e = r.email) == null ? void 0 : e.split("@")[0]) || "U").split(" ").map((l) => l[0]).join("").toUpperCase().substring(0, 2)
        }, t.showWorkspaceSelector && await Ge();
      }
    };
    de(() => m.value.user, (s) => {
      var e;
      s ? We() : (Y.value = { name: "", email: "", avatar_url: null, initials: "" }, (e = u.value) == null || e.clearData());
    }), de(w, (s) => {
      s && ee.value && (console.log("[AIWorkspaceHeader] Session loss detected, showing modal"), h.value = !0);
    }), de(() => t.currentWorkspaceId, (s) => {
      var e;
      if (s && E.value.length) {
        const r = E.value.find((l) => l.id.toString() === s.toString());
        r && ((e = u.value) == null || e.setCurrentWorkspace(r));
      }
    }), Se(async () => {
      ee.value && (await We(), await U()), await Cs(), ss(), Vs();
    });
    const ks = async (s) => {
      console.log("Login successful:", s), V.value = !1, await We(), i("login"), J.success("Welcome back!");
    }, _s = async () => {
      console.log("[AIWorkspaceHeader] Retrying session..."), await p() ? (h.value = !1, c(), J.success("Session restored successfully!")) : J.error("Failed to restore session. Please log in again.");
    }, ys = () => {
      console.log("[AIWorkspaceHeader] Opening login modal from session loss"), h.value = !1, V.value = !0;
    }, Ss = () => {
      console.log("[AIWorkspaceHeader] Refreshing page due to session loss"), window.location.reload();
    }, bs = () => {
      M.value = 0, b(), J.success("Manual Pinia retry initiated.");
    }, Cs = async () => {
      try {
        const s = await fetch("/version.json");
        if (s.ok) {
          const e = s.headers.get("content-type");
          if (e && e.includes("application/json"))
            try {
              const r = await s.json();
              console.log("Version data received:", r), B.value = r.shortCommitHash || "unknown", O.value = r.fullCommitHash || "unknown", console.log("✅ Loaded commit hash from version.json:", B.value);
              return;
            } catch {
              console.log("Failed to parse version.json, trying fallback methods...");
            }
        }
        console.log("🔄 version.json not available, trying automatic detection..."), await Ye();
      } catch (s) {
        console.log("Error loading version.json, trying automatic detection...", s), await Ye();
      }
    }, Ke = async () => {
      try {
        let s = await Xe();
        if (s || (s = qe()), s) {
          const e = await es(s);
          e && e !== O.value && (console.log("🔄 New commit detected:", O.value, "→", e), O.value !== "unknown" && !re.value && (re.value = !0, G.value = e));
        }
      } catch (s) {
        console.log("Error checking for new commits:", s);
      }
    }, Ye = async () => {
      try {
        let s = await Xe();
        if (s || (s = qe()), s) {
          const W = await es(s);
          if (W) {
            B.value = W.substring(0, 7), O.value = W, console.log("✅ Loaded commit hash from GitHub API:", B.value);
            return;
          }
        }
        const e = await Es();
        if (e && e.version) {
          B.value = e.version, O.value = e.version, console.log("✅ Loaded version from package.json:", B.value);
          return;
        }
        const r = await Is();
        if (r) {
          B.value = r, O.value = r, console.log("✅ Loaded version from build info:", B.value);
          return;
        }
        const l = Date.now().toString(36);
        B.value = l.substring(0, 7), O.value = l, console.log("✅ Using timestamp-based version:", B.value);
      } catch (s) {
        console.warn("❌ All automatic detection methods failed:", s), B.value = "unknown", O.value = "unknown";
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
    }, Xe = async () => {
      try {
        const s = await fetch("/package.json");
        if (!s.ok)
          return console.log("package.json not found or not accessible"), null;
        const e = s.headers.get("content-type");
        if (!e || !e.includes("application/json"))
          return console.log("package.json returned non-JSON content (likely HTML), skipping GitHub API"), null;
        const r = await s.json();
        if (r.repository && r.repository.url) {
          const W = r.repository.url.match(/github\.com\/([^\/]+)\/([^\/]+)/);
          if (W)
            return console.log("✅ Found GitHub repo info:", W[1], W[2].replace(".git", "")), { owner: W[1], repo: W[2].replace(".git", "") };
        }
        return console.log("No valid GitHub repository found in package.json"), null;
      } catch (s) {
        return console.log("Could not get repo info from package.json:", s), null;
      }
    }, Qe = C(0), Pe = C(0), Ze = C(Date.now()), As = () => {
      const s = Date.now();
      s - Ze.value > 60 * 60 * 1e3 && (Pe.value = 0, Ze.value = s, console.log("🔄 GitHub API call counter reset"));
    }, es = async (s) => {
      var e;
      try {
        const r = Date.now();
        if (As(), r - Qe.value < At)
          return console.log("⏳ GitHub API rate limit: waiting before next call"), null;
        if (Pe.value >= Et)
          return console.log("🚫 GitHub API hourly limit reached, skipping call"), null;
        const l = ["main", "master"];
        for (const W of l)
          try {
            const z = await fetch(`https://api.github.com/repos/${s.owner}/${s.repo}/commits/${W}`);
            if (Qe.value = r, Pe.value++, z.ok) {
              const le = await z.json();
              return console.log("✅ GitHub API call successful:", le.sha.substring(0, 7)), le.sha;
            } else if (z.status === 403 && (e = (await z.json()).message) != null && e.includes("rate limit"))
              return console.log("🚫 GitHub API rate limit exceeded, will retry later"), null;
          } catch (z) {
            console.log(`Failed to get commit from ${W} branch:`, z);
          }
      } catch (r) {
        console.log("Could not get commit from GitHub API:", r);
      }
      return null;
    }, Es = async () => {
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
    }, Is = async () => {
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
    }, Ls = async () => {
      try {
        if (O.value === "unknown") {
          J.warning("Version information not available");
          return;
        }
        await navigator.clipboard.writeText(O.value), J.success("Version information copied to clipboard!");
      } catch (s) {
        console.error("Failed to copy version info:", s), J.error("Failed to copy version info");
      }
    }, ss = async () => {
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
          G.value = l.fullCommitHash, O.value !== G.value && (re.value || (re.value = !0, console.log("Version mismatch detected:", {
            currentVersion: O.value,
            latestVersion: G.value,
            serverBuildTime: l.buildTime
          })));
        } catch (s) {
          console.error("Error checking for updates:", s);
        } finally {
          N.value = !1;
        }
      }
    }, Vs = () => {
      A.value = setInterval(() => {
        ss(), Ke();
      }, 5 * 60 * 1e3);
    }, Ms = () => {
      console.log("User reloaded for update:", {
        currentVersion: O.value,
        latestVersion: G.value
      }), window.location.reload();
    }, os = () => {
      re.value = !1, console.log("Update alert dismissed:", {
        currentVersion: O.value,
        latestVersion: G.value
      });
    };
    return is(() => {
      A.value && clearInterval(A.value);
    }), (s, e) => {
      const r = ie("el-icon"), l = ie("el-button"), W = ie("el-tag"), z = ie("el-dropdown-item"), le = ie("el-dropdown-menu"), Re = ie("el-dropdown"), Ws = ie("el-dialog"), Ps = ie("el-alert");
      return y(), x(Ae, null, [
        n("header", Lo, [
          !L.value && M.value < be || D(R) ? (y(), x("div", Vo, [
            e[10] || (e[10] = Ee('<div class="header-left" data-v-0456ef41><div class="logo-section" data-v-0456ef41><a href="/" class="logo" data-v-0456ef41><div class="text-logo" data-v-0456ef41><span class="logo-text" data-v-0456ef41>AI Workspace</span></div></a></div></div>', 1)),
            n("div", Mo, [
              n("span", Wo, [
                D(R) ? (y(), x("span", Po, "Syncing authentication...")) : (y(), x("span", Ro, "Initializing..."))
              ])
            ])
          ])) : !L.value && M.value >= be ? (y(), x("div", $o, [
            e[12] || (e[12] = Ee('<div class="header-left" data-v-0456ef41><div class="logo-section" data-v-0456ef41><a href="/" class="logo" data-v-0456ef41><div class="text-logo" data-v-0456ef41><span class="logo-text" data-v-0456ef41>AI Workspace</span></div></a></div></div>', 1)),
            n("div", { class: "header-center" }, [
              e[11] || (e[11] = n("span", { class: "fallback-text" }, "Header Ready (Fallback Mode)", -1)),
              n("button", {
                onClick: bs,
                class: "retry-button"
              }, "Retry Pinia")
            ]),
            e[13] || (e[13] = Ee('<div class="header-right" data-v-0456ef41><div class="user-profile" data-v-0456ef41><div class="user-info" data-v-0456ef41><span class="user-name" data-v-0456ef41>User</span></div><div class="user-avatar" data-v-0456ef41><span class="avatar-placeholder" data-v-0456ef41>U</span></div></div></div>', 1))
          ])) : ee.value && !D(T) ? (y(), x("div", Uo, [
            e[16] || (e[16] = Ee('<div class="header-left" data-v-0456ef41><div class="logo-section" data-v-0456ef41><a href="/" class="logo" data-v-0456ef41><div class="text-logo" data-v-0456ef41><span class="logo-text" data-v-0456ef41>AI Workspace</span></div></a></div></div>', 1)),
            n("div", To, [
              n("span", xo, [
                v(r, null, {
                  default: d(() => [
                    v(D(ls))
                  ]),
                  _: 1
                }),
                e[14] || (e[14] = q(" Session expired - Please log in again ", -1))
              ])
            ]),
            n("div", Do, [
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
                  e[15] || (e[15] = q(" Log In ", -1))
                ]),
                _: 1
              })
            ])
          ])) : ee.value && D(T) ? (y(), x("div", No, [
            n("div", Ho, [
              n("div", Oo, [
                n("a", Fo, [
                  s.customLogo ? (y(), x("img", {
                    key: 0,
                    src: s.customLogo,
                    alt: "AIWorkspace",
                    class: "logo-image"
                  }, null, 8, jo)) : (y(), x("div", Bo, [...e[17] || (e[17] = [
                    n("span", { class: "logo-text" }, "AI Workspace", -1)
                  ])]))
                ])
              ])
            ]),
            s.showSecondaryNavigation ? (y(), x("div", zo, [
              n("nav", Go, [
                s.showWorkspaceSelector ? (y(), oe(Re, {
                  key: 0,
                  onCommand: gs,
                  trigger: "hover"
                }, {
                  dropdown: d(() => [
                    v(le, { class: "workspace-tree-dropdown" }, {
                      default: d(() => [
                        v(z, {
                          command: "all-workspace",
                          class: $e({ active: j.value })
                        }, {
                          default: d(() => [
                            n("a", Ko, [
                              n("div", Yo, [
                                e[19] || (e[19] = n("span", { class: "workspace-icon" }, "🌐", -1)),
                                e[20] || (e[20] = n("span", null, "All workspace", -1)),
                                j.value ? (y(), oe(W, {
                                  key: 0,
                                  size: "small",
                                  type: "success"
                                }, {
                                  default: d(() => [...e[18] || (e[18] = [
                                    q("Current", -1)
                                  ])]),
                                  _: 1
                                })) : X("", !0)
                              ])
                            ])
                          ]),
                          _: 1
                        }, 8, ["class"]),
                        E.value.length > 0 ? (y(), oe(z, {
                          key: 0,
                          divided: "",
                          disabled: ""
                        })) : X("", !0),
                        (y(!0), x(Ae, null, Ue(E.value, (I) => (y(), oe(z, {
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
                                  style: Ts({ paddingLeft: (I.level || 0) * 16 + "px" })
                                }, [
                                  n("span", Xo, K(I.children && I.children.length ? "📁" : "📄"), 1),
                                  n("span", null, K(I.title), 1),
                                  I.id === ((he = se.value) == null ? void 0 : he.id) ? (y(), oe(W, {
                                    key: 0,
                                    size: "small",
                                    type: "success"
                                  }, {
                                    default: d(() => [...e[21] || (e[21] = [
                                      q("Current", -1)
                                    ])]),
                                    _: 1
                                  })) : X("", !0)
                                ], 4)
                              ], 8, qo)
                            ];
                          }),
                          _: 2
                        }, 1032, ["command"]))), 128)),
                        E.value.length === 0 ? (y(), oe(z, {
                          key: 1,
                          disabled: ""
                        }, {
                          default: d(() => [...e[22] || (e[22] = [
                            q(" No workspaces ", -1)
                          ])]),
                          _: 1
                        })) : X("", !0)
                      ]),
                      _: 1
                    })
                  ]),
                  default: d(() => {
                    var I;
                    return [
                      n("span", Jo, [
                        q(K(j.value ? "All workspace" : ((I = se.value) == null ? void 0 : I.title) || "Select Workspace") + " ", 1),
                        v(r, { class: "nav-arrow" }, {
                          default: d(() => [
                            v(D(rs))
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }),
                  _: 1
                })) : X("", !0),
                s.showWorkspaceSelector ? (y(), x("span", Qo, "/")) : X("", !0),
                s.showSecondaryNavigation ? (y(), oe(Re, {
                  key: 2,
                  trigger: "hover"
                }, {
                  dropdown: d(() => [
                    v(le, null, {
                      default: d(() => [
                        (y(!0), x(Ae, null, Ue(Be.value, (I) => (y(), oe(z, {
                          key: I.label,
                          class: $e({ active: I.active })
                        }, {
                          default: d(() => [
                            n("a", {
                              href: hs(I),
                              class: "nav-link",
                              onClick: fe((he) => vs(I), ["prevent"])
                            }, K(I.label), 9, et)
                          ]),
                          _: 2
                        }, 1032, ["class"]))), 128))
                      ]),
                      _: 1
                    })
                  ]),
                  default: d(() => [
                    n("span", Zo, [
                      q(K(ps.value) + " ", 1),
                      v(r, { class: "nav-arrow" }, {
                        default: d(() => [
                          v(D(rs))
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })) : X("", !0)
              ])
            ])) : X("", !0),
            n("div", st, [
              v(Re, {
                onCommand: Ce,
                trigger: "click",
                placement: "bottom-end"
              }, {
                dropdown: d(() => [
                  v(le, null, {
                    default: d(() => [
                      v(z, null, {
                        default: d(() => [
                          n("a", {
                            href: "/profile",
                            class: "nav-link",
                            onClick: e[1] || (e[1] = fe((I) => Ce("profile"), ["prevent"]))
                          }, "Profile Settings")
                        ]),
                        _: 1
                      }),
                      s.showWorkspaceSelector ? (y(), oe(z, { key: 0 }, {
                        default: d(() => [
                          n("a", {
                            href: "#switch-workspace",
                            class: "nav-link",
                            onClick: e[2] || (e[2] = fe((I) => Ce("workspaces"), ["prevent"]))
                          }, "Switch Workspace")
                        ]),
                        _: 1
                      })) : X("", !0),
                      v(z, {
                        onClick: Ls,
                        class: "version-item"
                      }, {
                        default: d(() => [
                          n("div", lt, [
                            e[23] || (e[23] = n("span", { class: "version-label" }, "Version:", -1)),
                            n("span", ct, K(B.value), 1),
                            v(l, {
                              size: "small",
                              type: "text",
                              onClick: fe(Ke, ["stop"]),
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
                      v(z, { divided: "" }, {
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
                  n("div", ot, [
                    n("div", tt, [
                      n("span", at, K(Y.value.name), 1)
                    ]),
                    n("div", rt, [
                      Y.value.avatar_url ? (y(), x("img", {
                        key: 0,
                        src: Y.value.avatar_url,
                        alt: Y.value.name
                      }, null, 8, nt)) : (y(), x("span", it, K(Y.value.initials), 1))
                    ])
                  ])
                ]),
                _: 1
              })
            ])
          ])) : (y(), x("div", ut, [
            n("div", dt, [
              n("div", pt, [
                n("a", ft, [
                  s.customLogo ? (y(), x("img", {
                    key: 0,
                    src: s.customLogo,
                    alt: "AIWorkspace",
                    class: "logo-image"
                  }, null, 8, gt)) : (y(), x("div", vt, [...e[24] || (e[24] = [
                    n("span", { class: "logo-text" }, "AI Workspace", -1)
                  ])]))
                ])
              ])
            ]),
            e[26] || (e[26] = n("div", { class: "header-center" }, [
              n("span", { class: "welcome-text" }, "Welcome to AI Workspace")
            ], -1)),
            n("div", ht, [
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
                  e[25] || (e[25] = q(" Login / Signup ", -1))
                ]),
                _: 1
              })
            ])
          ])),
          ee.value && s.showWorkspaceSelector ? (y(), oe(Ws, {
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
                  q("Cancel", -1)
                ])]),
                _: 1
              }),
              v(l, {
                type: "primary",
                onClick: ms
              }, {
                default: d(() => [...e[28] || (e[28] = [
                  q("Create New Workspace", -1)
                ])]),
                _: 1
              })
            ]),
            default: d(() => [
              n("div", mt, [
                (y(!0), x(Ae, null, Ue(S.value, (I) => {
                  var he, ts;
                  return y(), x("div", {
                    key: I.id,
                    class: $e(["workspace-item", { active: I.id === ((he = se.value) == null ? void 0 : he.id) }]),
                    onClick: (Rt) => Je(I)
                  }, [
                    n("div", kt, K(I.children && I.children.length ? "📁" : "📄"), 1),
                    n("div", _t, [
                      n("h3", null, K(I.title), 1),
                      n("p", null, K(I.description), 1),
                      n("span", yt, K(I.hasAccess ? "Active" : "Inactive"), 1)
                    ]),
                    I.id === ((ts = se.value) == null ? void 0 : ts.id) ? (y(), x("div", St, [
                      v(r, null, {
                        default: d(() => [
                          v(D(zs))
                        ]),
                        _: 1
                      })
                    ])) : X("", !0)
                  ], 10, wt);
                }), 128))
              ])
            ]),
            _: 1
          }, 8, ["modelValue"])) : X("", !0),
          v(go, {
            modelValue: V.value,
            "onUpdate:modelValue": e[8] || (e[8] = (I) => V.value = I),
            onLoginSuccess: ks
          }, null, 8, ["modelValue"]),
          v(Io, {
            modelValue: h.value,
            "onUpdate:modelValue": e[9] || (e[9] = (I) => h.value = I),
            "session-loss-event": D(H),
            "can-retry-session": D(k) || !1,
            onRetry: _s,
            onLogin: ys,
            onRefresh: Ss
          }, null, 8, ["modelValue", "session-loss-event", "can-retry-session"])
        ]),
        re.value ? (y(), oe(Ps, {
          key: 0,
          title: "New Version Available!",
          type: "warning",
          closable: !0,
          onClose: os,
          "show-icon": "",
          class: "update-alert"
        }, {
          default: d(() => [
            n("div", bt, [
              e[31] || (e[31] = n("p", null, "A new version of the application is available. Please reload to get the latest updates and features.", -1)),
              n("div", Ct, [
                v(l, {
                  type: "primary",
                  size: "small",
                  onClick: Ms
                }, {
                  default: d(() => [...e[29] || (e[29] = [
                    q(" Reload Now ", -1)
                  ])]),
                  _: 1
                }),
                v(l, {
                  size: "small",
                  onClick: os
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
        })) : X("", !0)
      ], 64);
    };
  }
});
const Qt = /* @__PURE__ */ Me(It, [["__scopeId", "data-v-0456ef41"]]), Lt = { class: "auth-callback" }, Vt = /* @__PURE__ */ ce({
  __name: "AuthCallback",
  setup(a) {
    Se(async () => {
      console.log("[AuthCallback] Component mounted, starting callback processing..."), console.log("[AuthCallback] Current URL:", window.location.href), console.log("[AuthCallback] Current hash:", window.location.hash);
      try {
        await new Promise((m) => setTimeout(m, 500));
        const { data: t, error: i } = await Le.auth.getSession();
        if (i) {
          console.error("Error processing callback:", i), o();
          return;
        }
        if (t != null && t.session) {
          const m = t.session.user;
          console.log("OAuth login successful:", m.email), t.session.access_token && ye(ke, t.session.access_token), t.session.refresh_token && ye(_e, t.session.refresh_token), Ne();
          const _ = Os();
          console.log("[callback] Post-login redirect URL:", _), console.log("[callback] Session storage redirect:", sessionStorage.getItem("post-login-redirect")), console.log("[callback] Local storage redirect:", localStorage.getItem("post-login-redirect"));
          const R = _ || "/";
          if (console.log("[callback] Final redirect URL:", R), R.startsWith("/")) {
            const T = window.location.origin, H = `${T}${R}`;
            console.log("[callback] redirecting to:", H, { hostname: window.location.hostname, origin: T }), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
              window.location.href = H;
            }, 100);
          } else
            console.log("[callback] redirecting to absolute URL:", R), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
              window.location.href = R;
            }, 100);
        } else
          o();
      } catch (t) {
        console.error("Error processing callback:", t), o();
      }
    });
    const o = () => {
      const i = window.location.href.replace("/auth/callback", "");
      window.location.href = i;
    };
    return (t, i) => (y(), x("div", Lt, [...i[0] || (i[0] = [
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
const Zt = /* @__PURE__ */ Me(Vt, [["__scopeId", "data-v-acdf6325"]]), ge = class ge {
  constructor() {
    me(this, "validationCache", /* @__PURE__ */ new Map());
    me(this, "CACHE_DURATION", ds().validationCacheDuration);
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
    const t = "session_validation";
    if (!o) {
      const _ = this.validationCache.get(t);
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
        return this.cacheResult(t, f), f;
      }
      const T = await te();
      let H = null, w = null;
      for (let f = 1; f <= 2; f++)
        try {
          const u = await T.auth.getSession();
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
            return this.cacheResult(t, L), L;
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
        return this.cacheResult(t, u), u;
      }
      if (!H || !H.user) {
        const f = {
          isValid: !1,
          needsLogin: !0,
          error: "No valid session found",
          canRetry: !0
        };
        return this.cacheResult(t, f), f;
      }
      const k = /* @__PURE__ */ new Date(), p = new Date(H.expires_at * 1e3), c = 5 * 60 * 1e3;
      if (k >= new Date(p.getTime() - c)) {
        const f = {
          isValid: !1,
          needsLogin: !0,
          error: "Session is close to expiry or expired",
          canRetry: !0
        };
        return this.cacheResult(t, f), f;
      }
      const $ = {
        isValid: !0,
        needsLogin: !1,
        canRetry: !1
      };
      return this.cacheResult(t, $), $;
    } catch (_) {
      console.error("[SessionValidator] Error validating session:", _);
      const R = {
        isValid: !1,
        needsLogin: !1,
        // Don't force login on unexpected errors
        error: `Validation error: ${_}`,
        canRetry: !0
      };
      return this.cacheResult(t, R), R;
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
      const i = await te(), { data: m, error: _ } = await i.auth.setSession({
        access_token: o,
        refresh_token: t
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
me(ge, "instance");
let Fe = ge;
const je = Fe.getInstance(), Mt = (a = !1) => je.validateSession(a), Wt = () => je.restoreSession(), Pt = () => je.clearCache();
async function ea() {
  console.log("[SessionValidator] Initializing session validation...");
  let a = await Mt();
  return !a.isValid && a.canRetry && (console.log("[SessionValidator] Attempting session restoration..."), a = await Wt()), a;
}
function sa() {
  if (typeof window > "u")
    return () => {
    };
  const a = () => {
    console.log("[SessionValidator] Network restored, clearing cache for revalidation"), Pt();
  }, o = () => {
    console.log("[SessionValidator] Network lost, session validation may fail");
  };
  return window.addEventListener("online", a), window.addEventListener("offline", o), () => {
    window.removeEventListener("online", a), window.removeEventListener("offline", o);
  };
}
export {
  ke as ACCESS_COOKIE,
  Qt as AIWorkspaceHeader,
  Zt as AuthCallback,
  ua as LS_ACCESS_KEY,
  da as LS_REFRESH_KEY,
  go as LoginModal,
  Ve as PackageError,
  _e as REFRESH_COOKIE,
  Io as SessionLossModal,
  Fe as SessionValidator,
  pa as buildOAuthRedirectUrl,
  De as clearLocalStorageTokens,
  Pt as clearSessionCache,
  we as clearSessionCookie,
  aa as configureSupabase,
  oo as conservativeConfig,
  Kt as createSessionConfig,
  Qt as default,
  ve as defaultSessionConfig,
  Xt as detectionScenarios,
  cs as developmentConfig,
  fa as ensureCrossSubdomainCookies,
  so as fastDetectionConfig,
  Yt as getConfigByPreset,
  ga as getCookie,
  Os as getPostLoginBase,
  ds as getSessionConfig,
  te as getSupabase,
  Qs as handleBundlingError,
  ra as handleDomainChangeAuth,
  Hs as initializeCrossSubdomainAuth,
  ea as initializeSessionValidation,
  us as productionConfig,
  na as restoreCrossSubdomainSession,
  Wt as restoreSession,
  xe as restoreSessionWithRetry,
  Ht as safeExecute,
  Ot as safeExecuteAsync,
  jt as safeGetCookie,
  zt as safeGetLocalStorage,
  Ft as safeImport,
  Bt as safeSetCookie,
  Gt as safeSetLocalStorage,
  Jt as safeWindowOperation,
  to as sessionConfigPresets,
  je as sessionValidator,
  ye as setSessionCookie,
  ia as setupAuthStateListener,
  Zs as setupGlobalErrorHandler,
  la as setupImmediateCrossSubdomainAuth,
  sa as setupNetworkAwareValidation,
  ha as setupUniversalCallback,
  Le as supabase,
  Ne as syncCookiesToLocalStorage,
  qt as timingInfo,
  no as useAuth,
  eo as useEnhancedAuth,
  ao as useSessionMonitor,
  ro as useWorkspaceStore,
  Mt as validateSession
};
