import { ensureCrossSubdomainCookies as w, ACCESS_COOKIE as r, REFRESH_COOKIE as i, getCookie as h, syncCookiesToLocalStorage as g, setSessionCookie as l } from "./utils/authRedirect.js";
async function N() {
  try {
    console.log("[auth][init] Starting cross-subdomain authentication initialization..."), w([r, i]), I();
    const e = await _(2, 100);
    return e.success ? (console.log("[auth][init] Cross-subdomain authentication initialized successfully"), { success: !0, session: e.session }) : (console.log("[auth][init] Cross-subdomain authentication initialization completed (no active session)"), { success: !1, error: e.error });
  } catch (e) {
    return console.error("[auth][init] Error during cross-subdomain authentication initialization:", e), { success: !1, error: e };
  }
}
async function U() {
  try {
    w([r, i]);
    const e = h(r), s = h(i);
    if (e && s) {
      const n = await b(), { data: { session: o } } = await n.auth.getSession();
      if (!o) {
        const { data: t, error: u } = await n.auth.setSession({ access_token: e, refresh_token: s });
        u ? console.log("[auth][restore] error", u) : console.log("[auth][restore] done", !!t.session);
      }
    } else
      console.log("[auth][restore] no cookies present");
    g();
  } catch (e) {
    console.log("[auth][restore] exception", e);
  }
}
let E = !1;
async function I() {
  if (E) {
    console.log("[auth][listener] Auth state listener already set up, skipping...");
    return;
  }
  console.log("[auth][listener] Setting up auth state listener...");
  try {
    (await b()).auth.onAuthStateChange(async (s, n) => {
      switch (console.log("[auth][listener] Auth state changed:", s, !!n), s) {
        case "TOKEN_REFRESHED":
          console.log("[auth][listener] Token refreshed successfully"), n && (l(r, n.access_token, 60 * 60 * 24 * 365), l(i, n.refresh_token, 60 * 60 * 24 * 365), g());
          break;
        case "SIGNED_IN":
          console.log("[auth][listener] User signed in"), n && (l(r, n.access_token, 60 * 60 * 24 * 365), l(i, n.refresh_token, 60 * 60 * 24 * 365), g());
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
    }), E = !0, console.log("[auth][listener] Auth state listener set up successfully");
  } catch (e) {
    console.warn("[auth][listener] Failed to setup auth state listener:", e);
  }
}
async function _(e = 3, s = 200) {
  var n;
  for (let o = 1; o <= e; o++)
    try {
      console.log(`[auth][restore] Attempt ${o}/${e}`);
      let t = null;
      try {
        const c = await (await b()).auth.getSession();
        t = (n = c == null ? void 0 : c.data) == null ? void 0 : n.session;
      } catch (a) {
        console.warn("[auth][restore] Error getting Supabase session:", a);
      }
      if (t && t.user)
        return console.log("[auth][restore] Active session found"), { success: !0, session: t };
      o > 1 && (console.log("[auth][restore] Re-syncing cross-subdomain cookies..."), w([r, i]), await new Promise((a) => setTimeout(a, s * o)));
      const u = h(r), y = h(i);
      if (console.log(`[auth][restore] Cookie check - Access: ${!!u}, Refresh: ${!!y}`), u && y) {
        console.log("[auth][restore] Attempting to restore session from cookies...");
        try {
          const a = await b(), { data: c, error: m } = await a.auth.setSession({
            access_token: u,
            refresh_token: y
          });
          if (m) {
            if (console.log(`[auth][restore] Attempt ${o} failed:`, m.message), o === e)
              return { success: !1, error: m };
            continue;
          }
          if (c.session)
            return console.log("[auth][restore] Session restored successfully"), l(r, c.session.access_token, 60 * 60 * 24 * 365), l(i, c.session.refresh_token, 60 * 60 * 24 * 365), g(), { success: !0, session: c.session };
        } catch (a) {
          if (console.warn(`[auth][restore] setSession error on attempt ${o}:`, a), o === e)
            return { success: !1, error: a };
          continue;
        }
      } else if (console.log(`[auth][restore] Attempt ${o} - No cookies found`), o === e)
        return { success: !1, error: "No valid session or cookies" };
      o < e && await new Promise((a) => setTimeout(a, s * o));
    } catch (t) {
      if (console.log(`[auth][restore] Attempt ${o} exception:`, t), o === e)
        return { success: !1, error: t };
    }
  return console.log("[auth][restore] All attempts failed"), { success: !1, error: "All restoration attempts failed" };
}
async function k() {
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
      setSession: async (t) => (console.warn("[Supabase] Mock setSession called - returning null session"), { data: { session: null }, error: null }),
      signOut: async () => (console.warn("[Supabase] Mock signOut called"), { error: null }),
      signInWithPassword: async (t) => (console.warn("[Supabase] Mock signInWithPassword called"), { data: { session: null, user: null }, error: { message: "Supabase not configured" } }),
      signUp: async (t) => (console.warn("[Supabase] Mock signUp called"), { data: { session: null, user: null }, error: { message: "Supabase not configured" } }),
      signInWithOAuth: async (t) => (console.warn("[Supabase] Mock signInWithOAuth called"), { data: { session: null, user: null }, error: { message: "Supabase not configured" } }),
      resetPasswordForEmail: async (t, u) => (console.warn("[Supabase] Mock resetPasswordForEmail called"), { data: {}, error: { message: "Supabase not configured" } }),
      onAuthStateChange: (t) => (console.warn("[Supabase] Mock onAuthStateChange called"), { data: { subscription: { unsubscribe: () => {
      } } } })
    }
  });
}
const S = "https://oqdnbpmmgntqtigstaow.supabase.co", f = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xZG5icG1tZ250cXRpZ3N0YW93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0NTk2NDYsImV4cCI6MjA1MDAzNTY0Nn0.rn0nRY9xLgLt-ajiSPeG0PcdS9V-549C1yeqhcxxG40";
let p = null, d = null;
async function A() {
  return d || (d = (async () => {
    try {
      const e = await k();
      return S && f && (p = e(
        S,
        f,
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
      ), console.log("[Supabase] Client initialized successfully")), p;
    } catch (e) {
      return console.error("[Supabase] Failed to initialize client:", e), p = (await k())("https://placeholder.supabase.co", "placeholder-key"), p;
    }
  })(), d);
}
A();
const b = async () => (p || await A(), p);
if (typeof window < "u")
  try {
    w([r, i]), I().catch((e) => {
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
console.log("Supabase Configuration:", {
  url: S,
  hasKey: !!f,
  autoRefreshToken: !0,
  persistSession: !0
});
console.log("URL:", S.replace(/https:\/\/(.+)\.supabase\.co/, "https://*****.supabase.co"));
console.log("Key configured:", !f.includes("your-anon-key"));
console.log("Environment mode:", "production");
export {
  U as a,
  I as b,
  b as g,
  N as i,
  _ as r,
  p as s
};
