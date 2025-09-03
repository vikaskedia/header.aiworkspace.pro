import { getCurrentInstance as we, inject as de, ref as j, computed as O, unref as g, getCurrentScope as jo, onScopeDispose as Mn, readonly as No, shallowRef as Ht, watchEffect as Ro, onMounted as Se, nextTick as oe, watch as re, isRef as dt, warn as da, provide as Un, defineComponent as G, openBlock as E, createElementBlock as L, mergeProps as Ts, renderSlot as ie, createElementVNode as P, toRef as ut, onUnmounted as ha, useAttrs as fa, useSlots as Lo, normalizeClass as R, normalizeStyle as ht, createCommentVNode as B, Fragment as Xe, createBlock as z, withCtx as M, resolveDynamicComponent as pe, withModifiers as Ie, toDisplayString as Q, onBeforeUnmount as os, createVNode as Z, Transition as Dn, withDirectives as qt, createTextVNode as $e, vShow as Kt, Text as pa, reactive as Bn, h as ga, shallowReactive as Mo, isVNode as Ms, render as Cs, markRaw as Je, toRefs as mn, resolveComponent as ye, withKeys as cs, hasInjectionContext as va, effectScope as ma, isReactive as Fn, toRaw as ya, renderList as Zs } from "vue";
const Uo = Symbol(), ks = "el", _a = "is-", st = (t, e, s, n, r) => {
  let o = `${t}-${e}`;
  return s && (o += `-${s}`), n && (o += `__${n}`), r && (o += `--${r}`), o;
}, Do = Symbol("namespaceContextKey"), Bo = (t) => {
  const e = t || (we() ? de(Do, j(ks)) : j(ks));
  return O(() => g(e) || ks);
}, je = (t, e) => {
  const s = Bo(e);
  return {
    namespace: s,
    b: (m = "") => st(s.value, t, m, "", ""),
    e: (m) => m ? st(s.value, t, "", m, "") : "",
    m: (m) => m ? st(s.value, t, "", "", m) : "",
    be: (m, b) => m && b ? st(s.value, t, m, b, "") : "",
    em: (m, b) => m && b ? st(s.value, t, "", m, b) : "",
    bm: (m, b) => m && b ? st(s.value, t, m, "", b) : "",
    bem: (m, b, v) => m && b && v ? st(s.value, t, m, b, v) : "",
    is: (m, ...b) => {
      const v = b.length >= 1 ? b[0] : !0;
      return m && v ? `${_a}${m}` : "";
    },
    cssVar: (m) => {
      const b = {};
      for (const v in m)
        m[v] && (b[`--${s.value}-${v}`] = m[v]);
      return b;
    },
    cssVarName: (m) => `--${s.value}-${m}`,
    cssVarBlock: (m) => {
      const b = {};
      for (const v in m)
        m[v] && (b[`--${s.value}-${t}-${v}`] = m[v]);
      return b;
    },
    cssVarBlockName: (m) => `--${s.value}-${t}-${m}`
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
}, ba = Object.prototype.hasOwnProperty, Qt = (t, e) => ba.call(t, e), Me = (t) => typeof t == "function", be = (t) => typeof t == "string", $t = (t) => t !== null && typeof t == "object", wa = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (s) => e[s] || (e[s] = t(s));
}, ka = /-\w/g, Sa = wa(
  (t) => t.replace(ka, (e) => e.slice(1).toUpperCase())
);
var Ea = typeof global == "object" && global && global.Object === Object && global;
const Ta = Ea;
var Ca = typeof self == "object" && self && self.Object === Object && self, Oa = Ta || Ca || Function("return this")();
const zn = Oa;
var Ia = zn.Symbol;
const Ze = Ia;
var Fo = Object.prototype, Aa = Fo.hasOwnProperty, Pa = Fo.toString, Bt = Ze ? Ze.toStringTag : void 0;
function $a(t) {
  var e = Aa.call(t, Bt), s = t[Bt];
  try {
    t[Bt] = void 0;
    var n = !0;
  } catch {
  }
  var r = Pa.call(t);
  return n && (e ? t[Bt] = s : delete t[Bt]), r;
}
var xa = Object.prototype, ja = xa.toString;
function Na(t) {
  return ja.call(t);
}
var Ra = "[object Null]", La = "[object Undefined]", wr = Ze ? Ze.toStringTag : void 0;
function Vn(t) {
  return t == null ? t === void 0 ? La : Ra : wr && wr in Object(t) ? $a(t) : Na(t);
}
function Wn(t) {
  return t != null && typeof t == "object";
}
var Ma = "[object Symbol]";
function Hn(t) {
  return typeof t == "symbol" || Wn(t) && Vn(t) == Ma;
}
function Ua(t, e) {
  for (var s = -1, n = t == null ? 0 : t.length, r = Array(n); ++s < n; )
    r[s] = e(t[s], s, t);
  return r;
}
var Da = Array.isArray;
const is = Da;
var Ba = 1 / 0, kr = Ze ? Ze.prototype : void 0, Sr = kr ? kr.toString : void 0;
function zo(t) {
  if (typeof t == "string")
    return t;
  if (is(t))
    return Ua(t, zo) + "";
  if (Hn(t))
    return Sr ? Sr.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -Ba ? "-0" : e;
}
function Os(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
function Fa(t) {
  return t;
}
var za = "[object AsyncFunction]", Va = "[object Function]", Wa = "[object GeneratorFunction]", Ha = "[object Proxy]";
function qa(t) {
  if (!Os(t))
    return !1;
  var e = Vn(t);
  return e == Va || e == Wa || e == za || e == Ha;
}
var Ka = zn["__core-js_shared__"];
const Qs = Ka;
var Er = function() {
  var t = /[^.]+$/.exec(Qs && Qs.keys && Qs.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Ga(t) {
  return !!Er && Er in t;
}
var Ja = Function.prototype, Ya = Ja.toString;
function Xa(t) {
  if (t != null) {
    try {
      return Ya.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Za = /[\\^$.*+?()[\]{}|]/g, Qa = /^\[object .+?Constructor\]$/, el = Function.prototype, tl = Object.prototype, sl = el.toString, nl = tl.hasOwnProperty, rl = RegExp(
  "^" + sl.call(nl).replace(Za, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ol(t) {
  if (!Os(t) || Ga(t))
    return !1;
  var e = qa(t) ? rl : Qa;
  return e.test(Xa(t));
}
function il(t, e) {
  return t == null ? void 0 : t[e];
}
function qn(t, e) {
  var s = il(t, e);
  return ol(s) ? s : void 0;
}
function al(t, e, s) {
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
var ll = 800, cl = 16, ul = Date.now;
function dl(t) {
  var e = 0, s = 0;
  return function() {
    var n = ul(), r = cl - (n - s);
    if (s = n, r > 0) {
      if (++e >= ll)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
function hl(t) {
  return function() {
    return t;
  };
}
var fl = function() {
  try {
    var t = qn(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}();
const Is = fl;
var pl = Is ? function(t, e) {
  return Is(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: hl(e),
    writable: !0
  });
} : Fa;
const gl = pl;
var vl = dl(gl);
const ml = vl;
var yl = 9007199254740991, _l = /^(?:0|[1-9]\d*)$/;
function Vo(t, e) {
  var s = typeof t;
  return e = e ?? yl, !!e && (s == "number" || s != "symbol" && _l.test(t)) && t > -1 && t % 1 == 0 && t < e;
}
function bl(t, e, s) {
  e == "__proto__" && Is ? Is(t, e, {
    configurable: !0,
    enumerable: !0,
    value: s,
    writable: !0
  }) : t[e] = s;
}
function Wo(t, e) {
  return t === e || t !== t && e !== e;
}
var wl = Object.prototype, kl = wl.hasOwnProperty;
function Sl(t, e, s) {
  var n = t[e];
  (!(kl.call(t, e) && Wo(n, s)) || s === void 0 && !(e in t)) && bl(t, e, s);
}
var Tr = Math.max;
function El(t, e, s) {
  return e = Tr(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var n = arguments, r = -1, o = Tr(n.length - e, 0), i = Array(o); ++r < o; )
      i[r] = n[e + r];
    r = -1;
    for (var a = Array(e + 1); ++r < e; )
      a[r] = n[r];
    return a[e] = s(i), al(t, this, a);
  };
}
var Tl = 9007199254740991;
function Cl(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Tl;
}
var Ol = "[object Arguments]";
function Cr(t) {
  return Wn(t) && Vn(t) == Ol;
}
var Ho = Object.prototype, Il = Ho.hasOwnProperty, Al = Ho.propertyIsEnumerable, Pl = Cr(function() {
  return arguments;
}()) ? Cr : function(t) {
  return Wn(t) && Il.call(t, "callee") && !Al.call(t, "callee");
};
const qo = Pl;
var $l = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, xl = /^\w*$/;
function jl(t, e) {
  if (is(t))
    return !1;
  var s = typeof t;
  return s == "number" || s == "symbol" || s == "boolean" || t == null || Hn(t) ? !0 : xl.test(t) || !$l.test(t) || e != null && t in Object(e);
}
var Nl = qn(Object, "create");
const es = Nl;
function Rl() {
  this.__data__ = es ? es(null) : {}, this.size = 0;
}
function Ll(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var Ml = "__lodash_hash_undefined__", Ul = Object.prototype, Dl = Ul.hasOwnProperty;
function Bl(t) {
  var e = this.__data__;
  if (es) {
    var s = e[t];
    return s === Ml ? void 0 : s;
  }
  return Dl.call(e, t) ? e[t] : void 0;
}
var Fl = Object.prototype, zl = Fl.hasOwnProperty;
function Vl(t) {
  var e = this.__data__;
  return es ? e[t] !== void 0 : zl.call(e, t);
}
var Wl = "__lodash_hash_undefined__";
function Hl(t, e) {
  var s = this.__data__;
  return this.size += this.has(t) ? 0 : 1, s[t] = es && e === void 0 ? Wl : e, this;
}
function ft(t) {
  var e = -1, s = t == null ? 0 : t.length;
  for (this.clear(); ++e < s; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
ft.prototype.clear = Rl;
ft.prototype.delete = Ll;
ft.prototype.get = Bl;
ft.prototype.has = Vl;
ft.prototype.set = Hl;
function ql() {
  this.__data__ = [], this.size = 0;
}
function Us(t, e) {
  for (var s = t.length; s--; )
    if (Wo(t[s][0], e))
      return s;
  return -1;
}
var Kl = Array.prototype, Gl = Kl.splice;
function Jl(t) {
  var e = this.__data__, s = Us(e, t);
  if (s < 0)
    return !1;
  var n = e.length - 1;
  return s == n ? e.pop() : Gl.call(e, s, 1), --this.size, !0;
}
function Yl(t) {
  var e = this.__data__, s = Us(e, t);
  return s < 0 ? void 0 : e[s][1];
}
function Xl(t) {
  return Us(this.__data__, t) > -1;
}
function Zl(t, e) {
  var s = this.__data__, n = Us(s, t);
  return n < 0 ? (++this.size, s.push([t, e])) : s[n][1] = e, this;
}
function jt(t) {
  var e = -1, s = t == null ? 0 : t.length;
  for (this.clear(); ++e < s; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
jt.prototype.clear = ql;
jt.prototype.delete = Jl;
jt.prototype.get = Yl;
jt.prototype.has = Xl;
jt.prototype.set = Zl;
var Ql = qn(zn, "Map");
const ec = Ql;
function tc() {
  this.size = 0, this.__data__ = {
    hash: new ft(),
    map: new (ec || jt)(),
    string: new ft()
  };
}
function sc(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function Ds(t, e) {
  var s = t.__data__;
  return sc(e) ? s[typeof e == "string" ? "string" : "hash"] : s.map;
}
function nc(t) {
  var e = Ds(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function rc(t) {
  return Ds(this, t).get(t);
}
function oc(t) {
  return Ds(this, t).has(t);
}
function ic(t, e) {
  var s = Ds(this, t), n = s.size;
  return s.set(t, e), this.size += s.size == n ? 0 : 1, this;
}
function mt(t) {
  var e = -1, s = t == null ? 0 : t.length;
  for (this.clear(); ++e < s; ) {
    var n = t[e];
    this.set(n[0], n[1]);
  }
}
mt.prototype.clear = tc;
mt.prototype.delete = nc;
mt.prototype.get = rc;
mt.prototype.has = oc;
mt.prototype.set = ic;
var ac = "Expected a function";
function Kn(t, e) {
  if (typeof t != "function" || e != null && typeof e != "function")
    throw new TypeError(ac);
  var s = function() {
    var n = arguments, r = e ? e.apply(this, n) : n[0], o = s.cache;
    if (o.has(r))
      return o.get(r);
    var i = t.apply(this, n);
    return s.cache = o.set(r, i) || o, i;
  };
  return s.cache = new (Kn.Cache || mt)(), s;
}
Kn.Cache = mt;
var lc = 500;
function cc(t) {
  var e = Kn(t, function(n) {
    return s.size === lc && s.clear(), n;
  }), s = e.cache;
  return e;
}
var uc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, dc = /\\(\\)?/g, hc = cc(function(t) {
  var e = [];
  return t.charCodeAt(0) === 46 && e.push(""), t.replace(uc, function(s, n, r, o) {
    e.push(r ? o.replace(dc, "$1") : n || s);
  }), e;
});
const fc = hc;
function pc(t) {
  return t == null ? "" : zo(t);
}
function Bs(t, e) {
  return is(t) ? t : jl(t, e) ? [t] : fc(pc(t));
}
var gc = 1 / 0;
function Gn(t) {
  if (typeof t == "string" || Hn(t))
    return t;
  var e = t + "";
  return e == "0" && 1 / t == -gc ? "-0" : e;
}
function Ko(t, e) {
  e = Bs(e, t);
  for (var s = 0, n = e.length; t != null && s < n; )
    t = t[Gn(e[s++])];
  return s && s == n ? t : void 0;
}
function vc(t, e, s) {
  var n = t == null ? void 0 : Ko(t, e);
  return n === void 0 ? s : n;
}
function mc(t, e) {
  for (var s = -1, n = e.length, r = t.length; ++s < n; )
    t[r + s] = e[s];
  return t;
}
var Or = Ze ? Ze.isConcatSpreadable : void 0;
function yc(t) {
  return is(t) || qo(t) || !!(Or && t && t[Or]);
}
function Go(t, e, s, n, r) {
  var o = -1, i = t.length;
  for (s || (s = yc), r || (r = []); ++o < i; ) {
    var a = t[o];
    e > 0 && s(a) ? e > 1 ? Go(a, e - 1, s, n, r) : mc(r, a) : n || (r[r.length] = a);
  }
  return r;
}
function _c(t) {
  var e = t == null ? 0 : t.length;
  return e ? Go(t, 1) : [];
}
function bc(t) {
  return ml(El(t, void 0, _c), t + "");
}
function wc(t, e) {
  return t != null && e in Object(t);
}
function kc(t, e, s) {
  e = Bs(e, t);
  for (var n = -1, r = e.length, o = !1; ++n < r; ) {
    var i = Gn(e[n]);
    if (!(o = t != null && s(t, i)))
      break;
    t = t[i];
  }
  return o || ++n != r ? o : (r = t == null ? 0 : t.length, !!r && Cl(r) && Vo(i, r) && (is(t) || qo(t)));
}
function Sc(t, e) {
  return t != null && kc(t, e, wc);
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
function Ec(t, e, s, n) {
  if (!Os(t))
    return t;
  e = Bs(e, t);
  for (var r = -1, o = e.length, i = o - 1, a = t; a != null && ++r < o; ) {
    var l = Gn(e[r]), c = s;
    if (l === "__proto__" || l === "constructor" || l === "prototype")
      return t;
    if (r != i) {
      var u = a[l];
      c = n ? n(u, l, a) : void 0, c === void 0 && (c = Os(u) ? u : Vo(e[r + 1]) ? [] : {});
    }
    Sl(a, l, c), a = a[l];
  }
  return t;
}
function Tc(t, e, s) {
  for (var n = -1, r = e.length, o = {}; ++n < r; ) {
    var i = e[n], a = Ko(t, i);
    s(a, i) && Ec(o, Bs(i, t), a);
  }
  return o;
}
function Cc(t, e) {
  return Tc(t, e, function(s, n) {
    return Sc(t, n);
  });
}
var Oc = bc(function(t, e) {
  return t == null ? {} : Cc(t, e);
});
const Ic = Oc, Xo = (t) => t === void 0, en = (t) => typeof t == "boolean", Ue = (t) => typeof t == "number", ts = (t) => typeof Element > "u" ? !1 : t instanceof Element, Ac = (t) => be(t) ? !Number.isNaN(Number(t)) : !1;
var Pc = !1;
function us(t, e, s) {
  return Array.isArray(t) ? (t.length = Math.max(t.length, e), t.splice(e, 1, s), s) : (t[e] = s, s);
}
function tn(t, e) {
  if (Array.isArray(t)) {
    t.splice(e, 1);
    return;
  }
  delete t[e];
}
var $c = Object.defineProperty, xc = Object.defineProperties, jc = Object.getOwnPropertyDescriptors, Ir = Object.getOwnPropertySymbols, Nc = Object.prototype.hasOwnProperty, Rc = Object.prototype.propertyIsEnumerable, Ar = (t, e, s) => e in t ? $c(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, Lc = (t, e) => {
  for (var s in e || (e = {}))
    Nc.call(e, s) && Ar(t, s, e[s]);
  if (Ir)
    for (var s of Ir(e))
      Rc.call(e, s) && Ar(t, s, e[s]);
  return t;
}, Mc = (t, e) => xc(t, jc(e));
function Uc(t, e) {
  var s;
  const n = Ht();
  return Ro(() => {
    n.value = t();
  }, Mc(Lc({}, e), {
    flush: (s = e == null ? void 0 : e.flush) != null ? s : "sync"
  })), No(n);
}
var Pr;
const ge = typeof window < "u", Dc = (t) => typeof t == "string", Bc = () => {
};
ge && ((Pr = window == null ? void 0 : window.navigator) != null && Pr.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function Jn(t) {
  return typeof t == "function" ? t() : g(t);
}
function Fc(t) {
  return t;
}
function Yn(t) {
  return jo() ? (Mn(t), !0) : !1;
}
function zc(t, e = !0) {
  we() ? Se(t) : e ? t() : oe(t);
}
function Vc(t, e, s = {}) {
  const {
    immediate: n = !0
  } = s, r = j(!1);
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
    }, Jn(e));
  }
  return n && (r.value = !0, ge && l()), Yn(a), {
    isPending: No(r),
    start: l,
    stop: a
  };
}
function Zo(t) {
  var e;
  const s = Jn(t);
  return (e = s == null ? void 0 : s.$el) != null ? e : s;
}
const Qo = ge ? window : void 0;
function Ss(...t) {
  let e, s, n, r;
  if (Dc(t[0]) || Array.isArray(t[0]) ? ([s, n, r] = t, e = Qo) : [e, s, n, r] = t, !e)
    return Bc;
  Array.isArray(s) || (s = [s]), Array.isArray(n) || (n = [n]);
  const o = [], i = () => {
    o.forEach((u) => u()), o.length = 0;
  }, a = (u, d, f, p) => (u.addEventListener(d, f, p), () => u.removeEventListener(d, f, p)), l = re(() => [Zo(e), Jn(r)], ([u, d]) => {
    i(), u && o.push(...s.flatMap((f) => n.map((p) => a(u, f, p, d))));
  }, { immediate: !0, flush: "post" }), c = () => {
    l(), i();
  };
  return Yn(c), c;
}
function Wc(t, e = !1) {
  const s = j(), n = () => s.value = !!t();
  return n(), zc(n, e), s;
}
const $r = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, xr = "__vueuse_ssr_handlers__";
$r[xr] = $r[xr] || {};
var jr = Object.getOwnPropertySymbols, Hc = Object.prototype.hasOwnProperty, qc = Object.prototype.propertyIsEnumerable, Kc = (t, e) => {
  var s = {};
  for (var n in t)
    Hc.call(t, n) && e.indexOf(n) < 0 && (s[n] = t[n]);
  if (t != null && jr)
    for (var n of jr(t))
      e.indexOf(n) < 0 && qc.call(t, n) && (s[n] = t[n]);
  return s;
};
function ei(t, e, s = {}) {
  const n = s, { window: r = Qo } = n, o = Kc(n, ["window"]);
  let i;
  const a = Wc(() => r && "ResizeObserver" in r), l = () => {
    i && (i.disconnect(), i = void 0);
  }, c = re(() => Zo(t), (d) => {
    l(), a.value && r && d && (i = new ResizeObserver(e), i.observe(d, o));
  }, { immediate: !0, flush: "post" }), u = () => {
    l(), c();
  };
  return Yn(u), {
    isSupported: a,
    stop: u
  };
}
var Nr;
(function(t) {
  t.UP = "UP", t.RIGHT = "RIGHT", t.DOWN = "DOWN", t.LEFT = "LEFT", t.NONE = "NONE";
})(Nr || (Nr = {}));
var Gc = Object.defineProperty, Rr = Object.getOwnPropertySymbols, Jc = Object.prototype.hasOwnProperty, Yc = Object.prototype.propertyIsEnumerable, Lr = (t, e, s) => e in t ? Gc(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s, Xc = (t, e) => {
  for (var s in e || (e = {}))
    Jc.call(e, s) && Lr(t, s, e[s]);
  if (Rr)
    for (var s of Rr(e))
      Yc.call(e, s) && Lr(t, s, e[s]);
  return t;
};
const Zc = {
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
Xc({
  linear: Fc
}, Zc);
const Mr = {
  current: 0
}, Ur = j(0), ti = 2e3, Dr = Symbol("elZIndexContextKey"), si = Symbol("zIndexContextKey"), Qc = (t) => {
  const e = we() ? de(Dr, Mr) : Mr, s = t || (we() ? de(si, void 0) : void 0), n = O(() => {
    const i = g(s);
    return Ue(i) ? i : ti;
  }), r = O(() => n.value + Ur.value), o = () => (e.current++, Ur.value = e.current, r.value);
  return !ge && de(Dr), {
    initialZIndex: n,
    currentZIndex: r,
    nextZIndex: o
  };
};
var eu = {
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
const tu = (t) => (e, s) => su(e, s, g(t)), su = (t, e, s) => vc(s, t, t).replace(/\{(\w+)\}/g, (n, r) => {
  var o;
  return `${(o = e == null ? void 0 : e[r]) != null ? o : `{${r}}`}`;
}), nu = (t) => {
  const e = O(() => g(t).name), s = dt(t) ? t : j(t);
  return {
    lang: e,
    locale: s,
    t: tu(t)
  };
}, ni = Symbol("localeContextKey"), ru = (t) => {
  const e = t || de(ni, j());
  return nu(O(() => e.value || eu));
}, ri = "__epPropKey", ee = (t) => t, ou = (t) => $t(t) && !!t[ri], oi = (t, e) => {
  if (!$t(t) || ou(t))
    return t;
  const { values: s, required: n, default: r, type: o, validator: i } = t, l = {
    type: o,
    required: !!n,
    validator: s || i ? (c) => {
      let u = !1, d = [];
      if (s && (d = Array.from(s), Qt(t, "default") && d.push(r), u || (u = d.includes(c))), i && (u || (u = i(c))), !u && d.length > 0) {
        const f = [...new Set(d)].map((p) => JSON.stringify(p)).join(", ");
        da(`Invalid prop: validation failed${e ? ` for prop "${e}"` : ""}. Expected one of [${f}], got value ${JSON.stringify(c)}.`);
      }
      return u;
    } : void 0,
    [ri]: !0
  };
  return Qt(t, "default") && (l.default = r), l;
}, Fe = (t) => Jo(Object.entries(t).map(([e, s]) => [
  e,
  oi(s, e)
])), ii = ["", "default", "small", "large"], Xn = oi({
  type: String,
  values: ii,
  required: !1
}), ai = Symbol("size"), iu = () => {
  const t = de(ai, {});
  return O(() => g(t.size) || "");
}, au = Symbol("emptyValuesContextKey"), lu = Fe({
  emptyValues: Array,
  valueOnClear: {
    type: ee([
      String,
      Number,
      Boolean,
      Function
    ]),
    default: void 0,
    validator: (t) => Me(t) ? !t() : !t
  }
}), Br = (t) => Object.keys(t), As = j();
function Zn(t, e = void 0) {
  const s = we() ? de(Uo, As) : As;
  return t ? O(() => {
    var n, r;
    return (r = (n = s.value) == null ? void 0 : n[t]) != null ? r : e;
  }) : s;
}
function li(t, e) {
  const s = Zn(), n = je(t, O(() => {
    var a;
    return ((a = s.value) == null ? void 0 : a.namespace) || ks;
  })), r = ru(O(() => {
    var a;
    return (a = s.value) == null ? void 0 : a.locale;
  })), o = Qc(O(() => {
    var a;
    return ((a = s.value) == null ? void 0 : a.zIndex) || ti;
  })), i = O(() => {
    var a;
    return g(e) || ((a = s.value) == null ? void 0 : a.size) || "";
  });
  return ci(O(() => g(s) || {})), {
    ns: n,
    locale: r,
    zIndex: o,
    size: i
  };
}
const ci = (t, e, s = !1) => {
  var n;
  const r = !!we(), o = r ? Zn() : void 0, i = (n = e == null ? void 0 : e.provide) != null ? n : r ? Un : void 0;
  if (!i)
    return;
  const a = O(() => {
    const l = g(t);
    return o != null && o.value ? cu(o.value, l) : l;
  });
  return i(Uo, a), i(ni, O(() => a.value.locale)), i(Do, O(() => a.value.namespace)), i(si, O(() => a.value.zIndex)), i(ai, {
    size: O(() => a.value.size || "")
  }), i(au, O(() => ({
    emptyValues: a.value.emptyValues,
    valueOnClear: a.value.valueOnClear
  }))), (s || !As.value) && (As.value = a.value), a;
}, cu = (t, e) => {
  const s = [.../* @__PURE__ */ new Set([...Br(t), ...Br(e)])], n = {};
  for (const r of s)
    n[r] = e[r] !== void 0 ? e[r] : t[r];
  return n;
}, yn = "update:modelValue", Fr = "change", zr = "input";
var et = (t, e) => {
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
}, uu = (t, e) => {
  !t || !e.trim() || t.classList.add(...ui(e));
}, du = (t, e) => {
  !t || !e.trim() || t.classList.remove(...ui(e));
}, hu = (t, e) => {
  var s;
  if (!ge || !t || !e)
    return "";
  let n = Sa(e);
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
  if (Ue(t) || Ac(t))
    return `${t}${e}`;
  if (be(t))
    return t;
}
let ds;
const fu = (t) => {
  var e;
  if (!ge)
    return 0;
  if (ds !== void 0)
    return ds;
  const s = document.createElement("div");
  s.className = `${t}-scrollbar__wrap`, s.style.visibility = "hidden", s.style.width = "100px", s.style.position = "absolute", s.style.top = "-9999px", document.body.appendChild(s);
  const n = s.offsetWidth;
  s.style.overflow = "scroll";
  const r = document.createElement("div");
  r.style.width = "100%", s.appendChild(r);
  const o = r.offsetWidth;
  return (e = s.parentNode) == null || e.removeChild(s), ds = n - o, ds;
};
class pu extends Error {
  constructor(e) {
    super(e), this.name = "ElementPlusError";
  }
}
function gu(t, e) {
  throw new pu(`[${t}] ${e}`);
}
const Fs = (t, e) => {
  if (t.install = (s) => {
    for (const n of [t, ...Object.values(e ?? {})])
      s.component(n.name, n);
  }, e)
    for (const [s, n] of Object.entries(e))
      t[s] = n;
  return t;
}, vu = (t, e) => (t.install = (s) => {
  t._context = s._context, s.config.globalProperties[e] = t;
}, t), mu = (t) => (t.install = Gt, t), yu = Fe({
  size: {
    type: ee([Number, String])
  },
  color: {
    type: String
  }
}), _u = G({
  name: "ElIcon",
  inheritAttrs: !1
}), bu = /* @__PURE__ */ G({
  ..._u,
  props: yu,
  setup(t) {
    const e = t, s = je("icon"), n = O(() => {
      const { size: r, color: o } = e;
      return !r && !o ? {} : {
        fontSize: Xo(r) ? void 0 : ss(r),
        "--color": o
      };
    });
    return (r, o) => (E(), L("i", Ts({
      class: g(s).b(),
      style: g(n)
    }, r.$attrs), [
      ie(r.$slots, "default")
    ], 16));
  }
});
var wu = /* @__PURE__ */ et(bu, [["__file", "icon.vue"]]);
const xe = Fs(wu);
/*! Element Plus Icons Vue v2.3.2 */
var ku = /* @__PURE__ */ G({
  name: "ArrowDown",
  __name: "arrow-down",
  setup(t) {
    return (e, s) => (E(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      P("path", {
        fill: "currentColor",
        d: "M831.872 340.864 512 652.672 192.128 340.864a30.59 30.59 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.59 30.59 0 0 0-42.752 0z"
      })
    ]));
  }
}), Wr = ku, Su = /* @__PURE__ */ G({
  name: "Check",
  __name: "check",
  setup(t) {
    return (e, s) => (E(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      P("path", {
        fill: "currentColor",
        d: "M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"
      })
    ]));
  }
}), Eu = Su, Tu = /* @__PURE__ */ G({
  name: "CircleCheck",
  __name: "circle-check",
  setup(t) {
    return (e, s) => (E(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      P("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      }),
      P("path", {
        fill: "currentColor",
        d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752z"
      })
    ]));
  }
}), Cu = Tu, Ou = /* @__PURE__ */ G({
  name: "CircleCloseFilled",
  __name: "circle-close-filled",
  setup(t) {
    return (e, s) => (E(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      P("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336z"
      })
    ]));
  }
}), di = Ou, Iu = /* @__PURE__ */ G({
  name: "CircleClose",
  __name: "circle-close",
  setup(t) {
    return (e, s) => (E(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      P("path", {
        fill: "currentColor",
        d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z"
      }),
      P("path", {
        fill: "currentColor",
        d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"
      })
    ]));
  }
}), hi = Iu, Au = /* @__PURE__ */ G({
  name: "Close",
  __name: "close",
  setup(t) {
    return (e, s) => (E(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      P("path", {
        fill: "currentColor",
        d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
      })
    ]));
  }
}), Pu = Au, $u = /* @__PURE__ */ G({
  name: "Hide",
  __name: "hide",
  setup(t) {
    return (e, s) => (E(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      P("path", {
        fill: "currentColor",
        d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4s-12.8-9.6-22.4-9.6-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176S0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4s3.2 16 9.6 22.4 12.8 9.6 22.4 9.6 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4m-646.4 528Q115.2 579.2 76.8 512q43.2-72 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4m140.8-96Q352 555.2 352 512c0-44.8 16-83.2 48-112s67.2-48 112-48c28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6q-43.2 72-153.6 172.8c-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176S1024 528 1024 512s-48.001-73.6-134.401-176"
      }),
      P("path", {
        fill: "currentColor",
        d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112s-67.2 48-112 48"
      })
    ]));
  }
}), xu = $u, ju = /* @__PURE__ */ G({
  name: "InfoFilled",
  __name: "info-filled",
  setup(t) {
    return (e, s) => (E(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      P("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64m67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344M590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.99 12.99 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"
      })
    ]));
  }
}), _n = ju, Nu = /* @__PURE__ */ G({
  name: "Loading",
  __name: "loading",
  setup(t) {
    return (e, s) => (E(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      P("path", {
        fill: "currentColor",
        d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248m452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248M828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0"
      })
    ]));
  }
}), Ps = Nu, Ru = /* @__PURE__ */ G({
  name: "SuccessFilled",
  __name: "success-filled",
  setup(t) {
    return (e, s) => (E(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      P("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.27 38.27 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
      })
    ]));
  }
}), fi = Ru, Lu = /* @__PURE__ */ G({
  name: "View",
  __name: "view",
  setup(t) {
    return (e, s) => (E(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      P("path", {
        fill: "currentColor",
        d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288m0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.19 160.19 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160"
      })
    ]));
  }
}), Mu = Lu, Uu = /* @__PURE__ */ G({
  name: "WarningFilled",
  __name: "warning-filled",
  setup(t) {
    return (e, s) => (E(), L("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 1024 1024"
    }, [
      P("path", {
        fill: "currentColor",
        d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.43 58.43 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.43 58.43 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"
      })
    ]));
  }
}), pi = Uu;
const At = ee([
  String,
  Object,
  Function
]), gi = {
  Close: Pu,
  SuccessFilled: fi,
  InfoFilled: _n,
  WarningFilled: pi,
  CircleCloseFilled: di
}, $s = {
  primary: _n,
  success: fi,
  warning: pi,
  error: di,
  info: _n
}, Du = {
  validating: Ps,
  success: Cu,
  error: hi
}, Bu = () => ge && /firefox/i.test(window.navigator.userAgent);
let he;
const Fu = {
  height: "0",
  visibility: "hidden",
  overflow: Bu() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, zu = [
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
function Vu(t) {
  const e = window.getComputedStyle(t), s = e.getPropertyValue("box-sizing"), n = Number.parseFloat(e.getPropertyValue("padding-bottom")) + Number.parseFloat(e.getPropertyValue("padding-top")), r = Number.parseFloat(e.getPropertyValue("border-bottom-width")) + Number.parseFloat(e.getPropertyValue("border-top-width"));
  return { contextStyle: zu.map((i) => [
    i,
    e.getPropertyValue(i)
  ]), paddingSize: n, borderSize: r, boxSizing: s };
}
function Hr(t, e = 1, s) {
  var n, r;
  he || (he = document.createElement("textarea"), ((n = t.parentNode) != null ? n : document.body).appendChild(he));
  const { paddingSize: o, borderSize: i, boxSizing: a, contextStyle: l } = Vu(t);
  l.forEach(([f, p]) => he == null ? void 0 : he.style.setProperty(f, p)), Object.entries(Fu).forEach(([f, p]) => he == null ? void 0 : he.style.setProperty(f, p, "important")), he.value = t.value || t.placeholder || "";
  let c = he.scrollHeight;
  const u = {};
  a === "border-box" ? c = c + i : a === "content-box" && (c = c - o), he.value = "";
  const d = he.scrollHeight - o;
  if (Ue(e)) {
    let f = d * e;
    a === "border-box" && (f = f + o + i), c = Math.max(f, c), u.minHeight = `${f}px`;
  }
  if (Ue(s)) {
    let f = d * s;
    a === "border-box" && (f = f + o + i), c = Math.min(f, c);
  }
  return u.height = `${c}px`, (r = he.parentNode) == null || r.removeChild(he), he = void 0, u;
}
const vi = (t) => t, Wu = Fe({
  ariaLabel: String,
  ariaOrientation: {
    type: String,
    values: ["horizontal", "vertical", "undefined"]
  },
  ariaControls: String
}), Hu = (t) => Ic(Wu, t), qu = Fe({
  id: {
    type: String,
    default: void 0
  },
  size: Xn,
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
    type: At,
    default: hi
  },
  showPassword: Boolean,
  showWordLimit: Boolean,
  suffixIcon: {
    type: At
  },
  prefixIcon: {
    type: At
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
  ...Hu(["ariaLabel"]),
  inputmode: {
    type: ee(String),
    default: void 0
  },
  name: String
}), Ku = {
  [yn]: (t) => be(t),
  input: (t) => be(t),
  change: (t) => be(t),
  focus: (t) => t instanceof FocusEvent,
  blur: (t) => t instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (t) => t instanceof MouseEvent,
  mouseenter: (t) => t instanceof MouseEvent,
  keydown: (t) => t instanceof Event,
  compositionstart: (t) => t instanceof CompositionEvent,
  compositionupdate: (t) => t instanceof CompositionEvent,
  compositionend: (t) => t instanceof CompositionEvent
}, Gu = ["class", "style"], Ju = /^on[A-Z]/, Yu = (t = {}) => {
  const { excludeListeners: e = !1, excludeKeys: s } = t, n = O(() => ((s == null ? void 0 : s.value) || []).concat(Gu)), r = we();
  return r ? O(() => {
    var o;
    return Jo(Object.entries((o = r.proxy) == null ? void 0 : o.$attrs).filter(([i]) => !n.value.includes(i) && !(e && Ju.test(i))));
  }) : O(() => ({}));
}, qr = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, Xu = Symbol("elIdInjection"), Zu = () => we() ? de(Xu, qr) : qr, bn = (t) => {
  const e = Zu(), s = Bo();
  return Uc(() => g(t) || `${s.value}-id-${e.prefix}-${e.current++}`);
}, Qn = Symbol("formContextKey"), mi = Symbol("formItemContextKey"), yi = () => {
  const t = de(Qn, void 0), e = de(mi, void 0);
  return {
    form: t,
    formItem: e
  };
}, Qu = (t, {
  formItemContext: e,
  disableIdGeneration: s,
  disableIdManagement: n
}) => {
  s || (s = j(!1)), n || (n = j(!1));
  const r = we(), o = () => {
    let c = r == null ? void 0 : r.parent;
    for (; c; ) {
      if (c.type.name === "ElFormItem")
        return !1;
      if (c.type.name === "ElLabelWrap")
        return !0;
      c = c.parent;
    }
    return !1;
  }, i = j();
  let a;
  const l = O(() => {
    var c;
    return !!(!(t.label || t.ariaLabel) && e && e.inputIds && ((c = e.inputIds) == null ? void 0 : c.length) <= 1);
  });
  return Se(() => {
    a = re([ut(t, "id"), s], ([c, u]) => {
      const d = c ?? (u ? void 0 : bn().value);
      d !== i.value && (e != null && e.removeInputId && !o() && (i.value && e.removeInputId(i.value), !(n != null && n.value) && !u && d && e.addInputId(d)), i.value = d);
    }, { immediate: !0 });
  }), ha(() => {
    a && a(), e != null && e.removeInputId && i.value && e.removeInputId(i.value);
  }), {
    isLabeledByFormItem: l,
    inputId: i
  };
}, _i = (t) => {
  const e = we();
  return O(() => {
    var s, n;
    return (n = (s = e == null ? void 0 : e.proxy) == null ? void 0 : s.$props) == null ? void 0 : n[t];
  });
}, bi = (t, e = {}) => {
  const s = j(void 0), n = e.prop ? s : _i("size"), r = e.global ? s : iu(), o = e.form ? { size: void 0 } : de(Qn, void 0), i = e.formItem ? { size: void 0 } : de(mi, void 0);
  return O(() => n.value || g(t) || (i == null ? void 0 : i.size) || (o == null ? void 0 : o.size) || r.value || "");
}, er = (t) => {
  const e = _i("disabled"), s = de(Qn, void 0);
  return O(() => e.value || g(t) || (s == null ? void 0 : s.disabled) || !1);
}, ed = 'a[href],button:not([disabled]),button:not([hidden]),:not([tabindex="-1"]),input:not([disabled]),input:not([type="hidden"]),select:not([disabled]),textarea:not([disabled])', td = (t) => getComputedStyle(t).position === "fixed" ? !1 : t.offsetParent !== null, Kr = (t) => Array.from(t.querySelectorAll(ed)).filter((e) => tr(e) && td(e)), tr = (t) => {
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
function sd(t, {
  disabled: e,
  beforeFocus: s,
  afterFocus: n,
  beforeBlur: r,
  afterBlur: o
} = {}) {
  const i = we(), { emit: a } = i, l = Ht(), c = j(!1), u = (p) => {
    const h = Me(s) ? s(p) : !1;
    g(e) || c.value || h || (c.value = !0, a("focus", p), n == null || n());
  }, d = (p) => {
    var h;
    const m = Me(r) ? r(p) : !1;
    g(e) || p.relatedTarget && ((h = l.value) != null && h.contains(p.relatedTarget)) || m || (c.value = !1, a("blur", p), o == null || o());
  }, f = (p) => {
    var h, m;
    g(e) || tr(p.target) || (h = l.value) != null && h.contains(document.activeElement) && l.value !== document.activeElement || (m = t.value) == null || m.focus();
  };
  return re([l, () => g(e)], ([p, h]) => {
    p && (h ? p.removeAttribute("tabindex") : p.setAttribute("tabindex", "-1"));
  }), Ss(l, "focus", u, !0), Ss(l, "blur", d, !0), Ss(l, "click", f, !0), {
    isFocused: c,
    wrapperRef: l,
    handleFocus: u,
    handleBlur: d
  };
}
const nd = (t) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(t);
function rd({
  afterComposition: t,
  emit: e
}) {
  const s = j(!1), n = (a) => {
    e == null || e("compositionstart", a), s.value = !0;
  }, r = (a) => {
    var l;
    e == null || e("compositionupdate", a);
    const c = (l = a.target) == null ? void 0 : l.value, u = c[c.length - 1] || "";
    s.value = !nd(u);
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
function od(t) {
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
const id = "ElInput", ad = G({
  name: id,
  inheritAttrs: !1
}), ld = /* @__PURE__ */ G({
  ...ad,
  props: qu,
  emits: Ku,
  setup(t, { expose: e, emit: s }) {
    const n = t, r = fa(), o = Yu(), i = Lo(), a = O(() => [
      n.type === "textarea" ? m.b() : h.b(),
      h.m(f.value),
      h.is("disabled", p.value),
      h.is("exceed", ze.value),
      {
        [h.b("group")]: i.prepend || i.append,
        [h.m("prefix")]: i.prefix || n.prefixIcon,
        [h.m("suffix")]: i.suffix || n.suffixIcon || n.clearable || n.showPassword,
        [h.bm("suffix", "password-clear")]: J.value && K.value,
        [h.b("hidden")]: n.type === "hidden"
      },
      r.class
    ]), l = O(() => [
      h.e("wrapper"),
      h.is("focus", W.value)
    ]), { form: c, formItem: u } = yi(), { inputId: d } = Qu(n, {
      formItemContext: u
    }), f = bi(), p = er(), h = je("input"), m = je("textarea"), b = Ht(), v = Ht(), S = j(!1), y = j(!1), A = j(), N = Ht(n.inputStyle), $ = O(() => b.value || v.value), { wrapperRef: I, isFocused: W, handleFocus: H, handleBlur: T } = sd($, {
      disabled: p,
      afterBlur() {
        var C;
        n.validateEvent && ((C = u == null ? void 0 : u.validate) == null || C.call(u, "blur").catch((Y) => void 0));
      }
    }), w = O(() => {
      var C;
      return (C = c == null ? void 0 : c.statusIcon) != null ? C : !1;
    }), _ = O(() => (u == null ? void 0 : u.validateState) || ""), k = O(() => _.value && Du[_.value]), x = O(() => y.value ? Mu : xu), q = O(() => [
      r.style
    ]), te = O(() => [
      n.inputStyle,
      N.value,
      { resize: n.resize }
    ]), U = O(() => Yo(n.modelValue) ? "" : String(n.modelValue)), J = O(() => n.clearable && !p.value && !n.readonly && !!U.value && (W.value || S.value)), K = O(() => n.showPassword && !p.value && !!U.value), Ee = O(() => n.showWordLimit && !!n.maxlength && (n.type === "text" || n.type === "textarea") && !p.value && !n.readonly && !n.showPassword), F = O(() => U.value.length), ze = O(() => !!Ee.value && F.value > Number(n.maxlength)), Mt = O(() => !!i.suffix || !!n.suffixIcon || J.value || n.showPassword || Ee.value || !!_.value && w.value), [Ys, dr] = od(b);
    ei(v, (C) => {
      if (ra(), !Ee.value || n.resize !== "both")
        return;
      const Y = C[0], { width: _t } = Y.contentRect;
      A.value = {
        right: `calc(100% - ${_t + 15 + 6}px)`
      };
    });
    const Ut = () => {
      const { type: C, autosize: Y } = n;
      if (!(!ge || C !== "textarea" || !v.value))
        if (Y) {
          const _t = $t(Y) ? Y.minRows : void 0, _r = $t(Y) ? Y.maxRows : void 0, br = Hr(v.value, _t, _r);
          N.value = {
            overflowY: "hidden",
            ...br
          }, oe(() => {
            v.value.offsetHeight, N.value = br;
          });
        } else
          N.value = {
            minHeight: Hr(v.value).minHeight
          };
    }, ra = ((C) => {
      let Y = !1;
      return () => {
        var _t;
        if (Y || !n.autosize)
          return;
        ((_t = v.value) == null ? void 0 : _t.offsetParent) === null || (C(), Y = !0);
      };
    })(Ut), Dt = () => {
      const C = $.value, Y = n.formatter ? n.formatter(U.value) : U.value;
      !C || C.value === Y || (C.value = Y);
    }, Xs = async (C) => {
      Ys();
      let { value: Y } = C.target;
      if (n.formatter && n.parser && (Y = n.parser(Y)), !fr.value) {
        if (Y === U.value) {
          Dt();
          return;
        }
        s(yn, Y), s(zr, Y), await oe(), Dt(), dr();
      }
    }, hr = (C) => {
      let { value: Y } = C.target;
      n.formatter && n.parser && (Y = n.parser(Y)), s(Fr, Y);
    }, {
      isComposing: fr,
      handleCompositionStart: pr,
      handleCompositionUpdate: gr,
      handleCompositionEnd: vr
    } = rd({ emit: s, afterComposition: Xs }), oa = () => {
      Ys(), y.value = !y.value, setTimeout(dr);
    }, ia = () => {
      var C;
      return (C = $.value) == null ? void 0 : C.focus();
    }, aa = () => {
      var C;
      return (C = $.value) == null ? void 0 : C.blur();
    }, la = (C) => {
      S.value = !1, s("mouseleave", C);
    }, ca = (C) => {
      S.value = !0, s("mouseenter", C);
    }, mr = (C) => {
      s("keydown", C);
    }, ua = () => {
      var C;
      (C = $.value) == null || C.select();
    }, yr = () => {
      s(yn, ""), s(Fr, ""), s("clear"), s(zr, "");
    };
    return re(() => n.modelValue, () => {
      var C;
      oe(() => Ut()), n.validateEvent && ((C = u == null ? void 0 : u.validate) == null || C.call(u, "change").catch((Y) => void 0));
    }), re(U, () => Dt()), re(() => n.type, async () => {
      await oe(), Dt(), Ut();
    }), Se(() => {
      !n.formatter && n.parser, Dt(), oe(Ut);
    }), e({
      input: b,
      textarea: v,
      ref: $,
      textareaStyle: te,
      autosize: ut(n, "autosize"),
      isComposing: fr,
      focus: ia,
      blur: aa,
      select: ua,
      clear: yr,
      resizeTextarea: Ut
    }), (C, Y) => (E(), L("div", {
      class: R([
        g(a),
        {
          [g(h).bm("group", "append")]: C.$slots.append,
          [g(h).bm("group", "prepend")]: C.$slots.prepend
        }
      ]),
      style: ht(g(q)),
      onMouseenter: ca,
      onMouseleave: la
    }, [
      B(" input "),
      C.type !== "textarea" ? (E(), L(Xe, { key: 0 }, [
        B(" prepend slot "),
        C.$slots.prepend ? (E(), L("div", {
          key: 0,
          class: R(g(h).be("group", "prepend"))
        }, [
          ie(C.$slots, "prepend")
        ], 2)) : B("v-if", !0),
        P("div", {
          ref_key: "wrapperRef",
          ref: I,
          class: R(g(l))
        }, [
          B(" prefix slot "),
          C.$slots.prefix || C.prefixIcon ? (E(), L("span", {
            key: 0,
            class: R(g(h).e("prefix"))
          }, [
            P("span", {
              class: R(g(h).e("prefix-inner"))
            }, [
              ie(C.$slots, "prefix"),
              C.prefixIcon ? (E(), z(g(xe), {
                key: 0,
                class: R(g(h).e("icon"))
              }, {
                default: M(() => [
                  (E(), z(pe(C.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : B("v-if", !0)
            ], 2)
          ], 2)) : B("v-if", !0),
          P("input", Ts({
            id: g(d),
            ref_key: "input",
            ref: b,
            class: g(h).e("inner")
          }, g(o), {
            name: C.name,
            minlength: C.minlength,
            maxlength: C.maxlength,
            type: C.showPassword ? y.value ? "text" : "password" : C.type,
            disabled: g(p),
            readonly: C.readonly,
            autocomplete: C.autocomplete,
            tabindex: C.tabindex,
            "aria-label": C.ariaLabel,
            placeholder: C.placeholder,
            style: C.inputStyle,
            form: C.form,
            autofocus: C.autofocus,
            role: C.containerRole,
            inputmode: C.inputmode,
            onCompositionstart: g(pr),
            onCompositionupdate: g(gr),
            onCompositionend: g(vr),
            onInput: Xs,
            onChange: hr,
            onKeydown: mr
          }), null, 16, ["id", "name", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "inputmode", "onCompositionstart", "onCompositionupdate", "onCompositionend"]),
          B(" suffix slot "),
          g(Mt) ? (E(), L("span", {
            key: 1,
            class: R(g(h).e("suffix"))
          }, [
            P("span", {
              class: R(g(h).e("suffix-inner"))
            }, [
              !g(J) || !g(K) || !g(Ee) ? (E(), L(Xe, { key: 0 }, [
                ie(C.$slots, "suffix"),
                C.suffixIcon ? (E(), z(g(xe), {
                  key: 0,
                  class: R(g(h).e("icon"))
                }, {
                  default: M(() => [
                    (E(), z(pe(C.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : B("v-if", !0)
              ], 64)) : B("v-if", !0),
              g(J) ? (E(), z(g(xe), {
                key: 1,
                class: R([g(h).e("icon"), g(h).e("clear")]),
                onMousedown: Ie(g(Gt), ["prevent"]),
                onClick: yr
              }, {
                default: M(() => [
                  (E(), z(pe(C.clearIcon)))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : B("v-if", !0),
              g(K) ? (E(), z(g(xe), {
                key: 2,
                class: R([g(h).e("icon"), g(h).e("password")]),
                onClick: oa
              }, {
                default: M(() => [
                  (E(), z(pe(g(x))))
                ]),
                _: 1
              }, 8, ["class"])) : B("v-if", !0),
              g(Ee) ? (E(), L("span", {
                key: 3,
                class: R(g(h).e("count"))
              }, [
                P("span", {
                  class: R(g(h).e("count-inner"))
                }, Q(g(F)) + " / " + Q(C.maxlength), 3)
              ], 2)) : B("v-if", !0),
              g(_) && g(k) && g(w) ? (E(), z(g(xe), {
                key: 4,
                class: R([
                  g(h).e("icon"),
                  g(h).e("validateIcon"),
                  g(h).is("loading", g(_) === "validating")
                ])
              }, {
                default: M(() => [
                  (E(), z(pe(g(k))))
                ]),
                _: 1
              }, 8, ["class"])) : B("v-if", !0)
            ], 2)
          ], 2)) : B("v-if", !0)
        ], 2),
        B(" append slot "),
        C.$slots.append ? (E(), L("div", {
          key: 1,
          class: R(g(h).be("group", "append"))
        }, [
          ie(C.$slots, "append")
        ], 2)) : B("v-if", !0)
      ], 64)) : (E(), L(Xe, { key: 1 }, [
        B(" textarea "),
        P("textarea", Ts({
          id: g(d),
          ref_key: "textarea",
          ref: v,
          class: [g(m).e("inner"), g(h).is("focus", g(W))]
        }, g(o), {
          minlength: C.minlength,
          maxlength: C.maxlength,
          tabindex: C.tabindex,
          disabled: g(p),
          readonly: C.readonly,
          autocomplete: C.autocomplete,
          style: g(te),
          "aria-label": C.ariaLabel,
          placeholder: C.placeholder,
          form: C.form,
          autofocus: C.autofocus,
          rows: C.rows,
          role: C.containerRole,
          onCompositionstart: g(pr),
          onCompositionupdate: g(gr),
          onCompositionend: g(vr),
          onInput: Xs,
          onFocus: g(H),
          onBlur: g(T),
          onChange: hr,
          onKeydown: mr
        }), null, 16, ["id", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role", "onCompositionstart", "onCompositionupdate", "onCompositionend", "onFocus", "onBlur"]),
        g(Ee) ? (E(), L("span", {
          key: 0,
          style: ht(A.value),
          class: R(g(h).e("count"))
        }, Q(g(F)) + " / " + Q(C.maxlength), 7)) : B("v-if", !0)
      ], 64))
    ], 38));
  }
});
var cd = /* @__PURE__ */ et(ld, [["__file", "input.vue"]]);
const ud = Fs(cd), sn = "focus-trap.focus-after-trapped", nn = "focus-trap.focus-after-released", dd = "focus-trap.focusout-prevented", Gr = {
  cancelable: !0,
  bubbles: !1
}, hd = {
  cancelable: !0,
  bubbles: !1
}, Jr = "focusAfterTrapped", Yr = "focusAfterReleased", fd = Symbol("elFocusTrap"), sr = j(), zs = j(0), nr = j(0);
let hs = 0;
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
    if (!pd(s, e))
      return s;
}, pd = (t, e) => {
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
}, gd = (t) => {
  const e = wi(t), s = Xr(e, t), n = Xr(e.reverse(), t);
  return [s, n];
}, vd = (t) => t instanceof HTMLInputElement && "select" in t, He = (t, e) => {
  if (t && t.focus) {
    const s = document.activeElement;
    let n = !1;
    ts(t) && !tr(t) && !t.getAttribute("tabindex") && (t.setAttribute("tabindex", "-1"), n = !0), t.focus({ preventScroll: !0 }), nr.value = window.performance.now(), t !== s && vd(t) && e && t.select(), ts(t) && n && t.removeAttribute("tabindex");
  }
};
function Zr(t, e) {
  const s = [...t], n = t.indexOf(e);
  return n !== -1 && s.splice(n, 1), s;
}
const md = () => {
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
}, yd = (t, e = !1) => {
  const s = document.activeElement;
  for (const n of t)
    if (He(n, e), document.activeElement !== s)
      return;
}, Qr = md(), _d = () => zs.value > nr.value, fs = () => {
  sr.value = "pointer", zs.value = window.performance.now();
}, eo = () => {
  sr.value = "keyboard", zs.value = window.performance.now();
}, bd = () => (Se(() => {
  hs === 0 && (document.addEventListener("mousedown", fs), document.addEventListener("touchstart", fs), document.addEventListener("keydown", eo)), hs++;
}), os(() => {
  hs--, hs <= 0 && (document.removeEventListener("mousedown", fs), document.removeEventListener("touchstart", fs), document.removeEventListener("keydown", eo));
}), {
  focusReason: sr,
  lastUserFocusTimestamp: zs,
  lastAutomatedFocusTimestamp: nr
}), ps = (t) => new CustomEvent(dd, {
  ...hd,
  detail: t
}), Vs = {
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
let Ct = [];
const to = (t) => {
  t.code === Vs.esc && Ct.forEach((e) => e(t));
}, wd = (t) => {
  Se(() => {
    Ct.length === 0 && document.addEventListener("keydown", to), ge && Ct.push(t);
  }), os(() => {
    Ct = Ct.filter((e) => e !== t), Ct.length === 0 && ge && document.removeEventListener("keydown", to);
  });
}, kd = G({
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
    const s = j();
    let n, r;
    const { focusReason: o } = bd();
    wd((h) => {
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
      const { code: m, altKey: b, ctrlKey: v, metaKey: S, currentTarget: y, shiftKey: A } = h, { loop: N } = t, $ = m === Vs.tab && !b && !v && !S, I = document.activeElement;
      if ($ && I) {
        const W = y, [H, T] = gd(W);
        if (H && T) {
          if (!A && I === T) {
            const _ = ps({
              focusReason: o.value
            });
            e("focusout-prevented", _), _.defaultPrevented || (h.preventDefault(), N && He(H, !0));
          } else if (A && [H, W].includes(I)) {
            const _ = ps({
              focusReason: o.value
            });
            e("focusout-prevented", _), _.defaultPrevented || (h.preventDefault(), N && He(T, !0));
          }
        } else if (I === W) {
          const _ = ps({
            focusReason: o.value
          });
          e("focusout-prevented", _), _.defaultPrevented || h.preventDefault();
        }
      }
    };
    Un(fd, {
      focusTrapRef: s,
      onKeydown: a
    }), re(() => t.focusTrapEl, (h) => {
      h && (s.value = h);
    }, { immediate: !0 }), re([s], ([h], [m]) => {
      h && (h.addEventListener("keydown", a), h.addEventListener("focusin", u), h.addEventListener("focusout", d)), m && (m.removeEventListener("keydown", a), m.removeEventListener("focusin", u), m.removeEventListener("focusout", d));
    });
    const l = (h) => {
      e(Jr, h);
    }, c = (h) => e(Yr, h), u = (h) => {
      const m = g(s);
      if (!m)
        return;
      const b = h.target, v = h.relatedTarget, S = b && m.contains(b);
      t.trapped || v && m.contains(v) || (n = v), S && e("focusin", h), !i.paused && t.trapped && (S ? r = b : He(r, !0));
    }, d = (h) => {
      const m = g(s);
      if (!(i.paused || !m))
        if (t.trapped) {
          const b = h.relatedTarget;
          !Yo(b) && !m.contains(b) && setTimeout(() => {
            if (!i.paused && t.trapped) {
              const v = ps({
                focusReason: o.value
              });
              e("focusout-prevented", v), v.defaultPrevented || He(r, !0);
            }
          }, 0);
        } else {
          const b = h.target;
          b && m.contains(b) || e("focusout", h);
        }
    };
    async function f() {
      await oe();
      const h = g(s);
      if (h) {
        Qr.push(i);
        const m = h.contains(document.activeElement) ? n : document.activeElement;
        if (n = m, !h.contains(m)) {
          const v = new Event(sn, Gr);
          h.addEventListener(sn, l), h.dispatchEvent(v), v.defaultPrevented || oe(() => {
            let S = t.focusStartEl;
            be(S) || (He(S), document.activeElement !== S && (S = "first")), S === "first" && yd(wi(h), !0), (document.activeElement === m || S === "container") && He(h);
          });
        }
      }
    }
    function p() {
      const h = g(s);
      if (h) {
        h.removeEventListener(sn, l);
        const m = new CustomEvent(nn, {
          ...Gr,
          detail: {
            focusReason: o.value
          }
        });
        h.addEventListener(nn, c), h.dispatchEvent(m), !m.defaultPrevented && (o.value == "keyboard" || !_d() || h.contains(document.activeElement)) && He(n ?? document.body), h.removeEventListener(nn, c), Qr.remove(i);
      }
    }
    return Se(() => {
      t.trapped && f(), re(() => t.trapped, (h) => {
        h ? f() : p();
      });
    }), os(() => {
      t.trapped && p(), s.value && (s.value.removeEventListener("keydown", a), s.value.removeEventListener("focusin", u), s.value.removeEventListener("focusout", d), s.value = void 0);
    }), {
      onKeydown: a
    };
  }
});
function Sd(t, e, s, n, r, o) {
  return ie(t.$slots, "default", { handleKeydown: t.onKeydown });
}
var Ed = /* @__PURE__ */ et(kd, [["render", Sd], ["__file", "focus-trap.vue"]]);
const Td = Fe({
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
}), Cd = G({
  name: "ElBadge"
}), Od = /* @__PURE__ */ G({
  ...Cd,
  props: Td,
  setup(t, { expose: e }) {
    const s = t, n = je("badge"), r = O(() => s.isDot ? "" : Ue(s.value) && Ue(s.max) ? s.max < s.value ? `${s.max}+` : `${s.value}` : `${s.value}`), o = O(() => {
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
    }), (i, a) => (E(), L("div", {
      class: R(g(n).b())
    }, [
      ie(i.$slots, "default"),
      Z(Dn, {
        name: `${g(n).namespace.value}-zoom-in-center`,
        persisted: ""
      }, {
        default: M(() => [
          qt(P("sup", {
            class: R([
              g(n).e("content"),
              g(n).em("content", i.type),
              g(n).is("fixed", !!i.$slots.default),
              g(n).is("dot", i.isDot),
              g(n).is("hide-zero", !i.showZero && s.value === 0),
              i.badgeClass
            ]),
            style: ht(g(o))
          }, [
            ie(i.$slots, "content", { value: g(r) }, () => [
              $e(Q(g(r)), 1)
            ])
          ], 6), [
            [Kt, !i.hidden && (g(r) || i.isDot || i.$slots.content)]
          ])
        ]),
        _: 3
      }, 8, ["name"])
    ], 2));
  }
});
var Id = /* @__PURE__ */ et(Od, [["__file", "badge.vue"]]);
const Ad = Fs(Id), ki = Symbol("buttonGroupContextKey"), Pd = ({ from: t, replacement: e, scope: s, version: n, ref: r, type: o = "API" }, i) => {
  re(() => g(i), (a) => {
  }, {
    immediate: !0
  });
}, $d = (t, e) => {
  Pd({
    from: "type.text",
    replacement: "link",
    version: "3.0.0",
    scope: "props",
    ref: "https://element-plus.org/en-US/component/button.html#button-attributes"
  }, O(() => t.type === "text"));
  const s = de(ki, void 0), n = Zn("button"), { form: r } = yi(), o = bi(O(() => s == null ? void 0 : s.size)), i = er(), a = j(), l = Lo(), c = O(() => {
    var v;
    return t.type || (s == null ? void 0 : s.type) || ((v = n.value) == null ? void 0 : v.type) || "";
  }), u = O(() => {
    var v, S, y;
    return (y = (S = t.autoInsertSpace) != null ? S : (v = n.value) == null ? void 0 : v.autoInsertSpace) != null ? y : !1;
  }), d = O(() => {
    var v, S, y;
    return (y = (S = t.plain) != null ? S : (v = n.value) == null ? void 0 : v.plain) != null ? y : !1;
  }), f = O(() => {
    var v, S, y;
    return (y = (S = t.round) != null ? S : (v = n.value) == null ? void 0 : v.round) != null ? y : !1;
  }), p = O(() => {
    var v, S, y;
    return (y = (S = t.text) != null ? S : (v = n.value) == null ? void 0 : v.text) != null ? y : !1;
  }), h = O(() => t.tag === "button" ? {
    ariaDisabled: i.value || t.loading,
    disabled: i.value || t.loading,
    autofocus: t.autofocus,
    type: t.nativeType
  } : {}), m = O(() => {
    var v;
    const S = (v = l.default) == null ? void 0 : v.call(l);
    if (u.value && (S == null ? void 0 : S.length) === 1) {
      const y = S[0];
      if ((y == null ? void 0 : y.type) === pa) {
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
    shouldAddSpace: m,
    handleClick: (v) => {
      if (i.value || t.loading) {
        v.stopPropagation();
        return;
      }
      t.nativeType === "reset" && (r == null || r.resetFields()), e("click", v);
    }
  };
}, xd = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "text",
  ""
], jd = ["button", "submit", "reset"], wn = Fe({
  size: Xn,
  disabled: Boolean,
  type: {
    type: String,
    values: xd,
    default: ""
  },
  icon: {
    type: At
  },
  nativeType: {
    type: String,
    values: jd,
    default: "button"
  },
  loading: Boolean,
  loadingIcon: {
    type: At,
    default: () => Ps
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
}), Nd = {
  click: (t) => t instanceof MouseEvent
};
function ae(t, e) {
  Rd(t) && (t = "100%");
  var s = Ld(t);
  return t = e === 360 ? t : Math.min(e, Math.max(0, parseFloat(t))), s && (t = parseInt(String(t * e), 10) / 100), Math.abs(t - e) < 1e-6 ? 1 : (e === 360 ? t = (t < 0 ? t % e + e : t % e) / parseFloat(String(e)) : t = t % e / parseFloat(String(e)), t);
}
function gs(t) {
  return Math.min(1, Math.max(0, t));
}
function Rd(t) {
  return typeof t == "string" && t.indexOf(".") !== -1 && parseFloat(t) === 1;
}
function Ld(t) {
  return typeof t == "string" && t.indexOf("%") !== -1;
}
function Si(t) {
  return t = parseFloat(t), (isNaN(t) || t < 0 || t > 1) && (t = 1), t;
}
function vs(t) {
  return t <= 1 ? "".concat(Number(t) * 100, "%") : t;
}
function at(t) {
  return t.length === 1 ? "0" + t : String(t);
}
function Md(t, e, s) {
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
function rn(t, e, s) {
  return s < 0 && (s += 1), s > 1 && (s -= 1), s < 1 / 6 ? t + (e - t) * (6 * s) : s < 1 / 2 ? e : s < 2 / 3 ? t + (e - t) * (2 / 3 - s) * 6 : t;
}
function Ud(t, e, s) {
  var n, r, o;
  if (t = ae(t, 360), e = ae(e, 100), s = ae(s, 100), e === 0)
    r = s, o = s, n = s;
  else {
    var i = s < 0.5 ? s * (1 + e) : s + e - s * e, a = 2 * s - i;
    n = rn(a, i, t + 1 / 3), r = rn(a, i, t), o = rn(a, i, t - 1 / 3);
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
function Dd(t, e, s) {
  t = ae(t, 360) * 6, e = ae(e, 100), s = ae(s, 100);
  var n = Math.floor(t), r = t - n, o = s * (1 - e), i = s * (1 - r * e), a = s * (1 - (1 - r) * e), l = n % 6, c = [s, i, o, o, a, s][l], u = [a, s, s, i, o, o][l], d = [o, o, a, s, s, i][l];
  return { r: c * 255, g: u * 255, b: d * 255 };
}
function ro(t, e, s, n) {
  var r = [
    at(Math.round(t).toString(16)),
    at(Math.round(e).toString(16)),
    at(Math.round(s).toString(16))
  ];
  return n && r[0].startsWith(r[0].charAt(1)) && r[1].startsWith(r[1].charAt(1)) && r[2].startsWith(r[2].charAt(1)) ? r[0].charAt(0) + r[1].charAt(0) + r[2].charAt(0) : r.join("");
}
function Bd(t, e, s, n, r) {
  var o = [
    at(Math.round(t).toString(16)),
    at(Math.round(e).toString(16)),
    at(Math.round(s).toString(16)),
    at(Fd(n))
  ];
  return r && o[0].startsWith(o[0].charAt(1)) && o[1].startsWith(o[1].charAt(1)) && o[2].startsWith(o[2].charAt(1)) && o[3].startsWith(o[3].charAt(1)) ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0) : o.join("");
}
function Fd(t) {
  return Math.round(parseFloat(t) * 255).toString(16);
}
function oo(t) {
  return ve(t) / 255;
}
function ve(t) {
  return parseInt(t, 16);
}
function zd(t) {
  return {
    r: t >> 16,
    g: (t & 65280) >> 8,
    b: t & 255
  };
}
var kn = {
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
function Vd(t) {
  var e = { r: 0, g: 0, b: 0 }, s = 1, n = null, r = null, o = null, i = !1, a = !1;
  return typeof t == "string" && (t = qd(t)), typeof t == "object" && (Ne(t.r) && Ne(t.g) && Ne(t.b) ? (e = Md(t.r, t.g, t.b), i = !0, a = String(t.r).substr(-1) === "%" ? "prgb" : "rgb") : Ne(t.h) && Ne(t.s) && Ne(t.v) ? (n = vs(t.s), r = vs(t.v), e = Dd(t.h, n, r), i = !0, a = "hsv") : Ne(t.h) && Ne(t.s) && Ne(t.l) && (n = vs(t.s), o = vs(t.l), e = Ud(t.h, n, o), i = !0, a = "hsl"), Object.prototype.hasOwnProperty.call(t, "a") && (s = t.a)), s = Si(s), {
    ok: i,
    format: t.format || a,
    r: Math.min(255, Math.max(e.r, 0)),
    g: Math.min(255, Math.max(e.g, 0)),
    b: Math.min(255, Math.max(e.b, 0)),
    a: s
  };
}
var Wd = "[-\\+]?\\d+%?", Hd = "[-\\+]?\\d*\\.\\d+%?", Ye = "(?:".concat(Hd, ")|(?:").concat(Wd, ")"), on = "[\\s|\\(]+(".concat(Ye, ")[,|\\s]+(").concat(Ye, ")[,|\\s]+(").concat(Ye, ")\\s*\\)?"), an = "[\\s|\\(]+(".concat(Ye, ")[,|\\s]+(").concat(Ye, ")[,|\\s]+(").concat(Ye, ")[,|\\s]+(").concat(Ye, ")\\s*\\)?"), Te = {
  CSS_UNIT: new RegExp(Ye),
  rgb: new RegExp("rgb" + on),
  rgba: new RegExp("rgba" + an),
  hsl: new RegExp("hsl" + on),
  hsla: new RegExp("hsla" + an),
  hsv: new RegExp("hsv" + on),
  hsva: new RegExp("hsva" + an),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function qd(t) {
  if (t = t.trim().toLowerCase(), t.length === 0)
    return !1;
  var e = !1;
  if (kn[t])
    t = kn[t], e = !0;
  else if (t === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var s = Te.rgb.exec(t);
  return s ? { r: s[1], g: s[2], b: s[3] } : (s = Te.rgba.exec(t), s ? { r: s[1], g: s[2], b: s[3], a: s[4] } : (s = Te.hsl.exec(t), s ? { h: s[1], s: s[2], l: s[3] } : (s = Te.hsla.exec(t), s ? { h: s[1], s: s[2], l: s[3], a: s[4] } : (s = Te.hsv.exec(t), s ? { h: s[1], s: s[2], v: s[3] } : (s = Te.hsva.exec(t), s ? { h: s[1], s: s[2], v: s[3], a: s[4] } : (s = Te.hex8.exec(t), s ? {
    r: ve(s[1]),
    g: ve(s[2]),
    b: ve(s[3]),
    a: oo(s[4]),
    format: e ? "name" : "hex8"
  } : (s = Te.hex6.exec(t), s ? {
    r: ve(s[1]),
    g: ve(s[2]),
    b: ve(s[3]),
    format: e ? "name" : "hex"
  } : (s = Te.hex4.exec(t), s ? {
    r: ve(s[1] + s[1]),
    g: ve(s[2] + s[2]),
    b: ve(s[3] + s[3]),
    a: oo(s[4] + s[4]),
    format: e ? "name" : "hex8"
  } : (s = Te.hex3.exec(t), s ? {
    r: ve(s[1] + s[1]),
    g: ve(s[2] + s[2]),
    b: ve(s[3] + s[3]),
    format: e ? "name" : "hex"
  } : !1)))))))));
}
function Ne(t) {
  return !!Te.CSS_UNIT.exec(String(t));
}
var Kd = (
  /** @class */
  function() {
    function t(e, s) {
      e === void 0 && (e = ""), s === void 0 && (s = {});
      var n;
      if (e instanceof t)
        return e;
      typeof e == "number" && (e = zd(e)), this.originalInput = e;
      var r = Vd(e);
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
      return e === void 0 && (e = !1), Bd(this.r, this.g, this.b, this.a, e);
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
      for (var e = "#" + ro(this.r, this.g, this.b, !1), s = 0, n = Object.entries(kn); s < n.length; s++) {
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
      return s.l += e / 100, s.l = gs(s.l), new t(s);
    }, t.prototype.brighten = function(e) {
      e === void 0 && (e = 10);
      var s = this.toRgb();
      return s.r = Math.max(0, Math.min(255, s.r - Math.round(255 * -(e / 100)))), s.g = Math.max(0, Math.min(255, s.g - Math.round(255 * -(e / 100)))), s.b = Math.max(0, Math.min(255, s.b - Math.round(255 * -(e / 100)))), new t(s);
    }, t.prototype.darken = function(e) {
      e === void 0 && (e = 10);
      var s = this.toHsl();
      return s.l -= e / 100, s.l = gs(s.l), new t(s);
    }, t.prototype.tint = function(e) {
      return e === void 0 && (e = 10), this.mix("white", e);
    }, t.prototype.shade = function(e) {
      return e === void 0 && (e = 10), this.mix("black", e);
    }, t.prototype.desaturate = function(e) {
      e === void 0 && (e = 10);
      var s = this.toHsl();
      return s.s -= e / 100, s.s = gs(s.s), new t(s);
    }, t.prototype.saturate = function(e) {
      e === void 0 && (e = 10);
      var s = this.toHsl();
      return s.s += e / 100, s.s = gs(s.s), new t(s);
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
function Ve(t, e = 20) {
  return t.mix("#141414", e).toString();
}
function Gd(t) {
  const e = er(), s = je("button");
  return O(() => {
    let n = {}, r = t.color;
    if (r) {
      const o = r.match(/var\((.*?)\)/);
      o && (r = window.getComputedStyle(window.document.documentElement).getPropertyValue(o[1]));
      const i = new Kd(r), a = t.dark ? i.tint(20).toString() : Ve(i, 20);
      if (t.plain)
        n = s.cssVarBlock({
          "bg-color": t.dark ? Ve(i, 90) : i.tint(90).toString(),
          "text-color": r,
          "border-color": t.dark ? Ve(i, 50) : i.tint(50).toString(),
          "hover-text-color": `var(${s.cssVarName("color-white")})`,
          "hover-bg-color": r,
          "hover-border-color": r,
          "active-bg-color": a,
          "active-text-color": `var(${s.cssVarName("color-white")})`,
          "active-border-color": a
        }), e.value && (n[s.cssVarBlockName("disabled-bg-color")] = t.dark ? Ve(i, 90) : i.tint(90).toString(), n[s.cssVarBlockName("disabled-text-color")] = t.dark ? Ve(i, 50) : i.tint(50).toString(), n[s.cssVarBlockName("disabled-border-color")] = t.dark ? Ve(i, 80) : i.tint(80).toString());
      else {
        const l = t.dark ? Ve(i, 30) : i.tint(30).toString(), c = i.isDark() ? `var(${s.cssVarName("color-white")})` : `var(${s.cssVarName("color-black")})`;
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
          const u = t.dark ? Ve(i, 50) : i.tint(50).toString();
          n[s.cssVarBlockName("disabled-bg-color")] = u, n[s.cssVarBlockName("disabled-text-color")] = t.dark ? "rgba(255, 255, 255, 0.5)" : `var(${s.cssVarName("color-white")})`, n[s.cssVarBlockName("disabled-border-color")] = u;
        }
      }
    }
    return n;
  });
}
const Jd = G({
  name: "ElButton"
}), Yd = /* @__PURE__ */ G({
  ...Jd,
  props: wn,
  emits: Nd,
  setup(t, { expose: e, emit: s }) {
    const n = t, r = Gd(n), o = je("button"), {
      _ref: i,
      _size: a,
      _type: l,
      _disabled: c,
      _props: u,
      _plain: d,
      _round: f,
      _text: p,
      shouldAddSpace: h,
      handleClick: m
    } = $d(n, s), b = O(() => [
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
    }), (v, S) => (E(), z(pe(v.tag), Ts({
      ref_key: "_ref",
      ref: i
    }, g(u), {
      class: g(b),
      style: g(r),
      onClick: g(m)
    }), {
      default: M(() => [
        v.loading ? (E(), L(Xe, { key: 0 }, [
          v.$slots.loading ? ie(v.$slots, "loading", { key: 0 }) : (E(), z(g(xe), {
            key: 1,
            class: R(g(o).is("loading"))
          }, {
            default: M(() => [
              (E(), z(pe(v.loadingIcon)))
            ]),
            _: 1
          }, 8, ["class"]))
        ], 64)) : v.icon || v.$slots.icon ? (E(), z(g(xe), { key: 1 }, {
          default: M(() => [
            v.icon ? (E(), z(pe(v.icon), { key: 0 })) : ie(v.$slots, "icon", { key: 1 })
          ]),
          _: 3
        })) : B("v-if", !0),
        v.$slots.default ? (E(), L("span", {
          key: 2,
          class: R({ [g(o).em("text", "expand")]: g(h) })
        }, [
          ie(v.$slots, "default")
        ], 2)) : B("v-if", !0)
      ]),
      _: 3
    }, 16, ["class", "style", "onClick"]));
  }
});
var Xd = /* @__PURE__ */ et(Yd, [["__file", "button.vue"]]);
const Zd = {
  size: wn.size,
  type: wn.type
}, Qd = G({
  name: "ElButtonGroup"
}), eh = /* @__PURE__ */ G({
  ...Qd,
  props: Zd,
  setup(t) {
    const e = t;
    Un(ki, Bn({
      size: ut(e, "size"),
      type: ut(e, "type")
    }));
    const s = je("button");
    return (n, r) => (E(), L("div", {
      class: R(g(s).b("group"))
    }, [
      ie(n.$slots, "default")
    ], 2));
  }
});
var Ei = /* @__PURE__ */ et(eh, [["__file", "button-group.vue"]]);
const th = Fs(Xd, {
  ButtonGroup: Ei
});
mu(Ei);
var ke = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function sh(t) {
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
var Es = /* @__PURE__ */ ((t) => (t[t.TEXT = 1] = "TEXT", t[t.CLASS = 2] = "CLASS", t[t.STYLE = 4] = "STYLE", t[t.PROPS = 8] = "PROPS", t[t.FULL_PROPS = 16] = "FULL_PROPS", t[t.HYDRATE_EVENTS = 32] = "HYDRATE_EVENTS", t[t.STABLE_FRAGMENT = 64] = "STABLE_FRAGMENT", t[t.KEYED_FRAGMENT = 128] = "KEYED_FRAGMENT", t[t.UNKEYED_FRAGMENT = 256] = "UNKEYED_FRAGMENT", t[t.NEED_PATCH = 512] = "NEED_PATCH", t[t.DYNAMIC_SLOTS = 1024] = "DYNAMIC_SLOTS", t[t.HOISTED = -1] = "HOISTED", t[t.BAIL = -2] = "BAIL", t))(Es || {});
const nh = Fe({
  a11y: {
    type: Boolean,
    default: !0
  },
  locale: {
    type: ee(Object)
  },
  size: Xn,
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
  ...lu
}), ce = {
  placement: "top"
};
G({
  name: "ElConfigProvider",
  props: nh,
  setup(t, { slots: e }) {
    const s = ci(t);
    return re(() => t.message, (n) => {
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
}, rh = Fe({
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
}), oh = {
  click: (t) => t instanceof MouseEvent
}, ih = "overlay";
var ah = G({
  name: "ElOverlay",
  props: rh,
  emits: oh,
  setup(t, { slots: e, emit: s }) {
    const n = je(ih), r = (l) => {
      s("click", l);
    }, { onClick: o, onMousedown: i, onMouseup: a } = Ti(t.customMaskEvent ? void 0 : r);
    return () => t.mask ? Z("div", {
      class: [n.b(), t.overlayClass],
      style: {
        zIndex: t.zIndex
      },
      onClick: o,
      onMousedown: i,
      onMouseup: a
    }, [ie(e, "default")], Es.STYLE | Es.CLASS | Es.PROPS, ["onClick", "onMouseup", "onMousedown"]) : ga("div", {
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
const lh = ah, ch = (t, e, s, n) => {
  const r = {
    offsetX: 0,
    offsetY: 0
  }, o = j(!1), i = (f, p) => {
    if (t.value) {
      const { offsetX: h, offsetY: m } = r, b = t.value.getBoundingClientRect(), v = b.left, S = b.top, y = b.width, A = b.height, N = document.documentElement.clientWidth, $ = document.documentElement.clientHeight, I = -v + h, W = -S + m, H = N - v - y + h, T = $ - S - (A < $ ? A : 0) + m;
      n != null && n.value || (f = Math.min(Math.max(f, I), H), p = Math.min(Math.max(p, W), T)), r.offsetX = f, r.offsetY = p, t.value.style.transform = `translate(${ss(f)}, ${ss(p)})`;
    }
  }, a = (f) => {
    const p = f.clientX, h = f.clientY, { offsetX: m, offsetY: b } = r, v = (y) => {
      o.value || (o.value = !0);
      const A = m + y.clientX - p, N = b + y.clientY - h;
      i(A, N);
    }, S = () => {
      o.value = !1, document.removeEventListener("mousemove", v), document.removeEventListener("mouseup", S);
    };
    document.addEventListener("mousemove", v), document.addEventListener("mouseup", S);
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
  return Se(() => {
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
}, uh = (t, e = {}) => {
  dt(t) || gu("[useLockscreen]", "You need to pass a ref param to this function");
  const s = e.ns || je("popup"), n = O(() => s.bm("parent", "hidden"));
  if (!ge || Vr(document.body, n.value))
    return;
  let r = 0, o = !1, i = "0";
  const a = () => {
    setTimeout(() => {
      typeof document > "u" || o && document && (document.body.style.width = i, du(document.body, n.value));
    }, 200);
  };
  re(t, (l) => {
    if (!l) {
      a();
      return;
    }
    o = !Vr(document.body, n.value), o && (i = document.body.style.width, uu(document.body, n.value)), r = fu(s.namespace.value);
    const c = document.documentElement.clientHeight < document.body.scrollHeight, u = hu(document.body, "overflowY");
    r > 0 && (c || u === "scroll") && o && (document.body.style.width = `calc(100% - ${r}px)`);
  }), Mn(() => a());
}, dh = (t) => ["", ...ii].includes(t), Ci = [
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
], Pt = "top", le = vi({
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
  appendTo: ge ? document.body : void 0
}), hh = Fe({
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
    type: At,
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
}), fh = {
  destroy: () => !0
}, Ae = Mo({}), ph = (t) => (Ae[t] || (Ae[t] = Mo([])), Ae[t]), gh = (t, e) => {
  const s = Ae[e] || [], n = s.findIndex((i) => i.id === t), r = s[n];
  let o;
  return n > 0 && (o = s[n - 1]), { current: r, prev: o };
}, vh = (t, e) => {
  const { prev: s } = gh(t, e);
  return s ? s.vm.exposed.bottom.value : 0;
}, mh = (t, e, s) => (Ae[s] || []).findIndex((o) => o.id === t) > 0 ? 16 : e, yh = G({
  name: "ElMessage"
}), _h = /* @__PURE__ */ G({
  ...yh,
  props: hh,
  emits: fh,
  setup(t, { expose: e, emit: s }) {
    const n = t, { Close: r } = gi, o = j(!1), { ns: i, zIndex: a } = li("message"), { currentZIndex: l, nextZIndex: c } = a, u = j(), d = j(!1), f = j(0);
    let p;
    const h = O(() => n.type ? n.type === "error" ? "danger" : n.type : "info"), m = O(() => {
      const _ = n.type;
      return { [i.bm("icon", _)]: _ && $s[_] };
    }), b = O(() => n.icon || $s[n.type] || ""), v = O(() => n.placement || Pt), S = O(() => vh(n.id, v.value)), y = O(() => mh(n.id, n.offset, v.value) + S.value), A = O(() => f.value + y.value), N = O(() => v.value.includes("left") ? i.is("left") : v.value.includes("right") ? i.is("right") : i.is("center")), $ = O(() => v.value.startsWith("top") ? "top" : "bottom"), I = O(() => ({
      [$.value]: `${y.value}px`,
      zIndex: l.value
    }));
    function W() {
      n.duration !== 0 && ({ stop: p } = Vc(() => {
        T();
      }, n.duration));
    }
    function H() {
      p == null || p();
    }
    function T() {
      d.value = !1, oe(() => {
        var _;
        o.value || ((_ = n.onClose) == null || _.call(n), s("destroy"));
      });
    }
    function w({ code: _ }) {
      _ === Vs.esc && T();
    }
    return Se(() => {
      W(), c(), d.value = !0;
    }), re(() => n.repeatNum, () => {
      H(), W();
    }), Ss(document, "keydown", w), ei(u, () => {
      f.value = u.value.getBoundingClientRect().height;
    }), e({
      visible: d,
      bottom: A,
      close: T
    }), (_, k) => (E(), z(Dn, {
      name: g(i).b("fade"),
      onBeforeEnter: (x) => o.value = !0,
      onBeforeLeave: _.onClose,
      onAfterLeave: (x) => _.$emit("destroy"),
      persisted: ""
    }, {
      default: M(() => [
        qt(P("div", {
          id: _.id,
          ref_key: "messageRef",
          ref: u,
          class: R([
            g(i).b(),
            { [g(i).m(_.type)]: _.type },
            g(i).is("closable", _.showClose),
            g(i).is("plain", _.plain),
            g(i).is("bottom", g($) === "bottom"),
            g(N),
            _.customClass
          ]),
          style: ht(g(I)),
          role: "alert",
          onMouseenter: H,
          onMouseleave: W
        }, [
          _.repeatNum > 1 ? (E(), z(g(Ad), {
            key: 0,
            value: _.repeatNum,
            type: g(h),
            class: R(g(i).e("badge"))
          }, null, 8, ["value", "type", "class"])) : B("v-if", !0),
          g(b) ? (E(), z(g(xe), {
            key: 1,
            class: R([g(i).e("icon"), g(m)])
          }, {
            default: M(() => [
              (E(), z(pe(g(b))))
            ]),
            _: 1
          }, 8, ["class"])) : B("v-if", !0),
          ie(_.$slots, "default", {}, () => [
            _.dangerouslyUseHTMLString ? (E(), L(Xe, { key: 1 }, [
              B(" Caution here, message could've been compromised, never use user's input as message "),
              P("p", {
                class: R(g(i).e("content")),
                innerHTML: _.message
              }, null, 10, ["innerHTML"])
            ], 2112)) : (E(), L("p", {
              key: 0,
              class: R(g(i).e("content"))
            }, Q(_.message), 3))
          ]),
          _.showClose ? (E(), z(g(xe), {
            key: 2,
            class: R(g(i).e("closeBtn")),
            onClick: Ie(T, ["stop"])
          }, {
            default: M(() => [
              Z(g(r))
            ]),
            _: 1
          }, 8, ["class", "onClick"])) : B("v-if", !0)
        ], 46, ["id"]), [
          [Kt, d.value]
        ])
      ]),
      _: 3
    }, 8, ["name", "onBeforeEnter", "onBeforeLeave", "onAfterLeave"]));
  }
});
var bh = /* @__PURE__ */ et(_h, [["__file", "message.vue"]]);
let wh = 1;
const kh = (t) => {
  if (!t.appendTo)
    t.appendTo = document.body;
  else if (be(t.appendTo)) {
    let s = document.querySelector(t.appendTo);
    ts(s) || (s = document.body), t.appendTo = s;
  }
}, Sh = (t) => {
  !t.placement && be(ce.placement) && ce.placement && (t.placement = ce.placement), t.placement || (t.placement = Pt), Oi.includes(t.placement) || (`${t.placement}${Pt}`, t.placement = Pt);
}, Ii = (t) => {
  const e = !t || be(t) || Ms(t) || Me(t) ? { message: t } : t, s = {
    ...le,
    ...e
  };
  return kh(s), Sh(s), en(ce.grouping) && !s.grouping && (s.grouping = ce.grouping), Ue(ce.duration) && s.duration === 3e3 && (s.duration = ce.duration), Ue(ce.offset) && s.offset === 16 && (s.offset = ce.offset), en(ce.showClose) && !s.showClose && (s.showClose = ce.showClose), en(ce.plain) && !s.plain && (s.plain = ce.plain), s;
}, Eh = (t) => {
  const e = t.props.placement || Pt, s = Ae[e], n = s.indexOf(t);
  if (n === -1)
    return;
  s.splice(n, 1);
  const { handler: r } = t;
  r.close();
}, Th = ({ appendTo: t, ...e }, s) => {
  const n = `message_${wh++}`, r = e.onClose, o = document.createElement("div"), i = {
    ...e,
    id: n,
    onClose: () => {
      r == null || r(), Eh(u);
    },
    onDestroy: () => {
      Cs(null, o);
    }
  }, a = Z(bh, i, Me(i.message) || Ms(i.message) ? {
    default: Me(i.message) ? i.message : () => i.message
  } : null);
  a.appContext = s || pt._context, Cs(a, o), t.appendChild(o.firstElementChild);
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
}, pt = (t = {}, e) => {
  if (!ge)
    return { close: () => {
    } };
  const s = Ii(t), n = ph(s.placement || Pt);
  if (s.grouping && n.length) {
    const o = n.find(({ vnode: i }) => {
      var a;
      return ((a = i.props) == null ? void 0 : a.message) === s.message;
    });
    if (o)
      return o.props.repeatNum += 1, o.props.type = s.type, o.handler;
  }
  if (Ue(ce.max) && n.length >= ce.max)
    return { close: () => {
    } };
  const r = Th(s, e);
  return n.push(r), r.handler;
};
Ci.forEach((t) => {
  pt[t] = (e = {}, s) => {
    const n = Ii(e);
    return pt({ ...n, type: t }, s);
  };
});
function Ch(t) {
  for (const e in Ae)
    if (Qt(Ae, e)) {
      const s = [...Ae[e]];
      for (const n of s)
        (!t || t === n.props.type) && n.handler.close();
    }
}
function Oh(t) {
  if (!Ae[t])
    return;
  [...Ae[t]].forEach((s) => s.handler.close());
}
pt.closeAll = Ch;
pt.closeAllByPlacement = Oh;
pt._context = null;
const ms = vu(pt, "$message"), Sn = "_trap-focus-children", lt = [], io = (t) => {
  if (lt.length === 0)
    return;
  const e = lt[lt.length - 1][Sn];
  if (e.length > 0 && t.code === Vs.tab) {
    if (e.length === 1) {
      t.preventDefault(), document.activeElement !== e[0] && e[0].focus();
      return;
    }
    const s = t.shiftKey, n = t.target === e[0], r = t.target === e[e.length - 1];
    n && s && (t.preventDefault(), e[e.length - 1].focus()), r && !s && (t.preventDefault(), e[0].focus());
  }
}, Ih = {
  beforeMount(t) {
    t[Sn] = Kr(t), lt.push(t), lt.length <= 1 && document.addEventListener("keydown", io);
  },
  updated(t) {
    oe(() => {
      t[Sn] = Kr(t);
    });
  },
  unmounted() {
    lt.shift(), lt.length === 0 && document.removeEventListener("keydown", io);
  }
}, Ah = G({
  name: "ElMessageBox",
  directives: {
    TrapFocus: Ih
  },
  components: {
    ElButton: th,
    ElFocusTrap: Ed,
    ElInput: ud,
    ElOverlay: lh,
    ElIcon: xe,
    ...gi
  },
  inheritAttrs: !1,
  props: {
    buttonSize: {
      type: String,
      validator: dh
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
    } = li("message-box", O(() => t.buttonSize)), { t: i } = s, { nextZIndex: a } = n, l = j(!1), c = Bn({
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
      confirmButtonLoadingIcon: Je(Ps),
      cancelButtonLoadingIcon: Je(Ps),
      confirmButtonDisabled: !1,
      editorErrorMessage: "",
      validateError: !1,
      zIndex: a()
    }), u = O(() => {
      const U = c.type;
      return { [r.bm("icon", U)]: U && $s[U] };
    }), d = bn(), f = bn(), p = O(() => {
      const U = c.type;
      return c.icon || U && $s[U] || "";
    }), h = O(() => !!c.message), m = j(), b = j(), v = j(), S = j(), y = j(), A = O(() => c.confirmButtonClass);
    re(() => c.inputValue, async (U) => {
      await oe(), t.boxType === "prompt" && U && k();
    }, { immediate: !0 }), re(() => l.value, (U) => {
      var J, K;
      U && (t.boxType !== "prompt" && (c.autofocus ? v.value = (K = (J = y.value) == null ? void 0 : J.$el) != null ? K : m.value : v.value = m.value), c.zIndex = a()), t.boxType === "prompt" && (U ? oe().then(() => {
        var Ee;
        S.value && S.value.$el && (c.autofocus ? v.value = (Ee = x()) != null ? Ee : m.value : v.value = m.value);
      }) : (c.editorErrorMessage = "", c.validateError = !1));
    });
    const N = O(() => t.draggable), $ = O(() => t.overflow), { isDragging: I } = ch(m, b, N, $);
    Se(async () => {
      await oe(), t.closeOnHashChange && window.addEventListener("hashchange", W);
    }), os(() => {
      t.closeOnHashChange && window.removeEventListener("hashchange", W);
    });
    function W() {
      l.value && (l.value = !1, oe(() => {
        c.action && e("action", c.action);
      }));
    }
    const H = () => {
      t.closeOnClickModal && _(c.distinguishCancelAndClose ? "close" : "cancel");
    }, T = Ti(H), w = (U) => {
      if (c.inputType !== "textarea")
        return U.preventDefault(), _("confirm");
    }, _ = (U) => {
      var J;
      t.boxType === "prompt" && U === "confirm" && !k() || (c.action = U, c.beforeClose ? (J = c.beforeClose) == null || J.call(c, U, c, W) : W());
    }, k = () => {
      if (t.boxType === "prompt") {
        const U = c.inputPattern;
        if (U && !U.test(c.inputValue || ""))
          return c.editorErrorMessage = c.inputErrorMessage || i("el.messagebox.error"), c.validateError = !0, !1;
        const J = c.inputValidator;
        if (Me(J)) {
          const K = J(c.inputValue);
          if (K === !1)
            return c.editorErrorMessage = c.inputErrorMessage || i("el.messagebox.error"), c.validateError = !0, !1;
          if (be(K))
            return c.editorErrorMessage = K, c.validateError = !0, !1;
        }
      }
      return c.editorErrorMessage = "", c.validateError = !1, !0;
    }, x = () => {
      var U, J;
      const K = (U = S.value) == null ? void 0 : U.$refs;
      return (J = K == null ? void 0 : K.input) != null ? J : K == null ? void 0 : K.textarea;
    }, q = () => {
      _("close");
    }, te = () => {
      t.closeOnPressEscape && q();
    };
    return t.lockScroll && uh(l), {
      ...mn(c),
      ns: r,
      overlayEvent: T,
      visible: l,
      hasMessage: h,
      typeClass: u,
      contentId: d,
      inputId: f,
      btnSize: o,
      iconComponent: p,
      confirmButtonClasses: A,
      rootRef: m,
      focusStartRef: v,
      headerRef: b,
      inputRef: S,
      isDragging: I,
      confirmRef: y,
      doClose: W,
      handleClose: q,
      onCloseRequested: te,
      handleWrapperClick: H,
      handleInputEnter: w,
      handleAction: _,
      t: i
    };
  }
});
function Ph(t, e, s, n, r, o) {
  const i = ye("el-icon"), a = ye("el-input"), l = ye("el-button"), c = ye("el-focus-trap"), u = ye("el-overlay");
  return E(), z(Dn, {
    name: "fade-in-linear",
    onAfterLeave: (d) => t.$emit("vanish"),
    persisted: ""
  }, {
    default: M(() => [
      qt(Z(u, {
        "z-index": t.zIndex,
        "overlay-class": [t.ns.is("message-box"), t.modalClass],
        mask: t.modal
      }, {
        default: M(() => [
          P("div", {
            role: "dialog",
            "aria-label": t.title,
            "aria-modal": "true",
            "aria-describedby": t.showInput ? void 0 : t.contentId,
            class: R(`${t.ns.namespace.value}-overlay-message-box`),
            onClick: t.overlayEvent.onClick,
            onMousedown: t.overlayEvent.onMousedown,
            onMouseup: t.overlayEvent.onMouseup
          }, [
            Z(c, {
              loop: "",
              trapped: t.visible,
              "focus-trap-el": t.rootRef,
              "focus-start-el": t.focusStartRef,
              onReleaseRequested: t.onCloseRequested
            }, {
              default: M(() => [
                P("div", {
                  ref: "rootRef",
                  class: R([
                    t.ns.b(),
                    t.customClass,
                    t.ns.is("draggable", t.draggable),
                    t.ns.is("dragging", t.isDragging),
                    { [t.ns.m("center")]: t.center }
                  ]),
                  style: ht(t.customStyle),
                  tabindex: "-1",
                  onClick: Ie(() => {
                  }, ["stop"])
                }, [
                  t.title !== null && t.title !== void 0 ? (E(), L("div", {
                    key: 0,
                    ref: "headerRef",
                    class: R([t.ns.e("header"), { "show-close": t.showClose }])
                  }, [
                    P("div", {
                      class: R(t.ns.e("title"))
                    }, [
                      t.iconComponent && t.center ? (E(), z(i, {
                        key: 0,
                        class: R([t.ns.e("status"), t.typeClass])
                      }, {
                        default: M(() => [
                          (E(), z(pe(t.iconComponent)))
                        ]),
                        _: 1
                      }, 8, ["class"])) : B("v-if", !0),
                      P("span", null, Q(t.title), 1)
                    ], 2),
                    t.showClose ? (E(), L("button", {
                      key: 0,
                      type: "button",
                      class: R(t.ns.e("headerbtn")),
                      "aria-label": t.t("el.messagebox.close"),
                      onClick: (d) => t.handleAction(t.distinguishCancelAndClose ? "close" : "cancel"),
                      onKeydown: cs(Ie((d) => t.handleAction(t.distinguishCancelAndClose ? "close" : "cancel"), ["prevent"]), ["enter"])
                    }, [
                      Z(i, {
                        class: R(t.ns.e("close"))
                      }, {
                        default: M(() => [
                          (E(), z(pe(t.closeIcon || "close")))
                        ]),
                        _: 1
                      }, 8, ["class"])
                    ], 42, ["aria-label", "onClick", "onKeydown"])) : B("v-if", !0)
                  ], 2)) : B("v-if", !0),
                  P("div", {
                    id: t.contentId,
                    class: R(t.ns.e("content"))
                  }, [
                    P("div", {
                      class: R(t.ns.e("container"))
                    }, [
                      t.iconComponent && !t.center && t.hasMessage ? (E(), z(i, {
                        key: 0,
                        class: R([t.ns.e("status"), t.typeClass])
                      }, {
                        default: M(() => [
                          (E(), z(pe(t.iconComponent)))
                        ]),
                        _: 1
                      }, 8, ["class"])) : B("v-if", !0),
                      t.hasMessage ? (E(), L("div", {
                        key: 1,
                        class: R(t.ns.e("message"))
                      }, [
                        ie(t.$slots, "default", {}, () => [
                          t.dangerouslyUseHTMLString ? (E(), z(pe(t.showInput ? "label" : "p"), {
                            key: 1,
                            for: t.showInput ? t.inputId : void 0,
                            innerHTML: t.message
                          }, null, 8, ["for", "innerHTML"])) : (E(), z(pe(t.showInput ? "label" : "p"), {
                            key: 0,
                            for: t.showInput ? t.inputId : void 0,
                            textContent: Q(t.message)
                          }, null, 8, ["for", "textContent"]))
                        ])
                      ], 2)) : B("v-if", !0)
                    ], 2),
                    qt(P("div", {
                      class: R(t.ns.e("input"))
                    }, [
                      Z(a, {
                        id: t.inputId,
                        ref: "inputRef",
                        modelValue: t.inputValue,
                        "onUpdate:modelValue": (d) => t.inputValue = d,
                        type: t.inputType,
                        placeholder: t.inputPlaceholder,
                        "aria-invalid": t.validateError,
                        class: R({ invalid: t.validateError }),
                        onKeydown: cs(t.handleInputEnter, ["enter"])
                      }, null, 8, ["id", "modelValue", "onUpdate:modelValue", "type", "placeholder", "aria-invalid", "class", "onKeydown"]),
                      P("div", {
                        class: R(t.ns.e("errormsg")),
                        style: ht({
                          visibility: t.editorErrorMessage ? "visible" : "hidden"
                        })
                      }, Q(t.editorErrorMessage), 7)
                    ], 2), [
                      [Kt, t.showInput]
                    ])
                  ], 10, ["id"]),
                  P("div", {
                    class: R(t.ns.e("btns"))
                  }, [
                    t.showCancelButton ? (E(), z(l, {
                      key: 0,
                      loading: t.cancelButtonLoading,
                      "loading-icon": t.cancelButtonLoadingIcon,
                      class: R([t.cancelButtonClass]),
                      round: t.roundButton,
                      size: t.btnSize,
                      onClick: (d) => t.handleAction("cancel"),
                      onKeydown: cs(Ie((d) => t.handleAction("cancel"), ["prevent"]), ["enter"])
                    }, {
                      default: M(() => [
                        $e(Q(t.cancelButtonText || t.t("el.messagebox.cancel")), 1)
                      ]),
                      _: 1
                    }, 8, ["loading", "loading-icon", "class", "round", "size", "onClick", "onKeydown"])) : B("v-if", !0),
                    qt(Z(l, {
                      ref: "confirmRef",
                      type: "primary",
                      loading: t.confirmButtonLoading,
                      "loading-icon": t.confirmButtonLoadingIcon,
                      class: R([t.confirmButtonClasses]),
                      round: t.roundButton,
                      disabled: t.confirmButtonDisabled,
                      size: t.btnSize,
                      onClick: (d) => t.handleAction("confirm"),
                      onKeydown: cs(Ie((d) => t.handleAction("confirm"), ["prevent"]), ["enter"])
                    }, {
                      default: M(() => [
                        $e(Q(t.confirmButtonText || t.t("el.messagebox.confirm")), 1)
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
var $h = /* @__PURE__ */ et(Ah, [["render", Ph], ["__file", "index.vue"]]);
const ns = /* @__PURE__ */ new Map(), xh = (t) => {
  let e = document.body;
  return t.appendTo && (be(t.appendTo) && (e = document.querySelector(t.appendTo)), ts(t.appendTo) && (e = t.appendTo), ts(e) || (e = document.body)), e;
}, jh = (t, e, s = null) => {
  const n = Z($h, t, Me(t.message) || Ms(t.message) ? {
    default: Me(t.message) ? t.message : () => t.message
  } : null);
  return n.appContext = s, Cs(n, e), xh(t).appendChild(e.firstElementChild), n.component;
}, Nh = () => document.createElement("div"), Rh = (t, e) => {
  const s = Nh();
  t.onVanish = () => {
    Cs(null, s), ns.delete(r);
  }, t.onAction = (o) => {
    const i = ns.get(r);
    let a;
    t.showInput ? a = { value: r.inputValue, action: o } : a = o, t.callback ? t.callback(a, n.proxy) : o === "cancel" || o === "close" ? t.distinguishCancelAndClose && o !== "cancel" ? i.reject("close") : i.reject("cancel") : i.resolve(a);
  };
  const n = jh(t, s, e), r = n.proxy;
  for (const o in t)
    Qt(t, o) && !Qt(r.$props, o) && (o === "closeIcon" && $t(t[o]) ? r[o] = Je(t[o]) : r[o] = t[o]);
  return r.visible = !0, r;
};
function Nt(t, e = null) {
  if (!ge)
    return Promise.reject();
  let s;
  return be(t) || Ms(t) ? t = {
    message: t
  } : s = t.callback, new Promise((n, r) => {
    const o = Rh(t, e ?? Nt._context);
    ns.set(o, {
      options: t,
      callback: s,
      resolve: n,
      reject: r
    });
  });
}
const Lh = ["alert", "confirm", "prompt"], Mh = {
  alert: { closeOnPressEscape: !1, closeOnClickModal: !1 },
  confirm: { showCancelButton: !0 },
  prompt: { showCancelButton: !0, showInput: !0 }
};
Lh.forEach((t) => {
  Nt[t] = Uh(t);
});
function Uh(t) {
  return (e, s, n, r) => {
    let o = "";
    return $t(s) ? (n = s, o = "") : Xo(s) ? o = "" : o = s, Nt(Object.assign({
      title: o,
      message: e,
      type: "",
      ...Mh[t]
    }, n, {
      boxType: t
    }), r);
  };
}
Nt.close = () => {
  ns.forEach((t, e) => {
    e.doClose();
  }), ns.clear();
};
Nt._context = null;
const qe = Nt;
qe.install = (t) => {
  qe._context = t._context, t.config.globalProperties.$msgbox = qe, t.config.globalProperties.$messageBox = qe, t.config.globalProperties.$alert = qe.alert, t.config.globalProperties.$confirm = qe.confirm, t.config.globalProperties.$prompt = qe.prompt;
};
const ao = qe, Dh = (t) => {
  let e;
  return t ? e = t : typeof fetch > "u" ? e = (...s) => Promise.resolve().then(() => Rt).then(({ default: n }) => n(...s)) : e = fetch, (...s) => e(...s);
};
class rr extends Error {
  constructor(e, s = "FunctionsError", n) {
    super(e), this.name = s, this.context = n;
  }
}
class Bh extends rr {
  constructor(e) {
    super("Failed to send a request to the Edge Function", "FunctionsFetchError", e);
  }
}
class lo extends rr {
  constructor(e) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", e);
  }
}
class co extends rr {
  constructor(e) {
    super("Edge Function returned a non-2xx status code", "FunctionsHttpError", e);
  }
}
var En;
(function(t) {
  t.Any = "any", t.ApNortheast1 = "ap-northeast-1", t.ApNortheast2 = "ap-northeast-2", t.ApSouth1 = "ap-south-1", t.ApSoutheast1 = "ap-southeast-1", t.ApSoutheast2 = "ap-southeast-2", t.CaCentral1 = "ca-central-1", t.EuCentral1 = "eu-central-1", t.EuWest1 = "eu-west-1", t.EuWest2 = "eu-west-2", t.EuWest3 = "eu-west-3", t.SaEast1 = "sa-east-1", t.UsEast1 = "us-east-1", t.UsWest1 = "us-west-1", t.UsWest2 = "us-west-2";
})(En || (En = {}));
var Fh = globalThis && globalThis.__awaiter || function(t, e, s, n) {
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
class zh {
  constructor(e, { headers: s = {}, customFetch: n, region: r = En.Any } = {}) {
    this.url = e, this.headers = s, this.region = r, this.fetch = Dh(n);
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
    return Fh(this, void 0, void 0, function* () {
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
        }).catch((m) => {
          throw new Bh(m);
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
var fe = {}, or = {}, Ws = {}, as = {}, Hs = {}, qs = {}, Vh = function() {
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("unable to locate global object");
}, xt = Vh();
const Wh = xt.fetch, Ai = xt.fetch.bind(xt), Pi = xt.Headers, Hh = xt.Request, qh = xt.Response, Rt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Headers: Pi,
  Request: Hh,
  Response: qh,
  default: Ai,
  fetch: Wh
}, Symbol.toStringTag, { value: "Module" })), Kh = /* @__PURE__ */ sh(Rt);
var Ks = {};
Object.defineProperty(Ks, "__esModule", { value: !0 });
let Gh = class extends Error {
  constructor(e) {
    super(e.message), this.name = "PostgrestError", this.details = e.details, this.hint = e.hint, this.code = e.code;
  }
};
Ks.default = Gh;
var $i = ke && ke.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(qs, "__esModule", { value: !0 });
const Jh = $i(Kh), Yh = $i(Ks);
let Xh = class {
  constructor(e) {
    var s, n;
    this.shouldThrowOnError = !1, this.method = e.method, this.url = e.url, this.headers = new Headers(e.headers), this.schema = e.schema, this.body = e.body, this.shouldThrowOnError = (s = e.shouldThrowOnError) !== null && s !== void 0 ? s : !1, this.signal = e.signal, this.isMaybeSingle = (n = e.isMaybeSingle) !== null && n !== void 0 ? n : !1, e.fetch ? this.fetch = e.fetch : typeof fetch > "u" ? this.fetch = Jh.default : this.fetch = fetch;
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
          const S = await o.text();
          S === "" || (this.headers.get("Accept") === "text/csv" || this.headers.get("Accept") && (!((i = this.headers.get("Accept")) === null || i === void 0) && i.includes("application/vnd.pgrst.plan+text")) ? d = S : d = JSON.parse(S));
        }
        const b = (a = this.headers.get("Prefer")) === null || a === void 0 ? void 0 : a.match(/count=(exact|planned|estimated)/), v = (l = o.headers.get("content-range")) === null || l === void 0 ? void 0 : l.split("/");
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
          throw new Yh.default(u);
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
qs.default = Xh;
var Zh = ke && ke.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Hs, "__esModule", { value: !0 });
const Qh = Zh(qs);
let ef = class extends Qh.default {
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
Hs.default = ef;
var tf = ke && ke.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(as, "__esModule", { value: !0 });
const sf = tf(Hs);
let nf = class extends sf.default {
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
as.default = nf;
var rf = ke && ke.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Ws, "__esModule", { value: !0 });
const Ft = rf(as);
let of = class {
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
Ws.default = of;
var xi = ke && ke.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(or, "__esModule", { value: !0 });
const af = xi(Ws), lf = xi(as);
let cf = class ji {
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
    return new af.default(s, {
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
    return o && u.set("Prefer", `count=${o}`), new lf.default({
      method: a,
      url: l,
      headers: u,
      schema: this.schemaName,
      body: c,
      fetch: (i = this.fetch) !== null && i !== void 0 ? i : fetch
    });
  }
};
or.default = cf;
var Lt = ke && ke.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(fe, "__esModule", { value: !0 });
fe.PostgrestError = fe.PostgrestBuilder = fe.PostgrestTransformBuilder = fe.PostgrestFilterBuilder = fe.PostgrestQueryBuilder = fe.PostgrestClient = void 0;
const Ni = Lt(or);
fe.PostgrestClient = Ni.default;
const Ri = Lt(Ws);
fe.PostgrestQueryBuilder = Ri.default;
const Li = Lt(as);
fe.PostgrestFilterBuilder = Li.default;
const Mi = Lt(Hs);
fe.PostgrestTransformBuilder = Mi.default;
const Ui = Lt(qs);
fe.PostgrestBuilder = Ui.default;
const Di = Lt(Ks);
fe.PostgrestError = Di.default;
var uf = fe.default = {
  PostgrestClient: Ni.default,
  PostgrestQueryBuilder: Ri.default,
  PostgrestFilterBuilder: Li.default,
  PostgrestTransformBuilder: Mi.default,
  PostgrestBuilder: Ui.default,
  PostgrestError: Di.default
};
const {
  PostgrestClient: df,
  PostgrestQueryBuilder: Hg,
  PostgrestFilterBuilder: qg,
  PostgrestTransformBuilder: Kg,
  PostgrestBuilder: Gg,
  PostgrestError: Jg
} = uf;
class hf {
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
const ff = "2.15.4", pf = `realtime-js/${ff}`, gf = "1.0.0", Tn = 1e4, vf = 1e3, mf = 100;
var Jt;
(function(t) {
  t[t.connecting = 0] = "connecting", t[t.open = 1] = "open", t[t.closing = 2] = "closing", t[t.closed = 3] = "closed";
})(Jt || (Jt = {}));
var se;
(function(t) {
  t.closed = "closed", t.errored = "errored", t.joined = "joined", t.joining = "joining", t.leaving = "leaving";
})(se || (se = {}));
var Oe;
(function(t) {
  t.close = "phx_close", t.error = "phx_error", t.join = "phx_join", t.reply = "phx_reply", t.leave = "phx_leave", t.access_token = "access_token";
})(Oe || (Oe = {}));
var Cn;
(function(t) {
  t.websocket = "websocket";
})(Cn || (Cn = {}));
var it;
(function(t) {
  t.Connecting = "connecting", t.Open = "open", t.Closing = "closing", t.Closed = "closed";
})(it || (it = {}));
class yf {
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
var X;
(function(t) {
  t.abstime = "abstime", t.bool = "bool", t.date = "date", t.daterange = "daterange", t.float4 = "float4", t.float8 = "float8", t.int2 = "int2", t.int4 = "int4", t.int4range = "int4range", t.int8 = "int8", t.int8range = "int8range", t.json = "json", t.jsonb = "jsonb", t.money = "money", t.numeric = "numeric", t.oid = "oid", t.reltime = "reltime", t.text = "text", t.time = "time", t.timestamp = "timestamp", t.timestamptz = "timestamptz", t.timetz = "timetz", t.tsrange = "tsrange", t.tstzrange = "tstzrange";
})(X || (X = {}));
const uo = (t, e, s = {}) => {
  var n;
  const r = (n = s.skipTypes) !== null && n !== void 0 ? n : [];
  return Object.keys(e).reduce((o, i) => (o[i] = _f(i, t, e, r), o), {});
}, _f = (t, e, s, n) => {
  const r = e.find((a) => a.name === t), o = r == null ? void 0 : r.type, i = s[t];
  return o && !n.includes(o) ? Fi(o, i) : On(i);
}, Fi = (t, e) => {
  if (t.charAt(0) === "_") {
    const s = t.slice(1, t.length);
    return Sf(e, s);
  }
  switch (t) {
    case X.bool:
      return bf(e);
    case X.float4:
    case X.float8:
    case X.int2:
    case X.int4:
    case X.int8:
    case X.numeric:
    case X.oid:
      return wf(e);
    case X.json:
    case X.jsonb:
      return kf(e);
    case X.timestamp:
      return Ef(e);
    case X.abstime:
    case X.date:
    case X.daterange:
    case X.int4range:
    case X.int8range:
    case X.money:
    case X.reltime:
    case X.text:
    case X.time:
    case X.timestamptz:
    case X.timetz:
    case X.tsrange:
    case X.tstzrange:
      return On(e);
    default:
      return On(e);
  }
}, On = (t) => t, bf = (t) => {
  switch (t) {
    case "t":
      return !0;
    case "f":
      return !1;
    default:
      return t;
  }
}, wf = (t) => {
  if (typeof t == "string") {
    const e = parseFloat(t);
    if (!Number.isNaN(e))
      return e;
  }
  return t;
}, kf = (t) => {
  if (typeof t == "string")
    try {
      return JSON.parse(t);
    } catch (e) {
      return console.log(`JSON parse error: ${e}`), t;
    }
  return t;
}, Sf = (t, e) => {
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
}, Ef = (t) => typeof t == "string" ? t.replace(" ", "T") : t, zi = (t) => {
  let e = t;
  return e = e.replace(/^ws/i, "http"), e = e.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, ""), e.replace(/\/+$/, "") + "/api/broadcast";
};
class ln {
  /**
   * Initializes the Push
   *
   * @param channel The Channel
   * @param event The event, for example `"phx_join"`
   * @param payload The payload, for example `{user_id: 123}`
   * @param timeout The push timeout in milliseconds
   */
  constructor(e, s, n = {}, r = Tn) {
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
        const f = u.map((b) => b.presence_ref), p = d.map((b) => b.presence_ref), h = u.filter((b) => p.indexOf(b.presence_ref) < 0), m = d.filter((b) => f.indexOf(b.presence_ref) < 0);
        h.length > 0 && (a[c] = h), m.length > 0 && (l[c] = m);
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
var Le;
(function(t) {
  t.SUBSCRIBED = "SUBSCRIBED", t.TIMED_OUT = "TIMED_OUT", t.CLOSED = "CLOSED", t.CHANNEL_ERROR = "CHANNEL_ERROR";
})(Le || (Le = {}));
class ir {
  constructor(e, s = { config: {} }, n) {
    this.topic = e, this.params = s, this.socket = n, this.bindings = {}, this.state = se.closed, this.joinedOnce = !1, this.pushBuffer = [], this.subTopic = e.replace(/^realtime:/i, ""), this.params.config = Object.assign({
      broadcast: { ack: !1, self: !1 },
      presence: { key: "", enabled: !1 },
      private: !1
    }, s.config), this.timeout = this.socket.timeout, this.joinPush = new ln(this, Oe.join, this.params, this.timeout), this.rejoinTimer = new Bi(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs), this.joinPush.receive("ok", () => {
      this.state = se.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((r) => r.send()), this.pushBuffer = [];
    }), this._onClose(() => {
      this.rejoinTimer.reset(), this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`), this.state = se.closed, this.socket._remove(this);
    }), this._onError((r) => {
      this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, r), this.state = se.errored, this.rejoinTimer.scheduleTimeout());
    }), this.joinPush.receive("timeout", () => {
      this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), this.state = se.errored, this.rejoinTimer.scheduleTimeout());
    }), this.joinPush.receive("error", (r) => {
      this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, r), this.state = se.errored, this.rejoinTimer.scheduleTimeout());
    }), this._on(Oe.reply, {}, (r, o) => {
      this._trigger(this._replyEventName(o), r);
    }), this.presence = new Yt(this), this.broadcastEndpointURL = zi(this.socket.endPoint), this.private = this.params.config.private || !1;
  }
  /** Subscribe registers your client with the server */
  subscribe(e, s = this.timeout) {
    var n, r, o;
    if (this.socket.isConnected() || this.socket.connect(), this.state == se.closed) {
      const { config: { broadcast: i, presence: a, private: l } } = this.params, c = (r = (n = this.bindings.postgres_changes) === null || n === void 0 ? void 0 : n.map((p) => p.filter)) !== null && r !== void 0 ? r : [], u = !!this.bindings[Xt.PRESENCE] && this.bindings[Xt.PRESENCE].length > 0 || ((o = this.params.config.presence) === null || o === void 0 ? void 0 : o.enabled) === !0, d = {}, f = {
        broadcast: i,
        presence: Object.assign(Object.assign({}, a), { enabled: u }),
        postgres_changes: c,
        private: l
      };
      this.socket.accessTokenValue && (d.access_token = this.socket.accessTokenValue), this._onError((p) => e == null ? void 0 : e(Le.CHANNEL_ERROR, p)), this._onClose(() => e == null ? void 0 : e(Le.CLOSED)), this.updateJoinPayload(Object.assign({ config: f }, d)), this.joinedOnce = !0, this._rejoin(s), this.joinPush.receive("ok", async ({ postgres_changes: p }) => {
        var h;
        if (this.socket.setAuth(), p === void 0) {
          e == null || e(Le.SUBSCRIBED);
          return;
        } else {
          const m = this.bindings.postgres_changes, b = (h = m == null ? void 0 : m.length) !== null && h !== void 0 ? h : 0, v = [];
          for (let S = 0; S < b; S++) {
            const y = m[S], { filter: { event: A, schema: N, table: $, filter: I } } = y, W = p && p[S];
            if (W && W.event === A && W.schema === N && W.table === $ && W.filter === I)
              v.push(Object.assign(Object.assign({}, y), { id: W.id }));
            else {
              this.unsubscribe(), this.state = se.errored, e == null || e(Le.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
              return;
            }
          }
          this.bindings.postgres_changes = v, e && e(Le.SUBSCRIBED);
          return;
        }
      }).receive("error", (p) => {
        this.state = se.errored, e == null || e(Le.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(p).join(", ") || "error")));
      }).receive("timeout", () => {
        e == null || e(Le.TIMED_OUT);
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
    return this.state === se.joined && e === Xt.PRESENCE && (this.socket.log("channel", `resubscribe to ${this.topic} due to change in presence callbacks on joined channel`), this.unsubscribe().then(() => this.subscribe())), this._on(e, s, n);
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
    this.state = se.leaving;
    const s = () => {
      this.socket.log("channel", `leave ${this.topic}`), this._trigger(Oe.close, "leave", this._joinRef());
    };
    this.joinPush.destroy();
    let n = null;
    return new Promise((r) => {
      n = new ln(this, Oe.leave, {}, e), n.receive("ok", () => {
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
    const r = new AbortController(), o = setTimeout(() => r.abort(), n), i = await this.socket.fetch(e, Object.assign(Object.assign({}, s), { signal: r.signal }));
    return clearTimeout(o), i;
  }
  /** @internal */
  _push(e, s, n = this.timeout) {
    if (!this.joinedOnce)
      throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    let r = new ln(this, e, s, n);
    return this._canPush() ? r.send() : this._addToPushBuffer(r), r;
  }
  /** @internal */
  _addToPushBuffer(e) {
    if (e.startTimeout(), this.pushBuffer.push(e), this.pushBuffer.length > mf) {
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
    const i = e.toLocaleLowerCase(), { close: a, error: l, leave: c, join: u } = Oe;
    if (n && [a, l, c, u].indexOf(i) >= 0 && n !== this._joinRef())
      return;
    let f = this._onMessage(i, s, n);
    if (s && !f)
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    ["insert", "update", "delete"].includes(i) ? (r = this.bindings.postgres_changes) === null || r === void 0 || r.filter((p) => {
      var h, m, b;
      return ((h = p.filter) === null || h === void 0 ? void 0 : h.event) === "*" || ((b = (m = p.filter) === null || m === void 0 ? void 0 : m.event) === null || b === void 0 ? void 0 : b.toLocaleLowerCase()) === i;
    }).map((p) => p.callback(f, n)) : (o = this.bindings[i]) === null || o === void 0 || o.filter((p) => {
      var h, m, b, v, S, y;
      if (["broadcast", "presence", "postgres_changes"].includes(i))
        if ("id" in p) {
          const A = p.id, N = (h = p.filter) === null || h === void 0 ? void 0 : h.event;
          return A && ((m = s.ids) === null || m === void 0 ? void 0 : m.includes(A)) && (N === "*" || (N == null ? void 0 : N.toLocaleLowerCase()) === ((b = s.data) === null || b === void 0 ? void 0 : b.type.toLocaleLowerCase()));
        } else {
          const A = (S = (v = p == null ? void 0 : p.filter) === null || v === void 0 ? void 0 : v.event) === null || S === void 0 ? void 0 : S.toLocaleLowerCase();
          return A === "*" || A === ((y = s == null ? void 0 : s.event) === null || y === void 0 ? void 0 : y.toLocaleLowerCase());
        }
      else
        return p.type.toLocaleLowerCase() === i;
    }).map((p) => {
      if (typeof f == "object" && "ids" in f) {
        const h = f.data, { schema: m, table: b, commit_timestamp: v, type: S, errors: y } = h;
        f = Object.assign(Object.assign({}, {
          schema: m,
          table: b,
          commit_timestamp: v,
          eventType: S,
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
      return !(((o = r.type) === null || o === void 0 ? void 0 : o.toLocaleLowerCase()) === n && ir.isEqual(r.filter, s));
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
    this._on(Oe.close, {}, e);
  }
  /**
   * Registers a callback that will be executed when the channel encounteres an error.
   *
   * @internal
   */
  _onError(e) {
    this._on(Oe.error, {}, (s) => e(s));
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
    return (e.type === "INSERT" || e.type === "UPDATE") && (s.new = uo(e.columns, e.record)), (e.type === "UPDATE" || e.type === "DELETE") && (s.old = uo(e.columns, e.old_record)), s;
  }
}
const cn = () => {
}, ys = {
  HEARTBEAT_INTERVAL: 25e3,
  RECONNECT_DELAY: 10,
  HEARTBEAT_TIMEOUT_FALLBACK: 100
}, Tf = [1e3, 2e3, 5e3, 1e4], Cf = 1e4, Of = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class If {
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
    if (this.accessTokenValue = null, this.apiKey = null, this.channels = new Array(), this.endPoint = "", this.httpEndpoint = "", this.headers = {}, this.params = {}, this.timeout = Tn, this.transport = null, this.heartbeatIntervalMs = ys.HEARTBEAT_INTERVAL, this.heartbeatTimer = void 0, this.pendingHeartbeatRef = null, this.heartbeatCallback = cn, this.ref = 0, this.reconnectTimer = null, this.logger = cn, this.conn = null, this.sendBuffer = [], this.serializer = new yf(), this.stateChangeCallbacks = {
      open: [],
      close: [],
      error: [],
      message: []
    }, this.accessToken = null, this._connectionState = "disconnected", this._wasManualDisconnect = !1, this._authPromise = null, this._resolveFetch = (r) => {
      let o;
      return r ? o = r : typeof fetch > "u" ? o = (...i) => Promise.resolve().then(() => Rt).then(({ default: a }) => a(...i)).catch((a) => {
        throw new Error(`Failed to load @supabase/node-fetch: ${a.message}. This is required for HTTP requests in Node.js environments without native fetch.`);
      }) : o = fetch, (...i) => o(...i);
    }, !(!((n = s == null ? void 0 : s.params) === null || n === void 0) && n.apikey))
      throw new Error("API key is required to connect to Realtime");
    this.apiKey = s.params.apikey, this.endPoint = `${e}/${Cn.websocket}`, this.httpEndpoint = zi(e), this._initializeOptions(s), this._setupReconnectionTimer(), this.fetch = this._resolveFetch(s == null ? void 0 : s.fetch);
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
          this.conn = hf.createWebSocket(this.endpointURL());
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
    return this._appendParams(this.endPoint, Object.assign({}, this.params, { vsn: gf }));
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
        return it.Connecting;
      case Jt.open:
        return it.Open;
      case Jt.closing:
        return it.Closing;
      default:
        return it.Closed;
    }
  }
  /**
   * Returns `true` is the connection is open.
   */
  isConnected() {
    return this.connectionState() === it.Open;
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
      const o = new ir(`realtime:${e}`, s, this);
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
      this._wasManualDisconnect = !1, (e = this.conn) === null || e === void 0 || e.close(vf, "heartbeat timeout"), setTimeout(() => {
        var s;
        this.isConnected() || (s = this.reconnectTimer) === null || s === void 0 || s.scheduleTimeout();
      }, ys.HEARTBEAT_TIMEOUT_FALLBACK);
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
    this.channels.forEach((e) => e._trigger(Oe.error));
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
      const n = new Blob([Of], { type: "application/javascript" });
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
        version: pf
      };
      s && n.updateJoinPayload(r), n.joinedOnce && n._isJoined() && n._push(Oe.access_token, {
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
      }, ys.RECONNECT_DELAY);
    }, this.reconnectAfterMs);
  }
  /**
   * Initialize client options with defaults
   * @internal
   */
  _initializeOptions(e) {
    var s, n, r, o, i, a, l, c, u;
    if (this.transport = (s = e == null ? void 0 : e.transport) !== null && s !== void 0 ? s : null, this.timeout = (n = e == null ? void 0 : e.timeout) !== null && n !== void 0 ? n : Tn, this.heartbeatIntervalMs = (r = e == null ? void 0 : e.heartbeatIntervalMs) !== null && r !== void 0 ? r : ys.HEARTBEAT_INTERVAL, this.worker = (o = e == null ? void 0 : e.worker) !== null && o !== void 0 ? o : !1, this.accessToken = (i = e == null ? void 0 : e.accessToken) !== null && i !== void 0 ? i : null, this.heartbeatCallback = (a = e == null ? void 0 : e.heartbeatCallback) !== null && a !== void 0 ? a : cn, e != null && e.params && (this.params = e.params), e != null && e.logger && (this.logger = e.logger), (e != null && e.logLevel || e != null && e.log_level) && (this.logLevel = e.logLevel || e.log_level, this.params = Object.assign(Object.assign({}, this.params), { log_level: this.logLevel })), this.reconnectAfterMs = (l = e == null ? void 0 : e.reconnectAfterMs) !== null && l !== void 0 ? l : (d) => Tf[d - 1] || Cf, this.encode = (c = e == null ? void 0 : e.encode) !== null && c !== void 0 ? c : (d, f) => f(JSON.stringify(d)), this.decode = (u = e == null ? void 0 : e.decode) !== null && u !== void 0 ? u : this.serializer.decode.bind(this.serializer), this.worker) {
      if (typeof window < "u" && !window.Worker)
        throw new Error("Web Worker is not supported");
      this.workerUrl = e == null ? void 0 : e.workerUrl;
    }
  }
}
class ar extends Error {
  constructor(e) {
    super(e), this.__isStorageError = !0, this.name = "StorageError";
  }
}
function ne(t) {
  return typeof t == "object" && t !== null && "__isStorageError" in t;
}
class Af extends ar {
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
class In extends ar {
  constructor(e, s) {
    super(e), this.name = "StorageUnknownError", this.originalError = s;
  }
}
var Pf = globalThis && globalThis.__awaiter || function(t, e, s, n) {
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
  return t ? e = t : typeof fetch > "u" ? e = (...s) => Promise.resolve().then(() => Rt).then(({ default: n }) => n(...s)) : e = fetch, (...s) => e(...s);
}, $f = () => Pf(void 0, void 0, void 0, function* () {
  return typeof Response > "u" ? (yield Promise.resolve().then(() => Rt)).Response : Response;
}), An = (t) => {
  if (Array.isArray(t))
    return t.map((s) => An(s));
  if (typeof t == "function" || t !== Object(t))
    return t;
  const e = {};
  return Object.entries(t).forEach(([s, n]) => {
    const r = s.replace(/([-_][a-z])/gi, (o) => o.toUpperCase().replace(/[-_]/g, ""));
    e[r] = An(n);
  }), e;
}, xf = (t) => {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
};
var yt = globalThis && globalThis.__awaiter || function(t, e, s, n) {
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
const un = (t) => t.msg || t.message || t.error_description || t.error || JSON.stringify(t), jf = (t, e, s) => yt(void 0, void 0, void 0, function* () {
  const n = yield $f();
  t instanceof n && !(s != null && s.noResolveJson) ? t.json().then((r) => {
    const o = t.status || 500, i = (r == null ? void 0 : r.statusCode) || o + "";
    e(new Af(un(r), o, i));
  }).catch((r) => {
    e(new In(un(r), r));
  }) : e(new In(un(t), t));
}), Nf = (t, e, s, n) => {
  const r = { method: t, headers: (e == null ? void 0 : e.headers) || {} };
  return t === "GET" || !n ? r : (xf(n) ? (r.headers = Object.assign({ "Content-Type": "application/json" }, e == null ? void 0 : e.headers), r.body = JSON.stringify(n)) : r.body = n, e != null && e.duplex && (r.duplex = e.duplex), Object.assign(Object.assign({}, r), s));
};
function ls(t, e, s, n, r, o) {
  return yt(this, void 0, void 0, function* () {
    return new Promise((i, a) => {
      t(s, Nf(e, n, r, o)).then((l) => {
        if (!l.ok)
          throw l;
        return n != null && n.noResolveJson ? l : l.json();
      }).then((l) => i(l)).catch((l) => jf(l, a, n));
    });
  });
}
function xs(t, e, s, n) {
  return yt(this, void 0, void 0, function* () {
    return ls(t, "GET", e, s, n);
  });
}
function Pe(t, e, s, n, r) {
  return yt(this, void 0, void 0, function* () {
    return ls(t, "POST", e, n, r, s);
  });
}
function Pn(t, e, s, n, r) {
  return yt(this, void 0, void 0, function* () {
    return ls(t, "PUT", e, n, r, s);
  });
}
function Rf(t, e, s, n) {
  return yt(this, void 0, void 0, function* () {
    return ls(t, "HEAD", e, Object.assign(Object.assign({}, s), { noResolveJson: !0 }), n);
  });
}
function Wi(t, e, s, n, r) {
  return yt(this, void 0, void 0, function* () {
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
const Lf = {
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
class Mf {
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
        const c = this._removeEmptyFolders(s), u = this._getFinalPath(c), d = yield (e == "PUT" ? Pn : Pe)(this.fetch, `${this.url}/object/${u}`, o, Object.assign({ headers: a }, i != null && i.duplex ? { duplex: i.duplex } : {}));
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
      const o = this._removeEmptyFolders(e), i = this._getFinalPath(o), a = new URL(this.url + `/object/upload/sign/${i}`);
      a.searchParams.set("token", s);
      try {
        let l;
        const c = Object.assign({ upsert: po.upsert }, r), u = Object.assign(Object.assign({}, this.headers), { "x-upsert": String(c.upsert) });
        typeof Blob < "u" && n instanceof Blob ? (l = new FormData(), l.append("cacheControl", c.cacheControl), l.append("", n)) : typeof FormData < "u" && n instanceof FormData ? (l = n, l.append("cacheControl", c.cacheControl)) : (l = n, u["cache-control"] = `max-age=${c.cacheControl}`, u["content-type"] = c.contentType);
        const d = yield Pn(this.fetch, a.toString(), l, { headers: u });
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
        const o = yield Pe(this.fetch, `${this.url}/object/upload/sign/${n}`, {}, { headers: r }), i = new URL(this.url + o.url), a = i.searchParams.get("token");
        if (!a)
          throw new ar("No token returned by API");
        return { data: { signedUrl: i.toString(), path: e, token: a }, error: null };
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
        return { data: yield Pe(this.fetch, `${this.url}/object/move`, {
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
        return { data: { path: (yield Pe(this.fetch, `${this.url}/object/copy`, {
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
        let r = this._getFinalPath(e), o = yield Pe(this.fetch, `${this.url}/object/sign/${r}`, Object.assign({ expiresIn: s }, n != null && n.transform ? { transform: n.transform } : {}), { headers: this.headers });
        const i = n != null && n.download ? `&download=${n.download === !0 ? "" : n.download}` : "";
        return o = { signedUrl: encodeURI(`${this.url}${o.signedURL}${i}`) }, { data: o, error: null };
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
        const r = yield Pe(this.fetch, `${this.url}/object/sign/${this.bucketId}`, { expiresIn: s, paths: e }, { headers: this.headers }), o = n != null && n.download ? `&download=${n.download === !0 ? "" : n.download}` : "";
        return {
          data: r.map((i) => Object.assign(Object.assign({}, i), { signedUrl: i.signedURL ? encodeURI(`${this.url}${i.signedURL}${o}`) : null })),
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
      const r = typeof (s == null ? void 0 : s.transform) < "u" ? "render/image/authenticated" : "object", o = this.transformOptsToQueryString((s == null ? void 0 : s.transform) || {}), i = o ? `?${o}` : "";
      try {
        const a = this._getFinalPath(e);
        return { data: yield (yield xs(this.fetch, `${this.url}/${r}/${a}${i}`, {
          headers: this.headers,
          noResolveJson: !0
        })).blob(), error: null };
      } catch (a) {
        if (ne(a))
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
        const n = yield xs(this.fetch, `${this.url}/object/info/${s}`, {
          headers: this.headers
        });
        return { data: An(n), error: null };
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
        return yield Rf(this.fetch, `${this.url}/object/${s}`, {
          headers: this.headers
        }), { data: !0, error: null };
      } catch (n) {
        if (ne(n) && n instanceof In) {
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
        const r = Object.assign(Object.assign(Object.assign({}, Lf), s), { prefix: e || "" });
        return { data: yield Pe(this.fetch, `${this.url}/object/list/${this.bucketId}`, r, { headers: this.headers }, n), error: null };
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
        return { data: yield Pe(this.fetch, `${this.url}/object/list-v2/${this.bucketId}`, n, { headers: this.headers }, s), error: null };
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
const Uf = "2.11.0", Df = { "X-Client-Info": `storage-js/${Uf}` };
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
class Bf {
  constructor(e, s = {}, n, r) {
    const o = new URL(e);
    r != null && r.useNewHostname && /supabase\.(co|in|red)$/.test(o.hostname) && !o.hostname.includes("storage.supabase.") && (o.hostname = o.hostname.replace("supabase.", "storage.supabase.")), this.url = o.href, this.headers = Object.assign(Object.assign({}, Df), s), this.fetch = Vi(n);
  }
  /**
   * Retrieves the details of all Storage buckets within an existing project.
   */
  listBuckets() {
    return bt(this, void 0, void 0, function* () {
      try {
        return { data: yield xs(this.fetch, `${this.url}/bucket`, { headers: this.headers }), error: null };
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
    return bt(this, void 0, void 0, function* () {
      try {
        return { data: yield xs(this.fetch, `${this.url}/bucket/${e}`, { headers: this.headers }), error: null };
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
    return bt(this, void 0, void 0, function* () {
      try {
        return { data: yield Pe(this.fetch, `${this.url}/bucket`, {
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
    return bt(this, void 0, void 0, function* () {
      try {
        return { data: yield Pn(this.fetch, `${this.url}/bucket/${e}`, {
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
    return bt(this, void 0, void 0, function* () {
      try {
        return { data: yield Pe(this.fetch, `${this.url}/bucket/${e}/empty`, {}, { headers: this.headers }), error: null };
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
    return bt(this, void 0, void 0, function* () {
      try {
        return { data: yield Wi(this.fetch, `${this.url}/bucket/${e}`, {}, { headers: this.headers }), error: null };
      } catch (s) {
        if (ne(s))
          return { data: null, error: s };
        throw s;
      }
    });
  }
}
class Ff extends Bf {
  constructor(e, s = {}, n, r) {
    super(e, s, n, r);
  }
  /**
   * Perform file operation in a bucket.
   *
   * @param id The bucket id to operate on.
   */
  from(e) {
    return new Mf(this.url, this.headers, e, this.fetch);
  }
}
const zf = "2.57.0";
let zt = "";
typeof Deno < "u" ? zt = "deno" : typeof document < "u" ? zt = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? zt = "react-native" : zt = "node";
const Vf = { "X-Client-Info": `supabase-js-${zt}/${zf}` }, Wf = {
  headers: Vf
}, Hf = {
  schema: "public"
}, qf = {
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  flowType: "implicit"
}, Kf = {};
var Gf = globalThis && globalThis.__awaiter || function(t, e, s, n) {
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
const Jf = (t) => {
  let e;
  return t ? e = t : typeof fetch > "u" ? e = Ai : e = fetch, (...s) => e(...s);
}, Yf = () => typeof Headers > "u" ? Pi : Headers, Xf = (t, e, s) => {
  const n = Jf(s), r = Yf();
  return (o, i) => Gf(void 0, void 0, void 0, function* () {
    var a;
    const l = (a = yield e()) !== null && a !== void 0 ? a : t;
    let c = new r(i == null ? void 0 : i.headers);
    return c.has("apikey") || c.set("apikey", t), c.has("Authorization") || c.set("Authorization", `Bearer ${l}`), n(o, Object.assign(Object.assign({}, i), { headers: c }));
  });
};
var Zf = globalThis && globalThis.__awaiter || function(t, e, s, n) {
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
function Qf(t) {
  return t.endsWith("/") ? t : t + "/";
}
function ep(t, e) {
  var s, n;
  const { db: r, auth: o, realtime: i, global: a } = t, { db: l, auth: c, realtime: u, global: d } = e, f = {
    db: Object.assign(Object.assign({}, l), r),
    auth: Object.assign(Object.assign({}, c), o),
    realtime: Object.assign(Object.assign({}, u), i),
    storage: {},
    global: Object.assign(Object.assign(Object.assign({}, d), a), { headers: Object.assign(Object.assign({}, (s = d == null ? void 0 : d.headers) !== null && s !== void 0 ? s : {}), (n = a == null ? void 0 : a.headers) !== null && n !== void 0 ? n : {}) }),
    accessToken: () => Zf(this, void 0, void 0, function* () {
      return "";
    })
  };
  return t.accessToken ? f.accessToken = t.accessToken : delete f.accessToken, f;
}
const Hi = "2.71.1", Ot = 30 * 1e3, $n = 3, dn = $n * Ot, tp = "http://localhost:9999", sp = "supabase.auth.token", np = { "X-Client-Info": `gotrue-js/${Hi}` }, xn = "X-Supabase-Api-Version", qi = {
  "2024-01-01": {
    timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
    name: "2024-01-01"
  }
}, rp = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i, op = 10 * 60 * 1e3;
class lr extends Error {
  constructor(e, s, n) {
    super(e), this.__isAuthError = !0, this.name = "AuthError", this.status = s, this.code = n;
  }
}
function D(t) {
  return typeof t == "object" && t !== null && "__isAuthError" in t;
}
class ip extends lr {
  constructor(e, s, n) {
    super(e, s, n), this.name = "AuthApiError", this.status = s, this.code = n;
  }
}
function ap(t) {
  return D(t) && t.name === "AuthApiError";
}
class Ki extends lr {
  constructor(e, s) {
    super(e), this.name = "AuthUnknownError", this.originalError = s;
  }
}
class tt extends lr {
  constructor(e, s, n, r) {
    super(e, n, r), this.name = s, this.status = n;
  }
}
class Ke extends tt {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
function lp(t) {
  return D(t) && t.name === "AuthSessionMissingError";
}
class _s extends tt {
  constructor() {
    super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0);
  }
}
class bs extends tt {
  constructor(e) {
    super(e, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class ws extends tt {
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
function cp(t) {
  return D(t) && t.name === "AuthImplicitGrantRedirectError";
}
class go extends tt {
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
class jn extends tt {
  constructor(e, s) {
    super(e, "AuthRetryableFetchError", s, void 0);
  }
}
function hn(t) {
  return D(t) && t.name === "AuthRetryableFetchError";
}
class vo extends tt {
  constructor(e, s, n) {
    super(e, "AuthWeakPasswordError", s, "weak_password"), this.reasons = n;
  }
}
class Nn extends tt {
  constructor(e) {
    super(e, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
}
const js = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""), mo = ` 	
\r=`.split(""), up = (() => {
  const t = new Array(128);
  for (let e = 0; e < t.length; e += 1)
    t[e] = -1;
  for (let e = 0; e < mo.length; e += 1)
    t[mo[e].charCodeAt(0)] = -2;
  for (let e = 0; e < js.length; e += 1)
    t[js[e].charCodeAt(0)] = e;
  return t;
})();
function yo(t, e, s) {
  if (t !== null)
    for (e.queue = e.queue << 8 | t, e.queuedBits += 8; e.queuedBits >= 6; ) {
      const n = e.queue >> e.queuedBits - 6 & 63;
      s(js[n]), e.queuedBits -= 6;
    }
  else if (e.queuedBits > 0)
    for (e.queue = e.queue << 6 - e.queuedBits, e.queuedBits = 6; e.queuedBits >= 6; ) {
      const n = e.queue >> e.queuedBits - 6 & 63;
      s(js[n]), e.queuedBits -= 6;
    }
}
function Gi(t, e, s) {
  const n = up[t];
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
    fp(i, n, s);
  };
  for (let i = 0; i < t.length; i += 1)
    Gi(t.charCodeAt(i), r, o);
  return e.join("");
}
function dp(t, e) {
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
function hp(t, e) {
  for (let s = 0; s < t.length; s += 1) {
    let n = t.charCodeAt(s);
    if (n > 55295 && n <= 56319) {
      const r = (n - 55296) * 1024 & 65535;
      n = (t.charCodeAt(s + 1) - 56320 & 65535 | r) + 65536, s += 1;
    }
    dp(n, e);
  }
}
function fp(t, e, s) {
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
function pp(t) {
  const e = [], s = { queue: 0, queuedBits: 0 }, n = (r) => {
    e.push(r);
  };
  for (let r = 0; r < t.length; r += 1)
    Gi(t.charCodeAt(r), s, n);
  return new Uint8Array(e);
}
function gp(t) {
  const e = [];
  return hp(t, (s) => e.push(s)), new Uint8Array(e);
}
function vp(t) {
  const e = [], s = { queue: 0, queuedBits: 0 }, n = (r) => {
    e.push(r);
  };
  return t.forEach((r) => yo(r, s, n)), yo(null, s, n), e.join("");
}
function mp(t) {
  return Math.round(Date.now() / 1e3) + t;
}
function yp() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
    const e = Math.random() * 16 | 0;
    return (t == "x" ? e : e & 3 | 8).toString(16);
  });
}
const Ce = () => typeof window < "u" && typeof document < "u", nt = {
  tested: !1,
  writable: !1
}, Ji = () => {
  if (!Ce())
    return !1;
  try {
    if (typeof globalThis.localStorage != "object")
      return !1;
  } catch {
    return !1;
  }
  if (nt.tested)
    return nt.writable;
  const t = `lswt-${Math.random()}${Math.random()}`;
  try {
    globalThis.localStorage.setItem(t, t), globalThis.localStorage.removeItem(t), nt.tested = !0, nt.writable = !0;
  } catch {
    nt.tested = !0, nt.writable = !1;
  }
  return nt.writable;
};
function _p(t) {
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
  return t ? e = t : typeof fetch > "u" ? e = (...s) => Promise.resolve().then(() => Rt).then(({ default: n }) => n(...s)) : e = fetch, (...s) => e(...s);
}, bp = (t) => typeof t == "object" && t !== null && "status" in t && "ok" in t && "json" in t && typeof t.json == "function", It = async (t, e, s) => {
  await t.setItem(e, JSON.stringify(s));
}, rt = async (t, e) => {
  const s = await t.getItem(e);
  if (!s)
    return null;
  try {
    return JSON.parse(s);
  } catch {
    return s;
  }
}, We = async (t, e) => {
  await t.removeItem(e);
};
class Gs {
  constructor() {
    this.promise = new Gs.promiseConstructor((e, s) => {
      this.resolve = e, this.reject = s;
    });
  }
}
Gs.promiseConstructor = Promise;
function fn(t) {
  const e = t.split(".");
  if (e.length !== 3)
    throw new Nn("Invalid JWT structure");
  for (let n = 0; n < e.length; n++)
    if (!rp.test(e[n]))
      throw new Nn("JWT not in base64url format");
  return {
    // using base64url lib
    header: JSON.parse(_o(e[0])),
    payload: JSON.parse(_o(e[1])),
    signature: pp(e[2]),
    raw: {
      header: e[0],
      payload: e[1]
    }
  };
}
async function wp(t) {
  return await new Promise((e) => {
    setTimeout(() => e(null), t);
  });
}
function kp(t, e) {
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
function Sp(t) {
  return ("0" + t.toString(16)).substr(-2);
}
function Ep() {
  const e = new Uint32Array(56);
  if (typeof crypto > "u") {
    const s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~", n = s.length;
    let r = "";
    for (let o = 0; o < 56; o++)
      r += s.charAt(Math.floor(Math.random() * n));
    return r;
  }
  return crypto.getRandomValues(e), Array.from(e, Sp).join("");
}
async function Tp(t) {
  const s = new TextEncoder().encode(t), n = await crypto.subtle.digest("SHA-256", s), r = new Uint8Array(n);
  return Array.from(r).map((o) => String.fromCharCode(o)).join("");
}
async function Cp(t) {
  if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u"))
    return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), t;
  const s = await Tp(t);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function wt(t, e, s = !1) {
  const n = Ep();
  let r = n;
  s && (r += "/PASSWORD_RECOVERY"), await It(t, `${e}-code-verifier`, r);
  const o = await Cp(n);
  return [o, n === o ? "plain" : "s256"];
}
const Op = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function Ip(t) {
  const e = t.headers.get(xn);
  if (!e || !e.match(Op))
    return null;
  try {
    return /* @__PURE__ */ new Date(`${e}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function Ap(t) {
  if (!t)
    throw new Error("Missing exp claim");
  const e = Math.floor(Date.now() / 1e3);
  if (t <= e)
    throw new Error("JWT has expired");
}
function Pp(t) {
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
const $p = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function kt(t) {
  if (!$p.test(t))
    throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not");
}
function pn() {
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
var xp = globalThis && globalThis.__rest || function(t, e) {
  var s = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (s[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, n = Object.getOwnPropertySymbols(t); r < n.length; r++)
      e.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[r]) && (s[n[r]] = t[n[r]]);
  return s;
};
const ot = (t) => t.msg || t.message || t.error_description || t.error || JSON.stringify(t), jp = [502, 503, 504];
async function wo(t) {
  var e;
  if (!bp(t))
    throw new jn(ot(t), 0);
  if (jp.includes(t.status))
    throw new jn(ot(t), t.status);
  let s;
  try {
    s = await t.json();
  } catch (o) {
    throw new Ki(ot(o), o);
  }
  let n;
  const r = Ip(t);
  if (r && r.getTime() >= qi["2024-01-01"].timestamp && typeof s == "object" && s && typeof s.code == "string" ? n = s.code : typeof s == "object" && s && typeof s.error_code == "string" && (n = s.error_code), n) {
    if (n === "weak_password")
      throw new vo(ot(s), t.status, ((e = s.weak_password) === null || e === void 0 ? void 0 : e.reasons) || []);
    if (n === "session_not_found")
      throw new Ke();
  } else if (typeof s == "object" && s && typeof s.weak_password == "object" && s.weak_password && Array.isArray(s.weak_password.reasons) && s.weak_password.reasons.length && s.weak_password.reasons.reduce((o, i) => o && typeof i == "string", !0))
    throw new vo(ot(s), t.status, s.weak_password.reasons);
  throw new ip(ot(s), t.status || 500, n);
}
const Np = (t, e, s, n) => {
  const r = { method: t, headers: (e == null ? void 0 : e.headers) || {} };
  return t === "GET" ? r : (r.headers = Object.assign({ "Content-Type": "application/json;charset=UTF-8" }, e == null ? void 0 : e.headers), r.body = JSON.stringify(n), Object.assign(Object.assign({}, r), s));
};
async function V(t, e, s, n) {
  var r;
  const o = Object.assign({}, n == null ? void 0 : n.headers);
  o[xn] || (o[xn] = qi["2024-01-01"].name), n != null && n.jwt && (o.Authorization = `Bearer ${n.jwt}`);
  const i = (r = n == null ? void 0 : n.query) !== null && r !== void 0 ? r : {};
  n != null && n.redirectTo && (i.redirect_to = n.redirectTo);
  const a = Object.keys(i).length ? "?" + new URLSearchParams(i).toString() : "", l = await Rp(t, e, s + a, {
    headers: o,
    noResolveJson: n == null ? void 0 : n.noResolveJson
  }, {}, n == null ? void 0 : n.body);
  return n != null && n.xform ? n == null ? void 0 : n.xform(l) : { data: Object.assign({}, l), error: null };
}
async function Rp(t, e, s, n, r, o) {
  const i = Np(e, n, r, o);
  let a;
  try {
    a = await t(s, Object.assign({}, i));
  } catch (l) {
    throw console.error(l), new jn(ot(l), 0);
  }
  if (a.ok || await wo(a), n != null && n.noResolveJson)
    return a;
  try {
    return await a.json();
  } catch (l) {
    await wo(l);
  }
}
function Re(t) {
  var e;
  let s = null;
  Dp(t) && (s = Object.assign({}, t), t.expires_at || (s.expires_at = mp(t.expires_in)));
  const n = (e = t.user) !== null && e !== void 0 ? e : t;
  return { data: { session: s, user: n }, error: null };
}
function ko(t) {
  const e = Re(t);
  return !e.error && t.weak_password && typeof t.weak_password == "object" && Array.isArray(t.weak_password.reasons) && t.weak_password.reasons.length && t.weak_password.message && typeof t.weak_password.message == "string" && t.weak_password.reasons.reduce((s, n) => s && typeof n == "string", !0) && (e.data.weak_password = t.weak_password), e;
}
function Ge(t) {
  var e;
  return { data: { user: (e = t.user) !== null && e !== void 0 ? e : t }, error: null };
}
function Lp(t) {
  return { data: t, error: null };
}
function Mp(t) {
  const { action_link: e, email_otp: s, hashed_token: n, redirect_to: r, verification_type: o } = t, i = xp(t, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]), a = {
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
function Up(t) {
  return t;
}
function Dp(t) {
  return t.access_token && t.refresh_token && t.expires_in;
}
const gn = ["global", "local", "others"];
var Bp = globalThis && globalThis.__rest || function(t, e) {
  var s = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (s[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, n = Object.getOwnPropertySymbols(t); r < n.length; r++)
      e.indexOf(n[r]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[r]) && (s[n[r]] = t[n[r]]);
  return s;
};
class Fp {
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
  async signOut(e, s = gn[0]) {
    if (gn.indexOf(s) < 0)
      throw new Error(`@supabase/auth-js: Parameter scope must be one of ${gn.join(", ")}`);
    try {
      return await V(this.fetch, "POST", `${this.url}/logout?scope=${s}`, {
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
      return await V(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: e, data: s.data },
        headers: this.headers,
        redirectTo: s.redirectTo,
        xform: Ge
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
      const { options: s } = e, n = Bp(e, ["options"]), r = Object.assign(Object.assign({}, n), s);
      return "newEmail" in n && (r.new_email = n == null ? void 0 : n.newEmail, delete r.newEmail), await V(this.fetch, "POST", `${this.url}/admin/generate_link`, {
        body: r,
        headers: this.headers,
        xform: Mp,
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
      return await V(this.fetch, "POST", `${this.url}/admin/users`, {
        body: e,
        headers: this.headers,
        xform: Ge
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
    var s, n, r, o, i, a, l;
    try {
      const c = { nextPage: null, lastPage: 0, total: 0 }, u = await V(this.fetch, "GET", `${this.url}/admin/users`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (n = (s = e == null ? void 0 : e.page) === null || s === void 0 ? void 0 : s.toString()) !== null && n !== void 0 ? n : "",
          per_page: (o = (r = e == null ? void 0 : e.perPage) === null || r === void 0 ? void 0 : r.toString()) !== null && o !== void 0 ? o : ""
        },
        xform: Up
      });
      if (u.error)
        throw u.error;
      const d = await u.json(), f = (i = u.headers.get("x-total-count")) !== null && i !== void 0 ? i : 0, p = (l = (a = u.headers.get("link")) === null || a === void 0 ? void 0 : a.split(",")) !== null && l !== void 0 ? l : [];
      return p.length > 0 && (p.forEach((h) => {
        const m = parseInt(h.split(";")[0].split("=")[1].substring(0, 1)), b = JSON.parse(h.split(";")[1].split("=")[1]);
        c[`${b}Page`] = m;
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
    kt(e);
    try {
      return await V(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        xform: Ge
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
    kt(e);
    try {
      return await V(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
        body: s,
        headers: this.headers,
        xform: Ge
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
    kt(e);
    try {
      return await V(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        body: {
          should_soft_delete: s
        },
        xform: Ge
      });
    } catch (n) {
      if (D(n))
        return { data: { user: null }, error: n };
      throw n;
    }
  }
  async _listFactors(e) {
    kt(e.userId);
    try {
      const { data: s, error: n } = await V(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/factors`, {
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
    kt(e.userId), kt(e.id);
    try {
      return { data: await V(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/factors/${e.id}`, {
        headers: this.headers
      }), error: null };
    } catch (s) {
      if (D(s))
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
function zp() {
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
const St = {
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
class Vp extends Xi {
}
async function Wp(t, e, s) {
  St.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", t, e);
  const n = new globalThis.AbortController();
  return e > 0 && setTimeout(() => {
    n.abort(), St.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", t);
  }, e), await Promise.resolve().then(() => globalThis.navigator.locks.request(t, e === 0 ? {
    mode: "exclusive",
    ifAvailable: !0
  } : {
    mode: "exclusive",
    signal: n.signal
  }, async (r) => {
    if (r) {
      St.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", t, r.name);
      try {
        return await s();
      } finally {
        St.debug && console.log("@supabase/gotrue-js: navigatorLock: released", t, r.name);
      }
    } else {
      if (e === 0)
        throw St.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", t), new Vp(`Acquiring an exclusive Navigator LockManager lock "${t}" immediately failed`);
      if (St.debug)
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
zp();
const Hp = {
  url: tp,
  storageKey: sp,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: np,
  flowType: "implicit",
  debug: !1,
  hasCustomAuthorizationHeader: !1
};
async function Eo(t, e, s) {
  return await s();
}
const Et = {};
class rs {
  /**
   * Create a new client for use in the browser.
   */
  constructor(e) {
    var s, n;
    this.userStorage = null, this.memoryStorage = null, this.stateChangeEmitters = /* @__PURE__ */ new Map(), this.autoRefreshTicker = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.initializePromise = null, this.detectSessionInUrl = !0, this.hasCustomAuthorizationHeader = !1, this.suppressGetSessionWarning = !1, this.lockAcquired = !1, this.pendingInLock = [], this.broadcastChannel = null, this.logger = console.log, this.instanceID = rs.nextInstanceID, rs.nextInstanceID += 1, this.instanceID > 0 && Ce() && console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");
    const r = Object.assign(Object.assign({}, Hp), e);
    if (this.logDebugMessages = !!r.debug, typeof r.debug == "function" && (this.logger = r.debug), this.persistSession = r.persistSession, this.storageKey = r.storageKey, this.autoRefreshToken = r.autoRefreshToken, this.admin = new Fp({
      url: r.url,
      headers: r.headers,
      fetch: r.fetch
    }), this.url = r.url, this.headers = r.headers, this.fetch = Yi(r.fetch), this.lock = r.lock || Eo, this.detectSessionInUrl = r.detectSessionInUrl, this.flowType = r.flowType, this.hasCustomAuthorizationHeader = r.hasCustomAuthorizationHeader, r.lock ? this.lock = r.lock : Ce() && (!((s = globalThis == null ? void 0 : globalThis.navigator) === null || s === void 0) && s.locks) ? this.lock = Wp : this.lock = Eo, this.jwks || (this.jwks = { keys: [] }, this.jwks_cached_at = Number.MIN_SAFE_INTEGER), this.mfa = {
      verify: this._verify.bind(this),
      enroll: this._enroll.bind(this),
      unenroll: this._unenroll.bind(this),
      challenge: this._challenge.bind(this),
      listFactors: this._listFactors.bind(this),
      challengeAndVerify: this._challengeAndVerify.bind(this),
      getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this)
    }, this.persistSession ? (r.storage ? this.storage = r.storage : Ji() ? this.storage = globalThis.localStorage : (this.memoryStorage = {}, this.storage = So(this.memoryStorage)), r.userStorage && (this.userStorage = r.userStorage)) : (this.memoryStorage = {}, this.storage = So(this.memoryStorage)), Ce() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
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
    return (s = (e = Et[this.storageKey]) === null || e === void 0 ? void 0 : e.jwks) !== null && s !== void 0 ? s : { keys: [] };
  }
  set jwks(e) {
    Et[this.storageKey] = Object.assign(Object.assign({}, Et[this.storageKey]), { jwks: e });
  }
  get jwks_cached_at() {
    var e, s;
    return (s = (e = Et[this.storageKey]) === null || e === void 0 ? void 0 : e.cachedAt) !== null && s !== void 0 ? s : Number.MIN_SAFE_INTEGER;
  }
  set jwks_cached_at(e) {
    Et[this.storageKey] = Object.assign(Object.assign({}, Et[this.storageKey]), { cachedAt: e });
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
      const s = _p(window.location.href);
      let n = "none";
      if (this._isImplicitGrantCallback(s) ? n = "implicit" : await this._isPKCECallback(s) && (n = "pkce"), Ce() && this.detectSessionInUrl && n !== "none") {
        const { data: r, error: o } = await this._getSessionFromURL(s, n);
        if (o) {
          if (this._debug("#_initialize()", "error detecting session from URL", o), cp(o)) {
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
      return D(s) ? { error: s } : {
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
      const o = await V(this.fetch, "POST", `${this.url}/signup`, {
        headers: this.headers,
        body: {
          data: (n = (s = e == null ? void 0 : e.options) === null || s === void 0 ? void 0 : s.data) !== null && n !== void 0 ? n : {},
          gotrue_meta_security: { captcha_token: (r = e == null ? void 0 : e.options) === null || r === void 0 ? void 0 : r.captchaToken }
        },
        xform: Re
      }), { data: i, error: a } = o;
      if (a || !i)
        return { data: { user: null, session: null }, error: a };
      const l = i.session, c = i.user;
      return i.session && (await this._saveSession(i.session), await this._notifyAllSubscribers("SIGNED_IN", l)), { data: { user: c, session: l }, error: null };
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
        this.flowType === "pkce" && ([p, h] = await wt(this.storage, this.storageKey)), o = await V(this.fetch, "POST", `${this.url}/signup`, {
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
          xform: Re
        });
      } else if ("phone" in e) {
        const { phone: u, password: d, options: f } = e;
        o = await V(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: u,
            password: d,
            data: (n = f == null ? void 0 : f.data) !== null && n !== void 0 ? n : {},
            channel: (r = f == null ? void 0 : f.channel) !== null && r !== void 0 ? r : "sms",
            gotrue_meta_security: { captcha_token: f == null ? void 0 : f.captchaToken }
          },
          xform: Re
        });
      } else
        throw new bs("You must provide either an email or phone number and a password");
      const { data: i, error: a } = o;
      if (a || !i)
        return { data: { user: null, session: null }, error: a };
      const l = i.session, c = i.user;
      return i.session && (await this._saveSession(i.session), await this._notifyAllSubscribers("SIGNED_IN", l)), { data: { user: c, session: l }, error: null };
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
        const { email: o, password: i, options: a } = e;
        s = await V(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
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
        s = await V(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            phone: o,
            password: i,
            gotrue_meta_security: { captcha_token: a == null ? void 0 : a.captchaToken }
          },
          xform: ko
        });
      } else
        throw new bs("You must provide either an email or phone number and a password");
      const { data: n, error: r } = s;
      return r ? { data: { user: null, session: null }, error: r } : !n || !n.session || !n.user ? { data: { user: null, session: null }, error: new _s() } : (n.session && (await this._saveSession(n.session), await this._notifyAllSubscribers("SIGNED_IN", n.session)), {
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
    var s, n, r, o, i, a, l, c, u, d, f, p;
    let h, m;
    if ("message" in e)
      h = e.message, m = e.signature;
    else {
      const { chain: b, wallet: v, statement: S, options: y } = e;
      let A;
      if (Ce())
        if (typeof v == "object")
          A = v;
        else {
          const $ = window;
          if ("solana" in $ && typeof $.solana == "object" && ("signIn" in $.solana && typeof $.solana.signIn == "function" || "signMessage" in $.solana && typeof $.solana.signMessage == "function"))
            A = $.solana;
          else
            throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.");
        }
      else {
        if (typeof v != "object" || !(y != null && y.url))
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        A = v;
      }
      const N = new URL((s = y == null ? void 0 : y.url) !== null && s !== void 0 ? s : window.location.href);
      if ("signIn" in A && A.signIn) {
        const $ = await A.signIn(Object.assign(Object.assign(Object.assign({ issuedAt: (/* @__PURE__ */ new Date()).toISOString() }, y == null ? void 0 : y.signInWithSolana), {
          // non-overridable properties
          version: "1",
          domain: N.host,
          uri: N.href
        }), S ? { statement: S } : null));
        let I;
        if (Array.isArray($) && $[0] && typeof $[0] == "object")
          I = $[0];
        else if ($ && typeof $ == "object" && "signedMessage" in $ && "signature" in $)
          I = $;
        else
          throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
        if ("signedMessage" in I && "signature" in I && (typeof I.signedMessage == "string" || I.signedMessage instanceof Uint8Array) && I.signature instanceof Uint8Array)
          h = typeof I.signedMessage == "string" ? I.signedMessage : new TextDecoder().decode(I.signedMessage), m = I.signature;
        else
          throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields");
      } else {
        if (!("signMessage" in A) || typeof A.signMessage != "function" || !("publicKey" in A) || typeof A != "object" || !A.publicKey || !("toBase58" in A.publicKey) || typeof A.publicKey.toBase58 != "function")
          throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");
        h = [
          `${N.host} wants you to sign in with your Solana account:`,
          A.publicKey.toBase58(),
          ...S ? ["", S, ""] : [""],
          "Version: 1",
          `URI: ${N.href}`,
          `Issued At: ${(r = (n = y == null ? void 0 : y.signInWithSolana) === null || n === void 0 ? void 0 : n.issuedAt) !== null && r !== void 0 ? r : (/* @__PURE__ */ new Date()).toISOString()}`,
          ...!((o = y == null ? void 0 : y.signInWithSolana) === null || o === void 0) && o.notBefore ? [`Not Before: ${y.signInWithSolana.notBefore}`] : [],
          ...!((i = y == null ? void 0 : y.signInWithSolana) === null || i === void 0) && i.expirationTime ? [`Expiration Time: ${y.signInWithSolana.expirationTime}`] : [],
          ...!((a = y == null ? void 0 : y.signInWithSolana) === null || a === void 0) && a.chainId ? [`Chain ID: ${y.signInWithSolana.chainId}`] : [],
          ...!((l = y == null ? void 0 : y.signInWithSolana) === null || l === void 0) && l.nonce ? [`Nonce: ${y.signInWithSolana.nonce}`] : [],
          ...!((c = y == null ? void 0 : y.signInWithSolana) === null || c === void 0) && c.requestId ? [`Request ID: ${y.signInWithSolana.requestId}`] : [],
          ...!((d = (u = y == null ? void 0 : y.signInWithSolana) === null || u === void 0 ? void 0 : u.resources) === null || d === void 0) && d.length ? [
            "Resources",
            ...y.signInWithSolana.resources.map((I) => `- ${I}`)
          ] : []
        ].join(`
`);
        const $ = await A.signMessage(new TextEncoder().encode(h), "utf8");
        if (!$ || !($ instanceof Uint8Array))
          throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
        m = $;
      }
    }
    try {
      const { data: b, error: v } = await V(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({ chain: "solana", message: h, signature: vp(m) }, !((f = e.options) === null || f === void 0) && f.captchaToken ? { gotrue_meta_security: { captcha_token: (p = e.options) === null || p === void 0 ? void 0 : p.captchaToken } } : null),
        xform: Re
      });
      if (v)
        throw v;
      return !b || !b.session || !b.user ? {
        data: { user: null, session: null },
        error: new _s()
      } : (b.session && (await this._saveSession(b.session), await this._notifyAllSubscribers("SIGNED_IN", b.session)), { data: Object.assign({}, b), error: v });
    } catch (b) {
      if (D(b))
        return { data: { user: null, session: null }, error: b };
      throw b;
    }
  }
  async _exchangeCodeForSession(e) {
    const s = await rt(this.storage, `${this.storageKey}-code-verifier`), [n, r] = (s ?? "").split("/");
    try {
      const { data: o, error: i } = await V(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
        headers: this.headers,
        body: {
          auth_code: e,
          code_verifier: n
        },
        xform: Re
      });
      if (await We(this.storage, `${this.storageKey}-code-verifier`), i)
        throw i;
      return !o || !o.session || !o.user ? {
        data: { user: null, session: null, redirectType: null },
        error: new _s()
      } : (o.session && (await this._saveSession(o.session), await this._notifyAllSubscribers("SIGNED_IN", o.session)), { data: Object.assign(Object.assign({}, o), { redirectType: r ?? null }), error: i });
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
      const { options: s, provider: n, token: r, access_token: o, nonce: i } = e, a = await V(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
        headers: this.headers,
        body: {
          provider: n,
          id_token: r,
          access_token: o,
          nonce: i,
          gotrue_meta_security: { captcha_token: s == null ? void 0 : s.captchaToken }
        },
        xform: Re
      }), { data: l, error: c } = a;
      return c ? { data: { user: null, session: null }, error: c } : !l || !l.session || !l.user ? {
        data: { user: null, session: null },
        error: new _s()
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
    var s, n, r, o, i;
    try {
      if ("email" in e) {
        const { email: a, options: l } = e;
        let c = null, u = null;
        this.flowType === "pkce" && ([c, u] = await wt(this.storage, this.storageKey));
        const { error: d } = await V(this.fetch, "POST", `${this.url}/otp`, {
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
        const { phone: a, options: l } = e, { data: c, error: u } = await V(this.fetch, "POST", `${this.url}/otp`, {
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
      throw new bs("You must provide either an email or phone number.");
    } catch (a) {
      if (D(a))
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
      const { data: i, error: a } = await V(this.fetch, "POST", `${this.url}/verify`, {
        headers: this.headers,
        body: Object.assign(Object.assign({}, e), { gotrue_meta_security: { captcha_token: o } }),
        redirectTo: r,
        xform: Re
      });
      if (a)
        throw a;
      if (!i)
        throw new Error("An error occurred on token verification.");
      const l = i.session, c = i.user;
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
      let o = null, i = null;
      return this.flowType === "pkce" && ([o, i] = await wt(this.storage, this.storageKey)), await V(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in e ? { provider_id: e.providerId } : null), "domain" in e ? { domain: e.domain } : null), { redirect_to: (n = (s = e.options) === null || s === void 0 ? void 0 : s.redirectTo) !== null && n !== void 0 ? n : void 0 }), !((r = e == null ? void 0 : e.options) === null || r === void 0) && r.captchaToken ? { gotrue_meta_security: { captcha_token: e.options.captchaToken } } : null), { skip_http_redirect: !0, code_challenge: o, code_challenge_method: i }),
        headers: this.headers,
        xform: Lp
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
          throw new Ke();
        const { error: r } = await V(this.fetch, "GET", `${this.url}/reauthenticate`, {
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
        const { email: n, type: r, options: o } = e, { error: i } = await V(this.fetch, "POST", s, {
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
        const { phone: n, type: r, options: o } = e, { data: i, error: a } = await V(this.fetch, "POST", s, {
          headers: this.headers,
          body: {
            phone: n,
            type: r,
            gotrue_meta_security: { captcha_token: o == null ? void 0 : o.captchaToken }
          }
        });
        return { data: { user: null, session: null, messageId: i == null ? void 0 : i.message_id }, error: a };
      }
      throw new bs("You must provide either an email or phone number and a type");
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
      const s = await rt(this.storage, this.storageKey);
      if (this._debug("#getSession()", "session from storage", s), s !== null && (this._isValidSession(s) ? e = s : (this._debug("#getSession()", "session from storage is not valid"), await this._removeSession())), !e)
        return { data: { session: null }, error: null };
      const n = e.expires_at ? e.expires_at * 1e3 - Date.now() < dn : !1;
      if (this._debug("#__loadSession()", `session has${n ? "" : " not"} expired`, "expires_at", e.expires_at), !n) {
        if (this.userStorage) {
          const i = await rt(this.userStorage, this.storageKey + "-user");
          i != null && i.user ? e.user = i.user : e.user = pn();
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
      return e ? await V(this.fetch, "GET", `${this.url}/user`, {
        headers: this.headers,
        jwt: e,
        xform: Ge
      }) : await this._useSession(async (s) => {
        var n, r, o;
        const { data: i, error: a } = s;
        if (a)
          throw a;
        return !(!((n = i.session) === null || n === void 0) && n.access_token) && !this.hasCustomAuthorizationHeader ? { data: { user: null }, error: new Ke() } : await V(this.fetch, "GET", `${this.url}/user`, {
          headers: this.headers,
          jwt: (o = (r = i.session) === null || r === void 0 ? void 0 : r.access_token) !== null && o !== void 0 ? o : void 0,
          xform: Ge
        });
      });
    } catch (s) {
      if (D(s))
        return lp(s) && (await this._removeSession(), await We(this.storage, `${this.storageKey}-code-verifier`)), { data: { user: null }, error: s };
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
          throw new Ke();
        const i = r.session;
        let a = null, l = null;
        this.flowType === "pkce" && e.email != null && ([a, l] = await wt(this.storage, this.storageKey));
        const { data: c, error: u } = await V(this.fetch, "PUT", `${this.url}/user`, {
          headers: this.headers,
          redirectTo: s == null ? void 0 : s.emailRedirectTo,
          body: Object.assign(Object.assign({}, e), { code_challenge: a, code_challenge_method: l }),
          jwt: i.access_token,
          xform: Ge
        });
        if (u)
          throw u;
        return i.user = c.user, await this._saveSession(i), await this._notifyAllSubscribers("USER_UPDATED", i), { data: { user: i.user }, error: null };
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
        throw new Ke();
      const s = Date.now() / 1e3;
      let n = s, r = !0, o = null;
      const { payload: i } = fn(e.access_token);
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
          const { data: i, error: a } = s;
          if (a)
            throw a;
          e = (n = i.session) !== null && n !== void 0 ? n : void 0;
        }
        if (!(e != null && e.refresh_token))
          throw new Ke();
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
      if (!Ce())
        throw new ws("No browser detected.");
      if (e.error || e.error_description || e.error_code)
        throw new ws(e.error_description || "Error in URL with unspecified error_description", {
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
            throw new ws("Not a valid implicit grant flow url.");
          break;
        default:
      }
      if (s === "pkce") {
        if (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !e.code)
          throw new go("No code detected.");
        const { data: S, error: y } = await this._exchangeCodeForSession(e.code);
        if (y)
          throw y;
        const A = new URL(window.location.href);
        return A.searchParams.delete("code"), window.history.replaceState(window.history.state, "", A.toString()), { data: { session: S.session, redirectType: null }, error: null };
      }
      const { provider_token: n, provider_refresh_token: r, access_token: o, refresh_token: i, expires_in: a, expires_at: l, token_type: c } = e;
      if (!o || !a || !i || !c)
        throw new ws("No session defined in URL");
      const u = Math.round(Date.now() / 1e3), d = parseInt(a);
      let f = u + d;
      l && (f = parseInt(l));
      const p = f - u;
      p * 1e3 <= Ot && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${p}s, should have been closer to ${d}s`);
      const h = f - d;
      u - h >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", h, f, u) : u - h < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", h, f, u);
      const { data: m, error: b } = await this._getUser(o);
      if (b)
        throw b;
      const v = {
        provider_token: n,
        provider_refresh_token: r,
        access_token: o,
        expires_in: d,
        expires_at: f,
        refresh_token: i,
        token_type: c,
        user: m.user
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
    const s = await rt(this.storage, `${this.storageKey}-code-verifier`);
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
        if (a && !(ap(a) && (a.status === 404 || a.status === 401 || a.status === 403)))
          return { error: a };
      }
      return e !== "others" && (await this._removeSession(), await We(this.storage, `${this.storageKey}-code-verifier`)), { error: null };
    });
  }
  /**
   * Receive a notification every time an auth event happens.
   * @param callback A callback function to be invoked when an auth event happens.
   */
  onAuthStateChange(e) {
    const s = yp(), n = {
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
    this.flowType === "pkce" && ([n, r] = await wt(
      this.storage,
      this.storageKey,
      !0
      // isPasswordRecovery
    ));
    try {
      return await V(this.fetch, "POST", `${this.url}/recover`, {
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
        return await V(this.fetch, "GET", p, {
          headers: this.headers,
          jwt: (u = (c = d.session) === null || c === void 0 ? void 0 : c.access_token) !== null && u !== void 0 ? u : void 0
        });
      });
      if (r)
        throw r;
      return Ce() && !(!((s = e.options) === null || s === void 0) && s.skipBrowserRedirect) && window.location.assign(n == null ? void 0 : n.url), { data: { provider: e.provider, url: n == null ? void 0 : n.url }, error: null };
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
        const { data: o, error: i } = s;
        if (i)
          throw i;
        return await V(this.fetch, "DELETE", `${this.url}/user/identities/${e.identity_id}`, {
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
      return await kp(async (r) => (r > 0 && await wp(200 * Math.pow(2, r - 1)), this._debug(s, "refreshing attempt", r), await V(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
        body: { refresh_token: e },
        headers: this.headers,
        xform: Re
      })), (r, o) => {
        const i = 200 * Math.pow(2, r);
        return o && hn(o) && // retryable only if the request can be sent before the backoff overflows the tick duration
        Date.now() + i - n < Ot;
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
    return this._debug("#_handleProviderSignIn()", "provider", e, "options", s, "url", n), Ce() && !s.skipBrowserRedirect && window.location.assign(n), { data: { provider: e, url: n }, error: null };
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
      const r = await rt(this.storage, this.storageKey);
      if (r && this.userStorage) {
        let i = await rt(this.userStorage, this.storageKey + "-user");
        !this.storage.isServer && Object.is(this.storage, this.userStorage) && !i && (i = { user: r.user }, await It(this.userStorage, this.storageKey + "-user", i)), r.user = (e = i == null ? void 0 : i.user) !== null && e !== void 0 ? e : pn();
      } else if (r && !r.user && !r.user) {
        const i = await rt(this.storage, this.storageKey + "-user");
        i && (i != null && i.user) ? (r.user = i.user, await We(this.storage, this.storageKey + "-user"), await It(this.storage, this.storageKey, r)) : r.user = pn();
      }
      if (this._debug(n, "session from storage", r), !this._isValidSession(r)) {
        this._debug(n, "session is not valid"), r !== null && await this._removeSession();
        return;
      }
      const o = ((s = r.expires_at) !== null && s !== void 0 ? s : 1 / 0) * 1e3 - Date.now() < dn;
      if (this._debug(n, `session has${o ? "" : " not"} expired with margin of ${dn}s`), o) {
        if (this.autoRefreshToken && r.refresh_token) {
          const { error: i } = await this._callRefreshToken(r.refresh_token);
          i && (console.error(i), hn(i) || (this._debug(n, "refresh failed with a non-retryable error, removing the session", i), await this._removeSession()));
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
      throw new Ke();
    if (this.refreshingDeferred)
      return this.refreshingDeferred.promise;
    const r = `#_callRefreshToken(${e.substring(0, 5)}...)`;
    this._debug(r, "begin");
    try {
      this.refreshingDeferred = new Gs();
      const { data: o, error: i } = await this._refreshAccessToken(e);
      if (i)
        throw i;
      if (!o.session)
        throw new Ke();
      await this._saveSession(o.session), await this._notifyAllSubscribers("TOKEN_REFRESHED", o.session);
      const a = { session: o.session, error: null };
      return this.refreshingDeferred.resolve(a), a;
    } catch (o) {
      if (this._debug(r, "error", o), D(o)) {
        const i = { session: null, error: o };
        return hn(o) || await this._removeSession(), (s = this.refreshingDeferred) === null || s === void 0 || s.resolve(i), i;
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
      !n && s.user && await It(this.userStorage, this.storageKey + "-user", {
        user: s.user
      });
      const r = Object.assign({}, s);
      delete r.user;
      const o = bo(r);
      await It(this.storage, this.storageKey, o);
    } else {
      const r = bo(s);
      await It(this.storage, this.storageKey, r);
    }
  }
  async _removeSession() {
    this._debug("#_removeSession()"), await We(this.storage, this.storageKey), await We(this.storage, this.storageKey + "-code-verifier"), await We(this.storage, this.storageKey + "-user"), this.userStorage && await We(this.userStorage, this.storageKey + "-user"), await this._notifyAllSubscribers("SIGNED_OUT", null);
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
      e && Ce() && (window != null && window.removeEventListener) && window.removeEventListener("visibilitychange", e);
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
    const e = setInterval(() => this._autoRefreshTokenTick(), Ot);
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
              const r = Math.floor((n.expires_at * 1e3 - e) / Ot);
              this._debug("#_autoRefreshTokenTick()", `access token expires in ${r} ticks, a tick lasts ${Ot}ms, refresh threshold is ${$n} ticks`), r <= $n && await this._callRefreshToken(n.refresh_token);
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
    if (this._debug("#_handleVisibilityChange()"), !Ce() || !(window != null && window.addEventListener))
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
      const [o, i] = await wt(this.storage, this.storageKey), a = new URLSearchParams({
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
        return o ? { data: null, error: o } : await V(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
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
        const { data: o, error: i } = s;
        if (i)
          return { data: null, error: i };
        const a = Object.assign({ friendly_name: e.friendlyName, factor_type: e.factorType }, e.factorType === "phone" ? { phone: e.phone } : { issuer: e.issuer }), { data: l, error: c } = await V(this.fetch, "POST", `${this.url}/factors`, {
          body: a,
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
          const { data: i, error: a } = await V(this.fetch, "POST", `${this.url}/factors/${e.factorId}/verify`, {
            body: { code: e.code, challenge_id: e.challengeId },
            headers: this.headers,
            jwt: (n = r == null ? void 0 : r.session) === null || n === void 0 ? void 0 : n.access_token
          });
          return a ? { data: null, error: a } : (await this._saveSession(Object.assign({ expires_at: Math.round(Date.now() / 1e3) + i.expires_in }, i)), await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", i), { data: i, error: a });
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
          return o ? { data: null, error: o } : await V(this.fetch, "POST", `${this.url}/factors/${e.factorId}/challenge`, {
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
      const { payload: i } = fn(r.access_token);
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
    if (n = this.jwks.keys.find((a) => a.kid === e), n && this.jwks_cached_at + op > r)
      return n;
    const { data: o, error: i } = await V(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
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
      const { header: r, payload: o, signature: i, raw: { header: a, payload: l } } = fn(n);
      s != null && s.allowExpired || Ap(o.exp);
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
      const u = Pp(r.alg), d = await crypto.subtle.importKey("jwk", c, u, !0, [
        "verify"
      ]);
      if (!await crypto.subtle.verify(u, d, i, gp(`${a}.${l}`)))
        throw new Nn("Invalid JWT signature");
      return {
        data: {
          claims: o,
          header: r,
          signature: i
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
rs.nextInstanceID = 0;
const qp = rs;
class Kp extends qp {
  constructor(e) {
    super(e);
  }
}
var Gp = globalThis && globalThis.__awaiter || function(t, e, s, n) {
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
class Jp {
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
    const a = Qf(e), l = new URL(a);
    this.realtimeUrl = new URL("realtime/v1", l), this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws"), this.authUrl = new URL("auth/v1", l), this.storageUrl = new URL("storage/v1", l), this.functionsUrl = new URL("functions/v1", l);
    const c = `sb-${l.hostname.split(".")[0]}-auth-token`, u = {
      db: Hf,
      realtime: Kf,
      auth: Object.assign(Object.assign({}, qf), { storageKey: c }),
      global: Wf
    }, d = ep(n ?? {}, u);
    this.storageKey = (r = d.auth.storageKey) !== null && r !== void 0 ? r : "", this.headers = (o = d.global.headers) !== null && o !== void 0 ? o : {}, d.accessToken ? (this.accessToken = d.accessToken, this.auth = new Proxy({}, {
      get: (f, p) => {
        throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(p)} is not possible`);
      }
    })) : this.auth = this._initSupabaseAuthClient((i = d.auth) !== null && i !== void 0 ? i : {}, this.headers, d.global.fetch), this.fetch = Xf(s, this._getAccessToken.bind(this), d.global.fetch), this.realtime = this._initRealtimeClient(Object.assign({ headers: this.headers, accessToken: this._getAccessToken.bind(this) }, d.realtime)), this.rest = new df(new URL("rest/v1", l).href, {
      headers: this.headers,
      schema: d.db.schema,
      fetch: this.fetch
    }), this.storage = new Ff(this.storageUrl.href, this.headers, this.fetch, n == null ? void 0 : n.storage), d.accessToken || this._listenForAuthEvents();
  }
  /**
   * Supabase Functions allows you to deploy and invoke edge functions.
   */
  get functions() {
    return new zh(this.functionsUrl.href, {
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
    return Gp(this, void 0, void 0, function* () {
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
    return new Kp({
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
    return new If(this.realtimeUrl.href, Object.assign(Object.assign({}, e), { params: Object.assign({ apikey: this.supabaseKey }, e == null ? void 0 : e.params) }));
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
const Yp = (t, e, s) => new Jp(t, e, s);
function Xp() {
  if (typeof window < "u" || typeof process > "u")
    return !1;
  const t = process.version;
  if (t == null)
    return !1;
  const e = t.match(/^v(\d+)\./);
  return e ? parseInt(e[1], 10) <= 18 : !1;
}
Xp() && console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");
const Qe = "aiworkspace.pro";
function Js(t) {
  return t === "localhost" || /^\d+\.\d+\.\d+\.\d+$/.test(t);
}
function Zi(t) {
  return t === Qe || t.endsWith(`.${Qe}`);
}
function Ns(t) {
  return document.cookie.split(";").map((n) => n.trim()).filter((n) => t.some((r) => n.startsWith(r + "=")));
}
function ct(t, e, s = 60 * 60 * 24 * 365) {
  const n = location.hostname;
  if (Js(n)) {
    document.cookie = `${t}=${encodeURIComponent(e)}; Path=/; Max-Age=${s}; SameSite=Lax`, console.log("[auth][cookie][set][local]", { host: n, name: t, valuePreview: e.slice(0, 20) + "..." }), console.log("[auth][cookie][after]", Ns([t]));
    return;
  }
  document.cookie = `${t}=${encodeURIComponent(e)}; Domain=.${Qe}; Path=/; Max-Age=${s}; SameSite=Lax; Secure`, document.cookie = `${t}=; Path=/; Max-Age=0; SameSite=Lax`, console.log("[auth][cookie][set][apex]", { host: n, apex: Qe, name: t, valuePreview: e.slice(0, 20) + "..." }), console.log("[auth][cookie][after]", Ns([t]));
}
function gt(t) {
  const e = new RegExp("(?:^|; )" + t.replace(/[$()*+.[\]?^{}|\\/-]/g, "\\$&") + "=([^;]*)"), s = document.cookie.match(e);
  return s ? decodeURIComponent(s[1]) : null;
}
function To(t) {
  const e = location.hostname;
  if (Js(e)) {
    document.cookie = `${t}=; Path=/; Max-Age=0; SameSite=Lax`, console.log("[auth][cookie][clear][local]", { host: e, name: t });
    return;
  }
  document.cookie = `${t}=; Domain=.${Qe}; Path=/; Max-Age=0; SameSite=Lax; Secure`, document.cookie = `${t}=; Path=/; Max-Age=0; SameSite=Lax`, console.log("[auth][cookie][clear][apex]", { host: e, apex: Qe, name: t }), console.log("[auth][cookie][after]", Ns([t]));
}
function Qi(t) {
  const e = location.hostname;
  if (Js(e)) {
    console.log("[auth][cookie][promote] skip (local host)", e);
    return;
  }
  if (!Zi(e)) {
    console.log("[auth][cookie][promote] skip (not under apex)", { host: e, apex: Qe });
    return;
  }
  console.log("[auth][cookie][promote] start", { host: e, apex: Qe, names: t }), t.forEach((s) => {
    const n = gt(s);
    n ? ct(s, n, 60 * 60 * 24 * 365) : console.log("[auth][cookie][promote] missing", s);
  }), console.log("[auth][cookie][promote] done", Ns(t));
}
function Yg() {
  return `${window.location.origin}/callback`;
}
function Xg() {
  try {
    const t = new URLSearchParams(location.search), e = ["redirect", "redirect_to", "returnTo", "next"].find((n) => t.get(n));
    let s = e ? t.get(e) : "";
    if (s || (s = sessionStorage.getItem("post-login-redirect") || localStorage.getItem("post-login-redirect") || ""), s || (s = { VITE_SUPABASE_URL: "https://oqdnbpmmgntqtigstaow.supabase.co", VITE_SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xZG5icG1tZ250cXRpZ3N0YW93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0NTk2NDYsImV4cCI6MjA1MDAzNTY0Nn0.rn0nRY9xLgLt-ajiSPeG0PcdS9V-549C1yeqhcxxG40", VITE_APEX_DOMAIN: "aiworkspace.pro", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 }.VITE_DEFAULT_POST_LOGIN_URL || "/"), s.startsWith("http"))
      try {
        const n = new URL(s);
        return Zi(n.hostname) || Js(n.hostname) ? s : "/";
      } catch {
        return "/";
      }
    return s.startsWith("/") || (s = "/" + s), s;
  } catch {
    return "/";
  }
}
const De = "sb-access-token", Be = "sb-refresh-token", ea = "sb-access-token", ta = "sb-refresh-token";
function Rs() {
  try {
    const t = gt(De), e = gt(Be);
    t && localStorage.setItem(ea, t), e && localStorage.setItem(ta, e), console.log("[auth][cookie->ls] sync", {
      hasAccess: !!t,
      hasRefresh: !!e
    });
  } catch (t) {
    console.log("[auth][cookie->ls] error", t);
  }
}
function Zp() {
  try {
    localStorage.removeItem(ea), localStorage.removeItem(ta), console.log("[auth][cookie->ls] cleared localStorage");
  } catch (t) {
    console.log("[auth][cookie->ls] clear error", t);
  }
}
async function Zg() {
  try {
    Qi([De, Be]);
    const t = gt(De), e = gt(Be);
    if (t && e) {
      const { data: { session: s } } = await _e.auth.getSession();
      if (!s) {
        const { data: n, error: r } = await _e.auth.setSession({ access_token: t, refresh_token: e });
        r ? console.log("[auth][restore] error", r) : console.log("[auth][restore] done", !!n.session);
      }
    } else
      console.log("[auth][restore] no cookies present");
    Rs();
  } catch (t) {
    console.log("[auth][restore] exception", t);
  }
}
function Qp() {
  console.log("[auth][listener] Setting up auth state listener..."), _e.auth.onAuthStateChange(async (t, e) => {
    switch (console.log("[auth][listener] Auth state changed:", t, !!e), t) {
      case "TOKEN_REFRESHED":
        console.log("[auth][listener] Token refreshed successfully"), e && (ct(De, e.access_token, 60 * 60 * 24 * 365), ct(Be, e.refresh_token, 60 * 60 * 24 * 365), Rs());
        break;
      case "SIGNED_IN":
        console.log("[auth][listener] User signed in"), e && (ct(De, e.access_token, 60 * 60 * 24 * 365), ct(Be, e.refresh_token, 60 * 60 * 24 * 365), Rs());
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
    const { data: { session: t } } = await _e.auth.getSession();
    if (t && t.user)
      return console.log("[auth][restore] Active session found"), { success: !0, session: t };
    const e = gt(De), s = gt(Be);
    if (e && s) {
      console.log("[auth][restore] Attempting to restore session from cookies...");
      const { data: n, error: r } = await _e.auth.setSession({
        access_token: e,
        refresh_token: s
      });
      if (r)
        return console.log("[auth][restore] Failed to restore session:", r.message), { success: !1, error: r };
      if (n.session)
        return console.log("[auth][restore] Session restored successfully"), ct(De, n.session.access_token, 60 * 60 * 24 * 365), ct(Be, n.session.refresh_token, 60 * 60 * 24 * 365), Rs(), { success: !0, session: n.session };
    }
    return console.log("[auth][restore] No valid session or cookies found"), { success: !1, error: "No valid session or cookies" };
  } catch (t) {
    return console.log("[auth][restore] Exception during session restoration:", t), { success: !1, error: t };
  }
}
if (typeof window < "u")
  try {
    Qi([De, Be]);
  } catch (t) {
    console.log("[auth][cookie][promote] error (pre-init)", t);
  }
const cr = "https://oqdnbpmmgntqtigstaow.supabase.co", ur = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xZG5icG1tZ250cXRpZ3N0YW93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ0NTk2NDYsImV4cCI6MjA1MDAzNTY0Nn0.rn0nRY9xLgLt-ajiSPeG0PcdS9V-549C1yeqhcxxG40", _e = Yp(cr, ur, {
  auth: {
    // Enable automatic token refresh
    autoRefreshToken: !0,
    // Persist session in localStorage
    persistSession: !0,
    // Detect session in URL (for OAuth callbacks)
    detectSessionInUrl: !0
  }
});
typeof window < "u" && Qp();
console.log("Supabase Configuration:", {
  url: cr,
  hasKey: !!ur,
  autoRefreshToken: !0,
  persistSession: !0
});
console.log("URL:", cr.replace(/https:\/\/(.+)\.supabase\.co/, "https://*****.supabase.co"));
console.log("Key configured:", !ur.includes("your-anon-key"));
console.log("Environment mode:", "production");
function eg() {
  const t = j({
    user: null,
    isAuthenticated: !1,
    isLoading: !0
  }), e = j(null), s = O(() => t.value.isAuthenticated), n = O(() => t.value.user), r = O(() => t.value.isLoading), o = async () => {
    var u, d, f, p, h, m, b, v, S, y, A, N, $, I, W;
    try {
      const { data: { session: H } } = await _e.auth.getSession();
      if (H && H.user) {
        const w = H.user, _ = {
          id: w.id,
          name: ((u = w.user_metadata) == null ? void 0 : u.name) || ((d = w.user_metadata) == null ? void 0 : d.user_name) || ((f = w.user_metadata) == null ? void 0 : f.full_name) || ((p = w.email) == null ? void 0 : p.split("@")[0]) || "User",
          email: w.email,
          avatar_url: ((h = w.user_metadata) == null ? void 0 : h.avatar_url) || null,
          user_metadata: w.user_metadata
        };
        return t.value = {
          user: _,
          isAuthenticated: !0,
          isLoading: !1
        }, e.value = {
          user: _,
          access_token: H.access_token,
          refresh_token: H.refresh_token
        }, { success: !0, session: e.value };
      }
      console.log("[auth][enhanced] No active session, attempting to restore from cookies...");
      const T = await Co();
      if (T.success && T.session) {
        console.log("[auth][enhanced] Session restored successfully");
        const w = T.session.user, _ = {
          id: w.id,
          name: ((m = w.user_metadata) == null ? void 0 : m.name) || ((b = w.user_metadata) == null ? void 0 : b.user_name) || ((v = w.user_metadata) == null ? void 0 : v.full_name) || ((S = w.email) == null ? void 0 : S.split("@")[0]) || "User",
          email: w.email,
          avatar_url: ((y = w.user_metadata) == null ? void 0 : y.avatar_url) || null,
          user_metadata: w.user_metadata
        };
        return t.value = {
          user: _,
          isAuthenticated: !0,
          isLoading: !1
        }, e.value = T.session, { success: !0, session: e.value };
      } else
        console.log("[auth][enhanced] Failed to restore session:", T.error);
    } catch (H) {
      console.error("Error getting Supabase session:", H);
      try {
        const T = await Co();
        if (T.success && T.session) {
          console.log("[auth][enhanced] Session restored after error");
          const w = T.session.user, _ = {
            id: w.id,
            name: ((A = w.user_metadata) == null ? void 0 : A.name) || ((N = w.user_metadata) == null ? void 0 : N.user_name) || (($ = w.user_metadata) == null ? void 0 : $.full_name) || ((I = w.email) == null ? void 0 : I.split("@")[0]) || "User",
            email: w.email,
            avatar_url: ((W = w.user_metadata) == null ? void 0 : W.avatar_url) || null,
            user_metadata: w.user_metadata
          };
          return t.value = {
            user: _,
            isAuthenticated: !0,
            isLoading: !1
          }, e.value = T.session, { success: !0, session: e.value };
        }
      } catch (T) {
        console.error("Error restoring session:", T);
      }
    }
    return t.value = {
      user: null,
      isAuthenticated: !1,
      isLoading: !1
    }, e.value = null, { success: !1, error: "No valid session found" };
  }, i = async () => {
    try {
      await _e.auth.signOut(), To(De), To(Be), Zp(), t.value = {
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
    var f, p, h, m, b;
    try {
      t.value.isLoading = !0;
      const { data: v, error: S } = await _e.auth.signInWithPassword({
        email: u,
        password: d
      });
      if (S)
        throw S;
      if (v.session) {
        const y = v.session.user, A = {
          id: y.id,
          name: ((f = y.user_metadata) == null ? void 0 : f.name) || ((p = y.user_metadata) == null ? void 0 : p.user_name) || ((h = y.user_metadata) == null ? void 0 : h.full_name) || ((m = y.email) == null ? void 0 : m.split("@")[0]) || "User",
          email: y.email,
          avatar_url: ((b = y.user_metadata) == null ? void 0 : b.avatar_url) || null,
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
    var p, h, m, b, v;
    try {
      t.value.isLoading = !0;
      const { data: S, error: y } = await _e.auth.signUp({
        email: u,
        password: d,
        options: {
          data: f
        }
      });
      if (y)
        throw y;
      if (S.session) {
        const A = S.session.user, N = {
          id: A.id,
          name: ((p = A.user_metadata) == null ? void 0 : p.name) || ((h = A.user_metadata) == null ? void 0 : h.user_name) || ((m = A.user_metadata) == null ? void 0 : m.full_name) || ((b = A.email) == null ? void 0 : b.split("@")[0]) || "User",
          email: A.email,
          avatar_url: ((v = A.user_metadata) == null ? void 0 : v.avatar_url) || null,
          user_metadata: A.user_metadata
        };
        return t.value = {
          user: N,
          isAuthenticated: !0,
          isLoading: !1
        }, e.value = {
          user: N,
          access_token: S.session.access_token,
          refresh_token: S.session.refresh_token
        }, { success: !0, session: e.value };
      }
      return { success: !1, error: "No session returned" };
    } catch (S) {
      return console.error("Sign up error:", S), t.value.isLoading = !1, { success: !1, error: S };
    }
  }, c = async () => {
    await o();
  };
  return Se(() => {
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
const Ls = (t) => Vt = t, tg = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
function vt(t) {
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
    vt(r) && vt(n) && !dt(n) && !Fn(n) ? t[s] = sa(r, n) : t[s] = n;
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
  return !s && jo() && Mn(r), r;
}
function Tt(t, ...e) {
  t.slice().forEach((s) => {
    s(...e);
  });
}
const sg = (t) => t(), Io = Symbol(), vn = Symbol();
function Rn(t, e) {
  t instanceof Map && e instanceof Map ? e.forEach((s, n) => t.set(n, s)) : t instanceof Set && e instanceof Set && e.forEach(t.add, t);
  for (const s in e) {
    if (!e.hasOwnProperty(s))
      continue;
    const n = e[s], r = t[s];
    vt(r) && vt(n) && t.hasOwnProperty(s) && !dt(n) && !Fn(n) ? t[s] = Rn(r, n) : t[s] = n;
  }
  return t;
}
const ng = process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function rg(t) {
  return !vt(t) || !t.hasOwnProperty(ng);
}
const { assign: me } = Object;
function Ao(t) {
  return !!(dt(t) && t.effect);
}
function Po(t, e, s, n) {
  const { state: r, actions: o, getters: i } = e, a = s.state.value[t];
  let l;
  function c() {
    !a && (process.env.NODE_ENV === "production" || !n) && (s.state.value[t] = r ? r() : {});
    const u = process.env.NODE_ENV !== "production" && n ? (
      // use ref() to unwrap refs inside state TODO: check if this is still necessary
      mn(j(r ? r() : {}).value)
    ) : mn(s.state.value[t]);
    return me(u, o, Object.keys(i || {}).reduce((d, f) => (process.env.NODE_ENV !== "production" && f in u && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${f}" in store "${t}".`), d[f] = Je(O(() => {
      Ls(s);
      const p = s._s.get(t);
      return i[f].call(p, p);
    })), d), {}));
  }
  return l = Ln(t, c, e, s, n, !0), l;
}
function Ln(t, e, s = {}, n, r, o) {
  let i;
  const a = me({ actions: {} }, s);
  if (process.env.NODE_ENV !== "production" && !n._e.active)
    throw new Error("Pinia destroyed");
  const l = { deep: !0 };
  process.env.NODE_ENV !== "production" && !Pc && (l.onTrigger = (T) => {
    c ? p = T : c == !1 && !I._hotUpdating && (Array.isArray(p) ? p.push(T) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let c, u, d = [], f = [], p;
  const h = n.state.value[t];
  !o && !h && (process.env.NODE_ENV === "production" || !r) && (n.state.value[t] = {});
  const m = j({});
  let b;
  function v(T) {
    let w;
    c = u = !1, process.env.NODE_ENV !== "production" && (p = []), typeof T == "function" ? (T(n.state.value[t]), w = {
      type: Zt.patchFunction,
      storeId: t,
      events: p
    }) : (Rn(n.state.value[t], T), w = {
      type: Zt.patchObject,
      payload: T,
      storeId: t,
      events: p
    });
    const _ = b = Symbol();
    oe().then(() => {
      b === _ && (c = !0);
    }), u = !0, Tt(d, w, n.state.value[t]);
  }
  const S = o ? function() {
    const { state: w } = s, _ = w ? w() : {};
    this.$patch((k) => {
      me(k, _);
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
  const A = (T, w = "") => {
    if (Io in T)
      return T[vn] = w, T;
    const _ = function() {
      Ls(n);
      const k = Array.from(arguments), x = [], q = [];
      function te(K) {
        x.push(K);
      }
      function U(K) {
        q.push(K);
      }
      Tt(f, {
        args: k,
        name: _[vn],
        store: I,
        after: te,
        onError: U
      });
      let J;
      try {
        J = T.apply(this && this.$id === t ? this : I, k);
      } catch (K) {
        throw Tt(q, K), K;
      }
      return J instanceof Promise ? J.then((K) => (Tt(x, K), K)).catch((K) => (Tt(q, K), Promise.reject(K))) : (Tt(x, J), J);
    };
    return _[Io] = !0, _[vn] = w, _;
  }, N = /* @__PURE__ */ Je({
    actions: {},
    getters: {},
    state: [],
    hotState: m
  }), $ = {
    _p: n,
    // _s: scope,
    $id: t,
    $onAction: Oo.bind(null, f),
    $patch: v,
    $reset: S,
    $subscribe(T, w = {}) {
      const _ = Oo(d, T, w.detached, () => k()), k = i.run(() => re(() => n.state.value[t], (x) => {
        (w.flush === "sync" ? u : c) && T({
          storeId: t,
          type: Zt.direct,
          events: p
        }, x);
      }, me({}, l, w)));
      return _;
    },
    $dispose: y
  }, I = Bn(process.env.NODE_ENV !== "production" || process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && Wt ? me(
    {
      _hmrPayload: N,
      _customProperties: Je(/* @__PURE__ */ new Set())
      // devtools custom properties
    },
    $
    // must be added later
    // setupStore
  ) : $);
  n._s.set(t, I);
  const H = (n._a && n._a.runWithContext || sg)(() => n._e.run(() => (i = ma()).run(() => e({ action: A }))));
  for (const T in H) {
    const w = H[T];
    if (dt(w) && !Ao(w) || Fn(w))
      process.env.NODE_ENV !== "production" && r ? us(m.value, T, ut(H, T)) : o || (h && rg(w) && (dt(w) ? w.value = h[T] : Rn(w, h[T])), n.state.value[t][T] = w), process.env.NODE_ENV !== "production" && N.state.push(T);
    else if (typeof w == "function") {
      const _ = process.env.NODE_ENV !== "production" && r ? w : A(w, T);
      H[T] = _, process.env.NODE_ENV !== "production" && (N.actions[T] = w), a.actions[T] = w;
    } else
      process.env.NODE_ENV !== "production" && Ao(w) && (N.getters[T] = o ? (
        // @ts-expect-error
        s.getters[T]
      ) : w, Wt && (H._getters || // @ts-expect-error: same
      (H._getters = Je([]))).push(T));
  }
  if (me(I, H), me(ya(I), H), Object.defineProperty(I, "$state", {
    get: () => process.env.NODE_ENV !== "production" && r ? m.value : n.state.value[t],
    set: (T) => {
      if (process.env.NODE_ENV !== "production" && r)
        throw new Error("cannot set hotState");
      v((w) => {
        me(w, T);
      });
    }
  }), process.env.NODE_ENV !== "production" && (I._hotUpdate = Je((T) => {
    I._hotUpdating = !0, T._hmrPayload.state.forEach((w) => {
      if (w in I.$state) {
        const _ = T.$state[w], k = I.$state[w];
        typeof _ == "object" && vt(_) && vt(k) ? sa(_, k) : T.$state[w] = k;
      }
      us(I, w, ut(T.$state, w));
    }), Object.keys(I.$state).forEach((w) => {
      w in T.$state || tn(I, w);
    }), c = !1, u = !1, n.state.value[t] = ut(T._hmrPayload, "hotState"), u = !0, oe().then(() => {
      c = !0;
    });
    for (const w in T._hmrPayload.actions) {
      const _ = T[w];
      us(I, w, A(_, w));
    }
    for (const w in T._hmrPayload.getters) {
      const _ = T._hmrPayload.getters[w], k = o ? (
        // special handling of options api
        O(() => (Ls(n), _.call(I, I)))
      ) : _;
      us(I, w, k);
    }
    Object.keys(I._hmrPayload.getters).forEach((w) => {
      w in T._hmrPayload.getters || tn(I, w);
    }), Object.keys(I._hmrPayload.actions).forEach((w) => {
      w in T._hmrPayload.actions || tn(I, w);
    }), I._hmrPayload = T._hmrPayload, I._getters = T._getters, I._hotUpdating = !1;
  })), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && Wt) {
    const T = {
      writable: !0,
      configurable: !0,
      // avoid warning on devtools trying to display this property
      enumerable: !1
    };
    ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((w) => {
      Object.defineProperty(I, w, me({ value: I[w] }, T));
    });
  }
  return n._p.forEach((T) => {
    if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && Wt) {
      const w = i.run(() => T({
        store: I,
        app: n._a,
        pinia: n,
        options: a
      }));
      Object.keys(w || {}).forEach((_) => I._customProperties.add(_)), me(I, w);
    } else
      me(I, i.run(() => T({
        store: I,
        app: n._a,
        pinia: n,
        options: a
      })));
  }), process.env.NODE_ENV !== "production" && I.$state && typeof I.$state == "object" && typeof I.$state.constructor == "function" && !I.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${I.$id}".`), h && o && s.hydrate && s.hydrate(I.$state, h), c = !0, u = !0, I;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function og(t, e, s) {
  let n, r;
  const o = typeof e == "function";
  if (typeof t == "string")
    n = t, r = o ? s : e;
  else if (r = t, n = t.id, process.env.NODE_ENV !== "production" && typeof n != "string")
    throw new Error('[🍍]: "defineStore()" must be passed a store id as its first argument.');
  function i(a, l) {
    const c = va();
    if (a = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (process.env.NODE_ENV === "test" && Vt && Vt._testing ? null : a) || (c ? de(tg, null) : null), a && Ls(a), process.env.NODE_ENV !== "production" && !Vt)
      throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
    a = Vt, a._s.has(n) || (o ? Ln(n, e, r, a) : Po(n, r, a), process.env.NODE_ENV !== "production" && (i._pinia = a));
    const u = a._s.get(n);
    if (process.env.NODE_ENV !== "production" && l) {
      const d = "__hot:" + n, f = o ? Ln(d, e, r, a, !0) : Po(d, me({}, r), a, !0);
      l._hotUpdate(f), delete a.state.value[d], a._s.delete(d);
    }
    if (process.env.NODE_ENV !== "production" && Wt) {
      const d = we();
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
const ig = /* @__PURE__ */ og("workspace", () => {
  const t = j(null), e = j([]), s = j(null), n = (c) => {
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
        const { data: { user: u } } = await _e.auth.getUser();
        if (!u)
          return [];
        let d = _e.from("workspaces").select(`
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
        const m = [...new Set(
          (f || []).filter((y) => y.parent_workspace_id).map((y) => y.parent_workspace_id).filter((y) => !h.has(y))
        )];
        let b = [];
        if (m.length) {
          let y = _e.from("workspaces").select("id, title, description, parent_workspace_id, created_by, archived, created_at").in("id", m);
          c || (y = y.eq("archived", !1));
          const { data: A, error: N } = await y;
          if (N)
            throw N;
          b = A || [];
        }
        const S = [...f || [], ...b].map((y) => {
          var A, N, $;
          return {
            id: y.id,
            title: y.title,
            description: y.description || "No description",
            parent_workspace_id: y.parent_workspace_id,
            created_by: y.created_by,
            archived: y.archived,
            created_at: y.created_at,
            latest_activity: ((N = (A = y.workspace_activities) == null ? void 0 : A[0]) == null ? void 0 : N.updated_at) || y.created_at,
            hasAccess: h.has(y.id),
            accessType: (($ = h.get(y.id)) == null ? void 0 : $.access_type) || null
          };
        });
        return S.sort((y, A) => new Date(A.latest_activity) - new Date(y.latest_activity)), r(S), S;
      } catch (u) {
        return console.error("loadWorkspaces error", u), [];
      }
    }
  };
}), ag = { class: "aiworkspace-header" }, lg = {
  key: 0,
  class: "header-content"
}, cg = { class: "header-left" }, ug = { class: "logo-section" }, dg = {
  href: "/",
  class: "logo"
}, hg = ["src"], fg = {
  key: 1,
  class: "text-logo"
}, pg = {
  key: 0,
  class: "header-center"
}, gg = { class: "main-navigation" }, vg = { class: "nav-item" }, mg = ["href", "onClick"], yg = { class: "workspace-icon" }, _g = {
  key: 1,
  class: "nav-divider"
}, bg = { class: "nav-item" }, wg = ["href", "onClick"], kg = { class: "header-right" }, Sg = { class: "user-profile" }, Eg = { class: "user-info" }, Tg = { class: "user-name" }, Cg = { class: "user-avatar" }, Og = ["src", "alt"], Ig = {
  key: 1,
  class: "avatar-placeholder"
}, Ag = {
  key: 1,
  class: "unauth-message"
}, Pg = { class: "workspace-list" }, $g = ["onClick"], xg = { class: "workspace-icon" }, jg = { class: "workspace-details" }, Ng = { class: "workspace-members" }, Rg = {
  key: 0,
  class: "current-indicator"
}, Lg = /* @__PURE__ */ G({
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
    const s = t, n = e, { authState: r, logout: o } = eg(), i = ig(), a = j(!1), l = j([]), c = j([]), u = j({
      name: "",
      email: "",
      avatar_url: null,
      initials: ""
    }), d = j([]), f = j([]), p = O(() => r.value.isAuthenticated), h = O(() => i.currentWorkspace), m = j([
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
    ]), b = O(() => "Dashboard"), v = (_) => {
      const k = /* @__PURE__ */ new Map();
      _.forEach((te) => {
        k.set(te.id, { ...te, children: [] });
      });
      const x = [];
      k.forEach((te) => {
        te.parent_workspace_id && k.has(te.parent_workspace_id) ? k.get(te.parent_workspace_id).children.push(te) : x.push(te);
      });
      const q = (te) => {
        te.sort((U, J) => U.title.localeCompare(J.title)), te.forEach((U) => {
          U.children && q(U.children);
        });
      };
      return q(x), x;
    }, S = (_, k = 0, x = []) => (_.forEach((q) => {
      x.push({ ...q, level: k }), q.children && q.children.length && S(q.children, k + 1, x);
    }), x), y = async () => {
      try {
        const _ = await i.loadWorkspaces();
        if (d.value = v(_), f.value = S(d.value), c.value = f.value, l.value = f.value, s.currentWorkspaceId) {
          const k = f.value.find((x) => {
            var q;
            return x.id.toString() === ((q = s.currentWorkspaceId) == null ? void 0 : q.toString());
          });
          k && i.setCurrentWorkspace(k);
        } else
          !h.value && f.value.length && i.setCurrentWorkspace(f.value[0]);
      } catch (_) {
        console.error("loadWorkspaces (header) error", _);
      }
    }, A = (_) => {
      if (console.log("Navigation command:", _), _ === "all-workspace") {
        window.location.href = "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard";
        return;
      }
      if (_.startsWith("workspace-")) {
        const k = _.replace("workspace-", ""), x = c.value.find((q) => q.id === parseInt(k));
        x && W(x);
        return;
      }
    }, N = (_) => {
      const k = h.value;
      switch (_.key) {
        case "dashboard":
          k ? window.location.href = `/single-workspace/${k.id}/dashboard` : window.location.href = "/";
          break;
        case "outlines":
          if (k) {
            const x = `https://outline.aiworkspace.pro/single-workspace/${k.id}/outlines`;
            window.location.href = x;
          } else
            window.location.href = "https://outline.aiworkspace.pro";
          break;
        case "canvas":
          if (k) {
            const x = `https://canvas.aiworkspace.pro/single-workspace/${k.id}/canvas`;
            window.location.href = x;
          } else
            window.location.href = "https://canvas.aiworkspace.pro";
          break;
        case "files":
          if (k) {
            const x = `https://drive.aiworkspace.pro/single-workspace/${k.id}/files`;
            window.location.href = x;
          } else
            window.location.href = "https://drive.aiworkspace.pro";
          break;
        case "tasks":
          if (k) {
            const x = `https://tasks.aiworkspace.pro/single-workspace/${k.id}/tasks`;
            window.location.href = x;
          } else
            window.location.href = "https://tasks.aiworkspace.pro";
          break;
        case "ai-portfolios":
          if (k) {
            const x = `https://spreadsheet.aiworkspace.pro/single-workspace/${k.id}/ai-portfolios`;
            window.location.href = x;
          } else
            window.location.href = "https://spreadsheet.aiworkspace.pro";
          break;
        default:
          if (k) {
            const x = `https://app.aiworkspace.pro/single-workspace/${k.id}/${_.key}`;
            window.location.href = x;
          } else {
            const x = `https://app.aiworkspace.pro/${_.key}`;
            window.location.href = x;
          }
          break;
      }
    }, $ = (_) => {
      const k = h.value;
      switch (_.key) {
        case "dashboard":
          return k ? `/single-workspace/${k.id}/dashboard` : "/";
        case "ai-portfolios":
          return k ? `https://spreadsheet.aiworkspace.pro/single-workspace/${k.id}/ai-portfolios` : "https://spreadsheet.aiworkspace.pro";
        case "outlines":
          return k ? `https://outline.aiworkspace.pro/single-workspace/${k.id}/outlines` : "https://outline.aiworkspace.pro";
        case "canvas":
          return k ? `https://canvas.aiworkspace.pro/single-workspace/${k.id}/canvas` : "https://canvas.aiworkspace.pro";
        case "files":
          return k ? `https://drive.aiworkspace.pro/single-workspace/${k.id}/files` : "https://drive.aiworkspace.pro";
        case "tasks":
          return k ? `https://tasks.aiworkspace.pro/single-workspace/${k.id}/tasks` : "https://tasks.aiworkspace.pro";
        default:
          return k ? `https://app.aiworkspace.pro/single-workspace/${k.id}/${_.key}` : `https://app.aiworkspace.pro/${_.key}`;
      }
    }, I = (_) => {
      switch (_) {
        case "profile":
          s.onProfileClick ? s.onProfileClick() : ms.info("Profile settings coming soon");
          break;
        case "workspaces":
          a.value = !0;
          break;
        case "logout":
          T();
          break;
      }
    }, W = (_) => {
      i.setCurrentWorkspace(_), a.value = !1, n("workspaceChange", _), ms.success(`Switched to ${_.title}`);
    }, H = () => {
      ao.prompt("Enter workspace name:", "Create New Workspace", {
        confirmButtonText: "Create",
        cancelButtonText: "Cancel",
        inputPattern: /\S/,
        inputErrorMessage: "Workspace name cannot be empty"
      }).then(({ value: _ }) => {
        const k = {
          id: Date.now(),
          title: _,
          description: "New workspace",
          archived: !1,
          created_by: "",
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          latest_activity: (/* @__PURE__ */ new Date()).toISOString(),
          hasAccess: !0,
          accessType: "edit"
        };
        l.value.push(k), i.setWorkspaces(l.value), W(k), ms.success(`Created workspace: ${_}`);
      }).catch(() => {
      });
    }, T = () => {
      ao.confirm(
        "Are you sure you want to sign out?",
        "Sign Out",
        {
          confirmButtonText: "Sign Out",
          cancelButtonText: "Cancel",
          type: "warning"
        }
      ).then(async () => {
        i.clearData(), await o(), n("logout"), ms.success("Signed out successfully");
      }).catch(() => {
      });
    }, w = async () => {
      var _, k;
      if (r.value.user) {
        const x = r.value.user;
        u.value = {
          name: x.name || ((_ = x.email) == null ? void 0 : _.split("@")[0]) || "User",
          email: x.email || "",
          avatar_url: x.avatar_url || null,
          initials: (x.name || ((k = x.email) == null ? void 0 : k.split("@")[0]) || "U").split(" ").map((q) => q[0]).join("").toUpperCase().substring(0, 2)
        }, s.showWorkspaceSelector && await y();
      }
    };
    return re(() => r.value.user, (_) => {
      _ ? w() : (u.value = { name: "", email: "", avatar_url: null, initials: "" }, i.clearData());
    }), re(() => s.currentWorkspaceId, (_) => {
      if (_ && f.value.length) {
        const k = f.value.find((x) => x.id.toString() === _.toString());
        k && i.setCurrentWorkspace(k);
      }
    }), Se(async () => {
      p.value && await w();
    }), (_, k) => {
      const x = ye("el-icon"), q = ye("el-dropdown-item"), te = ye("el-tag"), U = ye("el-dropdown-menu"), J = ye("el-dropdown"), K = ye("el-button"), Ee = ye("el-dialog");
      return E(), L("header", ag, [
        p.value ? (E(), L("div", lg, [
          P("div", cg, [
            P("div", ug, [
              P("a", dg, [
                _.customLogo ? (E(), L("img", {
                  key: 0,
                  src: _.customLogo,
                  alt: "AIWorkspace",
                  class: "logo-image"
                }, null, 8, hg)) : (E(), L("div", fg, [...k[6] || (k[6] = [
                  P("span", { class: "logo-text" }, "AI Workspace", -1)
                ])]))
              ])
            ])
          ]),
          _.showSecondaryNavigation ? (E(), L("div", pg, [
            P("nav", gg, [
              _.showWorkspaceSelector ? (E(), z(J, {
                key: 0,
                onCommand: A,
                trigger: "hover"
              }, {
                dropdown: M(() => [
                  Z(U, { class: "workspace-tree-dropdown" }, {
                    default: M(() => [
                      Z(q, { command: "all-workspace" }, {
                        default: M(() => [...k[7] || (k[7] = [
                          P("a", {
                            href: "https://all-ws-dashboard.aiworkspace.pro/all-workspace/dashboard",
                            class: "nav-link"
                          }, [
                            P("div", { class: "workspace-dropdown-item" }, [
                              P("span", { class: "workspace-icon" }, "🌐"),
                              P("span", null, "All workspace")
                            ])
                          ], -1)
                        ])]),
                        _: 1
                      }),
                      f.value.length > 0 ? (E(), z(q, {
                        key: 0,
                        divided: "",
                        disabled: ""
                      })) : B("", !0),
                      (E(!0), L(Xe, null, Zs(f.value, (F) => (E(), z(q, {
                        key: F.id,
                        command: `workspace-${F.id}`
                      }, {
                        default: M(() => {
                          var ze;
                          return [
                            P("a", {
                              href: `/single-workspace/${F.id}/dashboard`,
                              class: "nav-link",
                              onClick: Ie((Mt) => W(F), ["prevent"])
                            }, [
                              P("div", {
                                class: "workspace-dropdown-item",
                                style: ht({ paddingLeft: (F.level || 0) * 16 + "px" })
                              }, [
                                P("span", yg, Q(F.children && F.children.length ? "📁" : "📄"), 1),
                                P("span", null, Q(F.title), 1),
                                F.id === ((ze = h.value) == null ? void 0 : ze.id) ? (E(), z(te, {
                                  key: 0,
                                  size: "small",
                                  type: "success"
                                }, {
                                  default: M(() => [...k[8] || (k[8] = [
                                    $e("Current", -1)
                                  ])]),
                                  _: 1
                                })) : B("", !0)
                              ], 4)
                            ], 8, mg)
                          ];
                        }),
                        _: 2
                      }, 1032, ["command"]))), 128)),
                      f.value.length === 0 ? (E(), z(q, {
                        key: 1,
                        disabled: ""
                      }, {
                        default: M(() => [...k[9] || (k[9] = [
                          $e(" No workspaces ", -1)
                        ])]),
                        _: 1
                      })) : B("", !0)
                    ]),
                    _: 1
                  })
                ]),
                default: M(() => {
                  var F;
                  return [
                    P("span", vg, [
                      $e(Q(((F = h.value) == null ? void 0 : F.title) || "Select Workspace") + " ", 1),
                      Z(x, { class: "nav-arrow" }, {
                        default: M(() => [
                          Z(g(Wr))
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }),
                _: 1
              })) : B("", !0),
              _.showWorkspaceSelector ? (E(), L("span", _g, "/")) : B("", !0),
              _.showSecondaryNavigation ? (E(), z(J, {
                key: 2,
                trigger: "hover"
              }, {
                dropdown: M(() => [
                  Z(U, null, {
                    default: M(() => [
                      (E(!0), L(Xe, null, Zs(m.value, (F) => (E(), z(q, {
                        key: F.label,
                        class: R({ active: F.active })
                      }, {
                        default: M(() => [
                          P("a", {
                            href: $(F),
                            class: "nav-link",
                            onClick: Ie((ze) => N(F), ["prevent"])
                          }, Q(F.label), 9, wg)
                        ]),
                        _: 2
                      }, 1032, ["class"]))), 128))
                    ]),
                    _: 1
                  })
                ]),
                default: M(() => [
                  P("span", bg, [
                    $e(Q(b.value) + " ", 1),
                    Z(x, { class: "nav-arrow" }, {
                      default: M(() => [
                        Z(g(Wr))
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })) : B("", !0)
            ])
          ])) : B("", !0),
          P("div", kg, [
            Z(J, {
              onCommand: I,
              trigger: "click",
              placement: "bottom-end"
            }, {
              dropdown: M(() => [
                Z(U, null, {
                  default: M(() => [
                    Z(q, null, {
                      default: M(() => [
                        P("a", {
                          href: "/profile",
                          class: "nav-link",
                          onClick: k[0] || (k[0] = Ie((F) => I("profile"), ["prevent"]))
                        }, "Profile Settings")
                      ]),
                      _: 1
                    }),
                    _.showWorkspaceSelector ? (E(), z(q, { key: 0 }, {
                      default: M(() => [
                        P("a", {
                          href: "#switch-workspace",
                          class: "nav-link",
                          onClick: k[1] || (k[1] = Ie((F) => I("workspaces"), ["prevent"]))
                        }, "Switch Workspace")
                      ]),
                      _: 1
                    })) : B("", !0),
                    Z(q, { divided: "" }, {
                      default: M(() => [
                        P("a", {
                          href: "#signout",
                          class: "nav-link",
                          onClick: k[2] || (k[2] = Ie((F) => I("logout"), ["prevent"]))
                        }, "Sign Out")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              default: M(() => [
                P("div", Sg, [
                  P("div", Eg, [
                    P("span", Tg, Q(u.value.name), 1)
                  ]),
                  P("div", Cg, [
                    u.value.avatar_url ? (E(), L("img", {
                      key: 0,
                      src: u.value.avatar_url,
                      alt: u.value.name
                    }, null, 8, Og)) : (E(), L("span", Ig, Q(u.value.initials), 1))
                  ])
                ])
              ]),
              _: 1
            })
          ])
        ])) : (E(), L("div", Ag, [...k[10] || (k[10] = [
          P("div", { class: "unauth-inner" }, [
            P("strong", null, "Authentication required."),
            $e(" Please log in to access the workspace. ")
          ], -1)
        ])])),
        p.value && _.showWorkspaceSelector ? (E(), z(Ee, {
          key: 2,
          modelValue: a.value,
          "onUpdate:modelValue": k[4] || (k[4] = (F) => a.value = F),
          title: "Switch Workspace",
          width: "500px",
          onClose: k[5] || (k[5] = (F) => a.value = !1)
        }, {
          footer: M(() => [
            Z(K, {
              onClick: k[3] || (k[3] = (F) => a.value = !1)
            }, {
              default: M(() => [...k[11] || (k[11] = [
                $e("Cancel", -1)
              ])]),
              _: 1
            }),
            Z(K, {
              type: "primary",
              onClick: H
            }, {
              default: M(() => [...k[12] || (k[12] = [
                $e("Create New Workspace", -1)
              ])]),
              _: 1
            })
          ]),
          default: M(() => [
            P("div", Pg, [
              (E(!0), L(Xe, null, Zs(l.value, (F) => {
                var ze, Mt;
                return E(), L("div", {
                  key: F.id,
                  class: R(["workspace-item", { active: F.id === ((ze = h.value) == null ? void 0 : ze.id) }]),
                  onClick: (Ys) => W(F)
                }, [
                  P("div", xg, Q(F.children && F.children.length ? "📁" : "📄"), 1),
                  P("div", jg, [
                    P("h3", null, Q(F.title), 1),
                    P("p", null, Q(F.description), 1),
                    P("span", Ng, Q(F.hasAccess ? "Active" : "Inactive"), 1)
                  ]),
                  F.id === ((Mt = h.value) == null ? void 0 : Mt.id) ? (E(), L("div", Rg, [
                    Z(x, null, {
                      default: M(() => [
                        Z(g(Eu))
                      ]),
                      _: 1
                    })
                  ])) : B("", !0)
                ], 10, $g);
              }), 128))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])) : B("", !0)
      ]);
    };
  }
});
const Mg = (t, e) => {
  const s = t.__vccOpts || t;
  for (const [n, r] of e)
    s[n] = r;
  return s;
}, Qg = /* @__PURE__ */ Mg(Lg, [["__scopeId", "data-v-53e8a109"]]), $o = "aiworkspace_auth", xo = "aiworkspace_user_id";
function ev() {
  const t = j({
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
  return Se(() => {
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
  De as ACCESS_COOKIE,
  Qg as AIWorkspaceHeader,
  ea as LS_ACCESS_KEY,
  ta as LS_REFRESH_KEY,
  Be as REFRESH_COOKIE,
  Yg as buildOAuthRedirectUrl,
  Zp as clearLocalStorageTokens,
  To as clearSessionCookie,
  Qi as ensureCrossSubdomainCookies,
  gt as getCookie,
  Xg as getPostLoginBase,
  Zg as restoreCrossSubdomainSession,
  Co as restoreSessionWithRetry,
  ct as setSessionCookie,
  Qp as setupAuthStateListener,
  _e as supabase,
  Rs as syncCookiesToLocalStorage,
  ev as useAuth,
  eg as useEnhancedAuth,
  ig as useWorkspaceStore
};
