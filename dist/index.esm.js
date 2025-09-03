import { getCurrentInstance as Ee, inject as de, ref as R, computed as C, unref as y, getCurrentScope as Mo, onScopeDispose as zn, readonly as Uo, shallowRef as Xt, watchEffect as Do, onMounted as ye, nextTick as oe, watch as te, isRef as mt, warn as pi, provide as Vn, defineComponent as G, openBlock as S, createElementBlock as N, mergeProps as $s, renderSlot as ae, createElementVNode as $, toRef as gt, onUnmounted as vi, useAttrs as gi, useSlots as Bo, normalizeClass as M, normalizeStyle as yt, createCommentVNode as B, Fragment as st, createBlock as F, withCtx as U, resolveDynamicComponent as pe, withModifiers as Pe, toDisplayString as Q, onBeforeUnmount as ds, createVNode as X, Transition as Wn, withDirectives as Zt, createTextVNode as Re, vShow as Qt, Text as mi, reactive as Hn, h as yi, shallowReactive as Fo, isVNode as Vs, render as xs, markRaw as et, toRefs as kn, resolveComponent as we, withKeys as gs, hasInjectionContext as _i, effectScope as bi, isReactive as qn, toRaw as wi, createStaticVNode as sn, renderList as nn } from "vue";
const zo = Symbol(), Is = "el", ki = "is-", lt = (t, e, s, n, r) => {
  let o = `${t}-${e}`;
  return s && (o += `-${s}`), n && (o += `__${n}`), r && (o += `--${r}`), o;
}, Vo = Symbol("namespaceContextKey"), Wo = (t) => {
  const e = t || (Ee() ? de(Vo, R(Is)) : R(Is));
  return C(() => y(e) || Is);
}, Le = (t, e) => {
  const s = Wo(e);
  return {
    namespace: s,
    b: (g = "") => lt(s.value, t, g, "", ""),
    e: (g) => g ? lt(s.value, t, "", g, "") : "",
    m: (g) => g ? lt(s.value, t, "", "", g) : "",
    be: (g, b) => g && b ? lt(s.value, t, g, b, "") : "",
    em: (g, b) => g && b ? lt(s.value, t, "", g, b) : "",
    bm: (g, b) => g && b ? lt(s.value, t, g, "", b) : "",
    bem: (g, b, v) => g && b && v ? lt(s.value, t, g, b, v) : "",
    is: (g, ...b) => {
      const v = b.length >= 1 ? b[0] : !0;
      return g && v ? `${ki}${g}` : "";
    },
    cssVar: (g) => {
      const b = {};
      for (const v in g)
        g[v] && (b[`--${s.value}-${v}`] = g[v]);
      return b;
    },
    cssVarName: (g) => `--${s.value}-${g}`,
    cssVarBlock: (g) => {
      const b = {};
      for (const v in g)
        g[v] && (b[`--${s.value}-${t}-${v}`] = g[v]);
      return b;
    },
    cssVarBlockName: (g) => `--${s.value}-${t}-${g}`
  };
};
/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const es = () => {
}, Si = Object.prototype.hasOwnProperty, os = (t, e) => Si.call(t, e), ze = (t) => typeof t == "function", Se = (t) => typeof t == "string", Mt = (t) => t !== null && typeof t == "object", Ei = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (s) => e[s] || (e[s] = t(s));
}, Ti = /-\w/g, Ci = Ei(
  (t) => t.replace(Ti, (e) => e.slice(1).toUpperCase())
);
var Oi = typeof global == "object" && global && global.Object === Object && global;
const Ii = Oi;
var Ai = typeof self == "object" && self && self.Object === Object && self, Pi = Ii || Ai || Function("return this")();
const Kn = Pi;
var $i = Kn.Symbol;
const nt = $i;
var Ho = Object.prototype, xi = Ho.hasOwnProperty, ji = Ho.toString, Wt = nt ? nt.toStringTag : void 0;
function Ri(t) {
  var e = xi.call(t, Wt), s = t[Wt];
  try {
    t[Wt] = void 0;
    var n = !0;
  } catch {
  }
  var r = ji.call(t);
  return n && (e ? t[Wt] = s : delete t[Wt]), r;
}
var Ni = Object.prototype, Li = Ni.toString;
function Mi(t) {
  return Li.call(t);
}
var Ui = "[object Null]", Di = "[object Undefined]", Tr = nt ? nt.toStringTag : void 0;
function Gn(t) {
  return t == null ? t === void 0 ? Di : Ui : Tr && Tr in Object(t) ? Ri(t) : Mi(t);
}
function Jn(t) {
  return t != null && typeof t == "object";
}
var Bi = "[object Symbol]";
function Yn(t) {
  return typeof t == "symbol" || Jn(t) && Gn(t) == Bi;
}
function Fi(t, e) {
  for (var s = -1, n = t == null ? 0 : t.length, r = Array(n); ++s < n; )
    r[s] = e(t[s], s, t);
  return r;
}
var zi = Array.isArray;
const hs = zi;
var Vi = 1 / 0, Cr = nt ? nt.prototype : void 0, Or = Cr ? Cr.toString : void 0;
function qo(t) {
  if (typeof t == "string")
    return t;
  if (hs(t))
    return Fi(t, qo) + "";
  if (Yn(t))
    return Or ? Or.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -Vi ? "-0" : e;
}
function js(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
function Wi(t) {
  return t;
}
var Hi = "[object AsyncFunction]", qi = "[object Function]", Ki = "[object GeneratorFunction]", Gi = "[object Proxy]";
function Ji(t) {
  if (!js(t))
    return !1;
  var e = Gn(t);
  return e == qi || e == Ki || e == Hi || e == Gi;
}
var Yi = Kn["__core-js_shared__"];
const rn = Yi;
var Ir = function() {
  var t = /[^.]+$/.exec(rn && rn.keys && rn.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Xi(t) {
  return !!Ir && Ir in t;
}
var Zi = Function.prototype, Qi = Zi.toString;
function el(t) {
  if (t != null) {
    try {
      return Qi.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var tl = /[\\^$.*+?()[\]{}|]/g, sl = /^\[object .+?Constructor\]$/, nl = Function.prototype, rl = Object.prototype, ol = nl.toString, al = rl.hasOwnProperty, il = RegExp(
  "^" + ol.call(al).replace(tl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ll(t) {
  if (!js(t) || Xi(t))
    return !1;
  var e = Ji(t) ? il : sl;
  return e.test(el(t));
}
function cl(t, e) {
  return t == null ? void 0 : t[e];
}
function Xn(t, e) {
  var s = cl(t, e);
  return ll(s) ? s : void 0;
}
function ul(t, e, s) {
  switch (s.length) {
    case 0:
      return t.call(e);
    case 1:
      return t.call(e, s[0]);
    case 2:
      return t.call(e, s[0], s[1]);
    case 3:
      return t.call(e, s[0], s[1], s[2]);
  }
  return t.apply(e, s);
}
var dl = 800, hl = 16, fl = Date.now;
function pl(t) {
  var e = 0, s = 0;
  return function() {
    var n = fl(), r = hl - (n - s);
    if (s = n, r > 0) {
      if (++e >= dl)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
function vl(t) {
  return function() {
    return t;
  };
}
var gl = function() {
  try {
    var t = Xn(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}();
const Rs = gl;
var ml = Rs ? function(t, e) {
  return Rs(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: vl(e),
    writable: !0
  });
} : Wi;
const yl = ml;
var _l = pl(yl);
const bl = _l;
var wl = 9007199254740991, kl = /^(?:0|[1-9]\d*)$/;
function Ko(t, e) {
  var s = typeof t;
  return e = e ?? wl, !!e && (s == "number" || s != "symbol" && kl.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function Sl(t, e, s) {
  e == "__proto__" && Rs ? Rs(t, e, {
    configurable: !0,
    enumerable: !0,
    value: s,
    writable: !0
  }) : t[e] = s;
}
function Go(t, e) {
  return t === e || t !== t && e !== e;
}
var El = Object.prototype, Tl = El.hasOwnProperty;
function Cl(t, e, s) {
  var n = t[e];
  (!(Tl.call(t, e) && Go(n, s)) || s === void 0 && !(e in t)) && Sl(t, e, s);
}
var Ar = Math.max;
function Ol(t, e, s) {
  return e = Ar(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var n = arguments, r = -1, o = Ar(n.length - e, 0), a = Array(o); ++r < o; )
      a[r] = n[e + r];
    r = -1;
    for (var i = Array(e + 1); ++r < e; )
      i[r] = n[r];
    return i[e] = s(a), ul(t, this, i);
  };
}
var Il = 9007199254740991;
function Al(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Il;
}
var Pl = "[object Arguments]";
function Pr(t) {
  return Jn(t) && Gn(t) == Pl;
}
var Jo = Object.prototype, $l = Jo.hasOwnProperty, xl = Jo.propertyIsEnumerable, jl = Pr(function() {
  return arguments;
}()) ? Pr : function(t) {
  return Jn(t) && $l.call(t, "callee") && !xl.call(t, "callee");
};
const Yo = jl;
var Rl = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Nl = /^\w*$/;
function Ll(t, e) {
  if (hs(t))
    return !1;
  var s = typeof t;
  return s == "number" || s == "symbol" || s == "boolean" || t == null || Yn(t) ? !0 : Nl.test(t) || !Rl.test(t) || e != null && t in Object(e);
}
var Ml = Xn(Object, "create");
const as = Ml;
function Ul() {
  this.__data__ = as ? as(null) : {}, this.size = 0;
}
function Dl(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var Bl = "__lodash_hash_undefined__", Fl = Object.prototype, zl = Fl.hasOwnProperty;
function Vl(t) {
  var e = this.__data__;
  if (as) {
    var s = e[t];
    return s === Bl ? void 0 : s;
  }
  return zl.call(e, t) ? e[t] : void 0;
}
var Wl = Object.prototype, Hl = Wl.hasOwnProperty;
function ql(t) {
  var e = this.__data__;
  return as ? e[t] !== void 0 : Hl.call(e, t);
}
var Kl = "__lodash_hash_undefined__";
function Gl(t, e) {
  var s = this.__data__;
  return this.size += this.has(t) ? 0 : 1, s[t] = as && e === void 0 ? Kl : e, this;
}
function _t(t) {
  var e = -1, s = t == null ? 0 : t.length;
  for (this.clear(); ++e < s; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
_t.prototype.clear = Ul;
_t.prototype.delete = Dl;
_t.prototype.get = Vl;
_t.prototype.has = ql;
_t.prototype.set = Gl;
function Jl() {
  this.__data__ = [], this.size = 0;
}
function Ws(t, e) {
  for (var s = t.length; s--; )
    if (Go(t[s][0], e))
      return s;
  return -1;
}
var Yl = Array.prototype, Xl = Yl.splice;
function Zl(t) {
  var e = this.__data__, s = Ws(e, t);
  if (s < 0)
    return !1;
  var n = e.length - 1;
  return s == n ? e.pop() : Xl.call(e, s, 1), --this.size, !0;
}
function Ql(t) {
  var e = this.__data__, s = Ws(e, t);
  return s < 0 ? void 0 : e[s][1];
}
function ec(t) {
  return Ws(this.__data__, t) > -1;
}
function tc(t, e) {
  var s = this.__data__, n = Ws(s, t);
  return n < 0 ? (++this.size, s.push([t, e])) : s[n][1] = e, this;
}
function Dt(t) {
  var e = -1, s = t == null ? 0 : t.length;
  for (this.clear(); ++e < s; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
Dt.prototype.clear = Jl;
Dt.prototype.delete = Zl;
Dt.prototype.get = Ql;
Dt.prototype.has = ec;
Dt.prototype.set = tc;
var sc = Xn(Kn, "Map");
const nc = sc;
function rc() {
  this.size = 0, this.__data__ = {
    hash: new _t(),
    map: new (nc || Dt)(),
    string: new _t()
  };
}
function oc(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function Hs(t, e) {
  var s = t.__data__;
  return oc(e) ? s[typeof e == "string" ? "string" : "hash"] : s.map;
}
function ac(t) {
  var e = Hs(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function ic(t) {
  return Hs(this, t).get(t);
}
function lc(t) {
  return Hs(this, t).has(t);
}
function cc(t, e) {
  var s = Hs(this, t), n = s.size;
  return s.set(t, e), this.size += s.size == n ? 0 : 1, this;
}
function St(t) {
  var e = -1, s = t == null ? 0 : t.length;
  for (this.clear(); ++e < s; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
St.prototype.clear = rc;
St.prototype.delete = ac;
St.prototype.get = ic;
St.prototype.has = lc;
St.prototype.set = cc;
var uc = "Expected a function";
function Zn(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(uc);
  var s = function() {
    var n = arguments, r = e ? e.apply(this, n) : n[0], o = s.cache;
    if (o.has(r))
      return o.get(r);
    var a = t.apply(this, n);
    return s.cache = o.set(r, a) || o, a;
  };
  return s.cache = new (Zn.Cache || St)(), s;
}
Zn.Cache = St;
var dc = 500;
function hc(t) {
  var e = Zn(t, function(n) {
    return s.size === dc && s.clear(), n;
  }), s = e.cache;
  return e;
}
var fc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, pc = /\\(\\)?/g, vc = hc(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(fc, function(s, n, r, o) {
    e.push(r ? o.replace(pc, "$1") : n || s);
  }), e;
});
const gc = vc;
function mc(t) {
  return t == null ? "" : qo(t);
}
function qs(t, e) {
  return hs(t) ? t : Ll(t, e) ? [t] : gc(mc(t));
}
var yc = 1 / 0;
function Qn(t) {
  if (typeof t == "string" || Yn(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -yc ? "-0" : e;
}
function Xo(t, e) {
  e = qs(e, t);
  for (var s = 0, n = e.length; t != null && s < n; )
    t = t[Qn(e[s++])];
  return s && s == n ? t : void 0;
}
function _c(t, e, s) {
  var n = t == null ? void 0 : Xo(t, e);
  return n === void 0 ? s : n;
}
function bc(t, e) {
  for (var s = -1, n = e.length, r = t.length; ++s < n; )
    t[r + s] = e[s];
  return t;
}
var $r = nt ? nt.isConcatSpreadable : void 0;
function wc(t) {
  return hs(t) || Yo(t) || !!($r && t && t[$r]);
}
function Zo(t, e, s, n, r) {
  var o = -1, a = t.length;
  for (s || (s = wc), r || (r = []); ++o < a; ) {
    var i = t[o];
    e > 0 && s(i) ? e > 1 ? Zo(i, e - 1, s, n, r) : bc(r, i) : n || (r[r.length] = i);
  }
  return r;
}
function kc(t) {
  var e = t == null ? 0 : t.length;
  return e ? Zo(t, 1) : [];
}
function Sc(t) {
  return bl(Ol(t, void 0, kc), t + "");
}
function Ec(t, e) {
  return t != null && e in Object(t);
}
function Tc(t, e, s) {
  e = qs(e, t);
  for (var n = -1, r = e.length, o = !1; ++n < r; ) {
    var a = Qn(e[n]);
    if (!(o = t != null && s(t, a)))
      break;
    t = t[a];
  }
  return o || ++n != r ? o : (r = t == null ? 0 : t.length, !!r && Al(r) && Ko(a, r) && (hs(t) || Yo(t)));
}
function Cc(t, e) {
  return t != null && Tc(t, e, Ec);
}
function Qo(t) {
  for (var e = -1, s = t == null ? 0 : t.length, n = {}; ++e < s; ) {
    var r = t[e];
    n[r[0]] = r[1];
  }
  return n;
}
function ea(t) {
  return t == null;
}
function Oc(t, e, s, n) {
  if (!js(t))
    return t;
  e = qs(e, t);
  for (var r = -1, o = e.length, a = o - 1, i = t; i != null && ++r < o; ) {
    var l = Qn(e[r]), c = s;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return t;
    if (r != a) {
      var u = i[l];
      c = n ? n(u, l, i) : void 0, c === void 0 && (c = js(u) ? u : Ko(e[r + 1]) ? [] : {});
    }
    Cl(i, l, c), i = i[l];
  }
  return t;
}
function Ic(t, e, s) {
  for (var n = -1, r = e.length, o = {}; ++n < r; ) {
    var a = e[n], i = Xo(t, a);
    s(i, a) && Oc(o, qs(a, t), i);
  }
  return o;
}
function Ac(t, e) {
  return Ic(t, e, function(s, n) {
    return Cc(t, n);
  });
}
var Pc = Sc(function(t, e) {
  return t == null ? {} : Ac(t, e);
});
const $c = Pc, ta = (t) => t === void 0, on = (t) => typeof t == "boolean", Ve = (t) => typeof t == "number", is = (t) => typeof Element > "u" ? !1 : t instanceof Element, xc = (t) => Se(t) ? !Number.isNaN(Number(t)) : !1;
var jc = !1;
function ms(t, e, s) {
  return Array.isArray(t) ? (t.length = Math.max(t.length, e), t.splice(e, 1, s), s) : (t[e] = s, s);
}
function an(t, e) {
  if (Array.isArray(t)) {
    t.splice(e, 1);
    return;
  }
  delete t[e];
}
var Rc = Object.defineProperty, Nc = Object.defineProperties, Lc = Object.getOwnPropertyDescriptors, xr = Object.getOwnPropertySymbols, Mc = Object.prototype.hasOwnProperty, Uc = Object.prototype.propertyIsEnumerable, jr = (t, e, s) => e in t ? Rc(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, Dc = (t, e) => {
  for (var s in e || (e = {}))
    Mc.call(e, s) && jr(t, s, e[s]);
  if (xr)
    for (var s of xr(e))
      Uc.call(e, s) && jr(t, s, e[s]);
  return t;
}, Bc = (t, e) => Nc(t, Lc(e));
function Fc(t, e) {
  var s;
  const n = Xt();
  return Do(() => {
    n.value = t();
  }, Bc(Dc({}, e), {
    flush: (s = e == null ? void 0 : e.flush) != null ? s : "sync"
  })), Uo(n);
}
var Rr;
const ve = typeof window < "u", zc = (t) => typeof t == "string", Vc = () => {
};
ve && ((Rr = window == null ? void 0 : window.navigator) != null && Rr.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function er(t) {
  return typeof t == "function" ? t() : y(t);
}
function Wc(t) {
  return t;
}
function tr(t) {
  return Mo() ? (zn(t), !0) : !1;
}
function Hc(t, e = !0) {
  Ee() ? ye(t) : e ? t() : oe(t);
}
function qc(t, e, s = {}) {
  const {
    immediate: n = !0
  } = s, r = R(!1);
  let o = null;
  function a() {
    o && (clearTimeout(o), o = null);
  }
  function i() {
    r.value = !1, a();
  }
  function l(...c) {
    a(), r.value = !0, o = setTimeout(() => {
      r.value = !1, o = null, t(...c);
    }, er(e));
  }
  return n && (r.value = !0, ve && l()), tr(i), {
    isPending: Uo(r),
    start: l,
    stop: i
  };
}
function sa(t) {
  var e;
  const s = er(t);
  return (e = s == null ? void 0 : s.$el) != null ? e : s;
}
const na = ve ? window : void 0;
function As(...t) {
  let e, s, n, r;
  if (zc(t[0]) || Array.isArray(t[0]) ? ([s, n, r] = t, e = na) : [e, s, n, r] = t, !e)
    return Vc;
  Array.isArray(s) || (s = [s]), Array.isArray(n) || (n = [n]);
  const o = [], a = () => {
    o.forEach((u) => u()), o.length = 0;
  }, i = (u, d, f, p) => (u.addEventListener(d, f, p), () => u.removeEventListener(d, f, p)), l = te(() => [sa(e), er(r)], ([u, d]) => {
    a(), u && o.push(...s.flatMap((f) => n.map((p) => i(u, f, p, d))));
  }, { immediate: !0, flush: "post" }), c = () => {
    l(), a();
  };
  return tr(c), c;
}
function Kc(t, e = !1) {
  const s = R(), n = () => s.value = !!t();
  return n(), Hc(n, e), s;
}
const Nr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Lr = "__vueuse_ssr_handlers__";
Nr[Lr] = Nr[Lr] || {};
var Mr = Object.getOwnPropertySymbols, Gc = Object.prototype.hasOwnProperty, Jc = Object.prototype.propertyIsEnumerable, Yc = (t, e) => {
  var s = {};
  for (var n in t)
    Gc.call(t, n) && e.indexOf(n) < 0 && (s[n] = t[n]);
  if (t != null && Mr)
    for (var n of Mr(t))
      e.indexOf(n) < 0 && Jc.call(t, n) && (s[n] = t[n]);
  return s;
};
function ra(t, e, s = {}) {
  const n = s, { window: r = na } = n, o = Yc(n, ["window"]);
  let a;
  const i = Kc(() => r && "ResizeObserver" in r), l = () => {
    a && (a.disconnect(), a = void 0);
  }, c = te(() => sa(t), (d) => {
    l(), i.value && r && d && (a = new ResizeObserver(e), a.observe(d, o));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), c();
  };
  return tr(u), {
    isSupported: i,
    stop: u
  };
}
var Ur;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})(Ur || (Ur = {}));
var Xc = Object.defineProperty, Dr = Object.getOwnPropertySymbols, Zc = Object.prototype.hasOwnProperty, Qc = Object.prototype.propertyIsEnumerable, Br = (t, e, s) => e in t ? Xc(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, eu = (t, e) => {
  for (var s in e || (e = {}))
    Zc.call(e, s) && Br(t, s, e[s]);
  if (Dr)
    for (var s of Dr(e))
      Qc.call(e, s) && Br(t, s, e[s]);
  return t;
};
const tu = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
eu({
  linear: Wc
}, tu);
const Fr = {
  current: 0
}, zr = R(0), oa = 2e3, Vr = Symbol("elZIndexContextKey"), aa = Symbol("zIndexContextKey"), su = (t) => {
  const e = Ee() ? de(Vr, Fr) : Fr, s = t || (Ee() ? de(aa, void 0) : void 0), n = C(() => {
    const a = y(s);
    return Ve(a) ? a : oa;
  }), r = C(() => n.value + zr.value), o = () => (e.current++, zr.value = e.current, r.value);
  return !ve && de(Vr), {
    initialZIndex: n,
    currentZIndex: r,
    nextZIndex: o
  };
};
var nu = {
  name: "en",
  el: {
    breadcrumb: {
      label: "Breadcrumb"
    },
    colorpicker: {
      confirm: "OK",
      clear: "Clear",
      defaultLabel: "color picker",
      description: "current color is {color}. press enter to select a new color.",
      alphaLabel: "pick alpha value"
    },
    datepicker: {
      now: "Now",
      today: "Today",
      cancel: "Cancel",
      clear: "Clear",
      confirm: "OK",
      dateTablePrompt: "Use the arrow keys and enter to select the day of the month",
      monthTablePrompt: "Use the arrow keys and enter to select the month",
      yearTablePrompt: "Use the arrow keys and enter to select the year",
      selectedDate: "Selected date",
      selectDate: "Select date",
      selectTime: "Select time",
      startDate: "Start Date",
      startTime: "Start Time",
      endDate: "End Date",
      endTime: "End Time",
      prevYear: "Previous Year",
      nextYear: "Next Year",
      prevMonth: "Previous Month",
      nextMonth: "Next Month",
      year: "",
      month1: "January",
      month2: "February",
      month3: "March",
      month4: "April",
      month5: "May",
      month6: "June",
      month7: "July",
      month8: "August",
      month9: "September",
      month10: "October",
      month11: "November",
      month12: "December",
      week: "week",
      weeks: {
        sun: "Sun",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat"
      },
      weeksFull: {
        sun: "Sunday",
        mon: "Monday",
        tue: "Tuesday",
        wed: "Wednesday",
        thu: "Thursday",
        fri: "Friday",
        sat: "Saturday"
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
        jul: "Jul",
        aug: "Aug",
        sep: "Sep",
        oct: "Oct",
        nov: "Nov",
        dec: "Dec"
      }
    },
    inputNumber: {
      decrease: "decrease number",
      increase: "increase number"
    },
    select: {
      loading: "Loading",
      noMatch: "No matching data",
      noData: "No data",
      placeholder: "Select"
    },
    mention: {
      loading: "Loading"
    },
    dropdown: {
      toggleDropdown: "Toggle Dropdown"
    },
    cascader: {
      noMatch: "No matching data",
      loading: "Loading",
      placeholder: "Select",
      noData: "No data"
    },
    pagination: {
      goto: "Go to",
      pagesize: "/page",
      total: "Total {total}",
      pageClassifier: "",
      page: "Page",
      prev: "Go to previous page",
      next: "Go to next page",
      currentPage: "page {pager}",
      prevPages: "Previous {pager} pages",
      nextPages: "Next {pager} pages",
      deprecationWarning: "Deprecated usages detected, please refer to the el-pagination documentation for more details"
    },
    dialog: {
      close: "Close this dialog"
    },
    drawer: {
      close: "Close this dialog"
    },
    messagebox: {
      title: "Message",
      confirm: "OK",
      cancel: "Cancel",
      error: "Illegal input",
      close: "Close this dialog"
    },
    upload: {
      deleteTip: "press delete to remove",
      delete: "Delete",
      preview: "Preview",
      continue: "Continue"
    },
    slider: {
      defaultLabel: "slider between {min} and {max}",
      defaultRangeStartLabel: "pick start value",
      defaultRangeEndLabel: "pick end value"
    },
    table: {
      emptyText: "No Data",
      confirmFilter: "Confirm",
      resetFilter: "Reset",
      clearFilter: "All",
      sumText: "Sum"
    },
    tour: {
      next: "Next",
      previous: "Previous",
      finish: "Finish"
    },
    tree: {
      emptyText: "No Data"
    },
    transfer: {
      noMatch: "No matching data",
      noData: "No data",
      titles: ["List 1", "List 2"],
      filterPlaceholder: "Enter keyword",
      noCheckedFormat: "{total} items",
      hasCheckedFormat: "{checked}/{total} checked"
    },
    image: {
      error: "FAILED"
    },
    pageHeader: {
      title: "Back"
    },
    popconfirm: {
      confirmButtonText: "Yes",
      cancelButtonText: "No"
    },
    carousel: {
      leftArrow: "Carousel arrow left",
      rightArrow: "Carousel arrow right",
      indicator: "Carousel switch to index {index}"
    }
  }
};
const ru = (t) => (e, s) => ou(e, s, y(t)), ou = (t, e, s) => _c(s, t, t).replace(/\{(\w+)\}/g, (n, r) => {
  var o;
  return `${(o = e == null ? void 0 : e[r]) != null ? o : `{${r}}`}`;
}), au = (t) => {
  const e = C(() => y(t).name), s = mt(t) ? t : R(t);
  return {
    lang: e,
    locale: s,
    t: ru(t)
  };
}, ia = Symbol("localeContextKey"), iu = (t) => {
  const e = t || de(ia, R());
  return au(C(() => e.value || nu));
}, la = "__epPropKey", ee = (t) => t, lu = (t) => Mt(t) && !!t[la], ca = (t, e) => {
  if (!Mt(t) || lu(t))
    return t;
  const { values: s, required: n, default: r, type: o, validator: a } = t, l = {
    type: o,
    required: !!n,
    validator: s || a ? (c) => {
      let u = !1, d = [];
      if (s && (d = Array.from(s), os(t, "default") && d.push(r), u || (u = d.includes(c))), a && (u || (u = a(c))), !u && d.length > 0) {
        const f = [...new Set(d)].map((p) => JSON.stringify(p)).join(", ");
        pi(`Invalid prop: validation failed${e ? ` for prop "${e}"` : ""}. Expected one of [${f}], got value ${JSON.stringify(c)}.`);
      }
      return u;
    } : void 0,
    [la]: !0
  };
  return os(t, "default") && (l.default = r), l;
}, qe = (t) => Qo(Object.entries(t).map(([e, s]) => [
  e,
  ca(s, e)
])), ua = ["", "default", "small", "large"], sr = ca({
  type: String,
  values: ua,
  required: !1
}), da = Symbol("size"), cu = () => {
  const t = de(da, {});
  return C(() => y(t.size) || "");
}, uu = Symbol("emptyValuesContextKey"), du = qe({
  emptyValues: Array,
  valueOnClear: {
    type: ee([
      String,
      Number,
      Boolean,
      Function
    ]),
    default: void 0,
    validator: (t) => ze(t) ? !t() : !t
  }
}), Wr = (t) => Object.keys(t), Ns = R();
function nr(t, e = void 0) {
  const s = Ee() ? de(zo, Ns) : Ns;
  return t ? C(() => {
    var n, r;
    return (r = (n = s.value) == null ? void 0 : n[t]) != null ? r : e;
  }) : s;
}
function ha(t, e) {
  const s = nr(), n = Le(t, C(() => {
    var i;
    return ((i = s.value) == null ? void 0 : i.namespace) || Is;
  })), r = iu(C(() => {
    var i;
    return (i = s.value) == null ? void 0 : i.locale;
  })), o = su(C(() => {
    var i;
    return ((i = s.value) == null ? void 0 : i.zIndex) || oa;
  })), a = C(() => {
    var i;
    return y(e) || ((i = s.value) == null ? void 0 : i.size) || "";
  });
  return fa(C(() => y(s) || {})), {
    ns: n,
    locale: r,
    zIndex: o,
    size: a
  };
}
const fa = (t, e, s = !1) => {
  var n;
  const r = !!Ee(), o = r ? nr() : void 0, a = (n = e == null ? void 0 : e.provide) != null ? n : r ? Vn : void 0;
  if (!a)
    return;
  const i = C(() => {
    const l = y(t);
    return o != null && o.value ? hu(o.value, l) : l;
  });
  return a(zo, i), a(ia, C(() => i.value.locale)), a(Vo, C(() => i.value.namespace)), a(aa, C(() => i.value.zIndex)), a(da, {
    size: C(() => i.value.size || "")
  }), a(uu, C(() => ({
    emptyValues: i.value.emptyValues,
    valueOnClear: i.value.valueOnClear
  }))), (s || !Ns.value) && (Ns.value = i.value), i;
}, hu = (t, e) => {
  const s = [.../* @__PURE__ */ new Set([...Wr(t), ...Wr(e)])], n = {};
  for (const r of s)
    n[r] = e[r] !== void 0 ? e[r] : t[r];
  return n;
}, Sn = "update:modelValue", Hr = "change", qr = "input";
var ot = (t, e) => {
  const s = t.__vccOpts || t;
  for (const [n, r] of e)
    s[n] = r;
  return s;
};
const pa = (t = "") => t.split(" ").filter((e) => !!e.trim()), Kr = (t, e) => {
  if (!t || !e)
    return !1;
  if (e.includes(" "))
    throw new Error("className should not contain space.");
  return t.classList.contains(e);
}, fu = (t, e) => {
  !t || !e.trim() || t.classList.add(...pa(e));
}, pu = (t, e) => {
  !t || !e.trim() || t.classList.remove(...pa(e));
}, vu = (t, e) => {
  var s;
  if (!ve || !t || !e)
    return "";
  let n = Ci(e);
  n === "float" && (n = "cssFloat");
  try {
    const r = t.style[n];
    if (r)
      return r;
    const o = (s = document.defaultView) == null ? void 0 : s.getComputedStyle(t, "");
    return o ? o[n] : "";
  } catch {
    return t.style[n];
  }
};
function ls(t, e = "px") {
  if (!t)
    return "";
  if (Ve(t) || xc(t))
    return `${t}${e}`;
  if (Se(t))
    return t;
}
let ys;
const gu = (t) => {
  var e;
  if (!ve)
    return 0;
  if (ys !== void 0)
    return ys;
  const s = document.createElement("div");
  s.className = `${t}-scrollbar__wrap`, s.style.visibility = "hidden", s.style.width = "100px", s.style.position = "absolute", s.style.top = "-9999px", document.body.appendChild(s);
  const n = s.offsetWidth;
  s.style.overflow = "scroll";
  const r = document.createElement("div");
  r.style.width = "100%", s.appendChild(r);
  const o = r.offsetWidth;
  return (e = s.parentNode) == null || e.removeChild(s), ys = n - o, ys;
};
class mu extends Error {
  constructor(e) {
    super(e), this.name = "ElementPlusError";
  }
}
function yu(t, e) {
  throw new mu(`[${t}] ${e}`);
}
const Ks = (t, e) => {
  if (t.install = (s) => {
    for (const n of [t, ...Object.values(e ?? {})])
      s.component(n.name, n);
  }, e)
    for (const [s, n] of Object.entries(e))
      t[s] = n;
  return t;
}, _u = (t, e) => (t.install = (s) => {
  t._context = s._context, s.config.globalProperties[e] = t;
}, t), bu = (t) => (t.install = es, t), wu = qe({
  size: {
    type: ee([Number, String])
  },
  color: {
    type: String
  }
}), ku = G({
  name: "ElIcon",
  inheritAttrs: !1
}), Su = /* @__PURE__ */ G({
  ...ku,
  props: wu,
  setup(t) {
    const e = t, s = Le("icon"), n = C(() => {
      const { size: r, color: o } = e;
      return !r && !o ? {} : {
        fontSize: ta(r) ? void 0 : ls(r),
        "--color": o
      };
    });
    return (r, o) => (S(), N("i", $s({
      class: y(s).b(),
      style: y(n)
    }, r.$attrs), [
      ae(r.$slots, "default")
    ], 16));
  }
});
var Eu = /* @__PURE__ */ ot(Su, [["__file", "icon.vue"]]);
const Ne = Ks(Eu);
/*! Element Plus Icons Vue v2.3.2 */
var Tu = /* @__PURE__ */ G({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(t) {
    return (e, s) => (S(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"
      })
    ]));
  }
}), Gr = Tu, Cu = /* @__PURE__ */ G({
  name: "Check",
  __name: "check",
  setup(t) {
    return (e, s) => (S(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      })
    ]));
  }
}), Ou = Cu, Iu = /* @__PURE__ */ G({
  name: "CircleCheck",
  __name: "circle-check",
  setup(t) {
    return (e, s) => (S(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      $("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752z"
      })
    ]));
  }
}), Au = Iu, Pu = /* @__PURE__ */ G({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(t) {
    return (e, s) => (S(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), va = Pu, $u = /* @__PURE__ */ G({
  name: "CircleClose",
  __name: "circle-close",
  setup(t) {
    return (e, s) => (S(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      $("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
}), ga = $u, xu = /* @__PURE__ */ G({
  name: "Close",
  __name: "close",
  setup(t) {
    return (e, s) => (S(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), ju = xu, Ru = /* @__PURE__ */ G({
  name: "Hide",
  __name: "hide",
  setup(t) {
    return (e, s) => (S(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4s-12.8-9.6-22.4-9.6-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176S0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4s3.2 16 9.6 22.4 12.8 9.6 22.4 9.6 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4m-646.4 528Q115.2 579.2 76.8 512q43.2-72 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4m140.8-96Q352 555.2 352 512c0-44.8 16-83.2 48-112s67.2-48 112-48c28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6q-43.2 72-153.6 172.8c-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176S1024 528 1024 512s-48.001-73.6-134.401-176"
      }),
      $("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112s-67.2 48-112 48"
      })
    ]));
  }
}), Nu = Ru, Lu = /* @__PURE__ */ G({
  name: "InfoFilled",
  __name: "info-filled",
  setup(t) {
    return (e, s) => (S(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.99 12.99 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), En = Lu, Mu = /* @__PURE__ */ G({
  name: "Loading",
  __name: "loading",
  setup(t) {
    return (e, s) => (S(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248m452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248M828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0"
      })
    ]));
  }
}), Ls = Mu, Uu = /* @__PURE__ */ G({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(t) {
    return (e, s) => (S(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.27 38.27 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), ma = Uu, Du = /* @__PURE__ */ G({
  name: "View",
  __name: "view",
  setup(t) {
    return (e, s) => (S(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288m0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.19 160.19 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), Bu = Du, Fu = /* @__PURE__ */ G({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(t) {
    return (e, s) => (S(), N("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.43 58.43 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.43 58.43 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), ya = Fu;
const Nt = ee([
  String,
  Object,
  Function
]), _a = {
  Close: ju,
  SuccessFilled: ma,
  InfoFilled: En,
  WarningFilled: ya,
  CircleCloseFilled: va
}, Ms = {
  primary: En,
  success: ma,
  warning: ya,
  error: va,
  info: En
}, zu = {
  validating: Ls,
  success: Au,
  error: ga
}, Vu = () => ve && /firefox/i.test(window.navigator.userAgent);
let he;
const Wu = {
  height: "0",
  visibility: "hidden",
  overflow: Vu() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, Hu = [
  "letter-spacing",
  "line-height",
  "padding-top",
  "padding-bottom",
  "font-family",
  "font-weight",
  "font-size",
  "text-rendering",
  "text-transform",
  "width",
  "text-indent",
  "padding-left",
  "padding-right",
  "border-width",
  "box-sizing",
  "word-break"
];
function qu(t) {
  const e = window.getComputedStyle(t), s = e.getPropertyValue("box-sizing"), n = Number.parseFloat(e.getPropertyValue("padding-bottom")) + Number.parseFloat(e.getPropertyValue("padding-top")), r = Number.parseFloat(e.getPropertyValue("border-bottom-width")) + Number.parseFloat(e.getPropertyValue("border-top-width"));
  return { contextStyle: Hu.map((a) => [
    a,
    e.getPropertyValue(a)
  ]), paddingSize: n, borderSize: r, boxSizing: s };
}
function Jr(t, e = 1, s) {
  var n, r;
  he || (he = document.createElement("textarea"), ((n = t.parentNode) != null ? n : document.body).appendChild(he));
  const { paddingSize: o, borderSize: a, boxSizing: i, contextStyle: l } = qu(t);
  l.forEach(([f, p]) => he == null ? void 0 : he.style.setProperty(f, p)), Object.entries(Wu).forEach(([f, p]) => he == null ? void 0 : he.style.setProperty(f, p, "important")), he.value = t.value || t.placeholder || "";
  let c = he.scrollHeight;
  const u = {};
  i === "border-box" ? c = c + a : i === "content-box" && (c = c - o), he.value = "";
  const d = he.scrollHeight - o;
  if (Ve(e)) {
    let f = d * e;
    i === "border-box" && (f = f + o + a), c = Math.max(f, c), u.minHeight = `${f}px`;
  }
  if (Ve(s)) {
    let f = d * s;
    i === "border-box" && (f = f + o + a), c = Math.min(f, c);
  }
  return u.height = `${c}px`, (r = he.parentNode) == null || r.removeChild(he), he = void 0, u;
}
const ba = (t) => t, Ku = qe({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), Gu = (t) => $c(Ku, t), Ju = qe({
  id: {
    type: String,
    default: void 0
  },
  size: sr,
  disabled: Boolean,
  modelValue: {
    type: ee([
      String,
      Number,
      Object
    ]),
    default: ""
  },
  maxlength: {
    type: [String, Number]
  },
  minlength: {
    type: [String, Number]
  },
  type: {
    type: String,
    default: "text"
  },
  resize: {
    type: String,
    values: ["none", "both", "horizontal", "vertical"]
  },
  autosize: {
    type: ee([Boolean, Object]),
    default: !1
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  formatter: {
    type: Function
  },
  parser: {
    type: Function
  },
  placeholder: {
    type: String
  },
  form: {
    type: String
  },
  readonly: Boolean,
  clearable: Boolean,
  clearIcon: {
    type: Nt,
    default: ga
  },
  showPassword: Boolean,
  showWordLimit: Boolean,
  suffixIcon: {
    type: Nt
  },
  prefixIcon: {
    type: Nt
  },
  containerRole: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  inputStyle: {
    type: ee([Object, Array, String]),
    default: () => ba({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...Gu(["ariaLabel"]),
  inputmode: {
    type: ee(String),
    default: void 0
  },
  name: String
}), Yu = {
  [Sn]: (t) => Se(t),
  input: (t) => Se(t),
  change: (t) => Se(t),
  focus: (t) => t instanceof FocusEvent,
  blur: (t) => t instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (t) => t instanceof MouseEvent,
  mouseenter: (t) => t instanceof MouseEvent,
  keydown: (t) => t instanceof Event,
  compositionstart: (t) => t instanceof CompositionEvent,
  compositionupdate: (t) => t instanceof CompositionEvent,
  compositionend: (t) => t instanceof CompositionEvent
}, Xu = ["class", "style"], Zu = /^on[A-Z]/, Qu = (t = {}) => {
  const { excludeListeners: e = !1, excludeKeys: s } = t, n = C(() => ((s == null ? void 0 : s.value) || []).concat(Xu)), r = Ee();
  return r ? C(() => {
    var o;
    return Qo(Object.entries((o = r.proxy) == null ? void 0 : o.$attrs).filter(([a]) => !n.value.includes(a) && !(e && Zu.test(a))));
  }) : C(() => ({}));
}, Yr = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, ed = Symbol("elIdInjection"), td = () => Ee() ? de(ed, Yr) : Yr, Tn = (t) => {
  const e = td(), s = Wo();
  return Fc(() => y(t) || `${s.value}-id-${e.prefix}-${e.current++}`);
}, rr = Symbol("formContextKey"), wa = Symbol("formItemContextKey"), ka = () => {
  const t = de(rr, void 0), e = de(wa, void 0);
  return {
    form: t,
    formItem: e
  };
}, sd = (t, {
  formItemContext: e,
  disableIdGeneration: s,
  disableIdManagement: n
}) => {
  s || (s = R(!1)), n || (n = R(!1));
  const r = Ee(), o = () => {
    let c = r == null ? void 0 : r.parent;
    for (; c; ) {
      if (c.type.name === "ElFormItem")
        return !1;
      if (c.type.name === "ElLabelWrap")
        return !0;
      c = c.parent;
    }
    return !1;
  }, a = R();
  let i;
  const l = C(() => {
    var c;
    return !!(!(t.label || t.ariaLabel) && e && e.inputIds && ((c = e.inputIds) == null ? void 0 : c.length) <= 1);
  });
  return ye(() => {
    i = te([gt(t, "id"), s], ([c, u]) => {
      const d = c ?? (u ? void 0 : Tn().value);
      d !== a.value && (e != null && e.removeInputId && !o() && (a.value && e.removeInputId(a.value), !(n != null && n.value) && !u && d && e.addInputId(d)), a.value = d);
    }, { immediate: !0 });
  }), vi(() => {
    i && i(), e != null && e.removeInputId && a.value && e.removeInputId(a.value);
  }), {
    isLabeledByFormItem: l,
    inputId: a
  };
}, Sa = (t) => {
  const e = Ee();
  return C(() => {
    var s, n;
    return (n = (s = e == null ? void 0 : e.proxy) == null ? void 0 : s.$props) == null ? void 0 : n[t];
  });
}, Ea = (t, e = {}) => {
  const s = R(void 0), n = e.prop ? s : Sa("size"), r = e.global ? s : cu(), o = e.form ? { size: void 0 } : de(rr, void 0), a = e.formItem ? { size: void 0 } : de(wa, void 0);
  return C(() => n.value || y(t) || (a == null ? void 0 : a.size) || (o == null ? void 0 : o.size) || r.value || "");
}, or = (t) => {
  const e = Sa("disabled"), s = de(rr, void 0);
  return C(() => e.value || y(t) || (s == null ? void 0 : s.disabled) || !1);
}, nd = 'a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])', rd = (t) => getComputedStyle(t).position === "fixed" ? !1 : t.offsetParent !== null, Xr = (t) => Array.from(t.querySelectorAll(nd)).filter((e) => ar(e) && rd(e)), ar = (t) => {
  if (t.tabIndex > 0 || t.tabIndex === 0 && t.getAttribute("tabIndex") !== null)
    return !0;
  if (t.tabIndex < 0 || t.hasAttribute("disabled") || t.getAttribute("aria-disabled") === "true")
    return !1;
  switch (t.nodeName) {
    case "A":
      return !!t.href && t.rel !== "ignore";
    case "INPUT":
      return !(t.type === "hidden" || t.type === "file");
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA":
      return !0;
    default:
      return !1;
  }
};
function od(t, {
  disabled: e,
  beforeFocus: s,
  afterFocus: n,
  beforeBlur: r,
  afterBlur: o
} = {}) {
  const a = Ee(), { emit: i } = a, l = Xt(), c = R(!1), u = (p) => {
    const h = ze(s) ? s(p) : !1;
    y(e) || c.value || h || (c.value = !0, i("focus", p), n == null || n());
  }, d = (p) => {
    var h;
    const g = ze(r) ? r(p) : !1;
    y(e) || p.relatedTarget && ((h = l.value) != null && h.contains(p.relatedTarget)) || g || (c.value = !1, i("blur", p), o == null || o());
  }, f = (p) => {
    var h, g;
    y(e) || ar(p.target) || (h = l.value) != null && h.contains(document.activeElement) && l.value !== document.activeElement || (g = t.value) == null || g.focus();
  };
  return te([l, () => y(e)], ([p, h]) => {
    p && (h ? p.removeAttribute("tabindex") : p.setAttribute("tabindex", "-1"));
  }), As(l, "focus", u, !0), As(l, "blur", d, !0), As(l, "click", f, !0), {
    isFocused: c,
    wrapperRef: l,
    handleFocus: u,
    handleBlur: d
  };
}
const ad = (t) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(t);
function id({
  afterComposition: t,
  emit: e
}) {
  const s = R(!1), n = (i) => {
    e == null || e("compositionstart", i), s.value = !0;
  }, r = (i) => {
    var l;
    e == null || e("compositionupdate", i);
    const c = (l = i.target) == null ? void 0 : l.value, u = c[c.length - 1] || "";
    s.value = !ad(u);
  }, o = (i) => {
    e == null || e("compositionend", i), s.value && (s.value = !1, oe(() => t(i)));
  };
  return {
    isComposing: s,
    handleComposition: (i) => {
      i.type === "compositionend" ? o(i) : r(i);
    },
    handleCompositionStart: n,
    handleCompositionUpdate: r,
    handleCompositionEnd: o
  };
}
function ld(t) {
  let e;
  function s() {
    if (t.value == null)
      return;
    const { selectionStart: r, selectionEnd: o, value: a } = t.value;
    if (r == null || o == null)
      return;
    const i = a.slice(0, Math.max(0, r)), l = a.slice(Math.max(0, o));
    e = {
      selectionStart: r,
      selectionEnd: o,
      value: a,
      beforeTxt: i,
      afterTxt: l
    };
  }
  function n() {
    if (t.value == null || e == null)
      return;
    const { value: r } = t.value, { beforeTxt: o, afterTxt: a, selectionStart: i } = e;
    if (o == null || a == null || i == null)
      return;
    let l = r.length;
    if (r.endsWith(a))
      l = r.length - a.length;
    else if (r.startsWith(o))
      l = o.length;
    else {
      const c = o[i - 1], u = r.indexOf(c, i - 1);
      u !== -1 && (l = u + 1);
    }
    t.value.setSelectionRange(l, l);
  }
  return [s, n];
}
const cd = "ElInput", ud = G({
  name: cd,
  inheritAttrs: !1
}), dd = /* @__PURE__ */ G({
  ...ud,
  props: Ju,
  emits: Yu,
  setup(t, { expose: e, emit: s }) {
    const n = t, r = gi(), o = Qu(), a = Bo(), i = C(() => [
      n.type === "textarea" ? g.b() : h.b(),
      h.m(f.value),
      h.is("disabled", p.value),
      h.is("exceed", re.value),
      {
        [h.b("group")]: a.prepend || a.append,
        [h.m("prefix")]: a.prefix || n.prefixIcon,
        [h.m("suffix")]: a.suffix || n.suffixIcon || n.clearable || n.showPassword,
        [h.bm("suffix", "password-clear")]: I.value && _.value,
        [h.b("hidden")]: n.type === "hidden"
      },
      r.class
    ]), l = C(() => [
      h.e("wrapper"),
      h.is("focus", H.value)
    ]), { form: c, formItem: u } = ka(), { inputId: d } = sd(n, {
      formItemContext: u
    }), f = Ea(), p = or(), h = Le("input"), g = Le("textarea"), b = Xt(), v = Xt(), k = R(!1), m = R(!1), A = R(), L = Xt(n.inputStyle), j = C(() => b.value || v.value), { wrapperRef: P, isFocused: H, handleFocus: q, handleBlur: E } = od(j, {
      disabled: p,
      afterBlur() {
        var T;
        n.validateEvent && ((T = u == null ? void 0 : u.validate) == null || T.call(u, "blur").catch((J) => void 0));
      }
    }), w = C(() => {
      var T;
      return (T = c == null ? void 0 : c.statusIcon) != null ? T : !1;
    }), O = C(() => (u == null ? void 0 : u.validateState) || ""), Z = C(() => O.value && zu[O.value]), ge = C(() => m.value ? Bu : Nu), xe = C(() => [
      r.style
    ]), Me = C(() => [
      n.inputStyle,
      L.value,
      { resize: n.resize }
    ]), W = C(() => ea(n.modelValue) ? "" : String(n.modelValue)), I = C(() => n.clearable && !p.value && !n.readonly && !!W.value && (H.value || k.value)), _ = C(() => n.showPassword && !p.value && !!W.value), x = C(() => n.showWordLimit && !!n.maxlength && (n.type === "text" || n.type === "textarea") && !p.value && !n.readonly && !n.showPassword), K = C(() => W.value.length), re = C(() => !!x.value && K.value > Number(n.maxlength)), _e = C(() => !!a.suffix || !!n.suffixIcon || I.value || n.showPassword || x.value || !!O.value && w.value), [Ce, Vt] = ld(b);
    ra(v, (T) => {
      if (Ke(), !x.value || n.resize !== "both")
        return;
      const J = T[0], { width: Tt } = J.contentRect;
      A.value = {
        right: `calc(100% - ${Tt + 15 + 6}px)`
      };
    });
    const it = () => {
      const { type: T, autosize: J } = n;
      if (!(!ve || T !== "textarea" || !v.value))
        if (J) {
          const Tt = Mt(J) ? J.minRows : void 0, Sr = Mt(J) ? J.maxRows : void 0, Er = Jr(v.value, Tt, Sr);
          L.value = {
            overflowY: "hidden",
            ...Er
          }, oe(() => {
            v.value.offsetHeight, L.value = Er;
          });
        } else
          L.value = {
            minHeight: Jr(v.value).minHeight
          };
    }, Ke = ((T) => {
      let J = !1;
      return () => {
        var Tt;
        if (J || !n.autosize)
          return;
        ((Tt = v.value) == null ? void 0 : Tt.offsetParent) === null || (T(), J = !0);
      };
    })(it), Ue = () => {
      const T = j.value, J = n.formatter ? n.formatter(W.value) : W.value;
      !T || T.value === J || (T.value = J);
    }, vs = async (T) => {
      Ce();
      let { value: J } = T.target;
      if (n.formatter && n.parser && (J = n.parser(J)), !mr.value) {
        if (J === W.value) {
          Ue();
          return;
        }
        s(Sn, J), s(qr, J), await oe(), Ue(), Vt();
      }
    }, gr = (T) => {
      let { value: J } = T.target;
      n.formatter && n.parser && (J = n.parser(J)), s(Hr, J);
    }, {
      isComposing: mr,
      handleCompositionStart: yr,
      handleCompositionUpdate: _r,
      handleCompositionEnd: br
    } = id({ emit: s, afterComposition: vs }), li = () => {
      Ce(), m.value = !m.value, setTimeout(Vt);
    }, ci = () => {
      var T;
      return (T = j.value) == null ? void 0 : T.focus();
    }, ui = () => {
      var T;
      return (T = j.value) == null ? void 0 : T.blur();
    }, di = (T) => {
      k.value = !1, s("mouseleave", T);
    }, hi = (T) => {
      k.value = !0, s("mouseenter", T);
    }, wr = (T) => {
      s("keydown", T);
    }, fi = () => {
      var T;
      (T = j.value) == null || T.select();
    }, kr = () => {
      s(Sn, ""), s(Hr, ""), s("clear"), s(qr, "");
    };
    return te(() => n.modelValue, () => {
      var T;
      oe(() => it()), n.validateEvent && ((T = u == null ? void 0 : u.validate) == null || T.call(u, "change").catch((J) => void 0));
    }), te(W, () => Ue()), te(() => n.type, async () => {
      await oe(), Ue(), it();
    }), ye(() => {
      !n.formatter && n.parser, Ue(), oe(it);
    }), e({
      input: b,
      textarea: v,
      ref: j,
      textareaStyle: Me,
      autosize: gt(n, "autosize"),
      isComposing: mr,
      focus: ci,
      blur: ui,
      select: fi,
      clear: kr,
      resizeTextarea: it
    }), (T, J) => (S(), N("div", {
      class: M([
        y(i),
        {
          [y(h).bm("group", "append")]: T.$slots.append,
          [y(h).bm("group", "prepend")]: T.$slots.prepend
        }
      ]),
      style: yt(y(xe)),
      onMouseenter: hi,
      onMouseleave: di
    }, [
      B(" input "),
      T.type !== "textarea" ? (S(), N(st, { key: 0 }, [
        B(" prepend slot "),
        T.$slots.prepend ? (S(), N("div", {
          key: 0,
          class: M(y(h).be("group", "prepend"))
        }, [
          ae(T.$slots, "prepend")
        ], 2)) : B("v-if", !0),
        $("div", {
          ref_key: "wrapperRef",
          ref: P,
          class: M(y(l))
        }, [
          B(" prefix slot "),
          T.$slots.prefix || T.prefixIcon ? (S(), N("span", {
            key: 0,
            class: M(y(h).e("prefix"))
          }, [
            $("span", {
              class: M(y(h).e("prefix-inner"))
            }, [
              ae(T.$slots, "prefix"),
              T.prefixIcon ? (S(), F(y(Ne), {
                key: 0,
                class: M(y(h).e("icon"))
              }, {
                default: U(() => [
                  (S(), F(pe(T.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : B("v-if", !0)
            ], 2)
          ], 2)) : B("v-if", !0),
          $("input", $s({
            id: y(d),
            ref_key: "input",
            ref: b,
            class: y(h).e("inner")
          }, y(o), {
            name: T.name,
            minlength: T.minlength,
            maxlength: T.maxlength,
            type: T.showPassword ? m.value ? "text" : "password" : T.type,
            disabled: y(p),
            readonly: T.readonly,
            autocomplete: T.autocomplete,
            tabindex: T.tabindex,
            "aria-label": T.ariaLabel,
            placeholder: T.placeholder,
            style: T.inputStyle,
            form: T.form,
            autofocus: T.autofocus,
            role: T.containerRole,
            inputmode: T.inputmode,
            onCompositionstart: y(yr),
            onCompositionupdate: y(_r),
            onCompositionend: y(br),
            onInput: vs,
            onChange: gr,
            onKeydown: wr
          }), null, 16, ["id", "name", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "inputmode", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          B(" suffix slot "),
          y(_e) ? (S(), N("span", {
            key: 1,
            class: M(y(h).e("suffix"))
          }, [
            $("span", {
              class: M(y(h).e("suffix-inner"))
            }, [
              !y(I) || !y(_) || !y(x) ? (S(), N(st, { key: 0 }, [
                ae(T.$slots, "suffix"),
                T.suffixIcon ? (S(), F(y(Ne), {
                  key: 0,
                  class: M(y(h).e("icon"))
                }, {
                  default: U(() => [
                    (S(), F(pe(T.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : B("v-if", !0)
              ], 64)) : B("v-if", !0),
              y(I) ? (S(), F(y(Ne), {
                key: 1,
                class: M([y(h).e("icon"), y(h).e("clear")]),
                onMousedown: Pe(y(es), ["prevent"]),
                onClick: kr
              }, {
                default: U(() => [
                  (S(), F(pe(T.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : B("v-if", !0),
              y(_) ? (S(), F(y(Ne), {
                key: 2,
                class: M([y(h).e("icon"), y(h).e("password")]),
                onClick: li
              }, {
                default: U(() => [
                  (S(), F(pe(y(ge))))
                ]),
                _: 1
              }, 8, ["class"])) : B("v-if", !0),
              y(x) ? (S(), N("span", {
                key: 3,
                class: M(y(h).e("count"))
              }, [
                $("span", {
                  class: M(y(h).e("count-inner"))
                }, Q(y(K)) + " / " + Q(T.maxlength), 3)
              ], 2)) : B("v-if", !0),
              y(O) && y(Z) && y(w) ? (S(), F(y(Ne), {
                key: 4,
                class: M([
                  y(h).e("icon"),
                  y(h).e("validateIcon"),
                  y(h).is("loading", y(O) === "validating")
                ])
              }, {
                default: U(() => [
                  (S(), F(pe(y(Z))))
                ]),
                _: 1
              }, 8, ["class"])) : B("v-if", !0)
            ], 2)
          ], 2)) : B("v-if", !0)
        ], 2),
        B(" append slot "),
        T.$slots.append ? (S(), N("div", {
          key: 1,
          class: M(y(h).be("group", "append"))
        }, [
          ae(T.$slots, "append")
        ], 2)) : B("v-if", !0)
      ], 64)) : (S(), N(st, { key: 1 }, [
        B(" textarea "),
        $("textarea", $s({
          id: y(d),
          ref_key: "textarea",
          ref: v,
          class: [y(g).e("inner"), y(h).is("focus", y(H))]
        }, y(o), {
          minlength: T.minlength,
          maxlength: T.maxlength,
          tabindex: T.tabindex,
          disabled: y(p),
          readonly: T.readonly,
          autocomplete: T.autocomplete,
          style: y(Me),
          "aria-label": T.ariaLabel,
          placeholder: T.placeholder,
          form: T.form,
          autofocus: T.autofocus,
          rows: T.rows,
          role: T.containerRole,
          onCompositionstart: y(yr),
          onCompositionupdate: y(_r),
          onCompositionend: y(br),
          onInput: vs,
          onFocus: y(q),
          onBlur: y(E),
          onChange: gr,
          onKeydown: wr
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        y(x) ? (S(), N("span", {
          key: 0,
          style: yt(A.value),
          class: M(y(h).e("count"))
        }, Q(y(K)) + " / " + Q(T.maxlength), 7)) : B("v-if", !0)
      ], 64))
    ], 38));
  }
});
var hd = /* @__PURE__ */ ot(dd, [["__file", "input.vue"]]);
const fd = Ks(hd), ln = "focus-trap.focus-after-trapped", cn = "focus-trap.focus-after-released", pd = "focus-trap.focusout-prevented", Zr = {
  cancelable: !0,
  bubbles: !1
}, vd = {
  cancelable: !0,
  bubbles: !1
}, Qr = "focusAfterTrapped", eo = "focusAfterReleased", gd = Symbol("elFocusTrap"), ir = R(), Gs = R(0), lr = R(0);
let _s = 0;
const Ta = (t) => {
  const e = [], s = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const r = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || r ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 || n === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; s.nextNode(); )
    e.push(s.currentNode);
  return e;
}, to = (t, e) => {
  for (const s of t)
    if (!md(s, e))
      return s;
}, md = (t, e) => {
  if (getComputedStyle(t).visibility === "hidden")
    return !0;
  for (; t; ) {
    if (e && t === e)
      return !1;
    if (getComputedStyle(t).display === "none")
      return !0;
    t = t.parentElement;
  }
  return !1;
}, yd = (t) => {
  const e = Ta(t), s = to(e, t), n = to(e.reverse(), t);
  return [s, n];
}, _d = (t) => t instanceof HTMLInputElement && "select" in t, Ye = (t, e) => {
  if (t && t.focus) {
    const s = document.activeElement;
    let n = !1;
    is(t) && !ar(t) && !t.getAttribute("tabindex") && (t.setAttribute("tabindex", "-1"), n = !0), t.focus({ preventScroll: !0 }), lr.value = window.performance.now(), t !== s && _d(t) && e && t.select(), is(t) && n && t.removeAttribute("tabindex");
  }
};
function so(t, e) {
  const s = [...t], n = t.indexOf(e);
  return n !== -1 && s.splice(n, 1), s;
}
const bd = () => {
  let t = [];
  return {
    push: (n) => {
      const r = t[0];
      r && n !== r && r.pause(), t = so(t, n), t.unshift(n);
    },
    remove: (n) => {
      var r, o;
      t = so(t, n), (o = (r = t[0]) == null ? void 0 : r.resume) == null || o.call(r);
    }
  };
}, wd = (t, e = !1) => {
  const s = document.activeElement;
  for (const n of t)
    if (Ye(n, e), document.activeElement !== s)
      return;
}, no = bd(), kd = () => Gs.value > lr.value, bs = () => {
  ir.value = "pointer", Gs.value = window.performance.now();
}, ro = () => {
  ir.value = "keyboard", Gs.value = window.performance.now();
}, Sd = () => (ye(() => {
  _s === 0 && (document.addEventListener("mousedown", bs), document.addEventListener("touchstart", bs), document.addEventListener("keydown", ro)), _s++;
}), ds(() => {
  _s--, _s <= 0 && (document.removeEventListener("mousedown", bs), document.removeEventListener("touchstart", bs), document.removeEventListener("keydown", ro));
}), {
  focusReason: ir,
  lastUserFocusTimestamp: Gs,
  lastAutomatedFocusTimestamp: lr
}), ws = (t) => new CustomEvent(pd, {
  ...vd,
  detail: t
}), Js = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
};
let xt = [];
const oo = (t) => {
  t.code === Js.esc && xt.forEach((e) => e(t));
}, Ed = (t) => {
  ye(() => {
    xt.length === 0 && document.addEventListener("keydown", oo), ve && xt.push(t);
  }), ds(() => {
    xt = xt.filter((e) => e !== t), xt.length === 0 && ve && document.removeEventListener("keydown", oo);
  });
}, Td = G({
  name: "ElFocusTrap",
  inheritAttrs: !1,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    Qr,
    eo,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(t, { emit: e }) {
    const s = R();
    let n, r;
    const { focusReason: o } = Sd();
    Ed((h) => {
      t.trapped && !a.paused && e("release-requested", h);
    });
    const a = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, i = (h) => {
      if (!t.loop && !t.trapped || a.paused)
        return;
      const { code: g, altKey: b, ctrlKey: v, metaKey: k, currentTarget: m, shiftKey: A } = h, { loop: L } = t, j = g === Js.tab && !b && !v && !k, P = document.activeElement;
      if (j && P) {
        const H = m, [q, E] = yd(H);
        if (q && E) {
          if (!A && P === E) {
            const O = ws({
              focusReason: o.value
            });
            e("focusout-prevented", O), O.defaultPrevented || (h.preventDefault(), L && Ye(q, !0));
          } else if (A && [q, H].includes(P)) {
            const O = ws({
              focusReason: o.value
            });
            e("focusout-prevented", O), O.defaultPrevented || (h.preventDefault(), L && Ye(E, !0));
          }
        } else if (P === H) {
          const O = ws({
            focusReason: o.value
          });
          e("focusout-prevented", O), O.defaultPrevented || h.preventDefault();
        }
      }
    };
    Vn(gd, {
      focusTrapRef: s,
      onKeydown: i
    }), te(() => t.focusTrapEl, (h) => {
      h && (s.value = h);
    }, { immediate: !0 }), te([s], ([h], [g]) => {
      h && (h.addEventListener("keydown", i), h.addEventListener("focusin", u), h.addEventListener("focusout", d)), g && (g.removeEventListener("keydown", i), g.removeEventListener("focusin", u), g.removeEventListener("focusout", d));
    });
    const l = (h) => {
      e(Qr, h);
    }, c = (h) => e(eo, h), u = (h) => {
      const g = y(s);
      if (!g)
        return;
      const b = h.target, v = h.relatedTarget, k = b && g.contains(b);
      t.trapped || v && g.contains(v) || (n = v), k && e("focusin", h), !a.paused && t.trapped && (k ? r = b : Ye(r, !0));
    }, d = (h) => {
      const g = y(s);
      if (!(a.paused || !g))
        if (t.trapped) {
          const b = h.relatedTarget;
          !ea(b) && !g.contains(b) && setTimeout(() => {
            if (!a.paused && t.trapped) {
              const v = ws({
                focusReason: o.value
              });
              e("focusout-prevented", v), v.defaultPrevented || Ye(r, !0);
            }
          }, 0);
        } else {
          const b = h.target;
          b && g.contains(b) || e("focusout", h);
        }
    };
    async function f() {
      await oe();
      const h = y(s);
      if (h) {
        no.push(a);
        const g = h.contains(document.activeElement) ? n : document.activeElement;
        if (n = g, !h.contains(g)) {
          const v = new Event(ln, Zr);
          h.addEventListener(ln, l), h.dispatchEvent(v), v.defaultPrevented || oe(() => {
            let k = t.focusStartEl;
            Se(k) || (Ye(k), document.activeElement !== k && (k = "first")), k === "first" && wd(Ta(h), !0), (document.activeElement === g || k === "container") && Ye(h);
          });
        }
      }
    }
    function p() {
      const h = y(s);
      if (h) {
        h.removeEventListener(ln, l);
        const g = new CustomEvent(cn, {
          ...Zr,
          detail: {
            focusReason: o.value
          }
        });
        h.addEventListener(cn, c), h.dispatchEvent(g), !g.defaultPrevented && (o.value == "keyboard" || !kd() || h.contains(document.activeElement)) && Ye(n ?? document.body), h.removeEventListener(cn, c), no.remove(a);
      }
    }
    return ye(() => {
      t.trapped && f(), te(() => t.trapped, (h) => {
        h ? f() : p();
      });
    }), ds(() => {
      t.trapped && p(), s.value && (s.value.removeEventListener("keydown", i), s.value.removeEventListener("focusin", u), s.value.removeEventListener("focusout", d), s.value = void 0);
    }), {
      onKeydown: i
    };
  }
});
function Cd(t, e, s, n, r, o) {
  return ae(t.$slots, "default", { handleKeydown: t.onKeydown });
}
var Od = /* @__PURE__ */ ot(Td, [["render", Cd], ["__file", "focus-trap.vue"]]);
const Id = qe({
  value: {
    type: [String, Number],
    default: ""
  },
  max: {
    type: Number,
    default: 99
  },
  isDot: Boolean,
  hidden: Boolean,
  type: {
    type: String,
    values: ["primary", "success", "warning", "info", "danger"],
    default: "danger"
  },
  showZero: {
    type: Boolean,
    default: !0
  },
  color: String,
  badgeStyle: {
    type: ee([String, Object, Array])
  },
  offset: {
    type: ee(Array),
    default: [0, 0]
  },
  badgeClass: {
    type: String
  }
}), Ad = G({
  name: "ElBadge"
}), Pd = /* @__PURE__ */ G({
  ...Ad,
  props: Id,
  setup(t, { expose: e }) {
    const s = t, n = Le("badge"), r = C(() => s.isDot ? "" : Ve(s.value) && Ve(s.max) ? s.max < s.value ? `${s.max}+` : `${s.value}` : `${s.value}`), o = C(() => {
      var a, i, l, c, u;
      return [
        {
          backgroundColor: s.color,
          marginRight: ls(-((i = (a = s.offset) == null ? void 0 : a[0]) != null ? i : 0)),
          marginTop: ls((c = (l = s.offset) == null ? void 0 : l[1]) != null ? c : 0)
        },
        (u = s.badgeStyle) != null ? u : {}
      ];
    });
    return e({
      content: r
    }), (a, i) => (S(), N("div", {
      class: M(y(n).b())
    }, [
      ae(a.$slots, "default"),
      X(Wn, {
        name: `${y(n).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: U(() => [
          Zt($("sup", {
            class: M([
              y(n).e("content"),
              y(n).em("content", a.type),
              y(n).is("fixed", !!a.$slots.default),
              y(n).is("dot", a.isDot),
              y(n).is("hide-zero", !a.showZero && s.value === 0),
              a.badgeClass
            ]),
            style: yt(y(o))
          }, [
            ae(a.$slots, "content", { value: y(r) }, () => [
              Re(Q(y(r)), 1)
            ])
          ], 6), [
            [Qt, !a.hidden && (y(r) || a.isDot || a.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var $d = /* @__PURE__ */ ot(Pd, [["__file", "badge.vue"]]);
const xd = Ks($d), Ca = Symbol("buttonGroupContextKey"), jd = ({ from: t, replacement: e, scope: s, version: n, ref: r, type: o = "API" }, a) => {
  te(() => y(a), (i) => {
  }, {
    immediate: !0
  });
}, Rd = (t, e) => {
  jd({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, C(() => t.type === "text"));
  const s = de(Ca, void 0), n = nr("button"), { form: r } = ka(), o = Ea(C(() => s == null ? void 0 : s.size)), a = or(), i = R(), l = Bo(), c = C(() => {
    var v;
    return t.type || (s == null ? void 0 : s.type) || ((v = n.value) == null ? void 0 : v.type) || "";
  }), u = C(() => {
    var v, k, m;
    return (m = (k = t.autoInsertSpace) != null ? k : (v = n.value) == null ? void 0 : v.autoInsertSpace) != null ? m : !1;
  }), d = C(() => {
    var v, k, m;
    return (m = (k = t.plain) != null ? k : (v = n.value) == null ? void 0 : v.plain) != null ? m : !1;
  }), f = C(() => {
    var v, k, m;
    return (m = (k = t.round) != null ? k : (v = n.value) == null ? void 0 : v.round) != null ? m : !1;
  }), p = C(() => {
    var v, k, m;
    return (m = (k = t.text) != null ? k : (v = n.value) == null ? void 0 : v.text) != null ? m : !1;
  }), h = C(() => t.tag === "button" ? {
    ariaDisabled: a.value || t.loading,
    disabled: a.value || t.loading,
    autofocus: t.autofocus,
    type: t.nativeType
  } : {}), g = C(() => {
    var v;
    const k = (v = l.default) == null ? void 0 : v.call(l);
    if (u.value && (k == null ? void 0 : k.length) === 1) {
      const m = k[0];
      if ((m == null ? void 0 : m.type) === mi) {
        const A = m.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(A.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: a,
    _size: o,
    _type: c,
    _ref: i,
    _props: h,
    _plain: d,
    _round: f,
    _text: p,
    shouldAddSpace: g,
    handleClick: (v) => {
      if (a.value || t.loading) {
        v.stopPropagation();
        return;
      }
      t.nativeType === "reset" && (r == null || r.resetFields()), e("click", v);
    }
  };
}, Nd = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], Ld = ["button", "submit", "reset"], Cn = qe({
  size: sr,
  disabled: Boolean,
  type: {
    type: String,
    values: Nd,
    default: ""
  },
  icon: {
    type: Nt
  },
  nativeType: {
    type: String,
    values: Ld,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: Nt,
    default: () => Ls
  },
  plain: {
    type: Boolean,
    default: void 0
  },
  text: {
    type: Boolean,
    default: void 0
  },
  link: Boolean,
  bg: Boolean,
  autofocus: Boolean,
  round: {
    type: Boolean,
    default: void 0
  },
  circle: Boolean,
  color: String,
  dark: Boolean,
  autoInsertSpace: {
    type: Boolean,
    default: void 0
  },
  tag: {
    type: ee([String, Object]),
    default: "button"
  }
}), Md = {
  click: (t) => t instanceof MouseEvent
};
function ie(t, e) {
  Ud(t) && (t = "100%");
  var s = Dd(t);
  return t = e === 360 ? t : Math.min(e, Math.max(0, parseFloat(t))), s && (t = parseInt(String(t * e), 10) / 100), Math.abs(t - e) < 1e-6 ? 1 : (e === 360 ? t = (t < 0 ? t % e + e : t % e) / parseFloat(String(e)) : t = t % e / parseFloat(String(e)), t);
}
function ks(t) {
  return Math.min(1, Math.max(0, t));
}
function Ud(t) {
  return typeof t == "string" && t.indexOf(".") !== -1 && parseFloat(t) === 1;
}
function Dd(t) {
  return typeof t == "string" && t.indexOf("%") !== -1;
}
function Oa(t) {
  return t = parseFloat(t), (isNaN(t) || t < 0 || t > 1) && (t = 1), t;
}
function Ss(t) {
  return t <= 1 ? "".concat(Number(t) * 100, "%") : t;
}
function ft(t) {
  return t.length === 1 ? "0" + t : String(t);
}
function Bd(t, e, s) {
  return {
    r: ie(t, 255) * 255,
    g: ie(e, 255) * 255,
    b: ie(s, 255) * 255
  };
}
function ao(t, e, s) {
  t = ie(t, 255), e = ie(e, 255), s = ie(s, 255);
  var n = Math.max(t, e, s), r = Math.min(t, e, s), o = 0, a = 0, i = (n + r) / 2;
  if (n === r)
    a = 0, o = 0;
  else {
    var l = n - r;
    switch (a = i > 0.5 ? l / (2 - n - r) : l / (n + r), n) {
      case t:
        o = (e - s) / l + (e < s ? 6 : 0);
        break;
      case e:
        o = (s - t) / l + 2;
        break;
      case s:
        o = (t - e) / l + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: a, l: i };
}
function un(t, e, s) {
  return s < 0 && (s += 1), s > 1 && (s -= 1), s < 1 / 6 ? t + (e - t) * (6 * s) : s < 1 / 2 ? e : s < 2 / 3 ? t + (e - t) * (2 / 3 - s) * 6 : t;
}
function Fd(t, e, s) {
  var n, r, o;
  if (t = ie(t, 360), e = ie(e, 100), s = ie(s, 100), e === 0)
    r = s, o = s, n = s;
  else {
    var a = s < 0.5 ? s * (1 + e) : s + e - s * e, i = 2 * s - a;
    n = un(i, a, t + 1 / 3), r = un(i, a, t), o = un(i, a, t - 1 / 3);
  }
  return { r: n * 255, g: r * 255, b: o * 255 };
}
function io(t, e, s) {
  t = ie(t, 255), e = ie(e, 255), s = ie(s, 255);
  var n = Math.max(t, e, s), r = Math.min(t, e, s), o = 0, a = n, i = n - r, l = n === 0 ? 0 : i / n;
  if (n === r)
    o = 0;
  else {
    switch (n) {
      case t:
        o = (e - s) / i + (e < s ? 6 : 0);
        break;
      case e:
        o = (s - t) / i + 2;
        break;
      case s:
        o = (t - e) / i + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: l, v: a };
}
function zd(t, e, s) {
  t = ie(t, 360) * 6, e = ie(e, 100), s = ie(s, 100);
  var n = Math.floor(t), r = t - n, o = s * (1 - e), a = s * (1 - r * e), i = s * (1 - (1 - r) * e), l = n % 6, c = [s, a, o, o, i, s][l], u = [i, s, s, a, o, o][l], d = [o, o, i, s, s, a][l];
  return { r: c * 255, g: u * 255, b: d * 255 };
}
function lo(t, e, s, n) {
  var r = [
    ft(Math.round(t).toString(16)),
    ft(Math.round(e).toString(16)),
    ft(Math.round(s).toString(16))
  ];
  return n && r[0].startsWith(r[0].charAt(1)) && r[1].startsWith(r[1].charAt(1)) && r[2].startsWith(r[2].charAt(1)) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("");
}
function Vd(t, e, s, n, r) {
  var o = [
    ft(Math.round(t).toString(16)),
    ft(Math.round(e).toString(16)),
    ft(Math.round(s).toString(16)),
    ft(Wd(n))
  ];
  return r && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) && o[3].startsWith(o[3].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}
function Wd(t) {
  return Math.round(parseFloat(t) * 255).toString(16);
}
function co(t) {
  return me(t) / 255;
}
function me(t) {
  return parseInt(t, 16);
}
function Hd(t) {
  return {
    r: t >> 16,
    g: (t & 65280) >> 8,
    b: t & 255
  };
}
var On = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function qd(t) {
  var e = { r: 0, g: 0, b: 0 }, s = 1, n = null, r = null, o = null, a = !1, i = !1;
  return typeof t == "string" && (t = Jd(t)), typeof t == "object" && (De(t.r) && De(t.g) && De(t.b) ? (e = Bd(t.r, t.g, t.b), a = !0, i = String(t.r).substr(-1) === "%" ? "prgb" : "rgb") : De(t.h) && De(t.s) && De(t.v) ? (n = Ss(t.s), r = Ss(t.v), e = zd(t.h, n, r), a = !0, i = "hsv") : De(t.h) && De(t.s) && De(t.l) && (n = Ss(t.s), o = Ss(t.l), e = Fd(t.h, n, o), a = !0, i = "hsl"), Object.prototype.hasOwnProperty.call(t, "a") && (s = t.a)), s = Oa(s), {
    ok: a,
    format: t.format || i,
    r: Math.min(255, Math.max(e.r, 0)),
    g: Math.min(255, Math.max(e.g, 0)),
    b: Math.min(255, Math.max(e.b, 0)),
    a: s
  };
}
var Kd = "[-\\+]?\\d+%?", Gd = "[-\\+]?\\d*\\.\\d+%?", tt = "(?:".concat(Gd, ")|(?:").concat(Kd, ")"), dn = "[\\s|\\(]+(".concat(tt, ")[,|\\s]+(").concat(tt, ")[,|\\s]+(").concat(tt, ")\\s*\\)?"), hn = "[\\s|\\(]+(".concat(tt, ")[,|\\s]+(").concat(tt, ")[,|\\s]+(").concat(tt, ")[,|\\s]+(").concat(tt, ")\\s*\\)?"), Oe = {
  CSS_UNIT: new RegExp(tt),
  rgb: new RegExp("rgb" + dn),
  rgba: new RegExp("rgba" + hn),
  hsl: new RegExp("hsl" + dn),
  hsla: new RegExp("hsla" + hn),
  hsv: new RegExp("hsv" + dn),
  hsva: new RegExp("hsva" + hn),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function Jd(t) {
  if (t = t.trim().toLowerCase(), t.length === 0)
    return !1;
  var e = !1;
  if (On[t])
    t = On[t], e = !0;
  else if (t === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var s = Oe.rgb.exec(t);
  return s ? { r: s[1], g: s[2], b: s[3] } : (s = Oe.rgba.exec(t), s ? { r: s[1], g: s[2], b: s[3], a: s[4] } : (s = Oe.hsl.exec(t), s ? { h: s[1], s: s[2], l: s[3] } : (s = Oe.hsla.exec(t), s ? { h: s[1], s: s[2], l: s[3], a: s[4] } : (s = Oe.hsv.exec(t), s ? { h: s[1], s: s[2], v: s[3] } : (s = Oe.hsva.exec(t), s ? { h: s[1], s: s[2], v: s[3], a: s[4] } : (s = Oe.hex8.exec(t), s ? {
    r: me(s[1]),
    g: me(s[2]),
    b: me(s[3]),
    a: co(s[4]),
    format: e ? "name" : "hex8"
  } : (s = Oe.hex6.exec(t), s ? {
    r: me(s[1]),
    g: me(s[2]),
    b: me(s[3]),
    format: e ? "name" : "hex"
  } : (s = Oe.hex4.exec(t), s ? {
    r: me(s[1] + s[1]),
    g: me(s[2] + s[2]),
    b: me(s[3] + s[3]),
    a: co(s[4] + s[4]),
    format: e ? "name" : "hex8"
  } : (s = Oe.hex3.exec(t), s ? {
    r: me(s[1] + s[1]),
    g: me(s[2] + s[2]),
    b: me(s[3] + s[3]),
    format: e ? "name" : "hex"
  } : !1)))))))));
}
function De(t) {
  return !!Oe.CSS_UNIT.exec(String(t));
}
var Yd = (
  /** @class */
  function() {
    function t(e, s) {
      e === void 0 && (e = ""), s === void 0 && (s = {});
      var n;
      if (e instanceof t)
        return e;
      typeof e == "number" && (e = Hd(e)), this.originalInput = e;
      var r = qd(e);
      this.originalInput = e, this.r = r.r, this.g = r.g, this.b = r.b, this.a = r.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (n = s.format) !== null && n !== void 0 ? n : r.format, this.gradientType = s.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = r.ok;
    }
    return t.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, t.prototype.isLight = function() {
      return !this.isDark();
    }, t.prototype.getBrightness = function() {
      var e = this.toRgb();
      return (e.r * 299 + e.g * 587 + e.b * 114) / 1e3;
    }, t.prototype.getLuminance = function() {
      var e = this.toRgb(), s, n, r, o = e.r / 255, a = e.g / 255, i = e.b / 255;
      return o <= 0.03928 ? s = o / 12.92 : s = Math.pow((o + 0.055) / 1.055, 2.4), a <= 0.03928 ? n = a / 12.92 : n = Math.pow((a + 0.055) / 1.055, 2.4), i <= 0.03928 ? r = i / 12.92 : r = Math.pow((i + 0.055) / 1.055, 2.4), 0.2126 * s + 0.7152 * n + 0.0722 * r;
    }, t.prototype.getAlpha = function() {
      return this.a;
    }, t.prototype.setAlpha = function(e) {
      return this.a = Oa(e), this.roundA = Math.round(100 * this.a) / 100, this;
    }, t.prototype.isMonochrome = function() {
      var e = this.toHsl().s;
      return e === 0;
    }, t.prototype.toHsv = function() {
      var e = io(this.r, this.g, this.b);
      return { h: e.h * 360, s: e.s, v: e.v, a: this.a };
    }, t.prototype.toHsvString = function() {
      var e = io(this.r, this.g, this.b), s = Math.round(e.h * 360), n = Math.round(e.s * 100), r = Math.round(e.v * 100);
      return this.a === 1 ? "hsv(".concat(s, ", ").concat(n, "%, ").concat(r, "%)") : "hsva(".concat(s, ", ").concat(n, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, t.prototype.toHsl = function() {
      var e = ao(this.r, this.g, this.b);
      return { h: e.h * 360, s: e.s, l: e.l, a: this.a };
    }, t.prototype.toHslString = function() {
      var e = ao(this.r, this.g, this.b), s = Math.round(e.h * 360), n = Math.round(e.s * 100), r = Math.round(e.l * 100);
      return this.a === 1 ? "hsl(".concat(s, ", ").concat(n, "%, ").concat(r, "%)") : "hsla(".concat(s, ", ").concat(n, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, t.prototype.toHex = function(e) {
      return e === void 0 && (e = !1), lo(this.r, this.g, this.b, e);
    }, t.prototype.toHexString = function(e) {
      return e === void 0 && (e = !1), "#" + this.toHex(e);
    }, t.prototype.toHex8 = function(e) {
      return e === void 0 && (e = !1), Vd(this.r, this.g, this.b, this.a, e);
    }, t.prototype.toHex8String = function(e) {
      return e === void 0 && (e = !1), "#" + this.toHex8(e);
    }, t.prototype.toHexShortString = function(e) {
      return e === void 0 && (e = !1), this.a === 1 ? this.toHexString(e) : this.toHex8String(e);
    }, t.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, t.prototype.toRgbString = function() {
      var e = Math.round(this.r), s = Math.round(this.g), n = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(e, ", ").concat(s, ", ").concat(n, ")") : "rgba(".concat(e, ", ").concat(s, ", ").concat(n, ", ").concat(this.roundA, ")");
    }, t.prototype.toPercentageRgb = function() {
      var e = function(s) {
        return "".concat(Math.round(ie(s, 255) * 100), "%");
      };
      return {
        r: e(this.r),
        g: e(this.g),
        b: e(this.b),
        a: this.a
      };
    }, t.prototype.toPercentageRgbString = function() {
      var e = function(s) {
        return Math.round(ie(s, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(e(this.r), "%, ").concat(e(this.g), "%, ").concat(e(this.b), "%)") : "rgba(".concat(e(this.r), "%, ").concat(e(this.g), "%, ").concat(e(this.b), "%, ").concat(this.roundA, ")");
    }, t.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var e = "#" + lo(this.r, this.g, this.b, !1), s = 0, n = Object.entries(On); s < n.length; s++) {
        var r = n[s], o = r[0], a = r[1];
        if (e === a)
          return o;
      }
      return !1;
    }, t.prototype.toString = function(e) {
      var s = !!e;
      e = e ?? this.format;
      var n = !1, r = this.a < 1 && this.a >= 0, o = !s && r && (e.startsWith("hex") || e === "name");
      return o ? e === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (e === "rgb" && (n = this.toRgbString()), e === "prgb" && (n = this.toPercentageRgbString()), (e === "hex" || e === "hex6") && (n = this.toHexString()), e === "hex3" && (n = this.toHexString(!0)), e === "hex4" && (n = this.toHex8String(!0)), e === "hex8" && (n = this.toHex8String()), e === "name" && (n = this.toName()), e === "hsl" && (n = this.toHslString()), e === "hsv" && (n = this.toHsvString()), n || this.toHexString());
    }, t.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, t.prototype.clone = function() {
      return new t(this.toString());
    }, t.prototype.lighten = function(e) {
      e === void 0 && (e = 10);
      var s = this.toHsl();
      return s.l += e / 100, s.l = ks(s.l), new t(s);
    }, t.prototype.brighten = function(e) {
      e === void 0 && (e = 10);
      var s = this.toRgb();
      return s.r = Math.max(0, Math.min(255, s.r - Math.round(255 * -(e / 100)))), s.g = Math.max(0, Math.min(255, s.g - Math.round(255 * -(e / 100)))), s.b = Math.max(0, Math.min(255, s.b - Math.round(255 * -(e / 100)))), new t(s);
    }, t.prototype.darken = function(e) {
      e === void 0 && (e = 10);
      var s = this.toHsl();
      return s.l -= e / 100, s.l = ks(s.l), new t(s);
    }, t.prototype.tint = function(e) {
      return e === void 0 && (e = 10), this.mix("white", e);
    }, t.prototype.shade = function(e) {
      return e === void 0 && (e = 10), this.mix("black", e);
    }, t.prototype.desaturate = function(e) {
      e === void 0 && (e = 10);
      var s = this.toHsl();
      return s.s -= e / 100, s.s = ks(s.s), new t(s);
    }, t.prototype.saturate = function(e) {
      e === void 0 && (e = 10);
      var s = this.toHsl();
      return s.s += e / 100, s.s = ks(s.s), new t(s);
    }, t.prototype.greyscale = function() {
      return this.desaturate(100);
    }, t.prototype.spin = function(e) {
      var s = this.toHsl(), n = (s.h + e) % 360;
      return s.h = n < 0 ? 360 + n : n, new t(s);
    }, t.prototype.mix = function(e, s) {
      s === void 0 && (s = 50);
      var n = this.toRgb(), r = new t(e).toRgb(), o = s / 100, a = {
        r: (r.r - n.r) * o + n.r,
        g: (r.g - n.g) * o + n.g,
        b: (r.b - n.b) * o + n.b,
        a: (r.a - n.a) * o + n.a
      };
      return new t(a);
    }, t.prototype.analogous = function(e, s) {
      e === void 0 && (e = 6), s === void 0 && (s = 30);
      var n = this.toHsl(), r = 360 / s, o = [this];
      for (n.h = (n.h - (r * e >> 1) + 720) % 360; --e; )
        n.h = (n.h + r) % 360, o.push(new t(n));
      return o;
    }, t.prototype.complement = function() {
      var e = this.toHsl();
      return e.h = (e.h + 180) % 360, new t(e);
    }, t.prototype.monochromatic = function(e) {
      e === void 0 && (e = 6);
      for (var s = this.toHsv(), n = s.h, r = s.s, o = s.v, a = [], i = 1 / e; e--; )
        a.push(new t({ h: n, s: r, v: o })), o = (o + i) % 1;
      return a;
    }, t.prototype.splitcomplement = function() {
      var e = this.toHsl(), s = e.h;
      return [
        this,
        new t({ h: (s + 72) % 360, s: e.s, l: e.l }),
        new t({ h: (s + 216) % 360, s: e.s, l: e.l })
      ];
    }, t.prototype.onBackground = function(e) {
      var s = this.toRgb(), n = new t(e).toRgb(), r = s.a + n.a * (1 - s.a);
      return new t({
        r: (s.r * s.a + n.r * n.a * (1 - s.a)) / r,
        g: (s.g * s.a + n.g * n.a * (1 - s.a)) / r,
        b: (s.b * s.a + n.b * n.a * (1 - s.a)) / r,
        a: r
      });
    }, t.prototype.triad = function() {
      return this.polyad(3);
    }, t.prototype.tetrad = function() {
      return this.polyad(4);
    }, t.prototype.polyad = function(e) {
      for (var s = this.toHsl(), n = s.h, r = [this], o = 360 / e, a = 1; a < e; a++)
        r.push(new t({ h: (n + a * o) % 360, s: s.s, l: s.l }));
      return r;
    }, t.prototype.equals = function(e) {
      return this.toRgbString() === new t(e).toRgbString();
    }, t;
  }()
);
function Ge(t, e = 20) {
  return t.mix("#141414", e).toString();
}
function Xd(t) {
  const e = or(), s = Le("button");
  return C(() => {
    let n = {}, r = t.color;
    if (r) {
      const o = r.match(/var\((.*?)\)/);
      o && (r = window.getComputedStyle(window.document.documentElement).getPropertyValue(o[1]));
      const a = new Yd(r), i = t.dark ? a.tint(20).toString() : Ge(a, 20);
      if (t.plain)
        n = s.cssVarBlock({
          "bg-color": t.dark ? Ge(a, 90) : a.tint(90).toString(),
          "text-color": r,
          "border-color": t.dark ? Ge(a, 50) : a.tint(50).toString(),
          "hover-text-color": `var(${s.cssVarName("color-white")})`,
          "hover-bg-color": r,
          "hover-border-color": r,
          "active-bg-color": i,
          "active-text-color": `var(${s.cssVarName("color-white")})`,
          "active-border-color": i
        }), e.value && (n[s.cssVarBlockName("disabled-bg-color")] = t.dark ? Ge(a, 90) : a.tint(90).toString(), n[s.cssVarBlockName("disabled-text-color")] = t.dark ? Ge(a, 50) : a.tint(50).toString(), n[s.cssVarBlockName("disabled-border-color")] = t.dark ? Ge(a, 80) : a.tint(80).toString());
      else {
        const l = t.dark ? Ge(a, 30) : a.tint(30).toString(), c = a.isDark() ? `var(${s.cssVarName("color-white")})` : `var(${s.cssVarName("color-black")})`;
        if (n = s.cssVarBlock({
          "bg-color": r,
          "text-color": c,
          "border-color": r,
          "hover-bg-color": l,
          "hover-text-color": c,
          "hover-border-color": l,
          "active-bg-color": i,
          "active-border-color": i
        }), e.value) {
          const u = t.dark ? Ge(a, 50) : a.tint(50).toString();
          n[s.cssVarBlockName("disabled-bg-color")] = u, n[s.cssVarBlockName("disabled-text-color")] = t.dark ? "rgba(255, 255, 255, 0.5)" : `var(${s.cssVarName("color-white")})`, n[s.cssVarBlockName("disabled-border-color")] = u;
        }
      }
    }
    return n;
  });
}
const Zd = G({
  name: "ElButton"
}), Qd = /* @__PURE__ */ G({
  ...Zd,
  props: Cn,
  emits: Md,
  setup(t, { expose: e, emit: s }) {
    const n = t, r = Xd(n), o = Le("button"), {
      _ref: a,
      _size: i,
      _type: l,
      _disabled: c,
      _props: u,
      _plain: d,
      _round: f,
      _text: p,
      shouldAddSpace: h,
      handleClick: g
    } = Rd(n, s), b = C(() => [
      o.b(),
      o.m(l.value),
      o.m(i.value),
      o.is("disabled", c.value),
      o.is("loading", n.loading),
      o.is("plain", d.value),
      o.is("round", f.value),
      o.is("circle", n.circle),
      o.is("text", p.value),
      o.is("link", n.link),
      o.is("has-bg", n.bg)
    ]);
    return e({
      ref: a,
      size: i,
      type: l,
      disabled: c,
      shouldAddSpace: h
    }), (v, k) => (S(), F(pe(v.tag), $s({
      ref_key: "_ref",
      ref: a
    }, y(u), {
      class: y(b),
      style: y(r),
      onClick: y(g)
    }), {
      default: U(() => [
        v.loading ? (S(), N(st, { key: 0 }, [
          v.$slots.loading ? ae(v.$slots, "loading", { key: 0 }) : (S(), F(y(Ne), {
            key: 1,
            class: M(y(o).is("loading"))
          }, {
            default: U(() => [
              (S(), F(pe(v.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : v.icon || v.$slots.icon ? (S(), F(y(Ne), { key: 1 }, {
          default: U(() => [
            v.icon ? (S(), F(pe(v.icon), { key: 0 })) : ae(v.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : B("v-if", !0),
        v.$slots.default ? (S(), N("span", {
          key: 2,
          class: M({ [y(o).em("text", "expand")]: y(h) })
        }, [
          ae(v.$slots, "default")
        ], 2)) : B("v-if", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var eh = /* @__PURE__ */ ot(Qd, [["__file", "button.vue"]]);
const th = {
  size: Cn.size,
  type: Cn.type
}, sh = G({
  name: "ElButtonGroup"
}), nh = /* @__PURE__ */ G({
  ...sh,
  props: th,
  setup(t) {
    const e = t;
    Vn(Ca, Hn({
      size: gt(e, "size"),
      type: gt(e, "type")
    }));
    const s = Le("button");
    return (n, r) => (S(), N("div", {
      class: M(y(s).b("group"))
    }, [
      ae(n.$slots, "default")
    ], 2));
  }
});
var Ia = /* @__PURE__ */ ot(nh, [["__file", "button-group.vue"]]);
const rh = Ks(eh, {
  ButtonGroup: Ia
});
bu(Ia);
var Te = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function oh(t) {
  if (t.__esModule)
    return t;
  var e = t.default;
  if (typeof e == "function") {
    var s = function n() {
      return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    s.prototype = e.prototype;
  } else
    s = {};
  return Object.defineProperty(s, "__esModule", { value: !0 }), Object.keys(t).forEach(function(n) {
    var r = Object.getOwnPropertyDescriptor(t, n);
    Object.defineProperty(s, n, r.get ? r : {
      enumerable: !0,
      get: function() {
        return t[n];
      }
    });
  }), s;
}
var Ps = /* @__PURE__ */ ((t) => (t[t.TEXT = 1] = "TEXT", t[t.CLASS = 2] = "CLASS", t[t.STYLE = 4] = "STYLE", t[t.PROPS = 8] = "PROPS", t[t.FULL_PROPS = 16] = "FULL_PROPS", t[t.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", t[t.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", t[t.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", t[t.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", t[t.NEED_PATCH = 512] = "NEED_PATCH", t[t.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", t[t.HOISTED = -1] = "HOISTED", t[t.BAIL = -2] = "BAIL", t))(Ps || {});
const ah = qe({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: ee(Object)
  },
  size: sr,
  button: {
    type: ee(Object)
  },
  card: {
    type: ee(Object)
  },
  dialog: {
    type: ee(Object)
  },
  link: {
    type: ee(Object)
  },
  experimentalFeatures: {
    type: ee(Object)
  },
  keyboardNavigation: {
    type: Boolean,
    default: !0
  },
  message: {
    type: ee(Object)
  },
  zIndex: Number,
  namespace: {
    type: String,
    default: "el"
  },
  ...du
}), ce = {
  placement: "top"
};
G({
  name: "ElConfigProvider",
  props: ah,
  setup(t, { slots: e }) {
    const s = fa(t);
    return te(() => t.message, (n) => {
      var r, o;
      Object.assign(ce, (o = (r = s == null ? void 0 : s.value) == null ? void 0 : r.message) != null ? o : {}, n ?? {});
    }, { immediate: !0, deep: !0 }), () => ae(e, "default", { config: s == null ? void 0 : s.value });
  }
});
const Aa = (t) => {
  if (!t)
    return { onClick: es, onMousedown: es, onMouseup: es };
  let e = !1, s = !1;
  return { onClick: (a) => {
    e && s && t(a), e = s = !1;
  }, onMousedown: (a) => {
    e = a.target === a.currentTarget;
  }, onMouseup: (a) => {
    s = a.target === a.currentTarget;
  } };
}, ih = qe({
  mask: {
    type: Boolean,
    default: !0
  },
  customMaskEvent: Boolean,
  overlayClass: {
    type: ee([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: ee([String, Number])
  }
}), lh = {
  click: (t) => t instanceof MouseEvent
}, ch = "overlay";
var uh = G({
  name: "ElOverlay",
  props: ih,
  emits: lh,
  setup(t, { slots: e, emit: s }) {
    const n = Le(ch), r = (l) => {
      s("click", l);
    }, { onClick: o, onMousedown: a, onMouseup: i } = Aa(t.customMaskEvent ? void 0 : r);
    return () => t.mask ? X("div", {
      class: [n.b(), t.overlayClass],
      style: {
        zIndex: t.zIndex
      },
      onClick: o,
      onMousedown: a,
      onMouseup: i
    }, [ae(e, "default")], Ps.STYLE | Ps.CLASS | Ps.PROPS, ["onClick", "onMouseup", "onMousedown"]) : yi("div", {
      class: t.overlayClass,
      style: {
        zIndex: t.zIndex,
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      }
    }, [ae(e, "default")]);
  }
});
const dh = uh, hh = (t, e, s, n) => {
  const r = {
    offsetX: 0,
    offsetY: 0
  }, o = R(!1), a = (f, p) => {
    if (t.value) {
      const { offsetX: h, offsetY: g } = r, b = t.value.getBoundingClientRect(), v = b.left, k = b.top, m = b.width, A = b.height, L = document.documentElement.clientWidth, j = document.documentElement.clientHeight, P = -v + h, H = -k + g, q = L - v - m + h, E = j - k - (A < j ? A : 0) + g;
      n != null && n.value || (f = Math.min(Math.max(f, P), q), p = Math.min(Math.max(p, H), E)), r.offsetX = f, r.offsetY = p, t.value.style.transform = `translate(${ls(f)}, ${ls(p)})`;
    }
  }, i = (f) => {
    const p = f.clientX, h = f.clientY, { offsetX: g, offsetY: b } = r, v = (m) => {
      o.value || (o.value = !0);
      const A = g + m.clientX - p, L = b + m.clientY - h;
      a(A, L);
    }, k = () => {
      o.value = !1, document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", k);
    };
    document.addEventListener("mousemove", v), document.addEventListener("mouseup", k);
  }, l = () => {
    e.value && t.value && (e.value.addEventListener("mousedown", i), window.addEventListener("resize", d));
  }, c = () => {
    e.value && t.value && (e.value.removeEventListener("mousedown", i), window.removeEventListener("resize", d));
  }, u = () => {
    r.offsetX = 0, r.offsetY = 0, t.value && (t.value.style.transform = "");
  }, d = () => {
    const { offsetX: f, offsetY: p } = r;
    a(f, p);
  };
  return ye(() => {
    Do(() => {
      s.value ? l() : c();
    });
  }), ds(() => {
    c();
  }), {
    isDragging: o,
    resetPosition: u,
    updatePosition: d
  };
}, fh = (t, e = {}) => {
  mt(t) || yu("[useLockscreen]", "You need to pass a ref param to this function");
  const s = e.ns || Le("popup"), n = C(() => s.bm("parent", "hidden"));
  if (!ve || Kr(document.body, n.value))
    return;
  let r = 0, o = !1, a = "0";
  const i = () => {
    setTimeout(() => {
      typeof document > "u" || o && document && (document.body.style.width = a, pu(document.body, n.value));
    }, 200);
  };
  te(t, (l) => {
    if (!l) {
      i();
      return;
    }
    o = !Kr(document.body, n.value), o && (a = document.body.style.width, fu(document.body, n.value)), r = gu(s.namespace.value);
    const c = document.documentElement.clientHeight < document.body.scrollHeight, u = vu(document.body, "overflowY");
    r > 0 && (c || u === "scroll") && o && (document.body.style.width = `calc(100% - ${r}px)`);
  }), zn(() => i());
}, ph = (t) => ["", ...ua].includes(t), Pa = [
  "primary",
  "success",
  "info",
  "warning",
  "error"
], $a = [
  "top",
  "top-left",
  "top-right",
  "bottom",
  "bottom-left",
  "bottom-right"
], Lt = "top", le = ba({
  customClass: "",
  dangerouslyUseHTMLString: !1,
  duration: 3e3,
  icon: void 0,
  id: "",
  message: "",
  onClose: void 0,
  showClose: !1,
  type: "info",
  plain: !1,
  offset: 16,
  placement: void 0,
  zIndex: 0,
  grouping: !1,
  repeatNum: 1,
  appendTo: ve ? document.body : void 0
}), vh = qe({
  customClass: {
    type: String,
    default: le.customClass
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: le.dangerouslyUseHTMLString
  },
  duration: {
    type: Number,
    default: le.duration
  },
  icon: {
    type: Nt,
    default: le.icon
  },
  id: {
    type: String,
    default: le.id
  },
  message: {
    type: ee([
      String,
      Object,
      Function
    ]),
    default: le.message
  },
  onClose: {
    type: ee(Function),
    default: le.onClose
  },
  showClose: {
    type: Boolean,
    default: le.showClose
  },
  type: {
    type: String,
    values: Pa,
    default: le.type
  },
  plain: {
    type: Boolean,
    default: le.plain
  },
  offset: {
    type: Number,
    default: le.offset
  },
  placement: {
    type: String,
    values: $a,
    default: le.placement
  },
  zIndex: {
    type: Number,
    default: le.zIndex
  },
  grouping: {
    type: Boolean,
    default: le.grouping
  },
  repeatNum: {
    type: Number,
    default: le.repeatNum
  }
}), gh = {
  destroy: () => !0
}, $e = Fo({}), mh = (t) => ($e[t] || ($e[t] = Fo([])), $e[t]), yh = (t, e) => {
  const s = $e[e] || [], n = s.findIndex((a) => a.id === t), r = s[n];
  let o;
  return n > 0 && (o = s[n - 1]), { current: r, prev: o };
}, _h = (t, e) => {
  const { prev: s } = yh(t, e);
  return s ? s.vm.exposed.bottom.value : 0;
}, bh = (t, e, s) => ($e[s] || []).findIndex((o) => o.id === t) > 0 ? 16 : e, wh = G({
  name: "ElMessage"
}), kh = /* @__PURE__ */ G({
  ...wh,
  props: vh,
  emits: gh,
  setup(t, { expose: e, emit: s }) {
    const n = t, { Close: r } = _a, o = R(!1), { ns: a, zIndex: i } = ha("message"), { currentZIndex: l, nextZIndex: c } = i, u = R(), d = R(!1), f = R(0);
    let p;
    const h = C(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), g = C(() => {
      const O = n.type;
      return { [a.bm("icon", O)]: O && Ms[O] };
    }), b = C(() => n.icon || Ms[n.type] || ""), v = C(() => n.placement || Lt), k = C(() => _h(n.id, v.value)), m = C(() => bh(n.id, n.offset, v.value) + k.value), A = C(() => f.value + m.value), L = C(() => v.value.includes("left") ? a.is("left") : v.value.includes("right") ? a.is("right") : a.is("center")), j = C(() => v.value.startsWith("top") ? "top" : "bottom"), P = C(() => ({
      [j.value]: `${m.value}px`,
      zIndex: l.value
    }));
    function H() {
      n.duration !== 0 && ({ stop: p } = qc(() => {
        E();
      }, n.duration));
    }
    function q() {
      p == null || p();
    }
    function E() {
      d.value = !1, oe(() => {
        var O;
        o.value || ((O = n.onClose) == null || O.call(n), s("destroy"));
      });
    }
    function w({ code: O }) {
      O === Js.esc && E();
    }
    return ye(() => {
      H(), c(), d.value = !0;
    }), te(() => n.repeatNum, () => {
      q(), H();
    }), As(document, "keydown", w), ra(u, () => {
      f.value = u.value.getBoundingClientRect().height;
    }), e({
      visible: d,
      bottom: A,
      close: E
    }), (O, Z) => (S(), F(Wn, {
      name: y(a).b("fade"),
      onBeforeEnter: (ge) => o.value = !0,
      onBeforeLeave: O.onClose,
      onAfterLeave: (ge) => O.$emit("destroy"),
      persisted: ""
    }, {
      default: U(() => [
        Zt($("div", {
          id: O.id,
          ref_key: "messageRef",
          ref: u,
          class: M([
            y(a).b(),
            { [y(a).m(O.type)]: O.type },
            y(a).is("closable", O.showClose),
            y(a).is("plain", O.plain),
            y(a).is("bottom", y(j) === "bottom"),
            y(L),
            O.customClass
          ]),
          style: yt(y(P)),
          role: "alert",
          onMouseenter: q,
          onMouseleave: H
        }, [
          O.repeatNum > 1 ? (S(), F(y(xd), {
            key: 0,
            value: O.repeatNum,
            type: y(h),
            class: M(y(a).e("badge"))
          }, null, 8, ["value", "type", "class"])) : B("v-if", !0),
          y(b) ? (S(), F(y(Ne), {
            key: 1,
            class: M([y(a).e("icon"), y(g)])
          }, {
            default: U(() => [
              (S(), F(pe(y(b))))
            ]),
            _: 1
          }, 8, ["class"])) : B("v-if", !0),
          ae(O.$slots, "default", {}, () => [
            O.dangerouslyUseHTMLString ? (S(), N(st, { key: 1 }, [
              B(" Caution here, message could've been compromised, never use user's input as message "),
              $("p", {
                class: M(y(a).e("content")),
                innerHTML: O.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (S(), N("p", {
              key: 0,
              class: M(y(a).e("content"))
            }, Q(O.message), 3))
          ]),
          O.showClose ? (S(), F(y(Ne), {
            key: 2,
            class: M(y(a).e("closeBtn")),
            onClick: Pe(E, ["stop"])
          }, {
            default: U(() => [
              X(y(r))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : B("v-if", !0)
        ], 46, ["id"]), [
          [Qt, d.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeEnter", "onBeforeLeave", "onAfterLeave"]));
  }
});
var Sh = /* @__PURE__ */ ot(kh, [["__file", "message.vue"]]);
let Eh = 1;
const Th = (t) => {
  if (!t.appendTo)
    t.appendTo = document.body;
  else if (Se(t.appendTo)) {
    let s = document.querySelector(t.appendTo);
    is(s) || (s = document.body), t.appendTo = s;
  }
}, Ch = (t) => {
  !t.placement && Se(ce.placement) && ce.placement && (t.placement = ce.placement), t.placement || (t.placement = Lt), $a.includes(t.placement) || (`${t.placement}${Lt}`, t.placement = Lt);
}, xa = (t) => {
  const e = !t || Se(t) || Vs(t) || ze(t) ? { message: t } : t, s = {
    ...le,
    ...e
  };
  return Th(s), Ch(s), on(ce.grouping) && !s.grouping && (s.grouping = ce.grouping), Ve(ce.duration) && s.duration === 3e3 && (s.duration = ce.duration), Ve(ce.offset) && s.offset === 16 && (s.offset = ce.offset), on(ce.showClose) && !s.showClose && (s.showClose = ce.showClose), on(ce.plain) && !s.plain && (s.plain = ce.plain), s;
}, Oh = (t) => {
  const e = t.props.placement || Lt, s = $e[e], n = s.indexOf(t);
  if (n === -1)
    return;
  s.splice(n, 1);
  const { handler: r } = t;
  r.close();
}, Ih = ({ appendTo: t, ...e }, s) => {
  const n = `message_${Eh++}`, r = e.onClose, o = document.createElement("div"), a = {
    ...e,
    id: n,
    onClose: () => {
      r == null || r(), Oh(u);
    },
    onDestroy: () => {
      xs(null, o);
    }
  }, i = X(Sh, a, ze(a.message) || Vs(a.message) ? {
    default: ze(a.message) ? a.message : () => a.message
  } : null);
  i.appContext = s || bt._context, xs(i, o), t.appendChild(o.firstElementChild);
  const l = i.component, u = {
    id: n,
    vnode: i,
    vm: l,
    handler: {
      close: () => {
        l.exposed.close();
      }
    },
    props: i.component.props
  };
  return u;
}, bt = (t = {}, e) => {
  if (!ve)
    return { close: () => {
    } };
  const s = xa(t), n = mh(s.placement || Lt);
  if (s.grouping && n.length) {
    const o = n.find(({ vnode: a }) => {
      var i;
      return ((i = a.props) == null ? void 0 : i.message) === s.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = s.type, o.handler;
  }
  if (Ve(ce.max) && n.length >= ce.max)
    return { close: () => {
    } };
  const r = Ih(s, e);
  return n.push(r), r.handler;
};
Pa.forEach((t) => {
  bt[t] = (e = {}, s) => {
    const n = xa(e);
    return bt({ ...n, type: t }, s);
  };
});
function Ah(t) {
  for (const e in $e)
    if (os($e, e)) {
      const s = [...$e[e]];
      for (const n of s)
        (!t || t === n.props.type) && n.handler.close();
    }
}
function Ph(t) {
  if (!$e[t])
    return;
  [...$e[t]].forEach((s) => s.handler.close());
}
bt.closeAll = Ah;
bt.closeAllByPlacement = Ph;
bt._context = null;
const Ht = _u(bt, "$message"), In = "_trap-focus-children", pt = [], uo = (t) => {
  if (pt.length === 0)
    return;
  const e = pt[pt.length - 1][In];
  if (e.length > 0 && t.code === Js.tab) {
    if (e.length === 1) {
      t.preventDefault(), document.activeElement !== e[0] && e[0].focus();
      return;
    }
    const s = t.shiftKey, n = t.target === e[0], r = t.target === e[e.length - 1];
    n && s && (t.preventDefault(), e[e.length - 1].focus()), r && !s && (t.preventDefault(), e[0].focus());
  }
}, $h = {
  beforeMount(t) {
    t[In] = Xr(t), pt.push(t), pt.length <= 1 && document.addEventListener("keydown", uo);
  },
  updated(t) {
    oe(() => {
      t[In] = Xr(t);
    });
  },
  unmounted() {
    pt.shift(), pt.length === 0 && document.removeEventListener("keydown", uo);
  }
}, xh = G({
  name: "ElMessageBox",
  directives: {
    TrapFocus: $h
  },
  components: {
    ElButton: rh,
    ElFocusTrap: Od,
    ElInput: fd,
    ElOverlay: dh,
    ElIcon: Ne,
    ..._a
  },
  inheritAttrs: !1,
  props: {
    buttonSize: {
      type: String,
      validator: ph
    },
    modal: {
      type: Boolean,
      default: !0
    },
    lockScroll: {
      type: Boolean,
      default: !0
    },
    showClose: {
      type: Boolean,
      default: !0
    },
    closeOnClickModal: {
      type: Boolean,
      default: !0
    },
    closeOnPressEscape: {
      type: Boolean,
      default: !0
    },
    closeOnHashChange: {
      type: Boolean,
      default: !0
    },
    center: Boolean,
    draggable: Boolean,
    overflow: Boolean,
    roundButton: Boolean,
    container: {
      type: String,
      default: "body"
    },
    boxType: {
      type: String,
      default: ""
    }
  },
  emits: ["vanish", "action"],
  setup(t, { emit: e }) {
    const {
      locale: s,
      zIndex: n,
      ns: r,
      size: o
    } = ha("message-box", C(() => t.buttonSize)), { t: a } = s, { nextZIndex: i } = n, l = R(!1), c = Hn({
      autofocus: !0,
      beforeClose: null,
      callback: null,
      cancelButtonText: "",
      cancelButtonClass: "",
      confirmButtonText: "",
      confirmButtonClass: "",
      customClass: "",
      customStyle: {},
      dangerouslyUseHTMLString: !1,
      distinguishCancelAndClose: !1,
      icon: "",
      closeIcon: "",
      inputPattern: null,
      inputPlaceholder: "",
      inputType: "text",
      inputValue: "",
      inputValidator: void 0,
      inputErrorMessage: "",
      message: "",
      modalFade: !0,
      modalClass: "",
      showCancelButton: !1,
      showConfirmButton: !0,
      type: "",
      title: void 0,
      showInput: !1,
      action: "",
      confirmButtonLoading: !1,
      cancelButtonLoading: !1,
      confirmButtonLoadingIcon: et(Ls),
      cancelButtonLoadingIcon: et(Ls),
      confirmButtonDisabled: !1,
      editorErrorMessage: "",
      validateError: !1,
      zIndex: i()
    }), u = C(() => {
      const W = c.type;
      return { [r.bm("icon", W)]: W && Ms[W] };
    }), d = Tn(), f = Tn(), p = C(() => {
      const W = c.type;
      return c.icon || W && Ms[W] || "";
    }), h = C(() => !!c.message), g = R(), b = R(), v = R(), k = R(), m = R(), A = C(() => c.confirmButtonClass);
    te(() => c.inputValue, async (W) => {
      await oe(), t.boxType === "prompt" && W && Z();
    }, { immediate: !0 }), te(() => l.value, (W) => {
      var I, _;
      W && (t.boxType !== "prompt" && (c.autofocus ? v.value = (_ = (I = m.value) == null ? void 0 : I.$el) != null ? _ : g.value : v.value = g.value), c.zIndex = i()), t.boxType === "prompt" && (W ? oe().then(() => {
        var x;
        k.value && k.value.$el && (c.autofocus ? v.value = (x = ge()) != null ? x : g.value : v.value = g.value);
      }) : (c.editorErrorMessage = "", c.validateError = !1));
    });
    const L = C(() => t.draggable), j = C(() => t.overflow), { isDragging: P } = hh(g, b, L, j);
    ye(async () => {
      await oe(), t.closeOnHashChange && window.addEventListener("hashchange", H);
    }), ds(() => {
      t.closeOnHashChange && window.removeEventListener("hashchange", H);
    });
    function H() {
      l.value && (l.value = !1, oe(() => {
        c.action && e("action", c.action);
      }));
    }
    const q = () => {
      t.closeOnClickModal && O(c.distinguishCancelAndClose ? "close" : "cancel");
    }, E = Aa(q), w = (W) => {
      if (c.inputType !== "textarea")
        return W.preventDefault(), O("confirm");
    }, O = (W) => {
      var I;
      t.boxType === "prompt" && W === "confirm" && !Z() || (c.action = W, c.beforeClose ? (I = c.beforeClose) == null || I.call(c, W, c, H) : H());
    }, Z = () => {
      if (t.boxType === "prompt") {
        const W = c.inputPattern;
        if (W && !W.test(c.inputValue || ""))
          return c.editorErrorMessage = c.inputErrorMessage || a("el.messagebox.error"), c.validateError = !0, !1;
        const I = c.inputValidator;
        if (ze(I)) {
          const _ = I(c.inputValue);
          if (_ === !1)
            return c.editorErrorMessage = c.inputErrorMessage || a("el.messagebox.error"), c.validateError = !0, !1;
          if (Se(_))
            return c.editorErrorMessage = _, c.validateError = !0, !1;
        }
      }
      return c.editorErrorMessage = "", c.validateError = !1, !0;
    }, ge = () => {
      var W, I;
      const _ = (W = k.value) == null ? void 0 : W.$refs;
      return (I = _ == null ? void 0 : _.input) != null ? I : _ == null ? void 0 : _.textarea;
    }, xe = () => {
      O("close");
    }, Me = () => {
      t.closeOnPressEscape && xe();
    };
    return t.lockScroll && fh(l), {
      ...kn(c),
      ns: r,
      overlayEvent: E,
      visible: l,
      hasMessage: h,
      typeClass: u,
      contentId: d,
      inputId: f,
      btnSize: o,
      iconComponent: p,
      confirmButtonClasses: A,
      rootRef: g,
      focusStartRef: v,
      headerRef: b,
      inputRef: k,
      isDragging: P,
      confirmRef: m,
      doClose: H,
      handleClose: xe,
      onCloseRequested: Me,
      handleWrapperClick: q,
      handleInputEnter: w,
      handleAction: O,
      t: a
    };
  }
});
function jh(t, e, s, n, r, o) {
  const a = we("el-icon"), i = we("el-input"), l = we("el-button"), c = we("el-focus-trap"), u = we("el-overlay");
  return S(), F(Wn, {
    name: "fade-in-linear",
    onAfterLeave: (d) => t.$emit("vanish"),
    persisted: ""
  }, {
    default: U(() => [
      Zt(X(u, {
        "z-index": t.zIndex,
        "overlay-class": [t.ns.is("message-box"), t.modalClass],
        mask: t.modal
      }, {
        default: U(() => [
          $("div", {
            role: "dialog",
            "aria-label": t.title,
            "aria-modal": "true",
            "aria-describedby": t.showInput ? void 0 : t.contentId,
            class: M(`${t.ns.namespace.value}-overlay-message-box`),
            onClick: t.overlayEvent.onClick,
            onMousedown: t.overlayEvent.onMousedown,
            onMouseup: t.overlayEvent.onMouseup
          }, [
            X(c, {
              loop: "",
              trapped: t.visible,
              "focus-trap-el": t.rootRef,
              "focus-start-el": t.focusStartRef,
              onReleaseRequested: t.onCloseRequested
            }, {
              default: U(() => [
                $("div", {
                  ref: "rootRef",
                  class: M([
                    t.ns.b(),
                    t.customClass,
                    t.ns.is("draggable", t.draggable),
                    t.ns.is("dragging", t.isDragging),
                    { [t.ns.m("center")]: t.center }
                  ]),
                  style: yt(t.customStyle),
                  tabindex: "-1",
                  onClick: Pe(() => {
                  }, ["stop"])
                }, [
                  t.title !== null && t.title !== void 0 ? (S(), N("div", {
                    key: 0,
                    ref: "headerRef",
                    class: M([t.ns.e("header"), { "show-close": t.showClose }])
                  }, [
                    $("div", {
                      class: M(t.ns.e("title"))
                    }, [
                      t.iconComponent && t.center ? (S(), F(a, {
                        key: 0,
                        class: M([t.ns.e("status"), t.typeClass])
                      }, {
                        default: U(() => [
                          (S(), F(pe(t.iconComponent)))
                        ]),
                        _: 1
                      }, 8, ["class"])) : B("v-if", !0),
                      $("span", null, Q(t.title), 1)
                    ], 2),
                    t.showClose ? (S(), N("button", {
                      key: 0,
                      type: "button",
                      class: M(t.ns.e("headerbtn")),
                      "aria-label": t.t("el.messagebox.close"),
                      onClick: (d) => t.handleAction(t.distinguishCancelAndClose ? "close" : "cancel"),
                      onKeydown: gs(Pe((d) => t.handleAction(t.distinguishCancelAndClose ? "close" : "cancel"), ["prevent"]), ["enter"])
                    }, [
                      X(a, {
                        class: M(t.ns.e("close"))
                      }, {
                        default: U(() => [
                          (S(), F(pe(t.closeIcon || "close")))
                        ]),
                        _: 1
                      }, 8, ["class"])
                    ], 42, ["aria-label", "onClick", "onKeydown"])) : B("v-if", !0)
                  ], 2)) : B("v-if", !0),
                  $("div", {
                    id: t.contentId,
                    class: M(t.ns.e("content"))
                  }, [
                    $("div", {
                      class: M(t.ns.e("container"))
                    }, [
                      t.iconComponent && !t.center && t.hasMessage ? (S(), F(a, {
                        key: 0,
                        class: M([t.ns.e("status"), t.typeClass])
                      }, {
                        default: U(() => [
                          (S(), F(pe(t.iconComponent)))
                        ]),
                        _: 1
                      }, 8, ["class"])) : B("v-if", !0),
                      t.hasMessage ? (S(), N("div", {
                        key: 1,
                        class: M(t.ns.e("message"))
                      }, [
                        ae(t.$slots, "default", {}, () => [
                          t.dangerouslyUseHTMLString ? (S(), F(pe(t.showInput ? "label" : "p"), {
                            key: 1,
                            for: t.showInput ? t.inputId : void 0,
                            innerHTML: t.message
                          }, null, 8, ["for", "innerHTML"])) : (S(), F(pe(t.showInput ? "label" : "p"), {
                            key: 0,
                            for: t.showInput ? t.inputId : void 0,
                            textContent: Q(t.message)
                          }, null, 8, ["for", "textContent"]))
                        ])
                      ], 2)) : B("v-if", !0)
                    ], 2),
                    Zt($("div", {
                      class: M(t.ns.e("input"))
                    }, [
                      X(i, {
                        id: t.inputId,
                        ref: "inputRef",
                        modelValue: t.inputValue,
                        "onUpdate:modelValue": (d) => t.inputValue = d,
                        type: t.inputType,
                        placeholder: t.inputPlaceholder,
                        "aria-invalid": t.validateError,
                        class: M({ invalid: t.validateError }),
                        onKeydown: gs(t.handleInputEnter, ["enter"])
                      }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "type", "placeholder", "aria-invalid", "class", "onKeydown"]),
                      $("div", {
                        class: M(t.ns.e("errormsg")),
                        style: yt({
                          visibility: t.editorErrorMessage ? "visible" : "hidden"
                        })
                      }, Q(t.editorErrorMessage), 7)
                    ], 2), [
                      [Qt, t.showInput]
                    ])
                  ], 10, ["id"]),
                  $("div", {
                    class: M(t.ns.e("btns"))
                  }, [
                    t.showCancelButton ? (S(), F(l, {
                      key: 0,
                      loading: t.cancelButtonLoading,
                      "loading-icon": t.cancelButtonLoadingIcon,
                      class: M([t.cancelButtonClass]),
                      round: t.roundButton,
                      size: t.btnSize,
                      onClick: (d) => t.handleAction("cancel"),
                      onKeydown: gs(Pe((d) => t.handleAction("cancel"), ["prevent"]), ["enter"])
                    }, {
                      default: U(() => [
                        Re(Q(t.cancelButtonText || t.t("el.messagebox.cancel")), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "loading-icon", "class", "round", "size", "onClick", "onKeydown"])) : B("v-if", !0),
                    Zt(X(l, {
                      ref: "confirmRef",
                      type: "primary",
                      loading: t.confirmButtonLoading,
                      "loading-icon": t.confirmButtonLoadingIcon,
                      class: M([t.confirmButtonClasses]),
                      round: t.roundButton,
                      disabled: t.confirmButtonDisabled,
                      size: t.btnSize,
                      onClick: (d) => t.handleAction("confirm"),
                      onKeydown: gs(Pe((d) => t.handleAction("confirm"), ["prevent"]), ["enter"])
                    }, {
                      default: U(() => [
                        Re(Q(t.confirmButtonText || t.t("el.messagebox.confirm")), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "loading-icon", "class", "round", "disabled", "size", "onClick", "onKeydown"]), [
                      [Qt, t.showConfirmButton]
                    ])
                  ], 2)
                ], 14, ["onClick"])
              ]),
              _: 3
            }, 8, ["trapped", "focus-trap-el", "focus-start-el", "onReleaseRequested"])
          ], 42, ["aria-label", "aria-describedby", "onClick", "onMousedown", "onMouseup"])
        ]),
        _: 3
      }, 8, ["z-index", "overlay-class", "mask"]), [
        [Qt, t.visible]
      ])
    ]),
    _: 3
  }, 8, ["onAfterLeave"]);
}
var Rh = /* @__PURE__ */ ot(xh, [["render", jh], ["__file", "index.vue"]]);
const cs = /* @__PURE__ */ new Map(), Nh = (t) => {
  let e = document.body;
  return t.appendTo && (Se(t.appendTo) && (e = document.querySelector(t.appendTo)), is(t.appendTo) && (e = t.appendTo), is(e) || (e = document.body)), e;
}, Lh = (t, e, s = null) => {
  const n = X(Rh, t, ze(t.message) || Vs(t.message) ? {
    default: ze(t.message) ? t.message : () => t.message
  } : null);
  return n.appContext = s, xs(n, e), Nh(t).appendChild(e.firstElementChild), n.component;
}, Mh = () => document.createElement("div"), Uh = (t, e) => {
  const s = Mh();
  t.onVanish = () => {
    xs(null, s), cs.delete(r);
  }, t.onAction = (o) => {
    const a = cs.get(r);
    let i;
    t.showInput ? i = { value: r.inputValue, action: o } : i = o, t.callback ? t.callback(i, n.proxy) : o === "cancel" || o === "close" ? t.distinguishCancelAndClose && o !== "cancel" ? a.reject("close") : a.reject("cancel") : a.resolve(i);
  };
  const n = Lh(t, s, e), r = n.proxy;
  for (const o in t)
    os(t, o) && !os(r.$props, o) && (o === "closeIcon" && Mt(t[o]) ? r[o] = et(t[o]) : r[o] = t[o]);
  return r.visible = !0, r;
};
function Bt(t, e = null) {
  if (!ve)
    return Promise.reject();
  let s;
  return Se(t) || Vs(t) ? t = {
    message: t
  } : s = t.callback, new Promise((n, r) => {
    const o = Uh(t, e ?? Bt._context);
    cs.set(o, {
      options: t,
      callback: s,
      resolve: n,
      reject: r
    });
  });
}
const Dh = ["alert", "confirm", "prompt"], Bh = {
  alert: { closeOnPressEscape: !1, closeOnClickModal: !1 },
  confirm: { showCancelButton: !0 },
  prompt: { showCancelButton: !0, showInput: !0 }
};
Dh.forEach((t) => {
  Bt[t] = Fh(t);
});
function Fh(t) {
  return (e, s, n, r) => {
    let o = "";
    return Mt(s) ? (n = s, o = "") : ta(s) ? o = "" : o = s, Bt(Object.assign({
      title: o,
      message: e,
      type: "",
      ...Bh[t]
    }, n, {
      boxType: t
    }), r);
  };
}
Bt.close = () => {
  cs.forEach((t, e) => {
    e.doClose();
  }), cs.clear();
};
Bt._context = null;
const Xe = Bt;
Xe.install = (t) => {
  Xe._context = t._context, t.config.globalProperties.$msgbox = Xe, t.config.globalProperties.$messageBox = Xe, t.config.globalProperties.$alert = Xe.alert, t.config.globalProperties.$confirm = Xe.confirm, t.config.globalProperties.$prompt = Xe.prompt;
};
const ho = Xe, zh = (t) => {
  let e;
  return t ? e = t : typeof fetch > "u" ? e = (...s) => Promise.resolve().then(() => Ft).then(({ default: n }) => n(...s)) : e = fetch, (...s) => e(...s);
};
class cr extends Error {
  constructor(e, s = "FunctionsError", n) {
    super(e), this.name = s, this.context = n;
  }
}
class Vh extends cr {
  constructor(e) {
    super("Failed to send a request to the Edge Function", "FunctionsFetchError", e);
  }
}
class fo extends cr {
  constructor(e) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", e);
  }
}
class po extends cr {
  constructor(e) {
    super("Edge Function returned a non-2xx status code", "FunctionsHttpError", e);
  }
}
var An;
(function(t) {
  t.Any = "any", t.ApNortheast1 = "ap-northeast-1", t.ApNortheast2 = "ap-northeast-2", t.ApSouth1 = "ap-south-1", t.ApSoutheast1 = "ap-southeast-1", t.ApSoutheast2 = "ap-southeast-2", t.CaCentral1 = "ca-central-1", t.EuCentral1 = "eu-central-1", t.EuWest1 = "eu-west-1", t.EuWest2 = "eu-west-2", t.EuWest3 = "eu-west-3", t.SaEast1 = "sa-east-1", t.UsEast1 = "us-east-1", t.UsWest1 = "us-west-1", t.UsWest2 = "us-west-2";
})(An || (An = {}));
var Wh = globalThis && globalThis.__awaiter || function(t, e, s, n) {
  function r(o) {
    return o instanceof s ? o : new s(function(a) {
      a(o);
    });
  }
  return new (s || (s = Promise))(function(o, a) {
    function i(u) {
      try {
        c(n.next(u));
      } catch (d) {
        a(d);
      }
    }
    function l(u) {
      try {
        c(n.throw(u));
      } catch (d) {
        a(d);
      }
    }
    function c(u) {
      u.done ? o(u.value) : r(u.value).then(i, l);
    }
    c((n = n.apply(t, e || [])).next());
  });
};
class Hh {
  constructor(e, { headers: s = {}, customFetch: n, region: r = An.Any } = {}) {
    this.url = e, this.headers = s, this.region = r, this.fetch = zh(n);
  }
  /**
   * Updates the authorization header
   * @param token - the new jwt token sent in the authorisation header
   */
  setAuth(e) {
    this.headers.Authorization = `Bearer ${e}`;
  }
  /**
   * Invokes a function
   * @param functionName - The name of the Function to invoke.
   * @param options - Options for invoking the Function.
   */
  invoke(e, s = {}) {
    var n;
    return Wh(this, void 0, void 0, function* () {
      try {
        const { headers: r, method: o, body: a } = s;
        let i = {}, { region: l } = s;
        l || (l = this.region);
        const c = new URL(`${this.url}/${e}`);
        l && l !== "any" && (i["x-region"] = l, c.searchParams.set("forceFunctionRegion", l));
        let u;
        a && (r && !Object.prototype.hasOwnProperty.call(r, "Content-Type") || !r) && (typeof Blob < "u" && a instanceof Blob || a instanceof ArrayBuffer ? (i["Content-Type"] = "application/octet-stream", u = a) : typeof a == "string" ? (i["Content-Type"] = "text/plain", u = a) : typeof FormData < "u" && a instanceof FormData ? u = a : (i["Content-Type"] = "application/json", u = JSON.stringify(a)));
        const d = yield this.fetch(c.toString(), {
          method: o || "POST",
          // headers priority is (high to low):
          // 1. invoke-level headers
          // 2. client-level headers
          // 3. default Content-Type header
          headers: Object.assign(Object.assign(Object.assign({}, i), this.headers), r),
          body: u
        }).catch((g) => {
          throw new Vh(g);
        }), f = d.headers.get("x-relay-error");
        if (f && f === "true")
          throw new fo(d);
        if (!d.ok)
          throw new po(d);
        let p = ((n = d.headers.get("Content-Type")) !== null && n !== void 0 ? n : "text/plain").split(";")[0].trim(), h;
        return p === "application/json" ? h = yield d.json() : p === "application/octet-stream" ? h = yield d.blob() : p === "text/event-stream" ? h = d : p === "multipart/form-data" ? h = yield d.formData() : h = yield d.text(), { data: h, error: null, response: d };
      } catch (r) {
        return {
          data: null,
          error: r,
          response: r instanceof po || r instanceof fo ? r.context : void 0
        };
      }
    });
  }
}
var fe = {}, ur = {}, Ys = {}, fs = {}, Xs = {}, Zs = {}, qh = function() {
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("unable to locate global object");
}, Ut = qh();
const Kh = Ut.fetch, ja = Ut.fetch.bind(Ut), Ra = Ut.Headers, Gh = Ut.Request, Jh = Ut.Response, Ft = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Headers: Ra,
  Request: Gh,
  Response: Jh,
  default: ja,
  fetch: Kh
}, Symbol.toStringTag, { value: "Module" })), Yh = /* @__PURE__ */ oh(Ft);
var Qs = {};
Object.defineProperty(Qs, "__esModule", { value: !0 });
let Xh = class extends Error {
  constructor(e) {
    super(e.message), this.name = "PostgrestError", this.details = e.details, this.hint = e.hint, this.code = e.code;
  }
};
Qs.default = Xh;
var Na = Te && Te.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Zs, "__esModule", { value: !0 });
const Zh = Na(Yh), Qh = Na(Qs);
let ef = class {
  constructor(e) {
    var s, n;
    this.shouldThrowOnError = !1, this.method = e.method, this.url = e.url, this.headers = new Headers(e.headers), this.schema = e.schema, this.body = e.body, this.shouldThrowOnError = (s = e.shouldThrowOnError) !== null && s !== void 0 ? s : !1, this.signal = e.signal, this.isMaybeSingle = (n = e.isMaybeSingle) !== null && n !== void 0 ? n : !1, e.fetch ? this.fetch = e.fetch : typeof fetch > "u" ? this.fetch = Zh.default : this.fetch = fetch;
  }
  /**
   * If there's an error with the query, throwOnError will reject the promise by
   * throwing the error instead of returning it as part of a successful response.
   *
   * {@link https://github.com/supabase/supabase-js/issues/92}
   */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /**
   * Set an HTTP header for the request.
   */
  setHeader(e, s) {
    return this.headers = new Headers(this.headers), this.headers.set(e, s), this;
  }
  then(e, s) {
    this.schema === void 0 || (["GET", "HEAD"].includes(this.method) ? this.headers.set("Accept-Profile", this.schema) : this.headers.set("Content-Profile", this.schema)), this.method !== "GET" && this.method !== "HEAD" && this.headers.set("Content-Type", "application/json");
    const n = this.fetch;
    let r = n(this.url.toString(), {
      method: this.method,
      headers: this.headers,
      body: JSON.stringify(this.body),
      signal: this.signal
    }).then(async (o) => {
      var a, i, l, c;
      let u = null, d = null, f = null, p = o.status, h = o.statusText;
      if (o.ok) {
        if (this.method !== "HEAD") {
          const k = await o.text();
          k === "" || (this.headers.get("Accept") === "text/csv" || this.headers.get("Accept") && (!((a = this.headers.get("Accept")) === null || a === void 0) && a.includes("application/vnd.pgrst.plan+text")) ? d = k : d = JSON.parse(k));
        }
        const b = (i = this.headers.get("Prefer")) === null || i === void 0 ? void 0 : i.match(/count=(exact|planned|estimated)/), v = (l = o.headers.get("content-range")) === null || l === void 0 ? void 0 : l.split("/");
        b && v && v.length > 1 && (f = parseInt(v[1])), this.isMaybeSingle && this.method === "GET" && Array.isArray(d) && (d.length > 1 ? (u = {
          // https://github.com/PostgREST/postgrest/blob/a867d79c42419af16c18c3fb019eba8df992626f/src/PostgREST/Error.hs#L553
          code: "PGRST116",
          details: `Results contain ${d.length} rows, application/vnd.pgrst.object+json requires 1 row`,
          hint: null,
          message: "JSON object requested, multiple (or no) rows returned"
        }, d = null, f = null, p = 406, h = "Not Acceptable") : d.length === 1 ? d = d[0] : d = null);
      } else {
        const b = await o.text();
        try {
          u = JSON.parse(b), Array.isArray(u) && o.status === 404 && (d = [], u = null, p = 200, h = "OK");
        } catch {
          o.status === 404 && b === "" ? (p = 204, h = "No Content") : u = {
            message: b
          };
        }
        if (u && this.isMaybeSingle && (!((c = u == null ? void 0 : u.details) === null || c === void 0) && c.includes("0 rows")) && (u = null, p = 200, h = "OK"), u && this.shouldThrowOnError)
          throw new Qh.default(u);
      }
      return {
        error: u,
        data: d,
        count: f,
        status: p,
        statusText: h
      };
    });
    return this.shouldThrowOnError || (r = r.catch((o) => {
      var a, i, l;
      return {
        error: {
          message: `${(a = o == null ? void 0 : o.name) !== null && a !== void 0 ? a : "FetchError"}: ${o == null ? void 0 : o.message}`,
          details: `${(i = o == null ? void 0 : o.stack) !== null && i !== void 0 ? i : ""}`,
          hint: "",
          code: `${(l = o == null ? void 0 : o.code) !== null && l !== void 0 ? l : ""}`
        },
        data: null,
        count: null,
        status: 0,
        statusText: ""
      };
    })), r.then(e, s);
  }
  /**
   * Override the type of the returned `data`.
   *
   * @typeParam NewResult - The new result type to override with
   * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
   */
  returns() {
    return this;
  }
  /**
   * Override the type of the returned `data` field in the response.
   *
   * @typeParam NewResult - The new type to cast the response data to
   * @typeParam Options - Optional type configuration (defaults to { merge: true })
   * @typeParam Options.merge - When true, merges the new type with existing return type. When false, replaces the existing types entirely (defaults to true)
   * @example
   * ```typescript
   * // Merge with existing types (default behavior)
   * const query = supabase
   *   .from('users')
   *   .select()
   *   .overrideTypes<{ custom_field: string }>()
   *
   * // Replace existing types completely
   * const replaceQuery = supabase
   *   .from('users')
   *   .select()
   *   .overrideTypes<{ id: number; name: string }, { merge: false }>()
   * ```
   * @returns A PostgrestBuilder instance with the new type
   */
  overrideTypes() {
    return this;
  }
};
Zs.default = ef;
var tf = Te && Te.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Xs, "__esModule", { value: !0 });
const sf = tf(Zs);
let nf = class extends sf.default {
  /**
   * Perform a SELECT on the query result.
   *
   * By default, `.insert()`, `.update()`, `.upsert()`, and `.delete()` do not
   * return modified rows. By calling this method, modified rows are returned in
   * `data`.
   *
   * @param columns - The columns to retrieve, separated by commas
   */
  select(e) {
    let s = !1;
    const n = (e ?? "*").split("").map((r) => /\s/.test(r) && !s ? "" : (r === '"' && (s = !s), r)).join("");
    return this.url.searchParams.set("select", n), this.headers.append("Prefer", "return=representation"), this;
  }
  /**
   * Order the query result by `column`.
   *
   * You can call this method multiple times to order by multiple columns.
   *
   * You can order referenced tables, but it only affects the ordering of the
   * parent table if you use `!inner` in the query.
   *
   * @param column - The column to order by
   * @param options - Named parameters
   * @param options.ascending - If `true`, the result will be in ascending order
   * @param options.nullsFirst - If `true`, `null`s appear first. If `false`,
   * `null`s appear last.
   * @param options.referencedTable - Set this to order a referenced table by
   * its columns
   * @param options.foreignTable - Deprecated, use `options.referencedTable`
   * instead
   */
  order(e, { ascending: s = !0, nullsFirst: n, foreignTable: r, referencedTable: o = r } = {}) {
    const a = o ? `${o}.order` : "order", i = this.url.searchParams.get(a);
    return this.url.searchParams.set(a, `${i ? `${i},` : ""}${e}.${s ? "asc" : "desc"}${n === void 0 ? "" : n ? ".nullsfirst" : ".nullslast"}`), this;
  }
  /**
   * Limit the query result by `count`.
   *
   * @param count - The maximum number of rows to return
   * @param options - Named parameters
   * @param options.referencedTable - Set this to limit rows of referenced
   * tables instead of the parent table
   * @param options.foreignTable - Deprecated, use `options.referencedTable`
   * instead
   */
  limit(e, { foreignTable: s, referencedTable: n = s } = {}) {
    const r = typeof n > "u" ? "limit" : `${n}.limit`;
    return this.url.searchParams.set(r, `${e}`), this;
  }
  /**
   * Limit the query result by starting at an offset `from` and ending at the offset `to`.
   * Only records within this range are returned.
   * This respects the query order and if there is no order clause the range could behave unexpectedly.
   * The `from` and `to` values are 0-based and inclusive: `range(1, 3)` will include the second, third
   * and fourth rows of the query.
   *
   * @param from - The starting index from which to limit the result
   * @param to - The last index to which to limit the result
   * @param options - Named parameters
   * @param options.referencedTable - Set this to limit rows of referenced
   * tables instead of the parent table
   * @param options.foreignTable - Deprecated, use `options.referencedTable`
   * instead
   */
  range(e, s, { foreignTable: n, referencedTable: r = n } = {}) {
    const o = typeof r > "u" ? "offset" : `${r}.offset`, a = typeof r > "u" ? "limit" : `${r}.limit`;
    return this.url.searchParams.set(o, `${e}`), this.url.searchParams.set(a, `${s - e + 1}`), this;
  }
  /**
   * Set the AbortSignal for the fetch request.
   *
   * @param signal - The AbortSignal to use for the fetch request
   */
  abortSignal(e) {
    return this.signal = e, this;
  }
  /**
   * Return `data` as a single object instead of an array of objects.
   *
   * Query result must be one row (e.g. using `.limit(1)`), otherwise this
   * returns an error.
   */
  single() {
    return this.headers.set("Accept", "application/vnd.pgrst.object+json"), this;
  }
  /**
   * Return `data` as a single object instead of an array of objects.
   *
   * Query result must be zero or one row (e.g. using `.limit(1)`), otherwise
   * this returns an error.
   */
  maybeSingle() {
    return this.method === "GET" ? this.headers.set("Accept", "application/json") : this.headers.set("Accept", "application/vnd.pgrst.object+json"), this.isMaybeSingle = !0, this;
  }
  /**
   * Return `data` as a string in CSV format.
   */
  csv() {
    return this.headers.set("Accept", "text/csv"), this;
  }
  /**
   * Return `data` as an object in [GeoJSON](https://geojson.org) format.
   */
  geojson() {
    return this.headers.set("Accept", "application/geo+json"), this;
  }
  /**
   * Return `data` as the EXPLAIN plan for the query.
   *
   * You need to enable the
   * [db_plan_enabled](https://supabase.com/docs/guides/database/debugging-performance#enabling-explain)
   * setting before using this method.
   *
   * @param options - Named parameters
   *
   * @param options.analyze - If `true`, the query will be executed and the
   * actual run time will be returned
   *
   * @param options.verbose - If `true`, the query identifier will be returned
   * and `data` will include the output columns of the query
   *
   * @param options.settings - If `true`, include information on configuration
   * parameters that affect query planning
   *
   * @param options.buffers - If `true`, include information on buffer usage
   *
   * @param options.wal - If `true`, include information on WAL record generation
   *
   * @param options.format - The format of the output, can be `"text"` (default)
   * or `"json"`
   */
  explain({ analyze: e = !1, verbose: s = !1, settings: n = !1, buffers: r = !1, wal: o = !1, format: a = "text" } = {}) {
    var i;
    const l = [
      e ? "analyze" : null,
      s ? "verbose" : null,
      n ? "settings" : null,
      r ? "buffers" : null,
      o ? "wal" : null
    ].filter(Boolean).join("|"), c = (i = this.headers.get("Accept")) !== null && i !== void 0 ? i : "application/json";
    return this.headers.set("Accept", `application/vnd.pgrst.plan+${a}; for="${c}"; options=${l};`), a === "json" ? this : this;
  }
  /**
   * Rollback the query.
   *
   * `data` will still be returned, but the query is not committed.
   */
  rollback() {
    return this.headers.append("Prefer", "tx=rollback"), this;
  }
  /**
   * Override the type of the returned `data`.
   *
   * @typeParam NewResult - The new result type to override with
   * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
   */
  returns() {
    return this;
  }
  /**
   * Set the maximum number of rows that can be affected by the query.
   * Only available in PostgREST v13+ and only works with PATCH and DELETE methods.
   *
   * @param value - The maximum number of rows that can be affected
   */
  maxAffected(e) {
    return this.headers.append("Prefer", "handling=strict"), this.headers.append("Prefer", `max-affected=${e}`), this;
  }
};
Xs.default = nf;
var rf = Te && Te.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(fs, "__esModule", { value: !0 });
const of = rf(Xs);
let af = class extends of.default {
  /**
   * Match only rows where `column` is equal to `value`.
   *
   * To check if the value of `column` is NULL, you should use `.is()` instead.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  eq(e, s) {
    return this.url.searchParams.append(e, `eq.${s}`), this;
  }
  /**
   * Match only rows where `column` is not equal to `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  neq(e, s) {
    return this.url.searchParams.append(e, `neq.${s}`), this;
  }
  /**
   * Match only rows where `column` is greater than `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  gt(e, s) {
    return this.url.searchParams.append(e, `gt.${s}`), this;
  }
  /**
   * Match only rows where `column` is greater than or equal to `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  gte(e, s) {
    return this.url.searchParams.append(e, `gte.${s}`), this;
  }
  /**
   * Match only rows where `column` is less than `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  lt(e, s) {
    return this.url.searchParams.append(e, `lt.${s}`), this;
  }
  /**
   * Match only rows where `column` is less than or equal to `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  lte(e, s) {
    return this.url.searchParams.append(e, `lte.${s}`), this;
  }
  /**
   * Match only rows where `column` matches `pattern` case-sensitively.
   *
   * @param column - The column to filter on
   * @param pattern - The pattern to match with
   */
  like(e, s) {
    return this.url.searchParams.append(e, `like.${s}`), this;
  }
  /**
   * Match only rows where `column` matches all of `patterns` case-sensitively.
   *
   * @param column - The column to filter on
   * @param patterns - The patterns to match with
   */
  likeAllOf(e, s) {
    return this.url.searchParams.append(e, `like(all).{${s.join(",")}}`), this;
  }
  /**
   * Match only rows where `column` matches any of `patterns` case-sensitively.
   *
   * @param column - The column to filter on
   * @param patterns - The patterns to match with
   */
  likeAnyOf(e, s) {
    return this.url.searchParams.append(e, `like(any).{${s.join(",")}}`), this;
  }
  /**
   * Match only rows where `column` matches `pattern` case-insensitively.
   *
   * @param column - The column to filter on
   * @param pattern - The pattern to match with
   */
  ilike(e, s) {
    return this.url.searchParams.append(e, `ilike.${s}`), this;
  }
  /**
   * Match only rows where `column` matches all of `patterns` case-insensitively.
   *
   * @param column - The column to filter on
   * @param patterns - The patterns to match with
   */
  ilikeAllOf(e, s) {
    return this.url.searchParams.append(e, `ilike(all).{${s.join(",")}}`), this;
  }
  /**
   * Match only rows where `column` matches any of `patterns` case-insensitively.
   *
   * @param column - The column to filter on
   * @param patterns - The patterns to match with
   */
  ilikeAnyOf(e, s) {
    return this.url.searchParams.append(e, `ilike(any).{${s.join(",")}}`), this;
  }
  /**
   * Match only rows where `column` IS `value`.
   *
   * For non-boolean columns, this is only relevant for checking if the value of
   * `column` is NULL by setting `value` to `null`.
   *
   * For boolean columns, you can also set `value` to `true` or `false` and it
   * will behave the same way as `.eq()`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  is(e, s) {
    return this.url.searchParams.append(e, `is.${s}`), this;
  }
  /**
   * Match only rows where `column` is included in the `values` array.
   *
   * @param column - The column to filter on
   * @param values - The values array to filter with
   */
  in(e, s) {
    const n = Array.from(new Set(s)).map((r) => typeof r == "string" && new RegExp("[,()]").test(r) ? `"${r}"` : `${r}`).join(",");
    return this.url.searchParams.append(e, `in.(${n})`), this;
  }
  /**
   * Only relevant for jsonb, array, and range columns. Match only rows where
   * `column` contains every element appearing in `value`.
   *
   * @param column - The jsonb, array, or range column to filter on
   * @param value - The jsonb, array, or range value to filter with
   */
  contains(e, s) {
    return typeof s == "string" ? this.url.searchParams.append(e, `cs.${s}`) : Array.isArray(s) ? this.url.searchParams.append(e, `cs.{${s.join(",")}}`) : this.url.searchParams.append(e, `cs.${JSON.stringify(s)}`), this;
  }
  /**
   * Only relevant for jsonb, array, and range columns. Match only rows where
   * every element appearing in `column` is contained by `value`.
   *
   * @param column - The jsonb, array, or range column to filter on
   * @param value - The jsonb, array, or range value to filter with
   */
  containedBy(e, s) {
    return typeof s == "string" ? this.url.searchParams.append(e, `cd.${s}`) : Array.isArray(s) ? this.url.searchParams.append(e, `cd.{${s.join(",")}}`) : this.url.searchParams.append(e, `cd.${JSON.stringify(s)}`), this;
  }
  /**
   * Only relevant for range columns. Match only rows where every element in
   * `column` is greater than any element in `range`.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeGt(e, s) {
    return this.url.searchParams.append(e, `sr.${s}`), this;
  }
  /**
   * Only relevant for range columns. Match only rows where every element in
   * `column` is either contained in `range` or greater than any element in
   * `range`.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeGte(e, s) {
    return this.url.searchParams.append(e, `nxl.${s}`), this;
  }
  /**
   * Only relevant for range columns. Match only rows where every element in
   * `column` is less than any element in `range`.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeLt(e, s) {
    return this.url.searchParams.append(e, `sl.${s}`), this;
  }
  /**
   * Only relevant for range columns. Match only rows where every element in
   * `column` is either contained in `range` or less than any element in
   * `range`.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeLte(e, s) {
    return this.url.searchParams.append(e, `nxr.${s}`), this;
  }
  /**
   * Only relevant for range columns. Match only rows where `column` is
   * mutually exclusive to `range` and there can be no element between the two
   * ranges.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeAdjacent(e, s) {
    return this.url.searchParams.append(e, `adj.${s}`), this;
  }
  /**
   * Only relevant for array and range columns. Match only rows where
   * `column` and `value` have an element in common.
   *
   * @param column - The array or range column to filter on
   * @param value - The array or range value to filter with
   */
  overlaps(e, s) {
    return typeof s == "string" ? this.url.searchParams.append(e, `ov.${s}`) : this.url.searchParams.append(e, `ov.{${s.join(",")}}`), this;
  }
  /**
   * Only relevant for text and tsvector columns. Match only rows where
   * `column` matches the query string in `query`.
   *
   * @param column - The text or tsvector column to filter on
   * @param query - The query text to match with
   * @param options - Named parameters
   * @param options.config - The text search configuration to use
   * @param options.type - Change how the `query` text is interpreted
   */
  textSearch(e, s, { config: n, type: r } = {}) {
    let o = "";
    r === "plain" ? o = "pl" : r === "phrase" ? o = "ph" : r === "websearch" && (o = "w");
    const a = n === void 0 ? "" : `(${n})`;
    return this.url.searchParams.append(e, `${o}fts${a}.${s}`), this;
  }
  /**
   * Match only rows where each column in `query` keys is equal to its
   * associated value. Shorthand for multiple `.eq()`s.
   *
   * @param query - The object to filter with, with column names as keys mapped
   * to their filter values
   */
  match(e) {
    return Object.entries(e).forEach(([s, n]) => {
      this.url.searchParams.append(s, `eq.${n}`);
    }), this;
  }
  /**
   * Match only rows which doesn't satisfy the filter.
   *
   * Unlike most filters, `opearator` and `value` are used as-is and need to
   * follow [PostgREST
   * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
   * to make sure they are properly sanitized.
   *
   * @param column - The column to filter on
   * @param operator - The operator to be negated to filter with, following
   * PostgREST syntax
   * @param value - The value to filter with, following PostgREST syntax
   */
  not(e, s, n) {
    return this.url.searchParams.append(e, `not.${s}.${n}`), this;
  }
  /**
   * Match only rows which satisfy at least one of the filters.
   *
   * Unlike most filters, `filters` is used as-is and needs to follow [PostgREST
   * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
   * to make sure it's properly sanitized.
   *
   * It's currently not possible to do an `.or()` filter across multiple tables.
   *
   * @param filters - The filters to use, following PostgREST syntax
   * @param options - Named parameters
   * @param options.referencedTable - Set this to filter on referenced tables
   * instead of the parent table
   * @param options.foreignTable - Deprecated, use `referencedTable` instead
   */
  or(e, { foreignTable: s, referencedTable: n = s } = {}) {
    const r = n ? `${n}.or` : "or";
    return this.url.searchParams.append(r, `(${e})`), this;
  }
  /**
   * Match only rows which satisfy the filter. This is an escape hatch - you
   * should use the specific filter methods wherever possible.
   *
   * Unlike most filters, `opearator` and `value` are used as-is and need to
   * follow [PostgREST
   * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
   * to make sure they are properly sanitized.
   *
   * @param column - The column to filter on
   * @param operator - The operator to filter with, following PostgREST syntax
   * @param value - The value to filter with, following PostgREST syntax
   */
  filter(e, s, n) {
    return this.url.searchParams.append(e, `${s}.${n}`), this;
  }
};
fs.default = af;
var lf = Te && Te.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Ys, "__esModule", { value: !0 });
const qt = lf(fs);
let cf = class {
  constructor(e, { headers: s = {}, schema: n, fetch: r }) {
    this.url = e, this.headers = new Headers(s), this.schema = n, this.fetch = r;
  }
  /**
   * Perform a SELECT query on the table or view.
   *
   * @param columns - The columns to retrieve, separated by commas. Columns can be renamed when returned with `customName:columnName`
   *
   * @param options - Named parameters
   *
   * @param options.head - When set to `true`, `data` will not be returned.
   * Useful if you only need the count.
   *
   * @param options.count - Count algorithm to use to count rows in the table or view.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  select(e, { head: s = !1, count: n } = {}) {
    const r = s ? "HEAD" : "GET";
    let o = !1;
    const a = (e ?? "*").split("").map((i) => /\s/.test(i) && !o ? "" : (i === '"' && (o = !o), i)).join("");
    return this.url.searchParams.set("select", a), n && this.headers.append("Prefer", `count=${n}`), new qt.default({
      method: r,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      fetch: this.fetch
    });
  }
  /**
   * Perform an INSERT into the table or view.
   *
   * By default, inserted rows are not returned. To return it, chain the call
   * with `.select()`.
   *
   * @param values - The values to insert. Pass an object to insert a single row
   * or an array to insert multiple rows.
   *
   * @param options - Named parameters
   *
   * @param options.count - Count algorithm to use to count inserted rows.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   *
   * @param options.defaultToNull - Make missing fields default to `null`.
   * Otherwise, use the default value for the column. Only applies for bulk
   * inserts.
   */
  insert(e, { count: s, defaultToNull: n = !0 } = {}) {
    var r;
    const o = "POST";
    if (s && this.headers.append("Prefer", `count=${s}`), n || this.headers.append("Prefer", "missing=default"), Array.isArray(e)) {
      const a = e.reduce((i, l) => i.concat(Object.keys(l)), []);
      if (a.length > 0) {
        const i = [...new Set(a)].map((l) => `"${l}"`);
        this.url.searchParams.set("columns", i.join(","));
      }
    }
    return new qt.default({
      method: o,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: e,
      fetch: (r = this.fetch) !== null && r !== void 0 ? r : fetch
    });
  }
  /**
   * Perform an UPSERT on the table or view. Depending on the column(s) passed
   * to `onConflict`, `.upsert()` allows you to perform the equivalent of
   * `.insert()` if a row with the corresponding `onConflict` columns doesn't
   * exist, or if it does exist, perform an alternative action depending on
   * `ignoreDuplicates`.
   *
   * By default, upserted rows are not returned. To return it, chain the call
   * with `.select()`.
   *
   * @param values - The values to upsert with. Pass an object to upsert a
   * single row or an array to upsert multiple rows.
   *
   * @param options - Named parameters
   *
   * @param options.onConflict - Comma-separated UNIQUE column(s) to specify how
   * duplicate rows are determined. Two rows are duplicates if all the
   * `onConflict` columns are equal.
   *
   * @param options.ignoreDuplicates - If `true`, duplicate rows are ignored. If
   * `false`, duplicate rows are merged with existing rows.
   *
   * @param options.count - Count algorithm to use to count upserted rows.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   *
   * @param options.defaultToNull - Make missing fields default to `null`.
   * Otherwise, use the default value for the column. This only applies when
   * inserting new rows, not when merging with existing rows under
   * `ignoreDuplicates: false`. This also only applies when doing bulk upserts.
   */
  upsert(e, { onConflict: s, ignoreDuplicates: n = !1, count: r, defaultToNull: o = !0 } = {}) {
    var a;
    const i = "POST";
    if (this.headers.append("Prefer", `resolution=${n ? "ignore" : "merge"}-duplicates`), s !== void 0 && this.url.searchParams.set("on_conflict", s), r && this.headers.append("Prefer", `count=${r}`), o || this.headers.append("Prefer", "missing=default"), Array.isArray(e)) {
      const l = e.reduce((c, u) => c.concat(Object.keys(u)), []);
      if (l.length > 0) {
        const c = [...new Set(l)].map((u) => `"${u}"`);
        this.url.searchParams.set("columns", c.join(","));
      }
    }
    return new qt.default({
      method: i,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: e,
      fetch: (a = this.fetch) !== null && a !== void 0 ? a : fetch
    });
  }
  /**
   * Perform an UPDATE on the table or view.
   *
   * By default, updated rows are not returned. To return it, chain the call
   * with `.select()` after filters.
   *
   * @param values - The values to update with
   *
   * @param options - Named parameters
   *
   * @param options.count - Count algorithm to use to count updated rows.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  update(e, { count: s } = {}) {
    var n;
    const r = "PATCH";
    return s && this.headers.append("Prefer", `count=${s}`), new qt.default({
      method: r,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: e,
      fetch: (n = this.fetch) !== null && n !== void 0 ? n : fetch
    });
  }
  /**
   * Perform a DELETE on the table or view.
   *
   * By default, deleted rows are not returned. To return it, chain the call
   * with `.select()` after filters.
   *
   * @param options - Named parameters
   *
   * @param options.count - Count algorithm to use to count deleted rows.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  delete({ count: e } = {}) {
    var s;
    const n = "DELETE";
    return e && this.headers.append("Prefer", `count=${e}`), new qt.default({
      method: n,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      fetch: (s = this.fetch) !== null && s !== void 0 ? s : fetch
    });
  }
};
Ys.default = cf;
var La = Te && Te.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(ur, "__esModule", { value: !0 });
const uf = La(Ys), df = La(fs);
let hf = class Ma {
  // TODO: Add back shouldThrowOnError once we figure out the typings
  /**
   * Creates a PostgREST client.
   *
   * @param url - URL of the PostgREST endpoint
   * @param options - Named parameters
   * @param options.headers - Custom headers
   * @param options.schema - Postgres schema to switch to
   * @param options.fetch - Custom fetch
   */
  constructor(e, { headers: s = {}, schema: n, fetch: r } = {}) {
    this.url = e, this.headers = new Headers(s), this.schemaName = n, this.fetch = r;
  }
  /**
   * Perform a query on a table or a view.
   *
   * @param relation - The table or view name to query
   */
  from(e) {
    const s = new URL(`${this.url}/${e}`);
    return new uf.default(s, {
      headers: new Headers(this.headers),
      schema: this.schemaName,
      fetch: this.fetch
    });
  }
  /**
   * Select a schema to query or perform an function (rpc) call.
   *
   * The schema needs to be on the list of exposed schemas inside Supabase.
   *
   * @param schema - The schema to query
   */
  schema(e) {
    return new Ma(this.url, {
      headers: this.headers,
      schema: e,
      fetch: this.fetch
    });
  }
  /**
   * Perform a function call.
   *
   * @param fn - The function name to call
   * @param args - The arguments to pass to the function call
   * @param options - Named parameters
   * @param options.head - When set to `true`, `data` will not be returned.
   * Useful if you only need the count.
   * @param options.get - When set to `true`, the function will be called with
   * read-only access mode.
   * @param options.count - Count algorithm to use to count rows returned by the
   * function. Only applicable for [set-returning
   * functions](https://www.postgresql.org/docs/current/functions-srf.html).
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  rpc(e, s = {}, { head: n = !1, get: r = !1, count: o } = {}) {
    var a;
    let i;
    const l = new URL(`${this.url}/rpc/${e}`);
    let c;
    n || r ? (i = n ? "HEAD" : "GET", Object.entries(s).filter(([d, f]) => f !== void 0).map(([d, f]) => [d, Array.isArray(f) ? `{${f.join(",")}}` : `${f}`]).forEach(([d, f]) => {
      l.searchParams.append(d, f);
    })) : (i = "POST", c = s);
    const u = new Headers(this.headers);
    return o && u.set("Prefer", `count=${o}`), new df.default({
      method: i,
      url: l,
      headers: u,
      schema: this.schemaName,
      body: c,
      fetch: (a = this.fetch) !== null && a !== void 0 ? a : fetch
    });
  }
};
ur.default = hf;
var zt = Te && Te.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(fe, "__esModule", { value: !0 });
fe.PostgrestError = fe.PostgrestBuilder = fe.PostgrestTransformBuilder = fe.PostgrestFilterBuilder = fe.PostgrestQueryBuilder = fe.PostgrestClient = void 0;
const Ua = zt(ur);
fe.PostgrestClient = Ua.default;
const Da = zt(Ys);
fe.PostgrestQueryBuilder = Da.default;
const Ba = zt(fs);
fe.PostgrestFilterBuilder = Ba.default;
const Fa = zt(Xs);
fe.PostgrestTransformBuilder = Fa.default;
const za = zt(Zs);
fe.PostgrestBuilder = za.default;
const Va = zt(Qs);
fe.PostgrestError = Va.default;
var ff = fe.default = {
  PostgrestClient: Ua.default,
  PostgrestQueryBuilder: Da.default,
  PostgrestFilterBuilder: Ba.default,
  PostgrestTransformBuilder: Fa.default,
  PostgrestBuilder: za.default,
  PostgrestError: Va.default
};
const {
  PostgrestClient: pf,
  PostgrestQueryBuilder: Jv,
  PostgrestFilterBuilder: Yv,
  PostgrestTransformBuilder: Xv,
  PostgrestBuilder: Zv,
  PostgrestError: Qv
} = ff;
class vf {
  static detectEnvironment() {
    var e;
    if (typeof WebSocket < "u")
      return { type: "native", constructor: WebSocket };
    if (typeof globalThis < "u" && typeof globalThis.WebSocket < "u")
      return { type: "native", constructor: globalThis.WebSocket };
    if (typeof global < "u" && typeof global.WebSocket < "u")
      return { type: "native", constructor: global.WebSocket };
    if (typeof globalThis < "u" && typeof globalThis.WebSocketPair < "u" && typeof globalThis.WebSocket > "u")
      return {
        type: "cloudflare",
        error: "Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",
        workaround: "Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."
      };
    if (typeof globalThis < "u" && globalThis.EdgeRuntime || typeof navigator < "u" && (!((e = navigator.userAgent) === null || e === void 0) && e.includes("Vercel-Edge")))
      return {
        type: "unsupported",
        error: "Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",
        workaround: "Use serverless functions or a different deployment target for WebSocket functionality."
      };
    if (typeof process < "u" && process.versions && process.versions.node) {
      const s = parseInt(process.versions.node.split(".")[0]);
      return s >= 22 ? typeof globalThis.WebSocket < "u" ? { type: "native", constructor: globalThis.WebSocket } : {
        type: "unsupported",
        error: `Node.js ${s} detected but native WebSocket not found.`,
        workaround: "Provide a WebSocket implementation via the transport option."
      } : {
        type: "unsupported",
        error: `Node.js ${s} detected without native WebSocket support.`,
        workaround: `For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`
      };
    }
    return {
      type: "unsupported",
      error: "Unknown JavaScript runtime without WebSocket support.",
      workaround: "Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."
    };
  }
  static getWebSocketConstructor() {
    const e = this.detectEnvironment();
    if (e.constructor)
      return e.constructor;
    let s = e.error || "WebSocket not supported in this environment.";
    throw e.workaround && (s += `

Suggested solution: ${e.workaround}`), new Error(s);
  }
  static createWebSocket(e, s) {
    const n = this.getWebSocketConstructor();
    return new n(e, s);
  }
  static isWebSocketSupported() {
    try {
      const e = this.detectEnvironment();
      return e.type === "native" || e.type === "ws";
    } catch {
      return !1;
    }
  }
}
const gf = "2.15.4", mf = `realtime-js/${gf}`, yf = "1.0.0", Pn = 1e4, _f = 1e3, bf = 100;
var ts;
(function(t) {
  t[t.connecting = 0] = "connecting", t[t.open = 1] = "open", t[t.closing = 2] = "closing", t[t.closed = 3] = "closed";
})(ts || (ts = {}));
var se;
(function(t) {
  t.closed = "closed", t.errored = "errored", t.joined = "joined", t.joining = "joining", t.leaving = "leaving";
})(se || (se = {}));
var Ae;
(function(t) {
  t.close = "phx_close", t.error = "phx_error", t.join = "phx_join", t.reply = "phx_reply", t.leave = "phx_leave", t.access_token = "access_token";
})(Ae || (Ae = {}));
var $n;
(function(t) {
  t.websocket = "websocket";
})($n || ($n = {}));
var ht;
(function(t) {
  t.Connecting = "connecting", t.Open = "open", t.Closing = "closing", t.Closed = "closed";
})(ht || (ht = {}));
class wf {
  constructor() {
    this.HEADER_LENGTH = 1;
  }
  decode(e, s) {
    return e.constructor === ArrayBuffer ? s(this._binaryDecode(e)) : s(typeof e == "string" ? JSON.parse(e) : {});
  }
  _binaryDecode(e) {
    const s = new DataView(e), n = new TextDecoder();
    return this._decodeBroadcast(e, s, n);
  }
  _decodeBroadcast(e, s, n) {
    const r = s.getUint8(1), o = s.getUint8(2);
    let a = this.HEADER_LENGTH + 2;
    const i = n.decode(e.slice(a, a + r));
    a = a + r;
    const l = n.decode(e.slice(a, a + o));
    a = a + o;
    const c = JSON.parse(n.decode(e.slice(a, e.byteLength)));
    return { ref: null, topic: i, event: l, payload: c };
  }
}
class Wa {
  constructor(e, s) {
    this.callback = e, this.timerCalc = s, this.timer = void 0, this.tries = 0, this.callback = e, this.timerCalc = s;
  }
  reset() {
    this.tries = 0, clearTimeout(this.timer), this.timer = void 0;
  }
  // Cancels any previous scheduleTimeout and schedules callback
  scheduleTimeout() {
    clearTimeout(this.timer), this.timer = setTimeout(() => {
      this.tries = this.tries + 1, this.callback();
    }, this.timerCalc(this.tries + 1));
  }
}
var Y;
(function(t) {
  t.abstime = "abstime", t.bool = "bool", t.date = "date", t.daterange = "daterange", t.float4 = "float4", t.float8 = "float8", t.int2 = "int2", t.int4 = "int4", t.int4range = "int4range", t.int8 = "int8", t.int8range = "int8range", t.json = "json", t.jsonb = "jsonb", t.money = "money", t.numeric = "numeric", t.oid = "oid", t.reltime = "reltime", t.text = "text", t.time = "time", t.timestamp = "timestamp", t.timestamptz = "timestamptz", t.timetz = "timetz", t.tsrange = "tsrange", t.tstzrange = "tstzrange";
})(Y || (Y = {}));
const vo = (t, e, s = {}) => {
  var n;
  const r = (n = s.skipTypes) !== null && n !== void 0 ? n : [];
  return Object.keys(e).reduce((o, a) => (o[a] = kf(a, t, e, r), o), {});
}, kf = (t, e, s, n) => {
  const r = e.find((i) => i.name === t), o = r == null ? void 0 : r.type, a = s[t];
  return o && !n.includes(o) ? Ha(o, a) : xn(a);
}, Ha = (t, e) => {
  if (t.charAt(0) === "_") {
    const s = t.slice(1, t.length);
    return Cf(e, s);
  }
  switch (t) {
    case Y.bool:
      return Sf(e);
    case Y.float4:
    case Y.float8:
    case Y.int2:
    case Y.int4:
    case Y.int8:
    case Y.numeric:
    case Y.oid:
      return Ef(e);
    case Y.json:
    case Y.jsonb:
      return Tf(e);
    case Y.timestamp:
      return Of(e);
    case Y.abstime:
    case Y.date:
    case Y.daterange:
    case Y.int4range:
    case Y.int8range:
    case Y.money:
    case Y.reltime:
    case Y.text:
    case Y.time:
    case Y.timestamptz:
    case Y.timetz:
    case Y.tsrange:
    case Y.tstzrange:
      return xn(e);
    default:
      return xn(e);
  }
}, xn = (t) => t, Sf = (t) => {
  switch (t) {
    case "t":
      return !0;
    case "f":
      return !1;
    default:
      return t;
  }
}, Ef = (t) => {
  if (typeof t == "string") {
    const e = parseFloat(t);
    if (!Number.isNaN(e))
      return e;
  }
  return t;
}, Tf = (t) => {
  if (typeof t == "string")
    try {
      return JSON.parse(t);
    } catch (e) {
      return console.log(`JSON parse error: ${e}`), t;
    }
  return t;
}, Cf = (t, e) => {
  if (typeof t != "string")
    return t;
  const s = t.length - 1, n = t[s];
  if (t[0] === "{" && n === "}") {
    let o;
    const a = t.slice(1, s);
    try {
      o = JSON.parse("[" + a + "]");
    } catch {
      o = a ? a.split(",") : [];
    }
    return o.map((i) => Ha(e, i));
  }
  return t;
}, Of = (t) => typeof t == "string" ? t.replace(" ", "T") : t, qa = (t) => {
  let e = t;
  return e = e.replace(/^ws/i, "http"), e = e.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, ""), e.replace(/\/+$/, "") + "/api/broadcast";
};
class fn {
  /**
   * Initializes the Push
   *
   * @param channel The Channel
   * @param event The event, for example `"phx_join"`
   * @param payload The payload, for example `{user_id: 123}`
   * @param timeout The push timeout in milliseconds
   */
  constructor(e, s, n = {}, r = Pn) {
    this.channel = e, this.event = s, this.payload = n, this.timeout = r, this.sent = !1, this.timeoutTimer = void 0, this.ref = "", this.receivedResp = null, this.recHooks = [], this.refEvent = null;
  }
  resend(e) {
    this.timeout = e, this._cancelRefEvent(), this.ref = "", this.refEvent = null, this.receivedResp = null, this.sent = !1, this.send();
  }
  send() {
    this._hasReceived("timeout") || (this.startTimeout(), this.sent = !0, this.channel.socket.push({
      topic: this.channel.topic,
      event: this.event,
      payload: this.payload,
      ref: this.ref,
      join_ref: this.channel._joinRef()
    }));
  }
  updatePayload(e) {
    this.payload = Object.assign(Object.assign({}, this.payload), e);
  }
  receive(e, s) {
    var n;
    return this._hasReceived(e) && s((n = this.receivedResp) === null || n === void 0 ? void 0 : n.response), this.recHooks.push({ status: e, callback: s }), this;
  }
  startTimeout() {
    if (this.timeoutTimer)
      return;
    this.ref = this.channel.socket._makeRef(), this.refEvent = this.channel._replyEventName(this.ref);
    const e = (s) => {
      this._cancelRefEvent(), this._cancelTimeout(), this.receivedResp = s, this._matchReceive(s);
    };
    this.channel._on(this.refEvent, {}, e), this.timeoutTimer = setTimeout(() => {
      this.trigger("timeout", {});
    }, this.timeout);
  }
  trigger(e, s) {
    this.refEvent && this.channel._trigger(this.refEvent, { status: e, response: s });
  }
  destroy() {
    this._cancelRefEvent(), this._cancelTimeout();
  }
  _cancelRefEvent() {
    this.refEvent && this.channel._off(this.refEvent, {});
  }
  _cancelTimeout() {
    clearTimeout(this.timeoutTimer), this.timeoutTimer = void 0;
  }
  _matchReceive({ status: e, response: s }) {
    this.recHooks.filter((n) => n.status === e).forEach((n) => n.callback(s));
  }
  _hasReceived(e) {
    return this.receivedResp && this.receivedResp.status === e;
  }
}
var go;
(function(t) {
  t.SYNC = "sync", t.JOIN = "join", t.LEAVE = "leave";
})(go || (go = {}));
class ss {
  /**
   * Initializes the Presence.
   *
   * @param channel - The RealtimeChannel
   * @param opts - The options,
   *        for example `{events: {state: 'state', diff: 'diff'}}`
   */
  constructor(e, s) {
    this.channel = e, this.state = {}, this.pendingDiffs = [], this.joinRef = null, this.enabled = !1, this.caller = {
      onJoin: () => {
      },
      onLeave: () => {
      },
      onSync: () => {
      }
    };
    const n = (s == null ? void 0 : s.events) || {
      state: "presence_state",
      diff: "presence_diff"
    };
    this.channel._on(n.state, {}, (r) => {
      const { onJoin: o, onLeave: a, onSync: i } = this.caller;
      this.joinRef = this.channel._joinRef(), this.state = ss.syncState(this.state, r, o, a), this.pendingDiffs.forEach((l) => {
        this.state = ss.syncDiff(this.state, l, o, a);
      }), this.pendingDiffs = [], i();
    }), this.channel._on(n.diff, {}, (r) => {
      const { onJoin: o, onLeave: a, onSync: i } = this.caller;
      this.inPendingSyncState() ? this.pendingDiffs.push(r) : (this.state = ss.syncDiff(this.state, r, o, a), i());
    }), this.onJoin((r, o, a) => {
      this.channel._trigger("presence", {
        event: "join",
        key: r,
        currentPresences: o,
        newPresences: a
      });
    }), this.onLeave((r, o, a) => {
      this.channel._trigger("presence", {
        event: "leave",
        key: r,
        currentPresences: o,
        leftPresences: a
      });
    }), this.onSync(() => {
      this.channel._trigger("presence", { event: "sync" });
    });
  }
  /**
   * Used to sync the list of presences on the server with the
   * client's state.
   *
   * An optional `onJoin` and `onLeave` callback can be provided to
   * react to changes in the client's local presences across
   * disconnects and reconnects with the server.
   *
   * @internal
   */
  static syncState(e, s, n, r) {
    const o = this.cloneDeep(e), a = this.transformState(s), i = {}, l = {};
    return this.map(o, (c, u) => {
      a[c] || (l[c] = u);
    }), this.map(a, (c, u) => {
      const d = o[c];
      if (d) {
        const f = u.map((b) => b.presence_ref), p = d.map((b) => b.presence_ref), h = u.filter((b) => p.indexOf(b.presence_ref) < 0), g = d.filter((b) => f.indexOf(b.presence_ref) < 0);
        h.length > 0 && (i[c] = h), g.length > 0 && (l[c] = g);
      } else
        i[c] = u;
    }), this.syncDiff(o, { joins: i, leaves: l }, n, r);
  }
  /**
   * Used to sync a diff of presence join and leave events from the
   * server, as they happen.
   *
   * Like `syncState`, `syncDiff` accepts optional `onJoin` and
   * `onLeave` callbacks to react to a user joining or leaving from a
   * device.
   *
   * @internal
   */
  static syncDiff(e, s, n, r) {
    const { joins: o, leaves: a } = {
      joins: this.transformState(s.joins),
      leaves: this.transformState(s.leaves)
    };
    return n || (n = () => {
    }), r || (r = () => {
    }), this.map(o, (i, l) => {
      var c;
      const u = (c = e[i]) !== null && c !== void 0 ? c : [];
      if (e[i] = this.cloneDeep(l), u.length > 0) {
        const d = e[i].map((p) => p.presence_ref), f = u.filter((p) => d.indexOf(p.presence_ref) < 0);
        e[i].unshift(...f);
      }
      n(i, u, l);
    }), this.map(a, (i, l) => {
      let c = e[i];
      if (!c)
        return;
      const u = l.map((d) => d.presence_ref);
      c = c.filter((d) => u.indexOf(d.presence_ref) < 0), e[i] = c, r(i, c, l), c.length === 0 && delete e[i];
    }), e;
  }
  /** @internal */
  static map(e, s) {
    return Object.getOwnPropertyNames(e).map((n) => s(n, e[n]));
  }
  /**
   * Remove 'metas' key
   * Change 'phx_ref' to 'presence_ref'
   * Remove 'phx_ref' and 'phx_ref_prev'
   *
   * @example
   * // returns {
   *  abc123: [
   *    { presence_ref: '2', user_id: 1 },
   *    { presence_ref: '3', user_id: 2 }
   *  ]
   * }
   * RealtimePresence.transformState({
   *  abc123: {
   *    metas: [
   *      { phx_ref: '2', phx_ref_prev: '1' user_id: 1 },
   *      { phx_ref: '3', user_id: 2 }
   *    ]
   *  }
   * })
   *
   * @internal
   */
  static transformState(e) {
    return e = this.cloneDeep(e), Object.getOwnPropertyNames(e).reduce((s, n) => {
      const r = e[n];
      return "metas" in r ? s[n] = r.metas.map((o) => (o.presence_ref = o.phx_ref, delete o.phx_ref, delete o.phx_ref_prev, o)) : s[n] = r, s;
    }, {});
  }
  /** @internal */
  static cloneDeep(e) {
    return JSON.parse(JSON.stringify(e));
  }
  /** @internal */
  onJoin(e) {
    this.caller.onJoin = e;
  }
  /** @internal */
  onLeave(e) {
    this.caller.onLeave = e;
  }
  /** @internal */
  onSync(e) {
    this.caller.onSync = e;
  }
  /** @internal */
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel._joinRef();
  }
}
var mo;
(function(t) {
  t.ALL = "*", t.INSERT = "INSERT", t.UPDATE = "UPDATE", t.DELETE = "DELETE";
})(mo || (mo = {}));
var ns;
(function(t) {
  t.BROADCAST = "broadcast", t.PRESENCE = "presence", t.POSTGRES_CHANGES = "postgres_changes", t.SYSTEM = "system";
})(ns || (ns = {}));
var Fe;
(function(t) {
  t.SUBSCRIBED = "SUBSCRIBED", t.TIMED_OUT = "TIMED_OUT", t.CLOSED = "CLOSED", t.CHANNEL_ERROR = "CHANNEL_ERROR";
})(Fe || (Fe = {}));
class dr {
  constructor(e, s = { config: {} }, n) {
    this.topic = e, this.params = s, this.socket = n, this.bindings = {}, this.state = se.closed, this.joinedOnce = !1, this.pushBuffer = [], this.subTopic = e.replace(/^realtime:/i, ""), this.params.config = Object.assign({
      broadcast: { ack: !1, self: !1 },
      presence: { key: "", enabled: !1 },
      private: !1
    }, s.config), this.timeout = this.socket.timeout, this.joinPush = new fn(this, Ae.join, this.params, this.timeout), this.rejoinTimer = new Wa(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs), this.joinPush.receive("ok", () => {
      this.state = se.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((r) => r.send()), this.pushBuffer = [];
    }), this._onClose(() => {
      this.rejoinTimer.reset(), this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`), this.state = se.closed, this.socket._remove(this);
    }), this._onError((r) => {
      this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, r), this.state = se.errored, this.rejoinTimer.scheduleTimeout());
    }), this.joinPush.receive("timeout", () => {
      this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), this.state = se.errored, this.rejoinTimer.scheduleTimeout());
    }), this.joinPush.receive("error", (r) => {
      this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, r), this.state = se.errored, this.rejoinTimer.scheduleTimeout());
    }), this._on(Ae.reply, {}, (r, o) => {
      this._trigger(this._replyEventName(o), r);
    }), this.presence = new ss(this), this.broadcastEndpointURL = qa(this.socket.endPoint), this.private = this.params.config.private || !1;
  }
  /** Subscribe registers your client with the server */
  subscribe(e, s = this.timeout) {
    var n, r, o;
    if (this.socket.isConnected() || this.socket.connect(), this.state == se.closed) {
      const { config: { broadcast: a, presence: i, private: l } } = this.params, c = (r = (n = this.bindings.postgres_changes) === null || n === void 0 ? void 0 : n.map((p) => p.filter)) !== null && r !== void 0 ? r : [], u = !!this.bindings[ns.PRESENCE] && this.bindings[ns.PRESENCE].length > 0 || ((o = this.params.config.presence) === null || o === void 0 ? void 0 : o.enabled) === !0, d = {}, f = {
        broadcast: a,
        presence: Object.assign(Object.assign({}, i), { enabled: u }),
        postgres_changes: c,
        private: l
      };
      this.socket.accessTokenValue && (d.access_token = this.socket.accessTokenValue), this._onError((p) => e == null ? void 0 : e(Fe.CHANNEL_ERROR, p)), this._onClose(() => e == null ? void 0 : e(Fe.CLOSED)), this.updateJoinPayload(Object.assign({ config: f }, d)), this.joinedOnce = !0, this._rejoin(s), this.joinPush.receive("ok", async ({ postgres_changes: p }) => {
        var h;
        if (this.socket.setAuth(), p === void 0) {
          e == null || e(Fe.SUBSCRIBED);
          return;
        } else {
          const g = this.bindings.postgres_changes, b = (h = g == null ? void 0 : g.length) !== null && h !== void 0 ? h : 0, v = [];
          for (let k = 0; k < b; k++) {
            const m = g[k], { filter: { event: A, schema: L, table: j, filter: P } } = m, H = p && p[k];
            if (H && H.event === A && H.schema === L && H.table === j && H.filter === P)
              v.push(Object.assign(Object.assign({}, m), { id: H.id }));
            else {
              this.unsubscribe(), this.state = se.errored, e == null || e(Fe.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
              return;
            }
          }
          this.bindings.postgres_changes = v, e && e(Fe.SUBSCRIBED);
          return;
        }
      }).receive("error", (p) => {
        this.state = se.errored, e == null || e(Fe.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(p).join(", ") || "error")));
      }).receive("timeout", () => {
        e == null || e(Fe.TIMED_OUT);
      });
    }
    return this;
  }
  presenceState() {
    return this.presence.state;
  }
  async track(e, s = {}) {
    return await this.send({
      type: "presence",
      event: "track",
      payload: e
    }, s.timeout || this.timeout);
  }
  async untrack(e = {}) {
    return await this.send({
      type: "presence",
      event: "untrack"
    }, e);
  }
  on(e, s, n) {
    return this.state === se.joined && e === ns.PRESENCE && (this.socket.log("channel", `resubscribe to ${this.topic} due to change in presence callbacks on joined channel`), this.unsubscribe().then(() => this.subscribe())), this._on(e, s, n);
  }
  /**
   * Sends a message into the channel.
   *
   * @param args Arguments to send to channel
   * @param args.type The type of event to send
   * @param args.event The name of the event being sent
   * @param args.payload Payload to be sent
   * @param opts Options to be used during the send process
   */
  async send(e, s = {}) {
    var n, r;
    if (!this._canPush() && e.type === "broadcast") {
      const { event: o, payload: a } = e, l = {
        method: "POST",
        headers: {
          Authorization: this.socket.accessTokenValue ? `Bearer ${this.socket.accessTokenValue}` : "",
          apikey: this.socket.apiKey ? this.socket.apiKey : "",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: o,
              payload: a,
              private: this.private
            }
          ]
        })
      };
      try {
        const c = await this._fetchWithTimeout(this.broadcastEndpointURL, l, (n = s.timeout) !== null && n !== void 0 ? n : this.timeout);
        return await ((r = c.body) === null || r === void 0 ? void 0 : r.cancel()), c.ok ? "ok" : "error";
      } catch (c) {
        return c.name === "AbortError" ? "timed out" : "error";
      }
    } else
      return new Promise((o) => {
        var a, i, l;
        const c = this._push(e.type, e, s.timeout || this.timeout);
        e.type === "broadcast" && !(!((l = (i = (a = this.params) === null || a === void 0 ? void 0 : a.config) === null || i === void 0 ? void 0 : i.broadcast) === null || l === void 0) && l.ack) && o("ok"), c.receive("ok", () => o("ok")), c.receive("error", () => o("error")), c.receive("timeout", () => o("timed out"));
      });
  }
  updateJoinPayload(e) {
    this.joinPush.updatePayload(e);
  }
  /**
   * Leaves the channel.
   *
   * Unsubscribes from server events, and instructs channel to terminate on server.
   * Triggers onClose() hooks.
   *
   * To receive leave acknowledgements, use the a `receive` hook to bind to the server ack, ie:
   * channel.unsubscribe().receive("ok", () => alert("left!") )
   */
  unsubscribe(e = this.timeout) {
    this.state = se.leaving;
    const s = () => {
      this.socket.log("channel", `leave ${this.topic}`), this._trigger(Ae.close, "leave", this._joinRef());
    };
    this.joinPush.destroy();
    let n = null;
    return new Promise((r) => {
      n = new fn(this, Ae.leave, {}, e), n.receive("ok", () => {
        s(), r("ok");
      }).receive("timeout", () => {
        s(), r("timed out");
      }).receive("error", () => {
        r("error");
      }), n.send(), this._canPush() || n.trigger("ok", {});
    }).finally(() => {
      n == null || n.destroy();
    });
  }
  /**
   * Teardown the channel.
   *
   * Destroys and stops related timers.
   */
  teardown() {
    this.pushBuffer.forEach((e) => e.destroy()), this.pushBuffer = [], this.rejoinTimer.reset(), this.joinPush.destroy(), this.state = se.closed, this.bindings = {};
  }
  /** @internal */
  async _fetchWithTimeout(e, s, n) {
    const r = new AbortController(), o = setTimeout(() => r.abort(), n), a = await this.socket.fetch(e, Object.assign(Object.assign({}, s), { signal: r.signal }));
    return clearTimeout(o), a;
  }
  /** @internal */
  _push(e, s, n = this.timeout) {
    if (!this.joinedOnce)
      throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    let r = new fn(this, e, s, n);
    return this._canPush() ? r.send() : this._addToPushBuffer(r), r;
  }
  /** @internal */
  _addToPushBuffer(e) {
    if (e.startTimeout(), this.pushBuffer.push(e), this.pushBuffer.length > bf) {
      const s = this.pushBuffer.shift();
      s && (s.destroy(), this.socket.log("channel", `discarded push due to buffer overflow: ${s.event}`, s.payload));
    }
  }
  /**
   * Overridable message hook
   *
   * Receives all events for specialized message handling before dispatching to the channel callbacks.
   * Must return the payload, modified or unmodified.
   *
   * @internal
   */
  _onMessage(e, s, n) {
    return s;
  }
  /** @internal */
  _isMember(e) {
    return this.topic === e;
  }
  /** @internal */
  _joinRef() {
    return this.joinPush.ref;
  }
  /** @internal */
  _trigger(e, s, n) {
    var r, o;
    const a = e.toLocaleLowerCase(), { close: i, error: l, leave: c, join: u } = Ae;
    if (n && [i, l, c, u].indexOf(a) >= 0 && n !== this._joinRef())
      return;
    let f = this._onMessage(a, s, n);
    if (s && !f)
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    ["insert", "update", "delete"].includes(a) ? (r = this.bindings.postgres_changes) === null || r === void 0 || r.filter((p) => {
      var h, g, b;
      return ((h = p.filter) === null || h === void 0 ? void 0 : h.event) === "*" || ((b = (g = p.filter) === null || g === void 0 ? void 0 : g.event) === null || b === void 0 ? void 0 : b.toLocaleLowerCase()) === a;
    }).map((p) => p.callback(f, n)) : (o = this.bindings[a]) === null || o === void 0 || o.filter((p) => {
      var h, g, b, v, k, m;
      if (["broadcast", "presence", "postgres_changes"].includes(a))
        if ("id" in p) {
          const A = p.id, L = (h = p.filter) === null || h === void 0 ? void 0 : h.event;
          return A && ((g = s.ids) === null || g === void 0 ? void 0 : g.includes(A)) && (L === "*" || (L == null ? void 0 : L.toLocaleLowerCase()) === ((b = s.data) === null || b === void 0 ? void 0 : b.type.toLocaleLowerCase()));
        } else {
          const A = (k = (v = p == null ? void 0 : p.filter) === null || v === void 0 ? void 0 : v.event) === null || k === void 0 ? void 0 : k.toLocaleLowerCase();
          return A === "*" || A === ((m = s == null ? void 0 : s.event) === null || m === void 0 ? void 0 : m.toLocaleLowerCase());
        }
      else
        return p.type.toLocaleLowerCase() === a;
    }).map((p) => {
      if (typeof f == "object" && "ids" in f) {
        const h = f.data, { schema: g, table: b, commit_timestamp: v, type: k, errors: m } = h;
        f = Object.assign(Object.assign({}, {
          schema: g,
          table: b,
          commit_timestamp: v,
          eventType: k,
          new: {},
          old: {},
          errors: m
        }), this._getPayloadRecords(h));
      }
      p.callback(f, n);
    });
  }
  /** @internal */
  _isClosed() {
    return this.state === se.closed;
  }
  /** @internal */
  _isJoined() {
    return this.state === se.joined;
  }
  /** @internal */
  _isJoining() {
    return this.state === se.joining;
  }
  /** @internal */
  _isLeaving() {
    return this.state === se.leaving;
  }
  /** @internal */
  _replyEventName(e) {
    return `chan_reply_${e}`;
  }
  /** @internal */
  _on(e, s, n) {
    const r = e.toLocaleLowerCase(), o = {
      type: r,
      filter: s,
      callback: n
    };
    return this.bindings[r] ? this.bindings[r].push(o) : this.bindings[r] = [o], this;
  }
  /** @internal */
  _off(e, s) {
    const n = e.toLocaleLowerCase();
    return this.bindings[n] && (this.bindings[n] = this.bindings[n].filter((r) => {
      var o;
      return !(((o = r.type) === null || o === void 0 ? void 0 : o.toLocaleLowerCase()) === n && dr.isEqual(r.filter, s));
    })), this;
  }
  /** @internal */
  static isEqual(e, s) {
    if (Object.keys(e).length !== Object.keys(s).length)
      return !1;
    for (const n in e)
      if (e[n] !== s[n])
        return !1;
    return !0;
  }
  /** @internal */
  _rejoinUntilConnected() {
    this.rejoinTimer.scheduleTimeout(), this.socket.isConnected() && this._rejoin();
  }
  /**
   * Registers a callback that will be executed when the channel closes.
   *
   * @internal
   */
  _onClose(e) {
    this._on(Ae.close, {}, e);
  }
  /**
   * Registers a callback that will be executed when the channel encounteres an error.
   *
   * @internal
   */
  _onError(e) {
    this._on(Ae.error, {}, (s) => e(s));
  }
  /**
   * Returns `true` if the socket is connected and the channel has been joined.
   *
   * @internal
   */
  _canPush() {
    return this.socket.isConnected() && this._isJoined();
  }
  /** @internal */
  _rejoin(e = this.timeout) {
    this._isLeaving() || (this.socket._leaveOpenTopic(this.topic), this.state = se.joining, this.joinPush.resend(e));
  }
  /** @internal */
  _getPayloadRecords(e) {
    const s = {
      new: {},
      old: {}
    };
    return (e.type === "INSERT" || e.type === "UPDATE") && (s.new = vo(e.columns, e.record)), (e.type === "UPDATE" || e.type === "DELETE") && (s.old = vo(e.columns, e.old_record)), s;
  }
}
const pn = () => {
}, Es = {
  HEARTBEAT_INTERVAL: 25e3,
  RECONNECT_DELAY: 10,
  HEARTBEAT_TIMEOUT_FALLBACK: 100
}, If = [1e3, 2e3, 5e3, 1e4], Af = 1e4, Pf = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class $f {
  /**
   * Initializes the Socket.
   *
   * @param endPoint The string WebSocket endpoint, ie, "ws://example.com/socket", "wss://example.com", "/socket" (inherited host & protocol)
   * @param httpEndpoint The string HTTP endpoint, ie, "https://example.com", "/" (inherited host & protocol)
   * @param options.transport The Websocket Transport, for example WebSocket. This can be a custom implementation
   * @param options.timeout The default timeout in milliseconds to trigger push timeouts.
   * @param options.params The optional params to pass when connecting.
   * @param options.headers Deprecated: headers cannot be set on websocket connections and this option will be removed in the future.
   * @param options.heartbeatIntervalMs The millisec interval to send a heartbeat message.
   * @param options.heartbeatCallback The optional function to handle heartbeat status.
   * @param options.logger The optional function for specialized logging, ie: logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }
   * @param options.logLevel Sets the log level for Realtime
   * @param options.encode The function to encode outgoing messages. Defaults to JSON: (payload, callback) => callback(JSON.stringify(payload))
   * @param options.decode The function to decode incoming messages. Defaults to Serializer's decode.
   * @param options.reconnectAfterMs he optional function that returns the millsec reconnect interval. Defaults to stepped backoff off.
   * @param options.worker Use Web Worker to set a side flow. Defaults to false.
   * @param options.workerUrl The URL of the worker script. Defaults to https://realtime.supabase.com/worker.js that includes a heartbeat event call to keep the connection alive.
   */
  constructor(e, s) {
    var n;
    if (this.accessTokenValue = null, this.apiKey = null, this.channels = new Array(), this.endPoint = "", this.httpEndpoint = "", this.headers = {}, this.params = {}, this.timeout = Pn, this.transport = null, this.heartbeatIntervalMs = Es.HEARTBEAT_INTERVAL, this.heartbeatTimer = void 0, this.pendingHeartbeatRef = null, this.heartbeatCallback = pn, this.ref = 0, this.reconnectTimer = null, this.logger = pn, this.conn = null, this.sendBuffer = [], this.serializer = new wf(), this.stateChangeCallbacks = {
      open: [],
      close: [],
      error: [],
      message: []
    }, this.accessToken = null, this._connectionState = "disconnected", this._wasManualDisconnect = !1, this._authPromise = null, this._resolveFetch = (r) => {
      let o;
      return r ? o = r : typeof fetch > "u" ? o = (...a) => Promise.resolve().then(() => Ft).then(({ default: i }) => i(...a)).catch((i) => {
        throw new Error(`Failed to load @supabase/node-fetch: ${i.message}. This is required for HTTP requests in Node.js environments without native fetch.`);
      }) : o = fetch, (...a) => o(...a);
    }, !(!((n = s == null ? void 0 : s.params) === null || n === void 0) && n.apikey))
      throw new Error("API key is required to connect to Realtime");
    this.apiKey = s.params.apikey, this.endPoint = `${e}/${$n.websocket}`, this.httpEndpoint = qa(e), this._initializeOptions(s), this._setupReconnectionTimer(), this.fetch = this._resolveFetch(s == null ? void 0 : s.fetch);
  }
  /**
   * Connects the socket, unless already connected.
   */
  connect() {
    if (!(this.isConnecting() || this.isDisconnecting() || this.conn !== null && this.isConnected())) {
      if (this._setConnectionState("connecting"), this._setAuthSafely("connect"), this.transport)
        this.conn = new this.transport(this.endpointURL());
      else
        try {
          this.conn = vf.createWebSocket(this.endpointURL());
        } catch (e) {
          this._setConnectionState("disconnected");
          const s = e.message;
          throw s.includes("Node.js") ? new Error(`${s}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`) : new Error(`WebSocket not available: ${s}`);
        }
      this._setupConnectionHandlers();
    }
  }
  /**
   * Returns the URL of the websocket.
   * @returns string The URL of the websocket.
   */
  endpointURL() {
    return this._appendParams(this.endPoint, Object.assign({}, this.params, { vsn: yf }));
  }
  /**
   * Disconnects the socket.
   *
   * @param code A numeric status code to send on disconnect.
   * @param reason A custom reason for the disconnect.
   */
  disconnect(e, s) {
    if (!this.isDisconnecting())
      if (this._setConnectionState("disconnecting", !0), this.conn) {
        const n = setTimeout(() => {
          this._setConnectionState("disconnected");
        }, 100);
        this.conn.onclose = () => {
          clearTimeout(n), this._setConnectionState("disconnected");
        }, e ? this.conn.close(e, s ?? "") : this.conn.close(), this._teardownConnection();
      } else
        this._setConnectionState("disconnected");
  }
  /**
   * Returns all created channels
   */
  getChannels() {
    return this.channels;
  }
  /**
   * Unsubscribes and removes a single channel
   * @param channel A RealtimeChannel instance
   */
  async removeChannel(e) {
    const s = await e.unsubscribe();
    return this.channels.length === 0 && this.disconnect(), s;
  }
  /**
   * Unsubscribes and removes all channels
   */
  async removeAllChannels() {
    const e = await Promise.all(this.channels.map((s) => s.unsubscribe()));
    return this.channels = [], this.disconnect(), e;
  }
  /**
   * Logs the message.
   *
   * For customized logging, `this.logger` can be overridden.
   */
  log(e, s, n) {
    this.logger(e, s, n);
  }
  /**
   * Returns the current state of the socket.
   */
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case ts.connecting:
        return ht.Connecting;
      case ts.open:
        return ht.Open;
      case ts.closing:
        return ht.Closing;
      default:
        return ht.Closed;
    }
  }
  /**
   * Returns `true` is the connection is open.
   */
  isConnected() {
    return this.connectionState() === ht.Open;
  }
  /**
   * Returns `true` if the connection is currently connecting.
   */
  isConnecting() {
    return this._connectionState === "connecting";
  }
  /**
   * Returns `true` if the connection is currently disconnecting.
   */
  isDisconnecting() {
    return this._connectionState === "disconnecting";
  }
  channel(e, s = { config: {} }) {
    const n = `realtime:${e}`, r = this.getChannels().find((o) => o.topic === n);
    if (r)
      return r;
    {
      const o = new dr(`realtime:${e}`, s, this);
      return this.channels.push(o), o;
    }
  }
  /**
   * Push out a message if the socket is connected.
   *
   * If the socket is not connected, the message gets enqueued within a local buffer, and sent out when a connection is next established.
   */
  push(e) {
    const { topic: s, event: n, payload: r, ref: o } = e, a = () => {
      this.encode(e, (i) => {
        var l;
        (l = this.conn) === null || l === void 0 || l.send(i);
      });
    };
    this.log("push", `${s} ${n} (${o})`, r), this.isConnected() ? a() : this.sendBuffer.push(a);
  }
  /**
   * Sets the JWT access token used for channel subscription authorization and Realtime RLS.
   *
   * If param is null it will use the `accessToken` callback function or the token set on the client.
   *
   * On callback used, it will set the value of the token internal to the client.
   *
   * @param token A JWT string to override the token set on the client.
   */
  async setAuth(e = null) {
    this._authPromise = this._performAuth(e);
    try {
      await this._authPromise;
    } finally {
      this._authPromise = null;
    }
  }
  /**
   * Sends a heartbeat message if the socket is connected.
   */
  async sendHeartbeat() {
    var e;
    if (!this.isConnected()) {
      try {
        this.heartbeatCallback("disconnected");
      } catch (s) {
        this.log("error", "error in heartbeat callback", s);
      }
      return;
    }
    if (this.pendingHeartbeatRef) {
      this.pendingHeartbeatRef = null, this.log("transport", "heartbeat timeout. Attempting to re-establish connection");
      try {
        this.heartbeatCallback("timeout");
      } catch (s) {
        this.log("error", "error in heartbeat callback", s);
      }
      this._wasManualDisconnect = !1, (e = this.conn) === null || e === void 0 || e.close(_f, "heartbeat timeout"), setTimeout(() => {
        var s;
        this.isConnected() || (s = this.reconnectTimer) === null || s === void 0 || s.scheduleTimeout();
      }, Es.HEARTBEAT_TIMEOUT_FALLBACK);
      return;
    }
    this.pendingHeartbeatRef = this._makeRef(), this.push({
      topic: "phoenix",
      event: "heartbeat",
      payload: {},
      ref: this.pendingHeartbeatRef
    });
    try {
      this.heartbeatCallback("sent");
    } catch (s) {
      this.log("error", "error in heartbeat callback", s);
    }
    this._setAuthSafely("heartbeat");
  }
  onHeartbeat(e) {
    this.heartbeatCallback = e;
  }
  /**
   * Flushes send buffer
   */
  flushSendBuffer() {
    this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach((e) => e()), this.sendBuffer = []);
  }
  /**
   * Return the next message ref, accounting for overflows
   *
   * @internal
   */
  _makeRef() {
    let e = this.ref + 1;
    return e === this.ref ? this.ref = 0 : this.ref = e, this.ref.toString();
  }
  /**
   * Unsubscribe from channels with the specified topic.
   *
   * @internal
   */
  _leaveOpenTopic(e) {
    let s = this.channels.find((n) => n.topic === e && (n._isJoined() || n._isJoining()));
    s && (this.log("transport", `leaving duplicate topic "${e}"`), s.unsubscribe());
  }
  /**
   * Removes a subscription from the socket.
   *
   * @param channel An open subscription.
   *
   * @internal
   */
  _remove(e) {
    this.channels = this.channels.filter((s) => s.topic !== e.topic);
  }
  /** @internal */
  _onConnMessage(e) {
    this.decode(e.data, (s) => {
      if (s.topic === "phoenix" && s.event === "phx_reply")
        try {
          this.heartbeatCallback(s.payload.status === "ok" ? "ok" : "error");
        } catch (c) {
          this.log("error", "error in heartbeat callback", c);
        }
      s.ref && s.ref === this.pendingHeartbeatRef && (this.pendingHeartbeatRef = null);
      const { topic: n, event: r, payload: o, ref: a } = s, i = a ? `(${a})` : "", l = o.status || "";
      this.log("receive", `${l} ${n} ${r} ${i}`.trim(), o), this.channels.filter((c) => c._isMember(n)).forEach((c) => c._trigger(r, o, a)), this._triggerStateCallbacks("message", s);
    });
  }
  /**
   * Clear specific timer
   * @internal
   */
  _clearTimer(e) {
    var s;
    e === "heartbeat" && this.heartbeatTimer ? (clearInterval(this.heartbeatTimer), this.heartbeatTimer = void 0) : e === "reconnect" && ((s = this.reconnectTimer) === null || s === void 0 || s.reset());
  }
  /**
   * Clear all timers
   * @internal
   */
  _clearAllTimers() {
    this._clearTimer("heartbeat"), this._clearTimer("reconnect");
  }
  /**
   * Setup connection handlers for WebSocket events
   * @internal
   */
  _setupConnectionHandlers() {
    this.conn && ("binaryType" in this.conn && (this.conn.binaryType = "arraybuffer"), this.conn.onopen = () => this._onConnOpen(), this.conn.onerror = (e) => this._onConnError(e), this.conn.onmessage = (e) => this._onConnMessage(e), this.conn.onclose = (e) => this._onConnClose(e));
  }
  /**
   * Teardown connection and cleanup resources
   * @internal
   */
  _teardownConnection() {
    this.conn && (this.conn.onopen = null, this.conn.onerror = null, this.conn.onmessage = null, this.conn.onclose = null, this.conn = null), this._clearAllTimers(), this.channels.forEach((e) => e.teardown());
  }
  /** @internal */
  _onConnOpen() {
    this._setConnectionState("connected"), this.log("transport", `connected to ${this.endpointURL()}`), this.flushSendBuffer(), this._clearTimer("reconnect"), this.worker ? this.workerRef || this._startWorkerHeartbeat() : this._startHeartbeat(), this._triggerStateCallbacks("open");
  }
  /** @internal */
  _startHeartbeat() {
    this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.heartbeatTimer = setInterval(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
  }
  /** @internal */
  _startWorkerHeartbeat() {
    this.workerUrl ? this.log("worker", `starting worker for from ${this.workerUrl}`) : this.log("worker", "starting default worker");
    const e = this._workerObjectUrl(this.workerUrl);
    this.workerRef = new Worker(e), this.workerRef.onerror = (s) => {
      this.log("worker", "worker error", s.message), this.workerRef.terminate();
    }, this.workerRef.onmessage = (s) => {
      s.data.event === "keepAlive" && this.sendHeartbeat();
    }, this.workerRef.postMessage({
      event: "start",
      interval: this.heartbeatIntervalMs
    });
  }
  /** @internal */
  _onConnClose(e) {
    var s;
    this._setConnectionState("disconnected"), this.log("transport", "close", e), this._triggerChanError(), this._clearTimer("heartbeat"), this._wasManualDisconnect || (s = this.reconnectTimer) === null || s === void 0 || s.scheduleTimeout(), this._triggerStateCallbacks("close", e);
  }
  /** @internal */
  _onConnError(e) {
    this._setConnectionState("disconnected"), this.log("transport", `${e}`), this._triggerChanError(), this._triggerStateCallbacks("error", e);
  }
  /** @internal */
  _triggerChanError() {
    this.channels.forEach((e) => e._trigger(Ae.error));
  }
  /** @internal */
  _appendParams(e, s) {
    if (Object.keys(s).length === 0)
      return e;
    const n = e.match(/\?/) ? "&" : "?", r = new URLSearchParams(s);
    return `${e}${n}${r}`;
  }
  _workerObjectUrl(e) {
    let s;
    if (e)
      s = e;
    else {
      const n = new Blob([Pf], { type: "application/javascript" });
      s = URL.createObjectURL(n);
    }
    return s;
  }
  /**
   * Set connection state with proper state management
   * @internal
   */
  _setConnectionState(e, s = !1) {
    this._connectionState = e, e === "connecting" ? this._wasManualDisconnect = !1 : e === "disconnecting" && (this._wasManualDisconnect = s);
  }
  /**
   * Perform the actual auth operation
   * @internal
   */
  async _performAuth(e = null) {
    let s;
    e ? s = e : this.accessToken ? s = await this.accessToken() : s = this.accessTokenValue, this.accessTokenValue != s && (this.accessTokenValue = s, this.channels.forEach((n) => {
      const r = {
        access_token: s,
        version: mf
      };
      s && n.updateJoinPayload(r), n.joinedOnce && n._isJoined() && n._push(Ae.access_token, {
        access_token: s
      });
    }));
  }
  /**
   * Wait for any in-flight auth operations to complete
   * @internal
   */
  async _waitForAuthIfNeeded() {
    this._authPromise && await this._authPromise;
  }
  /**
   * Safely call setAuth with standardized error handling
   * @internal
   */
  _setAuthSafely(e = "general") {
    this.setAuth().catch((s) => {
      this.log("error", `error setting auth in ${e}`, s);
    });
  }
  /**
   * Trigger state change callbacks with proper error handling
   * @internal
   */
  _triggerStateCallbacks(e, s) {
    try {
      this.stateChangeCallbacks[e].forEach((n) => {
        try {
          n(s);
        } catch (r) {
          this.log("error", `error in ${e} callback`, r);
        }
      });
    } catch (n) {
      this.log("error", `error triggering ${e} callbacks`, n);
    }
  }
  /**
   * Setup reconnection timer with proper configuration
   * @internal
   */
  _setupReconnectionTimer() {
    this.reconnectTimer = new Wa(async () => {
      setTimeout(async () => {
        await this._waitForAuthIfNeeded(), this.isConnected() || this.connect();
      }, Es.RECONNECT_DELAY);
    }, this.reconnectAfterMs);
  }
  /**
   * Initialize client options with defaults
   * @internal
   */
  _initializeOptions(e) {
    var s, n, r, o, a, i, l, c, u;
    if (this.transport = (s = e == null ? void 0 : e.transport) !== null && s !== void 0 ? s : null, this.timeout = (n = e == null ? void 0 : e.timeout) !== null && n !== void 0 ? n : Pn, this.heartbeatIntervalMs = (r = e == null ? void 0 : e.heartbeatIntervalMs) !== null && r !== void 0 ? r : Es.HEARTBEAT_INTERVAL, this.worker = (o = e == null ? void 0 : e.worker) !== null && o !== void 0 ? o : !1, this.accessToken = (a = e == null ? void 0 : e.accessToken) !== null && a !== void 0 ? a : null, this.heartbeatCallback = (i = e == null ? void 0 : e.heartbeatCallback) !== null && i !== void 0 ? i : pn, e != null && e.params && (this.params = e.params), e != null && e.logger && (this.logger = e.logger), (e != null && e.logLevel || e != null && e.log_level) && (this.logLevel = e.logLevel || e.log_level, this.params = Object.assign(Object.assign({}, this.params), { log_level: this.logLevel })), this.reconnectAfterMs = (l = e == null ? void 0 : e.reconnectAfterMs) !== null && l !== void 0 ? l : (d) => If[d - 1] || Af, this.encode = (c = e == null ? void 0 : e.encode) !== null && c !== void 0 ? c : (d, f) => f(JSON.stringify(d)), this.decode = (u = e == null ? void 0 : e.decode) !== null && u !== void 0 ? u : this.serializer.decode.bind(this.serializer), this.worker) {
      if (typeof window < "u" && !window.Worker)
        throw new Error("Web Worker is not supported");
      this.workerUrl = e == null ? void 0 : e.workerUrl;
    }
  }
}
class hr extends Error {
  constructor(e) {
    super(e), this.__isStorageError = !0, this.name = "StorageError";
  }
}
function ne(t) {
  return typeof t == "object" && t !== null && "__isStorageError" in t;
}
class xf extends hr {
  constructor(e, s, n) {
    super(e), this.name = "StorageApiError", this.status = s, this.statusCode = n;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      statusCode: this.statusCode
    };
  }
}
class jn extends hr {
  constructor(e, s) {
    super(e), this.name = "StorageUnknownError", this.originalError = s;
  }
}
var jf = globalThis && globalThis.__awaiter || function(t, e, s, n) {
  function r(o) {
    return o instanceof s ? o : new s(function(a) {
      a(o);
    });
  }
  return new (s || (s = Promise))(function(o, a) {
    function i(u) {
      try {
        c(n.next(u));
      } catch (d) {
        a(d);
      }
    }
    function l(u) {
      try {
        c(n.throw(u));
      } catch (d) {
        a(d);
      }
    }
    function c(u) {
      u.done ? o(u.value) : r(u.value).then(i, l);
    }
    c((n = n.apply(t, e || [])).next());
  });
};
const Ka = (t) => {
  let e;
  return t ? e = t : typeof fetch > "u" ? e = (...s) => Promise.resolve().then(() => Ft).then(({ default: n }) => n(...s)) : e = fetch, (...s) => e(...s);
}, Rf = () => jf(void 0, void 0, void 0, function* () {
  return typeof Response > "u" ? (yield Promise.resolve().then(() => Ft)).Response : Response;
}), Rn = (t) => {
  if (Array.isArray(t))
    return t.map((s) => Rn(s));
  if (typeof t == "function" || t !== Object(t))
    return t;
  const e = {};
  return Object.entries(t).forEach(([s, n]) => {
    const r = s.replace(/([-_][a-z])/gi, (o) => o.toUpperCase().replace(/[-_]/g, ""));
    e[r] = Rn(n);
  }), e;
}, Nf = (t) => {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
};
var Et = globalThis && globalThis.__awaiter || function(t, e, s, n) {
  function r(o) {
    return o instanceof s ? o : new s(function(a) {
      a(o);
    });
  }
  return new (s || (s = Promise))(function(o, a) {
    function i(u) {
      try {
        c(n.next(u));
      } catch (d) {
        a(d);
      }
    }
    function l(u) {
      try {
        c(n.throw(u));
      } catch (d) {
        a(d);
      }
    }
    function c(u) {
      u.done ? o(u.value) : r(u.value).then(i, l);
    }
    c((n = n.apply(t, e || [])).next());
  });
};
const vn = (t) => t.msg || t.message || t.error_description || t.error || JSON.stringify(t), Lf = (t, e, s) => Et(void 0, void 0, void 0, function* () {
  const n = yield Rf();
  t instanceof n && !(s != null && s.noResolveJson) ? t.json().then((r) => {
    const o = t.status || 500, a = (r == null ? void 0 : r.statusCode) || o + "";
    e(new xf(vn(r), o, a));
  }).catch((r) => {
    e(new jn(vn(r), r));
  }) : e(new jn(vn(t), t));
}), Mf = (t, e, s, n) => {
  const r = { method: t, headers: (e == null ? void 0 : e.headers) || {} };
  return t === "GET" || !n ? r : (Nf(n) ? (r.headers = Object.assign({ "Content-Type": "application/json" }, e == null ? void 0 : e.headers), r.body = JSON.stringify(n)) : r.body = n, e != null && e.duplex && (r.duplex = e.duplex), Object.assign(Object.assign({}, r), s));
};
function ps(t, e, s, n, r, o) {
  return Et(this, void 0, void 0, function* () {
    return new Promise((a, i) => {
      t(s, Mf(e, n, r, o)).then((l) => {
        if (!l.ok)
          throw l;
        return n != null && n.noResolveJson ? l : l.json();
      }).then((l) => a(l)).catch((l) => Lf(l, i, n));
    });
  });
}
function Us(t, e, s, n) {
  return Et(this, void 0, void 0, function* () {
    return ps(t, "GET", e, s, n);
  });
}
function je(t, e, s, n, r) {
  return Et(this, void 0, void 0, function* () {
    return ps(t, "POST", e, n, r, s);
  });
}
function Nn(t, e, s, n, r) {
  return Et(this, void 0, void 0, function* () {
    return ps(t, "PUT", e, n, r, s);
  });
}
function Uf(t, e, s, n) {
  return Et(this, void 0, void 0, function* () {
    return ps(t, "HEAD", e, Object.assign(Object.assign({}, s), { noResolveJson: !0 }), n);
  });
}
function Ga(t, e, s, n, r) {
  return Et(this, void 0, void 0, function* () {
    return ps(t, "DELETE", e, n, r, s);
  });
}
var ue = globalThis && globalThis.__awaiter || function(t, e, s, n) {
  function r(o) {
    return o instanceof s ? o : new s(function(a) {
      a(o);
    });
  }
  return new (s || (s = Promise))(function(o, a) {
    function i(u) {
      try {
        c(n.next(u));
      } catch (d) {
        a(d);
      }
    }
    function l(u) {
      try {
        c(n.throw(u));
      } catch (d) {
        a(d);
      }
    }
    function c(u) {
      u.done ? o(u.value) : r(u.value).then(i, l);
    }
    c((n = n.apply(t, e || [])).next());
  });
};
const Df = {
  limit: 100,
  offset: 0,
  sortBy: {
    column: "name",
    order: "asc"
  }
}, yo = {
  cacheControl: "3600",
  contentType: "text/plain;charset=UTF-8",
  upsert: !1
};
class Bf {
  constructor(e, s = {}, n, r) {
    this.url = e, this.headers = s, this.bucketId = n, this.fetch = Ka(r);
  }
  /**
   * Uploads a file to an existing bucket or replaces an existing file at the specified path with a new one.
   *
   * @param method HTTP method.
   * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  uploadOrUpdate(e, s, n, r) {
    return ue(this, void 0, void 0, function* () {
      try {
        let o;
        const a = Object.assign(Object.assign({}, yo), r);
        let i = Object.assign(Object.assign({}, this.headers), e === "POST" && { "x-upsert": String(a.upsert) });
        const l = a.metadata;
        typeof Blob < "u" && n instanceof Blob ? (o = new FormData(), o.append("cacheControl", a.cacheControl), l && o.append("metadata", this.encodeMetadata(l)), o.append("", n)) : typeof FormData < "u" && n instanceof FormData ? (o = n, o.append("cacheControl", a.cacheControl), l && o.append("metadata", this.encodeMetadata(l))) : (o = n, i["cache-control"] = `max-age=${a.cacheControl}`, i["content-type"] = a.contentType, l && (i["x-metadata"] = this.toBase64(this.encodeMetadata(l)))), r != null && r.headers && (i = Object.assign(Object.assign({}, i), r.headers));
        const c = this._removeEmptyFolders(s), u = this._getFinalPath(c), d = yield (e == "PUT" ? Nn : je)(this.fetch, `${this.url}/object/${u}`, o, Object.assign({ headers: i }, a != null && a.duplex ? { duplex: a.duplex } : {}));
        return {
          data: { path: c, id: d.Id, fullPath: d.Key },
          error: null
        };
      } catch (o) {
        if (ne(o))
          return { data: null, error: o };
        throw o;
      }
    });
  }
  /**
   * Uploads a file to an existing bucket.
   *
   * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  upload(e, s, n) {
    return ue(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("POST", e, s, n);
    });
  }
  /**
   * Upload a file with a token generated from `createSignedUploadUrl`.
   * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param token The token generated from `createSignedUploadUrl`
   * @param fileBody The body of the file to be stored in the bucket.
   */
  uploadToSignedUrl(e, s, n, r) {
    return ue(this, void 0, void 0, function* () {
      const o = this._removeEmptyFolders(e), a = this._getFinalPath(o), i = new URL(this.url + `/object/upload/sign/${a}`);
      i.searchParams.set("token", s);
      try {
        let l;
        const c = Object.assign({ upsert: yo.upsert }, r), u = Object.assign(Object.assign({}, this.headers), { "x-upsert": String(c.upsert) });
        typeof Blob < "u" && n instanceof Blob ? (l = new FormData(), l.append("cacheControl", c.cacheControl), l.append("", n)) : typeof FormData < "u" && n instanceof FormData ? (l = n, l.append("cacheControl", c.cacheControl)) : (l = n, u["cache-control"] = `max-age=${c.cacheControl}`, u["content-type"] = c.contentType);
        const d = yield Nn(this.fetch, i.toString(), l, { headers: u });
        return {
          data: { path: o, fullPath: d.Key },
          error: null
        };
      } catch (l) {
        if (ne(l))
          return { data: null, error: l };
        throw l;
      }
    });
  }
  /**
   * Creates a signed upload URL.
   * Signed upload URLs can be used to upload files to the bucket without further authentication.
   * They are valid for 2 hours.
   * @param path The file path, including the current file name. For example `folder/image.png`.
   * @param options.upsert If set to true, allows the file to be overwritten if it already exists.
   */
  createSignedUploadUrl(e, s) {
    return ue(this, void 0, void 0, function* () {
      try {
        let n = this._getFinalPath(e);
        const r = Object.assign({}, this.headers);
        s != null && s.upsert && (r["x-upsert"] = "true");
        const o = yield je(this.fetch, `${this.url}/object/upload/sign/${n}`, {}, { headers: r }), a = new URL(this.url + o.url), i = a.searchParams.get("token");
        if (!i)
          throw new hr("No token returned by API");
        return { data: { signedUrl: a.toString(), path: e, token: i }, error: null };
      } catch (n) {
        if (ne(n))
          return { data: null, error: n };
        throw n;
      }
    });
  }
  /**
   * Replaces an existing file at the specified path with a new one.
   *
   * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to update.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  update(e, s, n) {
    return ue(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("PUT", e, s, n);
    });
  }
  /**
   * Moves an existing file to a new path in the same bucket.
   *
   * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
   * @param toPath The new file path, including the new file name. For example `folder/image-new.png`.
   * @param options The destination options.
   */
  move(e, s, n) {
    return ue(this, void 0, void 0, function* () {
      try {
        return { data: yield je(this.fetch, `${this.url}/object/move`, {
          bucketId: this.bucketId,
          sourceKey: e,
          destinationKey: s,
          destinationBucket: n == null ? void 0 : n.destinationBucket
        }, { headers: this.headers }), error: null };
      } catch (r) {
        if (ne(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Copies an existing file to a new path in the same bucket.
   *
   * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
   * @param toPath The new file path, including the new file name. For example `folder/image-copy.png`.
   * @param options The destination options.
   */
  copy(e, s, n) {
    return ue(this, void 0, void 0, function* () {
      try {
        return { data: { path: (yield je(this.fetch, `${this.url}/object/copy`, {
          bucketId: this.bucketId,
          sourceKey: e,
          destinationKey: s,
          destinationBucket: n == null ? void 0 : n.destinationBucket
        }, { headers: this.headers })).Key }, error: null };
      } catch (r) {
        if (ne(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Creates a signed URL. Use a signed URL to share a file for a fixed amount of time.
   *
   * @param path The file path, including the current file name. For example `folder/image.png`.
   * @param expiresIn The number of seconds until the signed URL expires. For example, `60` for a URL which is valid for one minute.
   * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   * @param options.transform Transform the asset before serving it to the client.
   */
  createSignedUrl(e, s, n) {
    return ue(this, void 0, void 0, function* () {
      try {
        let r = this._getFinalPath(e), o = yield je(this.fetch, `${this.url}/object/sign/${r}`, Object.assign({ expiresIn: s }, n != null && n.transform ? { transform: n.transform } : {}), { headers: this.headers });
        const a = n != null && n.download ? `&download=${n.download === !0 ? "" : n.download}` : "";
        return o = { signedUrl: encodeURI(`${this.url}${o.signedURL}${a}`) }, { data: o, error: null };
      } catch (r) {
        if (ne(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Creates multiple signed URLs. Use a signed URL to share a file for a fixed amount of time.
   *
   * @param paths The file paths to be downloaded, including the current file names. For example `['folder/image.png', 'folder2/image2.png']`.
   * @param expiresIn The number of seconds until the signed URLs expire. For example, `60` for URLs which are valid for one minute.
   * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   */
  createSignedUrls(e, s, n) {
    return ue(this, void 0, void 0, function* () {
      try {
        const r = yield je(this.fetch, `${this.url}/object/sign/${this.bucketId}`, { expiresIn: s, paths: e }, { headers: this.headers }), o = n != null && n.download ? `&download=${n.download === !0 ? "" : n.download}` : "";
        return {
          data: r.map((a) => Object.assign(Object.assign({}, a), { signedUrl: a.signedURL ? encodeURI(`${this.url}${a.signedURL}${o}`) : null })),
          error: null
        };
      } catch (r) {
        if (ne(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Downloads a file from a private bucket. For public buckets, make a request to the URL returned from `getPublicUrl` instead.
   *
   * @param path The full path and file name of the file to be downloaded. For example `folder/image.png`.
   * @param options.transform Transform the asset before serving it to the client.
   */
  download(e, s) {
    return ue(this, void 0, void 0, function* () {
      const r = typeof (s == null ? void 0 : s.transform) < "u" ? "render/image/authenticated" : "object", o = this.transformOptsToQueryString((s == null ? void 0 : s.transform) || {}), a = o ? `?${o}` : "";
      try {
        const i = this._getFinalPath(e);
        return { data: yield (yield Us(this.fetch, `${this.url}/${r}/${i}${a}`, {
          headers: this.headers,
          noResolveJson: !0
        })).blob(), error: null };
      } catch (i) {
        if (ne(i))
          return { data: null, error: i };
        throw i;
      }
    });
  }
  /**
   * Retrieves the details of an existing file.
   * @param path
   */
  info(e) {
    return ue(this, void 0, void 0, function* () {
      const s = this._getFinalPath(e);
      try {
        const n = yield Us(this.fetch, `${this.url}/object/info/${s}`, {
          headers: this.headers
        });
        return { data: Rn(n), error: null };
      } catch (n) {
        if (ne(n))
          return { data: null, error: n };
        throw n;
      }
    });
  }
  /**
   * Checks the existence of a file.
   * @param path
   */
  exists(e) {
    return ue(this, void 0, void 0, function* () {
      const s = this._getFinalPath(e);
      try {
        return yield Uf(this.fetch, `${this.url}/object/${s}`, {
          headers: this.headers
        }), { data: !0, error: null };
      } catch (n) {
        if (ne(n) && n instanceof jn) {
          const r = n.originalError;
          if ([400, 404].includes(r == null ? void 0 : r.status))
            return { data: !1, error: n };
        }
        throw n;
      }
    });
  }
  /**
   * A simple convenience function to get the URL for an asset in a public bucket. If you do not want to use this function, you can construct the public URL by concatenating the bucket URL with the path to the asset.
   * This function does not verify if the bucket is public. If a public URL is created for a bucket which is not public, you will not be able to download the asset.
   *
   * @param path The path and name of the file to generate the public URL for. For example `folder/image.png`.
   * @param options.download Triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   * @param options.transform Transform the asset before serving it to the client.
   */
  getPublicUrl(e, s) {
    const n = this._getFinalPath(e), r = [], o = s != null && s.download ? `download=${s.download === !0 ? "" : s.download}` : "";
    o !== "" && r.push(o);
    const i = typeof (s == null ? void 0 : s.transform) < "u" ? "render/image" : "object", l = this.transformOptsToQueryString((s == null ? void 0 : s.transform) || {});
    l !== "" && r.push(l);
    let c = r.join("&");
    return c !== "" && (c = `?${c}`), {
      data: { publicUrl: encodeURI(`${this.url}/${i}/public/${n}${c}`) }
    };
  }
  /**
   * Deletes files within the same bucket
   *
   * @param paths An array of files to delete, including the path and file name. For example [`'folder/image.png'`].
   */
  remove(e) {
    return ue(this, void 0, void 0, function* () {
      try {
        return { data: yield Ga(this.fetch, `${this.url}/object/${this.bucketId}`, { prefixes: e }, { headers: this.headers }), error: null };
      } catch (s) {
        if (ne(s))
          return { data: null, error: s };
        throw s;
      }
    });
  }
  /**
   * Get file metadata
   * @param id the file id to retrieve metadata
   */
  // async getMetadata(
  //   id: string
  // ): Promise<
  //   | {
  //       data: Metadata
  //       error: null
  //     }
  //   | {
  //       data: null
  //       error: StorageError
  //     }
  // > {
  //   try {
  //     const data = await get(this.fetch, `${this.url}/metadata/${id}`, { headers: this.headers })
  //     return { data, error: null }
  //   } catch (error) {
  //     if (isStorageError(error)) {
  //       return { data: null, error }
  //     }
  //     throw error
  //   }
  // }
  /**
   * Update file metadata
   * @param id the file id to update metadata
   * @param meta the new file metadata
   */
  // async updateMetadata(
  //   id: string,
  //   meta: Metadata
  // ): Promise<
  //   | {
  //       data: Metadata
  //       error: null
  //     }
  //   | {
  //       data: null
  //       error: StorageError
  //     }
  // > {
  //   try {
  //     const data = await post(
  //       this.fetch,
  //       `${this.url}/metadata/${id}`,
  //       { ...meta },
  //       { headers: this.headers }
  //     )
  //     return { data, error: null }
  //   } catch (error) {
  //     if (isStorageError(error)) {
  //       return { data: null, error }
  //     }
  //     throw error
  //   }
  // }
  /**
   * Lists all the files within a bucket.
   * @param path The folder path.
   * @param options Search options including limit (defaults to 100), offset, sortBy, and search
   */
  list(e, s, n) {
    return ue(this, void 0, void 0, function* () {
      try {
        const r = Object.assign(Object.assign(Object.assign({}, Df), s), { prefix: e || "" });
        return { data: yield je(this.fetch, `${this.url}/object/list/${this.bucketId}`, r, { headers: this.headers }, n), error: null };
      } catch (r) {
        if (ne(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * @experimental this method signature might change in the future
   * @param options search options
   * @param parameters
   */
  listV2(e, s) {
    return ue(this, void 0, void 0, function* () {
      try {
        const n = Object.assign({}, e);
        return { data: yield je(this.fetch, `${this.url}/object/list-v2/${this.bucketId}`, n, { headers: this.headers }, s), error: null };
      } catch (n) {
        if (ne(n))
          return { data: null, error: n };
        throw n;
      }
    });
  }
  encodeMetadata(e) {
    return JSON.stringify(e);
  }
  toBase64(e) {
    return typeof Buffer < "u" ? Buffer.from(e).toString("base64") : btoa(e);
  }
  _getFinalPath(e) {
    return `${this.bucketId}/${e.replace(/^\/+/, "")}`;
  }
  _removeEmptyFolders(e) {
    return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  transformOptsToQueryString(e) {
    const s = [];
    return e.width && s.push(`width=${e.width}`), e.height && s.push(`height=${e.height}`), e.resize && s.push(`resize=${e.resize}`), e.format && s.push(`format=${e.format}`), e.quality && s.push(`quality=${e.quality}`), s.join("&");
  }
}
const Ff = "2.11.0", zf = { "X-Client-Info": `storage-js/${Ff}` };
var Ct = globalThis && globalThis.__awaiter || function(t, e, s, n) {
  function r(o) {
    return o instanceof s ? o : new s(function(a) {
      a(o);
    });
  }
  return new (s || (s = Promise))(function(o, a) {
    function i(u) {
      try {
        c(n.next(u));
      } catch (d) {
        a(d);
      }
    }
    function l(u) {
      try {
        c(n.throw(u));
      } catch (d) {
        a(d);
      }
    }
    function c(u) {
      u.done ? o(u.value) : r(u.value).then(i, l);
    }
    c((n = n.apply(t, e || [])).next());
  });
};
class Vf {
  constructor(e, s = {}, n, r) {
    const o = new URL(e);
    r != null && r.useNewHostname && /supabase\.(co|in|red)$/.test(o.hostname) && !o.hostname.includes("storage.supabase.") && (o.hostname = o.hostname.replace("supabase.", "storage.supabase.")), this.url = o.href, this.headers = Object.assign(Object.assign({}, zf), s), this.fetch = Ka(n);
  }
  /**
   * Retrieves the details of all Storage buckets within an existing project.
   */
  listBuckets() {
    return Ct(this, void 0, void 0, function* () {
      try {
        return { data: yield Us(this.fetch, `${this.url}/bucket`, { headers: this.headers }), error: null };
      } catch (e) {
        if (ne(e))
          return { data: null, error: e };
        throw e;
      }
    });
  }
  /**
   * Retrieves the details of an existing Storage bucket.
   *
   * @param id The unique identifier of the bucket you would like to retrieve.
   */
  getBucket(e) {
    return Ct(this, void 0, void 0, function* () {
      try {
        return { data: yield Us(this.fetch, `${this.url}/bucket/${e}`, { headers: this.headers }), error: null };
      } catch (s) {
        if (ne(s))
          return { data: null, error: s };
        throw s;
      }
    });
  }
  /**
   * Creates a new Storage bucket
   *
   * @param id A unique identifier for the bucket you are creating.
   * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations. By default, buckets are private.
   * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
   * The global file size limit takes precedence over this value.
   * The default value is null, which doesn't set a per bucket file size limit.
   * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
   * The default value is null, which allows files with all mime types to be uploaded.
   * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
   * @returns newly created bucket id
   * @param options.type (private-beta) specifies the bucket type. see `BucketType` for more details.
   *   - default bucket type is `STANDARD`
   */
  createBucket(e, s = {
    public: !1
  }) {
    return Ct(this, void 0, void 0, function* () {
      try {
        return { data: yield je(this.fetch, `${this.url}/bucket`, {
          id: e,
          name: e,
          type: s.type,
          public: s.public,
          file_size_limit: s.fileSizeLimit,
          allowed_mime_types: s.allowedMimeTypes
        }, { headers: this.headers }), error: null };
      } catch (n) {
        if (ne(n))
          return { data: null, error: n };
        throw n;
      }
    });
  }
  /**
   * Updates a Storage bucket
   *
   * @param id A unique identifier for the bucket you are updating.
   * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations.
   * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
   * The global file size limit takes precedence over this value.
   * The default value is null, which doesn't set a per bucket file size limit.
   * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
   * The default value is null, which allows files with all mime types to be uploaded.
   * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
   */
  updateBucket(e, s) {
    return Ct(this, void 0, void 0, function* () {
      try {
        return { data: yield Nn(this.fetch, `${this.url}/bucket/${e}`, {
          id: e,
          name: e,
          public: s.public,
          file_size_limit: s.fileSizeLimit,
          allowed_mime_types: s.allowedMimeTypes
        }, { headers: this.headers }), error: null };
      } catch (n) {
        if (ne(n))
          return { data: null, error: n };
        throw n;
      }
    });
  }
  /**
   * Removes all objects inside a single bucket.
   *
   * @param id The unique identifier of the bucket you would like to empty.
   */
  emptyBucket(e) {
    return Ct(this, void 0, void 0, function* () {
      try {
        return { data: yield je(this.fetch, `${this.url}/bucket/${e}/empty`, {}, { headers: this.headers }), error: null };
      } catch (s) {
        if (ne(s))
          return { data: null, error: s };
        throw s;
      }
    });
  }
  /**
   * Deletes an existing bucket. A bucket can't be deleted with existing objects inside it.
   * You must first `empty()` the bucket.
   *
   * @param id The unique identifier of the bucket you would like to delete.
   */
  deleteBucket(e) {
    return Ct(this, void 0, void 0, function* () {
      try {
        return { data: yield Ga(this.fetch, `${this.url}/bucket/${e}`, {}, { headers: this.headers }), error: null };
      } catch (s) {
        if (ne(s))
          return { data: null, error: s };
        throw s;
      }
    });
  }
}
class Wf extends Vf {
  constructor(e, s = {}, n, r) {
    super(e, s, n, r);
  }
  /**
   * Perform file operation in a bucket.
   *
   * @param id The bucket id to operate on.
   */
  from(e) {
    return new Bf(this.url, this.headers, e, this.fetch);
  }
}
const Hf = "2.57.0";
let Gt = "";
typeof Deno < "u" ? Gt = "deno" : typeof document < "u" ? Gt = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? Gt = "react-native" : Gt = "node";
const qf = { "X-Client-Info": `supabase-js-${Gt}/${Hf}` }, Kf = {
  headers: qf
}, Gf = {
  schema: "public"
}, Jf = {
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  flowType: "implicit"
}, Yf = {};
var Xf = globalThis && globalThis.__awaiter || function(t, e, s, n) {
  function r(o) {
    return o instanceof s ? o : new s(function(a) {
      a(o);
    });
  }
  return new (s || (s = Promise))(function(o, a) {
    function i(u) {
      try {
        c(n.next(u));
      } catch (d) {
        a(d);
      }
    }
    function l(u) {
      try {
        c(n.throw(u));
      } catch (d) {
        a(d);
      }
    }
    function c(u) {
      u.done ? o(u.value) : r(u.value).then(i, l);
    }
    c((n = n.apply(t, e || [])).next());
  });
};
const Zf = (t) => {
  let e;
  return t ? e = t : typeof fetch > "u" ? e = ja : e = fetch, (...s) => e(...s);
}, Qf = () => typeof Headers > "u" ? Ra : Headers, ep = (t, e, s) => {
  const n = Zf(s), r = Qf();
  return (o, a) => Xf(void 0, void 0, void 0, function* () {
    var i;
    const l = (i = yield e()) !== null && i !== void 0 ? i : t;
    let c = new r(a == null ? void 0 : a.headers);
    return c.has("apikey") || c.set("apikey", t), c.has("Authorization") || c.set("Authorization", `Bearer ${l}`), n(o, Object.assign(Object.assign({}, a), { headers: c }));
  });
};
var tp = globalThis && globalThis.__awaiter || function(t, e, s, n) {
  function r(o) {
    return o instanceof s ? o : new s(function(a) {
      a(o);
    });
  }
  return new (s || (s = Promise))(function(o, a) {
    function i(u) {
      try {
        c(n.next(u));
      } catch (d) {
        a(d);
      }
    }
    function l(u) {
      try {
        c(n.throw(u));
      } catch (d) {
        a(d);
      }
    }
    function c(u) {
      u.done ? o(u.value) : r(u.value).then(i, l);
    }
    c((n = n.apply(t, e || [])).next());
  });
};
function sp(t) {
  return t.endsWith("/") ? t : t + "/";
}
function np(t, e) {
  var s, n;
  const { db: r, auth: o, realtime: a, global: i } = t, { db: l, auth: c, realtime: u, global: d } = e, f = {
    db: Object.assign(Object.assign({}, l), r),
    auth: Object.assign(Object.assign({}, c), o),
    realtime: Object.assign(Object.assign({}, u), a),
    storage: {},
    global: Object.assign(Object.assign(Object.assign({}, d), i), { headers: Object.assign(Object.assign({}, (s = d == null ? void 0 : d.headers) !== null && s !== void 0 ? s : {}), (n = i == null ? void 0 : i.headers) !== null && n !== void 0 ? n : {}) }),
    accessToken: () => tp(this, void 0, void 0, function* () {
      return "";
    })
  };
  return t.accessToken ? f.accessToken = t.accessToken : delete f.accessToken, f;
}
const Ja = "2.71.1", jt = 30 * 1e3, Ln = 3, gn = Ln * jt, rp = "http://localhost:9999", op = "supabase.auth.token", ap = { "X-Client-Info": `gotrue-js/${Ja}` }, Mn = "X-Supabase-Api-Version", Ya = {
  "2024-01-01": {
    timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
    name: "2024-01-01"
  }
}, ip = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i, lp = 10 * 60 * 1e3;
class fr extends Error {
  constructor(e, s, n) {
    super(e), this.__isAuthError = !0, this.name = "AuthError", this.status = s, this.code = n;
  }
}
function D(t) {
  return typeof t == "object" && t !== null && "__isAuthError" in t;
}
class cp extends fr {
  constructor(e, s, n) {
    super(e, s, n), this.name = "AuthApiError", this.status = s, this.code = n;
  }
}
function up(t) {
  return D(t) && t.name === "AuthApiError";
}
class Xa extends fr {
  constructor(e, s) {
    super(e), this.name = "AuthUnknownError", this.originalError = s;
  }
}
class at extends fr {
  constructor(e, s, n, r) {
    super(e, n, r), this.name = s, this.status = n;
  }
}
class Ze extends at {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
function dp(t) {
  return D(t) && t.name === "AuthSessionMissingError";
}
class Ts extends at {
  constructor() {
    super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0);
  }
}
class Cs extends at {
  constructor(e) {
    super(e, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class Os extends at {
  constructor(e, s = null) {
    super(e, "AuthImplicitGrantRedirectError", 500, void 0), this.details = null, this.details = s;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details
    };
  }
}
function hp(t) {
  return D(t) && t.name === "AuthImplicitGrantRedirectError";
}
class _o extends at {
  constructor(e, s = null) {
    super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0), this.details = null, this.details = s;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details
    };
  }
}
class Un extends at {
  constructor(e, s) {
    super(e, "AuthRetryableFetchError", s, void 0);
  }
}
function mn(t) {
  return D(t) && t.name === "AuthRetryableFetchError";
}
class bo extends at {
  constructor(e, s, n) {
    super(e, "AuthWeakPasswordError", s, "weak_password"), this.reasons = n;
  }
}
class Dn extends at {
  constructor(e) {
    super(e, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
}
const Ds = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""), wo = ` 	
\r=`.split(""), fp = (() => {
  const t = new Array(128);
  for (let e = 0; e < t.length; e += 1)
    t[e] = -1;
  for (let e = 0; e < wo.length; e += 1)
    t[wo[e].charCodeAt(0)] = -2;
  for (let e = 0; e < Ds.length; e += 1)
    t[Ds[e].charCodeAt(0)] = e;
  return t;
})();
function ko(t, e, s) {
  if (t !== null)
    for (e.queue = e.queue << 8 | t, e.queuedBits += 8; e.queuedBits >= 6; ) {
      const n = e.queue >> e.queuedBits - 6 & 63;
      s(Ds[n]), e.queuedBits -= 6;
    }
  else if (e.queuedBits > 0)
    for (e.queue = e.queue << 6 - e.queuedBits, e.queuedBits = 6; e.queuedBits >= 6; ) {
      const n = e.queue >> e.queuedBits - 6 & 63;
      s(Ds[n]), e.queuedBits -= 6;
    }
}
function Za(t, e, s) {
  const n = fp[t];
  if (n > -1)
    for (e.queue = e.queue << 6 | n, e.queuedBits += 6; e.queuedBits >= 8; )
      s(e.queue >> e.queuedBits - 8 & 255), e.queuedBits -= 8;
  else {
    if (n === -2)
      return;
    throw new Error(`Invalid Base64-URL character "${String.fromCharCode(t)}"`);
  }
}
function So(t) {
  const e = [], s = (a) => {
    e.push(String.fromCodePoint(a));
  }, n = {
    utf8seq: 0,
    codepoint: 0
  }, r = { queue: 0, queuedBits: 0 }, o = (a) => {
    gp(a, n, s);
  };
  for (let a = 0; a < t.length; a += 1)
    Za(t.charCodeAt(a), r, o);
  return e.join("");
}
function pp(t, e) {
  if (t <= 127) {
    e(t);
    return;
  } else if (t <= 2047) {
    e(192 | t >> 6), e(128 | t & 63);
    return;
  } else if (t <= 65535) {
    e(224 | t >> 12), e(128 | t >> 6 & 63), e(128 | t & 63);
    return;
  } else if (t <= 1114111) {
    e(240 | t >> 18), e(128 | t >> 12 & 63), e(128 | t >> 6 & 63), e(128 | t & 63);
    return;
  }
  throw new Error(`Unrecognized Unicode codepoint: ${t.toString(16)}`);
}
function vp(t, e) {
  for (let s = 0; s < t.length; s += 1) {
    let n = t.charCodeAt(s);
    if (n > 55295 && n <= 56319) {
      const r = (n - 55296) * 1024 & 65535;
      n = (t.charCodeAt(s + 1) - 56320 & 65535 | r) + 65536, s += 1;
    }
    pp(n, e);
  }
}
function gp(t, e, s) {
  if (e.utf8seq === 0) {
    if (t <= 127) {
      s(t);
      return;
    }
    for (let n = 1; n < 6; n += 1)
      if (!(t >> 7 - n & 1)) {
        e.utf8seq = n;
        break;
      }
    if (e.utf8seq === 2)
      e.codepoint = t & 31;
    else if (e.utf8seq === 3)
      e.codepoint = t & 15;
    else if (e.utf8seq === 4)
      e.codepoint = t & 7;
    else
      throw new Error("Invalid UTF-8 sequence");
    e.utf8seq -= 1;
  } else if (e.utf8seq > 0) {
    if (t <= 127)
      throw new Error("Invalid UTF-8 sequence");
    e.codepoint = e.codepoint << 6 | t & 63, e.utf8seq -= 1, e.utf8seq === 0 && s(e.codepoint);
  }
}
function mp(t) {
  const e = [], s = { queue: 0, queuedBits: 0 }, n = (r) => {
    e.push(r);
  };
  for (let r = 0; r < t.length; r += 1)
    Za(t.charCodeAt(r), s, n);
  return new Uint8Array(e);
}
function yp(t) {
  const e = [];
  return vp(t, (s) => e.push(s)), new Uint8Array(e);
}
function _p(t) {
  const e = [], s = { queue: 0, queuedBits: 0 }, n = (r) => {
    e.push(r);
  };
  return t.forEach((r) => ko(r, s, n)), ko(null, s, n), e.join("");
}
function bp(t) {
  return Math.round(Date.now() / 1e3) + t;
}
function wp() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
    const e = Math.random() * 16 | 0;
    return (t == "x" ? e : e & 3 | 8).toString(16);
  });
}
const Ie = () => typeof window < "u" && typeof document < "u", ct = {
  tested: !1,
  writable: !1
}, Qa = () => {
  if (!Ie())
    return !1;
  try {
    if (typeof globalThis.localStorage != "object")
      return !1;
  } catch {
    return !1;
  }
  if (ct.tested)
    return ct.writable;
  const t = `lswt-${Math.random()}${Math.random()}`;
  try {
    globalThis.localStorage.setItem(t, t), globalThis.localStorage.removeItem(t), ct.tested = !0, ct.writable = !0;
  } catch {
    ct.tested = !0, ct.writable = !1;
  }
  return ct.writable;
};
function kp(t) {
  const e = {}, s = new URL(t);
  if (s.hash && s.hash[0] === "#")
    try {
      new URLSearchParams(s.hash.substring(1)).forEach((r, o) => {
        e[o] = r;
      });
    } catch {
    }
  return s.searchParams.forEach((n, r) => {
    e[r] = n;
  }), e;
}
const ei = (t) => {
  let e;
  return t ? e = t : typeof fetch > "u" ? e = (...s) => Promise.resolve().then(() => Ft).then(({ default: n }) => n(...s)) : e = fetch, (...s) => e(...s);
}, Sp = (t) => typeof t == "object" && t !== null && "status" in t && "ok" in t && "json" in t && typeof t.json == "function", Rt = async (t, e, s) => {
  await t.setItem(e, JSON.stringify(s));
}, ut = async (t, e) => {
  const s = await t.getItem(e);
  if (!s)
    return null;
  try {
    return JSON.parse(s);
  } catch {
    return s;
  }
}, Je = async (t, e) => {
  await t.removeItem(e);
};
class en {
  constructor() {
    this.promise = new en.promiseConstructor((e, s) => {
      this.resolve = e, this.reject = s;
    });
  }
}
en.promiseConstructor = Promise;
function yn(t) {
  const e = t.split(".");
  if (e.length !== 3)
    throw new Dn("Invalid JWT structure");
  for (let n = 0; n < e.length; n++)
    if (!ip.test(e[n]))
      throw new Dn("JWT not in base64url format");
  return {
    // using base64url lib
    header: JSON.parse(So(e[0])),
    payload: JSON.parse(So(e[1])),
    signature: mp(e[2]),
    raw: {
      header: e[0],
      payload: e[1]
    }
  };
}
async function Ep(t) {
  return await new Promise((e) => {
    setTimeout(() => e(null), t);
  });
}
function Tp(t, e) {
  return new Promise((n, r) => {
    (async () => {
      for (let o = 0; o < 1 / 0; o++)
        try {
          const a = await t(o);
          if (!e(o, null, a)) {
            n(a);
            return;
          }
        } catch (a) {
          if (!e(o, a)) {
            r(a);
            return;
          }
        }
    })();
  });
}
function Cp(t) {
  return ("0" + t.toString(16)).substr(-2);
}
function Op() {
  const e = new Uint32Array(56);
  if (typeof crypto > "u") {
    const s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~", n = s.length;
    let r = "";
    for (let o = 0; o < 56; o++)
      r += s.charAt(Math.floor(Math.random() * n));
    return r;
  }
  return crypto.getRandomValues(e), Array.from(e, Cp).join("");
}
async function Ip(t) {
  const s = new TextEncoder().encode(t), n = await crypto.subtle.digest("SHA-256", s), r = new Uint8Array(n);
  return Array.from(r).map((o) => String.fromCharCode(o)).join("");
}
async function Ap(t) {
  if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u"))
    return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), t;
  const s = await Ip(t);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function Ot(t, e, s = !1) {
  const n = Op();
  let r = n;
  s && (r += "/PASSWORD_RECOVERY"), await Rt(t, `${e}-code-verifier`, r);
  const o = await Ap(n);
  return [o, n === o ? "plain" : "s256"];
}
const Pp = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function $p(t) {
  const e = t.headers.get(Mn);
  if (!e || !e.match(Pp))
    return null;
  try {
    return /* @__PURE__ */ new Date(`${e}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function xp(t) {
  if (!t)
    throw new Error("Missing exp claim");
  const e = Math.floor(Date.now() / 1e3);
  if (t <= e)
    throw new Error("JWT has expired");
}
function jp(t) {
  switch (t) {
    case "RS256":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: { name: "SHA-256" }
      };
    case "ES256":
      return {
        name: "ECDSA",
        namedCurve: "P-256",
        hash: { name: "SHA-256" }
      };
    default:
      throw new Error("Invalid alg claim");
  }
}
const Rp = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function It(t) {
  if (!Rp.test(t))
    throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not");
}
function _n() {
  const t = {};
  return new Proxy(t, {
    get: (e, s) => {
      if (s === "__isUserNotAvailableProxy")
        return !0;
      if (typeof s == "symbol") {
        const n = s.toString();
        if (n === "Symbol(Symbol.toPrimitive)" || n === "Symbol(Symbol.toStringTag)" || n === "Symbol(util.inspect.custom)")
          return;
      }
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${s}" property of the session object is not supported. Please use getUser() instead.`);
    },
    set: (e, s) => {
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${s}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
    },
    deleteProperty: (e, s) => {
      throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${s}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`);
    }
  });
}
function Eo(t) {
  return JSON.parse(JSON.stringify(t));
}
var Np = globalThis && globalThis.__rest || function(t, e) {
  var s = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (s[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, n = Object.getOwnPropertySymbols(t); r < n.length; r++)
      e.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[r]) && (s[n[r]] = t[n[r]]);
  return s;
};
const dt = (t) => t.msg || t.message || t.error_description || t.error || JSON.stringify(t), Lp = [502, 503, 504];
async function To(t) {
  var e;
  if (!Sp(t))
    throw new Un(dt(t), 0);
  if (Lp.includes(t.status))
    throw new Un(dt(t), t.status);
  let s;
  try {
    s = await t.json();
  } catch (o) {
    throw new Xa(dt(o), o);
  }
  let n;
  const r = $p(t);
  if (r && r.getTime() >= Ya["2024-01-01"].timestamp && typeof s == "object" && s && typeof s.code == "string" ? n = s.code : typeof s == "object" && s && typeof s.error_code == "string" && (n = s.error_code), n) {
    if (n === "weak_password")
      throw new bo(dt(s), t.status, ((e = s.weak_password) === null || e === void 0 ? void 0 : e.reasons) || []);
    if (n === "session_not_found")
      throw new Ze();
  } else if (typeof s == "object" && s && typeof s.weak_password == "object" && s.weak_password && Array.isArray(s.weak_password.reasons) && s.weak_password.reasons.length && s.weak_password.reasons.reduce((o, a) => o && typeof a == "string", !0))
    throw new bo(dt(s), t.status, s.weak_password.reasons);
  throw new cp(dt(s), t.status || 500, n);
}
const Mp = (t, e, s, n) => {
  const r = { method: t, headers: (e == null ? void 0 : e.headers) || {} };
  return t === "GET" ? r : (r.headers = Object.assign({ "Content-Type": "application/json;charset=UTF-8" }, e == null ? void 0 : e.headers), r.body = JSON.stringify(n), Object.assign(Object.assign({}, r), s));
};
async function z(t, e, s, n) {
  var r;
  const o = Object.assign({}, n == null ? void 0 : n.headers);
  o[Mn] || (o[Mn] = Ya["2024-01-01"].name), n != null && n.jwt && (o.Authorization = `Bearer ${n.jwt}`);
  const a = (r = n == null ? void 0 : n.query) !== null && r !== void 0 ? r : {};
  n != null && n.redirectTo && (a.redirect_to = n.redirectTo);
  const i = Object.keys(a).length ? "?" + new URLSearchParams(a).toString() : "", l = await Up(t, e, s + i, {
    headers: o,
    noResolveJson: n == null ? void 0 : n.noResolveJson
  }, {}, n == null ? void 0 : n.body);
  return n != null && n.xform ? n == null ? void 0 : n.xform(l) : { data: Object.assign({}, l), error: null };
}
async function Up(t, e, s, n, r, o) {
  const a = Mp(e, n, r, o);
  let i;
  try {
    i = await t(s, Object.assign({}, a));
  } catch (l) {
    throw console.error(l), new Un(dt(l), 0);
  }
  if (i.ok || await To(i), n != null && n.noResolveJson)
    return i;
  try {
    return await i.json();
  } catch (l) {
    await To(l);
  }
}
function Be(t) {
  var e;
  let s = null;
  zp(t) && (s = Object.assign({}, t), t.expires_at || (s.expires_at = bp(t.expires_in)));
  const n = (e = t.user) !== null && e !== void 0 ? e : t;
  return { data: { session: s, user: n }, error: null };
}
function Co(t) {
  const e = Be(t);
  return !e.error && t.weak_password && typeof t.weak_password == "object" && Array.isArray(t.weak_password.reasons) && t.weak_password.reasons.length && t.weak_password.message && typeof t.weak_password.message == "string" && t.weak_password.reasons.reduce((s, n) => s && typeof n == "string", !0) && (e.data.weak_password = t.weak_password), e;
}
function Qe(t) {
  var e;
  return { data: { user: (e = t.user) !== null && e !== void 0 ? e : t }, error: null };
}
function Dp(t) {
  return { data: t, error: null };
}
function Bp(t) {
  const { action_link: e, email_otp: s, hashed_token: n, redirect_to: r, verification_type: o } = t, a = Np(t, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]), i = {
    action_link: e,
    email_otp: s,
    hashed_token: n,
    redirect_to: r,
    verification_type: o
  }, l = Object.assign({}, a);
  return {
    data: {
      properties: i,
      user: l
    },
    error: null
  };
}
function Fp(t) {
  return t;
}
function zp(t) {
  return t.access_token && t.refresh_token && t.expires_in;
}
const bn = ["global", "local", "others"];
var Vp = globalThis && globalThis.__rest || function(t, e) {
  var s = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (s[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, n = Object.getOwnPropertySymbols(t); r < n.length; r++)
      e.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[r]) && (s[n[r]] = t[n[r]]);
  return s;
};
class Wp {
  constructor({ url: e = "", headers: s = {}, fetch: n }) {
    this.url = e, this.headers = s, this.fetch = ei(n), this.mfa = {
      listFactors: this._listFactors.bind(this),
      deleteFactor: this._deleteFactor.bind(this)
    };
  }
  /**
   * Removes a logged-in session.
   * @param jwt A valid, logged-in JWT.
   * @param scope The logout sope.
   */
  async signOut(e, s = bn[0]) {
    if (bn.indexOf(s) < 0)
      throw new Error(`@supabase/auth-js: Parameter scope must be one of ${bn.join(", ")}`);
    try {
      return await z(this.fetch, "POST", `${this.url}/logout?scope=${s}`, {
        headers: this.headers,
        jwt: e,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (n) {
      if (D(n))
        return { data: null, error: n };
      throw n;
    }
  }
  /**
   * Sends an invite link to an email address.
   * @param email The email address of the user.
   * @param options Additional options to be included when inviting.
   */
  async inviteUserByEmail(e, s = {}) {
    try {
      return await z(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: e, data: s.data },
        headers: this.headers,
        redirectTo: s.redirectTo,
        xform: Qe
      });
    } catch (n) {
      if (D(n))
        return { data: { user: null }, error: n };
      throw n;
    }
  }
  /**
   * Generates email links and OTPs to be sent via a custom email provider.
   * @param email The user's email.
   * @param options.password User password. For signup only.
   * @param options.data Optional user metadata. For signup only.
   * @param options.redirectTo The redirect url which should be appended to the generated link
   */
  async generateLink(e) {
    try {
      const { options: s } = e, n = Vp(e, ["options"]), r = Object.assign(Object.assign({}, n), s);
      return "newEmail" in n && (r.new_email = n == null ? void 0 : n.newEmail, delete r.newEmail), await z(this.fetch, "POST", `${this.url}/admin/generate_link`, {
        body: r,
        headers: this.headers,
        xform: Bp,
        redirectTo: s == null ? void 0 : s.redirectTo
      });
    } catch (s) {
      if (D(s))
        return {
          data: {
            properties: null,
            user: null
          },
          error: s
        };
      throw s;
    }
  }
  // User Admin API
  /**
   * Creates a new user.
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async createUser(e) {
    try {
      return await z(this.fetch, "POST", `${this.url}/admin/users`, {
        body: e,
        headers: this.headers,
        xform: Qe
      });
    } catch (s) {
      if (D(s))
        return { data: { user: null }, error: s };
      throw s;
    }
  }
  /**
   * Get a list of users.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   * @param params An object which supports `page` and `perPage` as numbers, to alter the paginated results.
   */
  async listUsers(e) {
    var s, n, r, o, a, i, l;
    try {
      const c = { nextPage: null, lastPage: 0, total: 0 }, u = await z(this.fetch, "GET", `${this.url}/admin/users`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (n = (s = e == null ? void 0 : e.page) === null || s === void 0 ? void 0 : s.toString()) !== null && n !== void 0 ? n : "",
          per_page: (o = (r = e == null ? void 0 : e.perPage) === null || r === void 0 ? void 0 : r.toString()) !== null && o !== void 0 ? o : ""
        },
        xform: Fp
      });
      if (u.error)
        throw u.error;
      const d = await u.json(), f = (a = u.headers.get("x-total-count")) !== null && a !== void 0 ? a : 0, p = (l = (i = u.headers.get("link")) === null || i === void 0 ? void 0 : i.split(",")) !== null && l !== void 0 ? l : [];
      return p.length > 0 && (p.forEach((h) => {
        const g = parseInt(h.split(";")[0].split("=")[1].substring(0, 1)), b = JSON.parse(h.split(";")[1].split("=")[1]);
        c[`${b}Page`] = g;
      }), c.total = parseInt(f)), { data: Object.assign(Object.assign({}, d), c), error: null };
    } catch (c) {
      if (D(c))
        return { data: { users: [] }, error: c };
      throw c;
    }
  }
  /**
   * Get user by id.
   *
   * @param uid The user's unique identifier
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async getUserById(e) {
    It(e);
    try {
      return await z(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        xform: Qe
      });
    } catch (s) {
      if (D(s))
        return { data: { user: null }, error: s };
      throw s;
    }
  }
  /**
   * Updates the user data.
   *
   * @param attributes The data you want to update.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async updateUserById(e, s) {
    It(e);
    try {
      return await z(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
        body: s,
        headers: this.headers,
        xform: Qe
      });
    } catch (n) {
      if (D(n))
        return { data: { user: null }, error: n };
      throw n;
    }
  }
  /**
   * Delete a user. Requires a `service_role` key.
   *
   * @param id The user id you want to remove.
   * @param shouldSoftDelete If true, then the user will be soft-deleted from the auth schema. Soft deletion allows user identification from the hashed user ID but is not reversible.
   * Defaults to false for backward compatibility.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async deleteUser(e, s = !1) {
    It(e);
    try {
      return await z(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        body: {
          should_soft_delete: s
        },
        xform: Qe
      });
    } catch (n) {
      if (D(n))
        return { data: { user: null }, error: n };
      throw n;
    }
  }
  async _listFactors(e) {
    It(e.userId);
    try {
      const { data: s, error: n } = await z(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/factors`, {
        headers: this.headers,
        xform: (r) => ({ data: { factors: r }, error: null })
      });
      return { data: s, error: n };
    } catch (s) {
      if (D(s))
        return { data: null, error: s };
      throw s;
    }
  }
  async _deleteFactor(e) {
    It(e.userId), It(e.id);
    try {
      return { data: await z(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/factors/${e.id}`, {
        headers: this.headers
      }), error: null };
    } catch (s) {
      if (D(s))
        return { data: null, error: s };
      throw s;
    }
  }
}
function Oo(t = {}) {
  return {
    getItem: (e) => t[e] || null,
    setItem: (e, s) => {
      t[e] = s;
    },
    removeItem: (e) => {
      delete t[e];
    }
  };
}
function Hp() {
  if (typeof globalThis != "object")
    try {
      Object.defineProperty(Object.prototype, "__magic__", {
        get: function() {
          return this;
        },
        configurable: !0
      }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__;
    } catch {
      typeof self < "u" && (self.globalThis = self);
    }
}
const At = {
  /**
   * @experimental
   */
  debug: !!(globalThis && Qa() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class ti extends Error {
  constructor(e) {
    super(e), this.isAcquireTimeout = !0;
  }
}
class qp extends ti {
}
async function Kp(t, e, s) {
  At.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", t, e);
  const n = new globalThis.AbortController();
  return e > 0 && setTimeout(() => {
    n.abort(), At.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", t);
  }, e), await Promise.resolve().then(() => globalThis.navigator.locks.request(t, e === 0 ? {
    mode: "exclusive",
    ifAvailable: !0
  } : {
    mode: "exclusive",
    signal: n.signal
  }, async (r) => {
    if (r) {
      At.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", t, r.name);
      try {
        return await s();
      } finally {
        At.debug && console.log("@supabase/gotrue-js: navigatorLock: released", t, r.name);
      }
    } else {
      if (e === 0)
        throw At.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", t), new qp(`Acquiring an exclusive Navigator LockManager lock "${t}" immediately failed`);
      if (At.debug)
        try {
          const o = await globalThis.navigator.locks.query();
          console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(o, null, "  "));
        } catch (o) {
          console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", o);
        }
      return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"), await s();
    }
  }));
}
Hp();
const Gp = {
  url: rp,
  storageKey: op,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: ap,
  flowType: "implicit",
  debug: !1,
  hasCustomAuthorizationHeader: !1
};
async function Io(t, e, s) {
  return await s();
}
const Pt = {};
class us {
  /**
   * Create a new client for use in the browser.
   */
  constructor(e) {
    var s, n;
    this.userStorage = null, this.memoryStorage = null, this.stateChangeEmitters = /* @__PURE__ */ new Map(), this.autoRefreshTicker = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.initializePromise = null, this.detectSessionInUrl = !0, this.hasCustomAuthorizationHeader = !1, this.suppressGetSessionWarning = !1, this.lockAcquired = !1, this.pendingInLock = [], this.broadcastChannel = null, this.logger = console.log, this.instanceID = us.nextInstanceID, us.nextInstanceID += 1, this.instanceID > 0 && Ie() && console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");
    const r = Object.assign(Object.assign({}, Gp), e);
    if (this.logDebugMessages = !!r.debug, typeof r.debug == "function" && (this.logger = r.debug), this.persistSession = r.persistSession, this.storageKey = r.storageKey, this.autoRefreshToken = r.autoRefreshToken, this.admin = new Wp({
      url: r.url,
      headers: r.headers,
      fetch: r.fetch
    }), this.url = r.url, this.headers = r.headers, this.fetch = ei(r.fetch), this.lock = r.lock || Io, this.detectSessionInUrl = r.detectSessionInUrl, this.flowType = r.flowType, this.hasCustomAuthorizationHeader = r.hasCustomAuthorizationHeader, r.lock ? this.lock = r.lock : Ie() && (!((s = globalThis == null ? void 0 : globalThis.navigator) === null || s === void 0) && s.locks) ? this.lock = Kp : this.lock = Io, this.jwks || (this.jwks = { keys: [] }, this.jwks_cached_at = Number.MIN_SAFE_INTEGER), this.mfa = {
      verify: this._verify.bind(this),
      enroll: this._enroll.bind(this),
      unenroll: this._unenroll.bind(this),
      challenge: this._challenge.bind(this),
      listFactors: this._listFactors.bind(this),
      challengeAndVerify: this._challengeAndVerify.bind(this),
      getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this)
    }, this.persistSession ? (r.storage ? this.storage = r.storage : Qa() ? this.storage = globalThis.localStorage : (this.memoryStorage = {}, this.storage = Oo(this.memoryStorage)), r.userStorage && (this.userStorage = r.userStorage)) : (this.memoryStorage = {}, this.storage = Oo(this.memoryStorage)), Ie() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
      } catch (o) {
        console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", o);
      }
      (n = this.broadcastChannel) === null || n === void 0 || n.addEventListener("message", async (o) => {
        this._debug("received broadcast notification from other tab or client", o), await this._notifyAllSubscribers(o.data.event, o.data.session, !1);
      });
    }
    this.initialize();
  }
  /**
   * The JWKS used for verifying asymmetric JWTs
   */
  get jwks() {
    var e, s;
    return (s = (e = Pt[this.storageKey]) === null || e === void 0 ? void 0 : e.jwks) !== null && s !== void 0 ? s : { keys: [] };
  }
  set jwks(e) {
    Pt[this.storageKey] = Object.assign(Object.assign({}, Pt[this.storageKey]), { jwks: e });
  }
  get jwks_cached_at() {
    var e, s;
    return (s = (e = Pt[this.storageKey]) === null || e === void 0 ? void 0 : e.cachedAt) !== null && s !== void 0 ? s : Number.MIN_SAFE_INTEGER;
  }
  set jwks_cached_at(e) {
    Pt[this.storageKey] = Object.assign(Object.assign({}, Pt[this.storageKey]), { cachedAt: e });
  }
  _debug(...e) {
    return this.logDebugMessages && this.logger(`GoTrueClient@${this.instanceID} (${Ja}) ${(/* @__PURE__ */ new Date()).toISOString()}`, ...e), this;
  }
  /**
   * Initializes the client session either from the url or from storage.
   * This method is automatically called when instantiating the client, but should also be called
   * manually when checking for an error from an auth redirect (oauth, magiclink, password recovery, etc).
   */
  async initialize() {
    return this.initializePromise ? await this.initializePromise : (this.initializePromise = (async () => await this._acquireLock(-1, async () => await this._initialize()))(), await this.initializePromise);
  }
  /**
   * IMPORTANT:
   * 1. Never throw in this method, as it is called from the constructor
   * 2. Never return a session from this method as it would be cached over
   *    the whole lifetime of the client
   */
  async _initialize() {
    var e;
    try {
      const s = kp(window.location.href);
      let n = "none";
      if (this._isImplicitGrantCallback(s) ? n = "implicit" : await this._isPKCECallback(s) && (n = "pkce"), Ie() && this.detectSessionInUrl && n !== "none") {
        const { data: r, error: o } = await this._getSessionFromURL(s, n);
        if (o) {
          if (this._debug("#_initialize()", "error detecting session from URL", o), hp(o)) {
            const l = (e = o.details) === null || e === void 0 ? void 0 : e.code;
            if (l === "identity_already_exists" || l === "identity_not_found" || l === "single_identity_not_deletable")
              return { error: o };
          }
          return await this._removeSession(), { error: o };
        }
        const { session: a, redirectType: i } = r;
        return this._debug("#_initialize()", "detected session in URL", a, "redirect type", i), await this._saveSession(a), setTimeout(async () => {
          i === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", a) : await this._notifyAllSubscribers("SIGNED_IN", a);
        }, 0), { error: null };
      }
      return await this._recoverAndRefresh(), { error: null };
    } catch (s) {
      return D(s) ? { error: s } : {
        error: new Xa("Unexpected error during initialization", s)
      };
    } finally {
      await this._handleVisibilityChange(), this._debug("#_initialize()", "end");
    }
  }
  /**
   * Creates a new anonymous user.
   *
   * @returns A session where the is_anonymous claim in the access token JWT set to true
   */
  async signInAnonymously(e) {
    var s, n, r;
    try {
      const o = await z(this.fetch, "POST", `${this.url}/signup`, {
        headers: this.headers,
        body: {
          data: (n = (s = e == null ? void 0 : e.options) === null || s === void 0 ? void 0 : s.data) !== null && n !== void 0 ? n : {},
          gotrue_meta_security: { captcha_token: (r = e == null ? void 0 : e.options) === null || r === void 0 ? void 0 : r.captchaToken }
        },
        xform: Be
      }), { data: a, error: i } = o;
      if (i || !a)
        return { data: { user: null, session: null }, error: i };
      const l = a.session, c = a.user;
      return a.session && (await this._saveSession(a.session), await this._notifyAllSubscribers("SIGNED_IN", l)), { data: { user: c, session: l }, error: null };
    } catch (o) {
      if (D(o))
        return { data: { user: null, session: null }, error: o };
      throw o;
    }
  }
  /**
   * Creates a new user.
   *
   * Be aware that if a user account exists in the system you may get back an
   * error message that attempts to hide this information from the user.
   * This method has support for PKCE via email signups. The PKCE flow cannot be used when autoconfirm is enabled.
   *
   * @returns A logged-in session if the server has "autoconfirm" ON
   * @returns A user if the server has "autoconfirm" OFF
   */
  async signUp(e) {
    var s, n, r;
    try {
      let o;
      if ("email" in e) {
        const { email: u, password: d, options: f } = e;
        let p = null, h = null;
        this.flowType === "pkce" && ([p, h] = await Ot(this.storage, this.storageKey)), o = await z(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          redirectTo: f == null ? void 0 : f.emailRedirectTo,
          body: {
            email: u,
            password: d,
            data: (s = f == null ? void 0 : f.data) !== null && s !== void 0 ? s : {},
            gotrue_meta_security: { captcha_token: f == null ? void 0 : f.captchaToken },
            code_challenge: p,
            code_challenge_method: h
          },
          xform: Be
        });
      } else if ("phone" in e) {
        const { phone: u, password: d, options: f } = e;
        o = await z(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: u,
            password: d,
            data: (n = f == null ? void 0 : f.data) !== null && n !== void 0 ? n : {},
            channel: (r = f == null ? void 0 : f.channel) !== null && r !== void 0 ? r : "sms",
            gotrue_meta_security: { captcha_token: f == null ? void 0 : f.captchaToken }
          },
          xform: Be
        });
      } else
        throw new Cs("You must provide either an email or phone number and a password");
      const { data: a, error: i } = o;
      if (i || !a)
        return { data: { user: null, session: null }, error: i };
      const l = a.session, c = a.user;
      return a.session && (await this._saveSession(a.session), await this._notifyAllSubscribers("SIGNED_IN", l)), { data: { user: c, session: l }, error: null };
    } catch (o) {
      if (D(o))
        return { data: { user: null, session: null }, error: o };
      throw o;
    }
  }
  /**
   * Log in an existing user with an email and password or phone and password.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or that the
   * email/phone and password combination is wrong or that the account can only
   * be accessed via social login.
   */
  async signInWithPassword(e) {
    try {
      let s;
      if ("email" in e) {
        const { email: o, password: a, options: i } = e;
        s = await z(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            email: o,
            password: a,
            gotrue_meta_security: { captcha_token: i == null ? void 0 : i.captchaToken }
          },
          xform: Co
        });
      } else if ("phone" in e) {
        const { phone: o, password: a, options: i } = e;
        s = await z(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            phone: o,
            password: a,
            gotrue_meta_security: { captcha_token: i == null ? void 0 : i.captchaToken }
          },
          xform: Co
        });
      } else
        throw new Cs("You must provide either an email or phone number and a password");
      const { data: n, error: r } = s;
      return r ? { data: { user: null, session: null }, error: r } : !n || !n.session || !n.user ? { data: { user: null, session: null }, error: new Ts() } : (n.session && (await this._saveSession(n.session), await this._notifyAllSubscribers("SIGNED_IN", n.session)), {
        data: Object.assign({ user: n.user, session: n.session }, n.weak_password ? { weakPassword: n.weak_password } : null),
        error: r
      });
    } catch (s) {
      if (D(s))
        return { data: { user: null, session: null }, error: s };
      throw s;
    }
  }
  /**
   * Log in an existing user via a third-party provider.
   * This method supports the PKCE flow.
   */
  async signInWithOAuth(e) {
    var s, n, r, o;
    return await this._handleProviderSignIn(e.provider, {
      redirectTo: (s = e.options) === null || s === void 0 ? void 0 : s.redirectTo,
      scopes: (n = e.options) === null || n === void 0 ? void 0 : n.scopes,
      queryParams: (r = e.options) === null || r === void 0 ? void 0 : r.queryParams,
      skipBrowserRedirect: (o = e.options) === null || o === void 0 ? void 0 : o.skipBrowserRedirect
    });
  }
  /**
   * Log in an existing user by exchanging an Auth Code issued during the PKCE flow.
   */
  async exchangeCodeForSession(e) {
    return await this.initializePromise, this._acquireLock(-1, async () => this._exchangeCodeForSession(e));
  }
  /**
   * Signs in a user by verifying a message signed by the user's private key.
   * Only Solana supported at this time, using the Sign in with Solana standard.
   */
  async signInWithWeb3(e) {
    const { chain: s } = e;
    if (s === "solana")
      return await this.signInWithSolana(e);
    throw new Error(`@supabase/auth-js: Unsupported chain "${s}"`);
  }
  async signInWithSolana(e) {
    var s, n, r, o, a, i, l, c, u, d, f, p;
    let h, g;
    if ("message" in e)
      h = e.message, g = e.signature;
    else {
      const { chain: b, wallet: v, statement: k, options: m } = e;
      let A;
      if (Ie())
        if (typeof v == "object")
          A = v;
        else {
          const j = window;
          if ("solana" in j && typeof j.solana == "object" && ("signIn" in j.solana && typeof j.solana.signIn == "function" || "signMessage" in j.solana && typeof j.solana.signMessage == "function"))
            A = j.solana;
          else
            throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.");
        }
      else {
        if (typeof v != "object" || !(m != null && m.url))
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        A = v;
      }
      const L = new URL((s = m == null ? void 0 : m.url) !== null && s !== void 0 ? s : window.location.href);
      if ("signIn" in A && A.signIn) {
        const j = await A.signIn(Object.assign(Object.assign(Object.assign({ issuedAt: (/* @__PURE__ */ new Date()).toISOString() }, m == null ? void 0 : m.signInWithSolana), {
          // non-overridable properties
          version: "1",
          domain: L.host,
          uri: L.href
        }), k ? { statement: k } : null));
        let P;
        if (Array.isArray(j) && j[0] && typeof j[0] == "object")
          P = j[0];
        else if (j && typeof j == "object" && "signedMessage" in j && "signature" in j)
          P = j;
        else
          throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
        if ("signedMessage" in P && "signature" in P && (typeof P.signedMessage == "string" || P.signedMessage instanceof Uint8Array) && P.signature instanceof Uint8Array)
          h = typeof P.signedMessage == "string" ? P.signedMessage : new TextDecoder().decode(P.signedMessage), g = P.signature;
        else
          throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields");
      } else {
        if (!("signMessage" in A) || typeof A.signMessage != "function" || !("publicKey" in A) || typeof A != "object" || !A.publicKey || !("toBase58" in A.publicKey) || typeof A.publicKey.toBase58 != "function")
          throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");
        h = [
          `${L.host} wants you to sign in with your Solana account:`,
          A.publicKey.toBase58(),
          ...k ? ["", k, ""] : [""],
          "Version: 1",
          `URI: ${L.href}`,
          `Issued At: ${(r = (n = m == null ? void 0 : m.signInWithSolana) === null || n === void 0 ? void 0 : n.issuedAt) !== null && r !== void 0 ? r : (/* @__PURE__ */ new Date()).toISOString()}`,
          ...!((o = m == null ? void 0 : m.signInWithSolana) === null || o === void 0) && o.notBefore ? [`Not Before: ${m.signInWithSolana.notBefore}`] : [],
          ...!((a = m == null ? void 0 : m.signInWithSolana) === null || a === void 0) && a.expirationTime ? [`Expiration Time: ${m.signInWithSolana.expirationTime}`] : [],
          ...!((i = m == null ? void 0 : m.signInWithSolana) === null || i === void 0) && i.chainId ? [`Chain ID: ${m.signInWithSolana.chainId}`] : [],
          ...!((l = m == null ? void 0 : m.signInWithSolana) === null || l === void 0) && l.nonce ? [`Nonce: ${m.signInWithSolana.nonce}`] : [],
          ...!((c = m == null ? void 0 : m.signInWithSolana) === null || c === void 0) && c.requestId ? [`Request ID: ${m.signInWithSolana.requestId}`] : [],
          ...!((d = (u = m == null ? void 0 : m.signInWithSolana) === null || u === void 0 ? void 0 : u.resources) === null || d === void 0) && d.length ? [
            "Resources",
            ...m.signInWithSolana.resources.map((P) => `- ${P}`)
          ] : []
        ].join(`
`);
        const j = await A.signMessage(new TextEncoder().encode(h), "utf8");
        if (!j || !(j instanceof Uint8Array))
          throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
        g = j;
      }
    }
    try {
      const { data: b, error: v } = await z(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({ chain: "solana", message: h, signature: _p(g) }, !((f = e.options) === null || f === void 0) && f.captchaToken ? { gotrue_meta_security: { captcha_token: (p = e.options) === null || p === void 0 ? void 0 : p.captchaToken } } : null),
        xform: Be
      });
      if (v)
        throw v;
      return !b || !b.session || !b.user ? {
        data: { user: null, session: null },
        error: new Ts()
      } : (b.session && (await this._saveSession(b.session), await this._notifyAllSubscribers("SIGNED_IN", b.session)), { data: Object.assign({}, b), error: v });
    } catch (b) {
      if (D(b))
        return { data: { user: null, session: null }, error: b };
      throw b;
    }
  }
  async _exchangeCodeForSession(e) {
    const s = await ut(this.storage, `${this.storageKey}-code-verifier`), [n, r] = (s ?? "").split("/");
    try {
      const { data: o, error: a } = await z(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
        headers: this.headers,
        body: {
          auth_code: e,
          code_verifier: n
        },
        xform: Be
      });
      if (await Je(this.storage, `${this.storageKey}-code-verifier`), a)
        throw a;
      return !o || !o.session || !o.user ? {
        data: { user: null, session: null, redirectType: null },
        error: new Ts()
      } : (o.session && (await this._saveSession(o.session), await this._notifyAllSubscribers("SIGNED_IN", o.session)), { data: Object.assign(Object.assign({}, o), { redirectType: r ?? null }), error: a });
    } catch (o) {
      if (D(o))
        return { data: { user: null, session: null, redirectType: null }, error: o };
      throw o;
    }
  }
  /**
   * Allows signing in with an OIDC ID token. The authentication provider used
   * should be enabled and configured.
   */
  async signInWithIdToken(e) {
    try {
      const { options: s, provider: n, token: r, access_token: o, nonce: a } = e, i = await z(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
        headers: this.headers,
        body: {
          provider: n,
          id_token: r,
          access_token: o,
          nonce: a,
          gotrue_meta_security: { captcha_token: s == null ? void 0 : s.captchaToken }
        },
        xform: Be
      }), { data: l, error: c } = i;
      return c ? { data: { user: null, session: null }, error: c } : !l || !l.session || !l.user ? {
        data: { user: null, session: null },
        error: new Ts()
      } : (l.session && (await this._saveSession(l.session), await this._notifyAllSubscribers("SIGNED_IN", l.session)), { data: l, error: c });
    } catch (s) {
      if (D(s))
        return { data: { user: null, session: null }, error: s };
      throw s;
    }
  }
  /**
   * Log in a user using magiclink or a one-time password (OTP).
   *
   * If the `{{ .ConfirmationURL }}` variable is specified in the email template, a magiclink will be sent.
   * If the `{{ .Token }}` variable is specified in the email template, an OTP will be sent.
   * If you're using phone sign-ins, only an OTP will be sent. You won't be able to send a magiclink for phone sign-ins.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or, that the account
   * can only be accessed via social login.
   *
   * Do note that you will need to configure a Whatsapp sender on Twilio
   * if you are using phone sign in with the 'whatsapp' channel. The whatsapp
   * channel is not supported on other providers
   * at this time.
   * This method supports PKCE when an email is passed.
   */
  async signInWithOtp(e) {
    var s, n, r, o, a;
    try {
      if ("email" in e) {
        const { email: i, options: l } = e;
        let c = null, u = null;
        this.flowType === "pkce" && ([c, u] = await Ot(this.storage, this.storageKey));
        const { error: d } = await z(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: i,
            data: (s = l == null ? void 0 : l.data) !== null && s !== void 0 ? s : {},
            create_user: (n = l == null ? void 0 : l.shouldCreateUser) !== null && n !== void 0 ? n : !0,
            gotrue_meta_security: { captcha_token: l == null ? void 0 : l.captchaToken },
            code_challenge: c,
            code_challenge_method: u
          },
          redirectTo: l == null ? void 0 : l.emailRedirectTo
        });
        return { data: { user: null, session: null }, error: d };
      }
      if ("phone" in e) {
        const { phone: i, options: l } = e, { data: c, error: u } = await z(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            phone: i,
            data: (r = l == null ? void 0 : l.data) !== null && r !== void 0 ? r : {},
            create_user: (o = l == null ? void 0 : l.shouldCreateUser) !== null && o !== void 0 ? o : !0,
            gotrue_meta_security: { captcha_token: l == null ? void 0 : l.captchaToken },
            channel: (a = l == null ? void 0 : l.channel) !== null && a !== void 0 ? a : "sms"
          }
        });
        return { data: { user: null, session: null, messageId: c == null ? void 0 : c.message_id }, error: u };
      }
      throw new Cs("You must provide either an email or phone number.");
    } catch (i) {
      if (D(i))
        return { data: { user: null, session: null }, error: i };
      throw i;
    }
  }
  /**
   * Log in a user given a User supplied OTP or TokenHash received through mobile or email.
   */
  async verifyOtp(e) {
    var s, n;
    try {
      let r, o;
      "options" in e && (r = (s = e.options) === null || s === void 0 ? void 0 : s.redirectTo, o = (n = e.options) === null || n === void 0 ? void 0 : n.captchaToken);
      const { data: a, error: i } = await z(this.fetch, "POST", `${this.url}/verify`, {
        headers: this.headers,
        body: Object.assign(Object.assign({}, e), { gotrue_meta_security: { captcha_token: o } }),
        redirectTo: r,
        xform: Be
      });
      if (i)
        throw i;
      if (!a)
        throw new Error("An error occurred on token verification.");
      const l = a.session, c = a.user;
      return l != null && l.access_token && (await this._saveSession(l), await this._notifyAllSubscribers(e.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", l)), { data: { user: c, session: l }, error: null };
    } catch (r) {
      if (D(r))
        return { data: { user: null, session: null }, error: r };
      throw r;
    }
  }
  /**
   * Attempts a single-sign on using an enterprise Identity Provider. A
   * successful SSO attempt will redirect the current page to the identity
   * provider authorization page. The redirect URL is implementation and SSO
   * protocol specific.
   *
   * You can use it by providing a SSO domain. Typically you can extract this
   * domain by asking users for their email address. If this domain is
   * registered on the Auth instance the redirect will use that organization's
   * currently active SSO Identity Provider for the login.
   *
   * If you have built an organization-specific login page, you can use the
   * organization's SSO Identity Provider UUID directly instead.
   */
  async signInWithSSO(e) {
    var s, n, r;
    try {
      let o = null, a = null;
      return this.flowType === "pkce" && ([o, a] = await Ot(this.storage, this.storageKey)), await z(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in e ? { provider_id: e.providerId } : null), "domain" in e ? { domain: e.domain } : null), { redirect_to: (n = (s = e.options) === null || s === void 0 ? void 0 : s.redirectTo) !== null && n !== void 0 ? n : void 0 }), !((r = e == null ? void 0 : e.options) === null || r === void 0) && r.captchaToken ? { gotrue_meta_security: { captcha_token: e.options.captchaToken } } : null), { skip_http_redirect: !0, code_challenge: o, code_challenge_method: a }),
        headers: this.headers,
        xform: Dp
      });
    } catch (o) {
      if (D(o))
        return { data: null, error: o };
      throw o;
    }
  }
  /**
   * Sends a reauthentication OTP to the user's email or phone number.
   * Requires the user to be signed-in.
   */
  async reauthenticate() {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._reauthenticate());
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (e) => {
        const { data: { session: s }, error: n } = e;
        if (n)
          throw n;
        if (!s)
          throw new Ze();
        const { error: r } = await z(this.fetch, "GET", `${this.url}/reauthenticate`, {
          headers: this.headers,
          jwt: s.access_token
        });
        return { data: { user: null, session: null }, error: r };
      });
    } catch (e) {
      if (D(e))
        return { data: { user: null, session: null }, error: e };
      throw e;
    }
  }
  /**
   * Resends an existing signup confirmation email, email change email, SMS OTP or phone change OTP.
   */
  async resend(e) {
    try {
      const s = `${this.url}/resend`;
      if ("email" in e) {
        const { email: n, type: r, options: o } = e, { error: a } = await z(this.fetch, "POST", s, {
          headers: this.headers,
          body: {
            email: n,
            type: r,
            gotrue_meta_security: { captcha_token: o == null ? void 0 : o.captchaToken }
          },
          redirectTo: o == null ? void 0 : o.emailRedirectTo
        });
        return { data: { user: null, session: null }, error: a };
      } else if ("phone" in e) {
        const { phone: n, type: r, options: o } = e, { data: a, error: i } = await z(this.fetch, "POST", s, {
          headers: this.headers,
          body: {
            phone: n,
            type: r,
            gotrue_meta_security: { captcha_token: o == null ? void 0 : o.captchaToken }
          }
        });
        return { data: { user: null, session: null, messageId: a == null ? void 0 : a.message_id }, error: i };
      }
      throw new Cs("You must provide either an email or phone number and a type");
    } catch (s) {
      if (D(s))
        return { data: { user: null, session: null }, error: s };
      throw s;
    }
  }
  /**
   * Returns the session, refreshing it if necessary.
   *
   * The session returned can be null if the session is not detected which can happen in the event a user is not signed-in or has logged out.
   *
   * **IMPORTANT:** This method loads values directly from the storage attached
   * to the client. If that storage is based on request cookies for example,
   * the values in it may not be authentic and therefore it's strongly advised
   * against using this method and its results in such circumstances. A warning
   * will be emitted if this is detected. Use {@link #getUser()} instead.
   */
  async getSession() {
    return await this.initializePromise, await this._acquireLock(-1, async () => this._useSession(async (s) => s));
  }
  /**
   * Acquires a global lock based on the storage key.
   */
  async _acquireLock(e, s) {
    this._debug("#_acquireLock", "begin", e);
    try {
      if (this.lockAcquired) {
        const n = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve(), r = (async () => (await n, await s()))();
        return this.pendingInLock.push((async () => {
          try {
            await r;
          } catch {
          }
        })()), r;
      }
      return await this.lock(`lock:${this.storageKey}`, e, async () => {
        this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
        try {
          this.lockAcquired = !0;
          const n = s();
          for (this.pendingInLock.push((async () => {
            try {
              await n;
            } catch {
            }
          })()), await n; this.pendingInLock.length; ) {
            const r = [...this.pendingInLock];
            await Promise.all(r), this.pendingInLock.splice(0, r.length);
          }
          return await n;
        } finally {
          this._debug("#_acquireLock", "lock released for storage key", this.storageKey), this.lockAcquired = !1;
        }
      });
    } finally {
      this._debug("#_acquireLock", "end");
    }
  }
  /**
   * Use instead of {@link #getSession} inside the library. It is
   * semantically usually what you want, as getting a session involves some
   * processing afterwards that requires only one client operating on the
   * session at once across multiple tabs or processes.
   */
  async _useSession(e) {
    this._debug("#_useSession", "begin");
    try {
      const s = await this.__loadSession();
      return await e(s);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  /**
   * NEVER USE DIRECTLY!
   *
   * Always use {@link #_useSession}.
   */
  async __loadSession() {
    this._debug("#__loadSession()", "begin"), this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
    try {
      let e = null;
      const s = await ut(this.storage, this.storageKey);
      if (this._debug("#getSession()", "session from storage", s), s !== null && (this._isValidSession(s) ? e = s : (this._debug("#getSession()", "session from storage is not valid"), await this._removeSession())), !e)
        return { data: { session: null }, error: null };
      const n = e.expires_at ? e.expires_at * 1e3 - Date.now() < gn : !1;
      if (this._debug("#__loadSession()", `session has${n ? "" : " not"} expired`, "expires_at", e.expires_at), !n) {
        if (this.userStorage) {
          const a = await ut(this.userStorage, this.storageKey + "-user");
          a != null && a.user ? e.user = a.user : e.user = _n();
        }
        if (this.storage.isServer && e.user) {
          let a = this.suppressGetSessionWarning;
          e = new Proxy(e, {
            get: (l, c, u) => (!a && c === "user" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."), a = !0, this.suppressGetSessionWarning = !0), Reflect.get(l, c, u))
          });
        }
        return { data: { session: e }, error: null };
      }
      const { session: r, error: o } = await this._callRefreshToken(e.refresh_token);
      return o ? { data: { session: null }, error: o } : { data: { session: r }, error: null };
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  /**
   * Gets the current user details if there is an existing session. This method
   * performs a network request to the Supabase Auth server, so the returned
   * value is authentic and can be used to base authorization rules on.
   *
   * @param jwt Takes in an optional access token JWT. If no JWT is provided, the JWT from the current session is used.
   */
  async getUser(e) {
    return e ? await this._getUser(e) : (await this.initializePromise, await this._acquireLock(-1, async () => await this._getUser()));
  }
  async _getUser(e) {
    try {
      return e ? await z(this.fetch, "GET", `${this.url}/user`, {
        headers: this.headers,
        jwt: e,
        xform: Qe
      }) : await this._useSession(async (s) => {
        var n, r, o;
        const { data: a, error: i } = s;
        if (i)
          throw i;
        return !(!((n = a.session) === null || n === void 0) && n.access_token) && !this.hasCustomAuthorizationHeader ? { data: { user: null }, error: new Ze() } : await z(this.fetch, "GET", `${this.url}/user`, {
          headers: this.headers,
          jwt: (o = (r = a.session) === null || r === void 0 ? void 0 : r.access_token) !== null && o !== void 0 ? o : void 0,
          xform: Qe
        });
      });
    } catch (s) {
      if (D(s))
        return dp(s) && (await this._removeSession(), await Je(this.storage, `${this.storageKey}-code-verifier`)), { data: { user: null }, error: s };
      throw s;
    }
  }
  /**
   * Updates user data for a logged in user.
   */
  async updateUser(e, s = {}) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._updateUser(e, s));
  }
  async _updateUser(e, s = {}) {
    try {
      return await this._useSession(async (n) => {
        const { data: r, error: o } = n;
        if (o)
          throw o;
        if (!r.session)
          throw new Ze();
        const a = r.session;
        let i = null, l = null;
        this.flowType === "pkce" && e.email != null && ([i, l] = await Ot(this.storage, this.storageKey));
        const { data: c, error: u } = await z(this.fetch, "PUT", `${this.url}/user`, {
          headers: this.headers,
          redirectTo: s == null ? void 0 : s.emailRedirectTo,
          body: Object.assign(Object.assign({}, e), { code_challenge: i, code_challenge_method: l }),
          jwt: a.access_token,
          xform: Qe
        });
        if (u)
          throw u;
        return a.user = c.user, await this._saveSession(a), await this._notifyAllSubscribers("USER_UPDATED", a), { data: { user: a.user }, error: null };
      });
    } catch (n) {
      if (D(n))
        return { data: { user: null }, error: n };
      throw n;
    }
  }
  /**
   * Sets the session data from the current session. If the current session is expired, setSession will take care of refreshing it to obtain a new session.
   * If the refresh token or access token in the current session is invalid, an error will be thrown.
   * @param currentSession The current session that minimally contains an access token and refresh token.
   */
  async setSession(e) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._setSession(e));
  }
  async _setSession(e) {
    try {
      if (!e.access_token || !e.refresh_token)
        throw new Ze();
      const s = Date.now() / 1e3;
      let n = s, r = !0, o = null;
      const { payload: a } = yn(e.access_token);
      if (a.exp && (n = a.exp, r = n <= s), r) {
        const { session: i, error: l } = await this._callRefreshToken(e.refresh_token);
        if (l)
          return { data: { user: null, session: null }, error: l };
        if (!i)
          return { data: { user: null, session: null }, error: null };
        o = i;
      } else {
        const { data: i, error: l } = await this._getUser(e.access_token);
        if (l)
          throw l;
        o = {
          access_token: e.access_token,
          refresh_token: e.refresh_token,
          user: i.user,
          token_type: "bearer",
          expires_in: n - s,
          expires_at: n
        }, await this._saveSession(o), await this._notifyAllSubscribers("SIGNED_IN", o);
      }
      return { data: { user: o.user, session: o }, error: null };
    } catch (s) {
      if (D(s))
        return { data: { session: null, user: null }, error: s };
      throw s;
    }
  }
  /**
   * Returns a new session, regardless of expiry status.
   * Takes in an optional current session. If not passed in, then refreshSession() will attempt to retrieve it from getSession().
   * If the current session's refresh token is invalid, an error will be thrown.
   * @param currentSession The current session. If passed in, it must contain a refresh token.
   */
  async refreshSession(e) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._refreshSession(e));
  }
  async _refreshSession(e) {
    try {
      return await this._useSession(async (s) => {
        var n;
        if (!e) {
          const { data: a, error: i } = s;
          if (i)
            throw i;
          e = (n = a.session) !== null && n !== void 0 ? n : void 0;
        }
        if (!(e != null && e.refresh_token))
          throw new Ze();
        const { session: r, error: o } = await this._callRefreshToken(e.refresh_token);
        return o ? { data: { user: null, session: null }, error: o } : r ? { data: { user: r.user, session: r }, error: null } : { data: { user: null, session: null }, error: null };
      });
    } catch (s) {
      if (D(s))
        return { data: { user: null, session: null }, error: s };
      throw s;
    }
  }
  /**
   * Gets the session data from a URL string
   */
  async _getSessionFromURL(e, s) {
    try {
      if (!Ie())
        throw new Os("No browser detected.");
      if (e.error || e.error_description || e.error_code)
        throw new Os(e.error_description || "Error in URL with unspecified error_description", {
          error: e.error || "unspecified_error",
          code: e.error_code || "unspecified_code"
        });
      switch (s) {
        case "implicit":
          if (this.flowType === "pkce")
            throw new _o("Not a valid PKCE flow url.");
          break;
        case "pkce":
          if (this.flowType === "implicit")
            throw new Os("Not a valid implicit grant flow url.");
          break;
        default:
      }
      if (s === "pkce") {
        if (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !e.code)
          throw new _o("No code detected.");
        const { data: k, error: m } = await this._exchangeCodeForSession(e.code);
        if (m)
          throw m;
        const A = new URL(window.location.href);
        return A.searchParams.delete("code"), window.history.replaceState(window.history.state, "", A.toString()), { data: { session: k.session, redirectType: null }, error: null };
      }
      const { provider_token: n, provider_refresh_token: r, access_token: o, refresh_token: a, expires_in: i, expires_at: l, token_type: c } = e;
      if (!o || !i || !a || !c)
        throw new Os("No session defined in URL");
      const u = Math.round(Date.now() / 1e3), d = parseInt(i);
      let f = u + d;
      l && (f = parseInt(l));
      const p = f - u;
      p * 1e3 <= jt && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${p}s, should have been closer to ${d}s`);
      const h = f - d;
      u - h >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", h, f, u) : u - h < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", h, f, u);
      const { data: g, error: b } = await this._getUser(o);
      if (b)
        throw b;
      const v = {
        provider_token: n,
        provider_refresh_token: r,
        access_token: o,
        expires_in: d,
        expires_at: f,
        refresh_token: a,
        token_type: c,
        user: g.user
      };
      return window.location.hash = "", this._debug("#_getSessionFromURL()", "clearing window.location.hash"), { data: { session: v, redirectType: e.type }, error: null };
    } catch (n) {
      if (D(n))
        return { data: { session: null, redirectType: null }, error: n };
      throw n;
    }
  }
  /**
   * Checks if the current URL contains parameters given by an implicit oauth grant flow (https://www.rfc-editor.org/rfc/rfc6749.html#section-4.2)
   */
  _isImplicitGrantCallback(e) {
    return !!(e.access_token || e.error_description);
  }
  /**
   * Checks if the current URL and backing storage contain parameters given by a PKCE flow
   */
  async _isPKCECallback(e) {
    const s = await ut(this.storage, `${this.storageKey}-code-verifier`);
    return !!(e.code && s);
  }
  /**
   * Inside a browser context, `signOut()` will remove the logged in user from the browser session and log them out - removing all items from localstorage and then trigger a `"SIGNED_OUT"` event.
   *
   * For server-side management, you can revoke all refresh tokens for a user by passing a user's JWT through to `auth.api.signOut(JWT: string)`.
   * There is no way to revoke a user's access token jwt until it expires. It is recommended to set a shorter expiry on the jwt for this reason.
   *
   * If using `others` scope, no `SIGNED_OUT` event is fired!
   */
  async signOut(e = { scope: "global" }) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._signOut(e));
  }
  async _signOut({ scope: e } = { scope: "global" }) {
    return await this._useSession(async (s) => {
      var n;
      const { data: r, error: o } = s;
      if (o)
        return { error: o };
      const a = (n = r.session) === null || n === void 0 ? void 0 : n.access_token;
      if (a) {
        const { error: i } = await this.admin.signOut(a, e);
        if (i && !(up(i) && (i.status === 404 || i.status === 401 || i.status === 403)))
          return { error: i };
      }
      return e !== "others" && (await this._removeSession(), await Je(this.storage, `${this.storageKey}-code-verifier`)), { error: null };
    });
  }
  /**
   * Receive a notification every time an auth event happens.
   * @param callback A callback function to be invoked when an auth event happens.
   */
  onAuthStateChange(e) {
    const s = wp(), n = {
      id: s,
      callback: e,
      unsubscribe: () => {
        this._debug("#unsubscribe()", "state change callback with id removed", s), this.stateChangeEmitters.delete(s);
      }
    };
    return this._debug("#onAuthStateChange()", "registered callback with id", s), this.stateChangeEmitters.set(s, n), (async () => (await this.initializePromise, await this._acquireLock(-1, async () => {
      this._emitInitialSession(s);
    })))(), { data: { subscription: n } };
  }
  async _emitInitialSession(e) {
    return await this._useSession(async (s) => {
      var n, r;
      try {
        const { data: { session: o }, error: a } = s;
        if (a)
          throw a;
        await ((n = this.stateChangeEmitters.get(e)) === null || n === void 0 ? void 0 : n.callback("INITIAL_SESSION", o)), this._debug("INITIAL_SESSION", "callback id", e, "session", o);
      } catch (o) {
        await ((r = this.stateChangeEmitters.get(e)) === null || r === void 0 ? void 0 : r.callback("INITIAL_SESSION", null)), this._debug("INITIAL_SESSION", "callback id", e, "error", o), console.error(o);
      }
    });
  }
  /**
   * Sends a password reset request to an email address. This method supports the PKCE flow.
   *
   * @param email The email address of the user.
   * @param options.redirectTo The URL to send the user to after they click the password reset link.
   * @param options.captchaToken Verification token received when the user completes the captcha on the site.
   */
  async resetPasswordForEmail(e, s = {}) {
    let n = null, r = null;
    this.flowType === "pkce" && ([n, r] = await Ot(
      this.storage,
      this.storageKey,
      !0
      // isPasswordRecovery
    ));
    try {
      return await z(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: e,
          code_challenge: n,
          code_challenge_method: r,
          gotrue_meta_security: { captcha_token: s.captchaToken }
        },
        headers: this.headers,
        redirectTo: s.redirectTo
      });
    } catch (o) {
      if (D(o))
        return { data: null, error: o };
      throw o;
    }
  }
  /**
   * Gets all the identities linked to a user.
   */
  async getUserIdentities() {
    var e;
    try {
      const { data: s, error: n } = await this.getUser();
      if (n)
        throw n;
      return { data: { identities: (e = s.user.identities) !== null && e !== void 0 ? e : [] }, error: null };
    } catch (s) {
      if (D(s))
        return { data: null, error: s };
      throw s;
    }
  }
  /**
   * Links an oauth identity to an existing user.
   * This method supports the PKCE flow.
   */
  async linkIdentity(e) {
    var s;
    try {
      const { data: n, error: r } = await this._useSession(async (o) => {
        var a, i, l, c, u;
        const { data: d, error: f } = o;
        if (f)
          throw f;
        const p = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, e.provider, {
          redirectTo: (a = e.options) === null || a === void 0 ? void 0 : a.redirectTo,
          scopes: (i = e.options) === null || i === void 0 ? void 0 : i.scopes,
          queryParams: (l = e.options) === null || l === void 0 ? void 0 : l.queryParams,
          skipBrowserRedirect: !0
        });
        return await z(this.fetch, "GET", p, {
          headers: this.headers,
          jwt: (u = (c = d.session) === null || c === void 0 ? void 0 : c.access_token) !== null && u !== void 0 ? u : void 0
        });
      });
      if (r)
        throw r;
      return Ie() && !(!((s = e.options) === null || s === void 0) && s.skipBrowserRedirect) && window.location.assign(n == null ? void 0 : n.url), { data: { provider: e.provider, url: n == null ? void 0 : n.url }, error: null };
    } catch (n) {
      if (D(n))
        return { data: { provider: e.provider, url: null }, error: n };
      throw n;
    }
  }
  /**
   * Unlinks an identity from a user by deleting it. The user will no longer be able to sign in with that identity once it's unlinked.
   */
  async unlinkIdentity(e) {
    try {
      return await this._useSession(async (s) => {
        var n, r;
        const { data: o, error: a } = s;
        if (a)
          throw a;
        return await z(this.fetch, "DELETE", `${this.url}/user/identities/${e.identity_id}`, {
          headers: this.headers,
          jwt: (r = (n = o.session) === null || n === void 0 ? void 0 : n.access_token) !== null && r !== void 0 ? r : void 0
        });
      });
    } catch (s) {
      if (D(s))
        return { data: null, error: s };
      throw s;
    }
  }
  /**
   * Generates a new JWT.
   * @param refreshToken A valid refresh token that was returned on login.
   */
  async _refreshAccessToken(e) {
    const s = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
    this._debug(s, "begin");
    try {
      const n = Date.now();
      return await Tp(async (r) => (r > 0 && await Ep(200 * Math.pow(2, r - 1)), this._debug(s, "refreshing attempt", r), await z(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
        body: { refresh_token: e },
        headers: this.headers,
        xform: Be
      })), (r, o) => {
        const a = 200 * Math.pow(2, r);
        return o && mn(o) && // retryable only if the request can be sent before the backoff overflows the tick duration
        Date.now() + a - n < jt;
      });
    } catch (n) {
      if (this._debug(s, "error", n), D(n))
        return { data: { session: null, user: null }, error: n };
      throw n;
    } finally {
      this._debug(s, "end");
    }
  }
  _isValidSession(e) {
    return typeof e == "object" && e !== null && "access_token" in e && "refresh_token" in e && "expires_at" in e;
  }
  async _handleProviderSignIn(e, s) {
    const n = await this._getUrlForProvider(`${this.url}/authorize`, e, {
      redirectTo: s.redirectTo,
      scopes: s.scopes,
      queryParams: s.queryParams
    });
    return this._debug("#_handleProviderSignIn()", "provider", e, "options", s, "url", n), Ie() && !s.skipBrowserRedirect && window.location.assign(n), { data: { provider: e, url: n }, error: null };
  }
  /**
   * Recovers the session from LocalStorage and refreshes the token
   * Note: this method is async to accommodate for AsyncStorage e.g. in React native.
   */
  async _recoverAndRefresh() {
    var e, s;
    const n = "#_recoverAndRefresh()";
    this._debug(n, "begin");
    try {
      const r = await ut(this.storage, this.storageKey);
      if (r && this.userStorage) {
        let a = await ut(this.userStorage, this.storageKey + "-user");
        !this.storage.isServer && Object.is(this.storage, this.userStorage) && !a && (a = { user: r.user }, await Rt(this.userStorage, this.storageKey + "-user", a)), r.user = (e = a == null ? void 0 : a.user) !== null && e !== void 0 ? e : _n();
      } else if (r && !r.user && !r.user) {
        const a = await ut(this.storage, this.storageKey + "-user");
        a && (a != null && a.user) ? (r.user = a.user, await Je(this.storage, this.storageKey + "-user"), await Rt(this.storage, this.storageKey, r)) : r.user = _n();
      }
      if (this._debug(n, "session from storage", r), !this._isValidSession(r)) {
        this._debug(n, "session is not valid"), r !== null && await this._removeSession();
        return;
      }
      const o = ((s = r.expires_at) !== null && s !== void 0 ? s : 1 / 0) * 1e3 - Date.now() < gn;
      if (this._debug(n, `session has${o ? "" : " not"} expired with margin of ${gn}s`), o) {
        if (this.autoRefreshToken && r.refresh_token) {
          const { error: a } = await this._callRefreshToken(r.refresh_token);
          a && (console.error(a), mn(a) || (this._debug(n, "refresh failed with a non-retryable error, removing the session", a), await this._removeSession()));
        }
      } else if (r.user && r.user.__isUserNotAvailableProxy === !0)
        try {
          const { data: a, error: i } = await this._getUser(r.access_token);
          !i && (a != null && a.user) ? (r.user = a.user, await this._saveSession(r), await this._notifyAllSubscribers("SIGNED_IN", r)) : this._debug(n, "could not get user data, skipping SIGNED_IN notification");
        } catch (a) {
          console.error("Error getting user data:", a), this._debug(n, "error getting user data, skipping SIGNED_IN notification", a);
        }
      else
        await this._notifyAllSubscribers("SIGNED_IN", r);
    } catch (r) {
      this._debug(n, "error", r), console.error(r);
      return;
    } finally {
      this._debug(n, "end");
    }
  }
  async _callRefreshToken(e) {
    var s, n;
    if (!e)
      throw new Ze();
    if (this.refreshingDeferred)
      return this.refreshingDeferred.promise;
    const r = `#_callRefreshToken(${e.substring(0, 5)}...)`;
    this._debug(r, "begin");
    try {
      this.refreshingDeferred = new en();
      const { data: o, error: a } = await this._refreshAccessToken(e);
      if (a)
        throw a;
      if (!o.session)
        throw new Ze();
      await this._saveSession(o.session), await this._notifyAllSubscribers("TOKEN_REFRESHED", o.session);
      const i = { session: o.session, error: null };
      return this.refreshingDeferred.resolve(i), i;
    } catch (o) {
      if (this._debug(r, "error", o), D(o)) {
        const a = { session: null, error: o };
        return mn(o) || await this._removeSession(), (s = this.refreshingDeferred) === null || s === void 0 || s.resolve(a), a;
      }
      throw (n = this.refreshingDeferred) === null || n === void 0 || n.reject(o), o;
    } finally {
      this.refreshingDeferred = null, this._debug(r, "end");
    }
  }
  async _notifyAllSubscribers(e, s, n = !0) {
    const r = `#_notifyAllSubscribers(${e})`;
    this._debug(r, "begin", s, `broadcast = ${n}`);
    try {
      this.broadcastChannel && n && this.broadcastChannel.postMessage({ event: e, session: s });
      const o = [], a = Array.from(this.stateChangeEmitters.values()).map(async (i) => {
        try {
          await i.callback(e, s);
        } catch (l) {
          o.push(l);
        }
      });
      if (await Promise.all(a), o.length > 0) {
        for (let i = 0; i < o.length; i += 1)
          console.error(o[i]);
        throw o[0];
      }
    } finally {
      this._debug(r, "end");
    }
  }
  /**
   * set currentSession and currentUser
   * process to _startAutoRefreshToken if possible
   */
  async _saveSession(e) {
    this._debug("#_saveSession()", e), this.suppressGetSessionWarning = !0;
    const s = Object.assign({}, e), n = s.user && s.user.__isUserNotAvailableProxy === !0;
    if (this.userStorage) {
      !n && s.user && await Rt(this.userStorage, this.storageKey + "-user", {
        user: s.user
      });
      const r = Object.assign({}, s);
      delete r.user;
      const o = Eo(r);
      await Rt(this.storage, this.storageKey, o);
    } else {
      const r = Eo(s);
      await Rt(this.storage, this.storageKey, r);
    }
  }
  async _removeSession() {
    this._debug("#_removeSession()"), await Je(this.storage, this.storageKey), await Je(this.storage, this.storageKey + "-code-verifier"), await Je(this.storage, this.storageKey + "-user"), this.userStorage && await Je(this.userStorage, this.storageKey + "-user"), await this._notifyAllSubscribers("SIGNED_OUT", null);
  }
  /**
   * Removes any registered visibilitychange callback.
   *
   * {@see #startAutoRefresh}
   * {@see #stopAutoRefresh}
   */
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const e = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      e && Ie() && (window != null && window.removeEventListener) && window.removeEventListener("visibilitychange", e);
    } catch (s) {
      console.error("removing visibilitychange callback failed", s);
    }
  }
  /**
   * This is the private implementation of {@link #startAutoRefresh}. Use this
   * within the library.
   */
  async _startAutoRefresh() {
    await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
    const e = setInterval(() => this._autoRefreshTokenTick(), jt);
    this.autoRefreshTicker = e, e && typeof e == "object" && typeof e.unref == "function" ? e.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(e), setTimeout(async () => {
      await this.initializePromise, await this._autoRefreshTokenTick();
    }, 0);
  }
  /**
   * This is the private implementation of {@link #stopAutoRefresh}. Use this
   * within the library.
   */
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const e = this.autoRefreshTicker;
    this.autoRefreshTicker = null, e && clearInterval(e);
  }
  /**
   * Starts an auto-refresh process in the background. The session is checked
   * every few seconds. Close to the time of expiration a process is started to
   * refresh the session. If refreshing fails it will be retried for as long as
   * necessary.
   *
   * If you set the {@link GoTrueClientOptions#autoRefreshToken} you don't need
   * to call this function, it will be called for you.
   *
   * On browsers the refresh process works only when the tab/window is in the
   * foreground to conserve resources as well as prevent race conditions and
   * flooding auth with requests. If you call this method any managed
   * visibility change callback will be removed and you must manage visibility
   * changes on your own.
   *
   * On non-browser platforms the refresh process works *continuously* in the
   * background, which may not be desirable. You should hook into your
   * platform's foreground indication mechanism and call these methods
   * appropriately to conserve resources.
   *
   * {@see #stopAutoRefresh}
   */
  async startAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
  }
  /**
   * Stops an active auto refresh process running in the background (if any).
   *
   * If you call this method any managed visibility change callback will be
   * removed and you must manage visibility changes on your own.
   *
   * See {@link #startAutoRefresh} for more details.
   */
  async stopAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
  }
  /**
   * Runs the auto refresh token tick.
   */
  async _autoRefreshTokenTick() {
    this._debug("#_autoRefreshTokenTick()", "begin");
    try {
      await this._acquireLock(0, async () => {
        try {
          const e = Date.now();
          try {
            return await this._useSession(async (s) => {
              const { data: { session: n } } = s;
              if (!n || !n.refresh_token || !n.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              const r = Math.floor((n.expires_at * 1e3 - e) / jt);
              this._debug("#_autoRefreshTokenTick()", `access token expires in ${r} ticks, a tick lasts ${jt}ms, refresh threshold is ${Ln} ticks`), r <= Ln && await this._callRefreshToken(n.refresh_token);
            });
          } catch (s) {
            console.error("Auto refresh tick failed with error. This is likely a transient error.", s);
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (e) {
      if (e.isAcquireTimeout || e instanceof ti)
        this._debug("auto refresh token tick lock not available");
      else
        throw e;
    }
  }
  /**
   * Registers callbacks on the browser / platform, which in-turn run
   * algorithms when the browser window/tab are in foreground. On non-browser
   * platforms it assumes always foreground.
   */
  async _handleVisibilityChange() {
    if (this._debug("#_handleVisibilityChange()"), !Ie() || !(window != null && window.addEventListener))
      return this.autoRefreshToken && this.startAutoRefresh(), !1;
    try {
      this.visibilityChangedCallback = async () => await this._onVisibilityChanged(!1), window == null || window.addEventListener("visibilitychange", this.visibilityChangedCallback), await this._onVisibilityChanged(!0);
    } catch (e) {
      console.error("_handleVisibilityChange", e);
    }
  }
  /**
   * Callback registered with `window.addEventListener('visibilitychange')`.
   */
  async _onVisibilityChanged(e) {
    const s = `#_onVisibilityChanged(${e})`;
    this._debug(s, "visibilityState", document.visibilityState), document.visibilityState === "visible" ? (this.autoRefreshToken && this._startAutoRefresh(), e || (await this.initializePromise, await this._acquireLock(-1, async () => {
      if (document.visibilityState !== "visible") {
        this._debug(s, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
        return;
      }
      await this._recoverAndRefresh();
    }))) : document.visibilityState === "hidden" && this.autoRefreshToken && this._stopAutoRefresh();
  }
  /**
   * Generates the relevant login URL for a third-party provider.
   * @param options.redirectTo A URL or mobile address to send the user to after they are confirmed.
   * @param options.scopes A space-separated list of scopes granted to the OAuth application.
   * @param options.queryParams An object of key-value pairs containing query parameters granted to the OAuth application.
   */
  async _getUrlForProvider(e, s, n) {
    const r = [`provider=${encodeURIComponent(s)}`];
    if (n != null && n.redirectTo && r.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`), n != null && n.scopes && r.push(`scopes=${encodeURIComponent(n.scopes)}`), this.flowType === "pkce") {
      const [o, a] = await Ot(this.storage, this.storageKey), i = new URLSearchParams({
        code_challenge: `${encodeURIComponent(o)}`,
        code_challenge_method: `${encodeURIComponent(a)}`
      });
      r.push(i.toString());
    }
    if (n != null && n.queryParams) {
      const o = new URLSearchParams(n.queryParams);
      r.push(o.toString());
    }
    return n != null && n.skipBrowserRedirect && r.push(`skip_http_redirect=${n.skipBrowserRedirect}`), `${e}?${r.join("&")}`;
  }
  async _unenroll(e) {
    try {
      return await this._useSession(async (s) => {
        var n;
        const { data: r, error: o } = s;
        return o ? { data: null, error: o } : await z(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
          headers: this.headers,
          jwt: (n = r == null ? void 0 : r.session) === null || n === void 0 ? void 0 : n.access_token
        });
      });
    } catch (s) {
      if (D(s))
        return { data: null, error: s };
      throw s;
    }
  }
  async _enroll(e) {
    try {
      return await this._useSession(async (s) => {
        var n, r;
        const { data: o, error: a } = s;
        if (a)
          return { data: null, error: a };
        const i = Object.assign({ friendly_name: e.friendlyName, factor_type: e.factorType }, e.factorType === "phone" ? { phone: e.phone } : { issuer: e.issuer }), { data: l, error: c } = await z(this.fetch, "POST", `${this.url}/factors`, {
          body: i,
          headers: this.headers,
          jwt: (n = o == null ? void 0 : o.session) === null || n === void 0 ? void 0 : n.access_token
        });
        return c ? { data: null, error: c } : (e.factorType === "totp" && (!((r = l == null ? void 0 : l.totp) === null || r === void 0) && r.qr_code) && (l.totp.qr_code = `data:image/svg+xml;utf-8,${l.totp.qr_code}`), { data: l, error: null });
      });
    } catch (s) {
      if (D(s))
        return { data: null, error: s };
      throw s;
    }
  }
  /**
   * {@see GoTrueMFAApi#verify}
   */
  async _verify(e) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (s) => {
          var n;
          const { data: r, error: o } = s;
          if (o)
            return { data: null, error: o };
          const { data: a, error: i } = await z(this.fetch, "POST", `${this.url}/factors/${e.factorId}/verify`, {
            body: { code: e.code, challenge_id: e.challengeId },
            headers: this.headers,
            jwt: (n = r == null ? void 0 : r.session) === null || n === void 0 ? void 0 : n.access_token
          });
          return i ? { data: null, error: i } : (await this._saveSession(Object.assign({ expires_at: Math.round(Date.now() / 1e3) + a.expires_in }, a)), await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", a), { data: a, error: i });
        });
      } catch (s) {
        if (D(s))
          return { data: null, error: s };
        throw s;
      }
    });
  }
  /**
   * {@see GoTrueMFAApi#challenge}
   */
  async _challenge(e) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (s) => {
          var n;
          const { data: r, error: o } = s;
          return o ? { data: null, error: o } : await z(this.fetch, "POST", `${this.url}/factors/${e.factorId}/challenge`, {
            body: { channel: e.channel },
            headers: this.headers,
            jwt: (n = r == null ? void 0 : r.session) === null || n === void 0 ? void 0 : n.access_token
          });
        });
      } catch (s) {
        if (D(s))
          return { data: null, error: s };
        throw s;
      }
    });
  }
  /**
   * {@see GoTrueMFAApi#challengeAndVerify}
   */
  async _challengeAndVerify(e) {
    const { data: s, error: n } = await this._challenge({
      factorId: e.factorId
    });
    return n ? { data: null, error: n } : await this._verify({
      factorId: e.factorId,
      challengeId: s.id,
      code: e.code
    });
  }
  /**
   * {@see GoTrueMFAApi#listFactors}
   */
  async _listFactors() {
    const { data: { user: e }, error: s } = await this.getUser();
    if (s)
      return { data: null, error: s };
    const n = (e == null ? void 0 : e.factors) || [], r = n.filter((a) => a.factor_type === "totp" && a.status === "verified"), o = n.filter((a) => a.factor_type === "phone" && a.status === "verified");
    return {
      data: {
        all: n,
        totp: r,
        phone: o
      },
      error: null
    };
  }
  /**
   * {@see GoTrueMFAApi#getAuthenticatorAssuranceLevel}
   */
  async _getAuthenticatorAssuranceLevel() {
    return this._acquireLock(-1, async () => await this._useSession(async (e) => {
      var s, n;
      const { data: { session: r }, error: o } = e;
      if (o)
        return { data: null, error: o };
      if (!r)
        return {
          data: { currentLevel: null, nextLevel: null, currentAuthenticationMethods: [] },
          error: null
        };
      const { payload: a } = yn(r.access_token);
      let i = null;
      a.aal && (i = a.aal);
      let l = i;
      ((n = (s = r.user.factors) === null || s === void 0 ? void 0 : s.filter((d) => d.status === "verified")) !== null && n !== void 0 ? n : []).length > 0 && (l = "aal2");
      const u = a.amr || [];
      return { data: { currentLevel: i, nextLevel: l, currentAuthenticationMethods: u }, error: null };
    }));
  }
  async fetchJwk(e, s = { keys: [] }) {
    let n = s.keys.find((i) => i.kid === e);
    if (n)
      return n;
    const r = Date.now();
    if (n = this.jwks.keys.find((i) => i.kid === e), n && this.jwks_cached_at + lp > r)
      return n;
    const { data: o, error: a } = await z(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
      headers: this.headers
    });
    if (a)
      throw a;
    return !o.keys || o.keys.length === 0 || (this.jwks = o, this.jwks_cached_at = r, n = o.keys.find((i) => i.kid === e), !n) ? null : n;
  }
  /**
   * Extracts the JWT claims present in the access token by first verifying the
   * JWT against the server's JSON Web Key Set endpoint
   * `/.well-known/jwks.json` which is often cached, resulting in significantly
   * faster responses. Prefer this method over {@link #getUser} which always
   * sends a request to the Auth server for each JWT.
   *
   * If the project is not using an asymmetric JWT signing key (like ECC or
   * RSA) it always sends a request to the Auth server (similar to {@link
   * #getUser}) to verify the JWT.
   *
   * @param jwt An optional specific JWT you wish to verify, not the one you
   *            can obtain from {@link #getSession}.
   * @param options Various additional options that allow you to customize the
   *                behavior of this method.
   */
  async getClaims(e, s = {}) {
    try {
      let n = e;
      if (!n) {
        const { data: p, error: h } = await this.getSession();
        if (h || !p.session)
          return { data: null, error: h };
        n = p.session.access_token;
      }
      const { header: r, payload: o, signature: a, raw: { header: i, payload: l } } = yn(n);
      s != null && s.allowExpired || xp(o.exp);
      const c = !r.alg || r.alg.startsWith("HS") || !r.kid || !("crypto" in globalThis && "subtle" in globalThis.crypto) ? null : await this.fetchJwk(r.kid, s != null && s.keys ? { keys: s.keys } : s == null ? void 0 : s.jwks);
      if (!c) {
        const { error: p } = await this.getUser(n);
        if (p)
          throw p;
        return {
          data: {
            claims: o,
            header: r,
            signature: a
          },
          error: null
        };
      }
      const u = jp(r.alg), d = await crypto.subtle.importKey("jwk", c, u, !0, [
        "verify"
      ]);
      if (!await crypto.subtle.verify(u, d, a, yp(`${i}.${l}`)))
        throw new Dn("Invalid JWT signature");
      return {
        data: {
          claims: o,
          header: r,
          signature: a
        },
        error: null
      };
    } catch (n) {
      if (D(n))
        return { data: null, error: n };
      throw n;
    }
  }
}
us.nextInstanceID = 0;
const Jp = us;
class Yp extends Jp {
  constructor(e) {
    super(e);
  }
}
var Xp = globalThis && globalThis.__awaiter || function(t, e, s, n) {
  function r(o) {
    return o instanceof s ? o : new s(function(a) {
      a(o);
    });
  }
  return new (s || (s = Promise))(function(o, a) {
    function i(u) {
      try {
        c(n.next(u));
      } catch (d) {
        a(d);
      }
    }
    function l(u) {
      try {
        c(n.throw(u));
      } catch (d) {
        a(d);
      }
    }
    function c(u) {
      u.done ? o(u.value) : r(u.value).then(i, l);
    }
    c((n = n.apply(t, e || [])).next());
  });
};
class Zp {
  /**
   * Create a new client for use in the browser.
   * @param supabaseUrl The unique Supabase URL which is supplied when you create a new project in your project dashboard.
   * @param supabaseKey The unique Supabase Key which is supplied when you create a new project in your project dashboard.
   * @param options.db.schema You can switch in between schemas. The schema needs to be on the list of exposed schemas inside Supabase.
   * @param options.auth.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
   * @param options.auth.persistSession Set to "true" if you want to automatically save the user session into local storage.
   * @param options.auth.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
   * @param options.realtime Options passed along to realtime-js constructor.
   * @param options.storage Options passed along to the storage-js constructor.
   * @param options.global.fetch A custom fetch implementation.
   * @param options.global.headers Any additional headers to send with each network request.
   */
  constructor(e, s, n) {
    var r, o, a;
    if (this.supabaseUrl = e, this.supabaseKey = s, !e)
      throw new Error("supabaseUrl is required.");
    if (!s)
      throw new Error("supabaseKey is required.");
    const i = sp(e), l = new URL(i);
    this.realtimeUrl = new URL("realtime/v1", l), this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws"), this.authUrl = new URL("auth/v1", l), this.storageUrl = new URL("storage/v1", l), this.functionsUrl = new URL("functions/v1", l);
    const c = `sb-${l.hostname.split(".")[0]}-auth-token`, u = {
      db: Gf,
      realtime: Yf,
      auth: Object.assign(Object.assign({}, Jf), { storageKey: c }),
      global: Kf
    }, d = np(n ?? {}, u);
    this.storageKey = (r = d.auth.storageKey) !== null && r !== void 0 ? r : "", this.headers = (o = d.global.headers) !== null && o !== void 0 ? o : {}, d.accessToken ? (this.accessToken = d.accessToken, this.auth = new Proxy({}, {
      get: (f, p) => {
        throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(p)} is not possible`);
      }
    })) : this.auth = this._initSupabaseAuthClient((a = d.auth) !== null && a !== void 0 ? a : {}, this.headers, d.global.fetch), this.fetch = ep(s, this._getAccessToken.bind(this), d.global.fetch), this.realtime = this._initRealtimeClient(Object.assign({ headers: this.headers, accessToken: this._getAccessToken.bind(this) }, d.realtime)), this.rest = new pf(new URL("rest/v1", l).href, {
      headers: this.headers,
      schema: d.db.schema,
      fetch: this.fetch
    }), this.storage = new Wf(this.storageUrl.href, this.headers, this.fetch, n == null ? void 0 : n.storage), d.accessToken || this._listenForAuthEvents();
  }
  /**
   * Supabase Functions allows you to deploy and invoke edge functions.
   */
  get functions() {
    return new Hh(this.functionsUrl.href, {
      headers: this.headers,
      customFetch: this.fetch
    });
  }
  /**
   * Perform a query on a table or a view.
   *
   * @param relation - The table or view name to query
   */
  from(e) {
    return this.rest.from(e);
  }
  // NOTE: signatures must be kept in sync with PostgrestClient.schema
  /**
   * Select a schema to query or perform an function (rpc) call.
   *
   * The schema needs to be on the list of exposed schemas inside Supabase.
   *
   * @param schema - The schema to query
   */
  schema(e) {
    return this.rest.schema(e);
  }
  // NOTE: signatures must be kept in sync with PostgrestClient.rpc
  /**
   * Perform a function call.
   *
   * @param fn - The function name to call
   * @param args - The arguments to pass to the function call
   * @param options - Named parameters
   * @param options.head - When set to `true`, `data` will not be returned.
   * Useful if you only need the count.
   * @param options.get - When set to `true`, the function will be called with
   * read-only access mode.
   * @param options.count - Count algorithm to use to count rows returned by the
   * function. Only applicable for [set-returning
   * functions](https://www.postgresql.org/docs/current/functions-srf.html).
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  rpc(e, s = {}, n = {}) {
    return this.rest.rpc(e, s, n);
  }
  /**
   * Creates a Realtime channel with Broadcast, Presence, and Postgres Changes.
   *
   * @param {string} name - The name of the Realtime channel.
   * @param {Object} opts - The options to pass to the Realtime channel.
   *
   */
  channel(e, s = { config: {} }) {
    return this.realtime.channel(e, s);
  }
  /**
   * Returns all Realtime channels.
   */
  getChannels() {
    return this.realtime.getChannels();
  }
  /**
   * Unsubscribes and removes Realtime channel from Realtime client.
   *
   * @param {RealtimeChannel} channel - The name of the Realtime channel.
   *
   */
  removeChannel(e) {
    return this.realtime.removeChannel(e);
  }
  /**
   * Unsubscribes and removes all Realtime channels from Realtime client.
   */
  removeAllChannels() {
    return this.realtime.removeAllChannels();
  }
  _getAccessToken() {
    var e, s;
    return Xp(this, void 0, void 0, function* () {
      if (this.accessToken)
        return yield this.accessToken();
      const { data: n } = yield this.auth.getSession();
      return (s = (e = n.session) === null || e === void 0 ? void 0 : e.access_token) !== null && s !== void 0 ? s : this.supabaseKey;
    });
  }
  _initSupabaseAuthClient({ autoRefreshToken: e, persistSession: s, detectSessionInUrl: n, storage: r, userStorage: o, storageKey: a, flowType: i, lock: l, debug: c }, u, d) {
    const f = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`
    };
    return new Yp({
      url: this.authUrl.href,
      headers: Object.assign(Object.assign({}, f), u),
      storageKey: a,
      autoRefreshToken: e,
      persistSession: s,
      detectSessionInUrl: n,
      storage: r,
      userStorage: o,
      flowType: i,
      lock: l,
      debug: c,
      fetch: d,
      // auth checks if there is a custom authorizaiton header using this flag
      // so it knows whether to return an error when getUser is called with no session
      hasCustomAuthorizationHeader: "Authorization" in this.headers
    });
  }
  _initRealtimeClient(e) {
    return new $f(this.realtimeUrl.href, Object.assign(Object.assign({}, e), { params: Object.assign({ apikey: this.supabaseKey }, e == null ? void 0 : e.params) }));
  }
  _listenForAuthEvents() {
    return this.auth.onAuthStateChange((s, n) => {
      this._handleTokenChanged(s, "CLIENT", n == null ? void 0 : n.access_token);
    });
  }
  _handleTokenChanged(e, s, n) {
    (e === "TOKEN_REFRESHED" || e === "SIGNED_IN") && this.changedAccessToken !== n ? this.changedAccessToken = n : e === "SIGNED_OUT" && (this.realtime.setAuth(), s == "STORAGE" && this.auth.signOut(), this.changedAccessToken = void 0);
  }
}
const Qp = (t, e, s) => new Zp(t, e, s);
function ev() {
  if (typeof window < "u" || typeof process > "u")
    return !1;
  const t = process.version;
  if (t == null)
    return !1;
  const e = t.match(/^v(\d+)\./);
  return e ? parseInt(e[1], 10) <= 18 : !1;
}
ev() && console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");
const rt = "aiworkspace.pro";
function tn(t) {
  return t === "localhost" || /^\d+\.\d+\.\d+\.\d+$/.test(t);
}
function si(t) {
  return t === rt || t.endsWith(`.${rt}`);
}
function Bs(t) {
  return document.cookie.split(";").map((n) => n.trim()).filter((n) => t.some((r) => n.startsWith(r + "=")));
}
function vt(t, e, s = 60 * 60 * 24 * 365) {
  const n = location.hostname;
  if (tn(n)) {
    document.cookie = `${t}=${encodeURIComponent(e)}; Path=/; Max-Age=${s}; SameSite=Lax`, console.log("[auth][cookie][set][local]", { host: n, name: t, valuePreview: e.slice(0, 20) + "..." }), console.log("[auth][cookie][after]", Bs([t]));
    return;
  }
  document.cookie = `${t}=${encodeURIComponent(e)}; Domain=.${rt}; Path=/; Max-Age=${s}; SameSite=Lax; Secure`, document.cookie = `${t}=; Path=/; Max-Age=0; SameSite=Lax`, console.log("[auth][cookie][set][apex]", { host: n, apex: rt, name: t, valuePreview: e.slice(0, 20) + "..." }), console.log("[auth][cookie][after]", Bs([t]));
}
function wt(t) {
  const e = new RegExp("(?:^|; )" + t.replace(/[$()*+.[\]?^{}|\\/-]/g, "\\$&") + "=([^;]*)"), s = document.cookie.match(e);
  return s ? decodeURIComponent(s[1]) : null;
}
function Ao(t) {
  const e = location.hostname;
  if (tn(e)) {
    document.cookie = `${t}=; Path=/; Max-Age=0; SameSite=Lax`, console.log("[auth][cookie][clear][local]", { host: e, name: t });
    return;
  }
  document.cookie = `${t}=; Domain=.${rt}; Path=/; Max-Age=0; SameSite=Lax; Secure`, document.cookie = `${t}=; Path=/; Max-Age=0; SameSite=Lax`, console.log("[auth][cookie][clear][apex]", { host: e, apex: rt, name: t }), console.log("[auth][cookie][after]", Bs([t]));
}
function ni(t) {
  const e = location.hostname;
  if (tn(e)) {
    console.log("[auth][cookie][promote] skip (local host)", e);
    return;
  }
  if (!si(e)) {
    console.log("[auth][cookie][promote] skip (not under apex)", { host: e, apex: rt });
    return;
  }
  console.log("[auth][cookie][promote] start", { host: e, apex: rt, names: t }), t.forEach((s) => {
    const n = wt(s);
    n ? vt(s, n, 60 * 60 * 24 * 365) : console.log("[auth][cookie][promote] missing", s);
  }), console.log("[auth][cookie][promote] done", Bs(t));
}
function eg() {
  return `${window.location.origin}/callback`;
}
function tg() {
  try {
    const t = new URLSearchParams(location.search), e = ["redirect", "redirect_to", "returnTo", "next"].find((n) => t.get(n));
    let s = e ? t.get(e) : "";
    if (s || (s = sessionStorage.getItem("post-login-redirect") || localStorage.getItem("post-login-redirect") || ""), s || (s = { VITE_SUPABASE_URL: "https://oqdnbpmmgntqtigstaow.supabase.co", VITE_SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xZG5icG1tZ250cXRpZ3N0YW93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0NTk2NDYsImV4cCI6MjA1MDAzNTY0Nn0.rn0nRY9xLgLt-ajiSPeG0PcdS9V-549C1yeqhcxxG40", VITE_APEX_DOMAIN: "aiworkspace.pro", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_DEFAULT_POST_LOGIN_URL || "/"), s.startsWith("http"))
      try {
        const n = new URL(s);
        return si(n.hostname) || tn(n.hostname) ? s : "/";
      } catch {
        return "/";
      }
    return s.startsWith("/") || (s = "/" + s), s;
  } catch {
    return "/";
  }
}
const We = "sb-access-token", He = "sb-refresh-token", ri = "sb-access-token", oi = "sb-refresh-token";
function Fs() {
  try {
    const t = wt(We), e = wt(He);
    t && localStorage.setItem(ri, t), e && localStorage.setItem(oi, e), console.log("[auth][cookie->ls] sync", {
      hasAccess: !!t,
      hasRefresh: !!e
    });
  } catch (t) {
    console.log("[auth][cookie->ls] error", t);
  }
}
function tv() {
  try {
    localStorage.removeItem(ri), localStorage.removeItem(oi), console.log("[auth][cookie->ls] cleared localStorage");
  } catch (t) {
    console.log("[auth][cookie->ls] clear error", t);
  }
}
async function sg() {
  try {
    ni([We, He]);
    const t = wt(We), e = wt(He);
    if (t && e) {
      const { data: { session: s } } = await ke.auth.getSession();
      if (!s) {
        const { data: n, error: r } = await ke.auth.setSession({ access_token: t, refresh_token: e });
        r ? console.log("[auth][restore] error", r) : console.log("[auth][restore] done", !!n.session);
      }
    } else
      console.log("[auth][restore] no cookies present");
    Fs();
  } catch (t) {
    console.log("[auth][restore] exception", t);
  }
}
function sv() {
  console.log("[auth][listener] Setting up auth state listener..."), ke.auth.onAuthStateChange(async (t, e) => {
    switch (console.log("[auth][listener] Auth state changed:", t, !!e), t) {
      case "TOKEN_REFRESHED":
        console.log("[auth][listener] Token refreshed successfully"), e && (vt(We, e.access_token, 60 * 60 * 24 * 365), vt(He, e.refresh_token, 60 * 60 * 24 * 365), Fs());
        break;
      case "SIGNED_IN":
        console.log("[auth][listener] User signed in"), e && (vt(We, e.access_token, 60 * 60 * 24 * 365), vt(He, e.refresh_token, 60 * 60 * 24 * 365), Fs());
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
  });
}
async function Po() {
  try {
    const { data: { session: t } } = await ke.auth.getSession();
    if (t && t.user)
      return console.log("[auth][restore] Active session found"), { success: !0, session: t };
    const e = wt(We), s = wt(He);
    if (e && s) {
      console.log("[auth][restore] Attempting to restore session from cookies...");
      const { data: n, error: r } = await ke.auth.setSession({
        access_token: e,
        refresh_token: s
      });
      if (r)
        return console.log("[auth][restore] Failed to restore session:", r.message), { success: !1, error: r };
      if (n.session)
        return console.log("[auth][restore] Session restored successfully"), vt(We, n.session.access_token, 60 * 60 * 24 * 365), vt(He, n.session.refresh_token, 60 * 60 * 24 * 365), Fs(), { success: !0, session: n.session };
    }
    return console.log("[auth][restore] No valid session or cookies found"), { success: !1, error: "No valid session or cookies" };
  } catch (t) {
    return console.log("[auth][restore] Exception during session restoration:", t), { success: !1, error: t };
  }
}
if (typeof window < "u")
  try {
    ni([We, He]);
  } catch (t) {
    console.log("[auth][cookie][promote] error (pre-init)", t);
  }
const pr = "https://oqdnbpmmgntqtigstaow.supabase.co", vr = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xZG5icG1tZ250cXRpZ3N0YW93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0NTk2NDYsImV4cCI6MjA1MDAzNTY0Nn0.rn0nRY9xLgLt-ajiSPeG0PcdS9V-549C1yeqhcxxG40", ke = Qp(pr, vr, {
  auth: {
    // Enable automatic token refresh
    autoRefreshToken: !0,
    // Persist session in localStorage
    persistSession: !0,
    // Detect session in URL (for OAuth callbacks)
    detectSessionInUrl: !0
  }
});
typeof window < "u" && sv();
console.log("Supabase Configuration:", {
  url: pr,
  hasKey: !!vr,
  autoRefreshToken: !0,
  persistSession: !0
});
console.log("URL:", pr.replace(/https:\/\/(.+)\.supabase\.co/, "https://*****.supabase.co"));
console.log("Key configured:", !vr.includes("your-anon-key"));
console.log("Environment mode:", "production");
function nv() {
  const t = R({
    user: null,
    isAuthenticated: !1,
    isLoading: !0
  }), e = R(null), s = C(() => t.value.isAuthenticated), n = C(() => t.value.user), r = C(() => t.value.isLoading), o = async () => {
    var u, d, f, p, h, g, b, v, k, m, A, L, j, P, H;
    try {
      const { data: { session: q } } = await ke.auth.getSession();
      if (q && q.user) {
        const w = q.user, O = {
          id: w.id,
          name: ((u = w.user_metadata) == null ? void 0 : u.name) || ((d = w.user_metadata) == null ? void 0 : d.user_name) || ((f = w.user_metadata) == null ? void 0 : f.full_name) || ((p = w.email) == null ? void 0 : p.split("@")[0]) || "User",
          email: w.email,
          avatar_url: ((h = w.user_metadata) == null ? void 0 : h.avatar_url) || null,
          user_metadata: w.user_metadata
        };
        return t.value = {
          user: O,
          isAuthenticated: !0,
          isLoading: !1
        }, e.value = {
          user: O,
          access_token: q.access_token,
          refresh_token: q.refresh_token
        }, { success: !0, session: e.value };
      }
      console.log("[auth][enhanced] No active session, attempting to restore from cookies...");
      const E = await Po();
      if (E.success && E.session) {
        console.log("[auth][enhanced] Session restored successfully");
        const w = E.session.user, O = {
          id: w.id,
          name: ((g = w.user_metadata) == null ? void 0 : g.name) || ((b = w.user_metadata) == null ? void 0 : b.user_name) || ((v = w.user_metadata) == null ? void 0 : v.full_name) || ((k = w.email) == null ? void 0 : k.split("@")[0]) || "User",
          email: w.email,
          avatar_url: ((m = w.user_metadata) == null ? void 0 : m.avatar_url) || null,
          user_metadata: w.user_metadata
        };
        return t.value = {
          user: O,
          isAuthenticated: !0,
          isLoading: !1
        }, e.value = E.session, { success: !0, session: e.value };
      } else
        console.log("[auth][enhanced] Failed to restore session:", E.error);
    } catch (q) {
      console.error("Error getting Supabase session:", q);
      try {
        const E = await Po();
        if (E.success && E.session) {
          console.log("[auth][enhanced] Session restored after error");
          const w = E.session.user, O = {
            id: w.id,
            name: ((A = w.user_metadata) == null ? void 0 : A.name) || ((L = w.user_metadata) == null ? void 0 : L.user_name) || ((j = w.user_metadata) == null ? void 0 : j.full_name) || ((P = w.email) == null ? void 0 : P.split("@")[0]) || "User",
            email: w.email,
            avatar_url: ((H = w.user_metadata) == null ? void 0 : H.avatar_url) || null,
            user_metadata: w.user_metadata
          };
          return t.value = {
            user: O,
            isAuthenticated: !0,
            isLoading: !1
          }, e.value = E.session, { success: !0, session: e.value };
        }
      } catch (E) {
        console.error("Error restoring session:", E);
      }
    }
    return t.value = {
      user: null,
      isAuthenticated: !1,
      isLoading: !1
    }, e.value = null, { success: !1, error: "No valid session found" };
  }, a = async () => {
    try {
      await ke.auth.signOut(), Ao(We), Ao(He), tv(), t.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1
      }, e.value = null, console.log("[auth][enhanced] User logged out successfully");
    } catch (u) {
      console.error("Error during logout:", u), t.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1
      }, e.value = null;
    }
  }, i = async (u, d) => {
    var f, p, h, g, b;
    try {
      t.value.isLoading = !0;
      const { data: v, error: k } = await ke.auth.signInWithPassword({
        email: u,
        password: d
      });
      if (k)
        throw k;
      if (v.session) {
        const m = v.session.user, A = {
          id: m.id,
          name: ((f = m.user_metadata) == null ? void 0 : f.name) || ((p = m.user_metadata) == null ? void 0 : p.user_name) || ((h = m.user_metadata) == null ? void 0 : h.full_name) || ((g = m.email) == null ? void 0 : g.split("@")[0]) || "User",
          email: m.email,
          avatar_url: ((b = m.user_metadata) == null ? void 0 : b.avatar_url) || null,
          user_metadata: m.user_metadata
        };
        return t.value = {
          user: A,
          isAuthenticated: !0,
          isLoading: !1
        }, e.value = {
          user: A,
          access_token: v.session.access_token,
          refresh_token: v.session.refresh_token
        }, { success: !0, session: e.value };
      }
      return { success: !1, error: "No session returned" };
    } catch (v) {
      return console.error("Sign in error:", v), t.value.isLoading = !1, { success: !1, error: v };
    }
  }, l = async (u, d, f) => {
    var p, h, g, b, v;
    try {
      t.value.isLoading = !0;
      const { data: k, error: m } = await ke.auth.signUp({
        email: u,
        password: d,
        options: {
          data: f
        }
      });
      if (m)
        throw m;
      if (k.session) {
        const A = k.session.user, L = {
          id: A.id,
          name: ((p = A.user_metadata) == null ? void 0 : p.name) || ((h = A.user_metadata) == null ? void 0 : h.user_name) || ((g = A.user_metadata) == null ? void 0 : g.full_name) || ((b = A.email) == null ? void 0 : b.split("@")[0]) || "User",
          email: A.email,
          avatar_url: ((v = A.user_metadata) == null ? void 0 : v.avatar_url) || null,
          user_metadata: A.user_metadata
        };
        return t.value = {
          user: L,
          isAuthenticated: !0,
          isLoading: !1
        }, e.value = {
          user: L,
          access_token: k.session.access_token,
          refresh_token: k.session.refresh_token
        }, { success: !0, session: e.value };
      }
      return { success: !1, error: "No session returned" };
    } catch (k) {
      return console.error("Sign up error:", k), t.value.isLoading = !1, { success: !1, error: k };
    }
  }, c = async () => {
    await o();
  };
  return ye(() => {
    c();
  }), {
    // State
    authState: t,
    currentSession: e,
    // Computed
    isAuthenticated: s,
    currentUser: n,
    isLoading: r,
    // Methods
    loadUserInfo: o,
    logout: a,
    signIn: i,
    signUp: l,
    checkAuth: c
  };
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Jt;
const zs = (t) => Jt = t, rv = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function kt(t) {
  return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function";
}
var rs;
(function(t) {
  t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function";
})(rs || (rs = {}));
const Yt = typeof window < "u";
function ai(t, e) {
  for (const s in e) {
    const n = e[s];
    if (!(s in t))
      continue;
    const r = t[s];
    kt(r) && kt(n) && !mt(n) && !qn(n) ? t[s] = ai(r, n) : t[s] = n;
  }
  return t;
}
const ii = () => {
};
function $o(t, e, s, n = ii) {
  t.push(e);
  const r = () => {
    const o = t.indexOf(e);
    o > -1 && (t.splice(o, 1), n());
  };
  return !s && Mo() && zn(r), r;
}
function $t(t, ...e) {
  t.slice().forEach((s) => {
    s(...e);
  });
}
const ov = (t) => t(), xo = Symbol(), wn = Symbol();
function Bn(t, e) {
  t instanceof Map && e instanceof Map ? e.forEach((s, n) => t.set(n, s)) : t instanceof Set && e instanceof Set && e.forEach(t.add, t);
  for (const s in e) {
    if (!e.hasOwnProperty(s))
      continue;
    const n = e[s], r = t[s];
    kt(r) && kt(n) && t.hasOwnProperty(s) && !mt(n) && !qn(n) ? t[s] = Bn(r, n) : t[s] = n;
  }
  return t;
}
const av = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function iv(t) {
  return !kt(t) || !t.hasOwnProperty(av);
}
const { assign: be } = Object;
function jo(t) {
  return !!(mt(t) && t.effect);
}
function Ro(t, e, s, n) {
  const { state: r, actions: o, getters: a } = e, i = s.state.value[t];
  let l;
  function c() {
    !i && (process.env.NODE_ENV === "production" || !n) && (s.state.value[t] = r ? r() : {});
    const u = process.env.NODE_ENV !== "production" && n ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      kn(R(r ? r() : {}).value)
    ) : kn(s.state.value[t]);
    return be(u, o, Object.keys(a || {}).reduce((d, f) => (process.env.NODE_ENV !== "production" && f in u && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${f}" in store "${t}".`), d[f] = et(C(() => {
      zs(s);
      const p = s._s.get(t);
      return a[f].call(p, p);
    })), d), {}));
  }
  return l = Fn(t, c, e, s, n, !0), l;
}
function Fn(t, e, s = {}, n, r, o) {
  let a;
  const i = be({ actions: {} }, s);
  if (process.env.NODE_ENV !== "production" && !n._e.active)
    throw new Error("Pinia destroyed");
  const l = { deep: !0 };
  process.env.NODE_ENV !== "production" && !jc && (l.onTrigger = (E) => {
    c ? p = E : c == !1 && !P._hotUpdating && (Array.isArray(p) ? p.push(E) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let c, u, d = [], f = [], p;
  const h = n.state.value[t];
  !o && !h && (process.env.NODE_ENV === "production" || !r) && (n.state.value[t] = {});
  const g = R({});
  let b;
  function v(E) {
    let w;
    c = u = !1, process.env.NODE_ENV !== "production" && (p = []), typeof E == "function" ? (E(n.state.value[t]), w = {
      type: rs.patchFunction,
      storeId: t,
      events: p
    }) : (Bn(n.state.value[t], E), w = {
      type: rs.patchObject,
      payload: E,
      storeId: t,
      events: p
    });
    const O = b = Symbol();
    oe().then(() => {
      b === O && (c = !0);
    }), u = !0, $t(d, w, n.state.value[t]);
  }
  const k = o ? function() {
    const { state: w } = s, O = w ? w() : {};
    this.$patch((Z) => {
      be(Z, O);
    });
  } : (
    /* istanbul ignore next */
    process.env.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${t}" is built using the setup syntax and does not implement $reset().`);
    } : ii
  );
  function m() {
    a.stop(), d = [], f = [], n._s.delete(t);
  }
  const A = (E, w = "") => {
    if (xo in E)
      return E[wn] = w, E;
    const O = function() {
      zs(n);
      const Z = Array.from(arguments), ge = [], xe = [];
      function Me(_) {
        ge.push(_);
      }
      function W(_) {
        xe.push(_);
      }
      $t(f, {
        args: Z,
        name: O[wn],
        store: P,
        after: Me,
        onError: W
      });
      let I;
      try {
        I = E.apply(this && this.$id === t ? this : P, Z);
      } catch (_) {
        throw $t(xe, _), _;
      }
      return I instanceof Promise ? I.then((_) => ($t(ge, _), _)).catch((_) => ($t(xe, _), Promise.reject(_))) : ($t(ge, I), I);
    };
    return O[xo] = !0, O[wn] = w, O;
  }, L = /* @__PURE__ */ et({
    actions: {},
    getters: {},
    state: [],
    hotState: g
  }), j = {
    _p: n,
    // _s: scope,
    $id: t,
    $onAction: $o.bind(null, f),
    $patch: v,
    $reset: k,
    $subscribe(E, w = {}) {
      const O = $o(d, E, w.detached, () => Z()), Z = a.run(() => te(() => n.state.value[t], (ge) => {
        (w.flush === "sync" ? u : c) && E({
          storeId: t,
          type: rs.direct,
          events: p
        }, ge);
      }, be({}, l, w)));
      return O;
    },
    $dispose: m
  }, P = Hn(process.env.NODE_ENV !== "production" || process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && Yt ? be(
    {
      _hmrPayload: L,
      _customProperties: et(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    j
    // must be added later
    // setupStore
  ) : j);
  n._s.set(t, P);
  const q = (n._a && n._a.runWithContext || ov)(() => n._e.run(() => (a = bi()).run(() => e({ action: A }))));
  for (const E in q) {
    const w = q[E];
    if (mt(w) && !jo(w) || qn(w))
      process.env.NODE_ENV !== "production" && r ? ms(g.value, E, gt(q, E)) : o || (h && iv(w) && (mt(w) ? w.value = h[E] : Bn(w, h[E])), n.state.value[t][E] = w), process.env.NODE_ENV !== "production" && L.state.push(E);
    else if (typeof w == "function") {
      const O = process.env.NODE_ENV !== "production" && r ? w : A(w, E);
      q[E] = O, process.env.NODE_ENV !== "production" && (L.actions[E] = w), i.actions[E] = w;
    } else
      process.env.NODE_ENV !== "production" && jo(w) && (L.getters[E] = o ? (
        // @ts-expect-error
        s.getters[E]
      ) : w, Yt && (q._getters || // @ts-expect-error: same
      (q._getters = et([]))).push(E));
  }
  if (be(P, q), be(wi(P), q), Object.defineProperty(P, "$state", {
    get: () => process.env.NODE_ENV !== "production" && r ? g.value : n.state.value[t],
    set: (E) => {
      if (process.env.NODE_ENV !== "production" && r)
        throw new Error("cannot set hotState");
      v((w) => {
        be(w, E);
      });
    }
  }), process.env.NODE_ENV !== "production" && (P._hotUpdate = et((E) => {
    P._hotUpdating = !0, E._hmrPayload.state.forEach((w) => {
      if (w in P.$state) {
        const O = E.$state[w], Z = P.$state[w];
        typeof O == "object" && kt(O) && kt(Z) ? ai(O, Z) : E.$state[w] = Z;
      }
      ms(P, w, gt(E.$state, w));
    }), Object.keys(P.$state).forEach((w) => {
      w in E.$state || an(P, w);
    }), c = !1, u = !1, n.state.value[t] = gt(E._hmrPayload, "hotState"), u = !0, oe().then(() => {
      c = !0;
    });
    for (const w in E._hmrPayload.actions) {
      const O = E[w];
      ms(P, w, A(O, w));
    }
    for (const w in E._hmrPayload.getters) {
      const O = E._hmrPayload.getters[w], Z = o ? (
        // special handling of options api
        C(() => (zs(n), O.call(P, P)))
      ) : O;
      ms(P, w, Z);
    }
    Object.keys(P._hmrPayload.getters).forEach((w) => {
      w in E._hmrPayload.getters || an(P, w);
    }), Object.keys(P._hmrPayload.actions).forEach((w) => {
      w in E._hmrPayload.actions || an(P, w);
    }), P._hmrPayload = E._hmrPayload, P._getters = E._getters, P._hotUpdating = !1;
  })), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && Yt) {
    const E = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((w) => {
      Object.defineProperty(P, w, be({ value: P[w] }, E));
    });
  }
  return n._p.forEach((E) => {
    if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && Yt) {
      const w = a.run(() => E({
        store: P,
        app: n._a,
        pinia: n,
        options: i
      }));
      Object.keys(w || {}).forEach((O) => P._customProperties.add(O)), be(P, w);
    } else
      be(P, a.run(() => E({
        store: P,
        app: n._a,
        pinia: n,
        options: i
      })));
  }), process.env.NODE_ENV !== "production" && P.$state && typeof P.$state == "object" && typeof P.$state.constructor == "function" && !P.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${P.$id}".`), h && o && s.hydrate && s.hydrate(P.$state, h), c = !0, u = !0, P;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function lv(t, e, s) {
  let n, r;
  const o = typeof e == "function";
  if (typeof t == "string")
    n = t, r = o ? s : e;
  else if (r = t, n = t.id, process.env.NODE_ENV !== "production" && typeof n != "string")
    throw new Error('[🍍]: "defineStore()" must be passed a store id as its first argument.');
  function a(i, l) {
    const c = _i();
    if (i = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && Jt && Jt._testing ? null : i) || (c ? de(rv, null) : null), i && zs(i), process.env.NODE_ENV !== "production" && !Jt)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    i = Jt, i._s.has(n) || (o ? Fn(n, e, r, i) : Ro(n, r, i), process.env.NODE_ENV !== "production" && (a._pinia = i));
    const u = i._s.get(n);
    if (process.env.NODE_ENV !== "production" && l) {
      const d = "__hot:" + n, f = o ? Fn(d, e, r, i, !0) : Ro(d, be({}, r), i, !0);
      l._hotUpdate(f), delete i.state.value[d], i._s.delete(d);
    }
    if (process.env.NODE_ENV !== "production" && Yt) {
      const d = Ee();
      if (d && d.proxy && // avoid adding stores that are just built for hot module replacement
      !l) {
        const f = d.proxy, p = "_pStores" in f ? f._pStores : f._pStores = {};
        p[n] = u;
      }
    }
    return u;
  }
  return a.$id = n, a;
}
const cv = /* @__PURE__ */ lv("workspace", () => {
  const t = R(null), e = R([]), s = R(null), n = (c) => {
    t.value = c, localStorage.setItem("current_workspace", JSON.stringify(c));
  }, r = (c) => {
    e.value = c, localStorage.setItem("available_workspaces", JSON.stringify(c));
  };
  return {
    currentWorkspace: t,
    workspaces: e,
    user: s,
    setCurrentWorkspace: n,
    setWorkspaces: r,
    setUser: (c) => {
      s.value = c, localStorage.setItem("user_info", JSON.stringify(c));
    },
    loadPersistedData: () => {
      const c = localStorage.getItem("current_workspace");
      if (c)
        try {
          t.value = JSON.parse(c);
        } catch (f) {
          console.error("Error loading persisted workspace:", f);
        }
      const u = localStorage.getItem("available_workspaces");
      if (u)
        try {
          e.value = JSON.parse(u);
        } catch (f) {
          console.error("Error loading persisted workspaces:", f);
        }
      const d = localStorage.getItem("user_info");
      if (d)
        try {
          s.value = JSON.parse(d);
        } catch (f) {
          console.error("Error loading persisted user:", f);
        }
    },
    clearData: () => {
      t.value = null, e.value = [], s.value = null, localStorage.removeItem("current_workspace"), localStorage.removeItem("available_workspaces"), localStorage.removeItem("user_info");
    },
    loadWorkspaces: async (c = !1) => {
      try {
        const { data: { user: u } } = await ke.auth.getUser();
        if (!u)
          return [];
        let d = ke.from("workspaces").select(`
          id, title, description, parent_workspace_id, created_by, archived, created_at,
          workspace_access!inner ( access_type, shared_with_user_id ),
          workspace_activities!left ( updated_at )
        `).eq("workspace_access.shared_with_user_id", u.id);
        c || (d = d.eq("archived", !1));
        const { data: f, error: p } = await d;
        if (p)
          throw p;
        const h = /* @__PURE__ */ new Map();
        (f || []).forEach((m) => {
          (m.workspace_access || []).forEach((A) => {
            A.shared_with_user_id === u.id && h.set(m.id, A);
          });
        });
        const g = [...new Set(
          (f || []).filter((m) => m.parent_workspace_id).map((m) => m.parent_workspace_id).filter((m) => !h.has(m))
        )];
        let b = [];
        if (g.length) {
          let m = ke.from("workspaces").select("id, title, description, parent_workspace_id, created_by, archived, created_at").in("id", g);
          c || (m = m.eq("archived", !1));
          const { data: A, error: L } = await m;
          if (L)
            throw L;
          b = A || [];
        }
        const k = [...f || [], ...b].map((m) => {
          var A, L, j;
          return {
            id: m.id,
            title: m.title,
            description: m.description || "No description",
            parent_workspace_id: m.parent_workspace_id,
            created_by: m.created_by,
            archived: m.archived,
            created_at: m.created_at,
            latest_activity: ((L = (A = m.workspace_activities) == null ? void 0 : A[0]) == null ? void 0 : L.updated_at) || m.created_at,
            hasAccess: h.has(m.id),
            accessType: ((j = h.get(m.id)) == null ? void 0 : j.access_type) || null
          };
        });
        return k.sort((m, A) => new Date(A.latest_activity) - new Date(m.latest_activity)), r(k), k;
      } catch (u) {
        return console.error("loadWorkspaces error", u), [];
      }
    }
  };
}), uv = { class: "aiworkspace-header" }, dv = {
  key: 0,
  class: "header-content header-loading"
}, hv = {
  key: 1,
  class: "header-content header-fallback"
}, fv = {
  key: 2,
  class: "header-content"
}, pv = { class: "header-left" }, vv = { class: "logo-section" }, gv = {
  href: "/",
  class: "logo"
}, mv = ["src"], yv = {
  key: 1,
  class: "text-logo"
}, _v = {
  key: 0,
  class: "header-center"
}, bv = { class: "main-navigation" }, wv = { class: "nav-item" }, kv = ["href", "onClick"], Sv = { class: "workspace-icon" }, Ev = {
  key: 1,
  class: "nav-divider"
}, Tv = { class: "nav-item" }, Cv = ["href", "onClick"], Ov = { class: "header-right" }, Iv = { class: "user-profile" }, Av = { class: "user-info" }, Pv = { class: "user-name" }, $v = { class: "user-avatar" }, xv = ["src", "alt"], jv = {
  key: 1,
  class: "avatar-placeholder"
}, Rv = {
  key: 3,
  class: "unauth-message"
}, Nv = { class: "workspace-list" }, Lv = ["onClick"], Mv = { class: "workspace-icon" }, Uv = { class: "workspace-details" }, Dv = { class: "workspace-members" }, Bv = {
  key: 0,
  class: "current-indicator"
}, Kt = 50, Fv = /* @__PURE__ */ G({
  __name: "AIWorkspaceHeader",
  props: {
    showUserMenu: { type: Boolean, default: !0 },
    showNotifications: { type: Boolean },
    customLogo: { default: "" },
    customLinks: { default: () => [] },
    showWorkspaceSelector: { type: Boolean, default: !0 },
    showSecondaryNavigation: { type: Boolean, default: !0 },
    currentWorkspaceId: {},
    onWorkspaceChange: {},
    onLogout: {},
    onLogin: {},
    onProfileClick: {},
    onSettingsClick: {}
  },
  emits: ["workspaceChange", "logout", "login", "profileClick", "settingsClick"],
  setup(t, { emit: e }) {
    const s = t, n = e, { authState: r, logout: o } = nv(), a = () => {
      try {
        return cv();
      } catch {
        return console.warn("[AIWorkspaceHeader] Pinia not initialized yet, using fallback state"), null;
      }
    }, i = () => {
      try {
        return typeof window < "u" ? !!window.__PINIA__ || !!window.Pinia : !1;
      } catch {
        return !1;
      }
    }, l = R(a()), c = C(() => !!l.value), u = R(0), d = () => {
      if (!l.value && u.value < Kt) {
        if (i()) {
          const I = a();
          if (I) {
            l.value = I, console.log("[AIWorkspaceHeader] Pinia store initialized successfully");
            return;
          }
        }
        u.value++, setTimeout(d, 100);
      } else
        u.value >= Kt && console.warn("[AIWorkspaceHeader] Pinia initialization failed after maximum retries, using fallback mode");
    };
    ye(() => {
      l.value || d();
    }), te(c, (I) => {
      !I && u.value < Kt && d();
    });
    const f = R(!1), p = R([]), h = R([]), g = R({
      name: "",
      email: "",
      avatar_url: null,
      initials: ""
    }), b = R([]), v = R([]), k = C(() => r.value.isAuthenticated), m = C(() => l.value ? l.value.currentWorkspace : null), A = R([
      { label: "Dashboard", key: "dashboard", url: "/dashboard" },
      { label: "Goals", key: "goals", url: "/goals" },
      { label: "Tasks", key: "tasks", url: "/tasks" },
      { label: "Events", key: "events", url: "/events" },
      { label: "Drive", key: "files", url: "/files" },
      { label: "Outlines", key: "outlines", url: "/outlines" },
      { label: "Communications", key: "communications", url: "/communications" },
      { label: "Canvas", key: "canvas", url: "/canvas" },
      { label: "AI Phone", key: "ai_phone", url: "/ai_phone" },
      { label: "AI Intake", key: "ai_intake", url: "/ai_intake" },
      { label: "AI Fax", key: "ai_fax", url: "/ai_fax" },
      { label: "AI Portfolios", key: "ai-portfolios", url: "/ai-portfolios" },
      { label: "AI Fund Analyst", key: "ai_fund_analyst", url: "/ai_fund_analyst" },
      { label: "Contacts", key: "contacts", url: "/contacts" },
      { label: "Settings", key: "settings", url: "/settings" }
    ]), L = C(() => "Dashboard"), j = (I) => {
      const _ = /* @__PURE__ */ new Map();
      I.forEach((re) => {
        _.set(re.id, { ...re, children: [] });
      });
      const x = [];
      _.forEach((re) => {
        re.parent_workspace_id && _.has(re.parent_workspace_id) ? _.get(re.parent_workspace_id).children.push(re) : x.push(re);
      });
      const K = (re) => {
        re.sort((_e, Ce) => _e.title.localeCompare(Ce.title)), re.forEach((_e) => {
          _e.children && K(_e.children);
        });
      };
      return K(x), x;
    }, P = (I, _ = 0, x = []) => (I.forEach((K) => {
      x.push({ ...K, level: _ }), K.children && K.children.length && P(K.children, _ + 1, x);
    }), x), H = async () => {
      var I, _, x;
      try {
        const K = await ((I = l.value) == null ? void 0 : I.loadWorkspaces());
        if (b.value = j(K || []), v.value = P(b.value), h.value = v.value, p.value = v.value, s.currentWorkspaceId) {
          const re = v.value.find((_e) => {
            var Ce;
            return _e.id.toString() === ((Ce = s.currentWorkspaceId) == null ? void 0 : Ce.toString());
          });
          re && ((_ = l.value) == null || _.setCurrentWorkspace(re));
        } else
          !m.value && v.value.length && ((x = l.value) == null || x.setCurrentWorkspace(v.value[0]));
      } catch (K) {
        console.error("loadWorkspaces (header) error", K);
      }
    }, q = (I) => {
      if (console.log("Navigation command:", I), I === "all-workspace") {
        window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
        return;
      }
      if (I.startsWith("workspace-")) {
        const _ = I.replace("workspace-", ""), x = h.value.find((K) => K.id === parseInt(_));
        x && Z(x);
        return;
      }
    }, E = (I) => {
      const _ = m.value;
      switch (I.key) {
        case "dashboard":
          _ ? window.location.href = `/single-workspace/${_.id}/dashboard` : window.location.href = "/";
          break;
        case "outlines":
          if (_) {
            const x = `https://outline.aiworkspace.pro/single-workspace/${_.id}/outlines`;
            window.location.href = x;
          } else
            window.location.href = "https://outline.aiworkspace.pro";
          break;
        case "canvas":
          if (_) {
            const x = `https://canvas.aiworkspace.pro/single-workspace/${_.id}/canvas`;
            window.location.href = x;
          } else
            window.location.href = "https://canvas.aiworkspace.pro";
          break;
        case "files":
          if (_) {
            const x = `https://drive.aiworkspace.pro/single-workspace/${_.id}/files`;
            window.location.href = x;
          } else
            window.location.href = "https://drive.aiworkspace.pro";
          break;
        case "tasks":
          if (_) {
            const x = `https://tasks.aiworkspace.pro/single-workspace/${_.id}/tasks`;
            window.location.href = x;
          } else
            window.location.href = "https://tasks.aiworkspace.pro";
          break;
        case "ai-portfolios":
          if (_) {
            const x = `https://spreadsheet.aiworkspace.pro/single-workspace/${_.id}/ai-portfolios`;
            window.location.href = x;
          } else
            window.location.href = "https://spreadsheet.aiworkspace.pro";
          break;
        default:
          if (_) {
            const x = `https://app.aiworkspace.pro/single-workspace/${_.id}/${I.key}`;
            window.location.href = x;
          } else {
            const x = `https://app.aiworkspace.pro/${I.key}`;
            window.location.href = x;
          }
          break;
      }
    }, w = (I) => {
      const _ = m.value;
      switch (I.key) {
        case "dashboard":
          return _ ? `/single-workspace/${_.id}/dashboard` : "/";
        case "ai-portfolios":
          return _ ? `https://spreadsheet.aiworkspace.pro/single-workspace/${_.id}/ai-portfolios` : "https://spreadsheet.aiworkspace.pro";
        case "outlines":
          return _ ? `https://outline.aiworkspace.pro/single-workspace/${_.id}/outlines` : "https://outline.aiworkspace.pro";
        case "canvas":
          return _ ? `https://canvas.aiworkspace.pro/single-workspace/${_.id}/canvas` : "https://canvas.aiworkspace.pro";
        case "files":
          return _ ? `https://drive.aiworkspace.pro/single-workspace/${_.id}/files` : "https://drive.aiworkspace.pro";
        case "tasks":
          return _ ? `https://tasks.aiworkspace.pro/single-workspace/${_.id}/tasks` : "https://tasks.aiworkspace.pro";
        default:
          return _ ? `https://app.aiworkspace.pro/single-workspace/${_.id}/${I.key}` : `https://app.aiworkspace.pro/${I.key}`;
      }
    }, O = (I) => {
      switch (I) {
        case "profile":
          s.onProfileClick ? s.onProfileClick() : Ht.info("Profile settings coming soon");
          break;
        case "workspaces":
          f.value = !0;
          break;
        case "logout":
          xe();
          break;
      }
    }, Z = (I) => {
      var _;
      (_ = l.value) == null || _.setCurrentWorkspace(I), f.value = !1, n("workspaceChange", I), Ht.success(`Switched to ${I.title}`);
    }, ge = () => {
      ho.prompt("Enter workspace name:", "Create New Workspace", {
        confirmButtonText: "Create",
        cancelButtonText: "Cancel",
        inputPattern: /\S/,
        inputErrorMessage: "Workspace name cannot be empty"
      }).then(({ value: I }) => {
        var x;
        const _ = {
          id: Date.now(),
          title: I,
          description: "New workspace",
          archived: !1,
          created_by: "",
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          latest_activity: (/* @__PURE__ */ new Date()).toISOString(),
          hasAccess: !0,
          accessType: "edit"
        };
        p.value.push(_), (x = l.value) == null || x.setWorkspaces(p.value), Z(_), Ht.success(`Created workspace: ${I}`);
      }).catch(() => {
      });
    }, xe = () => {
      ho.confirm(
        "Are you sure you want to sign out?",
        "Sign Out",
        {
          confirmButtonText: "Sign Out",
          cancelButtonText: "Cancel",
          type: "warning"
        }
      ).then(async () => {
        var I;
        (I = l.value) == null || I.clearData(), await o(), n("logout"), Ht.success("Signed out successfully");
      }).catch(() => {
      });
    }, Me = async () => {
      var I, _;
      if (r.value.user) {
        const x = r.value.user;
        g.value = {
          name: x.name || ((I = x.email) == null ? void 0 : I.split("@")[0]) || "User",
          email: x.email || "",
          avatar_url: x.avatar_url || null,
          initials: (x.name || ((_ = x.email) == null ? void 0 : _.split("@")[0]) || "U").split(" ").map((K) => K[0]).join("").toUpperCase().substring(0, 2)
        }, s.showWorkspaceSelector && await H();
      }
    };
    te(() => r.value.user, (I) => {
      var _;
      I ? Me() : (g.value = { name: "", email: "", avatar_url: null, initials: "" }, (_ = l.value) == null || _.clearData());
    }), te(() => s.currentWorkspaceId, (I) => {
      var _;
      if (I && v.value.length) {
        const x = v.value.find((K) => K.id.toString() === I.toString());
        x && ((_ = l.value) == null || _.setCurrentWorkspace(x));
      }
    }), ye(async () => {
      k.value && await Me();
    });
    const W = () => {
      u.value = 0, d(), Ht.success("Manual Pinia retry initiated.");
    };
    return (I, _) => {
      const x = we("el-icon"), K = we("el-dropdown-item"), re = we("el-tag"), _e = we("el-dropdown-menu"), Ce = we("el-dropdown"), Vt = we("el-button"), it = we("el-dialog");
      return S(), N("header", uv, [
        !c.value && u.value < Kt ? (S(), N("div", dv, [..._[6] || (_[6] = [
          sn('<div class="header-left" data-v-cdeebf53><div class="logo-section" data-v-cdeebf53><a href="/" class="logo" data-v-cdeebf53><div class="text-logo" data-v-cdeebf53><span class="logo-text" data-v-cdeebf53>AI Workspace</span></div></a></div></div><div class="header-center" data-v-cdeebf53><span class="loading-text" data-v-cdeebf53>Initializing...</span></div>', 2)
        ])])) : !c.value && u.value >= Kt ? (S(), N("div", hv, [
          _[8] || (_[8] = sn('<div class="header-left" data-v-cdeebf53><div class="logo-section" data-v-cdeebf53><a href="/" class="logo" data-v-cdeebf53><div class="text-logo" data-v-cdeebf53><span class="logo-text" data-v-cdeebf53>AI Workspace</span></div></a></div></div>', 1)),
          $("div", { class: "header-center" }, [
            _[7] || (_[7] = $("span", { class: "fallback-text" }, "Header Ready (Fallback Mode)", -1)),
            $("button", {
              onClick: W,
              class: "retry-button"
            }, "Retry Pinia")
          ]),
          _[9] || (_[9] = sn('<div class="header-right" data-v-cdeebf53><div class="user-profile" data-v-cdeebf53><div class="user-info" data-v-cdeebf53><span class="user-name" data-v-cdeebf53>User</span></div><div class="user-avatar" data-v-cdeebf53><span class="avatar-placeholder" data-v-cdeebf53>U</span></div></div></div>', 1))
        ])) : k.value ? (S(), N("div", fv, [
          $("div", pv, [
            $("div", vv, [
              $("a", gv, [
                I.customLogo ? (S(), N("img", {
                  key: 0,
                  src: I.customLogo,
                  alt: "AIWorkspace",
                  class: "logo-image"
                }, null, 8, mv)) : (S(), N("div", yv, [..._[10] || (_[10] = [
                  $("span", { class: "logo-text" }, "AI Workspace", -1)
                ])]))
              ])
            ])
          ]),
          I.showSecondaryNavigation ? (S(), N("div", _v, [
            $("nav", bv, [
              I.showWorkspaceSelector ? (S(), F(Ce, {
                key: 0,
                onCommand: q,
                trigger: "hover"
              }, {
                dropdown: U(() => [
                  X(_e, { class: "workspace-tree-dropdown" }, {
                    default: U(() => [
                      X(K, { command: "all-workspace" }, {
                        default: U(() => [..._[11] || (_[11] = [
                          $("a", {
                            href: "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard",
                            class: "nav-link"
                          }, [
                            $("div", { class: "workspace-dropdown-item" }, [
                              $("span", { class: "workspace-icon" }, "🌐"),
                              $("span", null, "All workspace")
                            ])
                          ], -1)
                        ])]),
                        _: 1
                      }),
                      v.value.length > 0 ? (S(), F(K, {
                        key: 0,
                        divided: "",
                        disabled: ""
                      })) : B("", !0),
                      (S(!0), N(st, null, nn(v.value, (V) => (S(), F(K, {
                        key: V.id,
                        command: `workspace-${V.id}`
                      }, {
                        default: U(() => {
                          var Ke;
                          return [
                            $("a", {
                              href: `/single-workspace/${V.id}/dashboard`,
                              class: "nav-link",
                              onClick: Pe((Ue) => Z(V), ["prevent"])
                            }, [
                              $("div", {
                                class: "workspace-dropdown-item",
                                style: yt({ paddingLeft: (V.level || 0) * 16 + "px" })
                              }, [
                                $("span", Sv, Q(V.children && V.children.length ? "📁" : "📄"), 1),
                                $("span", null, Q(V.title), 1),
                                V.id === ((Ke = m.value) == null ? void 0 : Ke.id) ? (S(), F(re, {
                                  key: 0,
                                  size: "small",
                                  type: "success"
                                }, {
                                  default: U(() => [..._[12] || (_[12] = [
                                    Re("Current", -1)
                                  ])]),
                                  _: 1
                                })) : B("", !0)
                              ], 4)
                            ], 8, kv)
                          ];
                        }),
                        _: 2
                      }, 1032, ["command"]))), 128)),
                      v.value.length === 0 ? (S(), F(K, {
                        key: 1,
                        disabled: ""
                      }, {
                        default: U(() => [..._[13] || (_[13] = [
                          Re(" No workspaces ", -1)
                        ])]),
                        _: 1
                      })) : B("", !0)
                    ]),
                    _: 1
                  })
                ]),
                default: U(() => {
                  var V;
                  return [
                    $("span", wv, [
                      Re(Q(((V = m.value) == null ? void 0 : V.title) || "Select Workspace") + " ", 1),
                      X(x, { class: "nav-arrow" }, {
                        default: U(() => [
                          X(y(Gr))
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }),
                _: 1
              })) : B("", !0),
              I.showWorkspaceSelector ? (S(), N("span", Ev, "/")) : B("", !0),
              I.showSecondaryNavigation ? (S(), F(Ce, {
                key: 2,
                trigger: "hover"
              }, {
                dropdown: U(() => [
                  X(_e, null, {
                    default: U(() => [
                      (S(!0), N(st, null, nn(A.value, (V) => (S(), F(K, {
                        key: V.label,
                        class: M({ active: V.active })
                      }, {
                        default: U(() => [
                          $("a", {
                            href: w(V),
                            class: "nav-link",
                            onClick: Pe((Ke) => E(V), ["prevent"])
                          }, Q(V.label), 9, Cv)
                        ]),
                        _: 2
                      }, 1032, ["class"]))), 128))
                    ]),
                    _: 1
                  })
                ]),
                default: U(() => [
                  $("span", Tv, [
                    Re(Q(L.value) + " ", 1),
                    X(x, { class: "nav-arrow" }, {
                      default: U(() => [
                        X(y(Gr))
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })) : B("", !0)
            ])
          ])) : B("", !0),
          $("div", Ov, [
            X(Ce, {
              onCommand: O,
              trigger: "click",
              placement: "bottom-end"
            }, {
              dropdown: U(() => [
                X(_e, null, {
                  default: U(() => [
                    X(K, null, {
                      default: U(() => [
                        $("a", {
                          href: "/profile",
                          class: "nav-link",
                          onClick: _[0] || (_[0] = Pe((V) => O("profile"), ["prevent"]))
                        }, "Profile Settings")
                      ]),
                      _: 1
                    }),
                    I.showWorkspaceSelector ? (S(), F(K, { key: 0 }, {
                      default: U(() => [
                        $("a", {
                          href: "#switch-workspace",
                          class: "nav-link",
                          onClick: _[1] || (_[1] = Pe((V) => O("workspaces"), ["prevent"]))
                        }, "Switch Workspace")
                      ]),
                      _: 1
                    })) : B("", !0),
                    X(K, { divided: "" }, {
                      default: U(() => [
                        $("a", {
                          href: "#signout",
                          class: "nav-link",
                          onClick: _[2] || (_[2] = Pe((V) => O("logout"), ["prevent"]))
                        }, "Sign Out")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              default: U(() => [
                $("div", Iv, [
                  $("div", Av, [
                    $("span", Pv, Q(g.value.name), 1)
                  ]),
                  $("div", $v, [
                    g.value.avatar_url ? (S(), N("img", {
                      key: 0,
                      src: g.value.avatar_url,
                      alt: g.value.name
                    }, null, 8, xv)) : (S(), N("span", jv, Q(g.value.initials), 1))
                  ])
                ])
              ]),
              _: 1
            })
          ])
        ])) : (S(), N("div", Rv, [..._[14] || (_[14] = [
          $("div", { class: "unauth-inner" }, [
            $("strong", null, "Authentication required."),
            Re(" Please log in to access the workspace. ")
          ], -1)
        ])])),
        k.value && I.showWorkspaceSelector ? (S(), F(it, {
          key: 4,
          modelValue: f.value,
          "onUpdate:modelValue": _[4] || (_[4] = (V) => f.value = V),
          title: "Switch Workspace",
          width: "500px",
          onClose: _[5] || (_[5] = (V) => f.value = !1)
        }, {
          footer: U(() => [
            X(Vt, {
              onClick: _[3] || (_[3] = (V) => f.value = !1)
            }, {
              default: U(() => [..._[15] || (_[15] = [
                Re("Cancel", -1)
              ])]),
              _: 1
            }),
            X(Vt, {
              type: "primary",
              onClick: ge
            }, {
              default: U(() => [..._[16] || (_[16] = [
                Re("Create New Workspace", -1)
              ])]),
              _: 1
            })
          ]),
          default: U(() => [
            $("div", Nv, [
              (S(!0), N(st, null, nn(p.value, (V) => {
                var Ke, Ue;
                return S(), N("div", {
                  key: V.id,
                  class: M(["workspace-item", { active: V.id === ((Ke = m.value) == null ? void 0 : Ke.id) }]),
                  onClick: (vs) => Z(V)
                }, [
                  $("div", Mv, Q(V.children && V.children.length ? "📁" : "📄"), 1),
                  $("div", Uv, [
                    $("h3", null, Q(V.title), 1),
                    $("p", null, Q(V.description), 1),
                    $("span", Dv, Q(V.hasAccess ? "Active" : "Inactive"), 1)
                  ]),
                  V.id === ((Ue = m.value) == null ? void 0 : Ue.id) ? (S(), N("div", Bv, [
                    X(x, null, {
                      default: U(() => [
                        X(y(Ou))
                      ]),
                      _: 1
                    })
                  ])) : B("", !0)
                ], 10, Lv);
              }), 128))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])) : B("", !0)
      ]);
    };
  }
});
const zv = (t, e) => {
  const s = t.__vccOpts || t;
  for (const [n, r] of e)
    s[n] = r;
  return s;
}, ng = /* @__PURE__ */ zv(Fv, [["__scopeId", "data-v-cdeebf53"]]), No = "aiworkspace_auth", Lo = "aiworkspace_user_id";
function rg() {
  const t = R({
    user: null,
    isAuthenticated: !1,
    isLoading: !0
  }), e = (a) => {
    var c;
    const l = `; ${document.cookie}`.split(`; ${a}=`);
    return l.length === 2 && ((c = l.pop()) == null ? void 0 : c.split(";").shift()) || null;
  }, s = (a, i, l = 7) => {
    const c = /* @__PURE__ */ new Date();
    c.setTime(c.getTime() + l * 24 * 60 * 60 * 1e3), document.cookie = `${a}=${i};expires=${c.toUTCString()};path=/;domain=.aiworkspace.pro`;
  }, n = (a) => {
    document.cookie = `${a}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.aiworkspace.pro`;
  }, r = async () => {
    try {
      const a = e(No), i = e(Lo);
      a && i ? t.value = {
        user: { id: i, email: "" },
        // You can fetch full user data here
        isAuthenticated: !0,
        isLoading: !1
      } : t.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1
      };
    } catch (a) {
      console.error("Auth check failed:", a), t.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1
      };
    }
  }, o = () => {
    n(No), n(Lo), t.value = {
      user: null,
      isAuthenticated: !1,
      isLoading: !1
    };
  };
  return ye(() => {
    r();
  }), {
    authState: t,
    checkAuth: r,
    logout: o,
    getCookie: e,
    setCookie: s,
    clearCookie: n
  };
}
export {
  We as ACCESS_COOKIE,
  ng as AIWorkspaceHeader,
  ri as LS_ACCESS_KEY,
  oi as LS_REFRESH_KEY,
  He as REFRESH_COOKIE,
  eg as buildOAuthRedirectUrl,
  tv as clearLocalStorageTokens,
  Ao as clearSessionCookie,
  ni as ensureCrossSubdomainCookies,
  wt as getCookie,
  tg as getPostLoginBase,
  sg as restoreCrossSubdomainSession,
  Po as restoreSessionWithRetry,
  vt as setSessionCookie,
  sv as setupAuthStateListener,
  ke as supabase,
  Fs as syncCookiesToLocalStorage,
  rg as useAuth,
  nv as useEnhancedAuth,
  cv as useWorkspaceStore
};
