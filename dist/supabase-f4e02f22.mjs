import { ensureCrossSubdomainCookies as h, ACCESS_COOKIE as i, REFRESH_COOKIE as u, getCookie as f, syncCookiesToLocalStorage as b, setSessionCookie as g } from "./utils/authRedirect.js";
function U() {
  try {
    return console.log("[auth][immediate] Setting up immediate cross-subdomain authentication..."), h([i, u]), m().catch((e) => {
      console.log("[auth][immediate] Auth state listener setup deferred:", e.message);
    }), console.log("[auth][immediate] Immediate cross-subdomain authentication setup completed"), !0;
  } catch (e) {
    return console.error("[auth][immediate] Error during immediate cross-subdomain authentication setup:", e), !1;
  }
}
async function D() {
  try {
    console.log("[auth][init] Starting cross-subdomain authentication initialization..."), h([i, u]), m();
    const e = await C(5, 50);
    return e.success ? (console.log("[auth][init] Cross-subdomain authentication initialized successfully"), { success: !0, session: e.session }) : (console.log("[auth][init] Cross-subdomain authentication initialization completed (no active session)"), { success: !1, error: e.error });
  } catch (e) {
    return console.error("[auth][init] Error during cross-subdomain authentication initialization:", e), { success: !1, error: e };
  }
}
async function N() {
  try {
    h([i, u]);
    const e = f(i), s = f(u);
    if (e && s) {
      const n = await S(), { data: { session: o } } = await n.auth.getSession();
      if (!o) {
        const { data: a, error: l } = await n.auth.setSession({ access_token: e, refresh_token: s });
        l ? console.log("[auth][restore] error", l) : console.log("[auth][restore] done", !!a.session);
      }
    } else
      console.log("[auth][restore] no cookies present");
    b();
  } catch (e) {
    console.log("[auth][restore] exception", e);
  }
}
let k = !1;
async function m() {
  if (k) {
    console.log("[auth][listener] Auth state listener already set up, skipping...");
    return;
  }
  console.log("[auth][listener] Setting up auth state listener...");
  try {
    (await S()).auth.onAuthStateChange(async (s, n) => {
      switch (console.log("[auth][listener] Auth state changed:", s, !!n), s) {
        case "TOKEN_REFRESHED":
          console.log("[auth][listener] Token refreshed successfully"), n && (g(i, n.access_token, 60 * 60 * 24 * 365), g(u, n.refresh_token, 60 * 60 * 24 * 365), b());
          break;
        case "SIGNED_IN":
          console.log("[auth][listener] User signed in"), n && (g(i, n.access_token, 60 * 60 * 24 * 365), g(u, n.refresh_token, 60 * 60 * 24 * 365), b());
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
    }), k = !0, console.log("[auth][listener] Auth state listener set up successfully");
  } catch (e) {
    console.warn("[auth][listener] Failed to setup auth state listener:", e), e.message && e.message.includes("Missing configuration") && (console.log("[auth][listener] Supabase not configured yet, will retry when configured"), k = !1);
  }
}
async function C(e = 5, s = 100) {
  var n;
  for (let o = 1; o <= e; o++)
    try {
      console.log(`[auth][restore] Attempt ${o}/${e}`);
      let a = null;
      try {
        const c = await (await S()).auth.getSession();
        a = (n = c == null ? void 0 : c.data) == null ? void 0 : n.session;
      } catch (t) {
        if (console.warn("[auth][restore] Error getting Supabase session:", t), t.message && t.message.includes("Missing configuration"))
          return console.log("[auth][restore] Supabase not configured yet, skipping restoration"), { success: !1, error: "Supabase not configured" };
      }
      if (a && a.user)
        return console.log("[auth][restore] Active session found"), { success: !0, session: a };
      o > 1 && (console.log("[auth][restore] Re-syncing cross-subdomain cookies..."), h([i, u]), await new Promise((t) => setTimeout(t, s * o)));
      const l = f(i), y = f(u);
      if (console.log(`[auth][restore] Cookie check - Access: ${!!l}, Refresh: ${!!y}`), l && y) {
        console.log("[auth][restore] Attempting to restore session from cookies...");
        try {
          const t = await S(), { data: c, error: E } = await t.auth.setSession({
            access_token: l,
            refresh_token: y
          });
          if (E) {
            if (console.log(`[auth][restore] Attempt ${o} failed:`, E.message), o === e)
              return { success: !1, error: E };
            continue;
          }
          if (c.session)
            return console.log("[auth][restore] Session restored successfully"), g(i, c.session.access_token, 60 * 60 * 24 * 365), g(u, c.session.refresh_token, 60 * 60 * 24 * 365), b(), { success: !0, session: c.session };
        } catch (t) {
          if (console.warn(`[auth][restore] setSession error on attempt ${o}:`, t), t.message && t.message.includes("Missing configuration"))
            return console.log("[auth][restore] Supabase not configured yet, skipping restoration"), { success: !1, error: "Supabase not configured" };
          if (o === e)
            return { success: !1, error: t };
          continue;
        }
      } else if (console.log(`[auth][restore] Attempt ${o} - No cookies found`), o === e)
        return { success: !1, error: "No valid session or cookies" };
      o < e && await new Promise((t) => setTimeout(t, s * o));
    } catch (a) {
      if (console.log(`[auth][restore] Attempt ${o} exception:`, a), o === e)
        return { success: !1, error: a };
    }
  return console.log("[auth][restore] All attempts failed"), { success: !1, error: "All restoration attempts failed" };
}
function I() {
  try {
    return console.log("[auth][domain-change] Handling domain change authentication..."), h([i, u]), m().catch((e) => {
      console.log("[auth][domain-change] Auth state listener setup deferred:", e.message);
    }), C(7, 25).then((e) => {
      e.success ? console.log("[auth][domain-change] Domain change authentication successful") : console.log("[auth][domain-change] Domain change authentication failed:", e.error);
    }).catch((e) => {
      console.error("[auth][domain-change] Domain change authentication error:", e);
    }), console.log("[auth][domain-change] Domain change authentication setup completed"), !0;
  } catch (e) {
    return console.error("[auth][domain-change] Error during domain change authentication setup:", e), !1;
  }
}
async function A() {
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
  return console.error("[Supabase] No Supabase client available, using mock with error handling"), (s, n, o) => (console.warn("[Supabase] Using mock client - Supabase not properly configured"), {
    auth: {
      getSession: async () => (console.warn("[Supabase] Mock getSession called - returning null session"), { data: { session: null }, error: null }),
      setSession: async (a) => (console.warn("[Supabase] Mock setSession called - returning null session"), { data: { session: null }, error: null }),
      signOut: async () => (console.warn("[Supabase] Mock signOut called"), { error: null }),
      signInWithPassword: async (a) => (console.warn("[Supabase] Mock signInWithPassword called"), { data: { session: null, user: null }, error: { message: "Supabase not configured" } }),
      signUp: async (a) => (console.warn("[Supabase] Mock signUp called"), { data: { session: null, user: null }, error: { message: "Supabase not configured" } }),
      signInWithOAuth: async (a) => (console.warn("[Supabase] Mock signInWithOAuth called"), { data: { session: null, user: null }, error: { message: "Supabase not configured" } }),
      resetPasswordForEmail: async (a, l) => (console.warn("[Supabase] Mock resetPasswordForEmail called"), { data: {}, error: { message: "Supabase not configured" } }),
      onAuthStateChange: (a) => (console.warn("[Supabase] Mock onAuthStateChange called"), { data: { subscription: { unsubscribe: () => {
      } } } })
    }
  });
}
let _ = null;
function M(e) {
  _ = e, console.log("[Supabase] Configuration set by consuming app"), p || T();
}
function w() {
  if (_)
    return _;
  if (typeof window < "u") {
    const e = window.__SUPABASE_URL__, s = window.__SUPABASE_ANON_KEY__;
    if (e && s)
      return { url: e, anonKey: s };
  }
  return null;
}
const K = w();
K || console.warn("[Supabase] No configuration found. Please call configureSupabase() with your credentials.");
let d = null, p = null;
async function T() {
  return p || (p = (async () => {
    try {
      const e = await A(), s = w();
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
            await m(), I(), U(), h([i, u]);
          } catch (n) {
            console.warn("[Supabase] Error setting up auth components after init:", n);
          }
      } else
        console.warn("[Supabase] Missing configuration, using fallback client"), d = e("https://placeholder.supabase.co", "placeholder-key");
      return d;
    } catch (e) {
      return console.error("[Supabase] Failed to initialize client:", e), d = (await A())("https://placeholder.supabase.co", "placeholder-key"), d;
    }
  })(), p);
}
const S = async () => {
  if (!d) {
    if (!w())
      throw new Error("[Supabase] Missing configuration. Call configureSupabase({ url, anonKey }) before using the header package.");
    await T();
  }
  return d;
};
typeof window < "u" && (window.addEventListener("error", (e) => {
  e.error && e.error.message && e.error.message.includes("ne is not a function") && (console.warn("[Supabase] Caught TypeError: ne is not a function - this is handled gracefully"), e.preventDefault());
}), window.addEventListener("unhandledrejection", (e) => {
  e.reason && e.reason.message && e.reason.message.includes("ne is not a function") && (console.warn("[Supabase] Caught unhandled promise rejection with TypeError: ne is not a function"), e.preventDefault());
}));
const r = w();
console.log("Supabase Configuration:", {
  url: (r == null ? void 0 : r.url) || "Not configured",
  hasKey: !!(r != null && r.anonKey),
  autoRefreshToken: !0,
  persistSession: !0
});
r != null && r.url && console.log("URL:", r.url.replace(/https:\/\/(.+)\.supabase\.co/, "https://*****.supabase.co"));
console.log("Key configured:", !!(r != null && r.anonKey) && !r.anonKey.includes("your-anon-key"));
console.log("Environment mode:", "production");
export {
  U as a,
  N as b,
  M as c,
  m as d,
  S as g,
  I as h,
  D as i,
  C as r,
  d as s
};
