import { createClient as S } from "@supabase/supabase-js";
import { ensureCrossSubdomainCookies as f, ACCESS_COOKIE as t, REFRESH_COOKIE as n, getCookie as l, syncCookiesToLocalStorage as h, setSessionCookie as c } from "./utils/authRedirect.js";
async function I() {
  try {
    console.log("[auth][init] Starting cross-subdomain authentication initialization..."), f([t, n]), k();
    const e = await b(2, 100);
    return e.success ? (console.log("[auth][init] Cross-subdomain authentication initialized successfully"), { success: !0, session: e.session }) : (console.log("[auth][init] Cross-subdomain authentication initialization completed (no active session)"), { success: !1, error: e.error });
  } catch (e) {
    return console.error("[auth][init] Error during cross-subdomain authentication initialization:", e), { success: !1, error: e };
  }
}
async function w() {
  try {
    f([t, n]);
    const e = l(t), o = l(n);
    if (e && o) {
      const { data: { session: s } } = await u.auth.getSession();
      if (!s) {
        const { data: r, error: i } = await u.auth.setSession({ access_token: e, refresh_token: o });
        i ? console.log("[auth][restore] error", i) : console.log("[auth][restore] done", !!r.session);
      }
    } else
      console.log("[auth][restore] no cookies present");
    h();
  } catch (e) {
    console.log("[auth][restore] exception", e);
  }
}
function k() {
  console.log("[auth][listener] Setting up auth state listener..."), u.auth.onAuthStateChange(async (e, o) => {
    switch (console.log("[auth][listener] Auth state changed:", e, !!o), e) {
      case "TOKEN_REFRESHED":
        console.log("[auth][listener] Token refreshed successfully"), o && (c(t, o.access_token, 60 * 60 * 24 * 365), c(n, o.refresh_token, 60 * 60 * 24 * 365), h());
        break;
      case "SIGNED_IN":
        console.log("[auth][listener] User signed in"), o && (c(t, o.access_token, 60 * 60 * 24 * 365), c(n, o.refresh_token, 60 * 60 * 24 * 365), h());
        break;
      case "SIGNED_OUT":
        console.log("[auth][listener] User signed out");
        break;
      case "USER_UPDATED":
        console.log("[auth][listener] User updated");
        break;
      default:
        console.log("[auth][listener] Unhandled auth event:", e);
    }
  });
}
async function b(e = 3, o = 200) {
  for (let s = 1; s <= e; s++)
    try {
      console.log(`[auth][restore] Attempt ${s}/${e}`);
      const { data: { session: r } } = await u.auth.getSession();
      if (r && r.user)
        return console.log("[auth][restore] Active session found"), { success: !0, session: r };
      s > 1 && (console.log("[auth][restore] Re-syncing cross-subdomain cookies..."), f([t, n]), await new Promise((a) => setTimeout(a, o * s)));
      const i = l(t), g = l(n);
      if (console.log(`[auth][restore] Cookie check - Access: ${!!i}, Refresh: ${!!g}`), i && g) {
        console.log("[auth][restore] Attempting to restore session from cookies...");
        const { data: a, error: d } = await u.auth.setSession({
          access_token: i,
          refresh_token: g
        });
        if (d) {
          if (console.log(`[auth][restore] Attempt ${s} failed:`, d.message), s === e)
            return { success: !1, error: d };
          continue;
        }
        if (a.session)
          return console.log("[auth][restore] Session restored successfully"), c(t, a.session.access_token, 60 * 60 * 24 * 365), c(n, a.session.refresh_token, 60 * 60 * 24 * 365), h(), { success: !0, session: a.session };
      } else if (console.log(`[auth][restore] Attempt ${s} - No cookies found`), s === e)
        return { success: !1, error: "No valid session or cookies" };
      s < e && await new Promise((a) => setTimeout(a, o * s));
    } catch (r) {
      if (console.log(`[auth][restore] Attempt ${s} exception:`, r), s === e)
        return { success: !1, error: r };
    }
  return console.log("[auth][restore] All attempts failed"), { success: !1, error: "All restoration attempts failed" };
}
const p = "https://oqdnbpmmgntqtigstaow.supabase.co", m = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xZG5icG1tZ250cXRpZ3N0YW93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0NTk2NDYsImV4cCI6MjA1MDAzNTY0Nn0.rn0nRY9xLgLt-ajiSPeG0PcdS9V-549C1yeqhcxxG40", u = S(
  p,
  m,
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
typeof window < "u" && (f([t, n]), k());
console.log("Supabase Configuration:", {
  url: p,
  hasKey: !!m,
  autoRefreshToken: !0,
  persistSession: !0
});
console.log("URL:", p.replace(/https:\/\/(.+)\.supabase\.co/, "https://*****.supabase.co"));
console.log("Key configured:", !m.includes("your-anon-key"));
console.log("Environment mode:", "production");
export {
  w as a,
  k as b,
  I as i,
  b as r,
  u as s
};
