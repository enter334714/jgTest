"use strict";
(function () {
    'use strict';
    function l(a) {
        throw a;
    }
    var r = void 0, t, aa = this;
    function v(a, b) {
        var c = a.split("."), d = aa;
        !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
        for (var f; c.length && (f = c.shift());)
            !c.length && b !== r ? d[f] = b : d = d[f] ? d[f] : d[f] = {};
    }
    ;
    var y = "undefined" !== typeof Uint8Array && "undefined" !== typeof Uint16Array && "undefined" !== typeof Uint32Array && "undefined" !== typeof DataView;
    new (y ? Uint8Array : Array)(256);
    var z;
    for (z = 0; 256 > z; ++z)
        for (var B = z, ba = 7, B = B >>> 1; B; B >>>= 1)
            --ba;
    var ca = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759,
        2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977,
        2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755,
        2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956,
        3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270,
        936918E3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117], C = y ? new Uint32Array(ca) : ca;
    if (aa.Uint8Array !== r)
        try {
            eval("String.fromCharCode.apply(null, new Uint8Array([0]));");
        }
        catch (ea) {
            String.fromCharCode.apply = function (a) {
                return function (b, c) {
                    return a.call(String.fromCharCode, b, Array.prototype.slice.call(c));
                };
            }(String.fromCharCode.apply);
        }
    ;
    function D(a) {
        var b = a.length, c = 0, d = Number.POSITIVE_INFINITY, f, h, k, e, g, m, p, s, q, x;
        for (s = 0; s < b; ++s)
            a[s] > c && (c = a[s]), a[s] < d && (d = a[s]);
        f = 1 << c;
        h = new (y ? Uint32Array : Array)(f);
        k = 1;
        e = 0;
        for (g = 2; k <= c;) {
            for (s = 0; s < b; ++s)
                if (a[s] === k) {
                    m = 0;
                    p = e;
                    for (q = 0; q < k; ++q)
                        m = m << 1 | p & 1, p >>= 1;
                    x = k << 16 | s;
                    for (q = m; q < f; q += g)
                        h[q] = x;
                    ++e;
                }
            ++k;
            e <<= 1;
            g <<= 1;
        }
        return [h, c, d];
    }
    ;
    var F = [], G;
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
                l("invalid literal: " + G);
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
                    l("invalid length: " + a);
            }
        }
        var b = [], c, d;
        for (c = 3; 258 >= c; c++)
            d = a(c), b[c] = d[2] << 24 | d[1] <<
                16 | d[0];
        return b;
    }();
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
                this.b = new (y ? Uint8Array : Array)(32768 + this.m + 258);
                break;
            case J:
                this.a = 0;
                this.b = new (y ? Uint8Array : Array)(this.m);
                this.e = this.W;
                this.B = this.R;
                this.q = this.V;
                break;
            default:
                l(Error("invalid inflate mode"));
        }
    }
    var ga = 0, J = 1;
    I.prototype.r = function () {
        for (; !this.u;) {
            var a = K(this, 3);
            a & 1 && (this.u = !0);
            a >>>= 1;
            switch (a) {
                case 0:
                    var b = this.input, c = this.c, d = this.b, f = this.a, h = b.length, k = r, e = r, g = d.length, m = r;
                    this.d = this.f = 0;
                    c + 1 >= h && l(Error("invalid uncompressed block header: LEN"));
                    k = b[c++] | b[c++] << 8;
                    c + 1 >= h && l(Error("invalid uncompressed block header: NLEN"));
                    e = b[c++] | b[c++] << 8;
                    k === ~e && l(Error("invalid uncompressed block header: length verify"));
                    c + k > b.length && l(Error("input buffer is broken"));
                    switch (this.n) {
                        case ga:
                            for (; f + k > d.length;) {
                                m =
                                    g - f;
                                k -= m;
                                if (y)
                                    d.set(b.subarray(c, c + m), f), f += m, c += m;
                                else
                                    for (; m--;)
                                        d[f++] = b[c++];
                                this.a = f;
                                d = this.e();
                                f = this.a;
                            }
                            break;
                        case J:
                            for (; f + k > d.length;)
                                d = this.e({
                                    H: 2
                                });
                            break;
                        default:
                            l(Error("invalid inflate mode"));
                    }
                    if (y)
                        d.set(b.subarray(c, c + k), f), f += k, c += k;
                    else
                        for (; k--;)
                            d[f++] = b[c++];
                    this.c = c;
                    this.a = f;
                    this.b = d;
                    break;
                case 1:
                    this.q(ha, ia);
                    break;
                case 2:
                    for (var p = K(this, 5) + 257, s = K(this, 5) + 1, q = K(this, 4) + 4, x = new (y ? Uint8Array : Array)(L.length), u = r, n = r, E = r, A = r, X = r, O = r, H = r, w = r, da = r, w = 0; w < q; ++w)
                        x[L[w]] = K(this, 3);
                    if (!y) {
                        w =
                            q;
                        for (q = x.length; w < q; ++w)
                            x[L[w]] = 0;
                    }
                    u = D(x);
                    A = new (y ? Uint8Array : Array)(p + s);
                    w = 0;
                    for (da = p + s; w < da;)
                        switch (X = M(this, u), X) {
                            case 16:
                                for (H = 3 + K(this, 2); H--;)
                                    A[w++] = O;
                                break;
                            case 17:
                                for (H = 3 + K(this, 3); H--;)
                                    A[w++] = 0;
                                O = 0;
                                break;
                            case 18:
                                for (H = 11 + K(this, 7); H--;)
                                    A[w++] = 0;
                                O = 0;
                                break;
                            default:
                                O = A[w++] = X;
                        }
                    n = y ? D(A.subarray(0, p)) : D(A.slice(0, p));
                    E = y ? D(A.subarray(p)) : D(A.slice(p));
                    this.q(n, E);
                    break;
                default:
                    l(Error("unknown BTYPE: " + a));
            }
        }
        return this.B();
    };
    var ja = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], L = y ? new Uint16Array(ja) : ja, ka = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 258, 258], la = y ? new Uint16Array(ka) : ka, ma = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0], N = y ? new Uint8Array(ma) : ma, na = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577], oa = y ? new Uint16Array(na) : na, pa = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
        11, 11, 12, 12, 13, 13], P = y ? new Uint8Array(pa) : pa, Q = new (y ? Uint8Array : Array)(288), R, qa;
    R = 0;
    for (qa = Q.length; R < qa; ++R)
        Q[R] = 143 >= R ? 8 : 255 >= R ? 9 : 279 >= R ? 7 : 8;
    var ha = D(Q), S = new (y ? Uint8Array : Array)(30), T, ra;
    T = 0;
    for (ra = S.length; T < ra; ++T)
        S[T] = 5;
    var ia = D(S);
    function K(a, b) {
        for (var c = a.f, d = a.d, f = a.input, h = a.c, k = f.length, e; d < b;)
            h >= k && l(Error("input buffer is broken")), c |= f[h++] << d, d += 8;
        e = c & (1 << b) - 1;
        a.f = c >>> b;
        a.d = d - b;
        a.c = h;
        return e;
    }
    function M(a, b) {
        for (var c = a.f, d = a.d, f = a.input, h = a.c, k = f.length, e = b[0], g = b[1], m, p; d < g && !(h >= k);)
            c |= f[h++] << d, d += 8;
        m = e[c & (1 << g) - 1];
        p = m >>> 16;
        p > d && l(Error("invalid code length: " + p));
        a.f = c >> p;
        a.d = d - p;
        a.c = h;
        return m & 65535;
    }
    t = I.prototype;
    t.q = function (a, b) {
        var c = this.b, d = this.a;
        this.C = a;
        for (var f = c.length - 258, h, k, e, g; 256 !== (h = M(this, a));)
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
                for (; g--;)
                    c[d] = c[d++ - e];
            }
        for (; 8 <= this.d;)
            this.d -= 8, this.c--;
        this.a = d;
    };
    t.V = function (a, b) {
        var c = this.b, d = this.a;
        this.C = a;
        for (var f = c.length, h, k, e, g; 256 !== (h = M(this, a));)
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
                for (; g--;)
                    c[d] = c[d++ - e];
            }
        for (; 8 <= this.d;)
            this.d -= 8, this.c--;
        this.a = d;
    };
    t.e = function () {
        var a = new (y ? Uint8Array : Array)(this.a - 32768), b = this.a - 32768, c, d, f = this.b;
        if (y)
            a.set(f.subarray(32768, a.length));
        else {
            c = 0;
            for (d = a.length; c < d; ++c)
                a[c] = f[c + 32768];
        }
        this.l.push(a);
        this.t += a.length;
        if (y)
            f.set(f.subarray(b, b + 32768));
        else
            for (c = 0; 32768 > c; ++c)
                f[c] = f[b + c];
        this.a = 32768;
        return f;
    };
    t.W = function (a) {
        var b, c = this.input.length / this.c + 1 | 0, d, f, h, k = this.input, e = this.b;
        a && ("number" === typeof a.H && (c = a.H), "number" === typeof a.P && (c += a.P));
        2 > c ? (d = (k.length - this.c) / this.C[2], h = 258 * (d / 2) | 0, f = h < e.length ? e.length + h : e.length << 1) : f = e.length * c;
        y ? (b = new Uint8Array(f), b.set(e)) : b = e;
        return this.b = b;
    };
    t.B = function () {
        var a = 0, b = this.b, c = this.l, d, f = new (y ? Uint8Array : Array)(this.t + (this.a - 32768)), h, k, e, g;
        if (0 === c.length)
            return y ? this.b.subarray(32768, this.a) : this.b.slice(32768, this.a);
        h = 0;
        for (k = c.length; h < k; ++h) {
            d = c[h];
            e = 0;
            for (g = d.length; e < g; ++e)
                f[a++] = d[e];
        }
        h = 32768;
        for (k = this.a; h < k; ++h)
            f[a++] = b[h];
        this.l = [];
        return this.buffer = f;
    };
    t.R = function () {
        var a, b = this.a;
        y ? this.K ? (a = new Uint8Array(b), a.set(this.b.subarray(0, b))) : a = this.b.subarray(0, b) : (this.b.length > b && (this.b.length = b), a = this.b);
        return this.buffer = a;
    };
    function U(a) {
        a = a || {};
        this.files = [];
        this.v = a.comment;
    }
    U.prototype.L = function (a) {
        this.j = a;
    };
    U.prototype.s = function (a) {
        var b = a[2] & 65535 | 2;
        return b * (b ^ 1) >> 8 & 255;
    };
    U.prototype.k = function (a, b) {
        a[0] = (C[(a[0] ^ b) & 255] ^ a[0] >>> 8) >>> 0;
        a[1] = (6681 * (20173 * (a[1] + (a[0] & 255)) >>> 0) >>> 0) + 1 >>> 0;
        a[2] = (C[(a[2] ^ a[1] >>> 24) & 255] ^ a[2] >>> 8) >>> 0;
    };
    U.prototype.T = function (a) {
        var b = [305419896, 591751049, 878082192], c, d;
        y && (b = new Uint32Array(b));
        c = 0;
        for (d = a.length; c < d; ++c)
            this.k(b, a[c] & 255);
        return b;
    };
    function V(a, b) {
        b = b || {};
        this.input = y && a instanceof Array ? new Uint8Array(a) : a;
        this.c = 0;
        this.ba = b.verify || !1;
        this.j = b.password;
    }
    var sa = {
        O: 0,
        M: 8
    }, W = [80, 75, 1, 2], Y = [80, 75, 3, 4], Z = [80, 75, 5, 6];
    function ta(a, b) {
        this.input = a;
        this.offset = b;
    }
    ta.prototype.parse = function () {
        var a = this.input, b = this.offset;
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
        this.length = b - this.offset;
    };
    function ua(a, b) {
        this.input = a;
        this.offset = b;
    }
    var va = {
        N: 1,
        ca: 8,
        da: 2048
    };
    ua.prototype.parse = function () {
        var a = this.input, b = this.offset;
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
        this.length = b - this.offset;
    };
    function $(a) {
        var b = [], c = {}, d, f, h, k;
        if (!a.i) {
            if (a.o === r) {
                var e = a.input, g;
                if (!a.D)
                    a: {
                        var m = a.input, p;
                        for (p = m.length - 12; 0 < p; --p)
                            if (m[p] === Z[0] && m[p + 1] === Z[1] && m[p + 2] === Z[2] && m[p + 3] === Z[3]) {
                                a.D = p;
                                break a;
                            }
                        l(Error("End of Central Directory Record not found"));
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
                a.v = y ? e.subarray(g, g + a.w) : e.slice(g, g + a.w);
            }
            d = a.o;
            h = 0;
            for (k = a.aa; h < k; ++h)
                f = new ta(a.input, d), f.parse(), d += f.length, b[h] = f, c[f.filename] = h;
            a.Q < d - a.o && l(Error("invalid file header size"));
            a.i = b;
            a.G = c;
        }
    }
    t = V.prototype;
    t.Y = function () {
        var a = [], b, c, d;
        this.i || $(this);
        d = this.i;
        b = 0;
        for (c = d.length; b < c; ++b)
            a[b] = d[b].filename;
        return a;
    };
    t.r = function (a, b) {
        var c;
        this.G || $(this);
        c = this.G[a];
        c === r && l(Error(a + " not found"));
        var d;
        d = b || {};
        var f = this.input, h = this.i, k, e, g, m, p, s, q, x;
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
                f[q] = wa(this, s, f[q]);
        }
        switch (k.A) {
            case sa.O:
                m = y ? this.input.subarray(e, e + g) : this.input.slice(e, e + g);
                break;
            case sa.M:
                m = (new I(this.input, {
                    index: e,
                    bufferSize: k.J
                })).r();
                break;
            default:
                l(Error("unknown compression type"));
        }
        if (this.ba) {
            var u = r, n, E = "number" === typeof u ? u : u = 0, A = m.length;
            n = -1;
            for (E = A & 7; E--; ++u)
                n = n >>> 8 ^ C[(n ^ m[u]) & 255];
            for (E = A >> 3; E--; u += 8)
                n = n >>> 8 ^ C[(n ^ m[u]) & 255], n = n >>> 8 ^ C[(n ^ m[u + 1]) & 255], n = n >>> 8 ^ C[(n ^ m[u + 2]) & 255], n = n >>> 8 ^ C[(n ^ m[u + 3]) & 255], n = n >>> 8 ^ C[(n ^ m[u + 4]) & 255], n = n >>> 8 ^ C[(n ^ m[u + 5]) & 255], n = n >>> 8 ^ C[(n ^ m[u + 6]) & 255], n = n >>> 8 ^ C[(n ^ m[u + 7]) & 255];
            p = (n ^ 4294967295) >>> 0;
            k.p !== p && l(Error("wrong crc: file=0x" +
                k.p.toString(16) + ", data=0x" + p.toString(16)));
        }
        return m;
    };
    t.L = function (a) {
        this.j = a;
    };
    function wa(a, b, c) {
        c ^= a.s(b);
        a.k(b, c);
        return c;
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
        module.exports = factory();
    else if (typeof define === 'function' && define.amd)
        define([], factory);
    else if (typeof exports === 'object')
        exports["msgpack"] = factory();
    else
        root["msgpack"] = factory();
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
var watPanel = {
    p_bg: null,
    p_progressBg1: null,
    p_progressBar1: null,
    p_progressBar2: null,
    p_progressImg1: null,
    p_progressLabel1: null,
    p_progressLabel2: null,
    p_pointArr: new Array(),
    p_loadPer: 0,
    p_updateID: 0,
    p_viewType: PF_INFO.game_view_type_pkg ? PF_INFO.game_view_type_pkg : 0,
    pointBgColor: PF_INFO.game_view_type_pkg ? "#246da7" : "#f7d9e4",
    p_isShowIdent: PF_INFO.identification_show_pkg != 0,
    p_getElement: function (tagName, style, id) {
        var e = document.createElement(tagName);
        if (id)
            e.id = id;
        e.style.cssText = style;
        return e;
    },
    p_getImgElement: function (src, style, id) {
        var e = this.p_getElement("img", style, id);
        if (src) {
            var v = configs[src];
            var idx = src.lastIndexOf(".");
            var url = "" + PF_INFO.cdn + src + "?v=" + configs["lastVersion"];
            if (!DEBUG && v && idx != -1) {
                url = PF_INFO.cdn + "versions/" + src.slice(0, idx) + "__" + v + src.slice(idx, src.length);
            }
            e.src = url;
        }
        return e;
    },
    p_addTouchmove: function () {
        function touchMoveHandler(e) {
            e.preventDefault();
        }
        document.body.addEventListener("touchmove", touchMoveHandler, { passive: false });
    },
    preload: function () {
        var panel = document.getElementById("watPanel");
        if (!panel) {
            var _self = this;
            var _url = "loading_" + _self.p_viewType + "/";
            panel = _self.p_getElement("div", "position:absolute;height:1280px;width:720px;visibility:hidden", "watPanel");
            _self.p_bg = _self.p_getImgElement(_url + "image_loading_bg.jpg", "position: absolute;left:0px;top:0px;");
            panel.appendChild(_self.p_bg);
            document.body.appendChild(panel);
        }
    },
    openPanel: function () {
        var _self = this;
        var _url = "loading_" + _self.p_viewType + "/";
        document.body.style.cssText = "position:fixed;margin:0;overflow:hidden;overflow-x:hidden;overflow-y:hidden;";
        var panel = document.getElementById("watPanel");
        if (!panel) {
            panel = _self.p_getElement("div", "position:absolute;height:1280px;width:720px;visibility:visible", "watPanel");
            _self.p_bg = _self.p_getImgElement(_url + "image_loading_bg.jpg", "position: absolute;left:0px;top:0px;");
            panel.appendChild(_self.p_bg);
            document.body.appendChild(panel);
        }
        else {
            panel.style.cssText = "position:absolute;height:1280px;width:720px;visibility:visible";
        }
        if (PF_INFO.showLogo) {
            var bgLeftTop = _self.p_getImgElement(_url + "image_login_logo.png", "position: absolute;left:13px;top:10px;");
            panel.appendChild(bgLeftTop);
        }
        if (_self.p_isShowIdent) {
            if (!PF_INFO.shenPiImg) {
                var shenPiImg = _self.p_getImgElement(_url + "image_denglu_txtshenpi.png", "position:absolute;left:28px;bottom:17px;", "shenPiImg");
                panel.appendChild(shenPiImg);
            }
            else {
                panel.appendChild(PF_INFO.shenPiImg);
            }
        }
        if (PF_INFO.selectedServer && PF_INFO.selectedServer.server_options.ios_server_review != 1) {
            var libsVersion = versions["assets/libs.mpack"];
            var mainVersion = versions["assets/scripts.mpack"];
            var lastVersion = versions["lastVersion"];
            var versionLabel = _self.p_getElement("label", "position:absolute;right:10px;top:20px;text-align:right;color:#dfebff;font-size:17px;text-shadow:-1px 0 #20385f, 0 -1px #20385f, 1px 0 #20385f, 0 1px #20385f", "versionLabel");
            versionLabel.innerText = "版本号: " + libsVersion + "." + mainVersion + "." + lastVersion;
            document.body.appendChild(versionLabel);
            PF_INFO.versionLabel = versionLabel;
        }
        var div = _self.p_getElement("div", "position:absolute;width:720px;heigh:100px;bottom:240px;");
        panel.appendChild(div);
        _self.p_progressBg1 = div.appendChild(_self.p_getImgElement(_url + "image_loding_bar0.png", "position:absolute;left:60px;top:-30px;width:596px;height:27px;", "progressBg1"));
        _self.p_progressBar1 = div.appendChild(_self.p_getImgElement(_url + "image_loding_bar1.png", "position:absolute;left:63px;top:-27px;width:590px;height:21px;", "progressBar1"));
        _self.p_progressImg1 = div.appendChild(_self.p_getImgElement(_url + "image_loding_bar2.png", "position:absolute;left:162px;top:-22px;width:208px;height:11px;", "progressImg1"));
        _self.p_progressBar2 = div.appendChild(_self.p_getImgElement(_url + "image_loding_bar3.png", "position:absolute;left:25px;top:-70px;width:39px;height:116px;", "progressBar2"));
        var barTxtSize = 24;
        var barTipsSize = 20;
        var barTipsColor;
        if (_self.p_viewType == 0) {
            barTipsColor = "#f2ffb5";
        }
        else if (_self.p_viewType == 1) {
            barTipsColor = "#7c51ae";
        }
        else {
            barTipsColor = "#000000";
        }
        _self.p_progressLabel1 = div.appendChild(_self.p_getElement("label", "position:absolute;left:10px;top:-32px;width:700px;text-align:center;color:#FFFFFF;font-size:" + barTxtSize + "px;text-shadow: 0 1px 3px #391b34, 1px 0 3px #391b34, -1px 0 3px #391b34, 0 -1px 3px #391b34", "progressLabel1"));
        _self.p_progressLabel2 = div.appendChild(_self.p_getElement("label", "position:absolute;left:10px;top:70px;width:700px;text-align:center;color:" + barTipsColor + ";font-size:" + barTipsSize + "px;", "progressLabel2"));
        var pointStyle = {
            0: ["position:absolute;left:310px;top:30px;width:13px;height:13px;background-color:#246da7;border-radius:50%;", "point0"],
            1: ["position:absolute;left:340px;top:30px;width:13px;height:13px;background-color:#246da7;border-radius:50%;", "point1"],
            2: ["position:absolute;left:370px;top:30px;width:13px;height:13px;background-color:#246da7;border-radius:50%;", "point2"],
            3: ["position:absolute;left:400px;top:30px;width:13px;height:13px;background-color:#246da7;border-radius:50%;", "point2"],
        };
        for (var i = 0, length_3 = 4; i < length_3; ++i) {
            var point_style = (i === 0 ? pointStyle[0] : i === 1 ? pointStyle[1] : i === 2 ? pointStyle[2] : pointStyle[3]);
            var divPoint = _self.p_getElement("div", point_style[0], point_style[1]);
            div.appendChild(divPoint);
            _self.p_pointArr.push(divPoint);
        }
        var load_topBottomImg = false;
        var load_leftRightImg = false;
        function onResize() {
            var initW = window.innerWidth || document.body.clientWidth;
            var initH = window.innerHeight || document.body.clientHeight;
            if (initW > screen.availWidth) {
                initW = screen.availWidth;
            }
            var zoomW = initW / 720;
            var zoomH = initH / 1280;
            panel.style.webkitTransform = "scale(" + (zoomW < zoomH ? zoomW : zoomH) + ")";
            panel.style.left = (initW - 720) * 0.5 + "px";
            panel.style.top = (initH - 1280) * 0.5 + "px";
            if (!load_leftRightImg && zoomW > zoomH) {
                load_leftRightImg = true;
                var leftImg = _self.p_getImgElement(_url + "image_loading_bg_left.jpg", "position: absolute;right:719px;top:0px;");
                panel.appendChild(leftImg);
                var rightImg = _self.p_getImgElement(_url + "image_loading_bg_right.jpg", "position: absolute;left:719px;top:0px;");
                panel.appendChild(rightImg);
            }
            else if (!load_topBottomImg && zoomW < zoomH) {
                load_topBottomImg = true;
                var topImg = _self.p_getImgElement(_url + "image_loading_bg_top.jpg", "position: absolute;left:0px;bottom:1279px;");
                panel.appendChild(topImg);
                var bottomImg = _self.p_getImgElement(_url + "image_loading_bg_bottom.jpg", "position: absolute;left:0px;top:1279px;");
                panel.appendChild(bottomImg);
            }
        }
        window.addEventListener("resize", onResize);
        onResize();
    },
    closePanel: function () {
        var div = document.getElementById("watPanel");
        if (div) {
            document.body.removeChild(div);
        }
        if (PF_INFO.versionLabel) {
            document.body.removeChild(PF_INFO.versionLabel);
            PF_INFO.versionLabel = null;
        }
    },
};
var watStart = {
    p_step: 0,
    p_start: 0,
    p_worker: "",
    p_scriptCount: 0,
    p_scriptArray: new Array(),
    p_libs: null,
    p_main: null,
    p_isLoadJS: true,
    p_isLoadedMain: false,
    p_createScriptElement: function (url, onComplete) {
        var script = window.document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.onload = onComplete.bind(this);
        document.body.appendChild(script);
    },
    p_createScriptBlob: function (content, onComplete) {
        var _this = this;
        var url = URL.createObjectURL(new Blob([content]));
        this.p_createScriptElement(url, function (e) {
            URL.revokeObjectURL(url);
            onComplete.call(_this, e);
        });
        return url;
    },
    p_openRequest: function (url, type, onComplete) {
        var _this = this;
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState != 4) {
                return;
            }
            if (request.status == 200 || (request.status == 0 && request.response != null && request.response.byteLength > 0)) {
                onComplete.call(_this, request);
            }
            else {
                onComplete.call(_this, request);
            }
        };
        request.open("GET", url);
        request.responseType = type;
        request.send();
        return request;
    },
    p_loadAsset: function (asset, onComplete) {
        var _this = this;
        if (asset == null) {
            onComplete.call(this, asset);
        }
        else {
            this.p_openRequest(asset.url, asset.type == "js" ? "text" : "arraybuffer", function (request) {
                asset.status = 2;
                asset.request = request;
                onComplete.call(_this, asset);
            });
        }
    },
    p_loadMainBack: function () {
        this.p_step = 3;
        DEBUG && console.log("引导加载完成......", Date.now() - this.p_start, Date.now());
        onRoleRecordStep(2, 0);
        toProgress(0.8, "初始化引擎...", 1);
        var platData = {};
        for (var key in PF_INFO) {
            platData[key] = PF_INFO[key];
        }
        if (PF_CONFIG) {
            for (var key in PF_CONFIG) {
                platData[key] = PF_CONFIG[key];
            }
        }
        var worker = this.p_worker;
        var lastVersion = versions["lastVersion"] || configs["lastVersion"] || 0;
        setTimeout(function () {
            var _main = new Main(platData, lastVersion, worker);
            PF_INFO.gameAlert = _main.gameAlert;
        }, 0);
    },
    p_loadMain: function () {
        if (this.p_step == 2) {
            toProgress(0.5, "载入主程序...", 1);
            if (this.p_main != null) {
                if (this.p_main.status == 2 && !this.p_isLoadedMain) {
                    this.p_isLoadedMain = true;
                    var request = this.p_main.request;
                    var zip = new Zlib.Unzip(new Uint8Array(request.response));
                    var content_1 = zip.decompress("res");
                    var self_1 = this;
                    setTimeout(function () {
                        var scripts = msgpack.decode(content_1);
                        if (scripts.length < 2) {
                            throw new Error("scripts.mpack length error");
                        }
                        self_1.p_worker = URL.createObjectURL(new Blob([scripts.pop()]));
                        PF_INFO.js_worker = self_1.p_worker;
                        var mainJsURl = self_1.p_createScriptBlob(scripts.pop(), self_1.p_loadMainBack);
                        PF_INFO.js_main = mainJsURl;
                    }, 50);
                }
            }
            else if (this.p_isLoadJS) {
                this.p_loadMainBack();
            }
        }
    },
    p_loadLibs: function () {
        if (this.p_step == 1) {
            toProgress(0, "载入工具库...", 1);
            if (this.p_libs != null) {
                if (this.p_libs.status == 2) {
                    this.p_loadAsset(this.p_main, this.p_loadMain);
                    var request = this.p_libs.request;
                    var zip = new Zlib.Unzip(new Uint8Array(request.response));
                    var content = zip.decompress("res");
                    if (content.length <= 0) {
                        throw new Error("libs.mpack length error");
                    }
                    var scripts = msgpack.decode(content);
                    this.p_step = 2;
                    var libsJsUrl = this.p_createScriptBlob(scripts, this.p_loadMain);
                    PF_INFO.js_libs = libsJsUrl;
                }
            }
            else {
                this.p_step = 2;
                this.p_loadAsset(this.p_main, this.p_loadMain);
            }
        }
    },
    p_loadScriptArray: function () {
        if (this.p_scriptArray.length != 0) {
            var asset = this.p_scriptArray.shift();
            toProgress(this.p_scriptCount ? (this.p_scriptCount - this.p_scriptArray.length) / this.p_scriptCount : 1, "加载:" + asset.url, 1);
            this.p_createScriptElement(asset.url, this.p_loadScriptArray);
        }
        else {
            this.p_step = 1;
            this.p_loadLibs();
        }
    },
    p_init: function () {
        this.p_start = Date.now();
        var host = PF_INFO.cdn;
        if (host != "" && host[host.length - 1] != "/") {
            host += "/";
        }
        PF_INFO.cdn = host;
        console.log("wat_js init URL_HOST:", host);
        onRoleRecordStep(1, 0);
        var nowVersion = PF_INFO.tick;
        function buildAsset(name, extName, type) {
            var v = configs[name + extName] || versions[name + extName];
            var vUrl;
            if (type == "js") {
                vUrl = "" + host + name + extName + "?" + nowVersion;
            }
            else if (v) {
                vUrl = host + "versions/" + name + "__" + v + extName;
            }
            else {
                vUrl = "" + host + name + extName + "?v=" + nowVersion;
            }
            return {
                url: vUrl,
                type: type,
                desc: "",
                status: 0
            };
        }
        if (DEBUG) {
            var libs = ["core", "webgl", "html", "ui", "d3", "ani", "debugtool"];
            for (var _i = 0, libs_1 = libs; _i < libs_1.length; _i++) {
                var name_1 = libs_1[_i];
                this.p_scriptArray.push(buildAsset("libs/laya." + name_1, ".js", "js"));
            }
            this.p_scriptArray.push(buildAsset("libs/protobuf", ".js", "js"));
            this.p_scriptArray.push(buildAsset("js/main", ".js", "js"));
        }
        else {
            this.p_libs = buildAsset("assets/libs", ".mpack", "binary");
            this.p_main = buildAsset("assets/scripts", ".mpack", "binary");
        }
        this.p_scriptCount = this.p_scriptArray.length;
        toAllProgress(-1);
        toProgress(0, "加载引擎库...", 1);
        this.p_loadScriptArray();
        this.p_loadAsset(this.p_libs, this.p_loadLibs);
    }
};
window.Number.isSafeInteger = Number.isSafeInteger || function (value) {
    return (typeof value === 'number' &&
        (Math.round(value) === value || value === -9007199254740991 || value === 9007199254740991) &&
        -9007199254740991 <= value &&
        value <= 9007199254740991);
};
window.onerror = function (event, source, lineno, colno, error) {
    if (error) {
        var message = JSON.stringify({
            'user': PF_INFO.account,
            'time': 1000,
            'error': event,
            'stack': error.stack || error,
        });
        reqRecordError(message);
    }
    alert(event);
    if (!DEBUG) {
        window.location.reload(true);
    }
};
function toProgress(perValue, str, currTaskIndex) {
    if (perValue > 1)
        perValue = 1;
    var pro = perValue * 590;
    var loading = watPanel;
    loading.p_loadPer = loading.p_loadPer > perValue ? loading.p_loadPer : perValue;
    loading.p_progressBar1.style.width = pro + "px";
    var cur = loading.p_progressBar1.offsetLeft + pro;
    loading.p_progressBar2.style.left = cur - 15 + "px";
    if (cur >= 162 + 202) {
        loading.p_progressImg1.style.display = "inline";
        loading.p_progressImg1.style.left = cur - 202 + "px";
    }
    else {
        loading.p_progressImg1.style.display = "none";
    }
    loading.p_progressLabel1.innerText = (perValue * 100 >> 0) + "%";
    loading.p_progressLabel2.innerText = str;
    var currPage = currTaskIndex - 1;
    for (var i = 0; i < loading.p_pointArr.length; i++) {
        loading.p_pointArr[i].style.backgroundColor = currPage > i ? "#e49971" : currPage === i ? "#fae2b9" : loading.pointBgColor;
        if (currPage === i) {
            loading.p_pointArr[i].style.width = loading.p_pointArr[i].style.height = "17px";
            loading.p_pointArr[i].style.left = 310 + 30 * i - 2 + "px";
            loading.p_pointArr[i].style.top = 30 - 2 + "px";
        }
        else {
            loading.p_pointArr[i].style.width = loading.p_pointArr[i].style.height = "13px";
            loading.p_pointArr[i].style.left = 310 + 30 * i + "px";
            loading.p_pointArr[i].style.top = 30 + "px";
        }
    }
}
;
function toAllProgress(time) {
    var loading = watPanel;
    if (time === -1) {
        window.cancelAnimationFrame(loading.p_updateID);
        loading.p_loadPer = 0;
        loading.p_updateID = window.requestAnimationFrame(toAllProgress);
        return;
    }
    else if (time === -2) {
        window.cancelAnimationFrame(loading.p_updateID);
        return;
    }
    if (loading.p_loadPer < 0.9) {
        loading.p_loadPer += (Math.random() * 0.15 + 0.01) / (Math.random() * 100 + 50);
    }
    else if (loading.p_loadPer < 1) {
        loading.p_loadPer += 0.01 / 100;
    }
    if (loading.p_loadPer > 0.9999) {
        loading.p_loadPer = 0.9999;
        window.cancelAnimationFrame(loading.p_updateID);
        loading.p_updateID = setTimeout(function () {
            if (loading.p_loadPer > 0.9)
                toAllProgress(-1);
        }, 3000);
    }
    var perValue = loading.p_loadPer * 590;
    loading.p_progressBar1.style.width = perValue + 'px';
    var cur = loading.p_progressBar1.offsetLeft + perValue;
    loading.p_progressBar2.style.left = cur - 15 + "px";
    if (cur >= 162 + 202) {
        loading.p_progressImg1.style.display = "inline";
        loading.p_progressImg1.style.left = cur - 202 + "px";
    }
    else {
        loading.p_progressImg1.style.display = "none";
    }
    loading.p_progressLabel1.innerText = (loading.p_loadPer * 100).toFixed(2) + "%";
    if (loading.p_loadPer < 0.9999) {
        loading.p_updateID = window.requestAnimationFrame(toAllProgress);
    }
}
;
function toEnterGame() {
    watStart = null;
    watPanel.closePanel();
}
;
function getJsURL() {
    var obj = {};
    obj.js_worker = PF_INFO.js_worker;
    obj.js_main = PF_INFO.js_main;
    obj.js_libs = PF_INFO.js_libs;
    return obj;
}
;
function reqRecordError(error) {
    if (!PF_INFO.clientlog) {
        return;
    }
    var serverId = "0";
    if (PF_INFO && PF_INFO.selectedServer) {
        serverId = PF_INFO.selectedServer.server_id || "0";
    }
    var xhr = new XMLHttpRequest();
    xhr.open("POST", PF_INFO.clientlog + "?account=" + encodeURIComponent(PF_INFO.account) + "&serverid=" + encodeURIComponent(serverId));
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(error);
}
;
function enterGame() {
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
    function p_toFull(element) {
        if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        }
        else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        }
        else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
        else if (element.requestFullscreen) {
            element.requestFullscreen();
        }
    }
    if (window.navigator.userAgent.indexOf("Mobile") > -1)
        p_toFull(document.documentElement);
    else
        watPanel.p_addTouchmove();
    watPanel.openPanel();
    watPanel.p_updateID = window.requestAnimationFrame(toAllProgress);
    watStart.p_init();
}
;
