import { defineComponent as ve, openBlock as p, createElementBlock as I, createElementVNode as i, ref as U, computed as H, onMounted as ne, watch as de, resolveComponent as X, createStaticVNode as pe, createBlock as V, withCtx as m, createVNode as N, createCommentVNode as M, Fragment as he, renderList as fe, withModifiers as se, normalizeStyle as Oe, toDisplayString as O, createTextVNode as q, unref as ke, normalizeClass as ye } from "vue";
import { ElMessage as ae, ElMessageBox as Se } from "element-plus";
import { createClient as Re } from "@supabase/supabase-js";
import { defineStore as Te } from "pinia";
/*! Element Plus Icons Vue v2.3.2 */
var Me = /* @__PURE__ */ ve({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(e) {
    return (a, o) => (p(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"
      })
    ]));
  }
}), be = Me, Je = /* @__PURE__ */ ve({
  name: "Check",
  __name: "check",
  setup(e) {
    return (a, o) => (p(), I("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      })
    ]));
  }
}), Ve = Je;
const G = "aiworkspace.pro";
function le(e) {
  return e === "localhost" || /^\d+\.\d+\.\d+\.\d+$/.test(e);
}
function Le(e) {
  return e === G || e.endsWith(`.${G}`);
}
function ie(e) {
  return document.cookie.split(";").map((c) => c.trim()).filter((c) => e.some((_) => c.startsWith(_ + "=")));
}
function K(e, a, o = 60 * 60 * 24 * 365) {
  const c = location.hostname;
  if (le(c)) {
    document.cookie = `${e}=${encodeURIComponent(a)}; Path=/; Max-Age=${o}; SameSite=Lax`, console.log("[auth][cookie][set][local]", { host: c, name: e, valuePreview: a.slice(0, 20) + "..." }), console.log("[auth][cookie][after]", ie([e]));
    return;
  }
  document.cookie = `${e}=${encodeURIComponent(a)}; Domain=.${G}; Path=/; Max-Age=${o}; SameSite=Lax; Secure`, document.cookie = `${e}=; Path=/; Max-Age=0; SameSite=Lax`, console.log("[auth][cookie][set][apex]", { host: c, apex: G, name: e, valuePreview: a.slice(0, 20) + "..." }), console.log("[auth][cookie][after]", ie([e]));
}
function j(e) {
  const a = new RegExp("(?:^|; )" + e.replace(/[$()*+.[\]?^{}|\\/-]/g, "\\$&") + "=([^;]*)"), o = document.cookie.match(a);
  return o ? decodeURIComponent(o[1]) : null;
}
function Ie(e) {
  const a = location.hostname;
  if (le(a)) {
    document.cookie = `${e}=; Path=/; Max-Age=0; SameSite=Lax`, console.log("[auth][cookie][clear][local]", { host: a, name: e });
    return;
  }
  document.cookie = `${e}=; Domain=.${G}; Path=/; Max-Age=0; SameSite=Lax; Secure`, document.cookie = `${e}=; Path=/; Max-Age=0; SameSite=Lax`, console.log("[auth][cookie][clear][apex]", { host: a, apex: G, name: e }), console.log("[auth][cookie][after]", ie([e]));
}
function Ne(e) {
  const a = location.hostname;
  if (le(a)) {
    console.log("[auth][cookie][promote] skip (local host)", a);
    return;
  }
  if (!Le(a)) {
    console.log("[auth][cookie][promote] skip (not under apex)", { host: a, apex: G });
    return;
  }
  console.log("[auth][cookie][promote] start", { host: a, apex: G, names: e }), e.forEach((o) => {
    const c = j(o);
    c ? K(o, c, 60 * 60 * 24 * 365) : console.log("[auth][cookie][promote] missing", o);
  }), console.log("[auth][cookie][promote] done", ie(e));
}
function Us() {
  return `${window.location.origin}/callback`;
}
function Ws() {
  try {
    const e = new URLSearchParams(location.search), a = ["redirect", "redirect_to", "returnTo", "next"].find((c) => e.get(c));
    let o = a ? e.get(a) : "";
    if (o || (o = sessionStorage.getItem("post-login-redirect") || localStorage.getItem("post-login-redirect") || ""), o || (o = { VITE_SUPABASE_URL: "https://oqdnbpmmgntqtigstaow.supabase.co", VITE_SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xZG5icG1tZ250cXRpZ3N0YW93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0NTk2NDYsImV4cCI6MjA1MDAzNTY0Nn0.rn0nRY9xLgLt-ajiSPeG0PcdS9V-549C1yeqhcxxG40", VITE_APEX_DOMAIN: "aiworkspace.pro", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_DEFAULT_POST_LOGIN_URL || "/"), o.startsWith("http"))
      try {
        const c = new URL(o);
        return Le(c.hostname) || le(c.hostname) ? o : "/";
      } catch {
        return "/";
      }
    return o.startsWith("/") || (o = "/" + o), o;
  } catch {
    return "/";
  }
}
const z = "sb-access-token", B = "sb-refresh-token", Ue = "sb-access-token", We = "sb-refresh-token";
function ce() {
  try {
    const e = j(z), a = j(B);
    e && localStorage.setItem(Ue, e), a && localStorage.setItem(We, a), console.log("[auth][cookie->ls] sync", {
      hasAccess: !!e,
      hasRefresh: !!a
    });
  } catch (e) {
    console.log("[auth][cookie->ls] error", e);
  }
}
function ze() {
  try {
    localStorage.removeItem(Ue), localStorage.removeItem(We), console.log("[auth][cookie->ls] cleared localStorage");
  } catch (e) {
    console.log("[auth][cookie->ls] clear error", e);
  }
}
async function xs() {
  try {
    Ne([z, B]);
    const e = j(z), a = j(B);
    if (e && a) {
      const { data: { session: o } } = await P.auth.getSession();
      if (!o) {
        const { data: c, error: _ } = await P.auth.setSession({ access_token: e, refresh_token: a });
        _ ? console.log("[auth][restore] error", _) : console.log("[auth][restore] done", !!c.session);
      }
    } else
      console.log("[auth][restore] no cookies present");
    ce();
  } catch (e) {
    console.log("[auth][restore] exception", e);
  }
}
function Be() {
  console.log("[auth][listener] Setting up auth state listener..."), P.auth.onAuthStateChange(async (e, a) => {
    switch (console.log("[auth][listener] Auth state changed:", e, !!a), e) {
      case "TOKEN_REFRESHED":
        console.log("[auth][listener] Token refreshed successfully"), a && (K(z, a.access_token, 60 * 60 * 24 * 365), K(B, a.refresh_token, 60 * 60 * 24 * 365), ce());
        break;
      case "SIGNED_IN":
        console.log("[auth][listener] User signed in"), a && (K(z, a.access_token, 60 * 60 * 24 * 365), K(B, a.refresh_token, 60 * 60 * 24 * 365), ce());
        break;
      case "SIGNED_OUT":
        console.log("[auth][listener] User signed out");
        break;
      case "USER_UPDATED":
        console.log("[auth][listener] User updated");
        break;
      default:
        console.log("[auth][listener] Unhandled auth event:", e);
    }
  });
}
async function Ae() {
  try {
    const { data: { session: e } } = await P.auth.getSession();
    if (e && e.user)
      return console.log("[auth][restore] Active session found"), { success: !0, session: e };
    const a = j(z), o = j(B);
    if (a && o) {
      console.log("[auth][restore] Attempting to restore session from cookies...");
      const { data: c, error: _ } = await P.auth.setSession({
        access_token: a,
        refresh_token: o
      });
      if (_)
        return console.log("[auth][restore] Failed to restore session:", _.message), { success: !1, error: _ };
      if (c.session)
        return console.log("[auth][restore] Session restored successfully"), K(z, c.session.access_token, 60 * 60 * 24 * 365), K(B, c.session.refresh_token, 60 * 60 * 24 * 365), ce(), { success: !0, session: c.session };
    }
    return console.log("[auth][restore] No valid session or cookies found"), { success: !1, error: "No valid session or cookies" };
  } catch (e) {
    return console.log("[auth][restore] Exception during session restoration:", e), { success: !1, error: e };
  }
}
if (typeof window < "u")
  try {
    Ne([z, B]);
  } catch (e) {
    console.log("[auth][cookie][promote] error (pre-init)", e);
  }
const _e = "https://oqdnbpmmgntqtigstaow.supabase.co", ge = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xZG5icG1tZ250cXRpZ3N0YW93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0NTk2NDYsImV4cCI6MjA1MDAzNTY0Nn0.rn0nRY9xLgLt-ajiSPeG0PcdS9V-549C1yeqhcxxG40", P = Re(_e, ge, {
  auth: {
    // Enable automatic token refresh
    autoRefreshToken: !0,
    // Persist session in localStorage
    persistSession: !0,
    // Detect session in URL (for OAuth callbacks)
    detectSessionInUrl: !0
  }
});
typeof window < "u" && Be();
console.log("Supabase Configuration:", {
  url: _e,
  hasKey: !!ge,
  autoRefreshToken: !0,
  persistSession: !0
});
console.log("URL:", _e.replace(/https:\/\/(.+)\.supabase\.co/, "https://*****.supabase.co"));
console.log("Key configured:", !ge.includes("your-anon-key"));
console.log("Environment mode:", "production");
function Ye() {
  const e = U({
    user: null,
    isAuthenticated: !1,
    isLoading: !0
  }), a = U(null), o = H(() => e.value.isAuthenticated), c = H(() => e.value.user), _ = H(() => e.value.isLoading), Z = async () => {
    var v, b, g, A, C, S, W, h, y, r, f, $, F, ee, oe;
    try {
      const { data: { session: J } } = await P.auth.getSession();
      if (J && J.user) {
        const d = J.user, D = {
          id: d.id,
          name: ((v = d.user_metadata) == null ? void 0 : v.name) || ((b = d.user_metadata) == null ? void 0 : b.user_name) || ((g = d.user_metadata) == null ? void 0 : g.full_name) || ((A = d.email) == null ? void 0 : A.split("@")[0]) || "User",
          email: d.email,
          avatar_url: ((C = d.user_metadata) == null ? void 0 : C.avatar_url) || null,
          user_metadata: d.user_metadata
        };
        return e.value = {
          user: D,
          isAuthenticated: !0,
          isLoading: !1
        }, a.value = {
          user: D,
          access_token: J.access_token,
          refresh_token: J.refresh_token
        }, { success: !0, session: a.value };
      }
      console.log("[auth][enhanced] No active session, attempting to restore from cookies...");
      const x = await Ae();
      if (x.success && x.session) {
        console.log("[auth][enhanced] Session restored successfully");
        const d = x.session.user, D = {
          id: d.id,
          name: ((S = d.user_metadata) == null ? void 0 : S.name) || ((W = d.user_metadata) == null ? void 0 : W.user_name) || ((h = d.user_metadata) == null ? void 0 : h.full_name) || ((y = d.email) == null ? void 0 : y.split("@")[0]) || "User",
          email: d.email,
          avatar_url: ((r = d.user_metadata) == null ? void 0 : r.avatar_url) || null,
          user_metadata: d.user_metadata
        };
        return e.value = {
          user: D,
          isAuthenticated: !0,
          isLoading: !1
        }, a.value = x.session, { success: !0, session: a.value };
      } else
        console.log("[auth][enhanced] Failed to restore session:", x.error);
    } catch (J) {
      console.error("Error getting Supabase session:", J);
      try {
        const x = await Ae();
        if (x.success && x.session) {
          console.log("[auth][enhanced] Session restored after error");
          const d = x.session.user, D = {
            id: d.id,
            name: ((f = d.user_metadata) == null ? void 0 : f.name) || (($ = d.user_metadata) == null ? void 0 : $.user_name) || ((F = d.user_metadata) == null ? void 0 : F.full_name) || ((ee = d.email) == null ? void 0 : ee.split("@")[0]) || "User",
            email: d.email,
            avatar_url: ((oe = d.user_metadata) == null ? void 0 : oe.avatar_url) || null,
            user_metadata: d.user_metadata
          };
          return e.value = {
            user: D,
            isAuthenticated: !0,
            isLoading: !1
          }, a.value = x.session, { success: !0, session: a.value };
        }
      } catch (x) {
        console.error("Error restoring session:", x);
      }
    }
    return e.value = {
      user: null,
      isAuthenticated: !1,
      isLoading: !1
    }, a.value = null, { success: !1, error: "No valid session found" };
  }, L = async () => {
    try {
      await P.auth.signOut(), Ie(z), Ie(B), ze(), e.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1
      }, a.value = null, console.log("[auth][enhanced] User logged out successfully");
    } catch (v) {
      console.error("Error during logout:", v), e.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1
      }, a.value = null;
    }
  }, R = async (v, b) => {
    var g, A, C, S, W;
    try {
      e.value.isLoading = !0;
      const { data: h, error: y } = await P.auth.signInWithPassword({
        email: v,
        password: b
      });
      if (y)
        throw y;
      if (h.session) {
        const r = h.session.user, f = {
          id: r.id,
          name: ((g = r.user_metadata) == null ? void 0 : g.name) || ((A = r.user_metadata) == null ? void 0 : A.user_name) || ((C = r.user_metadata) == null ? void 0 : C.full_name) || ((S = r.email) == null ? void 0 : S.split("@")[0]) || "User",
          email: r.email,
          avatar_url: ((W = r.user_metadata) == null ? void 0 : W.avatar_url) || null,
          user_metadata: r.user_metadata
        };
        return e.value = {
          user: f,
          isAuthenticated: !0,
          isLoading: !1
        }, a.value = {
          user: f,
          access_token: h.session.access_token,
          refresh_token: h.session.refresh_token
        }, { success: !0, session: a.value };
      }
      return { success: !1, error: "No session returned" };
    } catch (h) {
      return console.error("Sign in error:", h), e.value.isLoading = !1, { success: !1, error: h };
    }
  }, w = async (v, b, g) => {
    var A, C, S, W, h;
    try {
      e.value.isLoading = !0;
      const { data: y, error: r } = await P.auth.signUp({
        email: v,
        password: b,
        options: {
          data: g
        }
      });
      if (r)
        throw r;
      if (y.session) {
        const f = y.session.user, $ = {
          id: f.id,
          name: ((A = f.user_metadata) == null ? void 0 : A.name) || ((C = f.user_metadata) == null ? void 0 : C.user_name) || ((S = f.user_metadata) == null ? void 0 : S.full_name) || ((W = f.email) == null ? void 0 : W.split("@")[0]) || "User",
          email: f.email,
          avatar_url: ((h = f.user_metadata) == null ? void 0 : h.avatar_url) || null,
          user_metadata: f.user_metadata
        };
        return e.value = {
          user: $,
          isAuthenticated: !0,
          isLoading: !1
        }, a.value = {
          user: $,
          access_token: y.session.access_token,
          refresh_token: y.session.refresh_token
        }, { success: !0, session: a.value };
      }
      return { success: !1, error: "No session returned" };
    } catch (y) {
      return console.error("Sign up error:", y), e.value.isLoading = !1, { success: !1, error: y };
    }
  }, u = async () => {
    await Z();
  };
  return ne(() => {
    u();
  }), {
    // State
    authState: e,
    currentSession: a,
    // Computed
    isAuthenticated: o,
    currentUser: c,
    isLoading: _,
    // Methods
    loadUserInfo: Z,
    logout: L,
    signIn: R,
    signUp: w,
    checkAuth: u
  };
}
const Ge = Te("workspace", () => {
  const e = U(null), a = U([]), o = U(null), c = (u) => {
    e.value = u, localStorage.setItem("current_workspace", JSON.stringify(u));
  }, _ = (u) => {
    a.value = u, localStorage.setItem("available_workspaces", JSON.stringify(u));
  };
  return {
    currentWorkspace: e,
    workspaces: a,
    user: o,
    setCurrentWorkspace: c,
    setWorkspaces: _,
    setUser: (u) => {
      o.value = u, localStorage.setItem("user_info", JSON.stringify(u));
    },
    loadPersistedData: () => {
      const u = localStorage.getItem("current_workspace");
      if (u)
        try {
          e.value = JSON.parse(u);
        } catch (g) {
          console.error("Error loading persisted workspace:", g);
        }
      const v = localStorage.getItem("available_workspaces");
      if (v)
        try {
          a.value = JSON.parse(v);
        } catch (g) {
          console.error("Error loading persisted workspaces:", g);
        }
      const b = localStorage.getItem("user_info");
      if (b)
        try {
          o.value = JSON.parse(b);
        } catch (g) {
          console.error("Error loading persisted user:", g);
        }
    },
    clearData: () => {
      e.value = null, a.value = [], o.value = null, localStorage.removeItem("current_workspace"), localStorage.removeItem("available_workspaces"), localStorage.removeItem("user_info");
    },
    loadWorkspaces: async (u = !1) => {
      try {
        const { data: { user: v } } = await P.auth.getUser();
        if (!v)
          return [];
        let b = P.from("workspaces").select(`
          id, title, description, parent_workspace_id, created_by, archived, created_at,
          workspace_access!inner ( access_type, shared_with_user_id ),
          workspace_activities!left ( updated_at )
        `).eq("workspace_access.shared_with_user_id", v.id);
        u || (b = b.eq("archived", !1));
        const { data: g, error: A } = await b;
        if (A)
          throw A;
        const C = /* @__PURE__ */ new Map();
        (g || []).forEach((r) => {
          (r.workspace_access || []).forEach((f) => {
            f.shared_with_user_id === v.id && C.set(r.id, f);
          });
        });
        const S = [...new Set(
          (g || []).filter((r) => r.parent_workspace_id).map((r) => r.parent_workspace_id).filter((r) => !C.has(r))
        )];
        let W = [];
        if (S.length) {
          let r = P.from("workspaces").select("id, title, description, parent_workspace_id, created_by, archived, created_at").in("id", S);
          u || (r = r.eq("archived", !1));
          const { data: f, error: $ } = await r;
          if ($)
            throw $;
          W = f || [];
        }
        const y = [...g || [], ...W].map((r) => {
          var f, $, F;
          return {
            id: r.id,
            title: r.title,
            description: r.description || "No description",
            parent_workspace_id: r.parent_workspace_id,
            created_by: r.created_by,
            archived: r.archived,
            created_at: r.created_at,
            latest_activity: (($ = (f = r.workspace_activities) == null ? void 0 : f[0]) == null ? void 0 : $.updated_at) || r.created_at,
            hasAccess: C.has(r.id),
            accessType: ((F = C.get(r.id)) == null ? void 0 : F.access_type) || null
          };
        });
        return y.sort((r, f) => new Date(f.latest_activity) - new Date(r.latest_activity)), _(y), y;
      } catch (v) {
        return console.error("loadWorkspaces error", v), [];
      }
    }
  };
}), Ze = { class: "aiworkspace-header" }, Fe = {
  key: 0,
  class: "header-content header-loading"
}, Xe = {
  key: 1,
  class: "header-content header-fallback"
}, qe = {
  key: 2,
  class: "header-content"
}, He = { class: "header-left" }, Ke = { class: "logo-section" }, je = {
  href: "/",
  class: "logo"
}, Qe = ["src"], es = {
  key: 1,
  class: "text-logo"
}, ss = {
  key: 0,
  class: "header-center"
}, as = { class: "main-navigation" }, ts = { class: "nav-item" }, os = ["href", "onClick"], rs = { class: "workspace-icon" }, ns = {
  key: 1,
  class: "nav-divider"
}, is = { class: "nav-item" }, cs = ["href", "onClick"], ls = { class: "header-right" }, us = { class: "user-profile" }, ds = { class: "user-info" }, ps = { class: "user-name" }, hs = { class: "user-avatar" }, fs = ["src", "alt"], ks = {
  key: 1,
  class: "avatar-placeholder"
}, vs = {
  key: 3,
  class: "unauth-message"
}, _s = { class: "workspace-list" }, gs = ["onClick"], ms = { class: "workspace-icon" }, ws = { class: "workspace-details" }, ys = { class: "workspace-members" }, Ss = {
  key: 0,
  class: "current-indicator"
}, te = 50, bs = /* @__PURE__ */ ve({
  __name: "AIWorkspaceHeader",
  props: {
    customLogo: { default: "" },
    customLinks: { default: () => [] },
    showUserMenu: { type: Boolean, default: !0 },
    showWorkspaceSelector: { type: Boolean, default: !0 },
    showSecondaryNavigation: { type: Boolean, default: !0 },
    currentWorkspaceId: {}
  },
  emits: ["workspaceChange", "logout", "login", "profileClick", "settingsClick"],
  setup(e, { emit: a }) {
    const o = e, c = a, { authState: _, logout: Z } = Ye(), L = () => {
      try {
        return Ge();
      } catch {
        return console.warn("[AIWorkspaceHeader] Pinia not initialized yet, using fallback state"), null;
      }
    }, R = () => {
      try {
        return typeof window < "u" ? !!window.__PINIA__ || !!window.Pinia : !1;
      } catch {
        return !1;
      }
    }, w = U(L()), u = H(() => !!w.value), v = U(0), b = () => {
      if (!w.value && v.value < te) {
        if (R()) {
          const t = L();
          if (t) {
            w.value = t, console.log("[AIWorkspaceHeader] Pinia store initialized successfully");
            return;
          }
        }
        v.value++, setTimeout(b, 100);
      } else
        v.value >= te && console.warn("[AIWorkspaceHeader] Pinia initialization failed after maximum retries, using fallback mode");
    };
    ne(() => {
      w.value || b();
    }), de(u, (t) => {
      !t && v.value < te && b();
    });
    const g = U(!1), A = U([]), C = U([]), S = U({
      name: "",
      email: "",
      avatar_url: null,
      initials: ""
    }), W = U([]), h = U([]), y = H(() => _.value.isAuthenticated), r = H(() => w.value ? w.value.currentWorkspace : null), f = U([
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
    ]), $ = H(() => "Dashboard"), F = (t) => {
      const s = /* @__PURE__ */ new Map();
      t.forEach((E) => {
        s.set(E.id, { ...E, children: [] });
      });
      const n = [];
      s.forEach((E) => {
        E.parent_workspace_id && s.has(E.parent_workspace_id) ? s.get(E.parent_workspace_id).children.push(E) : n.push(E);
      });
      const k = (E) => {
        E.sort((T, Y) => T.title.localeCompare(Y.title)), E.forEach((T) => {
          T.children && k(T.children);
        });
      };
      return k(n), n;
    }, ee = (t, s = 0, n = []) => (t.forEach((k) => {
      n.push({ ...k, level: s }), k.children && k.children.length && ee(k.children, s + 1, n);
    }), n), oe = async () => {
      var t, s, n;
      try {
        const k = await ((t = w.value) == null ? void 0 : t.loadWorkspaces());
        if (W.value = F(k || []), h.value = ee(W.value), C.value = h.value, A.value = h.value, o.currentWorkspaceId) {
          const E = h.value.find((T) => {
            var Y;
            return T.id.toString() === ((Y = o.currentWorkspaceId) == null ? void 0 : Y.toString());
          });
          E && ((s = w.value) == null || s.setCurrentWorkspace(E));
        } else
          !r.value && h.value.length && ((n = w.value) == null || n.setCurrentWorkspace(h.value[0]));
      } catch (k) {
        console.error("loadWorkspaces (header) error", k);
      }
    }, J = (t) => {
      if (console.log("Navigation command:", t), t === "all-workspace") {
        window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
        return;
      }
      if (t.startsWith("workspace-")) {
        const s = t.replace("workspace-", ""), n = C.value.find((k) => k.id === parseInt(s));
        n && re(n);
        return;
      }
    }, x = (t) => {
      const s = r.value;
      switch (t.key) {
        case "dashboard":
          s ? window.location.href = `/single-workspace/${s.id}/dashboard` : window.location.href = "/";
          break;
        case "outlines":
          if (s) {
            const n = `https://outline.aiworkspace.pro/single-workspace/${s.id}/outlines`;
            window.location.href = n;
          } else
            window.location.href = "https://outline.aiworkspace.pro";
          break;
        case "canvas":
          if (s) {
            const n = `https://canvas.aiworkspace.pro/single-workspace/${s.id}/canvas`;
            window.location.href = n;
          } else
            window.location.href = "https://canvas.aiworkspace.pro";
          break;
        case "files":
          if (s) {
            const n = `https://drive.aiworkspace.pro/single-workspace/${s.id}/files`;
            window.location.href = n;
          } else
            window.location.href = "https://drive.aiworkspace.pro";
          break;
        case "tasks":
          if (s) {
            const n = `https://tasks.aiworkspace.pro/single-workspace/${s.id}/tasks`;
            window.location.href = n;
          } else
            window.location.href = "https://tasks.aiworkspace.pro";
          break;
        case "ai-portfolios":
          if (s) {
            const n = `https://spreadsheet.aiworkspace.pro/single-workspace/${s.id}/ai-portfolios`;
            window.location.href = n;
          } else
            window.location.href = "https://spreadsheet.aiworkspace.pro";
          break;
        default:
          if (s) {
            const n = `https://app.aiworkspace.pro/single-workspace/${s.id}/${t.key}`;
            window.location.href = n;
          } else {
            const n = `https://app.aiworkspace.pro/${t.key}`;
            window.location.href = n;
          }
          break;
      }
    }, d = (t) => {
      const s = r.value;
      switch (t.key) {
        case "dashboard":
          return s ? `/single-workspace/${s.id}/dashboard` : "/";
        case "ai-portfolios":
          return s ? `https://spreadsheet.aiworkspace.pro/single-workspace/${s.id}/ai-portfolios` : "https://spreadsheet.aiworkspace.pro";
        case "outlines":
          return s ? `https://outline.aiworkspace.pro/single-workspace/${s.id}/outlines` : "https://outline.aiworkspace.pro";
        case "canvas":
          return s ? `https://canvas.aiworkspace.pro/single-workspace/${s.id}/canvas` : "https://canvas.aiworkspace.pro";
        case "files":
          return s ? `https://drive.aiworkspace.pro/single-workspace/${s.id}/files` : "https://drive.aiworkspace.pro";
        case "tasks":
          return s ? `https://tasks.aiworkspace.pro/single-workspace/${s.id}/tasks` : "https://tasks.aiworkspace.pro";
        default:
          return s ? `https://app.aiworkspace.pro/single-workspace/${s.id}/${t.key}` : `https://app.aiworkspace.pro/${t.key}`;
      }
    }, D = (t) => {
      switch (t) {
        case "profile":
          o.onProfileClick ? o.onProfileClick() : ae.info("Profile settings coming soon");
          break;
        case "workspaces":
          g.value = !0;
          break;
        case "logout":
          $e();
          break;
      }
    }, re = (t) => {
      var s;
      (s = w.value) == null || s.setCurrentWorkspace(t), g.value = !1, c("workspaceChange", t), ae.success(`Switched to ${t.title}`);
    }, xe = () => {
      Se.prompt("Enter workspace name:", "Create New Workspace", {
        confirmButtonText: "Create",
        cancelButtonText: "Cancel",
        inputPattern: /\S/,
        inputErrorMessage: "Workspace name cannot be empty"
      }).then(({ value: t }) => {
        var n;
        const s = {
          id: Date.now(),
          title: t,
          description: "New workspace",
          archived: !1,
          created_by: "",
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          latest_activity: (/* @__PURE__ */ new Date()).toISOString(),
          hasAccess: !0,
          accessType: "edit"
        };
        A.value.push(s), (n = w.value) == null || n.setWorkspaces(A.value), re(s), ae.success(`Created workspace: ${t}`);
      }).catch(() => {
      });
    }, $e = () => {
      Se.confirm(
        "Are you sure you want to sign out?",
        "Sign Out",
        {
          confirmButtonText: "Sign Out",
          cancelButtonText: "Cancel",
          type: "warning"
        }
      ).then(async () => {
        var t;
        (t = w.value) == null || t.clearData(), await Z(), c("logout"), ae.success("Signed out successfully");
      }).catch(() => {
      });
    }, me = async () => {
      var t, s;
      if (_.value.user) {
        const n = _.value.user;
        S.value = {
          name: n.name || ((t = n.email) == null ? void 0 : t.split("@")[0]) || "User",
          email: n.email || "",
          avatar_url: n.avatar_url || null,
          initials: (n.name || ((s = n.email) == null ? void 0 : s.split("@")[0]) || "U").split(" ").map((k) => k[0]).join("").toUpperCase().substring(0, 2)
        }, o.showWorkspaceSelector && await oe();
      }
    };
    de(() => _.value.user, (t) => {
      var s;
      t ? me() : (S.value = { name: "", email: "", avatar_url: null, initials: "" }, (s = w.value) == null || s.clearData());
    }), de(() => o.currentWorkspaceId, (t) => {
      var s;
      if (t && h.value.length) {
        const n = h.value.find((k) => k.id.toString() === t.toString());
        n && ((s = w.value) == null || s.setCurrentWorkspace(n));
      }
    }), ne(async () => {
      y.value && await me();
    });
    const Pe = () => {
      v.value = 0, b(), ae.success("Manual Pinia retry initiated.");
    };
    return (t, s) => {
      const n = X("el-icon"), k = X("el-dropdown-item"), E = X("el-tag"), T = X("el-dropdown-menu"), Y = X("el-dropdown"), we = X("el-button"), De = X("el-dialog");
      return p(), I("header", Ze, [
        !u.value && v.value < te ? (p(), I("div", Fe, [...s[6] || (s[6] = [
          pe('<div class="header-left" data-v-cdeebf53><div class="logo-section" data-v-cdeebf53><a href="/" class="logo" data-v-cdeebf53><div class="text-logo" data-v-cdeebf53><span class="logo-text" data-v-cdeebf53>AI Workspace</span></div></a></div></div><div class="header-center" data-v-cdeebf53><span class="loading-text" data-v-cdeebf53>Initializing...</span></div>', 2)
        ])])) : !u.value && v.value >= te ? (p(), I("div", Xe, [
          s[8] || (s[8] = pe('<div class="header-left" data-v-cdeebf53><div class="logo-section" data-v-cdeebf53><a href="/" class="logo" data-v-cdeebf53><div class="text-logo" data-v-cdeebf53><span class="logo-text" data-v-cdeebf53>AI Workspace</span></div></a></div></div>', 1)),
          i("div", { class: "header-center" }, [
            s[7] || (s[7] = i("span", { class: "fallback-text" }, "Header Ready (Fallback Mode)", -1)),
            i("button", {
              onClick: Pe,
              class: "retry-button"
            }, "Retry Pinia")
          ]),
          s[9] || (s[9] = pe('<div class="header-right" data-v-cdeebf53><div class="user-profile" data-v-cdeebf53><div class="user-info" data-v-cdeebf53><span class="user-name" data-v-cdeebf53>User</span></div><div class="user-avatar" data-v-cdeebf53><span class="avatar-placeholder" data-v-cdeebf53>U</span></div></div></div>', 1))
        ])) : y.value ? (p(), I("div", qe, [
          i("div", He, [
            i("div", Ke, [
              i("a", je, [
                t.customLogo ? (p(), I("img", {
                  key: 0,
                  src: t.customLogo,
                  alt: "AIWorkspace",
                  class: "logo-image"
                }, null, 8, Qe)) : (p(), I("div", es, [...s[10] || (s[10] = [
                  i("span", { class: "logo-text" }, "AI Workspace", -1)
                ])]))
              ])
            ])
          ]),
          t.showSecondaryNavigation ? (p(), I("div", ss, [
            i("nav", as, [
              t.showWorkspaceSelector ? (p(), V(Y, {
                key: 0,
                onCommand: J,
                trigger: "hover"
              }, {
                dropdown: m(() => [
                  N(T, { class: "workspace-tree-dropdown" }, {
                    default: m(() => [
                      N(k, { command: "all-workspace" }, {
                        default: m(() => [...s[11] || (s[11] = [
                          i("a", {
                            href: "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard",
                            class: "nav-link"
                          }, [
                            i("div", { class: "workspace-dropdown-item" }, [
                              i("span", { class: "workspace-icon" }, "🌐"),
                              i("span", null, "All workspace")
                            ])
                          ], -1)
                        ])]),
                        _: 1
                      }),
                      h.value.length > 0 ? (p(), V(k, {
                        key: 0,
                        divided: "",
                        disabled: ""
                      })) : M("", !0),
                      (p(!0), I(he, null, fe(h.value, (l) => (p(), V(k, {
                        key: l.id,
                        command: `workspace-${l.id}`
                      }, {
                        default: m(() => {
                          var Q;
                          return [
                            i("a", {
                              href: `/single-workspace/${l.id}/dashboard`,
                              class: "nav-link",
                              onClick: se((ue) => re(l), ["prevent"])
                            }, [
                              i("div", {
                                class: "workspace-dropdown-item",
                                style: Oe({ paddingLeft: (l.level || 0) * 16 + "px" })
                              }, [
                                i("span", rs, O(l.children && l.children.length ? "📁" : "📄"), 1),
                                i("span", null, O(l.title), 1),
                                l.id === ((Q = r.value) == null ? void 0 : Q.id) ? (p(), V(E, {
                                  key: 0,
                                  size: "small",
                                  type: "success"
                                }, {
                                  default: m(() => [...s[12] || (s[12] = [
                                    q("Current", -1)
                                  ])]),
                                  _: 1
                                })) : M("", !0)
                              ], 4)
                            ], 8, os)
                          ];
                        }),
                        _: 2
                      }, 1032, ["command"]))), 128)),
                      h.value.length === 0 ? (p(), V(k, {
                        key: 1,
                        disabled: ""
                      }, {
                        default: m(() => [...s[13] || (s[13] = [
                          q(" No workspaces ", -1)
                        ])]),
                        _: 1
                      })) : M("", !0)
                    ]),
                    _: 1
                  })
                ]),
                default: m(() => {
                  var l;
                  return [
                    i("span", ts, [
                      q(O(((l = r.value) == null ? void 0 : l.title) || "Select Workspace") + " ", 1),
                      N(n, { class: "nav-arrow" }, {
                        default: m(() => [
                          N(ke(be))
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }),
                _: 1
              })) : M("", !0),
              t.showWorkspaceSelector ? (p(), I("span", ns, "/")) : M("", !0),
              t.showSecondaryNavigation ? (p(), V(Y, {
                key: 2,
                trigger: "hover"
              }, {
                dropdown: m(() => [
                  N(T, null, {
                    default: m(() => [
                      (p(!0), I(he, null, fe(f.value, (l) => (p(), V(k, {
                        key: l.label,
                        class: ye({ active: l.active })
                      }, {
                        default: m(() => [
                          i("a", {
                            href: d(l),
                            class: "nav-link",
                            onClick: se((Q) => x(l), ["prevent"])
                          }, O(l.label), 9, cs)
                        ]),
                        _: 2
                      }, 1032, ["class"]))), 128))
                    ]),
                    _: 1
                  })
                ]),
                default: m(() => [
                  i("span", is, [
                    q(O($.value) + " ", 1),
                    N(n, { class: "nav-arrow" }, {
                      default: m(() => [
                        N(ke(be))
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })) : M("", !0)
            ])
          ])) : M("", !0),
          i("div", ls, [
            N(Y, {
              onCommand: D,
              trigger: "click",
              placement: "bottom-end"
            }, {
              dropdown: m(() => [
                N(T, null, {
                  default: m(() => [
                    N(k, null, {
                      default: m(() => [
                        i("a", {
                          href: "/profile",
                          class: "nav-link",
                          onClick: s[0] || (s[0] = se((l) => D("profile"), ["prevent"]))
                        }, "Profile Settings")
                      ]),
                      _: 1
                    }),
                    t.showWorkspaceSelector ? (p(), V(k, { key: 0 }, {
                      default: m(() => [
                        i("a", {
                          href: "#switch-workspace",
                          class: "nav-link",
                          onClick: s[1] || (s[1] = se((l) => D("workspaces"), ["prevent"]))
                        }, "Switch Workspace")
                      ]),
                      _: 1
                    })) : M("", !0),
                    N(k, { divided: "" }, {
                      default: m(() => [
                        i("a", {
                          href: "#signout",
                          class: "nav-link",
                          onClick: s[2] || (s[2] = se((l) => D("logout"), ["prevent"]))
                        }, "Sign Out")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              default: m(() => [
                i("div", us, [
                  i("div", ds, [
                    i("span", ps, O(S.value.name), 1)
                  ]),
                  i("div", hs, [
                    S.value.avatar_url ? (p(), I("img", {
                      key: 0,
                      src: S.value.avatar_url,
                      alt: S.value.name
                    }, null, 8, fs)) : (p(), I("span", ks, O(S.value.initials), 1))
                  ])
                ])
              ]),
              _: 1
            })
          ])
        ])) : (p(), I("div", vs, [...s[14] || (s[14] = [
          i("div", { class: "unauth-inner" }, [
            i("strong", null, "Authentication required."),
            q(" Please log in to access the workspace. ")
          ], -1)
        ])])),
        y.value && t.showWorkspaceSelector ? (p(), V(De, {
          key: 4,
          modelValue: g.value,
          "onUpdate:modelValue": s[4] || (s[4] = (l) => g.value = l),
          title: "Switch Workspace",
          width: "500px",
          onClose: s[5] || (s[5] = (l) => g.value = !1)
        }, {
          footer: m(() => [
            N(we, {
              onClick: s[3] || (s[3] = (l) => g.value = !1)
            }, {
              default: m(() => [...s[15] || (s[15] = [
                q("Cancel", -1)
              ])]),
              _: 1
            }),
            N(we, {
              type: "primary",
              onClick: xe
            }, {
              default: m(() => [...s[16] || (s[16] = [
                q("Create New Workspace", -1)
              ])]),
              _: 1
            })
          ]),
          default: m(() => [
            i("div", _s, [
              (p(!0), I(he, null, fe(A.value, (l) => {
                var Q, ue;
                return p(), I("div", {
                  key: l.id,
                  class: ye(["workspace-item", { active: l.id === ((Q = r.value) == null ? void 0 : Q.id) }]),
                  onClick: (As) => re(l)
                }, [
                  i("div", ms, O(l.children && l.children.length ? "📁" : "📄"), 1),
                  i("div", ws, [
                    i("h3", null, O(l.title), 1),
                    i("p", null, O(l.description), 1),
                    i("span", ys, O(l.hasAccess ? "Active" : "Inactive"), 1)
                  ]),
                  l.id === ((ue = r.value) == null ? void 0 : ue.id) ? (p(), I("div", Ss, [
                    N(n, null, {
                      default: m(() => [
                        N(ke(Ve))
                      ]),
                      _: 1
                    })
                  ])) : M("", !0)
                ], 10, gs);
              }), 128))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])) : M("", !0)
      ]);
    };
  }
});
const Is = (e, a) => {
  const o = e.__vccOpts || e;
  for (const [c, _] of a)
    o[c] = _;
  return o;
}, $s = /* @__PURE__ */ Is(bs, [["__scopeId", "data-v-cdeebf53"]]), Ce = "aiworkspace_auth", Ee = "aiworkspace_user_id";
function Ps() {
  const e = U({
    user: null,
    isAuthenticated: !1,
    isLoading: !0
  }), a = (L) => {
    var u;
    const w = `; ${document.cookie}`.split(`; ${L}=`);
    return w.length === 2 && ((u = w.pop()) == null ? void 0 : u.split(";").shift()) || null;
  }, o = (L, R, w = 7) => {
    const u = /* @__PURE__ */ new Date();
    u.setTime(u.getTime() + w * 24 * 60 * 60 * 1e3), document.cookie = `${L}=${R};expires=${u.toUTCString()};path=/;domain=.aiworkspace.pro`;
  }, c = (L) => {
    document.cookie = `${L}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.aiworkspace.pro`;
  }, _ = async () => {
    try {
      const L = a(Ce), R = a(Ee);
      L && R ? e.value = {
        user: { id: R, email: "" },
        // You can fetch full user data here
        isAuthenticated: !0,
        isLoading: !1
      } : e.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1
      };
    } catch (L) {
      console.error("Auth check failed:", L), e.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1
      };
    }
  }, Z = () => {
    c(Ce), c(Ee), e.value = {
      user: null,
      isAuthenticated: !1,
      isLoading: !1
    };
  };
  return ne(() => {
    _();
  }), {
    authState: e,
    checkAuth: _,
    logout: Z,
    getCookie: a,
    setCookie: o,
    clearCookie: c
  };
}
export {
  z as ACCESS_COOKIE,
  $s as AIWorkspaceHeader,
  Ue as LS_ACCESS_KEY,
  We as LS_REFRESH_KEY,
  B as REFRESH_COOKIE,
  Us as buildOAuthRedirectUrl,
  ze as clearLocalStorageTokens,
  Ie as clearSessionCookie,
  Ne as ensureCrossSubdomainCookies,
  j as getCookie,
  Ws as getPostLoginBase,
  xs as restoreCrossSubdomainSession,
  Ae as restoreSessionWithRetry,
  K as setSessionCookie,
  Be as setupAuthStateListener,
  P as supabase,
  ce as syncCookiesToLocalStorage,
  Ps as useAuth,
  Ye as useEnhancedAuth,
  Ge as useWorkspaceStore
};
