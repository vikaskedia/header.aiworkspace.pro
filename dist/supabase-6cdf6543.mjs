import { ensureCrossSubdomainCookies as S, ACCESS_COOKIE as a, REFRESH_COOKIE as r, getCookie as f, syncCookiesToLocalStorage as _, broadcastAuthState as U, setSessionCookie as p } from "./utils/authRedirect.js";
let E = null, k = null, K = !1, m = null;
function x() {
  return K && m !== null ? (console.log("[auth][ready] Auth already ready, returning cached result"), Promise.resolve(m)) : k ? (console.log("[auth][ready] Waiting for existing auth ready promise"), k) : (console.log("[auth][ready] Creating new auth ready promise"), k = new Promise((e) => {
    E = e;
  }), k);
}
function I(e, s) {
  console.log("[auth][ready] Signaling auth ready:", { isAuthenticated: e, hasSession: !!s }), m = { isAuthenticated: e, session: s }, K = !0, E && (E(m), E = null), typeof window < "u" && window.dispatchEvent(new CustomEvent("auth-ready", {
    detail: m
  }));
}
function B() {
  return K;
}
function G() {
  return m;
}
function L() {
  try {
    return console.log("[auth][immediate] Setting up immediate cross-subdomain authentication..."), S([a, r]), C().catch((e) => {
      console.log("[auth][immediate] Auth state listener setup deferred:", e.message);
    }), console.log("[auth][immediate] Immediate cross-subdomain authentication setup completed"), !0;
  } catch (e) {
    return console.error("[auth][immediate] Error during immediate cross-subdomain authentication setup:", e), !1;
  }
}
async function H() {
  try {
    console.log("[auth][init] Starting cross-subdomain authentication initialization..."), S([a, r]), C();
    const e = await M(10, 200);
    return e.success ? (console.log("[auth][init] Cross-subdomain authentication initialized successfully"), I(!0, e.session), { success: !0, session: e.session }) : (console.log("[auth][init] Cross-subdomain authentication initialization completed (no active session)"), I(!1, null), { success: !1, error: e.error });
  } catch (e) {
    return console.error("[auth][init] Error during cross-subdomain authentication initialization:", e), I(!1, null), { success: !1, error: e };
  }
}
async function V() {
  try {
    S([a, r]);
    const e = f(a), s = f(r);
    if (e && s) {
      const n = await A(), { data: { session: u } } = await n.auth.getSession();
      if (!u) {
        const { data: t, error: h } = await n.auth.setSession({ access_token: e, refresh_token: s });
        h ? console.log("[auth][restore] error", h) : console.log("[auth][restore] done", !!t.session);
      }
    } else
      console.log("[auth][restore] no cookies present");
    _();
  } catch (e) {
    console.log("[auth][restore] exception", e);
  }
}
let N = !1;
async function C() {
  if (N) {
    console.log("[auth][listener] Auth state listener already set up, skipping...");
    return;
  }
  console.log("[auth][listener] Setting up auth state listener...");
  try {
    (await A()).auth.onAuthStateChange(async (s, n) => {
      var u, t;
      switch (console.log("[auth][listener] Auth state changed:", s, !!n), s) {
        case "TOKEN_REFRESHED":
          console.log("[auth][listener] Token refreshed successfully"), n && (p(a, n.access_token, 60 * 60 * 24 * 365), p(r, n.refresh_token, 60 * 60 * 24 * 365), _(), U({
            type: "TOKEN_REFRESHED",
            timestamp: Date.now(),
            userId: (u = n.user) == null ? void 0 : u.id,
            accessToken: n.access_token,
            refreshToken: n.refresh_token
          }));
          break;
        case "SIGNED_IN":
          console.log("[auth][listener] User signed in"), n && (p(a, n.access_token, 60 * 60 * 24 * 365), p(r, n.refresh_token, 60 * 60 * 24 * 365), _(), U({
            type: "SIGNED_IN",
            timestamp: Date.now(),
            userId: (t = n.user) == null ? void 0 : t.id,
            accessToken: n.access_token,
            refreshToken: n.refresh_token
          }));
          break;
        case "SIGNED_OUT":
          console.log("[auth][listener] User signed out"), U({
            type: "SIGNED_OUT",
            timestamp: Date.now()
          }), typeof window < "u" && window.dispatchEvent(new CustomEvent("session-logout-detected", {
            detail: { timestamp: /* @__PURE__ */ new Date() }
          }));
          break;
        case "USER_UPDATED":
          console.log("[auth][listener] User updated");
          break;
        default:
          console.log("[auth][listener] Unhandled auth event:", s);
      }
    }), N = !0, console.log("[auth][listener] Auth state listener set up successfully");
  } catch (e) {
    console.warn("[auth][listener] Failed to setup auth state listener:", e);
    const s = e instanceof Error ? e.message : String(e);
    s && s.includes("Missing configuration") && (console.log("[auth][listener] Supabase not configured yet, will retry when configured"), N = !1);
  }
}
async function M(e = 10, s = 200) {
  console.log("[auth][restore] Starting enhanced session restoration...");
  const n = f(a), u = f(r), t = localStorage.getItem("sb-access-token"), h = localStorage.getItem("sb-refresh-token");
  if (!(n || u) && !(t || h))
    return console.log("[auth][restore] No cookies or localStorage tokens found - fast fail (user not logged in)"), { success: !1, error: "No auth tokens found" };
  for (let i = 1; i <= e; i++)
    try {
      try {
        const l = await A(), { data: { session: T }, error: D } = await l.auth.getSession();
        if (T && T.user)
          return console.log("[auth][restore] Active session found on attempt", i), { success: !0, session: T };
        if (D && D.message && D.message.includes("Missing configuration"))
          return console.log("[auth][restore] Supabase not configured yet, skipping restoration"), { success: !1, error: "Supabase not configured" };
      } catch (l) {
        console.warn("[auth][restore] Error checking existing session:", l);
      }
      S([a, r]);
      const g = f(a) || t, w = f(r) || h;
      if (!g || !w) {
        if (console.log(`[auth][restore] Attempt ${i}: Missing tokens (Access: ${!!g}, Refresh: ${!!w})`), i >= 3)
          return console.log("[auth][restore] Tokens disappeared after sync - giving up"), { success: !1, error: "Tokens not found after sync" };
        if (i < e) {
          await new Promise((l) => setTimeout(l, s));
          continue;
        } else
          return { success: !1, error: "No cookies found after retries" };
      }
      console.log(`[auth][restore] Attempt ${i}: Restoring from cookies...`);
      const F = await A(), { data: b, error: c } = await F.auth.setSession({
        access_token: g,
        refresh_token: w
      });
      if (b.session && b.session.user)
        return console.log("[auth][restore] Session restored successfully!"), p(a, b.session.access_token), p(r, b.session.refresh_token), _(), { success: !0, session: b.session };
      if (c) {
        if (console.warn(`[auth][restore] Attempt ${i} failed: ${c.message}`), c.message.includes("Invalid") || c.message.includes("expired") || c.message.includes("revoked"))
          return console.log("[auth][restore] Tokens are invalid - stopping retries"), { success: !1, error: c };
        if (i === e)
          return { success: !1, error: c };
      }
      await new Promise((l) => setTimeout(l, s));
    } catch (g) {
      if (console.error(`[auth][restore] Attempt ${i} unexpected error:`, g), i === e)
        return { success: !1, error: g };
      await new Promise((w) => setTimeout(w, s));
    }
  return { success: !1, error: "Max retries exceeded" };
}
function z() {
  try {
    return console.log("[auth][domain-change] Handling domain change authentication..."), S([a, r]), C().catch((e) => {
      console.log("[auth][domain-change] Auth state listener setup deferred:", e.message);
    }), M(7, 25).then((e) => {
      e.success ? console.log("[auth][domain-change] Domain change authentication successful") : console.log("[auth][domain-change] Domain change authentication failed:", e.error);
    }).catch((e) => {
      console.error("[auth][domain-change] Domain change authentication error:", e);
    }), console.log("[auth][domain-change] Domain change authentication setup completed"), !0;
  } catch (e) {
    return console.error("[auth][domain-change] Error during domain change authentication setup:", e), !1;
  }
}
async function O() {
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
  return console.error("[Supabase] No Supabase client available, using mock with error handling"), (s, n, u) => (console.warn("[Supabase] Using mock client - Supabase not properly configured"), {
    auth: {
      getSession: async () => (console.warn("[Supabase] Mock getSession called - returning null session"), { data: { session: null }, error: null }),
      setSession: async (t) => (console.warn("[Supabase] Mock setSession called - returning null session"), { data: { session: null }, error: null }),
      signOut: async () => (console.warn("[Supabase] Mock signOut called"), { error: null }),
      signInWithPassword: async (t) => (console.warn("[Supabase] Mock signInWithPassword called"), { data: { session: null, user: null }, error: { message: "Supabase not configured" } }),
      signUp: async (t) => (console.warn("[Supabase] Mock signUp called"), { data: { session: null, user: null }, error: { message: "Supabase not configured" } }),
      signInWithOAuth: async (t) => (console.warn("[Supabase] Mock signInWithOAuth called"), { data: { session: null, user: null }, error: { message: "Supabase not configured" } }),
      resetPasswordForEmail: async (t, h) => (console.warn("[Supabase] Mock resetPasswordForEmail called"), { data: {}, error: { message: "Supabase not configured" } }),
      onAuthStateChange: (t) => (console.warn("[Supabase] Mock onAuthStateChange called"), { data: { subscription: { unsubscribe: () => {
      } } } })
    }
  });
}
let P = null;
function Y(e) {
  P = e, console.log("[Supabase] Configuration set by consuming app"), y || v();
}
function R() {
  if (P)
    return P;
  if (typeof window < "u") {
    const e = window.__SUPABASE_URL__, s = window.__SUPABASE_ANON_KEY__;
    if (e && s)
      return { url: e, anonKey: s };
  }
  return null;
}
const $ = R();
$ || console.warn("[Supabase] No configuration found. Please call configureSupabase() with your credentials.");
let d = null, y = null;
async function v() {
  return y || (y = (async () => {
    try {
      const e = await O(), s = R();
      if (s && s.url && s.anonKey) {
        if (d = e(
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
        ), console.log("[Supabase] Client initialized successfully"), typeof window < "u")
          try {
            await C(), z(), L(), S([a, r]);
          } catch (n) {
            console.warn("[Supabase] Error setting up auth components after init:", n);
          }
      } else
        console.warn("[Supabase] Missing configuration, using fallback client"), d = e("https://placeholder.supabase.co", "placeholder-key");
      return d;
    } catch (e) {
      return console.error("[Supabase] Failed to initialize client:", e), d = (await O())("https://placeholder.supabase.co", "placeholder-key"), d;
    }
  })(), y);
}
const A = async () => {
  if (!d) {
    if (!R())
      throw new Error("[Supabase] Missing configuration. Call configureSupabase({ url, anonKey }) before using the header package.");
    await v();
  }
  return d;
};
typeof window < "u" && (window.addEventListener("error", (e) => {
  e.error && e.error.message && e.error.message.includes("ne is not a function") && (console.warn("[Supabase] Caught TypeError: ne is not a function - this is handled gracefully"), e.preventDefault());
}), window.addEventListener("unhandledrejection", (e) => {
  e.reason && e.reason.message && e.reason.message.includes("ne is not a function") && (console.warn("[Supabase] Caught unhandled promise rejection with TypeError: ne is not a function"), e.preventDefault());
}));
const o = R();
console.log("Supabase Configuration:", {
  url: (o == null ? void 0 : o.url) || "Not configured",
  hasKey: !!(o != null && o.anonKey),
  autoRefreshToken: !0,
  persistSession: !0
});
o != null && o.url && console.log("URL:", o.url.replace(/https:\/\/(.+)\.supabase\.co/, "https://*****.supabase.co"));
console.log("Key configured:", !!(o != null && o.anonKey) && !o.anonKey.includes("your-anon-key"));
console.log("Environment mode:", "production");
export {
  B as a,
  G as b,
  Y as c,
  L as d,
  V as e,
  C as f,
  A as g,
  z as h,
  H as i,
  M as r,
  d as s,
  x as w
};
