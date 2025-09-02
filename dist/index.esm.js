import { ref as L, onMounted as y, defineComponent as A, computed as C, onUnmounted as U, openBlock as a, createElementBlock as n, createElementVNode as e, Fragment as I, renderList as E, toDisplayString as k, createCommentVNode as m, unref as i } from "vue";
const b = "aiworkspace_auth", w = "aiworkspace_user_id";
function T() {
  const r = L({
    user: null,
    isAuthenticated: !1,
    isLoading: !0
  }), l = (t) => {
    var c;
    const g = `; ${document.cookie}`.split(`; ${t}=`);
    return g.length === 2 && ((c = g.pop()) == null ? void 0 : c.split(";").shift()) || null;
  }, p = (t, d, g = 7) => {
    const c = /* @__PURE__ */ new Date();
    c.setTime(c.getTime() + g * 24 * 60 * 60 * 1e3), document.cookie = `${t}=${d};expires=${c.toUTCString()};path=/;domain=.aiworkspace.pro`;
  }, u = (t) => {
    document.cookie = `${t}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.aiworkspace.pro`;
  }, s = async () => {
    try {
      const t = l(b), d = l(w);
      t && d ? r.value = {
        user: { id: d, email: "" },
        // You can fetch full user data here
        isAuthenticated: !0,
        isLoading: !1
      } : r.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1
      };
    } catch (t) {
      console.error("Auth check failed:", t), r.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1
      };
    }
  }, f = () => {
    u(b), u(w), r.value = {
      user: null,
      isAuthenticated: !1,
      isLoading: !1
    };
  };
  return y(() => {
    s();
  }), {
    authState: r,
    checkAuth: s,
    logout: f,
    getCookie: l,
    setCookie: p,
    clearCookie: u
  };
}
const N = { class: "aiworkspace-header" }, S = { class: "header-container" }, D = { class: "logo-section" }, x = {
  href: "/",
  class: "logo"
}, M = ["src"], $ = { class: "nav-links" }, O = ["href", "target"], W = { class: "right-section" }, B = {
  key: 1,
  class: "user-section"
}, H = {
  key: 0,
  class: "loading-spinner"
}, G = {
  key: 1,
  class: "user-menu"
}, K = ["src", "alt"], V = {
  key: 1,
  class: "user-avatar-placeholder"
}, F = { class: "user-name" }, J = {
  key: 0,
  class: "user-dropdown"
}, P = {
  key: 2,
  class: "auth-buttons"
}, R = /* @__PURE__ */ A({
  __name: "AIWorkspaceHeader",
  props: {
    showUserMenu: { type: Boolean, default: !0 },
    showNotifications: { type: Boolean, default: !0 },
    customLogo: { default: "" },
    customLinks: { default: () => [] }
  },
  setup(r) {
    const l = r, p = [
      { label: "Dashboard", url: "/dashboard" },
      { label: "Goals", url: "/goals" },
      { label: "Tasks", url: "/tasks" },
      { label: "Analytics", url: "/analytics" },
      { label: "Settings", url: "/settings" }
    ], u = C(() => l.customLinks && l.customLinks.length > 0 ? l.customLinks : p), { authState: s, logout: f } = T(), t = L(!1), d = () => {
      t.value = !t.value;
    }, g = () => {
      console.log("Toggle notifications");
    }, c = () => {
      f(), t.value = !1;
    }, v = (h) => {
      h.target.closest(".user-menu") || (t.value = !1);
    };
    return y(() => {
      document.addEventListener("click", v);
    }), U(() => {
      document.removeEventListener("click", v);
    }), (h, o) => (a(), n("header", N, [
      e("div", S, [
        e("div", D, [
          e("a", x, [
            e("img", {
              src: h.customLogo || "/aiworkspace-logo.svg",
              alt: "AIWorkspace",
              class: "logo-image"
            }, null, 8, M),
            o[0] || (o[0] = e("span", { class: "logo-text" }, "AIWorkspace", -1))
          ])
        ]),
        e("nav", $, [
          (a(!0), n(I, null, E(u.value, (_) => (a(), n("a", {
            key: _.label,
            href: _.url,
            target: _.external ? "_blank" : void 0,
            class: "nav-link"
          }, k(_.label), 9, O))), 128))
        ]),
        e("div", W, [
          h.showNotifications ? (a(), n("button", {
            key: 0,
            class: "notification-btn",
            onClick: g
          }, [...o[1] || (o[1] = [
            e("span", { class: "notification-icon" }, "🔔", -1)
          ])])) : m("", !0),
          h.showUserMenu ? (a(), n("div", B, [
            i(s).isLoading ? (a(), n("div", H, " Loading... ")) : i(s).isAuthenticated && i(s).user ? (a(), n("div", G, [
              e("button", {
                class: "user-button",
                onClick: d
              }, [
                i(s).user.avatar_url ? (a(), n("img", {
                  key: 0,
                  src: i(s).user.avatar_url,
                  alt: i(s).user.name || "User",
                  class: "user-avatar"
                }, null, 8, K)) : (a(), n("span", V, k((i(s).user.name || i(s).user.email).charAt(0).toUpperCase()), 1)),
                e("span", F, k(i(s).user.name || i(s).user.email), 1),
                o[2] || (o[2] = e("span", { class: "dropdown-arrow" }, "▼", -1))
              ]),
              t.value ? (a(), n("div", J, [
                o[3] || (o[3] = e("a", {
                  href: "/profile",
                  class: "dropdown-item"
                }, "Profile", -1)),
                o[4] || (o[4] = e("a", {
                  href: "/settings",
                  class: "dropdown-item"
                }, "Settings", -1)),
                e("button", {
                  onClick: c,
                  class: "dropdown-item logout-btn"
                }, "Logout")
              ])) : m("", !0)
            ])) : (a(), n("div", P, [...o[5] || (o[5] = [
              e("a", {
                href: "/login",
                class: "auth-btn login-btn"
              }, "Login", -1),
              e("a", {
                href: "/signup",
                class: "auth-btn signup-btn"
              }, "Sign Up", -1)
            ])]))
          ])) : m("", !0)
        ])
      ])
    ]));
  }
});
const j = (r, l) => {
  const p = r.__vccOpts || r;
  for (const [u, s] of l)
    p[u] = s;
  return p;
}, z = /* @__PURE__ */ j(R, [["__scopeId", "data-v-bbacf2a6"]]);
export {
  z as AIWorkspaceHeader,
  T as useAuth
};
