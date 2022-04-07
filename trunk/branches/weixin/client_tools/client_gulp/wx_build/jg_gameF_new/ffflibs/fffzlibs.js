"use strict";
!function () {
  var U = void 0,
      o = window;function r(e, t) {
    var r = e.split("."),
        n = o;r[0] in n || !n.execScript || n.execScript("var " + r[0]);for (var i; r.length && (i = r.shift());) r.length || t === U ? n = n[i] || (n[i] = {}) : n[i] = t;
  }var k = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array && "undefined" != typeof DataView;function v(e) {
    var t,
        r,
        n,
        i,
        o,
        s,
        f,
        a,
        h,
        u,
        l = e.length,
        c = 0,
        d = Number.POSITIVE_INFINITY;for (a = 0; a < l; ++a) e[a] > c && (c = e[a]), e[a] < d && (d = e[a]);for (t = 1 << c, r = new (k ? Uint32Array : Array)(t), n = 1, i = 0, o = 2; n <= c;) {
      for (a = 0; a < l; ++a) if (e[a] === n) {
        for (f = i, h = s = 0; h < n; ++h) s = s << 1 | 1 & f, f >>= 1;for (u = n << 16 | a, h = s; h < t; h += o) r[h] = u;++i;
      }++n, i <<= 1, o <<= 1;
    }return [r, c, d];
  }function w(e, t) {
    switch (this.g = [], this.h = 32768, this.d = this.f = this.a = this.l = 0, this.input = k ? new Uint8Array(e) : e, this.m = !1, this.i = 1, this.r = !1, t ? (t.index && (this.a = t.index), t.bufferSize && (this.h = t.bufferSize), t.bufferType && (this.i = t.bufferType), t.resize && (this.r = t.resize)) : t = {}, this.i) {case 0:
        this.b = 32768, this.c = new (k ? Uint8Array : Array)(32768 + this.h + 258);break;case 1:
        this.b = 0, this.c = new (k ? Uint8Array : Array)(this.h), this.e = this.z, this.n = this.v, this.j = this.w;break;default:
        throw Error("invalid inflate mode");}
  }var s = 0,
      a = 1;w.prototype.k = function () {
    for (; !this.m;) {
      var f = C(this, 3);switch (1 & f && (this.m = !0), f >>>= 1) {case 0:
          var e = this.input,
              t = this.a,
              r = this.c,
              n = this.b,
              i = e.length,
              o = U,
              u = r.length,
              s = U;if (this.d = this.f = 0, i <= t + 1) throw Error("invalid uncompressed block header: LEN");if (o = e[t++] | e[t++] << 8, i <= t + 1) throw Error("invalid uncompressed block header: NLEN");if (o === ~(e[t++] | e[t++] << 8)) throw Error("invalid uncompressed block header: length verify");if (t + o > e.length) throw Error("input buffer is broken");switch (this.i) {case 0:
              for (; n + o > r.length;) {
                if (o -= s = u - n, k) r.set(e.subarray(t, t + s), n), n += s, t += s;else for (; s--;) r[n++] = e[t++];this.b = n, r = this.e(), n = this.b;
              }break;case 1:
              for (; n + o > r.length;) r = this.e({ p: 2 });break;default:
              throw Error("invalid inflate mode");}if (k) r.set(e.subarray(t, t + o), n), n += o, t += o;else for (; o--;) r[n++] = e[t++];this.a = t, this.b = n, this.c = r;break;case 1:
          this.j(T, A);break;case 2:
          for (var l, d, p, y, i = C(this, 5) + 257, b = C(this, 5) + 1, w = C(this, 4) + 4, g = new (k ? Uint8Array : Array)(x.length), a = U, m = U, h = U, c = U, c = 0; c < w; ++c) g[x[c]] = C(this, 3);if (!k) for (c = w, w = g.length; c < w; ++c) g[x[c]] = 0;for (l = v(g), a = new (k ? Uint8Array : Array)(i + b), c = 0, y = i + b; c < y;) switch (p = E(this, l), p) {case 16:
              for (h = 3 + C(this, 2); h--;) a[c++] = m;break;case 17:
              for (h = 3 + C(this, 3); h--;) a[c++] = 0;m = 0;break;case 18:
              for (h = 11 + C(this, 7); h--;) a[c++] = 0;m = 0;break;default:
              m = a[c++] = p;}b = v(k ? a.subarray(0, i) : a.slice(0, i)), d = v(k ? a.subarray(i) : a.slice(i)), this.j(b, d);break;default:
          throw Error("unknown BTYPE: " + f);}
    }return this.n();
  };var e,
      h,
      t = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
      x = k ? new Uint16Array(t) : t,
      t = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258],
      c = k ? new Uint16Array(t) : t,
      t = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0],
      f = k ? new Uint8Array(t) : t,
      t = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577],
      u = k ? new Uint16Array(t) : t,
      t = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
      l = k ? new Uint8Array(t) : t,
      d = new (k ? Uint8Array : Array)(288);for (e = 0, h = d.length; e < h; ++e) d[e] = e <= 143 ? 8 : e <= 255 ? 9 : e <= 279 ? 7 : 8;var p,
      y,
      T = v(d),
      b = new (k ? Uint8Array : Array)(30);for (p = 0, y = b.length; p < y; ++p) b[p] = 5;var A = v(b);function C(e, t) {
    for (var r, n = e.f, i = e.d, o = e.input, s = e.a, a = o.length; i < t;) {
      if (a <= s) throw Error("input buffer is broken");n |= o[s++] << i, i += 8;
    }return r = n & (1 << t) - 1, e.f = n >>> t, e.d = i - t, e.a = s, r;
  }function E(e, t) {
    for (var r = e.f, n = e.d, i = e.input, o = e.a, s = i.length, a = t[0], h = t[1]; n < h && !(s <= o);) r |= i[o++] << n, n += 8;if (n < (a = (t = a[r & (1 << h) - 1]) >>> 16)) throw Error("invalid code length: " + a);return e.f = r >> a, e.d = n - a, e.a = o, 65535 & t;
  }function W(e, t) {
    var r, n;if (this.input = e, this.a = 0, t ? (t.index && (this.a = t.index), t.verify && (this.A = t.verify)) : t = {}, r = e[this.a++], n = e[this.a++], (15 & r) !== g) throw Error("unsupported compression method");if (this.method = g, 0 != ((r << 8) + n) % 31) throw Error("invalid fcheck flag:" + ((r << 8) + n) % 31);if (32 & n) throw Error("fdict flag is not supported");this.q = new w(e, { index: this.a, bufferSize: t.bufferSize, bufferType: t.bufferType, resize: t.resize });
  }w.prototype.j = function (e, t) {
    var r = this.c,
        n = this.b;this.o = e;for (var i, o, s, a, h = r.length - 258; 256 !== (i = E(this, e));) if (i < 256) h <= n && (this.b = n, r = this.e(), n = this.b), r[n++] = i;else for (a = c[o = i - 257], 0 < f[o] && (a += C(this, f[o])), i = E(this, t), s = u[i], 0 < l[i] && (s += C(this, l[i])), h <= n && (this.b = n, r = this.e(), n = this.b); a--;) r[n] = r[n++ - s];for (; 8 <= this.d;) this.d -= 8, this.a--;this.b = n;
  }, w.prototype.w = function (e, t) {
    var r = this.c,
        n = this.b;this.o = e;for (var i, o, s, a, h = r.length; 256 !== (i = E(this, e));) if (i < 256) h <= n && (h = (r = this.e()).length), r[n++] = i;else for (a = c[o = i - 257], 0 < f[o] && (a += C(this, f[o])), i = E(this, t), s = u[i], 0 < l[i] && (s += C(this, l[i])), h < n + a && (h = (r = this.e()).length); a--;) r[n] = r[n++ - s];for (; 8 <= this.d;) this.d -= 8, this.a--;this.b = n;
  }, w.prototype.e = function () {
    var e,
        t,
        r = new (k ? Uint8Array : Array)(this.b - 32768),
        n = this.b - 32768,
        i = this.c;if (k) r.set(i.subarray(32768, r.length));else for (e = 0, t = r.length; e < t; ++e) r[e] = i[e + 32768];if (this.g.push(r), this.l += r.length, k) i.set(i.subarray(n, 32768 + n));else for (e = 0; e < 32768; ++e) i[e] = i[n + e];return this.b = 32768, i;
  }, w.prototype.z = function (e) {
    var t,
        r = this.input.length / this.a + 1 | 0,
        n = this.input,
        i = this.c;return e && ("number" == typeof e.p && (r = e.p), "number" == typeof e.u && (r += e.u)), n = r < 2 ? (e = (n.length - this.a) / this.o[2] / 2 * 258 | 0) < i.length ? i.length + e : i.length << 1 : i.length * r, k ? (t = new Uint8Array(n)).set(i) : t = i, this.c = t;
  }, w.prototype.n = function () {
    var e,
        t,
        r,
        n,
        i,
        o = 0,
        s = this.c,
        a = this.g,
        h = new (k ? Uint8Array : Array)(this.l + (this.b - 32768));if (0 === a.length) return k ? this.c.subarray(32768, this.b) : this.c.slice(32768, this.b);for (t = 0, r = a.length; t < r; ++t) for (n = 0, i = (e = a[t]).length; n < i; ++n) h[o++] = e[n];for (t = 32768, r = this.b; t < r; ++t) h[o++] = s[t];return this.g = [], this.buffer = h;
  }, w.prototype.v = function () {
    var e,
        t = this.b;return k ? this.r ? (e = new Uint8Array(t)).set(this.c.subarray(0, t)) : e = this.c.subarray(0, t) : (this.c.length > t && (this.c.length = t), e = this.c), this.buffer = e;
  }, W.prototype.k = function () {
    var e,
        t = this.input;if (e = this.q.k(), this.a = this.q.a, this.A) {
      t = (t[this.a++] << 24 | t[this.a++] << 16 | t[this.a++] << 8 | t[this.a++]) >>> 0;var r = e;if ("string" == typeof r) {
        var n,
            i,
            o = r.split("");for (n = 0, i = o.length; n < i; n++) o[n] = (255 & o[n].charCodeAt(0)) >>> 0;r = o;
      }for (var s, a = 1, h = 0, c = r.length, f = 0; 0 < c;) {
        for (c -= s = 1024 < c ? 1024 : c; h += a += r[f++], --s;);a %= 65521, h %= 65521;
      }if (t != (h << 16 | a) >>> 0) throw Error("invalid adler-32 checksum");
    }return e;
  };var g = 8;r("Zlib.Inflate", W), r("Zlib.Inflate.prototype.decompress", W.prototype.k);var n,
      m,
      i,
      S,
      _ = { ADAPTIVE: a, BLOCK: s };if (Object.keys) n = Object.keys(_);else for (m in n = [], i = 0, _) n[i++] = m;for (i = 0, S = n.length; i < S; ++i) r("Zlib.Inflate.BufferType." + (m = n[i]), _[m]);
}.call(this), function () {
  function l(e) {
    throw e;
  }var k = void 0,
      o = window;function v(e, t) {
    var r = e.split("."),
        n = o;r[0] in n || !n.execScript || n.execScript("var " + r[0]);for (var i; r.length && (i = r.shift());) r.length || t === k ? n = n[i] || (n[i] = {}) : n[i] = t;
  }var x = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array && "undefined" != typeof DataView;var n;for (new (x ? Uint8Array : Array)(256), n = 0; n < 256; ++n) for (var i = (i = n) >>> 1; i; i >>>= 1) 0;var e = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117],
      y = x ? new Uint32Array(e) : e;var s;function D(e) {
    var t,
        r,
        n,
        i,
        o,
        s,
        f,
        a,
        h,
        u,
        l = e.length,
        c = 0,
        d = Number.POSITIVE_INFINITY;for (a = 0; a < l; ++a) e[a] > c && (c = e[a]), e[a] < d && (d = e[a]);for (t = 1 << c, r = new (x ? Uint32Array : Array)(t), n = 1, i = 0, o = 2; n <= c;) {
      for (a = 0; a < l; ++a) if (e[a] === n) {
        for (f = i, h = s = 0; h < n; ++h) s = s << 1 | 1 & f, f >>= 1;for (u = n << 16 | a, h = s; h < t; h += o) r[h] = u;++i;
      }++n, i <<= 1, o <<= 1;
    }return [r, c, d];
  }o.Uint8Array !== k && (String.fromCharCode.apply = (s = String.fromCharCode.apply, function (e, t) {
    return s.call(String.fromCharCode, e, Array.prototype.slice.call(t));
  }));var t,
      a = [];for (t = 0; t < 288; t++) switch (!0) {case t <= 143:
      a.push([t + 48, 8]);break;case t <= 255:
      a.push([t - 144 + 400, 9]);break;case t <= 279:
      a.push([t - 256, 7]);break;case t <= 287:
      a.push([t - 280 + 192, 8]);break;default:
      l("invalid literal: " + t);}var e = function () {
    var e,
        t,
        r = [];for (e = 3; e <= 258; e++) t = function (e) {
      switch (!0) {case 3 === e:
          return [257, e - 3, 0];case 4 === e:
          return [258, e - 4, 0];case 5 === e:
          return [259, e - 5, 0];case 6 === e:
          return [260, e - 6, 0];case 7 === e:
          return [261, e - 7, 0];case 8 === e:
          return [262, e - 8, 0];case 9 === e:
          return [263, e - 9, 0];case 10 === e:
          return [264, e - 10, 0];case e <= 12:
          return [265, e - 11, 1];case e <= 14:
          return [266, e - 13, 1];case e <= 16:
          return [267, e - 15, 1];case e <= 18:
          return [268, e - 17, 1];case e <= 22:
          return [269, e - 19, 2];case e <= 26:
          return [270, e - 23, 2];case e <= 30:
          return [271, e - 27, 2];case e <= 34:
          return [272, e - 31, 2];case e <= 42:
          return [273, e - 35, 3];case e <= 50:
          return [274, e - 43, 3];case e <= 58:
          return [275, e - 51, 3];case e <= 66:
          return [276, e - 59, 3];case e <= 82:
          return [277, e - 67, 4];case e <= 98:
          return [278, e - 83, 4];case e <= 114:
          return [279, e - 99, 4];case e <= 130:
          return [280, e - 115, 4];case e <= 162:
          return [281, e - 131, 5];case e <= 194:
          return [282, e - 163, 5];case e <= 226:
          return [283, e - 195, 5];case e <= 257:
          return [284, e - 227, 5];case 258 === e:
          return [285, e - 258, 0];default:
          l("invalid length: " + e);}
    }(e), r[e] = t[2] << 24 | t[1] << 16 | t[0];return r;
  }();function I(e, t) {
    switch (this.l = [], this.m = 32768, this.d = this.f = this.c = this.t = 0, this.input = x ? new Uint8Array(e) : e, this.u = !1, this.n = 1, this.K = !1, t ? (t.index && (this.c = t.index), t.bufferSize && (this.m = t.bufferSize), t.bufferType && (this.n = t.bufferType), t.resize && (this.K = t.resize)) : t = {}, this.n) {case 0:
        this.a = 32768, this.b = new (x ? Uint8Array : Array)(32768 + this.m + 258);break;case 1:
        this.a = 0, this.b = new (x ? Uint8Array : Array)(this.m), this.e = this.W, this.B = this.R, this.q = this.V;break;default:
        l(Error("invalid inflate mode"));}
  }x && new Uint32Array(e);I.prototype.r = function () {
    for (; !this.u;) {
      var f = K(this, 3);switch (1 & f && (this.u = !0), f >>>= 1) {case 0:
          var e = this.input,
              t = this.c,
              r = this.b,
              n = this.a,
              i = e.length,
              o = k,
              u = r.length,
              s = k;switch (this.d = this.f = 0, i <= t + 1 && l(Error("invalid uncompressed block header: LEN")), o = e[t++] | e[t++] << 8, i <= t + 1 && l(Error("invalid uncompressed block header: NLEN")), o === ~(e[t++] | e[t++] << 8) && l(Error("invalid uncompressed block header: length verify")), t + o > e.length && l(Error("input buffer is broken")), this.n) {case 0:
              for (; n + o > r.length;) {
                if (o -= s = u - n, x) r.set(e.subarray(t, t + s), n), n += s, t += s;else for (; s--;) r[n++] = e[t++];this.a = n, r = this.e(), n = this.a;
              }break;case 1:
              for (; n + o > r.length;) r = this.e({ H: 2 });break;default:
              l(Error("invalid inflate mode"));}if (x) r.set(e.subarray(t, t + o), n), n += o, t += o;else for (; o--;) r[n++] = e[t++];this.c = t, this.a = n, this.b = r;break;case 1:
          this.q(T, A);break;case 2:
          for (var d, p, v, y, i = K(this, 5) + 257, b = K(this, 5) + 1, w = K(this, 4) + 4, g = new (x ? Uint8Array : Array)(E.length), a = k, m = k, h = k, c = k, c = 0; c < w; ++c) g[E[c]] = K(this, 3);if (!x) for (c = w, w = g.length; c < w; ++c) g[E[c]] = 0;for (d = D(g), a = new (x ? Uint8Array : Array)(i + b), c = 0, y = i + b; c < y;) switch (v = M(this, d), v) {case 16:
              for (h = 3 + K(this, 2); h--;) a[c++] = m;break;case 17:
              for (h = 3 + K(this, 3); h--;) a[c++] = 0;m = 0;break;case 18:
              for (h = 11 + K(this, 7); h--;) a[c++] = 0;m = 0;break;default:
              m = a[c++] = v;}b = D(x ? a.subarray(0, i) : a.slice(0, i)), p = D(x ? a.subarray(i) : a.slice(i)), this.q(b, p);break;default:
          l(Error("unknown BTYPE: " + f));}
    }return this.B();
  };var r,
      h,
      e = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
      E = x ? new Uint16Array(e) : e,
      e = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258],
      c = x ? new Uint16Array(e) : e,
      e = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0],
      f = x ? new Uint8Array(e) : e,
      e = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577],
      d = x ? new Uint16Array(e) : e,
      e = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
      p = x ? new Uint8Array(e) : e,
      b = new (x ? Uint8Array : Array)(288);for (r = 0, h = b.length; r < h; ++r) b[r] = r <= 143 ? 8 : r <= 255 ? 9 : r <= 279 ? 7 : 8;var w,
      g,
      T = D(b),
      m = new (x ? Uint8Array : Array)(30);for (w = 0, g = m.length; w < g; ++w) m[w] = 5;var A = D(m);function K(e, t) {
    for (var r, n = e.f, i = e.d, o = e.input, s = e.c, a = o.length; i < t;) a <= s && l(Error("input buffer is broken")), n |= o[s++] << i, i += 8;return r = n & (1 << t) - 1, e.f = n >>> t, e.d = i - t, e.c = s, r;
  }function M(e, t) {
    for (var r = e.f, n = e.d, i = e.input, o = e.c, s = i.length, a = t[0], h = t[1]; n < h && !(s <= o);) r |= i[o++] << n, n += 8;return n < (a = (t = a[r & (1 << h) - 1]) >>> 16) && l(Error("invalid code length: " + a)), e.f = r >> a, e.d = n - a, e.c = o, 65535 & t;
  }function U(e) {
    e = e || {}, this.files = [], this.v = e.comment;
  }function V(e, t) {
    t = t || {}, this.input = x && e instanceof Array ? new Uint8Array(e) : e, this.c = 0, this.ba = t.verify || !1, this.j = t.password;
  }(e = I.prototype).q = function (e, t) {
    var r = this.b,
        n = this.a;this.C = e;for (var i, o, s, a, h = r.length - 258; 256 !== (i = M(this, e));) if (i < 256) h <= n && (this.a = n, r = this.e(), n = this.a), r[n++] = i;else for (a = c[o = i - 257], 0 < f[o] && (a += K(this, f[o])), i = M(this, t), s = d[i], 0 < p[i] && (s += K(this, p[i])), h <= n && (this.a = n, r = this.e(), n = this.a); a--;) r[n] = r[n++ - s];for (; 8 <= this.d;) this.d -= 8, this.c--;this.a = n;
  }, e.V = function (e, t) {
    var r = this.b,
        n = this.a;this.C = e;for (var i, o, s, a, h = r.length; 256 !== (i = M(this, e));) if (i < 256) h <= n && (h = (r = this.e()).length), r[n++] = i;else for (a = c[o = i - 257], 0 < f[o] && (a += K(this, f[o])), i = M(this, t), s = d[i], 0 < p[i] && (s += K(this, p[i])), h < n + a && (h = (r = this.e()).length); a--;) r[n] = r[n++ - s];for (; 8 <= this.d;) this.d -= 8, this.c--;this.a = n;
  }, e.e = function () {
    var e,
        t,
        r = new (x ? Uint8Array : Array)(this.a - 32768),
        n = this.a - 32768,
        i = this.b;if (x) r.set(i.subarray(32768, r.length));else for (e = 0, t = r.length; e < t; ++e) r[e] = i[e + 32768];if (this.l.push(r), this.t += r.length, x) i.set(i.subarray(n, 32768 + n));else for (e = 0; e < 32768; ++e) i[e] = i[n + e];return this.a = 32768, i;
  }, e.W = function (e) {
    var t,
        r = this.input.length / this.c + 1 | 0,
        n = this.input,
        i = this.b;return e && ("number" == typeof e.H && (r = e.H), "number" == typeof e.P && (r += e.P)), n = r < 2 ? (e = (n.length - this.c) / this.C[2] / 2 * 258 | 0) < i.length ? i.length + e : i.length << 1 : i.length * r, x ? (t = new Uint8Array(n)).set(i) : t = i, this.b = t;
  }, e.B = function () {
    var e,
        t,
        r,
        n,
        i,
        o = 0,
        s = this.b,
        a = this.l,
        h = new (x ? Uint8Array : Array)(this.t + (this.a - 32768));if (0 === a.length) return x ? this.b.subarray(32768, this.a) : this.b.slice(32768, this.a);for (t = 0, r = a.length; t < r; ++t) for (n = 0, i = (e = a[t]).length; n < i; ++n) h[o++] = e[n];for (t = 32768, r = this.a; t < r; ++t) h[o++] = s[t];return this.l = [], this.buffer = h;
  }, e.R = function () {
    var e,
        t = this.a;return x ? this.K ? (e = new Uint8Array(t)).set(this.b.subarray(0, t)) : e = this.b.subarray(0, t) : (this.b.length > t && (this.b.length = t), e = this.b), this.buffer = e;
  }, U.prototype.L = function (e) {
    this.j = e;
  }, U.prototype.s = function (e) {
    e = 65535 & e[2] | 2;return e * (1 ^ e) >> 8 & 255;
  }, U.prototype.k = function (e, t) {
    e[0] = (y[255 & (e[0] ^ t)] ^ e[0] >>> 8) >>> 0, e[1] = 1 + (6681 * (20173 * (e[1] + (255 & e[0])) >>> 0) >>> 0) >>> 0, e[2] = (y[255 & (e[2] ^ e[1] >>> 24)] ^ e[2] >>> 8) >>> 0;
  }, U.prototype.T = function (e) {
    var t,
        r,
        n = [305419896, 591751049, 878082192];for (x && (n = new Uint32Array(n)), t = 0, r = e.length; t < r; ++t) this.k(n, 255 & e[t]);return n;
  };var S = 0,
      _ = 8,
      C = [80, 75, 1, 2],
      B = [80, 75, 3, 4],
      u = [80, 75, 5, 6];function ta(e, t) {
    this.input = e, this.offset = t;
  }function ua(e, t) {
    this.input = e, this.offset = t;
  }ta.prototype.parse = function () {
    var e = this.input,
        t = this.offset;e[t++] === C[0] && e[t++] === C[1] && e[t++] === C[2] && e[t++] === C[3] || l(Error("invalid file header signature")), this.version = e[t++], this.ia = e[t++], this.Z = e[t++] | e[t++] << 8, this.I = e[t++] | e[t++] << 8, this.A = e[t++] | e[t++] << 8, this.time = e[t++] | e[t++] << 8, this.U = e[t++] | e[t++] << 8, this.p = (e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24) >>> 0, this.z = (e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24) >>> 0, this.J = (e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24) >>> 0, this.h = e[t++] | e[t++] << 8, this.g = e[t++] | e[t++] << 8, this.F = e[t++] | e[t++] << 8, this.ea = e[t++] | e[t++] << 8, this.ga = e[t++] | e[t++] << 8, this.fa = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24, this.$ = (e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24) >>> 0, this.filename = String.fromCharCode.apply(null, x ? e.subarray(t, t += this.h) : e.slice(t, t += this.h)), this.X = x ? e.subarray(t, t += this.g) : e.slice(t, t += this.g), this.v = x ? e.subarray(t, t + this.F) : e.slice(t, t + this.F), this.length = t - this.offset;
  };var P = 1;function $(e) {
    var t,
        r,
        n,
        i,
        o = [],
        f = {};if (!e.i) {
      if (e.o === k) {
        var s,
            a = e.input;if (!e.D) e: {
          var h,
              c = e.input;for (h = c.length - 12; 0 < h; --h) if (c[h] === u[0] && c[h + 1] === u[1] && c[h + 2] === u[2] && c[h + 3] === u[3]) {
            e.D = h;break e;
          }l(Error("End of Central Directory Record not found"));
        }s = e.D, a[s++] === u[0] && a[s++] === u[1] && a[s++] === u[2] && a[s++] === u[3] || l(Error("invalid signature")), e.ha = a[s++] | a[s++] << 8, e.ja = a[s++] | a[s++] << 8, e.ka = a[s++] | a[s++] << 8, e.aa = a[s++] | a[s++] << 8, e.Q = (a[s++] | a[s++] << 8 | a[s++] << 16 | a[s++] << 24) >>> 0, e.o = (a[s++] | a[s++] << 8 | a[s++] << 16 | a[s++] << 24) >>> 0, e.w = a[s++] | a[s++] << 8, e.v = x ? a.subarray(s, s + e.w) : a.slice(s, s + e.w);
      }for (t = e.o, n = 0, i = e.aa; n < i; ++n) (r = new ta(e.input, t)).parse(), t += r.length, f[(o[n] = r).filename] = n;e.Q < t - e.o && l(Error("invalid file header size")), e.i = o, e.G = f;
    }
  }function wa(e, t, r) {
    return r ^= e.s(t), e.k(t, r), r;
  }ua.prototype.parse = function () {
    var e = this.input,
        t = this.offset;e[t++] === B[0] && e[t++] === B[1] && e[t++] === B[2] && e[t++] === B[3] || l(Error("invalid local file header signature")), this.Z = e[t++] | e[t++] << 8, this.I = e[t++] | e[t++] << 8, this.A = e[t++] | e[t++] << 8, this.time = e[t++] | e[t++] << 8, this.U = e[t++] | e[t++] << 8, this.p = (e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24) >>> 0, this.z = (e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24) >>> 0, this.J = (e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24) >>> 0, this.h = e[t++] | e[t++] << 8, this.g = e[t++] | e[t++] << 8, this.filename = String.fromCharCode.apply(null, x ? e.subarray(t, t += this.h) : e.slice(t, t += this.h)), this.X = x ? e.subarray(t, t += this.g) : e.slice(t, t += this.g), this.length = t - this.offset;
  }, (e = V.prototype).Y = function () {
    var e,
        t,
        r,
        n = [];for (this.i || $(this), e = 0, t = (r = this.i).length; e < t; ++e) n[e] = r[e].filename;return n;
  }, e.r = function (e, t) {
    this.G || $(this), (s = this.G[e]) === k && l(Error(e + " not found")), e = t || {};var r,
        n,
        i,
        o,
        s,
        f,
        a,
        u,
        d = this.input,
        t = this.i;if (t || $(this), t[s] === k && l(Error("wrong index")), n = t[s].$, (r = new ua(this.input, n)).parse(), n += r.length, i = r.z, 0 != (r.I & P)) {
      for (e.password || this.j || l(Error("please set password")), f = this.S(e.password || this.j), u = (a = n) + 12; a < u; ++a) wa(this, f, d[a]);for (u = (a = n += 12) + (i -= 12); a < u; ++a) d[a] = wa(this, f, d[a]);
    }switch (r.A) {case S:
        o = x ? this.input.subarray(n, n + i) : this.input.slice(n, n + i);break;case _:
        o = new I(this.input, { index: n, bufferSize: r.J }).r();break;default:
        l(Error("unknown compression type"));}if (this.ba) {
      var h,
          c = k,
          p = "number" == typeof c ? c : c = 0,
          t = o.length;for (h = -1, p = 7 & t; p--; ++c) h = h >>> 8 ^ y[255 & (h ^ o[c])];for (p = t >> 3; p--; c += 8) h = (h = (h = (h = (h = (h = (h = (h = h >>> 8 ^ y[255 & (h ^ o[c])]) >>> 8 ^ y[255 & (h ^ o[c + 1])]) >>> 8 ^ y[255 & (h ^ o[c + 2])]) >>> 8 ^ y[255 & (h ^ o[c + 3])]) >>> 8 ^ y[255 & (h ^ o[c + 4])]) >>> 8 ^ y[255 & (h ^ o[c + 5])]) >>> 8 ^ y[255 & (h ^ o[c + 6])]) >>> 8 ^ y[255 & (h ^ o[c + 7])];r.p !== (s = (4294967295 ^ h) >>> 0) && l(Error("wrong crc: file=0x" + r.p.toString(16) + ", data=0x" + s.toString(16)));
    }return o;
  }, e.L = function (e) {
    this.j = e;
  }, e.k = U.prototype.k, e.S = U.prototype.T, e.s = U.prototype.s, v("Zlib.Unzip", V), v("Zlib.Unzip.prototype.decompress", V.prototype.r), v("Zlib.Unzip.prototype.getFilenames", V.prototype.Y), v("Zlib.Unzip.prototype.setPassword", V.prototype.L);
}.call(this), function (e, t) {
  "object" == typeof exports && "object" == typeof module ? window.msgpack = module.exports = t() : "function" == typeof define && define.amd ? window.msgpack = define([], t) : "object" == typeof exports ? window.msgpack = exports.msgpack = t() : window.msgpack = e.msgpack = t();
}(this, function () {
  return r = [function (r, e, t) {
    t.r(e), t.d(e, "encode", function () {
      return encode;
    }), t.d(e, "decode", function () {
      return decode;
    }), t.d(e, "decodeAsync", function () {
      return decodeAsync;
    }), t.d(e, "decodeArrayStream", function () {
      return decodeArrayStream;
    }), t.d(e, "decodeStream", function () {
      return decodeStream;
    }), t.d(e, "Decoder", function () {
      return P;
    }), t.d(e, "Encoder", function () {
      return k;
    }), t.d(e, "ExtensionCodec", function () {
      return g;
    }), t.d(e, "ExtData", function () {
      return o;
    }), t.d(e, "EXT_TIMESTAMP", function () {
      return v;
    }), t.d(e, "encodeDateToTimeSpec", function () {
      return encodeDateToTimeSpec;
    }), t.d(e, "encodeTimeSpecToTimestamp", function () {
      return encodeTimeSpecToTimestamp;
    }), t.d(e, "decodeTimestampToTimeSpec", function () {
      return decodeTimestampToTimeSpec;
    }), t.d(e, "encodeTimestampExtension", function () {
      return encodeTimestampExtension;
    }), t.d(e, "decodeTimestampExtension", function () {
      return decodeTimestampExtension;
    });var n = function (e, t) {
      var r = "function" == typeof Symbol && e[Symbol.iterator];if (!r) return e;var n,
          i,
          o = r.call(e),
          s = [];try {
        for (; (void 0 === t || 0 < t--) && !(n = o.next()).done;) s.push(n.value);
      } catch (e) {
        i = { error: e };
      } finally {
        try {
          n && !n.done && (r = o.return) && r.call(o);
        } finally {
          if (i) throw i.error;
        }
      }return s;
    };var u = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(n(arguments[t]));return e;
    };var l = "undefined" != typeof process && "undefined" != typeof TextEncoder && "undefined" != typeof TextDecoder;function utf8Count(e) {
      var t = e.length;var r = 0;var n = 0;for (; n < t;) {
        var i = e.charCodeAt(n++);var o;0 != (4294967168 & i) ? 0 == (4294965248 & i) ? r += 2 : (55296 <= i && i <= 56319 && n < t && 56320 == (64512 & (o = e.charCodeAt(n))) && (++n, i = ((1023 & i) << 10) + (1023 & o) + 65536), r += 0 == (4294901760 & i) ? 3 : 4) : r++;
      }return r;
    }var i = l ? new TextEncoder() : void 0;var d = "undefined" != typeof process ? 200 : 0;var p = null != i && i.encodeInto ? function (e, t, r) {
      i.encodeInto(e, t.subarray(r));
    } : function (e, t, r) {
      t.set(i.encode(e), r);
    };function utf8DecodeJs(e, t, r) {
      var n = t;var f = n + r;var i = [];var o = "";for (; n < f;) {
        var s = e[n++];var a, h, c;0 == (128 & s) ? i.push(s) : 192 == (224 & s) ? (a = 63 & e[n++], i.push((31 & s) << 6 | a)) : 224 == (240 & s) ? (a = 63 & e[n++], h = 63 & e[n++], i.push((31 & s) << 12 | a << 6 | h)) : 240 == (248 & s) ? (65535 < (c = (7 & s) << 18 | (a = 63 & e[n++]) << 12 | (h = 63 & e[n++]) << 6 | 63 & e[n++]) && (c -= 65536, i.push(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c), i.push(c)) : i.push(s), 4096 <= i.length && (o += String.fromCharCode.apply(String, u(i)), i.length = 0);
      }return 0 < i.length && (o += String.fromCharCode.apply(String, u(i))), o;
    }var s = l ? new TextDecoder() : null;var c = "undefined" != typeof process ? 200 : 0;var o = function (e, t) {
      this.type = e, this.data = t;
    };function setInt64(e, t, r) {
      var n = Math.floor(r / 4294967296);e.setUint32(t, n), e.setUint32(t + 4, r);
    }function getInt64(e, t) {
      return 4294967296 * e.getInt32(t) + e.getUint32(t + 4);
    }var v = -1;var y = 4294967295;var b = 17179869183;function encodeTimeSpecToTimestamp(e) {
      var t = e.sec,
          e = e.nsec;var r, n, i, o;return 0 <= t && 0 <= e && t <= b ? 0 === e && t <= y ? (i = new Uint8Array(4), (o = new DataView(i.buffer)).setUint32(0, t)) : (r = t / 4294967296, n = 4294967295 & t, i = new Uint8Array(8), (o = new DataView(i.buffer)).setUint32(0, e << 2 | 3 & r), o.setUint32(4, n)) : (i = new Uint8Array(12), (o = new DataView(i.buffer)).setUint32(0, e), setInt64(o, 4, t)), i;
    }function encodeDateToTimeSpec(e) {
      e = e.getTime();var t = Math.floor(e / 1e3);e = 1e6 * (e - 1e3 * t);var r = Math.floor(e / 1e9);return { sec: t + r, nsec: e - 1e9 * r };
    }function encodeTimestampExtension(e) {
      return e instanceof Date ? encodeTimeSpecToTimestamp(encodeDateToTimeSpec(e)) : null;
    }function decodeTimestampToTimeSpec(e) {
      var t = new DataView(e.buffer, e.byteOffset, e.byteLength);switch (e.byteLength) {case 4:
          return { sec: t.getUint32(0), nsec: 0 };case 8:
          var r = t.getUint32(0);return { sec: 4294967296 * (3 & r) + t.getUint32(4), nsec: r >>> 2 };case 12:
          return { sec: getInt64(t, 4), nsec: t.getUint32(0) };default:
          throw new Error("Unrecognized data size for timestamp: " + e.length);}
    }function decodeTimestampExtension(e) {
      e = decodeTimestampToTimeSpec(e);return new Date(1e3 * e.sec + e.nsec / 1e6);
    }var w = { type: v, encode: encodeTimestampExtension, decode: decodeTimestampExtension };ExtensionCodec.prototype.register = function (e) {
      var t = e.type,
          r = e.encode,
          e = e.decode;0 <= t ? (this.encoders[t] = r, this.decoders[t] = e) : (this.builtInEncoders[t = 1 + t] = r, this.builtInDecoders[t] = e);
    }, ExtensionCodec.prototype.tryToEncode = function (e, t) {
      for (var r = 0; r < this.builtInEncoders.length; r++) if (null != (i = this.builtInEncoders[r])) {
        var n = i(e, t);if (null != n) return new o(-1 - r, n);
      }for (r = 0; r < this.encoders.length; r++) {
        var i;if (null != (i = this.encoders[r])) {
          n = i(e, t);if (null != n) return new o(r, n);
        }
      }return e instanceof o ? e : null;
    }, ExtensionCodec.prototype.decode = function (e, t, r) {
      var n = t < 0 ? this.builtInDecoders[-1 - t] : this.decoders[t];return n ? n(e, t, r) : new o(t, e);
    }, ExtensionCodec.defaultCodec = new ExtensionCodec();var g = ExtensionCodec;function ExtensionCodec() {
      this.builtInEncoders = [], this.builtInDecoders = [], this.encoders = [], this.decoders = [], this.register(w);
    }function ensureUint8Array(e) {
      return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e instanceof ArrayBuffer ? new Uint8Array(e) : Uint8Array.from(e);
    }var m = function (e) {
      var t = "function" == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          n = 0;if (r) return r.call(e);if (e && "number" == typeof e.length) return { next: function () {
          return { value: (e = e && n >= e.length ? void 0 : e) && e[n++], done: !e };
        } };throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };var U = null != Uint8Array.prototype.slice || null != Uint8Array.prototype.slice;Encoder.prototype.encode = function (e, t) {
      if (t > this.maxDepth) throw new Error("Too deep objects in depth " + t);null == e ? this.encodeNil() : "boolean" == typeof e ? this.encodeBoolean(e) : "number" == typeof e ? this.encodeNumber(e) : "string" == typeof e ? this.encodeString(e) : this.encodeObject(e, t);
    }, Encoder.prototype.getUint8Array = function () {
      return this.bytes.subarray(0, this.pos);
    }, Encoder.prototype.ensureBufferSizeToWrite = function (e) {
      e = this.pos + e;this.view.byteLength < e && this.resizeBuffer(2 * e);
    }, Encoder.prototype.resizeBuffer = function (e) {
      e = new ArrayBuffer(e);var t = new Uint8Array(e);e = new DataView(e);t.set(this.bytes), this.view = e, this.bytes = t;
    }, Encoder.prototype.encodeNil = function () {
      this.writeU8(192);
    }, Encoder.prototype.encodeBoolean = function (e) {
      !1 === e ? this.writeU8(194) : this.writeU8(195);
    }, Encoder.prototype.encodeNumber = function (e) {
      !Number.isSafeInteger || Number.isSafeInteger(e) ? 0 <= e ? e < 128 ? this.writeU8(e) : e < 256 ? (this.writeU8(204), this.writeU8(e)) : e < 65536 ? (this.writeU8(205), this.writeU16(e)) : e < 4294967296 ? (this.writeU8(206), this.writeU32(e)) : (this.writeU8(207), this.writeU64(e)) : -32 <= e ? this.writeU8(224 | e + 32) : -128 <= e ? (this.writeU8(208), this.writeI8(e)) : -32768 <= e ? (this.writeU8(209), this.writeI16(e)) : -2147483648 <= e ? (this.writeU8(210), this.writeI32(e)) : (this.writeU8(211), this.writeI64(e)) : this.forceFloat32 ? (this.writeU8(202), this.writeF32(e)) : (this.writeU8(203), this.writeF64(e));
    }, Encoder.prototype.writeStringHeader = function (e) {
      if (e < 32) this.writeU8(160 + e);else if (e < 256) this.writeU8(217), this.writeU8(e);else if (e < 65536) this.writeU8(218), this.writeU16(e);else {
        if (!(e < 4294967296)) throw new Error("Too long string: " + e + " bytes in UTF-8");this.writeU8(219), this.writeU32(e);
      }
    }, Encoder.prototype.encodeString = function (e) {
      var t = e.length;if (l && d < t) {
        var r = utf8Count(e);this.ensureBufferSizeToWrite(5 + r), this.writeStringHeader(r), p(e, this.bytes, this.pos), this.pos += r;
      } else {
        r = utf8Count(e);this.ensureBufferSizeToWrite(5 + r), this.writeStringHeader(r);var n = e;var i = this.bytes;t = this.pos;var o = n.length;var s = t;var a = 0;for (; a < o;) {
          var h = n.charCodeAt(a++);var c;0 != (4294967168 & h) ? (0 == (4294965248 & h) ? i[s++] = h >> 6 & 31 | 192 : (55296 <= h && h <= 56319 && a < o && 56320 == (64512 & (c = n.charCodeAt(a))) && (++a, h = ((1023 & h) << 10) + (1023 & c) + 65536), 0 == (4294901760 & h) ? i[s++] = h >> 12 & 15 | 224 : (i[s++] = h >> 18 & 7 | 240, i[s++] = h >> 12 & 63 | 128), i[s++] = h >> 6 & 63 | 128), i[s++] = 63 & h | 128) : i[s++] = h;
        }this.pos += r;
      }
    }, Encoder.prototype.encodeObject = function (e, t) {
      var r = this.extensionCodec.tryToEncode(e, this.context);if (null != r) this.encodeExtension(r);else if (Array.isArray(e)) this.encodeArray(e, t);else if (ArrayBuffer.isView(e)) this.encodeBinary(e);else {
        if ("object" != typeof e) throw new Error("Unrecognized object: " + Object.prototype.toString.apply(e));this.encodeMap(e, t);
      }
    }, Encoder.prototype.encodeBinary = function (e) {
      var t = e.byteLength;if (t < 256) this.writeU8(196), this.writeU8(t);else if (t < 65536) this.writeU8(197), this.writeU16(t);else {
        if (!(t < 4294967296)) throw new Error("Too large binary: " + t);this.writeU8(198), this.writeU32(t);
      }t = ensureUint8Array(e);this.writeU8a(t);
    }, Encoder.prototype.encodeArray = function (e, t) {
      var r, n;var i = e.length;if (i < 16) this.writeU8(144 + i);else if (i < 65536) this.writeU8(220), this.writeU16(i);else {
        if (!(i < 4294967296)) throw new Error("Too large array: " + i);this.writeU8(221), this.writeU32(i);
      }try {
        for (var o = m(e), s = o.next(); !s.done; s = o.next()) {
          var a = s.value;this.encode(a, t + 1);
        }
      } catch (e) {
        r = { error: e };
      } finally {
        try {
          s && !s.done && (n = o.return) && n.call(o);
        } finally {
          if (r) throw r.error;
        }
      }
    }, Encoder.prototype.countWithoutUndefined = function (e, t) {
      var r, n;var i = 0;try {
        for (var o = m(t), s = o.next(); !s.done; s = o.next()) void 0 !== e[s.value] && i++;
      } catch (e) {
        r = { error: e };
      } finally {
        try {
          s && !s.done && (n = o.return) && n.call(o);
        } finally {
          if (r) throw r.error;
        }
      }return i;
    }, Encoder.prototype.encodeMap = function (e, t) {
      var r, n;var i = Object.keys(e);this.sortKeys && i.sort();var o = this.ignoreUndefined ? this.countWithoutUndefined(e, i) : i.length;if (o < 16) this.writeU8(128 + o);else if (o < 65536) this.writeU8(222), this.writeU16(o);else {
        if (!(o < 4294967296)) throw new Error("Too large map object: " + o);this.writeU8(223), this.writeU32(o);
      }try {
        for (var s = m(i), a = s.next(); !a.done; a = s.next()) {
          var h = a.value;var c = e[h];this.ignoreUndefined && void 0 === c || (this.encodeString(h), this.encode(c, t + 1));
        }
      } catch (e) {
        r = { error: e };
      } finally {
        try {
          a && !a.done && (n = s.return) && n.call(s);
        } finally {
          if (r) throw r.error;
        }
      }
    }, Encoder.prototype.encodeExtension = function (e) {
      var t = e.data.length;if (1 === t) this.writeU8(212);else if (2 === t) this.writeU8(213);else if (4 === t) this.writeU8(214);else if (8 === t) this.writeU8(215);else if (16 === t) this.writeU8(216);else if (t < 256) this.writeU8(199), this.writeU8(t);else if (t < 65536) this.writeU8(200), this.writeU16(t);else {
        if (!(t < 4294967296)) throw new Error("Too large extension object: " + t);this.writeU8(201), this.writeU32(t);
      }this.writeI8(e.type), this.writeU8a(e.data);
    }, Encoder.prototype.writeU8 = function (e) {
      this.ensureBufferSizeToWrite(1), this.view.setUint8(this.pos, e), this.pos++;
    }, Encoder.prototype.writeU8a = function (e) {
      var t = e.length;this.ensureBufferSizeToWrite(t), this.bytes.set(e, this.pos), this.pos += t;
    }, Encoder.prototype.writeI8 = function (e) {
      this.ensureBufferSizeToWrite(1), this.view.setInt8(this.pos, e), this.pos++;
    }, Encoder.prototype.writeU16 = function (e) {
      this.ensureBufferSizeToWrite(2), this.view.setUint16(this.pos, e), this.pos += 2;
    }, Encoder.prototype.writeI16 = function (e) {
      this.ensureBufferSizeToWrite(2), this.view.setInt16(this.pos, e), this.pos += 2;
    }, Encoder.prototype.writeU32 = function (e) {
      this.ensureBufferSizeToWrite(4), this.view.setUint32(this.pos, e), this.pos += 4;
    }, Encoder.prototype.writeI32 = function (e) {
      this.ensureBufferSizeToWrite(4), this.view.setInt32(this.pos, e), this.pos += 4;
    }, Encoder.prototype.writeF32 = function (e) {
      this.ensureBufferSizeToWrite(4), this.view.setFloat32(this.pos, e), this.pos += 4;
    }, Encoder.prototype.writeF64 = function (e) {
      this.ensureBufferSizeToWrite(8), this.view.setFloat64(this.pos, e), this.pos += 8;
    }, Encoder.prototype.writeU64 = function (e) {
      var t, r, n;this.ensureBufferSizeToWrite(8), t = this.view, r = this.pos, n = e, t.setUint32(r, e / 4294967296), t.setUint32(r + 4, n), this.pos += 8;
    }, Encoder.prototype.writeI64 = function (e) {
      this.ensureBufferSizeToWrite(8), setInt64(this.view, this.pos, e), this.pos += 8;
    };var k = Encoder;function Encoder(e, t, r, n, i, o, s) {
      void 0 === e && (e = g.defaultCodec), void 0 === r && (r = 1e3), void 0 === n && (n = 2048), void 0 === i && (i = !1), void 0 === o && (o = !1), void 0 === s && (s = !1), this.extensionCodec = e, this.context = t, this.maxDepth = r, this.initialBufferSize = n, this.sortKeys = i, this.forceFloat32 = o, this.ignoreUndefined = s, this.pos = 0, this.view = new DataView(new ArrayBuffer(this.initialBufferSize)), this.bytes = new Uint8Array(this.view.buffer);
    }var x = {};function encode(e, t) {
      t = new k((t = void 0 === t ? x : t).extensionCodec, t.context, t.maxDepth, t.initialBufferSize, t.sortKeys, t.forceFloat32, t.ignoreUndefined);return t.encode(e, 1), t.getUint8Array();
    }function prettyByte(e) {
      return (e < 0 ? "-" : "") + "0x" + Math.abs(e).toString(16).padStart(2, "0");
    }CachedKeyDecoder.prototype.canBeCached = function (e) {
      return 0 < e && e <= this.maxKeyLength;
    }, CachedKeyDecoder.prototype.get = function (e, t, r) {
      var n = this.caches[r - 1];var i = n.length;e: for (var o = 0; o < i; o++) {
        var s = n[o];var a = s.bytes;for (var h = 0; h < r; h++) if (a[h] !== e[t + h]) continue e;return s.value;
      }return null;
    }, CachedKeyDecoder.prototype.store = function (e, t) {
      var r = this.caches[e.length - 1];e = { bytes: e, value: t };r.length >= this.maxLengthPerKey ? r[Math.random() * r.length | 0] = e : r.push(e);
    }, CachedKeyDecoder.prototype.decode = function (e, t, r) {
      var n = this.get(e, t, r);if (null != n) return n;n = utf8DecodeJs(e, t, r);return e = (U ? Uint8Array.prototype.slice : Uint8Array.prototype.subarray).call(e, t, t + r), this.store(e, n), n;
    };t = CachedKeyDecoder;function CachedKeyDecoder(e, t) {
      void 0 === t && (t = 16), this.maxKeyLength = e = void 0 === e ? 16 : e, this.maxLengthPerKey = t, this.caches = [];for (var r = 0; r < this.maxKeyLength; r++) this.caches.push([]);
    }var E = function (e, n, i, o) {
      return new (i = i || Promise)(function (r, t) {
        function fulfilled(e) {
          try {
            step(o.next(e));
          } catch (e) {
            t(e);
          }
        }function rejected(e) {
          try {
            step(o.throw(e));
          } catch (e) {
            t(e);
          }
        }function step(e) {
          var t;e.done ? r(e.value) : ((t = e.value) instanceof i ? t : new i(function (e) {
            e(t);
          })).then(fulfilled, rejected);
        }step((o = o.apply(e, n || [])).next());
      });
    };var T = function (n, i) {
      var o,
          s,
          a,
          e,
          h = { label: 0, sent: function () {
          if (1 & a[0]) throw a[1];return a[1];
        }, trys: [], ops: [] };return e = { next: verb(0), throw: verb(1), return: verb(2) }, "function" == typeof Symbol && (e[Symbol.iterator] = function () {
        return this;
      }), e;function verb(r) {
        return function (e) {
          var t = [r, e];if (o) throw new TypeError("Generator is already executing.");for (; h;) try {
            if (o = 1, s && (a = 2 & t[0] ? s.return : t[0] ? s.throw || ((a = s.return) && a.call(s), 0) : s.next) && !(a = a.call(s, t[1])).done) return a;switch (s = 0, (t = a ? [2 & t[0], a.value] : t)[0]) {case 0:case 1:
                a = t;break;case 4:
                return h.label++, { value: t[1], done: !1 };case 5:
                h.label++, s = t[1], t = [0];continue;case 7:
                t = h.ops.pop(), h.trys.pop();continue;default:
                if (!(a = 0 < (a = h.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                  h = 0;continue;
                }if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                  h.label = t[1];break;
                }if (6 === t[0] && h.label < a[1]) {
                  h.label = a[1], a = t;break;
                }if (a && h.label < a[2]) {
                  h.label = a[2], h.ops.push(t);break;
                }a[2] && h.ops.pop(), h.trys.pop();continue;}t = i.call(n, h);
          } catch (e) {
            t = [6, e], s = 0;
          } finally {
            o = a = 0;
          }if (5 & t[0]) throw t[1];return { value: t[0] ? t[1] : void 0, done: !0 };
        };
      }
    };var A = function (s) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");var e,
          t = s[Symbol.asyncIterator];return t ? t.call(s) : (s = "function" == typeof __values ? __values(s) : s[Symbol.iterator](), e = {}, verb("next"), verb("throw"), verb("return"), e[Symbol.asyncIterator] = function () {
        return this;
      }, e);function verb(o) {
        e[o] = s[o] && function (i) {
          return new Promise(function (e, t) {
            var r, n;i = s[o](i), r = e, e = t, n = i.done, t = i.value, Promise.resolve(t).then(function (e) {
              r({ value: e, done: n });
            }, e);
          });
        };
      }
    };var f = function (e) {
      return this instanceof f ? (this.v = e, this) : new f(e);
    };var S = function (e, t, r) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");var i,
          o = r.apply(e, t || []),
          s = [];return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;function verb(n) {
        o[n] && (i[n] = function (r) {
          return new Promise(function (e, t) {
            1 < s.push([n, r, e, t]) || resume(n, r);
          });
        });
      }function resume(e, t) {
        try {
          (r = o[e](t)).value instanceof f ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(s[0][2], r);
        } catch (e) {
          settle(s[0][3], e);
        }var r;
      }function fulfill(e) {
        resume("next", e);
      }function reject(e) {
        resume("throw", e);
      }function settle(e, t) {
        e(t), s.shift(), s.length && resume(s[0][0], s[0][1]);
      }
    };var _ = new DataView(new ArrayBuffer(0));var D = new Uint8Array(_.buffer);var C = function () {
      try {
        _.getInt8(0);
      } catch (e) {
        return e.constructor;
      }throw new Error("never reached");
    }();var I = new C("Insufficient data");var h = 4294967295;var B = new t();Decoder.prototype.setBuffer = function (e) {
      this.bytes = ensureUint8Array(e), this.view = (e = this.bytes) instanceof ArrayBuffer ? new DataView(e) : (e = ensureUint8Array(e), new DataView(e.buffer, e.byteOffset, e.byteLength)), this.pos = 0;
    }, Decoder.prototype.appendBuffer = function (e) {
      var t, r, n;-1 !== this.headByte || this.hasRemaining() ? (t = this.bytes.subarray(this.pos), r = ensureUint8Array(e), (n = new Uint8Array(t.length + r.length)).set(t), n.set(r, t.length), this.setBuffer(n)) : this.setBuffer(e);
    }, Decoder.prototype.hasRemaining = function (e) {
      return this.view.byteLength - this.pos >= (e = void 0 === e ? 1 : e);
    }, Decoder.prototype.createNoExtraBytesError = function (e) {
      var t = this.view,
          r = this.pos;return new RangeError("Extra " + (t.byteLength - r) + " byte(s) found at buffer[" + e + "]");
    }, Decoder.prototype.decodeSingleSync = function () {
      var e = this.decodeSync();if (this.hasRemaining()) throw this.createNoExtraBytesError(this.pos);return e;
    }, Decoder.prototype.decodeSingleAsync = function (a) {
      var h, c;var f, u;return E(this, void 0, void 0, function () {
        var t, r, n, i, o, s;return T(this, function (e) {
          switch (e.label) {case 0:
              t = !1, e.label = 1;case 1:
              e.trys.push([1, 6, 7, 12]), h = A(a), e.label = 2;case 2:
              return [4, h.next()];case 3:
              if ((c = e.sent()).done) return [3, 5];if (n = c.value, t) throw this.createNoExtraBytesError(this.totalPos);this.appendBuffer(n);try {
                r = this.decodeSync(), t = !0;
              } catch (e) {
                if (!(e instanceof C)) throw e;
              }this.totalPos += this.pos, e.label = 4;case 4:
              return [3, 2];case 5:
              return [3, 12];case 6:
              return n = e.sent(), f = { error: n }, [3, 12];case 7:
              return e.trys.push([7,, 10, 11]), c && !c.done && (u = h.return) ? [4, u.call(h)] : [3, 9];case 8:
              e.sent(), e.label = 9;case 9:
              return [3, 11];case 10:
              if (f) throw f.error;return [7];case 11:
              return [7];case 12:
              if (t) {
                if (this.hasRemaining()) throw this.createNoExtraBytesError(this.totalPos);return [2, r];
              }throw i = (s = this).headByte, o = s.pos, s = s.totalPos, new RangeError("Insufficient data in parcing " + prettyByte(i) + " at " + s + " (" + o + " in the current buffer)");}
        });
      });
    }, Decoder.prototype.decodeArrayStream = function (e) {
      return this.decodeMultiAsync(e, !0);
    }, Decoder.prototype.decodeStream = function (e) {
      return this.decodeMultiAsync(e, !1);
    }, Decoder.prototype.decodeMultiAsync = function (h, c) {
      return S(this, arguments, function () {
        var t, r, n, i, o;var s, a;return T(this, function (e) {
          switch (e.label) {case 0:
              t = c, r = -1, e.label = 1;case 1:
              e.trys.push([1, 13, 14, 19]), n = A(h), e.label = 2;case 2:
              return [4, f(n.next())];case 3:
              if ((i = e.sent()).done) return [3, 12];if (o = i.value, c && 0 === r) throw this.createNoExtraBytesError(this.totalPos);this.appendBuffer(o), t && (r = this.readArraySize(), t = !1, this.complete()), e.label = 4;case 4:
              e.trys.push([4, 9,, 10]), e.label = 5;case 5:
              return [4, f(this.decodeSync())];case 6:
              return [4, e.sent()];case 7:
              return e.sent(), 0 == --r ? [3, 8] : [3, 5];case 8:
              return [3, 10];case 9:
              if (!((o = e.sent()) instanceof C)) throw o;return [3, 10];case 10:
              this.totalPos += this.pos, e.label = 11;case 11:
              return [3, 2];case 12:
              return [3, 19];case 13:
              return s = e.sent(), s = { error: s }, [3, 19];case 14:
              return e.trys.push([14,, 17, 18]), i && !i.done && (a = n.return) ? [4, f(a.call(n))] : [3, 16];case 15:
              e.sent(), e.label = 16;case 16:
              return [3, 18];case 17:
              if (s) throw s.error;return [7];case 18:
              return [7];case 19:
              return [2];}
        });
      });
    }, Decoder.prototype.decodeSync = function () {
      e: for (;;) {
        var e = this.readHeadByte();var t = void 0;if (224 <= e) t = e - 256;else if (e < 192) {
          if (e < 128) t = e;else if (e < 144) {
            if (0 !== (n = e - 128)) {
              this.pushMapState(n), this.complete();continue;
            }t = {};
          } else if (e < 160) {
            if (0 !== (n = e - 144)) {
              this.pushArrayState(n), this.complete();continue;
            }t = [];
          } else {
            var r = e - 160;t = this.decodeUtf8String(r, 0);
          }
        } else if (192 === e) t = null;else if (194 === e) t = !1;else if (195 === e) t = !0;else if (202 === e) t = this.readF32();else if (203 === e) t = this.readF64();else if (204 === e) t = this.readU8();else if (205 === e) t = this.readU16();else if (206 === e) t = this.readU32();else if (207 === e) t = this.readU64();else if (208 === e) t = this.readI8();else if (209 === e) t = this.readI16();else if (210 === e) t = this.readI32();else if (211 === e) t = this.readI64();else if (217 === e) {
          r = this.lookU8();t = this.decodeUtf8String(r, 1);
        } else if (218 === e) {
          r = this.lookU16();t = this.decodeUtf8String(r, 2);
        } else if (219 === e) {
          r = this.lookU32();t = this.decodeUtf8String(r, 4);
        } else if (220 === e) {
          if (0 !== (n = this.readU16())) {
            this.pushArrayState(n), this.complete();continue;
          }t = [];
        } else if (221 === e) {
          if (0 !== (n = this.readU32())) {
            this.pushArrayState(n), this.complete();continue;
          }t = [];
        } else if (222 === e) {
          if (0 !== (n = this.readU16())) {
            this.pushMapState(n), this.complete();continue;
          }t = {};
        } else if (223 === e) {
          if (0 !== (n = this.readU32())) {
            this.pushMapState(n), this.complete();continue;
          }t = {};
        } else if (196 === e) {
          var n = this.lookU8();t = this.decodeBinary(n, 1);
        } else if (197 === e) {
          n = this.lookU16();t = this.decodeBinary(n, 2);
        } else if (198 === e) {
          n = this.lookU32();t = this.decodeBinary(n, 4);
        } else if (212 === e) t = this.decodeExtension(1, 0);else if (213 === e) t = this.decodeExtension(2, 0);else if (214 === e) t = this.decodeExtension(4, 0);else if (215 === e) t = this.decodeExtension(8, 0);else if (216 === e) t = this.decodeExtension(16, 0);else if (199 === e) {
          n = this.lookU8();t = this.decodeExtension(n, 1);
        } else if (200 === e) {
          n = this.lookU16();t = this.decodeExtension(n, 2);
        } else {
          if (201 !== e) throw new Error("Unrecognized type byte: " + prettyByte(e));n = this.lookU32();t = this.decodeExtension(n, 4);
        }this.complete();var i = this.stack;for (; 0 < i.length;) {
          var o = i[i.length - 1];if (0 === o.type) {
            if (o.array[o.position] = t, o.position++, o.position !== o.size) continue e;i.pop(), t = o.array;
          } else {
            if (1 === o.type) {
              if (!function (e) {
                e = typeof e;return "string" == e || "number" == e;
              }(t)) throw new Error("The type of key must be string or number but " + typeof t);o.key = t, o.type = 2;continue e;
            }if (o.map[o.key] = t, o.readCount++, o.readCount !== o.size) {
              o.key = null, o.type = 1;continue e;
            }i.pop(), t = o.map;
          }
        }return t;
      }
    }, Decoder.prototype.readHeadByte = function () {
      return -1 === this.headByte && (this.headByte = this.readU8()), this.headByte;
    }, Decoder.prototype.complete = function () {
      this.headByte = -1;
    }, Decoder.prototype.readArraySize = function () {
      var e = this.readHeadByte();switch (e) {case 220:
          return this.readU16();case 221:
          return this.readU32();default:
          if (e < 160) return e - 144;throw new Error("Unrecognized array type byte: " + prettyByte(e));}
    }, Decoder.prototype.pushMapState = function (e) {
      if (e > this.maxMapLength) throw new Error("Max length exceeded: map length (" + e + ") > maxMapLengthLength (" + this.maxMapLength + ")");this.stack.push({ type: 1, size: e, key: null, readCount: 0, map: {} });
    }, Decoder.prototype.pushArrayState = function (e) {
      if (e > this.maxArrayLength) throw new Error("Max length exceeded: array length (" + e + ") > maxArrayLength (" + this.maxArrayLength + ")");this.stack.push({ type: 0, size: e, array: new Array(e), position: 0 });
    }, Decoder.prototype.decodeUtf8String = function (e, t) {
      if (e > this.maxStrLength) throw new Error("Max length exceeded: UTF-8 byte length (" + e + ") > maxStrLength (" + this.maxStrLength + ")");if (this.bytes.byteLength < this.pos + t + e) throw I;var r = this.pos + t;var n;return r = this.stateIsMapKey() && null !== (n = this.cachedKeyDecoder) && void 0 !== n && n.canBeCached(e) ? this.cachedKeyDecoder.decode(this.bytes, r, e) : l && c < e ? (n = (n = this.bytes).subarray(r, r + e), s.decode(n)) : utf8DecodeJs(this.bytes, r, e), this.pos += t + e, r;
    }, Decoder.prototype.stateIsMapKey = function () {
      return 0 < this.stack.length && 1 === this.stack[this.stack.length - 1].type;
    }, Decoder.prototype.decodeBinary = function (e, t) {
      if (e > this.maxBinLength) throw new Error("Max length exceeded: bin length (" + e + ") > maxBinLength (" + this.maxBinLength + ")");if (!this.hasRemaining(e + t)) throw I;var r = this.pos + t;r = this.bytes.subarray(r, r + e);return this.pos += t + e, r;
    }, Decoder.prototype.decodeExtension = function (e, t) {
      if (e > this.maxExtLength) throw new Error("Max length exceeded: ext length (" + e + ") > maxExtLength (" + this.maxExtLength + ")");var r = this.view.getInt8(this.pos + t);e = this.decodeBinary(e, t + 1);return this.extensionCodec.decode(e, r, this.context);
    }, Decoder.prototype.lookU8 = function () {
      return this.view.getUint8(this.pos);
    }, Decoder.prototype.lookU16 = function () {
      return this.view.getUint16(this.pos);
    }, Decoder.prototype.lookU32 = function () {
      return this.view.getUint32(this.pos);
    }, Decoder.prototype.readU8 = function () {
      var e = this.view.getUint8(this.pos);return this.pos++, e;
    }, Decoder.prototype.readI8 = function () {
      var e = this.view.getInt8(this.pos);return this.pos++, e;
    }, Decoder.prototype.readU16 = function () {
      var e = this.view.getUint16(this.pos);return this.pos += 2, e;
    }, Decoder.prototype.readI16 = function () {
      var e = this.view.getInt16(this.pos);return this.pos += 2, e;
    }, Decoder.prototype.readU32 = function () {
      var e = this.view.getUint32(this.pos);return this.pos += 4, e;
    }, Decoder.prototype.readI32 = function () {
      var e = this.view.getInt32(this.pos);return this.pos += 4, e;
    }, Decoder.prototype.readU64 = function () {
      e = this.view, t = this.pos;e = 4294967296 * e.getUint32(t) + e.getUint32(t + 4);var e, t;return this.pos += 8, e;
    }, Decoder.prototype.readI64 = function () {
      var e = getInt64(this.view, this.pos);return this.pos += 8, e;
    }, Decoder.prototype.readF32 = function () {
      var e = this.view.getFloat32(this.pos);return this.pos += 4, e;
    }, Decoder.prototype.readF64 = function () {
      var e = this.view.getFloat64(this.pos);return this.pos += 8, e;
    };var P = Decoder;function Decoder(e, t, r, n, i, o, s, a) {
      void 0 === e && (e = g.defaultCodec), void 0 === r && (r = h), void 0 === n && (n = h), void 0 === i && (i = h), void 0 === o && (o = h), void 0 === s && (s = h), void 0 === a && (a = B), this.extensionCodec = e, this.context = t, this.maxStrLength = r, this.maxBinLength = n, this.maxArrayLength = i, this.maxMapLength = o, this.maxExtLength = s, this.cachedKeyDecoder = a, this.totalPos = 0, this.pos = 0, this.view = _, this.bytes = D, this.headByte = -1, this.stack = [];
    }var L = {};function decode(e, t) {
      t = new P((t = void 0 === t ? L : t).extensionCodec, t.context, t.maxStrLength, t.maxBinLength, t.maxArrayLength, t.maxMapLength, t.maxExtLength);return t.setBuffer(e), t.decodeSingleSync();
    }var M = function (n, i) {
      var o,
          s,
          a,
          e,
          h = { label: 0, sent: function () {
          if (1 & a[0]) throw a[1];return a[1];
        }, trys: [], ops: [] };return e = { next: verb(0), throw: verb(1), return: verb(2) }, "function" == typeof Symbol && (e[Symbol.iterator] = function () {
        return this;
      }), e;function verb(r) {
        return function (e) {
          var t = [r, e];if (o) throw new TypeError("Generator is already executing.");for (; h;) try {
            if (o = 1, s && (a = 2 & t[0] ? s.return : t[0] ? s.throw || ((a = s.return) && a.call(s), 0) : s.next) && !(a = a.call(s, t[1])).done) return a;switch (s = 0, (t = a ? [2 & t[0], a.value] : t)[0]) {case 0:case 1:
                a = t;break;case 4:
                return h.label++, { value: t[1], done: !1 };case 5:
                h.label++, s = t[1], t = [0];continue;case 7:
                t = h.ops.pop(), h.trys.pop();continue;default:
                if (!(a = 0 < (a = h.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                  h = 0;continue;
                }if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                  h.label = t[1];break;
                }if (6 === t[0] && h.label < a[1]) {
                  h.label = a[1], a = t;break;
                }if (a && h.label < a[2]) {
                  h.label = a[2], h.ops.push(t);break;
                }a[2] && h.ops.pop(), h.trys.pop();continue;}t = i.call(n, h);
          } catch (e) {
            t = [6, e], s = 0;
          } finally {
            o = a = 0;
          }if (5 & t[0]) throw t[1];return { value: t[0] ? t[1] : void 0, done: !0 };
        };
      }
    };var a = function (e) {
      return this instanceof a ? (this.v = e, this) : new a(e);
    };var z = function (e, t, r) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");var i,
          o = r.apply(e, t || []),
          s = [];return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;function verb(n) {
        o[n] && (i[n] = function (r) {
          return new Promise(function (e, t) {
            1 < s.push([n, r, e, t]) || resume(n, r);
          });
        });
      }function resume(e, t) {
        try {
          (r = o[e](t)).value instanceof a ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(s[0][2], r);
        } catch (e) {
          settle(s[0][3], e);
        }var r;
      }function fulfill(e) {
        resume("next", e);
      }function reject(e) {
        resume("throw", e);
      }function settle(e, t) {
        e(t), s.shift(), s.length && resume(s[0][0], s[0][1]);
      }
    };function asyncIterableFromStream(i) {
      return z(this, arguments, function () {
        var t, r, n;return M(this, function (e) {
          switch (e.label) {case 0:
              t = i.getReader(), e.label = 1;case 1:
              e.trys.push([1,, 9, 10]), e.label = 2;case 2:
              return [4, a(t.read())];case 3:
              return n = e.sent(), r = n.done, n = n.value, r ? [4, a(void 0)] : [3, 5];case 4:
              return [2, e.sent()];case 5:
              if (null == n) throw new Error("Assertion Failure: value must not be null nor undefined");return [4, a(n)];case 6:
              return [4, e.sent()];case 7:
              return e.sent(), [3, 2];case 8:
              return [3, 10];case 9:
              return t.releaseLock(), [7];case 10:
              return [2];}
        });
      });
    }function ensureAsyncIterabe(e) {
      return null != e[Symbol.asyncIterator] ? e : asyncIterableFromStream(e);
    }var N = function (e, n, i, o) {
      return new (i = i || Promise)(function (r, t) {
        function fulfilled(e) {
          try {
            step(o.next(e));
          } catch (e) {
            t(e);
          }
        }function rejected(e) {
          try {
            step(o.throw(e));
          } catch (e) {
            t(e);
          }
        }function step(e) {
          var t;e.done ? r(e.value) : ((t = e.value) instanceof i ? t : new i(function (e) {
            e(t);
          })).then(fulfilled, rejected);
        }step((o = o.apply(e, n || [])).next());
      });
    };var j = function (n, i) {
      var o,
          s,
          a,
          e,
          h = { label: 0, sent: function () {
          if (1 & a[0]) throw a[1];return a[1];
        }, trys: [], ops: [] };return e = { next: verb(0), throw: verb(1), return: verb(2) }, "function" == typeof Symbol && (e[Symbol.iterator] = function () {
        return this;
      }), e;function verb(r) {
        return function (e) {
          var t = [r, e];if (o) throw new TypeError("Generator is already executing.");for (; h;) try {
            if (o = 1, s && (a = 2 & t[0] ? s.return : t[0] ? s.throw || ((a = s.return) && a.call(s), 0) : s.next) && !(a = a.call(s, t[1])).done) return a;switch (s = 0, (t = a ? [2 & t[0], a.value] : t)[0]) {case 0:case 1:
                a = t;break;case 4:
                return h.label++, { value: t[1], done: !1 };case 5:
                h.label++, s = t[1], t = [0];continue;case 7:
                t = h.ops.pop(), h.trys.pop();continue;default:
                if (!(a = 0 < (a = h.trys).length && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                  h = 0;continue;
                }if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                  h.label = t[1];break;
                }if (6 === t[0] && h.label < a[1]) {
                  h.label = a[1], a = t;break;
                }if (a && h.label < a[2]) {
                  h.label = a[2], h.ops.push(t);break;
                }a[2] && h.ops.pop(), h.trys.pop();continue;}t = i.call(n, h);
          } catch (e) {
            t = [6, e], s = 0;
          } finally {
            o = a = 0;
          }if (5 & t[0]) throw t[1];return { value: t[0] ? t[1] : void 0, done: !0 };
        };
      }
    };function decodeAsync(r, n) {
      return void 0 === n && (n = L), N(this, void 0, void 0, function () {
        var t;return j(this, function (e) {
          return t = ensureAsyncIterabe(r), [2, new P(n.extensionCodec, n.context, n.maxStrLength, n.maxBinLength, n.maxArrayLength, n.maxMapLength, n.maxExtLength).decodeSingleAsync(t)];
        });
      });
    }function decodeArrayStream(e, t) {
      void 0 === t && (t = L);e = ensureAsyncIterabe(e);return new P(t.extensionCodec, t.context, t.maxStrLength, t.maxBinLength, t.maxArrayLength, t.maxMapLength, t.maxExtLength).decodeArrayStream(e);
    }function decodeStream(e, t) {
      void 0 === t && (t = L);e = ensureAsyncIterabe(e);return new P(t.extensionCodec, t.context, t.maxStrLength, t.maxBinLength, t.maxArrayLength, t.maxMapLength, t.maxExtLength).decodeStream(e);
    }
  }], n = {}, __webpack_require__.m = r, __webpack_require__.c = n, __webpack_require__.d = function (e, t, r) {
    __webpack_require__.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
  }, __webpack_require__.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
  }, __webpack_require__.t = function (t, e) {
    if (1 & e && (t = __webpack_require__(t)), 8 & e) return t;if (4 & e && "object" == typeof t && t && t.__esModule) return t;var r = Object.create(null);if (__webpack_require__.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var n in t) __webpack_require__.d(r, n, function (e) {
      return t[e];
    }.bind(null, n));return r;
  }, __webpack_require__.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };return __webpack_require__.d(t, "a", t), t;
  }, __webpack_require__.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 0);function __webpack_require__(e) {
    if (n[e]) return n[e].exports;var t = n[e] = { i: e, l: !1, exports: {} };return r[e].call(t.exports, t, t.exports, __webpack_require__), t.l = !0, t.exports;
  }var r, n;
});var ByteUtils = function () {
  function ByteUtils() {}return ByteUtils.prototype.bytesAvailable = function () {
    return this.length - this.cursor;
  }, ByteUtils.prototype.getUint8 = function () {
    return this.input[this.cursor++];
  }, ByteUtils.prototype.getUint16 = function () {
    var e = this.view.getUint16(this.cursor, this.littleEndian);return this.cursor += 2, e;
  }, ByteUtils.prototype.getUint32 = function () {
    var e = this.view.getUint32(this.cursor, this.littleEndian);return this.cursor += 4, e;
  }, ByteUtils.prototype.getUTF = function (e) {
    var t = new Array(e);for (var r = 0; r < e; ++r) t[r] = String.fromCharCode(this.input[this.cursor++]);return t.join("");
  }, ByteUtils.prototype.getBytes = function (e) {
    var t = new Uint8Array(this.input.buffer, this.input.byteOffset + this.cursor, e);return this.cursor += e, t;
  }, ByteUtils.prototype.skip = function (e) {
    this.cursor += e;
  }, ByteUtils.prototype.open = function (e, t) {
    void 0 === t && (t = !1), this.cursor = 0, this.length = e.byteLength, this.input = e, this.view = new DataView(e.buffer), this.littleEndian = t;
  }, ByteUtils.prototype.close = function () {
    this.input = null, this.view = null;
  }, ByteUtils;
}();var DNLMarkerError = function () {
  function DNLMarkerError(e, t) {
    this.message = e, this.scanLines = t;
  }return (DNLMarkerError.prototype = new Error()).name = "DNLMarkerError", DNLMarkerError.constructor = DNLMarkerError;
}();var EOIMarkerError = function () {
  function EOIMarkerError(e) {
    this.message = e;
  }return (EOIMarkerError.prototype = new Error()).name = "EOIMarkerError", EOIMarkerError.constructor = EOIMarkerError;
}();var JpegImage = function () {
  var Z = new Uint8Array([0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26, 33, 40, 48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57, 50, 43, 36, 29, 22, 15, 23, 30, 37, 44, 51, 58, 59, 52, 45, 38, 31, 39, 46, 53, 60, 61, 54, 47, 55, 62, 63]);var B = 4017;var P = 799;var L = 3406;var M = 2276;var z = 1567;var N = 3784;var j = 5793;var F = 2896;function JpegImage(e) {
    var e = void 0 === e ? {} : e,
        t = e.decodeTransform,
        e = e.colorTransform,
        e = void 0 === e ? -1 : e;this._decodeTransform = void 0 === t ? null : t, this._colorTransform = e;
  }function getBlockBufferOffset(e, t, r) {
    return 64 * ((e.blocksPerLine + 1) * t + r);
  }function decodeScan(r, n, s, e, a, u, l, d, h, p) {
    void 0 === p && (p = !1);var v = s.mcusPerLine;var y = s.progressive;var b = n,
        w = 0,
        g = 0;function readBit() {
      if (0 < g) return w >> --g & 1;if (255 === (w = r[n++])) {
        var e = r[n++];if (e) {
          if (220 === e && p) {
            n += 2;var t = r[n++] << 8 | r[n++];if (0 < t && t !== s.scanLines) throw new DNLMarkerError("Found DNL marker (0xFFDC) while parsing scan data", t);
          } else if (217 === e) throw new EOIMarkerError("Found EOI marker (0xFFD9) while parsing scan data");throw new Error("unexpected marker " + (w << 8 | e).toString(16));
        }
      }return w >>> (g = 7);
    }function decodeHuffman(e) {
      var t = e;for (;;) {
        if ("number" == typeof (t = t[readBit()])) return t;if ("object" != typeof t) throw new Error("invalid huffman sequence");
      }
    }function receive(e) {
      var t = 0;for (; 0 < e;) t = t << 1 | readBit(), e--;return t;
    }function receiveAndExtend(e) {
      if (1 === e) return 1 === readBit() ? 1 : -1;var t = receive(e);return 1 << e - 1 <= t ? t : t + (-1 << e) + 1;
    }var c = 0;var m,
        f = 0;var U = e.length;var k, t, x, E, i;var T;T = y ? 0 === u ? 0 === d ? function (e, t) {
      var r = decodeHuffman(e.huffmanTableDC);r = 0 === r ? 0 : receiveAndExtend(r) << h, e.blockData[t] = e.pred += r;
    } : function (e, t) {
      e.blockData[t] |= readBit() << h;
    } : 0 === d ? function (e, t) {
      if (0 < c) c--;else {
        var r = u,
            n = l;for (; r <= n;) {
          var i = decodeHuffman(e.huffmanTableAC);var o = 15 & i,
              i = i >> 4;if (0 != o) {
            var s = Z[r += i];e.blockData[t + s] = receiveAndExtend(o) * (1 << h), r++;
          } else {
            if (i < 15) {
              c = receive(i) + (1 << i) - 1;break;
            }r += 16;
          }
        }
      }
    } : function (e, t) {
      var r = u;var n = l;var i = 0;var o;for (; r <= n;) {
        var s = t + Z[r];var a = e.blockData[s] < 0 ? -1 : 1;switch (f) {case 0:
            if (i = (o = decodeHuffman(e.huffmanTableAC)) >> 4, 0 == (o = 15 & o)) f = i < 15 ? (c = receive(i) + (1 << i), 4) : (i = 16, 1);else {
              if (1 != o) throw new Error("invalid ACn encoding");m = receiveAndExtend(o), f = i ? 2 : 3;
            }continue;case 1:case 2:
            e.blockData[s] ? e.blockData[s] += a * (readBit() << h) : 0 === --i && (f = 2 === f ? 3 : 0);break;case 3:
            e.blockData[s] ? e.blockData[s] += a * (readBit() << h) : (e.blockData[s] = m << h, f = 0);break;case 4:
            e.blockData[s] && (e.blockData[s] += a * (readBit() << h));}r++;
      }4 === f && 0 === --c && (f = 0);
    } : function (e, t) {
      var r = decodeHuffman(e.huffmanTableDC);r = 0 === r ? 0 : receiveAndExtend(r), e.blockData[t] = e.pred += r;var n = 1;for (; n < 64;) {
        var i = decodeHuffman(e.huffmanTableAC);var o = 15 & i,
            i = i >> 4;if (0 != o) {
          var s = Z[n += i];e.blockData[t + s] = receiveAndExtend(o), n++;
        } else {
          if (i < 15) break;n += 16;
        }
      }
    };var o,
        A = 0;var S;var _, D;for (S = 1 === U ? e[0].blocksPerLine * e[0].blocksPerColumn : v * s.mcusPerColumn; A < S;) {
      var C = a ? Math.min(S - A, a) : S;for (t = 0; t < U; t++) e[t].pred = 0;if (c = 0, 1 === U) for (k = e[0], i = 0; i < C; i++) T(z = k, getBlockBufferOffset(z, (N = A) / z.blocksPerLine | 0, N % z.blocksPerLine)), A++;else for (i = 0; i < C; i++) {
        for (t = 0; t < U; t++) for (_ = (k = e[t]).h, D = k.v, x = 0; x < D; x++) for (E = 0; E < _; E++) L = x, M = E, T(B = k, getBlockBufferOffset(B, ((P = A) / v | 0) * B.v + L, P % v * B.h + M));A++;
      }g = 0, (o = findNextFileMarker(r, n)) && o.invalid && (warn("decodeScan - unexpected MCU data, current marker is: " + o.invalid), n = o.offset);var I = o && o.marker;if (!I || I <= 65280) throw new Error("marker was not found");if (!(65488 <= I && I <= 65495)) break;n += 2;
    }var B, P, L, M;var z, N;return (o = findNextFileMarker(r, n)) && o.invalid && (warn("decodeScan - unexpected Scan data, current marker is: " + o.invalid), n = o.offset), n - b;
  }function buildComponentData(f, u) {
    var l = u.blocksPerLine;var d = u.blocksPerColumn;var p = new Int16Array(64);for (var v = 0; v < d; v++) for (var y = 0; y < l; y++) {
      var b = getBlockBufferOffset(u, v, y);c = h = a = I = C = D = _ = S = A = T = E = x = s = o = k = i = n = U = m = r = g = t = e = w = void 0;var w = u;var e = b;var t = p;var g = w.quantizationTable,
          r = w.blockData;var m, U, n, i, k, o, s, x;var E, T, A, S, _, D, C, I;var a;if (!g) throw new Error("missing required Quantization Table.");for (var h = 0; h < 64; h += 8) E = r[e + h], T = r[e + h + 1], A = r[e + h + 2], S = r[e + h + 3], _ = r[e + h + 4], D = r[e + h + 5], C = r[e + h + 6], I = r[e + h + 7], E *= g[h], 0 != (T | A | S | _ | D | C | I) ? (T *= g[h + 1], A *= g[h + 2], S *= g[h + 3], _ *= g[h + 4], D *= g[h + 5], C *= g[h + 6], I *= g[h + 7], U = (m = (m = j * E + 128 >> 8) + (U = j * _ + 128 >> 8) + 1 >> 1) - U, a = (n = A) * N + (i = C) * z + 128 >> 8, n = n * z - i * N + 128 >> 8, s = (k = (k = F * (T - I) + 128 >> 8) + (s = D << 4) + 1 >> 1) - s, o = (x = (x = F * (T + I) + 128 >> 8) + (o = S << 4) + 1 >> 1) - o, i = (m = m + (i = a) + 1 >> 1) - i, n = (U = U + n + 1 >> 1) - n, a = k * M + x * L + 2048 >> 12, k = k * L - x * M + 2048 >> 12, x = a, a = o * P + s * B + 2048 >> 12, o = o * B - s * P + 2048 >> 12, s = a, t[h] = m + x, t[h + 7] = m - x, t[h + 1] = U + s, t[h + 6] = U - s, t[h + 2] = n + o, t[h + 5] = n - o, t[h + 3] = i + k, t[h + 4] = i - k) : (t[h] = a = j * E + 512 >> 10, t[h + 1] = a, t[h + 2] = a, t[h + 3] = a, t[h + 4] = a, t[h + 5] = a, t[h + 6] = a, t[h + 7] = a);for (var c = 0; c < 8; ++c) E = t[c], 0 != ((T = t[c + 8]) | (A = t[c + 16]) | (S = t[c + 24]) | (_ = t[c + 32]) | (D = t[c + 40]) | (C = t[c + 48]) | (I = t[c + 56])) ? (a = (n = A) * N + (i = C) * z + 2048 >> 12, n = n * z - i * N + 2048 >> 12, i = a, s = (k = (k = F * (T - I) + 2048 >> 12) + (s = D) + 1 >> 1) - s, o = (x = (x = F * (T + I) + 2048 >> 12) + (o = S) + 1 >> 1) - o, a = k * M + x * L + 2048 >> 12, k = k * L - x * M + 2048 >> 12, x = a, a = o * P + s * B + 2048 >> 12, o = o * B - s * P + 2048 >> 12, T = (T = (U = (U = (m = 4112 + ((m = j * E + 2048 >> 12) + (U = j * _ + 2048 >> 12) + 1 >> 1)) - U) + n + 1 >> 1) + (s = a)) < 16 ? 0 : 4080 <= T ? 255 : T >> 4, A = (A = (n = U - n) + o) < 16 ? 0 : 4080 <= A ? 255 : A >> 4, S = (S = (i = (m = m + i + 1 >> 1) - i) + k) < 16 ? 0 : 4080 <= S ? 255 : S >> 4, _ = (_ = i - k) < 16 ? 0 : 4080 <= _ ? 255 : _ >> 4, D = (D = n - o) < 16 ? 0 : 4080 <= D ? 255 : D >> 4, C = (C = U - s) < 16 ? 0 : 4080 <= C ? 255 : C >> 4, I = (I = m - x) < 16 ? 0 : 4080 <= I ? 255 : I >> 4, r[e + c] = E = (E = m + x) < 16 ? 0 : 4080 <= E ? 255 : E >> 4, r[e + c + 8] = T, r[e + c + 16] = A, r[e + c + 24] = S, r[e + c + 32] = _, r[e + c + 40] = D, r[e + c + 48] = C, r[e + c + 56] = I) : (r[e + c] = a = (a = j * E + 8192 >> 14) < -2040 ? 0 : 2024 <= a ? 255 : a + 2056 >> 4, r[e + c + 8] = a, r[e + c + 16] = a, r[e + c + 24] = a, r[e + c + 32] = a, r[e + c + 40] = a, r[e + c + 48] = a, r[e + c + 56] = a);
    }return u.blockData;
  }function findNextFileMarker(t, e, r) {
    function peekUint16(e) {
      return t[e] << 8 | t[e + 1];
    }var n = t.length - 1;var i = (r = void 0 === r ? e : r) < e ? r : e;if (n <= e) return null;r = peekUint16(e);if (65472 <= r && r <= 65534) return { invalid: null, marker: r, offset: e };var o = peekUint16(i);for (; !(65472 <= o && o <= 65534);) {
      if (++i >= n) return null;o = peekUint16(i);
    }return { invalid: r.toString(16), marker: o, offset: i };
  }return JpegImage.prototype = { width: 0, height: 0, parse: function (t, c) {
      var c = (void 0 === c ? {} : c).dnlScanLines,
          f = void 0 === c ? null : c;function readUint16() {
        var e = t[r] << 8 | t[r + 1];return r += 2, e;
      }var r = 0;var u = null;var l = null;var e, d;var p = 0;var v = [];var y = [],
          b = [];var n = readUint16();if (65496 !== n) throw new Error("SOI not found");n = readUint16();e: for (; 65497 !== n;) {
        var i, o;switch (n) {case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:
            W = h = void 0, h = readUint16(), (W = findNextFileMarker(t, h = r + h - 2, r)) && W.invalid && (warn("readDataBlock - incorrect length, current marker is: " + W.invalid), h = W.offset), W = t.subarray(r, h), r += W.length;h = W;65504 === n && 74 === h[0] && 70 === h[1] && 73 === h[2] && 70 === h[3] && 0 === h[4] && (u = { version: { major: h[5], minor: h[6] }, densityUnits: h[7], xDensity: h[8] << 8 | h[9], yDensity: h[10] << 8 | h[11], thumbWidth: h[12], thumbHeight: h[13], thumbData: h.subarray(14, 14 + 3 * h[12] * h[13]) }), 65518 === n && 65 === h[0] && 100 === h[1] && 111 === h[2] && 98 === h[3] && 101 === h[4] && (l = { version: h[5] << 8 | h[6], flags0: h[7] << 8 | h[8], flags1: h[9] << 8 | h[10], transformCode: h[11] });break;case 65499:
            var w = readUint16() + r - 2;for (; r < w;) {
              var g = t[r++];var m = new Uint16Array(64);if (g >> 4 == 0) for (o = 0; o < 64; o++) m[Z[o]] = t[r++];else {
                if (g >> 4 != 1) throw new Error("DQT - invalid table spec");for (o = 0; o < 64; o++) m[Z[o]] = readUint16();
              }v[15 & g] = m;
            }break;case 65472:case 65473:case 65474:
            if (e) throw new Error("Only single frame JPEGs supported");readUint16(), (e = {}).extended = 65473 === n, e.progressive = 65474 === n, e.precision = t[r++];W = readUint16();e.scanLines = f || W, e.samplesPerLine = readUint16(), e.components = [], e.componentIds = {};var U,
                k = t[r++];var x = 0,
                E = 0;for (i = 0; i < k; i++) {
              U = t[r];var T = t[r + 1] >> 4;var A = 15 & t[r + 1];x < T && (x = T), E < A && (E = A);var S = t[r + 2];T = e.components.push({ h: T, v: A, quantizationId: S, quantizationTable: null }), e.componentIds[U] = T - 1, r += 3;
            }e.maxH = x, e.maxV = E, L = P = B = I = C = D = _ = s = void 0;var s = e;var _ = Math.ceil(s.samplesPerLine / 8 / s.maxH);var D = Math.ceil(s.scanLines / 8 / s.maxV);for (var C = 0; C < s.components.length; C++) {
              a = s.components[C];var I = Math.ceil(Math.ceil(s.samplesPerLine / 8) * a.h / s.maxH);var B = Math.ceil(Math.ceil(s.scanLines / 8) * a.v / s.maxV);var P = _ * a.h;var L = D * a.v;a.blockData = new Int16Array(64 * L * (1 + P)), a.blocksPerLine = I, a.blocksPerColumn = B;
            }s.mcusPerLine = _, s.mcusPerColumn = D;break;case 65476:
            var M = readUint16();for (i = 2; i < M;) {
              var z = t[r++];var N = new Uint8Array(16);var j = 0;for (o = 0; o < 16; o++, r++) j += N[o] = t[r];var F = new Uint8Array(j);for (o = 0; o < j; o++, r++) F[o] = t[r];i += 17 + j, (z >> 4 == 0 ? b : y)[15 & z] = function (e, t) {
                var r,
                    n,
                    i = 0,
                    o = [],
                    s = 16;for (; 0 < s && !e[s - 1];) s--;o.push({ children: [], index: 0 });var a,
                    h = o[0];for (r = 0; r < s; r++) {
                  for (n = 0; n < e[r]; n++) {
                    for ((h = o.pop()).children[h.index] = t[i]; 0 < h.index;) h = o.pop();for (h.index++, o.push(h); o.length <= r;) o.push(a = { children: [], index: 0 }), h.children[h.index] = a.children, h = a;i++;
                  }r + 1 < s && (o.push(a = { children: [], index: 0 }), h.children[h.index] = a.children, h = a);
                }return o[0].children;
              }(N, F);
            }break;case 65501:
            readUint16(), d = readUint16();break;case 65498:
            h = 1 == ++p && !f;readUint16();var O = t[r++];var a,
                K = [];for (i = 0; i < O; i++) {
              var q = e.componentIds[t[r++]];a = e.components[q];q = t[r++];a.huffmanTableDC = b[q >> 4], a.huffmanTableAC = y[15 & q], K.push(a);
            }var V = t[r++];var J = t[r++];var H = t[r++];try {
              var R = decodeScan(t, r, e, K, d, V, J, H >> 4, 15 & H, h);r += R;
            } catch (e) {
              if (e instanceof DNLMarkerError) return warn(e.message + " -- attempting to re-parse the JPEG image."), this.parse(t, { dnlScanLines: e.scanLines });if (e instanceof EOIMarkerError) {
                warn(e.message + " -- ignoring the rest of the image data.");break e;
              }throw e;
            }break;case 65500:
            r += 4;break;case 65535:
            255 !== t[r] && r--;break;default:
            if (255 === t[r - 3] && 192 <= t[r - 2] && t[r - 2] <= 254) {
              r -= 3;break;
            }V = findNextFileMarker(t, r - 2);if (V && V.invalid) {
              warn("JpegImage.parse - unexpected data, current marker is: " + V.invalid), r = V.offset;break;
            }throw new Error("unknown marker " + n.toString(16));}n = readUint16();
      }var h, W;for (this.width = e.samplesPerLine, this.height = e.scanLines, this.jfif = u, this.adobe = l, this.components = [], i = 0; i < e.components.length; i++) {
        var Y = v[(a = e.components[i]).quantizationId];Y && (a.quantizationTable = Y), this.components.push({ output: buildComponentData(0, a), scaleX: a.h / e.maxH, scaleY: a.v / e.maxV, blocksPerLine: a.blocksPerLine, blocksPerColumn: a.blocksPerColumn });
      }this.numComponents = this.components.length;
    }, _getLinearizedBlockData: function (e, f, u, l, d) {
      void 0 === u && (u = !1), void 0 === l && (l = 0), void 0 === d && (d = null);var p = this.width / e,
          v = this.height / f;var t, y, b, w;var r, n, i, o, s;var g;var a = 0;var m;var h = this.components.length;var U = e * f * h;3 == h && u && (U = e * f * 4);var k = new ArrayBuffer(U + l);var c = new Uint8ClampedArray(k, l);var x = new Uint32Array(e);var E = 4294967288;if (3 == h && u) {
        for (i = 0; i < h; i++) {
          for (y = (t = this.components[i]).scaleX * p, b = t.scaleY * v, a = i, m = t.output, w = t.blocksPerLine + 1 << 3, r = 0; r < e; r++) x[r] = ((o = 0 | r * y) & E) << 3 | 7 & o;for (n = 0; n < f; n++) for (g = w * ((o = 0 | n * b) & E) | (7 & o) << 3, r = 0; r < e; r++) c[a] = m[g + x[r]], a += 4;
        }if (a = 3, null != d) {
          var T = 0;for (n = 0; n < f; n++) for (r = 0; r < e; r++) c[a] = d[T++], a += 4;
        } else for (n = 0; n < f; n++) for (r = 0; r < e; r++) c[a] = 255, a += 4;
      } else for (i = 0; i < h; i++) {
        for (y = (t = this.components[i]).scaleX * p, b = t.scaleY * v, a = i, m = t.output, w = t.blocksPerLine + 1 << 3, r = 0; r < e; r++) x[r] = ((o = 0 | r * y) & E) << 3 | 7 & o;for (n = 0; n < f; n++) for (g = w * ((o = 0 | n * b) & E) | (7 & o) << 3, r = 0; r < e; r++) c[a] = m[g + x[r]], a += h;
      }var A = this._decodeTransform;if (A = 4 !== h || A ? A : new Int32Array([-256, 255, -256, 255, -256, 255, -256, 255])) if (3 == h && u) for (i = 0; i < U;) {
        for (s = o = 0; o < h; o++, i++, s += 2) c[i] = (c[i] * A[s] >> 8) + A[s + 1];i++;
      } else for (i = 0; i < U;) for (s = o = 0; o < h; o++, i++, s += 2) c[i] = (c[i] * A[s] >> 8) + A[s + 1];return c;
    }, get _isColorConversionNeeded() {
      return this.adobe ? !!this.adobe.transformCode : 3 === this.numComponents ? 0 !== this._colorTransform : 1 === this._colorTransform;
    }, _convertYccToRgb: function (e, t) {
      var r, n, i;var o, s;if (t = void 0 === t ? !1 : t) for (o = 0, s = e.length; o < s; o += 3) r = e[o], n = e[o + 1], i = e[o + 2], e[o] = r - 179.456 + 1.402 * i, e[o + 1] = r + 135.459 - .344 * n - .714 * i, e[o + 2] = r - 226.816 + 1.772 * n, o++;else for (o = 0, s = e.length; o < s; o += 3) r = e[o], n = e[o + 1], i = e[o + 2], e[o] = r - 179.456 + 1.402 * i, e[o + 1] = r + 135.459 - .344 * n - .714 * i, e[o + 2] = r - 226.816 + 1.772 * n;return e;
    }, _convertYcckToRgb: function (e) {
      var t, r, n, i;var o = 0;for (var s = 0, a = e.length; s < a; s += 4) t = e[s], r = e[s + 1], n = e[s + 2], i = e[s + 3], e[o++] = r * (-660635669420364e-19 * r + .000437130475926232 * n - 54080610064599e-18 * t + .00048449797120281 * i - .154362151871126) - 122.67195406894 + n * (-.000957964378445773 * n + .000817076911346625 * t - .00477271405408747 * i + 1.53380253221734) + t * (.000961250184130688 * t - .00266257332283933 * i + .48357088451265) + i * (-.000336197177618394 * i + .484791561490776), e[o++] = 107.268039397724 + r * (219927104525741e-19 * r - .000640992018297945 * n + .000659397001245577 * t + .000426105652938837 * i - .176491792462875) + n * (-.000778269941513683 * n + .00130872261408275 * t + .000770482631801132 * i - .151051492775562) + t * (.00126935368114843 * t - .00265090189010898 * i + .25802910206845) + i * (-.000318913117588328 * i - .213742400323665), e[o++] = r * (-.000570115196973677 * r - 263409051004589e-19 * n + .0020741088115012 * t - .00288260236853442 * i + .814272968359295) - 20.810012546947 + n * (-153496057440975e-19 * n - .000132689043961446 * t + .000560833691242812 * i - .195152027534049) + t * (.00174418132927582 * t - .00255243321439347 * i + .116935020465145) + i * (-.000343531996510555 * i + .24165260232407);return e.subarray(0, o);
    }, _convertYcckToCmyk: function (e) {
      var t, r, n;for (var i = 0, o = e.length; i < o; i += 4) t = e[i], r = e[i + 1], n = e[i + 2], e[i] = 434.456 - t - 1.402 * n, e[i + 1] = 119.541 - t + .344 * r + .714 * n, e[i + 2] = 481.816 - t - 1.772 * r;return e;
    }, _convertCmykToRgb: function (e) {
      var t, r, n, i;var o = 0;var s = 1 / 255;for (var a = 0, h = e.length; a < h; a += 4) t = e[a] * s, r = e[a + 1] * s, n = e[a + 2] * s, i = e[a + 3] * s, e[o++] = 255 + t * (-4.387332384609988 * t + 54.48615194189176 * r + 18.82290502165302 * n + 212.25662451639585 * i - 285.2331026137004) + r * (1.7149763477362134 * r - 5.6096736904047315 * n - 17.873870861415444 * i - 5.497006427196366) + n * (-2.5217340131683033 * n - 21.248923337353073 * i + 17.5119270841813) - i * (21.86122147463605 * i + 189.48180835922747), e[o++] = 255 + t * (8.841041422036149 * t + 60.118027045597366 * r + 6.871425592049007 * n + 31.159100130055922 * i - 79.2970844816548) + r * (-15.310361306967817 * r + 17.575251261109482 * n + 131.35250912493976 * i - 190.9453302588951) + n * (4.444339102852739 * n + 9.8632861493405 * i - 24.86741582555878) - i * (20.737325471181034 * i + 187.80453709719578), e[o++] = 255 + t * (.8842522430003296 * t + 8.078677503112928 * r + 30.89978309703729 * n - .23883238689178934 * i - 14.183576799673286) + r * (10.49593273432072 * r + 63.02378494754052 * n + 50.606957656360734 * i - 112.23884253719248) + n * (.03296041114873217 * n + 115.60384449646641 * i - 193.58209356861505) - i * (22.33816807309886 * i + 180.12613974708367);return e.subarray(0, o);
    }, getData: function (f, u, e, t, r, n) {
      if (void 0 === e && (e = !1), void 0 === t && (t = !1), void 0 === r && (r = 0), void 0 === n && (n = null), 4 < this.numComponents) throw new Error("Unsupported color mode");var i = this._getLinearizedBlockData(f, u, t, r, n);if (1 === this.numComponents && e) {
        var o = i.length;var s = new Uint8ClampedArray(3 * o);var a = 0;for (var h = 0; h < o; h++) {
          var c = i[h];s[a++] = c, s[a++] = c, s[a++] = c;
        }return s;
      }if (3 === this.numComponents && this._isColorConversionNeeded) return this._convertYccToRgb(i, t);if (4 === this.numComponents) {
        if (this._isColorConversionNeeded) return e ? this._convertYcckToRgb(i) : this._convertYcckToCmyk(i);if (e) return this._convertCmykToRgb(i);
      }return i;
    } }, JpegImage;
}();var PngJob = function () {
  function PngJob() {
    this.segments = [];
  }return PngJob.create = function () {
    var e;return null != PngJob.p_sJob ? (e = this.p_sJob, this.p_sJob = this.p_sJob.p_next) : e = new PngJob(), e;
  }, PngJob.free = function (e) {
    e.p_next = this.p_sJob, (PngJob.p_sJob = e).paleT = null, e.segments.length = 0, e.transT = null;
  }, PngJob;
}();var CstPngTools = function () {
  function CstPngTools() {}return CstPngTools.init = function () {
    CstPngTools.p_setHands = { IHDR: CstPngTools.p_IHDR, PLTE: CstPngTools.p_PLTE, IDAT: CstPngTools.p_IDAT, tRNS: CstPngTools.p_TRNS };
  }, CstPngTools.decode = function (f) {
    var e = PngJob.create();var t = new ByteUtils();for (t.open(f), t.skip(8); 0 < t.bytesAvailable();) {
      var u = t.getUint32();var l = t.getUTF(4);l = CstPngTools.p_setHands[l];null != l ? l(e, t, u) : t.skip(u);t.getUint32();
    }t.close();var r = CstPngTools.p_decodePix(e);if (null == r) return null;var n = 0;var i = 0;var o = e.w;var s = e.h;f = new ArrayBuffer(o * s * CstPngTools.p_Pix(e) + 8);var a = new Uint8Array(f, 8);var d = new DataView(f, 0, 8);switch (d.setUint32(0, o), d.setUint32(4, s), e.colorT) {case 3:
        CstPngTools.p_byPale(e, r, a);break;case 2:
        switch (e.bits) {case 8:
            for (var h = 0; h < s; ++h) {
              i++;for (var c = 0; c < o; ++c) a[n++] = r[i++], a[n++] = r[i++], a[n++] = r[i++];
            }break;case 16:
            for (h = 0; h < s; ++h) {
              i++;for (c = 0; c < o; ++c) a[n++] = (r[i] << 8 | r[i + 1]) / 65535 * 255, i += 2, a[n++] = (r[i] << 8 | r[i + 1]) / 65535 * 255, i += 2, a[n++] = (r[i] << 8 | r[i + 1]) / 65535 * 255, i += 2;
            }}break;case 6:
        switch (e.bits) {case 8:
            for (h = 0; h < s; ++h) {
              i++;for (c = 0; c < o; ++c) a[n++] = r[i++], a[n++] = r[i++], a[n++] = r[i++], a[n++] = r[i++];
            }break;case 16:
            for (h = 0; h < s; ++h) {
              i++;for (c = 0; c < o; ++c) a[n++] = (r[i] << 8 | r[i + 1]) / 65535 * 255, i += 2, a[n++] = (r[i] << 8 | r[i + 1]) / 65535 * 255, i += 2, a[n++] = (r[i] << 8 | r[i + 1]) / 65535 * 255, i += 2, a[n++] = (r[i] << 8 | r[i + 1]) / 65535 * 255, i += 2;
            }}break;default:
        console.error("\u672a\u652f\u6301\u7684\u7c7b\u578b\uff1a", e.colorT, e.bits);}return PngJob.free(e), f;
  }, CstPngTools.p_IHDR = function (e, t, r) {
    e.w = t.getUint32(), e.h = t.getUint32(), e.bits = t.getUint8(), e.colorT = t.getUint8(), e.compressT = t.getUint8(), e.filterT = t.getUint8(), e.interT = t.getUint8();
  }, CstPngTools.p_PLTE = function (e, t, r) {
    e.paleT = t.getBytes(r);
  }, CstPngTools.p_IDAT = function (e, t, r) {
    e.segments.push(t.getBytes(r));
  }, CstPngTools.p_TRNS = function (e, t, r) {
    e.transT = t.getBytes(r);
  }, CstPngTools.p_Pale = function (e) {
    var t = e.paleT;var r = e.transT;var n = t.length;var i = new Uint8Array(n / 3 * 4);var o = 0;var s = 0;var a = r.byteLength;var h = 0;for (; o < n;) i[s++] = t[o++], i[s++] = t[o++], i[s++] = t[o++], i[s++] = h < a ? r[h++] : 255;return i;
  }, CstPngTools.p_mergeSeg = function (e) {
    var t = 0;for (var r = 0, n = e; r < n.length; r++) t += (h = n[r]).byteLength;var i = new Uint8Array(t);var o = 0;for (var s = 0, a = e; s < a.length; s++) {
      var h = a[s];i.set(h, o), o += h.length;
    }return new Zlib.Inflate(i).decompress();
  }, CstPngTools.p_Pix = function (e) {
    var t = 3;return 4 & e.colorT && (t = 4), t = 3 == e.colorT && e.transT ? 4 : t;
  }, CstPngTools.p_Bytes = function (e) {
    var t = 1;switch (e.colorT) {case 2:
        t = 3;break;case 4:
        t = 2;break;case 6:
        t = 4;}return 7 + t * e.bits >> 3;
  }, CstPngTools.p_decodePix = function (e) {
    return 0 == e.interT ? this.p_decodeInterT(e) : null;
  }, CstPngTools.p_decodeInterT = function (f) {
    var e = CstPngTools.p_mergeSeg(f.segments);var u = e.byteLength;var l = f.h;var t = CstPngTools.p_Bytes(f);var d = Math.floor((u - l) / l);var p = d + 1;var r = 0;var n = 0;var i = 0,
        o = 0,
        v = 0,
        s = 0,
        a = 0,
        h = 0,
        c = 0;for (; n < u;) switch (e[n++]) {case 0:
        n += d;break;case 1:
        for (n += t, r = t; r < d; ++r, ++n) e[n] = (e[n] + e[n - t]) % 256;break;case 2:
        if (1 != n) for (r = 0; r < d; ++r, ++n) e[n] = (e[n] + e[n - p]) % 256;break;case 3:
        if (1 == n) for (n += t, r = t; r < d; ++r, ++n) e[n] = (e[n] + (e[n - t] >> 1)) % 256;else {
          for (r = 0; r < t; ++r, ++n) e[n] = (e[n] + (e[n - p] >> 1)) % 256;for (r = t; r < d; ++r, ++n) e[n] = (e[n] + (e[n - t] + e[n - p] >> 1)) % 256;
        }break;case 4:
        if (1 == t) {
          if (1 == n) for (i = e[n++], r = 1; r < d; ++r, ++n) i = e[n] = (e[n] + (0 < i ? i : 0)) % 256;else for ((a = s = o = e[n - p]) < 0 && (a = -a), (c = s) < 0 && (c = -c), i = e[n] = e[n] + (!(s <= 0) && 0 <= c ? o : 0), n++, r = 1; r < d; ++r, ++n) (a = (s = i + (o = e[n - p]) - (v = e[n - p - 1])) - i) < 0 && (a = -a), (h = s - o) < 0 && (h = -h), (c = s - v) < 0 && (c = -c), i = e[n] = (e[n] + (a <= h && a <= c ? i : h <= c ? o : v)) % 256;
        } else if (1 == n) for (n += t, o = v = 0, r = t; r < d; ++r, ++n) (a = (s = (i = e[n - t]) + o - v) - i) < 0 && (a = -a), (h = s - o) < 0 && (h = -h), (c = s - v) < 0 && (c = -c), e[n] = (e[n] + (a <= h && a <= c ? i : h <= c ? o : v)) % 256;else {
          for (r = 0; r < t; ++r, ++n) (a = (s = (i = 0) + (o = e[n - p]) - (v = 0)) - i) < 0 && (a = -a), (h = s - o) < 0 && (h = -h), (c = s - v) < 0 && (c = -c), e[n] = (e[n] + (a <= h && a <= c ? i : h <= c ? o : v)) % 256;for (r = t; r < d; ++r, ++n) (a = (s = (i = e[n - t]) + (o = e[n - p]) - (v = e[n - p - t])) - i) < 0 && (a = -a), (h = s - o) < 0 && (h = -h), (c = s - v) < 0 && (c = -c), e[n] = (e[n] + (a <= h && a <= c ? i : h <= c ? o : v)) % 256;
        }break;default:
        console.log("\u89e3\u6790\u51fa\u9519\uff1a" + f.w + ", " + f.h + ", " + t), console.log(e.byteLength);}return e;
  }, CstPngTools.p_byPale = function (f, e, t) {
    var r = 0;var n = 0;var i = f.w;var o = f.h;var s = f.paleT;if (null != f.transT) switch (s = CstPngTools.p_Pale(f), f.bits) {case 1:
        for (var a = 0; a < o; ++a) {
          n++;for (var h = 0; h < i; ++h) {
            var c = 4 * (1 & e[n + (h >> 3)]);t[r++] = s[c], t[r++] = s[c + 1], t[r++] = s[c + 2], t[r++] = s[c + 3];
          }n += i + 7 >> 3;
        }break;case 2:
        for (a = 0; a < o; ++a) {
          n++;for (h = 0; h < i; ++h) {
            c = 4 * (3 & e[n + (h >> 2)]);t[r++] = s[c], t[r++] = s[c + 1], t[r++] = s[c + 2], t[r++] = s[c + 3];
          }n += i + 3 >> 2;
        }break;case 4:
        for (a = 0; a < o; ++a) {
          n++;for (h = 0; h < i; ++h) {
            c = 4 * (15 & e[n + (h >> 1)]);t[r++] = s[c], t[r++] = s[c + 1], t[r++] = s[c + 2], t[r++] = s[c + 3];
          }n += i + 1 >> 1;
        }break;case 8:
        for (a = 0; a < o; ++a) {
          n++;for (h = 0; h < i; ++h) {
            c = 4 * e[n++];t[r++] = s[c], t[r++] = s[c + 1], t[r++] = s[c + 2], t[r++] = s[c + 3];
          }
        }} else switch (f.bits) {case 1:
        for (a = 0; a < o; ++a) {
          n++;for (h = 0; h < i; ++h) {
            c = 3 * (1 & e[n + (h >> 3)]);t[r++] = s[c], t[r++] = s[c + 1], t[r++] = s[c + 2];
          }n += i + 7 >> 3;
        }break;case 2:
        for (a = 0; a < o; ++a) {
          n++;for (h = 0; h < i; ++h) {
            c = 3 * (3 & e[n + (h >> 2)]);t[r++] = s[c], t[r++] = s[c + 1], t[r++] = s[c + 2];
          }n += i + 3 >> 2;
        }break;case 4:
        for (a = 0; a < o; ++a) {
          n++;for (h = 0; h < i; ++h) {
            c = 3 * (15 & e[n + (h >> 1)]);t[r++] = s[c], t[r++] = s[c + 1], t[r++] = s[c + 2];
          }n += i + 1 >> 1;
        }break;case 8:
        for (a = 0; a < o; ++a) {
          n++;for (h = 0; h < i; ++h) {
            c = 3 * e[n++];t[r++] = s[c], t[r++] = s[c + 1], t[r++] = s[c + 2];
          }
        }}
  }, CstPngTools.p_setHands = {}, CstPngTools;
}();var DecodeTools = window.DecodeTools = function () {
  function DecodeTools() {}return DecodeTools.init = function () {
    CstPngTools.init();
  }, DecodeTools.decodeBuff = function (t, e) {
    var r;if (e) r = new Zlib.Inflate(new Uint8Array(t)).decompress();else {
      let e = new Zlib.Unzip(new Uint8Array(t));r = e.decompress("res");
    }return r.buffer.slice(r.byteOffset, r.byteLength);
  }, DecodeTools.decodeImage = function (e, t) {
    if (void 0 === t && (t = null), this.isPng(e)) return CstPngTools.decode(e);var r = new JpegImage();r.parse(e);e = r.width;var n = r.height;var i = DecodeTools.p_needAlpha(e, n) || null != t;r = r.getData(e, n, !0, i, 8, t);i = new DataView(r.buffer);return i.setUint32(0, e), i.setUint32(4, n), r.buffer;
  }, DecodeTools.p_needAlpha = function (e, t) {
    return e % 2 != 0 || t % 2 != 0 || 290 == e && 340 == t || 586 == e && 530 == t || 602 == e && 302 == t || 638 == e && 466 == t;
  }, DecodeTools.isPng = function (e) {
    var t = DecodeTools.PngHeader;for (var r = 0; r < 8; ++r) if (e[r] != t[r]) return !1;return !0;
  }, DecodeTools.PngHeader = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]), DecodeTools;
}();window.Number.isSafeInteger = Number.isSafeInteger || function (e) {
  return "number" == typeof e && (Math.round(e) === e || -9007199254740991 === e || 9007199254740991 === e) && -9007199254740991 <= e && e <= 9007199254740991;
};var fillFun = function (e, t, r) {
  if (r = r || this.length, (t = t || 0) < 0 && (t = this.length + t), r < 0 && (r = this.length + r), !(t >= this.length)) {
    for (r > this.length && (r = this.length); t < r;) this[t++] = e;return this;
  }
};var types = [Uint8Array, Uint16Array, Uint32Array, Uint8ClampedArray, Int8Array, Int16Array, Int32Array, Float32Array, Float64Array];for (var _i = 0, types_1 = types; _i < types_1.length; _i++) {
  var t = types_1[_i];t.prototype.fill || (t.prototype.fill = fillFun);
}