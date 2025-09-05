import { defineComponent as Q, openBlock as m, createElementBlock as W, createElementVNode as t, ref as $, computed as H, onMounted as ne, watch as Z, reactive as Re, resolveComponent as K, createBlock as J, withCtx as p, toDisplayString as M, createVNode as _, unref as Y, withModifiers as ee, createCommentVNode as F, createTextVNode as q, createStaticVNode as de, normalizeClass as pe, Fragment as fe, renderList as we, normalizeStyle as Ve } from "vue";
import { ElForm as Me, ElMessage as D, ElMessageBox as be } from "element-plus";
import { s as z, r as Se } from "./supabase-398c774d.mjs";
import { a as rs, b as os } from "./supabase-398c774d.mjs";
import { clearSessionCookie as se, ACCESS_COOKIE as te, REFRESH_COOKIE as re, clearLocalStorageTokens as he, setSessionCookie as oe, syncCookiesToLocalStorage as ke, getPostLoginBase as De } from "./utils/authRedirect.js";
import { LS_ACCESS_KEY as ns, LS_REFRESH_KEY as is, buildOAuthRedirectUrl as cs, ensureCrossSubdomainCookies as us, getCookie as ds } from "./utils/authRedirect.js";
import { defineStore as Te } from "pinia";
import { setupUniversalCallback as fs } from "./utils/universalCallback.js";
import "@supabase/supabase-js";
/*! Element Plus Icons Vue v2.3.2 */
var ze = /* @__PURE__ */ Q({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(c) {
    return (u, d) => (m(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      t("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"
      })
    ]));
  }
}), Ae = ze, He = /* @__PURE__ */ Q({
  name: "Check",
  __name: "check",
  setup(c) {
    return (u, d) => (m(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      t("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      })
    ]));
  }
}), Be = He, Fe = /* @__PURE__ */ Q({
  name: "Lock",
  __name: "lock",
  setup(c) {
    return (u, d) => (m(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      t("path", {
        fill: "currentColor",
        d: "M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96"
      }),
      t("path", {
        fill: "currentColor",
        d: "M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32m192-160v-64a192 192 0 1 0-384 0v64zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64"
      })
    ]));
  }
}), Ce = Fe, qe = /* @__PURE__ */ Q({
  name: "Message",
  __name: "message",
  setup(c) {
    return (u, d) => (m(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      t("path", {
        fill: "currentColor",
        d: "M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64"
      }),
      t("path", {
        fill: "currentColor",
        d: "M904 224 656.512 506.88a192 192 0 0 1-289.024 0L120 224zm-698.944 0 210.56 240.704a128 128 0 0 0 192.704 0L818.944 224z"
      })
    ]));
  }
}), Ge = qe, Je = /* @__PURE__ */ Q({
  name: "User",
  __name: "user",
  setup(c) {
    return (u, d) => (m(), W("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      t("path", {
        fill: "currentColor",
        d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"
      })
    ]));
  }
}), Ke = Je;
function je() {
  const c = $({
    user: null,
    isAuthenticated: !1,
    isLoading: !0
  }), u = $(null), d = H(() => c.value.isAuthenticated), I = H(() => c.value.user), E = H(() => c.value.isLoading), U = async () => {
    var r, w, o, L, P, x, C, f, h, l, S, k, g, B, G;
    try {
      const { data: { session: N } } = await z.auth.getSession();
      if (N && N.user) {
        const y = N.user, O = {
          id: y.id,
          name: ((r = y.user_metadata) == null ? void 0 : r.name) || ((w = y.user_metadata) == null ? void 0 : w.user_name) || ((o = y.user_metadata) == null ? void 0 : o.full_name) || ((L = y.email) == null ? void 0 : L.split("@")[0]) || "User",
          email: y.email,
          avatar_url: ((P = y.user_metadata) == null ? void 0 : P.avatar_url) || null,
          user_metadata: y.user_metadata
        };
        return c.value = {
          user: O,
          isAuthenticated: !0,
          isLoading: !1
        }, u.value = {
          user: O,
          access_token: N.access_token,
          refresh_token: N.refresh_token
        }, { success: !0, session: u.value };
      }
      console.log("[auth][enhanced] No active session, attempting to restore from cookies...");
      const R = await Se();
      if (R.success && R.session) {
        console.log("[auth][enhanced] Session restored successfully");
        const y = R.session.user, O = {
          id: y.id,
          name: ((x = y.user_metadata) == null ? void 0 : x.name) || ((C = y.user_metadata) == null ? void 0 : C.user_name) || ((f = y.user_metadata) == null ? void 0 : f.full_name) || ((h = y.email) == null ? void 0 : h.split("@")[0]) || "User",
          email: y.email,
          avatar_url: ((l = y.user_metadata) == null ? void 0 : l.avatar_url) || null,
          user_metadata: y.user_metadata
        };
        return c.value = {
          user: O,
          isAuthenticated: !0,
          isLoading: !1
        }, u.value = R.session, { success: !0, session: u.value };
      } else
        console.log("[auth][enhanced] Failed to restore session:", R.error);
    } catch (N) {
      console.error("Error getting Supabase session:", N);
      try {
        const R = await Se();
        if (R.success && R.session) {
          console.log("[auth][enhanced] Session restored after error");
          const y = R.session.user, O = {
            id: y.id,
            name: ((S = y.user_metadata) == null ? void 0 : S.name) || ((k = y.user_metadata) == null ? void 0 : k.user_name) || ((g = y.user_metadata) == null ? void 0 : g.full_name) || ((B = y.email) == null ? void 0 : B.split("@")[0]) || "User",
            email: y.email,
            avatar_url: ((G = y.user_metadata) == null ? void 0 : G.avatar_url) || null,
            user_metadata: y.user_metadata
          };
          return c.value = {
            user: O,
            isAuthenticated: !0,
            isLoading: !1
          }, u.value = R.session, { success: !0, session: u.value };
        }
      } catch (R) {
        console.error("Error restoring session:", R);
      }
    }
    return c.value = {
      user: null,
      isAuthenticated: !1,
      isLoading: !1
    }, u.value = null, { success: !1, error: "No valid session found" };
  }, V = async () => {
    try {
      await z.auth.signOut(), se(te), se(re), he(), c.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1
      }, u.value = null, console.log("[auth][enhanced] User logged out successfully");
    } catch (r) {
      console.error("Error during logout:", r), c.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1
      }, u.value = null;
    }
  }, T = async (r, w) => {
    var o, L, P, x, C;
    try {
      c.value.isLoading = !0;
      const { data: f, error: h } = await z.auth.signInWithPassword({
        email: r,
        password: w
      });
      if (h)
        throw h;
      if (f.session) {
        const l = f.session.user, S = {
          id: l.id,
          name: ((o = l.user_metadata) == null ? void 0 : o.name) || ((L = l.user_metadata) == null ? void 0 : L.user_name) || ((P = l.user_metadata) == null ? void 0 : P.full_name) || ((x = l.email) == null ? void 0 : x.split("@")[0]) || "User",
          email: l.email,
          avatar_url: ((C = l.user_metadata) == null ? void 0 : C.avatar_url) || null,
          user_metadata: l.user_metadata
        };
        return c.value = {
          user: S,
          isAuthenticated: !0,
          isLoading: !1
        }, u.value = {
          user: S,
          access_token: f.session.access_token,
          refresh_token: f.session.refresh_token
        }, { success: !0, session: u.value };
      }
      return { success: !1, error: "No session returned" };
    } catch (f) {
      return console.error("Sign in error:", f), c.value.isLoading = !1, { success: !1, error: f };
    }
  }, A = async (r, w, o) => {
    var L, P, x, C, f;
    try {
      c.value.isLoading = !0;
      const { data: h, error: l } = await z.auth.signUp({
        email: r,
        password: w,
        options: {
          data: o
        }
      });
      if (l)
        throw l;
      if (h.session) {
        const S = h.session.user, k = {
          id: S.id,
          name: ((L = S.user_metadata) == null ? void 0 : L.name) || ((P = S.user_metadata) == null ? void 0 : P.user_name) || ((x = S.user_metadata) == null ? void 0 : x.full_name) || ((C = S.email) == null ? void 0 : C.split("@")[0]) || "User",
          email: S.email,
          avatar_url: ((f = S.user_metadata) == null ? void 0 : f.avatar_url) || null,
          user_metadata: S.user_metadata
        };
        return c.value = {
          user: k,
          isAuthenticated: !0,
          isLoading: !1
        }, u.value = {
          user: k,
          access_token: h.session.access_token,
          refresh_token: h.session.refresh_token
        }, { success: !0, session: u.value };
      }
      return { success: !1, error: "No session returned" };
    } catch (h) {
      return console.error("Sign up error:", h), c.value.isLoading = !1, { success: !1, error: h };
    }
  }, i = async () => {
    await U();
  };
  return ne(() => {
    i();
  }), {
    // State
    authState: c,
    currentSession: u,
    // Computed
    isAuthenticated: d,
    currentUser: I,
    isLoading: E,
    // Methods
    loadUserInfo: U,
    logout: V,
    signIn: T,
    signUp: A,
    checkAuth: i
  };
}
const Xe = Te("workspace", () => {
  const c = $(null), u = $([]), d = $(null), I = (i) => {
    c.value = i, localStorage.setItem("current_workspace", JSON.stringify(i));
  }, E = (i) => {
    u.value = i, localStorage.setItem("available_workspaces", JSON.stringify(i));
  };
  return {
    currentWorkspace: c,
    workspaces: u,
    user: d,
    setCurrentWorkspace: I,
    setWorkspaces: E,
    setUser: (i) => {
      d.value = i, localStorage.setItem("user_info", JSON.stringify(i));
    },
    loadPersistedData: () => {
      const i = localStorage.getItem("current_workspace");
      if (i)
        try {
          c.value = JSON.parse(i);
        } catch (o) {
          console.error("Error loading persisted workspace:", o);
        }
      const r = localStorage.getItem("available_workspaces");
      if (r)
        try {
          u.value = JSON.parse(r);
        } catch (o) {
          console.error("Error loading persisted workspaces:", o);
        }
      const w = localStorage.getItem("user_info");
      if (w)
        try {
          d.value = JSON.parse(w);
        } catch (o) {
          console.error("Error loading persisted user:", o);
        }
    },
    clearData: () => {
      c.value = null, u.value = [], d.value = null, localStorage.removeItem("current_workspace"), localStorage.removeItem("available_workspaces"), localStorage.removeItem("user_info");
    },
    loadWorkspaces: async (i = !1) => {
      try {
        const { data: { user: r } } = await z.auth.getUser();
        if (!r)
          return [];
        let w = z.from("workspaces").select(`
          id, title, description, parent_workspace_id, created_by, archived, created_at,
          workspace_access!inner ( access_type, shared_with_user_id ),
          workspace_activities!left ( updated_at )
        `).eq("workspace_access.shared_with_user_id", r.id);
        i || (w = w.eq("archived", !1));
        const { data: o, error: L } = await w;
        if (L)
          throw L;
        const P = /* @__PURE__ */ new Map();
        (o || []).forEach((l) => {
          (l.workspace_access || []).forEach((S) => {
            S.shared_with_user_id === r.id && P.set(l.id, S);
          });
        });
        const x = [...new Set(
          (o || []).filter((l) => l.parent_workspace_id).map((l) => l.parent_workspace_id).filter((l) => !P.has(l))
        )];
        let C = [];
        if (x.length) {
          let l = z.from("workspaces").select("id, title, description, parent_workspace_id, created_by, archived, created_at").in("id", x);
          i || (l = l.eq("archived", !1));
          const { data: S, error: k } = await l;
          if (k)
            throw k;
          C = S || [];
        }
        const h = [...o || [], ...C].map((l) => {
          var S, k, g;
          return {
            id: l.id,
            title: l.title,
            description: l.description || "No description",
            parent_workspace_id: l.parent_workspace_id,
            created_by: l.created_by,
            archived: l.archived,
            created_at: l.created_at,
            latest_activity: ((k = (S = l.workspace_activities) == null ? void 0 : S[0]) == null ? void 0 : k.updated_at) || l.created_at,
            hasAccess: P.has(l.id),
            accessType: ((g = P.get(l.id)) == null ? void 0 : g.access_type) || null
          };
        });
        return h.sort((l, S) => new Date(S.latest_activity) - new Date(l.latest_activity)), E(h), h;
      } catch (r) {
        return console.error("loadWorkspaces error", r), [];
      }
    }
  };
});
function Ye() {
  const c = $({
    user: null,
    isAuthenticated: !1,
    isLoading: !0,
    error: null
  }), u = $(window.location.href), d = async () => {
    var i, r, w, o, L, P, x, C;
    try {
      c.value.isLoading = !0;
      const { data: { session: f }, error: h } = await z.auth.getSession();
      if (h) {
        console.error("Error checking auth status:", h), c.value = {
          user: null,
          isAuthenticated: !1,
          isLoading: !1,
          error: h.message
        };
        return;
      }
      f != null && f.user ? (c.value = {
        user: {
          id: f.user.id,
          email: f.user.email || "",
          name: ((i = f.user.user_metadata) == null ? void 0 : i.full_name) || ((r = f.user.user_metadata) == null ? void 0 : r.name) || ((w = f.user.email) == null ? void 0 : w.split("@")[0]) || "User",
          avatar_url: ((o = f.user.user_metadata) == null ? void 0 : o.avatar_url) || ((L = f.user.user_metadata) == null ? void 0 : L.picture) || null,
          initials: (((P = f.user.user_metadata) == null ? void 0 : P.full_name) || ((x = f.user.user_metadata) == null ? void 0 : x.name) || ((C = f.user.email) == null ? void 0 : C.split("@")[0]) || "U").split(" ").map((l) => l[0]).join("").toUpperCase().substring(0, 2)
        },
        isAuthenticated: !0,
        isLoading: !1,
        error: null
      }, f.access_token && oe(te, f.access_token), f.refresh_token && oe(re, f.refresh_token), ke()) : c.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      };
    } catch (f) {
      console.error("Auth check failed:", f), c.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: f.message || "Authentication check failed"
      };
    }
  }, I = async (i, r) => {
    try {
      const { error: w } = await z.auth.signInWithPassword({
        email: i,
        password: r
      });
      return w ? { success: !1, error: w.message } : (await d(), sessionStorage.setItem("post-login-redirect", u.value), { success: !0 });
    } catch (w) {
      return console.error("Login error:", w), { success: !1, error: w.message || "Login failed" };
    }
  }, E = async (i, r) => {
    var w;
    try {
      const { data: o, error: L } = await z.auth.signUp({
        email: i,
        password: r
      });
      return L ? { success: !1, error: L.message } : o.user && !o.user.email_confirmed_at ? { success: !0, needsConfirmation: !0 } : (w = o.session) != null && w.user ? (await d(), sessionStorage.setItem("post-login-redirect", u.value), { success: !0 }) : { success: !1, error: "No session created" };
    } catch (o) {
      return console.error("Signup error:", o), { success: !1, error: o.message || "Signup failed" };
    }
  }, U = async (i) => {
    try {
      const r = `${window.location.origin}/auth/callback`;
      console.log("[OAuth] Starting login with provider:", i), console.log("[OAuth] Redirect URL:", r), console.log("[OAuth] Current URL:", u.value), console.log("[OAuth] Current origin:", window.location.origin);
      const { error: w } = await z.auth.signInWithOAuth({
        provider: i,
        options: {
          redirectTo: r,
          queryParams: {
            redirect_origin: u.value
          }
        }
      });
      if (w)
        return console.error("[OAuth] Error:", w), { success: !1, error: w.message };
      const o = u.value || window.location.href;
      return sessionStorage.setItem("post-login-redirect", o), localStorage.setItem("post-login-redirect", o), console.log("[OAuth] Stored redirect URL:", o), console.log("[OAuth] Current URL value:", u.value), console.log("[OAuth] Window location href:", window.location.href), { success: !0 };
    } catch (r) {
      return console.error("OAuth login error:", r), { success: !1, error: r.message || "OAuth login failed" };
    }
  }, V = async () => {
    try {
      const { error: i } = await z.auth.signOut();
      i && console.error("Logout error:", i), c.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      }, se(te), se(re), he();
    } catch (i) {
      console.error("Logout error:", i);
    }
  }, T = async (i) => {
    try {
      const { error: r } = await z.auth.resetPasswordForEmail(i, {
        redirectTo: `${window.location.origin}/auth/reset-password`
      });
      return r ? { success: !1, error: r.message } : { success: !0 };
    } catch (r) {
      return console.error("Password reset error:", r), { success: !1, error: r.message || "Password reset failed" };
    }
  }, A = () => {
    z.auth.onAuthStateChange((i, r) => {
      var w;
      switch (console.log("Auth state changed:", i, (w = r == null ? void 0 : r.user) == null ? void 0 : w.email), i) {
        case "SIGNED_IN":
          r != null && r.user && d();
          break;
        case "SIGNED_OUT":
          c.value = {
            user: null,
            isAuthenticated: !1,
            isLoading: !1,
            error: null
          }, se(te), se(re), he();
          break;
        case "TOKEN_REFRESHED":
          r != null && r.access_token && oe(te, r.access_token), r != null && r.refresh_token && oe(re, r.refresh_token), ke();
          break;
        case "USER_UPDATED":
          r != null && r.user && d();
          break;
      }
    });
  };
  return ne(async () => {
    A(), await d();
  }), Z(() => window.location.href, (i) => {
    u.value = i;
  }), {
    authState: H(() => c.value),
    isAuthenticated: H(() => c.value.isAuthenticated),
    user: H(() => c.value.user),
    isLoading: H(() => c.value.isLoading),
    checkAuthStatus: d,
    loginWithEmail: I,
    signupWithEmail: E,
    loginWithProvider: U,
    logout: V,
    resetPassword: T,
    currentUrl: H(() => u.value)
  };
}
const Qe = { class: "login-container" }, Ze = { class: "logo-section" }, ea = { class: "login-buttons" }, aa = {
  key: 0,
  class: "forgot-password"
}, sa = { class: "signup-link" }, ta = /* @__PURE__ */ Q({
  __name: "LoginModal",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue", "login-success"],
  setup(c, { emit: u }) {
    const d = c, I = u, E = H({
      get: () => d.modelValue,
      set: (k) => I("update:modelValue", k)
    }), U = $(!1), V = $(!1), T = $(), { loginWithEmail: A, signupWithEmail: i, loginWithProvider: r, resetPassword: w } = Ye(), o = Re({
      email: "",
      password: "",
      confirmPassword: ""
    }), L = H(() => ({
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
            validator: (k, g, B) => {
              g !== o.password ? B(new Error("Passwords do not match")) : B();
            },
            trigger: "blur"
          }
        ]
      } : {}
    })), P = () => {
      var k;
      U.value = !U.value, o.email = "", o.password = "", o.confirmPassword = "", (k = T.value) == null || k.clearValidate();
    }, x = () => {
      var k;
      E.value = !1, o.email = "", o.password = "", o.confirmPassword = "", U.value = !1, (k = T.value) == null || k.clearValidate();
    }, C = async () => {
      if (T.value)
        try {
          await T.value.validate(), V.value = !0, U.value ? await h() : await f();
        } catch (k) {
          console.error("Form validation failed:", k);
        } finally {
          V.value = !1;
        }
    }, f = async () => {
      const k = await A(o.email, o.password);
      k.success ? (D.success("Login successful"), I("login-success", { email: o.email }), x()) : D.error("Login failed: " + k.error);
    }, h = async () => {
      const k = await i(o.email, o.password);
      k.success ? k.needsConfirmation ? D.success("Please check your email to confirm your account") : (D.success("Account created successfully"), I("login-success", { email: o.email }), x()) : D.error("Signup failed: " + k.error);
    }, l = async (k) => {
      const g = await r(k);
      g.success ? D.success("Redirecting to login provider...") : D.error("Login failed: " + g.error);
    }, S = async () => {
      if (!o.email) {
        D.warning("Please enter your email address first");
        return;
      }
      const k = await w(o.email);
      k.success ? D.success("Password reset email sent! Please check your inbox.") : D.error("Failed to send reset email: " + k.error);
    };
    return (k, g) => {
      const B = K("el-icon"), G = K("el-input"), N = K("el-form-item"), R = K("el-button"), y = K("el-dialog");
      return m(), J(y, {
        modelValue: E.value,
        "onUpdate:modelValue": g[6] || (g[6] = (O) => E.value = O),
        title: "",
        width: "500px",
        "close-on-click-modal": !1,
        "close-on-press-escape": !0,
        "show-close": !0,
        class: "login-modal",
        onClose: x
      }, {
        default: p(() => [
          t("div", Qe, [
            t("div", Ze, [
              t("h2", null, M(U.value ? "Create Account" : "Welcome Back"), 1),
              t("p", null, M(U.value ? "Sign up to get started with your account" : "Sign in to continue to your account"), 1)
            ]),
            _(Y(Me), {
              model: o,
              rules: L.value,
              ref_key: "formRef",
              ref: T,
              class: "login-form",
              onSubmit: ee(C, ["prevent"])
            }, {
              default: p(() => [
                _(N, { prop: "email" }, {
                  default: p(() => [
                    _(G, {
                      modelValue: o.email,
                      "onUpdate:modelValue": g[0] || (g[0] = (O) => o.email = O),
                      placeholder: "Email",
                      type: "email",
                      size: "large",
                      class: "form-input"
                    }, {
                      prefix: p(() => [
                        _(B, null, {
                          default: p(() => [
                            _(Y(Ge))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                _(N, { prop: "password" }, {
                  default: p(() => [
                    _(G, {
                      modelValue: o.password,
                      "onUpdate:modelValue": g[1] || (g[1] = (O) => o.password = O),
                      placeholder: "Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: p(() => [
                        _(B, null, {
                          default: p(() => [
                            _(Y(Ce))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                U.value ? (m(), J(N, {
                  key: 0,
                  prop: "confirmPassword"
                }, {
                  default: p(() => [
                    _(G, {
                      modelValue: o.confirmPassword,
                      "onUpdate:modelValue": g[2] || (g[2] = (O) => o.confirmPassword = O),
                      placeholder: "Confirm Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: p(() => [
                        _(B, null, {
                          default: p(() => [
                            _(Y(Ce))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                })) : F("", !0),
                _(N, null, {
                  default: p(() => [
                    _(R, {
                      type: "primary",
                      class: "submit-button",
                      loading: V.value,
                      onClick: C,
                      size: "large"
                    }, {
                      default: p(() => [
                        q(M(U.value ? "Sign Up" : "Sign In"), 1)
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model", "rules"]),
            g[10] || (g[10] = t("div", { class: "divider" }, [
              t("span", null, "Or continue with")
            ], -1)),
            t("div", ea, [
              _(R, {
                class: "login-button google",
                onClick: g[3] || (g[3] = (O) => l("google")),
                size: "large"
              }, {
                default: p(() => [...g[7] || (g[7] = [
                  t("span", { class: "social-icon" }, "G", -1),
                  q(" Google ", -1)
                ])]),
                _: 1
              }),
              _(R, {
                class: "login-button github",
                onClick: g[4] || (g[4] = (O) => l("github")),
                size: "large"
              }, {
                default: p(() => [...g[8] || (g[8] = [
                  t("span", { class: "social-icon" }, "⚡", -1),
                  q(" GitHub ", -1)
                ])]),
                _: 1
              }),
              _(R, {
                class: "login-button twitter",
                onClick: g[5] || (g[5] = (O) => l("twitter")),
                size: "large"
              }, {
                default: p(() => [...g[9] || (g[9] = [
                  t("span", { class: "social-icon" }, "X", -1),
                  q(" X (Twitter) ", -1)
                ])]),
                _: 1
              })
            ]),
            g[11] || (g[11] = t("div", { class: "terms" }, " By continuing, you agree to AI Workspace's Terms of Service and Privacy Policy ", -1)),
            U.value ? F("", !0) : (m(), W("div", aa, [
              t("a", {
                href: "#",
                onClick: ee(S, ["prevent"])
              }, "Forgot Password?")
            ])),
            t("div", sa, [
              q(M(U.value ? "Already have an account?" : "Don't have an account?") + " ", 1),
              t("a", {
                href: "#",
                onClick: ee(P, ["prevent"])
              }, M(U.value ? "Sign in" : "Sign up"), 1)
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
const ge = (c, u) => {
  const d = c.__vccOpts || c;
  for (const [I, E] of u)
    d[I] = E;
  return d;
}, ra = /* @__PURE__ */ ge(ta, [["__scopeId", "data-v-684a3f28"]]), oa = { class: "aiworkspace-header" }, la = {
  key: 0,
  class: "header-content header-loading"
}, na = {
  key: 1,
  class: "header-content header-fallback"
}, ia = {
  key: 2,
  class: "header-content"
}, ca = { class: "header-left" }, ua = { class: "logo-section" }, da = {
  href: "/",
  class: "logo"
}, pa = ["src"], fa = {
  key: 1,
  class: "text-logo"
}, wa = {
  key: 0,
  class: "header-center"
}, ha = { class: "main-navigation" }, ka = { class: "nav-item" }, ga = {
  href: "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard",
  class: "nav-link"
}, va = { class: "workspace-dropdown-item" }, ma = ["href"], _a = { class: "workspace-icon" }, ya = {
  key: 1,
  class: "nav-divider"
}, ba = { class: "nav-item" }, Sa = ["href", "onClick"], Aa = { class: "header-right" }, Ca = { class: "user-profile" }, Wa = { class: "user-info" }, Ia = { class: "user-name" }, La = { class: "user-avatar" }, Ua = ["src", "alt"], Pa = {
  key: 1,
  class: "avatar-placeholder"
}, $a = {
  key: 3,
  class: "header-content header-unauthenticated"
}, Ea = { class: "header-left" }, xa = { class: "logo-section" }, Na = {
  href: "/",
  class: "logo"
}, Oa = ["src"], Ra = {
  key: 1,
  class: "text-logo"
}, Va = { class: "header-right" }, Ma = { class: "workspace-list" }, Da = ["onClick"], Ta = { class: "workspace-icon" }, za = { class: "workspace-details" }, Ha = { class: "workspace-members" }, Ba = {
  key: 0,
  class: "current-indicator"
}, le = 50, Fa = /* @__PURE__ */ Q({
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
    const d = c, I = u, { authState: E, logout: U } = je(), V = () => {
      try {
        return Xe();
      } catch {
        return console.warn("[AIWorkspaceHeader] Pinia not initialized yet, using fallback state"), null;
      }
    }, T = () => {
      try {
        return typeof window < "u" ? !!window.__PINIA__ || !!window.Pinia : !1;
      } catch {
        return !1;
      }
    }, A = $(V()), i = H(() => !!A.value), r = $(0), w = () => {
      if (!A.value && r.value < le) {
        if (T()) {
          const a = V();
          if (a) {
            A.value = a, console.log("[AIWorkspaceHeader] Pinia store initialized successfully");
            return;
          }
        }
        r.value++, setTimeout(w, 100);
      } else
        r.value >= le && console.warn("[AIWorkspaceHeader] Pinia initialization failed after maximum retries, using fallback mode");
    };
    ne(() => {
      A.value || w();
    });
    const o = $(!1), L = $(!1), P = $([]), x = $([]), C = $({
      name: "",
      email: "",
      avatar_url: null,
      initials: ""
    }), f = $([]), h = $([]), l = $(!1);
    Z(h, async (a) => {
      a.length > 0 && i.value && G.value && await B();
    }, { immediate: !1 }), Z(() => window.location.pathname + window.location.search + window.location.hash, async () => {
      i.value && G.value && await B();
    }, { immediate: !1 });
    const S = $(window.location.pathname);
    Z(() => window.location.pathname, (a) => {
      S.value = a;
    }, { immediate: !0 }), Z(i, (a) => {
      !a && r.value < le && w();
    });
    const k = () => {
      try {
        const a = window.location.pathname.match(/\/single-workspace\/(\d+)/);
        if (a)
          return a[1];
        const s = new URLSearchParams(window.location.search).get("workspace_id");
        if (s)
          return s;
        const n = window.location.hash.match(/workspace_id=(\d+)/);
        return n ? n[1] : null;
      } catch (a) {
        return console.warn("[AIWorkspaceHeader] Error parsing URL for workspace_id:", a), null;
      }
    }, g = () => {
      try {
        return window.location.pathname.includes("/all-workspace/");
      } catch (a) {
        return console.warn("[AIWorkspaceHeader] Error checking all-workspace mode:", a), !1;
      }
    }, B = async () => {
      if (!A.value || !i.value)
        return;
      const a = g();
      if (l.value = a, a) {
        A.value.currentWorkspace = null, localStorage.removeItem("current_workspace"), console.log("[AIWorkspaceHeader] Auto-selected all-workspace mode from URL");
        return;
      }
      const e = k();
      if (e)
        try {
          h.value.length === 0 && await me();
          const s = h.value.find((n) => n.id.toString() === e);
          s ? (A.value.setCurrentWorkspace(s), console.log(`[AIWorkspaceHeader] Auto-selected workspace from URL: ${s.title} (ID: ${s.id})`), I("workspaceChange", s)) : console.warn(`[AIWorkspaceHeader] Workspace with ID ${e} not found in available workspaces`);
        } catch (s) {
          console.error("[AIWorkspaceHeader] Error auto-selecting workspace from URL:", s);
        }
    }, G = H(() => E.value.isAuthenticated), N = H(() => A.value ? A.value.currentWorkspace : null), R = $([
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
    ]), y = $([
      { label: "Dashboard", key: "dashboard", url: "/dashboard" },
      { label: "All Tasks", key: "tasks", url: "/tasks" },
      { label: "All Goals", key: "goals", url: "/goals" },
      { label: "All Events", key: "events", url: "/events" },
      { label: "All Drive", key: "files", url: "/files" },
      { label: "All Contacts", key: "contacts", url: "/contacts" },
      { label: "All Settings", key: "settings", url: "/settings" }
    ]), O = H(() => l.value ? y.value : R.value), We = H(() => {
      try {
        const a = S.value;
        let e = "";
        const s = a.match(/\/all-workspace\/([^\/]+)/);
        if (s)
          e = s[1];
        else {
          const n = a.match(/\/single-workspace\/\d+\/([^\/]+)/);
          if (n)
            e = n[1];
          else {
            const b = a.match(/\/([^\/]+)$/);
            b && (e = b[1]);
          }
        }
        if (e) {
          const n = O.value.find(
            (b) => b.key === e || b.url.includes(`/${e}`) || b.url === `/${e}`
          );
          if (n)
            return n.label;
        }
        return "Dashboard";
      } catch (a) {
        return console.warn("[AIWorkspaceHeader] Error determining current section:", a), "Dashboard";
      }
    }), Ie = (a) => {
      const e = /* @__PURE__ */ new Map();
      a.forEach((b) => {
        e.set(b.id, { ...b, children: [] });
      });
      const s = [];
      e.forEach((b) => {
        b.parent_workspace_id && e.has(b.parent_workspace_id) ? e.get(b.parent_workspace_id).children.push(b) : s.push(b);
      });
      const n = (b) => {
        b.sort((j, X) => j.title.localeCompare(X.title)), b.forEach((j) => {
          j.children && n(j.children);
        });
      };
      return n(s), s;
    }, ve = (a, e = 0, s = []) => (a.forEach((n) => {
      s.push({ ...n, level: e }), n.children && n.children.length && ve(n.children, e + 1, s);
    }), s), me = async () => {
      var a, e, s;
      try {
        const n = await ((a = A.value) == null ? void 0 : a.loadWorkspaces());
        if (f.value = Ie(n || []), h.value = ve(f.value), x.value = h.value, P.value = h.value, d.currentWorkspaceId) {
          const b = h.value.find((j) => {
            var X;
            return j.id.toString() === ((X = d.currentWorkspaceId) == null ? void 0 : X.toString());
          });
          b && ((e = A.value) == null || e.setCurrentWorkspace(b));
        } else
          !N.value && h.value.length && ((s = A.value) == null || s.setCurrentWorkspace(h.value[0]));
      } catch (n) {
        console.error("loadWorkspaces (header) error", n);
      }
    }, Le = (a) => {
      if (console.log("Navigation command:", a), a === "all-workspace") {
        window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
        return;
      } else {
        const e = parseInt(a.replace("workspace-", ""));
        window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e}/dashboard`;
        return;
      }
    }, Ue = (a) => {
      const e = N.value, s = l.value;
      switch (a.key) {
        case "dashboard":
          s ? window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard" : e ? window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e.id}/dashboard` : window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
          break;
        case "outlines":
          if (s)
            window.location.href = "https://outline.aiworkspace.pro/all-workspace/outlines";
          else if (e) {
            const n = `https://outline.aiworkspace.pro/single-workspace/${e.id}/outlines`;
            window.location.href = n;
          } else
            window.location.href = "https://outline.aiworkspace.pro";
          break;
        case "canvas":
          if (s)
            window.location.href = "https://canvas.aiworkspace.pro/all-workspace/canvas";
          else if (e) {
            const n = `https://canvas.aiworkspace.pro/single-workspace/${e.id}/canvas`;
            window.location.href = n;
          } else
            window.location.href = "https://canvas.aiworkspace.pro";
          break;
        case "files":
          if (s)
            window.location.href = "https://drive.aiworkspace.pro/all-workspace/files";
          else if (e) {
            const n = `https://drive.aiworkspace.pro/single-workspace/${e.id}/files`;
            window.location.href = n;
          } else
            window.location.href = "https://drive.aiworkspace.pro";
          break;
        case "tasks":
          if (s)
            window.location.href = "https://tasks.aiworkspace.pro/all-workspace/tasks";
          else if (e) {
            const n = `https://tasks.aiworkspace.pro/single-workspace/${e.id}/tasks`;
            window.location.href = n;
          } else
            window.location.href = "https://tasks.aiworkspace.pro";
          break;
        case "goals":
          if (s)
            window.location.href = "https://app.aiworkspace.pro/all-workspace/goals";
          else if (e) {
            const n = `https://app.aiworkspace.pro/single-workspace/${e.id}/goals`;
            window.location.href = n;
          } else
            window.location.href = "https://app.aiworkspace.pro/all-workspace/goals";
          break;
        case "events":
          if (s)
            window.location.href = "https://app.aiworkspace.pro/all-workspace/events";
          else if (e) {
            const n = `https://app.aiworkspace.pro/single-workspace/${e.id}/events`;
            window.location.href = n;
          } else
            window.location.href = "https://app.aiworkspace.pro/all-workspace/events";
          break;
        case "contacts":
          if (s)
            window.location.href = "https://app.aiworkspace.pro/all-workspace/contacts";
          else if (e) {
            const n = `https://app.aiworkspace.pro/single-workspace/${e.id}/contacts`;
            window.location.href = n;
          } else
            window.location.href = "https://app.aiworkspace.pro/all-workspace/contacts";
          break;
        case "ai-portfolios":
          if (s)
            window.location.href = "https://spreadsheet.aiworkspace.pro/all-workspace/ai-portfolios";
          else if (e) {
            const n = `https://spreadsheet.aiworkspace.pro/single-workspace/${e.id}/ai-portfolios`;
            window.location.href = n;
          } else
            window.location.href = "https://spreadsheet.aiworkspace.pro";
          break;
        case "settings":
          if (s)
            window.location.href = "https://settings.aiworkspace.pro/all-workspace/settings";
          else if (e) {
            const n = `https://settings.aiworkspace.pro/single-workspace/${e.id}/settings`;
            window.location.href = n;
          } else
            window.location.href = "https://settings.aiworkspace.pro";
          break;
        default:
          if (s) {
            const n = `https://app.aiworkspace.pro/all-workspace/${a.key}`;
            window.location.href = n;
          } else if (e) {
            const n = `https://app.aiworkspace.pro/single-workspace/${e.id}/${a.key}`;
            window.location.href = n;
          } else {
            const n = `https://app.aiworkspace.pro/${a.key}`;
            window.location.href = n;
          }
          break;
      }
    }, Pe = (a) => {
      const e = N.value, s = l.value;
      switch (a.key) {
        case "dashboard":
          return s ? "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard" : e ? `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e.id}/dashboard` : "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
        case "ai-portfolios":
          return s ? "https://spreadsheet.aiworkspace.pro/all-workspace/ai-portfolios" : e ? `https://spreadsheet.aiworkspace.pro/single-workspace/${e.id}/ai-portfolios` : "https://spreadsheet.aiworkspace.pro";
        case "outlines":
          return s ? "https://outline.aiworkspace.pro/all-workspace/outlines" : e ? `https://outline.aiworkspace.pro/single-workspace/${e.id}/outlines` : "https://outline.aiworkspace.pro";
        case "canvas":
          return s ? "https://canvas.aiworkspace.pro/all-workspace/canvas" : e ? `https://canvas.aiworkspace.pro/single-workspace/${e.id}/canvas` : "https://canvas.aiworkspace.pro";
        case "files":
          return s ? "https://drive.aiworkspace.pro/all-workspace/files" : e ? `https://drive.aiworkspace.pro/single-workspace/${e.id}/files` : "https://drive.aiworkspace.pro";
        case "tasks":
          return s ? "https://tasks.aiworkspace.pro/all-workspace/tasks" : e ? `https://tasks.aiworkspace.pro/single-workspace/${e.id}/tasks` : "https://tasks.aiworkspace.pro";
        case "goals":
          return s ? "https://app.aiworkspace.pro/all-workspace/goals" : e ? `https://app.aiworkspace.pro/single-workspace/${e.id}/goals` : "https://app.aiworkspace.pro/all-workspace/goals";
        case "events":
          return s ? "https://app.aiworkspace.pro/all-workspace/events" : e ? `https://app.aiworkspace.pro/single-workspace/${e.id}/events` : "https://app.aiworkspace.pro/all-workspace/events";
        case "contacts":
          return s ? "https://app.aiworkspace.pro/all-workspace/contacts" : e ? `https://app.aiworkspace.pro/single-workspace/${e.id}/contacts` : "https://app.aiworkspace.pro/all-workspace/contacts";
        case "settings":
          return s ? "https://settings.aiworkspace.pro/all-workspace/settings" : e ? `https://settings.aiworkspace.pro/single-workspace/${e.id}/settings` : "https://settings.aiworkspace.pro";
        default:
          return s ? `https://app.aiworkspace.pro/all-workspace/${a.key}` : e ? `https://app.aiworkspace.pro/single-workspace/${e.id}/${a.key}` : `https://app.aiworkspace.pro/${a.key}`;
      }
    }, ie = (a) => {
      switch (a) {
        case "profile":
          d.onProfileClick ? d.onProfileClick() : D.info("Profile settings coming soon");
          break;
        case "workspaces":
          o.value = !0;
          break;
        case "logout":
          Ee();
          break;
      }
    }, _e = (a) => {
      var e;
      (e = A.value) == null || e.setCurrentWorkspace(a), o.value = !1, I("workspaceChange", a), D.success(`Switched to ${a.title}`);
    }, $e = () => {
      be.prompt("Enter workspace name:", "Create New Workspace", {
        confirmButtonText: "Create",
        cancelButtonText: "Cancel",
        inputPattern: /\S/,
        inputErrorMessage: "Workspace name cannot be empty"
      }).then(({ value: a }) => {
        var s;
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
        P.value.push(e), (s = A.value) == null || s.setWorkspaces(P.value), _e(e), D.success(`Created workspace: ${a}`);
      }).catch(() => {
      });
    }, Ee = () => {
      be.confirm(
        "Are you sure you want to sign out?",
        "Sign Out",
        {
          confirmButtonText: "Sign Out",
          cancelButtonText: "Cancel",
          type: "warning"
        }
      ).then(async () => {
        var a;
        (a = A.value) == null || a.clearData(), await U(), I("logout"), D.success("Signed out successfully");
      }).catch(() => {
      });
    }, ce = async () => {
      var a, e;
      if (E.value.user) {
        const s = E.value.user;
        C.value = {
          name: s.name || ((a = s.email) == null ? void 0 : a.split("@")[0]) || "User",
          email: s.email || "",
          avatar_url: s.avatar_url || null,
          initials: (s.name || ((e = s.email) == null ? void 0 : e.split("@")[0]) || "U").split(" ").map((n) => n[0]).join("").toUpperCase().substring(0, 2)
        }, d.showWorkspaceSelector && await me();
      }
    };
    Z(() => E.value.user, (a) => {
      var e;
      a ? ce() : (C.value = { name: "", email: "", avatar_url: null, initials: "" }, (e = A.value) == null || e.clearData());
    }), Z(() => d.currentWorkspaceId, (a) => {
      var e;
      if (a && h.value.length) {
        const s = h.value.find((n) => n.id.toString() === a.toString());
        s && ((e = A.value) == null || e.setCurrentWorkspace(s));
      }
    }), ne(async () => {
      G.value && (await ce(), await B());
    });
    const xe = async (a) => {
      console.log("Login successful:", a), L.value = !1, await ce(), I("login"), D.success("Welcome back!");
    }, Ne = () => {
      r.value = 0, w(), D.success("Manual Pinia retry initiated.");
    };
    return (a, e) => {
      const s = K("el-icon"), n = K("el-tag"), b = K("el-dropdown-item"), j = K("el-dropdown-menu"), X = K("el-dropdown"), ue = K("el-button"), Oe = K("el-dialog");
      return m(), W("header", oa, [
        !i.value && r.value < le ? (m(), W("div", la, [...e[8] || (e[8] = [
          de('<div class="header-left" data-v-f830d242><div class="logo-section" data-v-f830d242><a href="/" class="logo" data-v-f830d242><div class="text-logo" data-v-f830d242><span class="logo-text" data-v-f830d242>AI Workspace</span></div></a></div></div><div class="header-center" data-v-f830d242><span class="loading-text" data-v-f830d242>Initializing...</span></div>', 2)
        ])])) : !i.value && r.value >= le ? (m(), W("div", na, [
          e[10] || (e[10] = de('<div class="header-left" data-v-f830d242><div class="logo-section" data-v-f830d242><a href="/" class="logo" data-v-f830d242><div class="text-logo" data-v-f830d242><span class="logo-text" data-v-f830d242>AI Workspace</span></div></a></div></div>', 1)),
          t("div", { class: "header-center" }, [
            e[9] || (e[9] = t("span", { class: "fallback-text" }, "Header Ready (Fallback Mode)", -1)),
            t("button", {
              onClick: Ne,
              class: "retry-button"
            }, "Retry Pinia")
          ]),
          e[11] || (e[11] = de('<div class="header-right" data-v-f830d242><div class="user-profile" data-v-f830d242><div class="user-info" data-v-f830d242><span class="user-name" data-v-f830d242>User</span></div><div class="user-avatar" data-v-f830d242><span class="avatar-placeholder" data-v-f830d242>U</span></div></div></div>', 1))
        ])) : G.value ? (m(), W("div", ia, [
          t("div", ca, [
            t("div", ua, [
              t("a", da, [
                a.customLogo ? (m(), W("img", {
                  key: 0,
                  src: a.customLogo,
                  alt: "AIWorkspace",
                  class: "logo-image"
                }, null, 8, pa)) : (m(), W("div", fa, [...e[12] || (e[12] = [
                  t("span", { class: "logo-text" }, "AI Workspace", -1)
                ])]))
              ])
            ])
          ]),
          a.showSecondaryNavigation ? (m(), W("div", wa, [
            t("nav", ha, [
              a.showWorkspaceSelector ? (m(), J(X, {
                key: 0,
                onCommand: Le,
                trigger: "hover"
              }, {
                dropdown: p(() => [
                  _(j, { class: "workspace-tree-dropdown" }, {
                    default: p(() => [
                      _(b, {
                        command: "all-workspace",
                        class: pe({ active: l.value })
                      }, {
                        default: p(() => [
                          t("a", ga, [
                            t("div", va, [
                              e[14] || (e[14] = t("span", { class: "workspace-icon" }, "🌐", -1)),
                              e[15] || (e[15] = t("span", null, "All workspace", -1)),
                              l.value ? (m(), J(n, {
                                key: 0,
                                size: "small",
                                type: "success"
                              }, {
                                default: p(() => [...e[13] || (e[13] = [
                                  q("Current", -1)
                                ])]),
                                _: 1
                              })) : F("", !0)
                            ])
                          ])
                        ]),
                        _: 1
                      }, 8, ["class"]),
                      h.value.length > 0 ? (m(), J(b, {
                        key: 0,
                        divided: "",
                        disabled: ""
                      })) : F("", !0),
                      (m(!0), W(fe, null, we(h.value, (v) => (m(), J(b, {
                        key: v.id,
                        command: `workspace-${v.id}`
                      }, {
                        default: p(() => {
                          var ae;
                          return [
                            t("a", {
                              href: `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${v.id}/dashboard`,
                              class: "nav-link"
                            }, [
                              t("div", {
                                class: "workspace-dropdown-item",
                                style: Ve({ paddingLeft: (v.level || 0) * 16 + "px" })
                              }, [
                                t("span", _a, M(v.children && v.children.length ? "📁" : "📄"), 1),
                                t("span", null, M(v.title), 1),
                                v.id === ((ae = N.value) == null ? void 0 : ae.id) ? (m(), J(n, {
                                  key: 0,
                                  size: "small",
                                  type: "success"
                                }, {
                                  default: p(() => [...e[16] || (e[16] = [
                                    q("Current", -1)
                                  ])]),
                                  _: 1
                                })) : F("", !0)
                              ], 4)
                            ], 8, ma)
                          ];
                        }),
                        _: 2
                      }, 1032, ["command"]))), 128)),
                      h.value.length === 0 ? (m(), J(b, {
                        key: 1,
                        disabled: ""
                      }, {
                        default: p(() => [...e[17] || (e[17] = [
                          q(" No workspaces ", -1)
                        ])]),
                        _: 1
                      })) : F("", !0)
                    ]),
                    _: 1
                  })
                ]),
                default: p(() => {
                  var v;
                  return [
                    t("span", ka, [
                      q(M(l.value ? "All workspace" : ((v = N.value) == null ? void 0 : v.title) || "Select Workspace") + " ", 1),
                      _(s, { class: "nav-arrow" }, {
                        default: p(() => [
                          _(Y(Ae))
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }),
                _: 1
              })) : F("", !0),
              a.showWorkspaceSelector ? (m(), W("span", ya, "/")) : F("", !0),
              a.showSecondaryNavigation ? (m(), J(X, {
                key: 2,
                trigger: "hover"
              }, {
                dropdown: p(() => [
                  _(j, null, {
                    default: p(() => [
                      (m(!0), W(fe, null, we(O.value, (v) => (m(), J(b, {
                        key: v.label,
                        class: pe({ active: v.active })
                      }, {
                        default: p(() => [
                          t("a", {
                            href: Pe(v),
                            class: "nav-link",
                            onClick: ee((ae) => Ue(v), ["prevent"])
                          }, M(v.label), 9, Sa)
                        ]),
                        _: 2
                      }, 1032, ["class"]))), 128))
                    ]),
                    _: 1
                  })
                ]),
                default: p(() => [
                  t("span", ba, [
                    q(M(We.value) + " ", 1),
                    _(s, { class: "nav-arrow" }, {
                      default: p(() => [
                        _(Y(Ae))
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })) : F("", !0)
            ])
          ])) : F("", !0),
          t("div", Aa, [
            _(X, {
              onCommand: ie,
              trigger: "click",
              placement: "bottom-end"
            }, {
              dropdown: p(() => [
                _(j, null, {
                  default: p(() => [
                    _(b, null, {
                      default: p(() => [
                        t("a", {
                          href: "/profile",
                          class: "nav-link",
                          onClick: e[0] || (e[0] = ee((v) => ie("profile"), ["prevent"]))
                        }, "Profile Settings")
                      ]),
                      _: 1
                    }),
                    a.showWorkspaceSelector ? (m(), J(b, { key: 0 }, {
                      default: p(() => [
                        t("a", {
                          href: "#switch-workspace",
                          class: "nav-link",
                          onClick: e[1] || (e[1] = ee((v) => ie("workspaces"), ["prevent"]))
                        }, "Switch Workspace")
                      ]),
                      _: 1
                    })) : F("", !0),
                    _(b, { divided: "" }, {
                      default: p(() => [
                        t("a", {
                          href: "#signout",
                          class: "nav-link",
                          onClick: e[2] || (e[2] = ee((v) => ie("logout"), ["prevent"]))
                        }, "Sign Out")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              default: p(() => [
                t("div", Ca, [
                  t("div", Wa, [
                    t("span", Ia, M(C.value.name), 1)
                  ]),
                  t("div", La, [
                    C.value.avatar_url ? (m(), W("img", {
                      key: 0,
                      src: C.value.avatar_url,
                      alt: C.value.name
                    }, null, 8, Ua)) : (m(), W("span", Pa, M(C.value.initials), 1))
                  ])
                ])
              ]),
              _: 1
            })
          ])
        ])) : (m(), W("div", $a, [
          t("div", Ea, [
            t("div", xa, [
              t("a", Na, [
                a.customLogo ? (m(), W("img", {
                  key: 0,
                  src: a.customLogo,
                  alt: "AIWorkspace",
                  class: "logo-image"
                }, null, 8, Oa)) : (m(), W("div", Ra, [...e[18] || (e[18] = [
                  t("span", { class: "logo-text" }, "AI Workspace", -1)
                ])]))
              ])
            ])
          ]),
          e[20] || (e[20] = t("div", { class: "header-center" }, [
            t("span", { class: "welcome-text" }, "Welcome to AI Workspace")
          ], -1)),
          t("div", Va, [
            _(ue, {
              type: "primary",
              size: "large",
              class: "login-button",
              onClick: e[3] || (e[3] = (v) => L.value = !0)
            }, {
              default: p(() => [
                _(s, null, {
                  default: p(() => [
                    _(Y(Ke))
                  ]),
                  _: 1
                }),
                e[19] || (e[19] = q(" Login / Signup ", -1))
              ]),
              _: 1
            })
          ])
        ])),
        G.value && a.showWorkspaceSelector ? (m(), J(Oe, {
          key: 4,
          modelValue: o.value,
          "onUpdate:modelValue": e[5] || (e[5] = (v) => o.value = v),
          title: "Switch Workspace",
          width: "500px",
          onClose: e[6] || (e[6] = (v) => o.value = !1)
        }, {
          footer: p(() => [
            _(ue, {
              onClick: e[4] || (e[4] = (v) => o.value = !1)
            }, {
              default: p(() => [...e[21] || (e[21] = [
                q("Cancel", -1)
              ])]),
              _: 1
            }),
            _(ue, {
              type: "primary",
              onClick: $e
            }, {
              default: p(() => [...e[22] || (e[22] = [
                q("Create New Workspace", -1)
              ])]),
              _: 1
            })
          ]),
          default: p(() => [
            t("div", Ma, [
              (m(!0), W(fe, null, we(P.value, (v) => {
                var ae, ye;
                return m(), W("div", {
                  key: v.id,
                  class: pe(["workspace-item", { active: v.id === ((ae = N.value) == null ? void 0 : ae.id) }]),
                  onClick: (Ja) => _e(v)
                }, [
                  t("div", Ta, M(v.children && v.children.length ? "📁" : "📄"), 1),
                  t("div", za, [
                    t("h3", null, M(v.title), 1),
                    t("p", null, M(v.description), 1),
                    t("span", Ha, M(v.hasAccess ? "Active" : "Inactive"), 1)
                  ]),
                  v.id === ((ye = N.value) == null ? void 0 : ye.id) ? (m(), W("div", Ba, [
                    _(s, null, {
                      default: p(() => [
                        _(Y(Be))
                      ]),
                      _: 1
                    })
                  ])) : F("", !0)
                ], 10, Da);
              }), 128))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])) : F("", !0),
        _(ra, {
          modelValue: L.value,
          "onUpdate:modelValue": e[7] || (e[7] = (v) => L.value = v),
          onLoginSuccess: xe
        }, null, 8, ["modelValue"])
      ]);
    };
  }
});
const es = /* @__PURE__ */ ge(Fa, [["__scopeId", "data-v-f830d242"]]), qa = { class: "auth-callback" }, Ga = /* @__PURE__ */ Q({
  __name: "AuthCallback",
  setup(c) {
    ne(async () => {
      console.log("[AuthCallback] Component mounted, starting callback processing..."), console.log("[AuthCallback] Current URL:", window.location.href), console.log("[AuthCallback] Current hash:", window.location.hash);
      try {
        await new Promise((E) => setTimeout(E, 500));
        const { data: d, error: I } = await z.auth.getSession();
        if (I) {
          console.error("Error processing callback:", I), u();
          return;
        }
        if (d != null && d.session) {
          const E = d.session.user;
          console.log("OAuth login successful:", E.email), d.session.access_token && oe(te, d.session.access_token), d.session.refresh_token && oe(re, d.session.refresh_token), ke();
          const U = De();
          console.log("[callback] Post-login redirect URL:", U), console.log("[callback] Session storage redirect:", sessionStorage.getItem("post-login-redirect")), console.log("[callback] Local storage redirect:", localStorage.getItem("post-login-redirect"));
          const V = U || "/";
          if (console.log("[callback] Final redirect URL:", V), V.startsWith("/")) {
            const T = window.location.origin, A = `${T}${V}`;
            console.log("[callback] redirecting to:", A, { hostname: window.location.hostname, origin: T }), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
              window.location.href = A;
            }, 100);
          } else
            console.log("[callback] redirecting to absolute URL:", V), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
              window.location.href = V;
            }, 100);
        } else
          u();
      } catch (d) {
        console.error("Error processing callback:", d), u();
      }
    });
    const u = () => {
      const I = window.location.href.replace("/auth/callback", "");
      window.location.href = I;
    };
    return (d, I) => (m(), W("div", qa, [...I[0] || (I[0] = [
      t("div", { class: "callback-container" }, [
        t("div", { class: "loading-spinner" }, [
          t("div", { class: "spinner" })
        ]),
        t("h2", null, "Processing login..."),
        t("p", null, "Please wait while we complete your authentication.")
      ], -1)
    ])]));
  }
});
const as = /* @__PURE__ */ ge(Ga, [["__scopeId", "data-v-acdf6325"]]);
export {
  te as ACCESS_COOKIE,
  es as AIWorkspaceHeader,
  as as AuthCallback,
  ns as LS_ACCESS_KEY,
  is as LS_REFRESH_KEY,
  ra as LoginModal,
  re as REFRESH_COOKIE,
  cs as buildOAuthRedirectUrl,
  he as clearLocalStorageTokens,
  se as clearSessionCookie,
  us as ensureCrossSubdomainCookies,
  ds as getCookie,
  De as getPostLoginBase,
  rs as restoreCrossSubdomainSession,
  Se as restoreSessionWithRetry,
  oe as setSessionCookie,
  os as setupAuthStateListener,
  fs as setupUniversalCallback,
  z as supabase,
  ke as syncCookiesToLocalStorage,
  Ye as useAuth,
  je as useEnhancedAuth,
  Xe as useWorkspaceStore
};
