import { createClient as I } from "@supabase/supabase-js";
import { ensureCrossSubdomainCookies as S, ACCESS_COOKIE as n, REFRESH_COOKIE as a, getCookie as l, syncCookiesToLocalStorage as h, setSessionCookie as c } from "./utils/authRedirect.js";
async function b() {
  try {
    console.log("[auth][init] Starting cross-subdomain authentication initialization..."), S([n, a]), A();
    const e = await m(2, 100);
    return e.success ? (console.log("[auth][init] Cross-subdomain authentication initialized successfully"), { success: !0, session: e.session }) : (console.log("[auth][init] Cross-subdomain authentication initialization completed (no active session)"), { success: !1, error: e.error });
  } catch (e) {
    return console.error("[auth][init] Error during cross-subdomain authentication initialization:", e), { success: !1, error: e };
  }
}
async function y() {
  try {
    S([n, a]);
    const e = l(n), t = l(a);
    if (e && t) {
      const { data: { session: u } } = await i.auth.getSession();
      if (!u) {
        const { data: s, error: r } = await i.auth.setSession({ access_token: e, refresh_token: t });
        r ? console.log("[auth][restore] error", r) : console.log("[auth][restore] done", !!s.session);
      }
    } else
      console.log("[auth][restore] no cookies present");
    h();
  } catch (e) {
    console.log("[auth][restore] exception", e);
  }
}
function A() {
  console.log("[auth][listener] Setting up auth state listener..."), i.auth.onAuthStateChange(async (e, t) => {
    switch (console.log("[auth][listener] Auth state changed:", e, !!t), e) {
      case "TOKEN_REFRESHED":
        console.log("[auth][listener] Token refreshed successfully"), t && (c(n, t.access_token, 60 * 60 * 24 * 365), c(a, t.refresh_token, 60 * 60 * 24 * 365), h());
        break;
      case "SIGNED_IN":
        console.log("[auth][listener] User signed in"), t && (c(n, t.access_token, 60 * 60 * 24 * 365), c(a, t.refresh_token, 60 * 60 * 24 * 365), h());
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
async function m(e = 3, t = 200) {
  var u;
  for (let s = 1; s <= e; s++)
    try {
      console.log(`[auth][restore] Attempt ${s}/${e}`);
      let r = null;
      try {
        const o = await i.auth.getSession();
        r = (u = o == null ? void 0 : o.data) == null ? void 0 : u.session;
      } catch (o) {
        console.warn("[auth][restore] Error getting Supabase session:", o);
      }
      if (r && r.user)
        return console.log("[auth][restore] Active session found"), { success: !0, session: r };
      s > 1 && (console.log("[auth][restore] Re-syncing cross-subdomain cookies..."), S([n, a]), await new Promise((o) => setTimeout(o, t * s)));
      const g = l(n), d = l(a);
      if (console.log(`[auth][restore] Cookie check - Access: ${!!g}, Refresh: ${!!d}`), g && d) {
        console.log("[auth][restore] Attempting to restore session from cookies...");
        try {
          const { data: o, error: E } = await i.auth.setSession({
            access_token: g,
            refresh_token: d
          });
          if (E) {
            if (console.log(`[auth][restore] Attempt ${s} failed:`, E.message), s === e)
              return { success: !1, error: E };
            continue;
          }
          if (o.session)
            return console.log("[auth][restore] Session restored successfully"), c(n, o.session.access_token, 60 * 60 * 24 * 365), c(a, o.session.refresh_token, 60 * 60 * 24 * 365), h(), { success: !0, session: o.session };
        } catch (o) {
          if (console.warn(`[auth][restore] setSession error on attempt ${s}:`, o), s === e)
            return { success: !1, error: o };
          continue;
        }
      } else if (console.log(`[auth][restore] Attempt ${s} - No cookies found`), s === e)
        return { success: !1, error: "No valid session or cookies" };
      s < e && await new Promise((o) => setTimeout(o, t * s));
    } catch (r) {
      if (console.log(`[auth][restore] Attempt ${s} exception:`, r), s === e)
        return { success: !1, error: r };
    }
  return console.log("[auth][restore] All attempts failed"), { success: !1, error: "All restoration attempts failed" };
}
const f = "https://oqdnbpmmgntqtigstaow.supabase.co", p = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xZG5icG1tZ250cXRpZ3N0YW93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0NTk2NDYsImV4cCI6MjA1MDAzNTY0Nn0.rn0nRY9xLgLt-ajiSPeG0PcdS9V-549C1yeqhcxxG40";
let i = null;
try {
  i = I(
    f,
    p,
    {
      db: {
        schema: "public"
      },
      auth: {
        storageKey: "sb-auth-token",
        storage: typeof window < "u" ? localStorage : void 0,
        autoRefreshToken: !0,
        persistSession: !0
      }
    }
  );
} catch (e) {
  console.error("[Supabase] Failed to create client:", e), i = I(f, p);
}
if (typeof window < "u" && i)
  try {
    S([n, a]), A();
  } catch (e) {
    console.warn("[Supabase] Error setting up cross-subdomain authentication:", e);
  }
console.log("Supabase Configuration:", {
  url: f,
  hasKey: !!p,
  autoRefreshToken: !0,
  persistSession: !0
});
console.log("URL:", f.replace(/https:\/\/(.+)\.supabase\.co/, "https://*****.supabase.co"));
console.log("Key configured:", !p.includes("your-anon-key"));
console.log("Environment mode:", "production");
export {
  y as a,
  A as b,
  b as i,
  m as r,
  i as s
};
