import { defineComponent as ve, openBlock as k, createElementBlock as A, createElementVNode as i, ref as C, computed as j, onMounted as ie, watch as ae, resolveComponent as K, createStaticVNode as de, createBlock as V, withCtx as m, createVNode as U, normalizeClass as pe, createTextVNode as Z, createCommentVNode as R, Fragment as he, renderList as ke, normalizeStyle as Ve, toDisplayString as D, unref as fe, withModifiers as ne } from "vue";
import { ElMessage as te, ElMessageBox as be } from "element-plus";
import { createClient as ze } from "@supabase/supabase-js";
import { defineStore as Be } from "pinia";
/*! Element Plus Icons Vue v2.3.2 */
var Ye = /* @__PURE__ */ ve({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(s) {
    return (t, r) => (k(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"
      })
    ]));
  }
}), Ae = Ye, Ge = /* @__PURE__ */ ve({
  name: "Check",
  __name: "check",
  setup(s) {
    return (t, r) => (k(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      })
    ]));
  }
}), He = Ge;
const X = "aiworkspace.pro";
function ue(s) {
  return s === "localhost" || /^\d+\.\d+\.\d+\.\d+$/.test(s);
}
function Ue(s) {
  return s === X || s.endsWith(`.${X}`);
}
function le(s) {
  return document.cookie.split(";").map((l) => l.trim()).filter((l) => s.some((w) => l.startsWith(w + "=")));
}
function Q(s, t, r = 60 * 60 * 24 * 365) {
  const l = location.hostname;
  if (ue(l)) {
    document.cookie = `${s}=${encodeURIComponent(t)}; Path=/; Max-Age=${r}; SameSite=Lax`, console.log("[auth][cookie][set][local]", { host: l, name: s, valuePreview: t.slice(0, 20) + "..." }), console.log("[auth][cookie][after]", le([s]));
    return;
  }
  document.cookie = `${s}=${encodeURIComponent(t)}; Domain=.${X}; Path=/; Max-Age=${r}; SameSite=Lax; Secure`, document.cookie = `${s}=; Path=/; Max-Age=0; SameSite=Lax`, console.log("[auth][cookie][set][apex]", { host: l, apex: X, name: s, valuePreview: t.slice(0, 20) + "..." }), console.log("[auth][cookie][after]", le([s]));
}
function ee(s) {
  const t = new RegExp("(?:^|; )" + s.replace(/[$()*+.[\]?^{}|\\/-]/g, "\\$&") + "=([^;]*)"), r = document.cookie.match(t);
  return r ? decodeURIComponent(r[1]) : null;
}
function Ce(s) {
  const t = location.hostname;
  if (ue(t)) {
    document.cookie = `${s}=; Path=/; Max-Age=0; SameSite=Lax`, console.log("[auth][cookie][clear][local]", { host: t, name: s });
    return;
  }
  document.cookie = `${s}=; Domain=.${X}; Path=/; Max-Age=0; SameSite=Lax; Secure`, document.cookie = `${s}=; Path=/; Max-Age=0; SameSite=Lax`, console.log("[auth][cookie][clear][apex]", { host: t, apex: X, name: s }), console.log("[auth][cookie][after]", le([s]));
}
function Ne(s) {
  const t = location.hostname;
  if (ue(t)) {
    console.log("[auth][cookie][promote] skip (local host)", t);
    return;
  }
  if (!Ue(t)) {
    console.log("[auth][cookie][promote] skip (not under apex)", { host: t, apex: X });
    return;
  }
  console.log("[auth][cookie][promote] start", { host: t, apex: X, names: s }), s.forEach((r) => {
    const l = ee(r);
    l ? Q(r, l, 60 * 60 * 24 * 365) : console.log("[auth][cookie][promote] missing", r);
  }), console.log("[auth][cookie][promote] done", le(s));
}
function Ms() {
  return `${window.location.origin}/callback`;
}
function Os() {
  try {
    const s = new URLSearchParams(location.search), t = ["redirect", "redirect_to", "returnTo", "next"].find((l) => s.get(l));
    let r = t ? s.get(t) : "";
    if (r || (r = sessionStorage.getItem("post-login-redirect") || localStorage.getItem("post-login-redirect") || ""), r || (r = { VITE_SUPABASE_URL: "https://oqdnbpmmgntqtigstaow.supabase.co", VITE_SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xZG5icG1tZ250cXRpZ3N0YW93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0NTk2NDYsImV4cCI6MjA1MDAzNTY0Nn0.rn0nRY9xLgLt-ajiSPeG0PcdS9V-549C1yeqhcxxG40", VITE_APEX_DOMAIN: "aiworkspace.pro", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_DEFAULT_POST_LOGIN_URL || "/"), r.startsWith("http"))
      try {
        const l = new URL(r);
        return Ue(l.hostname) || ue(l.hostname) ? r : "/";
      } catch {
        return "/";
      }
    return r.startsWith("/") || (r = "/" + r), r;
  } catch {
    return "/";
  }
}
const Y = "sb-access-token", G = "sb-refresh-token", xe = "sb-access-token", $e = "sb-refresh-token";
function ce() {
  try {
    const s = ee(Y), t = ee(G);
    s && localStorage.setItem(xe, s), t && localStorage.setItem($e, t), console.log("[auth][cookie->ls] sync", {
      hasAccess: !!s,
      hasRefresh: !!t
    });
  } catch (s) {
    console.log("[auth][cookie->ls] error", s);
  }
}
function Fe() {
  try {
    localStorage.removeItem(xe), localStorage.removeItem($e), console.log("[auth][cookie->ls] cleared localStorage");
  } catch (s) {
    console.log("[auth][cookie->ls] clear error", s);
  }
}
async function Ts() {
  try {
    Ne([Y, G]);
    const s = ee(Y), t = ee(G);
    if (s && t) {
      const { data: { session: r } } = await P.auth.getSession();
      if (!r) {
        const { data: l, error: w } = await P.auth.setSession({ access_token: s, refresh_token: t });
        w ? console.log("[auth][restore] error", w) : console.log("[auth][restore] done", !!l.session);
      }
    } else
      console.log("[auth][restore] no cookies present");
    ce();
  } catch (s) {
    console.log("[auth][restore] exception", s);
  }
}
function Ze() {
  console.log("[auth][listener] Setting up auth state listener..."), P.auth.onAuthStateChange(async (s, t) => {
    switch (console.log("[auth][listener] Auth state changed:", s, !!t), s) {
      case "TOKEN_REFRESHED":
        console.log("[auth][listener] Token refreshed successfully"), t && (Q(Y, t.access_token, 60 * 60 * 24 * 365), Q(G, t.refresh_token, 60 * 60 * 24 * 365), ce());
        break;
      case "SIGNED_IN":
        console.log("[auth][listener] User signed in"), t && (Q(Y, t.access_token, 60 * 60 * 24 * 365), Q(G, t.refresh_token, 60 * 60 * 24 * 365), ce());
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
    const { data: { session: s } } = await P.auth.getSession();
    if (s && s.user)
      return console.log("[auth][restore] Active session found"), { success: !0, session: s };
    const t = ee(Y), r = ee(G);
    if (t && r) {
      console.log("[auth][restore] Attempting to restore session from cookies...");
      const { data: l, error: w } = await P.auth.setSession({
        access_token: t,
        refresh_token: r
      });
      if (w)
        return console.log("[auth][restore] Failed to restore session:", w.message), { success: !1, error: w };
      if (l.session)
        return console.log("[auth][restore] Session restored successfully"), Q(Y, l.session.access_token, 60 * 60 * 24 * 365), Q(G, l.session.refresh_token, 60 * 60 * 24 * 365), ce(), { success: !0, session: l.session };
    }
    return console.log("[auth][restore] No valid session or cookies found"), { success: !1, error: "No valid session or cookies" };
  } catch (s) {
    return console.log("[auth][restore] Exception during session restoration:", s), { success: !1, error: s };
  }
}
const _e = "https://oqdnbpmmgntqtigstaow.supabase.co", ge = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xZG5icG1tZ250cXRpZ3N0YW93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0NTk2NDYsImV4cCI6MjA1MDAzNTY0Nn0.rn0nRY9xLgLt-ajiSPeG0PcdS9V-549C1yeqhcxxG40", P = ze(
  _e,
  ge,
  {
    db: {
      schema: "public"
    },
    auth: {
      storageKey: "sb-auth-token",
      storage: localStorage,
      autoRefreshToken: !0,
      persistSession: !0
    }
  }
);
typeof window < "u" && (Ne([Y, G]), Ze());
console.log("Supabase Configuration:", {
  url: _e,
  hasKey: !!ge,
  autoRefreshToken: !0,
  persistSession: !0
});
console.log("URL:", _e.replace(/https:\/\/(.+)\.supabase\.co/, "https://*****.supabase.co"));
console.log("Key configured:", !ge.includes("your-anon-key"));
console.log("Environment mode:", "production");
function Xe() {
  const s = C({
    user: null,
    isAuthenticated: !1,
    isLoading: !0
  }), t = C(null), r = j(() => s.value.isAuthenticated), l = j(() => s.value.user), w = j(() => s.value.isLoading), q = async () => {
    var g, b, y, E, L, I, N, d, S, n, v, $, z, H, O;
    try {
      const { data: { session: T } } = await P.auth.getSession();
      if (T && T.user) {
        const h = T.user, B = {
          id: h.id,
          name: ((g = h.user_metadata) == null ? void 0 : g.name) || ((b = h.user_metadata) == null ? void 0 : b.user_name) || ((y = h.user_metadata) == null ? void 0 : y.full_name) || ((E = h.email) == null ? void 0 : E.split("@")[0]) || "User",
          email: h.email,
          avatar_url: ((L = h.user_metadata) == null ? void 0 : L.avatar_url) || null,
          user_metadata: h.user_metadata
        };
        return s.value = {
          user: B,
          isAuthenticated: !0,
          isLoading: !1
        }, t.value = {
          user: B,
          access_token: T.access_token,
          refresh_token: T.refresh_token
        }, { success: !0, session: t.value };
      }
      console.log("[auth][enhanced] No active session, attempting to restore from cookies...");
      const x = await Ee();
      if (x.success && x.session) {
        console.log("[auth][enhanced] Session restored successfully");
        const h = x.session.user, B = {
          id: h.id,
          name: ((I = h.user_metadata) == null ? void 0 : I.name) || ((N = h.user_metadata) == null ? void 0 : N.user_name) || ((d = h.user_metadata) == null ? void 0 : d.full_name) || ((S = h.email) == null ? void 0 : S.split("@")[0]) || "User",
          email: h.email,
          avatar_url: ((n = h.user_metadata) == null ? void 0 : n.avatar_url) || null,
          user_metadata: h.user_metadata
        };
        return s.value = {
          user: B,
          isAuthenticated: !0,
          isLoading: !1
        }, t.value = x.session, { success: !0, session: t.value };
      } else
        console.log("[auth][enhanced] Failed to restore session:", x.error);
    } catch (T) {
      console.error("Error getting Supabase session:", T);
      try {
        const x = await Ee();
        if (x.success && x.session) {
          console.log("[auth][enhanced] Session restored after error");
          const h = x.session.user, B = {
            id: h.id,
            name: ((v = h.user_metadata) == null ? void 0 : v.name) || (($ = h.user_metadata) == null ? void 0 : $.user_name) || ((z = h.user_metadata) == null ? void 0 : z.full_name) || ((H = h.email) == null ? void 0 : H.split("@")[0]) || "User",
            email: h.email,
            avatar_url: ((O = h.user_metadata) == null ? void 0 : O.avatar_url) || null,
            user_metadata: h.user_metadata
          };
          return s.value = {
            user: B,
            isAuthenticated: !0,
            isLoading: !1
          }, t.value = x.session, { success: !0, session: t.value };
        }
      } catch (x) {
        console.error("Error restoring session:", x);
      }
    }
    return s.value = {
      user: null,
      isAuthenticated: !1,
      isLoading: !1
    }, t.value = null, { success: !1, error: "No valid session found" };
  }, W = async () => {
    try {
      await P.auth.signOut(), Ce(Y), Ce(G), Fe(), s.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1
      }, t.value = null, console.log("[auth][enhanced] User logged out successfully");
    } catch (g) {
      console.error("Error during logout:", g), s.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1
      }, t.value = null;
    }
  }, M = async (g, b) => {
    var y, E, L, I, N;
    try {
      s.value.isLoading = !0;
      const { data: d, error: S } = await P.auth.signInWithPassword({
        email: g,
        password: b
      });
      if (S)
        throw S;
      if (d.session) {
        const n = d.session.user, v = {
          id: n.id,
          name: ((y = n.user_metadata) == null ? void 0 : y.name) || ((E = n.user_metadata) == null ? void 0 : E.user_name) || ((L = n.user_metadata) == null ? void 0 : L.full_name) || ((I = n.email) == null ? void 0 : I.split("@")[0]) || "User",
          email: n.email,
          avatar_url: ((N = n.user_metadata) == null ? void 0 : N.avatar_url) || null,
          user_metadata: n.user_metadata
        };
        return s.value = {
          user: v,
          isAuthenticated: !0,
          isLoading: !1
        }, t.value = {
          user: v,
          access_token: d.session.access_token,
          refresh_token: d.session.refresh_token
        }, { success: !0, session: t.value };
      }
      return { success: !1, error: "No session returned" };
    } catch (d) {
      return console.error("Sign in error:", d), s.value.isLoading = !1, { success: !1, error: d };
    }
  }, _ = async (g, b, y) => {
    var E, L, I, N, d;
    try {
      s.value.isLoading = !0;
      const { data: S, error: n } = await P.auth.signUp({
        email: g,
        password: b,
        options: {
          data: y
        }
      });
      if (n)
        throw n;
      if (S.session) {
        const v = S.session.user, $ = {
          id: v.id,
          name: ((E = v.user_metadata) == null ? void 0 : E.name) || ((L = v.user_metadata) == null ? void 0 : L.user_name) || ((I = v.user_metadata) == null ? void 0 : I.full_name) || ((N = v.email) == null ? void 0 : N.split("@")[0]) || "User",
          email: v.email,
          avatar_url: ((d = v.user_metadata) == null ? void 0 : d.avatar_url) || null,
          user_metadata: v.user_metadata
        };
        return s.value = {
          user: $,
          isAuthenticated: !0,
          isLoading: !1
        }, t.value = {
          user: $,
          access_token: S.session.access_token,
          refresh_token: S.session.refresh_token
        }, { success: !0, session: t.value };
      }
      return { success: !1, error: "No session returned" };
    } catch (S) {
      return console.error("Sign up error:", S), s.value.isLoading = !1, { success: !1, error: S };
    }
  }, u = async () => {
    await q();
  };
  return ie(() => {
    u();
  }), {
    // State
    authState: s,
    currentSession: t,
    // Computed
    isAuthenticated: r,
    currentUser: l,
    isLoading: w,
    // Methods
    loadUserInfo: q,
    logout: W,
    signIn: M,
    signUp: _,
    checkAuth: u
  };
}
const qe = Be("workspace", () => {
  const s = C(null), t = C([]), r = C(null), l = (u) => {
    s.value = u, localStorage.setItem("current_workspace", JSON.stringify(u));
  }, w = (u) => {
    t.value = u, localStorage.setItem("available_workspaces", JSON.stringify(u));
  };
  return {
    currentWorkspace: s,
    workspaces: t,
    user: r,
    setCurrentWorkspace: l,
    setWorkspaces: w,
    setUser: (u) => {
      r.value = u, localStorage.setItem("user_info", JSON.stringify(u));
    },
    loadPersistedData: () => {
      const u = localStorage.getItem("current_workspace");
      if (u)
        try {
          s.value = JSON.parse(u);
        } catch (y) {
          console.error("Error loading persisted workspace:", y);
        }
      const g = localStorage.getItem("available_workspaces");
      if (g)
        try {
          t.value = JSON.parse(g);
        } catch (y) {
          console.error("Error loading persisted workspaces:", y);
        }
      const b = localStorage.getItem("user_info");
      if (b)
        try {
          r.value = JSON.parse(b);
        } catch (y) {
          console.error("Error loading persisted user:", y);
        }
    },
    clearData: () => {
      s.value = null, t.value = [], r.value = null, localStorage.removeItem("current_workspace"), localStorage.removeItem("available_workspaces"), localStorage.removeItem("user_info");
    },
    loadWorkspaces: async (u = !1) => {
      try {
        const { data: { user: g } } = await P.auth.getUser();
        if (!g)
          return [];
        let b = P.from("workspaces").select(`
          id, title, description, parent_workspace_id, created_by, archived, created_at,
          workspace_access!inner ( access_type, shared_with_user_id ),
          workspace_activities!left ( updated_at )
        `).eq("workspace_access.shared_with_user_id", g.id);
        u || (b = b.eq("archived", !1));
        const { data: y, error: E } = await b;
        if (E)
          throw E;
        const L = /* @__PURE__ */ new Map();
        (y || []).forEach((n) => {
          (n.workspace_access || []).forEach((v) => {
            v.shared_with_user_id === g.id && L.set(n.id, v);
          });
        });
        const I = [...new Set(
          (y || []).filter((n) => n.parent_workspace_id).map((n) => n.parent_workspace_id).filter((n) => !L.has(n))
        )];
        let N = [];
        if (I.length) {
          let n = P.from("workspaces").select("id, title, description, parent_workspace_id, created_by, archived, created_at").in("id", I);
          u || (n = n.eq("archived", !1));
          const { data: v, error: $ } = await n;
          if ($)
            throw $;
          N = v || [];
        }
        const S = [...y || [], ...N].map((n) => {
          var v, $, z;
          return {
            id: n.id,
            title: n.title,
            description: n.description || "No description",
            parent_workspace_id: n.parent_workspace_id,
            created_by: n.created_by,
            archived: n.archived,
            created_at: n.created_at,
            latest_activity: (($ = (v = n.workspace_activities) == null ? void 0 : v[0]) == null ? void 0 : $.updated_at) || n.created_at,
            hasAccess: L.has(n.id),
            accessType: ((z = L.get(n.id)) == null ? void 0 : z.access_type) || null
          };
        });
        return S.sort((n, v) => new Date(v.latest_activity) - new Date(n.latest_activity)), w(S), S;
      } catch (g) {
        return console.error("loadWorkspaces error", g), [];
      }
    }
  };
}), Ke = { class: "aiworkspace-header" }, je = {
  key: 0,
  class: "header-content header-loading"
}, Qe = {
  key: 1,
  class: "header-content header-fallback"
}, es = {
  key: 2,
  class: "header-content"
}, ss = { class: "header-left" }, as = { class: "logo-section" }, ts = {
  href: "/",
  class: "logo"
}, os = ["src"], rs = {
  key: 1,
  class: "text-logo"
}, ns = {
  key: 0,
  class: "header-center"
}, is = { class: "main-navigation" }, ls = { class: "nav-item" }, cs = {
  href: "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard",
  class: "nav-link"
}, us = { class: "workspace-dropdown-item" }, ds = ["href"], ps = { class: "workspace-icon" }, hs = {
  key: 1,
  class: "nav-divider"
}, ks = { class: "nav-item" }, fs = ["href", "onClick"], vs = { class: "header-right" }, _s = { class: "user-profile" }, gs = { class: "user-info" }, ms = { class: "user-name" }, ws = { class: "user-avatar" }, ys = ["src", "alt"], Ss = {
  key: 1,
  class: "avatar-placeholder"
}, Is = {
  key: 3,
  class: "unauth-message"
}, bs = { class: "workspace-list" }, As = ["onClick"], Cs = { class: "workspace-icon" }, Es = { class: "workspace-details" }, Ws = { class: "workspace-members" }, Ls = {
  key: 0,
  class: "current-indicator"
}, oe = 50, Us = /* @__PURE__ */ ve({
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
  setup(s, { emit: t }) {
    const r = s, l = t, { authState: w, logout: q } = Xe(), W = () => {
      try {
        return qe();
      } catch {
        return console.warn("[AIWorkspaceHeader] Pinia not initialized yet, using fallback state"), null;
      }
    }, M = () => {
      try {
        return typeof window < "u" ? !!window.__PINIA__ || !!window.Pinia : !1;
      } catch {
        return !1;
      }
    }, _ = C(W()), u = j(() => !!_.value), g = C(0), b = () => {
      if (!_.value && g.value < oe) {
        if (M()) {
          const a = W();
          if (a) {
            _.value = a, console.log("[AIWorkspaceHeader] Pinia store initialized successfully");
            return;
          }
        }
        g.value++, setTimeout(b, 100);
      } else
        g.value >= oe && console.warn("[AIWorkspaceHeader] Pinia initialization failed after maximum retries, using fallback mode");
    };
    ie(() => {
      _.value || b();
    });
    const y = C(!1), E = C([]), L = C([]), I = C({
      name: "",
      email: "",
      avatar_url: null,
      initials: ""
    }), N = C([]), d = C([]), S = C(!1);
    ae(d, async (a) => {
      a.length > 0 && u.value && H.value && await z();
    }, { immediate: !1 }), ae(() => window.location.pathname + window.location.search + window.location.hash, async () => {
      u.value && H.value && await z();
    }, { immediate: !1 });
    const n = C(window.location.pathname);
    ae(() => window.location.pathname, (a) => {
      n.value = a;
    }, { immediate: !0 }), ae(u, (a) => {
      !a && g.value < oe && b();
    });
    const v = () => {
      try {
        const a = window.location.pathname.match(/\/single-workspace\/(\d+)/);
        if (a)
          return a[1];
        const o = new URLSearchParams(window.location.search).get("workspace_id");
        if (o)
          return o;
        const p = window.location.hash.match(/workspace_id=(\d+)/);
        return p ? p[1] : null;
      } catch (a) {
        return console.warn("[AIWorkspaceHeader] Error parsing URL for workspace_id:", a), null;
      }
    }, $ = () => {
      try {
        return window.location.pathname.includes("/all-workspace/");
      } catch (a) {
        return console.warn("[AIWorkspaceHeader] Error checking all-workspace mode:", a), !1;
      }
    }, z = async () => {
      if (!_.value || !u.value)
        return;
      const a = $();
      if (S.value = a, a) {
        _.value.currentWorkspace = null, localStorage.removeItem("current_workspace"), console.log("[AIWorkspaceHeader] Auto-selected all-workspace mode from URL");
        return;
      }
      const e = v();
      if (e)
        try {
          d.value.length === 0 && await me();
          const o = d.value.find((p) => p.id.toString() === e);
          o ? (_.value.setCurrentWorkspace(o), console.log(`[AIWorkspaceHeader] Auto-selected workspace from URL: ${o.title} (ID: ${o.id})`), l("workspaceChange", o)) : console.warn(`[AIWorkspaceHeader] Workspace with ID ${e} not found in available workspaces`);
        } catch (o) {
          console.error("[AIWorkspaceHeader] Error auto-selecting workspace from URL:", o);
        }
    }, H = j(() => w.value.isAuthenticated), O = j(() => _.value ? _.value.currentWorkspace : null), T = C([
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
    ]), x = j(() => {
      try {
        const a = n.value;
        let e = "";
        const o = a.match(/\/single-workspace\/\d+\/([^\/]+)/);
        if (o)
          e = o[1];
        else {
          const p = a.match(/\/([^\/]+)$/);
          p && (e = p[1]);
        }
        if (e) {
          const p = T.value.find(
            (f) => f.key === e || f.url.includes(`/${e}`) || f.url === `/${e}`
          );
          if (p)
            return p.label;
        }
        return "Dashboard";
      } catch (a) {
        return console.warn("[AIWorkspaceHeader] Error determining current section:", a), "Dashboard";
      }
    }), h = (a) => {
      const e = /* @__PURE__ */ new Map();
      a.forEach((f) => {
        e.set(f.id, { ...f, children: [] });
      });
      const o = [];
      e.forEach((f) => {
        f.parent_workspace_id && e.has(f.parent_workspace_id) ? e.get(f.parent_workspace_id).children.push(f) : o.push(f);
      });
      const p = (f) => {
        f.sort((J, F) => J.title.localeCompare(F.title)), f.forEach((J) => {
          J.children && p(J.children);
        });
      };
      return p(o), o;
    }, B = (a, e = 0, o = []) => (a.forEach((p) => {
      o.push({ ...p, level: e }), p.children && p.children.length && B(p.children, e + 1, o);
    }), o), me = async () => {
      var a, e, o;
      try {
        const p = await ((a = _.value) == null ? void 0 : a.loadWorkspaces());
        if (N.value = h(p || []), d.value = B(N.value), L.value = d.value, E.value = d.value, r.currentWorkspaceId) {
          const f = d.value.find((J) => {
            var F;
            return J.id.toString() === ((F = r.currentWorkspaceId) == null ? void 0 : F.toString());
          });
          f && ((e = _.value) == null || e.setCurrentWorkspace(f));
        } else
          !O.value && d.value.length && ((o = _.value) == null || o.setCurrentWorkspace(d.value[0]));
      } catch (p) {
        console.error("loadWorkspaces (header) error", p);
      }
    }, Pe = (a) => {
      if (console.log("Navigation command:", a), a === "all-workspace") {
        window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
        return;
      } else {
        const e = parseInt(a.replace("workspace-", ""));
        window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e}/dashboard`;
        return;
      }
    }, Re = (a) => {
      const e = O.value;
      switch (a.key) {
        case "dashboard":
          e ? window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e.id}/dashboard` : window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
          break;
        case "outlines":
          if (e) {
            const o = `https://outline.aiworkspace.pro/single-workspace/${e.id}/outlines`;
            window.location.href = o;
          } else
            window.location.href = "https://outline.aiworkspace.pro";
          break;
        case "canvas":
          if (e) {
            const o = `https://canvas.aiworkspace.pro/single-workspace/${e.id}/canvas`;
            window.location.href = o;
          } else
            window.location.href = "https://canvas.aiworkspace.pro";
          break;
        case "files":
          if (e) {
            const o = `https://drive.aiworkspace.pro/single-workspace/${e.id}/files`;
            window.location.href = o;
          } else
            window.location.href = "https://drive.aiworkspace.pro";
          break;
        case "tasks":
          if (e) {
            const o = `https://tasks.aiworkspace.pro/single-workspace/${e.id}/tasks`;
            window.location.href = o;
          } else
            window.location.href = "https://tasks.aiworkspace.pro";
          break;
        case "ai-portfolios":
          if (e) {
            const o = `https://spreadsheet.aiworkspace.pro/single-workspace/${e.id}/ai-portfolios`;
            window.location.href = o;
          } else
            window.location.href = "https://spreadsheet.aiworkspace.pro";
          break;
        default:
          if (e) {
            const o = `https://app.aiworkspace.pro/single-workspace/${e.id}/${a.key}`;
            window.location.href = o;
          } else {
            const o = `https://app.aiworkspace.pro/${a.key}`;
            window.location.href = o;
          }
          break;
      }
    }, De = (a) => {
      const e = O.value;
      switch (a.key) {
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
          return e ? `https://app.aiworkspace.pro/single-workspace/${e.id}/${a.key}` : `https://app.aiworkspace.pro/${a.key}`;
      }
    }, re = (a) => {
      switch (a) {
        case "profile":
          r.onProfileClick ? r.onProfileClick() : te.info("Profile settings coming soon");
          break;
        case "workspaces":
          y.value = !0;
          break;
        case "logout":
          Oe();
          break;
      }
    }, we = (a) => {
      var e;
      (e = _.value) == null || e.setCurrentWorkspace(a), y.value = !1, l("workspaceChange", a), te.success(`Switched to ${a.title}`);
    }, Me = () => {
      be.prompt("Enter workspace name:", "Create New Workspace", {
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
        E.value.push(e), (o = _.value) == null || o.setWorkspaces(E.value), we(e), te.success(`Created workspace: ${a}`);
      }).catch(() => {
      });
    }, Oe = () => {
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
        (a = _.value) == null || a.clearData(), await q(), l("logout"), te.success("Signed out successfully");
      }).catch(() => {
      });
    }, ye = async () => {
      var a, e;
      if (w.value.user) {
        const o = w.value.user;
        I.value = {
          name: o.name || ((a = o.email) == null ? void 0 : a.split("@")[0]) || "User",
          email: o.email || "",
          avatar_url: o.avatar_url || null,
          initials: (o.name || ((e = o.email) == null ? void 0 : e.split("@")[0]) || "U").split(" ").map((p) => p[0]).join("").toUpperCase().substring(0, 2)
        }, r.showWorkspaceSelector && await me();
      }
    };
    ae(() => w.value.user, (a) => {
      var e;
      a ? ye() : (I.value = { name: "", email: "", avatar_url: null, initials: "" }, (e = _.value) == null || e.clearData());
    }), ae(() => r.currentWorkspaceId, (a) => {
      var e;
      if (a && d.value.length) {
        const o = d.value.find((p) => p.id.toString() === a.toString());
        o && ((e = _.value) == null || e.setCurrentWorkspace(o));
      }
    }), ie(async () => {
      H.value && (await ye(), await z());
    });
    const Te = () => {
      g.value = 0, b(), te.success("Manual Pinia retry initiated.");
    };
    return (a, e) => {
      const o = K("el-icon"), p = K("el-tag"), f = K("el-dropdown-item"), J = K("el-dropdown-menu"), F = K("el-dropdown"), Se = K("el-button"), Je = K("el-dialog");
      return k(), A("header", Ke, [
        !u.value && g.value < oe ? (k(), A("div", je, [...e[6] || (e[6] = [
          de('<div class="header-left" data-v-97e080e1><div class="logo-section" data-v-97e080e1><a href="/" class="logo" data-v-97e080e1><div class="text-logo" data-v-97e080e1><span class="logo-text" data-v-97e080e1>AI Workspace</span></div></a></div></div><div class="header-center" data-v-97e080e1><span class="loading-text" data-v-97e080e1>Initializing...</span></div>', 2)
        ])])) : !u.value && g.value >= oe ? (k(), A("div", Qe, [
          e[8] || (e[8] = de('<div class="header-left" data-v-97e080e1><div class="logo-section" data-v-97e080e1><a href="/" class="logo" data-v-97e080e1><div class="text-logo" data-v-97e080e1><span class="logo-text" data-v-97e080e1>AI Workspace</span></div></a></div></div>', 1)),
          i("div", { class: "header-center" }, [
            e[7] || (e[7] = i("span", { class: "fallback-text" }, "Header Ready (Fallback Mode)", -1)),
            i("button", {
              onClick: Te,
              class: "retry-button"
            }, "Retry Pinia")
          ]),
          e[9] || (e[9] = de('<div class="header-right" data-v-97e080e1><div class="user-profile" data-v-97e080e1><div class="user-info" data-v-97e080e1><span class="user-name" data-v-97e080e1>User</span></div><div class="user-avatar" data-v-97e080e1><span class="avatar-placeholder" data-v-97e080e1>U</span></div></div></div>', 1))
        ])) : H.value ? (k(), A("div", es, [
          i("div", ss, [
            i("div", as, [
              i("a", ts, [
                a.customLogo ? (k(), A("img", {
                  key: 0,
                  src: a.customLogo,
                  alt: "AIWorkspace",
                  class: "logo-image"
                }, null, 8, os)) : (k(), A("div", rs, [...e[10] || (e[10] = [
                  i("span", { class: "logo-text" }, "AI Workspace", -1)
                ])]))
              ])
            ])
          ]),
          a.showSecondaryNavigation ? (k(), A("div", ns, [
            i("nav", is, [
              a.showWorkspaceSelector ? (k(), V(F, {
                key: 0,
                onCommand: Pe,
                trigger: "hover"
              }, {
                dropdown: m(() => [
                  U(J, { class: "workspace-tree-dropdown" }, {
                    default: m(() => [
                      U(f, {
                        command: "all-workspace",
                        class: pe({ active: S.value })
                      }, {
                        default: m(() => [
                          i("a", cs, [
                            i("div", us, [
                              e[12] || (e[12] = i("span", { class: "workspace-icon" }, "🌐", -1)),
                              e[13] || (e[13] = i("span", null, "All workspace", -1)),
                              S.value ? (k(), V(p, {
                                key: 0,
                                size: "small",
                                type: "success"
                              }, {
                                default: m(() => [...e[11] || (e[11] = [
                                  Z("Current", -1)
                                ])]),
                                _: 1
                              })) : R("", !0)
                            ])
                          ])
                        ]),
                        _: 1
                      }, 8, ["class"]),
                      d.value.length > 0 ? (k(), V(f, {
                        key: 0,
                        divided: "",
                        disabled: ""
                      })) : R("", !0),
                      (k(!0), A(he, null, ke(d.value, (c) => (k(), V(f, {
                        key: c.id,
                        command: `workspace-${c.id}`
                      }, {
                        default: m(() => {
                          var se;
                          return [
                            i("a", {
                              href: `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${c.id}/dashboard`,
                              class: "nav-link"
                            }, [
                              i("div", {
                                class: "workspace-dropdown-item",
                                style: Ve({ paddingLeft: (c.level || 0) * 16 + "px" })
                              }, [
                                i("span", ps, D(c.children && c.children.length ? "📁" : "📄"), 1),
                                i("span", null, D(c.title), 1),
                                c.id === ((se = O.value) == null ? void 0 : se.id) ? (k(), V(p, {
                                  key: 0,
                                  size: "small",
                                  type: "success"
                                }, {
                                  default: m(() => [...e[14] || (e[14] = [
                                    Z("Current", -1)
                                  ])]),
                                  _: 1
                                })) : R("", !0)
                              ], 4)
                            ], 8, ds)
                          ];
                        }),
                        _: 2
                      }, 1032, ["command"]))), 128)),
                      d.value.length === 0 ? (k(), V(f, {
                        key: 1,
                        disabled: ""
                      }, {
                        default: m(() => [...e[15] || (e[15] = [
                          Z(" No workspaces ", -1)
                        ])]),
                        _: 1
                      })) : R("", !0)
                    ]),
                    _: 1
                  })
                ]),
                default: m(() => {
                  var c;
                  return [
                    i("span", ls, [
                      Z(D(S.value ? "All workspace" : ((c = O.value) == null ? void 0 : c.title) || "Select Workspace") + " ", 1),
                      U(o, { class: "nav-arrow" }, {
                        default: m(() => [
                          U(fe(Ae))
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }),
                _: 1
              })) : R("", !0),
              a.showWorkspaceSelector ? (k(), A("span", hs, "/")) : R("", !0),
              a.showSecondaryNavigation ? (k(), V(F, {
                key: 2,
                trigger: "hover"
              }, {
                dropdown: m(() => [
                  U(J, null, {
                    default: m(() => [
                      (k(!0), A(he, null, ke(T.value, (c) => (k(), V(f, {
                        key: c.label,
                        class: pe({ active: c.active })
                      }, {
                        default: m(() => [
                          i("a", {
                            href: De(c),
                            class: "nav-link",
                            onClick: ne((se) => Re(c), ["prevent"])
                          }, D(c.label), 9, fs)
                        ]),
                        _: 2
                      }, 1032, ["class"]))), 128))
                    ]),
                    _: 1
                  })
                ]),
                default: m(() => [
                  i("span", ks, [
                    Z(D(x.value) + " ", 1),
                    U(o, { class: "nav-arrow" }, {
                      default: m(() => [
                        U(fe(Ae))
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })) : R("", !0)
            ])
          ])) : R("", !0),
          i("div", vs, [
            U(F, {
              onCommand: re,
              trigger: "click",
              placement: "bottom-end"
            }, {
              dropdown: m(() => [
                U(J, null, {
                  default: m(() => [
                    U(f, null, {
                      default: m(() => [
                        i("a", {
                          href: "/profile",
                          class: "nav-link",
                          onClick: e[0] || (e[0] = ne((c) => re("profile"), ["prevent"]))
                        }, "Profile Settings")
                      ]),
                      _: 1
                    }),
                    a.showWorkspaceSelector ? (k(), V(f, { key: 0 }, {
                      default: m(() => [
                        i("a", {
                          href: "#switch-workspace",
                          class: "nav-link",
                          onClick: e[1] || (e[1] = ne((c) => re("workspaces"), ["prevent"]))
                        }, "Switch Workspace")
                      ]),
                      _: 1
                    })) : R("", !0),
                    U(f, { divided: "" }, {
                      default: m(() => [
                        i("a", {
                          href: "#signout",
                          class: "nav-link",
                          onClick: e[2] || (e[2] = ne((c) => re("logout"), ["prevent"]))
                        }, "Sign Out")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              default: m(() => [
                i("div", _s, [
                  i("div", gs, [
                    i("span", ms, D(I.value.name), 1)
                  ]),
                  i("div", ws, [
                    I.value.avatar_url ? (k(), A("img", {
                      key: 0,
                      src: I.value.avatar_url,
                      alt: I.value.name
                    }, null, 8, ys)) : (k(), A("span", Ss, D(I.value.initials), 1))
                  ])
                ])
              ]),
              _: 1
            })
          ])
        ])) : (k(), A("div", Is, [...e[16] || (e[16] = [
          i("div", { class: "unauth-inner" }, [
            i("strong", null, "Authentication required."),
            Z(" Please log in to access the workspace. ")
          ], -1)
        ])])),
        H.value && a.showWorkspaceSelector ? (k(), V(Je, {
          key: 4,
          modelValue: y.value,
          "onUpdate:modelValue": e[4] || (e[4] = (c) => y.value = c),
          title: "Switch Workspace",
          width: "500px",
          onClose: e[5] || (e[5] = (c) => y.value = !1)
        }, {
          footer: m(() => [
            U(Se, {
              onClick: e[3] || (e[3] = (c) => y.value = !1)
            }, {
              default: m(() => [...e[17] || (e[17] = [
                Z("Cancel", -1)
              ])]),
              _: 1
            }),
            U(Se, {
              type: "primary",
              onClick: Me
            }, {
              default: m(() => [...e[18] || (e[18] = [
                Z("Create New Workspace", -1)
              ])]),
              _: 1
            })
          ]),
          default: m(() => [
            i("div", bs, [
              (k(!0), A(he, null, ke(E.value, (c) => {
                var se, Ie;
                return k(), A("div", {
                  key: c.id,
                  class: pe(["workspace-item", { active: c.id === ((se = O.value) == null ? void 0 : se.id) }]),
                  onClick: (xs) => we(c)
                }, [
                  i("div", Cs, D(c.children && c.children.length ? "📁" : "📄"), 1),
                  i("div", Es, [
                    i("h3", null, D(c.title), 1),
                    i("p", null, D(c.description), 1),
                    i("span", Ws, D(c.hasAccess ? "Active" : "Inactive"), 1)
                  ]),
                  c.id === ((Ie = O.value) == null ? void 0 : Ie.id) ? (k(), A("div", Ls, [
                    U(o, null, {
                      default: m(() => [
                        U(fe(He))
                      ]),
                      _: 1
                    })
                  ])) : R("", !0)
                ], 10, As);
              }), 128))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])) : R("", !0)
      ]);
    };
  }
});
const Ns = (s, t) => {
  const r = s.__vccOpts || s;
  for (const [l, w] of t)
    r[l] = w;
  return r;
}, Js = /* @__PURE__ */ Ns(Us, [["__scopeId", "data-v-97e080e1"]]), We = "aiworkspace_auth", Le = "aiworkspace_user_id";
function Vs() {
  const s = C({
    user: null,
    isAuthenticated: !1,
    isLoading: !0
  }), t = (W) => {
    var u;
    const _ = `; ${document.cookie}`.split(`; ${W}=`);
    return _.length === 2 && ((u = _.pop()) == null ? void 0 : u.split(";").shift()) || null;
  }, r = (W, M, _ = 7) => {
    const u = /* @__PURE__ */ new Date();
    u.setTime(u.getTime() + _ * 24 * 60 * 60 * 1e3), document.cookie = `${W}=${M};expires=${u.toUTCString()};path=/;domain=.aiworkspace.pro`;
  }, l = (W) => {
    document.cookie = `${W}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.aiworkspace.pro`;
  }, w = async () => {
    try {
      const W = t(We), M = t(Le);
      W && M ? s.value = {
        user: { id: M, email: "" },
        // You can fetch full user data here
        isAuthenticated: !0,
        isLoading: !1
      } : s.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1
      };
    } catch (W) {
      console.error("Auth check failed:", W), s.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1
      };
    }
  }, q = () => {
    l(We), l(Le), s.value = {
      user: null,
      isAuthenticated: !1,
      isLoading: !1
    };
  };
  return ie(() => {
    w();
  }), {
    authState: s,
    checkAuth: w,
    logout: q,
    getCookie: t,
    setCookie: r,
    clearCookie: l
  };
}
export {
  Y as ACCESS_COOKIE,
  Js as AIWorkspaceHeader,
  xe as LS_ACCESS_KEY,
  $e as LS_REFRESH_KEY,
  G as REFRESH_COOKIE,
  Ms as buildOAuthRedirectUrl,
  Fe as clearLocalStorageTokens,
  Ce as clearSessionCookie,
  Ne as ensureCrossSubdomainCookies,
  ee as getCookie,
  Os as getPostLoginBase,
  Ts as restoreCrossSubdomainSession,
  Ee as restoreSessionWithRetry,
  Q as setSessionCookie,
  Ze as setupAuthStateListener,
  P as supabase,
  ce as syncCookiesToLocalStorage,
  Vs as useAuth,
  Xe as useEnhancedAuth,
  qe as useWorkspaceStore
};
