import { defineComponent as fe, openBlock as f, createElementBlock as A, createElementVNode as i, ref as x, computed as q, onMounted as ie, watch as ee, resolveComponent as H, createStaticVNode as de, createBlock as J, withCtx as w, createVNode as N, createCommentVNode as M, Fragment as pe, renderList as he, normalizeStyle as Te, toDisplayString as R, createTextVNode as X, unref as ke, normalizeClass as Se, withModifiers as ne } from "vue";
import { ElMessage as se, ElMessageBox as Ie } from "element-plus";
import { createClient as Me } from "@supabase/supabase-js";
import { defineStore as Je } from "pinia";
/*! Element Plus Icons Vue v2.3.2 */
var Ve = /* @__PURE__ */ fe({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(s) {
    return (a, o) => (f(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"
      })
    ]));
  }
}), be = Ve, ze = /* @__PURE__ */ fe({
  name: "Check",
  __name: "check",
  setup(s) {
    return (a, o) => (f(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      })
    ]));
  }
}), Be = ze;
const G = "aiworkspace.pro";
function ue(s) {
  return s === "localhost" || /^\d+\.\d+\.\d+\.\d+$/.test(s);
}
function We(s) {
  return s === G || s.endsWith(`.${G}`);
}
function ce(s) {
  return document.cookie.split(";").map((c) => c.trim()).filter((c) => s.some((_) => c.startsWith(_ + "=")));
}
function K(s, a, o = 60 * 60 * 24 * 365) {
  const c = location.hostname;
  if (ue(c)) {
    document.cookie = `${s}=${encodeURIComponent(a)}; Path=/; Max-Age=${o}; SameSite=Lax`, console.log("[auth][cookie][set][local]", { host: c, name: s, valuePreview: a.slice(0, 20) + "..." }), console.log("[auth][cookie][after]", ce([s]));
    return;
  }
  document.cookie = `${s}=${encodeURIComponent(a)}; Domain=.${G}; Path=/; Max-Age=${o}; SameSite=Lax; Secure`, document.cookie = `${s}=; Path=/; Max-Age=0; SameSite=Lax`, console.log("[auth][cookie][set][apex]", { host: c, apex: G, name: s, valuePreview: a.slice(0, 20) + "..." }), console.log("[auth][cookie][after]", ce([s]));
}
function j(s) {
  const a = new RegExp("(?:^|; )" + s.replace(/[$()*+.[\]?^{}|\\/-]/g, "\\$&") + "=([^;]*)"), o = document.cookie.match(a);
  return o ? decodeURIComponent(o[1]) : null;
}
function Ae(s) {
  const a = location.hostname;
  if (ue(a)) {
    document.cookie = `${s}=; Path=/; Max-Age=0; SameSite=Lax`, console.log("[auth][cookie][clear][local]", { host: a, name: s });
    return;
  }
  document.cookie = `${s}=; Domain=.${G}; Path=/; Max-Age=0; SameSite=Lax; Secure`, document.cookie = `${s}=; Path=/; Max-Age=0; SameSite=Lax`, console.log("[auth][cookie][clear][apex]", { host: a, apex: G, name: s }), console.log("[auth][cookie][after]", ce([s]));
}
function Ue(s) {
  const a = location.hostname;
  if (ue(a)) {
    console.log("[auth][cookie][promote] skip (local host)", a);
    return;
  }
  if (!We(a)) {
    console.log("[auth][cookie][promote] skip (not under apex)", { host: a, apex: G });
    return;
  }
  console.log("[auth][cookie][promote] start", { host: a, apex: G, names: s }), s.forEach((o) => {
    const c = j(o);
    c ? K(o, c, 60 * 60 * 24 * 365) : console.log("[auth][cookie][promote] missing", o);
  }), console.log("[auth][cookie][promote] done", ce(s));
}
function xs() {
  return `${window.location.origin}/callback`;
}
function $s() {
  try {
    const s = new URLSearchParams(location.search), a = ["redirect", "redirect_to", "returnTo", "next"].find((c) => s.get(c));
    let o = a ? s.get(a) : "";
    if (o || (o = sessionStorage.getItem("post-login-redirect") || localStorage.getItem("post-login-redirect") || ""), o || (o = { VITE_SUPABASE_URL: "https://oqdnbpmmgntqtigstaow.supabase.co", VITE_SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xZG5icG1tZ250cXRpZ3N0YW93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0NTk2NDYsImV4cCI6MjA1MDAzNTY0Nn0.rn0nRY9xLgLt-ajiSPeG0PcdS9V-549C1yeqhcxxG40", VITE_APEX_DOMAIN: "aiworkspace.pro", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_DEFAULT_POST_LOGIN_URL || "/"), o.startsWith("http"))
      try {
        const c = new URL(o);
        return We(c.hostname) || ue(c.hostname) ? o : "/";
      } catch {
        return "/";
      }
    return o.startsWith("/") || (o = "/" + o), o;
  } catch {
    return "/";
  }
}
const V = "sb-access-token", z = "sb-refresh-token", Ne = "sb-access-token", xe = "sb-refresh-token";
function le() {
  try {
    const s = j(V), a = j(z);
    s && localStorage.setItem(Ne, s), a && localStorage.setItem(xe, a), console.log("[auth][cookie->ls] sync", {
      hasAccess: !!s,
      hasRefresh: !!a
    });
  } catch (s) {
    console.log("[auth][cookie->ls] error", s);
  }
}
function Ye() {
  try {
    localStorage.removeItem(Ne), localStorage.removeItem(xe), console.log("[auth][cookie->ls] cleared localStorage");
  } catch (s) {
    console.log("[auth][cookie->ls] clear error", s);
  }
}
async function Ps() {
  try {
    Ue([V, z]);
    const s = j(V), a = j(z);
    if (s && a) {
      const { data: { session: o } } = await P.auth.getSession();
      if (!o) {
        const { data: c, error: _ } = await P.auth.setSession({ access_token: s, refresh_token: a });
        _ ? console.log("[auth][restore] error", _) : console.log("[auth][restore] done", !!c.session);
      }
    } else
      console.log("[auth][restore] no cookies present");
    le();
  } catch (s) {
    console.log("[auth][restore] exception", s);
  }
}
function Ge() {
  console.log("[auth][listener] Setting up auth state listener..."), P.auth.onAuthStateChange(async (s, a) => {
    switch (console.log("[auth][listener] Auth state changed:", s, !!a), s) {
      case "TOKEN_REFRESHED":
        console.log("[auth][listener] Token refreshed successfully"), a && (K(V, a.access_token, 60 * 60 * 24 * 365), K(z, a.refresh_token, 60 * 60 * 24 * 365), le());
        break;
      case "SIGNED_IN":
        console.log("[auth][listener] User signed in"), a && (K(V, a.access_token, 60 * 60 * 24 * 365), K(z, a.refresh_token, 60 * 60 * 24 * 365), le());
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
async function Ce() {
  try {
    const { data: { session: s } } = await P.auth.getSession();
    if (s && s.user)
      return console.log("[auth][restore] Active session found"), { success: !0, session: s };
    const a = j(V), o = j(z);
    if (a && o) {
      console.log("[auth][restore] Attempting to restore session from cookies...");
      const { data: c, error: _ } = await P.auth.setSession({
        access_token: a,
        refresh_token: o
      });
      if (_)
        return console.log("[auth][restore] Failed to restore session:", _.message), { success: !1, error: _ };
      if (c.session)
        return console.log("[auth][restore] Session restored successfully"), K(V, c.session.access_token, 60 * 60 * 24 * 365), K(z, c.session.refresh_token, 60 * 60 * 24 * 365), le(), { success: !0, session: c.session };
    }
    return console.log("[auth][restore] No valid session or cookies found"), { success: !1, error: "No valid session or cookies" };
  } catch (s) {
    return console.log("[auth][restore] Exception during session restoration:", s), { success: !1, error: s };
  }
}
if (typeof window < "u")
  try {
    Ue([V, z]);
  } catch (s) {
    console.log("[auth][cookie][promote] error (pre-init)", s);
  }
const ve = "https://oqdnbpmmgntqtigstaow.supabase.co", _e = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xZG5icG1tZ250cXRpZ3N0YW93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0NTk2NDYsImV4cCI6MjA1MDAzNTY0Nn0.rn0nRY9xLgLt-ajiSPeG0PcdS9V-549C1yeqhcxxG40", P = Me(ve, _e, {
  auth: {
    // Enable automatic token refresh
    autoRefreshToken: !0,
    // Persist session in localStorage
    persistSession: !0,
    // Detect session in URL (for OAuth callbacks)
    detectSessionInUrl: !0
  }
});
typeof window < "u" && Ge();
console.log("Supabase Configuration:", {
  url: ve,
  hasKey: !!_e,
  autoRefreshToken: !0,
  persistSession: !0
});
console.log("URL:", ve.replace(/https:\/\/(.+)\.supabase\.co/, "https://*****.supabase.co"));
console.log("Key configured:", !_e.includes("your-anon-key"));
console.log("Environment mode:", "production");
function Fe() {
  const s = x({
    user: null,
    isAuthenticated: !1,
    isLoading: !0
  }), a = x(null), o = q(() => s.value.isAuthenticated), c = q(() => s.value.user), _ = q(() => s.value.isLoading), F = async () => {
    var v, b, m, C, W, y, $, p, S, n, d, I, Z, te, oe;
    try {
      const { data: { session: O } } = await P.auth.getSession();
      if (O && O.user) {
        const h = O.user, B = {
          id: h.id,
          name: ((v = h.user_metadata) == null ? void 0 : v.name) || ((b = h.user_metadata) == null ? void 0 : b.user_name) || ((m = h.user_metadata) == null ? void 0 : m.full_name) || ((C = h.email) == null ? void 0 : C.split("@")[0]) || "User",
          email: h.email,
          avatar_url: ((W = h.user_metadata) == null ? void 0 : W.avatar_url) || null,
          user_metadata: h.user_metadata
        };
        return s.value = {
          user: B,
          isAuthenticated: !0,
          isLoading: !1
        }, a.value = {
          user: B,
          access_token: O.access_token,
          refresh_token: O.refresh_token
        }, { success: !0, session: a.value };
      }
      console.log("[auth][enhanced] No active session, attempting to restore from cookies...");
      const U = await Ce();
      if (U.success && U.session) {
        console.log("[auth][enhanced] Session restored successfully");
        const h = U.session.user, B = {
          id: h.id,
          name: ((y = h.user_metadata) == null ? void 0 : y.name) || (($ = h.user_metadata) == null ? void 0 : $.user_name) || ((p = h.user_metadata) == null ? void 0 : p.full_name) || ((S = h.email) == null ? void 0 : S.split("@")[0]) || "User",
          email: h.email,
          avatar_url: ((n = h.user_metadata) == null ? void 0 : n.avatar_url) || null,
          user_metadata: h.user_metadata
        };
        return s.value = {
          user: B,
          isAuthenticated: !0,
          isLoading: !1
        }, a.value = U.session, { success: !0, session: a.value };
      } else
        console.log("[auth][enhanced] Failed to restore session:", U.error);
    } catch (O) {
      console.error("Error getting Supabase session:", O);
      try {
        const U = await Ce();
        if (U.success && U.session) {
          console.log("[auth][enhanced] Session restored after error");
          const h = U.session.user, B = {
            id: h.id,
            name: ((d = h.user_metadata) == null ? void 0 : d.name) || ((I = h.user_metadata) == null ? void 0 : I.user_name) || ((Z = h.user_metadata) == null ? void 0 : Z.full_name) || ((te = h.email) == null ? void 0 : te.split("@")[0]) || "User",
            email: h.email,
            avatar_url: ((oe = h.user_metadata) == null ? void 0 : oe.avatar_url) || null,
            user_metadata: h.user_metadata
          };
          return s.value = {
            user: B,
            isAuthenticated: !0,
            isLoading: !1
          }, a.value = U.session, { success: !0, session: a.value };
        }
      } catch (U) {
        console.error("Error restoring session:", U);
      }
    }
    return s.value = {
      user: null,
      isAuthenticated: !1,
      isLoading: !1
    }, a.value = null, { success: !1, error: "No valid session found" };
  }, L = async () => {
    try {
      await P.auth.signOut(), Ae(V), Ae(z), Ye(), s.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1
      }, a.value = null, console.log("[auth][enhanced] User logged out successfully");
    } catch (v) {
      console.error("Error during logout:", v), s.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1
      }, a.value = null;
    }
  }, D = async (v, b) => {
    var m, C, W, y, $;
    try {
      s.value.isLoading = !0;
      const { data: p, error: S } = await P.auth.signInWithPassword({
        email: v,
        password: b
      });
      if (S)
        throw S;
      if (p.session) {
        const n = p.session.user, d = {
          id: n.id,
          name: ((m = n.user_metadata) == null ? void 0 : m.name) || ((C = n.user_metadata) == null ? void 0 : C.user_name) || ((W = n.user_metadata) == null ? void 0 : W.full_name) || ((y = n.email) == null ? void 0 : y.split("@")[0]) || "User",
          email: n.email,
          avatar_url: (($ = n.user_metadata) == null ? void 0 : $.avatar_url) || null,
          user_metadata: n.user_metadata
        };
        return s.value = {
          user: d,
          isAuthenticated: !0,
          isLoading: !1
        }, a.value = {
          user: d,
          access_token: p.session.access_token,
          refresh_token: p.session.refresh_token
        }, { success: !0, session: a.value };
      }
      return { success: !1, error: "No session returned" };
    } catch (p) {
      return console.error("Sign in error:", p), s.value.isLoading = !1, { success: !1, error: p };
    }
  }, g = async (v, b, m) => {
    var C, W, y, $, p;
    try {
      s.value.isLoading = !0;
      const { data: S, error: n } = await P.auth.signUp({
        email: v,
        password: b,
        options: {
          data: m
        }
      });
      if (n)
        throw n;
      if (S.session) {
        const d = S.session.user, I = {
          id: d.id,
          name: ((C = d.user_metadata) == null ? void 0 : C.name) || ((W = d.user_metadata) == null ? void 0 : W.user_name) || ((y = d.user_metadata) == null ? void 0 : y.full_name) || (($ = d.email) == null ? void 0 : $.split("@")[0]) || "User",
          email: d.email,
          avatar_url: ((p = d.user_metadata) == null ? void 0 : p.avatar_url) || null,
          user_metadata: d.user_metadata
        };
        return s.value = {
          user: I,
          isAuthenticated: !0,
          isLoading: !1
        }, a.value = {
          user: I,
          access_token: S.session.access_token,
          refresh_token: S.session.refresh_token
        }, { success: !0, session: a.value };
      }
      return { success: !1, error: "No session returned" };
    } catch (S) {
      return console.error("Sign up error:", S), s.value.isLoading = !1, { success: !1, error: S };
    }
  }, u = async () => {
    await F();
  };
  return ie(() => {
    u();
  }), {
    // State
    authState: s,
    currentSession: a,
    // Computed
    isAuthenticated: o,
    currentUser: c,
    isLoading: _,
    // Methods
    loadUserInfo: F,
    logout: L,
    signIn: D,
    signUp: g,
    checkAuth: u
  };
}
const Ze = Je("workspace", () => {
  const s = x(null), a = x([]), o = x(null), c = (u) => {
    s.value = u, localStorage.setItem("current_workspace", JSON.stringify(u));
  }, _ = (u) => {
    a.value = u, localStorage.setItem("available_workspaces", JSON.stringify(u));
  };
  return {
    currentWorkspace: s,
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
          s.value = JSON.parse(u);
        } catch (m) {
          console.error("Error loading persisted workspace:", m);
        }
      const v = localStorage.getItem("available_workspaces");
      if (v)
        try {
          a.value = JSON.parse(v);
        } catch (m) {
          console.error("Error loading persisted workspaces:", m);
        }
      const b = localStorage.getItem("user_info");
      if (b)
        try {
          o.value = JSON.parse(b);
        } catch (m) {
          console.error("Error loading persisted user:", m);
        }
    },
    clearData: () => {
      s.value = null, a.value = [], o.value = null, localStorage.removeItem("current_workspace"), localStorage.removeItem("available_workspaces"), localStorage.removeItem("user_info");
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
        const { data: m, error: C } = await b;
        if (C)
          throw C;
        const W = /* @__PURE__ */ new Map();
        (m || []).forEach((n) => {
          (n.workspace_access || []).forEach((d) => {
            d.shared_with_user_id === v.id && W.set(n.id, d);
          });
        });
        const y = [...new Set(
          (m || []).filter((n) => n.parent_workspace_id).map((n) => n.parent_workspace_id).filter((n) => !W.has(n))
        )];
        let $ = [];
        if (y.length) {
          let n = P.from("workspaces").select("id, title, description, parent_workspace_id, created_by, archived, created_at").in("id", y);
          u || (n = n.eq("archived", !1));
          const { data: d, error: I } = await n;
          if (I)
            throw I;
          $ = d || [];
        }
        const S = [...m || [], ...$].map((n) => {
          var d, I, Z;
          return {
            id: n.id,
            title: n.title,
            description: n.description || "No description",
            parent_workspace_id: n.parent_workspace_id,
            created_by: n.created_by,
            archived: n.archived,
            created_at: n.created_at,
            latest_activity: ((I = (d = n.workspace_activities) == null ? void 0 : d[0]) == null ? void 0 : I.updated_at) || n.created_at,
            hasAccess: W.has(n.id),
            accessType: ((Z = W.get(n.id)) == null ? void 0 : Z.access_type) || null
          };
        });
        return S.sort((n, d) => new Date(d.latest_activity) - new Date(n.latest_activity)), _(S), S;
      } catch (v) {
        return console.error("loadWorkspaces error", v), [];
      }
    }
  };
}), He = { class: "aiworkspace-header" }, Xe = {
  key: 0,
  class: "header-content header-loading"
}, qe = {
  key: 1,
  class: "header-content header-fallback"
}, Ke = {
  key: 2,
  class: "header-content"
}, je = { class: "header-left" }, Qe = { class: "logo-section" }, es = {
  href: "/",
  class: "logo"
}, ss = ["src"], as = {
  key: 1,
  class: "text-logo"
}, ts = {
  key: 0,
  class: "header-center"
}, os = { class: "main-navigation" }, rs = { class: "nav-item" }, ns = ["href"], is = { class: "workspace-icon" }, cs = {
  key: 1,
  class: "nav-divider"
}, ls = { class: "nav-item" }, us = ["href", "onClick"], ds = { class: "header-right" }, ps = { class: "user-profile" }, hs = { class: "user-info" }, ks = { class: "user-name" }, fs = { class: "user-avatar" }, vs = ["src", "alt"], _s = {
  key: 1,
  class: "avatar-placeholder"
}, gs = {
  key: 3,
  class: "unauth-message"
}, ms = { class: "workspace-list" }, ws = ["onClick"], ys = { class: "workspace-icon" }, Ss = { class: "workspace-details" }, Is = { class: "workspace-members" }, bs = {
  key: 0,
  class: "current-indicator"
}, ae = 50, As = /* @__PURE__ */ fe({
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
    const o = s, c = a, { authState: _, logout: F } = Fe(), L = () => {
      try {
        return Ze();
      } catch {
        return console.warn("[AIWorkspaceHeader] Pinia not initialized yet, using fallback state"), null;
      }
    }, D = () => {
      try {
        return typeof window < "u" ? !!window.__PINIA__ || !!window.Pinia : !1;
      } catch {
        return !1;
      }
    }, g = x(L()), u = q(() => !!g.value), v = x(0), b = () => {
      if (!g.value && v.value < ae) {
        if (D()) {
          const t = L();
          if (t) {
            g.value = t, console.log("[AIWorkspaceHeader] Pinia store initialized successfully");
            return;
          }
        }
        v.value++, setTimeout(b, 100);
      } else
        v.value >= ae && console.warn("[AIWorkspaceHeader] Pinia initialization failed after maximum retries, using fallback mode");
    };
    ie(() => {
      g.value || b();
    });
    const m = x(!1), C = x([]), W = x([]), y = x({
      name: "",
      email: "",
      avatar_url: null,
      initials: ""
    }), $ = x([]), p = x([]);
    ee(p, async (t) => {
      t.length > 0 && u.value && d.value && await n();
    }, { immediate: !1 }), ee(() => window.location.pathname + window.location.search + window.location.hash, async () => {
      u.value && d.value && await n();
    }, { immediate: !1 }), ee(u, (t) => {
      !t && v.value < ae && b();
    });
    const S = () => {
      try {
        const t = window.location.pathname.match(/\/single-workspace\/(\d+)/);
        if (t)
          return t[1];
        const r = new URLSearchParams(window.location.search).get("workspace_id");
        if (r)
          return r;
        const k = window.location.hash.match(/workspace_id=(\d+)/);
        return k ? k[1] : null;
      } catch (t) {
        return console.warn("[AIWorkspaceHeader] Error parsing URL for workspace_id:", t), null;
      }
    }, n = async () => {
      if (!g.value || !u.value)
        return;
      const t = S();
      if (t)
        try {
          p.value.length === 0 && await U();
          const e = p.value.find((r) => r.id.toString() === t);
          e ? (g.value.setCurrentWorkspace(e), console.log(`[AIWorkspaceHeader] Auto-selected workspace from URL: ${e.title} (ID: ${e.id})`), c("workspaceChange", e)) : console.warn(`[AIWorkspaceHeader] Workspace with ID ${t} not found in available workspaces`);
        } catch (e) {
          console.error("[AIWorkspaceHeader] Error auto-selecting workspace from URL:", e);
        }
    }, d = q(() => _.value.isAuthenticated), I = q(() => g.value ? g.value.currentWorkspace : null), Z = x([
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
    ]), te = q(() => "Dashboard"), oe = (t) => {
      const e = /* @__PURE__ */ new Map();
      t.forEach((E) => {
        e.set(E.id, { ...E, children: [] });
      });
      const r = [];
      e.forEach((E) => {
        E.parent_workspace_id && e.has(E.parent_workspace_id) ? e.get(E.parent_workspace_id).children.push(E) : r.push(E);
      });
      const k = (E) => {
        E.sort((T, Y) => T.title.localeCompare(Y.title)), E.forEach((T) => {
          T.children && k(T.children);
        });
      };
      return k(r), r;
    }, O = (t, e = 0, r = []) => (t.forEach((k) => {
      r.push({ ...k, level: e }), k.children && k.children.length && O(k.children, e + 1, r);
    }), r), U = async () => {
      var t, e, r;
      try {
        const k = await ((t = g.value) == null ? void 0 : t.loadWorkspaces());
        if ($.value = oe(k || []), p.value = O($.value), W.value = p.value, C.value = p.value, o.currentWorkspaceId) {
          const E = p.value.find((T) => {
            var Y;
            return T.id.toString() === ((Y = o.currentWorkspaceId) == null ? void 0 : Y.toString());
          });
          E && ((e = g.value) == null || e.setCurrentWorkspace(E));
        } else
          !I.value && p.value.length && ((r = g.value) == null || r.setCurrentWorkspace(p.value[0]));
      } catch (k) {
        console.error("loadWorkspaces (header) error", k);
      }
    }, h = (t) => {
      if (console.log("Navigation command:", t), t === "all-workspace") {
        window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
        return;
      } else {
        const e = parseInt(t.replace("workspace-", ""));
        window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e}/dashboard`;
        return;
      }
    }, B = (t) => {
      const e = I.value;
      switch (t.key) {
        case "dashboard":
          e ? window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e.id}/dashboard` : window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
          break;
        case "outlines":
          if (e) {
            const r = `https://outline.aiworkspace.pro/single-workspace/${e.id}/outlines`;
            window.location.href = r;
          } else
            window.location.href = "https://outline.aiworkspace.pro";
          break;
        case "canvas":
          if (e) {
            const r = `https://canvas.aiworkspace.pro/single-workspace/${e.id}/canvas`;
            window.location.href = r;
          } else
            window.location.href = "https://canvas.aiworkspace.pro";
          break;
        case "files":
          if (e) {
            const r = `https://drive.aiworkspace.pro/single-workspace/${e.id}/files`;
            window.location.href = r;
          } else
            window.location.href = "https://drive.aiworkspace.pro";
          break;
        case "tasks":
          if (e) {
            const r = `https://tasks.aiworkspace.pro/single-workspace/${e.id}/tasks`;
            window.location.href = r;
          } else
            window.location.href = "https://tasks.aiworkspace.pro";
          break;
        case "ai-portfolios":
          if (e) {
            const r = `https://spreadsheet.aiworkspace.pro/single-workspace/${e.id}/ai-portfolios`;
            window.location.href = r;
          } else
            window.location.href = "https://spreadsheet.aiworkspace.pro";
          break;
        default:
          if (e) {
            const r = `https://app.aiworkspace.pro/single-workspace/${e.id}/${t.key}`;
            window.location.href = r;
          } else {
            const r = `https://app.aiworkspace.pro/${t.key}`;
            window.location.href = r;
          }
          break;
      }
    }, $e = (t) => {
      const e = I.value;
      switch (t.key) {
        case "dashboard":
          return e ? `/single-workspace/${e.id}/dashboard` : "/";
        case "ai-portfolios":
          return e ? `https://spreadsheet.aiworkspace.pro/single-workspace/${e.id}/ai-portfolios` : "https://spreadsheet.aiworkspace.pro";
        case "outlines":
          return e ? `https://outline.aiworkspace.pro/single-workspace/${e.id}/outlines` : "https://outline.aiworkspace.pro";
        case "canvas":
          return e ? `https://canvas.aiworkspace.pro/single-workspace/${e.id}/canvas` : "https://canvas.aiworkspace.pro";
        case "files":
          return e ? `https://drive.aiworkspace.pro/single-workspace/${e.id}/files` : "https://drive.aiworkspace.pro";
        case "tasks":
          return e ? `https://tasks.aiworkspace.pro/single-workspace/${e.id}/tasks` : "https://tasks.aiworkspace.pro";
        default:
          return e ? `https://app.aiworkspace.pro/single-workspace/${e.id}/${t.key}` : `https://app.aiworkspace.pro/${t.key}`;
      }
    }, re = (t) => {
      switch (t) {
        case "profile":
          o.onProfileClick ? o.onProfileClick() : se.info("Profile settings coming soon");
          break;
        case "workspaces":
          m.value = !0;
          break;
        case "logout":
          Re();
          break;
      }
    }, ge = (t) => {
      var e;
      (e = g.value) == null || e.setCurrentWorkspace(t), m.value = !1, c("workspaceChange", t), se.success(`Switched to ${t.title}`);
    }, Pe = () => {
      Ie.prompt("Enter workspace name:", "Create New Workspace", {
        confirmButtonText: "Create",
        cancelButtonText: "Cancel",
        inputPattern: /\S/,
        inputErrorMessage: "Workspace name cannot be empty"
      }).then(({ value: t }) => {
        var r;
        const e = {
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
        C.value.push(e), (r = g.value) == null || r.setWorkspaces(C.value), ge(e), se.success(`Created workspace: ${t}`);
      }).catch(() => {
      });
    }, Re = () => {
      Ie.confirm(
        "Are you sure you want to sign out?",
        "Sign Out",
        {
          confirmButtonText: "Sign Out",
          cancelButtonText: "Cancel",
          type: "warning"
        }
      ).then(async () => {
        var t;
        (t = g.value) == null || t.clearData(), await F(), c("logout"), se.success("Signed out successfully");
      }).catch(() => {
      });
    }, me = async () => {
      var t, e;
      if (_.value.user) {
        const r = _.value.user;
        y.value = {
          name: r.name || ((t = r.email) == null ? void 0 : t.split("@")[0]) || "User",
          email: r.email || "",
          avatar_url: r.avatar_url || null,
          initials: (r.name || ((e = r.email) == null ? void 0 : e.split("@")[0]) || "U").split(" ").map((k) => k[0]).join("").toUpperCase().substring(0, 2)
        }, o.showWorkspaceSelector && await U();
      }
    };
    ee(() => _.value.user, (t) => {
      var e;
      t ? me() : (y.value = { name: "", email: "", avatar_url: null, initials: "" }, (e = g.value) == null || e.clearData());
    }), ee(() => o.currentWorkspaceId, (t) => {
      var e;
      if (t && p.value.length) {
        const r = p.value.find((k) => k.id.toString() === t.toString());
        r && ((e = g.value) == null || e.setCurrentWorkspace(r));
      }
    }), ie(async () => {
      d.value && (await me(), await n());
    });
    const De = () => {
      v.value = 0, b(), se.success("Manual Pinia retry initiated.");
    };
    return (t, e) => {
      const r = H("el-icon"), k = H("el-dropdown-item"), E = H("el-tag"), T = H("el-dropdown-menu"), Y = H("el-dropdown"), we = H("el-button"), Oe = H("el-dialog");
      return f(), A("header", He, [
        !u.value && v.value < ae ? (f(), A("div", Xe, [...e[6] || (e[6] = [
          de('<div class="header-left" data-v-54ecdd64><div class="logo-section" data-v-54ecdd64><a href="/" class="logo" data-v-54ecdd64><div class="text-logo" data-v-54ecdd64><span class="logo-text" data-v-54ecdd64>AI Workspace</span></div></a></div></div><div class="header-center" data-v-54ecdd64><span class="loading-text" data-v-54ecdd64>Initializing...</span></div>', 2)
        ])])) : !u.value && v.value >= ae ? (f(), A("div", qe, [
          e[8] || (e[8] = de('<div class="header-left" data-v-54ecdd64><div class="logo-section" data-v-54ecdd64><a href="/" class="logo" data-v-54ecdd64><div class="text-logo" data-v-54ecdd64><span class="logo-text" data-v-54ecdd64>AI Workspace</span></div></a></div></div>', 1)),
          i("div", { class: "header-center" }, [
            e[7] || (e[7] = i("span", { class: "fallback-text" }, "Header Ready (Fallback Mode)", -1)),
            i("button", {
              onClick: De,
              class: "retry-button"
            }, "Retry Pinia")
          ]),
          e[9] || (e[9] = de('<div class="header-right" data-v-54ecdd64><div class="user-profile" data-v-54ecdd64><div class="user-info" data-v-54ecdd64><span class="user-name" data-v-54ecdd64>User</span></div><div class="user-avatar" data-v-54ecdd64><span class="avatar-placeholder" data-v-54ecdd64>U</span></div></div></div>', 1))
        ])) : d.value ? (f(), A("div", Ke, [
          i("div", je, [
            i("div", Qe, [
              i("a", es, [
                t.customLogo ? (f(), A("img", {
                  key: 0,
                  src: t.customLogo,
                  alt: "AIWorkspace",
                  class: "logo-image"
                }, null, 8, ss)) : (f(), A("div", as, [...e[10] || (e[10] = [
                  i("span", { class: "logo-text" }, "AI Workspace", -1)
                ])]))
              ])
            ])
          ]),
          t.showSecondaryNavigation ? (f(), A("div", ts, [
            i("nav", os, [
              t.showWorkspaceSelector ? (f(), J(Y, {
                key: 0,
                onCommand: h,
                trigger: "hover"
              }, {
                dropdown: w(() => [
                  N(T, { class: "workspace-tree-dropdown" }, {
                    default: w(() => [
                      N(k, { command: "all-workspace" }, {
                        default: w(() => [...e[11] || (e[11] = [
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
                      p.value.length > 0 ? (f(), J(k, {
                        key: 0,
                        divided: "",
                        disabled: ""
                      })) : M("", !0),
                      (f(!0), A(pe, null, he(p.value, (l) => (f(), J(k, {
                        key: l.id,
                        command: `workspace-${l.id}`
                      }, {
                        default: w(() => {
                          var Q;
                          return [
                            i("a", {
                              href: `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${l.id}/dashboard`,
                              class: "nav-link"
                            }, [
                              i("div", {
                                class: "workspace-dropdown-item",
                                style: Te({ paddingLeft: (l.level || 0) * 16 + "px" })
                              }, [
                                i("span", is, R(l.children && l.children.length ? "📁" : "📄"), 1),
                                i("span", null, R(l.title), 1),
                                l.id === ((Q = I.value) == null ? void 0 : Q.id) ? (f(), J(E, {
                                  key: 0,
                                  size: "small",
                                  type: "success"
                                }, {
                                  default: w(() => [...e[12] || (e[12] = [
                                    X("Current", -1)
                                  ])]),
                                  _: 1
                                })) : M("", !0)
                              ], 4)
                            ], 8, ns)
                          ];
                        }),
                        _: 2
                      }, 1032, ["command"]))), 128)),
                      p.value.length === 0 ? (f(), J(k, {
                        key: 1,
                        disabled: ""
                      }, {
                        default: w(() => [...e[13] || (e[13] = [
                          X(" No workspaces ", -1)
                        ])]),
                        _: 1
                      })) : M("", !0)
                    ]),
                    _: 1
                  })
                ]),
                default: w(() => {
                  var l;
                  return [
                    i("span", rs, [
                      X(R(((l = I.value) == null ? void 0 : l.title) || "Select Workspace") + " ", 1),
                      N(r, { class: "nav-arrow" }, {
                        default: w(() => [
                          N(ke(be))
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }),
                _: 1
              })) : M("", !0),
              t.showWorkspaceSelector ? (f(), A("span", cs, "/")) : M("", !0),
              t.showSecondaryNavigation ? (f(), J(Y, {
                key: 2,
                trigger: "hover"
              }, {
                dropdown: w(() => [
                  N(T, null, {
                    default: w(() => [
                      (f(!0), A(pe, null, he(Z.value, (l) => (f(), J(k, {
                        key: l.label,
                        class: Se({ active: l.active })
                      }, {
                        default: w(() => [
                          i("a", {
                            href: $e(l),
                            class: "nav-link",
                            onClick: ne((Q) => B(l), ["prevent"])
                          }, R(l.label), 9, us)
                        ]),
                        _: 2
                      }, 1032, ["class"]))), 128))
                    ]),
                    _: 1
                  })
                ]),
                default: w(() => [
                  i("span", ls, [
                    X(R(te.value) + " ", 1),
                    N(r, { class: "nav-arrow" }, {
                      default: w(() => [
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
          i("div", ds, [
            N(Y, {
              onCommand: re,
              trigger: "click",
              placement: "bottom-end"
            }, {
              dropdown: w(() => [
                N(T, null, {
                  default: w(() => [
                    N(k, null, {
                      default: w(() => [
                        i("a", {
                          href: "/profile",
                          class: "nav-link",
                          onClick: e[0] || (e[0] = ne((l) => re("profile"), ["prevent"]))
                        }, "Profile Settings")
                      ]),
                      _: 1
                    }),
                    t.showWorkspaceSelector ? (f(), J(k, { key: 0 }, {
                      default: w(() => [
                        i("a", {
                          href: "#switch-workspace",
                          class: "nav-link",
                          onClick: e[1] || (e[1] = ne((l) => re("workspaces"), ["prevent"]))
                        }, "Switch Workspace")
                      ]),
                      _: 1
                    })) : M("", !0),
                    N(k, { divided: "" }, {
                      default: w(() => [
                        i("a", {
                          href: "#signout",
                          class: "nav-link",
                          onClick: e[2] || (e[2] = ne((l) => re("logout"), ["prevent"]))
                        }, "Sign Out")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              default: w(() => [
                i("div", ps, [
                  i("div", hs, [
                    i("span", ks, R(y.value.name), 1)
                  ]),
                  i("div", fs, [
                    y.value.avatar_url ? (f(), A("img", {
                      key: 0,
                      src: y.value.avatar_url,
                      alt: y.value.name
                    }, null, 8, vs)) : (f(), A("span", _s, R(y.value.initials), 1))
                  ])
                ])
              ]),
              _: 1
            })
          ])
        ])) : (f(), A("div", gs, [...e[14] || (e[14] = [
          i("div", { class: "unauth-inner" }, [
            i("strong", null, "Authentication required."),
            X(" Please log in to access the workspace. ")
          ], -1)
        ])])),
        d.value && t.showWorkspaceSelector ? (f(), J(Oe, {
          key: 4,
          modelValue: m.value,
          "onUpdate:modelValue": e[4] || (e[4] = (l) => m.value = l),
          title: "Switch Workspace",
          width: "500px",
          onClose: e[5] || (e[5] = (l) => m.value = !1)
        }, {
          footer: w(() => [
            N(we, {
              onClick: e[3] || (e[3] = (l) => m.value = !1)
            }, {
              default: w(() => [...e[15] || (e[15] = [
                X("Cancel", -1)
              ])]),
              _: 1
            }),
            N(we, {
              type: "primary",
              onClick: Pe
            }, {
              default: w(() => [...e[16] || (e[16] = [
                X("Create New Workspace", -1)
              ])]),
              _: 1
            })
          ]),
          default: w(() => [
            i("div", ms, [
              (f(!0), A(pe, null, he(C.value, (l) => {
                var Q, ye;
                return f(), A("div", {
                  key: l.id,
                  class: Se(["workspace-item", { active: l.id === ((Q = I.value) == null ? void 0 : Q.id) }]),
                  onClick: (Es) => ge(l)
                }, [
                  i("div", ys, R(l.children && l.children.length ? "📁" : "📄"), 1),
                  i("div", Ss, [
                    i("h3", null, R(l.title), 1),
                    i("p", null, R(l.description), 1),
                    i("span", Is, R(l.hasAccess ? "Active" : "Inactive"), 1)
                  ]),
                  l.id === ((ye = I.value) == null ? void 0 : ye.id) ? (f(), A("div", bs, [
                    N(r, null, {
                      default: w(() => [
                        N(ke(Be))
                      ]),
                      _: 1
                    })
                  ])) : M("", !0)
                ], 10, ws);
              }), 128))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])) : M("", !0)
      ]);
    };
  }
});
const Cs = (s, a) => {
  const o = s.__vccOpts || s;
  for (const [c, _] of a)
    o[c] = _;
  return o;
}, Rs = /* @__PURE__ */ Cs(As, [["__scopeId", "data-v-54ecdd64"]]), Ee = "aiworkspace_auth", Le = "aiworkspace_user_id";
function Ds() {
  const s = x({
    user: null,
    isAuthenticated: !1,
    isLoading: !0
  }), a = (L) => {
    var u;
    const g = `; ${document.cookie}`.split(`; ${L}=`);
    return g.length === 2 && ((u = g.pop()) == null ? void 0 : u.split(";").shift()) || null;
  }, o = (L, D, g = 7) => {
    const u = /* @__PURE__ */ new Date();
    u.setTime(u.getTime() + g * 24 * 60 * 60 * 1e3), document.cookie = `${L}=${D};expires=${u.toUTCString()};path=/;domain=.aiworkspace.pro`;
  }, c = (L) => {
    document.cookie = `${L}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.aiworkspace.pro`;
  }, _ = async () => {
    try {
      const L = a(Ee), D = a(Le);
      L && D ? s.value = {
        user: { id: D, email: "" },
        // You can fetch full user data here
        isAuthenticated: !0,
        isLoading: !1
      } : s.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1
      };
    } catch (L) {
      console.error("Auth check failed:", L), s.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1
      };
    }
  }, F = () => {
    c(Ee), c(Le), s.value = {
      user: null,
      isAuthenticated: !1,
      isLoading: !1
    };
  };
  return ie(() => {
    _();
  }), {
    authState: s,
    checkAuth: _,
    logout: F,
    getCookie: a,
    setCookie: o,
    clearCookie: c
  };
}
export {
  V as ACCESS_COOKIE,
  Rs as AIWorkspaceHeader,
  Ne as LS_ACCESS_KEY,
  xe as LS_REFRESH_KEY,
  z as REFRESH_COOKIE,
  xs as buildOAuthRedirectUrl,
  Ye as clearLocalStorageTokens,
  Ae as clearSessionCookie,
  Ue as ensureCrossSubdomainCookies,
  j as getCookie,
  $s as getPostLoginBase,
  Ps as restoreCrossSubdomainSession,
  Ce as restoreSessionWithRetry,
  K as setSessionCookie,
  Ge as setupAuthStateListener,
  P as supabase,
  le as syncCookiesToLocalStorage,
  Ds as useAuth,
  Fe as useEnhancedAuth,
  Ze as useWorkspaceStore
};
