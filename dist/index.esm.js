var ls = Object.defineProperty;
var cs = (a, s, o) => s in a ? ls(a, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : a[s] = o;
var we = (a, s, o) => (cs(a, typeof s != "symbol" ? s + "" : s, o), o);
import { defineComponent as ie, openBlock as S, createElementBlock as x, createElementVNode as r, ref as W, computed as Y, onMounted as Se, onUnmounted as us, watch as ue, reactive as ds, resolveComponent as re, createBlock as ee, withCtx as v, toDisplayString as G, createVNode as k, unref as T, withModifiers as ge, createCommentVNode as j, createTextVNode as J, createStaticVNode as Ae, normalizeClass as $e, Fragment as Re, renderList as Ue, normalizeStyle as ps } from "vue";
import { ElForm as fs, ElMessage as K, ElDialog as gs, ElIcon as Ee, ElButton as Pe, ElProgress as hs, ElMessageBox as Be } from "element-plus";
import { i as vs, g as se, r as xe, s as Ie } from "./supabase-7523f80a.mjs";
import { c as La, h as Ma, b as Wa, d as Va, a as $a } from "./supabase-7523f80a.mjs";
import { clearSessionCookie as me, ACCESS_COOKIE as ke, REFRESH_COOKIE as _e, clearLocalStorageTokens as Te, setSessionCookie as ye, syncCookiesToLocalStorage as De, getPostLoginBase as ws } from "./utils/authRedirect.js";
import { LS_ACCESS_KEY as Ua, LS_REFRESH_KEY as Pa, buildOAuthRedirectUrl as xa, ensureCrossSubdomainCookies as Ta, getCookie as Da } from "./utils/authRedirect.js";
import { defineStore as ms } from "pinia";
import { setupUniversalCallback as Oa } from "./utils/universalCallback.js";
/*! Element Plus Icons Vue v2.3.2 */
var ks = /* @__PURE__ */ ie({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(a) {
    return (s, o) => (S(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      r("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"
      })
    ]));
  }
}), Ge = ks, _s = /* @__PURE__ */ ie({
  name: "Check",
  __name: "check",
  setup(a) {
    return (s, o) => (S(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      r("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      })
    ]));
  }
}), ys = _s, Ss = /* @__PURE__ */ ie({
  name: "Lock",
  __name: "lock",
  setup(a) {
    return (s, o) => (S(), x("svg", {
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
}), Ke = Ss, bs = /* @__PURE__ */ ie({
  name: "Message",
  __name: "message",
  setup(a) {
    return (s, o) => (S(), x("svg", {
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
}), Cs = bs, As = /* @__PURE__ */ ie({
  name: "Refresh",
  __name: "refresh",
  setup(a) {
    return (s, o) => (S(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      r("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), qe = As, Es = /* @__PURE__ */ ie({
  name: "User",
  __name: "user",
  setup(a) {
    return (s, o) => (S(), x("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      r("path", {
        fill: "currentColor",
        d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"
      })
    ]));
  }
}), Ne = Es, Is = /* @__PURE__ */ ie({
  name: "Warning",
  __name: "warning",
  setup(a) {
    return (s, o) => (S(), x("svg", {
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
  constructor(o, t = {}, h) {
    super(o);
    we(this, "context");
    we(this, "originalError");
    this.name = "PackageError", this.context = t, this.originalError = h;
  }
}
function ua(a, s = {}, o) {
  try {
    const t = a();
    return t instanceof Promise ? t.catch((h) => {
      if (console.warn("[ErrorHandler] Async operation failed:", {
        context: s,
        error: h.message,
        stack: h.stack
      }), o !== void 0)
        return o;
      throw new Le(
        `Async operation failed: ${h.message}`,
        s,
        h
      );
    }) : t;
  } catch (t) {
    if (console.warn("[ErrorHandler] Operation failed:", {
      context: s,
      error: t instanceof Error ? t.message : String(t),
      stack: t instanceof Error ? t.stack : void 0
    }), o !== void 0)
      return o;
    throw new Le(
      `Operation failed: ${t instanceof Error ? t.message : String(t)}`,
      s,
      t instanceof Error ? t : void 0
    );
  }
}
async function da(a, s = {}, o) {
  try {
    return await a();
  } catch (t) {
    if (console.warn("[ErrorHandler] Async operation failed:", {
      context: s,
      error: t instanceof Error ? t.message : String(t),
      stack: t instanceof Error ? t.stack : void 0
    }), o !== void 0)
      return o;
    throw new Le(
      `Async operation failed: ${t instanceof Error ? t.message : String(t)}`,
      s,
      t instanceof Error ? t : void 0
    );
  }
}
function Ls(a, s = {}) {
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
async function pa(a, s = {}, o) {
  try {
    return await a();
  } catch (t) {
    return console.warn("[ErrorHandler] Import failed:", {
      context: s,
      error: t instanceof Error ? t.message : String(t)
    }), o !== void 0 ? o : void 0;
  }
}
function fa(a) {
  var s;
  try {
    if (typeof document > "u")
      return null;
    const t = `; ${document.cookie}`.split(`; ${a}=`);
    return t.length === 2 && ((s = t.pop()) == null ? void 0 : s.split(";").shift()) || null;
  } catch (o) {
    return console.warn("[ErrorHandler] Cookie access failed:", {
      cookieName: a,
      error: o instanceof Error ? o.message : String(o)
    }), null;
  }
}
function ga(a, s, o = {}) {
  try {
    if (typeof document > "u")
      return !1;
    let t = `${a}=${s}`;
    return o.domain && (t += `; domain=${o.domain}`), o.path && (t += `; path=${o.path}`), o.secure && (t += "; secure"), o.sameSite && (t += `; samesite=${o.sameSite}`), o.maxAge && (t += `; max-age=${o.maxAge}`), document.cookie = t, !0;
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
  } catch (s) {
    return console.warn("[ErrorHandler] localStorage get failed:", {
      key: a,
      error: s instanceof Error ? s.message : String(s)
    }), null;
  }
}
function va(a, s) {
  try {
    return typeof localStorage > "u" ? !1 : (localStorage.setItem(a, s), !0);
  } catch (o) {
    return console.warn("[ErrorHandler] localStorage set failed:", {
      key: a,
      error: o instanceof Error ? o.message : String(o)
    }), !1;
  }
}
function wa(a, s) {
  try {
    return typeof window > "u" ? s : a(window);
  } catch (o) {
    return console.warn("[ErrorHandler] Window operation failed:", {
      error: o instanceof Error ? o.message : String(o)
    }), s;
  }
}
function Ms() {
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
typeof window < "u" && Ms();
function Ws() {
  const a = W({
    user: null,
    isAuthenticated: !1,
    isLoading: !0,
    error: null
  }), s = W(null), o = Y(() => a.value.isAuthenticated), t = Y(() => a.value.user), h = Y(() => a.value.isLoading), _ = async () => {
    var m, u, l, $, d, c, A, L, b, p, E, f, y, oe, B, ae, F, Q, q, I, O;
    try {
      console.log("[auth][enhanced] Starting loadUserInfo..."), console.log("[auth][enhanced] Ensuring cross-subdomain cookie synchronization...");
      const N = "sb-access-token", R = "sb-refresh-token", H = (M) => {
        try {
          const P = location.hostname;
          if (P === "localhost" || /^\d+\.\d+\.\d+\.\d+$/.test(P)) {
            console.log("[auth][enhanced] Skipping cookie sync for localhost");
            return;
          }
          const le = "aiworkspace.pro";
          if (!P.endsWith(`.${le}`) && P !== le) {
            console.log("[auth][enhanced] Skipping cookie sync - not under apex domain");
            return;
          }
          console.log("[auth][enhanced] Performing cookie synchronization"), M.forEach((ne) => {
            const ce = document.cookie.split(";").find((de) => de.trim().startsWith(ne + "="));
            if (ce) {
              console.log(`[auth][enhanced] Found cookie: ${ne}`);
              const de = ce.split("=")[1];
              de && (document.cookie = `${ne}=${de}; domain=.${le}; path=/; secure; samesite=lax`);
            }
          });
        } catch (P) {
          console.warn("[auth][enhanced] Error in cookie sync:", P);
        }
      };
      H([N, R]), await new Promise((M) => setTimeout(M, 50)), H([N, R]), await new Promise((M) => setTimeout(M, 50));
      let X = null;
      try {
        const P = await (await se()).auth.getSession();
        X = (m = P == null ? void 0 : P.data) == null ? void 0 : m.session;
      } catch (M) {
        console.warn("[auth][enhanced] Error getting Supabase session:", M);
      }
      if (X && X.user) {
        console.log("[auth][enhanced] Active Supabase session found");
        const M = X.user, P = {
          id: M.id,
          name: ((u = M.user_metadata) == null ? void 0 : u.name) || ((l = M.user_metadata) == null ? void 0 : l.user_name) || (($ = M.user_metadata) == null ? void 0 : $.full_name) || ((d = M.email) == null ? void 0 : d.split("@")[0]) || "User",
          email: M.email,
          avatar_url: ((c = M.user_metadata) == null ? void 0 : c.avatar_url) || null,
          user_metadata: M.user_metadata
        };
        return a.value = {
          user: P,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, s.value = {
          user: P,
          access_token: X.access_token,
          refresh_token: X.refresh_token
        }, { user: P, session: s.value, error: null };
      }
      console.log("[auth][enhanced] No active session, attempting to restore from cookies...");
      const te = await xe();
      if (te.success && te.session) {
        console.log("[auth][enhanced] Session restored successfully from cookies");
        const M = te.session.user, P = {
          id: M.id,
          name: ((A = M.user_metadata) == null ? void 0 : A.name) || ((L = M.user_metadata) == null ? void 0 : L.user_name) || ((b = M.user_metadata) == null ? void 0 : b.full_name) || ((p = M.email) == null ? void 0 : p.split("@")[0]) || "User",
          email: M.email,
          avatar_url: ((E = M.user_metadata) == null ? void 0 : E.avatar_url) || null,
          user_metadata: M.user_metadata
        };
        return a.value = {
          user: P,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, s.value = te.session, { user: P, session: s.value, error: null };
      } else {
        console.log("[auth][enhanced] Failed to restore session:", te.error), console.log("[auth][enhanced] Retrying session restoration with extended delay..."), await new Promise((P) => setTimeout(P, 500)), H([N, R]);
        const M = await xe();
        if (M.success && M.session) {
          console.log("[auth][enhanced] Session restored on retry");
          const P = M.session.user, le = {
            id: P.id,
            name: ((f = P.user_metadata) == null ? void 0 : f.name) || ((y = P.user_metadata) == null ? void 0 : y.user_name) || ((oe = P.user_metadata) == null ? void 0 : oe.full_name) || ((B = P.email) == null ? void 0 : B.split("@")[0]) || "User",
            email: P.email,
            avatar_url: ((ae = P.user_metadata) == null ? void 0 : ae.avatar_url) || null,
            user_metadata: P.user_metadata
          };
          return a.value = {
            user: le,
            isAuthenticated: !0,
            isLoading: !1,
            error: null
          }, s.value = M.session, { user: le, session: s.value, error: null };
        }
      }
    } catch (N) {
      console.error("Error getting Supabase session:", N), N instanceof Error && Ls(N, {
        component: "useEnhancedAuth",
        function: "loadUserInfo",
        operation: "session_validation"
      });
      try {
        const R = await xe();
        if (R.success && R.session) {
          console.log("[auth][enhanced] Session restored after error");
          const H = R.session.user, X = {
            id: H.id,
            name: ((F = H.user_metadata) == null ? void 0 : F.name) || ((Q = H.user_metadata) == null ? void 0 : Q.user_name) || ((q = H.user_metadata) == null ? void 0 : q.full_name) || ((I = H.email) == null ? void 0 : I.split("@")[0]) || "User",
            email: H.email,
            avatar_url: ((O = H.user_metadata) == null ? void 0 : O.avatar_url) || null,
            user_metadata: H.user_metadata
          };
          return a.value = {
            user: X,
            isAuthenticated: !0,
            isLoading: !1,
            error: null
          }, s.value = R.session, { user: X, session: s.value, error: null };
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
    }, s.value = null, { user: null, session: null, error: "No valid session found" };
  }, V = async () => {
    try {
      await (await se()).auth.signOut(), me(ke), me(_e), Te(), a.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      }, s.value = null, console.log("[auth][enhanced] User logged out successfully");
    } catch (m) {
      console.error("Error during logout:", m), a.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      }, s.value = null;
    }
  }, U = async (m, u) => {
    var l, $, d, c, A;
    try {
      a.value.isLoading = !0;
      const L = await se(), { data: b, error: p } = await L.auth.signInWithPassword({
        email: m,
        password: u
      });
      if (p)
        throw p;
      if (b.session) {
        const E = b.session.user, f = {
          id: E.id,
          name: ((l = E.user_metadata) == null ? void 0 : l.name) || (($ = E.user_metadata) == null ? void 0 : $.user_name) || ((d = E.user_metadata) == null ? void 0 : d.full_name) || ((c = E.email) == null ? void 0 : c.split("@")[0]) || "User",
          email: E.email,
          avatar_url: ((A = E.user_metadata) == null ? void 0 : A.avatar_url) || null,
          user_metadata: E.user_metadata
        };
        return a.value = {
          user: f,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, s.value = {
          user: f,
          access_token: b.session.access_token,
          refresh_token: b.session.refresh_token
        }, { user: f, session: s.value, error: null };
      }
      return { user: null, session: null, error: "No session returned" };
    } catch (L) {
      return console.error("Sign in error:", L), a.value.isLoading = !1, { user: null, session: null, error: String(L) };
    }
  }, D = async (m, u, l) => {
    var $, d, c, A, L;
    try {
      a.value.isLoading = !0;
      const b = await se(), { data: p, error: E } = await b.auth.signUp({
        email: m,
        password: u,
        options: {
          data: l
        }
      });
      if (E)
        throw E;
      if (p.session) {
        const f = p.session.user, y = {
          id: f.id,
          name: (($ = f.user_metadata) == null ? void 0 : $.name) || ((d = f.user_metadata) == null ? void 0 : d.user_name) || ((c = f.user_metadata) == null ? void 0 : c.full_name) || ((A = f.email) == null ? void 0 : A.split("@")[0]) || "User",
          email: f.email,
          avatar_url: ((L = f.user_metadata) == null ? void 0 : L.avatar_url) || null,
          user_metadata: f.user_metadata
        };
        return a.value = {
          user: y,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, s.value = {
          user: y,
          access_token: p.session.access_token,
          refresh_token: p.session.refresh_token
        }, { user: y, session: s.value, error: null };
      }
      return { user: null, session: null, error: "No session returned" };
    } catch (b) {
      return console.error("Sign up error:", b), a.value.isLoading = !1, { user: null, session: null, error: String(b) };
    }
  }, w = async () => {
    await _();
  };
  return Se(async () => {
    await vs(), await w();
  }), {
    // State
    authState: a,
    currentSession: s,
    // Computed
    isAuthenticated: o,
    currentUser: t,
    isLoading: h,
    // Methods
    loadUserInfo: _,
    logout: V,
    signIn: U,
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
}, Vs = {
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
}, $s = {
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
}, Ye = {
  ...he,
  normalCheckInterval: 1e4,
  // 10 seconds - faster for testing
  fastCheckInterval: 2e3,
  // 2 seconds - very fast for testing
  fastMonitoringDuration: 3e4,
  // 30 seconds - shorter for testing
  validationCacheDuration: 1e3
  // 1 second cache for testing
}, je = {
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
function Xe() {
  switch ("production") {
    case "production":
      return je;
    case "development":
      return Ye;
    default:
      return he;
  }
}
function ma(a) {
  return {
    ...he,
    ...a
  };
}
const Rs = {
  default: he,
  fast: Vs,
  conservative: $s,
  development: Ye,
  production: je
};
function ka(a) {
  return Rs[a];
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
  const s = W(!0), o = W(null), t = W(!1), h = W(!1), _ = W(null), V = W(null), U = W(null), D = { ...Xe(), ...a }, w = D.normalCheckInterval, m = D.fastCheckInterval, u = D.fastMonitoringDuration, l = D.maxRetryAttempts, $ = D.retryDelay, d = Y(() => !s.value && o.value !== null), c = Y(
    () => {
      var I, O;
      return ((I = o.value) == null ? void 0 : I.canRetry) && ((O = o.value) == null ? void 0 : O.type) !== "manual_check_failed";
    }
  ), A = (I) => {
    var R;
    if (typeof document > "u")
      return null;
    const N = `; ${document.cookie}`.split(`; ${I}=`);
    return N.length === 2 && ((R = N.pop()) == null ? void 0 : R.split(";").shift()) || null;
  }, L = async () => {
    var I, O;
    try {
      console.log("[SessionMonitor] Validating session...");
      const N = A("sb-access-token"), R = A("sb-refresh-token");
      if (!N || !R)
        return console.log("[SessionMonitor] No tokens found in cookies"), !1;
      const H = await se();
      let X = null, te = null;
      for (let ne = 1; ne <= 2; ne++)
        try {
          const ce = await H.auth.getSession();
          X = ce.data.session, te = ce.error;
          break;
        } catch (ce) {
          if (console.warn(`[SessionMonitor] Network error on attempt ${ne}:`, ce), ne === 2)
            return console.log("[SessionMonitor] Network issues detected, maintaining current session state"), s.value;
          await new Promise((de) => setTimeout(de, 1e3));
        }
      if (te)
        return console.warn("[SessionMonitor] Error getting session:", te), (I = te.message) != null && I.includes("Invalid JWT") || (O = te.message) != null && O.includes("JWT expired") ? !1 : s.value;
      if (!X || !X.user)
        return console.log("[SessionMonitor] No valid session found"), !1;
      const M = /* @__PURE__ */ new Date(), P = new Date(X.expires_at * 1e3), le = 5 * 60 * 1e3;
      return M >= new Date(P.getTime() - le) ? (console.log("[SessionMonitor] Session is close to expiry or expired"), !1) : (console.log("[SessionMonitor] Session is valid"), _.value = /* @__PURE__ */ new Date(), !0);
    } catch (N) {
      return console.error("[SessionMonitor] Error validating session:", N), s.value;
    }
  }, b = async () => {
    try {
      console.log("[SessionMonitor] Attempting to restore session...");
      const I = A("sb-access-token"), O = A("sb-refresh-token");
      if (!I || !O)
        return console.log("[SessionMonitor] No tokens available for restoration"), !1;
      const N = await se(), { data: R, error: H } = await N.auth.setSession({
        access_token: I,
        refresh_token: O
      });
      return H ? (console.warn("[SessionMonitor] Error restoring session:", H), !1) : R.session && R.session.user ? (console.log("[SessionMonitor] Session restored successfully"), _.value = /* @__PURE__ */ new Date(), !0) : !1;
    } catch (I) {
      return console.error("[SessionMonitor] Error restoring session:", I), !1;
    }
  }, p = (I, O, N = !0) => {
    console.warn("[SessionMonitor] Session loss detected:", { type: I, message: O }), s.value = !1, o.value = {
      type: I,
      message: O,
      timestamp: /* @__PURE__ */ new Date(),
      canRetry: N
    };
  }, E = async () => {
    console.log("[SessionMonitor] Retrying session validation...");
    for (let I = 1; I <= l; I++) {
      if (console.log(`[SessionMonitor] Retry attempt ${I}/${l}`), I > 1 && await new Promise((R) => setTimeout(R, $)), await b() && await L())
        return console.log("[SessionMonitor] Session restored and validated successfully"), s.value = !0, o.value = null, !0;
      if (await L())
        return console.log("[SessionMonitor] Session validated successfully on retry"), s.value = !0, o.value = null, !0;
    }
    return console.log("[SessionMonitor] All retry attempts failed"), !1;
  }, f = () => {
    console.log("[SessionMonitor] Clearing session loss state"), s.value = !0, o.value = null;
  }, y = () => {
    if (t.value) {
      console.log("[SessionMonitor] Already monitoring, skipping start");
      return;
    }
    console.log("[SessionMonitor] Starting session monitoring..."), t.value = !0, setTimeout(async () => {
      console.log("[SessionMonitor] Performing initial session validation..."), await L() ? console.log("[SessionMonitor] Initial validation successful") : (console.log("[SessionMonitor] Initial validation failed, but waiting for confirmation..."), setTimeout(async () => {
        await L() || p("session_expired", "Your session has expired. Please log in again.", !0);
      }, 3e3));
    }, 2e3), V.value = setInterval(async () => {
      console.log("[SessionMonitor] Periodic session check...");
      const I = await L();
      !I && s.value ? (console.log("[SessionMonitor] Session validation failed, performing confirmation check..."), setTimeout(async () => {
        await L() || p("session_expired", "Your session has expired. Please log in again.", !0);
      }, 2e3)) : I && !s.value && (console.log("[SessionMonitor] Session recovered"), f());
    }, w);
  }, oe = () => {
    if (h.value) {
      console.log("[SessionMonitor] Fast monitoring already active");
      return;
    }
    console.log("[SessionMonitor] Starting fast monitoring (5s intervals)..."), h.value = !0, U.value && clearInterval(U.value), U.value = setInterval(async () => {
      console.log("[SessionMonitor] Fast session check...");
      const I = await L();
      !I && s.value ? (console.log("[SessionMonitor] Fast monitoring detected potential session loss, confirming..."), setTimeout(async () => {
        await L() || (p("session_expired", "Your session has expired. Please log in again.", !0), B());
      }, 1e3)) : I && !s.value && (console.log("[SessionMonitor] Session recovered"), f(), B());
    }, m), setTimeout(() => {
      h.value && (console.log(`[SessionMonitor] Auto-stopping fast monitoring after ${u / 1e3} seconds`), B());
    }, u);
  }, B = () => {
    h.value && (console.log("[SessionMonitor] Stopping fast monitoring..."), h.value = !1, U.value && (clearInterval(U.value), U.value = null));
  }, ae = () => {
    t.value && (console.log("[SessionMonitor] Stopping session monitoring..."), t.value = !1, V.value && (clearInterval(V.value), V.value = null), B());
  }, F = async () => {
    console.log("[SessionMonitor] Manual session check requested");
    const I = await L();
    return !I && !await b() ? (p("manual_check_failed", "Session validation failed. Please log in again.", !1), !1) : I;
  }, Q = () => {
    console.log("[SessionMonitor] Network error detected, but not triggering immediate session loss"), s.value || p("network_error", "Network connection lost. Please check your internet connection and try again.", !0);
  }, q = () => {
    if (typeof window > "u")
      return;
    const I = () => {
      var R;
      console.log("[SessionMonitor] Network connection restored"), d.value && ((R = o.value) == null ? void 0 : R.type) === "network_error" && setTimeout(() => E(), 1e3);
    }, O = () => {
      console.log("[SessionMonitor] Network connection lost"), Q();
    }, N = (R) => {
      console.log("[SessionMonitor] Logout detected, starting fast monitoring for immediate detection"), oe();
    };
    return window.addEventListener("online", I), window.addEventListener("offline", O), window.addEventListener("session-logout-detected", N), () => {
      window.removeEventListener("online", I), window.removeEventListener("offline", O), window.removeEventListener("session-logout-detected", N);
    };
  };
  return Se(() => {
    console.log("[SessionMonitor] Mounted, setting up monitoring"), y(), q();
  }), us(() => {
    console.log("[SessionMonitor] Unmounted, cleaning up"), ae();
  }), {
    // State
    isSessionValid: s,
    sessionLossEvent: o,
    isMonitoring: t,
    isFastMonitoring: h,
    lastValidSession: _,
    // Computed
    hasSessionLoss: d,
    canRetrySession: c,
    // Methods
    validateSession: L,
    restoreSession: b,
    retrySession: E,
    clearSessionLoss: f,
    startMonitoring: y,
    stopMonitoring: ae,
    startFastMonitoring: oe,
    stopFastMonitoring: B,
    checkSession: F,
    handleNetworkError: Q
  };
}
const Ps = ms("workspace", () => {
  const a = W(null), s = W([]), o = W(null), t = (w) => {
    a.value = w, localStorage.setItem("current_workspace", JSON.stringify(w));
  }, h = (w) => {
    s.value = w, localStorage.setItem("available_workspaces", JSON.stringify(w));
  };
  return {
    currentWorkspace: a,
    workspaces: s,
    user: o,
    setCurrentWorkspace: t,
    setWorkspaces: h,
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
      const m = localStorage.getItem("available_workspaces");
      if (m)
        try {
          s.value = JSON.parse(m);
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
        const { data: { user: m } } = await Ie.auth.getUser();
        if (!m)
          return [];
        let u = Ie.from("workspaces").select(`
          id, title, description, parent_workspace_id, created_by, archived, created_at, git_repo, 
          workspace_access!inner ( access_type, shared_with_user_id ),
          workspace_activities!left ( updated_at )
        `).eq("workspace_access.shared_with_user_id", m.id);
        w || (u = u.eq("archived", !1));
        const { data: l, error: $ } = await u;
        if ($)
          throw $;
        const d = /* @__PURE__ */ new Map();
        (l || []).forEach((p) => {
          (p.workspace_access || []).forEach((E) => {
            E.shared_with_user_id === m.id && d.set(p.id, E);
          });
        });
        const c = [...new Set(
          (l || []).filter((p) => p.parent_workspace_id).map((p) => p.parent_workspace_id).filter((p) => !d.has(p))
        )];
        let A = [];
        if (c.length) {
          let p = Ie.from("workspaces").select("id, title, description, parent_workspace_id, created_by, archived, created_at").in("id", c);
          w || (p = p.eq("archived", !1));
          const { data: E, error: f } = await p;
          if (f)
            throw f;
          A = E || [];
        }
        const b = [...l || [], ...A].map((p) => {
          var E, f, y;
          return {
            id: p.id,
            title: p.title,
            description: p.description || "No description",
            parent_workspace_id: p.parent_workspace_id,
            created_by: p.created_by,
            archived: p.archived,
            created_at: p.created_at,
            latest_activity: ((f = (E = p.workspace_activities) == null ? void 0 : E[0]) == null ? void 0 : f.updated_at) || p.created_at,
            hasAccess: d.has(p.id),
            accessType: ((y = d.get(p.id)) == null ? void 0 : y.access_type) || null
          };
        });
        return b.sort((p, E) => new Date(E.latest_activity) - new Date(p.latest_activity)), h(b), b;
      } catch (m) {
        return console.error("loadWorkspaces error", m), [];
      }
    }
  };
});
function xs() {
  const a = W({
    user: null,
    isAuthenticated: !1,
    isLoading: !0,
    error: null
  }), s = W(window.location.href), o = async () => {
    var w, m, u, l, $, d, c, A;
    try {
      a.value.isLoading = !0;
      const L = await se(), { data: { session: b }, error: p } = await L.auth.getSession();
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
          name: ((w = b.user.user_metadata) == null ? void 0 : w.full_name) || ((m = b.user.user_metadata) == null ? void 0 : m.name) || ((u = b.user.email) == null ? void 0 : u.split("@")[0]) || "User",
          avatar_url: ((l = b.user.user_metadata) == null ? void 0 : l.avatar_url) || (($ = b.user.user_metadata) == null ? void 0 : $.picture) || null,
          initials: (((d = b.user.user_metadata) == null ? void 0 : d.full_name) || ((c = b.user.user_metadata) == null ? void 0 : c.name) || ((A = b.user.email) == null ? void 0 : A.split("@")[0]) || "U").split(" ").map((E) => E[0]).join("").toUpperCase().substring(0, 2)
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
    } catch (L) {
      console.error("Auth check failed:", L), a.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: L.message || "Authentication check failed"
      };
    }
  }, t = async (w, m) => {
    try {
      const u = await se(), { error: l } = await u.auth.signInWithPassword({
        email: w,
        password: m
      });
      return l ? { success: !1, error: l.message } : (await o(), sessionStorage.setItem("post-login-redirect", s.value), { success: !0 });
    } catch (u) {
      return console.error("Login error:", u), { success: !1, error: u.message || "Login failed" };
    }
  }, h = async (w, m) => {
    var u;
    try {
      const l = await se(), { data: $, error: d } = await l.auth.signUp({
        email: w,
        password: m
      });
      return d ? { success: !1, error: d.message } : $.user && !$.user.email_confirmed_at ? { success: !0, needsConfirmation: !0 } : (u = $.session) != null && u.user ? (await o(), sessionStorage.setItem("post-login-redirect", s.value), { success: !0 }) : { success: !1, error: "No session created" };
    } catch (l) {
      return console.error("Signup error:", l), { success: !1, error: l.message || "Signup failed" };
    }
  }, _ = async (w) => {
    try {
      const m = `${window.location.origin}/auth/callback`;
      console.log("[OAuth] Starting login with provider:", w), console.log("[OAuth] Redirect URL:", m), console.log("[OAuth] Current URL:", s.value), console.log("[OAuth] Current origin:", window.location.origin);
      const u = await se(), { error: l } = await u.auth.signInWithOAuth({
        provider: w,
        options: {
          redirectTo: m,
          queryParams: {
            redirect_origin: s.value
          }
        }
      });
      if (l)
        return console.error("[OAuth] Error:", l), { success: !1, error: l.message };
      const $ = s.value || window.location.href;
      return sessionStorage.setItem("post-login-redirect", $), localStorage.setItem("post-login-redirect", $), console.log("[OAuth] Stored redirect URL:", $), console.log("[OAuth] Current URL value:", s.value), console.log("[OAuth] Window location href:", window.location.href), { success: !0 };
    } catch (m) {
      return console.error("OAuth login error:", m), { success: !1, error: m.message || "OAuth login failed" };
    }
  }, V = async () => {
    try {
      const w = await se(), { error: m } = await w.auth.signOut();
      m && console.error("Logout error:", m), a.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      }, me(ke), me(_e), Te();
    } catch (w) {
      console.error("Logout error:", w);
    }
  }, U = async (w) => {
    try {
      const m = await se(), { error: u } = await m.auth.resetPasswordForEmail(w, {
        redirectTo: `${window.location.origin}/auth/reset-password`
      });
      return u ? { success: !1, error: u.message } : { success: !0 };
    } catch (m) {
      return console.error("Password reset error:", m), { success: !1, error: m.message || "Password reset failed" };
    }
  }, D = async () => {
    try {
      (await se()).auth.onAuthStateChange((m, u) => {
        var l;
        switch (console.log("Auth state changed:", m, (l = u == null ? void 0 : u.user) == null ? void 0 : l.email), m) {
          case "SIGNED_IN":
            u != null && u.user && o();
            break;
          case "SIGNED_OUT":
            a.value = {
              user: null,
              isAuthenticated: !1,
              isLoading: !1,
              error: null
            }, me(ke), me(_e), Te();
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
    authState: Y(() => a.value),
    isAuthenticated: Y(() => a.value.isAuthenticated),
    user: Y(() => a.value.user),
    isLoading: Y(() => a.value.isLoading),
    checkAuthStatus: o,
    loginWithEmail: t,
    signupWithEmail: h,
    loginWithProvider: _,
    logout: V,
    resetPassword: U,
    currentUrl: Y(() => s.value)
  };
}
const Ts = { class: "login-container" }, Ds = { class: "logo-section" }, Ns = { class: "login-buttons" }, Os = {
  key: 0,
  class: "forgot-password"
}, Hs = { class: "signup-link" }, Fs = /* @__PURE__ */ ie({
  __name: "LoginModal",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue", "login-success"],
  setup(a, { emit: s }) {
    const o = a, t = s, h = Y({
      get: () => o.modelValue,
      set: (f) => t("update:modelValue", f)
    }), _ = W(!1), V = W(!1), U = W(), { loginWithEmail: D, signupWithEmail: w, loginWithProvider: m, resetPassword: u } = xs(), l = ds({
      email: "",
      password: "",
      confirmPassword: ""
    }), $ = Y(() => ({
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
            validator: (f, y, oe) => {
              y !== l.password ? oe(new Error("Passwords do not match")) : oe();
            },
            trigger: "blur"
          }
        ]
      } : {}
    })), d = () => {
      var f;
      _.value = !_.value, l.email = "", l.password = "", l.confirmPassword = "", (f = U.value) == null || f.clearValidate();
    }, c = () => {
      var f;
      h.value = !1, l.email = "", l.password = "", l.confirmPassword = "", _.value = !1, (f = U.value) == null || f.clearValidate();
    }, A = async () => {
      if (U.value)
        try {
          await U.value.validate(), V.value = !0, _.value ? await b() : await L();
        } catch (f) {
          console.error("Form validation failed:", f);
        } finally {
          V.value = !1;
        }
    }, L = async () => {
      const f = await D(l.email, l.password);
      f.success ? (K.success("Login successful"), t("login-success", { email: l.email }), c()) : K.error("Login failed: " + f.error);
    }, b = async () => {
      const f = await w(l.email, l.password);
      f.success ? f.needsConfirmation ? K.success("Please check your email to confirm your account") : (K.success("Account created successfully"), t("login-success", { email: l.email }), c()) : K.error("Signup failed: " + f.error);
    }, p = async (f) => {
      const y = await m(f);
      y.success ? K.success("Redirecting to login provider...") : K.error("Login failed: " + y.error);
    }, E = async () => {
      if (!l.email) {
        K.warning("Please enter your email address first");
        return;
      }
      const f = await u(l.email);
      f.success ? K.success("Password reset email sent! Please check your inbox.") : K.error("Failed to send reset email: " + f.error);
    };
    return (f, y) => {
      const oe = re("el-icon"), B = re("el-input"), ae = re("el-form-item"), F = re("el-button"), Q = re("el-dialog");
      return S(), ee(Q, {
        modelValue: h.value,
        "onUpdate:modelValue": y[6] || (y[6] = (q) => h.value = q),
        title: "",
        width: "500px",
        "close-on-click-modal": !1,
        "close-on-press-escape": !0,
        "show-close": !0,
        class: "login-modal",
        onClose: c
      }, {
        default: v(() => [
          r("div", Ts, [
            r("div", Ds, [
              r("h2", null, G(_.value ? "Create Account" : "Welcome Back"), 1),
              r("p", null, G(_.value ? "Sign up to get started with your account" : "Sign in to continue to your account"), 1)
            ]),
            k(T(fs), {
              model: l,
              rules: $.value,
              ref_key: "formRef",
              ref: U,
              class: "login-form",
              onSubmit: ge(A, ["prevent"])
            }, {
              default: v(() => [
                k(ae, { prop: "email" }, {
                  default: v(() => [
                    k(B, {
                      modelValue: l.email,
                      "onUpdate:modelValue": y[0] || (y[0] = (q) => l.email = q),
                      placeholder: "Email",
                      type: "email",
                      size: "large",
                      class: "form-input"
                    }, {
                      prefix: v(() => [
                        k(oe, null, {
                          default: v(() => [
                            k(T(Cs))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                k(ae, { prop: "password" }, {
                  default: v(() => [
                    k(B, {
                      modelValue: l.password,
                      "onUpdate:modelValue": y[1] || (y[1] = (q) => l.password = q),
                      placeholder: "Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: v(() => [
                        k(oe, null, {
                          default: v(() => [
                            k(T(Ke))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                _.value ? (S(), ee(ae, {
                  key: 0,
                  prop: "confirmPassword"
                }, {
                  default: v(() => [
                    k(B, {
                      modelValue: l.confirmPassword,
                      "onUpdate:modelValue": y[2] || (y[2] = (q) => l.confirmPassword = q),
                      placeholder: "Confirm Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: v(() => [
                        k(oe, null, {
                          default: v(() => [
                            k(T(Ke))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                })) : j("", !0),
                k(ae, null, {
                  default: v(() => [
                    k(F, {
                      type: "primary",
                      class: "submit-button",
                      loading: V.value,
                      onClick: A,
                      size: "large"
                    }, {
                      default: v(() => [
                        J(G(_.value ? "Sign Up" : "Sign In"), 1)
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model", "rules"]),
            y[10] || (y[10] = r("div", { class: "divider" }, [
              r("span", null, "Or continue with")
            ], -1)),
            r("div", Ns, [
              k(F, {
                class: "login-button google",
                onClick: y[3] || (y[3] = (q) => p("google")),
                size: "large"
              }, {
                default: v(() => [...y[7] || (y[7] = [
                  r("span", { class: "social-icon" }, "G", -1),
                  J(" Google ", -1)
                ])]),
                _: 1
              }),
              k(F, {
                class: "login-button github",
                onClick: y[4] || (y[4] = (q) => p("github")),
                size: "large"
              }, {
                default: v(() => [...y[8] || (y[8] = [
                  r("span", { class: "social-icon" }, "⚡", -1),
                  J(" GitHub ", -1)
                ])]),
                _: 1
              }),
              k(F, {
                class: "login-button twitter",
                onClick: y[5] || (y[5] = (q) => p("twitter")),
                size: "large"
              }, {
                default: v(() => [...y[9] || (y[9] = [
                  r("span", { class: "social-icon" }, "X", -1),
                  J(" X (Twitter) ", -1)
                ])]),
                _: 1
              })
            ]),
            y[11] || (y[11] = r("div", { class: "terms" }, " By continuing, you agree to AI Workspace's Terms of Service and Privacy Policy ", -1)),
            _.value ? j("", !0) : (S(), x("div", Os, [
              r("a", {
                href: "#",
                onClick: ge(E, ["prevent"])
              }, "Forgot Password?")
            ])),
            r("div", Hs, [
              J(G(_.value ? "Already have an account?" : "Don't have an account?") + " ", 1),
              r("a", {
                href: "#",
                onClick: ge(d, ["prevent"])
              }, G(_.value ? "Sign in" : "Sign up"), 1)
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
const Me = (a, s) => {
  const o = a.__vccOpts || a;
  for (const [t, h] of s)
    o[t] = h;
  return o;
}, zs = /* @__PURE__ */ Me(Fs, [["__scopeId", "data-v-684a3f28"]]), Bs = { class: "session-loss-content" }, Gs = { class: "session-loss-icon" }, Ks = { class: "session-loss-message" }, qs = {
  key: 0,
  class: "session-loss-details"
}, Js = { class: "detail-item" }, Ys = { class: "detail-value" }, js = { class: "detail-item" }, Xs = { class: "detail-value" }, Qs = { class: "session-loss-actions" }, Zs = {
  key: 0,
  class: "retry-status"
}, eo = { class: "retry-message" }, so = /* @__PURE__ */ ie({
  __name: "SessionLossModal",
  props: {
    modelValue: { type: Boolean },
    sessionLossEvent: {},
    canRetrySession: { type: Boolean }
  },
  emits: ["update:modelValue", "retry", "login", "refresh"],
  setup(a, { emit: s }) {
    const o = a, t = s, h = W(!1), _ = W(0), V = W(void 0), U = W(""), D = Y({
      get: () => o.modelValue,
      set: (d) => t("update:modelValue", d)
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
    }, m = (d) => d.toLocaleString(), u = async () => {
      if (h.value)
        return;
      h.value = !0, _.value = 0, V.value = void 0, U.value = "Attempting to restore session...";
      const d = setInterval(() => {
        _.value < 90 && (_.value += Math.random() * 20);
      }, 200);
      try {
        t("retry"), await new Promise((c) => setTimeout(c, 2e3)), _.value = 100, V.value = "success", U.value = "Session restored successfully!", setTimeout(() => {
          D.value = !1;
        }, 1e3);
      } catch {
        _.value = 100, V.value = "exception", U.value = "Failed to restore session. Please log in again.", K.error("Session restoration failed");
      } finally {
        clearInterval(d), setTimeout(() => {
          h.value = !1, _.value = 0, V.value = void 0, U.value = "";
        }, 3e3);
      }
    }, l = () => {
      t("login"), D.value = !1;
    }, $ = () => {
      t("refresh"), window.location.reload();
    };
    return ue(() => o.sessionLossEvent, (d) => {
      d && (h.value = !1, _.value = 0, V.value = void 0, U.value = "");
    }), (d, c) => (S(), ee(T(gs), {
      modelValue: D.value,
      "onUpdate:modelValue": c[0] || (c[0] = (A) => D.value = A),
      title: "Session Expired",
      width: "500px",
      "close-on-click-modal": !1,
      "close-on-press-escape": !1,
      "show-close": !1,
      class: "session-loss-modal",
      center: ""
    }, {
      default: v(() => {
        var A;
        return [
          r("div", Bs, [
            r("div", Gs, [
              k(T(Ee), {
                size: "48",
                color: "#f56c6c"
              }, {
                default: v(() => [
                  k(T(Je))
                ]),
                _: 1
              })
            ]),
            r("div", Ks, [
              c[3] || (c[3] = r("h3", null, "Your session has expired", -1)),
              r("p", null, G(((A = d.sessionLossEvent) == null ? void 0 : A.message) || "Please log in again to continue using the application."), 1),
              d.sessionLossEvent ? (S(), x("div", qs, [
                r("div", Js, [
                  c[1] || (c[1] = r("span", { class: "detail-label" }, "Issue:", -1)),
                  r("span", Ys, G(w(d.sessionLossEvent.type)), 1)
                ]),
                r("div", js, [
                  c[2] || (c[2] = r("span", { class: "detail-label" }, "Time:", -1)),
                  r("span", Xs, G(m(d.sessionLossEvent.timestamp)), 1)
                ])
              ])) : j("", !0)
            ]),
            r("div", Qs, [
              d.canRetrySession && !h.value ? (S(), ee(T(Pe), {
                key: 0,
                type: "primary",
                onClick: u,
                loading: h.value
              }, {
                default: v(() => [
                  k(T(Ee), null, {
                    default: v(() => [
                      k(T(qe))
                    ]),
                    _: 1
                  }),
                  c[4] || (c[4] = J(" Try Again ", -1))
                ]),
                _: 1
              }, 8, ["loading"])) : j("", !0),
              k(T(Pe), {
                type: "primary",
                onClick: l,
                disabled: h.value
              }, {
                default: v(() => [
                  k(T(Ee), null, {
                    default: v(() => [
                      k(T(Ne))
                    ]),
                    _: 1
                  }),
                  c[5] || (c[5] = J(" Log In ", -1))
                ]),
                _: 1
              }, 8, ["disabled"]),
              d.canRetrySession ? j("", !0) : (S(), ee(T(Pe), {
                key: 1,
                type: "info",
                onClick: $,
                disabled: h.value
              }, {
                default: v(() => [
                  k(T(Ee), null, {
                    default: v(() => [
                      k(T(qe))
                    ]),
                    _: 1
                  }),
                  c[6] || (c[6] = J(" Refresh Page ", -1))
                ]),
                _: 1
              }, 8, ["disabled"]))
            ]),
            h.value ? (S(), x("div", Zs, [
              k(T(hs), {
                percentage: _.value,
                status: V.value,
                "stroke-width": 6
              }, null, 8, ["percentage", "status"]),
              r("p", eo, G(U.value), 1)
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
}, Mo = { class: "nav-item" }, Wo = ["href", "onClick"], Vo = { class: "header-right" }, $o = { class: "user-profile" }, Ro = { class: "user-info" }, Uo = { class: "user-name" }, Po = { class: "user-avatar" }, xo = ["src", "alt"], To = {
  key: 1,
  class: "avatar-placeholder"
}, Do = {
  key: 4,
  class: "header-content header-unauthenticated"
}, No = { class: "header-left" }, Oo = { class: "logo-section" }, Ho = {
  href: "/",
  class: "logo"
}, Fo = ["src"], zo = {
  key: 1,
  class: "text-logo"
}, Bo = { class: "header-right" }, Go = { class: "workspace-list" }, Ko = ["onClick"], qo = { class: "workspace-icon" }, Jo = { class: "workspace-details" }, Yo = { class: "workspace-members" }, jo = {
  key: 0,
  class: "current-indicator"
}, be = 50, Xo = /* @__PURE__ */ ie({
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
    const o = a, t = s, { authState: h, logout: _, isLoading: V } = Ws(), {
      isSessionValid: U,
      sessionLossEvent: D,
      hasSessionLoss: w,
      canRetrySession: m,
      retrySession: u,
      clearSessionLoss: l
    } = Us(), $ = () => {
      try {
        return Ps();
      } catch {
        return console.warn("[AIWorkspaceHeader] Pinia not initialized yet, using fallback state"), null;
      }
    }, d = () => {
      try {
        return typeof window < "u" ? !!window.__PINIA__ || !!window.Pinia : !1;
      } catch {
        return !1;
      }
    }, c = W($()), A = Y(() => !!c.value), L = W(0), b = () => {
      if (!c.value && L.value < be) {
        if (d()) {
          const n = $();
          if (n) {
            c.value = n, console.log("[AIWorkspaceHeader] Pinia store initialized successfully");
            return;
          }
        }
        L.value++, setTimeout(b, 100);
      } else
        L.value >= be && console.warn("[AIWorkspaceHeader] Pinia initialization failed after maximum retries, using fallback mode");
    };
    Se(() => {
      c.value || b();
    });
    const p = W(!1), E = W(!1), f = W(!1), y = W([]), oe = W([]), B = W({
      name: "",
      email: "",
      avatar_url: null,
      initials: ""
    }), ae = W([]), F = W([]), Q = W(!1);
    ue(F, async (n) => {
      n.length > 0 && A.value && R.value && await N();
    }, { immediate: !1 }), ue(() => window.location.pathname + window.location.search + window.location.hash, async () => {
      A.value && R.value && await N();
    }, { immediate: !1 });
    const q = W(window.location.pathname);
    ue(() => window.location.pathname, (n) => {
      q.value = n;
    }, { immediate: !0 }), ue(A, (n) => {
      !n && L.value < be && b();
    });
    const I = () => {
      try {
        const n = window.location.pathname.match(/\/single-workspace\/(\d+)/);
        if (n)
          return n[1];
        const i = new URLSearchParams(window.location.search).get("workspace_id");
        if (i)
          return i;
        const g = window.location.hash.match(/workspace_id=(\d+)/);
        return g ? g[1] : null;
      } catch (n) {
        return console.warn("[AIWorkspaceHeader] Error parsing URL for workspace_id:", n), null;
      }
    }, O = () => {
      try {
        return window.location.pathname.includes("/all-workspace/");
      } catch (n) {
        return console.warn("[AIWorkspaceHeader] Error checking all-workspace mode:", n), !1;
      }
    }, N = async () => {
      if (!c.value || !A.value)
        return;
      const n = O();
      if (Q.value = n, n) {
        c.value.currentWorkspace = null, localStorage.removeItem("current_workspace"), console.log("[AIWorkspaceHeader] Auto-selected all-workspace mode from URL");
        return;
      }
      const e = I();
      if (e)
        try {
          F.value.length === 0 && await ce();
          const i = F.value.find((g) => g.id.toString() === e);
          i ? (c.value.setCurrentWorkspace(i), console.log(`[AIWorkspaceHeader] Auto-selected workspace from URL: ${i.title} (ID: ${i.id})`), t("workspaceChange", i)) : console.warn(`[AIWorkspaceHeader] Workspace with ID ${e} not found in available workspaces`);
        } catch (i) {
          console.error("[AIWorkspaceHeader] Error auto-selecting workspace from URL:", i);
        }
    }, R = Y(() => h.value.isAuthenticated), H = Y(() => c.value ? c.value.currentWorkspace : null), X = W([
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
    ]), te = W([
      { label: "Dashboard", key: "dashboard", url: "/dashboard" },
      { label: "All Tasks", key: "tasks", url: "/tasks" },
      { label: "All Goals", key: "goals", url: "/goals" },
      { label: "All Events", key: "events", url: "/events" },
      { label: "All Drive", key: "files", url: "/files" },
      { label: "All Contacts", key: "contacts", url: "/contacts" },
      { label: "All Settings", key: "settings", url: "/settings" }
    ]), M = Y(() => Q.value ? te.value : X.value), P = Y(() => {
      try {
        const n = q.value;
        let e = "";
        const i = n.match(/\/all-workspace\/([^\/]+)/);
        if (i)
          e = i[1];
        else {
          const g = n.match(/\/single-workspace\/\d+\/([^\/]+)/);
          if (g)
            e = g[1];
          else {
            const z = n.match(/\/([^\/]+)$/);
            z && (e = z[1]);
          }
        }
        if (e) {
          const g = M.value.find(
            (z) => z.key === e || z.url.includes(`/${e}`) || z.url === `/${e}`
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
      n.forEach((z) => {
        e.set(z.id, { ...z, children: [] });
      });
      const i = [];
      e.forEach((z) => {
        z.parent_workspace_id && e.has(z.parent_workspace_id) ? e.get(z.parent_workspace_id).children.push(z) : i.push(z);
      });
      const g = (z) => {
        z.sort((Z, pe) => Z.title.localeCompare(pe.title)), z.forEach((Z) => {
          Z.children && g(Z.children);
        });
      };
      return g(i), i;
    }, ne = (n, e = 0, i = []) => (n.forEach((g) => {
      i.push({ ...g, level: e }), g.children && g.children.length && ne(g.children, e + 1, i);
    }), i), ce = async () => {
      var n, e, i;
      try {
        const g = await ((n = c.value) == null ? void 0 : n.loadWorkspaces());
        if (ae.value = le(g || []), F.value = ne(ae.value), oe.value = F.value, y.value = F.value, o.currentWorkspaceId) {
          const z = F.value.find((Z) => {
            var pe;
            return Z.id.toString() === ((pe = o.currentWorkspaceId) == null ? void 0 : pe.toString());
          });
          z && ((e = c.value) == null || e.setCurrentWorkspace(z));
        } else
          !H.value && F.value.length && ((i = c.value) == null || i.setCurrentWorkspace(F.value[0]));
      } catch (g) {
        console.error("loadWorkspaces (header) error", g);
      }
    }, de = (n) => {
      if (console.log("Navigation command:", n), n === "all-workspace") {
        window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
        return;
      } else {
        const e = parseInt(n.replace("workspace-", ""));
        window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e}/dashboard`;
        return;
      }
    }, Qe = (n) => {
      const e = H.value, i = Q.value;
      switch (n.key) {
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
    }, Ze = (n) => {
      const e = H.value, i = Q.value;
      switch (n.key) {
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
          return i ? `https://app.aiworkspace.pro/all-workspace/${n.key}` : e ? `https://app.aiworkspace.pro/single-workspace/${e.id}/${n.key}` : `https://app.aiworkspace.pro/${n.key}`;
      }
    }, Ce = (n) => {
      switch (n) {
        case "profile":
          o.onProfileClick ? o.onProfileClick() : K.info("Profile settings coming soon");
          break;
        case "workspaces":
          p.value = !0;
          break;
        case "logout":
          ss();
          break;
      }
    }, Fe = (n) => {
      var e;
      (e = c.value) == null || e.setCurrentWorkspace(n), p.value = !1, t("workspaceChange", n), K.success(`Switched to ${n.title}`);
    }, es = () => {
      Be.prompt("Enter workspace name:", "Create New Workspace", {
        confirmButtonText: "Create",
        cancelButtonText: "Cancel",
        inputPattern: /\S/,
        inputErrorMessage: "Workspace name cannot be empty"
      }).then(({ value: n }) => {
        var i;
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
        y.value.push(e), (i = c.value) == null || i.setWorkspaces(y.value), Fe(e), K.success(`Created workspace: ${n}`);
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
        (n = c.value) == null || n.clearData(), await _(), typeof window < "u" && window.dispatchEvent(new CustomEvent("session-logout-detected", {
          detail: { timestamp: /* @__PURE__ */ new Date(), source: "manual-logout" }
        })), t("logout"), K.success("Signed out successfully");
      }).catch(() => {
      });
    }, We = async () => {
      var n, e;
      if (h.value.user) {
        const i = h.value.user;
        B.value = {
          name: i.name || ((n = i.email) == null ? void 0 : n.split("@")[0]) || "User",
          email: i.email || "",
          avatar_url: i.avatar_url || null,
          initials: (i.name || ((e = i.email) == null ? void 0 : e.split("@")[0]) || "U").split(" ").map((g) => g[0]).join("").toUpperCase().substring(0, 2)
        }, o.showWorkspaceSelector && await ce();
      }
    };
    ue(() => h.value.user, (n) => {
      var e;
      n ? We() : (B.value = { name: "", email: "", avatar_url: null, initials: "" }, (e = c.value) == null || e.clearData());
    }), ue(w, (n) => {
      n && R.value && (console.log("[AIWorkspaceHeader] Session loss detected, showing modal"), f.value = !0);
    }), ue(() => o.currentWorkspaceId, (n) => {
      var e;
      if (n && F.value.length) {
        const i = F.value.find((g) => g.id.toString() === n.toString());
        i && ((e = c.value) == null || e.setCurrentWorkspace(i));
      }
    }), Se(async () => {
      R.value && (await We(), await N());
    });
    const os = async (n) => {
      console.log("Login successful:", n), E.value = !1, await We(), t("login"), K.success("Welcome back!");
    }, as = async () => {
      console.log("[AIWorkspaceHeader] Retrying session..."), await u() ? (f.value = !1, l(), K.success("Session restored successfully!")) : K.error("Failed to restore session. Please log in again.");
    }, ts = () => {
      console.log("[AIWorkspaceHeader] Opening login modal from session loss"), f.value = !1, E.value = !0;
    }, rs = () => {
      console.log("[AIWorkspaceHeader] Refreshing page due to session loss"), window.location.reload();
    }, ns = () => {
      L.value = 0, b(), K.success("Manual Pinia retry initiated.");
    };
    return (n, e) => {
      const i = re("el-icon"), g = re("el-button"), z = re("el-tag"), Z = re("el-dropdown-item"), pe = re("el-dropdown-menu"), Ve = re("el-dropdown"), is = re("el-dialog");
      return S(), x("header", ao, [
        !A.value && L.value < be || T(V) ? (S(), x("div", to, [
          e[10] || (e[10] = Ae('<div class="header-left" data-v-2d5d4116><div class="logo-section" data-v-2d5d4116><a href="/" class="logo" data-v-2d5d4116><div class="text-logo" data-v-2d5d4116><span class="logo-text" data-v-2d5d4116>AI Workspace</span></div></a></div></div>', 1)),
          r("div", ro, [
            r("span", no, [
              T(V) ? (S(), x("span", io, "Syncing authentication...")) : (S(), x("span", lo, "Initializing..."))
            ])
          ])
        ])) : !A.value && L.value >= be ? (S(), x("div", co, [
          e[12] || (e[12] = Ae('<div class="header-left" data-v-2d5d4116><div class="logo-section" data-v-2d5d4116><a href="/" class="logo" data-v-2d5d4116><div class="text-logo" data-v-2d5d4116><span class="logo-text" data-v-2d5d4116>AI Workspace</span></div></a></div></div>', 1)),
          r("div", { class: "header-center" }, [
            e[11] || (e[11] = r("span", { class: "fallback-text" }, "Header Ready (Fallback Mode)", -1)),
            r("button", {
              onClick: ns,
              class: "retry-button"
            }, "Retry Pinia")
          ]),
          e[13] || (e[13] = Ae('<div class="header-right" data-v-2d5d4116><div class="user-profile" data-v-2d5d4116><div class="user-info" data-v-2d5d4116><span class="user-name" data-v-2d5d4116>User</span></div><div class="user-avatar" data-v-2d5d4116><span class="avatar-placeholder" data-v-2d5d4116>U</span></div></div></div>', 1))
        ])) : R.value && !T(U) ? (S(), x("div", uo, [
          e[16] || (e[16] = Ae('<div class="header-left" data-v-2d5d4116><div class="logo-section" data-v-2d5d4116><a href="/" class="logo" data-v-2d5d4116><div class="text-logo" data-v-2d5d4116><span class="logo-text" data-v-2d5d4116>AI Workspace</span></div></a></div></div>', 1)),
          r("div", po, [
            r("span", fo, [
              k(i, null, {
                default: v(() => [
                  k(T(Je))
                ]),
                _: 1
              }),
              e[14] || (e[14] = J(" Session expired - Please log in again ", -1))
            ])
          ]),
          r("div", go, [
            k(g, {
              type: "primary",
              onClick: e[0] || (e[0] = (C) => E.value = !0)
            }, {
              default: v(() => [
                k(i, null, {
                  default: v(() => [
                    k(T(Ne))
                  ]),
                  _: 1
                }),
                e[15] || (e[15] = J(" Log In ", -1))
              ]),
              _: 1
            })
          ])
        ])) : R.value && T(U) ? (S(), x("div", ho, [
          r("div", vo, [
            r("div", wo, [
              r("a", mo, [
                n.customLogo ? (S(), x("img", {
                  key: 0,
                  src: n.customLogo,
                  alt: "AIWorkspace",
                  class: "logo-image"
                }, null, 8, ko)) : (S(), x("div", _o, [...e[17] || (e[17] = [
                  r("span", { class: "logo-text" }, "AI Workspace", -1)
                ])]))
              ])
            ])
          ]),
          n.showSecondaryNavigation ? (S(), x("div", yo, [
            r("nav", So, [
              n.showWorkspaceSelector ? (S(), ee(Ve, {
                key: 0,
                onCommand: de,
                trigger: "hover"
              }, {
                dropdown: v(() => [
                  k(pe, { class: "workspace-tree-dropdown" }, {
                    default: v(() => [
                      k(Z, {
                        command: "all-workspace",
                        class: $e({ active: Q.value })
                      }, {
                        default: v(() => [
                          r("a", Co, [
                            r("div", Ao, [
                              e[19] || (e[19] = r("span", { class: "workspace-icon" }, "🌐", -1)),
                              e[20] || (e[20] = r("span", null, "All workspace", -1)),
                              Q.value ? (S(), ee(z, {
                                key: 0,
                                size: "small",
                                type: "success"
                              }, {
                                default: v(() => [...e[18] || (e[18] = [
                                  J("Current", -1)
                                ])]),
                                _: 1
                              })) : j("", !0)
                            ])
                          ])
                        ]),
                        _: 1
                      }, 8, ["class"]),
                      F.value.length > 0 ? (S(), ee(Z, {
                        key: 0,
                        divided: "",
                        disabled: ""
                      })) : j("", !0),
                      (S(!0), x(Re, null, Ue(F.value, (C) => (S(), ee(Z, {
                        key: C.id,
                        command: `workspace-${C.id}`
                      }, {
                        default: v(() => {
                          var ve;
                          return [
                            r("a", {
                              href: `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${C.id}/dashboard`,
                              class: "nav-link"
                            }, [
                              r("div", {
                                class: "workspace-dropdown-item",
                                style: ps({ paddingLeft: (C.level || 0) * 16 + "px" })
                              }, [
                                r("span", Io, G(C.children && C.children.length ? "📁" : "📄"), 1),
                                r("span", null, G(C.title), 1),
                                C.id === ((ve = H.value) == null ? void 0 : ve.id) ? (S(), ee(z, {
                                  key: 0,
                                  size: "small",
                                  type: "success"
                                }, {
                                  default: v(() => [...e[21] || (e[21] = [
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
                      F.value.length === 0 ? (S(), ee(Z, {
                        key: 1,
                        disabled: ""
                      }, {
                        default: v(() => [...e[22] || (e[22] = [
                          J(" No workspaces ", -1)
                        ])]),
                        _: 1
                      })) : j("", !0)
                    ]),
                    _: 1
                  })
                ]),
                default: v(() => {
                  var C;
                  return [
                    r("span", bo, [
                      J(G(Q.value ? "All workspace" : ((C = H.value) == null ? void 0 : C.title) || "Select Workspace") + " ", 1),
                      k(i, { class: "nav-arrow" }, {
                        default: v(() => [
                          k(T(Ge))
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }),
                _: 1
              })) : j("", !0),
              n.showWorkspaceSelector ? (S(), x("span", Lo, "/")) : j("", !0),
              n.showSecondaryNavigation ? (S(), ee(Ve, {
                key: 2,
                trigger: "hover"
              }, {
                dropdown: v(() => [
                  k(pe, null, {
                    default: v(() => [
                      (S(!0), x(Re, null, Ue(M.value, (C) => (S(), ee(Z, {
                        key: C.label,
                        class: $e({ active: C.active })
                      }, {
                        default: v(() => [
                          r("a", {
                            href: Ze(C),
                            class: "nav-link",
                            onClick: ge((ve) => Qe(C), ["prevent"])
                          }, G(C.label), 9, Wo)
                        ]),
                        _: 2
                      }, 1032, ["class"]))), 128))
                    ]),
                    _: 1
                  })
                ]),
                default: v(() => [
                  r("span", Mo, [
                    J(G(P.value) + " ", 1),
                    k(i, { class: "nav-arrow" }, {
                      default: v(() => [
                        k(T(Ge))
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })) : j("", !0)
            ])
          ])) : j("", !0),
          r("div", Vo, [
            k(Ve, {
              onCommand: Ce,
              trigger: "click",
              placement: "bottom-end"
            }, {
              dropdown: v(() => [
                k(pe, null, {
                  default: v(() => [
                    k(Z, null, {
                      default: v(() => [
                        r("a", {
                          href: "/profile",
                          class: "nav-link",
                          onClick: e[1] || (e[1] = ge((C) => Ce("profile"), ["prevent"]))
                        }, "Profile Settings")
                      ]),
                      _: 1
                    }),
                    n.showWorkspaceSelector ? (S(), ee(Z, { key: 0 }, {
                      default: v(() => [
                        r("a", {
                          href: "#switch-workspace",
                          class: "nav-link",
                          onClick: e[2] || (e[2] = ge((C) => Ce("workspaces"), ["prevent"]))
                        }, "Switch Workspace")
                      ]),
                      _: 1
                    })) : j("", !0),
                    k(Z, { divided: "" }, {
                      default: v(() => [
                        r("a", {
                          href: "#signout",
                          class: "nav-link",
                          onClick: e[3] || (e[3] = ge((C) => Ce("logout"), ["prevent"]))
                        }, "Sign Out")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              default: v(() => [
                r("div", $o, [
                  r("div", Ro, [
                    r("span", Uo, G(B.value.name), 1)
                  ]),
                  r("div", Po, [
                    B.value.avatar_url ? (S(), x("img", {
                      key: 0,
                      src: B.value.avatar_url,
                      alt: B.value.name
                    }, null, 8, xo)) : (S(), x("span", To, G(B.value.initials), 1))
                  ])
                ])
              ]),
              _: 1
            })
          ])
        ])) : (S(), x("div", Do, [
          r("div", No, [
            r("div", Oo, [
              r("a", Ho, [
                n.customLogo ? (S(), x("img", {
                  key: 0,
                  src: n.customLogo,
                  alt: "AIWorkspace",
                  class: "logo-image"
                }, null, 8, Fo)) : (S(), x("div", zo, [...e[23] || (e[23] = [
                  r("span", { class: "logo-text" }, "AI Workspace", -1)
                ])]))
              ])
            ])
          ]),
          e[25] || (e[25] = r("div", { class: "header-center" }, [
            r("span", { class: "welcome-text" }, "Welcome to AI Workspace")
          ], -1)),
          r("div", Bo, [
            k(g, {
              type: "primary",
              size: "large",
              class: "login-button",
              onClick: e[4] || (e[4] = (C) => E.value = !0)
            }, {
              default: v(() => [
                k(i, null, {
                  default: v(() => [
                    k(T(Ne))
                  ]),
                  _: 1
                }),
                e[24] || (e[24] = J(" Login / Signup ", -1))
              ]),
              _: 1
            })
          ])
        ])),
        R.value && n.showWorkspaceSelector ? (S(), ee(is, {
          key: 5,
          modelValue: p.value,
          "onUpdate:modelValue": e[6] || (e[6] = (C) => p.value = C),
          title: "Switch Workspace",
          width: "500px",
          onClose: e[7] || (e[7] = (C) => p.value = !1)
        }, {
          footer: v(() => [
            k(g, {
              onClick: e[5] || (e[5] = (C) => p.value = !1)
            }, {
              default: v(() => [...e[26] || (e[26] = [
                J("Cancel", -1)
              ])]),
              _: 1
            }),
            k(g, {
              type: "primary",
              onClick: es
            }, {
              default: v(() => [...e[27] || (e[27] = [
                J("Create New Workspace", -1)
              ])]),
              _: 1
            })
          ]),
          default: v(() => [
            r("div", Go, [
              (S(!0), x(Re, null, Ue(y.value, (C) => {
                var ve, ze;
                return S(), x("div", {
                  key: C.id,
                  class: $e(["workspace-item", { active: C.id === ((ve = H.value) == null ? void 0 : ve.id) }]),
                  onClick: (aa) => Fe(C)
                }, [
                  r("div", qo, G(C.children && C.children.length ? "📁" : "📄"), 1),
                  r("div", Jo, [
                    r("h3", null, G(C.title), 1),
                    r("p", null, G(C.description), 1),
                    r("span", Yo, G(C.hasAccess ? "Active" : "Inactive"), 1)
                  ]),
                  C.id === ((ze = H.value) == null ? void 0 : ze.id) ? (S(), x("div", jo, [
                    k(i, null, {
                      default: v(() => [
                        k(T(ys))
                      ]),
                      _: 1
                    })
                  ])) : j("", !0)
                ], 10, Ko);
              }), 128))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])) : j("", !0),
        k(zs, {
          modelValue: E.value,
          "onUpdate:modelValue": e[8] || (e[8] = (C) => E.value = C),
          onLoginSuccess: os
        }, null, 8, ["modelValue"]),
        k(oo, {
          modelValue: f.value,
          "onUpdate:modelValue": e[9] || (e[9] = (C) => f.value = C),
          "session-loss-event": T(D),
          "can-retry-session": T(m) || !1,
          onRetry: as,
          onLogin: ts,
          onRefresh: rs
        }, null, 8, ["modelValue", "session-loss-event", "can-retry-session"])
      ]);
    };
  }
});
const Sa = /* @__PURE__ */ Me(Xo, [["__scopeId", "data-v-2d5d4116"]]), Qo = { class: "auth-callback" }, Zo = /* @__PURE__ */ ie({
  __name: "AuthCallback",
  setup(a) {
    Se(async () => {
      console.log("[AuthCallback] Component mounted, starting callback processing..."), console.log("[AuthCallback] Current URL:", window.location.href), console.log("[AuthCallback] Current hash:", window.location.hash);
      try {
        await new Promise((h) => setTimeout(h, 500));
        const { data: o, error: t } = await Ie.auth.getSession();
        if (t) {
          console.error("Error processing callback:", t), s();
          return;
        }
        if (o != null && o.session) {
          const h = o.session.user;
          console.log("OAuth login successful:", h.email), o.session.access_token && ye(ke, o.session.access_token), o.session.refresh_token && ye(_e, o.session.refresh_token), De();
          const _ = ws();
          console.log("[callback] Post-login redirect URL:", _), console.log("[callback] Session storage redirect:", sessionStorage.getItem("post-login-redirect")), console.log("[callback] Local storage redirect:", localStorage.getItem("post-login-redirect"));
          const V = _ || "/";
          if (console.log("[callback] Final redirect URL:", V), V.startsWith("/")) {
            const U = window.location.origin, D = `${U}${V}`;
            console.log("[callback] redirecting to:", D, { hostname: window.location.hostname, origin: U }), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
              window.location.href = D;
            }, 100);
          } else
            console.log("[callback] redirecting to absolute URL:", V), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
              window.location.href = V;
            }, 100);
        } else
          s();
      } catch (o) {
        console.error("Error processing callback:", o), s();
      }
    });
    const s = () => {
      const t = window.location.href.replace("/auth/callback", "");
      window.location.href = t;
    };
    return (o, t) => (S(), x("div", Qo, [...t[0] || (t[0] = [
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
const ba = /* @__PURE__ */ Me(Zo, [["__scopeId", "data-v-acdf6325"]]), fe = class fe {
  constructor() {
    we(this, "validationCache", /* @__PURE__ */ new Map());
    we(this, "CACHE_DURATION", Xe().validationCacheDuration);
  }
  // Helper function to get cookie value
  getCookieValue(s) {
    var h;
    if (typeof document > "u")
      return null;
    const t = `; ${document.cookie}`.split(`; ${s}=`);
    return t.length === 2 && ((h = t.pop()) == null ? void 0 : h.split(";").shift()) || null;
  }
  static getInstance() {
    return fe.instance || (fe.instance = new fe()), fe.instance;
  }
  /**
   * Validate current session with caching and improved reliability
   */
  async validateSession(s = !1) {
    var t, h;
    const o = "session_validation";
    if (!s) {
      const _ = this.validationCache.get(o);
      if (_ && Date.now() - _.timestamp < this.CACHE_DURATION)
        return console.log("[SessionValidator] Using cached validation result"), _.result;
    }
    console.log("[SessionValidator] Validating session...");
    try {
      const _ = this.getCookieValue("sb-access-token"), V = this.getCookieValue("sb-refresh-token");
      if (!_ || !V) {
        const d = {
          isValid: !1,
          needsLogin: !0,
          error: "No authentication tokens found",
          canRetry: !1
        };
        return this.cacheResult(o, d), d;
      }
      const U = await se();
      let D = null, w = null;
      for (let d = 1; d <= 2; d++)
        try {
          const c = await U.auth.getSession();
          D = c.data.session, w = c.error;
          break;
        } catch (c) {
          if (console.warn(`[SessionValidator] Network error on attempt ${d}:`, c), d === 2) {
            const A = {
              isValid: !1,
              needsLogin: !1,
              // Don't force login on network issues
              error: "Network error during validation",
              canRetry: !0
            };
            return this.cacheResult(o, A), A;
          }
          await new Promise((A) => setTimeout(A, 1e3));
        }
      if (w) {
        console.warn("[SessionValidator] Error getting session:", w);
        const c = {
          isValid: !1,
          needsLogin: ((t = w.message) == null ? void 0 : t.includes("Invalid JWT")) || ((h = w.message) == null ? void 0 : h.includes("JWT expired")),
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
      const m = /* @__PURE__ */ new Date(), u = new Date(D.expires_at * 1e3), l = 5 * 60 * 1e3;
      if (m >= new Date(u.getTime() - l)) {
        const d = {
          isValid: !1,
          needsLogin: !0,
          error: "Session is close to expiry or expired",
          canRetry: !0
        };
        return this.cacheResult(o, d), d;
      }
      const $ = {
        isValid: !0,
        needsLogin: !1,
        canRetry: !1
      };
      return this.cacheResult(o, $), $;
    } catch (_) {
      console.error("[SessionValidator] Error validating session:", _);
      const V = {
        isValid: !1,
        needsLogin: !1,
        // Don't force login on unexpected errors
        error: `Validation error: ${_}`,
        canRetry: !0
      };
      return this.cacheResult(o, V), V;
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
      const t = await se(), { data: h, error: _ } = await t.auth.setSession({
        access_token: s,
        refresh_token: o
      });
      return _ ? (console.warn("[SessionValidator] Error restoring session:", _), {
        isValid: !1,
        needsLogin: !0,
        error: `Restoration error: ${_.message}`,
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
we(fe, "instance");
let Oe = fe;
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
  }, s = () => {
    console.log("[SessionValidator] Network lost, session validation may fail");
  };
  return window.addEventListener("online", a), window.addEventListener("offline", s), () => {
    window.removeEventListener("online", a), window.removeEventListener("offline", s);
  };
}
export {
  ke as ACCESS_COOKIE,
  Sa as AIWorkspaceHeader,
  ba as AuthCallback,
  Ua as LS_ACCESS_KEY,
  Pa as LS_REFRESH_KEY,
  zs as LoginModal,
  Le as PackageError,
  _e as REFRESH_COOKIE,
  oo as SessionLossModal,
  Oe as SessionValidator,
  xa as buildOAuthRedirectUrl,
  Te as clearLocalStorageTokens,
  oa as clearSessionCache,
  me as clearSessionCookie,
  La as configureSupabase,
  $s as conservativeConfig,
  ma as createSessionConfig,
  Sa as default,
  he as defaultSessionConfig,
  ya as detectionScenarios,
  Ye as developmentConfig,
  Ta as ensureCrossSubdomainCookies,
  Vs as fastDetectionConfig,
  ka as getConfigByPreset,
  Da as getCookie,
  ws as getPostLoginBase,
  Xe as getSessionConfig,
  se as getSupabase,
  Ls as handleBundlingError,
  Ma as handleDomainChangeAuth,
  vs as initializeCrossSubdomainAuth,
  Ca as initializeSessionValidation,
  je as productionConfig,
  Wa as restoreCrossSubdomainSession,
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
  Rs as sessionConfigPresets,
  He as sessionValidator,
  ye as setSessionCookie,
  Va as setupAuthStateListener,
  Ms as setupGlobalErrorHandler,
  $a as setupImmediateCrossSubdomainAuth,
  Aa as setupNetworkAwareValidation,
  Oa as setupUniversalCallback,
  Ie as supabase,
  De as syncCookiesToLocalStorage,
  _a as timingInfo,
  xs as useAuth,
  Ws as useEnhancedAuth,
  Us as useSessionMonitor,
  Ps as useWorkspaceStore,
  ea as validateSession
};
