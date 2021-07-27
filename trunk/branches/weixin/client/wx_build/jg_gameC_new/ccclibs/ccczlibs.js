"use strict";
!function () {
  var k = void 0,
      o = window;function r(e, t) {
    var r = e.split("."),
        n = o;r[0] in n || !n.execScript || n.execScript("var " + r[0]);for (var i; r.length && (i = r.shift());) r.length || t === k ? n = n[i] || (n[i] = {}) : n[i] = t;
  }var x = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array && "undefined" != typeof DataView;function v(e) {
    var t,
        r,
        n,
        i,
        o,
        s,
        a,
        h,
        c,
        f,
        u = e.length,
        l = 0,
        d = Number.POSITIVE_INFINITY;for (h = 0; h < u; ++h) e[h] > l && (l = e[h]), e[h] < d && (d = e[h]);for (t = 1 << l, r = new (x ? Uint32Array : Array)(t), n = 1, i = 0, o = 2; n <= l;) {
      for (h = 0; h < u; ++h) if (e[h] === n) {
        for (a = i, c = s = 0; c < n; ++c) s = s << 1 | 1 & a, a >>= 1;for (f = n << 16 | h, c = s; c < t; c += o) r[c] = f;++i;
      }++n, i <<= 1, o <<= 1;
    }return [r, l, d];
  }function w(e, t) {
    switch (this.g = [], this.h = 32768, this.d = this.f = this.a = this.l = 0, this.input = x ? new Uint8Array(e) : e, this.m = !1, this.i = A, this.r = !1, t ? (t.index && (this.a = t.index), t.bufferSize && (this.h = t.bufferSize), t.bufferType && (this.i = t.bufferType), t.resize && (this.r = t.resize)) : t = {}, this.i) {case T:
        this.b = 32768, this.c = new (x ? Uint8Array : Array)(32768 + this.h + 258);break;case A:
        this.b = 0, this.c = new (x ? Uint8Array : Array)(this.h), this.e = this.z, this.n = this.v, this.j = this.w;break;default:
        throw Error("invalid inflate mode");}
  }var T = 0,
      A = 1,
      e = T,
      t = A;w.prototype.k = function () {
    for (; !this.m;) {
      var e = C(this, 3);switch (1 & e && (this.m = !0), e >>>= 1) {case 0:
          var t = this.input,
              r = this.a,
              n = this.c,
              i = this.b,
              o = t.length,
              s = k,
              a = n.length,
              h = k;if (this.d = this.f = 0, o <= r + 1) throw Error("invalid uncompressed block header: LEN");if (s = t[r++] | t[r++] << 8, o <= r + 1) throw Error("invalid uncompressed block header: NLEN");if (s === ~(t[r++] | t[r++] << 8)) throw Error("invalid uncompressed block header: length verify");if (r + s > t.length) throw Error("input buffer is broken");switch (this.i) {case T:
              for (; i + s > n.length;) {
                if (s -= h = a - i, x) n.set(t.subarray(r, r + h), i), i += h, r += h;else for (; h--;) n[i++] = t[r++];this.b = i, n = this.e(), i = this.b;
              }break;case A:
              for (; i + s > n.length;) n = this.e({ p: 2 });break;default:
              throw Error("invalid inflate mode");}if (x) n.set(t.subarray(r, r + s), i), i += s, r += s;else for (; s--;) n[i++] = t[r++];this.a = r, this.b = i, this.c = n;break;case 1:
          this.j(_, D);break;case 2:
          for (var c, f, u, l, d = C(this, 5) + 257, p = C(this, 5) + 1, y = C(this, 4) + 4, b = new (x ? Uint8Array : Array)(S.length), w = k, g = k, m = k, U = k, U = 0; U < y; ++U) b[S[U]] = C(this, 3);if (!x) for (U = y, y = b.length; U < y; ++U) b[S[U]] = 0;for (c = v(b), w = new (x ? Uint8Array : Array)(d + p), U = 0, l = d + p; U < l;) switch (u = E(this, c), u) {case 16:
              for (m = 3 + C(this, 2); m--;) w[U++] = g;break;case 17:
              for (m = 3 + C(this, 3); m--;) w[U++] = 0;g = 0;break;case 18:
              for (m = 11 + C(this, 7); m--;) w[U++] = 0;g = 0;break;default:
              g = w[U++] = u;}f = v(x ? w.subarray(0, d) : w.slice(0, d)), o = v(x ? w.subarray(d) : w.slice(d)), this.j(f, o);break;default:
          throw Error("unknown BTYPE: " + e);}
    }return this.n();
  };var n,
      i,
      s = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
      S = x ? new Uint16Array(s) : s,
      s = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258],
      c = x ? new Uint16Array(s) : s,
      s = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0],
      f = x ? new Uint8Array(s) : s,
      s = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577],
      u = x ? new Uint16Array(s) : s,
      s = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
      l = x ? new Uint8Array(s) : s,
      a = new (x ? Uint8Array : Array)(288);for (n = 0, i = a.length; n < i; ++n) a[n] = n <= 143 ? 8 : n <= 255 ? 9 : n <= 279 ? 7 : 8;var h,
      d,
      _ = v(a),
      p = new (x ? Uint8Array : Array)(30);for (h = 0, d = p.length; h < d; ++h) p[h] = 5;var D = v(p);function C(e, t) {
    for (var r, n = e.f, i = e.d, o = e.input, s = e.a, a = o.length; i < t;) {
      if (a <= s) throw Error("input buffer is broken");n |= o[s++] << i, i += 8;
    }return r = n & (1 << t) - 1, e.f = n >>> t, e.d = i - t, e.a = s, r;
  }function E(e, t) {
    for (var r = e.f, n = e.d, i = e.input, o = e.a, s = i.length, a = t[0], h = t[1]; n < h && !(s <= o);) r |= i[o++] << n, n += 8;if (n < (a = (t = a[r & (1 << h) - 1]) >>> 16)) throw Error("invalid code length: " + a);return e.f = r >> a, e.d = n - a, e.a = o, 65535 & t;
  }function W(e, t) {
    var r, n;if (this.input = e, this.a = 0, t ? (t.index && (this.a = t.index), t.verify && (this.A = t.verify)) : t = {}, r = e[this.a++], n = e[this.a++], (15 & r) !== y) throw Error("unsupported compression method");if (this.method = y, 0 != ((r << 8) + n) % 31) throw Error("invalid fcheck flag:" + ((r << 8) + n) % 31);if (32 & n) throw Error("fdict flag is not supported");this.q = new w(e, { index: this.a, bufferSize: t.bufferSize, bufferType: t.bufferType, resize: t.resize });
  }w.prototype.j = function (e, t) {
    var r = this.c,
        n = this.b;this.o = e;for (var i, o, s, a, h = r.length - 258; 256 !== (i = E(this, e));) if (i < 256) h <= n && (this.b = n, r = this.e(), n = this.b), r[n++] = i;else for (a = c[o = i - 257], 0 < f[o] && (a += C(this, f[o])), i = E(this, t), s = u[i], 0 < l[i] && (s += C(this, l[i])), h <= n && (this.b = n, r = this.e(), n = this.b); a--;) r[n] = r[n++ - s];for (; 8 <= this.d;) this.d -= 8, this.a--;this.b = n;
  }, w.prototype.w = function (e, t) {
    var r = this.c,
        n = this.b;this.o = e;for (var i, o, s, a, h = r.length; 256 !== (i = E(this, e));) if (i < 256) h <= n && (h = (r = this.e()).length), r[n++] = i;else for (a = c[o = i - 257], 0 < f[o] && (a += C(this, f[o])), i = E(this, t), s = u[i], 0 < l[i] && (s += C(this, l[i])), h < n + a && (h = (r = this.e()).length); a--;) r[n] = r[n++ - s];for (; 8 <= this.d;) this.d -= 8, this.a--;this.b = n;
  }, w.prototype.e = function () {
    var e,
        t,
        r = new (x ? Uint8Array : Array)(this.b - 32768),
        n = this.b - 32768,
        i = this.c;if (x) r.set(i.subarray(32768, r.length));else for (e = 0, t = r.length; e < t; ++e) r[e] = i[e + 32768];if (this.g.push(r), this.l += r.length, x) i.set(i.subarray(n, 32768 + n));else for (e = 0; e < 32768; ++e) i[e] = i[n + e];return this.b = 32768, i;
  }, w.prototype.z = function (e) {
    var t,
        r = this.input.length / this.a + 1 | 0,
        n = this.input,
        i = this.c;return e && ("number" == typeof e.p && (r = e.p), "number" == typeof e.u && (r += e.u)), r = r < 2 ? (n = (n.length - this.a) / this.o[2] / 2 * 258 | 0) < i.length ? i.length + n : i.length << 1 : i.length * r, x ? (t = new Uint8Array(r)).set(i) : t = i, this.c = t;
  }, w.prototype.n = function () {
    var e,
        t,
        r,
        n,
        i,
        o = 0,
        s = this.c,
        a = this.g,
        h = new (x ? Uint8Array : Array)(this.l + (this.b - 32768));if (0 === a.length) return x ? this.c.subarray(32768, this.b) : this.c.slice(32768, this.b);for (t = 0, r = a.length; t < r; ++t) for (n = 0, i = (e = a[t]).length; n < i; ++n) h[o++] = e[n];for (t = 32768, r = this.b; t < r; ++t) h[o++] = s[t];return this.g = [], this.buffer = h;
  }, w.prototype.v = function () {
    var e,
        t = this.b;return x ? this.r ? (e = new Uint8Array(t)).set(this.c.subarray(0, t)) : e = this.c.subarray(0, t) : (this.c.length > t && (this.c.length = t), e = this.c), this.buffer = e;
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
  };var y = 8;r("Zlib.Inflate", W), r("Zlib.Inflate.prototype.decompress", W.prototype.k);var b,
      g,
      m,
      U,
      I = { ADAPTIVE: t, BLOCK: e };if (Object.keys) b = Object.keys(I);else for (g in b = [], m = 0, I) b[m++] = g;for (m = 0, U = b.length; m < U; ++m) r("Zlib.Inflate.BufferType." + (g = b[m]), I[g]);
}.call(this), function () {
  function l(e) {
    throw e;
  }var k = void 0,
      o = window;function v(e, t) {
    var r = e.split("."),
        n = o;r[0] in n || !n.execScript || n.execScript("var " + r[0]);for (var i; r.length && (i = r.shift());) r.length || t === k ? n = n[i] || (n[i] = {}) : n[i] = t;
  }var x = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array && "undefined" != typeof DataView;var e;for (new (x ? Uint8Array : Array)(256), e = 0; e < 256; ++e) for (var t = (t = e) >>> 1; t; t >>>= 1) 0;var r = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117],
      y = x ? new Uint32Array(r) : r;var n;function D(e) {
    var t,
        r,
        n,
        i,
        o,
        s,
        a,
        h,
        c,
        f,
        u = e.length,
        l = 0,
        d = Number.POSITIVE_INFINITY;for (h = 0; h < u; ++h) e[h] > l && (l = e[h]), e[h] < d && (d = e[h]);for (t = 1 << l, r = new (x ? Uint32Array : Array)(t), n = 1, i = 0, o = 2; n <= l;) {
      for (h = 0; h < u; ++h) if (e[h] === n) {
        for (a = i, c = s = 0; c < n; ++c) s = s << 1 | 1 & a, a >>= 1;for (f = n << 16 | h, c = s; c < t; c += o) r[c] = f;++i;
      }++n, i <<= 1, o <<= 1;
    }return [r, l, d];
  }o.Uint8Array !== k && (String.fromCharCode.apply = (n = String.fromCharCode.apply, function (e, t) {
    return n.call(String.fromCharCode, e, Array.prototype.slice.call(t));
  }));var i,
      s = [];for (i = 0; i < 288; i++) switch (!0) {case i <= 143:
      s.push([i + 48, 8]);break;case i <= 255:
      s.push([i - 144 + 400, 9]);break;case i <= 279:
      s.push([i - 256, 7]);break;case i <= 287:
      s.push([i - 280 + 192, 8]);break;default:
      l("invalid literal: " + i);}var r = function () {
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
  }x && new Uint32Array(r);I.prototype.r = function () {
    for (; !this.u;) {
      var e = K(this, 3);switch (1 & e && (this.u = !0), e >>>= 1) {case 0:
          var t = this.input,
              r = this.c,
              n = this.b,
              i = this.a,
              o = t.length,
              s = k,
              a = n.length,
              h = k;switch (this.d = this.f = 0, o <= r + 1 && l(Error("invalid uncompressed block header: LEN")), s = t[r++] | t[r++] << 8, o <= r + 1 && l(Error("invalid uncompressed block header: NLEN")), s === ~(t[r++] | t[r++] << 8) && l(Error("invalid uncompressed block header: length verify")), r + s > t.length && l(Error("input buffer is broken")), this.n) {case 0:
              for (; i + s > n.length;) {
                if (s -= h = a - i, x) n.set(t.subarray(r, r + h), i), i += h, r += h;else for (; h--;) n[i++] = t[r++];this.a = i, n = this.e(), i = this.a;
              }break;case 1:
              for (; i + s > n.length;) n = this.e({ H: 2 });break;default:
              l(Error("invalid inflate mode"));}if (x) n.set(t.subarray(r, r + s), i), i += s, r += s;else for (; s--;) n[i++] = t[r++];this.c = r, this.a = i, this.b = n;break;case 1:
          this.q(T, A);break;case 2:
          for (var c, f, u, d, p = K(this, 5) + 257, v = K(this, 5) + 1, y = K(this, 4) + 4, b = new (x ? Uint8Array : Array)(E.length), w = k, g = k, m = k, U = k, U = 0; U < y; ++U) b[E[U]] = K(this, 3);if (!x) for (U = y, y = b.length; U < y; ++U) b[E[U]] = 0;for (c = D(b), w = new (x ? Uint8Array : Array)(p + v), U = 0, d = p + v; U < d;) switch (u = M(this, c), u) {case 16:
              for (m = 3 + K(this, 2); m--;) w[U++] = g;break;case 17:
              for (m = 3 + K(this, 3); m--;) w[U++] = 0;g = 0;break;case 18:
              for (m = 11 + K(this, 7); m--;) w[U++] = 0;g = 0;break;default:
              g = w[U++] = u;}f = D(x ? w.subarray(0, p) : w.slice(0, p)), o = D(x ? w.subarray(p) : w.slice(p)), this.q(f, o);break;default:
          l(Error("unknown BTYPE: " + e));}
    }return this.B();
  };var a,
      h,
      r = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
      E = x ? new Uint16Array(r) : r,
      r = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258],
      c = x ? new Uint16Array(r) : r,
      r = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0],
      f = x ? new Uint8Array(r) : r,
      r = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577],
      u = x ? new Uint16Array(r) : r,
      r = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
      d = x ? new Uint8Array(r) : r,
      p = new (x ? Uint8Array : Array)(288);for (a = 0, h = p.length; a < h; ++a) p[a] = a <= 143 ? 8 : a <= 255 ? 9 : a <= 279 ? 7 : 8;var b,
      w,
      T = D(p),
      g = new (x ? Uint8Array : Array)(30);for (b = 0, w = g.length; b < w; ++b) g[b] = 5;var A = D(g);function K(e, t) {
    for (var r, n = e.f, i = e.d, o = e.input, s = e.c, a = o.length; i < t;) a <= s && l(Error("input buffer is broken")), n |= o[s++] << i, i += 8;return r = n & (1 << t) - 1, e.f = n >>> t, e.d = i - t, e.c = s, r;
  }function M(e, t) {
    for (var r = e.f, n = e.d, i = e.input, o = e.c, s = i.length, a = t[0], h = t[1]; n < h && !(s <= o);) r |= i[o++] << n, n += 8;return n < (a = (t = a[r & (1 << h) - 1]) >>> 16) && l(Error("invalid code length: " + a)), e.f = r >> a, e.d = n - a, e.c = o, 65535 & t;
  }function U(e) {
    e = e || {}, this.files = [], this.v = e.comment;
  }function V(e, t) {
    t = t || {}, this.input = x && e instanceof Array ? new Uint8Array(e) : e, this.c = 0, this.ba = t.verify || !1, this.j = t.password;
  }(r = I.prototype).q = function (e, t) {
    var r = this.b,
        n = this.a;this.C = e;for (var i, o, s, a, h = r.length - 258; 256 !== (i = M(this, e));) if (i < 256) h <= n && (this.a = n, r = this.e(), n = this.a), r[n++] = i;else for (a = c[o = i - 257], 0 < f[o] && (a += K(this, f[o])), i = M(this, t), s = u[i], 0 < d[i] && (s += K(this, d[i])), h <= n && (this.a = n, r = this.e(), n = this.a); a--;) r[n] = r[n++ - s];for (; 8 <= this.d;) this.d -= 8, this.c--;this.a = n;
  }, r.V = function (e, t) {
    var r = this.b,
        n = this.a;this.C = e;for (var i, o, s, a, h = r.length; 256 !== (i = M(this, e));) if (i < 256) h <= n && (h = (r = this.e()).length), r[n++] = i;else for (a = c[o = i - 257], 0 < f[o] && (a += K(this, f[o])), i = M(this, t), s = u[i], 0 < d[i] && (s += K(this, d[i])), h < n + a && (h = (r = this.e()).length); a--;) r[n] = r[n++ - s];for (; 8 <= this.d;) this.d -= 8, this.c--;this.a = n;
  }, r.e = function () {
    var e,
        t,
        r = new (x ? Uint8Array : Array)(this.a - 32768),
        n = this.a - 32768,
        i = this.b;if (x) r.set(i.subarray(32768, r.length));else for (e = 0, t = r.length; e < t; ++e) r[e] = i[e + 32768];if (this.l.push(r), this.t += r.length, x) i.set(i.subarray(n, 32768 + n));else for (e = 0; e < 32768; ++e) i[e] = i[n + e];return this.a = 32768, i;
  }, r.W = function (e) {
    var t,
        r = this.input.length / this.c + 1 | 0,
        n = this.input,
        i = this.b;return e && ("number" == typeof e.H && (r = e.H), "number" == typeof e.P && (r += e.P)), r = r < 2 ? (n = (n.length - this.c) / this.C[2] / 2 * 258 | 0) < i.length ? i.length + n : i.length << 1 : i.length * r, x ? (t = new Uint8Array(r)).set(i) : t = i, this.b = t;
  }, r.B = function () {
    var e,
        t,
        r,
        n,
        i,
        o = 0,
        s = this.b,
        a = this.l,
        h = new (x ? Uint8Array : Array)(this.t + (this.a - 32768));if (0 === a.length) return x ? this.b.subarray(32768, this.a) : this.b.slice(32768, this.a);for (t = 0, r = a.length; t < r; ++t) for (n = 0, i = (e = a[t]).length; n < i; ++n) h[o++] = e[n];for (t = 32768, r = this.a; t < r; ++t) h[o++] = s[t];return this.l = [], this.buffer = h;
  }, r.R = function () {
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
  };var m = 0,
      S = 8,
      _ = [80, 75, 1, 2],
      C = [80, 75, 3, 4],
      B = [80, 75, 5, 6];function ta(e, t) {
    this.input = e, this.offset = t;
  }function ua(e, t) {
    this.input = e, this.offset = t;
  }ta.prototype.parse = function () {
    var e = this.input,
        t = this.offset;e[t++] === _[0] && e[t++] === _[1] && e[t++] === _[2] && e[t++] === _[3] || l(Error("invalid file header signature")), this.version = e[t++], this.ia = e[t++], this.Z = e[t++] | e[t++] << 8, this.I = e[t++] | e[t++] << 8, this.A = e[t++] | e[t++] << 8, this.time = e[t++] | e[t++] << 8, this.U = e[t++] | e[t++] << 8, this.p = (e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24) >>> 0, this.z = (e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24) >>> 0, this.J = (e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24) >>> 0, this.h = e[t++] | e[t++] << 8, this.g = e[t++] | e[t++] << 8, this.F = e[t++] | e[t++] << 8, this.ea = e[t++] | e[t++] << 8, this.ga = e[t++] | e[t++] << 8, this.fa = e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24, this.$ = (e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24) >>> 0, this.filename = String.fromCharCode.apply(null, x ? e.subarray(t, t += this.h) : e.slice(t, t += this.h)), this.X = x ? e.subarray(t, t += this.g) : e.slice(t, t += this.g), this.v = x ? e.subarray(t, t + this.F) : e.slice(t, t + this.F), this.length = t - this.offset;
  };var P = 1;function $(e) {
    var t,
        r,
        n,
        i,
        o = [],
        s = {};if (!e.i) {
      if (e.o === k) {
        var a,
            h = e.input;if (!e.D) e: {
          var c,
              f = e.input;for (c = f.length - 12; 0 < c; --c) if (f[c] === B[0] && f[c + 1] === B[1] && f[c + 2] === B[2] && f[c + 3] === B[3]) {
            e.D = c;break e;
          }l(Error("End of Central Directory Record not found"));
        }a = e.D, h[a++] === B[0] && h[a++] === B[1] && h[a++] === B[2] && h[a++] === B[3] || l(Error("invalid signature")), e.ha = h[a++] | h[a++] << 8, e.ja = h[a++] | h[a++] << 8, e.ka = h[a++] | h[a++] << 8, e.aa = h[a++] | h[a++] << 8, e.Q = (h[a++] | h[a++] << 8 | h[a++] << 16 | h[a++] << 24) >>> 0, e.o = (h[a++] | h[a++] << 8 | h[a++] << 16 | h[a++] << 24) >>> 0, e.w = h[a++] | h[a++] << 8, e.v = x ? h.subarray(a, a + e.w) : h.slice(a, a + e.w);
      }for (t = e.o, n = 0, i = e.aa; n < i; ++n) (r = new ta(e.input, t)).parse(), t += r.length, s[(o[n] = r).filename] = n;e.Q < t - e.o && l(Error("invalid file header size")), e.i = o, e.G = s;
    }
  }function wa(e, t, r) {
    return r ^= e.s(t), e.k(t, r), r;
  }ua.prototype.parse = function () {
    var e = this.input,
        t = this.offset;e[t++] === C[0] && e[t++] === C[1] && e[t++] === C[2] && e[t++] === C[3] || l(Error("invalid local file header signature")), this.Z = e[t++] | e[t++] << 8, this.I = e[t++] | e[t++] << 8, this.A = e[t++] | e[t++] << 8, this.time = e[t++] | e[t++] << 8, this.U = e[t++] | e[t++] << 8, this.p = (e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24) >>> 0, this.z = (e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24) >>> 0, this.J = (e[t++] | e[t++] << 8 | e[t++] << 16 | e[t++] << 24) >>> 0, this.h = e[t++] | e[t++] << 8, this.g = e[t++] | e[t++] << 8, this.filename = String.fromCharCode.apply(null, x ? e.subarray(t, t += this.h) : e.slice(t, t += this.h)), this.X = x ? e.subarray(t, t += this.g) : e.slice(t, t += this.g), this.length = t - this.offset;
  }, (r = V.prototype).Y = function () {
    var e,
        t,
        r,
        n = [];for (this.i || $(this), e = 0, t = (r = this.i).length; e < t; ++e) n[e] = r[e].filename;return n;
  }, r.r = function (e, t) {
    var r;this.G || $(this), (r = this.G[e]) === k && l(Error(e + " not found")), e = t || {};var n,
        i,
        o,
        s,
        a,
        h,
        c,
        f = this.input,
        t = this.i;if (t || $(this), t[r] === k && l(Error("wrong index")), i = t[r].$, (n = new ua(this.input, i)).parse(), i += n.length, o = n.z, 0 != (n.I & P)) {
      for (e.password || this.j || l(Error("please set password")), a = this.S(e.password || this.j), c = (h = i) + 12; h < c; ++h) wa(this, a, f[h]);for (c = (h = i += 12) + (o -= 12); h < c; ++h) f[h] = wa(this, a, f[h]);
    }switch (n.A) {case m:
        s = x ? this.input.subarray(i, i + o) : this.input.slice(i, i + o);break;case S:
        s = new I(this.input, { index: i, bufferSize: n.J }).r();break;default:
        l(Error("unknown compression type"));}if (this.ba) {
      var u,
          d = k,
          p = "number" == typeof d ? d : d = 0,
          e = s.length;for (u = -1, p = 7 & e; p--; ++d) u = u >>> 8 ^ y[255 & (u ^ s[d])];for (p = e >> 3; p--; d += 8) u = (u = (u = (u = (u = (u = (u = (u = u >>> 8 ^ y[255 & (u ^ s[d])]) >>> 8 ^ y[255 & (u ^ s[d + 1])]) >>> 8 ^ y[255 & (u ^ s[d + 2])]) >>> 8 ^ y[255 & (u ^ s[d + 3])]) >>> 8 ^ y[255 & (u ^ s[d + 4])]) >>> 8 ^ y[255 & (u ^ s[d + 5])]) >>> 8 ^ y[255 & (u ^ s[d + 6])]) >>> 8 ^ y[255 & (u ^ s[d + 7])];n.p !== (e = (4294967295 ^ u) >>> 0) && l(Error("wrong crc: file=0x" + n.p.toString(16) + ", data=0x" + e.toString(16)));
    }return s;
  }, r.L = function (e) {
    this.j = e;
  }, r.k = U.prototype.k, r.S = U.prototype.T, r.s = U.prototype.s, v("Zlib.Unzip", V), v("Zlib.Unzip.prototype.decompress", V.prototype.r), v("Zlib.Unzip.prototype.getFilenames", V.prototype.Y), v("Zlib.Unzip.prototype.setPassword", V.prototype.L);
}.call(this), function (e, t) {
  "object" == typeof exports && "object" == typeof module ? window.msgpack = module.exports = t() : "function" == typeof define && define.amd ? window.msgpack = define([], t) : "object" == typeof exports ? window.msgpack = exports.msgpack = t() : window.msgpack = e.msgpack = t();
}(this, function () {
  return r = [function (e, t, r) {
    r.r(t), r.d(t, "encode", function () {
      return encode;
    }), r.d(t, "decode", function () {
      return decode;
    }), r.d(t, "decodeAsync", function () {
      return decodeAsync;
    }), r.d(t, "decodeArrayStream", function () {
      return decodeArrayStream;
    }), r.d(t, "decodeStream", function () {
      return decodeStream;
    }), r.d(t, "Decoder", function () {
      return B;
    }), r.d(t, "Encoder", function () {
      return g;
    }), r.d(t, "ExtensionCodec", function () {
      return y;
    }), r.d(t, "ExtData", function () {
      return f;
    }), r.d(t, "EXT_TIMESTAMP", function () {
      return l;
    }), r.d(t, "encodeDateToTimeSpec", function () {
      return encodeDateToTimeSpec;
    }), r.d(t, "encodeTimeSpecToTimestamp", function () {
      return encodeTimeSpecToTimestamp;
    }), r.d(t, "decodeTimestampToTimeSpec", function () {
      return decodeTimestampToTimeSpec;
    }), r.d(t, "encodeTimestampExtension", function () {
      return encodeTimestampExtension;
    }), r.d(t, "decodeTimestampExtension", function () {
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
    };var o = "undefined" != typeof process && "undefined" != typeof TextEncoder && "undefined" != typeof TextDecoder;function utf8Count(e) {
      var t = e.length;var r = 0;var n = 0;for (; n < t;) {
        var i = e.charCodeAt(n++);var o;0 != (4294967168 & i) ? 0 == (4294965248 & i) ? r += 2 : (55296 <= i && i <= 56319 && n < t && 56320 == (64512 & (o = e.charCodeAt(n))) && (++n, i = ((1023 & i) << 10) + (1023 & o) + 65536), r += 0 == (4294901760 & i) ? 3 : 4) : r++;
      }return r;
    }var i = o ? new TextEncoder() : void 0;var s = "undefined" != typeof process ? 200 : 0;var a = null != i && i.encodeInto ? function (e, t, r) {
      i.encodeInto(e, t.subarray(r));
    } : function (e, t, r) {
      t.set(i.encode(e), r);
    };function utf8DecodeJs(e, t, r) {
      var n = t;var i = n + r;var o = [];var s = "";for (; n < i;) {
        var a = e[n++];var h, c, f;0 == (128 & a) ? o.push(a) : 192 == (224 & a) ? (h = 63 & e[n++], o.push((31 & a) << 6 | h)) : 224 == (240 & a) ? (h = 63 & e[n++], c = 63 & e[n++], o.push((31 & a) << 12 | h << 6 | c)) : 240 == (248 & a) ? (65535 < (f = (7 & a) << 18 | (h = 63 & e[n++]) << 12 | (c = 63 & e[n++]) << 6 | 63 & e[n++]) && (f -= 65536, o.push(f >>> 10 & 1023 | 55296), f = 56320 | 1023 & f), o.push(f)) : o.push(a), 4096 <= o.length && (s += String.fromCharCode.apply(String, u(o)), o.length = 0);
      }return 0 < o.length && (s += String.fromCharCode.apply(String, u(o))), s;
    }var h = o ? new TextDecoder() : null;var c = "undefined" != typeof process ? 200 : 0;var f = function (e, t) {
      this.type = e, this.data = t;
    };function setInt64(e, t, r) {
      var n = Math.floor(r / 4294967296);e.setUint32(t, n), e.setUint32(t + 4, r);
    }function getInt64(e, t) {
      return 4294967296 * e.getInt32(t) + e.getUint32(t + 4);
    }var l = -1;var d = 4294967295;var p = 17179869183;function encodeTimeSpecToTimestamp(e) {
      var t = e.sec,
          r = e.nsec;if (0 <= t && 0 <= r && t <= p) {
        if (0 === r && t <= d) {
          var n = new Uint8Array(4);return (o = new DataView(n.buffer)).setUint32(0, t), n;
        }var i = t / 4294967296;e = 4294967295 & t;n = new Uint8Array(8);return (o = new DataView(n.buffer)).setUint32(0, r << 2 | 3 & i), o.setUint32(4, e), n;
      }n = new Uint8Array(12);var o;return (o = new DataView(n.buffer)).setUint32(0, r), setInt64(o, 4, t), n;
    }function encodeDateToTimeSpec(e) {
      var t = e.getTime();var r = Math.floor(t / 1e3);e = 1e6 * (t - 1e3 * r);t = Math.floor(e / 1e9);return { sec: r + t, nsec: e - 1e9 * t };
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
    }var v = { type: l, encode: encodeTimestampExtension, decode: decodeTimestampExtension };var y = (ExtensionCodec.prototype.register = function (e) {
      var t = e.type,
          r = e.encode,
          e = e.decode;0 <= t ? (this.encoders[t] = r, this.decoders[t] = e) : (this.builtInEncoders[t = 1 + t] = r, this.builtInDecoders[t] = e);
    }, ExtensionCodec.prototype.tryToEncode = function (e, t) {
      for (var r = 0; r < this.builtInEncoders.length; r++) if (null != (i = this.builtInEncoders[r])) {
        var n = i(e, t);if (null != n) return new f(-1 - r, n);
      }for (r = 0; r < this.encoders.length; r++) {
        var i;if (null != (i = this.encoders[r])) {
          n = i(e, t);if (null != n) return new f(r, n);
        }
      }return e instanceof f ? e : null;
    }, ExtensionCodec.prototype.decode = function (e, t, r) {
      var n = t < 0 ? this.builtInDecoders[-1 - t] : this.decoders[t];return n ? n(e, t, r) : new f(t, e);
    }, ExtensionCodec.defaultCodec = new ExtensionCodec(), ExtensionCodec);function ExtensionCodec() {
      this.builtInEncoders = [], this.builtInDecoders = [], this.encoders = [], this.decoders = [], this.register(v);
    }function ensureUint8Array(e) {
      return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e instanceof ArrayBuffer ? new Uint8Array(e) : Uint8Array.from(e);
    }var b = function (e) {
      var t = "function" == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          n = 0;if (r) return r.call(e);if (e && "number" == typeof e.length) return { next: function () {
          return { value: (e = e && n >= e.length ? void 0 : e) && e[n++], done: !e };
        } };throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };var w = null != Uint8Array.prototype.slice || null != Uint8Array.prototype.slice;var g = (Encoder.prototype.encode = function (e, t) {
      if (t > this.maxDepth) throw new Error("Too deep objects in depth " + t);null == e ? this.encodeNil() : "boolean" == typeof e ? this.encodeBoolean(e) : "number" == typeof e ? this.encodeNumber(e) : "string" == typeof e ? this.encodeString(e) : this.encodeObject(e, t);
    }, Encoder.prototype.getUint8Array = function () {
      return this.bytes.subarray(0, this.pos);
    }, Encoder.prototype.ensureBufferSizeToWrite = function (e) {
      e = this.pos + e;this.view.byteLength < e && this.resizeBuffer(2 * e);
    }, Encoder.prototype.resizeBuffer = function (e) {
      var t = new ArrayBuffer(e);e = new Uint8Array(t);t = new DataView(t);e.set(this.bytes), this.view = t, this.bytes = e;
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
      var t = e.length;var r;o && s < t ? (r = utf8Count(e), this.ensureBufferSizeToWrite(5 + r), this.writeStringHeader(r), a(e, this.bytes, this.pos)) : (r = utf8Count(e), this.ensureBufferSizeToWrite(5 + r), this.writeStringHeader(r), function (e, t, r) {
        var n = e.length;var i = r;var o = 0;for (; o < n;) {
          var s = e.charCodeAt(o++);var a;0 != (4294967168 & s) ? (0 == (4294965248 & s) ? t[i++] = s >> 6 & 31 | 192 : (55296 <= s && s <= 56319 && o < n && 56320 == (64512 & (a = e.charCodeAt(o))) && (++o, s = ((1023 & s) << 10) + (1023 & a) + 65536), 0 == (4294901760 & s) ? t[i++] = s >> 12 & 15 | 224 : (t[i++] = s >> 18 & 7 | 240, t[i++] = s >> 12 & 63 | 128), t[i++] = s >> 6 & 63 | 128), t[i++] = 63 & s | 128) : t[i++] = s;
        }
      }(e, this.bytes, this.pos)), this.pos += r;
    }, Encoder.prototype.encodeObject = function (e, t) {
      var r = this.extensionCodec.tryToEncode(e, this.context);if (null != r) this.encodeExtension(r);else if (Array.isArray(e)) this.encodeArray(e, t);else if (ArrayBuffer.isView(e)) this.encodeBinary(e);else {
        if ("object" != typeof e) throw new Error("Unrecognized object: " + Object.prototype.toString.apply(e));this.encodeMap(e, t);
      }
    }, Encoder.prototype.encodeBinary = function (e) {
      var t = e.byteLength;if (t < 256) this.writeU8(196), this.writeU8(t);else if (t < 65536) this.writeU8(197), this.writeU16(t);else {
        if (!(t < 4294967296)) throw new Error("Too large binary: " + t);this.writeU8(198), this.writeU32(t);
      }e = ensureUint8Array(e);this.writeU8a(e);
    }, Encoder.prototype.encodeArray = function (e, t) {
      var r, n;var i = e.length;if (i < 16) this.writeU8(144 + i);else if (i < 65536) this.writeU8(220), this.writeU16(i);else {
        if (!(i < 4294967296)) throw new Error("Too large array: " + i);this.writeU8(221), this.writeU32(i);
      }try {
        for (var o = b(e), s = o.next(); !s.done; s = o.next()) {
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
        for (var o = b(t), s = o.next(); !s.done; s = o.next()) void 0 !== e[s.value] && i++;
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
        for (var s = b(i), a = s.next(); !a.done; a = s.next()) {
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
    }, Encoder);function Encoder(e, t, r, n, i, o, s) {
      void 0 === e && (e = y.defaultCodec), void 0 === r && (r = 1e3), void 0 === n && (n = 2048), void 0 === i && (i = !1), void 0 === o && (o = !1), void 0 === s && (s = !1), this.extensionCodec = e, this.context = t, this.maxDepth = r, this.initialBufferSize = n, this.sortKeys = i, this.forceFloat32 = o, this.ignoreUndefined = s, this.pos = 0, this.view = new DataView(new ArrayBuffer(this.initialBufferSize)), this.bytes = new Uint8Array(this.view.buffer);
    }var m = {};function encode(e, t) {
      t = new g((t = void 0 === t ? m : t).extensionCodec, t.context, t.maxDepth, t.initialBufferSize, t.sortKeys, t.forceFloat32, t.ignoreUndefined);return t.encode(e, 1), t.getUint8Array();
    }function prettyByte(e) {
      return (e < 0 ? "-" : "") + "0x" + Math.abs(e).toString(16).padStart(2, "0");
    }CachedKeyDecoder.prototype.canBeCached = function (e) {
      return 0 < e && e <= this.maxKeyLength;
    }, CachedKeyDecoder.prototype.get = function (e, t, r) {
      var n = this.caches[r - 1];var i = n.length;e: for (var o = 0; o < i; o++) {
        var s = n[o];var a = s.bytes;for (var h = 0; h < r; h++) if (a[h] !== e[t + h]) continue e;return s.value;
      }return null;
    }, CachedKeyDecoder.prototype.store = function (e, t) {
      var r = this.caches[e.length - 1];t = { bytes: e, value: t };r.length >= this.maxLengthPerKey ? r[Math.random() * r.length | 0] = t : r.push(t);
    }, CachedKeyDecoder.prototype.decode = function (e, t, r) {
      var n = this.get(e, t, r);if (null != n) return n;n = utf8DecodeJs(e, t, r);return r = (w ? Uint8Array.prototype.slice : Uint8Array.prototype.subarray).call(e, t, t + r), this.store(r, n), n;
    }, t = CachedKeyDecoder;function CachedKeyDecoder(e, t) {
      void 0 === t && (t = 16), this.maxKeyLength = e = void 0 === e ? 16 : e, this.maxLengthPerKey = t, this.caches = [];for (var r = 0; r < this.maxKeyLength; r++) this.caches.push([]);
    }var U = function (e, n, i, o) {
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
    };var k = function (r, n) {
      var i,
          o,
          s,
          e,
          a = { label: 0, sent: function () {
          if (1 & s[0]) throw s[1];return s[1];
        }, trys: [], ops: [] };return e = { next: verb(0), throw: verb(1), return: verb(2) }, "function" == typeof Symbol && (e[Symbol.iterator] = function () {
        return this;
      }), e;function verb(t) {
        return function (e) {
          return function (t) {
            if (i) throw new TypeError("Generator is already executing.");for (; a;) try {
              if (i = 1, o && (s = 2 & t[0] ? o.return : t[0] ? o.throw || ((s = o.return) && s.call(o), 0) : o.next) && !(s = s.call(o, t[1])).done) return s;switch (o = 0, (t = s ? [2 & t[0], s.value] : t)[0]) {case 0:case 1:
                  s = t;break;case 4:
                  return a.label++, { value: t[1], done: !1 };case 5:
                  a.label++, o = t[1], t = [0];continue;case 7:
                  t = a.ops.pop(), a.trys.pop();continue;default:
                  if (!(s = 0 < (s = a.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                    a = 0;continue;
                  }if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3])) {
                    a.label = t[1];break;
                  }if (6 === t[0] && a.label < s[1]) {
                    a.label = s[1], s = t;break;
                  }if (s && a.label < s[2]) {
                    a.label = s[2], a.ops.push(t);break;
                  }s[2] && a.ops.pop(), a.trys.pop();continue;}t = n.call(r, a);
            } catch (e) {
              t = [6, e], o = 0;
            } finally {
              i = s = 0;
            }if (5 & t[0]) throw t[1];return { value: t[0] ? t[1] : void 0, done: !0 };
          }([t, e]);
        };
      }
    };var x = function (s) {
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
    };var E = function (e) {
      return this instanceof E ? (this.v = e, this) : new E(e);
    };var T = function (e, t, r) {
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
          (r = o[e](t)).value instanceof E ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(s[0][2], r);
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
    };var A = new DataView(new ArrayBuffer(0));var S = new Uint8Array(A.buffer);var _ = function () {
      try {
        A.getInt8(0);
      } catch (e) {
        return e.constructor;
      }throw new Error("never reached");
    }();var D = new _("Insufficient data");var C = 4294967295;var I = new t();var B = (Decoder.prototype.setBuffer = function (e) {
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
    }, Decoder.prototype.decodeSingleAsync = function (s) {
      var a, h;var c, f;return U(this, void 0, void 0, function () {
        var t, r, n, i, o;return k(this, function (e) {
          switch (e.label) {case 0:
              t = !1, e.label = 1;case 1:
              e.trys.push([1, 6, 7, 12]), a = x(s), e.label = 2;case 2:
              return [4, a.next()];case 3:
              if ((h = e.sent()).done) return [3, 5];if (n = h.value, t) throw this.createNoExtraBytesError(this.totalPos);this.appendBuffer(n);try {
                r = this.decodeSync(), t = !0;
              } catch (e) {
                if (!(e instanceof _)) throw e;
              }this.totalPos += this.pos, e.label = 4;case 4:
              return [3, 2];case 5:
              return [3, 12];case 6:
              return i = e.sent(), c = { error: i }, [3, 12];case 7:
              return e.trys.push([7,, 10, 11]), h && !h.done && (f = a.return) ? [4, f.call(a)] : [3, 9];case 8:
              e.sent(), e.label = 9;case 9:
              return [3, 11];case 10:
              if (c) throw c.error;return [7];case 11:
              return [7];case 12:
              if (t) {
                if (this.hasRemaining()) throw this.createNoExtraBytesError(this.totalPos);return [2, r];
              }throw n = (o = this).headByte, i = o.pos, o = o.totalPos, new RangeError("Insufficient data in parcing " + prettyByte(n) + " at " + o + " (" + i + " in the current buffer)");}
        });
      });
    }, Decoder.prototype.decodeArrayStream = function (e) {
      return this.decodeMultiAsync(e, !0);
    }, Decoder.prototype.decodeStream = function (e) {
      return this.decodeMultiAsync(e, !1);
    }, Decoder.prototype.decodeMultiAsync = function (h, c) {
      return T(this, arguments, function () {
        var t, r, n, i, o;var s, a;return k(this, function (e) {
          switch (e.label) {case 0:
              t = c, r = -1, e.label = 1;case 1:
              e.trys.push([1, 13, 14, 19]), n = x(h), e.label = 2;case 2:
              return [4, E(n.next())];case 3:
              if ((i = e.sent()).done) return [3, 12];if (o = i.value, c && 0 === r) throw this.createNoExtraBytesError(this.totalPos);this.appendBuffer(o), t && (r = this.readArraySize(), t = !1, this.complete()), e.label = 4;case 4:
              e.trys.push([4, 9,, 10]), e.label = 5;case 5:
              return [4, E(this.decodeSync())];case 6:
              return [4, e.sent()];case 7:
              return e.sent(), 0 == --r ? [3, 8] : [3, 5];case 8:
              return [3, 10];case 9:
              if (!((o = e.sent()) instanceof _)) throw o;return [3, 10];case 10:
              this.totalPos += this.pos, e.label = 11;case 11:
              return [3, 2];case 12:
              return [3, 19];case 13:
              return s = e.sent(), s = { error: s }, [3, 19];case 14:
              return e.trys.push([14,, 17, 18]), i && !i.done && (a = n.return) ? [4, E(a.call(n))] : [3, 16];case 15:
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
              this.pushMapState(n), this.complete();continue e;
            }t = {};
          } else if (e < 160) {
            if (0 !== (n = e - 144)) {
              this.pushArrayState(n), this.complete();continue e;
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
            this.pushArrayState(n), this.complete();continue e;
          }t = [];
        } else if (221 === e) {
          if (0 !== (n = this.readU32())) {
            this.pushArrayState(n), this.complete();continue e;
          }t = [];
        } else if (222 === e) {
          if (0 !== (n = this.readU16())) {
            this.pushMapState(n), this.complete();continue e;
          }t = {};
        } else if (223 === e) {
          if (0 !== (n = this.readU32())) {
            this.pushMapState(n), this.complete();continue e;
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
      if (e > this.maxStrLength) throw new Error("Max length exceeded: UTF-8 byte length (" + e + ") > maxStrLength (" + this.maxStrLength + ")");if (this.bytes.byteLength < this.pos + t + e) throw D;var r = this.pos + t;var n, i;return r = this.stateIsMapKey() && null !== (i = this.cachedKeyDecoder) && void 0 !== i && i.canBeCached(e) ? this.cachedKeyDecoder.decode(this.bytes, r, e) : o && c < e ? (n = this.bytes, i = e, i = n.subarray(r, r + e), h.decode(i)) : utf8DecodeJs(this.bytes, r, e), this.pos += t + e, r;
    }, Decoder.prototype.stateIsMapKey = function () {
      return 0 < this.stack.length && 1 === this.stack[this.stack.length - 1].type;
    }, Decoder.prototype.decodeBinary = function (e, t) {
      if (e > this.maxBinLength) throw new Error("Max length exceeded: bin length (" + e + ") > maxBinLength (" + this.maxBinLength + ")");if (!this.hasRemaining(e + t)) throw D;var r = this.pos + t;r = this.bytes.subarray(r, r + e);return this.pos += t + e, r;
    }, Decoder.prototype.decodeExtension = function (e, t) {
      if (e > this.maxExtLength) throw new Error("Max length exceeded: ext length (" + e + ") > maxExtLength (" + this.maxExtLength + ")");var r = this.view.getInt8(this.pos + t);t = this.decodeBinary(e, t + 1);return this.extensionCodec.decode(t, r, this.context);
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
      e = this.view, t = this.pos, t = 4294967296 * e.getUint32(t) + e.getUint32(t + 4);var e, t;return this.pos += 8, t;
    }, Decoder.prototype.readI64 = function () {
      var e = getInt64(this.view, this.pos);return this.pos += 8, e;
    }, Decoder.prototype.readF32 = function () {
      var e = this.view.getFloat32(this.pos);return this.pos += 4, e;
    }, Decoder.prototype.readF64 = function () {
      var e = this.view.getFloat64(this.pos);return this.pos += 8, e;
    }, Decoder);function Decoder(e, t, r, n, i, o, s, a) {
      void 0 === e && (e = y.defaultCodec), void 0 === r && (r = C), void 0 === n && (n = C), void 0 === i && (i = C), void 0 === o && (o = C), void 0 === s && (s = C), void 0 === a && (a = I), this.extensionCodec = e, this.context = t, this.maxStrLength = r, this.maxBinLength = n, this.maxArrayLength = i, this.maxMapLength = o, this.maxExtLength = s, this.cachedKeyDecoder = a, this.totalPos = 0, this.pos = 0, this.view = A, this.bytes = S, this.headByte = -1, this.stack = [];
    }var P = {};function decode(e, t) {
      t = new B((t = void 0 === t ? P : t).extensionCodec, t.context, t.maxStrLength, t.maxBinLength, t.maxArrayLength, t.maxMapLength, t.maxExtLength);return t.setBuffer(e), t.decodeSingleSync();
    }var L = function (r, n) {
      var i,
          o,
          s,
          e,
          a = { label: 0, sent: function () {
          if (1 & s[0]) throw s[1];return s[1];
        }, trys: [], ops: [] };return e = { next: verb(0), throw: verb(1), return: verb(2) }, "function" == typeof Symbol && (e[Symbol.iterator] = function () {
        return this;
      }), e;function verb(t) {
        return function (e) {
          return function (t) {
            if (i) throw new TypeError("Generator is already executing.");for (; a;) try {
              if (i = 1, o && (s = 2 & t[0] ? o.return : t[0] ? o.throw || ((s = o.return) && s.call(o), 0) : o.next) && !(s = s.call(o, t[1])).done) return s;switch (o = 0, (t = s ? [2 & t[0], s.value] : t)[0]) {case 0:case 1:
                  s = t;break;case 4:
                  return a.label++, { value: t[1], done: !1 };case 5:
                  a.label++, o = t[1], t = [0];continue;case 7:
                  t = a.ops.pop(), a.trys.pop();continue;default:
                  if (!(s = 0 < (s = a.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                    a = 0;continue;
                  }if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3])) {
                    a.label = t[1];break;
                  }if (6 === t[0] && a.label < s[1]) {
                    a.label = s[1], s = t;break;
                  }if (s && a.label < s[2]) {
                    a.label = s[2], a.ops.push(t);break;
                  }s[2] && a.ops.pop(), a.trys.pop();continue;}t = n.call(r, a);
            } catch (e) {
              t = [6, e], o = 0;
            } finally {
              i = s = 0;
            }if (5 & t[0]) throw t[1];return { value: t[0] ? t[1] : void 0, done: !0 };
          }([t, e]);
        };
      }
    };var M = function (e) {
      return this instanceof M ? (this.v = e, this) : new M(e);
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
          (r = o[e](t)).value instanceof M ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(s[0][2], r);
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
        var t, r, n;return L(this, function (e) {
          switch (e.label) {case 0:
              t = i.getReader(), e.label = 1;case 1:
              e.trys.push([1,, 9, 10]), e.label = 2;case 2:
              return [4, M(t.read())];case 3:
              return n = e.sent(), r = n.done, n = n.value, r ? [4, M(void 0)] : [3, 5];case 4:
              return [2, e.sent()];case 5:
              return function (e) {
                if (null == e) throw new Error("Assertion Failure: value must not be null nor undefined");
              }(n), [4, M(n)];case 6:
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
    };var j = function (r, n) {
      var i,
          o,
          s,
          e,
          a = { label: 0, sent: function () {
          if (1 & s[0]) throw s[1];return s[1];
        }, trys: [], ops: [] };return e = { next: verb(0), throw: verb(1), return: verb(2) }, "function" == typeof Symbol && (e[Symbol.iterator] = function () {
        return this;
      }), e;function verb(t) {
        return function (e) {
          return function (t) {
            if (i) throw new TypeError("Generator is already executing.");for (; a;) try {
              if (i = 1, o && (s = 2 & t[0] ? o.return : t[0] ? o.throw || ((s = o.return) && s.call(o), 0) : o.next) && !(s = s.call(o, t[1])).done) return s;switch (o = 0, (t = s ? [2 & t[0], s.value] : t)[0]) {case 0:case 1:
                  s = t;break;case 4:
                  return a.label++, { value: t[1], done: !1 };case 5:
                  a.label++, o = t[1], t = [0];continue;case 7:
                  t = a.ops.pop(), a.trys.pop();continue;default:
                  if (!(s = 0 < (s = a.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                    a = 0;continue;
                  }if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3])) {
                    a.label = t[1];break;
                  }if (6 === t[0] && a.label < s[1]) {
                    a.label = s[1], s = t;break;
                  }if (s && a.label < s[2]) {
                    a.label = s[2], a.ops.push(t);break;
                  }s[2] && a.ops.pop(), a.trys.pop();continue;}t = n.call(r, a);
            } catch (e) {
              t = [6, e], o = 0;
            } finally {
              i = s = 0;
            }if (5 & t[0]) throw t[1];return { value: t[0] ? t[1] : void 0, done: !0 };
          }([t, e]);
        };
      }
    };function decodeAsync(r, n) {
      return void 0 === n && (n = P), N(this, void 0, void 0, function () {
        var t;return j(this, function (e) {
          return t = ensureAsyncIterabe(r), [2, new B(n.extensionCodec, n.context, n.maxStrLength, n.maxBinLength, n.maxArrayLength, n.maxMapLength, n.maxExtLength).decodeSingleAsync(t)];
        });
      });
    }function decodeArrayStream(e, t) {
      void 0 === t && (t = P);e = ensureAsyncIterabe(e);return new B(t.extensionCodec, t.context, t.maxStrLength, t.maxBinLength, t.maxArrayLength, t.maxMapLength, t.maxExtLength).decodeArrayStream(e);
    }function decodeStream(e, t) {
      void 0 === t && (t = P);e = ensureAsyncIterabe(e);return new B(t.extensionCodec, t.context, t.maxStrLength, t.maxBinLength, t.maxArrayLength, t.maxMapLength, t.maxExtLength).decodeStream(e);
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
  var q = new Uint8Array([0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26, 33, 40, 48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57, 50, 43, 36, 29, 22, 15, 23, 30, 37, 44, 51, 58, 59, 52, 45, 38, 31, 39, 46, 53, 60, 61, 54, 47, 55, 62, 63]);var E = 4017;var T = 799;var A = 3406;var S = 2276;var _ = 1567;var D = 3784;var C = 5793;var I = 2896;function JpegImage(e) {
    var t = void 0 === e ? {} : e,
        e = t.decodeTransform,
        t = t.colorTransform,
        t = void 0 === t ? -1 : t;this._decodeTransform = void 0 === e ? null : e, this._colorTransform = t;
  }function getBlockBufferOffset(e, t, r) {
    return 64 * ((e.blocksPerLine + 1) * t + r);
  }function decodeScan(r, n, i, e, t, h, c, o, f, s) {
    void 0 === s && (s = !1);var a = i.mcusPerLine;var u = i.progressive;var l = n,
        d = 0,
        p = 0;function readBit() {
      if (0 < p) return d >> --p & 1;if (255 === (d = r[n++])) {
        var e = r[n++];if (e) {
          if (220 === e && s) {
            n += 2;var t = r[n++] << 8 | r[n++];if (0 < t && t !== i.scanLines) throw new DNLMarkerError("Found DNL marker (0xFFDC) while parsing scan data", t);
          } else if (217 === e) throw new EOIMarkerError("Found EOI marker (0xFFD9) while parsing scan data");throw new Error("unexpected marker " + (d << 8 | e).toString(16));
        }
      }return d >>> (p = 7);
    }function decodeHuffman(e) {
      var t = e;for (;;) {
        if ("number" == typeof (t = t[readBit()])) return t;if ("object" != typeof t) throw new Error("invalid huffman sequence");
      }
    }function receive(e) {
      var t = 0;for (; 0 < e;) t = t << 1 | readBit(), e--;return t;
    }function receiveAndExtend(e) {
      if (1 === e) return 1 === readBit() ? 1 : -1;var t = receive(e);return 1 << e - 1 <= t ? t : t + (-1 << e) + 1;
    }var v = 0;var y,
        b = 0;var w = e.length;var g, m, U, k, x;var E;E = u ? 0 === h ? 0 === o ? function (e, t) {
      var r = decodeHuffman(e.huffmanTableDC);r = 0 === r ? 0 : receiveAndExtend(r) << f, e.blockData[t] = e.pred += r;
    } : function (e, t) {
      e.blockData[t] |= readBit() << f;
    } : 0 === o ? function (e, t) {
      if (0 < v) v--;else {
        var r = h,
            n = c;for (; r <= n;) {
          var i = decodeHuffman(e.huffmanTableAC);var o = 15 & i,
              s = i >> 4;if (0 != o) {
            i = q[r += s];e.blockData[t + i] = receiveAndExtend(o) * (1 << f), r++;
          } else {
            if (s < 15) {
              v = receive(s) + (1 << s) - 1;break;
            }r += 16;
          }
        }
      }
    } : function (e, t) {
      var r = h;var n = c;var i = 0;var o;for (; r <= n;) {
        var s = t + q[r];var a = e.blockData[s] < 0 ? -1 : 1;switch (b) {case 0:
            if (i = (o = decodeHuffman(e.huffmanTableAC)) >> 4, 0 == (o = 15 & o)) b = i < 15 ? (v = receive(i) + (1 << i), 4) : (i = 16, 1);else {
              if (1 != o) throw new Error("invalid ACn encoding");y = receiveAndExtend(o), b = i ? 2 : 3;
            }continue;case 1:case 2:
            e.blockData[s] ? e.blockData[s] += a * (readBit() << f) : 0 === --i && (b = 2 === b ? 3 : 0);break;case 3:
            e.blockData[s] ? e.blockData[s] += a * (readBit() << f) : (e.blockData[s] = y << f, b = 0);break;case 4:
            e.blockData[s] && (e.blockData[s] += a * (readBit() << f));}r++;
      }4 === b && 0 === --v && (b = 0);
    } : function (e, t) {
      var r = decodeHuffman(e.huffmanTableDC);r = 0 === r ? 0 : receiveAndExtend(r), e.blockData[t] = e.pred += r;var n = 1;for (; n < 64;) {
        var i = decodeHuffman(e.huffmanTableAC);var o = 15 & i,
            s = i >> 4;if (0 != o) {
          i = q[n += s];e.blockData[t + i] = receiveAndExtend(o), n++;
        } else {
          if (s < 15) break;n += 16;
        }
      }
    };var T,
        A = 0;var S;var _, D;for (S = 1 === w ? e[0].blocksPerLine * e[0].blocksPerColumn : a * i.mcusPerColumn; A < S;) {
      var C = t ? Math.min(S - A, t) : S;for (m = 0; m < w; m++) e[m].pred = 0;if (v = 0, 1 === w) for (g = e[0], x = 0; x < C; x++) E(z = g, getBlockBufferOffset(z, (N = A) / z.blocksPerLine | 0, N % z.blocksPerLine)), A++;else for (x = 0; x < C; x++) {
        for (m = 0; m < w; m++) for (_ = (g = e[m]).h, D = g.v, U = 0; U < D; U++) for (k = 0; k < _; k++) L = U, M = k, E(B = g, getBlockBufferOffset(B, ((P = A) / a | 0) * B.v + L, P % a * B.h + M));A++;
      }p = 0, (T = findNextFileMarker(r, n)) && T.invalid && (warn("decodeScan - unexpected MCU data, current marker is: " + T.invalid), n = T.offset);var I = T && T.marker;if (!I || I <= 65280) throw new Error("marker was not found");if (!(65488 <= I && I <= 65495)) break;n += 2;
    }var B, P, L, M;var z, N;return (T = findNextFileMarker(r, n)) && T.invalid && (warn("decodeScan - unexpected Scan data, current marker is: " + T.invalid), n = T.offset), n - l;
  }function buildComponentData(e, t) {
    var r = t.blocksPerLine;var n = t.blocksPerColumn;var i = new Int16Array(64);for (var o = 0; o < n; o++) for (var s = 0; s < r; s++) !function (e, t, r) {
      var n = e.quantizationTable,
          i = e.blockData;var o, s, a, h, c, f, u, l;var d, p, v, y, b, w, g, m;var U;if (!n) throw new Error("missing required Quantization Table.");for (var k = 0; k < 64; k += 8) d = i[t + k], p = i[t + k + 1], v = i[t + k + 2], y = i[t + k + 3], b = i[t + k + 4], w = i[t + k + 5], g = i[t + k + 6], m = i[t + k + 7], d *= n[k], 0 != (p | v | y | b | w | g | m) ? (p *= n[k + 1], v *= n[k + 2], y *= n[k + 3], b *= n[k + 4], w *= n[k + 5], g *= n[k + 6], m *= n[k + 7], s = (o = (o = C * d + 128 >> 8) + (s = C * b + 128 >> 8) + 1 >> 1) - s, U = (a = v) * D + (h = g) * _ + 128 >> 8, a = a * _ - h * D + 128 >> 8, u = (c = (c = I * (p - m) + 128 >> 8) + (u = w << 4) + 1 >> 1) - u, f = (l = (l = I * (p + m) + 128 >> 8) + (f = y << 4) + 1 >> 1) - f, h = (o = o + (h = U) + 1 >> 1) - h, a = (s = s + a + 1 >> 1) - a, U = c * S + l * A + 2048 >> 12, c = c * A - l * S + 2048 >> 12, l = U, U = f * T + u * E + 2048 >> 12, f = f * E - u * T + 2048 >> 12, u = U, r[k] = o + l, r[k + 7] = o - l, r[k + 1] = s + u, r[k + 6] = s - u, r[k + 2] = a + f, r[k + 5] = a - f, r[k + 3] = h + c, r[k + 4] = h - c) : (r[k] = U = C * d + 512 >> 10, r[k + 1] = U, r[k + 2] = U, r[k + 3] = U, r[k + 4] = U, r[k + 5] = U, r[k + 6] = U, r[k + 7] = U);for (var x = 0; x < 8; ++x) d = r[x], 0 != ((p = r[x + 8]) | (v = r[x + 16]) | (y = r[x + 24]) | (b = r[x + 32]) | (w = r[x + 40]) | (g = r[x + 48]) | (m = r[x + 56])) ? (U = (a = v) * D + (h = g) * _ + 2048 >> 12, a = a * _ - h * D + 2048 >> 12, h = U, u = (c = (c = I * (p - m) + 2048 >> 12) + (u = w) + 1 >> 1) - u, f = (l = (l = I * (p + m) + 2048 >> 12) + (f = y) + 1 >> 1) - f, U = c * S + l * A + 2048 >> 12, c = c * A - l * S + 2048 >> 12, l = U, U = f * T + u * E + 2048 >> 12, f = f * E - u * T + 2048 >> 12, p = (p = (s = (s = (o = 4112 + ((o = C * d + 2048 >> 12) + (s = C * b + 2048 >> 12) + 1 >> 1)) - s) + a + 1 >> 1) + (u = U)) < 16 ? 0 : 4080 <= p ? 255 : p >> 4, v = (v = (a = s - a) + f) < 16 ? 0 : 4080 <= v ? 255 : v >> 4, y = (y = (h = (o = o + h + 1 >> 1) - h) + c) < 16 ? 0 : 4080 <= y ? 255 : y >> 4, b = (b = h - c) < 16 ? 0 : 4080 <= b ? 255 : b >> 4, w = (w = a - f) < 16 ? 0 : 4080 <= w ? 255 : w >> 4, g = (g = s - u) < 16 ? 0 : 4080 <= g ? 255 : g >> 4, m = (m = o - l) < 16 ? 0 : 4080 <= m ? 255 : m >> 4, i[t + x] = d = (d = o + l) < 16 ? 0 : 4080 <= d ? 255 : d >> 4, i[t + x + 8] = p, i[t + x + 16] = v, i[t + x + 24] = y, i[t + x + 32] = b, i[t + x + 40] = w, i[t + x + 48] = g, i[t + x + 56] = m) : (i[t + x] = U = (U = C * d + 8192 >> 14) < -2040 ? 0 : 2024 <= U ? 255 : U + 2056 >> 4, i[t + x + 8] = U, i[t + x + 16] = U, i[t + x + 24] = U, i[t + x + 32] = U, i[t + x + 40] = U, i[t + x + 48] = U, i[t + x + 56] = U);
    }(t, getBlockBufferOffset(t, o, s), i);return t.blockData;
  }function findNextFileMarker(t, e, r) {
    function peekUint16(e) {
      return t[e] << 8 | t[e + 1];
    }var n = t.length - 1;var i = (r = void 0 === r ? e : r) < e ? r : e;if (n <= e) return null;r = peekUint16(e);if (65472 <= r && r <= 65534) return { invalid: null, marker: r, offset: e };var o = peekUint16(i);for (; !(65472 <= o && o <= 65534);) {
      if (++i >= n) return null;o = peekUint16(i);
    }return { invalid: r.toString(16), marker: o, offset: i };
  }return JpegImage.prototype = { width: 0, height: 0, parse: function (t, e) {
      var e = (void 0 === e ? {} : e).dnlScanLines,
          r = void 0 === e ? null : e;function readUint16() {
        var e = t[n] << 8 | t[n + 1];return n += 2, e;
      }var n = 0;var i = null;var o = null;var s, a;var h = 0;var c = [];var f = [],
          u = [];var l = readUint16();if (65496 !== l) throw new Error("SOI not found");l = readUint16();e: for (; 65497 !== l;) {
        var d, p;switch (l) {case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:
            var v = (O = F = void 0, F = readUint16(), (F = findNextFileMarker(t, O = n + F - 2, n)) && F.invalid && (warn("readDataBlock - incorrect length, current marker is: " + F.invalid), O = F.offset), O = t.subarray(n, O), n += O.length, O);65504 === l && 74 === v[0] && 70 === v[1] && 73 === v[2] && 70 === v[3] && 0 === v[4] && (i = { version: { major: v[5], minor: v[6] }, densityUnits: v[7], xDensity: v[8] << 8 | v[9], yDensity: v[10] << 8 | v[11], thumbWidth: v[12], thumbHeight: v[13], thumbData: v.subarray(14, 14 + 3 * v[12] * v[13]) }), 65518 === l && 65 === v[0] && 100 === v[1] && 111 === v[2] && 98 === v[3] && 101 === v[4] && (o = { version: v[5] << 8 | v[6], flags0: v[7] << 8 | v[8], flags1: v[9] << 8 | v[10], transformCode: v[11] });break;case 65499:
            var y = readUint16() + n - 2;for (; n < y;) {
              var b = t[n++];var w = new Uint16Array(64);if (b >> 4 == 0) for (p = 0; p < 64; p++) w[q[p]] = t[n++];else {
                if (b >> 4 != 1) throw new Error("DQT - invalid table spec");for (p = 0; p < 64; p++) w[q[p]] = readUint16();
              }c[15 & b] = w;
            }break;case 65472:case 65473:case 65474:
            if (s) throw new Error("Only single frame JPEGs supported");readUint16(), (s = {}).extended = 65473 === l, s.progressive = 65474 === l, s.precision = t[n++];var g = readUint16();s.scanLines = r || g, s.samplesPerLine = readUint16(), s.components = [], s.componentIds = {};var m,
                U = t[n++];var k = 0,
                x = 0;for (d = 0; d < U; d++) {
              m = t[n];var E = t[n + 1] >> 4;var T = 15 & t[n + 1];k < E && (k = E), x < T && (x = T);var A = t[n + 2];A = s.components.push({ h: E, v: T, quantizationId: A, quantizationTable: null }), s.componentIds[m] = A - 1, n += 3;
            }s.maxH = k, s.maxV = x, function (e) {
              var t = Math.ceil(e.samplesPerLine / 8 / e.maxH);var r = Math.ceil(e.scanLines / 8 / e.maxV);for (var n = 0; n < e.components.length; n++) {
                L = e.components[n];var i = Math.ceil(Math.ceil(e.samplesPerLine / 8) * L.h / e.maxH);var o = Math.ceil(Math.ceil(e.scanLines / 8) * L.v / e.maxV);var s = t * L.h;var a = r * L.v;L.blockData = new Int16Array(64 * a * (1 + s)), L.blocksPerLine = i, L.blocksPerColumn = o;
              }e.mcusPerLine = t, e.mcusPerColumn = r;
            }(s);break;case 65476:
            var S = readUint16();for (d = 2; d < S;) {
              var _ = t[n++];var D = new Uint8Array(16);var C = 0;for (p = 0; p < 16; p++, n++) C += D[p] = t[n];var I = new Uint8Array(C);for (p = 0; p < C; p++, n++) I[p] = t[n];d += 17 + C, (_ >> 4 == 0 ? u : f)[15 & _] = function (e, t) {
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
              }(D, I);
            }break;case 65501:
            readUint16(), a = readUint16();break;case 65498:
            var B = 1 == ++h && !r;readUint16();var P = t[n++];var L,
                M = [];for (d = 0; d < P; d++) {
              var z = s.componentIds[t[n++]];L = s.components[z];z = t[n++];L.huffmanTableDC = u[z >> 4], L.huffmanTableAC = f[15 & z], M.push(L);
            }var N = t[n++];v = t[n++];g = t[n++];try {
              var j = decodeScan(t, n, s, M, a, N, v, g >> 4, 15 & g, B);n += j;
            } catch (e) {
              if (e instanceof DNLMarkerError) return warn(e.message + " -- attempting to re-parse the JPEG image."), this.parse(t, { dnlScanLines: e.scanLines });if (e instanceof EOIMarkerError) {
                warn(e.message + " -- ignoring the rest of the image data.");break e;
              }throw e;
            }break;case 65500:
            n += 4;break;case 65535:
            255 !== t[n] && n--;break;default:
            if (255 === t[n - 3] && 192 <= t[n - 2] && t[n - 2] <= 254) {
              n -= 3;break;
            }B = findNextFileMarker(t, n - 2);if (B && B.invalid) {
              warn("JpegImage.parse - unexpected data, current marker is: " + B.invalid), n = B.offset;break;
            }throw new Error("unknown marker " + l.toString(16));}l = readUint16();
      }var F, O;for (this.width = s.samplesPerLine, this.height = s.scanLines, this.jfif = i, this.adobe = o, this.components = [], d = 0; d < s.components.length; d++) {
        var K = c[(L = s.components[d]).quantizationId];K && (L.quantizationTable = K), this.components.push({ output: buildComponentData(0, L), scaleX: L.h / s.maxH, scaleY: L.v / s.maxV, blocksPerLine: L.blocksPerLine, blocksPerColumn: L.blocksPerColumn });
      }this.numComponents = this.components.length;
    }, _getLinearizedBlockData: function (e, t, r, n, i) {
      void 0 === r && (r = !1), void 0 === n && (n = 0), void 0 === i && (i = null);var o = this.width / e,
          s = this.height / t;var a, h, c, f;var u, l, d, p, v;var y;var b = 0;var w;var g = this.components.length;var m = e * t * g;3 == g && r && (m = e * t * 4);var U = new ArrayBuffer(m + n);var k = new Uint8ClampedArray(U, n);var x = new Uint32Array(e);var E = 4294967288;if (3 == g && r) {
        for (d = 0; d < g; d++) {
          for (h = (a = this.components[d]).scaleX * o, c = a.scaleY * s, b = d, w = a.output, f = a.blocksPerLine + 1 << 3, u = 0; u < e; u++) x[u] = ((p = 0 | u * h) & E) << 3 | 7 & p;for (l = 0; l < t; l++) for (y = f * ((p = 0 | l * c) & E) | (7 & p) << 3, u = 0; u < e; u++) k[b] = w[y + x[u]], b += 4;
        }if (b = 3, null != i) {
          var T = 0;for (l = 0; l < t; l++) for (u = 0; u < e; u++) k[b] = i[T++], b += 4;
        } else for (l = 0; l < t; l++) for (u = 0; u < e; u++) k[b] = 255, b += 4;
      } else for (d = 0; d < g; d++) {
        for (h = (a = this.components[d]).scaleX * o, c = a.scaleY * s, b = d, w = a.output, f = a.blocksPerLine + 1 << 3, u = 0; u < e; u++) x[u] = ((p = 0 | u * h) & E) << 3 | 7 & p;for (l = 0; l < t; l++) for (y = f * ((p = 0 | l * c) & E) | (7 & p) << 3, u = 0; u < e; u++) k[b] = w[y + x[u]], b += g;
      }var A = this._decodeTransform;if (A = 4 === g && !A ? new Int32Array([-256, 255, -256, 255, -256, 255, -256, 255]) : A) if (3 == g && r) for (d = 0; d < m;) {
        for (v = p = 0; p < g; p++, d++, v += 2) k[d] = (k[d] * A[v] >> 8) + A[v + 1];d++;
      } else for (d = 0; d < m;) for (v = p = 0; p < g; p++, d++, v += 2) k[d] = (k[d] * A[v] >> 8) + A[v + 1];return k;
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
    }, getData: function (e, t, r, n, i, o) {
      if (void 0 === r && (r = !1), void 0 === n && (n = !1), void 0 === i && (i = 0), void 0 === o && (o = null), 4 < this.numComponents) throw new Error("Unsupported color mode");var s = this._getLinearizedBlockData(e, t, n, i, o);if (1 === this.numComponents && r) {
        var a = s.length;var h = new Uint8ClampedArray(3 * a);var c = 0;for (var f = 0; f < a; f++) {
          var u = s[f];h[c++] = u, h[c++] = u, h[c++] = u;
        }return h;
      }if (3 === this.numComponents && this._isColorConversionNeeded) return this._convertYccToRgb(s, n);if (4 === this.numComponents) {
        if (this._isColorConversionNeeded) return r ? this._convertYcckToRgb(s) : this._convertYcckToCmyk(s);if (r) return this._convertCmykToRgb(s);
      }return s;
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
  }, CstPngTools.decode = function (e) {
    var t = PngJob.create();var r = new ByteUtils();for (r.open(e), r.skip(8); 0 < r.bytesAvailable();) {
      var n = r.getUint32();var i = r.getUTF(4);i = CstPngTools.p_setHands[i];null != i ? i(t, r, n) : r.skip(n);r.getUint32();
    }r.close();var o = CstPngTools.p_decodePix(t);if (null == o) return null;var s = 0;var a = 0;var h = t.w;var c = t.h;var f = new ArrayBuffer(h * c * CstPngTools.p_Pix(t) + 8);var u = new Uint8Array(f, 8);e = new DataView(f, 0, 8);switch (e.setUint32(0, h), e.setUint32(4, c), t.colorT) {case 3:
        CstPngTools.p_byPale(t, o, u);break;case 2:
        switch (t.bits) {case 8:
            for (var l = 0; l < c; ++l) {
              a++;for (var d = 0; d < h; ++d) u[s++] = o[a++], u[s++] = o[a++], u[s++] = o[a++];
            }break;case 16:
            for (l = 0; l < c; ++l) {
              a++;for (d = 0; d < h; ++d) u[s++] = (o[a] << 8 | o[a + 1]) / 65535 * 255, a += 2, u[s++] = (o[a] << 8 | o[a + 1]) / 65535 * 255, a += 2, u[s++] = (o[a] << 8 | o[a + 1]) / 65535 * 255, a += 2;
            }}break;case 6:
        switch (t.bits) {case 8:
            for (l = 0; l < c; ++l) {
              a++;for (d = 0; d < h; ++d) u[s++] = o[a++], u[s++] = o[a++], u[s++] = o[a++], u[s++] = o[a++];
            }break;case 16:
            for (l = 0; l < c; ++l) {
              a++;for (d = 0; d < h; ++d) u[s++] = (o[a] << 8 | o[a + 1]) / 65535 * 255, a += 2, u[s++] = (o[a] << 8 | o[a + 1]) / 65535 * 255, a += 2, u[s++] = (o[a] << 8 | o[a + 1]) / 65535 * 255, a += 2, u[s++] = (o[a] << 8 | o[a + 1]) / 65535 * 255, a += 2;
            }}break;default:
        console.error("\u672a\u652f\u6301\u7684\u7c7b\u578b\uff1a", t.colorT, t.bits);}return PngJob.free(t), f;
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
  }, CstPngTools.p_decodeInterT = function (e) {
    var t = CstPngTools.p_mergeSeg(e.segments);var r = t.byteLength;var n = e.h;var i = CstPngTools.p_Bytes(e);var o = Math.floor((r - n) / n);var s = o + 1;var a = 0;var h = 0;var c = 0,
        f = 0,
        u = 0,
        l = 0,
        d = 0,
        p = 0,
        v = 0;for (; h < r;) switch (t[h++]) {case 0:
        h += o;break;case 1:
        for (h += i, a = i; a < o; ++a, ++h) t[h] = (t[h] + t[h - i]) % 256;break;case 2:
        if (1 != h) for (a = 0; a < o; ++a, ++h) t[h] = (t[h] + t[h - s]) % 256;break;case 3:
        if (1 == h) for (h += i, a = i; a < o; ++a, ++h) t[h] = (t[h] + (t[h - i] >> 1)) % 256;else {
          for (a = 0; a < i; ++a, ++h) t[h] = (t[h] + (t[h - s] >> 1)) % 256;for (a = i; a < o; ++a, ++h) t[h] = (t[h] + (t[h - i] + t[h - s] >> 1)) % 256;
        }break;case 4:
        if (1 == i) {
          if (1 == h) for (c = t[h++], a = 1; a < o; ++a, ++h) c = t[h] = (t[h] + (0 < c ? c : 0)) % 256;else for ((d = l = f = t[h - s]) < 0 && (d = -d), (v = l) < 0 && (v = -v), c = t[h] = t[h] + (!(l <= 0) && 0 <= v ? f : 0), h++, a = 1; a < o; ++a, ++h) (d = (l = c + (f = t[h - s]) - (u = t[h - s - 1])) - c) < 0 && (d = -d), (p = l - f) < 0 && (p = -p), (v = l - u) < 0 && (v = -v), c = t[h] = (t[h] + (d <= p && d <= v ? c : p <= v ? f : u)) % 256;
        } else if (1 == h) for (h += i, f = u = 0, a = i; a < o; ++a, ++h) (d = (l = (c = t[h - i]) + f - u) - c) < 0 && (d = -d), (p = l - f) < 0 && (p = -p), (v = l - u) < 0 && (v = -v), t[h] = (t[h] + (d <= p && d <= v ? c : p <= v ? f : u)) % 256;else {
          for (a = 0; a < i; ++a, ++h) (d = (l = (c = 0) + (f = t[h - s]) - (u = 0)) - c) < 0 && (d = -d), (p = l - f) < 0 && (p = -p), (v = l - u) < 0 && (v = -v), t[h] = (t[h] + (d <= p && d <= v ? c : p <= v ? f : u)) % 256;for (a = i; a < o; ++a, ++h) (d = (l = (c = t[h - i]) + (f = t[h - s]) - (u = t[h - s - i])) - c) < 0 && (d = -d), (p = l - f) < 0 && (p = -p), (v = l - u) < 0 && (v = -v), t[h] = (t[h] + (d <= p && d <= v ? c : p <= v ? f : u)) % 256;
        }break;default:
        console.log("\u89e3\u6790\u51fa\u9519\uff1a" + e.w + ", " + e.h + ", " + i), console.log(t.byteLength);}return t;
  }, CstPngTools.p_byPale = function (e, t, r) {
    var n = 0;var i = 0;var o = e.w;var s = e.h;var a = e.paleT;if (null != e.transT) switch (a = CstPngTools.p_Pale(e), e.bits) {case 1:
        for (var h = 0; h < s; ++h) {
          i++;for (var c = 0; c < o; ++c) {
            var f = 4 * (1 & t[i + (c >> 3)]);r[n++] = a[f], r[n++] = a[f + 1], r[n++] = a[f + 2], r[n++] = a[f + 3];
          }i += o + 7 >> 3;
        }break;case 2:
        for (h = 0; h < s; ++h) {
          i++;for (c = 0; c < o; ++c) {
            f = 4 * (3 & t[i + (c >> 2)]);r[n++] = a[f], r[n++] = a[f + 1], r[n++] = a[f + 2], r[n++] = a[f + 3];
          }i += o + 3 >> 2;
        }break;case 4:
        for (h = 0; h < s; ++h) {
          i++;for (c = 0; c < o; ++c) {
            f = 4 * (15 & t[i + (c >> 1)]);r[n++] = a[f], r[n++] = a[f + 1], r[n++] = a[f + 2], r[n++] = a[f + 3];
          }i += o + 1 >> 1;
        }break;case 8:
        for (h = 0; h < s; ++h) {
          i++;for (c = 0; c < o; ++c) {
            f = 4 * t[i++];r[n++] = a[f], r[n++] = a[f + 1], r[n++] = a[f + 2], r[n++] = a[f + 3];
          }
        }} else switch (e.bits) {case 1:
        for (h = 0; h < s; ++h) {
          i++;for (c = 0; c < o; ++c) {
            f = 3 * (1 & t[i + (c >> 3)]);r[n++] = a[f], r[n++] = a[f + 1], r[n++] = a[f + 2];
          }i += o + 7 >> 3;
        }break;case 2:
        for (h = 0; h < s; ++h) {
          i++;for (c = 0; c < o; ++c) {
            f = 3 * (3 & t[i + (c >> 2)]);r[n++] = a[f], r[n++] = a[f + 1], r[n++] = a[f + 2];
          }i += o + 3 >> 2;
        }break;case 4:
        for (h = 0; h < s; ++h) {
          i++;for (c = 0; c < o; ++c) {
            f = 3 * (15 & t[i + (c >> 1)]);r[n++] = a[f], r[n++] = a[f + 1], r[n++] = a[f + 2];
          }i += o + 1 >> 1;
        }break;case 8:
        for (h = 0; h < s; ++h) {
          i++;for (c = 0; c < o; ++c) {
            f = 3 * t[i++];r[n++] = a[f], r[n++] = a[f + 1], r[n++] = a[f + 2];
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
    if (void 0 === t && (t = null), this.isPng(e)) return CstPngTools.decode(e);var r = new JpegImage();r.parse(e);var n = r.width;var i = r.height;e = DecodeTools.p_needAlpha(n, i) || null != t;e = r.getData(n, i, !0, e, 8, t);t = new DataView(e.buffer);return t.setUint32(0, n), t.setUint32(4, i), e.buffer;
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