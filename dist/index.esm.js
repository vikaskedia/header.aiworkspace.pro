import { defineComponent as te, openBlock as _, createElementBlock as O, createElementVNode as l, ref as $, computed as z, onMounted as ue, watch as re, reactive as Ke, resolveComponent as q, createBlock as Z, withCtx as g, toDisplayString as D, createVNode as S, unref as ee, withModifiers as ne, createCommentVNode as K, createTextVNode as Y, createStaticVNode as we, normalizeClass as me, Fragment as ve, renderList as _e, normalizeStyle as Ye } from "vue";
import { ElForm as Xe, ElMessage as B, ElMessageBox as We } from "element-plus";
import { createClient as Ze } from "@supabase/supabase-js";
import { defineStore as qe } from "pinia";
/*! Element Plus Icons Vue v2.3.2 */
var je = /* @__PURE__ */ te({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(s) {
    return (a, o) => (_(), O("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      l("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"
      })
    ]));
  }
}), Oe = je, Qe = /* @__PURE__ */ te({
  name: "Check",
  __name: "check",
  setup(s) {
    return (a, o) => (_(), O("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      l("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      })
    ]));
  }
}), es = Qe, ss = /* @__PURE__ */ te({
  name: "Lock",
  __name: "lock",
  setup(s) {
    return (a, o) => (_(), O("svg", {
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
}), Re = ss, as = /* @__PURE__ */ te({
  name: "Message",
  __name: "message",
  setup(s) {
    return (a, o) => (_(), O("svg", {
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
}), os = as, ts = /* @__PURE__ */ te({
  name: "User",
  __name: "user",
  setup(s) {
    return (a, o) => (_(), O("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      l("path", {
        fill: "currentColor",
        d: "M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"
      })
    ]));
  }
}), rs = ts;
const se = "aiworkspace.pro";
function ge(s) {
  return s === "localhost" || /^\d+\.\d+\.\d+\.\d+$/.test(s);
}
function xe(s) {
  return s === se || s.endsWith(`.${se}`);
}
function pe(s) {
  return document.cookie.split(";").map((c) => c.trim()).filter((c) => s.some((y) => c.startsWith(y + "=")));
}
function J(s, a, o = 60 * 60 * 24 * 365) {
  const c = location.hostname;
  if (ge(c)) {
    document.cookie = `${s}=${encodeURIComponent(a)}; Path=/; Max-Age=${o}; SameSite=Lax`, console.log("[auth][cookie][set][local]", { host: c, name: s, valuePreview: a.slice(0, 20) + "..." }), console.log("[auth][cookie][after]", pe([s]));
    return;
  }
  document.cookie = `${s}=${encodeURIComponent(a)}; Domain=.${se}; Path=/; Max-Age=${o}; SameSite=Lax; Secure`, document.cookie = `${s}=; Path=/; Max-Age=0; SameSite=Lax`, console.log("[auth][cookie][set][apex]", { host: c, apex: se, name: s, valuePreview: a.slice(0, 20) + "..." }), console.log("[auth][cookie][after]", pe([s]));
}
function ae(s) {
  const a = new RegExp("(?:^|; )" + s.replace(/[$()*+.[\]?^{}|\\/-]/g, "\\$&") + "=([^;]*)"), o = document.cookie.match(a);
  return o ? decodeURIComponent(o[1]) : null;
}
function le(s) {
  const a = location.hostname;
  if (ge(a)) {
    document.cookie = `${s}=; Path=/; Max-Age=0; SameSite=Lax`, console.log("[auth][cookie][clear][local]", { host: a, name: s });
    return;
  }
  document.cookie = `${s}=; Domain=.${se}; Path=/; Max-Age=0; SameSite=Lax; Secure`, document.cookie = `${s}=; Path=/; Max-Age=0; SameSite=Lax`, console.log("[auth][cookie][clear][apex]", { host: a, apex: se, name: s }), console.log("[auth][cookie][after]", pe([s]));
}
function ye(s) {
  const a = location.hostname;
  if (ge(a)) {
    console.log("[auth][cookie][promote] skip (local host)", a);
    return;
  }
  if (!xe(a)) {
    console.log("[auth][cookie][promote] skip (not under apex)", { host: a, apex: se });
    return;
  }
  console.log("[auth][cookie][promote] start", { host: a, apex: se, names: s }), s.forEach((o) => {
    const c = ae(o);
    c ? J(o, c, 60 * 60 * 24 * 365) : console.log("[auth][cookie][promote] missing", o);
  }), console.log("[auth][cookie][promote] done", pe(s));
}
function ns() {
  return `${window.location.origin}/auth/callback`;
}
function Ne() {
  try {
    const s = new URLSearchParams(location.search), a = ["redirect", "redirect_to", "returnTo", "next"].find((c) => s.get(c));
    let o = a ? s.get(a) : "";
    if (console.log("[getPostLoginBase] URL params:", Object.fromEntries(s)), console.log("[getPostLoginBase] Found param key:", a), console.log("[getPostLoginBase] Candidate from params:", o), o || (o = sessionStorage.getItem("post-login-redirect") || localStorage.getItem("post-login-redirect") || "", console.log("[getPostLoginBase] Candidate from storage:", o)), o || (o = { VITE_SUPABASE_URL: "https://oqdnbpmmgntqtigstaow.supabase.co", VITE_SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xZG5icG1tZ250cXRpZ3N0YW93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0NTk2NDYsImV4cCI6MjA1MDAzNTY0Nn0.rn0nRY9xLgLt-ajiSPeG0PcdS9V-549C1yeqhcxxG40", VITE_APEX_DOMAIN: "aiworkspace.pro", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_DEFAULT_POST_LOGIN_URL || "/", console.log("[getPostLoginBase] Using default:", o)), o.startsWith("http"))
      try {
        const c = new URL(o);
        return xe(c.hostname) || ge(c.hostname) ? (console.log("[getPostLoginBase] Returning absolute URL:", o), o) : (console.log("[getPostLoginBase] Invalid hostname, returning /"), "/");
      } catch {
        return console.log("[getPostLoginBase] Invalid URL, returning /"), "/";
      }
    return o.startsWith("/") || (o = "/" + o), console.log("[getPostLoginBase] Final candidate:", o), o;
  } catch (s) {
    return console.log("[getPostLoginBase] Error:", s), "/";
  }
}
const F = "sb-access-token", H = "sb-refresh-token", Se = "sb-access-token", be = "sb-refresh-token";
function oe() {
  try {
    const s = ae(F), a = ae(H);
    s && localStorage.setItem(Se, s), a && localStorage.setItem(be, a), console.log("[auth][cookie->ls] sync", {
      hasAccess: !!s,
      hasRefresh: !!a
    });
  } catch (s) {
    console.log("[auth][cookie->ls] error", s);
  }
}
function he() {
  try {
    localStorage.removeItem(Se), localStorage.removeItem(be), console.log("[auth][cookie->ls] cleared localStorage");
  } catch (s) {
    console.log("[auth][cookie->ls] clear error", s);
  }
}
const ls = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ACCESS_COOKIE: F,
  LS_ACCESS_KEY: Se,
  LS_REFRESH_KEY: be,
  REFRESH_COOKIE: H,
  buildOAuthRedirectUrl: ns,
  clearLocalStorageTokens: he,
  clearSessionCookie: le,
  ensureCrossSubdomainCookies: ye,
  getCookie: ae,
  getPostLoginBase: Ne,
  setSessionCookie: J,
  syncCookiesToLocalStorage: oe
}, Symbol.toStringTag, { value: "Module" }));
async function ga() {
  try {
    ye([F, H]);
    const s = ae(F), a = ae(H);
    if (s && a) {
      const { data: { session: o } } = await x.auth.getSession();
      if (!o) {
        const { data: c, error: y } = await x.auth.setSession({ access_token: s, refresh_token: a });
        y ? console.log("[auth][restore] error", y) : console.log("[auth][restore] done", !!c.session);
      }
    } else
      console.log("[auth][restore] no cookies present");
    oe();
  } catch (s) {
    console.log("[auth][restore] exception", s);
  }
}
function is() {
  console.log("[auth][listener] Setting up auth state listener..."), x.auth.onAuthStateChange(async (s, a) => {
    switch (console.log("[auth][listener] Auth state changed:", s, !!a), s) {
      case "TOKEN_REFRESHED":
        console.log("[auth][listener] Token refreshed successfully"), a && (J(F, a.access_token, 60 * 60 * 24 * 365), J(H, a.refresh_token, 60 * 60 * 24 * 365), oe());
        break;
      case "SIGNED_IN":
        console.log("[auth][listener] User signed in"), a && (J(F, a.access_token, 60 * 60 * 24 * 365), J(H, a.refresh_token, 60 * 60 * 24 * 365), oe());
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
async function $e() {
  try {
    const { data: { session: s } } = await x.auth.getSession();
    if (s && s.user)
      return console.log("[auth][restore] Active session found"), { success: !0, session: s };
    const a = ae(F), o = ae(H);
    if (a && o) {
      console.log("[auth][restore] Attempting to restore session from cookies...");
      const { data: c, error: y } = await x.auth.setSession({
        access_token: a,
        refresh_token: o
      });
      if (y)
        return console.log("[auth][restore] Failed to restore session:", y.message), { success: !1, error: y };
      if (c.session)
        return console.log("[auth][restore] Session restored successfully"), J(F, c.session.access_token, 60 * 60 * 24 * 365), J(H, c.session.refresh_token, 60 * 60 * 24 * 365), oe(), { success: !0, session: c.session };
    }
    return console.log("[auth][restore] No valid session or cookies found"), { success: !1, error: "No valid session or cookies" };
  } catch (s) {
    return console.log("[auth][restore] Exception during session restoration:", s), { success: !1, error: s };
  }
}
const Ce = "https://oqdnbpmmgntqtigstaow.supabase.co", Ie = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xZG5icG1tZ250cXRpZ3N0YW93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0NTk2NDYsImV4cCI6MjA1MDAzNTY0Nn0.rn0nRY9xLgLt-ajiSPeG0PcdS9V-549C1yeqhcxxG40", x = Ze(
  Ce,
  Ie,
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
typeof window < "u" && (ye([F, H]), is());
console.log("Supabase Configuration:", {
  url: Ce,
  hasKey: !!Ie,
  autoRefreshToken: !0,
  persistSession: !0
});
console.log("URL:", Ce.replace(/https:\/\/(.+)\.supabase\.co/, "https://*****.supabase.co"));
console.log("Key configured:", !Ie.includes("your-anon-key"));
console.log("Environment mode:", "production");
const cs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  supabase: x
}, Symbol.toStringTag, { value: "Module" }));
function us() {
  const s = $({
    user: null,
    isAuthenticated: !1,
    isLoading: !0
  }), a = $(null), o = z(() => s.value.isAuthenticated), c = z(() => s.value.user), y = z(() => s.value.isLoading), I = async () => {
    var r, h, i, C, P, W, E, f, k, u, U, w, m, G, X;
    try {
      const { data: { session: N } } = await x.auth.getSession();
      if (N && N.user) {
        const A = N.user, M = {
          id: A.id,
          name: ((r = A.user_metadata) == null ? void 0 : r.name) || ((h = A.user_metadata) == null ? void 0 : h.user_name) || ((i = A.user_metadata) == null ? void 0 : i.full_name) || ((C = A.email) == null ? void 0 : C.split("@")[0]) || "User",
          email: A.email,
          avatar_url: ((P = A.user_metadata) == null ? void 0 : P.avatar_url) || null,
          user_metadata: A.user_metadata
        };
        return s.value = {
          user: M,
          isAuthenticated: !0,
          isLoading: !1
        }, a.value = {
          user: M,
          access_token: N.access_token,
          refresh_token: N.refresh_token
        }, { success: !0, session: a.value };
      }
      console.log("[auth][enhanced] No active session, attempting to restore from cookies...");
      const T = await $e();
      if (T.success && T.session) {
        console.log("[auth][enhanced] Session restored successfully");
        const A = T.session.user, M = {
          id: A.id,
          name: ((W = A.user_metadata) == null ? void 0 : W.name) || ((E = A.user_metadata) == null ? void 0 : E.user_name) || ((f = A.user_metadata) == null ? void 0 : f.full_name) || ((k = A.email) == null ? void 0 : k.split("@")[0]) || "User",
          email: A.email,
          avatar_url: ((u = A.user_metadata) == null ? void 0 : u.avatar_url) || null,
          user_metadata: A.user_metadata
        };
        return s.value = {
          user: M,
          isAuthenticated: !0,
          isLoading: !1
        }, a.value = T.session, { success: !0, session: a.value };
      } else
        console.log("[auth][enhanced] Failed to restore session:", T.error);
    } catch (N) {
      console.error("Error getting Supabase session:", N);
      try {
        const T = await $e();
        if (T.success && T.session) {
          console.log("[auth][enhanced] Session restored after error");
          const A = T.session.user, M = {
            id: A.id,
            name: ((U = A.user_metadata) == null ? void 0 : U.name) || ((w = A.user_metadata) == null ? void 0 : w.user_name) || ((m = A.user_metadata) == null ? void 0 : m.full_name) || ((G = A.email) == null ? void 0 : G.split("@")[0]) || "User",
            email: A.email,
            avatar_url: ((X = A.user_metadata) == null ? void 0 : X.avatar_url) || null,
            user_metadata: A.user_metadata
          };
          return s.value = {
            user: M,
            isAuthenticated: !0,
            isLoading: !1
          }, a.value = T.session, { success: !0, session: a.value };
        }
      } catch (T) {
        console.error("Error restoring session:", T);
      }
    }
    return s.value = {
      user: null,
      isAuthenticated: !1,
      isLoading: !1
    }, a.value = null, { success: !1, error: "No valid session found" };
  }, R = async () => {
    try {
      await x.auth.signOut(), le(F), le(H), he(), s.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1
      }, a.value = null, console.log("[auth][enhanced] User logged out successfully");
    } catch (r) {
      console.error("Error during logout:", r), s.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1
      }, a.value = null;
    }
  }, V = async (r, h) => {
    var i, C, P, W, E;
    try {
      s.value.isLoading = !0;
      const { data: f, error: k } = await x.auth.signInWithPassword({
        email: r,
        password: h
      });
      if (k)
        throw k;
      if (f.session) {
        const u = f.session.user, U = {
          id: u.id,
          name: ((i = u.user_metadata) == null ? void 0 : i.name) || ((C = u.user_metadata) == null ? void 0 : C.user_name) || ((P = u.user_metadata) == null ? void 0 : P.full_name) || ((W = u.email) == null ? void 0 : W.split("@")[0]) || "User",
          email: u.email,
          avatar_url: ((E = u.user_metadata) == null ? void 0 : E.avatar_url) || null,
          user_metadata: u.user_metadata
        };
        return s.value = {
          user: U,
          isAuthenticated: !0,
          isLoading: !1
        }, a.value = {
          user: U,
          access_token: f.session.access_token,
          refresh_token: f.session.refresh_token
        }, { success: !0, session: a.value };
      }
      return { success: !1, error: "No session returned" };
    } catch (f) {
      return console.error("Sign in error:", f), s.value.isLoading = !1, { success: !1, error: f };
    }
  }, b = async (r, h, i) => {
    var C, P, W, E, f;
    try {
      s.value.isLoading = !0;
      const { data: k, error: u } = await x.auth.signUp({
        email: r,
        password: h,
        options: {
          data: i
        }
      });
      if (u)
        throw u;
      if (k.session) {
        const U = k.session.user, w = {
          id: U.id,
          name: ((C = U.user_metadata) == null ? void 0 : C.name) || ((P = U.user_metadata) == null ? void 0 : P.user_name) || ((W = U.user_metadata) == null ? void 0 : W.full_name) || ((E = U.email) == null ? void 0 : E.split("@")[0]) || "User",
          email: U.email,
          avatar_url: ((f = U.user_metadata) == null ? void 0 : f.avatar_url) || null,
          user_metadata: U.user_metadata
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
    await I();
  };
  return ue(() => {
    d();
  }), {
    // State
    authState: s,
    currentSession: a,
    // Computed
    isAuthenticated: o,
    currentUser: c,
    isLoading: y,
    // Methods
    loadUserInfo: I,
    logout: R,
    signIn: V,
    signUp: b,
    checkAuth: d
  };
}
const ds = qe("workspace", () => {
  const s = $(null), a = $([]), o = $(null), c = (d) => {
    s.value = d, localStorage.setItem("current_workspace", JSON.stringify(d));
  }, y = (d) => {
    a.value = d, localStorage.setItem("available_workspaces", JSON.stringify(d));
  };
  return {
    currentWorkspace: s,
    workspaces: a,
    user: o,
    setCurrentWorkspace: c,
    setWorkspaces: y,
    setUser: (d) => {
      o.value = d, localStorage.setItem("user_info", JSON.stringify(d));
    },
    loadPersistedData: () => {
      const d = localStorage.getItem("current_workspace");
      if (d)
        try {
          s.value = JSON.parse(d);
        } catch (i) {
          console.error("Error loading persisted workspace:", i);
        }
      const r = localStorage.getItem("available_workspaces");
      if (r)
        try {
          a.value = JSON.parse(r);
        } catch (i) {
          console.error("Error loading persisted workspaces:", i);
        }
      const h = localStorage.getItem("user_info");
      if (h)
        try {
          o.value = JSON.parse(h);
        } catch (i) {
          console.error("Error loading persisted user:", i);
        }
    },
    clearData: () => {
      s.value = null, a.value = [], o.value = null, localStorage.removeItem("current_workspace"), localStorage.removeItem("available_workspaces"), localStorage.removeItem("user_info");
    },
    loadWorkspaces: async (d = !1) => {
      try {
        const { data: { user: r } } = await x.auth.getUser();
        if (!r)
          return [];
        let h = x.from("workspaces").select(`
          id, title, description, parent_workspace_id, created_by, archived, created_at,
          workspace_access!inner ( access_type, shared_with_user_id ),
          workspace_activities!left ( updated_at )
        `).eq("workspace_access.shared_with_user_id", r.id);
        d || (h = h.eq("archived", !1));
        const { data: i, error: C } = await h;
        if (C)
          throw C;
        const P = /* @__PURE__ */ new Map();
        (i || []).forEach((u) => {
          (u.workspace_access || []).forEach((U) => {
            U.shared_with_user_id === r.id && P.set(u.id, U);
          });
        });
        const W = [...new Set(
          (i || []).filter((u) => u.parent_workspace_id).map((u) => u.parent_workspace_id).filter((u) => !P.has(u))
        )];
        let E = [];
        if (W.length) {
          let u = x.from("workspaces").select("id, title, description, parent_workspace_id, created_by, archived, created_at").in("id", W);
          d || (u = u.eq("archived", !1));
          const { data: U, error: w } = await u;
          if (w)
            throw w;
          E = U || [];
        }
        const k = [...i || [], ...E].map((u) => {
          var U, w, m;
          return {
            id: u.id,
            title: u.title,
            description: u.description || "No description",
            parent_workspace_id: u.parent_workspace_id,
            created_by: u.created_by,
            archived: u.archived,
            created_at: u.created_at,
            latest_activity: ((w = (U = u.workspace_activities) == null ? void 0 : U[0]) == null ? void 0 : w.updated_at) || u.created_at,
            hasAccess: P.has(u.id),
            accessType: ((m = P.get(u.id)) == null ? void 0 : m.access_type) || null
          };
        });
        return k.sort((u, U) => new Date(U.latest_activity) - new Date(u.latest_activity)), y(k), k;
      } catch (r) {
        return console.error("loadWorkspaces error", r), [];
      }
    }
  };
});
function ps() {
  const s = $({
    user: null,
    isAuthenticated: !1,
    isLoading: !0,
    error: null
  }), a = $(window.location.href), o = async () => {
    var d, r, h, i, C, P, W, E;
    try {
      s.value.isLoading = !0;
      const { data: { session: f }, error: k } = await x.auth.getSession();
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
          name: ((d = f.user.user_metadata) == null ? void 0 : d.full_name) || ((r = f.user.user_metadata) == null ? void 0 : r.name) || ((h = f.user.email) == null ? void 0 : h.split("@")[0]) || "User",
          avatar_url: ((i = f.user.user_metadata) == null ? void 0 : i.avatar_url) || ((C = f.user.user_metadata) == null ? void 0 : C.picture) || null,
          initials: (((P = f.user.user_metadata) == null ? void 0 : P.full_name) || ((W = f.user.user_metadata) == null ? void 0 : W.name) || ((E = f.user.email) == null ? void 0 : E.split("@")[0]) || "U").split(" ").map((u) => u[0]).join("").toUpperCase().substring(0, 2)
        },
        isAuthenticated: !0,
        isLoading: !1,
        error: null
      }, f.access_token && J(F, f.access_token), f.refresh_token && J(H, f.refresh_token), oe()) : s.value = {
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
  }, c = async (d, r) => {
    try {
      const { error: h } = await x.auth.signInWithPassword({
        email: d,
        password: r
      });
      return h ? { success: !1, error: h.message } : (await o(), sessionStorage.setItem("post-login-redirect", a.value), { success: !0 });
    } catch (h) {
      return console.error("Login error:", h), { success: !1, error: h.message || "Login failed" };
    }
  }, y = async (d, r) => {
    var h;
    try {
      const { data: i, error: C } = await x.auth.signUp({
        email: d,
        password: r
      });
      return C ? { success: !1, error: C.message } : i.user && !i.user.email_confirmed_at ? { success: !0, needsConfirmation: !0 } : (h = i.session) != null && h.user ? (await o(), sessionStorage.setItem("post-login-redirect", a.value), { success: !0 }) : { success: !1, error: "No session created" };
    } catch (i) {
      return console.error("Signup error:", i), { success: !1, error: i.message || "Signup failed" };
    }
  }, I = async (d) => {
    try {
      const r = `${window.location.origin}/auth/callback`;
      console.log("[OAuth] Starting login with provider:", d), console.log("[OAuth] Redirect URL:", r), console.log("[OAuth] Current URL:", a.value), console.log("[OAuth] Current origin:", window.location.origin);
      const { error: h } = await x.auth.signInWithOAuth({
        provider: d,
        options: {
          redirectTo: r,
          queryParams: {
            redirect_origin: a.value
          }
        }
      });
      if (h)
        return console.error("[OAuth] Error:", h), { success: !1, error: h.message };
      const i = a.value || window.location.href;
      return sessionStorage.setItem("post-login-redirect", i), localStorage.setItem("post-login-redirect", i), console.log("[OAuth] Stored redirect URL:", i), console.log("[OAuth] Current URL value:", a.value), console.log("[OAuth] Window location href:", window.location.href), { success: !0 };
    } catch (r) {
      return console.error("OAuth login error:", r), { success: !1, error: r.message || "OAuth login failed" };
    }
  }, R = async () => {
    try {
      const { error: d } = await x.auth.signOut();
      d && console.error("Logout error:", d), s.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1,
        error: null
      }, le(F), le(H), he();
    } catch (d) {
      console.error("Logout error:", d);
    }
  }, V = async (d) => {
    try {
      const { error: r } = await x.auth.resetPasswordForEmail(d, {
        redirectTo: `${window.location.origin}/auth/reset-password`
      });
      return r ? { success: !1, error: r.message } : { success: !0 };
    } catch (r) {
      return console.error("Password reset error:", r), { success: !1, error: r.message || "Password reset failed" };
    }
  }, b = () => {
    x.auth.onAuthStateChange((d, r) => {
      var h;
      switch (console.log("Auth state changed:", d, (h = r == null ? void 0 : r.user) == null ? void 0 : h.email), d) {
        case "SIGNED_IN":
          r != null && r.user && o();
          break;
        case "SIGNED_OUT":
          s.value = {
            user: null,
            isAuthenticated: !1,
            isLoading: !1,
            error: null
          }, le(F), le(H), he();
          break;
        case "TOKEN_REFRESHED":
          r != null && r.access_token && J(F, r.access_token), r != null && r.refresh_token && J(H, r.refresh_token), oe();
          break;
        case "USER_UPDATED":
          r != null && r.user && o();
          break;
      }
    });
  };
  return ue(async () => {
    b(), await o();
  }), re(() => window.location.href, (d) => {
    a.value = d;
  }), {
    authState: z(() => s.value),
    isAuthenticated: z(() => s.value.isAuthenticated),
    user: z(() => s.value.user),
    isLoading: z(() => s.value.isLoading),
    checkAuthStatus: o,
    loginWithEmail: c,
    signupWithEmail: y,
    loginWithProvider: I,
    logout: R,
    resetPassword: V,
    currentUrl: z(() => a.value)
  };
}
const hs = { class: "login-container" }, gs = { class: "logo-section" }, fs = { class: "login-buttons" }, ks = {
  key: 0,
  class: "forgot-password"
}, ws = { class: "signup-link" }, ms = /* @__PURE__ */ te({
  __name: "LoginModal",
  props: {
    modelValue: { type: Boolean }
  },
  emits: ["update:modelValue", "login-success"],
  setup(s, { emit: a }) {
    const o = s, c = a, y = z({
      get: () => o.modelValue,
      set: (w) => c("update:modelValue", w)
    }), I = $(!1), R = $(!1), V = $(), { loginWithEmail: b, signupWithEmail: d, loginWithProvider: r, resetPassword: h } = ps(), i = Ke({
      email: "",
      password: "",
      confirmPassword: ""
    }), C = z(() => ({
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
            validator: (w, m, G) => {
              m !== i.password ? G(new Error("Passwords do not match")) : G();
            },
            trigger: "blur"
          }
        ]
      } : {}
    })), P = () => {
      var w;
      I.value = !I.value, i.email = "", i.password = "", i.confirmPassword = "", (w = V.value) == null || w.clearValidate();
    }, W = () => {
      var w;
      y.value = !1, i.email = "", i.password = "", i.confirmPassword = "", I.value = !1, (w = V.value) == null || w.clearValidate();
    }, E = async () => {
      if (V.value)
        try {
          await V.value.validate(), R.value = !0, I.value ? await k() : await f();
        } catch (w) {
          console.error("Form validation failed:", w);
        } finally {
          R.value = !1;
        }
    }, f = async () => {
      const w = await b(i.email, i.password);
      w.success ? (B.success("Login successful"), c("login-success", { email: i.email }), W()) : B.error("Login failed: " + w.error);
    }, k = async () => {
      const w = await d(i.email, i.password);
      w.success ? w.needsConfirmation ? B.success("Please check your email to confirm your account") : (B.success("Account created successfully"), c("login-success", { email: i.email }), W()) : B.error("Signup failed: " + w.error);
    }, u = async (w) => {
      const m = await r(w);
      m.success ? B.success("Redirecting to login provider...") : B.error("Login failed: " + m.error);
    }, U = async () => {
      if (!i.email) {
        B.warning("Please enter your email address first");
        return;
      }
      const w = await h(i.email);
      w.success ? B.success("Password reset email sent! Please check your inbox.") : B.error("Failed to send reset email: " + w.error);
    };
    return (w, m) => {
      const G = q("el-icon"), X = q("el-input"), N = q("el-form-item"), T = q("el-button"), A = q("el-dialog");
      return _(), Z(A, {
        modelValue: y.value,
        "onUpdate:modelValue": m[6] || (m[6] = (M) => y.value = M),
        title: "",
        width: "500px",
        "close-on-click-modal": !1,
        "close-on-press-escape": !0,
        "show-close": !0,
        class: "login-modal",
        onClose: W
      }, {
        default: g(() => [
          l("div", hs, [
            l("div", gs, [
              l("h2", null, D(I.value ? "Create Account" : "Welcome Back"), 1),
              l("p", null, D(I.value ? "Sign up to get started with your account" : "Sign in to continue to your account"), 1)
            ]),
            S(ee(Xe), {
              model: i,
              rules: C.value,
              ref_key: "formRef",
              ref: V,
              class: "login-form",
              onSubmit: ne(E, ["prevent"])
            }, {
              default: g(() => [
                S(N, { prop: "email" }, {
                  default: g(() => [
                    S(X, {
                      modelValue: i.email,
                      "onUpdate:modelValue": m[0] || (m[0] = (M) => i.email = M),
                      placeholder: "Email",
                      type: "email",
                      size: "large",
                      class: "form-input"
                    }, {
                      prefix: g(() => [
                        S(G, null, {
                          default: g(() => [
                            S(ee(os))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                S(N, { prop: "password" }, {
                  default: g(() => [
                    S(X, {
                      modelValue: i.password,
                      "onUpdate:modelValue": m[1] || (m[1] = (M) => i.password = M),
                      placeholder: "Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: g(() => [
                        S(G, null, {
                          default: g(() => [
                            S(ee(Re))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                I.value ? (_(), Z(N, {
                  key: 0,
                  prop: "confirmPassword"
                }, {
                  default: g(() => [
                    S(X, {
                      modelValue: i.confirmPassword,
                      "onUpdate:modelValue": m[2] || (m[2] = (M) => i.confirmPassword = M),
                      placeholder: "Confirm Password",
                      type: "password",
                      size: "large",
                      "show-password": "",
                      class: "form-input"
                    }, {
                      prefix: g(() => [
                        S(G, null, {
                          default: g(() => [
                            S(ee(Re))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                })) : K("", !0),
                S(N, null, {
                  default: g(() => [
                    S(T, {
                      type: "primary",
                      class: "submit-button",
                      loading: R.value,
                      onClick: E,
                      size: "large"
                    }, {
                      default: g(() => [
                        Y(D(I.value ? "Sign Up" : "Sign In"), 1)
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
            l("div", fs, [
              S(T, {
                class: "login-button google",
                onClick: m[3] || (m[3] = (M) => u("google")),
                size: "large"
              }, {
                default: g(() => [...m[7] || (m[7] = [
                  l("span", { class: "social-icon" }, "G", -1),
                  Y(" Google ", -1)
                ])]),
                _: 1
              }),
              S(T, {
                class: "login-button github",
                onClick: m[4] || (m[4] = (M) => u("github")),
                size: "large"
              }, {
                default: g(() => [...m[8] || (m[8] = [
                  l("span", { class: "social-icon" }, "⚡", -1),
                  Y(" GitHub ", -1)
                ])]),
                _: 1
              }),
              S(T, {
                class: "login-button twitter",
                onClick: m[5] || (m[5] = (M) => u("twitter")),
                size: "large"
              }, {
                default: g(() => [...m[9] || (m[9] = [
                  l("span", { class: "social-icon" }, "X", -1),
                  Y(" X (Twitter) ", -1)
                ])]),
                _: 1
              })
            ]),
            m[11] || (m[11] = l("div", { class: "terms" }, " By continuing, you agree to AI Workspace's Terms of Service and Privacy Policy ", -1)),
            I.value ? K("", !0) : (_(), O("div", ks, [
              l("a", {
                href: "#",
                onClick: ne(U, ["prevent"])
              }, "Forgot Password?")
            ])),
            l("div", ws, [
              Y(D(I.value ? "Already have an account?" : "Don't have an account?") + " ", 1),
              l("a", {
                href: "#",
                onClick: ne(P, ["prevent"])
              }, D(I.value ? "Sign in" : "Sign up"), 1)
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
const Ae = (s, a) => {
  const o = s.__vccOpts || s;
  for (const [c, y] of a)
    o[c] = y;
  return o;
}, vs = /* @__PURE__ */ Ae(ms, [["__scopeId", "data-v-684a3f28"]]), _s = { class: "aiworkspace-header" }, ys = {
  key: 0,
  class: "header-content header-loading"
}, Ss = {
  key: 1,
  class: "header-content header-fallback"
}, bs = {
  key: 2,
  class: "header-content"
}, Cs = { class: "header-left" }, Is = { class: "logo-section" }, As = {
  href: "/",
  class: "logo"
}, Ls = ["src"], Us = {
  key: 1,
  class: "text-logo"
}, Es = {
  key: 0,
  class: "header-center"
}, Ps = { class: "main-navigation" }, Ws = { class: "nav-item" }, Os = {
  href: "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard",
  class: "nav-link"
}, Rs = { class: "workspace-dropdown-item" }, $s = ["href"], xs = { class: "workspace-icon" }, Ns = {
  key: 1,
  class: "nav-divider"
}, Ms = { class: "nav-item" }, Ts = ["href", "onClick"], Vs = { class: "header-right" }, Ds = { class: "user-profile" }, Bs = { class: "user-info" }, zs = { class: "user-name" }, Fs = { class: "user-avatar" }, Hs = ["src", "alt"], Js = {
  key: 1,
  class: "avatar-placeholder"
}, Gs = {
  key: 3,
  class: "header-content header-unauthenticated"
}, Ks = { class: "header-left" }, Ys = { class: "logo-section" }, Xs = {
  href: "/",
  class: "logo"
}, Zs = ["src"], qs = {
  key: 1,
  class: "text-logo"
}, js = { class: "header-right" }, Qs = { class: "workspace-list" }, ea = ["onClick"], sa = { class: "workspace-icon" }, aa = { class: "workspace-details" }, oa = { class: "workspace-members" }, ta = {
  key: 0,
  class: "current-indicator"
}, ce = 50, ra = /* @__PURE__ */ te({
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
    const o = s, c = a, { authState: y, logout: I } = us(), R = () => {
      try {
        return ds();
      } catch {
        return console.warn("[AIWorkspaceHeader] Pinia not initialized yet, using fallback state"), null;
      }
    }, V = () => {
      try {
        return typeof window < "u" ? !!window.__PINIA__ || !!window.Pinia : !1;
      } catch {
        return !1;
      }
    }, b = $(R()), d = z(() => !!b.value), r = $(0), h = () => {
      if (!b.value && r.value < ce) {
        if (V()) {
          const t = R();
          if (t) {
            b.value = t, console.log("[AIWorkspaceHeader] Pinia store initialized successfully");
            return;
          }
        }
        r.value++, setTimeout(h, 100);
      } else
        r.value >= ce && console.warn("[AIWorkspaceHeader] Pinia initialization failed after maximum retries, using fallback mode");
    };
    ue(() => {
      b.value || h();
    });
    const i = $(!1), C = $(!1), P = $([]), W = $([]), E = $({
      name: "",
      email: "",
      avatar_url: null,
      initials: ""
    }), f = $([]), k = $([]), u = $(!1);
    re(k, async (t) => {
      t.length > 0 && d.value && X.value && await G();
    }, { immediate: !1 }), re(() => window.location.pathname + window.location.search + window.location.hash, async () => {
      d.value && X.value && await G();
    }, { immediate: !1 });
    const U = $(window.location.pathname);
    re(() => window.location.pathname, (t) => {
      U.value = t;
    }, { immediate: !0 }), re(d, (t) => {
      !t && r.value < ce && h();
    });
    const w = () => {
      try {
        const t = window.location.pathname.match(/\/single-workspace\/(\d+)/);
        if (t)
          return t[1];
        const n = new URLSearchParams(window.location.search).get("workspace_id");
        if (n)
          return n;
        const p = window.location.hash.match(/workspace_id=(\d+)/);
        return p ? p[1] : null;
      } catch (t) {
        return console.warn("[AIWorkspaceHeader] Error parsing URL for workspace_id:", t), null;
      }
    }, m = () => {
      try {
        return window.location.pathname.includes("/all-workspace/");
      } catch (t) {
        return console.warn("[AIWorkspaceHeader] Error checking all-workspace mode:", t), !1;
      }
    }, G = async () => {
      if (!b.value || !d.value)
        return;
      const t = m();
      if (u.value = t, t) {
        b.value.currentWorkspace = null, localStorage.removeItem("current_workspace"), console.log("[AIWorkspaceHeader] Auto-selected all-workspace mode from URL");
        return;
      }
      const e = w();
      if (e)
        try {
          k.value.length === 0 && await Ue();
          const n = k.value.find((p) => p.id.toString() === e);
          n ? (b.value.setCurrentWorkspace(n), console.log(`[AIWorkspaceHeader] Auto-selected workspace from URL: ${n.title} (ID: ${n.id})`), c("workspaceChange", n)) : console.warn(`[AIWorkspaceHeader] Workspace with ID ${e} not found in available workspaces`);
        } catch (n) {
          console.error("[AIWorkspaceHeader] Error auto-selecting workspace from URL:", n);
        }
    }, X = z(() => y.value.isAuthenticated), N = z(() => b.value ? b.value.currentWorkspace : null), T = $([
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
    ]), A = $([
      { label: "Dashboard", key: "dashboard", url: "/dashboard" },
      { label: "All Tasks", key: "tasks", url: "/tasks" },
      { label: "All Goals", key: "goals", url: "/goals" },
      { label: "All Events", key: "events", url: "/events" },
      { label: "All Drive", key: "files", url: "/files" },
      { label: "All Contacts", key: "contacts", url: "/contacts" },
      { label: "All Settings", key: "settings", url: "/settings" }
    ]), M = z(() => u.value ? A.value : T.value), Me = z(() => {
      try {
        const t = U.value;
        let e = "";
        const n = t.match(/\/all-workspace\/([^\/]+)/);
        if (n)
          e = n[1];
        else {
          const p = t.match(/\/single-workspace\/\d+\/([^\/]+)/);
          if (p)
            e = p[1];
          else {
            const L = t.match(/\/([^\/]+)$/);
            L && (e = L[1]);
          }
        }
        if (e) {
          const p = M.value.find(
            (L) => L.key === e || L.url.includes(`/${e}`) || L.url === `/${e}`
          );
          if (p)
            return p.label;
        }
        return "Dashboard";
      } catch (t) {
        return console.warn("[AIWorkspaceHeader] Error determining current section:", t), "Dashboard";
      }
    }), Te = (t) => {
      const e = /* @__PURE__ */ new Map();
      t.forEach((L) => {
        e.set(L.id, { ...L, children: [] });
      });
      const n = [];
      e.forEach((L) => {
        L.parent_workspace_id && e.has(L.parent_workspace_id) ? e.get(L.parent_workspace_id).children.push(L) : n.push(L);
      });
      const p = (L) => {
        L.sort((j, Q) => j.title.localeCompare(Q.title)), L.forEach((j) => {
          j.children && p(j.children);
        });
      };
      return p(n), n;
    }, Le = (t, e = 0, n = []) => (t.forEach((p) => {
      n.push({ ...p, level: e }), p.children && p.children.length && Le(p.children, e + 1, n);
    }), n), Ue = async () => {
      var t, e, n;
      try {
        const p = await ((t = b.value) == null ? void 0 : t.loadWorkspaces());
        if (f.value = Te(p || []), k.value = Le(f.value), W.value = k.value, P.value = k.value, o.currentWorkspaceId) {
          const L = k.value.find((j) => {
            var Q;
            return j.id.toString() === ((Q = o.currentWorkspaceId) == null ? void 0 : Q.toString());
          });
          L && ((e = b.value) == null || e.setCurrentWorkspace(L));
        } else
          !N.value && k.value.length && ((n = b.value) == null || n.setCurrentWorkspace(k.value[0]));
      } catch (p) {
        console.error("loadWorkspaces (header) error", p);
      }
    }, Ve = (t) => {
      if (console.log("Navigation command:", t), t === "all-workspace") {
        window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
        return;
      } else {
        const e = parseInt(t.replace("workspace-", ""));
        window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e}/dashboard`;
        return;
      }
    }, De = (t) => {
      const e = N.value, n = u.value;
      switch (t.key) {
        case "dashboard":
          n ? window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard" : e ? window.location.href = `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e.id}/dashboard` : window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
          break;
        case "outlines":
          if (n)
            window.location.href = "https://outline.aiworkspace.pro/all-workspace/outlines";
          else if (e) {
            const p = `https://outline.aiworkspace.pro/single-workspace/${e.id}/outlines`;
            window.location.href = p;
          } else
            window.location.href = "https://outline.aiworkspace.pro";
          break;
        case "canvas":
          if (n)
            window.location.href = "https://canvas.aiworkspace.pro/all-workspace/canvas";
          else if (e) {
            const p = `https://canvas.aiworkspace.pro/single-workspace/${e.id}/canvas`;
            window.location.href = p;
          } else
            window.location.href = "https://canvas.aiworkspace.pro";
          break;
        case "files":
          if (n)
            window.location.href = "https://drive.aiworkspace.pro/all-workspace/files";
          else if (e) {
            const p = `https://drive.aiworkspace.pro/single-workspace/${e.id}/files`;
            window.location.href = p;
          } else
            window.location.href = "https://drive.aiworkspace.pro";
          break;
        case "tasks":
          if (n)
            window.location.href = "https://tasks.aiworkspace.pro/all-workspace/tasks";
          else if (e) {
            const p = `https://tasks.aiworkspace.pro/single-workspace/${e.id}/tasks`;
            window.location.href = p;
          } else
            window.location.href = "https://tasks.aiworkspace.pro";
          break;
        case "goals":
          if (n)
            window.location.href = "https://app.aiworkspace.pro/all-workspace/goals";
          else if (e) {
            const p = `https://app.aiworkspace.pro/single-workspace/${e.id}/goals`;
            window.location.href = p;
          } else
            window.location.href = "https://app.aiworkspace.pro/all-workspace/goals";
          break;
        case "events":
          if (n)
            window.location.href = "https://app.aiworkspace.pro/all-workspace/events";
          else if (e) {
            const p = `https://app.aiworkspace.pro/single-workspace/${e.id}/events`;
            window.location.href = p;
          } else
            window.location.href = "https://app.aiworkspace.pro/all-workspace/events";
          break;
        case "contacts":
          if (n)
            window.location.href = "https://app.aiworkspace.pro/all-workspace/contacts";
          else if (e) {
            const p = `https://app.aiworkspace.pro/single-workspace/${e.id}/contacts`;
            window.location.href = p;
          } else
            window.location.href = "https://app.aiworkspace.pro/all-workspace/contacts";
          break;
        case "ai-portfolios":
          if (n)
            window.location.href = "https://spreadsheet.aiworkspace.pro/all-workspace/ai-portfolios";
          else if (e) {
            const p = `https://spreadsheet.aiworkspace.pro/single-workspace/${e.id}/ai-portfolios`;
            window.location.href = p;
          } else
            window.location.href = "https://spreadsheet.aiworkspace.pro";
          break;
        case "settings":
          if (n)
            window.location.href = "https://settings.aiworkspace.pro/all-workspace/settings";
          else if (e) {
            const p = `https://settings.aiworkspace.pro/single-workspace/${e.id}/settings`;
            window.location.href = p;
          } else
            window.location.href = "https://settings.aiworkspace.pro";
          break;
        default:
          if (n) {
            const p = `https://app.aiworkspace.pro/all-workspace/${t.key}`;
            window.location.href = p;
          } else if (e) {
            const p = `https://app.aiworkspace.pro/single-workspace/${e.id}/${t.key}`;
            window.location.href = p;
          } else {
            const p = `https://app.aiworkspace.pro/${t.key}`;
            window.location.href = p;
          }
          break;
      }
    }, Be = (t) => {
      const e = N.value, n = u.value;
      switch (t.key) {
        case "dashboard":
          return n ? "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard" : e ? `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${e.id}/dashboard` : "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
        case "ai-portfolios":
          return n ? "https://spreadsheet.aiworkspace.pro/all-workspace/ai-portfolios" : e ? `https://spreadsheet.aiworkspace.pro/single-workspace/${e.id}/ai-portfolios` : "https://spreadsheet.aiworkspace.pro";
        case "outlines":
          return n ? "https://outline.aiworkspace.pro/all-workspace/outlines" : e ? `https://outline.aiworkspace.pro/single-workspace/${e.id}/outlines` : "https://outline.aiworkspace.pro";
        case "canvas":
          return n ? "https://canvas.aiworkspace.pro/all-workspace/canvas" : e ? `https://canvas.aiworkspace.pro/single-workspace/${e.id}/canvas` : "https://canvas.aiworkspace.pro";
        case "files":
          return n ? "https://drive.aiworkspace.pro/all-workspace/files" : e ? `https://drive.aiworkspace.pro/single-workspace/${e.id}/files` : "https://drive.aiworkspace.pro";
        case "tasks":
          return n ? "https://tasks.aiworkspace.pro/all-workspace/tasks" : e ? `https://tasks.aiworkspace.pro/single-workspace/${e.id}/tasks` : "https://tasks.aiworkspace.pro";
        case "goals":
          return n ? "https://app.aiworkspace.pro/all-workspace/goals" : e ? `https://app.aiworkspace.pro/single-workspace/${e.id}/goals` : "https://app.aiworkspace.pro/all-workspace/goals";
        case "events":
          return n ? "https://app.aiworkspace.pro/all-workspace/events" : e ? `https://app.aiworkspace.pro/single-workspace/${e.id}/events` : "https://app.aiworkspace.pro/all-workspace/events";
        case "contacts":
          return n ? "https://app.aiworkspace.pro/all-workspace/contacts" : e ? `https://app.aiworkspace.pro/single-workspace/${e.id}/contacts` : "https://app.aiworkspace.pro/all-workspace/contacts";
        case "settings":
          return n ? "https://settings.aiworkspace.pro/all-workspace/settings" : e ? `https://settings.aiworkspace.pro/single-workspace/${e.id}/settings` : "https://settings.aiworkspace.pro";
        default:
          return n ? `https://app.aiworkspace.pro/all-workspace/${t.key}` : e ? `https://app.aiworkspace.pro/single-workspace/${e.id}/${t.key}` : `https://app.aiworkspace.pro/${t.key}`;
      }
    }, de = (t) => {
      switch (t) {
        case "profile":
          o.onProfileClick ? o.onProfileClick() : B.info("Profile settings coming soon");
          break;
        case "workspaces":
          i.value = !0;
          break;
        case "logout":
          Fe();
          break;
      }
    }, Ee = (t) => {
      var e;
      (e = b.value) == null || e.setCurrentWorkspace(t), i.value = !1, c("workspaceChange", t), B.success(`Switched to ${t.title}`);
    }, ze = () => {
      We.prompt("Enter workspace name:", "Create New Workspace", {
        confirmButtonText: "Create",
        cancelButtonText: "Cancel",
        inputPattern: /\S/,
        inputErrorMessage: "Workspace name cannot be empty"
      }).then(({ value: t }) => {
        var n;
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
        P.value.push(e), (n = b.value) == null || n.setWorkspaces(P.value), Ee(e), B.success(`Created workspace: ${t}`);
      }).catch(() => {
      });
    }, Fe = () => {
      We.confirm(
        "Are you sure you want to sign out?",
        "Sign Out",
        {
          confirmButtonText: "Sign Out",
          cancelButtonText: "Cancel",
          type: "warning"
        }
      ).then(async () => {
        var t;
        (t = b.value) == null || t.clearData(), await I(), c("logout"), B.success("Signed out successfully");
      }).catch(() => {
      });
    }, fe = async () => {
      var t, e;
      if (y.value.user) {
        const n = y.value.user;
        E.value = {
          name: n.name || ((t = n.email) == null ? void 0 : t.split("@")[0]) || "User",
          email: n.email || "",
          avatar_url: n.avatar_url || null,
          initials: (n.name || ((e = n.email) == null ? void 0 : e.split("@")[0]) || "U").split(" ").map((p) => p[0]).join("").toUpperCase().substring(0, 2)
        }, o.showWorkspaceSelector && await Ue();
      }
    };
    re(() => y.value.user, (t) => {
      var e;
      t ? fe() : (E.value = { name: "", email: "", avatar_url: null, initials: "" }, (e = b.value) == null || e.clearData());
    }), re(() => o.currentWorkspaceId, (t) => {
      var e;
      if (t && k.value.length) {
        const n = k.value.find((p) => p.id.toString() === t.toString());
        n && ((e = b.value) == null || e.setCurrentWorkspace(n));
      }
    }), ue(async () => {
      X.value && (await fe(), await G());
    });
    const He = async (t) => {
      console.log("Login successful:", t), C.value = !1, await fe(), c("login"), B.success("Welcome back!");
    }, Je = () => {
      r.value = 0, h(), B.success("Manual Pinia retry initiated.");
    };
    return (t, e) => {
      const n = q("el-icon"), p = q("el-tag"), L = q("el-dropdown-item"), j = q("el-dropdown-menu"), Q = q("el-dropdown"), ke = q("el-button"), Ge = q("el-dialog");
      return _(), O("header", _s, [
        !d.value && r.value < ce ? (_(), O("div", ys, [...e[8] || (e[8] = [
          we('<div class="header-left" data-v-f830d242><div class="logo-section" data-v-f830d242><a href="/" class="logo" data-v-f830d242><div class="text-logo" data-v-f830d242><span class="logo-text" data-v-f830d242>AI Workspace</span></div></a></div></div><div class="header-center" data-v-f830d242><span class="loading-text" data-v-f830d242>Initializing...</span></div>', 2)
        ])])) : !d.value && r.value >= ce ? (_(), O("div", Ss, [
          e[10] || (e[10] = we('<div class="header-left" data-v-f830d242><div class="logo-section" data-v-f830d242><a href="/" class="logo" data-v-f830d242><div class="text-logo" data-v-f830d242><span class="logo-text" data-v-f830d242>AI Workspace</span></div></a></div></div>', 1)),
          l("div", { class: "header-center" }, [
            e[9] || (e[9] = l("span", { class: "fallback-text" }, "Header Ready (Fallback Mode)", -1)),
            l("button", {
              onClick: Je,
              class: "retry-button"
            }, "Retry Pinia")
          ]),
          e[11] || (e[11] = we('<div class="header-right" data-v-f830d242><div class="user-profile" data-v-f830d242><div class="user-info" data-v-f830d242><span class="user-name" data-v-f830d242>User</span></div><div class="user-avatar" data-v-f830d242><span class="avatar-placeholder" data-v-f830d242>U</span></div></div></div>', 1))
        ])) : X.value ? (_(), O("div", bs, [
          l("div", Cs, [
            l("div", Is, [
              l("a", As, [
                t.customLogo ? (_(), O("img", {
                  key: 0,
                  src: t.customLogo,
                  alt: "AIWorkspace",
                  class: "logo-image"
                }, null, 8, Ls)) : (_(), O("div", Us, [...e[12] || (e[12] = [
                  l("span", { class: "logo-text" }, "AI Workspace", -1)
                ])]))
              ])
            ])
          ]),
          t.showSecondaryNavigation ? (_(), O("div", Es, [
            l("nav", Ps, [
              t.showWorkspaceSelector ? (_(), Z(Q, {
                key: 0,
                onCommand: Ve,
                trigger: "hover"
              }, {
                dropdown: g(() => [
                  S(j, { class: "workspace-tree-dropdown" }, {
                    default: g(() => [
                      S(L, {
                        command: "all-workspace",
                        class: me({ active: u.value })
                      }, {
                        default: g(() => [
                          l("a", Os, [
                            l("div", Rs, [
                              e[14] || (e[14] = l("span", { class: "workspace-icon" }, "🌐", -1)),
                              e[15] || (e[15] = l("span", null, "All workspace", -1)),
                              u.value ? (_(), Z(p, {
                                key: 0,
                                size: "small",
                                type: "success"
                              }, {
                                default: g(() => [...e[13] || (e[13] = [
                                  Y("Current", -1)
                                ])]),
                                _: 1
                              })) : K("", !0)
                            ])
                          ])
                        ]),
                        _: 1
                      }, 8, ["class"]),
                      k.value.length > 0 ? (_(), Z(L, {
                        key: 0,
                        divided: "",
                        disabled: ""
                      })) : K("", !0),
                      (_(!0), O(ve, null, _e(k.value, (v) => (_(), Z(L, {
                        key: v.id,
                        command: `workspace-${v.id}`
                      }, {
                        default: g(() => {
                          var ie;
                          return [
                            l("a", {
                              href: `https://single-ws-dashboard.aiworkspace.pro/single-workspace/${v.id}/dashboard`,
                              class: "nav-link"
                            }, [
                              l("div", {
                                class: "workspace-dropdown-item",
                                style: Ye({ paddingLeft: (v.level || 0) * 16 + "px" })
                              }, [
                                l("span", xs, D(v.children && v.children.length ? "📁" : "📄"), 1),
                                l("span", null, D(v.title), 1),
                                v.id === ((ie = N.value) == null ? void 0 : ie.id) ? (_(), Z(p, {
                                  key: 0,
                                  size: "small",
                                  type: "success"
                                }, {
                                  default: g(() => [...e[16] || (e[16] = [
                                    Y("Current", -1)
                                  ])]),
                                  _: 1
                                })) : K("", !0)
                              ], 4)
                            ], 8, $s)
                          ];
                        }),
                        _: 2
                      }, 1032, ["command"]))), 128)),
                      k.value.length === 0 ? (_(), Z(L, {
                        key: 1,
                        disabled: ""
                      }, {
                        default: g(() => [...e[17] || (e[17] = [
                          Y(" No workspaces ", -1)
                        ])]),
                        _: 1
                      })) : K("", !0)
                    ]),
                    _: 1
                  })
                ]),
                default: g(() => {
                  var v;
                  return [
                    l("span", Ws, [
                      Y(D(u.value ? "All workspace" : ((v = N.value) == null ? void 0 : v.title) || "Select Workspace") + " ", 1),
                      S(n, { class: "nav-arrow" }, {
                        default: g(() => [
                          S(ee(Oe))
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }),
                _: 1
              })) : K("", !0),
              t.showWorkspaceSelector ? (_(), O("span", Ns, "/")) : K("", !0),
              t.showSecondaryNavigation ? (_(), Z(Q, {
                key: 2,
                trigger: "hover"
              }, {
                dropdown: g(() => [
                  S(j, null, {
                    default: g(() => [
                      (_(!0), O(ve, null, _e(M.value, (v) => (_(), Z(L, {
                        key: v.label,
                        class: me({ active: v.active })
                      }, {
                        default: g(() => [
                          l("a", {
                            href: Be(v),
                            class: "nav-link",
                            onClick: ne((ie) => De(v), ["prevent"])
                          }, D(v.label), 9, Ts)
                        ]),
                        _: 2
                      }, 1032, ["class"]))), 128))
                    ]),
                    _: 1
                  })
                ]),
                default: g(() => [
                  l("span", Ms, [
                    Y(D(Me.value) + " ", 1),
                    S(n, { class: "nav-arrow" }, {
                      default: g(() => [
                        S(ee(Oe))
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })) : K("", !0)
            ])
          ])) : K("", !0),
          l("div", Vs, [
            S(Q, {
              onCommand: de,
              trigger: "click",
              placement: "bottom-end"
            }, {
              dropdown: g(() => [
                S(j, null, {
                  default: g(() => [
                    S(L, null, {
                      default: g(() => [
                        l("a", {
                          href: "/profile",
                          class: "nav-link",
                          onClick: e[0] || (e[0] = ne((v) => de("profile"), ["prevent"]))
                        }, "Profile Settings")
                      ]),
                      _: 1
                    }),
                    t.showWorkspaceSelector ? (_(), Z(L, { key: 0 }, {
                      default: g(() => [
                        l("a", {
                          href: "#switch-workspace",
                          class: "nav-link",
                          onClick: e[1] || (e[1] = ne((v) => de("workspaces"), ["prevent"]))
                        }, "Switch Workspace")
                      ]),
                      _: 1
                    })) : K("", !0),
                    S(L, { divided: "" }, {
                      default: g(() => [
                        l("a", {
                          href: "#signout",
                          class: "nav-link",
                          onClick: e[2] || (e[2] = ne((v) => de("logout"), ["prevent"]))
                        }, "Sign Out")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              default: g(() => [
                l("div", Ds, [
                  l("div", Bs, [
                    l("span", zs, D(E.value.name), 1)
                  ]),
                  l("div", Fs, [
                    E.value.avatar_url ? (_(), O("img", {
                      key: 0,
                      src: E.value.avatar_url,
                      alt: E.value.name
                    }, null, 8, Hs)) : (_(), O("span", Js, D(E.value.initials), 1))
                  ])
                ])
              ]),
              _: 1
            })
          ])
        ])) : (_(), O("div", Gs, [
          l("div", Ks, [
            l("div", Ys, [
              l("a", Xs, [
                t.customLogo ? (_(), O("img", {
                  key: 0,
                  src: t.customLogo,
                  alt: "AIWorkspace",
                  class: "logo-image"
                }, null, 8, Zs)) : (_(), O("div", qs, [...e[18] || (e[18] = [
                  l("span", { class: "logo-text" }, "AI Workspace", -1)
                ])]))
              ])
            ])
          ]),
          e[20] || (e[20] = l("div", { class: "header-center" }, [
            l("span", { class: "welcome-text" }, "Welcome to AI Workspace")
          ], -1)),
          l("div", js, [
            S(ke, {
              type: "primary",
              size: "large",
              class: "login-button",
              onClick: e[3] || (e[3] = (v) => C.value = !0)
            }, {
              default: g(() => [
                S(n, null, {
                  default: g(() => [
                    S(ee(rs))
                  ]),
                  _: 1
                }),
                e[19] || (e[19] = Y(" Login / Signup ", -1))
              ]),
              _: 1
            })
          ])
        ])),
        X.value && t.showWorkspaceSelector ? (_(), Z(Ge, {
          key: 4,
          modelValue: i.value,
          "onUpdate:modelValue": e[5] || (e[5] = (v) => i.value = v),
          title: "Switch Workspace",
          width: "500px",
          onClose: e[6] || (e[6] = (v) => i.value = !1)
        }, {
          footer: g(() => [
            S(ke, {
              onClick: e[4] || (e[4] = (v) => i.value = !1)
            }, {
              default: g(() => [...e[21] || (e[21] = [
                Y("Cancel", -1)
              ])]),
              _: 1
            }),
            S(ke, {
              type: "primary",
              onClick: ze
            }, {
              default: g(() => [...e[22] || (e[22] = [
                Y("Create New Workspace", -1)
              ])]),
              _: 1
            })
          ]),
          default: g(() => [
            l("div", Qs, [
              (_(!0), O(ve, null, _e(P.value, (v) => {
                var ie, Pe;
                return _(), O("div", {
                  key: v.id,
                  class: me(["workspace-item", { active: v.id === ((ie = N.value) == null ? void 0 : ie.id) }]),
                  onClick: (ca) => Ee(v)
                }, [
                  l("div", sa, D(v.children && v.children.length ? "📁" : "📄"), 1),
                  l("div", aa, [
                    l("h3", null, D(v.title), 1),
                    l("p", null, D(v.description), 1),
                    l("span", oa, D(v.hasAccess ? "Active" : "Inactive"), 1)
                  ]),
                  v.id === ((Pe = N.value) == null ? void 0 : Pe.id) ? (_(), O("div", ta, [
                    S(n, null, {
                      default: g(() => [
                        S(ee(es))
                      ]),
                      _: 1
                    })
                  ])) : K("", !0)
                ], 10, ea);
              }), 128))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])) : K("", !0),
        S(vs, {
          modelValue: C.value,
          "onUpdate:modelValue": e[7] || (e[7] = (v) => C.value = v),
          onLoginSuccess: He
        }, null, 8, ["modelValue"])
      ]);
    };
  }
});
const fa = /* @__PURE__ */ Ae(ra, [["__scopeId", "data-v-f830d242"]]), na = { class: "auth-callback" }, la = /* @__PURE__ */ te({
  __name: "AuthCallback",
  setup(s) {
    ue(async () => {
      console.log("[AuthCallback] Component mounted, starting callback processing..."), console.log("[AuthCallback] Current URL:", window.location.href), console.log("[AuthCallback] Current hash:", window.location.hash);
      try {
        await new Promise((y) => setTimeout(y, 500));
        const { data: o, error: c } = await x.auth.getSession();
        if (c) {
          console.error("Error processing callback:", c), a();
          return;
        }
        if (o != null && o.session) {
          const y = o.session.user;
          console.log("OAuth login successful:", y.email), o.session.access_token && J(F, o.session.access_token), o.session.refresh_token && J(H, o.session.refresh_token), oe();
          const I = Ne();
          console.log("[callback] Post-login redirect URL:", I), console.log("[callback] Session storage redirect:", sessionStorage.getItem("post-login-redirect")), console.log("[callback] Local storage redirect:", localStorage.getItem("post-login-redirect"));
          const R = I || "/";
          if (console.log("[callback] Final redirect URL:", R), R.startsWith("/")) {
            const V = window.location.origin, b = `${V}${R}`;
            console.log("[callback] redirecting to:", b, { hostname: window.location.hostname, origin: V }), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
              window.location.href = b;
            }, 100);
          } else
            console.log("[callback] redirecting to absolute URL:", R), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
              window.location.href = R;
            }, 100);
        } else
          a();
      } catch (o) {
        console.error("Error processing callback:", o), a();
      }
    });
    const a = () => {
      const c = window.location.href.replace("/auth/callback", "");
      window.location.href = c;
    };
    return (o, c) => (_(), O("div", na, [...c[0] || (c[0] = [
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
const ka = /* @__PURE__ */ Ae(la, [["__scopeId", "data-v-acdf6325"]]);
function ia() {
  const s = () => {
    const c = window.location.hash, y = window.location.pathname, I = window.location.search;
    return c.includes("access_token=") || c.includes("refresh_token=") || I.includes("access_token=") || I.includes("refresh_token=") || y.includes("/auth/callback") || c.includes("#/auth/callback");
  }, a = async (c) => {
    const y = c.user;
    console.log("[UniversalCallback] OAuth login successful:", y.email), c.access_token && setSessionCookie(ACCESS_COOKIE, c.access_token), c.refresh_token && setSessionCookie(REFRESH_COOKIE, c.refresh_token), syncCookiesToLocalStorage();
    const I = getPostLoginBase();
    console.log("[UniversalCallback] Post-login redirect URL:", I), console.log("[UniversalCallback] Session storage redirect:", sessionStorage.getItem("post-login-redirect")), console.log("[UniversalCallback] Local storage redirect:", localStorage.getItem("post-login-redirect"));
    const R = I || "/";
    return console.log("[UniversalCallback] Final redirect URL:", R), sessionStorage.removeItem("post-login-redirect"), localStorage.removeItem("post-login-redirect"), setTimeout(() => {
      if (R.startsWith("/")) {
        const b = `${window.location.origin}${R}`;
        console.log("[UniversalCallback] redirecting to:", b), window.location.href = b;
      } else
        console.log("[UniversalCallback] redirecting to absolute URL:", R), window.location.href = R;
    }, 100), !0;
  }, o = async () => {
    if (!s())
      return !1;
    console.log("[UniversalCallback] Processing OAuth callback..."), console.log("[UniversalCallback] Current URL:", window.location.href), console.log("[UniversalCallback] Current hash:", window.location.hash);
    try {
      const { supabase: c } = await Promise.resolve().then(() => cs), { setSessionCookie: y, syncCookiesToLocalStorage: I, ACCESS_COOKIE: R, REFRESH_COOKIE: V, getPostLoginBase: b } = await Promise.resolve().then(() => ls);
      await new Promise((C) => setTimeout(C, 500));
      const { data: d, error: r } = await c.auth.getSession();
      if (!(d != null && d.session) && (window.location.hash.includes("access_token=") || window.location.search.includes("access_token="))) {
        console.log("[UniversalCallback] No session found, trying to process URL tokens...");
        const { data: C, error: P } = await c.auth.getUser();
        if (C != null && C.user && !P) {
          console.log("[UniversalCallback] Successfully processed URL tokens for user:", C.user.email);
          const { data: W, error: E } = await c.auth.getSession();
          if (W != null && W.session)
            return console.log("[UniversalCallback] Session established after URL processing"), a(W.session);
        }
      }
      const { data: h, error: i } = { data: d, error: r };
      return i ? (console.error("[UniversalCallback] Error processing callback:", i), !1) : h != null && h.session ? await a(h.session) : (console.log("[UniversalCallback] No session found"), !1);
    } catch (c) {
      return console.error("[UniversalCallback] Error processing callback:", c), !1;
    }
  };
  return typeof window < "u" && (s() && o(), window.addEventListener("hashchange", () => {
    s() && o();
  })), {
    isOAuthCallback: s,
    processCallback: o
  };
}
typeof window < "u" && ia();
export {
  F as ACCESS_COOKIE,
  fa as AIWorkspaceHeader,
  ka as AuthCallback,
  Se as LS_ACCESS_KEY,
  be as LS_REFRESH_KEY,
  vs as LoginModal,
  H as REFRESH_COOKIE,
  ns as buildOAuthRedirectUrl,
  he as clearLocalStorageTokens,
  le as clearSessionCookie,
  ye as ensureCrossSubdomainCookies,
  ae as getCookie,
  Ne as getPostLoginBase,
  ga as restoreCrossSubdomainSession,
  $e as restoreSessionWithRetry,
  J as setSessionCookie,
  is as setupAuthStateListener,
  ia as setupUniversalCallback,
  x as supabase,
  oe as syncCookiesToLocalStorage,
  ps as useAuth,
  us as useEnhancedAuth,
  ds as useWorkspaceStore
};
