import { defineComponent as ke, openBlock as p, createElementBlock as I, createElementVNode as i, ref as U, computed as H, onMounted as re, watch as le, resolveComponent as X, createStaticVNode as ue, createBlock as V, withCtx as m, createVNode as N, createCommentVNode as M, Fragment as de, renderList as pe, normalizeStyle as Oe, toDisplayString as O, createTextVNode as q, unref as he, normalizeClass as ye, withModifiers as oe } from "vue";
import { ElMessage as se, ElMessageBox as Se } from "element-plus";
import { createClient as Re } from "@supabase/supabase-js";
import { defineStore as Te } from "pinia";
/*! Element Plus Icons Vue v2.3.2 */
var Me = /* @__PURE__ */ ke({
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
}), be = Me, Je = /* @__PURE__ */ ke({
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
function ce(e) {
  return e === "localhost" || /^\d+\.\d+\.\d+\.\d+$/.test(e);
}
function Le(e) {
  return e === G || e.endsWith(`.${G}`);
}
function ne(e) {
  return document.cookie.split(";").map((c) => c.trim()).filter((c) => e.some((v) => c.startsWith(v + "=")));
}
function K(e, a, o = 60 * 60 * 24 * 365) {
  const c = location.hostname;
  if (ce(c)) {
    document.cookie = `${e}=${encodeURIComponent(a)}; Path=/; Max-Age=${o}; SameSite=Lax`, console.log("[auth][cookie][set][local]", { host: c, name: e, valuePreview: a.slice(0, 20) + "..." }), console.log("[auth][cookie][after]", ne([e]));
    return;
  }
  document.cookie = `${e}=${encodeURIComponent(a)}; Domain=.${G}; Path=/; Max-Age=${o}; SameSite=Lax; Secure`, document.cookie = `${e}=; Path=/; Max-Age=0; SameSite=Lax`, console.log("[auth][cookie][set][apex]", { host: c, apex: G, name: e, valuePreview: a.slice(0, 20) + "..." }), console.log("[auth][cookie][after]", ne([e]));
}
function j(e) {
  const a = new RegExp("(?:^|; )" + e.replace(/[$()*+.[\]?^{}|\\/-]/g, "\\$&") + "=([^;]*)"), o = document.cookie.match(a);
  return o ? decodeURIComponent(o[1]) : null;
}
function Ie(e) {
  const a = location.hostname;
  if (ce(a)) {
    document.cookie = `${e}=; Path=/; Max-Age=0; SameSite=Lax`, console.log("[auth][cookie][clear][local]", { host: a, name: e });
    return;
  }
  document.cookie = `${e}=; Domain=.${G}; Path=/; Max-Age=0; SameSite=Lax; Secure`, document.cookie = `${e}=; Path=/; Max-Age=0; SameSite=Lax`, console.log("[auth][cookie][clear][apex]", { host: a, apex: G, name: e }), console.log("[auth][cookie][after]", ne([e]));
}
function Ne(e) {
  const a = location.hostname;
  if (ce(a)) {
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
  }), console.log("[auth][cookie][promote] done", ne(e));
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
        return Le(c.hostname) || ce(c.hostname) ? o : "/";
      } catch {
        return "/";
      }
    return o.startsWith("/") || (o = "/" + o), o;
  } catch {
    return "/";
  }
}
const z = "sb-access-token", B = "sb-refresh-token", Ue = "sb-access-token", We = "sb-refresh-token";
function ie() {
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
        const { data: c, error: v } = await P.auth.setSession({ access_token: e, refresh_token: a });
        v ? console.log("[auth][restore] error", v) : console.log("[auth][restore] done", !!c.session);
      }
    } else
      console.log("[auth][restore] no cookies present");
    ie();
  } catch (e) {
    console.log("[auth][restore] exception", e);
  }
}
function Be() {
  console.log("[auth][listener] Setting up auth state listener..."), P.auth.onAuthStateChange(async (e, a) => {
    switch (console.log("[auth][listener] Auth state changed:", e, !!a), e) {
      case "TOKEN_REFRESHED":
        console.log("[auth][listener] Token refreshed successfully"), a && (K(z, a.access_token, 60 * 60 * 24 * 365), K(B, a.refresh_token, 60 * 60 * 24 * 365), ie());
        break;
      case "SIGNED_IN":
        console.log("[auth][listener] User signed in"), a && (K(z, a.access_token, 60 * 60 * 24 * 365), K(B, a.refresh_token, 60 * 60 * 24 * 365), ie());
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
      const { data: c, error: v } = await P.auth.setSession({
        access_token: a,
        refresh_token: o
      });
      if (v)
        return console.log("[auth][restore] Failed to restore session:", v.message), { success: !1, error: v };
      if (c.session)
        return console.log("[auth][restore] Session restored successfully"), K(z, c.session.access_token, 60 * 60 * 24 * 365), K(B, c.session.refresh_token, 60 * 60 * 24 * 365), ie(), { success: !0, session: c.session };
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
const fe = "https://oqdnbpmmgntqtigstaow.supabase.co", ve = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xZG5icG1tZ250cXRpZ3N0YW93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0NTk2NDYsImV4cCI6MjA1MDAzNTY0Nn0.rn0nRY9xLgLt-ajiSPeG0PcdS9V-549C1yeqhcxxG40", P = Re(fe, ve, {
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
  url: fe,
  hasKey: !!ve,
  autoRefreshToken: !0,
  persistSession: !0
});
console.log("URL:", fe.replace(/https:\/\/(.+)\.supabase\.co/, "https://*****.supabase.co"));
console.log("Key configured:", !ve.includes("your-anon-key"));
console.log("Environment mode:", "production");
function Ye() {
  const e = U({
    user: null,
    isAuthenticated: !1,
    isLoading: !0
  }), a = U(null), o = H(() => e.value.isAuthenticated), c = H(() => e.value.user), v = H(() => e.value.isLoading), Z = async () => {
    var f, b, _, A, L, S, W, h, y, r, k, $, F, ee, te;
    try {
      const { data: { session: J } } = await P.auth.getSession();
      if (J && J.user) {
        const d = J.user, D = {
          id: d.id,
          name: ((f = d.user_metadata) == null ? void 0 : f.name) || ((b = d.user_metadata) == null ? void 0 : b.user_name) || ((_ = d.user_metadata) == null ? void 0 : _.full_name) || ((A = d.email) == null ? void 0 : A.split("@")[0]) || "User",
          email: d.email,
          avatar_url: ((L = d.user_metadata) == null ? void 0 : L.avatar_url) || null,
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
            name: ((k = d.user_metadata) == null ? void 0 : k.name) || (($ = d.user_metadata) == null ? void 0 : $.user_name) || ((F = d.user_metadata) == null ? void 0 : F.full_name) || ((ee = d.email) == null ? void 0 : ee.split("@")[0]) || "User",
            email: d.email,
            avatar_url: ((te = d.user_metadata) == null ? void 0 : te.avatar_url) || null,
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
  }, E = async () => {
    try {
      await P.auth.signOut(), Ie(z), Ie(B), ze(), e.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1
      }, a.value = null, console.log("[auth][enhanced] User logged out successfully");
    } catch (f) {
      console.error("Error during logout:", f), e.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1
      }, a.value = null;
    }
  }, R = async (f, b) => {
    var _, A, L, S, W;
    try {
      e.value.isLoading = !0;
      const { data: h, error: y } = await P.auth.signInWithPassword({
        email: f,
        password: b
      });
      if (y)
        throw y;
      if (h.session) {
        const r = h.session.user, k = {
          id: r.id,
          name: ((_ = r.user_metadata) == null ? void 0 : _.name) || ((A = r.user_metadata) == null ? void 0 : A.user_name) || ((L = r.user_metadata) == null ? void 0 : L.full_name) || ((S = r.email) == null ? void 0 : S.split("@")[0]) || "User",
          email: r.email,
          avatar_url: ((W = r.user_metadata) == null ? void 0 : W.avatar_url) || null,
          user_metadata: r.user_metadata
        };
        return e.value = {
          user: k,
          isAuthenticated: !0,
          isLoading: !1
        }, a.value = {
          user: k,
          access_token: h.session.access_token,
          refresh_token: h.session.refresh_token
        }, { success: !0, session: a.value };
      }
      return { success: !1, error: "No session returned" };
    } catch (h) {
      return console.error("Sign in error:", h), e.value.isLoading = !1, { success: !1, error: h };
    }
  }, w = async (f, b, _) => {
    var A, L, S, W, h;
    try {
      e.value.isLoading = !0;
      const { data: y, error: r } = await P.auth.signUp({
        email: f,
        password: b,
        options: {
          data: _
        }
      });
      if (r)
        throw r;
      if (y.session) {
        const k = y.session.user, $ = {
          id: k.id,
          name: ((A = k.user_metadata) == null ? void 0 : A.name) || ((L = k.user_metadata) == null ? void 0 : L.user_name) || ((S = k.user_metadata) == null ? void 0 : S.full_name) || ((W = k.email) == null ? void 0 : W.split("@")[0]) || "User",
          email: k.email,
          avatar_url: ((h = k.user_metadata) == null ? void 0 : h.avatar_url) || null,
          user_metadata: k.user_metadata
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
  return re(() => {
    u();
  }), {
    // State
    authState: e,
    currentSession: a,
    // Computed
    isAuthenticated: o,
    currentUser: c,
    isLoading: v,
    // Methods
    loadUserInfo: Z,
    logout: E,
    signIn: R,
    signUp: w,
    checkAuth: u
  };
}
const Ge = Te("workspace", () => {
  const e = U(null), a = U([]), o = U(null), c = (u) => {
    e.value = u, localStorage.setItem("current_workspace", JSON.stringify(u));
  }, v = (u) => {
    a.value = u, localStorage.setItem("available_workspaces", JSON.stringify(u));
  };
  return {
    currentWorkspace: e,
    workspaces: a,
    user: o,
    setCurrentWorkspace: c,
    setWorkspaces: v,
    setUser: (u) => {
      o.value = u, localStorage.setItem("user_info", JSON.stringify(u));
    },
    loadPersistedData: () => {
      const u = localStorage.getItem("current_workspace");
      if (u)
        try {
          e.value = JSON.parse(u);
        } catch (_) {
          console.error("Error loading persisted workspace:", _);
        }
      const f = localStorage.getItem("available_workspaces");
      if (f)
        try {
          a.value = JSON.parse(f);
        } catch (_) {
          console.error("Error loading persisted workspaces:", _);
        }
      const b = localStorage.getItem("user_info");
      if (b)
        try {
          o.value = JSON.parse(b);
        } catch (_) {
          console.error("Error loading persisted user:", _);
        }
    },
    clearData: () => {
      e.value = null, a.value = [], o.value = null, localStorage.removeItem("current_workspace"), localStorage.removeItem("available_workspaces"), localStorage.removeItem("user_info");
    },
    loadWorkspaces: async (u = !1) => {
      try {
        const { data: { user: f } } = await P.auth.getUser();
        if (!f)
          return [];
        let b = P.from("workspaces").select(`
          id, title, description, parent_workspace_id, created_by, archived, created_at,
          workspace_access!inner ( access_type, shared_with_user_id ),
          workspace_activities!left ( updated_at )
        `).eq("workspace_access.shared_with_user_id", f.id);
        u || (b = b.eq("archived", !1));
        const { data: _, error: A } = await b;
        if (A)
          throw A;
        const L = /* @__PURE__ */ new Map();
        (_ || []).forEach((r) => {
          (r.workspace_access || []).forEach((k) => {
            k.shared_with_user_id === f.id && L.set(r.id, k);
          });
        });
        const S = [...new Set(
          (_ || []).filter((r) => r.parent_workspace_id).map((r) => r.parent_workspace_id).filter((r) => !L.has(r))
        )];
        let W = [];
        if (S.length) {
          let r = P.from("workspaces").select("id, title, description, parent_workspace_id, created_by, archived, created_at").in("id", S);
          u || (r = r.eq("archived", !1));
          const { data: k, error: $ } = await r;
          if ($)
            throw $;
          W = k || [];
        }
        const y = [..._ || [], ...W].map((r) => {
          var k, $, F;
          return {
            id: r.id,
            title: r.title,
            description: r.description || "No description",
            parent_workspace_id: r.parent_workspace_id,
            created_by: r.created_by,
            archived: r.archived,
            created_at: r.created_at,
            latest_activity: (($ = (k = r.workspace_activities) == null ? void 0 : k[0]) == null ? void 0 : $.updated_at) || r.created_at,
            hasAccess: L.has(r.id),
            accessType: ((F = L.get(r.id)) == null ? void 0 : F.access_type) || null
          };
        });
        return y.sort((r, k) => new Date(k.latest_activity) - new Date(r.latest_activity)), v(y), y;
      } catch (f) {
        return console.error("loadWorkspaces error", f), [];
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
}, as = { class: "main-navigation" }, ts = { class: "nav-item" }, os = ["href"], rs = { class: "workspace-icon" }, ns = {
  key: 1,
  class: "nav-divider"
}, is = { class: "nav-item" }, cs = ["href", "onClick"], ls = { class: "header-right" }, us = { class: "user-profile" }, ds = { class: "user-info" }, ps = { class: "user-name" }, hs = { class: "user-avatar" }, ks = ["src", "alt"], fs = {
  key: 1,
  class: "avatar-placeholder"
}, vs = {
  key: 3,
  class: "unauth-message"
}, _s = { class: "workspace-list" }, gs = ["onClick"], ms = { class: "workspace-icon" }, ws = { class: "workspace-details" }, ys = { class: "workspace-members" }, Ss = {
  key: 0,
  class: "current-indicator"
}, ae = 50, bs = /* @__PURE__ */ ke({
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
    const o = e, c = a, { authState: v, logout: Z } = Ye(), E = () => {
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
    }, w = U(E()), u = H(() => !!w.value), f = U(0), b = () => {
      if (!w.value && f.value < ae) {
        if (R()) {
          const t = E();
          if (t) {
            w.value = t, console.log("[AIWorkspaceHeader] Pinia store initialized successfully");
            return;
          }
        }
        f.value++, setTimeout(b, 100);
      } else
        f.value >= ae && console.warn("[AIWorkspaceHeader] Pinia initialization failed after maximum retries, using fallback mode");
    };
    re(() => {
      w.value || b();
    }), le(u, (t) => {
      !t && f.value < ae && b();
    });
    const _ = U(!1), A = U([]), L = U([]), S = U({
      name: "",
      email: "",
      avatar_url: null,
      initials: ""
    }), W = U([]), h = U([]), y = H(() => v.value.isAuthenticated), r = H(() => w.value ? w.value.currentWorkspace : null), k = U([
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
      t.forEach((C) => {
        s.set(C.id, { ...C, children: [] });
      });
      const n = [];
      s.forEach((C) => {
        C.parent_workspace_id && s.has(C.parent_workspace_id) ? s.get(C.parent_workspace_id).children.push(C) : n.push(C);
      });
      const g = (C) => {
        C.sort((T, Y) => T.title.localeCompare(Y.title)), C.forEach((T) => {
          T.children && g(T.children);
        });
      };
      return g(n), n;
    }, ee = (t, s = 0, n = []) => (t.forEach((g) => {
      n.push({ ...g, level: s }), g.children && g.children.length && ee(g.children, s + 1, n);
    }), n), te = async () => {
      var t, s, n;
      try {
        const g = await ((t = w.value) == null ? void 0 : t.loadWorkspaces());
        if (W.value = F(g || []), h.value = ee(W.value), L.value = h.value, A.value = h.value, o.currentWorkspaceId) {
          const C = h.value.find((T) => {
            var Y;
            return T.id.toString() === ((Y = o.currentWorkspaceId) == null ? void 0 : Y.toString());
          });
          C && ((s = w.value) == null || s.setCurrentWorkspace(C));
        } else
          !r.value && h.value.length && ((n = w.value) == null || n.setCurrentWorkspace(h.value[0]));
      } catch (g) {
        console.error("loadWorkspaces (header) error", g);
      }
    }, J = (t) => {
      if (console.log("Navigation command:", t), t === "all-workspace") {
        window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
        return;
      } else {
        const s = parseInt(t.replace("workspace-", ""));
        window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${s}/dashboard`;
        return;
      }
    }, x = (t) => {
      const s = r.value;
      switch (t.key) {
        case "dashboard":
          s ? window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${s.id}/dashboard` : window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
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
          o.onProfileClick ? o.onProfileClick() : se.info("Profile settings coming soon");
          break;
        case "workspaces":
          _.value = !0;
          break;
        case "logout":
          $e();
          break;
      }
    }, _e = (t) => {
      var s;
      (s = w.value) == null || s.setCurrentWorkspace(t), _.value = !1, c("workspaceChange", t), se.success(`Switched to ${t.title}`);
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
        A.value.push(s), (n = w.value) == null || n.setWorkspaces(A.value), _e(s), se.success(`Created workspace: ${t}`);
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
        (t = w.value) == null || t.clearData(), await Z(), c("logout"), se.success("Signed out successfully");
      }).catch(() => {
      });
    }, ge = async () => {
      var t, s;
      if (v.value.user) {
        const n = v.value.user;
        S.value = {
          name: n.name || ((t = n.email) == null ? void 0 : t.split("@")[0]) || "User",
          email: n.email || "",
          avatar_url: n.avatar_url || null,
          initials: (n.name || ((s = n.email) == null ? void 0 : s.split("@")[0]) || "U").split(" ").map((g) => g[0]).join("").toUpperCase().substring(0, 2)
        }, o.showWorkspaceSelector && await te();
      }
    };
    le(() => v.value.user, (t) => {
      var s;
      t ? ge() : (S.value = { name: "", email: "", avatar_url: null, initials: "" }, (s = w.value) == null || s.clearData());
    }), le(() => o.currentWorkspaceId, (t) => {
      var s;
      if (t && h.value.length) {
        const n = h.value.find((g) => g.id.toString() === t.toString());
        n && ((s = w.value) == null || s.setCurrentWorkspace(n));
      }
    }), re(async () => {
      y.value && await ge();
    });
    const Pe = () => {
      f.value = 0, b(), se.success("Manual Pinia retry initiated.");
    };
    return (t, s) => {
      const n = X("el-icon"), g = X("el-dropdown-item"), C = X("el-tag"), T = X("el-dropdown-menu"), Y = X("el-dropdown"), me = X("el-button"), De = X("el-dialog");
      return p(), I("header", Ze, [
        !u.value && f.value < ae ? (p(), I("div", Fe, [...s[6] || (s[6] = [
          ue('<div class="header-left" data-v-94a48ceb><div class="logo-section" data-v-94a48ceb><a href="/" class="logo" data-v-94a48ceb><div class="text-logo" data-v-94a48ceb><span class="logo-text" data-v-94a48ceb>AI Workspace</span></div></a></div></div><div class="header-center" data-v-94a48ceb><span class="loading-text" data-v-94a48ceb>Initializing...</span></div>', 2)
        ])])) : !u.value && f.value >= ae ? (p(), I("div", Xe, [
          s[8] || (s[8] = ue('<div class="header-left" data-v-94a48ceb><div class="logo-section" data-v-94a48ceb><a href="/" class="logo" data-v-94a48ceb><div class="text-logo" data-v-94a48ceb><span class="logo-text" data-v-94a48ceb>AI Workspace</span></div></a></div></div>', 1)),
          i("div", { class: "header-center" }, [
            s[7] || (s[7] = i("span", { class: "fallback-text" }, "Header Ready (Fallback Mode)", -1)),
            i("button", {
              onClick: Pe,
              class: "retry-button"
            }, "Retry Pinia")
          ]),
          s[9] || (s[9] = ue('<div class="header-right" data-v-94a48ceb><div class="user-profile" data-v-94a48ceb><div class="user-info" data-v-94a48ceb><span class="user-name" data-v-94a48ceb>User</span></div><div class="user-avatar" data-v-94a48ceb><span class="avatar-placeholder" data-v-94a48ceb>U</span></div></div></div>', 1))
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
                      N(g, { command: "all-workspace" }, {
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
                      h.value.length > 0 ? (p(), V(g, {
                        key: 0,
                        divided: "",
                        disabled: ""
                      })) : M("", !0),
                      (p(!0), I(de, null, pe(h.value, (l) => (p(), V(g, {
                        key: l.id,
                        command: `workspace-${l.id}`
                      }, {
                        default: m(() => {
                          var Q;
                          return [
                            i("a", {
                              href: `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${l.id}/dashboard`,
                              class: "nav-link"
                            }, [
                              i("div", {
                                class: "workspace-dropdown-item",
                                style: Oe({ paddingLeft: (l.level || 0) * 16 + "px" })
                              }, [
                                i("span", rs, O(l.children && l.children.length ? "📁" : "📄"), 1),
                                i("span", null, O(l.title), 1),
                                l.id === ((Q = r.value) == null ? void 0 : Q.id) ? (p(), V(C, {
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
                      h.value.length === 0 ? (p(), V(g, {
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
                          N(he(be))
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
                      (p(!0), I(de, null, pe(k.value, (l) => (p(), V(g, {
                        key: l.label,
                        class: ye({ active: l.active })
                      }, {
                        default: m(() => [
                          i("a", {
                            href: d(l),
                            class: "nav-link",
                            onClick: oe((Q) => x(l), ["prevent"])
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
                        N(he(be))
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
                    N(g, null, {
                      default: m(() => [
                        i("a", {
                          href: "/profile",
                          class: "nav-link",
                          onClick: s[0] || (s[0] = oe((l) => D("profile"), ["prevent"]))
                        }, "Profile Settings")
                      ]),
                      _: 1
                    }),
                    t.showWorkspaceSelector ? (p(), V(g, { key: 0 }, {
                      default: m(() => [
                        i("a", {
                          href: "#switch-workspace",
                          class: "nav-link",
                          onClick: s[1] || (s[1] = oe((l) => D("workspaces"), ["prevent"]))
                        }, "Switch Workspace")
                      ]),
                      _: 1
                    })) : M("", !0),
                    N(g, { divided: "" }, {
                      default: m(() => [
                        i("a", {
                          href: "#signout",
                          class: "nav-link",
                          onClick: s[2] || (s[2] = oe((l) => D("logout"), ["prevent"]))
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
                    }, null, 8, ks)) : (p(), I("span", fs, O(S.value.initials), 1))
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
          modelValue: _.value,
          "onUpdate:modelValue": s[4] || (s[4] = (l) => _.value = l),
          title: "Switch Workspace",
          width: "500px",
          onClose: s[5] || (s[5] = (l) => _.value = !1)
        }, {
          footer: m(() => [
            N(me, {
              onClick: s[3] || (s[3] = (l) => _.value = !1)
            }, {
              default: m(() => [...s[15] || (s[15] = [
                q("Cancel", -1)
              ])]),
              _: 1
            }),
            N(me, {
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
              (p(!0), I(de, null, pe(A.value, (l) => {
                var Q, we;
                return p(), I("div", {
                  key: l.id,
                  class: ye(["workspace-item", { active: l.id === ((Q = r.value) == null ? void 0 : Q.id) }]),
                  onClick: (As) => _e(l)
                }, [
                  i("div", ms, O(l.children && l.children.length ? "📁" : "📄"), 1),
                  i("div", ws, [
                    i("h3", null, O(l.title), 1),
                    i("p", null, O(l.description), 1),
                    i("span", ys, O(l.hasAccess ? "Active" : "Inactive"), 1)
                  ]),
                  l.id === ((we = r.value) == null ? void 0 : we.id) ? (p(), I("div", Ss, [
                    N(n, null, {
                      default: m(() => [
                        N(he(Ve))
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
  for (const [c, v] of a)
    o[c] = v;
  return o;
}, $s = /* @__PURE__ */ Is(bs, [["__scopeId", "data-v-94a48ceb"]]), Ce = "aiworkspace_auth", Ee = "aiworkspace_user_id";
function Ps() {
  const e = U({
    user: null,
    isAuthenticated: !1,
    isLoading: !0
  }), a = (E) => {
    var u;
    const w = `; ${document.cookie}`.split(`; ${E}=`);
    return w.length === 2 && ((u = w.pop()) == null ? void 0 : u.split(";").shift()) || null;
  }, o = (E, R, w = 7) => {
    const u = /* @__PURE__ */ new Date();
    u.setTime(u.getTime() + w * 24 * 60 * 60 * 1e3), document.cookie = `${E}=${R};expires=${u.toUTCString()};path=/;domain=.aiworkspace.pro`;
  }, c = (E) => {
    document.cookie = `${E}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.aiworkspace.pro`;
  }, v = async () => {
    try {
      const E = a(Ce), R = a(Ee);
      E && R ? e.value = {
        user: { id: R, email: "" },
        // You can fetch full user data here
        isAuthenticated: !0,
        isLoading: !1
      } : e.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1
      };
    } catch (E) {
      console.error("Auth check failed:", E), e.value = {
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
  return re(() => {
    v();
  }), {
    authState: e,
    checkAuth: v,
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
  ie as syncCookiesToLocalStorage,
  Ps as useAuth,
  Ye as useEnhancedAuth,
  Ge as useWorkspaceStore
};
