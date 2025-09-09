import { ensureCrossSubdomainCookies as S, ACCESS_COOKIE as i, REFRESH_COOKIE as u, getCookie as h, syncCookiesToLocalStorage as g, setSessionCookie as p } from "./utils/authRedirect.js";
async function P() {
  try {
    console.log("[auth][init] Starting cross-subdomain authentication initialization..."), S([i, u]), A();
    const e = await U(2, 100);
    return e.success ? (console.log("[auth][init] Cross-subdomain authentication initialized successfully"), { success: !0, session: e.session }) : (console.log("[auth][init] Cross-subdomain authentication initialization completed (no active session)"), { success: !1, error: e.error });
  } catch (e) {
    return console.error("[auth][init] Error during cross-subdomain authentication initialization:", e), { success: !1, error: e };
  }
}
async function N() {
  try {
    S([i, u]);
    const e = h(i), s = h(u);
    if (e && s) {
      const t = await b(), { data: { session: o } } = await t.auth.getSession();
      if (!o) {
        const { data: n, error: c } = await t.auth.setSession({ access_token: e, refresh_token: s });
        c ? console.log("[auth][restore] error", c) : console.log("[auth][restore] done", !!n.session);
      }
    } else
      console.log("[auth][restore] no cookies present");
    g();
  } catch (e) {
    console.log("[auth][restore] exception", e);
  }
}
let _ = !1;
async function A() {
  if (_) {
    console.log("[auth][listener] Auth state listener already set up, skipping...");
    return;
  }
  console.log("[auth][listener] Setting up auth state listener...");
  try {
    (await b()).auth.onAuthStateChange(async (s, t) => {
      switch (console.log("[auth][listener] Auth state changed:", s, !!t), s) {
        case "TOKEN_REFRESHED":
          console.log("[auth][listener] Token refreshed successfully"), t && (p(i, t.access_token, 60 * 60 * 24 * 365), p(u, t.refresh_token, 60 * 60 * 24 * 365), g());
          break;
        case "SIGNED_IN":
          console.log("[auth][listener] User signed in"), t && (p(i, t.access_token, 60 * 60 * 24 * 365), p(u, t.refresh_token, 60 * 60 * 24 * 365), g());
          break;
        case "SIGNED_OUT":
          console.log("[auth][listener] User signed out"), typeof window < "u" && window.dispatchEvent(new CustomEvent("session-logout-detected", {
            detail: { timestamp: /* @__PURE__ */ new Date() }
          }));
          break;
        case "USER_UPDATED":
          console.log("[auth][listener] User updated");
          break;
        default:
          console.log("[auth][listener] Unhandled auth event:", s);
      }
    }), _ = !0, console.log("[auth][listener] Auth state listener set up successfully");
  } catch (e) {
    console.warn("[auth][listener] Failed to setup auth state listener:", e);
  }
}
async function U(e = 3, s = 200) {
  var t;
  for (let o = 1; o <= e; o++)
    try {
      console.log(`[auth][restore] Attempt ${o}/${e}`);
      let n = null;
      try {
        const l = await (await b()).auth.getSession();
        n = (t = l == null ? void 0 : l.data) == null ? void 0 : t.session;
      } catch (r) {
        console.warn("[auth][restore] Error getting Supabase session:", r);
      }
      if (n && n.user)
        return console.log("[auth][restore] Active session found"), { success: !0, session: n };
      o > 1 && (console.log("[auth][restore] Re-syncing cross-subdomain cookies..."), S([i, u]), await new Promise((r) => setTimeout(r, s * o)));
      const c = h(i), w = h(u);
      if (console.log(`[auth][restore] Cookie check - Access: ${!!c}, Refresh: ${!!w}`), c && w) {
        console.log("[auth][restore] Attempting to restore session from cookies...");
        try {
          const r = await b(), { data: l, error: y } = await r.auth.setSession({
            access_token: c,
            refresh_token: w
          });
          if (y) {
            if (console.log(`[auth][restore] Attempt ${o} failed:`, y.message), o === e)
              return { success: !1, error: y };
            continue;
          }
          if (l.session)
            return console.log("[auth][restore] Session restored successfully"), p(i, l.session.access_token, 60 * 60 * 24 * 365), p(u, l.session.refresh_token, 60 * 60 * 24 * 365), g(), { success: !0, session: l.session };
        } catch (r) {
          if (console.warn(`[auth][restore] setSession error on attempt ${o}:`, r), o === e)
            return { success: !1, error: r };
          continue;
        }
      } else if (console.log(`[auth][restore] Attempt ${o} - No cookies found`), o === e)
        return { success: !1, error: "No valid session or cookies" };
      o < e && await new Promise((r) => setTimeout(r, s * o));
    } catch (n) {
      if (console.log(`[auth][restore] Attempt ${o} exception:`, n), o === e)
        return { success: !1, error: n };
    }
  return console.log("[auth][restore] All attempts failed"), { success: !1, error: "All restoration attempts failed" };
}
async function E() {
  var e;
  try {
    const { createClient: s } = await import("@supabase/supabase-js");
    return console.log("[Supabase] Successfully imported @supabase/supabase-js"), s;
  } catch (s) {
    console.warn("[Supabase] Failed to import @supabase/supabase-js:", s);
  }
  if (typeof window < "u") {
    if ((e = window.supabase) != null && e.createClient)
      return console.log("[Supabase] Using global Supabase client"), window.supabase.createClient;
    if (window.createClient)
      return console.log("[Supabase] Using global createClient function"), window.createClient;
  }
  try {
    if (typeof require < "u") {
      const { createClient: s } = require("@supabase/supabase-js");
      return console.log("[Supabase] Successfully required @supabase/supabase-js"), s;
    }
  } catch (s) {
    console.warn("[Supabase] Failed to require @supabase/supabase-js:", s);
  }
  return console.error("[Supabase] No Supabase client available, using mock with error handling"), (s, t, o) => (console.warn("[Supabase] Using mock client - Supabase not properly configured"), {
    auth: {
      getSession: async () => (console.warn("[Supabase] Mock getSession called - returning null session"), { data: { session: null }, error: null }),
      setSession: async (n) => (console.warn("[Supabase] Mock setSession called - returning null session"), { data: { session: null }, error: null }),
      signOut: async () => (console.warn("[Supabase] Mock signOut called"), { error: null }),
      signInWithPassword: async (n) => (console.warn("[Supabase] Mock signInWithPassword called"), { data: { session: null, user: null }, error: { message: "Supabase not configured" } }),
      signUp: async (n) => (console.warn("[Supabase] Mock signUp called"), { data: { session: null, user: null }, error: { message: "Supabase not configured" } }),
      signInWithOAuth: async (n) => (console.warn("[Supabase] Mock signInWithOAuth called"), { data: { session: null, user: null }, error: { message: "Supabase not configured" } }),
      resetPasswordForEmail: async (n, c) => (console.warn("[Supabase] Mock resetPasswordForEmail called"), { data: {}, error: { message: "Supabase not configured" } }),
      onAuthStateChange: (n) => (console.warn("[Supabase] Mock onAuthStateChange called"), { data: { subscription: { unsubscribe: () => {
      } } } })
    }
  });
}
let k = null;
function T(e) {
  k = e, console.log("[Supabase] Configuration set by consuming app");
}
function m() {
  if (k)
    return k;
  if (typeof window < "u") {
    const e = window.__SUPABASE_URL__, s = window.__SUPABASE_ANON_KEY__;
    if (e && s)
      return { url: e, anonKey: s };
  }
  return null;
}
const O = m();
O || console.warn("[Supabase] No configuration found. Please call configureSupabase() with your credentials.");
let d = null, f = null;
async function C() {
  return f || (f = (async () => {
    try {
      const e = await E(), s = m();
      return s && s.url && s.anonKey ? (d = e(
        s.url,
        s.anonKey,
        {
          db: {
            schema: "public"
          },
          auth: {
            storageKey: "sb-auth-token-shared",
            // Use unique storage key to avoid conflicts
            storage: typeof window < "u" ? localStorage : void 0,
            autoRefreshToken: !0,
            persistSession: !0
          }
        }
      ), console.log("[Supabase] Client initialized successfully")) : (console.warn("[Supabase] Missing configuration, using fallback client"), d = e("https://placeholder.supabase.co", "placeholder-key")), d;
    } catch (e) {
      return console.error("[Supabase] Failed to initialize client:", e), d = (await E())("https://placeholder.supabase.co", "placeholder-key"), d;
    }
  })(), f);
}
C();
const b = async () => (d || await C(), d);
if (typeof window < "u")
  try {
    S([i, u]), A().catch((e) => {
      console.warn("[Supabase] Error setting up auth state listener:", e);
    });
  } catch (e) {
    console.warn("[Supabase] Error during cross-subdomain setup:", e);
  }
typeof window < "u" && (window.addEventListener("error", (e) => {
  e.error && e.error.message && e.error.message.includes("ne is not a function") && (console.warn("[Supabase] Caught TypeError: ne is not a function - this is handled gracefully"), e.preventDefault());
}), window.addEventListener("unhandledrejection", (e) => {
  e.reason && e.reason.message && e.reason.message.includes("ne is not a function") && (console.warn("[Supabase] Caught unhandled promise rejection with TypeError: ne is not a function"), e.preventDefault());
}));
const a = m();
console.log("Supabase Configuration:", {
  url: (a == null ? void 0 : a.url) || "Not configured",
  hasKey: !!(a != null && a.anonKey),
  autoRefreshToken: !0,
  persistSession: !0
});
a != null && a.url && console.log("URL:", a.url.replace(/https:\/\/(.+)\.supabase\.co/, "https://*****.supabase.co"));
console.log("Key configured:", !!(a != null && a.anonKey) && !a.anonKey.includes("your-anon-key"));
console.log("Environment mode:", "production");
export {
  N as a,
  A as b,
  T as c,
  b as g,
  P as i,
  U as r,
  d as s
};
