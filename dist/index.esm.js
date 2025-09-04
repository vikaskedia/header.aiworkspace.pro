import { defineComponent as fe, openBlock as f, createElementBlock as A, createElementVNode as i, ref as W, computed as q, onMounted as ie, watch as ee, resolveComponent as Z, createStaticVNode as de, createBlock as V, withCtx as w, createVNode as x, createCommentVNode as T, Fragment as pe, renderList as he, normalizeStyle as Te, toDisplayString as D, createTextVNode as X, unref as ke, normalizeClass as Se, withModifiers as ne } from "vue";
import { ElMessage as ae, ElMessageBox as Ie } from "element-plus";
import { createClient as Je } from "@supabase/supabase-js";
import { defineStore as Ve } from "pinia";
/*! Element Plus Icons Vue v2.3.2 */
var ze = /* @__PURE__ */ fe({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(s) {
    return (t, o) => (f(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"
      })
    ]));
  }
}), be = ze, Be = /* @__PURE__ */ fe({
  name: "Check",
  __name: "check",
  setup(s) {
    return (t, o) => (f(), A("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      i("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      })
    ]));
  }
}), Ye = Be;
const F = "aiworkspace.pro";
function ue(s) {
  return s === "localhost" || /^\d+\.\d+\.\d+\.\d+$/.test(s);
}
function Le(s) {
  return s === F || s.endsWith(`.${F}`);
}
function ce(s) {
  return document.cookie.split(";").map((c) => c.trim()).filter((c) => s.some((_) => c.startsWith(_ + "=")));
}
function K(s, t, o = 60 * 60 * 24 * 365) {
  const c = location.hostname;
  if (ue(c)) {
    document.cookie = `${s}=${encodeURIComponent(t)}; Path=/; Max-Age=${o}; SameSite=Lax`, console.log("[auth][cookie][set][local]", { host: c, name: s, valuePreview: t.slice(0, 20) + "..." }), console.log("[auth][cookie][after]", ce([s]));
    return;
  }
  document.cookie = `${s}=${encodeURIComponent(t)}; Domain=.${F}; Path=/; Max-Age=${o}; SameSite=Lax; Secure`, document.cookie = `${s}=; Path=/; Max-Age=0; SameSite=Lax`, console.log("[auth][cookie][set][apex]", { host: c, apex: F, name: s, valuePreview: t.slice(0, 20) + "..." }), console.log("[auth][cookie][after]", ce([s]));
}
function j(s) {
  const t = new RegExp("(?:^|; )" + s.replace(/[$()*+.[\]?^{}|\\/-]/g, "\\$&") + "=([^;]*)"), o = document.cookie.match(t);
  return o ? decodeURIComponent(o[1]) : null;
}
function Ae(s) {
  const t = location.hostname;
  if (ue(t)) {
    document.cookie = `${s}=; Path=/; Max-Age=0; SameSite=Lax`, console.log("[auth][cookie][clear][local]", { host: t, name: s });
    return;
  }
  document.cookie = `${s}=; Domain=.${F}; Path=/; Max-Age=0; SameSite=Lax; Secure`, document.cookie = `${s}=; Path=/; Max-Age=0; SameSite=Lax`, console.log("[auth][cookie][clear][apex]", { host: t, apex: F, name: s }), console.log("[auth][cookie][after]", ce([s]));
}
function Ue(s) {
  const t = location.hostname;
  if (ue(t)) {
    console.log("[auth][cookie][promote] skip (local host)", t);
    return;
  }
  if (!Le(t)) {
    console.log("[auth][cookie][promote] skip (not under apex)", { host: t, apex: F });
    return;
  }
  console.log("[auth][cookie][promote] start", { host: t, apex: F, names: s }), s.forEach((o) => {
    const c = j(o);
    c ? K(o, c, 60 * 60 * 24 * 365) : console.log("[auth][cookie][promote] missing", o);
  }), console.log("[auth][cookie][promote] done", ce(s));
}
function $s() {
  return `${window.location.origin}/callback`;
}
function Ps() {
  try {
    const s = new URLSearchParams(location.search), t = ["redirect", "redirect_to", "returnTo", "next"].find((c) => s.get(c));
    let o = t ? s.get(t) : "";
    if (o || (o = sessionStorage.getItem("post-login-redirect") || localStorage.getItem("post-login-redirect") || ""), o || (o = { VITE_SUPABASE_URL: "https://oqdnbpmmgntqtigstaow.supabase.co", VITE_SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xZG5icG1tZ250cXRpZ3N0YW93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0NTk2NDYsImV4cCI6MjA1MDAzNTY0Nn0.rn0nRY9xLgLt-ajiSPeG0PcdS9V-549C1yeqhcxxG40", VITE_APEX_DOMAIN: "aiworkspace.pro", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_DEFAULT_POST_LOGIN_URL || "/"), o.startsWith("http"))
      try {
        const c = new URL(o);
        return Le(c.hostname) || ue(c.hostname) ? o : "/";
      } catch {
        return "/";
      }
    return o.startsWith("/") || (o = "/" + o), o;
  } catch {
    return "/";
  }
}
const z = "sb-access-token", B = "sb-refresh-token", Ne = "sb-access-token", xe = "sb-refresh-token";
function le() {
  try {
    const s = j(z), t = j(B);
    s && localStorage.setItem(Ne, s), t && localStorage.setItem(xe, t), console.log("[auth][cookie->ls] sync", {
      hasAccess: !!s,
      hasRefresh: !!t
    });
  } catch (s) {
    console.log("[auth][cookie->ls] error", s);
  }
}
function Ge() {
  try {
    localStorage.removeItem(Ne), localStorage.removeItem(xe), console.log("[auth][cookie->ls] cleared localStorage");
  } catch (s) {
    console.log("[auth][cookie->ls] clear error", s);
  }
}
async function Rs() {
  try {
    Ue([z, B]);
    const s = j(z), t = j(B);
    if (s && t) {
      const { data: { session: o } } = await R.auth.getSession();
      if (!o) {
        const { data: c, error: _ } = await R.auth.setSession({ access_token: s, refresh_token: t });
        _ ? console.log("[auth][restore] error", _) : console.log("[auth][restore] done", !!c.session);
      }
    } else
      console.log("[auth][restore] no cookies present");
    le();
  } catch (s) {
    console.log("[auth][restore] exception", s);
  }
}
function Fe() {
  console.log("[auth][listener] Setting up auth state listener..."), R.auth.onAuthStateChange(async (s, t) => {
    switch (console.log("[auth][listener] Auth state changed:", s, !!t), s) {
      case "TOKEN_REFRESHED":
        console.log("[auth][listener] Token refreshed successfully"), t && (K(z, t.access_token, 60 * 60 * 24 * 365), K(B, t.refresh_token, 60 * 60 * 24 * 365), le());
        break;
      case "SIGNED_IN":
        console.log("[auth][listener] User signed in"), t && (K(z, t.access_token, 60 * 60 * 24 * 365), K(B, t.refresh_token, 60 * 60 * 24 * 365), le());
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
    const { data: { session: s } } = await R.auth.getSession();
    if (s && s.user)
      return console.log("[auth][restore] Active session found"), { success: !0, session: s };
    const t = j(z), o = j(B);
    if (t && o) {
      console.log("[auth][restore] Attempting to restore session from cookies...");
      const { data: c, error: _ } = await R.auth.setSession({
        access_token: t,
        refresh_token: o
      });
      if (_)
        return console.log("[auth][restore] Failed to restore session:", _.message), { success: !1, error: _ };
      if (c.session)
        return console.log("[auth][restore] Session restored successfully"), K(z, c.session.access_token, 60 * 60 * 24 * 365), K(B, c.session.refresh_token, 60 * 60 * 24 * 365), le(), { success: !0, session: c.session };
    }
    return console.log("[auth][restore] No valid session or cookies found"), { success: !1, error: "No valid session or cookies" };
  } catch (s) {
    return console.log("[auth][restore] Exception during session restoration:", s), { success: !1, error: s };
  }
}
const ve = "https://oqdnbpmmgntqtigstaow.supabase.co", _e = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xZG5icG1tZ250cXRpZ3N0YW93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0NTk2NDYsImV4cCI6MjA1MDAzNTY0Nn0.rn0nRY9xLgLt-ajiSPeG0PcdS9V-549C1yeqhcxxG40", R = Je(
  ve,
  _e,
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
typeof window < "u" && (Ue([z, B]), Fe());
console.log("Supabase Configuration:", {
  url: ve,
  hasKey: !!_e,
  autoRefreshToken: !0,
  persistSession: !0
});
console.log("URL:", ve.replace(/https:\/\/(.+)\.supabase\.co/, "https://*****.supabase.co"));
console.log("Key configured:", !_e.includes("your-anon-key"));
console.log("Environment mode:", "production");
function He() {
  const s = W({
    user: null,
    isAuthenticated: !1,
    isLoading: !0
  }), t = W(null), o = q(() => s.value.isAuthenticated), c = q(() => s.value.user), _ = q(() => s.value.isLoading), H = async () => {
    var v, b, m, E, U, I, $, p, y, n, k, C, P, se, oe;
    try {
      const { data: { session: J } } = await R.auth.getSession();
      if (J && J.user) {
        const h = J.user, Y = {
          id: h.id,
          name: ((v = h.user_metadata) == null ? void 0 : v.name) || ((b = h.user_metadata) == null ? void 0 : b.user_name) || ((m = h.user_metadata) == null ? void 0 : m.full_name) || ((E = h.email) == null ? void 0 : E.split("@")[0]) || "User",
          email: h.email,
          avatar_url: ((U = h.user_metadata) == null ? void 0 : U.avatar_url) || null,
          user_metadata: h.user_metadata
        };
        return s.value = {
          user: Y,
          isAuthenticated: !0,
          isLoading: !1
        }, t.value = {
          user: Y,
          access_token: J.access_token,
          refresh_token: J.refresh_token
        }, { success: !0, session: t.value };
      }
      console.log("[auth][enhanced] No active session, attempting to restore from cookies...");
      const N = await Ce();
      if (N.success && N.session) {
        console.log("[auth][enhanced] Session restored successfully");
        const h = N.session.user, Y = {
          id: h.id,
          name: ((I = h.user_metadata) == null ? void 0 : I.name) || (($ = h.user_metadata) == null ? void 0 : $.user_name) || ((p = h.user_metadata) == null ? void 0 : p.full_name) || ((y = h.email) == null ? void 0 : y.split("@")[0]) || "User",
          email: h.email,
          avatar_url: ((n = h.user_metadata) == null ? void 0 : n.avatar_url) || null,
          user_metadata: h.user_metadata
        };
        return s.value = {
          user: Y,
          isAuthenticated: !0,
          isLoading: !1
        }, t.value = N.session, { success: !0, session: t.value };
      } else
        console.log("[auth][enhanced] Failed to restore session:", N.error);
    } catch (J) {
      console.error("Error getting Supabase session:", J);
      try {
        const N = await Ce();
        if (N.success && N.session) {
          console.log("[auth][enhanced] Session restored after error");
          const h = N.session.user, Y = {
            id: h.id,
            name: ((k = h.user_metadata) == null ? void 0 : k.name) || ((C = h.user_metadata) == null ? void 0 : C.user_name) || ((P = h.user_metadata) == null ? void 0 : P.full_name) || ((se = h.email) == null ? void 0 : se.split("@")[0]) || "User",
            email: h.email,
            avatar_url: ((oe = h.user_metadata) == null ? void 0 : oe.avatar_url) || null,
            user_metadata: h.user_metadata
          };
          return s.value = {
            user: Y,
            isAuthenticated: !0,
            isLoading: !1
          }, t.value = N.session, { success: !0, session: t.value };
        }
      } catch (N) {
        console.error("Error restoring session:", N);
      }
    }
    return s.value = {
      user: null,
      isAuthenticated: !1,
      isLoading: !1
    }, t.value = null, { success: !1, error: "No valid session found" };
  }, L = async () => {
    try {
      await R.auth.signOut(), Ae(z), Ae(B), Ge(), s.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1
      }, t.value = null, console.log("[auth][enhanced] User logged out successfully");
    } catch (v) {
      console.error("Error during logout:", v), s.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1
      }, t.value = null;
    }
  }, O = async (v, b) => {
    var m, E, U, I, $;
    try {
      s.value.isLoading = !0;
      const { data: p, error: y } = await R.auth.signInWithPassword({
        email: v,
        password: b
      });
      if (y)
        throw y;
      if (p.session) {
        const n = p.session.user, k = {
          id: n.id,
          name: ((m = n.user_metadata) == null ? void 0 : m.name) || ((E = n.user_metadata) == null ? void 0 : E.user_name) || ((U = n.user_metadata) == null ? void 0 : U.full_name) || ((I = n.email) == null ? void 0 : I.split("@")[0]) || "User",
          email: n.email,
          avatar_url: (($ = n.user_metadata) == null ? void 0 : $.avatar_url) || null,
          user_metadata: n.user_metadata
        };
        return s.value = {
          user: k,
          isAuthenticated: !0,
          isLoading: !1
        }, t.value = {
          user: k,
          access_token: p.session.access_token,
          refresh_token: p.session.refresh_token
        }, { success: !0, session: t.value };
      }
      return { success: !1, error: "No session returned" };
    } catch (p) {
      return console.error("Sign in error:", p), s.value.isLoading = !1, { success: !1, error: p };
    }
  }, g = async (v, b, m) => {
    var E, U, I, $, p;
    try {
      s.value.isLoading = !0;
      const { data: y, error: n } = await R.auth.signUp({
        email: v,
        password: b,
        options: {
          data: m
        }
      });
      if (n)
        throw n;
      if (y.session) {
        const k = y.session.user, C = {
          id: k.id,
          name: ((E = k.user_metadata) == null ? void 0 : E.name) || ((U = k.user_metadata) == null ? void 0 : U.user_name) || ((I = k.user_metadata) == null ? void 0 : I.full_name) || (($ = k.email) == null ? void 0 : $.split("@")[0]) || "User",
          email: k.email,
          avatar_url: ((p = k.user_metadata) == null ? void 0 : p.avatar_url) || null,
          user_metadata: k.user_metadata
        };
        return s.value = {
          user: C,
          isAuthenticated: !0,
          isLoading: !1
        }, t.value = {
          user: C,
          access_token: y.session.access_token,
          refresh_token: y.session.refresh_token
        }, { success: !0, session: t.value };
      }
      return { success: !1, error: "No session returned" };
    } catch (y) {
      return console.error("Sign up error:", y), s.value.isLoading = !1, { success: !1, error: y };
    }
  }, d = async () => {
    await H();
  };
  return ie(() => {
    d();
  }), {
    // State
    authState: s,
    currentSession: t,
    // Computed
    isAuthenticated: o,
    currentUser: c,
    isLoading: _,
    // Methods
    loadUserInfo: H,
    logout: L,
    signIn: O,
    signUp: g,
    checkAuth: d
  };
}
const Ze = Ve("workspace", () => {
  const s = W(null), t = W([]), o = W(null), c = (d) => {
    s.value = d, localStorage.setItem("current_workspace", JSON.stringify(d));
  }, _ = (d) => {
    t.value = d, localStorage.setItem("available_workspaces", JSON.stringify(d));
  };
  return {
    currentWorkspace: s,
    workspaces: t,
    user: o,
    setCurrentWorkspace: c,
    setWorkspaces: _,
    setUser: (d) => {
      o.value = d, localStorage.setItem("user_info", JSON.stringify(d));
    },
    loadPersistedData: () => {
      const d = localStorage.getItem("current_workspace");
      if (d)
        try {
          s.value = JSON.parse(d);
        } catch (m) {
          console.error("Error loading persisted workspace:", m);
        }
      const v = localStorage.getItem("available_workspaces");
      if (v)
        try {
          t.value = JSON.parse(v);
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
      s.value = null, t.value = [], o.value = null, localStorage.removeItem("current_workspace"), localStorage.removeItem("available_workspaces"), localStorage.removeItem("user_info");
    },
    loadWorkspaces: async (d = !1) => {
      try {
        const { data: { user: v } } = await R.auth.getUser();
        if (!v)
          return [];
        let b = R.from("workspaces").select(`
          id, title, description, parent_workspace_id, created_by, archived, created_at,
          workspace_access!inner ( access_type, shared_with_user_id ),
          workspace_activities!left ( updated_at )
        `).eq("workspace_access.shared_with_user_id", v.id);
        d || (b = b.eq("archived", !1));
        const { data: m, error: E } = await b;
        if (E)
          throw E;
        const U = /* @__PURE__ */ new Map();
        (m || []).forEach((n) => {
          (n.workspace_access || []).forEach((k) => {
            k.shared_with_user_id === v.id && U.set(n.id, k);
          });
        });
        const I = [...new Set(
          (m || []).filter((n) => n.parent_workspace_id).map((n) => n.parent_workspace_id).filter((n) => !U.has(n))
        )];
        let $ = [];
        if (I.length) {
          let n = R.from("workspaces").select("id, title, description, parent_workspace_id, created_by, archived, created_at").in("id", I);
          d || (n = n.eq("archived", !1));
          const { data: k, error: C } = await n;
          if (C)
            throw C;
          $ = k || [];
        }
        const y = [...m || [], ...$].map((n) => {
          var k, C, P;
          return {
            id: n.id,
            title: n.title,
            description: n.description || "No description",
            parent_workspace_id: n.parent_workspace_id,
            created_by: n.created_by,
            archived: n.archived,
            created_at: n.created_at,
            latest_activity: ((C = (k = n.workspace_activities) == null ? void 0 : k[0]) == null ? void 0 : C.updated_at) || n.created_at,
            hasAccess: U.has(n.id),
            accessType: ((P = U.get(n.id)) == null ? void 0 : P.access_type) || null
          };
        });
        return y.sort((n, k) => new Date(k.latest_activity) - new Date(n.latest_activity)), _(y), y;
      } catch (v) {
        return console.error("loadWorkspaces error", v), [];
      }
    }
  };
}), Xe = { class: "aiworkspace-header" }, qe = {
  key: 0,
  class: "header-content header-loading"
}, Ke = {
  key: 1,
  class: "header-content header-fallback"
}, je = {
  key: 2,
  class: "header-content"
}, Qe = { class: "header-left" }, es = { class: "logo-section" }, ss = {
  href: "/",
  class: "logo"
}, as = ["src"], ts = {
  key: 1,
  class: "text-logo"
}, os = {
  key: 0,
  class: "header-center"
}, rs = { class: "main-navigation" }, ns = { class: "nav-item" }, is = ["href"], cs = { class: "workspace-icon" }, ls = {
  key: 1,
  class: "nav-divider"
}, us = { class: "nav-item" }, ds = ["href", "onClick"], ps = { class: "header-right" }, hs = { class: "user-profile" }, ks = { class: "user-info" }, fs = { class: "user-name" }, vs = { class: "user-avatar" }, _s = ["src", "alt"], gs = {
  key: 1,
  class: "avatar-placeholder"
}, ms = {
  key: 3,
  class: "unauth-message"
}, ws = { class: "workspace-list" }, ys = ["onClick"], Ss = { class: "workspace-icon" }, Is = { class: "workspace-details" }, bs = { class: "workspace-members" }, As = {
  key: 0,
  class: "current-indicator"
}, te = 50, Cs = /* @__PURE__ */ fe({
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
    const o = s, c = t, { authState: _, logout: H } = He(), L = () => {
      try {
        return Ze();
      } catch {
        return console.warn("[AIWorkspaceHeader] Pinia not initialized yet, using fallback state"), null;
      }
    }, O = () => {
      try {
        return typeof window < "u" ? !!window.__PINIA__ || !!window.Pinia : !1;
      } catch {
        return !1;
      }
    }, g = W(L()), d = q(() => !!g.value), v = W(0), b = () => {
      if (!g.value && v.value < te) {
        if (O()) {
          const a = L();
          if (a) {
            g.value = a, console.log("[AIWorkspaceHeader] Pinia store initialized successfully");
            return;
          }
        }
        v.value++, setTimeout(b, 100);
      } else
        v.value >= te && console.warn("[AIWorkspaceHeader] Pinia initialization failed after maximum retries, using fallback mode");
    };
    ie(() => {
      g.value || b();
    });
    const m = W(!1), E = W([]), U = W([]), I = W({
      name: "",
      email: "",
      avatar_url: null,
      initials: ""
    }), $ = W([]), p = W([]);
    ee(p, async (a) => {
      a.length > 0 && d.value && C.value && await k();
    }, { immediate: !1 }), ee(() => window.location.pathname + window.location.search + window.location.hash, async () => {
      d.value && C.value && await k();
    }, { immediate: !1 });
    const y = W(window.location.pathname);
    ee(() => window.location.pathname, (a) => {
      y.value = a;
    }, { immediate: !0 }), ee(d, (a) => {
      !a && v.value < te && b();
    });
    const n = () => {
      try {
        const a = window.location.pathname.match(/\/single-workspace\/(\d+)/);
        if (a)
          return a[1];
        const r = new URLSearchParams(window.location.search).get("workspace_id");
        if (r)
          return r;
        const u = window.location.hash.match(/workspace_id=(\d+)/);
        return u ? u[1] : null;
      } catch (a) {
        return console.warn("[AIWorkspaceHeader] Error parsing URL for workspace_id:", a), null;
      }
    }, k = async () => {
      if (!g.value || !d.value)
        return;
      const a = n();
      if (a)
        try {
          p.value.length === 0 && await h();
          const e = p.value.find((r) => r.id.toString() === a);
          e ? (g.value.setCurrentWorkspace(e), console.log(`[AIWorkspaceHeader] Auto-selected workspace from URL: ${e.title} (ID: ${e.id})`), c("workspaceChange", e)) : console.warn(`[AIWorkspaceHeader] Workspace with ID ${a} not found in available workspaces`);
        } catch (e) {
          console.error("[AIWorkspaceHeader] Error auto-selecting workspace from URL:", e);
        }
    }, C = q(() => _.value.isAuthenticated), P = q(() => g.value ? g.value.currentWorkspace : null), se = W([
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
    ]), oe = q(() => {
      try {
        const a = y.value;
        let e = "";
        const r = a.match(/\/single-workspace\/\d+\/([^\/]+)/);
        if (r)
          e = r[1];
        else {
          const u = a.match(/\/([^\/]+)$/);
          u && (e = u[1]);
        }
        if (e) {
          const u = se.value.find(
            (S) => S.key === e || S.url.includes(`/${e}`) || S.url === `/${e}`
          );
          if (u)
            return u.label;
        }
        return "Dashboard";
      } catch (a) {
        return console.warn("[AIWorkspaceHeader] Error determining current section:", a), "Dashboard";
      }
    }), J = (a) => {
      const e = /* @__PURE__ */ new Map();
      a.forEach((S) => {
        e.set(S.id, { ...S, children: [] });
      });
      const r = [];
      e.forEach((S) => {
        S.parent_workspace_id && e.has(S.parent_workspace_id) ? e.get(S.parent_workspace_id).children.push(S) : r.push(S);
      });
      const u = (S) => {
        S.sort((M, G) => M.title.localeCompare(G.title)), S.forEach((M) => {
          M.children && u(M.children);
        });
      };
      return u(r), r;
    }, N = (a, e = 0, r = []) => (a.forEach((u) => {
      r.push({ ...u, level: e }), u.children && u.children.length && N(u.children, e + 1, r);
    }), r), h = async () => {
      var a, e, r;
      try {
        const u = await ((a = g.value) == null ? void 0 : a.loadWorkspaces());
        if ($.value = J(u || []), p.value = N($.value), U.value = p.value, E.value = p.value, o.currentWorkspaceId) {
          const S = p.value.find((M) => {
            var G;
            return M.id.toString() === ((G = o.currentWorkspaceId) == null ? void 0 : G.toString());
          });
          S && ((e = g.value) == null || e.setCurrentWorkspace(S));
        } else
          !P.value && p.value.length && ((r = g.value) == null || r.setCurrentWorkspace(p.value[0]));
      } catch (u) {
        console.error("loadWorkspaces (header) error", u);
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
    }, $e = (a) => {
      const e = P.value;
      switch (a.key) {
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
            const r = `https://app.aiworkspace.pro/single-workspace/${e.id}/${a.key}`;
            window.location.href = r;
          } else {
            const r = `https://app.aiworkspace.pro/${a.key}`;
            window.location.href = r;
          }
          break;
      }
    }, Pe = (a) => {
      const e = P.value;
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
          o.onProfileClick ? o.onProfileClick() : ae.info("Profile settings coming soon");
          break;
        case "workspaces":
          m.value = !0;
          break;
        case "logout":
          De();
          break;
      }
    }, ge = (a) => {
      var e;
      (e = g.value) == null || e.setCurrentWorkspace(a), m.value = !1, c("workspaceChange", a), ae.success(`Switched to ${a.title}`);
    }, Re = () => {
      Ie.prompt("Enter workspace name:", "Create New Workspace", {
        confirmButtonText: "Create",
        cancelButtonText: "Cancel",
        inputPattern: /\S/,
        inputErrorMessage: "Workspace name cannot be empty"
      }).then(({ value: a }) => {
        var r;
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
        E.value.push(e), (r = g.value) == null || r.setWorkspaces(E.value), ge(e), ae.success(`Created workspace: ${a}`);
      }).catch(() => {
      });
    }, De = () => {
      Ie.confirm(
        "Are you sure you want to sign out?",
        "Sign Out",
        {
          confirmButtonText: "Sign Out",
          cancelButtonText: "Cancel",
          type: "warning"
        }
      ).then(async () => {
        var a;
        (a = g.value) == null || a.clearData(), await H(), c("logout"), ae.success("Signed out successfully");
      }).catch(() => {
      });
    }, me = async () => {
      var a, e;
      if (_.value.user) {
        const r = _.value.user;
        I.value = {
          name: r.name || ((a = r.email) == null ? void 0 : a.split("@")[0]) || "User",
          email: r.email || "",
          avatar_url: r.avatar_url || null,
          initials: (r.name || ((e = r.email) == null ? void 0 : e.split("@")[0]) || "U").split(" ").map((u) => u[0]).join("").toUpperCase().substring(0, 2)
        }, o.showWorkspaceSelector && await h();
      }
    };
    ee(() => _.value.user, (a) => {
      var e;
      a ? me() : (I.value = { name: "", email: "", avatar_url: null, initials: "" }, (e = g.value) == null || e.clearData());
    }), ee(() => o.currentWorkspaceId, (a) => {
      var e;
      if (a && p.value.length) {
        const r = p.value.find((u) => u.id.toString() === a.toString());
        r && ((e = g.value) == null || e.setCurrentWorkspace(r));
      }
    }), ie(async () => {
      C.value && (await me(), await k());
    });
    const Oe = () => {
      v.value = 0, b(), ae.success("Manual Pinia retry initiated.");
    };
    return (a, e) => {
      const r = Z("el-icon"), u = Z("el-dropdown-item"), S = Z("el-tag"), M = Z("el-dropdown-menu"), G = Z("el-dropdown"), we = Z("el-button"), Me = Z("el-dialog");
      return f(), A("header", Xe, [
        !d.value && v.value < te ? (f(), A("div", qe, [...e[6] || (e[6] = [
          de('<div class="header-left" data-v-c06fc7d7><div class="logo-section" data-v-c06fc7d7><a href="/" class="logo" data-v-c06fc7d7><div class="text-logo" data-v-c06fc7d7><span class="logo-text" data-v-c06fc7d7>AI Workspace</span></div></a></div></div><div class="header-center" data-v-c06fc7d7><span class="loading-text" data-v-c06fc7d7>Initializing...</span></div>', 2)
        ])])) : !d.value && v.value >= te ? (f(), A("div", Ke, [
          e[8] || (e[8] = de('<div class="header-left" data-v-c06fc7d7><div class="logo-section" data-v-c06fc7d7><a href="/" class="logo" data-v-c06fc7d7><div class="text-logo" data-v-c06fc7d7><span class="logo-text" data-v-c06fc7d7>AI Workspace</span></div></a></div></div>', 1)),
          i("div", { class: "header-center" }, [
            e[7] || (e[7] = i("span", { class: "fallback-text" }, "Header Ready (Fallback Mode)", -1)),
            i("button", {
              onClick: Oe,
              class: "retry-button"
            }, "Retry Pinia")
          ]),
          e[9] || (e[9] = de('<div class="header-right" data-v-c06fc7d7><div class="user-profile" data-v-c06fc7d7><div class="user-info" data-v-c06fc7d7><span class="user-name" data-v-c06fc7d7>User</span></div><div class="user-avatar" data-v-c06fc7d7><span class="avatar-placeholder" data-v-c06fc7d7>U</span></div></div></div>', 1))
        ])) : C.value ? (f(), A("div", je, [
          i("div", Qe, [
            i("div", es, [
              i("a", ss, [
                a.customLogo ? (f(), A("img", {
                  key: 0,
                  src: a.customLogo,
                  alt: "AIWorkspace",
                  class: "logo-image"
                }, null, 8, as)) : (f(), A("div", ts, [...e[10] || (e[10] = [
                  i("span", { class: "logo-text" }, "AI Workspace", -1)
                ])]))
              ])
            ])
          ]),
          a.showSecondaryNavigation ? (f(), A("div", os, [
            i("nav", rs, [
              a.showWorkspaceSelector ? (f(), V(G, {
                key: 0,
                onCommand: Y,
                trigger: "hover"
              }, {
                dropdown: w(() => [
                  x(M, { class: "workspace-tree-dropdown" }, {
                    default: w(() => [
                      x(u, { command: "all-workspace" }, {
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
                      p.value.length > 0 ? (f(), V(u, {
                        key: 0,
                        divided: "",
                        disabled: ""
                      })) : T("", !0),
                      (f(!0), A(pe, null, he(p.value, (l) => (f(), V(u, {
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
                                i("span", cs, D(l.children && l.children.length ? "📁" : "📄"), 1),
                                i("span", null, D(l.title), 1),
                                l.id === ((Q = P.value) == null ? void 0 : Q.id) ? (f(), V(S, {
                                  key: 0,
                                  size: "small",
                                  type: "success"
                                }, {
                                  default: w(() => [...e[12] || (e[12] = [
                                    X("Current", -1)
                                  ])]),
                                  _: 1
                                })) : T("", !0)
                              ], 4)
                            ], 8, is)
                          ];
                        }),
                        _: 2
                      }, 1032, ["command"]))), 128)),
                      p.value.length === 0 ? (f(), V(u, {
                        key: 1,
                        disabled: ""
                      }, {
                        default: w(() => [...e[13] || (e[13] = [
                          X(" No workspaces ", -1)
                        ])]),
                        _: 1
                      })) : T("", !0)
                    ]),
                    _: 1
                  })
                ]),
                default: w(() => {
                  var l;
                  return [
                    i("span", ns, [
                      X(D(((l = P.value) == null ? void 0 : l.title) || "Select Workspace") + " ", 1),
                      x(r, { class: "nav-arrow" }, {
                        default: w(() => [
                          x(ke(be))
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }),
                _: 1
              })) : T("", !0),
              a.showWorkspaceSelector ? (f(), A("span", ls, "/")) : T("", !0),
              a.showSecondaryNavigation ? (f(), V(G, {
                key: 2,
                trigger: "hover"
              }, {
                dropdown: w(() => [
                  x(M, null, {
                    default: w(() => [
                      (f(!0), A(pe, null, he(se.value, (l) => (f(), V(u, {
                        key: l.label,
                        class: Se({ active: l.active })
                      }, {
                        default: w(() => [
                          i("a", {
                            href: Pe(l),
                            class: "nav-link",
                            onClick: ne((Q) => $e(l), ["prevent"])
                          }, D(l.label), 9, ds)
                        ]),
                        _: 2
                      }, 1032, ["class"]))), 128))
                    ]),
                    _: 1
                  })
                ]),
                default: w(() => [
                  i("span", us, [
                    X(D(oe.value) + " ", 1),
                    x(r, { class: "nav-arrow" }, {
                      default: w(() => [
                        x(ke(be))
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })) : T("", !0)
            ])
          ])) : T("", !0),
          i("div", ps, [
            x(G, {
              onCommand: re,
              trigger: "click",
              placement: "bottom-end"
            }, {
              dropdown: w(() => [
                x(M, null, {
                  default: w(() => [
                    x(u, null, {
                      default: w(() => [
                        i("a", {
                          href: "/profile",
                          class: "nav-link",
                          onClick: e[0] || (e[0] = ne((l) => re("profile"), ["prevent"]))
                        }, "Profile Settings")
                      ]),
                      _: 1
                    }),
                    a.showWorkspaceSelector ? (f(), V(u, { key: 0 }, {
                      default: w(() => [
                        i("a", {
                          href: "#switch-workspace",
                          class: "nav-link",
                          onClick: e[1] || (e[1] = ne((l) => re("workspaces"), ["prevent"]))
                        }, "Switch Workspace")
                      ]),
                      _: 1
                    })) : T("", !0),
                    x(u, { divided: "" }, {
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
                i("div", hs, [
                  i("div", ks, [
                    i("span", fs, D(I.value.name), 1)
                  ]),
                  i("div", vs, [
                    I.value.avatar_url ? (f(), A("img", {
                      key: 0,
                      src: I.value.avatar_url,
                      alt: I.value.name
                    }, null, 8, _s)) : (f(), A("span", gs, D(I.value.initials), 1))
                  ])
                ])
              ]),
              _: 1
            })
          ])
        ])) : (f(), A("div", ms, [...e[14] || (e[14] = [
          i("div", { class: "unauth-inner" }, [
            i("strong", null, "Authentication required."),
            X(" Please log in to access the workspace. ")
          ], -1)
        ])])),
        C.value && a.showWorkspaceSelector ? (f(), V(Me, {
          key: 4,
          modelValue: m.value,
          "onUpdate:modelValue": e[4] || (e[4] = (l) => m.value = l),
          title: "Switch Workspace",
          width: "500px",
          onClose: e[5] || (e[5] = (l) => m.value = !1)
        }, {
          footer: w(() => [
            x(we, {
              onClick: e[3] || (e[3] = (l) => m.value = !1)
            }, {
              default: w(() => [...e[15] || (e[15] = [
                X("Cancel", -1)
              ])]),
              _: 1
            }),
            x(we, {
              type: "primary",
              onClick: Re
            }, {
              default: w(() => [...e[16] || (e[16] = [
                X("Create New Workspace", -1)
              ])]),
              _: 1
            })
          ]),
          default: w(() => [
            i("div", ws, [
              (f(!0), A(pe, null, he(E.value, (l) => {
                var Q, ye;
                return f(), A("div", {
                  key: l.id,
                  class: Se(["workspace-item", { active: l.id === ((Q = P.value) == null ? void 0 : Q.id) }]),
                  onClick: (Ws) => ge(l)
                }, [
                  i("div", Ss, D(l.children && l.children.length ? "📁" : "📄"), 1),
                  i("div", Is, [
                    i("h3", null, D(l.title), 1),
                    i("p", null, D(l.description), 1),
                    i("span", bs, D(l.hasAccess ? "Active" : "Inactive"), 1)
                  ]),
                  l.id === ((ye = P.value) == null ? void 0 : ye.id) ? (f(), A("div", As, [
                    x(r, null, {
                      default: w(() => [
                        x(ke(Ye))
                      ]),
                      _: 1
                    })
                  ])) : T("", !0)
                ], 10, ys);
              }), 128))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])) : T("", !0)
      ]);
    };
  }
});
const Es = (s, t) => {
  const o = s.__vccOpts || s;
  for (const [c, _] of t)
    o[c] = _;
  return o;
}, Ds = /* @__PURE__ */ Es(Cs, [["__scopeId", "data-v-c06fc7d7"]]), Ee = "aiworkspace_auth", We = "aiworkspace_user_id";
function Os() {
  const s = W({
    user: null,
    isAuthenticated: !1,
    isLoading: !0
  }), t = (L) => {
    var d;
    const g = `; ${document.cookie}`.split(`; ${L}=`);
    return g.length === 2 && ((d = g.pop()) == null ? void 0 : d.split(";").shift()) || null;
  }, o = (L, O, g = 7) => {
    const d = /* @__PURE__ */ new Date();
    d.setTime(d.getTime() + g * 24 * 60 * 60 * 1e3), document.cookie = `${L}=${O};expires=${d.toUTCString()};path=/;domain=.aiworkspace.pro`;
  }, c = (L) => {
    document.cookie = `${L}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.aiworkspace.pro`;
  }, _ = async () => {
    try {
      const L = t(Ee), O = t(We);
      L && O ? s.value = {
        user: { id: O, email: "" },
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
  }, H = () => {
    c(Ee), c(We), s.value = {
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
    logout: H,
    getCookie: t,
    setCookie: o,
    clearCookie: c
  };
}
export {
  z as ACCESS_COOKIE,
  Ds as AIWorkspaceHeader,
  Ne as LS_ACCESS_KEY,
  xe as LS_REFRESH_KEY,
  B as REFRESH_COOKIE,
  $s as buildOAuthRedirectUrl,
  Ge as clearLocalStorageTokens,
  Ae as clearSessionCookie,
  Ue as ensureCrossSubdomainCookies,
  j as getCookie,
  Ps as getPostLoginBase,
  Rs as restoreCrossSubdomainSession,
  Ce as restoreSessionWithRetry,
  K as setSessionCookie,
  Fe as setupAuthStateListener,
  R as supabase,
  le as syncCookiesToLocalStorage,
  Os as useAuth,
  He as useEnhancedAuth,
  Ze as useWorkspaceStore
};
