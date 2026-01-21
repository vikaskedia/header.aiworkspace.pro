import { ensureCrossSubdomainCookies as d, ACCESS_COOKIE as t, REFRESH_COOKIE as r, getCookie as f, syncCookiesToLocalStorage as b, setSessionCookie as l } from "./utils/authRedirect.js";
function K() {
  try {
    return console.log("[auth][immediate] Setting up immediate cross-subdomain authentication..."), d([t, r]), m().catch((e) => {
      console.log("[auth][immediate] Auth state listener setup deferred:", e.message);
    }), console.log("[auth][immediate] Immediate cross-subdomain authentication setup completed"), !0;
  } catch (e) {
    return console.error("[auth][immediate] Error during immediate cross-subdomain authentication setup:", e), !1;
  }
}
async function R() {
  try {
    console.log("[auth][init] Starting cross-subdomain authentication initialization..."), d([t, r]), m();
    const e = await U(10, 200);
    return e.success ? (console.log("[auth][init] Cross-subdomain authentication initialized successfully"), { success: !0, session: e.session }) : (console.log("[auth][init] Cross-subdomain authentication initialization completed (no active session)"), { success: !1, error: e.error });
  } catch (e) {
    return console.error("[auth][init] Error during cross-subdomain authentication initialization:", e), { success: !1, error: e };
  }
}
async function T() {
  try {
    d([t, r]);
    const e = f(t), s = f(r);
    if (e && s) {
      const n = await S(), { data: { session: i } } = await n.auth.getSession();
      if (!i) {
        const { data: a, error: h } = await n.auth.setSession({ access_token: e, refresh_token: s });
        h ? console.log("[auth][restore] error", h) : console.log("[auth][restore] done", !!a.session);
      }
    } else
      console.log("[auth][restore] no cookies present");
    b();
  } catch (e) {
    console.log("[auth][restore] exception", e);
  }
}
let E = !1;
async function m() {
  if (E) {
    console.log("[auth][listener] Auth state listener already set up, skipping...");
    return;
  }
  console.log("[auth][listener] Setting up auth state listener...");
  try {
    (await S()).auth.onAuthStateChange(async (s, n) => {
      switch (console.log("[auth][listener] Auth state changed:", s, !!n), s) {
        case "TOKEN_REFRESHED":
          console.log("[auth][listener] Token refreshed successfully"), n && (l(t, n.access_token, 60 * 60 * 24 * 365), l(r, n.refresh_token, 60 * 60 * 24 * 365), b());
          break;
        case "SIGNED_IN":
          console.log("[auth][listener] User signed in"), n && (l(t, n.access_token, 60 * 60 * 24 * 365), l(r, n.refresh_token, 60 * 60 * 24 * 365), b());
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
    }), E = !0, console.log("[auth][listener] Auth state listener set up successfully");
  } catch (e) {
    console.warn("[auth][listener] Failed to setup auth state listener:", e), e.message && e.message.includes("Missing configuration") && (console.log("[auth][listener] Supabase not configured yet, will retry when configured"), E = !1);
  }
}
async function U(e = 10, s = 200) {
  console.log("[auth][restore] Starting enhanced session restoration...");
  for (let n = 1; n <= e; n++)
    try {
      try {
        const u = await S(), { data: { session: k }, error: _ } = await u.auth.getSession();
        if (k && k.user)
          return console.log("[auth][restore] Active session found on attempt", n), { success: !0, session: k };
        if (_ && _.message && _.message.includes("Missing configuration"))
          return console.log("[auth][restore] Supabase not configured yet, skipping restoration"), { success: !1, error: "Supabase not configured" };
      } catch (u) {
        console.warn("[auth][restore] Error checking existing session:", u);
      }
      d([t, r]);
      const i = f(t), a = f(r);
      if (!i || !a)
        if (console.log(`[auth][restore] Attempt ${n}: Missing cookies (Access: ${!!i}, Refresh: ${!!a})`), n < e) {
          await new Promise((u) => setTimeout(u, s * n));
          continue;
        } else
          return { success: !1, error: "No cookies found after retries" };
      console.log(`[auth][restore] Attempt ${n}: Restoring from cookies...`);
      const h = await S(), { data: g, error: y } = await h.auth.setSession({
        access_token: i,
        refresh_token: a
      });
      if (g.session && g.session.user)
        return console.log("[auth][restore] Session restored successfully!"), l(t, g.session.access_token), l(r, g.session.refresh_token), b(), { success: !0, session: g.session };
      if (y && (console.warn(`[auth][restore] Attempt ${n} failed: ${y.message}`), n === e))
        return { success: !1, error: y };
      await new Promise((u) => setTimeout(u, s));
    } catch (i) {
      if (console.error(`[auth][restore] Attempt ${n} unexpected error:`, i), n === e)
        return { success: !1, error: i };
      await new Promise((a) => setTimeout(a, s));
    }
  return { success: !1, error: "Max retries exceeded" };
}
function O() {
  try {
    return console.log("[auth][domain-change] Handling domain change authentication..."), d([t, r]), m().catch((e) => {
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
async function C() {
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
  return console.error("[Supabase] No Supabase client available, using mock with error handling"), (s, n, i) => (console.warn("[Supabase] Using mock client - Supabase not properly configured"), {
    auth: {
      getSession: async () => (console.warn("[Supabase] Mock getSession called - returning null session"), { data: { session: null }, error: null }),
      setSession: async (a) => (console.warn("[Supabase] Mock setSession called - returning null session"), { data: { session: null }, error: null }),
      signOut: async () => (console.warn("[Supabase] Mock signOut called"), { error: null }),
      signInWithPassword: async (a) => (console.warn("[Supabase] Mock signInWithPassword called"), { data: { session: null, user: null }, error: { message: "Supabase not configured" } }),
      signUp: async (a) => (console.warn("[Supabase] Mock signUp called"), { data: { session: null, user: null }, error: { message: "Supabase not configured" } }),
      signInWithOAuth: async (a) => (console.warn("[Supabase] Mock signInWithOAuth called"), { data: { session: null, user: null }, error: { message: "Supabase not configured" } }),
      resetPasswordForEmail: async (a, h) => (console.warn("[Supabase] Mock resetPasswordForEmail called"), { data: {}, error: { message: "Supabase not configured" } }),
      onAuthStateChange: (a) => (console.warn("[Supabase] Mock onAuthStateChange called"), { data: { subscription: { unsubscribe: () => {
      } } } })
    }
  });
}
let A = null;
function I(e) {
  A = e, console.log("[Supabase] Configuration set by consuming app"), p || D();
}
function w() {
  if (A)
    return A;
  if (typeof window < "u") {
    const e = window.__SUPABASE_URL__, s = window.__SUPABASE_ANON_KEY__;
    if (e && s)
      return { url: e, anonKey: s };
  }
  return null;
}
const P = w();
P || console.warn("[Supabase] No configuration found. Please call configureSupabase() with your credentials.");
let c = null, p = null;
async function D() {
  return p || (p = (async () => {
    try {
      const e = await C(), s = w();
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
            await m(), O(), K(), d([t, r]);
          } catch (n) {
            console.warn("[Supabase] Error setting up auth components after init:", n);
          }
      } else
        console.warn("[Supabase] Missing configuration, using fallback client"), c = e("https://placeholder.supabase.co", "placeholder-key");
      return c;
    } catch (e) {
      return console.error("[Supabase] Failed to initialize client:", e), c = (await C())("https://placeholder.supabase.co", "placeholder-key"), c;
    }
  })(), p);
}
const S = async () => {
  if (!c) {
    if (!w())
      throw new Error("[Supabase] Missing configuration. Call configureSupabase({ url, anonKey }) before using the header package.");
    await D();
  }
  return c;
};
typeof window < "u" && (window.addEventListener("error", (e) => {
  e.error && e.error.message && e.error.message.includes("ne is not a function") && (console.warn("[Supabase] Caught TypeError: ne is not a function - this is handled gracefully"), e.preventDefault());
}), window.addEventListener("unhandledrejection", (e) => {
  e.reason && e.reason.message && e.reason.message.includes("ne is not a function") && (console.warn("[Supabase] Caught unhandled promise rejection with TypeError: ne is not a function"), e.preventDefault());
}));
const o = w();
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
  K as a,
  T as b,
  I as c,
  m as d,
  S as g,
  O as h,
  R as i,
  U as r,
  c as s
};
