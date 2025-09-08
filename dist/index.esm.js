var ls = Object.defineProperty;
var cs = (r, o, t) => o in r ? ls(r, o, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[o] = t;
var Ae = (r, o, t) => (cs(r, typeof o != "symbol" ? o + "" : o, t), t);
import { defineComponent as re, openBlock as _, createElementBlock as U, createElementVNode as s, ref as R, computed as q, onMounted as ye, onUnmounted as us, watch as ce, reactive as ds, resolveComponent as te, createBlock as Q, withCtx as f, toDisplayString as B, createVNode as g, unref as x, withModifiers as ge, createCommentVNode as j, createTextVNode as Y, createStaticVNode as Ie, normalizeClass as Ve, Fragment as Pe, renderList as $e, normalizeStyle as ps } from "vue";
import { ElForm as fs, ElMessage as K, ElDialog as hs, ElIcon as Ee, ElButton as xe, ElProgress as gs, ElMessageBox as Ke } from "element-plus";
import { i as vs, g as ee, r as De, s as Le } from "./supabase-c9edd337.mjs";
import { a as ma, b as ka } from "./supabase-c9edd337.mjs";
import { clearSessionCookie as ke, ACCESS_COOKIE as ne, REFRESH_COOKIE as ie, clearLocalStorageTokens as Ne, getCookie as pe, setSessionCookie as _e, syncCookiesToLocalStorage as Oe, getPostLoginBase as ws } from "./utils/authRedirect.js";
import { LS_ACCESS_KEY as ya, LS_REFRESH_KEY as Sa, buildOAuthRedirectUrl as ba, ensureCrossSubdomainCookies as Ca } from "./utils/authRedirect.js";
import { defineStore as ms } from "pinia";
import { setupUniversalCallback as Ia } from "./utils/universalCallback.js";
/*! Element Plus Icons Vue v2.3.2 */
var ks = /* @__PURE__ */ re({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(r) {
    return (o, t) => (_(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      s("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"
      })
    ]));
  }
}), Ye = ks, _s = /* @__PURE__ */ re({
  name: "Check",
  __name: "check",
  setup(r) {
    return (o, t) => (_(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      s("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      })
    ]));
  }
}), ys = _s, Ss = /* @__PURE__ */ re({
  name: "Lock",
  __name: "lock",
  setup(r) {
    return (o, t) => (_(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      s("path", {
        fill: "currentColor",
        d: "M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96"
      }),
      s("path", {
        fill: "currentColor",
        d: "M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32m192-160v-64a192 192 0 1 0-384 0v64zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64"
      })
    ]));
  }
}), qe = Ss, bs = /* @__PURE__ */ re({
  name: "Message",
  __name: "message",
  setup(r) {
    return (o, t) => (_(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      s("path", {
        fill: "currentColor",
        d: "M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64"
      }),
      s("path", {
        fill: "currentColor",
        d: "M904 224 656.512 506.88a192 192 0 0 1-289.024 0L120 224zm-698.944 0 210.56 240.704a128 128 0 0 0 192.704 0L818.944 224z"
      })
    ]));
  }
}), Cs = bs, As = /* @__PURE__ */ re({
  name: "Refresh",
  __name: "refresh",
  setup(r) {
    return (o, t) => (_(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      s("path", {
        fill: "currentColor",
        d: "M771.776 794.88A384 384 0 0 1 128 512h64a320 320 0 0 0 555.712 216.448H654.72a32 32 0 1 1 0-64h149.056a32 32 0 0 1 32 32v148.928a32 32 0 1 1-64 0v-50.56zM276.288 295.616h92.992a32 32 0 0 1 0 64H220.16a32 32 0 0 1-32-32V178.56a32 32 0 0 1 64 0v50.56A384 384 0 0 1 896.128 512h-64a320 320 0 0 0-555.776-216.384z"
      })
    ]));
  }
}), Je = As, Is = /* @__PURE__ */ re({
  name: "User",
  __name: "user",
  setup(r) {
    return (o, t) => (_(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      s("path", {
        fill: "currentColor",
        d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"
      })
    ]));
  }
}), Te = Is, Es = /* @__PURE__ */ re({
  name: "Warning",
  __name: "warning",
  setup(r) {
    return (o, t) => (_(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      s("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 832a384 384 0 0 0 0-768 384 384 0 0 0 0 768m48-176a48 48 0 1 1-96 0 48 48 0 0 1 96 0m-48-464a32 32 0 0 1 32 32v288a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"
      })
    ]));
  }
}), Xe = Es;
function Ls() {
  const r = R({
    user: null,
    isAuthenticated: !1,
    isLoading: !0,
    error: null
  }), o = R(null), t = q(() => r.value.isAuthenticated), y = q(() => r.value.user), S = q(() => r.value.isLoading), C = async () => {
    var h, n, l, V, b, c, L, $, m, u, E, p, k, J, X, ae, N, se, v, z, oe, H;
    try {
      console.log("[auth][enhanced] Starting loadUserInfo..."), console.log("[auth][enhanced] Ensuring cross-subdomain cookie synchronization...");
      let D = null, F = "sb-access-token", G = "sb-refresh-token";
      const we = (A) => {
        try {
          const P = location.hostname;
          if (P === "localhost" || /^\d+\.\d+\.\d+\.\d+$/.test(P)) {
            console.log("[auth][enhanced][fallback] Skipping cookie sync for localhost");
            return;
          }
          const ue = "aiworkspace.pro";
          if (!P.endsWith(`.${ue}`) && P !== ue) {
            console.log("[auth][enhanced][fallback] Skipping cookie sync - not under apex domain");
            return;
          }
          console.log("[auth][enhanced][fallback] Performing basic cookie synchronization"), A.forEach((be) => {
            document.cookie.split(";").find((Me) => Me.trim().startsWith(be + "=")) && console.log(`[auth][enhanced][fallback] Found cookie: ${be}`);
          });
        } catch (P) {
          console.warn("[auth][enhanced][fallback] Error in fallback cookie sync:", P);
        }
      };
      try {
        const A = await import("./utils/authRedirect.js");
        D = A.ensureCrossSubdomainCookies, F = A.ACCESS_COOKIE || "sb-access-token", G = A.REFRESH_COOKIE || "sb-refresh-token", console.log("[auth][enhanced] Successfully imported authRedirect module");
      } catch (A) {
        console.warn("[auth][enhanced] Failed to import authRedirect module:", A), typeof window < "u" && ((h = window.authRedirectGlobal) != null && h.ensureCrossSubdomainCookies ? (D = window.authRedirectGlobal.ensureCrossSubdomainCookies, F = window.authRedirectGlobal.ACCESS_COOKIE || "sb-access-token", G = window.authRedirectGlobal.REFRESH_COOKIE || "sb-refresh-token", console.log("[auth][enhanced] Using global authRedirectGlobal object")) : window.ensureCrossSubdomainCookies && (D = window.ensureCrossSubdomainCookies, F = window.ACCESS_COOKIE || "sb-access-token", G = window.REFRESH_COOKIE || "sb-refresh-token", console.log("[auth][enhanced] Using individual global ensureCrossSubdomainCookies")));
      }
      if (D && typeof D == "function")
        try {
          D([F, G]), console.log("[auth][enhanced] Cross-subdomain cookies synchronized");
        } catch (A) {
          console.warn("[auth][enhanced] Error calling ensureCrossSubdomainCookies:", A), console.warn("[auth][enhanced] Continuing without cookie synchronization...");
        }
      else {
        console.warn("[auth][enhanced] ensureCrossSubdomainCookies not available, using fallback cookie sync"), console.warn("[auth][enhanced] This is expected in some bundling scenarios and will not affect core functionality");
        try {
          we([F, G]);
        } catch (A) {
          console.warn("[auth][enhanced] Fallback cookie sync also failed:", A);
        }
      }
      await new Promise((A) => setTimeout(A, 100));
      let le = null;
      try {
        const P = await (await ee()).auth.getSession();
        le = (n = P == null ? void 0 : P.data) == null ? void 0 : n.session;
      } catch (A) {
        console.warn("[auth][enhanced] Error getting Supabase session:", A);
      }
      if (le && le.user) {
        console.log("[auth][enhanced] Active Supabase session found");
        const A = le.user, P = {
          id: A.id,
          name: ((l = A.user_metadata) == null ? void 0 : l.name) || ((V = A.user_metadata) == null ? void 0 : V.user_name) || ((b = A.user_metadata) == null ? void 0 : b.full_name) || ((c = A.email) == null ? void 0 : c.split("@")[0]) || "User",
          email: A.email,
          avatar_url: ((L = A.user_metadata) == null ? void 0 : L.avatar_url) || null,
          user_metadata: A.user_metadata
        };
        return r.value = {
          user: P,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, o.value = {
          user: P,
          access_token: le.access_token,
          refresh_token: le.refresh_token
        }, { user: P, session: o.value, error: null };
      }
      console.log("[auth][enhanced] No active session, attempting to restore from cookies...");
      const fe = await De();
      if (fe.success && fe.session) {
        console.log("[auth][enhanced] Session restored successfully from cookies");
        const A = fe.session.user, P = {
          id: A.id,
          name: (($ = A.user_metadata) == null ? void 0 : $.name) || ((m = A.user_metadata) == null ? void 0 : m.user_name) || ((u = A.user_metadata) == null ? void 0 : u.full_name) || ((E = A.email) == null ? void 0 : E.split("@")[0]) || "User",
          email: A.email,
          avatar_url: ((p = A.user_metadata) == null ? void 0 : p.avatar_url) || null,
          user_metadata: A.user_metadata
        };
        return r.value = {
          user: P,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, o.value = fe.session, { user: P, session: o.value, error: null };
      } else {
        console.log("[auth][enhanced] Failed to restore session:", fe.error), console.log("[auth][enhanced] Retrying session restoration with extended delay..."), await new Promise((P) => setTimeout(P, 500)), D([F, G]);
        const A = await De();
        if (A.success && A.session) {
          console.log("[auth][enhanced] Session restored on retry");
          const P = A.session.user, ue = {
            id: P.id,
            name: ((k = P.user_metadata) == null ? void 0 : k.name) || ((J = P.user_metadata) == null ? void 0 : J.user_name) || ((X = P.user_metadata) == null ? void 0 : X.full_name) || ((ae = P.email) == null ? void 0 : ae.split("@")[0]) || "User",
            email: P.email,
            avatar_url: ((N = P.user_metadata) == null ? void 0 : N.avatar_url) || null,
            user_metadata: P.user_metadata
          };
          return r.value = {
            user: ue,
            isAuthenticated: !0,
            isLoading: !1,
            error: null
          }, o.value = A.session, { user: ue, session: o.value, error: null };
        }
      }
    } catch (D) {
      console.error("Error getting Supabase session:", D), D && typeof D == "object" && "message" in D && typeof D.message == "string" && D.message.includes("ne is not a function") && (console.warn('[auth][enhanced] Caught "ne is not a function" error - this is handled gracefully'), console.warn("[auth][enhanced] The ensureCrossSubdomainCookies function import failed, but continuing..."));
      try {
        const F = await De();
        if (F.success && F.session) {
          console.log("[auth][enhanced] Session restored after error");
          const G = F.session.user, we = {
            id: G.id,
            name: ((se = G.user_metadata) == null ? void 0 : se.name) || ((v = G.user_metadata) == null ? void 0 : v.user_name) || ((z = G.user_metadata) == null ? void 0 : z.full_name) || ((oe = G.email) == null ? void 0 : oe.split("@")[0]) || "User",
            email: G.email,
            avatar_url: ((H = G.user_metadata) == null ? void 0 : H.avatar_url) || null,
            user_metadata: G.user_metadata
          };
          return r.value = {
            user: we,
            isAuthenticated: !0,
            isLoading: !1,
            error: null
          }, o.value = F.session, { user: we, session: o.value, error: null };
        }
      } catch (F) {
        console.error("Error restoring session:", F);
      }
    }
    return console.log("[auth][enhanced] No valid authentication found"), r.value = {
      user: null,
      isAuthenticated: !1,
      isLoading: !1,
      error: "No valid session found"
    }, o.value = null, { user: null, session: null, error: "No valid session found" };
  }, W = async () => {
    try {
      await (await ee()).auth.signOut(), ke(ne), ke(ie), Ne(), r.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      }, o.value = null, console.log("[auth][enhanced] User logged out successfully");
    } catch (h) {
      console.error("Error during logout:", h), r.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      }, o.value = null;
    }
  }, M = async (h, n) => {
    var l, V, b, c, L;
    try {
      r.value.isLoading = !0;
      const $ = await ee(), { data: m, error: u } = await $.auth.signInWithPassword({
        email: h,
        password: n
      });
      if (u)
        throw u;
      if (m.session) {
        const E = m.session.user, p = {
          id: E.id,
          name: ((l = E.user_metadata) == null ? void 0 : l.name) || ((V = E.user_metadata) == null ? void 0 : V.user_name) || ((b = E.user_metadata) == null ? void 0 : b.full_name) || ((c = E.email) == null ? void 0 : c.split("@")[0]) || "User",
          email: E.email,
          avatar_url: ((L = E.user_metadata) == null ? void 0 : L.avatar_url) || null,
          user_metadata: E.user_metadata
        };
        return r.value = {
          user: p,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, o.value = {
          user: p,
          access_token: m.session.access_token,
          refresh_token: m.session.refresh_token
        }, { user: p, session: o.value, error: null };
      }
      return { user: null, session: null, error: "No session returned" };
    } catch ($) {
      return console.error("Sign in error:", $), r.value.isLoading = !1, { user: null, session: null, error: String($) };
    }
  }, O = async (h, n, l) => {
    var V, b, c, L, $;
    try {
      r.value.isLoading = !0;
      const m = await ee(), { data: u, error: E } = await m.auth.signUp({
        email: h,
        password: n,
        options: {
          data: l
        }
      });
      if (E)
        throw E;
      if (u.session) {
        const p = u.session.user, k = {
          id: p.id,
          name: ((V = p.user_metadata) == null ? void 0 : V.name) || ((b = p.user_metadata) == null ? void 0 : b.user_name) || ((c = p.user_metadata) == null ? void 0 : c.full_name) || ((L = p.email) == null ? void 0 : L.split("@")[0]) || "User",
          email: p.email,
          avatar_url: (($ = p.user_metadata) == null ? void 0 : $.avatar_url) || null,
          user_metadata: p.user_metadata
        };
        return r.value = {
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
    } catch (m) {
      return console.error("Sign up error:", m), r.value.isLoading = !1, { user: null, session: null, error: String(m) };
    }
  }, w = async () => {
    await C();
  };
  return ye(async () => {
    await vs(), await w();
  }), {
    // State
    authState: r,
    currentSession: o,
    // Computed
    isAuthenticated: t,
    currentUser: y,
    isLoading: S,
    // Methods
    loadUserInfo: C,
    logout: W,
    signIn: M,
    signUp: O,
    checkAuth: w
  };
}
const ve = {
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
}, Ms = {
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
}, je = {
  ...ve,
  normalCheckInterval: 1e4,
  // 10 seconds - faster for testing
  fastCheckInterval: 2e3,
  // 2 seconds - very fast for testing
  fastMonitoringDuration: 3e4,
  // 30 seconds - shorter for testing
  validationCacheDuration: 1e3
  // 1 second cache for testing
}, Ze = {
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
function Qe() {
  switch ("production") {
    case "production":
      return Ze;
    case "development":
      return je;
    default:
      return ve;
  }
}
function la(r) {
  return {
    ...ve,
    ...r
  };
}
const Ws = {
  default: ve,
  fast: Rs,
  conservative: Ms,
  development: je,
  production: Ze
};
function ca(r) {
  return Ws[r];
}
const ua = {
  immediate: "Immediate (0-2 seconds) - When logout is detected via auth events",
  fast: "Fast (2-5 seconds) - When fast monitoring is active",
  normal: "Normal (up to 30 seconds) - Regular monitoring interval",
  conservative: "Conservative (up to 60 seconds) - Less frequent monitoring"
}, da = {
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
function Us(r) {
  const o = R(!0), t = R(null), y = R(!1), S = R(!1), C = R(null), W = R(null), M = R(null), O = { ...Qe(), ...r }, w = O.normalCheckInterval, h = O.fastCheckInterval, n = O.fastMonitoringDuration, l = O.maxRetryAttempts, V = O.retryDelay, b = q(() => !o.value && t.value !== null), c = q(
    () => {
      var v, z;
      return ((v = t.value) == null ? void 0 : v.canRetry) && ((z = t.value) == null ? void 0 : z.type) !== "manual_check_failed";
    }
  ), L = async () => {
    try {
      console.log("[SessionMonitor] Validating session...");
      const v = pe(ne), z = pe(ie);
      if (!v || !z)
        return console.log("[SessionMonitor] No tokens found in cookies"), !1;
      const oe = await ee(), { data: { session: H }, error: D } = await oe.auth.getSession();
      if (D)
        return console.warn("[SessionMonitor] Error getting session:", D), !1;
      if (!H || !H.user)
        return console.log("[SessionMonitor] No valid session found"), !1;
      const F = /* @__PURE__ */ new Date(), G = new Date(H.expires_at * 1e3);
      return F >= G ? (console.log("[SessionMonitor] Session has expired"), !1) : (console.log("[SessionMonitor] Session is valid"), C.value = /* @__PURE__ */ new Date(), !0);
    } catch (v) {
      return console.error("[SessionMonitor] Error validating session:", v), !1;
    }
  }, $ = async () => {
    try {
      console.log("[SessionMonitor] Attempting to restore session...");
      const v = pe(ne), z = pe(ie);
      if (!v || !z)
        return console.log("[SessionMonitor] No tokens available for restoration"), !1;
      const oe = await ee(), { data: H, error: D } = await oe.auth.setSession({
        access_token: v,
        refresh_token: z
      });
      return D ? (console.warn("[SessionMonitor] Error restoring session:", D), !1) : H.session && H.session.user ? (console.log("[SessionMonitor] Session restored successfully"), C.value = /* @__PURE__ */ new Date(), !0) : !1;
    } catch (v) {
      return console.error("[SessionMonitor] Error restoring session:", v), !1;
    }
  }, m = (v, z, oe = !0) => {
    console.warn("[SessionMonitor] Session loss detected:", { type: v, message: z }), o.value = !1, t.value = {
      type: v,
      message: z,
      timestamp: /* @__PURE__ */ new Date(),
      canRetry: oe
    };
  }, u = async () => {
    console.log("[SessionMonitor] Retrying session validation...");
    for (let v = 1; v <= l; v++) {
      if (console.log(`[SessionMonitor] Retry attempt ${v}/${l}`), v > 1 && await new Promise((H) => setTimeout(H, V)), await $() && await L())
        return console.log("[SessionMonitor] Session restored and validated successfully"), o.value = !0, t.value = null, !0;
      if (await L())
        return console.log("[SessionMonitor] Session validated successfully on retry"), o.value = !0, t.value = null, !0;
    }
    return console.log("[SessionMonitor] All retry attempts failed"), !1;
  }, E = () => {
    console.log("[SessionMonitor] Clearing session loss state"), o.value = !0, t.value = null;
  }, p = () => {
    if (y.value) {
      console.log("[SessionMonitor] Already monitoring, skipping start");
      return;
    }
    console.log("[SessionMonitor] Starting session monitoring..."), y.value = !0, L().then((v) => {
      v || m("session_expired", "Your session has expired. Please log in again.", !0);
    }), W.value = setInterval(async () => {
      console.log("[SessionMonitor] Periodic session check...");
      const v = await L();
      !v && o.value ? m("session_expired", "Your session has expired. Please log in again.", !0) : v && !o.value && (console.log("[SessionMonitor] Session recovered"), E());
    }, w);
  }, k = () => {
    if (S.value) {
      console.log("[SessionMonitor] Fast monitoring already active");
      return;
    }
    console.log("[SessionMonitor] Starting fast monitoring (5s intervals)..."), S.value = !0, M.value && clearInterval(M.value), M.value = setInterval(async () => {
      console.log("[SessionMonitor] Fast session check...");
      const v = await L();
      !v && o.value ? (m("session_expired", "Your session has expired. Please log in again.", !0), J()) : v && !o.value && (console.log("[SessionMonitor] Session recovered"), E(), J());
    }, h), setTimeout(() => {
      S.value && (console.log(`[SessionMonitor] Auto-stopping fast monitoring after ${n / 1e3} seconds`), J());
    }, n);
  }, J = () => {
    S.value && (console.log("[SessionMonitor] Stopping fast monitoring..."), S.value = !1, M.value && (clearInterval(M.value), M.value = null));
  }, X = () => {
    y.value && (console.log("[SessionMonitor] Stopping session monitoring..."), y.value = !1, W.value && (clearInterval(W.value), W.value = null), J());
  }, ae = async () => {
    console.log("[SessionMonitor] Manual session check requested");
    const v = await L();
    return !v && !await $() ? (m("manual_check_failed", "Session validation failed. Please log in again.", !1), !1) : v;
  }, N = () => {
    m("network_error", "Network connection lost. Please check your internet connection and try again.", !0);
  }, se = () => {
    if (typeof window > "u")
      return;
    const v = () => {
      var H;
      console.log("[SessionMonitor] Network connection restored"), b.value && ((H = t.value) == null ? void 0 : H.type) === "network_error" && setTimeout(() => u(), 1e3);
    }, z = () => {
      console.log("[SessionMonitor] Network connection lost"), N();
    }, oe = (H) => {
      console.log("[SessionMonitor] Logout detected, starting fast monitoring for immediate detection"), k();
    };
    return window.addEventListener("online", v), window.addEventListener("offline", z), window.addEventListener("session-logout-detected", oe), () => {
      window.removeEventListener("online", v), window.removeEventListener("offline", z), window.removeEventListener("session-logout-detected", oe);
    };
  };
  return ye(() => {
    console.log("[SessionMonitor] Mounted, setting up monitoring"), p(), se();
  }), us(() => {
    console.log("[SessionMonitor] Unmounted, cleaning up"), X();
  }), {
    // State
    isSessionValid: o,
    sessionLossEvent: t,
    isMonitoring: y,
    isFastMonitoring: S,
    lastValidSession: C,
    // Computed
    hasSessionLoss: b,
    canRetrySession: c,
    // Methods
    validateSession: L,
    restoreSession: $,
    retrySession: u,
    clearSessionLoss: E,
    startMonitoring: p,
    stopMonitoring: X,
    startFastMonitoring: k,
    stopFastMonitoring: J,
    checkSession: ae,
    handleNetworkError: N
  };
}
const Vs = ms("workspace", () => {
  const r = R(null), o = R([]), t = R(null), y = (w) => {
    r.value = w, localStorage.setItem("current_workspace", JSON.stringify(w));
  }, S = (w) => {
    o.value = w, localStorage.setItem("available_workspaces", JSON.stringify(w));
  };
  return {
    currentWorkspace: r,
    workspaces: o,
    user: t,
    setCurrentWorkspace: y,
    setWorkspaces: S,
    setUser: (w) => {
      t.value = w, localStorage.setItem("user_info", JSON.stringify(w));
    },
    loadPersistedData: () => {
      const w = localStorage.getItem("current_workspace");
      if (w)
        try {
          r.value = JSON.parse(w);
        } catch (l) {
          console.error("Error loading persisted workspace:", l);
        }
      const h = localStorage.getItem("available_workspaces");
      if (h)
        try {
          o.value = JSON.parse(h);
        } catch (l) {
          console.error("Error loading persisted workspaces:", l);
        }
      const n = localStorage.getItem("user_info");
      if (n)
        try {
          t.value = JSON.parse(n);
        } catch (l) {
          console.error("Error loading persisted user:", l);
        }
    },
    clearData: () => {
      r.value = null, o.value = [], t.value = null, localStorage.removeItem("current_workspace"), localStorage.removeItem("available_workspaces"), localStorage.removeItem("user_info");
    },
    loadWorkspaces: async (w = !1) => {
      try {
        const { data: { user: h } } = await Le.auth.getUser();
        if (!h)
          return [];
        let n = Le.from("workspaces").select(`
          id, title, description, parent_workspace_id, created_by, archived, created_at, git_repo, 
          workspace_access!inner ( access_type, shared_with_user_id ),
          workspace_activities!left ( updated_at )
        `).eq("workspace_access.shared_with_user_id", h.id);
        w || (n = n.eq("archived", !1));
        const { data: l, error: V } = await n;
        if (V)
          throw V;
        const b = /* @__PURE__ */ new Map();
        (l || []).forEach((u) => {
          (u.workspace_access || []).forEach((E) => {
            E.shared_with_user_id === h.id && b.set(u.id, E);
          });
        });
        const c = [...new Set(
          (l || []).filter((u) => u.parent_workspace_id).map((u) => u.parent_workspace_id).filter((u) => !b.has(u))
        )];
        let L = [];
        if (c.length) {
          let u = Le.from("workspaces").select("id, title, description, parent_workspace_id, created_by, archived, created_at").in("id", c);
          w || (u = u.eq("archived", !1));
          const { data: E, error: p } = await u;
          if (p)
            throw p;
          L = E || [];
        }
        const m = [...l || [], ...L].map((u) => {
          var E, p, k;
          return {
            id: u.id,
            title: u.title,
            description: u.description || "No description",
            parent_workspace_id: u.parent_workspace_id,
            created_by: u.created_by,
            archived: u.archived,
            created_at: u.created_at,
            latest_activity: ((p = (E = u.workspace_activities) == null ? void 0 : E[0]) == null ? void 0 : p.updated_at) || u.created_at,
            hasAccess: b.has(u.id),
            accessType: ((k = b.get(u.id)) == null ? void 0 : k.access_type) || null
          };
        });
        return m.sort((u, E) => new Date(E.latest_activity) - new Date(u.latest_activity)), S(m), m;
      } catch (h) {
        return console.error("loadWorkspaces error", h), [];
      }
    }
  };
});
function Ps() {
  const r = R({
    user: null,
    isAuthenticated: !1,
    isLoading: !0,
    error: null
  }), o = R(window.location.href), t = async () => {
    var w, h, n, l, V, b, c, L;
    try {
      r.value.isLoading = !0;
      const $ = await ee(), { data: { session: m }, error: u } = await $.auth.getSession();
      if (u) {
        console.error("Error checking auth status:", u), r.value = {
          user: null,
          isAuthenticated: !1,
          isLoading: !1,
          error: u.message
        };
        return;
      }
      m != null && m.user ? (r.value = {
        user: {
          id: m.user.id,
          email: m.user.email || "",
          name: ((w = m.user.user_metadata) == null ? void 0 : w.full_name) || ((h = m.user.user_metadata) == null ? void 0 : h.name) || ((n = m.user.email) == null ? void 0 : n.split("@")[0]) || "User",
          avatar_url: ((l = m.user.user_metadata) == null ? void 0 : l.avatar_url) || ((V = m.user.user_metadata) == null ? void 0 : V.picture) || null,
          initials: (((b = m.user.user_metadata) == null ? void 0 : b.full_name) || ((c = m.user.user_metadata) == null ? void 0 : c.name) || ((L = m.user.email) == null ? void 0 : L.split("@")[0]) || "U").split(" ").map((E) => E[0]).join("").toUpperCase().substring(0, 2)
        },
        isAuthenticated: !0,
        isLoading: !1,
        error: null
      }, m.access_token && _e(ne, m.access_token), m.refresh_token && _e(ie, m.refresh_token), Oe()) : r.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      };
    } catch ($) {
      console.error("Auth check failed:", $), r.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: $.message || "Authentication check failed"
      };
    }
  }, y = async (w, h) => {
    try {
      const n = await ee(), { error: l } = await n.auth.signInWithPassword({
        email: w,
        password: h
      });
      return l ? { success: !1, error: l.message } : (await t(), sessionStorage.setItem("post-login-redirect", o.value), { success: !0 });
    } catch (n) {
      return console.error("Login error:", n), { success: !1, error: n.message || "Login failed" };
    }
  }, S = async (w, h) => {
    var n;
    try {
      const l = await ee(), { data: V, error: b } = await l.auth.signUp({
        email: w,
        password: h
      });
      return b ? { success: !1, error: b.message } : V.user && !V.user.email_confirmed_at ? { success: !0, needsConfirmation: !0 } : (n = V.session) != null && n.user ? (await t(), sessionStorage.setItem("post-login-redirect", o.value), { success: !0 }) : { success: !1, error: "No session created" };
    } catch (l) {
      return console.error("Signup error:", l), { success: !1, error: l.message || "Signup failed" };
    }
  }, C = async (w) => {
    try {
      const h = `${window.location.origin}/auth/callback`;
      console.log("[OAuth] Starting login with provider:", w), console.log("[OAuth] Redirect URL:", h), console.log("[OAuth] Current URL:", o.value), console.log("[OAuth] Current origin:", window.location.origin);
      const n = await ee(), { error: l } = await n.auth.signInWithOAuth({
        provider: w,
        options: {
          redirectTo: h,
          queryParams: {
            redirect_origin: o.value
          }
        }
      });
      if (l)
        return console.error("[OAuth] Error:", l), { success: !1, error: l.message };
      const V = o.value || window.location.href;
      return sessionStorage.setItem("post-login-redirect", V), localStorage.setItem("post-login-redirect", V), console.log("[OAuth] Stored redirect URL:", V), console.log("[OAuth] Current URL value:", o.value), console.log("[OAuth] Window location href:", window.location.href), { success: !0 };
    } catch (h) {
      return console.error("OAuth login error:", h), { success: !1, error: h.message || "OAuth login failed" };
    }
  }, W = async () => {
    try {
      const w = await ee(), { error: h } = await w.auth.signOut();
      h && console.error("Logout error:", h), r.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      }, ke(ne), ke(ie), Ne();
    } catch (w) {
      console.error("Logout error:", w);
    }
  }, M = async (w) => {
    try {
      const h = await ee(), { error: n } = await h.auth.resetPasswordForEmail(w, {
        redirectTo: `${window.location.origin}/auth/reset-password`
      });
      return n ? { success: !1, error: n.message } : { success: !0 };
    } catch (h) {
      return console.error("Password reset error:", h), { success: !1, error: h.message || "Password reset failed" };
    }
  }, O = async () => {
    try {
      (await ee()).auth.onAuthStateChange((h, n) => {
        var l;
        switch (console.log("Auth state changed:", h, (l = n == null ? void 0 : n.user) == null ? void 0 : l.email), h) {
          case "SIGNED_IN":
            n != null && n.user && t();
            break;
          case "SIGNED_OUT":
            r.value = {
              user: null,
              isAuthenticated: !1,
              isLoading: !1,
              error: null
            }, ke(ne), ke(ie), Ne();
            break;
          case "TOKEN_REFRESHED":
            n != null && n.access_token && _e(ne, n.access_token), n != null && n.refresh_token && _e(ie, n.refresh_token), Oe();
            break;
          case "USER_UPDATED":
            n != null && n.user && t();
            break;
        }
      });
    } catch (w) {
      console.warn("Failed to setup auth listener:", w);
    }
  };
  return ye(async () => {
    O(), await t();
  }), ce(() => window.location.href, (w) => {
    o.value = w;
  }), {
    authState: q(() => r.value),
    isAuthenticated: q(() => r.value.isAuthenticated),
    user: q(() => r.value.user),
    isLoading: q(() => r.value.isLoading),
    checkAuthStatus: t,
    loginWithEmail: y,
    signupWithEmail: S,
    loginWithProvider: C,
    logout: W,
    resetPassword: M,
    currentUrl: q(() => o.value)
  };
}
const $s = { class: "login-container" }, xs = { class: "logo-section" }, Ds = { class: "login-buttons" }, Ns = {
  key: 0,
  class: "forgot-password"
}, Os = { class: "signup-link" }, Ts = /* @__PURE__ */ re({
  __name: "LoginModal",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue", "login-success"],
  setup(r, { emit: o }) {
    const t = r, y = o, S = q({
      get: () => t.modelValue,
      set: (p) => y("update:modelValue", p)
    }), C = R(!1), W = R(!1), M = R(), { loginWithEmail: O, signupWithEmail: w, loginWithProvider: h, resetPassword: n } = Ps(), l = ds({
      email: "",
      password: "",
      confirmPassword: ""
    }), V = q(() => ({
      email: [
        { required: !0, message: "Please enter your email", trigger: "blur" },
        { type: "email", message: "Please enter a valid email", trigger: "blur" }
      ],
      password: [
        { required: !0, message: "Please enter your password", trigger: "blur" },
        { min: 6, message: "Password must be at least 6 characters", trigger: "blur" }
      ],
      ...C.value ? {
        confirmPassword: [
          { required: !0, message: "Please confirm your password", trigger: "blur" },
          {
            validator: (p, k, J) => {
              k !== l.password ? J(new Error("Passwords do not match")) : J();
            },
            trigger: "blur"
          }
        ]
      } : {}
    })), b = () => {
      var p;
      C.value = !C.value, l.email = "", l.password = "", l.confirmPassword = "", (p = M.value) == null || p.clearValidate();
    }, c = () => {
      var p;
      S.value = !1, l.email = "", l.password = "", l.confirmPassword = "", C.value = !1, (p = M.value) == null || p.clearValidate();
    }, L = async () => {
      if (M.value)
        try {
          await M.value.validate(), W.value = !0, C.value ? await m() : await $();
        } catch (p) {
          console.error("Form validation failed:", p);
        } finally {
          W.value = !1;
        }
    }, $ = async () => {
      const p = await O(l.email, l.password);
      p.success ? (K.success("Login successful"), y("login-success", { email: l.email }), c()) : K.error("Login failed: " + p.error);
    }, m = async () => {
      const p = await w(l.email, l.password);
      p.success ? p.needsConfirmation ? K.success("Please check your email to confirm your account") : (K.success("Account created successfully"), y("login-success", { email: l.email }), c()) : K.error("Signup failed: " + p.error);
    }, u = async (p) => {
      const k = await h(p);
      k.success ? K.success("Redirecting to login provider...") : K.error("Login failed: " + k.error);
    }, E = async () => {
      if (!l.email) {
        K.warning("Please enter your email address first");
        return;
      }
      const p = await n(l.email);
      p.success ? K.success("Password reset email sent! Please check your inbox.") : K.error("Failed to send reset email: " + p.error);
    };
    return (p, k) => {
      const J = te("el-icon"), X = te("el-input"), ae = te("el-form-item"), N = te("el-button"), se = te("el-dialog");
      return _(), Q(se, {
        modelValue: S.value,
        "onUpdate:modelValue": k[6] || (k[6] = (v) => S.value = v),
        title: "",
        width: "500px",
        "close-on-click-modal": !1,
        "close-on-press-escape": !0,
        "show-close": !0,
        class: "login-modal",
        onClose: c
      }, {
        default: f(() => [
          s("div", $s, [
            s("div", xs, [
              s("h2", null, B(C.value ? "Create Account" : "Welcome Back"), 1),
              s("p", null, B(C.value ? "Sign up to get started with your account" : "Sign in to continue to your account"), 1)
            ]),
            g(x(fs), {
              model: l,
              rules: V.value,
              ref_key: "formRef",
              ref: M,
              class: "login-form",
              onSubmit: ge(L, ["prevent"])
            }, {
              default: f(() => [
                g(ae, { prop: "email" }, {
                  default: f(() => [
                    g(X, {
                      modelValue: l.email,
                      "onUpdate:modelValue": k[0] || (k[0] = (v) => l.email = v),
                      placeholder: "Email",
                      type: "email",
                      size: "large",
                      class: "form-input"
                    }, {
                      prefix: f(() => [
                        g(J, null, {
                          default: f(() => [
                            g(x(Cs))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                g(ae, { prop: "password" }, {
                  default: f(() => [
                    g(X, {
                      modelValue: l.password,
                      "onUpdate:modelValue": k[1] || (k[1] = (v) => l.password = v),
                      placeholder: "Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: f(() => [
                        g(J, null, {
                          default: f(() => [
                            g(x(qe))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                C.value ? (_(), Q(ae, {
                  key: 0,
                  prop: "confirmPassword"
                }, {
                  default: f(() => [
                    g(X, {
                      modelValue: l.confirmPassword,
                      "onUpdate:modelValue": k[2] || (k[2] = (v) => l.confirmPassword = v),
                      placeholder: "Confirm Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: f(() => [
                        g(J, null, {
                          default: f(() => [
                            g(x(qe))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                })) : j("", !0),
                g(ae, null, {
                  default: f(() => [
                    g(N, {
                      type: "primary",
                      class: "submit-button",
                      loading: W.value,
                      onClick: L,
                      size: "large"
                    }, {
                      default: f(() => [
                        Y(B(C.value ? "Sign Up" : "Sign In"), 1)
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model", "rules"]),
            k[10] || (k[10] = s("div", { class: "divider" }, [
              s("span", null, "Or continue with")
            ], -1)),
            s("div", Ds, [
              g(N, {
                class: "login-button google",
                onClick: k[3] || (k[3] = (v) => u("google")),
                size: "large"
              }, {
                default: f(() => [...k[7] || (k[7] = [
                  s("span", { class: "social-icon" }, "G", -1),
                  Y(" Google ", -1)
                ])]),
                _: 1
              }),
              g(N, {
                class: "login-button github",
                onClick: k[4] || (k[4] = (v) => u("github")),
                size: "large"
              }, {
                default: f(() => [...k[8] || (k[8] = [
                  s("span", { class: "social-icon" }, "⚡", -1),
                  Y(" GitHub ", -1)
                ])]),
                _: 1
              }),
              g(N, {
                class: "login-button twitter",
                onClick: k[5] || (k[5] = (v) => u("twitter")),
                size: "large"
              }, {
                default: f(() => [...k[9] || (k[9] = [
                  s("span", { class: "social-icon" }, "X", -1),
                  Y(" X (Twitter) ", -1)
                ])]),
                _: 1
              })
            ]),
            k[11] || (k[11] = s("div", { class: "terms" }, " By continuing, you agree to AI Workspace's Terms of Service and Privacy Policy ", -1)),
            C.value ? j("", !0) : (_(), U("div", Ns, [
              s("a", {
                href: "#",
                onClick: ge(E, ["prevent"])
              }, "Forgot Password?")
            ])),
            s("div", Os, [
              Y(B(C.value ? "Already have an account?" : "Don't have an account?") + " ", 1),
              s("a", {
                href: "#",
                onClick: ge(b, ["prevent"])
              }, B(C.value ? "Sign in" : "Sign up"), 1)
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
const Re = (r, o) => {
  const t = r.__vccOpts || r;
  for (const [y, S] of o)
    t[y] = S;
  return t;
}, Fs = /* @__PURE__ */ Re(Ts, [["__scopeId", "data-v-684a3f28"]]), zs = { class: "session-loss-content" }, Hs = { class: "session-loss-icon" }, Bs = { class: "session-loss-message" }, Gs = {
  key: 0,
  class: "session-loss-details"
}, Ks = { class: "detail-item" }, Ys = { class: "detail-value" }, qs = { class: "detail-item" }, Js = { class: "detail-value" }, Xs = { class: "session-loss-actions" }, js = {
  key: 0,
  class: "retry-status"
}, Zs = { class: "retry-message" }, Qs = /* @__PURE__ */ re({
  __name: "SessionLossModal",
  props: {
    modelValue: { type: Boolean },
    sessionLossEvent: {},
    canRetrySession: { type: Boolean }
  },
  emits: ["update:modelValue", "retry", "login", "refresh"],
  setup(r, { emit: o }) {
    const t = r, y = o, S = R(!1), C = R(0), W = R(void 0), M = R(""), O = q({
      get: () => t.modelValue,
      set: (b) => y("update:modelValue", b)
    }), w = (b) => {
      switch (b) {
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
    }, h = (b) => b.toLocaleString(), n = async () => {
      if (S.value)
        return;
      S.value = !0, C.value = 0, W.value = void 0, M.value = "Attempting to restore session...";
      const b = setInterval(() => {
        C.value < 90 && (C.value += Math.random() * 20);
      }, 200);
      try {
        y("retry"), await new Promise((c) => setTimeout(c, 2e3)), C.value = 100, W.value = "success", M.value = "Session restored successfully!", setTimeout(() => {
          O.value = !1;
        }, 1e3);
      } catch {
        C.value = 100, W.value = "exception", M.value = "Failed to restore session. Please log in again.", K.error("Session restoration failed");
      } finally {
        clearInterval(b), setTimeout(() => {
          S.value = !1, C.value = 0, W.value = void 0, M.value = "";
        }, 3e3);
      }
    }, l = () => {
      y("login"), O.value = !1;
    }, V = () => {
      y("refresh"), window.location.reload();
    };
    return ce(() => t.sessionLossEvent, (b) => {
      b && (S.value = !1, C.value = 0, W.value = void 0, M.value = "");
    }), (b, c) => (_(), Q(x(hs), {
      modelValue: O.value,
      "onUpdate:modelValue": c[0] || (c[0] = (L) => O.value = L),
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
          s("div", zs, [
            s("div", Hs, [
              g(x(Ee), {
                size: "48",
                color: "#f56c6c"
              }, {
                default: f(() => [
                  g(x(Xe))
                ]),
                _: 1
              })
            ]),
            s("div", Bs, [
              c[3] || (c[3] = s("h3", null, "Your session has expired", -1)),
              s("p", null, B(((L = b.sessionLossEvent) == null ? void 0 : L.message) || "Please log in again to continue using the application."), 1),
              b.sessionLossEvent ? (_(), U("div", Gs, [
                s("div", Ks, [
                  c[1] || (c[1] = s("span", { class: "detail-label" }, "Issue:", -1)),
                  s("span", Ys, B(w(b.sessionLossEvent.type)), 1)
                ]),
                s("div", qs, [
                  c[2] || (c[2] = s("span", { class: "detail-label" }, "Time:", -1)),
                  s("span", Js, B(h(b.sessionLossEvent.timestamp)), 1)
                ])
              ])) : j("", !0)
            ]),
            s("div", Xs, [
              b.canRetrySession && !S.value ? (_(), Q(x(xe), {
                key: 0,
                type: "primary",
                onClick: n,
                loading: S.value
              }, {
                default: f(() => [
                  g(x(Ee), null, {
                    default: f(() => [
                      g(x(Je))
                    ]),
                    _: 1
                  }),
                  c[4] || (c[4] = Y(" Try Again ", -1))
                ]),
                _: 1
              }, 8, ["loading"])) : j("", !0),
              g(x(xe), {
                type: "primary",
                onClick: l,
                disabled: S.value
              }, {
                default: f(() => [
                  g(x(Ee), null, {
                    default: f(() => [
                      g(x(Te))
                    ]),
                    _: 1
                  }),
                  c[5] || (c[5] = Y(" Log In ", -1))
                ]),
                _: 1
              }, 8, ["disabled"]),
              b.canRetrySession ? j("", !0) : (_(), Q(x(xe), {
                key: 1,
                type: "info",
                onClick: V,
                disabled: S.value
              }, {
                default: f(() => [
                  g(x(Ee), null, {
                    default: f(() => [
                      g(x(Je))
                    ]),
                    _: 1
                  }),
                  c[6] || (c[6] = Y(" Refresh Page ", -1))
                ]),
                _: 1
              }, 8, ["disabled"]))
            ]),
            S.value ? (_(), U("div", js, [
              g(x(gs), {
                percentage: C.value,
                status: W.value,
                "stroke-width": 6
              }, null, 8, ["percentage", "status"]),
              s("p", Zs, B(M.value), 1)
            ])) : j("", !0)
          ])
        ];
      }),
      _: 1
    }, 8, ["modelValue"]));
  }
});
const eo = /* @__PURE__ */ Re(Qs, [["__scopeId", "data-v-0dd27f7f"]]), so = { class: "aiworkspace-header" }, oo = {
  key: 0,
  class: "header-content header-loading"
}, ao = { class: "header-center" }, to = { class: "loading-text" }, ro = { key: 0 }, no = { key: 1 }, io = {
  key: 1,
  class: "header-content header-fallback"
}, lo = {
  key: 2,
  class: "header-content header-restricted"
}, co = { class: "header-center" }, uo = { class: "restricted-text" }, po = { class: "header-right" }, fo = {
  key: 3,
  class: "header-content"
}, ho = { class: "header-left" }, go = { class: "logo-section" }, vo = {
  href: "/",
  class: "logo"
}, wo = ["src"], mo = {
  key: 1,
  class: "text-logo"
}, ko = {
  key: 0,
  class: "header-center"
}, _o = { class: "main-navigation" }, yo = { class: "nav-item" }, So = {
  href: "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard",
  class: "nav-link"
}, bo = { class: "workspace-dropdown-item" }, Co = ["href"], Ao = { class: "workspace-icon" }, Io = {
  key: 1,
  class: "nav-divider"
}, Eo = { class: "nav-item" }, Lo = ["href", "onClick"], Ro = { class: "header-right" }, Mo = { class: "user-profile" }, Wo = { class: "user-info" }, Uo = { class: "user-name" }, Vo = { class: "user-avatar" }, Po = ["src", "alt"], $o = {
  key: 1,
  class: "avatar-placeholder"
}, xo = {
  key: 4,
  class: "header-content header-unauthenticated"
}, Do = { class: "header-left" }, No = { class: "logo-section" }, Oo = {
  href: "/",
  class: "logo"
}, To = ["src"], Fo = {
  key: 1,
  class: "text-logo"
}, zo = { class: "header-right" }, Ho = { class: "workspace-list" }, Bo = ["onClick"], Go = { class: "workspace-icon" }, Ko = { class: "workspace-details" }, Yo = { class: "workspace-members" }, qo = {
  key: 0,
  class: "current-indicator"
}, Se = 50, Jo = /* @__PURE__ */ re({
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
  setup(r, { emit: o }) {
    const t = r, y = o, { authState: S, logout: C, isLoading: W } = Ls(), {
      isSessionValid: M,
      sessionLossEvent: O,
      hasSessionLoss: w,
      canRetrySession: h,
      retrySession: n,
      clearSessionLoss: l
    } = Us(), V = () => {
      try {
        return Vs();
      } catch {
        return console.warn("[AIWorkspaceHeader] Pinia not initialized yet, using fallback state"), null;
      }
    }, b = () => {
      try {
        return typeof window < "u" ? !!window.__PINIA__ || !!window.Pinia : !1;
      } catch {
        return !1;
      }
    }, c = R(V()), L = q(() => !!c.value), $ = R(0), m = () => {
      if (!c.value && $.value < Se) {
        if (b()) {
          const a = V();
          if (a) {
            c.value = a, console.log("[AIWorkspaceHeader] Pinia store initialized successfully");
            return;
          }
        }
        $.value++, setTimeout(m, 100);
      } else
        $.value >= Se && console.warn("[AIWorkspaceHeader] Pinia initialization failed after maximum retries, using fallback mode");
    };
    ye(() => {
      c.value || m();
    });
    const u = R(!1), E = R(!1), p = R(!1), k = R([]), J = R([]), X = R({
      name: "",
      email: "",
      avatar_url: null,
      initials: ""
    }), ae = R([]), N = R([]), se = R(!1);
    ce(N, async (a) => {
      a.length > 0 && L.value && D.value && await H();
    }, { immediate: !1 }), ce(() => window.location.pathname + window.location.search + window.location.hash, async () => {
      L.value && D.value && await H();
    }, { immediate: !1 });
    const v = R(window.location.pathname);
    ce(() => window.location.pathname, (a) => {
      v.value = a;
    }, { immediate: !0 }), ce(L, (a) => {
      !a && $.value < Se && m();
    });
    const z = () => {
      try {
        const a = window.location.pathname.match(/\/single-workspace\/(\d+)/);
        if (a)
          return a[1];
        const i = new URLSearchParams(window.location.search).get("workspace_id");
        if (i)
          return i;
        const d = window.location.hash.match(/workspace_id=(\d+)/);
        return d ? d[1] : null;
      } catch (a) {
        return console.warn("[AIWorkspaceHeader] Error parsing URL for workspace_id:", a), null;
      }
    }, oe = () => {
      try {
        return window.location.pathname.includes("/all-workspace/");
      } catch (a) {
        return console.warn("[AIWorkspaceHeader] Error checking all-workspace mode:", a), !1;
      }
    }, H = async () => {
      if (!c.value || !L.value)
        return;
      const a = oe();
      if (se.value = a, a) {
        c.value.currentWorkspace = null, localStorage.removeItem("current_workspace"), console.log("[AIWorkspaceHeader] Auto-selected all-workspace mode from URL");
        return;
      }
      const e = z();
      if (e)
        try {
          N.value.length === 0 && await ue();
          const i = N.value.find((d) => d.id.toString() === e);
          i ? (c.value.setCurrentWorkspace(i), console.log(`[AIWorkspaceHeader] Auto-selected workspace from URL: ${i.title} (ID: ${i.id})`), y("workspaceChange", i)) : console.warn(`[AIWorkspaceHeader] Workspace with ID ${e} not found in available workspaces`);
        } catch (i) {
          console.error("[AIWorkspaceHeader] Error auto-selecting workspace from URL:", i);
        }
    }, D = q(() => S.value.isAuthenticated), F = q(() => c.value ? c.value.currentWorkspace : null), G = R([
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
    ]), we = R([
      { label: "Dashboard", key: "dashboard", url: "/dashboard" },
      { label: "All Tasks", key: "tasks", url: "/tasks" },
      { label: "All Goals", key: "goals", url: "/goals" },
      { label: "All Events", key: "events", url: "/events" },
      { label: "All Drive", key: "files", url: "/files" },
      { label: "All Contacts", key: "contacts", url: "/contacts" },
      { label: "All Settings", key: "settings", url: "/settings" }
    ]), le = q(() => se.value ? we.value : G.value), fe = q(() => {
      try {
        const a = v.value;
        let e = "";
        const i = a.match(/\/all-workspace\/([^\/]+)/);
        if (i)
          e = i[1];
        else {
          const d = a.match(/\/single-workspace\/\d+\/([^\/]+)/);
          if (d)
            e = d[1];
          else {
            const T = a.match(/\/([^\/]+)$/);
            T && (e = T[1]);
          }
        }
        if (e) {
          const d = le.value.find(
            (T) => T.key === e || T.url.includes(`/${e}`) || T.url === `/${e}`
          );
          if (d)
            return d.label;
        }
        return "Dashboard";
      } catch (a) {
        return console.warn("[AIWorkspaceHeader] Error determining current section:", a), "Dashboard";
      }
    }), A = (a) => {
      const e = /* @__PURE__ */ new Map();
      a.forEach((T) => {
        e.set(T.id, { ...T, children: [] });
      });
      const i = [];
      e.forEach((T) => {
        T.parent_workspace_id && e.has(T.parent_workspace_id) ? e.get(T.parent_workspace_id).children.push(T) : i.push(T);
      });
      const d = (T) => {
        T.sort((Z, de) => Z.title.localeCompare(de.title)), T.forEach((Z) => {
          Z.children && d(Z.children);
        });
      };
      return d(i), i;
    }, P = (a, e = 0, i = []) => (a.forEach((d) => {
      i.push({ ...d, level: e }), d.children && d.children.length && P(d.children, e + 1, i);
    }), i), ue = async () => {
      var a, e, i;
      try {
        const d = await ((a = c.value) == null ? void 0 : a.loadWorkspaces());
        if (ae.value = A(d || []), N.value = P(ae.value), J.value = N.value, k.value = N.value, t.currentWorkspaceId) {
          const T = N.value.find((Z) => {
            var de;
            return Z.id.toString() === ((de = t.currentWorkspaceId) == null ? void 0 : de.toString());
          });
          T && ((e = c.value) == null || e.setCurrentWorkspace(T));
        } else
          !F.value && N.value.length && ((i = c.value) == null || i.setCurrentWorkspace(N.value[0]));
      } catch (d) {
        console.error("loadWorkspaces (header) error", d);
      }
    }, be = (a) => {
      if (console.log("Navigation command:", a), a === "all-workspace") {
        window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
        return;
      } else {
        const e = parseInt(a.replace("workspace-", ""));
        window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e}/dashboard`;
        return;
      }
    }, He = (a) => {
      const e = F.value, i = se.value;
      switch (a.key) {
        case "dashboard":
          i ? window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard" : e ? window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e.id}/dashboard` : window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
          break;
        case "outlines":
          if (i)
            window.location.href = "https://outline.aiworkspace.pro/all-workspace/outlines";
          else if (e) {
            const d = `https://outline.aiworkspace.pro/single-workspace/${e.id}/outlines`;
            window.location.href = d;
          } else
            window.location.href = "https://outline.aiworkspace.pro";
          break;
        case "canvas":
          if (i)
            window.location.href = "https://canvas.aiworkspace.pro/all-workspace/canvas";
          else if (e) {
            const d = `https://canvas.aiworkspace.pro/single-workspace/${e.id}/canvas`;
            window.location.href = d;
          } else
            window.location.href = "https://canvas.aiworkspace.pro";
          break;
        case "files":
          if (i)
            window.location.href = "https://drive.aiworkspace.pro/all-workspace/files";
          else if (e) {
            const d = `https://drive.aiworkspace.pro/single-workspace/${e.id}/files`;
            window.location.href = d;
          } else
            window.location.href = "https://drive.aiworkspace.pro";
          break;
        case "tasks":
          if (i)
            window.location.href = "https://tasks.aiworkspace.pro/all-workspace/tasks";
          else if (e) {
            const d = `https://tasks.aiworkspace.pro/single-workspace/${e.id}/tasks`;
            window.location.href = d;
          } else
            window.location.href = "https://tasks.aiworkspace.pro";
          break;
        case "goals":
          if (i)
            window.location.href = "https://app.aiworkspace.pro/all-workspace/goals";
          else if (e) {
            const d = `https://app.aiworkspace.pro/single-workspace/${e.id}/goals`;
            window.location.href = d;
          } else
            window.location.href = "https://app.aiworkspace.pro/all-workspace/goals";
          break;
        case "events":
          if (i)
            window.location.href = "https://app.aiworkspace.pro/all-workspace/events";
          else if (e) {
            const d = `https://app.aiworkspace.pro/single-workspace/${e.id}/events`;
            window.location.href = d;
          } else
            window.location.href = "https://app.aiworkspace.pro/all-workspace/events";
          break;
        case "contacts":
          if (i)
            window.location.href = "https://app.aiworkspace.pro/all-workspace/contacts";
          else if (e) {
            const d = `https://app.aiworkspace.pro/single-workspace/${e.id}/contacts`;
            window.location.href = d;
          } else
            window.location.href = "https://app.aiworkspace.pro/all-workspace/contacts";
          break;
        case "ai-portfolios":
          if (i)
            window.location.href = "https://spreadsheet.aiworkspace.pro/all-workspace/ai-portfolios";
          else if (e) {
            const d = `https://spreadsheet.aiworkspace.pro/single-workspace/${e.id}/ai-portfolios`;
            window.location.href = d;
          } else
            window.location.href = "https://spreadsheet.aiworkspace.pro";
          break;
        case "settings":
          if (i)
            window.location.href = "https://settings.aiworkspace.pro/all-workspace/settings";
          else if (e) {
            const d = `https://settings.aiworkspace.pro/single-workspace/${e.id}/settings`;
            window.location.href = d;
          } else
            window.location.href = "https://settings.aiworkspace.pro";
          break;
        default:
          if (i) {
            const d = `https://app.aiworkspace.pro/all-workspace/${a.key}`;
            window.location.href = d;
          } else if (e) {
            const d = `https://app.aiworkspace.pro/single-workspace/${e.id}/${a.key}`;
            window.location.href = d;
          } else {
            const d = `https://app.aiworkspace.pro/${a.key}`;
            window.location.href = d;
          }
          break;
      }
    }, Me = (a) => {
      const e = F.value, i = se.value;
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
          t.onProfileClick ? t.onProfileClick() : K.info("Profile settings coming soon");
          break;
        case "workspaces":
          u.value = !0;
          break;
        case "logout":
          ss();
          break;
      }
    }, Be = (a) => {
      var e;
      (e = c.value) == null || e.setCurrentWorkspace(a), u.value = !1, y("workspaceChange", a), K.success(`Switched to ${a.title}`);
    }, es = () => {
      Ke.prompt("Enter workspace name:", "Create New Workspace", {
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
        k.value.push(e), (i = c.value) == null || i.setWorkspaces(k.value), Be(e), K.success(`Created workspace: ${a}`);
      }).catch(() => {
      });
    }, ss = () => {
      Ke.confirm(
        "Are you sure you want to sign out?",
        "Sign Out",
        {
          confirmButtonText: "Sign Out",
          cancelButtonText: "Cancel",
          type: "warning"
        }
      ).then(async () => {
        var a;
        (a = c.value) == null || a.clearData(), await C(), typeof window < "u" && window.dispatchEvent(new CustomEvent("session-logout-detected", {
          detail: { timestamp: /* @__PURE__ */ new Date(), source: "manual-logout" }
        })), y("logout"), K.success("Signed out successfully");
      }).catch(() => {
      });
    }, We = async () => {
      var a, e;
      if (S.value.user) {
        const i = S.value.user;
        X.value = {
          name: i.name || ((a = i.email) == null ? void 0 : a.split("@")[0]) || "User",
          email: i.email || "",
          avatar_url: i.avatar_url || null,
          initials: (i.name || ((e = i.email) == null ? void 0 : e.split("@")[0]) || "U").split(" ").map((d) => d[0]).join("").toUpperCase().substring(0, 2)
        }, t.showWorkspaceSelector && await ue();
      }
    };
    ce(() => S.value.user, (a) => {
      var e;
      a ? We() : (X.value = { name: "", email: "", avatar_url: null, initials: "" }, (e = c.value) == null || e.clearData());
    }), ce(w, (a) => {
      a && D.value && (console.log("[AIWorkspaceHeader] Session loss detected, showing modal"), p.value = !0);
    }), ce(() => t.currentWorkspaceId, (a) => {
      var e;
      if (a && N.value.length) {
        const i = N.value.find((d) => d.id.toString() === a.toString());
        i && ((e = c.value) == null || e.setCurrentWorkspace(i));
      }
    }), ye(async () => {
      D.value && (await We(), await H());
    });
    const os = async (a) => {
      console.log("Login successful:", a), E.value = !1, await We(), y("login"), K.success("Welcome back!");
    }, as = async () => {
      console.log("[AIWorkspaceHeader] Retrying session..."), await n() ? (p.value = !1, l(), K.success("Session restored successfully!")) : K.error("Failed to restore session. Please log in again.");
    }, ts = () => {
      console.log("[AIWorkspaceHeader] Opening login modal from session loss"), p.value = !1, E.value = !0;
    }, rs = () => {
      console.log("[AIWorkspaceHeader] Refreshing page due to session loss"), window.location.reload();
    }, ns = () => {
      $.value = 0, m(), K.success("Manual Pinia retry initiated.");
    };
    return (a, e) => {
      const i = te("el-icon"), d = te("el-button"), T = te("el-tag"), Z = te("el-dropdown-item"), de = te("el-dropdown-menu"), Ue = te("el-dropdown"), is = te("el-dialog");
      return _(), U("header", so, [
        !L.value && $.value < Se || x(W) ? (_(), U("div", oo, [
          e[10] || (e[10] = Ie('<div class="header-left" data-v-2d5d4116><div class="logo-section" data-v-2d5d4116><a href="/" class="logo" data-v-2d5d4116><div class="text-logo" data-v-2d5d4116><span class="logo-text" data-v-2d5d4116>AI Workspace</span></div></a></div></div>', 1)),
          s("div", ao, [
            s("span", to, [
              x(W) ? (_(), U("span", ro, "Syncing authentication...")) : (_(), U("span", no, "Initializing..."))
            ])
          ])
        ])) : !L.value && $.value >= Se ? (_(), U("div", io, [
          e[12] || (e[12] = Ie('<div class="header-left" data-v-2d5d4116><div class="logo-section" data-v-2d5d4116><a href="/" class="logo" data-v-2d5d4116><div class="text-logo" data-v-2d5d4116><span class="logo-text" data-v-2d5d4116>AI Workspace</span></div></a></div></div>', 1)),
          s("div", { class: "header-center" }, [
            e[11] || (e[11] = s("span", { class: "fallback-text" }, "Header Ready (Fallback Mode)", -1)),
            s("button", {
              onClick: ns,
              class: "retry-button"
            }, "Retry Pinia")
          ]),
          e[13] || (e[13] = Ie('<div class="header-right" data-v-2d5d4116><div class="user-profile" data-v-2d5d4116><div class="user-info" data-v-2d5d4116><span class="user-name" data-v-2d5d4116>User</span></div><div class="user-avatar" data-v-2d5d4116><span class="avatar-placeholder" data-v-2d5d4116>U</span></div></div></div>', 1))
        ])) : D.value && !x(M) ? (_(), U("div", lo, [
          e[16] || (e[16] = Ie('<div class="header-left" data-v-2d5d4116><div class="logo-section" data-v-2d5d4116><a href="/" class="logo" data-v-2d5d4116><div class="text-logo" data-v-2d5d4116><span class="logo-text" data-v-2d5d4116>AI Workspace</span></div></a></div></div>', 1)),
          s("div", co, [
            s("span", uo, [
              g(i, null, {
                default: f(() => [
                  g(x(Xe))
                ]),
                _: 1
              }),
              e[14] || (e[14] = Y(" Session expired - Please log in again ", -1))
            ])
          ]),
          s("div", po, [
            g(d, {
              type: "primary",
              onClick: e[0] || (e[0] = (I) => E.value = !0)
            }, {
              default: f(() => [
                g(i, null, {
                  default: f(() => [
                    g(x(Te))
                  ]),
                  _: 1
                }),
                e[15] || (e[15] = Y(" Log In ", -1))
              ]),
              _: 1
            })
          ])
        ])) : D.value && x(M) ? (_(), U("div", fo, [
          s("div", ho, [
            s("div", go, [
              s("a", vo, [
                a.customLogo ? (_(), U("img", {
                  key: 0,
                  src: a.customLogo,
                  alt: "AIWorkspace",
                  class: "logo-image"
                }, null, 8, wo)) : (_(), U("div", mo, [...e[17] || (e[17] = [
                  s("span", { class: "logo-text" }, "AI Workspace", -1)
                ])]))
              ])
            ])
          ]),
          a.showSecondaryNavigation ? (_(), U("div", ko, [
            s("nav", _o, [
              a.showWorkspaceSelector ? (_(), Q(Ue, {
                key: 0,
                onCommand: be,
                trigger: "hover"
              }, {
                dropdown: f(() => [
                  g(de, { class: "workspace-tree-dropdown" }, {
                    default: f(() => [
                      g(Z, {
                        command: "all-workspace",
                        class: Ve({ active: se.value })
                      }, {
                        default: f(() => [
                          s("a", So, [
                            s("div", bo, [
                              e[19] || (e[19] = s("span", { class: "workspace-icon" }, "🌐", -1)),
                              e[20] || (e[20] = s("span", null, "All workspace", -1)),
                              se.value ? (_(), Q(T, {
                                key: 0,
                                size: "small",
                                type: "success"
                              }, {
                                default: f(() => [...e[18] || (e[18] = [
                                  Y("Current", -1)
                                ])]),
                                _: 1
                              })) : j("", !0)
                            ])
                          ])
                        ]),
                        _: 1
                      }, 8, ["class"]),
                      N.value.length > 0 ? (_(), Q(Z, {
                        key: 0,
                        divided: "",
                        disabled: ""
                      })) : j("", !0),
                      (_(!0), U(Pe, null, $e(N.value, (I) => (_(), Q(Z, {
                        key: I.id,
                        command: `workspace-${I.id}`
                      }, {
                        default: f(() => {
                          var me;
                          return [
                            s("a", {
                              href: `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${I.id}/dashboard`,
                              class: "nav-link"
                            }, [
                              s("div", {
                                class: "workspace-dropdown-item",
                                style: ps({ paddingLeft: (I.level || 0) * 16 + "px" })
                              }, [
                                s("span", Ao, B(I.children && I.children.length ? "📁" : "📄"), 1),
                                s("span", null, B(I.title), 1),
                                I.id === ((me = F.value) == null ? void 0 : me.id) ? (_(), Q(T, {
                                  key: 0,
                                  size: "small",
                                  type: "success"
                                }, {
                                  default: f(() => [...e[21] || (e[21] = [
                                    Y("Current", -1)
                                  ])]),
                                  _: 1
                                })) : j("", !0)
                              ], 4)
                            ], 8, Co)
                          ];
                        }),
                        _: 2
                      }, 1032, ["command"]))), 128)),
                      N.value.length === 0 ? (_(), Q(Z, {
                        key: 1,
                        disabled: ""
                      }, {
                        default: f(() => [...e[22] || (e[22] = [
                          Y(" No workspaces ", -1)
                        ])]),
                        _: 1
                      })) : j("", !0)
                    ]),
                    _: 1
                  })
                ]),
                default: f(() => {
                  var I;
                  return [
                    s("span", yo, [
                      Y(B(se.value ? "All workspace" : ((I = F.value) == null ? void 0 : I.title) || "Select Workspace") + " ", 1),
                      g(i, { class: "nav-arrow" }, {
                        default: f(() => [
                          g(x(Ye))
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }),
                _: 1
              })) : j("", !0),
              a.showWorkspaceSelector ? (_(), U("span", Io, "/")) : j("", !0),
              a.showSecondaryNavigation ? (_(), Q(Ue, {
                key: 2,
                trigger: "hover"
              }, {
                dropdown: f(() => [
                  g(de, null, {
                    default: f(() => [
                      (_(!0), U(Pe, null, $e(le.value, (I) => (_(), Q(Z, {
                        key: I.label,
                        class: Ve({ active: I.active })
                      }, {
                        default: f(() => [
                          s("a", {
                            href: Me(I),
                            class: "nav-link",
                            onClick: ge((me) => He(I), ["prevent"])
                          }, B(I.label), 9, Lo)
                        ]),
                        _: 2
                      }, 1032, ["class"]))), 128))
                    ]),
                    _: 1
                  })
                ]),
                default: f(() => [
                  s("span", Eo, [
                    Y(B(fe.value) + " ", 1),
                    g(i, { class: "nav-arrow" }, {
                      default: f(() => [
                        g(x(Ye))
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })) : j("", !0)
            ])
          ])) : j("", !0),
          s("div", Ro, [
            g(Ue, {
              onCommand: Ce,
              trigger: "click",
              placement: "bottom-end"
            }, {
              dropdown: f(() => [
                g(de, null, {
                  default: f(() => [
                    g(Z, null, {
                      default: f(() => [
                        s("a", {
                          href: "/profile",
                          class: "nav-link",
                          onClick: e[1] || (e[1] = ge((I) => Ce("profile"), ["prevent"]))
                        }, "Profile Settings")
                      ]),
                      _: 1
                    }),
                    a.showWorkspaceSelector ? (_(), Q(Z, { key: 0 }, {
                      default: f(() => [
                        s("a", {
                          href: "#switch-workspace",
                          class: "nav-link",
                          onClick: e[2] || (e[2] = ge((I) => Ce("workspaces"), ["prevent"]))
                        }, "Switch Workspace")
                      ]),
                      _: 1
                    })) : j("", !0),
                    g(Z, { divided: "" }, {
                      default: f(() => [
                        s("a", {
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
                s("div", Mo, [
                  s("div", Wo, [
                    s("span", Uo, B(X.value.name), 1)
                  ]),
                  s("div", Vo, [
                    X.value.avatar_url ? (_(), U("img", {
                      key: 0,
                      src: X.value.avatar_url,
                      alt: X.value.name
                    }, null, 8, Po)) : (_(), U("span", $o, B(X.value.initials), 1))
                  ])
                ])
              ]),
              _: 1
            })
          ])
        ])) : (_(), U("div", xo, [
          s("div", Do, [
            s("div", No, [
              s("a", Oo, [
                a.customLogo ? (_(), U("img", {
                  key: 0,
                  src: a.customLogo,
                  alt: "AIWorkspace",
                  class: "logo-image"
                }, null, 8, To)) : (_(), U("div", Fo, [...e[23] || (e[23] = [
                  s("span", { class: "logo-text" }, "AI Workspace", -1)
                ])]))
              ])
            ])
          ]),
          e[25] || (e[25] = s("div", { class: "header-center" }, [
            s("span", { class: "welcome-text" }, "Welcome to AI Workspace")
          ], -1)),
          s("div", zo, [
            g(d, {
              type: "primary",
              size: "large",
              class: "login-button",
              onClick: e[4] || (e[4] = (I) => E.value = !0)
            }, {
              default: f(() => [
                g(i, null, {
                  default: f(() => [
                    g(x(Te))
                  ]),
                  _: 1
                }),
                e[24] || (e[24] = Y(" Login / Signup ", -1))
              ]),
              _: 1
            })
          ])
        ])),
        D.value && a.showWorkspaceSelector ? (_(), Q(is, {
          key: 5,
          modelValue: u.value,
          "onUpdate:modelValue": e[6] || (e[6] = (I) => u.value = I),
          title: "Switch Workspace",
          width: "500px",
          onClose: e[7] || (e[7] = (I) => u.value = !1)
        }, {
          footer: f(() => [
            g(d, {
              onClick: e[5] || (e[5] = (I) => u.value = !1)
            }, {
              default: f(() => [...e[26] || (e[26] = [
                Y("Cancel", -1)
              ])]),
              _: 1
            }),
            g(d, {
              type: "primary",
              onClick: es
            }, {
              default: f(() => [...e[27] || (e[27] = [
                Y("Create New Workspace", -1)
              ])]),
              _: 1
            })
          ]),
          default: f(() => [
            s("div", Ho, [
              (_(!0), U(Pe, null, $e(k.value, (I) => {
                var me, Ge;
                return _(), U("div", {
                  key: I.id,
                  class: Ve(["workspace-item", { active: I.id === ((me = F.value) == null ? void 0 : me.id) }]),
                  onClick: (sa) => Be(I)
                }, [
                  s("div", Go, B(I.children && I.children.length ? "📁" : "📄"), 1),
                  s("div", Ko, [
                    s("h3", null, B(I.title), 1),
                    s("p", null, B(I.description), 1),
                    s("span", Yo, B(I.hasAccess ? "Active" : "Inactive"), 1)
                  ]),
                  I.id === ((Ge = F.value) == null ? void 0 : Ge.id) ? (_(), U("div", qo, [
                    g(i, null, {
                      default: f(() => [
                        g(x(ys))
                      ]),
                      _: 1
                    })
                  ])) : j("", !0)
                ], 10, Bo);
              }), 128))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])) : j("", !0),
        g(Fs, {
          modelValue: E.value,
          "onUpdate:modelValue": e[8] || (e[8] = (I) => E.value = I),
          onLoginSuccess: os
        }, null, 8, ["modelValue"]),
        g(eo, {
          modelValue: p.value,
          "onUpdate:modelValue": e[9] || (e[9] = (I) => p.value = I),
          "session-loss-event": x(O),
          "can-retry-session": x(h) || !1,
          onRetry: as,
          onLogin: ts,
          onRefresh: rs
        }, null, 8, ["modelValue", "session-loss-event", "can-retry-session"])
      ]);
    };
  }
});
const pa = /* @__PURE__ */ Re(Jo, [["__scopeId", "data-v-2d5d4116"]]), Xo = { class: "auth-callback" }, jo = /* @__PURE__ */ re({
  __name: "AuthCallback",
  setup(r) {
    ye(async () => {
      console.log("[AuthCallback] Component mounted, starting callback processing..."), console.log("[AuthCallback] Current URL:", window.location.href), console.log("[AuthCallback] Current hash:", window.location.hash);
      try {
        await new Promise((S) => setTimeout(S, 500));
        const { data: t, error: y } = await Le.auth.getSession();
        if (y) {
          console.error("Error processing callback:", y), o();
          return;
        }
        if (t != null && t.session) {
          const S = t.session.user;
          console.log("OAuth login successful:", S.email), t.session.access_token && _e(ne, t.session.access_token), t.session.refresh_token && _e(ie, t.session.refresh_token), Oe();
          const C = ws();
          console.log("[callback] Post-login redirect URL:", C), console.log("[callback] Session storage redirect:", sessionStorage.getItem("post-login-redirect")), console.log("[callback] Local storage redirect:", localStorage.getItem("post-login-redirect"));
          const W = C || "/";
          if (console.log("[callback] Final redirect URL:", W), W.startsWith("/")) {
            const M = window.location.origin, O = `${M}${W}`;
            console.log("[callback] redirecting to:", O, { hostname: window.location.hostname, origin: M }), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
              window.location.href = O;
            }, 100);
          } else
            console.log("[callback] redirecting to absolute URL:", W), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
              window.location.href = W;
            }, 100);
        } else
          o();
      } catch (t) {
        console.error("Error processing callback:", t), o();
      }
    });
    const o = () => {
      const y = window.location.href.replace("/auth/callback", "");
      window.location.href = y;
    };
    return (t, y) => (_(), U("div", Xo, [...y[0] || (y[0] = [
      s("div", { class: "callback-container" }, [
        s("div", { class: "loading-spinner" }, [
          s("div", { class: "spinner" })
        ]),
        s("h2", null, "Processing login..."),
        s("p", null, "Please wait while we complete your authentication.")
      ], -1)
    ])]));
  }
});
const fa = /* @__PURE__ */ Re(jo, [["__scopeId", "data-v-acdf6325"]]), he = class he {
  constructor() {
    Ae(this, "validationCache", /* @__PURE__ */ new Map());
    Ae(this, "CACHE_DURATION", Qe().validationCacheDuration);
  }
  static getInstance() {
    return he.instance || (he.instance = new he()), he.instance;
  }
  /**
   * Validate current session with caching
   */
  async validateSession(o = !1) {
    const t = "session_validation";
    if (!o) {
      const y = this.validationCache.get(t);
      if (y && Date.now() - y.timestamp < this.CACHE_DURATION)
        return console.log("[SessionValidator] Using cached validation result"), y.result;
    }
    console.log("[SessionValidator] Validating session...");
    try {
      const y = pe(ne), S = pe(ie);
      if (!y || !S) {
        const n = {
          isValid: !1,
          needsLogin: !0,
          error: "No authentication tokens found",
          canRetry: !1
        };
        return this.cacheResult(t, n), n;
      }
      const C = await ee(), { data: { session: W }, error: M } = await C.auth.getSession();
      if (M) {
        console.warn("[SessionValidator] Error getting session:", M);
        const n = {
          isValid: !1,
          needsLogin: !0,
          error: `Session error: ${M.message}`,
          canRetry: !0
        };
        return this.cacheResult(t, n), n;
      }
      if (!W || !W.user) {
        const n = {
          isValid: !1,
          needsLogin: !0,
          error: "No valid session found",
          canRetry: !0
        };
        return this.cacheResult(t, n), n;
      }
      const O = /* @__PURE__ */ new Date(), w = new Date(W.expires_at * 1e3);
      if (O >= w) {
        const n = {
          isValid: !1,
          needsLogin: !0,
          error: "Session has expired",
          canRetry: !0
        };
        return this.cacheResult(t, n), n;
      }
      const h = {
        isValid: !0,
        needsLogin: !1,
        canRetry: !1
      };
      return this.cacheResult(t, h), h;
    } catch (y) {
      console.error("[SessionValidator] Error validating session:", y);
      const S = {
        isValid: !1,
        needsLogin: !0,
        error: `Validation error: ${y}`,
        canRetry: !0
      };
      return this.cacheResult(t, S), S;
    }
  }
  /**
   * Attempt to restore session from tokens
   */
  async restoreSession() {
    console.log("[SessionValidator] Attempting to restore session...");
    try {
      const o = pe(ne), t = pe(ie);
      if (!o || !t)
        return {
          isValid: !1,
          needsLogin: !0,
          error: "No tokens available for restoration",
          canRetry: !1
        };
      const y = await ee(), { data: S, error: C } = await y.auth.setSession({
        access_token: o,
        refresh_token: t
      });
      return C ? (console.warn("[SessionValidator] Error restoring session:", C), {
        isValid: !1,
        needsLogin: !0,
        error: `Restoration error: ${C.message}`,
        canRetry: !0
      }) : S.session && S.session.user ? (console.log("[SessionValidator] Session restored successfully"), this.clearCache(), {
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
Ae(he, "instance");
let Fe = he;
const ze = Fe.getInstance(), Zo = (r = !1) => ze.validateSession(r), Qo = () => ze.restoreSession(), ea = () => ze.clearCache();
async function ha() {
  console.log("[SessionValidator] Initializing session validation...");
  let r = await Zo();
  return !r.isValid && r.canRetry && (console.log("[SessionValidator] Attempting session restoration..."), r = await Qo()), r;
}
function ga() {
  if (typeof window > "u")
    return () => {
    };
  const r = () => {
    console.log("[SessionValidator] Network restored, clearing cache for revalidation"), ea();
  }, o = () => {
    console.log("[SessionValidator] Network lost, session validation may fail");
  };
  return window.addEventListener("online", r), window.addEventListener("offline", o), () => {
    window.removeEventListener("online", r), window.removeEventListener("offline", o);
  };
}
export {
  ne as ACCESS_COOKIE,
  pa as AIWorkspaceHeader,
  fa as AuthCallback,
  ya as LS_ACCESS_KEY,
  Sa as LS_REFRESH_KEY,
  Fs as LoginModal,
  ie as REFRESH_COOKIE,
  eo as SessionLossModal,
  Fe as SessionValidator,
  ba as buildOAuthRedirectUrl,
  Ne as clearLocalStorageTokens,
  ea as clearSessionCache,
  ke as clearSessionCookie,
  Ms as conservativeConfig,
  la as createSessionConfig,
  ve as defaultSessionConfig,
  da as detectionScenarios,
  je as developmentConfig,
  Ca as ensureCrossSubdomainCookies,
  Rs as fastDetectionConfig,
  ca as getConfigByPreset,
  pe as getCookie,
  ws as getPostLoginBase,
  Qe as getSessionConfig,
  vs as initializeCrossSubdomainAuth,
  ha as initializeSessionValidation,
  Ze as productionConfig,
  ma as restoreCrossSubdomainSession,
  Qo as restoreSession,
  De as restoreSessionWithRetry,
  Ws as sessionConfigPresets,
  ze as sessionValidator,
  _e as setSessionCookie,
  ka as setupAuthStateListener,
  ga as setupNetworkAwareValidation,
  Ia as setupUniversalCallback,
  Le as supabase,
  Oe as syncCookiesToLocalStorage,
  ua as timingInfo,
  Ps as useAuth,
  Ls as useEnhancedAuth,
  Us as useSessionMonitor,
  Vs as useWorkspaceStore,
  Zo as validateSession
};
