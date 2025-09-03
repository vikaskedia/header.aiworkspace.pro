import { getCurrentInstance as Se, inject as de, ref as R, computed as C, unref as m, getCurrentScope as jo, onScopeDispose as Un, readonly as No, shallowRef as Ht, watchEffect as Ro, onMounted as Te, nextTick as oe, watch as se, isRef as ft, warn as ha, provide as Dn, defineComponent as G, openBlock as E, createElementBlock as M, mergeProps as Cs, renderSlot as ie, createElementVNode as $, toRef as ht, onUnmounted as fa, useAttrs as pa, useSlots as Lo, normalizeClass as U, normalizeStyle as pt, createCommentVNode as z, Fragment as Qe, createBlock as W, withCtx as B, resolveDynamicComponent as ge, withModifiers as Ae, toDisplayString as Z, onBeforeUnmount as os, createVNode as X, Transition as Bn, withDirectives as qt, createTextVNode as xe, vShow as Kt, Text as ga, reactive as Fn, h as va, shallowReactive as Mo, isVNode as Us, render as Os, markRaw as Xe, toRefs as yn, resolveComponent as be, withKeys as us, hasInjectionContext as ma, effectScope as ya, isReactive as zn, toRaw as _a, createStaticVNode as ba, renderList as Qs } from "vue";
const Uo = Symbol(), Ss = "el", wa = "is-", rt = (t, e, s, n, r) => {
  let o = `${t}-${e}`;
  return s && (o += `-${s}`), n && (o += `__${n}`), r && (o += `--${r}`), o;
}, Do = Symbol("namespaceContextKey"), Bo = (t) => {
  const e = t || (Se() ? de(Do, R(Ss)) : R(Ss));
  return C(() => m(e) || Ss);
}, Ne = (t, e) => {
  const s = Bo(e);
  return {
    namespace: s,
    b: (g = "") => rt(s.value, t, g, "", ""),
    e: (g) => g ? rt(s.value, t, "", g, "") : "",
    m: (g) => g ? rt(s.value, t, "", "", g) : "",
    be: (g, _) => g && _ ? rt(s.value, t, g, _, "") : "",
    em: (g, _) => g && _ ? rt(s.value, t, "", g, _) : "",
    bm: (g, _) => g && _ ? rt(s.value, t, g, "", _) : "",
    bem: (g, _, v) => g && _ && v ? rt(s.value, t, g, _, v) : "",
    is: (g, ..._) => {
      const v = _.length >= 1 ? _[0] : !0;
      return g && v ? `${wa}${g}` : "";
    },
    cssVar: (g) => {
      const _ = {};
      for (const v in g)
        g[v] && (_[`--${s.value}-${v}`] = g[v]);
      return _;
    },
    cssVarName: (g) => `--${s.value}-${g}`,
    cssVarBlock: (g) => {
      const _ = {};
      for (const v in g)
        g[v] && (_[`--${s.value}-${t}-${v}`] = g[v]);
      return _;
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
const Gt = () => {
}, ka = Object.prototype.hasOwnProperty, Qt = (t, e) => ka.call(t, e), Be = (t) => typeof t == "function", ke = (t) => typeof t == "string", jt = (t) => t !== null && typeof t == "object", Sa = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (s) => e[s] || (e[s] = t(s));
}, Ea = /-\w/g, Ta = Sa(
  (t) => t.replace(Ea, (e) => e.slice(1).toUpperCase())
);
var Ca = typeof global == "object" && global && global.Object === Object && global;
const Oa = Ca;
var Ia = typeof self == "object" && self && self.Object === Object && self, Aa = Oa || Ia || Function("return this")();
const Vn = Aa;
var Pa = Vn.Symbol;
const et = Pa;
var Fo = Object.prototype, $a = Fo.hasOwnProperty, xa = Fo.toString, Bt = et ? et.toStringTag : void 0;
function ja(t) {
  var e = $a.call(t, Bt), s = t[Bt];
  try {
    t[Bt] = void 0;
    var n = !0;
  } catch {
  }
  var r = xa.call(t);
  return n && (e ? t[Bt] = s : delete t[Bt]), r;
}
var Na = Object.prototype, Ra = Na.toString;
function La(t) {
  return Ra.call(t);
}
var Ma = "[object Null]", Ua = "[object Undefined]", wr = et ? et.toStringTag : void 0;
function Wn(t) {
  return t == null ? t === void 0 ? Ua : Ma : wr && wr in Object(t) ? ja(t) : La(t);
}
function Hn(t) {
  return t != null && typeof t == "object";
}
var Da = "[object Symbol]";
function qn(t) {
  return typeof t == "symbol" || Hn(t) && Wn(t) == Da;
}
function Ba(t, e) {
  for (var s = -1, n = t == null ? 0 : t.length, r = Array(n); ++s < n; )
    r[s] = e(t[s], s, t);
  return r;
}
var Fa = Array.isArray;
const is = Fa;
var za = 1 / 0, kr = et ? et.prototype : void 0, Sr = kr ? kr.toString : void 0;
function zo(t) {
  if (typeof t == "string")
    return t;
  if (is(t))
    return Ba(t, zo) + "";
  if (qn(t))
    return Sr ? Sr.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -za ? "-0" : e;
}
function Is(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
function Va(t) {
  return t;
}
var Wa = "[object AsyncFunction]", Ha = "[object Function]", qa = "[object GeneratorFunction]", Ka = "[object Proxy]";
function Ga(t) {
  if (!Is(t))
    return !1;
  var e = Wn(t);
  return e == Ha || e == qa || e == Wa || e == Ka;
}
var Ja = Vn["__core-js_shared__"];
const en = Ja;
var Er = function() {
  var t = /[^.]+$/.exec(en && en.keys && en.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Ya(t) {
  return !!Er && Er in t;
}
var Xa = Function.prototype, Za = Xa.toString;
function Qa(t) {
  if (t != null) {
    try {
      return Za.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var el = /[\\^$.*+?()[\]{}|]/g, tl = /^\[object .+?Constructor\]$/, sl = Function.prototype, nl = Object.prototype, rl = sl.toString, ol = nl.hasOwnProperty, il = RegExp(
  "^" + rl.call(ol).replace(el, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function al(t) {
  if (!Is(t) || Ya(t))
    return !1;
  var e = Ga(t) ? il : tl;
  return e.test(Qa(t));
}
function ll(t, e) {
  return t == null ? void 0 : t[e];
}
function Kn(t, e) {
  var s = ll(t, e);
  return al(s) ? s : void 0;
}
function cl(t, e, s) {
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
var ul = 800, dl = 16, hl = Date.now;
function fl(t) {
  var e = 0, s = 0;
  return function() {
    var n = hl(), r = dl - (n - s);
    if (s = n, r > 0) {
      if (++e >= ul)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
function pl(t) {
  return function() {
    return t;
  };
}
var gl = function() {
  try {
    var t = Kn(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}();
const As = gl;
var vl = As ? function(t, e) {
  return As(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: pl(e),
    writable: !0
  });
} : Va;
const ml = vl;
var yl = fl(ml);
const _l = yl;
var bl = 9007199254740991, wl = /^(?:0|[1-9]\d*)$/;
function Vo(t, e) {
  var s = typeof t;
  return e = e ?? bl, !!e && (s == "number" || s != "symbol" && wl.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function kl(t, e, s) {
  e == "__proto__" && As ? As(t, e, {
    configurable: !0,
    enumerable: !0,
    value: s,
    writable: !0
  }) : t[e] = s;
}
function Wo(t, e) {
  return t === e || t !== t && e !== e;
}
var Sl = Object.prototype, El = Sl.hasOwnProperty;
function Tl(t, e, s) {
  var n = t[e];
  (!(El.call(t, e) && Wo(n, s)) || s === void 0 && !(e in t)) && kl(t, e, s);
}
var Tr = Math.max;
function Cl(t, e, s) {
  return e = Tr(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var n = arguments, r = -1, o = Tr(n.length - e, 0), i = Array(o); ++r < o; )
      i[r] = n[e + r];
    r = -1;
    for (var a = Array(e + 1); ++r < e; )
      a[r] = n[r];
    return a[e] = s(i), cl(t, this, a);
  };
}
var Ol = 9007199254740991;
function Il(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Ol;
}
var Al = "[object Arguments]";
function Cr(t) {
  return Hn(t) && Wn(t) == Al;
}
var Ho = Object.prototype, Pl = Ho.hasOwnProperty, $l = Ho.propertyIsEnumerable, xl = Cr(function() {
  return arguments;
}()) ? Cr : function(t) {
  return Hn(t) && Pl.call(t, "callee") && !$l.call(t, "callee");
};
const qo = xl;
var jl = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Nl = /^\w*$/;
function Rl(t, e) {
  if (is(t))
    return !1;
  var s = typeof t;
  return s == "number" || s == "symbol" || s == "boolean" || t == null || qn(t) ? !0 : Nl.test(t) || !jl.test(t) || e != null && t in Object(e);
}
var Ll = Kn(Object, "create");
const es = Ll;
function Ml() {
  this.__data__ = es ? es(null) : {}, this.size = 0;
}
function Ul(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var Dl = "__lodash_hash_undefined__", Bl = Object.prototype, Fl = Bl.hasOwnProperty;
function zl(t) {
  var e = this.__data__;
  if (es) {
    var s = e[t];
    return s === Dl ? void 0 : s;
  }
  return Fl.call(e, t) ? e[t] : void 0;
}
var Vl = Object.prototype, Wl = Vl.hasOwnProperty;
function Hl(t) {
  var e = this.__data__;
  return es ? e[t] !== void 0 : Wl.call(e, t);
}
var ql = "__lodash_hash_undefined__";
function Kl(t, e) {
  var s = this.__data__;
  return this.size += this.has(t) ? 0 : 1, s[t] = es && e === void 0 ? ql : e, this;
}
function gt(t) {
  var e = -1, s = t == null ? 0 : t.length;
  for (this.clear(); ++e < s; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
gt.prototype.clear = Ml;
gt.prototype.delete = Ul;
gt.prototype.get = zl;
gt.prototype.has = Hl;
gt.prototype.set = Kl;
function Gl() {
  this.__data__ = [], this.size = 0;
}
function Ds(t, e) {
  for (var s = t.length; s--; )
    if (Wo(t[s][0], e))
      return s;
  return -1;
}
var Jl = Array.prototype, Yl = Jl.splice;
function Xl(t) {
  var e = this.__data__, s = Ds(e, t);
  if (s < 0)
    return !1;
  var n = e.length - 1;
  return s == n ? e.pop() : Yl.call(e, s, 1), --this.size, !0;
}
function Zl(t) {
  var e = this.__data__, s = Ds(e, t);
  return s < 0 ? void 0 : e[s][1];
}
function Ql(t) {
  return Ds(this.__data__, t) > -1;
}
function ec(t, e) {
  var s = this.__data__, n = Ds(s, t);
  return n < 0 ? (++this.size, s.push([t, e])) : s[n][1] = e, this;
}
function Rt(t) {
  var e = -1, s = t == null ? 0 : t.length;
  for (this.clear(); ++e < s; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
Rt.prototype.clear = Gl;
Rt.prototype.delete = Xl;
Rt.prototype.get = Zl;
Rt.prototype.has = Ql;
Rt.prototype.set = ec;
var tc = Kn(Vn, "Map");
const sc = tc;
function nc() {
  this.size = 0, this.__data__ = {
    hash: new gt(),
    map: new (sc || Rt)(),
    string: new gt()
  };
}
function rc(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function Bs(t, e) {
  var s = t.__data__;
  return rc(e) ? s[typeof e == "string" ? "string" : "hash"] : s.map;
}
function oc(t) {
  var e = Bs(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function ic(t) {
  return Bs(this, t).get(t);
}
function ac(t) {
  return Bs(this, t).has(t);
}
function lc(t, e) {
  var s = Bs(this, t), n = s.size;
  return s.set(t, e), this.size += s.size == n ? 0 : 1, this;
}
function _t(t) {
  var e = -1, s = t == null ? 0 : t.length;
  for (this.clear(); ++e < s; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
_t.prototype.clear = nc;
_t.prototype.delete = oc;
_t.prototype.get = ic;
_t.prototype.has = ac;
_t.prototype.set = lc;
var cc = "Expected a function";
function Gn(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(cc);
  var s = function() {
    var n = arguments, r = e ? e.apply(this, n) : n[0], o = s.cache;
    if (o.has(r))
      return o.get(r);
    var i = t.apply(this, n);
    return s.cache = o.set(r, i) || o, i;
  };
  return s.cache = new (Gn.Cache || _t)(), s;
}
Gn.Cache = _t;
var uc = 500;
function dc(t) {
  var e = Gn(t, function(n) {
    return s.size === uc && s.clear(), n;
  }), s = e.cache;
  return e;
}
var hc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, fc = /\\(\\)?/g, pc = dc(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(hc, function(s, n, r, o) {
    e.push(r ? o.replace(fc, "$1") : n || s);
  }), e;
});
const gc = pc;
function vc(t) {
  return t == null ? "" : zo(t);
}
function Fs(t, e) {
  return is(t) ? t : Rl(t, e) ? [t] : gc(vc(t));
}
var mc = 1 / 0;
function Jn(t) {
  if (typeof t == "string" || qn(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -mc ? "-0" : e;
}
function Ko(t, e) {
  e = Fs(e, t);
  for (var s = 0, n = e.length; t != null && s < n; )
    t = t[Jn(e[s++])];
  return s && s == n ? t : void 0;
}
function yc(t, e, s) {
  var n = t == null ? void 0 : Ko(t, e);
  return n === void 0 ? s : n;
}
function _c(t, e) {
  for (var s = -1, n = e.length, r = t.length; ++s < n; )
    t[r + s] = e[s];
  return t;
}
var Or = et ? et.isConcatSpreadable : void 0;
function bc(t) {
  return is(t) || qo(t) || !!(Or && t && t[Or]);
}
function Go(t, e, s, n, r) {
  var o = -1, i = t.length;
  for (s || (s = bc), r || (r = []); ++o < i; ) {
    var a = t[o];
    e > 0 && s(a) ? e > 1 ? Go(a, e - 1, s, n, r) : _c(r, a) : n || (r[r.length] = a);
  }
  return r;
}
function wc(t) {
  var e = t == null ? 0 : t.length;
  return e ? Go(t, 1) : [];
}
function kc(t) {
  return _l(Cl(t, void 0, wc), t + "");
}
function Sc(t, e) {
  return t != null && e in Object(t);
}
function Ec(t, e, s) {
  e = Fs(e, t);
  for (var n = -1, r = e.length, o = !1; ++n < r; ) {
    var i = Jn(e[n]);
    if (!(o = t != null && s(t, i)))
      break;
    t = t[i];
  }
  return o || ++n != r ? o : (r = t == null ? 0 : t.length, !!r && Il(r) && Vo(i, r) && (is(t) || qo(t)));
}
function Tc(t, e) {
  return t != null && Ec(t, e, Sc);
}
function Jo(t) {
  for (var e = -1, s = t == null ? 0 : t.length, n = {}; ++e < s; ) {
    var r = t[e];
    n[r[0]] = r[1];
  }
  return n;
}
function Yo(t) {
  return t == null;
}
function Cc(t, e, s, n) {
  if (!Is(t))
    return t;
  e = Fs(e, t);
  for (var r = -1, o = e.length, i = o - 1, a = t; a != null && ++r < o; ) {
    var l = Jn(e[r]), c = s;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return t;
    if (r != i) {
      var u = a[l];
      c = n ? n(u, l, a) : void 0, c === void 0 && (c = Is(u) ? u : Vo(e[r + 1]) ? [] : {});
    }
    Tl(a, l, c), a = a[l];
  }
  return t;
}
function Oc(t, e, s) {
  for (var n = -1, r = e.length, o = {}; ++n < r; ) {
    var i = e[n], a = Ko(t, i);
    s(a, i) && Cc(o, Fs(i, t), a);
  }
  return o;
}
function Ic(t, e) {
  return Oc(t, e, function(s, n) {
    return Tc(t, n);
  });
}
var Ac = kc(function(t, e) {
  return t == null ? {} : Ic(t, e);
});
const Pc = Ac, Xo = (t) => t === void 0, tn = (t) => typeof t == "boolean", Fe = (t) => typeof t == "number", ts = (t) => typeof Element > "u" ? !1 : t instanceof Element, $c = (t) => ke(t) ? !Number.isNaN(Number(t)) : !1;
var xc = !1;
function ds(t, e, s) {
  return Array.isArray(t) ? (t.length = Math.max(t.length, e), t.splice(e, 1, s), s) : (t[e] = s, s);
}
function sn(t, e) {
  if (Array.isArray(t)) {
    t.splice(e, 1);
    return;
  }
  delete t[e];
}
var jc = Object.defineProperty, Nc = Object.defineProperties, Rc = Object.getOwnPropertyDescriptors, Ir = Object.getOwnPropertySymbols, Lc = Object.prototype.hasOwnProperty, Mc = Object.prototype.propertyIsEnumerable, Ar = (t, e, s) => e in t ? jc(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, Uc = (t, e) => {
  for (var s in e || (e = {}))
    Lc.call(e, s) && Ar(t, s, e[s]);
  if (Ir)
    for (var s of Ir(e))
      Mc.call(e, s) && Ar(t, s, e[s]);
  return t;
}, Dc = (t, e) => Nc(t, Rc(e));
function Bc(t, e) {
  var s;
  const n = Ht();
  return Ro(() => {
    n.value = t();
  }, Dc(Uc({}, e), {
    flush: (s = e == null ? void 0 : e.flush) != null ? s : "sync"
  })), No(n);
}
var Pr;
const ve = typeof window < "u", Fc = (t) => typeof t == "string", zc = () => {
};
ve && ((Pr = window == null ? void 0 : window.navigator) != null && Pr.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Yn(t) {
  return typeof t == "function" ? t() : m(t);
}
function Vc(t) {
  return t;
}
function Xn(t) {
  return jo() ? (Un(t), !0) : !1;
}
function Wc(t, e = !0) {
  Se() ? Te(t) : e ? t() : oe(t);
}
function Hc(t, e, s = {}) {
  const {
    immediate: n = !0
  } = s, r = R(!1);
  let o = null;
  function i() {
    o && (clearTimeout(o), o = null);
  }
  function a() {
    r.value = !1, i();
  }
  function l(...c) {
    i(), r.value = !0, o = setTimeout(() => {
      r.value = !1, o = null, t(...c);
    }, Yn(e));
  }
  return n && (r.value = !0, ve && l()), Xn(a), {
    isPending: No(r),
    start: l,
    stop: a
  };
}
function Zo(t) {
  var e;
  const s = Yn(t);
  return (e = s == null ? void 0 : s.$el) != null ? e : s;
}
const Qo = ve ? window : void 0;
function Es(...t) {
  let e, s, n, r;
  if (Fc(t[0]) || Array.isArray(t[0]) ? ([s, n, r] = t, e = Qo) : [e, s, n, r] = t, !e)
    return zc;
  Array.isArray(s) || (s = [s]), Array.isArray(n) || (n = [n]);
  const o = [], i = () => {
    o.forEach((u) => u()), o.length = 0;
  }, a = (u, d, f, p) => (u.addEventListener(d, f, p), () => u.removeEventListener(d, f, p)), l = se(() => [Zo(e), Yn(r)], ([u, d]) => {
    i(), u && o.push(...s.flatMap((f) => n.map((p) => a(u, f, p, d))));
  }, { immediate: !0, flush: "post" }), c = () => {
    l(), i();
  };
  return Xn(c), c;
}
function qc(t, e = !1) {
  const s = R(), n = () => s.value = !!t();
  return n(), Wc(n, e), s;
}
const $r = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, xr = "__vueuse_ssr_handlers__";
$r[xr] = $r[xr] || {};
var jr = Object.getOwnPropertySymbols, Kc = Object.prototype.hasOwnProperty, Gc = Object.prototype.propertyIsEnumerable, Jc = (t, e) => {
  var s = {};
  for (var n in t)
    Kc.call(t, n) && e.indexOf(n) < 0 && (s[n] = t[n]);
  if (t != null && jr)
    for (var n of jr(t))
      e.indexOf(n) < 0 && Gc.call(t, n) && (s[n] = t[n]);
  return s;
};
function ei(t, e, s = {}) {
  const n = s, { window: r = Qo } = n, o = Jc(n, ["window"]);
  let i;
  const a = qc(() => r && "ResizeObserver" in r), l = () => {
    i && (i.disconnect(), i = void 0);
  }, c = se(() => Zo(t), (d) => {
    l(), a.value && r && d && (i = new ResizeObserver(e), i.observe(d, o));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), c();
  };
  return Xn(u), {
    isSupported: a,
    stop: u
  };
}
var Nr;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})(Nr || (Nr = {}));
var Yc = Object.defineProperty, Rr = Object.getOwnPropertySymbols, Xc = Object.prototype.hasOwnProperty, Zc = Object.prototype.propertyIsEnumerable, Lr = (t, e, s) => e in t ? Yc(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, Qc = (t, e) => {
  for (var s in e || (e = {}))
    Xc.call(e, s) && Lr(t, s, e[s]);
  if (Rr)
    for (var s of Rr(e))
      Zc.call(e, s) && Lr(t, s, e[s]);
  return t;
};
const eu = {
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
Qc({
  linear: Vc
}, eu);
const Mr = {
  current: 0
}, Ur = R(0), ti = 2e3, Dr = Symbol("elZIndexContextKey"), si = Symbol("zIndexContextKey"), tu = (t) => {
  const e = Se() ? de(Dr, Mr) : Mr, s = t || (Se() ? de(si, void 0) : void 0), n = C(() => {
    const i = m(s);
    return Fe(i) ? i : ti;
  }), r = C(() => n.value + Ur.value), o = () => (e.current++, Ur.value = e.current, r.value);
  return !ve && de(Dr), {
    initialZIndex: n,
    currentZIndex: r,
    nextZIndex: o
  };
};
var su = {
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
const nu = (t) => (e, s) => ru(e, s, m(t)), ru = (t, e, s) => yc(s, t, t).replace(/\{(\w+)\}/g, (n, r) => {
  var o;
  return `${(o = e == null ? void 0 : e[r]) != null ? o : `{${r}}`}`;
}), ou = (t) => {
  const e = C(() => m(t).name), s = ft(t) ? t : R(t);
  return {
    lang: e,
    locale: s,
    t: nu(t)
  };
}, ni = Symbol("localeContextKey"), iu = (t) => {
  const e = t || de(ni, R());
  return ou(C(() => e.value || su));
}, ri = "__epPropKey", ee = (t) => t, au = (t) => jt(t) && !!t[ri], oi = (t, e) => {
  if (!jt(t) || au(t))
    return t;
  const { values: s, required: n, default: r, type: o, validator: i } = t, l = {
    type: o,
    required: !!n,
    validator: s || i ? (c) => {
      let u = !1, d = [];
      if (s && (d = Array.from(s), Qt(t, "default") && d.push(r), u || (u = d.includes(c))), i && (u || (u = i(c))), !u && d.length > 0) {
        const f = [...new Set(d)].map((p) => JSON.stringify(p)).join(", ");
        ha(`Invalid prop: validation failed${e ? ` for prop "${e}"` : ""}. Expected one of [${f}], got value ${JSON.stringify(c)}.`);
      }
      return u;
    } : void 0,
    [ri]: !0
  };
  return Qt(t, "default") && (l.default = r), l;
}, We = (t) => Jo(Object.entries(t).map(([e, s]) => [
  e,
  oi(s, e)
])), ii = ["", "default", "small", "large"], Zn = oi({
  type: String,
  values: ii,
  required: !1
}), ai = Symbol("size"), lu = () => {
  const t = de(ai, {});
  return C(() => m(t.size) || "");
}, cu = Symbol("emptyValuesContextKey"), uu = We({
  emptyValues: Array,
  valueOnClear: {
    type: ee([
      String,
      Number,
      Boolean,
      Function
    ]),
    default: void 0,
    validator: (t) => Be(t) ? !t() : !t
  }
}), Br = (t) => Object.keys(t), Ps = R();
function Qn(t, e = void 0) {
  const s = Se() ? de(Uo, Ps) : Ps;
  return t ? C(() => {
    var n, r;
    return (r = (n = s.value) == null ? void 0 : n[t]) != null ? r : e;
  }) : s;
}
function li(t, e) {
  const s = Qn(), n = Ne(t, C(() => {
    var a;
    return ((a = s.value) == null ? void 0 : a.namespace) || Ss;
  })), r = iu(C(() => {
    var a;
    return (a = s.value) == null ? void 0 : a.locale;
  })), o = tu(C(() => {
    var a;
    return ((a = s.value) == null ? void 0 : a.zIndex) || ti;
  })), i = C(() => {
    var a;
    return m(e) || ((a = s.value) == null ? void 0 : a.size) || "";
  });
  return ci(C(() => m(s) || {})), {
    ns: n,
    locale: r,
    zIndex: o,
    size: i
  };
}
const ci = (t, e, s = !1) => {
  var n;
  const r = !!Se(), o = r ? Qn() : void 0, i = (n = e == null ? void 0 : e.provide) != null ? n : r ? Dn : void 0;
  if (!i)
    return;
  const a = C(() => {
    const l = m(t);
    return o != null && o.value ? du(o.value, l) : l;
  });
  return i(Uo, a), i(ni, C(() => a.value.locale)), i(Do, C(() => a.value.namespace)), i(si, C(() => a.value.zIndex)), i(ai, {
    size: C(() => a.value.size || "")
  }), i(cu, C(() => ({
    emptyValues: a.value.emptyValues,
    valueOnClear: a.value.valueOnClear
  }))), (s || !Ps.value) && (Ps.value = a.value), a;
}, du = (t, e) => {
  const s = [.../* @__PURE__ */ new Set([...Br(t), ...Br(e)])], n = {};
  for (const r of s)
    n[r] = e[r] !== void 0 ? e[r] : t[r];
  return n;
}, _n = "update:modelValue", Fr = "change", zr = "input";
var st = (t, e) => {
  const s = t.__vccOpts || t;
  for (const [n, r] of e)
    s[n] = r;
  return s;
};
const ui = (t = "") => t.split(" ").filter((e) => !!e.trim()), Vr = (t, e) => {
  if (!t || !e)
    return !1;
  if (e.includes(" "))
    throw new Error("className should not contain space.");
  return t.classList.contains(e);
}, hu = (t, e) => {
  !t || !e.trim() || t.classList.add(...ui(e));
}, fu = (t, e) => {
  !t || !e.trim() || t.classList.remove(...ui(e));
}, pu = (t, e) => {
  var s;
  if (!ve || !t || !e)
    return "";
  let n = Ta(e);
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
function ss(t, e = "px") {
  if (!t)
    return "";
  if (Fe(t) || $c(t))
    return `${t}${e}`;
  if (ke(t))
    return t;
}
let hs;
const gu = (t) => {
  var e;
  if (!ve)
    return 0;
  if (hs !== void 0)
    return hs;
  const s = document.createElement("div");
  s.className = `${t}-scrollbar__wrap`, s.style.visibility = "hidden", s.style.width = "100px", s.style.position = "absolute", s.style.top = "-9999px", document.body.appendChild(s);
  const n = s.offsetWidth;
  s.style.overflow = "scroll";
  const r = document.createElement("div");
  r.style.width = "100%", s.appendChild(r);
  const o = r.offsetWidth;
  return (e = s.parentNode) == null || e.removeChild(s), hs = n - o, hs;
};
class vu extends Error {
  constructor(e) {
    super(e), this.name = "ElementPlusError";
  }
}
function mu(t, e) {
  throw new vu(`[${t}] ${e}`);
}
const zs = (t, e) => {
  if (t.install = (s) => {
    for (const n of [t, ...Object.values(e ?? {})])
      s.component(n.name, n);
  }, e)
    for (const [s, n] of Object.entries(e))
      t[s] = n;
  return t;
}, yu = (t, e) => (t.install = (s) => {
  t._context = s._context, s.config.globalProperties[e] = t;
}, t), _u = (t) => (t.install = Gt, t), bu = We({
  size: {
    type: ee([Number, String])
  },
  color: {
    type: String
  }
}), wu = G({
  name: "ElIcon",
  inheritAttrs: !1
}), ku = /* @__PURE__ */ G({
  ...wu,
  props: bu,
  setup(t) {
    const e = t, s = Ne("icon"), n = C(() => {
      const { size: r, color: o } = e;
      return !r && !o ? {} : {
        fontSize: Xo(r) ? void 0 : ss(r),
        "--color": o
      };
    });
    return (r, o) => (E(), M("i", Cs({
      class: m(s).b(),
      style: m(n)
    }, r.$attrs), [
      ie(r.$slots, "default")
    ], 16));
  }
});
var Su = /* @__PURE__ */ st(ku, [["__file", "icon.vue"]]);
const je = zs(Su);
/*! Element Plus Icons Vue v2.3.2 */
var Eu = /* @__PURE__ */ G({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(t) {
    return (e, s) => (E(), M("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"
      })
    ]));
  }
}), Wr = Eu, Tu = /* @__PURE__ */ G({
  name: "Check",
  __name: "check",
  setup(t) {
    return (e, s) => (E(), M("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      })
    ]));
  }
}), Cu = Tu, Ou = /* @__PURE__ */ G({
  name: "CircleCheck",
  __name: "circle-check",
  setup(t) {
    return (e, s) => (E(), M("svg", {
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
}), Iu = Ou, Au = /* @__PURE__ */ G({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(t) {
    return (e, s) => (E(), M("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), di = Au, Pu = /* @__PURE__ */ G({
  name: "CircleClose",
  __name: "circle-close",
  setup(t) {
    return (e, s) => (E(), M("svg", {
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
}), hi = Pu, $u = /* @__PURE__ */ G({
  name: "Close",
  __name: "close",
  setup(t) {
    return (e, s) => (E(), M("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), xu = $u, ju = /* @__PURE__ */ G({
  name: "Hide",
  __name: "hide",
  setup(t) {
    return (e, s) => (E(), M("svg", {
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
}), Nu = ju, Ru = /* @__PURE__ */ G({
  name: "InfoFilled",
  __name: "info-filled",
  setup(t) {
    return (e, s) => (E(), M("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.99 12.99 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), bn = Ru, Lu = /* @__PURE__ */ G({
  name: "Loading",
  __name: "loading",
  setup(t) {
    return (e, s) => (E(), M("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248m452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248M828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0"
      })
    ]));
  }
}), $s = Lu, Mu = /* @__PURE__ */ G({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(t) {
    return (e, s) => (E(), M("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.27 38.27 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), fi = Mu, Uu = /* @__PURE__ */ G({
  name: "View",
  __name: "view",
  setup(t) {
    return (e, s) => (E(), M("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288m0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.19 160.19 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), Du = Uu, Bu = /* @__PURE__ */ G({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(t) {
    return (e, s) => (E(), M("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      $("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.43 58.43 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.43 58.43 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), pi = Bu;
const $t = ee([
  String,
  Object,
  Function
]), gi = {
  Close: xu,
  SuccessFilled: fi,
  InfoFilled: bn,
  WarningFilled: pi,
  CircleCloseFilled: di
}, xs = {
  primary: bn,
  success: fi,
  warning: pi,
  error: di,
  info: bn
}, Fu = {
  validating: $s,
  success: Iu,
  error: hi
}, zu = () => ve && /firefox/i.test(window.navigator.userAgent);
let fe;
const Vu = {
  height: "0",
  visibility: "hidden",
  overflow: zu() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, Wu = [
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
function Hu(t) {
  const e = window.getComputedStyle(t), s = e.getPropertyValue("box-sizing"), n = Number.parseFloat(e.getPropertyValue("padding-bottom")) + Number.parseFloat(e.getPropertyValue("padding-top")), r = Number.parseFloat(e.getPropertyValue("border-bottom-width")) + Number.parseFloat(e.getPropertyValue("border-top-width"));
  return { contextStyle: Wu.map((i) => [
    i,
    e.getPropertyValue(i)
  ]), paddingSize: n, borderSize: r, boxSizing: s };
}
function Hr(t, e = 1, s) {
  var n, r;
  fe || (fe = document.createElement("textarea"), ((n = t.parentNode) != null ? n : document.body).appendChild(fe));
  const { paddingSize: o, borderSize: i, boxSizing: a, contextStyle: l } = Hu(t);
  l.forEach(([f, p]) => fe == null ? void 0 : fe.style.setProperty(f, p)), Object.entries(Vu).forEach(([f, p]) => fe == null ? void 0 : fe.style.setProperty(f, p, "important")), fe.value = t.value || t.placeholder || "";
  let c = fe.scrollHeight;
  const u = {};
  a === "border-box" ? c = c + i : a === "content-box" && (c = c - o), fe.value = "";
  const d = fe.scrollHeight - o;
  if (Fe(e)) {
    let f = d * e;
    a === "border-box" && (f = f + o + i), c = Math.max(f, c), u.minHeight = `${f}px`;
  }
  if (Fe(s)) {
    let f = d * s;
    a === "border-box" && (f = f + o + i), c = Math.min(f, c);
  }
  return u.height = `${c}px`, (r = fe.parentNode) == null || r.removeChild(fe), fe = void 0, u;
}
const vi = (t) => t, qu = We({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), Ku = (t) => Pc(qu, t), Gu = We({
  id: {
    type: String,
    default: void 0
  },
  size: Zn,
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
    type: $t,
    default: hi
  },
  showPassword: Boolean,
  showWordLimit: Boolean,
  suffixIcon: {
    type: $t
  },
  prefixIcon: {
    type: $t
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
    default: () => vi({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...Ku(["ariaLabel"]),
  inputmode: {
    type: ee(String),
    default: void 0
  },
  name: String
}), Ju = {
  [_n]: (t) => ke(t),
  input: (t) => ke(t),
  change: (t) => ke(t),
  focus: (t) => t instanceof FocusEvent,
  blur: (t) => t instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (t) => t instanceof MouseEvent,
  mouseenter: (t) => t instanceof MouseEvent,
  keydown: (t) => t instanceof Event,
  compositionstart: (t) => t instanceof CompositionEvent,
  compositionupdate: (t) => t instanceof CompositionEvent,
  compositionend: (t) => t instanceof CompositionEvent
}, Yu = ["class", "style"], Xu = /^on[A-Z]/, Zu = (t = {}) => {
  const { excludeListeners: e = !1, excludeKeys: s } = t, n = C(() => ((s == null ? void 0 : s.value) || []).concat(Yu)), r = Se();
  return r ? C(() => {
    var o;
    return Jo(Object.entries((o = r.proxy) == null ? void 0 : o.$attrs).filter(([i]) => !n.value.includes(i) && !(e && Xu.test(i))));
  }) : C(() => ({}));
}, qr = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, Qu = Symbol("elIdInjection"), ed = () => Se() ? de(Qu, qr) : qr, wn = (t) => {
  const e = ed(), s = Bo();
  return Bc(() => m(t) || `${s.value}-id-${e.prefix}-${e.current++}`);
}, er = Symbol("formContextKey"), mi = Symbol("formItemContextKey"), yi = () => {
  const t = de(er, void 0), e = de(mi, void 0);
  return {
    form: t,
    formItem: e
  };
}, td = (t, {
  formItemContext: e,
  disableIdGeneration: s,
  disableIdManagement: n
}) => {
  s || (s = R(!1)), n || (n = R(!1));
  const r = Se(), o = () => {
    let c = r == null ? void 0 : r.parent;
    for (; c; ) {
      if (c.type.name === "ElFormItem")
        return !1;
      if (c.type.name === "ElLabelWrap")
        return !0;
      c = c.parent;
    }
    return !1;
  }, i = R();
  let a;
  const l = C(() => {
    var c;
    return !!(!(t.label || t.ariaLabel) && e && e.inputIds && ((c = e.inputIds) == null ? void 0 : c.length) <= 1);
  });
  return Te(() => {
    a = se([ht(t, "id"), s], ([c, u]) => {
      const d = c ?? (u ? void 0 : wn().value);
      d !== i.value && (e != null && e.removeInputId && !o() && (i.value && e.removeInputId(i.value), !(n != null && n.value) && !u && d && e.addInputId(d)), i.value = d);
    }, { immediate: !0 });
  }), fa(() => {
    a && a(), e != null && e.removeInputId && i.value && e.removeInputId(i.value);
  }), {
    isLabeledByFormItem: l,
    inputId: i
  };
}, _i = (t) => {
  const e = Se();
  return C(() => {
    var s, n;
    return (n = (s = e == null ? void 0 : e.proxy) == null ? void 0 : s.$props) == null ? void 0 : n[t];
  });
}, bi = (t, e = {}) => {
  const s = R(void 0), n = e.prop ? s : _i("size"), r = e.global ? s : lu(), o = e.form ? { size: void 0 } : de(er, void 0), i = e.formItem ? { size: void 0 } : de(mi, void 0);
  return C(() => n.value || m(t) || (i == null ? void 0 : i.size) || (o == null ? void 0 : o.size) || r.value || "");
}, tr = (t) => {
  const e = _i("disabled"), s = de(er, void 0);
  return C(() => e.value || m(t) || (s == null ? void 0 : s.disabled) || !1);
}, sd = 'a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])', nd = (t) => getComputedStyle(t).position === "fixed" ? !1 : t.offsetParent !== null, Kr = (t) => Array.from(t.querySelectorAll(sd)).filter((e) => sr(e) && nd(e)), sr = (t) => {
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
function rd(t, {
  disabled: e,
  beforeFocus: s,
  afterFocus: n,
  beforeBlur: r,
  afterBlur: o
} = {}) {
  const i = Se(), { emit: a } = i, l = Ht(), c = R(!1), u = (p) => {
    const h = Be(s) ? s(p) : !1;
    m(e) || c.value || h || (c.value = !0, a("focus", p), n == null || n());
  }, d = (p) => {
    var h;
    const g = Be(r) ? r(p) : !1;
    m(e) || p.relatedTarget && ((h = l.value) != null && h.contains(p.relatedTarget)) || g || (c.value = !1, a("blur", p), o == null || o());
  }, f = (p) => {
    var h, g;
    m(e) || sr(p.target) || (h = l.value) != null && h.contains(document.activeElement) && l.value !== document.activeElement || (g = t.value) == null || g.focus();
  };
  return se([l, () => m(e)], ([p, h]) => {
    p && (h ? p.removeAttribute("tabindex") : p.setAttribute("tabindex", "-1"));
  }), Es(l, "focus", u, !0), Es(l, "blur", d, !0), Es(l, "click", f, !0), {
    isFocused: c,
    wrapperRef: l,
    handleFocus: u,
    handleBlur: d
  };
}
const od = (t) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(t);
function id({
  afterComposition: t,
  emit: e
}) {
  const s = R(!1), n = (a) => {
    e == null || e("compositionstart", a), s.value = !0;
  }, r = (a) => {
    var l;
    e == null || e("compositionupdate", a);
    const c = (l = a.target) == null ? void 0 : l.value, u = c[c.length - 1] || "";
    s.value = !od(u);
  }, o = (a) => {
    e == null || e("compositionend", a), s.value && (s.value = !1, oe(() => t(a)));
  };
  return {
    isComposing: s,
    handleComposition: (a) => {
      a.type === "compositionend" ? o(a) : r(a);
    },
    handleCompositionStart: n,
    handleCompositionUpdate: r,
    handleCompositionEnd: o
  };
}
function ad(t) {
  let e;
  function s() {
    if (t.value == null)
      return;
    const { selectionStart: r, selectionEnd: o, value: i } = t.value;
    if (r == null || o == null)
      return;
    const a = i.slice(0, Math.max(0, r)), l = i.slice(Math.max(0, o));
    e = {
      selectionStart: r,
      selectionEnd: o,
      value: i,
      beforeTxt: a,
      afterTxt: l
    };
  }
  function n() {
    if (t.value == null || e == null)
      return;
    const { value: r } = t.value, { beforeTxt: o, afterTxt: i, selectionStart: a } = e;
    if (o == null || i == null || a == null)
      return;
    let l = r.length;
    if (r.endsWith(i))
      l = r.length - i.length;
    else if (r.startsWith(o))
      l = o.length;
    else {
      const c = o[a - 1], u = r.indexOf(c, a - 1);
      u !== -1 && (l = u + 1);
    }
    t.value.setSelectionRange(l, l);
  }
  return [s, n];
}
const ld = "ElInput", cd = G({
  name: ld,
  inheritAttrs: !1
}), ud = /* @__PURE__ */ G({
  ...cd,
  props: Gu,
  emits: Ju,
  setup(t, { expose: e, emit: s }) {
    const n = t, r = pa(), o = Zu(), i = Lo(), a = C(() => [
      n.type === "textarea" ? g.b() : h.b(),
      h.m(f.value),
      h.is("disabled", p.value),
      h.is("exceed", cs.value),
      {
        [h.b("group")]: i.prepend || i.append,
        [h.m("prefix")]: i.prefix || n.prefixIcon,
        [h.m("suffix")]: i.suffix || n.suffixIcon || n.clearable || n.showPassword,
        [h.bm("suffix", "password-clear")]: N.value && D.value,
        [h.b("hidden")]: n.type === "hidden"
      },
      r.class
    ]), l = C(() => [
      h.e("wrapper"),
      h.is("focus", q.value)
    ]), { form: c, formItem: u } = yi(), { inputId: d } = td(n, {
      formItemContext: u
    }), f = bi(), p = tr(), h = Ne("input"), g = Ne("textarea"), _ = Ht(), v = Ht(), k = R(!1), y = R(!1), A = R(), L = Ht(n.inputStyle), j = C(() => _.value || v.value), { wrapperRef: P, isFocused: q, handleFocus: K, handleBlur: S } = rd(j, {
      disabled: p,
      afterBlur() {
        var T;
        n.validateEvent && ((T = u == null ? void 0 : u.validate) == null || T.call(u, "blur").catch((J) => void 0));
      }
    }), b = C(() => {
      var T;
      return (T = c == null ? void 0 : c.statusIcon) != null ? T : !1;
    }), O = C(() => (u == null ? void 0 : u.validateState) || ""), Q = C(() => O.value && Fu[O.value]), he = C(() => y.value ? Du : Nu), x = C(() => [
      r.style
    ]), w = C(() => [
      n.inputStyle,
      L.value,
      { resize: n.resize }
    ]), I = C(() => Yo(n.modelValue) ? "" : String(n.modelValue)), N = C(() => n.clearable && !p.value && !n.readonly && !!I.value && (q.value || k.value)), D = C(() => n.showPassword && !p.value && !!I.value), te = C(() => n.showWordLimit && !!n.maxlength && (n.type === "text" || n.type === "textarea") && !p.value && !n.readonly && !n.showPassword), ye = C(() => I.value.length), cs = C(() => !!te.value && ye.value > Number(n.maxlength)), Xs = C(() => !!i.suffix || !!n.suffixIcon || N.value || n.showPassword || te.value || !!O.value && b.value), [V, Re] = ad(_);
    ei(v, (T) => {
      if (oa(), !te.value || n.resize !== "both")
        return;
      const J = T[0], { width: wt } = J.contentRect;
      A.value = {
        right: `calc(100% - ${wt + 15 + 6}px)`
      };
    });
    const Le = () => {
      const { type: T, autosize: J } = n;
      if (!(!ve || T !== "textarea" || !v.value))
        if (J) {
          const wt = jt(J) ? J.minRows : void 0, _r = jt(J) ? J.maxRows : void 0, br = Hr(v.value, wt, _r);
          L.value = {
            overflowY: "hidden",
            ...br
          }, oe(() => {
            v.value.offsetHeight, L.value = br;
          });
        } else
          L.value = {
            minHeight: Hr(v.value).minHeight
          };
    }, oa = ((T) => {
      let J = !1;
      return () => {
        var wt;
        if (J || !n.autosize)
          return;
        ((wt = v.value) == null ? void 0 : wt.offsetParent) === null || (T(), J = !0);
      };
    })(Le), Dt = () => {
      const T = j.value, J = n.formatter ? n.formatter(I.value) : I.value;
      !T || T.value === J || (T.value = J);
    }, Zs = async (T) => {
      V();
      let { value: J } = T.target;
      if (n.formatter && n.parser && (J = n.parser(J)), !fr.value) {
        if (J === I.value) {
          Dt();
          return;
        }
        s(_n, J), s(zr, J), await oe(), Dt(), Re();
      }
    }, hr = (T) => {
      let { value: J } = T.target;
      n.formatter && n.parser && (J = n.parser(J)), s(Fr, J);
    }, {
      isComposing: fr,
      handleCompositionStart: pr,
      handleCompositionUpdate: gr,
      handleCompositionEnd: vr
    } = id({ emit: s, afterComposition: Zs }), ia = () => {
      V(), y.value = !y.value, setTimeout(Re);
    }, aa = () => {
      var T;
      return (T = j.value) == null ? void 0 : T.focus();
    }, la = () => {
      var T;
      return (T = j.value) == null ? void 0 : T.blur();
    }, ca = (T) => {
      k.value = !1, s("mouseleave", T);
    }, ua = (T) => {
      k.value = !0, s("mouseenter", T);
    }, mr = (T) => {
      s("keydown", T);
    }, da = () => {
      var T;
      (T = j.value) == null || T.select();
    }, yr = () => {
      s(_n, ""), s(Fr, ""), s("clear"), s(zr, "");
    };
    return se(() => n.modelValue, () => {
      var T;
      oe(() => Le()), n.validateEvent && ((T = u == null ? void 0 : u.validate) == null || T.call(u, "change").catch((J) => void 0));
    }), se(I, () => Dt()), se(() => n.type, async () => {
      await oe(), Dt(), Le();
    }), Te(() => {
      !n.formatter && n.parser, Dt(), oe(Le);
    }), e({
      input: _,
      textarea: v,
      ref: j,
      textareaStyle: w,
      autosize: ht(n, "autosize"),
      isComposing: fr,
      focus: aa,
      blur: la,
      select: da,
      clear: yr,
      resizeTextarea: Le
    }), (T, J) => (E(), M("div", {
      class: U([
        m(a),
        {
          [m(h).bm("group", "append")]: T.$slots.append,
          [m(h).bm("group", "prepend")]: T.$slots.prepend
        }
      ]),
      style: pt(m(x)),
      onMouseenter: ua,
      onMouseleave: ca
    }, [
      z(" input "),
      T.type !== "textarea" ? (E(), M(Qe, { key: 0 }, [
        z(" prepend slot "),
        T.$slots.prepend ? (E(), M("div", {
          key: 0,
          class: U(m(h).be("group", "prepend"))
        }, [
          ie(T.$slots, "prepend")
        ], 2)) : z("v-if", !0),
        $("div", {
          ref_key: "wrapperRef",
          ref: P,
          class: U(m(l))
        }, [
          z(" prefix slot "),
          T.$slots.prefix || T.prefixIcon ? (E(), M("span", {
            key: 0,
            class: U(m(h).e("prefix"))
          }, [
            $("span", {
              class: U(m(h).e("prefix-inner"))
            }, [
              ie(T.$slots, "prefix"),
              T.prefixIcon ? (E(), W(m(je), {
                key: 0,
                class: U(m(h).e("icon"))
              }, {
                default: B(() => [
                  (E(), W(ge(T.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : z("v-if", !0)
            ], 2)
          ], 2)) : z("v-if", !0),
          $("input", Cs({
            id: m(d),
            ref_key: "input",
            ref: _,
            class: m(h).e("inner")
          }, m(o), {
            name: T.name,
            minlength: T.minlength,
            maxlength: T.maxlength,
            type: T.showPassword ? y.value ? "text" : "password" : T.type,
            disabled: m(p),
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
            onCompositionstart: m(pr),
            onCompositionupdate: m(gr),
            onCompositionend: m(vr),
            onInput: Zs,
            onChange: hr,
            onKeydown: mr
          }), null, 16, ["id", "name", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "inputmode", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          z(" suffix slot "),
          m(Xs) ? (E(), M("span", {
            key: 1,
            class: U(m(h).e("suffix"))
          }, [
            $("span", {
              class: U(m(h).e("suffix-inner"))
            }, [
              !m(N) || !m(D) || !m(te) ? (E(), M(Qe, { key: 0 }, [
                ie(T.$slots, "suffix"),
                T.suffixIcon ? (E(), W(m(je), {
                  key: 0,
                  class: U(m(h).e("icon"))
                }, {
                  default: B(() => [
                    (E(), W(ge(T.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : z("v-if", !0)
              ], 64)) : z("v-if", !0),
              m(N) ? (E(), W(m(je), {
                key: 1,
                class: U([m(h).e("icon"), m(h).e("clear")]),
                onMousedown: Ae(m(Gt), ["prevent"]),
                onClick: yr
              }, {
                default: B(() => [
                  (E(), W(ge(T.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : z("v-if", !0),
              m(D) ? (E(), W(m(je), {
                key: 2,
                class: U([m(h).e("icon"), m(h).e("password")]),
                onClick: ia
              }, {
                default: B(() => [
                  (E(), W(ge(m(he))))
                ]),
                _: 1
              }, 8, ["class"])) : z("v-if", !0),
              m(te) ? (E(), M("span", {
                key: 3,
                class: U(m(h).e("count"))
              }, [
                $("span", {
                  class: U(m(h).e("count-inner"))
                }, Z(m(ye)) + " / " + Z(T.maxlength), 3)
              ], 2)) : z("v-if", !0),
              m(O) && m(Q) && m(b) ? (E(), W(m(je), {
                key: 4,
                class: U([
                  m(h).e("icon"),
                  m(h).e("validateIcon"),
                  m(h).is("loading", m(O) === "validating")
                ])
              }, {
                default: B(() => [
                  (E(), W(ge(m(Q))))
                ]),
                _: 1
              }, 8, ["class"])) : z("v-if", !0)
            ], 2)
          ], 2)) : z("v-if", !0)
        ], 2),
        z(" append slot "),
        T.$slots.append ? (E(), M("div", {
          key: 1,
          class: U(m(h).be("group", "append"))
        }, [
          ie(T.$slots, "append")
        ], 2)) : z("v-if", !0)
      ], 64)) : (E(), M(Qe, { key: 1 }, [
        z(" textarea "),
        $("textarea", Cs({
          id: m(d),
          ref_key: "textarea",
          ref: v,
          class: [m(g).e("inner"), m(h).is("focus", m(q))]
        }, m(o), {
          minlength: T.minlength,
          maxlength: T.maxlength,
          tabindex: T.tabindex,
          disabled: m(p),
          readonly: T.readonly,
          autocomplete: T.autocomplete,
          style: m(w),
          "aria-label": T.ariaLabel,
          placeholder: T.placeholder,
          form: T.form,
          autofocus: T.autofocus,
          rows: T.rows,
          role: T.containerRole,
          onCompositionstart: m(pr),
          onCompositionupdate: m(gr),
          onCompositionend: m(vr),
          onInput: Zs,
          onFocus: m(K),
          onBlur: m(S),
          onChange: hr,
          onKeydown: mr
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        m(te) ? (E(), M("span", {
          key: 0,
          style: pt(A.value),
          class: U(m(h).e("count"))
        }, Z(m(ye)) + " / " + Z(T.maxlength), 7)) : z("v-if", !0)
      ], 64))
    ], 38));
  }
});
var dd = /* @__PURE__ */ st(ud, [["__file", "input.vue"]]);
const hd = zs(dd), nn = "focus-trap.focus-after-trapped", rn = "focus-trap.focus-after-released", fd = "focus-trap.focusout-prevented", Gr = {
  cancelable: !0,
  bubbles: !1
}, pd = {
  cancelable: !0,
  bubbles: !1
}, Jr = "focusAfterTrapped", Yr = "focusAfterReleased", gd = Symbol("elFocusTrap"), nr = R(), Vs = R(0), rr = R(0);
let fs = 0;
const wi = (t) => {
  const e = [], s = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const r = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || r ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 || n === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; s.nextNode(); )
    e.push(s.currentNode);
  return e;
}, Xr = (t, e) => {
  for (const s of t)
    if (!vd(s, e))
      return s;
}, vd = (t, e) => {
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
}, md = (t) => {
  const e = wi(t), s = Xr(e, t), n = Xr(e.reverse(), t);
  return [s, n];
}, yd = (t) => t instanceof HTMLInputElement && "select" in t, Ke = (t, e) => {
  if (t && t.focus) {
    const s = document.activeElement;
    let n = !1;
    ts(t) && !sr(t) && !t.getAttribute("tabindex") && (t.setAttribute("tabindex", "-1"), n = !0), t.focus({ preventScroll: !0 }), rr.value = window.performance.now(), t !== s && yd(t) && e && t.select(), ts(t) && n && t.removeAttribute("tabindex");
  }
};
function Zr(t, e) {
  const s = [...t], n = t.indexOf(e);
  return n !== -1 && s.splice(n, 1), s;
}
const _d = () => {
  let t = [];
  return {
    push: (n) => {
      const r = t[0];
      r && n !== r && r.pause(), t = Zr(t, n), t.unshift(n);
    },
    remove: (n) => {
      var r, o;
      t = Zr(t, n), (o = (r = t[0]) == null ? void 0 : r.resume) == null || o.call(r);
    }
  };
}, bd = (t, e = !1) => {
  const s = document.activeElement;
  for (const n of t)
    if (Ke(n, e), document.activeElement !== s)
      return;
}, Qr = _d(), wd = () => Vs.value > rr.value, ps = () => {
  nr.value = "pointer", Vs.value = window.performance.now();
}, eo = () => {
  nr.value = "keyboard", Vs.value = window.performance.now();
}, kd = () => (Te(() => {
  fs === 0 && (document.addEventListener("mousedown", ps), document.addEventListener("touchstart", ps), document.addEventListener("keydown", eo)), fs++;
}), os(() => {
  fs--, fs <= 0 && (document.removeEventListener("mousedown", ps), document.removeEventListener("touchstart", ps), document.removeEventListener("keydown", eo));
}), {
  focusReason: nr,
  lastUserFocusTimestamp: Vs,
  lastAutomatedFocusTimestamp: rr
}), gs = (t) => new CustomEvent(fd, {
  ...pd,
  detail: t
}), Ws = {
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
let It = [];
const to = (t) => {
  t.code === Ws.esc && It.forEach((e) => e(t));
}, Sd = (t) => {
  Te(() => {
    It.length === 0 && document.addEventListener("keydown", to), ve && It.push(t);
  }), os(() => {
    It = It.filter((e) => e !== t), It.length === 0 && ve && document.removeEventListener("keydown", to);
  });
}, Ed = G({
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
    Jr,
    Yr,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(t, { emit: e }) {
    const s = R();
    let n, r;
    const { focusReason: o } = kd();
    Sd((h) => {
      t.trapped && !i.paused && e("release-requested", h);
    });
    const i = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, a = (h) => {
      if (!t.loop && !t.trapped || i.paused)
        return;
      const { code: g, altKey: _, ctrlKey: v, metaKey: k, currentTarget: y, shiftKey: A } = h, { loop: L } = t, j = g === Ws.tab && !_ && !v && !k, P = document.activeElement;
      if (j && P) {
        const q = y, [K, S] = md(q);
        if (K && S) {
          if (!A && P === S) {
            const O = gs({
              focusReason: o.value
            });
            e("focusout-prevented", O), O.defaultPrevented || (h.preventDefault(), L && Ke(K, !0));
          } else if (A && [K, q].includes(P)) {
            const O = gs({
              focusReason: o.value
            });
            e("focusout-prevented", O), O.defaultPrevented || (h.preventDefault(), L && Ke(S, !0));
          }
        } else if (P === q) {
          const O = gs({
            focusReason: o.value
          });
          e("focusout-prevented", O), O.defaultPrevented || h.preventDefault();
        }
      }
    };
    Dn(gd, {
      focusTrapRef: s,
      onKeydown: a
    }), se(() => t.focusTrapEl, (h) => {
      h && (s.value = h);
    }, { immediate: !0 }), se([s], ([h], [g]) => {
      h && (h.addEventListener("keydown", a), h.addEventListener("focusin", u), h.addEventListener("focusout", d)), g && (g.removeEventListener("keydown", a), g.removeEventListener("focusin", u), g.removeEventListener("focusout", d));
    });
    const l = (h) => {
      e(Jr, h);
    }, c = (h) => e(Yr, h), u = (h) => {
      const g = m(s);
      if (!g)
        return;
      const _ = h.target, v = h.relatedTarget, k = _ && g.contains(_);
      t.trapped || v && g.contains(v) || (n = v), k && e("focusin", h), !i.paused && t.trapped && (k ? r = _ : Ke(r, !0));
    }, d = (h) => {
      const g = m(s);
      if (!(i.paused || !g))
        if (t.trapped) {
          const _ = h.relatedTarget;
          !Yo(_) && !g.contains(_) && setTimeout(() => {
            if (!i.paused && t.trapped) {
              const v = gs({
                focusReason: o.value
              });
              e("focusout-prevented", v), v.defaultPrevented || Ke(r, !0);
            }
          }, 0);
        } else {
          const _ = h.target;
          _ && g.contains(_) || e("focusout", h);
        }
    };
    async function f() {
      await oe();
      const h = m(s);
      if (h) {
        Qr.push(i);
        const g = h.contains(document.activeElement) ? n : document.activeElement;
        if (n = g, !h.contains(g)) {
          const v = new Event(nn, Gr);
          h.addEventListener(nn, l), h.dispatchEvent(v), v.defaultPrevented || oe(() => {
            let k = t.focusStartEl;
            ke(k) || (Ke(k), document.activeElement !== k && (k = "first")), k === "first" && bd(wi(h), !0), (document.activeElement === g || k === "container") && Ke(h);
          });
        }
      }
    }
    function p() {
      const h = m(s);
      if (h) {
        h.removeEventListener(nn, l);
        const g = new CustomEvent(rn, {
          ...Gr,
          detail: {
            focusReason: o.value
          }
        });
        h.addEventListener(rn, c), h.dispatchEvent(g), !g.defaultPrevented && (o.value == "keyboard" || !wd() || h.contains(document.activeElement)) && Ke(n ?? document.body), h.removeEventListener(rn, c), Qr.remove(i);
      }
    }
    return Te(() => {
      t.trapped && f(), se(() => t.trapped, (h) => {
        h ? f() : p();
      });
    }), os(() => {
      t.trapped && p(), s.value && (s.value.removeEventListener("keydown", a), s.value.removeEventListener("focusin", u), s.value.removeEventListener("focusout", d), s.value = void 0);
    }), {
      onKeydown: a
    };
  }
});
function Td(t, e, s, n, r, o) {
  return ie(t.$slots, "default", { handleKeydown: t.onKeydown });
}
var Cd = /* @__PURE__ */ st(Ed, [["render", Td], ["__file", "focus-trap.vue"]]);
const Od = We({
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
}), Id = G({
  name: "ElBadge"
}), Ad = /* @__PURE__ */ G({
  ...Id,
  props: Od,
  setup(t, { expose: e }) {
    const s = t, n = Ne("badge"), r = C(() => s.isDot ? "" : Fe(s.value) && Fe(s.max) ? s.max < s.value ? `${s.max}+` : `${s.value}` : `${s.value}`), o = C(() => {
      var i, a, l, c, u;
      return [
        {
          backgroundColor: s.color,
          marginRight: ss(-((a = (i = s.offset) == null ? void 0 : i[0]) != null ? a : 0)),
          marginTop: ss((c = (l = s.offset) == null ? void 0 : l[1]) != null ? c : 0)
        },
        (u = s.badgeStyle) != null ? u : {}
      ];
    });
    return e({
      content: r
    }), (i, a) => (E(), M("div", {
      class: U(m(n).b())
    }, [
      ie(i.$slots, "default"),
      X(Bn, {
        name: `${m(n).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: B(() => [
          qt($("sup", {
            class: U([
              m(n).e("content"),
              m(n).em("content", i.type),
              m(n).is("fixed", !!i.$slots.default),
              m(n).is("dot", i.isDot),
              m(n).is("hide-zero", !i.showZero && s.value === 0),
              i.badgeClass
            ]),
            style: pt(m(o))
          }, [
            ie(i.$slots, "content", { value: m(r) }, () => [
              xe(Z(m(r)), 1)
            ])
          ], 6), [
            [Kt, !i.hidden && (m(r) || i.isDot || i.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Pd = /* @__PURE__ */ st(Ad, [["__file", "badge.vue"]]);
const $d = zs(Pd), ki = Symbol("buttonGroupContextKey"), xd = ({ from: t, replacement: e, scope: s, version: n, ref: r, type: o = "API" }, i) => {
  se(() => m(i), (a) => {
  }, {
    immediate: !0
  });
}, jd = (t, e) => {
  xd({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, C(() => t.type === "text"));
  const s = de(ki, void 0), n = Qn("button"), { form: r } = yi(), o = bi(C(() => s == null ? void 0 : s.size)), i = tr(), a = R(), l = Lo(), c = C(() => {
    var v;
    return t.type || (s == null ? void 0 : s.type) || ((v = n.value) == null ? void 0 : v.type) || "";
  }), u = C(() => {
    var v, k, y;
    return (y = (k = t.autoInsertSpace) != null ? k : (v = n.value) == null ? void 0 : v.autoInsertSpace) != null ? y : !1;
  }), d = C(() => {
    var v, k, y;
    return (y = (k = t.plain) != null ? k : (v = n.value) == null ? void 0 : v.plain) != null ? y : !1;
  }), f = C(() => {
    var v, k, y;
    return (y = (k = t.round) != null ? k : (v = n.value) == null ? void 0 : v.round) != null ? y : !1;
  }), p = C(() => {
    var v, k, y;
    return (y = (k = t.text) != null ? k : (v = n.value) == null ? void 0 : v.text) != null ? y : !1;
  }), h = C(() => t.tag === "button" ? {
    ariaDisabled: i.value || t.loading,
    disabled: i.value || t.loading,
    autofocus: t.autofocus,
    type: t.nativeType
  } : {}), g = C(() => {
    var v;
    const k = (v = l.default) == null ? void 0 : v.call(l);
    if (u.value && (k == null ? void 0 : k.length) === 1) {
      const y = k[0];
      if ((y == null ? void 0 : y.type) === ga) {
        const A = y.children;
        return /^\p{Unified_Ideograph}{2}$/u.test(A.trim());
      }
    }
    return !1;
  });
  return {
    _disabled: i,
    _size: o,
    _type: c,
    _ref: a,
    _props: h,
    _plain: d,
    _round: f,
    _text: p,
    shouldAddSpace: g,
    handleClick: (v) => {
      if (i.value || t.loading) {
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
], Rd = ["button", "submit", "reset"], kn = We({
  size: Zn,
  disabled: Boolean,
  type: {
    type: String,
    values: Nd,
    default: ""
  },
  icon: {
    type: $t
  },
  nativeType: {
    type: String,
    values: Rd,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: $t,
    default: () => $s
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
}), Ld = {
  click: (t) => t instanceof MouseEvent
};
function ae(t, e) {
  Md(t) && (t = "100%");
  var s = Ud(t);
  return t = e === 360 ? t : Math.min(e, Math.max(0, parseFloat(t))), s && (t = parseInt(String(t * e), 10) / 100), Math.abs(t - e) < 1e-6 ? 1 : (e === 360 ? t = (t < 0 ? t % e + e : t % e) / parseFloat(String(e)) : t = t % e / parseFloat(String(e)), t);
}
function vs(t) {
  return Math.min(1, Math.max(0, t));
}
function Md(t) {
  return typeof t == "string" && t.indexOf(".") !== -1 && parseFloat(t) === 1;
}
function Ud(t) {
  return typeof t == "string" && t.indexOf("%") !== -1;
}
function Si(t) {
  return t = parseFloat(t), (isNaN(t) || t < 0 || t > 1) && (t = 1), t;
}
function ms(t) {
  return t <= 1 ? "".concat(Number(t) * 100, "%") : t;
}
function ct(t) {
  return t.length === 1 ? "0" + t : String(t);
}
function Dd(t, e, s) {
  return {
    r: ae(t, 255) * 255,
    g: ae(e, 255) * 255,
    b: ae(s, 255) * 255
  };
}
function so(t, e, s) {
  t = ae(t, 255), e = ae(e, 255), s = ae(s, 255);
  var n = Math.max(t, e, s), r = Math.min(t, e, s), o = 0, i = 0, a = (n + r) / 2;
  if (n === r)
    i = 0, o = 0;
  else {
    var l = n - r;
    switch (i = a > 0.5 ? l / (2 - n - r) : l / (n + r), n) {
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
  return { h: o, s: i, l: a };
}
function on(t, e, s) {
  return s < 0 && (s += 1), s > 1 && (s -= 1), s < 1 / 6 ? t + (e - t) * (6 * s) : s < 1 / 2 ? e : s < 2 / 3 ? t + (e - t) * (2 / 3 - s) * 6 : t;
}
function Bd(t, e, s) {
  var n, r, o;
  if (t = ae(t, 360), e = ae(e, 100), s = ae(s, 100), e === 0)
    r = s, o = s, n = s;
  else {
    var i = s < 0.5 ? s * (1 + e) : s + e - s * e, a = 2 * s - i;
    n = on(a, i, t + 1 / 3), r = on(a, i, t), o = on(a, i, t - 1 / 3);
  }
  return { r: n * 255, g: r * 255, b: o * 255 };
}
function no(t, e, s) {
  t = ae(t, 255), e = ae(e, 255), s = ae(s, 255);
  var n = Math.max(t, e, s), r = Math.min(t, e, s), o = 0, i = n, a = n - r, l = n === 0 ? 0 : a / n;
  if (n === r)
    o = 0;
  else {
    switch (n) {
      case t:
        o = (e - s) / a + (e < s ? 6 : 0);
        break;
      case e:
        o = (s - t) / a + 2;
        break;
      case s:
        o = (t - e) / a + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s: l, v: i };
}
function Fd(t, e, s) {
  t = ae(t, 360) * 6, e = ae(e, 100), s = ae(s, 100);
  var n = Math.floor(t), r = t - n, o = s * (1 - e), i = s * (1 - r * e), a = s * (1 - (1 - r) * e), l = n % 6, c = [s, i, o, o, a, s][l], u = [a, s, s, i, o, o][l], d = [o, o, a, s, s, i][l];
  return { r: c * 255, g: u * 255, b: d * 255 };
}
function ro(t, e, s, n) {
  var r = [
    ct(Math.round(t).toString(16)),
    ct(Math.round(e).toString(16)),
    ct(Math.round(s).toString(16))
  ];
  return n && r[0].startsWith(r[0].charAt(1)) && r[1].startsWith(r[1].charAt(1)) && r[2].startsWith(r[2].charAt(1)) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("");
}
function zd(t, e, s, n, r) {
  var o = [
    ct(Math.round(t).toString(16)),
    ct(Math.round(e).toString(16)),
    ct(Math.round(s).toString(16)),
    ct(Vd(n))
  ];
  return r && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) && o[3].startsWith(o[3].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}
function Vd(t) {
  return Math.round(parseFloat(t) * 255).toString(16);
}
function oo(t) {
  return me(t) / 255;
}
function me(t) {
  return parseInt(t, 16);
}
function Wd(t) {
  return {
    r: t >> 16,
    g: (t & 65280) >> 8,
    b: t & 255
  };
}
var Sn = {
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
function Hd(t) {
  var e = { r: 0, g: 0, b: 0 }, s = 1, n = null, r = null, o = null, i = !1, a = !1;
  return typeof t == "string" && (t = Gd(t)), typeof t == "object" && (Me(t.r) && Me(t.g) && Me(t.b) ? (e = Dd(t.r, t.g, t.b), i = !0, a = String(t.r).substr(-1) === "%" ? "prgb" : "rgb") : Me(t.h) && Me(t.s) && Me(t.v) ? (n = ms(t.s), r = ms(t.v), e = Fd(t.h, n, r), i = !0, a = "hsv") : Me(t.h) && Me(t.s) && Me(t.l) && (n = ms(t.s), o = ms(t.l), e = Bd(t.h, n, o), i = !0, a = "hsl"), Object.prototype.hasOwnProperty.call(t, "a") && (s = t.a)), s = Si(s), {
    ok: i,
    format: t.format || a,
    r: Math.min(255, Math.max(e.r, 0)),
    g: Math.min(255, Math.max(e.g, 0)),
    b: Math.min(255, Math.max(e.b, 0)),
    a: s
  };
}
var qd = "[-\\+]?\\d+%?", Kd = "[-\\+]?\\d*\\.\\d+%?", Ze = "(?:".concat(Kd, ")|(?:").concat(qd, ")"), an = "[\\s|\\(]+(".concat(Ze, ")[,|\\s]+(").concat(Ze, ")[,|\\s]+(").concat(Ze, ")\\s*\\)?"), ln = "[\\s|\\(]+(".concat(Ze, ")[,|\\s]+(").concat(Ze, ")[,|\\s]+(").concat(Ze, ")[,|\\s]+(").concat(Ze, ")\\s*\\)?"), Ce = {
  CSS_UNIT: new RegExp(Ze),
  rgb: new RegExp("rgb" + an),
  rgba: new RegExp("rgba" + ln),
  hsl: new RegExp("hsl" + an),
  hsla: new RegExp("hsla" + ln),
  hsv: new RegExp("hsv" + an),
  hsva: new RegExp("hsva" + ln),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function Gd(t) {
  if (t = t.trim().toLowerCase(), t.length === 0)
    return !1;
  var e = !1;
  if (Sn[t])
    t = Sn[t], e = !0;
  else if (t === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var s = Ce.rgb.exec(t);
  return s ? { r: s[1], g: s[2], b: s[3] } : (s = Ce.rgba.exec(t), s ? { r: s[1], g: s[2], b: s[3], a: s[4] } : (s = Ce.hsl.exec(t), s ? { h: s[1], s: s[2], l: s[3] } : (s = Ce.hsla.exec(t), s ? { h: s[1], s: s[2], l: s[3], a: s[4] } : (s = Ce.hsv.exec(t), s ? { h: s[1], s: s[2], v: s[3] } : (s = Ce.hsva.exec(t), s ? { h: s[1], s: s[2], v: s[3], a: s[4] } : (s = Ce.hex8.exec(t), s ? {
    r: me(s[1]),
    g: me(s[2]),
    b: me(s[3]),
    a: oo(s[4]),
    format: e ? "name" : "hex8"
  } : (s = Ce.hex6.exec(t), s ? {
    r: me(s[1]),
    g: me(s[2]),
    b: me(s[3]),
    format: e ? "name" : "hex"
  } : (s = Ce.hex4.exec(t), s ? {
    r: me(s[1] + s[1]),
    g: me(s[2] + s[2]),
    b: me(s[3] + s[3]),
    a: oo(s[4] + s[4]),
    format: e ? "name" : "hex8"
  } : (s = Ce.hex3.exec(t), s ? {
    r: me(s[1] + s[1]),
    g: me(s[2] + s[2]),
    b: me(s[3] + s[3]),
    format: e ? "name" : "hex"
  } : !1)))))))));
}
function Me(t) {
  return !!Ce.CSS_UNIT.exec(String(t));
}
var Jd = (
  /** @class */
  function() {
    function t(e, s) {
      e === void 0 && (e = ""), s === void 0 && (s = {});
      var n;
      if (e instanceof t)
        return e;
      typeof e == "number" && (e = Wd(e)), this.originalInput = e;
      var r = Hd(e);
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
      var e = this.toRgb(), s, n, r, o = e.r / 255, i = e.g / 255, a = e.b / 255;
      return o <= 0.03928 ? s = o / 12.92 : s = Math.pow((o + 0.055) / 1.055, 2.4), i <= 0.03928 ? n = i / 12.92 : n = Math.pow((i + 0.055) / 1.055, 2.4), a <= 0.03928 ? r = a / 12.92 : r = Math.pow((a + 0.055) / 1.055, 2.4), 0.2126 * s + 0.7152 * n + 0.0722 * r;
    }, t.prototype.getAlpha = function() {
      return this.a;
    }, t.prototype.setAlpha = function(e) {
      return this.a = Si(e), this.roundA = Math.round(100 * this.a) / 100, this;
    }, t.prototype.isMonochrome = function() {
      var e = this.toHsl().s;
      return e === 0;
    }, t.prototype.toHsv = function() {
      var e = no(this.r, this.g, this.b);
      return { h: e.h * 360, s: e.s, v: e.v, a: this.a };
    }, t.prototype.toHsvString = function() {
      var e = no(this.r, this.g, this.b), s = Math.round(e.h * 360), n = Math.round(e.s * 100), r = Math.round(e.v * 100);
      return this.a === 1 ? "hsv(".concat(s, ", ").concat(n, "%, ").concat(r, "%)") : "hsva(".concat(s, ", ").concat(n, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, t.prototype.toHsl = function() {
      var e = so(this.r, this.g, this.b);
      return { h: e.h * 360, s: e.s, l: e.l, a: this.a };
    }, t.prototype.toHslString = function() {
      var e = so(this.r, this.g, this.b), s = Math.round(e.h * 360), n = Math.round(e.s * 100), r = Math.round(e.l * 100);
      return this.a === 1 ? "hsl(".concat(s, ", ").concat(n, "%, ").concat(r, "%)") : "hsla(".concat(s, ", ").concat(n, "%, ").concat(r, "%, ").concat(this.roundA, ")");
    }, t.prototype.toHex = function(e) {
      return e === void 0 && (e = !1), ro(this.r, this.g, this.b, e);
    }, t.prototype.toHexString = function(e) {
      return e === void 0 && (e = !1), "#" + this.toHex(e);
    }, t.prototype.toHex8 = function(e) {
      return e === void 0 && (e = !1), zd(this.r, this.g, this.b, this.a, e);
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
        return "".concat(Math.round(ae(s, 255) * 100), "%");
      };
      return {
        r: e(this.r),
        g: e(this.g),
        b: e(this.b),
        a: this.a
      };
    }, t.prototype.toPercentageRgbString = function() {
      var e = function(s) {
        return Math.round(ae(s, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(e(this.r), "%, ").concat(e(this.g), "%, ").concat(e(this.b), "%)") : "rgba(".concat(e(this.r), "%, ").concat(e(this.g), "%, ").concat(e(this.b), "%, ").concat(this.roundA, ")");
    }, t.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var e = "#" + ro(this.r, this.g, this.b, !1), s = 0, n = Object.entries(Sn); s < n.length; s++) {
        var r = n[s], o = r[0], i = r[1];
        if (e === i)
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
      return s.l += e / 100, s.l = vs(s.l), new t(s);
    }, t.prototype.brighten = function(e) {
      e === void 0 && (e = 10);
      var s = this.toRgb();
      return s.r = Math.max(0, Math.min(255, s.r - Math.round(255 * -(e / 100)))), s.g = Math.max(0, Math.min(255, s.g - Math.round(255 * -(e / 100)))), s.b = Math.max(0, Math.min(255, s.b - Math.round(255 * -(e / 100)))), new t(s);
    }, t.prototype.darken = function(e) {
      e === void 0 && (e = 10);
      var s = this.toHsl();
      return s.l -= e / 100, s.l = vs(s.l), new t(s);
    }, t.prototype.tint = function(e) {
      return e === void 0 && (e = 10), this.mix("white", e);
    }, t.prototype.shade = function(e) {
      return e === void 0 && (e = 10), this.mix("black", e);
    }, t.prototype.desaturate = function(e) {
      e === void 0 && (e = 10);
      var s = this.toHsl();
      return s.s -= e / 100, s.s = vs(s.s), new t(s);
    }, t.prototype.saturate = function(e) {
      e === void 0 && (e = 10);
      var s = this.toHsl();
      return s.s += e / 100, s.s = vs(s.s), new t(s);
    }, t.prototype.greyscale = function() {
      return this.desaturate(100);
    }, t.prototype.spin = function(e) {
      var s = this.toHsl(), n = (s.h + e) % 360;
      return s.h = n < 0 ? 360 + n : n, new t(s);
    }, t.prototype.mix = function(e, s) {
      s === void 0 && (s = 50);
      var n = this.toRgb(), r = new t(e).toRgb(), o = s / 100, i = {
        r: (r.r - n.r) * o + n.r,
        g: (r.g - n.g) * o + n.g,
        b: (r.b - n.b) * o + n.b,
        a: (r.a - n.a) * o + n.a
      };
      return new t(i);
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
      for (var s = this.toHsv(), n = s.h, r = s.s, o = s.v, i = [], a = 1 / e; e--; )
        i.push(new t({ h: n, s: r, v: o })), o = (o + a) % 1;
      return i;
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
      for (var s = this.toHsl(), n = s.h, r = [this], o = 360 / e, i = 1; i < e; i++)
        r.push(new t({ h: (n + i * o) % 360, s: s.s, l: s.l }));
      return r;
    }, t.prototype.equals = function(e) {
      return this.toRgbString() === new t(e).toRgbString();
    }, t;
  }()
);
function He(t, e = 20) {
  return t.mix("#141414", e).toString();
}
function Yd(t) {
  const e = tr(), s = Ne("button");
  return C(() => {
    let n = {}, r = t.color;
    if (r) {
      const o = r.match(/var\((.*?)\)/);
      o && (r = window.getComputedStyle(window.document.documentElement).getPropertyValue(o[1]));
      const i = new Jd(r), a = t.dark ? i.tint(20).toString() : He(i, 20);
      if (t.plain)
        n = s.cssVarBlock({
          "bg-color": t.dark ? He(i, 90) : i.tint(90).toString(),
          "text-color": r,
          "border-color": t.dark ? He(i, 50) : i.tint(50).toString(),
          "hover-text-color": `var(${s.cssVarName("color-white")})`,
          "hover-bg-color": r,
          "hover-border-color": r,
          "active-bg-color": a,
          "active-text-color": `var(${s.cssVarName("color-white")})`,
          "active-border-color": a
        }), e.value && (n[s.cssVarBlockName("disabled-bg-color")] = t.dark ? He(i, 90) : i.tint(90).toString(), n[s.cssVarBlockName("disabled-text-color")] = t.dark ? He(i, 50) : i.tint(50).toString(), n[s.cssVarBlockName("disabled-border-color")] = t.dark ? He(i, 80) : i.tint(80).toString());
      else {
        const l = t.dark ? He(i, 30) : i.tint(30).toString(), c = i.isDark() ? `var(${s.cssVarName("color-white")})` : `var(${s.cssVarName("color-black")})`;
        if (n = s.cssVarBlock({
          "bg-color": r,
          "text-color": c,
          "border-color": r,
          "hover-bg-color": l,
          "hover-text-color": c,
          "hover-border-color": l,
          "active-bg-color": a,
          "active-border-color": a
        }), e.value) {
          const u = t.dark ? He(i, 50) : i.tint(50).toString();
          n[s.cssVarBlockName("disabled-bg-color")] = u, n[s.cssVarBlockName("disabled-text-color")] = t.dark ? "rgba(255, 255, 255, 0.5)" : `var(${s.cssVarName("color-white")})`, n[s.cssVarBlockName("disabled-border-color")] = u;
        }
      }
    }
    return n;
  });
}
const Xd = G({
  name: "ElButton"
}), Zd = /* @__PURE__ */ G({
  ...Xd,
  props: kn,
  emits: Ld,
  setup(t, { expose: e, emit: s }) {
    const n = t, r = Yd(n), o = Ne("button"), {
      _ref: i,
      _size: a,
      _type: l,
      _disabled: c,
      _props: u,
      _plain: d,
      _round: f,
      _text: p,
      shouldAddSpace: h,
      handleClick: g
    } = jd(n, s), _ = C(() => [
      o.b(),
      o.m(l.value),
      o.m(a.value),
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
      ref: i,
      size: a,
      type: l,
      disabled: c,
      shouldAddSpace: h
    }), (v, k) => (E(), W(ge(v.tag), Cs({
      ref_key: "_ref",
      ref: i
    }, m(u), {
      class: m(_),
      style: m(r),
      onClick: m(g)
    }), {
      default: B(() => [
        v.loading ? (E(), M(Qe, { key: 0 }, [
          v.$slots.loading ? ie(v.$slots, "loading", { key: 0 }) : (E(), W(m(je), {
            key: 1,
            class: U(m(o).is("loading"))
          }, {
            default: B(() => [
              (E(), W(ge(v.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : v.icon || v.$slots.icon ? (E(), W(m(je), { key: 1 }, {
          default: B(() => [
            v.icon ? (E(), W(ge(v.icon), { key: 0 })) : ie(v.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : z("v-if", !0),
        v.$slots.default ? (E(), M("span", {
          key: 2,
          class: U({ [m(o).em("text", "expand")]: m(h) })
        }, [
          ie(v.$slots, "default")
        ], 2)) : z("v-if", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var Qd = /* @__PURE__ */ st(Zd, [["__file", "button.vue"]]);
const eh = {
  size: kn.size,
  type: kn.type
}, th = G({
  name: "ElButtonGroup"
}), sh = /* @__PURE__ */ G({
  ...th,
  props: eh,
  setup(t) {
    const e = t;
    Dn(ki, Fn({
      size: ht(e, "size"),
      type: ht(e, "type")
    }));
    const s = Ne("button");
    return (n, r) => (E(), M("div", {
      class: U(m(s).b("group"))
    }, [
      ie(n.$slots, "default")
    ], 2));
  }
});
var Ei = /* @__PURE__ */ st(sh, [["__file", "button-group.vue"]]);
const nh = zs(Qd, {
  ButtonGroup: Ei
});
_u(Ei);
var Ee = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function rh(t) {
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
var Ts = /* @__PURE__ */ ((t) => (t[t.TEXT = 1] = "TEXT", t[t.CLASS = 2] = "CLASS", t[t.STYLE = 4] = "STYLE", t[t.PROPS = 8] = "PROPS", t[t.FULL_PROPS = 16] = "FULL_PROPS", t[t.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", t[t.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", t[t.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", t[t.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", t[t.NEED_PATCH = 512] = "NEED_PATCH", t[t.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", t[t.HOISTED = -1] = "HOISTED", t[t.BAIL = -2] = "BAIL", t))(Ts || {});
const oh = We({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: ee(Object)
  },
  size: Zn,
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
  ...uu
}), ce = {
  placement: "top"
};
G({
  name: "ElConfigProvider",
  props: oh,
  setup(t, { slots: e }) {
    const s = ci(t);
    return se(() => t.message, (n) => {
      var r, o;
      Object.assign(ce, (o = (r = s == null ? void 0 : s.value) == null ? void 0 : r.message) != null ? o : {}, n ?? {});
    }, { immediate: !0, deep: !0 }), () => ie(e, "default", { config: s == null ? void 0 : s.value });
  }
});
const Ti = (t) => {
  if (!t)
    return { onClick: Gt, onMousedown: Gt, onMouseup: Gt };
  let e = !1, s = !1;
  return { onClick: (i) => {
    e && s && t(i), e = s = !1;
  }, onMousedown: (i) => {
    e = i.target === i.currentTarget;
  }, onMouseup: (i) => {
    s = i.target === i.currentTarget;
  } };
}, ih = We({
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
}), ah = {
  click: (t) => t instanceof MouseEvent
}, lh = "overlay";
var ch = G({
  name: "ElOverlay",
  props: ih,
  emits: ah,
  setup(t, { slots: e, emit: s }) {
    const n = Ne(lh), r = (l) => {
      s("click", l);
    }, { onClick: o, onMousedown: i, onMouseup: a } = Ti(t.customMaskEvent ? void 0 : r);
    return () => t.mask ? X("div", {
      class: [n.b(), t.overlayClass],
      style: {
        zIndex: t.zIndex
      },
      onClick: o,
      onMousedown: i,
      onMouseup: a
    }, [ie(e, "default")], Ts.STYLE | Ts.CLASS | Ts.PROPS, ["onClick", "onMouseup", "onMousedown"]) : va("div", {
      class: t.overlayClass,
      style: {
        zIndex: t.zIndex,
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px"
      }
    }, [ie(e, "default")]);
  }
});
const uh = ch, dh = (t, e, s, n) => {
  const r = {
    offsetX: 0,
    offsetY: 0
  }, o = R(!1), i = (f, p) => {
    if (t.value) {
      const { offsetX: h, offsetY: g } = r, _ = t.value.getBoundingClientRect(), v = _.left, k = _.top, y = _.width, A = _.height, L = document.documentElement.clientWidth, j = document.documentElement.clientHeight, P = -v + h, q = -k + g, K = L - v - y + h, S = j - k - (A < j ? A : 0) + g;
      n != null && n.value || (f = Math.min(Math.max(f, P), K), p = Math.min(Math.max(p, q), S)), r.offsetX = f, r.offsetY = p, t.value.style.transform = `translate(${ss(f)}, ${ss(p)})`;
    }
  }, a = (f) => {
    const p = f.clientX, h = f.clientY, { offsetX: g, offsetY: _ } = r, v = (y) => {
      o.value || (o.value = !0);
      const A = g + y.clientX - p, L = _ + y.clientY - h;
      i(A, L);
    }, k = () => {
      o.value = !1, document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", k);
    };
    document.addEventListener("mousemove", v), document.addEventListener("mouseup", k);
  }, l = () => {
    e.value && t.value && (e.value.addEventListener("mousedown", a), window.addEventListener("resize", d));
  }, c = () => {
    e.value && t.value && (e.value.removeEventListener("mousedown", a), window.removeEventListener("resize", d));
  }, u = () => {
    r.offsetX = 0, r.offsetY = 0, t.value && (t.value.style.transform = "");
  }, d = () => {
    const { offsetX: f, offsetY: p } = r;
    i(f, p);
  };
  return Te(() => {
    Ro(() => {
      s.value ? l() : c();
    });
  }), os(() => {
    c();
  }), {
    isDragging: o,
    resetPosition: u,
    updatePosition: d
  };
}, hh = (t, e = {}) => {
  ft(t) || mu("[useLockscreen]", "You need to pass a ref param to this function");
  const s = e.ns || Ne("popup"), n = C(() => s.bm("parent", "hidden"));
  if (!ve || Vr(document.body, n.value))
    return;
  let r = 0, o = !1, i = "0";
  const a = () => {
    setTimeout(() => {
      typeof document > "u" || o && document && (document.body.style.width = i, fu(document.body, n.value));
    }, 200);
  };
  se(t, (l) => {
    if (!l) {
      a();
      return;
    }
    o = !Vr(document.body, n.value), o && (i = document.body.style.width, hu(document.body, n.value)), r = gu(s.namespace.value);
    const c = document.documentElement.clientHeight < document.body.scrollHeight, u = pu(document.body, "overflowY");
    r > 0 && (c || u === "scroll") && o && (document.body.style.width = `calc(100% - ${r}px)`);
  }), Un(() => a());
}, fh = (t) => ["", ...ii].includes(t), Ci = [
  "primary",
  "success",
  "info",
  "warning",
  "error"
], Oi = [
  "top",
  "top-left",
  "top-right",
  "bottom",
  "bottom-left",
  "bottom-right"
], xt = "top", le = vi({
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
}), ph = We({
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
    type: $t,
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
    values: Ci,
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
    values: Oi,
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
}, Pe = Mo({}), vh = (t) => (Pe[t] || (Pe[t] = Mo([])), Pe[t]), mh = (t, e) => {
  const s = Pe[e] || [], n = s.findIndex((i) => i.id === t), r = s[n];
  let o;
  return n > 0 && (o = s[n - 1]), { current: r, prev: o };
}, yh = (t, e) => {
  const { prev: s } = mh(t, e);
  return s ? s.vm.exposed.bottom.value : 0;
}, _h = (t, e, s) => (Pe[s] || []).findIndex((o) => o.id === t) > 0 ? 16 : e, bh = G({
  name: "ElMessage"
}), wh = /* @__PURE__ */ G({
  ...bh,
  props: ph,
  emits: gh,
  setup(t, { expose: e, emit: s }) {
    const n = t, { Close: r } = gi, o = R(!1), { ns: i, zIndex: a } = li("message"), { currentZIndex: l, nextZIndex: c } = a, u = R(), d = R(!1), f = R(0);
    let p;
    const h = C(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), g = C(() => {
      const O = n.type;
      return { [i.bm("icon", O)]: O && xs[O] };
    }), _ = C(() => n.icon || xs[n.type] || ""), v = C(() => n.placement || xt), k = C(() => yh(n.id, v.value)), y = C(() => _h(n.id, n.offset, v.value) + k.value), A = C(() => f.value + y.value), L = C(() => v.value.includes("left") ? i.is("left") : v.value.includes("right") ? i.is("right") : i.is("center")), j = C(() => v.value.startsWith("top") ? "top" : "bottom"), P = C(() => ({
      [j.value]: `${y.value}px`,
      zIndex: l.value
    }));
    function q() {
      n.duration !== 0 && ({ stop: p } = Hc(() => {
        S();
      }, n.duration));
    }
    function K() {
      p == null || p();
    }
    function S() {
      d.value = !1, oe(() => {
        var O;
        o.value || ((O = n.onClose) == null || O.call(n), s("destroy"));
      });
    }
    function b({ code: O }) {
      O === Ws.esc && S();
    }
    return Te(() => {
      q(), c(), d.value = !0;
    }), se(() => n.repeatNum, () => {
      K(), q();
    }), Es(document, "keydown", b), ei(u, () => {
      f.value = u.value.getBoundingClientRect().height;
    }), e({
      visible: d,
      bottom: A,
      close: S
    }), (O, Q) => (E(), W(Bn, {
      name: m(i).b("fade"),
      onBeforeEnter: (he) => o.value = !0,
      onBeforeLeave: O.onClose,
      onAfterLeave: (he) => O.$emit("destroy"),
      persisted: ""
    }, {
      default: B(() => [
        qt($("div", {
          id: O.id,
          ref_key: "messageRef",
          ref: u,
          class: U([
            m(i).b(),
            { [m(i).m(O.type)]: O.type },
            m(i).is("closable", O.showClose),
            m(i).is("plain", O.plain),
            m(i).is("bottom", m(j) === "bottom"),
            m(L),
            O.customClass
          ]),
          style: pt(m(P)),
          role: "alert",
          onMouseenter: K,
          onMouseleave: q
        }, [
          O.repeatNum > 1 ? (E(), W(m($d), {
            key: 0,
            value: O.repeatNum,
            type: m(h),
            class: U(m(i).e("badge"))
          }, null, 8, ["value", "type", "class"])) : z("v-if", !0),
          m(_) ? (E(), W(m(je), {
            key: 1,
            class: U([m(i).e("icon"), m(g)])
          }, {
            default: B(() => [
              (E(), W(ge(m(_))))
            ]),
            _: 1
          }, 8, ["class"])) : z("v-if", !0),
          ie(O.$slots, "default", {}, () => [
            O.dangerouslyUseHTMLString ? (E(), M(Qe, { key: 1 }, [
              z(" Caution here, message could've been compromised, never use user's input as message "),
              $("p", {
                class: U(m(i).e("content")),
                innerHTML: O.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (E(), M("p", {
              key: 0,
              class: U(m(i).e("content"))
            }, Z(O.message), 3))
          ]),
          O.showClose ? (E(), W(m(je), {
            key: 2,
            class: U(m(i).e("closeBtn")),
            onClick: Ae(S, ["stop"])
          }, {
            default: B(() => [
              X(m(r))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : z("v-if", !0)
        ], 46, ["id"]), [
          [Kt, d.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeEnter", "onBeforeLeave", "onAfterLeave"]));
  }
});
var kh = /* @__PURE__ */ st(wh, [["__file", "message.vue"]]);
let Sh = 1;
const Eh = (t) => {
  if (!t.appendTo)
    t.appendTo = document.body;
  else if (ke(t.appendTo)) {
    let s = document.querySelector(t.appendTo);
    ts(s) || (s = document.body), t.appendTo = s;
  }
}, Th = (t) => {
  !t.placement && ke(ce.placement) && ce.placement && (t.placement = ce.placement), t.placement || (t.placement = xt), Oi.includes(t.placement) || (`${t.placement}${xt}`, t.placement = xt);
}, Ii = (t) => {
  const e = !t || ke(t) || Us(t) || Be(t) ? { message: t } : t, s = {
    ...le,
    ...e
  };
  return Eh(s), Th(s), tn(ce.grouping) && !s.grouping && (s.grouping = ce.grouping), Fe(ce.duration) && s.duration === 3e3 && (s.duration = ce.duration), Fe(ce.offset) && s.offset === 16 && (s.offset = ce.offset), tn(ce.showClose) && !s.showClose && (s.showClose = ce.showClose), tn(ce.plain) && !s.plain && (s.plain = ce.plain), s;
}, Ch = (t) => {
  const e = t.props.placement || xt, s = Pe[e], n = s.indexOf(t);
  if (n === -1)
    return;
  s.splice(n, 1);
  const { handler: r } = t;
  r.close();
}, Oh = ({ appendTo: t, ...e }, s) => {
  const n = `message_${Sh++}`, r = e.onClose, o = document.createElement("div"), i = {
    ...e,
    id: n,
    onClose: () => {
      r == null || r(), Ch(u);
    },
    onDestroy: () => {
      Os(null, o);
    }
  }, a = X(kh, i, Be(i.message) || Us(i.message) ? {
    default: Be(i.message) ? i.message : () => i.message
  } : null);
  a.appContext = s || vt._context, Os(a, o), t.appendChild(o.firstElementChild);
  const l = a.component, u = {
    id: n,
    vnode: a,
    vm: l,
    handler: {
      close: () => {
        l.exposed.close();
      }
    },
    props: a.component.props
  };
  return u;
}, vt = (t = {}, e) => {
  if (!ve)
    return { close: () => {
    } };
  const s = Ii(t), n = vh(s.placement || xt);
  if (s.grouping && n.length) {
    const o = n.find(({ vnode: i }) => {
      var a;
      return ((a = i.props) == null ? void 0 : a.message) === s.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = s.type, o.handler;
  }
  if (Fe(ce.max) && n.length >= ce.max)
    return { close: () => {
    } };
  const r = Oh(s, e);
  return n.push(r), r.handler;
};
Ci.forEach((t) => {
  vt[t] = (e = {}, s) => {
    const n = Ii(e);
    return vt({ ...n, type: t }, s);
  };
});
function Ih(t) {
  for (const e in Pe)
    if (Qt(Pe, e)) {
      const s = [...Pe[e]];
      for (const n of s)
        (!t || t === n.props.type) && n.handler.close();
    }
}
function Ah(t) {
  if (!Pe[t])
    return;
  [...Pe[t]].forEach((s) => s.handler.close());
}
vt.closeAll = Ih;
vt.closeAllByPlacement = Ah;
vt._context = null;
const ys = yu(vt, "$message"), En = "_trap-focus-children", ut = [], io = (t) => {
  if (ut.length === 0)
    return;
  const e = ut[ut.length - 1][En];
  if (e.length > 0 && t.code === Ws.tab) {
    if (e.length === 1) {
      t.preventDefault(), document.activeElement !== e[0] && e[0].focus();
      return;
    }
    const s = t.shiftKey, n = t.target === e[0], r = t.target === e[e.length - 1];
    n && s && (t.preventDefault(), e[e.length - 1].focus()), r && !s && (t.preventDefault(), e[0].focus());
  }
}, Ph = {
  beforeMount(t) {
    t[En] = Kr(t), ut.push(t), ut.length <= 1 && document.addEventListener("keydown", io);
  },
  updated(t) {
    oe(() => {
      t[En] = Kr(t);
    });
  },
  unmounted() {
    ut.shift(), ut.length === 0 && document.removeEventListener("keydown", io);
  }
}, $h = G({
  name: "ElMessageBox",
  directives: {
    TrapFocus: Ph
  },
  components: {
    ElButton: nh,
    ElFocusTrap: Cd,
    ElInput: hd,
    ElOverlay: uh,
    ElIcon: je,
    ...gi
  },
  inheritAttrs: !1,
  props: {
    buttonSize: {
      type: String,
      validator: fh
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
    } = li("message-box", C(() => t.buttonSize)), { t: i } = s, { nextZIndex: a } = n, l = R(!1), c = Fn({
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
      confirmButtonLoadingIcon: Xe($s),
      cancelButtonLoadingIcon: Xe($s),
      confirmButtonDisabled: !1,
      editorErrorMessage: "",
      validateError: !1,
      zIndex: a()
    }), u = C(() => {
      const I = c.type;
      return { [r.bm("icon", I)]: I && xs[I] };
    }), d = wn(), f = wn(), p = C(() => {
      const I = c.type;
      return c.icon || I && xs[I] || "";
    }), h = C(() => !!c.message), g = R(), _ = R(), v = R(), k = R(), y = R(), A = C(() => c.confirmButtonClass);
    se(() => c.inputValue, async (I) => {
      await oe(), t.boxType === "prompt" && I && Q();
    }, { immediate: !0 }), se(() => l.value, (I) => {
      var N, D;
      I && (t.boxType !== "prompt" && (c.autofocus ? v.value = (D = (N = y.value) == null ? void 0 : N.$el) != null ? D : g.value : v.value = g.value), c.zIndex = a()), t.boxType === "prompt" && (I ? oe().then(() => {
        var te;
        k.value && k.value.$el && (c.autofocus ? v.value = (te = he()) != null ? te : g.value : v.value = g.value);
      }) : (c.editorErrorMessage = "", c.validateError = !1));
    });
    const L = C(() => t.draggable), j = C(() => t.overflow), { isDragging: P } = dh(g, _, L, j);
    Te(async () => {
      await oe(), t.closeOnHashChange && window.addEventListener("hashchange", q);
    }), os(() => {
      t.closeOnHashChange && window.removeEventListener("hashchange", q);
    });
    function q() {
      l.value && (l.value = !1, oe(() => {
        c.action && e("action", c.action);
      }));
    }
    const K = () => {
      t.closeOnClickModal && O(c.distinguishCancelAndClose ? "close" : "cancel");
    }, S = Ti(K), b = (I) => {
      if (c.inputType !== "textarea")
        return I.preventDefault(), O("confirm");
    }, O = (I) => {
      var N;
      t.boxType === "prompt" && I === "confirm" && !Q() || (c.action = I, c.beforeClose ? (N = c.beforeClose) == null || N.call(c, I, c, q) : q());
    }, Q = () => {
      if (t.boxType === "prompt") {
        const I = c.inputPattern;
        if (I && !I.test(c.inputValue || ""))
          return c.editorErrorMessage = c.inputErrorMessage || i("el.messagebox.error"), c.validateError = !0, !1;
        const N = c.inputValidator;
        if (Be(N)) {
          const D = N(c.inputValue);
          if (D === !1)
            return c.editorErrorMessage = c.inputErrorMessage || i("el.messagebox.error"), c.validateError = !0, !1;
          if (ke(D))
            return c.editorErrorMessage = D, c.validateError = !0, !1;
        }
      }
      return c.editorErrorMessage = "", c.validateError = !1, !0;
    }, he = () => {
      var I, N;
      const D = (I = k.value) == null ? void 0 : I.$refs;
      return (N = D == null ? void 0 : D.input) != null ? N : D == null ? void 0 : D.textarea;
    }, x = () => {
      O("close");
    }, w = () => {
      t.closeOnPressEscape && x();
    };
    return t.lockScroll && hh(l), {
      ...yn(c),
      ns: r,
      overlayEvent: S,
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
      headerRef: _,
      inputRef: k,
      isDragging: P,
      confirmRef: y,
      doClose: q,
      handleClose: x,
      onCloseRequested: w,
      handleWrapperClick: K,
      handleInputEnter: b,
      handleAction: O,
      t: i
    };
  }
});
function xh(t, e, s, n, r, o) {
  const i = be("el-icon"), a = be("el-input"), l = be("el-button"), c = be("el-focus-trap"), u = be("el-overlay");
  return E(), W(Bn, {
    name: "fade-in-linear",
    onAfterLeave: (d) => t.$emit("vanish"),
    persisted: ""
  }, {
    default: B(() => [
      qt(X(u, {
        "z-index": t.zIndex,
        "overlay-class": [t.ns.is("message-box"), t.modalClass],
        mask: t.modal
      }, {
        default: B(() => [
          $("div", {
            role: "dialog",
            "aria-label": t.title,
            "aria-modal": "true",
            "aria-describedby": t.showInput ? void 0 : t.contentId,
            class: U(`${t.ns.namespace.value}-overlay-message-box`),
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
              default: B(() => [
                $("div", {
                  ref: "rootRef",
                  class: U([
                    t.ns.b(),
                    t.customClass,
                    t.ns.is("draggable", t.draggable),
                    t.ns.is("dragging", t.isDragging),
                    { [t.ns.m("center")]: t.center }
                  ]),
                  style: pt(t.customStyle),
                  tabindex: "-1",
                  onClick: Ae(() => {
                  }, ["stop"])
                }, [
                  t.title !== null && t.title !== void 0 ? (E(), M("div", {
                    key: 0,
                    ref: "headerRef",
                    class: U([t.ns.e("header"), { "show-close": t.showClose }])
                  }, [
                    $("div", {
                      class: U(t.ns.e("title"))
                    }, [
                      t.iconComponent && t.center ? (E(), W(i, {
                        key: 0,
                        class: U([t.ns.e("status"), t.typeClass])
                      }, {
                        default: B(() => [
                          (E(), W(ge(t.iconComponent)))
                        ]),
                        _: 1
                      }, 8, ["class"])) : z("v-if", !0),
                      $("span", null, Z(t.title), 1)
                    ], 2),
                    t.showClose ? (E(), M("button", {
                      key: 0,
                      type: "button",
                      class: U(t.ns.e("headerbtn")),
                      "aria-label": t.t("el.messagebox.close"),
                      onClick: (d) => t.handleAction(t.distinguishCancelAndClose ? "close" : "cancel"),
                      onKeydown: us(Ae((d) => t.handleAction(t.distinguishCancelAndClose ? "close" : "cancel"), ["prevent"]), ["enter"])
                    }, [
                      X(i, {
                        class: U(t.ns.e("close"))
                      }, {
                        default: B(() => [
                          (E(), W(ge(t.closeIcon || "close")))
                        ]),
                        _: 1
                      }, 8, ["class"])
                    ], 42, ["aria-label", "onClick", "onKeydown"])) : z("v-if", !0)
                  ], 2)) : z("v-if", !0),
                  $("div", {
                    id: t.contentId,
                    class: U(t.ns.e("content"))
                  }, [
                    $("div", {
                      class: U(t.ns.e("container"))
                    }, [
                      t.iconComponent && !t.center && t.hasMessage ? (E(), W(i, {
                        key: 0,
                        class: U([t.ns.e("status"), t.typeClass])
                      }, {
                        default: B(() => [
                          (E(), W(ge(t.iconComponent)))
                        ]),
                        _: 1
                      }, 8, ["class"])) : z("v-if", !0),
                      t.hasMessage ? (E(), M("div", {
                        key: 1,
                        class: U(t.ns.e("message"))
                      }, [
                        ie(t.$slots, "default", {}, () => [
                          t.dangerouslyUseHTMLString ? (E(), W(ge(t.showInput ? "label" : "p"), {
                            key: 1,
                            for: t.showInput ? t.inputId : void 0,
                            innerHTML: t.message
                          }, null, 8, ["for", "innerHTML"])) : (E(), W(ge(t.showInput ? "label" : "p"), {
                            key: 0,
                            for: t.showInput ? t.inputId : void 0,
                            textContent: Z(t.message)
                          }, null, 8, ["for", "textContent"]))
                        ])
                      ], 2)) : z("v-if", !0)
                    ], 2),
                    qt($("div", {
                      class: U(t.ns.e("input"))
                    }, [
                      X(a, {
                        id: t.inputId,
                        ref: "inputRef",
                        modelValue: t.inputValue,
                        "onUpdate:modelValue": (d) => t.inputValue = d,
                        type: t.inputType,
                        placeholder: t.inputPlaceholder,
                        "aria-invalid": t.validateError,
                        class: U({ invalid: t.validateError }),
                        onKeydown: us(t.handleInputEnter, ["enter"])
                      }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "type", "placeholder", "aria-invalid", "class", "onKeydown"]),
                      $("div", {
                        class: U(t.ns.e("errormsg")),
                        style: pt({
                          visibility: t.editorErrorMessage ? "visible" : "hidden"
                        })
                      }, Z(t.editorErrorMessage), 7)
                    ], 2), [
                      [Kt, t.showInput]
                    ])
                  ], 10, ["id"]),
                  $("div", {
                    class: U(t.ns.e("btns"))
                  }, [
                    t.showCancelButton ? (E(), W(l, {
                      key: 0,
                      loading: t.cancelButtonLoading,
                      "loading-icon": t.cancelButtonLoadingIcon,
                      class: U([t.cancelButtonClass]),
                      round: t.roundButton,
                      size: t.btnSize,
                      onClick: (d) => t.handleAction("cancel"),
                      onKeydown: us(Ae((d) => t.handleAction("cancel"), ["prevent"]), ["enter"])
                    }, {
                      default: B(() => [
                        xe(Z(t.cancelButtonText || t.t("el.messagebox.cancel")), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "loading-icon", "class", "round", "size", "onClick", "onKeydown"])) : z("v-if", !0),
                    qt(X(l, {
                      ref: "confirmRef",
                      type: "primary",
                      loading: t.confirmButtonLoading,
                      "loading-icon": t.confirmButtonLoadingIcon,
                      class: U([t.confirmButtonClasses]),
                      round: t.roundButton,
                      disabled: t.confirmButtonDisabled,
                      size: t.btnSize,
                      onClick: (d) => t.handleAction("confirm"),
                      onKeydown: us(Ae((d) => t.handleAction("confirm"), ["prevent"]), ["enter"])
                    }, {
                      default: B(() => [
                        xe(Z(t.confirmButtonText || t.t("el.messagebox.confirm")), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "loading-icon", "class", "round", "disabled", "size", "onClick", "onKeydown"]), [
                      [Kt, t.showConfirmButton]
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
        [Kt, t.visible]
      ])
    ]),
    _: 3
  }, 8, ["onAfterLeave"]);
}
var jh = /* @__PURE__ */ st($h, [["render", xh], ["__file", "index.vue"]]);
const ns = /* @__PURE__ */ new Map(), Nh = (t) => {
  let e = document.body;
  return t.appendTo && (ke(t.appendTo) && (e = document.querySelector(t.appendTo)), ts(t.appendTo) && (e = t.appendTo), ts(e) || (e = document.body)), e;
}, Rh = (t, e, s = null) => {
  const n = X(jh, t, Be(t.message) || Us(t.message) ? {
    default: Be(t.message) ? t.message : () => t.message
  } : null);
  return n.appContext = s, Os(n, e), Nh(t).appendChild(e.firstElementChild), n.component;
}, Lh = () => document.createElement("div"), Mh = (t, e) => {
  const s = Lh();
  t.onVanish = () => {
    Os(null, s), ns.delete(r);
  }, t.onAction = (o) => {
    const i = ns.get(r);
    let a;
    t.showInput ? a = { value: r.inputValue, action: o } : a = o, t.callback ? t.callback(a, n.proxy) : o === "cancel" || o === "close" ? t.distinguishCancelAndClose && o !== "cancel" ? i.reject("close") : i.reject("cancel") : i.resolve(a);
  };
  const n = Rh(t, s, e), r = n.proxy;
  for (const o in t)
    Qt(t, o) && !Qt(r.$props, o) && (o === "closeIcon" && jt(t[o]) ? r[o] = Xe(t[o]) : r[o] = t[o]);
  return r.visible = !0, r;
};
function Lt(t, e = null) {
  if (!ve)
    return Promise.reject();
  let s;
  return ke(t) || Us(t) ? t = {
    message: t
  } : s = t.callback, new Promise((n, r) => {
    const o = Mh(t, e ?? Lt._context);
    ns.set(o, {
      options: t,
      callback: s,
      resolve: n,
      reject: r
    });
  });
}
const Uh = ["alert", "confirm", "prompt"], Dh = {
  alert: { closeOnPressEscape: !1, closeOnClickModal: !1 },
  confirm: { showCancelButton: !0 },
  prompt: { showCancelButton: !0, showInput: !0 }
};
Uh.forEach((t) => {
  Lt[t] = Bh(t);
});
function Bh(t) {
  return (e, s, n, r) => {
    let o = "";
    return jt(s) ? (n = s, o = "") : Xo(s) ? o = "" : o = s, Lt(Object.assign({
      title: o,
      message: e,
      type: "",
      ...Dh[t]
    }, n, {
      boxType: t
    }), r);
  };
}
Lt.close = () => {
  ns.forEach((t, e) => {
    e.doClose();
  }), ns.clear();
};
Lt._context = null;
const Ge = Lt;
Ge.install = (t) => {
  Ge._context = t._context, t.config.globalProperties.$msgbox = Ge, t.config.globalProperties.$messageBox = Ge, t.config.globalProperties.$alert = Ge.alert, t.config.globalProperties.$confirm = Ge.confirm, t.config.globalProperties.$prompt = Ge.prompt;
};
const ao = Ge, Fh = (t) => {
  let e;
  return t ? e = t : typeof fetch > "u" ? e = (...s) => Promise.resolve().then(() => Mt).then(({ default: n }) => n(...s)) : e = fetch, (...s) => e(...s);
};
class or extends Error {
  constructor(e, s = "FunctionsError", n) {
    super(e), this.name = s, this.context = n;
  }
}
class zh extends or {
  constructor(e) {
    super("Failed to send a request to the Edge Function", "FunctionsFetchError", e);
  }
}
class lo extends or {
  constructor(e) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", e);
  }
}
class co extends or {
  constructor(e) {
    super("Edge Function returned a non-2xx status code", "FunctionsHttpError", e);
  }
}
var Tn;
(function(t) {
  t.Any = "any", t.ApNortheast1 = "ap-northeast-1", t.ApNortheast2 = "ap-northeast-2", t.ApSouth1 = "ap-south-1", t.ApSoutheast1 = "ap-southeast-1", t.ApSoutheast2 = "ap-southeast-2", t.CaCentral1 = "ca-central-1", t.EuCentral1 = "eu-central-1", t.EuWest1 = "eu-west-1", t.EuWest2 = "eu-west-2", t.EuWest3 = "eu-west-3", t.SaEast1 = "sa-east-1", t.UsEast1 = "us-east-1", t.UsWest1 = "us-west-1", t.UsWest2 = "us-west-2";
})(Tn || (Tn = {}));
var Vh = globalThis && globalThis.__awaiter || function(t, e, s, n) {
  function r(o) {
    return o instanceof s ? o : new s(function(i) {
      i(o);
    });
  }
  return new (s || (s = Promise))(function(o, i) {
    function a(u) {
      try {
        c(n.next(u));
      } catch (d) {
        i(d);
      }
    }
    function l(u) {
      try {
        c(n.throw(u));
      } catch (d) {
        i(d);
      }
    }
    function c(u) {
      u.done ? o(u.value) : r(u.value).then(a, l);
    }
    c((n = n.apply(t, e || [])).next());
  });
};
class Wh {
  constructor(e, { headers: s = {}, customFetch: n, region: r = Tn.Any } = {}) {
    this.url = e, this.headers = s, this.region = r, this.fetch = Fh(n);
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
    return Vh(this, void 0, void 0, function* () {
      try {
        const { headers: r, method: o, body: i } = s;
        let a = {}, { region: l } = s;
        l || (l = this.region);
        const c = new URL(`${this.url}/${e}`);
        l && l !== "any" && (a["x-region"] = l, c.searchParams.set("forceFunctionRegion", l));
        let u;
        i && (r && !Object.prototype.hasOwnProperty.call(r, "Content-Type") || !r) && (typeof Blob < "u" && i instanceof Blob || i instanceof ArrayBuffer ? (a["Content-Type"] = "application/octet-stream", u = i) : typeof i == "string" ? (a["Content-Type"] = "text/plain", u = i) : typeof FormData < "u" && i instanceof FormData ? u = i : (a["Content-Type"] = "application/json", u = JSON.stringify(i)));
        const d = yield this.fetch(c.toString(), {
          method: o || "POST",
          // headers priority is (high to low):
          // 1. invoke-level headers
          // 2. client-level headers
          // 3. default Content-Type header
          headers: Object.assign(Object.assign(Object.assign({}, a), this.headers), r),
          body: u
        }).catch((g) => {
          throw new zh(g);
        }), f = d.headers.get("x-relay-error");
        if (f && f === "true")
          throw new lo(d);
        if (!d.ok)
          throw new co(d);
        let p = ((n = d.headers.get("Content-Type")) !== null && n !== void 0 ? n : "text/plain").split(";")[0].trim(), h;
        return p === "application/json" ? h = yield d.json() : p === "application/octet-stream" ? h = yield d.blob() : p === "text/event-stream" ? h = d : p === "multipart/form-data" ? h = yield d.formData() : h = yield d.text(), { data: h, error: null, response: d };
      } catch (r) {
        return {
          data: null,
          error: r,
          response: r instanceof co || r instanceof lo ? r.context : void 0
        };
      }
    });
  }
}
var pe = {}, ir = {}, Hs = {}, as = {}, qs = {}, Ks = {}, Hh = function() {
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("unable to locate global object");
}, Nt = Hh();
const qh = Nt.fetch, Ai = Nt.fetch.bind(Nt), Pi = Nt.Headers, Kh = Nt.Request, Gh = Nt.Response, Mt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Headers: Pi,
  Request: Kh,
  Response: Gh,
  default: Ai,
  fetch: qh
}, Symbol.toStringTag, { value: "Module" })), Jh = /* @__PURE__ */ rh(Mt);
var Gs = {};
Object.defineProperty(Gs, "__esModule", { value: !0 });
let Yh = class extends Error {
  constructor(e) {
    super(e.message), this.name = "PostgrestError", this.details = e.details, this.hint = e.hint, this.code = e.code;
  }
};
Gs.default = Yh;
var $i = Ee && Ee.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Ks, "__esModule", { value: !0 });
const Xh = $i(Jh), Zh = $i(Gs);
let Qh = class {
  constructor(e) {
    var s, n;
    this.shouldThrowOnError = !1, this.method = e.method, this.url = e.url, this.headers = new Headers(e.headers), this.schema = e.schema, this.body = e.body, this.shouldThrowOnError = (s = e.shouldThrowOnError) !== null && s !== void 0 ? s : !1, this.signal = e.signal, this.isMaybeSingle = (n = e.isMaybeSingle) !== null && n !== void 0 ? n : !1, e.fetch ? this.fetch = e.fetch : typeof fetch > "u" ? this.fetch = Xh.default : this.fetch = fetch;
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
      var i, a, l, c;
      let u = null, d = null, f = null, p = o.status, h = o.statusText;
      if (o.ok) {
        if (this.method !== "HEAD") {
          const k = await o.text();
          k === "" || (this.headers.get("Accept") === "text/csv" || this.headers.get("Accept") && (!((i = this.headers.get("Accept")) === null || i === void 0) && i.includes("application/vnd.pgrst.plan+text")) ? d = k : d = JSON.parse(k));
        }
        const _ = (a = this.headers.get("Prefer")) === null || a === void 0 ? void 0 : a.match(/count=(exact|planned|estimated)/), v = (l = o.headers.get("content-range")) === null || l === void 0 ? void 0 : l.split("/");
        _ && v && v.length > 1 && (f = parseInt(v[1])), this.isMaybeSingle && this.method === "GET" && Array.isArray(d) && (d.length > 1 ? (u = {
          // https://github.com/PostgREST/postgrest/blob/a867d79c42419af16c18c3fb019eba8df992626f/src/PostgREST/Error.hs#L553
          code: "PGRST116",
          details: `Results contain ${d.length} rows, application/vnd.pgrst.object+json requires 1 row`,
          hint: null,
          message: "JSON object requested, multiple (or no) rows returned"
        }, d = null, f = null, p = 406, h = "Not Acceptable") : d.length === 1 ? d = d[0] : d = null);
      } else {
        const _ = await o.text();
        try {
          u = JSON.parse(_), Array.isArray(u) && o.status === 404 && (d = [], u = null, p = 200, h = "OK");
        } catch {
          o.status === 404 && _ === "" ? (p = 204, h = "No Content") : u = {
            message: _
          };
        }
        if (u && this.isMaybeSingle && (!((c = u == null ? void 0 : u.details) === null || c === void 0) && c.includes("0 rows")) && (u = null, p = 200, h = "OK"), u && this.shouldThrowOnError)
          throw new Zh.default(u);
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
      var i, a, l;
      return {
        error: {
          message: `${(i = o == null ? void 0 : o.name) !== null && i !== void 0 ? i : "FetchError"}: ${o == null ? void 0 : o.message}`,
          details: `${(a = o == null ? void 0 : o.stack) !== null && a !== void 0 ? a : ""}`,
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
Ks.default = Qh;
var ef = Ee && Ee.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(qs, "__esModule", { value: !0 });
const tf = ef(Ks);
let sf = class extends tf.default {
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
    const i = o ? `${o}.order` : "order", a = this.url.searchParams.get(i);
    return this.url.searchParams.set(i, `${a ? `${a},` : ""}${e}.${s ? "asc" : "desc"}${n === void 0 ? "" : n ? ".nullsfirst" : ".nullslast"}`), this;
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
    const o = typeof r > "u" ? "offset" : `${r}.offset`, i = typeof r > "u" ? "limit" : `${r}.limit`;
    return this.url.searchParams.set(o, `${e}`), this.url.searchParams.set(i, `${s - e + 1}`), this;
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
  explain({ analyze: e = !1, verbose: s = !1, settings: n = !1, buffers: r = !1, wal: o = !1, format: i = "text" } = {}) {
    var a;
    const l = [
      e ? "analyze" : null,
      s ? "verbose" : null,
      n ? "settings" : null,
      r ? "buffers" : null,
      o ? "wal" : null
    ].filter(Boolean).join("|"), c = (a = this.headers.get("Accept")) !== null && a !== void 0 ? a : "application/json";
    return this.headers.set("Accept", `application/vnd.pgrst.plan+${i}; for="${c}"; options=${l};`), i === "json" ? this : this;
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
qs.default = sf;
var nf = Ee && Ee.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(as, "__esModule", { value: !0 });
const rf = nf(qs);
let of = class extends rf.default {
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
    const i = n === void 0 ? "" : `(${n})`;
    return this.url.searchParams.append(e, `${o}fts${i}.${s}`), this;
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
as.default = of;
var af = Ee && Ee.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Hs, "__esModule", { value: !0 });
const Ft = af(as);
let lf = class {
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
    const i = (e ?? "*").split("").map((a) => /\s/.test(a) && !o ? "" : (a === '"' && (o = !o), a)).join("");
    return this.url.searchParams.set("select", i), n && this.headers.append("Prefer", `count=${n}`), new Ft.default({
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
      const i = e.reduce((a, l) => a.concat(Object.keys(l)), []);
      if (i.length > 0) {
        const a = [...new Set(i)].map((l) => `"${l}"`);
        this.url.searchParams.set("columns", a.join(","));
      }
    }
    return new Ft.default({
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
    var i;
    const a = "POST";
    if (this.headers.append("Prefer", `resolution=${n ? "ignore" : "merge"}-duplicates`), s !== void 0 && this.url.searchParams.set("on_conflict", s), r && this.headers.append("Prefer", `count=${r}`), o || this.headers.append("Prefer", "missing=default"), Array.isArray(e)) {
      const l = e.reduce((c, u) => c.concat(Object.keys(u)), []);
      if (l.length > 0) {
        const c = [...new Set(l)].map((u) => `"${u}"`);
        this.url.searchParams.set("columns", c.join(","));
      }
    }
    return new Ft.default({
      method: a,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: e,
      fetch: (i = this.fetch) !== null && i !== void 0 ? i : fetch
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
    return s && this.headers.append("Prefer", `count=${s}`), new Ft.default({
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
    return e && this.headers.append("Prefer", `count=${e}`), new Ft.default({
      method: n,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      fetch: (s = this.fetch) !== null && s !== void 0 ? s : fetch
    });
  }
};
Hs.default = lf;
var xi = Ee && Ee.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(ir, "__esModule", { value: !0 });
const cf = xi(Hs), uf = xi(as);
let df = class ji {
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
    return new cf.default(s, {
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
    return new ji(this.url, {
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
    var i;
    let a;
    const l = new URL(`${this.url}/rpc/${e}`);
    let c;
    n || r ? (a = n ? "HEAD" : "GET", Object.entries(s).filter(([d, f]) => f !== void 0).map(([d, f]) => [d, Array.isArray(f) ? `{${f.join(",")}}` : `${f}`]).forEach(([d, f]) => {
      l.searchParams.append(d, f);
    })) : (a = "POST", c = s);
    const u = new Headers(this.headers);
    return o && u.set("Prefer", `count=${o}`), new uf.default({
      method: a,
      url: l,
      headers: u,
      schema: this.schemaName,
      body: c,
      fetch: (i = this.fetch) !== null && i !== void 0 ? i : fetch
    });
  }
};
ir.default = df;
var Ut = Ee && Ee.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(pe, "__esModule", { value: !0 });
pe.PostgrestError = pe.PostgrestBuilder = pe.PostgrestTransformBuilder = pe.PostgrestFilterBuilder = pe.PostgrestQueryBuilder = pe.PostgrestClient = void 0;
const Ni = Ut(ir);
pe.PostgrestClient = Ni.default;
const Ri = Ut(Hs);
pe.PostgrestQueryBuilder = Ri.default;
const Li = Ut(as);
pe.PostgrestFilterBuilder = Li.default;
const Mi = Ut(qs);
pe.PostgrestTransformBuilder = Mi.default;
const Ui = Ut(Ks);
pe.PostgrestBuilder = Ui.default;
const Di = Ut(Gs);
pe.PostgrestError = Di.default;
var hf = pe.default = {
  PostgrestClient: Ni.default,
  PostgrestQueryBuilder: Ri.default,
  PostgrestFilterBuilder: Li.default,
  PostgrestTransformBuilder: Mi.default,
  PostgrestBuilder: Ui.default,
  PostgrestError: Di.default
};
const {
  PostgrestClient: ff,
  PostgrestQueryBuilder: Kg,
  PostgrestFilterBuilder: Gg,
  PostgrestTransformBuilder: Jg,
  PostgrestBuilder: Yg,
  PostgrestError: Xg
} = hf;
class pf {
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
const gf = "2.15.4", vf = `realtime-js/${gf}`, mf = "1.0.0", Cn = 1e4, yf = 1e3, _f = 100;
var Jt;
(function(t) {
  t[t.connecting = 0] = "connecting", t[t.open = 1] = "open", t[t.closing = 2] = "closing", t[t.closed = 3] = "closed";
})(Jt || (Jt = {}));
var ne;
(function(t) {
  t.closed = "closed", t.errored = "errored", t.joined = "joined", t.joining = "joining", t.leaving = "leaving";
})(ne || (ne = {}));
var Ie;
(function(t) {
  t.close = "phx_close", t.error = "phx_error", t.join = "phx_join", t.reply = "phx_reply", t.leave = "phx_leave", t.access_token = "access_token";
})(Ie || (Ie = {}));
var On;
(function(t) {
  t.websocket = "websocket";
})(On || (On = {}));
var lt;
(function(t) {
  t.Connecting = "connecting", t.Open = "open", t.Closing = "closing", t.Closed = "closed";
})(lt || (lt = {}));
class bf {
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
    let i = this.HEADER_LENGTH + 2;
    const a = n.decode(e.slice(i, i + r));
    i = i + r;
    const l = n.decode(e.slice(i, i + o));
    i = i + o;
    const c = JSON.parse(n.decode(e.slice(i, e.byteLength)));
    return { ref: null, topic: a, event: l, payload: c };
  }
}
class Bi {
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
const uo = (t, e, s = {}) => {
  var n;
  const r = (n = s.skipTypes) !== null && n !== void 0 ? n : [];
  return Object.keys(e).reduce((o, i) => (o[i] = wf(i, t, e, r), o), {});
}, wf = (t, e, s, n) => {
  const r = e.find((a) => a.name === t), o = r == null ? void 0 : r.type, i = s[t];
  return o && !n.includes(o) ? Fi(o, i) : In(i);
}, Fi = (t, e) => {
  if (t.charAt(0) === "_") {
    const s = t.slice(1, t.length);
    return Tf(e, s);
  }
  switch (t) {
    case Y.bool:
      return kf(e);
    case Y.float4:
    case Y.float8:
    case Y.int2:
    case Y.int4:
    case Y.int8:
    case Y.numeric:
    case Y.oid:
      return Sf(e);
    case Y.json:
    case Y.jsonb:
      return Ef(e);
    case Y.timestamp:
      return Cf(e);
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
      return In(e);
    default:
      return In(e);
  }
}, In = (t) => t, kf = (t) => {
  switch (t) {
    case "t":
      return !0;
    case "f":
      return !1;
    default:
      return t;
  }
}, Sf = (t) => {
  if (typeof t == "string") {
    const e = parseFloat(t);
    if (!Number.isNaN(e))
      return e;
  }
  return t;
}, Ef = (t) => {
  if (typeof t == "string")
    try {
      return JSON.parse(t);
    } catch (e) {
      return console.log(`JSON parse error: ${e}`), t;
    }
  return t;
}, Tf = (t, e) => {
  if (typeof t != "string")
    return t;
  const s = t.length - 1, n = t[s];
  if (t[0] === "{" && n === "}") {
    let o;
    const i = t.slice(1, s);
    try {
      o = JSON.parse("[" + i + "]");
    } catch {
      o = i ? i.split(",") : [];
    }
    return o.map((a) => Fi(e, a));
  }
  return t;
}, Cf = (t) => typeof t == "string" ? t.replace(" ", "T") : t, zi = (t) => {
  let e = t;
  return e = e.replace(/^ws/i, "http"), e = e.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, ""), e.replace(/\/+$/, "") + "/api/broadcast";
};
class cn {
  /**
   * Initializes the Push
   *
   * @param channel The Channel
   * @param event The event, for example `"phx_join"`
   * @param payload The payload, for example `{user_id: 123}`
   * @param timeout The push timeout in milliseconds
   */
  constructor(e, s, n = {}, r = Cn) {
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
var ho;
(function(t) {
  t.SYNC = "sync", t.JOIN = "join", t.LEAVE = "leave";
})(ho || (ho = {}));
class Yt {
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
      const { onJoin: o, onLeave: i, onSync: a } = this.caller;
      this.joinRef = this.channel._joinRef(), this.state = Yt.syncState(this.state, r, o, i), this.pendingDiffs.forEach((l) => {
        this.state = Yt.syncDiff(this.state, l, o, i);
      }), this.pendingDiffs = [], a();
    }), this.channel._on(n.diff, {}, (r) => {
      const { onJoin: o, onLeave: i, onSync: a } = this.caller;
      this.inPendingSyncState() ? this.pendingDiffs.push(r) : (this.state = Yt.syncDiff(this.state, r, o, i), a());
    }), this.onJoin((r, o, i) => {
      this.channel._trigger("presence", {
        event: "join",
        key: r,
        currentPresences: o,
        newPresences: i
      });
    }), this.onLeave((r, o, i) => {
      this.channel._trigger("presence", {
        event: "leave",
        key: r,
        currentPresences: o,
        leftPresences: i
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
    const o = this.cloneDeep(e), i = this.transformState(s), a = {}, l = {};
    return this.map(o, (c, u) => {
      i[c] || (l[c] = u);
    }), this.map(i, (c, u) => {
      const d = o[c];
      if (d) {
        const f = u.map((_) => _.presence_ref), p = d.map((_) => _.presence_ref), h = u.filter((_) => p.indexOf(_.presence_ref) < 0), g = d.filter((_) => f.indexOf(_.presence_ref) < 0);
        h.length > 0 && (a[c] = h), g.length > 0 && (l[c] = g);
      } else
        a[c] = u;
    }), this.syncDiff(o, { joins: a, leaves: l }, n, r);
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
    const { joins: o, leaves: i } = {
      joins: this.transformState(s.joins),
      leaves: this.transformState(s.leaves)
    };
    return n || (n = () => {
    }), r || (r = () => {
    }), this.map(o, (a, l) => {
      var c;
      const u = (c = e[a]) !== null && c !== void 0 ? c : [];
      if (e[a] = this.cloneDeep(l), u.length > 0) {
        const d = e[a].map((p) => p.presence_ref), f = u.filter((p) => d.indexOf(p.presence_ref) < 0);
        e[a].unshift(...f);
      }
      n(a, u, l);
    }), this.map(i, (a, l) => {
      let c = e[a];
      if (!c)
        return;
      const u = l.map((d) => d.presence_ref);
      c = c.filter((d) => u.indexOf(d.presence_ref) < 0), e[a] = c, r(a, c, l), c.length === 0 && delete e[a];
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
var fo;
(function(t) {
  t.ALL = "*", t.INSERT = "INSERT", t.UPDATE = "UPDATE", t.DELETE = "DELETE";
})(fo || (fo = {}));
var Xt;
(function(t) {
  t.BROADCAST = "broadcast", t.PRESENCE = "presence", t.POSTGRES_CHANGES = "postgres_changes", t.SYSTEM = "system";
})(Xt || (Xt = {}));
var De;
(function(t) {
  t.SUBSCRIBED = "SUBSCRIBED", t.TIMED_OUT = "TIMED_OUT", t.CLOSED = "CLOSED", t.CHANNEL_ERROR = "CHANNEL_ERROR";
})(De || (De = {}));
class ar {
  constructor(e, s = { config: {} }, n) {
    this.topic = e, this.params = s, this.socket = n, this.bindings = {}, this.state = ne.closed, this.joinedOnce = !1, this.pushBuffer = [], this.subTopic = e.replace(/^realtime:/i, ""), this.params.config = Object.assign({
      broadcast: { ack: !1, self: !1 },
      presence: { key: "", enabled: !1 },
      private: !1
    }, s.config), this.timeout = this.socket.timeout, this.joinPush = new cn(this, Ie.join, this.params, this.timeout), this.rejoinTimer = new Bi(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs), this.joinPush.receive("ok", () => {
      this.state = ne.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((r) => r.send()), this.pushBuffer = [];
    }), this._onClose(() => {
      this.rejoinTimer.reset(), this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`), this.state = ne.closed, this.socket._remove(this);
    }), this._onError((r) => {
      this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, r), this.state = ne.errored, this.rejoinTimer.scheduleTimeout());
    }), this.joinPush.receive("timeout", () => {
      this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), this.state = ne.errored, this.rejoinTimer.scheduleTimeout());
    }), this.joinPush.receive("error", (r) => {
      this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, r), this.state = ne.errored, this.rejoinTimer.scheduleTimeout());
    }), this._on(Ie.reply, {}, (r, o) => {
      this._trigger(this._replyEventName(o), r);
    }), this.presence = new Yt(this), this.broadcastEndpointURL = zi(this.socket.endPoint), this.private = this.params.config.private || !1;
  }
  /** Subscribe registers your client with the server */
  subscribe(e, s = this.timeout) {
    var n, r, o;
    if (this.socket.isConnected() || this.socket.connect(), this.state == ne.closed) {
      const { config: { broadcast: i, presence: a, private: l } } = this.params, c = (r = (n = this.bindings.postgres_changes) === null || n === void 0 ? void 0 : n.map((p) => p.filter)) !== null && r !== void 0 ? r : [], u = !!this.bindings[Xt.PRESENCE] && this.bindings[Xt.PRESENCE].length > 0 || ((o = this.params.config.presence) === null || o === void 0 ? void 0 : o.enabled) === !0, d = {}, f = {
        broadcast: i,
        presence: Object.assign(Object.assign({}, a), { enabled: u }),
        postgres_changes: c,
        private: l
      };
      this.socket.accessTokenValue && (d.access_token = this.socket.accessTokenValue), this._onError((p) => e == null ? void 0 : e(De.CHANNEL_ERROR, p)), this._onClose(() => e == null ? void 0 : e(De.CLOSED)), this.updateJoinPayload(Object.assign({ config: f }, d)), this.joinedOnce = !0, this._rejoin(s), this.joinPush.receive("ok", async ({ postgres_changes: p }) => {
        var h;
        if (this.socket.setAuth(), p === void 0) {
          e == null || e(De.SUBSCRIBED);
          return;
        } else {
          const g = this.bindings.postgres_changes, _ = (h = g == null ? void 0 : g.length) !== null && h !== void 0 ? h : 0, v = [];
          for (let k = 0; k < _; k++) {
            const y = g[k], { filter: { event: A, schema: L, table: j, filter: P } } = y, q = p && p[k];
            if (q && q.event === A && q.schema === L && q.table === j && q.filter === P)
              v.push(Object.assign(Object.assign({}, y), { id: q.id }));
            else {
              this.unsubscribe(), this.state = ne.errored, e == null || e(De.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
              return;
            }
          }
          this.bindings.postgres_changes = v, e && e(De.SUBSCRIBED);
          return;
        }
      }).receive("error", (p) => {
        this.state = ne.errored, e == null || e(De.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(p).join(", ") || "error")));
      }).receive("timeout", () => {
        e == null || e(De.TIMED_OUT);
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
    return this.state === ne.joined && e === Xt.PRESENCE && (this.socket.log("channel", `resubscribe to ${this.topic} due to change in presence callbacks on joined channel`), this.unsubscribe().then(() => this.subscribe())), this._on(e, s, n);
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
      const { event: o, payload: i } = e, l = {
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
              payload: i,
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
        var i, a, l;
        const c = this._push(e.type, e, s.timeout || this.timeout);
        e.type === "broadcast" && !(!((l = (a = (i = this.params) === null || i === void 0 ? void 0 : i.config) === null || a === void 0 ? void 0 : a.broadcast) === null || l === void 0) && l.ack) && o("ok"), c.receive("ok", () => o("ok")), c.receive("error", () => o("error")), c.receive("timeout", () => o("timed out"));
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
    this.state = ne.leaving;
    const s = () => {
      this.socket.log("channel", `leave ${this.topic}`), this._trigger(Ie.close, "leave", this._joinRef());
    };
    this.joinPush.destroy();
    let n = null;
    return new Promise((r) => {
      n = new cn(this, Ie.leave, {}, e), n.receive("ok", () => {
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
    this.pushBuffer.forEach((e) => e.destroy()), this.pushBuffer = [], this.rejoinTimer.reset(), this.joinPush.destroy(), this.state = ne.closed, this.bindings = {};
  }
  /** @internal */
  async _fetchWithTimeout(e, s, n) {
    const r = new AbortController(), o = setTimeout(() => r.abort(), n), i = await this.socket.fetch(e, Object.assign(Object.assign({}, s), { signal: r.signal }));
    return clearTimeout(o), i;
  }
  /** @internal */
  _push(e, s, n = this.timeout) {
    if (!this.joinedOnce)
      throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    let r = new cn(this, e, s, n);
    return this._canPush() ? r.send() : this._addToPushBuffer(r), r;
  }
  /** @internal */
  _addToPushBuffer(e) {
    if (e.startTimeout(), this.pushBuffer.push(e), this.pushBuffer.length > _f) {
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
    const i = e.toLocaleLowerCase(), { close: a, error: l, leave: c, join: u } = Ie;
    if (n && [a, l, c, u].indexOf(i) >= 0 && n !== this._joinRef())
      return;
    let f = this._onMessage(i, s, n);
    if (s && !f)
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    ["insert", "update", "delete"].includes(i) ? (r = this.bindings.postgres_changes) === null || r === void 0 || r.filter((p) => {
      var h, g, _;
      return ((h = p.filter) === null || h === void 0 ? void 0 : h.event) === "*" || ((_ = (g = p.filter) === null || g === void 0 ? void 0 : g.event) === null || _ === void 0 ? void 0 : _.toLocaleLowerCase()) === i;
    }).map((p) => p.callback(f, n)) : (o = this.bindings[i]) === null || o === void 0 || o.filter((p) => {
      var h, g, _, v, k, y;
      if (["broadcast", "presence", "postgres_changes"].includes(i))
        if ("id" in p) {
          const A = p.id, L = (h = p.filter) === null || h === void 0 ? void 0 : h.event;
          return A && ((g = s.ids) === null || g === void 0 ? void 0 : g.includes(A)) && (L === "*" || (L == null ? void 0 : L.toLocaleLowerCase()) === ((_ = s.data) === null || _ === void 0 ? void 0 : _.type.toLocaleLowerCase()));
        } else {
          const A = (k = (v = p == null ? void 0 : p.filter) === null || v === void 0 ? void 0 : v.event) === null || k === void 0 ? void 0 : k.toLocaleLowerCase();
          return A === "*" || A === ((y = s == null ? void 0 : s.event) === null || y === void 0 ? void 0 : y.toLocaleLowerCase());
        }
      else
        return p.type.toLocaleLowerCase() === i;
    }).map((p) => {
      if (typeof f == "object" && "ids" in f) {
        const h = f.data, { schema: g, table: _, commit_timestamp: v, type: k, errors: y } = h;
        f = Object.assign(Object.assign({}, {
          schema: g,
          table: _,
          commit_timestamp: v,
          eventType: k,
          new: {},
          old: {},
          errors: y
        }), this._getPayloadRecords(h));
      }
      p.callback(f, n);
    });
  }
  /** @internal */
  _isClosed() {
    return this.state === ne.closed;
  }
  /** @internal */
  _isJoined() {
    return this.state === ne.joined;
  }
  /** @internal */
  _isJoining() {
    return this.state === ne.joining;
  }
  /** @internal */
  _isLeaving() {
    return this.state === ne.leaving;
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
      return !(((o = r.type) === null || o === void 0 ? void 0 : o.toLocaleLowerCase()) === n && ar.isEqual(r.filter, s));
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
    this._on(Ie.close, {}, e);
  }
  /**
   * Registers a callback that will be executed when the channel encounteres an error.
   *
   * @internal
   */
  _onError(e) {
    this._on(Ie.error, {}, (s) => e(s));
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
    this._isLeaving() || (this.socket._leaveOpenTopic(this.topic), this.state = ne.joining, this.joinPush.resend(e));
  }
  /** @internal */
  _getPayloadRecords(e) {
    const s = {
      new: {},
      old: {}
    };
    return (e.type === "INSERT" || e.type === "UPDATE") && (s.new = uo(e.columns, e.record)), (e.type === "UPDATE" || e.type === "DELETE") && (s.old = uo(e.columns, e.old_record)), s;
  }
}
const un = () => {
}, _s = {
  HEARTBEAT_INTERVAL: 25e3,
  RECONNECT_DELAY: 10,
  HEARTBEAT_TIMEOUT_FALLBACK: 100
}, Of = [1e3, 2e3, 5e3, 1e4], If = 1e4, Af = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class Pf {
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
    if (this.accessTokenValue = null, this.apiKey = null, this.channels = new Array(), this.endPoint = "", this.httpEndpoint = "", this.headers = {}, this.params = {}, this.timeout = Cn, this.transport = null, this.heartbeatIntervalMs = _s.HEARTBEAT_INTERVAL, this.heartbeatTimer = void 0, this.pendingHeartbeatRef = null, this.heartbeatCallback = un, this.ref = 0, this.reconnectTimer = null, this.logger = un, this.conn = null, this.sendBuffer = [], this.serializer = new bf(), this.stateChangeCallbacks = {
      open: [],
      close: [],
      error: [],
      message: []
    }, this.accessToken = null, this._connectionState = "disconnected", this._wasManualDisconnect = !1, this._authPromise = null, this._resolveFetch = (r) => {
      let o;
      return r ? o = r : typeof fetch > "u" ? o = (...i) => Promise.resolve().then(() => Mt).then(({ default: a }) => a(...i)).catch((a) => {
        throw new Error(`Failed to load @supabase/node-fetch: ${a.message}. This is required for HTTP requests in Node.js environments without native fetch.`);
      }) : o = fetch, (...i) => o(...i);
    }, !(!((n = s == null ? void 0 : s.params) === null || n === void 0) && n.apikey))
      throw new Error("API key is required to connect to Realtime");
    this.apiKey = s.params.apikey, this.endPoint = `${e}/${On.websocket}`, this.httpEndpoint = zi(e), this._initializeOptions(s), this._setupReconnectionTimer(), this.fetch = this._resolveFetch(s == null ? void 0 : s.fetch);
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
          this.conn = pf.createWebSocket(this.endpointURL());
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
    return this._appendParams(this.endPoint, Object.assign({}, this.params, { vsn: mf }));
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
      case Jt.connecting:
        return lt.Connecting;
      case Jt.open:
        return lt.Open;
      case Jt.closing:
        return lt.Closing;
      default:
        return lt.Closed;
    }
  }
  /**
   * Returns `true` is the connection is open.
   */
  isConnected() {
    return this.connectionState() === lt.Open;
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
      const o = new ar(`realtime:${e}`, s, this);
      return this.channels.push(o), o;
    }
  }
  /**
   * Push out a message if the socket is connected.
   *
   * If the socket is not connected, the message gets enqueued within a local buffer, and sent out when a connection is next established.
   */
  push(e) {
    const { topic: s, event: n, payload: r, ref: o } = e, i = () => {
      this.encode(e, (a) => {
        var l;
        (l = this.conn) === null || l === void 0 || l.send(a);
      });
    };
    this.log("push", `${s} ${n} (${o})`, r), this.isConnected() ? i() : this.sendBuffer.push(i);
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
      this._wasManualDisconnect = !1, (e = this.conn) === null || e === void 0 || e.close(yf, "heartbeat timeout"), setTimeout(() => {
        var s;
        this.isConnected() || (s = this.reconnectTimer) === null || s === void 0 || s.scheduleTimeout();
      }, _s.HEARTBEAT_TIMEOUT_FALLBACK);
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
      const { topic: n, event: r, payload: o, ref: i } = s, a = i ? `(${i})` : "", l = o.status || "";
      this.log("receive", `${l} ${n} ${r} ${a}`.trim(), o), this.channels.filter((c) => c._isMember(n)).forEach((c) => c._trigger(r, o, i)), this._triggerStateCallbacks("message", s);
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
    this.channels.forEach((e) => e._trigger(Ie.error));
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
      const n = new Blob([Af], { type: "application/javascript" });
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
        version: vf
      };
      s && n.updateJoinPayload(r), n.joinedOnce && n._isJoined() && n._push(Ie.access_token, {
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
    this.reconnectTimer = new Bi(async () => {
      setTimeout(async () => {
        await this._waitForAuthIfNeeded(), this.isConnected() || this.connect();
      }, _s.RECONNECT_DELAY);
    }, this.reconnectAfterMs);
  }
  /**
   * Initialize client options with defaults
   * @internal
   */
  _initializeOptions(e) {
    var s, n, r, o, i, a, l, c, u;
    if (this.transport = (s = e == null ? void 0 : e.transport) !== null && s !== void 0 ? s : null, this.timeout = (n = e == null ? void 0 : e.timeout) !== null && n !== void 0 ? n : Cn, this.heartbeatIntervalMs = (r = e == null ? void 0 : e.heartbeatIntervalMs) !== null && r !== void 0 ? r : _s.HEARTBEAT_INTERVAL, this.worker = (o = e == null ? void 0 : e.worker) !== null && o !== void 0 ? o : !1, this.accessToken = (i = e == null ? void 0 : e.accessToken) !== null && i !== void 0 ? i : null, this.heartbeatCallback = (a = e == null ? void 0 : e.heartbeatCallback) !== null && a !== void 0 ? a : un, e != null && e.params && (this.params = e.params), e != null && e.logger && (this.logger = e.logger), (e != null && e.logLevel || e != null && e.log_level) && (this.logLevel = e.logLevel || e.log_level, this.params = Object.assign(Object.assign({}, this.params), { log_level: this.logLevel })), this.reconnectAfterMs = (l = e == null ? void 0 : e.reconnectAfterMs) !== null && l !== void 0 ? l : (d) => Of[d - 1] || If, this.encode = (c = e == null ? void 0 : e.encode) !== null && c !== void 0 ? c : (d, f) => f(JSON.stringify(d)), this.decode = (u = e == null ? void 0 : e.decode) !== null && u !== void 0 ? u : this.serializer.decode.bind(this.serializer), this.worker) {
      if (typeof window < "u" && !window.Worker)
        throw new Error("Web Worker is not supported");
      this.workerUrl = e == null ? void 0 : e.workerUrl;
    }
  }
}
class lr extends Error {
  constructor(e) {
    super(e), this.__isStorageError = !0, this.name = "StorageError";
  }
}
function re(t) {
  return typeof t == "object" && t !== null && "__isStorageError" in t;
}
class $f extends lr {
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
class An extends lr {
  constructor(e, s) {
    super(e), this.name = "StorageUnknownError", this.originalError = s;
  }
}
var xf = globalThis && globalThis.__awaiter || function(t, e, s, n) {
  function r(o) {
    return o instanceof s ? o : new s(function(i) {
      i(o);
    });
  }
  return new (s || (s = Promise))(function(o, i) {
    function a(u) {
      try {
        c(n.next(u));
      } catch (d) {
        i(d);
      }
    }
    function l(u) {
      try {
        c(n.throw(u));
      } catch (d) {
        i(d);
      }
    }
    function c(u) {
      u.done ? o(u.value) : r(u.value).then(a, l);
    }
    c((n = n.apply(t, e || [])).next());
  });
};
const Vi = (t) => {
  let e;
  return t ? e = t : typeof fetch > "u" ? e = (...s) => Promise.resolve().then(() => Mt).then(({ default: n }) => n(...s)) : e = fetch, (...s) => e(...s);
}, jf = () => xf(void 0, void 0, void 0, function* () {
  return typeof Response > "u" ? (yield Promise.resolve().then(() => Mt)).Response : Response;
}), Pn = (t) => {
  if (Array.isArray(t))
    return t.map((s) => Pn(s));
  if (typeof t == "function" || t !== Object(t))
    return t;
  const e = {};
  return Object.entries(t).forEach(([s, n]) => {
    const r = s.replace(/([-_][a-z])/gi, (o) => o.toUpperCase().replace(/[-_]/g, ""));
    e[r] = Pn(n);
  }), e;
}, Nf = (t) => {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
};
var bt = globalThis && globalThis.__awaiter || function(t, e, s, n) {
  function r(o) {
    return o instanceof s ? o : new s(function(i) {
      i(o);
    });
  }
  return new (s || (s = Promise))(function(o, i) {
    function a(u) {
      try {
        c(n.next(u));
      } catch (d) {
        i(d);
      }
    }
    function l(u) {
      try {
        c(n.throw(u));
      } catch (d) {
        i(d);
      }
    }
    function c(u) {
      u.done ? o(u.value) : r(u.value).then(a, l);
    }
    c((n = n.apply(t, e || [])).next());
  });
};
const dn = (t) => t.msg || t.message || t.error_description || t.error || JSON.stringify(t), Rf = (t, e, s) => bt(void 0, void 0, void 0, function* () {
  const n = yield jf();
  t instanceof n && !(s != null && s.noResolveJson) ? t.json().then((r) => {
    const o = t.status || 500, i = (r == null ? void 0 : r.statusCode) || o + "";
    e(new $f(dn(r), o, i));
  }).catch((r) => {
    e(new An(dn(r), r));
  }) : e(new An(dn(t), t));
}), Lf = (t, e, s, n) => {
  const r = { method: t, headers: (e == null ? void 0 : e.headers) || {} };
  return t === "GET" || !n ? r : (Nf(n) ? (r.headers = Object.assign({ "Content-Type": "application/json" }, e == null ? void 0 : e.headers), r.body = JSON.stringify(n)) : r.body = n, e != null && e.duplex && (r.duplex = e.duplex), Object.assign(Object.assign({}, r), s));
};
function ls(t, e, s, n, r, o) {
  return bt(this, void 0, void 0, function* () {
    return new Promise((i, a) => {
      t(s, Lf(e, n, r, o)).then((l) => {
        if (!l.ok)
          throw l;
        return n != null && n.noResolveJson ? l : l.json();
      }).then((l) => i(l)).catch((l) => Rf(l, a, n));
    });
  });
}
function js(t, e, s, n) {
  return bt(this, void 0, void 0, function* () {
    return ls(t, "GET", e, s, n);
  });
}
function $e(t, e, s, n, r) {
  return bt(this, void 0, void 0, function* () {
    return ls(t, "POST", e, n, r, s);
  });
}
function $n(t, e, s, n, r) {
  return bt(this, void 0, void 0, function* () {
    return ls(t, "PUT", e, n, r, s);
  });
}
function Mf(t, e, s, n) {
  return bt(this, void 0, void 0, function* () {
    return ls(t, "HEAD", e, Object.assign(Object.assign({}, s), { noResolveJson: !0 }), n);
  });
}
function Wi(t, e, s, n, r) {
  return bt(this, void 0, void 0, function* () {
    return ls(t, "DELETE", e, n, r, s);
  });
}
var ue = globalThis && globalThis.__awaiter || function(t, e, s, n) {
  function r(o) {
    return o instanceof s ? o : new s(function(i) {
      i(o);
    });
  }
  return new (s || (s = Promise))(function(o, i) {
    function a(u) {
      try {
        c(n.next(u));
      } catch (d) {
        i(d);
      }
    }
    function l(u) {
      try {
        c(n.throw(u));
      } catch (d) {
        i(d);
      }
    }
    function c(u) {
      u.done ? o(u.value) : r(u.value).then(a, l);
    }
    c((n = n.apply(t, e || [])).next());
  });
};
const Uf = {
  limit: 100,
  offset: 0,
  sortBy: {
    column: "name",
    order: "asc"
  }
}, po = {
  cacheControl: "3600",
  contentType: "text/plain;charset=UTF-8",
  upsert: !1
};
class Df {
  constructor(e, s = {}, n, r) {
    this.url = e, this.headers = s, this.bucketId = n, this.fetch = Vi(r);
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
        const i = Object.assign(Object.assign({}, po), r);
        let a = Object.assign(Object.assign({}, this.headers), e === "POST" && { "x-upsert": String(i.upsert) });
        const l = i.metadata;
        typeof Blob < "u" && n instanceof Blob ? (o = new FormData(), o.append("cacheControl", i.cacheControl), l && o.append("metadata", this.encodeMetadata(l)), o.append("", n)) : typeof FormData < "u" && n instanceof FormData ? (o = n, o.append("cacheControl", i.cacheControl), l && o.append("metadata", this.encodeMetadata(l))) : (o = n, a["cache-control"] = `max-age=${i.cacheControl}`, a["content-type"] = i.contentType, l && (a["x-metadata"] = this.toBase64(this.encodeMetadata(l)))), r != null && r.headers && (a = Object.assign(Object.assign({}, a), r.headers));
        const c = this._removeEmptyFolders(s), u = this._getFinalPath(c), d = yield (e == "PUT" ? $n : $e)(this.fetch, `${this.url}/object/${u}`, o, Object.assign({ headers: a }, i != null && i.duplex ? { duplex: i.duplex } : {}));
        return {
          data: { path: c, id: d.Id, fullPath: d.Key },
          error: null
        };
      } catch (o) {
        if (re(o))
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
      const o = this._removeEmptyFolders(e), i = this._getFinalPath(o), a = new URL(this.url + `/object/upload/sign/${i}`);
      a.searchParams.set("token", s);
      try {
        let l;
        const c = Object.assign({ upsert: po.upsert }, r), u = Object.assign(Object.assign({}, this.headers), { "x-upsert": String(c.upsert) });
        typeof Blob < "u" && n instanceof Blob ? (l = new FormData(), l.append("cacheControl", c.cacheControl), l.append("", n)) : typeof FormData < "u" && n instanceof FormData ? (l = n, l.append("cacheControl", c.cacheControl)) : (l = n, u["cache-control"] = `max-age=${c.cacheControl}`, u["content-type"] = c.contentType);
        const d = yield $n(this.fetch, a.toString(), l, { headers: u });
        return {
          data: { path: o, fullPath: d.Key },
          error: null
        };
      } catch (l) {
        if (re(l))
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
        const o = yield $e(this.fetch, `${this.url}/object/upload/sign/${n}`, {}, { headers: r }), i = new URL(this.url + o.url), a = i.searchParams.get("token");
        if (!a)
          throw new lr("No token returned by API");
        return { data: { signedUrl: i.toString(), path: e, token: a }, error: null };
      } catch (n) {
        if (re(n))
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
        return { data: yield $e(this.fetch, `${this.url}/object/move`, {
          bucketId: this.bucketId,
          sourceKey: e,
          destinationKey: s,
          destinationBucket: n == null ? void 0 : n.destinationBucket
        }, { headers: this.headers }), error: null };
      } catch (r) {
        if (re(r))
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
        return { data: { path: (yield $e(this.fetch, `${this.url}/object/copy`, {
          bucketId: this.bucketId,
          sourceKey: e,
          destinationKey: s,
          destinationBucket: n == null ? void 0 : n.destinationBucket
        }, { headers: this.headers })).Key }, error: null };
      } catch (r) {
        if (re(r))
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
        let r = this._getFinalPath(e), o = yield $e(this.fetch, `${this.url}/object/sign/${r}`, Object.assign({ expiresIn: s }, n != null && n.transform ? { transform: n.transform } : {}), { headers: this.headers });
        const i = n != null && n.download ? `&download=${n.download === !0 ? "" : n.download}` : "";
        return o = { signedUrl: encodeURI(`${this.url}${o.signedURL}${i}`) }, { data: o, error: null };
      } catch (r) {
        if (re(r))
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
        const r = yield $e(this.fetch, `${this.url}/object/sign/${this.bucketId}`, { expiresIn: s, paths: e }, { headers: this.headers }), o = n != null && n.download ? `&download=${n.download === !0 ? "" : n.download}` : "";
        return {
          data: r.map((i) => Object.assign(Object.assign({}, i), { signedUrl: i.signedURL ? encodeURI(`${this.url}${i.signedURL}${o}`) : null })),
          error: null
        };
      } catch (r) {
        if (re(r))
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
      const r = typeof (s == null ? void 0 : s.transform) < "u" ? "render/image/authenticated" : "object", o = this.transformOptsToQueryString((s == null ? void 0 : s.transform) || {}), i = o ? `?${o}` : "";
      try {
        const a = this._getFinalPath(e);
        return { data: yield (yield js(this.fetch, `${this.url}/${r}/${a}${i}`, {
          headers: this.headers,
          noResolveJson: !0
        })).blob(), error: null };
      } catch (a) {
        if (re(a))
          return { data: null, error: a };
        throw a;
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
        const n = yield js(this.fetch, `${this.url}/object/info/${s}`, {
          headers: this.headers
        });
        return { data: Pn(n), error: null };
      } catch (n) {
        if (re(n))
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
        return yield Mf(this.fetch, `${this.url}/object/${s}`, {
          headers: this.headers
        }), { data: !0, error: null };
      } catch (n) {
        if (re(n) && n instanceof An) {
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
    const a = typeof (s == null ? void 0 : s.transform) < "u" ? "render/image" : "object", l = this.transformOptsToQueryString((s == null ? void 0 : s.transform) || {});
    l !== "" && r.push(l);
    let c = r.join("&");
    return c !== "" && (c = `?${c}`), {
      data: { publicUrl: encodeURI(`${this.url}/${a}/public/${n}${c}`) }
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
        return { data: yield Wi(this.fetch, `${this.url}/object/${this.bucketId}`, { prefixes: e }, { headers: this.headers }), error: null };
      } catch (s) {
        if (re(s))
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
        const r = Object.assign(Object.assign(Object.assign({}, Uf), s), { prefix: e || "" });
        return { data: yield $e(this.fetch, `${this.url}/object/list/${this.bucketId}`, r, { headers: this.headers }, n), error: null };
      } catch (r) {
        if (re(r))
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
        return { data: yield $e(this.fetch, `${this.url}/object/list-v2/${this.bucketId}`, n, { headers: this.headers }, s), error: null };
      } catch (n) {
        if (re(n))
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
const Bf = "2.11.0", Ff = { "X-Client-Info": `storage-js/${Bf}` };
var kt = globalThis && globalThis.__awaiter || function(t, e, s, n) {
  function r(o) {
    return o instanceof s ? o : new s(function(i) {
      i(o);
    });
  }
  return new (s || (s = Promise))(function(o, i) {
    function a(u) {
      try {
        c(n.next(u));
      } catch (d) {
        i(d);
      }
    }
    function l(u) {
      try {
        c(n.throw(u));
      } catch (d) {
        i(d);
      }
    }
    function c(u) {
      u.done ? o(u.value) : r(u.value).then(a, l);
    }
    c((n = n.apply(t, e || [])).next());
  });
};
class zf {
  constructor(e, s = {}, n, r) {
    const o = new URL(e);
    r != null && r.useNewHostname && /supabase\.(co|in|red)$/.test(o.hostname) && !o.hostname.includes("storage.supabase.") && (o.hostname = o.hostname.replace("supabase.", "storage.supabase.")), this.url = o.href, this.headers = Object.assign(Object.assign({}, Ff), s), this.fetch = Vi(n);
  }
  /**
   * Retrieves the details of all Storage buckets within an existing project.
   */
  listBuckets() {
    return kt(this, void 0, void 0, function* () {
      try {
        return { data: yield js(this.fetch, `${this.url}/bucket`, { headers: this.headers }), error: null };
      } catch (e) {
        if (re(e))
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
    return kt(this, void 0, void 0, function* () {
      try {
        return { data: yield js(this.fetch, `${this.url}/bucket/${e}`, { headers: this.headers }), error: null };
      } catch (s) {
        if (re(s))
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
    return kt(this, void 0, void 0, function* () {
      try {
        return { data: yield $e(this.fetch, `${this.url}/bucket`, {
          id: e,
          name: e,
          type: s.type,
          public: s.public,
          file_size_limit: s.fileSizeLimit,
          allowed_mime_types: s.allowedMimeTypes
        }, { headers: this.headers }), error: null };
      } catch (n) {
        if (re(n))
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
    return kt(this, void 0, void 0, function* () {
      try {
        return { data: yield $n(this.fetch, `${this.url}/bucket/${e}`, {
          id: e,
          name: e,
          public: s.public,
          file_size_limit: s.fileSizeLimit,
          allowed_mime_types: s.allowedMimeTypes
        }, { headers: this.headers }), error: null };
      } catch (n) {
        if (re(n))
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
    return kt(this, void 0, void 0, function* () {
      try {
        return { data: yield $e(this.fetch, `${this.url}/bucket/${e}/empty`, {}, { headers: this.headers }), error: null };
      } catch (s) {
        if (re(s))
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
    return kt(this, void 0, void 0, function* () {
      try {
        return { data: yield Wi(this.fetch, `${this.url}/bucket/${e}`, {}, { headers: this.headers }), error: null };
      } catch (s) {
        if (re(s))
          return { data: null, error: s };
        throw s;
      }
    });
  }
}
class Vf extends zf {
  constructor(e, s = {}, n, r) {
    super(e, s, n, r);
  }
  /**
   * Perform file operation in a bucket.
   *
   * @param id The bucket id to operate on.
   */
  from(e) {
    return new Df(this.url, this.headers, e, this.fetch);
  }
}
const Wf = "2.57.0";
let zt = "";
typeof Deno < "u" ? zt = "deno" : typeof document < "u" ? zt = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? zt = "react-native" : zt = "node";
const Hf = { "X-Client-Info": `supabase-js-${zt}/${Wf}` }, qf = {
  headers: Hf
}, Kf = {
  schema: "public"
}, Gf = {
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  flowType: "implicit"
}, Jf = {};
var Yf = globalThis && globalThis.__awaiter || function(t, e, s, n) {
  function r(o) {
    return o instanceof s ? o : new s(function(i) {
      i(o);
    });
  }
  return new (s || (s = Promise))(function(o, i) {
    function a(u) {
      try {
        c(n.next(u));
      } catch (d) {
        i(d);
      }
    }
    function l(u) {
      try {
        c(n.throw(u));
      } catch (d) {
        i(d);
      }
    }
    function c(u) {
      u.done ? o(u.value) : r(u.value).then(a, l);
    }
    c((n = n.apply(t, e || [])).next());
  });
};
const Xf = (t) => {
  let e;
  return t ? e = t : typeof fetch > "u" ? e = Ai : e = fetch, (...s) => e(...s);
}, Zf = () => typeof Headers > "u" ? Pi : Headers, Qf = (t, e, s) => {
  const n = Xf(s), r = Zf();
  return (o, i) => Yf(void 0, void 0, void 0, function* () {
    var a;
    const l = (a = yield e()) !== null && a !== void 0 ? a : t;
    let c = new r(i == null ? void 0 : i.headers);
    return c.has("apikey") || c.set("apikey", t), c.has("Authorization") || c.set("Authorization", `Bearer ${l}`), n(o, Object.assign(Object.assign({}, i), { headers: c }));
  });
};
var ep = globalThis && globalThis.__awaiter || function(t, e, s, n) {
  function r(o) {
    return o instanceof s ? o : new s(function(i) {
      i(o);
    });
  }
  return new (s || (s = Promise))(function(o, i) {
    function a(u) {
      try {
        c(n.next(u));
      } catch (d) {
        i(d);
      }
    }
    function l(u) {
      try {
        c(n.throw(u));
      } catch (d) {
        i(d);
      }
    }
    function c(u) {
      u.done ? o(u.value) : r(u.value).then(a, l);
    }
    c((n = n.apply(t, e || [])).next());
  });
};
function tp(t) {
  return t.endsWith("/") ? t : t + "/";
}
function sp(t, e) {
  var s, n;
  const { db: r, auth: o, realtime: i, global: a } = t, { db: l, auth: c, realtime: u, global: d } = e, f = {
    db: Object.assign(Object.assign({}, l), r),
    auth: Object.assign(Object.assign({}, c), o),
    realtime: Object.assign(Object.assign({}, u), i),
    storage: {},
    global: Object.assign(Object.assign(Object.assign({}, d), a), { headers: Object.assign(Object.assign({}, (s = d == null ? void 0 : d.headers) !== null && s !== void 0 ? s : {}), (n = a == null ? void 0 : a.headers) !== null && n !== void 0 ? n : {}) }),
    accessToken: () => ep(this, void 0, void 0, function* () {
      return "";
    })
  };
  return t.accessToken ? f.accessToken = t.accessToken : delete f.accessToken, f;
}
const Hi = "2.71.1", At = 30 * 1e3, xn = 3, hn = xn * At, np = "http://localhost:9999", rp = "supabase.auth.token", op = { "X-Client-Info": `gotrue-js/${Hi}` }, jn = "X-Supabase-Api-Version", qi = {
  "2024-01-01": {
    timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
    name: "2024-01-01"
  }
}, ip = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i, ap = 10 * 60 * 1e3;
class cr extends Error {
  constructor(e, s, n) {
    super(e), this.__isAuthError = !0, this.name = "AuthError", this.status = s, this.code = n;
  }
}
function F(t) {
  return typeof t == "object" && t !== null && "__isAuthError" in t;
}
class lp extends cr {
  constructor(e, s, n) {
    super(e, s, n), this.name = "AuthApiError", this.status = s, this.code = n;
  }
}
function cp(t) {
  return F(t) && t.name === "AuthApiError";
}
class Ki extends cr {
  constructor(e, s) {
    super(e), this.name = "AuthUnknownError", this.originalError = s;
  }
}
class nt extends cr {
  constructor(e, s, n, r) {
    super(e, n, r), this.name = s, this.status = n;
  }
}
class Je extends nt {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
function up(t) {
  return F(t) && t.name === "AuthSessionMissingError";
}
class bs extends nt {
  constructor() {
    super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0);
  }
}
class ws extends nt {
  constructor(e) {
    super(e, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class ks extends nt {
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
function dp(t) {
  return F(t) && t.name === "AuthImplicitGrantRedirectError";
}
class go extends nt {
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
class Nn extends nt {
  constructor(e, s) {
    super(e, "AuthRetryableFetchError", s, void 0);
  }
}
function fn(t) {
  return F(t) && t.name === "AuthRetryableFetchError";
}
class vo extends nt {
  constructor(e, s, n) {
    super(e, "AuthWeakPasswordError", s, "weak_password"), this.reasons = n;
  }
}
class Rn extends nt {
  constructor(e) {
    super(e, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
}
const Ns = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""), mo = ` 	
\r=`.split(""), hp = (() => {
  const t = new Array(128);
  for (let e = 0; e < t.length; e += 1)
    t[e] = -1;
  for (let e = 0; e < mo.length; e += 1)
    t[mo[e].charCodeAt(0)] = -2;
  for (let e = 0; e < Ns.length; e += 1)
    t[Ns[e].charCodeAt(0)] = e;
  return t;
})();
function yo(t, e, s) {
  if (t !== null)
    for (e.queue = e.queue << 8 | t, e.queuedBits += 8; e.queuedBits >= 6; ) {
      const n = e.queue >> e.queuedBits - 6 & 63;
      s(Ns[n]), e.queuedBits -= 6;
    }
  else if (e.queuedBits > 0)
    for (e.queue = e.queue << 6 - e.queuedBits, e.queuedBits = 6; e.queuedBits >= 6; ) {
      const n = e.queue >> e.queuedBits - 6 & 63;
      s(Ns[n]), e.queuedBits -= 6;
    }
}
function Gi(t, e, s) {
  const n = hp[t];
  if (n > -1)
    for (e.queue = e.queue << 6 | n, e.queuedBits += 6; e.queuedBits >= 8; )
      s(e.queue >> e.queuedBits - 8 & 255), e.queuedBits -= 8;
  else {
    if (n === -2)
      return;
    throw new Error(`Invalid Base64-URL character "${String.fromCharCode(t)}"`);
  }
}
function _o(t) {
  const e = [], s = (i) => {
    e.push(String.fromCodePoint(i));
  }, n = {
    utf8seq: 0,
    codepoint: 0
  }, r = { queue: 0, queuedBits: 0 }, o = (i) => {
    gp(i, n, s);
  };
  for (let i = 0; i < t.length; i += 1)
    Gi(t.charCodeAt(i), r, o);
  return e.join("");
}
function fp(t, e) {
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
function pp(t, e) {
  for (let s = 0; s < t.length; s += 1) {
    let n = t.charCodeAt(s);
    if (n > 55295 && n <= 56319) {
      const r = (n - 55296) * 1024 & 65535;
      n = (t.charCodeAt(s + 1) - 56320 & 65535 | r) + 65536, s += 1;
    }
    fp(n, e);
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
function vp(t) {
  const e = [], s = { queue: 0, queuedBits: 0 }, n = (r) => {
    e.push(r);
  };
  for (let r = 0; r < t.length; r += 1)
    Gi(t.charCodeAt(r), s, n);
  return new Uint8Array(e);
}
function mp(t) {
  const e = [];
  return pp(t, (s) => e.push(s)), new Uint8Array(e);
}
function yp(t) {
  const e = [], s = { queue: 0, queuedBits: 0 }, n = (r) => {
    e.push(r);
  };
  return t.forEach((r) => yo(r, s, n)), yo(null, s, n), e.join("");
}
function _p(t) {
  return Math.round(Date.now() / 1e3) + t;
}
function bp() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
    const e = Math.random() * 16 | 0;
    return (t == "x" ? e : e & 3 | 8).toString(16);
  });
}
const Oe = () => typeof window < "u" && typeof document < "u", ot = {
  tested: !1,
  writable: !1
}, Ji = () => {
  if (!Oe())
    return !1;
  try {
    if (typeof globalThis.localStorage != "object")
      return !1;
  } catch {
    return !1;
  }
  if (ot.tested)
    return ot.writable;
  const t = `lswt-${Math.random()}${Math.random()}`;
  try {
    globalThis.localStorage.setItem(t, t), globalThis.localStorage.removeItem(t), ot.tested = !0, ot.writable = !0;
  } catch {
    ot.tested = !0, ot.writable = !1;
  }
  return ot.writable;
};
function wp(t) {
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
const Yi = (t) => {
  let e;
  return t ? e = t : typeof fetch > "u" ? e = (...s) => Promise.resolve().then(() => Mt).then(({ default: n }) => n(...s)) : e = fetch, (...s) => e(...s);
}, kp = (t) => typeof t == "object" && t !== null && "status" in t && "ok" in t && "json" in t && typeof t.json == "function", Pt = async (t, e, s) => {
  await t.setItem(e, JSON.stringify(s));
}, it = async (t, e) => {
  const s = await t.getItem(e);
  if (!s)
    return null;
  try {
    return JSON.parse(s);
  } catch {
    return s;
  }
}, qe = async (t, e) => {
  await t.removeItem(e);
};
class Js {
  constructor() {
    this.promise = new Js.promiseConstructor((e, s) => {
      this.resolve = e, this.reject = s;
    });
  }
}
Js.promiseConstructor = Promise;
function pn(t) {
  const e = t.split(".");
  if (e.length !== 3)
    throw new Rn("Invalid JWT structure");
  for (let n = 0; n < e.length; n++)
    if (!ip.test(e[n]))
      throw new Rn("JWT not in base64url format");
  return {
    // using base64url lib
    header: JSON.parse(_o(e[0])),
    payload: JSON.parse(_o(e[1])),
    signature: vp(e[2]),
    raw: {
      header: e[0],
      payload: e[1]
    }
  };
}
async function Sp(t) {
  return await new Promise((e) => {
    setTimeout(() => e(null), t);
  });
}
function Ep(t, e) {
  return new Promise((n, r) => {
    (async () => {
      for (let o = 0; o < 1 / 0; o++)
        try {
          const i = await t(o);
          if (!e(o, null, i)) {
            n(i);
            return;
          }
        } catch (i) {
          if (!e(o, i)) {
            r(i);
            return;
          }
        }
    })();
  });
}
function Tp(t) {
  return ("0" + t.toString(16)).substr(-2);
}
function Cp() {
  const e = new Uint32Array(56);
  if (typeof crypto > "u") {
    const s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~", n = s.length;
    let r = "";
    for (let o = 0; o < 56; o++)
      r += s.charAt(Math.floor(Math.random() * n));
    return r;
  }
  return crypto.getRandomValues(e), Array.from(e, Tp).join("");
}
async function Op(t) {
  const s = new TextEncoder().encode(t), n = await crypto.subtle.digest("SHA-256", s), r = new Uint8Array(n);
  return Array.from(r).map((o) => String.fromCharCode(o)).join("");
}
async function Ip(t) {
  if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u"))
    return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), t;
  const s = await Op(t);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function St(t, e, s = !1) {
  const n = Cp();
  let r = n;
  s && (r += "/PASSWORD_RECOVERY"), await Pt(t, `${e}-code-verifier`, r);
  const o = await Ip(n);
  return [o, n === o ? "plain" : "s256"];
}
const Ap = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function Pp(t) {
  const e = t.headers.get(jn);
  if (!e || !e.match(Ap))
    return null;
  try {
    return /* @__PURE__ */ new Date(`${e}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function $p(t) {
  if (!t)
    throw new Error("Missing exp claim");
  const e = Math.floor(Date.now() / 1e3);
  if (t <= e)
    throw new Error("JWT has expired");
}
function xp(t) {
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
const jp = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function Et(t) {
  if (!jp.test(t))
    throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not");
}
function gn() {
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
function bo(t) {
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
const at = (t) => t.msg || t.message || t.error_description || t.error || JSON.stringify(t), Rp = [502, 503, 504];
async function wo(t) {
  var e;
  if (!kp(t))
    throw new Nn(at(t), 0);
  if (Rp.includes(t.status))
    throw new Nn(at(t), t.status);
  let s;
  try {
    s = await t.json();
  } catch (o) {
    throw new Ki(at(o), o);
  }
  let n;
  const r = Pp(t);
  if (r && r.getTime() >= qi["2024-01-01"].timestamp && typeof s == "object" && s && typeof s.code == "string" ? n = s.code : typeof s == "object" && s && typeof s.error_code == "string" && (n = s.error_code), n) {
    if (n === "weak_password")
      throw new vo(at(s), t.status, ((e = s.weak_password) === null || e === void 0 ? void 0 : e.reasons) || []);
    if (n === "session_not_found")
      throw new Je();
  } else if (typeof s == "object" && s && typeof s.weak_password == "object" && s.weak_password && Array.isArray(s.weak_password.reasons) && s.weak_password.reasons.length && s.weak_password.reasons.reduce((o, i) => o && typeof i == "string", !0))
    throw new vo(at(s), t.status, s.weak_password.reasons);
  throw new lp(at(s), t.status || 500, n);
}
const Lp = (t, e, s, n) => {
  const r = { method: t, headers: (e == null ? void 0 : e.headers) || {} };
  return t === "GET" ? r : (r.headers = Object.assign({ "Content-Type": "application/json;charset=UTF-8" }, e == null ? void 0 : e.headers), r.body = JSON.stringify(n), Object.assign(Object.assign({}, r), s));
};
async function H(t, e, s, n) {
  var r;
  const o = Object.assign({}, n == null ? void 0 : n.headers);
  o[jn] || (o[jn] = qi["2024-01-01"].name), n != null && n.jwt && (o.Authorization = `Bearer ${n.jwt}`);
  const i = (r = n == null ? void 0 : n.query) !== null && r !== void 0 ? r : {};
  n != null && n.redirectTo && (i.redirect_to = n.redirectTo);
  const a = Object.keys(i).length ? "?" + new URLSearchParams(i).toString() : "", l = await Mp(t, e, s + a, {
    headers: o,
    noResolveJson: n == null ? void 0 : n.noResolveJson
  }, {}, n == null ? void 0 : n.body);
  return n != null && n.xform ? n == null ? void 0 : n.xform(l) : { data: Object.assign({}, l), error: null };
}
async function Mp(t, e, s, n, r, o) {
  const i = Lp(e, n, r, o);
  let a;
  try {
    a = await t(s, Object.assign({}, i));
  } catch (l) {
    throw console.error(l), new Nn(at(l), 0);
  }
  if (a.ok || await wo(a), n != null && n.noResolveJson)
    return a;
  try {
    return await a.json();
  } catch (l) {
    await wo(l);
  }
}
function Ue(t) {
  var e;
  let s = null;
  Fp(t) && (s = Object.assign({}, t), t.expires_at || (s.expires_at = _p(t.expires_in)));
  const n = (e = t.user) !== null && e !== void 0 ? e : t;
  return { data: { session: s, user: n }, error: null };
}
function ko(t) {
  const e = Ue(t);
  return !e.error && t.weak_password && typeof t.weak_password == "object" && Array.isArray(t.weak_password.reasons) && t.weak_password.reasons.length && t.weak_password.message && typeof t.weak_password.message == "string" && t.weak_password.reasons.reduce((s, n) => s && typeof n == "string", !0) && (e.data.weak_password = t.weak_password), e;
}
function Ye(t) {
  var e;
  return { data: { user: (e = t.user) !== null && e !== void 0 ? e : t }, error: null };
}
function Up(t) {
  return { data: t, error: null };
}
function Dp(t) {
  const { action_link: e, email_otp: s, hashed_token: n, redirect_to: r, verification_type: o } = t, i = Np(t, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]), a = {
    action_link: e,
    email_otp: s,
    hashed_token: n,
    redirect_to: r,
    verification_type: o
  }, l = Object.assign({}, i);
  return {
    data: {
      properties: a,
      user: l
    },
    error: null
  };
}
function Bp(t) {
  return t;
}
function Fp(t) {
  return t.access_token && t.refresh_token && t.expires_in;
}
const vn = ["global", "local", "others"];
var zp = globalThis && globalThis.__rest || function(t, e) {
  var s = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (s[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, n = Object.getOwnPropertySymbols(t); r < n.length; r++)
      e.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[r]) && (s[n[r]] = t[n[r]]);
  return s;
};
class Vp {
  constructor({ url: e = "", headers: s = {}, fetch: n }) {
    this.url = e, this.headers = s, this.fetch = Yi(n), this.mfa = {
      listFactors: this._listFactors.bind(this),
      deleteFactor: this._deleteFactor.bind(this)
    };
  }
  /**
   * Removes a logged-in session.
   * @param jwt A valid, logged-in JWT.
   * @param scope The logout sope.
   */
  async signOut(e, s = vn[0]) {
    if (vn.indexOf(s) < 0)
      throw new Error(`@supabase/auth-js: Parameter scope must be one of ${vn.join(", ")}`);
    try {
      return await H(this.fetch, "POST", `${this.url}/logout?scope=${s}`, {
        headers: this.headers,
        jwt: e,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (n) {
      if (F(n))
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
      return await H(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: e, data: s.data },
        headers: this.headers,
        redirectTo: s.redirectTo,
        xform: Ye
      });
    } catch (n) {
      if (F(n))
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
      const { options: s } = e, n = zp(e, ["options"]), r = Object.assign(Object.assign({}, n), s);
      return "newEmail" in n && (r.new_email = n == null ? void 0 : n.newEmail, delete r.newEmail), await H(this.fetch, "POST", `${this.url}/admin/generate_link`, {
        body: r,
        headers: this.headers,
        xform: Dp,
        redirectTo: s == null ? void 0 : s.redirectTo
      });
    } catch (s) {
      if (F(s))
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
      return await H(this.fetch, "POST", `${this.url}/admin/users`, {
        body: e,
        headers: this.headers,
        xform: Ye
      });
    } catch (s) {
      if (F(s))
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
    var s, n, r, o, i, a, l;
    try {
      const c = { nextPage: null, lastPage: 0, total: 0 }, u = await H(this.fetch, "GET", `${this.url}/admin/users`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (n = (s = e == null ? void 0 : e.page) === null || s === void 0 ? void 0 : s.toString()) !== null && n !== void 0 ? n : "",
          per_page: (o = (r = e == null ? void 0 : e.perPage) === null || r === void 0 ? void 0 : r.toString()) !== null && o !== void 0 ? o : ""
        },
        xform: Bp
      });
      if (u.error)
        throw u.error;
      const d = await u.json(), f = (i = u.headers.get("x-total-count")) !== null && i !== void 0 ? i : 0, p = (l = (a = u.headers.get("link")) === null || a === void 0 ? void 0 : a.split(",")) !== null && l !== void 0 ? l : [];
      return p.length > 0 && (p.forEach((h) => {
        const g = parseInt(h.split(";")[0].split("=")[1].substring(0, 1)), _ = JSON.parse(h.split(";")[1].split("=")[1]);
        c[`${_}Page`] = g;
      }), c.total = parseInt(f)), { data: Object.assign(Object.assign({}, d), c), error: null };
    } catch (c) {
      if (F(c))
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
    Et(e);
    try {
      return await H(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        xform: Ye
      });
    } catch (s) {
      if (F(s))
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
    Et(e);
    try {
      return await H(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
        body: s,
        headers: this.headers,
        xform: Ye
      });
    } catch (n) {
      if (F(n))
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
    Et(e);
    try {
      return await H(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        body: {
          should_soft_delete: s
        },
        xform: Ye
      });
    } catch (n) {
      if (F(n))
        return { data: { user: null }, error: n };
      throw n;
    }
  }
  async _listFactors(e) {
    Et(e.userId);
    try {
      const { data: s, error: n } = await H(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/factors`, {
        headers: this.headers,
        xform: (r) => ({ data: { factors: r }, error: null })
      });
      return { data: s, error: n };
    } catch (s) {
      if (F(s))
        return { data: null, error: s };
      throw s;
    }
  }
  async _deleteFactor(e) {
    Et(e.userId), Et(e.id);
    try {
      return { data: await H(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/factors/${e.id}`, {
        headers: this.headers
      }), error: null };
    } catch (s) {
      if (F(s))
        return { data: null, error: s };
      throw s;
    }
  }
}
function So(t = {}) {
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
function Wp() {
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
const Tt = {
  /**
   * @experimental
   */
  debug: !!(globalThis && Ji() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class Xi extends Error {
  constructor(e) {
    super(e), this.isAcquireTimeout = !0;
  }
}
class Hp extends Xi {
}
async function qp(t, e, s) {
  Tt.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", t, e);
  const n = new globalThis.AbortController();
  return e > 0 && setTimeout(() => {
    n.abort(), Tt.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", t);
  }, e), await Promise.resolve().then(() => globalThis.navigator.locks.request(t, e === 0 ? {
    mode: "exclusive",
    ifAvailable: !0
  } : {
    mode: "exclusive",
    signal: n.signal
  }, async (r) => {
    if (r) {
      Tt.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", t, r.name);
      try {
        return await s();
      } finally {
        Tt.debug && console.log("@supabase/gotrue-js: navigatorLock: released", t, r.name);
      }
    } else {
      if (e === 0)
        throw Tt.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", t), new Hp(`Acquiring an exclusive Navigator LockManager lock "${t}" immediately failed`);
      if (Tt.debug)
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
Wp();
const Kp = {
  url: np,
  storageKey: rp,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: op,
  flowType: "implicit",
  debug: !1,
  hasCustomAuthorizationHeader: !1
};
async function Eo(t, e, s) {
  return await s();
}
const Ct = {};
class rs {
  /**
   * Create a new client for use in the browser.
   */
  constructor(e) {
    var s, n;
    this.userStorage = null, this.memoryStorage = null, this.stateChangeEmitters = /* @__PURE__ */ new Map(), this.autoRefreshTicker = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.initializePromise = null, this.detectSessionInUrl = !0, this.hasCustomAuthorizationHeader = !1, this.suppressGetSessionWarning = !1, this.lockAcquired = !1, this.pendingInLock = [], this.broadcastChannel = null, this.logger = console.log, this.instanceID = rs.nextInstanceID, rs.nextInstanceID += 1, this.instanceID > 0 && Oe() && console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");
    const r = Object.assign(Object.assign({}, Kp), e);
    if (this.logDebugMessages = !!r.debug, typeof r.debug == "function" && (this.logger = r.debug), this.persistSession = r.persistSession, this.storageKey = r.storageKey, this.autoRefreshToken = r.autoRefreshToken, this.admin = new Vp({
      url: r.url,
      headers: r.headers,
      fetch: r.fetch
    }), this.url = r.url, this.headers = r.headers, this.fetch = Yi(r.fetch), this.lock = r.lock || Eo, this.detectSessionInUrl = r.detectSessionInUrl, this.flowType = r.flowType, this.hasCustomAuthorizationHeader = r.hasCustomAuthorizationHeader, r.lock ? this.lock = r.lock : Oe() && (!((s = globalThis == null ? void 0 : globalThis.navigator) === null || s === void 0) && s.locks) ? this.lock = qp : this.lock = Eo, this.jwks || (this.jwks = { keys: [] }, this.jwks_cached_at = Number.MIN_SAFE_INTEGER), this.mfa = {
      verify: this._verify.bind(this),
      enroll: this._enroll.bind(this),
      unenroll: this._unenroll.bind(this),
      challenge: this._challenge.bind(this),
      listFactors: this._listFactors.bind(this),
      challengeAndVerify: this._challengeAndVerify.bind(this),
      getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this)
    }, this.persistSession ? (r.storage ? this.storage = r.storage : Ji() ? this.storage = globalThis.localStorage : (this.memoryStorage = {}, this.storage = So(this.memoryStorage)), r.userStorage && (this.userStorage = r.userStorage)) : (this.memoryStorage = {}, this.storage = So(this.memoryStorage)), Oe() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
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
    return (s = (e = Ct[this.storageKey]) === null || e === void 0 ? void 0 : e.jwks) !== null && s !== void 0 ? s : { keys: [] };
  }
  set jwks(e) {
    Ct[this.storageKey] = Object.assign(Object.assign({}, Ct[this.storageKey]), { jwks: e });
  }
  get jwks_cached_at() {
    var e, s;
    return (s = (e = Ct[this.storageKey]) === null || e === void 0 ? void 0 : e.cachedAt) !== null && s !== void 0 ? s : Number.MIN_SAFE_INTEGER;
  }
  set jwks_cached_at(e) {
    Ct[this.storageKey] = Object.assign(Object.assign({}, Ct[this.storageKey]), { cachedAt: e });
  }
  _debug(...e) {
    return this.logDebugMessages && this.logger(`GoTrueClient@${this.instanceID} (${Hi}) ${(/* @__PURE__ */ new Date()).toISOString()}`, ...e), this;
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
      const s = wp(window.location.href);
      let n = "none";
      if (this._isImplicitGrantCallback(s) ? n = "implicit" : await this._isPKCECallback(s) && (n = "pkce"), Oe() && this.detectSessionInUrl && n !== "none") {
        const { data: r, error: o } = await this._getSessionFromURL(s, n);
        if (o) {
          if (this._debug("#_initialize()", "error detecting session from URL", o), dp(o)) {
            const l = (e = o.details) === null || e === void 0 ? void 0 : e.code;
            if (l === "identity_already_exists" || l === "identity_not_found" || l === "single_identity_not_deletable")
              return { error: o };
          }
          return await this._removeSession(), { error: o };
        }
        const { session: i, redirectType: a } = r;
        return this._debug("#_initialize()", "detected session in URL", i, "redirect type", a), await this._saveSession(i), setTimeout(async () => {
          a === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", i) : await this._notifyAllSubscribers("SIGNED_IN", i);
        }, 0), { error: null };
      }
      return await this._recoverAndRefresh(), { error: null };
    } catch (s) {
      return F(s) ? { error: s } : {
        error: new Ki("Unexpected error during initialization", s)
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
      const o = await H(this.fetch, "POST", `${this.url}/signup`, {
        headers: this.headers,
        body: {
          data: (n = (s = e == null ? void 0 : e.options) === null || s === void 0 ? void 0 : s.data) !== null && n !== void 0 ? n : {},
          gotrue_meta_security: { captcha_token: (r = e == null ? void 0 : e.options) === null || r === void 0 ? void 0 : r.captchaToken }
        },
        xform: Ue
      }), { data: i, error: a } = o;
      if (a || !i)
        return { data: { user: null, session: null }, error: a };
      const l = i.session, c = i.user;
      return i.session && (await this._saveSession(i.session), await this._notifyAllSubscribers("SIGNED_IN", l)), { data: { user: c, session: l }, error: null };
    } catch (o) {
      if (F(o))
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
        this.flowType === "pkce" && ([p, h] = await St(this.storage, this.storageKey)), o = await H(this.fetch, "POST", `${this.url}/signup`, {
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
          xform: Ue
        });
      } else if ("phone" in e) {
        const { phone: u, password: d, options: f } = e;
        o = await H(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: u,
            password: d,
            data: (n = f == null ? void 0 : f.data) !== null && n !== void 0 ? n : {},
            channel: (r = f == null ? void 0 : f.channel) !== null && r !== void 0 ? r : "sms",
            gotrue_meta_security: { captcha_token: f == null ? void 0 : f.captchaToken }
          },
          xform: Ue
        });
      } else
        throw new ws("You must provide either an email or phone number and a password");
      const { data: i, error: a } = o;
      if (a || !i)
        return { data: { user: null, session: null }, error: a };
      const l = i.session, c = i.user;
      return i.session && (await this._saveSession(i.session), await this._notifyAllSubscribers("SIGNED_IN", l)), { data: { user: c, session: l }, error: null };
    } catch (o) {
      if (F(o))
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
        const { email: o, password: i, options: a } = e;
        s = await H(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            email: o,
            password: i,
            gotrue_meta_security: { captcha_token: a == null ? void 0 : a.captchaToken }
          },
          xform: ko
        });
      } else if ("phone" in e) {
        const { phone: o, password: i, options: a } = e;
        s = await H(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            phone: o,
            password: i,
            gotrue_meta_security: { captcha_token: a == null ? void 0 : a.captchaToken }
          },
          xform: ko
        });
      } else
        throw new ws("You must provide either an email or phone number and a password");
      const { data: n, error: r } = s;
      return r ? { data: { user: null, session: null }, error: r } : !n || !n.session || !n.user ? { data: { user: null, session: null }, error: new bs() } : (n.session && (await this._saveSession(n.session), await this._notifyAllSubscribers("SIGNED_IN", n.session)), {
        data: Object.assign({ user: n.user, session: n.session }, n.weak_password ? { weakPassword: n.weak_password } : null),
        error: r
      });
    } catch (s) {
      if (F(s))
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
    var s, n, r, o, i, a, l, c, u, d, f, p;
    let h, g;
    if ("message" in e)
      h = e.message, g = e.signature;
    else {
      const { chain: _, wallet: v, statement: k, options: y } = e;
      let A;
      if (Oe())
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
        if (typeof v != "object" || !(y != null && y.url))
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        A = v;
      }
      const L = new URL((s = y == null ? void 0 : y.url) !== null && s !== void 0 ? s : window.location.href);
      if ("signIn" in A && A.signIn) {
        const j = await A.signIn(Object.assign(Object.assign(Object.assign({ issuedAt: (/* @__PURE__ */ new Date()).toISOString() }, y == null ? void 0 : y.signInWithSolana), {
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
          `Issued At: ${(r = (n = y == null ? void 0 : y.signInWithSolana) === null || n === void 0 ? void 0 : n.issuedAt) !== null && r !== void 0 ? r : (/* @__PURE__ */ new Date()).toISOString()}`,
          ...!((o = y == null ? void 0 : y.signInWithSolana) === null || o === void 0) && o.notBefore ? [`Not Before: ${y.signInWithSolana.notBefore}`] : [],
          ...!((i = y == null ? void 0 : y.signInWithSolana) === null || i === void 0) && i.expirationTime ? [`Expiration Time: ${y.signInWithSolana.expirationTime}`] : [],
          ...!((a = y == null ? void 0 : y.signInWithSolana) === null || a === void 0) && a.chainId ? [`Chain ID: ${y.signInWithSolana.chainId}`] : [],
          ...!((l = y == null ? void 0 : y.signInWithSolana) === null || l === void 0) && l.nonce ? [`Nonce: ${y.signInWithSolana.nonce}`] : [],
          ...!((c = y == null ? void 0 : y.signInWithSolana) === null || c === void 0) && c.requestId ? [`Request ID: ${y.signInWithSolana.requestId}`] : [],
          ...!((d = (u = y == null ? void 0 : y.signInWithSolana) === null || u === void 0 ? void 0 : u.resources) === null || d === void 0) && d.length ? [
            "Resources",
            ...y.signInWithSolana.resources.map((P) => `- ${P}`)
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
      const { data: _, error: v } = await H(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({ chain: "solana", message: h, signature: yp(g) }, !((f = e.options) === null || f === void 0) && f.captchaToken ? { gotrue_meta_security: { captcha_token: (p = e.options) === null || p === void 0 ? void 0 : p.captchaToken } } : null),
        xform: Ue
      });
      if (v)
        throw v;
      return !_ || !_.session || !_.user ? {
        data: { user: null, session: null },
        error: new bs()
      } : (_.session && (await this._saveSession(_.session), await this._notifyAllSubscribers("SIGNED_IN", _.session)), { data: Object.assign({}, _), error: v });
    } catch (_) {
      if (F(_))
        return { data: { user: null, session: null }, error: _ };
      throw _;
    }
  }
  async _exchangeCodeForSession(e) {
    const s = await it(this.storage, `${this.storageKey}-code-verifier`), [n, r] = (s ?? "").split("/");
    try {
      const { data: o, error: i } = await H(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
        headers: this.headers,
        body: {
          auth_code: e,
          code_verifier: n
        },
        xform: Ue
      });
      if (await qe(this.storage, `${this.storageKey}-code-verifier`), i)
        throw i;
      return !o || !o.session || !o.user ? {
        data: { user: null, session: null, redirectType: null },
        error: new bs()
      } : (o.session && (await this._saveSession(o.session), await this._notifyAllSubscribers("SIGNED_IN", o.session)), { data: Object.assign(Object.assign({}, o), { redirectType: r ?? null }), error: i });
    } catch (o) {
      if (F(o))
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
      const { options: s, provider: n, token: r, access_token: o, nonce: i } = e, a = await H(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
        headers: this.headers,
        body: {
          provider: n,
          id_token: r,
          access_token: o,
          nonce: i,
          gotrue_meta_security: { captcha_token: s == null ? void 0 : s.captchaToken }
        },
        xform: Ue
      }), { data: l, error: c } = a;
      return c ? { data: { user: null, session: null }, error: c } : !l || !l.session || !l.user ? {
        data: { user: null, session: null },
        error: new bs()
      } : (l.session && (await this._saveSession(l.session), await this._notifyAllSubscribers("SIGNED_IN", l.session)), { data: l, error: c });
    } catch (s) {
      if (F(s))
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
    var s, n, r, o, i;
    try {
      if ("email" in e) {
        const { email: a, options: l } = e;
        let c = null, u = null;
        this.flowType === "pkce" && ([c, u] = await St(this.storage, this.storageKey));
        const { error: d } = await H(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: a,
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
        const { phone: a, options: l } = e, { data: c, error: u } = await H(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            phone: a,
            data: (r = l == null ? void 0 : l.data) !== null && r !== void 0 ? r : {},
            create_user: (o = l == null ? void 0 : l.shouldCreateUser) !== null && o !== void 0 ? o : !0,
            gotrue_meta_security: { captcha_token: l == null ? void 0 : l.captchaToken },
            channel: (i = l == null ? void 0 : l.channel) !== null && i !== void 0 ? i : "sms"
          }
        });
        return { data: { user: null, session: null, messageId: c == null ? void 0 : c.message_id }, error: u };
      }
      throw new ws("You must provide either an email or phone number.");
    } catch (a) {
      if (F(a))
        return { data: { user: null, session: null }, error: a };
      throw a;
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
      const { data: i, error: a } = await H(this.fetch, "POST", `${this.url}/verify`, {
        headers: this.headers,
        body: Object.assign(Object.assign({}, e), { gotrue_meta_security: { captcha_token: o } }),
        redirectTo: r,
        xform: Ue
      });
      if (a)
        throw a;
      if (!i)
        throw new Error("An error occurred on token verification.");
      const l = i.session, c = i.user;
      return l != null && l.access_token && (await this._saveSession(l), await this._notifyAllSubscribers(e.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", l)), { data: { user: c, session: l }, error: null };
    } catch (r) {
      if (F(r))
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
      let o = null, i = null;
      return this.flowType === "pkce" && ([o, i] = await St(this.storage, this.storageKey)), await H(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in e ? { provider_id: e.providerId } : null), "domain" in e ? { domain: e.domain } : null), { redirect_to: (n = (s = e.options) === null || s === void 0 ? void 0 : s.redirectTo) !== null && n !== void 0 ? n : void 0 }), !((r = e == null ? void 0 : e.options) === null || r === void 0) && r.captchaToken ? { gotrue_meta_security: { captcha_token: e.options.captchaToken } } : null), { skip_http_redirect: !0, code_challenge: o, code_challenge_method: i }),
        headers: this.headers,
        xform: Up
      });
    } catch (o) {
      if (F(o))
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
          throw new Je();
        const { error: r } = await H(this.fetch, "GET", `${this.url}/reauthenticate`, {
          headers: this.headers,
          jwt: s.access_token
        });
        return { data: { user: null, session: null }, error: r };
      });
    } catch (e) {
      if (F(e))
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
        const { email: n, type: r, options: o } = e, { error: i } = await H(this.fetch, "POST", s, {
          headers: this.headers,
          body: {
            email: n,
            type: r,
            gotrue_meta_security: { captcha_token: o == null ? void 0 : o.captchaToken }
          },
          redirectTo: o == null ? void 0 : o.emailRedirectTo
        });
        return { data: { user: null, session: null }, error: i };
      } else if ("phone" in e) {
        const { phone: n, type: r, options: o } = e, { data: i, error: a } = await H(this.fetch, "POST", s, {
          headers: this.headers,
          body: {
            phone: n,
            type: r,
            gotrue_meta_security: { captcha_token: o == null ? void 0 : o.captchaToken }
          }
        });
        return { data: { user: null, session: null, messageId: i == null ? void 0 : i.message_id }, error: a };
      }
      throw new ws("You must provide either an email or phone number and a type");
    } catch (s) {
      if (F(s))
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
      const s = await it(this.storage, this.storageKey);
      if (this._debug("#getSession()", "session from storage", s), s !== null && (this._isValidSession(s) ? e = s : (this._debug("#getSession()", "session from storage is not valid"), await this._removeSession())), !e)
        return { data: { session: null }, error: null };
      const n = e.expires_at ? e.expires_at * 1e3 - Date.now() < hn : !1;
      if (this._debug("#__loadSession()", `session has${n ? "" : " not"} expired`, "expires_at", e.expires_at), !n) {
        if (this.userStorage) {
          const i = await it(this.userStorage, this.storageKey + "-user");
          i != null && i.user ? e.user = i.user : e.user = gn();
        }
        if (this.storage.isServer && e.user) {
          let i = this.suppressGetSessionWarning;
          e = new Proxy(e, {
            get: (l, c, u) => (!i && c === "user" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."), i = !0, this.suppressGetSessionWarning = !0), Reflect.get(l, c, u))
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
      return e ? await H(this.fetch, "GET", `${this.url}/user`, {
        headers: this.headers,
        jwt: e,
        xform: Ye
      }) : await this._useSession(async (s) => {
        var n, r, o;
        const { data: i, error: a } = s;
        if (a)
          throw a;
        return !(!((n = i.session) === null || n === void 0) && n.access_token) && !this.hasCustomAuthorizationHeader ? { data: { user: null }, error: new Je() } : await H(this.fetch, "GET", `${this.url}/user`, {
          headers: this.headers,
          jwt: (o = (r = i.session) === null || r === void 0 ? void 0 : r.access_token) !== null && o !== void 0 ? o : void 0,
          xform: Ye
        });
      });
    } catch (s) {
      if (F(s))
        return up(s) && (await this._removeSession(), await qe(this.storage, `${this.storageKey}-code-verifier`)), { data: { user: null }, error: s };
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
          throw new Je();
        const i = r.session;
        let a = null, l = null;
        this.flowType === "pkce" && e.email != null && ([a, l] = await St(this.storage, this.storageKey));
        const { data: c, error: u } = await H(this.fetch, "PUT", `${this.url}/user`, {
          headers: this.headers,
          redirectTo: s == null ? void 0 : s.emailRedirectTo,
          body: Object.assign(Object.assign({}, e), { code_challenge: a, code_challenge_method: l }),
          jwt: i.access_token,
          xform: Ye
        });
        if (u)
          throw u;
        return i.user = c.user, await this._saveSession(i), await this._notifyAllSubscribers("USER_UPDATED", i), { data: { user: i.user }, error: null };
      });
    } catch (n) {
      if (F(n))
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
        throw new Je();
      const s = Date.now() / 1e3;
      let n = s, r = !0, o = null;
      const { payload: i } = pn(e.access_token);
      if (i.exp && (n = i.exp, r = n <= s), r) {
        const { session: a, error: l } = await this._callRefreshToken(e.refresh_token);
        if (l)
          return { data: { user: null, session: null }, error: l };
        if (!a)
          return { data: { user: null, session: null }, error: null };
        o = a;
      } else {
        const { data: a, error: l } = await this._getUser(e.access_token);
        if (l)
          throw l;
        o = {
          access_token: e.access_token,
          refresh_token: e.refresh_token,
          user: a.user,
          token_type: "bearer",
          expires_in: n - s,
          expires_at: n
        }, await this._saveSession(o), await this._notifyAllSubscribers("SIGNED_IN", o);
      }
      return { data: { user: o.user, session: o }, error: null };
    } catch (s) {
      if (F(s))
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
          const { data: i, error: a } = s;
          if (a)
            throw a;
          e = (n = i.session) !== null && n !== void 0 ? n : void 0;
        }
        if (!(e != null && e.refresh_token))
          throw new Je();
        const { session: r, error: o } = await this._callRefreshToken(e.refresh_token);
        return o ? { data: { user: null, session: null }, error: o } : r ? { data: { user: r.user, session: r }, error: null } : { data: { user: null, session: null }, error: null };
      });
    } catch (s) {
      if (F(s))
        return { data: { user: null, session: null }, error: s };
      throw s;
    }
  }
  /**
   * Gets the session data from a URL string
   */
  async _getSessionFromURL(e, s) {
    try {
      if (!Oe())
        throw new ks("No browser detected.");
      if (e.error || e.error_description || e.error_code)
        throw new ks(e.error_description || "Error in URL with unspecified error_description", {
          error: e.error || "unspecified_error",
          code: e.error_code || "unspecified_code"
        });
      switch (s) {
        case "implicit":
          if (this.flowType === "pkce")
            throw new go("Not a valid PKCE flow url.");
          break;
        case "pkce":
          if (this.flowType === "implicit")
            throw new ks("Not a valid implicit grant flow url.");
          break;
        default:
      }
      if (s === "pkce") {
        if (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !e.code)
          throw new go("No code detected.");
        const { data: k, error: y } = await this._exchangeCodeForSession(e.code);
        if (y)
          throw y;
        const A = new URL(window.location.href);
        return A.searchParams.delete("code"), window.history.replaceState(window.history.state, "", A.toString()), { data: { session: k.session, redirectType: null }, error: null };
      }
      const { provider_token: n, provider_refresh_token: r, access_token: o, refresh_token: i, expires_in: a, expires_at: l, token_type: c } = e;
      if (!o || !a || !i || !c)
        throw new ks("No session defined in URL");
      const u = Math.round(Date.now() / 1e3), d = parseInt(a);
      let f = u + d;
      l && (f = parseInt(l));
      const p = f - u;
      p * 1e3 <= At && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${p}s, should have been closer to ${d}s`);
      const h = f - d;
      u - h >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", h, f, u) : u - h < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", h, f, u);
      const { data: g, error: _ } = await this._getUser(o);
      if (_)
        throw _;
      const v = {
        provider_token: n,
        provider_refresh_token: r,
        access_token: o,
        expires_in: d,
        expires_at: f,
        refresh_token: i,
        token_type: c,
        user: g.user
      };
      return window.location.hash = "", this._debug("#_getSessionFromURL()", "clearing window.location.hash"), { data: { session: v, redirectType: e.type }, error: null };
    } catch (n) {
      if (F(n))
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
    const s = await it(this.storage, `${this.storageKey}-code-verifier`);
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
      const i = (n = r.session) === null || n === void 0 ? void 0 : n.access_token;
      if (i) {
        const { error: a } = await this.admin.signOut(i, e);
        if (a && !(cp(a) && (a.status === 404 || a.status === 401 || a.status === 403)))
          return { error: a };
      }
      return e !== "others" && (await this._removeSession(), await qe(this.storage, `${this.storageKey}-code-verifier`)), { error: null };
    });
  }
  /**
   * Receive a notification every time an auth event happens.
   * @param callback A callback function to be invoked when an auth event happens.
   */
  onAuthStateChange(e) {
    const s = bp(), n = {
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
        const { data: { session: o }, error: i } = s;
        if (i)
          throw i;
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
    this.flowType === "pkce" && ([n, r] = await St(
      this.storage,
      this.storageKey,
      !0
      // isPasswordRecovery
    ));
    try {
      return await H(this.fetch, "POST", `${this.url}/recover`, {
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
      if (F(o))
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
      if (F(s))
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
        var i, a, l, c, u;
        const { data: d, error: f } = o;
        if (f)
          throw f;
        const p = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, e.provider, {
          redirectTo: (i = e.options) === null || i === void 0 ? void 0 : i.redirectTo,
          scopes: (a = e.options) === null || a === void 0 ? void 0 : a.scopes,
          queryParams: (l = e.options) === null || l === void 0 ? void 0 : l.queryParams,
          skipBrowserRedirect: !0
        });
        return await H(this.fetch, "GET", p, {
          headers: this.headers,
          jwt: (u = (c = d.session) === null || c === void 0 ? void 0 : c.access_token) !== null && u !== void 0 ? u : void 0
        });
      });
      if (r)
        throw r;
      return Oe() && !(!((s = e.options) === null || s === void 0) && s.skipBrowserRedirect) && window.location.assign(n == null ? void 0 : n.url), { data: { provider: e.provider, url: n == null ? void 0 : n.url }, error: null };
    } catch (n) {
      if (F(n))
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
        const { data: o, error: i } = s;
        if (i)
          throw i;
        return await H(this.fetch, "DELETE", `${this.url}/user/identities/${e.identity_id}`, {
          headers: this.headers,
          jwt: (r = (n = o.session) === null || n === void 0 ? void 0 : n.access_token) !== null && r !== void 0 ? r : void 0
        });
      });
    } catch (s) {
      if (F(s))
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
      return await Ep(async (r) => (r > 0 && await Sp(200 * Math.pow(2, r - 1)), this._debug(s, "refreshing attempt", r), await H(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
        body: { refresh_token: e },
        headers: this.headers,
        xform: Ue
      })), (r, o) => {
        const i = 200 * Math.pow(2, r);
        return o && fn(o) && // retryable only if the request can be sent before the backoff overflows the tick duration
        Date.now() + i - n < At;
      });
    } catch (n) {
      if (this._debug(s, "error", n), F(n))
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
    return this._debug("#_handleProviderSignIn()", "provider", e, "options", s, "url", n), Oe() && !s.skipBrowserRedirect && window.location.assign(n), { data: { provider: e, url: n }, error: null };
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
      const r = await it(this.storage, this.storageKey);
      if (r && this.userStorage) {
        let i = await it(this.userStorage, this.storageKey + "-user");
        !this.storage.isServer && Object.is(this.storage, this.userStorage) && !i && (i = { user: r.user }, await Pt(this.userStorage, this.storageKey + "-user", i)), r.user = (e = i == null ? void 0 : i.user) !== null && e !== void 0 ? e : gn();
      } else if (r && !r.user && !r.user) {
        const i = await it(this.storage, this.storageKey + "-user");
        i && (i != null && i.user) ? (r.user = i.user, await qe(this.storage, this.storageKey + "-user"), await Pt(this.storage, this.storageKey, r)) : r.user = gn();
      }
      if (this._debug(n, "session from storage", r), !this._isValidSession(r)) {
        this._debug(n, "session is not valid"), r !== null && await this._removeSession();
        return;
      }
      const o = ((s = r.expires_at) !== null && s !== void 0 ? s : 1 / 0) * 1e3 - Date.now() < hn;
      if (this._debug(n, `session has${o ? "" : " not"} expired with margin of ${hn}s`), o) {
        if (this.autoRefreshToken && r.refresh_token) {
          const { error: i } = await this._callRefreshToken(r.refresh_token);
          i && (console.error(i), fn(i) || (this._debug(n, "refresh failed with a non-retryable error, removing the session", i), await this._removeSession()));
        }
      } else if (r.user && r.user.__isUserNotAvailableProxy === !0)
        try {
          const { data: i, error: a } = await this._getUser(r.access_token);
          !a && (i != null && i.user) ? (r.user = i.user, await this._saveSession(r), await this._notifyAllSubscribers("SIGNED_IN", r)) : this._debug(n, "could not get user data, skipping SIGNED_IN notification");
        } catch (i) {
          console.error("Error getting user data:", i), this._debug(n, "error getting user data, skipping SIGNED_IN notification", i);
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
      throw new Je();
    if (this.refreshingDeferred)
      return this.refreshingDeferred.promise;
    const r = `#_callRefreshToken(${e.substring(0, 5)}...)`;
    this._debug(r, "begin");
    try {
      this.refreshingDeferred = new Js();
      const { data: o, error: i } = await this._refreshAccessToken(e);
      if (i)
        throw i;
      if (!o.session)
        throw new Je();
      await this._saveSession(o.session), await this._notifyAllSubscribers("TOKEN_REFRESHED", o.session);
      const a = { session: o.session, error: null };
      return this.refreshingDeferred.resolve(a), a;
    } catch (o) {
      if (this._debug(r, "error", o), F(o)) {
        const i = { session: null, error: o };
        return fn(o) || await this._removeSession(), (s = this.refreshingDeferred) === null || s === void 0 || s.resolve(i), i;
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
      const o = [], i = Array.from(this.stateChangeEmitters.values()).map(async (a) => {
        try {
          await a.callback(e, s);
        } catch (l) {
          o.push(l);
        }
      });
      if (await Promise.all(i), o.length > 0) {
        for (let a = 0; a < o.length; a += 1)
          console.error(o[a]);
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
      !n && s.user && await Pt(this.userStorage, this.storageKey + "-user", {
        user: s.user
      });
      const r = Object.assign({}, s);
      delete r.user;
      const o = bo(r);
      await Pt(this.storage, this.storageKey, o);
    } else {
      const r = bo(s);
      await Pt(this.storage, this.storageKey, r);
    }
  }
  async _removeSession() {
    this._debug("#_removeSession()"), await qe(this.storage, this.storageKey), await qe(this.storage, this.storageKey + "-code-verifier"), await qe(this.storage, this.storageKey + "-user"), this.userStorage && await qe(this.userStorage, this.storageKey + "-user"), await this._notifyAllSubscribers("SIGNED_OUT", null);
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
      e && Oe() && (window != null && window.removeEventListener) && window.removeEventListener("visibilitychange", e);
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
    const e = setInterval(() => this._autoRefreshTokenTick(), At);
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
              const r = Math.floor((n.expires_at * 1e3 - e) / At);
              this._debug("#_autoRefreshTokenTick()", `access token expires in ${r} ticks, a tick lasts ${At}ms, refresh threshold is ${xn} ticks`), r <= xn && await this._callRefreshToken(n.refresh_token);
            });
          } catch (s) {
            console.error("Auto refresh tick failed with error. This is likely a transient error.", s);
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (e) {
      if (e.isAcquireTimeout || e instanceof Xi)
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
    if (this._debug("#_handleVisibilityChange()"), !Oe() || !(window != null && window.addEventListener))
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
      const [o, i] = await St(this.storage, this.storageKey), a = new URLSearchParams({
        code_challenge: `${encodeURIComponent(o)}`,
        code_challenge_method: `${encodeURIComponent(i)}`
      });
      r.push(a.toString());
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
        return o ? { data: null, error: o } : await H(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
          headers: this.headers,
          jwt: (n = r == null ? void 0 : r.session) === null || n === void 0 ? void 0 : n.access_token
        });
      });
    } catch (s) {
      if (F(s))
        return { data: null, error: s };
      throw s;
    }
  }
  async _enroll(e) {
    try {
      return await this._useSession(async (s) => {
        var n, r;
        const { data: o, error: i } = s;
        if (i)
          return { data: null, error: i };
        const a = Object.assign({ friendly_name: e.friendlyName, factor_type: e.factorType }, e.factorType === "phone" ? { phone: e.phone } : { issuer: e.issuer }), { data: l, error: c } = await H(this.fetch, "POST", `${this.url}/factors`, {
          body: a,
          headers: this.headers,
          jwt: (n = o == null ? void 0 : o.session) === null || n === void 0 ? void 0 : n.access_token
        });
        return c ? { data: null, error: c } : (e.factorType === "totp" && (!((r = l == null ? void 0 : l.totp) === null || r === void 0) && r.qr_code) && (l.totp.qr_code = `data:image/svg+xml;utf-8,${l.totp.qr_code}`), { data: l, error: null });
      });
    } catch (s) {
      if (F(s))
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
          const { data: i, error: a } = await H(this.fetch, "POST", `${this.url}/factors/${e.factorId}/verify`, {
            body: { code: e.code, challenge_id: e.challengeId },
            headers: this.headers,
            jwt: (n = r == null ? void 0 : r.session) === null || n === void 0 ? void 0 : n.access_token
          });
          return a ? { data: null, error: a } : (await this._saveSession(Object.assign({ expires_at: Math.round(Date.now() / 1e3) + i.expires_in }, i)), await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", i), { data: i, error: a });
        });
      } catch (s) {
        if (F(s))
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
          return o ? { data: null, error: o } : await H(this.fetch, "POST", `${this.url}/factors/${e.factorId}/challenge`, {
            body: { channel: e.channel },
            headers: this.headers,
            jwt: (n = r == null ? void 0 : r.session) === null || n === void 0 ? void 0 : n.access_token
          });
        });
      } catch (s) {
        if (F(s))
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
    const n = (e == null ? void 0 : e.factors) || [], r = n.filter((i) => i.factor_type === "totp" && i.status === "verified"), o = n.filter((i) => i.factor_type === "phone" && i.status === "verified");
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
      const { payload: i } = pn(r.access_token);
      let a = null;
      i.aal && (a = i.aal);
      let l = a;
      ((n = (s = r.user.factors) === null || s === void 0 ? void 0 : s.filter((d) => d.status === "verified")) !== null && n !== void 0 ? n : []).length > 0 && (l = "aal2");
      const u = i.amr || [];
      return { data: { currentLevel: a, nextLevel: l, currentAuthenticationMethods: u }, error: null };
    }));
  }
  async fetchJwk(e, s = { keys: [] }) {
    let n = s.keys.find((a) => a.kid === e);
    if (n)
      return n;
    const r = Date.now();
    if (n = this.jwks.keys.find((a) => a.kid === e), n && this.jwks_cached_at + ap > r)
      return n;
    const { data: o, error: i } = await H(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
      headers: this.headers
    });
    if (i)
      throw i;
    return !o.keys || o.keys.length === 0 || (this.jwks = o, this.jwks_cached_at = r, n = o.keys.find((a) => a.kid === e), !n) ? null : n;
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
      const { header: r, payload: o, signature: i, raw: { header: a, payload: l } } = pn(n);
      s != null && s.allowExpired || $p(o.exp);
      const c = !r.alg || r.alg.startsWith("HS") || !r.kid || !("crypto" in globalThis && "subtle" in globalThis.crypto) ? null : await this.fetchJwk(r.kid, s != null && s.keys ? { keys: s.keys } : s == null ? void 0 : s.jwks);
      if (!c) {
        const { error: p } = await this.getUser(n);
        if (p)
          throw p;
        return {
          data: {
            claims: o,
            header: r,
            signature: i
          },
          error: null
        };
      }
      const u = xp(r.alg), d = await crypto.subtle.importKey("jwk", c, u, !0, [
        "verify"
      ]);
      if (!await crypto.subtle.verify(u, d, i, mp(`${a}.${l}`)))
        throw new Rn("Invalid JWT signature");
      return {
        data: {
          claims: o,
          header: r,
          signature: i
        },
        error: null
      };
    } catch (n) {
      if (F(n))
        return { data: null, error: n };
      throw n;
    }
  }
}
rs.nextInstanceID = 0;
const Gp = rs;
class Jp extends Gp {
  constructor(e) {
    super(e);
  }
}
var Yp = globalThis && globalThis.__awaiter || function(t, e, s, n) {
  function r(o) {
    return o instanceof s ? o : new s(function(i) {
      i(o);
    });
  }
  return new (s || (s = Promise))(function(o, i) {
    function a(u) {
      try {
        c(n.next(u));
      } catch (d) {
        i(d);
      }
    }
    function l(u) {
      try {
        c(n.throw(u));
      } catch (d) {
        i(d);
      }
    }
    function c(u) {
      u.done ? o(u.value) : r(u.value).then(a, l);
    }
    c((n = n.apply(t, e || [])).next());
  });
};
class Xp {
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
    var r, o, i;
    if (this.supabaseUrl = e, this.supabaseKey = s, !e)
      throw new Error("supabaseUrl is required.");
    if (!s)
      throw new Error("supabaseKey is required.");
    const a = tp(e), l = new URL(a);
    this.realtimeUrl = new URL("realtime/v1", l), this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws"), this.authUrl = new URL("auth/v1", l), this.storageUrl = new URL("storage/v1", l), this.functionsUrl = new URL("functions/v1", l);
    const c = `sb-${l.hostname.split(".")[0]}-auth-token`, u = {
      db: Kf,
      realtime: Jf,
      auth: Object.assign(Object.assign({}, Gf), { storageKey: c }),
      global: qf
    }, d = sp(n ?? {}, u);
    this.storageKey = (r = d.auth.storageKey) !== null && r !== void 0 ? r : "", this.headers = (o = d.global.headers) !== null && o !== void 0 ? o : {}, d.accessToken ? (this.accessToken = d.accessToken, this.auth = new Proxy({}, {
      get: (f, p) => {
        throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(p)} is not possible`);
      }
    })) : this.auth = this._initSupabaseAuthClient((i = d.auth) !== null && i !== void 0 ? i : {}, this.headers, d.global.fetch), this.fetch = Qf(s, this._getAccessToken.bind(this), d.global.fetch), this.realtime = this._initRealtimeClient(Object.assign({ headers: this.headers, accessToken: this._getAccessToken.bind(this) }, d.realtime)), this.rest = new ff(new URL("rest/v1", l).href, {
      headers: this.headers,
      schema: d.db.schema,
      fetch: this.fetch
    }), this.storage = new Vf(this.storageUrl.href, this.headers, this.fetch, n == null ? void 0 : n.storage), d.accessToken || this._listenForAuthEvents();
  }
  /**
   * Supabase Functions allows you to deploy and invoke edge functions.
   */
  get functions() {
    return new Wh(this.functionsUrl.href, {
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
    return Yp(this, void 0, void 0, function* () {
      if (this.accessToken)
        return yield this.accessToken();
      const { data: n } = yield this.auth.getSession();
      return (s = (e = n.session) === null || e === void 0 ? void 0 : e.access_token) !== null && s !== void 0 ? s : this.supabaseKey;
    });
  }
  _initSupabaseAuthClient({ autoRefreshToken: e, persistSession: s, detectSessionInUrl: n, storage: r, userStorage: o, storageKey: i, flowType: a, lock: l, debug: c }, u, d) {
    const f = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`
    };
    return new Jp({
      url: this.authUrl.href,
      headers: Object.assign(Object.assign({}, f), u),
      storageKey: i,
      autoRefreshToken: e,
      persistSession: s,
      detectSessionInUrl: n,
      storage: r,
      userStorage: o,
      flowType: a,
      lock: l,
      debug: c,
      fetch: d,
      // auth checks if there is a custom authorizaiton header using this flag
      // so it knows whether to return an error when getUser is called with no session
      hasCustomAuthorizationHeader: "Authorization" in this.headers
    });
  }
  _initRealtimeClient(e) {
    return new Pf(this.realtimeUrl.href, Object.assign(Object.assign({}, e), { params: Object.assign({ apikey: this.supabaseKey }, e == null ? void 0 : e.params) }));
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
const Zp = (t, e, s) => new Xp(t, e, s);
function Qp() {
  if (typeof window < "u" || typeof process > "u")
    return !1;
  const t = process.version;
  if (t == null)
    return !1;
  const e = t.match(/^v(\d+)\./);
  return e ? parseInt(e[1], 10) <= 18 : !1;
}
Qp() && console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");
const tt = "aiworkspace.pro";
function Ys(t) {
  return t === "localhost" || /^\d+\.\d+\.\d+\.\d+$/.test(t);
}
function Zi(t) {
  return t === tt || t.endsWith(`.${tt}`);
}
function Rs(t) {
  return document.cookie.split(";").map((n) => n.trim()).filter((n) => t.some((r) => n.startsWith(r + "=")));
}
function dt(t, e, s = 60 * 60 * 24 * 365) {
  const n = location.hostname;
  if (Ys(n)) {
    document.cookie = `${t}=${encodeURIComponent(e)}; Path=/; Max-Age=${s}; SameSite=Lax`, console.log("[auth][cookie][set][local]", { host: n, name: t, valuePreview: e.slice(0, 20) + "..." }), console.log("[auth][cookie][after]", Rs([t]));
    return;
  }
  document.cookie = `${t}=${encodeURIComponent(e)}; Domain=.${tt}; Path=/; Max-Age=${s}; SameSite=Lax; Secure`, document.cookie = `${t}=; Path=/; Max-Age=0; SameSite=Lax`, console.log("[auth][cookie][set][apex]", { host: n, apex: tt, name: t, valuePreview: e.slice(0, 20) + "..." }), console.log("[auth][cookie][after]", Rs([t]));
}
function mt(t) {
  const e = new RegExp("(?:^|; )" + t.replace(/[$()*+.[\]?^{}|\\/-]/g, "\\$&") + "=([^;]*)"), s = document.cookie.match(e);
  return s ? decodeURIComponent(s[1]) : null;
}
function To(t) {
  const e = location.hostname;
  if (Ys(e)) {
    document.cookie = `${t}=; Path=/; Max-Age=0; SameSite=Lax`, console.log("[auth][cookie][clear][local]", { host: e, name: t });
    return;
  }
  document.cookie = `${t}=; Domain=.${tt}; Path=/; Max-Age=0; SameSite=Lax; Secure`, document.cookie = `${t}=; Path=/; Max-Age=0; SameSite=Lax`, console.log("[auth][cookie][clear][apex]", { host: e, apex: tt, name: t }), console.log("[auth][cookie][after]", Rs([t]));
}
function Qi(t) {
  const e = location.hostname;
  if (Ys(e)) {
    console.log("[auth][cookie][promote] skip (local host)", e);
    return;
  }
  if (!Zi(e)) {
    console.log("[auth][cookie][promote] skip (not under apex)", { host: e, apex: tt });
    return;
  }
  console.log("[auth][cookie][promote] start", { host: e, apex: tt, names: t }), t.forEach((s) => {
    const n = mt(s);
    n ? dt(s, n, 60 * 60 * 24 * 365) : console.log("[auth][cookie][promote] missing", s);
  }), console.log("[auth][cookie][promote] done", Rs(t));
}
function Zg() {
  return `${window.location.origin}/callback`;
}
function Qg() {
  try {
    const t = new URLSearchParams(location.search), e = ["redirect", "redirect_to", "returnTo", "next"].find((n) => t.get(n));
    let s = e ? t.get(e) : "";
    if (s || (s = sessionStorage.getItem("post-login-redirect") || localStorage.getItem("post-login-redirect") || ""), s || (s = { VITE_SUPABASE_URL: "https://oqdnbpmmgntqtigstaow.supabase.co", VITE_SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xZG5icG1tZ250cXRpZ3N0YW93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0NTk2NDYsImV4cCI6MjA1MDAzNTY0Nn0.rn0nRY9xLgLt-ajiSPeG0PcdS9V-549C1yeqhcxxG40", VITE_APEX_DOMAIN: "aiworkspace.pro", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_DEFAULT_POST_LOGIN_URL || "/"), s.startsWith("http"))
      try {
        const n = new URL(s);
        return Zi(n.hostname) || Ys(n.hostname) ? s : "/";
      } catch {
        return "/";
      }
    return s.startsWith("/") || (s = "/" + s), s;
  } catch {
    return "/";
  }
}
const ze = "sb-access-token", Ve = "sb-refresh-token", ea = "sb-access-token", ta = "sb-refresh-token";
function Ls() {
  try {
    const t = mt(ze), e = mt(Ve);
    t && localStorage.setItem(ea, t), e && localStorage.setItem(ta, e), console.log("[auth][cookie->ls] sync", {
      hasAccess: !!t,
      hasRefresh: !!e
    });
  } catch (t) {
    console.log("[auth][cookie->ls] error", t);
  }
}
function eg() {
  try {
    localStorage.removeItem(ea), localStorage.removeItem(ta), console.log("[auth][cookie->ls] cleared localStorage");
  } catch (t) {
    console.log("[auth][cookie->ls] clear error", t);
  }
}
async function ev() {
  try {
    Qi([ze, Ve]);
    const t = mt(ze), e = mt(Ve);
    if (t && e) {
      const { data: { session: s } } = await we.auth.getSession();
      if (!s) {
        const { data: n, error: r } = await we.auth.setSession({ access_token: t, refresh_token: e });
        r ? console.log("[auth][restore] error", r) : console.log("[auth][restore] done", !!n.session);
      }
    } else
      console.log("[auth][restore] no cookies present");
    Ls();
  } catch (t) {
    console.log("[auth][restore] exception", t);
  }
}
function tg() {
  console.log("[auth][listener] Setting up auth state listener..."), we.auth.onAuthStateChange(async (t, e) => {
    switch (console.log("[auth][listener] Auth state changed:", t, !!e), t) {
      case "TOKEN_REFRESHED":
        console.log("[auth][listener] Token refreshed successfully"), e && (dt(ze, e.access_token, 60 * 60 * 24 * 365), dt(Ve, e.refresh_token, 60 * 60 * 24 * 365), Ls());
        break;
      case "SIGNED_IN":
        console.log("[auth][listener] User signed in"), e && (dt(ze, e.access_token, 60 * 60 * 24 * 365), dt(Ve, e.refresh_token, 60 * 60 * 24 * 365), Ls());
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
async function Co() {
  try {
    const { data: { session: t } } = await we.auth.getSession();
    if (t && t.user)
      return console.log("[auth][restore] Active session found"), { success: !0, session: t };
    const e = mt(ze), s = mt(Ve);
    if (e && s) {
      console.log("[auth][restore] Attempting to restore session from cookies...");
      const { data: n, error: r } = await we.auth.setSession({
        access_token: e,
        refresh_token: s
      });
      if (r)
        return console.log("[auth][restore] Failed to restore session:", r.message), { success: !1, error: r };
      if (n.session)
        return console.log("[auth][restore] Session restored successfully"), dt(ze, n.session.access_token, 60 * 60 * 24 * 365), dt(Ve, n.session.refresh_token, 60 * 60 * 24 * 365), Ls(), { success: !0, session: n.session };
    }
    return console.log("[auth][restore] No valid session or cookies found"), { success: !1, error: "No valid session or cookies" };
  } catch (t) {
    return console.log("[auth][restore] Exception during session restoration:", t), { success: !1, error: t };
  }
}
if (typeof window < "u")
  try {
    Qi([ze, Ve]);
  } catch (t) {
    console.log("[auth][cookie][promote] error (pre-init)", t);
  }
const ur = "https://oqdnbpmmgntqtigstaow.supabase.co", dr = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xZG5icG1tZ250cXRpZ3N0YW93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0NTk2NDYsImV4cCI6MjA1MDAzNTY0Nn0.rn0nRY9xLgLt-ajiSPeG0PcdS9V-549C1yeqhcxxG40", we = Zp(ur, dr, {
  auth: {
    // Enable automatic token refresh
    autoRefreshToken: !0,
    // Persist session in localStorage
    persistSession: !0,
    // Detect session in URL (for OAuth callbacks)
    detectSessionInUrl: !0
  }
});
typeof window < "u" && tg();
console.log("Supabase Configuration:", {
  url: ur,
  hasKey: !!dr,
  autoRefreshToken: !0,
  persistSession: !0
});
console.log("URL:", ur.replace(/https:\/\/(.+)\.supabase\.co/, "https://*****.supabase.co"));
console.log("Key configured:", !dr.includes("your-anon-key"));
console.log("Environment mode:", "production");
function sg() {
  const t = R({
    user: null,
    isAuthenticated: !1,
    isLoading: !0
  }), e = R(null), s = C(() => t.value.isAuthenticated), n = C(() => t.value.user), r = C(() => t.value.isLoading), o = async () => {
    var u, d, f, p, h, g, _, v, k, y, A, L, j, P, q;
    try {
      const { data: { session: K } } = await we.auth.getSession();
      if (K && K.user) {
        const b = K.user, O = {
          id: b.id,
          name: ((u = b.user_metadata) == null ? void 0 : u.name) || ((d = b.user_metadata) == null ? void 0 : d.user_name) || ((f = b.user_metadata) == null ? void 0 : f.full_name) || ((p = b.email) == null ? void 0 : p.split("@")[0]) || "User",
          email: b.email,
          avatar_url: ((h = b.user_metadata) == null ? void 0 : h.avatar_url) || null,
          user_metadata: b.user_metadata
        };
        return t.value = {
          user: O,
          isAuthenticated: !0,
          isLoading: !1
        }, e.value = {
          user: O,
          access_token: K.access_token,
          refresh_token: K.refresh_token
        }, { success: !0, session: e.value };
      }
      console.log("[auth][enhanced] No active session, attempting to restore from cookies...");
      const S = await Co();
      if (S.success && S.session) {
        console.log("[auth][enhanced] Session restored successfully");
        const b = S.session.user, O = {
          id: b.id,
          name: ((g = b.user_metadata) == null ? void 0 : g.name) || ((_ = b.user_metadata) == null ? void 0 : _.user_name) || ((v = b.user_metadata) == null ? void 0 : v.full_name) || ((k = b.email) == null ? void 0 : k.split("@")[0]) || "User",
          email: b.email,
          avatar_url: ((y = b.user_metadata) == null ? void 0 : y.avatar_url) || null,
          user_metadata: b.user_metadata
        };
        return t.value = {
          user: O,
          isAuthenticated: !0,
          isLoading: !1
        }, e.value = S.session, { success: !0, session: e.value };
      } else
        console.log("[auth][enhanced] Failed to restore session:", S.error);
    } catch (K) {
      console.error("Error getting Supabase session:", K);
      try {
        const S = await Co();
        if (S.success && S.session) {
          console.log("[auth][enhanced] Session restored after error");
          const b = S.session.user, O = {
            id: b.id,
            name: ((A = b.user_metadata) == null ? void 0 : A.name) || ((L = b.user_metadata) == null ? void 0 : L.user_name) || ((j = b.user_metadata) == null ? void 0 : j.full_name) || ((P = b.email) == null ? void 0 : P.split("@")[0]) || "User",
            email: b.email,
            avatar_url: ((q = b.user_metadata) == null ? void 0 : q.avatar_url) || null,
            user_metadata: b.user_metadata
          };
          return t.value = {
            user: O,
            isAuthenticated: !0,
            isLoading: !1
          }, e.value = S.session, { success: !0, session: e.value };
        }
      } catch (S) {
        console.error("Error restoring session:", S);
      }
    }
    return t.value = {
      user: null,
      isAuthenticated: !1,
      isLoading: !1
    }, e.value = null, { success: !1, error: "No valid session found" };
  }, i = async () => {
    try {
      await we.auth.signOut(), To(ze), To(Ve), eg(), t.value = {
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
  }, a = async (u, d) => {
    var f, p, h, g, _;
    try {
      t.value.isLoading = !0;
      const { data: v, error: k } = await we.auth.signInWithPassword({
        email: u,
        password: d
      });
      if (k)
        throw k;
      if (v.session) {
        const y = v.session.user, A = {
          id: y.id,
          name: ((f = y.user_metadata) == null ? void 0 : f.name) || ((p = y.user_metadata) == null ? void 0 : p.user_name) || ((h = y.user_metadata) == null ? void 0 : h.full_name) || ((g = y.email) == null ? void 0 : g.split("@")[0]) || "User",
          email: y.email,
          avatar_url: ((_ = y.user_metadata) == null ? void 0 : _.avatar_url) || null,
          user_metadata: y.user_metadata
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
    var p, h, g, _, v;
    try {
      t.value.isLoading = !0;
      const { data: k, error: y } = await we.auth.signUp({
        email: u,
        password: d,
        options: {
          data: f
        }
      });
      if (y)
        throw y;
      if (k.session) {
        const A = k.session.user, L = {
          id: A.id,
          name: ((p = A.user_metadata) == null ? void 0 : p.name) || ((h = A.user_metadata) == null ? void 0 : h.user_name) || ((g = A.user_metadata) == null ? void 0 : g.full_name) || ((_ = A.email) == null ? void 0 : _.split("@")[0]) || "User",
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
  return Te(() => {
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
    logout: i,
    signIn: a,
    signUp: l,
    checkAuth: c
  };
}
/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Vt;
const Ms = (t) => Vt = t, ng = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function yt(t) {
  return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function";
}
var Zt;
(function(t) {
  t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function";
})(Zt || (Zt = {}));
const Wt = typeof window < "u";
function sa(t, e) {
  for (const s in e) {
    const n = e[s];
    if (!(s in t))
      continue;
    const r = t[s];
    yt(r) && yt(n) && !ft(n) && !zn(n) ? t[s] = sa(r, n) : t[s] = n;
  }
  return t;
}
const na = () => {
};
function Oo(t, e, s, n = na) {
  t.push(e);
  const r = () => {
    const o = t.indexOf(e);
    o > -1 && (t.splice(o, 1), n());
  };
  return !s && jo() && Un(r), r;
}
function Ot(t, ...e) {
  t.slice().forEach((s) => {
    s(...e);
  });
}
const rg = (t) => t(), Io = Symbol(), mn = Symbol();
function Ln(t, e) {
  t instanceof Map && e instanceof Map ? e.forEach((s, n) => t.set(n, s)) : t instanceof Set && e instanceof Set && e.forEach(t.add, t);
  for (const s in e) {
    if (!e.hasOwnProperty(s))
      continue;
    const n = e[s], r = t[s];
    yt(r) && yt(n) && t.hasOwnProperty(s) && !ft(n) && !zn(n) ? t[s] = Ln(r, n) : t[s] = n;
  }
  return t;
}
const og = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function ig(t) {
  return !yt(t) || !t.hasOwnProperty(og);
}
const { assign: _e } = Object;
function Ao(t) {
  return !!(ft(t) && t.effect);
}
function Po(t, e, s, n) {
  const { state: r, actions: o, getters: i } = e, a = s.state.value[t];
  let l;
  function c() {
    !a && (process.env.NODE_ENV === "production" || !n) && (s.state.value[t] = r ? r() : {});
    const u = process.env.NODE_ENV !== "production" && n ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      yn(R(r ? r() : {}).value)
    ) : yn(s.state.value[t]);
    return _e(u, o, Object.keys(i || {}).reduce((d, f) => (process.env.NODE_ENV !== "production" && f in u && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${f}" in store "${t}".`), d[f] = Xe(C(() => {
      Ms(s);
      const p = s._s.get(t);
      return i[f].call(p, p);
    })), d), {}));
  }
  return l = Mn(t, c, e, s, n, !0), l;
}
function Mn(t, e, s = {}, n, r, o) {
  let i;
  const a = _e({ actions: {} }, s);
  if (process.env.NODE_ENV !== "production" && !n._e.active)
    throw new Error("Pinia destroyed");
  const l = { deep: !0 };
  process.env.NODE_ENV !== "production" && !xc && (l.onTrigger = (S) => {
    c ? p = S : c == !1 && !P._hotUpdating && (Array.isArray(p) ? p.push(S) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let c, u, d = [], f = [], p;
  const h = n.state.value[t];
  !o && !h && (process.env.NODE_ENV === "production" || !r) && (n.state.value[t] = {});
  const g = R({});
  let _;
  function v(S) {
    let b;
    c = u = !1, process.env.NODE_ENV !== "production" && (p = []), typeof S == "function" ? (S(n.state.value[t]), b = {
      type: Zt.patchFunction,
      storeId: t,
      events: p
    }) : (Ln(n.state.value[t], S), b = {
      type: Zt.patchObject,
      payload: S,
      storeId: t,
      events: p
    });
    const O = _ = Symbol();
    oe().then(() => {
      _ === O && (c = !0);
    }), u = !0, Ot(d, b, n.state.value[t]);
  }
  const k = o ? function() {
    const { state: b } = s, O = b ? b() : {};
    this.$patch((Q) => {
      _e(Q, O);
    });
  } : (
    /* istanbul ignore next */
    process.env.NODE_ENV !== "production" ? () => {
      throw new Error(`🍍: Store "${t}" is built using the setup syntax and does not implement $reset().`);
    } : na
  );
  function y() {
    i.stop(), d = [], f = [], n._s.delete(t);
  }
  const A = (S, b = "") => {
    if (Io in S)
      return S[mn] = b, S;
    const O = function() {
      Ms(n);
      const Q = Array.from(arguments), he = [], x = [];
      function w(D) {
        he.push(D);
      }
      function I(D) {
        x.push(D);
      }
      Ot(f, {
        args: Q,
        name: O[mn],
        store: P,
        after: w,
        onError: I
      });
      let N;
      try {
        N = S.apply(this && this.$id === t ? this : P, Q);
      } catch (D) {
        throw Ot(x, D), D;
      }
      return N instanceof Promise ? N.then((D) => (Ot(he, D), D)).catch((D) => (Ot(x, D), Promise.reject(D))) : (Ot(he, N), N);
    };
    return O[Io] = !0, O[mn] = b, O;
  }, L = /* @__PURE__ */ Xe({
    actions: {},
    getters: {},
    state: [],
    hotState: g
  }), j = {
    _p: n,
    // _s: scope,
    $id: t,
    $onAction: Oo.bind(null, f),
    $patch: v,
    $reset: k,
    $subscribe(S, b = {}) {
      const O = Oo(d, S, b.detached, () => Q()), Q = i.run(() => se(() => n.state.value[t], (he) => {
        (b.flush === "sync" ? u : c) && S({
          storeId: t,
          type: Zt.direct,
          events: p
        }, he);
      }, _e({}, l, b)));
      return O;
    },
    $dispose: y
  }, P = Fn(process.env.NODE_ENV !== "production" || process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && Wt ? _e(
    {
      _hmrPayload: L,
      _customProperties: Xe(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    j
    // must be added later
    // setupStore
  ) : j);
  n._s.set(t, P);
  const K = (n._a && n._a.runWithContext || rg)(() => n._e.run(() => (i = ya()).run(() => e({ action: A }))));
  for (const S in K) {
    const b = K[S];
    if (ft(b) && !Ao(b) || zn(b))
      process.env.NODE_ENV !== "production" && r ? ds(g.value, S, ht(K, S)) : o || (h && ig(b) && (ft(b) ? b.value = h[S] : Ln(b, h[S])), n.state.value[t][S] = b), process.env.NODE_ENV !== "production" && L.state.push(S);
    else if (typeof b == "function") {
      const O = process.env.NODE_ENV !== "production" && r ? b : A(b, S);
      K[S] = O, process.env.NODE_ENV !== "production" && (L.actions[S] = b), a.actions[S] = b;
    } else
      process.env.NODE_ENV !== "production" && Ao(b) && (L.getters[S] = o ? (
        // @ts-expect-error
        s.getters[S]
      ) : b, Wt && (K._getters || // @ts-expect-error: same
      (K._getters = Xe([]))).push(S));
  }
  if (_e(P, K), _e(_a(P), K), Object.defineProperty(P, "$state", {
    get: () => process.env.NODE_ENV !== "production" && r ? g.value : n.state.value[t],
    set: (S) => {
      if (process.env.NODE_ENV !== "production" && r)
        throw new Error("cannot set hotState");
      v((b) => {
        _e(b, S);
      });
    }
  }), process.env.NODE_ENV !== "production" && (P._hotUpdate = Xe((S) => {
    P._hotUpdating = !0, S._hmrPayload.state.forEach((b) => {
      if (b in P.$state) {
        const O = S.$state[b], Q = P.$state[b];
        typeof O == "object" && yt(O) && yt(Q) ? sa(O, Q) : S.$state[b] = Q;
      }
      ds(P, b, ht(S.$state, b));
    }), Object.keys(P.$state).forEach((b) => {
      b in S.$state || sn(P, b);
    }), c = !1, u = !1, n.state.value[t] = ht(S._hmrPayload, "hotState"), u = !0, oe().then(() => {
      c = !0;
    });
    for (const b in S._hmrPayload.actions) {
      const O = S[b];
      ds(P, b, A(O, b));
    }
    for (const b in S._hmrPayload.getters) {
      const O = S._hmrPayload.getters[b], Q = o ? (
        // special handling of options api
        C(() => (Ms(n), O.call(P, P)))
      ) : O;
      ds(P, b, Q);
    }
    Object.keys(P._hmrPayload.getters).forEach((b) => {
      b in S._hmrPayload.getters || sn(P, b);
    }), Object.keys(P._hmrPayload.actions).forEach((b) => {
      b in S._hmrPayload.actions || sn(P, b);
    }), P._hmrPayload = S._hmrPayload, P._getters = S._getters, P._hotUpdating = !1;
  })), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && Wt) {
    const S = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((b) => {
      Object.defineProperty(P, b, _e({ value: P[b] }, S));
    });
  }
  return n._p.forEach((S) => {
    if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && Wt) {
      const b = i.run(() => S({
        store: P,
        app: n._a,
        pinia: n,
        options: a
      }));
      Object.keys(b || {}).forEach((O) => P._customProperties.add(O)), _e(P, b);
    } else
      _e(P, i.run(() => S({
        store: P,
        app: n._a,
        pinia: n,
        options: a
      })));
  }), process.env.NODE_ENV !== "production" && P.$state && typeof P.$state == "object" && typeof P.$state.constructor == "function" && !P.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${P.$id}".`), h && o && s.hydrate && s.hydrate(P.$state, h), c = !0, u = !0, P;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ag(t, e, s) {
  let n, r;
  const o = typeof e == "function";
  if (typeof t == "string")
    n = t, r = o ? s : e;
  else if (r = t, n = t.id, process.env.NODE_ENV !== "production" && typeof n != "string")
    throw new Error('[🍍]: "defineStore()" must be passed a store id as its first argument.');
  function i(a, l) {
    const c = ma();
    if (a = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && Vt && Vt._testing ? null : a) || (c ? de(ng, null) : null), a && Ms(a), process.env.NODE_ENV !== "production" && !Vt)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    a = Vt, a._s.has(n) || (o ? Mn(n, e, r, a) : Po(n, r, a), process.env.NODE_ENV !== "production" && (i._pinia = a));
    const u = a._s.get(n);
    if (process.env.NODE_ENV !== "production" && l) {
      const d = "__hot:" + n, f = o ? Mn(d, e, r, a, !0) : Po(d, _e({}, r), a, !0);
      l._hotUpdate(f), delete a.state.value[d], a._s.delete(d);
    }
    if (process.env.NODE_ENV !== "production" && Wt) {
      const d = Se();
      if (d && d.proxy && // avoid adding stores that are just built for hot module replacement
      !l) {
        const f = d.proxy, p = "_pStores" in f ? f._pStores : f._pStores = {};
        p[n] = u;
      }
    }
    return u;
  }
  return i.$id = n, i;
}
const lg = /* @__PURE__ */ ag("workspace", () => {
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
        const { data: { user: u } } = await we.auth.getUser();
        if (!u)
          return [];
        let d = we.from("workspaces").select(`
          id, title, description, parent_workspace_id, created_by, archived, created_at,
          workspace_access!inner ( access_type, shared_with_user_id ),
          workspace_activities!left ( updated_at )
        `).eq("workspace_access.shared_with_user_id", u.id);
        c || (d = d.eq("archived", !1));
        const { data: f, error: p } = await d;
        if (p)
          throw p;
        const h = /* @__PURE__ */ new Map();
        (f || []).forEach((y) => {
          (y.workspace_access || []).forEach((A) => {
            A.shared_with_user_id === u.id && h.set(y.id, A);
          });
        });
        const g = [...new Set(
          (f || []).filter((y) => y.parent_workspace_id).map((y) => y.parent_workspace_id).filter((y) => !h.has(y))
        )];
        let _ = [];
        if (g.length) {
          let y = we.from("workspaces").select("id, title, description, parent_workspace_id, created_by, archived, created_at").in("id", g);
          c || (y = y.eq("archived", !1));
          const { data: A, error: L } = await y;
          if (L)
            throw L;
          _ = A || [];
        }
        const k = [...f || [], ..._].map((y) => {
          var A, L, j;
          return {
            id: y.id,
            title: y.title,
            description: y.description || "No description",
            parent_workspace_id: y.parent_workspace_id,
            created_by: y.created_by,
            archived: y.archived,
            created_at: y.created_at,
            latest_activity: ((L = (A = y.workspace_activities) == null ? void 0 : A[0]) == null ? void 0 : L.updated_at) || y.created_at,
            hasAccess: h.has(y.id),
            accessType: ((j = h.get(y.id)) == null ? void 0 : j.access_type) || null
          };
        });
        return k.sort((y, A) => new Date(A.latest_activity) - new Date(y.latest_activity)), r(k), k;
      } catch (u) {
        return console.error("loadWorkspaces error", u), [];
      }
    }
  };
}), cg = { class: "aiworkspace-header" }, ug = {
  key: 0,
  class: "header-content header-loading"
}, dg = {
  key: 1,
  class: "header-content"
}, hg = { class: "header-left" }, fg = { class: "logo-section" }, pg = {
  href: "/",
  class: "logo"
}, gg = ["src"], vg = {
  key: 1,
  class: "text-logo"
}, mg = {
  key: 0,
  class: "header-center"
}, yg = { class: "main-navigation" }, _g = { class: "nav-item" }, bg = ["href", "onClick"], wg = { class: "workspace-icon" }, kg = {
  key: 1,
  class: "nav-divider"
}, Sg = { class: "nav-item" }, Eg = ["href", "onClick"], Tg = { class: "header-right" }, Cg = { class: "user-profile" }, Og = { class: "user-info" }, Ig = { class: "user-name" }, Ag = { class: "user-avatar" }, Pg = ["src", "alt"], $g = {
  key: 1,
  class: "avatar-placeholder"
}, xg = {
  key: 2,
  class: "unauth-message"
}, jg = { class: "workspace-list" }, Ng = ["onClick"], Rg = { class: "workspace-icon" }, Lg = { class: "workspace-details" }, Mg = { class: "workspace-members" }, Ug = {
  key: 0,
  class: "current-indicator"
}, Dg = /* @__PURE__ */ G({
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
    const s = t, n = e, { authState: r, logout: o } = sg(), i = () => {
      try {
        return lg();
      } catch {
        return console.warn("[AIWorkspaceHeader] Pinia not initialized yet, using fallback state"), null;
      }
    }, a = R(i()), l = C(() => !!a.value), c = () => {
      if (!a.value) {
        const x = i();
        x && (a.value = x, console.log("[AIWorkspaceHeader] Pinia store initialized successfully"));
      }
    };
    se(l, (x) => {
      x || setTimeout(c, 100);
    });
    const u = R(!1), d = R([]), f = R([]), p = R({
      name: "",
      email: "",
      avatar_url: null,
      initials: ""
    }), h = R([]), g = R([]), _ = C(() => r.value.isAuthenticated), v = C(() => a.value ? a.value.currentWorkspace : null), k = R([
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
    ]), y = C(() => "Dashboard"), A = (x) => {
      const w = /* @__PURE__ */ new Map();
      x.forEach((D) => {
        w.set(D.id, { ...D, children: [] });
      });
      const I = [];
      w.forEach((D) => {
        D.parent_workspace_id && w.has(D.parent_workspace_id) ? w.get(D.parent_workspace_id).children.push(D) : I.push(D);
      });
      const N = (D) => {
        D.sort((te, ye) => te.title.localeCompare(ye.title)), D.forEach((te) => {
          te.children && N(te.children);
        });
      };
      return N(I), I;
    }, L = (x, w = 0, I = []) => (x.forEach((N) => {
      I.push({ ...N, level: w }), N.children && N.children.length && L(N.children, w + 1, I);
    }), I), j = async () => {
      var x, w, I;
      try {
        const N = await ((x = a.value) == null ? void 0 : x.loadWorkspaces());
        if (h.value = A(N || []), g.value = L(h.value), f.value = g.value, d.value = g.value, s.currentWorkspaceId) {
          const D = g.value.find((te) => {
            var ye;
            return te.id.toString() === ((ye = s.currentWorkspaceId) == null ? void 0 : ye.toString());
          });
          D && ((w = a.value) == null || w.setCurrentWorkspace(D));
        } else
          !v.value && g.value.length && ((I = a.value) == null || I.setCurrentWorkspace(g.value[0]));
      } catch (N) {
        console.error("loadWorkspaces (header) error", N);
      }
    }, P = (x) => {
      if (console.log("Navigation command:", x), x === "all-workspace") {
        window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
        return;
      }
      if (x.startsWith("workspace-")) {
        const w = x.replace("workspace-", ""), I = f.value.find((N) => N.id === parseInt(w));
        I && b(I);
        return;
      }
    }, q = (x) => {
      const w = v.value;
      switch (x.key) {
        case "dashboard":
          w ? window.location.href = `/single-workspace/${w.id}/dashboard` : window.location.href = "/";
          break;
        case "outlines":
          if (w) {
            const I = `https://outline.aiworkspace.pro/single-workspace/${w.id}/outlines`;
            window.location.href = I;
          } else
            window.location.href = "https://outline.aiworkspace.pro";
          break;
        case "canvas":
          if (w) {
            const I = `https://canvas.aiworkspace.pro/single-workspace/${w.id}/canvas`;
            window.location.href = I;
          } else
            window.location.href = "https://canvas.aiworkspace.pro";
          break;
        case "files":
          if (w) {
            const I = `https://drive.aiworkspace.pro/single-workspace/${w.id}/files`;
            window.location.href = I;
          } else
            window.location.href = "https://drive.aiworkspace.pro";
          break;
        case "tasks":
          if (w) {
            const I = `https://tasks.aiworkspace.pro/single-workspace/${w.id}/tasks`;
            window.location.href = I;
          } else
            window.location.href = "https://tasks.aiworkspace.pro";
          break;
        case "ai-portfolios":
          if (w) {
            const I = `https://spreadsheet.aiworkspace.pro/single-workspace/${w.id}/ai-portfolios`;
            window.location.href = I;
          } else
            window.location.href = "https://spreadsheet.aiworkspace.pro";
          break;
        default:
          if (w) {
            const I = `https://app.aiworkspace.pro/single-workspace/${w.id}/${x.key}`;
            window.location.href = I;
          } else {
            const I = `https://app.aiworkspace.pro/${x.key}`;
            window.location.href = I;
          }
          break;
      }
    }, K = (x) => {
      const w = v.value;
      switch (x.key) {
        case "dashboard":
          return w ? `/single-workspace/${w.id}/dashboard` : "/";
        case "ai-portfolios":
          return w ? `https://spreadsheet.aiworkspace.pro/single-workspace/${w.id}/ai-portfolios` : "https://spreadsheet.aiworkspace.pro";
        case "outlines":
          return w ? `https://outline.aiworkspace.pro/single-workspace/${w.id}/outlines` : "https://outline.aiworkspace.pro";
        case "canvas":
          return w ? `https://canvas.aiworkspace.pro/single-workspace/${w.id}/canvas` : "https://canvas.aiworkspace.pro";
        case "files":
          return w ? `https://drive.aiworkspace.pro/single-workspace/${w.id}/files` : "https://drive.aiworkspace.pro";
        case "tasks":
          return w ? `https://tasks.aiworkspace.pro/single-workspace/${w.id}/tasks` : "https://tasks.aiworkspace.pro";
        default:
          return w ? `https://app.aiworkspace.pro/single-workspace/${w.id}/${x.key}` : `https://app.aiworkspace.pro/${x.key}`;
      }
    }, S = (x) => {
      switch (x) {
        case "profile":
          s.onProfileClick ? s.onProfileClick() : ys.info("Profile settings coming soon");
          break;
        case "workspaces":
          u.value = !0;
          break;
        case "logout":
          Q();
          break;
      }
    }, b = (x) => {
      var w;
      (w = a.value) == null || w.setCurrentWorkspace(x), u.value = !1, n("workspaceChange", x), ys.success(`Switched to ${x.title}`);
    }, O = () => {
      ao.prompt("Enter workspace name:", "Create New Workspace", {
        confirmButtonText: "Create",
        cancelButtonText: "Cancel",
        inputPattern: /\S/,
        inputErrorMessage: "Workspace name cannot be empty"
      }).then(({ value: x }) => {
        var I;
        const w = {
          id: Date.now(),
          title: x,
          description: "New workspace",
          archived: !1,
          created_by: "",
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          latest_activity: (/* @__PURE__ */ new Date()).toISOString(),
          hasAccess: !0,
          accessType: "edit"
        };
        d.value.push(w), (I = a.value) == null || I.setWorkspaces(d.value), b(w), ys.success(`Created workspace: ${x}`);
      }).catch(() => {
      });
    }, Q = () => {
      ao.confirm(
        "Are you sure you want to sign out?",
        "Sign Out",
        {
          confirmButtonText: "Sign Out",
          cancelButtonText: "Cancel",
          type: "warning"
        }
      ).then(async () => {
        var x;
        (x = a.value) == null || x.clearData(), await o(), n("logout"), ys.success("Signed out successfully");
      }).catch(() => {
      });
    }, he = async () => {
      var x, w;
      if (r.value.user) {
        const I = r.value.user;
        p.value = {
          name: I.name || ((x = I.email) == null ? void 0 : x.split("@")[0]) || "User",
          email: I.email || "",
          avatar_url: I.avatar_url || null,
          initials: (I.name || ((w = I.email) == null ? void 0 : w.split("@")[0]) || "U").split(" ").map((N) => N[0]).join("").toUpperCase().substring(0, 2)
        }, s.showWorkspaceSelector && await j();
      }
    };
    return se(() => r.value.user, (x) => {
      var w;
      x ? he() : (p.value = { name: "", email: "", avatar_url: null, initials: "" }, (w = a.value) == null || w.clearData());
    }), se(() => s.currentWorkspaceId, (x) => {
      var w;
      if (x && g.value.length) {
        const I = g.value.find((N) => N.id.toString() === x.toString());
        I && ((w = a.value) == null || w.setCurrentWorkspace(I));
      }
    }), Te(async () => {
      _.value && await he();
    }), (x, w) => {
      const I = be("el-icon"), N = be("el-dropdown-item"), D = be("el-tag"), te = be("el-dropdown-menu"), ye = be("el-dropdown"), cs = be("el-button"), Xs = be("el-dialog");
      return E(), M("header", cg, [
        l.value ? _.value ? (E(), M("div", dg, [
          $("div", hg, [
            $("div", fg, [
              $("a", pg, [
                x.customLogo ? (E(), M("img", {
                  key: 0,
                  src: x.customLogo,
                  alt: "AIWorkspace",
                  class: "logo-image"
                }, null, 8, gg)) : (E(), M("div", vg, [...w[7] || (w[7] = [
                  $("span", { class: "logo-text" }, "AI Workspace", -1)
                ])]))
              ])
            ])
          ]),
          x.showSecondaryNavigation ? (E(), M("div", mg, [
            $("nav", yg, [
              x.showWorkspaceSelector ? (E(), W(ye, {
                key: 0,
                onCommand: P,
                trigger: "hover"
              }, {
                dropdown: B(() => [
                  X(te, { class: "workspace-tree-dropdown" }, {
                    default: B(() => [
                      X(N, { command: "all-workspace" }, {
                        default: B(() => [...w[8] || (w[8] = [
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
                      g.value.length > 0 ? (E(), W(N, {
                        key: 0,
                        divided: "",
                        disabled: ""
                      })) : z("", !0),
                      (E(!0), M(Qe, null, Qs(g.value, (V) => (E(), W(N, {
                        key: V.id,
                        command: `workspace-${V.id}`
                      }, {
                        default: B(() => {
                          var Re;
                          return [
                            $("a", {
                              href: `/single-workspace/${V.id}/dashboard`,
                              class: "nav-link",
                              onClick: Ae((Le) => b(V), ["prevent"])
                            }, [
                              $("div", {
                                class: "workspace-dropdown-item",
                                style: pt({ paddingLeft: (V.level || 0) * 16 + "px" })
                              }, [
                                $("span", wg, Z(V.children && V.children.length ? "📁" : "📄"), 1),
                                $("span", null, Z(V.title), 1),
                                V.id === ((Re = v.value) == null ? void 0 : Re.id) ? (E(), W(D, {
                                  key: 0,
                                  size: "small",
                                  type: "success"
                                }, {
                                  default: B(() => [...w[9] || (w[9] = [
                                    xe("Current", -1)
                                  ])]),
                                  _: 1
                                })) : z("", !0)
                              ], 4)
                            ], 8, bg)
                          ];
                        }),
                        _: 2
                      }, 1032, ["command"]))), 128)),
                      g.value.length === 0 ? (E(), W(N, {
                        key: 1,
                        disabled: ""
                      }, {
                        default: B(() => [...w[10] || (w[10] = [
                          xe(" No workspaces ", -1)
                        ])]),
                        _: 1
                      })) : z("", !0)
                    ]),
                    _: 1
                  })
                ]),
                default: B(() => {
                  var V;
                  return [
                    $("span", _g, [
                      xe(Z(((V = v.value) == null ? void 0 : V.title) || "Select Workspace") + " ", 1),
                      X(I, { class: "nav-arrow" }, {
                        default: B(() => [
                          X(m(Wr))
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }),
                _: 1
              })) : z("", !0),
              x.showWorkspaceSelector ? (E(), M("span", kg, "/")) : z("", !0),
              x.showSecondaryNavigation ? (E(), W(ye, {
                key: 2,
                trigger: "hover"
              }, {
                dropdown: B(() => [
                  X(te, null, {
                    default: B(() => [
                      (E(!0), M(Qe, null, Qs(k.value, (V) => (E(), W(N, {
                        key: V.label,
                        class: U({ active: V.active })
                      }, {
                        default: B(() => [
                          $("a", {
                            href: K(V),
                            class: "nav-link",
                            onClick: Ae((Re) => q(V), ["prevent"])
                          }, Z(V.label), 9, Eg)
                        ]),
                        _: 2
                      }, 1032, ["class"]))), 128))
                    ]),
                    _: 1
                  })
                ]),
                default: B(() => [
                  $("span", Sg, [
                    xe(Z(y.value) + " ", 1),
                    X(I, { class: "nav-arrow" }, {
                      default: B(() => [
                        X(m(Wr))
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })) : z("", !0)
            ])
          ])) : z("", !0),
          $("div", Tg, [
            X(ye, {
              onCommand: S,
              trigger: "click",
              placement: "bottom-end"
            }, {
              dropdown: B(() => [
                X(te, null, {
                  default: B(() => [
                    X(N, null, {
                      default: B(() => [
                        $("a", {
                          href: "/profile",
                          class: "nav-link",
                          onClick: w[0] || (w[0] = Ae((V) => S("profile"), ["prevent"]))
                        }, "Profile Settings")
                      ]),
                      _: 1
                    }),
                    x.showWorkspaceSelector ? (E(), W(N, { key: 0 }, {
                      default: B(() => [
                        $("a", {
                          href: "#switch-workspace",
                          class: "nav-link",
                          onClick: w[1] || (w[1] = Ae((V) => S("workspaces"), ["prevent"]))
                        }, "Switch Workspace")
                      ]),
                      _: 1
                    })) : z("", !0),
                    X(N, { divided: "" }, {
                      default: B(() => [
                        $("a", {
                          href: "#signout",
                          class: "nav-link",
                          onClick: w[2] || (w[2] = Ae((V) => S("logout"), ["prevent"]))
                        }, "Sign Out")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              default: B(() => [
                $("div", Cg, [
                  $("div", Og, [
                    $("span", Ig, Z(p.value.name), 1)
                  ]),
                  $("div", Ag, [
                    p.value.avatar_url ? (E(), M("img", {
                      key: 0,
                      src: p.value.avatar_url,
                      alt: p.value.name
                    }, null, 8, Pg)) : (E(), M("span", $g, Z(p.value.initials), 1))
                  ])
                ])
              ]),
              _: 1
            })
          ])
        ])) : (E(), M("div", xg, [...w[11] || (w[11] = [
          $("div", { class: "unauth-inner" }, [
            $("strong", null, "Authentication required."),
            xe(" Please log in to access the workspace. ")
          ], -1)
        ])])) : (E(), M("div", ug, [...w[6] || (w[6] = [
          ba('<div class="header-left" data-v-1f4ec796><div class="logo-section" data-v-1f4ec796><a href="/" class="logo" data-v-1f4ec796><div class="text-logo" data-v-1f4ec796><span class="logo-text" data-v-1f4ec796>AI Workspace</span></div></a></div></div><div class="header-center" data-v-1f4ec796><span class="loading-text" data-v-1f4ec796>Initializing...</span></div>', 2)
        ])])),
        _.value && x.showWorkspaceSelector ? (E(), W(Xs, {
          key: 3,
          modelValue: u.value,
          "onUpdate:modelValue": w[4] || (w[4] = (V) => u.value = V),
          title: "Switch Workspace",
          width: "500px",
          onClose: w[5] || (w[5] = (V) => u.value = !1)
        }, {
          footer: B(() => [
            X(cs, {
              onClick: w[3] || (w[3] = (V) => u.value = !1)
            }, {
              default: B(() => [...w[12] || (w[12] = [
                xe("Cancel", -1)
              ])]),
              _: 1
            }),
            X(cs, {
              type: "primary",
              onClick: O
            }, {
              default: B(() => [...w[13] || (w[13] = [
                xe("Create New Workspace", -1)
              ])]),
              _: 1
            })
          ]),
          default: B(() => [
            $("div", jg, [
              (E(!0), M(Qe, null, Qs(d.value, (V) => {
                var Re, Le;
                return E(), M("div", {
                  key: V.id,
                  class: U(["workspace-item", { active: V.id === ((Re = v.value) == null ? void 0 : Re.id) }]),
                  onClick: (ra) => b(V)
                }, [
                  $("div", Rg, Z(V.children && V.children.length ? "📁" : "📄"), 1),
                  $("div", Lg, [
                    $("h3", null, Z(V.title), 1),
                    $("p", null, Z(V.description), 1),
                    $("span", Mg, Z(V.hasAccess ? "Active" : "Inactive"), 1)
                  ]),
                  V.id === ((Le = v.value) == null ? void 0 : Le.id) ? (E(), M("div", Ug, [
                    X(I, null, {
                      default: B(() => [
                        X(m(Cu))
                      ]),
                      _: 1
                    })
                  ])) : z("", !0)
                ], 10, Ng);
              }), 128))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])) : z("", !0)
      ]);
    };
  }
});
const Bg = (t, e) => {
  const s = t.__vccOpts || t;
  for (const [n, r] of e)
    s[n] = r;
  return s;
}, tv = /* @__PURE__ */ Bg(Dg, [["__scopeId", "data-v-1f4ec796"]]), $o = "aiworkspace_auth", xo = "aiworkspace_user_id";
function sv() {
  const t = R({
    user: null,
    isAuthenticated: !1,
    isLoading: !0
  }), e = (i) => {
    var c;
    const l = `; ${document.cookie}`.split(`; ${i}=`);
    return l.length === 2 && ((c = l.pop()) == null ? void 0 : c.split(";").shift()) || null;
  }, s = (i, a, l = 7) => {
    const c = /* @__PURE__ */ new Date();
    c.setTime(c.getTime() + l * 24 * 60 * 60 * 1e3), document.cookie = `${i}=${a};expires=${c.toUTCString()};path=/;domain=.aiworkspace.pro`;
  }, n = (i) => {
    document.cookie = `${i}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=.aiworkspace.pro`;
  }, r = async () => {
    try {
      const i = e($o), a = e(xo);
      i && a ? t.value = {
        user: { id: a, email: "" },
        // You can fetch full user data here
        isAuthenticated: !0,
        isLoading: !1
      } : t.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1
      };
    } catch (i) {
      console.error("Auth check failed:", i), t.value = {
        user: null,
        isAuthenticated: !1,
        isLoading: !1
      };
    }
  }, o = () => {
    n($o), n(xo), t.value = {
      user: null,
      isAuthenticated: !1,
      isLoading: !1
    };
  };
  return Te(() => {
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
  ze as ACCESS_COOKIE,
  tv as AIWorkspaceHeader,
  ea as LS_ACCESS_KEY,
  ta as LS_REFRESH_KEY,
  Ve as REFRESH_COOKIE,
  Zg as buildOAuthRedirectUrl,
  eg as clearLocalStorageTokens,
  To as clearSessionCookie,
  Qi as ensureCrossSubdomainCookies,
  mt as getCookie,
  Qg as getPostLoginBase,
  ev as restoreCrossSubdomainSession,
  Co as restoreSessionWithRetry,
  dt as setSessionCookie,
  tg as setupAuthStateListener,
  we as supabase,
  Ls as syncCookiesToLocalStorage,
  sv as useAuth,
  sg as useEnhancedAuth,
  lg as useWorkspaceStore
};
