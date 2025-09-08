import { defineComponent as oe, openBlock as g, createElementBlock as C, createElementVNode as s, ref as P, computed as H, onMounted as ke, watch as te, reactive as Me, resolveComponent as J, createBlock as G, withCtx as h, toDisplayString as N, createVNode as _, unref as ae, withModifiers as le, createCommentVNode as K, createTextVNode as q, createStaticVNode as ye, normalizeClass as be, Fragment as Se, renderList as Ce, normalizeStyle as De } from "vue";
import { ElForm as Te, ElMessage as V, ElMessageBox as Ee } from "element-plus";
import { i as ze, g as Q, r as Ae, s as me } from "./supabase-911934e5.mjs";
import { a as us, b as ds } from "./supabase-911934e5.mjs";
import { clearSessionCookie as ce, ACCESS_COOKIE as ue, REFRESH_COOKIE as de, clearLocalStorageTokens as We, setSessionCookie as pe, syncCookiesToLocalStorage as Ie, getPostLoginBase as He } from "./utils/authRedirect.js";
import { LS_ACCESS_KEY as fs, LS_REFRESH_KEY as hs, buildOAuthRedirectUrl as ws, ensureCrossSubdomainCookies as ks, getCookie as gs } from "./utils/authRedirect.js";
import { defineStore as Fe } from "pinia";
import { setupUniversalCallback as vs } from "./utils/universalCallback.js";
/*! Element Plus Icons Vue v2.3.2 */
var Be = /* @__PURE__ */ oe({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(d) {
    return (p, f) => (g(), C("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      s("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"
      })
    ]));
  }
}), Pe = Be, Ke = /* @__PURE__ */ oe({
  name: "Check",
  __name: "check",
  setup(d) {
    return (p, f) => (g(), C("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      s("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      })
    ]));
  }
}), qe = Ke, Ge = /* @__PURE__ */ oe({
  name: "Lock",
  __name: "lock",
  setup(d) {
    return (p, f) => (g(), C("svg", {
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
}), $e = Ge, Je = /* @__PURE__ */ oe({
  name: "Message",
  __name: "message",
  setup(d) {
    return (p, f) => (g(), C("svg", {
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
}), je = Je, Xe = /* @__PURE__ */ oe({
  name: "User",
  __name: "user",
  setup(d) {
    return (p, f) => (g(), C("svg", {
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
  }), p = P(null), f = H(() => d.value.isAuthenticated), L = H(() => d.value.user), $ = H(() => d.value.isLoading), U = async () => {
    var c, n, r, b, A, E, x, W, k, t, v, u, w, X, Z, F, M, ne, D, fe, ge;
    try {
      console.log("[auth][enhanced] Starting loadUserInfo..."), console.log("[auth][enhanced] Ensuring cross-subdomain cookie synchronization...");
      let T = null, B = "sb-access-token", z = "sb-refresh-token";
      try {
        const y = await import("./utils/authRedirect.js");
        T = y.ensureCrossSubdomainCookies, B = y.ACCESS_COOKIE || "sb-access-token", z = y.REFRESH_COOKIE || "sb-refresh-token", console.log("[auth][enhanced] Successfully imported authRedirect module");
      } catch (y) {
        console.warn("[auth][enhanced] Failed to import authRedirect module:", y), typeof window < "u" && window.ensureCrossSubdomainCookies && (T = window.ensureCrossSubdomainCookies, console.log("[auth][enhanced] Using global ensureCrossSubdomainCookies"));
      }
      T && typeof T == "function" ? (T([B, z]), console.log("[auth][enhanced] Cross-subdomain cookies synchronized")) : console.warn("[auth][enhanced] ensureCrossSubdomainCookies not available, skipping cookie sync"), await new Promise((y) => setTimeout(y, 100));
      let Y = null;
      try {
        const I = await (await Q()).auth.getSession();
        Y = (c = I == null ? void 0 : I.data) == null ? void 0 : c.session;
      } catch (y) {
        console.warn("[auth][enhanced] Error getting Supabase session:", y);
      }
      if (Y && Y.user) {
        console.log("[auth][enhanced] Active Supabase session found");
        const y = Y.user, I = {
          id: y.id,
          name: ((n = y.user_metadata) == null ? void 0 : n.name) || ((r = y.user_metadata) == null ? void 0 : r.user_name) || ((b = y.user_metadata) == null ? void 0 : b.full_name) || ((A = y.email) == null ? void 0 : A.split("@")[0]) || "User",
          email: y.email,
          avatar_url: ((E = y.user_metadata) == null ? void 0 : E.avatar_url) || null,
          user_metadata: y.user_metadata
        };
        return d.value = {
          user: I,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, p.value = {
          user: I,
          access_token: Y.access_token,
          refresh_token: Y.refresh_token
        }, { user: I, session: p.value, error: null };
      }
      console.log("[auth][enhanced] No active session, attempting to restore from cookies...");
      const re = await Ae();
      if (re.success && re.session) {
        console.log("[auth][enhanced] Session restored successfully from cookies");
        const y = re.session.user, I = {
          id: y.id,
          name: ((x = y.user_metadata) == null ? void 0 : x.name) || ((W = y.user_metadata) == null ? void 0 : W.user_name) || ((k = y.user_metadata) == null ? void 0 : k.full_name) || ((t = y.email) == null ? void 0 : t.split("@")[0]) || "User",
          email: y.email,
          avatar_url: ((v = y.user_metadata) == null ? void 0 : v.avatar_url) || null,
          user_metadata: y.user_metadata
        };
        return d.value = {
          user: I,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, p.value = re.session, { user: I, session: p.value, error: null };
      } else {
        console.log("[auth][enhanced] Failed to restore session:", re.error), console.log("[auth][enhanced] Retrying session restoration with extended delay..."), await new Promise((I) => setTimeout(I, 500)), T([B, z]);
        const y = await Ae();
        if (y.success && y.session) {
          console.log("[auth][enhanced] Session restored on retry");
          const I = y.session.user, he = {
            id: I.id,
            name: ((u = I.user_metadata) == null ? void 0 : u.name) || ((w = I.user_metadata) == null ? void 0 : w.user_name) || ((X = I.user_metadata) == null ? void 0 : X.full_name) || ((Z = I.email) == null ? void 0 : Z.split("@")[0]) || "User",
            email: I.email,
            avatar_url: ((F = I.user_metadata) == null ? void 0 : F.avatar_url) || null,
            user_metadata: I.user_metadata
          };
          return d.value = {
            user: he,
            isAuthenticated: !0,
            isLoading: !1,
            error: null
          }, p.value = y.session, { user: he, session: p.value, error: null };
        }
      }
    } catch (T) {
      console.error("Error getting Supabase session:", T), T && typeof T == "object" && "message" in T && typeof T.message == "string" && T.message.includes("ne is not a function") && (console.warn('[auth][enhanced] Caught "ne is not a function" error - this is handled gracefully'), console.warn("[auth][enhanced] The ensureCrossSubdomainCookies function import failed, but continuing..."));
      try {
        const B = await Ae();
        if (B.success && B.session) {
          console.log("[auth][enhanced] Session restored after error");
          const z = B.session.user, Y = {
            id: z.id,
            name: ((M = z.user_metadata) == null ? void 0 : M.name) || ((ne = z.user_metadata) == null ? void 0 : ne.user_name) || ((D = z.user_metadata) == null ? void 0 : D.full_name) || ((fe = z.email) == null ? void 0 : fe.split("@")[0]) || "User",
            email: z.email,
            avatar_url: ((ge = z.user_metadata) == null ? void 0 : ge.avatar_url) || null,
            user_metadata: z.user_metadata
          };
          return d.value = {
            user: Y,
            isAuthenticated: !0,
            isLoading: !1,
            error: null
          }, p.value = B.session, { user: Y, session: p.value, error: null };
        }
      } catch (B) {
        console.error("Error restoring session:", B);
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
      await (await Q()).auth.signOut(), ce(ue), ce(de), We(), d.value = {
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
    var r, b, A, E, x;
    try {
      d.value.isLoading = !0;
      const W = await Q(), { data: k, error: t } = await W.auth.signInWithPassword({
        email: c,
        password: n
      });
      if (t)
        throw t;
      if (k.session) {
        const v = k.session.user, u = {
          id: v.id,
          name: ((r = v.user_metadata) == null ? void 0 : r.name) || ((b = v.user_metadata) == null ? void 0 : b.user_name) || ((A = v.user_metadata) == null ? void 0 : A.full_name) || ((E = v.email) == null ? void 0 : E.split("@")[0]) || "User",
          email: v.email,
          avatar_url: ((x = v.user_metadata) == null ? void 0 : x.avatar_url) || null,
          user_metadata: v.user_metadata
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
  }, j = async (c, n, r) => {
    var b, A, E, x, W;
    try {
      d.value.isLoading = !0;
      const k = await Q(), { data: t, error: v } = await k.auth.signUp({
        email: c,
        password: n,
        options: {
          data: r
        }
      });
      if (v)
        throw v;
      if (t.session) {
        const u = t.session.user, w = {
          id: u.id,
          name: ((b = u.user_metadata) == null ? void 0 : b.name) || ((A = u.user_metadata) == null ? void 0 : A.user_name) || ((E = u.user_metadata) == null ? void 0 : E.full_name) || ((x = u.email) == null ? void 0 : x.split("@")[0]) || "User",
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
          access_token: t.session.access_token,
          refresh_token: t.session.refresh_token
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
    signUp: j,
    checkAuth: l
  };
}
const Ze = Fe("workspace", () => {
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
        } catch (r) {
          console.error("Error loading persisted workspace:", r);
        }
      const c = localStorage.getItem("available_workspaces");
      if (c)
        try {
          p.value = JSON.parse(c);
        } catch (r) {
          console.error("Error loading persisted workspaces:", r);
        }
      const n = localStorage.getItem("user_info");
      if (n)
        try {
          f.value = JSON.parse(n);
        } catch (r) {
          console.error("Error loading persisted user:", r);
        }
    },
    clearData: () => {
      d.value = null, p.value = [], f.value = null, localStorage.removeItem("current_workspace"), localStorage.removeItem("available_workspaces"), localStorage.removeItem("user_info");
    },
    loadWorkspaces: async (l = !1) => {
      try {
        const { data: { user: c } } = await me.auth.getUser();
        if (!c)
          return [];
        let n = me.from("workspaces").select(`
          id, title, description, parent_workspace_id, created_by, archived, created_at, git_repo, 
          workspace_access!inner ( access_type, shared_with_user_id ),
          workspace_activities!left ( updated_at )
        `).eq("workspace_access.shared_with_user_id", c.id);
        l || (n = n.eq("archived", !1));
        const { data: r, error: b } = await n;
        if (b)
          throw b;
        const A = /* @__PURE__ */ new Map();
        (r || []).forEach((t) => {
          (t.workspace_access || []).forEach((v) => {
            v.shared_with_user_id === c.id && A.set(t.id, v);
          });
        });
        const E = [...new Set(
          (r || []).filter((t) => t.parent_workspace_id).map((t) => t.parent_workspace_id).filter((t) => !A.has(t))
        )];
        let x = [];
        if (E.length) {
          let t = me.from("workspaces").select("id, title, description, parent_workspace_id, created_by, archived, created_at").in("id", E);
          l || (t = t.eq("archived", !1));
          const { data: v, error: u } = await t;
          if (u)
            throw u;
          x = v || [];
        }
        const k = [...r || [], ...x].map((t) => {
          var v, u, w;
          return {
            id: t.id,
            title: t.title,
            description: t.description || "No description",
            parent_workspace_id: t.parent_workspace_id,
            created_by: t.created_by,
            archived: t.archived,
            created_at: t.created_at,
            latest_activity: ((u = (v = t.workspace_activities) == null ? void 0 : v[0]) == null ? void 0 : u.updated_at) || t.created_at,
            hasAccess: A.has(t.id),
            accessType: ((w = A.get(t.id)) == null ? void 0 : w.access_type) || null
          };
        });
        return k.sort((t, v) => new Date(v.latest_activity) - new Date(t.latest_activity)), $(k), k;
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
    var l, c, n, r, b, A, E, x;
    try {
      d.value.isLoading = !0;
      const W = await Q(), { data: { session: k }, error: t } = await W.auth.getSession();
      if (t) {
        console.error("Error checking auth status:", t), d.value = {
          user: null,
          isAuthenticated: !1,
          isLoading: !1,
          error: t.message
        };
        return;
      }
      k != null && k.user ? (d.value = {
        user: {
          id: k.user.id,
          email: k.user.email || "",
          name: ((l = k.user.user_metadata) == null ? void 0 : l.full_name) || ((c = k.user.user_metadata) == null ? void 0 : c.name) || ((n = k.user.email) == null ? void 0 : n.split("@")[0]) || "User",
          avatar_url: ((r = k.user.user_metadata) == null ? void 0 : r.avatar_url) || ((b = k.user.user_metadata) == null ? void 0 : b.picture) || null,
          initials: (((A = k.user.user_metadata) == null ? void 0 : A.full_name) || ((E = k.user.user_metadata) == null ? void 0 : E.name) || ((x = k.user.email) == null ? void 0 : x.split("@")[0]) || "U").split(" ").map((v) => v[0]).join("").toUpperCase().substring(0, 2)
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
      const n = await Q(), { error: r } = await n.auth.signInWithPassword({
        email: l,
        password: c
      });
      return r ? { success: !1, error: r.message } : (await f(), sessionStorage.setItem("post-login-redirect", p.value), { success: !0 });
    } catch (n) {
      return console.error("Login error:", n), { success: !1, error: n.message || "Login failed" };
    }
  }, $ = async (l, c) => {
    var n;
    try {
      const r = await Q(), { data: b, error: A } = await r.auth.signUp({
        email: l,
        password: c
      });
      return A ? { success: !1, error: A.message } : b.user && !b.user.email_confirmed_at ? { success: !0, needsConfirmation: !0 } : (n = b.session) != null && n.user ? (await f(), sessionStorage.setItem("post-login-redirect", p.value), { success: !0 }) : { success: !1, error: "No session created" };
    } catch (r) {
      return console.error("Signup error:", r), { success: !1, error: r.message || "Signup failed" };
    }
  }, U = async (l) => {
    try {
      const c = `${window.location.origin}/auth/callback`;
      console.log("[OAuth] Starting login with provider:", l), console.log("[OAuth] Redirect URL:", c), console.log("[OAuth] Current URL:", p.value), console.log("[OAuth] Current origin:", window.location.origin);
      const n = await Q(), { error: r } = await n.auth.signInWithOAuth({
        provider: l,
        options: {
          redirectTo: c,
          queryParams: {
            redirect_origin: p.value
          }
        }
      });
      if (r)
        return console.error("[OAuth] Error:", r), { success: !1, error: r.message };
      const b = p.value || window.location.href;
      return sessionStorage.setItem("post-login-redirect", b), localStorage.setItem("post-login-redirect", b), console.log("[OAuth] Stored redirect URL:", b), console.log("[OAuth] Current URL value:", p.value), console.log("[OAuth] Window location href:", window.location.href), { success: !0 };
    } catch (c) {
      return console.error("OAuth login error:", c), { success: !1, error: c.message || "OAuth login failed" };
    }
  }, O = async () => {
    try {
      const l = await Q(), { error: c } = await l.auth.signOut();
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
      const c = await Q(), { error: n } = await c.auth.resetPasswordForEmail(l, {
        redirectTo: `${window.location.origin}/auth/reset-password`
      });
      return n ? { success: !1, error: n.message } : { success: !0 };
    } catch (c) {
      return console.error("Password reset error:", c), { success: !1, error: c.message || "Password reset failed" };
    }
  }, j = async () => {
    try {
      (await Q()).auth.onAuthStateChange((c, n) => {
        var r;
        switch (console.log("Auth state changed:", c, (r = n == null ? void 0 : n.user) == null ? void 0 : r.email), c) {
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
    j(), await f();
  }), te(() => window.location.href, (l) => {
    p.value = l;
  }), {
    authState: H(() => d.value),
    isAuthenticated: H(() => d.value.isAuthenticated),
    user: H(() => d.value.user),
    isLoading: H(() => d.value.isLoading),
    checkAuthStatus: f,
    loginWithEmail: L,
    signupWithEmail: $,
    loginWithProvider: U,
    logout: O,
    resetPassword: R,
    currentUrl: H(() => p.value)
  };
}
const aa = { class: "login-container" }, sa = { class: "logo-section" }, oa = { class: "login-buttons" }, ra = {
  key: 0,
  class: "forgot-password"
}, ta = { class: "signup-link" }, la = /* @__PURE__ */ oe({
  __name: "LoginModal",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue", "login-success"],
  setup(d, { emit: p }) {
    const f = d, L = p, $ = H({
      get: () => f.modelValue,
      set: (u) => L("update:modelValue", u)
    }), U = P(!1), O = P(!1), R = P(), { loginWithEmail: j, signupWithEmail: l, loginWithProvider: c, resetPassword: n } = ea(), r = Me({
      email: "",
      password: "",
      confirmPassword: ""
    }), b = H(() => ({
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
            validator: (u, w, X) => {
              w !== r.password ? X(new Error("Passwords do not match")) : X();
            },
            trigger: "blur"
          }
        ]
      } : {}
    })), A = () => {
      var u;
      U.value = !U.value, r.email = "", r.password = "", r.confirmPassword = "", (u = R.value) == null || u.clearValidate();
    }, E = () => {
      var u;
      $.value = !1, r.email = "", r.password = "", r.confirmPassword = "", U.value = !1, (u = R.value) == null || u.clearValidate();
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
      const u = await j(r.email, r.password);
      u.success ? (V.success("Login successful"), L("login-success", { email: r.email }), E()) : V.error("Login failed: " + u.error);
    }, k = async () => {
      const u = await l(r.email, r.password);
      u.success ? u.needsConfirmation ? V.success("Please check your email to confirm your account") : (V.success("Account created successfully"), L("login-success", { email: r.email }), E()) : V.error("Signup failed: " + u.error);
    }, t = async (u) => {
      const w = await c(u);
      w.success ? V.success("Redirecting to login provider...") : V.error("Login failed: " + w.error);
    }, v = async () => {
      if (!r.email) {
        V.warning("Please enter your email address first");
        return;
      }
      const u = await n(r.email);
      u.success ? V.success("Password reset email sent! Please check your inbox.") : V.error("Failed to send reset email: " + u.error);
    };
    return (u, w) => {
      const X = J("el-icon"), Z = J("el-input"), F = J("el-form-item"), M = J("el-button"), ne = J("el-dialog");
      return g(), G(ne, {
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
            _(ae(Te), {
              model: r,
              rules: b.value,
              ref_key: "formRef",
              ref: R,
              class: "login-form",
              onSubmit: le(x, ["prevent"])
            }, {
              default: h(() => [
                _(F, { prop: "email" }, {
                  default: h(() => [
                    _(Z, {
                      modelValue: r.email,
                      "onUpdate:modelValue": w[0] || (w[0] = (D) => r.email = D),
                      placeholder: "Email",
                      type: "email",
                      size: "large",
                      class: "form-input"
                    }, {
                      prefix: h(() => [
                        _(X, null, {
                          default: h(() => [
                            _(ae(je))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                _(F, { prop: "password" }, {
                  default: h(() => [
                    _(Z, {
                      modelValue: r.password,
                      "onUpdate:modelValue": w[1] || (w[1] = (D) => r.password = D),
                      placeholder: "Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: h(() => [
                        _(X, null, {
                          default: h(() => [
                            _(ae($e))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                U.value ? (g(), G(F, {
                  key: 0,
                  prop: "confirmPassword"
                }, {
                  default: h(() => [
                    _(Z, {
                      modelValue: r.confirmPassword,
                      "onUpdate:modelValue": w[2] || (w[2] = (D) => r.confirmPassword = D),
                      placeholder: "Confirm Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: h(() => [
                        _(X, null, {
                          default: h(() => [
                            _(ae($e))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                })) : K("", !0),
                _(F, null, {
                  default: h(() => [
                    _(M, {
                      type: "primary",
                      class: "submit-button",
                      loading: O.value,
                      onClick: x,
                      size: "large"
                    }, {
                      default: h(() => [
                        q(N(U.value ? "Sign Up" : "Sign In"), 1)
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
            s("div", oa, [
              _(M, {
                class: "login-button google",
                onClick: w[3] || (w[3] = (D) => t("google")),
                size: "large"
              }, {
                default: h(() => [...w[7] || (w[7] = [
                  s("span", { class: "social-icon" }, "G", -1),
                  q(" Google ", -1)
                ])]),
                _: 1
              }),
              _(M, {
                class: "login-button github",
                onClick: w[4] || (w[4] = (D) => t("github")),
                size: "large"
              }, {
                default: h(() => [...w[8] || (w[8] = [
                  s("span", { class: "social-icon" }, "⚡", -1),
                  q(" GitHub ", -1)
                ])]),
                _: 1
              }),
              _(M, {
                class: "login-button twitter",
                onClick: w[5] || (w[5] = (D) => t("twitter")),
                size: "large"
              }, {
                default: h(() => [...w[9] || (w[9] = [
                  s("span", { class: "social-icon" }, "X", -1),
                  q(" X (Twitter) ", -1)
                ])]),
                _: 1
              })
            ]),
            w[11] || (w[11] = s("div", { class: "terms" }, " By continuing, you agree to AI Workspace's Terms of Service and Privacy Policy ", -1)),
            U.value ? K("", !0) : (g(), C("div", ra, [
              s("a", {
                href: "#",
                onClick: le(v, ["prevent"])
              }, "Forgot Password?")
            ])),
            s("div", ta, [
              q(N(U.value ? "Already have an account?" : "Don't have an account?") + " ", 1),
              s("a", {
                href: "#",
                onClick: le(A, ["prevent"])
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
}, ka = { class: "header-left" }, ga = { class: "logo-section" }, ma = {
  href: "/",
  class: "logo"
}, va = ["src"], _a = {
  key: 1,
  class: "text-logo"
}, ya = {
  key: 0,
  class: "header-center"
}, ba = { class: "main-navigation" }, Sa = { class: "nav-item" }, Ca = {
  href: "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard",
  class: "nav-link"
}, Aa = { class: "workspace-dropdown-item" }, Wa = ["href"], Ia = { class: "workspace-icon" }, La = {
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
}, Ha = ["src"], Fa = {
  key: 1,
  class: "text-logo"
}, Ba = { class: "header-right" }, Ka = { class: "workspace-list" }, qa = ["onClick"], Ga = { class: "workspace-icon" }, Ja = { class: "workspace-details" }, ja = { class: "workspace-members" }, Xa = {
  key: 0,
  class: "current-indicator"
}, we = 50, Ya = /* @__PURE__ */ oe({
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
    }, j = () => {
      try {
        return typeof window < "u" ? !!window.__PINIA__ || !!window.Pinia : !1;
      } catch {
        return !1;
      }
    }, l = P(R()), c = H(() => !!l.value), n = P(0), r = () => {
      if (!l.value && n.value < we) {
        if (j()) {
          const a = R();
          if (a) {
            l.value = a, console.log("[AIWorkspaceHeader] Pinia store initialized successfully");
            return;
          }
        }
        n.value++, setTimeout(r, 100);
      } else
        n.value >= we && console.warn("[AIWorkspaceHeader] Pinia initialization failed after maximum retries, using fallback mode");
    };
    ke(() => {
      l.value || r();
    });
    const b = P(!1), A = P(!1), E = P([]), x = P([]), W = P({
      name: "",
      email: "",
      avatar_url: null,
      initials: ""
    }), k = P([]), t = P([]), v = P(!1);
    te(t, async (a) => {
      a.length > 0 && c.value && F.value && await Z();
    }, { immediate: !1 }), te(() => window.location.pathname + window.location.search + window.location.hash, async () => {
      c.value && F.value && await Z();
    }, { immediate: !1 });
    const u = P(window.location.pathname);
    te(() => window.location.pathname, (a) => {
      u.value = a;
    }, { immediate: !0 }), te(c, (a) => {
      !a && n.value < we && r();
    });
    const w = () => {
      try {
        const a = window.location.pathname.match(/\/single-workspace\/(\d+)/);
        if (a)
          return a[1];
        const o = new URLSearchParams(window.location.search).get("workspace_id");
        if (o)
          return o;
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
    }, Z = async () => {
      if (!l.value || !c.value)
        return;
      const a = X();
      if (v.value = a, a) {
        l.value.currentWorkspace = null, localStorage.removeItem("current_workspace"), console.log("[AIWorkspaceHeader] Auto-selected all-workspace mode from URL");
        return;
      }
      const e = w();
      if (e)
        try {
          t.value.length === 0 && await z();
          const o = t.value.find((i) => i.id.toString() === e);
          o ? (l.value.setCurrentWorkspace(o), console.log(`[AIWorkspaceHeader] Auto-selected workspace from URL: ${o.title} (ID: ${o.id})`), L("workspaceChange", o)) : console.warn(`[AIWorkspaceHeader] Workspace with ID ${e} not found in available workspaces`);
        } catch (o) {
          console.error("[AIWorkspaceHeader] Error auto-selecting workspace from URL:", o);
        }
    }, F = H(() => $.value.isAuthenticated), M = H(() => l.value ? l.value.currentWorkspace : null), ne = P([
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
    ]), fe = H(() => v.value ? D.value : ne.value), ge = H(() => {
      try {
        const a = u.value;
        let e = "";
        const o = a.match(/\/all-workspace\/([^\/]+)/);
        if (o)
          e = o[1];
        else {
          const i = a.match(/\/single-workspace\/\d+\/([^\/]+)/);
          if (i)
            e = i[1];
          else {
            const S = a.match(/\/([^\/]+)$/);
            S && (e = S[1]);
          }
        }
        if (e) {
          const i = fe.value.find(
            (S) => S.key === e || S.url.includes(`/${e}`) || S.url === `/${e}`
          );
          if (i)
            return i.label;
        }
        return "Dashboard";
      } catch (a) {
        return console.warn("[AIWorkspaceHeader] Error determining current section:", a), "Dashboard";
      }
    }), T = (a) => {
      const e = /* @__PURE__ */ new Map();
      a.forEach((S) => {
        e.set(S.id, { ...S, children: [] });
      });
      const o = [];
      e.forEach((S) => {
        S.parent_workspace_id && e.has(S.parent_workspace_id) ? e.get(S.parent_workspace_id).children.push(S) : o.push(S);
      });
      const i = (S) => {
        S.sort((ee, se) => ee.title.localeCompare(se.title)), S.forEach((ee) => {
          ee.children && i(ee.children);
        });
      };
      return i(o), o;
    }, B = (a, e = 0, o = []) => (a.forEach((i) => {
      o.push({ ...i, level: e }), i.children && i.children.length && B(i.children, e + 1, o);
    }), o), z = async () => {
      var a, e, o;
      try {
        const i = await ((a = l.value) == null ? void 0 : a.loadWorkspaces());
        if (k.value = T(i || []), t.value = B(k.value), x.value = t.value, E.value = t.value, f.currentWorkspaceId) {
          const S = t.value.find((ee) => {
            var se;
            return ee.id.toString() === ((se = f.currentWorkspaceId) == null ? void 0 : se.toString());
          });
          S && ((e = l.value) == null || e.setCurrentWorkspace(S));
        } else
          !M.value && t.value.length && ((o = l.value) == null || o.setCurrentWorkspace(t.value[0]));
      } catch (i) {
        console.error("loadWorkspaces (header) error", i);
      }
    }, Y = (a) => {
      if (console.log("Navigation command:", a), a === "all-workspace") {
        window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
        return;
      } else {
        const e = parseInt(a.replace("workspace-", ""));
        window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e}/dashboard`;
        return;
      }
    }, re = (a) => {
      const e = M.value, o = v.value;
      switch (a.key) {
        case "dashboard":
          o ? window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard" : e ? window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e.id}/dashboard` : window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
          break;
        case "outlines":
          if (o)
            window.location.href = "https://outline.aiworkspace.pro/all-workspace/outlines";
          else if (e) {
            const i = `https://outline.aiworkspace.pro/single-workspace/${e.id}/outlines`;
            window.location.href = i;
          } else
            window.location.href = "https://outline.aiworkspace.pro";
          break;
        case "canvas":
          if (o)
            window.location.href = "https://canvas.aiworkspace.pro/all-workspace/canvas";
          else if (e) {
            const i = `https://canvas.aiworkspace.pro/single-workspace/${e.id}/canvas`;
            window.location.href = i;
          } else
            window.location.href = "https://canvas.aiworkspace.pro";
          break;
        case "files":
          if (o)
            window.location.href = "https://drive.aiworkspace.pro/all-workspace/files";
          else if (e) {
            const i = `https://drive.aiworkspace.pro/single-workspace/${e.id}/files`;
            window.location.href = i;
          } else
            window.location.href = "https://drive.aiworkspace.pro";
          break;
        case "tasks":
          if (o)
            window.location.href = "https://tasks.aiworkspace.pro/all-workspace/tasks";
          else if (e) {
            const i = `https://tasks.aiworkspace.pro/single-workspace/${e.id}/tasks`;
            window.location.href = i;
          } else
            window.location.href = "https://tasks.aiworkspace.pro";
          break;
        case "goals":
          if (o)
            window.location.href = "https://app.aiworkspace.pro/all-workspace/goals";
          else if (e) {
            const i = `https://app.aiworkspace.pro/single-workspace/${e.id}/goals`;
            window.location.href = i;
          } else
            window.location.href = "https://app.aiworkspace.pro/all-workspace/goals";
          break;
        case "events":
          if (o)
            window.location.href = "https://app.aiworkspace.pro/all-workspace/events";
          else if (e) {
            const i = `https://app.aiworkspace.pro/single-workspace/${e.id}/events`;
            window.location.href = i;
          } else
            window.location.href = "https://app.aiworkspace.pro/all-workspace/events";
          break;
        case "contacts":
          if (o)
            window.location.href = "https://app.aiworkspace.pro/all-workspace/contacts";
          else if (e) {
            const i = `https://app.aiworkspace.pro/single-workspace/${e.id}/contacts`;
            window.location.href = i;
          } else
            window.location.href = "https://app.aiworkspace.pro/all-workspace/contacts";
          break;
        case "ai-portfolios":
          if (o)
            window.location.href = "https://spreadsheet.aiworkspace.pro/all-workspace/ai-portfolios";
          else if (e) {
            const i = `https://spreadsheet.aiworkspace.pro/single-workspace/${e.id}/ai-portfolios`;
            window.location.href = i;
          } else
            window.location.href = "https://spreadsheet.aiworkspace.pro";
          break;
        case "settings":
          if (o)
            window.location.href = "https://settings.aiworkspace.pro/all-workspace/settings";
          else if (e) {
            const i = `https://settings.aiworkspace.pro/single-workspace/${e.id}/settings`;
            window.location.href = i;
          } else
            window.location.href = "https://settings.aiworkspace.pro";
          break;
        default:
          if (o) {
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
      const e = M.value, o = v.value;
      switch (a.key) {
        case "dashboard":
          return o ? "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard" : e ? `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e.id}/dashboard` : "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
        case "ai-portfolios":
          return o ? "https://spreadsheet.aiworkspace.pro/all-workspace/ai-portfolios" : e ? `https://spreadsheet.aiworkspace.pro/single-workspace/${e.id}/ai-portfolios` : "https://spreadsheet.aiworkspace.pro";
        case "outlines":
          return o ? "https://outline.aiworkspace.pro/all-workspace/outlines" : e ? `https://outline.aiworkspace.pro/single-workspace/${e.id}/outlines` : "https://outline.aiworkspace.pro";
        case "canvas":
          return o ? "https://canvas.aiworkspace.pro/all-workspace/canvas" : e ? `https://canvas.aiworkspace.pro/single-workspace/${e.id}/canvas` : "https://canvas.aiworkspace.pro";
        case "files":
          return o ? "https://drive.aiworkspace.pro/all-workspace/files" : e ? `https://drive.aiworkspace.pro/single-workspace/${e.id}/files` : "https://drive.aiworkspace.pro";
        case "tasks":
          return o ? "https://tasks.aiworkspace.pro/all-workspace/tasks" : e ? `https://tasks.aiworkspace.pro/single-workspace/${e.id}/tasks` : "https://tasks.aiworkspace.pro";
        case "goals":
          return o ? "https://app.aiworkspace.pro/all-workspace/goals" : e ? `https://app.aiworkspace.pro/single-workspace/${e.id}/goals` : "https://app.aiworkspace.pro/all-workspace/goals";
        case "events":
          return o ? "https://app.aiworkspace.pro/all-workspace/events" : e ? `https://app.aiworkspace.pro/single-workspace/${e.id}/events` : "https://app.aiworkspace.pro/all-workspace/events";
        case "contacts":
          return o ? "https://app.aiworkspace.pro/all-workspace/contacts" : e ? `https://app.aiworkspace.pro/single-workspace/${e.id}/contacts` : "https://app.aiworkspace.pro/all-workspace/contacts";
        case "settings":
          return o ? "https://settings.aiworkspace.pro/all-workspace/settings" : e ? `https://settings.aiworkspace.pro/single-workspace/${e.id}/settings` : "https://settings.aiworkspace.pro";
        default:
          return o ? `https://app.aiworkspace.pro/all-workspace/${a.key}` : e ? `https://app.aiworkspace.pro/single-workspace/${e.id}/${a.key}` : `https://app.aiworkspace.pro/${a.key}`;
      }
    }, I = (a) => {
      switch (a) {
        case "profile":
          f.onProfileClick ? f.onProfileClick() : V.info("Profile settings coming soon");
          break;
        case "workspaces":
          b.value = !0;
          break;
        case "logout":
          Oe();
          break;
      }
    }, he = (a) => {
      var e;
      (e = l.value) == null || e.setCurrentWorkspace(a), b.value = !1, L("workspaceChange", a), V.success(`Switched to ${a.title}`);
    }, xe = () => {
      Ee.prompt("Enter workspace name:", "Create New Workspace", {
        confirmButtonText: "Create",
        cancelButtonText: "Cancel",
        inputPattern: /\S/,
        inputErrorMessage: "Workspace name cannot be empty"
      }).then(({ value: a }) => {
        var o;
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
        E.value.push(e), (o = l.value) == null || o.setWorkspaces(E.value), he(e), V.success(`Created workspace: ${a}`);
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
    }, ve = async () => {
      var a, e;
      if ($.value.user) {
        const o = $.value.user;
        W.value = {
          name: o.name || ((a = o.email) == null ? void 0 : a.split("@")[0]) || "User",
          email: o.email || "",
          avatar_url: o.avatar_url || null,
          initials: (o.name || ((e = o.email) == null ? void 0 : e.split("@")[0]) || "U").split(" ").map((i) => i[0]).join("").toUpperCase().substring(0, 2)
        }, f.showWorkspaceSelector && await z();
      }
    };
    te(() => $.value.user, (a) => {
      var e;
      a ? ve() : (W.value = { name: "", email: "", avatar_url: null, initials: "" }, (e = l.value) == null || e.clearData());
    }), te(() => f.currentWorkspaceId, (a) => {
      var e;
      if (a && t.value.length) {
        const o = t.value.find((i) => i.id.toString() === a.toString());
        o && ((e = l.value) == null || e.setCurrentWorkspace(o));
      }
    }), ke(async () => {
      F.value && (await ve(), await Z());
    });
    const Re = async (a) => {
      console.log("Login successful:", a), A.value = !1, await ve(), L("login"), V.success("Welcome back!");
    }, Ne = () => {
      n.value = 0, r(), V.success("Manual Pinia retry initiated.");
    };
    return (a, e) => {
      const o = J("el-icon"), i = J("el-tag"), S = J("el-dropdown-item"), ee = J("el-dropdown-menu"), se = J("el-dropdown"), _e = J("el-button"), Ve = J("el-dialog");
      return g(), C("header", ia, [
        !c.value && n.value < we || ae(O) ? (g(), C("div", ca, [
          e[8] || (e[8] = ye('<div class="header-left" data-v-f98a8f3a><div class="logo-section" data-v-f98a8f3a><a href="/" class="logo" data-v-f98a8f3a><div class="text-logo" data-v-f98a8f3a><span class="logo-text" data-v-f98a8f3a>AI Workspace</span></div></a></div></div>', 1)),
          s("div", ua, [
            s("span", da, [
              ae(O) ? (g(), C("span", pa, "Syncing authentication...")) : (g(), C("span", fa, "Initializing..."))
            ])
          ])
        ])) : !c.value && n.value >= we ? (g(), C("div", ha, [
          e[10] || (e[10] = ye('<div class="header-left" data-v-f98a8f3a><div class="logo-section" data-v-f98a8f3a><a href="/" class="logo" data-v-f98a8f3a><div class="text-logo" data-v-f98a8f3a><span class="logo-text" data-v-f98a8f3a>AI Workspace</span></div></a></div></div>', 1)),
          s("div", { class: "header-center" }, [
            e[9] || (e[9] = s("span", { class: "fallback-text" }, "Header Ready (Fallback Mode)", -1)),
            s("button", {
              onClick: Ne,
              class: "retry-button"
            }, "Retry Pinia")
          ]),
          e[11] || (e[11] = ye('<div class="header-right" data-v-f98a8f3a><div class="user-profile" data-v-f98a8f3a><div class="user-info" data-v-f98a8f3a><span class="user-name" data-v-f98a8f3a>User</span></div><div class="user-avatar" data-v-f98a8f3a><span class="avatar-placeholder" data-v-f98a8f3a>U</span></div></div></div>', 1))
        ])) : F.value ? (g(), C("div", wa, [
          s("div", ka, [
            s("div", ga, [
              s("a", ma, [
                a.customLogo ? (g(), C("img", {
                  key: 0,
                  src: a.customLogo,
                  alt: "AIWorkspace",
                  class: "logo-image"
                }, null, 8, va)) : (g(), C("div", _a, [...e[12] || (e[12] = [
                  s("span", { class: "logo-text" }, "AI Workspace", -1)
                ])]))
              ])
            ])
          ]),
          a.showSecondaryNavigation ? (g(), C("div", ya, [
            s("nav", ba, [
              a.showWorkspaceSelector ? (g(), G(se, {
                key: 0,
                onCommand: Y,
                trigger: "hover"
              }, {
                dropdown: h(() => [
                  _(ee, { class: "workspace-tree-dropdown" }, {
                    default: h(() => [
                      _(S, {
                        command: "all-workspace",
                        class: be({ active: v.value })
                      }, {
                        default: h(() => [
                          s("a", Ca, [
                            s("div", Aa, [
                              e[14] || (e[14] = s("span", { class: "workspace-icon" }, "🌐", -1)),
                              e[15] || (e[15] = s("span", null, "All workspace", -1)),
                              v.value ? (g(), G(i, {
                                key: 0,
                                size: "small",
                                type: "success"
                              }, {
                                default: h(() => [...e[13] || (e[13] = [
                                  q("Current", -1)
                                ])]),
                                _: 1
                              })) : K("", !0)
                            ])
                          ])
                        ]),
                        _: 1
                      }, 8, ["class"]),
                      t.value.length > 0 ? (g(), G(S, {
                        key: 0,
                        divided: "",
                        disabled: ""
                      })) : K("", !0),
                      (g(!0), C(Se, null, Ce(t.value, (m) => (g(), G(S, {
                        key: m.id,
                        command: `workspace-${m.id}`
                      }, {
                        default: h(() => {
                          var ie;
                          return [
                            s("a", {
                              href: `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${m.id}/dashboard`,
                              class: "nav-link"
                            }, [
                              s("div", {
                                class: "workspace-dropdown-item",
                                style: De({ paddingLeft: (m.level || 0) * 16 + "px" })
                              }, [
                                s("span", Ia, N(m.children && m.children.length ? "📁" : "📄"), 1),
                                s("span", null, N(m.title), 1),
                                m.id === ((ie = M.value) == null ? void 0 : ie.id) ? (g(), G(i, {
                                  key: 0,
                                  size: "small",
                                  type: "success"
                                }, {
                                  default: h(() => [...e[16] || (e[16] = [
                                    q("Current", -1)
                                  ])]),
                                  _: 1
                                })) : K("", !0)
                              ], 4)
                            ], 8, Wa)
                          ];
                        }),
                        _: 2
                      }, 1032, ["command"]))), 128)),
                      t.value.length === 0 ? (g(), G(S, {
                        key: 1,
                        disabled: ""
                      }, {
                        default: h(() => [...e[17] || (e[17] = [
                          q(" No workspaces ", -1)
                        ])]),
                        _: 1
                      })) : K("", !0)
                    ]),
                    _: 1
                  })
                ]),
                default: h(() => {
                  var m;
                  return [
                    s("span", Sa, [
                      q(N(v.value ? "All workspace" : ((m = M.value) == null ? void 0 : m.title) || "Select Workspace") + " ", 1),
                      _(o, { class: "nav-arrow" }, {
                        default: h(() => [
                          _(ae(Pe))
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }),
                _: 1
              })) : K("", !0),
              a.showWorkspaceSelector ? (g(), C("span", La, "/")) : K("", !0),
              a.showSecondaryNavigation ? (g(), G(se, {
                key: 2,
                trigger: "hover"
              }, {
                dropdown: h(() => [
                  _(ee, null, {
                    default: h(() => [
                      (g(!0), C(Se, null, Ce(fe.value, (m) => (g(), G(S, {
                        key: m.label,
                        class: be({ active: m.active })
                      }, {
                        default: h(() => [
                          s("a", {
                            href: y(m),
                            class: "nav-link",
                            onClick: le((ie) => re(m), ["prevent"])
                          }, N(m.label), 9, Ea)
                        ]),
                        _: 2
                      }, 1032, ["class"]))), 128))
                    ]),
                    _: 1
                  })
                ]),
                default: h(() => [
                  s("span", Ua, [
                    q(N(ge.value) + " ", 1),
                    _(o, { class: "nav-arrow" }, {
                      default: h(() => [
                        _(ae(Pe))
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })) : K("", !0)
            ])
          ])) : K("", !0),
          s("div", Pa, [
            _(se, {
              onCommand: I,
              trigger: "click",
              placement: "bottom-end"
            }, {
              dropdown: h(() => [
                _(ee, null, {
                  default: h(() => [
                    _(S, null, {
                      default: h(() => [
                        s("a", {
                          href: "/profile",
                          class: "nav-link",
                          onClick: e[0] || (e[0] = le((m) => I("profile"), ["prevent"]))
                        }, "Profile Settings")
                      ]),
                      _: 1
                    }),
                    a.showWorkspaceSelector ? (g(), G(S, { key: 0 }, {
                      default: h(() => [
                        s("a", {
                          href: "#switch-workspace",
                          class: "nav-link",
                          onClick: e[1] || (e[1] = le((m) => I("workspaces"), ["prevent"]))
                        }, "Switch Workspace")
                      ]),
                      _: 1
                    })) : K("", !0),
                    _(S, { divided: "" }, {
                      default: h(() => [
                        s("a", {
                          href: "#signout",
                          class: "nav-link",
                          onClick: e[2] || (e[2] = le((m) => I("logout"), ["prevent"]))
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
                    W.value.avatar_url ? (g(), C("img", {
                      key: 0,
                      src: W.value.avatar_url,
                      alt: W.value.name
                    }, null, 8, Na)) : (g(), C("span", Va, N(W.value.initials), 1))
                  ])
                ])
              ]),
              _: 1
            })
          ])
        ])) : (g(), C("div", Ma, [
          s("div", Da, [
            s("div", Ta, [
              s("a", za, [
                a.customLogo ? (g(), C("img", {
                  key: 0,
                  src: a.customLogo,
                  alt: "AIWorkspace",
                  class: "logo-image"
                }, null, 8, Ha)) : (g(), C("div", Fa, [...e[18] || (e[18] = [
                  s("span", { class: "logo-text" }, "AI Workspace", -1)
                ])]))
              ])
            ])
          ]),
          e[20] || (e[20] = s("div", { class: "header-center" }, [
            s("span", { class: "welcome-text" }, "Welcome to AI Workspace")
          ], -1)),
          s("div", Ba, [
            _(_e, {
              type: "primary",
              size: "large",
              class: "login-button",
              onClick: e[3] || (e[3] = (m) => A.value = !0)
            }, {
              default: h(() => [
                _(o, null, {
                  default: h(() => [
                    _(ae(Ye))
                  ]),
                  _: 1
                }),
                e[19] || (e[19] = q(" Login / Signup ", -1))
              ]),
              _: 1
            })
          ])
        ])),
        F.value && a.showWorkspaceSelector ? (g(), G(Ve, {
          key: 4,
          modelValue: b.value,
          "onUpdate:modelValue": e[5] || (e[5] = (m) => b.value = m),
          title: "Switch Workspace",
          width: "500px",
          onClose: e[6] || (e[6] = (m) => b.value = !1)
        }, {
          footer: h(() => [
            _(_e, {
              onClick: e[4] || (e[4] = (m) => b.value = !1)
            }, {
              default: h(() => [...e[21] || (e[21] = [
                q("Cancel", -1)
              ])]),
              _: 1
            }),
            _(_e, {
              type: "primary",
              onClick: xe
            }, {
              default: h(() => [...e[22] || (e[22] = [
                q("Create New Workspace", -1)
              ])]),
              _: 1
            })
          ]),
          default: h(() => [
            s("div", Ka, [
              (g(!0), C(Se, null, Ce(E.value, (m) => {
                var ie, Ue;
                return g(), C("div", {
                  key: m.id,
                  class: be(["workspace-item", { active: m.id === ((ie = M.value) == null ? void 0 : ie.id) }]),
                  onClick: (es) => he(m)
                }, [
                  s("div", Ga, N(m.children && m.children.length ? "📁" : "📄"), 1),
                  s("div", Ja, [
                    s("h3", null, N(m.title), 1),
                    s("p", null, N(m.description), 1),
                    s("span", ja, N(m.hasAccess ? "Active" : "Inactive"), 1)
                  ]),
                  m.id === ((Ue = M.value) == null ? void 0 : Ue.id) ? (g(), C("div", Xa, [
                    _(o, null, {
                      default: h(() => [
                        _(ae(qe))
                      ]),
                      _: 1
                    })
                  ])) : K("", !0)
                ], 10, qa);
              }), 128))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])) : K("", !0),
        _(na, {
          modelValue: A.value,
          "onUpdate:modelValue": e[7] || (e[7] = (m) => A.value = m),
          onLoginSuccess: Re
        }, null, 8, ["modelValue"])
      ]);
    };
  }
});
const ls = /* @__PURE__ */ Le(Ya, [["__scopeId", "data-v-f98a8f3a"]]), Qa = { class: "auth-callback" }, Za = /* @__PURE__ */ oe({
  __name: "AuthCallback",
  setup(d) {
    ke(async () => {
      console.log("[AuthCallback] Component mounted, starting callback processing..."), console.log("[AuthCallback] Current URL:", window.location.href), console.log("[AuthCallback] Current hash:", window.location.hash);
      try {
        await new Promise(($) => setTimeout($, 500));
        const { data: f, error: L } = await me.auth.getSession();
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
            const R = window.location.origin, j = `${R}${O}`;
            console.log("[callback] redirecting to:", j, { hostname: window.location.hostname, origin: R }), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
              window.location.href = j;
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
    return (f, L) => (g(), C("div", Qa, [...L[0] || (L[0] = [
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
  Ae as restoreSessionWithRetry,
  pe as setSessionCookie,
  ds as setupAuthStateListener,
  vs as setupUniversalCallback,
  me as supabase,
  Ie as syncCookiesToLocalStorage,
  ea as useAuth,
  Qe as useEnhancedAuth,
  Ze as useWorkspaceStore
};
