import { ensureCrossSubdomainCookies as d, ACCESS_COOKIE as r, REFRESH_COOKIE as i, getCookie as f, syncCookiesToLocalStorage as S, broadcastAuthState as E, setSessionCookie as l } from "./utils/authRedirect.js";
function I() {
  try {
    return console.log("[auth][immediate] Setting up immediate cross-subdomain authentication..."), d([r, i]), m().catch((e) => {
      console.log("[auth][immediate] Auth state listener setup deferred:", e.message);
    }), console.log("[auth][immediate] Immediate cross-subdomain authentication setup completed"), !0;
  } catch (e) {
    return console.error("[auth][immediate] Error during immediate cross-subdomain authentication setup:", e), !1;
  }
}
async function R() {
  try {
    console.log("[auth][init] Starting cross-subdomain authentication initialization..."), d([r, i]), m();
    const e = await U(10, 200);
    return e.success ? (console.log("[auth][init] Cross-subdomain authentication initialized successfully"), { success: !0, session: e.session }) : (console.log("[auth][init] Cross-subdomain authentication initialization completed (no active session)"), { success: !1, error: e.error });
  } catch (e) {
    return console.error("[auth][init] Error during cross-subdomain authentication initialization:", e), { success: !1, error: e };
  }
}
async function M() {
  try {
    d([r, i]);
    const e = f(r), s = f(i);
    if (e && s) {
      const n = await b(), { data: { session: a } } = await n.auth.getSession();
      if (!a) {
        const { data: o, error: h } = await n.auth.setSession({ access_token: e, refresh_token: s });
        h ? console.log("[auth][restore] error", h) : console.log("[auth][restore] done", !!o.session);
      }
    } else
      console.log("[auth][restore] no cookies present");
    S();
  } catch (e) {
    console.log("[auth][restore] exception", e);
  }
}
let A = !1;
async function m() {
  if (A) {
    console.log("[auth][listener] Auth state listener already set up, skipping...");
    return;
  }
  console.log("[auth][listener] Setting up auth state listener...");
  try {
    (await b()).auth.onAuthStateChange(async (s, n) => {
      var a, o;
      switch (console.log("[auth][listener] Auth state changed:", s, !!n), s) {
        case "TOKEN_REFRESHED":
          console.log("[auth][listener] Token refreshed successfully"), n && (l(r, n.access_token, 60 * 60 * 24 * 365), l(i, n.refresh_token, 60 * 60 * 24 * 365), S(), E({
            type: "TOKEN_REFRESHED",
            timestamp: Date.now(),
            userId: (a = n.user) == null ? void 0 : a.id,
            accessToken: n.access_token,
            refreshToken: n.refresh_token
          }));
          break;
        case "SIGNED_IN":
          console.log("[auth][listener] User signed in"), n && (l(r, n.access_token, 60 * 60 * 24 * 365), l(i, n.refresh_token, 60 * 60 * 24 * 365), S(), E({
            type: "SIGNED_IN",
            timestamp: Date.now(),
            userId: (o = n.user) == null ? void 0 : o.id,
            accessToken: n.access_token,
            refreshToken: n.refresh_token
          }));
          break;
        case "SIGNED_OUT":
          console.log("[auth][listener] User signed out"), E({
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
    }), A = !0, console.log("[auth][listener] Auth state listener set up successfully");
  } catch (e) {
    console.warn("[auth][listener] Failed to setup auth state listener:", e);
    const s = e instanceof Error ? e.message : String(e);
    s && s.includes("Missing configuration") && (console.log("[auth][listener] Supabase not configured yet, will retry when configured"), A = !1);
  }
}
async function U(e = 10, s = 200) {
  console.log("[auth][restore] Starting enhanced session restoration...");
  for (let n = 1; n <= e; n++)
    try {
      try {
        const u = await b(), { data: { session: k }, error: _ } = await u.auth.getSession();
        if (k && k.user)
          return console.log("[auth][restore] Active session found on attempt", n), { success: !0, session: k };
        if (_ && _.message && _.message.includes("Missing configuration"))
          return console.log("[auth][restore] Supabase not configured yet, skipping restoration"), { success: !1, error: "Supabase not configured" };
      } catch (u) {
        console.warn("[auth][restore] Error checking existing session:", u);
      }
      d([r, i]);
      const a = f(r), o = f(i);
      if (!a || !o)
        if (console.log(`[auth][restore] Attempt ${n}: Missing cookies (Access: ${!!a}, Refresh: ${!!o})`), n < e) {
          await new Promise((u) => setTimeout(u, s * n));
          continue;
        } else
          return { success: !1, error: "No cookies found after retries" };
      console.log(`[auth][restore] Attempt ${n}: Restoring from cookies...`);
      const h = await b(), { data: g, error: y } = await h.auth.setSession({
        access_token: a,
        refresh_token: o
      });
      if (g.session && g.session.user)
        return console.log("[auth][restore] Session restored successfully!"), l(r, g.session.access_token), l(i, g.session.refresh_token), S(), { success: !0, session: g.session };
      if (y && (console.warn(`[auth][restore] Attempt ${n} failed: ${y.message}`), n === e))
        return { success: !1, error: y };
      await new Promise((u) => setTimeout(u, s));
    } catch (a) {
      if (console.error(`[auth][restore] Attempt ${n} unexpected error:`, a), n === e)
        return { success: !1, error: a };
      await new Promise((o) => setTimeout(o, s));
    }
  return { success: !1, error: "Max retries exceeded" };
}
function K() {
  try {
    return console.log("[auth][domain-change] Handling domain change authentication..."), d([r, i]), m().catch((e) => {
      console.log("[auth][domain-change] Auth state listener setup deferred:", e.message);
    }), U(7, 25).then((e) => {
      e.success ? console.log("[auth][domain-change] Domain change authentication successful") : console.log("[auth][domain-change] Domain change authentication failed:", e.error);
    }).catch((e) => {
      console.error("[auth][domain-change] Domain change authentication error:", e);
    }), console.log("[auth][domain-change] Domain change authentication setup completed"), !0;
  } catch (e) {
    return console.error("[auth][domain-change] Error during domain change authentication setup:", e), !1;
  }
}
async function D() {
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
  return console.error("[Supabase] No Supabase client available, using mock with error handling"), (s, n, a) => (console.warn("[Supabase] Using mock client - Supabase not properly configured"), {
    auth: {
      getSession: async () => (console.warn("[Supabase] Mock getSession called - returning null session"), { data: { session: null }, error: null }),
      setSession: async (o) => (console.warn("[Supabase] Mock setSession called - returning null session"), { data: { session: null }, error: null }),
      signOut: async () => (console.warn("[Supabase] Mock signOut called"), { error: null }),
      signInWithPassword: async (o) => (console.warn("[Supabase] Mock signInWithPassword called"), { data: { session: null, user: null }, error: { message: "Supabase not configured" } }),
      signUp: async (o) => (console.warn("[Supabase] Mock signUp called"), { data: { session: null, user: null }, error: { message: "Supabase not configured" } }),
      signInWithOAuth: async (o) => (console.warn("[Supabase] Mock signInWithOAuth called"), { data: { session: null, user: null }, error: { message: "Supabase not configured" } }),
      resetPasswordForEmail: async (o, h) => (console.warn("[Supabase] Mock resetPasswordForEmail called"), { data: {}, error: { message: "Supabase not configured" } }),
      onAuthStateChange: (o) => (console.warn("[Supabase] Mock onAuthStateChange called"), { data: { subscription: { unsubscribe: () => {
      } } } })
    }
  });
}
let C = null;
function P(e) {
  C = e, console.log("[Supabase] Configuration set by consuming app"), p || T();
}
function w() {
  if (C)
    return C;
  if (typeof window < "u") {
    const e = window.__SUPABASE_URL__, s = window.__SUPABASE_ANON_KEY__;
    if (e && s)
      return { url: e, anonKey: s };
  }
  return null;
}
const O = w();
O || console.warn("[Supabase] No configuration found. Please call configureSupabase() with your credentials.");
let c = null, p = null;
async function T() {
  return p || (p = (async () => {
    try {
      const e = await D(), s = w();
      if (s && s.url && s.anonKey) {
        if (c = e(
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
            await m(), K(), I(), d([r, i]);
          } catch (n) {
            console.warn("[Supabase] Error setting up auth components after init:", n);
          }
      } else
        console.warn("[Supabase] Missing configuration, using fallback client"), c = e("https://placeholder.supabase.co", "placeholder-key");
      return c;
    } catch (e) {
      return console.error("[Supabase] Failed to initialize client:", e), c = (await D())("https://placeholder.supabase.co", "placeholder-key"), c;
    }
  })(), p);
}
const b = async () => {
  if (!c) {
    if (!w())
      throw new Error("[Supabase] Missing configuration. Call configureSupabase({ url, anonKey }) before using the header package.");
    await T();
  }
  return c;
};
typeof window < "u" && (window.addEventListener("error", (e) => {
  e.error && e.error.message && e.error.message.includes("ne is not a function") && (console.warn("[Supabase] Caught TypeError: ne is not a function - this is handled gracefully"), e.preventDefault());
}), window.addEventListener("unhandledrejection", (e) => {
  e.reason && e.reason.message && e.reason.message.includes("ne is not a function") && (console.warn("[Supabase] Caught unhandled promise rejection with TypeError: ne is not a function"), e.preventDefault());
}));
const t = w();
console.log("Supabase Configuration:", {
  url: (t == null ? void 0 : t.url) || "Not configured",
  hasKey: !!(t != null && t.anonKey),
  autoRefreshToken: !0,
  persistSession: !0
});
t != null && t.url && console.log("URL:", t.url.replace(/https:\/\/(.+)\.supabase\.co/, "https://*****.supabase.co"));
console.log("Key configured:", !!(t != null && t.anonKey) && !t.anonKey.includes("your-anon-key"));
console.log("Environment mode:", "production");
export {
  I as a,
  M as b,
  P as c,
  m as d,
  b as g,
  K as h,
  R as i,
  U as r,
  c as s
};
