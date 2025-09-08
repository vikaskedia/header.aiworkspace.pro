import { defineComponent as se, openBlock as w, createElementBlock as b, createElementVNode as s, ref as E, computed as z, onMounted as ke, watch as oe, reactive as Ve, resolveComponent as G, createBlock as q, withCtx as f, toDisplayString as N, createVNode as m, unref as ee, withModifiers as re, createCommentVNode as F, createTextVNode as K, createStaticVNode as me, normalizeClass as _e, Fragment as ye, renderList as be, normalizeStyle as Me } from "vue";
import { ElForm as De, ElMessage as V, ElMessageBox as Ue } from "element-plus";
import { i as Te, s as T, r as Se } from "./supabase-a05311c1.mjs";
import { a as us, b as ds } from "./supabase-a05311c1.mjs";
import { clearSessionCookie as ue, ACCESS_COOKIE as de, REFRESH_COOKIE as pe, clearLocalStorageTokens as Ae, setSessionCookie as fe, syncCookiesToLocalStorage as Ce, getPostLoginBase as ze } from "./utils/authRedirect.js";
import { LS_ACCESS_KEY as fs, LS_REFRESH_KEY as hs, buildOAuthRedirectUrl as ws, ensureCrossSubdomainCookies as ks, getCookie as gs } from "./utils/authRedirect.js";
import { defineStore as He } from "pinia";
import { setupUniversalCallback as ms } from "./utils/universalCallback.js";
import "@supabase/supabase-js";
/*! Element Plus Icons Vue v2.3.2 */
var Be = /* @__PURE__ */ se({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(c) {
    return (u, p) => (w(), b("svg", {
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
    return (u, p) => (w(), b("svg", {
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
    return (u, p) => (w(), b("svg", {
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
    return (u, p) => (w(), b("svg", {
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
    return (u, p) => (w(), b("svg", {
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
    var o, h, n, S, L, U, $, d, A, r, _, k, g, j, Y, B, M, le, D, he;
    try {
      console.log("[auth][enhanced] Ensuring cross-subdomain cookie synchronization...");
      const { ensureCrossSubdomainCookies: ne, ACCESS_COOKIE: X, REFRESH_COOKIE: H } = await import("./utils/authRedirect.js");
      ne([X, H]), await new Promise((C) => setTimeout(C, 100));
      const { data: { session: Q } } = await T.auth.getSession();
      if (Q && Q.user) {
        console.log("[auth][enhanced] Active Supabase session found");
        const C = Q.user, O = {
          id: C.id,
          name: ((o = C.user_metadata) == null ? void 0 : o.name) || ((h = C.user_metadata) == null ? void 0 : h.user_name) || ((n = C.user_metadata) == null ? void 0 : n.full_name) || ((S = C.email) == null ? void 0 : S.split("@")[0]) || "User",
          email: C.email,
          avatar_url: ((L = C.user_metadata) == null ? void 0 : L.avatar_url) || null,
          user_metadata: C.user_metadata
        };
        return c.value = {
          user: O,
          isAuthenticated: !0,
          isLoading: !1
        }, u.value = {
          user: O,
          access_token: Q.access_token,
          refresh_token: Q.refresh_token
        }, { success: !0, session: u.value };
      }
      console.log("[auth][enhanced] No active session, attempting to restore from cookies...");
      const te = await Se();
      if (te.success && te.session) {
        console.log("[auth][enhanced] Session restored successfully from cookies");
        const C = te.session.user, O = {
          id: C.id,
          name: ((U = C.user_metadata) == null ? void 0 : U.name) || (($ = C.user_metadata) == null ? void 0 : $.user_name) || ((d = C.user_metadata) == null ? void 0 : d.full_name) || ((A = C.email) == null ? void 0 : A.split("@")[0]) || "User",
          email: C.email,
          avatar_url: ((r = C.user_metadata) == null ? void 0 : r.avatar_url) || null,
          user_metadata: C.user_metadata
        };
        return c.value = {
          user: O,
          isAuthenticated: !0,
          isLoading: !1
        }, u.value = te.session, { success: !0, session: u.value };
      } else {
        console.log("[auth][enhanced] Failed to restore session:", te.error), console.log("[auth][enhanced] Retrying session restoration with extended delay..."), await new Promise((O) => setTimeout(O, 500)), ne([X, H]);
        const C = await Se();
        if (C.success && C.session) {
          console.log("[auth][enhanced] Session restored on retry");
          const O = C.session.user, ie = {
            id: O.id,
            name: ((_ = O.user_metadata) == null ? void 0 : _.name) || ((k = O.user_metadata) == null ? void 0 : k.user_name) || ((g = O.user_metadata) == null ? void 0 : g.full_name) || ((j = O.email) == null ? void 0 : j.split("@")[0]) || "User",
            email: O.email,
            avatar_url: ((Y = O.user_metadata) == null ? void 0 : Y.avatar_url) || null,
            user_metadata: O.user_metadata
          };
          return c.value = {
            user: ie,
            isAuthenticated: !0,
            isLoading: !1
          }, u.value = C.session, { success: !0, session: u.value };
        }
      }
    } catch (ne) {
      console.error("Error getting Supabase session:", ne);
      try {
        const X = await Se();
        if (X.success && X.session) {
          console.log("[auth][enhanced] Session restored after error");
          const H = X.session.user, Q = {
            id: H.id,
            name: ((B = H.user_metadata) == null ? void 0 : B.name) || ((M = H.user_metadata) == null ? void 0 : M.user_name) || ((le = H.user_metadata) == null ? void 0 : le.full_name) || ((D = H.email) == null ? void 0 : D.split("@")[0]) || "User",
            email: H.email,
            avatar_url: ((he = H.user_metadata) == null ? void 0 : he.avatar_url) || null,
            user_metadata: H.user_metadata
          };
          return c.value = {
            user: Q,
            isAuthenticated: !0,
            isLoading: !1
          }, u.value = X.session, { success: !0, session: u.value };
        }
      } catch (X) {
        console.error("Error restoring session:", X);
      }
    }
    return console.log("[auth][enhanced] No valid authentication found"), c.value = {
      user: null,
      isAuthenticated: !1,
      isLoading: !1
    }, u.value = null, { success: !1, error: "No valid session found" };
  }, x = async () => {
    try {
      await T.auth.signOut(), ue(de), ue(pe), Ae(), c.value = {
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
    var n, S, L, U, $;
    try {
      c.value.isLoading = !0;
      const { data: d, error: A } = await T.auth.signInWithPassword({
        email: o,
        password: h
      });
      if (A)
        throw A;
      if (d.session) {
        const r = d.session.user, _ = {
          id: r.id,
          name: ((n = r.user_metadata) == null ? void 0 : n.name) || ((S = r.user_metadata) == null ? void 0 : S.user_name) || ((L = r.user_metadata) == null ? void 0 : L.full_name) || ((U = r.email) == null ? void 0 : U.split("@")[0]) || "User",
          email: r.email,
          avatar_url: (($ = r.user_metadata) == null ? void 0 : $.avatar_url) || null,
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
  }, J = async (o, h, n) => {
    var S, L, U, $, d;
    try {
      c.value.isLoading = !0;
      const { data: A, error: r } = await T.auth.signUp({
        email: o,
        password: h,
        options: {
          data: n
        }
      });
      if (r)
        throw r;
      if (A.session) {
        const _ = A.session.user, k = {
          id: _.id,
          name: ((S = _.user_metadata) == null ? void 0 : S.name) || ((L = _.user_metadata) == null ? void 0 : L.user_name) || ((U = _.user_metadata) == null ? void 0 : U.full_name) || (($ = _.email) == null ? void 0 : $.split("@")[0]) || "User",
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
          access_token: A.session.access_token,
          refresh_token: A.session.refresh_token
        }, { success: !0, session: u.value };
      }
      return { success: !1, error: "No session returned" };
    } catch (A) {
      return console.error("Sign up error:", A), c.value.isLoading = !1, { success: !1, error: A };
    }
  }, l = async () => {
    await I();
  };
  return ke(async () => {
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
    logout: x,
    signIn: R,
    signUp: J,
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
        const { data: n, error: S } = await h;
        if (S)
          throw S;
        const L = /* @__PURE__ */ new Map();
        (n || []).forEach((r) => {
          (r.workspace_access || []).forEach((_) => {
            _.shared_with_user_id === o.id && L.set(r.id, _);
          });
        });
        const U = [...new Set(
          (n || []).filter((r) => r.parent_workspace_id).map((r) => r.parent_workspace_id).filter((r) => !L.has(r))
        )];
        let $ = [];
        if (U.length) {
          let r = T.from("workspaces").select("id, title, description, parent_workspace_id, created_by, archived, created_at").in("id", U);
          l || (r = r.eq("archived", !1));
          const { data: _, error: k } = await r;
          if (k)
            throw k;
          $ = _ || [];
        }
        const A = [...n || [], ...$].map((r) => {
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
        return A.sort((r, _) => new Date(_.latest_activity) - new Date(r.latest_activity)), P(A), A;
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
    var l, o, h, n, S, L, U, $;
    try {
      c.value.isLoading = !0;
      const { data: { session: d }, error: A } = await T.auth.getSession();
      if (A) {
        console.error("Error checking auth status:", A), c.value = {
          user: null,
          isAuthenticated: !1,
          isLoading: !1,
          error: A.message
        };
        return;
      }
      d != null && d.user ? (c.value = {
        user: {
          id: d.user.id,
          email: d.user.email || "",
          name: ((l = d.user.user_metadata) == null ? void 0 : l.full_name) || ((o = d.user.user_metadata) == null ? void 0 : o.name) || ((h = d.user.email) == null ? void 0 : h.split("@")[0]) || "User",
          avatar_url: ((n = d.user.user_metadata) == null ? void 0 : n.avatar_url) || ((S = d.user.user_metadata) == null ? void 0 : S.picture) || null,
          initials: (((L = d.user.user_metadata) == null ? void 0 : L.full_name) || ((U = d.user.user_metadata) == null ? void 0 : U.name) || (($ = d.user.email) == null ? void 0 : $.split("@")[0]) || "U").split(" ").map((r) => r[0]).join("").toUpperCase().substring(0, 2)
        },
        isAuthenticated: !0,
        isLoading: !1,
        error: null
      }, d.access_token && fe(de, d.access_token), d.refresh_token && fe(pe, d.refresh_token), Ce()) : c.value = {
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
      const { data: n, error: S } = await T.auth.signUp({
        email: l,
        password: o
      });
      return S ? { success: !1, error: S.message } : n.user && !n.user.email_confirmed_at ? { success: !0, needsConfirmation: !0 } : (h = n.session) != null && h.user ? (await p(), sessionStorage.setItem("post-login-redirect", u.value), { success: !0 }) : { success: !1, error: "No session created" };
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
  }, x = async () => {
    try {
      const { error: l } = await T.auth.signOut();
      l && console.error("Logout error:", l), c.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      }, ue(de), ue(pe), Ae();
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
  }, J = () => {
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
          }, ue(de), ue(pe), Ae();
          break;
        case "TOKEN_REFRESHED":
          o != null && o.access_token && fe(de, o.access_token), o != null && o.refresh_token && fe(pe, o.refresh_token), Ce();
          break;
        case "USER_UPDATED":
          o != null && o.user && p();
          break;
      }
    });
  };
  return ke(async () => {
    J(), await p();
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
    logout: x,
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
    }), I = E(!1), x = E(!1), R = E(), { loginWithEmail: J, signupWithEmail: l, loginWithProvider: o, resetPassword: h } = Ze(), n = Ve({
      email: "",
      password: "",
      confirmPassword: ""
    }), S = z(() => ({
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
            validator: (k, g, j) => {
              g !== n.password ? j(new Error("Passwords do not match")) : j();
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
    }, $ = async () => {
      if (R.value)
        try {
          await R.value.validate(), x.value = !0, I.value ? await A() : await d();
        } catch (k) {
          console.error("Form validation failed:", k);
        } finally {
          x.value = !1;
        }
    }, d = async () => {
      const k = await J(n.email, n.password);
      k.success ? (V.success("Login successful"), W("login-success", { email: n.email }), U()) : V.error("Login failed: " + k.error);
    }, A = async () => {
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
      const j = G("el-icon"), Y = G("el-input"), B = G("el-form-item"), M = G("el-button"), le = G("el-dialog");
      return w(), q(le, {
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
              rules: S.value,
              ref_key: "formRef",
              ref: R,
              class: "login-form",
              onSubmit: re($, ["prevent"])
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
                        m(j, null, {
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
                        m(j, null, {
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
                I.value ? (w(), q(B, {
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
                        m(j, null, {
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
                      loading: x.value,
                      onClick: $,
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
            I.value ? F("", !0) : (w(), b("div", ta, [
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
const We = (c, u) => {
  const p = c.__vccOpts || c;
  for (const [W, P] of u)
    p[W] = P;
  return p;
}, la = /* @__PURE__ */ We(ra, [["__scopeId", "data-v-684a3f28"]]), na = { class: "aiworkspace-header" }, ia = {
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
}, we = 50, Xa = /* @__PURE__ */ se({
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
    const p = c, W = u, { authState: P, logout: I, isLoading: x } = Ye(), R = () => {
      try {
        return Qe();
      } catch {
        return console.warn("[AIWorkspaceHeader] Pinia not initialized yet, using fallback state"), null;
      }
    }, J = () => {
      try {
        return typeof window < "u" ? !!window.__PINIA__ || !!window.Pinia : !1;
      } catch {
        return !1;
      }
    }, l = E(R()), o = z(() => !!l.value), h = E(0), n = () => {
      if (!l.value && h.value < we) {
        if (J()) {
          const a = R();
          if (a) {
            l.value = a, console.log("[AIWorkspaceHeader] Pinia store initialized successfully");
            return;
          }
        }
        h.value++, setTimeout(n, 100);
      } else
        h.value >= we && console.warn("[AIWorkspaceHeader] Pinia initialization failed after maximum retries, using fallback mode");
    };
    ke(() => {
      l.value || n();
    });
    const S = E(!1), L = E(!1), U = E([]), $ = E([]), d = E({
      name: "",
      email: "",
      avatar_url: null,
      initials: ""
    }), A = E([]), r = E([]), _ = E(!1);
    oe(r, async (a) => {
      a.length > 0 && o.value && B.value && await Y();
    }, { immediate: !1 }), oe(() => window.location.pathname + window.location.search + window.location.hash, async () => {
      o.value && B.value && await Y();
    }, { immediate: !1 });
    const k = E(window.location.pathname);
    oe(() => window.location.pathname, (a) => {
      k.value = a;
    }, { immediate: !0 }), oe(o, (a) => {
      !a && h.value < we && n();
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
    }, j = () => {
      try {
        return window.location.pathname.includes("/all-workspace/");
      } catch (a) {
        return console.warn("[AIWorkspaceHeader] Error checking all-workspace mode:", a), !1;
      }
    }, Y = async () => {
      if (!l.value || !o.value)
        return;
      const a = j();
      if (_.value = a, a) {
        l.value.currentWorkspace = null, localStorage.removeItem("current_workspace"), console.log("[AIWorkspaceHeader] Auto-selected all-workspace mode from URL");
        return;
      }
      const e = g();
      if (e)
        try {
          r.value.length === 0 && await Q();
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
    ]), he = z(() => _.value ? D.value : le.value), ne = z(() => {
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
            const y = a.match(/\/([^\/]+)$/);
            y && (e = y[1]);
          }
        }
        if (e) {
          const i = he.value.find(
            (y) => y.key === e || y.url.includes(`/${e}`) || y.url === `/${e}`
          );
          if (i)
            return i.label;
        }
        return "Dashboard";
      } catch (a) {
        return console.warn("[AIWorkspaceHeader] Error determining current section:", a), "Dashboard";
      }
    }), X = (a) => {
      const e = /* @__PURE__ */ new Map();
      a.forEach((y) => {
        e.set(y.id, { ...y, children: [] });
      });
      const t = [];
      e.forEach((y) => {
        y.parent_workspace_id && e.has(y.parent_workspace_id) ? e.get(y.parent_workspace_id).children.push(y) : t.push(y);
      });
      const i = (y) => {
        y.sort((Z, ae) => Z.title.localeCompare(ae.title)), y.forEach((Z) => {
          Z.children && i(Z.children);
        });
      };
      return i(t), t;
    }, H = (a, e = 0, t = []) => (a.forEach((i) => {
      t.push({ ...i, level: e }), i.children && i.children.length && H(i.children, e + 1, t);
    }), t), Q = async () => {
      var a, e, t;
      try {
        const i = await ((a = l.value) == null ? void 0 : a.loadWorkspaces());
        if (A.value = X(i || []), r.value = H(A.value), $.value = r.value, U.value = r.value, p.currentWorkspaceId) {
          const y = r.value.find((Z) => {
            var ae;
            return Z.id.toString() === ((ae = p.currentWorkspaceId) == null ? void 0 : ae.toString());
          });
          y && ((e = l.value) == null || e.setCurrentWorkspace(y));
        } else
          !M.value && r.value.length && ((t = l.value) == null || t.setCurrentWorkspace(r.value[0]));
      } catch (i) {
        console.error("loadWorkspaces (header) error", i);
      }
    }, te = (a) => {
      if (console.log("Navigation command:", a), a === "all-workspace") {
        window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
        return;
      } else {
        const e = parseInt(a.replace("workspace-", ""));
        window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e}/dashboard`;
        return;
      }
    }, C = (a) => {
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
    }, O = (a) => {
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
    }, ie = (a) => {
      switch (a) {
        case "profile":
          p.onProfileClick ? p.onProfileClick() : V.info("Profile settings coming soon");
          break;
        case "workspaces":
          S.value = !0;
          break;
        case "logout":
          xe();
          break;
      }
    }, Ie = (a) => {
      var e;
      (e = l.value) == null || e.setCurrentWorkspace(a), S.value = !1, W("workspaceChange", a), V.success(`Switched to ${a.title}`);
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
        U.value.push(e), (t = l.value) == null || t.setWorkspaces(U.value), Ie(e), V.success(`Created workspace: ${a}`);
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
    }, ge = async () => {
      var a, e;
      if (P.value.user) {
        const t = P.value.user;
        d.value = {
          name: t.name || ((a = t.email) == null ? void 0 : a.split("@")[0]) || "User",
          email: t.email || "",
          avatar_url: t.avatar_url || null,
          initials: (t.name || ((e = t.email) == null ? void 0 : e.split("@")[0]) || "U").split(" ").map((i) => i[0]).join("").toUpperCase().substring(0, 2)
        }, p.showWorkspaceSelector && await Q();
      }
    };
    oe(() => P.value.user, (a) => {
      var e;
      a ? ge() : (d.value = { name: "", email: "", avatar_url: null, initials: "" }, (e = l.value) == null || e.clearData());
    }), oe(() => p.currentWorkspaceId, (a) => {
      var e;
      if (a && r.value.length) {
        const t = r.value.find((i) => i.id.toString() === a.toString());
        t && ((e = l.value) == null || e.setCurrentWorkspace(t));
      }
    }), ke(async () => {
      B.value && (await ge(), await Y());
    });
    const Oe = async (a) => {
      console.log("Login successful:", a), L.value = !1, await ge(), W("login"), V.success("Welcome back!");
    }, Re = () => {
      h.value = 0, n(), V.success("Manual Pinia retry initiated.");
    };
    return (a, e) => {
      const t = G("el-icon"), i = G("el-tag"), y = G("el-dropdown-item"), Z = G("el-dropdown-menu"), ae = G("el-dropdown"), ve = G("el-button"), Ne = G("el-dialog");
      return w(), b("header", na, [
        !o.value && h.value < we || ee(x) ? (w(), b("div", ia, [
          e[8] || (e[8] = me('<div class="header-left" data-v-f98a8f3a><div class="logo-section" data-v-f98a8f3a><a href="/" class="logo" data-v-f98a8f3a><div class="text-logo" data-v-f98a8f3a><span class="logo-text" data-v-f98a8f3a>AI Workspace</span></div></a></div></div>', 1)),
          s("div", ca, [
            s("span", ua, [
              ee(x) ? (w(), b("span", da, "Syncing authentication...")) : (w(), b("span", pa, "Initializing..."))
            ])
          ])
        ])) : !o.value && h.value >= we ? (w(), b("div", fa, [
          e[10] || (e[10] = me('<div class="header-left" data-v-f98a8f3a><div class="logo-section" data-v-f98a8f3a><a href="/" class="logo" data-v-f98a8f3a><div class="text-logo" data-v-f98a8f3a><span class="logo-text" data-v-f98a8f3a>AI Workspace</span></div></a></div></div>', 1)),
          s("div", { class: "header-center" }, [
            e[9] || (e[9] = s("span", { class: "fallback-text" }, "Header Ready (Fallback Mode)", -1)),
            s("button", {
              onClick: Re,
              class: "retry-button"
            }, "Retry Pinia")
          ]),
          e[11] || (e[11] = me('<div class="header-right" data-v-f98a8f3a><div class="user-profile" data-v-f98a8f3a><div class="user-info" data-v-f98a8f3a><span class="user-name" data-v-f98a8f3a>User</span></div><div class="user-avatar" data-v-f98a8f3a><span class="avatar-placeholder" data-v-f98a8f3a>U</span></div></div></div>', 1))
        ])) : B.value ? (w(), b("div", ha, [
          s("div", wa, [
            s("div", ka, [
              s("a", ga, [
                a.customLogo ? (w(), b("img", {
                  key: 0,
                  src: a.customLogo,
                  alt: "AIWorkspace",
                  class: "logo-image"
                }, null, 8, va)) : (w(), b("div", ma, [...e[12] || (e[12] = [
                  s("span", { class: "logo-text" }, "AI Workspace", -1)
                ])]))
              ])
            ])
          ]),
          a.showSecondaryNavigation ? (w(), b("div", _a, [
            s("nav", ya, [
              a.showWorkspaceSelector ? (w(), q(ae, {
                key: 0,
                onCommand: te,
                trigger: "hover"
              }, {
                dropdown: f(() => [
                  m(Z, { class: "workspace-tree-dropdown" }, {
                    default: f(() => [
                      m(y, {
                        command: "all-workspace",
                        class: _e({ active: _.value })
                      }, {
                        default: f(() => [
                          s("a", Sa, [
                            s("div", Aa, [
                              e[14] || (e[14] = s("span", { class: "workspace-icon" }, "🌐", -1)),
                              e[15] || (e[15] = s("span", null, "All workspace", -1)),
                              _.value ? (w(), q(i, {
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
                      r.value.length > 0 ? (w(), q(y, {
                        key: 0,
                        divided: "",
                        disabled: ""
                      })) : F("", !0),
                      (w(!0), b(ye, null, be(r.value, (v) => (w(), q(y, {
                        key: v.id,
                        command: `workspace-${v.id}`
                      }, {
                        default: f(() => {
                          var ce;
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
                                v.id === ((ce = M.value) == null ? void 0 : ce.id) ? (w(), q(i, {
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
                      r.value.length === 0 ? (w(), q(y, {
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
              a.showWorkspaceSelector ? (w(), b("span", Ia, "/")) : F("", !0),
              a.showSecondaryNavigation ? (w(), q(ae, {
                key: 2,
                trigger: "hover"
              }, {
                dropdown: f(() => [
                  m(Z, null, {
                    default: f(() => [
                      (w(!0), b(ye, null, be(he.value, (v) => (w(), q(y, {
                        key: v.label,
                        class: _e({ active: v.active })
                      }, {
                        default: f(() => [
                          s("a", {
                            href: O(v),
                            class: "nav-link",
                            onClick: re((ce) => C(v), ["prevent"])
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
                    K(N(ne.value) + " ", 1),
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
              onCommand: ie,
              trigger: "click",
              placement: "bottom-end"
            }, {
              dropdown: f(() => [
                m(Z, null, {
                  default: f(() => [
                    m(y, null, {
                      default: f(() => [
                        s("a", {
                          href: "/profile",
                          class: "nav-link",
                          onClick: e[0] || (e[0] = re((v) => ie("profile"), ["prevent"]))
                        }, "Profile Settings")
                      ]),
                      _: 1
                    }),
                    a.showWorkspaceSelector ? (w(), q(y, { key: 0 }, {
                      default: f(() => [
                        s("a", {
                          href: "#switch-workspace",
                          class: "nav-link",
                          onClick: e[1] || (e[1] = re((v) => ie("workspaces"), ["prevent"]))
                        }, "Switch Workspace")
                      ]),
                      _: 1
                    })) : F("", !0),
                    m(y, { divided: "" }, {
                      default: f(() => [
                        s("a", {
                          href: "#signout",
                          class: "nav-link",
                          onClick: e[2] || (e[2] = re((v) => ie("logout"), ["prevent"]))
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
                    d.value.avatar_url ? (w(), b("img", {
                      key: 0,
                      src: d.value.avatar_url,
                      alt: d.value.name
                    }, null, 8, Ra)) : (w(), b("span", Na, N(d.value.initials), 1))
                  ])
                ])
              ]),
              _: 1
            })
          ])
        ])) : (w(), b("div", Va, [
          s("div", Ma, [
            s("div", Da, [
              s("a", Ta, [
                a.customLogo ? (w(), b("img", {
                  key: 0,
                  src: a.customLogo,
                  alt: "AIWorkspace",
                  class: "logo-image"
                }, null, 8, za)) : (w(), b("div", Ha, [...e[18] || (e[18] = [
                  s("span", { class: "logo-text" }, "AI Workspace", -1)
                ])]))
              ])
            ])
          ]),
          e[20] || (e[20] = s("div", { class: "header-center" }, [
            s("span", { class: "welcome-text" }, "Welcome to AI Workspace")
          ], -1)),
          s("div", Ba, [
            m(ve, {
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
        B.value && a.showWorkspaceSelector ? (w(), q(Ne, {
          key: 4,
          modelValue: S.value,
          "onUpdate:modelValue": e[5] || (e[5] = (v) => S.value = v),
          title: "Switch Workspace",
          width: "500px",
          onClose: e[6] || (e[6] = (v) => S.value = !1)
        }, {
          footer: f(() => [
            m(ve, {
              onClick: e[4] || (e[4] = (v) => S.value = !1)
            }, {
              default: f(() => [...e[21] || (e[21] = [
                K("Cancel", -1)
              ])]),
              _: 1
            }),
            m(ve, {
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
              (w(!0), b(ye, null, be(U.value, (v) => {
                var ce, Le;
                return w(), b("div", {
                  key: v.id,
                  class: _e(["workspace-item", { active: v.id === ((ce = M.value) == null ? void 0 : ce.id) }]),
                  onClick: (Za) => Ie(v)
                }, [
                  s("div", qa, N(v.children && v.children.length ? "📁" : "📄"), 1),
                  s("div", Ga, [
                    s("h3", null, N(v.title), 1),
                    s("p", null, N(v.description), 1),
                    s("span", Ja, N(v.hasAccess ? "Active" : "Inactive"), 1)
                  ]),
                  v.id === ((Le = M.value) == null ? void 0 : Le.id) ? (w(), b("div", ja, [
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
const ls = /* @__PURE__ */ We(Xa, [["__scopeId", "data-v-f98a8f3a"]]), Ya = { class: "auth-callback" }, Qa = /* @__PURE__ */ se({
  __name: "AuthCallback",
  setup(c) {
    ke(async () => {
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
          console.log("OAuth login successful:", P.email), p.session.access_token && fe(de, p.session.access_token), p.session.refresh_token && fe(pe, p.session.refresh_token), Ce();
          const I = ze();
          console.log("[callback] Post-login redirect URL:", I), console.log("[callback] Session storage redirect:", sessionStorage.getItem("post-login-redirect")), console.log("[callback] Local storage redirect:", localStorage.getItem("post-login-redirect"));
          const x = I || "/";
          if (console.log("[callback] Final redirect URL:", x), x.startsWith("/")) {
            const R = window.location.origin, J = `${R}${x}`;
            console.log("[callback] redirecting to:", J, { hostname: window.location.hostname, origin: R }), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
              window.location.href = J;
            }, 100);
          } else
            console.log("[callback] redirecting to absolute URL:", x), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
              window.location.href = x;
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
    return (p, W) => (w(), b("div", Ya, [...W[0] || (W[0] = [
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
const ns = /* @__PURE__ */ We(Qa, [["__scopeId", "data-v-acdf6325"]]);
export {
  de as ACCESS_COOKIE,
  ls as AIWorkspaceHeader,
  ns as AuthCallback,
  fs as LS_ACCESS_KEY,
  hs as LS_REFRESH_KEY,
  la as LoginModal,
  pe as REFRESH_COOKIE,
  ws as buildOAuthRedirectUrl,
  Ae as clearLocalStorageTokens,
  ue as clearSessionCookie,
  ks as ensureCrossSubdomainCookies,
  gs as getCookie,
  ze as getPostLoginBase,
  Te as initializeCrossSubdomainAuth,
  us as restoreCrossSubdomainSession,
  Se as restoreSessionWithRetry,
  fe as setSessionCookie,
  ds as setupAuthStateListener,
  ms as setupUniversalCallback,
  T as supabase,
  Ce as syncCookiesToLocalStorage,
  Ze as useAuth,
  Ye as useEnhancedAuth,
  Qe as useWorkspaceStore
};
