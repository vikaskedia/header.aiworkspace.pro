import { ref as y, onMounted as A, defineComponent as L, computed as x, onUnmounted as C, openBlock as n, createElementBlock as a, createElementVNode as e, Fragment as U, renderList as I, toDisplayString as m, createCommentVNode as k, unref as i } from "vue";
const w = "aiworkspace_auth", b = "aiworkspace_user_id";
function E() {
  const l = y({
    user: null,
    isAuthenticated: !1,
    isLoading: !0
  }), r = (t) => {
    var u;
    const p = `; ${document.cookie}`.split(`; ${t}=`);
    return p.length === 2 && ((u = p.pop()) == null ? void 0 : u.split(";").shift()) || null;
  }, g = (t, d, p = 7) => {
    const u = /* @__PURE__ */ new Date();
    u.setTime(u.getTime() + p * 24 * 60 * 60 * 1e3), document.cookie = `${t}=${d};expires=${u.toUTCString()};path=/;domain=.aiworkspace.pro`;
  }, c = (t) => {
    document.cookie = `${t}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.aiworkspace.pro`;
  }, s = async () => {
    try {
      const t = r(w), d = r(b);
      t && d ? l.value = {
        user: { id: d, email: "" },
        // You can fetch full user data here
        isAuthenticated: !0,
        isLoading: !1
      } : l.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1
      };
    } catch (t) {
      console.error("Auth check failed:", t), l.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1
      };
    }
  }, _ = () => {
    c(w), c(b), l.value = {
      user: null,
      isAuthenticated: !1,
      isLoading: !1
    };
  };
  return A(() => {
    s();
  }), {
    authState: l,
    checkAuth: s,
    logout: _,
    getCookie: r,
    setCookie: g,
    clearCookie: c
  };
}
const T = { class: "aiworkspace-header" }, N = { class: "header-container" }, S = { class: "logo-section" }, D = {
  href: "/",
  class: "logo"
}, B = ["src"], M = {
  key: 1,
  class: "default-logo"
}, $ = { class: "nav-links" }, O = ["href", "target"], W = { class: "right-section" }, H = {
  key: 1,
  class: "user-section"
}, F = {
  key: 0,
  class: "loading-spinner"
}, G = {
  key: 1,
  class: "user-menu"
}, K = ["src", "alt"], V = {
  key: 1,
  class: "user-avatar-placeholder"
}, z = { class: "user-name" }, J = {
  key: 0,
  class: "user-dropdown"
}, P = {
  key: 2,
  class: "auth-buttons"
}, R = /* @__PURE__ */ L({
  __name: "AIWorkspaceHeader",
  props: {
    showUserMenu: { type: Boolean, default: !0 },
    showNotifications: { type: Boolean, default: !0 },
    customLogo: { default: "" },
    customLinks: { default: () => [] }
  },
  setup(l) {
    const r = l, g = [
      { label: "Dashboard", url: "/dashboard", external: !1 },
      { label: "Goals", url: "/goals", external: !1 },
      { label: "Tasks", url: "/tasks", external: !1 },
      { label: "Analytics", url: "/analytics", external: !1 },
      { label: "Settings", url: "/settings", external: !1 }
    ], c = x(() => r.customLinks && r.customLinks.length > 0 ? r.customLinks : g), { authState: s, logout: _ } = E(), t = y(!1), d = () => {
      t.value = !t.value;
    }, p = () => {
      console.log("Toggle notifications");
    }, u = () => {
      _(), t.value = !1;
    }, v = (h) => {
      h.target.closest(".user-menu") || (t.value = !1);
    };
    return A(() => {
      document.addEventListener("click", v);
    }), C(() => {
      document.removeEventListener("click", v);
    }), (h, o) => (n(), a("header", T, [
      e("div", N, [
        e("div", S, [
          e("a", D, [
            h.customLogo ? (n(), a("img", {
              key: 0,
              src: h.customLogo,
              alt: "AIWorkspace",
              class: "logo-image"
            }, null, 8, B)) : (n(), a("div", M, [...o[0] || (o[0] = [
              e("svg", {
                width: "32",
                height: "32",
                viewBox: "0 0 32 32",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                e("rect", {
                  width: "32",
                  height: "32",
                  rx: "6",
                  fill: "#3B82F6"
                }),
                e("text", {
                  x: "16",
                  y: "22",
                  "font-family": "Arial, sans-serif",
                  "font-size": "18",
                  "font-weight": "bold",
                  "text-anchor": "middle",
                  fill: "white"
                }, "A")
              ], -1)
            ])])),
            o[1] || (o[1] = e("span", { class: "logo-text" }, "AIWorkspace", -1))
          ])
        ]),
        e("nav", $, [
          (n(!0), a(U, null, I(c.value, (f) => (n(), a("a", {
            key: f.label,
            href: f.url,
            target: f.external ? "_blank" : void 0,
            class: "nav-link"
          }, m(f.label), 9, O))), 128))
        ]),
        e("div", W, [
          h.showNotifications ? (n(), a("button", {
            key: 0,
            class: "notification-btn",
            onClick: p
          }, [...o[2] || (o[2] = [
            e("span", { class: "notification-icon" }, "🔔", -1)
          ])])) : k("", !0),
          h.showUserMenu ? (n(), a("div", H, [
            i(s).isLoading ? (n(), a("div", F, " Loading... ")) : i(s).isAuthenticated && i(s).user ? (n(), a("div", G, [
              e("button", {
                class: "user-button",
                onClick: d
              }, [
                i(s).user.avatar_url ? (n(), a("img", {
                  key: 0,
                  src: i(s).user.avatar_url,
                  alt: i(s).user.name || "User",
                  class: "user-avatar"
                }, null, 8, K)) : (n(), a("span", V, m((i(s).user.name || i(s).user.email).charAt(0).toUpperCase()), 1)),
                e("span", z, m(i(s).user.name || i(s).user.email), 1),
                o[3] || (o[3] = e("span", { class: "dropdown-arrow" }, "▼", -1))
              ]),
              t.value ? (n(), a("div", J, [
                o[4] || (o[4] = e("a", {
                  href: "/profile",
                  class: "dropdown-item"
                }, "Profile", -1)),
                o[5] || (o[5] = e("a", {
                  href: "/settings",
                  class: "dropdown-item"
                }, "Settings", -1)),
                e("button", {
                  onClick: u,
                  class: "dropdown-item logout-btn"
                }, "Logout")
              ])) : k("", !0)
            ])) : (n(), a("div", P, [...o[6] || (o[6] = [
              e("a", {
                href: "/login",
                class: "auth-btn login-btn"
              }, "Login", -1),
              e("a", {
                href: "/signup",
                class: "auth-btn signup-btn"
              }, "Sign Up", -1)
            ])]))
          ])) : k("", !0)
        ])
      ])
    ]));
  }
});
const j = (l, r) => {
  const g = l.__vccOpts || l;
  for (const [c, s] of r)
    g[c] = s;
  return g;
}, Q = /* @__PURE__ */ j(R, [["__scopeId", "data-v-e8e5bb78"]]);
export {
  Q as AIWorkspaceHeader,
  E as useAuth
};
