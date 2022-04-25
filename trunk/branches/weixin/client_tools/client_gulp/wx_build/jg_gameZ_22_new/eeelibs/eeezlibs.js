"use strict";
!function () {
  var C$99o = window;function r(C$99e, C$99t) {
    var C$99r = C$99e.split("."),
        C$99n = C$99o;C$99r[0] in C$99n || !C$99n.execScript || C$99n.execScript("var " + C$99r[0]);for (var C$99i; C$99r.length && (C$99i = C$99r.shift());) C$99r.length || void 0 === C$99t ? C$99n = C$99n[C$99i] || (C$99n[C$99i] = {}) : C$99n[C$99i] = C$99t;
  }var C$99m = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array && "undefined" != typeof DataView;function v(C$99e) {
    var C$99t,
        C$99r,
        C$99n,
        C$99i,
        C$99o,
        C$99s,
        C$99f,
        C$99a,
        C$99h,
        C$99u,
        C$99l = C$99e.length,
        C$99c = 0,
        C$99d = Number.POSITIVE_INFINITY;for (C$99a = 0; C$99a < C$99l; ++C$99a) C$99e[C$99a] > C$99c && (C$99c = C$99e[C$99a]), C$99e[C$99a] < C$99d && (C$99d = C$99e[C$99a]);for (C$99t = 1 << C$99c, C$99r = new (C$99m ? Uint32Array : Array)(C$99t), C$99n = 1, C$99i = 0, C$99o = 2; C$99n <= C$99c;) {
      for (C$99a = 0; C$99a < C$99l; ++C$99a) if (C$99e[C$99a] === C$99n) {
        for (C$99f = C$99i, C$99h = C$99s = 0; C$99h < C$99n; ++C$99h) C$99s = C$99s << 1 | 1 & C$99f, C$99f >>= 1;for (C$99u = C$99n << 16 | C$99a, C$99h = C$99s; C$99h < C$99t; C$99h += C$99o) C$99r[C$99h] = C$99u;++C$99i;
      }++C$99n, C$99i <<= 1, C$99o <<= 1;
    }return [C$99r, C$99c, C$99d];
  }function w(C$99e, C$99t) {
    switch (this.g = [], this.h = 32768, this.d = this.f = this.a = this.l = 0, this.input = C$99m ? new Uint8Array(C$99e) : C$99e, this.m = !1, this.i = 1, this.r = !1, C$99t ? (C$99t.index && (this.a = C$99t.index), C$99t.bufferSize && (this.h = C$99t.bufferSize), C$99t.bufferType && (this.i = C$99t.bufferType), C$99t.resize && (this.r = C$99t.resize)) : C$99t = {}, this.i) {case 0:
        this.b = 32768, this.c = new (C$99m ? Uint8Array : Array)(32768 + this.h + 258);break;case 1:
        this.b = 0, this.c = new (C$99m ? Uint8Array : Array)(this.h), this.e = this.z, this.n = this.v, this.j = this.w;break;default:
        throw Error("invalid inflate mode");}
  }var C$99i = 0,
      C$99s = 1;w.prototype.k = function () {
    for (; !this.m;) {
      var C$99f = C(this, 3);switch (1 & C$99f && (this.m = !0), C$99f >>>= 1) {case 0:
          var C$99e = this.input,
              C$99t = this.a,
              C$99r = this.c,
              C$99n = this.b,
              C$99i = C$99e.length,
              C$99o = void 0,
              C$99u = C$99r.length,
              C$99s = void 0;if (this.d = this.f = 0, C$99i <= C$99t + 1) throw Error("invalid uncompressed block header: LEN");if (C$99o = C$99e[C$99t++] | C$99e[C$99t++] << 8, C$99i <= C$99t + 1) throw Error("invalid uncompressed block header: NLEN");if (C$99o === ~(C$99e[C$99t++] | C$99e[C$99t++] << 8)) throw Error("invalid uncompressed block header: length verify");if (C$99t + C$99o > C$99e.length) throw Error("input buffer is broken");switch (this.i) {case 0:
              for (; C$99n + C$99o > C$99r.length;) {
                if (C$99o -= C$99s = C$99u - C$99n, C$99m) C$99r.set(C$99e.subarray(C$99t, C$99t + C$99s), C$99n), C$99n += C$99s, C$99t += C$99s;else for (; C$99s--;) C$99r[C$99n++] = C$99e[C$99t++];this.b = C$99n, C$99r = this.e(), C$99n = this.b;
              }break;case 1:
              for (; C$99n + C$99o > C$99r.length;) C$99r = this.e({ p: 2 });break;default:
              throw Error("invalid inflate mode");}if (C$99m) C$99r.set(C$99e.subarray(C$99t, C$99t + C$99o), C$99n), C$99n += C$99o, C$99t += C$99o;else for (; C$99o--;) C$99r[C$99n++] = C$99e[C$99t++];this.a = C$99t, this.b = C$99n, this.c = C$99r;break;case 1:
          this.j(C$99k, C$99x);break;case 2:
          for (var C$99l, C$99d, C$99p, C$99v, C$99i = C(this, 5) + 257, C$99y = C(this, 5) + 1, C$99b = C(this, 4) + 4, C$99w = new (C$99m ? Uint8Array : Array)(C$99U.length), C$99a = void 0, C$99g = void 0, C$99h = void 0, C$99c = void 0, C$99c = 0; C$99c < C$99b; ++C$99c) C$99w[C$99U[C$99c]] = C(this, 3);if (!C$99m) for (C$99c = C$99b, C$99b = C$99w.length; C$99c < C$99b; ++C$99c) C$99w[C$99U[C$99c]] = 0;for (C$99l = v(C$99w), C$99a = new (C$99m ? Uint8Array : Array)(C$99i + C$99y), C$99c = 0, C$99v = C$99i + C$99y; C$99c < C$99v;) switch (C$99p = E(this, C$99l), C$99p) {case 16:
              for (C$99h = 3 + C(this, 2); C$99h--;) C$99a[C$99c++] = C$99g;break;case 17:
              for (C$99h = 3 + C(this, 3); C$99h--;) C$99a[C$99c++] = 0;C$99g = 0;break;case 18:
              for (C$99h = 11 + C(this, 7); C$99h--;) C$99a[C$99c++] = 0;C$99g = 0;break;default:
              C$99g = C$99a[C$99c++] = C$99p;}C$99y = v(C$99m ? C$99a.subarray(0, C$99i) : C$99a.slice(0, C$99i)), C$99d = v(C$99m ? C$99a.subarray(C$99i) : C$99a.slice(C$99i)), this.j(C$99y, C$99d);break;default:
          throw Error("unknown BTYPE: " + C$99f);}
    }return this.n();
  };var C$99e,
      C$99a,
      C$99t = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
      C$99U = C$99m ? new Uint16Array(C$99t) : C$99t,
      C$99t = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258],
      C$99f = C$99m ? new Uint16Array(C$99t) : C$99t,
      C$99t = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0],
      C$99c = C$99m ? new Uint8Array(C$99t) : C$99t,
      C$99t = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577],
      C$99u = C$99m ? new Uint16Array(C$99t) : C$99t,
      C$99t = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
      C$99l = C$99m ? new Uint8Array(C$99t) : C$99t,
      C$99h = new (C$99m ? Uint8Array : Array)(288);for (C$99e = 0, C$99a = C$99h.length; C$99e < C$99a; ++C$99e) C$99h[C$99e] = C$99e <= 143 ? 8 : C$99e <= 255 ? 9 : C$99e <= 279 ? 7 : 8;var C$99d,
      C$99p,
      C$99k = v(C$99h),
      C$99v = new (C$99m ? Uint8Array : Array)(30);for (C$99d = 0, C$99p = C$99v.length; C$99d < C$99p; ++C$99d) C$99v[C$99d] = 5;var C$99x = v(C$99v);function C(C$99e, C$99t) {
    for (var C$99r, C$99n = C$99e.f, C$99i = C$99e.d, C$99o = C$99e.input, C$99s = C$99e.a, C$99a = C$99o.length; C$99i < C$99t;) {
      if (C$99a <= C$99s) throw Error("input buffer is broken");C$99n |= C$99o[C$99s++] << C$99i, C$99i += 8;
    }return C$99r = C$99n & (1 << C$99t) - 1, C$99e.f = C$99n >>> C$99t, C$99e.d = C$99i - C$99t, C$99e.a = C$99s, C$99r;
  }function E(C$99e, C$99t) {
    for (var C$99r = C$99e.f, C$99n = C$99e.d, C$99i = C$99e.input, C$99o = C$99e.a, C$99s = C$99i.length, C$99a = C$99t[0], C$99h = C$99t[1]; C$99n < C$99h && !(C$99s <= C$99o);) C$99r |= C$99i[C$99o++] << C$99n, C$99n += 8;if (C$99n < (C$99a = (C$99t = C$99a[C$99r & (1 << C$99h) - 1]) >>> 16)) throw Error("invalid code length: " + C$99a);return C$99e.f = C$99r >> C$99a, C$99e.d = C$99n - C$99a, C$99e.a = C$99o, 65535 & C$99t;
  }function W(C$99e, C$99t) {
    var C$99r, C$99n;if (this.input = C$99e, this.a = 0, C$99t ? (C$99t.index && (this.a = C$99t.index), C$99t.verify && (this.A = C$99t.verify)) : C$99t = {}, C$99r = C$99e[this.a++], C$99n = C$99e[this.a++], (15 & C$99r) !== C$99y) throw Error("unsupported compression method");if (this.method = C$99y, 0 != ((C$99r << 8) + C$99n) % 31) throw Error("invalid fcheck flag:" + ((C$99r << 8) + C$99n) % 31);if (32 & C$99n) throw Error("fdict flag is not supported");this.q = new w(C$99e, { index: this.a, bufferSize: C$99t.bufferSize, bufferType: C$99t.bufferType, resize: C$99t.resize });
  }w.prototype.j = function (C$99e, C$99t) {
    var C$99r = this.c,
        C$99n = this.b;this.o = C$99e;for (var C$99i, C$99o, C$99s, C$99a, C$99h = C$99r.length - 258; 256 !== (C$99i = E(this, C$99e));) if (C$99i < 256) C$99h <= C$99n && (this.b = C$99n, C$99r = this.e(), C$99n = this.b), C$99r[C$99n++] = C$99i;else for (C$99a = C$99f[C$99o = C$99i - 257], 0 < C$99c[C$99o] && (C$99a += C(this, C$99c[C$99o])), C$99i = E(this, C$99t), C$99s = C$99u[C$99i], 0 < C$99l[C$99i] && (C$99s += C(this, C$99l[C$99i])), C$99h <= C$99n && (this.b = C$99n, C$99r = this.e(), C$99n = this.b); C$99a--;) C$99r[C$99n] = C$99r[C$99n++ - C$99s];for (; 8 <= this.d;) this.d -= 8, this.a--;this.b = C$99n;
  }, w.prototype.w = function (C$99e, C$99t) {
    var C$99r = this.c,
        C$99n = this.b;this.o = C$99e;for (var C$99i, C$99o, C$99s, C$99a, C$99h = C$99r.length; 256 !== (C$99i = E(this, C$99e));) if (C$99i < 256) C$99h <= C$99n && (C$99h = (C$99r = this.e()).length), C$99r[C$99n++] = C$99i;else for (C$99a = C$99f[C$99o = C$99i - 257], 0 < C$99c[C$99o] && (C$99a += C(this, C$99c[C$99o])), C$99i = E(this, C$99t), C$99s = C$99u[C$99i], 0 < C$99l[C$99i] && (C$99s += C(this, C$99l[C$99i])), C$99h < C$99n + C$99a && (C$99h = (C$99r = this.e()).length); C$99a--;) C$99r[C$99n] = C$99r[C$99n++ - C$99s];for (; 8 <= this.d;) this.d -= 8, this.a--;this.b = C$99n;
  }, w.prototype.e = function () {
    var C$99e,
        C$99t,
        C$99r = new (C$99m ? Uint8Array : Array)(this.b - 32768),
        C$99n = this.b - 32768,
        C$99i = this.c;if (C$99m) C$99r.set(C$99i.subarray(32768, C$99r.length));else for (C$99e = 0, C$99t = C$99r.length; C$99e < C$99t; ++C$99e) C$99r[C$99e] = C$99i[C$99e + 32768];if (this.g.push(C$99r), this.l += C$99r.length, C$99m) C$99i.set(C$99i.subarray(C$99n, 32768 + C$99n));else for (C$99e = 0; C$99e < 32768; ++C$99e) C$99i[C$99e] = C$99i[C$99n + C$99e];return this.b = 32768, C$99i;
  }, w.prototype.z = function (C$99e) {
    var C$99t,
        C$99r = this.input.length / this.a + 1 | 0,
        C$99n = this.input,
        C$99i = this.c;return C$99e && ("number" == typeof C$99e.p && (C$99r = C$99e.p), "number" == typeof C$99e.u && (C$99r += C$99e.u)), C$99n = C$99r < 2 ? (C$99e = (C$99n.length - this.a) / this.o[2] / 2 * 258 | 0) < C$99i.length ? C$99i.length + C$99e : C$99i.length << 1 : C$99i.length * C$99r, C$99m ? (C$99t = new Uint8Array(C$99n)).set(C$99i) : C$99t = C$99i, this.c = C$99t;
  }, w.prototype.n = function () {
    var C$99e,
        C$99t,
        C$99r,
        C$99n,
        C$99i,
        C$99o = 0,
        C$99s = this.c,
        C$99a = this.g,
        C$99h = new (C$99m ? Uint8Array : Array)(this.l + (this.b - 32768));if (0 === C$99a.length) return C$99m ? this.c.subarray(32768, this.b) : this.c.slice(32768, this.b);for (C$99t = 0, C$99r = C$99a.length; C$99t < C$99r; ++C$99t) for (C$99n = 0, C$99i = (C$99e = C$99a[C$99t]).length; C$99n < C$99i; ++C$99n) C$99h[C$99o++] = C$99e[C$99n];for (C$99t = 32768, C$99r = this.b; C$99t < C$99r; ++C$99t) C$99h[C$99o++] = C$99s[C$99t];return this.g = [], this.buffer = C$99h;
  }, w.prototype.v = function () {
    var C$99e,
        C$99t = this.b;return C$99m ? this.r ? (C$99e = new Uint8Array(C$99t)).set(this.c.subarray(0, C$99t)) : C$99e = this.c.subarray(0, C$99t) : (this.c.length > C$99t && (this.c.length = C$99t), C$99e = this.c), this.buffer = C$99e;
  }, W.prototype.k = function () {
    var C$99e,
        C$99t = this.input;if (C$99e = this.q.k(), this.a = this.q.a, this.A) {
      C$99t = (C$99t[this.a++] << 24 | C$99t[this.a++] << 16 | C$99t[this.a++] << 8 | C$99t[this.a++]) >>> 0;var C$99r = C$99e;if ("string" == typeof C$99r) {
        var C$99n,
            C$99i,
            C$99o = C$99r.split("");for (C$99n = 0, C$99i = C$99o.length; C$99n < C$99i; C$99n++) C$99o[C$99n] = (255 & C$99o[C$99n].charCodeAt(0)) >>> 0;C$99r = C$99o;
      }for (var C$99s, C$99a = 1, C$99h = 0, C$99c = C$99r.length, C$99f = 0; 0 < C$99c;) {
        for (C$99c -= C$99s = 1024 < C$99c ? 1024 : C$99c; C$99h += C$99a += C$99r[C$99f++], --C$99s;);C$99a %= 65521, C$99h %= 65521;
      }if (C$99t != (C$99h << 16 | C$99a) >>> 0) throw Error("invalid adler-32 checksum");
    }return C$99e;
  };var C$99y = 8;r("Zlib.Inflate", W), r("Zlib.Inflate.prototype.decompress", W.prototype.k);var C$99r,
      C$99b,
      C$99n,
      C$99w,
      C$99g = { ADAPTIVE: C$99s, BLOCK: C$99i };if (Object.keys) C$99r = Object.keys(C$99g);else for (C$99b in C$99r = [], C$99n = 0, C$99g) C$99r[C$99n++] = C$99b;for (C$99n = 0, C$99w = C$99r.length; C$99n < C$99w; ++C$99n) r("Zlib.Inflate.BufferType." + (C$99b = C$99r[C$99n]), C$99g[C$99b]);
}.call(this), function () {
  function l(C$99e) {
    throw C$99e;
  }var C$99o = window;function v(C$99e, C$99t) {
    var C$99r = C$99e.split("."),
        C$99n = C$99o;C$99r[0] in C$99n || !C$99n.execScript || C$99n.execScript("var " + C$99r[0]);for (var C$99i; C$99r.length && (C$99i = C$99r.shift());) C$99r.length || void 0 === C$99t ? C$99n = C$99n[C$99i] || (C$99n[C$99i] = {}) : C$99n[C$99i] = C$99t;
  }var C$99m = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array && "undefined" != typeof DataView;var C$99n;for (new (C$99m ? Uint8Array : Array)(256), C$99n = 0; C$99n < 256; ++C$99n) for (var C$99i = (C$99i = C$99n) >>> 1; C$99i; C$99i >>>= 1) 0;var C$99e = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117],
      C$99p = C$99m ? new Uint32Array(C$99e) : C$99e;var C$99s;function D(C$99e) {
    var C$99t,
        C$99r,
        C$99n,
        C$99i,
        C$99o,
        C$99s,
        C$99f,
        C$99a,
        C$99h,
        C$99u,
        C$99l = C$99e.length,
        C$99c = 0,
        C$99d = Number.POSITIVE_INFINITY;for (C$99a = 0; C$99a < C$99l; ++C$99a) C$99e[C$99a] > C$99c && (C$99c = C$99e[C$99a]), C$99e[C$99a] < C$99d && (C$99d = C$99e[C$99a]);for (C$99t = 1 << C$99c, C$99r = new (C$99m ? Uint32Array : Array)(C$99t), C$99n = 1, C$99i = 0, C$99o = 2; C$99n <= C$99c;) {
      for (C$99a = 0; C$99a < C$99l; ++C$99a) if (C$99e[C$99a] === C$99n) {
        for (C$99f = C$99i, C$99h = C$99s = 0; C$99h < C$99n; ++C$99h) C$99s = C$99s << 1 | 1 & C$99f, C$99f >>= 1;for (C$99u = C$99n << 16 | C$99a, C$99h = C$99s; C$99h < C$99t; C$99h += C$99o) C$99r[C$99h] = C$99u;++C$99i;
      }++C$99n, C$99i <<= 1, C$99o <<= 1;
    }return [C$99r, C$99c, C$99d];
  }void 0 !== C$99o.Uint8Array && (String.fromCharCode.apply = (C$99s = String.fromCharCode.apply, function (C$99e, C$99t) {
    return C$99s.call(String.fromCharCode, C$99e, Array.prototype.slice.call(C$99t));
  }));var C$99t,
      C$99a = [];for (C$99t = 0; C$99t < 288; C$99t++) switch (!0) {case C$99t <= 143:
      C$99a.push([C$99t + 48, 8]);break;case C$99t <= 255:
      C$99a.push([C$99t - 144 + 400, 9]);break;case C$99t <= 279:
      C$99a.push([C$99t - 256, 7]);break;case C$99t <= 287:
      C$99a.push([C$99t - 280 + 192, 8]);break;default:
      l("invalid literal: " + C$99t);}var C$99e = function () {
    var C$99e,
        C$99t,
        C$99r = [];for (C$99e = 3; C$99e <= 258; C$99e++) C$99t = function (C$99e) {
      switch (!0) {case 3 === C$99e:
          return [257, C$99e - 3, 0];case 4 === C$99e:
          return [258, C$99e - 4, 0];case 5 === C$99e:
          return [259, C$99e - 5, 0];case 6 === C$99e:
          return [260, C$99e - 6, 0];case 7 === C$99e:
          return [261, C$99e - 7, 0];case 8 === C$99e:
          return [262, C$99e - 8, 0];case 9 === C$99e:
          return [263, C$99e - 9, 0];case 10 === C$99e:
          return [264, C$99e - 10, 0];case C$99e <= 12:
          return [265, C$99e - 11, 1];case C$99e <= 14:
          return [266, C$99e - 13, 1];case C$99e <= 16:
          return [267, C$99e - 15, 1];case C$99e <= 18:
          return [268, C$99e - 17, 1];case C$99e <= 22:
          return [269, C$99e - 19, 2];case C$99e <= 26:
          return [270, C$99e - 23, 2];case C$99e <= 30:
          return [271, C$99e - 27, 2];case C$99e <= 34:
          return [272, C$99e - 31, 2];case C$99e <= 42:
          return [273, C$99e - 35, 3];case C$99e <= 50:
          return [274, C$99e - 43, 3];case C$99e <= 58:
          return [275, C$99e - 51, 3];case C$99e <= 66:
          return [276, C$99e - 59, 3];case C$99e <= 82:
          return [277, C$99e - 67, 4];case C$99e <= 98:
          return [278, C$99e - 83, 4];case C$99e <= 114:
          return [279, C$99e - 99, 4];case C$99e <= 130:
          return [280, C$99e - 115, 4];case C$99e <= 162:
          return [281, C$99e - 131, 5];case C$99e <= 194:
          return [282, C$99e - 163, 5];case C$99e <= 226:
          return [283, C$99e - 195, 5];case C$99e <= 257:
          return [284, C$99e - 227, 5];case 258 === C$99e:
          return [285, C$99e - 258, 0];default:
          l("invalid length: " + C$99e);}
    }(C$99e), C$99r[C$99e] = C$99t[2] << 24 | C$99t[1] << 16 | C$99t[0];return C$99r;
  }();function I(C$99e, C$99t) {
    switch (this.l = [], this.m = 32768, this.d = this.f = this.c = this.t = 0, this.input = C$99m ? new Uint8Array(C$99e) : C$99e, this.u = !1, this.n = 1, this.K = !1, C$99t ? (C$99t.index && (this.c = C$99t.index), C$99t.bufferSize && (this.m = C$99t.bufferSize), C$99t.bufferType && (this.n = C$99t.bufferType), C$99t.resize && (this.K = C$99t.resize)) : C$99t = {}, this.n) {case 0:
        this.a = 32768, this.b = new (C$99m ? Uint8Array : Array)(32768 + this.m + 258);break;case 1:
        this.a = 0, this.b = new (C$99m ? Uint8Array : Array)(this.m), this.e = this.W, this.B = this.R, this.q = this.V;break;default:
        l(Error("invalid inflate mode"));}
  }C$99m && new Uint32Array(C$99e);I.prototype.r = function () {
    for (; !this.u;) {
      var C$99f = K(this, 3);switch (1 & C$99f && (this.u = !0), C$99f >>>= 1) {case 0:
          var C$99e = this.input,
              C$99t = this.c,
              C$99r = this.b,
              C$99n = this.a,
              C$99i = C$99e.length,
              C$99o = void 0,
              C$99u = C$99r.length,
              C$99s = void 0;switch (this.d = this.f = 0, C$99i <= C$99t + 1 && l(Error("invalid uncompressed block header: LEN")), C$99o = C$99e[C$99t++] | C$99e[C$99t++] << 8, C$99i <= C$99t + 1 && l(Error("invalid uncompressed block header: NLEN")), C$99o === ~(C$99e[C$99t++] | C$99e[C$99t++] << 8) && l(Error("invalid uncompressed block header: length verify")), C$99t + C$99o > C$99e.length && l(Error("input buffer is broken")), this.n) {case 0:
              for (; C$99n + C$99o > C$99r.length;) {
                if (C$99o -= C$99s = C$99u - C$99n, C$99m) C$99r.set(C$99e.subarray(C$99t, C$99t + C$99s), C$99n), C$99n += C$99s, C$99t += C$99s;else for (; C$99s--;) C$99r[C$99n++] = C$99e[C$99t++];this.a = C$99n, C$99r = this.e(), C$99n = this.a;
              }break;case 1:
              for (; C$99n + C$99o > C$99r.length;) C$99r = this.e({ H: 2 });break;default:
              l(Error("invalid inflate mode"));}if (C$99m) C$99r.set(C$99e.subarray(C$99t, C$99t + C$99o), C$99n), C$99n += C$99o, C$99t += C$99o;else for (; C$99o--;) C$99r[C$99n++] = C$99e[C$99t++];this.c = C$99t, this.a = C$99n, this.b = C$99r;break;case 1:
          this.q(C$99k, C$99x);break;case 2:
          for (var C$99l, C$99d, C$99p, C$99v, C$99i = K(this, 5) + 257, C$99y = K(this, 5) + 1, C$99b = K(this, 4) + 4, C$99w = new (C$99m ? Uint8Array : Array)(C$99U.length), C$99a = void 0, C$99g = void 0, C$99h = void 0, C$99c = void 0, C$99c = 0; C$99c < C$99b; ++C$99c) C$99w[C$99U[C$99c]] = K(this, 3);if (!C$99m) for (C$99c = C$99b, C$99b = C$99w.length; C$99c < C$99b; ++C$99c) C$99w[C$99U[C$99c]] = 0;for (C$99l = D(C$99w), C$99a = new (C$99m ? Uint8Array : Array)(C$99i + C$99y), C$99c = 0, C$99v = C$99i + C$99y; C$99c < C$99v;) switch (C$99p = M(this, C$99l), C$99p) {case 16:
              for (C$99h = 3 + K(this, 2); C$99h--;) C$99a[C$99c++] = C$99g;break;case 17:
              for (C$99h = 3 + K(this, 3); C$99h--;) C$99a[C$99c++] = 0;C$99g = 0;break;case 18:
              for (C$99h = 11 + K(this, 7); C$99h--;) C$99a[C$99c++] = 0;C$99g = 0;break;default:
              C$99g = C$99a[C$99c++] = C$99p;}C$99y = D(C$99m ? C$99a.subarray(0, C$99i) : C$99a.slice(0, C$99i)), C$99d = D(C$99m ? C$99a.subarray(C$99i) : C$99a.slice(C$99i)), this.q(C$99y, C$99d);break;default:
          l(Error("unknown BTYPE: " + C$99f));}
    }return this.B();
  };var C$99r,
      C$99h,
      C$99e = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
      C$99U = C$99m ? new Uint16Array(C$99e) : C$99e,
      C$99e = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258],
      C$99c = C$99m ? new Uint16Array(C$99e) : C$99e,
      C$99e = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0],
      C$99f = C$99m ? new Uint8Array(C$99e) : C$99e,
      C$99e = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577],
      C$99l = C$99m ? new Uint16Array(C$99e) : C$99e,
      C$99e = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
      C$99d = C$99m ? new Uint8Array(C$99e) : C$99e,
      C$99v = new (C$99m ? Uint8Array : Array)(288);for (C$99r = 0, C$99h = C$99v.length; C$99r < C$99h; ++C$99r) C$99v[C$99r] = C$99r <= 143 ? 8 : C$99r <= 255 ? 9 : C$99r <= 279 ? 7 : 8;var C$99y,
      C$99b,
      C$99k = D(C$99v),
      C$99w = new (C$99m ? Uint8Array : Array)(30);for (C$99y = 0, C$99b = C$99w.length; C$99y < C$99b; ++C$99y) C$99w[C$99y] = 5;var C$99x = D(C$99w);function K(C$99e, C$99t) {
    for (var C$99r, C$99n = C$99e.f, C$99i = C$99e.d, C$99o = C$99e.input, C$99s = C$99e.c, C$99a = C$99o.length; C$99i < C$99t;) C$99a <= C$99s && l(Error("input buffer is broken")), C$99n |= C$99o[C$99s++] << C$99i, C$99i += 8;return C$99r = C$99n & (1 << C$99t) - 1, C$99e.f = C$99n >>> C$99t, C$99e.d = C$99i - C$99t, C$99e.c = C$99s, C$99r;
  }function M(C$99e, C$99t) {
    for (var C$99r = C$99e.f, C$99n = C$99e.d, C$99i = C$99e.input, C$99o = C$99e.c, C$99s = C$99i.length, C$99a = C$99t[0], C$99h = C$99t[1]; C$99n < C$99h && !(C$99s <= C$99o);) C$99r |= C$99i[C$99o++] << C$99n, C$99n += 8;return C$99n < (C$99a = (C$99t = C$99a[C$99r & (1 << C$99h) - 1]) >>> 16) && l(Error("invalid code length: " + C$99a)), C$99e.f = C$99r >> C$99a, C$99e.d = C$99n - C$99a, C$99e.c = C$99o, 65535 & C$99t;
  }function U(C$99e) {
    C$99e = C$99e || {}, this.files = [], this.v = C$99e.comment;
  }function V(C$99e, C$99t) {
    C$99t = C$99t || {}, this.input = C$99m && C$99e instanceof Array ? new Uint8Array(C$99e) : C$99e, this.c = 0, this.ba = C$99t.verify || !1, this.j = C$99t.password;
  }(C$99e = I.prototype).q = function (C$99e, C$99t) {
    var C$99r = this.b,
        C$99n = this.a;this.C = C$99e;for (var C$99i, C$99o, C$99s, C$99a, C$99h = C$99r.length - 258; 256 !== (C$99i = M(this, C$99e));) if (C$99i < 256) C$99h <= C$99n && (this.a = C$99n, C$99r = this.e(), C$99n = this.a), C$99r[C$99n++] = C$99i;else for (C$99a = C$99c[C$99o = C$99i - 257], 0 < C$99f[C$99o] && (C$99a += K(this, C$99f[C$99o])), C$99i = M(this, C$99t), C$99s = C$99l[C$99i], 0 < C$99d[C$99i] && (C$99s += K(this, C$99d[C$99i])), C$99h <= C$99n && (this.a = C$99n, C$99r = this.e(), C$99n = this.a); C$99a--;) C$99r[C$99n] = C$99r[C$99n++ - C$99s];for (; 8 <= this.d;) this.d -= 8, this.c--;this.a = C$99n;
  }, C$99e.V = function (C$99e, C$99t) {
    var C$99r = this.b,
        C$99n = this.a;this.C = C$99e;for (var C$99i, C$99o, C$99s, C$99a, C$99h = C$99r.length; 256 !== (C$99i = M(this, C$99e));) if (C$99i < 256) C$99h <= C$99n && (C$99h = (C$99r = this.e()).length), C$99r[C$99n++] = C$99i;else for (C$99a = C$99c[C$99o = C$99i - 257], 0 < C$99f[C$99o] && (C$99a += K(this, C$99f[C$99o])), C$99i = M(this, C$99t), C$99s = C$99l[C$99i], 0 < C$99d[C$99i] && (C$99s += K(this, C$99d[C$99i])), C$99h < C$99n + C$99a && (C$99h = (C$99r = this.e()).length); C$99a--;) C$99r[C$99n] = C$99r[C$99n++ - C$99s];for (; 8 <= this.d;) this.d -= 8, this.c--;this.a = C$99n;
  }, C$99e.e = function () {
    var C$99e,
        C$99t,
        C$99r = new (C$99m ? Uint8Array : Array)(this.a - 32768),
        C$99n = this.a - 32768,
        C$99i = this.b;if (C$99m) C$99r.set(C$99i.subarray(32768, C$99r.length));else for (C$99e = 0, C$99t = C$99r.length; C$99e < C$99t; ++C$99e) C$99r[C$99e] = C$99i[C$99e + 32768];if (this.l.push(C$99r), this.t += C$99r.length, C$99m) C$99i.set(C$99i.subarray(C$99n, 32768 + C$99n));else for (C$99e = 0; C$99e < 32768; ++C$99e) C$99i[C$99e] = C$99i[C$99n + C$99e];return this.a = 32768, C$99i;
  }, C$99e.W = function (C$99e) {
    var C$99t,
        C$99r = this.input.length / this.c + 1 | 0,
        C$99n = this.input,
        C$99i = this.b;return C$99e && ("number" == typeof C$99e.H && (C$99r = C$99e.H), "number" == typeof C$99e.P && (C$99r += C$99e.P)), C$99n = C$99r < 2 ? (C$99e = (C$99n.length - this.c) / this.C[2] / 2 * 258 | 0) < C$99i.length ? C$99i.length + C$99e : C$99i.length << 1 : C$99i.length * C$99r, C$99m ? (C$99t = new Uint8Array(C$99n)).set(C$99i) : C$99t = C$99i, this.b = C$99t;
  }, C$99e.B = function () {
    var C$99e,
        C$99t,
        C$99r,
        C$99n,
        C$99i,
        C$99o = 0,
        C$99s = this.b,
        C$99a = this.l,
        C$99h = new (C$99m ? Uint8Array : Array)(this.t + (this.a - 32768));if (0 === C$99a.length) return C$99m ? this.b.subarray(32768, this.a) : this.b.slice(32768, this.a);for (C$99t = 0, C$99r = C$99a.length; C$99t < C$99r; ++C$99t) for (C$99n = 0, C$99i = (C$99e = C$99a[C$99t]).length; C$99n < C$99i; ++C$99n) C$99h[C$99o++] = C$99e[C$99n];for (C$99t = 32768, C$99r = this.a; C$99t < C$99r; ++C$99t) C$99h[C$99o++] = C$99s[C$99t];return this.l = [], this.buffer = C$99h;
  }, C$99e.R = function () {
    var C$99e,
        C$99t = this.a;return C$99m ? this.K ? (C$99e = new Uint8Array(C$99t)).set(this.b.subarray(0, C$99t)) : C$99e = this.b.subarray(0, C$99t) : (this.b.length > C$99t && (this.b.length = C$99t), C$99e = this.b), this.buffer = C$99e;
  }, U.prototype.L = function (C$99e) {
    this.j = C$99e;
  }, U.prototype.s = function (C$99e) {
    C$99e = 65535 & C$99e[2] | 2;return C$99e * (1 ^ C$99e) >> 8 & 255;
  }, U.prototype.k = function (C$99e, C$99t) {
    C$99e[0] = (C$99p[255 & (C$99e[0] ^ C$99t)] ^ C$99e[0] >>> 8) >>> 0, C$99e[1] = 1 + (6681 * (20173 * (C$99e[1] + (255 & C$99e[0])) >>> 0) >>> 0) >>> 0, C$99e[2] = (C$99p[255 & (C$99e[2] ^ C$99e[1] >>> 24)] ^ C$99e[2] >>> 8) >>> 0;
  }, U.prototype.T = function (C$99e) {
    var C$99t,
        C$99r,
        C$99n = [305419896, 591751049, 878082192];for (C$99m && (C$99n = new Uint32Array(C$99n)), C$99t = 0, C$99r = C$99e.length; C$99t < C$99r; ++C$99t) this.k(C$99n, 255 & C$99e[C$99t]);return C$99n;
  };var C$99g = 0,
      C$99E = 8,
      C$99T = [80, 75, 1, 2],
      C$99A = [80, 75, 3, 4],
      C$99u = [80, 75, 5, 6];function ta(C$99e, C$99t) {
    this.input = C$99e, this.offset = C$99t;
  }function ua(C$99e, C$99t) {
    this.input = C$99e, this.offset = C$99t;
  }ta.prototype.parse = function () {
    var C$99e = this.input,
        C$99t = this.offset;C$99e[C$99t++] === C$99T[0] && C$99e[C$99t++] === C$99T[1] && C$99e[C$99t++] === C$99T[2] && C$99e[C$99t++] === C$99T[3] || l(Error("invalid file header signature")), this.version = C$99e[C$99t++], this.ia = C$99e[C$99t++], this.Z = C$99e[C$99t++] | C$99e[C$99t++] << 8, this.I = C$99e[C$99t++] | C$99e[C$99t++] << 8, this.A = C$99e[C$99t++] | C$99e[C$99t++] << 8, this.time = C$99e[C$99t++] | C$99e[C$99t++] << 8, this.U = C$99e[C$99t++] | C$99e[C$99t++] << 8, this.p = (C$99e[C$99t++] | C$99e[C$99t++] << 8 | C$99e[C$99t++] << 16 | C$99e[C$99t++] << 24) >>> 0, this.z = (C$99e[C$99t++] | C$99e[C$99t++] << 8 | C$99e[C$99t++] << 16 | C$99e[C$99t++] << 24) >>> 0, this.J = (C$99e[C$99t++] | C$99e[C$99t++] << 8 | C$99e[C$99t++] << 16 | C$99e[C$99t++] << 24) >>> 0, this.h = C$99e[C$99t++] | C$99e[C$99t++] << 8, this.g = C$99e[C$99t++] | C$99e[C$99t++] << 8, this.F = C$99e[C$99t++] | C$99e[C$99t++] << 8, this.ea = C$99e[C$99t++] | C$99e[C$99t++] << 8, this.ga = C$99e[C$99t++] | C$99e[C$99t++] << 8, this.fa = C$99e[C$99t++] | C$99e[C$99t++] << 8 | C$99e[C$99t++] << 16 | C$99e[C$99t++] << 24, this.$ = (C$99e[C$99t++] | C$99e[C$99t++] << 8 | C$99e[C$99t++] << 16 | C$99e[C$99t++] << 24) >>> 0, this.filename = String.fromCharCode.apply(null, C$99m ? C$99e.subarray(C$99t, C$99t += this.h) : C$99e.slice(C$99t, C$99t += this.h)), this.X = C$99m ? C$99e.subarray(C$99t, C$99t += this.g) : C$99e.slice(C$99t, C$99t += this.g), this.v = C$99m ? C$99e.subarray(C$99t, C$99t + this.F) : C$99e.slice(C$99t, C$99t + this.F), this.length = C$99t - this.offset;
  };var C$99S = 1;function $(C$99e) {
    var C$99t,
        C$99r,
        C$99n,
        C$99i,
        C$99o = [],
        C$99f = {};if (!C$99e.i) {
      if (void 0 === C$99e.o) {
        var C$99s,
            C$99a = C$99e.input;if (!C$99e.D) C$99e: {
          var C$99h,
              C$99c = C$99e.input;for (C$99h = C$99c.length - 12; 0 < C$99h; --C$99h) if (C$99c[C$99h] === C$99u[0] && C$99c[C$99h + 1] === C$99u[1] && C$99c[C$99h + 2] === C$99u[2] && C$99c[C$99h + 3] === C$99u[3]) {
            C$99e.D = C$99h;break C$99e;
          }l(Error("End of Central Directory Record not found"));
        }C$99s = C$99e.D, C$99a[C$99s++] === C$99u[0] && C$99a[C$99s++] === C$99u[1] && C$99a[C$99s++] === C$99u[2] && C$99a[C$99s++] === C$99u[3] || l(Error("invalid signature")), C$99e.ha = C$99a[C$99s++] | C$99a[C$99s++] << 8, C$99e.ja = C$99a[C$99s++] | C$99a[C$99s++] << 8, C$99e.ka = C$99a[C$99s++] | C$99a[C$99s++] << 8, C$99e.aa = C$99a[C$99s++] | C$99a[C$99s++] << 8, C$99e.Q = (C$99a[C$99s++] | C$99a[C$99s++] << 8 | C$99a[C$99s++] << 16 | C$99a[C$99s++] << 24) >>> 0, C$99e.o = (C$99a[C$99s++] | C$99a[C$99s++] << 8 | C$99a[C$99s++] << 16 | C$99a[C$99s++] << 24) >>> 0, C$99e.w = C$99a[C$99s++] | C$99a[C$99s++] << 8, C$99e.v = C$99m ? C$99a.subarray(C$99s, C$99s + C$99e.w) : C$99a.slice(C$99s, C$99s + C$99e.w);
      }for (C$99t = C$99e.o, C$99n = 0, C$99i = C$99e.aa; C$99n < C$99i; ++C$99n) (C$99r = new ta(C$99e.input, C$99t)).parse(), C$99t += C$99r.length, C$99f[(C$99o[C$99n] = C$99r).filename] = C$99n;C$99e.Q < C$99t - C$99e.o && l(Error("invalid file header size")), C$99e.i = C$99o, C$99e.G = C$99f;
    }
  }function wa(C$99e, C$99t, C$99r) {
    return C$99r ^= C$99e.s(C$99t), C$99e.k(C$99t, C$99r), C$99r;
  }ua.prototype.parse = function () {
    var C$99e = this.input,
        C$99t = this.offset;C$99e[C$99t++] === C$99A[0] && C$99e[C$99t++] === C$99A[1] && C$99e[C$99t++] === C$99A[2] && C$99e[C$99t++] === C$99A[3] || l(Error("invalid local file header signature")), this.Z = C$99e[C$99t++] | C$99e[C$99t++] << 8, this.I = C$99e[C$99t++] | C$99e[C$99t++] << 8, this.A = C$99e[C$99t++] | C$99e[C$99t++] << 8, this.time = C$99e[C$99t++] | C$99e[C$99t++] << 8, this.U = C$99e[C$99t++] | C$99e[C$99t++] << 8, this.p = (C$99e[C$99t++] | C$99e[C$99t++] << 8 | C$99e[C$99t++] << 16 | C$99e[C$99t++] << 24) >>> 0, this.z = (C$99e[C$99t++] | C$99e[C$99t++] << 8 | C$99e[C$99t++] << 16 | C$99e[C$99t++] << 24) >>> 0, this.J = (C$99e[C$99t++] | C$99e[C$99t++] << 8 | C$99e[C$99t++] << 16 | C$99e[C$99t++] << 24) >>> 0, this.h = C$99e[C$99t++] | C$99e[C$99t++] << 8, this.g = C$99e[C$99t++] | C$99e[C$99t++] << 8, this.filename = String.fromCharCode.apply(null, C$99m ? C$99e.subarray(C$99t, C$99t += this.h) : C$99e.slice(C$99t, C$99t += this.h)), this.X = C$99m ? C$99e.subarray(C$99t, C$99t += this.g) : C$99e.slice(C$99t, C$99t += this.g), this.length = C$99t - this.offset;
  }, (C$99e = V.prototype).Y = function () {
    var C$99e,
        C$99t,
        C$99r,
        C$99n = [];for (this.i || $(this), C$99e = 0, C$99t = (C$99r = this.i).length; C$99e < C$99t; ++C$99e) C$99n[C$99e] = C$99r[C$99e].filename;return C$99n;
  }, C$99e.r = function (C$99e, C$99t) {
    this.G || $(this), void 0 === (C$99s = this.G[C$99e]) && l(Error(C$99e + " not found")), C$99e = C$99t || {};var C$99r,
        C$99n,
        C$99i,
        C$99o,
        C$99s,
        C$99f,
        C$99a,
        C$99u,
        C$99l = this.input,
        C$99t = this.i;if (C$99t || $(this), void 0 === C$99t[C$99s] && l(Error("wrong index")), C$99n = C$99t[C$99s].$, (C$99r = new ua(this.input, C$99n)).parse(), C$99n += C$99r.length, C$99i = C$99r.z, 0 != (C$99r.I & C$99S)) {
      for (C$99e.password || this.j || l(Error("please set password")), C$99f = this.S(C$99e.password || this.j), C$99u = (C$99a = C$99n) + 12; C$99a < C$99u; ++C$99a) wa(this, C$99f, C$99l[C$99a]);for (C$99u = (C$99a = C$99n += 12) + (C$99i -= 12); C$99a < C$99u; ++C$99a) C$99l[C$99a] = wa(this, C$99f, C$99l[C$99a]);
    }switch (C$99r.A) {case C$99g:
        C$99o = C$99m ? this.input.subarray(C$99n, C$99n + C$99i) : this.input.slice(C$99n, C$99n + C$99i);break;case C$99E:
        C$99o = new I(this.input, { index: C$99n, bufferSize: C$99r.J }).r();break;default:
        l(Error("unknown compression type"));}if (this.ba) {
      var C$99h,
          C$99c = void 0,
          C$99d = "number" == typeof C$99c ? C$99c : C$99c = 0,
          C$99t = C$99o.length;for (C$99h = -1, C$99d = 7 & C$99t; C$99d--; ++C$99c) C$99h = C$99h >>> 8 ^ C$99p[255 & (C$99h ^ C$99o[C$99c])];for (C$99d = C$99t >> 3; C$99d--; C$99c += 8) C$99h = (C$99h = (C$99h = (C$99h = (C$99h = (C$99h = (C$99h = (C$99h = C$99h >>> 8 ^ C$99p[255 & (C$99h ^ C$99o[C$99c])]) >>> 8 ^ C$99p[255 & (C$99h ^ C$99o[C$99c + 1])]) >>> 8 ^ C$99p[255 & (C$99h ^ C$99o[C$99c + 2])]) >>> 8 ^ C$99p[255 & (C$99h ^ C$99o[C$99c + 3])]) >>> 8 ^ C$99p[255 & (C$99h ^ C$99o[C$99c + 4])]) >>> 8 ^ C$99p[255 & (C$99h ^ C$99o[C$99c + 5])]) >>> 8 ^ C$99p[255 & (C$99h ^ C$99o[C$99c + 6])]) >>> 8 ^ C$99p[255 & (C$99h ^ C$99o[C$99c + 7])];C$99r.p !== (C$99s = (4294967295 ^ C$99h) >>> 0) && l(Error("wrong crc: file=0x" + C$99r.p.toString(16) + ", data=0x" + C$99s.toString(16)));
    }return C$99o;
  }, C$99e.L = function (C$99e) {
    this.j = C$99e;
  }, C$99e.k = U.prototype.k, C$99e.S = U.prototype.T, C$99e.s = U.prototype.s, v("Zlib.Unzip", V), v("Zlib.Unzip.prototype.decompress", V.prototype.r), v("Zlib.Unzip.prototype.getFilenames", V.prototype.Y), v("Zlib.Unzip.prototype.setPassword", V.prototype.L);
}.call(this), function (C$99e, C$99t) {
  "object" == typeof exports && "object" == typeof module ? window.msgpack = module.exports = C$99t() : "function" == typeof define && define.amd ? window.msgpack = define([], C$99t) : "object" == typeof exports ? window.msgpack = exports.msgpack = C$99t() : window.msgpack = C$99e.msgpack = C$99t();
}(this, function () {
  return C$99r = [function (C$99r, C$99e, C$99t) {
    C$99t.r(C$99e), C$99t.d(C$99e, "encode", function () {
      return encode;
    }), C$99t.d(C$99e, "decode", function () {
      return decode;
    }), C$99t.d(C$99e, "decodeAsync", function () {
      return decodeAsync;
    }), C$99t.d(C$99e, "decodeArrayStream", function () {
      return decodeArrayStream;
    }), C$99t.d(C$99e, "decodeStream", function () {
      return decodeStream;
    }), C$99t.d(C$99e, "Decoder", function () {
      return C$99P;
    }), C$99t.d(C$99e, "Encoder", function () {
      return C$99k;
    }), C$99t.d(C$99e, "ExtensionCodec", function () {
      return C$99g;
    }), C$99t.d(C$99e, "ExtData", function () {
      return C$99o;
    }), C$99t.d(C$99e, "EXT_TIMESTAMP", function () {
      return C$99v;
    }), C$99t.d(C$99e, "encodeDateToTimeSpec", function () {
      return encodeDateToTimeSpec;
    }), C$99t.d(C$99e, "encodeTimeSpecToTimestamp", function () {
      return encodeTimeSpecToTimestamp;
    }), C$99t.d(C$99e, "decodeTimestampToTimeSpec", function () {
      return decodeTimestampToTimeSpec;
    }), C$99t.d(C$99e, "encodeTimestampExtension", function () {
      return encodeTimestampExtension;
    }), C$99t.d(C$99e, "decodeTimestampExtension", function () {
      return decodeTimestampExtension;
    });var C$99n = function (C$99e, C$99t) {
      var C$99r = "function" == typeof Symbol && C$99e[Symbol.iterator];if (!C$99r) return C$99e;var C$99n,
          C$99i,
          C$99o = C$99r.call(C$99e),
          C$99s = [];try {
        for (; (void 0 === C$99t || 0 < C$99t--) && !(C$99n = C$99o.next()).done;) C$99s.push(C$99n.value);
      } catch (C$99e) {
        C$99i = { error: C$99e };
      } finally {
        try {
          C$99n && !C$99n.done && (C$99r = C$99o.return) && C$99r.call(C$99o);
        } finally {
          if (C$99i) throw C$99i.error;
        }
      }return C$99s;
    };var C$99u = function () {
      for (var C$99e = [], C$99t = 0; C$99t < arguments.length; C$99t++) C$99e = C$99e.concat(C$99n(arguments[C$99t]));return C$99e;
    };var C$99l = "undefined" != typeof process && "undefined" != typeof TextEncoder && "undefined" != typeof TextDecoder;function utf8Count(C$99e) {
      var C$99t = C$99e.length;var C$99r = 0;var C$99n = 0;for (; C$99n < C$99t;) {
        var C$99i = C$99e.charCodeAt(C$99n++);var C$99o;0 != (4294967168 & C$99i) ? 0 == (4294965248 & C$99i) ? C$99r += 2 : (55296 <= C$99i && C$99i <= 56319 && C$99n < C$99t && 56320 == (64512 & (C$99o = C$99e.charCodeAt(C$99n))) && (++C$99n, C$99i = ((1023 & C$99i) << 10) + (1023 & C$99o) + 65536), C$99r += 0 == (4294901760 & C$99i) ? 3 : 4) : C$99r++;
      }return C$99r;
    }var C$99i = C$99l ? new TextEncoder() : void 0;var C$99d = "undefined" != typeof process ? 200 : 0;var C$99p = null != C$99i && C$99i.encodeInto ? function (C$99e, C$99t, C$99r) {
      C$99i.encodeInto(C$99e, C$99t.subarray(C$99r));
    } : function (C$99e, C$99t, C$99r) {
      C$99t.set(C$99i.encode(C$99e), C$99r);
    };function utf8DecodeJs(C$99e, C$99t, C$99r) {
      var C$99n = C$99t;var C$99f = C$99n + C$99r;var C$99i = [];var C$99o = "";for (; C$99n < C$99f;) {
        var C$99s = C$99e[C$99n++];var C$99a, C$99h, C$99c;0 == (128 & C$99s) ? C$99i.push(C$99s) : 192 == (224 & C$99s) ? (C$99a = 63 & C$99e[C$99n++], C$99i.push((31 & C$99s) << 6 | C$99a)) : 224 == (240 & C$99s) ? (C$99a = 63 & C$99e[C$99n++], C$99h = 63 & C$99e[C$99n++], C$99i.push((31 & C$99s) << 12 | C$99a << 6 | C$99h)) : 240 == (248 & C$99s) ? (65535 < (C$99c = (7 & C$99s) << 18 | (C$99a = 63 & C$99e[C$99n++]) << 12 | (C$99h = 63 & C$99e[C$99n++]) << 6 | 63 & C$99e[C$99n++]) && (C$99c -= 65536, C$99i.push(C$99c >>> 10 & 1023 | 55296), C$99c = 56320 | 1023 & C$99c), C$99i.push(C$99c)) : C$99i.push(C$99s), 4096 <= C$99i.length && (C$99o += String.fromCharCode.apply(String, C$99u(C$99i)), C$99i.length = 0);
      }return 0 < C$99i.length && (C$99o += String.fromCharCode.apply(String, C$99u(C$99i))), C$99o;
    }var C$99s = C$99l ? new TextDecoder() : null;var C$99c = "undefined" != typeof process ? 200 : 0;var C$99o = function (C$99e, C$99t) {
      this.type = C$99e, this.data = C$99t;
    };function setInt64(C$99e, C$99t, C$99r) {
      var C$99n = Math.floor(C$99r / 4294967296);C$99e.setUint32(C$99t, C$99n), C$99e.setUint32(C$99t + 4, C$99r);
    }function getInt64(C$99e, C$99t) {
      return 4294967296 * C$99e.getInt32(C$99t) + C$99e.getUint32(C$99t + 4);
    }var C$99v = -1;var C$99y = 4294967295;var C$99b = 17179869183;function encodeTimeSpecToTimestamp(C$99e) {
      var C$99t = C$99e.sec,
          C$99e = C$99e.nsec;var C$99r, C$99n, C$99i, C$99o;return 0 <= C$99t && 0 <= C$99e && C$99t <= C$99b ? 0 === C$99e && C$99t <= C$99y ? (C$99i = new Uint8Array(4), (C$99o = new DataView(C$99i.buffer)).setUint32(0, C$99t)) : (C$99r = C$99t / 4294967296, C$99n = 4294967295 & C$99t, C$99i = new Uint8Array(8), (C$99o = new DataView(C$99i.buffer)).setUint32(0, C$99e << 2 | 3 & C$99r), C$99o.setUint32(4, C$99n)) : (C$99i = new Uint8Array(12), (C$99o = new DataView(C$99i.buffer)).setUint32(0, C$99e), setInt64(C$99o, 4, C$99t)), C$99i;
    }function encodeDateToTimeSpec(C$99e) {
      C$99e = C$99e.getTime();var C$99t = Math.floor(C$99e / 1e3);C$99e = 1e6 * (C$99e - 1e3 * C$99t);var C$99r = Math.floor(C$99e / 1e9);return { sec: C$99t + C$99r, nsec: C$99e - 1e9 * C$99r };
    }function encodeTimestampExtension(C$99e) {
      return C$99e instanceof Date ? encodeTimeSpecToTimestamp(encodeDateToTimeSpec(C$99e)) : null;
    }function decodeTimestampToTimeSpec(C$99e) {
      var C$99t = new DataView(C$99e.buffer, C$99e.byteOffset, C$99e.byteLength);switch (C$99e.byteLength) {case 4:
          return { sec: C$99t.getUint32(0), nsec: 0 };case 8:
          var C$99r = C$99t.getUint32(0);return { sec: 4294967296 * (3 & C$99r) + C$99t.getUint32(4), nsec: C$99r >>> 2 };case 12:
          return { sec: getInt64(C$99t, 4), nsec: C$99t.getUint32(0) };default:
          throw new Error("Unrecognized data size for timestamp: " + C$99e.length);}
    }function decodeTimestampExtension(C$99e) {
      C$99e = decodeTimestampToTimeSpec(C$99e);return new Date(1e3 * C$99e.sec + C$99e.nsec / 1e6);
    }var C$99w = { type: C$99v, encode: encodeTimestampExtension, decode: decodeTimestampExtension };ExtensionCodec.prototype.register = function (C$99e) {
      var C$99t = C$99e.type,
          C$99r = C$99e.encode,
          C$99e = C$99e.decode;0 <= C$99t ? (this.encoders[C$99t] = C$99r, this.decoders[C$99t] = C$99e) : (this.builtInEncoders[C$99t = 1 + C$99t] = C$99r, this.builtInDecoders[C$99t] = C$99e);
    }, ExtensionCodec.prototype.tryToEncode = function (C$99e, C$99t) {
      for (var C$99r = 0; C$99r < this.builtInEncoders.length; C$99r++) if (null != (C$99i = this.builtInEncoders[C$99r])) {
        var C$99n = C$99i(C$99e, C$99t);if (null != C$99n) return new C$99o(-1 - C$99r, C$99n);
      }for (C$99r = 0; C$99r < this.encoders.length; C$99r++) {
        var C$99i;if (null != (C$99i = this.encoders[C$99r])) {
          C$99n = C$99i(C$99e, C$99t);if (null != C$99n) return new C$99o(C$99r, C$99n);
        }
      }return C$99e instanceof C$99o ? C$99e : null;
    }, ExtensionCodec.prototype.decode = function (C$99e, C$99t, C$99r) {
      var C$99n = C$99t < 0 ? this.builtInDecoders[-1 - C$99t] : this.decoders[C$99t];return C$99n ? C$99n(C$99e, C$99t, C$99r) : new C$99o(C$99t, C$99e);
    }, ExtensionCodec.defaultCodec = new ExtensionCodec();var C$99g = ExtensionCodec;function ExtensionCodec() {
      this.builtInEncoders = [], this.builtInDecoders = [], this.encoders = [], this.decoders = [], this.register(C$99w);
    }function ensureUint8Array(C$99e) {
      return C$99e instanceof Uint8Array ? C$99e : ArrayBuffer.isView(C$99e) ? new Uint8Array(C$99e.buffer, C$99e.byteOffset, C$99e.byteLength) : C$99e instanceof ArrayBuffer ? new Uint8Array(C$99e) : Uint8Array.from(C$99e);
    }var C$99m = function (C$99e) {
      var C$99t = "function" == typeof Symbol && Symbol.iterator,
          C$99r = C$99t && C$99e[C$99t],
          C$99n = 0;if (C$99r) return C$99r.call(C$99e);if (C$99e && "number" == typeof C$99e.length) return { next: function () {
          return { value: (C$99e = C$99e && C$99n >= C$99e.length ? void 0 : C$99e) && C$99e[C$99n++], done: !C$99e };
        } };throw new TypeError(C$99t ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };var C$99U = null != Uint8Array.prototype.slice || null != Uint8Array.prototype.slice;Encoder.prototype.encode = function (C$99e, C$99t) {
      if (C$99t > this.maxDepth) throw new Error("Too deep objects in depth " + C$99t);null == C$99e ? this.encodeNil() : "boolean" == typeof C$99e ? this.encodeBoolean(C$99e) : "number" == typeof C$99e ? this.encodeNumber(C$99e) : "string" == typeof C$99e ? this.encodeString(C$99e) : this.encodeObject(C$99e, C$99t);
    }, Encoder.prototype.getUint8Array = function () {
      return this.bytes.subarray(0, this.pos);
    }, Encoder.prototype.ensureBufferSizeToWrite = function (C$99e) {
      C$99e = this.pos + C$99e;this.view.byteLength < C$99e && this.resizeBuffer(2 * C$99e);
    }, Encoder.prototype.resizeBuffer = function (C$99e) {
      C$99e = new ArrayBuffer(C$99e);var C$99t = new Uint8Array(C$99e);C$99e = new DataView(C$99e);C$99t.set(this.bytes), this.view = C$99e, this.bytes = C$99t;
    }, Encoder.prototype.encodeNil = function () {
      this.writeU8(192);
    }, Encoder.prototype.encodeBoolean = function (C$99e) {
      !1 === C$99e ? this.writeU8(194) : this.writeU8(195);
    }, Encoder.prototype.encodeNumber = function (C$99e) {
      !Number.isSafeInteger || Number.isSafeInteger(C$99e) ? 0 <= C$99e ? C$99e < 128 ? this.writeU8(C$99e) : C$99e < 256 ? (this.writeU8(204), this.writeU8(C$99e)) : C$99e < 65536 ? (this.writeU8(205), this.writeU16(C$99e)) : C$99e < 4294967296 ? (this.writeU8(206), this.writeU32(C$99e)) : (this.writeU8(207), this.writeU64(C$99e)) : -32 <= C$99e ? this.writeU8(224 | C$99e + 32) : -128 <= C$99e ? (this.writeU8(208), this.writeI8(C$99e)) : -32768 <= C$99e ? (this.writeU8(209), this.writeI16(C$99e)) : -2147483648 <= C$99e ? (this.writeU8(210), this.writeI32(C$99e)) : (this.writeU8(211), this.writeI64(C$99e)) : this.forceFloat32 ? (this.writeU8(202), this.writeF32(C$99e)) : (this.writeU8(203), this.writeF64(C$99e));
    }, Encoder.prototype.writeStringHeader = function (C$99e) {
      if (C$99e < 32) this.writeU8(160 + C$99e);else if (C$99e < 256) this.writeU8(217), this.writeU8(C$99e);else if (C$99e < 65536) this.writeU8(218), this.writeU16(C$99e);else {
        if (!(C$99e < 4294967296)) throw new Error("Too long string: " + C$99e + " bytes in UTF-8");this.writeU8(219), this.writeU32(C$99e);
      }
    }, Encoder.prototype.encodeString = function (C$99e) {
      var C$99t = C$99e.length;if (C$99l && C$99d < C$99t) {
        var C$99r = utf8Count(C$99e);this.ensureBufferSizeToWrite(5 + C$99r), this.writeStringHeader(C$99r), C$99p(C$99e, this.bytes, this.pos), this.pos += C$99r;
      } else {
        C$99r = utf8Count(C$99e);this.ensureBufferSizeToWrite(5 + C$99r), this.writeStringHeader(C$99r);var C$99n = C$99e;var C$99i = this.bytes;C$99t = this.pos;var C$99o = C$99n.length;var C$99s = C$99t;var C$99a = 0;for (; C$99a < C$99o;) {
          var C$99h = C$99n.charCodeAt(C$99a++);var C$99c;0 != (4294967168 & C$99h) ? (0 == (4294965248 & C$99h) ? C$99i[C$99s++] = C$99h >> 6 & 31 | 192 : (55296 <= C$99h && C$99h <= 56319 && C$99a < C$99o && 56320 == (64512 & (C$99c = C$99n.charCodeAt(C$99a))) && (++C$99a, C$99h = ((1023 & C$99h) << 10) + (1023 & C$99c) + 65536), 0 == (4294901760 & C$99h) ? C$99i[C$99s++] = C$99h >> 12 & 15 | 224 : (C$99i[C$99s++] = C$99h >> 18 & 7 | 240, C$99i[C$99s++] = C$99h >> 12 & 63 | 128), C$99i[C$99s++] = C$99h >> 6 & 63 | 128), C$99i[C$99s++] = 63 & C$99h | 128) : C$99i[C$99s++] = C$99h;
        }this.pos += C$99r;
      }
    }, Encoder.prototype.encodeObject = function (C$99e, C$99t) {
      var C$99r = this.extensionCodec.tryToEncode(C$99e, this.context);if (null != C$99r) this.encodeExtension(C$99r);else if (Array.isArray(C$99e)) this.encodeArray(C$99e, C$99t);else if (ArrayBuffer.isView(C$99e)) this.encodeBinary(C$99e);else {
        if ("object" != typeof C$99e) throw new Error("Unrecognized object: " + Object.prototype.toString.apply(C$99e));this.encodeMap(C$99e, C$99t);
      }
    }, Encoder.prototype.encodeBinary = function (C$99e) {
      var C$99t = C$99e.byteLength;if (C$99t < 256) this.writeU8(196), this.writeU8(C$99t);else if (C$99t < 65536) this.writeU8(197), this.writeU16(C$99t);else {
        if (!(C$99t < 4294967296)) throw new Error("Too large binary: " + C$99t);this.writeU8(198), this.writeU32(C$99t);
      }C$99t = ensureUint8Array(C$99e);this.writeU8a(C$99t);
    }, Encoder.prototype.encodeArray = function (C$99e, C$99t) {
      var C$99r, C$99n;var C$99i = C$99e.length;if (C$99i < 16) this.writeU8(144 + C$99i);else if (C$99i < 65536) this.writeU8(220), this.writeU16(C$99i);else {
        if (!(C$99i < 4294967296)) throw new Error("Too large array: " + C$99i);this.writeU8(221), this.writeU32(C$99i);
      }try {
        for (var C$99o = C$99m(C$99e), C$99s = C$99o.next(); !C$99s.done; C$99s = C$99o.next()) {
          var C$99a = C$99s.value;this.encode(C$99a, C$99t + 1);
        }
      } catch (C$99e) {
        C$99r = { error: C$99e };
      } finally {
        try {
          C$99s && !C$99s.done && (C$99n = C$99o.return) && C$99n.call(C$99o);
        } finally {
          if (C$99r) throw C$99r.error;
        }
      }
    }, Encoder.prototype.countWithoutUndefined = function (C$99e, C$99t) {
      var C$99r, C$99n;var C$99i = 0;try {
        for (var C$99o = C$99m(C$99t), C$99s = C$99o.next(); !C$99s.done; C$99s = C$99o.next()) void 0 !== C$99e[C$99s.value] && C$99i++;
      } catch (C$99e) {
        C$99r = { error: C$99e };
      } finally {
        try {
          C$99s && !C$99s.done && (C$99n = C$99o.return) && C$99n.call(C$99o);
        } finally {
          if (C$99r) throw C$99r.error;
        }
      }return C$99i;
    }, Encoder.prototype.encodeMap = function (C$99e, C$99t) {
      var C$99r, C$99n;var C$99i = Object.keys(C$99e);this.sortKeys && C$99i.sort();var C$99o = this.ignoreUndefined ? this.countWithoutUndefined(C$99e, C$99i) : C$99i.length;if (C$99o < 16) this.writeU8(128 + C$99o);else if (C$99o < 65536) this.writeU8(222), this.writeU16(C$99o);else {
        if (!(C$99o < 4294967296)) throw new Error("Too large map object: " + C$99o);this.writeU8(223), this.writeU32(C$99o);
      }try {
        for (var C$99s = C$99m(C$99i), C$99a = C$99s.next(); !C$99a.done; C$99a = C$99s.next()) {
          var C$99h = C$99a.value;var C$99c = C$99e[C$99h];this.ignoreUndefined && void 0 === C$99c || (this.encodeString(C$99h), this.encode(C$99c, C$99t + 1));
        }
      } catch (C$99e) {
        C$99r = { error: C$99e };
      } finally {
        try {
          C$99a && !C$99a.done && (C$99n = C$99s.return) && C$99n.call(C$99s);
        } finally {
          if (C$99r) throw C$99r.error;
        }
      }
    }, Encoder.prototype.encodeExtension = function (C$99e) {
      var C$99t = C$99e.data.length;if (1 === C$99t) this.writeU8(212);else if (2 === C$99t) this.writeU8(213);else if (4 === C$99t) this.writeU8(214);else if (8 === C$99t) this.writeU8(215);else if (16 === C$99t) this.writeU8(216);else if (C$99t < 256) this.writeU8(199), this.writeU8(C$99t);else if (C$99t < 65536) this.writeU8(200), this.writeU16(C$99t);else {
        if (!(C$99t < 4294967296)) throw new Error("Too large extension object: " + C$99t);this.writeU8(201), this.writeU32(C$99t);
      }this.writeI8(C$99e.type), this.writeU8a(C$99e.data);
    }, Encoder.prototype.writeU8 = function (C$99e) {
      this.ensureBufferSizeToWrite(1), this.view.setUint8(this.pos, C$99e), this.pos++;
    }, Encoder.prototype.writeU8a = function (C$99e) {
      var C$99t = C$99e.length;this.ensureBufferSizeToWrite(C$99t), this.bytes.set(C$99e, this.pos), this.pos += C$99t;
    }, Encoder.prototype.writeI8 = function (C$99e) {
      this.ensureBufferSizeToWrite(1), this.view.setInt8(this.pos, C$99e), this.pos++;
    }, Encoder.prototype.writeU16 = function (C$99e) {
      this.ensureBufferSizeToWrite(2), this.view.setUint16(this.pos, C$99e), this.pos += 2;
    }, Encoder.prototype.writeI16 = function (C$99e) {
      this.ensureBufferSizeToWrite(2), this.view.setInt16(this.pos, C$99e), this.pos += 2;
    }, Encoder.prototype.writeU32 = function (C$99e) {
      this.ensureBufferSizeToWrite(4), this.view.setUint32(this.pos, C$99e), this.pos += 4;
    }, Encoder.prototype.writeI32 = function (C$99e) {
      this.ensureBufferSizeToWrite(4), this.view.setInt32(this.pos, C$99e), this.pos += 4;
    }, Encoder.prototype.writeF32 = function (C$99e) {
      this.ensureBufferSizeToWrite(4), this.view.setFloat32(this.pos, C$99e), this.pos += 4;
    }, Encoder.prototype.writeF64 = function (C$99e) {
      this.ensureBufferSizeToWrite(8), this.view.setFloat64(this.pos, C$99e), this.pos += 8;
    }, Encoder.prototype.writeU64 = function (C$99e) {
      var C$99t, C$99r, C$99n;this.ensureBufferSizeToWrite(8), C$99t = this.view, C$99r = this.pos, C$99n = C$99e, C$99t.setUint32(C$99r, C$99e / 4294967296), C$99t.setUint32(C$99r + 4, C$99n), this.pos += 8;
    }, Encoder.prototype.writeI64 = function (C$99e) {
      this.ensureBufferSizeToWrite(8), setInt64(this.view, this.pos, C$99e), this.pos += 8;
    };var C$99k = Encoder;function Encoder(C$99e, C$99t, C$99r, C$99n, C$99i, C$99o, C$99s) {
      void 0 === C$99e && (C$99e = C$99g.defaultCodec), void 0 === C$99r && (C$99r = 1e3), void 0 === C$99n && (C$99n = 2048), void 0 === C$99i && (C$99i = !1), void 0 === C$99o && (C$99o = !1), void 0 === C$99s && (C$99s = !1), this.extensionCodec = C$99e, this.context = C$99t, this.maxDepth = C$99r, this.initialBufferSize = C$99n, this.sortKeys = C$99i, this.forceFloat32 = C$99o, this.ignoreUndefined = C$99s, this.pos = 0, this.view = new DataView(new ArrayBuffer(this.initialBufferSize)), this.bytes = new Uint8Array(this.view.buffer);
    }var C$99x = {};function encode(C$99e, C$99t) {
      C$99t = new C$99k((C$99t = void 0 === C$99t ? C$99x : C$99t).extensionCodec, C$99t.context, C$99t.maxDepth, C$99t.initialBufferSize, C$99t.sortKeys, C$99t.forceFloat32, C$99t.ignoreUndefined);return C$99t.encode(C$99e, 1), C$99t.getUint8Array();
    }function prettyByte(C$99e) {
      return (C$99e < 0 ? "-" : "") + "0x" + Math.abs(C$99e).toString(16).padStart(2, "0");
    }CachedKeyDecoder.prototype.canBeCached = function (C$99e) {
      return 0 < C$99e && C$99e <= this.maxKeyLength;
    }, CachedKeyDecoder.prototype.get = function (C$99e, C$99t, C$99r) {
      var C$99n = this.caches[C$99r - 1];var C$99i = C$99n.length;C$99e: for (var C$99o = 0; C$99o < C$99i; C$99o++) {
        var C$99s = C$99n[C$99o];var C$99a = C$99s.bytes;for (var C$99h = 0; C$99h < C$99r; C$99h++) if (C$99a[C$99h] !== C$99e[C$99t + C$99h]) continue C$99e;return C$99s.value;
      }return null;
    }, CachedKeyDecoder.prototype.store = function (C$99e, C$99t) {
      var C$99r = this.caches[C$99e.length - 1];C$99e = { bytes: C$99e, value: C$99t };C$99r.length >= this.maxLengthPerKey ? C$99r[Math.random() * C$99r.length | 0] = C$99e : C$99r.push(C$99e);
    }, CachedKeyDecoder.prototype.decode = function (C$99e, C$99t, C$99r) {
      var C$99n = this.get(C$99e, C$99t, C$99r);if (null != C$99n) return C$99n;C$99n = utf8DecodeJs(C$99e, C$99t, C$99r);return C$99e = (C$99U ? Uint8Array.prototype.slice : Uint8Array.prototype.subarray).call(C$99e, C$99t, C$99t + C$99r), this.store(C$99e, C$99n), C$99n;
    };C$99t = CachedKeyDecoder;function CachedKeyDecoder(C$99e, C$99t) {
      void 0 === C$99t && (C$99t = 16), this.maxKeyLength = C$99e = void 0 === C$99e ? 16 : C$99e, this.maxLengthPerKey = C$99t, this.caches = [];for (var C$99r = 0; C$99r < this.maxKeyLength; C$99r++) this.caches.push([]);
    }var C$99E = function (C$99e, C$99n, C$99i, C$99o) {
      return new (C$99i = C$99i || Promise)(function (C$99r, C$99t) {
        function fulfilled(C$99e) {
          try {
            step(C$99o.next(C$99e));
          } catch (C$99e) {
            C$99t(C$99e);
          }
        }function rejected(C$99e) {
          try {
            step(C$99o.throw(C$99e));
          } catch (C$99e) {
            C$99t(C$99e);
          }
        }function step(C$99e) {
          var C$99t;C$99e.done ? C$99r(C$99e.value) : ((C$99t = C$99e.value) instanceof C$99i ? C$99t : new C$99i(function (C$99e) {
            C$99e(C$99t);
          })).then(fulfilled, rejected);
        }step((C$99o = C$99o.apply(C$99e, C$99n || [])).next());
      });
    };var C$99T = function (C$99n, C$99i) {
      var C$99o,
          C$99s,
          C$99a,
          C$99e,
          C$99h = { label: 0, sent: function () {
          if (1 & C$99a[0]) throw C$99a[1];return C$99a[1];
        }, trys: [], ops: [] };return C$99e = { next: verb(0), throw: verb(1), return: verb(2) }, "function" == typeof Symbol && (C$99e[Symbol.iterator] = function () {
        return this;
      }), C$99e;function verb(C$99r) {
        return function (C$99e) {
          var C$99t = [C$99r, C$99e];if (C$99o) throw new TypeError("Generator is already executing.");for (; C$99h;) try {
            if (C$99o = 1, C$99s && (C$99a = 2 & C$99t[0] ? C$99s.return : C$99t[0] ? C$99s.throw || ((C$99a = C$99s.return) && C$99a.call(C$99s), 0) : C$99s.next) && !(C$99a = C$99a.call(C$99s, C$99t[1])).done) return C$99a;switch (C$99s = 0, (C$99t = C$99a ? [2 & C$99t[0], C$99a.value] : C$99t)[0]) {case 0:case 1:
                C$99a = C$99t;break;case 4:
                return C$99h.label++, { value: C$99t[1], done: !1 };case 5:
                C$99h.label++, C$99s = C$99t[1], C$99t = [0];continue;case 7:
                C$99t = C$99h.ops.pop(), C$99h.trys.pop();continue;default:
                if (!(C$99a = 0 < (C$99a = C$99h.trys).length && C$99a[C$99a.length - 1]) && (6 === C$99t[0] || 2 === C$99t[0])) {
                  C$99h = 0;continue;
                }if (3 === C$99t[0] && (!C$99a || C$99t[1] > C$99a[0] && C$99t[1] < C$99a[3])) {
                  C$99h.label = C$99t[1];break;
                }if (6 === C$99t[0] && C$99h.label < C$99a[1]) {
                  C$99h.label = C$99a[1], C$99a = C$99t;break;
                }if (C$99a && C$99h.label < C$99a[2]) {
                  C$99h.label = C$99a[2], C$99h.ops.push(C$99t);break;
                }C$99a[2] && C$99h.ops.pop(), C$99h.trys.pop();continue;}C$99t = C$99i.call(C$99n, C$99h);
          } catch (C$99e) {
            C$99t = [6, C$99e], C$99s = 0;
          } finally {
            C$99o = C$99a = 0;
          }if (5 & C$99t[0]) throw C$99t[1];return { value: C$99t[0] ? C$99t[1] : void 0, done: !0 };
        };
      }
    };var C$99A = function (C$99s) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");var C$99e,
          C$99t = C$99s[Symbol.asyncIterator];return C$99t ? C$99t.call(C$99s) : (C$99s = "function" == typeof __values ? __values(C$99s) : C$99s[Symbol.iterator](), C$99e = {}, verb("next"), verb("throw"), verb("return"), C$99e[Symbol.asyncIterator] = function () {
        return this;
      }, C$99e);function verb(C$99o) {
        C$99e[C$99o] = C$99s[C$99o] && function (C$99i) {
          return new Promise(function (C$99e, C$99t) {
            var C$99r, C$99n;C$99i = C$99s[C$99o](C$99i), C$99r = C$99e, C$99e = C$99t, C$99n = C$99i.done, C$99t = C$99i.value, Promise.resolve(C$99t).then(function (C$99e) {
              C$99r({ value: C$99e, done: C$99n });
            }, C$99e);
          });
        };
      }
    };var C$99f = function (C$99e) {
      return this instanceof C$99f ? (this.v = C$99e, this) : new C$99f(C$99e);
    };var C$99S = function (C$99e, C$99t, C$99r) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");var C$99i,
          C$99o = C$99r.apply(C$99e, C$99t || []),
          C$99s = [];return C$99i = {}, verb("next"), verb("throw"), verb("return"), C$99i[Symbol.asyncIterator] = function () {
        return this;
      }, C$99i;function verb(C$99n) {
        C$99o[C$99n] && (C$99i[C$99n] = function (C$99r) {
          return new Promise(function (C$99e, C$99t) {
            1 < C$99s.push([C$99n, C$99r, C$99e, C$99t]) || resume(C$99n, C$99r);
          });
        });
      }function resume(C$99e, C$99t) {
        try {
          (C$99r = C$99o[C$99e](C$99t)).value instanceof C$99f ? Promise.resolve(C$99r.value.v).then(fulfill, reject) : settle(C$99s[0][2], C$99r);
        } catch (C$99e) {
          settle(C$99s[0][3], C$99e);
        }var C$99r;
      }function fulfill(C$99e) {
        resume("next", C$99e);
      }function reject(C$99e) {
        resume("throw", C$99e);
      }function settle(C$99e, C$99t) {
        C$99e(C$99t), C$99s.shift(), C$99s.length && resume(C$99s[0][0], C$99s[0][1]);
      }
    };var C$99_ = new DataView(new ArrayBuffer(0));var C$99D = new Uint8Array(C$99_.buffer);var C$99C = function () {
      try {
        C$99_.getInt8(0);
      } catch (C$99e) {
        return C$99e.constructor;
      }throw new Error("never reached");
    }();var C$99I = new C$99C("Insufficient data");var C$99h = 4294967295;var C$99B = new C$99t();Decoder.prototype.setBuffer = function (C$99e) {
      this.bytes = ensureUint8Array(C$99e), this.view = (C$99e = this.bytes) instanceof ArrayBuffer ? new DataView(C$99e) : (C$99e = ensureUint8Array(C$99e), new DataView(C$99e.buffer, C$99e.byteOffset, C$99e.byteLength)), this.pos = 0;
    }, Decoder.prototype.appendBuffer = function (C$99e) {
      var C$99t, C$99r, C$99n;-1 !== this.headByte || this.hasRemaining() ? (C$99t = this.bytes.subarray(this.pos), C$99r = ensureUint8Array(C$99e), (C$99n = new Uint8Array(C$99t.length + C$99r.length)).set(C$99t), C$99n.set(C$99r, C$99t.length), this.setBuffer(C$99n)) : this.setBuffer(C$99e);
    }, Decoder.prototype.hasRemaining = function (C$99e) {
      return this.view.byteLength - this.pos >= (C$99e = void 0 === C$99e ? 1 : C$99e);
    }, Decoder.prototype.createNoExtraBytesError = function (C$99e) {
      var C$99t = this.view,
          C$99r = this.pos;return new RangeError("Extra " + (C$99t.byteLength - C$99r) + " byte(s) found at buffer[" + C$99e + "]");
    }, Decoder.prototype.decodeSingleSync = function () {
      var C$99e = this.decodeSync();if (this.hasRemaining()) throw this.createNoExtraBytesError(this.pos);return C$99e;
    }, Decoder.prototype.decodeSingleAsync = function (C$99a) {
      var C$99h, C$99c;var C$99f, C$99u;return C$99E(this, void 0, void 0, function () {
        var C$99t, C$99r, C$99n, C$99i, C$99o, C$99s;return C$99T(this, function (C$99e) {
          switch (C$99e.label) {case 0:
              C$99t = !1, C$99e.label = 1;case 1:
              C$99e.trys.push([1, 6, 7, 12]), C$99h = C$99A(C$99a), C$99e.label = 2;case 2:
              return [4, C$99h.next()];case 3:
              if ((C$99c = C$99e.sent()).done) return [3, 5];if (C$99n = C$99c.value, C$99t) throw this.createNoExtraBytesError(this.totalPos);this.appendBuffer(C$99n);try {
                C$99r = this.decodeSync(), C$99t = !0;
              } catch (C$99e) {
                if (!(C$99e instanceof C$99C)) throw C$99e;
              }this.totalPos += this.pos, C$99e.label = 4;case 4:
              return [3, 2];case 5:
              return [3, 12];case 6:
              return C$99n = C$99e.sent(), C$99f = { error: C$99n }, [3, 12];case 7:
              return C$99e.trys.push([7,, 10, 11]), C$99c && !C$99c.done && (C$99u = C$99h.return) ? [4, C$99u.call(C$99h)] : [3, 9];case 8:
              C$99e.sent(), C$99e.label = 9;case 9:
              return [3, 11];case 10:
              if (C$99f) throw C$99f.error;return [7];case 11:
              return [7];case 12:
              if (C$99t) {
                if (this.hasRemaining()) throw this.createNoExtraBytesError(this.totalPos);return [2, C$99r];
              }throw C$99i = (C$99s = this).headByte, C$99o = C$99s.pos, C$99s = C$99s.totalPos, new RangeError("Insufficient data in parcing " + prettyByte(C$99i) + " at " + C$99s + " (" + C$99o + " in the current buffer)");}
        });
      });
    }, Decoder.prototype.decodeArrayStream = function (C$99e) {
      return this.decodeMultiAsync(C$99e, !0);
    }, Decoder.prototype.decodeStream = function (C$99e) {
      return this.decodeMultiAsync(C$99e, !1);
    }, Decoder.prototype.decodeMultiAsync = function (C$99h, C$99c) {
      return C$99S(this, arguments, function () {
        var C$99t, C$99r, C$99n, C$99i, C$99o;var C$99s, C$99a;return C$99T(this, function (C$99e) {
          switch (C$99e.label) {case 0:
              C$99t = C$99c, C$99r = -1, C$99e.label = 1;case 1:
              C$99e.trys.push([1, 13, 14, 19]), C$99n = C$99A(C$99h), C$99e.label = 2;case 2:
              return [4, C$99f(C$99n.next())];case 3:
              if ((C$99i = C$99e.sent()).done) return [3, 12];if (C$99o = C$99i.value, C$99c && 0 === C$99r) throw this.createNoExtraBytesError(this.totalPos);this.appendBuffer(C$99o), C$99t && (C$99r = this.readArraySize(), C$99t = !1, this.complete()), C$99e.label = 4;case 4:
              C$99e.trys.push([4, 9,, 10]), C$99e.label = 5;case 5:
              return [4, C$99f(this.decodeSync())];case 6:
              return [4, C$99e.sent()];case 7:
              return C$99e.sent(), 0 == --C$99r ? [3, 8] : [3, 5];case 8:
              return [3, 10];case 9:
              if (!((C$99o = C$99e.sent()) instanceof C$99C)) throw C$99o;return [3, 10];case 10:
              this.totalPos += this.pos, C$99e.label = 11;case 11:
              return [3, 2];case 12:
              return [3, 19];case 13:
              return C$99s = C$99e.sent(), C$99s = { error: C$99s }, [3, 19];case 14:
              return C$99e.trys.push([14,, 17, 18]), C$99i && !C$99i.done && (C$99a = C$99n.return) ? [4, C$99f(C$99a.call(C$99n))] : [3, 16];case 15:
              C$99e.sent(), C$99e.label = 16;case 16:
              return [3, 18];case 17:
              if (C$99s) throw C$99s.error;return [7];case 18:
              return [7];case 19:
              return [2];}
        });
      });
    }, Decoder.prototype.decodeSync = function () {
      C$99e: for (;;) {
        var C$99e = this.readHeadByte();var C$99t = void 0;if (224 <= C$99e) C$99t = C$99e - 256;else if (C$99e < 192) {
          if (C$99e < 128) C$99t = C$99e;else if (C$99e < 144) {
            if (0 !== (C$99n = C$99e - 128)) {
              this.pushMapState(C$99n), this.complete();continue;
            }C$99t = {};
          } else if (C$99e < 160) {
            if (0 !== (C$99n = C$99e - 144)) {
              this.pushArrayState(C$99n), this.complete();continue;
            }C$99t = [];
          } else {
            var C$99r = C$99e - 160;C$99t = this.decodeUtf8String(C$99r, 0);
          }
        } else if (192 === C$99e) C$99t = null;else if (194 === C$99e) C$99t = !1;else if (195 === C$99e) C$99t = !0;else if (202 === C$99e) C$99t = this.readF32();else if (203 === C$99e) C$99t = this.readF64();else if (204 === C$99e) C$99t = this.readU8();else if (205 === C$99e) C$99t = this.readU16();else if (206 === C$99e) C$99t = this.readU32();else if (207 === C$99e) C$99t = this.readU64();else if (208 === C$99e) C$99t = this.readI8();else if (209 === C$99e) C$99t = this.readI16();else if (210 === C$99e) C$99t = this.readI32();else if (211 === C$99e) C$99t = this.readI64();else if (217 === C$99e) {
          C$99r = this.lookU8();C$99t = this.decodeUtf8String(C$99r, 1);
        } else if (218 === C$99e) {
          C$99r = this.lookU16();C$99t = this.decodeUtf8String(C$99r, 2);
        } else if (219 === C$99e) {
          C$99r = this.lookU32();C$99t = this.decodeUtf8String(C$99r, 4);
        } else if (220 === C$99e) {
          if (0 !== (C$99n = this.readU16())) {
            this.pushArrayState(C$99n), this.complete();continue;
          }C$99t = [];
        } else if (221 === C$99e) {
          if (0 !== (C$99n = this.readU32())) {
            this.pushArrayState(C$99n), this.complete();continue;
          }C$99t = [];
        } else if (222 === C$99e) {
          if (0 !== (C$99n = this.readU16())) {
            this.pushMapState(C$99n), this.complete();continue;
          }C$99t = {};
        } else if (223 === C$99e) {
          if (0 !== (C$99n = this.readU32())) {
            this.pushMapState(C$99n), this.complete();continue;
          }C$99t = {};
        } else if (196 === C$99e) {
          var C$99n = this.lookU8();C$99t = this.decodeBinary(C$99n, 1);
        } else if (197 === C$99e) {
          C$99n = this.lookU16();C$99t = this.decodeBinary(C$99n, 2);
        } else if (198 === C$99e) {
          C$99n = this.lookU32();C$99t = this.decodeBinary(C$99n, 4);
        } else if (212 === C$99e) C$99t = this.decodeExtension(1, 0);else if (213 === C$99e) C$99t = this.decodeExtension(2, 0);else if (214 === C$99e) C$99t = this.decodeExtension(4, 0);else if (215 === C$99e) C$99t = this.decodeExtension(8, 0);else if (216 === C$99e) C$99t = this.decodeExtension(16, 0);else if (199 === C$99e) {
          C$99n = this.lookU8();C$99t = this.decodeExtension(C$99n, 1);
        } else if (200 === C$99e) {
          C$99n = this.lookU16();C$99t = this.decodeExtension(C$99n, 2);
        } else {
          if (201 !== C$99e) throw new Error("Unrecognized type byte: " + prettyByte(C$99e));C$99n = this.lookU32();C$99t = this.decodeExtension(C$99n, 4);
        }this.complete();var C$99i = this.stack;for (; 0 < C$99i.length;) {
          var C$99o = C$99i[C$99i.length - 1];if (0 === C$99o.type) {
            if (C$99o.array[C$99o.position] = C$99t, C$99o.position++, C$99o.position !== C$99o.size) continue C$99e;C$99i.pop(), C$99t = C$99o.array;
          } else {
            if (1 === C$99o.type) {
              if (!function (C$99e) {
                C$99e = typeof C$99e;return "string" == C$99e || "number" == C$99e;
              }(C$99t)) throw new Error("The type of key must be string or number but " + typeof C$99t);C$99o.key = C$99t, C$99o.type = 2;continue C$99e;
            }if (C$99o.map[C$99o.key] = C$99t, C$99o.readCount++, C$99o.readCount !== C$99o.size) {
              C$99o.key = null, C$99o.type = 1;continue C$99e;
            }C$99i.pop(), C$99t = C$99o.map;
          }
        }return C$99t;
      }
    }, Decoder.prototype.readHeadByte = function () {
      return -1 === this.headByte && (this.headByte = this.readU8()), this.headByte;
    }, Decoder.prototype.complete = function () {
      this.headByte = -1;
    }, Decoder.prototype.readArraySize = function () {
      var C$99e = this.readHeadByte();switch (C$99e) {case 220:
          return this.readU16();case 221:
          return this.readU32();default:
          if (C$99e < 160) return C$99e - 144;throw new Error("Unrecognized array type byte: " + prettyByte(C$99e));}
    }, Decoder.prototype.pushMapState = function (C$99e) {
      if (C$99e > this.maxMapLength) throw new Error("Max length exceeded: map length (" + C$99e + ") > maxMapLengthLength (" + this.maxMapLength + ")");this.stack.push({ type: 1, size: C$99e, key: null, readCount: 0, map: {} });
    }, Decoder.prototype.pushArrayState = function (C$99e) {
      if (C$99e > this.maxArrayLength) throw new Error("Max length exceeded: array length (" + C$99e + ") > maxArrayLength (" + this.maxArrayLength + ")");this.stack.push({ type: 0, size: C$99e, array: new Array(C$99e), position: 0 });
    }, Decoder.prototype.decodeUtf8String = function (C$99e, C$99t) {
      if (C$99e > this.maxStrLength) throw new Error("Max length exceeded: UTF-8 byte length (" + C$99e + ") > maxStrLength (" + this.maxStrLength + ")");if (this.bytes.byteLength < this.pos + C$99t + C$99e) throw C$99I;var C$99r = this.pos + C$99t;var C$99n;return C$99r = this.stateIsMapKey() && null !== (C$99n = this.cachedKeyDecoder) && void 0 !== C$99n && C$99n.canBeCached(C$99e) ? this.cachedKeyDecoder.decode(this.bytes, C$99r, C$99e) : C$99l && C$99c < C$99e ? (C$99n = (C$99n = this.bytes).subarray(C$99r, C$99r + C$99e), C$99s.decode(C$99n)) : utf8DecodeJs(this.bytes, C$99r, C$99e), this.pos += C$99t + C$99e, C$99r;
    }, Decoder.prototype.stateIsMapKey = function () {
      return 0 < this.stack.length && 1 === this.stack[this.stack.length - 1].type;
    }, Decoder.prototype.decodeBinary = function (C$99e, C$99t) {
      if (C$99e > this.maxBinLength) throw new Error("Max length exceeded: bin length (" + C$99e + ") > maxBinLength (" + this.maxBinLength + ")");if (!this.hasRemaining(C$99e + C$99t)) throw C$99I;var C$99r = this.pos + C$99t;C$99r = this.bytes.subarray(C$99r, C$99r + C$99e);return this.pos += C$99t + C$99e, C$99r;
    }, Decoder.prototype.decodeExtension = function (C$99e, C$99t) {
      if (C$99e > this.maxExtLength) throw new Error("Max length exceeded: ext length (" + C$99e + ") > maxExtLength (" + this.maxExtLength + ")");var C$99r = this.view.getInt8(this.pos + C$99t);C$99e = this.decodeBinary(C$99e, C$99t + 1);return this.extensionCodec.decode(C$99e, C$99r, this.context);
    }, Decoder.prototype.lookU8 = function () {
      return this.view.getUint8(this.pos);
    }, Decoder.prototype.lookU16 = function () {
      return this.view.getUint16(this.pos);
    }, Decoder.prototype.lookU32 = function () {
      return this.view.getUint32(this.pos);
    }, Decoder.prototype.readU8 = function () {
      var C$99e = this.view.getUint8(this.pos);return this.pos++, C$99e;
    }, Decoder.prototype.readI8 = function () {
      var C$99e = this.view.getInt8(this.pos);return this.pos++, C$99e;
    }, Decoder.prototype.readU16 = function () {
      var C$99e = this.view.getUint16(this.pos);return this.pos += 2, C$99e;
    }, Decoder.prototype.readI16 = function () {
      var C$99e = this.view.getInt16(this.pos);return this.pos += 2, C$99e;
    }, Decoder.prototype.readU32 = function () {
      var C$99e = this.view.getUint32(this.pos);return this.pos += 4, C$99e;
    }, Decoder.prototype.readI32 = function () {
      var C$99e = this.view.getInt32(this.pos);return this.pos += 4, C$99e;
    }, Decoder.prototype.readU64 = function () {
      C$99e = this.view, C$99t = this.pos;C$99e = 4294967296 * C$99e.getUint32(C$99t) + C$99e.getUint32(C$99t + 4);var C$99e, C$99t;return this.pos += 8, C$99e;
    }, Decoder.prototype.readI64 = function () {
      var C$99e = getInt64(this.view, this.pos);return this.pos += 8, C$99e;
    }, Decoder.prototype.readF32 = function () {
      var C$99e = this.view.getFloat32(this.pos);return this.pos += 4, C$99e;
    }, Decoder.prototype.readF64 = function () {
      var C$99e = this.view.getFloat64(this.pos);return this.pos += 8, C$99e;
    };var C$99P = Decoder;function Decoder(C$99e, C$99t, C$99r, C$99n, C$99i, C$99o, C$99s, C$99a) {
      void 0 === C$99e && (C$99e = C$99g.defaultCodec), void 0 === C$99r && (C$99r = C$99h), void 0 === C$99n && (C$99n = C$99h), void 0 === C$99i && (C$99i = C$99h), void 0 === C$99o && (C$99o = C$99h), void 0 === C$99s && (C$99s = C$99h), void 0 === C$99a && (C$99a = C$99B), this.extensionCodec = C$99e, this.context = C$99t, this.maxStrLength = C$99r, this.maxBinLength = C$99n, this.maxArrayLength = C$99i, this.maxMapLength = C$99o, this.maxExtLength = C$99s, this.cachedKeyDecoder = C$99a, this.totalPos = 0, this.pos = 0, this.view = C$99_, this.bytes = C$99D, this.headByte = -1, this.stack = [];
    }var C$99L = {};function decode(C$99e, C$99t) {
      C$99t = new C$99P((C$99t = void 0 === C$99t ? C$99L : C$99t).extensionCodec, C$99t.context, C$99t.maxStrLength, C$99t.maxBinLength, C$99t.maxArrayLength, C$99t.maxMapLength, C$99t.maxExtLength);return C$99t.setBuffer(C$99e), C$99t.decodeSingleSync();
    }var C$99M = function (C$99n, C$99i) {
      var C$99o,
          C$99s,
          C$99a,
          C$99e,
          C$99h = { label: 0, sent: function () {
          if (1 & C$99a[0]) throw C$99a[1];return C$99a[1];
        }, trys: [], ops: [] };return C$99e = { next: verb(0), throw: verb(1), return: verb(2) }, "function" == typeof Symbol && (C$99e[Symbol.iterator] = function () {
        return this;
      }), C$99e;function verb(C$99r) {
        return function (C$99e) {
          var C$99t = [C$99r, C$99e];if (C$99o) throw new TypeError("Generator is already executing.");for (; C$99h;) try {
            if (C$99o = 1, C$99s && (C$99a = 2 & C$99t[0] ? C$99s.return : C$99t[0] ? C$99s.throw || ((C$99a = C$99s.return) && C$99a.call(C$99s), 0) : C$99s.next) && !(C$99a = C$99a.call(C$99s, C$99t[1])).done) return C$99a;switch (C$99s = 0, (C$99t = C$99a ? [2 & C$99t[0], C$99a.value] : C$99t)[0]) {case 0:case 1:
                C$99a = C$99t;break;case 4:
                return C$99h.label++, { value: C$99t[1], done: !1 };case 5:
                C$99h.label++, C$99s = C$99t[1], C$99t = [0];continue;case 7:
                C$99t = C$99h.ops.pop(), C$99h.trys.pop();continue;default:
                if (!(C$99a = 0 < (C$99a = C$99h.trys).length && C$99a[C$99a.length - 1]) && (6 === C$99t[0] || 2 === C$99t[0])) {
                  C$99h = 0;continue;
                }if (3 === C$99t[0] && (!C$99a || C$99t[1] > C$99a[0] && C$99t[1] < C$99a[3])) {
                  C$99h.label = C$99t[1];break;
                }if (6 === C$99t[0] && C$99h.label < C$99a[1]) {
                  C$99h.label = C$99a[1], C$99a = C$99t;break;
                }if (C$99a && C$99h.label < C$99a[2]) {
                  C$99h.label = C$99a[2], C$99h.ops.push(C$99t);break;
                }C$99a[2] && C$99h.ops.pop(), C$99h.trys.pop();continue;}C$99t = C$99i.call(C$99n, C$99h);
          } catch (C$99e) {
            C$99t = [6, C$99e], C$99s = 0;
          } finally {
            C$99o = C$99a = 0;
          }if (5 & C$99t[0]) throw C$99t[1];return { value: C$99t[0] ? C$99t[1] : void 0, done: !0 };
        };
      }
    };var C$99a = function (C$99e) {
      return this instanceof C$99a ? (this.v = C$99e, this) : new C$99a(C$99e);
    };var C$99z = function (C$99e, C$99t, C$99r) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");var C$99i,
          C$99o = C$99r.apply(C$99e, C$99t || []),
          C$99s = [];return C$99i = {}, verb("next"), verb("throw"), verb("return"), C$99i[Symbol.asyncIterator] = function () {
        return this;
      }, C$99i;function verb(C$99n) {
        C$99o[C$99n] && (C$99i[C$99n] = function (C$99r) {
          return new Promise(function (C$99e, C$99t) {
            1 < C$99s.push([C$99n, C$99r, C$99e, C$99t]) || resume(C$99n, C$99r);
          });
        });
      }function resume(C$99e, C$99t) {
        try {
          (C$99r = C$99o[C$99e](C$99t)).value instanceof C$99a ? Promise.resolve(C$99r.value.v).then(fulfill, reject) : settle(C$99s[0][2], C$99r);
        } catch (C$99e) {
          settle(C$99s[0][3], C$99e);
        }var C$99r;
      }function fulfill(C$99e) {
        resume("next", C$99e);
      }function reject(C$99e) {
        resume("throw", C$99e);
      }function settle(C$99e, C$99t) {
        C$99e(C$99t), C$99s.shift(), C$99s.length && resume(C$99s[0][0], C$99s[0][1]);
      }
    };function asyncIterableFromStream(C$99i) {
      return C$99z(this, arguments, function () {
        var C$99t, C$99r, C$99n;return C$99M(this, function (C$99e) {
          switch (C$99e.label) {case 0:
              C$99t = C$99i.getReader(), C$99e.label = 1;case 1:
              C$99e.trys.push([1,, 9, 10]), C$99e.label = 2;case 2:
              return [4, C$99a(C$99t.read())];case 3:
              return C$99n = C$99e.sent(), C$99r = C$99n.done, C$99n = C$99n.value, C$99r ? [4, C$99a(void 0)] : [3, 5];case 4:
              return [2, C$99e.sent()];case 5:
              if (null == C$99n) throw new Error("Assertion Failure: value must not be null nor undefined");return [4, C$99a(C$99n)];case 6:
              return [4, C$99e.sent()];case 7:
              return C$99e.sent(), [3, 2];case 8:
              return [3, 10];case 9:
              return C$99t.releaseLock(), [7];case 10:
              return [2];}
        });
      });
    }function ensureAsyncIterabe(C$99e) {
      return null != C$99e[Symbol.asyncIterator] ? C$99e : asyncIterableFromStream(C$99e);
    }var C$99N = function (C$99e, C$99n, C$99i, C$99o) {
      return new (C$99i = C$99i || Promise)(function (C$99r, C$99t) {
        function fulfilled(C$99e) {
          try {
            step(C$99o.next(C$99e));
          } catch (C$99e) {
            C$99t(C$99e);
          }
        }function rejected(C$99e) {
          try {
            step(C$99o.throw(C$99e));
          } catch (C$99e) {
            C$99t(C$99e);
          }
        }function step(C$99e) {
          var C$99t;C$99e.done ? C$99r(C$99e.value) : ((C$99t = C$99e.value) instanceof C$99i ? C$99t : new C$99i(function (C$99e) {
            C$99e(C$99t);
          })).then(fulfilled, rejected);
        }step((C$99o = C$99o.apply(C$99e, C$99n || [])).next());
      });
    };var C$99j = function (C$99n, C$99i) {
      var C$99o,
          C$99s,
          C$99a,
          C$99e,
          C$99h = { label: 0, sent: function () {
          if (1 & C$99a[0]) throw C$99a[1];return C$99a[1];
        }, trys: [], ops: [] };return C$99e = { next: verb(0), throw: verb(1), return: verb(2) }, "function" == typeof Symbol && (C$99e[Symbol.iterator] = function () {
        return this;
      }), C$99e;function verb(C$99r) {
        return function (C$99e) {
          var C$99t = [C$99r, C$99e];if (C$99o) throw new TypeError("Generator is already executing.");for (; C$99h;) try {
            if (C$99o = 1, C$99s && (C$99a = 2 & C$99t[0] ? C$99s.return : C$99t[0] ? C$99s.throw || ((C$99a = C$99s.return) && C$99a.call(C$99s), 0) : C$99s.next) && !(C$99a = C$99a.call(C$99s, C$99t[1])).done) return C$99a;switch (C$99s = 0, (C$99t = C$99a ? [2 & C$99t[0], C$99a.value] : C$99t)[0]) {case 0:case 1:
                C$99a = C$99t;break;case 4:
                return C$99h.label++, { value: C$99t[1], done: !1 };case 5:
                C$99h.label++, C$99s = C$99t[1], C$99t = [0];continue;case 7:
                C$99t = C$99h.ops.pop(), C$99h.trys.pop();continue;default:
                if (!(C$99a = 0 < (C$99a = C$99h.trys).length && C$99a[C$99a.length - 1]) && (6 === C$99t[0] || 2 === C$99t[0])) {
                  C$99h = 0;continue;
                }if (3 === C$99t[0] && (!C$99a || C$99t[1] > C$99a[0] && C$99t[1] < C$99a[3])) {
                  C$99h.label = C$99t[1];break;
                }if (6 === C$99t[0] && C$99h.label < C$99a[1]) {
                  C$99h.label = C$99a[1], C$99a = C$99t;break;
                }if (C$99a && C$99h.label < C$99a[2]) {
                  C$99h.label = C$99a[2], C$99h.ops.push(C$99t);break;
                }C$99a[2] && C$99h.ops.pop(), C$99h.trys.pop();continue;}C$99t = C$99i.call(C$99n, C$99h);
          } catch (C$99e) {
            C$99t = [6, C$99e], C$99s = 0;
          } finally {
            C$99o = C$99a = 0;
          }if (5 & C$99t[0]) throw C$99t[1];return { value: C$99t[0] ? C$99t[1] : void 0, done: !0 };
        };
      }
    };function decodeAsync(C$99r, C$99n) {
      return void 0 === C$99n && (C$99n = C$99L), C$99N(this, void 0, void 0, function () {
        var C$99t;return C$99j(this, function (C$99e) {
          return C$99t = ensureAsyncIterabe(C$99r), [2, new C$99P(C$99n.extensionCodec, C$99n.context, C$99n.maxStrLength, C$99n.maxBinLength, C$99n.maxArrayLength, C$99n.maxMapLength, C$99n.maxExtLength).decodeSingleAsync(C$99t)];
        });
      });
    }function decodeArrayStream(C$99e, C$99t) {
      void 0 === C$99t && (C$99t = C$99L);C$99e = ensureAsyncIterabe(C$99e);return new C$99P(C$99t.extensionCodec, C$99t.context, C$99t.maxStrLength, C$99t.maxBinLength, C$99t.maxArrayLength, C$99t.maxMapLength, C$99t.maxExtLength).decodeArrayStream(C$99e);
    }function decodeStream(C$99e, C$99t) {
      void 0 === C$99t && (C$99t = C$99L);C$99e = ensureAsyncIterabe(C$99e);return new C$99P(C$99t.extensionCodec, C$99t.context, C$99t.maxStrLength, C$99t.maxBinLength, C$99t.maxArrayLength, C$99t.maxMapLength, C$99t.maxExtLength).decodeStream(C$99e);
    }
  }], C$99n = {}, __webpack_require__.m = C$99r, __webpack_require__.c = C$99n, __webpack_require__.d = function (C$99e, C$99t, C$99r) {
    __webpack_require__.o(C$99e, C$99t) || Object.defineProperty(C$99e, C$99t, { enumerable: !0, get: C$99r });
  }, __webpack_require__.r = function (C$99e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(C$99e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(C$99e, "__esModule", { value: !0 });
  }, __webpack_require__.t = function (C$99t, C$99e) {
    if (1 & C$99e && (C$99t = __webpack_require__(C$99t)), 8 & C$99e) return C$99t;if (4 & C$99e && "object" == typeof C$99t && C$99t && C$99t.__esModule) return C$99t;var C$99r = Object.create(null);if (__webpack_require__.r(C$99r), Object.defineProperty(C$99r, "default", { enumerable: !0, value: C$99t }), 2 & C$99e && "string" != typeof C$99t) for (var C$99n in C$99t) __webpack_require__.d(C$99r, C$99n, function (C$99e) {
      return C$99t[C$99e];
    }.bind(null, C$99n));return C$99r;
  }, __webpack_require__.n = function (C$99e) {
    var C$99t = C$99e && C$99e.__esModule ? function () {
      return C$99e.default;
    } : function () {
      return C$99e;
    };return __webpack_require__.d(C$99t, "a", C$99t), C$99t;
  }, __webpack_require__.o = function (C$99e, C$99t) {
    return Object.prototype.hasOwnProperty.call(C$99e, C$99t);
  }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 0);function __webpack_require__(C$99e) {
    if (C$99n[C$99e]) return C$99n[C$99e].exports;var C$99t = C$99n[C$99e] = { i: C$99e, l: !1, exports: {} };return C$99r[C$99e].call(C$99t.exports, C$99t, C$99t.exports, __webpack_require__), C$99t.l = !0, C$99t.exports;
  }var C$99r, C$99n;
});var ByteUtils = function () {
  function ByteUtils() {}return ByteUtils.prototype.bytesAvailable = function () {
    return this.length - this.cursor;
  }, ByteUtils.prototype.getUint8 = function () {
    return this.input[this.cursor++];
  }, ByteUtils.prototype.getUint16 = function () {
    var C$99e = this.view.getUint16(this.cursor, this.littleEndian);return this.cursor += 2, C$99e;
  }, ByteUtils.prototype.getUint32 = function () {
    var C$99e = this.view.getUint32(this.cursor, this.littleEndian);return this.cursor += 4, C$99e;
  }, ByteUtils.prototype.getUTF = function (C$99e) {
    var C$99t = new Array(C$99e);for (var C$99r = 0; C$99r < C$99e; ++C$99r) C$99t[C$99r] = String.fromCharCode(this.input[this.cursor++]);return C$99t.join("");
  }, ByteUtils.prototype.getBytes = function (C$99e) {
    var C$99t = new Uint8Array(this.input.buffer, this.input.byteOffset + this.cursor, C$99e);return this.cursor += C$99e, C$99t;
  }, ByteUtils.prototype.skip = function (C$99e) {
    this.cursor += C$99e;
  }, ByteUtils.prototype.open = function (C$99e, C$99t) {
    void 0 === C$99t && (C$99t = !1), this.cursor = 0, this.length = C$99e.byteLength, this.input = C$99e, this.view = new DataView(C$99e.buffer), this.littleEndian = C$99t;
  }, ByteUtils.prototype.close = function () {
    this.input = null, this.view = null;
  }, ByteUtils;
}();var DNLMarkerError = function () {
  function DNLMarkerError(C$99e, C$99t) {
    this.message = C$99e, this.scanLines = C$99t;
  }return (DNLMarkerError.prototype = new Error()).name = "DNLMarkerError", DNLMarkerError.constructor = DNLMarkerError;
}();var EOIMarkerError = function () {
  function EOIMarkerError(C$99e) {
    this.message = C$99e;
  }return (EOIMarkerError.prototype = new Error()).name = "EOIMarkerError", EOIMarkerError.constructor = EOIMarkerError;
}();var JpegImage = function () {
  var C$99Z = new Uint8Array([0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26, 33, 40, 48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57, 50, 43, 36, 29, 22, 15, 23, 30, 37, 44, 51, 58, 59, 52, 45, 38, 31, 39, 46, 53, 60, 61, 54, 47, 55, 62, 63]);var C$99B = 4017;var C$99P = 799;var C$99L = 3406;var C$99M = 2276;var C$99z = 1567;var C$99N = 3784;var C$99j = 5793;var C$99F = 2896;function JpegImage(C$99e) {
    var C$99e = void 0 === C$99e ? {} : C$99e,
        C$99t = C$99e.decodeTransform,
        C$99e = C$99e.colorTransform,
        C$99e = void 0 === C$99e ? -1 : C$99e;this._decodeTransform = void 0 === C$99t ? null : C$99t, this._colorTransform = C$99e;
  }function getBlockBufferOffset(C$99e, C$99t, C$99r) {
    return 64 * ((C$99e.blocksPerLine + 1) * C$99t + C$99r);
  }function decodeScan(C$99r, C$99n, C$99s, C$99e, C$99a, C$99u, C$99l, C$99d, C$99h, C$99p) {
    void 0 === C$99p && (C$99p = !1);var C$99v = C$99s.mcusPerLine;var C$99y = C$99s.progressive;var C$99b = C$99n,
        C$99w = 0,
        C$99g = 0;function readBit() {
      if (0 < C$99g) return C$99w >> --C$99g & 1;if (255 === (C$99w = C$99r[C$99n++])) {
        var C$99e = C$99r[C$99n++];if (C$99e) {
          if (220 === C$99e && C$99p) {
            C$99n += 2;var C$99t = C$99r[C$99n++] << 8 | C$99r[C$99n++];if (0 < C$99t && C$99t !== C$99s.scanLines) throw new DNLMarkerError("Found DNL marker (0xFFDC) while parsing scan data", C$99t);
          } else if (217 === C$99e) throw new EOIMarkerError("Found EOI marker (0xFFD9) while parsing scan data");throw new Error("unexpected marker " + (C$99w << 8 | C$99e).toString(16));
        }
      }return C$99w >>> (C$99g = 7);
    }function decodeHuffman(C$99e) {
      var C$99t = C$99e;for (;;) {
        if ("number" == typeof (C$99t = C$99t[readBit()])) return C$99t;if ("object" != typeof C$99t) throw new Error("invalid huffman sequence");
      }
    }function receive(C$99e) {
      var C$99t = 0;for (; 0 < C$99e;) C$99t = C$99t << 1 | readBit(), C$99e--;return C$99t;
    }function receiveAndExtend(C$99e) {
      if (1 === C$99e) return 1 === readBit() ? 1 : -1;var C$99t = receive(C$99e);return 1 << C$99e - 1 <= C$99t ? C$99t : C$99t + (-1 << C$99e) + 1;
    }var C$99c = 0;var C$99m,
        C$99f = 0;var C$99U = C$99e.length;var C$99k, C$99t, C$99x, C$99E, C$99i;var C$99T;C$99T = C$99y ? 0 === C$99u ? 0 === C$99d ? function (C$99e, C$99t) {
      var C$99r = decodeHuffman(C$99e.huffmanTableDC);C$99r = 0 === C$99r ? 0 : receiveAndExtend(C$99r) << C$99h, C$99e.blockData[C$99t] = C$99e.pred += C$99r;
    } : function (C$99e, C$99t) {
      C$99e.blockData[C$99t] |= readBit() << C$99h;
    } : 0 === C$99d ? function (C$99e, C$99t) {
      if (0 < C$99c) C$99c--;else {
        var C$99r = C$99u,
            C$99n = C$99l;for (; C$99r <= C$99n;) {
          var C$99i = decodeHuffman(C$99e.huffmanTableAC);var C$99o = 15 & C$99i,
              C$99i = C$99i >> 4;if (0 != C$99o) {
            var C$99s = C$99Z[C$99r += C$99i];C$99e.blockData[C$99t + C$99s] = receiveAndExtend(C$99o) * (1 << C$99h), C$99r++;
          } else {
            if (C$99i < 15) {
              C$99c = receive(C$99i) + (1 << C$99i) - 1;break;
            }C$99r += 16;
          }
        }
      }
    } : function (C$99e, C$99t) {
      var C$99r = C$99u;var C$99n = C$99l;var C$99i = 0;var C$99o;for (; C$99r <= C$99n;) {
        var C$99s = C$99t + C$99Z[C$99r];var C$99a = C$99e.blockData[C$99s] < 0 ? -1 : 1;switch (C$99f) {case 0:
            if (C$99i = (C$99o = decodeHuffman(C$99e.huffmanTableAC)) >> 4, 0 == (C$99o = 15 & C$99o)) C$99f = C$99i < 15 ? (C$99c = receive(C$99i) + (1 << C$99i), 4) : (C$99i = 16, 1);else {
              if (1 != C$99o) throw new Error("invalid ACn encoding");C$99m = receiveAndExtend(C$99o), C$99f = C$99i ? 2 : 3;
            }continue;case 1:case 2:
            C$99e.blockData[C$99s] ? C$99e.blockData[C$99s] += C$99a * (readBit() << C$99h) : 0 === --C$99i && (C$99f = 2 === C$99f ? 3 : 0);break;case 3:
            C$99e.blockData[C$99s] ? C$99e.blockData[C$99s] += C$99a * (readBit() << C$99h) : (C$99e.blockData[C$99s] = C$99m << C$99h, C$99f = 0);break;case 4:
            C$99e.blockData[C$99s] && (C$99e.blockData[C$99s] += C$99a * (readBit() << C$99h));}C$99r++;
      }4 === C$99f && 0 === --C$99c && (C$99f = 0);
    } : function (C$99e, C$99t) {
      var C$99r = decodeHuffman(C$99e.huffmanTableDC);C$99r = 0 === C$99r ? 0 : receiveAndExtend(C$99r), C$99e.blockData[C$99t] = C$99e.pred += C$99r;var C$99n = 1;for (; C$99n < 64;) {
        var C$99i = decodeHuffman(C$99e.huffmanTableAC);var C$99o = 15 & C$99i,
            C$99i = C$99i >> 4;if (0 != C$99o) {
          var C$99s = C$99Z[C$99n += C$99i];C$99e.blockData[C$99t + C$99s] = receiveAndExtend(C$99o), C$99n++;
        } else {
          if (C$99i < 15) break;C$99n += 16;
        }
      }
    };var C$99o,
        C$99A = 0;var C$99S;var C$99_, C$99D;for (C$99S = 1 === C$99U ? C$99e[0].blocksPerLine * C$99e[0].blocksPerColumn : C$99v * C$99s.mcusPerColumn; C$99A < C$99S;) {
      var C$99C = C$99a ? Math.min(C$99S - C$99A, C$99a) : C$99S;for (C$99t = 0; C$99t < C$99U; C$99t++) C$99e[C$99t].pred = 0;if (C$99c = 0, 1 === C$99U) for (C$99k = C$99e[0], C$99i = 0; C$99i < C$99C; C$99i++) C$99T(C$99z = C$99k, getBlockBufferOffset(C$99z, (C$99N = C$99A) / C$99z.blocksPerLine | 0, C$99N % C$99z.blocksPerLine)), C$99A++;else for (C$99i = 0; C$99i < C$99C; C$99i++) {
        for (C$99t = 0; C$99t < C$99U; C$99t++) for (C$99_ = (C$99k = C$99e[C$99t]).h, C$99D = C$99k.v, C$99x = 0; C$99x < C$99D; C$99x++) for (C$99E = 0; C$99E < C$99_; C$99E++) C$99L = C$99x, C$99M = C$99E, C$99T(C$99B = C$99k, getBlockBufferOffset(C$99B, ((C$99P = C$99A) / C$99v | 0) * C$99B.v + C$99L, C$99P % C$99v * C$99B.h + C$99M));C$99A++;
      }C$99g = 0, (C$99o = findNextFileMarker(C$99r, C$99n)) && C$99o.invalid && (warn("decodeScan - unexpected MCU data, current marker is: " + C$99o.invalid), C$99n = C$99o.offset);var C$99I = C$99o && C$99o.marker;if (!C$99I || C$99I <= 65280) throw new Error("marker was not found");if (!(65488 <= C$99I && C$99I <= 65495)) break;C$99n += 2;
    }var C$99B, C$99P, C$99L, C$99M;var C$99z, C$99N;return (C$99o = findNextFileMarker(C$99r, C$99n)) && C$99o.invalid && (warn("decodeScan - unexpected Scan data, current marker is: " + C$99o.invalid), C$99n = C$99o.offset), C$99n - C$99b;
  }function buildComponentData(C$99f, C$99u) {
    var C$99l = C$99u.blocksPerLine;var C$99d = C$99u.blocksPerColumn;var C$99p = new Int16Array(64);for (var C$99v = 0; C$99v < C$99d; C$99v++) for (var C$99y = 0; C$99y < C$99l; C$99y++) {
      var C$99b = getBlockBufferOffset(C$99u, C$99v, C$99y);C$99c = C$99h = C$99a = C$99I = C$99C = C$99D = C$99_ = C$99S = C$99A = C$99T = C$99E = C$99x = C$99s = C$99o = C$99k = C$99i = C$99n = C$99U = C$99m = C$99r = C$99g = C$99t = C$99e = C$99w = void 0;var C$99w = C$99u;var C$99e = C$99b;var C$99t = C$99p;var C$99g = C$99w.quantizationTable,
          C$99r = C$99w.blockData;var C$99m, C$99U, C$99n, C$99i, C$99k, C$99o, C$99s, C$99x;var C$99E, C$99T, C$99A, C$99S, C$99_, C$99D, C$99C, C$99I;var C$99a;if (!C$99g) throw new Error("missing required Quantization Table.");for (var C$99h = 0; C$99h < 64; C$99h += 8) C$99E = C$99r[C$99e + C$99h], C$99T = C$99r[C$99e + C$99h + 1], C$99A = C$99r[C$99e + C$99h + 2], C$99S = C$99r[C$99e + C$99h + 3], C$99_ = C$99r[C$99e + C$99h + 4], C$99D = C$99r[C$99e + C$99h + 5], C$99C = C$99r[C$99e + C$99h + 6], C$99I = C$99r[C$99e + C$99h + 7], C$99E *= C$99g[C$99h], 0 != (C$99T | C$99A | C$99S | C$99_ | C$99D | C$99C | C$99I) ? (C$99T *= C$99g[C$99h + 1], C$99A *= C$99g[C$99h + 2], C$99S *= C$99g[C$99h + 3], C$99_ *= C$99g[C$99h + 4], C$99D *= C$99g[C$99h + 5], C$99C *= C$99g[C$99h + 6], C$99I *= C$99g[C$99h + 7], C$99U = (C$99m = (C$99m = C$99j * C$99E + 128 >> 8) + (C$99U = C$99j * C$99_ + 128 >> 8) + 1 >> 1) - C$99U, C$99a = (C$99n = C$99A) * C$99N + (C$99i = C$99C) * C$99z + 128 >> 8, C$99n = C$99n * C$99z - C$99i * C$99N + 128 >> 8, C$99s = (C$99k = (C$99k = C$99F * (C$99T - C$99I) + 128 >> 8) + (C$99s = C$99D << 4) + 1 >> 1) - C$99s, C$99o = (C$99x = (C$99x = C$99F * (C$99T + C$99I) + 128 >> 8) + (C$99o = C$99S << 4) + 1 >> 1) - C$99o, C$99i = (C$99m = C$99m + (C$99i = C$99a) + 1 >> 1) - C$99i, C$99n = (C$99U = C$99U + C$99n + 1 >> 1) - C$99n, C$99a = C$99k * C$99M + C$99x * C$99L + 2048 >> 12, C$99k = C$99k * C$99L - C$99x * C$99M + 2048 >> 12, C$99x = C$99a, C$99a = C$99o * C$99P + C$99s * C$99B + 2048 >> 12, C$99o = C$99o * C$99B - C$99s * C$99P + 2048 >> 12, C$99s = C$99a, C$99t[C$99h] = C$99m + C$99x, C$99t[C$99h + 7] = C$99m - C$99x, C$99t[C$99h + 1] = C$99U + C$99s, C$99t[C$99h + 6] = C$99U - C$99s, C$99t[C$99h + 2] = C$99n + C$99o, C$99t[C$99h + 5] = C$99n - C$99o, C$99t[C$99h + 3] = C$99i + C$99k, C$99t[C$99h + 4] = C$99i - C$99k) : (C$99t[C$99h] = C$99a = C$99j * C$99E + 512 >> 10, C$99t[C$99h + 1] = C$99a, C$99t[C$99h + 2] = C$99a, C$99t[C$99h + 3] = C$99a, C$99t[C$99h + 4] = C$99a, C$99t[C$99h + 5] = C$99a, C$99t[C$99h + 6] = C$99a, C$99t[C$99h + 7] = C$99a);for (var C$99c = 0; C$99c < 8; ++C$99c) C$99E = C$99t[C$99c], 0 != ((C$99T = C$99t[C$99c + 8]) | (C$99A = C$99t[C$99c + 16]) | (C$99S = C$99t[C$99c + 24]) | (C$99_ = C$99t[C$99c + 32]) | (C$99D = C$99t[C$99c + 40]) | (C$99C = C$99t[C$99c + 48]) | (C$99I = C$99t[C$99c + 56])) ? (C$99a = (C$99n = C$99A) * C$99N + (C$99i = C$99C) * C$99z + 2048 >> 12, C$99n = C$99n * C$99z - C$99i * C$99N + 2048 >> 12, C$99i = C$99a, C$99s = (C$99k = (C$99k = C$99F * (C$99T - C$99I) + 2048 >> 12) + (C$99s = C$99D) + 1 >> 1) - C$99s, C$99o = (C$99x = (C$99x = C$99F * (C$99T + C$99I) + 2048 >> 12) + (C$99o = C$99S) + 1 >> 1) - C$99o, C$99a = C$99k * C$99M + C$99x * C$99L + 2048 >> 12, C$99k = C$99k * C$99L - C$99x * C$99M + 2048 >> 12, C$99x = C$99a, C$99a = C$99o * C$99P + C$99s * C$99B + 2048 >> 12, C$99o = C$99o * C$99B - C$99s * C$99P + 2048 >> 12, C$99T = (C$99T = (C$99U = (C$99U = (C$99m = 4112 + ((C$99m = C$99j * C$99E + 2048 >> 12) + (C$99U = C$99j * C$99_ + 2048 >> 12) + 1 >> 1)) - C$99U) + C$99n + 1 >> 1) + (C$99s = C$99a)) < 16 ? 0 : 4080 <= C$99T ? 255 : C$99T >> 4, C$99A = (C$99A = (C$99n = C$99U - C$99n) + C$99o) < 16 ? 0 : 4080 <= C$99A ? 255 : C$99A >> 4, C$99S = (C$99S = (C$99i = (C$99m = C$99m + C$99i + 1 >> 1) - C$99i) + C$99k) < 16 ? 0 : 4080 <= C$99S ? 255 : C$99S >> 4, C$99_ = (C$99_ = C$99i - C$99k) < 16 ? 0 : 4080 <= C$99_ ? 255 : C$99_ >> 4, C$99D = (C$99D = C$99n - C$99o) < 16 ? 0 : 4080 <= C$99D ? 255 : C$99D >> 4, C$99C = (C$99C = C$99U - C$99s) < 16 ? 0 : 4080 <= C$99C ? 255 : C$99C >> 4, C$99I = (C$99I = C$99m - C$99x) < 16 ? 0 : 4080 <= C$99I ? 255 : C$99I >> 4, C$99r[C$99e + C$99c] = C$99E = (C$99E = C$99m + C$99x) < 16 ? 0 : 4080 <= C$99E ? 255 : C$99E >> 4, C$99r[C$99e + C$99c + 8] = C$99T, C$99r[C$99e + C$99c + 16] = C$99A, C$99r[C$99e + C$99c + 24] = C$99S, C$99r[C$99e + C$99c + 32] = C$99_, C$99r[C$99e + C$99c + 40] = C$99D, C$99r[C$99e + C$99c + 48] = C$99C, C$99r[C$99e + C$99c + 56] = C$99I) : (C$99r[C$99e + C$99c] = C$99a = (C$99a = C$99j * C$99E + 8192 >> 14) < -2040 ? 0 : 2024 <= C$99a ? 255 : C$99a + 2056 >> 4, C$99r[C$99e + C$99c + 8] = C$99a, C$99r[C$99e + C$99c + 16] = C$99a, C$99r[C$99e + C$99c + 24] = C$99a, C$99r[C$99e + C$99c + 32] = C$99a, C$99r[C$99e + C$99c + 40] = C$99a, C$99r[C$99e + C$99c + 48] = C$99a, C$99r[C$99e + C$99c + 56] = C$99a);
    }return C$99u.blockData;
  }function findNextFileMarker(C$99t, C$99e, C$99r) {
    function peekUint16(C$99e) {
      return C$99t[C$99e] << 8 | C$99t[C$99e + 1];
    }var C$99n = C$99t.length - 1;var C$99i = (C$99r = void 0 === C$99r ? C$99e : C$99r) < C$99e ? C$99r : C$99e;if (C$99n <= C$99e) return null;C$99r = peekUint16(C$99e);if (65472 <= C$99r && C$99r <= 65534) return { invalid: null, marker: C$99r, offset: C$99e };var C$99o = peekUint16(C$99i);for (; !(65472 <= C$99o && C$99o <= 65534);) {
      if (++C$99i >= C$99n) return null;C$99o = peekUint16(C$99i);
    }return { invalid: C$99r.toString(16), marker: C$99o, offset: C$99i };
  }return JpegImage.prototype = { width: 0, height: 0, parse: function (C$99t, C$99c) {
      var C$99c = (void 0 === C$99c ? {} : C$99c).dnlScanLines,
          C$99f = void 0 === C$99c ? null : C$99c;function readUint16() {
        var C$99e = C$99t[C$99r] << 8 | C$99t[C$99r + 1];return C$99r += 2, C$99e;
      }var C$99r = 0;var C$99u = null;var C$99l = null;var C$99e, C$99d;var C$99p = 0;var C$99v = [];var C$99y = [],
          C$99b = [];var C$99n = readUint16();if (65496 !== C$99n) throw new Error("SOI not found");C$99n = readUint16();C$99e: for (; 65497 !== C$99n;) {
        var C$99i, C$99o;switch (C$99n) {case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:
            C$99W = C$99h = void 0, C$99h = readUint16(), (C$99W = findNextFileMarker(C$99t, C$99h = C$99r + C$99h - 2, C$99r)) && C$99W.invalid && (warn("readDataBlock - incorrect length, current marker is: " + C$99W.invalid), C$99h = C$99W.offset), C$99W = C$99t.subarray(C$99r, C$99h), C$99r += C$99W.length;C$99h = C$99W;65504 === C$99n && 74 === C$99h[0] && 70 === C$99h[1] && 73 === C$99h[2] && 70 === C$99h[3] && 0 === C$99h[4] && (C$99u = { version: { major: C$99h[5], minor: C$99h[6] }, densityUnits: C$99h[7], xDensity: C$99h[8] << 8 | C$99h[9], yDensity: C$99h[10] << 8 | C$99h[11], thumbWidth: C$99h[12], thumbHeight: C$99h[13], thumbData: C$99h.subarray(14, 14 + 3 * C$99h[12] * C$99h[13]) }), 65518 === C$99n && 65 === C$99h[0] && 100 === C$99h[1] && 111 === C$99h[2] && 98 === C$99h[3] && 101 === C$99h[4] && (C$99l = { version: C$99h[5] << 8 | C$99h[6], flags0: C$99h[7] << 8 | C$99h[8], flags1: C$99h[9] << 8 | C$99h[10], transformCode: C$99h[11] });break;case 65499:
            var C$99w = readUint16() + C$99r - 2;for (; C$99r < C$99w;) {
              var C$99g = C$99t[C$99r++];var C$99m = new Uint16Array(64);if (C$99g >> 4 == 0) for (C$99o = 0; C$99o < 64; C$99o++) C$99m[C$99Z[C$99o]] = C$99t[C$99r++];else {
                if (C$99g >> 4 != 1) throw new Error("DQT - invalid table spec");for (C$99o = 0; C$99o < 64; C$99o++) C$99m[C$99Z[C$99o]] = readUint16();
              }C$99v[15 & C$99g] = C$99m;
            }break;case 65472:case 65473:case 65474:
            if (C$99e) throw new Error("Only single frame JPEGs supported");readUint16(), (C$99e = {}).extended = 65473 === C$99n, C$99e.progressive = 65474 === C$99n, C$99e.precision = C$99t[C$99r++];C$99W = readUint16();C$99e.scanLines = C$99f || C$99W, C$99e.samplesPerLine = readUint16(), C$99e.components = [], C$99e.componentIds = {};var C$99U,
                C$99k = C$99t[C$99r++];var C$99x = 0,
                C$99E = 0;for (C$99i = 0; C$99i < C$99k; C$99i++) {
              C$99U = C$99t[C$99r];var C$99T = C$99t[C$99r + 1] >> 4;var C$99A = 15 & C$99t[C$99r + 1];C$99x < C$99T && (C$99x = C$99T), C$99E < C$99A && (C$99E = C$99A);var C$99S = C$99t[C$99r + 2];C$99T = C$99e.components.push({ h: C$99T, v: C$99A, quantizationId: C$99S, quantizationTable: null }), C$99e.componentIds[C$99U] = C$99T - 1, C$99r += 3;
            }C$99e.maxH = C$99x, C$99e.maxV = C$99E, C$99L = C$99P = C$99B = C$99I = C$99C = C$99D = C$99_ = C$99s = void 0;var C$99s = C$99e;var C$99_ = Math.ceil(C$99s.samplesPerLine / 8 / C$99s.maxH);var C$99D = Math.ceil(C$99s.scanLines / 8 / C$99s.maxV);for (var C$99C = 0; C$99C < C$99s.components.length; C$99C++) {
              C$99a = C$99s.components[C$99C];var C$99I = Math.ceil(Math.ceil(C$99s.samplesPerLine / 8) * C$99a.h / C$99s.maxH);var C$99B = Math.ceil(Math.ceil(C$99s.scanLines / 8) * C$99a.v / C$99s.maxV);var C$99P = C$99_ * C$99a.h;var C$99L = C$99D * C$99a.v;C$99a.blockData = new Int16Array(64 * C$99L * (1 + C$99P)), C$99a.blocksPerLine = C$99I, C$99a.blocksPerColumn = C$99B;
            }C$99s.mcusPerLine = C$99_, C$99s.mcusPerColumn = C$99D;break;case 65476:
            var C$99M = readUint16();for (C$99i = 2; C$99i < C$99M;) {
              var C$99z = C$99t[C$99r++];var C$99N = new Uint8Array(16);var C$99j = 0;for (C$99o = 0; C$99o < 16; C$99o++, C$99r++) C$99j += C$99N[C$99o] = C$99t[C$99r];var C$99F = new Uint8Array(C$99j);for (C$99o = 0; C$99o < C$99j; C$99o++, C$99r++) C$99F[C$99o] = C$99t[C$99r];C$99i += 17 + C$99j, (C$99z >> 4 == 0 ? C$99b : C$99y)[15 & C$99z] = function (C$99e, C$99t) {
                var C$99r,
                    C$99n,
                    C$99i = 0,
                    C$99o = [],
                    C$99s = 16;for (; 0 < C$99s && !C$99e[C$99s - 1];) C$99s--;C$99o.push({ children: [], index: 0 });var C$99a,
                    C$99h = C$99o[0];for (C$99r = 0; C$99r < C$99s; C$99r++) {
                  for (C$99n = 0; C$99n < C$99e[C$99r]; C$99n++) {
                    for ((C$99h = C$99o.pop()).children[C$99h.index] = C$99t[C$99i]; 0 < C$99h.index;) C$99h = C$99o.pop();for (C$99h.index++, C$99o.push(C$99h); C$99o.length <= C$99r;) C$99o.push(C$99a = { children: [], index: 0 }), C$99h.children[C$99h.index] = C$99a.children, C$99h = C$99a;C$99i++;
                  }C$99r + 1 < C$99s && (C$99o.push(C$99a = { children: [], index: 0 }), C$99h.children[C$99h.index] = C$99a.children, C$99h = C$99a);
                }return C$99o[0].children;
              }(C$99N, C$99F);
            }break;case 65501:
            readUint16(), C$99d = readUint16();break;case 65498:
            C$99h = 1 == ++C$99p && !C$99f;readUint16();var C$99O = C$99t[C$99r++];var C$99a,
                C$99K = [];for (C$99i = 0; C$99i < C$99O; C$99i++) {
              var C$99q = C$99e.componentIds[C$99t[C$99r++]];C$99a = C$99e.components[C$99q];C$99q = C$99t[C$99r++];C$99a.huffmanTableDC = C$99b[C$99q >> 4], C$99a.huffmanTableAC = C$99y[15 & C$99q], C$99K.push(C$99a);
            }var C$99V = C$99t[C$99r++];var C$99J = C$99t[C$99r++];var C$99H = C$99t[C$99r++];try {
              var C$99R = decodeScan(C$99t, C$99r, C$99e, C$99K, C$99d, C$99V, C$99J, C$99H >> 4, 15 & C$99H, C$99h);C$99r += C$99R;
            } catch (C$99e) {
              if (C$99e instanceof DNLMarkerError) return warn(C$99e.message + " -- attempting to re-parse the JPEG image."), this.parse(C$99t, { dnlScanLines: C$99e.scanLines });if (C$99e instanceof EOIMarkerError) {
                warn(C$99e.message + " -- ignoring the rest of the image data.");break C$99e;
              }throw C$99e;
            }break;case 65500:
            C$99r += 4;break;case 65535:
            255 !== C$99t[C$99r] && C$99r--;break;default:
            if (255 === C$99t[C$99r - 3] && 192 <= C$99t[C$99r - 2] && C$99t[C$99r - 2] <= 254) {
              C$99r -= 3;break;
            }C$99V = findNextFileMarker(C$99t, C$99r - 2);if (C$99V && C$99V.invalid) {
              warn("JpegImage.parse - unexpected data, current marker is: " + C$99V.invalid), C$99r = C$99V.offset;break;
            }throw new Error("unknown marker " + C$99n.toString(16));}C$99n = readUint16();
      }var C$99h, C$99W;for (this.width = C$99e.samplesPerLine, this.height = C$99e.scanLines, this.jfif = C$99u, this.adobe = C$99l, this.components = [], C$99i = 0; C$99i < C$99e.components.length; C$99i++) {
        var C$99Y = C$99v[(C$99a = C$99e.components[C$99i]).quantizationId];C$99Y && (C$99a.quantizationTable = C$99Y), this.components.push({ output: buildComponentData(0, C$99a), scaleX: C$99a.h / C$99e.maxH, scaleY: C$99a.v / C$99e.maxV, blocksPerLine: C$99a.blocksPerLine, blocksPerColumn: C$99a.blocksPerColumn });
      }this.numComponents = this.components.length;
    }, _getLinearizedBlockData: function (C$99e, C$99f, C$99u, C$99l, C$99d) {
      void 0 === C$99u && (C$99u = !1), void 0 === C$99l && (C$99l = 0), void 0 === C$99d && (C$99d = null);var C$99p = this.width / C$99e,
          C$99v = this.height / C$99f;var C$99t, C$99y, C$99b, C$99w;var C$99r, C$99n, C$99i, C$99o, C$99s;var C$99g;var C$99a = 0;var C$99m;var C$99h = this.components.length;var C$99U = C$99e * C$99f * C$99h;3 == C$99h && C$99u && (C$99U = C$99e * C$99f * 4);var C$99k = new ArrayBuffer(C$99U + C$99l);var C$99c = new Uint8ClampedArray(C$99k, C$99l);var C$99x = new Uint32Array(C$99e);if (3 == C$99h && C$99u) {
        for (C$99i = 0; C$99i < C$99h; C$99i++) {
          for (C$99y = (C$99t = this.components[C$99i]).scaleX * C$99p, C$99b = C$99t.scaleY * C$99v, C$99a = C$99i, C$99m = C$99t.output, C$99w = C$99t.blocksPerLine + 1 << 3, C$99r = 0; C$99r < C$99e; C$99r++) C$99x[C$99r] = (4294967288 & (C$99o = 0 | C$99r * C$99y)) << 3 | 7 & C$99o;for (C$99n = 0; C$99n < C$99f; C$99n++) for (C$99g = C$99w * (4294967288 & (C$99o = 0 | C$99n * C$99b)) | (7 & C$99o) << 3, C$99r = 0; C$99r < C$99e; C$99r++) C$99c[C$99a] = C$99m[C$99g + C$99x[C$99r]], C$99a += 4;
        }if (C$99a = 3, null != C$99d) {
          var C$99E = 0;for (C$99n = 0; C$99n < C$99f; C$99n++) for (C$99r = 0; C$99r < C$99e; C$99r++) C$99c[C$99a] = C$99d[C$99E++], C$99a += 4;
        } else for (C$99n = 0; C$99n < C$99f; C$99n++) for (C$99r = 0; C$99r < C$99e; C$99r++) C$99c[C$99a] = 255, C$99a += 4;
      } else for (C$99i = 0; C$99i < C$99h; C$99i++) {
        for (C$99y = (C$99t = this.components[C$99i]).scaleX * C$99p, C$99b = C$99t.scaleY * C$99v, C$99a = C$99i, C$99m = C$99t.output, C$99w = C$99t.blocksPerLine + 1 << 3, C$99r = 0; C$99r < C$99e; C$99r++) C$99x[C$99r] = (4294967288 & (C$99o = 0 | C$99r * C$99y)) << 3 | 7 & C$99o;for (C$99n = 0; C$99n < C$99f; C$99n++) for (C$99g = C$99w * (4294967288 & (C$99o = 0 | C$99n * C$99b)) | (7 & C$99o) << 3, C$99r = 0; C$99r < C$99e; C$99r++) C$99c[C$99a] = C$99m[C$99g + C$99x[C$99r]], C$99a += C$99h;
      }var C$99T = this._decodeTransform;if (C$99T = 4 !== C$99h || C$99T ? C$99T : new Int32Array([-256, 255, -256, 255, -256, 255, -256, 255])) if (3 == C$99h && C$99u) for (C$99i = 0; C$99i < C$99U;) {
        for (C$99s = C$99o = 0; C$99o < C$99h; C$99o++, C$99i++, C$99s += 2) C$99c[C$99i] = (C$99c[C$99i] * C$99T[C$99s] >> 8) + C$99T[C$99s + 1];C$99i++;
      } else for (C$99i = 0; C$99i < C$99U;) for (C$99s = C$99o = 0; C$99o < C$99h; C$99o++, C$99i++, C$99s += 2) C$99c[C$99i] = (C$99c[C$99i] * C$99T[C$99s] >> 8) + C$99T[C$99s + 1];return C$99c;
    }, get _isColorConversionNeeded() {
      return this.adobe ? !!this.adobe.transformCode : 3 === this.numComponents ? 0 !== this._colorTransform : 1 === this._colorTransform;
    }, _convertYccToRgb: function (C$99e, C$99t) {
      var C$99r, C$99n, C$99i;var C$99o, C$99s;if (C$99t = void 0 === C$99t ? !1 : C$99t) for (C$99o = 0, C$99s = C$99e.length; C$99o < C$99s; C$99o += 3) C$99r = C$99e[C$99o], C$99n = C$99e[C$99o + 1], C$99i = C$99e[C$99o + 2], C$99e[C$99o] = C$99r - 179.456 + 1.402 * C$99i, C$99e[C$99o + 1] = C$99r + 135.459 - .344 * C$99n - .714 * C$99i, C$99e[C$99o + 2] = C$99r - 226.816 + 1.772 * C$99n, C$99o++;else for (C$99o = 0, C$99s = C$99e.length; C$99o < C$99s; C$99o += 3) C$99r = C$99e[C$99o], C$99n = C$99e[C$99o + 1], C$99i = C$99e[C$99o + 2], C$99e[C$99o] = C$99r - 179.456 + 1.402 * C$99i, C$99e[C$99o + 1] = C$99r + 135.459 - .344 * C$99n - .714 * C$99i, C$99e[C$99o + 2] = C$99r - 226.816 + 1.772 * C$99n;return C$99e;
    }, _convertYcckToRgb: function (C$99e) {
      var C$99t, C$99r, C$99n, C$99i;var C$99o = 0;for (var C$99s = 0, C$99a = C$99e.length; C$99s < C$99a; C$99s += 4) C$99t = C$99e[C$99s], C$99r = C$99e[C$99s + 1], C$99n = C$99e[C$99s + 2], C$99i = C$99e[C$99s + 3], C$99e[C$99o++] = C$99r * (-660635669420364e-19 * C$99r + .000437130475926232 * C$99n - 54080610064599e-18 * C$99t + .00048449797120281 * C$99i - .154362151871126) - 122.67195406894 + C$99n * (-.000957964378445773 * C$99n + .000817076911346625 * C$99t - .00477271405408747 * C$99i + 1.53380253221734) + C$99t * (.000961250184130688 * C$99t - .00266257332283933 * C$99i + .48357088451265) + C$99i * (-.000336197177618394 * C$99i + .484791561490776), C$99e[C$99o++] = 107.268039397724 + C$99r * (219927104525741e-19 * C$99r - .000640992018297945 * C$99n + .000659397001245577 * C$99t + .000426105652938837 * C$99i - .176491792462875) + C$99n * (-.000778269941513683 * C$99n + .00130872261408275 * C$99t + .000770482631801132 * C$99i - .151051492775562) + C$99t * (.00126935368114843 * C$99t - .00265090189010898 * C$99i + .25802910206845) + C$99i * (-.000318913117588328 * C$99i - .213742400323665), C$99e[C$99o++] = C$99r * (-.000570115196973677 * C$99r - 263409051004589e-19 * C$99n + .0020741088115012 * C$99t - .00288260236853442 * C$99i + .814272968359295) - 20.810012546947 + C$99n * (-153496057440975e-19 * C$99n - .000132689043961446 * C$99t + .000560833691242812 * C$99i - .195152027534049) + C$99t * (.00174418132927582 * C$99t - .00255243321439347 * C$99i + .116935020465145) + C$99i * (-.000343531996510555 * C$99i + .24165260232407);return C$99e.subarray(0, C$99o);
    }, _convertYcckToCmyk: function (C$99e) {
      var C$99t, C$99r, C$99n;for (var C$99i = 0, C$99o = C$99e.length; C$99i < C$99o; C$99i += 4) C$99t = C$99e[C$99i], C$99r = C$99e[C$99i + 1], C$99n = C$99e[C$99i + 2], C$99e[C$99i] = 434.456 - C$99t - 1.402 * C$99n, C$99e[C$99i + 1] = 119.541 - C$99t + .344 * C$99r + .714 * C$99n, C$99e[C$99i + 2] = 481.816 - C$99t - 1.772 * C$99r;return C$99e;
    }, _convertCmykToRgb: function (C$99e) {
      var C$99t, C$99r, C$99n, C$99i;var C$99o = 0;for (var C$99s = 0, C$99a = C$99e.length; C$99s < C$99a; C$99s += 4) C$99t = C$99e[C$99s] * (1 / 255), C$99r = C$99e[C$99s + 1] * (1 / 255), C$99n = C$99e[C$99s + 2] * (1 / 255), C$99i = C$99e[C$99s + 3] * (1 / 255), C$99e[C$99o++] = 255 + C$99t * (-4.387332384609988 * C$99t + 54.48615194189176 * C$99r + 18.82290502165302 * C$99n + 212.25662451639585 * C$99i - 285.2331026137004) + C$99r * (1.7149763477362134 * C$99r - 5.6096736904047315 * C$99n - 17.873870861415444 * C$99i - 5.497006427196366) + C$99n * (-2.5217340131683033 * C$99n - 21.248923337353073 * C$99i + 17.5119270841813) - C$99i * (21.86122147463605 * C$99i + 189.48180835922747), C$99e[C$99o++] = 255 + C$99t * (8.841041422036149 * C$99t + 60.118027045597366 * C$99r + 6.871425592049007 * C$99n + 31.159100130055922 * C$99i - 79.2970844816548) + C$99r * (-15.310361306967817 * C$99r + 17.575251261109482 * C$99n + 131.35250912493976 * C$99i - 190.9453302588951) + C$99n * (4.444339102852739 * C$99n + 9.8632861493405 * C$99i - 24.86741582555878) - C$99i * (20.737325471181034 * C$99i + 187.80453709719578), C$99e[C$99o++] = 255 + C$99t * (.8842522430003296 * C$99t + 8.078677503112928 * C$99r + 30.89978309703729 * C$99n - .23883238689178934 * C$99i - 14.183576799673286) + C$99r * (10.49593273432072 * C$99r + 63.02378494754052 * C$99n + 50.606957656360734 * C$99i - 112.23884253719248) + C$99n * (.03296041114873217 * C$99n + 115.60384449646641 * C$99i - 193.58209356861505) - C$99i * (22.33816807309886 * C$99i + 180.12613974708367);return C$99e.subarray(0, C$99o);
    }, getData: function (C$99f, C$99u, C$99e, C$99t, C$99r, C$99n) {
      if (void 0 === C$99e && (C$99e = !1), void 0 === C$99t && (C$99t = !1), void 0 === C$99r && (C$99r = 0), void 0 === C$99n && (C$99n = null), 4 < this.numComponents) throw new Error("Unsupported color mode");var C$99i = this._getLinearizedBlockData(C$99f, C$99u, C$99t, C$99r, C$99n);if (1 === this.numComponents && C$99e) {
        var C$99o = C$99i.length;var C$99s = new Uint8ClampedArray(3 * C$99o);var C$99a = 0;for (var C$99h = 0; C$99h < C$99o; C$99h++) {
          var C$99c = C$99i[C$99h];C$99s[C$99a++] = C$99c, C$99s[C$99a++] = C$99c, C$99s[C$99a++] = C$99c;
        }return C$99s;
      }if (3 === this.numComponents && this._isColorConversionNeeded) return this._convertYccToRgb(C$99i, C$99t);if (4 === this.numComponents) {
        if (this._isColorConversionNeeded) return C$99e ? this._convertYcckToRgb(C$99i) : this._convertYcckToCmyk(C$99i);if (C$99e) return this._convertCmykToRgb(C$99i);
      }return C$99i;
    } }, JpegImage;
}();var PngJob = function () {
  function PngJob() {
    this.segments = [];
  }return PngJob.create = function () {
    var C$99e;return null != PngJob.p_sJob ? (C$99e = this.p_sJob, this.p_sJob = this.p_sJob.p_next) : C$99e = new PngJob(), C$99e;
  }, PngJob.free = function (C$99e) {
    C$99e.p_next = this.p_sJob, (PngJob.p_sJob = C$99e).paleT = null, C$99e.segments.length = 0, C$99e.transT = null;
  }, PngJob;
}();var CstPngTools = function () {
  function CstPngTools() {}return CstPngTools.init = function () {
    CstPngTools.p_setHands = { IHDR: CstPngTools.p_IHDR, PLTE: CstPngTools.p_PLTE, IDAT: CstPngTools.p_IDAT, tRNS: CstPngTools.p_TRNS };
  }, CstPngTools.decode = function (C$99f) {
    var C$99e = PngJob.create();var C$99t = new ByteUtils();for (C$99t.open(C$99f), C$99t.skip(8); 0 < C$99t.bytesAvailable();) {
      var C$99u = C$99t.getUint32();var C$99l = C$99t.getUTF(4);C$99l = CstPngTools.p_setHands[C$99l];null != C$99l ? C$99l(C$99e, C$99t, C$99u) : C$99t.skip(C$99u);C$99t.getUint32();
    }C$99t.close();var C$99r = CstPngTools.p_decodePix(C$99e);if (null == C$99r) return null;var C$99n = 0;var C$99i = 0;var C$99o = C$99e.w;var C$99s = C$99e.h;C$99f = new ArrayBuffer(C$99o * C$99s * CstPngTools.p_Pix(C$99e) + 8);var C$99a = new Uint8Array(C$99f, 8);var C$99d = new DataView(C$99f, 0, 8);switch (C$99d.setUint32(0, C$99o), C$99d.setUint32(4, C$99s), C$99e.colorT) {case 3:
        CstPngTools.p_byPale(C$99e, C$99r, C$99a);break;case 2:
        switch (C$99e.bits) {case 8:
            for (var C$99h = 0; C$99h < C$99s; ++C$99h) {
              C$99i++;for (var C$99c = 0; C$99c < C$99o; ++C$99c) C$99a[C$99n++] = C$99r[C$99i++], C$99a[C$99n++] = C$99r[C$99i++], C$99a[C$99n++] = C$99r[C$99i++];
            }break;case 16:
            for (C$99h = 0; C$99h < C$99s; ++C$99h) {
              C$99i++;for (C$99c = 0; C$99c < C$99o; ++C$99c) C$99a[C$99n++] = (C$99r[C$99i] << 8 | C$99r[C$99i + 1]) / 65535 * 255, C$99i += 2, C$99a[C$99n++] = (C$99r[C$99i] << 8 | C$99r[C$99i + 1]) / 65535 * 255, C$99i += 2, C$99a[C$99n++] = (C$99r[C$99i] << 8 | C$99r[C$99i + 1]) / 65535 * 255, C$99i += 2;
            }}break;case 6:
        switch (C$99e.bits) {case 8:
            for (C$99h = 0; C$99h < C$99s; ++C$99h) {
              C$99i++;for (C$99c = 0; C$99c < C$99o; ++C$99c) C$99a[C$99n++] = C$99r[C$99i++], C$99a[C$99n++] = C$99r[C$99i++], C$99a[C$99n++] = C$99r[C$99i++], C$99a[C$99n++] = C$99r[C$99i++];
            }break;case 16:
            for (C$99h = 0; C$99h < C$99s; ++C$99h) {
              C$99i++;for (C$99c = 0; C$99c < C$99o; ++C$99c) C$99a[C$99n++] = (C$99r[C$99i] << 8 | C$99r[C$99i + 1]) / 65535 * 255, C$99i += 2, C$99a[C$99n++] = (C$99r[C$99i] << 8 | C$99r[C$99i + 1]) / 65535 * 255, C$99i += 2, C$99a[C$99n++] = (C$99r[C$99i] << 8 | C$99r[C$99i + 1]) / 65535 * 255, C$99i += 2, C$99a[C$99n++] = (C$99r[C$99i] << 8 | C$99r[C$99i + 1]) / 65535 * 255, C$99i += 2;
            }}break;default:
        console.error("\u672a\u652f\u6301\u7684\u7c7b\u578b\uff1a", C$99e.colorT, C$99e.bits);}return PngJob.free(C$99e), C$99f;
  }, CstPngTools.p_IHDR = function (C$99e, C$99t, C$99r) {
    C$99e.w = C$99t.getUint32(), C$99e.h = C$99t.getUint32(), C$99e.bits = C$99t.getUint8(), C$99e.colorT = C$99t.getUint8(), C$99e.compressT = C$99t.getUint8(), C$99e.filterT = C$99t.getUint8(), C$99e.interT = C$99t.getUint8();
  }, CstPngTools.p_PLTE = function (C$99e, C$99t, C$99r) {
    C$99e.paleT = C$99t.getBytes(C$99r);
  }, CstPngTools.p_IDAT = function (C$99e, C$99t, C$99r) {
    C$99e.segments.push(C$99t.getBytes(C$99r));
  }, CstPngTools.p_TRNS = function (C$99e, C$99t, C$99r) {
    C$99e.transT = C$99t.getBytes(C$99r);
  }, CstPngTools.p_Pale = function (C$99e) {
    var C$99t = C$99e.paleT;var C$99r = C$99e.transT;var C$99n = C$99t.length;var C$99i = new Uint8Array(C$99n / 3 * 4);var C$99o = 0;var C$99s = 0;var C$99a = C$99r.byteLength;var C$99h = 0;for (; C$99o < C$99n;) C$99i[C$99s++] = C$99t[C$99o++], C$99i[C$99s++] = C$99t[C$99o++], C$99i[C$99s++] = C$99t[C$99o++], C$99i[C$99s++] = C$99h < C$99a ? C$99r[C$99h++] : 255;return C$99i;
  }, CstPngTools.p_mergeSeg = function (C$99e) {
    var C$99t = 0;for (var C$99r = 0, C$99n = C$99e; C$99r < C$99n.length; C$99r++) C$99t += (C$99h = C$99n[C$99r]).byteLength;var C$99i = new Uint8Array(C$99t);var C$99o = 0;for (var C$99s = 0, C$99a = C$99e; C$99s < C$99a.length; C$99s++) {
      var C$99h = C$99a[C$99s];C$99i.set(C$99h, C$99o), C$99o += C$99h.length;
    }return new Zlib.Inflate(C$99i).decompress();
  }, CstPngTools.p_Pix = function (C$99e) {
    var C$99t = 3;return 4 & C$99e.colorT && (C$99t = 4), C$99t = 3 == C$99e.colorT && C$99e.transT ? 4 : C$99t;
  }, CstPngTools.p_Bytes = function (C$99e) {
    var C$99t = 1;switch (C$99e.colorT) {case 2:
        C$99t = 3;break;case 4:
        C$99t = 2;break;case 6:
        C$99t = 4;}return 7 + C$99t * C$99e.bits >> 3;
  }, CstPngTools.p_decodePix = function (C$99e) {
    return 0 == C$99e.interT ? this.p_decodeInterT(C$99e) : null;
  }, CstPngTools.p_decodeInterT = function (C$99f) {
    var C$99e = CstPngTools.p_mergeSeg(C$99f.segments);var C$99u = C$99e.byteLength;var C$99l = C$99f.h;var C$99t = CstPngTools.p_Bytes(C$99f);var C$99d = Math.floor((C$99u - C$99l) / C$99l);var C$99p = C$99d + 1;var C$99r = 0;var C$99n = 0;var C$99i = 0,
        C$99o = 0,
        C$99v = 0,
        C$99s = 0,
        C$99a = 0,
        C$99h = 0,
        C$99c = 0;for (; C$99n < C$99u;) switch (C$99e[C$99n++]) {case 0:
        C$99n += C$99d;break;case 1:
        for (C$99n += C$99t, C$99r = C$99t; C$99r < C$99d; ++C$99r, ++C$99n) C$99e[C$99n] = (C$99e[C$99n] + C$99e[C$99n - C$99t]) % 256;break;case 2:
        if (1 != C$99n) for (C$99r = 0; C$99r < C$99d; ++C$99r, ++C$99n) C$99e[C$99n] = (C$99e[C$99n] + C$99e[C$99n - C$99p]) % 256;break;case 3:
        if (1 == C$99n) for (C$99n += C$99t, C$99r = C$99t; C$99r < C$99d; ++C$99r, ++C$99n) C$99e[C$99n] = (C$99e[C$99n] + (C$99e[C$99n - C$99t] >> 1)) % 256;else {
          for (C$99r = 0; C$99r < C$99t; ++C$99r, ++C$99n) C$99e[C$99n] = (C$99e[C$99n] + (C$99e[C$99n - C$99p] >> 1)) % 256;for (C$99r = C$99t; C$99r < C$99d; ++C$99r, ++C$99n) C$99e[C$99n] = (C$99e[C$99n] + (C$99e[C$99n - C$99t] + C$99e[C$99n - C$99p] >> 1)) % 256;
        }break;case 4:
        if (1 == C$99t) {
          if (1 == C$99n) for (C$99i = C$99e[C$99n++], C$99r = 1; C$99r < C$99d; ++C$99r, ++C$99n) C$99i = C$99e[C$99n] = (C$99e[C$99n] + (0 < C$99i ? C$99i : 0)) % 256;else for ((C$99a = C$99s = C$99o = C$99e[C$99n - C$99p]) < 0 && (C$99a = -C$99a), (C$99c = C$99s) < 0 && (C$99c = -C$99c), C$99i = C$99e[C$99n] = C$99e[C$99n] + (!(C$99s <= 0) && 0 <= C$99c ? C$99o : 0), C$99n++, C$99r = 1; C$99r < C$99d; ++C$99r, ++C$99n) (C$99a = (C$99s = C$99i + (C$99o = C$99e[C$99n - C$99p]) - (C$99v = C$99e[C$99n - C$99p - 1])) - C$99i) < 0 && (C$99a = -C$99a), (C$99h = C$99s - C$99o) < 0 && (C$99h = -C$99h), (C$99c = C$99s - C$99v) < 0 && (C$99c = -C$99c), C$99i = C$99e[C$99n] = (C$99e[C$99n] + (C$99a <= C$99h && C$99a <= C$99c ? C$99i : C$99h <= C$99c ? C$99o : C$99v)) % 256;
        } else if (1 == C$99n) for (C$99n += C$99t, C$99o = C$99v = 0, C$99r = C$99t; C$99r < C$99d; ++C$99r, ++C$99n) (C$99a = (C$99s = (C$99i = C$99e[C$99n - C$99t]) + C$99o - C$99v) - C$99i) < 0 && (C$99a = -C$99a), (C$99h = C$99s - C$99o) < 0 && (C$99h = -C$99h), (C$99c = C$99s - C$99v) < 0 && (C$99c = -C$99c), C$99e[C$99n] = (C$99e[C$99n] + (C$99a <= C$99h && C$99a <= C$99c ? C$99i : C$99h <= C$99c ? C$99o : C$99v)) % 256;else {
          for (C$99r = 0; C$99r < C$99t; ++C$99r, ++C$99n) (C$99a = (C$99s = (C$99i = 0) + (C$99o = C$99e[C$99n - C$99p]) - (C$99v = 0)) - C$99i) < 0 && (C$99a = -C$99a), (C$99h = C$99s - C$99o) < 0 && (C$99h = -C$99h), (C$99c = C$99s - C$99v) < 0 && (C$99c = -C$99c), C$99e[C$99n] = (C$99e[C$99n] + (C$99a <= C$99h && C$99a <= C$99c ? C$99i : C$99h <= C$99c ? C$99o : C$99v)) % 256;for (C$99r = C$99t; C$99r < C$99d; ++C$99r, ++C$99n) (C$99a = (C$99s = (C$99i = C$99e[C$99n - C$99t]) + (C$99o = C$99e[C$99n - C$99p]) - (C$99v = C$99e[C$99n - C$99p - C$99t])) - C$99i) < 0 && (C$99a = -C$99a), (C$99h = C$99s - C$99o) < 0 && (C$99h = -C$99h), (C$99c = C$99s - C$99v) < 0 && (C$99c = -C$99c), C$99e[C$99n] = (C$99e[C$99n] + (C$99a <= C$99h && C$99a <= C$99c ? C$99i : C$99h <= C$99c ? C$99o : C$99v)) % 256;
        }break;default:
        console.log("\u89e3\u6790\u51fa\u9519\uff1a" + C$99f.w + ", " + C$99f.h + ", " + C$99t), console.log(C$99e.byteLength);}return C$99e;
  }, CstPngTools.p_byPale = function (C$99f, C$99e, C$99t) {
    var C$99r = 0;var C$99n = 0;var C$99i = C$99f.w;var C$99o = C$99f.h;var C$99s = C$99f.paleT;if (null != C$99f.transT) switch (C$99s = CstPngTools.p_Pale(C$99f), C$99f.bits) {case 1:
        for (var C$99a = 0; C$99a < C$99o; ++C$99a) {
          C$99n++;for (var C$99h = 0; C$99h < C$99i; ++C$99h) {
            var C$99c = 4 * (1 & C$99e[C$99n + (C$99h >> 3)]);C$99t[C$99r++] = C$99s[C$99c], C$99t[C$99r++] = C$99s[C$99c + 1], C$99t[C$99r++] = C$99s[C$99c + 2], C$99t[C$99r++] = C$99s[C$99c + 3];
          }C$99n += C$99i + 7 >> 3;
        }break;case 2:
        for (C$99a = 0; C$99a < C$99o; ++C$99a) {
          C$99n++;for (C$99h = 0; C$99h < C$99i; ++C$99h) {
            C$99c = 4 * (3 & C$99e[C$99n + (C$99h >> 2)]);C$99t[C$99r++] = C$99s[C$99c], C$99t[C$99r++] = C$99s[C$99c + 1], C$99t[C$99r++] = C$99s[C$99c + 2], C$99t[C$99r++] = C$99s[C$99c + 3];
          }C$99n += C$99i + 3 >> 2;
        }break;case 4:
        for (C$99a = 0; C$99a < C$99o; ++C$99a) {
          C$99n++;for (C$99h = 0; C$99h < C$99i; ++C$99h) {
            C$99c = 4 * (15 & C$99e[C$99n + (C$99h >> 1)]);C$99t[C$99r++] = C$99s[C$99c], C$99t[C$99r++] = C$99s[C$99c + 1], C$99t[C$99r++] = C$99s[C$99c + 2], C$99t[C$99r++] = C$99s[C$99c + 3];
          }C$99n += C$99i + 1 >> 1;
        }break;case 8:
        for (C$99a = 0; C$99a < C$99o; ++C$99a) {
          C$99n++;for (C$99h = 0; C$99h < C$99i; ++C$99h) {
            C$99c = 4 * C$99e[C$99n++];C$99t[C$99r++] = C$99s[C$99c], C$99t[C$99r++] = C$99s[C$99c + 1], C$99t[C$99r++] = C$99s[C$99c + 2], C$99t[C$99r++] = C$99s[C$99c + 3];
          }
        }} else switch (C$99f.bits) {case 1:
        for (C$99a = 0; C$99a < C$99o; ++C$99a) {
          C$99n++;for (C$99h = 0; C$99h < C$99i; ++C$99h) {
            C$99c = 3 * (1 & C$99e[C$99n + (C$99h >> 3)]);C$99t[C$99r++] = C$99s[C$99c], C$99t[C$99r++] = C$99s[C$99c + 1], C$99t[C$99r++] = C$99s[C$99c + 2];
          }C$99n += C$99i + 7 >> 3;
        }break;case 2:
        for (C$99a = 0; C$99a < C$99o; ++C$99a) {
          C$99n++;for (C$99h = 0; C$99h < C$99i; ++C$99h) {
            C$99c = 3 * (3 & C$99e[C$99n + (C$99h >> 2)]);C$99t[C$99r++] = C$99s[C$99c], C$99t[C$99r++] = C$99s[C$99c + 1], C$99t[C$99r++] = C$99s[C$99c + 2];
          }C$99n += C$99i + 3 >> 2;
        }break;case 4:
        for (C$99a = 0; C$99a < C$99o; ++C$99a) {
          C$99n++;for (C$99h = 0; C$99h < C$99i; ++C$99h) {
            C$99c = 3 * (15 & C$99e[C$99n + (C$99h >> 1)]);C$99t[C$99r++] = C$99s[C$99c], C$99t[C$99r++] = C$99s[C$99c + 1], C$99t[C$99r++] = C$99s[C$99c + 2];
          }C$99n += C$99i + 1 >> 1;
        }break;case 8:
        for (C$99a = 0; C$99a < C$99o; ++C$99a) {
          C$99n++;for (C$99h = 0; C$99h < C$99i; ++C$99h) {
            C$99c = 3 * C$99e[C$99n++];C$99t[C$99r++] = C$99s[C$99c], C$99t[C$99r++] = C$99s[C$99c + 1], C$99t[C$99r++] = C$99s[C$99c + 2];
          }
        }}
  }, CstPngTools.p_setHands = {}, CstPngTools;
}();var DecodeTools = window.DecodeTools = function () {
  function DecodeTools() {}return DecodeTools.init = function () {
    CstPngTools.init();
  }, DecodeTools.decodeBuff = function (C$99t, C$99e) {
    var C$99r;if (C$99e) C$99r = new Zlib.Inflate(new Uint8Array(C$99t)).decompress();else {
      let C$99e = new Zlib.Unzip(new Uint8Array(C$99t));C$99r = C$99e.decompress("res");
    }return C$99r.buffer.slice(C$99r.byteOffset, C$99r.byteLength);
  }, DecodeTools.decodeImage = function (C$99e, C$99t) {
    if (void 0 === C$99t && (C$99t = null), this.isPng(C$99e)) return CstPngTools.decode(C$99e);var C$99r = new JpegImage();C$99r.parse(C$99e);C$99e = C$99r.width;var C$99n = C$99r.height;var C$99i = DecodeTools.p_needAlpha(C$99e, C$99n) || null != C$99t;C$99r = C$99r.getData(C$99e, C$99n, !0, C$99i, 8, C$99t);C$99i = new DataView(C$99r.buffer);return C$99i.setUint32(0, C$99e), C$99i.setUint32(4, C$99n), C$99r.buffer;
  }, DecodeTools.p_needAlpha = function (C$99e, C$99t) {
    return C$99e % 2 != 0 || C$99t % 2 != 0 || 290 == C$99e && 340 == C$99t || 586 == C$99e && 530 == C$99t || 602 == C$99e && 302 == C$99t || 638 == C$99e && 466 == C$99t;
  }, DecodeTools.isPng = function (C$99e) {
    var C$99t = DecodeTools.PngHeader;for (var C$99r = 0; C$99r < 8; ++C$99r) if (C$99e[C$99r] != C$99t[C$99r]) return !1;return !0;
  }, DecodeTools.PngHeader = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]), DecodeTools;
}();window.Number.isSafeInteger = Number.isSafeInteger || function (C$99e) {
  return "number" == typeof C$99e && (Math.round(C$99e) === C$99e || -9007199254740991 === C$99e || 9007199254740991 === C$99e) && -9007199254740991 <= C$99e && C$99e <= 9007199254740991;
};var fillFun = function (C$99e, C$99t, C$99r) {
  if (C$99r = C$99r || this.length, (C$99t = C$99t || 0) < 0 && (C$99t = this.length + C$99t), C$99r < 0 && (C$99r = this.length + C$99r), !(C$99t >= this.length)) {
    for (C$99r > this.length && (C$99r = this.length); C$99t < C$99r;) this[C$99t++] = C$99e;return this;
  }
};var types = [Uint8Array, Uint16Array, Uint32Array, Uint8ClampedArray, Int8Array, Int16Array, Int32Array, Float32Array, Float64Array];for (var _i = 0, types_1 = types; _i < types_1.length; _i++) {
  var t = types_1[_i];t.prototype.fill || (t.prototype.fill = fillFun);
}