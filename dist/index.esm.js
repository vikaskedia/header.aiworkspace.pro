import { defineComponent as re, openBlock as m, createElementBlock as A, createElementVNode as s, ref as P, computed as F, onMounted as me, watch as ne, reactive as Me, resolveComponent as J, createBlock as q, withCtx as f, toDisplayString as D, createVNode as y, unref as ae, withModifiers as le, createCommentVNode as K, createTextVNode as G, createStaticVNode as Ce, normalizeClass as Ae, Fragment as We, renderList as Ie, normalizeStyle as De } from "vue";
import { ElForm as Te, ElMessage as T, ElMessageBox as Oe } from "element-plus";
import { i as ze, g as Y, r as Ee, s as ye } from "./supabase-911934e5.mjs";
import { a as us, b as ds } from "./supabase-911934e5.mjs";
import { clearSessionCookie as pe, ACCESS_COOKIE as he, REFRESH_COOKIE as fe, clearLocalStorageTokens as Le, setSessionCookie as we, syncCookiesToLocalStorage as Ue, getPostLoginBase as He } from "./utils/authRedirect.js";
import { LS_ACCESS_KEY as hs, LS_REFRESH_KEY as fs, buildOAuthRedirectUrl as ws, ensureCrossSubdomainCookies as ks, getCookie as gs } from "./utils/authRedirect.js";
import { defineStore as Fe } from "pinia";
import { setupUniversalCallback as vs } from "./utils/universalCallback.js";
/*! Element Plus Icons Vue v2.3.2 */
var Be = /* @__PURE__ */ re({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(d) {
    return (p, h) => (m(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      s("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"
      })
    ]));
  }
}), xe = Be, Ke = /* @__PURE__ */ re({
  name: "Check",
  __name: "check",
  setup(d) {
    return (p, h) => (m(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      s("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      })
    ]));
  }
}), Ge = Ke, qe = /* @__PURE__ */ re({
  name: "Lock",
  __name: "lock",
  setup(d) {
    return (p, h) => (m(), A("svg", {
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
}), Ne = qe, Je = /* @__PURE__ */ re({
  name: "Message",
  __name: "message",
  setup(d) {
    return (p, h) => (m(), A("svg", {
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
}), je = Je, Xe = /* @__PURE__ */ re({
  name: "User",
  __name: "user",
  setup(d) {
    return (p, h) => (m(), A("svg", {
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
  }), p = P(null), h = F(() => d.value.isAuthenticated), E = F(() => d.value.user), $ = F(() => d.value.isLoading), L = async () => {
    var c, l, r, b, W, U, R, I, g, t, _, u, k, X, Q, B, z, ie, H, ke, ve, _e;
    try {
      console.log("[auth][enhanced] Starting loadUserInfo..."), console.log("[auth][enhanced] Ensuring cross-subdomain cookie synchronization...");
      let x = null, M = "sb-access-token", N = "sb-refresh-token";
      const ce = (w) => {
        try {
          const S = location.hostname;
          if (S === "localhost" || /^\d+\.\d+\.\d+\.\d+$/.test(S)) {
            console.log("[auth][enhanced][fallback] Skipping cookie sync for localhost");
            return;
          }
          const te = "aiworkspace.pro";
          if (!S.endsWith(`.${te}`) && S !== te) {
            console.log("[auth][enhanced][fallback] Skipping cookie sync - not under apex domain");
            return;
          }
          console.log("[auth][enhanced][fallback] Performing basic cookie synchronization"), w.forEach((ue) => {
            document.cookie.split(";").find((be) => be.trim().startsWith(ue + "=")) && console.log(`[auth][enhanced][fallback] Found cookie: ${ue}`);
          });
        } catch (S) {
          console.warn("[auth][enhanced][fallback] Error in fallback cookie sync:", S);
        }
      };
      try {
        const w = await import("./utils/authRedirect.js");
        x = w.ensureCrossSubdomainCookies, M = w.ACCESS_COOKIE || "sb-access-token", N = w.REFRESH_COOKIE || "sb-refresh-token", console.log("[auth][enhanced] Successfully imported authRedirect module");
      } catch (w) {
        console.warn("[auth][enhanced] Failed to import authRedirect module:", w), typeof window < "u" && ((c = window.authRedirectGlobal) != null && c.ensureCrossSubdomainCookies ? (x = window.authRedirectGlobal.ensureCrossSubdomainCookies, M = window.authRedirectGlobal.ACCESS_COOKIE || "sb-access-token", N = window.authRedirectGlobal.REFRESH_COOKIE || "sb-refresh-token", console.log("[auth][enhanced] Using global authRedirectGlobal object")) : window.ensureCrossSubdomainCookies && (x = window.ensureCrossSubdomainCookies, M = window.ACCESS_COOKIE || "sb-access-token", N = window.REFRESH_COOKIE || "sb-refresh-token", console.log("[auth][enhanced] Using individual global ensureCrossSubdomainCookies")));
      }
      if (x && typeof x == "function")
        try {
          x([M, N]), console.log("[auth][enhanced] Cross-subdomain cookies synchronized");
        } catch (w) {
          console.warn("[auth][enhanced] Error calling ensureCrossSubdomainCookies:", w), console.warn("[auth][enhanced] Continuing without cookie synchronization...");
        }
      else {
        console.warn("[auth][enhanced] ensureCrossSubdomainCookies not available, using fallback cookie sync"), console.warn("[auth][enhanced] This is expected in some bundling scenarios and will not affect core functionality");
        try {
          ce([M, N]);
        } catch (w) {
          console.warn("[auth][enhanced] Fallback cookie sync also failed:", w);
        }
      }
      await new Promise((w) => setTimeout(w, 100));
      let se = null;
      try {
        const S = await (await Y()).auth.getSession();
        se = (l = S == null ? void 0 : S.data) == null ? void 0 : l.session;
      } catch (w) {
        console.warn("[auth][enhanced] Error getting Supabase session:", w);
      }
      if (se && se.user) {
        console.log("[auth][enhanced] Active Supabase session found");
        const w = se.user, S = {
          id: w.id,
          name: ((r = w.user_metadata) == null ? void 0 : r.name) || ((b = w.user_metadata) == null ? void 0 : b.user_name) || ((W = w.user_metadata) == null ? void 0 : W.full_name) || ((U = w.email) == null ? void 0 : U.split("@")[0]) || "User",
          email: w.email,
          avatar_url: ((R = w.user_metadata) == null ? void 0 : R.avatar_url) || null,
          user_metadata: w.user_metadata
        };
        return d.value = {
          user: S,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, p.value = {
          user: S,
          access_token: se.access_token,
          refresh_token: se.refresh_token
        }, { user: S, session: p.value, error: null };
      }
      console.log("[auth][enhanced] No active session, attempting to restore from cookies...");
      const Z = await Ee();
      if (Z.success && Z.session) {
        console.log("[auth][enhanced] Session restored successfully from cookies");
        const w = Z.session.user, S = {
          id: w.id,
          name: ((I = w.user_metadata) == null ? void 0 : I.name) || ((g = w.user_metadata) == null ? void 0 : g.user_name) || ((t = w.user_metadata) == null ? void 0 : t.full_name) || ((_ = w.email) == null ? void 0 : _.split("@")[0]) || "User",
          email: w.email,
          avatar_url: ((u = w.user_metadata) == null ? void 0 : u.avatar_url) || null,
          user_metadata: w.user_metadata
        };
        return d.value = {
          user: S,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, p.value = Z.session, { user: S, session: p.value, error: null };
      } else {
        console.log("[auth][enhanced] Failed to restore session:", Z.error), console.log("[auth][enhanced] Retrying session restoration with extended delay..."), await new Promise((S) => setTimeout(S, 500)), x([M, N]);
        const w = await Ee();
        if (w.success && w.session) {
          console.log("[auth][enhanced] Session restored on retry");
          const S = w.session.user, te = {
            id: S.id,
            name: ((k = S.user_metadata) == null ? void 0 : k.name) || ((X = S.user_metadata) == null ? void 0 : X.user_name) || ((Q = S.user_metadata) == null ? void 0 : Q.full_name) || ((B = S.email) == null ? void 0 : B.split("@")[0]) || "User",
            email: S.email,
            avatar_url: ((z = S.user_metadata) == null ? void 0 : z.avatar_url) || null,
            user_metadata: S.user_metadata
          };
          return d.value = {
            user: te,
            isAuthenticated: !0,
            isLoading: !1,
            error: null
          }, p.value = w.session, { user: te, session: p.value, error: null };
        }
      }
    } catch (x) {
      console.error("Error getting Supabase session:", x), x && typeof x == "object" && "message" in x && typeof x.message == "string" && x.message.includes("ne is not a function") && (console.warn('[auth][enhanced] Caught "ne is not a function" error - this is handled gracefully'), console.warn("[auth][enhanced] The ensureCrossSubdomainCookies function import failed, but continuing..."));
      try {
        const M = await Ee();
        if (M.success && M.session) {
          console.log("[auth][enhanced] Session restored after error");
          const N = M.session.user, ce = {
            id: N.id,
            name: ((ie = N.user_metadata) == null ? void 0 : ie.name) || ((H = N.user_metadata) == null ? void 0 : H.user_name) || ((ke = N.user_metadata) == null ? void 0 : ke.full_name) || ((ve = N.email) == null ? void 0 : ve.split("@")[0]) || "User",
            email: N.email,
            avatar_url: ((_e = N.user_metadata) == null ? void 0 : _e.avatar_url) || null,
            user_metadata: N.user_metadata
          };
          return d.value = {
            user: ce,
            isAuthenticated: !0,
            isLoading: !1,
            error: null
          }, p.value = M.session, { user: ce, session: p.value, error: null };
        }
      } catch (M) {
        console.error("Error restoring session:", M);
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
      await (await Y()).auth.signOut(), pe(he), pe(fe), Le(), d.value = {
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
  }, V = async (c, l) => {
    var r, b, W, U, R;
    try {
      d.value.isLoading = !0;
      const I = await Y(), { data: g, error: t } = await I.auth.signInWithPassword({
        email: c,
        password: l
      });
      if (t)
        throw t;
      if (g.session) {
        const _ = g.session.user, u = {
          id: _.id,
          name: ((r = _.user_metadata) == null ? void 0 : r.name) || ((b = _.user_metadata) == null ? void 0 : b.user_name) || ((W = _.user_metadata) == null ? void 0 : W.full_name) || ((U = _.email) == null ? void 0 : U.split("@")[0]) || "User",
          email: _.email,
          avatar_url: ((R = _.user_metadata) == null ? void 0 : R.avatar_url) || null,
          user_metadata: _.user_metadata
        };
        return d.value = {
          user: u,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, p.value = {
          user: u,
          access_token: g.session.access_token,
          refresh_token: g.session.refresh_token
        }, { user: u, session: p.value, error: null };
      }
      return { user: null, session: null, error: "No session returned" };
    } catch (I) {
      return console.error("Sign in error:", I), d.value.isLoading = !1, { user: null, session: null, error: String(I) };
    }
  }, j = async (c, l, r) => {
    var b, W, U, R, I;
    try {
      d.value.isLoading = !0;
      const g = await Y(), { data: t, error: _ } = await g.auth.signUp({
        email: c,
        password: l,
        options: {
          data: r
        }
      });
      if (_)
        throw _;
      if (t.session) {
        const u = t.session.user, k = {
          id: u.id,
          name: ((b = u.user_metadata) == null ? void 0 : b.name) || ((W = u.user_metadata) == null ? void 0 : W.user_name) || ((U = u.user_metadata) == null ? void 0 : U.full_name) || ((R = u.email) == null ? void 0 : R.split("@")[0]) || "User",
          email: u.email,
          avatar_url: ((I = u.user_metadata) == null ? void 0 : I.avatar_url) || null,
          user_metadata: u.user_metadata
        };
        return d.value = {
          user: k,
          isAuthenticated: !0,
          isLoading: !1,
          error: null
        }, p.value = {
          user: k,
          access_token: t.session.access_token,
          refresh_token: t.session.refresh_token
        }, { user: k, session: p.value, error: null };
      }
      return { user: null, session: null, error: "No session returned" };
    } catch (g) {
      return console.error("Sign up error:", g), d.value.isLoading = !1, { user: null, session: null, error: String(g) };
    }
  }, n = async () => {
    await L();
  };
  return me(async () => {
    await ze(), await n();
  }), {
    // State
    authState: d,
    currentSession: p,
    // Computed
    isAuthenticated: h,
    currentUser: E,
    isLoading: $,
    // Methods
    loadUserInfo: L,
    logout: O,
    signIn: V,
    signUp: j,
    checkAuth: n
  };
}
const Ze = Fe("workspace", () => {
  const d = P(null), p = P([]), h = P(null), E = (n) => {
    d.value = n, localStorage.setItem("current_workspace", JSON.stringify(n));
  }, $ = (n) => {
    p.value = n, localStorage.setItem("available_workspaces", JSON.stringify(n));
  };
  return {
    currentWorkspace: d,
    workspaces: p,
    user: h,
    setCurrentWorkspace: E,
    setWorkspaces: $,
    setUser: (n) => {
      h.value = n, localStorage.setItem("user_info", JSON.stringify(n));
    },
    loadPersistedData: () => {
      const n = localStorage.getItem("current_workspace");
      if (n)
        try {
          d.value = JSON.parse(n);
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
      const l = localStorage.getItem("user_info");
      if (l)
        try {
          h.value = JSON.parse(l);
        } catch (r) {
          console.error("Error loading persisted user:", r);
        }
    },
    clearData: () => {
      d.value = null, p.value = [], h.value = null, localStorage.removeItem("current_workspace"), localStorage.removeItem("available_workspaces"), localStorage.removeItem("user_info");
    },
    loadWorkspaces: async (n = !1) => {
      try {
        const { data: { user: c } } = await ye.auth.getUser();
        if (!c)
          return [];
        let l = ye.from("workspaces").select(`
          id, title, description, parent_workspace_id, created_by, archived, created_at, git_repo, 
          workspace_access!inner ( access_type, shared_with_user_id ),
          workspace_activities!left ( updated_at )
        `).eq("workspace_access.shared_with_user_id", c.id);
        n || (l = l.eq("archived", !1));
        const { data: r, error: b } = await l;
        if (b)
          throw b;
        const W = /* @__PURE__ */ new Map();
        (r || []).forEach((t) => {
          (t.workspace_access || []).forEach((_) => {
            _.shared_with_user_id === c.id && W.set(t.id, _);
          });
        });
        const U = [...new Set(
          (r || []).filter((t) => t.parent_workspace_id).map((t) => t.parent_workspace_id).filter((t) => !W.has(t))
        )];
        let R = [];
        if (U.length) {
          let t = ye.from("workspaces").select("id, title, description, parent_workspace_id, created_by, archived, created_at").in("id", U);
          n || (t = t.eq("archived", !1));
          const { data: _, error: u } = await t;
          if (u)
            throw u;
          R = _ || [];
        }
        const g = [...r || [], ...R].map((t) => {
          var _, u, k;
          return {
            id: t.id,
            title: t.title,
            description: t.description || "No description",
            parent_workspace_id: t.parent_workspace_id,
            created_by: t.created_by,
            archived: t.archived,
            created_at: t.created_at,
            latest_activity: ((u = (_ = t.workspace_activities) == null ? void 0 : _[0]) == null ? void 0 : u.updated_at) || t.created_at,
            hasAccess: W.has(t.id),
            accessType: ((k = W.get(t.id)) == null ? void 0 : k.access_type) || null
          };
        });
        return g.sort((t, _) => new Date(_.latest_activity) - new Date(t.latest_activity)), $(g), g;
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
  }), p = P(window.location.href), h = async () => {
    var n, c, l, r, b, W, U, R;
    try {
      d.value.isLoading = !0;
      const I = await Y(), { data: { session: g }, error: t } = await I.auth.getSession();
      if (t) {
        console.error("Error checking auth status:", t), d.value = {
          user: null,
          isAuthenticated: !1,
          isLoading: !1,
          error: t.message
        };
        return;
      }
      g != null && g.user ? (d.value = {
        user: {
          id: g.user.id,
          email: g.user.email || "",
          name: ((n = g.user.user_metadata) == null ? void 0 : n.full_name) || ((c = g.user.user_metadata) == null ? void 0 : c.name) || ((l = g.user.email) == null ? void 0 : l.split("@")[0]) || "User",
          avatar_url: ((r = g.user.user_metadata) == null ? void 0 : r.avatar_url) || ((b = g.user.user_metadata) == null ? void 0 : b.picture) || null,
          initials: (((W = g.user.user_metadata) == null ? void 0 : W.full_name) || ((U = g.user.user_metadata) == null ? void 0 : U.name) || ((R = g.user.email) == null ? void 0 : R.split("@")[0]) || "U").split(" ").map((_) => _[0]).join("").toUpperCase().substring(0, 2)
        },
        isAuthenticated: !0,
        isLoading: !1,
        error: null
      }, g.access_token && we(he, g.access_token), g.refresh_token && we(fe, g.refresh_token), Ue()) : d.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      };
    } catch (I) {
      console.error("Auth check failed:", I), d.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: I.message || "Authentication check failed"
      };
    }
  }, E = async (n, c) => {
    try {
      const l = await Y(), { error: r } = await l.auth.signInWithPassword({
        email: n,
        password: c
      });
      return r ? { success: !1, error: r.message } : (await h(), sessionStorage.setItem("post-login-redirect", p.value), { success: !0 });
    } catch (l) {
      return console.error("Login error:", l), { success: !1, error: l.message || "Login failed" };
    }
  }, $ = async (n, c) => {
    var l;
    try {
      const r = await Y(), { data: b, error: W } = await r.auth.signUp({
        email: n,
        password: c
      });
      return W ? { success: !1, error: W.message } : b.user && !b.user.email_confirmed_at ? { success: !0, needsConfirmation: !0 } : (l = b.session) != null && l.user ? (await h(), sessionStorage.setItem("post-login-redirect", p.value), { success: !0 }) : { success: !1, error: "No session created" };
    } catch (r) {
      return console.error("Signup error:", r), { success: !1, error: r.message || "Signup failed" };
    }
  }, L = async (n) => {
    try {
      const c = `${window.location.origin}/auth/callback`;
      console.log("[OAuth] Starting login with provider:", n), console.log("[OAuth] Redirect URL:", c), console.log("[OAuth] Current URL:", p.value), console.log("[OAuth] Current origin:", window.location.origin);
      const l = await Y(), { error: r } = await l.auth.signInWithOAuth({
        provider: n,
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
      const n = await Y(), { error: c } = await n.auth.signOut();
      c && console.error("Logout error:", c), d.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      }, pe(he), pe(fe), Le();
    } catch (n) {
      console.error("Logout error:", n);
    }
  }, V = async (n) => {
    try {
      const c = await Y(), { error: l } = await c.auth.resetPasswordForEmail(n, {
        redirectTo: `${window.location.origin}/auth/reset-password`
      });
      return l ? { success: !1, error: l.message } : { success: !0 };
    } catch (c) {
      return console.error("Password reset error:", c), { success: !1, error: c.message || "Password reset failed" };
    }
  }, j = async () => {
    try {
      (await Y()).auth.onAuthStateChange((c, l) => {
        var r;
        switch (console.log("Auth state changed:", c, (r = l == null ? void 0 : l.user) == null ? void 0 : r.email), c) {
          case "SIGNED_IN":
            l != null && l.user && h();
            break;
          case "SIGNED_OUT":
            d.value = {
              user: null,
              isAuthenticated: !1,
              isLoading: !1,
              error: null
            }, pe(he), pe(fe), Le();
            break;
          case "TOKEN_REFRESHED":
            l != null && l.access_token && we(he, l.access_token), l != null && l.refresh_token && we(fe, l.refresh_token), Ue();
            break;
          case "USER_UPDATED":
            l != null && l.user && h();
            break;
        }
      });
    } catch (n) {
      console.warn("Failed to setup auth listener:", n);
    }
  };
  return me(async () => {
    j(), await h();
  }), ne(() => window.location.href, (n) => {
    p.value = n;
  }), {
    authState: F(() => d.value),
    isAuthenticated: F(() => d.value.isAuthenticated),
    user: F(() => d.value.user),
    isLoading: F(() => d.value.isLoading),
    checkAuthStatus: h,
    loginWithEmail: E,
    signupWithEmail: $,
    loginWithProvider: L,
    logout: O,
    resetPassword: V,
    currentUrl: F(() => p.value)
  };
}
const aa = { class: "login-container" }, sa = { class: "logo-section" }, oa = { class: "login-buttons" }, ra = {
  key: 0,
  class: "forgot-password"
}, ta = { class: "signup-link" }, na = /* @__PURE__ */ re({
  __name: "LoginModal",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue", "login-success"],
  setup(d, { emit: p }) {
    const h = d, E = p, $ = F({
      get: () => h.modelValue,
      set: (u) => E("update:modelValue", u)
    }), L = P(!1), O = P(!1), V = P(), { loginWithEmail: j, signupWithEmail: n, loginWithProvider: c, resetPassword: l } = ea(), r = Me({
      email: "",
      password: "",
      confirmPassword: ""
    }), b = F(() => ({
      email: [
        { required: !0, message: "Please enter your email", trigger: "blur" },
        { type: "email", message: "Please enter a valid email", trigger: "blur" }
      ],
      password: [
        { required: !0, message: "Please enter your password", trigger: "blur" },
        { min: 6, message: "Password must be at least 6 characters", trigger: "blur" }
      ],
      ...L.value ? {
        confirmPassword: [
          { required: !0, message: "Please confirm your password", trigger: "blur" },
          {
            validator: (u, k, X) => {
              k !== r.password ? X(new Error("Passwords do not match")) : X();
            },
            trigger: "blur"
          }
        ]
      } : {}
    })), W = () => {
      var u;
      L.value = !L.value, r.email = "", r.password = "", r.confirmPassword = "", (u = V.value) == null || u.clearValidate();
    }, U = () => {
      var u;
      $.value = !1, r.email = "", r.password = "", r.confirmPassword = "", L.value = !1, (u = V.value) == null || u.clearValidate();
    }, R = async () => {
      if (V.value)
        try {
          await V.value.validate(), O.value = !0, L.value ? await g() : await I();
        } catch (u) {
          console.error("Form validation failed:", u);
        } finally {
          O.value = !1;
        }
    }, I = async () => {
      const u = await j(r.email, r.password);
      u.success ? (T.success("Login successful"), E("login-success", { email: r.email }), U()) : T.error("Login failed: " + u.error);
    }, g = async () => {
      const u = await n(r.email, r.password);
      u.success ? u.needsConfirmation ? T.success("Please check your email to confirm your account") : (T.success("Account created successfully"), E("login-success", { email: r.email }), U()) : T.error("Signup failed: " + u.error);
    }, t = async (u) => {
      const k = await c(u);
      k.success ? T.success("Redirecting to login provider...") : T.error("Login failed: " + k.error);
    }, _ = async () => {
      if (!r.email) {
        T.warning("Please enter your email address first");
        return;
      }
      const u = await l(r.email);
      u.success ? T.success("Password reset email sent! Please check your inbox.") : T.error("Failed to send reset email: " + u.error);
    };
    return (u, k) => {
      const X = J("el-icon"), Q = J("el-input"), B = J("el-form-item"), z = J("el-button"), ie = J("el-dialog");
      return m(), q(ie, {
        modelValue: $.value,
        "onUpdate:modelValue": k[6] || (k[6] = (H) => $.value = H),
        title: "",
        width: "500px",
        "close-on-click-modal": !1,
        "close-on-press-escape": !0,
        "show-close": !0,
        class: "login-modal",
        onClose: U
      }, {
        default: f(() => [
          s("div", aa, [
            s("div", sa, [
              s("h2", null, D(L.value ? "Create Account" : "Welcome Back"), 1),
              s("p", null, D(L.value ? "Sign up to get started with your account" : "Sign in to continue to your account"), 1)
            ]),
            y(ae(Te), {
              model: r,
              rules: b.value,
              ref_key: "formRef",
              ref: V,
              class: "login-form",
              onSubmit: le(R, ["prevent"])
            }, {
              default: f(() => [
                y(B, { prop: "email" }, {
                  default: f(() => [
                    y(Q, {
                      modelValue: r.email,
                      "onUpdate:modelValue": k[0] || (k[0] = (H) => r.email = H),
                      placeholder: "Email",
                      type: "email",
                      size: "large",
                      class: "form-input"
                    }, {
                      prefix: f(() => [
                        y(X, null, {
                          default: f(() => [
                            y(ae(je))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                y(B, { prop: "password" }, {
                  default: f(() => [
                    y(Q, {
                      modelValue: r.password,
                      "onUpdate:modelValue": k[1] || (k[1] = (H) => r.password = H),
                      placeholder: "Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: f(() => [
                        y(X, null, {
                          default: f(() => [
                            y(ae(Ne))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                L.value ? (m(), q(B, {
                  key: 0,
                  prop: "confirmPassword"
                }, {
                  default: f(() => [
                    y(Q, {
                      modelValue: r.confirmPassword,
                      "onUpdate:modelValue": k[2] || (k[2] = (H) => r.confirmPassword = H),
                      placeholder: "Confirm Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: f(() => [
                        y(X, null, {
                          default: f(() => [
                            y(ae(Ne))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                })) : K("", !0),
                y(B, null, {
                  default: f(() => [
                    y(z, {
                      type: "primary",
                      class: "submit-button",
                      loading: O.value,
                      onClick: R,
                      size: "large"
                    }, {
                      default: f(() => [
                        G(D(L.value ? "Sign Up" : "Sign In"), 1)
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
            s("div", oa, [
              y(z, {
                class: "login-button google",
                onClick: k[3] || (k[3] = (H) => t("google")),
                size: "large"
              }, {
                default: f(() => [...k[7] || (k[7] = [
                  s("span", { class: "social-icon" }, "G", -1),
                  G(" Google ", -1)
                ])]),
                _: 1
              }),
              y(z, {
                class: "login-button github",
                onClick: k[4] || (k[4] = (H) => t("github")),
                size: "large"
              }, {
                default: f(() => [...k[8] || (k[8] = [
                  s("span", { class: "social-icon" }, "⚡", -1),
                  G(" GitHub ", -1)
                ])]),
                _: 1
              }),
              y(z, {
                class: "login-button twitter",
                onClick: k[5] || (k[5] = (H) => t("twitter")),
                size: "large"
              }, {
                default: f(() => [...k[9] || (k[9] = [
                  s("span", { class: "social-icon" }, "X", -1),
                  G(" X (Twitter) ", -1)
                ])]),
                _: 1
              })
            ]),
            k[11] || (k[11] = s("div", { class: "terms" }, " By continuing, you agree to AI Workspace's Terms of Service and Privacy Policy ", -1)),
            L.value ? K("", !0) : (m(), A("div", ra, [
              s("a", {
                href: "#",
                onClick: le(_, ["prevent"])
              }, "Forgot Password?")
            ])),
            s("div", ta, [
              G(D(L.value ? "Already have an account?" : "Don't have an account?") + " ", 1),
              s("a", {
                href: "#",
                onClick: le(W, ["prevent"])
              }, D(L.value ? "Sign in" : "Sign up"), 1)
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
const Pe = (d, p) => {
  const h = d.__vccOpts || d;
  for (const [E, $] of p)
    h[E] = $;
  return h;
}, la = /* @__PURE__ */ Pe(na, [["__scopeId", "data-v-684a3f28"]]), ia = { class: "aiworkspace-header" }, ca = {
  key: 0,
  class: "header-content header-loading"
}, ua = { class: "header-center" }, da = { class: "loading-text" }, pa = { key: 0 }, ha = { key: 1 }, fa = {
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
}, Aa = { class: "workspace-dropdown-item" }, Wa = ["href"], Ia = { class: "workspace-icon" }, Ea = {
  key: 1,
  class: "nav-divider"
}, La = { class: "nav-item" }, Ua = ["href", "onClick"], Pa = { class: "header-right" }, $a = { class: "user-profile" }, Ra = { class: "user-info" }, Oa = { class: "user-name" }, xa = { class: "user-avatar" }, Na = ["src", "alt"], Va = {
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
}, Ba = { class: "header-right" }, Ka = { class: "workspace-list" }, Ga = ["onClick"], qa = { class: "workspace-icon" }, Ja = { class: "workspace-details" }, ja = { class: "workspace-members" }, Xa = {
  key: 0,
  class: "current-indicator"
}, ge = 50, Ya = /* @__PURE__ */ re({
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
    const h = d, E = p, { authState: $, logout: L, isLoading: O } = Qe(), V = () => {
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
    }, n = P(V()), c = F(() => !!n.value), l = P(0), r = () => {
      if (!n.value && l.value < ge) {
        if (j()) {
          const a = V();
          if (a) {
            n.value = a, console.log("[AIWorkspaceHeader] Pinia store initialized successfully");
            return;
          }
        }
        l.value++, setTimeout(r, 100);
      } else
        l.value >= ge && console.warn("[AIWorkspaceHeader] Pinia initialization failed after maximum retries, using fallback mode");
    };
    me(() => {
      n.value || r();
    });
    const b = P(!1), W = P(!1), U = P([]), R = P([]), I = P({
      name: "",
      email: "",
      avatar_url: null,
      initials: ""
    }), g = P([]), t = P([]), _ = P(!1);
    ne(t, async (a) => {
      a.length > 0 && c.value && B.value && await Q();
    }, { immediate: !1 }), ne(() => window.location.pathname + window.location.search + window.location.hash, async () => {
      c.value && B.value && await Q();
    }, { immediate: !1 });
    const u = P(window.location.pathname);
    ne(() => window.location.pathname, (a) => {
      u.value = a;
    }, { immediate: !0 }), ne(c, (a) => {
      !a && l.value < ge && r();
    });
    const k = () => {
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
    }, Q = async () => {
      if (!n.value || !c.value)
        return;
      const a = X();
      if (_.value = a, a) {
        n.value.currentWorkspace = null, localStorage.removeItem("current_workspace"), console.log("[AIWorkspaceHeader] Auto-selected all-workspace mode from URL");
        return;
      }
      const e = k();
      if (e)
        try {
          t.value.length === 0 && await M();
          const o = t.value.find((i) => i.id.toString() === e);
          o ? (n.value.setCurrentWorkspace(o), console.log(`[AIWorkspaceHeader] Auto-selected workspace from URL: ${o.title} (ID: ${o.id})`), E("workspaceChange", o)) : console.warn(`[AIWorkspaceHeader] Workspace with ID ${e} not found in available workspaces`);
        } catch (o) {
          console.error("[AIWorkspaceHeader] Error auto-selecting workspace from URL:", o);
        }
    }, B = F(() => $.value.isAuthenticated), z = F(() => n.value ? n.value.currentWorkspace : null), ie = P([
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
    ]), H = P([
      { label: "Dashboard", key: "dashboard", url: "/dashboard" },
      { label: "All Tasks", key: "tasks", url: "/tasks" },
      { label: "All Goals", key: "goals", url: "/goals" },
      { label: "All Events", key: "events", url: "/events" },
      { label: "All Drive", key: "files", url: "/files" },
      { label: "All Contacts", key: "contacts", url: "/contacts" },
      { label: "All Settings", key: "settings", url: "/settings" }
    ]), ke = F(() => _.value ? H.value : ie.value), ve = F(() => {
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
            const C = a.match(/\/([^\/]+)$/);
            C && (e = C[1]);
          }
        }
        if (e) {
          const i = ke.value.find(
            (C) => C.key === e || C.url.includes(`/${e}`) || C.url === `/${e}`
          );
          if (i)
            return i.label;
        }
        return "Dashboard";
      } catch (a) {
        return console.warn("[AIWorkspaceHeader] Error determining current section:", a), "Dashboard";
      }
    }), _e = (a) => {
      const e = /* @__PURE__ */ new Map();
      a.forEach((C) => {
        e.set(C.id, { ...C, children: [] });
      });
      const o = [];
      e.forEach((C) => {
        C.parent_workspace_id && e.has(C.parent_workspace_id) ? e.get(C.parent_workspace_id).children.push(C) : o.push(C);
      });
      const i = (C) => {
        C.sort((ee, oe) => ee.title.localeCompare(oe.title)), C.forEach((ee) => {
          ee.children && i(ee.children);
        });
      };
      return i(o), o;
    }, x = (a, e = 0, o = []) => (a.forEach((i) => {
      o.push({ ...i, level: e }), i.children && i.children.length && x(i.children, e + 1, o);
    }), o), M = async () => {
      var a, e, o;
      try {
        const i = await ((a = n.value) == null ? void 0 : a.loadWorkspaces());
        if (g.value = _e(i || []), t.value = x(g.value), R.value = t.value, U.value = t.value, h.currentWorkspaceId) {
          const C = t.value.find((ee) => {
            var oe;
            return ee.id.toString() === ((oe = h.currentWorkspaceId) == null ? void 0 : oe.toString());
          });
          C && ((e = n.value) == null || e.setCurrentWorkspace(C));
        } else
          !z.value && t.value.length && ((o = n.value) == null || o.setCurrentWorkspace(t.value[0]));
      } catch (i) {
        console.error("loadWorkspaces (header) error", i);
      }
    }, N = (a) => {
      if (console.log("Navigation command:", a), a === "all-workspace") {
        window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
        return;
      } else {
        const e = parseInt(a.replace("workspace-", ""));
        window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e}/dashboard`;
        return;
      }
    }, ce = (a) => {
      const e = z.value, o = _.value;
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
    }, se = (a) => {
      const e = z.value, o = _.value;
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
    }, Z = (a) => {
      switch (a) {
        case "profile":
          h.onProfileClick ? h.onProfileClick() : T.info("Profile settings coming soon");
          break;
        case "workspaces":
          b.value = !0;
          break;
        case "logout":
          te();
          break;
      }
    }, w = (a) => {
      var e;
      (e = n.value) == null || e.setCurrentWorkspace(a), b.value = !1, E("workspaceChange", a), T.success(`Switched to ${a.title}`);
    }, S = () => {
      Oe.prompt("Enter workspace name:", "Create New Workspace", {
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
        U.value.push(e), (o = n.value) == null || o.setWorkspaces(U.value), w(e), T.success(`Created workspace: ${a}`);
      }).catch(() => {
      });
    }, te = () => {
      Oe.confirm(
        "Are you sure you want to sign out?",
        "Sign Out",
        {
          confirmButtonText: "Sign Out",
          cancelButtonText: "Cancel",
          type: "warning"
        }
      ).then(async () => {
        var a;
        (a = n.value) == null || a.clearData(), await L(), E("logout"), T.success("Signed out successfully");
      }).catch(() => {
      });
    }, ue = async () => {
      var a, e;
      if ($.value.user) {
        const o = $.value.user;
        I.value = {
          name: o.name || ((a = o.email) == null ? void 0 : a.split("@")[0]) || "User",
          email: o.email || "",
          avatar_url: o.avatar_url || null,
          initials: (o.name || ((e = o.email) == null ? void 0 : e.split("@")[0]) || "U").split(" ").map((i) => i[0]).join("").toUpperCase().substring(0, 2)
        }, h.showWorkspaceSelector && await M();
      }
    };
    ne(() => $.value.user, (a) => {
      var e;
      a ? ue() : (I.value = { name: "", email: "", avatar_url: null, initials: "" }, (e = n.value) == null || e.clearData());
    }), ne(() => h.currentWorkspaceId, (a) => {
      var e;
      if (a && t.value.length) {
        const o = t.value.find((i) => i.id.toString() === a.toString());
        o && ((e = n.value) == null || e.setCurrentWorkspace(o));
      }
    }), me(async () => {
      B.value && (await ue(), await Q());
    });
    const $e = async (a) => {
      console.log("Login successful:", a), W.value = !1, await ue(), E("login"), T.success("Welcome back!");
    }, be = () => {
      l.value = 0, r(), T.success("Manual Pinia retry initiated.");
    };
    return (a, e) => {
      const o = J("el-icon"), i = J("el-tag"), C = J("el-dropdown-item"), ee = J("el-dropdown-menu"), oe = J("el-dropdown"), Se = J("el-button"), Ve = J("el-dialog");
      return m(), A("header", ia, [
        !c.value && l.value < ge || ae(O) ? (m(), A("div", ca, [
          e[8] || (e[8] = Ce('<div class="header-left" data-v-f98a8f3a><div class="logo-section" data-v-f98a8f3a><a href="/" class="logo" data-v-f98a8f3a><div class="text-logo" data-v-f98a8f3a><span class="logo-text" data-v-f98a8f3a>AI Workspace</span></div></a></div></div>', 1)),
          s("div", ua, [
            s("span", da, [
              ae(O) ? (m(), A("span", pa, "Syncing authentication...")) : (m(), A("span", ha, "Initializing..."))
            ])
          ])
        ])) : !c.value && l.value >= ge ? (m(), A("div", fa, [
          e[10] || (e[10] = Ce('<div class="header-left" data-v-f98a8f3a><div class="logo-section" data-v-f98a8f3a><a href="/" class="logo" data-v-f98a8f3a><div class="text-logo" data-v-f98a8f3a><span class="logo-text" data-v-f98a8f3a>AI Workspace</span></div></a></div></div>', 1)),
          s("div", { class: "header-center" }, [
            e[9] || (e[9] = s("span", { class: "fallback-text" }, "Header Ready (Fallback Mode)", -1)),
            s("button", {
              onClick: be,
              class: "retry-button"
            }, "Retry Pinia")
          ]),
          e[11] || (e[11] = Ce('<div class="header-right" data-v-f98a8f3a><div class="user-profile" data-v-f98a8f3a><div class="user-info" data-v-f98a8f3a><span class="user-name" data-v-f98a8f3a>User</span></div><div class="user-avatar" data-v-f98a8f3a><span class="avatar-placeholder" data-v-f98a8f3a>U</span></div></div></div>', 1))
        ])) : B.value ? (m(), A("div", wa, [
          s("div", ka, [
            s("div", ga, [
              s("a", ma, [
                a.customLogo ? (m(), A("img", {
                  key: 0,
                  src: a.customLogo,
                  alt: "AIWorkspace",
                  class: "logo-image"
                }, null, 8, va)) : (m(), A("div", _a, [...e[12] || (e[12] = [
                  s("span", { class: "logo-text" }, "AI Workspace", -1)
                ])]))
              ])
            ])
          ]),
          a.showSecondaryNavigation ? (m(), A("div", ya, [
            s("nav", ba, [
              a.showWorkspaceSelector ? (m(), q(oe, {
                key: 0,
                onCommand: N,
                trigger: "hover"
              }, {
                dropdown: f(() => [
                  y(ee, { class: "workspace-tree-dropdown" }, {
                    default: f(() => [
                      y(C, {
                        command: "all-workspace",
                        class: Ae({ active: _.value })
                      }, {
                        default: f(() => [
                          s("a", Ca, [
                            s("div", Aa, [
                              e[14] || (e[14] = s("span", { class: "workspace-icon" }, "🌐", -1)),
                              e[15] || (e[15] = s("span", null, "All workspace", -1)),
                              _.value ? (m(), q(i, {
                                key: 0,
                                size: "small",
                                type: "success"
                              }, {
                                default: f(() => [...e[13] || (e[13] = [
                                  G("Current", -1)
                                ])]),
                                _: 1
                              })) : K("", !0)
                            ])
                          ])
                        ]),
                        _: 1
                      }, 8, ["class"]),
                      t.value.length > 0 ? (m(), q(C, {
                        key: 0,
                        divided: "",
                        disabled: ""
                      })) : K("", !0),
                      (m(!0), A(We, null, Ie(t.value, (v) => (m(), q(C, {
                        key: v.id,
                        command: `workspace-${v.id}`
                      }, {
                        default: f(() => {
                          var de;
                          return [
                            s("a", {
                              href: `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${v.id}/dashboard`,
                              class: "nav-link"
                            }, [
                              s("div", {
                                class: "workspace-dropdown-item",
                                style: De({ paddingLeft: (v.level || 0) * 16 + "px" })
                              }, [
                                s("span", Ia, D(v.children && v.children.length ? "📁" : "📄"), 1),
                                s("span", null, D(v.title), 1),
                                v.id === ((de = z.value) == null ? void 0 : de.id) ? (m(), q(i, {
                                  key: 0,
                                  size: "small",
                                  type: "success"
                                }, {
                                  default: f(() => [...e[16] || (e[16] = [
                                    G("Current", -1)
                                  ])]),
                                  _: 1
                                })) : K("", !0)
                              ], 4)
                            ], 8, Wa)
                          ];
                        }),
                        _: 2
                      }, 1032, ["command"]))), 128)),
                      t.value.length === 0 ? (m(), q(C, {
                        key: 1,
                        disabled: ""
                      }, {
                        default: f(() => [...e[17] || (e[17] = [
                          G(" No workspaces ", -1)
                        ])]),
                        _: 1
                      })) : K("", !0)
                    ]),
                    _: 1
                  })
                ]),
                default: f(() => {
                  var v;
                  return [
                    s("span", Sa, [
                      G(D(_.value ? "All workspace" : ((v = z.value) == null ? void 0 : v.title) || "Select Workspace") + " ", 1),
                      y(o, { class: "nav-arrow" }, {
                        default: f(() => [
                          y(ae(xe))
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }),
                _: 1
              })) : K("", !0),
              a.showWorkspaceSelector ? (m(), A("span", Ea, "/")) : K("", !0),
              a.showSecondaryNavigation ? (m(), q(oe, {
                key: 2,
                trigger: "hover"
              }, {
                dropdown: f(() => [
                  y(ee, null, {
                    default: f(() => [
                      (m(!0), A(We, null, Ie(ke.value, (v) => (m(), q(C, {
                        key: v.label,
                        class: Ae({ active: v.active })
                      }, {
                        default: f(() => [
                          s("a", {
                            href: se(v),
                            class: "nav-link",
                            onClick: le((de) => ce(v), ["prevent"])
                          }, D(v.label), 9, Ua)
                        ]),
                        _: 2
                      }, 1032, ["class"]))), 128))
                    ]),
                    _: 1
                  })
                ]),
                default: f(() => [
                  s("span", La, [
                    G(D(ve.value) + " ", 1),
                    y(o, { class: "nav-arrow" }, {
                      default: f(() => [
                        y(ae(xe))
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
            y(oe, {
              onCommand: Z,
              trigger: "click",
              placement: "bottom-end"
            }, {
              dropdown: f(() => [
                y(ee, null, {
                  default: f(() => [
                    y(C, null, {
                      default: f(() => [
                        s("a", {
                          href: "/profile",
                          class: "nav-link",
                          onClick: e[0] || (e[0] = le((v) => Z("profile"), ["prevent"]))
                        }, "Profile Settings")
                      ]),
                      _: 1
                    }),
                    a.showWorkspaceSelector ? (m(), q(C, { key: 0 }, {
                      default: f(() => [
                        s("a", {
                          href: "#switch-workspace",
                          class: "nav-link",
                          onClick: e[1] || (e[1] = le((v) => Z("workspaces"), ["prevent"]))
                        }, "Switch Workspace")
                      ]),
                      _: 1
                    })) : K("", !0),
                    y(C, { divided: "" }, {
                      default: f(() => [
                        s("a", {
                          href: "#signout",
                          class: "nav-link",
                          onClick: e[2] || (e[2] = le((v) => Z("logout"), ["prevent"]))
                        }, "Sign Out")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              default: f(() => [
                s("div", $a, [
                  s("div", Ra, [
                    s("span", Oa, D(I.value.name), 1)
                  ]),
                  s("div", xa, [
                    I.value.avatar_url ? (m(), A("img", {
                      key: 0,
                      src: I.value.avatar_url,
                      alt: I.value.name
                    }, null, 8, Na)) : (m(), A("span", Va, D(I.value.initials), 1))
                  ])
                ])
              ]),
              _: 1
            })
          ])
        ])) : (m(), A("div", Ma, [
          s("div", Da, [
            s("div", Ta, [
              s("a", za, [
                a.customLogo ? (m(), A("img", {
                  key: 0,
                  src: a.customLogo,
                  alt: "AIWorkspace",
                  class: "logo-image"
                }, null, 8, Ha)) : (m(), A("div", Fa, [...e[18] || (e[18] = [
                  s("span", { class: "logo-text" }, "AI Workspace", -1)
                ])]))
              ])
            ])
          ]),
          e[20] || (e[20] = s("div", { class: "header-center" }, [
            s("span", { class: "welcome-text" }, "Welcome to AI Workspace")
          ], -1)),
          s("div", Ba, [
            y(Se, {
              type: "primary",
              size: "large",
              class: "login-button",
              onClick: e[3] || (e[3] = (v) => W.value = !0)
            }, {
              default: f(() => [
                y(o, null, {
                  default: f(() => [
                    y(ae(Ye))
                  ]),
                  _: 1
                }),
                e[19] || (e[19] = G(" Login / Signup ", -1))
              ]),
              _: 1
            })
          ])
        ])),
        B.value && a.showWorkspaceSelector ? (m(), q(Ve, {
          key: 4,
          modelValue: b.value,
          "onUpdate:modelValue": e[5] || (e[5] = (v) => b.value = v),
          title: "Switch Workspace",
          width: "500px",
          onClose: e[6] || (e[6] = (v) => b.value = !1)
        }, {
          footer: f(() => [
            y(Se, {
              onClick: e[4] || (e[4] = (v) => b.value = !1)
            }, {
              default: f(() => [...e[21] || (e[21] = [
                G("Cancel", -1)
              ])]),
              _: 1
            }),
            y(Se, {
              type: "primary",
              onClick: S
            }, {
              default: f(() => [...e[22] || (e[22] = [
                G("Create New Workspace", -1)
              ])]),
              _: 1
            })
          ]),
          default: f(() => [
            s("div", Ka, [
              (m(!0), A(We, null, Ie(U.value, (v) => {
                var de, Re;
                return m(), A("div", {
                  key: v.id,
                  class: Ae(["workspace-item", { active: v.id === ((de = z.value) == null ? void 0 : de.id) }]),
                  onClick: (es) => w(v)
                }, [
                  s("div", qa, D(v.children && v.children.length ? "📁" : "📄"), 1),
                  s("div", Ja, [
                    s("h3", null, D(v.title), 1),
                    s("p", null, D(v.description), 1),
                    s("span", ja, D(v.hasAccess ? "Active" : "Inactive"), 1)
                  ]),
                  v.id === ((Re = z.value) == null ? void 0 : Re.id) ? (m(), A("div", Xa, [
                    y(o, null, {
                      default: f(() => [
                        y(ae(Ge))
                      ]),
                      _: 1
                    })
                  ])) : K("", !0)
                ], 10, Ga);
              }), 128))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])) : K("", !0),
        y(la, {
          modelValue: W.value,
          "onUpdate:modelValue": e[7] || (e[7] = (v) => W.value = v),
          onLoginSuccess: $e
        }, null, 8, ["modelValue"])
      ]);
    };
  }
});
const ns = /* @__PURE__ */ Pe(Ya, [["__scopeId", "data-v-f98a8f3a"]]), Qa = { class: "auth-callback" }, Za = /* @__PURE__ */ re({
  __name: "AuthCallback",
  setup(d) {
    me(async () => {
      console.log("[AuthCallback] Component mounted, starting callback processing..."), console.log("[AuthCallback] Current URL:", window.location.href), console.log("[AuthCallback] Current hash:", window.location.hash);
      try {
        await new Promise(($) => setTimeout($, 500));
        const { data: h, error: E } = await ye.auth.getSession();
        if (E) {
          console.error("Error processing callback:", E), p();
          return;
        }
        if (h != null && h.session) {
          const $ = h.session.user;
          console.log("OAuth login successful:", $.email), h.session.access_token && we(he, h.session.access_token), h.session.refresh_token && we(fe, h.session.refresh_token), Ue();
          const L = He();
          console.log("[callback] Post-login redirect URL:", L), console.log("[callback] Session storage redirect:", sessionStorage.getItem("post-login-redirect")), console.log("[callback] Local storage redirect:", localStorage.getItem("post-login-redirect"));
          const O = L || "/";
          if (console.log("[callback] Final redirect URL:", O), O.startsWith("/")) {
            const V = window.location.origin, j = `${V}${O}`;
            console.log("[callback] redirecting to:", j, { hostname: window.location.hostname, origin: V }), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
              window.location.href = j;
            }, 100);
          } else
            console.log("[callback] redirecting to absolute URL:", O), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
              window.location.href = O;
            }, 100);
        } else
          p();
      } catch (h) {
        console.error("Error processing callback:", h), p();
      }
    });
    const p = () => {
      const E = window.location.href.replace("/auth/callback", "");
      window.location.href = E;
    };
    return (h, E) => (m(), A("div", Qa, [...E[0] || (E[0] = [
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
const ls = /* @__PURE__ */ Pe(Za, [["__scopeId", "data-v-acdf6325"]]);
export {
  he as ACCESS_COOKIE,
  ns as AIWorkspaceHeader,
  ls as AuthCallback,
  hs as LS_ACCESS_KEY,
  fs as LS_REFRESH_KEY,
  la as LoginModal,
  fe as REFRESH_COOKIE,
  ws as buildOAuthRedirectUrl,
  Le as clearLocalStorageTokens,
  pe as clearSessionCookie,
  ks as ensureCrossSubdomainCookies,
  gs as getCookie,
  He as getPostLoginBase,
  ze as initializeCrossSubdomainAuth,
  us as restoreCrossSubdomainSession,
  Ee as restoreSessionWithRetry,
  we as setSessionCookie,
  ds as setupAuthStateListener,
  vs as setupUniversalCallback,
  ye as supabase,
  Ue as syncCookiesToLocalStorage,
  ea as useAuth,
  Qe as useEnhancedAuth,
  Ze as useWorkspaceStore
};
