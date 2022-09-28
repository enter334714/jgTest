"use strict";
(function () {
    'use strict';
    var l = void 0, aa = window;
    function r(c, d) { var a = c.split("."), b = aa; !(a[0] in b) && b.execScript && b.execScript("var " + a[0]); for (var e; a.length && (e = a.shift());)
        !a.length && d !== l ? b[e] = d : b = b[e] ? b[e] : b[e] = {}; }
    ;
    var t = "undefined" !== typeof Uint8Array && "undefined" !== typeof Uint16Array && "undefined" !== typeof Uint32Array && "undefined" !== typeof DataView;
    function v(c) { var d = c.length, a = 0, b = Number.POSITIVE_INFINITY, e, f, g, h, k, m, n, p, s, x; for (p = 0; p < d; ++p)
        c[p] > a && (a = c[p]), c[p] < b && (b = c[p]); e = 1 << a; f = new (t ? Uint32Array : Array)(e); g = 1; h = 0; for (k = 2; g <= a;) {
        for (p = 0; p < d; ++p)
            if (c[p] === g) {
                m = 0;
                n = h;
                for (s = 0; s < g; ++s)
                    m = m << 1 | n & 1, n >>= 1;
                x = g << 16 | p;
                for (s = m; s < e; s += k)
                    f[s] = x;
                ++h;
            }
        ++g;
        h <<= 1;
        k <<= 1;
    } return [f, a, b]; }
    ;
    function w(c, d) {
        this.g = [];
        this.h = 32768;
        this.d = this.f = this.a = this.l = 0;
        this.input = t ? new Uint8Array(c) : c;
        this.m = !1;
        this.i = y;
        this.r = !1;
        if (d || !(d = {}))
            d.index && (this.a = d.index), d.bufferSize && (this.h = d.bufferSize), d.bufferType && (this.i = d.bufferType), d.resize && (this.r = d.resize);
        switch (this.i) {
            case A:
                this.b = 32768;
                this.c = new (t ? Uint8Array : Array)(32768 + this.h + 258);
                break;
            case y:
                this.b = 0;
                this.c = new (t ? Uint8Array : Array)(this.h);
                this.e = this.z;
                this.n = this.v;
                this.j = this.w;
                break;
            default: throw Error("invalid inflate mode");
        }
    }
    var A = 0, y = 1, B = { t: A, s: y };
    w.prototype.k = function () {
        for (; !this.m;) {
            var c = C(this, 3);
            c & 1 && (this.m = !0);
            c >>>= 1;
            switch (c) {
                case 0:
                    var d = this.input, a = this.a, b = this.c, e = this.b, f = d.length, g = l, h = l, k = b.length, m = l;
                    this.d = this.f = 0;
                    if (a + 1 >= f)
                        throw Error("invalid uncompressed block header: LEN");
                    g = d[a++] | d[a++] << 8;
                    if (a + 1 >= f)
                        throw Error("invalid uncompressed block header: NLEN");
                    h = d[a++] | d[a++] << 8;
                    if (g === ~h)
                        throw Error("invalid uncompressed block header: length verify");
                    if (a + g > d.length)
                        throw Error("input buffer is broken");
                    switch (this.i) {
                        case A:
                            for (; e +
                                g > b.length;) {
                                m = k - e;
                                g -= m;
                                if (t)
                                    b.set(d.subarray(a, a + m), e), e += m, a += m;
                                else
                                    for (; m--;)
                                        b[e++] = d[a++];
                                this.b = e;
                                b = this.e();
                                e = this.b;
                            }
                            break;
                        case y:
                            for (; e + g > b.length;)
                                b = this.e({ p: 2 });
                            break;
                        default: throw Error("invalid inflate mode");
                    }
                    if (t)
                        b.set(d.subarray(a, a + g), e), e += g, a += g;
                    else
                        for (; g--;)
                            b[e++] = d[a++];
                    this.a = a;
                    this.b = e;
                    this.c = b;
                    break;
                case 1:
                    this.j(ba, ca);
                    break;
                case 2:
                    for (var n = C(this, 5) + 257, p = C(this, 5) + 1, s = C(this, 4) + 4, x = new (t ? Uint8Array : Array)(D.length), S = l, T = l, U = l, u = l, M = l, F = l, z = l, q = l, V = l, q = 0; q < s; ++q)
                        x[D[q]] =
                            C(this, 3);
                    if (!t) {
                        q = s;
                        for (s = x.length; q < s; ++q)
                            x[D[q]] = 0;
                    }
                    S = v(x);
                    u = new (t ? Uint8Array : Array)(n + p);
                    q = 0;
                    for (V = n + p; q < V;)
                        switch (M = E(this, S), M) {
                            case 16:
                                for (z = 3 + C(this, 2); z--;)
                                    u[q++] = F;
                                break;
                            case 17:
                                for (z = 3 + C(this, 3); z--;)
                                    u[q++] = 0;
                                F = 0;
                                break;
                            case 18:
                                for (z = 11 + C(this, 7); z--;)
                                    u[q++] = 0;
                                F = 0;
                                break;
                            default: F = u[q++] = M;
                        }
                    T = t ? v(u.subarray(0, n)) : v(u.slice(0, n));
                    U = t ? v(u.subarray(n)) : v(u.slice(n));
                    this.j(T, U);
                    break;
                default: throw Error("unknown BTYPE: " + c);
            }
        }
        return this.n();
    };
    var G = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], D = t ? new Uint16Array(G) : G, H = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258], I = t ? new Uint16Array(H) : H, J = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0], K = t ? new Uint8Array(J) : J, L = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577], da = t ? new Uint16Array(L) : L, ea = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12,
        13, 13], N = t ? new Uint8Array(ea) : ea, O = new (t ? Uint8Array : Array)(288), P, fa;
    P = 0;
    for (fa = O.length; P < fa; ++P)
        O[P] = 143 >= P ? 8 : 255 >= P ? 9 : 279 >= P ? 7 : 8;
    var ba = v(O), Q = new (t ? Uint8Array : Array)(30), R, ga;
    R = 0;
    for (ga = Q.length; R < ga; ++R)
        Q[R] = 5;
    var ca = v(Q);
    function C(c, d) { for (var a = c.f, b = c.d, e = c.input, f = c.a, g = e.length, h; b < d;) {
        if (f >= g)
            throw Error("input buffer is broken");
        a |= e[f++] << b;
        b += 8;
    } h = a & (1 << d) - 1; c.f = a >>> d; c.d = b - d; c.a = f; return h; }
    function E(c, d) { for (var a = c.f, b = c.d, e = c.input, f = c.a, g = e.length, h = d[0], k = d[1], m, n; b < k && !(f >= g);)
        a |= e[f++] << b, b += 8; m = h[a & (1 << k) - 1]; n = m >>> 16; if (n > b)
        throw Error("invalid code length: " + n); c.f = a >> n; c.d = b - n; c.a = f; return m & 65535; }
    w.prototype.j = function (c, d) { var a = this.c, b = this.b; this.o = c; for (var e = a.length - 258, f, g, h, k; 256 !== (f = E(this, c));)
        if (256 > f)
            b >= e && (this.b = b, a = this.e(), b = this.b), a[b++] = f;
        else {
            g = f - 257;
            k = I[g];
            0 < K[g] && (k += C(this, K[g]));
            f = E(this, d);
            h = da[f];
            0 < N[f] && (h += C(this, N[f]));
            b >= e && (this.b = b, a = this.e(), b = this.b);
            for (; k--;)
                a[b] = a[b++ - h];
        } for (; 8 <= this.d;)
        this.d -= 8, this.a--; this.b = b; };
    w.prototype.w = function (c, d) { var a = this.c, b = this.b; this.o = c; for (var e = a.length, f, g, h, k; 256 !== (f = E(this, c));)
        if (256 > f)
            b >= e && (a = this.e(), e = a.length), a[b++] = f;
        else {
            g = f - 257;
            k = I[g];
            0 < K[g] && (k += C(this, K[g]));
            f = E(this, d);
            h = da[f];
            0 < N[f] && (h += C(this, N[f]));
            b + k > e && (a = this.e(), e = a.length);
            for (; k--;)
                a[b] = a[b++ - h];
        } for (; 8 <= this.d;)
        this.d -= 8, this.a--; this.b = b; };
    w.prototype.e = function () { var c = new (t ? Uint8Array : Array)(this.b - 32768), d = this.b - 32768, a, b, e = this.c; if (t)
        c.set(e.subarray(32768, c.length));
    else {
        a = 0;
        for (b = c.length; a < b; ++a)
            c[a] = e[a + 32768];
    } this.g.push(c); this.l += c.length; if (t)
        e.set(e.subarray(d, d + 32768));
    else
        for (a = 0; 32768 > a; ++a)
            e[a] = e[d + a]; this.b = 32768; return e; };
    w.prototype.z = function (c) { var d, a = this.input.length / this.a + 1 | 0, b, e, f, g = this.input, h = this.c; c && ("number" === typeof c.p && (a = c.p), "number" === typeof c.u && (a += c.u)); 2 > a ? (b = (g.length - this.a) / this.o[2], f = 258 * (b / 2) | 0, e = f < h.length ? h.length + f : h.length << 1) : e = h.length * a; t ? (d = new Uint8Array(e), d.set(h)) : d = h; return this.c = d; };
    w.prototype.n = function () { var c = 0, d = this.c, a = this.g, b, e = new (t ? Uint8Array : Array)(this.l + (this.b - 32768)), f, g, h, k; if (0 === a.length)
        return t ? this.c.subarray(32768, this.b) : this.c.slice(32768, this.b); f = 0; for (g = a.length; f < g; ++f) {
        b = a[f];
        h = 0;
        for (k = b.length; h < k; ++h)
            e[c++] = b[h];
    } f = 32768; for (g = this.b; f < g; ++f)
        e[c++] = d[f]; this.g = []; return this.buffer = e; };
    w.prototype.v = function () { var c, d = this.b; t ? this.r ? (c = new Uint8Array(d), c.set(this.c.subarray(0, d))) : c = this.c.subarray(0, d) : (this.c.length > d && (this.c.length = d), c = this.c); return this.buffer = c; };
    function W(c, d) { var a, b; this.input = c; this.a = 0; if (d || !(d = {}))
        d.index && (this.a = d.index), d.verify && (this.A = d.verify); a = c[this.a++]; b = c[this.a++]; switch (a & 15) {
        case ha:
            this.method = ha;
            break;
        default: throw Error("unsupported compression method");
    } if (0 !== ((a << 8) + b) % 31)
        throw Error("invalid fcheck flag:" + ((a << 8) + b) % 31); if (b & 32)
        throw Error("fdict flag is not supported"); this.q = new w(c, { index: this.a, bufferSize: d.bufferSize, bufferType: d.bufferType, resize: d.resize }); }
    W.prototype.k = function () { var c = this.input, d, a; d = this.q.k(); this.a = this.q.a; if (this.A) {
        a = (c[this.a++] << 24 | c[this.a++] << 16 | c[this.a++] << 8 | c[this.a++]) >>> 0;
        var b = d;
        if ("string" === typeof b) {
            var e = b.split(""), f, g;
            f = 0;
            for (g = e.length; f < g; f++)
                e[f] = (e[f].charCodeAt(0) & 255) >>> 0;
            b = e;
        }
        for (var h = 1, k = 0, m = b.length, n, p = 0; 0 < m;) {
            n = 1024 < m ? 1024 : m;
            m -= n;
            do
                h += b[p++], k += h;
            while (--n);
            h %= 65521;
            k %= 65521;
        }
        if (a !== (k << 16 | h) >>> 0)
            throw Error("invalid adler-32 checksum");
    } return d; };
    var ha = 8;
    r("Zlib.Inflate", W);
    r("Zlib.Inflate.prototype.decompress", W.prototype.k);
    var X = { ADAPTIVE: B.s, BLOCK: B.t }, Y, Z, $, ia;
    if (Object.keys)
        Y = Object.keys(X);
    else
        for (Z in Y = [], $ = 0, X)
            Y[$++] = Z;
    $ = 0;
    for (ia = Y.length; $ < ia; ++$)
        Z = Y[$], r("Zlib.Inflate.BufferType." + Z, X[Z]);
}).call(this);
(function () {
    'use strict';
    function l(a) {
        throw a;
    }
    var r = void 0,
    t,
    aa = window;  //微信代码
    function v(a, b) {
        var c = a.split("."),
        d = aa;
        !(c[0]in d) && d.execScript && d.execScript("var " + c[0]);
        for (var f; c.length && (f = c.shift()); )
            !c.length && b !== r ? d[f] = b : d = d[f] ? d[f] : d[f] = {}
    };
    var y = "undefined" !== typeof Uint8Array && "undefined" !== typeof Uint16Array && "undefined" !== typeof Uint32Array && "undefined" !== typeof DataView;
    new(y ? Uint8Array : Array)(256);
    var z;
    for (z = 0; 256 > z; ++z)
        for (var B = z, ba = 7, B = B >>> 1; B; B >>>= 1)
            --ba;
    var ca = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759,
        2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977,
        2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755,
        2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956,
        3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270,
        936918E3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117],
    C = y ? new Uint32Array(ca) : ca;
    if (aa.Uint8Array !== r)
        // try {  //微信代码
        //     eval("String.fromCharCode.apply(null, new Uint8Array([0]));")  //微信代码
        // } catch (ea) {  //微信代码
            String.fromCharCode.apply = function (a) {
                return function (b, c) {
                    return a.call(String.fromCharCode, b, Array.prototype.slice.call(c))
                }
            }
            (String.fromCharCode.apply)
        // };  //微信代码
    function D(a) {
        var b = a.length,
        c = 0,
        d = Number.POSITIVE_INFINITY,
        f,
        h,
        k,
        e,
        g,
        m,
        p,
        s,
        q,
        x;
        for (s = 0; s < b; ++s)
            a[s] > c && (c = a[s]), a[s] < d && (d = a[s]);
        f = 1 << c;
        h = new(y ? Uint32Array : Array)(f);
        k = 1;
        e = 0;
        for (g = 2; k <= c; ) {
            for (s = 0; s < b; ++s)
                if (a[s] === k) {
                    m = 0;
                    p = e;
                    for (q = 0; q < k; ++q)
                        m = m << 1 | p & 1, p >>= 1;
                    x = k << 16 | s;
                    for (q = m; q < f; q += g)
                        h[q] = x;
                    ++e
                }
            ++k;
            e <<= 1;
            g <<= 1
        }
        return [h, c, d]
    };
    var F = [],
    G;
    for (G = 0; 288 > G; G++)
        switch (!0) {
        case 143 >= G:
            F.push([G + 48, 8]);
            break;
        case 255 >= G:
            F.push([G - 144 + 400, 9]);
            break;
        case 279 >= G:
            F.push([G - 256 + 0, 7]);
            break;
        case 287 >= G:
            F.push([G - 280 + 192, 8]);
            break;
        default:
            l("invalid literal: " + G)
        }
    var fa = function () {
        function a(a) {
            switch (!0) {
            case 3 === a:
                return [257, a - 3, 0];
            case 4 === a:
                return [258, a - 4, 0];
            case 5 === a:
                return [259, a - 5, 0];
            case 6 === a:
                return [260, a - 6, 0];
            case 7 === a:
                return [261, a - 7, 0];
            case 8 === a:
                return [262, a - 8, 0];
            case 9 === a:
                return [263, a - 9, 0];
            case 10 === a:
                return [264, a - 10, 0];
            case 12 >= a:
                return [265, a - 11, 1];
            case 14 >= a:
                return [266, a - 13, 1];
            case 16 >= a:
                return [267, a - 15, 1];
            case 18 >= a:
                return [268, a - 17, 1];
            case 22 >= a:
                return [269, a - 19, 2];
            case 26 >= a:
                return [270, a - 23, 2];
            case 30 >= a:
                return [271, a - 27, 2];
            case 34 >= a:
                return [272,
                    a - 31, 2];
            case 42 >= a:
                return [273, a - 35, 3];
            case 50 >= a:
                return [274, a - 43, 3];
            case 58 >= a:
                return [275, a - 51, 3];
            case 66 >= a:
                return [276, a - 59, 3];
            case 82 >= a:
                return [277, a - 67, 4];
            case 98 >= a:
                return [278, a - 83, 4];
            case 114 >= a:
                return [279, a - 99, 4];
            case 130 >= a:
                return [280, a - 115, 4];
            case 162 >= a:
                return [281, a - 131, 5];
            case 194 >= a:
                return [282, a - 163, 5];
            case 226 >= a:
                return [283, a - 195, 5];
            case 257 >= a:
                return [284, a - 227, 5];
            case 258 === a:
                return [285, a - 258, 0];
            default:
                l("invalid length: " + a)
            }
        }
        var b = [],
        c,
        d;
        for (c = 3; 258 >= c; c++)
            d = a(c), b[c] = d[2] << 24 | d[1] <<
                16 | d[0];
        return b
    }
    ();
    y && new Uint32Array(fa);
    function I(a, b) {
        this.l = [];
        this.m = 32768;
        this.d = this.f = this.c = this.t = 0;
        this.input = y ? new Uint8Array(a) : a;
        this.u = !1;
        this.n = J;
        this.K = !1;
        if (b || !(b = {}))
            b.index && (this.c = b.index), b.bufferSize && (this.m = b.bufferSize), b.bufferType && (this.n = b.bufferType), b.resize && (this.K = b.resize);
        switch (this.n) {
        case ga:
            this.a = 32768;
            this.b = new(y ? Uint8Array : Array)(32768 + this.m + 258);
            break;
        case J:
            this.a = 0;
            this.b = new(y ? Uint8Array : Array)(this.m);
            this.e = this.W;
            this.B = this.R;
            this.q = this.V;
            break;
        default:
            l(Error("invalid inflate mode"))
        }
    }
    var ga = 0,
    J = 1;
    I.prototype.r = function () {
        for (; !this.u; ) {
            var a = K(this, 3);
            a & 1 && (this.u = !0);
            a >>>= 1;
            switch (a) {
            case 0:
                var b = this.input,
                c = this.c,
                d = this.b,
                f = this.a,
                h = b.length,
                k = r,
                e = r,
                g = d.length,
                m = r;
                this.d = this.f = 0;
                c + 1 >= h && l(Error("invalid uncompressed block header: LEN"));
                k = b[c++] | b[c++] << 8;
                c + 1 >= h && l(Error("invalid uncompressed block header: NLEN"));
                e = b[c++] | b[c++] << 8;
                k === ~e && l(Error("invalid uncompressed block header: length verify"));
                c + k > b.length && l(Error("input buffer is broken"));
                switch (this.n) {
                case ga:
                    for (; f + k > d.length; ) {
                        m =
                            g - f;
                        k -= m;
                        if (y)
                            d.set(b.subarray(c, c + m), f), f += m, c += m;
                        else
                            for (; m--; )
                                d[f++] = b[c++];
                        this.a = f;
                        d = this.e();
                        f = this.a
                    }
                    break;
                case J:
                    for (; f + k > d.length; )
                        d = this.e({
                            H: 2
                        });
                    break;
                default:
                    l(Error("invalid inflate mode"))
                }
                if (y)
                    d.set(b.subarray(c, c + k), f), f += k, c += k;
                else
                    for (; k--; )
                        d[f++] = b[c++];
                this.c = c;
                this.a = f;
                this.b = d;
                break;
            case 1:
                this.q(ha, ia);
                break;
            case 2:
                for (var p = K(this, 5) + 257, s = K(this, 5) + 1, q = K(this, 4) + 4, x = new(y ? Uint8Array : Array)(L.length), u = r, n = r, E = r, A = r, X = r, O = r, H = r, w = r, da = r, w = 0; w < q; ++w)
                    x[L[w]] = K(this, 3);
                if (!y) {
                    w =
                        q;
                    for (q = x.length; w < q; ++w)
                        x[L[w]] = 0
                }
                u = D(x);
                A = new(y ? Uint8Array : Array)(p + s);
                w = 0;
                for (da = p + s; w < da; )
                    switch (X = M(this, u), X) {
                    case 16:
                        for (H = 3 + K(this, 2); H--; )
                            A[w++] = O;
                        break;
                    case 17:
                        for (H = 3 + K(this, 3); H--; )
                            A[w++] = 0;
                        O = 0;
                        break;
                    case 18:
                        for (H = 11 + K(this, 7); H--; )
                            A[w++] = 0;
                        O = 0;
                        break;
                    default:
                        O = A[w++] = X
                    }
                n = y ? D(A.subarray(0, p)) : D(A.slice(0, p));
                E = y ? D(A.subarray(p)) : D(A.slice(p));
                this.q(n, E);
                break;
            default:
                l(Error("unknown BTYPE: " + a))
            }
        }
        return this.B()
    };
    var ja = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
    L = y ? new Uint16Array(ja) : ja,
    ka = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258],
    la = y ? new Uint16Array(ka) : ka,
    ma = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0],
    N = y ? new Uint8Array(ma) : ma,
    na = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577],
    oa = y ? new Uint16Array(na) : na,
    pa = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
        11, 11, 12, 12, 13, 13],
    P = y ? new Uint8Array(pa) : pa,
    Q = new(y ? Uint8Array : Array)(288),
    R,
    qa;
    R = 0;
    for (qa = Q.length; R < qa; ++R)
        Q[R] = 143 >= R ? 8 : 255 >= R ? 9 : 279 >= R ? 7 : 8;
    var ha = D(Q),
    S = new(y ? Uint8Array : Array)(30),
    T,
    ra;
    T = 0;
    for (ra = S.length; T < ra; ++T)
        S[T] = 5;
    var ia = D(S);
    function K(a, b) {
        for (var c = a.f, d = a.d, f = a.input, h = a.c, k = f.length, e; d < b; )
            h >= k && l(Error("input buffer is broken")), c |= f[h++] << d, d += 8;
        e = c & (1 << b) - 1;
        a.f = c >>> b;
        a.d = d - b;
        a.c = h;
        return e
    }
    function M(a, b) {
        for (var c = a.f, d = a.d, f = a.input, h = a.c, k = f.length, e = b[0], g = b[1], m, p; d < g && !(h >= k); )
            c |= f[h++] << d, d += 8;
        m = e[c & (1 << g) - 1];
        p = m >>> 16;
        p > d && l(Error("invalid code length: " + p));
        a.f = c >> p;
        a.d = d - p;
        a.c = h;
        return m & 65535
    }
    t = I.prototype;
    t.q = function (a, b) {
        var c = this.b,
        d = this.a;
        this.C = a;
        for (var f = c.length - 258, h, k, e, g; 256 !== (h = M(this, a)); )
            if (256 > h)
                d >= f && (this.a = d, c = this.e(), d = this.a), c[d++] = h;
            else {
                k = h - 257;
                g = la[k];
                0 < N[k] && (g += K(this, N[k]));
                h = M(this, b);
                e = oa[h];
                0 < P[h] && (e += K(this, P[h]));
                d >= f && (this.a = d, c = this.e(), d = this.a);
                for (; g--; )
                    c[d] = c[d++ - e]
            }
        for (; 8 <= this.d; )
            this.d -= 8, this.c--;
        this.a = d
    };
    t.V = function (a, b) {
        var c = this.b,
        d = this.a;
        this.C = a;
        for (var f = c.length, h, k, e, g; 256 !== (h = M(this, a)); )
            if (256 > h)
                d >= f && (c = this.e(), f = c.length), c[d++] = h;
            else {
                k = h - 257;
                g = la[k];
                0 < N[k] && (g += K(this, N[k]));
                h = M(this, b);
                e = oa[h];
                0 < P[h] && (e += K(this, P[h]));
                d + g > f && (c = this.e(), f = c.length);
                for (; g--; )
                    c[d] = c[d++ - e]
            }
        for (; 8 <= this.d; )
            this.d -= 8, this.c--;
        this.a = d
    };
    t.e = function () {
        var a = new(y ? Uint8Array : Array)(this.a - 32768),
        b = this.a - 32768,
        c,
        d,
        f = this.b;
        if (y)
            a.set(f.subarray(32768, a.length));
        else {
            c = 0;
            for (d = a.length; c < d; ++c)
                a[c] = f[c + 32768]
        }
        this.l.push(a);
        this.t += a.length;
        if (y)
            f.set(f.subarray(b, b + 32768));
        else
            for (c = 0; 32768 > c; ++c)
                f[c] = f[b + c];
        this.a = 32768;
        return f
    };
    t.W = function (a) {
        var b,
        c = this.input.length / this.c + 1 | 0,
        d,
        f,
        h,
        k = this.input,
        e = this.b;
        a && ("number" === typeof a.H && (c = a.H), "number" === typeof a.P && (c += a.P));
        2 > c ? (d = (k.length - this.c) / this.C[2], h = 258 * (d / 2) | 0, f = h < e.length ? e.length + h : e.length << 1) : f = e.length * c;
        y ? (b = new Uint8Array(f), b.set(e)) : b = e;
        return this.b = b
    };
    t.B = function () {
        var a = 0,
        b = this.b,
        c = this.l,
        d,
        f = new(y ? Uint8Array : Array)(this.t + (this.a - 32768)),
        h,
        k,
        e,
        g;
        if (0 === c.length)
            return y ? this.b.subarray(32768, this.a) : this.b.slice(32768, this.a);
        h = 0;
        for (k = c.length; h < k; ++h) {
            d = c[h];
            e = 0;
            for (g = d.length; e < g; ++e)
                f[a++] = d[e]
        }
        h = 32768;
        for (k = this.a; h < k; ++h)
            f[a++] = b[h];
        this.l = [];
        return this.buffer = f
    };
    t.R = function () {
        var a,
        b = this.a;
        y ? this.K ? (a = new Uint8Array(b), a.set(this.b.subarray(0, b))) : a = this.b.subarray(0, b) : (this.b.length > b && (this.b.length = b), a = this.b);
        return this.buffer = a
    };
    function U(a) {
        a = a || {};
        this.files = [];
        this.v = a.comment
    }
    U.prototype.L = function (a) {
        this.j = a
    };
    U.prototype.s = function (a) {
        var b = a[2] & 65535 | 2;
        return b * (b ^ 1) >> 8 & 255
    };
    U.prototype.k = function (a, b) {
        a[0] = (C[(a[0] ^ b) & 255] ^ a[0] >>> 8) >>> 0;
        a[1] = (6681 * (20173 * (a[1] + (a[0] & 255)) >>> 0) >>> 0) + 1 >>> 0;
        a[2] = (C[(a[2] ^ a[1] >>> 24) & 255] ^ a[2] >>> 8) >>> 0
    };
    U.prototype.T = function (a) {
        var b = [305419896, 591751049, 878082192],
        c,
        d;
        y && (b = new Uint32Array(b));
        c = 0;
        for (d = a.length; c < d; ++c)
            this.k(b, a[c] & 255);
        return b
    };
    function V(a, b) {
        b = b || {};
        this.input = y && a instanceof Array ? new Uint8Array(a) : a;
        this.c = 0;
        this.ba = b.verify || !1;
        this.j = b.password
    }
    var sa = {
        O: 0,
        M: 8
    },
    W = [80, 75, 1, 2],
    Y = [80, 75, 3, 4],
    Z = [80, 75, 5, 6];
    function ta(a, b) {
        this.input = a;
        this.offset = b
    }
    ta.prototype.parse = function () {
        var a = this.input,
        b = this.offset;
        (a[b++] !== W[0] || a[b++] !== W[1] || a[b++] !== W[2] || a[b++] !== W[3]) && l(Error("invalid file header signature"));
        this.version = a[b++];
        this.ia = a[b++];
        this.Z = a[b++] | a[b++] << 8;
        this.I = a[b++] | a[b++] << 8;
        this.A = a[b++] | a[b++] << 8;
        this.time = a[b++] | a[b++] << 8;
        this.U = a[b++] | a[b++] << 8;
        this.p = (a[b++] | a[b++] << 8 | a[b++] << 16 | a[b++] << 24) >>> 0;
        this.z = (a[b++] | a[b++] << 8 | a[b++] << 16 | a[b++] << 24) >>> 0;
        this.J = (a[b++] | a[b++] << 8 | a[b++] << 16 | a[b++] << 24) >>> 0;
        this.h = a[b++] | a[b++] <<
            8;
        this.g = a[b++] | a[b++] << 8;
        this.F = a[b++] | a[b++] << 8;
        this.ea = a[b++] | a[b++] << 8;
        this.ga = a[b++] | a[b++] << 8;
        this.fa = a[b++] | a[b++] << 8 | a[b++] << 16 | a[b++] << 24;
        this.$ = (a[b++] | a[b++] << 8 | a[b++] << 16 | a[b++] << 24) >>> 0;
        this.filename = String.fromCharCode.apply(null, y ? a.subarray(b, b += this.h) : a.slice(b, b += this.h));
        this.X = y ? a.subarray(b, b += this.g) : a.slice(b, b += this.g);
        this.v = y ? a.subarray(b, b + this.F) : a.slice(b, b + this.F);
        this.length = b - this.offset
    };
    function ua(a, b) {
        this.input = a;
        this.offset = b
    }
    var va = {
        N: 1,
        ca: 8,
        da: 2048
    };
    ua.prototype.parse = function () {
        var a = this.input,
        b = this.offset;
        (a[b++] !== Y[0] || a[b++] !== Y[1] || a[b++] !== Y[2] || a[b++] !== Y[3]) && l(Error("invalid local file header signature"));
        this.Z = a[b++] | a[b++] << 8;
        this.I = a[b++] | a[b++] << 8;
        this.A = a[b++] | a[b++] << 8;
        this.time = a[b++] | a[b++] << 8;
        this.U = a[b++] | a[b++] << 8;
        this.p = (a[b++] | a[b++] << 8 | a[b++] << 16 | a[b++] << 24) >>> 0;
        this.z = (a[b++] | a[b++] << 8 | a[b++] << 16 | a[b++] << 24) >>> 0;
        this.J = (a[b++] | a[b++] << 8 | a[b++] << 16 | a[b++] << 24) >>> 0;
        this.h = a[b++] | a[b++] << 8;
        this.g = a[b++] | a[b++] << 8;
        this.filename =
            String.fromCharCode.apply(null, y ? a.subarray(b, b += this.h) : a.slice(b, b += this.h));
        this.X = y ? a.subarray(b, b += this.g) : a.slice(b, b += this.g);
        this.length = b - this.offset
    };
    function $(a) {
        var b = [],
        c = {},
        d,
        f,
        h,
        k;
        if (!a.i) {
            if (a.o === r) {
                var e = a.input,
                g;
                if (!a.D)
                    a: {
                        var m = a.input,
                        p;
                        for (p = m.length - 12; 0 < p; --p)
                            if (m[p] === Z[0] && m[p + 1] === Z[1] && m[p + 2] === Z[2] && m[p + 3] === Z[3]) {
                                a.D = p;
                                break a
                            }
                        l(Error("End of Central Directory Record not found"))
                    }
                g = a.D;
                (e[g++] !== Z[0] || e[g++] !== Z[1] || e[g++] !== Z[2] || e[g++] !== Z[3]) && l(Error("invalid signature"));
                a.ha = e[g++] | e[g++] << 8;
                a.ja = e[g++] | e[g++] << 8;
                a.ka = e[g++] | e[g++] << 8;
                a.aa = e[g++] | e[g++] << 8;
                a.Q = (e[g++] | e[g++] << 8 | e[g++] << 16 | e[g++] << 24) >>> 0;
                a.o = (e[g++] |
                    e[g++] << 8 | e[g++] << 16 | e[g++] << 24) >>> 0;
                a.w = e[g++] | e[g++] << 8;
                a.v = y ? e.subarray(g, g + a.w) : e.slice(g, g + a.w)
            }
            d = a.o;
            h = 0;
            for (k = a.aa; h < k; ++h)
                f = new ta(a.input, d), f.parse(), d += f.length, b[h] = f, c[f.filename] = h;
            a.Q < d - a.o && l(Error("invalid file header size"));
            a.i = b;
            a.G = c
        }
    }
    t = V.prototype;
    t.Y = function () {
        var a = [],
        b,
        c,
        d;
        this.i || $(this);
        d = this.i;
        b = 0;
        for (c = d.length; b < c; ++b)
            a[b] = d[b].filename;
        return a
    };
    t.r = function (a, b) {
        var c;
        this.G || $(this);
        c = this.G[a];
        c === r && l(Error(a + " not found"));
        var d;
        d = b || {};
        var f = this.input,
        h = this.i,
        k,
        e,
        g,
        m,
        p,
        s,
        q,
        x;
        h || $(this);
        h[c] === r && l(Error("wrong index"));
        e = h[c].$;
        k = new ua(this.input, e);
        k.parse();
        e += k.length;
        g = k.z;
        if (0 !== (k.I & va.N)) {
            !d.password && !this.j && l(Error("please set password"));
            s = this.S(d.password || this.j);
            q = e;
            for (x = e + 12; q < x; ++q)
                wa(this, s, f[q]);
            e += 12;
            g -= 12;
            q = e;
            for (x = e + g; q < x; ++q)
                f[q] = wa(this, s, f[q])
        }
        switch (k.A) {
        case sa.O:
            m = y ? this.input.subarray(e, e + g) : this.input.slice(e,
                    e + g);
            break;
        case sa.M:
            m = (new I(this.input, {
                    index: e,
                    bufferSize: k.J
                })).r();
            break;
        default:
            l(Error("unknown compression type"))
        }
        if (this.ba) {
            var u = r,
            n,
            E = "number" === typeof u ? u : u = 0,
            A = m.length;
            n = -1;
            for (E = A & 7; E--; ++u)
                n = n >>> 8 ^ C[(n ^ m[u]) & 255];
            for (E = A >> 3; E--; u += 8)
                n = n >>> 8 ^ C[(n ^ m[u]) & 255], n = n >>> 8 ^ C[(n ^ m[u + 1]) & 255], n = n >>> 8 ^ C[(n ^ m[u + 2]) & 255], n = n >>> 8 ^ C[(n ^ m[u + 3]) & 255], n = n >>> 8 ^ C[(n ^ m[u + 4]) & 255], n = n >>> 8 ^ C[(n ^ m[u + 5]) & 255], n = n >>> 8 ^ C[(n ^ m[u + 6]) & 255], n = n >>> 8 ^ C[(n ^ m[u + 7]) & 255];
            p = (n ^ 4294967295) >>> 0;
            k.p !== p && l(Error("wrong crc: file=0x" +
                    k.p.toString(16) + ", data=0x" + p.toString(16)))
        }
        return m
    };
    t.L = function (a) {
        this.j = a
    };
    function wa(a, b, c) {
        c ^= a.s(b);
        a.k(b, c);
        return c
    }
    t.k = U.prototype.k;
    t.S = U.prototype.T;
    t.s = U.prototype.s;
    v("Zlib.Unzip", V);
    v("Zlib.Unzip.prototype.decompress", V.prototype.r);
    v("Zlib.Unzip.prototype.getFilenames", V.prototype.Y);
    v("Zlib.Unzip.prototype.setPassword", V.prototype.L);
}).call(this);
(function webpackUniversalModuleDefinition(root, factory) {
    if (typeof exports === 'object' && typeof module === 'object')
        window["msgpack"] = module.exports = factory();
    else if (typeof define === 'function' && define.amd)
        window["msgpack"] = define([], factory);
    else if (typeof exports === 'object')
        window["msgpack"] = exports["msgpack"] = factory();
    else
        window["msgpack"] = root["msgpack"] = factory();
})(this, function () {
    return (function (modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) {
                return installedModules[moduleId].exports;
            }
            var module = installedModules[moduleId] = {
                i: moduleId,
                l: false,
                exports: {}
            };
            modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
            module.l = true;
            return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function (exports, name, getter) {
            if (!__webpack_require__.o(exports, name)) {
                Object.defineProperty(exports, name, { enumerable: true, get: getter });
            }
        };
        __webpack_require__.r = function (exports) {
            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
            }
            Object.defineProperty(exports, '__esModule', { value: true });
        };
        __webpack_require__.t = function (value, mode) {
            if (mode & 1)
                value = __webpack_require__(value);
            if (mode & 8)
                return value;
            if ((mode & 4) && typeof value === 'object' && value && value.__esModule)
                return value;
            var ns = Object.create(null);
            __webpack_require__.r(ns);
            Object.defineProperty(ns, 'default', { enumerable: true, value: value });
            if (mode & 2 && typeof value != 'string')
                for (var key in value)
                    __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
            return ns;
        };
        __webpack_require__.n = function (module) {
            var getter = module && module.__esModule ?
                function getDefault() { return module['default']; } :
                function getModuleExports() { return module; };
            __webpack_require__.d(getter, 'a', getter);
            return getter;
        };
        __webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = 0);
    })([
        (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, "encode", function () { return encode; });
            __webpack_require__.d(__webpack_exports__, "decode", function () { return decode; });
            __webpack_require__.d(__webpack_exports__, "decodeAsync", function () { return decodeAsync; });
            __webpack_require__.d(__webpack_exports__, "decodeArrayStream", function () { return decodeArrayStream; });
            __webpack_require__.d(__webpack_exports__, "decodeStream", function () { return decodeStream; });
            __webpack_require__.d(__webpack_exports__, "Decoder", function () { return Decoder_Decoder; });
            __webpack_require__.d(__webpack_exports__, "Encoder", function () { return Encoder_Encoder; });
            __webpack_require__.d(__webpack_exports__, "ExtensionCodec", function () { return ExtensionCodec_ExtensionCodec; });
            __webpack_require__.d(__webpack_exports__, "ExtData", function () { return ExtData; });
            __webpack_require__.d(__webpack_exports__, "EXT_TIMESTAMP", function () { return EXT_TIMESTAMP; });
            __webpack_require__.d(__webpack_exports__, "encodeDateToTimeSpec", function () { return encodeDateToTimeSpec; });
            __webpack_require__.d(__webpack_exports__, "encodeTimeSpecToTimestamp", function () { return encodeTimeSpecToTimestamp; });
            __webpack_require__.d(__webpack_exports__, "decodeTimestampToTimeSpec", function () { return decodeTimestampToTimeSpec; });
            __webpack_require__.d(__webpack_exports__, "encodeTimestampExtension", function () { return encodeTimestampExtension; });
            __webpack_require__.d(__webpack_exports__, "decodeTimestampExtension", function () { return decodeTimestampExtension; });
            var __read = (undefined && undefined.__read) || function (o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            };
            var __spread = (undefined && undefined.__spread) || function () {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            };
            var TEXT_ENCODING_AVAILABLE = typeof process !== "undefined" &&
                undefined !== "never" &&
                typeof TextEncoder !== "undefined" &&
                typeof TextDecoder !== "undefined";
            function utf8Count(str) {
                var strLength = str.length;
                var byteLength = 0;
                var pos = 0;
                while (pos < strLength) {
                    var value = str.charCodeAt(pos++);
                    if ((value & 0xffffff80) === 0) {
                        byteLength++;
                        continue;
                    }
                    else if ((value & 0xfffff800) === 0) {
                        byteLength += 2;
                    }
                    else {
                        if (value >= 0xd800 && value <= 0xdbff) {
                            if (pos < strLength) {
                                var extra = str.charCodeAt(pos);
                                if ((extra & 0xfc00) === 0xdc00) {
                                    ++pos;
                                    value = ((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000;
                                }
                            }
                        }
                        if ((value & 0xffff0000) === 0) {
                            byteLength += 3;
                        }
                        else {
                            byteLength += 4;
                        }
                    }
                }
                return byteLength;
            }
            function utf8EncodeJs(str, output, outputOffset) {
                var strLength = str.length;
                var offset = outputOffset;
                var pos = 0;
                while (pos < strLength) {
                    var value = str.charCodeAt(pos++);
                    if ((value & 0xffffff80) === 0) {
                        output[offset++] = value;
                        continue;
                    }
                    else if ((value & 0xfffff800) === 0) {
                        output[offset++] = ((value >> 6) & 0x1f) | 0xc0;
                    }
                    else {
                        if (value >= 0xd800 && value <= 0xdbff) {
                            if (pos < strLength) {
                                var extra = str.charCodeAt(pos);
                                if ((extra & 0xfc00) === 0xdc00) {
                                    ++pos;
                                    value = ((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000;
                                }
                            }
                        }
                        if ((value & 0xffff0000) === 0) {
                            output[offset++] = ((value >> 12) & 0x0f) | 0xe0;
                            output[offset++] = ((value >> 6) & 0x3f) | 0x80;
                        }
                        else {
                            output[offset++] = ((value >> 18) & 0x07) | 0xf0;
                            output[offset++] = ((value >> 12) & 0x3f) | 0x80;
                            output[offset++] = ((value >> 6) & 0x3f) | 0x80;
                        }
                    }
                    output[offset++] = (value & 0x3f) | 0x80;
                }
            }
            var sharedTextEncoder = TEXT_ENCODING_AVAILABLE ? new TextEncoder() : undefined;
            var TEXT_ENCODER_THRESHOLD = typeof process !== "undefined" && undefined !== "force" ? 200 : 0;
            function utf8EncodeTEencode(str, output, outputOffset) {
                output.set(sharedTextEncoder.encode(str), outputOffset);
            }
            function utf8EncodeTEencodeInto(str, output, outputOffset) {
                sharedTextEncoder.encodeInto(str, output.subarray(outputOffset));
            }
            var utf8EncodeTE = (sharedTextEncoder === null || sharedTextEncoder === void 0 ? void 0 : sharedTextEncoder.encodeInto) ? utf8EncodeTEencodeInto : utf8EncodeTEencode;
            var CHUNK_SIZE = 4096;
            function utf8DecodeJs(bytes, inputOffset, byteLength) {
                var offset = inputOffset;
                var end = offset + byteLength;
                var units = [];
                var result = "";
                while (offset < end) {
                    var byte1 = bytes[offset++];
                    if ((byte1 & 0x80) === 0) {
                        units.push(byte1);
                    }
                    else if ((byte1 & 0xe0) === 0xc0) {
                        var byte2 = bytes[offset++] & 0x3f;
                        units.push(((byte1 & 0x1f) << 6) | byte2);
                    }
                    else if ((byte1 & 0xf0) === 0xe0) {
                        var byte2 = bytes[offset++] & 0x3f;
                        var byte3 = bytes[offset++] & 0x3f;
                        units.push(((byte1 & 0x1f) << 12) | (byte2 << 6) | byte3);
                    }
                    else if ((byte1 & 0xf8) === 0xf0) {
                        var byte2 = bytes[offset++] & 0x3f;
                        var byte3 = bytes[offset++] & 0x3f;
                        var byte4 = bytes[offset++] & 0x3f;
                        var unit = ((byte1 & 0x07) << 0x12) | (byte2 << 0x0c) | (byte3 << 0x06) | byte4;
                        if (unit > 0xffff) {
                            unit -= 0x10000;
                            units.push(((unit >>> 10) & 0x3ff) | 0xd800);
                            unit = 0xdc00 | (unit & 0x3ff);
                        }
                        units.push(unit);
                    }
                    else {
                        units.push(byte1);
                    }
                    if (units.length >= CHUNK_SIZE) {
                        result += String.fromCharCode.apply(String, __spread(units));
                        units.length = 0;
                    }
                }
                if (units.length > 0) {
                    result += String.fromCharCode.apply(String, __spread(units));
                }
                return result;
            }
            var sharedTextDecoder = TEXT_ENCODING_AVAILABLE ? new TextDecoder() : null;
            var TEXT_DECODER_THRESHOLD = typeof process !== "undefined" && undefined !== "force" ? 200 : 0;
            function utf8DecodeTD(bytes, inputOffset, byteLength) {
                var stringBytes = bytes.subarray(inputOffset, inputOffset + byteLength);
                return sharedTextDecoder.decode(stringBytes);
            }
            var ExtData = (function () {
                function ExtData(type, data) {
                    this.type = type;
                    this.data = data;
                }
                return ExtData;
            }());
            function setUint64(view, offset, value) {
                var high = value / 4294967296;
                var low = value;
                view.setUint32(offset, high);
                view.setUint32(offset + 4, low);
            }
            function setInt64(view, offset, value) {
                var high = Math.floor(value / 4294967296);
                var low = value;
                view.setUint32(offset, high);
                view.setUint32(offset + 4, low);
            }
            function getInt64(view, offset) {
                var high = view.getInt32(offset);
                var low = view.getUint32(offset + 4);
                return high * 4294967296 + low;
            }
            function getUint64(view, offset) {
                var high = view.getUint32(offset);
                var low = view.getUint32(offset + 4);
                return high * 4294967296 + low;
            }
            var EXT_TIMESTAMP = -1;
            var TIMESTAMP32_MAX_SEC = 0x100000000 - 1;
            var TIMESTAMP64_MAX_SEC = 0x400000000 - 1;
            function encodeTimeSpecToTimestamp(_a) {
                var sec = _a.sec, nsec = _a.nsec;
                if (sec >= 0 && nsec >= 0 && sec <= TIMESTAMP64_MAX_SEC) {
                    if (nsec === 0 && sec <= TIMESTAMP32_MAX_SEC) {
                        var rv = new Uint8Array(4);
                        var view = new DataView(rv.buffer);
                        view.setUint32(0, sec);
                        return rv;
                    }
                    else {
                        var secHigh = sec / 0x100000000;
                        var secLow = sec & 0xffffffff;
                        var rv = new Uint8Array(8);
                        var view = new DataView(rv.buffer);
                        view.setUint32(0, (nsec << 2) | (secHigh & 0x3));
                        view.setUint32(4, secLow);
                        return rv;
                    }
                }
                else {
                    var rv = new Uint8Array(12);
                    var view = new DataView(rv.buffer);
                    view.setUint32(0, nsec);
                    setInt64(view, 4, sec);
                    return rv;
                }
            }
            function encodeDateToTimeSpec(date) {
                var msec = date.getTime();
                var sec = Math.floor(msec / 1e3);
                var nsec = (msec - sec * 1e3) * 1e6;
                var nsecInSec = Math.floor(nsec / 1e9);
                return {
                    sec: sec + nsecInSec,
                    nsec: nsec - nsecInSec * 1e9,
                };
            }
            function encodeTimestampExtension(object) {
                if (object instanceof Date) {
                    var timeSpec = encodeDateToTimeSpec(object);
                    return encodeTimeSpecToTimestamp(timeSpec);
                }
                else {
                    return null;
                }
            }
            function decodeTimestampToTimeSpec(data) {
                var view = new DataView(data.buffer, data.byteOffset, data.byteLength);
                switch (data.byteLength) {
                    case 4: {
                        var sec = view.getUint32(0);
                        var nsec = 0;
                        return { sec: sec, nsec: nsec };
                    }
                    case 8: {
                        var nsec30AndSecHigh2 = view.getUint32(0);
                        var secLow32 = view.getUint32(4);
                        var sec = (nsec30AndSecHigh2 & 0x3) * 0x100000000 + secLow32;
                        var nsec = nsec30AndSecHigh2 >>> 2;
                        return { sec: sec, nsec: nsec };
                    }
                    case 12: {
                        var sec = getInt64(view, 4);
                        var nsec = view.getUint32(0);
                        return { sec: sec, nsec: nsec };
                    }
                    default:
                        throw new Error("Unrecognized data size for timestamp: " + data.length);
                }
            }
            function decodeTimestampExtension(data) {
                var timeSpec = decodeTimestampToTimeSpec(data);
                return new Date(timeSpec.sec * 1e3 + timeSpec.nsec / 1e6);
            }
            var timestampExtension = {
                type: EXT_TIMESTAMP,
                encode: encodeTimestampExtension,
                decode: decodeTimestampExtension,
            };
            var ExtensionCodec_ExtensionCodec = (function () {
                function ExtensionCodec() {
                    this.builtInEncoders = [];
                    this.builtInDecoders = [];
                    this.encoders = [];
                    this.decoders = [];
                    this.register(timestampExtension);
                }
                ExtensionCodec.prototype.register = function (_a) {
                    var type = _a.type, encode = _a.encode, decode = _a.decode;
                    if (type >= 0) {
                        this.encoders[type] = encode;
                        this.decoders[type] = decode;
                    }
                    else {
                        var index = 1 + type;
                        this.builtInEncoders[index] = encode;
                        this.builtInDecoders[index] = decode;
                    }
                };
                ExtensionCodec.prototype.tryToEncode = function (object, context) {
                    for (var i = 0; i < this.builtInEncoders.length; i++) {
                        var encoder = this.builtInEncoders[i];
                        if (encoder != null) {
                            var data = encoder(object, context);
                            if (data != null) {
                                var type = -1 - i;
                                return new ExtData(type, data);
                            }
                        }
                    }
                    for (var i = 0; i < this.encoders.length; i++) {
                        var encoder = this.encoders[i];
                        if (encoder != null) {
                            var data = encoder(object, context);
                            if (data != null) {
                                var type = i;
                                return new ExtData(type, data);
                            }
                        }
                    }
                    if (object instanceof ExtData) {
                        return object;
                    }
                    return null;
                };
                ExtensionCodec.prototype.decode = function (data, type, context) {
                    var decoder = type < 0 ? this.builtInDecoders[-1 - type] : this.decoders[type];
                    if (decoder) {
                        return decoder(data, type, context);
                    }
                    else {
                        return new ExtData(type, data);
                    }
                };
                ExtensionCodec.defaultCodec = new ExtensionCodec();
                return ExtensionCodec;
            }());
            function ensureUint8Array(buffer) {
                if (buffer instanceof Uint8Array) {
                    return buffer;
                }
                else if (ArrayBuffer.isView(buffer)) {
                    return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
                }
                else if (buffer instanceof ArrayBuffer) {
                    return new Uint8Array(buffer);
                }
                else {
                    return Uint8Array.from(buffer);
                }
            }
            function createDataView(buffer) {
                if (buffer instanceof ArrayBuffer) {
                    return new DataView(buffer);
                }
                var bufferView = ensureUint8Array(buffer);
                return new DataView(bufferView.buffer, bufferView.byteOffset, bufferView.byteLength);
            }
            var Encoder_values = (undefined && undefined.__values) || function (o) {
                var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
                if (m)
                    return m.call(o);
                if (o && typeof o.length === "number")
                    return {
                        next: function () {
                            if (o && i >= o.length)
                                o = void 0;
                            return { value: o && o[i++], done: !o };
                        }
                    };
                throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
            };
            var sliceEnabel = (Uint8Array.prototype.slice != null || Uint8Array.prototype.slice != undefined);
            var DEFAULT_MAX_DEPTH = 1000;
            var DEFAULT_INITIAL_BUFFER_SIZE = 2048;
            var Encoder_Encoder = (function () {
                function Encoder(extensionCodec, context, maxDepth, initialBufferSize, sortKeys, forceFloat32, ignoreUndefined) {
                    if (extensionCodec === void 0) {
                        extensionCodec = ExtensionCodec_ExtensionCodec.defaultCodec;
                    }
                    if (maxDepth === void 0) {
                        maxDepth = DEFAULT_MAX_DEPTH;
                    }
                    if (initialBufferSize === void 0) {
                        initialBufferSize = DEFAULT_INITIAL_BUFFER_SIZE;
                    }
                    if (sortKeys === void 0) {
                        sortKeys = false;
                    }
                    if (forceFloat32 === void 0) {
                        forceFloat32 = false;
                    }
                    if (ignoreUndefined === void 0) {
                        ignoreUndefined = false;
                    }
                    this.extensionCodec = extensionCodec;
                    this.context = context;
                    this.maxDepth = maxDepth;
                    this.initialBufferSize = initialBufferSize;
                    this.sortKeys = sortKeys;
                    this.forceFloat32 = forceFloat32;
                    this.ignoreUndefined = ignoreUndefined;
                    this.pos = 0;
                    this.view = new DataView(new ArrayBuffer(this.initialBufferSize));
                    this.bytes = new Uint8Array(this.view.buffer);
                }
                Encoder.prototype.encode = function (object, depth) {
                    if (depth > this.maxDepth) {
                        throw new Error("Too deep objects in depth " + depth);
                    }
                    if (object == null) {
                        this.encodeNil();
                    }
                    else if (typeof object === "boolean") {
                        this.encodeBoolean(object);
                    }
                    else if (typeof object === "number") {
                        this.encodeNumber(object);
                    }
                    else if (typeof object === "string") {
                        this.encodeString(object);
                    }
                    else {
                        this.encodeObject(object, depth);
                    }
                };
                Encoder.prototype.getUint8Array = function () {
                    return this.bytes.subarray(0, this.pos);
                };
                Encoder.prototype.ensureBufferSizeToWrite = function (sizeToWrite) {
                    var requiredSize = this.pos + sizeToWrite;
                    if (this.view.byteLength < requiredSize) {
                        this.resizeBuffer(requiredSize * 2);
                    }
                };
                Encoder.prototype.resizeBuffer = function (newSize) {
                    var newBuffer = new ArrayBuffer(newSize);
                    var newBytes = new Uint8Array(newBuffer);
                    var newView = new DataView(newBuffer);
                    newBytes.set(this.bytes);
                    this.view = newView;
                    this.bytes = newBytes;
                };
                Encoder.prototype.encodeNil = function () {
                    this.writeU8(0xc0);
                };
                Encoder.prototype.encodeBoolean = function (object) {
                    if (object === false) {
                        this.writeU8(0xc2);
                    }
                    else {
                        this.writeU8(0xc3);
                    }
                };
                Encoder.prototype.encodeNumber = function (object) {
                    if (!Number.isSafeInteger || Number.isSafeInteger(object)) {
                        if (object >= 0) {
                            if (object < 0x80) {
                                this.writeU8(object);
                            }
                            else if (object < 0x100) {
                                this.writeU8(0xcc);
                                this.writeU8(object);
                            }
                            else if (object < 0x10000) {
                                this.writeU8(0xcd);
                                this.writeU16(object);
                            }
                            else if (object < 0x100000000) {
                                this.writeU8(0xce);
                                this.writeU32(object);
                            }
                            else {
                                this.writeU8(0xcf);
                                this.writeU64(object);
                            }
                        }
                        else {
                            if (object >= -0x20) {
                                this.writeU8(0xe0 | (object + 0x20));
                            }
                            else if (object >= -0x80) {
                                this.writeU8(0xd0);
                                this.writeI8(object);
                            }
                            else if (object >= -0x8000) {
                                this.writeU8(0xd1);
                                this.writeI16(object);
                            }
                            else if (object >= -0x80000000) {
                                this.writeU8(0xd2);
                                this.writeI32(object);
                            }
                            else {
                                this.writeU8(0xd3);
                                this.writeI64(object);
                            }
                        }
                    }
                    else {
                        if (this.forceFloat32) {
                            this.writeU8(0xca);
                            this.writeF32(object);
                        }
                        else {
                            this.writeU8(0xcb);
                            this.writeF64(object);
                        }
                    }
                };
                Encoder.prototype.writeStringHeader = function (byteLength) {
                    if (byteLength < 32) {
                        this.writeU8(0xa0 + byteLength);
                    }
                    else if (byteLength < 0x100) {
                        this.writeU8(0xd9);
                        this.writeU8(byteLength);
                    }
                    else if (byteLength < 0x10000) {
                        this.writeU8(0xda);
                        this.writeU16(byteLength);
                    }
                    else if (byteLength < 0x100000000) {
                        this.writeU8(0xdb);
                        this.writeU32(byteLength);
                    }
                    else {
                        throw new Error("Too long string: " + byteLength + " bytes in UTF-8");
                    }
                };
                Encoder.prototype.encodeString = function (object) {
                    var maxHeaderSize = 1 + 4;
                    var strLength = object.length;
                    if (TEXT_ENCODING_AVAILABLE && strLength > TEXT_ENCODER_THRESHOLD) {
                        var byteLength = utf8Count(object);
                        this.ensureBufferSizeToWrite(maxHeaderSize + byteLength);
                        this.writeStringHeader(byteLength);
                        utf8EncodeTE(object, this.bytes, this.pos);
                        this.pos += byteLength;
                    }
                    else {
                        var byteLength = utf8Count(object);
                        this.ensureBufferSizeToWrite(maxHeaderSize + byteLength);
                        this.writeStringHeader(byteLength);
                        utf8EncodeJs(object, this.bytes, this.pos);
                        this.pos += byteLength;
                    }
                };
                Encoder.prototype.encodeObject = function (object, depth) {
                    var ext = this.extensionCodec.tryToEncode(object, this.context);
                    if (ext != null) {
                        this.encodeExtension(ext);
                    }
                    else if (Array.isArray(object)) {
                        this.encodeArray(object, depth);
                    }
                    else if (ArrayBuffer.isView(object)) {
                        this.encodeBinary(object);
                    }
                    else if (typeof object === "object") {
                        this.encodeMap(object, depth);
                    }
                    else {
                        throw new Error("Unrecognized object: " + Object.prototype.toString.apply(object));
                    }
                };
                Encoder.prototype.encodeBinary = function (object) {
                    var size = object.byteLength;
                    if (size < 0x100) {
                        this.writeU8(0xc4);
                        this.writeU8(size);
                    }
                    else if (size < 0x10000) {
                        this.writeU8(0xc5);
                        this.writeU16(size);
                    }
                    else if (size < 0x100000000) {
                        this.writeU8(0xc6);
                        this.writeU32(size);
                    }
                    else {
                        throw new Error("Too large binary: " + size);
                    }
                    var bytes = ensureUint8Array(object);
                    this.writeU8a(bytes);
                };
                Encoder.prototype.encodeArray = function (object, depth) {
                    var e_1, _a;
                    var size = object.length;
                    if (size < 16) {
                        this.writeU8(0x90 + size);
                    }
                    else if (size < 0x10000) {
                        this.writeU8(0xdc);
                        this.writeU16(size);
                    }
                    else if (size < 0x100000000) {
                        this.writeU8(0xdd);
                        this.writeU32(size);
                    }
                    else {
                        throw new Error("Too large array: " + size);
                    }
                    try {
                        for (var object_1 = Encoder_values(object), object_1_1 = object_1.next(); !object_1_1.done; object_1_1 = object_1.next()) {
                            var item = object_1_1.value;
                            this.encode(item, depth + 1);
                        }
                    }
                    catch (e_1_1) {
                        e_1 = { error: e_1_1 };
                    }
                    finally {
                        try {
                            if (object_1_1 && !object_1_1.done && (_a = object_1.return))
                                _a.call(object_1);
                        }
                        finally {
                            if (e_1)
                                throw e_1.error;
                        }
                    }
                };
                Encoder.prototype.countWithoutUndefined = function (object, keys) {
                    var e_2, _a;
                    var count = 0;
                    try {
                        for (var keys_1 = Encoder_values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                            var key = keys_1_1.value;
                            if (object[key] !== undefined) {
                                count++;
                            }
                        }
                    }
                    catch (e_2_1) {
                        e_2 = { error: e_2_1 };
                    }
                    finally {
                        try {
                            if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return))
                                _a.call(keys_1);
                        }
                        finally {
                            if (e_2)
                                throw e_2.error;
                        }
                    }
                    return count;
                };
                Encoder.prototype.encodeMap = function (object, depth) {
                    var e_3, _a;
                    var keys = Object.keys(object);
                    if (this.sortKeys) {
                        keys.sort();
                    }
                    var size = this.ignoreUndefined ? this.countWithoutUndefined(object, keys) : keys.length;
                    if (size < 16) {
                        this.writeU8(0x80 + size);
                    }
                    else if (size < 0x10000) {
                        this.writeU8(0xde);
                        this.writeU16(size);
                    }
                    else if (size < 0x100000000) {
                        this.writeU8(0xdf);
                        this.writeU32(size);
                    }
                    else {
                        throw new Error("Too large map object: " + size);
                    }
                    try {
                        for (var keys_2 = Encoder_values(keys), keys_2_1 = keys_2.next(); !keys_2_1.done; keys_2_1 = keys_2.next()) {
                            var key = keys_2_1.value;
                            var value = object[key];
                            if (!(this.ignoreUndefined && value === undefined)) {
                                this.encodeString(key);
                                this.encode(value, depth + 1);
                            }
                        }
                    }
                    catch (e_3_1) {
                        e_3 = { error: e_3_1 };
                    }
                    finally {
                        try {
                            if (keys_2_1 && !keys_2_1.done && (_a = keys_2.return))
                                _a.call(keys_2);
                        }
                        finally {
                            if (e_3)
                                throw e_3.error;
                        }
                    }
                };
                Encoder.prototype.encodeExtension = function (ext) {
                    var size = ext.data.length;
                    if (size === 1) {
                        this.writeU8(0xd4);
                    }
                    else if (size === 2) {
                        this.writeU8(0xd5);
                    }
                    else if (size === 4) {
                        this.writeU8(0xd6);
                    }
                    else if (size === 8) {
                        this.writeU8(0xd7);
                    }
                    else if (size === 16) {
                        this.writeU8(0xd8);
                    }
                    else if (size < 0x100) {
                        this.writeU8(0xc7);
                        this.writeU8(size);
                    }
                    else if (size < 0x10000) {
                        this.writeU8(0xc8);
                        this.writeU16(size);
                    }
                    else if (size < 0x100000000) {
                        this.writeU8(0xc9);
                        this.writeU32(size);
                    }
                    else {
                        throw new Error("Too large extension object: " + size);
                    }
                    this.writeI8(ext.type);
                    this.writeU8a(ext.data);
                };
                Encoder.prototype.writeU8 = function (value) {
                    this.ensureBufferSizeToWrite(1);
                    this.view.setUint8(this.pos, value);
                    this.pos++;
                };
                Encoder.prototype.writeU8a = function (values) {
                    var size = values.length;
                    this.ensureBufferSizeToWrite(size);
                    this.bytes.set(values, this.pos);
                    this.pos += size;
                };
                Encoder.prototype.writeI8 = function (value) {
                    this.ensureBufferSizeToWrite(1);
                    this.view.setInt8(this.pos, value);
                    this.pos++;
                };
                Encoder.prototype.writeU16 = function (value) {
                    this.ensureBufferSizeToWrite(2);
                    this.view.setUint16(this.pos, value);
                    this.pos += 2;
                };
                Encoder.prototype.writeI16 = function (value) {
                    this.ensureBufferSizeToWrite(2);
                    this.view.setInt16(this.pos, value);
                    this.pos += 2;
                };
                Encoder.prototype.writeU32 = function (value) {
                    this.ensureBufferSizeToWrite(4);
                    this.view.setUint32(this.pos, value);
                    this.pos += 4;
                };
                Encoder.prototype.writeI32 = function (value) {
                    this.ensureBufferSizeToWrite(4);
                    this.view.setInt32(this.pos, value);
                    this.pos += 4;
                };
                Encoder.prototype.writeF32 = function (value) {
                    this.ensureBufferSizeToWrite(4);
                    this.view.setFloat32(this.pos, value);
                    this.pos += 4;
                };
                Encoder.prototype.writeF64 = function (value) {
                    this.ensureBufferSizeToWrite(8);
                    this.view.setFloat64(this.pos, value);
                    this.pos += 8;
                };
                Encoder.prototype.writeU64 = function (value) {
                    this.ensureBufferSizeToWrite(8);
                    setUint64(this.view, this.pos, value);
                    this.pos += 8;
                };
                Encoder.prototype.writeI64 = function (value) {
                    this.ensureBufferSizeToWrite(8);
                    setInt64(this.view, this.pos, value);
                    this.pos += 8;
                };
                return Encoder;
            }());
            var defaultEncodeOptions = {};
            function encode(value, options) {
                if (options === void 0) {
                    options = defaultEncodeOptions;
                }
                var encoder = new Encoder_Encoder(options.extensionCodec, options.context, options.maxDepth, options.initialBufferSize, options.sortKeys, options.forceFloat32, options.ignoreUndefined);
                encoder.encode(value, 1);
                return encoder.getUint8Array();
            }
            function prettyByte(byte) {
                return (byte < 0 ? "-" : "") + "0x" + Math.abs(byte).toString(16).padStart(2, "0");
            }
            var DEFAULT_MAX_KEY_LENGTH = 16;
            var DEFAULT_MAX_LENGTH_PER_KEY = 16;
            var CachedKeyDecoder_CachedKeyDecoder = (function () {
                function CachedKeyDecoder(maxKeyLength, maxLengthPerKey) {
                    if (maxKeyLength === void 0) {
                        maxKeyLength = DEFAULT_MAX_KEY_LENGTH;
                    }
                    if (maxLengthPerKey === void 0) {
                        maxLengthPerKey = DEFAULT_MAX_LENGTH_PER_KEY;
                    }
                    this.maxKeyLength = maxKeyLength;
                    this.maxLengthPerKey = maxLengthPerKey;
                    this.caches = [];
                    for (var i = 0; i < this.maxKeyLength; i++) {
                        this.caches.push([]);
                    }
                }
                CachedKeyDecoder.prototype.canBeCached = function (byteLength) {
                    return byteLength > 0 && byteLength <= this.maxKeyLength;
                };
                CachedKeyDecoder.prototype.get = function (bytes, inputOffset, byteLength) {
                    var records = this.caches[byteLength - 1];
                    var recordsLength = records.length;
                    FIND_CHUNK: for (var i = 0; i < recordsLength; i++) {
                        var record = records[i];
                        var recordBytes = record.bytes;
                        for (var j = 0; j < byteLength; j++) {
                            if (recordBytes[j] !== bytes[inputOffset + j]) {
                                continue FIND_CHUNK;
                            }
                        }
                        return record.value;
                    }
                    return null;
                };
                CachedKeyDecoder.prototype.store = function (bytes, value) {
                    var records = this.caches[bytes.length - 1];
                    var record = { bytes: bytes, value: value };
                    if (records.length >= this.maxLengthPerKey) {
                        records[(Math.random() * records.length) | 0] = record;
                    }
                    else {
                        records.push(record);
                    }
                };
                CachedKeyDecoder.prototype.decode = function (bytes, inputOffset, byteLength) {
                    var cachedValue = this.get(bytes, inputOffset, byteLength);
                    if (cachedValue != null) {
                        return cachedValue;
                    }
                    var value = utf8DecodeJs(bytes, inputOffset, byteLength);
                    var slicedCopyOfBytes;
                    if (sliceEnabel)
                        slicedCopyOfBytes = Uint8Array.prototype.slice.call(bytes, inputOffset, inputOffset + byteLength);
                    else
                        slicedCopyOfBytes = Uint8Array.prototype.subarray.call(bytes, inputOffset, inputOffset + byteLength);
                    this.store(slicedCopyOfBytes, value);
                    return value;
                };
                return CachedKeyDecoder;
            }());
            var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
                function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            };
            var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            };
            var __asyncValues = (undefined && undefined.__asyncValues) || function (o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            };
            var __await = (undefined && undefined.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); };
            var __asyncGenerator = (undefined && undefined.__asyncGenerator) || function (thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            };
            var isValidMapKeyType = function (key) {
                var keyType = typeof key;
                return keyType === "string" || keyType === "number";
            };
            var HEAD_BYTE_REQUIRED = -1;
            var EMPTY_VIEW = new DataView(new ArrayBuffer(0));
            var EMPTY_BYTES = new Uint8Array(EMPTY_VIEW.buffer);
            var DataViewIndexOutOfBoundsError = (function () {
                try {
                    EMPTY_VIEW.getInt8(0);
                }
                catch (e) {
                    return e.constructor;
                }
                throw new Error("never reached");
            })();
            var MORE_DATA = new DataViewIndexOutOfBoundsError("Insufficient data");
            var DEFAULT_MAX_LENGTH = 4294967295;
            var sharedCachedKeyDecoder = new CachedKeyDecoder_CachedKeyDecoder();
            var Decoder_Decoder = (function () {
                function Decoder(extensionCodec, context, maxStrLength, maxBinLength, maxArrayLength, maxMapLength, maxExtLength, cachedKeyDecoder) {
                    if (extensionCodec === void 0) {
                        extensionCodec = ExtensionCodec_ExtensionCodec.defaultCodec;
                    }
                    if (maxStrLength === void 0) {
                        maxStrLength = DEFAULT_MAX_LENGTH;
                    }
                    if (maxBinLength === void 0) {
                        maxBinLength = DEFAULT_MAX_LENGTH;
                    }
                    if (maxArrayLength === void 0) {
                        maxArrayLength = DEFAULT_MAX_LENGTH;
                    }
                    if (maxMapLength === void 0) {
                        maxMapLength = DEFAULT_MAX_LENGTH;
                    }
                    if (maxExtLength === void 0) {
                        maxExtLength = DEFAULT_MAX_LENGTH;
                    }
                    if (cachedKeyDecoder === void 0) {
                        cachedKeyDecoder = sharedCachedKeyDecoder;
                    }
                    this.extensionCodec = extensionCodec;
                    this.context = context;
                    this.maxStrLength = maxStrLength;
                    this.maxBinLength = maxBinLength;
                    this.maxArrayLength = maxArrayLength;
                    this.maxMapLength = maxMapLength;
                    this.maxExtLength = maxExtLength;
                    this.cachedKeyDecoder = cachedKeyDecoder;
                    this.totalPos = 0;
                    this.pos = 0;
                    this.view = EMPTY_VIEW;
                    this.bytes = EMPTY_BYTES;
                    this.headByte = HEAD_BYTE_REQUIRED;
                    this.stack = [];
                }
                Decoder.prototype.setBuffer = function (buffer) {
                    this.bytes = ensureUint8Array(buffer);
                    this.view = createDataView(this.bytes);
                    this.pos = 0;
                };
                Decoder.prototype.appendBuffer = function (buffer) {
                    if (this.headByte === HEAD_BYTE_REQUIRED && !this.hasRemaining()) {
                        this.setBuffer(buffer);
                    }
                    else {
                        var remainingData = this.bytes.subarray(this.pos);
                        var newData = ensureUint8Array(buffer);
                        var concated = new Uint8Array(remainingData.length + newData.length);
                        concated.set(remainingData);
                        concated.set(newData, remainingData.length);
                        this.setBuffer(concated);
                    }
                };
                Decoder.prototype.hasRemaining = function (size) {
                    if (size === void 0) {
                        size = 1;
                    }
                    return this.view.byteLength - this.pos >= size;
                };
                Decoder.prototype.createNoExtraBytesError = function (posToShow) {
                    var _a = this, view = _a.view, pos = _a.pos;
                    return new RangeError("Extra " + (view.byteLength - pos) + " byte(s) found at buffer[" + posToShow + "]");
                };
                Decoder.prototype.decodeSingleSync = function () {
                    var object = this.decodeSync();
                    if (this.hasRemaining()) {
                        throw this.createNoExtraBytesError(this.pos);
                    }
                    return object;
                };
                Decoder.prototype.decodeSingleAsync = function (stream) {
                    var stream_1, stream_1_1;
                    var e_1, _a;
                    return __awaiter(this, void 0, void 0, function () {
                        var decoded, object, buffer, e_1_1, _b, headByte, pos, totalPos;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    decoded = false;
                                    _c.label = 1;
                                case 1:
                                    _c.trys.push([1, 6, 7, 12]);
                                    stream_1 = __asyncValues(stream);
                                    _c.label = 2;
                                case 2: return [4, stream_1.next()];
                                case 3:
                                    if (!(stream_1_1 = _c.sent(), !stream_1_1.done))
                                        return [3, 5];
                                    buffer = stream_1_1.value;
                                    if (decoded) {
                                        throw this.createNoExtraBytesError(this.totalPos);
                                    }
                                    this.appendBuffer(buffer);
                                    try {
                                        object = this.decodeSync();
                                        decoded = true;
                                    }
                                    catch (e) {
                                        if (!(e instanceof DataViewIndexOutOfBoundsError)) {
                                            throw e;
                                        }
                                    }
                                    this.totalPos += this.pos;
                                    _c.label = 4;
                                case 4: return [3, 2];
                                case 5: return [3, 12];
                                case 6:
                                    e_1_1 = _c.sent();
                                    e_1 = { error: e_1_1 };
                                    return [3, 12];
                                case 7:
                                    _c.trys.push([7, , 10, 11]);
                                    if (!(stream_1_1 && !stream_1_1.done && (_a = stream_1.return)))
                                        return [3, 9];
                                    return [4, _a.call(stream_1)];
                                case 8:
                                    _c.sent();
                                    _c.label = 9;
                                case 9: return [3, 11];
                                case 10:
                                    if (e_1)
                                        throw e_1.error;
                                    return [7];
                                case 11: return [7];
                                case 12:
                                    if (decoded) {
                                        if (this.hasRemaining()) {
                                            throw this.createNoExtraBytesError(this.totalPos);
                                        }
                                        return [2, object];
                                    }
                                    _b = this, headByte = _b.headByte, pos = _b.pos, totalPos = _b.totalPos;
                                    throw new RangeError("Insufficient data in parcing " + prettyByte(headByte) + " at " + totalPos + " (" + pos + " in the current buffer)");
                            }
                        });
                    });
                };
                Decoder.prototype.decodeArrayStream = function (stream) {
                    return this.decodeMultiAsync(stream, true);
                };
                Decoder.prototype.decodeStream = function (stream) {
                    return this.decodeMultiAsync(stream, false);
                };
                Decoder.prototype.decodeMultiAsync = function (stream, isArray) {
                    return __asyncGenerator(this, arguments, function decodeMultiAsync_1() {
                        var isArrayHeaderRequired, arrayItemsLeft, stream_2, stream_2_1, buffer, e_2, e_3_1;
                        var e_3, _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    isArrayHeaderRequired = isArray;
                                    arrayItemsLeft = -1;
                                    _b.label = 1;
                                case 1:
                                    _b.trys.push([1, 13, 14, 19]);
                                    stream_2 = __asyncValues(stream);
                                    _b.label = 2;
                                case 2: return [4, __await(stream_2.next())];
                                case 3:
                                    if (!(stream_2_1 = _b.sent(), !stream_2_1.done))
                                        return [3, 12];
                                    buffer = stream_2_1.value;
                                    if (isArray && arrayItemsLeft === 0) {
                                        throw this.createNoExtraBytesError(this.totalPos);
                                    }
                                    this.appendBuffer(buffer);
                                    if (isArrayHeaderRequired) {
                                        arrayItemsLeft = this.readArraySize();
                                        isArrayHeaderRequired = false;
                                        this.complete();
                                    }
                                    _b.label = 4;
                                case 4:
                                    _b.trys.push([4, 9, , 10]);
                                    _b.label = 5;
                                case 5:
                                    if (false) { }
                                    return [4, __await(this.decodeSync())];
                                case 6: return [4, _b.sent()];
                                case 7:
                                    _b.sent();
                                    if (--arrayItemsLeft === 0) {
                                        return [3, 8];
                                    }
                                    return [3, 5];
                                case 8: return [3, 10];
                                case 9:
                                    e_2 = _b.sent();
                                    if (!(e_2 instanceof DataViewIndexOutOfBoundsError)) {
                                        throw e_2;
                                    }
                                    return [3, 10];
                                case 10:
                                    this.totalPos += this.pos;
                                    _b.label = 11;
                                case 11: return [3, 2];
                                case 12: return [3, 19];
                                case 13:
                                    e_3_1 = _b.sent();
                                    e_3 = { error: e_3_1 };
                                    return [3, 19];
                                case 14:
                                    _b.trys.push([14, , 17, 18]);
                                    if (!(stream_2_1 && !stream_2_1.done && (_a = stream_2.return)))
                                        return [3, 16];
                                    return [4, __await(_a.call(stream_2))];
                                case 15:
                                    _b.sent();
                                    _b.label = 16;
                                case 16: return [3, 18];
                                case 17:
                                    if (e_3)
                                        throw e_3.error;
                                    return [7];
                                case 18: return [7];
                                case 19: return [2];
                            }
                        });
                    });
                };
                Decoder.prototype.decodeSync = function () {
                    DECODE: while (true) {
                        var headByte = this.readHeadByte();
                        var object = void 0;
                        if (headByte >= 0xe0) {
                            object = headByte - 0x100;
                        }
                        else if (headByte < 0xc0) {
                            if (headByte < 0x80) {
                                object = headByte;
                            }
                            else if (headByte < 0x90) {
                                var size = headByte - 0x80;
                                if (size !== 0) {
                                    this.pushMapState(size);
                                    this.complete();
                                    continue DECODE;
                                }
                                else {
                                    object = {};
                                }
                            }
                            else if (headByte < 0xa0) {
                                var size = headByte - 0x90;
                                if (size !== 0) {
                                    this.pushArrayState(size);
                                    this.complete();
                                    continue DECODE;
                                }
                                else {
                                    object = [];
                                }
                            }
                            else {
                                var byteLength = headByte - 0xa0;
                                object = this.decodeUtf8String(byteLength, 0);
                            }
                        }
                        else if (headByte === 0xc0) {
                            object = null;
                        }
                        else if (headByte === 0xc2) {
                            object = false;
                        }
                        else if (headByte === 0xc3) {
                            object = true;
                        }
                        else if (headByte === 0xca) {
                            object = this.readF32();
                        }
                        else if (headByte === 0xcb) {
                            object = this.readF64();
                        }
                        else if (headByte === 0xcc) {
                            object = this.readU8();
                        }
                        else if (headByte === 0xcd) {
                            object = this.readU16();
                        }
                        else if (headByte === 0xce) {
                            object = this.readU32();
                        }
                        else if (headByte === 0xcf) {
                            object = this.readU64();
                        }
                        else if (headByte === 0xd0) {
                            object = this.readI8();
                        }
                        else if (headByte === 0xd1) {
                            object = this.readI16();
                        }
                        else if (headByte === 0xd2) {
                            object = this.readI32();
                        }
                        else if (headByte === 0xd3) {
                            object = this.readI64();
                        }
                        else if (headByte === 0xd9) {
                            var byteLength = this.lookU8();
                            object = this.decodeUtf8String(byteLength, 1);
                        }
                        else if (headByte === 0xda) {
                            var byteLength = this.lookU16();
                            object = this.decodeUtf8String(byteLength, 2);
                        }
                        else if (headByte === 0xdb) {
                            var byteLength = this.lookU32();
                            object = this.decodeUtf8String(byteLength, 4);
                        }
                        else if (headByte === 0xdc) {
                            var size = this.readU16();
                            if (size !== 0) {
                                this.pushArrayState(size);
                                this.complete();
                                continue DECODE;
                            }
                            else {
                                object = [];
                            }
                        }
                        else if (headByte === 0xdd) {
                            var size = this.readU32();
                            if (size !== 0) {
                                this.pushArrayState(size);
                                this.complete();
                                continue DECODE;
                            }
                            else {
                                object = [];
                            }
                        }
                        else if (headByte === 0xde) {
                            var size = this.readU16();
                            if (size !== 0) {
                                this.pushMapState(size);
                                this.complete();
                                continue DECODE;
                            }
                            else {
                                object = {};
                            }
                        }
                        else if (headByte === 0xdf) {
                            var size = this.readU32();
                            if (size !== 0) {
                                this.pushMapState(size);
                                this.complete();
                                continue DECODE;
                            }
                            else {
                                object = {};
                            }
                        }
                        else if (headByte === 0xc4) {
                            var size = this.lookU8();
                            object = this.decodeBinary(size, 1);
                        }
                        else if (headByte === 0xc5) {
                            var size = this.lookU16();
                            object = this.decodeBinary(size, 2);
                        }
                        else if (headByte === 0xc6) {
                            var size = this.lookU32();
                            object = this.decodeBinary(size, 4);
                        }
                        else if (headByte === 0xd4) {
                            object = this.decodeExtension(1, 0);
                        }
                        else if (headByte === 0xd5) {
                            object = this.decodeExtension(2, 0);
                        }
                        else if (headByte === 0xd6) {
                            object = this.decodeExtension(4, 0);
                        }
                        else if (headByte === 0xd7) {
                            object = this.decodeExtension(8, 0);
                        }
                        else if (headByte === 0xd8) {
                            object = this.decodeExtension(16, 0);
                        }
                        else if (headByte === 0xc7) {
                            var size = this.lookU8();
                            object = this.decodeExtension(size, 1);
                        }
                        else if (headByte === 0xc8) {
                            var size = this.lookU16();
                            object = this.decodeExtension(size, 2);
                        }
                        else if (headByte === 0xc9) {
                            var size = this.lookU32();
                            object = this.decodeExtension(size, 4);
                        }
                        else {
                            throw new Error("Unrecognized type byte: " + prettyByte(headByte));
                        }
                        this.complete();
                        var stack = this.stack;
                        while (stack.length > 0) {
                            var state = stack[stack.length - 1];
                            if (state.type === 0) {
                                state.array[state.position] = object;
                                state.position++;
                                if (state.position === state.size) {
                                    stack.pop();
                                    object = state.array;
                                }
                                else {
                                    continue DECODE;
                                }
                            }
                            else if (state.type === 1) {
                                if (!isValidMapKeyType(object)) {
                                    throw new Error("The type of key must be string or number but " + typeof object);
                                }
                                state.key = object;
                                state.type = 2;
                                continue DECODE;
                            }
                            else {
                                state.map[state.key] = object;
                                state.readCount++;
                                if (state.readCount === state.size) {
                                    stack.pop();
                                    object = state.map;
                                }
                                else {
                                    state.key = null;
                                    state.type = 1;
                                    continue DECODE;
                                }
                            }
                        }
                        return object;
                    }
                };
                Decoder.prototype.readHeadByte = function () {
                    if (this.headByte === HEAD_BYTE_REQUIRED) {
                        this.headByte = this.readU8();
                    }
                    return this.headByte;
                };
                Decoder.prototype.complete = function () {
                    this.headByte = HEAD_BYTE_REQUIRED;
                };
                Decoder.prototype.readArraySize = function () {
                    var headByte = this.readHeadByte();
                    switch (headByte) {
                        case 0xdc:
                            return this.readU16();
                        case 0xdd:
                            return this.readU32();
                        default: {
                            if (headByte < 0xa0) {
                                return headByte - 0x90;
                            }
                            else {
                                throw new Error("Unrecognized array type byte: " + prettyByte(headByte));
                            }
                        }
                    }
                };
                Decoder.prototype.pushMapState = function (size) {
                    if (size > this.maxMapLength) {
                        throw new Error("Max length exceeded: map length (" + size + ") > maxMapLengthLength (" + this.maxMapLength + ")");
                    }
                    this.stack.push({
                        type: 1,
                        size: size,
                        key: null,
                        readCount: 0,
                        map: {},
                    });
                };
                Decoder.prototype.pushArrayState = function (size) {
                    if (size > this.maxArrayLength) {
                        throw new Error("Max length exceeded: array length (" + size + ") > maxArrayLength (" + this.maxArrayLength + ")");
                    }
                    this.stack.push({
                        type: 0,
                        size: size,
                        array: new Array(size),
                        position: 0,
                    });
                };
                Decoder.prototype.decodeUtf8String = function (byteLength, headerOffset) {
                    var _a;
                    if (byteLength > this.maxStrLength) {
                        throw new Error("Max length exceeded: UTF-8 byte length (" + byteLength + ") > maxStrLength (" + this.maxStrLength + ")");
                    }
                    if (this.bytes.byteLength < this.pos + headerOffset + byteLength) {
                        throw MORE_DATA;
                    }
                    var offset = this.pos + headerOffset;
                    var object;
                    if (this.stateIsMapKey() && ((_a = this.cachedKeyDecoder) === null || _a === void 0 ? void 0 : _a.canBeCached(byteLength))) {
                        object = this.cachedKeyDecoder.decode(this.bytes, offset, byteLength);
                    }
                    else if (TEXT_ENCODING_AVAILABLE && byteLength > TEXT_DECODER_THRESHOLD) {
                        object = utf8DecodeTD(this.bytes, offset, byteLength);
                    }
                    else {
                        object = utf8DecodeJs(this.bytes, offset, byteLength);
                    }
                    this.pos += headerOffset + byteLength;
                    return object;
                };
                Decoder.prototype.stateIsMapKey = function () {
                    if (this.stack.length > 0) {
                        var state = this.stack[this.stack.length - 1];
                        return state.type === 1;
                    }
                    return false;
                };
                Decoder.prototype.decodeBinary = function (byteLength, headOffset) {
                    if (byteLength > this.maxBinLength) {
                        throw new Error("Max length exceeded: bin length (" + byteLength + ") > maxBinLength (" + this.maxBinLength + ")");
                    }
                    if (!this.hasRemaining(byteLength + headOffset)) {
                        throw MORE_DATA;
                    }
                    var offset = this.pos + headOffset;
                    var object = this.bytes.subarray(offset, offset + byteLength);
                    this.pos += headOffset + byteLength;
                    return object;
                };
                Decoder.prototype.decodeExtension = function (size, headOffset) {
                    if (size > this.maxExtLength) {
                        throw new Error("Max length exceeded: ext length (" + size + ") > maxExtLength (" + this.maxExtLength + ")");
                    }
                    var extType = this.view.getInt8(this.pos + headOffset);
                    var data = this.decodeBinary(size, headOffset + 1);
                    return this.extensionCodec.decode(data, extType, this.context);
                };
                Decoder.prototype.lookU8 = function () {
                    return this.view.getUint8(this.pos);
                };
                Decoder.prototype.lookU16 = function () {
                    return this.view.getUint16(this.pos);
                };
                Decoder.prototype.lookU32 = function () {
                    return this.view.getUint32(this.pos);
                };
                Decoder.prototype.readU8 = function () {
                    var value = this.view.getUint8(this.pos);
                    this.pos++;
                    return value;
                };
                Decoder.prototype.readI8 = function () {
                    var value = this.view.getInt8(this.pos);
                    this.pos++;
                    return value;
                };
                Decoder.prototype.readU16 = function () {
                    var value = this.view.getUint16(this.pos);
                    this.pos += 2;
                    return value;
                };
                Decoder.prototype.readI16 = function () {
                    var value = this.view.getInt16(this.pos);
                    this.pos += 2;
                    return value;
                };
                Decoder.prototype.readU32 = function () {
                    var value = this.view.getUint32(this.pos);
                    this.pos += 4;
                    return value;
                };
                Decoder.prototype.readI32 = function () {
                    var value = this.view.getInt32(this.pos);
                    this.pos += 4;
                    return value;
                };
                Decoder.prototype.readU64 = function () {
                    var value = getUint64(this.view, this.pos);
                    this.pos += 8;
                    return value;
                };
                Decoder.prototype.readI64 = function () {
                    var value = getInt64(this.view, this.pos);
                    this.pos += 8;
                    return value;
                };
                Decoder.prototype.readF32 = function () {
                    var value = this.view.getFloat32(this.pos);
                    this.pos += 4;
                    return value;
                };
                Decoder.prototype.readF64 = function () {
                    var value = this.view.getFloat64(this.pos);
                    this.pos += 8;
                    return value;
                };
                return Decoder;
            }());
            var defaultDecodeOptions = {};
            function decode(buffer, options) {
                if (options === void 0) {
                    options = defaultDecodeOptions;
                }
                var decoder = new Decoder_Decoder(options.extensionCodec, options.context, options.maxStrLength, options.maxBinLength, options.maxArrayLength, options.maxMapLength, options.maxExtLength);
                decoder.setBuffer(buffer);
                return decoder.decodeSingleSync();
            }
            var stream_generator = (undefined && undefined.__generator) || function (thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            };
            var stream_await = (undefined && undefined.__await) || function (v) { return this instanceof stream_await ? (this.v = v, this) : new stream_await(v); };
            var stream_asyncGenerator = (undefined && undefined.__asyncGenerator) || function (thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof stream_await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            };
            function isAsyncIterable(object) {
                return object[Symbol.asyncIterator] != null;
            }
            function assertNonNull(value) {
                if (value == null) {
                    throw new Error("Assertion Failure: value must not be null nor undefined");
                }
            }
            function asyncIterableFromStream(stream) {
                return stream_asyncGenerator(this, arguments, function asyncIterableFromStream_1() {
                    var reader, _a, done, value;
                    return stream_generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                reader = stream.getReader();
                                _b.label = 1;
                            case 1:
                                _b.trys.push([1, , 9, 10]);
                                _b.label = 2;
                            case 2:
                                if (false) { }
                                return [4, stream_await(reader.read())];
                            case 3:
                                _a = _b.sent(), done = _a.done, value = _a.value;
                                if (!done)
                                    return [3, 5];
                                return [4, stream_await(void 0)];
                            case 4: return [2, _b.sent()];
                            case 5:
                                assertNonNull(value);
                                return [4, stream_await(value)];
                            case 6: return [4, _b.sent()];
                            case 7:
                                _b.sent();
                                return [3, 2];
                            case 8: return [3, 10];
                            case 9:
                                reader.releaseLock();
                                return [7];
                            case 10: return [2];
                        }
                    });
                });
            }
            function ensureAsyncIterabe(streamLike) {
                if (isAsyncIterable(streamLike)) {
                    return streamLike;
                }
                else {
                    return asyncIterableFromStream(streamLike);
                }
            }
            var decodeAsync_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
                function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            };
            var decodeAsync_generator = (undefined && undefined.__generator) || function (thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            };
            function decodeAsync(streamLike, options) {
                if (options === void 0) {
                    options = defaultDecodeOptions;
                }
                return decodeAsync_awaiter(this, void 0, void 0, function () {
                    var stream, decoder;
                    return decodeAsync_generator(this, function (_a) {
                        stream = ensureAsyncIterabe(streamLike);
                        decoder = new Decoder_Decoder(options.extensionCodec, options.context, options.maxStrLength, options.maxBinLength, options.maxArrayLength, options.maxMapLength, options.maxExtLength);
                        return [2, decoder.decodeSingleAsync(stream)];
                    });
                });
            }
            function decodeArrayStream(streamLike, options) {
                if (options === void 0) {
                    options = defaultDecodeOptions;
                }
                var stream = ensureAsyncIterabe(streamLike);
                var decoder = new Decoder_Decoder(options.extensionCodec, options.context, options.maxStrLength, options.maxBinLength, options.maxArrayLength, options.maxMapLength, options.maxExtLength);
                return decoder.decodeArrayStream(stream);
            }
            function decodeStream(streamLike, options) {
                if (options === void 0) {
                    options = defaultDecodeOptions;
                }
                var stream = ensureAsyncIterabe(streamLike);
                var decoder = new Decoder_Decoder(options.extensionCodec, options.context, options.maxStrLength, options.maxBinLength, options.maxArrayLength, options.maxMapLength, options.maxExtLength);
                return decoder.decodeStream(stream);
            }
        })
    ]);
});

