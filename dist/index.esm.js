import { defineComponent as se, openBlock as g, createElementBlock as A, createElementVNode as s, ref as P, computed as T, onMounted as ke, watch as te, reactive as Me, resolveComponent as G, createBlock as q, withCtx as h, toDisplayString as N, createVNode as _, unref as ee, withModifiers as oe, createCommentVNode as B, createTextVNode as F, createStaticVNode as ye, normalizeClass as be, Fragment as Se, renderList as Ae, normalizeStyle as De } from "vue";
import { ElForm as Te, ElMessage as V, ElMessageBox as Ee } from "element-plus";
import { i as ze, g as Y, r as Ce, s as ve } from "./supabase-a39d57e1.mjs";
import { a as us, b as ds } from "./supabase-a39d57e1.mjs";
import { clearSessionCookie as ce, ACCESS_COOKIE as ue, REFRESH_COOKIE as de, clearLocalStorageTokens as We, setSessionCookie as pe, syncCookiesToLocalStorage as Ie, getPostLoginBase as He } from "./utils/authRedirect.js";
import { LS_ACCESS_KEY as fs, LS_REFRESH_KEY as hs, buildOAuthRedirectUrl as ws, ensureCrossSubdomainCookies as ks, getCookie as gs } from "./utils/authRedirect.js";
import { defineStore as Be } from "pinia";
import { setupUniversalCallback as ms } from "./utils/universalCallback.js";
/*! Element Plus Icons Vue v2.3.2 */
var Fe = /* @__PURE__ */ se({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(d) {
    return (p, f) => (g(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      s("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"
      })
    ]));
  }
}), Pe = Fe, Ke = /* @__PURE__ */ se({
  name: "Check",
  __name: "check",
  setup(d) {
    return (p, f) => (g(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      s("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      })
    ]));
  }
}), qe = Ke, Ge = /* @__PURE__ */ se({
  name: "Lock",
  __name: "lock",
  setup(d) {
    return (p, f) => (g(), A("svg", {
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
}), $e = Ge, Je = /* @__PURE__ */ se({
  name: "Message",
  __name: "message",
  setup(d) {
    return (p, f) => (g(), A("svg", {
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
}), je = Je, Xe = /* @__PURE__ */ se({
  name: "User",
  __name: "user",
  setup(d) {
    return (p, f) => (g(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      s("path", {
        fill: "currentColor",
        d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"
      })
    ]));
  }
}), Ye = Xe;
function Qe() {
  const d = P({
    user: null,
    isAuthenticated: !1,
    isLoading: !0,
    error: null
  }), p = P(null), f = T(() => d.value.isAuthenticated), L = T(() => d.value.user), $ = T(() => d.value.isLoading), U = async () => {
    var c, n, t, y, C, E, x, W, k, o, m, u, w, j, Q, H, M, le, D, fe, ge;
    try {
      console.log("[auth][enhanced] Ensuring cross-subdomain cookie synchronization...");
      const { ensureCrossSubdomainCookies: ne, ACCESS_COOKIE: K, REFRESH_COOKIE: z } = await import("./utils/authRedirect.js");
      ne([K, z]), await new Promise((S) => setTimeout(S, 100));
      let X = null;
      try {
        const I = await (await Y()).auth.getSession();
        X = (c = I == null ? void 0 : I.data) == null ? void 0 : c.session;
      } catch (S) {
        console.warn("[auth][enhanced] Error getting Supabase session:", S);
      }
      if (X && X.user) {
        console.log("[auth][enhanced] Active Supabase session found");
        const S = X.user, I = {
          id: S.id,
          name: ((n = S.user_metadata) == null ? void 0 : n.name) || ((t = S.user_metadata) == null ? void 0 : t.user_name) || ((y = S.user_metadata) == null ? void 0 : y.full_name) || ((C = S.email) == null ? void 0 : C.split("@")[0]) || "User",
          email: S.email,
          avatar_url: ((E = S.user_metadata) == null ? void 0 : E.avatar_url) || null,
          user_metadata: S.user_metadata
        };
        return d.value = {
          user: I,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, p.value = {
          user: I,
          access_token: X.access_token,
          refresh_token: X.refresh_token
        }, { user: I, session: p.value, error: null };
      }
      console.log("[auth][enhanced] No active session, attempting to restore from cookies...");
      const re = await Ce();
      if (re.success && re.session) {
        console.log("[auth][enhanced] Session restored successfully from cookies");
        const S = re.session.user, I = {
          id: S.id,
          name: ((x = S.user_metadata) == null ? void 0 : x.name) || ((W = S.user_metadata) == null ? void 0 : W.user_name) || ((k = S.user_metadata) == null ? void 0 : k.full_name) || ((o = S.email) == null ? void 0 : o.split("@")[0]) || "User",
          email: S.email,
          avatar_url: ((m = S.user_metadata) == null ? void 0 : m.avatar_url) || null,
          user_metadata: S.user_metadata
        };
        return d.value = {
          user: I,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, p.value = re.session, { user: I, session: p.value, error: null };
      } else {
        console.log("[auth][enhanced] Failed to restore session:", re.error), console.log("[auth][enhanced] Retrying session restoration with extended delay..."), await new Promise((I) => setTimeout(I, 500)), ne([K, z]);
        const S = await Ce();
        if (S.success && S.session) {
          console.log("[auth][enhanced] Session restored on retry");
          const I = S.session.user, he = {
            id: I.id,
            name: ((u = I.user_metadata) == null ? void 0 : u.name) || ((w = I.user_metadata) == null ? void 0 : w.user_name) || ((j = I.user_metadata) == null ? void 0 : j.full_name) || ((Q = I.email) == null ? void 0 : Q.split("@")[0]) || "User",
            email: I.email,
            avatar_url: ((H = I.user_metadata) == null ? void 0 : H.avatar_url) || null,
            user_metadata: I.user_metadata
          };
          return d.value = {
            user: he,
            isAuthenticated: !0,
            isLoading: !1,
            error: null
          }, p.value = S.session, { user: he, session: p.value, error: null };
        }
      }
    } catch (ne) {
      console.error("Error getting Supabase session:", ne);
      try {
        const K = await Ce();
        if (K.success && K.session) {
          console.log("[auth][enhanced] Session restored after error");
          const z = K.session.user, X = {
            id: z.id,
            name: ((M = z.user_metadata) == null ? void 0 : M.name) || ((le = z.user_metadata) == null ? void 0 : le.user_name) || ((D = z.user_metadata) == null ? void 0 : D.full_name) || ((fe = z.email) == null ? void 0 : fe.split("@")[0]) || "User",
            email: z.email,
            avatar_url: ((ge = z.user_metadata) == null ? void 0 : ge.avatar_url) || null,
            user_metadata: z.user_metadata
          };
          return d.value = {
            user: X,
            isAuthenticated: !0,
            isLoading: !1,
            error: null
          }, p.value = K.session, { user: X, session: p.value, error: null };
        }
      } catch (K) {
        console.error("Error restoring session:", K);
      }
    }
    return console.log("[auth][enhanced] No valid authentication found"), d.value = {
      user: null,
      isAuthenticated: !1,
      isLoading: !1,
      error: "No valid session found"
    }, p.value = null, { user: null, session: null, error: "No valid session found" };
  }, O = async () => {
    try {
      await (await Y()).auth.signOut(), ce(ue), ce(de), We(), d.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      }, p.value = null, console.log("[auth][enhanced] User logged out successfully");
    } catch (c) {
      console.error("Error during logout:", c), d.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      }, p.value = null;
    }
  }, R = async (c, n) => {
    var t, y, C, E, x;
    try {
      d.value.isLoading = !0;
      const W = await Y(), { data: k, error: o } = await W.auth.signInWithPassword({
        email: c,
        password: n
      });
      if (o)
        throw o;
      if (k.session) {
        const m = k.session.user, u = {
          id: m.id,
          name: ((t = m.user_metadata) == null ? void 0 : t.name) || ((y = m.user_metadata) == null ? void 0 : y.user_name) || ((C = m.user_metadata) == null ? void 0 : C.full_name) || ((E = m.email) == null ? void 0 : E.split("@")[0]) || "User",
          email: m.email,
          avatar_url: ((x = m.user_metadata) == null ? void 0 : x.avatar_url) || null,
          user_metadata: m.user_metadata
        };
        return d.value = {
          user: u,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, p.value = {
          user: u,
          access_token: k.session.access_token,
          refresh_token: k.session.refresh_token
        }, { user: u, session: p.value, error: null };
      }
      return { user: null, session: null, error: "No session returned" };
    } catch (W) {
      return console.error("Sign in error:", W), d.value.isLoading = !1, { user: null, session: null, error: String(W) };
    }
  }, J = async (c, n, t) => {
    var y, C, E, x, W;
    try {
      d.value.isLoading = !0;
      const k = await Y(), { data: o, error: m } = await k.auth.signUp({
        email: c,
        password: n,
        options: {
          data: t
        }
      });
      if (m)
        throw m;
      if (o.session) {
        const u = o.session.user, w = {
          id: u.id,
          name: ((y = u.user_metadata) == null ? void 0 : y.name) || ((C = u.user_metadata) == null ? void 0 : C.user_name) || ((E = u.user_metadata) == null ? void 0 : E.full_name) || ((x = u.email) == null ? void 0 : x.split("@")[0]) || "User",
          email: u.email,
          avatar_url: ((W = u.user_metadata) == null ? void 0 : W.avatar_url) || null,
          user_metadata: u.user_metadata
        };
        return d.value = {
          user: w,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, p.value = {
          user: w,
          access_token: o.session.access_token,
          refresh_token: o.session.refresh_token
        }, { user: w, session: p.value, error: null };
      }
      return { user: null, session: null, error: "No session returned" };
    } catch (k) {
      return console.error("Sign up error:", k), d.value.isLoading = !1, { user: null, session: null, error: String(k) };
    }
  }, l = async () => {
    await U();
  };
  return ke(async () => {
    await ze(), await l();
  }), {
    // State
    authState: d,
    currentSession: p,
    // Computed
    isAuthenticated: f,
    currentUser: L,
    isLoading: $,
    // Methods
    loadUserInfo: U,
    logout: O,
    signIn: R,
    signUp: J,
    checkAuth: l
  };
}
const Ze = Be("workspace", () => {
  const d = P(null), p = P([]), f = P(null), L = (l) => {
    d.value = l, localStorage.setItem("current_workspace", JSON.stringify(l));
  }, $ = (l) => {
    p.value = l, localStorage.setItem("available_workspaces", JSON.stringify(l));
  };
  return {
    currentWorkspace: d,
    workspaces: p,
    user: f,
    setCurrentWorkspace: L,
    setWorkspaces: $,
    setUser: (l) => {
      f.value = l, localStorage.setItem("user_info", JSON.stringify(l));
    },
    loadPersistedData: () => {
      const l = localStorage.getItem("current_workspace");
      if (l)
        try {
          d.value = JSON.parse(l);
        } catch (t) {
          console.error("Error loading persisted workspace:", t);
        }
      const c = localStorage.getItem("available_workspaces");
      if (c)
        try {
          p.value = JSON.parse(c);
        } catch (t) {
          console.error("Error loading persisted workspaces:", t);
        }
      const n = localStorage.getItem("user_info");
      if (n)
        try {
          f.value = JSON.parse(n);
        } catch (t) {
          console.error("Error loading persisted user:", t);
        }
    },
    clearData: () => {
      d.value = null, p.value = [], f.value = null, localStorage.removeItem("current_workspace"), localStorage.removeItem("available_workspaces"), localStorage.removeItem("user_info");
    },
    loadWorkspaces: async (l = !1) => {
      try {
        const { data: { user: c } } = await ve.auth.getUser();
        if (!c)
          return [];
        let n = ve.from("workspaces").select(`
          id, title, description, parent_workspace_id, created_by, archived, created_at, git_repo, 
          workspace_access!inner ( access_type, shared_with_user_id ),
          workspace_activities!left ( updated_at )
        `).eq("workspace_access.shared_with_user_id", c.id);
        l || (n = n.eq("archived", !1));
        const { data: t, error: y } = await n;
        if (y)
          throw y;
        const C = /* @__PURE__ */ new Map();
        (t || []).forEach((o) => {
          (o.workspace_access || []).forEach((m) => {
            m.shared_with_user_id === c.id && C.set(o.id, m);
          });
        });
        const E = [...new Set(
          (t || []).filter((o) => o.parent_workspace_id).map((o) => o.parent_workspace_id).filter((o) => !C.has(o))
        )];
        let x = [];
        if (E.length) {
          let o = ve.from("workspaces").select("id, title, description, parent_workspace_id, created_by, archived, created_at").in("id", E);
          l || (o = o.eq("archived", !1));
          const { data: m, error: u } = await o;
          if (u)
            throw u;
          x = m || [];
        }
        const k = [...t || [], ...x].map((o) => {
          var m, u, w;
          return {
            id: o.id,
            title: o.title,
            description: o.description || "No description",
            parent_workspace_id: o.parent_workspace_id,
            created_by: o.created_by,
            archived: o.archived,
            created_at: o.created_at,
            latest_activity: ((u = (m = o.workspace_activities) == null ? void 0 : m[0]) == null ? void 0 : u.updated_at) || o.created_at,
            hasAccess: C.has(o.id),
            accessType: ((w = C.get(o.id)) == null ? void 0 : w.access_type) || null
          };
        });
        return k.sort((o, m) => new Date(m.latest_activity) - new Date(o.latest_activity)), $(k), k;
      } catch (c) {
        return console.error("loadWorkspaces error", c), [];
      }
    }
  };
});
function ea() {
  const d = P({
    user: null,
    isAuthenticated: !1,
    isLoading: !0,
    error: null
  }), p = P(window.location.href), f = async () => {
    var l, c, n, t, y, C, E, x;
    try {
      d.value.isLoading = !0;
      const W = await Y(), { data: { session: k }, error: o } = await W.auth.getSession();
      if (o) {
        console.error("Error checking auth status:", o), d.value = {
          user: null,
          isAuthenticated: !1,
          isLoading: !1,
          error: o.message
        };
        return;
      }
      k != null && k.user ? (d.value = {
        user: {
          id: k.user.id,
          email: k.user.email || "",
          name: ((l = k.user.user_metadata) == null ? void 0 : l.full_name) || ((c = k.user.user_metadata) == null ? void 0 : c.name) || ((n = k.user.email) == null ? void 0 : n.split("@")[0]) || "User",
          avatar_url: ((t = k.user.user_metadata) == null ? void 0 : t.avatar_url) || ((y = k.user.user_metadata) == null ? void 0 : y.picture) || null,
          initials: (((C = k.user.user_metadata) == null ? void 0 : C.full_name) || ((E = k.user.user_metadata) == null ? void 0 : E.name) || ((x = k.user.email) == null ? void 0 : x.split("@")[0]) || "U").split(" ").map((m) => m[0]).join("").toUpperCase().substring(0, 2)
        },
        isAuthenticated: !0,
        isLoading: !1,
        error: null
      }, k.access_token && pe(ue, k.access_token), k.refresh_token && pe(de, k.refresh_token), Ie()) : d.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      };
    } catch (W) {
      console.error("Auth check failed:", W), d.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: W.message || "Authentication check failed"
      };
    }
  }, L = async (l, c) => {
    try {
      const n = await Y(), { error: t } = await n.auth.signInWithPassword({
        email: l,
        password: c
      });
      return t ? { success: !1, error: t.message } : (await f(), sessionStorage.setItem("post-login-redirect", p.value), { success: !0 });
    } catch (n) {
      return console.error("Login error:", n), { success: !1, error: n.message || "Login failed" };
    }
  }, $ = async (l, c) => {
    var n;
    try {
      const t = await Y(), { data: y, error: C } = await t.auth.signUp({
        email: l,
        password: c
      });
      return C ? { success: !1, error: C.message } : y.user && !y.user.email_confirmed_at ? { success: !0, needsConfirmation: !0 } : (n = y.session) != null && n.user ? (await f(), sessionStorage.setItem("post-login-redirect", p.value), { success: !0 }) : { success: !1, error: "No session created" };
    } catch (t) {
      return console.error("Signup error:", t), { success: !1, error: t.message || "Signup failed" };
    }
  }, U = async (l) => {
    try {
      const c = `${window.location.origin}/auth/callback`;
      console.log("[OAuth] Starting login with provider:", l), console.log("[OAuth] Redirect URL:", c), console.log("[OAuth] Current URL:", p.value), console.log("[OAuth] Current origin:", window.location.origin);
      const n = await Y(), { error: t } = await n.auth.signInWithOAuth({
        provider: l,
        options: {
          redirectTo: c,
          queryParams: {
            redirect_origin: p.value
          }
        }
      });
      if (t)
        return console.error("[OAuth] Error:", t), { success: !1, error: t.message };
      const y = p.value || window.location.href;
      return sessionStorage.setItem("post-login-redirect", y), localStorage.setItem("post-login-redirect", y), console.log("[OAuth] Stored redirect URL:", y), console.log("[OAuth] Current URL value:", p.value), console.log("[OAuth] Window location href:", window.location.href), { success: !0 };
    } catch (c) {
      return console.error("OAuth login error:", c), { success: !1, error: c.message || "OAuth login failed" };
    }
  }, O = async () => {
    try {
      const l = await Y(), { error: c } = await l.auth.signOut();
      c && console.error("Logout error:", c), d.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      }, ce(ue), ce(de), We();
    } catch (l) {
      console.error("Logout error:", l);
    }
  }, R = async (l) => {
    try {
      const c = await Y(), { error: n } = await c.auth.resetPasswordForEmail(l, {
        redirectTo: `${window.location.origin}/auth/reset-password`
      });
      return n ? { success: !1, error: n.message } : { success: !0 };
    } catch (c) {
      return console.error("Password reset error:", c), { success: !1, error: c.message || "Password reset failed" };
    }
  }, J = async () => {
    try {
      (await Y()).auth.onAuthStateChange((c, n) => {
        var t;
        switch (console.log("Auth state changed:", c, (t = n == null ? void 0 : n.user) == null ? void 0 : t.email), c) {
          case "SIGNED_IN":
            n != null && n.user && f();
            break;
          case "SIGNED_OUT":
            d.value = {
              user: null,
              isAuthenticated: !1,
              isLoading: !1,
              error: null
            }, ce(ue), ce(de), We();
            break;
          case "TOKEN_REFRESHED":
            n != null && n.access_token && pe(ue, n.access_token), n != null && n.refresh_token && pe(de, n.refresh_token), Ie();
            break;
          case "USER_UPDATED":
            n != null && n.user && f();
            break;
        }
      });
    } catch (l) {
      console.warn("Failed to setup auth listener:", l);
    }
  };
  return ke(async () => {
    J(), await f();
  }), te(() => window.location.href, (l) => {
    p.value = l;
  }), {
    authState: T(() => d.value),
    isAuthenticated: T(() => d.value.isAuthenticated),
    user: T(() => d.value.user),
    isLoading: T(() => d.value.isLoading),
    checkAuthStatus: f,
    loginWithEmail: L,
    signupWithEmail: $,
    loginWithProvider: U,
    logout: O,
    resetPassword: R,
    currentUrl: T(() => p.value)
  };
}
const aa = { class: "login-container" }, sa = { class: "logo-section" }, ra = { class: "login-buttons" }, ta = {
  key: 0,
  class: "forgot-password"
}, oa = { class: "signup-link" }, la = /* @__PURE__ */ se({
  __name: "LoginModal",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue", "login-success"],
  setup(d, { emit: p }) {
    const f = d, L = p, $ = T({
      get: () => f.modelValue,
      set: (u) => L("update:modelValue", u)
    }), U = P(!1), O = P(!1), R = P(), { loginWithEmail: J, signupWithEmail: l, loginWithProvider: c, resetPassword: n } = ea(), t = Me({
      email: "",
      password: "",
      confirmPassword: ""
    }), y = T(() => ({
      email: [
        { required: !0, message: "Please enter your email", trigger: "blur" },
        { type: "email", message: "Please enter a valid email", trigger: "blur" }
      ],
      password: [
        { required: !0, message: "Please enter your password", trigger: "blur" },
        { min: 6, message: "Password must be at least 6 characters", trigger: "blur" }
      ],
      ...U.value ? {
        confirmPassword: [
          { required: !0, message: "Please confirm your password", trigger: "blur" },
          {
            validator: (u, w, j) => {
              w !== t.password ? j(new Error("Passwords do not match")) : j();
            },
            trigger: "blur"
          }
        ]
      } : {}
    })), C = () => {
      var u;
      U.value = !U.value, t.email = "", t.password = "", t.confirmPassword = "", (u = R.value) == null || u.clearValidate();
    }, E = () => {
      var u;
      $.value = !1, t.email = "", t.password = "", t.confirmPassword = "", U.value = !1, (u = R.value) == null || u.clearValidate();
    }, x = async () => {
      if (R.value)
        try {
          await R.value.validate(), O.value = !0, U.value ? await k() : await W();
        } catch (u) {
          console.error("Form validation failed:", u);
        } finally {
          O.value = !1;
        }
    }, W = async () => {
      const u = await J(t.email, t.password);
      u.success ? (V.success("Login successful"), L("login-success", { email: t.email }), E()) : V.error("Login failed: " + u.error);
    }, k = async () => {
      const u = await l(t.email, t.password);
      u.success ? u.needsConfirmation ? V.success("Please check your email to confirm your account") : (V.success("Account created successfully"), L("login-success", { email: t.email }), E()) : V.error("Signup failed: " + u.error);
    }, o = async (u) => {
      const w = await c(u);
      w.success ? V.success("Redirecting to login provider...") : V.error("Login failed: " + w.error);
    }, m = async () => {
      if (!t.email) {
        V.warning("Please enter your email address first");
        return;
      }
      const u = await n(t.email);
      u.success ? V.success("Password reset email sent! Please check your inbox.") : V.error("Failed to send reset email: " + u.error);
    };
    return (u, w) => {
      const j = G("el-icon"), Q = G("el-input"), H = G("el-form-item"), M = G("el-button"), le = G("el-dialog");
      return g(), q(le, {
        modelValue: $.value,
        "onUpdate:modelValue": w[6] || (w[6] = (D) => $.value = D),
        title: "",
        width: "500px",
        "close-on-click-modal": !1,
        "close-on-press-escape": !0,
        "show-close": !0,
        class: "login-modal",
        onClose: E
      }, {
        default: h(() => [
          s("div", aa, [
            s("div", sa, [
              s("h2", null, N(U.value ? "Create Account" : "Welcome Back"), 1),
              s("p", null, N(U.value ? "Sign up to get started with your account" : "Sign in to continue to your account"), 1)
            ]),
            _(ee(Te), {
              model: t,
              rules: y.value,
              ref_key: "formRef",
              ref: R,
              class: "login-form",
              onSubmit: oe(x, ["prevent"])
            }, {
              default: h(() => [
                _(H, { prop: "email" }, {
                  default: h(() => [
                    _(Q, {
                      modelValue: t.email,
                      "onUpdate:modelValue": w[0] || (w[0] = (D) => t.email = D),
                      placeholder: "Email",
                      type: "email",
                      size: "large",
                      class: "form-input"
                    }, {
                      prefix: h(() => [
                        _(j, null, {
                          default: h(() => [
                            _(ee(je))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                _(H, { prop: "password" }, {
                  default: h(() => [
                    _(Q, {
                      modelValue: t.password,
                      "onUpdate:modelValue": w[1] || (w[1] = (D) => t.password = D),
                      placeholder: "Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: h(() => [
                        _(j, null, {
                          default: h(() => [
                            _(ee($e))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                U.value ? (g(), q(H, {
                  key: 0,
                  prop: "confirmPassword"
                }, {
                  default: h(() => [
                    _(Q, {
                      modelValue: t.confirmPassword,
                      "onUpdate:modelValue": w[2] || (w[2] = (D) => t.confirmPassword = D),
                      placeholder: "Confirm Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: h(() => [
                        _(j, null, {
                          default: h(() => [
                            _(ee($e))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                })) : B("", !0),
                _(H, null, {
                  default: h(() => [
                    _(M, {
                      type: "primary",
                      class: "submit-button",
                      loading: O.value,
                      onClick: x,
                      size: "large"
                    }, {
                      default: h(() => [
                        F(N(U.value ? "Sign Up" : "Sign In"), 1)
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model", "rules"]),
            w[10] || (w[10] = s("div", { class: "divider" }, [
              s("span", null, "Or continue with")
            ], -1)),
            s("div", ra, [
              _(M, {
                class: "login-button google",
                onClick: w[3] || (w[3] = (D) => o("google")),
                size: "large"
              }, {
                default: h(() => [...w[7] || (w[7] = [
                  s("span", { class: "social-icon" }, "G", -1),
                  F(" Google ", -1)
                ])]),
                _: 1
              }),
              _(M, {
                class: "login-button github",
                onClick: w[4] || (w[4] = (D) => o("github")),
                size: "large"
              }, {
                default: h(() => [...w[8] || (w[8] = [
                  s("span", { class: "social-icon" }, "⚡", -1),
                  F(" GitHub ", -1)
                ])]),
                _: 1
              }),
              _(M, {
                class: "login-button twitter",
                onClick: w[5] || (w[5] = (D) => o("twitter")),
                size: "large"
              }, {
                default: h(() => [...w[9] || (w[9] = [
                  s("span", { class: "social-icon" }, "X", -1),
                  F(" X (Twitter) ", -1)
                ])]),
                _: 1
              })
            ]),
            w[11] || (w[11] = s("div", { class: "terms" }, " By continuing, you agree to AI Workspace's Terms of Service and Privacy Policy ", -1)),
            U.value ? B("", !0) : (g(), A("div", ta, [
              s("a", {
                href: "#",
                onClick: oe(m, ["prevent"])
              }, "Forgot Password?")
            ])),
            s("div", oa, [
              F(N(U.value ? "Already have an account?" : "Don't have an account?") + " ", 1),
              s("a", {
                href: "#",
                onClick: oe(C, ["prevent"])
              }, N(U.value ? "Sign in" : "Sign up"), 1)
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
const Le = (d, p) => {
  const f = d.__vccOpts || d;
  for (const [L, $] of p)
    f[L] = $;
  return f;
}, na = /* @__PURE__ */ Le(la, [["__scopeId", "data-v-684a3f28"]]), ia = { class: "aiworkspace-header" }, ca = {
  key: 0,
  class: "header-content header-loading"
}, ua = { class: "header-center" }, da = { class: "loading-text" }, pa = { key: 0 }, fa = { key: 1 }, ha = {
  key: 1,
  class: "header-content header-fallback"
}, wa = {
  key: 2,
  class: "header-content"
}, ka = { class: "header-left" }, ga = { class: "logo-section" }, va = {
  href: "/",
  class: "logo"
}, ma = ["src"], _a = {
  key: 1,
  class: "text-logo"
}, ya = {
  key: 0,
  class: "header-center"
}, ba = { class: "main-navigation" }, Sa = { class: "nav-item" }, Aa = {
  href: "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard",
  class: "nav-link"
}, Ca = { class: "workspace-dropdown-item" }, Wa = ["href"], Ia = { class: "workspace-icon" }, La = {
  key: 1,
  class: "nav-divider"
}, Ua = { class: "nav-item" }, Ea = ["href", "onClick"], Pa = { class: "header-right" }, $a = { class: "user-profile" }, xa = { class: "user-info" }, Oa = { class: "user-name" }, Ra = { class: "user-avatar" }, Na = ["src", "alt"], Va = {
  key: 1,
  class: "avatar-placeholder"
}, Ma = {
  key: 3,
  class: "header-content header-unauthenticated"
}, Da = { class: "header-left" }, Ta = { class: "logo-section" }, za = {
  href: "/",
  class: "logo"
}, Ha = ["src"], Ba = {
  key: 1,
  class: "text-logo"
}, Fa = { class: "header-right" }, Ka = { class: "workspace-list" }, qa = ["onClick"], Ga = { class: "workspace-icon" }, Ja = { class: "workspace-details" }, ja = { class: "workspace-members" }, Xa = {
  key: 0,
  class: "current-indicator"
}, we = 50, Ya = /* @__PURE__ */ se({
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
  setup(d, { emit: p }) {
    const f = d, L = p, { authState: $, logout: U, isLoading: O } = Qe(), R = () => {
      try {
        return Ze();
      } catch {
        return console.warn("[AIWorkspaceHeader] Pinia not initialized yet, using fallback state"), null;
      }
    }, J = () => {
      try {
        return typeof window < "u" ? !!window.__PINIA__ || !!window.Pinia : !1;
      } catch {
        return !1;
      }
    }, l = P(R()), c = T(() => !!l.value), n = P(0), t = () => {
      if (!l.value && n.value < we) {
        if (J()) {
          const a = R();
          if (a) {
            l.value = a, console.log("[AIWorkspaceHeader] Pinia store initialized successfully");
            return;
          }
        }
        n.value++, setTimeout(t, 100);
      } else
        n.value >= we && console.warn("[AIWorkspaceHeader] Pinia initialization failed after maximum retries, using fallback mode");
    };
    ke(() => {
      l.value || t();
    });
    const y = P(!1), C = P(!1), E = P([]), x = P([]), W = P({
      name: "",
      email: "",
      avatar_url: null,
      initials: ""
    }), k = P([]), o = P([]), m = P(!1);
    te(o, async (a) => {
      a.length > 0 && c.value && H.value && await Q();
    }, { immediate: !1 }), te(() => window.location.pathname + window.location.search + window.location.hash, async () => {
      c.value && H.value && await Q();
    }, { immediate: !1 });
    const u = P(window.location.pathname);
    te(() => window.location.pathname, (a) => {
      u.value = a;
    }, { immediate: !0 }), te(c, (a) => {
      !a && n.value < we && t();
    });
    const w = () => {
      try {
        const a = window.location.pathname.match(/\/single-workspace\/(\d+)/);
        if (a)
          return a[1];
        const r = new URLSearchParams(window.location.search).get("workspace_id");
        if (r)
          return r;
        const i = window.location.hash.match(/workspace_id=(\d+)/);
        return i ? i[1] : null;
      } catch (a) {
        return console.warn("[AIWorkspaceHeader] Error parsing URL for workspace_id:", a), null;
      }
    }, j = () => {
      try {
        return window.location.pathname.includes("/all-workspace/");
      } catch (a) {
        return console.warn("[AIWorkspaceHeader] Error checking all-workspace mode:", a), !1;
      }
    }, Q = async () => {
      if (!l.value || !c.value)
        return;
      const a = j();
      if (m.value = a, a) {
        l.value.currentWorkspace = null, localStorage.removeItem("current_workspace"), console.log("[AIWorkspaceHeader] Auto-selected all-workspace mode from URL");
        return;
      }
      const e = w();
      if (e)
        try {
          o.value.length === 0 && await z();
          const r = o.value.find((i) => i.id.toString() === e);
          r ? (l.value.setCurrentWorkspace(r), console.log(`[AIWorkspaceHeader] Auto-selected workspace from URL: ${r.title} (ID: ${r.id})`), L("workspaceChange", r)) : console.warn(`[AIWorkspaceHeader] Workspace with ID ${e} not found in available workspaces`);
        } catch (r) {
          console.error("[AIWorkspaceHeader] Error auto-selecting workspace from URL:", r);
        }
    }, H = T(() => $.value.isAuthenticated), M = T(() => l.value ? l.value.currentWorkspace : null), le = P([
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
    ]), D = P([
      { label: "Dashboard", key: "dashboard", url: "/dashboard" },
      { label: "All Tasks", key: "tasks", url: "/tasks" },
      { label: "All Goals", key: "goals", url: "/goals" },
      { label: "All Events", key: "events", url: "/events" },
      { label: "All Drive", key: "files", url: "/files" },
      { label: "All Contacts", key: "contacts", url: "/contacts" },
      { label: "All Settings", key: "settings", url: "/settings" }
    ]), fe = T(() => m.value ? D.value : le.value), ge = T(() => {
      try {
        const a = u.value;
        let e = "";
        const r = a.match(/\/all-workspace\/([^\/]+)/);
        if (r)
          e = r[1];
        else {
          const i = a.match(/\/single-workspace\/\d+\/([^\/]+)/);
          if (i)
            e = i[1];
          else {
            const b = a.match(/\/([^\/]+)$/);
            b && (e = b[1]);
          }
        }
        if (e) {
          const i = fe.value.find(
            (b) => b.key === e || b.url.includes(`/${e}`) || b.url === `/${e}`
          );
          if (i)
            return i.label;
        }
        return "Dashboard";
      } catch (a) {
        return console.warn("[AIWorkspaceHeader] Error determining current section:", a), "Dashboard";
      }
    }), ne = (a) => {
      const e = /* @__PURE__ */ new Map();
      a.forEach((b) => {
        e.set(b.id, { ...b, children: [] });
      });
      const r = [];
      e.forEach((b) => {
        b.parent_workspace_id && e.has(b.parent_workspace_id) ? e.get(b.parent_workspace_id).children.push(b) : r.push(b);
      });
      const i = (b) => {
        b.sort((Z, ae) => Z.title.localeCompare(ae.title)), b.forEach((Z) => {
          Z.children && i(Z.children);
        });
      };
      return i(r), r;
    }, K = (a, e = 0, r = []) => (a.forEach((i) => {
      r.push({ ...i, level: e }), i.children && i.children.length && K(i.children, e + 1, r);
    }), r), z = async () => {
      var a, e, r;
      try {
        const i = await ((a = l.value) == null ? void 0 : a.loadWorkspaces());
        if (k.value = ne(i || []), o.value = K(k.value), x.value = o.value, E.value = o.value, f.currentWorkspaceId) {
          const b = o.value.find((Z) => {
            var ae;
            return Z.id.toString() === ((ae = f.currentWorkspaceId) == null ? void 0 : ae.toString());
          });
          b && ((e = l.value) == null || e.setCurrentWorkspace(b));
        } else
          !M.value && o.value.length && ((r = l.value) == null || r.setCurrentWorkspace(o.value[0]));
      } catch (i) {
        console.error("loadWorkspaces (header) error", i);
      }
    }, X = (a) => {
      if (console.log("Navigation command:", a), a === "all-workspace") {
        window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
        return;
      } else {
        const e = parseInt(a.replace("workspace-", ""));
        window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e}/dashboard`;
        return;
      }
    }, re = (a) => {
      const e = M.value, r = m.value;
      switch (a.key) {
        case "dashboard":
          r ? window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard" : e ? window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e.id}/dashboard` : window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
          break;
        case "outlines":
          if (r)
            window.location.href = "https://outline.aiworkspace.pro/all-workspace/outlines";
          else if (e) {
            const i = `https://outline.aiworkspace.pro/single-workspace/${e.id}/outlines`;
            window.location.href = i;
          } else
            window.location.href = "https://outline.aiworkspace.pro";
          break;
        case "canvas":
          if (r)
            window.location.href = "https://canvas.aiworkspace.pro/all-workspace/canvas";
          else if (e) {
            const i = `https://canvas.aiworkspace.pro/single-workspace/${e.id}/canvas`;
            window.location.href = i;
          } else
            window.location.href = "https://canvas.aiworkspace.pro";
          break;
        case "files":
          if (r)
            window.location.href = "https://drive.aiworkspace.pro/all-workspace/files";
          else if (e) {
            const i = `https://drive.aiworkspace.pro/single-workspace/${e.id}/files`;
            window.location.href = i;
          } else
            window.location.href = "https://drive.aiworkspace.pro";
          break;
        case "tasks":
          if (r)
            window.location.href = "https://tasks.aiworkspace.pro/all-workspace/tasks";
          else if (e) {
            const i = `https://tasks.aiworkspace.pro/single-workspace/${e.id}/tasks`;
            window.location.href = i;
          } else
            window.location.href = "https://tasks.aiworkspace.pro";
          break;
        case "goals":
          if (r)
            window.location.href = "https://app.aiworkspace.pro/all-workspace/goals";
          else if (e) {
            const i = `https://app.aiworkspace.pro/single-workspace/${e.id}/goals`;
            window.location.href = i;
          } else
            window.location.href = "https://app.aiworkspace.pro/all-workspace/goals";
          break;
        case "events":
          if (r)
            window.location.href = "https://app.aiworkspace.pro/all-workspace/events";
          else if (e) {
            const i = `https://app.aiworkspace.pro/single-workspace/${e.id}/events`;
            window.location.href = i;
          } else
            window.location.href = "https://app.aiworkspace.pro/all-workspace/events";
          break;
        case "contacts":
          if (r)
            window.location.href = "https://app.aiworkspace.pro/all-workspace/contacts";
          else if (e) {
            const i = `https://app.aiworkspace.pro/single-workspace/${e.id}/contacts`;
            window.location.href = i;
          } else
            window.location.href = "https://app.aiworkspace.pro/all-workspace/contacts";
          break;
        case "ai-portfolios":
          if (r)
            window.location.href = "https://spreadsheet.aiworkspace.pro/all-workspace/ai-portfolios";
          else if (e) {
            const i = `https://spreadsheet.aiworkspace.pro/single-workspace/${e.id}/ai-portfolios`;
            window.location.href = i;
          } else
            window.location.href = "https://spreadsheet.aiworkspace.pro";
          break;
        case "settings":
          if (r)
            window.location.href = "https://settings.aiworkspace.pro/all-workspace/settings";
          else if (e) {
            const i = `https://settings.aiworkspace.pro/single-workspace/${e.id}/settings`;
            window.location.href = i;
          } else
            window.location.href = "https://settings.aiworkspace.pro";
          break;
        default:
          if (r) {
            const i = `https://app.aiworkspace.pro/all-workspace/${a.key}`;
            window.location.href = i;
          } else if (e) {
            const i = `https://app.aiworkspace.pro/single-workspace/${e.id}/${a.key}`;
            window.location.href = i;
          } else {
            const i = `https://app.aiworkspace.pro/${a.key}`;
            window.location.href = i;
          }
          break;
      }
    }, S = (a) => {
      const e = M.value, r = m.value;
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
    }, I = (a) => {
      switch (a) {
        case "profile":
          f.onProfileClick ? f.onProfileClick() : V.info("Profile settings coming soon");
          break;
        case "workspaces":
          y.value = !0;
          break;
        case "logout":
          Oe();
          break;
      }
    }, he = (a) => {
      var e;
      (e = l.value) == null || e.setCurrentWorkspace(a), y.value = !1, L("workspaceChange", a), V.success(`Switched to ${a.title}`);
    }, xe = () => {
      Ee.prompt("Enter workspace name:", "Create New Workspace", {
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
        E.value.push(e), (r = l.value) == null || r.setWorkspaces(E.value), he(e), V.success(`Created workspace: ${a}`);
      }).catch(() => {
      });
    }, Oe = () => {
      Ee.confirm(
        "Are you sure you want to sign out?",
        "Sign Out",
        {
          confirmButtonText: "Sign Out",
          cancelButtonText: "Cancel",
          type: "warning"
        }
      ).then(async () => {
        var a;
        (a = l.value) == null || a.clearData(), await U(), L("logout"), V.success("Signed out successfully");
      }).catch(() => {
      });
    }, me = async () => {
      var a, e;
      if ($.value.user) {
        const r = $.value.user;
        W.value = {
          name: r.name || ((a = r.email) == null ? void 0 : a.split("@")[0]) || "User",
          email: r.email || "",
          avatar_url: r.avatar_url || null,
          initials: (r.name || ((e = r.email) == null ? void 0 : e.split("@")[0]) || "U").split(" ").map((i) => i[0]).join("").toUpperCase().substring(0, 2)
        }, f.showWorkspaceSelector && await z();
      }
    };
    te(() => $.value.user, (a) => {
      var e;
      a ? me() : (W.value = { name: "", email: "", avatar_url: null, initials: "" }, (e = l.value) == null || e.clearData());
    }), te(() => f.currentWorkspaceId, (a) => {
      var e;
      if (a && o.value.length) {
        const r = o.value.find((i) => i.id.toString() === a.toString());
        r && ((e = l.value) == null || e.setCurrentWorkspace(r));
      }
    }), ke(async () => {
      H.value && (await me(), await Q());
    });
    const Re = async (a) => {
      console.log("Login successful:", a), C.value = !1, await me(), L("login"), V.success("Welcome back!");
    }, Ne = () => {
      n.value = 0, t(), V.success("Manual Pinia retry initiated.");
    };
    return (a, e) => {
      const r = G("el-icon"), i = G("el-tag"), b = G("el-dropdown-item"), Z = G("el-dropdown-menu"), ae = G("el-dropdown"), _e = G("el-button"), Ve = G("el-dialog");
      return g(), A("header", ia, [
        !c.value && n.value < we || ee(O) ? (g(), A("div", ca, [
          e[8] || (e[8] = ye('<div class="header-left" data-v-f98a8f3a><div class="logo-section" data-v-f98a8f3a><a href="/" class="logo" data-v-f98a8f3a><div class="text-logo" data-v-f98a8f3a><span class="logo-text" data-v-f98a8f3a>AI Workspace</span></div></a></div></div>', 1)),
          s("div", ua, [
            s("span", da, [
              ee(O) ? (g(), A("span", pa, "Syncing authentication...")) : (g(), A("span", fa, "Initializing..."))
            ])
          ])
        ])) : !c.value && n.value >= we ? (g(), A("div", ha, [
          e[10] || (e[10] = ye('<div class="header-left" data-v-f98a8f3a><div class="logo-section" data-v-f98a8f3a><a href="/" class="logo" data-v-f98a8f3a><div class="text-logo" data-v-f98a8f3a><span class="logo-text" data-v-f98a8f3a>AI Workspace</span></div></a></div></div>', 1)),
          s("div", { class: "header-center" }, [
            e[9] || (e[9] = s("span", { class: "fallback-text" }, "Header Ready (Fallback Mode)", -1)),
            s("button", {
              onClick: Ne,
              class: "retry-button"
            }, "Retry Pinia")
          ]),
          e[11] || (e[11] = ye('<div class="header-right" data-v-f98a8f3a><div class="user-profile" data-v-f98a8f3a><div class="user-info" data-v-f98a8f3a><span class="user-name" data-v-f98a8f3a>User</span></div><div class="user-avatar" data-v-f98a8f3a><span class="avatar-placeholder" data-v-f98a8f3a>U</span></div></div></div>', 1))
        ])) : H.value ? (g(), A("div", wa, [
          s("div", ka, [
            s("div", ga, [
              s("a", va, [
                a.customLogo ? (g(), A("img", {
                  key: 0,
                  src: a.customLogo,
                  alt: "AIWorkspace",
                  class: "logo-image"
                }, null, 8, ma)) : (g(), A("div", _a, [...e[12] || (e[12] = [
                  s("span", { class: "logo-text" }, "AI Workspace", -1)
                ])]))
              ])
            ])
          ]),
          a.showSecondaryNavigation ? (g(), A("div", ya, [
            s("nav", ba, [
              a.showWorkspaceSelector ? (g(), q(ae, {
                key: 0,
                onCommand: X,
                trigger: "hover"
              }, {
                dropdown: h(() => [
                  _(Z, { class: "workspace-tree-dropdown" }, {
                    default: h(() => [
                      _(b, {
                        command: "all-workspace",
                        class: be({ active: m.value })
                      }, {
                        default: h(() => [
                          s("a", Aa, [
                            s("div", Ca, [
                              e[14] || (e[14] = s("span", { class: "workspace-icon" }, "🌐", -1)),
                              e[15] || (e[15] = s("span", null, "All workspace", -1)),
                              m.value ? (g(), q(i, {
                                key: 0,
                                size: "small",
                                type: "success"
                              }, {
                                default: h(() => [...e[13] || (e[13] = [
                                  F("Current", -1)
                                ])]),
                                _: 1
                              })) : B("", !0)
                            ])
                          ])
                        ]),
                        _: 1
                      }, 8, ["class"]),
                      o.value.length > 0 ? (g(), q(b, {
                        key: 0,
                        divided: "",
                        disabled: ""
                      })) : B("", !0),
                      (g(!0), A(Se, null, Ae(o.value, (v) => (g(), q(b, {
                        key: v.id,
                        command: `workspace-${v.id}`
                      }, {
                        default: h(() => {
                          var ie;
                          return [
                            s("a", {
                              href: `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${v.id}/dashboard`,
                              class: "nav-link"
                            }, [
                              s("div", {
                                class: "workspace-dropdown-item",
                                style: De({ paddingLeft: (v.level || 0) * 16 + "px" })
                              }, [
                                s("span", Ia, N(v.children && v.children.length ? "📁" : "📄"), 1),
                                s("span", null, N(v.title), 1),
                                v.id === ((ie = M.value) == null ? void 0 : ie.id) ? (g(), q(i, {
                                  key: 0,
                                  size: "small",
                                  type: "success"
                                }, {
                                  default: h(() => [...e[16] || (e[16] = [
                                    F("Current", -1)
                                  ])]),
                                  _: 1
                                })) : B("", !0)
                              ], 4)
                            ], 8, Wa)
                          ];
                        }),
                        _: 2
                      }, 1032, ["command"]))), 128)),
                      o.value.length === 0 ? (g(), q(b, {
                        key: 1,
                        disabled: ""
                      }, {
                        default: h(() => [...e[17] || (e[17] = [
                          F(" No workspaces ", -1)
                        ])]),
                        _: 1
                      })) : B("", !0)
                    ]),
                    _: 1
                  })
                ]),
                default: h(() => {
                  var v;
                  return [
                    s("span", Sa, [
                      F(N(m.value ? "All workspace" : ((v = M.value) == null ? void 0 : v.title) || "Select Workspace") + " ", 1),
                      _(r, { class: "nav-arrow" }, {
                        default: h(() => [
                          _(ee(Pe))
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }),
                _: 1
              })) : B("", !0),
              a.showWorkspaceSelector ? (g(), A("span", La, "/")) : B("", !0),
              a.showSecondaryNavigation ? (g(), q(ae, {
                key: 2,
                trigger: "hover"
              }, {
                dropdown: h(() => [
                  _(Z, null, {
                    default: h(() => [
                      (g(!0), A(Se, null, Ae(fe.value, (v) => (g(), q(b, {
                        key: v.label,
                        class: be({ active: v.active })
                      }, {
                        default: h(() => [
                          s("a", {
                            href: S(v),
                            class: "nav-link",
                            onClick: oe((ie) => re(v), ["prevent"])
                          }, N(v.label), 9, Ea)
                        ]),
                        _: 2
                      }, 1032, ["class"]))), 128))
                    ]),
                    _: 1
                  })
                ]),
                default: h(() => [
                  s("span", Ua, [
                    F(N(ge.value) + " ", 1),
                    _(r, { class: "nav-arrow" }, {
                      default: h(() => [
                        _(ee(Pe))
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })) : B("", !0)
            ])
          ])) : B("", !0),
          s("div", Pa, [
            _(ae, {
              onCommand: I,
              trigger: "click",
              placement: "bottom-end"
            }, {
              dropdown: h(() => [
                _(Z, null, {
                  default: h(() => [
                    _(b, null, {
                      default: h(() => [
                        s("a", {
                          href: "/profile",
                          class: "nav-link",
                          onClick: e[0] || (e[0] = oe((v) => I("profile"), ["prevent"]))
                        }, "Profile Settings")
                      ]),
                      _: 1
                    }),
                    a.showWorkspaceSelector ? (g(), q(b, { key: 0 }, {
                      default: h(() => [
                        s("a", {
                          href: "#switch-workspace",
                          class: "nav-link",
                          onClick: e[1] || (e[1] = oe((v) => I("workspaces"), ["prevent"]))
                        }, "Switch Workspace")
                      ]),
                      _: 1
                    })) : B("", !0),
                    _(b, { divided: "" }, {
                      default: h(() => [
                        s("a", {
                          href: "#signout",
                          class: "nav-link",
                          onClick: e[2] || (e[2] = oe((v) => I("logout"), ["prevent"]))
                        }, "Sign Out")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              default: h(() => [
                s("div", $a, [
                  s("div", xa, [
                    s("span", Oa, N(W.value.name), 1)
                  ]),
                  s("div", Ra, [
                    W.value.avatar_url ? (g(), A("img", {
                      key: 0,
                      src: W.value.avatar_url,
                      alt: W.value.name
                    }, null, 8, Na)) : (g(), A("span", Va, N(W.value.initials), 1))
                  ])
                ])
              ]),
              _: 1
            })
          ])
        ])) : (g(), A("div", Ma, [
          s("div", Da, [
            s("div", Ta, [
              s("a", za, [
                a.customLogo ? (g(), A("img", {
                  key: 0,
                  src: a.customLogo,
                  alt: "AIWorkspace",
                  class: "logo-image"
                }, null, 8, Ha)) : (g(), A("div", Ba, [...e[18] || (e[18] = [
                  s("span", { class: "logo-text" }, "AI Workspace", -1)
                ])]))
              ])
            ])
          ]),
          e[20] || (e[20] = s("div", { class: "header-center" }, [
            s("span", { class: "welcome-text" }, "Welcome to AI Workspace")
          ], -1)),
          s("div", Fa, [
            _(_e, {
              type: "primary",
              size: "large",
              class: "login-button",
              onClick: e[3] || (e[3] = (v) => C.value = !0)
            }, {
              default: h(() => [
                _(r, null, {
                  default: h(() => [
                    _(ee(Ye))
                  ]),
                  _: 1
                }),
                e[19] || (e[19] = F(" Login / Signup ", -1))
              ]),
              _: 1
            })
          ])
        ])),
        H.value && a.showWorkspaceSelector ? (g(), q(Ve, {
          key: 4,
          modelValue: y.value,
          "onUpdate:modelValue": e[5] || (e[5] = (v) => y.value = v),
          title: "Switch Workspace",
          width: "500px",
          onClose: e[6] || (e[6] = (v) => y.value = !1)
        }, {
          footer: h(() => [
            _(_e, {
              onClick: e[4] || (e[4] = (v) => y.value = !1)
            }, {
              default: h(() => [...e[21] || (e[21] = [
                F("Cancel", -1)
              ])]),
              _: 1
            }),
            _(_e, {
              type: "primary",
              onClick: xe
            }, {
              default: h(() => [...e[22] || (e[22] = [
                F("Create New Workspace", -1)
              ])]),
              _: 1
            })
          ]),
          default: h(() => [
            s("div", Ka, [
              (g(!0), A(Se, null, Ae(E.value, (v) => {
                var ie, Ue;
                return g(), A("div", {
                  key: v.id,
                  class: be(["workspace-item", { active: v.id === ((ie = M.value) == null ? void 0 : ie.id) }]),
                  onClick: (es) => he(v)
                }, [
                  s("div", Ga, N(v.children && v.children.length ? "📁" : "📄"), 1),
                  s("div", Ja, [
                    s("h3", null, N(v.title), 1),
                    s("p", null, N(v.description), 1),
                    s("span", ja, N(v.hasAccess ? "Active" : "Inactive"), 1)
                  ]),
                  v.id === ((Ue = M.value) == null ? void 0 : Ue.id) ? (g(), A("div", Xa, [
                    _(r, null, {
                      default: h(() => [
                        _(ee(qe))
                      ]),
                      _: 1
                    })
                  ])) : B("", !0)
                ], 10, qa);
              }), 128))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])) : B("", !0),
        _(na, {
          modelValue: C.value,
          "onUpdate:modelValue": e[7] || (e[7] = (v) => C.value = v),
          onLoginSuccess: Re
        }, null, 8, ["modelValue"])
      ]);
    };
  }
});
const ls = /* @__PURE__ */ Le(Ya, [["__scopeId", "data-v-f98a8f3a"]]), Qa = { class: "auth-callback" }, Za = /* @__PURE__ */ se({
  __name: "AuthCallback",
  setup(d) {
    ke(async () => {
      console.log("[AuthCallback] Component mounted, starting callback processing..."), console.log("[AuthCallback] Current URL:", window.location.href), console.log("[AuthCallback] Current hash:", window.location.hash);
      try {
        await new Promise(($) => setTimeout($, 500));
        const { data: f, error: L } = await ve.auth.getSession();
        if (L) {
          console.error("Error processing callback:", L), p();
          return;
        }
        if (f != null && f.session) {
          const $ = f.session.user;
          console.log("OAuth login successful:", $.email), f.session.access_token && pe(ue, f.session.access_token), f.session.refresh_token && pe(de, f.session.refresh_token), Ie();
          const U = He();
          console.log("[callback] Post-login redirect URL:", U), console.log("[callback] Session storage redirect:", sessionStorage.getItem("post-login-redirect")), console.log("[callback] Local storage redirect:", localStorage.getItem("post-login-redirect"));
          const O = U || "/";
          if (console.log("[callback] Final redirect URL:", O), O.startsWith("/")) {
            const R = window.location.origin, J = `${R}${O}`;
            console.log("[callback] redirecting to:", J, { hostname: window.location.hostname, origin: R }), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
              window.location.href = J;
            }, 100);
          } else
            console.log("[callback] redirecting to absolute URL:", O), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
              window.location.href = O;
            }, 100);
        } else
          p();
      } catch (f) {
        console.error("Error processing callback:", f), p();
      }
    });
    const p = () => {
      const L = window.location.href.replace("/auth/callback", "");
      window.location.href = L;
    };
    return (f, L) => (g(), A("div", Qa, [...L[0] || (L[0] = [
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
const ns = /* @__PURE__ */ Le(Za, [["__scopeId", "data-v-acdf6325"]]);
export {
  ue as ACCESS_COOKIE,
  ls as AIWorkspaceHeader,
  ns as AuthCallback,
  fs as LS_ACCESS_KEY,
  hs as LS_REFRESH_KEY,
  na as LoginModal,
  de as REFRESH_COOKIE,
  ws as buildOAuthRedirectUrl,
  We as clearLocalStorageTokens,
  ce as clearSessionCookie,
  ks as ensureCrossSubdomainCookies,
  gs as getCookie,
  He as getPostLoginBase,
  ze as initializeCrossSubdomainAuth,
  us as restoreCrossSubdomainSession,
  Ce as restoreSessionWithRetry,
  pe as setSessionCookie,
  ds as setupAuthStateListener,
  ms as setupUniversalCallback,
  ve as supabase,
  Ie as syncCookiesToLocalStorage,
  ea as useAuth,
  Qe as useEnhancedAuth,
  Ze as useWorkspaceStore
};
