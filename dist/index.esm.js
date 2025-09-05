import { defineComponent as ae, openBlock as _, createElementBlock as U, createElementVNode as l, ref as x, computed as z, onMounted as ue, watch as oe, reactive as He, resolveComponent as K, createBlock as q, withCtx as h, toDisplayString as V, createVNode as y, unref as ee, withModifiers as te, createCommentVNode as H, createTextVNode as Y, createStaticVNode as ke, normalizeClass as we, Fragment as me, renderList as ve, normalizeStyle as Ye } from "vue";
import { ElForm as Xe, ElMessage as T, ElMessageBox as Ue } from "element-plus";
import { createClient as Ze } from "@supabase/supabase-js";
import { defineStore as qe } from "pinia";
/*! Element Plus Icons Vue v2.3.2 */
var Ke = /* @__PURE__ */ ae({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(s) {
    return (a, t) => (_(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      l("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"
      })
    ]));
  }
}), We = Ke, je = /* @__PURE__ */ ae({
  name: "Check",
  __name: "check",
  setup(s) {
    return (a, t) => (_(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      l("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      })
    ]));
  }
}), Qe = je, es = /* @__PURE__ */ ae({
  name: "Lock",
  __name: "lock",
  setup(s) {
    return (a, t) => (_(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      l("path", {
        fill: "currentColor",
        d: "M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96"
      }),
      l("path", {
        fill: "currentColor",
        d: "M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32m192-160v-64a192 192 0 1 0-384 0v64zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64"
      })
    ]));
  }
}), Pe = es, ss = /* @__PURE__ */ ae({
  name: "Message",
  __name: "message",
  setup(s) {
    return (a, t) => (_(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      l("path", {
        fill: "currentColor",
        d: "M128 224v512a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V224zm0-64h768a64 64 0 0 1 64 64v512a128 128 0 0 1-128 128H192A128 128 0 0 1 64 736V224a64 64 0 0 1 64-64"
      }),
      l("path", {
        fill: "currentColor",
        d: "M904 224 656.512 506.88a192 192 0 0 1-289.024 0L120 224zm-698.944 0 210.56 240.704a128 128 0 0 0 192.704 0L818.944 224z"
      })
    ]));
  }
}), as = ss, os = /* @__PURE__ */ ae({
  name: "User",
  __name: "user",
  setup(s) {
    return (a, t) => (_(), U("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      l("path", {
        fill: "currentColor",
        d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"
      })
    ]));
  }
}), ts = os;
const se = "aiworkspace.pro";
function he(s) {
  return s === "localhost" || /^\d+\.\d+\.\d+\.\d+$/.test(s);
}
function xe(s) {
  return s === se || s.endsWith(`.${se}`);
}
function pe(s) {
  return document.cookie.split(";").map((p) => p.trim()).filter((p) => s.some((S) => p.startsWith(S + "=")));
}
function X(s, a, t = 60 * 60 * 24 * 365) {
  const p = location.hostname;
  if (he(p)) {
    document.cookie = `${s}=${encodeURIComponent(a)}; Path=/; Max-Age=${t}; SameSite=Lax`, console.log("[auth][cookie][set][local]", { host: p, name: s, valuePreview: a.slice(0, 20) + "..." }), console.log("[auth][cookie][after]", pe([s]));
    return;
  }
  document.cookie = `${s}=${encodeURIComponent(a)}; Domain=.${se}; Path=/; Max-Age=${t}; SameSite=Lax; Secure`, document.cookie = `${s}=; Path=/; Max-Age=0; SameSite=Lax`, console.log("[auth][cookie][set][apex]", { host: p, apex: se, name: s, valuePreview: a.slice(0, 20) + "..." }), console.log("[auth][cookie][after]", pe([s]));
}
function re(s) {
  const a = new RegExp("(?:^|; )" + s.replace(/[$()*+.[\]?^{}|\\/-]/g, "\\$&") + "=([^;]*)"), t = document.cookie.match(a);
  return t ? decodeURIComponent(t[1]) : null;
}
function ie(s) {
  const a = location.hostname;
  if (he(a)) {
    document.cookie = `${s}=; Path=/; Max-Age=0; SameSite=Lax`, console.log("[auth][cookie][clear][local]", { host: a, name: s });
    return;
  }
  document.cookie = `${s}=; Domain=.${se}; Path=/; Max-Age=0; SameSite=Lax; Secure`, document.cookie = `${s}=; Path=/; Max-Age=0; SameSite=Lax`, console.log("[auth][cookie][clear][apex]", { host: a, apex: se, name: s }), console.log("[auth][cookie][after]", pe([s]));
}
function $e(s) {
  const a = location.hostname;
  if (he(a)) {
    console.log("[auth][cookie][promote] skip (local host)", a);
    return;
  }
  if (!xe(a)) {
    console.log("[auth][cookie][promote] skip (not under apex)", { host: a, apex: se });
    return;
  }
  console.log("[auth][cookie][promote] start", { host: a, apex: se, names: s }), s.forEach((t) => {
    const p = re(t);
    p ? X(t, p, 60 * 60 * 24 * 365) : console.log("[auth][cookie][promote] missing", t);
  }), console.log("[auth][cookie][promote] done", pe(s));
}
function ua() {
  return `${window.location.origin}/callback`;
}
function rs() {
  try {
    const s = new URLSearchParams(location.search), a = ["redirect", "redirect_to", "returnTo", "next"].find((p) => s.get(p));
    let t = a ? s.get(a) : "";
    if (console.log("[getPostLoginBase] URL params:", Object.fromEntries(s)), console.log("[getPostLoginBase] Found param key:", a), console.log("[getPostLoginBase] Candidate from params:", t), t || (t = sessionStorage.getItem("post-login-redirect") || localStorage.getItem("post-login-redirect") || "", console.log("[getPostLoginBase] Candidate from storage:", t)), t || (t = { VITE_SUPABASE_URL: "https://oqdnbpmmgntqtigstaow.supabase.co", VITE_SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xZG5icG1tZ250cXRpZ3N0YW93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0NTk2NDYsImV4cCI6MjA1MDAzNTY0Nn0.rn0nRY9xLgLt-ajiSPeG0PcdS9V-549C1yeqhcxxG40", VITE_APEX_DOMAIN: "aiworkspace.pro", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_DEFAULT_POST_LOGIN_URL || "/", console.log("[getPostLoginBase] Using default:", t)), t.startsWith("http"))
      try {
        const p = new URL(t);
        return xe(p.hostname) || he(p.hostname) ? (console.log("[getPostLoginBase] Returning absolute URL:", t), t) : (console.log("[getPostLoginBase] Invalid hostname, returning /"), "/");
      } catch {
        return console.log("[getPostLoginBase] Invalid URL, returning /"), "/";
      }
    return t.startsWith("/") || (t = "/" + t), console.log("[getPostLoginBase] Final candidate:", t), t;
  } catch (s) {
    return console.log("[getPostLoginBase] Error:", s), "/";
  }
}
const F = "sb-access-token", J = "sb-refresh-token", Ne = "sb-access-token", Re = "sb-refresh-token";
function le() {
  try {
    const s = re(F), a = re(J);
    s && localStorage.setItem(Ne, s), a && localStorage.setItem(Re, a), console.log("[auth][cookie->ls] sync", {
      hasAccess: !!s,
      hasRefresh: !!a
    });
  } catch (s) {
    console.log("[auth][cookie->ls] error", s);
  }
}
function _e() {
  try {
    localStorage.removeItem(Ne), localStorage.removeItem(Re), console.log("[auth][cookie->ls] cleared localStorage");
  } catch (s) {
    console.log("[auth][cookie->ls] clear error", s);
  }
}
async function da() {
  try {
    $e([F, J]);
    const s = re(F), a = re(J);
    if (s && a) {
      const { data: { session: t } } = await O.auth.getSession();
      if (!t) {
        const { data: p, error: S } = await O.auth.setSession({ access_token: s, refresh_token: a });
        S ? console.log("[auth][restore] error", S) : console.log("[auth][restore] done", !!p.session);
      }
    } else
      console.log("[auth][restore] no cookies present");
    le();
  } catch (s) {
    console.log("[auth][restore] exception", s);
  }
}
function ls() {
  console.log("[auth][listener] Setting up auth state listener..."), O.auth.onAuthStateChange(async (s, a) => {
    switch (console.log("[auth][listener] Auth state changed:", s, !!a), s) {
      case "TOKEN_REFRESHED":
        console.log("[auth][listener] Token refreshed successfully"), a && (X(F, a.access_token, 60 * 60 * 24 * 365), X(J, a.refresh_token, 60 * 60 * 24 * 365), le());
        break;
      case "SIGNED_IN":
        console.log("[auth][listener] User signed in"), a && (X(F, a.access_token, 60 * 60 * 24 * 365), X(J, a.refresh_token, 60 * 60 * 24 * 365), le());
        break;
      case "SIGNED_OUT":
        console.log("[auth][listener] User signed out");
        break;
      case "USER_UPDATED":
        console.log("[auth][listener] User updated");
        break;
      default:
        console.log("[auth][listener] Unhandled auth event:", s);
    }
  });
}
async function Ee() {
  try {
    const { data: { session: s } } = await O.auth.getSession();
    if (s && s.user)
      return console.log("[auth][restore] Active session found"), { success: !0, session: s };
    const a = re(F), t = re(J);
    if (a && t) {
      console.log("[auth][restore] Attempting to restore session from cookies...");
      const { data: p, error: S } = await O.auth.setSession({
        access_token: a,
        refresh_token: t
      });
      if (S)
        return console.log("[auth][restore] Failed to restore session:", S.message), { success: !1, error: S };
      if (p.session)
        return console.log("[auth][restore] Session restored successfully"), X(F, p.session.access_token, 60 * 60 * 24 * 365), X(J, p.session.refresh_token, 60 * 60 * 24 * 365), le(), { success: !0, session: p.session };
    }
    return console.log("[auth][restore] No valid session or cookies found"), { success: !1, error: "No valid session or cookies" };
  } catch (s) {
    return console.log("[auth][restore] Exception during session restoration:", s), { success: !1, error: s };
  }
}
const ye = "https://oqdnbpmmgntqtigstaow.supabase.co", Se = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xZG5icG1tZ250cXRpZ3N0YW93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0NTk2NDYsImV4cCI6MjA1MDAzNTY0Nn0.rn0nRY9xLgLt-ajiSPeG0PcdS9V-549C1yeqhcxxG40", O = Ze(
  ye,
  Se,
  {
    db: {
      schema: "public"
    },
    auth: {
      storageKey: "sb-auth-token",
      storage: localStorage,
      autoRefreshToken: !0,
      persistSession: !0,
      cookieOptions: {
        domain: window.location.hostname === "localhost" ? "localhost" : ".aiworkspace.pro",
        path: "/",
        sameSite: "Lax",
        secure: window.location.protocol === "https:",
        maxAge: 365 * 24 * 60 * 60
        // 1 year in seconds
      }
    }
  }
);
typeof window < "u" && ($e([F, J]), ls());
console.log("Supabase Configuration:", {
  url: ye,
  hasKey: !!Se,
  autoRefreshToken: !0,
  persistSession: !0
});
console.log("URL:", ye.replace(/https:\/\/(.+)\.supabase\.co/, "https://*****.supabase.co"));
console.log("Key configured:", !Se.includes("your-anon-key"));
console.log("Environment mode:", "production");
function ns() {
  const s = x({
    user: null,
    isAuthenticated: !1,
    isLoading: !0
  }), a = x(null), t = z(() => s.value.isAuthenticated), p = z(() => s.value.user), S = z(() => s.value.isLoading), P = async () => {
    var n, g, i, W, E, $, C, f, k, c, A, w, m, G, Z;
    try {
      const { data: { session: N } } = await O.auth.getSession();
      if (N && N.user) {
        const b = N.user, R = {
          id: b.id,
          name: ((n = b.user_metadata) == null ? void 0 : n.name) || ((g = b.user_metadata) == null ? void 0 : g.user_name) || ((i = b.user_metadata) == null ? void 0 : i.full_name) || ((W = b.email) == null ? void 0 : W.split("@")[0]) || "User",
          email: b.email,
          avatar_url: ((E = b.user_metadata) == null ? void 0 : E.avatar_url) || null,
          user_metadata: b.user_metadata
        };
        return s.value = {
          user: R,
          isAuthenticated: !0,
          isLoading: !1
        }, a.value = {
          user: R,
          access_token: N.access_token,
          refresh_token: N.refresh_token
        }, { success: !0, session: a.value };
      }
      console.log("[auth][enhanced] No active session, attempting to restore from cookies...");
      const M = await Ee();
      if (M.success && M.session) {
        console.log("[auth][enhanced] Session restored successfully");
        const b = M.session.user, R = {
          id: b.id,
          name: (($ = b.user_metadata) == null ? void 0 : $.name) || ((C = b.user_metadata) == null ? void 0 : C.user_name) || ((f = b.user_metadata) == null ? void 0 : f.full_name) || ((k = b.email) == null ? void 0 : k.split("@")[0]) || "User",
          email: b.email,
          avatar_url: ((c = b.user_metadata) == null ? void 0 : c.avatar_url) || null,
          user_metadata: b.user_metadata
        };
        return s.value = {
          user: R,
          isAuthenticated: !0,
          isLoading: !1
        }, a.value = M.session, { success: !0, session: a.value };
      } else
        console.log("[auth][enhanced] Failed to restore session:", M.error);
    } catch (N) {
      console.error("Error getting Supabase session:", N);
      try {
        const M = await Ee();
        if (M.success && M.session) {
          console.log("[auth][enhanced] Session restored after error");
          const b = M.session.user, R = {
            id: b.id,
            name: ((A = b.user_metadata) == null ? void 0 : A.name) || ((w = b.user_metadata) == null ? void 0 : w.user_name) || ((m = b.user_metadata) == null ? void 0 : m.full_name) || ((G = b.email) == null ? void 0 : G.split("@")[0]) || "User",
            email: b.email,
            avatar_url: ((Z = b.user_metadata) == null ? void 0 : Z.avatar_url) || null,
            user_metadata: b.user_metadata
          };
          return s.value = {
            user: R,
            isAuthenticated: !0,
            isLoading: !1
          }, a.value = M.session, { success: !0, session: a.value };
        }
      } catch (M) {
        console.error("Error restoring session:", M);
      }
    }
    return s.value = {
      user: null,
      isAuthenticated: !1,
      isLoading: !1
    }, a.value = null, { success: !1, error: "No valid session found" };
  }, D = async () => {
    try {
      await O.auth.signOut(), ie(F), ie(J), _e(), s.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1
      }, a.value = null, console.log("[auth][enhanced] User logged out successfully");
    } catch (n) {
      console.error("Error during logout:", n), s.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1
      }, a.value = null;
    }
  }, B = async (n, g) => {
    var i, W, E, $, C;
    try {
      s.value.isLoading = !0;
      const { data: f, error: k } = await O.auth.signInWithPassword({
        email: n,
        password: g
      });
      if (k)
        throw k;
      if (f.session) {
        const c = f.session.user, A = {
          id: c.id,
          name: ((i = c.user_metadata) == null ? void 0 : i.name) || ((W = c.user_metadata) == null ? void 0 : W.user_name) || ((E = c.user_metadata) == null ? void 0 : E.full_name) || (($ = c.email) == null ? void 0 : $.split("@")[0]) || "User",
          email: c.email,
          avatar_url: ((C = c.user_metadata) == null ? void 0 : C.avatar_url) || null,
          user_metadata: c.user_metadata
        };
        return s.value = {
          user: A,
          isAuthenticated: !0,
          isLoading: !1
        }, a.value = {
          user: A,
          access_token: f.session.access_token,
          refresh_token: f.session.refresh_token
        }, { success: !0, session: a.value };
      }
      return { success: !1, error: "No session returned" };
    } catch (f) {
      return console.error("Sign in error:", f), s.value.isLoading = !1, { success: !1, error: f };
    }
  }, L = async (n, g, i) => {
    var W, E, $, C, f;
    try {
      s.value.isLoading = !0;
      const { data: k, error: c } = await O.auth.signUp({
        email: n,
        password: g,
        options: {
          data: i
        }
      });
      if (c)
        throw c;
      if (k.session) {
        const A = k.session.user, w = {
          id: A.id,
          name: ((W = A.user_metadata) == null ? void 0 : W.name) || ((E = A.user_metadata) == null ? void 0 : E.user_name) || (($ = A.user_metadata) == null ? void 0 : $.full_name) || ((C = A.email) == null ? void 0 : C.split("@")[0]) || "User",
          email: A.email,
          avatar_url: ((f = A.user_metadata) == null ? void 0 : f.avatar_url) || null,
          user_metadata: A.user_metadata
        };
        return s.value = {
          user: w,
          isAuthenticated: !0,
          isLoading: !1
        }, a.value = {
          user: w,
          access_token: k.session.access_token,
          refresh_token: k.session.refresh_token
        }, { success: !0, session: a.value };
      }
      return { success: !1, error: "No session returned" };
    } catch (k) {
      return console.error("Sign up error:", k), s.value.isLoading = !1, { success: !1, error: k };
    }
  }, d = async () => {
    await P();
  };
  return ue(() => {
    d();
  }), {
    // State
    authState: s,
    currentSession: a,
    // Computed
    isAuthenticated: t,
    currentUser: p,
    isLoading: S,
    // Methods
    loadUserInfo: P,
    logout: D,
    signIn: B,
    signUp: L,
    checkAuth: d
  };
}
const is = qe("workspace", () => {
  const s = x(null), a = x([]), t = x(null), p = (d) => {
    s.value = d, localStorage.setItem("current_workspace", JSON.stringify(d));
  }, S = (d) => {
    a.value = d, localStorage.setItem("available_workspaces", JSON.stringify(d));
  };
  return {
    currentWorkspace: s,
    workspaces: a,
    user: t,
    setCurrentWorkspace: p,
    setWorkspaces: S,
    setUser: (d) => {
      t.value = d, localStorage.setItem("user_info", JSON.stringify(d));
    },
    loadPersistedData: () => {
      const d = localStorage.getItem("current_workspace");
      if (d)
        try {
          s.value = JSON.parse(d);
        } catch (i) {
          console.error("Error loading persisted workspace:", i);
        }
      const n = localStorage.getItem("available_workspaces");
      if (n)
        try {
          a.value = JSON.parse(n);
        } catch (i) {
          console.error("Error loading persisted workspaces:", i);
        }
      const g = localStorage.getItem("user_info");
      if (g)
        try {
          t.value = JSON.parse(g);
        } catch (i) {
          console.error("Error loading persisted user:", i);
        }
    },
    clearData: () => {
      s.value = null, a.value = [], t.value = null, localStorage.removeItem("current_workspace"), localStorage.removeItem("available_workspaces"), localStorage.removeItem("user_info");
    },
    loadWorkspaces: async (d = !1) => {
      try {
        const { data: { user: n } } = await O.auth.getUser();
        if (!n)
          return [];
        let g = O.from("workspaces").select(`
          id, title, description, parent_workspace_id, created_by, archived, created_at,
          workspace_access!inner ( access_type, shared_with_user_id ),
          workspace_activities!left ( updated_at )
        `).eq("workspace_access.shared_with_user_id", n.id);
        d || (g = g.eq("archived", !1));
        const { data: i, error: W } = await g;
        if (W)
          throw W;
        const E = /* @__PURE__ */ new Map();
        (i || []).forEach((c) => {
          (c.workspace_access || []).forEach((A) => {
            A.shared_with_user_id === n.id && E.set(c.id, A);
          });
        });
        const $ = [...new Set(
          (i || []).filter((c) => c.parent_workspace_id).map((c) => c.parent_workspace_id).filter((c) => !E.has(c))
        )];
        let C = [];
        if ($.length) {
          let c = O.from("workspaces").select("id, title, description, parent_workspace_id, created_by, archived, created_at").in("id", $);
          d || (c = c.eq("archived", !1));
          const { data: A, error: w } = await c;
          if (w)
            throw w;
          C = A || [];
        }
        const k = [...i || [], ...C].map((c) => {
          var A, w, m;
          return {
            id: c.id,
            title: c.title,
            description: c.description || "No description",
            parent_workspace_id: c.parent_workspace_id,
            created_by: c.created_by,
            archived: c.archived,
            created_at: c.created_at,
            latest_activity: ((w = (A = c.workspace_activities) == null ? void 0 : A[0]) == null ? void 0 : w.updated_at) || c.created_at,
            hasAccess: E.has(c.id),
            accessType: ((m = E.get(c.id)) == null ? void 0 : m.access_type) || null
          };
        });
        return k.sort((c, A) => new Date(A.latest_activity) - new Date(c.latest_activity)), S(k), k;
      } catch (n) {
        return console.error("loadWorkspaces error", n), [];
      }
    }
  };
});
function cs() {
  const s = x({
    user: null,
    isAuthenticated: !1,
    isLoading: !0,
    error: null
  }), a = x(window.location.href), t = async () => {
    var d, n, g, i, W, E, $, C;
    try {
      s.value.isLoading = !0;
      const { data: { session: f }, error: k } = await O.auth.getSession();
      if (k) {
        console.error("Error checking auth status:", k), s.value = {
          user: null,
          isAuthenticated: !1,
          isLoading: !1,
          error: k.message
        };
        return;
      }
      f != null && f.user ? (s.value = {
        user: {
          id: f.user.id,
          email: f.user.email || "",
          name: ((d = f.user.user_metadata) == null ? void 0 : d.full_name) || ((n = f.user.user_metadata) == null ? void 0 : n.name) || ((g = f.user.email) == null ? void 0 : g.split("@")[0]) || "User",
          avatar_url: ((i = f.user.user_metadata) == null ? void 0 : i.avatar_url) || ((W = f.user.user_metadata) == null ? void 0 : W.picture) || null,
          initials: (((E = f.user.user_metadata) == null ? void 0 : E.full_name) || (($ = f.user.user_metadata) == null ? void 0 : $.name) || ((C = f.user.email) == null ? void 0 : C.split("@")[0]) || "U").split(" ").map((c) => c[0]).join("").toUpperCase().substring(0, 2)
        },
        isAuthenticated: !0,
        isLoading: !1,
        error: null
      }, f.access_token && X(F, f.access_token), f.refresh_token && X(J, f.refresh_token), le()) : s.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      };
    } catch (f) {
      console.error("Auth check failed:", f), s.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: f.message || "Authentication check failed"
      };
    }
  }, p = async (d, n) => {
    try {
      const { error: g } = await O.auth.signInWithPassword({
        email: d,
        password: n
      });
      return g ? { success: !1, error: g.message } : (await t(), sessionStorage.setItem("post-login-redirect", a.value), { success: !0 });
    } catch (g) {
      return console.error("Login error:", g), { success: !1, error: g.message || "Login failed" };
    }
  }, S = async (d, n) => {
    var g;
    try {
      const { data: i, error: W } = await O.auth.signUp({
        email: d,
        password: n
      });
      return W ? { success: !1, error: W.message } : i.user && !i.user.email_confirmed_at ? { success: !0, needsConfirmation: !0 } : (g = i.session) != null && g.user ? (await t(), sessionStorage.setItem("post-login-redirect", a.value), { success: !0 }) : { success: !1, error: "No session created" };
    } catch (i) {
      return console.error("Signup error:", i), { success: !1, error: i.message || "Signup failed" };
    }
  }, P = async (d) => {
    try {
      const n = `${window.location.origin}/auth/callback`;
      console.log("[OAuth] Starting login with provider:", d), console.log("[OAuth] Redirect URL:", n), console.log("[OAuth] Current URL:", a.value), console.log("[OAuth] Current origin:", window.location.origin);
      const { error: g } = await O.auth.signInWithOAuth({
        provider: d,
        options: {
          redirectTo: n,
          queryParams: {
            redirect_origin: a.value
          }
        }
      });
      if (g)
        return console.error("[OAuth] Error:", g), { success: !1, error: g.message };
      const i = a.value || window.location.href;
      return sessionStorage.setItem("post-login-redirect", i), localStorage.setItem("post-login-redirect", i), console.log("[OAuth] Stored redirect URL:", i), console.log("[OAuth] Current URL value:", a.value), console.log("[OAuth] Window location href:", window.location.href), { success: !0 };
    } catch (n) {
      return console.error("OAuth login error:", n), { success: !1, error: n.message || "OAuth login failed" };
    }
  }, D = async () => {
    try {
      const { error: d } = await O.auth.signOut();
      d && console.error("Logout error:", d), s.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      }, ie(F), ie(J), _e();
    } catch (d) {
      console.error("Logout error:", d);
    }
  }, B = async (d) => {
    try {
      const { error: n } = await O.auth.resetPasswordForEmail(d, {
        redirectTo: `${window.location.origin}/auth/reset-password`
      });
      return n ? { success: !1, error: n.message } : { success: !0 };
    } catch (n) {
      return console.error("Password reset error:", n), { success: !1, error: n.message || "Password reset failed" };
    }
  }, L = () => {
    O.auth.onAuthStateChange((d, n) => {
      var g;
      switch (console.log("Auth state changed:", d, (g = n == null ? void 0 : n.user) == null ? void 0 : g.email), d) {
        case "SIGNED_IN":
          n != null && n.user && t();
          break;
        case "SIGNED_OUT":
          s.value = {
            user: null,
            isAuthenticated: !1,
            isLoading: !1,
            error: null
          }, ie(F), ie(J), _e();
          break;
        case "TOKEN_REFRESHED":
          n != null && n.access_token && X(F, n.access_token), n != null && n.refresh_token && X(J, n.refresh_token), le();
          break;
        case "USER_UPDATED":
          n != null && n.user && t();
          break;
      }
    });
  };
  return ue(async () => {
    L(), await t();
  }), oe(() => window.location.href, (d) => {
    a.value = d;
  }), {
    authState: z(() => s.value),
    isAuthenticated: z(() => s.value.isAuthenticated),
    user: z(() => s.value.user),
    isLoading: z(() => s.value.isLoading),
    checkAuthStatus: t,
    loginWithEmail: p,
    signupWithEmail: S,
    loginWithProvider: P,
    logout: D,
    resetPassword: B,
    currentUrl: z(() => a.value)
  };
}
const us = { class: "login-container" }, ds = { class: "logo-section" }, ps = { class: "login-buttons" }, hs = {
  key: 0,
  class: "forgot-password"
}, fs = { class: "signup-link" }, gs = /* @__PURE__ */ ae({
  __name: "LoginModal",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue", "login-success"],
  setup(s, { emit: a }) {
    const t = s, p = a, S = z({
      get: () => t.modelValue,
      set: (w) => p("update:modelValue", w)
    }), P = x(!1), D = x(!1), B = x(), { loginWithEmail: L, signupWithEmail: d, loginWithProvider: n, resetPassword: g } = cs(), i = He({
      email: "",
      password: "",
      confirmPassword: ""
    }), W = z(() => ({
      email: [
        { required: !0, message: "Please enter your email", trigger: "blur" },
        { type: "email", message: "Please enter a valid email", trigger: "blur" }
      ],
      password: [
        { required: !0, message: "Please enter your password", trigger: "blur" },
        { min: 6, message: "Password must be at least 6 characters", trigger: "blur" }
      ],
      ...P.value ? {
        confirmPassword: [
          { required: !0, message: "Please confirm your password", trigger: "blur" },
          {
            validator: (w, m, G) => {
              m !== i.password ? G(new Error("Passwords do not match")) : G();
            },
            trigger: "blur"
          }
        ]
      } : {}
    })), E = () => {
      var w;
      P.value = !P.value, i.email = "", i.password = "", i.confirmPassword = "", (w = B.value) == null || w.clearValidate();
    }, $ = () => {
      var w;
      S.value = !1, i.email = "", i.password = "", i.confirmPassword = "", P.value = !1, (w = B.value) == null || w.clearValidate();
    }, C = async () => {
      if (B.value)
        try {
          await B.value.validate(), D.value = !0, P.value ? await k() : await f();
        } catch (w) {
          console.error("Form validation failed:", w);
        } finally {
          D.value = !1;
        }
    }, f = async () => {
      const w = await L(i.email, i.password);
      w.success ? (T.success("Login successful"), p("login-success", { email: i.email }), $()) : T.error("Login failed: " + w.error);
    }, k = async () => {
      const w = await d(i.email, i.password);
      w.success ? w.needsConfirmation ? T.success("Please check your email to confirm your account") : (T.success("Account created successfully"), p("login-success", { email: i.email }), $()) : T.error("Signup failed: " + w.error);
    }, c = async (w) => {
      const m = await n(w);
      m.success ? T.success("Redirecting to login provider...") : T.error("Login failed: " + m.error);
    }, A = async () => {
      if (!i.email) {
        T.warning("Please enter your email address first");
        return;
      }
      const w = await g(i.email);
      w.success ? T.success("Password reset email sent! Please check your inbox.") : T.error("Failed to send reset email: " + w.error);
    };
    return (w, m) => {
      const G = K("el-icon"), Z = K("el-input"), N = K("el-form-item"), M = K("el-button"), b = K("el-dialog");
      return _(), q(b, {
        modelValue: S.value,
        "onUpdate:modelValue": m[6] || (m[6] = (R) => S.value = R),
        title: "",
        width: "500px",
        "close-on-click-modal": !1,
        "close-on-press-escape": !0,
        "show-close": !0,
        class: "login-modal",
        onClose: $
      }, {
        default: h(() => [
          l("div", us, [
            l("div", ds, [
              l("h2", null, V(P.value ? "Create Account" : "Welcome Back"), 1),
              l("p", null, V(P.value ? "Sign up to get started with your account" : "Sign in to continue to your account"), 1)
            ]),
            y(ee(Xe), {
              model: i,
              rules: W.value,
              ref_key: "formRef",
              ref: B,
              class: "login-form",
              onSubmit: te(C, ["prevent"])
            }, {
              default: h(() => [
                y(N, { prop: "email" }, {
                  default: h(() => [
                    y(Z, {
                      modelValue: i.email,
                      "onUpdate:modelValue": m[0] || (m[0] = (R) => i.email = R),
                      placeholder: "Email",
                      type: "email",
                      size: "large",
                      class: "form-input"
                    }, {
                      prefix: h(() => [
                        y(G, null, {
                          default: h(() => [
                            y(ee(as))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                y(N, { prop: "password" }, {
                  default: h(() => [
                    y(Z, {
                      modelValue: i.password,
                      "onUpdate:modelValue": m[1] || (m[1] = (R) => i.password = R),
                      placeholder: "Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: h(() => [
                        y(G, null, {
                          default: h(() => [
                            y(ee(Pe))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                P.value ? (_(), q(N, {
                  key: 0,
                  prop: "confirmPassword"
                }, {
                  default: h(() => [
                    y(Z, {
                      modelValue: i.confirmPassword,
                      "onUpdate:modelValue": m[2] || (m[2] = (R) => i.confirmPassword = R),
                      placeholder: "Confirm Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: h(() => [
                        y(G, null, {
                          default: h(() => [
                            y(ee(Pe))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                })) : H("", !0),
                y(N, null, {
                  default: h(() => [
                    y(M, {
                      type: "primary",
                      class: "submit-button",
                      loading: D.value,
                      onClick: C,
                      size: "large"
                    }, {
                      default: h(() => [
                        Y(V(P.value ? "Sign Up" : "Sign In"), 1)
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model", "rules"]),
            m[10] || (m[10] = l("div", { class: "divider" }, [
              l("span", null, "Or continue with")
            ], -1)),
            l("div", ps, [
              y(M, {
                class: "login-button google",
                onClick: m[3] || (m[3] = (R) => c("google")),
                size: "large"
              }, {
                default: h(() => [...m[7] || (m[7] = [
                  l("span", { class: "social-icon" }, "G", -1),
                  Y(" Google ", -1)
                ])]),
                _: 1
              }),
              y(M, {
                class: "login-button github",
                onClick: m[4] || (m[4] = (R) => c("github")),
                size: "large"
              }, {
                default: h(() => [...m[8] || (m[8] = [
                  l("span", { class: "social-icon" }, "⚡", -1),
                  Y(" GitHub ", -1)
                ])]),
                _: 1
              }),
              y(M, {
                class: "login-button twitter",
                onClick: m[5] || (m[5] = (R) => c("twitter")),
                size: "large"
              }, {
                default: h(() => [...m[9] || (m[9] = [
                  l("span", { class: "social-icon" }, "X", -1),
                  Y(" X (Twitter) ", -1)
                ])]),
                _: 1
              })
            ]),
            m[11] || (m[11] = l("div", { class: "terms" }, " By continuing, you agree to AI Workspace's Terms of Service and Privacy Policy ", -1)),
            P.value ? H("", !0) : (_(), U("div", hs, [
              l("a", {
                href: "#",
                onClick: te(A, ["prevent"])
              }, "Forgot Password?")
            ])),
            l("div", fs, [
              Y(V(P.value ? "Already have an account?" : "Don't have an account?") + " ", 1),
              l("a", {
                href: "#",
                onClick: te(E, ["prevent"])
              }, V(P.value ? "Sign in" : "Sign up"), 1)
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
const be = (s, a) => {
  const t = s.__vccOpts || s;
  for (const [p, S] of a)
    t[p] = S;
  return t;
}, ks = /* @__PURE__ */ be(gs, [["__scopeId", "data-v-684a3f28"]]), ws = { class: "aiworkspace-header" }, ms = {
  key: 0,
  class: "header-content header-loading"
}, vs = {
  key: 1,
  class: "header-content header-fallback"
}, _s = {
  key: 2,
  class: "header-content"
}, ys = { class: "header-left" }, Ss = { class: "logo-section" }, bs = {
  href: "/",
  class: "logo"
}, Is = ["src"], As = {
  key: 1,
  class: "text-logo"
}, Ls = {
  key: 0,
  class: "header-center"
}, Cs = { class: "main-navigation" }, Us = { class: "nav-item" }, Ws = {
  href: "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard",
  class: "nav-link"
}, Ps = { class: "workspace-dropdown-item" }, Es = ["href"], xs = { class: "workspace-icon" }, $s = {
  key: 1,
  class: "nav-divider"
}, Ns = { class: "nav-item" }, Rs = ["href", "onClick"], Os = { class: "header-right" }, Ms = { class: "user-profile" }, Ds = { class: "user-info" }, Vs = { class: "user-name" }, Ts = { class: "user-avatar" }, Bs = ["src", "alt"], zs = {
  key: 1,
  class: "avatar-placeholder"
}, Fs = {
  key: 3,
  class: "header-content header-unauthenticated"
}, Js = { class: "header-left" }, Gs = { class: "logo-section" }, Hs = {
  href: "/",
  class: "logo"
}, Ys = ["src"], Xs = {
  key: 1,
  class: "text-logo"
}, Zs = { class: "header-right" }, qs = { class: "workspace-list" }, Ks = ["onClick"], js = { class: "workspace-icon" }, Qs = { class: "workspace-details" }, ea = { class: "workspace-members" }, sa = {
  key: 0,
  class: "current-indicator"
}, ce = 50, aa = /* @__PURE__ */ ae({
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
  setup(s, { emit: a }) {
    const t = s, p = a, { authState: S, logout: P } = ns(), D = () => {
      try {
        return is();
      } catch {
        return console.warn("[AIWorkspaceHeader] Pinia not initialized yet, using fallback state"), null;
      }
    }, B = () => {
      try {
        return typeof window < "u" ? !!window.__PINIA__ || !!window.Pinia : !1;
      } catch {
        return !1;
      }
    }, L = x(D()), d = z(() => !!L.value), n = x(0), g = () => {
      if (!L.value && n.value < ce) {
        if (B()) {
          const o = D();
          if (o) {
            L.value = o, console.log("[AIWorkspaceHeader] Pinia store initialized successfully");
            return;
          }
        }
        n.value++, setTimeout(g, 100);
      } else
        n.value >= ce && console.warn("[AIWorkspaceHeader] Pinia initialization failed after maximum retries, using fallback mode");
    };
    ue(() => {
      L.value || g();
    });
    const i = x(!1), W = x(!1), E = x([]), $ = x([]), C = x({
      name: "",
      email: "",
      avatar_url: null,
      initials: ""
    }), f = x([]), k = x([]), c = x(!1);
    oe(k, async (o) => {
      o.length > 0 && d.value && Z.value && await G();
    }, { immediate: !1 }), oe(() => window.location.pathname + window.location.search + window.location.hash, async () => {
      d.value && Z.value && await G();
    }, { immediate: !1 });
    const A = x(window.location.pathname);
    oe(() => window.location.pathname, (o) => {
      A.value = o;
    }, { immediate: !0 }), oe(d, (o) => {
      !o && n.value < ce && g();
    });
    const w = () => {
      try {
        const o = window.location.pathname.match(/\/single-workspace\/(\d+)/);
        if (o)
          return o[1];
        const r = new URLSearchParams(window.location.search).get("workspace_id");
        if (r)
          return r;
        const u = window.location.hash.match(/workspace_id=(\d+)/);
        return u ? u[1] : null;
      } catch (o) {
        return console.warn("[AIWorkspaceHeader] Error parsing URL for workspace_id:", o), null;
      }
    }, m = () => {
      try {
        return window.location.pathname.includes("/all-workspace/");
      } catch (o) {
        return console.warn("[AIWorkspaceHeader] Error checking all-workspace mode:", o), !1;
      }
    }, G = async () => {
      if (!L.value || !d.value)
        return;
      const o = m();
      if (c.value = o, o) {
        L.value.currentWorkspace = null, localStorage.removeItem("current_workspace"), console.log("[AIWorkspaceHeader] Auto-selected all-workspace mode from URL");
        return;
      }
      const e = w();
      if (e)
        try {
          k.value.length === 0 && await Ae();
          const r = k.value.find((u) => u.id.toString() === e);
          r ? (L.value.setCurrentWorkspace(r), console.log(`[AIWorkspaceHeader] Auto-selected workspace from URL: ${r.title} (ID: ${r.id})`), p("workspaceChange", r)) : console.warn(`[AIWorkspaceHeader] Workspace with ID ${e} not found in available workspaces`);
        } catch (r) {
          console.error("[AIWorkspaceHeader] Error auto-selecting workspace from URL:", r);
        }
    }, Z = z(() => S.value.isAuthenticated), N = z(() => L.value ? L.value.currentWorkspace : null), M = x([
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
    ]), b = x([
      { label: "Dashboard", key: "dashboard", url: "/dashboard" },
      { label: "All Tasks", key: "tasks", url: "/tasks" },
      { label: "All Goals", key: "goals", url: "/goals" },
      { label: "All Events", key: "events", url: "/events" },
      { label: "All Drive", key: "files", url: "/files" },
      { label: "All Contacts", key: "contacts", url: "/contacts" },
      { label: "All Settings", key: "settings", url: "/settings" }
    ]), R = z(() => c.value ? b.value : M.value), Oe = z(() => {
      try {
        const o = A.value;
        let e = "";
        const r = o.match(/\/all-workspace\/([^\/]+)/);
        if (r)
          e = r[1];
        else {
          const u = o.match(/\/single-workspace\/\d+\/([^\/]+)/);
          if (u)
            e = u[1];
          else {
            const I = o.match(/\/([^\/]+)$/);
            I && (e = I[1]);
          }
        }
        if (e) {
          const u = R.value.find(
            (I) => I.key === e || I.url.includes(`/${e}`) || I.url === `/${e}`
          );
          if (u)
            return u.label;
        }
        return "Dashboard";
      } catch (o) {
        return console.warn("[AIWorkspaceHeader] Error determining current section:", o), "Dashboard";
      }
    }), Me = (o) => {
      const e = /* @__PURE__ */ new Map();
      o.forEach((I) => {
        e.set(I.id, { ...I, children: [] });
      });
      const r = [];
      e.forEach((I) => {
        I.parent_workspace_id && e.has(I.parent_workspace_id) ? e.get(I.parent_workspace_id).children.push(I) : r.push(I);
      });
      const u = (I) => {
        I.sort((j, Q) => j.title.localeCompare(Q.title)), I.forEach((j) => {
          j.children && u(j.children);
        });
      };
      return u(r), r;
    }, Ie = (o, e = 0, r = []) => (o.forEach((u) => {
      r.push({ ...u, level: e }), u.children && u.children.length && Ie(u.children, e + 1, r);
    }), r), Ae = async () => {
      var o, e, r;
      try {
        const u = await ((o = L.value) == null ? void 0 : o.loadWorkspaces());
        if (f.value = Me(u || []), k.value = Ie(f.value), $.value = k.value, E.value = k.value, t.currentWorkspaceId) {
          const I = k.value.find((j) => {
            var Q;
            return j.id.toString() === ((Q = t.currentWorkspaceId) == null ? void 0 : Q.toString());
          });
          I && ((e = L.value) == null || e.setCurrentWorkspace(I));
        } else
          !N.value && k.value.length && ((r = L.value) == null || r.setCurrentWorkspace(k.value[0]));
      } catch (u) {
        console.error("loadWorkspaces (header) error", u);
      }
    }, De = (o) => {
      if (console.log("Navigation command:", o), o === "all-workspace") {
        window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
        return;
      } else {
        const e = parseInt(o.replace("workspace-", ""));
        window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e}/dashboard`;
        return;
      }
    }, Ve = (o) => {
      const e = N.value, r = c.value;
      switch (o.key) {
        case "dashboard":
          r ? window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard" : e ? window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e.id}/dashboard` : window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
          break;
        case "outlines":
          if (r)
            window.location.href = "https://outline.aiworkspace.pro/all-workspace/outlines";
          else if (e) {
            const u = `https://outline.aiworkspace.pro/single-workspace/${e.id}/outlines`;
            window.location.href = u;
          } else
            window.location.href = "https://outline.aiworkspace.pro";
          break;
        case "canvas":
          if (r)
            window.location.href = "https://canvas.aiworkspace.pro/all-workspace/canvas";
          else if (e) {
            const u = `https://canvas.aiworkspace.pro/single-workspace/${e.id}/canvas`;
            window.location.href = u;
          } else
            window.location.href = "https://canvas.aiworkspace.pro";
          break;
        case "files":
          if (r)
            window.location.href = "https://drive.aiworkspace.pro/all-workspace/files";
          else if (e) {
            const u = `https://drive.aiworkspace.pro/single-workspace/${e.id}/files`;
            window.location.href = u;
          } else
            window.location.href = "https://drive.aiworkspace.pro";
          break;
        case "tasks":
          if (r)
            window.location.href = "https://tasks.aiworkspace.pro/all-workspace/tasks";
          else if (e) {
            const u = `https://tasks.aiworkspace.pro/single-workspace/${e.id}/tasks`;
            window.location.href = u;
          } else
            window.location.href = "https://tasks.aiworkspace.pro";
          break;
        case "goals":
          if (r)
            window.location.href = "https://app.aiworkspace.pro/all-workspace/goals";
          else if (e) {
            const u = `https://app.aiworkspace.pro/single-workspace/${e.id}/goals`;
            window.location.href = u;
          } else
            window.location.href = "https://app.aiworkspace.pro/all-workspace/goals";
          break;
        case "events":
          if (r)
            window.location.href = "https://app.aiworkspace.pro/all-workspace/events";
          else if (e) {
            const u = `https://app.aiworkspace.pro/single-workspace/${e.id}/events`;
            window.location.href = u;
          } else
            window.location.href = "https://app.aiworkspace.pro/all-workspace/events";
          break;
        case "contacts":
          if (r)
            window.location.href = "https://app.aiworkspace.pro/all-workspace/contacts";
          else if (e) {
            const u = `https://app.aiworkspace.pro/single-workspace/${e.id}/contacts`;
            window.location.href = u;
          } else
            window.location.href = "https://app.aiworkspace.pro/all-workspace/contacts";
          break;
        case "ai-portfolios":
          if (r)
            window.location.href = "https://spreadsheet.aiworkspace.pro/all-workspace/ai-portfolios";
          else if (e) {
            const u = `https://spreadsheet.aiworkspace.pro/single-workspace/${e.id}/ai-portfolios`;
            window.location.href = u;
          } else
            window.location.href = "https://spreadsheet.aiworkspace.pro";
          break;
        case "settings":
          if (r)
            window.location.href = "https://settings.aiworkspace.pro/all-workspace/settings";
          else if (e) {
            const u = `https://settings.aiworkspace.pro/single-workspace/${e.id}/settings`;
            window.location.href = u;
          } else
            window.location.href = "https://settings.aiworkspace.pro";
          break;
        default:
          if (r) {
            const u = `https://app.aiworkspace.pro/all-workspace/${o.key}`;
            window.location.href = u;
          } else if (e) {
            const u = `https://app.aiworkspace.pro/single-workspace/${e.id}/${o.key}`;
            window.location.href = u;
          } else {
            const u = `https://app.aiworkspace.pro/${o.key}`;
            window.location.href = u;
          }
          break;
      }
    }, Te = (o) => {
      const e = N.value, r = c.value;
      switch (o.key) {
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
          return r ? `https://app.aiworkspace.pro/all-workspace/${o.key}` : e ? `https://app.aiworkspace.pro/single-workspace/${e.id}/${o.key}` : `https://app.aiworkspace.pro/${o.key}`;
      }
    }, de = (o) => {
      switch (o) {
        case "profile":
          t.onProfileClick ? t.onProfileClick() : T.info("Profile settings coming soon");
          break;
        case "workspaces":
          i.value = !0;
          break;
        case "logout":
          ze();
          break;
      }
    }, Le = (o) => {
      var e;
      (e = L.value) == null || e.setCurrentWorkspace(o), i.value = !1, p("workspaceChange", o), T.success(`Switched to ${o.title}`);
    }, Be = () => {
      Ue.prompt("Enter workspace name:", "Create New Workspace", {
        confirmButtonText: "Create",
        cancelButtonText: "Cancel",
        inputPattern: /\S/,
        inputErrorMessage: "Workspace name cannot be empty"
      }).then(({ value: o }) => {
        var r;
        const e = {
          id: Date.now(),
          title: o,
          description: "New workspace",
          archived: !1,
          created_by: "",
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          latest_activity: (/* @__PURE__ */ new Date()).toISOString(),
          hasAccess: !0,
          accessType: "edit"
        };
        E.value.push(e), (r = L.value) == null || r.setWorkspaces(E.value), Le(e), T.success(`Created workspace: ${o}`);
      }).catch(() => {
      });
    }, ze = () => {
      Ue.confirm(
        "Are you sure you want to sign out?",
        "Sign Out",
        {
          confirmButtonText: "Sign Out",
          cancelButtonText: "Cancel",
          type: "warning"
        }
      ).then(async () => {
        var o;
        (o = L.value) == null || o.clearData(), await P(), p("logout"), T.success("Signed out successfully");
      }).catch(() => {
      });
    }, fe = async () => {
      var o, e;
      if (S.value.user) {
        const r = S.value.user;
        C.value = {
          name: r.name || ((o = r.email) == null ? void 0 : o.split("@")[0]) || "User",
          email: r.email || "",
          avatar_url: r.avatar_url || null,
          initials: (r.name || ((e = r.email) == null ? void 0 : e.split("@")[0]) || "U").split(" ").map((u) => u[0]).join("").toUpperCase().substring(0, 2)
        }, t.showWorkspaceSelector && await Ae();
      }
    };
    oe(() => S.value.user, (o) => {
      var e;
      o ? fe() : (C.value = { name: "", email: "", avatar_url: null, initials: "" }, (e = L.value) == null || e.clearData());
    }), oe(() => t.currentWorkspaceId, (o) => {
      var e;
      if (o && k.value.length) {
        const r = k.value.find((u) => u.id.toString() === o.toString());
        r && ((e = L.value) == null || e.setCurrentWorkspace(r));
      }
    }), ue(async () => {
      Z.value && (await fe(), await G());
    });
    const Fe = async (o) => {
      console.log("Login successful:", o), W.value = !1, await fe(), p("login"), T.success("Welcome back!");
    }, Je = () => {
      n.value = 0, g(), T.success("Manual Pinia retry initiated.");
    };
    return (o, e) => {
      const r = K("el-icon"), u = K("el-tag"), I = K("el-dropdown-item"), j = K("el-dropdown-menu"), Q = K("el-dropdown"), ge = K("el-button"), Ge = K("el-dialog");
      return _(), U("header", ws, [
        !d.value && n.value < ce ? (_(), U("div", ms, [...e[8] || (e[8] = [
          ke('<div class="header-left" data-v-f830d242><div class="logo-section" data-v-f830d242><a href="/" class="logo" data-v-f830d242><div class="text-logo" data-v-f830d242><span class="logo-text" data-v-f830d242>AI Workspace</span></div></a></div></div><div class="header-center" data-v-f830d242><span class="loading-text" data-v-f830d242>Initializing...</span></div>', 2)
        ])])) : !d.value && n.value >= ce ? (_(), U("div", vs, [
          e[10] || (e[10] = ke('<div class="header-left" data-v-f830d242><div class="logo-section" data-v-f830d242><a href="/" class="logo" data-v-f830d242><div class="text-logo" data-v-f830d242><span class="logo-text" data-v-f830d242>AI Workspace</span></div></a></div></div>', 1)),
          l("div", { class: "header-center" }, [
            e[9] || (e[9] = l("span", { class: "fallback-text" }, "Header Ready (Fallback Mode)", -1)),
            l("button", {
              onClick: Je,
              class: "retry-button"
            }, "Retry Pinia")
          ]),
          e[11] || (e[11] = ke('<div class="header-right" data-v-f830d242><div class="user-profile" data-v-f830d242><div class="user-info" data-v-f830d242><span class="user-name" data-v-f830d242>User</span></div><div class="user-avatar" data-v-f830d242><span class="avatar-placeholder" data-v-f830d242>U</span></div></div></div>', 1))
        ])) : Z.value ? (_(), U("div", _s, [
          l("div", ys, [
            l("div", Ss, [
              l("a", bs, [
                o.customLogo ? (_(), U("img", {
                  key: 0,
                  src: o.customLogo,
                  alt: "AIWorkspace",
                  class: "logo-image"
                }, null, 8, Is)) : (_(), U("div", As, [...e[12] || (e[12] = [
                  l("span", { class: "logo-text" }, "AI Workspace", -1)
                ])]))
              ])
            ])
          ]),
          o.showSecondaryNavigation ? (_(), U("div", Ls, [
            l("nav", Cs, [
              o.showWorkspaceSelector ? (_(), q(Q, {
                key: 0,
                onCommand: De,
                trigger: "hover"
              }, {
                dropdown: h(() => [
                  y(j, { class: "workspace-tree-dropdown" }, {
                    default: h(() => [
                      y(I, {
                        command: "all-workspace",
                        class: we({ active: c.value })
                      }, {
                        default: h(() => [
                          l("a", Ws, [
                            l("div", Ps, [
                              e[14] || (e[14] = l("span", { class: "workspace-icon" }, "🌐", -1)),
                              e[15] || (e[15] = l("span", null, "All workspace", -1)),
                              c.value ? (_(), q(u, {
                                key: 0,
                                size: "small",
                                type: "success"
                              }, {
                                default: h(() => [...e[13] || (e[13] = [
                                  Y("Current", -1)
                                ])]),
                                _: 1
                              })) : H("", !0)
                            ])
                          ])
                        ]),
                        _: 1
                      }, 8, ["class"]),
                      k.value.length > 0 ? (_(), q(I, {
                        key: 0,
                        divided: "",
                        disabled: ""
                      })) : H("", !0),
                      (_(!0), U(me, null, ve(k.value, (v) => (_(), q(I, {
                        key: v.id,
                        command: `workspace-${v.id}`
                      }, {
                        default: h(() => {
                          var ne;
                          return [
                            l("a", {
                              href: `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${v.id}/dashboard`,
                              class: "nav-link"
                            }, [
                              l("div", {
                                class: "workspace-dropdown-item",
                                style: Ye({ paddingLeft: (v.level || 0) * 16 + "px" })
                              }, [
                                l("span", xs, V(v.children && v.children.length ? "📁" : "📄"), 1),
                                l("span", null, V(v.title), 1),
                                v.id === ((ne = N.value) == null ? void 0 : ne.id) ? (_(), q(u, {
                                  key: 0,
                                  size: "small",
                                  type: "success"
                                }, {
                                  default: h(() => [...e[16] || (e[16] = [
                                    Y("Current", -1)
                                  ])]),
                                  _: 1
                                })) : H("", !0)
                              ], 4)
                            ], 8, Es)
                          ];
                        }),
                        _: 2
                      }, 1032, ["command"]))), 128)),
                      k.value.length === 0 ? (_(), q(I, {
                        key: 1,
                        disabled: ""
                      }, {
                        default: h(() => [...e[17] || (e[17] = [
                          Y(" No workspaces ", -1)
                        ])]),
                        _: 1
                      })) : H("", !0)
                    ]),
                    _: 1
                  })
                ]),
                default: h(() => {
                  var v;
                  return [
                    l("span", Us, [
                      Y(V(c.value ? "All workspace" : ((v = N.value) == null ? void 0 : v.title) || "Select Workspace") + " ", 1),
                      y(r, { class: "nav-arrow" }, {
                        default: h(() => [
                          y(ee(We))
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }),
                _: 1
              })) : H("", !0),
              o.showWorkspaceSelector ? (_(), U("span", $s, "/")) : H("", !0),
              o.showSecondaryNavigation ? (_(), q(Q, {
                key: 2,
                trigger: "hover"
              }, {
                dropdown: h(() => [
                  y(j, null, {
                    default: h(() => [
                      (_(!0), U(me, null, ve(R.value, (v) => (_(), q(I, {
                        key: v.label,
                        class: we({ active: v.active })
                      }, {
                        default: h(() => [
                          l("a", {
                            href: Te(v),
                            class: "nav-link",
                            onClick: te((ne) => Ve(v), ["prevent"])
                          }, V(v.label), 9, Rs)
                        ]),
                        _: 2
                      }, 1032, ["class"]))), 128))
                    ]),
                    _: 1
                  })
                ]),
                default: h(() => [
                  l("span", Ns, [
                    Y(V(Oe.value) + " ", 1),
                    y(r, { class: "nav-arrow" }, {
                      default: h(() => [
                        y(ee(We))
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })) : H("", !0)
            ])
          ])) : H("", !0),
          l("div", Os, [
            y(Q, {
              onCommand: de,
              trigger: "click",
              placement: "bottom-end"
            }, {
              dropdown: h(() => [
                y(j, null, {
                  default: h(() => [
                    y(I, null, {
                      default: h(() => [
                        l("a", {
                          href: "/profile",
                          class: "nav-link",
                          onClick: e[0] || (e[0] = te((v) => de("profile"), ["prevent"]))
                        }, "Profile Settings")
                      ]),
                      _: 1
                    }),
                    o.showWorkspaceSelector ? (_(), q(I, { key: 0 }, {
                      default: h(() => [
                        l("a", {
                          href: "#switch-workspace",
                          class: "nav-link",
                          onClick: e[1] || (e[1] = te((v) => de("workspaces"), ["prevent"]))
                        }, "Switch Workspace")
                      ]),
                      _: 1
                    })) : H("", !0),
                    y(I, { divided: "" }, {
                      default: h(() => [
                        l("a", {
                          href: "#signout",
                          class: "nav-link",
                          onClick: e[2] || (e[2] = te((v) => de("logout"), ["prevent"]))
                        }, "Sign Out")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              default: h(() => [
                l("div", Ms, [
                  l("div", Ds, [
                    l("span", Vs, V(C.value.name), 1)
                  ]),
                  l("div", Ts, [
                    C.value.avatar_url ? (_(), U("img", {
                      key: 0,
                      src: C.value.avatar_url,
                      alt: C.value.name
                    }, null, 8, Bs)) : (_(), U("span", zs, V(C.value.initials), 1))
                  ])
                ])
              ]),
              _: 1
            })
          ])
        ])) : (_(), U("div", Fs, [
          l("div", Js, [
            l("div", Gs, [
              l("a", Hs, [
                o.customLogo ? (_(), U("img", {
                  key: 0,
                  src: o.customLogo,
                  alt: "AIWorkspace",
                  class: "logo-image"
                }, null, 8, Ys)) : (_(), U("div", Xs, [...e[18] || (e[18] = [
                  l("span", { class: "logo-text" }, "AI Workspace", -1)
                ])]))
              ])
            ])
          ]),
          e[20] || (e[20] = l("div", { class: "header-center" }, [
            l("span", { class: "welcome-text" }, "Welcome to AI Workspace")
          ], -1)),
          l("div", Zs, [
            y(ge, {
              type: "primary",
              size: "large",
              class: "login-button",
              onClick: e[3] || (e[3] = (v) => W.value = !0)
            }, {
              default: h(() => [
                y(r, null, {
                  default: h(() => [
                    y(ee(ts))
                  ]),
                  _: 1
                }),
                e[19] || (e[19] = Y(" Login / Signup ", -1))
              ]),
              _: 1
            })
          ])
        ])),
        Z.value && o.showWorkspaceSelector ? (_(), q(Ge, {
          key: 4,
          modelValue: i.value,
          "onUpdate:modelValue": e[5] || (e[5] = (v) => i.value = v),
          title: "Switch Workspace",
          width: "500px",
          onClose: e[6] || (e[6] = (v) => i.value = !1)
        }, {
          footer: h(() => [
            y(ge, {
              onClick: e[4] || (e[4] = (v) => i.value = !1)
            }, {
              default: h(() => [...e[21] || (e[21] = [
                Y("Cancel", -1)
              ])]),
              _: 1
            }),
            y(ge, {
              type: "primary",
              onClick: Be
            }, {
              default: h(() => [...e[22] || (e[22] = [
                Y("Create New Workspace", -1)
              ])]),
              _: 1
            })
          ]),
          default: h(() => [
            l("div", qs, [
              (_(!0), U(me, null, ve(E.value, (v) => {
                var ne, Ce;
                return _(), U("div", {
                  key: v.id,
                  class: we(["workspace-item", { active: v.id === ((ne = N.value) == null ? void 0 : ne.id) }]),
                  onClick: (ra) => Le(v)
                }, [
                  l("div", js, V(v.children && v.children.length ? "📁" : "📄"), 1),
                  l("div", Qs, [
                    l("h3", null, V(v.title), 1),
                    l("p", null, V(v.description), 1),
                    l("span", ea, V(v.hasAccess ? "Active" : "Inactive"), 1)
                  ]),
                  v.id === ((Ce = N.value) == null ? void 0 : Ce.id) ? (_(), U("div", sa, [
                    y(r, null, {
                      default: h(() => [
                        y(ee(Qe))
                      ]),
                      _: 1
                    })
                  ])) : H("", !0)
                ], 10, Ks);
              }), 128))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])) : H("", !0),
        y(ks, {
          modelValue: W.value,
          "onUpdate:modelValue": e[7] || (e[7] = (v) => W.value = v),
          onLoginSuccess: Fe
        }, null, 8, ["modelValue"])
      ]);
    };
  }
});
const pa = /* @__PURE__ */ be(aa, [["__scopeId", "data-v-f830d242"]]), oa = { class: "auth-callback" }, ta = /* @__PURE__ */ ae({
  __name: "AuthCallback",
  setup(s) {
    ue(async () => {
      console.log("[AuthCallback] Component mounted, starting callback processing...");
      try {
        await new Promise((S) => setTimeout(S, 500));
        const { data: t, error: p } = await O.auth.getSession();
        if (p) {
          console.error("Error processing callback:", p), a();
          return;
        }
        if (t != null && t.session) {
          const S = t.session.user;
          console.log("OAuth login successful:", S.email), t.session.access_token && X(F, t.session.access_token), t.session.refresh_token && X(J, t.session.refresh_token), le();
          const P = rs();
          console.log("[callback] Post-login redirect URL:", P), console.log("[callback] Session storage redirect:", sessionStorage.getItem("post-login-redirect")), console.log("[callback] Local storage redirect:", localStorage.getItem("post-login-redirect"));
          const D = P || "/";
          if (console.log("[callback] Final redirect URL:", D), D.startsWith("/")) {
            const B = window.location.origin, L = `${B}${D}`;
            console.log("[callback] redirecting to:", L, { hostname: window.location.hostname, origin: B }), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
              window.location.href = L;
            }, 100);
          } else
            console.log("[callback] redirecting to absolute URL:", D), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
              window.location.href = D;
            }, 100);
        } else
          a();
      } catch (t) {
        console.error("Error processing callback:", t), a();
      }
    });
    const a = () => {
      const p = window.location.href.replace("/auth/callback", "");
      window.location.href = p;
    };
    return (t, p) => (_(), U("div", oa, [...p[0] || (p[0] = [
      l("div", { class: "callback-container" }, [
        l("div", { class: "loading-spinner" }, [
          l("div", { class: "spinner" })
        ]),
        l("h2", null, "Processing login..."),
        l("p", null, "Please wait while we complete your authentication.")
      ], -1)
    ])]));
  }
});
const ha = /* @__PURE__ */ be(ta, [["__scopeId", "data-v-6e939359"]]);
export {
  F as ACCESS_COOKIE,
  pa as AIWorkspaceHeader,
  ha as AuthCallback,
  Ne as LS_ACCESS_KEY,
  Re as LS_REFRESH_KEY,
  ks as LoginModal,
  J as REFRESH_COOKIE,
  ua as buildOAuthRedirectUrl,
  _e as clearLocalStorageTokens,
  ie as clearSessionCookie,
  $e as ensureCrossSubdomainCookies,
  re as getCookie,
  rs as getPostLoginBase,
  da as restoreCrossSubdomainSession,
  Ee as restoreSessionWithRetry,
  X as setSessionCookie,
  ls as setupAuthStateListener,
  O as supabase,
  le as syncCookiesToLocalStorage,
  cs as useAuth,
  ns as useEnhancedAuth,
  is as useWorkspaceStore
};
