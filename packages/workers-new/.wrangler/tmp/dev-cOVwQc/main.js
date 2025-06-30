var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_modules_watch_stub();
  }
});

// ../../node_modules/.pnpm/wrangler@4.22.0/node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "../../node_modules/.pnpm/wrangler@4.22.0/node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// ../../node_modules/.pnpm/@prisma+client@6.8.2_prisma@6.8.2_typescript@5.8.3__typescript@5.8.3/node_modules/@prisma/client/runtime/wasm.js
var require_wasm = __commonJS({
  "../../node_modules/.pnpm/@prisma+client@6.8.2_prisma@6.8.2_typescript@5.8.3__typescript@5.8.3/node_modules/@prisma/client/runtime/wasm.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    var zo = Object.create;
    var Ot = Object.defineProperty;
    var Yo = Object.getOwnPropertyDescriptor;
    var Xo = Object.getOwnPropertyNames;
    var Zo = Object.getPrototypeOf;
    var es = Object.prototype.hasOwnProperty;
    var ne = /* @__PURE__ */ __name((t, e) => () => (t && (e = t(t = 0)), e), "ne");
    var Le = /* @__PURE__ */ __name((t, e) => () => (e || t((e = { exports: {} }).exports, e), e.exports), "Le");
    var rt = /* @__PURE__ */ __name((t, e) => {
      for (var r in e) Ot(t, r, { get: e[r], enumerable: true });
    }, "rt");
    var cn = /* @__PURE__ */ __name((t, e, r, n) => {
      if (e && typeof e == "object" || typeof e == "function") for (let i of Xo(e)) !es.call(t, i) && i !== r && Ot(t, i, { get: /* @__PURE__ */ __name(() => e[i], "get"), enumerable: !(n = Yo(e, i)) || n.enumerable });
      return t;
    }, "cn");
    var nt = /* @__PURE__ */ __name((t, e, r) => (r = t != null ? zo(Zo(t)) : {}, cn(e || !t || !t.__esModule ? Ot(r, "default", { value: t, enumerable: true }) : r, t)), "nt");
    var ts = /* @__PURE__ */ __name((t) => cn(Ot({}, "__esModule", { value: true }), t), "ts");
    function xr(t, e) {
      if (e = e.toLowerCase(), e === "utf8" || e === "utf-8") return new y(os.encode(t));
      if (e === "base64" || e === "base64url") return t = t.replace(/-/g, "+").replace(/_/g, "/"), t = t.replace(/[^A-Za-z0-9+/]/g, ""), new y([...atob(t)].map((r) => r.charCodeAt(0)));
      if (e === "binary" || e === "ascii" || e === "latin1" || e === "latin-1") return new y([...t].map((r) => r.charCodeAt(0)));
      if (e === "ucs2" || e === "ucs-2" || e === "utf16le" || e === "utf-16le") {
        let r = new y(t.length * 2), n = new DataView(r.buffer);
        for (let i = 0; i < t.length; i++) n.setUint16(i * 2, t.charCodeAt(i), true);
        return r;
      }
      if (e === "hex") {
        let r = new y(t.length / 2);
        for (let n = 0, i = 0; i < t.length; i += 2, n++) r[n] = parseInt(t.slice(i, i + 2), 16);
        return r;
      }
      pn(`encoding "${e}"`);
    }
    __name(xr, "xr");
    function rs(t) {
      let r = Object.getOwnPropertyNames(DataView.prototype).filter((a) => a.startsWith("get") || a.startsWith("set")), n = r.map((a) => a.replace("get", "read").replace("set", "write")), i = /* @__PURE__ */ __name((a, f) => function(h = 0) {
        return B(h, "offset"), Y(h, "offset"), V(h, "offset", this.length - 1), new DataView(this.buffer)[r[a]](h, f);
      }, "i"), o = /* @__PURE__ */ __name((a, f) => function(h, T = 0) {
        let C = r[a].match(/set(\w+\d+)/)[1].toLowerCase(), k = is[C];
        return B(T, "offset"), Y(T, "offset"), V(T, "offset", this.length - 1), ns(h, "value", k[0], k[1]), new DataView(this.buffer)[r[a]](T, h, f), T + parseInt(r[a].match(/\d+/)[0]) / 8;
      }, "o"), s = /* @__PURE__ */ __name((a) => {
        a.forEach((f) => {
          f.includes("Uint") && (t[f.replace("Uint", "UInt")] = t[f]), f.includes("Float64") && (t[f.replace("Float64", "Double")] = t[f]), f.includes("Float32") && (t[f.replace("Float32", "Float")] = t[f]);
        });
      }, "s");
      n.forEach((a, f) => {
        a.startsWith("read") && (t[a] = i(f, false), t[a + "LE"] = i(f, true), t[a + "BE"] = i(f, false)), a.startsWith("write") && (t[a] = o(f, false), t[a + "LE"] = o(f, true), t[a + "BE"] = o(f, false)), s([a, a + "LE", a + "BE"]);
      });
    }
    __name(rs, "rs");
    function pn(t) {
      throw new Error(`Buffer polyfill does not implement "${t}"`);
    }
    __name(pn, "pn");
    function Mt(t, e) {
      if (!(t instanceof Uint8Array)) throw new TypeError(`The "${e}" argument must be an instance of Buffer or Uint8Array`);
    }
    __name(Mt, "Mt");
    function V(t, e, r = ls + 1) {
      if (t < 0 || t > r) {
        let n = new RangeError(`The value of "${e}" is out of range. It must be >= 0 && <= ${r}. Received ${t}`);
        throw n.code = "ERR_OUT_OF_RANGE", n;
      }
    }
    __name(V, "V");
    function B(t, e) {
      if (typeof t != "number") {
        let r = new TypeError(`The "${e}" argument must be of type number. Received type ${typeof t}.`);
        throw r.code = "ERR_INVALID_ARG_TYPE", r;
      }
    }
    __name(B, "B");
    function Y(t, e) {
      if (!Number.isInteger(t) || Number.isNaN(t)) {
        let r = new RangeError(`The value of "${e}" is out of range. It must be an integer. Received ${t}`);
        throw r.code = "ERR_OUT_OF_RANGE", r;
      }
    }
    __name(Y, "Y");
    function ns(t, e, r, n) {
      if (t < r || t > n) {
        let i = new RangeError(`The value of "${e}" is out of range. It must be >= ${r} and <= ${n}. Received ${t}`);
        throw i.code = "ERR_OUT_OF_RANGE", i;
      }
    }
    __name(ns, "ns");
    function mn(t, e) {
      if (typeof t != "string") {
        let r = new TypeError(`The "${e}" argument must be of type string. Received type ${typeof t}`);
        throw r.code = "ERR_INVALID_ARG_TYPE", r;
      }
    }
    __name(mn, "mn");
    function us(t, e = "utf8") {
      return y.from(t, e);
    }
    __name(us, "us");
    var y;
    var is;
    var os;
    var ss;
    var as;
    var ls;
    var b;
    var Er;
    var u = ne(() => {
      "use strict";
      y = class t extends Uint8Array {
        static {
          __name(this, "t");
        }
        _isBuffer = true;
        get offset() {
          return this.byteOffset;
        }
        static alloc(e, r = 0, n = "utf8") {
          return mn(n, "encoding"), t.allocUnsafe(e).fill(r, n);
        }
        static allocUnsafe(e) {
          return t.from(e);
        }
        static allocUnsafeSlow(e) {
          return t.from(e);
        }
        static isBuffer(e) {
          return e && !!e._isBuffer;
        }
        static byteLength(e, r = "utf8") {
          if (typeof e == "string") return xr(e, r).byteLength;
          if (e && e.byteLength) return e.byteLength;
          let n = new TypeError('The "string" argument must be of type string or an instance of Buffer or ArrayBuffer.');
          throw n.code = "ERR_INVALID_ARG_TYPE", n;
        }
        static isEncoding(e) {
          return as.includes(e);
        }
        static compare(e, r) {
          Mt(e, "buff1"), Mt(r, "buff2");
          for (let n = 0; n < e.length; n++) {
            if (e[n] < r[n]) return -1;
            if (e[n] > r[n]) return 1;
          }
          return e.length === r.length ? 0 : e.length > r.length ? 1 : -1;
        }
        static from(e, r = "utf8") {
          if (e && typeof e == "object" && e.type === "Buffer") return new t(e.data);
          if (typeof e == "number") return new t(new Uint8Array(e));
          if (typeof e == "string") return xr(e, r);
          if (ArrayBuffer.isView(e)) {
            let { byteOffset: n, byteLength: i, buffer: o } = e;
            return "map" in e && typeof e.map == "function" ? new t(e.map((s) => s % 256), n, i) : new t(o, n, i);
          }
          if (e && typeof e == "object" && ("length" in e || "byteLength" in e || "buffer" in e)) return new t(e);
          throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
        }
        static concat(e, r) {
          if (e.length === 0) return t.alloc(0);
          let n = [].concat(...e.map((o) => [...o])), i = t.alloc(r !== void 0 ? r : n.length);
          return i.set(r !== void 0 ? n.slice(0, r) : n), i;
        }
        slice(e = 0, r = this.length) {
          return this.subarray(e, r);
        }
        subarray(e = 0, r = this.length) {
          return Object.setPrototypeOf(super.subarray(e, r), t.prototype);
        }
        reverse() {
          return super.reverse(), this;
        }
        readIntBE(e, r) {
          B(e, "offset"), Y(e, "offset"), V(e, "offset", this.length - 1), B(r, "byteLength"), Y(r, "byteLength");
          let n = new DataView(this.buffer, e, r), i = 0;
          for (let o = 0; o < r; o++) i = i * 256 + n.getUint8(o);
          return n.getUint8(0) & 128 && (i -= Math.pow(256, r)), i;
        }
        readIntLE(e, r) {
          B(e, "offset"), Y(e, "offset"), V(e, "offset", this.length - 1), B(r, "byteLength"), Y(r, "byteLength");
          let n = new DataView(this.buffer, e, r), i = 0;
          for (let o = 0; o < r; o++) i += n.getUint8(o) * Math.pow(256, o);
          return n.getUint8(r - 1) & 128 && (i -= Math.pow(256, r)), i;
        }
        readUIntBE(e, r) {
          B(e, "offset"), Y(e, "offset"), V(e, "offset", this.length - 1), B(r, "byteLength"), Y(r, "byteLength");
          let n = new DataView(this.buffer, e, r), i = 0;
          for (let o = 0; o < r; o++) i = i * 256 + n.getUint8(o);
          return i;
        }
        readUintBE(e, r) {
          return this.readUIntBE(e, r);
        }
        readUIntLE(e, r) {
          B(e, "offset"), Y(e, "offset"), V(e, "offset", this.length - 1), B(r, "byteLength"), Y(r, "byteLength");
          let n = new DataView(this.buffer, e, r), i = 0;
          for (let o = 0; o < r; o++) i += n.getUint8(o) * Math.pow(256, o);
          return i;
        }
        readUintLE(e, r) {
          return this.readUIntLE(e, r);
        }
        writeIntBE(e, r, n) {
          return e = e < 0 ? e + Math.pow(256, n) : e, this.writeUIntBE(e, r, n);
        }
        writeIntLE(e, r, n) {
          return e = e < 0 ? e + Math.pow(256, n) : e, this.writeUIntLE(e, r, n);
        }
        writeUIntBE(e, r, n) {
          B(r, "offset"), Y(r, "offset"), V(r, "offset", this.length - 1), B(n, "byteLength"), Y(n, "byteLength");
          let i = new DataView(this.buffer, r, n);
          for (let o = n - 1; o >= 0; o--) i.setUint8(o, e & 255), e = e / 256;
          return r + n;
        }
        writeUintBE(e, r, n) {
          return this.writeUIntBE(e, r, n);
        }
        writeUIntLE(e, r, n) {
          B(r, "offset"), Y(r, "offset"), V(r, "offset", this.length - 1), B(n, "byteLength"), Y(n, "byteLength");
          let i = new DataView(this.buffer, r, n);
          for (let o = 0; o < n; o++) i.setUint8(o, e & 255), e = e / 256;
          return r + n;
        }
        writeUintLE(e, r, n) {
          return this.writeUIntLE(e, r, n);
        }
        toJSON() {
          return { type: "Buffer", data: Array.from(this) };
        }
        swap16() {
          let e = new DataView(this.buffer, this.byteOffset, this.byteLength);
          for (let r = 0; r < this.length; r += 2) e.setUint16(r, e.getUint16(r, true), false);
          return this;
        }
        swap32() {
          let e = new DataView(this.buffer, this.byteOffset, this.byteLength);
          for (let r = 0; r < this.length; r += 4) e.setUint32(r, e.getUint32(r, true), false);
          return this;
        }
        swap64() {
          let e = new DataView(this.buffer, this.byteOffset, this.byteLength);
          for (let r = 0; r < this.length; r += 8) e.setBigUint64(r, e.getBigUint64(r, true), false);
          return this;
        }
        compare(e, r = 0, n = e.length, i = 0, o = this.length) {
          return Mt(e, "target"), B(r, "targetStart"), B(n, "targetEnd"), B(i, "sourceStart"), B(o, "sourceEnd"), V(r, "targetStart"), V(n, "targetEnd", e.length), V(i, "sourceStart"), V(o, "sourceEnd", this.length), t.compare(this.slice(i, o), e.slice(r, n));
        }
        equals(e) {
          return Mt(e, "otherBuffer"), this.length === e.length && this.every((r, n) => r === e[n]);
        }
        copy(e, r = 0, n = 0, i = this.length) {
          V(r, "targetStart"), V(n, "sourceStart", this.length), V(i, "sourceEnd"), r >>>= 0, n >>>= 0, i >>>= 0;
          let o = 0;
          for (; n < i && !(this[n] === void 0 || e[r] === void 0); ) e[r] = this[n], o++, n++, r++;
          return o;
        }
        write(e, r, n, i = "utf8") {
          let o = typeof r == "string" ? 0 : r ?? 0, s = typeof n == "string" ? this.length - o : n ?? this.length - o;
          return i = typeof r == "string" ? r : typeof n == "string" ? n : i, B(o, "offset"), B(s, "length"), V(o, "offset", this.length), V(s, "length", this.length), (i === "ucs2" || i === "ucs-2" || i === "utf16le" || i === "utf-16le") && (s = s - s % 2), xr(e, i).copy(this, o, 0, s);
        }
        fill(e = 0, r = 0, n = this.length, i = "utf-8") {
          let o = typeof r == "string" ? 0 : r, s = typeof n == "string" ? this.length : n;
          if (i = typeof r == "string" ? r : typeof n == "string" ? n : i, e = t.from(typeof e == "number" ? [e] : e ?? [], i), mn(i, "encoding"), V(o, "offset", this.length), V(s, "end", this.length), e.length !== 0) for (let a = o; a < s; a += e.length) super.set(e.slice(0, e.length + a >= this.length ? this.length - a : e.length), a);
          return this;
        }
        includes(e, r = null, n = "utf-8") {
          return this.indexOf(e, r, n) !== -1;
        }
        lastIndexOf(e, r = null, n = "utf-8") {
          return this.indexOf(e, r, n, true);
        }
        indexOf(e, r = null, n = "utf-8", i = false) {
          let o = i ? this.findLastIndex.bind(this) : this.findIndex.bind(this);
          n = typeof r == "string" ? r : n;
          let s = t.from(typeof e == "number" ? [e] : e, n), a = typeof r == "string" ? 0 : r;
          return a = typeof r == "number" ? a : null, a = Number.isNaN(a) ? null : a, a ??= i ? this.length : 0, a = a < 0 ? this.length + a : a, s.length === 0 && i === false ? a >= this.length ? this.length : a : s.length === 0 && i === true ? (a >= this.length ? this.length : a) || this.length : o((f, h) => (i ? h <= a : h >= a) && this[h] === s[0] && s.every((C, k) => this[h + k] === C));
        }
        toString(e = "utf8", r = 0, n = this.length) {
          if (r = r < 0 ? 0 : r, e = e.toString().toLowerCase(), n <= 0) return "";
          if (e === "utf8" || e === "utf-8") return ss.decode(this.slice(r, n));
          if (e === "base64" || e === "base64url") {
            let i = btoa(this.reduce((o, s) => o + Er(s), ""));
            return e === "base64url" ? i.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "") : i;
          }
          if (e === "binary" || e === "ascii" || e === "latin1" || e === "latin-1") return this.slice(r, n).reduce((i, o) => i + Er(o & (e === "ascii" ? 127 : 255)), "");
          if (e === "ucs2" || e === "ucs-2" || e === "utf16le" || e === "utf-16le") {
            let i = new DataView(this.buffer.slice(r, n));
            return Array.from({ length: i.byteLength / 2 }, (o, s) => s * 2 + 1 < i.byteLength ? Er(i.getUint16(s * 2, true)) : "").join("");
          }
          if (e === "hex") return this.slice(r, n).reduce((i, o) => i + o.toString(16).padStart(2, "0"), "");
          pn(`encoding "${e}"`);
        }
        toLocaleString() {
          return this.toString();
        }
        inspect() {
          return `<Buffer ${this.toString("hex").match(/.{1,2}/g).join(" ")}>`;
        }
      };
      is = { int8: [-128, 127], int16: [-32768, 32767], int32: [-2147483648, 2147483647], uint8: [0, 255], uint16: [0, 65535], uint32: [0, 4294967295], float32: [-1 / 0, 1 / 0], float64: [-1 / 0, 1 / 0], bigint64: [-0x8000000000000000n, 0x7fffffffffffffffn], biguint64: [0n, 0xffffffffffffffffn] }, os = new TextEncoder(), ss = new TextDecoder(), as = ["utf8", "utf-8", "hex", "base64", "ascii", "binary", "base64url", "ucs2", "ucs-2", "utf16le", "utf-16le", "latin1", "latin-1"], ls = 4294967295;
      rs(y.prototype);
      b = new Proxy(us, { construct(t, [e, r]) {
        return y.from(e, r);
      }, get(t, e) {
        return y[e];
      } }), Er = String.fromCodePoint;
    });
    var g;
    var c = ne(() => {
      "use strict";
      g = { nextTick: /* @__PURE__ */ __name((t, ...e) => {
        setTimeout(() => {
          t(...e);
        }, 0);
      }, "nextTick"), env: {}, version: "", cwd: /* @__PURE__ */ __name(() => "/", "cwd"), stderr: {}, argv: ["/bin/node"] };
    });
    var E;
    var m = ne(() => {
      "use strict";
      E = globalThis.performance ?? (() => {
        let t = Date.now();
        return { now: /* @__PURE__ */ __name(() => Date.now() - t, "now") };
      })();
    });
    var x;
    var p = ne(() => {
      "use strict";
      x = /* @__PURE__ */ __name(() => {
      }, "x");
      x.prototype = x;
    });
    var w;
    var d = ne(() => {
      "use strict";
      w = class {
        static {
          __name(this, "w");
        }
        value;
        constructor(e) {
          this.value = e;
        }
        deref() {
          return this.value;
        }
      };
    });
    function yn(t, e) {
      var r, n, i, o, s, a, f, h, T = t.constructor, C = T.precision;
      if (!t.s || !e.s) return e.s || (e = new T(t)), q ? _(e, C) : e;
      if (f = t.d, h = e.d, s = t.e, i = e.e, f = f.slice(), o = s - i, o) {
        for (o < 0 ? (n = f, o = -o, a = h.length) : (n = h, i = s, a = f.length), s = Math.ceil(C / N), a = s > a ? s + 1 : a + 1, o > a && (o = a, n.length = 1), n.reverse(); o--; ) n.push(0);
        n.reverse();
      }
      for (a = f.length, o = h.length, a - o < 0 && (o = a, n = h, h = f, f = n), r = 0; o; ) r = (f[--o] = f[o] + h[o] + r) / Q | 0, f[o] %= Q;
      for (r && (f.unshift(r), ++i), a = f.length; f[--a] == 0; ) f.pop();
      return e.d = f, e.e = i, q ? _(e, C) : e;
    }
    __name(yn, "yn");
    function me(t, e, r) {
      if (t !== ~~t || t < e || t > r) throw Error(Oe + t);
    }
    __name(me, "me");
    function ce(t) {
      var e, r, n, i = t.length - 1, o = "", s = t[0];
      if (i > 0) {
        for (o += s, e = 1; e < i; e++) n = t[e] + "", r = N - n.length, r && (o += Pe(r)), o += n;
        s = t[e], n = s + "", r = N - n.length, r && (o += Pe(r));
      } else if (s === 0) return "0";
      for (; s % 10 === 0; ) s /= 10;
      return o + s;
    }
    __name(ce, "ce");
    function hn(t, e) {
      var r, n, i, o, s, a, f = 0, h = 0, T = t.constructor, C = T.precision;
      if ($3(t) > 16) throw Error(vr + $3(t));
      if (!t.s) return new T(ee);
      for (e == null ? (q = false, a = C) : a = e, s = new T(0.03125); t.abs().gte(0.1); ) t = t.times(s), h += 5;
      for (n = Math.log(ke(2, h)) / Math.LN10 * 2 + 5 | 0, a += n, r = i = o = new T(ee), T.precision = a; ; ) {
        if (i = _(i.times(t), a), r = r.times(++f), s = o.plus(he(i, r, a)), ce(s.d).slice(0, a) === ce(o.d).slice(0, a)) {
          for (; h--; ) o = _(o.times(o), a);
          return T.precision = C, e == null ? (q = true, _(o, C)) : o;
        }
        o = s;
      }
    }
    __name(hn, "hn");
    function $3(t) {
      for (var e = t.e * N, r = t.d[0]; r >= 10; r /= 10) e++;
      return e;
    }
    __name($3, "$");
    function Pr(t, e, r) {
      if (e > t.LN10.sd()) throw q = true, r && (t.precision = r), Error(ie + "LN10 precision limit exceeded");
      return _(new t(t.LN10), e);
    }
    __name(Pr, "Pr");
    function Pe(t) {
      for (var e = ""; t--; ) e += "0";
      return e;
    }
    __name(Pe, "Pe");
    function it(t, e) {
      var r, n, i, o, s, a, f, h, T, C = 1, k = 10, A = t, O = A.d, S = A.constructor, M = S.precision;
      if (A.s < 1) throw Error(ie + (A.s ? "NaN" : "-Infinity"));
      if (A.eq(ee)) return new S(0);
      if (e == null ? (q = false, h = M) : h = e, A.eq(10)) return e == null && (q = true), Pr(S, h);
      if (h += k, S.precision = h, r = ce(O), n = r.charAt(0), o = $3(A), Math.abs(o) < 15e14) {
        for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; ) A = A.times(t), r = ce(A.d), n = r.charAt(0), C++;
        o = $3(A), n > 1 ? (A = new S("0." + r), o++) : A = new S(n + "." + r.slice(1));
      } else return f = Pr(S, h + 2, M).times(o + ""), A = it(new S(n + "." + r.slice(1)), h - k).plus(f), S.precision = M, e == null ? (q = true, _(A, M)) : A;
      for (a = s = A = he(A.minus(ee), A.plus(ee), h), T = _(A.times(A), h), i = 3; ; ) {
        if (s = _(s.times(T), h), f = a.plus(he(s, new S(i), h)), ce(f.d).slice(0, h) === ce(a.d).slice(0, h)) return a = a.times(2), o !== 0 && (a = a.plus(Pr(S, h + 2, M).times(o + ""))), a = he(a, new S(C), h), S.precision = M, e == null ? (q = true, _(a, M)) : a;
        a = f, i += 2;
      }
    }
    __name(it, "it");
    function dn(t, e) {
      var r, n, i;
      for ((r = e.indexOf(".")) > -1 && (e = e.replace(".", "")), (n = e.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +e.slice(n + 1), e = e.substring(0, n)) : r < 0 && (r = e.length), n = 0; e.charCodeAt(n) === 48; ) ++n;
      for (i = e.length; e.charCodeAt(i - 1) === 48; ) --i;
      if (e = e.slice(n, i), e) {
        if (i -= n, r = r - n - 1, t.e = Ne(r / N), t.d = [], n = (r + 1) % N, r < 0 && (n += N), n < i) {
          for (n && t.d.push(+e.slice(0, n)), i -= N; n < i; ) t.d.push(+e.slice(n, n += N));
          e = e.slice(n), n = N - e.length;
        } else n -= i;
        for (; n--; ) e += "0";
        if (t.d.push(+e), q && (t.e > It || t.e < -It)) throw Error(vr + r);
      } else t.s = 0, t.e = 0, t.d = [0];
      return t;
    }
    __name(dn, "dn");
    function _(t, e, r) {
      var n, i, o, s, a, f, h, T, C = t.d;
      for (s = 1, o = C[0]; o >= 10; o /= 10) s++;
      if (n = e - s, n < 0) n += N, i = e, h = C[T = 0];
      else {
        if (T = Math.ceil((n + 1) / N), o = C.length, T >= o) return t;
        for (h = o = C[T], s = 1; o >= 10; o /= 10) s++;
        n %= N, i = n - N + s;
      }
      if (r !== void 0 && (o = ke(10, s - i - 1), a = h / o % 10 | 0, f = e < 0 || C[T + 1] !== void 0 || h % o, f = r < 4 ? (a || f) && (r == 0 || r == (t.s < 0 ? 3 : 2)) : a > 5 || a == 5 && (r == 4 || f || r == 6 && (n > 0 ? i > 0 ? h / ke(10, s - i) : 0 : C[T - 1]) % 10 & 1 || r == (t.s < 0 ? 8 : 7))), e < 1 || !C[0]) return f ? (o = $3(t), C.length = 1, e = e - o - 1, C[0] = ke(10, (N - e % N) % N), t.e = Ne(-e / N) || 0) : (C.length = 1, C[0] = t.e = t.s = 0), t;
      if (n == 0 ? (C.length = T, o = 1, T--) : (C.length = T + 1, o = ke(10, N - n), C[T] = i > 0 ? (h / ke(10, s - i) % ke(10, i) | 0) * o : 0), f) for (; ; ) if (T == 0) {
        (C[0] += o) == Q && (C[0] = 1, ++t.e);
        break;
      } else {
        if (C[T] += o, C[T] != Q) break;
        C[T--] = 0, o = 1;
      }
      for (n = C.length; C[--n] === 0; ) C.pop();
      if (q && (t.e > It || t.e < -It)) throw Error(vr + $3(t));
      return t;
    }
    __name(_, "_");
    function bn(t, e) {
      var r, n, i, o, s, a, f, h, T, C, k = t.constructor, A = k.precision;
      if (!t.s || !e.s) return e.s ? e.s = -e.s : e = new k(t), q ? _(e, A) : e;
      if (f = t.d, C = e.d, n = e.e, h = t.e, f = f.slice(), s = h - n, s) {
        for (T = s < 0, T ? (r = f, s = -s, a = C.length) : (r = C, n = h, a = f.length), i = Math.max(Math.ceil(A / N), a) + 2, s > i && (s = i, r.length = 1), r.reverse(), i = s; i--; ) r.push(0);
        r.reverse();
      } else {
        for (i = f.length, a = C.length, T = i < a, T && (a = i), i = 0; i < a; i++) if (f[i] != C[i]) {
          T = f[i] < C[i];
          break;
        }
        s = 0;
      }
      for (T && (r = f, f = C, C = r, e.s = -e.s), a = f.length, i = C.length - a; i > 0; --i) f[a++] = 0;
      for (i = C.length; i > s; ) {
        if (f[--i] < C[i]) {
          for (o = i; o && f[--o] === 0; ) f[o] = Q - 1;
          --f[o], f[i] += Q;
        }
        f[i] -= C[i];
      }
      for (; f[--a] === 0; ) f.pop();
      for (; f[0] === 0; f.shift()) --n;
      return f[0] ? (e.d = f, e.e = n, q ? _(e, A) : e) : new k(0);
    }
    __name(bn, "bn");
    function Me(t, e, r) {
      var n, i = $3(t), o = ce(t.d), s = o.length;
      return e ? (r && (n = r - s) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Pe(n) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (i < 0 ? "e" : "e+") + i) : i < 0 ? (o = "0." + Pe(-i - 1) + o, r && (n = r - s) > 0 && (o += Pe(n))) : i >= s ? (o += Pe(i + 1 - s), r && (n = r - i - 1) > 0 && (o = o + "." + Pe(n))) : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)), r && (n = r - s) > 0 && (i + 1 === s && (o += "."), o += Pe(n))), t.s < 0 ? "-" + o : o;
    }
    __name(Me, "Me");
    function fn(t, e) {
      if (t.length > e) return t.length = e, true;
    }
    __name(fn, "fn");
    function wn(t) {
      var e, r, n;
      function i(o) {
        var s = this;
        if (!(s instanceof i)) return new i(o);
        if (s.constructor = i, o instanceof i) {
          s.s = o.s, s.e = o.e, s.d = (o = o.d) ? o.slice() : o;
          return;
        }
        if (typeof o == "number") {
          if (o * 0 !== 0) throw Error(Oe + o);
          if (o > 0) s.s = 1;
          else if (o < 0) o = -o, s.s = -1;
          else {
            s.s = 0, s.e = 0, s.d = [0];
            return;
          }
          if (o === ~~o && o < 1e7) {
            s.e = 0, s.d = [o];
            return;
          }
          return dn(s, o.toString());
        } else if (typeof o != "string") throw Error(Oe + o);
        if (o.charCodeAt(0) === 45 ? (o = o.slice(1), s.s = -1) : s.s = 1, ms.test(o)) dn(s, o);
        else throw Error(Oe + o);
      }
      __name(i, "i");
      if (i.prototype = R, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.clone = wn, i.config = i.set = ps, t === void 0 && (t = {}), t) for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], e = 0; e < n.length; ) t.hasOwnProperty(r = n[e++]) || (t[r] = this[r]);
      return i.config(t), i;
    }
    __name(wn, "wn");
    function ps(t) {
      if (!t || typeof t != "object") throw Error(ie + "Object expected");
      var e, r, n, i = ["precision", 1, Fe, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (e = 0; e < i.length; e += 3) if ((n = t[r = i[e]]) !== void 0) if (Ne(n) === n && n >= i[e + 1] && n <= i[e + 2]) this[r] = n;
      else throw Error(Oe + r + ": " + n);
      if ((n = t[r = "LN10"]) !== void 0) if (n == Math.LN10) this[r] = new this(n);
      else throw Error(Oe + r + ": " + n);
      return this;
    }
    __name(ps, "ps");
    var Fe;
    var cs;
    var Tr;
    var q;
    var ie;
    var Oe;
    var vr;
    var Ne;
    var ke;
    var ms;
    var ee;
    var Q;
    var N;
    var gn;
    var It;
    var R;
    var he;
    var Tr;
    var Dt;
    var xn = ne(() => {
      "use strict";
      u();
      c();
      m();
      p();
      d();
      l();
      Fe = 1e9, cs = { precision: 20, rounding: 4, toExpNeg: -7, toExpPos: 21, LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286" }, q = true, ie = "[DecimalError] ", Oe = ie + "Invalid argument: ", vr = ie + "Exponent out of range: ", Ne = Math.floor, ke = Math.pow, ms = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, Q = 1e7, N = 7, gn = 9007199254740991, It = Ne(gn / N), R = {};
      R.absoluteValue = R.abs = function() {
        var t = new this.constructor(this);
        return t.s && (t.s = 1), t;
      };
      R.comparedTo = R.cmp = function(t) {
        var e, r, n, i, o = this;
        if (t = new o.constructor(t), o.s !== t.s) return o.s || -t.s;
        if (o.e !== t.e) return o.e > t.e ^ o.s < 0 ? 1 : -1;
        for (n = o.d.length, i = t.d.length, e = 0, r = n < i ? n : i; e < r; ++e) if (o.d[e] !== t.d[e]) return o.d[e] > t.d[e] ^ o.s < 0 ? 1 : -1;
        return n === i ? 0 : n > i ^ o.s < 0 ? 1 : -1;
      };
      R.decimalPlaces = R.dp = function() {
        var t = this, e = t.d.length - 1, r = (e - t.e) * N;
        if (e = t.d[e], e) for (; e % 10 == 0; e /= 10) r--;
        return r < 0 ? 0 : r;
      };
      R.dividedBy = R.div = function(t) {
        return he(this, new this.constructor(t));
      };
      R.dividedToIntegerBy = R.idiv = function(t) {
        var e = this, r = e.constructor;
        return _(he(e, new r(t), 0, 1), r.precision);
      };
      R.equals = R.eq = function(t) {
        return !this.cmp(t);
      };
      R.exponent = function() {
        return $3(this);
      };
      R.greaterThan = R.gt = function(t) {
        return this.cmp(t) > 0;
      };
      R.greaterThanOrEqualTo = R.gte = function(t) {
        return this.cmp(t) >= 0;
      };
      R.isInteger = R.isint = function() {
        return this.e > this.d.length - 2;
      };
      R.isNegative = R.isneg = function() {
        return this.s < 0;
      };
      R.isPositive = R.ispos = function() {
        return this.s > 0;
      };
      R.isZero = function() {
        return this.s === 0;
      };
      R.lessThan = R.lt = function(t) {
        return this.cmp(t) < 0;
      };
      R.lessThanOrEqualTo = R.lte = function(t) {
        return this.cmp(t) < 1;
      };
      R.logarithm = R.log = function(t) {
        var e, r = this, n = r.constructor, i = n.precision, o = i + 5;
        if (t === void 0) t = new n(10);
        else if (t = new n(t), t.s < 1 || t.eq(ee)) throw Error(ie + "NaN");
        if (r.s < 1) throw Error(ie + (r.s ? "NaN" : "-Infinity"));
        return r.eq(ee) ? new n(0) : (q = false, e = he(it(r, o), it(t, o), o), q = true, _(e, i));
      };
      R.minus = R.sub = function(t) {
        var e = this;
        return t = new e.constructor(t), e.s == t.s ? bn(e, t) : yn(e, (t.s = -t.s, t));
      };
      R.modulo = R.mod = function(t) {
        var e, r = this, n = r.constructor, i = n.precision;
        if (t = new n(t), !t.s) throw Error(ie + "NaN");
        return r.s ? (q = false, e = he(r, t, 0, 1).times(t), q = true, r.minus(e)) : _(new n(r), i);
      };
      R.naturalExponential = R.exp = function() {
        return hn(this);
      };
      R.naturalLogarithm = R.ln = function() {
        return it(this);
      };
      R.negated = R.neg = function() {
        var t = new this.constructor(this);
        return t.s = -t.s || 0, t;
      };
      R.plus = R.add = function(t) {
        var e = this;
        return t = new e.constructor(t), e.s == t.s ? yn(e, t) : bn(e, (t.s = -t.s, t));
      };
      R.precision = R.sd = function(t) {
        var e, r, n, i = this;
        if (t !== void 0 && t !== !!t && t !== 1 && t !== 0) throw Error(Oe + t);
        if (e = $3(i) + 1, n = i.d.length - 1, r = n * N + 1, n = i.d[n], n) {
          for (; n % 10 == 0; n /= 10) r--;
          for (n = i.d[0]; n >= 10; n /= 10) r++;
        }
        return t && e > r ? e : r;
      };
      R.squareRoot = R.sqrt = function() {
        var t, e, r, n, i, o, s, a = this, f = a.constructor;
        if (a.s < 1) {
          if (!a.s) return new f(0);
          throw Error(ie + "NaN");
        }
        for (t = $3(a), q = false, i = Math.sqrt(+a), i == 0 || i == 1 / 0 ? (e = ce(a.d), (e.length + t) % 2 == 0 && (e += "0"), i = Math.sqrt(e), t = Ne((t + 1) / 2) - (t < 0 || t % 2), i == 1 / 0 ? e = "5e" + t : (e = i.toExponential(), e = e.slice(0, e.indexOf("e") + 1) + t), n = new f(e)) : n = new f(i.toString()), r = f.precision, i = s = r + 3; ; ) if (o = n, n = o.plus(he(a, o, s + 2)).times(0.5), ce(o.d).slice(0, s) === (e = ce(n.d)).slice(0, s)) {
          if (e = e.slice(s - 3, s + 1), i == s && e == "4999") {
            if (_(o, r + 1, 0), o.times(o).eq(a)) {
              n = o;
              break;
            }
          } else if (e != "9999") break;
          s += 4;
        }
        return q = true, _(n, r);
      };
      R.times = R.mul = function(t) {
        var e, r, n, i, o, s, a, f, h, T = this, C = T.constructor, k = T.d, A = (t = new C(t)).d;
        if (!T.s || !t.s) return new C(0);
        for (t.s *= T.s, r = T.e + t.e, f = k.length, h = A.length, f < h && (o = k, k = A, A = o, s = f, f = h, h = s), o = [], s = f + h, n = s; n--; ) o.push(0);
        for (n = h; --n >= 0; ) {
          for (e = 0, i = f + n; i > n; ) a = o[i] + A[n] * k[i - n - 1] + e, o[i--] = a % Q | 0, e = a / Q | 0;
          o[i] = (o[i] + e) % Q | 0;
        }
        for (; !o[--s]; ) o.pop();
        return e ? ++r : o.shift(), t.d = o, t.e = r, q ? _(t, C.precision) : t;
      };
      R.toDecimalPlaces = R.todp = function(t, e) {
        var r = this, n = r.constructor;
        return r = new n(r), t === void 0 ? r : (me(t, 0, Fe), e === void 0 ? e = n.rounding : me(e, 0, 8), _(r, t + $3(r) + 1, e));
      };
      R.toExponential = function(t, e) {
        var r, n = this, i = n.constructor;
        return t === void 0 ? r = Me(n, true) : (me(t, 0, Fe), e === void 0 ? e = i.rounding : me(e, 0, 8), n = _(new i(n), t + 1, e), r = Me(n, true, t + 1)), r;
      };
      R.toFixed = function(t, e) {
        var r, n, i = this, o = i.constructor;
        return t === void 0 ? Me(i) : (me(t, 0, Fe), e === void 0 ? e = o.rounding : me(e, 0, 8), n = _(new o(i), t + $3(i) + 1, e), r = Me(n.abs(), false, t + $3(n) + 1), i.isneg() && !i.isZero() ? "-" + r : r);
      };
      R.toInteger = R.toint = function() {
        var t = this, e = t.constructor;
        return _(new e(t), $3(t) + 1, e.rounding);
      };
      R.toNumber = function() {
        return +this;
      };
      R.toPower = R.pow = function(t) {
        var e, r, n, i, o, s, a = this, f = a.constructor, h = 12, T = +(t = new f(t));
        if (!t.s) return new f(ee);
        if (a = new f(a), !a.s) {
          if (t.s < 1) throw Error(ie + "Infinity");
          return a;
        }
        if (a.eq(ee)) return a;
        if (n = f.precision, t.eq(ee)) return _(a, n);
        if (e = t.e, r = t.d.length - 1, s = e >= r, o = a.s, s) {
          if ((r = T < 0 ? -T : T) <= gn) {
            for (i = new f(ee), e = Math.ceil(n / N + 4), q = false; r % 2 && (i = i.times(a), fn(i.d, e)), r = Ne(r / 2), r !== 0; ) a = a.times(a), fn(a.d, e);
            return q = true, t.s < 0 ? new f(ee).div(i) : _(i, n);
          }
        } else if (o < 0) throw Error(ie + "NaN");
        return o = o < 0 && t.d[Math.max(e, r)] & 1 ? -1 : 1, a.s = 1, q = false, i = t.times(it(a, n + h)), q = true, i = hn(i), i.s = o, i;
      };
      R.toPrecision = function(t, e) {
        var r, n, i = this, o = i.constructor;
        return t === void 0 ? (r = $3(i), n = Me(i, r <= o.toExpNeg || r >= o.toExpPos)) : (me(t, 1, Fe), e === void 0 ? e = o.rounding : me(e, 0, 8), i = _(new o(i), t, e), r = $3(i), n = Me(i, t <= r || r <= o.toExpNeg, t)), n;
      };
      R.toSignificantDigits = R.tosd = function(t, e) {
        var r = this, n = r.constructor;
        return t === void 0 ? (t = n.precision, e = n.rounding) : (me(t, 1, Fe), e === void 0 ? e = n.rounding : me(e, 0, 8)), _(new n(r), t, e);
      };
      R.toString = R.valueOf = R.val = R.toJSON = R[Symbol.for("nodejs.util.inspect.custom")] = function() {
        var t = this, e = $3(t), r = t.constructor;
        return Me(t, e <= r.toExpNeg || e >= r.toExpPos);
      };
      he = /* @__PURE__ */ function() {
        function t(n, i) {
          var o, s = 0, a = n.length;
          for (n = n.slice(); a--; ) o = n[a] * i + s, n[a] = o % Q | 0, s = o / Q | 0;
          return s && n.unshift(s), n;
        }
        __name(t, "t");
        function e(n, i, o, s) {
          var a, f;
          if (o != s) f = o > s ? 1 : -1;
          else for (a = f = 0; a < o; a++) if (n[a] != i[a]) {
            f = n[a] > i[a] ? 1 : -1;
            break;
          }
          return f;
        }
        __name(e, "e");
        function r(n, i, o) {
          for (var s = 0; o--; ) n[o] -= s, s = n[o] < i[o] ? 1 : 0, n[o] = s * Q + n[o] - i[o];
          for (; !n[0] && n.length > 1; ) n.shift();
        }
        __name(r, "r");
        return function(n, i, o, s) {
          var a, f, h, T, C, k, A, O, S, M, oe, H, L, z, Se, wr, se, St, kt = n.constructor, Ho = n.s == i.s ? 1 : -1, ue = n.d, U = i.d;
          if (!n.s) return new kt(n);
          if (!i.s) throw Error(ie + "Division by zero");
          for (f = n.e - i.e, se = U.length, Se = ue.length, A = new kt(Ho), O = A.d = [], h = 0; U[h] == (ue[h] || 0); ) ++h;
          if (U[h] > (ue[h] || 0) && --f, o == null ? H = o = kt.precision : s ? H = o + ($3(n) - $3(i)) + 1 : H = o, H < 0) return new kt(0);
          if (H = H / N + 2 | 0, h = 0, se == 1) for (T = 0, U = U[0], H++; (h < Se || T) && H--; h++) L = T * Q + (ue[h] || 0), O[h] = L / U | 0, T = L % U | 0;
          else {
            for (T = Q / (U[0] + 1) | 0, T > 1 && (U = t(U, T), ue = t(ue, T), se = U.length, Se = ue.length), z = se, S = ue.slice(0, se), M = S.length; M < se; ) S[M++] = 0;
            St = U.slice(), St.unshift(0), wr = U[0], U[1] >= Q / 2 && ++wr;
            do
              T = 0, a = e(U, S, se, M), a < 0 ? (oe = S[0], se != M && (oe = oe * Q + (S[1] || 0)), T = oe / wr | 0, T > 1 ? (T >= Q && (T = Q - 1), C = t(U, T), k = C.length, M = S.length, a = e(C, S, k, M), a == 1 && (T--, r(C, se < k ? St : U, k))) : (T == 0 && (a = T = 1), C = U.slice()), k = C.length, k < M && C.unshift(0), r(S, C, M), a == -1 && (M = S.length, a = e(U, S, se, M), a < 1 && (T++, r(S, se < M ? St : U, M))), M = S.length) : a === 0 && (T++, S = [0]), O[h++] = T, a && S[0] ? S[M++] = ue[z] || 0 : (S = [ue[z]], M = 1);
            while ((z++ < Se || S[0] !== void 0) && H--);
          }
          return O[0] || O.shift(), A.e = f, _(A, s ? o + $3(A) + 1 : o);
        };
      }();
      Tr = wn(cs);
      ee = new Tr(1);
      Dt = Tr;
    });
    var v;
    var ae;
    var l = ne(() => {
      "use strict";
      xn();
      v = class extends Dt {
        static {
          __name(this, "v");
        }
        static isDecimal(e) {
          return e instanceof Dt;
        }
        static random(e = 20) {
          {
            let n = globalThis.crypto.getRandomValues(new Uint8Array(e)).reduce((i, o) => i + o, "");
            return new Dt(`0.${n.slice(0, e)}`);
          }
        }
      }, ae = v;
    });
    function bs() {
      return false;
    }
    __name(bs, "bs");
    function Nn() {
      return { dev: 0, ino: 0, mode: 0, nlink: 0, uid: 0, gid: 0, rdev: 0, size: 0, blksize: 0, blocks: 0, atimeMs: 0, mtimeMs: 0, ctimeMs: 0, birthtimeMs: 0, atime: /* @__PURE__ */ new Date(), mtime: /* @__PURE__ */ new Date(), ctime: /* @__PURE__ */ new Date(), birthtime: /* @__PURE__ */ new Date() };
    }
    __name(Nn, "Nn");
    function ws() {
      return Nn();
    }
    __name(ws, "ws");
    function xs() {
      return [];
    }
    __name(xs, "xs");
    function Es(t) {
      t(null, []);
    }
    __name(Es, "Es");
    function Ps() {
      return "";
    }
    __name(Ps, "Ps");
    function vs() {
      return "";
    }
    __name(vs, "vs");
    function Ts() {
    }
    __name(Ts, "Ts");
    function Cs() {
    }
    __name(Cs, "Cs");
    function Rs() {
    }
    __name(Rs, "Rs");
    function As() {
    }
    __name(As, "As");
    function Ss() {
    }
    __name(Ss, "Ss");
    function ks() {
    }
    __name(ks, "ks");
    var Os;
    var Ms;
    var qn;
    var Un = ne(() => {
      "use strict";
      u();
      c();
      m();
      p();
      d();
      l();
      Os = {}, Ms = { existsSync: bs, lstatSync: Nn, statSync: ws, readdirSync: xs, readdir: Es, readlinkSync: Ps, realpathSync: vs, chmodSync: Ts, renameSync: Cs, mkdirSync: Rs, rmdirSync: As, rmSync: Ss, unlinkSync: ks, promises: Os }, qn = Ms;
    });
    function Is(...t) {
      return t.join("/");
    }
    __name(Is, "Is");
    function Ds(...t) {
      return t.join("/");
    }
    __name(Ds, "Ds");
    function _s(t) {
      let e = Bn(t), r = $n(t), [n, i] = e.split(".");
      return { root: "/", dir: r, base: e, ext: i, name: n };
    }
    __name(_s, "_s");
    function Bn(t) {
      let e = t.split("/");
      return e[e.length - 1];
    }
    __name(Bn, "Bn");
    function $n(t) {
      return t.split("/").slice(0, -1).join("/");
    }
    __name($n, "$n");
    var Vn;
    var Ls;
    var Fs;
    var Nt;
    var jn = ne(() => {
      "use strict";
      u();
      c();
      m();
      p();
      d();
      l();
      Vn = "/", Ls = { sep: Vn }, Fs = { basename: Bn, dirname: $n, join: Ds, parse: _s, posix: Ls, resolve: Is, sep: Vn }, Nt = Fs;
    });
    var Qn = Le((Zc, Ns) => {
      Ns.exports = { name: "@prisma/internals", version: "6.8.2", description: "This package is intended for Prisma's internal use", main: "dist/index.js", types: "dist/index.d.ts", repository: { type: "git", url: "https://github.com/prisma/prisma.git", directory: "packages/internals" }, homepage: "https://www.prisma.io", author: "Tim Suchanek <suchanek@prisma.io>", bugs: "https://github.com/prisma/prisma/issues", license: "Apache-2.0", scripts: { dev: "DEV=true tsx helpers/build.ts", build: "tsx helpers/build.ts", test: "dotenv -e ../../.db.env -- jest --silent", prepublishOnly: "pnpm run build" }, files: ["README.md", "dist", "!**/libquery_engine*", "!dist/get-generators/engines/*", "scripts"], devDependencies: { "@babel/helper-validator-identifier": "7.25.9", "@opentelemetry/api": "1.9.0", "@swc/core": "1.11.5", "@swc/jest": "0.2.37", "@types/babel__helper-validator-identifier": "7.15.2", "@types/jest": "29.5.14", "@types/node": "18.19.76", "@types/resolve": "1.20.6", archiver: "6.0.2", "checkpoint-client": "1.1.33", "cli-truncate": "4.0.0", dotenv: "16.5.0", esbuild: "0.25.1", "escape-string-regexp": "5.0.0", execa: "5.1.1", "fast-glob": "3.3.3", "find-up": "7.0.0", "fp-ts": "2.16.9", "fs-extra": "11.3.0", "fs-jetpack": "5.1.0", "global-dirs": "4.0.0", globby: "11.1.0", "identifier-regex": "1.0.0", "indent-string": "4.0.0", "is-windows": "1.0.2", "is-wsl": "3.1.0", jest: "29.7.0", "jest-junit": "16.0.0", kleur: "4.1.5", "mock-stdin": "1.0.0", "new-github-issue-url": "0.2.1", "node-fetch": "3.3.2", "npm-packlist": "5.1.3", open: "7.4.2", "p-map": "4.0.0", "read-package-up": "11.0.0", resolve: "1.22.10", "string-width": "7.2.0", "strip-ansi": "6.0.1", "strip-indent": "4.0.0", "temp-dir": "2.0.0", tempy: "1.0.1", "terminal-link": "4.0.0", tmp: "0.2.3", "ts-node": "10.9.2", "ts-pattern": "5.6.2", "ts-toolbelt": "9.6.0", typescript: "5.4.5", yarn: "1.22.22" }, dependencies: { "@prisma/config": "workspace:*", "@prisma/debug": "workspace:*", "@prisma/dmmf": "workspace:*", "@prisma/driver-adapter-utils": "workspace:*", "@prisma/engines": "workspace:*", "@prisma/fetch-engine": "workspace:*", "@prisma/generator": "workspace:*", "@prisma/generator-helper": "workspace:*", "@prisma/get-platform": "workspace:*", "@prisma/prisma-schema-wasm": "6.8.0-43.2060c79ba17c6bb9f5823312b6f6b7f4a845738e", "@prisma/schema-engine-wasm": "6.8.0-43.2060c79ba17c6bb9f5823312b6f6b7f4a845738e", "@prisma/schema-files-loader": "workspace:*", arg: "5.0.2", prompts: "2.4.2" }, peerDependencies: { typescript: ">=5.1.0" }, peerDependenciesMeta: { typescript: { optional: true } }, sideEffects: false };
    });
    var Kn = Le((Em, Wn) => {
      "use strict";
      u();
      c();
      m();
      p();
      d();
      l();
      Wn.exports = (t, e = 1, r) => {
        if (r = { indent: " ", includeEmptyLines: false, ...r }, typeof t != "string") throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof t}\``);
        if (typeof e != "number") throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof e}\``);
        if (typeof r.indent != "string") throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``);
        if (e === 0) return t;
        let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
        return t.replace(n, r.indent.repeat(e));
      };
    });
    var Yn = Le((Lm, zn) => {
      "use strict";
      u();
      c();
      m();
      p();
      d();
      l();
      zn.exports = ({ onlyFirst: t = false } = {}) => {
        let e = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(e, t ? void 0 : "g");
      };
    });
    var Zn = Le((Vm, Xn) => {
      "use strict";
      u();
      c();
      m();
      p();
      d();
      l();
      var Js = Yn();
      Xn.exports = (t) => typeof t == "string" ? t.replace(Js(), "") : t;
    });
    var Fr = Le((sy, ii) => {
      "use strict";
      u();
      c();
      m();
      p();
      d();
      l();
      ii.exports = /* @__PURE__ */ function() {
        function t(e, r, n, i, o) {
          return e < r || n < r ? e > n ? n + 1 : e + 1 : i === o ? r : r + 1;
        }
        __name(t, "t");
        return function(e, r) {
          if (e === r) return 0;
          if (e.length > r.length) {
            var n = e;
            e = r, r = n;
          }
          for (var i = e.length, o = r.length; i > 0 && e.charCodeAt(i - 1) === r.charCodeAt(o - 1); ) i--, o--;
          for (var s = 0; s < i && e.charCodeAt(s) === r.charCodeAt(s); ) s++;
          if (i -= s, o -= s, i === 0 || o < 3) return o;
          var a = 0, f, h, T, C, k, A, O, S, M, oe, H, L, z = [];
          for (f = 0; f < i; f++) z.push(f + 1), z.push(e.charCodeAt(s + f));
          for (var Se = z.length - 1; a < o - 3; ) for (M = r.charCodeAt(s + (h = a)), oe = r.charCodeAt(s + (T = a + 1)), H = r.charCodeAt(s + (C = a + 2)), L = r.charCodeAt(s + (k = a + 3)), A = a += 4, f = 0; f < Se; f += 2) O = z[f], S = z[f + 1], h = t(O, h, T, M, S), T = t(h, T, C, oe, S), C = t(T, C, k, H, S), A = t(C, k, A, L, S), z[f] = A, k = C, C = T, T = h, h = O;
          for (; a < o; ) for (M = r.charCodeAt(s + (h = a)), A = ++a, f = 0; f < Se; f += 2) O = z[f], z[f] = A = t(O, h, A, M, z[f + 1]), h = O;
          return A;
        };
      }();
    });
    var ui = ne(() => {
      "use strict";
      u();
      c();
      m();
      p();
      d();
      l();
    });
    var ci = ne(() => {
      "use strict";
      u();
      c();
      m();
      p();
      d();
      l();
    });
    var _i = Le((oP, qa) => {
      qa.exports = { name: "@prisma/engines-version", version: "6.8.0-43.2060c79ba17c6bb9f5823312b6f6b7f4a845738e", main: "index.js", types: "index.d.ts", license: "Apache-2.0", author: "Tim Suchanek <suchanek@prisma.io>", prisma: { enginesVersion: "2060c79ba17c6bb9f5823312b6f6b7f4a845738e" }, repository: { type: "git", url: "https://github.com/prisma/engines-wrapper.git", directory: "packages/engines-version" }, devDependencies: { "@types/node": "18.19.76", typescript: "4.9.5" }, files: ["index.js", "index.d.ts"], scripts: { build: "tsc -d" } };
    });
    var nr;
    var Li = ne(() => {
      "use strict";
      u();
      c();
      m();
      p();
      d();
      l();
      nr = class {
        static {
          __name(this, "nr");
        }
        events = {};
        on(e, r) {
          return this.events[e] || (this.events[e] = []), this.events[e].push(r), this;
        }
        emit(e, ...r) {
          return this.events[e] ? (this.events[e].forEach((n) => {
            n(...r);
          }), true) : false;
        }
      };
    });
    var Jl = {};
    rt(Jl, { DMMF: /* @__PURE__ */ __name(() => mt, "DMMF"), Debug: /* @__PURE__ */ __name(() => J, "Debug"), Decimal: /* @__PURE__ */ __name(() => ae, "Decimal"), Extensions: /* @__PURE__ */ __name(() => Cr, "Extensions"), MetricsClient: /* @__PURE__ */ __name(() => Ye, "MetricsClient"), PrismaClientInitializationError: /* @__PURE__ */ __name(() => I, "PrismaClientInitializationError"), PrismaClientKnownRequestError: /* @__PURE__ */ __name(() => X, "PrismaClientKnownRequestError"), PrismaClientRustPanicError: /* @__PURE__ */ __name(() => we, "PrismaClientRustPanicError"), PrismaClientUnknownRequestError: /* @__PURE__ */ __name(() => j, "PrismaClientUnknownRequestError"), PrismaClientValidationError: /* @__PURE__ */ __name(() => W, "PrismaClientValidationError"), Public: /* @__PURE__ */ __name(() => Rr, "Public"), Sql: /* @__PURE__ */ __name(() => Z, "Sql"), createParam: /* @__PURE__ */ __name(() => Ri, "createParam"), defineDmmfProperty: /* @__PURE__ */ __name(() => Ii, "defineDmmfProperty"), deserializeJsonResponse: /* @__PURE__ */ __name(() => $e, "deserializeJsonResponse"), deserializeRawResult: /* @__PURE__ */ __name(() => hr, "deserializeRawResult"), dmmfToRuntimeDataModel: /* @__PURE__ */ __name(() => ni, "dmmfToRuntimeDataModel"), empty: /* @__PURE__ */ __name(() => Ni, "empty"), getPrismaClient: /* @__PURE__ */ __name(() => Go, "getPrismaClient"), getRuntime: /* @__PURE__ */ __name(() => Re, "getRuntime"), join: /* @__PURE__ */ __name(() => Fi, "join"), makeStrictEnum: /* @__PURE__ */ __name(() => Wo, "makeStrictEnum"), makeTypedQueryFactory: /* @__PURE__ */ __name(() => Di, "makeTypedQueryFactory"), objectEnumValues: /* @__PURE__ */ __name(() => Wt, "objectEnumValues"), raw: /* @__PURE__ */ __name(() => Jr, "raw"), serializeJsonQuery: /* @__PURE__ */ __name(() => er, "serializeJsonQuery"), skip: /* @__PURE__ */ __name(() => Zt, "skip"), sqltag: /* @__PURE__ */ __name(() => Gr, "sqltag"), warnEnvConflicts: /* @__PURE__ */ __name(() => void 0, "warnEnvConflicts"), warnOnce: /* @__PURE__ */ __name(() => lt, "warnOnce") });
    module.exports = ts(Jl);
    u();
    c();
    m();
    p();
    d();
    l();
    var Cr = {};
    rt(Cr, { defineExtension: /* @__PURE__ */ __name(() => En, "defineExtension"), getExtensionContext: /* @__PURE__ */ __name(() => Pn, "getExtensionContext") });
    u();
    c();
    m();
    p();
    d();
    l();
    u();
    c();
    m();
    p();
    d();
    l();
    function En(t) {
      return typeof t == "function" ? t : (e) => e.$extends(t);
    }
    __name(En, "En");
    u();
    c();
    m();
    p();
    d();
    l();
    function Pn(t) {
      return t;
    }
    __name(Pn, "Pn");
    var Rr = {};
    rt(Rr, { validator: /* @__PURE__ */ __name(() => vn, "validator") });
    u();
    c();
    m();
    p();
    d();
    l();
    u();
    c();
    m();
    p();
    d();
    l();
    function vn(...t) {
      return (e) => e;
    }
    __name(vn, "vn");
    u();
    c();
    m();
    p();
    d();
    l();
    u();
    c();
    m();
    p();
    d();
    l();
    u();
    c();
    m();
    p();
    d();
    l();
    var Ar;
    var Tn;
    var Cn;
    var Rn;
    var An = true;
    typeof g < "u" && ({ FORCE_COLOR: Ar, NODE_DISABLE_COLORS: Tn, NO_COLOR: Cn, TERM: Rn } = g.env || {}, An = g.stdout && g.stdout.isTTY);
    var ds = { enabled: !Tn && Cn == null && Rn !== "dumb" && (Ar != null && Ar !== "0" || An) };
    function F(t, e) {
      let r = new RegExp(`\\x1b\\[${e}m`, "g"), n = `\x1B[${t}m`, i = `\x1B[${e}m`;
      return function(o) {
        return !ds.enabled || o == null ? o : n + (~("" + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
      };
    }
    __name(F, "F");
    var ju = F(0, 0);
    var _t = F(1, 22);
    var Lt = F(2, 22);
    var Qu = F(3, 23);
    var Sn = F(4, 24);
    var Ju = F(7, 27);
    var Gu = F(8, 28);
    var Wu = F(9, 29);
    var Ku = F(30, 39);
    var qe = F(31, 39);
    var kn = F(32, 39);
    var On = F(33, 39);
    var Mn = F(34, 39);
    var Hu = F(35, 39);
    var In = F(36, 39);
    var zu = F(37, 39);
    var Dn = F(90, 39);
    var Yu = F(90, 39);
    var Xu = F(40, 49);
    var Zu = F(41, 49);
    var ec = F(42, 49);
    var tc = F(43, 49);
    var rc = F(44, 49);
    var nc = F(45, 49);
    var ic = F(46, 49);
    var oc = F(47, 49);
    u();
    c();
    m();
    p();
    d();
    l();
    var fs = 100;
    var _n = ["green", "yellow", "blue", "magenta", "cyan", "red"];
    var Ft = [];
    var Ln = Date.now();
    var gs = 0;
    var Sr = typeof g < "u" ? g.env : {};
    globalThis.DEBUG ??= Sr.DEBUG ?? "";
    globalThis.DEBUG_COLORS ??= Sr.DEBUG_COLORS ? Sr.DEBUG_COLORS === "true" : true;
    var ot = { enable(t) {
      typeof t == "string" && (globalThis.DEBUG = t);
    }, disable() {
      let t = globalThis.DEBUG;
      return globalThis.DEBUG = "", t;
    }, enabled(t) {
      let e = globalThis.DEBUG.split(",").map((i) => i.replace(/[.+?^${}()|[\]\\]/g, "\\$&")), r = e.some((i) => i === "" || i[0] === "-" ? false : t.match(RegExp(i.split("*").join(".*") + "$"))), n = e.some((i) => i === "" || i[0] !== "-" ? false : t.match(RegExp(i.slice(1).split("*").join(".*") + "$")));
      return r && !n;
    }, log: /* @__PURE__ */ __name((...t) => {
      let [e, r, ...n] = t;
      (console.warn ?? console.log)(`${e} ${r}`, ...n);
    }, "log"), formatters: {} };
    function ys(t) {
      let e = { color: _n[gs++ % _n.length], enabled: ot.enabled(t), namespace: t, log: ot.log, extend: /* @__PURE__ */ __name(() => {
      }, "extend") }, r = /* @__PURE__ */ __name((...n) => {
        let { enabled: i, namespace: o, color: s, log: a } = e;
        if (n.length !== 0 && Ft.push([o, ...n]), Ft.length > fs && Ft.shift(), ot.enabled(o) || i) {
          let f = n.map((T) => typeof T == "string" ? T : hs(T)), h = `+${Date.now() - Ln}ms`;
          Ln = Date.now(), a(o, ...f, h);
        }
      }, "r");
      return new Proxy(r, { get: /* @__PURE__ */ __name((n, i) => e[i], "get"), set: /* @__PURE__ */ __name((n, i, o) => e[i] = o, "set") });
    }
    __name(ys, "ys");
    var J = new Proxy(ys, { get: /* @__PURE__ */ __name((t, e) => ot[e], "get"), set: /* @__PURE__ */ __name((t, e, r) => ot[e] = r, "set") });
    function hs(t, e = 2) {
      let r = /* @__PURE__ */ new Set();
      return JSON.stringify(t, (n, i) => {
        if (typeof i == "object" && i !== null) {
          if (r.has(i)) return "[Circular *]";
          r.add(i);
        } else if (typeof i == "bigint") return i.toString();
        return i;
      }, e);
    }
    __name(hs, "hs");
    function Fn() {
      Ft.length = 0;
    }
    __name(Fn, "Fn");
    u();
    c();
    m();
    p();
    d();
    l();
    u();
    c();
    m();
    p();
    d();
    l();
    var kr = ["darwin", "darwin-arm64", "debian-openssl-1.0.x", "debian-openssl-1.1.x", "debian-openssl-3.0.x", "rhel-openssl-1.0.x", "rhel-openssl-1.1.x", "rhel-openssl-3.0.x", "linux-arm64-openssl-1.1.x", "linux-arm64-openssl-1.0.x", "linux-arm64-openssl-3.0.x", "linux-arm-openssl-1.1.x", "linux-arm-openssl-1.0.x", "linux-arm-openssl-3.0.x", "linux-musl", "linux-musl-openssl-3.0.x", "linux-musl-arm64-openssl-1.1.x", "linux-musl-arm64-openssl-3.0.x", "linux-nixos", "linux-static-x64", "linux-static-arm64", "windows", "freebsd11", "freebsd12", "freebsd13", "freebsd14", "freebsd15", "openbsd", "netbsd", "arm"];
    u();
    c();
    m();
    p();
    d();
    l();
    var qs = Qn();
    var Or = qs.version;
    u();
    c();
    m();
    p();
    d();
    l();
    function Ue(t) {
      let e = Us();
      return e || (t?.config.engineType === "library" ? "library" : t?.config.engineType === "binary" ? "binary" : t?.config.engineType === "client" ? "client" : Bs(t));
    }
    __name(Ue, "Ue");
    function Us() {
      let t = g.env.PRISMA_CLIENT_ENGINE_TYPE;
      return t === "library" ? "library" : t === "binary" ? "binary" : t === "client" ? "client" : void 0;
    }
    __name(Us, "Us");
    function Bs(t) {
      return t?.previewFeatures.includes("queryCompiler") ? "client" : "library";
    }
    __name(Bs, "Bs");
    u();
    c();
    m();
    p();
    d();
    l();
    var Jn = "prisma+postgres";
    var Gn = `${Jn}:`;
    function Mr(t) {
      return t?.toString().startsWith(`${Gn}//`) ?? false;
    }
    __name(Mr, "Mr");
    var at = {};
    rt(at, { error: /* @__PURE__ */ __name(() => js, "error"), info: /* @__PURE__ */ __name(() => Vs, "info"), log: /* @__PURE__ */ __name(() => $s, "log"), query: /* @__PURE__ */ __name(() => Qs, "query"), should: /* @__PURE__ */ __name(() => Hn, "should"), tags: /* @__PURE__ */ __name(() => st, "tags"), warn: /* @__PURE__ */ __name(() => Ir, "warn") });
    u();
    c();
    m();
    p();
    d();
    l();
    var st = { error: qe("prisma:error"), warn: On("prisma:warn"), info: In("prisma:info"), query: Mn("prisma:query") };
    var Hn = { warn: /* @__PURE__ */ __name(() => !g.env.PRISMA_DISABLE_WARNINGS, "warn") };
    function $s(...t) {
      console.log(...t);
    }
    __name($s, "$s");
    function Ir(t, ...e) {
      Hn.warn() && console.warn(`${st.warn} ${t}`, ...e);
    }
    __name(Ir, "Ir");
    function Vs(t, ...e) {
      console.info(`${st.info} ${t}`, ...e);
    }
    __name(Vs, "Vs");
    function js(t, ...e) {
      console.error(`${st.error} ${t}`, ...e);
    }
    __name(js, "js");
    function Qs(t, ...e) {
      console.log(`${st.query} ${t}`, ...e);
    }
    __name(Qs, "Qs");
    u();
    c();
    m();
    p();
    d();
    l();
    function qt(t, e) {
      if (!t) throw new Error(`${e}. This should never happen. If you see this error, please, open an issue at https://pris.ly/prisma-prisma-bug-report`);
    }
    __name(qt, "qt");
    u();
    c();
    m();
    p();
    d();
    l();
    function be(t, e) {
      throw new Error(e);
    }
    __name(be, "be");
    u();
    c();
    m();
    p();
    d();
    l();
    function Dr(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }
    __name(Dr, "Dr");
    u();
    c();
    m();
    p();
    d();
    l();
    function Be(t, e) {
      let r = {};
      for (let n of Object.keys(t)) r[n] = e(t[n], n);
      return r;
    }
    __name(Be, "Be");
    u();
    c();
    m();
    p();
    d();
    l();
    function _r(t, e) {
      if (t.length === 0) return;
      let r = t[0];
      for (let n = 1; n < t.length; n++) e(r, t[n]) < 0 && (r = t[n]);
      return r;
    }
    __name(_r, "_r");
    u();
    c();
    m();
    p();
    d();
    l();
    function te(t, e) {
      Object.defineProperty(t, "name", { value: e, configurable: true });
    }
    __name(te, "te");
    u();
    c();
    m();
    p();
    d();
    l();
    var ei = /* @__PURE__ */ new Set();
    var lt = /* @__PURE__ */ __name((t, e, ...r) => {
      ei.has(t) || (ei.add(t), Ir(e, ...r));
    }, "lt");
    var I = class t extends Error {
      static {
        __name(this, "t");
      }
      clientVersion;
      errorCode;
      retryable;
      constructor(e, r, n) {
        super(e), this.name = "PrismaClientInitializationError", this.clientVersion = r, this.errorCode = n, Error.captureStackTrace(t);
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientInitializationError";
      }
    };
    te(I, "PrismaClientInitializationError");
    u();
    c();
    m();
    p();
    d();
    l();
    var X = class extends Error {
      static {
        __name(this, "X");
      }
      code;
      meta;
      clientVersion;
      batchRequestIdx;
      constructor(e, { code: r, clientVersion: n, meta: i, batchRequestIdx: o }) {
        super(e), this.name = "PrismaClientKnownRequestError", this.code = r, this.clientVersion = n, this.meta = i, Object.defineProperty(this, "batchRequestIdx", { value: o, enumerable: false, writable: true });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientKnownRequestError";
      }
    };
    te(X, "PrismaClientKnownRequestError");
    u();
    c();
    m();
    p();
    d();
    l();
    var we = class extends Error {
      static {
        __name(this, "we");
      }
      clientVersion;
      constructor(e, r) {
        super(e), this.name = "PrismaClientRustPanicError", this.clientVersion = r;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientRustPanicError";
      }
    };
    te(we, "PrismaClientRustPanicError");
    u();
    c();
    m();
    p();
    d();
    l();
    var j = class extends Error {
      static {
        __name(this, "j");
      }
      clientVersion;
      batchRequestIdx;
      constructor(e, { clientVersion: r, batchRequestIdx: n }) {
        super(e), this.name = "PrismaClientUnknownRequestError", this.clientVersion = r, Object.defineProperty(this, "batchRequestIdx", { value: n, writable: true, enumerable: false });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientUnknownRequestError";
      }
    };
    te(j, "PrismaClientUnknownRequestError");
    u();
    c();
    m();
    p();
    d();
    l();
    var W = class extends Error {
      static {
        __name(this, "W");
      }
      name = "PrismaClientValidationError";
      clientVersion;
      constructor(e, { clientVersion: r }) {
        super(e), this.clientVersion = r;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientValidationError";
      }
    };
    te(W, "PrismaClientValidationError");
    u();
    c();
    m();
    p();
    d();
    l();
    l();
    function $e(t) {
      return t === null ? t : Array.isArray(t) ? t.map($e) : typeof t == "object" ? Gs(t) ? Ws(t) : typeof t == "bigint" || t instanceof Date || t instanceof Uint8Array || t instanceof ae ? t : Be(t, $e) : t;
    }
    __name($e, "$e");
    function Gs(t) {
      return t !== null && typeof t == "object" && typeof t.$type == "string";
    }
    __name(Gs, "Gs");
    function Ws({ $type: t, value: e }) {
      switch (t) {
        case "BigInt":
          return BigInt(e);
        case "Bytes": {
          let { buffer: r, byteOffset: n, byteLength: i } = b.from(e, "base64");
          return new Uint8Array(r, n, i);
        }
        case "DateTime":
          return new Date(e);
        case "Decimal":
          return new ae(e);
        case "Json":
          return JSON.parse(e);
        default:
          be(e, "Unknown tagged value");
      }
    }
    __name(Ws, "Ws");
    u();
    c();
    m();
    p();
    d();
    l();
    u();
    c();
    m();
    p();
    d();
    l();
    u();
    c();
    m();
    p();
    d();
    l();
    var pe = class {
      static {
        __name(this, "pe");
      }
      _map = /* @__PURE__ */ new Map();
      get(e) {
        return this._map.get(e)?.value;
      }
      set(e, r) {
        this._map.set(e, { value: r });
      }
      getOrCreate(e, r) {
        let n = this._map.get(e);
        if (n) return n.value;
        let i = r();
        return this.set(e, i), i;
      }
    };
    u();
    c();
    m();
    p();
    d();
    l();
    function ve(t) {
      return t.substring(0, 1).toLowerCase() + t.substring(1);
    }
    __name(ve, "ve");
    u();
    c();
    m();
    p();
    d();
    l();
    function ri(t, e) {
      let r = {};
      for (let n of t) {
        let i = n[e];
        r[i] = n;
      }
      return r;
    }
    __name(ri, "ri");
    u();
    c();
    m();
    p();
    d();
    l();
    function ut(t) {
      let e;
      return { get() {
        return e || (e = { value: t() }), e.value;
      } };
    }
    __name(ut, "ut");
    u();
    c();
    m();
    p();
    d();
    l();
    function ni(t) {
      return { models: Lr(t.models), enums: Lr(t.enums), types: Lr(t.types) };
    }
    __name(ni, "ni");
    function Lr(t) {
      let e = {};
      for (let { name: r, ...n } of t) e[r] = n;
      return e;
    }
    __name(Lr, "Lr");
    u();
    c();
    m();
    p();
    d();
    l();
    function Ve(t) {
      return t instanceof Date || Object.prototype.toString.call(t) === "[object Date]";
    }
    __name(Ve, "Ve");
    function Ut(t) {
      return t.toString() !== "Invalid Date";
    }
    __name(Ut, "Ut");
    u();
    c();
    m();
    p();
    d();
    l();
    l();
    function je(t) {
      return v.isDecimal(t) ? true : t !== null && typeof t == "object" && typeof t.s == "number" && typeof t.e == "number" && typeof t.toFixed == "function" && Array.isArray(t.d);
    }
    __name(je, "je");
    u();
    c();
    m();
    p();
    d();
    l();
    u();
    c();
    m();
    p();
    d();
    l();
    var mt = {};
    rt(mt, { ModelAction: /* @__PURE__ */ __name(() => ct, "ModelAction"), datamodelEnumToSchemaEnum: /* @__PURE__ */ __name(() => Ks, "datamodelEnumToSchemaEnum") });
    u();
    c();
    m();
    p();
    d();
    l();
    u();
    c();
    m();
    p();
    d();
    l();
    function Ks(t) {
      return { name: t.name, values: t.values.map((e) => e.name) };
    }
    __name(Ks, "Ks");
    u();
    c();
    m();
    p();
    d();
    l();
    var ct = ((L) => (L.findUnique = "findUnique", L.findUniqueOrThrow = "findUniqueOrThrow", L.findFirst = "findFirst", L.findFirstOrThrow = "findFirstOrThrow", L.findMany = "findMany", L.create = "create", L.createMany = "createMany", L.createManyAndReturn = "createManyAndReturn", L.update = "update", L.updateMany = "updateMany", L.updateManyAndReturn = "updateManyAndReturn", L.upsert = "upsert", L.delete = "delete", L.deleteMany = "deleteMany", L.groupBy = "groupBy", L.count = "count", L.aggregate = "aggregate", L.findRaw = "findRaw", L.aggregateRaw = "aggregateRaw", L))(ct || {});
    var Hs = nt(Kn());
    var zs = { red: qe, gray: Dn, dim: Lt, bold: _t, underline: Sn, highlightSource: /* @__PURE__ */ __name((t) => t.highlight(), "highlightSource") };
    var Ys = { red: /* @__PURE__ */ __name((t) => t, "red"), gray: /* @__PURE__ */ __name((t) => t, "gray"), dim: /* @__PURE__ */ __name((t) => t, "dim"), bold: /* @__PURE__ */ __name((t) => t, "bold"), underline: /* @__PURE__ */ __name((t) => t, "underline"), highlightSource: /* @__PURE__ */ __name((t) => t, "highlightSource") };
    function Xs({ message: t, originalMethod: e, isPanic: r, callArguments: n }) {
      return { functionName: `prisma.${e}()`, message: t, isPanic: r ?? false, callArguments: n };
    }
    __name(Xs, "Xs");
    function Zs({ functionName: t, location: e, message: r, isPanic: n, contextLines: i, callArguments: o }, s) {
      let a = [""], f = e ? " in" : ":";
      if (n ? (a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)), a.push(s.red(`It occurred in the ${s.bold(`\`${t}\``)} invocation${f}`))) : a.push(s.red(`Invalid ${s.bold(`\`${t}\``)} invocation${f}`)), e && a.push(s.underline(ea(e))), i) {
        a.push("");
        let h = [i.toString()];
        o && (h.push(o), h.push(s.dim(")"))), a.push(h.join("")), o && a.push("");
      } else a.push(""), o && a.push(o), a.push("");
      return a.push(r), a.join(`
`);
    }
    __name(Zs, "Zs");
    function ea(t) {
      let e = [t.fileName];
      return t.lineNumber && e.push(String(t.lineNumber)), t.columnNumber && e.push(String(t.columnNumber)), e.join(":");
    }
    __name(ea, "ea");
    function Bt(t) {
      let e = t.showColors ? zs : Ys, r;
      return typeof $getTemplateParameters < "u" ? r = $getTemplateParameters(t, e) : r = Xs(t), Zs(r, e);
    }
    __name(Bt, "Bt");
    u();
    c();
    m();
    p();
    d();
    l();
    var pi = nt(Fr());
    u();
    c();
    m();
    p();
    d();
    l();
    function ai(t, e, r) {
      let n = li(t), i = ta(n), o = na(i);
      o ? $t(o, e, r) : e.addErrorMessage(() => "Unknown error");
    }
    __name(ai, "ai");
    function li(t) {
      return t.errors.flatMap((e) => e.kind === "Union" ? li(e) : [e]);
    }
    __name(li, "li");
    function ta(t) {
      let e = /* @__PURE__ */ new Map(), r = [];
      for (let n of t) {
        if (n.kind !== "InvalidArgumentType") {
          r.push(n);
          continue;
        }
        let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`, o = e.get(i);
        o ? e.set(i, { ...n, argument: { ...n.argument, typeNames: ra(o.argument.typeNames, n.argument.typeNames) } }) : e.set(i, n);
      }
      return r.push(...e.values()), r;
    }
    __name(ta, "ta");
    function ra(t, e) {
      return [...new Set(t.concat(e))];
    }
    __name(ra, "ra");
    function na(t) {
      return _r(t, (e, r) => {
        let n = oi(e), i = oi(r);
        return n !== i ? n - i : si(e) - si(r);
      });
    }
    __name(na, "na");
    function oi(t) {
      let e = 0;
      return Array.isArray(t.selectionPath) && (e += t.selectionPath.length), Array.isArray(t.argumentPath) && (e += t.argumentPath.length), e;
    }
    __name(oi, "oi");
    function si(t) {
      switch (t.kind) {
        case "InvalidArgumentValue":
        case "ValueTooLarge":
          return 20;
        case "InvalidArgumentType":
          return 10;
        case "RequiredArgumentMissing":
          return -10;
        default:
          return 0;
      }
    }
    __name(si, "si");
    u();
    c();
    m();
    p();
    d();
    l();
    var re = class {
      static {
        __name(this, "re");
      }
      constructor(e, r) {
        this.name = e;
        this.value = r;
      }
      isRequired = false;
      makeRequired() {
        return this.isRequired = true, this;
      }
      write(e) {
        let { colors: { green: r } } = e.context;
        e.addMarginSymbol(r(this.isRequired ? "+" : "?")), e.write(r(this.name)), this.isRequired || e.write(r("?")), e.write(r(": ")), typeof this.value == "string" ? e.write(r(this.value)) : e.write(this.value);
      }
    };
    u();
    c();
    m();
    p();
    d();
    l();
    u();
    c();
    m();
    p();
    d();
    l();
    ci();
    u();
    c();
    m();
    p();
    d();
    l();
    var Qe = class {
      static {
        __name(this, "Qe");
      }
      constructor(e = 0, r) {
        this.context = r;
        this.currentIndent = e;
      }
      lines = [];
      currentLine = "";
      currentIndent = 0;
      marginSymbol;
      afterNextNewLineCallback;
      write(e) {
        return typeof e == "string" ? this.currentLine += e : e.write(this), this;
      }
      writeJoined(e, r, n = (i, o) => o.write(i)) {
        let i = r.length - 1;
        for (let o = 0; o < r.length; o++) n(r[o], this), o !== i && this.write(e);
        return this;
      }
      writeLine(e) {
        return this.write(e).newLine();
      }
      newLine() {
        this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = void 0;
        let e = this.afterNextNewLineCallback;
        return this.afterNextNewLineCallback = void 0, e?.(), this;
      }
      withIndent(e) {
        return this.indent(), e(this), this.unindent(), this;
      }
      afterNextNewline(e) {
        return this.afterNextNewLineCallback = e, this;
      }
      indent() {
        return this.currentIndent++, this;
      }
      unindent() {
        return this.currentIndent > 0 && this.currentIndent--, this;
      }
      addMarginSymbol(e) {
        return this.marginSymbol = e, this;
      }
      toString() {
        return this.lines.concat(this.indentedCurrentLine()).join(`
`);
      }
      getCurrentLineLength() {
        return this.currentLine.length;
      }
      indentedCurrentLine() {
        let e = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
        return this.marginSymbol ? this.marginSymbol + e.slice(1) : e;
      }
    };
    ui();
    u();
    c();
    m();
    p();
    d();
    l();
    u();
    c();
    m();
    p();
    d();
    l();
    var Vt = class {
      static {
        __name(this, "Vt");
      }
      constructor(e) {
        this.value = e;
      }
      write(e) {
        e.write(this.value);
      }
      markAsError() {
        this.value.markAsError();
      }
    };
    u();
    c();
    m();
    p();
    d();
    l();
    var jt = /* @__PURE__ */ __name((t) => t, "jt");
    var Qt = { bold: jt, red: jt, green: jt, dim: jt, enabled: false };
    var mi = { bold: _t, red: qe, green: kn, dim: Lt, enabled: true };
    var Je = { write(t) {
      t.writeLine(",");
    } };
    u();
    c();
    m();
    p();
    d();
    l();
    var de = class {
      static {
        __name(this, "de");
      }
      constructor(e) {
        this.contents = e;
      }
      isUnderlined = false;
      color = /* @__PURE__ */ __name((e) => e, "color");
      underline() {
        return this.isUnderlined = true, this;
      }
      setColor(e) {
        return this.color = e, this;
      }
      write(e) {
        let r = e.getCurrentLineLength();
        e.write(this.color(this.contents)), this.isUnderlined && e.afterNextNewline(() => {
          e.write(" ".repeat(r)).writeLine(this.color("~".repeat(this.contents.length)));
        });
      }
    };
    u();
    c();
    m();
    p();
    d();
    l();
    var Te = class {
      static {
        __name(this, "Te");
      }
      hasError = false;
      markAsError() {
        return this.hasError = true, this;
      }
    };
    var Ge = class extends Te {
      static {
        __name(this, "Ge");
      }
      items = [];
      addItem(e) {
        return this.items.push(new Vt(e)), this;
      }
      getField(e) {
        return this.items[e];
      }
      getPrintWidth() {
        return this.items.length === 0 ? 2 : Math.max(...this.items.map((r) => r.value.getPrintWidth())) + 2;
      }
      write(e) {
        if (this.items.length === 0) {
          this.writeEmpty(e);
          return;
        }
        this.writeWithItems(e);
      }
      writeEmpty(e) {
        let r = new de("[]");
        this.hasError && r.setColor(e.context.colors.red).underline(), e.write(r);
      }
      writeWithItems(e) {
        let { colors: r } = e.context;
        e.writeLine("[").withIndent(() => e.writeJoined(Je, this.items).newLine()).write("]"), this.hasError && e.afterNextNewline(() => {
          e.writeLine(r.red("~".repeat(this.getPrintWidth())));
        });
      }
      asObject() {
      }
    };
    var We = class t extends Te {
      static {
        __name(this, "t");
      }
      fields = {};
      suggestions = [];
      addField(e) {
        this.fields[e.name] = e;
      }
      addSuggestion(e) {
        this.suggestions.push(e);
      }
      getField(e) {
        return this.fields[e];
      }
      getDeepField(e) {
        let [r, ...n] = e, i = this.getField(r);
        if (!i) return;
        let o = i;
        for (let s of n) {
          let a;
          if (o.value instanceof t ? a = o.value.getField(s) : o.value instanceof Ge && (a = o.value.getField(Number(s))), !a) return;
          o = a;
        }
        return o;
      }
      getDeepFieldValue(e) {
        return e.length === 0 ? this : this.getDeepField(e)?.value;
      }
      hasField(e) {
        return !!this.getField(e);
      }
      removeAllFields() {
        this.fields = {};
      }
      removeField(e) {
        delete this.fields[e];
      }
      getFields() {
        return this.fields;
      }
      isEmpty() {
        return Object.keys(this.fields).length === 0;
      }
      getFieldValue(e) {
        return this.getField(e)?.value;
      }
      getDeepSubSelectionValue(e) {
        let r = this;
        for (let n of e) {
          if (!(r instanceof t)) return;
          let i = r.getSubSelectionValue(n);
          if (!i) return;
          r = i;
        }
        return r;
      }
      getDeepSelectionParent(e) {
        let r = this.getSelectionParent();
        if (!r) return;
        let n = r;
        for (let i of e) {
          let o = n.value.getFieldValue(i);
          if (!o || !(o instanceof t)) return;
          let s = o.getSelectionParent();
          if (!s) return;
          n = s;
        }
        return n;
      }
      getSelectionParent() {
        let e = this.getField("select")?.value.asObject();
        if (e) return { kind: "select", value: e };
        let r = this.getField("include")?.value.asObject();
        if (r) return { kind: "include", value: r };
      }
      getSubSelectionValue(e) {
        return this.getSelectionParent()?.value.fields[e].value;
      }
      getPrintWidth() {
        let e = Object.values(this.fields);
        return e.length == 0 ? 2 : Math.max(...e.map((n) => n.getPrintWidth())) + 2;
      }
      write(e) {
        let r = Object.values(this.fields);
        if (r.length === 0 && this.suggestions.length === 0) {
          this.writeEmpty(e);
          return;
        }
        this.writeWithContents(e, r);
      }
      asObject() {
        return this;
      }
      writeEmpty(e) {
        let r = new de("{}");
        this.hasError && r.setColor(e.context.colors.red).underline(), e.write(r);
      }
      writeWithContents(e, r) {
        e.writeLine("{").withIndent(() => {
          e.writeJoined(Je, [...r, ...this.suggestions]).newLine();
        }), e.write("}"), this.hasError && e.afterNextNewline(() => {
          e.writeLine(e.context.colors.red("~".repeat(this.getPrintWidth())));
        });
      }
    };
    u();
    c();
    m();
    p();
    d();
    l();
    var G = class extends Te {
      static {
        __name(this, "G");
      }
      constructor(r) {
        super();
        this.text = r;
      }
      getPrintWidth() {
        return this.text.length;
      }
      write(r) {
        let n = new de(this.text);
        this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
      }
      asObject() {
      }
    };
    u();
    c();
    m();
    p();
    d();
    l();
    var pt = class {
      static {
        __name(this, "pt");
      }
      fields = [];
      addField(e, r) {
        return this.fields.push({ write(n) {
          let { green: i, dim: o } = n.context.colors;
          n.write(i(o(`${e}: ${r}`))).addMarginSymbol(i(o("+")));
        } }), this;
      }
      write(e) {
        let { colors: { green: r } } = e.context;
        e.writeLine(r("{")).withIndent(() => {
          e.writeJoined(Je, this.fields).newLine();
        }).write(r("}")).addMarginSymbol(r("+"));
      }
    };
    function $t(t, e, r) {
      switch (t.kind) {
        case "MutuallyExclusiveFields":
          ia(t, e);
          break;
        case "IncludeOnScalar":
          oa(t, e);
          break;
        case "EmptySelection":
          sa(t, e, r);
          break;
        case "UnknownSelectionField":
          ca(t, e);
          break;
        case "InvalidSelectionValue":
          ma(t, e);
          break;
        case "UnknownArgument":
          pa(t, e);
          break;
        case "UnknownInputField":
          da(t, e);
          break;
        case "RequiredArgumentMissing":
          fa(t, e);
          break;
        case "InvalidArgumentType":
          ga(t, e);
          break;
        case "InvalidArgumentValue":
          ya(t, e);
          break;
        case "ValueTooLarge":
          ha(t, e);
          break;
        case "SomeFieldsMissing":
          ba(t, e);
          break;
        case "TooManyFieldsGiven":
          wa(t, e);
          break;
        case "Union":
          ai(t, e, r);
          break;
        default:
          throw new Error("not implemented: " + t.kind);
      }
    }
    __name($t, "$t");
    function ia(t, e) {
      let r = e.arguments.getDeepSubSelectionValue(t.selectionPath)?.asObject();
      r && (r.getField(t.firstField)?.markAsError(), r.getField(t.secondField)?.markAsError()), e.addErrorMessage((n) => `Please ${n.bold("either")} use ${n.green(`\`${t.firstField}\``)} or ${n.green(`\`${t.secondField}\``)}, but ${n.red("not both")} at the same time.`);
    }
    __name(ia, "ia");
    function oa(t, e) {
      let [r, n] = dt(t.selectionPath), i = t.outputType, o = e.arguments.getDeepSelectionParent(r)?.value;
      if (o && (o.getField(n)?.markAsError(), i)) for (let s of i.fields) s.isRelation && o.addSuggestion(new re(s.name, "true"));
      e.addErrorMessage((s) => {
        let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;
        return i ? a += ` on model ${s.bold(i.name)}. ${ft(s)}` : a += ".", a += `
Note that ${s.bold("include")} statements only accept relation fields.`, a;
      });
    }
    __name(oa, "oa");
    function sa(t, e, r) {
      let n = e.arguments.getDeepSubSelectionValue(t.selectionPath)?.asObject();
      if (n) {
        let i = n.getField("omit")?.value.asObject();
        if (i) {
          aa(t, e, i);
          return;
        }
        if (n.hasField("select")) {
          la(t, e);
          return;
        }
      }
      if (r?.[ve(t.outputType.name)]) {
        ua(t, e);
        return;
      }
      e.addErrorMessage(() => `Unknown field at "${t.selectionPath.join(".")} selection"`);
    }
    __name(sa, "sa");
    function aa(t, e, r) {
      r.removeAllFields();
      for (let n of t.outputType.fields) r.addSuggestion(new re(n.name, "false"));
      e.addErrorMessage((n) => `The ${n.red("omit")} statement includes every field of the model ${n.bold(t.outputType.name)}. At least one field must be included in the result`);
    }
    __name(aa, "aa");
    function la(t, e) {
      let r = t.outputType, n = e.arguments.getDeepSelectionParent(t.selectionPath)?.value, i = n?.isEmpty() ?? false;
      n && (n.removeAllFields(), gi(n, r)), e.addErrorMessage((o) => i ? `The ${o.red("`select`")} statement for type ${o.bold(r.name)} must not be empty. ${ft(o)}` : `The ${o.red("`select`")} statement for type ${o.bold(r.name)} needs ${o.bold("at least one truthy value")}.`);
    }
    __name(la, "la");
    function ua(t, e) {
      let r = new pt();
      for (let i of t.outputType.fields) i.isRelation || r.addField(i.name, "false");
      let n = new re("omit", r).makeRequired();
      if (t.selectionPath.length === 0) e.arguments.addSuggestion(n);
      else {
        let [i, o] = dt(t.selectionPath), a = e.arguments.getDeepSelectionParent(i)?.value.asObject()?.getField(o);
        if (a) {
          let f = a?.value.asObject() ?? new We();
          f.addSuggestion(n), a.value = f;
        }
      }
      e.addErrorMessage((i) => `The global ${i.red("omit")} configuration excludes every field of the model ${i.bold(t.outputType.name)}. At least one field must be included in the result`);
    }
    __name(ua, "ua");
    function ca(t, e) {
      let r = yi(t.selectionPath, e);
      if (r.parentKind !== "unknown") {
        r.field.markAsError();
        let n = r.parent;
        switch (r.parentKind) {
          case "select":
            gi(n, t.outputType);
            break;
          case "include":
            xa(n, t.outputType);
            break;
          case "omit":
            Ea(n, t.outputType);
            break;
        }
      }
      e.addErrorMessage((n) => {
        let i = [`Unknown field ${n.red(`\`${r.fieldName}\``)}`];
        return r.parentKind !== "unknown" && i.push(`for ${n.bold(r.parentKind)} statement`), i.push(`on model ${n.bold(`\`${t.outputType.name}\``)}.`), i.push(ft(n)), i.join(" ");
      });
    }
    __name(ca, "ca");
    function ma(t, e) {
      let r = yi(t.selectionPath, e);
      r.parentKind !== "unknown" && r.field.value.markAsError(), e.addErrorMessage((n) => `Invalid value for selection field \`${n.red(r.fieldName)}\`: ${t.underlyingError}`);
    }
    __name(ma, "ma");
    function pa(t, e) {
      let r = t.argumentPath[0], n = e.arguments.getDeepSubSelectionValue(t.selectionPath)?.asObject();
      n && (n.getField(r)?.markAsError(), Pa(n, t.arguments)), e.addErrorMessage((i) => di(i, r, t.arguments.map((o) => o.name)));
    }
    __name(pa, "pa");
    function da(t, e) {
      let [r, n] = dt(t.argumentPath), i = e.arguments.getDeepSubSelectionValue(t.selectionPath)?.asObject();
      if (i) {
        i.getDeepField(t.argumentPath)?.markAsError();
        let o = i.getDeepFieldValue(r)?.asObject();
        o && hi(o, t.inputType);
      }
      e.addErrorMessage((o) => di(o, n, t.inputType.fields.map((s) => s.name)));
    }
    __name(da, "da");
    function di(t, e, r) {
      let n = [`Unknown argument \`${t.red(e)}\`.`], i = Ta(e, r);
      return i && n.push(`Did you mean \`${t.green(i)}\`?`), r.length > 0 && n.push(ft(t)), n.join(" ");
    }
    __name(di, "di");
    function fa(t, e) {
      let r;
      e.addErrorMessage((f) => r?.value instanceof G && r.value.text === "null" ? `Argument \`${f.green(o)}\` must not be ${f.red("null")}.` : `Argument \`${f.green(o)}\` is missing.`);
      let n = e.arguments.getDeepSubSelectionValue(t.selectionPath)?.asObject();
      if (!n) return;
      let [i, o] = dt(t.argumentPath), s = new pt(), a = n.getDeepFieldValue(i)?.asObject();
      if (a) if (r = a.getField(o), r && a.removeField(o), t.inputTypes.length === 1 && t.inputTypes[0].kind === "object") {
        for (let f of t.inputTypes[0].fields) s.addField(f.name, f.typeNames.join(" | "));
        a.addSuggestion(new re(o, s).makeRequired());
      } else {
        let f = t.inputTypes.map(fi).join(" | ");
        a.addSuggestion(new re(o, f).makeRequired());
      }
    }
    __name(fa, "fa");
    function fi(t) {
      return t.kind === "list" ? `${fi(t.elementType)}[]` : t.name;
    }
    __name(fi, "fi");
    function ga(t, e) {
      let r = t.argument.name, n = e.arguments.getDeepSubSelectionValue(t.selectionPath)?.asObject();
      n && n.getDeepFieldValue(t.argumentPath)?.markAsError(), e.addErrorMessage((i) => {
        let o = Jt("or", t.argument.typeNames.map((s) => i.green(s)));
        return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(t.inferredType)}.`;
      });
    }
    __name(ga, "ga");
    function ya(t, e) {
      let r = t.argument.name, n = e.arguments.getDeepSubSelectionValue(t.selectionPath)?.asObject();
      n && n.getDeepFieldValue(t.argumentPath)?.markAsError(), e.addErrorMessage((i) => {
        let o = [`Invalid value for argument \`${i.bold(r)}\``];
        if (t.underlyingError && o.push(`: ${t.underlyingError}`), o.push("."), t.argument.typeNames.length > 0) {
          let s = Jt("or", t.argument.typeNames.map((a) => i.green(a)));
          o.push(` Expected ${s}.`);
        }
        return o.join("");
      });
    }
    __name(ya, "ya");
    function ha(t, e) {
      let r = t.argument.name, n = e.arguments.getDeepSubSelectionValue(t.selectionPath)?.asObject(), i;
      if (n) {
        let s = n.getDeepField(t.argumentPath)?.value;
        s?.markAsError(), s instanceof G && (i = s.text);
      }
      e.addErrorMessage((o) => {
        let s = ["Unable to fit value"];
        return i && s.push(o.red(i)), s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``), s.join(" ");
      });
    }
    __name(ha, "ha");
    function ba(t, e) {
      let r = t.argumentPath[t.argumentPath.length - 1], n = e.arguments.getDeepSubSelectionValue(t.selectionPath)?.asObject();
      if (n) {
        let i = n.getDeepFieldValue(t.argumentPath)?.asObject();
        i && hi(i, t.inputType);
      }
      e.addErrorMessage((i) => {
        let o = [`Argument \`${i.bold(r)}\` of type ${i.bold(t.inputType.name)} needs`];
        return t.constraints.minFieldCount === 1 ? t.constraints.requiredFields ? o.push(`${i.green("at least one of")} ${Jt("or", t.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``))} arguments.`) : o.push(`${i.green("at least one")} argument.`) : o.push(`${i.green(`at least ${t.constraints.minFieldCount}`)} arguments.`), o.push(ft(i)), o.join(" ");
      });
    }
    __name(ba, "ba");
    function wa(t, e) {
      let r = t.argumentPath[t.argumentPath.length - 1], n = e.arguments.getDeepSubSelectionValue(t.selectionPath)?.asObject(), i = [];
      if (n) {
        let o = n.getDeepFieldValue(t.argumentPath)?.asObject();
        o && (o.markAsError(), i = Object.keys(o.getFields()));
      }
      e.addErrorMessage((o) => {
        let s = [`Argument \`${o.bold(r)}\` of type ${o.bold(t.inputType.name)} needs`];
        return t.constraints.minFieldCount === 1 && t.constraints.maxFieldCount == 1 ? s.push(`${o.green("exactly one")} argument,`) : t.constraints.maxFieldCount == 1 ? s.push(`${o.green("at most one")} argument,`) : s.push(`${o.green(`at most ${t.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${Jt("and", i.map((a) => o.red(a)))}. Please choose`), t.constraints.maxFieldCount === 1 ? s.push("one.") : s.push(`${t.constraints.maxFieldCount}.`), s.join(" ");
      });
    }
    __name(wa, "wa");
    function gi(t, e) {
      for (let r of e.fields) t.hasField(r.name) || t.addSuggestion(new re(r.name, "true"));
    }
    __name(gi, "gi");
    function xa(t, e) {
      for (let r of e.fields) r.isRelation && !t.hasField(r.name) && t.addSuggestion(new re(r.name, "true"));
    }
    __name(xa, "xa");
    function Ea(t, e) {
      for (let r of e.fields) !t.hasField(r.name) && !r.isRelation && t.addSuggestion(new re(r.name, "true"));
    }
    __name(Ea, "Ea");
    function Pa(t, e) {
      for (let r of e) t.hasField(r.name) || t.addSuggestion(new re(r.name, r.typeNames.join(" | ")));
    }
    __name(Pa, "Pa");
    function yi(t, e) {
      let [r, n] = dt(t), i = e.arguments.getDeepSubSelectionValue(r)?.asObject();
      if (!i) return { parentKind: "unknown", fieldName: n };
      let o = i.getFieldValue("select")?.asObject(), s = i.getFieldValue("include")?.asObject(), a = i.getFieldValue("omit")?.asObject(), f = o?.getField(n);
      return o && f ? { parentKind: "select", parent: o, field: f, fieldName: n } : (f = s?.getField(n), s && f ? { parentKind: "include", field: f, parent: s, fieldName: n } : (f = a?.getField(n), a && f ? { parentKind: "omit", field: f, parent: a, fieldName: n } : { parentKind: "unknown", fieldName: n }));
    }
    __name(yi, "yi");
    function hi(t, e) {
      if (e.kind === "object") for (let r of e.fields) t.hasField(r.name) || t.addSuggestion(new re(r.name, r.typeNames.join(" | ")));
    }
    __name(hi, "hi");
    function dt(t) {
      let e = [...t], r = e.pop();
      if (!r) throw new Error("unexpected empty path");
      return [e, r];
    }
    __name(dt, "dt");
    function ft({ green: t, enabled: e }) {
      return "Available options are " + (e ? `listed in ${t("green")}` : "marked with ?") + ".";
    }
    __name(ft, "ft");
    function Jt(t, e) {
      if (e.length === 1) return e[0];
      let r = [...e], n = r.pop();
      return `${r.join(", ")} ${t} ${n}`;
    }
    __name(Jt, "Jt");
    var va = 3;
    function Ta(t, e) {
      let r = 1 / 0, n;
      for (let i of e) {
        let o = (0, pi.default)(t, i);
        o > va || o < r && (r = o, n = i);
      }
      return n;
    }
    __name(Ta, "Ta");
    u();
    c();
    m();
    p();
    d();
    l();
    u();
    c();
    m();
    p();
    d();
    l();
    var gt = class {
      static {
        __name(this, "gt");
      }
      modelName;
      name;
      typeName;
      isList;
      isEnum;
      constructor(e, r, n, i, o) {
        this.modelName = e, this.name = r, this.typeName = n, this.isList = i, this.isEnum = o;
      }
      _toGraphQLInputType() {
        let e = this.isList ? "List" : "", r = this.isEnum ? "Enum" : "";
        return `${e}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
      }
    };
    function Ke(t) {
      return t instanceof gt;
    }
    __name(Ke, "Ke");
    u();
    c();
    m();
    p();
    d();
    l();
    var Gt = Symbol();
    var qr = /* @__PURE__ */ new WeakMap();
    var xe = class {
      static {
        __name(this, "xe");
      }
      constructor(e) {
        e === Gt ? qr.set(this, `Prisma.${this._getName()}`) : qr.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
      }
      _getName() {
        return this.constructor.name;
      }
      toString() {
        return qr.get(this);
      }
    };
    var yt = class extends xe {
      static {
        __name(this, "yt");
      }
      _getNamespace() {
        return "NullTypes";
      }
    };
    var ht = class extends yt {
      static {
        __name(this, "ht");
      }
      #e;
    };
    Ur(ht, "DbNull");
    var bt = class extends yt {
      static {
        __name(this, "bt");
      }
      #e;
    };
    Ur(bt, "JsonNull");
    var wt = class extends yt {
      static {
        __name(this, "wt");
      }
      #e;
    };
    Ur(wt, "AnyNull");
    var Wt = { classes: { DbNull: ht, JsonNull: bt, AnyNull: wt }, instances: { DbNull: new ht(Gt), JsonNull: new bt(Gt), AnyNull: new wt(Gt) } };
    function Ur(t, e) {
      Object.defineProperty(t, "name", { value: e, configurable: true });
    }
    __name(Ur, "Ur");
    u();
    c();
    m();
    p();
    d();
    l();
    var bi = ": ";
    var Kt = class {
      static {
        __name(this, "Kt");
      }
      constructor(e, r) {
        this.name = e;
        this.value = r;
      }
      hasError = false;
      markAsError() {
        this.hasError = true;
      }
      getPrintWidth() {
        return this.name.length + this.value.getPrintWidth() + bi.length;
      }
      write(e) {
        let r = new de(this.name);
        this.hasError && r.underline().setColor(e.context.colors.red), e.write(r).write(bi).write(this.value);
      }
    };
    var Br = class {
      static {
        __name(this, "Br");
      }
      arguments;
      errorMessages = [];
      constructor(e) {
        this.arguments = e;
      }
      write(e) {
        e.write(this.arguments);
      }
      addErrorMessage(e) {
        this.errorMessages.push(e);
      }
      renderAllMessages(e) {
        return this.errorMessages.map((r) => r(e)).join(`
`);
      }
    };
    function He(t) {
      return new Br(wi(t));
    }
    __name(He, "He");
    function wi(t) {
      let e = new We();
      for (let [r, n] of Object.entries(t)) {
        let i = new Kt(r, xi(n));
        e.addField(i);
      }
      return e;
    }
    __name(wi, "wi");
    function xi(t) {
      if (typeof t == "string") return new G(JSON.stringify(t));
      if (typeof t == "number" || typeof t == "boolean") return new G(String(t));
      if (typeof t == "bigint") return new G(`${t}n`);
      if (t === null) return new G("null");
      if (t === void 0) return new G("undefined");
      if (je(t)) return new G(`new Prisma.Decimal("${t.toFixed()}")`);
      if (t instanceof Uint8Array) return b.isBuffer(t) ? new G(`Buffer.alloc(${t.byteLength})`) : new G(`new Uint8Array(${t.byteLength})`);
      if (t instanceof Date) {
        let e = Ut(t) ? t.toISOString() : "Invalid Date";
        return new G(`new Date("${e}")`);
      }
      return t instanceof xe ? new G(`Prisma.${t._getName()}`) : Ke(t) ? new G(`prisma.${ve(t.modelName)}.$fields.${t.name}`) : Array.isArray(t) ? Ca(t) : typeof t == "object" ? wi(t) : new G(Object.prototype.toString.call(t));
    }
    __name(xi, "xi");
    function Ca(t) {
      let e = new Ge();
      for (let r of t) e.addItem(xi(r));
      return e;
    }
    __name(Ca, "Ca");
    function Ht(t, e) {
      let r = e === "pretty" ? mi : Qt, n = t.renderAllMessages(r), i = new Qe(0, { colors: r }).write(t).toString();
      return { message: n, args: i };
    }
    __name(Ht, "Ht");
    function zt({ args: t, errors: e, errorFormat: r, callsite: n, originalMethod: i, clientVersion: o, globalOmit: s }) {
      let a = He(t);
      for (let C of e) $t(C, a, s);
      let { message: f, args: h } = Ht(a, r), T = Bt({ message: f, callsite: n, originalMethod: i, showColors: r === "pretty", callArguments: h });
      throw new W(T, { clientVersion: o });
    }
    __name(zt, "zt");
    u();
    c();
    m();
    p();
    d();
    l();
    u();
    c();
    m();
    p();
    d();
    l();
    function fe(t) {
      return t.replace(/^./, (e) => e.toLowerCase());
    }
    __name(fe, "fe");
    u();
    c();
    m();
    p();
    d();
    l();
    function Pi(t, e, r) {
      let n = fe(r);
      return !e.result || !(e.result.$allModels || e.result[n]) ? t : Ra({ ...t, ...Ei(e.name, t, e.result.$allModels), ...Ei(e.name, t, e.result[n]) });
    }
    __name(Pi, "Pi");
    function Ra(t) {
      let e = new pe(), r = /* @__PURE__ */ __name((n, i) => e.getOrCreate(n, () => i.has(n) ? [n] : (i.add(n), t[n] ? t[n].needs.flatMap((o) => r(o, i)) : [n])), "r");
      return Be(t, (n) => ({ ...n, needs: r(n.name, /* @__PURE__ */ new Set()) }));
    }
    __name(Ra, "Ra");
    function Ei(t, e, r) {
      return r ? Be(r, ({ needs: n, compute: i }, o) => ({ name: o, needs: n ? Object.keys(n).filter((s) => n[s]) : [], compute: Aa(e, o, i) })) : {};
    }
    __name(Ei, "Ei");
    function Aa(t, e, r) {
      let n = t?.[e]?.compute;
      return n ? (i) => r({ ...i, [e]: n(i) }) : r;
    }
    __name(Aa, "Aa");
    function vi(t, e) {
      if (!e) return t;
      let r = { ...t };
      for (let n of Object.values(e)) if (t[n.name]) for (let i of n.needs) r[i] = true;
      return r;
    }
    __name(vi, "vi");
    function Ti(t, e) {
      if (!e) return t;
      let r = { ...t };
      for (let n of Object.values(e)) if (!t[n.name]) for (let i of n.needs) delete r[i];
      return r;
    }
    __name(Ti, "Ti");
    var Yt = class {
      static {
        __name(this, "Yt");
      }
      constructor(e, r) {
        this.extension = e;
        this.previous = r;
      }
      computedFieldsCache = new pe();
      modelExtensionsCache = new pe();
      queryCallbacksCache = new pe();
      clientExtensions = ut(() => this.extension.client ? { ...this.previous?.getAllClientExtensions(), ...this.extension.client } : this.previous?.getAllClientExtensions());
      batchCallbacks = ut(() => {
        let e = this.previous?.getAllBatchQueryCallbacks() ?? [], r = this.extension.query?.$__internalBatch;
        return r ? e.concat(r) : e;
      });
      getAllComputedFields(e) {
        return this.computedFieldsCache.getOrCreate(e, () => Pi(this.previous?.getAllComputedFields(e), this.extension, e));
      }
      getAllClientExtensions() {
        return this.clientExtensions.get();
      }
      getAllModelExtensions(e) {
        return this.modelExtensionsCache.getOrCreate(e, () => {
          let r = fe(e);
          return !this.extension.model || !(this.extension.model[r] || this.extension.model.$allModels) ? this.previous?.getAllModelExtensions(e) : { ...this.previous?.getAllModelExtensions(e), ...this.extension.model.$allModels, ...this.extension.model[r] };
        });
      }
      getAllQueryCallbacks(e, r) {
        return this.queryCallbacksCache.getOrCreate(`${e}:${r}`, () => {
          let n = this.previous?.getAllQueryCallbacks(e, r) ?? [], i = [], o = this.extension.query;
          return !o || !(o[e] || o.$allModels || o[r] || o.$allOperations) ? n : (o[e] !== void 0 && (o[e][r] !== void 0 && i.push(o[e][r]), o[e].$allOperations !== void 0 && i.push(o[e].$allOperations)), e !== "$none" && o.$allModels !== void 0 && (o.$allModels[r] !== void 0 && i.push(o.$allModels[r]), o.$allModels.$allOperations !== void 0 && i.push(o.$allModels.$allOperations)), o[r] !== void 0 && i.push(o[r]), o.$allOperations !== void 0 && i.push(o.$allOperations), n.concat(i));
        });
      }
      getAllBatchQueryCallbacks() {
        return this.batchCallbacks.get();
      }
    };
    var ze = class t {
      static {
        __name(this, "t");
      }
      constructor(e) {
        this.head = e;
      }
      static empty() {
        return new t();
      }
      static single(e) {
        return new t(new Yt(e));
      }
      isEmpty() {
        return this.head === void 0;
      }
      append(e) {
        return new t(new Yt(e, this.head));
      }
      getAllComputedFields(e) {
        return this.head?.getAllComputedFields(e);
      }
      getAllClientExtensions() {
        return this.head?.getAllClientExtensions();
      }
      getAllModelExtensions(e) {
        return this.head?.getAllModelExtensions(e);
      }
      getAllQueryCallbacks(e, r) {
        return this.head?.getAllQueryCallbacks(e, r) ?? [];
      }
      getAllBatchQueryCallbacks() {
        return this.head?.getAllBatchQueryCallbacks() ?? [];
      }
    };
    u();
    c();
    m();
    p();
    d();
    l();
    var Xt = class {
      static {
        __name(this, "Xt");
      }
      constructor(e) {
        this.name = e;
      }
    };
    function Ci(t) {
      return t instanceof Xt;
    }
    __name(Ci, "Ci");
    function Ri(t) {
      return new Xt(t);
    }
    __name(Ri, "Ri");
    u();
    c();
    m();
    p();
    d();
    l();
    u();
    c();
    m();
    p();
    d();
    l();
    var Ai = Symbol();
    var xt = class {
      static {
        __name(this, "xt");
      }
      constructor(e) {
        if (e !== Ai) throw new Error("Skip instance can not be constructed directly");
      }
      ifUndefined(e) {
        return e === void 0 ? Zt : e;
      }
    };
    var Zt = new xt(Ai);
    function ge(t) {
      return t instanceof xt;
    }
    __name(ge, "ge");
    var Sa = { findUnique: "findUnique", findUniqueOrThrow: "findUniqueOrThrow", findFirst: "findFirst", findFirstOrThrow: "findFirstOrThrow", findMany: "findMany", count: "aggregate", create: "createOne", createMany: "createMany", createManyAndReturn: "createManyAndReturn", update: "updateOne", updateMany: "updateMany", updateManyAndReturn: "updateManyAndReturn", upsert: "upsertOne", delete: "deleteOne", deleteMany: "deleteMany", executeRaw: "executeRaw", queryRaw: "queryRaw", aggregate: "aggregate", groupBy: "groupBy", runCommandRaw: "runCommandRaw", findRaw: "findRaw", aggregateRaw: "aggregateRaw" };
    var Si = "explicitly `undefined` values are not allowed";
    function er({ modelName: t, action: e, args: r, runtimeDataModel: n, extensions: i = ze.empty(), callsite: o, clientMethod: s, errorFormat: a, clientVersion: f, previewFeatures: h, globalOmit: T }) {
      let C = new $r({ runtimeDataModel: n, modelName: t, action: e, rootArgs: r, callsite: o, extensions: i, selectionPath: [], argumentPath: [], originalMethod: s, errorFormat: a, clientVersion: f, previewFeatures: h, globalOmit: T });
      return { modelName: t, action: Sa[e], query: Et(r, C) };
    }
    __name(er, "er");
    function Et({ select: t, include: e, ...r } = {}, n) {
      let i = r.omit;
      return delete r.omit, { arguments: Oi(r, n), selection: ka(t, e, i, n) };
    }
    __name(Et, "Et");
    function ka(t, e, r, n) {
      return t ? (e ? n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "include", secondField: "select", selectionPath: n.getSelectionPath() }) : r && n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "omit", secondField: "select", selectionPath: n.getSelectionPath() }), Da(t, n)) : Oa(n, e, r);
    }
    __name(ka, "ka");
    function Oa(t, e, r) {
      let n = {};
      return t.modelOrType && !t.isRawAction() && (n.$composites = true, n.$scalars = true), e && Ma(n, e, t), Ia(n, r, t), n;
    }
    __name(Oa, "Oa");
    function Ma(t, e, r) {
      for (let [n, i] of Object.entries(e)) {
        if (ge(i)) continue;
        let o = r.nestSelection(n);
        if (Vr(i, o), i === false || i === void 0) {
          t[n] = false;
          continue;
        }
        let s = r.findField(n);
        if (s && s.kind !== "object" && r.throwValidationError({ kind: "IncludeOnScalar", selectionPath: r.getSelectionPath().concat(n), outputType: r.getOutputTypeDescription() }), s) {
          t[n] = Et(i === true ? {} : i, o);
          continue;
        }
        if (i === true) {
          t[n] = true;
          continue;
        }
        t[n] = Et(i, o);
      }
    }
    __name(Ma, "Ma");
    function Ia(t, e, r) {
      let n = r.getComputedFields(), i = { ...r.getGlobalOmit(), ...e }, o = Ti(i, n);
      for (let [s, a] of Object.entries(o)) {
        if (ge(a)) continue;
        Vr(a, r.nestSelection(s));
        let f = r.findField(s);
        n?.[s] && !f || (t[s] = !a);
      }
    }
    __name(Ia, "Ia");
    function Da(t, e) {
      let r = {}, n = e.getComputedFields(), i = vi(t, n);
      for (let [o, s] of Object.entries(i)) {
        if (ge(s)) continue;
        let a = e.nestSelection(o);
        Vr(s, a);
        let f = e.findField(o);
        if (!(n?.[o] && !f)) {
          if (s === false || s === void 0 || ge(s)) {
            r[o] = false;
            continue;
          }
          if (s === true) {
            f?.kind === "object" ? r[o] = Et({}, a) : r[o] = true;
            continue;
          }
          r[o] = Et(s, a);
        }
      }
      return r;
    }
    __name(Da, "Da");
    function ki(t, e) {
      if (t === null) return null;
      if (typeof t == "string" || typeof t == "number" || typeof t == "boolean") return t;
      if (typeof t == "bigint") return { $type: "BigInt", value: String(t) };
      if (Ve(t)) {
        if (Ut(t)) return { $type: "DateTime", value: t.toISOString() };
        e.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: e.getSelectionPath(), argumentPath: e.getArgumentPath(), argument: { name: e.getArgumentName(), typeNames: ["Date"] }, underlyingError: "Provided Date object is invalid" });
      }
      if (Ci(t)) return { $type: "Param", value: t.name };
      if (Ke(t)) return { $type: "FieldRef", value: { _ref: t.name, _container: t.modelName } };
      if (Array.isArray(t)) return _a(t, e);
      if (ArrayBuffer.isView(t)) {
        let { buffer: r, byteOffset: n, byteLength: i } = t;
        return { $type: "Bytes", value: b.from(r, n, i).toString("base64") };
      }
      if (La(t)) return t.values;
      if (je(t)) return { $type: "Decimal", value: t.toFixed() };
      if (t instanceof xe) {
        if (t !== Wt.instances[t._getName()]) throw new Error("Invalid ObjectEnumValue");
        return { $type: "Enum", value: t._getName() };
      }
      if (Fa(t)) return t.toJSON();
      if (typeof t == "object") return Oi(t, e);
      e.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: e.getSelectionPath(), argumentPath: e.getArgumentPath(), argument: { name: e.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(t)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` });
    }
    __name(ki, "ki");
    function Oi(t, e) {
      if (t.$type) return { $type: "Raw", value: t };
      let r = {};
      for (let n in t) {
        let i = t[n], o = e.nestArgument(n);
        ge(i) || (i !== void 0 ? r[n] = ki(i, o) : e.isPreviewFeatureOn("strictUndefinedChecks") && e.throwValidationError({ kind: "InvalidArgumentValue", argumentPath: o.getArgumentPath(), selectionPath: e.getSelectionPath(), argument: { name: e.getArgumentName(), typeNames: [] }, underlyingError: Si }));
      }
      return r;
    }
    __name(Oi, "Oi");
    function _a(t, e) {
      let r = [];
      for (let n = 0; n < t.length; n++) {
        let i = e.nestArgument(String(n)), o = t[n];
        if (o === void 0 || ge(o)) {
          let s = o === void 0 ? "undefined" : "Prisma.skip";
          e.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: i.getSelectionPath(), argumentPath: i.getArgumentPath(), argument: { name: `${e.getArgumentName()}[${n}]`, typeNames: [] }, underlyingError: `Can not use \`${s}\` value within array. Use \`null\` or filter out \`${s}\` values` });
        }
        r.push(ki(o, i));
      }
      return r;
    }
    __name(_a, "_a");
    function La(t) {
      return typeof t == "object" && t !== null && t.__prismaRawParameters__ === true;
    }
    __name(La, "La");
    function Fa(t) {
      return typeof t == "object" && t !== null && typeof t.toJSON == "function";
    }
    __name(Fa, "Fa");
    function Vr(t, e) {
      t === void 0 && e.isPreviewFeatureOn("strictUndefinedChecks") && e.throwValidationError({ kind: "InvalidSelectionValue", selectionPath: e.getSelectionPath(), underlyingError: Si });
    }
    __name(Vr, "Vr");
    var $r = class t {
      static {
        __name(this, "t");
      }
      constructor(e) {
        this.params = e;
        this.params.modelName && (this.modelOrType = this.params.runtimeDataModel.models[this.params.modelName] ?? this.params.runtimeDataModel.types[this.params.modelName]);
      }
      modelOrType;
      throwValidationError(e) {
        zt({ errors: [e], originalMethod: this.params.originalMethod, args: this.params.rootArgs ?? {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion, globalOmit: this.params.globalOmit });
      }
      getSelectionPath() {
        return this.params.selectionPath;
      }
      getArgumentPath() {
        return this.params.argumentPath;
      }
      getArgumentName() {
        return this.params.argumentPath[this.params.argumentPath.length - 1];
      }
      getOutputTypeDescription() {
        if (!(!this.params.modelName || !this.modelOrType)) return { name: this.params.modelName, fields: this.modelOrType.fields.map((e) => ({ name: e.name, typeName: "boolean", isRelation: e.kind === "object" })) };
      }
      isRawAction() {
        return ["executeRaw", "queryRaw", "runCommandRaw", "findRaw", "aggregateRaw"].includes(this.params.action);
      }
      isPreviewFeatureOn(e) {
        return this.params.previewFeatures.includes(e);
      }
      getComputedFields() {
        if (this.params.modelName) return this.params.extensions.getAllComputedFields(this.params.modelName);
      }
      findField(e) {
        return this.modelOrType?.fields.find((r) => r.name === e);
      }
      nestSelection(e) {
        let r = this.findField(e), n = r?.kind === "object" ? r.type : void 0;
        return new t({ ...this.params, modelName: n, selectionPath: this.params.selectionPath.concat(e) });
      }
      getGlobalOmit() {
        return this.params.modelName && this.shouldApplyGlobalOmit() ? this.params.globalOmit?.[ve(this.params.modelName)] ?? {} : {};
      }
      shouldApplyGlobalOmit() {
        switch (this.params.action) {
          case "findFirst":
          case "findFirstOrThrow":
          case "findUniqueOrThrow":
          case "findMany":
          case "upsert":
          case "findUnique":
          case "createManyAndReturn":
          case "create":
          case "update":
          case "updateManyAndReturn":
          case "delete":
            return true;
          case "executeRaw":
          case "aggregateRaw":
          case "runCommandRaw":
          case "findRaw":
          case "createMany":
          case "deleteMany":
          case "groupBy":
          case "updateMany":
          case "count":
          case "aggregate":
          case "queryRaw":
            return false;
          default:
            be(this.params.action, "Unknown action");
        }
      }
      nestArgument(e) {
        return new t({ ...this.params, argumentPath: this.params.argumentPath.concat(e) });
      }
    };
    u();
    c();
    m();
    p();
    d();
    l();
    function Mi(t) {
      if (!t._hasPreviewFlag("metrics")) throw new W("`metrics` preview feature must be enabled in order to access metrics API", { clientVersion: t._clientVersion });
    }
    __name(Mi, "Mi");
    var Ye = class {
      static {
        __name(this, "Ye");
      }
      _client;
      constructor(e) {
        this._client = e;
      }
      prometheus(e) {
        return Mi(this._client), this._client._engine.metrics({ format: "prometheus", ...e });
      }
      json(e) {
        return Mi(this._client), this._client._engine.metrics({ format: "json", ...e });
      }
    };
    u();
    c();
    m();
    p();
    d();
    l();
    function Ii(t, e) {
      let r = ut(() => Na(e));
      Object.defineProperty(t, "dmmf", { get: /* @__PURE__ */ __name(() => r.get(), "get") });
    }
    __name(Ii, "Ii");
    function Na(t) {
      throw new Error("Prisma.dmmf is not available when running in edge runtimes.");
    }
    __name(Na, "Na");
    u();
    c();
    m();
    p();
    d();
    l();
    var Qr = /* @__PURE__ */ new WeakMap();
    var tr = "$$PrismaTypedSql";
    var Pt = class {
      static {
        __name(this, "Pt");
      }
      constructor(e, r) {
        Qr.set(this, { sql: e, values: r }), Object.defineProperty(this, tr, { value: tr });
      }
      get sql() {
        return Qr.get(this).sql;
      }
      get values() {
        return Qr.get(this).values;
      }
    };
    function Di(t) {
      return (...e) => new Pt(t, e);
    }
    __name(Di, "Di");
    function rr(t) {
      return t != null && t[tr] === tr;
    }
    __name(rr, "rr");
    u();
    c();
    m();
    p();
    d();
    l();
    var Jo = nt(_i());
    u();
    c();
    m();
    p();
    d();
    l();
    Li();
    Un();
    jn();
    u();
    c();
    m();
    p();
    d();
    l();
    var Z = class t {
      static {
        __name(this, "t");
      }
      constructor(e, r) {
        if (e.length - 1 !== r.length) throw e.length === 0 ? new TypeError("Expected at least 1 string") : new TypeError(`Expected ${e.length} strings to have ${e.length - 1} values`);
        let n = r.reduce((s, a) => s + (a instanceof t ? a.values.length : 1), 0);
        this.values = new Array(n), this.strings = new Array(n + 1), this.strings[0] = e[0];
        let i = 0, o = 0;
        for (; i < r.length; ) {
          let s = r[i++], a = e[i];
          if (s instanceof t) {
            this.strings[o] += s.strings[0];
            let f = 0;
            for (; f < s.values.length; ) this.values[o++] = s.values[f++], this.strings[o] = s.strings[f];
            this.strings[o] += a;
          } else this.values[o++] = s, this.strings[o] = a;
        }
      }
      get sql() {
        let e = this.strings.length, r = 1, n = this.strings[0];
        for (; r < e; ) n += `?${this.strings[r++]}`;
        return n;
      }
      get statement() {
        let e = this.strings.length, r = 1, n = this.strings[0];
        for (; r < e; ) n += `:${r}${this.strings[r++]}`;
        return n;
      }
      get text() {
        let e = this.strings.length, r = 1, n = this.strings[0];
        for (; r < e; ) n += `$${r}${this.strings[r++]}`;
        return n;
      }
      inspect() {
        return { sql: this.sql, statement: this.statement, text: this.text, values: this.values };
      }
    };
    function Fi(t, e = ",", r = "", n = "") {
      if (t.length === 0) throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
      return new Z([r, ...Array(t.length - 1).fill(e), n], t);
    }
    __name(Fi, "Fi");
    function Jr(t) {
      return new Z([t], []);
    }
    __name(Jr, "Jr");
    var Ni = Jr("");
    function Gr(t, ...e) {
      return new Z(t, e);
    }
    __name(Gr, "Gr");
    u();
    c();
    m();
    p();
    d();
    l();
    u();
    c();
    m();
    p();
    d();
    l();
    function vt(t) {
      return { getKeys() {
        return Object.keys(t);
      }, getPropertyValue(e) {
        return t[e];
      } };
    }
    __name(vt, "vt");
    u();
    c();
    m();
    p();
    d();
    l();
    function K(t, e) {
      return { getKeys() {
        return [t];
      }, getPropertyValue() {
        return e();
      } };
    }
    __name(K, "K");
    u();
    c();
    m();
    p();
    d();
    l();
    function Ie(t) {
      let e = new pe();
      return { getKeys() {
        return t.getKeys();
      }, getPropertyValue(r) {
        return e.getOrCreate(r, () => t.getPropertyValue(r));
      }, getPropertyDescriptor(r) {
        return t.getPropertyDescriptor?.(r);
      } };
    }
    __name(Ie, "Ie");
    u();
    c();
    m();
    p();
    d();
    l();
    u();
    c();
    m();
    p();
    d();
    l();
    var ir = { enumerable: true, configurable: true, writable: true };
    function or(t) {
      let e = new Set(t);
      return { getPrototypeOf: /* @__PURE__ */ __name(() => Object.prototype, "getPrototypeOf"), getOwnPropertyDescriptor: /* @__PURE__ */ __name(() => ir, "getOwnPropertyDescriptor"), has: /* @__PURE__ */ __name((r, n) => e.has(n), "has"), set: /* @__PURE__ */ __name((r, n, i) => e.add(n) && Reflect.set(r, n, i), "set"), ownKeys: /* @__PURE__ */ __name(() => [...e], "ownKeys") };
    }
    __name(or, "or");
    var qi = Symbol.for("nodejs.util.inspect.custom");
    function le(t, e) {
      let r = Ua(e), n = /* @__PURE__ */ new Set(), i = new Proxy(t, { get(o, s) {
        if (n.has(s)) return o[s];
        let a = r.get(s);
        return a ? a.getPropertyValue(s) : o[s];
      }, has(o, s) {
        if (n.has(s)) return true;
        let a = r.get(s);
        return a ? a.has?.(s) ?? true : Reflect.has(o, s);
      }, ownKeys(o) {
        let s = Ui(Reflect.ownKeys(o), r), a = Ui(Array.from(r.keys()), r);
        return [.../* @__PURE__ */ new Set([...s, ...a, ...n])];
      }, set(o, s, a) {
        return r.get(s)?.getPropertyDescriptor?.(s)?.writable === false ? false : (n.add(s), Reflect.set(o, s, a));
      }, getOwnPropertyDescriptor(o, s) {
        let a = Reflect.getOwnPropertyDescriptor(o, s);
        if (a && !a.configurable) return a;
        let f = r.get(s);
        return f ? f.getPropertyDescriptor ? { ...ir, ...f?.getPropertyDescriptor(s) } : ir : a;
      }, defineProperty(o, s, a) {
        return n.add(s), Reflect.defineProperty(o, s, a);
      }, getPrototypeOf: /* @__PURE__ */ __name(() => Object.prototype, "getPrototypeOf") });
      return i[qi] = function() {
        let o = { ...this };
        return delete o[qi], o;
      }, i;
    }
    __name(le, "le");
    function Ua(t) {
      let e = /* @__PURE__ */ new Map();
      for (let r of t) {
        let n = r.getKeys();
        for (let i of n) e.set(i, r);
      }
      return e;
    }
    __name(Ua, "Ua");
    function Ui(t, e) {
      return t.filter((r) => e.get(r)?.has?.(r) ?? true);
    }
    __name(Ui, "Ui");
    u();
    c();
    m();
    p();
    d();
    l();
    function Xe(t) {
      return { getKeys() {
        return t;
      }, has() {
        return false;
      }, getPropertyValue() {
      } };
    }
    __name(Xe, "Xe");
    u();
    c();
    m();
    p();
    d();
    l();
    function sr(t, e) {
      return { batch: t, transaction: e?.kind === "batch" ? { isolationLevel: e.options.isolationLevel } : void 0 };
    }
    __name(sr, "sr");
    u();
    c();
    m();
    p();
    d();
    l();
    function Bi(t) {
      if (t === void 0) return "";
      let e = He(t);
      return new Qe(0, { colors: Qt }).write(e).toString();
    }
    __name(Bi, "Bi");
    u();
    c();
    m();
    p();
    d();
    l();
    var Ba = "P2037";
    function ar({ error: t, user_facing_error: e }, r, n) {
      return e.error_code ? new X($a(e, n), { code: e.error_code, clientVersion: r, meta: e.meta, batchRequestIdx: e.batch_request_idx }) : new j(t, { clientVersion: r, batchRequestIdx: e.batch_request_idx });
    }
    __name(ar, "ar");
    function $a(t, e) {
      let r = t.message;
      return (e === "postgresql" || e === "postgres" || e === "mysql") && t.error_code === Ba && (r += `
Prisma Accelerate has built-in connection pooling to prevent such errors: https://pris.ly/client/error-accelerate`), r;
    }
    __name($a, "$a");
    u();
    c();
    m();
    p();
    d();
    l();
    u();
    c();
    m();
    p();
    d();
    l();
    u();
    c();
    m();
    p();
    d();
    l();
    u();
    c();
    m();
    p();
    d();
    l();
    u();
    c();
    m();
    p();
    d();
    l();
    var Wr = class {
      static {
        __name(this, "Wr");
      }
      getLocation() {
        return null;
      }
    };
    function Ce(t) {
      return typeof $EnabledCallSite == "function" && t !== "minimal" ? new $EnabledCallSite() : new Wr();
    }
    __name(Ce, "Ce");
    u();
    c();
    m();
    p();
    d();
    l();
    u();
    c();
    m();
    p();
    d();
    l();
    u();
    c();
    m();
    p();
    d();
    l();
    var $i = { _avg: true, _count: true, _sum: true, _min: true, _max: true };
    function Ze(t = {}) {
      let e = ja(t);
      return Object.entries(e).reduce((n, [i, o]) => ($i[i] !== void 0 ? n.select[i] = { select: o } : n[i] = o, n), { select: {} });
    }
    __name(Ze, "Ze");
    function ja(t = {}) {
      return typeof t._count == "boolean" ? { ...t, _count: { _all: t._count } } : t;
    }
    __name(ja, "ja");
    function lr(t = {}) {
      return (e) => (typeof t._count == "boolean" && (e._count = e._count._all), e);
    }
    __name(lr, "lr");
    function Vi(t, e) {
      let r = lr(t);
      return e({ action: "aggregate", unpacker: r, argsMapper: Ze })(t);
    }
    __name(Vi, "Vi");
    u();
    c();
    m();
    p();
    d();
    l();
    function Qa(t = {}) {
      let { select: e, ...r } = t;
      return typeof e == "object" ? Ze({ ...r, _count: e }) : Ze({ ...r, _count: { _all: true } });
    }
    __name(Qa, "Qa");
    function Ja(t = {}) {
      return typeof t.select == "object" ? (e) => lr(t)(e)._count : (e) => lr(t)(e)._count._all;
    }
    __name(Ja, "Ja");
    function ji(t, e) {
      return e({ action: "count", unpacker: Ja(t), argsMapper: Qa })(t);
    }
    __name(ji, "ji");
    u();
    c();
    m();
    p();
    d();
    l();
    function Ga(t = {}) {
      let e = Ze(t);
      if (Array.isArray(e.by)) for (let r of e.by) typeof r == "string" && (e.select[r] = true);
      else typeof e.by == "string" && (e.select[e.by] = true);
      return e;
    }
    __name(Ga, "Ga");
    function Wa(t = {}) {
      return (e) => (typeof t?._count == "boolean" && e.forEach((r) => {
        r._count = r._count._all;
      }), e);
    }
    __name(Wa, "Wa");
    function Qi(t, e) {
      return e({ action: "groupBy", unpacker: Wa(t), argsMapper: Ga })(t);
    }
    __name(Qi, "Qi");
    function Ji(t, e, r) {
      if (e === "aggregate") return (n) => Vi(n, r);
      if (e === "count") return (n) => ji(n, r);
      if (e === "groupBy") return (n) => Qi(n, r);
    }
    __name(Ji, "Ji");
    u();
    c();
    m();
    p();
    d();
    l();
    function Gi(t, e) {
      let r = e.fields.filter((i) => !i.relationName), n = ri(r, "name");
      return new Proxy({}, { get(i, o) {
        if (o in i || typeof o == "symbol") return i[o];
        let s = n[o];
        if (s) return new gt(t, o, s.type, s.isList, s.kind === "enum");
      }, ...or(Object.keys(n)) });
    }
    __name(Gi, "Gi");
    u();
    c();
    m();
    p();
    d();
    l();
    u();
    c();
    m();
    p();
    d();
    l();
    var Wi = /* @__PURE__ */ __name((t) => Array.isArray(t) ? t : t.split("."), "Wi");
    var Kr = /* @__PURE__ */ __name((t, e) => Wi(e).reduce((r, n) => r && r[n], t), "Kr");
    var Ki = /* @__PURE__ */ __name((t, e, r) => Wi(e).reduceRight((n, i, o, s) => Object.assign({}, Kr(t, s.slice(0, o)), { [i]: n }), r), "Ki");
    function Ka(t, e) {
      return t === void 0 || e === void 0 ? [] : [...e, "select", t];
    }
    __name(Ka, "Ka");
    function Ha(t, e, r) {
      return e === void 0 ? t ?? {} : Ki(e, r, t || true);
    }
    __name(Ha, "Ha");
    function Hr(t, e, r, n, i, o) {
      let a = t._runtimeDataModel.models[e].fields.reduce((f, h) => ({ ...f, [h.name]: h }), {});
      return (f) => {
        let h = Ce(t._errorFormat), T = Ka(n, i), C = Ha(f, o, T), k = r({ dataPath: T, callsite: h })(C), A = za(t, e);
        return new Proxy(k, { get(O, S) {
          if (!A.includes(S)) return O[S];
          let oe = [a[S].type, r, S], H = [T, C];
          return Hr(t, ...oe, ...H);
        }, ...or([...A, ...Object.getOwnPropertyNames(k)]) });
      };
    }
    __name(Hr, "Hr");
    function za(t, e) {
      return t._runtimeDataModel.models[e].fields.filter((r) => r.kind === "object").map((r) => r.name);
    }
    __name(za, "za");
    var Ya = ["findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow", "create", "update", "upsert", "delete"];
    var Xa = ["aggregate", "count", "groupBy"];
    function zr(t, e) {
      let r = t._extensions.getAllModelExtensions(e) ?? {}, n = [Za(t, e), tl(t, e), vt(r), K("name", () => e), K("$name", () => e), K("$parent", () => t._appliedParent)];
      return le({}, n);
    }
    __name(zr, "zr");
    function Za(t, e) {
      let r = fe(e), n = Object.keys(ct).concat("count");
      return { getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = i, s = /* @__PURE__ */ __name((a) => (f) => {
          let h = Ce(t._errorFormat);
          return t._createPrismaPromise((T) => {
            let C = { args: f, dataPath: [], action: o, model: e, clientMethod: `${r}.${i}`, jsModelName: r, transaction: T, callsite: h };
            return t._request({ ...C, ...a });
          }, { action: o, args: f, model: e });
        }, "s");
        return Ya.includes(o) ? Hr(t, e, s) : el(i) ? Ji(t, i, s) : s({});
      } };
    }
    __name(Za, "Za");
    function el(t) {
      return Xa.includes(t);
    }
    __name(el, "el");
    function tl(t, e) {
      return Ie(K("fields", () => {
        let r = t._runtimeDataModel.models[e];
        return Gi(e, r);
      }));
    }
    __name(tl, "tl");
    u();
    c();
    m();
    p();
    d();
    l();
    function Hi(t) {
      return t.replace(/^./, (e) => e.toUpperCase());
    }
    __name(Hi, "Hi");
    var Yr = Symbol();
    function Tt(t) {
      let e = [rl(t), nl(t), K(Yr, () => t), K("$parent", () => t._appliedParent)], r = t._extensions.getAllClientExtensions();
      return r && e.push(vt(r)), le(t, e);
    }
    __name(Tt, "Tt");
    function rl(t) {
      let e = Object.getPrototypeOf(t._originalClient), r = [...new Set(Object.getOwnPropertyNames(e))];
      return { getKeys() {
        return r;
      }, getPropertyValue(n) {
        return t[n];
      } };
    }
    __name(rl, "rl");
    function nl(t) {
      let e = Object.keys(t._runtimeDataModel.models), r = e.map(fe), n = [...new Set(e.concat(r))];
      return Ie({ getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = Hi(i);
        if (t._runtimeDataModel.models[o] !== void 0) return zr(t, o);
        if (t._runtimeDataModel.models[i] !== void 0) return zr(t, i);
      }, getPropertyDescriptor(i) {
        if (!r.includes(i)) return { enumerable: false };
      } });
    }
    __name(nl, "nl");
    function zi(t) {
      return t[Yr] ? t[Yr] : t;
    }
    __name(zi, "zi");
    function Yi(t) {
      if (typeof t == "function") return t(this);
      if (t.client?.__AccelerateEngine) {
        let r = t.client.__AccelerateEngine;
        this._originalClient._engine = new r(this._originalClient._accelerateEngineConfig);
      }
      let e = Object.create(this._originalClient, { _extensions: { value: this._extensions.append(t) }, _appliedParent: { value: this, configurable: true }, $use: { value: void 0 }, $on: { value: void 0 } });
      return Tt(e);
    }
    __name(Yi, "Yi");
    u();
    c();
    m();
    p();
    d();
    l();
    u();
    c();
    m();
    p();
    d();
    l();
    function Xi({ result: t, modelName: e, select: r, omit: n, extensions: i }) {
      let o = i.getAllComputedFields(e);
      if (!o) return t;
      let s = [], a = [];
      for (let f of Object.values(o)) {
        if (n) {
          if (n[f.name]) continue;
          let h = f.needs.filter((T) => n[T]);
          h.length > 0 && a.push(Xe(h));
        } else if (r) {
          if (!r[f.name]) continue;
          let h = f.needs.filter((T) => !r[T]);
          h.length > 0 && a.push(Xe(h));
        }
        il(t, f.needs) && s.push(ol(f, le(t, s)));
      }
      return s.length > 0 || a.length > 0 ? le(t, [...s, ...a]) : t;
    }
    __name(Xi, "Xi");
    function il(t, e) {
      return e.every((r) => Dr(t, r));
    }
    __name(il, "il");
    function ol(t, e) {
      return Ie(K(t.name, () => t.compute(e)));
    }
    __name(ol, "ol");
    u();
    c();
    m();
    p();
    d();
    l();
    function ur({ visitor: t, result: e, args: r, runtimeDataModel: n, modelName: i }) {
      if (Array.isArray(e)) {
        for (let s = 0; s < e.length; s++) e[s] = ur({ result: e[s], args: r, modelName: i, runtimeDataModel: n, visitor: t });
        return e;
      }
      let o = t(e, i, r) ?? e;
      return r.include && Zi({ includeOrSelect: r.include, result: o, parentModelName: i, runtimeDataModel: n, visitor: t }), r.select && Zi({ includeOrSelect: r.select, result: o, parentModelName: i, runtimeDataModel: n, visitor: t }), o;
    }
    __name(ur, "ur");
    function Zi({ includeOrSelect: t, result: e, parentModelName: r, runtimeDataModel: n, visitor: i }) {
      for (let [o, s] of Object.entries(t)) {
        if (!s || e[o] == null || ge(s)) continue;
        let f = n.models[r].fields.find((T) => T.name === o);
        if (!f || f.kind !== "object" || !f.relationName) continue;
        let h = typeof s == "object" ? s : {};
        e[o] = ur({ visitor: i, result: e[o], args: h, modelName: f.type, runtimeDataModel: n });
      }
    }
    __name(Zi, "Zi");
    function eo({ result: t, modelName: e, args: r, extensions: n, runtimeDataModel: i, globalOmit: o }) {
      return n.isEmpty() || t == null || typeof t != "object" || !i.models[e] ? t : ur({ result: t, args: r ?? {}, modelName: e, runtimeDataModel: i, visitor: /* @__PURE__ */ __name((a, f, h) => {
        let T = fe(f);
        return Xi({ result: a, modelName: T, select: h.select, omit: h.select ? void 0 : { ...o?.[T], ...h.omit }, extensions: n });
      }, "visitor") });
    }
    __name(eo, "eo");
    u();
    c();
    m();
    p();
    d();
    l();
    u();
    c();
    m();
    p();
    d();
    l();
    l();
    u();
    c();
    m();
    p();
    d();
    l();
    var sl = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"];
    var to = sl;
    function ro(t) {
      if (t instanceof Z) return al(t);
      if (rr(t)) return ll(t);
      if (Array.isArray(t)) {
        let r = [t[0]];
        for (let n = 1; n < t.length; n++) r[n] = Ct(t[n]);
        return r;
      }
      let e = {};
      for (let r in t) e[r] = Ct(t[r]);
      return e;
    }
    __name(ro, "ro");
    function al(t) {
      return new Z(t.strings, t.values);
    }
    __name(al, "al");
    function ll(t) {
      return new Pt(t.sql, t.values);
    }
    __name(ll, "ll");
    function Ct(t) {
      if (typeof t != "object" || t == null || t instanceof xe || Ke(t)) return t;
      if (je(t)) return new ae(t.toFixed());
      if (Ve(t)) return /* @__PURE__ */ new Date(+t);
      if (ArrayBuffer.isView(t)) return t.slice(0);
      if (Array.isArray(t)) {
        let e = t.length, r;
        for (r = Array(e); e--; ) r[e] = Ct(t[e]);
        return r;
      }
      if (typeof t == "object") {
        let e = {};
        for (let r in t) r === "__proto__" ? Object.defineProperty(e, r, { value: Ct(t[r]), configurable: true, enumerable: true, writable: true }) : e[r] = Ct(t[r]);
        return e;
      }
      be(t, "Unknown value");
    }
    __name(Ct, "Ct");
    function io(t, e, r, n = 0) {
      return t._createPrismaPromise((i) => {
        let o = e.customDataProxyFetch;
        return "transaction" in e && i !== void 0 && (e.transaction?.kind === "batch" && e.transaction.lock.then(), e.transaction = i), n === r.length ? t._executeRequest(e) : r[n]({ model: e.model, operation: e.model ? e.action : e.clientMethod, args: ro(e.args ?? {}), __internalParams: e, query: /* @__PURE__ */ __name((s, a = e) => {
          let f = a.customDataProxyFetch;
          return a.customDataProxyFetch = lo(o, f), a.args = s, io(t, a, r, n + 1);
        }, "query") });
      });
    }
    __name(io, "io");
    function oo(t, e) {
      let { jsModelName: r, action: n, clientMethod: i } = e, o = r ? n : i;
      if (t._extensions.isEmpty()) return t._executeRequest(e);
      let s = t._extensions.getAllQueryCallbacks(r ?? "$none", o);
      return io(t, e, s);
    }
    __name(oo, "oo");
    function so(t) {
      return (e) => {
        let r = { requests: e }, n = e[0].extensions.getAllBatchQueryCallbacks();
        return n.length ? ao(r, n, 0, t) : t(r);
      };
    }
    __name(so, "so");
    function ao(t, e, r, n) {
      if (r === e.length) return n(t);
      let i = t.customDataProxyFetch, o = t.requests[0].transaction;
      return e[r]({ args: { queries: t.requests.map((s) => ({ model: s.modelName, operation: s.action, args: s.args })), transaction: o ? { isolationLevel: o.kind === "batch" ? o.isolationLevel : void 0 } : void 0 }, __internalParams: t, query(s, a = t) {
        let f = a.customDataProxyFetch;
        return a.customDataProxyFetch = lo(i, f), ao(a, e, r + 1, n);
      } });
    }
    __name(ao, "ao");
    var no = /* @__PURE__ */ __name((t) => t, "no");
    function lo(t = no, e = no) {
      return (r) => t(e(r));
    }
    __name(lo, "lo");
    u();
    c();
    m();
    p();
    d();
    l();
    var uo = J("prisma:client");
    var co = { Vercel: "vercel", "Netlify CI": "netlify" };
    function mo({ postinstall: t, ciName: e, clientVersion: r }) {
      if (uo("checkPlatformCaching:postinstall", t), uo("checkPlatformCaching:ciName", e), t === true && e && e in co) {
        let n = `Prisma has detected that this project was built on ${e}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${co[e]}-build`;
        throw console.error(n), new I(n, r);
      }
    }
    __name(mo, "mo");
    u();
    c();
    m();
    p();
    d();
    l();
    function po(t, e) {
      return t ? t.datasources ? t.datasources : t.datasourceUrl ? { [e[0]]: { url: t.datasourceUrl } } : {} : {};
    }
    __name(po, "po");
    u();
    c();
    m();
    p();
    d();
    l();
    u();
    c();
    m();
    p();
    d();
    l();
    var ul = /* @__PURE__ */ __name(() => globalThis.process?.release?.name === "node", "ul");
    var cl = /* @__PURE__ */ __name(() => !!globalThis.Bun || !!globalThis.process?.versions?.bun, "cl");
    var ml = /* @__PURE__ */ __name(() => !!globalThis.Deno, "ml");
    var pl = /* @__PURE__ */ __name(() => typeof globalThis.Netlify == "object", "pl");
    var dl = /* @__PURE__ */ __name(() => typeof globalThis.EdgeRuntime == "object", "dl");
    var fl = /* @__PURE__ */ __name(() => globalThis.navigator?.userAgent === "Cloudflare-Workers", "fl");
    function gl() {
      return [[pl, "netlify"], [dl, "edge-light"], [fl, "workerd"], [ml, "deno"], [cl, "bun"], [ul, "node"]].flatMap((r) => r[0]() ? [r[1]] : []).at(0) ?? "";
    }
    __name(gl, "gl");
    var yl = { node: "Node.js", workerd: "Cloudflare Workers", deno: "Deno and Deno Deploy", netlify: "Netlify Edge Functions", "edge-light": "Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)" };
    function Re() {
      let t = gl();
      return { id: t, prettyName: yl[t] || t, isEdge: ["workerd", "deno", "netlify", "edge-light"].includes(t) };
    }
    __name(Re, "Re");
    u();
    c();
    m();
    p();
    d();
    l();
    u();
    c();
    m();
    p();
    d();
    l();
    u();
    c();
    m();
    p();
    d();
    l();
    u();
    c();
    m();
    p();
    d();
    l();
    u();
    c();
    m();
    p();
    d();
    l();
    function Xr(t) {
      return t.name === "DriverAdapterError" && typeof t.cause == "object";
    }
    __name(Xr, "Xr");
    u();
    c();
    m();
    p();
    d();
    l();
    function cr(t) {
      return { ok: true, value: t, map(e) {
        return cr(e(t));
      }, flatMap(e) {
        return e(t);
      } };
    }
    __name(cr, "cr");
    function De(t) {
      return { ok: false, error: t, map() {
        return De(t);
      }, flatMap() {
        return De(t);
      } };
    }
    __name(De, "De");
    var fo = J("driver-adapter-utils");
    var Zr = class {
      static {
        __name(this, "Zr");
      }
      registeredErrors = [];
      consumeError(e) {
        return this.registeredErrors[e];
      }
      registerNewError(e) {
        let r = 0;
        for (; this.registeredErrors[r] !== void 0; ) r++;
        return this.registeredErrors[r] = { error: e }, r;
      }
    };
    var en = /* @__PURE__ */ __name((t, e = new Zr()) => {
      let r = { adapterName: t.adapterName, errorRegistry: e, queryRaw: Ee(e, t.queryRaw.bind(t)), executeRaw: Ee(e, t.executeRaw.bind(t)), executeScript: Ee(e, t.executeScript.bind(t)), dispose: Ee(e, t.dispose.bind(t)), provider: t.provider, startTransaction: /* @__PURE__ */ __name(async (...n) => (await Ee(e, t.startTransaction.bind(t))(...n)).map((o) => hl(e, o)), "startTransaction") };
      return t.getConnectionInfo && (r.getConnectionInfo = bl(e, t.getConnectionInfo.bind(t))), r;
    }, "en");
    var hl = /* @__PURE__ */ __name((t, e) => ({ adapterName: e.adapterName, provider: e.provider, options: e.options, queryRaw: Ee(t, e.queryRaw.bind(e)), executeRaw: Ee(t, e.executeRaw.bind(e)), commit: Ee(t, e.commit.bind(e)), rollback: Ee(t, e.rollback.bind(e)) }), "hl");
    function Ee(t, e) {
      return async (...r) => {
        try {
          return cr(await e(...r));
        } catch (n) {
          if (fo("[error@wrapAsync]", n), Xr(n)) return De(n.cause);
          let i = t.registerNewError(n);
          return De({ kind: "GenericJs", id: i });
        }
      };
    }
    __name(Ee, "Ee");
    function bl(t, e) {
      return (...r) => {
        try {
          return cr(e(...r));
        } catch (n) {
          if (fo("[error@wrapSync]", n), Xr(n)) return De(n.cause);
          let i = t.registerNewError(n);
          return De({ kind: "GenericJs", id: i });
        }
      };
    }
    __name(bl, "bl");
    var go = "6.8.2";
    u();
    c();
    m();
    p();
    d();
    l();
    function mr({ inlineDatasources: t, overrideDatasources: e, env: r, clientVersion: n }) {
      let i, o = Object.keys(t)[0], s = t[o]?.url, a = e[o]?.url;
      if (o === void 0 ? i = void 0 : a ? i = a : s?.value ? i = s.value : s?.fromEnvVar && (i = r[s.fromEnvVar]), s?.fromEnvVar !== void 0 && i === void 0) throw Re().id === "workerd" ? new I(`error: Environment variable not found: ${s.fromEnvVar}.

In Cloudflare module Workers, environment variables are available only in the Worker's \`env\` parameter of \`fetch\`.
To solve this, provide the connection string directly: https://pris.ly/d/cloudflare-datasource-url`, n) : new I(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
      if (i === void 0) throw new I("error: Missing URL environment variable, value, or override.", n);
      return i;
    }
    __name(mr, "mr");
    u();
    c();
    m();
    p();
    d();
    l();
    u();
    c();
    m();
    p();
    d();
    l();
    function yo(t) {
      if (t?.kind === "itx") return t.options.id;
    }
    __name(yo, "yo");
    u();
    c();
    m();
    p();
    d();
    l();
    var tn;
    var ho = { async loadLibrary(t) {
      let { clientVersion: e, adapter: r, engineWasm: n } = t;
      if (r === void 0) throw new I(`The \`adapter\` option for \`PrismaClient\` is required in this context (${Re().prettyName})`, e);
      if (n === void 0) throw new I("WASM engine was unexpectedly `undefined`", e);
      tn === void 0 && (tn = (async () => {
        let o = await n.getRuntime(), s = await n.getQueryEngineWasmModule();
        if (s == null) throw new I("The loaded wasm module was unexpectedly `undefined` or `null` once loaded", e);
        let a = { "./query_engine_bg.js": o }, f = new WebAssembly.Instance(s, a), h = f.exports.__wbindgen_start;
        return o.__wbg_set_wasm(f.exports), h(), o.QueryEngine;
      })());
      let i = await tn;
      return { debugPanic() {
        return Promise.reject("{}");
      }, dmmf() {
        return Promise.resolve("{}");
      }, version() {
        return { commit: "unknown", version: "unknown" };
      }, QueryEngine: i };
    } };
    var xl = "P2036";
    var ye = J("prisma:client:libraryEngine");
    function El(t) {
      return t.item_type === "query" && "query" in t;
    }
    __name(El, "El");
    function Pl(t) {
      return "level" in t ? t.level === "error" && t.message === "PANIC" : false;
    }
    __name(Pl, "Pl");
    var OS = [...kr, "native"];
    var vl = 0xffffffffffffffffn;
    var rn = 1n;
    function Tl() {
      let t = rn++;
      return rn > vl && (rn = 1n), t;
    }
    __name(Tl, "Tl");
    var Rt = class {
      static {
        __name(this, "Rt");
      }
      name = "LibraryEngine";
      engine;
      libraryInstantiationPromise;
      libraryStartingPromise;
      libraryStoppingPromise;
      libraryStarted;
      executingQueryPromise;
      config;
      QueryEngineConstructor;
      libraryLoader;
      library;
      logEmitter;
      libQueryEnginePath;
      binaryTarget;
      datasourceOverrides;
      datamodel;
      logQueries;
      logLevel;
      lastQuery;
      loggerRustPanic;
      tracingHelper;
      adapterPromise;
      versionInfo;
      constructor(e, r) {
        this.libraryLoader = r ?? ho, this.config = e, this.libraryStarted = false, this.logQueries = e.logQueries ?? false, this.logLevel = e.logLevel ?? "error", this.logEmitter = e.logEmitter, this.datamodel = e.inlineSchema, this.tracingHelper = e.tracingHelper, e.enableDebugLogs && (this.logLevel = "debug");
        let n = Object.keys(e.overrideDatasources)[0], i = e.overrideDatasources[n]?.url;
        n !== void 0 && i !== void 0 && (this.datasourceOverrides = { [n]: i }), this.libraryInstantiationPromise = this.instantiateLibrary();
      }
      wrapEngine(e) {
        return { applyPendingMigrations: e.applyPendingMigrations?.bind(e), commitTransaction: this.withRequestId(e.commitTransaction.bind(e)), connect: this.withRequestId(e.connect.bind(e)), disconnect: this.withRequestId(e.disconnect.bind(e)), metrics: e.metrics?.bind(e), query: this.withRequestId(e.query.bind(e)), rollbackTransaction: this.withRequestId(e.rollbackTransaction.bind(e)), sdlSchema: e.sdlSchema?.bind(e), startTransaction: this.withRequestId(e.startTransaction.bind(e)), trace: e.trace.bind(e) };
      }
      withRequestId(e) {
        return async (...r) => {
          let n = Tl().toString();
          try {
            return await e(...r, n);
          } finally {
            if (this.tracingHelper.isEnabled()) {
              let i = await this.engine?.trace(n);
              if (i) {
                let o = JSON.parse(i);
                this.tracingHelper.dispatchEngineSpans(o.spans);
              }
            }
          }
        };
      }
      async applyPendingMigrations() {
        throw new Error("Cannot call this method from this type of engine instance");
      }
      async transaction(e, r, n) {
        await this.start();
        let i = await this.adapterPromise, o = JSON.stringify(r), s;
        if (e === "start") {
          let f = JSON.stringify({ max_wait: n.maxWait, timeout: n.timeout, isolation_level: n.isolationLevel });
          s = await this.engine?.startTransaction(f, o);
        } else e === "commit" ? s = await this.engine?.commitTransaction(n.id, o) : e === "rollback" && (s = await this.engine?.rollbackTransaction(n.id, o));
        let a = this.parseEngineResponse(s);
        if (Cl(a)) {
          let f = this.getExternalAdapterError(a, i?.errorRegistry);
          throw f ? f.error : new X(a.message, { code: a.error_code, clientVersion: this.config.clientVersion, meta: a.meta });
        } else if (typeof a.message == "string") throw new j(a.message, { clientVersion: this.config.clientVersion });
        return a;
      }
      async instantiateLibrary() {
        if (ye("internalSetup"), this.libraryInstantiationPromise) return this.libraryInstantiationPromise;
        this.binaryTarget = await this.getCurrentBinaryTarget(), await this.tracingHelper.runInChildSpan("load_engine", () => this.loadEngine()), this.version();
      }
      async getCurrentBinaryTarget() {
      }
      parseEngineResponse(e) {
        if (!e) throw new j("Response from the Engine was empty", { clientVersion: this.config.clientVersion });
        try {
          return JSON.parse(e);
        } catch {
          throw new j("Unable to JSON.parse response from engine", { clientVersion: this.config.clientVersion });
        }
      }
      async loadEngine() {
        if (!this.engine) {
          this.QueryEngineConstructor || (this.library = await this.libraryLoader.loadLibrary(this.config), this.QueryEngineConstructor = this.library.QueryEngine);
          try {
            let e = new w(this);
            this.adapterPromise || (this.adapterPromise = this.config.adapter?.connect()?.then(en));
            let r = await this.adapterPromise;
            r && ye("Using driver adapter: %O", r), this.engine = this.wrapEngine(new this.QueryEngineConstructor({ datamodel: this.datamodel, env: g.env, logQueries: this.config.logQueries ?? false, ignoreEnvVarErrors: true, datasourceOverrides: this.datasourceOverrides ?? {}, logLevel: this.logLevel, configDir: this.config.cwd, engineProtocol: "json", enableTracing: this.tracingHelper.isEnabled() }, (n) => {
              e.deref()?.logger(n);
            }, r));
          } catch (e) {
            let r = e, n = this.parseInitError(r.message);
            throw typeof n == "string" ? r : new I(n.message, this.config.clientVersion, n.error_code);
          }
        }
      }
      logger(e) {
        let r = this.parseEngineResponse(e);
        r && (r.level = r?.level.toLowerCase() ?? "unknown", El(r) ? this.logEmitter.emit("query", { timestamp: /* @__PURE__ */ new Date(), query: r.query, params: r.params, duration: Number(r.duration_ms), target: r.module_path }) : (Pl(r), this.logEmitter.emit(r.level, { timestamp: /* @__PURE__ */ new Date(), message: r.message, target: r.module_path })));
      }
      parseInitError(e) {
        try {
          return JSON.parse(e);
        } catch {
        }
        return e;
      }
      parseRequestError(e) {
        try {
          return JSON.parse(e);
        } catch {
        }
        return e;
      }
      onBeforeExit() {
        throw new Error('"beforeExit" hook is not applicable to the library engine since Prisma 5.0.0, it is only relevant and implemented for the binary engine. Please add your event listener to the `process` object directly instead.');
      }
      async start() {
        if (await this.libraryInstantiationPromise, await this.libraryStoppingPromise, this.libraryStartingPromise) return ye(`library already starting, this.libraryStarted: ${this.libraryStarted}`), this.libraryStartingPromise;
        if (this.libraryStarted) return;
        let e = /* @__PURE__ */ __name(async () => {
          ye("library starting");
          try {
            let r = { traceparent: this.tracingHelper.getTraceParent() };
            await this.engine?.connect(JSON.stringify(r)), this.libraryStarted = true, ye("library started");
          } catch (r) {
            let n = this.parseInitError(r.message);
            throw typeof n == "string" ? r : new I(n.message, this.config.clientVersion, n.error_code);
          } finally {
            this.libraryStartingPromise = void 0;
          }
        }, "e");
        return this.libraryStartingPromise = this.tracingHelper.runInChildSpan("connect", e), this.libraryStartingPromise;
      }
      async stop() {
        if (await this.libraryInstantiationPromise, await this.libraryStartingPromise, await this.executingQueryPromise, this.libraryStoppingPromise) return ye("library is already stopping"), this.libraryStoppingPromise;
        if (!this.libraryStarted) return;
        let e = /* @__PURE__ */ __name(async () => {
          await new Promise((n) => setTimeout(n, 5)), ye("library stopping");
          let r = { traceparent: this.tracingHelper.getTraceParent() };
          await this.engine?.disconnect(JSON.stringify(r)), this.libraryStarted = false, this.libraryStoppingPromise = void 0, await (await this.adapterPromise)?.dispose(), this.adapterPromise = void 0, ye("library stopped");
        }, "e");
        return this.libraryStoppingPromise = this.tracingHelper.runInChildSpan("disconnect", e), this.libraryStoppingPromise;
      }
      version() {
        return this.versionInfo = this.library?.version(), this.versionInfo?.version ?? "unknown";
      }
      debugPanic(e) {
        return this.library?.debugPanic(e);
      }
      async request(e, { traceparent: r, interactiveTransaction: n }) {
        ye(`sending request, this.libraryStarted: ${this.libraryStarted}`);
        let i = JSON.stringify({ traceparent: r }), o = JSON.stringify(e);
        try {
          await this.start();
          let s = await this.adapterPromise;
          this.executingQueryPromise = this.engine?.query(o, i, n?.id), this.lastQuery = o;
          let a = this.parseEngineResponse(await this.executingQueryPromise);
          if (a.errors) throw a.errors.length === 1 ? this.buildQueryError(a.errors[0], s?.errorRegistry) : new j(JSON.stringify(a.errors), { clientVersion: this.config.clientVersion });
          if (this.loggerRustPanic) throw this.loggerRustPanic;
          return { data: a };
        } catch (s) {
          if (s instanceof I) throw s;
          s.code === "GenericFailure" && s.message?.startsWith("PANIC:");
          let a = this.parseRequestError(s.message);
          throw typeof a == "string" ? s : new j(`${a.message}
${a.backtrace}`, { clientVersion: this.config.clientVersion });
        }
      }
      async requestBatch(e, { transaction: r, traceparent: n }) {
        ye("requestBatch");
        let i = sr(e, r);
        await this.start();
        let o = await this.adapterPromise;
        this.lastQuery = JSON.stringify(i), this.executingQueryPromise = this.engine.query(this.lastQuery, JSON.stringify({ traceparent: n }), yo(r));
        let s = await this.executingQueryPromise, a = this.parseEngineResponse(s);
        if (a.errors) throw a.errors.length === 1 ? this.buildQueryError(a.errors[0], o?.errorRegistry) : new j(JSON.stringify(a.errors), { clientVersion: this.config.clientVersion });
        let { batchResult: f, errors: h } = a;
        if (Array.isArray(f)) return f.map((T) => T.errors && T.errors.length > 0 ? this.loggerRustPanic ?? this.buildQueryError(T.errors[0], o?.errorRegistry) : { data: T });
        throw h && h.length === 1 ? new Error(h[0].error) : new Error(JSON.stringify(a));
      }
      buildQueryError(e, r) {
        e.user_facing_error.is_panic;
        let n = this.getExternalAdapterError(e.user_facing_error, r);
        return n ? n.error : ar(e, this.config.clientVersion, this.config.activeProvider);
      }
      getExternalAdapterError(e, r) {
        if (e.error_code === xl && r) {
          let n = e.meta?.id;
          qt(typeof n == "number", "Malformed external JS error received from the engine");
          let i = r.consumeError(n);
          return qt(i, "External error with reported id was not registered"), i;
        }
      }
      async metrics(e) {
        await this.start();
        let r = await this.engine.metrics(JSON.stringify(e));
        return e.format === "prometheus" ? r : this.parseEngineResponse(r);
      }
    };
    function Cl(t) {
      return typeof t == "object" && t !== null && t.error_code !== void 0;
    }
    __name(Cl, "Cl");
    u();
    c();
    m();
    p();
    d();
    l();
    var At = "Accelerate has not been setup correctly. Make sure your client is using `.$extends(withAccelerate())`. See https://pris.ly/d/accelerate-getting-started";
    var pr = class {
      static {
        __name(this, "pr");
      }
      constructor(e) {
        this.config = e;
        this.resolveDatasourceUrl = this.config.accelerateUtils?.resolveDatasourceUrl, this.getBatchRequestPayload = this.config.accelerateUtils?.getBatchRequestPayload, this.prismaGraphQLToJSError = this.config.accelerateUtils?.prismaGraphQLToJSError, this.PrismaClientUnknownRequestError = this.config.accelerateUtils?.PrismaClientUnknownRequestError, this.PrismaClientInitializationError = this.config.accelerateUtils?.PrismaClientInitializationError, this.PrismaClientKnownRequestError = this.config.accelerateUtils?.PrismaClientKnownRequestError, this.debug = this.config.accelerateUtils?.debug, this.engineVersion = this.config.accelerateUtils?.engineVersion, this.clientVersion = this.config.accelerateUtils?.clientVersion;
      }
      name = "AccelerateEngine";
      resolveDatasourceUrl;
      getBatchRequestPayload;
      prismaGraphQLToJSError;
      PrismaClientUnknownRequestError;
      PrismaClientInitializationError;
      PrismaClientKnownRequestError;
      debug;
      engineVersion;
      clientVersion;
      onBeforeExit(e) {
      }
      async start() {
      }
      async stop() {
      }
      version(e) {
        return "unknown";
      }
      transaction(e, r, n) {
        throw new I(At, this.config.clientVersion);
      }
      metrics(e) {
        throw new I(At, this.config.clientVersion);
      }
      request(e, r) {
        throw new I(At, this.config.clientVersion);
      }
      requestBatch(e, r) {
        throw new I(At, this.config.clientVersion);
      }
      applyPendingMigrations() {
        throw new I(At, this.config.clientVersion);
      }
    };
    function bo({ copyEngine: t = true }, e) {
      let r;
      try {
        r = mr({ inlineDatasources: e.inlineDatasources, overrideDatasources: e.overrideDatasources, env: { ...e.env, ...g.env }, clientVersion: e.clientVersion });
      } catch {
      }
      let n = !!(r?.startsWith("prisma://") || Mr(r));
      t && n && lt("recommend--no-engine", "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)");
      let i = Ue(e.generator), o = n || !t, s = !!e.adapter, a = i === "library", f = i === "binary", h = i === "client";
      if (o && s || s && false) {
        let T;
        throw t ? r?.startsWith("prisma://") ? T = ["Prisma Client was configured to use the `adapter` option but the URL was a `prisma://` URL.", "Please either use the `prisma://` URL or remove the `adapter` from the Prisma Client constructor."] : T = ["Prisma Client was configured to use both the `adapter` and Accelerate, please chose one."] : T = ["Prisma Client was configured to use the `adapter` option but `prisma generate` was run with `--no-engine`.", "Please run `prisma generate` without `--no-engine` to be able to use Prisma Client with the adapter."], new W(T.join(`
`), { clientVersion: e.clientVersion });
      }
      if (s) return new Rt(e);
      if (o) return new pr(e);
      {
        let T = [`PrismaClient failed to initialize because it wasn't configured to run in this environment (${Re().prettyName}).`, "In order to run Prisma Client in an edge runtime, you will need to configure one of the following options:", "- Enable Driver Adapters: https://pris.ly/d/driver-adapters", "- Enable Accelerate: https://pris.ly/d/accelerate"];
        throw new W(T.join(`
`), { clientVersion: e.clientVersion });
      }
      return "wasm";
    }
    __name(bo, "bo");
    u();
    c();
    m();
    p();
    d();
    l();
    function dr({ generator: t }) {
      return t?.previewFeatures ?? [];
    }
    __name(dr, "dr");
    u();
    c();
    m();
    p();
    d();
    l();
    var wo = /* @__PURE__ */ __name((t) => ({ command: t }), "wo");
    u();
    c();
    m();
    p();
    d();
    l();
    u();
    c();
    m();
    p();
    d();
    l();
    var xo = /* @__PURE__ */ __name((t) => t.strings.reduce((e, r, n) => `${e}@P${n}${r}`), "xo");
    u();
    c();
    m();
    p();
    d();
    l();
    l();
    function et(t) {
      try {
        return Eo(t, "fast");
      } catch {
        return Eo(t, "slow");
      }
    }
    __name(et, "et");
    function Eo(t, e) {
      return JSON.stringify(t.map((r) => vo(r, e)));
    }
    __name(Eo, "Eo");
    function vo(t, e) {
      if (Array.isArray(t)) return t.map((r) => vo(r, e));
      if (typeof t == "bigint") return { prisma__type: "bigint", prisma__value: t.toString() };
      if (Ve(t)) return { prisma__type: "date", prisma__value: t.toJSON() };
      if (ae.isDecimal(t)) return { prisma__type: "decimal", prisma__value: t.toJSON() };
      if (b.isBuffer(t)) return { prisma__type: "bytes", prisma__value: t.toString("base64") };
      if (Rl(t)) return { prisma__type: "bytes", prisma__value: b.from(t).toString("base64") };
      if (ArrayBuffer.isView(t)) {
        let { buffer: r, byteOffset: n, byteLength: i } = t;
        return { prisma__type: "bytes", prisma__value: b.from(r, n, i).toString("base64") };
      }
      return typeof t == "object" && e === "slow" ? To(t) : t;
    }
    __name(vo, "vo");
    function Rl(t) {
      return t instanceof ArrayBuffer || t instanceof SharedArrayBuffer ? true : typeof t == "object" && t !== null ? t[Symbol.toStringTag] === "ArrayBuffer" || t[Symbol.toStringTag] === "SharedArrayBuffer" : false;
    }
    __name(Rl, "Rl");
    function To(t) {
      if (typeof t != "object" || t === null) return t;
      if (typeof t.toJSON == "function") return t.toJSON();
      if (Array.isArray(t)) return t.map(Po);
      let e = {};
      for (let r of Object.keys(t)) e[r] = Po(t[r]);
      return e;
    }
    __name(To, "To");
    function Po(t) {
      return typeof t == "bigint" ? t.toString() : To(t);
    }
    __name(Po, "Po");
    var Al = /^(\s*alter\s)/i;
    var Co = J("prisma:client");
    function nn(t, e, r, n) {
      if (!(t !== "postgresql" && t !== "cockroachdb") && r.length > 0 && Al.exec(e)) throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
    }
    __name(nn, "nn");
    var on = /* @__PURE__ */ __name(({ clientMethod: t, activeProvider: e }) => (r) => {
      let n = "", i;
      if (rr(r)) n = r.sql, i = { values: et(r.values), __prismaRawParameters__: true };
      else if (Array.isArray(r)) {
        let [o, ...s] = r;
        n = o, i = { values: et(s || []), __prismaRawParameters__: true };
      } else switch (e) {
        case "sqlite":
        case "mysql": {
          n = r.sql, i = { values: et(r.values), __prismaRawParameters__: true };
          break;
        }
        case "cockroachdb":
        case "postgresql":
        case "postgres": {
          n = r.text, i = { values: et(r.values), __prismaRawParameters__: true };
          break;
        }
        case "sqlserver": {
          n = xo(r), i = { values: et(r.values), __prismaRawParameters__: true };
          break;
        }
        default:
          throw new Error(`The ${e} provider does not support ${t}`);
      }
      return i?.values ? Co(`prisma.${t}(${n}, ${i.values})`) : Co(`prisma.${t}(${n})`), { query: n, parameters: i };
    }, "on");
    var Ro = { requestArgsToMiddlewareArgs(t) {
      return [t.strings, ...t.values];
    }, middlewareArgsToRequestArgs(t) {
      let [e, ...r] = t;
      return new Z(e, r);
    } };
    var Ao = { requestArgsToMiddlewareArgs(t) {
      return [t];
    }, middlewareArgsToRequestArgs(t) {
      return t[0];
    } };
    u();
    c();
    m();
    p();
    d();
    l();
    function sn(t) {
      return function(r, n) {
        let i, o = /* @__PURE__ */ __name((s = t) => {
          try {
            return s === void 0 || s?.kind === "itx" ? i ??= So(r(s)) : So(r(s));
          } catch (a) {
            return Promise.reject(a);
          }
        }, "o");
        return { get spec() {
          return n;
        }, then(s, a) {
          return o().then(s, a);
        }, catch(s) {
          return o().catch(s);
        }, finally(s) {
          return o().finally(s);
        }, requestTransaction(s) {
          let a = o(s);
          return a.requestTransaction ? a.requestTransaction(s) : a;
        }, [Symbol.toStringTag]: "PrismaPromise" };
      };
    }
    __name(sn, "sn");
    function So(t) {
      return typeof t.then == "function" ? t : Promise.resolve(t);
    }
    __name(So, "So");
    u();
    c();
    m();
    p();
    d();
    l();
    var Sl = Or.split(".")[0];
    var kl = { isEnabled() {
      return false;
    }, getTraceParent() {
      return "00-10-10-00";
    }, dispatchEngineSpans() {
    }, getActiveContext() {
    }, runInChildSpan(t, e) {
      return e();
    } };
    var an = class {
      static {
        __name(this, "an");
      }
      isEnabled() {
        return this.getGlobalTracingHelper().isEnabled();
      }
      getTraceParent(e) {
        return this.getGlobalTracingHelper().getTraceParent(e);
      }
      dispatchEngineSpans(e) {
        return this.getGlobalTracingHelper().dispatchEngineSpans(e);
      }
      getActiveContext() {
        return this.getGlobalTracingHelper().getActiveContext();
      }
      runInChildSpan(e, r) {
        return this.getGlobalTracingHelper().runInChildSpan(e, r);
      }
      getGlobalTracingHelper() {
        let e = globalThis[`V${Sl}_PRISMA_INSTRUMENTATION`], r = globalThis.PRISMA_INSTRUMENTATION;
        return e?.helper ?? r?.helper ?? kl;
      }
    };
    function ko() {
      return new an();
    }
    __name(ko, "ko");
    u();
    c();
    m();
    p();
    d();
    l();
    function Oo(t, e = () => {
    }) {
      let r, n = new Promise((i) => r = i);
      return { then(i) {
        return --t === 0 && r(e()), i?.(n);
      } };
    }
    __name(Oo, "Oo");
    u();
    c();
    m();
    p();
    d();
    l();
    function Mo(t) {
      return typeof t == "string" ? t : t.reduce((e, r) => {
        let n = typeof r == "string" ? r : r.level;
        return n === "query" ? e : e && (r === "info" || e === "info") ? "info" : n;
      }, void 0);
    }
    __name(Mo, "Mo");
    u();
    c();
    m();
    p();
    d();
    l();
    var fr = class {
      static {
        __name(this, "fr");
      }
      _middlewares = [];
      use(e) {
        this._middlewares.push(e);
      }
      get(e) {
        return this._middlewares[e];
      }
      has(e) {
        return !!this._middlewares[e];
      }
      length() {
        return this._middlewares.length;
      }
    };
    u();
    c();
    m();
    p();
    d();
    l();
    var Do = nt(Zn());
    u();
    c();
    m();
    p();
    d();
    l();
    function gr(t) {
      return typeof t.batchRequestIdx == "number";
    }
    __name(gr, "gr");
    u();
    c();
    m();
    p();
    d();
    l();
    function Io(t) {
      if (t.action !== "findUnique" && t.action !== "findUniqueOrThrow") return;
      let e = [];
      return t.modelName && e.push(t.modelName), t.query.arguments && e.push(ln(t.query.arguments)), e.push(ln(t.query.selection)), e.join("");
    }
    __name(Io, "Io");
    function ln(t) {
      return `(${Object.keys(t).sort().map((r) => {
        let n = t[r];
        return typeof n == "object" && n !== null ? `(${r} ${ln(n)})` : r;
      }).join(" ")})`;
    }
    __name(ln, "ln");
    u();
    c();
    m();
    p();
    d();
    l();
    var Ol = { aggregate: false, aggregateRaw: false, createMany: true, createManyAndReturn: true, createOne: true, deleteMany: true, deleteOne: true, executeRaw: true, findFirst: false, findFirstOrThrow: false, findMany: false, findRaw: false, findUnique: false, findUniqueOrThrow: false, groupBy: false, queryRaw: false, runCommandRaw: true, updateMany: true, updateManyAndReturn: true, updateOne: true, upsertOne: true };
    function un(t) {
      return Ol[t];
    }
    __name(un, "un");
    u();
    c();
    m();
    p();
    d();
    l();
    var yr = class {
      static {
        __name(this, "yr");
      }
      constructor(e) {
        this.options = e;
        this.batches = {};
      }
      batches;
      tickActive = false;
      request(e) {
        let r = this.options.batchBy(e);
        return r ? (this.batches[r] || (this.batches[r] = [], this.tickActive || (this.tickActive = true, g.nextTick(() => {
          this.dispatchBatches(), this.tickActive = false;
        }))), new Promise((n, i) => {
          this.batches[r].push({ request: e, resolve: n, reject: i });
        })) : this.options.singleLoader(e);
      }
      dispatchBatches() {
        for (let e in this.batches) {
          let r = this.batches[e];
          delete this.batches[e], r.length === 1 ? this.options.singleLoader(r[0].request).then((n) => {
            n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
          }).catch((n) => {
            r[0].reject(n);
          }) : (r.sort((n, i) => this.options.batchOrder(n.request, i.request)), this.options.batchLoader(r.map((n) => n.request)).then((n) => {
            if (n instanceof Error) for (let i = 0; i < r.length; i++) r[i].reject(n);
            else for (let i = 0; i < r.length; i++) {
              let o = n[i];
              o instanceof Error ? r[i].reject(o) : r[i].resolve(o);
            }
          }).catch((n) => {
            for (let i = 0; i < r.length; i++) r[i].reject(n);
          }));
        }
      }
      get [Symbol.toStringTag]() {
        return "DataLoader";
      }
    };
    u();
    c();
    m();
    p();
    d();
    l();
    l();
    function _e(t, e) {
      if (e === null) return e;
      switch (t) {
        case "bigint":
          return BigInt(e);
        case "bytes": {
          let { buffer: r, byteOffset: n, byteLength: i } = b.from(e, "base64");
          return new Uint8Array(r, n, i);
        }
        case "decimal":
          return new ae(e);
        case "datetime":
        case "date":
          return new Date(e);
        case "time":
          return /* @__PURE__ */ new Date(`1970-01-01T${e}Z`);
        case "bigint-array":
          return e.map((r) => _e("bigint", r));
        case "bytes-array":
          return e.map((r) => _e("bytes", r));
        case "decimal-array":
          return e.map((r) => _e("decimal", r));
        case "datetime-array":
          return e.map((r) => _e("datetime", r));
        case "date-array":
          return e.map((r) => _e("date", r));
        case "time-array":
          return e.map((r) => _e("time", r));
        default:
          return e;
      }
    }
    __name(_e, "_e");
    function hr(t) {
      let e = [], r = Ml(t);
      for (let n = 0; n < t.rows.length; n++) {
        let i = t.rows[n], o = { ...r };
        for (let s = 0; s < i.length; s++) o[t.columns[s]] = _e(t.types[s], i[s]);
        e.push(o);
      }
      return e;
    }
    __name(hr, "hr");
    function Ml(t) {
      let e = {};
      for (let r = 0; r < t.columns.length; r++) e[t.columns[r]] = null;
      return e;
    }
    __name(Ml, "Ml");
    var Il = J("prisma:client:request_handler");
    var br = class {
      static {
        __name(this, "br");
      }
      client;
      dataloader;
      logEmitter;
      constructor(e, r) {
        this.logEmitter = r, this.client = e, this.dataloader = new yr({ batchLoader: so(async ({ requests: n, customDataProxyFetch: i }) => {
          let { transaction: o, otelParentCtx: s } = n[0], a = n.map((C) => C.protocolQuery), f = this.client._tracingHelper.getTraceParent(s), h = n.some((C) => un(C.protocolQuery.action));
          return (await this.client._engine.requestBatch(a, { traceparent: f, transaction: Dl(o), containsWrite: h, customDataProxyFetch: i })).map((C, k) => {
            if (C instanceof Error) return C;
            try {
              return this.mapQueryEngineResult(n[k], C);
            } catch (A) {
              return A;
            }
          });
        }), singleLoader: /* @__PURE__ */ __name(async (n) => {
          let i = n.transaction?.kind === "itx" ? _o(n.transaction) : void 0, o = await this.client._engine.request(n.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: i, isWrite: un(n.protocolQuery.action), customDataProxyFetch: n.customDataProxyFetch });
          return this.mapQueryEngineResult(n, o);
        }, "singleLoader"), batchBy: /* @__PURE__ */ __name((n) => n.transaction?.id ? `transaction-${n.transaction.id}` : Io(n.protocolQuery), "batchBy"), batchOrder(n, i) {
          return n.transaction?.kind === "batch" && i.transaction?.kind === "batch" ? n.transaction.index - i.transaction.index : 0;
        } });
      }
      async request(e) {
        try {
          return await this.dataloader.request(e);
        } catch (r) {
          let { clientMethod: n, callsite: i, transaction: o, args: s, modelName: a } = e;
          this.handleAndLogRequestError({ error: r, clientMethod: n, callsite: i, transaction: o, args: s, modelName: a, globalOmit: e.globalOmit });
        }
      }
      mapQueryEngineResult({ dataPath: e, unpacker: r }, n) {
        let i = n?.data, o = this.unpack(i, e, r);
        return g.env.PRISMA_CLIENT_GET_TIME ? { data: o } : o;
      }
      handleAndLogRequestError(e) {
        try {
          this.handleRequestError(e);
        } catch (r) {
          throw this.logEmitter && this.logEmitter.emit("error", { message: r.message, target: e.clientMethod, timestamp: /* @__PURE__ */ new Date() }), r;
        }
      }
      handleRequestError({ error: e, clientMethod: r, callsite: n, transaction: i, args: o, modelName: s, globalOmit: a }) {
        if (Il(e), _l(e, i)) throw e;
        if (e instanceof X && Ll(e)) {
          let h = Lo(e.meta);
          zt({ args: o, errors: [h], callsite: n, errorFormat: this.client._errorFormat, originalMethod: r, clientVersion: this.client._clientVersion, globalOmit: a });
        }
        let f = e.message;
        if (n && (f = Bt({ callsite: n, originalMethod: r, isPanic: e.isPanic, showColors: this.client._errorFormat === "pretty", message: f })), f = this.sanitizeMessage(f), e.code) {
          let h = s ? { modelName: s, ...e.meta } : e.meta;
          throw new X(f, { code: e.code, clientVersion: this.client._clientVersion, meta: h, batchRequestIdx: e.batchRequestIdx });
        } else {
          if (e.isPanic) throw new we(f, this.client._clientVersion);
          if (e instanceof j) throw new j(f, { clientVersion: this.client._clientVersion, batchRequestIdx: e.batchRequestIdx });
          if (e instanceof I) throw new I(f, this.client._clientVersion);
          if (e instanceof we) throw new we(f, this.client._clientVersion);
        }
        throw e.clientVersion = this.client._clientVersion, e;
      }
      sanitizeMessage(e) {
        return this.client._errorFormat && this.client._errorFormat !== "pretty" ? (0, Do.default)(e) : e;
      }
      unpack(e, r, n) {
        if (!e || (e.data && (e = e.data), !e)) return e;
        let i = Object.keys(e)[0], o = Object.values(e)[0], s = r.filter((h) => h !== "select" && h !== "include"), a = Kr(o, s), f = i === "queryRaw" ? hr(a) : $e(a);
        return n ? n(f) : f;
      }
      get [Symbol.toStringTag]() {
        return "RequestHandler";
      }
    };
    function Dl(t) {
      if (t) {
        if (t.kind === "batch") return { kind: "batch", options: { isolationLevel: t.isolationLevel } };
        if (t.kind === "itx") return { kind: "itx", options: _o(t) };
        be(t, "Unknown transaction kind");
      }
    }
    __name(Dl, "Dl");
    function _o(t) {
      return { id: t.id, payload: t.payload };
    }
    __name(_o, "_o");
    function _l(t, e) {
      return gr(t) && e?.kind === "batch" && t.batchRequestIdx !== e.index;
    }
    __name(_l, "_l");
    function Ll(t) {
      return t.code === "P2009" || t.code === "P2012";
    }
    __name(Ll, "Ll");
    function Lo(t) {
      if (t.kind === "Union") return { kind: "Union", errors: t.errors.map(Lo) };
      if (Array.isArray(t.selectionPath)) {
        let [, ...e] = t.selectionPath;
        return { ...t, selectionPath: e };
      }
      return t;
    }
    __name(Lo, "Lo");
    u();
    c();
    m();
    p();
    d();
    l();
    var Fo = go;
    u();
    c();
    m();
    p();
    d();
    l();
    var $o = nt(Fr());
    u();
    c();
    m();
    p();
    d();
    l();
    var D = class extends Error {
      static {
        __name(this, "D");
      }
      constructor(e) {
        super(e + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientConstructorValidationError";
      }
    };
    te(D, "PrismaClientConstructorValidationError");
    var No = ["datasources", "datasourceUrl", "errorFormat", "adapter", "log", "transactionOptions", "omit", "__internal"];
    var qo = ["pretty", "colorless", "minimal"];
    var Uo = ["info", "query", "warn", "error"];
    var Fl = { datasources: /* @__PURE__ */ __name((t, { datasourceNames: e }) => {
      if (t) {
        if (typeof t != "object" || Array.isArray(t)) throw new D(`Invalid value ${JSON.stringify(t)} for "datasources" provided to PrismaClient constructor`);
        for (let [r, n] of Object.entries(t)) {
          if (!e.includes(r)) {
            let i = tt(r, e) || ` Available datasources: ${e.join(", ")}`;
            throw new D(`Unknown datasource ${r} provided to PrismaClient constructor.${i}`);
          }
          if (typeof n != "object" || Array.isArray(n)) throw new D(`Invalid value ${JSON.stringify(t)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          if (n && typeof n == "object") for (let [i, o] of Object.entries(n)) {
            if (i !== "url") throw new D(`Invalid value ${JSON.stringify(t)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            if (typeof o != "string") throw new D(`Invalid value ${JSON.stringify(o)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          }
        }
      }
    }, "datasources"), adapter: /* @__PURE__ */ __name((t, e) => {
      if (!t && Ue(e.generator) === "client") throw new D('Using engine type "client" requires a driver adapter to be provided to PrismaClient constructor.');
      if (t === null) return;
      if (t === void 0) throw new D('"adapter" property must not be undefined, use null to conditionally disable driver adapters.');
      if (!dr(e).includes("driverAdapters")) throw new D('"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.');
      if (Ue(e.generator) === "binary") throw new D('Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.');
    }, "adapter"), datasourceUrl: /* @__PURE__ */ __name((t) => {
      if (typeof t < "u" && typeof t != "string") throw new D(`Invalid value ${JSON.stringify(t)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
    }, "datasourceUrl"), errorFormat: /* @__PURE__ */ __name((t) => {
      if (t) {
        if (typeof t != "string") throw new D(`Invalid value ${JSON.stringify(t)} for "errorFormat" provided to PrismaClient constructor.`);
        if (!qo.includes(t)) {
          let e = tt(t, qo);
          throw new D(`Invalid errorFormat ${t} provided to PrismaClient constructor.${e}`);
        }
      }
    }, "errorFormat"), log: /* @__PURE__ */ __name((t) => {
      if (!t) return;
      if (!Array.isArray(t)) throw new D(`Invalid value ${JSON.stringify(t)} for "log" provided to PrismaClient constructor.`);
      function e(r) {
        if (typeof r == "string" && !Uo.includes(r)) {
          let n = tt(r, Uo);
          throw new D(`Invalid log level "${r}" provided to PrismaClient constructor.${n}`);
        }
      }
      __name(e, "e");
      for (let r of t) {
        e(r);
        let n = { level: e, emit: /* @__PURE__ */ __name((i) => {
          let o = ["stdout", "event"];
          if (!o.includes(i)) {
            let s = tt(i, o);
            throw new D(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`);
          }
        }, "emit") };
        if (r && typeof r == "object") for (let [i, o] of Object.entries(r)) if (n[i]) n[i](o);
        else throw new D(`Invalid property ${i} for "log" provided to PrismaClient constructor`);
      }
    }, "log"), transactionOptions: /* @__PURE__ */ __name((t) => {
      if (!t) return;
      let e = t.maxWait;
      if (e != null && e <= 0) throw new D(`Invalid value ${e} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`);
      let r = t.timeout;
      if (r != null && r <= 0) throw new D(`Invalid value ${r} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`);
    }, "transactionOptions"), omit: /* @__PURE__ */ __name((t, e) => {
      if (typeof t != "object") throw new D('"omit" option is expected to be an object.');
      if (t === null) throw new D('"omit" option can not be `null`');
      let r = [];
      for (let [n, i] of Object.entries(t)) {
        let o = ql(n, e.runtimeDataModel);
        if (!o) {
          r.push({ kind: "UnknownModel", modelKey: n });
          continue;
        }
        for (let [s, a] of Object.entries(i)) {
          let f = o.fields.find((h) => h.name === s);
          if (!f) {
            r.push({ kind: "UnknownField", modelKey: n, fieldName: s });
            continue;
          }
          if (f.relationName) {
            r.push({ kind: "RelationInOmit", modelKey: n, fieldName: s });
            continue;
          }
          typeof a != "boolean" && r.push({ kind: "InvalidFieldValue", modelKey: n, fieldName: s });
        }
      }
      if (r.length > 0) throw new D(Ul(t, r));
    }, "omit"), __internal: /* @__PURE__ */ __name((t) => {
      if (!t) return;
      let e = ["debug", "engine", "configOverride"];
      if (typeof t != "object") throw new D(`Invalid value ${JSON.stringify(t)} for "__internal" to PrismaClient constructor`);
      for (let [r] of Object.entries(t)) if (!e.includes(r)) {
        let n = tt(r, e);
        throw new D(`Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`);
      }
    }, "__internal") };
    function Vo(t, e) {
      for (let [r, n] of Object.entries(t)) {
        if (!No.includes(r)) {
          let i = tt(r, No);
          throw new D(`Unknown property ${r} provided to PrismaClient constructor.${i}`);
        }
        Fl[r](n, e);
      }
      if (t.datasourceUrl && t.datasources) throw new D('Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them');
    }
    __name(Vo, "Vo");
    function tt(t, e) {
      if (e.length === 0 || typeof t != "string") return "";
      let r = Nl(t, e);
      return r ? ` Did you mean "${r}"?` : "";
    }
    __name(tt, "tt");
    function Nl(t, e) {
      if (e.length === 0) return null;
      let r = e.map((i) => ({ value: i, distance: (0, $o.default)(t, i) }));
      r.sort((i, o) => i.distance < o.distance ? -1 : 1);
      let n = r[0];
      return n.distance < 3 ? n.value : null;
    }
    __name(Nl, "Nl");
    function ql(t, e) {
      return Bo(e.models, t) ?? Bo(e.types, t);
    }
    __name(ql, "ql");
    function Bo(t, e) {
      let r = Object.keys(t).find((n) => ve(n) === e);
      if (r) return t[r];
    }
    __name(Bo, "Bo");
    function Ul(t, e) {
      let r = He(t);
      for (let o of e) switch (o.kind) {
        case "UnknownModel":
          r.arguments.getField(o.modelKey)?.markAsError(), r.addErrorMessage(() => `Unknown model name: ${o.modelKey}.`);
          break;
        case "UnknownField":
          r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => `Model "${o.modelKey}" does not have a field named "${o.fieldName}".`);
          break;
        case "RelationInOmit":
          r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => 'Relations are already excluded by default and can not be specified in "omit".');
          break;
        case "InvalidFieldValue":
          r.arguments.getDeepFieldValue([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => "Omit field option value must be a boolean.");
          break;
      }
      let { message: n, args: i } = Ht(r, "colorless");
      return `Error validating "omit" option:

${i}

${n}`;
    }
    __name(Ul, "Ul");
    u();
    c();
    m();
    p();
    d();
    l();
    function jo(t) {
      return t.length === 0 ? Promise.resolve([]) : new Promise((e, r) => {
        let n = new Array(t.length), i = null, o = false, s = 0, a = /* @__PURE__ */ __name(() => {
          o || (s++, s === t.length && (o = true, i ? r(i) : e(n)));
        }, "a"), f = /* @__PURE__ */ __name((h) => {
          o || (o = true, r(h));
        }, "f");
        for (let h = 0; h < t.length; h++) t[h].then((T) => {
          n[h] = T, a();
        }, (T) => {
          if (!gr(T)) {
            f(T);
            return;
          }
          T.batchRequestIdx === h ? f(T) : (i || (i = T), a());
        });
      });
    }
    __name(jo, "jo");
    var Ae = J("prisma:client");
    typeof globalThis == "object" && (globalThis.NODE_CLIENT = true);
    var Bl = { requestArgsToMiddlewareArgs: /* @__PURE__ */ __name((t) => t, "requestArgsToMiddlewareArgs"), middlewareArgsToRequestArgs: /* @__PURE__ */ __name((t) => t, "middlewareArgsToRequestArgs") };
    var $l = Symbol.for("prisma.client.transaction.id");
    var Vl = { id: 0, nextId() {
      return ++this.id;
    } };
    function Go(t) {
      class e {
        static {
          __name(this, "e");
        }
        _originalClient = this;
        _runtimeDataModel;
        _requestHandler;
        _connectionPromise;
        _disconnectionPromise;
        _engineConfig;
        _accelerateEngineConfig;
        _clientVersion;
        _errorFormat;
        _tracingHelper;
        _middlewares = new fr();
        _previewFeatures;
        _activeProvider;
        _globalOmit;
        _extensions;
        _engine;
        _appliedParent;
        _createPrismaPromise = sn();
        constructor(n) {
          t = n?.__internal?.configOverride?.(t) ?? t, mo(t), n && Vo(n, t);
          let i = new nr().on("error", () => {
          });
          this._extensions = ze.empty(), this._previewFeatures = dr(t), this._clientVersion = t.clientVersion ?? Fo, this._activeProvider = t.activeProvider, this._globalOmit = n?.omit, this._tracingHelper = ko();
          let o = t.relativeEnvPaths && { rootEnvPath: t.relativeEnvPaths.rootEnvPath && Nt.resolve(t.dirname, t.relativeEnvPaths.rootEnvPath), schemaEnvPath: t.relativeEnvPaths.schemaEnvPath && Nt.resolve(t.dirname, t.relativeEnvPaths.schemaEnvPath) }, s;
          if (n?.adapter) {
            s = n.adapter;
            let f = t.activeProvider === "postgresql" ? "postgres" : t.activeProvider;
            if (s.provider !== f) throw new I(`The Driver Adapter \`${s.adapterName}\`, based on \`${s.provider}\`, is not compatible with the provider \`${f}\` specified in the Prisma schema.`, this._clientVersion);
            if (n.datasources || n.datasourceUrl !== void 0) throw new I("Custom datasource configuration is not compatible with Prisma Driver Adapters. Please define the database connection string directly in the Driver Adapter configuration.", this._clientVersion);
          }
          let a = t.injectableEdgeEnv?.();
          try {
            let f = n ?? {}, h = f.__internal ?? {}, T = h.debug === true;
            T && J.enable("prisma:client");
            let C = Nt.resolve(t.dirname, t.relativePath);
            qn.existsSync(C) || (C = t.dirname), Ae("dirname", t.dirname), Ae("relativePath", t.relativePath), Ae("cwd", C);
            let k = h.engine || {};
            if (f.errorFormat ? this._errorFormat = f.errorFormat : g.env.NODE_ENV === "production" ? this._errorFormat = "minimal" : g.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._runtimeDataModel = t.runtimeDataModel, this._engineConfig = { cwd: C, dirname: t.dirname, enableDebugLogs: T, allowTriggerPanic: k.allowTriggerPanic, prismaPath: k.binaryPath ?? void 0, engineEndpoint: k.endpoint, generator: t.generator, showColors: this._errorFormat === "pretty", logLevel: f.log && Mo(f.log), logQueries: f.log && !!(typeof f.log == "string" ? f.log === "query" : f.log.find((A) => typeof A == "string" ? A === "query" : A.level === "query")), env: a?.parsed ?? {}, flags: [], engineWasm: t.engineWasm, compilerWasm: t.compilerWasm, clientVersion: t.clientVersion, engineVersion: t.engineVersion, previewFeatures: this._previewFeatures, activeProvider: t.activeProvider, inlineSchema: t.inlineSchema, overrideDatasources: po(f, t.datasourceNames), inlineDatasources: t.inlineDatasources, inlineSchemaHash: t.inlineSchemaHash, tracingHelper: this._tracingHelper, transactionOptions: { maxWait: f.transactionOptions?.maxWait ?? 2e3, timeout: f.transactionOptions?.timeout ?? 5e3, isolationLevel: f.transactionOptions?.isolationLevel }, logEmitter: i, isBundled: t.isBundled, adapter: s }, this._accelerateEngineConfig = { ...this._engineConfig, accelerateUtils: { resolveDatasourceUrl: mr, getBatchRequestPayload: sr, prismaGraphQLToJSError: ar, PrismaClientUnknownRequestError: j, PrismaClientInitializationError: I, PrismaClientKnownRequestError: X, debug: J("prisma:client:accelerateEngine"), engineVersion: Jo.version, clientVersion: t.clientVersion } }, Ae("clientVersion", t.clientVersion), this._engine = bo(t, this._engineConfig), this._requestHandler = new br(this, i), f.log) for (let A of f.log) {
              let O = typeof A == "string" ? A : A.emit === "stdout" ? A.level : null;
              O && this.$on(O, (S) => {
                at.log(`${at.tags[O] ?? ""}`, S.message || S.query);
              });
            }
          } catch (f) {
            throw f.clientVersion = this._clientVersion, f;
          }
          return this._appliedParent = Tt(this);
        }
        get [Symbol.toStringTag]() {
          return "PrismaClient";
        }
        $use(n) {
          this._middlewares.use(n);
        }
        $on(n, i) {
          return n === "beforeExit" ? this._engine.onBeforeExit(i) : n && this._engineConfig.logEmitter.on(n, i), this;
        }
        $connect() {
          try {
            return this._engine.start();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          }
        }
        async $disconnect() {
          try {
            await this._engine.stop();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          } finally {
            Fn();
          }
        }
        $executeRawInternal(n, i, o, s) {
          let a = this._activeProvider;
          return this._request({ action: "executeRaw", args: o, transaction: n, clientMethod: i, argsMapper: on({ clientMethod: i, activeProvider: a }), callsite: Ce(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $executeRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0) {
              let [s, a] = Qo(n, i);
              return nn(this._activeProvider, s.text, s.values, Array.isArray(n) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(o, "$executeRaw", s, a);
            }
            throw new W("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", { clientVersion: this._clientVersion });
          });
        }
        $executeRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => (nn(this._activeProvider, n, i, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i])));
        }
        $runCommandRaw(n) {
          if (t.activeProvider !== "mongodb") throw new W(`The ${t.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion });
          return this._createPrismaPromise((i) => this._request({ args: n, clientMethod: "$runCommandRaw", dataPath: [], action: "runCommandRaw", argsMapper: wo, callsite: Ce(this._errorFormat), transaction: i }));
        }
        async $queryRawInternal(n, i, o, s) {
          let a = this._activeProvider;
          return this._request({ action: "queryRaw", args: o, transaction: n, clientMethod: i, argsMapper: on({ clientMethod: i, activeProvider: a }), callsite: Ce(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $queryRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0) return this.$queryRawInternal(o, "$queryRaw", ...Qo(n, i));
            throw new W("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", { clientVersion: this._clientVersion });
          });
        }
        $queryRawTyped(n) {
          return this._createPrismaPromise((i) => {
            if (!this._hasPreviewFlag("typedSql")) throw new W("`typedSql` preview feature must be enabled in order to access $queryRawTyped API", { clientVersion: this._clientVersion });
            return this.$queryRawInternal(i, "$queryRawTyped", n);
          });
        }
        $queryRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i]));
        }
        _transactionWithArray({ promises: n, options: i }) {
          let o = Vl.nextId(), s = Oo(n.length), a = n.map((f, h) => {
            if (f?.[Symbol.toStringTag] !== "PrismaPromise") throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
            let T = i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel, C = { kind: "batch", id: o, index: h, isolationLevel: T, lock: s };
            return f.requestTransaction?.(C) ?? f;
          });
          return jo(a);
        }
        async _transactionWithCallback({ callback: n, options: i }) {
          let o = { traceparent: this._tracingHelper.getTraceParent() }, s = { maxWait: i?.maxWait ?? this._engineConfig.transactionOptions.maxWait, timeout: i?.timeout ?? this._engineConfig.transactionOptions.timeout, isolationLevel: i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel }, a = await this._engine.transaction("start", o, s), f;
          try {
            let h = { kind: "itx", ...a };
            f = await n(this._createItxClient(h)), await this._engine.transaction("commit", o, a);
          } catch (h) {
            throw await this._engine.transaction("rollback", o, a).catch(() => {
            }), h;
          }
          return f;
        }
        _createItxClient(n) {
          return le(Tt(le(zi(this), [K("_appliedParent", () => this._appliedParent._createItxClient(n)), K("_createPrismaPromise", () => sn(n)), K($l, () => n.id)])), [Xe(to)]);
        }
        $transaction(n, i) {
          let o;
          typeof n == "function" ? this._engineConfig.adapter?.adapterName === "@prisma/adapter-d1" ? o = /* @__PURE__ */ __name(() => {
            throw new Error("Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.");
          }, "o") : o = /* @__PURE__ */ __name(() => this._transactionWithCallback({ callback: n, options: i }), "o") : o = /* @__PURE__ */ __name(() => this._transactionWithArray({ promises: n, options: i }), "o");
          let s = { name: "transaction", attributes: { method: "$transaction" } };
          return this._tracingHelper.runInChildSpan(s, o);
        }
        _request(n) {
          n.otelParentCtx = this._tracingHelper.getActiveContext();
          let i = n.middlewareArgsMapper ?? Bl, o = { args: i.requestArgsToMiddlewareArgs(n.args), dataPath: n.dataPath, runInTransaction: !!n.transaction, action: n.action, model: n.model }, s = { middleware: { name: "middleware", middleware: true, attributes: { method: "$use" }, active: false }, operation: { name: "operation", attributes: { method: o.action, model: o.model, name: o.model ? `${o.model}.${o.action}` : o.action } } }, a = -1, f = /* @__PURE__ */ __name(async (h) => {
            let T = this._middlewares.get(++a);
            if (T) return this._tracingHelper.runInChildSpan(s.middleware, (M) => T(h, (oe) => (M?.end(), f(oe))));
            let { runInTransaction: C, args: k, ...A } = h, O = { ...n, ...A };
            k && (O.args = i.middlewareArgsToRequestArgs(k)), n.transaction !== void 0 && C === false && delete O.transaction;
            let S = await oo(this, O);
            return O.model ? eo({ result: S, modelName: O.model, args: O.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel, globalOmit: this._globalOmit }) : S;
          }, "f");
          return this._tracingHelper.runInChildSpan(s.operation, () => f(o));
        }
        async _executeRequest({ args: n, clientMethod: i, dataPath: o, callsite: s, action: a, model: f, argsMapper: h, transaction: T, unpacker: C, otelParentCtx: k, customDataProxyFetch: A }) {
          try {
            n = h ? h(n) : n;
            let O = { name: "serialize" }, S = this._tracingHelper.runInChildSpan(O, () => er({ modelName: f, runtimeDataModel: this._runtimeDataModel, action: a, args: n, clientMethod: i, callsite: s, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion, previewFeatures: this._previewFeatures, globalOmit: this._globalOmit }));
            return J.enabled("prisma:client") && (Ae("Prisma Client call:"), Ae(`prisma.${i}(${Bi(n)})`), Ae("Generated request:"), Ae(JSON.stringify(S, null, 2) + `
`)), T?.kind === "batch" && await T.lock, this._requestHandler.request({ protocolQuery: S, modelName: f, action: a, clientMethod: i, dataPath: o, callsite: s, args: n, extensions: this._extensions, transaction: T, unpacker: C, otelParentCtx: k, otelChildCtx: this._tracingHelper.getActiveContext(), globalOmit: this._globalOmit, customDataProxyFetch: A });
          } catch (O) {
            throw O.clientVersion = this._clientVersion, O;
          }
        }
        $metrics = new Ye(this);
        _hasPreviewFlag(n) {
          return !!this._engineConfig.previewFeatures?.includes(n);
        }
        $applyPendingMigrations() {
          return this._engine.applyPendingMigrations();
        }
        $extends = Yi;
      }
      return e;
    }
    __name(Go, "Go");
    function Qo(t, e) {
      return jl(t) ? [new Z(t, e), Ro] : [t, Ao];
    }
    __name(Qo, "Qo");
    function jl(t) {
      return Array.isArray(t) && Array.isArray(t.raw);
    }
    __name(jl, "jl");
    u();
    c();
    m();
    p();
    d();
    l();
    var Ql = /* @__PURE__ */ new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
    function Wo(t) {
      return new Proxy(t, { get(e, r) {
        if (r in e) return e[r];
        if (!Ql.has(r)) throw new TypeError(`Invalid enum value: ${String(r)}`);
      } });
    }
    __name(Wo, "Wo");
    u();
    c();
    m();
    p();
    d();
    l();
    l();
  }
});

// ../../node_modules/.pnpm/@prisma+client@6.8.2_prisma@6.8.2_typescript@5.8.3__typescript@5.8.3/node_modules/.prisma/client/query_engine_bg.js
var require_query_engine_bg = __commonJS({
  "../../node_modules/.pnpm/@prisma+client@6.8.2_prisma@6.8.2_typescript@5.8.3__typescript@5.8.3/node_modules/.prisma/client/query_engine_bg.js"(exports, module) {
    "use strict";
    init_modules_watch_stub();
    var S = Object.defineProperty;
    var k = Object.getOwnPropertyDescriptor;
    var D = Object.getOwnPropertyNames;
    var R = Object.prototype.hasOwnProperty;
    var B = /* @__PURE__ */ __name((e, t) => {
      for (var n in t) S(e, n, { get: t[n], enumerable: true });
    }, "B");
    var U = /* @__PURE__ */ __name((e, t, n, o) => {
      if (t && typeof t == "object" || typeof t == "function") for (let _ of D(t)) !R.call(e, _) && _ !== n && S(e, _, { get: /* @__PURE__ */ __name(() => t[_], "get"), enumerable: !(o = k(t, _)) || o.enumerable });
      return e;
    }, "U");
    var L = /* @__PURE__ */ __name((e) => U(S({}, "__esModule", { value: true }), e), "L");
    var Et = {};
    B(Et, { QueryEngine: /* @__PURE__ */ __name(() => Q, "QueryEngine"), __wbg_String_8f0eb39a4a4c2f66: /* @__PURE__ */ __name(() => H, "__wbg_String_8f0eb39a4a4c2f66"), __wbg_buffer_609cc3eee51ed158: /* @__PURE__ */ __name(() => J, "__wbg_buffer_609cc3eee51ed158"), __wbg_call_672a4d21634d4a24: /* @__PURE__ */ __name(() => K, "__wbg_call_672a4d21634d4a24"), __wbg_call_7cccdd69e0791ae2: /* @__PURE__ */ __name(() => X, "__wbg_call_7cccdd69e0791ae2"), __wbg_crypto_805be4ce92f1e370: /* @__PURE__ */ __name(() => Y, "__wbg_crypto_805be4ce92f1e370"), __wbg_done_769e5ede4b31c67b: /* @__PURE__ */ __name(() => Z, "__wbg_done_769e5ede4b31c67b"), __wbg_entries_3265d4158b33e5dc: /* @__PURE__ */ __name(() => ee, "__wbg_entries_3265d4158b33e5dc"), __wbg_getRandomValues_f6a868620c8bab49: /* @__PURE__ */ __name(() => te, "__wbg_getRandomValues_f6a868620c8bab49"), __wbg_getTime_46267b1c24877e30: /* @__PURE__ */ __name(() => ne, "__wbg_getTime_46267b1c24877e30"), __wbg_get_67b2ba62fc30de12: /* @__PURE__ */ __name(() => re, "__wbg_get_67b2ba62fc30de12"), __wbg_get_b9b93047fe3cf45b: /* @__PURE__ */ __name(() => oe, "__wbg_get_b9b93047fe3cf45b"), __wbg_get_ece95cf6585650d9: /* @__PURE__ */ __name(() => _e, "__wbg_get_ece95cf6585650d9"), __wbg_getwithrefkey_1dc361bd10053bfe: /* @__PURE__ */ __name(() => ce, "__wbg_getwithrefkey_1dc361bd10053bfe"), __wbg_has_a5ea9117f258a0ec: /* @__PURE__ */ __name(() => ie, "__wbg_has_a5ea9117f258a0ec"), __wbg_instanceof_ArrayBuffer_e14585432e3737fc: /* @__PURE__ */ __name(() => ue, "__wbg_instanceof_ArrayBuffer_e14585432e3737fc"), __wbg_instanceof_Map_f3469ce2244d2430: /* @__PURE__ */ __name(() => se, "__wbg_instanceof_Map_f3469ce2244d2430"), __wbg_instanceof_Promise_935168b8f4b49db3: /* @__PURE__ */ __name(() => fe, "__wbg_instanceof_Promise_935168b8f4b49db3"), __wbg_instanceof_Uint8Array_17156bcf118086a9: /* @__PURE__ */ __name(() => ae, "__wbg_instanceof_Uint8Array_17156bcf118086a9"), __wbg_isArray_a1eab7e0d067391b: /* @__PURE__ */ __name(() => be, "__wbg_isArray_a1eab7e0d067391b"), __wbg_isSafeInteger_343e2beeeece1bb0: /* @__PURE__ */ __name(() => le, "__wbg_isSafeInteger_343e2beeeece1bb0"), __wbg_iterator_9a24c88df860dc65: /* @__PURE__ */ __name(() => ge, "__wbg_iterator_9a24c88df860dc65"), __wbg_keys_5c77a08ddc2fb8a6: /* @__PURE__ */ __name(() => de, "__wbg_keys_5c77a08ddc2fb8a6"), __wbg_length_a446193dc22c12f8: /* @__PURE__ */ __name(() => we, "__wbg_length_a446193dc22c12f8"), __wbg_length_e2d2a49132c1b256: /* @__PURE__ */ __name(() => pe, "__wbg_length_e2d2a49132c1b256"), __wbg_msCrypto_2ac4d17c4748234a: /* @__PURE__ */ __name(() => xe, "__wbg_msCrypto_2ac4d17c4748234a"), __wbg_new0_f788a2397c7ca929: /* @__PURE__ */ __name(() => ye, "__wbg_new0_f788a2397c7ca929"), __wbg_new_23a2665fac83c611: /* @__PURE__ */ __name(() => me, "__wbg_new_23a2665fac83c611"), __wbg_new_405e22f390576ce2: /* @__PURE__ */ __name(() => he, "__wbg_new_405e22f390576ce2"), __wbg_new_5e0be73521bc8c17: /* @__PURE__ */ __name(() => Te, "__wbg_new_5e0be73521bc8c17"), __wbg_new_78feb108b6472713: /* @__PURE__ */ __name(() => qe, "__wbg_new_78feb108b6472713"), __wbg_new_a12002a7f91c75be: /* @__PURE__ */ __name(() => Se, "__wbg_new_a12002a7f91c75be"), __wbg_newnoargs_105ed471475aaf50: /* @__PURE__ */ __name(() => Ae, "__wbg_newnoargs_105ed471475aaf50"), __wbg_newwithbyteoffsetandlength_d97e637ebe145a9a: /* @__PURE__ */ __name(() => Ie, "__wbg_newwithbyteoffsetandlength_d97e637ebe145a9a"), __wbg_newwithlength_a381634e90c276d4: /* @__PURE__ */ __name(() => Ee, "__wbg_newwithlength_a381634e90c276d4"), __wbg_next_25feadfc0913fea9: /* @__PURE__ */ __name(() => Oe, "__wbg_next_25feadfc0913fea9"), __wbg_next_6574e1a8a62d1055: /* @__PURE__ */ __name(() => Fe, "__wbg_next_6574e1a8a62d1055"), __wbg_node_ecc8306b9857f33d: /* @__PURE__ */ __name(() => Me, "__wbg_node_ecc8306b9857f33d"), __wbg_now_7fd00a794a07d388: /* @__PURE__ */ __name(() => je, "__wbg_now_7fd00a794a07d388"), __wbg_now_807e54c39636c349: /* @__PURE__ */ __name(() => ke, "__wbg_now_807e54c39636c349"), __wbg_now_b3f7572f6ef3d3a9: /* @__PURE__ */ __name(() => De, "__wbg_now_b3f7572f6ef3d3a9"), __wbg_process_5cff2739921be718: /* @__PURE__ */ __name(() => Re, "__wbg_process_5cff2739921be718"), __wbg_push_737cfc8c1432c2c6: /* @__PURE__ */ __name(() => Be, "__wbg_push_737cfc8c1432c2c6"), __wbg_queueMicrotask_5a8a9131f3f0b37b: /* @__PURE__ */ __name(() => Ue, "__wbg_queueMicrotask_5a8a9131f3f0b37b"), __wbg_queueMicrotask_6d79674585219521: /* @__PURE__ */ __name(() => Le, "__wbg_queueMicrotask_6d79674585219521"), __wbg_randomFillSync_d3c85af7e31cf1f8: /* @__PURE__ */ __name(() => ve, "__wbg_randomFillSync_d3c85af7e31cf1f8"), __wbg_require_0c566c6f2eef6c79: /* @__PURE__ */ __name(() => Ne, "__wbg_require_0c566c6f2eef6c79"), __wbg_resolve_4851785c9c5f573d: /* @__PURE__ */ __name(() => $e, "__wbg_resolve_4851785c9c5f573d"), __wbg_setTimeout_5d6a1d4fc51ea450: /* @__PURE__ */ __name(() => Ce, "__wbg_setTimeout_5d6a1d4fc51ea450"), __wbg_set_37837023f3d740e8: /* @__PURE__ */ __name(() => Ve, "__wbg_set_37837023f3d740e8"), __wbg_set_3f1d0b984ed272ed: /* @__PURE__ */ __name(() => ze, "__wbg_set_3f1d0b984ed272ed"), __wbg_set_65595bdd868b3009: /* @__PURE__ */ __name(() => We, "__wbg_set_65595bdd868b3009"), __wbg_set_8fc6bf8a5b1071d1: /* @__PURE__ */ __name(() => Pe, "__wbg_set_8fc6bf8a5b1071d1"), __wbg_set_bb8cecf6a62b9f46: /* @__PURE__ */ __name(() => Ge, "__wbg_set_bb8cecf6a62b9f46"), __wbg_set_wasm: /* @__PURE__ */ __name(() => v, "__wbg_set_wasm"), __wbg_static_accessor_GLOBAL_88a902d13a557d07: /* @__PURE__ */ __name(() => Qe, "__wbg_static_accessor_GLOBAL_88a902d13a557d07"), __wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0: /* @__PURE__ */ __name(() => He, "__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0"), __wbg_static_accessor_SELF_37c5d418e4bf5819: /* @__PURE__ */ __name(() => Je, "__wbg_static_accessor_SELF_37c5d418e4bf5819"), __wbg_static_accessor_WINDOW_5de37043a91a9c40: /* @__PURE__ */ __name(() => Ke, "__wbg_static_accessor_WINDOW_5de37043a91a9c40"), __wbg_subarray_aa9065fa9dc5df96: /* @__PURE__ */ __name(() => Xe, "__wbg_subarray_aa9065fa9dc5df96"), __wbg_then_44b73946d2fb3e7d: /* @__PURE__ */ __name(() => Ye, "__wbg_then_44b73946d2fb3e7d"), __wbg_then_48b406749878a531: /* @__PURE__ */ __name(() => Ze, "__wbg_then_48b406749878a531"), __wbg_valueOf_7392193dd78c6b97: /* @__PURE__ */ __name(() => et, "__wbg_valueOf_7392193dd78c6b97"), __wbg_value_cd1ffa7b1ab794f1: /* @__PURE__ */ __name(() => tt, "__wbg_value_cd1ffa7b1ab794f1"), __wbg_versions_a8e5a362e1f16442: /* @__PURE__ */ __name(() => nt, "__wbg_versions_a8e5a362e1f16442"), __wbindgen_as_number: /* @__PURE__ */ __name(() => rt, "__wbindgen_as_number"), __wbindgen_bigint_from_i64: /* @__PURE__ */ __name(() => ot, "__wbindgen_bigint_from_i64"), __wbindgen_bigint_from_u64: /* @__PURE__ */ __name(() => _t, "__wbindgen_bigint_from_u64"), __wbindgen_bigint_get_as_i64: /* @__PURE__ */ __name(() => ct, "__wbindgen_bigint_get_as_i64"), __wbindgen_boolean_get: /* @__PURE__ */ __name(() => it, "__wbindgen_boolean_get"), __wbindgen_cb_drop: /* @__PURE__ */ __name(() => ut, "__wbindgen_cb_drop"), __wbindgen_closure_wrapper7261: /* @__PURE__ */ __name(() => st, "__wbindgen_closure_wrapper7261"), __wbindgen_debug_string: /* @__PURE__ */ __name(() => ft, "__wbindgen_debug_string"), __wbindgen_error_new: /* @__PURE__ */ __name(() => at, "__wbindgen_error_new"), __wbindgen_in: /* @__PURE__ */ __name(() => bt, "__wbindgen_in"), __wbindgen_init_externref_table: /* @__PURE__ */ __name(() => lt, "__wbindgen_init_externref_table"), __wbindgen_is_bigint: /* @__PURE__ */ __name(() => gt, "__wbindgen_is_bigint"), __wbindgen_is_function: /* @__PURE__ */ __name(() => dt, "__wbindgen_is_function"), __wbindgen_is_object: /* @__PURE__ */ __name(() => wt, "__wbindgen_is_object"), __wbindgen_is_string: /* @__PURE__ */ __name(() => pt, "__wbindgen_is_string"), __wbindgen_is_undefined: /* @__PURE__ */ __name(() => xt, "__wbindgen_is_undefined"), __wbindgen_jsval_eq: /* @__PURE__ */ __name(() => yt, "__wbindgen_jsval_eq"), __wbindgen_jsval_loose_eq: /* @__PURE__ */ __name(() => mt, "__wbindgen_jsval_loose_eq"), __wbindgen_memory: /* @__PURE__ */ __name(() => ht, "__wbindgen_memory"), __wbindgen_number_get: /* @__PURE__ */ __name(() => Tt, "__wbindgen_number_get"), __wbindgen_number_new: /* @__PURE__ */ __name(() => qt, "__wbindgen_number_new"), __wbindgen_string_get: /* @__PURE__ */ __name(() => St, "__wbindgen_string_get"), __wbindgen_string_new: /* @__PURE__ */ __name(() => At, "__wbindgen_string_new"), __wbindgen_throw: /* @__PURE__ */ __name(() => It, "__wbindgen_throw"), debug_panic: /* @__PURE__ */ __name(() => W, "debug_panic"), getBuildTimeInfo: /* @__PURE__ */ __name(() => z, "getBuildTimeInfo") });
    module.exports = L(Et);
    var y = /* @__PURE__ */ __name(() => {
    }, "y");
    y.prototype = y;
    var r;
    function v(e) {
      r = e;
    }
    __name(v, "v");
    var s = 0;
    var m = null;
    function h() {
      return (m === null || m.byteLength === 0) && (m = new Uint8Array(r.memory.buffer)), m;
    }
    __name(h, "h");
    var N = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
    var T = new N("utf-8");
    var $3 = typeof T.encodeInto == "function" ? function(e, t) {
      return T.encodeInto(e, t);
    } : function(e, t) {
      const n = T.encode(e);
      return t.set(n), { read: e.length, written: n.length };
    };
    function f(e, t, n) {
      if (n === void 0) {
        const u = T.encode(e), a = t(u.length, 1) >>> 0;
        return h().subarray(a, a + u.length).set(u), s = u.length, a;
      }
      let o = e.length, _ = t(o, 1) >>> 0;
      const i = h();
      let c = 0;
      for (; c < o; c++) {
        const u = e.charCodeAt(c);
        if (u > 127) break;
        i[_ + c] = u;
      }
      if (c !== o) {
        c !== 0 && (e = e.slice(c)), _ = n(_, o, o = c + e.length * 3, 1) >>> 0;
        const u = h().subarray(_ + c, _ + o), a = $3(e, u);
        c += a.written, _ = n(_, o, c, 1) >>> 0;
      }
      return s = c, _;
    }
    __name(f, "f");
    var w = null;
    function g() {
      return (w === null || w.buffer.detached === true || w.buffer.detached === void 0 && w.buffer !== r.memory.buffer) && (w = new DataView(r.memory.buffer)), w;
    }
    __name(g, "g");
    function p(e) {
      const t = r.__externref_table_alloc();
      return r.__wbindgen_export_4.set(t, e), t;
    }
    __name(p, "p");
    function b(e, t) {
      try {
        return e.apply(this, t);
      } catch (n) {
        const o = p(n);
        r.__wbindgen_exn_store(o);
      }
    }
    __name(b, "b");
    var C = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
    var I = new C("utf-8", { ignoreBOM: true, fatal: true });
    I.decode();
    function q(e, t) {
      return e = e >>> 0, I.decode(h().subarray(e, e + t));
    }
    __name(q, "q");
    function l(e) {
      return e == null;
    }
    __name(l, "l");
    var E = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
    }, "register"), unregister: /* @__PURE__ */ __name(() => {
    }, "unregister") } : new FinalizationRegistry((e) => {
      r.__wbindgen_export_5.get(e.dtor)(e.a, e.b);
    });
    function V(e, t, n, o) {
      const _ = { a: e, b: t, cnt: 1, dtor: n }, i = /* @__PURE__ */ __name((...c) => {
        _.cnt++;
        const u = _.a;
        _.a = 0;
        try {
          return o(u, _.b, ...c);
        } finally {
          --_.cnt === 0 ? (r.__wbindgen_export_5.get(_.dtor)(u, _.b), E.unregister(_)) : _.a = u;
        }
      }, "i");
      return i.original = _, E.register(i, _, _), i;
    }
    __name(V, "V");
    function A(e) {
      const t = typeof e;
      if (t == "number" || t == "boolean" || e == null) return `${e}`;
      if (t == "string") return `"${e}"`;
      if (t == "symbol") {
        const _ = e.description;
        return _ == null ? "Symbol" : `Symbol(${_})`;
      }
      if (t == "function") {
        const _ = e.name;
        return typeof _ == "string" && _.length > 0 ? `Function(${_})` : "Function";
      }
      if (Array.isArray(e)) {
        const _ = e.length;
        let i = "[";
        _ > 0 && (i += A(e[0]));
        for (let c = 1; c < _; c++) i += ", " + A(e[c]);
        return i += "]", i;
      }
      const n = /\[object ([^\]]+)\]/.exec(toString.call(e));
      let o;
      if (n && n.length > 1) o = n[1];
      else return toString.call(e);
      if (o == "Object") try {
        return "Object(" + JSON.stringify(e) + ")";
      } catch {
        return "Object";
      }
      return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : o;
    }
    __name(A, "A");
    function O(e) {
      const t = r.__wbindgen_export_4.get(e);
      return r.__externref_table_dealloc(e), t;
    }
    __name(O, "O");
    function z() {
      return r.getBuildTimeInfo();
    }
    __name(z, "z");
    function W(e) {
      var t = l(e) ? 0 : f(e, r.__wbindgen_malloc, r.__wbindgen_realloc), n = s;
      const o = r.debug_panic(t, n);
      if (o[1]) throw O(o[0]);
    }
    __name(W, "W");
    function P(e, t, n) {
      r.closure561_externref_shim(e, t, n);
    }
    __name(P, "P");
    function G(e, t, n, o) {
      r.closure132_externref_shim(e, t, n, o);
    }
    __name(G, "G");
    var F = typeof FinalizationRegistry > "u" ? { register: /* @__PURE__ */ __name(() => {
    }, "register"), unregister: /* @__PURE__ */ __name(() => {
    }, "unregister") } : new FinalizationRegistry((e) => r.__wbg_queryengine_free(e >>> 0, 1));
    var Q = class {
      static {
        __name(this, "Q");
      }
      __destroy_into_raw() {
        const t = this.__wbg_ptr;
        return this.__wbg_ptr = 0, F.unregister(this), t;
      }
      free() {
        const t = this.__destroy_into_raw();
        r.__wbg_queryengine_free(t, 0);
      }
      constructor(t, n, o) {
        const _ = r.queryengine_new(t, n, o);
        if (_[2]) throw O(_[1]);
        return this.__wbg_ptr = _[0] >>> 0, F.register(this, this.__wbg_ptr, this), this;
      }
      connect(t, n) {
        const o = f(t, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, i = f(n, r.__wbindgen_malloc, r.__wbindgen_realloc), c = s;
        return r.queryengine_connect(this.__wbg_ptr, o, _, i, c);
      }
      disconnect(t, n) {
        const o = f(t, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s, i = f(n, r.__wbindgen_malloc, r.__wbindgen_realloc), c = s;
        return r.queryengine_disconnect(this.__wbg_ptr, o, _, i, c);
      }
      query(t, n, o, _) {
        const i = f(t, r.__wbindgen_malloc, r.__wbindgen_realloc), c = s, u = f(n, r.__wbindgen_malloc, r.__wbindgen_realloc), a = s;
        var d = l(o) ? 0 : f(o, r.__wbindgen_malloc, r.__wbindgen_realloc), x = s;
        const M = f(_, r.__wbindgen_malloc, r.__wbindgen_realloc), j = s;
        return r.queryengine_query(this.__wbg_ptr, i, c, u, a, d, x, M, j);
      }
      startTransaction(t, n, o) {
        const _ = f(t, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, c = f(n, r.__wbindgen_malloc, r.__wbindgen_realloc), u = s, a = f(o, r.__wbindgen_malloc, r.__wbindgen_realloc), d = s;
        return r.queryengine_startTransaction(this.__wbg_ptr, _, i, c, u, a, d);
      }
      commitTransaction(t, n, o) {
        const _ = f(t, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, c = f(n, r.__wbindgen_malloc, r.__wbindgen_realloc), u = s, a = f(o, r.__wbindgen_malloc, r.__wbindgen_realloc), d = s;
        return r.queryengine_commitTransaction(this.__wbg_ptr, _, i, c, u, a, d);
      }
      rollbackTransaction(t, n, o) {
        const _ = f(t, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s, c = f(n, r.__wbindgen_malloc, r.__wbindgen_realloc), u = s, a = f(o, r.__wbindgen_malloc, r.__wbindgen_realloc), d = s;
        return r.queryengine_rollbackTransaction(this.__wbg_ptr, _, i, c, u, a, d);
      }
      metrics(t) {
        const n = f(t, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s;
        return r.queryengine_metrics(this.__wbg_ptr, n, o);
      }
      trace(t) {
        const n = f(t, r.__wbindgen_malloc, r.__wbindgen_realloc), o = s;
        return r.queryengine_trace(this.__wbg_ptr, n, o);
      }
    };
    function H(e, t) {
      const n = String(t), o = f(n, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s;
      g().setInt32(e + 4 * 1, _, true), g().setInt32(e + 4 * 0, o, true);
    }
    __name(H, "H");
    function J(e) {
      return e.buffer;
    }
    __name(J, "J");
    function K() {
      return b(function(e, t) {
        return e.call(t);
      }, arguments);
    }
    __name(K, "K");
    function X() {
      return b(function(e, t, n) {
        return e.call(t, n);
      }, arguments);
    }
    __name(X, "X");
    function Y(e) {
      return e.crypto;
    }
    __name(Y, "Y");
    function Z(e) {
      return e.done;
    }
    __name(Z, "Z");
    function ee(e) {
      return Object.entries(e);
    }
    __name(ee, "ee");
    function te() {
      return b(function(e, t) {
        e.getRandomValues(t);
      }, arguments);
    }
    __name(te, "te");
    function ne(e) {
      return e.getTime();
    }
    __name(ne, "ne");
    function re() {
      return b(function(e, t) {
        return Reflect.get(e, t);
      }, arguments);
    }
    __name(re, "re");
    function oe(e, t) {
      return e[t >>> 0];
    }
    __name(oe, "oe");
    function _e() {
      return b(function(e, t) {
        return e[t];
      }, arguments);
    }
    __name(_e, "_e");
    function ce(e, t) {
      return e[t];
    }
    __name(ce, "ce");
    function ie() {
      return b(function(e, t) {
        return Reflect.has(e, t);
      }, arguments);
    }
    __name(ie, "ie");
    function ue(e) {
      let t;
      try {
        t = e instanceof ArrayBuffer;
      } catch {
        t = false;
      }
      return t;
    }
    __name(ue, "ue");
    function se(e) {
      let t;
      try {
        t = e instanceof Map;
      } catch {
        t = false;
      }
      return t;
    }
    __name(se, "se");
    function fe(e) {
      let t;
      try {
        t = e instanceof Promise;
      } catch {
        t = false;
      }
      return t;
    }
    __name(fe, "fe");
    function ae(e) {
      let t;
      try {
        t = e instanceof Uint8Array;
      } catch {
        t = false;
      }
      return t;
    }
    __name(ae, "ae");
    function be(e) {
      return Array.isArray(e);
    }
    __name(be, "be");
    function le(e) {
      return Number.isSafeInteger(e);
    }
    __name(le, "le");
    function ge() {
      return Symbol.iterator;
    }
    __name(ge, "ge");
    function de(e) {
      return Object.keys(e);
    }
    __name(de, "de");
    function we(e) {
      return e.length;
    }
    __name(we, "we");
    function pe(e) {
      return e.length;
    }
    __name(pe, "pe");
    function xe(e) {
      return e.msCrypto;
    }
    __name(xe, "xe");
    function ye() {
      return /* @__PURE__ */ new Date();
    }
    __name(ye, "ye");
    function me(e, t) {
      try {
        var n = { a: e, b: t }, o = /* @__PURE__ */ __name((i, c) => {
          const u = n.a;
          n.a = 0;
          try {
            return G(u, n.b, i, c);
          } finally {
            n.a = u;
          }
        }, "o");
        return new Promise(o);
      } finally {
        n.a = n.b = 0;
      }
    }
    __name(me, "me");
    function he() {
      return new Object();
    }
    __name(he, "he");
    function Te() {
      return /* @__PURE__ */ new Map();
    }
    __name(Te, "Te");
    function qe() {
      return new Array();
    }
    __name(qe, "qe");
    function Se(e) {
      return new Uint8Array(e);
    }
    __name(Se, "Se");
    function Ae(e, t) {
      return new y(q(e, t));
    }
    __name(Ae, "Ae");
    function Ie(e, t, n) {
      return new Uint8Array(e, t >>> 0, n >>> 0);
    }
    __name(Ie, "Ie");
    function Ee(e) {
      return new Uint8Array(e >>> 0);
    }
    __name(Ee, "Ee");
    function Oe(e) {
      return e.next;
    }
    __name(Oe, "Oe");
    function Fe() {
      return b(function(e) {
        return e.next();
      }, arguments);
    }
    __name(Fe, "Fe");
    function Me(e) {
      return e.node;
    }
    __name(Me, "Me");
    function je(e) {
      return e.now();
    }
    __name(je, "je");
    function ke() {
      return Date.now();
    }
    __name(ke, "ke");
    function De() {
      return b(function() {
        return Date.now();
      }, arguments);
    }
    __name(De, "De");
    function Re(e) {
      return e.process;
    }
    __name(Re, "Re");
    function Be(e, t) {
      return e.push(t);
    }
    __name(Be, "Be");
    function Ue(e) {
      return e.queueMicrotask;
    }
    __name(Ue, "Ue");
    function Le(e) {
      queueMicrotask(e);
    }
    __name(Le, "Le");
    function ve() {
      return b(function(e, t) {
        e.randomFillSync(t);
      }, arguments);
    }
    __name(ve, "ve");
    function Ne() {
      return b(function() {
        return module.require;
      }, arguments);
    }
    __name(Ne, "Ne");
    function $e(e) {
      return Promise.resolve(e);
    }
    __name($e, "$e");
    function Ce(e, t) {
      return setTimeout(e, t >>> 0);
    }
    __name(Ce, "Ce");
    function Ve(e, t, n) {
      e[t >>> 0] = n;
    }
    __name(Ve, "Ve");
    function ze(e, t, n) {
      e[t] = n;
    }
    __name(ze, "ze");
    function We(e, t, n) {
      e.set(t, n >>> 0);
    }
    __name(We, "We");
    function Pe(e, t, n) {
      return e.set(t, n);
    }
    __name(Pe, "Pe");
    function Ge() {
      return b(function(e, t, n) {
        return Reflect.set(e, t, n);
      }, arguments);
    }
    __name(Ge, "Ge");
    function Qe() {
      const e = typeof global > "u" ? null : global;
      return l(e) ? 0 : p(e);
    }
    __name(Qe, "Qe");
    function He() {
      const e = typeof globalThis > "u" ? null : globalThis;
      return l(e) ? 0 : p(e);
    }
    __name(He, "He");
    function Je() {
      const e = typeof self > "u" ? null : self;
      return l(e) ? 0 : p(e);
    }
    __name(Je, "Je");
    function Ke() {
      const e = typeof window > "u" ? null : window;
      return l(e) ? 0 : p(e);
    }
    __name(Ke, "Ke");
    function Xe(e, t, n) {
      return e.subarray(t >>> 0, n >>> 0);
    }
    __name(Xe, "Xe");
    function Ye(e, t) {
      return e.then(t);
    }
    __name(Ye, "Ye");
    function Ze(e, t, n) {
      return e.then(t, n);
    }
    __name(Ze, "Ze");
    function et(e) {
      return e.valueOf();
    }
    __name(et, "et");
    function tt(e) {
      return e.value;
    }
    __name(tt, "tt");
    function nt(e) {
      return e.versions;
    }
    __name(nt, "nt");
    function rt(e) {
      return +e;
    }
    __name(rt, "rt");
    function ot(e) {
      return e;
    }
    __name(ot, "ot");
    function _t(e) {
      return BigInt.asUintN(64, e);
    }
    __name(_t, "_t");
    function ct(e, t) {
      const n = t, o = typeof n == "bigint" ? n : void 0;
      g().setBigInt64(e + 8 * 1, l(o) ? BigInt(0) : o, true), g().setInt32(e + 4 * 0, !l(o), true);
    }
    __name(ct, "ct");
    function it(e) {
      const t = e;
      return typeof t == "boolean" ? t ? 1 : 0 : 2;
    }
    __name(it, "it");
    function ut(e) {
      const t = e.original;
      return t.cnt-- == 1 ? (t.a = 0, true) : false;
    }
    __name(ut, "ut");
    function st(e, t, n) {
      return V(e, t, 562, P);
    }
    __name(st, "st");
    function ft(e, t) {
      const n = A(t), o = f(n, r.__wbindgen_malloc, r.__wbindgen_realloc), _ = s;
      g().setInt32(e + 4 * 1, _, true), g().setInt32(e + 4 * 0, o, true);
    }
    __name(ft, "ft");
    function at(e, t) {
      return new Error(q(e, t));
    }
    __name(at, "at");
    function bt(e, t) {
      return e in t;
    }
    __name(bt, "bt");
    function lt() {
      const e = r.__wbindgen_export_4, t = e.grow(4);
      e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, true), e.set(t + 3, false);
    }
    __name(lt, "lt");
    function gt(e) {
      return typeof e == "bigint";
    }
    __name(gt, "gt");
    function dt(e) {
      return typeof e == "function";
    }
    __name(dt, "dt");
    function wt(e) {
      const t = e;
      return typeof t == "object" && t !== null;
    }
    __name(wt, "wt");
    function pt(e) {
      return typeof e == "string";
    }
    __name(pt, "pt");
    function xt(e) {
      return e === void 0;
    }
    __name(xt, "xt");
    function yt(e, t) {
      return e === t;
    }
    __name(yt, "yt");
    function mt(e, t) {
      return e == t;
    }
    __name(mt, "mt");
    function ht() {
      return r.memory;
    }
    __name(ht, "ht");
    function Tt(e, t) {
      const n = t, o = typeof n == "number" ? n : void 0;
      g().setFloat64(e + 8 * 1, l(o) ? 0 : o, true), g().setInt32(e + 4 * 0, !l(o), true);
    }
    __name(Tt, "Tt");
    function qt(e) {
      return e;
    }
    __name(qt, "qt");
    function St(e, t) {
      const n = t, o = typeof n == "string" ? n : void 0;
      var _ = l(o) ? 0 : f(o, r.__wbindgen_malloc, r.__wbindgen_realloc), i = s;
      g().setInt32(e + 4 * 1, i, true), g().setInt32(e + 4 * 0, _, true);
    }
    __name(St, "St");
    function At(e, t) {
      return q(e, t);
    }
    __name(At, "At");
    function It(e, t) {
      throw new Error(q(e, t));
    }
    __name(It, "It");
  }
});

// ../../node_modules/.pnpm/@prisma+client@6.8.2_prisma@6.8.2_typescript@5.8.3__typescript@5.8.3/node_modules/.prisma/client/wasm-worker-loader.mjs
var wasm_worker_loader_exports = {};
__export(wasm_worker_loader_exports, {
  default: () => wasm_worker_loader_default
});
var wasm_worker_loader_default;
var init_wasm_worker_loader = __esm({
  "../../node_modules/.pnpm/@prisma+client@6.8.2_prisma@6.8.2_typescript@5.8.3__typescript@5.8.3/node_modules/.prisma/client/wasm-worker-loader.mjs"() {
    init_modules_watch_stub();
    wasm_worker_loader_default = import("./9f000ec7717b2ec7ba542b916b5449710f4ee5b4-query_engine_bg.wasm");
  }
});

// ../../node_modules/.pnpm/@prisma+client@6.8.2_prisma@6.8.2_typescript@5.8.3__typescript@5.8.3/node_modules/.prisma/client/wasm.js
var require_wasm2 = __commonJS({
  "../../node_modules/.pnpm/@prisma+client@6.8.2_prisma@6.8.2_typescript@5.8.3__typescript@5.8.3/node_modules/.prisma/client/wasm.js"(exports) {
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    var {
      PrismaClientKnownRequestError: PrismaClientKnownRequestError2,
      PrismaClientUnknownRequestError: PrismaClientUnknownRequestError2,
      PrismaClientRustPanicError: PrismaClientRustPanicError2,
      PrismaClientInitializationError: PrismaClientInitializationError2,
      PrismaClientValidationError: PrismaClientValidationError2,
      getPrismaClient: getPrismaClient2,
      sqltag: sqltag2,
      empty: empty2,
      join: join2,
      raw: raw3,
      skip: skip2,
      Decimal: Decimal2,
      Debug: Debug3,
      objectEnumValues: objectEnumValues2,
      makeStrictEnum: makeStrictEnum2,
      Extensions: Extensions2,
      warnOnce: warnOnce2,
      defineDmmfProperty: defineDmmfProperty2,
      Public: Public2,
      getRuntime: getRuntime2,
      createParam: createParam2
    } = require_wasm();
    var Prisma = {};
    exports.Prisma = Prisma;
    exports.$Enums = {};
    Prisma.prismaVersion = {
      client: "6.8.2",
      engine: "2060c79ba17c6bb9f5823312b6f6b7f4a845738e"
    };
    Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError2;
    Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError2;
    Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError2;
    Prisma.PrismaClientInitializationError = PrismaClientInitializationError2;
    Prisma.PrismaClientValidationError = PrismaClientValidationError2;
    Prisma.Decimal = Decimal2;
    Prisma.sql = sqltag2;
    Prisma.empty = empty2;
    Prisma.join = join2;
    Prisma.raw = raw3;
    Prisma.validator = Public2.validator;
    Prisma.getExtensionContext = Extensions2.getExtensionContext;
    Prisma.defineExtension = Extensions2.defineExtension;
    Prisma.DbNull = objectEnumValues2.instances.DbNull;
    Prisma.JsonNull = objectEnumValues2.instances.JsonNull;
    Prisma.AnyNull = objectEnumValues2.instances.AnyNull;
    Prisma.NullTypes = {
      DbNull: objectEnumValues2.classes.DbNull,
      JsonNull: objectEnumValues2.classes.JsonNull,
      AnyNull: objectEnumValues2.classes.AnyNull
    };
    exports.Prisma.TransactionIsolationLevel = makeStrictEnum2({
      Serializable: "Serializable"
    });
    exports.Prisma.UserScalarFieldEnum = {
      id: "id",
      email: "email",
      name: "name",
      password: "password",
      createdAt: "createdAt"
    };
    exports.Prisma.EmailScalarFieldEnum = {
      id: "id",
      subject: "subject",
      body: "body",
      recipientEmail: "recipientEmail",
      createdAt: "createdAt"
    };
    exports.Prisma.DomainScalarFieldEnum = {
      id: "id",
      name: "name",
      createdAt: "createdAt"
    };
    exports.Prisma.UserEmailDomainScalarFieldEnum = {
      id: "id",
      userId: "userId",
      domainId: "domainId",
      emailName: "emailName",
      createdAt: "createdAt"
    };
    exports.Prisma.PointsScalarFieldEnum = {
      id: "id",
      userId: "userId",
      points: "points",
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    };
    exports.Prisma.SortOrder = {
      asc: "asc",
      desc: "desc"
    };
    exports.Prisma.NullsOrder = {
      first: "first",
      last: "last"
    };
    exports.Prisma.ModelName = {
      User: "User",
      Email: "Email",
      Domain: "Domain",
      UserEmailDomain: "UserEmailDomain",
      Points: "Points"
    };
    var config = {
      "generator": {
        "name": "client",
        "provider": {
          "fromEnvVar": null,
          "value": "prisma-client-js"
        },
        "output": {
          "value": "E:\\dev\\mw-amail\\node_modules\\.pnpm\\@prisma+client@6.8.2_prisma@6.8.2_typescript@5.8.3__typescript@5.8.3\\node_modules\\@prisma\\client",
          "fromEnvVar": null
        },
        "config": {
          "engineType": "library"
        },
        "binaryTargets": [
          {
            "fromEnvVar": null,
            "value": "windows",
            "native": true
          }
        ],
        "previewFeatures": [
          "driverAdapters"
        ],
        "sourceFilePath": "E:\\dev\\mw-amail\\packages\\workers-new\\prisma\\schema.prisma"
      },
      "relativeEnvPaths": {
        "rootEnvPath": null,
        "schemaEnvPath": "../../../../../../packages/workers-new/.env"
      },
      "relativePath": "../../../../../../packages/workers-new/prisma",
      "clientVersion": "6.8.2",
      "engineVersion": "2060c79ba17c6bb9f5823312b6f6b7f4a845738e",
      "datasourceNames": [
        "db"
      ],
      "activeProvider": "sqlite",
      "postinstall": false,
      "inlineDatasources": {
        "db": {
          "url": {
            "fromEnvVar": "DATABASE_URL",
            "value": null
          }
        }
      },
      "inlineSchema": 'generator client {\n  provider        = "prisma-client-js"\n  previewFeatures = ["driverAdapters"]\n}\n\ndatasource db {\n  provider = "sqlite" // d1 is sql base database\n  url      = env("DATABASE_URL")\n}\n\nmodel User {\n  id        String   @id @default(uuid()) // \u7528\u6237id\n  email     String   @unique // \u7528\u6237\u90AE\u7BB1\n  name      String? // \u7528\u6237\u6635\u79F0\n  password  String // \u7528\u6237\u5BC6\u7801 \n  createdAt DateTime @default(now()) // \u521B\u5EFA\u65F6\u95F4\n}\n\nmodel Email {\n  id             String   @id @default(uuid()) // \u90AE\u4EF6id\n  subject        String // \u90AE\u4EF6\u4E3B\u9898\n  body           String // \u90AE\u4EF6\u5185\u5BB9\n  recipientEmail String // \u6536\u4FE1\u4EBA\u90AE\u7BB1\n  createdAt      DateTime @default(now()) //\u90AE\u4EF6\u521B\u5EFA\u65F6\u95F4\n}\n\nmodel Domain {\n  id        String   @id @default(uuid()) // \u57DF\u540Did\n  name      String // \u57DF\u540D\u5730\u5740 \u4F8B\u5982 example.com\n  createdAt DateTime @default(now()) // \u57DF\u540D\u521B\u5EFA\u65F6\u95F4\n}\n\nmodel UserEmailDomain {\n  id        String   @id @default(uuid()) //  \u7528\u6237\u7684\u90AE\u7BB1\n  userId    String // \u7528\u6237id\n  domainId  String // \u57DF\u540Did\n  emailName String // \u90AE\u7BB1Name   \u4F8B\u5982Alice  \u5230\u65F6\u5019\u53EF\u4EE5\u62FC\u63A5Domain\u7684name \u5F62\u6210\u5B8C\u6574\u7684\u90AE\u7BB1 \u4F8B\u5982 Alice@example.com\n  createdAt DateTime @default(now()) // \u521B\u5EFA\u65F6\u95F4\n}\n\nmodel Points {\n  id        String   @id @default(uuid()) // id\n  userId    String // \u7528\u6237id\n  points    Int // \u79EF\u5206\n  createdAt DateTime @default(now()) // \u521B\u5EFA\u65F6\u95F4\n  updatedAt DateTime @default(now()) // \u66F4\u65B0\u65F6\u95F4\n}\n',
      "inlineSchemaHash": "6d0e4e8e79b1df8cbcf2d6a78a9de6bb84473c50a847e68fd956943f6c735379",
      "copyEngine": true
    };
    config.dirname = "/";
    config.runtimeDataModel = JSON.parse('{"models":{"User":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"password","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"}],"dbName":null},"Email":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"subject","kind":"scalar","type":"String"},{"name":"body","kind":"scalar","type":"String"},{"name":"recipientEmail","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"}],"dbName":null},"Domain":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"name","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"}],"dbName":null},"UserEmailDomain":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"domainId","kind":"scalar","type":"String"},{"name":"emailName","kind":"scalar","type":"String"},{"name":"createdAt","kind":"scalar","type":"DateTime"}],"dbName":null},"Points":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"userId","kind":"scalar","type":"String"},{"name":"points","kind":"scalar","type":"Int"},{"name":"createdAt","kind":"scalar","type":"DateTime"},{"name":"updatedAt","kind":"scalar","type":"DateTime"}],"dbName":null}},"enums":{},"types":{}}');
    defineDmmfProperty2(exports.Prisma, config.runtimeDataModel);
    config.engineWasm = {
      getRuntime: /* @__PURE__ */ __name(async () => require_query_engine_bg(), "getRuntime"),
      getQueryEngineWasmModule: /* @__PURE__ */ __name(async () => {
        const loader = (await Promise.resolve().then(() => (init_wasm_worker_loader(), wasm_worker_loader_exports))).default;
        const engine = (await loader).default;
        return engine;
      }, "getQueryEngineWasmModule")
    };
    config.compilerWasm = void 0;
    config.injectableEdgeEnv = () => ({
      parsed: {
        DATABASE_URL: typeof globalThis !== "undefined" && globalThis["DATABASE_URL"] || typeof process !== "undefined" && process.env && process.env.DATABASE_URL || void 0
      }
    });
    if (typeof globalThis !== "undefined" && globalThis["DEBUG"] || typeof process !== "undefined" && process.env && process.env.DEBUG || void 0) {
      Debug3.enable(typeof globalThis !== "undefined" && globalThis["DEBUG"] || typeof process !== "undefined" && process.env && process.env.DEBUG || void 0);
    }
    var PrismaClient2 = getPrismaClient2(config);
    exports.PrismaClient = PrismaClient2;
    Object.assign(exports, Prisma);
  }
});

// ../../node_modules/.pnpm/@prisma+client@6.8.2_prisma@6.8.2_typescript@5.8.3__typescript@5.8.3/node_modules/.prisma/client/default.js
var require_default = __commonJS({
  "../../node_modules/.pnpm/@prisma+client@6.8.2_prisma@6.8.2_typescript@5.8.3__typescript@5.8.3/node_modules/.prisma/client/default.js"(exports, module) {
    init_modules_watch_stub();
    module.exports = { ...require_wasm2() };
  }
});

// ../../node_modules/.pnpm/@prisma+client@6.8.2_prisma@6.8.2_typescript@5.8.3__typescript@5.8.3/node_modules/@prisma/client/default.js
var require_default2 = __commonJS({
  "../../node_modules/.pnpm/@prisma+client@6.8.2_prisma@6.8.2_typescript@5.8.3__typescript@5.8.3/node_modules/@prisma/client/default.js"(exports, module) {
    init_modules_watch_stub();
    module.exports = {
      ...require_default()
    };
  }
});

// (disabled):crypto
var require_crypto = __commonJS({
  "(disabled):crypto"() {
    init_modules_watch_stub();
  }
});

// .wrangler/tmp/bundle-jDBsIM/middleware-loader.entry.ts
init_modules_watch_stub();

// .wrangler/tmp/bundle-jDBsIM/middleware-insertion-facade.js
init_modules_watch_stub();

// main.ts
init_modules_watch_stub();

// ../../node_modules/.pnpm/postal-mime@2.4.4/node_modules/postal-mime/src/postal-mime.js
init_modules_watch_stub();

// ../../node_modules/.pnpm/postal-mime@2.4.4/node_modules/postal-mime/src/mime-node.js
init_modules_watch_stub();

// ../../node_modules/.pnpm/postal-mime@2.4.4/node_modules/postal-mime/src/decode-strings.js
init_modules_watch_stub();
var textEncoder = new TextEncoder();
var base64Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var base64Lookup = new Uint8Array(256);
for (i = 0; i < base64Chars.length; i++) {
  base64Lookup[base64Chars.charCodeAt(i)] = i;
}
var i;
function decodeBase64(base64) {
  let bufferLength = Math.ceil(base64.length / 4) * 3;
  const len = base64.length;
  let p = 0;
  if (base64.length % 4 === 3) {
    bufferLength--;
  } else if (base64.length % 4 === 2) {
    bufferLength -= 2;
  } else if (base64[base64.length - 1] === "=") {
    bufferLength--;
    if (base64[base64.length - 2] === "=") {
      bufferLength--;
    }
  }
  const arrayBuffer = new ArrayBuffer(bufferLength);
  const bytes = new Uint8Array(arrayBuffer);
  for (let i = 0; i < len; i += 4) {
    let encoded1 = base64Lookup[base64.charCodeAt(i)];
    let encoded2 = base64Lookup[base64.charCodeAt(i + 1)];
    let encoded3 = base64Lookup[base64.charCodeAt(i + 2)];
    let encoded4 = base64Lookup[base64.charCodeAt(i + 3)];
    bytes[p++] = encoded1 << 2 | encoded2 >> 4;
    bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
    bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
  }
  return arrayBuffer;
}
__name(decodeBase64, "decodeBase64");
function getDecoder(charset) {
  charset = charset || "utf8";
  let decoder;
  try {
    decoder = new TextDecoder(charset);
  } catch (err) {
    decoder = new TextDecoder("windows-1252");
  }
  return decoder;
}
__name(getDecoder, "getDecoder");
async function blobToArrayBuffer(blob) {
  if ("arrayBuffer" in blob) {
    return await blob.arrayBuffer();
  }
  const fr = new FileReader();
  return new Promise((resolve, reject) => {
    fr.onload = function(e) {
      resolve(e.target.result);
    };
    fr.onerror = function(e) {
      reject(fr.error);
    };
    fr.readAsArrayBuffer(blob);
  });
}
__name(blobToArrayBuffer, "blobToArrayBuffer");
function getHex(c) {
  if (c >= 48 && c <= 57 || c >= 97 && c <= 102 || c >= 65 && c <= 70) {
    return String.fromCharCode(c);
  }
  return false;
}
__name(getHex, "getHex");
function decodeWord(charset, encoding, str) {
  let splitPos = charset.indexOf("*");
  if (splitPos >= 0) {
    charset = charset.substr(0, splitPos);
  }
  encoding = encoding.toUpperCase();
  let byteStr;
  if (encoding === "Q") {
    str = str.replace(/=\s+([0-9a-fA-F])/g, "=$1").replace(/[_\s]/g, " ");
    let buf = textEncoder.encode(str);
    let encodedBytes = [];
    for (let i = 0, len = buf.length; i < len; i++) {
      let c = buf[i];
      if (i <= len - 2 && c === 61) {
        let c1 = getHex(buf[i + 1]);
        let c2 = getHex(buf[i + 2]);
        if (c1 && c2) {
          let c3 = parseInt(c1 + c2, 16);
          encodedBytes.push(c3);
          i += 2;
          continue;
        }
      }
      encodedBytes.push(c);
    }
    byteStr = new ArrayBuffer(encodedBytes.length);
    let dataView = new DataView(byteStr);
    for (let i = 0, len = encodedBytes.length; i < len; i++) {
      dataView.setUint8(i, encodedBytes[i]);
    }
  } else if (encoding === "B") {
    byteStr = decodeBase64(str.replace(/[^a-zA-Z0-9\+\/=]+/g, ""));
  } else {
    byteStr = textEncoder.encode(str);
  }
  return getDecoder(charset).decode(byteStr);
}
__name(decodeWord, "decodeWord");
function decodeWords(str) {
  let joinString = true;
  let done = false;
  while (!done) {
    let result = (str || "").toString().replace(/(=\?([^?]+)\?[Bb]\?([^?]*)\?=)\s*(?==\?([^?]+)\?[Bb]\?[^?]*\?=)/g, (match, left, chLeft, encodedLeftStr, chRight) => {
      if (!joinString) {
        return match;
      }
      if (chLeft === chRight && encodedLeftStr.length % 4 === 0 && !/=$/.test(encodedLeftStr)) {
        return left + "__\0JOIN\0__";
      }
      return match;
    }).replace(/(=\?([^?]+)\?[Qq]\?[^?]*\?=)\s*(?==\?([^?]+)\?[Qq]\?[^?]*\?=)/g, (match, left, chLeft, chRight) => {
      if (!joinString) {
        return match;
      }
      if (chLeft === chRight) {
        return left + "__\0JOIN\0__";
      }
      return match;
    }).replace(/(\?=)?__\x00JOIN\x00__(=\?([^?]+)\?[QqBb]\?)?/g, "").replace(/(=\?[^?]+\?[QqBb]\?[^?]*\?=)\s+(?==\?[^?]+\?[QqBb]\?[^?]*\?=)/g, "$1").replace(/=\?([\w_\-*]+)\?([QqBb])\?([^?]*)\?=/g, (m, charset, encoding, text) => decodeWord(charset, encoding, text));
    if (joinString && result.indexOf("\uFFFD") >= 0) {
      joinString = false;
    } else {
      return result;
    }
  }
}
__name(decodeWords, "decodeWords");
function decodeURIComponentWithCharset(encodedStr, charset) {
  charset = charset || "utf-8";
  let encodedBytes = [];
  for (let i = 0; i < encodedStr.length; i++) {
    let c = encodedStr.charAt(i);
    if (c === "%" && /^[a-f0-9]{2}/i.test(encodedStr.substr(i + 1, 2))) {
      let byte = encodedStr.substr(i + 1, 2);
      i += 2;
      encodedBytes.push(parseInt(byte, 16));
    } else if (c.charCodeAt(0) > 126) {
      c = textEncoder.encode(c);
      for (let j = 0; j < c.length; j++) {
        encodedBytes.push(c[j]);
      }
    } else {
      encodedBytes.push(c.charCodeAt(0));
    }
  }
  const byteStr = new ArrayBuffer(encodedBytes.length);
  const dataView = new DataView(byteStr);
  for (let i = 0, len = encodedBytes.length; i < len; i++) {
    dataView.setUint8(i, encodedBytes[i]);
  }
  return getDecoder(charset).decode(byteStr);
}
__name(decodeURIComponentWithCharset, "decodeURIComponentWithCharset");
function decodeParameterValueContinuations(header) {
  let paramKeys = /* @__PURE__ */ new Map();
  Object.keys(header.params).forEach((key) => {
    let match = key.match(/\*((\d+)\*?)?$/);
    if (!match) {
      return;
    }
    let actualKey = key.substr(0, match.index).toLowerCase();
    let nr = Number(match[2]) || 0;
    let paramVal;
    if (!paramKeys.has(actualKey)) {
      paramVal = {
        charset: false,
        values: []
      };
      paramKeys.set(actualKey, paramVal);
    } else {
      paramVal = paramKeys.get(actualKey);
    }
    let value = header.params[key];
    if (nr === 0 && match[0].charAt(match[0].length - 1) === "*" && (match = value.match(/^([^']*)'[^']*'(.*)$/))) {
      paramVal.charset = match[1] || "utf-8";
      value = match[2];
    }
    paramVal.values.push({ nr, value });
    delete header.params[key];
  });
  paramKeys.forEach((paramVal, key) => {
    header.params[key] = decodeURIComponentWithCharset(
      paramVal.values.sort((a, b) => a.nr - b.nr).map((a) => a.value).join(""),
      paramVal.charset
    );
  });
}
__name(decodeParameterValueContinuations, "decodeParameterValueContinuations");

// ../../node_modules/.pnpm/postal-mime@2.4.4/node_modules/postal-mime/src/pass-through-decoder.js
init_modules_watch_stub();
var PassThroughDecoder = class {
  static {
    __name(this, "PassThroughDecoder");
  }
  constructor() {
    this.chunks = [];
  }
  update(line) {
    this.chunks.push(line);
    this.chunks.push("\n");
  }
  finalize() {
    return blobToArrayBuffer(new Blob(this.chunks, { type: "application/octet-stream" }));
  }
};

// ../../node_modules/.pnpm/postal-mime@2.4.4/node_modules/postal-mime/src/base64-decoder.js
init_modules_watch_stub();
var Base64Decoder = class {
  static {
    __name(this, "Base64Decoder");
  }
  constructor(opts) {
    opts = opts || {};
    this.decoder = opts.decoder || new TextDecoder();
    this.maxChunkSize = 100 * 1024;
    this.chunks = [];
    this.remainder = "";
  }
  update(buffer) {
    let str = this.decoder.decode(buffer);
    if (/[^a-zA-Z0-9+\/]/.test(str)) {
      str = str.replace(/[^a-zA-Z0-9+\/]+/g, "");
    }
    this.remainder += str;
    if (this.remainder.length >= this.maxChunkSize) {
      let allowedBytes = Math.floor(this.remainder.length / 4) * 4;
      let base64Str;
      if (allowedBytes === this.remainder.length) {
        base64Str = this.remainder;
        this.remainder = "";
      } else {
        base64Str = this.remainder.substr(0, allowedBytes);
        this.remainder = this.remainder.substr(allowedBytes);
      }
      if (base64Str.length) {
        this.chunks.push(decodeBase64(base64Str));
      }
    }
  }
  finalize() {
    if (this.remainder && !/^=+$/.test(this.remainder)) {
      this.chunks.push(decodeBase64(this.remainder));
    }
    return blobToArrayBuffer(new Blob(this.chunks, { type: "application/octet-stream" }));
  }
};

// ../../node_modules/.pnpm/postal-mime@2.4.4/node_modules/postal-mime/src/qp-decoder.js
init_modules_watch_stub();
var QPDecoder = class {
  static {
    __name(this, "QPDecoder");
  }
  constructor(opts) {
    opts = opts || {};
    this.decoder = opts.decoder || new TextDecoder();
    this.maxChunkSize = 100 * 1024;
    this.remainder = "";
    this.chunks = [];
  }
  decodeQPBytes(encodedBytes) {
    let buf = new ArrayBuffer(encodedBytes.length);
    let dataView = new DataView(buf);
    for (let i = 0, len = encodedBytes.length; i < len; i++) {
      dataView.setUint8(i, parseInt(encodedBytes[i], 16));
    }
    return buf;
  }
  decodeChunks(str) {
    str = str.replace(/=\r?\n/g, "");
    let list = str.split(/(?==)/);
    let encodedBytes = [];
    for (let part of list) {
      if (part.charAt(0) !== "=") {
        if (encodedBytes.length) {
          this.chunks.push(this.decodeQPBytes(encodedBytes));
          encodedBytes = [];
        }
        this.chunks.push(part);
        continue;
      }
      if (part.length === 3) {
        encodedBytes.push(part.substr(1));
        continue;
      }
      if (part.length > 3) {
        encodedBytes.push(part.substr(1, 2));
        this.chunks.push(this.decodeQPBytes(encodedBytes));
        encodedBytes = [];
        part = part.substr(3);
        this.chunks.push(part);
      }
    }
    if (encodedBytes.length) {
      this.chunks.push(this.decodeQPBytes(encodedBytes));
      encodedBytes = [];
    }
  }
  update(buffer) {
    let str = this.decoder.decode(buffer) + "\n";
    str = this.remainder + str;
    if (str.length < this.maxChunkSize) {
      this.remainder = str;
      return;
    }
    this.remainder = "";
    let partialEnding = str.match(/=[a-fA-F0-9]?$/);
    if (partialEnding) {
      if (partialEnding.index === 0) {
        this.remainder = str;
        return;
      }
      this.remainder = str.substr(partialEnding.index);
      str = str.substr(0, partialEnding.index);
    }
    this.decodeChunks(str);
  }
  finalize() {
    if (this.remainder.length) {
      this.decodeChunks(this.remainder);
      this.remainder = "";
    }
    return blobToArrayBuffer(new Blob(this.chunks, { type: "application/octet-stream" }));
  }
};

// ../../node_modules/.pnpm/postal-mime@2.4.4/node_modules/postal-mime/src/mime-node.js
var MimeNode = class {
  static {
    __name(this, "MimeNode");
  }
  constructor(opts) {
    opts = opts || {};
    this.postalMime = opts.postalMime;
    this.root = !!opts.parentNode;
    this.childNodes = [];
    if (opts.parentNode) {
      opts.parentNode.childNodes.push(this);
    }
    this.state = "header";
    this.headerLines = [];
    this.contentType = {
      value: "text/plain",
      default: true
    };
    this.contentTransferEncoding = {
      value: "8bit"
    };
    this.contentDisposition = {
      value: ""
    };
    this.headers = [];
    this.contentDecoder = false;
  }
  setupContentDecoder(transferEncoding) {
    if (/base64/i.test(transferEncoding)) {
      this.contentDecoder = new Base64Decoder();
    } else if (/quoted-printable/i.test(transferEncoding)) {
      this.contentDecoder = new QPDecoder({ decoder: getDecoder(this.contentType.parsed.params.charset) });
    } else {
      this.contentDecoder = new PassThroughDecoder();
    }
  }
  async finalize() {
    if (this.state === "finished") {
      return;
    }
    if (this.state === "header") {
      this.processHeaders();
    }
    let boundaries = this.postalMime.boundaries;
    for (let i = boundaries.length - 1; i >= 0; i--) {
      let boundary = boundaries[i];
      if (boundary.node === this) {
        boundaries.splice(i, 1);
        break;
      }
    }
    await this.finalizeChildNodes();
    this.content = this.contentDecoder ? await this.contentDecoder.finalize() : null;
    this.state = "finished";
  }
  async finalizeChildNodes() {
    for (let childNode of this.childNodes) {
      await childNode.finalize();
    }
  }
  parseStructuredHeader(str) {
    let response2 = {
      value: false,
      params: {}
    };
    let key = false;
    let value = "";
    let stage = "value";
    let quote = false;
    let escaped = false;
    let chr;
    for (let i = 0, len = str.length; i < len; i++) {
      chr = str.charAt(i);
      switch (stage) {
        case "key":
          if (chr === "=") {
            key = value.trim().toLowerCase();
            stage = "value";
            value = "";
            break;
          }
          value += chr;
          break;
        case "value":
          if (escaped) {
            value += chr;
          } else if (chr === "\\") {
            escaped = true;
            continue;
          } else if (quote && chr === quote) {
            quote = false;
          } else if (!quote && chr === '"') {
            quote = chr;
          } else if (!quote && chr === ";") {
            if (key === false) {
              response2.value = value.trim();
            } else {
              response2.params[key] = value.trim();
            }
            stage = "key";
            value = "";
          } else {
            value += chr;
          }
          escaped = false;
          break;
      }
    }
    value = value.trim();
    if (stage === "value") {
      if (key === false) {
        response2.value = value;
      } else {
        response2.params[key] = value;
      }
    } else if (value) {
      response2.params[value.toLowerCase()] = "";
    }
    if (response2.value) {
      response2.value = response2.value.toLowerCase();
    }
    decodeParameterValueContinuations(response2);
    return response2;
  }
  decodeFlowedText(str, delSp) {
    return str.split(/\r?\n/).reduce((previousValue, currentValue) => {
      if (/ $/.test(previousValue) && !/(^|\n)-- $/.test(previousValue)) {
        if (delSp) {
          return previousValue.slice(0, -1) + currentValue;
        } else {
          return previousValue + currentValue;
        }
      } else {
        return previousValue + "\n" + currentValue;
      }
    }).replace(/^ /gm, "");
  }
  getTextContent() {
    if (!this.content) {
      return "";
    }
    let str = getDecoder(this.contentType.parsed.params.charset).decode(this.content);
    if (/^flowed$/i.test(this.contentType.parsed.params.format)) {
      str = this.decodeFlowedText(str, /^yes$/i.test(this.contentType.parsed.params.delsp));
    }
    return str;
  }
  processHeaders() {
    for (let i = this.headerLines.length - 1; i >= 0; i--) {
      let line = this.headerLines[i];
      if (i && /^\s/.test(line)) {
        this.headerLines[i - 1] += "\n" + line;
        this.headerLines.splice(i, 1);
      } else {
        line = line.replace(/\s+/g, " ");
        let sep = line.indexOf(":");
        let key = sep < 0 ? line.trim() : line.substr(0, sep).trim();
        let value = sep < 0 ? "" : line.substr(sep + 1).trim();
        this.headers.push({ key: key.toLowerCase(), originalKey: key, value });
        switch (key.toLowerCase()) {
          case "content-type":
            if (this.contentType.default) {
              this.contentType = { value, parsed: {} };
            }
            break;
          case "content-transfer-encoding":
            this.contentTransferEncoding = { value, parsed: {} };
            break;
          case "content-disposition":
            this.contentDisposition = { value, parsed: {} };
            break;
          case "content-id":
            this.contentId = value;
            break;
          case "content-description":
            this.contentDescription = value;
            break;
        }
      }
    }
    this.contentType.parsed = this.parseStructuredHeader(this.contentType.value);
    this.contentType.multipart = /^multipart\//i.test(this.contentType.parsed.value) ? this.contentType.parsed.value.substr(this.contentType.parsed.value.indexOf("/") + 1) : false;
    if (this.contentType.multipart && this.contentType.parsed.params.boundary) {
      this.postalMime.boundaries.push({
        value: textEncoder.encode(this.contentType.parsed.params.boundary),
        node: this
      });
    }
    this.contentDisposition.parsed = this.parseStructuredHeader(this.contentDisposition.value);
    this.contentTransferEncoding.encoding = this.contentTransferEncoding.value.toLowerCase().split(/[^\w-]/).shift();
    this.setupContentDecoder(this.contentTransferEncoding.encoding);
  }
  feed(line) {
    switch (this.state) {
      case "header":
        if (!line.length) {
          this.state = "body";
          return this.processHeaders();
        }
        this.headerLines.push(getDecoder().decode(line));
        break;
      case "body": {
        this.contentDecoder.update(line);
      }
    }
  }
};

// ../../node_modules/.pnpm/postal-mime@2.4.4/node_modules/postal-mime/src/text-format.js
init_modules_watch_stub();

// ../../node_modules/.pnpm/postal-mime@2.4.4/node_modules/postal-mime/src/html-entities.js
init_modules_watch_stub();
var htmlEntities = {
  "&AElig": "\xC6",
  "&AElig;": "\xC6",
  "&AMP": "&",
  "&AMP;": "&",
  "&Aacute": "\xC1",
  "&Aacute;": "\xC1",
  "&Abreve;": "\u0102",
  "&Acirc": "\xC2",
  "&Acirc;": "\xC2",
  "&Acy;": "\u0410",
  "&Afr;": "\u{1D504}",
  "&Agrave": "\xC0",
  "&Agrave;": "\xC0",
  "&Alpha;": "\u0391",
  "&Amacr;": "\u0100",
  "&And;": "\u2A53",
  "&Aogon;": "\u0104",
  "&Aopf;": "\u{1D538}",
  "&ApplyFunction;": "\u2061",
  "&Aring": "\xC5",
  "&Aring;": "\xC5",
  "&Ascr;": "\u{1D49C}",
  "&Assign;": "\u2254",
  "&Atilde": "\xC3",
  "&Atilde;": "\xC3",
  "&Auml": "\xC4",
  "&Auml;": "\xC4",
  "&Backslash;": "\u2216",
  "&Barv;": "\u2AE7",
  "&Barwed;": "\u2306",
  "&Bcy;": "\u0411",
  "&Because;": "\u2235",
  "&Bernoullis;": "\u212C",
  "&Beta;": "\u0392",
  "&Bfr;": "\u{1D505}",
  "&Bopf;": "\u{1D539}",
  "&Breve;": "\u02D8",
  "&Bscr;": "\u212C",
  "&Bumpeq;": "\u224E",
  "&CHcy;": "\u0427",
  "&COPY": "\xA9",
  "&COPY;": "\xA9",
  "&Cacute;": "\u0106",
  "&Cap;": "\u22D2",
  "&CapitalDifferentialD;": "\u2145",
  "&Cayleys;": "\u212D",
  "&Ccaron;": "\u010C",
  "&Ccedil": "\xC7",
  "&Ccedil;": "\xC7",
  "&Ccirc;": "\u0108",
  "&Cconint;": "\u2230",
  "&Cdot;": "\u010A",
  "&Cedilla;": "\xB8",
  "&CenterDot;": "\xB7",
  "&Cfr;": "\u212D",
  "&Chi;": "\u03A7",
  "&CircleDot;": "\u2299",
  "&CircleMinus;": "\u2296",
  "&CirclePlus;": "\u2295",
  "&CircleTimes;": "\u2297",
  "&ClockwiseContourIntegral;": "\u2232",
  "&CloseCurlyDoubleQuote;": "\u201D",
  "&CloseCurlyQuote;": "\u2019",
  "&Colon;": "\u2237",
  "&Colone;": "\u2A74",
  "&Congruent;": "\u2261",
  "&Conint;": "\u222F",
  "&ContourIntegral;": "\u222E",
  "&Copf;": "\u2102",
  "&Coproduct;": "\u2210",
  "&CounterClockwiseContourIntegral;": "\u2233",
  "&Cross;": "\u2A2F",
  "&Cscr;": "\u{1D49E}",
  "&Cup;": "\u22D3",
  "&CupCap;": "\u224D",
  "&DD;": "\u2145",
  "&DDotrahd;": "\u2911",
  "&DJcy;": "\u0402",
  "&DScy;": "\u0405",
  "&DZcy;": "\u040F",
  "&Dagger;": "\u2021",
  "&Darr;": "\u21A1",
  "&Dashv;": "\u2AE4",
  "&Dcaron;": "\u010E",
  "&Dcy;": "\u0414",
  "&Del;": "\u2207",
  "&Delta;": "\u0394",
  "&Dfr;": "\u{1D507}",
  "&DiacriticalAcute;": "\xB4",
  "&DiacriticalDot;": "\u02D9",
  "&DiacriticalDoubleAcute;": "\u02DD",
  "&DiacriticalGrave;": "`",
  "&DiacriticalTilde;": "\u02DC",
  "&Diamond;": "\u22C4",
  "&DifferentialD;": "\u2146",
  "&Dopf;": "\u{1D53B}",
  "&Dot;": "\xA8",
  "&DotDot;": "\u20DC",
  "&DotEqual;": "\u2250",
  "&DoubleContourIntegral;": "\u222F",
  "&DoubleDot;": "\xA8",
  "&DoubleDownArrow;": "\u21D3",
  "&DoubleLeftArrow;": "\u21D0",
  "&DoubleLeftRightArrow;": "\u21D4",
  "&DoubleLeftTee;": "\u2AE4",
  "&DoubleLongLeftArrow;": "\u27F8",
  "&DoubleLongLeftRightArrow;": "\u27FA",
  "&DoubleLongRightArrow;": "\u27F9",
  "&DoubleRightArrow;": "\u21D2",
  "&DoubleRightTee;": "\u22A8",
  "&DoubleUpArrow;": "\u21D1",
  "&DoubleUpDownArrow;": "\u21D5",
  "&DoubleVerticalBar;": "\u2225",
  "&DownArrow;": "\u2193",
  "&DownArrowBar;": "\u2913",
  "&DownArrowUpArrow;": "\u21F5",
  "&DownBreve;": "\u0311",
  "&DownLeftRightVector;": "\u2950",
  "&DownLeftTeeVector;": "\u295E",
  "&DownLeftVector;": "\u21BD",
  "&DownLeftVectorBar;": "\u2956",
  "&DownRightTeeVector;": "\u295F",
  "&DownRightVector;": "\u21C1",
  "&DownRightVectorBar;": "\u2957",
  "&DownTee;": "\u22A4",
  "&DownTeeArrow;": "\u21A7",
  "&Downarrow;": "\u21D3",
  "&Dscr;": "\u{1D49F}",
  "&Dstrok;": "\u0110",
  "&ENG;": "\u014A",
  "&ETH": "\xD0",
  "&ETH;": "\xD0",
  "&Eacute": "\xC9",
  "&Eacute;": "\xC9",
  "&Ecaron;": "\u011A",
  "&Ecirc": "\xCA",
  "&Ecirc;": "\xCA",
  "&Ecy;": "\u042D",
  "&Edot;": "\u0116",
  "&Efr;": "\u{1D508}",
  "&Egrave": "\xC8",
  "&Egrave;": "\xC8",
  "&Element;": "\u2208",
  "&Emacr;": "\u0112",
  "&EmptySmallSquare;": "\u25FB",
  "&EmptyVerySmallSquare;": "\u25AB",
  "&Eogon;": "\u0118",
  "&Eopf;": "\u{1D53C}",
  "&Epsilon;": "\u0395",
  "&Equal;": "\u2A75",
  "&EqualTilde;": "\u2242",
  "&Equilibrium;": "\u21CC",
  "&Escr;": "\u2130",
  "&Esim;": "\u2A73",
  "&Eta;": "\u0397",
  "&Euml": "\xCB",
  "&Euml;": "\xCB",
  "&Exists;": "\u2203",
  "&ExponentialE;": "\u2147",
  "&Fcy;": "\u0424",
  "&Ffr;": "\u{1D509}",
  "&FilledSmallSquare;": "\u25FC",
  "&FilledVerySmallSquare;": "\u25AA",
  "&Fopf;": "\u{1D53D}",
  "&ForAll;": "\u2200",
  "&Fouriertrf;": "\u2131",
  "&Fscr;": "\u2131",
  "&GJcy;": "\u0403",
  "&GT": ">",
  "&GT;": ">",
  "&Gamma;": "\u0393",
  "&Gammad;": "\u03DC",
  "&Gbreve;": "\u011E",
  "&Gcedil;": "\u0122",
  "&Gcirc;": "\u011C",
  "&Gcy;": "\u0413",
  "&Gdot;": "\u0120",
  "&Gfr;": "\u{1D50A}",
  "&Gg;": "\u22D9",
  "&Gopf;": "\u{1D53E}",
  "&GreaterEqual;": "\u2265",
  "&GreaterEqualLess;": "\u22DB",
  "&GreaterFullEqual;": "\u2267",
  "&GreaterGreater;": "\u2AA2",
  "&GreaterLess;": "\u2277",
  "&GreaterSlantEqual;": "\u2A7E",
  "&GreaterTilde;": "\u2273",
  "&Gscr;": "\u{1D4A2}",
  "&Gt;": "\u226B",
  "&HARDcy;": "\u042A",
  "&Hacek;": "\u02C7",
  "&Hat;": "^",
  "&Hcirc;": "\u0124",
  "&Hfr;": "\u210C",
  "&HilbertSpace;": "\u210B",
  "&Hopf;": "\u210D",
  "&HorizontalLine;": "\u2500",
  "&Hscr;": "\u210B",
  "&Hstrok;": "\u0126",
  "&HumpDownHump;": "\u224E",
  "&HumpEqual;": "\u224F",
  "&IEcy;": "\u0415",
  "&IJlig;": "\u0132",
  "&IOcy;": "\u0401",
  "&Iacute": "\xCD",
  "&Iacute;": "\xCD",
  "&Icirc": "\xCE",
  "&Icirc;": "\xCE",
  "&Icy;": "\u0418",
  "&Idot;": "\u0130",
  "&Ifr;": "\u2111",
  "&Igrave": "\xCC",
  "&Igrave;": "\xCC",
  "&Im;": "\u2111",
  "&Imacr;": "\u012A",
  "&ImaginaryI;": "\u2148",
  "&Implies;": "\u21D2",
  "&Int;": "\u222C",
  "&Integral;": "\u222B",
  "&Intersection;": "\u22C2",
  "&InvisibleComma;": "\u2063",
  "&InvisibleTimes;": "\u2062",
  "&Iogon;": "\u012E",
  "&Iopf;": "\u{1D540}",
  "&Iota;": "\u0399",
  "&Iscr;": "\u2110",
  "&Itilde;": "\u0128",
  "&Iukcy;": "\u0406",
  "&Iuml": "\xCF",
  "&Iuml;": "\xCF",
  "&Jcirc;": "\u0134",
  "&Jcy;": "\u0419",
  "&Jfr;": "\u{1D50D}",
  "&Jopf;": "\u{1D541}",
  "&Jscr;": "\u{1D4A5}",
  "&Jsercy;": "\u0408",
  "&Jukcy;": "\u0404",
  "&KHcy;": "\u0425",
  "&KJcy;": "\u040C",
  "&Kappa;": "\u039A",
  "&Kcedil;": "\u0136",
  "&Kcy;": "\u041A",
  "&Kfr;": "\u{1D50E}",
  "&Kopf;": "\u{1D542}",
  "&Kscr;": "\u{1D4A6}",
  "&LJcy;": "\u0409",
  "&LT": "<",
  "&LT;": "<",
  "&Lacute;": "\u0139",
  "&Lambda;": "\u039B",
  "&Lang;": "\u27EA",
  "&Laplacetrf;": "\u2112",
  "&Larr;": "\u219E",
  "&Lcaron;": "\u013D",
  "&Lcedil;": "\u013B",
  "&Lcy;": "\u041B",
  "&LeftAngleBracket;": "\u27E8",
  "&LeftArrow;": "\u2190",
  "&LeftArrowBar;": "\u21E4",
  "&LeftArrowRightArrow;": "\u21C6",
  "&LeftCeiling;": "\u2308",
  "&LeftDoubleBracket;": "\u27E6",
  "&LeftDownTeeVector;": "\u2961",
  "&LeftDownVector;": "\u21C3",
  "&LeftDownVectorBar;": "\u2959",
  "&LeftFloor;": "\u230A",
  "&LeftRightArrow;": "\u2194",
  "&LeftRightVector;": "\u294E",
  "&LeftTee;": "\u22A3",
  "&LeftTeeArrow;": "\u21A4",
  "&LeftTeeVector;": "\u295A",
  "&LeftTriangle;": "\u22B2",
  "&LeftTriangleBar;": "\u29CF",
  "&LeftTriangleEqual;": "\u22B4",
  "&LeftUpDownVector;": "\u2951",
  "&LeftUpTeeVector;": "\u2960",
  "&LeftUpVector;": "\u21BF",
  "&LeftUpVectorBar;": "\u2958",
  "&LeftVector;": "\u21BC",
  "&LeftVectorBar;": "\u2952",
  "&Leftarrow;": "\u21D0",
  "&Leftrightarrow;": "\u21D4",
  "&LessEqualGreater;": "\u22DA",
  "&LessFullEqual;": "\u2266",
  "&LessGreater;": "\u2276",
  "&LessLess;": "\u2AA1",
  "&LessSlantEqual;": "\u2A7D",
  "&LessTilde;": "\u2272",
  "&Lfr;": "\u{1D50F}",
  "&Ll;": "\u22D8",
  "&Lleftarrow;": "\u21DA",
  "&Lmidot;": "\u013F",
  "&LongLeftArrow;": "\u27F5",
  "&LongLeftRightArrow;": "\u27F7",
  "&LongRightArrow;": "\u27F6",
  "&Longleftarrow;": "\u27F8",
  "&Longleftrightarrow;": "\u27FA",
  "&Longrightarrow;": "\u27F9",
  "&Lopf;": "\u{1D543}",
  "&LowerLeftArrow;": "\u2199",
  "&LowerRightArrow;": "\u2198",
  "&Lscr;": "\u2112",
  "&Lsh;": "\u21B0",
  "&Lstrok;": "\u0141",
  "&Lt;": "\u226A",
  "&Map;": "\u2905",
  "&Mcy;": "\u041C",
  "&MediumSpace;": "\u205F",
  "&Mellintrf;": "\u2133",
  "&Mfr;": "\u{1D510}",
  "&MinusPlus;": "\u2213",
  "&Mopf;": "\u{1D544}",
  "&Mscr;": "\u2133",
  "&Mu;": "\u039C",
  "&NJcy;": "\u040A",
  "&Nacute;": "\u0143",
  "&Ncaron;": "\u0147",
  "&Ncedil;": "\u0145",
  "&Ncy;": "\u041D",
  "&NegativeMediumSpace;": "\u200B",
  "&NegativeThickSpace;": "\u200B",
  "&NegativeThinSpace;": "\u200B",
  "&NegativeVeryThinSpace;": "\u200B",
  "&NestedGreaterGreater;": "\u226B",
  "&NestedLessLess;": "\u226A",
  "&NewLine;": "\n",
  "&Nfr;": "\u{1D511}",
  "&NoBreak;": "\u2060",
  "&NonBreakingSpace;": "\xA0",
  "&Nopf;": "\u2115",
  "&Not;": "\u2AEC",
  "&NotCongruent;": "\u2262",
  "&NotCupCap;": "\u226D",
  "&NotDoubleVerticalBar;": "\u2226",
  "&NotElement;": "\u2209",
  "&NotEqual;": "\u2260",
  "&NotEqualTilde;": "\u2242\u0338",
  "&NotExists;": "\u2204",
  "&NotGreater;": "\u226F",
  "&NotGreaterEqual;": "\u2271",
  "&NotGreaterFullEqual;": "\u2267\u0338",
  "&NotGreaterGreater;": "\u226B\u0338",
  "&NotGreaterLess;": "\u2279",
  "&NotGreaterSlantEqual;": "\u2A7E\u0338",
  "&NotGreaterTilde;": "\u2275",
  "&NotHumpDownHump;": "\u224E\u0338",
  "&NotHumpEqual;": "\u224F\u0338",
  "&NotLeftTriangle;": "\u22EA",
  "&NotLeftTriangleBar;": "\u29CF\u0338",
  "&NotLeftTriangleEqual;": "\u22EC",
  "&NotLess;": "\u226E",
  "&NotLessEqual;": "\u2270",
  "&NotLessGreater;": "\u2278",
  "&NotLessLess;": "\u226A\u0338",
  "&NotLessSlantEqual;": "\u2A7D\u0338",
  "&NotLessTilde;": "\u2274",
  "&NotNestedGreaterGreater;": "\u2AA2\u0338",
  "&NotNestedLessLess;": "\u2AA1\u0338",
  "&NotPrecedes;": "\u2280",
  "&NotPrecedesEqual;": "\u2AAF\u0338",
  "&NotPrecedesSlantEqual;": "\u22E0",
  "&NotReverseElement;": "\u220C",
  "&NotRightTriangle;": "\u22EB",
  "&NotRightTriangleBar;": "\u29D0\u0338",
  "&NotRightTriangleEqual;": "\u22ED",
  "&NotSquareSubset;": "\u228F\u0338",
  "&NotSquareSubsetEqual;": "\u22E2",
  "&NotSquareSuperset;": "\u2290\u0338",
  "&NotSquareSupersetEqual;": "\u22E3",
  "&NotSubset;": "\u2282\u20D2",
  "&NotSubsetEqual;": "\u2288",
  "&NotSucceeds;": "\u2281",
  "&NotSucceedsEqual;": "\u2AB0\u0338",
  "&NotSucceedsSlantEqual;": "\u22E1",
  "&NotSucceedsTilde;": "\u227F\u0338",
  "&NotSuperset;": "\u2283\u20D2",
  "&NotSupersetEqual;": "\u2289",
  "&NotTilde;": "\u2241",
  "&NotTildeEqual;": "\u2244",
  "&NotTildeFullEqual;": "\u2247",
  "&NotTildeTilde;": "\u2249",
  "&NotVerticalBar;": "\u2224",
  "&Nscr;": "\u{1D4A9}",
  "&Ntilde": "\xD1",
  "&Ntilde;": "\xD1",
  "&Nu;": "\u039D",
  "&OElig;": "\u0152",
  "&Oacute": "\xD3",
  "&Oacute;": "\xD3",
  "&Ocirc": "\xD4",
  "&Ocirc;": "\xD4",
  "&Ocy;": "\u041E",
  "&Odblac;": "\u0150",
  "&Ofr;": "\u{1D512}",
  "&Ograve": "\xD2",
  "&Ograve;": "\xD2",
  "&Omacr;": "\u014C",
  "&Omega;": "\u03A9",
  "&Omicron;": "\u039F",
  "&Oopf;": "\u{1D546}",
  "&OpenCurlyDoubleQuote;": "\u201C",
  "&OpenCurlyQuote;": "\u2018",
  "&Or;": "\u2A54",
  "&Oscr;": "\u{1D4AA}",
  "&Oslash": "\xD8",
  "&Oslash;": "\xD8",
  "&Otilde": "\xD5",
  "&Otilde;": "\xD5",
  "&Otimes;": "\u2A37",
  "&Ouml": "\xD6",
  "&Ouml;": "\xD6",
  "&OverBar;": "\u203E",
  "&OverBrace;": "\u23DE",
  "&OverBracket;": "\u23B4",
  "&OverParenthesis;": "\u23DC",
  "&PartialD;": "\u2202",
  "&Pcy;": "\u041F",
  "&Pfr;": "\u{1D513}",
  "&Phi;": "\u03A6",
  "&Pi;": "\u03A0",
  "&PlusMinus;": "\xB1",
  "&Poincareplane;": "\u210C",
  "&Popf;": "\u2119",
  "&Pr;": "\u2ABB",
  "&Precedes;": "\u227A",
  "&PrecedesEqual;": "\u2AAF",
  "&PrecedesSlantEqual;": "\u227C",
  "&PrecedesTilde;": "\u227E",
  "&Prime;": "\u2033",
  "&Product;": "\u220F",
  "&Proportion;": "\u2237",
  "&Proportional;": "\u221D",
  "&Pscr;": "\u{1D4AB}",
  "&Psi;": "\u03A8",
  "&QUOT": '"',
  "&QUOT;": '"',
  "&Qfr;": "\u{1D514}",
  "&Qopf;": "\u211A",
  "&Qscr;": "\u{1D4AC}",
  "&RBarr;": "\u2910",
  "&REG": "\xAE",
  "&REG;": "\xAE",
  "&Racute;": "\u0154",
  "&Rang;": "\u27EB",
  "&Rarr;": "\u21A0",
  "&Rarrtl;": "\u2916",
  "&Rcaron;": "\u0158",
  "&Rcedil;": "\u0156",
  "&Rcy;": "\u0420",
  "&Re;": "\u211C",
  "&ReverseElement;": "\u220B",
  "&ReverseEquilibrium;": "\u21CB",
  "&ReverseUpEquilibrium;": "\u296F",
  "&Rfr;": "\u211C",
  "&Rho;": "\u03A1",
  "&RightAngleBracket;": "\u27E9",
  "&RightArrow;": "\u2192",
  "&RightArrowBar;": "\u21E5",
  "&RightArrowLeftArrow;": "\u21C4",
  "&RightCeiling;": "\u2309",
  "&RightDoubleBracket;": "\u27E7",
  "&RightDownTeeVector;": "\u295D",
  "&RightDownVector;": "\u21C2",
  "&RightDownVectorBar;": "\u2955",
  "&RightFloor;": "\u230B",
  "&RightTee;": "\u22A2",
  "&RightTeeArrow;": "\u21A6",
  "&RightTeeVector;": "\u295B",
  "&RightTriangle;": "\u22B3",
  "&RightTriangleBar;": "\u29D0",
  "&RightTriangleEqual;": "\u22B5",
  "&RightUpDownVector;": "\u294F",
  "&RightUpTeeVector;": "\u295C",
  "&RightUpVector;": "\u21BE",
  "&RightUpVectorBar;": "\u2954",
  "&RightVector;": "\u21C0",
  "&RightVectorBar;": "\u2953",
  "&Rightarrow;": "\u21D2",
  "&Ropf;": "\u211D",
  "&RoundImplies;": "\u2970",
  "&Rrightarrow;": "\u21DB",
  "&Rscr;": "\u211B",
  "&Rsh;": "\u21B1",
  "&RuleDelayed;": "\u29F4",
  "&SHCHcy;": "\u0429",
  "&SHcy;": "\u0428",
  "&SOFTcy;": "\u042C",
  "&Sacute;": "\u015A",
  "&Sc;": "\u2ABC",
  "&Scaron;": "\u0160",
  "&Scedil;": "\u015E",
  "&Scirc;": "\u015C",
  "&Scy;": "\u0421",
  "&Sfr;": "\u{1D516}",
  "&ShortDownArrow;": "\u2193",
  "&ShortLeftArrow;": "\u2190",
  "&ShortRightArrow;": "\u2192",
  "&ShortUpArrow;": "\u2191",
  "&Sigma;": "\u03A3",
  "&SmallCircle;": "\u2218",
  "&Sopf;": "\u{1D54A}",
  "&Sqrt;": "\u221A",
  "&Square;": "\u25A1",
  "&SquareIntersection;": "\u2293",
  "&SquareSubset;": "\u228F",
  "&SquareSubsetEqual;": "\u2291",
  "&SquareSuperset;": "\u2290",
  "&SquareSupersetEqual;": "\u2292",
  "&SquareUnion;": "\u2294",
  "&Sscr;": "\u{1D4AE}",
  "&Star;": "\u22C6",
  "&Sub;": "\u22D0",
  "&Subset;": "\u22D0",
  "&SubsetEqual;": "\u2286",
  "&Succeeds;": "\u227B",
  "&SucceedsEqual;": "\u2AB0",
  "&SucceedsSlantEqual;": "\u227D",
  "&SucceedsTilde;": "\u227F",
  "&SuchThat;": "\u220B",
  "&Sum;": "\u2211",
  "&Sup;": "\u22D1",
  "&Superset;": "\u2283",
  "&SupersetEqual;": "\u2287",
  "&Supset;": "\u22D1",
  "&THORN": "\xDE",
  "&THORN;": "\xDE",
  "&TRADE;": "\u2122",
  "&TSHcy;": "\u040B",
  "&TScy;": "\u0426",
  "&Tab;": "	",
  "&Tau;": "\u03A4",
  "&Tcaron;": "\u0164",
  "&Tcedil;": "\u0162",
  "&Tcy;": "\u0422",
  "&Tfr;": "\u{1D517}",
  "&Therefore;": "\u2234",
  "&Theta;": "\u0398",
  "&ThickSpace;": "\u205F\u200A",
  "&ThinSpace;": "\u2009",
  "&Tilde;": "\u223C",
  "&TildeEqual;": "\u2243",
  "&TildeFullEqual;": "\u2245",
  "&TildeTilde;": "\u2248",
  "&Topf;": "\u{1D54B}",
  "&TripleDot;": "\u20DB",
  "&Tscr;": "\u{1D4AF}",
  "&Tstrok;": "\u0166",
  "&Uacute": "\xDA",
  "&Uacute;": "\xDA",
  "&Uarr;": "\u219F",
  "&Uarrocir;": "\u2949",
  "&Ubrcy;": "\u040E",
  "&Ubreve;": "\u016C",
  "&Ucirc": "\xDB",
  "&Ucirc;": "\xDB",
  "&Ucy;": "\u0423",
  "&Udblac;": "\u0170",
  "&Ufr;": "\u{1D518}",
  "&Ugrave": "\xD9",
  "&Ugrave;": "\xD9",
  "&Umacr;": "\u016A",
  "&UnderBar;": "_",
  "&UnderBrace;": "\u23DF",
  "&UnderBracket;": "\u23B5",
  "&UnderParenthesis;": "\u23DD",
  "&Union;": "\u22C3",
  "&UnionPlus;": "\u228E",
  "&Uogon;": "\u0172",
  "&Uopf;": "\u{1D54C}",
  "&UpArrow;": "\u2191",
  "&UpArrowBar;": "\u2912",
  "&UpArrowDownArrow;": "\u21C5",
  "&UpDownArrow;": "\u2195",
  "&UpEquilibrium;": "\u296E",
  "&UpTee;": "\u22A5",
  "&UpTeeArrow;": "\u21A5",
  "&Uparrow;": "\u21D1",
  "&Updownarrow;": "\u21D5",
  "&UpperLeftArrow;": "\u2196",
  "&UpperRightArrow;": "\u2197",
  "&Upsi;": "\u03D2",
  "&Upsilon;": "\u03A5",
  "&Uring;": "\u016E",
  "&Uscr;": "\u{1D4B0}",
  "&Utilde;": "\u0168",
  "&Uuml": "\xDC",
  "&Uuml;": "\xDC",
  "&VDash;": "\u22AB",
  "&Vbar;": "\u2AEB",
  "&Vcy;": "\u0412",
  "&Vdash;": "\u22A9",
  "&Vdashl;": "\u2AE6",
  "&Vee;": "\u22C1",
  "&Verbar;": "\u2016",
  "&Vert;": "\u2016",
  "&VerticalBar;": "\u2223",
  "&VerticalLine;": "|",
  "&VerticalSeparator;": "\u2758",
  "&VerticalTilde;": "\u2240",
  "&VeryThinSpace;": "\u200A",
  "&Vfr;": "\u{1D519}",
  "&Vopf;": "\u{1D54D}",
  "&Vscr;": "\u{1D4B1}",
  "&Vvdash;": "\u22AA",
  "&Wcirc;": "\u0174",
  "&Wedge;": "\u22C0",
  "&Wfr;": "\u{1D51A}",
  "&Wopf;": "\u{1D54E}",
  "&Wscr;": "\u{1D4B2}",
  "&Xfr;": "\u{1D51B}",
  "&Xi;": "\u039E",
  "&Xopf;": "\u{1D54F}",
  "&Xscr;": "\u{1D4B3}",
  "&YAcy;": "\u042F",
  "&YIcy;": "\u0407",
  "&YUcy;": "\u042E",
  "&Yacute": "\xDD",
  "&Yacute;": "\xDD",
  "&Ycirc;": "\u0176",
  "&Ycy;": "\u042B",
  "&Yfr;": "\u{1D51C}",
  "&Yopf;": "\u{1D550}",
  "&Yscr;": "\u{1D4B4}",
  "&Yuml;": "\u0178",
  "&ZHcy;": "\u0416",
  "&Zacute;": "\u0179",
  "&Zcaron;": "\u017D",
  "&Zcy;": "\u0417",
  "&Zdot;": "\u017B",
  "&ZeroWidthSpace;": "\u200B",
  "&Zeta;": "\u0396",
  "&Zfr;": "\u2128",
  "&Zopf;": "\u2124",
  "&Zscr;": "\u{1D4B5}",
  "&aacute": "\xE1",
  "&aacute;": "\xE1",
  "&abreve;": "\u0103",
  "&ac;": "\u223E",
  "&acE;": "\u223E\u0333",
  "&acd;": "\u223F",
  "&acirc": "\xE2",
  "&acirc;": "\xE2",
  "&acute": "\xB4",
  "&acute;": "\xB4",
  "&acy;": "\u0430",
  "&aelig": "\xE6",
  "&aelig;": "\xE6",
  "&af;": "\u2061",
  "&afr;": "\u{1D51E}",
  "&agrave": "\xE0",
  "&agrave;": "\xE0",
  "&alefsym;": "\u2135",
  "&aleph;": "\u2135",
  "&alpha;": "\u03B1",
  "&amacr;": "\u0101",
  "&amalg;": "\u2A3F",
  "&amp": "&",
  "&amp;": "&",
  "&and;": "\u2227",
  "&andand;": "\u2A55",
  "&andd;": "\u2A5C",
  "&andslope;": "\u2A58",
  "&andv;": "\u2A5A",
  "&ang;": "\u2220",
  "&ange;": "\u29A4",
  "&angle;": "\u2220",
  "&angmsd;": "\u2221",
  "&angmsdaa;": "\u29A8",
  "&angmsdab;": "\u29A9",
  "&angmsdac;": "\u29AA",
  "&angmsdad;": "\u29AB",
  "&angmsdae;": "\u29AC",
  "&angmsdaf;": "\u29AD",
  "&angmsdag;": "\u29AE",
  "&angmsdah;": "\u29AF",
  "&angrt;": "\u221F",
  "&angrtvb;": "\u22BE",
  "&angrtvbd;": "\u299D",
  "&angsph;": "\u2222",
  "&angst;": "\xC5",
  "&angzarr;": "\u237C",
  "&aogon;": "\u0105",
  "&aopf;": "\u{1D552}",
  "&ap;": "\u2248",
  "&apE;": "\u2A70",
  "&apacir;": "\u2A6F",
  "&ape;": "\u224A",
  "&apid;": "\u224B",
  "&apos;": "'",
  "&approx;": "\u2248",
  "&approxeq;": "\u224A",
  "&aring": "\xE5",
  "&aring;": "\xE5",
  "&ascr;": "\u{1D4B6}",
  "&ast;": "*",
  "&asymp;": "\u2248",
  "&asympeq;": "\u224D",
  "&atilde": "\xE3",
  "&atilde;": "\xE3",
  "&auml": "\xE4",
  "&auml;": "\xE4",
  "&awconint;": "\u2233",
  "&awint;": "\u2A11",
  "&bNot;": "\u2AED",
  "&backcong;": "\u224C",
  "&backepsilon;": "\u03F6",
  "&backprime;": "\u2035",
  "&backsim;": "\u223D",
  "&backsimeq;": "\u22CD",
  "&barvee;": "\u22BD",
  "&barwed;": "\u2305",
  "&barwedge;": "\u2305",
  "&bbrk;": "\u23B5",
  "&bbrktbrk;": "\u23B6",
  "&bcong;": "\u224C",
  "&bcy;": "\u0431",
  "&bdquo;": "\u201E",
  "&becaus;": "\u2235",
  "&because;": "\u2235",
  "&bemptyv;": "\u29B0",
  "&bepsi;": "\u03F6",
  "&bernou;": "\u212C",
  "&beta;": "\u03B2",
  "&beth;": "\u2136",
  "&between;": "\u226C",
  "&bfr;": "\u{1D51F}",
  "&bigcap;": "\u22C2",
  "&bigcirc;": "\u25EF",
  "&bigcup;": "\u22C3",
  "&bigodot;": "\u2A00",
  "&bigoplus;": "\u2A01",
  "&bigotimes;": "\u2A02",
  "&bigsqcup;": "\u2A06",
  "&bigstar;": "\u2605",
  "&bigtriangledown;": "\u25BD",
  "&bigtriangleup;": "\u25B3",
  "&biguplus;": "\u2A04",
  "&bigvee;": "\u22C1",
  "&bigwedge;": "\u22C0",
  "&bkarow;": "\u290D",
  "&blacklozenge;": "\u29EB",
  "&blacksquare;": "\u25AA",
  "&blacktriangle;": "\u25B4",
  "&blacktriangledown;": "\u25BE",
  "&blacktriangleleft;": "\u25C2",
  "&blacktriangleright;": "\u25B8",
  "&blank;": "\u2423",
  "&blk12;": "\u2592",
  "&blk14;": "\u2591",
  "&blk34;": "\u2593",
  "&block;": "\u2588",
  "&bne;": "=\u20E5",
  "&bnequiv;": "\u2261\u20E5",
  "&bnot;": "\u2310",
  "&bopf;": "\u{1D553}",
  "&bot;": "\u22A5",
  "&bottom;": "\u22A5",
  "&bowtie;": "\u22C8",
  "&boxDL;": "\u2557",
  "&boxDR;": "\u2554",
  "&boxDl;": "\u2556",
  "&boxDr;": "\u2553",
  "&boxH;": "\u2550",
  "&boxHD;": "\u2566",
  "&boxHU;": "\u2569",
  "&boxHd;": "\u2564",
  "&boxHu;": "\u2567",
  "&boxUL;": "\u255D",
  "&boxUR;": "\u255A",
  "&boxUl;": "\u255C",
  "&boxUr;": "\u2559",
  "&boxV;": "\u2551",
  "&boxVH;": "\u256C",
  "&boxVL;": "\u2563",
  "&boxVR;": "\u2560",
  "&boxVh;": "\u256B",
  "&boxVl;": "\u2562",
  "&boxVr;": "\u255F",
  "&boxbox;": "\u29C9",
  "&boxdL;": "\u2555",
  "&boxdR;": "\u2552",
  "&boxdl;": "\u2510",
  "&boxdr;": "\u250C",
  "&boxh;": "\u2500",
  "&boxhD;": "\u2565",
  "&boxhU;": "\u2568",
  "&boxhd;": "\u252C",
  "&boxhu;": "\u2534",
  "&boxminus;": "\u229F",
  "&boxplus;": "\u229E",
  "&boxtimes;": "\u22A0",
  "&boxuL;": "\u255B",
  "&boxuR;": "\u2558",
  "&boxul;": "\u2518",
  "&boxur;": "\u2514",
  "&boxv;": "\u2502",
  "&boxvH;": "\u256A",
  "&boxvL;": "\u2561",
  "&boxvR;": "\u255E",
  "&boxvh;": "\u253C",
  "&boxvl;": "\u2524",
  "&boxvr;": "\u251C",
  "&bprime;": "\u2035",
  "&breve;": "\u02D8",
  "&brvbar": "\xA6",
  "&brvbar;": "\xA6",
  "&bscr;": "\u{1D4B7}",
  "&bsemi;": "\u204F",
  "&bsim;": "\u223D",
  "&bsime;": "\u22CD",
  "&bsol;": "\\",
  "&bsolb;": "\u29C5",
  "&bsolhsub;": "\u27C8",
  "&bull;": "\u2022",
  "&bullet;": "\u2022",
  "&bump;": "\u224E",
  "&bumpE;": "\u2AAE",
  "&bumpe;": "\u224F",
  "&bumpeq;": "\u224F",
  "&cacute;": "\u0107",
  "&cap;": "\u2229",
  "&capand;": "\u2A44",
  "&capbrcup;": "\u2A49",
  "&capcap;": "\u2A4B",
  "&capcup;": "\u2A47",
  "&capdot;": "\u2A40",
  "&caps;": "\u2229\uFE00",
  "&caret;": "\u2041",
  "&caron;": "\u02C7",
  "&ccaps;": "\u2A4D",
  "&ccaron;": "\u010D",
  "&ccedil": "\xE7",
  "&ccedil;": "\xE7",
  "&ccirc;": "\u0109",
  "&ccups;": "\u2A4C",
  "&ccupssm;": "\u2A50",
  "&cdot;": "\u010B",
  "&cedil": "\xB8",
  "&cedil;": "\xB8",
  "&cemptyv;": "\u29B2",
  "&cent": "\xA2",
  "&cent;": "\xA2",
  "&centerdot;": "\xB7",
  "&cfr;": "\u{1D520}",
  "&chcy;": "\u0447",
  "&check;": "\u2713",
  "&checkmark;": "\u2713",
  "&chi;": "\u03C7",
  "&cir;": "\u25CB",
  "&cirE;": "\u29C3",
  "&circ;": "\u02C6",
  "&circeq;": "\u2257",
  "&circlearrowleft;": "\u21BA",
  "&circlearrowright;": "\u21BB",
  "&circledR;": "\xAE",
  "&circledS;": "\u24C8",
  "&circledast;": "\u229B",
  "&circledcirc;": "\u229A",
  "&circleddash;": "\u229D",
  "&cire;": "\u2257",
  "&cirfnint;": "\u2A10",
  "&cirmid;": "\u2AEF",
  "&cirscir;": "\u29C2",
  "&clubs;": "\u2663",
  "&clubsuit;": "\u2663",
  "&colon;": ":",
  "&colone;": "\u2254",
  "&coloneq;": "\u2254",
  "&comma;": ",",
  "&commat;": "@",
  "&comp;": "\u2201",
  "&compfn;": "\u2218",
  "&complement;": "\u2201",
  "&complexes;": "\u2102",
  "&cong;": "\u2245",
  "&congdot;": "\u2A6D",
  "&conint;": "\u222E",
  "&copf;": "\u{1D554}",
  "&coprod;": "\u2210",
  "&copy": "\xA9",
  "&copy;": "\xA9",
  "&copysr;": "\u2117",
  "&crarr;": "\u21B5",
  "&cross;": "\u2717",
  "&cscr;": "\u{1D4B8}",
  "&csub;": "\u2ACF",
  "&csube;": "\u2AD1",
  "&csup;": "\u2AD0",
  "&csupe;": "\u2AD2",
  "&ctdot;": "\u22EF",
  "&cudarrl;": "\u2938",
  "&cudarrr;": "\u2935",
  "&cuepr;": "\u22DE",
  "&cuesc;": "\u22DF",
  "&cularr;": "\u21B6",
  "&cularrp;": "\u293D",
  "&cup;": "\u222A",
  "&cupbrcap;": "\u2A48",
  "&cupcap;": "\u2A46",
  "&cupcup;": "\u2A4A",
  "&cupdot;": "\u228D",
  "&cupor;": "\u2A45",
  "&cups;": "\u222A\uFE00",
  "&curarr;": "\u21B7",
  "&curarrm;": "\u293C",
  "&curlyeqprec;": "\u22DE",
  "&curlyeqsucc;": "\u22DF",
  "&curlyvee;": "\u22CE",
  "&curlywedge;": "\u22CF",
  "&curren": "\xA4",
  "&curren;": "\xA4",
  "&curvearrowleft;": "\u21B6",
  "&curvearrowright;": "\u21B7",
  "&cuvee;": "\u22CE",
  "&cuwed;": "\u22CF",
  "&cwconint;": "\u2232",
  "&cwint;": "\u2231",
  "&cylcty;": "\u232D",
  "&dArr;": "\u21D3",
  "&dHar;": "\u2965",
  "&dagger;": "\u2020",
  "&daleth;": "\u2138",
  "&darr;": "\u2193",
  "&dash;": "\u2010",
  "&dashv;": "\u22A3",
  "&dbkarow;": "\u290F",
  "&dblac;": "\u02DD",
  "&dcaron;": "\u010F",
  "&dcy;": "\u0434",
  "&dd;": "\u2146",
  "&ddagger;": "\u2021",
  "&ddarr;": "\u21CA",
  "&ddotseq;": "\u2A77",
  "&deg": "\xB0",
  "&deg;": "\xB0",
  "&delta;": "\u03B4",
  "&demptyv;": "\u29B1",
  "&dfisht;": "\u297F",
  "&dfr;": "\u{1D521}",
  "&dharl;": "\u21C3",
  "&dharr;": "\u21C2",
  "&diam;": "\u22C4",
  "&diamond;": "\u22C4",
  "&diamondsuit;": "\u2666",
  "&diams;": "\u2666",
  "&die;": "\xA8",
  "&digamma;": "\u03DD",
  "&disin;": "\u22F2",
  "&div;": "\xF7",
  "&divide": "\xF7",
  "&divide;": "\xF7",
  "&divideontimes;": "\u22C7",
  "&divonx;": "\u22C7",
  "&djcy;": "\u0452",
  "&dlcorn;": "\u231E",
  "&dlcrop;": "\u230D",
  "&dollar;": "$",
  "&dopf;": "\u{1D555}",
  "&dot;": "\u02D9",
  "&doteq;": "\u2250",
  "&doteqdot;": "\u2251",
  "&dotminus;": "\u2238",
  "&dotplus;": "\u2214",
  "&dotsquare;": "\u22A1",
  "&doublebarwedge;": "\u2306",
  "&downarrow;": "\u2193",
  "&downdownarrows;": "\u21CA",
  "&downharpoonleft;": "\u21C3",
  "&downharpoonright;": "\u21C2",
  "&drbkarow;": "\u2910",
  "&drcorn;": "\u231F",
  "&drcrop;": "\u230C",
  "&dscr;": "\u{1D4B9}",
  "&dscy;": "\u0455",
  "&dsol;": "\u29F6",
  "&dstrok;": "\u0111",
  "&dtdot;": "\u22F1",
  "&dtri;": "\u25BF",
  "&dtrif;": "\u25BE",
  "&duarr;": "\u21F5",
  "&duhar;": "\u296F",
  "&dwangle;": "\u29A6",
  "&dzcy;": "\u045F",
  "&dzigrarr;": "\u27FF",
  "&eDDot;": "\u2A77",
  "&eDot;": "\u2251",
  "&eacute": "\xE9",
  "&eacute;": "\xE9",
  "&easter;": "\u2A6E",
  "&ecaron;": "\u011B",
  "&ecir;": "\u2256",
  "&ecirc": "\xEA",
  "&ecirc;": "\xEA",
  "&ecolon;": "\u2255",
  "&ecy;": "\u044D",
  "&edot;": "\u0117",
  "&ee;": "\u2147",
  "&efDot;": "\u2252",
  "&efr;": "\u{1D522}",
  "&eg;": "\u2A9A",
  "&egrave": "\xE8",
  "&egrave;": "\xE8",
  "&egs;": "\u2A96",
  "&egsdot;": "\u2A98",
  "&el;": "\u2A99",
  "&elinters;": "\u23E7",
  "&ell;": "\u2113",
  "&els;": "\u2A95",
  "&elsdot;": "\u2A97",
  "&emacr;": "\u0113",
  "&empty;": "\u2205",
  "&emptyset;": "\u2205",
  "&emptyv;": "\u2205",
  "&emsp13;": "\u2004",
  "&emsp14;": "\u2005",
  "&emsp;": "\u2003",
  "&eng;": "\u014B",
  "&ensp;": "\u2002",
  "&eogon;": "\u0119",
  "&eopf;": "\u{1D556}",
  "&epar;": "\u22D5",
  "&eparsl;": "\u29E3",
  "&eplus;": "\u2A71",
  "&epsi;": "\u03B5",
  "&epsilon;": "\u03B5",
  "&epsiv;": "\u03F5",
  "&eqcirc;": "\u2256",
  "&eqcolon;": "\u2255",
  "&eqsim;": "\u2242",
  "&eqslantgtr;": "\u2A96",
  "&eqslantless;": "\u2A95",
  "&equals;": "=",
  "&equest;": "\u225F",
  "&equiv;": "\u2261",
  "&equivDD;": "\u2A78",
  "&eqvparsl;": "\u29E5",
  "&erDot;": "\u2253",
  "&erarr;": "\u2971",
  "&escr;": "\u212F",
  "&esdot;": "\u2250",
  "&esim;": "\u2242",
  "&eta;": "\u03B7",
  "&eth": "\xF0",
  "&eth;": "\xF0",
  "&euml": "\xEB",
  "&euml;": "\xEB",
  "&euro;": "\u20AC",
  "&excl;": "!",
  "&exist;": "\u2203",
  "&expectation;": "\u2130",
  "&exponentiale;": "\u2147",
  "&fallingdotseq;": "\u2252",
  "&fcy;": "\u0444",
  "&female;": "\u2640",
  "&ffilig;": "\uFB03",
  "&fflig;": "\uFB00",
  "&ffllig;": "\uFB04",
  "&ffr;": "\u{1D523}",
  "&filig;": "\uFB01",
  "&fjlig;": "fj",
  "&flat;": "\u266D",
  "&fllig;": "\uFB02",
  "&fltns;": "\u25B1",
  "&fnof;": "\u0192",
  "&fopf;": "\u{1D557}",
  "&forall;": "\u2200",
  "&fork;": "\u22D4",
  "&forkv;": "\u2AD9",
  "&fpartint;": "\u2A0D",
  "&frac12": "\xBD",
  "&frac12;": "\xBD",
  "&frac13;": "\u2153",
  "&frac14": "\xBC",
  "&frac14;": "\xBC",
  "&frac15;": "\u2155",
  "&frac16;": "\u2159",
  "&frac18;": "\u215B",
  "&frac23;": "\u2154",
  "&frac25;": "\u2156",
  "&frac34": "\xBE",
  "&frac34;": "\xBE",
  "&frac35;": "\u2157",
  "&frac38;": "\u215C",
  "&frac45;": "\u2158",
  "&frac56;": "\u215A",
  "&frac58;": "\u215D",
  "&frac78;": "\u215E",
  "&frasl;": "\u2044",
  "&frown;": "\u2322",
  "&fscr;": "\u{1D4BB}",
  "&gE;": "\u2267",
  "&gEl;": "\u2A8C",
  "&gacute;": "\u01F5",
  "&gamma;": "\u03B3",
  "&gammad;": "\u03DD",
  "&gap;": "\u2A86",
  "&gbreve;": "\u011F",
  "&gcirc;": "\u011D",
  "&gcy;": "\u0433",
  "&gdot;": "\u0121",
  "&ge;": "\u2265",
  "&gel;": "\u22DB",
  "&geq;": "\u2265",
  "&geqq;": "\u2267",
  "&geqslant;": "\u2A7E",
  "&ges;": "\u2A7E",
  "&gescc;": "\u2AA9",
  "&gesdot;": "\u2A80",
  "&gesdoto;": "\u2A82",
  "&gesdotol;": "\u2A84",
  "&gesl;": "\u22DB\uFE00",
  "&gesles;": "\u2A94",
  "&gfr;": "\u{1D524}",
  "&gg;": "\u226B",
  "&ggg;": "\u22D9",
  "&gimel;": "\u2137",
  "&gjcy;": "\u0453",
  "&gl;": "\u2277",
  "&glE;": "\u2A92",
  "&gla;": "\u2AA5",
  "&glj;": "\u2AA4",
  "&gnE;": "\u2269",
  "&gnap;": "\u2A8A",
  "&gnapprox;": "\u2A8A",
  "&gne;": "\u2A88",
  "&gneq;": "\u2A88",
  "&gneqq;": "\u2269",
  "&gnsim;": "\u22E7",
  "&gopf;": "\u{1D558}",
  "&grave;": "`",
  "&gscr;": "\u210A",
  "&gsim;": "\u2273",
  "&gsime;": "\u2A8E",
  "&gsiml;": "\u2A90",
  "&gt": ">",
  "&gt;": ">",
  "&gtcc;": "\u2AA7",
  "&gtcir;": "\u2A7A",
  "&gtdot;": "\u22D7",
  "&gtlPar;": "\u2995",
  "&gtquest;": "\u2A7C",
  "&gtrapprox;": "\u2A86",
  "&gtrarr;": "\u2978",
  "&gtrdot;": "\u22D7",
  "&gtreqless;": "\u22DB",
  "&gtreqqless;": "\u2A8C",
  "&gtrless;": "\u2277",
  "&gtrsim;": "\u2273",
  "&gvertneqq;": "\u2269\uFE00",
  "&gvnE;": "\u2269\uFE00",
  "&hArr;": "\u21D4",
  "&hairsp;": "\u200A",
  "&half;": "\xBD",
  "&hamilt;": "\u210B",
  "&hardcy;": "\u044A",
  "&harr;": "\u2194",
  "&harrcir;": "\u2948",
  "&harrw;": "\u21AD",
  "&hbar;": "\u210F",
  "&hcirc;": "\u0125",
  "&hearts;": "\u2665",
  "&heartsuit;": "\u2665",
  "&hellip;": "\u2026",
  "&hercon;": "\u22B9",
  "&hfr;": "\u{1D525}",
  "&hksearow;": "\u2925",
  "&hkswarow;": "\u2926",
  "&hoarr;": "\u21FF",
  "&homtht;": "\u223B",
  "&hookleftarrow;": "\u21A9",
  "&hookrightarrow;": "\u21AA",
  "&hopf;": "\u{1D559}",
  "&horbar;": "\u2015",
  "&hscr;": "\u{1D4BD}",
  "&hslash;": "\u210F",
  "&hstrok;": "\u0127",
  "&hybull;": "\u2043",
  "&hyphen;": "\u2010",
  "&iacute": "\xED",
  "&iacute;": "\xED",
  "&ic;": "\u2063",
  "&icirc": "\xEE",
  "&icirc;": "\xEE",
  "&icy;": "\u0438",
  "&iecy;": "\u0435",
  "&iexcl": "\xA1",
  "&iexcl;": "\xA1",
  "&iff;": "\u21D4",
  "&ifr;": "\u{1D526}",
  "&igrave": "\xEC",
  "&igrave;": "\xEC",
  "&ii;": "\u2148",
  "&iiiint;": "\u2A0C",
  "&iiint;": "\u222D",
  "&iinfin;": "\u29DC",
  "&iiota;": "\u2129",
  "&ijlig;": "\u0133",
  "&imacr;": "\u012B",
  "&image;": "\u2111",
  "&imagline;": "\u2110",
  "&imagpart;": "\u2111",
  "&imath;": "\u0131",
  "&imof;": "\u22B7",
  "&imped;": "\u01B5",
  "&in;": "\u2208",
  "&incare;": "\u2105",
  "&infin;": "\u221E",
  "&infintie;": "\u29DD",
  "&inodot;": "\u0131",
  "&int;": "\u222B",
  "&intcal;": "\u22BA",
  "&integers;": "\u2124",
  "&intercal;": "\u22BA",
  "&intlarhk;": "\u2A17",
  "&intprod;": "\u2A3C",
  "&iocy;": "\u0451",
  "&iogon;": "\u012F",
  "&iopf;": "\u{1D55A}",
  "&iota;": "\u03B9",
  "&iprod;": "\u2A3C",
  "&iquest": "\xBF",
  "&iquest;": "\xBF",
  "&iscr;": "\u{1D4BE}",
  "&isin;": "\u2208",
  "&isinE;": "\u22F9",
  "&isindot;": "\u22F5",
  "&isins;": "\u22F4",
  "&isinsv;": "\u22F3",
  "&isinv;": "\u2208",
  "&it;": "\u2062",
  "&itilde;": "\u0129",
  "&iukcy;": "\u0456",
  "&iuml": "\xEF",
  "&iuml;": "\xEF",
  "&jcirc;": "\u0135",
  "&jcy;": "\u0439",
  "&jfr;": "\u{1D527}",
  "&jmath;": "\u0237",
  "&jopf;": "\u{1D55B}",
  "&jscr;": "\u{1D4BF}",
  "&jsercy;": "\u0458",
  "&jukcy;": "\u0454",
  "&kappa;": "\u03BA",
  "&kappav;": "\u03F0",
  "&kcedil;": "\u0137",
  "&kcy;": "\u043A",
  "&kfr;": "\u{1D528}",
  "&kgreen;": "\u0138",
  "&khcy;": "\u0445",
  "&kjcy;": "\u045C",
  "&kopf;": "\u{1D55C}",
  "&kscr;": "\u{1D4C0}",
  "&lAarr;": "\u21DA",
  "&lArr;": "\u21D0",
  "&lAtail;": "\u291B",
  "&lBarr;": "\u290E",
  "&lE;": "\u2266",
  "&lEg;": "\u2A8B",
  "&lHar;": "\u2962",
  "&lacute;": "\u013A",
  "&laemptyv;": "\u29B4",
  "&lagran;": "\u2112",
  "&lambda;": "\u03BB",
  "&lang;": "\u27E8",
  "&langd;": "\u2991",
  "&langle;": "\u27E8",
  "&lap;": "\u2A85",
  "&laquo": "\xAB",
  "&laquo;": "\xAB",
  "&larr;": "\u2190",
  "&larrb;": "\u21E4",
  "&larrbfs;": "\u291F",
  "&larrfs;": "\u291D",
  "&larrhk;": "\u21A9",
  "&larrlp;": "\u21AB",
  "&larrpl;": "\u2939",
  "&larrsim;": "\u2973",
  "&larrtl;": "\u21A2",
  "&lat;": "\u2AAB",
  "&latail;": "\u2919",
  "&late;": "\u2AAD",
  "&lates;": "\u2AAD\uFE00",
  "&lbarr;": "\u290C",
  "&lbbrk;": "\u2772",
  "&lbrace;": "{",
  "&lbrack;": "[",
  "&lbrke;": "\u298B",
  "&lbrksld;": "\u298F",
  "&lbrkslu;": "\u298D",
  "&lcaron;": "\u013E",
  "&lcedil;": "\u013C",
  "&lceil;": "\u2308",
  "&lcub;": "{",
  "&lcy;": "\u043B",
  "&ldca;": "\u2936",
  "&ldquo;": "\u201C",
  "&ldquor;": "\u201E",
  "&ldrdhar;": "\u2967",
  "&ldrushar;": "\u294B",
  "&ldsh;": "\u21B2",
  "&le;": "\u2264",
  "&leftarrow;": "\u2190",
  "&leftarrowtail;": "\u21A2",
  "&leftharpoondown;": "\u21BD",
  "&leftharpoonup;": "\u21BC",
  "&leftleftarrows;": "\u21C7",
  "&leftrightarrow;": "\u2194",
  "&leftrightarrows;": "\u21C6",
  "&leftrightharpoons;": "\u21CB",
  "&leftrightsquigarrow;": "\u21AD",
  "&leftthreetimes;": "\u22CB",
  "&leg;": "\u22DA",
  "&leq;": "\u2264",
  "&leqq;": "\u2266",
  "&leqslant;": "\u2A7D",
  "&les;": "\u2A7D",
  "&lescc;": "\u2AA8",
  "&lesdot;": "\u2A7F",
  "&lesdoto;": "\u2A81",
  "&lesdotor;": "\u2A83",
  "&lesg;": "\u22DA\uFE00",
  "&lesges;": "\u2A93",
  "&lessapprox;": "\u2A85",
  "&lessdot;": "\u22D6",
  "&lesseqgtr;": "\u22DA",
  "&lesseqqgtr;": "\u2A8B",
  "&lessgtr;": "\u2276",
  "&lesssim;": "\u2272",
  "&lfisht;": "\u297C",
  "&lfloor;": "\u230A",
  "&lfr;": "\u{1D529}",
  "&lg;": "\u2276",
  "&lgE;": "\u2A91",
  "&lhard;": "\u21BD",
  "&lharu;": "\u21BC",
  "&lharul;": "\u296A",
  "&lhblk;": "\u2584",
  "&ljcy;": "\u0459",
  "&ll;": "\u226A",
  "&llarr;": "\u21C7",
  "&llcorner;": "\u231E",
  "&llhard;": "\u296B",
  "&lltri;": "\u25FA",
  "&lmidot;": "\u0140",
  "&lmoust;": "\u23B0",
  "&lmoustache;": "\u23B0",
  "&lnE;": "\u2268",
  "&lnap;": "\u2A89",
  "&lnapprox;": "\u2A89",
  "&lne;": "\u2A87",
  "&lneq;": "\u2A87",
  "&lneqq;": "\u2268",
  "&lnsim;": "\u22E6",
  "&loang;": "\u27EC",
  "&loarr;": "\u21FD",
  "&lobrk;": "\u27E6",
  "&longleftarrow;": "\u27F5",
  "&longleftrightarrow;": "\u27F7",
  "&longmapsto;": "\u27FC",
  "&longrightarrow;": "\u27F6",
  "&looparrowleft;": "\u21AB",
  "&looparrowright;": "\u21AC",
  "&lopar;": "\u2985",
  "&lopf;": "\u{1D55D}",
  "&loplus;": "\u2A2D",
  "&lotimes;": "\u2A34",
  "&lowast;": "\u2217",
  "&lowbar;": "_",
  "&loz;": "\u25CA",
  "&lozenge;": "\u25CA",
  "&lozf;": "\u29EB",
  "&lpar;": "(",
  "&lparlt;": "\u2993",
  "&lrarr;": "\u21C6",
  "&lrcorner;": "\u231F",
  "&lrhar;": "\u21CB",
  "&lrhard;": "\u296D",
  "&lrm;": "\u200E",
  "&lrtri;": "\u22BF",
  "&lsaquo;": "\u2039",
  "&lscr;": "\u{1D4C1}",
  "&lsh;": "\u21B0",
  "&lsim;": "\u2272",
  "&lsime;": "\u2A8D",
  "&lsimg;": "\u2A8F",
  "&lsqb;": "[",
  "&lsquo;": "\u2018",
  "&lsquor;": "\u201A",
  "&lstrok;": "\u0142",
  "&lt": "<",
  "&lt;": "<",
  "&ltcc;": "\u2AA6",
  "&ltcir;": "\u2A79",
  "&ltdot;": "\u22D6",
  "&lthree;": "\u22CB",
  "&ltimes;": "\u22C9",
  "&ltlarr;": "\u2976",
  "&ltquest;": "\u2A7B",
  "&ltrPar;": "\u2996",
  "&ltri;": "\u25C3",
  "&ltrie;": "\u22B4",
  "&ltrif;": "\u25C2",
  "&lurdshar;": "\u294A",
  "&luruhar;": "\u2966",
  "&lvertneqq;": "\u2268\uFE00",
  "&lvnE;": "\u2268\uFE00",
  "&mDDot;": "\u223A",
  "&macr": "\xAF",
  "&macr;": "\xAF",
  "&male;": "\u2642",
  "&malt;": "\u2720",
  "&maltese;": "\u2720",
  "&map;": "\u21A6",
  "&mapsto;": "\u21A6",
  "&mapstodown;": "\u21A7",
  "&mapstoleft;": "\u21A4",
  "&mapstoup;": "\u21A5",
  "&marker;": "\u25AE",
  "&mcomma;": "\u2A29",
  "&mcy;": "\u043C",
  "&mdash;": "\u2014",
  "&measuredangle;": "\u2221",
  "&mfr;": "\u{1D52A}",
  "&mho;": "\u2127",
  "&micro": "\xB5",
  "&micro;": "\xB5",
  "&mid;": "\u2223",
  "&midast;": "*",
  "&midcir;": "\u2AF0",
  "&middot": "\xB7",
  "&middot;": "\xB7",
  "&minus;": "\u2212",
  "&minusb;": "\u229F",
  "&minusd;": "\u2238",
  "&minusdu;": "\u2A2A",
  "&mlcp;": "\u2ADB",
  "&mldr;": "\u2026",
  "&mnplus;": "\u2213",
  "&models;": "\u22A7",
  "&mopf;": "\u{1D55E}",
  "&mp;": "\u2213",
  "&mscr;": "\u{1D4C2}",
  "&mstpos;": "\u223E",
  "&mu;": "\u03BC",
  "&multimap;": "\u22B8",
  "&mumap;": "\u22B8",
  "&nGg;": "\u22D9\u0338",
  "&nGt;": "\u226B\u20D2",
  "&nGtv;": "\u226B\u0338",
  "&nLeftarrow;": "\u21CD",
  "&nLeftrightarrow;": "\u21CE",
  "&nLl;": "\u22D8\u0338",
  "&nLt;": "\u226A\u20D2",
  "&nLtv;": "\u226A\u0338",
  "&nRightarrow;": "\u21CF",
  "&nVDash;": "\u22AF",
  "&nVdash;": "\u22AE",
  "&nabla;": "\u2207",
  "&nacute;": "\u0144",
  "&nang;": "\u2220\u20D2",
  "&nap;": "\u2249",
  "&napE;": "\u2A70\u0338",
  "&napid;": "\u224B\u0338",
  "&napos;": "\u0149",
  "&napprox;": "\u2249",
  "&natur;": "\u266E",
  "&natural;": "\u266E",
  "&naturals;": "\u2115",
  "&nbsp": "\xA0",
  "&nbsp;": "\xA0",
  "&nbump;": "\u224E\u0338",
  "&nbumpe;": "\u224F\u0338",
  "&ncap;": "\u2A43",
  "&ncaron;": "\u0148",
  "&ncedil;": "\u0146",
  "&ncong;": "\u2247",
  "&ncongdot;": "\u2A6D\u0338",
  "&ncup;": "\u2A42",
  "&ncy;": "\u043D",
  "&ndash;": "\u2013",
  "&ne;": "\u2260",
  "&neArr;": "\u21D7",
  "&nearhk;": "\u2924",
  "&nearr;": "\u2197",
  "&nearrow;": "\u2197",
  "&nedot;": "\u2250\u0338",
  "&nequiv;": "\u2262",
  "&nesear;": "\u2928",
  "&nesim;": "\u2242\u0338",
  "&nexist;": "\u2204",
  "&nexists;": "\u2204",
  "&nfr;": "\u{1D52B}",
  "&ngE;": "\u2267\u0338",
  "&nge;": "\u2271",
  "&ngeq;": "\u2271",
  "&ngeqq;": "\u2267\u0338",
  "&ngeqslant;": "\u2A7E\u0338",
  "&nges;": "\u2A7E\u0338",
  "&ngsim;": "\u2275",
  "&ngt;": "\u226F",
  "&ngtr;": "\u226F",
  "&nhArr;": "\u21CE",
  "&nharr;": "\u21AE",
  "&nhpar;": "\u2AF2",
  "&ni;": "\u220B",
  "&nis;": "\u22FC",
  "&nisd;": "\u22FA",
  "&niv;": "\u220B",
  "&njcy;": "\u045A",
  "&nlArr;": "\u21CD",
  "&nlE;": "\u2266\u0338",
  "&nlarr;": "\u219A",
  "&nldr;": "\u2025",
  "&nle;": "\u2270",
  "&nleftarrow;": "\u219A",
  "&nleftrightarrow;": "\u21AE",
  "&nleq;": "\u2270",
  "&nleqq;": "\u2266\u0338",
  "&nleqslant;": "\u2A7D\u0338",
  "&nles;": "\u2A7D\u0338",
  "&nless;": "\u226E",
  "&nlsim;": "\u2274",
  "&nlt;": "\u226E",
  "&nltri;": "\u22EA",
  "&nltrie;": "\u22EC",
  "&nmid;": "\u2224",
  "&nopf;": "\u{1D55F}",
  "&not": "\xAC",
  "&not;": "\xAC",
  "&notin;": "\u2209",
  "&notinE;": "\u22F9\u0338",
  "&notindot;": "\u22F5\u0338",
  "&notinva;": "\u2209",
  "&notinvb;": "\u22F7",
  "&notinvc;": "\u22F6",
  "&notni;": "\u220C",
  "&notniva;": "\u220C",
  "&notnivb;": "\u22FE",
  "&notnivc;": "\u22FD",
  "&npar;": "\u2226",
  "&nparallel;": "\u2226",
  "&nparsl;": "\u2AFD\u20E5",
  "&npart;": "\u2202\u0338",
  "&npolint;": "\u2A14",
  "&npr;": "\u2280",
  "&nprcue;": "\u22E0",
  "&npre;": "\u2AAF\u0338",
  "&nprec;": "\u2280",
  "&npreceq;": "\u2AAF\u0338",
  "&nrArr;": "\u21CF",
  "&nrarr;": "\u219B",
  "&nrarrc;": "\u2933\u0338",
  "&nrarrw;": "\u219D\u0338",
  "&nrightarrow;": "\u219B",
  "&nrtri;": "\u22EB",
  "&nrtrie;": "\u22ED",
  "&nsc;": "\u2281",
  "&nsccue;": "\u22E1",
  "&nsce;": "\u2AB0\u0338",
  "&nscr;": "\u{1D4C3}",
  "&nshortmid;": "\u2224",
  "&nshortparallel;": "\u2226",
  "&nsim;": "\u2241",
  "&nsime;": "\u2244",
  "&nsimeq;": "\u2244",
  "&nsmid;": "\u2224",
  "&nspar;": "\u2226",
  "&nsqsube;": "\u22E2",
  "&nsqsupe;": "\u22E3",
  "&nsub;": "\u2284",
  "&nsubE;": "\u2AC5\u0338",
  "&nsube;": "\u2288",
  "&nsubset;": "\u2282\u20D2",
  "&nsubseteq;": "\u2288",
  "&nsubseteqq;": "\u2AC5\u0338",
  "&nsucc;": "\u2281",
  "&nsucceq;": "\u2AB0\u0338",
  "&nsup;": "\u2285",
  "&nsupE;": "\u2AC6\u0338",
  "&nsupe;": "\u2289",
  "&nsupset;": "\u2283\u20D2",
  "&nsupseteq;": "\u2289",
  "&nsupseteqq;": "\u2AC6\u0338",
  "&ntgl;": "\u2279",
  "&ntilde": "\xF1",
  "&ntilde;": "\xF1",
  "&ntlg;": "\u2278",
  "&ntriangleleft;": "\u22EA",
  "&ntrianglelefteq;": "\u22EC",
  "&ntriangleright;": "\u22EB",
  "&ntrianglerighteq;": "\u22ED",
  "&nu;": "\u03BD",
  "&num;": "#",
  "&numero;": "\u2116",
  "&numsp;": "\u2007",
  "&nvDash;": "\u22AD",
  "&nvHarr;": "\u2904",
  "&nvap;": "\u224D\u20D2",
  "&nvdash;": "\u22AC",
  "&nvge;": "\u2265\u20D2",
  "&nvgt;": ">\u20D2",
  "&nvinfin;": "\u29DE",
  "&nvlArr;": "\u2902",
  "&nvle;": "\u2264\u20D2",
  "&nvlt;": "<\u20D2",
  "&nvltrie;": "\u22B4\u20D2",
  "&nvrArr;": "\u2903",
  "&nvrtrie;": "\u22B5\u20D2",
  "&nvsim;": "\u223C\u20D2",
  "&nwArr;": "\u21D6",
  "&nwarhk;": "\u2923",
  "&nwarr;": "\u2196",
  "&nwarrow;": "\u2196",
  "&nwnear;": "\u2927",
  "&oS;": "\u24C8",
  "&oacute": "\xF3",
  "&oacute;": "\xF3",
  "&oast;": "\u229B",
  "&ocir;": "\u229A",
  "&ocirc": "\xF4",
  "&ocirc;": "\xF4",
  "&ocy;": "\u043E",
  "&odash;": "\u229D",
  "&odblac;": "\u0151",
  "&odiv;": "\u2A38",
  "&odot;": "\u2299",
  "&odsold;": "\u29BC",
  "&oelig;": "\u0153",
  "&ofcir;": "\u29BF",
  "&ofr;": "\u{1D52C}",
  "&ogon;": "\u02DB",
  "&ograve": "\xF2",
  "&ograve;": "\xF2",
  "&ogt;": "\u29C1",
  "&ohbar;": "\u29B5",
  "&ohm;": "\u03A9",
  "&oint;": "\u222E",
  "&olarr;": "\u21BA",
  "&olcir;": "\u29BE",
  "&olcross;": "\u29BB",
  "&oline;": "\u203E",
  "&olt;": "\u29C0",
  "&omacr;": "\u014D",
  "&omega;": "\u03C9",
  "&omicron;": "\u03BF",
  "&omid;": "\u29B6",
  "&ominus;": "\u2296",
  "&oopf;": "\u{1D560}",
  "&opar;": "\u29B7",
  "&operp;": "\u29B9",
  "&oplus;": "\u2295",
  "&or;": "\u2228",
  "&orarr;": "\u21BB",
  "&ord;": "\u2A5D",
  "&order;": "\u2134",
  "&orderof;": "\u2134",
  "&ordf": "\xAA",
  "&ordf;": "\xAA",
  "&ordm": "\xBA",
  "&ordm;": "\xBA",
  "&origof;": "\u22B6",
  "&oror;": "\u2A56",
  "&orslope;": "\u2A57",
  "&orv;": "\u2A5B",
  "&oscr;": "\u2134",
  "&oslash": "\xF8",
  "&oslash;": "\xF8",
  "&osol;": "\u2298",
  "&otilde": "\xF5",
  "&otilde;": "\xF5",
  "&otimes;": "\u2297",
  "&otimesas;": "\u2A36",
  "&ouml": "\xF6",
  "&ouml;": "\xF6",
  "&ovbar;": "\u233D",
  "&par;": "\u2225",
  "&para": "\xB6",
  "&para;": "\xB6",
  "&parallel;": "\u2225",
  "&parsim;": "\u2AF3",
  "&parsl;": "\u2AFD",
  "&part;": "\u2202",
  "&pcy;": "\u043F",
  "&percnt;": "%",
  "&period;": ".",
  "&permil;": "\u2030",
  "&perp;": "\u22A5",
  "&pertenk;": "\u2031",
  "&pfr;": "\u{1D52D}",
  "&phi;": "\u03C6",
  "&phiv;": "\u03D5",
  "&phmmat;": "\u2133",
  "&phone;": "\u260E",
  "&pi;": "\u03C0",
  "&pitchfork;": "\u22D4",
  "&piv;": "\u03D6",
  "&planck;": "\u210F",
  "&planckh;": "\u210E",
  "&plankv;": "\u210F",
  "&plus;": "+",
  "&plusacir;": "\u2A23",
  "&plusb;": "\u229E",
  "&pluscir;": "\u2A22",
  "&plusdo;": "\u2214",
  "&plusdu;": "\u2A25",
  "&pluse;": "\u2A72",
  "&plusmn": "\xB1",
  "&plusmn;": "\xB1",
  "&plussim;": "\u2A26",
  "&plustwo;": "\u2A27",
  "&pm;": "\xB1",
  "&pointint;": "\u2A15",
  "&popf;": "\u{1D561}",
  "&pound": "\xA3",
  "&pound;": "\xA3",
  "&pr;": "\u227A",
  "&prE;": "\u2AB3",
  "&prap;": "\u2AB7",
  "&prcue;": "\u227C",
  "&pre;": "\u2AAF",
  "&prec;": "\u227A",
  "&precapprox;": "\u2AB7",
  "&preccurlyeq;": "\u227C",
  "&preceq;": "\u2AAF",
  "&precnapprox;": "\u2AB9",
  "&precneqq;": "\u2AB5",
  "&precnsim;": "\u22E8",
  "&precsim;": "\u227E",
  "&prime;": "\u2032",
  "&primes;": "\u2119",
  "&prnE;": "\u2AB5",
  "&prnap;": "\u2AB9",
  "&prnsim;": "\u22E8",
  "&prod;": "\u220F",
  "&profalar;": "\u232E",
  "&profline;": "\u2312",
  "&profsurf;": "\u2313",
  "&prop;": "\u221D",
  "&propto;": "\u221D",
  "&prsim;": "\u227E",
  "&prurel;": "\u22B0",
  "&pscr;": "\u{1D4C5}",
  "&psi;": "\u03C8",
  "&puncsp;": "\u2008",
  "&qfr;": "\u{1D52E}",
  "&qint;": "\u2A0C",
  "&qopf;": "\u{1D562}",
  "&qprime;": "\u2057",
  "&qscr;": "\u{1D4C6}",
  "&quaternions;": "\u210D",
  "&quatint;": "\u2A16",
  "&quest;": "?",
  "&questeq;": "\u225F",
  "&quot": '"',
  "&quot;": '"',
  "&rAarr;": "\u21DB",
  "&rArr;": "\u21D2",
  "&rAtail;": "\u291C",
  "&rBarr;": "\u290F",
  "&rHar;": "\u2964",
  "&race;": "\u223D\u0331",
  "&racute;": "\u0155",
  "&radic;": "\u221A",
  "&raemptyv;": "\u29B3",
  "&rang;": "\u27E9",
  "&rangd;": "\u2992",
  "&range;": "\u29A5",
  "&rangle;": "\u27E9",
  "&raquo": "\xBB",
  "&raquo;": "\xBB",
  "&rarr;": "\u2192",
  "&rarrap;": "\u2975",
  "&rarrb;": "\u21E5",
  "&rarrbfs;": "\u2920",
  "&rarrc;": "\u2933",
  "&rarrfs;": "\u291E",
  "&rarrhk;": "\u21AA",
  "&rarrlp;": "\u21AC",
  "&rarrpl;": "\u2945",
  "&rarrsim;": "\u2974",
  "&rarrtl;": "\u21A3",
  "&rarrw;": "\u219D",
  "&ratail;": "\u291A",
  "&ratio;": "\u2236",
  "&rationals;": "\u211A",
  "&rbarr;": "\u290D",
  "&rbbrk;": "\u2773",
  "&rbrace;": "}",
  "&rbrack;": "]",
  "&rbrke;": "\u298C",
  "&rbrksld;": "\u298E",
  "&rbrkslu;": "\u2990",
  "&rcaron;": "\u0159",
  "&rcedil;": "\u0157",
  "&rceil;": "\u2309",
  "&rcub;": "}",
  "&rcy;": "\u0440",
  "&rdca;": "\u2937",
  "&rdldhar;": "\u2969",
  "&rdquo;": "\u201D",
  "&rdquor;": "\u201D",
  "&rdsh;": "\u21B3",
  "&real;": "\u211C",
  "&realine;": "\u211B",
  "&realpart;": "\u211C",
  "&reals;": "\u211D",
  "&rect;": "\u25AD",
  "&reg": "\xAE",
  "&reg;": "\xAE",
  "&rfisht;": "\u297D",
  "&rfloor;": "\u230B",
  "&rfr;": "\u{1D52F}",
  "&rhard;": "\u21C1",
  "&rharu;": "\u21C0",
  "&rharul;": "\u296C",
  "&rho;": "\u03C1",
  "&rhov;": "\u03F1",
  "&rightarrow;": "\u2192",
  "&rightarrowtail;": "\u21A3",
  "&rightharpoondown;": "\u21C1",
  "&rightharpoonup;": "\u21C0",
  "&rightleftarrows;": "\u21C4",
  "&rightleftharpoons;": "\u21CC",
  "&rightrightarrows;": "\u21C9",
  "&rightsquigarrow;": "\u219D",
  "&rightthreetimes;": "\u22CC",
  "&ring;": "\u02DA",
  "&risingdotseq;": "\u2253",
  "&rlarr;": "\u21C4",
  "&rlhar;": "\u21CC",
  "&rlm;": "\u200F",
  "&rmoust;": "\u23B1",
  "&rmoustache;": "\u23B1",
  "&rnmid;": "\u2AEE",
  "&roang;": "\u27ED",
  "&roarr;": "\u21FE",
  "&robrk;": "\u27E7",
  "&ropar;": "\u2986",
  "&ropf;": "\u{1D563}",
  "&roplus;": "\u2A2E",
  "&rotimes;": "\u2A35",
  "&rpar;": ")",
  "&rpargt;": "\u2994",
  "&rppolint;": "\u2A12",
  "&rrarr;": "\u21C9",
  "&rsaquo;": "\u203A",
  "&rscr;": "\u{1D4C7}",
  "&rsh;": "\u21B1",
  "&rsqb;": "]",
  "&rsquo;": "\u2019",
  "&rsquor;": "\u2019",
  "&rthree;": "\u22CC",
  "&rtimes;": "\u22CA",
  "&rtri;": "\u25B9",
  "&rtrie;": "\u22B5",
  "&rtrif;": "\u25B8",
  "&rtriltri;": "\u29CE",
  "&ruluhar;": "\u2968",
  "&rx;": "\u211E",
  "&sacute;": "\u015B",
  "&sbquo;": "\u201A",
  "&sc;": "\u227B",
  "&scE;": "\u2AB4",
  "&scap;": "\u2AB8",
  "&scaron;": "\u0161",
  "&sccue;": "\u227D",
  "&sce;": "\u2AB0",
  "&scedil;": "\u015F",
  "&scirc;": "\u015D",
  "&scnE;": "\u2AB6",
  "&scnap;": "\u2ABA",
  "&scnsim;": "\u22E9",
  "&scpolint;": "\u2A13",
  "&scsim;": "\u227F",
  "&scy;": "\u0441",
  "&sdot;": "\u22C5",
  "&sdotb;": "\u22A1",
  "&sdote;": "\u2A66",
  "&seArr;": "\u21D8",
  "&searhk;": "\u2925",
  "&searr;": "\u2198",
  "&searrow;": "\u2198",
  "&sect": "\xA7",
  "&sect;": "\xA7",
  "&semi;": ";",
  "&seswar;": "\u2929",
  "&setminus;": "\u2216",
  "&setmn;": "\u2216",
  "&sext;": "\u2736",
  "&sfr;": "\u{1D530}",
  "&sfrown;": "\u2322",
  "&sharp;": "\u266F",
  "&shchcy;": "\u0449",
  "&shcy;": "\u0448",
  "&shortmid;": "\u2223",
  "&shortparallel;": "\u2225",
  "&shy": "\xAD",
  "&shy;": "\xAD",
  "&sigma;": "\u03C3",
  "&sigmaf;": "\u03C2",
  "&sigmav;": "\u03C2",
  "&sim;": "\u223C",
  "&simdot;": "\u2A6A",
  "&sime;": "\u2243",
  "&simeq;": "\u2243",
  "&simg;": "\u2A9E",
  "&simgE;": "\u2AA0",
  "&siml;": "\u2A9D",
  "&simlE;": "\u2A9F",
  "&simne;": "\u2246",
  "&simplus;": "\u2A24",
  "&simrarr;": "\u2972",
  "&slarr;": "\u2190",
  "&smallsetminus;": "\u2216",
  "&smashp;": "\u2A33",
  "&smeparsl;": "\u29E4",
  "&smid;": "\u2223",
  "&smile;": "\u2323",
  "&smt;": "\u2AAA",
  "&smte;": "\u2AAC",
  "&smtes;": "\u2AAC\uFE00",
  "&softcy;": "\u044C",
  "&sol;": "/",
  "&solb;": "\u29C4",
  "&solbar;": "\u233F",
  "&sopf;": "\u{1D564}",
  "&spades;": "\u2660",
  "&spadesuit;": "\u2660",
  "&spar;": "\u2225",
  "&sqcap;": "\u2293",
  "&sqcaps;": "\u2293\uFE00",
  "&sqcup;": "\u2294",
  "&sqcups;": "\u2294\uFE00",
  "&sqsub;": "\u228F",
  "&sqsube;": "\u2291",
  "&sqsubset;": "\u228F",
  "&sqsubseteq;": "\u2291",
  "&sqsup;": "\u2290",
  "&sqsupe;": "\u2292",
  "&sqsupset;": "\u2290",
  "&sqsupseteq;": "\u2292",
  "&squ;": "\u25A1",
  "&square;": "\u25A1",
  "&squarf;": "\u25AA",
  "&squf;": "\u25AA",
  "&srarr;": "\u2192",
  "&sscr;": "\u{1D4C8}",
  "&ssetmn;": "\u2216",
  "&ssmile;": "\u2323",
  "&sstarf;": "\u22C6",
  "&star;": "\u2606",
  "&starf;": "\u2605",
  "&straightepsilon;": "\u03F5",
  "&straightphi;": "\u03D5",
  "&strns;": "\xAF",
  "&sub;": "\u2282",
  "&subE;": "\u2AC5",
  "&subdot;": "\u2ABD",
  "&sube;": "\u2286",
  "&subedot;": "\u2AC3",
  "&submult;": "\u2AC1",
  "&subnE;": "\u2ACB",
  "&subne;": "\u228A",
  "&subplus;": "\u2ABF",
  "&subrarr;": "\u2979",
  "&subset;": "\u2282",
  "&subseteq;": "\u2286",
  "&subseteqq;": "\u2AC5",
  "&subsetneq;": "\u228A",
  "&subsetneqq;": "\u2ACB",
  "&subsim;": "\u2AC7",
  "&subsub;": "\u2AD5",
  "&subsup;": "\u2AD3",
  "&succ;": "\u227B",
  "&succapprox;": "\u2AB8",
  "&succcurlyeq;": "\u227D",
  "&succeq;": "\u2AB0",
  "&succnapprox;": "\u2ABA",
  "&succneqq;": "\u2AB6",
  "&succnsim;": "\u22E9",
  "&succsim;": "\u227F",
  "&sum;": "\u2211",
  "&sung;": "\u266A",
  "&sup1": "\xB9",
  "&sup1;": "\xB9",
  "&sup2": "\xB2",
  "&sup2;": "\xB2",
  "&sup3": "\xB3",
  "&sup3;": "\xB3",
  "&sup;": "\u2283",
  "&supE;": "\u2AC6",
  "&supdot;": "\u2ABE",
  "&supdsub;": "\u2AD8",
  "&supe;": "\u2287",
  "&supedot;": "\u2AC4",
  "&suphsol;": "\u27C9",
  "&suphsub;": "\u2AD7",
  "&suplarr;": "\u297B",
  "&supmult;": "\u2AC2",
  "&supnE;": "\u2ACC",
  "&supne;": "\u228B",
  "&supplus;": "\u2AC0",
  "&supset;": "\u2283",
  "&supseteq;": "\u2287",
  "&supseteqq;": "\u2AC6",
  "&supsetneq;": "\u228B",
  "&supsetneqq;": "\u2ACC",
  "&supsim;": "\u2AC8",
  "&supsub;": "\u2AD4",
  "&supsup;": "\u2AD6",
  "&swArr;": "\u21D9",
  "&swarhk;": "\u2926",
  "&swarr;": "\u2199",
  "&swarrow;": "\u2199",
  "&swnwar;": "\u292A",
  "&szlig": "\xDF",
  "&szlig;": "\xDF",
  "&target;": "\u2316",
  "&tau;": "\u03C4",
  "&tbrk;": "\u23B4",
  "&tcaron;": "\u0165",
  "&tcedil;": "\u0163",
  "&tcy;": "\u0442",
  "&tdot;": "\u20DB",
  "&telrec;": "\u2315",
  "&tfr;": "\u{1D531}",
  "&there4;": "\u2234",
  "&therefore;": "\u2234",
  "&theta;": "\u03B8",
  "&thetasym;": "\u03D1",
  "&thetav;": "\u03D1",
  "&thickapprox;": "\u2248",
  "&thicksim;": "\u223C",
  "&thinsp;": "\u2009",
  "&thkap;": "\u2248",
  "&thksim;": "\u223C",
  "&thorn": "\xFE",
  "&thorn;": "\xFE",
  "&tilde;": "\u02DC",
  "&times": "\xD7",
  "&times;": "\xD7",
  "&timesb;": "\u22A0",
  "&timesbar;": "\u2A31",
  "&timesd;": "\u2A30",
  "&tint;": "\u222D",
  "&toea;": "\u2928",
  "&top;": "\u22A4",
  "&topbot;": "\u2336",
  "&topcir;": "\u2AF1",
  "&topf;": "\u{1D565}",
  "&topfork;": "\u2ADA",
  "&tosa;": "\u2929",
  "&tprime;": "\u2034",
  "&trade;": "\u2122",
  "&triangle;": "\u25B5",
  "&triangledown;": "\u25BF",
  "&triangleleft;": "\u25C3",
  "&trianglelefteq;": "\u22B4",
  "&triangleq;": "\u225C",
  "&triangleright;": "\u25B9",
  "&trianglerighteq;": "\u22B5",
  "&tridot;": "\u25EC",
  "&trie;": "\u225C",
  "&triminus;": "\u2A3A",
  "&triplus;": "\u2A39",
  "&trisb;": "\u29CD",
  "&tritime;": "\u2A3B",
  "&trpezium;": "\u23E2",
  "&tscr;": "\u{1D4C9}",
  "&tscy;": "\u0446",
  "&tshcy;": "\u045B",
  "&tstrok;": "\u0167",
  "&twixt;": "\u226C",
  "&twoheadleftarrow;": "\u219E",
  "&twoheadrightarrow;": "\u21A0",
  "&uArr;": "\u21D1",
  "&uHar;": "\u2963",
  "&uacute": "\xFA",
  "&uacute;": "\xFA",
  "&uarr;": "\u2191",
  "&ubrcy;": "\u045E",
  "&ubreve;": "\u016D",
  "&ucirc": "\xFB",
  "&ucirc;": "\xFB",
  "&ucy;": "\u0443",
  "&udarr;": "\u21C5",
  "&udblac;": "\u0171",
  "&udhar;": "\u296E",
  "&ufisht;": "\u297E",
  "&ufr;": "\u{1D532}",
  "&ugrave": "\xF9",
  "&ugrave;": "\xF9",
  "&uharl;": "\u21BF",
  "&uharr;": "\u21BE",
  "&uhblk;": "\u2580",
  "&ulcorn;": "\u231C",
  "&ulcorner;": "\u231C",
  "&ulcrop;": "\u230F",
  "&ultri;": "\u25F8",
  "&umacr;": "\u016B",
  "&uml": "\xA8",
  "&uml;": "\xA8",
  "&uogon;": "\u0173",
  "&uopf;": "\u{1D566}",
  "&uparrow;": "\u2191",
  "&updownarrow;": "\u2195",
  "&upharpoonleft;": "\u21BF",
  "&upharpoonright;": "\u21BE",
  "&uplus;": "\u228E",
  "&upsi;": "\u03C5",
  "&upsih;": "\u03D2",
  "&upsilon;": "\u03C5",
  "&upuparrows;": "\u21C8",
  "&urcorn;": "\u231D",
  "&urcorner;": "\u231D",
  "&urcrop;": "\u230E",
  "&uring;": "\u016F",
  "&urtri;": "\u25F9",
  "&uscr;": "\u{1D4CA}",
  "&utdot;": "\u22F0",
  "&utilde;": "\u0169",
  "&utri;": "\u25B5",
  "&utrif;": "\u25B4",
  "&uuarr;": "\u21C8",
  "&uuml": "\xFC",
  "&uuml;": "\xFC",
  "&uwangle;": "\u29A7",
  "&vArr;": "\u21D5",
  "&vBar;": "\u2AE8",
  "&vBarv;": "\u2AE9",
  "&vDash;": "\u22A8",
  "&vangrt;": "\u299C",
  "&varepsilon;": "\u03F5",
  "&varkappa;": "\u03F0",
  "&varnothing;": "\u2205",
  "&varphi;": "\u03D5",
  "&varpi;": "\u03D6",
  "&varpropto;": "\u221D",
  "&varr;": "\u2195",
  "&varrho;": "\u03F1",
  "&varsigma;": "\u03C2",
  "&varsubsetneq;": "\u228A\uFE00",
  "&varsubsetneqq;": "\u2ACB\uFE00",
  "&varsupsetneq;": "\u228B\uFE00",
  "&varsupsetneqq;": "\u2ACC\uFE00",
  "&vartheta;": "\u03D1",
  "&vartriangleleft;": "\u22B2",
  "&vartriangleright;": "\u22B3",
  "&vcy;": "\u0432",
  "&vdash;": "\u22A2",
  "&vee;": "\u2228",
  "&veebar;": "\u22BB",
  "&veeeq;": "\u225A",
  "&vellip;": "\u22EE",
  "&verbar;": "|",
  "&vert;": "|",
  "&vfr;": "\u{1D533}",
  "&vltri;": "\u22B2",
  "&vnsub;": "\u2282\u20D2",
  "&vnsup;": "\u2283\u20D2",
  "&vopf;": "\u{1D567}",
  "&vprop;": "\u221D",
  "&vrtri;": "\u22B3",
  "&vscr;": "\u{1D4CB}",
  "&vsubnE;": "\u2ACB\uFE00",
  "&vsubne;": "\u228A\uFE00",
  "&vsupnE;": "\u2ACC\uFE00",
  "&vsupne;": "\u228B\uFE00",
  "&vzigzag;": "\u299A",
  "&wcirc;": "\u0175",
  "&wedbar;": "\u2A5F",
  "&wedge;": "\u2227",
  "&wedgeq;": "\u2259",
  "&weierp;": "\u2118",
  "&wfr;": "\u{1D534}",
  "&wopf;": "\u{1D568}",
  "&wp;": "\u2118",
  "&wr;": "\u2240",
  "&wreath;": "\u2240",
  "&wscr;": "\u{1D4CC}",
  "&xcap;": "\u22C2",
  "&xcirc;": "\u25EF",
  "&xcup;": "\u22C3",
  "&xdtri;": "\u25BD",
  "&xfr;": "\u{1D535}",
  "&xhArr;": "\u27FA",
  "&xharr;": "\u27F7",
  "&xi;": "\u03BE",
  "&xlArr;": "\u27F8",
  "&xlarr;": "\u27F5",
  "&xmap;": "\u27FC",
  "&xnis;": "\u22FB",
  "&xodot;": "\u2A00",
  "&xopf;": "\u{1D569}",
  "&xoplus;": "\u2A01",
  "&xotime;": "\u2A02",
  "&xrArr;": "\u27F9",
  "&xrarr;": "\u27F6",
  "&xscr;": "\u{1D4CD}",
  "&xsqcup;": "\u2A06",
  "&xuplus;": "\u2A04",
  "&xutri;": "\u25B3",
  "&xvee;": "\u22C1",
  "&xwedge;": "\u22C0",
  "&yacute": "\xFD",
  "&yacute;": "\xFD",
  "&yacy;": "\u044F",
  "&ycirc;": "\u0177",
  "&ycy;": "\u044B",
  "&yen": "\xA5",
  "&yen;": "\xA5",
  "&yfr;": "\u{1D536}",
  "&yicy;": "\u0457",
  "&yopf;": "\u{1D56A}",
  "&yscr;": "\u{1D4CE}",
  "&yucy;": "\u044E",
  "&yuml": "\xFF",
  "&yuml;": "\xFF",
  "&zacute;": "\u017A",
  "&zcaron;": "\u017E",
  "&zcy;": "\u0437",
  "&zdot;": "\u017C",
  "&zeetrf;": "\u2128",
  "&zeta;": "\u03B6",
  "&zfr;": "\u{1D537}",
  "&zhcy;": "\u0436",
  "&zigrarr;": "\u21DD",
  "&zopf;": "\u{1D56B}",
  "&zscr;": "\u{1D4CF}",
  "&zwj;": "\u200D",
  "&zwnj;": "\u200C"
};
var html_entities_default = htmlEntities;

// ../../node_modules/.pnpm/postal-mime@2.4.4/node_modules/postal-mime/src/text-format.js
function decodeHTMLEntities(str) {
  return str.replace(/&(#\d+|#x[a-f0-9]+|[a-z]+\d*);?/gi, (match, entity) => {
    if (typeof html_entities_default[match] === "string") {
      return html_entities_default[match];
    }
    if (entity.charAt(0) !== "#" || match.charAt(match.length - 1) !== ";") {
      return match;
    }
    let codePoint;
    if (entity.charAt(1) === "x") {
      codePoint = parseInt(entity.substr(2), 16);
    } else {
      codePoint = parseInt(entity.substr(1), 10);
    }
    var output = "";
    if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
      return "\uFFFD";
    }
    if (codePoint > 65535) {
      codePoint -= 65536;
      output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
      codePoint = 56320 | codePoint & 1023;
    }
    output += String.fromCharCode(codePoint);
    return output;
  });
}
__name(decodeHTMLEntities, "decodeHTMLEntities");
function escapeHtml(str) {
  return str.trim().replace(/[<>"'?&]/g, (c) => {
    let hex = c.charCodeAt(0).toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }
    return "&#x" + hex.toUpperCase() + ";";
  });
}
__name(escapeHtml, "escapeHtml");
function textToHtml(str) {
  let html = escapeHtml(str).replace(/\n/g, "<br />");
  return "<div>" + html + "</div>";
}
__name(textToHtml, "textToHtml");
function htmlToText(str) {
  str = str.replace(/\r?\n/g, "").replace(/<\!\-\-.*?\-\->/gi, " ").replace(/<br\b[^>]*>/gi, "\n").replace(/<\/?(p|div|table|tr|td|th)\b[^>]*>/gi, "\n\n").replace(/<script\b[^>]*>.*?<\/script\b[^>]*>/gi, " ").replace(/^.*<body\b[^>]*>/i, "").replace(/^.*<\/head\b[^>]*>/i, "").replace(/^.*<\!doctype\b[^>]*>/i, "").replace(/<\/body\b[^>]*>.*$/i, "").replace(/<\/html\b[^>]*>.*$/i, "").replace(/<a\b[^>]*href\s*=\s*["']?([^\s"']+)[^>]*>/gi, " ($1) ").replace(/<\/?(span|em|i|strong|b|u|a)\b[^>]*>/gi, "").replace(/<li\b[^>]*>[\n\u0001\s]*/gi, "* ").replace(/<hr\b[^>]*>/g, "\n-------------\n").replace(/<[^>]*>/g, " ").replace(/\u0001/g, "\n").replace(/[ \t]+/g, " ").replace(/^\s+$/gm, "").replace(/\n\n+/g, "\n\n").replace(/^\n+/, "\n").replace(/\n+$/, "\n");
  str = decodeHTMLEntities(str);
  return str;
}
__name(htmlToText, "htmlToText");
function formatTextAddress(address) {
  return [].concat(address.name || []).concat(address.name ? `<${address.address}>` : address.address).join(" ");
}
__name(formatTextAddress, "formatTextAddress");
function formatTextAddresses(addresses) {
  let parts = [];
  let processAddress = /* @__PURE__ */ __name((address, partCounter) => {
    if (partCounter) {
      parts.push(", ");
    }
    if (address.group) {
      let groupStart = `${address.name}:`;
      let groupEnd = `;`;
      parts.push(groupStart);
      address.group.forEach(processAddress);
      parts.push(groupEnd);
    } else {
      parts.push(formatTextAddress(address));
    }
  }, "processAddress");
  addresses.forEach(processAddress);
  return parts.join("");
}
__name(formatTextAddresses, "formatTextAddresses");
function formatHtmlAddress(address) {
  return `<a href="mailto:${escapeHtml(address.address)}" class="postal-email-address">${escapeHtml(address.name || `<${address.address}>`)}</a>`;
}
__name(formatHtmlAddress, "formatHtmlAddress");
function formatHtmlAddresses(addresses) {
  let parts = [];
  let processAddress = /* @__PURE__ */ __name((address, partCounter) => {
    if (partCounter) {
      parts.push('<span class="postal-email-address-separator">, </span>');
    }
    if (address.group) {
      let groupStart = `<span class="postal-email-address-group">${escapeHtml(address.name)}:</span>`;
      let groupEnd = `<span class="postal-email-address-group">;</span>`;
      parts.push(groupStart);
      address.group.forEach(processAddress);
      parts.push(groupEnd);
    } else {
      parts.push(formatHtmlAddress(address));
    }
  }, "processAddress");
  addresses.forEach(processAddress);
  return parts.join(" ");
}
__name(formatHtmlAddresses, "formatHtmlAddresses");
function foldLines(str, lineLength, afterSpace) {
  str = (str || "").toString();
  lineLength = lineLength || 76;
  let pos = 0, len = str.length, result = "", line, match;
  while (pos < len) {
    line = str.substr(pos, lineLength);
    if (line.length < lineLength) {
      result += line;
      break;
    }
    if (match = line.match(/^[^\n\r]*(\r?\n|\r)/)) {
      line = match[0];
      result += line;
      pos += line.length;
      continue;
    } else if ((match = line.match(/(\s+)[^\s]*$/)) && match[0].length - (afterSpace ? (match[1] || "").length : 0) < line.length) {
      line = line.substr(0, line.length - (match[0].length - (afterSpace ? (match[1] || "").length : 0)));
    } else if (match = str.substr(pos + line.length).match(/^[^\s]+(\s*)/)) {
      line = line + match[0].substr(0, match[0].length - (!afterSpace ? (match[1] || "").length : 0));
    }
    result += line;
    pos += line.length;
    if (pos < len) {
      result += "\r\n";
    }
  }
  return result;
}
__name(foldLines, "foldLines");
function formatTextHeader(message) {
  let rows = [];
  if (message.from) {
    rows.push({ key: "From", val: formatTextAddress(message.from) });
  }
  if (message.subject) {
    rows.push({ key: "Subject", val: message.subject });
  }
  if (message.date) {
    let dateOptions = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false
    };
    let dateStr = typeof Intl === "undefined" ? message.date : new Intl.DateTimeFormat("default", dateOptions).format(new Date(message.date));
    rows.push({ key: "Date", val: dateStr });
  }
  if (message.to && message.to.length) {
    rows.push({ key: "To", val: formatTextAddresses(message.to) });
  }
  if (message.cc && message.cc.length) {
    rows.push({ key: "Cc", val: formatTextAddresses(message.cc) });
  }
  if (message.bcc && message.bcc.length) {
    rows.push({ key: "Bcc", val: formatTextAddresses(message.bcc) });
  }
  let maxKeyLength = rows.map((r) => r.key.length).reduce((acc, cur) => {
    return cur > acc ? cur : acc;
  }, 0);
  rows = rows.flatMap((row) => {
    let sepLen = maxKeyLength - row.key.length;
    let prefix = `${row.key}: ${" ".repeat(sepLen)}`;
    let emptyPrefix = `${" ".repeat(row.key.length + 1)} ${" ".repeat(sepLen)}`;
    let foldedLines = foldLines(row.val, 80, true).split(/\r?\n/).map((line) => line.trim());
    return foldedLines.map((line, i) => `${i ? emptyPrefix : prefix}${line}`);
  });
  let maxLineLength = rows.map((r) => r.length).reduce((acc, cur) => {
    return cur > acc ? cur : acc;
  }, 0);
  let lineMarker = "-".repeat(maxLineLength);
  let template = `
${lineMarker}
${rows.join("\n")}
${lineMarker}
`;
  return template;
}
__name(formatTextHeader, "formatTextHeader");
function formatHtmlHeader(message) {
  let rows = [];
  if (message.from) {
    rows.push(`<div class="postal-email-header-key">From</div><div class="postal-email-header-value">${formatHtmlAddress(message.from)}</div>`);
  }
  if (message.subject) {
    rows.push(
      `<div class="postal-email-header-key">Subject</div><div class="postal-email-header-value postal-email-header-subject">${escapeHtml(
        message.subject
      )}</div>`
    );
  }
  if (message.date) {
    let dateOptions = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false
    };
    let dateStr = typeof Intl === "undefined" ? message.date : new Intl.DateTimeFormat("default", dateOptions).format(new Date(message.date));
    rows.push(
      `<div class="postal-email-header-key">Date</div><div class="postal-email-header-value postal-email-header-date" data-date="${escapeHtml(
        message.date
      )}">${escapeHtml(dateStr)}</div>`
    );
  }
  if (message.to && message.to.length) {
    rows.push(`<div class="postal-email-header-key">To</div><div class="postal-email-header-value">${formatHtmlAddresses(message.to)}</div>`);
  }
  if (message.cc && message.cc.length) {
    rows.push(`<div class="postal-email-header-key">Cc</div><div class="postal-email-header-value">${formatHtmlAddresses(message.cc)}</div>`);
  }
  if (message.bcc && message.bcc.length) {
    rows.push(`<div class="postal-email-header-key">Bcc</div><div class="postal-email-header-value">${formatHtmlAddresses(message.bcc)}</div>`);
  }
  let template = `<div class="postal-email-header">${rows.length ? '<div class="postal-email-header-row">' : ""}${rows.join(
    '</div>\n<div class="postal-email-header-row">'
  )}${rows.length ? "</div>" : ""}</div>`;
  return template;
}
__name(formatHtmlHeader, "formatHtmlHeader");

// ../../node_modules/.pnpm/postal-mime@2.4.4/node_modules/postal-mime/src/address-parser.js
init_modules_watch_stub();
function _handleAddress(tokens) {
  let token;
  let isGroup = false;
  let state = "text";
  let address;
  let addresses = [];
  let data = {
    address: [],
    comment: [],
    group: [],
    text: []
  };
  let i;
  let len;
  for (i = 0, len = tokens.length; i < len; i++) {
    token = tokens[i];
    if (token.type === "operator") {
      switch (token.value) {
        case "<":
          state = "address";
          break;
        case "(":
          state = "comment";
          break;
        case ":":
          state = "group";
          isGroup = true;
          break;
        default:
          state = "text";
      }
    } else if (token.value) {
      if (state === "address") {
        token.value = token.value.replace(/^[^<]*<\s*/, "");
      }
      data[state].push(token.value);
    }
  }
  if (!data.text.length && data.comment.length) {
    data.text = data.comment;
    data.comment = [];
  }
  if (isGroup) {
    data.text = data.text.join(" ");
    addresses.push({
      name: decodeWords(data.text || address && address.name),
      group: data.group.length ? addressParser(data.group.join(",")) : []
    });
  } else {
    if (!data.address.length && data.text.length) {
      for (i = data.text.length - 1; i >= 0; i--) {
        if (data.text[i].match(/^[^@\s]+@[^@\s]+$/)) {
          data.address = data.text.splice(i, 1);
          break;
        }
      }
      let _regexHandler = /* @__PURE__ */ __name(function(address2) {
        if (!data.address.length) {
          data.address = [address2.trim()];
          return " ";
        } else {
          return address2;
        }
      }, "_regexHandler");
      if (!data.address.length) {
        for (i = data.text.length - 1; i >= 0; i--) {
          data.text[i] = data.text[i].replace(/\s*\b[^@\s]+@[^\s]+\b\s*/, _regexHandler).trim();
          if (data.address.length) {
            break;
          }
        }
      }
    }
    if (!data.text.length && data.comment.length) {
      data.text = data.comment;
      data.comment = [];
    }
    if (data.address.length > 1) {
      data.text = data.text.concat(data.address.splice(1));
    }
    data.text = data.text.join(" ");
    data.address = data.address.join(" ");
    if (!data.address && /^=\?[^=]+?=$/.test(data.text.trim())) {
      const parsedSubAddresses = addressParser(decodeWords(data.text));
      if (parsedSubAddresses && parsedSubAddresses.length) {
        return parsedSubAddresses;
      }
    }
    if (!data.address && isGroup) {
      return [];
    } else {
      address = {
        address: data.address || data.text || "",
        name: decodeWords(data.text || data.address || "")
      };
      if (address.address === address.name) {
        if ((address.address || "").match(/@/)) {
          address.name = "";
        } else {
          address.address = "";
        }
      }
      addresses.push(address);
    }
  }
  return addresses;
}
__name(_handleAddress, "_handleAddress");
var Tokenizer = class {
  static {
    __name(this, "Tokenizer");
  }
  constructor(str) {
    this.str = (str || "").toString();
    this.operatorCurrent = "";
    this.operatorExpecting = "";
    this.node = null;
    this.escaped = false;
    this.list = [];
    this.operators = {
      '"': '"',
      "(": ")",
      "<": ">",
      ",": "",
      ":": ";",
      // Semicolons are not a legal delimiter per the RFC2822 grammar other
      // than for terminating a group, but they are also not valid for any
      // other use in this context.  Given that some mail clients have
      // historically allowed the semicolon as a delimiter equivalent to the
      // comma in their UI, it makes sense to treat them the same as a comma
      // when used outside of a group.
      ";": ""
    };
  }
  /**
   * Tokenizes the original input string
   *
   * @return {Array} An array of operator|text tokens
   */
  tokenize() {
    let chr, list = [];
    for (let i = 0, len = this.str.length; i < len; i++) {
      chr = this.str.charAt(i);
      this.checkChar(chr);
    }
    this.list.forEach((node) => {
      node.value = (node.value || "").toString().trim();
      if (node.value) {
        list.push(node);
      }
    });
    return list;
  }
  /**
   * Checks if a character is an operator or text and acts accordingly
   *
   * @param {String} chr Character from the address field
   */
  checkChar(chr) {
    if (this.escaped) {
    } else if (chr === this.operatorExpecting) {
      this.node = {
        type: "operator",
        value: chr
      };
      this.list.push(this.node);
      this.node = null;
      this.operatorExpecting = "";
      this.escaped = false;
      return;
    } else if (!this.operatorExpecting && chr in this.operators) {
      this.node = {
        type: "operator",
        value: chr
      };
      this.list.push(this.node);
      this.node = null;
      this.operatorExpecting = this.operators[chr];
      this.escaped = false;
      return;
    } else if (['"', "'"].includes(this.operatorExpecting) && chr === "\\") {
      this.escaped = true;
      return;
    }
    if (!this.node) {
      this.node = {
        type: "text",
        value: ""
      };
      this.list.push(this.node);
    }
    if (chr === "\n") {
      chr = " ";
    }
    if (chr.charCodeAt(0) >= 33 || [" ", "	"].includes(chr)) {
      this.node.value += chr;
    }
    this.escaped = false;
  }
};
function addressParser(str, options) {
  options = options || {};
  let tokenizer = new Tokenizer(str);
  let tokens = tokenizer.tokenize();
  let addresses = [];
  let address = [];
  let parsedAddresses = [];
  tokens.forEach((token) => {
    if (token.type === "operator" && (token.value === "," || token.value === ";")) {
      if (address.length) {
        addresses.push(address);
      }
      address = [];
    } else {
      address.push(token);
    }
  });
  if (address.length) {
    addresses.push(address);
  }
  addresses.forEach((address2) => {
    address2 = _handleAddress(address2);
    if (address2.length) {
      parsedAddresses = parsedAddresses.concat(address2);
    }
  });
  if (options.flatten) {
    let addresses2 = [];
    let walkAddressList = /* @__PURE__ */ __name((list) => {
      list.forEach((address2) => {
        if (address2.group) {
          return walkAddressList(address2.group);
        } else {
          addresses2.push(address2);
        }
      });
    }, "walkAddressList");
    walkAddressList(parsedAddresses);
    return addresses2;
  }
  return parsedAddresses;
}
__name(addressParser, "addressParser");
var address_parser_default = addressParser;

// ../../node_modules/.pnpm/postal-mime@2.4.4/node_modules/postal-mime/src/base64-encoder.js
init_modules_watch_stub();
function base64ArrayBuffer(arrayBuffer) {
  var base64 = "";
  var encodings = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var bytes = new Uint8Array(arrayBuffer);
  var byteLength = bytes.byteLength;
  var byteRemainder = byteLength % 3;
  var mainLength = byteLength - byteRemainder;
  var a, b, c, d;
  var chunk;
  for (var i = 0; i < mainLength; i = i + 3) {
    chunk = bytes[i] << 16 | bytes[i + 1] << 8 | bytes[i + 2];
    a = (chunk & 16515072) >> 18;
    b = (chunk & 258048) >> 12;
    c = (chunk & 4032) >> 6;
    d = chunk & 63;
    base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d];
  }
  if (byteRemainder == 1) {
    chunk = bytes[mainLength];
    a = (chunk & 252) >> 2;
    b = (chunk & 3) << 4;
    base64 += encodings[a] + encodings[b] + "==";
  } else if (byteRemainder == 2) {
    chunk = bytes[mainLength] << 8 | bytes[mainLength + 1];
    a = (chunk & 64512) >> 10;
    b = (chunk & 1008) >> 4;
    c = (chunk & 15) << 2;
    base64 += encodings[a] + encodings[b] + encodings[c] + "=";
  }
  return base64;
}
__name(base64ArrayBuffer, "base64ArrayBuffer");

// ../../node_modules/.pnpm/postal-mime@2.4.4/node_modules/postal-mime/src/postal-mime.js
var PostalMime = class _PostalMime {
  static {
    __name(this, "PostalMime");
  }
  static parse(buf, options) {
    const parser = new _PostalMime(options);
    return parser.parse(buf);
  }
  constructor(options) {
    this.options = options || {};
    this.root = this.currentNode = new MimeNode({
      postalMime: this
    });
    this.boundaries = [];
    this.textContent = {};
    this.attachments = [];
    this.attachmentEncoding = (this.options.attachmentEncoding || "").toString().replace(/[-_\s]/g, "").trim().toLowerCase() || "arraybuffer";
    this.started = false;
  }
  async finalize() {
    await this.root.finalize();
  }
  async processLine(line, isFinal) {
    let boundaries = this.boundaries;
    if (boundaries.length && line.length > 2 && line[0] === 45 && line[1] === 45) {
      for (let i = boundaries.length - 1; i >= 0; i--) {
        let boundary = boundaries[i];
        if (line.length !== boundary.value.length + 2 && line.length !== boundary.value.length + 4) {
          continue;
        }
        let isTerminator = line.length === boundary.value.length + 4;
        if (isTerminator && (line[line.length - 2] !== 45 || line[line.length - 1] !== 45)) {
          continue;
        }
        let boudaryMatches = true;
        for (let i2 = 0; i2 < boundary.value.length; i2++) {
          if (line[i2 + 2] !== boundary.value[i2]) {
            boudaryMatches = false;
            break;
          }
        }
        if (!boudaryMatches) {
          continue;
        }
        if (isTerminator) {
          await boundary.node.finalize();
          this.currentNode = boundary.node.parentNode || this.root;
        } else {
          await boundary.node.finalizeChildNodes();
          this.currentNode = new MimeNode({
            postalMime: this,
            parentNode: boundary.node
          });
        }
        if (isFinal) {
          return this.finalize();
        }
        return;
      }
    }
    this.currentNode.feed(line);
    if (isFinal) {
      return this.finalize();
    }
  }
  readLine() {
    let startPos = this.readPos;
    let endPos = this.readPos;
    let res = /* @__PURE__ */ __name(() => {
      return {
        bytes: new Uint8Array(this.buf, startPos, endPos - startPos),
        done: this.readPos >= this.av.length
      };
    }, "res");
    while (this.readPos < this.av.length) {
      const c = this.av[this.readPos++];
      if (c !== 13 && c !== 10) {
        endPos = this.readPos;
      }
      if (c === 10) {
        return res();
      }
    }
    return res();
  }
  async processNodeTree() {
    let textContent = {};
    let textTypes = /* @__PURE__ */ new Set();
    let textMap = this.textMap = /* @__PURE__ */ new Map();
    let forceRfc822Attachments = this.forceRfc822Attachments();
    let walk = /* @__PURE__ */ __name(async (node, alternative, related) => {
      alternative = alternative || false;
      related = related || false;
      if (!node.contentType.multipart) {
        if (this.isInlineMessageRfc822(node) && !forceRfc822Attachments) {
          const subParser = new _PostalMime();
          node.subMessage = await subParser.parse(node.content);
          if (!textMap.has(node)) {
            textMap.set(node, {});
          }
          let textEntry = textMap.get(node);
          if (node.subMessage.text || !node.subMessage.html) {
            textEntry.plain = textEntry.plain || [];
            textEntry.plain.push({ type: "subMessage", value: node.subMessage });
            textTypes.add("plain");
          }
          if (node.subMessage.html) {
            textEntry.html = textEntry.html || [];
            textEntry.html.push({ type: "subMessage", value: node.subMessage });
            textTypes.add("html");
          }
          if (subParser.textMap) {
            subParser.textMap.forEach((subTextEntry, subTextNode) => {
              textMap.set(subTextNode, subTextEntry);
            });
          }
          for (let attachment of node.subMessage.attachments || []) {
            this.attachments.push(attachment);
          }
        } else if (this.isInlineTextNode(node)) {
          let textType = node.contentType.parsed.value.substr(node.contentType.parsed.value.indexOf("/") + 1);
          let selectorNode = alternative || node;
          if (!textMap.has(selectorNode)) {
            textMap.set(selectorNode, {});
          }
          let textEntry = textMap.get(selectorNode);
          textEntry[textType] = textEntry[textType] || [];
          textEntry[textType].push({ type: "text", value: node.getTextContent() });
          textTypes.add(textType);
        } else if (node.content) {
          const filename = node.contentDisposition.parsed.params.filename || node.contentType.parsed.params.name || null;
          const attachment = {
            filename: filename ? decodeWords(filename) : null,
            mimeType: node.contentType.parsed.value,
            disposition: node.contentDisposition.parsed.value || null
          };
          if (related && node.contentId) {
            attachment.related = true;
          }
          if (node.contentDescription) {
            attachment.description = node.contentDescription;
          }
          if (node.contentId) {
            attachment.contentId = node.contentId;
          }
          switch (node.contentType.parsed.value) {
            // Special handling for calendar events
            case "text/calendar":
            case "application/ics": {
              if (node.contentType.parsed.params.method) {
                attachment.method = node.contentType.parsed.params.method.toString().toUpperCase().trim();
              }
              const decodedText = node.getTextContent().replace(/\r?\n/g, "\n").replace(/\n*$/, "\n");
              attachment.content = textEncoder.encode(decodedText);
              break;
            }
            // Regular attachments
            default:
              attachment.content = node.content;
          }
          this.attachments.push(attachment);
        }
      } else if (node.contentType.multipart === "alternative") {
        alternative = node;
      } else if (node.contentType.multipart === "related") {
        related = node;
      }
      for (let childNode of node.childNodes) {
        await walk(childNode, alternative, related);
      }
    }, "walk");
    await walk(this.root, false, []);
    textMap.forEach((mapEntry) => {
      textTypes.forEach((textType) => {
        if (!textContent[textType]) {
          textContent[textType] = [];
        }
        if (mapEntry[textType]) {
          mapEntry[textType].forEach((textEntry) => {
            switch (textEntry.type) {
              case "text":
                textContent[textType].push(textEntry.value);
                break;
              case "subMessage":
                {
                  switch (textType) {
                    case "html":
                      textContent[textType].push(formatHtmlHeader(textEntry.value));
                      break;
                    case "plain":
                      textContent[textType].push(formatTextHeader(textEntry.value));
                      break;
                  }
                }
                break;
            }
          });
        } else {
          let alternativeType;
          switch (textType) {
            case "html":
              alternativeType = "plain";
              break;
            case "plain":
              alternativeType = "html";
              break;
          }
          (mapEntry[alternativeType] || []).forEach((textEntry) => {
            switch (textEntry.type) {
              case "text":
                switch (textType) {
                  case "html":
                    textContent[textType].push(textToHtml(textEntry.value));
                    break;
                  case "plain":
                    textContent[textType].push(htmlToText(textEntry.value));
                    break;
                }
                break;
              case "subMessage":
                {
                  switch (textType) {
                    case "html":
                      textContent[textType].push(formatHtmlHeader(textEntry.value));
                      break;
                    case "plain":
                      textContent[textType].push(formatTextHeader(textEntry.value));
                      break;
                  }
                }
                break;
            }
          });
        }
      });
    });
    Object.keys(textContent).forEach((textType) => {
      textContent[textType] = textContent[textType].join("\n");
    });
    this.textContent = textContent;
  }
  isInlineTextNode(node) {
    if (node.contentDisposition.parsed.value === "attachment") {
      return false;
    }
    switch (node.contentType.parsed.value) {
      case "text/html":
      case "text/plain":
        return true;
      case "text/calendar":
      case "text/csv":
      default:
        return false;
    }
  }
  isInlineMessageRfc822(node) {
    if (node.contentType.parsed.value !== "message/rfc822") {
      return false;
    }
    let disposition = node.contentDisposition.parsed.value || (this.options.rfc822Attachments ? "attachment" : "inline");
    return disposition === "inline";
  }
  // Check if this is a specially crafted report email where message/rfc822 content should not be inlined
  forceRfc822Attachments() {
    if (this.options.forceRfc822Attachments) {
      return true;
    }
    let forceRfc822Attachments = false;
    let walk = /* @__PURE__ */ __name((node) => {
      if (!node.contentType.multipart) {
        if (["message/delivery-status", "message/feedback-report"].includes(node.contentType.parsed.value)) {
          forceRfc822Attachments = true;
        }
      }
      for (let childNode of node.childNodes) {
        walk(childNode);
      }
    }, "walk");
    walk(this.root);
    return forceRfc822Attachments;
  }
  async resolveStream(stream) {
    let chunkLen = 0;
    let chunks = [];
    const reader = stream.getReader();
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      chunks.push(value);
      chunkLen += value.length;
    }
    const result = new Uint8Array(chunkLen);
    let chunkPointer = 0;
    for (let chunk of chunks) {
      result.set(chunk, chunkPointer);
      chunkPointer += chunk.length;
    }
    return result;
  }
  async parse(buf) {
    if (this.started) {
      throw new Error("Can not reuse parser, create a new PostalMime object");
    }
    this.started = true;
    if (buf && typeof buf.getReader === "function") {
      buf = await this.resolveStream(buf);
    }
    buf = buf || new ArrayBuffer(0);
    if (typeof buf === "string") {
      buf = textEncoder.encode(buf);
    }
    if (buf instanceof Blob || Object.prototype.toString.call(buf) === "[object Blob]") {
      buf = await blobToArrayBuffer(buf);
    }
    if (buf.buffer instanceof ArrayBuffer) {
      buf = new Uint8Array(buf).buffer;
    }
    this.buf = buf;
    this.av = new Uint8Array(buf);
    this.readPos = 0;
    while (this.readPos < this.av.length) {
      const line = this.readLine();
      await this.processLine(line.bytes, line.done);
    }
    await this.processNodeTree();
    const message = {
      headers: this.root.headers.map((entry) => ({ key: entry.key, value: entry.value })).reverse()
    };
    for (const key of ["from", "sender"]) {
      const addressHeader = this.root.headers.find((line) => line.key === key);
      if (addressHeader && addressHeader.value) {
        const addresses = address_parser_default(addressHeader.value);
        if (addresses && addresses.length) {
          message[key] = addresses[0];
        }
      }
    }
    for (const key of ["delivered-to", "return-path"]) {
      const addressHeader = this.root.headers.find((line) => line.key === key);
      if (addressHeader && addressHeader.value) {
        const addresses = address_parser_default(addressHeader.value);
        if (addresses && addresses.length && addresses[0].address) {
          const camelKey = key.replace(/\-(.)/g, (o, c) => c.toUpperCase());
          message[camelKey] = addresses[0].address;
        }
      }
    }
    for (const key of ["to", "cc", "bcc", "reply-to"]) {
      const addressHeaders = this.root.headers.filter((line) => line.key === key);
      let addresses = [];
      addressHeaders.filter((entry) => entry && entry.value).map((entry) => address_parser_default(entry.value)).forEach((parsed) => addresses = addresses.concat(parsed || []));
      if (addresses && addresses.length) {
        const camelKey = key.replace(/\-(.)/g, (o, c) => c.toUpperCase());
        message[camelKey] = addresses;
      }
    }
    for (const key of ["subject", "message-id", "in-reply-to", "references"]) {
      const header = this.root.headers.find((line) => line.key === key);
      if (header && header.value) {
        const camelKey = key.replace(/\-(.)/g, (o, c) => c.toUpperCase());
        message[camelKey] = decodeWords(header.value);
      }
    }
    let dateHeader = this.root.headers.find((line) => line.key === "date");
    if (dateHeader) {
      let date = new Date(dateHeader.value);
      if (!date || date.toString() === "Invalid Date") {
        date = dateHeader.value;
      } else {
        date = date.toISOString();
      }
      message.date = date;
    }
    if (this.textContent?.html) {
      message.html = this.textContent.html;
    }
    if (this.textContent?.plain) {
      message.text = this.textContent.plain;
    }
    message.attachments = this.attachments;
    switch (this.attachmentEncoding) {
      case "arraybuffer":
        break;
      case "base64":
        for (let attachment of message.attachments || []) {
          if (attachment?.content) {
            attachment.content = base64ArrayBuffer(attachment.content);
            attachment.encoding = "base64";
          }
        }
        break;
      case "utf8":
        let attachmentDecoder = new TextDecoder("utf8");
        for (let attachment of message.attachments || []) {
          if (attachment?.content) {
            attachment.content = attachmentDecoder.decode(attachment.content);
            attachment.encoding = "utf8";
          }
        }
        break;
      default:
        throw new Error("Unknwon attachment encoding");
    }
    return message;
  }
};

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/index.js
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/hono.js
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/hono-base.js
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/compose.js
init_modules_watch_stub();
var compose = /* @__PURE__ */ __name((middleware, onError2, onNotFound) => {
  return (context, next) => {
    let index = -1;
    return dispatch(0);
    async function dispatch(i) {
      if (i <= index) {
        throw new Error("next() called multiple times");
      }
      index = i;
      let res;
      let isError = false;
      let handler;
      if (middleware[i]) {
        handler = middleware[i][0][0];
        context.req.routeIndex = i;
      } else {
        handler = i === middleware.length && next || void 0;
      }
      if (handler) {
        try {
          res = await handler(context, () => dispatch(i + 1));
        } catch (err) {
          if (err instanceof Error && onError2) {
            context.error = err;
            res = await onError2(err, context);
            isError = true;
          } else {
            throw err;
          }
        }
      } else {
        if (context.finalized === false && onNotFound) {
          res = await onNotFound(context);
        }
      }
      if (res && (context.finalized === false || isError)) {
        context.res = res;
      }
      return context;
    }
    __name(dispatch, "dispatch");
  };
}, "compose");

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/context.js
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/request.js
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/utils/body.js
init_modules_watch_stub();
var parseBody = /* @__PURE__ */ __name(async (request, options = /* @__PURE__ */ Object.create(null)) => {
  const { all = false, dot = false } = options;
  const headers = request instanceof HonoRequest ? request.raw.headers : request.headers;
  const contentType = headers.get("Content-Type");
  if (contentType?.startsWith("multipart/form-data") || contentType?.startsWith("application/x-www-form-urlencoded")) {
    return parseFormData(request, { all, dot });
  }
  return {};
}, "parseBody");
async function parseFormData(request, options) {
  const formData = await request.formData();
  if (formData) {
    return convertFormDataToBodyData(formData, options);
  }
  return {};
}
__name(parseFormData, "parseFormData");
function convertFormDataToBodyData(formData, options) {
  const form = /* @__PURE__ */ Object.create(null);
  formData.forEach((value, key) => {
    const shouldParseAllValues = options.all || key.endsWith("[]");
    if (!shouldParseAllValues) {
      form[key] = value;
    } else {
      handleParsingAllValues(form, key, value);
    }
  });
  if (options.dot) {
    Object.entries(form).forEach(([key, value]) => {
      const shouldParseDotValues = key.includes(".");
      if (shouldParseDotValues) {
        handleParsingNestedValues(form, key, value);
        delete form[key];
      }
    });
  }
  return form;
}
__name(convertFormDataToBodyData, "convertFormDataToBodyData");
var handleParsingAllValues = /* @__PURE__ */ __name((form, key, value) => {
  if (form[key] !== void 0) {
    if (Array.isArray(form[key])) {
      ;
      form[key].push(value);
    } else {
      form[key] = [form[key], value];
    }
  } else {
    form[key] = value;
  }
}, "handleParsingAllValues");
var handleParsingNestedValues = /* @__PURE__ */ __name((form, key, value) => {
  let nestedForm = form;
  const keys = key.split(".");
  keys.forEach((key2, index) => {
    if (index === keys.length - 1) {
      nestedForm[key2] = value;
    } else {
      if (!nestedForm[key2] || typeof nestedForm[key2] !== "object" || Array.isArray(nestedForm[key2]) || nestedForm[key2] instanceof File) {
        nestedForm[key2] = /* @__PURE__ */ Object.create(null);
      }
      nestedForm = nestedForm[key2];
    }
  });
}, "handleParsingNestedValues");

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/utils/url.js
init_modules_watch_stub();
var splitPath = /* @__PURE__ */ __name((path) => {
  const paths = path.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  return paths;
}, "splitPath");
var splitRoutingPath = /* @__PURE__ */ __name((routePath) => {
  const { groups, path } = extractGroupsFromPath(routePath);
  const paths = splitPath(path);
  return replaceGroupMarks(paths, groups);
}, "splitRoutingPath");
var extractGroupsFromPath = /* @__PURE__ */ __name((path) => {
  const groups = [];
  path = path.replace(/\{[^}]+\}/g, (match, index) => {
    const mark = `@${index}`;
    groups.push([mark, match]);
    return mark;
  });
  return { groups, path };
}, "extractGroupsFromPath");
var replaceGroupMarks = /* @__PURE__ */ __name((paths, groups) => {
  for (let i = groups.length - 1; i >= 0; i--) {
    const [mark] = groups[i];
    for (let j = paths.length - 1; j >= 0; j--) {
      if (paths[j].includes(mark)) {
        paths[j] = paths[j].replace(mark, groups[i][1]);
        break;
      }
    }
  }
  return paths;
}, "replaceGroupMarks");
var patternCache = {};
var getPattern = /* @__PURE__ */ __name((label, next) => {
  if (label === "*") {
    return "*";
  }
  const match = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (match) {
    const cacheKey = `${label}#${next}`;
    if (!patternCache[cacheKey]) {
      if (match[2]) {
        patternCache[cacheKey] = next && next[0] !== ":" && next[0] !== "*" ? [cacheKey, match[1], new RegExp(`^${match[2]}(?=/${next})`)] : [label, match[1], new RegExp(`^${match[2]}$`)];
      } else {
        patternCache[cacheKey] = [label, match[1], true];
      }
    }
    return patternCache[cacheKey];
  }
  return null;
}, "getPattern");
var tryDecode = /* @__PURE__ */ __name((str, decoder) => {
  try {
    return decoder(str);
  } catch {
    return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match) => {
      try {
        return decoder(match);
      } catch {
        return match;
      }
    });
  }
}, "tryDecode");
var tryDecodeURI = /* @__PURE__ */ __name((str) => tryDecode(str, decodeURI), "tryDecodeURI");
var getPath = /* @__PURE__ */ __name((request) => {
  const url = request.url;
  const start = url.indexOf("/", 8);
  let i = start;
  for (; i < url.length; i++) {
    const charCode = url.charCodeAt(i);
    if (charCode === 37) {
      const queryIndex = url.indexOf("?", i);
      const path = url.slice(start, queryIndex === -1 ? void 0 : queryIndex);
      return tryDecodeURI(path.includes("%25") ? path.replace(/%25/g, "%2525") : path);
    } else if (charCode === 63) {
      break;
    }
  }
  return url.slice(start, i);
}, "getPath");
var getPathNoStrict = /* @__PURE__ */ __name((request) => {
  const result = getPath(request);
  return result.length > 1 && result.at(-1) === "/" ? result.slice(0, -1) : result;
}, "getPathNoStrict");
var mergePath = /* @__PURE__ */ __name((base, sub, ...rest) => {
  if (rest.length) {
    sub = mergePath(sub, ...rest);
  }
  return `${base?.[0] === "/" ? "" : "/"}${base}${sub === "/" ? "" : `${base?.at(-1) === "/" ? "" : "/"}${sub?.[0] === "/" ? sub.slice(1) : sub}`}`;
}, "mergePath");
var checkOptionalParameter = /* @__PURE__ */ __name((path) => {
  if (path.charCodeAt(path.length - 1) !== 63 || !path.includes(":")) {
    return null;
  }
  const segments = path.split("/");
  const results = [];
  let basePath = "";
  segments.forEach((segment) => {
    if (segment !== "" && !/\:/.test(segment)) {
      basePath += "/" + segment;
    } else if (/\:/.test(segment)) {
      if (/\?/.test(segment)) {
        if (results.length === 0 && basePath === "") {
          results.push("/");
        } else {
          results.push(basePath);
        }
        const optionalSegment = segment.replace("?", "");
        basePath += "/" + optionalSegment;
        results.push(basePath);
      } else {
        basePath += "/" + segment;
      }
    }
  });
  return results.filter((v, i, a) => a.indexOf(v) === i);
}, "checkOptionalParameter");
var _decodeURI = /* @__PURE__ */ __name((value) => {
  if (!/[%+]/.test(value)) {
    return value;
  }
  if (value.indexOf("+") !== -1) {
    value = value.replace(/\+/g, " ");
  }
  return value.indexOf("%") !== -1 ? decodeURIComponent_(value) : value;
}, "_decodeURI");
var _getQueryParam = /* @__PURE__ */ __name((url, key, multiple) => {
  let encoded;
  if (!multiple && key && !/[%+]/.test(key)) {
    let keyIndex2 = url.indexOf(`?${key}`, 8);
    if (keyIndex2 === -1) {
      keyIndex2 = url.indexOf(`&${key}`, 8);
    }
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        const valueIndex = keyIndex2 + key.length + 2;
        const endIndex = url.indexOf("&", valueIndex);
        return _decodeURI(url.slice(valueIndex, endIndex === -1 ? void 0 : endIndex));
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
        return "";
      }
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url);
    if (!encoded) {
      return void 0;
    }
  }
  const results = {};
  encoded ??= /[%+]/.test(url);
  let keyIndex = url.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url.indexOf("&", keyIndex + 1);
    let valueIndex = url.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
      valueIndex = -1;
    }
    let name2 = url.slice(
      keyIndex + 1,
      valueIndex === -1 ? nextKeyIndex === -1 ? void 0 : nextKeyIndex : valueIndex
    );
    if (encoded) {
      name2 = _decodeURI(name2);
    }
    keyIndex = nextKeyIndex;
    if (name2 === "") {
      continue;
    }
    let value;
    if (valueIndex === -1) {
      value = "";
    } else {
      value = url.slice(valueIndex + 1, nextKeyIndex === -1 ? void 0 : nextKeyIndex);
      if (encoded) {
        value = _decodeURI(value);
      }
    }
    if (multiple) {
      if (!(results[name2] && Array.isArray(results[name2]))) {
        results[name2] = [];
      }
      ;
      results[name2].push(value);
    } else {
      results[name2] ??= value;
    }
  }
  return key ? results[key] : results;
}, "_getQueryParam");
var getQueryParam = _getQueryParam;
var getQueryParams = /* @__PURE__ */ __name((url, key) => {
  return _getQueryParam(url, key, true);
}, "getQueryParams");
var decodeURIComponent_ = decodeURIComponent;

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/request.js
var tryDecodeURIComponent = /* @__PURE__ */ __name((str) => tryDecode(str, decodeURIComponent_), "tryDecodeURIComponent");
var HonoRequest = class {
  static {
    __name(this, "HonoRequest");
  }
  raw;
  #validatedData;
  #matchResult;
  routeIndex = 0;
  path;
  bodyCache = {};
  constructor(request, path = "/", matchResult = [[]]) {
    this.raw = request;
    this.path = path;
    this.#matchResult = matchResult;
    this.#validatedData = {};
  }
  param(key) {
    return key ? this.#getDecodedParam(key) : this.#getAllDecodedParams();
  }
  #getDecodedParam(key) {
    const paramKey = this.#matchResult[0][this.routeIndex][1][key];
    const param = this.#getParamValue(paramKey);
    return param ? /\%/.test(param) ? tryDecodeURIComponent(param) : param : void 0;
  }
  #getAllDecodedParams() {
    const decoded = {};
    const keys = Object.keys(this.#matchResult[0][this.routeIndex][1]);
    for (const key of keys) {
      const value = this.#getParamValue(this.#matchResult[0][this.routeIndex][1][key]);
      if (value && typeof value === "string") {
        decoded[key] = /\%/.test(value) ? tryDecodeURIComponent(value) : value;
      }
    }
    return decoded;
  }
  #getParamValue(paramKey) {
    return this.#matchResult[1] ? this.#matchResult[1][paramKey] : paramKey;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name2) {
    if (name2) {
      return this.raw.headers.get(name2) ?? void 0;
    }
    const headerData = {};
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  async parseBody(options) {
    return this.bodyCache.parsedBody ??= await parseBody(this, options);
  }
  #cachedBody = /* @__PURE__ */ __name((key) => {
    const { bodyCache, raw: raw3 } = this;
    const cachedBody = bodyCache[key];
    if (cachedBody) {
      return cachedBody;
    }
    const anyCachedKey = Object.keys(bodyCache)[0];
    if (anyCachedKey) {
      return bodyCache[anyCachedKey].then((body) => {
        if (anyCachedKey === "json") {
          body = JSON.stringify(body);
        }
        return new Response(body)[key]();
      });
    }
    return bodyCache[key] = raw3[key]();
  }, "#cachedBody");
  json() {
    return this.#cachedBody("json");
  }
  text() {
    return this.#cachedBody("text");
  }
  arrayBuffer() {
    return this.#cachedBody("arrayBuffer");
  }
  blob() {
    return this.#cachedBody("blob");
  }
  formData() {
    return this.#cachedBody("formData");
  }
  addValidatedData(target, data) {
    this.#validatedData[target] = data;
  }
  valid(target) {
    return this.#validatedData[target];
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get matchedRoutes() {
    return this.#matchResult[0].map(([[, route]]) => route);
  }
  get routePath() {
    return this.#matchResult[0].map(([[, route]]) => route)[this.routeIndex].path;
  }
};

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/utils/html.js
init_modules_watch_stub();
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
};
var raw2 = /* @__PURE__ */ __name((value, callbacks) => {
  const escapedString = new String(value);
  escapedString.isEscaped = true;
  escapedString.callbacks = callbacks;
  return escapedString;
}, "raw");
var resolveCallback = /* @__PURE__ */ __name(async (str, phase, preserveCallbacks, context, buffer) => {
  if (typeof str === "object" && !(str instanceof String)) {
    if (!(str instanceof Promise)) {
      str = str.toString();
    }
    if (str instanceof Promise) {
      str = await str;
    }
  }
  const callbacks = str.callbacks;
  if (!callbacks?.length) {
    return Promise.resolve(str);
  }
  if (buffer) {
    buffer[0] += str;
  } else {
    buffer = [str];
  }
  const resStr = Promise.all(callbacks.map((c) => c({ phase, buffer, context }))).then(
    (res) => Promise.all(
      res.filter(Boolean).map((str2) => resolveCallback(str2, phase, false, context, buffer))
    ).then(() => buffer[0])
  );
  if (preserveCallbacks) {
    return raw2(await resStr, callbacks);
  } else {
    return resStr;
  }
}, "resolveCallback");

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/context.js
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setHeaders = /* @__PURE__ */ __name((headers, map = {}) => {
  for (const key of Object.keys(map)) {
    headers.set(key, map[key]);
  }
  return headers;
}, "setHeaders");
var Context = class {
  static {
    __name(this, "Context");
  }
  #rawRequest;
  #req;
  env = {};
  #var;
  finalized = false;
  error;
  #status = 200;
  #executionCtx;
  #headers;
  #preparedHeaders;
  #res;
  #isFresh = true;
  #layout;
  #renderer;
  #notFoundHandler;
  #matchResult;
  #path;
  constructor(req, options) {
    this.#rawRequest = req;
    if (options) {
      this.#executionCtx = options.executionCtx;
      this.env = options.env;
      this.#notFoundHandler = options.notFoundHandler;
      this.#path = options.path;
      this.#matchResult = options.matchResult;
    }
  }
  get req() {
    this.#req ??= new HonoRequest(this.#rawRequest, this.#path, this.#matchResult);
    return this.#req;
  }
  get event() {
    if (this.#executionCtx && "respondWith" in this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  get executionCtx() {
    if (this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  get res() {
    this.#isFresh = false;
    return this.#res ||= new Response("404 Not Found", { status: 404 });
  }
  set res(_res) {
    this.#isFresh = false;
    if (this.#res && _res) {
      _res = new Response(_res.body, _res);
      for (const [k, v] of this.#res.headers.entries()) {
        if (k === "content-type") {
          continue;
        }
        if (k === "set-cookie") {
          const cookies = this.#res.headers.getSetCookie();
          _res.headers.delete("set-cookie");
          for (const cookie of cookies) {
            _res.headers.append("set-cookie", cookie);
          }
        } else {
          _res.headers.set(k, v);
        }
      }
    }
    this.#res = _res;
    this.finalized = true;
  }
  render = /* @__PURE__ */ __name((...args) => {
    this.#renderer ??= (content) => this.html(content);
    return this.#renderer(...args);
  }, "render");
  setLayout = /* @__PURE__ */ __name((layout) => this.#layout = layout, "setLayout");
  getLayout = /* @__PURE__ */ __name(() => this.#layout, "getLayout");
  setRenderer = /* @__PURE__ */ __name((renderer) => {
    this.#renderer = renderer;
  }, "setRenderer");
  header = /* @__PURE__ */ __name((name2, value, options) => {
    if (this.finalized) {
      this.#res = new Response(this.#res.body, this.#res);
    }
    if (value === void 0) {
      if (this.#headers) {
        this.#headers.delete(name2);
      } else if (this.#preparedHeaders) {
        delete this.#preparedHeaders[name2.toLocaleLowerCase()];
      }
      if (this.finalized) {
        this.res.headers.delete(name2);
      }
      return;
    }
    if (options?.append) {
      if (!this.#headers) {
        this.#isFresh = false;
        this.#headers = new Headers(this.#preparedHeaders);
        this.#preparedHeaders = {};
      }
      this.#headers.append(name2, value);
    } else {
      if (this.#headers) {
        this.#headers.set(name2, value);
      } else {
        this.#preparedHeaders ??= {};
        this.#preparedHeaders[name2.toLowerCase()] = value;
      }
    }
    if (this.finalized) {
      if (options?.append) {
        this.res.headers.append(name2, value);
      } else {
        this.res.headers.set(name2, value);
      }
    }
  }, "header");
  status = /* @__PURE__ */ __name((status) => {
    this.#isFresh = false;
    this.#status = status;
  }, "status");
  set = /* @__PURE__ */ __name((key, value) => {
    this.#var ??= /* @__PURE__ */ new Map();
    this.#var.set(key, value);
  }, "set");
  get = /* @__PURE__ */ __name((key) => {
    return this.#var ? this.#var.get(key) : void 0;
  }, "get");
  get var() {
    if (!this.#var) {
      return {};
    }
    return Object.fromEntries(this.#var);
  }
  #newResponse(data, arg, headers) {
    if (this.#isFresh && !headers && !arg && this.#status === 200) {
      return new Response(data, {
        headers: this.#preparedHeaders
      });
    }
    if (arg && typeof arg !== "number") {
      const header = new Headers(arg.headers);
      if (this.#headers) {
        this.#headers.forEach((v, k) => {
          if (k === "set-cookie") {
            header.append(k, v);
          } else {
            header.set(k, v);
          }
        });
      }
      const headers2 = setHeaders(header, this.#preparedHeaders);
      return new Response(data, {
        headers: headers2,
        status: arg.status ?? this.#status
      });
    }
    const status = typeof arg === "number" ? arg : this.#status;
    this.#preparedHeaders ??= {};
    this.#headers ??= new Headers();
    setHeaders(this.#headers, this.#preparedHeaders);
    if (this.#res) {
      this.#res.headers.forEach((v, k) => {
        if (k === "set-cookie") {
          this.#headers?.append(k, v);
        } else {
          this.#headers?.set(k, v);
        }
      });
      setHeaders(this.#headers, this.#preparedHeaders);
    }
    headers ??= {};
    for (const [k, v] of Object.entries(headers)) {
      if (typeof v === "string") {
        this.#headers.set(k, v);
      } else {
        this.#headers.delete(k);
        for (const v2 of v) {
          this.#headers.append(k, v2);
        }
      }
    }
    return new Response(data, {
      status,
      headers: this.#headers
    });
  }
  newResponse = /* @__PURE__ */ __name((...args) => this.#newResponse(...args), "newResponse");
  body = /* @__PURE__ */ __name((data, arg, headers) => {
    return typeof arg === "number" ? this.#newResponse(data, arg, headers) : this.#newResponse(data, arg);
  }, "body");
  text = /* @__PURE__ */ __name((text, arg, headers) => {
    if (!this.#preparedHeaders) {
      if (this.#isFresh && !headers && !arg) {
        return new Response(text);
      }
      this.#preparedHeaders = {};
    }
    this.#preparedHeaders["content-type"] = TEXT_PLAIN;
    if (typeof arg === "number") {
      return this.#newResponse(text, arg, headers);
    }
    return this.#newResponse(text, arg);
  }, "text");
  json = /* @__PURE__ */ __name((object, arg, headers) => {
    const body = JSON.stringify(object);
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "application/json";
    return typeof arg === "number" ? this.#newResponse(body, arg, headers) : this.#newResponse(body, arg);
  }, "json");
  html = /* @__PURE__ */ __name((html, arg, headers) => {
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "text/html; charset=UTF-8";
    if (typeof html === "object") {
      return resolveCallback(html, HtmlEscapedCallbackPhase.Stringify, false, {}).then((html2) => {
        return typeof arg === "number" ? this.#newResponse(html2, arg, headers) : this.#newResponse(html2, arg);
      });
    }
    return typeof arg === "number" ? this.#newResponse(html, arg, headers) : this.#newResponse(html, arg);
  }, "html");
  redirect = /* @__PURE__ */ __name((location, status) => {
    this.#headers ??= new Headers();
    this.#headers.set("Location", String(location));
    return this.newResponse(null, status ?? 302);
  }, "redirect");
  notFound = /* @__PURE__ */ __name(() => {
    this.#notFoundHandler ??= () => new Response();
    return this.#notFoundHandler(this);
  }, "notFound");
};

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/router.js
init_modules_watch_stub();
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var MESSAGE_MATCHER_IS_ALREADY_BUILT = "Can not add a route since the matcher is already built.";
var UnsupportedPathError = class extends Error {
  static {
    __name(this, "UnsupportedPathError");
  }
};

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/utils/constants.js
init_modules_watch_stub();
var COMPOSED_HANDLER = "__COMPOSED_HANDLER";

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/hono-base.js
var notFoundHandler = /* @__PURE__ */ __name((c) => {
  return c.text("404 Not Found", 404);
}, "notFoundHandler");
var errorHandler = /* @__PURE__ */ __name((err, c) => {
  if ("getResponse" in err) {
    return err.getResponse();
  }
  console.error(err);
  return c.text("Internal Server Error", 500);
}, "errorHandler");
var Hono = class {
  static {
    __name(this, "Hono");
  }
  get;
  post;
  put;
  delete;
  options;
  patch;
  all;
  on;
  use;
  router;
  getPath;
  _basePath = "/";
  #path = "/";
  routes = [];
  constructor(options = {}) {
    const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
    allMethods.forEach((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          this.#path = args1;
        } else {
          this.#addRoute(method, this.#path, args1);
        }
        args.forEach((handler) => {
          this.#addRoute(method, this.#path, handler);
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      for (const p of [path].flat()) {
        this.#path = p;
        for (const m of [method].flat()) {
          handlers.map((handler) => {
            this.#addRoute(m.toUpperCase(), this.#path, handler);
          });
        }
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        this.#path = arg1;
      } else {
        this.#path = "*";
        handlers.unshift(arg1);
      }
      handlers.forEach((handler) => {
        this.#addRoute(METHOD_NAME_ALL, this.#path, handler);
      });
      return this;
    };
    const { strict, ...optionsWithoutStrict } = options;
    Object.assign(this, optionsWithoutStrict);
    this.getPath = strict ?? true ? options.getPath ?? getPath : getPathNoStrict;
  }
  #clone() {
    const clone = new Hono({
      router: this.router,
      getPath: this.getPath
    });
    clone.errorHandler = this.errorHandler;
    clone.#notFoundHandler = this.#notFoundHandler;
    clone.routes = this.routes;
    return clone;
  }
  #notFoundHandler = notFoundHandler;
  errorHandler = errorHandler;
  route(path, app2) {
    const subApp = this.basePath(path);
    app2.routes.map((r) => {
      let handler;
      if (app2.errorHandler === errorHandler) {
        handler = r.handler;
      } else {
        handler = /* @__PURE__ */ __name(async (c, next) => (await compose([], app2.errorHandler)(c, () => r.handler(c, next))).res, "handler");
        handler[COMPOSED_HANDLER] = r.handler;
      }
      subApp.#addRoute(r.method, r.path, handler);
    });
    return this;
  }
  basePath(path) {
    const subApp = this.#clone();
    subApp._basePath = mergePath(this._basePath, path);
    return subApp;
  }
  onError = /* @__PURE__ */ __name((handler) => {
    this.errorHandler = handler;
    return this;
  }, "onError");
  notFound = /* @__PURE__ */ __name((handler) => {
    this.#notFoundHandler = handler;
    return this;
  }, "notFound");
  mount(path, applicationHandler, options) {
    let replaceRequest;
    let optionHandler;
    if (options) {
      if (typeof options === "function") {
        optionHandler = options;
      } else {
        optionHandler = options.optionHandler;
        if (options.replaceRequest === false) {
          replaceRequest = /* @__PURE__ */ __name((request) => request, "replaceRequest");
        } else {
          replaceRequest = options.replaceRequest;
        }
      }
    }
    const getOptions = optionHandler ? (c) => {
      const options2 = optionHandler(c);
      return Array.isArray(options2) ? options2 : [options2];
    } : (c) => {
      let executionContext = void 0;
      try {
        executionContext = c.executionCtx;
      } catch {
      }
      return [c.env, executionContext];
    };
    replaceRequest ||= (() => {
      const mergedPath = mergePath(this._basePath, path);
      const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
      return (request) => {
        const url = new URL(request.url);
        url.pathname = url.pathname.slice(pathPrefixLength) || "/";
        return new Request(url, request);
      };
    })();
    const handler = /* @__PURE__ */ __name(async (c, next) => {
      const res = await applicationHandler(replaceRequest(c.req.raw), ...getOptions(c));
      if (res) {
        return res;
      }
      await next();
    }, "handler");
    this.#addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler);
    return this;
  }
  #addRoute(method, path, handler) {
    method = method.toUpperCase();
    path = mergePath(this._basePath, path);
    const r = { path, method, handler };
    this.router.add(method, path, [handler, r]);
    this.routes.push(r);
  }
  #handleError(err, c) {
    if (err instanceof Error) {
      return this.errorHandler(err, c);
    }
    throw err;
  }
  #dispatch(request, executionCtx, env, method) {
    if (method === "HEAD") {
      return (async () => new Response(null, await this.#dispatch(request, executionCtx, env, "GET")))();
    }
    const path = this.getPath(request, { env });
    const matchResult = this.router.match(method, path);
    const c = new Context(request, {
      path,
      matchResult,
      env,
      executionCtx,
      notFoundHandler: this.#notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c, async () => {
          c.res = await this.#notFoundHandler(c);
        });
      } catch (err) {
        return this.#handleError(err, c);
      }
      return res instanceof Promise ? res.then(
        (resolved) => resolved || (c.finalized ? c.res : this.#notFoundHandler(c))
      ).catch((err) => this.#handleError(err, c)) : res ?? this.#notFoundHandler(c);
    }
    const composed = compose(matchResult[0], this.errorHandler, this.#notFoundHandler);
    return (async () => {
      try {
        const context = await composed(c);
        if (!context.finalized) {
          throw new Error(
            "Context is not finalized. Did you forget to return a Response object or `await next()`?"
          );
        }
        return context.res;
      } catch (err) {
        return this.#handleError(err, c);
      }
    })();
  }
  fetch = /* @__PURE__ */ __name((request, ...rest) => {
    return this.#dispatch(request, rest[1], rest[0], request.method);
  }, "fetch");
  request = /* @__PURE__ */ __name((input, requestInit, Env, executionCtx) => {
    if (input instanceof Request) {
      return this.fetch(requestInit ? new Request(input, requestInit) : input, Env, executionCtx);
    }
    input = input.toString();
    return this.fetch(
      new Request(
        /^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`,
        requestInit
      ),
      Env,
      executionCtx
    );
  }, "request");
  fire = /* @__PURE__ */ __name(() => {
    addEventListener("fetch", (event) => {
      event.respondWith(this.#dispatch(event.request, event, void 0, event.request.method));
    });
  }, "fire");
};

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/router/reg-exp-router/index.js
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/router/reg-exp-router/router.js
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/router/reg-exp-router/node.js
init_modules_watch_stub();
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = Symbol();
var regExpMetaChars = new Set(".\\+*[^]$()");
function compareKey(a, b) {
  if (a.length === 1) {
    return b.length === 1 ? a < b ? -1 : 1 : -1;
  }
  if (b.length === 1) {
    return 1;
  }
  if (a === ONLY_WILDCARD_REG_EXP_STR || a === TAIL_WILDCARD_REG_EXP_STR) {
    return 1;
  } else if (b === ONLY_WILDCARD_REG_EXP_STR || b === TAIL_WILDCARD_REG_EXP_STR) {
    return -1;
  }
  if (a === LABEL_REG_EXP_STR) {
    return 1;
  } else if (b === LABEL_REG_EXP_STR) {
    return -1;
  }
  return a.length === b.length ? a < b ? -1 : 1 : b.length - a.length;
}
__name(compareKey, "compareKey");
var Node = class {
  static {
    __name(this, "Node");
  }
  #index;
  #varIndex;
  #children = /* @__PURE__ */ Object.create(null);
  insert(tokens, index, paramMap, context, pathErrorCheckOnly) {
    if (tokens.length === 0) {
      if (this.#index !== void 0) {
        throw PATH_ERROR;
      }
      if (pathErrorCheckOnly) {
        return;
      }
      this.#index = index;
      return;
    }
    const [token, ...restTokens] = tokens;
    const pattern = token === "*" ? restTokens.length === 0 ? ["", "", ONLY_WILDCARD_REG_EXP_STR] : ["", "", LABEL_REG_EXP_STR] : token === "/*" ? ["", "", TAIL_WILDCARD_REG_EXP_STR] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let node;
    if (pattern) {
      const name2 = pattern[1];
      let regexpStr = pattern[2] || LABEL_REG_EXP_STR;
      if (name2 && pattern[2]) {
        regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
        if (/\((?!\?:)/.test(regexpStr)) {
          throw PATH_ERROR;
        }
      }
      node = this.#children[regexpStr];
      if (!node) {
        if (Object.keys(this.#children).some(
          (k) => k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[regexpStr] = new Node();
        if (name2 !== "") {
          node.#varIndex = context.varIndex++;
        }
      }
      if (!pathErrorCheckOnly && name2 !== "") {
        paramMap.push([name2, node.#varIndex]);
      }
    } else {
      node = this.#children[token];
      if (!node) {
        if (Object.keys(this.#children).some(
          (k) => k.length > 1 && k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[token] = new Node();
      }
    }
    node.insert(restTokens, index, paramMap, context, pathErrorCheckOnly);
  }
  buildRegExpStr() {
    const childKeys = Object.keys(this.#children).sort(compareKey);
    const strList = childKeys.map((k) => {
      const c = this.#children[k];
      return (typeof c.#varIndex === "number" ? `(${k})@${c.#varIndex}` : regExpMetaChars.has(k) ? `\\${k}` : k) + c.buildRegExpStr();
    });
    if (typeof this.#index === "number") {
      strList.unshift(`#${this.#index}`);
    }
    if (strList.length === 0) {
      return "";
    }
    if (strList.length === 1) {
      return strList[0];
    }
    return "(?:" + strList.join("|") + ")";
  }
};

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/router/reg-exp-router/trie.js
init_modules_watch_stub();
var Trie = class {
  static {
    __name(this, "Trie");
  }
  #context = { varIndex: 0 };
  #root = new Node();
  insert(path, index, pathErrorCheckOnly) {
    const paramAssoc = [];
    const groups = [];
    for (let i = 0; ; ) {
      let replaced = false;
      path = path.replace(/\{[^}]+\}/g, (m) => {
        const mark = `@\\${i}`;
        groups[i] = [mark, m];
        i++;
        replaced = true;
        return mark;
      });
      if (!replaced) {
        break;
      }
    }
    const tokens = path.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i = groups.length - 1; i >= 0; i--) {
      const [mark] = groups[i];
      for (let j = tokens.length - 1; j >= 0; j--) {
        if (tokens[j].indexOf(mark) !== -1) {
          tokens[j] = tokens[j].replace(mark, groups[i][1]);
          break;
        }
      }
    }
    this.#root.insert(tokens, index, paramAssoc, this.#context, pathErrorCheckOnly);
    return paramAssoc;
  }
  buildRegExp() {
    let regexp = this.#root.buildRegExpStr();
    if (regexp === "") {
      return [/^$/, [], []];
    }
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_, handlerIndex, paramIndex) => {
      if (handlerIndex !== void 0) {
        indexReplacementMap[++captureIndex] = Number(handlerIndex);
        return "$()";
      }
      if (paramIndex !== void 0) {
        paramReplacementMap[Number(paramIndex)] = ++captureIndex;
        return "";
      }
      return "";
    });
    return [new RegExp(`^${regexp}`), indexReplacementMap, paramReplacementMap];
  }
};

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/router/reg-exp-router/router.js
var emptyParam = [];
var nullMatcher = [/^$/, [], /* @__PURE__ */ Object.create(null)];
var wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
function buildWildcardRegExp(path) {
  return wildcardRegExpCache[path] ??= new RegExp(
    path === "*" ? "" : `^${path.replace(
      /\/\*$|([.\\+*[^\]$()])/g,
      (_, metaChar) => metaChar ? `\\${metaChar}` : "(?:|/.*)"
    )}$`
  );
}
__name(buildWildcardRegExp, "buildWildcardRegExp");
function clearWildcardRegExpCache() {
  wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
}
__name(clearWildcardRegExpCache, "clearWildcardRegExpCache");
function buildMatcherFromPreprocessedRoutes(routes) {
  const trie = new Trie();
  const handlerData = [];
  if (routes.length === 0) {
    return nullMatcher;
  }
  const routesWithStaticPathFlag = routes.map(
    (route) => [!/\*|\/:/.test(route[0]), ...route]
  ).sort(
    ([isStaticA, pathA], [isStaticB, pathB]) => isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length
  );
  const staticMap = /* @__PURE__ */ Object.create(null);
  for (let i = 0, j = -1, len = routesWithStaticPathFlag.length; i < len; i++) {
    const [pathErrorCheckOnly, path, handlers] = routesWithStaticPathFlag[i];
    if (pathErrorCheckOnly) {
      staticMap[path] = [handlers.map(([h]) => [h, /* @__PURE__ */ Object.create(null)]), emptyParam];
    } else {
      j++;
    }
    let paramAssoc;
    try {
      paramAssoc = trie.insert(path, j, pathErrorCheckOnly);
    } catch (e) {
      throw e === PATH_ERROR ? new UnsupportedPathError(path) : e;
    }
    if (pathErrorCheckOnly) {
      continue;
    }
    handlerData[j] = handlers.map(([h, paramCount]) => {
      const paramIndexMap = /* @__PURE__ */ Object.create(null);
      paramCount -= 1;
      for (; paramCount >= 0; paramCount--) {
        const [key, value] = paramAssoc[paramCount];
        paramIndexMap[key] = value;
      }
      return [h, paramIndexMap];
    });
  }
  const [regexp, indexReplacementMap, paramReplacementMap] = trie.buildRegExp();
  for (let i = 0, len = handlerData.length; i < len; i++) {
    for (let j = 0, len2 = handlerData[i].length; j < len2; j++) {
      const map = handlerData[i][j]?.[1];
      if (!map) {
        continue;
      }
      const keys = Object.keys(map);
      for (let k = 0, len3 = keys.length; k < len3; k++) {
        map[keys[k]] = paramReplacementMap[map[keys[k]]];
      }
    }
  }
  const handlerMap = [];
  for (const i in indexReplacementMap) {
    handlerMap[i] = handlerData[indexReplacementMap[i]];
  }
  return [regexp, handlerMap, staticMap];
}
__name(buildMatcherFromPreprocessedRoutes, "buildMatcherFromPreprocessedRoutes");
function findMiddleware(middleware, path) {
  if (!middleware) {
    return void 0;
  }
  for (const k of Object.keys(middleware).sort((a, b) => b.length - a.length)) {
    if (buildWildcardRegExp(k).test(path)) {
      return [...middleware[k]];
    }
  }
  return void 0;
}
__name(findMiddleware, "findMiddleware");
var RegExpRouter = class {
  static {
    __name(this, "RegExpRouter");
  }
  name = "RegExpRouter";
  #middleware;
  #routes;
  constructor() {
    this.#middleware = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
    this.#routes = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
  }
  add(method, path, handler) {
    const middleware = this.#middleware;
    const routes = this.#routes;
    if (!middleware || !routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    if (!middleware[method]) {
      ;
      [middleware, routes].forEach((handlerMap) => {
        handlerMap[method] = /* @__PURE__ */ Object.create(null);
        Object.keys(handlerMap[METHOD_NAME_ALL]).forEach((p) => {
          handlerMap[method][p] = [...handlerMap[METHOD_NAME_ALL][p]];
        });
      });
    }
    if (path === "/*") {
      path = "*";
    }
    const paramCount = (path.match(/\/:/g) || []).length;
    if (/\*$/.test(path)) {
      const re = buildWildcardRegExp(path);
      if (method === METHOD_NAME_ALL) {
        Object.keys(middleware).forEach((m) => {
          middleware[m][path] ||= findMiddleware(middleware[m], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
        });
      } else {
        middleware[method][path] ||= findMiddleware(middleware[method], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
      }
      Object.keys(middleware).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(middleware[m]).forEach((p) => {
            re.test(p) && middleware[m][p].push([handler, paramCount]);
          });
        }
      });
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          Object.keys(routes[m]).forEach(
            (p) => re.test(p) && routes[m][p].push([handler, paramCount])
          );
        }
      });
      return;
    }
    const paths = checkOptionalParameter(path) || [path];
    for (let i = 0, len = paths.length; i < len; i++) {
      const path2 = paths[i];
      Object.keys(routes).forEach((m) => {
        if (method === METHOD_NAME_ALL || method === m) {
          routes[m][path2] ||= [
            ...findMiddleware(middleware[m], path2) || findMiddleware(middleware[METHOD_NAME_ALL], path2) || []
          ];
          routes[m][path2].push([handler, paramCount - len + i + 1]);
        }
      });
    }
  }
  match(method, path) {
    clearWildcardRegExpCache();
    const matchers = this.#buildAllMatchers();
    this.match = (method2, path2) => {
      const matcher = matchers[method2] || matchers[METHOD_NAME_ALL];
      const staticMatch = matcher[2][path2];
      if (staticMatch) {
        return staticMatch;
      }
      const match = path2.match(matcher[0]);
      if (!match) {
        return [[], emptyParam];
      }
      const index = match.indexOf("", 1);
      return [matcher[1][index], match];
    };
    return this.match(method, path);
  }
  #buildAllMatchers() {
    const matchers = /* @__PURE__ */ Object.create(null);
    Object.keys(this.#routes).concat(Object.keys(this.#middleware)).forEach((method) => {
      matchers[method] ||= this.#buildMatcher(method);
    });
    this.#middleware = this.#routes = void 0;
    return matchers;
  }
  #buildMatcher(method) {
    const routes = [];
    let hasOwnRoute = method === METHOD_NAME_ALL;
    [this.#middleware, this.#routes].forEach((r) => {
      const ownRoute = r[method] ? Object.keys(r[method]).map((path) => [path, r[method][path]]) : [];
      if (ownRoute.length !== 0) {
        hasOwnRoute ||= true;
        routes.push(...ownRoute);
      } else if (method !== METHOD_NAME_ALL) {
        routes.push(
          ...Object.keys(r[METHOD_NAME_ALL]).map((path) => [path, r[METHOD_NAME_ALL][path]])
        );
      }
    });
    if (!hasOwnRoute) {
      return null;
    } else {
      return buildMatcherFromPreprocessedRoutes(routes);
    }
  }
};

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/router/smart-router/index.js
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/router/smart-router/router.js
init_modules_watch_stub();
var SmartRouter = class {
  static {
    __name(this, "SmartRouter");
  }
  name = "SmartRouter";
  #routers = [];
  #routes = [];
  constructor(init3) {
    this.#routers = init3.routers;
  }
  add(method, path, handler) {
    if (!this.#routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    this.#routes.push([method, path, handler]);
  }
  match(method, path) {
    if (!this.#routes) {
      throw new Error("Fatal error");
    }
    const routers = this.#routers;
    const routes = this.#routes;
    const len = routers.length;
    let i = 0;
    let res;
    for (; i < len; i++) {
      const router = routers[i];
      try {
        for (let i2 = 0, len2 = routes.length; i2 < len2; i2++) {
          router.add(...routes[i2]);
        }
        res = router.match(method, path);
      } catch (e) {
        if (e instanceof UnsupportedPathError) {
          continue;
        }
        throw e;
      }
      this.match = router.match.bind(router);
      this.#routers = [router];
      this.#routes = void 0;
      break;
    }
    if (i === len) {
      throw new Error("Fatal error");
    }
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res;
  }
  get activeRouter() {
    if (this.#routes || this.#routers.length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return this.#routers[0];
  }
};

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/router/trie-router/index.js
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/router/trie-router/router.js
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/router/trie-router/node.js
init_modules_watch_stub();
var emptyParams = /* @__PURE__ */ Object.create(null);
var Node2 = class {
  static {
    __name(this, "Node");
  }
  #methods;
  #children;
  #patterns;
  #order = 0;
  #params = emptyParams;
  constructor(method, handler, children) {
    this.#children = children || /* @__PURE__ */ Object.create(null);
    this.#methods = [];
    if (method && handler) {
      const m = /* @__PURE__ */ Object.create(null);
      m[method] = { handler, possibleKeys: [], score: 0 };
      this.#methods = [m];
    }
    this.#patterns = [];
  }
  insert(method, path, handler) {
    this.#order = ++this.#order;
    let curNode = this;
    const parts = splitRoutingPath(path);
    const possibleKeys = [];
    for (let i = 0, len = parts.length; i < len; i++) {
      const p = parts[i];
      const nextP = parts[i + 1];
      const pattern = getPattern(p, nextP);
      const key = Array.isArray(pattern) ? pattern[0] : p;
      if (Object.keys(curNode.#children).includes(key)) {
        curNode = curNode.#children[key];
        const pattern2 = getPattern(p, nextP);
        if (pattern2) {
          possibleKeys.push(pattern2[1]);
        }
        continue;
      }
      curNode.#children[key] = new Node2();
      if (pattern) {
        curNode.#patterns.push(pattern);
        possibleKeys.push(pattern[1]);
      }
      curNode = curNode.#children[key];
    }
    const m = /* @__PURE__ */ Object.create(null);
    const handlerSet = {
      handler,
      possibleKeys: possibleKeys.filter((v, i, a) => a.indexOf(v) === i),
      score: this.#order
    };
    m[method] = handlerSet;
    curNode.#methods.push(m);
    return curNode;
  }
  #getHandlerSets(node, method, nodeParams, params) {
    const handlerSets = [];
    for (let i = 0, len = node.#methods.length; i < len; i++) {
      const m = node.#methods[i];
      const handlerSet = m[method] || m[METHOD_NAME_ALL];
      const processedSet = {};
      if (handlerSet !== void 0) {
        handlerSet.params = /* @__PURE__ */ Object.create(null);
        handlerSets.push(handlerSet);
        if (nodeParams !== emptyParams || params && params !== emptyParams) {
          for (let i2 = 0, len2 = handlerSet.possibleKeys.length; i2 < len2; i2++) {
            const key = handlerSet.possibleKeys[i2];
            const processed = processedSet[handlerSet.score];
            handlerSet.params[key] = params?.[key] && !processed ? params[key] : nodeParams[key] ?? params?.[key];
            processedSet[handlerSet.score] = true;
          }
        }
      }
    }
    return handlerSets;
  }
  search(method, path) {
    const handlerSets = [];
    this.#params = emptyParams;
    const curNode = this;
    let curNodes = [curNode];
    const parts = splitPath(path);
    const curNodesQueue = [];
    for (let i = 0, len = parts.length; i < len; i++) {
      const part = parts[i];
      const isLast = i === len - 1;
      const tempNodes = [];
      for (let j = 0, len2 = curNodes.length; j < len2; j++) {
        const node = curNodes[j];
        const nextNode = node.#children[part];
        if (nextNode) {
          nextNode.#params = node.#params;
          if (isLast) {
            if (nextNode.#children["*"]) {
              handlerSets.push(
                ...this.#getHandlerSets(nextNode.#children["*"], method, node.#params)
              );
            }
            handlerSets.push(...this.#getHandlerSets(nextNode, method, node.#params));
          } else {
            tempNodes.push(nextNode);
          }
        }
        for (let k = 0, len3 = node.#patterns.length; k < len3; k++) {
          const pattern = node.#patterns[k];
          const params = node.#params === emptyParams ? {} : { ...node.#params };
          if (pattern === "*") {
            const astNode = node.#children["*"];
            if (astNode) {
              handlerSets.push(...this.#getHandlerSets(astNode, method, node.#params));
              astNode.#params = params;
              tempNodes.push(astNode);
            }
            continue;
          }
          if (part === "") {
            continue;
          }
          const [key, name2, matcher] = pattern;
          const child = node.#children[key];
          const restPathString = parts.slice(i).join("/");
          if (matcher instanceof RegExp) {
            const m = matcher.exec(restPathString);
            if (m) {
              params[name2] = m[0];
              handlerSets.push(...this.#getHandlerSets(child, method, node.#params, params));
              if (Object.keys(child.#children).length) {
                child.#params = params;
                const componentCount = m[0].match(/\//)?.length ?? 0;
                const targetCurNodes = curNodesQueue[componentCount] ||= [];
                targetCurNodes.push(child);
              }
              continue;
            }
          }
          if (matcher === true || matcher.test(part)) {
            params[name2] = part;
            if (isLast) {
              handlerSets.push(...this.#getHandlerSets(child, method, params, node.#params));
              if (child.#children["*"]) {
                handlerSets.push(
                  ...this.#getHandlerSets(child.#children["*"], method, params, node.#params)
                );
              }
            } else {
              child.#params = params;
              tempNodes.push(child);
            }
          }
        }
      }
      curNodes = tempNodes.concat(curNodesQueue.shift() ?? []);
    }
    if (handlerSets.length > 1) {
      handlerSets.sort((a, b) => {
        return a.score - b.score;
      });
    }
    return [handlerSets.map(({ handler, params }) => [handler, params])];
  }
};

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = class {
  static {
    __name(this, "TrieRouter");
  }
  name = "TrieRouter";
  #node;
  constructor() {
    this.#node = new Node2();
  }
  add(method, path, handler) {
    const results = checkOptionalParameter(path);
    if (results) {
      for (let i = 0, len = results.length; i < len; i++) {
        this.#node.insert(method, results[i], handler);
      }
      return;
    }
    this.#node.insert(method, path, handler);
  }
  match(method, path) {
    return this.#node.search(method, path);
  }
};

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/hono.js
var Hono2 = class extends Hono {
  static {
    __name(this, "Hono");
  }
  constructor(options = {}) {
    super(options);
    this.router = options.router ?? new SmartRouter({
      routers: [new RegExpRouter(), new TrieRouter()]
    });
  }
};

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/middleware/cors/index.js
init_modules_watch_stub();
var cors = /* @__PURE__ */ __name((options) => {
  const defaults = {
    origin: "*",
    allowMethods: ["GET", "HEAD", "PUT", "POST", "DELETE", "PATCH"],
    allowHeaders: [],
    exposeHeaders: []
  };
  const opts = {
    ...defaults,
    ...options
  };
  const findAllowOrigin = ((optsOrigin) => {
    if (typeof optsOrigin === "string") {
      if (optsOrigin === "*") {
        return () => optsOrigin;
      } else {
        return (origin) => optsOrigin === origin ? origin : null;
      }
    } else if (typeof optsOrigin === "function") {
      return optsOrigin;
    } else {
      return (origin) => optsOrigin.includes(origin) ? origin : null;
    }
  })(opts.origin);
  return /* @__PURE__ */ __name(async function cors2(c, next) {
    function set(key, value) {
      c.res.headers.set(key, value);
    }
    __name(set, "set");
    const allowOrigin = findAllowOrigin(c.req.header("origin") || "", c);
    if (allowOrigin) {
      set("Access-Control-Allow-Origin", allowOrigin);
    }
    if (opts.origin !== "*") {
      const existingVary = c.req.header("Vary");
      if (existingVary) {
        set("Vary", existingVary);
      } else {
        set("Vary", "Origin");
      }
    }
    if (opts.credentials) {
      set("Access-Control-Allow-Credentials", "true");
    }
    if (opts.exposeHeaders?.length) {
      set("Access-Control-Expose-Headers", opts.exposeHeaders.join(","));
    }
    if (c.req.method === "OPTIONS") {
      if (opts.maxAge != null) {
        set("Access-Control-Max-Age", opts.maxAge.toString());
      }
      if (opts.allowMethods?.length) {
        set("Access-Control-Allow-Methods", opts.allowMethods.join(","));
      }
      let headers = opts.allowHeaders;
      if (!headers?.length) {
        const requestHeaders = c.req.header("Access-Control-Request-Headers");
        if (requestHeaders) {
          headers = requestHeaders.split(/\s*,\s*/);
        }
      }
      if (headers?.length) {
        set("Access-Control-Allow-Headers", headers.join(","));
        c.res.headers.append("Vary", "Access-Control-Request-Headers");
      }
      c.res.headers.delete("Content-Length");
      c.res.headers.delete("Content-Type");
      return new Response(null, {
        headers: c.res.headers,
        status: 204,
        statusText: "No Content"
      });
    }
    await next();
  }, "cors2");
}, "cors");

// src/mail.ts
init_modules_watch_stub();

// lib/prismaClient.ts
init_modules_watch_stub();
var import_client = __toESM(require_default2());

// ../../node_modules/.pnpm/@prisma+adapter-d1@6.8.2/node_modules/@prisma/adapter-d1/dist/index.mjs
init_modules_watch_stub();

// ../../node_modules/.pnpm/@prisma+driver-adapter-utils@6.8.2/node_modules/@prisma/driver-adapter-utils/dist/index.mjs
init_modules_watch_stub();

// ../../node_modules/.pnpm/@prisma+debug@6.8.2/node_modules/@prisma/debug/dist/index.mjs
init_modules_watch_stub();
var __defProp2 = Object.defineProperty;
var __export2 = /* @__PURE__ */ __name((target, all) => {
  for (var name2 in all)
    __defProp2(target, name2, { get: all[name2], enumerable: true });
}, "__export");
var colors_exports = {};
__export2(colors_exports, {
  $: /* @__PURE__ */ __name(() => $, "$"),
  bgBlack: /* @__PURE__ */ __name(() => bgBlack, "bgBlack"),
  bgBlue: /* @__PURE__ */ __name(() => bgBlue, "bgBlue"),
  bgCyan: /* @__PURE__ */ __name(() => bgCyan, "bgCyan"),
  bgGreen: /* @__PURE__ */ __name(() => bgGreen, "bgGreen"),
  bgMagenta: /* @__PURE__ */ __name(() => bgMagenta, "bgMagenta"),
  bgRed: /* @__PURE__ */ __name(() => bgRed, "bgRed"),
  bgWhite: /* @__PURE__ */ __name(() => bgWhite, "bgWhite"),
  bgYellow: /* @__PURE__ */ __name(() => bgYellow, "bgYellow"),
  black: /* @__PURE__ */ __name(() => black, "black"),
  blue: /* @__PURE__ */ __name(() => blue, "blue"),
  bold: /* @__PURE__ */ __name(() => bold, "bold"),
  cyan: /* @__PURE__ */ __name(() => cyan, "cyan"),
  dim: /* @__PURE__ */ __name(() => dim, "dim"),
  gray: /* @__PURE__ */ __name(() => gray, "gray"),
  green: /* @__PURE__ */ __name(() => green, "green"),
  grey: /* @__PURE__ */ __name(() => grey, "grey"),
  hidden: /* @__PURE__ */ __name(() => hidden, "hidden"),
  inverse: /* @__PURE__ */ __name(() => inverse, "inverse"),
  italic: /* @__PURE__ */ __name(() => italic, "italic"),
  magenta: /* @__PURE__ */ __name(() => magenta, "magenta"),
  red: /* @__PURE__ */ __name(() => red, "red"),
  reset: /* @__PURE__ */ __name(() => reset, "reset"),
  strikethrough: /* @__PURE__ */ __name(() => strikethrough, "strikethrough"),
  underline: /* @__PURE__ */ __name(() => underline, "underline"),
  white: /* @__PURE__ */ __name(() => white, "white"),
  yellow: /* @__PURE__ */ __name(() => yellow, "yellow")
});
var FORCE_COLOR;
var NODE_DISABLE_COLORS;
var NO_COLOR;
var TERM;
var isTTY = true;
if (typeof process !== "undefined") {
  ({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env || {});
  isTTY = process.stdout && process.stdout.isTTY;
}
var $ = {
  enabled: !NODE_DISABLE_COLORS && NO_COLOR == null && TERM !== "dumb" && (FORCE_COLOR != null && FORCE_COLOR !== "0" || isTTY)
};
function init(x, y) {
  let rgx = new RegExp(`\\x1b\\[${y}m`, "g");
  let open = `\x1B[${x}m`, close = `\x1B[${y}m`;
  return function(txt) {
    if (!$.enabled || txt == null) return txt;
    return open + (!!~("" + txt).indexOf(close) ? txt.replace(rgx, close + open) : txt) + close;
  };
}
__name(init, "init");
var reset = init(0, 0);
var bold = init(1, 22);
var dim = init(2, 22);
var italic = init(3, 23);
var underline = init(4, 24);
var inverse = init(7, 27);
var hidden = init(8, 28);
var strikethrough = init(9, 29);
var black = init(30, 39);
var red = init(31, 39);
var green = init(32, 39);
var yellow = init(33, 39);
var blue = init(34, 39);
var magenta = init(35, 39);
var cyan = init(36, 39);
var white = init(37, 39);
var gray = init(90, 39);
var grey = init(90, 39);
var bgBlack = init(40, 49);
var bgRed = init(41, 49);
var bgGreen = init(42, 49);
var bgYellow = init(43, 49);
var bgBlue = init(44, 49);
var bgMagenta = init(45, 49);
var bgCyan = init(46, 49);
var bgWhite = init(47, 49);
var MAX_ARGS_HISTORY = 100;
var COLORS = ["green", "yellow", "blue", "magenta", "cyan", "red"];
var argsHistory = [];
var lastTimestamp = Date.now();
var lastColor = 0;
var processEnv = typeof process !== "undefined" ? process.env : {};
globalThis.DEBUG ??= processEnv.DEBUG ?? "";
globalThis.DEBUG_COLORS ??= processEnv.DEBUG_COLORS ? processEnv.DEBUG_COLORS === "true" : true;
var topProps = {
  enable(namespace) {
    if (typeof namespace === "string") {
      globalThis.DEBUG = namespace;
    }
  },
  disable() {
    const prev = globalThis.DEBUG;
    globalThis.DEBUG = "";
    return prev;
  },
  // this is the core logic to check if logging should happen or not
  enabled(namespace) {
    const listenedNamespaces = globalThis.DEBUG.split(",").map((s) => {
      return s.replace(/[.+?^${}()|[\]\\]/g, "\\$&");
    });
    const isListened = listenedNamespaces.some((listenedNamespace) => {
      if (listenedNamespace === "" || listenedNamespace[0] === "-") return false;
      return namespace.match(RegExp(listenedNamespace.split("*").join(".*") + "$"));
    });
    const isExcluded = listenedNamespaces.some((listenedNamespace) => {
      if (listenedNamespace === "" || listenedNamespace[0] !== "-") return false;
      return namespace.match(RegExp(listenedNamespace.slice(1).split("*").join(".*") + "$"));
    });
    return isListened && !isExcluded;
  },
  log: /* @__PURE__ */ __name((...args) => {
    const [namespace, format, ...rest] = args;
    const logWithFormatting = console.warn ?? console.log;
    logWithFormatting(`${namespace} ${format}`, ...rest);
  }, "log"),
  formatters: {}
  // not implemented
};
function debugCreate(namespace) {
  const instanceProps = {
    color: COLORS[lastColor++ % COLORS.length],
    enabled: topProps.enabled(namespace),
    namespace,
    log: topProps.log,
    extend: /* @__PURE__ */ __name(() => {
    }, "extend")
    // not implemented
  };
  const debugCall = /* @__PURE__ */ __name((...args) => {
    const { enabled, namespace: namespace2, color, log } = instanceProps;
    if (args.length !== 0) {
      argsHistory.push([namespace2, ...args]);
    }
    if (argsHistory.length > MAX_ARGS_HISTORY) {
      argsHistory.shift();
    }
    if (topProps.enabled(namespace2) || enabled) {
      const stringArgs = args.map((arg) => {
        if (typeof arg === "string") {
          return arg;
        }
        return safeStringify(arg);
      });
      const ms = `+${Date.now() - lastTimestamp}ms`;
      lastTimestamp = Date.now();
      if (globalThis.DEBUG_COLORS) {
        log(colors_exports[color](bold(namespace2)), ...stringArgs, colors_exports[color](ms));
      } else {
        log(namespace2, ...stringArgs, ms);
      }
    }
  }, "debugCall");
  return new Proxy(debugCall, {
    get: /* @__PURE__ */ __name((_, prop) => instanceProps[prop], "get"),
    set: /* @__PURE__ */ __name((_, prop, value) => instanceProps[prop] = value, "set")
  });
}
__name(debugCreate, "debugCreate");
var Debug2 = new Proxy(debugCreate, {
  get: /* @__PURE__ */ __name((_, prop) => topProps[prop], "get"),
  set: /* @__PURE__ */ __name((_, prop, value) => topProps[prop] = value, "set")
});
function safeStringify(value, indent = 2) {
  const cache = /* @__PURE__ */ new Set();
  return JSON.stringify(
    value,
    (key, value2) => {
      if (typeof value2 === "object" && value2 !== null) {
        if (cache.has(value2)) {
          return `[Circular *]`;
        }
        cache.add(value2);
      } else if (typeof value2 === "bigint") {
        return value2.toString();
      }
      return value2;
    },
    indent
  );
}
__name(safeStringify, "safeStringify");

// ../../node_modules/.pnpm/@prisma+driver-adapter-utils@6.8.2/node_modules/@prisma/driver-adapter-utils/dist/index.mjs
var DriverAdapterError = class extends Error {
  static {
    __name(this, "DriverAdapterError");
  }
  name = "DriverAdapterError";
  cause;
  constructor(payload) {
    super(typeof payload["message"] === "string" ? payload["message"] : payload.kind);
    this.cause = payload;
  }
};
var debug = Debug2("driver-adapter-utils");
var ColumnTypeEnum = {
  // Scalars
  Int32: 0,
  Int64: 1,
  Float: 2,
  Double: 3,
  Numeric: 4,
  Boolean: 5,
  Character: 6,
  Text: 7,
  Date: 8,
  Time: 9,
  DateTime: 10,
  Json: 11,
  Enum: 12,
  Bytes: 13,
  Set: 14,
  Uuid: 15,
  // Arrays
  Int32Array: 64,
  Int64Array: 65,
  FloatArray: 66,
  DoubleArray: 67,
  NumericArray: 68,
  BooleanArray: 69,
  CharacterArray: 70,
  TextArray: 71,
  DateArray: 72,
  TimeArray: 73,
  DateTimeArray: 74,
  JsonArray: 75,
  EnumArray: 76,
  BytesArray: 77,
  UuidArray: 78,
  // Custom
  UnknownNumber: 128
};
var mockAdapterErrors = {
  queryRaw: new Error("Not implemented: queryRaw"),
  executeRaw: new Error("Not implemented: executeRaw"),
  startTransaction: new Error("Not implemented: startTransaction"),
  executeScript: new Error("Not implemented: executeScript"),
  dispose: new Error("Not implemented: dispose")
};

// ../../node_modules/.pnpm/@prisma+adapter-d1@6.8.2/node_modules/@prisma/adapter-d1/dist/index.mjs
var FORCE_COLOR2;
var NODE_DISABLE_COLORS2;
var NO_COLOR2;
var TERM2;
var isTTY2 = true;
if (typeof process !== "undefined") {
  ({ FORCE_COLOR: FORCE_COLOR2, NODE_DISABLE_COLORS: NODE_DISABLE_COLORS2, NO_COLOR: NO_COLOR2, TERM: TERM2 } = process.env || {});
  isTTY2 = process.stdout && process.stdout.isTTY;
}
var $2 = {
  enabled: !NODE_DISABLE_COLORS2 && NO_COLOR2 == null && TERM2 !== "dumb" && (FORCE_COLOR2 != null && FORCE_COLOR2 !== "0" || isTTY2)
};
function init2(x, y) {
  let rgx = new RegExp(`\\x1b\\[${y}m`, "g");
  let open = `\x1B[${x}m`, close = `\x1B[${y}m`;
  return function(txt) {
    if (!$2.enabled || txt == null) return txt;
    return open + (!!~("" + txt).indexOf(close) ? txt.replace(rgx, close + open) : txt) + close;
  };
}
__name(init2, "init");
var reset2 = init2(0, 0);
var bold2 = init2(1, 22);
var dim2 = init2(2, 22);
var italic2 = init2(3, 23);
var underline2 = init2(4, 24);
var inverse2 = init2(7, 27);
var hidden2 = init2(8, 28);
var strikethrough2 = init2(9, 29);
var black2 = init2(30, 39);
var red2 = init2(31, 39);
var green2 = init2(32, 39);
var yellow2 = init2(33, 39);
var blue2 = init2(34, 39);
var magenta2 = init2(35, 39);
var cyan2 = init2(36, 39);
var white2 = init2(37, 39);
var gray2 = init2(90, 39);
var grey2 = init2(90, 39);
var bgBlack2 = init2(40, 49);
var bgRed2 = init2(41, 49);
var bgGreen2 = init2(42, 49);
var bgYellow2 = init2(43, 49);
var bgBlue2 = init2(44, 49);
var bgMagenta2 = init2(45, 49);
var bgCyan2 = init2(46, 49);
var bgWhite2 = init2(47, 49);
var name = "@prisma/adapter-d1";
var MAX_BIND_VALUES = 98;
function getColumnTypes(columnNames, rows) {
  const columnTypes = [];
  columnLoop: for (let columnIndex = 0; columnIndex < columnNames.length; columnIndex++) {
    for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
      const candidateValue = rows[rowIndex][columnIndex];
      if (candidateValue !== null) {
        const inferred = inferColumnType(candidateValue);
        if (columnTypes[columnIndex] === void 0 || inferred === ColumnTypeEnum.Text) {
          columnTypes[columnIndex] = inferred;
        }
        if (inferred !== ColumnTypeEnum.UnknownNumber) {
          continue columnLoop;
        }
      }
    }
    if (columnTypes[columnIndex] === void 0) {
      columnTypes[columnIndex] = ColumnTypeEnum.Int32;
    }
  }
  return columnTypes;
}
__name(getColumnTypes, "getColumnTypes");
function inferColumnType(value) {
  switch (typeof value) {
    case "string":
      return inferStringType(value);
    case "number":
      return inferNumberType(value);
    case "object":
      return inferObjectType(value);
    default:
      throw new UnexpectedTypeError(value);
  }
}
__name(inferColumnType, "inferColumnType");
var isoDateRegex = new RegExp(
  /^(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))$|^(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))$|^(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))$/
);
var sqliteDateRegex = /^\d{4}-[0-1]\d-[0-3]\d [0-2]\d:[0-5]\d:[0-5]\d$/;
function isISODate(str) {
  return isoDateRegex.test(str) || sqliteDateRegex.test(str);
}
__name(isISODate, "isISODate");
function inferStringType(value) {
  if (isISODate(value)) {
    return ColumnTypeEnum.DateTime;
  }
  return ColumnTypeEnum.Text;
}
__name(inferStringType, "inferStringType");
function inferNumberType(_) {
  return ColumnTypeEnum.UnknownNumber;
}
__name(inferNumberType, "inferNumberType");
function inferObjectType(value) {
  if (value instanceof Array) {
    return ColumnTypeEnum.Bytes;
  }
  throw new UnexpectedTypeError(value);
}
__name(inferObjectType, "inferObjectType");
var UnexpectedTypeError = class extends Error {
  static {
    __name(this, "UnexpectedTypeError");
  }
  name = "UnexpectedTypeError";
  constructor(value) {
    const type = typeof value;
    const repr = type === "object" ? JSON.stringify(value) : String(value);
    super(`unexpected value of type ${type}: ${repr}`);
  }
};
function mapRow(result, columnTypes) {
  for (let i = 0; i < result.length; i++) {
    const value = result[i];
    if (value instanceof ArrayBuffer) {
      result[i] = Array.from(new Uint8Array(value));
      continue;
    }
    if (typeof value === "number" && (columnTypes[i] === ColumnTypeEnum.Int32 || columnTypes[i] === ColumnTypeEnum.Int64) && !Number.isInteger(value)) {
      result[i] = Math.trunc(value);
      continue;
    }
    if (typeof value === "number" && columnTypes[i] === ColumnTypeEnum.Text) {
      result[i] = value.toString();
      continue;
    }
    if (typeof value === "bigint") {
      result[i] = value.toString();
      continue;
    }
    if (columnTypes[i] === ColumnTypeEnum.Boolean) {
      result[i] = JSON.parse(value);
    }
  }
  return result;
}
__name(mapRow, "mapRow");
function convertDriverError(error) {
  if (!isDbError(error)) {
    throw error;
  }
  let stripped = error.message.split("D1_ERROR: ").at(1) ?? error.message;
  stripped = stripped.split("SqliteError: ").at(1) ?? stripped;
  if (stripped.startsWith("UNIQUE constraint failed") || stripped.startsWith("PRIMARY KEY constraint failed")) {
    return {
      kind: "UniqueConstraintViolation",
      fields: stripped.split(": ").at(1)?.split(", ").map((field) => field.split(".").pop()) ?? []
    };
  } else if (stripped.startsWith("NOT NULL constraint failed")) {
    return {
      kind: "NullConstraintViolation",
      fields: stripped.split(": ").at(1)?.split(", ").map((field) => field.split(".").pop()) ?? []
    };
  } else if (stripped.startsWith("FOREIGN KEY constraint failed") || stripped.startsWith("CHECK constraint failed")) {
    return {
      kind: "ForeignKeyConstraintViolation",
      constraint: { foreignKey: {} }
    };
  } else if (stripped.startsWith("no such table")) {
    return {
      kind: "TableDoesNotExist",
      table: stripped.split(": ").pop()
    };
  } else if (stripped.startsWith("no such column")) {
    return {
      kind: "ColumnNotFound",
      column: stripped.split(": ").pop()
    };
  } else if (stripped.includes("has no column named ")) {
    return {
      kind: "ColumnNotFound",
      column: stripped.split("has no column named ").pop()
    };
  }
  return {
    kind: "sqlite",
    extendedCode: error["code"] ?? error["cause"]?.["code"] ?? 1,
    message: error.message
  };
}
__name(convertDriverError, "convertDriverError");
function isDbError(error) {
  return typeof error.message === "string";
}
__name(isDbError, "isDbError");
function cleanArg(arg, argType) {
  if (arg !== null) {
    if (argType === "Int64") {
      const asInt56 = Number.parseInt(arg);
      if (!Number.isSafeInteger(asInt56)) {
        throw new Error(`Invalid Int64-encoded value received: ${arg}`);
      }
      return asInt56;
    }
    if (argType === "Int32") {
      return Number.parseInt(arg);
    }
    if (argType === "Float" || argType === "Double") {
      return Number.parseFloat(arg);
    }
    if (arg === true) {
      return 1;
    }
    if (arg === false) {
      return 0;
    }
    if (arg instanceof Uint8Array) {
      return Array.from(arg);
    }
  }
  return arg;
}
__name(cleanArg, "cleanArg");
var debug2 = Debug2("prisma:driver-adapter:d1");
var D1Queryable = class {
  static {
    __name(this, "D1Queryable");
  }
  constructor(client) {
    this.client = client;
  }
  provider = "sqlite";
  adapterName = name;
  /**
   * Execute a query given as SQL, interpolating the given parameters.
   */
  async queryRaw(query) {
    const tag = "[js::query_raw]";
    debug2(`${tag} %O`, query);
    const data = await this.performIO(query);
    const convertedData = this.convertData(data);
    return convertedData;
  }
  convertData(ioResult) {
    const columnNames = ioResult[0];
    const results = ioResult[1];
    if (results.length === 0) {
      return {
        columnNames: [],
        columnTypes: [],
        rows: []
      };
    }
    const columnTypes = Object.values(getColumnTypes(columnNames, results));
    const rows = results.map((value) => mapRow(value, columnTypes));
    return {
      columnNames,
      // * Note: without Object.values the array looks like
      // * columnTypes: [ id: 128 ],
      // * and errors with:
      // * ✘ [ERROR] A hanging Promise was canceled. This happens when the worker runtime is waiting for a Promise from JavaScript to resolve, but has detected that the Promise cannot possibly ever resolve because all code and events related to the Promise's I/O context have already finished.
      columnTypes,
      rows
    };
  }
  /**
   * Execute a query given as SQL, interpolating the given parameters and
   * returning the number of affected rows.
   * Note: Queryable expects a u64, but napi.rs only supports u32.
   */
  async executeRaw(query) {
    const tag = "[js::execute_raw]";
    debug2(`${tag} %O`, query);
    const result = await this.performIO(query, true);
    return result.meta.changes ?? 0;
  }
  async performIO(query, executeRaw = false) {
    try {
      query.args = query.args.map((arg, i) => cleanArg(arg, query.argTypes[i]));
      const stmt = this.client.prepare(query.sql).bind(...query.args);
      if (executeRaw) {
        return await stmt.run();
      } else {
        const [columnNames, ...rows] = await stmt.raw({ columnNames: true });
        return [columnNames, rows];
      }
    } catch (e) {
      onError(e);
    }
  }
};
var D1Transaction = class extends D1Queryable {
  static {
    __name(this, "D1Transaction");
  }
  constructor(client, options) {
    super(client);
    this.options = options;
  }
  async commit() {
    debug2(`[js::commit]`);
  }
  async rollback() {
    debug2(`[js::rollback]`);
  }
};
var PrismaD1Adapter = class extends D1Queryable {
  static {
    __name(this, "PrismaD1Adapter");
  }
  constructor(client, release) {
    super(client);
    this.release = release;
  }
  tags = {
    error: red2("prisma:error"),
    warn: yellow2("prisma:warn"),
    info: cyan2("prisma:info"),
    query: blue2("prisma:query")
  };
  alreadyWarned = /* @__PURE__ */ new Set();
  /**
   * This will warn once per transaction
   * e.g. the following two explicit transactions
   * will only trigger _two_ warnings
   *
   * ```ts
   * await prisma.$transaction([ ...queries ])
   * await prisma.$transaction([ ...moreQueries ])
   * ```
   */
  warnOnce = /* @__PURE__ */ __name((key, message, ...args) => {
    if (!this.alreadyWarned.has(key)) {
      this.alreadyWarned.add(key);
      console.info(`${this.tags.warn} ${message}`, ...args);
    }
  }, "warnOnce");
  async executeScript(script) {
    try {
      await this.client.exec(script);
    } catch (error) {
      onError(error);
    }
  }
  getConnectionInfo() {
    return {
      maxBindValues: MAX_BIND_VALUES
    };
  }
  async startTransaction(isolationLevel) {
    if (isolationLevel && isolationLevel !== "SERIALIZABLE") {
      throw new DriverAdapterError({
        kind: "InvalidIsolationLevel",
        level: isolationLevel
      });
    }
    this.warnOnce(
      "D1 Transaction",
      "Cloudflare D1 does not support transactions yet. When using Prisma's D1 adapter, implicit & explicit transactions will be ignored and run as individual queries, which breaks the guarantees of the ACID properties of transactions. For more details see https://pris.ly/d/d1-transactions"
    );
    const options = {
      usePhantomQuery: true
    };
    const tag = "[js::startTransaction]";
    debug2("%s options: %O", tag, options);
    return new D1Transaction(this.client, options);
  }
  async dispose() {
    await this.release?.();
  }
};
var PrismaD1AdapterFactory = class {
  static {
    __name(this, "PrismaD1AdapterFactory");
  }
  constructor(client) {
    this.client = client;
  }
  provider = "sqlite";
  adapterName = name;
  async connect() {
    return new PrismaD1Adapter(this.client, async () => {
    });
  }
};
function onError(error) {
  console.error("Error in performIO: %O", error);
  throw new DriverAdapterError(convertDriverError(error));
}
__name(onError, "onError");
var debug22 = Debug2("prisma:driver-adapter:d1-http");

// lib/prismaClient.ts
var prismaClients = {
  async fetch(db) {
    const adapter = new PrismaD1AdapterFactory(db);
    const prisma = new import_client.PrismaClient({ adapter });
    return prisma;
  }
};
var prismaClient_default = prismaClients;

// src/mail.ts
var mail_default = /* @__PURE__ */ __name((app2, path) => {
  app2.get(`${path}/refetch`, async (c) => {
    const { name: name2 } = c.req.query();
    const inboxJSONString = await c.env.amailkv.get(name2) || "[]";
    const inboxJSON = JSON.parse(inboxJSONString);
    inboxJSON.reverse();
    return new Response(JSON.stringify(inboxJSON), { headers: { "content-type": "application/json" } });
  });
  app2.get(`${path}/all_mail`, async (c) => {
    const prisma = await prismaClient_default.fetch(c.env.DB);
    const query = c.req.query();
    const page = parseInt(query.page || "1", 10);
    const pageSize = parseInt(query.pageSize || "10", 10);
    const skip2 = (page - 1) * pageSize;
    try {
      const [emails, total] = await Promise.all([
        prisma.email.findMany({
          orderBy: { createdAt: "desc" },
          skip: skip2,
          take: pageSize
        }),
        prisma.email.count()
      ]);
      return c.json({
        data: emails,
        pagination: {
          page,
          pageSize,
          total,
          totalPages: Math.ceil(total / pageSize)
        }
      });
    } catch (err) {
      console.error("Failed to fetch emails:", err);
      return c.json({ error: `Failed to fetch emails${JSON.stringify(c)}` }, 500);
    }
  });
}, "default");

// src/user.ts
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/middleware/jwt/index.js
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/middleware/jwt/jwt.js
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/helper/cookie/index.js
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/utils/cookie.js
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/http-exception.js
init_modules_watch_stub();
var HTTPException = class extends Error {
  static {
    __name(this, "HTTPException");
  }
  res;
  status;
  constructor(status = 500, options) {
    super(options?.message, { cause: options?.cause });
    this.res = options?.res;
    this.status = status;
  }
  getResponse() {
    if (this.res) {
      const newResponse = new Response(this.res.body, {
        status: this.status,
        headers: this.res.headers
      });
      return newResponse;
    }
    return new Response(this.message, {
      status: this.status
    });
  }
};

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/utils/jwt/index.js
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/utils/jwt/jwt.js
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/utils/encode.js
init_modules_watch_stub();
var decodeBase64Url = /* @__PURE__ */ __name((str) => {
  return decodeBase642(str.replace(/_|-/g, (m) => ({ _: "/", "-": "+" })[m] ?? m));
}, "decodeBase64Url");
var encodeBase64Url = /* @__PURE__ */ __name((buf) => encodeBase64(buf).replace(/\/|\+/g, (m) => ({ "/": "_", "+": "-" })[m] ?? m), "encodeBase64Url");
var encodeBase64 = /* @__PURE__ */ __name((buf) => {
  let binary = "";
  const bytes = new Uint8Array(buf);
  for (let i = 0, len = bytes.length; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}, "encodeBase64");
var decodeBase642 = /* @__PURE__ */ __name((str) => {
  const binary = atob(str);
  const bytes = new Uint8Array(new ArrayBuffer(binary.length));
  const half = binary.length / 2;
  for (let i = 0, j = binary.length - 1; i <= half; i++, j--) {
    bytes[i] = binary.charCodeAt(i);
    bytes[j] = binary.charCodeAt(j);
  }
  return bytes;
}, "decodeBase64");

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/utils/jwt/jwa.js
init_modules_watch_stub();
var AlgorithmTypes = /* @__PURE__ */ ((AlgorithmTypes2) => {
  AlgorithmTypes2["HS256"] = "HS256";
  AlgorithmTypes2["HS384"] = "HS384";
  AlgorithmTypes2["HS512"] = "HS512";
  AlgorithmTypes2["RS256"] = "RS256";
  AlgorithmTypes2["RS384"] = "RS384";
  AlgorithmTypes2["RS512"] = "RS512";
  AlgorithmTypes2["PS256"] = "PS256";
  AlgorithmTypes2["PS384"] = "PS384";
  AlgorithmTypes2["PS512"] = "PS512";
  AlgorithmTypes2["ES256"] = "ES256";
  AlgorithmTypes2["ES384"] = "ES384";
  AlgorithmTypes2["ES512"] = "ES512";
  AlgorithmTypes2["EdDSA"] = "EdDSA";
  return AlgorithmTypes2;
})(AlgorithmTypes || {});

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/utils/jwt/jws.js
init_modules_watch_stub();

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/helper/adapter/index.js
init_modules_watch_stub();
var knownUserAgents = {
  deno: "Deno",
  bun: "Bun",
  workerd: "Cloudflare-Workers",
  node: "Node.js"
};
var getRuntimeKey = /* @__PURE__ */ __name(() => {
  const global2 = globalThis;
  const userAgentSupported = typeof navigator !== "undefined" && true;
  if (userAgentSupported) {
    for (const [runtimeKey, userAgent] of Object.entries(knownUserAgents)) {
      if (checkUserAgentEquals(userAgent)) {
        return runtimeKey;
      }
    }
  }
  if (typeof global2?.EdgeRuntime === "string") {
    return "edge-light";
  }
  if (global2?.fastly !== void 0) {
    return "fastly";
  }
  if (global2?.process?.release?.name === "node") {
    return "node";
  }
  return "other";
}, "getRuntimeKey");
var checkUserAgentEquals = /* @__PURE__ */ __name((platform) => {
  const userAgent = "Cloudflare-Workers";
  return userAgent.startsWith(platform);
}, "checkUserAgentEquals");

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/utils/jwt/types.js
init_modules_watch_stub();
var JwtAlgorithmNotImplemented = class extends Error {
  static {
    __name(this, "JwtAlgorithmNotImplemented");
  }
  constructor(alg) {
    super(`${alg} is not an implemented algorithm`);
    this.name = "JwtAlgorithmNotImplemented";
  }
};
var JwtTokenInvalid = class extends Error {
  static {
    __name(this, "JwtTokenInvalid");
  }
  constructor(token) {
    super(`invalid JWT token: ${token}`);
    this.name = "JwtTokenInvalid";
  }
};
var JwtTokenNotBefore = class extends Error {
  static {
    __name(this, "JwtTokenNotBefore");
  }
  constructor(token) {
    super(`token (${token}) is being used before it's valid`);
    this.name = "JwtTokenNotBefore";
  }
};
var JwtTokenExpired = class extends Error {
  static {
    __name(this, "JwtTokenExpired");
  }
  constructor(token) {
    super(`token (${token}) expired`);
    this.name = "JwtTokenExpired";
  }
};
var JwtTokenIssuedAt = class extends Error {
  static {
    __name(this, "JwtTokenIssuedAt");
  }
  constructor(currentTimestamp, iat) {
    super(`Incorrect "iat" claim must be a older than "${currentTimestamp}" (iat: "${iat}")`);
    this.name = "JwtTokenIssuedAt";
  }
};
var JwtHeaderInvalid = class extends Error {
  static {
    __name(this, "JwtHeaderInvalid");
  }
  constructor(header) {
    super(`jwt header is invalid: ${JSON.stringify(header)}`);
    this.name = "JwtHeaderInvalid";
  }
};
var JwtHeaderRequiresKid = class extends Error {
  static {
    __name(this, "JwtHeaderRequiresKid");
  }
  constructor(header) {
    super(`required "kid" in jwt header: ${JSON.stringify(header)}`);
    this.name = "JwtHeaderRequiresKid";
  }
};
var JwtTokenSignatureMismatched = class extends Error {
  static {
    __name(this, "JwtTokenSignatureMismatched");
  }
  constructor(token) {
    super(`token(${token}) signature mismatched`);
    this.name = "JwtTokenSignatureMismatched";
  }
};
var CryptoKeyUsage = /* @__PURE__ */ ((CryptoKeyUsage2) => {
  CryptoKeyUsage2["Encrypt"] = "encrypt";
  CryptoKeyUsage2["Decrypt"] = "decrypt";
  CryptoKeyUsage2["Sign"] = "sign";
  CryptoKeyUsage2["Verify"] = "verify";
  CryptoKeyUsage2["DeriveKey"] = "deriveKey";
  CryptoKeyUsage2["DeriveBits"] = "deriveBits";
  CryptoKeyUsage2["WrapKey"] = "wrapKey";
  CryptoKeyUsage2["UnwrapKey"] = "unwrapKey";
  return CryptoKeyUsage2;
})(CryptoKeyUsage || {});

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/utils/jwt/utf8.js
init_modules_watch_stub();
var utf8Encoder = new TextEncoder();
var utf8Decoder = new TextDecoder();

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/utils/jwt/jws.js
async function signing(privateKey, alg, data) {
  const algorithm = getKeyAlgorithm(alg);
  const cryptoKey = await importPrivateKey(privateKey, algorithm);
  return await crypto.subtle.sign(algorithm, cryptoKey, data);
}
__name(signing, "signing");
async function verifying(publicKey, alg, signature, data) {
  const algorithm = getKeyAlgorithm(alg);
  const cryptoKey = await importPublicKey(publicKey, algorithm);
  return await crypto.subtle.verify(algorithm, cryptoKey, signature, data);
}
__name(verifying, "verifying");
function pemToBinary(pem) {
  return decodeBase642(pem.replace(/-+(BEGIN|END).*/g, "").replace(/\s/g, ""));
}
__name(pemToBinary, "pemToBinary");
async function importPrivateKey(key, alg) {
  if (!crypto.subtle || !crypto.subtle.importKey) {
    throw new Error("`crypto.subtle.importKey` is undefined. JWT auth middleware requires it.");
  }
  if (isCryptoKey(key)) {
    if (key.type !== "private" && key.type !== "secret") {
      throw new Error(
        `unexpected key type: CryptoKey.type is ${key.type}, expected private or secret`
      );
    }
    return key;
  }
  const usages = [CryptoKeyUsage.Sign];
  if (typeof key === "object") {
    return await crypto.subtle.importKey("jwk", key, alg, false, usages);
  }
  if (key.includes("PRIVATE")) {
    return await crypto.subtle.importKey("pkcs8", pemToBinary(key), alg, false, usages);
  }
  return await crypto.subtle.importKey("raw", utf8Encoder.encode(key), alg, false, usages);
}
__name(importPrivateKey, "importPrivateKey");
async function importPublicKey(key, alg) {
  if (!crypto.subtle || !crypto.subtle.importKey) {
    throw new Error("`crypto.subtle.importKey` is undefined. JWT auth middleware requires it.");
  }
  if (isCryptoKey(key)) {
    if (key.type === "public" || key.type === "secret") {
      return key;
    }
    key = await exportPublicJwkFrom(key);
  }
  if (typeof key === "string" && key.includes("PRIVATE")) {
    const privateKey = await crypto.subtle.importKey("pkcs8", pemToBinary(key), alg, true, [
      CryptoKeyUsage.Sign
    ]);
    key = await exportPublicJwkFrom(privateKey);
  }
  const usages = [CryptoKeyUsage.Verify];
  if (typeof key === "object") {
    return await crypto.subtle.importKey("jwk", key, alg, false, usages);
  }
  if (key.includes("PUBLIC")) {
    return await crypto.subtle.importKey("spki", pemToBinary(key), alg, false, usages);
  }
  return await crypto.subtle.importKey("raw", utf8Encoder.encode(key), alg, false, usages);
}
__name(importPublicKey, "importPublicKey");
async function exportPublicJwkFrom(privateKey) {
  if (privateKey.type !== "private") {
    throw new Error(`unexpected key type: ${privateKey.type}`);
  }
  if (!privateKey.extractable) {
    throw new Error("unexpected private key is unextractable");
  }
  const jwk = await crypto.subtle.exportKey("jwk", privateKey);
  const { kty } = jwk;
  const { alg, e, n } = jwk;
  const { crv, x, y } = jwk;
  return { kty, alg, e, n, crv, x, y, key_ops: [CryptoKeyUsage.Verify] };
}
__name(exportPublicJwkFrom, "exportPublicJwkFrom");
function getKeyAlgorithm(name2) {
  switch (name2) {
    case "HS256":
      return {
        name: "HMAC",
        hash: {
          name: "SHA-256"
        }
      };
    case "HS384":
      return {
        name: "HMAC",
        hash: {
          name: "SHA-384"
        }
      };
    case "HS512":
      return {
        name: "HMAC",
        hash: {
          name: "SHA-512"
        }
      };
    case "RS256":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: {
          name: "SHA-256"
        }
      };
    case "RS384":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: {
          name: "SHA-384"
        }
      };
    case "RS512":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: {
          name: "SHA-512"
        }
      };
    case "PS256":
      return {
        name: "RSA-PSS",
        hash: {
          name: "SHA-256"
        },
        saltLength: 32
      };
    case "PS384":
      return {
        name: "RSA-PSS",
        hash: {
          name: "SHA-384"
        },
        saltLength: 48
      };
    case "PS512":
      return {
        name: "RSA-PSS",
        hash: {
          name: "SHA-512"
        },
        saltLength: 64
      };
    case "ES256":
      return {
        name: "ECDSA",
        hash: {
          name: "SHA-256"
        },
        namedCurve: "P-256"
      };
    case "ES384":
      return {
        name: "ECDSA",
        hash: {
          name: "SHA-384"
        },
        namedCurve: "P-384"
      };
    case "ES512":
      return {
        name: "ECDSA",
        hash: {
          name: "SHA-512"
        },
        namedCurve: "P-521"
      };
    case "EdDSA":
      return {
        name: "Ed25519",
        namedCurve: "Ed25519"
      };
    default:
      throw new JwtAlgorithmNotImplemented(name2);
  }
}
__name(getKeyAlgorithm, "getKeyAlgorithm");
function isCryptoKey(key) {
  const runtime = getRuntimeKey();
  if (runtime === "node" && !!crypto.webcrypto) {
    return key instanceof crypto.webcrypto.CryptoKey;
  }
  return key instanceof CryptoKey;
}
__name(isCryptoKey, "isCryptoKey");

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/utils/jwt/jwt.js
var encodeJwtPart = /* @__PURE__ */ __name((part) => encodeBase64Url(utf8Encoder.encode(JSON.stringify(part)).buffer).replace(/=/g, ""), "encodeJwtPart");
var encodeSignaturePart = /* @__PURE__ */ __name((buf) => encodeBase64Url(buf).replace(/=/g, ""), "encodeSignaturePart");
var decodeJwtPart = /* @__PURE__ */ __name((part) => JSON.parse(utf8Decoder.decode(decodeBase64Url(part))), "decodeJwtPart");
function isTokenHeader(obj) {
  if (typeof obj === "object" && obj !== null) {
    const objWithAlg = obj;
    return "alg" in objWithAlg && Object.values(AlgorithmTypes).includes(objWithAlg.alg) && (!("typ" in objWithAlg) || objWithAlg.typ === "JWT");
  }
  return false;
}
__name(isTokenHeader, "isTokenHeader");
var sign = /* @__PURE__ */ __name(async (payload, privateKey, alg = "HS256") => {
  const encodedPayload = encodeJwtPart(payload);
  let encodedHeader;
  if (typeof privateKey === "object" && "alg" in privateKey) {
    alg = privateKey.alg;
    encodedHeader = encodeJwtPart({ alg, typ: "JWT", kid: privateKey.kid });
  } else {
    encodedHeader = encodeJwtPart({ alg, typ: "JWT" });
  }
  const partialToken = `${encodedHeader}.${encodedPayload}`;
  const signaturePart = await signing(privateKey, alg, utf8Encoder.encode(partialToken));
  const signature = encodeSignaturePart(signaturePart);
  return `${partialToken}.${signature}`;
}, "sign");
var verify = /* @__PURE__ */ __name(async (token, publicKey, alg = "HS256") => {
  const tokenParts = token.split(".");
  if (tokenParts.length !== 3) {
    throw new JwtTokenInvalid(token);
  }
  const { header, payload } = decode(token);
  if (!isTokenHeader(header)) {
    throw new JwtHeaderInvalid(header);
  }
  const now = Date.now() / 1e3 | 0;
  if (payload.nbf && payload.nbf > now) {
    throw new JwtTokenNotBefore(token);
  }
  if (payload.exp && payload.exp <= now) {
    throw new JwtTokenExpired(token);
  }
  if (payload.iat && now < payload.iat) {
    throw new JwtTokenIssuedAt(now, payload.iat);
  }
  const headerPayload = token.substring(0, token.lastIndexOf("."));
  const verified = await verifying(
    publicKey,
    alg,
    decodeBase64Url(tokenParts[2]),
    utf8Encoder.encode(headerPayload)
  );
  if (!verified) {
    throw new JwtTokenSignatureMismatched(token);
  }
  return payload;
}, "verify");
var verifyFromJwks = /* @__PURE__ */ __name(async (token, options, init3) => {
  const header = decodeHeader(token);
  if (!isTokenHeader(header)) {
    throw new JwtHeaderInvalid(header);
  }
  if (!header.kid) {
    throw new JwtHeaderRequiresKid(header);
  }
  let keys = typeof options.keys === "function" ? await options.keys() : options.keys;
  if (options.jwks_uri) {
    const response2 = await fetch(options.jwks_uri, init3);
    if (!response2.ok) {
      throw new Error(`failed to fetch JWKS from ${options.jwks_uri}`);
    }
    const data = await response2.json();
    if (!data.keys) {
      throw new Error('invalid JWKS response. "keys" field is missing');
    }
    if (!Array.isArray(data.keys)) {
      throw new Error('invalid JWKS response. "keys" field is not an array');
    }
    if (keys) {
      keys.push(...data.keys);
    } else {
      keys = data.keys;
    }
  } else if (!keys) {
    throw new Error('verifyFromJwks requires options for either "keys" or "jwks_uri" or both');
  }
  const matchingKey = keys.find((key) => key.kid === header.kid);
  if (!matchingKey) {
    throw new JwtTokenInvalid(token);
  }
  return await verify(token, matchingKey, matchingKey.alg || header.alg);
}, "verifyFromJwks");
var decode = /* @__PURE__ */ __name((token) => {
  try {
    const [h, p] = token.split(".");
    const header = decodeJwtPart(h);
    const payload = decodeJwtPart(p);
    return {
      header,
      payload
    };
  } catch {
    throw new JwtTokenInvalid(token);
  }
}, "decode");
var decodeHeader = /* @__PURE__ */ __name((token) => {
  try {
    const [h] = token.split(".");
    return decodeJwtPart(h);
  } catch {
    throw new JwtTokenInvalid(token);
  }
}, "decodeHeader");

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/utils/jwt/index.js
var Jwt = { sign, verify, decode, verifyFromJwks };

// ../../node_modules/.pnpm/hono@4.7.10/node_modules/hono/dist/middleware/jwt/jwt.js
var verify2 = Jwt.verify;
var decode2 = Jwt.decode;
var sign2 = Jwt.sign;

// ../../node_modules/.pnpm/bcryptjs@3.0.2/node_modules/bcryptjs/index.js
init_modules_watch_stub();
var import_crypto = __toESM(require_crypto(), 1);
var randomFallback = null;
function randomBytes(len) {
  try {
    return crypto.getRandomValues(new Uint8Array(len));
  } catch {
  }
  try {
    return import_crypto.default.randomBytes(len);
  } catch {
  }
  if (!randomFallback) {
    throw Error(
      "Neither WebCryptoAPI nor a crypto module is available. Use bcrypt.setRandomFallback to set an alternative"
    );
  }
  return randomFallback(len);
}
__name(randomBytes, "randomBytes");
function setRandomFallback(random) {
  randomFallback = random;
}
__name(setRandomFallback, "setRandomFallback");
function genSaltSync(rounds, seed_length) {
  rounds = rounds || GENSALT_DEFAULT_LOG2_ROUNDS;
  if (typeof rounds !== "number")
    throw Error(
      "Illegal arguments: " + typeof rounds + ", " + typeof seed_length
    );
  if (rounds < 4) rounds = 4;
  else if (rounds > 31) rounds = 31;
  var salt = [];
  salt.push("$2b$");
  if (rounds < 10) salt.push("0");
  salt.push(rounds.toString());
  salt.push("$");
  salt.push(base64_encode(randomBytes(BCRYPT_SALT_LEN), BCRYPT_SALT_LEN));
  return salt.join("");
}
__name(genSaltSync, "genSaltSync");
function genSalt(rounds, seed_length, callback) {
  if (typeof seed_length === "function")
    callback = seed_length, seed_length = void 0;
  if (typeof rounds === "function") callback = rounds, rounds = void 0;
  if (typeof rounds === "undefined") rounds = GENSALT_DEFAULT_LOG2_ROUNDS;
  else if (typeof rounds !== "number")
    throw Error("illegal arguments: " + typeof rounds);
  function _async(callback2) {
    nextTick(function() {
      try {
        callback2(null, genSaltSync(rounds));
      } catch (err) {
        callback2(err);
      }
    });
  }
  __name(_async, "_async");
  if (callback) {
    if (typeof callback !== "function")
      throw Error("Illegal callback: " + typeof callback);
    _async(callback);
  } else
    return new Promise(function(resolve, reject) {
      _async(function(err, res) {
        if (err) {
          reject(err);
          return;
        }
        resolve(res);
      });
    });
}
__name(genSalt, "genSalt");
function hashSync(password, salt) {
  if (typeof salt === "undefined") salt = GENSALT_DEFAULT_LOG2_ROUNDS;
  if (typeof salt === "number") salt = genSaltSync(salt);
  if (typeof password !== "string" || typeof salt !== "string")
    throw Error("Illegal arguments: " + typeof password + ", " + typeof salt);
  return _hash(password, salt);
}
__name(hashSync, "hashSync");
function hash(password, salt, callback, progressCallback) {
  function _async(callback2) {
    if (typeof password === "string" && typeof salt === "number")
      genSalt(salt, function(err, salt2) {
        _hash(password, salt2, callback2, progressCallback);
      });
    else if (typeof password === "string" && typeof salt === "string")
      _hash(password, salt, callback2, progressCallback);
    else
      nextTick(
        callback2.bind(
          this,
          Error("Illegal arguments: " + typeof password + ", " + typeof salt)
        )
      );
  }
  __name(_async, "_async");
  if (callback) {
    if (typeof callback !== "function")
      throw Error("Illegal callback: " + typeof callback);
    _async(callback);
  } else
    return new Promise(function(resolve, reject) {
      _async(function(err, res) {
        if (err) {
          reject(err);
          return;
        }
        resolve(res);
      });
    });
}
__name(hash, "hash");
function safeStringCompare(known, unknown) {
  var diff = known.length ^ unknown.length;
  for (var i = 0; i < known.length; ++i) {
    diff |= known.charCodeAt(i) ^ unknown.charCodeAt(i);
  }
  return diff === 0;
}
__name(safeStringCompare, "safeStringCompare");
function compareSync(password, hash2) {
  if (typeof password !== "string" || typeof hash2 !== "string")
    throw Error("Illegal arguments: " + typeof password + ", " + typeof hash2);
  if (hash2.length !== 60) return false;
  return safeStringCompare(
    hashSync(password, hash2.substring(0, hash2.length - 31)),
    hash2
  );
}
__name(compareSync, "compareSync");
function compare(password, hashValue, callback, progressCallback) {
  function _async(callback2) {
    if (typeof password !== "string" || typeof hashValue !== "string") {
      nextTick(
        callback2.bind(
          this,
          Error(
            "Illegal arguments: " + typeof password + ", " + typeof hashValue
          )
        )
      );
      return;
    }
    if (hashValue.length !== 60) {
      nextTick(callback2.bind(this, null, false));
      return;
    }
    hash(
      password,
      hashValue.substring(0, 29),
      function(err, comp) {
        if (err) callback2(err);
        else callback2(null, safeStringCompare(comp, hashValue));
      },
      progressCallback
    );
  }
  __name(_async, "_async");
  if (callback) {
    if (typeof callback !== "function")
      throw Error("Illegal callback: " + typeof callback);
    _async(callback);
  } else
    return new Promise(function(resolve, reject) {
      _async(function(err, res) {
        if (err) {
          reject(err);
          return;
        }
        resolve(res);
      });
    });
}
__name(compare, "compare");
function getRounds(hash2) {
  if (typeof hash2 !== "string")
    throw Error("Illegal arguments: " + typeof hash2);
  return parseInt(hash2.split("$")[2], 10);
}
__name(getRounds, "getRounds");
function getSalt(hash2) {
  if (typeof hash2 !== "string")
    throw Error("Illegal arguments: " + typeof hash2);
  if (hash2.length !== 60)
    throw Error("Illegal hash length: " + hash2.length + " != 60");
  return hash2.substring(0, 29);
}
__name(getSalt, "getSalt");
function truncates(password) {
  if (typeof password !== "string")
    throw Error("Illegal arguments: " + typeof password);
  return utf8Length(password) > 72;
}
__name(truncates, "truncates");
var nextTick = typeof process !== "undefined" && process && typeof process.nextTick === "function" ? typeof setImmediate === "function" ? setImmediate : process.nextTick : setTimeout;
function utf8Length(string) {
  var len = 0, c = 0;
  for (var i = 0; i < string.length; ++i) {
    c = string.charCodeAt(i);
    if (c < 128) len += 1;
    else if (c < 2048) len += 2;
    else if ((c & 64512) === 55296 && (string.charCodeAt(i + 1) & 64512) === 56320) {
      ++i;
      len += 4;
    } else len += 3;
  }
  return len;
}
__name(utf8Length, "utf8Length");
function utf8Array(string) {
  var offset = 0, c1, c2;
  var buffer = new Array(utf8Length(string));
  for (var i = 0, k = string.length; i < k; ++i) {
    c1 = string.charCodeAt(i);
    if (c1 < 128) {
      buffer[offset++] = c1;
    } else if (c1 < 2048) {
      buffer[offset++] = c1 >> 6 | 192;
      buffer[offset++] = c1 & 63 | 128;
    } else if ((c1 & 64512) === 55296 && ((c2 = string.charCodeAt(i + 1)) & 64512) === 56320) {
      c1 = 65536 + ((c1 & 1023) << 10) + (c2 & 1023);
      ++i;
      buffer[offset++] = c1 >> 18 | 240;
      buffer[offset++] = c1 >> 12 & 63 | 128;
      buffer[offset++] = c1 >> 6 & 63 | 128;
      buffer[offset++] = c1 & 63 | 128;
    } else {
      buffer[offset++] = c1 >> 12 | 224;
      buffer[offset++] = c1 >> 6 & 63 | 128;
      buffer[offset++] = c1 & 63 | 128;
    }
  }
  return buffer;
}
__name(utf8Array, "utf8Array");
var BASE64_CODE = "./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
var BASE64_INDEX = [
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  0,
  1,
  54,
  55,
  56,
  57,
  58,
  59,
  60,
  61,
  62,
  63,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  -1,
  -1,
  -1,
  -1,
  -1,
  -1,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  52,
  53,
  -1,
  -1,
  -1,
  -1,
  -1
];
function base64_encode(b, len) {
  var off = 0, rs = [], c1, c2;
  if (len <= 0 || len > b.length) throw Error("Illegal len: " + len);
  while (off < len) {
    c1 = b[off++] & 255;
    rs.push(BASE64_CODE[c1 >> 2 & 63]);
    c1 = (c1 & 3) << 4;
    if (off >= len) {
      rs.push(BASE64_CODE[c1 & 63]);
      break;
    }
    c2 = b[off++] & 255;
    c1 |= c2 >> 4 & 15;
    rs.push(BASE64_CODE[c1 & 63]);
    c1 = (c2 & 15) << 2;
    if (off >= len) {
      rs.push(BASE64_CODE[c1 & 63]);
      break;
    }
    c2 = b[off++] & 255;
    c1 |= c2 >> 6 & 3;
    rs.push(BASE64_CODE[c1 & 63]);
    rs.push(BASE64_CODE[c2 & 63]);
  }
  return rs.join("");
}
__name(base64_encode, "base64_encode");
function base64_decode(s, len) {
  var off = 0, slen = s.length, olen = 0, rs = [], c1, c2, c3, c4, o, code;
  if (len <= 0) throw Error("Illegal len: " + len);
  while (off < slen - 1 && olen < len) {
    code = s.charCodeAt(off++);
    c1 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
    code = s.charCodeAt(off++);
    c2 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
    if (c1 == -1 || c2 == -1) break;
    o = c1 << 2 >>> 0;
    o |= (c2 & 48) >> 4;
    rs.push(String.fromCharCode(o));
    if (++olen >= len || off >= slen) break;
    code = s.charCodeAt(off++);
    c3 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
    if (c3 == -1) break;
    o = (c2 & 15) << 4 >>> 0;
    o |= (c3 & 60) >> 2;
    rs.push(String.fromCharCode(o));
    if (++olen >= len || off >= slen) break;
    code = s.charCodeAt(off++);
    c4 = code < BASE64_INDEX.length ? BASE64_INDEX[code] : -1;
    o = (c3 & 3) << 6 >>> 0;
    o |= c4;
    rs.push(String.fromCharCode(o));
    ++olen;
  }
  var res = [];
  for (off = 0; off < olen; off++) res.push(rs[off].charCodeAt(0));
  return res;
}
__name(base64_decode, "base64_decode");
var BCRYPT_SALT_LEN = 16;
var GENSALT_DEFAULT_LOG2_ROUNDS = 10;
var BLOWFISH_NUM_ROUNDS = 16;
var MAX_EXECUTION_TIME = 100;
var P_ORIG = [
  608135816,
  2242054355,
  320440878,
  57701188,
  2752067618,
  698298832,
  137296536,
  3964562569,
  1160258022,
  953160567,
  3193202383,
  887688300,
  3232508343,
  3380367581,
  1065670069,
  3041331479,
  2450970073,
  2306472731
];
var S_ORIG = [
  3509652390,
  2564797868,
  805139163,
  3491422135,
  3101798381,
  1780907670,
  3128725573,
  4046225305,
  614570311,
  3012652279,
  134345442,
  2240740374,
  1667834072,
  1901547113,
  2757295779,
  4103290238,
  227898511,
  1921955416,
  1904987480,
  2182433518,
  2069144605,
  3260701109,
  2620446009,
  720527379,
  3318853667,
  677414384,
  3393288472,
  3101374703,
  2390351024,
  1614419982,
  1822297739,
  2954791486,
  3608508353,
  3174124327,
  2024746970,
  1432378464,
  3864339955,
  2857741204,
  1464375394,
  1676153920,
  1439316330,
  715854006,
  3033291828,
  289532110,
  2706671279,
  2087905683,
  3018724369,
  1668267050,
  732546397,
  1947742710,
  3462151702,
  2609353502,
  2950085171,
  1814351708,
  2050118529,
  680887927,
  999245976,
  1800124847,
  3300911131,
  1713906067,
  1641548236,
  4213287313,
  1216130144,
  1575780402,
  4018429277,
  3917837745,
  3693486850,
  3949271944,
  596196993,
  3549867205,
  258830323,
  2213823033,
  772490370,
  2760122372,
  1774776394,
  2652871518,
  566650946,
  4142492826,
  1728879713,
  2882767088,
  1783734482,
  3629395816,
  2517608232,
  2874225571,
  1861159788,
  326777828,
  3124490320,
  2130389656,
  2716951837,
  967770486,
  1724537150,
  2185432712,
  2364442137,
  1164943284,
  2105845187,
  998989502,
  3765401048,
  2244026483,
  1075463327,
  1455516326,
  1322494562,
  910128902,
  469688178,
  1117454909,
  936433444,
  3490320968,
  3675253459,
  1240580251,
  122909385,
  2157517691,
  634681816,
  4142456567,
  3825094682,
  3061402683,
  2540495037,
  79693498,
  3249098678,
  1084186820,
  1583128258,
  426386531,
  1761308591,
  1047286709,
  322548459,
  995290223,
  1845252383,
  2603652396,
  3431023940,
  2942221577,
  3202600964,
  3727903485,
  1712269319,
  422464435,
  3234572375,
  1170764815,
  3523960633,
  3117677531,
  1434042557,
  442511882,
  3600875718,
  1076654713,
  1738483198,
  4213154764,
  2393238008,
  3677496056,
  1014306527,
  4251020053,
  793779912,
  2902807211,
  842905082,
  4246964064,
  1395751752,
  1040244610,
  2656851899,
  3396308128,
  445077038,
  3742853595,
  3577915638,
  679411651,
  2892444358,
  2354009459,
  1767581616,
  3150600392,
  3791627101,
  3102740896,
  284835224,
  4246832056,
  1258075500,
  768725851,
  2589189241,
  3069724005,
  3532540348,
  1274779536,
  3789419226,
  2764799539,
  1660621633,
  3471099624,
  4011903706,
  913787905,
  3497959166,
  737222580,
  2514213453,
  2928710040,
  3937242737,
  1804850592,
  3499020752,
  2949064160,
  2386320175,
  2390070455,
  2415321851,
  4061277028,
  2290661394,
  2416832540,
  1336762016,
  1754252060,
  3520065937,
  3014181293,
  791618072,
  3188594551,
  3933548030,
  2332172193,
  3852520463,
  3043980520,
  413987798,
  3465142937,
  3030929376,
  4245938359,
  2093235073,
  3534596313,
  375366246,
  2157278981,
  2479649556,
  555357303,
  3870105701,
  2008414854,
  3344188149,
  4221384143,
  3956125452,
  2067696032,
  3594591187,
  2921233993,
  2428461,
  544322398,
  577241275,
  1471733935,
  610547355,
  4027169054,
  1432588573,
  1507829418,
  2025931657,
  3646575487,
  545086370,
  48609733,
  2200306550,
  1653985193,
  298326376,
  1316178497,
  3007786442,
  2064951626,
  458293330,
  2589141269,
  3591329599,
  3164325604,
  727753846,
  2179363840,
  146436021,
  1461446943,
  4069977195,
  705550613,
  3059967265,
  3887724982,
  4281599278,
  3313849956,
  1404054877,
  2845806497,
  146425753,
  1854211946,
  1266315497,
  3048417604,
  3681880366,
  3289982499,
  290971e4,
  1235738493,
  2632868024,
  2414719590,
  3970600049,
  1771706367,
  1449415276,
  3266420449,
  422970021,
  1963543593,
  2690192192,
  3826793022,
  1062508698,
  1531092325,
  1804592342,
  2583117782,
  2714934279,
  4024971509,
  1294809318,
  4028980673,
  1289560198,
  2221992742,
  1669523910,
  35572830,
  157838143,
  1052438473,
  1016535060,
  1802137761,
  1753167236,
  1386275462,
  3080475397,
  2857371447,
  1040679964,
  2145300060,
  2390574316,
  1461121720,
  2956646967,
  4031777805,
  4028374788,
  33600511,
  2920084762,
  1018524850,
  629373528,
  3691585981,
  3515945977,
  2091462646,
  2486323059,
  586499841,
  988145025,
  935516892,
  3367335476,
  2599673255,
  2839830854,
  265290510,
  3972581182,
  2759138881,
  3795373465,
  1005194799,
  847297441,
  406762289,
  1314163512,
  1332590856,
  1866599683,
  4127851711,
  750260880,
  613907577,
  1450815602,
  3165620655,
  3734664991,
  3650291728,
  3012275730,
  3704569646,
  1427272223,
  778793252,
  1343938022,
  2676280711,
  2052605720,
  1946737175,
  3164576444,
  3914038668,
  3967478842,
  3682934266,
  1661551462,
  3294938066,
  4011595847,
  840292616,
  3712170807,
  616741398,
  312560963,
  711312465,
  1351876610,
  322626781,
  1910503582,
  271666773,
  2175563734,
  1594956187,
  70604529,
  3617834859,
  1007753275,
  1495573769,
  4069517037,
  2549218298,
  2663038764,
  504708206,
  2263041392,
  3941167025,
  2249088522,
  1514023603,
  1998579484,
  1312622330,
  694541497,
  2582060303,
  2151582166,
  1382467621,
  776784248,
  2618340202,
  3323268794,
  2497899128,
  2784771155,
  503983604,
  4076293799,
  907881277,
  423175695,
  432175456,
  1378068232,
  4145222326,
  3954048622,
  3938656102,
  3820766613,
  2793130115,
  2977904593,
  26017576,
  3274890735,
  3194772133,
  1700274565,
  1756076034,
  4006520079,
  3677328699,
  720338349,
  1533947780,
  354530856,
  688349552,
  3973924725,
  1637815568,
  332179504,
  3949051286,
  53804574,
  2852348879,
  3044236432,
  1282449977,
  3583942155,
  3416972820,
  4006381244,
  1617046695,
  2628476075,
  3002303598,
  1686838959,
  431878346,
  2686675385,
  1700445008,
  1080580658,
  1009431731,
  832498133,
  3223435511,
  2605976345,
  2271191193,
  2516031870,
  1648197032,
  4164389018,
  2548247927,
  300782431,
  375919233,
  238389289,
  3353747414,
  2531188641,
  2019080857,
  1475708069,
  455242339,
  2609103871,
  448939670,
  3451063019,
  1395535956,
  2413381860,
  1841049896,
  1491858159,
  885456874,
  4264095073,
  4001119347,
  1565136089,
  3898914787,
  1108368660,
  540939232,
  1173283510,
  2745871338,
  3681308437,
  4207628240,
  3343053890,
  4016749493,
  1699691293,
  1103962373,
  3625875870,
  2256883143,
  3830138730,
  1031889488,
  3479347698,
  1535977030,
  4236805024,
  3251091107,
  2132092099,
  1774941330,
  1199868427,
  1452454533,
  157007616,
  2904115357,
  342012276,
  595725824,
  1480756522,
  206960106,
  497939518,
  591360097,
  863170706,
  2375253569,
  3596610801,
  1814182875,
  2094937945,
  3421402208,
  1082520231,
  3463918190,
  2785509508,
  435703966,
  3908032597,
  1641649973,
  2842273706,
  3305899714,
  1510255612,
  2148256476,
  2655287854,
  3276092548,
  4258621189,
  236887753,
  3681803219,
  274041037,
  1734335097,
  3815195456,
  3317970021,
  1899903192,
  1026095262,
  4050517792,
  356393447,
  2410691914,
  3873677099,
  3682840055,
  3913112168,
  2491498743,
  4132185628,
  2489919796,
  1091903735,
  1979897079,
  3170134830,
  3567386728,
  3557303409,
  857797738,
  1136121015,
  1342202287,
  507115054,
  2535736646,
  337727348,
  3213592640,
  1301675037,
  2528481711,
  1895095763,
  1721773893,
  3216771564,
  62756741,
  2142006736,
  835421444,
  2531993523,
  1442658625,
  3659876326,
  2882144922,
  676362277,
  1392781812,
  170690266,
  3921047035,
  1759253602,
  3611846912,
  1745797284,
  664899054,
  1329594018,
  3901205900,
  3045908486,
  2062866102,
  2865634940,
  3543621612,
  3464012697,
  1080764994,
  553557557,
  3656615353,
  3996768171,
  991055499,
  499776247,
  1265440854,
  648242737,
  3940784050,
  980351604,
  3713745714,
  1749149687,
  3396870395,
  4211799374,
  3640570775,
  1161844396,
  3125318951,
  1431517754,
  545492359,
  4268468663,
  3499529547,
  1437099964,
  2702547544,
  3433638243,
  2581715763,
  2787789398,
  1060185593,
  1593081372,
  2418618748,
  4260947970,
  69676912,
  2159744348,
  86519011,
  2512459080,
  3838209314,
  1220612927,
  3339683548,
  133810670,
  1090789135,
  1078426020,
  1569222167,
  845107691,
  3583754449,
  4072456591,
  1091646820,
  628848692,
  1613405280,
  3757631651,
  526609435,
  236106946,
  48312990,
  2942717905,
  3402727701,
  1797494240,
  859738849,
  992217954,
  4005476642,
  2243076622,
  3870952857,
  3732016268,
  765654824,
  3490871365,
  2511836413,
  1685915746,
  3888969200,
  1414112111,
  2273134842,
  3281911079,
  4080962846,
  172450625,
  2569994100,
  980381355,
  4109958455,
  2819808352,
  2716589560,
  2568741196,
  3681446669,
  3329971472,
  1835478071,
  660984891,
  3704678404,
  4045999559,
  3422617507,
  3040415634,
  1762651403,
  1719377915,
  3470491036,
  2693910283,
  3642056355,
  3138596744,
  1364962596,
  2073328063,
  1983633131,
  926494387,
  3423689081,
  2150032023,
  4096667949,
  1749200295,
  3328846651,
  309677260,
  2016342300,
  1779581495,
  3079819751,
  111262694,
  1274766160,
  443224088,
  298511866,
  1025883608,
  3806446537,
  1145181785,
  168956806,
  3641502830,
  3584813610,
  1689216846,
  3666258015,
  3200248200,
  1692713982,
  2646376535,
  4042768518,
  1618508792,
  1610833997,
  3523052358,
  4130873264,
  2001055236,
  3610705100,
  2202168115,
  4028541809,
  2961195399,
  1006657119,
  2006996926,
  3186142756,
  1430667929,
  3210227297,
  1314452623,
  4074634658,
  4101304120,
  2273951170,
  1399257539,
  3367210612,
  3027628629,
  1190975929,
  2062231137,
  2333990788,
  2221543033,
  2438960610,
  1181637006,
  548689776,
  2362791313,
  3372408396,
  3104550113,
  3145860560,
  296247880,
  1970579870,
  3078560182,
  3769228297,
  1714227617,
  3291629107,
  3898220290,
  166772364,
  1251581989,
  493813264,
  448347421,
  195405023,
  2709975567,
  677966185,
  3703036547,
  1463355134,
  2715995803,
  1338867538,
  1343315457,
  2802222074,
  2684532164,
  233230375,
  2599980071,
  2000651841,
  3277868038,
  1638401717,
  4028070440,
  3237316320,
  6314154,
  819756386,
  300326615,
  590932579,
  1405279636,
  3267499572,
  3150704214,
  2428286686,
  3959192993,
  3461946742,
  1862657033,
  1266418056,
  963775037,
  2089974820,
  2263052895,
  1917689273,
  448879540,
  3550394620,
  3981727096,
  150775221,
  3627908307,
  1303187396,
  508620638,
  2975983352,
  2726630617,
  1817252668,
  1876281319,
  1457606340,
  908771278,
  3720792119,
  3617206836,
  2455994898,
  1729034894,
  1080033504,
  976866871,
  3556439503,
  2881648439,
  1522871579,
  1555064734,
  1336096578,
  3548522304,
  2579274686,
  3574697629,
  3205460757,
  3593280638,
  3338716283,
  3079412587,
  564236357,
  2993598910,
  1781952180,
  1464380207,
  3163844217,
  3332601554,
  1699332808,
  1393555694,
  1183702653,
  3581086237,
  1288719814,
  691649499,
  2847557200,
  2895455976,
  3193889540,
  2717570544,
  1781354906,
  1676643554,
  2592534050,
  3230253752,
  1126444790,
  2770207658,
  2633158820,
  2210423226,
  2615765581,
  2414155088,
  3127139286,
  673620729,
  2805611233,
  1269405062,
  4015350505,
  3341807571,
  4149409754,
  1057255273,
  2012875353,
  2162469141,
  2276492801,
  2601117357,
  993977747,
  3918593370,
  2654263191,
  753973209,
  36408145,
  2530585658,
  25011837,
  3520020182,
  2088578344,
  530523599,
  2918365339,
  1524020338,
  1518925132,
  3760827505,
  3759777254,
  1202760957,
  3985898139,
  3906192525,
  674977740,
  4174734889,
  2031300136,
  2019492241,
  3983892565,
  4153806404,
  3822280332,
  352677332,
  2297720250,
  60907813,
  90501309,
  3286998549,
  1016092578,
  2535922412,
  2839152426,
  457141659,
  509813237,
  4120667899,
  652014361,
  1966332200,
  2975202805,
  55981186,
  2327461051,
  676427537,
  3255491064,
  2882294119,
  3433927263,
  1307055953,
  942726286,
  933058658,
  2468411793,
  3933900994,
  4215176142,
  1361170020,
  2001714738,
  2830558078,
  3274259782,
  1222529897,
  1679025792,
  2729314320,
  3714953764,
  1770335741,
  151462246,
  3013232138,
  1682292957,
  1483529935,
  471910574,
  1539241949,
  458788160,
  3436315007,
  1807016891,
  3718408830,
  978976581,
  1043663428,
  3165965781,
  1927990952,
  4200891579,
  2372276910,
  3208408903,
  3533431907,
  1412390302,
  2931980059,
  4132332400,
  1947078029,
  3881505623,
  4168226417,
  2941484381,
  1077988104,
  1320477388,
  886195818,
  18198404,
  3786409e3,
  2509781533,
  112762804,
  3463356488,
  1866414978,
  891333506,
  18488651,
  661792760,
  1628790961,
  3885187036,
  3141171499,
  876946877,
  2693282273,
  1372485963,
  791857591,
  2686433993,
  3759982718,
  3167212022,
  3472953795,
  2716379847,
  445679433,
  3561995674,
  3504004811,
  3574258232,
  54117162,
  3331405415,
  2381918588,
  3769707343,
  4154350007,
  1140177722,
  4074052095,
  668550556,
  3214352940,
  367459370,
  261225585,
  2610173221,
  4209349473,
  3468074219,
  3265815641,
  314222801,
  3066103646,
  3808782860,
  282218597,
  3406013506,
  3773591054,
  379116347,
  1285071038,
  846784868,
  2669647154,
  3771962079,
  3550491691,
  2305946142,
  453669953,
  1268987020,
  3317592352,
  3279303384,
  3744833421,
  2610507566,
  3859509063,
  266596637,
  3847019092,
  517658769,
  3462560207,
  3443424879,
  370717030,
  4247526661,
  2224018117,
  4143653529,
  4112773975,
  2788324899,
  2477274417,
  1456262402,
  2901442914,
  1517677493,
  1846949527,
  2295493580,
  3734397586,
  2176403920,
  1280348187,
  1908823572,
  3871786941,
  846861322,
  1172426758,
  3287448474,
  3383383037,
  1655181056,
  3139813346,
  901632758,
  1897031941,
  2986607138,
  3066810236,
  3447102507,
  1393639104,
  373351379,
  950779232,
  625454576,
  3124240540,
  4148612726,
  2007998917,
  544563296,
  2244738638,
  2330496472,
  2058025392,
  1291430526,
  424198748,
  50039436,
  29584100,
  3605783033,
  2429876329,
  2791104160,
  1057563949,
  3255363231,
  3075367218,
  3463963227,
  1469046755,
  985887462
];
var C_ORIG = [
  1332899944,
  1700884034,
  1701343084,
  1684370003,
  1668446532,
  1869963892
];
function _encipher(lr, off, P, S) {
  var n, l = lr[off], r = lr[off + 1];
  l ^= P[0];
  n = S[l >>> 24];
  n += S[256 | l >> 16 & 255];
  n ^= S[512 | l >> 8 & 255];
  n += S[768 | l & 255];
  r ^= n ^ P[1];
  n = S[r >>> 24];
  n += S[256 | r >> 16 & 255];
  n ^= S[512 | r >> 8 & 255];
  n += S[768 | r & 255];
  l ^= n ^ P[2];
  n = S[l >>> 24];
  n += S[256 | l >> 16 & 255];
  n ^= S[512 | l >> 8 & 255];
  n += S[768 | l & 255];
  r ^= n ^ P[3];
  n = S[r >>> 24];
  n += S[256 | r >> 16 & 255];
  n ^= S[512 | r >> 8 & 255];
  n += S[768 | r & 255];
  l ^= n ^ P[4];
  n = S[l >>> 24];
  n += S[256 | l >> 16 & 255];
  n ^= S[512 | l >> 8 & 255];
  n += S[768 | l & 255];
  r ^= n ^ P[5];
  n = S[r >>> 24];
  n += S[256 | r >> 16 & 255];
  n ^= S[512 | r >> 8 & 255];
  n += S[768 | r & 255];
  l ^= n ^ P[6];
  n = S[l >>> 24];
  n += S[256 | l >> 16 & 255];
  n ^= S[512 | l >> 8 & 255];
  n += S[768 | l & 255];
  r ^= n ^ P[7];
  n = S[r >>> 24];
  n += S[256 | r >> 16 & 255];
  n ^= S[512 | r >> 8 & 255];
  n += S[768 | r & 255];
  l ^= n ^ P[8];
  n = S[l >>> 24];
  n += S[256 | l >> 16 & 255];
  n ^= S[512 | l >> 8 & 255];
  n += S[768 | l & 255];
  r ^= n ^ P[9];
  n = S[r >>> 24];
  n += S[256 | r >> 16 & 255];
  n ^= S[512 | r >> 8 & 255];
  n += S[768 | r & 255];
  l ^= n ^ P[10];
  n = S[l >>> 24];
  n += S[256 | l >> 16 & 255];
  n ^= S[512 | l >> 8 & 255];
  n += S[768 | l & 255];
  r ^= n ^ P[11];
  n = S[r >>> 24];
  n += S[256 | r >> 16 & 255];
  n ^= S[512 | r >> 8 & 255];
  n += S[768 | r & 255];
  l ^= n ^ P[12];
  n = S[l >>> 24];
  n += S[256 | l >> 16 & 255];
  n ^= S[512 | l >> 8 & 255];
  n += S[768 | l & 255];
  r ^= n ^ P[13];
  n = S[r >>> 24];
  n += S[256 | r >> 16 & 255];
  n ^= S[512 | r >> 8 & 255];
  n += S[768 | r & 255];
  l ^= n ^ P[14];
  n = S[l >>> 24];
  n += S[256 | l >> 16 & 255];
  n ^= S[512 | l >> 8 & 255];
  n += S[768 | l & 255];
  r ^= n ^ P[15];
  n = S[r >>> 24];
  n += S[256 | r >> 16 & 255];
  n ^= S[512 | r >> 8 & 255];
  n += S[768 | r & 255];
  l ^= n ^ P[16];
  lr[off] = r ^ P[BLOWFISH_NUM_ROUNDS + 1];
  lr[off + 1] = l;
  return lr;
}
__name(_encipher, "_encipher");
function _streamtoword(data, offp) {
  for (var i = 0, word = 0; i < 4; ++i)
    word = word << 8 | data[offp] & 255, offp = (offp + 1) % data.length;
  return { key: word, offp };
}
__name(_streamtoword, "_streamtoword");
function _key(key, P, S) {
  var offset = 0, lr = [0, 0], plen = P.length, slen = S.length, sw;
  for (var i = 0; i < plen; i++)
    sw = _streamtoword(key, offset), offset = sw.offp, P[i] = P[i] ^ sw.key;
  for (i = 0; i < plen; i += 2)
    lr = _encipher(lr, 0, P, S), P[i] = lr[0], P[i + 1] = lr[1];
  for (i = 0; i < slen; i += 2)
    lr = _encipher(lr, 0, P, S), S[i] = lr[0], S[i + 1] = lr[1];
}
__name(_key, "_key");
function _ekskey(data, key, P, S) {
  var offp = 0, lr = [0, 0], plen = P.length, slen = S.length, sw;
  for (var i = 0; i < plen; i++)
    sw = _streamtoword(key, offp), offp = sw.offp, P[i] = P[i] ^ sw.key;
  offp = 0;
  for (i = 0; i < plen; i += 2)
    sw = _streamtoword(data, offp), offp = sw.offp, lr[0] ^= sw.key, sw = _streamtoword(data, offp), offp = sw.offp, lr[1] ^= sw.key, lr = _encipher(lr, 0, P, S), P[i] = lr[0], P[i + 1] = lr[1];
  for (i = 0; i < slen; i += 2)
    sw = _streamtoword(data, offp), offp = sw.offp, lr[0] ^= sw.key, sw = _streamtoword(data, offp), offp = sw.offp, lr[1] ^= sw.key, lr = _encipher(lr, 0, P, S), S[i] = lr[0], S[i + 1] = lr[1];
}
__name(_ekskey, "_ekskey");
function _crypt(b, salt, rounds, callback, progressCallback) {
  var cdata = C_ORIG.slice(), clen = cdata.length, err;
  if (rounds < 4 || rounds > 31) {
    err = Error("Illegal number of rounds (4-31): " + rounds);
    if (callback) {
      nextTick(callback.bind(this, err));
      return;
    } else throw err;
  }
  if (salt.length !== BCRYPT_SALT_LEN) {
    err = Error(
      "Illegal salt length: " + salt.length + " != " + BCRYPT_SALT_LEN
    );
    if (callback) {
      nextTick(callback.bind(this, err));
      return;
    } else throw err;
  }
  rounds = 1 << rounds >>> 0;
  var P, S, i = 0, j;
  if (typeof Int32Array === "function") {
    P = new Int32Array(P_ORIG);
    S = new Int32Array(S_ORIG);
  } else {
    P = P_ORIG.slice();
    S = S_ORIG.slice();
  }
  _ekskey(salt, b, P, S);
  function next() {
    if (progressCallback) progressCallback(i / rounds);
    if (i < rounds) {
      var start = Date.now();
      for (; i < rounds; ) {
        i = i + 1;
        _key(b, P, S);
        _key(salt, P, S);
        if (Date.now() - start > MAX_EXECUTION_TIME) break;
      }
    } else {
      for (i = 0; i < 64; i++)
        for (j = 0; j < clen >> 1; j++) _encipher(cdata, j << 1, P, S);
      var ret = [];
      for (i = 0; i < clen; i++)
        ret.push((cdata[i] >> 24 & 255) >>> 0), ret.push((cdata[i] >> 16 & 255) >>> 0), ret.push((cdata[i] >> 8 & 255) >>> 0), ret.push((cdata[i] & 255) >>> 0);
      if (callback) {
        callback(null, ret);
        return;
      } else return ret;
    }
    if (callback) nextTick(next);
  }
  __name(next, "next");
  if (typeof callback !== "undefined") {
    next();
  } else {
    var res;
    while (true) if (typeof (res = next()) !== "undefined") return res || [];
  }
}
__name(_crypt, "_crypt");
function _hash(password, salt, callback, progressCallback) {
  var err;
  if (typeof password !== "string" || typeof salt !== "string") {
    err = Error("Invalid string / salt: Not a string");
    if (callback) {
      nextTick(callback.bind(this, err));
      return;
    } else throw err;
  }
  var minor, offset;
  if (salt.charAt(0) !== "$" || salt.charAt(1) !== "2") {
    err = Error("Invalid salt version: " + salt.substring(0, 2));
    if (callback) {
      nextTick(callback.bind(this, err));
      return;
    } else throw err;
  }
  if (salt.charAt(2) === "$") minor = String.fromCharCode(0), offset = 3;
  else {
    minor = salt.charAt(2);
    if (minor !== "a" && minor !== "b" && minor !== "y" || salt.charAt(3) !== "$") {
      err = Error("Invalid salt revision: " + salt.substring(2, 4));
      if (callback) {
        nextTick(callback.bind(this, err));
        return;
      } else throw err;
    }
    offset = 4;
  }
  if (salt.charAt(offset + 2) > "$") {
    err = Error("Missing salt rounds");
    if (callback) {
      nextTick(callback.bind(this, err));
      return;
    } else throw err;
  }
  var r1 = parseInt(salt.substring(offset, offset + 1), 10) * 10, r2 = parseInt(salt.substring(offset + 1, offset + 2), 10), rounds = r1 + r2, real_salt = salt.substring(offset + 3, offset + 25);
  password += minor >= "a" ? "\0" : "";
  var passwordb = utf8Array(password), saltb = base64_decode(real_salt, BCRYPT_SALT_LEN);
  function finish(bytes) {
    var res = [];
    res.push("$2");
    if (minor >= "a") res.push(minor);
    res.push("$");
    if (rounds < 10) res.push("0");
    res.push(rounds.toString());
    res.push("$");
    res.push(base64_encode(saltb, saltb.length));
    res.push(base64_encode(bytes, C_ORIG.length * 4 - 1));
    return res.join("");
  }
  __name(finish, "finish");
  if (typeof callback == "undefined")
    return finish(_crypt(passwordb, saltb, rounds));
  else {
    _crypt(
      passwordb,
      saltb,
      rounds,
      function(err2, bytes) {
        if (err2) callback(err2, null);
        else callback(null, finish(bytes));
      },
      progressCallback
    );
  }
}
__name(_hash, "_hash");
function encodeBase642(bytes, length) {
  return base64_encode(bytes, length);
}
__name(encodeBase642, "encodeBase64");
function decodeBase643(string, length) {
  return base64_decode(string, length);
}
__name(decodeBase643, "decodeBase64");
var bcryptjs_default = {
  setRandomFallback,
  genSaltSync,
  genSalt,
  hashSync,
  hash,
  compareSync,
  compare,
  getRounds,
  getSalt,
  truncates,
  encodeBase64: encodeBase642,
  decodeBase64: decodeBase643
};

// src/utils/response.ts
init_modules_watch_stub();
function response(c, data = null, msg = "ok", code = 200) {
  return c.json({ code, msg, data });
}
__name(response, "response");

// src/user.ts
var JWT_SECRET = "your-super-secret-key";
var user_default = /* @__PURE__ */ __name((app2, path) => {
  app2.post(`${path}/register`, async (c) => {
    try {
      const prisma = await prismaClient_default.fetch(c.env.DB);
      const { email, password, name: name2 } = await c.req.json();
      const existingUser = await prisma.user.findUnique({ where: { email } });
      if (existingUser) {
        return response(c, null, "Email already registered.", 400);
      }
      const hashedPassword = await bcryptjs_default.hash(password, 10);
      const user = await prisma.user.create({
        data: {
          email,
          name: name2,
          password: hashedPassword
        }
      });
      return response(c, { id: user.id, email: user.email, name: user.password }, "User registered successfully.");
    } catch (error) {
      return response(c, null, "An error occurred during registration.", 500);
    }
  });
  app2.post(`${path}/login`, async (c) => {
    try {
      const prisma = await prismaClient_default.fetch(c.env.DB);
      const { email, password } = await c.req.json();
      const user = await prisma.user.findUnique({ where: { email } });
      if (!user) {
        return response(c, null, "User not found.", 404);
      }
      const isPasswordValid = await bcryptjs_default.compare(password, user.password);
      if (!isPasswordValid) {
        return response(c, null, "Invalid password.", 401);
      }
      const token = await sign2({ id: user.id, email: user.email, name: user.name }, JWT_SECRET);
      return response(c, { token, user: { id: user.id, email: user.email, name: user.name } }, "Login successful.");
    } catch (error) {
      return response(c, null, "An error occurred during login.", 500);
    }
  });
}, "default");

// src/test.ts
init_modules_watch_stub();
var test_default = /* @__PURE__ */ __name((app2, path) => {
  app2.get(`${path}/test`, async (c) => {
    return new Response(JSON.stringify([123]), { headers: { "content-type": "application/json" } });
  });
}, "default");

// main.ts
var app = new Hono2().basePath("/api");
app.use("*", cors());
app.get("/", (c) => c.text("GET /"));
app.post("/", (c) => c.text("POST /"));
app.put("/", (c) => c.text("PUT /"));
app.delete("/", (c) => c.text("DELETE /"));
mail_default(app, "/mail");
user_default(app, "/user");
test_default(app, "/test");
app.notFound((c) => {
  return c.text("Custom 404 Message", 404);
});
app.onError((err, c) => {
  console.error("\u5168\u5C40\u9519\u8BEF:", err);
  if (err instanceof HTTPException) {
    return err.getResponse();
  }
  return c.json(
    {
      message: "\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF",
      error: {
        name: err.name,
        message: err.message
        // 在开发环境中可以包含 stack，生产环境建议关闭
        // stack: err.stack, 
      }
    },
    500
  );
});
var main_default = {
  ...app,
  async email(message, env, ctx) {
    const parser = new PostalMime();
    const email = await parser.parse(message.raw);
    console.log(message);
    console.log(env, ctx, 888888);
    try {
      const prisma = await prismaClient_default.fetch(env.DB);
      const sender = await prisma.user.findUnique({
        where: { email: email.to }
      });
      console.log(sender, "\u67E5\u8BE2\u53D1\u9001\u8005");
    } catch (err) {
      console.error("\u90AE\u4EF6\u5904\u7406\u5931\u8D25:", {
        name: err.name,
        message: err.message,
        stack: err.stack
      });
      throw err;
    }
  }
};

// ../../node_modules/.pnpm/wrangler@4.22.0/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_modules_watch_stub();
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// ../../node_modules/.pnpm/wrangler@4.22.0/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_modules_watch_stub();
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-jDBsIM/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = main_default;

// ../../node_modules/.pnpm/wrangler@4.22.0/node_modules/wrangler/templates/middleware/common.ts
init_modules_watch_stub();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-jDBsIM/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init3) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init3.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init3) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init3.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=main.js.map
