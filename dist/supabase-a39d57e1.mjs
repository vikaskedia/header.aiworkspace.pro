import { ensureCrossSubdomainCookies as E, ACCESS_COOKIE as r, REFRESH_COOKIE as i, getCookie as f, syncCookiesToLocalStorage as S, setSessionCookie as l } from "./utils/authRedirect.js";
async function N() {
  try {
    console.log("[auth][init] Starting cross-subdomain authentication initialization..."), E([r, i]), k();
    const e = await _(2, 100);
    return e.success ? (console.log("[auth][init] Cross-subdomain authentication initialized successfully"), { success: !0, session: e.session }) : (console.log("[auth][init] Cross-subdomain authentication initialization completed (no active session)"), { success: !1, error: e.error });
  } catch (e) {
    return console.error("[auth][init] Error during cross-subdomain authentication initialization:", e), { success: !1, error: e };
  }
}
async function O() {
  try {
    E([r, i]);
    const e = f(r), t = f(i);
    if (e && t) {
      const o = await b(), { data: { session: s } } = await o.auth.getSession();
      if (!s) {
        const { data: a, error: u } = await o.auth.setSession({ access_token: e, refresh_token: t });
        u ? console.log("[auth][restore] error", u) : console.log("[auth][restore] done", !!a.session);
      }
    } else
      console.log("[auth][restore] no cookies present");
    S();
  } catch (e) {
    console.log("[auth][restore] exception", e);
  }
}
let A = !1;
async function k() {
  if (A) {
    console.log("[auth][listener] Auth state listener already set up, skipping...");
    return;
  }
  console.log("[auth][listener] Setting up auth state listener...");
  try {
    (await b()).auth.onAuthStateChange(async (t, o) => {
      switch (console.log("[auth][listener] Auth state changed:", t, !!o), t) {
        case "TOKEN_REFRESHED":
          console.log("[auth][listener] Token refreshed successfully"), o && (l(r, o.access_token, 60 * 60 * 24 * 365), l(i, o.refresh_token, 60 * 60 * 24 * 365), S());
          break;
        case "SIGNED_IN":
          console.log("[auth][listener] User signed in"), o && (l(r, o.access_token, 60 * 60 * 24 * 365), l(i, o.refresh_token, 60 * 60 * 24 * 365), S());
          break;
        case "SIGNED_OUT":
          console.log("[auth][listener] User signed out");
          break;
        case "USER_UPDATED":
          console.log("[auth][listener] User updated");
          break;
        default:
          console.log("[auth][listener] Unhandled auth event:", t);
      }
    }), A = !0, console.log("[auth][listener] Auth state listener set up successfully");
  } catch (e) {
    console.warn("[auth][listener] Failed to setup auth state listener:", e);
  }
}
async function _(e = 3, t = 200) {
  var o;
  for (let s = 1; s <= e; s++)
    try {
      console.log(`[auth][restore] Attempt ${s}/${e}`);
      let a = null;
      try {
        const c = await (await b()).auth.getSession();
        a = (o = c == null ? void 0 : c.data) == null ? void 0 : o.session;
      } catch (n) {
        console.warn("[auth][restore] Error getting Supabase session:", n);
      }
      if (a && a.user)
        return console.log("[auth][restore] Active session found"), { success: !0, session: a };
      s > 1 && (console.log("[auth][restore] Re-syncing cross-subdomain cookies..."), E([r, i]), await new Promise((n) => setTimeout(n, t * s)));
      const u = f(r), m = f(i);
      if (console.log(`[auth][restore] Cookie check - Access: ${!!u}, Refresh: ${!!m}`), u && m) {
        console.log("[auth][restore] Attempting to restore session from cookies...");
        try {
          const n = await b(), { data: c, error: I } = await n.auth.setSession({
            access_token: u,
            refresh_token: m
          });
          if (I) {
            if (console.log(`[auth][restore] Attempt ${s} failed:`, I.message), s === e)
              return { success: !1, error: I };
            continue;
          }
          if (c.session)
            return console.log("[auth][restore] Session restored successfully"), l(r, c.session.access_token, 60 * 60 * 24 * 365), l(i, c.session.refresh_token, 60 * 60 * 24 * 365), S(), { success: !0, session: c.session };
        } catch (n) {
          if (console.warn(`[auth][restore] setSession error on attempt ${s}:`, n), s === e)
            return { success: !1, error: n };
          continue;
        }
      } else if (console.log(`[auth][restore] Attempt ${s} - No cookies found`), s === e)
        return { success: !1, error: "No valid session or cookies" };
      s < e && await new Promise((n) => setTimeout(n, t * s));
    } catch (a) {
      if (console.log(`[auth][restore] Attempt ${s} exception:`, a), s === e)
        return { success: !1, error: a };
    }
  return console.log("[auth][restore] All attempts failed"), { success: !1, error: "All restoration attempts failed" };
}
async function y() {
  var e;
  try {
    const { createClient: t } = await import("@supabase/supabase-js");
    return t;
  } catch (t) {
    return console.warn("[Supabase] Failed to import @supabase/supabase-js:", t), typeof window < "u" && ((e = window.supabase) != null && e.createClient) ? window.supabase.createClient : (console.error("[Supabase] No Supabase client available, using mock"), () => ({
      auth: {
        getSession: () => Promise.resolve({ data: { session: null }, error: null }),
        setSession: () => Promise.resolve({ data: { session: null }, error: null }),
        signOut: () => Promise.resolve({ error: null }),
        onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {
        } } } })
      }
    }));
  }
}
const d = "https://oqdnbpmmgntqtigstaow.supabase.co", g = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xZG5icG1tZ250cXRpZ3N0YW93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0NTk2NDYsImV4cCI6MjA1MDAzNTY0Nn0.rn0nRY9xLgLt-ajiSPeG0PcdS9V-549C1yeqhcxxG40";
let h = null, p = null;
async function w() {
  return p || (p = (async () => {
    try {
      const e = await y();
      return d && g && (h = e(
        d,
        g,
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
      ), console.log("[Supabase] Client initialized successfully")), h;
    } catch (e) {
      return console.error("[Supabase] Failed to initialize client:", e), h = (await y())("https://placeholder.supabase.co", "placeholder-key"), h;
    }
  })(), p);
}
w();
const b = async () => (h || await w(), h);
typeof window < "u" && (E([r, i]), k().catch((e) => {
  console.warn("[Supabase] Error setting up auth state listener:", e);
}));
console.log("Supabase Configuration:", {
  url: d,
  hasKey: !!g,
  autoRefreshToken: !0,
  persistSession: !0
});
console.log("URL:", d.replace(/https:\/\/(.+)\.supabase\.co/, "https://*****.supabase.co"));
console.log("Key configured:", !g.includes("your-anon-key"));
console.log("Environment mode:", "production");
export {
  O as a,
  k as b,
  b as g,
  N as i,
  _ as r,
  h as s
};
