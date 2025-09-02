import { ref as v, onMounted as w, defineComponent as L, onUnmounted as y, openBlock as n, createElementBlock as a, createElementVNode as t, Fragment as A, renderList as b, toDisplayString as f, createCommentVNode as h, unref as l } from "vue";
const m = "aiworkspace_auth", k = "aiworkspace_user_id";
function C() {
  const c = v({
    user: null,
    isAuthenticated: !1,
    isLoading: !0
  }), s = (i) => {
    var e;
    const o = `; ${document.cookie}`.split(`; ${i}=`);
    return o.length === 2 && ((e = o.pop()) == null ? void 0 : e.split(";").shift()) || null;
  }, d = (i, u, o = 7) => {
    const e = /* @__PURE__ */ new Date();
    e.setTime(e.getTime() + o * 24 * 60 * 60 * 1e3), document.cookie = `${i}=${u};expires=${e.toUTCString()};path=/;domain=.aiworkspace.pro`;
  }, r = (i) => {
    document.cookie = `${i}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.aiworkspace.pro`;
  }, p = async () => {
    try {
      const i = s(m), u = s(k);
      i && u ? c.value = {
        user: { id: u, email: "" },
        // You can fetch full user data here
        isAuthenticated: !0,
        isLoading: !1
      } : c.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1
      };
    } catch (i) {
      console.error("Auth check failed:", i), c.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1
      };
    }
  }, _ = () => {
    r(m), r(k), c.value = {
      user: null,
      isAuthenticated: !1,
      isLoading: !1
    };
  };
  return w(() => {
    p();
  }), {
    authState: c,
    checkAuth: p,
    logout: _,
    getCookie: s,
    setCookie: d,
    clearCookie: r
  };
}
const U = { class: "aiworkspace-header" }, I = { class: "header-container" }, E = { class: "logo-section" }, T = {
  href: "/",
  class: "logo"
}, N = ["src"], S = {
  key: 0,
  class: "nav-links"
}, D = ["href", "target"], M = { class: "right-section" }, $ = {
  key: 1,
  class: "user-section"
}, O = {
  key: 0,
  class: "loading-spinner"
}, W = {
  key: 1,
  class: "user-menu"
}, B = ["src", "alt"], H = {
  key: 1,
  class: "user-avatar-placeholder"
}, x = { class: "user-name" }, K = {
  key: 0,
  class: "user-dropdown"
}, V = {
  key: 2,
  class: "auth-buttons"
}, F = /* @__PURE__ */ L({
  __name: "AIWorkspaceHeader",
  props: {
    showUserMenu: { type: Boolean, default: !0 },
    showNotifications: { type: Boolean, default: !0 },
    customLogo: { default: "" },
    customLinks: { default: () => [] }
  },
  setup(c) {
    const { authState: s, logout: d } = C(), r = v(!1), p = () => {
      r.value = !r.value;
    }, _ = () => {
      console.log("Toggle notifications");
    }, i = () => {
      d(), r.value = !1;
    }, u = (o) => {
      o.target.closest(".user-menu") || (r.value = !1);
    };
    return w(() => {
      document.addEventListener("click", u);
    }), y(() => {
      document.removeEventListener("click", u);
    }), (o, e) => (n(), a("header", U, [
      t("div", I, [
        t("div", E, [
          t("a", T, [
            t("img", {
              src: o.customLogo || "/logo.svg",
              alt: "AIWorkspace",
              class: "logo-image"
            }, null, 8, N),
            e[0] || (e[0] = t("span", { class: "logo-text" }, "AIWorkspace", -1))
          ])
        ]),
        o.customLinks && o.customLinks.length ? (n(), a("nav", S, [
          (n(!0), a(A, null, b(o.customLinks, (g) => (n(), a("a", {
            key: g.label,
            href: g.url,
            target: g.external ? "_blank" : void 0,
            class: "nav-link"
          }, f(g.label), 9, D))), 128))
        ])) : h("", !0),
        t("div", M, [
          o.showNotifications ? (n(), a("button", {
            key: 0,
            class: "notification-btn",
            onClick: _
          }, [...e[1] || (e[1] = [
            t("span", { class: "notification-icon" }, "🔔", -1)
          ])])) : h("", !0),
          o.showUserMenu ? (n(), a("div", $, [
            l(s).isLoading ? (n(), a("div", O, " Loading... ")) : l(s).isAuthenticated && l(s).user ? (n(), a("div", W, [
              t("button", {
                class: "user-button",
                onClick: p
              }, [
                l(s).user.avatar_url ? (n(), a("img", {
                  key: 0,
                  src: l(s).user.avatar_url,
                  alt: l(s).user.name || "User",
                  class: "user-avatar"
                }, null, 8, B)) : (n(), a("span", H, f((l(s).user.name || l(s).user.email).charAt(0).toUpperCase()), 1)),
                t("span", x, f(l(s).user.name || l(s).user.email), 1),
                e[2] || (e[2] = t("span", { class: "dropdown-arrow" }, "▼", -1))
              ]),
              r.value ? (n(), a("div", K, [
                e[3] || (e[3] = t("a", {
                  href: "/profile",
                  class: "dropdown-item"
                }, "Profile", -1)),
                e[4] || (e[4] = t("a", {
                  href: "/settings",
                  class: "dropdown-item"
                }, "Settings", -1)),
                t("button", {
                  onClick: i,
                  class: "dropdown-item logout-btn"
                }, "Logout")
              ])) : h("", !0)
            ])) : (n(), a("div", V, [...e[5] || (e[5] = [
              t("a", {
                href: "/login",
                class: "auth-btn login-btn"
              }, "Login", -1),
              t("a", {
                href: "/signup",
                class: "auth-btn signup-btn"
              }, "Sign Up", -1)
            ])]))
          ])) : h("", !0)
        ])
      ])
    ]));
  }
});
const G = (c, s) => {
  const d = c.__vccOpts || c;
  for (const [r, p] of s)
    d[r] = p;
  return d;
}, P = /* @__PURE__ */ G(F, [["__scopeId", "data-v-c5ef26bd"]]);
export {
  P as AIWorkspaceHeader,
  C as useAuth
};
