import { defineComponent as se, openBlock as w, createElementBlock as S, createElementVNode as s, ref as E, computed as z, onMounted as we, watch as oe, reactive as Ve, resolveComponent as J, createBlock as G, withCtx as f, toDisplayString as N, createVNode as m, unref as ee, withModifiers as re, createCommentVNode as F, createTextVNode as K, createStaticVNode as _e, normalizeClass as ye, Fragment as be, renderList as Se, normalizeStyle as Me } from "vue";
import { ElForm as De, ElMessage as V, ElMessageBox as Ue } from "element-plus";
import { i as Te, s as T, r as Ae } from "./supabase-1b5a626b.mjs";
import { a as us, b as ds } from "./supabase-1b5a626b.mjs";
import { clearSessionCookie as ce, ACCESS_COOKIE as ue, REFRESH_COOKIE as de, clearLocalStorageTokens as Ce, setSessionCookie as pe, syncCookiesToLocalStorage as We, getPostLoginBase as ze } from "./utils/authRedirect.js";
import { LS_ACCESS_KEY as fs, LS_REFRESH_KEY as hs, buildOAuthRedirectUrl as ws, ensureCrossSubdomainCookies as ks, getCookie as gs } from "./utils/authRedirect.js";
import { defineStore as He } from "pinia";
import { setupUniversalCallback as ms } from "./utils/universalCallback.js";
import "@supabase/supabase-js";
/*! Element Plus Icons Vue v2.3.2 */
var Be = /* @__PURE__ */ se({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(c) {
    return (u, p) => (w(), S("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      s("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"
      })
    ]));
  }
}), Ee = Be, Fe = /* @__PURE__ */ se({
  name: "Check",
  __name: "check",
  setup(c) {
    return (u, p) => (w(), S("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      s("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      })
    ]));
  }
}), Ke = Fe, qe = /* @__PURE__ */ se({
  name: "Lock",
  __name: "lock",
  setup(c) {
    return (u, p) => (w(), S("svg", {
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
}), Pe = qe, Ge = /* @__PURE__ */ se({
  name: "Message",
  __name: "message",
  setup(c) {
    return (u, p) => (w(), S("svg", {
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
}), Je = Ge, je = /* @__PURE__ */ se({
  name: "User",
  __name: "user",
  setup(c) {
    return (u, p) => (w(), S("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      s("path", {
        fill: "currentColor",
        d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"
      })
    ]));
  }
}), Xe = je;
function Ye() {
  const c = E({
    user: null,
    isAuthenticated: !1,
    isLoading: !0
  }), u = E(null), p = z(() => c.value.isAuthenticated), W = z(() => c.value.user), P = z(() => c.value.isLoading), I = async () => {
    var o, h, n, A, L, U, x, d, C, r, _, k, g, X, Y, B, M, le, D, fe, ke;
    try {
      console.log("[auth][enhanced] Ensuring cross-subdomain cookie synchronization...");
      const { ensureCrossSubdomainCookies: ne, ACCESS_COOKIE: q, REFRESH_COOKIE: H } = await import("./utils/authRedirect.js");
      ne([q, H]), await new Promise((y) => setTimeout(y, 100));
      let Q = null;
      try {
        const y = await T.auth.getSession();
        Q = (o = y == null ? void 0 : y.data) == null ? void 0 : o.session;
      } catch (y) {
        console.warn("[auth][enhanced] Error getting Supabase session:", y);
      }
      if (Q && Q.user) {
        console.log("[auth][enhanced] Active Supabase session found");
        const y = Q.user, $ = {
          id: y.id,
          name: ((h = y.user_metadata) == null ? void 0 : h.name) || ((n = y.user_metadata) == null ? void 0 : n.user_name) || ((A = y.user_metadata) == null ? void 0 : A.full_name) || ((L = y.email) == null ? void 0 : L.split("@")[0]) || "User",
          email: y.email,
          avatar_url: ((U = y.user_metadata) == null ? void 0 : U.avatar_url) || null,
          user_metadata: y.user_metadata
        };
        return c.value = {
          user: $,
          isAuthenticated: !0,
          isLoading: !1
        }, u.value = {
          user: $,
          access_token: Q.access_token,
          refresh_token: Q.refresh_token
        }, { success: !0, session: u.value };
      }
      console.log("[auth][enhanced] No active session, attempting to restore from cookies...");
      const te = await Ae();
      if (te.success && te.session) {
        console.log("[auth][enhanced] Session restored successfully from cookies");
        const y = te.session.user, $ = {
          id: y.id,
          name: ((x = y.user_metadata) == null ? void 0 : x.name) || ((d = y.user_metadata) == null ? void 0 : d.user_name) || ((C = y.user_metadata) == null ? void 0 : C.full_name) || ((r = y.email) == null ? void 0 : r.split("@")[0]) || "User",
          email: y.email,
          avatar_url: ((_ = y.user_metadata) == null ? void 0 : _.avatar_url) || null,
          user_metadata: y.user_metadata
        };
        return c.value = {
          user: $,
          isAuthenticated: !0,
          isLoading: !1
        }, u.value = te.session, { success: !0, session: u.value };
      } else {
        console.log("[auth][enhanced] Failed to restore session:", te.error), console.log("[auth][enhanced] Retrying session restoration with extended delay..."), await new Promise(($) => setTimeout($, 500)), ne([q, H]);
        const y = await Ae();
        if (y.success && y.session) {
          console.log("[auth][enhanced] Session restored on retry");
          const $ = y.session.user, ge = {
            id: $.id,
            name: ((k = $.user_metadata) == null ? void 0 : k.name) || ((g = $.user_metadata) == null ? void 0 : g.user_name) || ((X = $.user_metadata) == null ? void 0 : X.full_name) || ((Y = $.email) == null ? void 0 : Y.split("@")[0]) || "User",
            email: $.email,
            avatar_url: ((B = $.user_metadata) == null ? void 0 : B.avatar_url) || null,
            user_metadata: $.user_metadata
          };
          return c.value = {
            user: ge,
            isAuthenticated: !0,
            isLoading: !1
          }, u.value = y.session, { success: !0, session: u.value };
        }
      }
    } catch (ne) {
      console.error("Error getting Supabase session:", ne);
      try {
        const q = await Ae();
        if (q.success && q.session) {
          console.log("[auth][enhanced] Session restored after error");
          const H = q.session.user, Q = {
            id: H.id,
            name: ((M = H.user_metadata) == null ? void 0 : M.name) || ((le = H.user_metadata) == null ? void 0 : le.user_name) || ((D = H.user_metadata) == null ? void 0 : D.full_name) || ((fe = H.email) == null ? void 0 : fe.split("@")[0]) || "User",
            email: H.email,
            avatar_url: ((ke = H.user_metadata) == null ? void 0 : ke.avatar_url) || null,
            user_metadata: H.user_metadata
          };
          return c.value = {
            user: Q,
            isAuthenticated: !0,
            isLoading: !1
          }, u.value = q.session, { success: !0, session: u.value };
        }
      } catch (q) {
        console.error("Error restoring session:", q);
      }
    }
    return console.log("[auth][enhanced] No valid authentication found"), c.value = {
      user: null,
      isAuthenticated: !1,
      isLoading: !1
    }, u.value = null, { success: !1, error: "No valid session found" };
  }, O = async () => {
    try {
      await T.auth.signOut(), ce(ue), ce(de), Ce(), c.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1
      }, u.value = null, console.log("[auth][enhanced] User logged out successfully");
    } catch (o) {
      console.error("Error during logout:", o), c.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1
      }, u.value = null;
    }
  }, R = async (o, h) => {
    var n, A, L, U, x;
    try {
      c.value.isLoading = !0;
      const { data: d, error: C } = await T.auth.signInWithPassword({
        email: o,
        password: h
      });
      if (C)
        throw C;
      if (d.session) {
        const r = d.session.user, _ = {
          id: r.id,
          name: ((n = r.user_metadata) == null ? void 0 : n.name) || ((A = r.user_metadata) == null ? void 0 : A.user_name) || ((L = r.user_metadata) == null ? void 0 : L.full_name) || ((U = r.email) == null ? void 0 : U.split("@")[0]) || "User",
          email: r.email,
          avatar_url: ((x = r.user_metadata) == null ? void 0 : x.avatar_url) || null,
          user_metadata: r.user_metadata
        };
        return c.value = {
          user: _,
          isAuthenticated: !0,
          isLoading: !1
        }, u.value = {
          user: _,
          access_token: d.session.access_token,
          refresh_token: d.session.refresh_token
        }, { success: !0, session: u.value };
      }
      return { success: !1, error: "No session returned" };
    } catch (d) {
      return console.error("Sign in error:", d), c.value.isLoading = !1, { success: !1, error: d };
    }
  }, j = async (o, h, n) => {
    var A, L, U, x, d;
    try {
      c.value.isLoading = !0;
      const { data: C, error: r } = await T.auth.signUp({
        email: o,
        password: h,
        options: {
          data: n
        }
      });
      if (r)
        throw r;
      if (C.session) {
        const _ = C.session.user, k = {
          id: _.id,
          name: ((A = _.user_metadata) == null ? void 0 : A.name) || ((L = _.user_metadata) == null ? void 0 : L.user_name) || ((U = _.user_metadata) == null ? void 0 : U.full_name) || ((x = _.email) == null ? void 0 : x.split("@")[0]) || "User",
          email: _.email,
          avatar_url: ((d = _.user_metadata) == null ? void 0 : d.avatar_url) || null,
          user_metadata: _.user_metadata
        };
        return c.value = {
          user: k,
          isAuthenticated: !0,
          isLoading: !1
        }, u.value = {
          user: k,
          access_token: C.session.access_token,
          refresh_token: C.session.refresh_token
        }, { success: !0, session: u.value };
      }
      return { success: !1, error: "No session returned" };
    } catch (C) {
      return console.error("Sign up error:", C), c.value.isLoading = !1, { success: !1, error: C };
    }
  }, l = async () => {
    await I();
  };
  return we(async () => {
    await Te(), await l();
  }), {
    // State
    authState: c,
    currentSession: u,
    // Computed
    isAuthenticated: p,
    currentUser: W,
    isLoading: P,
    // Methods
    loadUserInfo: I,
    logout: O,
    signIn: R,
    signUp: j,
    checkAuth: l
  };
}
const Qe = He("workspace", () => {
  const c = E(null), u = E([]), p = E(null), W = (l) => {
    c.value = l, localStorage.setItem("current_workspace", JSON.stringify(l));
  }, P = (l) => {
    u.value = l, localStorage.setItem("available_workspaces", JSON.stringify(l));
  };
  return {
    currentWorkspace: c,
    workspaces: u,
    user: p,
    setCurrentWorkspace: W,
    setWorkspaces: P,
    setUser: (l) => {
      p.value = l, localStorage.setItem("user_info", JSON.stringify(l));
    },
    loadPersistedData: () => {
      const l = localStorage.getItem("current_workspace");
      if (l)
        try {
          c.value = JSON.parse(l);
        } catch (n) {
          console.error("Error loading persisted workspace:", n);
        }
      const o = localStorage.getItem("available_workspaces");
      if (o)
        try {
          u.value = JSON.parse(o);
        } catch (n) {
          console.error("Error loading persisted workspaces:", n);
        }
      const h = localStorage.getItem("user_info");
      if (h)
        try {
          p.value = JSON.parse(h);
        } catch (n) {
          console.error("Error loading persisted user:", n);
        }
    },
    clearData: () => {
      c.value = null, u.value = [], p.value = null, localStorage.removeItem("current_workspace"), localStorage.removeItem("available_workspaces"), localStorage.removeItem("user_info");
    },
    loadWorkspaces: async (l = !1) => {
      try {
        const { data: { user: o } } = await T.auth.getUser();
        if (!o)
          return [];
        let h = T.from("workspaces").select(`
          id, title, description, parent_workspace_id, created_by, archived, created_at, git_repo, 
          workspace_access!inner ( access_type, shared_with_user_id ),
          workspace_activities!left ( updated_at )
        `).eq("workspace_access.shared_with_user_id", o.id);
        l || (h = h.eq("archived", !1));
        const { data: n, error: A } = await h;
        if (A)
          throw A;
        const L = /* @__PURE__ */ new Map();
        (n || []).forEach((r) => {
          (r.workspace_access || []).forEach((_) => {
            _.shared_with_user_id === o.id && L.set(r.id, _);
          });
        });
        const U = [...new Set(
          (n || []).filter((r) => r.parent_workspace_id).map((r) => r.parent_workspace_id).filter((r) => !L.has(r))
        )];
        let x = [];
        if (U.length) {
          let r = T.from("workspaces").select("id, title, description, parent_workspace_id, created_by, archived, created_at").in("id", U);
          l || (r = r.eq("archived", !1));
          const { data: _, error: k } = await r;
          if (k)
            throw k;
          x = _ || [];
        }
        const C = [...n || [], ...x].map((r) => {
          var _, k, g;
          return {
            id: r.id,
            title: r.title,
            description: r.description || "No description",
            parent_workspace_id: r.parent_workspace_id,
            created_by: r.created_by,
            archived: r.archived,
            created_at: r.created_at,
            latest_activity: ((k = (_ = r.workspace_activities) == null ? void 0 : _[0]) == null ? void 0 : k.updated_at) || r.created_at,
            hasAccess: L.has(r.id),
            accessType: ((g = L.get(r.id)) == null ? void 0 : g.access_type) || null
          };
        });
        return C.sort((r, _) => new Date(_.latest_activity) - new Date(r.latest_activity)), P(C), C;
      } catch (o) {
        return console.error("loadWorkspaces error", o), [];
      }
    }
  };
});
function Ze() {
  const c = E({
    user: null,
    isAuthenticated: !1,
    isLoading: !0,
    error: null
  }), u = E(window.location.href), p = async () => {
    var l, o, h, n, A, L, U, x;
    try {
      c.value.isLoading = !0;
      const { data: { session: d }, error: C } = await T.auth.getSession();
      if (C) {
        console.error("Error checking auth status:", C), c.value = {
          user: null,
          isAuthenticated: !1,
          isLoading: !1,
          error: C.message
        };
        return;
      }
      d != null && d.user ? (c.value = {
        user: {
          id: d.user.id,
          email: d.user.email || "",
          name: ((l = d.user.user_metadata) == null ? void 0 : l.full_name) || ((o = d.user.user_metadata) == null ? void 0 : o.name) || ((h = d.user.email) == null ? void 0 : h.split("@")[0]) || "User",
          avatar_url: ((n = d.user.user_metadata) == null ? void 0 : n.avatar_url) || ((A = d.user.user_metadata) == null ? void 0 : A.picture) || null,
          initials: (((L = d.user.user_metadata) == null ? void 0 : L.full_name) || ((U = d.user.user_metadata) == null ? void 0 : U.name) || ((x = d.user.email) == null ? void 0 : x.split("@")[0]) || "U").split(" ").map((r) => r[0]).join("").toUpperCase().substring(0, 2)
        },
        isAuthenticated: !0,
        isLoading: !1,
        error: null
      }, d.access_token && pe(ue, d.access_token), d.refresh_token && pe(de, d.refresh_token), We()) : c.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      };
    } catch (d) {
      console.error("Auth check failed:", d), c.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: d.message || "Authentication check failed"
      };
    }
  }, W = async (l, o) => {
    try {
      const { error: h } = await T.auth.signInWithPassword({
        email: l,
        password: o
      });
      return h ? { success: !1, error: h.message } : (await p(), sessionStorage.setItem("post-login-redirect", u.value), { success: !0 });
    } catch (h) {
      return console.error("Login error:", h), { success: !1, error: h.message || "Login failed" };
    }
  }, P = async (l, o) => {
    var h;
    try {
      const { data: n, error: A } = await T.auth.signUp({
        email: l,
        password: o
      });
      return A ? { success: !1, error: A.message } : n.user && !n.user.email_confirmed_at ? { success: !0, needsConfirmation: !0 } : (h = n.session) != null && h.user ? (await p(), sessionStorage.setItem("post-login-redirect", u.value), { success: !0 }) : { success: !1, error: "No session created" };
    } catch (n) {
      return console.error("Signup error:", n), { success: !1, error: n.message || "Signup failed" };
    }
  }, I = async (l) => {
    try {
      const o = `${window.location.origin}/auth/callback`;
      console.log("[OAuth] Starting login with provider:", l), console.log("[OAuth] Redirect URL:", o), console.log("[OAuth] Current URL:", u.value), console.log("[OAuth] Current origin:", window.location.origin);
      const { error: h } = await T.auth.signInWithOAuth({
        provider: l,
        options: {
          redirectTo: o,
          queryParams: {
            redirect_origin: u.value
          }
        }
      });
      if (h)
        return console.error("[OAuth] Error:", h), { success: !1, error: h.message };
      const n = u.value || window.location.href;
      return sessionStorage.setItem("post-login-redirect", n), localStorage.setItem("post-login-redirect", n), console.log("[OAuth] Stored redirect URL:", n), console.log("[OAuth] Current URL value:", u.value), console.log("[OAuth] Window location href:", window.location.href), { success: !0 };
    } catch (o) {
      return console.error("OAuth login error:", o), { success: !1, error: o.message || "OAuth login failed" };
    }
  }, O = async () => {
    try {
      const { error: l } = await T.auth.signOut();
      l && console.error("Logout error:", l), c.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      }, ce(ue), ce(de), Ce();
    } catch (l) {
      console.error("Logout error:", l);
    }
  }, R = async (l) => {
    try {
      const { error: o } = await T.auth.resetPasswordForEmail(l, {
        redirectTo: `${window.location.origin}/auth/reset-password`
      });
      return o ? { success: !1, error: o.message } : { success: !0 };
    } catch (o) {
      return console.error("Password reset error:", o), { success: !1, error: o.message || "Password reset failed" };
    }
  }, j = () => {
    T.auth.onAuthStateChange((l, o) => {
      var h;
      switch (console.log("Auth state changed:", l, (h = o == null ? void 0 : o.user) == null ? void 0 : h.email), l) {
        case "SIGNED_IN":
          o != null && o.user && p();
          break;
        case "SIGNED_OUT":
          c.value = {
            user: null,
            isAuthenticated: !1,
            isLoading: !1,
            error: null
          }, ce(ue), ce(de), Ce();
          break;
        case "TOKEN_REFRESHED":
          o != null && o.access_token && pe(ue, o.access_token), o != null && o.refresh_token && pe(de, o.refresh_token), We();
          break;
        case "USER_UPDATED":
          o != null && o.user && p();
          break;
      }
    });
  };
  return we(async () => {
    j(), await p();
  }), oe(() => window.location.href, (l) => {
    u.value = l;
  }), {
    authState: z(() => c.value),
    isAuthenticated: z(() => c.value.isAuthenticated),
    user: z(() => c.value.user),
    isLoading: z(() => c.value.isLoading),
    checkAuthStatus: p,
    loginWithEmail: W,
    signupWithEmail: P,
    loginWithProvider: I,
    logout: O,
    resetPassword: R,
    currentUrl: z(() => u.value)
  };
}
const ea = { class: "login-container" }, aa = { class: "logo-section" }, sa = { class: "login-buttons" }, ta = {
  key: 0,
  class: "forgot-password"
}, oa = { class: "signup-link" }, ra = /* @__PURE__ */ se({
  __name: "LoginModal",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue", "login-success"],
  setup(c, { emit: u }) {
    const p = c, W = u, P = z({
      get: () => p.modelValue,
      set: (k) => W("update:modelValue", k)
    }), I = E(!1), O = E(!1), R = E(), { loginWithEmail: j, signupWithEmail: l, loginWithProvider: o, resetPassword: h } = Ze(), n = Ve({
      email: "",
      password: "",
      confirmPassword: ""
    }), A = z(() => ({
      email: [
        { required: !0, message: "Please enter your email", trigger: "blur" },
        { type: "email", message: "Please enter a valid email", trigger: "blur" }
      ],
      password: [
        { required: !0, message: "Please enter your password", trigger: "blur" },
        { min: 6, message: "Password must be at least 6 characters", trigger: "blur" }
      ],
      ...I.value ? {
        confirmPassword: [
          { required: !0, message: "Please confirm your password", trigger: "blur" },
          {
            validator: (k, g, X) => {
              g !== n.password ? X(new Error("Passwords do not match")) : X();
            },
            trigger: "blur"
          }
        ]
      } : {}
    })), L = () => {
      var k;
      I.value = !I.value, n.email = "", n.password = "", n.confirmPassword = "", (k = R.value) == null || k.clearValidate();
    }, U = () => {
      var k;
      P.value = !1, n.email = "", n.password = "", n.confirmPassword = "", I.value = !1, (k = R.value) == null || k.clearValidate();
    }, x = async () => {
      if (R.value)
        try {
          await R.value.validate(), O.value = !0, I.value ? await C() : await d();
        } catch (k) {
          console.error("Form validation failed:", k);
        } finally {
          O.value = !1;
        }
    }, d = async () => {
      const k = await j(n.email, n.password);
      k.success ? (V.success("Login successful"), W("login-success", { email: n.email }), U()) : V.error("Login failed: " + k.error);
    }, C = async () => {
      const k = await l(n.email, n.password);
      k.success ? k.needsConfirmation ? V.success("Please check your email to confirm your account") : (V.success("Account created successfully"), W("login-success", { email: n.email }), U()) : V.error("Signup failed: " + k.error);
    }, r = async (k) => {
      const g = await o(k);
      g.success ? V.success("Redirecting to login provider...") : V.error("Login failed: " + g.error);
    }, _ = async () => {
      if (!n.email) {
        V.warning("Please enter your email address first");
        return;
      }
      const k = await h(n.email);
      k.success ? V.success("Password reset email sent! Please check your inbox.") : V.error("Failed to send reset email: " + k.error);
    };
    return (k, g) => {
      const X = J("el-icon"), Y = J("el-input"), B = J("el-form-item"), M = J("el-button"), le = J("el-dialog");
      return w(), G(le, {
        modelValue: P.value,
        "onUpdate:modelValue": g[6] || (g[6] = (D) => P.value = D),
        title: "",
        width: "500px",
        "close-on-click-modal": !1,
        "close-on-press-escape": !0,
        "show-close": !0,
        class: "login-modal",
        onClose: U
      }, {
        default: f(() => [
          s("div", ea, [
            s("div", aa, [
              s("h2", null, N(I.value ? "Create Account" : "Welcome Back"), 1),
              s("p", null, N(I.value ? "Sign up to get started with your account" : "Sign in to continue to your account"), 1)
            ]),
            m(ee(De), {
              model: n,
              rules: A.value,
              ref_key: "formRef",
              ref: R,
              class: "login-form",
              onSubmit: re(x, ["prevent"])
            }, {
              default: f(() => [
                m(B, { prop: "email" }, {
                  default: f(() => [
                    m(Y, {
                      modelValue: n.email,
                      "onUpdate:modelValue": g[0] || (g[0] = (D) => n.email = D),
                      placeholder: "Email",
                      type: "email",
                      size: "large",
                      class: "form-input"
                    }, {
                      prefix: f(() => [
                        m(X, null, {
                          default: f(() => [
                            m(ee(Je))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                m(B, { prop: "password" }, {
                  default: f(() => [
                    m(Y, {
                      modelValue: n.password,
                      "onUpdate:modelValue": g[1] || (g[1] = (D) => n.password = D),
                      placeholder: "Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: f(() => [
                        m(X, null, {
                          default: f(() => [
                            m(ee(Pe))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                I.value ? (w(), G(B, {
                  key: 0,
                  prop: "confirmPassword"
                }, {
                  default: f(() => [
                    m(Y, {
                      modelValue: n.confirmPassword,
                      "onUpdate:modelValue": g[2] || (g[2] = (D) => n.confirmPassword = D),
                      placeholder: "Confirm Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: f(() => [
                        m(X, null, {
                          default: f(() => [
                            m(ee(Pe))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                })) : F("", !0),
                m(B, null, {
                  default: f(() => [
                    m(M, {
                      type: "primary",
                      class: "submit-button",
                      loading: O.value,
                      onClick: x,
                      size: "large"
                    }, {
                      default: f(() => [
                        K(N(I.value ? "Sign Up" : "Sign In"), 1)
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model", "rules"]),
            g[10] || (g[10] = s("div", { class: "divider" }, [
              s("span", null, "Or continue with")
            ], -1)),
            s("div", sa, [
              m(M, {
                class: "login-button google",
                onClick: g[3] || (g[3] = (D) => r("google")),
                size: "large"
              }, {
                default: f(() => [...g[7] || (g[7] = [
                  s("span", { class: "social-icon" }, "G", -1),
                  K(" Google ", -1)
                ])]),
                _: 1
              }),
              m(M, {
                class: "login-button github",
                onClick: g[4] || (g[4] = (D) => r("github")),
                size: "large"
              }, {
                default: f(() => [...g[8] || (g[8] = [
                  s("span", { class: "social-icon" }, "⚡", -1),
                  K(" GitHub ", -1)
                ])]),
                _: 1
              }),
              m(M, {
                class: "login-button twitter",
                onClick: g[5] || (g[5] = (D) => r("twitter")),
                size: "large"
              }, {
                default: f(() => [...g[9] || (g[9] = [
                  s("span", { class: "social-icon" }, "X", -1),
                  K(" X (Twitter) ", -1)
                ])]),
                _: 1
              })
            ]),
            g[11] || (g[11] = s("div", { class: "terms" }, " By continuing, you agree to AI Workspace's Terms of Service and Privacy Policy ", -1)),
            I.value ? F("", !0) : (w(), S("div", ta, [
              s("a", {
                href: "#",
                onClick: re(_, ["prevent"])
              }, "Forgot Password?")
            ])),
            s("div", oa, [
              K(N(I.value ? "Already have an account?" : "Don't have an account?") + " ", 1),
              s("a", {
                href: "#",
                onClick: re(L, ["prevent"])
              }, N(I.value ? "Sign in" : "Sign up"), 1)
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
const Ie = (c, u) => {
  const p = c.__vccOpts || c;
  for (const [W, P] of u)
    p[W] = P;
  return p;
}, la = /* @__PURE__ */ Ie(ra, [["__scopeId", "data-v-684a3f28"]]), na = { class: "aiworkspace-header" }, ia = {
  key: 0,
  class: "header-content header-loading"
}, ca = { class: "header-center" }, ua = { class: "loading-text" }, da = { key: 0 }, pa = { key: 1 }, fa = {
  key: 1,
  class: "header-content header-fallback"
}, ha = {
  key: 2,
  class: "header-content"
}, wa = { class: "header-left" }, ka = { class: "logo-section" }, ga = {
  href: "/",
  class: "logo"
}, va = ["src"], ma = {
  key: 1,
  class: "text-logo"
}, _a = {
  key: 0,
  class: "header-center"
}, ya = { class: "main-navigation" }, ba = { class: "nav-item" }, Sa = {
  href: "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard",
  class: "nav-link"
}, Aa = { class: "workspace-dropdown-item" }, Ca = ["href"], Wa = { class: "workspace-icon" }, Ia = {
  key: 1,
  class: "nav-divider"
}, La = { class: "nav-item" }, Ua = ["href", "onClick"], Ea = { class: "header-right" }, Pa = { class: "user-profile" }, $a = { class: "user-info" }, xa = { class: "user-name" }, Oa = { class: "user-avatar" }, Ra = ["src", "alt"], Na = {
  key: 1,
  class: "avatar-placeholder"
}, Va = {
  key: 3,
  class: "header-content header-unauthenticated"
}, Ma = { class: "header-left" }, Da = { class: "logo-section" }, Ta = {
  href: "/",
  class: "logo"
}, za = ["src"], Ha = {
  key: 1,
  class: "text-logo"
}, Ba = { class: "header-right" }, Fa = { class: "workspace-list" }, Ka = ["onClick"], qa = { class: "workspace-icon" }, Ga = { class: "workspace-details" }, Ja = { class: "workspace-members" }, ja = {
  key: 0,
  class: "current-indicator"
}, he = 50, Xa = /* @__PURE__ */ se({
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
  setup(c, { emit: u }) {
    const p = c, W = u, { authState: P, logout: I, isLoading: O } = Ye(), R = () => {
      try {
        return Qe();
      } catch {
        return console.warn("[AIWorkspaceHeader] Pinia not initialized yet, using fallback state"), null;
      }
    }, j = () => {
      try {
        return typeof window < "u" ? !!window.__PINIA__ || !!window.Pinia : !1;
      } catch {
        return !1;
      }
    }, l = E(R()), o = z(() => !!l.value), h = E(0), n = () => {
      if (!l.value && h.value < he) {
        if (j()) {
          const a = R();
          if (a) {
            l.value = a, console.log("[AIWorkspaceHeader] Pinia store initialized successfully");
            return;
          }
        }
        h.value++, setTimeout(n, 100);
      } else
        h.value >= he && console.warn("[AIWorkspaceHeader] Pinia initialization failed after maximum retries, using fallback mode");
    };
    we(() => {
      l.value || n();
    });
    const A = E(!1), L = E(!1), U = E([]), x = E([]), d = E({
      name: "",
      email: "",
      avatar_url: null,
      initials: ""
    }), C = E([]), r = E([]), _ = E(!1);
    oe(r, async (a) => {
      a.length > 0 && o.value && B.value && await Y();
    }, { immediate: !1 }), oe(() => window.location.pathname + window.location.search + window.location.hash, async () => {
      o.value && B.value && await Y();
    }, { immediate: !1 });
    const k = E(window.location.pathname);
    oe(() => window.location.pathname, (a) => {
      k.value = a;
    }, { immediate: !0 }), oe(o, (a) => {
      !a && h.value < he && n();
    });
    const g = () => {
      try {
        const a = window.location.pathname.match(/\/single-workspace\/(\d+)/);
        if (a)
          return a[1];
        const t = new URLSearchParams(window.location.search).get("workspace_id");
        if (t)
          return t;
        const i = window.location.hash.match(/workspace_id=(\d+)/);
        return i ? i[1] : null;
      } catch (a) {
        return console.warn("[AIWorkspaceHeader] Error parsing URL for workspace_id:", a), null;
      }
    }, X = () => {
      try {
        return window.location.pathname.includes("/all-workspace/");
      } catch (a) {
        return console.warn("[AIWorkspaceHeader] Error checking all-workspace mode:", a), !1;
      }
    }, Y = async () => {
      if (!l.value || !o.value)
        return;
      const a = X();
      if (_.value = a, a) {
        l.value.currentWorkspace = null, localStorage.removeItem("current_workspace"), console.log("[AIWorkspaceHeader] Auto-selected all-workspace mode from URL");
        return;
      }
      const e = g();
      if (e)
        try {
          r.value.length === 0 && await H();
          const t = r.value.find((i) => i.id.toString() === e);
          t ? (l.value.setCurrentWorkspace(t), console.log(`[AIWorkspaceHeader] Auto-selected workspace from URL: ${t.title} (ID: ${t.id})`), W("workspaceChange", t)) : console.warn(`[AIWorkspaceHeader] Workspace with ID ${e} not found in available workspaces`);
        } catch (t) {
          console.error("[AIWorkspaceHeader] Error auto-selecting workspace from URL:", t);
        }
    }, B = z(() => P.value.isAuthenticated), M = z(() => l.value ? l.value.currentWorkspace : null), le = E([
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
    ]), D = E([
      { label: "Dashboard", key: "dashboard", url: "/dashboard" },
      { label: "All Tasks", key: "tasks", url: "/tasks" },
      { label: "All Goals", key: "goals", url: "/goals" },
      { label: "All Events", key: "events", url: "/events" },
      { label: "All Drive", key: "files", url: "/files" },
      { label: "All Contacts", key: "contacts", url: "/contacts" },
      { label: "All Settings", key: "settings", url: "/settings" }
    ]), fe = z(() => _.value ? D.value : le.value), ke = z(() => {
      try {
        const a = k.value;
        let e = "";
        const t = a.match(/\/all-workspace\/([^\/]+)/);
        if (t)
          e = t[1];
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
      const t = [];
      e.forEach((b) => {
        b.parent_workspace_id && e.has(b.parent_workspace_id) ? e.get(b.parent_workspace_id).children.push(b) : t.push(b);
      });
      const i = (b) => {
        b.sort((Z, ae) => Z.title.localeCompare(ae.title)), b.forEach((Z) => {
          Z.children && i(Z.children);
        });
      };
      return i(t), t;
    }, q = (a, e = 0, t = []) => (a.forEach((i) => {
      t.push({ ...i, level: e }), i.children && i.children.length && q(i.children, e + 1, t);
    }), t), H = async () => {
      var a, e, t;
      try {
        const i = await ((a = l.value) == null ? void 0 : a.loadWorkspaces());
        if (C.value = ne(i || []), r.value = q(C.value), x.value = r.value, U.value = r.value, p.currentWorkspaceId) {
          const b = r.value.find((Z) => {
            var ae;
            return Z.id.toString() === ((ae = p.currentWorkspaceId) == null ? void 0 : ae.toString());
          });
          b && ((e = l.value) == null || e.setCurrentWorkspace(b));
        } else
          !M.value && r.value.length && ((t = l.value) == null || t.setCurrentWorkspace(r.value[0]));
      } catch (i) {
        console.error("loadWorkspaces (header) error", i);
      }
    }, Q = (a) => {
      if (console.log("Navigation command:", a), a === "all-workspace") {
        window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
        return;
      } else {
        const e = parseInt(a.replace("workspace-", ""));
        window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e}/dashboard`;
        return;
      }
    }, te = (a) => {
      const e = M.value, t = _.value;
      switch (a.key) {
        case "dashboard":
          t ? window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard" : e ? window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e.id}/dashboard` : window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
          break;
        case "outlines":
          if (t)
            window.location.href = "https://outline.aiworkspace.pro/all-workspace/outlines";
          else if (e) {
            const i = `https://outline.aiworkspace.pro/single-workspace/${e.id}/outlines`;
            window.location.href = i;
          } else
            window.location.href = "https://outline.aiworkspace.pro";
          break;
        case "canvas":
          if (t)
            window.location.href = "https://canvas.aiworkspace.pro/all-workspace/canvas";
          else if (e) {
            const i = `https://canvas.aiworkspace.pro/single-workspace/${e.id}/canvas`;
            window.location.href = i;
          } else
            window.location.href = "https://canvas.aiworkspace.pro";
          break;
        case "files":
          if (t)
            window.location.href = "https://drive.aiworkspace.pro/all-workspace/files";
          else if (e) {
            const i = `https://drive.aiworkspace.pro/single-workspace/${e.id}/files`;
            window.location.href = i;
          } else
            window.location.href = "https://drive.aiworkspace.pro";
          break;
        case "tasks":
          if (t)
            window.location.href = "https://tasks.aiworkspace.pro/all-workspace/tasks";
          else if (e) {
            const i = `https://tasks.aiworkspace.pro/single-workspace/${e.id}/tasks`;
            window.location.href = i;
          } else
            window.location.href = "https://tasks.aiworkspace.pro";
          break;
        case "goals":
          if (t)
            window.location.href = "https://app.aiworkspace.pro/all-workspace/goals";
          else if (e) {
            const i = `https://app.aiworkspace.pro/single-workspace/${e.id}/goals`;
            window.location.href = i;
          } else
            window.location.href = "https://app.aiworkspace.pro/all-workspace/goals";
          break;
        case "events":
          if (t)
            window.location.href = "https://app.aiworkspace.pro/all-workspace/events";
          else if (e) {
            const i = `https://app.aiworkspace.pro/single-workspace/${e.id}/events`;
            window.location.href = i;
          } else
            window.location.href = "https://app.aiworkspace.pro/all-workspace/events";
          break;
        case "contacts":
          if (t)
            window.location.href = "https://app.aiworkspace.pro/all-workspace/contacts";
          else if (e) {
            const i = `https://app.aiworkspace.pro/single-workspace/${e.id}/contacts`;
            window.location.href = i;
          } else
            window.location.href = "https://app.aiworkspace.pro/all-workspace/contacts";
          break;
        case "ai-portfolios":
          if (t)
            window.location.href = "https://spreadsheet.aiworkspace.pro/all-workspace/ai-portfolios";
          else if (e) {
            const i = `https://spreadsheet.aiworkspace.pro/single-workspace/${e.id}/ai-portfolios`;
            window.location.href = i;
          } else
            window.location.href = "https://spreadsheet.aiworkspace.pro";
          break;
        case "settings":
          if (t)
            window.location.href = "https://settings.aiworkspace.pro/all-workspace/settings";
          else if (e) {
            const i = `https://settings.aiworkspace.pro/single-workspace/${e.id}/settings`;
            window.location.href = i;
          } else
            window.location.href = "https://settings.aiworkspace.pro";
          break;
        default:
          if (t) {
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
    }, y = (a) => {
      const e = M.value, t = _.value;
      switch (a.key) {
        case "dashboard":
          return t ? "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard" : e ? `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e.id}/dashboard` : "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
        case "ai-portfolios":
          return t ? "https://spreadsheet.aiworkspace.pro/all-workspace/ai-portfolios" : e ? `https://spreadsheet.aiworkspace.pro/single-workspace/${e.id}/ai-portfolios` : "https://spreadsheet.aiworkspace.pro";
        case "outlines":
          return t ? "https://outline.aiworkspace.pro/all-workspace/outlines" : e ? `https://outline.aiworkspace.pro/single-workspace/${e.id}/outlines` : "https://outline.aiworkspace.pro";
        case "canvas":
          return t ? "https://canvas.aiworkspace.pro/all-workspace/canvas" : e ? `https://canvas.aiworkspace.pro/single-workspace/${e.id}/canvas` : "https://canvas.aiworkspace.pro";
        case "files":
          return t ? "https://drive.aiworkspace.pro/all-workspace/files" : e ? `https://drive.aiworkspace.pro/single-workspace/${e.id}/files` : "https://drive.aiworkspace.pro";
        case "tasks":
          return t ? "https://tasks.aiworkspace.pro/all-workspace/tasks" : e ? `https://tasks.aiworkspace.pro/single-workspace/${e.id}/tasks` : "https://tasks.aiworkspace.pro";
        case "goals":
          return t ? "https://app.aiworkspace.pro/all-workspace/goals" : e ? `https://app.aiworkspace.pro/single-workspace/${e.id}/goals` : "https://app.aiworkspace.pro/all-workspace/goals";
        case "events":
          return t ? "https://app.aiworkspace.pro/all-workspace/events" : e ? `https://app.aiworkspace.pro/single-workspace/${e.id}/events` : "https://app.aiworkspace.pro/all-workspace/events";
        case "contacts":
          return t ? "https://app.aiworkspace.pro/all-workspace/contacts" : e ? `https://app.aiworkspace.pro/single-workspace/${e.id}/contacts` : "https://app.aiworkspace.pro/all-workspace/contacts";
        case "settings":
          return t ? "https://settings.aiworkspace.pro/all-workspace/settings" : e ? `https://settings.aiworkspace.pro/single-workspace/${e.id}/settings` : "https://settings.aiworkspace.pro";
        default:
          return t ? `https://app.aiworkspace.pro/all-workspace/${a.key}` : e ? `https://app.aiworkspace.pro/single-workspace/${e.id}/${a.key}` : `https://app.aiworkspace.pro/${a.key}`;
      }
    }, $ = (a) => {
      switch (a) {
        case "profile":
          p.onProfileClick ? p.onProfileClick() : V.info("Profile settings coming soon");
          break;
        case "workspaces":
          A.value = !0;
          break;
        case "logout":
          xe();
          break;
      }
    }, ge = (a) => {
      var e;
      (e = l.value) == null || e.setCurrentWorkspace(a), A.value = !1, W("workspaceChange", a), V.success(`Switched to ${a.title}`);
    }, $e = () => {
      Ue.prompt("Enter workspace name:", "Create New Workspace", {
        confirmButtonText: "Create",
        cancelButtonText: "Cancel",
        inputPattern: /\S/,
        inputErrorMessage: "Workspace name cannot be empty"
      }).then(({ value: a }) => {
        var t;
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
        U.value.push(e), (t = l.value) == null || t.setWorkspaces(U.value), ge(e), V.success(`Created workspace: ${a}`);
      }).catch(() => {
      });
    }, xe = () => {
      Ue.confirm(
        "Are you sure you want to sign out?",
        "Sign Out",
        {
          confirmButtonText: "Sign Out",
          cancelButtonText: "Cancel",
          type: "warning"
        }
      ).then(async () => {
        var a;
        (a = l.value) == null || a.clearData(), await I(), W("logout"), V.success("Signed out successfully");
      }).catch(() => {
      });
    }, ve = async () => {
      var a, e;
      if (P.value.user) {
        const t = P.value.user;
        d.value = {
          name: t.name || ((a = t.email) == null ? void 0 : a.split("@")[0]) || "User",
          email: t.email || "",
          avatar_url: t.avatar_url || null,
          initials: (t.name || ((e = t.email) == null ? void 0 : e.split("@")[0]) || "U").split(" ").map((i) => i[0]).join("").toUpperCase().substring(0, 2)
        }, p.showWorkspaceSelector && await H();
      }
    };
    oe(() => P.value.user, (a) => {
      var e;
      a ? ve() : (d.value = { name: "", email: "", avatar_url: null, initials: "" }, (e = l.value) == null || e.clearData());
    }), oe(() => p.currentWorkspaceId, (a) => {
      var e;
      if (a && r.value.length) {
        const t = r.value.find((i) => i.id.toString() === a.toString());
        t && ((e = l.value) == null || e.setCurrentWorkspace(t));
      }
    }), we(async () => {
      B.value && (await ve(), await Y());
    });
    const Oe = async (a) => {
      console.log("Login successful:", a), L.value = !1, await ve(), W("login"), V.success("Welcome back!");
    }, Re = () => {
      h.value = 0, n(), V.success("Manual Pinia retry initiated.");
    };
    return (a, e) => {
      const t = J("el-icon"), i = J("el-tag"), b = J("el-dropdown-item"), Z = J("el-dropdown-menu"), ae = J("el-dropdown"), me = J("el-button"), Ne = J("el-dialog");
      return w(), S("header", na, [
        !o.value && h.value < he || ee(O) ? (w(), S("div", ia, [
          e[8] || (e[8] = _e('<div class="header-left" data-v-f98a8f3a><div class="logo-section" data-v-f98a8f3a><a href="/" class="logo" data-v-f98a8f3a><div class="text-logo" data-v-f98a8f3a><span class="logo-text" data-v-f98a8f3a>AI Workspace</span></div></a></div></div>', 1)),
          s("div", ca, [
            s("span", ua, [
              ee(O) ? (w(), S("span", da, "Syncing authentication...")) : (w(), S("span", pa, "Initializing..."))
            ])
          ])
        ])) : !o.value && h.value >= he ? (w(), S("div", fa, [
          e[10] || (e[10] = _e('<div class="header-left" data-v-f98a8f3a><div class="logo-section" data-v-f98a8f3a><a href="/" class="logo" data-v-f98a8f3a><div class="text-logo" data-v-f98a8f3a><span class="logo-text" data-v-f98a8f3a>AI Workspace</span></div></a></div></div>', 1)),
          s("div", { class: "header-center" }, [
            e[9] || (e[9] = s("span", { class: "fallback-text" }, "Header Ready (Fallback Mode)", -1)),
            s("button", {
              onClick: Re,
              class: "retry-button"
            }, "Retry Pinia")
          ]),
          e[11] || (e[11] = _e('<div class="header-right" data-v-f98a8f3a><div class="user-profile" data-v-f98a8f3a><div class="user-info" data-v-f98a8f3a><span class="user-name" data-v-f98a8f3a>User</span></div><div class="user-avatar" data-v-f98a8f3a><span class="avatar-placeholder" data-v-f98a8f3a>U</span></div></div></div>', 1))
        ])) : B.value ? (w(), S("div", ha, [
          s("div", wa, [
            s("div", ka, [
              s("a", ga, [
                a.customLogo ? (w(), S("img", {
                  key: 0,
                  src: a.customLogo,
                  alt: "AIWorkspace",
                  class: "logo-image"
                }, null, 8, va)) : (w(), S("div", ma, [...e[12] || (e[12] = [
                  s("span", { class: "logo-text" }, "AI Workspace", -1)
                ])]))
              ])
            ])
          ]),
          a.showSecondaryNavigation ? (w(), S("div", _a, [
            s("nav", ya, [
              a.showWorkspaceSelector ? (w(), G(ae, {
                key: 0,
                onCommand: Q,
                trigger: "hover"
              }, {
                dropdown: f(() => [
                  m(Z, { class: "workspace-tree-dropdown" }, {
                    default: f(() => [
                      m(b, {
                        command: "all-workspace",
                        class: ye({ active: _.value })
                      }, {
                        default: f(() => [
                          s("a", Sa, [
                            s("div", Aa, [
                              e[14] || (e[14] = s("span", { class: "workspace-icon" }, "🌐", -1)),
                              e[15] || (e[15] = s("span", null, "All workspace", -1)),
                              _.value ? (w(), G(i, {
                                key: 0,
                                size: "small",
                                type: "success"
                              }, {
                                default: f(() => [...e[13] || (e[13] = [
                                  K("Current", -1)
                                ])]),
                                _: 1
                              })) : F("", !0)
                            ])
                          ])
                        ]),
                        _: 1
                      }, 8, ["class"]),
                      r.value.length > 0 ? (w(), G(b, {
                        key: 0,
                        divided: "",
                        disabled: ""
                      })) : F("", !0),
                      (w(!0), S(be, null, Se(r.value, (v) => (w(), G(b, {
                        key: v.id,
                        command: `workspace-${v.id}`
                      }, {
                        default: f(() => {
                          var ie;
                          return [
                            s("a", {
                              href: `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${v.id}/dashboard`,
                              class: "nav-link"
                            }, [
                              s("div", {
                                class: "workspace-dropdown-item",
                                style: Me({ paddingLeft: (v.level || 0) * 16 + "px" })
                              }, [
                                s("span", Wa, N(v.children && v.children.length ? "📁" : "📄"), 1),
                                s("span", null, N(v.title), 1),
                                v.id === ((ie = M.value) == null ? void 0 : ie.id) ? (w(), G(i, {
                                  key: 0,
                                  size: "small",
                                  type: "success"
                                }, {
                                  default: f(() => [...e[16] || (e[16] = [
                                    K("Current", -1)
                                  ])]),
                                  _: 1
                                })) : F("", !0)
                              ], 4)
                            ], 8, Ca)
                          ];
                        }),
                        _: 2
                      }, 1032, ["command"]))), 128)),
                      r.value.length === 0 ? (w(), G(b, {
                        key: 1,
                        disabled: ""
                      }, {
                        default: f(() => [...e[17] || (e[17] = [
                          K(" No workspaces ", -1)
                        ])]),
                        _: 1
                      })) : F("", !0)
                    ]),
                    _: 1
                  })
                ]),
                default: f(() => {
                  var v;
                  return [
                    s("span", ba, [
                      K(N(_.value ? "All workspace" : ((v = M.value) == null ? void 0 : v.title) || "Select Workspace") + " ", 1),
                      m(t, { class: "nav-arrow" }, {
                        default: f(() => [
                          m(ee(Ee))
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }),
                _: 1
              })) : F("", !0),
              a.showWorkspaceSelector ? (w(), S("span", Ia, "/")) : F("", !0),
              a.showSecondaryNavigation ? (w(), G(ae, {
                key: 2,
                trigger: "hover"
              }, {
                dropdown: f(() => [
                  m(Z, null, {
                    default: f(() => [
                      (w(!0), S(be, null, Se(fe.value, (v) => (w(), G(b, {
                        key: v.label,
                        class: ye({ active: v.active })
                      }, {
                        default: f(() => [
                          s("a", {
                            href: y(v),
                            class: "nav-link",
                            onClick: re((ie) => te(v), ["prevent"])
                          }, N(v.label), 9, Ua)
                        ]),
                        _: 2
                      }, 1032, ["class"]))), 128))
                    ]),
                    _: 1
                  })
                ]),
                default: f(() => [
                  s("span", La, [
                    K(N(ke.value) + " ", 1),
                    m(t, { class: "nav-arrow" }, {
                      default: f(() => [
                        m(ee(Ee))
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })) : F("", !0)
            ])
          ])) : F("", !0),
          s("div", Ea, [
            m(ae, {
              onCommand: $,
              trigger: "click",
              placement: "bottom-end"
            }, {
              dropdown: f(() => [
                m(Z, null, {
                  default: f(() => [
                    m(b, null, {
                      default: f(() => [
                        s("a", {
                          href: "/profile",
                          class: "nav-link",
                          onClick: e[0] || (e[0] = re((v) => $("profile"), ["prevent"]))
                        }, "Profile Settings")
                      ]),
                      _: 1
                    }),
                    a.showWorkspaceSelector ? (w(), G(b, { key: 0 }, {
                      default: f(() => [
                        s("a", {
                          href: "#switch-workspace",
                          class: "nav-link",
                          onClick: e[1] || (e[1] = re((v) => $("workspaces"), ["prevent"]))
                        }, "Switch Workspace")
                      ]),
                      _: 1
                    })) : F("", !0),
                    m(b, { divided: "" }, {
                      default: f(() => [
                        s("a", {
                          href: "#signout",
                          class: "nav-link",
                          onClick: e[2] || (e[2] = re((v) => $("logout"), ["prevent"]))
                        }, "Sign Out")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              default: f(() => [
                s("div", Pa, [
                  s("div", $a, [
                    s("span", xa, N(d.value.name), 1)
                  ]),
                  s("div", Oa, [
                    d.value.avatar_url ? (w(), S("img", {
                      key: 0,
                      src: d.value.avatar_url,
                      alt: d.value.name
                    }, null, 8, Ra)) : (w(), S("span", Na, N(d.value.initials), 1))
                  ])
                ])
              ]),
              _: 1
            })
          ])
        ])) : (w(), S("div", Va, [
          s("div", Ma, [
            s("div", Da, [
              s("a", Ta, [
                a.customLogo ? (w(), S("img", {
                  key: 0,
                  src: a.customLogo,
                  alt: "AIWorkspace",
                  class: "logo-image"
                }, null, 8, za)) : (w(), S("div", Ha, [...e[18] || (e[18] = [
                  s("span", { class: "logo-text" }, "AI Workspace", -1)
                ])]))
              ])
            ])
          ]),
          e[20] || (e[20] = s("div", { class: "header-center" }, [
            s("span", { class: "welcome-text" }, "Welcome to AI Workspace")
          ], -1)),
          s("div", Ba, [
            m(me, {
              type: "primary",
              size: "large",
              class: "login-button",
              onClick: e[3] || (e[3] = (v) => L.value = !0)
            }, {
              default: f(() => [
                m(t, null, {
                  default: f(() => [
                    m(ee(Xe))
                  ]),
                  _: 1
                }),
                e[19] || (e[19] = K(" Login / Signup ", -1))
              ]),
              _: 1
            })
          ])
        ])),
        B.value && a.showWorkspaceSelector ? (w(), G(Ne, {
          key: 4,
          modelValue: A.value,
          "onUpdate:modelValue": e[5] || (e[5] = (v) => A.value = v),
          title: "Switch Workspace",
          width: "500px",
          onClose: e[6] || (e[6] = (v) => A.value = !1)
        }, {
          footer: f(() => [
            m(me, {
              onClick: e[4] || (e[4] = (v) => A.value = !1)
            }, {
              default: f(() => [...e[21] || (e[21] = [
                K("Cancel", -1)
              ])]),
              _: 1
            }),
            m(me, {
              type: "primary",
              onClick: $e
            }, {
              default: f(() => [...e[22] || (e[22] = [
                K("Create New Workspace", -1)
              ])]),
              _: 1
            })
          ]),
          default: f(() => [
            s("div", Fa, [
              (w(!0), S(be, null, Se(U.value, (v) => {
                var ie, Le;
                return w(), S("div", {
                  key: v.id,
                  class: ye(["workspace-item", { active: v.id === ((ie = M.value) == null ? void 0 : ie.id) }]),
                  onClick: (Za) => ge(v)
                }, [
                  s("div", qa, N(v.children && v.children.length ? "📁" : "📄"), 1),
                  s("div", Ga, [
                    s("h3", null, N(v.title), 1),
                    s("p", null, N(v.description), 1),
                    s("span", Ja, N(v.hasAccess ? "Active" : "Inactive"), 1)
                  ]),
                  v.id === ((Le = M.value) == null ? void 0 : Le.id) ? (w(), S("div", ja, [
                    m(t, null, {
                      default: f(() => [
                        m(ee(Ke))
                      ]),
                      _: 1
                    })
                  ])) : F("", !0)
                ], 10, Ka);
              }), 128))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])) : F("", !0),
        m(la, {
          modelValue: L.value,
          "onUpdate:modelValue": e[7] || (e[7] = (v) => L.value = v),
          onLoginSuccess: Oe
        }, null, 8, ["modelValue"])
      ]);
    };
  }
});
const ls = /* @__PURE__ */ Ie(Xa, [["__scopeId", "data-v-f98a8f3a"]]), Ya = { class: "auth-callback" }, Qa = /* @__PURE__ */ se({
  __name: "AuthCallback",
  setup(c) {
    we(async () => {
      console.log("[AuthCallback] Component mounted, starting callback processing..."), console.log("[AuthCallback] Current URL:", window.location.href), console.log("[AuthCallback] Current hash:", window.location.hash);
      try {
        await new Promise((P) => setTimeout(P, 500));
        const { data: p, error: W } = await T.auth.getSession();
        if (W) {
          console.error("Error processing callback:", W), u();
          return;
        }
        if (p != null && p.session) {
          const P = p.session.user;
          console.log("OAuth login successful:", P.email), p.session.access_token && pe(ue, p.session.access_token), p.session.refresh_token && pe(de, p.session.refresh_token), We();
          const I = ze();
          console.log("[callback] Post-login redirect URL:", I), console.log("[callback] Session storage redirect:", sessionStorage.getItem("post-login-redirect")), console.log("[callback] Local storage redirect:", localStorage.getItem("post-login-redirect"));
          const O = I || "/";
          if (console.log("[callback] Final redirect URL:", O), O.startsWith("/")) {
            const R = window.location.origin, j = `${R}${O}`;
            console.log("[callback] redirecting to:", j, { hostname: window.location.hostname, origin: R }), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
              window.location.href = j;
            }, 100);
          } else
            console.log("[callback] redirecting to absolute URL:", O), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
              window.location.href = O;
            }, 100);
        } else
          u();
      } catch (p) {
        console.error("Error processing callback:", p), u();
      }
    });
    const u = () => {
      const W = window.location.href.replace("/auth/callback", "");
      window.location.href = W;
    };
    return (p, W) => (w(), S("div", Ya, [...W[0] || (W[0] = [
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
const ns = /* @__PURE__ */ Ie(Qa, [["__scopeId", "data-v-acdf6325"]]);
export {
  ue as ACCESS_COOKIE,
  ls as AIWorkspaceHeader,
  ns as AuthCallback,
  fs as LS_ACCESS_KEY,
  hs as LS_REFRESH_KEY,
  la as LoginModal,
  de as REFRESH_COOKIE,
  ws as buildOAuthRedirectUrl,
  Ce as clearLocalStorageTokens,
  ce as clearSessionCookie,
  ks as ensureCrossSubdomainCookies,
  gs as getCookie,
  ze as getPostLoginBase,
  Te as initializeCrossSubdomainAuth,
  us as restoreCrossSubdomainSession,
  Ae as restoreSessionWithRetry,
  pe as setSessionCookie,
  ds as setupAuthStateListener,
  ms as setupUniversalCallback,
  T as supabase,
  We as syncCookiesToLocalStorage,
  Ze as useAuth,
  Ye as useEnhancedAuth,
  Qe as useWorkspaceStore
};