var ByteUtils = (function () {
    function ByteUtils() {
    }
    ByteUtils.prototype.bytesAvailable = function () {
        return this.length - this.cursor;
    };
    ByteUtils.prototype.getUint8 = function () {
        return this.input[this.cursor++];
    };
    ByteUtils.prototype.getUint16 = function () {
        var result = this.view.getUint16(this.cursor, this.littleEndian);
        this.cursor += 2;
        return result;
    };
    ByteUtils.prototype.getUint32 = function () {
        var result = this.view.getUint32(this.cursor, this.littleEndian);
        this.cursor += 4;
        return result;
    };
    ByteUtils.prototype.getUTF = function (size) {
        var result = new Array(size);
        for (var i = 0; i < size; ++i) {
            result[i] = String.fromCharCode(this.input[this.cursor++]);
        }
        return result.join("");
    };
    ByteUtils.prototype.getBytes = function (size) {
        var result = new Uint8Array(this.input.buffer, this.input.byteOffset + this.cursor, size);
        this.cursor += size;
        return result;
    };
    ByteUtils.prototype.skip = function (size) {
        this.cursor += size;
    };
    ByteUtils.prototype.open = function (input, littleEndian) {
        if (littleEndian === void 0) { littleEndian = false; }
        this.cursor = 0;
        this.length = input.byteLength;
        this.input = input;
        this.view = new DataView(input.buffer);
        this.littleEndian = littleEndian;
    };
    ByteUtils.prototype.close = function () {
        this.input = null;
        this.view = null;
    };
    return ByteUtils;
}());
var DNLMarkerError = (function DNLMarkerErrorClosure() {
    function DNLMarkerError(message, scanLines) {
        this.message = message;
        this.scanLines = scanLines;
    }
    DNLMarkerError.prototype = new Error();
    DNLMarkerError.prototype.name = 'DNLMarkerError';
    DNLMarkerError.constructor = DNLMarkerError;
    return DNLMarkerError;
})();
var EOIMarkerError = (function EOIMarkerErrorClosure() {
    function EOIMarkerError(message) {
        this.message = message;
    }
    EOIMarkerError.prototype = new Error();
    EOIMarkerError.prototype.name = 'EOIMarkerError';
    EOIMarkerError.constructor = EOIMarkerError;
    return EOIMarkerError;
})();
var JpegImage = (function JpegImageClosure() {
    var dctZigZag = new Uint8Array([
        0,
        1, 8,
        16, 9, 2,
        3, 10, 17, 24,
        32, 25, 18, 11, 4,
        5, 12, 19, 26, 33, 40,
        48, 41, 34, 27, 20, 13, 6,
        7, 14, 21, 28, 35, 42, 49, 56,
        57, 50, 43, 36, 29, 22, 15,
        23, 30, 37, 44, 51, 58,
        59, 52, 45, 38, 31,
        39, 46, 53, 60,
        61, 54, 47,
        55, 62,
        63
    ]);
    var dctCos1 = 4017;
    var dctSin1 = 799;
    var dctCos3 = 3406;
    var dctSin3 = 2276;
    var dctCos6 = 1567;
    var dctSin6 = 3784;
    var dctSqrt2 = 5793;
    var dctSqrt1d2 = 2896;
    function JpegImage(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.decodeTransform, decodeTransform = _c === void 0 ? null : _c, _d = _b.colorTransform, colorTransform = _d === void 0 ? -1 : _d;
        this._decodeTransform = decodeTransform;
        this._colorTransform = colorTransform;
    }
    function buildHuffmanTable(codeLengths, values) {
        var k = 0, code = [], i, j, length = 16;
        while (length > 0 && !codeLengths[length - 1]) {
            length--;
        }
        code.push({ children: [], index: 0, });
        var p = code[0], q;
        for (i = 0; i < length; i++) {
            for (j = 0; j < codeLengths[i]; j++) {
                p = code.pop();
                p.children[p.index] = values[k];
                while (p.index > 0) {
                    p = code.pop();
                }
                p.index++;
                code.push(p);
                while (code.length <= i) {
                    code.push(q = { children: [], index: 0, });
                    p.children[p.index] = q.children;
                    p = q;
                }
                k++;
            }
            if (i + 1 < length) {
                code.push(q = { children: [], index: 0, });
                p.children[p.index] = q.children;
                p = q;
            }
        }
        return code[0].children;
    }
    function getBlockBufferOffset(component, row, col) {
        return 64 * ((component.blocksPerLine + 1) * row + col);
    }
    function decodeScan(data, offset, frame, components, resetInterval, spectralStart, spectralEnd, successivePrev, successive, parseDNLMarker) {
        if (parseDNLMarker === void 0) { parseDNLMarker = false; }
        var mcusPerLine = frame.mcusPerLine;
        var progressive = frame.progressive;
        var startOffset = offset, bitsData = 0, bitsCount = 0;
        function readBit() {
            if (bitsCount > 0) {
                bitsCount--;
                return (bitsData >> bitsCount) & 1;
            }
            bitsData = data[offset++];
            if (bitsData === 0xFF) {
                var nextByte = data[offset++];
                if (nextByte) {
                    if (nextByte === 0xDC && parseDNLMarker) {
                        offset += 2;
                        var scanLines = (data[offset++] << 8) | data[offset++];
                        if (scanLines > 0 && scanLines !== frame.scanLines) {
                            throw new DNLMarkerError('Found DNL marker (0xFFDC) while parsing scan data', scanLines);
                        }
                    }
                    else if (nextByte === 0xD9) {
                        throw new EOIMarkerError('Found EOI marker (0xFFD9) while parsing scan data');
                    }
                    throw new Error("unexpected marker " + ((bitsData << 8) | nextByte).toString(16));
                }
            }
            bitsCount = 7;
            return bitsData >>> 7;
        }
        function decodeHuffman(tree) {
            var node = tree;
            while (true) {
                node = node[readBit()];
                if (typeof node === 'number') {
                    return node;
                }
                if (typeof node !== 'object') {
                    throw new Error('invalid huffman sequence');
                }
            }
        }
        function receive(length) {
            var n = 0;
            while (length > 0) {
                n = (n << 1) | readBit();
                length--;
            }
            return n;
        }
        function receiveAndExtend(length) {
            if (length === 1) {
                return readBit() === 1 ? 1 : -1;
            }
            var n = receive(length);
            if (n >= 1 << (length - 1)) {
                return n;
            }
            return n + (-1 << length) + 1;
        }
        function decodeBaseline(component, offset) {
            var t = decodeHuffman(component.huffmanTableDC);
            var diff = t === 0 ? 0 : receiveAndExtend(t);
            component.blockData[offset] = (component.pred += diff);
            var k = 1;
            while (k < 64) {
                var rs = decodeHuffman(component.huffmanTableAC);
                var s = rs & 15, r = rs >> 4;
                if (s === 0) {
                    if (r < 15) {
                        break;
                    }
                    k += 16;
                    continue;
                }
                k += r;
                var z = dctZigZag[k];
                component.blockData[offset + z] = receiveAndExtend(s);
                k++;
            }
        }
        function decodeDCFirst(component, offset) {
            var t = decodeHuffman(component.huffmanTableDC);
            var diff = t === 0 ? 0 : (receiveAndExtend(t) << successive);
            component.blockData[offset] = (component.pred += diff);
        }
        function decodeDCSuccessive(component, offset) {
            component.blockData[offset] |= readBit() << successive;
        }
        var eobrun = 0;
        function decodeACFirst(component, offset) {
            if (eobrun > 0) {
                eobrun--;
                return;
            }
            var k = spectralStart, e = spectralEnd;
            while (k <= e) {
                var rs = decodeHuffman(component.huffmanTableAC);
                var s = rs & 15, r = rs >> 4;
                if (s === 0) {
                    if (r < 15) {
                        eobrun = receive(r) + (1 << r) - 1;
                        break;
                    }
                    k += 16;
                    continue;
                }
                k += r;
                var z = dctZigZag[k];
                component.blockData[offset + z] =
                    receiveAndExtend(s) * (1 << successive);
                k++;
            }
        }
        var successiveACState = 0, successiveACNextValue;
        function decodeACSuccessive(component, offset) {
            var k = spectralStart;
            var e = spectralEnd;
            var r = 0;
            var s;
            var rs;
            while (k <= e) {
                var offsetZ = offset + dctZigZag[k];
                var sign = component.blockData[offsetZ] < 0 ? -1 : 1;
                switch (successiveACState) {
                    case 0:
                        rs = decodeHuffman(component.huffmanTableAC);
                        s = rs & 15;
                        r = rs >> 4;
                        if (s === 0) {
                            if (r < 15) {
                                eobrun = receive(r) + (1 << r);
                                successiveACState = 4;
                            }
                            else {
                                r = 16;
                                successiveACState = 1;
                            }
                        }
                        else {
                            if (s !== 1) {
                                throw new Error('invalid ACn encoding');
                            }
                            successiveACNextValue = receiveAndExtend(s);
                            successiveACState = r ? 2 : 3;
                        }
                        continue;
                    case 1:
                    case 2:
                        if (component.blockData[offsetZ]) {
                            component.blockData[offsetZ] += sign * (readBit() << successive);
                        }
                        else {
                            r--;
                            if (r === 0) {
                                successiveACState = successiveACState === 2 ? 3 : 0;
                            }
                        }
                        break;
                    case 3:
                        if (component.blockData[offsetZ]) {
                            component.blockData[offsetZ] += sign * (readBit() << successive);
                        }
                        else {
                            component.blockData[offsetZ] =
                                successiveACNextValue << successive;
                            successiveACState = 0;
                        }
                        break;
                    case 4:
                        if (component.blockData[offsetZ]) {
                            component.blockData[offsetZ] += sign * (readBit() << successive);
                        }
                        break;
                }
                k++;
            }
            if (successiveACState === 4) {
                eobrun--;
                if (eobrun === 0) {
                    successiveACState = 0;
                }
            }
        }
        function decodeMcu(component, decode, mcu, row, col) {
            var mcuRow = (mcu / mcusPerLine) | 0;
            var mcuCol = mcu % mcusPerLine;
            var blockRow = mcuRow * component.v + row;
            var blockCol = mcuCol * component.h + col;
            var offset = getBlockBufferOffset(component, blockRow, blockCol);
            decode(component, offset);
        }
        function decodeBlock(component, decode, mcu) {
            var blockRow = (mcu / component.blocksPerLine) | 0;
            var blockCol = mcu % component.blocksPerLine;
            var offset = getBlockBufferOffset(component, blockRow, blockCol);
            decode(component, offset);
        }
        var componentsLength = components.length;
        var component, i, j, k, n;
        var decodeFn;
        if (progressive) {
            if (spectralStart === 0) {
                decodeFn = successivePrev === 0 ? decodeDCFirst : decodeDCSuccessive;
            }
            else {
                decodeFn = successivePrev === 0 ? decodeACFirst : decodeACSuccessive;
            }
        }
        else {
            decodeFn = decodeBaseline;
        }
        var mcu = 0, fileMarker;
        var mcuExpected;
        if (componentsLength === 1) {
            mcuExpected = components[0].blocksPerLine * components[0].blocksPerColumn;
        }
        else {
            mcuExpected = mcusPerLine * frame.mcusPerColumn;
        }
        var h, v;
        while (mcu < mcuExpected) {
            var mcuToRead = resetInterval ?
                Math.min(mcuExpected - mcu, resetInterval) : mcuExpected;
            for (i = 0; i < componentsLength; i++) {
                components[i].pred = 0;
            }
            eobrun = 0;
            if (componentsLength === 1) {
                component = components[0];
                for (n = 0; n < mcuToRead; n++) {
                    decodeBlock(component, decodeFn, mcu);
                    mcu++;
                }
            }
            else {
                for (n = 0; n < mcuToRead; n++) {
                    for (i = 0; i < componentsLength; i++) {
                        component = components[i];
                        h = component.h;
                        v = component.v;
                        for (j = 0; j < v; j++) {
                            for (k = 0; k < h; k++) {
                                decodeMcu(component, decodeFn, mcu, j, k);
                            }
                        }
                    }
                    mcu++;
                }
            }
            bitsCount = 0;
            fileMarker = findNextFileMarker(data, offset);
            if (fileMarker && fileMarker.invalid) {
                warn('decodeScan - unexpected MCU data, current marker is: ' +
                    fileMarker.invalid);
                offset = fileMarker.offset;
            }
            var marker = fileMarker && fileMarker.marker;
            if (!marker || marker <= 0xFF00) {
                throw new Error('marker was not found');
            }
            if (marker >= 0xFFD0 && marker <= 0xFFD7) {
                offset += 2;
            }
            else {
                break;
            }
        }
        fileMarker = findNextFileMarker(data, offset);
        if (fileMarker && fileMarker.invalid) {
            warn('decodeScan - unexpected Scan data, current marker is: ' +
                fileMarker.invalid);
            offset = fileMarker.offset;
        }
        return offset - startOffset;
    }
    function quantizeAndInverse(component, blockBufferOffset, p) {
        var qt = component.quantizationTable, blockData = component.blockData;
        var v0, v1, v2, v3, v4, v5, v6, v7;
        var p0, p1, p2, p3, p4, p5, p6, p7;
        var t;
        if (!qt) {
            throw new Error('missing required Quantization Table.');
        }
        for (var row = 0; row < 64; row += 8) {
            p0 = blockData[blockBufferOffset + row];
            p1 = blockData[blockBufferOffset + row + 1];
            p2 = blockData[blockBufferOffset + row + 2];
            p3 = blockData[blockBufferOffset + row + 3];
            p4 = blockData[blockBufferOffset + row + 4];
            p5 = blockData[blockBufferOffset + row + 5];
            p6 = blockData[blockBufferOffset + row + 6];
            p7 = blockData[blockBufferOffset + row + 7];
            p0 *= qt[row];
            if ((p1 | p2 | p3 | p4 | p5 | p6 | p7) === 0) {
                t = (dctSqrt2 * p0 + 512) >> 10;
                p[row] = t;
                p[row + 1] = t;
                p[row + 2] = t;
                p[row + 3] = t;
                p[row + 4] = t;
                p[row + 5] = t;
                p[row + 6] = t;
                p[row + 7] = t;
                continue;
            }
            p1 *= qt[row + 1];
            p2 *= qt[row + 2];
            p3 *= qt[row + 3];
            p4 *= qt[row + 4];
            p5 *= qt[row + 5];
            p6 *= qt[row + 6];
            p7 *= qt[row + 7];
            v0 = (dctSqrt2 * p0 + 128) >> 8;
            v1 = (dctSqrt2 * p4 + 128) >> 8;
            v2 = p2;
            v3 = p6;
            v4 = (dctSqrt1d2 * (p1 - p7) + 128) >> 8;
            v7 = (dctSqrt1d2 * (p1 + p7) + 128) >> 8;
            v5 = p3 << 4;
            v6 = p5 << 4;
            v0 = (v0 + v1 + 1) >> 1;
            v1 = v0 - v1;
            t = (v2 * dctSin6 + v3 * dctCos6 + 128) >> 8;
            v2 = (v2 * dctCos6 - v3 * dctSin6 + 128) >> 8;
            v3 = t;
            v4 = (v4 + v6 + 1) >> 1;
            v6 = v4 - v6;
            v7 = (v7 + v5 + 1) >> 1;
            v5 = v7 - v5;
            v0 = (v0 + v3 + 1) >> 1;
            v3 = v0 - v3;
            v1 = (v1 + v2 + 1) >> 1;
            v2 = v1 - v2;
            t = (v4 * dctSin3 + v7 * dctCos3 + 2048) >> 12;
            v4 = (v4 * dctCos3 - v7 * dctSin3 + 2048) >> 12;
            v7 = t;
            t = (v5 * dctSin1 + v6 * dctCos1 + 2048) >> 12;
            v5 = (v5 * dctCos1 - v6 * dctSin1 + 2048) >> 12;
            v6 = t;
            p[row] = v0 + v7;
            p[row + 7] = v0 - v7;
            p[row + 1] = v1 + v6;
            p[row + 6] = v1 - v6;
            p[row + 2] = v2 + v5;
            p[row + 5] = v2 - v5;
            p[row + 3] = v3 + v4;
            p[row + 4] = v3 - v4;
        }
        for (var col = 0; col < 8; ++col) {
            p0 = p[col];
            p1 = p[col + 8];
            p2 = p[col + 16];
            p3 = p[col + 24];
            p4 = p[col + 32];
            p5 = p[col + 40];
            p6 = p[col + 48];
            p7 = p[col + 56];
            if ((p1 | p2 | p3 | p4 | p5 | p6 | p7) === 0) {
                t = (dctSqrt2 * p0 + 8192) >> 14;
                t = (t < -2040) ? 0 : (t >= 2024) ? 255 : (t + 2056) >> 4;
                blockData[blockBufferOffset + col] = t;
                blockData[blockBufferOffset + col + 8] = t;
                blockData[blockBufferOffset + col + 16] = t;
                blockData[blockBufferOffset + col + 24] = t;
                blockData[blockBufferOffset + col + 32] = t;
                blockData[blockBufferOffset + col + 40] = t;
                blockData[blockBufferOffset + col + 48] = t;
                blockData[blockBufferOffset + col + 56] = t;
                continue;
            }
            v0 = (dctSqrt2 * p0 + 2048) >> 12;
            v1 = (dctSqrt2 * p4 + 2048) >> 12;
            v2 = p2;
            v3 = p6;
            v4 = (dctSqrt1d2 * (p1 - p7) + 2048) >> 12;
            v7 = (dctSqrt1d2 * (p1 + p7) + 2048) >> 12;
            v5 = p3;
            v6 = p5;
            v0 = ((v0 + v1 + 1) >> 1) + 4112;
            v1 = v0 - v1;
            t = (v2 * dctSin6 + v3 * dctCos6 + 2048) >> 12;
            v2 = (v2 * dctCos6 - v3 * dctSin6 + 2048) >> 12;
            v3 = t;
            v4 = (v4 + v6 + 1) >> 1;
            v6 = v4 - v6;
            v7 = (v7 + v5 + 1) >> 1;
            v5 = v7 - v5;
            v0 = (v0 + v3 + 1) >> 1;
            v3 = v0 - v3;
            v1 = (v1 + v2 + 1) >> 1;
            v2 = v1 - v2;
            t = (v4 * dctSin3 + v7 * dctCos3 + 2048) >> 12;
            v4 = (v4 * dctCos3 - v7 * dctSin3 + 2048) >> 12;
            v7 = t;
            t = (v5 * dctSin1 + v6 * dctCos1 + 2048) >> 12;
            v5 = (v5 * dctCos1 - v6 * dctSin1 + 2048) >> 12;
            v6 = t;
            p0 = v0 + v7;
            p7 = v0 - v7;
            p1 = v1 + v6;
            p6 = v1 - v6;
            p2 = v2 + v5;
            p5 = v2 - v5;
            p3 = v3 + v4;
            p4 = v3 - v4;
            p0 = (p0 < 16) ? 0 : (p0 >= 4080) ? 255 : p0 >> 4;
            p1 = (p1 < 16) ? 0 : (p1 >= 4080) ? 255 : p1 >> 4;
            p2 = (p2 < 16) ? 0 : (p2 >= 4080) ? 255 : p2 >> 4;
            p3 = (p3 < 16) ? 0 : (p3 >= 4080) ? 255 : p3 >> 4;
            p4 = (p4 < 16) ? 0 : (p4 >= 4080) ? 255 : p4 >> 4;
            p5 = (p5 < 16) ? 0 : (p5 >= 4080) ? 255 : p5 >> 4;
            p6 = (p6 < 16) ? 0 : (p6 >= 4080) ? 255 : p6 >> 4;
            p7 = (p7 < 16) ? 0 : (p7 >= 4080) ? 255 : p7 >> 4;
            blockData[blockBufferOffset + col] = p0;
            blockData[blockBufferOffset + col + 8] = p1;
            blockData[blockBufferOffset + col + 16] = p2;
            blockData[blockBufferOffset + col + 24] = p3;
            blockData[blockBufferOffset + col + 32] = p4;
            blockData[blockBufferOffset + col + 40] = p5;
            blockData[blockBufferOffset + col + 48] = p6;
            blockData[blockBufferOffset + col + 56] = p7;
        }
    }
    function buildComponentData(frame, component) {
        var blocksPerLine = component.blocksPerLine;
        var blocksPerColumn = component.blocksPerColumn;
        var computationBuffer = new Int16Array(64);
        for (var blockRow = 0; blockRow < blocksPerColumn; blockRow++) {
            for (var blockCol = 0; blockCol < blocksPerLine; blockCol++) {
                var offset = getBlockBufferOffset(component, blockRow, blockCol);
                quantizeAndInverse(component, offset, computationBuffer);
            }
        }
        return component.blockData;
    }
    function findNextFileMarker(data, currentPos, startPos) {
        if (startPos === void 0) { startPos = currentPos; }
        function peekUint16(pos) {
            return (data[pos] << 8) | data[pos + 1];
        }
        var maxPos = data.length - 1;
        var newPos = startPos < currentPos ? startPos : currentPos;
        if (currentPos >= maxPos) {
            return null;
        }
        var currentMarker = peekUint16(currentPos);
        if (currentMarker >= 0xFFC0 && currentMarker <= 0xFFFE) {
            return {
                invalid: null,
                marker: currentMarker,
                offset: currentPos,
            };
        }
        var newMarker = peekUint16(newPos);
        while (!(newMarker >= 0xFFC0 && newMarker <= 0xFFFE)) {
            if (++newPos >= maxPos) {
                return null;
            }
            newMarker = peekUint16(newPos);
        }
        return {
            invalid: currentMarker.toString(16),
            marker: newMarker,
            offset: newPos,
        };
    }
    JpegImage.prototype = {
        width: 0,
        height: 0,
        parse: function (data, _a) {
            var _b = (_a === void 0 ? {} : _a).dnlScanLines, dnlScanLines = _b === void 0 ? null : _b;
            function readUint16() {
                var value = (data[offset] << 8) | data[offset + 1];
                offset += 2;
                return value;
            }
            function readDataBlock() {
                var length = readUint16();
                var endOffset = offset + length - 2;
                var fileMarker = findNextFileMarker(data, endOffset, offset);
                if (fileMarker && fileMarker.invalid) {
                    warn('readDataBlock - incorrect length, current marker is: ' +
                        fileMarker.invalid);
                    endOffset = fileMarker.offset;
                }
                var array = data.subarray(offset, endOffset);
                offset += array.length;
                return array;
            }
            function prepareComponents(frame) {
                var mcusPerLine = Math.ceil(frame.samplesPerLine / 8 / frame.maxH);
                var mcusPerColumn = Math.ceil(frame.scanLines / 8 / frame.maxV);
                for (var i = 0; i < frame.components.length; i++) {
                    component = frame.components[i];
                    var blocksPerLine = Math.ceil(Math.ceil(frame.samplesPerLine / 8) *
                        component.h / frame.maxH);
                    var blocksPerColumn = Math.ceil(Math.ceil(frame.scanLines / 8) *
                        component.v / frame.maxV);
                    var blocksPerLineForMcu = mcusPerLine * component.h;
                    var blocksPerColumnForMcu = mcusPerColumn * component.v;
                    var blocksBufferSize = 64 * blocksPerColumnForMcu *
                        (blocksPerLineForMcu + 1);
                    component.blockData = new Int16Array(blocksBufferSize);
                    component.blocksPerLine = blocksPerLine;
                    component.blocksPerColumn = blocksPerColumn;
                }
                frame.mcusPerLine = mcusPerLine;
                frame.mcusPerColumn = mcusPerColumn;
            }
            var offset = 0;
            var jfif = null;
            var adobe = null;
            var frame, resetInterval;
            var numSOSMarkers = 0;
            var quantizationTables = [];
            var huffmanTablesAC = [], huffmanTablesDC = [];
            var fileMarker = readUint16();
            if (fileMarker !== 0xFFD8) {
                throw new Error('SOI not found');
            }
            fileMarker = readUint16();
            markerLoop: while (fileMarker !== 0xFFD9) {
                var i, j, l;
                switch (fileMarker) {
                    case 0xFFE0:
                    case 0xFFE1:
                    case 0xFFE2:
                    case 0xFFE3:
                    case 0xFFE4:
                    case 0xFFE5:
                    case 0xFFE6:
                    case 0xFFE7:
                    case 0xFFE8:
                    case 0xFFE9:
                    case 0xFFEA:
                    case 0xFFEB:
                    case 0xFFEC:
                    case 0xFFED:
                    case 0xFFEE:
                    case 0xFFEF:
                    case 0xFFFE:
                        var appData = readDataBlock();
                        if (fileMarker === 0xFFE0) {
                            if (appData[0] === 0x4A && appData[1] === 0x46 &&
                                appData[2] === 0x49 && appData[3] === 0x46 &&
                                appData[4] === 0) {
                                jfif = {
                                    version: { major: appData[5], minor: appData[6], },
                                    densityUnits: appData[7],
                                    xDensity: (appData[8] << 8) | appData[9],
                                    yDensity: (appData[10] << 8) | appData[11],
                                    thumbWidth: appData[12],
                                    thumbHeight: appData[13],
                                    thumbData: appData.subarray(14, 14 +
                                        3 * appData[12] * appData[13]),
                                };
                            }
                        }
                        if (fileMarker === 0xFFEE) {
                            if (appData[0] === 0x41 && appData[1] === 0x64 &&
                                appData[2] === 0x6F && appData[3] === 0x62 &&
                                appData[4] === 0x65) {
                                adobe = {
                                    version: (appData[5] << 8) | appData[6],
                                    flags0: (appData[7] << 8) | appData[8],
                                    flags1: (appData[9] << 8) | appData[10],
                                    transformCode: appData[11],
                                };
                            }
                        }
                        break;
                    case 0xFFDB:
                        var quantizationTablesLength = readUint16();
                        var quantizationTablesEnd = quantizationTablesLength + offset - 2;
                        var z;
                        while (offset < quantizationTablesEnd) {
                            var quantizationTableSpec = data[offset++];
                            var tableData = new Uint16Array(64);
                            if ((quantizationTableSpec >> 4) === 0) {
                                for (j = 0; j < 64; j++) {
                                    z = dctZigZag[j];
                                    tableData[z] = data[offset++];
                                }
                            }
                            else if ((quantizationTableSpec >> 4) === 1) {
                                for (j = 0; j < 64; j++) {
                                    z = dctZigZag[j];
                                    tableData[z] = readUint16();
                                }
                            }
                            else {
                                throw new Error('DQT - invalid table spec');
                            }
                            quantizationTables[quantizationTableSpec & 15] = tableData;
                        }
                        break;
                    case 0xFFC0:
                    case 0xFFC1:
                    case 0xFFC2:
                        if (frame) {
                            throw new Error('Only single frame JPEGs supported');
                        }
                        readUint16();
                        frame = {};
                        frame.extended = (fileMarker === 0xFFC1);
                        frame.progressive = (fileMarker === 0xFFC2);
                        frame.precision = data[offset++];
                        var sofScanLines = readUint16();
                        frame.scanLines = dnlScanLines || sofScanLines;
                        frame.samplesPerLine = readUint16();
                        frame.components = [];
                        frame.componentIds = {};
                        var componentsCount = data[offset++], componentId;
                        var maxH = 0, maxV = 0;
                        for (i = 0; i < componentsCount; i++) {
                            componentId = data[offset];
                            var h = data[offset + 1] >> 4;
                            var v = data[offset + 1] & 15;
                            if (maxH < h) {
                                maxH = h;
                            }
                            if (maxV < v) {
                                maxV = v;
                            }
                            var qId = data[offset + 2];
                            l = frame.components.push({
                                h: h,
                                v: v,
                                quantizationId: qId,
                                quantizationTable: null,
                            });
                            frame.componentIds[componentId] = l - 1;
                            offset += 3;
                        }
                        frame.maxH = maxH;
                        frame.maxV = maxV;
                        prepareComponents(frame);
                        break;
                    case 0xFFC4:
                        var huffmanLength = readUint16();
                        for (i = 2; i < huffmanLength;) {
                            var huffmanTableSpec = data[offset++];
                            var codeLengths = new Uint8Array(16);
                            var codeLengthSum = 0;
                            for (j = 0; j < 16; j++, offset++) {
                                codeLengthSum += (codeLengths[j] = data[offset]);
                            }
                            var huffmanValues = new Uint8Array(codeLengthSum);
                            for (j = 0; j < codeLengthSum; j++, offset++) {
                                huffmanValues[j] = data[offset];
                            }
                            i += 17 + codeLengthSum;
                            ((huffmanTableSpec >> 4) === 0 ?
                                huffmanTablesDC : huffmanTablesAC)[huffmanTableSpec & 15] =
                                buildHuffmanTable(codeLengths, huffmanValues);
                        }
                        break;
                    case 0xFFDD:
                        readUint16();
                        resetInterval = readUint16();
                        break;
                    case 0xFFDA:
                        var parseDNLMarker = (++numSOSMarkers) === 1 && !dnlScanLines;
                        readUint16();
                        var selectorsCount = data[offset++];
                        var components = [], component;
                        for (i = 0; i < selectorsCount; i++) {
                            var componentIndex = frame.componentIds[data[offset++]];
                            component = frame.components[componentIndex];
                            var tableSpec = data[offset++];
                            component.huffmanTableDC = huffmanTablesDC[tableSpec >> 4];
                            component.huffmanTableAC = huffmanTablesAC[tableSpec & 15];
                            components.push(component);
                        }
                        var spectralStart = data[offset++];
                        var spectralEnd = data[offset++];
                        var successiveApproximation = data[offset++];
                        try {
                            var processed = decodeScan(data, offset, frame, components, resetInterval, spectralStart, spectralEnd, successiveApproximation >> 4, successiveApproximation & 15, parseDNLMarker);
                            offset += processed;
                        }
                        catch (ex) {
                            if (ex instanceof DNLMarkerError) {
                                warn(ex.message + " -- attempting to re-parse the JPEG image.");
                                return this.parse(data, { dnlScanLines: ex.scanLines, });
                            }
                            else if (ex instanceof EOIMarkerError) {
                                warn(ex.message + " -- ignoring the rest of the image data.");
                                break markerLoop;
                            }
                            throw ex;
                        }
                        break;
                    case 0xFFDC:
                        offset += 4;
                        break;
                    case 0xFFFF:
                        if (data[offset] !== 0xFF) {
                            offset--;
                        }
                        break;
                    default:
                        if (data[offset - 3] === 0xFF &&
                            data[offset - 2] >= 0xC0 && data[offset - 2] <= 0xFE) {
                            offset -= 3;
                            break;
                        }
                        var nextFileMarker = findNextFileMarker(data, offset - 2);
                        if (nextFileMarker && nextFileMarker.invalid) {
                            warn('JpegImage.parse - unexpected data, current marker is: ' +
                                nextFileMarker.invalid);
                            offset = nextFileMarker.offset;
                            break;
                        }
                        throw new Error('unknown marker ' + fileMarker.toString(16));
                }
                fileMarker = readUint16();
            }
            this.width = frame.samplesPerLine;
            this.height = frame.scanLines;
            this.jfif = jfif;
            this.adobe = adobe;
            this.components = [];
            for (i = 0; i < frame.components.length; i++) {
                component = frame.components[i];
                var quantizationTable = quantizationTables[component.quantizationId];
                if (quantizationTable) {
                    component.quantizationTable = quantizationTable;
                }
                this.components.push({
                    output: buildComponentData(frame, component),
                    scaleX: component.h / frame.maxH,
                    scaleY: component.v / frame.maxV,
                    blocksPerLine: component.blocksPerLine,
                    blocksPerColumn: component.blocksPerColumn,
                });
            }
            this.numComponents = this.components.length;
        },
        _getLinearizedBlockData: function (width, height, needAlpha, reserved, alphaChannel) {
            if (needAlpha === void 0) { needAlpha = false; }
            if (reserved === void 0) { reserved = 0; }
            if (alphaChannel === void 0) { alphaChannel = null; }
            var isSourcePDF = false;
            var scaleX = this.width / width, scaleY = this.height / height;
            var component, componentScaleX, componentScaleY, blocksPerScanline;
            var x, y, i, j, k;
            var index;
            var offset = 0;
            var output;
            var numComponents = this.components.length;
            var dataLength = width * height * numComponents;
            if (numComponents == 3 && needAlpha) {
                dataLength = width * height * 4;
            }
            var result = new ArrayBuffer(dataLength + reserved);
            var data = new Uint8ClampedArray(result, reserved);
            var xScaleBlockOffset = new Uint32Array(width);
            var mask3LSB = 0xfffffff8;
            if (numComponents == 3 && needAlpha) {
                for (i = 0; i < numComponents; i++) {
                    component = this.components[i];
                    componentScaleX = component.scaleX * scaleX;
                    componentScaleY = component.scaleY * scaleY;
                    offset = i;
                    output = component.output;
                    blocksPerScanline = (component.blocksPerLine + 1) << 3;
                    for (x = 0; x < width; x++) {
                        j = 0 | (x * componentScaleX);
                        xScaleBlockOffset[x] = ((j & mask3LSB) << 3) | (j & 7);
                    }
                    for (y = 0; y < height; y++) {
                        j = 0 | (y * componentScaleY);
                        index = blocksPerScanline * (j & mask3LSB) | ((j & 7) << 3);
                        for (x = 0; x < width; x++) {
                            data[offset] = output[index + xScaleBlockOffset[x]];
                            offset += 4;
                        }
                    }
                }
                offset = 3;
                if (alphaChannel != null) {
                    var ii = 0;
                    for (y = 0; y < height; y++) {
                        for (x = 0; x < width; x++) {
                            data[offset] = alphaChannel[ii++];
                            offset += 4;
                        }
                    }
                }
                else {
                    for (y = 0; y < height; y++) {
                        for (x = 0; x < width; x++) {
                            data[offset] = 0xff;
                            offset += 4;
                        }
                    }
                }
            }
            else {
                for (i = 0; i < numComponents; i++) {
                    component = this.components[i];
                    componentScaleX = component.scaleX * scaleX;
                    componentScaleY = component.scaleY * scaleY;
                    offset = i;
                    output = component.output;
                    blocksPerScanline = (component.blocksPerLine + 1) << 3;
                    for (x = 0; x < width; x++) {
                        j = 0 | (x * componentScaleX);
                        xScaleBlockOffset[x] = ((j & mask3LSB) << 3) | (j & 7);
                    }
                    for (y = 0; y < height; y++) {
                        j = 0 | (y * componentScaleY);
                        index = blocksPerScanline * (j & mask3LSB) | ((j & 7) << 3);
                        for (x = 0; x < width; x++) {
                            data[offset] = output[index + xScaleBlockOffset[x]];
                            offset += numComponents;
                        }
                    }
                }
            }
            var transform = this._decodeTransform;
            if (!isSourcePDF && numComponents === 4 && !transform) {
                transform = new Int32Array([
                    -256, 255, -256, 255, -256, 255, -256, 255
                ]);
            }
            if (transform) {
                if (numComponents == 3 && needAlpha) {
                    for (i = 0; i < dataLength;) {
                        for (j = 0, k = 0; j < numComponents; j++, i++, k += 2) {
                            data[i] = ((data[i] * transform[k]) >> 8) + transform[k + 1];
                        }
                        i++;
                    }
                }
                else {
                    for (i = 0; i < dataLength;) {
                        for (j = 0, k = 0; j < numComponents; j++, i++, k += 2) {
                            data[i] = ((data[i] * transform[k]) >> 8) + transform[k + 1];
                        }
                    }
                }
            }
            return data;
        },
        get _isColorConversionNeeded() {
            if (this.adobe) {
                return !!this.adobe.transformCode;
            }
            if (this.numComponents === 3) {
                if (this._colorTransform === 0) {
                    return false;
                }
                return true;
            }
            if (this._colorTransform === 1) {
                return true;
            }
            return false;
        },
        _convertYccToRgb: function convertYccToRgb(data, needAlpha) {
            if (needAlpha === void 0) { needAlpha = false; }
            var Y, Cb, Cr;
            var i, length;
            if (needAlpha) {
                for (i = 0, length = data.length; i < length; i += 3) {
                    Y = data[i];
                    Cb = data[i + 1];
                    Cr = data[i + 2];
                    data[i] = Y - 179.456 + 1.402 * Cr;
                    data[i + 1] = Y + 135.459 - 0.344 * Cb - 0.714 * Cr;
                    data[i + 2] = Y - 226.816 + 1.772 * Cb;
                    i++;
                }
            }
            else {
                for (i = 0, length = data.length; i < length; i += 3) {
                    Y = data[i];
                    Cb = data[i + 1];
                    Cr = data[i + 2];
                    data[i] = Y - 179.456 + 1.402 * Cr;
                    data[i + 1] = Y + 135.459 - 0.344 * Cb - 0.714 * Cr;
                    data[i + 2] = Y - 226.816 + 1.772 * Cb;
                }
            }
            return data;
        },
        _convertYcckToRgb: function convertYcckToRgb(data) {
            var Y, Cb, Cr, k;
            var offset = 0;
            for (var i = 0, length = data.length; i < length; i += 4) {
                Y = data[i];
                Cb = data[i + 1];
                Cr = data[i + 2];
                k = data[i + 3];
                data[offset++] = -122.67195406894 +
                    Cb * (-6.60635669420364e-5 * Cb + 0.000437130475926232 * Cr -
                        5.4080610064599e-5 * Y + 0.00048449797120281 * k -
                        0.154362151871126) +
                    Cr * (-0.000957964378445773 * Cr + 0.000817076911346625 * Y -
                        0.00477271405408747 * k + 1.53380253221734) +
                    Y * (0.000961250184130688 * Y - 0.00266257332283933 * k +
                        0.48357088451265) +
                    k * (-0.000336197177618394 * k + 0.484791561490776);
                data[offset++] = 107.268039397724 +
                    Cb * (2.19927104525741e-5 * Cb - 0.000640992018297945 * Cr +
                        0.000659397001245577 * Y + 0.000426105652938837 * k -
                        0.176491792462875) +
                    Cr * (-0.000778269941513683 * Cr + 0.00130872261408275 * Y +
                        0.000770482631801132 * k - 0.151051492775562) +
                    Y * (0.00126935368114843 * Y - 0.00265090189010898 * k +
                        0.25802910206845) +
                    k * (-0.000318913117588328 * k - 0.213742400323665);
                data[offset++] = -20.810012546947 +
                    Cb * (-0.000570115196973677 * Cb - 2.63409051004589e-5 * Cr +
                        0.0020741088115012 * Y - 0.00288260236853442 * k +
                        0.814272968359295) +
                    Cr * (-1.53496057440975e-5 * Cr - 0.000132689043961446 * Y +
                        0.000560833691242812 * k - 0.195152027534049) +
                    Y * (0.00174418132927582 * Y - 0.00255243321439347 * k +
                        0.116935020465145) +
                    k * (-0.000343531996510555 * k + 0.24165260232407);
            }
            return data.subarray(0, offset);
        },
        _convertYcckToCmyk: function convertYcckToCmyk(data) {
            var Y, Cb, Cr;
            for (var i = 0, length = data.length; i < length; i += 4) {
                Y = data[i];
                Cb = data[i + 1];
                Cr = data[i + 2];
                data[i] = 434.456 - Y - 1.402 * Cr;
                data[i + 1] = 119.541 - Y + 0.344 * Cb + 0.714 * Cr;
                data[i + 2] = 481.816 - Y - 1.772 * Cb;
            }
            return data;
        },
        _convertCmykToRgb: function convertCmykToRgb(data) {
            var c, m, y, k;
            var offset = 0;
            var scale = 1 / 255;
            for (var i = 0, length = data.length; i < length; i += 4) {
                c = data[i] * scale;
                m = data[i + 1] * scale;
                y = data[i + 2] * scale;
                k = data[i + 3] * scale;
                data[offset++] = 255 +
                    c * (-4.387332384609988 * c + 54.48615194189176 * m +
                        18.82290502165302 * y + 212.25662451639585 * k -
                        285.2331026137004) +
                    m * (1.7149763477362134 * m - 5.6096736904047315 * y -
                        17.873870861415444 * k - 5.497006427196366) +
                    y * (-2.5217340131683033 * y - 21.248923337353073 * k +
                        17.5119270841813) -
                    k * (21.86122147463605 * k + 189.48180835922747);
                data[offset++] = 255 +
                    c * (8.841041422036149 * c + 60.118027045597366 * m +
                        6.871425592049007 * y + 31.159100130055922 * k -
                        79.2970844816548) +
                    m * (-15.310361306967817 * m + 17.575251261109482 * y +
                        131.35250912493976 * k - 190.9453302588951) +
                    y * (4.444339102852739 * y + 9.8632861493405 * k -
                        24.86741582555878) -
                    k * (20.737325471181034 * k + 187.80453709719578);
                data[offset++] = 255 +
                    c * (0.8842522430003296 * c + 8.078677503112928 * m +
                        30.89978309703729 * y - 0.23883238689178934 * k -
                        14.183576799673286) +
                    m * (10.49593273432072 * m + 63.02378494754052 * y +
                        50.606957656360734 * k - 112.23884253719248) +
                    y * (0.03296041114873217 * y + 115.60384449646641 * k -
                        193.58209356861505) -
                    k * (22.33816807309886 * k + 180.12613974708367);
            }
            return data.subarray(0, offset);
        },
        getData: function (width, height, forceRGB, needAlpha, reserved, alphaChannel) {
            if (forceRGB === void 0) { forceRGB = false; }
            if (needAlpha === void 0) { needAlpha = false; }
            if (reserved === void 0) { reserved = 0; }
            if (alphaChannel === void 0) { alphaChannel = null; }
            if (this.numComponents > 4) {
                throw new Error('Unsupported color mode');
            }
            var data = this._getLinearizedBlockData(width, height, needAlpha, reserved, alphaChannel);
            if (this.numComponents === 1 && forceRGB) {
                var dataLength = data.length;
                var rgbData = new Uint8ClampedArray(dataLength * 3);
                var offset = 0;
                for (var i = 0; i < dataLength; i++) {
                    var grayColor = data[i];
                    rgbData[offset++] = grayColor;
                    rgbData[offset++] = grayColor;
                    rgbData[offset++] = grayColor;
                }
                return rgbData;
            }
            else if (this.numComponents === 3 && this._isColorConversionNeeded) {
                return this._convertYccToRgb(data, needAlpha);
            }
            else if (this.numComponents === 4) {
                if (this._isColorConversionNeeded) {
                    if (forceRGB) {
                        return this._convertYcckToRgb(data);
                    }
                    return this._convertYcckToCmyk(data);
                }
                else if (forceRGB) {
                    return this._convertCmykToRgb(data);
                }
            }
            return data;
        },
    };
    return JpegImage;
})();
var PngJob = (function () {
    function PngJob() {
        this.segments = [];
    }
    PngJob.create = function () {
        var result;
        if (PngJob.p_sJob != null) {
            result = this.p_sJob;
            this.p_sJob = this.p_sJob.p_next;
        }
        else {
            result = new PngJob();
        }
        return result;
    };
    PngJob.free = function (entry) {
        entry.p_next = this.p_sJob;
        PngJob.p_sJob = entry;
        entry.paleT = null;
        entry.segments.length = 0;
        entry.transT = null;
    };
    return PngJob;
}());
var CstPngTools = (function () {
    function CstPngTools() {
    }
    CstPngTools.init = function () {
        CstPngTools.p_setHands = {
            IHDR: CstPngTools.p_IHDR,
            PLTE: CstPngTools.p_PLTE,
            IDAT: CstPngTools.p_IDAT,
            tRNS: CstPngTools.p_TRNS,
        };
    };
    CstPngTools.decode = function (data) {
        var entry = PngJob.create();
        var stream = new ByteUtils();
        stream.open(data);
        stream.skip(8);
        while (stream.bytesAvailable() > 0) {
            var chunkSize = stream.getUint32();
            var section = stream.getUTF(4);
            var handler = CstPngTools.p_setHands[section];
            if (handler != null) {
                handler(entry, stream, chunkSize);
            }
            else {
                stream.skip(chunkSize);
            }
            var crc = stream.getUint32();
        }
        stream.close();
        var pixels = CstPngTools.p_decodePix(entry);
        if (pixels == null) {
            return null;
        }
        var cursor = 0;
        var offset = 0;
        var width = entry.w;
        var height = entry.h;
        var buffer = new ArrayBuffer(width * height * CstPngTools.p_Pix(entry) + 8);
        var result = new Uint8Array(buffer, 8);
        var view = new DataView(buffer, 0, 8);
        view.setUint32(0, width);
        view.setUint32(4, height);
        switch (entry.colorT) {
            case 3: {
                CstPngTools.p_byPale(entry, pixels, result);
                break;
            }
            case 2: {
                switch (entry.bits) {
                    case 8: {
                        for (var y = 0; y < height; ++y) {
                            offset++;
                            for (var x = 0; x < width; ++x) {
                                result[cursor++] = pixels[offset++];
                                result[cursor++] = pixels[offset++];
                                result[cursor++] = pixels[offset++];
                            }
                        }
                        break;
                    }
                    case 16: {
                        for (var y = 0; y < height; ++y) {
                            offset++;
                            for (var x = 0; x < width; ++x) {
                                result[cursor++] = ((pixels[offset] << 8 | pixels[offset + 1]) / 65535) * 255;
                                offset += 2;
                                result[cursor++] = ((pixels[offset] << 8 | pixels[offset + 1]) / 65535) * 255;
                                offset += 2;
                                result[cursor++] = ((pixels[offset] << 8 | pixels[offset + 1]) / 65535) * 255;
                                offset += 2;
                            }
                        }
                        break;
                    }
                }
                break;
            }
            case 6: {
                switch (entry.bits) {
                    case 8: {
                        for (var y = 0; y < height; ++y) {
                            offset++;
                            for (var x = 0; x < width; ++x) {
                                result[cursor++] = pixels[offset++];
                                result[cursor++] = pixels[offset++];
                                result[cursor++] = pixels[offset++];
                                result[cursor++] = pixels[offset++];
                            }
                        }
                        break;
                    }
                    case 16: {
                        for (var y = 0; y < height; ++y) {
                            offset++;
                            for (var x = 0; x < width; ++x) {
                                result[cursor++] = ((pixels[offset] << 8 | pixels[offset + 1]) / 65535) * 255;
                                offset += 2;
                                result[cursor++] = ((pixels[offset] << 8 | pixels[offset + 1]) / 65535) * 255;
                                offset += 2;
                                result[cursor++] = ((pixels[offset] << 8 | pixels[offset + 1]) / 65535) * 255;
                                offset += 2;
                                result[cursor++] = ((pixels[offset] << 8 | pixels[offset + 1]) / 65535) * 255;
                                offset += 2;
                            }
                        }
                        break;
                    }
                }
                break;
            }
            default: {
                console.error("未支持的类型：", entry.colorT, entry.bits);
                break;
            }
        }
        PngJob.free(entry);
        return buffer;
    };
    CstPngTools.p_IHDR = function (entry, stream, chunkSize) {
        entry.w = stream.getUint32();
        entry.h = stream.getUint32();
        entry.bits = stream.getUint8();
        entry.colorT = stream.getUint8();
        entry.compressT = stream.getUint8();
        entry.filterT = stream.getUint8();
        entry.interT = stream.getUint8();
    };
    CstPngTools.p_PLTE = function (entry, stream, chunkSize) {
        entry.paleT = stream.getBytes(chunkSize);
    };
    CstPngTools.p_IDAT = function (entry, stream, chunkSize) {
        entry.segments.push(stream.getBytes(chunkSize));
    };
    CstPngTools.p_TRNS = function (entry, stream, chunkSize) {
        entry.transT = stream.getBytes(chunkSize);
    };
    CstPngTools.p_Pale = function (entry) {
        var palette = entry.paleT;
        var transparency = entry.transT;
        var length = palette.length;
        var result = new Uint8Array(length / 3 * 4);
        var offset = 0;
        var cursor = 0;
        var size = transparency.byteLength;
        var index = 0;
        while (offset < length) {
            result[cursor++] = palette[offset++];
            result[cursor++] = palette[offset++];
            result[cursor++] = palette[offset++];
            result[cursor++] = (index < size) ? transparency[index++] : 255;
        }
        return result;
    };
    ;
    CstPngTools.p_mergeSeg = function (segments) {
        var byteLength = 0;
        for (var _i = 0, segments_1 = segments; _i < segments_1.length; _i++) {
            var segment = segments_1[_i];
            byteLength += segment.byteLength;
        }
        var bytes = new Uint8Array(byteLength);
        var offset = 0;
        for (var _a = 0, segments_2 = segments; _a < segments_2.length; _a++) {
            var segment = segments_2[_a];
            bytes.set(segment, offset);
            offset += segment.length;
        }
        return new Zlib.Inflate(bytes).decompress();
    };
    CstPngTools.p_Pix = function (entry) {
        var channels = 3;
        if (entry.colorT & 4) {
            channels = 4;
        }
        if (entry.colorT == 3 && entry.transT) {
            channels = 4;
        }
        return channels;
    };
    CstPngTools.p_Bytes = function (entry) {
        var channels = 1;
        switch (entry.colorT) {
            case 2: {
                channels = 3;
                break;
            }
            case 4: {
                channels = 2;
                break;
            }
            case 6: {
                channels = 4;
                break;
            }
        }
        var bits = channels * entry.bits;
        return (bits + 7) >> 3;
    };
    CstPngTools.p_decodePix = function (entry) {
        if (entry.interT == 0) {
            return this.p_decodeInterT(entry);
        }
        return null;
    };
    CstPngTools.p_decodeInterT = function (entry) {
        var bytes = CstPngTools.p_mergeSeg(entry.segments);
        var length = bytes.byteLength;
        var height = entry.h;
        var pixelBytes = CstPngTools.p_Bytes(entry);
        var rowBytes = Math.floor((length - height) / height);
        var rowOffset = rowBytes + 1;
        var i = 0;
        var cursor = 0;
        var a = 0, b = 0, c = 0, p = 0, pa = 0, pb = 0, pc = 0, pr = 0;
        while (cursor < length) {
            switch (bytes[cursor++]) {
                case 0: {
                    cursor += rowBytes;
                    break;
                }
                case 1: {
                    cursor += pixelBytes;
                    for (i = pixelBytes; i < rowBytes; ++i, ++cursor) {
                        bytes[cursor] = (bytes[cursor] + bytes[cursor - pixelBytes]) % 256;
                    }
                    break;
                }
                case 2: {
                    if (cursor != 1) {
                        for (i = 0; i < rowBytes; ++i, ++cursor) {
                            bytes[cursor] = (bytes[cursor] + bytes[cursor - rowOffset]) % 256;
                        }
                    }
                    break;
                }
                case 3: {
                    if (cursor == 1) {
                        cursor += pixelBytes;
                        for (i = pixelBytes; i < rowBytes; ++i, ++cursor) {
                            bytes[cursor] = (bytes[cursor] + (bytes[cursor - pixelBytes] >> 1)) % 256;
                        }
                    }
                    else {
                        for (i = 0; i < pixelBytes; ++i, ++cursor) {
                            bytes[cursor] = (bytes[cursor] + (bytes[cursor - rowOffset] >> 1)) % 256;
                        }
                        for (i = pixelBytes; i < rowBytes; ++i, ++cursor) {
                            bytes[cursor] = (bytes[cursor] + ((bytes[cursor - pixelBytes] + bytes[cursor - rowOffset]) >> 1)) % 256;
                        }
                    }
                    break;
                }
                case 4: {
                    if (pixelBytes == 1) {
                        if (cursor == 1) {
                            a = bytes[cursor++];
                            for (i = 1; i < rowBytes; ++i, ++cursor) {
                                pr = (a > 0) ? a : 0;
                                a = bytes[cursor] = (bytes[cursor] + pr) % 256;
                            }
                        }
                        else {
                            b = bytes[cursor - rowOffset];
                            p = b;
                            pa = p;
                            if (pa < 0) {
                                pa = -pa;
                            }
                            pc = p;
                            if (pc < 0) {
                                pc = -pc;
                            }
                            pr = (p <= 0) ? 0 : ((0 <= pc) ? b : 0);
                            a = bytes[cursor] = bytes[cursor] + pr;
                            cursor++;
                            for (i = 1; i < rowBytes; ++i, ++cursor) {
                                b = bytes[cursor - rowOffset], c = bytes[cursor - rowOffset - 1];
                                p = a + b - c;
                                pa = p - a;
                                if (pa < 0) {
                                    pa = -pa;
                                }
                                pb = p - b;
                                if (pb < 0) {
                                    pb = -pb;
                                }
                                pc = p - c;
                                if (pc < 0) {
                                    pc = -pc;
                                }
                                pr = (pa <= pb && pa <= pc) ? a : ((pb <= pc) ? b : c);
                                a = bytes[cursor] = (bytes[cursor] + pr) % 256;
                            }
                        }
                    }
                    else {
                        if (cursor == 1) {
                            cursor += pixelBytes;
                            b = c = 0;
                            for (i = pixelBytes; i < rowBytes; ++i, ++cursor) {
                                a = bytes[cursor - pixelBytes];
                                p = a + b - c;
                                pa = p - a;
                                if (pa < 0) {
                                    pa = -pa;
                                }
                                pb = p - b;
                                if (pb < 0) {
                                    pb = -pb;
                                }
                                pc = p - c;
                                if (pc < 0) {
                                    pc = -pc;
                                }
                                pr = (pa <= pb && pa <= pc) ? a : ((pb <= pc) ? b : c);
                                bytes[cursor] = (bytes[cursor] + pr) % 256;
                            }
                        }
                        else {
                            for (i = 0; i < pixelBytes; ++i, ++cursor) {
                                a = 0, b = bytes[cursor - rowOffset], c = 0;
                                p = a + b - c;
                                pa = p - a;
                                if (pa < 0) {
                                    pa = -pa;
                                }
                                pb = p - b;
                                if (pb < 0) {
                                    pb = -pb;
                                }
                                pc = p - c;
                                if (pc < 0) {
                                    pc = -pc;
                                }
                                pr = (pa <= pb && pa <= pc) ? a : ((pb <= pc) ? b : c);
                                bytes[cursor] = (bytes[cursor] + pr) % 256;
                            }
                            for (i = pixelBytes; i < rowBytes; ++i, ++cursor) {
                                a = bytes[cursor - pixelBytes], b = bytes[cursor - rowOffset], c = bytes[cursor - rowOffset - pixelBytes];
                                p = a + b - c;
                                pa = p - a;
                                if (pa < 0) {
                                    pa = -pa;
                                }
                                pb = p - b;
                                if (pb < 0) {
                                    pb = -pb;
                                }
                                pc = p - c;
                                if (pc < 0) {
                                    pc = -pc;
                                }
                                pr = (pa <= pb && pa <= pc) ? a : ((pb <= pc) ? b : c);
                                bytes[cursor] = (bytes[cursor] + pr) % 256;
                            }
                        }
                    }
                    break;
                }
                default: {
                    console.log("\u89E3\u6790\u51FA\u9519\uFF1A" + entry.w + ", " + entry.h + ", " + pixelBytes);
                    console.log(bytes.byteLength);
                    break;
                }
            }
        }
        return bytes;
    };
    CstPngTools.p_byPale = function (entry, pixels, result) {
        var cursor = 0;
        var offset = 0;
        var width = entry.w;
        var height = entry.h;
        var palette = entry.paleT;
        if (entry.transT != null) {
            palette = CstPngTools.p_Pale(entry);
            switch (entry.bits) {
                case 1: {
                    for (var y = 0; y < height; ++y) {
                        offset++;
                        for (var x = 0; x < width; ++x) {
                            var index = (pixels[offset + (x >> 3)] & 0x01) * 4;
                            result[cursor++] = palette[index];
                            result[cursor++] = palette[index + 1];
                            result[cursor++] = palette[index + 2];
                            result[cursor++] = palette[index + 3];
                        }
                        offset += (width + 7) >> 3;
                    }
                    break;
                }
                case 2: {
                    for (var y = 0; y < height; ++y) {
                        offset++;
                        for (var x = 0; x < width; ++x) {
                            var index = (pixels[offset + (x >> 2)] & 0x03) * 4;
                            result[cursor++] = palette[index];
                            result[cursor++] = palette[index + 1];
                            result[cursor++] = palette[index + 2];
                            result[cursor++] = palette[index + 3];
                        }
                        offset += (width + 3) >> 2;
                    }
                    break;
                }
                case 4: {
                    for (var y = 0; y < height; ++y) {
                        offset++;
                        for (var x = 0; x < width; ++x) {
                            var index = (pixels[offset + (x >> 1)] & 0x0F) * 4;
                            result[cursor++] = palette[index];
                            result[cursor++] = palette[index + 1];
                            result[cursor++] = palette[index + 2];
                            result[cursor++] = palette[index + 3];
                        }
                        offset += (width + 1) >> 1;
                    }
                    break;
                }
                case 8: {
                    for (var y = 0; y < height; ++y) {
                        offset++;
                        for (var x = 0; x < width; ++x) {
                            var index = pixels[offset++] * 4;
                            result[cursor++] = palette[index];
                            result[cursor++] = palette[index + 1];
                            result[cursor++] = palette[index + 2];
                            result[cursor++] = palette[index + 3];
                        }
                    }
                    break;
                }
            }
        }
        else {
            switch (entry.bits) {
                case 1: {
                    for (var y = 0; y < height; ++y) {
                        offset++;
                        for (var x = 0; x < width; ++x) {
                            var index = (pixels[offset + (x >> 3)] & 0x01) * 3;
                            result[cursor++] = palette[index];
                            result[cursor++] = palette[index + 1];
                            result[cursor++] = palette[index + 2];
                        }
                        offset += (width + 7) >> 3;
                    }
                    break;
                }
                case 2: {
                    for (var y = 0; y < height; ++y) {
                        offset++;
                        for (var x = 0; x < width; ++x) {
                            var index = (pixels[offset + (x >> 2)] & 0x03) * 3;
                            result[cursor++] = palette[index];
                            result[cursor++] = palette[index + 1];
                            result[cursor++] = palette[index + 2];
                        }
                        offset += (width + 3) >> 2;
                    }
                    break;
                }
                case 4: {
                    for (var y = 0; y < height; ++y) {
                        offset++;
                        for (var x = 0; x < width; ++x) {
                            var index = (pixels[offset + (x >> 1)] & 0x0F) * 3;
                            result[cursor++] = palette[index];
                            result[cursor++] = palette[index + 1];
                            result[cursor++] = palette[index + 2];
                        }
                        offset += (width + 1) >> 1;
                    }
                    break;
                }
                case 8: {
                    for (var y = 0; y < height; ++y) {
                        offset++;
                        for (var x = 0; x < width; ++x) {
                            var index = pixels[offset++] * 3;
                            result[cursor++] = palette[index];
                            result[cursor++] = palette[index + 1];
                            result[cursor++] = palette[index + 2];
                        }
                    }
                    break;
                }
            }
        }
    };
    CstPngTools.p_setHands = {};
    return CstPngTools;
}());
var DecodeTools = window.DecodeTools = (function () {
    function DecodeTools() {
    }
    DecodeTools.init = function () {
        CstPngTools.init();
    };
    DecodeTools.decodeBuff = function (buffer, oldZip) {
        var data;
        if(oldZip){
            data = new Zlib.Inflate(new Uint8Array(buffer)).decompress();
        }else{
            let zip = new Zlib.Unzip(new Uint8Array(buffer));
            data = zip.decompress("res");
        }
        return data.buffer.slice(data.byteOffset, data.byteLength);
    };
    DecodeTools.decodeImage = function (stream, alphaChannel) {
        if (alphaChannel === void 0) { alphaChannel = null; }
        if (this.isPng(stream)) {
            return CstPngTools.decode(stream);
        }
        var p = new JpegImage();
        p.parse(stream);
        var w = p.width;
        var h = p.height;
        var needConvert = DecodeTools.p_needAlpha(w, h) || alphaChannel != null;
        var data = p.getData(w, h, true, needConvert, 8, alphaChannel);
        var view = new DataView(data.buffer);
        view.setUint32(0, w);
        view.setUint32(4, h);
        return data.buffer;
    };
    DecodeTools.p_needAlpha = function (w, h) {
        if (w % 2 != 0 || h % 2 != 0) {
            return true;
        }
        if (w == 290 && h == 340) {
            return true;
        }
        if (w == 586 && h == 530) {
            return true;
        }
        if (w == 602 && h == 302) {
            return true;
        }
        if (w == 638 && h == 466) {
            return true;
        }
        return false;
    };
    DecodeTools.isPng = function (buffer) {
        var header = DecodeTools.PngHeader;
        for (var i = 0; i < 8; ++i) {
            if (buffer[i] != header[i]) {
                return false;
            }
        }
        return true;
    };
    DecodeTools.PngHeader = new Uint8Array([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]);
    return DecodeTools;
}());



window.Number.isSafeInteger = Number.isSafeInteger || function (value) {
    return (typeof value === 'number' &&
        (Math.round(value) === value || value === -9007199254740991 || value === 9007199254740991) &&
        -9007199254740991 <= value &&
        value <= 9007199254740991);
};
var fillFun = function (value, start, end) {
    start = start || 0;
    end = end || this.length;
    if (start < 0) {
        start = this.length + start;
    }
    if (end < 0) {
        end = this.length + end;
    }
    if (start >= this.length) {
        return;
    }
    if (end > this.length) {
        end = this.length;
    }
    while (start < end) {
        this[start++] = value;
    }
    return this;
};
var types = [Uint8Array, Uint16Array, Uint32Array, Uint8ClampedArray, Int8Array, Int16Array, Int32Array, Float32Array, Float64Array];
for (var _i = 0, types_1 = types; _i < types_1.length; _i++) {
    var t = types_1[_i];
    if (!t.prototype.fill) {
        t.prototype.fill = fillFun;
    }
}