import { createClient as p } from "@supabase/supabase-js";
import { ensureCrossSubdomainCookies as d, ACCESS_COOKIE as o, REFRESH_COOKIE as t, getCookie as u, syncCookiesToLocalStorage as l, setSessionCookie as a } from "./utils/authRedirect.js";
async function m() {
  try {
    d([o, t]);
    const e = u(o), s = u(t);
    if (e && s) {
      const { data: { session: i } } = await c.auth.getSession();
      if (!i) {
        const { data: n, error: r } = await c.auth.setSession({ access_token: e, refresh_token: s });
        r ? console.log("[auth][restore] error", r) : console.log("[auth][restore] done", !!n.session);
      }
    } else
      console.log("[auth][restore] no cookies present");
    l();
  } catch (e) {
    console.log("[auth][restore] exception", e);
  }
}
function f() {
  console.log("[auth][listener] Setting up auth state listener..."), c.auth.onAuthStateChange(async (e, s) => {
    switch (console.log("[auth][listener] Auth state changed:", e, !!s), e) {
      case "TOKEN_REFRESHED":
        console.log("[auth][listener] Token refreshed successfully"), s && (a(o, s.access_token, 60 * 60 * 24 * 365), a(t, s.refresh_token, 60 * 60 * 24 * 365), l());
        break;
      case "SIGNED_IN":
        console.log("[auth][listener] User signed in"), s && (a(o, s.access_token, 60 * 60 * 24 * 365), a(t, s.refresh_token, 60 * 60 * 24 * 365), l());
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
async function b() {
  try {
    const { data: { session: e } } = await c.auth.getSession();
    if (e && e.user)
      return console.log("[auth][restore] Active session found"), { success: !0, session: e };
    const s = u(o), i = u(t);
    if (s && i) {
      console.log("[auth][restore] Attempting to restore session from cookies...");
      const { data: n, error: r } = await c.auth.setSession({
        access_token: s,
        refresh_token: i
      });
      if (r)
        return console.log("[auth][restore] Failed to restore session:", r.message), { success: !1, error: r };
      if (n.session)
        return console.log("[auth][restore] Session restored successfully"), a(o, n.session.access_token, 60 * 60 * 24 * 365), a(t, n.session.refresh_token, 60 * 60 * 24 * 365), l(), { success: !0, session: n.session };
    }
    return console.log("[auth][restore] No valid session or cookies found"), { success: !1, error: "No valid session or cookies" };
  } catch (e) {
    return console.log("[auth][restore] Exception during session restoration:", e), { success: !1, error: e };
  }
}
const h = "https://oqdnbpmmgntqtigstaow.supabase.co", g = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xZG5icG1tZ250cXRpZ3N0YW93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0NTk2NDYsImV4cCI6MjA1MDAzNTY0Nn0.rn0nRY9xLgLt-ajiSPeG0PcdS9V-549C1yeqhcxxG40", c = p(
  h,
  g,
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
typeof window < "u" && (d([o, t]), f());
console.log("Supabase Configuration:", {
  url: h,
  hasKey: !!g,
  autoRefreshToken: !0,
  persistSession: !0
});
console.log("URL:", h.replace(/https:\/\/(.+)\.supabase\.co/, "https://*****.supabase.co"));
console.log("Key configured:", !g.includes("your-anon-key"));
console.log("Environment mode:", "production");
export {
  m as a,
  f as b,
  b as r,
  c as s
};
