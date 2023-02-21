'use strict';

var c = wx.$a;
(function () {
    'use strict';

    var mcb$l = void 0x0,
        ou_e4 = window;
    function zdvk6h(b9mla$, r7i5p) {
        var we_o04 = b9mla$['split']('.'),
            prt735 = ou_e4;
        !(we_o04[0x0] in prt735) && prt735['execScript'] && prt735['execScript']('var ' + we_o04[0x0]);
        for (var e2g1w; we_o04['length'] && (e2g1w = we_o04['shift']());) !we_o04['length'] && r7i5p !== mcb$l ? prt735[e2g1w] = r7i5p : prt735 = prt735[e2g1w] ? prt735[e2g1w] : prt735[e2g1w] = {};
    }
    ;
    var obc0y = 'undefined' !== typeof Uint8Array && 'undefined' !== typeof Uint16Array && 'undefined' !== typeof Uint32Array && 'undefined' !== typeof DataView;
    function t8d6k(e_40yo) {
        var xfg1s = e_40yo['length'],
            ewug4_ = 0x0,
            _gwu = Number['POSITIVE_INFINITY'],
            wge12u,
            k6hvdz,
            rip,
            _uw2eg,
            boc40,
            vkzn,
            nsxvfj,
            hknv,
            nvxhj,
            zq6kd;
        for (hknv = 0x0; hknv < xfg1s; ++hknv) e_40yo[hknv] > ewug4_ && (ewug4_ = e_40yo[hknv]), e_40yo[hknv] < _gwu && (_gwu = e_40yo[hknv]);
        wge12u = 0x1 << ewug4_, k6hvdz = new (obc0y ? Uint32Array : Array)(wge12u), rip = 0x1, _uw2eg = 0x0;
        for (boc40 = 0x2; rip <= ewug4_;) {
            for (hknv = 0x0; hknv < xfg1s; ++hknv) if (e_40yo[hknv] === rip) {
                vkzn = 0x0, nsxvfj = _uw2eg;
                for (nvxhj = 0x0; nvxhj < rip; ++nvxhj) vkzn = vkzn << 0x1 | nsxvfj & 0x1, nsxvfj >>= 0x1;
                zq6kd = rip << 0x10 | hknv;
                for (nvxhj = vkzn; nvxhj < wge12u; nvxhj += boc40) k6hvdz[nvxhj] = zq6kd;
                ++_uw2eg;
            }
            ++rip, _uw2eg <<= 0x1, boc40 <<= 0x1;
        }
        return [k6hvdz, ewug4_, _gwu];
    }
    ;
    function kzhvj(e2g1wu, hnxjs) {
        this['g'] = [], this['h'] = 0x8000, this['d'] = this['f'] = this['a'] = this['l'] = 0x0, this['input'] = obc0y ? new Uint8Array(e2g1wu) : e2g1wu, this['m'] = !0x1, this['i'] = fjxns, this['r'] = !0x1;
        if (hnxjs || !(hnxjs = {})) hnxjs['index'] && (this['a'] = hnxjs['index']), hnxjs['bufferSize'] && (this['h'] = hnxjs['bufferSize']), hnxjs['bufferType'] && (this['i'] = hnxjs['bufferType']), hnxjs['resize'] && (this['r'] = hnxjs['resize']);
        switch (this['i']) {
            case ueow_4:
                this['b'] = 0x8000, this['c'] = new (obc0y ? Uint8Array : Array)(0x8000 + this['h'] + 0x102);
                break;
            case fjxns:
                this['b'] = 0x0, this['c'] = new (obc0y ? Uint8Array : Array)(this['h']), this['e'] = this['z'], this['n'] = this['v'], this['j'] = this['w'];
                break;
            default:
                throw Error('invalid inflate mode');
        }
    }
    var ueow_4 = 0x0,
        fjxns = 0x1,
        hnjvkz = {
        't': ueow_4,
        's': fjxns
    };
    kzhvj['prototype']['k'] = function () {
        for (; !this['m'];) {
            var $mbcla = fgu1x(this, 0x3);
            $mbcla & 0x1 && (this['m'] = !0x0), $mbcla >>>= 0x1;
            switch ($mbcla) {
                case 0x0:
                    var dqhk6 = this['input'],
                        yo0c4_ = this['a'],
                        $lcyb0 = this['c'],
                        $mycl = this['b'],
                        m$b9l = dqhk6['length'],
                        r8d5 = mcb$l,
                        _ew40 = mcb$l,
                        x1nfj = $lcyb0['length'],
                        ow0_ = mcb$l;
                    this['d'] = this['f'] = 0x0;
                    if (yo0c4_ + 0x1 >= m$b9l) throw Error('invalid uncompressed block header: LEN');
                    r8d5 = dqhk6[yo0c4_++] | dqhk6[yo0c4_++] << 0x8;
                    if (yo0c4_ + 0x1 >= m$b9l) throw Error('invalid uncompressed block header: NLEN');
                    _ew40 = dqhk6[yo0c4_++] | dqhk6[yo0c4_++] << 0x8;
                    if (r8d5 === ~_ew40) throw Error('invalid uncompressed block header: length verify');
                    if (yo0c4_ + r8d5 > dqhk6['length']) throw Error('input buffer is broken');
                    switch (this['i']) {
                        case ueow_4:
                            for (; $mycl + r8d5 > $lcyb0['length'];) {
                                ow0_ = x1nfj - $mycl, r8d5 -= ow0_;
                                if (obc0y) $lcyb0['set'](dqhk6['subarray'](yo0c4_, yo0c4_ + ow0_), $mycl), $mycl += ow0_, yo0c4_ += ow0_;else {
                                    for (; ow0_--;) $lcyb0[$mycl++] = dqhk6[yo0c4_++];
                                }
                                this['b'] = $mycl, $lcyb0 = this['e'](), $mycl = this['b'];
                            }
                            break;
                        case fjxns:
                            for (; $mycl + r8d5 > $lcyb0['length'];) $lcyb0 = this['e']({ 'p': 0x2 });
                            break;
                        default:
                            throw Error('invalid inflate mode');
                    }
                    if (obc0y) $lcyb0['set'](dqhk6['subarray'](yo0c4_, yo0c4_ + r8d5), $mycl), $mycl += r8d5, yo0c4_ += r8d5;else {
                        for (; r8d5--;) $lcyb0[$mycl++] = dqhk6[yo0c4_++];
                    }
                    this['a'] = yo0c4_, this['b'] = $mycl, this['c'] = $lcyb0;
                    break;
                case 0x1:
                    this['j'](t5qr87, eg2u_);
                    break;
                case 0x2:
                    for (var khznvj = fgu1x(this, 0x5) + 0x101, jshnvx = fgu1x(this, 0x5) + 0x1, y4b0 = fgu1x(this, 0x4) + 0x4, g1f2xs = new (obc0y ? Uint8Array : Array)(jnsfvx['length']), dq86rt = mcb$l, q8r75 = mcb$l, h6nvz = mcb$l, ip753 = mcb$l, eu_g4w = mcb$l, e4wo_u = mcb$l, _o4 = mcb$l, vhk6z = mcb$l, o04e_ = mcb$l, vhk6z = 0x0; vhk6z < y4b0; ++vhk6z) g1f2xs[jnsfvx[vhk6z]] = fgu1x(this, 0x3);
                    if (!obc0y) {
                        vhk6z = y4b0;
                        for (y4b0 = g1f2xs['length']; vhk6z < y4b0; ++vhk6z) g1f2xs[jnsfvx[vhk6z]] = 0x0;
                    }
                    dq86rt = t8d6k(g1f2xs), ip753 = new (obc0y ? Uint8Array : Array)(khznvj + jshnvx), vhk6z = 0x0;
                    for (o04e_ = khznvj + jshnvx; vhk6z < o04e_;) switch (eu_g4w = u_e2g(this, dq86rt), eu_g4w) {
                        case 0x10:
                            for (_o4 = 0x3 + fgu1x(this, 0x2); _o4--;) ip753[vhk6z++] = e4wo_u;
                            break;
                        case 0x11:
                            for (_o4 = 0x3 + fgu1x(this, 0x3); _o4--;) ip753[vhk6z++] = 0x0;
                            e4wo_u = 0x0;
                            break;
                        case 0x12:
                            for (_o4 = 0xb + fgu1x(this, 0x7); _o4--;) ip753[vhk6z++] = 0x0;
                            e4wo_u = 0x0;
                            break;
                        default:
                            e4wo_u = ip753[vhk6z++] = eu_g4w;
                    }
                    q8r75 = obc0y ? t8d6k(ip753['subarray'](0x0, khznvj)) : t8d6k(ip753['slice'](0x0, khznvj)), h6nvz = obc0y ? t8d6k(ip753['subarray'](khznvj)) : t8d6k(ip753['slice'](khznvj)), this['j'](q8r75, h6nvz);
                    break;
                default:
                    throw Error('unknown BTYPE: ' + $mbcla);
            }
        }
        return this['n']();
    };
    var uwo_4e = [0x10, 0x11, 0x12, 0x0, 0x8, 0x7, 0x9, 0x6, 0xa, 0x5, 0xb, 0x4, 0xc, 0x3, 0xd, 0x2, 0xe, 0x1, 0xf],
        jnsfvx = obc0y ? new Uint16Array(uwo_4e) : uwo_4e,
        k6z8d = [0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb, 0xd, 0xf, 0x11, 0x13, 0x17, 0x1b, 0x1f, 0x23, 0x2b, 0x33, 0x3b, 0x43, 0x53, 0x63, 0x73, 0x83, 0xa3, 0xc3, 0xe3, 0x102, 0x102, 0x102],
        njzhkv = obc0y ? new Uint16Array(k6z8d) : k6z8d,
        t7p35 = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x1, 0x2, 0x2, 0x2, 0x2, 0x3, 0x3, 0x3, 0x3, 0x4, 0x4, 0x4, 0x4, 0x5, 0x5, 0x5, 0x5, 0x0, 0x0, 0x0],
        c0yo_ = obc0y ? new Uint8Array(t7p35) : t7p35,
        zhkv6n = [0x1, 0x2, 0x3, 0x4, 0x5, 0x7, 0x9, 0xd, 0x11, 0x19, 0x21, 0x31, 0x41, 0x61, 0x81, 0xc1, 0x101, 0x181, 0x201, 0x301, 0x401, 0x601, 0x801, 0xc01, 0x1001, 0x1801, 0x2001, 0x3001, 0x4001, 0x6001],
        k8qzd = obc0y ? new Uint16Array(zhkv6n) : zhkv6n,
        w_e04 = [0x0, 0x0, 0x0, 0x0, 0x1, 0x1, 0x2, 0x2, 0x3, 0x3, 0x4, 0x4, 0x5, 0x5, 0x6, 0x6, 0x7, 0x7, 0x8, 0x8, 0x9, 0x9, 0xa, 0xa, 0xb, 0xb, 0xc, 0xc, 0xd, 0xd],
        znjhsv = obc0y ? new Uint8Array(w_e04) : w_e04,
        t853r = new (obc0y ? Uint8Array : Array)(0x120),
        i5p3r,
        trq78;
    i5p3r = 0x0;
    for (trq78 = t853r['length']; i5p3r < trq78; ++i5p3r) t853r[i5p3r] = 0x8f >= i5p3r ? 0x8 : 0xff >= i5p3r ? 0x9 : 0x117 >= i5p3r ? 0x7 : 0x8;
    var t5qr87 = t8d6k(t853r),
        _wgeu2 = new (obc0y ? Uint8Array : Array)(0x1e),
        wo4ue,
        b$cylm;
    wo4ue = 0x0;
    for (b$cylm = _wgeu2['length']; wo4ue < b$cylm; ++wo4ue) _wgeu2[wo4ue] = 0x5;
    var eg2u_ = t8d6k(_wgeu2);
    function fgu1x(e_o40y, fxs1j) {
        for (var q8r6t = e_o40y['f'], h6kzdv = e_o40y['d'], gfsx12 = e_o40y['input'], l$ymc = e_o40y['a'], bcy$0l = gfsx12['length'], nxf1; h6kzdv < fxs1j;) {
            if (l$ymc >= bcy$0l) throw Error('input buffer is broken');
            q8r6t |= gfsx12[l$ymc++] << h6kzdv, h6kzdv += 0x8;
        }
        return nxf1 = q8r6t & (0x1 << fxs1j) - 0x1, e_o40y['f'] = q8r6t >>> fxs1j, e_o40y['d'] = h6kzdv - fxs1j, e_o40y['a'] = l$ymc, nxf1;
    }
    function u_e2g(r5t3, p5tr73) {
        for (var lma9$b = r5t3['f'], m$blc = r5t3['d'], zsnjvh = r5t3['input'], gu21fw = r5t3['a'], y$oc0b = zsnjvh['length'], o0ye_4 = p5tr73[0x0], abcm$l = p5tr73[0x1], yb0lc$, t8kq6; m$blc < abcm$l && !(gu21fw >= y$oc0b);) lma9$b |= zsnjvh[gu21fw++] << m$blc, m$blc += 0x8;
        yb0lc$ = o0ye_4[lma9$b & (0x1 << abcm$l) - 0x1], t8kq6 = yb0lc$ >>> 0x10;
        if (t8kq6 > m$blc) throw Error('invalid code length: ' + t8kq6);
        return r5t3['f'] = lma9$b >> t8kq6, r5t3['d'] = m$blc - t8kq6, r5t3['a'] = gu21fw, yb0lc$ & 0xffff;
    }
    kzhvj['prototype']['j'] = function (dkqt68, cab) {
        var ocy04 = this['c'],
            nsvjxh = this['b'];
        this['o'] = dkqt68;
        for (var nvshjz = ocy04['length'] - 0x102, r35pt7, hkvz, y$bmcl, kqd6t; 0x100 !== (r35pt7 = u_e2g(this, dkqt68));) if (0x100 > r35pt7) nsvjxh >= nvshjz && (this['b'] = nsvjxh, ocy04 = this['e'](), nsvjxh = this['b']), ocy04[nsvjxh++] = r35pt7;else {
            hkvz = r35pt7 - 0x101, kqd6t = njzhkv[hkvz], 0x0 < c0yo_[hkvz] && (kqd6t += fgu1x(this, c0yo_[hkvz])), r35pt7 = u_e2g(this, cab), y$bmcl = k8qzd[r35pt7], 0x0 < znjhsv[r35pt7] && (y$bmcl += fgu1x(this, znjhsv[r35pt7])), nsvjxh >= nvshjz && (this['b'] = nsvjxh, ocy04 = this['e'](), nsvjxh = this['b']);
            for (; kqd6t--;) ocy04[nsvjxh] = ocy04[nsvjxh++ - y$bmcl];
        }
        for (; 0x8 <= this['d'];) this['d'] -= 0x8, this['a']--;
        this['b'] = nsvjxh;
    }, kzhvj['prototype']['w'] = function (njhzv, nkzvh6) {
        var qdtr85 = this['c'],
            vnjkz = this['b'];
        this['o'] = njhzv;
        for (var eou_4w = qdtr85['length'], malcb, kqt68, hv6nk, svjfx; 0x100 !== (malcb = u_e2g(this, njhzv));) if (0x100 > malcb) vnjkz >= eou_4w && (qdtr85 = this['e'](), eou_4w = qdtr85['length']), qdtr85[vnjkz++] = malcb;else {
            kqt68 = malcb - 0x101, svjfx = njzhkv[kqt68], 0x0 < c0yo_[kqt68] && (svjfx += fgu1x(this, c0yo_[kqt68])), malcb = u_e2g(this, nkzvh6), hv6nk = k8qzd[malcb], 0x0 < znjhsv[malcb] && (hv6nk += fgu1x(this, znjhsv[malcb])), vnjkz + svjfx > eou_4w && (qdtr85 = this['e'](), eou_4w = qdtr85['length']);
            for (; svjfx--;) qdtr85[vnjkz] = qdtr85[vnjkz++ - hv6nk];
        }
        for (; 0x8 <= this['d'];) this['d'] -= 0x8, this['a']--;
        this['b'] = vnjkz;
    }, kzhvj['prototype']['e'] = function () {
        var yb$l0 = new (obc0y ? Uint8Array : Array)(this['b'] - 0x8000),
            hqkdz6 = this['b'] - 0x8000,
            _4ew,
            qdr5t8,
            gux21 = this['c'];
        if (obc0y) yb$l0['set'](gux21['subarray'](0x8000, yb$l0['length']));else {
            _4ew = 0x0;
            for (qdr5t8 = yb$l0['length']; _4ew < qdr5t8; ++_4ew) yb$l0[_4ew] = gux21[_4ew + 0x8000];
        }
        this['g']['push'](yb$l0), this['l'] += yb$l0['length'];
        if (obc0y) gux21['set'](gux21['subarray'](hqkdz6, hqkdz6 + 0x8000));else {
            for (_4ew = 0x0; 0x8000 > _4ew; ++_4ew) gux21[_4ew] = gux21[hqkdz6 + _4ew];
        }
        return this['b'] = 0x8000, gux21;
    }, kzhvj['prototype']['z'] = function (dr86) {
        var lbcym$,
            khdqz6 = this['input']['length'] / this['a'] + 0x1 | 0x0,
            hvkjnz,
            zdv6k,
            gsf2,
            _0yco = this['input'],
            t75r8q = this['c'];
        return dr86 && ('number' === typeof dr86['p'] && (khdqz6 = dr86['p']), 'number' === typeof dr86['u'] && (khdqz6 += dr86['u'])), 0x2 > khdqz6 ? (hvkjnz = (_0yco['length'] - this['a']) / this['o'][0x2], gsf2 = 0x102 * (hvkjnz / 0x2) | 0x0, zdv6k = gsf2 < t75r8q['length'] ? t75r8q['length'] + gsf2 : t75r8q['length'] << 0x1) : zdv6k = t75r8q['length'] * khdqz6, obc0y ? (lbcym$ = new Uint8Array(zdv6k), lbcym$['set'](t75r8q)) : lbcym$ = t75r8q, this['c'] = lbcym$;
    }, kzhvj['prototype']['n'] = function () {
        var xg21 = 0x0,
            j1x2sf = this['c'],
            y0bco4 = this['g'],
            q86dzk,
            $ybc0l = new (obc0y ? Uint8Array : Array)(this['l'] + (this['b'] - 0x8000)),
            dr86q,
            g2ue_w,
            l$y0c,
            alm$cb;
        if (0x0 === y0bco4['length']) return obc0y ? this['c']['subarray'](0x8000, this['b']) : this['c']['slice'](0x8000, this['b']);
        dr86q = 0x0;
        for (g2ue_w = y0bco4['length']; dr86q < g2ue_w; ++dr86q) {
            q86dzk = y0bco4[dr86q], l$y0c = 0x0;
            for (alm$cb = q86dzk['length']; l$y0c < alm$cb; ++l$y0c) $ybc0l[xg21++] = q86dzk[l$y0c];
        }
        dr86q = 0x8000;
        for (g2ue_w = this['b']; dr86q < g2ue_w; ++dr86q) $ybc0l[xg21++] = j1x2sf[dr86q];
        return this['g'] = [], this['buffer'] = $ybc0l;
    }, kzhvj['prototype']['v'] = function () {
        var d86tkq,
            _2egwu = this['b'];
        return obc0y ? this['r'] ? (d86tkq = new Uint8Array(_2egwu), d86tkq['set'](this['c']['subarray'](0x0, _2egwu))) : d86tkq = this['c']['subarray'](0x0, _2egwu) : (this['c']['length'] > _2egwu && (this['c']['length'] = _2egwu), d86tkq = this['c']), this['buffer'] = d86tkq;
    };
    function $mclyb(jxfs1, co$0by) {
        var $blyc0, zvnsh;
        this['input'] = jxfs1, this['a'] = 0x0;
        if (co$0by || !(co$0by = {})) co$0by['index'] && (this['a'] = co$0by['index']), co$0by['verify'] && (this['A'] = co$0by['verify']);
        $blyc0 = jxfs1[this['a']++], zvnsh = jxfs1[this['a']++];
        switch ($blyc0 & 0xf) {
            case sxfj1:
                this['method'] = sxfj1;
                break;
            default:
                throw Error('unsupported compression method');
        }
        if (0x0 !== (($blyc0 << 0x8) + zvnsh) % 0x1f) throw Error('invalid fcheck flag:' + (($blyc0 << 0x8) + zvnsh) % 0x1f);
        if (zvnsh & 0x20) throw Error('fdict flag is not supported');
        this['q'] = new kzhvj(jxfs1, {
            'index': this['a'],
            'bufferSize': co$0by['bufferSize'],
            'bufferType': co$0by['bufferType'],
            'resize': co$0by['resize']
        });
    }
    $mclyb['prototype']['k'] = function () {
        var $lym = this['input'],
            uw_e4o,
            f1gw2;
        uw_e4o = this['q']['k'](), this['a'] = this['q']['a'];
        if (this['A']) {
            f1gw2 = ($lym[this['a']++] << 0x18 | $lym[this['a']++] << 0x10 | $lym[this['a']++] << 0x8 | $lym[this['a']++]) >>> 0x0;
            var cb$l = uw_e4o;
            if ('string' === typeof cb$l) {
                var y$co0 = cb$l['split'](''),
                    u1ewg2,
                    k6dv;
                u1ewg2 = 0x0;
                for (k6dv = y$co0['length']; u1ewg2 < k6dv; u1ewg2++) y$co0[u1ewg2] = (y$co0[u1ewg2]['charCodeAt'](0x0) & 0xff) >>> 0x0;
                cb$l = y$co0;
            }
            for (var hnvszj = 0x1, byo04 = 0x0, obcy04 = cb$l['length'], sf21xj, ocy40_ = 0x0; 0x0 < obcy04;) {
                sf21xj = 0x400 < obcy04 ? 0x400 : obcy04, obcy04 -= sf21xj;
                do hnvszj += cb$l[ocy40_++], byo04 += hnvszj; while (--sf21xj);
                hnvszj %= 0xfff1, byo04 %= 0xfff1;
            }
            if (f1gw2 !== (byo04 << 0x10 | hnvszj) >>> 0x0) throw Error('invalid adler-32 checksum');
        }
        return uw_e4o;
    };
    var sxfj1 = 0x8;
    zdvk6h('Zlib.Inflate', $mclyb), zdvk6h('Zlib.Inflate.prototype.decompress', $mclyb['prototype']['k']);
    var uge12w = {
        'ADAPTIVE': hnjvkz['s'],
        'BLOCK': hnjvkz['t']
    },
        nvsj,
        t37r85,
        p7ri3,
        xsvhjn;
    if (Object['keys']) nvsj = Object['keys'](uge12w);else {
        for (t37r85 in nvsj = [], p7ri3 = 0x0, uge12w) nvsj[p7ri3++] = t37r85;
    }
    p7ri3 = 0x0;
    for (xsvhjn = nvsj['length']; p7ri3 < xsvhjn; ++p7ri3) t37r85 = nvsj[p7ri3], zdvk6h('Zlib.Inflate.BufferType.' + t37r85, uge12w[t37r85]);
})['call'](this), function () {
    'use strict';

    function pr7t(xg1s2f) {
        throw xg1s2f;
    }
    var fxjs1n = void 0x0,
        jsznh,
        xfv = window;
    function d86ktq(yoc_40, hk6zd) {
        var sj12 = yoc_40['split']('.'),
            w4_eo = xfv;
        !(sj12[0x0] in w4_eo) && w4_eo['execScript'] && w4_eo['execScript']('var ' + sj12[0x0]);
        for (var ueg4_w; sj12['length'] && (ueg4_w = sj12['shift']());) !sj12['length'] && hk6zd !== fxjs1n ? w4_eo[ueg4_w] = hk6zd : w4_eo = w4_eo[ueg4_w] ? w4_eo[ueg4_w] : w4_eo[ueg4_w] = {};
    }
    ;
    var cbml$y = 'undefined' !== typeof Uint8Array && 'undefined' !== typeof Uint16Array && 'undefined' !== typeof Uint32Array && 'undefined' !== typeof DataView;
    new (cbml$y ? Uint8Array : Array)(0x100);
    var h6kqd;
    for (h6kqd = 0x0; 0x100 > h6kqd; ++h6kqd) for (var xsjvfn = h6kqd, yo0_c = 0x7, xsjvfn = xsjvfn >>> 0x1; xsjvfn; xsjvfn >>>= 0x1) --yo0_c;
    var oc$y0b = [0x0, 0x77073096, 0xee0e612c, 0x990951ba, 0x76dc419, 0x706af48f, 0xe963a535, 0x9e6495a3, 0xedb8832, 0x79dcb8a4, 0xe0d5e91e, 0x97d2d988, 0x9b64c2b, 0x7eb17cbd, 0xe7b82d07, 0x90bf1d91, 0x1db71064, 0x6ab020f2, 0xf3b97148, 0x84be41de, 0x1adad47d, 0x6ddde4eb, 0xf4d4b551, 0x83d385c7, 0x136c9856, 0x646ba8c0, 0xfd62f97a, 0x8a65c9ec, 0x14015c4f, 0x63066cd9, 0xfa0f3d63, 0x8d080df5, 0x3b6e20c8, 0x4c69105e, 0xd56041e4, 0xa2677172, 0x3c03e4d1, 0x4b04d447, 0xd20d85fd, 0xa50ab56b, 0x35b5a8fa, 0x42b2986c, 0xdbbbc9d6, 0xacbcf940, 0x32d86ce3, 0x45df5c75, 0xdcd60dcf, 0xabd13d59, 0x26d930ac, 0x51de003a, 0xc8d75180, 0xbfd06116, 0x21b4f4b5, 0x56b3c423, 0xcfba9599, 0xb8bda50f, 0x2802b89e, 0x5f058808, 0xc60cd9b2, 0xb10be924, 0x2f6f7c87, 0x58684c11, 0xc1611dab, 0xb6662d3d, 0x76dc4190, 0x1db7106, 0x98d220bc, 0xefd5102a, 0x71b18589, 0x6b6b51f, 0x9fbfe4a5, 0xe8b8d433, 0x7807c9a2, 0xf00f934, 0x9609a88e, 0xe10e9818, 0x7f6a0dbb, 0x86d3d2d, 0x91646c97, 0xe6635c01, 0x6b6b51f4, 0x1c6c6162, 0x856530d8, 0xf262004e, 0x6c0695ed, 0x1b01a57b, 0x8208f4c1, 0xf50fc457, 0x65b0d9c6, 0x12b7e950, 0x8bbeb8ea, 0xfcb9887c, 0x62dd1ddf, 0x15da2d49, 0x8cd37cf3, 0xfbd44c65, 0x4db26158, 0x3ab551ce, 0xa3bc0074, 0xd4bb30e2, 0x4adfa541, 0x3dd895d7, 0xa4d1c46d, 0xd3d6f4fb, 0x4369e96a, 0x346ed9fc, 0xad678846, 0xda60b8d0, 0x44042d73, 0x33031de5, 0xaa0a4c5f, 0xdd0d7cc9, 0x5005713c, 0x270241aa, 0xbe0b1010, 0xc90c2086, 0x5768b525, 0x206f85b3, 0xb966d409, 0xce61e49f, 0x5edef90e, 0x29d9c998, 0xb0d09822, 0xc7d7a8b4, 0x59b33d17, 0x2eb40d81, 0xb7bd5c3b, 0xc0ba6cad, 0xedb88320, 0x9abfb3b6, 0x3b6e20c, 0x74b1d29a, 0xead54739, 0x9dd277af, 0x4db2615, 0x73dc1683, 0xe3630b12, 0x94643b84, 0xd6d6a3e, 0x7a6a5aa8, 0xe40ecf0b, 0x9309ff9d, 0xa00ae27, 0x7d079eb1, 0xf00f9344, 0x8708a3d2, 0x1e01f268, 0x6906c2fe, 0xf762575d, 0x806567cb, 0x196c3671, 0x6e6b06e7, 0xfed41b76, 0x89d32be0, 0x10da7a5a, 0x67dd4acc, 0xf9b9df6f, 0x8ebeeff9, 0x17b7be43, 0x60b08ed5, 0xd6d6a3e8, 0xa1d1937e, 0x38d8c2c4, 0x4fdff252, 0xd1bb67f1, 0xa6bc5767, 0x3fb506dd, 0x48b2364b, 0xd80d2bda, 0xaf0a1b4c, 0x36034af6, 0x41047a60, 0xdf60efc3, 0xa867df55, 0x316e8eef, 0x4669be79, 0xcb61b38c, 0xbc66831a, 0x256fd2a0, 0x5268e236, 0xcc0c7795, 0xbb0b4703, 0x220216b9, 0x5505262f, 0xc5ba3bbe, 0xb2bd0b28, 0x2bb45a92, 0x5cb36a04, 0xc2d7ffa7, 0xb5d0cf31, 0x2cd99e8b, 0x5bdeae1d, 0x9b64c2b0, 0xec63f226, 0x756aa39c, 0x26d930a, 0x9c0906a9, 0xeb0e363f, 0x72076785, 0x5005713, 0x95bf4a82, 0xe2b87a14, 0x7bb12bae, 0xcb61b38, 0x92d28e9b, 0xe5d5be0d, 0x7cdcefb7, 0xbdbdf21, 0x86d3d2d4, 0xf1d4e242, 0x68ddb3f8, 0x1fda836e, 0x81be16cd, 0xf6b9265b, 0x6fb077e1, 0x18b74777, 0x88085ae6, 0xff0f6a70, 0x66063bca, 0x11010b5c, 0x8f659eff, 0xf862ae69, 0x616bffd3, 0x166ccf45, 0xa00ae278, 0xd70dd2ee, 0x4e048354, 0x3903b3c2, 0xa7672661, 0xd06016f7, 0x4969474d, 0x3e6e77db, 0xaed16a4a, 0xd9d65adc, 0x40df0b66, 0x37d83bf0, 0xa9bcae53, 0xdebb9ec5, 0x47b2cf7f, 0x30b5ffe9, 0xbdbdf21c, 0xcabac28a, 0x53b39330, 0x24b4a3a6, 0xbad03605, 0xcdd70693, 0x54de5729, 0x23d967bf, 0xb3667a2e, 0xc4614ab8, 0x5d681b02, 0x2a6f2b94, 0xb40bbe37, 0xc30c8ea1, 0x5a05df1b, 0x2d02ef8d],
        jvnxfs = cbml$y ? new Uint32Array(oc$y0b) : oc$y0b;
    if (xfv['Uint8Array'] !== fxjs1n) String['fromCharCode']['apply'] = function (zvjhs) {
        return function (cy0l$, $bc0yl) {
            return zvjhs['call'](String['fromCharCode'], cy0l$, Array['prototype']['slice']['call']($bc0yl));
        };
    }(String['fromCharCode']['apply']);
    function u12(vkdh) {
        var a9bl = vkdh['length'],
            x2fsj1 = 0x0,
            kjvnz = Number['POSITIVE_INFINITY'],
            dh6vz,
            y0l$bc,
            p573ir,
            _wgue4,
            jvzk,
            nfvsxj,
            xvjf,
            q6dkh,
            f1sjn,
            xsfn1;
        for (q6dkh = 0x0; q6dkh < a9bl; ++q6dkh) vkdh[q6dkh] > x2fsj1 && (x2fsj1 = vkdh[q6dkh]), vkdh[q6dkh] < kjvnz && (kjvnz = vkdh[q6dkh]);
        dh6vz = 0x1 << x2fsj1, y0l$bc = new (cbml$y ? Uint32Array : Array)(dh6vz), p573ir = 0x1, _wgue4 = 0x0;
        for (jvzk = 0x2; p573ir <= x2fsj1;) {
            for (q6dkh = 0x0; q6dkh < a9bl; ++q6dkh) if (vkdh[q6dkh] === p573ir) {
                nfvsxj = 0x0, xvjf = _wgue4;
                for (f1sjn = 0x0; f1sjn < p573ir; ++f1sjn) nfvsxj = nfvsxj << 0x1 | xvjf & 0x1, xvjf >>= 0x1;
                xsfn1 = p573ir << 0x10 | q6dkh;
                for (f1sjn = nfvsxj; f1sjn < dh6vz; f1sjn += jvzk) y0l$bc[f1sjn] = xsfn1;
                ++_wgue4;
            }
            ++p573ir, _wgue4 <<= 0x1, jvzk <<= 0x1;
        }
        return [y0l$bc, x2fsj1, kjvnz];
    }
    ;
    var hjsnv = [],
        rd58t;
    for (rd58t = 0x0; 0x120 > rd58t; rd58t++) switch (!0x0) {
        case 0x8f >= rd58t:
            hjsnv['push']([rd58t + 0x30, 0x8]);
            break;
        case 0xff >= rd58t:
            hjsnv['push']([rd58t - 0x90 + 0x190, 0x9]);
            break;
        case 0x117 >= rd58t:
            hjsnv['push']([rd58t - 0x100 + 0x0, 0x7]);
            break;
        case 0x11f >= rd58t:
            hjsnv['push']([rd58t - 0x118 + 0xc0, 0x8]);
            break;
        default:
            pr7t('invalid literal: ' + rd58t);
    }
    var fu2w1g = function () {
        function hkd6z(snxvjf) {
            switch (!0x0) {
                case 0x3 === snxvjf:
                    return [0x101, snxvjf - 0x3, 0x0];
                case 0x4 === snxvjf:
                    return [0x102, snxvjf - 0x4, 0x0];
                case 0x5 === snxvjf:
                    return [0x103, snxvjf - 0x5, 0x0];
                case 0x6 === snxvjf:
                    return [0x104, snxvjf - 0x6, 0x0];
                case 0x7 === snxvjf:
                    return [0x105, snxvjf - 0x7, 0x0];
                case 0x8 === snxvjf:
                    return [0x106, snxvjf - 0x8, 0x0];
                case 0x9 === snxvjf:
                    return [0x107, snxvjf - 0x9, 0x0];
                case 0xa === snxvjf:
                    return [0x108, snxvjf - 0xa, 0x0];
                case 0xc >= snxvjf:
                    return [0x109, snxvjf - 0xb, 0x1];
                case 0xe >= snxvjf:
                    return [0x10a, snxvjf - 0xd, 0x1];
                case 0x10 >= snxvjf:
                    return [0x10b, snxvjf - 0xf, 0x1];
                case 0x12 >= snxvjf:
                    return [0x10c, snxvjf - 0x11, 0x1];
                case 0x16 >= snxvjf:
                    return [0x10d, snxvjf - 0x13, 0x2];
                case 0x1a >= snxvjf:
                    return [0x10e, snxvjf - 0x17, 0x2];
                case 0x1e >= snxvjf:
                    return [0x10f, snxvjf - 0x1b, 0x2];
                case 0x22 >= snxvjf:
                    return [0x110, snxvjf - 0x1f, 0x2];
                case 0x2a >= snxvjf:
                    return [0x111, snxvjf - 0x23, 0x3];
                case 0x32 >= snxvjf:
                    return [0x112, snxvjf - 0x2b, 0x3];
                case 0x3a >= snxvjf:
                    return [0x113, snxvjf - 0x33, 0x3];
                case 0x42 >= snxvjf:
                    return [0x114, snxvjf - 0x3b, 0x3];
                case 0x52 >= snxvjf:
                    return [0x115, snxvjf - 0x43, 0x4];
                case 0x62 >= snxvjf:
                    return [0x116, snxvjf - 0x53, 0x4];
                case 0x72 >= snxvjf:
                    return [0x117, snxvjf - 0x63, 0x4];
                case 0x82 >= snxvjf:
                    return [0x118, snxvjf - 0x73, 0x4];
                case 0xa2 >= snxvjf:
                    return [0x119, snxvjf - 0x83, 0x5];
                case 0xc2 >= snxvjf:
                    return [0x11a, snxvjf - 0xa3, 0x5];
                case 0xe2 >= snxvjf:
                    return [0x11b, snxvjf - 0xc3, 0x5];
                case 0x101 >= snxvjf:
                    return [0x11c, snxvjf - 0xe3, 0x5];
                case 0x102 === snxvjf:
                    return [0x11d, snxvjf - 0x102, 0x0];
                default:
                    pr7t('invalid length: ' + snxvjf);
            }
        }
        var cybo4 = [],
            xsf12j,
            zhvs;
        for (xsf12j = 0x3; 0x102 >= xsf12j; xsf12j++) zhvs = hkd6z(xsf12j), cybo4[xsf12j] = zhvs[0x2] << 0x18 | zhvs[0x1] << 0x10 | zhvs[0x0];
        return cybo4;
    }();
    cbml$y && new Uint32Array(fu2w1g);
    function tqk8d(pi5r73, cyb0l) {
        this['l'] = [], this['m'] = 0x8000, this['d'] = this['f'] = this['c'] = this['t'] = 0x0, this['input'] = cbml$y ? new Uint8Array(pi5r73) : pi5r73, this['u'] = !0x1, this['n'] = yo$c, this['K'] = !0x1;
        if (cyb0l || !(cyb0l = {})) cyb0l['index'] && (this['c'] = cyb0l['index']), cyb0l['bufferSize'] && (this['m'] = cyb0l['bufferSize']), cyb0l['bufferType'] && (this['n'] = cyb0l['bufferType']), cyb0l['resize'] && (this['K'] = cyb0l['resize']);
        switch (this['n']) {
            case kh6zv:
                this['a'] = 0x8000, this['b'] = new (cbml$y ? Uint8Array : Array)(0x8000 + this['m'] + 0x102);
                break;
            case yo$c:
                this['a'] = 0x0, this['b'] = new (cbml$y ? Uint8Array : Array)(this['m']), this['e'] = this['W'], this['B'] = this['R'], this['q'] = this['V'];
                break;
            default:
                pr7t(Error('invalid inflate mode'));
        }
    }
    var kh6zv = 0x0,
        yo$c = 0x1;
    tqk8d['prototype']['r'] = function () {
        for (; !this['u'];) {
            var ueo_w4 = n6hzk(this, 0x3);
            ueo_w4 & 0x1 && (this['u'] = !0x0), ueo_w4 >>>= 0x1;
            switch (ueo_w4) {
                case 0x0:
                    var gw1ue2 = this['input'],
                        h6dv = this['c'],
                        oe40_ = this['b'],
                        gux1f2 = this['a'],
                        r83t5 = gw1ue2['length'],
                        tr53p7 = fxjs1n,
                        qtr5 = fxjs1n,
                        ewu4g_ = oe40_['length'],
                        vnsfx = fxjs1n;
                    this['d'] = this['f'] = 0x0, h6dv + 0x1 >= r83t5 && pr7t(Error('invalid uncompressed block header: LEN')), tr53p7 = gw1ue2[h6dv++] | gw1ue2[h6dv++] << 0x8, h6dv + 0x1 >= r83t5 && pr7t(Error('invalid uncompressed block header: NLEN')), qtr5 = gw1ue2[h6dv++] | gw1ue2[h6dv++] << 0x8, tr53p7 === ~qtr5 && pr7t(Error('invalid uncompressed block header: length verify')), h6dv + tr53p7 > gw1ue2['length'] && pr7t(Error('input buffer is broken'));
                    switch (this['n']) {
                        case kh6zv:
                            for (; gux1f2 + tr53p7 > oe40_['length'];) {
                                vnsfx = ewu4g_ - gux1f2, tr53p7 -= vnsfx;
                                if (cbml$y) oe40_['set'](gw1ue2['subarray'](h6dv, h6dv + vnsfx), gux1f2), gux1f2 += vnsfx, h6dv += vnsfx;else {
                                    for (; vnsfx--;) oe40_[gux1f2++] = gw1ue2[h6dv++];
                                }
                                this['a'] = gux1f2, oe40_ = this['e'](), gux1f2 = this['a'];
                            }
                            break;
                        case yo$c:
                            for (; gux1f2 + tr53p7 > oe40_['length'];) oe40_ = this['e']({ 'H': 0x2 });
                            break;
                        default:
                            pr7t(Error('invalid inflate mode'));
                    }
                    if (cbml$y) oe40_['set'](gw1ue2['subarray'](h6dv, h6dv + tr53p7), gux1f2), gux1f2 += tr53p7, h6dv += tr53p7;else {
                        for (; tr53p7--;) oe40_[gux1f2++] = gw1ue2[h6dv++];
                    }
                    this['c'] = h6dv, this['a'] = gux1f2, this['b'] = oe40_;
                    break;
                case 0x1:
                    this['q']($myclb, jx1fns);
                    break;
                case 0x2:
                    for (var jhsnx = n6hzk(this, 0x5) + 0x101, t3758r = n6hzk(this, 0x5) + 0x1, ri7p35 = n6hzk(this, 0x4) + 0x4, a$9bml = new (cbml$y ? Uint8Array : Array)(gue4w['length']), $cboy0 = fxjs1n, bm$9la = fxjs1n, xfs1g2 = fxjs1n, zhs = fxjs1n, kh6 = fxjs1n, c_y04 = fxjs1n, u21gx = fxjs1n, snxjv = fxjs1n, e_gw4 = fxjs1n, snxjv = 0x0; snxjv < ri7p35; ++snxjv) a$9bml[gue4w[snxjv]] = n6hzk(this, 0x3);
                    if (!cbml$y) {
                        snxjv = ri7p35;
                        for (ri7p35 = a$9bml['length']; snxjv < ri7p35; ++snxjv) a$9bml[gue4w[snxjv]] = 0x0;
                    }
                    $cboy0 = u12(a$9bml), zhs = new (cbml$y ? Uint8Array : Array)(jhsnx + t3758r), snxjv = 0x0;
                    for (e_gw4 = jhsnx + t3758r; snxjv < e_gw4;) switch (kh6 = oey(this, $cboy0), kh6) {
                        case 0x10:
                            for (u21gx = 0x3 + n6hzk(this, 0x2); u21gx--;) zhs[snxjv++] = c_y04;
                            break;
                        case 0x11:
                            for (u21gx = 0x3 + n6hzk(this, 0x3); u21gx--;) zhs[snxjv++] = 0x0;
                            c_y04 = 0x0;
                            break;
                        case 0x12:
                            for (u21gx = 0xb + n6hzk(this, 0x7); u21gx--;) zhs[snxjv++] = 0x0;
                            c_y04 = 0x0;
                            break;
                        default:
                            c_y04 = zhs[snxjv++] = kh6;
                    }
                    bm$9la = cbml$y ? u12(zhs['subarray'](0x0, jhsnx)) : u12(zhs['slice'](0x0, jhsnx)), xfs1g2 = cbml$y ? u12(zhs['subarray'](jhsnx)) : u12(zhs['slice'](jhsnx)), this['q'](bm$9la, xfs1g2);
                    break;
                default:
                    pr7t(Error('unknown BTYPE: ' + ueo_w4));
            }
        }
        return this['B']();
    };
    var byoc04 = [0x10, 0x11, 0x12, 0x0, 0x8, 0x7, 0x9, 0x6, 0xa, 0x5, 0xb, 0x4, 0xc, 0x3, 0xd, 0x2, 0xe, 0x1, 0xf],
        gue4w = cbml$y ? new Uint16Array(byoc04) : byoc04,
        d6hvk = [0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb, 0xd, 0xf, 0x11, 0x13, 0x17, 0x1b, 0x1f, 0x23, 0x2b, 0x33, 0x3b, 0x43, 0x53, 0x63, 0x73, 0x83, 0xa3, 0xc3, 0xe3, 0x102, 0x102, 0x102],
        tr83 = cbml$y ? new Uint16Array(d6hvk) : d6hvk,
        _4o0ew = [0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x1, 0x2, 0x2, 0x2, 0x2, 0x3, 0x3, 0x3, 0x3, 0x4, 0x4, 0x4, 0x4, 0x5, 0x5, 0x5, 0x5, 0x0, 0x0, 0x0],
        vnh6z = cbml$y ? new Uint8Array(_4o0ew) : _4o0ew,
        xfsnjv = [0x1, 0x2, 0x3, 0x4, 0x5, 0x7, 0x9, 0xd, 0x11, 0x19, 0x21, 0x31, 0x41, 0x61, 0x81, 0xc1, 0x101, 0x181, 0x201, 0x301, 0x401, 0x601, 0x801, 0xc01, 0x1001, 0x1801, 0x2001, 0x3001, 0x4001, 0x6001],
        nvjk = cbml$y ? new Uint16Array(xfsnjv) : xfsnjv,
        hjvzk = [0x0, 0x0, 0x0, 0x0, 0x1, 0x1, 0x2, 0x2, 0x3, 0x3, 0x4, 0x4, 0x5, 0x5, 0x6, 0x6, 0x7, 0x7, 0x8, 0x8, 0x9, 0x9, 0xa, 0xa, 0xb, 0xb, 0xc, 0xc, 0xd, 0xd],
        nfxsj1 = cbml$y ? new Uint8Array(hjvzk) : hjvzk,
        ugwe4 = new (cbml$y ? Uint8Array : Array)(0x120),
        h6kzvn,
        qt875r;
    h6kzvn = 0x0;
    for (qt875r = ugwe4['length']; h6kzvn < qt875r; ++h6kzvn) ugwe4[h6kzvn] = 0x8f >= h6kzvn ? 0x8 : 0xff >= h6kzvn ? 0x9 : 0x117 >= h6kzvn ? 0x7 : 0x8;
    var $myclb = u12(ugwe4),
        jx1sf2 = new (cbml$y ? Uint8Array : Array)(0x1e),
        o$0c,
        dzkhq6;
    o$0c = 0x0;
    for (dzkhq6 = jx1sf2['length']; o$0c < dzkhq6; ++o$0c) jx1sf2[o$0c] = 0x5;
    var jx1fns = u12(jx1sf2);
    function n6hzk(oew04_, rt68d) {
        for (var co04yb = oew04_['f'], cy$lbm = oew04_['d'], sjfnv = oew04_['input'], bclm$a = oew04_['c'], oy_4c0 = sjfnv['length'], p7i3; cy$lbm < rt68d;) bclm$a >= oy_4c0 && pr7t(Error('input buffer is broken')), co04yb |= sjfnv[bclm$a++] << cy$lbm, cy$lbm += 0x8;
        return p7i3 = co04yb & (0x1 << rt68d) - 0x1, oew04_['f'] = co04yb >>> rt68d, oew04_['d'] = cy$lbm - rt68d, oew04_['c'] = bclm$a, p7i3;
    }
    function oey($9mla, _40yo) {
        for (var d6vzkh = $9mla['f'], s2x1 = $9mla['d'], y_oe04 = $9mla['input'], o4ue_ = $9mla['c'], eoy_4 = y_oe04['length'], q8kdt6 = _40yo[0x0], vhsnzj = _40yo[0x1], lb0cy$, abml9; s2x1 < vhsnzj && !(o4ue_ >= eoy_4);) d6vzkh |= y_oe04[o4ue_++] << s2x1, s2x1 += 0x8;
        return lb0cy$ = q8kdt6[d6vzkh & (0x1 << vhsnzj) - 0x1], abml9 = lb0cy$ >>> 0x10, abml9 > s2x1 && pr7t(Error('invalid code length: ' + abml9)), $9mla['f'] = d6vzkh >> abml9, $9mla['d'] = s2x1 - abml9, $9mla['c'] = o4ue_, lb0cy$ & 0xffff;
    }
    jsznh = tqk8d['prototype'], jsznh['q'] = function (cb$yo0, yclm$) {
        var t58q = this['b'],
            r5t8q = this['a'];
        this['C'] = cb$yo0;
        for (var t75q8 = t58q['length'] - 0x102, jsfn, t8qkd, bc4o0y, g1fu2w; 0x100 !== (jsfn = oey(this, cb$yo0));) if (0x100 > jsfn) r5t8q >= t75q8 && (this['a'] = r5t8q, t58q = this['e'](), r5t8q = this['a']), t58q[r5t8q++] = jsfn;else {
            t8qkd = jsfn - 0x101, g1fu2w = tr83[t8qkd], 0x0 < vnh6z[t8qkd] && (g1fu2w += n6hzk(this, vnh6z[t8qkd])), jsfn = oey(this, yclm$), bc4o0y = nvjk[jsfn], 0x0 < nfxsj1[jsfn] && (bc4o0y += n6hzk(this, nfxsj1[jsfn])), r5t8q >= t75q8 && (this['a'] = r5t8q, t58q = this['e'](), r5t8q = this['a']);
            for (; g1fu2w--;) t58q[r5t8q] = t58q[r5t8q++ - bc4o0y];
        }
        for (; 0x8 <= this['d'];) this['d'] -= 0x8, this['c']--;
        this['a'] = r5t8q;
    }, jsznh['V'] = function (sfxjnv, u4_oe) {
        var yoc = this['b'],
            sgx1f2 = this['a'];
        this['C'] = sfxjnv;
        for (var ueg21w = yoc['length'], y0bl$, xsj1n, vk6z, sjzh; 0x100 !== (y0bl$ = oey(this, sfxjnv));) if (0x100 > y0bl$) sgx1f2 >= ueg21w && (yoc = this['e'](), ueg21w = yoc['length']), yoc[sgx1f2++] = y0bl$;else {
            xsj1n = y0bl$ - 0x101, sjzh = tr83[xsj1n], 0x0 < vnh6z[xsj1n] && (sjzh += n6hzk(this, vnh6z[xsj1n])), y0bl$ = oey(this, u4_oe), vk6z = nvjk[y0bl$], 0x0 < nfxsj1[y0bl$] && (vk6z += n6hzk(this, nfxsj1[y0bl$])), sgx1f2 + sjzh > ueg21w && (yoc = this['e'](), ueg21w = yoc['length']);
            for (; sjzh--;) yoc[sgx1f2] = yoc[sgx1f2++ - vk6z];
        }
        for (; 0x8 <= this['d'];) this['d'] -= 0x8, this['c']--;
        this['a'] = sgx1f2;
    }, jsznh['e'] = function () {
        var q5rt87 = new (cbml$y ? Uint8Array : Array)(this['a'] - 0x8000),
            rp5t7 = this['a'] - 0x8000,
            z8k6,
            jf21x,
            xjvh = this['b'];
        if (cbml$y) q5rt87['set'](xjvh['subarray'](0x8000, q5rt87['length']));else {
            z8k6 = 0x0;
            for (jf21x = q5rt87['length']; z8k6 < jf21x; ++z8k6) q5rt87[z8k6] = xjvh[z8k6 + 0x8000];
        }
        this['l']['push'](q5rt87), this['t'] += q5rt87['length'];
        if (cbml$y) xjvh['set'](xjvh['subarray'](rp5t7, rp5t7 + 0x8000));else {
            for (z8k6 = 0x0; 0x8000 > z8k6; ++z8k6) xjvh[z8k6] = xjvh[rp5t7 + z8k6];
        }
        return this['a'] = 0x8000, xjvh;
    }, jsznh['W'] = function (yb0o) {
        var q68d,
            mla$9b = this['input']['length'] / this['c'] + 0x1 | 0x0,
            fwg12,
            td6qk8,
            c0o4b,
            gu4w = this['input'],
            zhn6v = this['b'];
        return yb0o && ('number' === typeof yb0o['H'] && (mla$9b = yb0o['H']), 'number' === typeof yb0o['P'] && (mla$9b += yb0o['P'])), 0x2 > mla$9b ? (fwg12 = (gu4w['length'] - this['c']) / this['C'][0x2], c0o4b = 0x102 * (fwg12 / 0x2) | 0x0, td6qk8 = c0o4b < zhn6v['length'] ? zhn6v['length'] + c0o4b : zhn6v['length'] << 0x1) : td6qk8 = zhn6v['length'] * mla$9b, cbml$y ? (q68d = new Uint8Array(td6qk8), q68d['set'](zhn6v)) : q68d = zhn6v, this['b'] = q68d;
    }, jsznh['B'] = function () {
        var yl0$bc = 0x0,
            cy0bo4 = this['b'],
            xsg1f = this['l'],
            hdzvk,
            oc04 = new (cbml$y ? Uint8Array : Array)(this['t'] + (this['a'] - 0x8000)),
            hnzsv,
            t7583,
            vkhz6d,
            _u4we;
        if (0x0 === xsg1f['length']) return cbml$y ? this['b']['subarray'](0x8000, this['a']) : this['b']['slice'](0x8000, this['a']);
        hnzsv = 0x0;
        for (t7583 = xsg1f['length']; hnzsv < t7583; ++hnzsv) {
            hdzvk = xsg1f[hnzsv], vkhz6d = 0x0;
            for (_u4we = hdzvk['length']; vkhz6d < _u4we; ++vkhz6d) oc04[yl0$bc++] = hdzvk[vkhz6d];
        }
        hnzsv = 0x8000;
        for (t7583 = this['a']; hnzsv < t7583; ++hnzsv) oc04[yl0$bc++] = cy0bo4[hnzsv];
        return this['l'] = [], this['buffer'] = oc04;
    }, jsznh['R'] = function () {
        var yl0b$c,
            gwu21e = this['a'];
        return cbml$y ? this['K'] ? (yl0b$c = new Uint8Array(gwu21e), yl0b$c['set'](this['b']['subarray'](0x0, gwu21e))) : yl0b$c = this['b']['subarray'](0x0, gwu21e) : (this['b']['length'] > gwu21e && (this['b']['length'] = gwu21e), yl0b$c = this['b']), this['buffer'] = yl0b$c;
    };
    function dkq68t(hsvnjx) {
        hsvnjx = hsvnjx || {}, this['files'] = [], this['v'] = hsvnjx['comment'];
    }
    dkq68t['prototype']['L'] = function (uw2g1f) {
        this['j'] = uw2g1f;
    }, dkq68t['prototype']['s'] = function (hjkn) {
        var vjxhns = hjkn[0x2] & 0xffff | 0x2;
        return vjxhns * (vjxhns ^ 0x1) >> 0x8 & 0xff;
    }, dkq68t['prototype']['k'] = function (sgx21, q8dkt) {
        sgx21[0x0] = (jvnxfs[(sgx21[0x0] ^ q8dkt) & 0xff] ^ sgx21[0x0] >>> 0x8) >>> 0x0, sgx21[0x1] = (0x1a19 * (0x4ecd * (sgx21[0x1] + (sgx21[0x0] & 0xff)) >>> 0x0) >>> 0x0) + 0x1 >>> 0x0, sgx21[0x2] = (jvnxfs[(sgx21[0x2] ^ sgx21[0x1] >>> 0x18) & 0xff] ^ sgx21[0x2] >>> 0x8) >>> 0x0;
    }, dkq68t['prototype']['T'] = function (qhz6) {
        var aclm = [0x12345678, 0x23456789, 0x34567890],
            hsjz,
            hkjzn;
        cbml$y && (aclm = new Uint32Array(aclm)), hsjz = 0x0;
        for (hkjzn = qhz6['length']; hsjz < hkjzn; ++hsjz) this['k'](aclm, qhz6[hsjz] & 0xff);
        return aclm;
    };
    function s2gx1f(t7853r, q5r8) {
        q5r8 = q5r8 || {}, this['input'] = cbml$y && t7853r instanceof Array ? new Uint8Array(t7853r) : t7853r, this['c'] = 0x0, this['ba'] = q5r8['verify'] || !0x1, this['j'] = q5r8['password'];
    }
    var ewo4 = {
        'O': 0x0,
        'M': 0x8
    },
        dz8qk = [0x50, 0x4b, 0x1, 0x2],
        ugxf12 = [0x50, 0x4b, 0x3, 0x4],
        mab9l$ = [0x50, 0x4b, 0x5, 0x6];
    function zhkd(q68kzd, k6zhvd) {
        this['input'] = q68kzd, this['offset'] = k6zhvd;
    }
    zhkd['prototype']['parse'] = function () {
        var x1jfn = this['input'],
            cb$0oy = this['offset'];
        (x1jfn[cb$0oy++] !== dz8qk[0x0] || x1jfn[cb$0oy++] !== dz8qk[0x1] || x1jfn[cb$0oy++] !== dz8qk[0x2] || x1jfn[cb$0oy++] !== dz8qk[0x3]) && pr7t(Error('invalid file header signature')), this['version'] = x1jfn[cb$0oy++], this['ia'] = x1jfn[cb$0oy++], this['Z'] = x1jfn[cb$0oy++] | x1jfn[cb$0oy++] << 0x8, this['I'] = x1jfn[cb$0oy++] | x1jfn[cb$0oy++] << 0x8, this['A'] = x1jfn[cb$0oy++] | x1jfn[cb$0oy++] << 0x8, this['time'] = x1jfn[cb$0oy++] | x1jfn[cb$0oy++] << 0x8, this['U'] = x1jfn[cb$0oy++] | x1jfn[cb$0oy++] << 0x8, this['p'] = (x1jfn[cb$0oy++] | x1jfn[cb$0oy++] << 0x8 | x1jfn[cb$0oy++] << 0x10 | x1jfn[cb$0oy++] << 0x18) >>> 0x0, this['z'] = (x1jfn[cb$0oy++] | x1jfn[cb$0oy++] << 0x8 | x1jfn[cb$0oy++] << 0x10 | x1jfn[cb$0oy++] << 0x18) >>> 0x0, this['J'] = (x1jfn[cb$0oy++] | x1jfn[cb$0oy++] << 0x8 | x1jfn[cb$0oy++] << 0x10 | x1jfn[cb$0oy++] << 0x18) >>> 0x0, this['h'] = x1jfn[cb$0oy++] | x1jfn[cb$0oy++] << 0x8, this['g'] = x1jfn[cb$0oy++] | x1jfn[cb$0oy++] << 0x8, this['F'] = x1jfn[cb$0oy++] | x1jfn[cb$0oy++] << 0x8, this['ea'] = x1jfn[cb$0oy++] | x1jfn[cb$0oy++] << 0x8, this['ga'] = x1jfn[cb$0oy++] | x1jfn[cb$0oy++] << 0x8, this['fa'] = x1jfn[cb$0oy++] | x1jfn[cb$0oy++] << 0x8 | x1jfn[cb$0oy++] << 0x10 | x1jfn[cb$0oy++] << 0x18, this['$'] = (x1jfn[cb$0oy++] | x1jfn[cb$0oy++] << 0x8 | x1jfn[cb$0oy++] << 0x10 | x1jfn[cb$0oy++] << 0x18) >>> 0x0, this['filename'] = String['fromCharCode']['apply'](null, cbml$y ? x1jfn['subarray'](cb$0oy, cb$0oy += this['h']) : x1jfn['slice'](cb$0oy, cb$0oy += this['h'])), this['X'] = cbml$y ? x1jfn['subarray'](cb$0oy, cb$0oy += this['g']) : x1jfn['slice'](cb$0oy, cb$0oy += this['g']), this['v'] = cbml$y ? x1jfn['subarray'](cb$0oy, cb$0oy + this['F']) : x1jfn['slice'](cb$0oy, cb$0oy + this['F']), this['length'] = cb$0oy - this['offset'];
    };
    function xsn(rt68dq, uw1) {
        this['input'] = rt68dq, this['offset'] = uw1;
    }
    var sg1x2f = {
        'N': 0x1,
        'ca': 0x8,
        'da': 0x800
    };
    xsn['prototype']['parse'] = function () {
        var r7qt5 = this['input'],
            sf1x2j = this['offset'];
        (r7qt5[sf1x2j++] !== ugxf12[0x0] || r7qt5[sf1x2j++] !== ugxf12[0x1] || r7qt5[sf1x2j++] !== ugxf12[0x2] || r7qt5[sf1x2j++] !== ugxf12[0x3]) && pr7t(Error('invalid local file header signature')), this['Z'] = r7qt5[sf1x2j++] | r7qt5[sf1x2j++] << 0x8, this['I'] = r7qt5[sf1x2j++] | r7qt5[sf1x2j++] << 0x8, this['A'] = r7qt5[sf1x2j++] | r7qt5[sf1x2j++] << 0x8, this['time'] = r7qt5[sf1x2j++] | r7qt5[sf1x2j++] << 0x8, this['U'] = r7qt5[sf1x2j++] | r7qt5[sf1x2j++] << 0x8, this['p'] = (r7qt5[sf1x2j++] | r7qt5[sf1x2j++] << 0x8 | r7qt5[sf1x2j++] << 0x10 | r7qt5[sf1x2j++] << 0x18) >>> 0x0, this['z'] = (r7qt5[sf1x2j++] | r7qt5[sf1x2j++] << 0x8 | r7qt5[sf1x2j++] << 0x10 | r7qt5[sf1x2j++] << 0x18) >>> 0x0, this['J'] = (r7qt5[sf1x2j++] | r7qt5[sf1x2j++] << 0x8 | r7qt5[sf1x2j++] << 0x10 | r7qt5[sf1x2j++] << 0x18) >>> 0x0, this['h'] = r7qt5[sf1x2j++] | r7qt5[sf1x2j++] << 0x8, this['g'] = r7qt5[sf1x2j++] | r7qt5[sf1x2j++] << 0x8, this['filename'] = String['fromCharCode']['apply'](null, cbml$y ? r7qt5['subarray'](sf1x2j, sf1x2j += this['h']) : r7qt5['slice'](sf1x2j, sf1x2j += this['h'])), this['X'] = cbml$y ? r7qt5['subarray'](sf1x2j, sf1x2j += this['g']) : r7qt5['slice'](sf1x2j, sf1x2j += this['g']), this['length'] = sf1x2j - this['offset'];
    };
    function t3(dhkv6) {
        var zqdh = [],
            hsnxj = {},
            snzvh,
            wu_2e,
            e4_wo0,
            o_;
        if (!dhkv6['i']) {
            if (dhkv6['o'] === fxjs1n) {
                var vkhj = dhkv6['input'],
                    r58qt7;
                if (!dhkv6['D']) o0ycb$: {
                    var _4e = dhkv6['input'],
                        cybo0;
                    for (cybo0 = _4e['length'] - 0xc; 0x0 < cybo0; --cybo0) if (_4e[cybo0] === mab9l$[0x0] && _4e[cybo0 + 0x1] === mab9l$[0x1] && _4e[cybo0 + 0x2] === mab9l$[0x2] && _4e[cybo0 + 0x3] === mab9l$[0x3]) {
                        dhkv6['D'] = cybo0;
                        break o0ycb$;
                    }
                    pr7t(Error('End of Central Directory Record not found'));
                }
                r58qt7 = dhkv6['D'], (vkhj[r58qt7++] !== mab9l$[0x0] || vkhj[r58qt7++] !== mab9l$[0x1] || vkhj[r58qt7++] !== mab9l$[0x2] || vkhj[r58qt7++] !== mab9l$[0x3]) && pr7t(Error('invalid signature')), dhkv6['ha'] = vkhj[r58qt7++] | vkhj[r58qt7++] << 0x8, dhkv6['ja'] = vkhj[r58qt7++] | vkhj[r58qt7++] << 0x8, dhkv6['ka'] = vkhj[r58qt7++] | vkhj[r58qt7++] << 0x8, dhkv6['aa'] = vkhj[r58qt7++] | vkhj[r58qt7++] << 0x8, dhkv6['Q'] = (vkhj[r58qt7++] | vkhj[r58qt7++] << 0x8 | vkhj[r58qt7++] << 0x10 | vkhj[r58qt7++] << 0x18) >>> 0x0, dhkv6['o'] = (vkhj[r58qt7++] | vkhj[r58qt7++] << 0x8 | vkhj[r58qt7++] << 0x10 | vkhj[r58qt7++] << 0x18) >>> 0x0, dhkv6['w'] = vkhj[r58qt7++] | vkhj[r58qt7++] << 0x8, dhkv6['v'] = cbml$y ? vkhj['subarray'](r58qt7, r58qt7 + dhkv6['w']) : vkhj['slice'](r58qt7, r58qt7 + dhkv6['w']);
            }
            snzvh = dhkv6['o'], e4_wo0 = 0x0;
            for (o_ = dhkv6['aa']; e4_wo0 < o_; ++e4_wo0) wu_2e = new zhkd(dhkv6['input'], snzvh), wu_2e['parse'](), snzvh += wu_2e['length'], zqdh[e4_wo0] = wu_2e, hsnxj[wu_2e['filename']] = e4_wo0;
            dhkv6['Q'] < snzvh - dhkv6['o'] && pr7t(Error('invalid file header size')), dhkv6['i'] = zqdh, dhkv6['G'] = hsnxj;
        }
    }
    jsznh = s2gx1f['prototype'], jsznh['Y'] = function () {
        var tkd68 = [],
            qtrd58,
            xjvf,
            hszn;
        this['i'] || t3(this), hszn = this['i'], qtrd58 = 0x0;
        for (xjvf = hszn['length']; qtrd58 < xjvf; ++qtrd58) tkd68[qtrd58] = hszn[qtrd58]['filename'];
        return tkd68;
    }, jsznh['r'] = function (j1f2x, dt8r6q) {
        var y$0lb;
        this['G'] || t3(this), y$0lb = this['G'][j1f2x], y$0lb === fxjs1n && pr7t(Error(j1f2x + ' not found'));
        var kzv6hn;
        kzv6hn = dt8r6q || {};
        var fxj2s = this['input'],
            ue2wg_ = this['i'],
            weuo,
            fsx1nj,
            y0eo4,
            zkh6n,
            p3ir7,
            uf12w,
            qkt6d8,
            x1fj2;
        ue2wg_ || t3(this), ue2wg_[y$0lb] === fxjs1n && pr7t(Error('wrong index')), fsx1nj = ue2wg_[y$0lb]['$'], weuo = new xsn(this['input'], fsx1nj), weuo['parse'](), fsx1nj += weuo['length'], y0eo4 = weuo['z'];
        if (0x0 !== (weuo['I'] & sg1x2f['N'])) {
            !kzv6hn['password'] && !this['j'] && pr7t(Error('please set password')), uf12w = this['S'](kzv6hn['password'] || this['j']), qkt6d8 = fsx1nj;
            for (x1fj2 = fsx1nj + 0xc; qkt6d8 < x1fj2; ++qkt6d8) b$cmly(this, uf12w, fxj2s[qkt6d8]);
            fsx1nj += 0xc, y0eo4 -= 0xc, qkt6d8 = fsx1nj;
            for (x1fj2 = fsx1nj + y0eo4; qkt6d8 < x1fj2; ++qkt6d8) fxj2s[qkt6d8] = b$cmly(this, uf12w, fxj2s[qkt6d8]);
        }
        switch (weuo['A']) {
            case ewo4['O']:
                zkh6n = cbml$y ? this['input']['subarray'](fsx1nj, fsx1nj + y0eo4) : this['input']['slice'](fsx1nj, fsx1nj + y0eo4);
                break;
            case ewo4['M']:
                zkh6n = new tqk8d(this['input'], {
                    'index': fsx1nj,
                    'bufferSize': weuo['J']
                })['r']();
                break;
            default:
                pr7t(Error('unknown compression type'));
        }
        if (this['ba']) {
            var _ye4o0 = fxjs1n,
                q8zk,
                ba$cml = 'number' === typeof _ye4o0 ? _ye4o0 : _ye4o0 = 0x0,
                njx1s = zkh6n['length'];
            q8zk = -0x1;
            for (ba$cml = njx1s & 0x7; ba$cml--; ++_ye4o0) q8zk = q8zk >>> 0x8 ^ jvnxfs[(q8zk ^ zkh6n[_ye4o0]) & 0xff];
            for (ba$cml = njx1s >> 0x3; ba$cml--; _ye4o0 += 0x8) q8zk = q8zk >>> 0x8 ^ jvnxfs[(q8zk ^ zkh6n[_ye4o0]) & 0xff], q8zk = q8zk >>> 0x8 ^ jvnxfs[(q8zk ^ zkh6n[_ye4o0 + 0x1]) & 0xff], q8zk = q8zk >>> 0x8 ^ jvnxfs[(q8zk ^ zkh6n[_ye4o0 + 0x2]) & 0xff], q8zk = q8zk >>> 0x8 ^ jvnxfs[(q8zk ^ zkh6n[_ye4o0 + 0x3]) & 0xff], q8zk = q8zk >>> 0x8 ^ jvnxfs[(q8zk ^ zkh6n[_ye4o0 + 0x4]) & 0xff], q8zk = q8zk >>> 0x8 ^ jvnxfs[(q8zk ^ zkh6n[_ye4o0 + 0x5]) & 0xff], q8zk = q8zk >>> 0x8 ^ jvnxfs[(q8zk ^ zkh6n[_ye4o0 + 0x6]) & 0xff], q8zk = q8zk >>> 0x8 ^ jvnxfs[(q8zk ^ zkh6n[_ye4o0 + 0x7]) & 0xff];
            p3ir7 = (q8zk ^ 0xffffffff) >>> 0x0, weuo['p'] !== p3ir7 && pr7t(Error('wrong crc: file=0x' + weuo['p']['toString'](0x10) + ', data=0x' + p3ir7['toString'](0x10)));
        }
        return zkh6n;
    }, jsznh['L'] = function (rt753p) {
        this['j'] = rt753p;
    };
    function b$cmly(sjxfnv, nkvz6h, hqkd6z) {
        return hqkd6z ^= sjxfnv['s'](nkvz6h), sjxfnv['k'](nkvz6h, hqkd6z), hqkd6z;
    }
    jsznh['k'] = dkq68t['prototype']['k'], jsznh['S'] = dkq68t['prototype']['T'], jsznh['s'] = dkq68t['prototype']['s'], d86ktq('Zlib.Unzip', s2gx1f), d86ktq('Zlib.Unzip.prototype.decompress', s2gx1f['prototype']['r']), d86ktq('Zlib.Unzip.prototype.getFilenames', s2gx1f['prototype']['Y']), d86ktq('Zlib.Unzip.prototype.setPassword', s2gx1f['prototype']['L']);
}['call'](this), function gznjsh(c0ob, q68tdr) {
    if (typeof exports === 'object' && typeof module === 'object') window['msgpack'] = module['exports'] = q68tdr();else {
        if (typeof define === 'function' && define['amd']) window['msgpack'] = define([], q68tdr);else {
            if (typeof exports === 'object') window['msgpack'] = exports['msgpack'] = q68tdr();else window['msgpack'] = c0ob['msgpack'] = q68tdr();
        }
    }
}(this, function () {
    return function (modules) {
        var vzn6hk = {};
        function __webpack_require__(moduleId) {
            if (vzn6hk[moduleId]) return vzn6hk[moduleId]['exports'];
            var module = vzn6hk[moduleId] = {
                'i': moduleId,
                'l': ![],
                'exports': {}
            };
            return modules[moduleId]['call'](module['exports'], module, module['exports'], __webpack_require__), module['l'] = !![], module['exports'];
        }
        return __webpack_require__['m'] = modules, __webpack_require__['c'] = vzn6hk, __webpack_require__['d'] = function (exports, _egu4, ufg12w) {
            !__webpack_require__['o'](exports, _egu4) && Object['defineProperty'](exports, _egu4, {
                'enumerable': !![],
                'get': ufg12w
            });
        }, __webpack_require__['r'] = function (exports) {
            typeof Symbol !== 'undefined' && Symbol['toStringTag'] && Object['defineProperty'](exports, Symbol['toStringTag'], { 'value': 'Module' }), Object['defineProperty'](exports, '__esModule', { 'value': !![] });
        }, __webpack_require__['t'] = function (zvk6n, rt6q8) {
            if (rt6q8 & 0x1) zvk6n = __webpack_require__(zvk6n);
            if (rt6q8 & 0x8) return zvk6n;
            if (rt6q8 & 0x4 && typeof zvk6n === 'object' && zvk6n && zvk6n['__esModule']) return zvk6n;
            var g1sf2 = Object['create'](null);
            __webpack_require__['r'](g1sf2), Object['defineProperty'](g1sf2, 'default', {
                'enumerable': !![],
                'value': zvk6n
            });
            if (rt6q8 & 0x2 && typeof zvk6n != 'string') {
                for (var kjhnzv in zvk6n) __webpack_require__['d'](g1sf2, kjhnzv, function (t8d5) {
                    return zvk6n[t8d5];
                }['bind'](null, kjhnzv));
            }
            return g1sf2;
        }, __webpack_require__['n'] = function (module) {
            var svf = module && module['__esModule'] ? function y0o$bc() {
                return module['default'];
            } : function ew4ou() {
                return module;
            };
            return __webpack_require__['d'](svf, 'a', svf), svf;
        }, __webpack_require__['o'] = function (vsxf, njx1sf) {
            return Object['prototype']['hasOwnProperty']['call'](vsxf, njx1sf);
        }, __webpack_require__['p'] = '', __webpack_require__(__webpack_require__['s'] = 0x0);
    }([function (module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__['r'](__webpack_exports__), __webpack_require__['d'](__webpack_exports__, 'encode', function () {
            return zhjn;
        }), __webpack_require__['d'](__webpack_exports__, 'decode', function () {
            return gfx2s1;
        }), __webpack_require__['d'](__webpack_exports__, 'decodeAsync', function () {
            return drq5;
        }), __webpack_require__['d'](__webpack_exports__, 'decodeArrayStream', function () {
            return fsg1;
        }), __webpack_require__['d'](__webpack_exports__, 'decodeStream', function () {
            return hvzd;
        }), __webpack_require__['d'](__webpack_exports__, 'Decoder', function () {
            return uoew_4;
        }), __webpack_require__['d'](__webpack_exports__, 'Encoder', function () {
            return y_4co;
        }), __webpack_require__['d'](__webpack_exports__, 'ExtensionCodec', function () {
            return yl$;
        }), __webpack_require__['d'](__webpack_exports__, 'ExtData', function () {
            return hnz6kv;
        }), __webpack_require__['d'](__webpack_exports__, 'EXT_TIMESTAMP', function () {
            return r8dq6;
        }), __webpack_require__['d'](__webpack_exports__, 'encodeDateToTimeSpec', function () {
            return p5r7t3;
        }), __webpack_require__['d'](__webpack_exports__, 'encodeTimeSpecToTimestamp', function () {
            return ocy4_0;
        }), __webpack_require__['d'](__webpack_exports__, 'decodeTimestampToTimeSpec', function () {
            return geu2_;
        }), __webpack_require__['d'](__webpack_exports__, 'encodeTimestampExtension', function () {
            return vjhxs;
        }), __webpack_require__['d'](__webpack_exports__, 'decodeTimestampExtension', function () {
            return qk8dz6;
        });
        var kqh6 = undefined && undefined['__read'] || function (ueg4w_, _u4oe) {
            var o_e0 = typeof Symbol === 'function' && ueg4w_[Symbol['iterator']];
            if (!o_e0) return ueg4w_;
            var h6kdzv = o_e0['call'](ueg4w_),
                ufx1g,
                xgf12s = [],
                tr78q5;
            try {
                while ((_u4oe === void 0x0 || _u4oe-- > 0x0) && !(ufx1g = h6kdzv['next']())['done']) xgf12s['push'](ufx1g['value']);
            } catch (zq6h) {
                tr78q5 = { 'error': zq6h };
            } finally {
                try {
                    if (ufx1g && !ufx1g['done'] && (o_e0 = h6kdzv['return'])) o_e0['call'](h6kdzv);
                } finally {
                    if (tr78q5) throw tr78q5['error'];
                }
            }
            return xgf12s;
        },
            b$yco = undefined && undefined['__spread'] || function () {
            for (var o4_0 = [], jvshnx = 0x0; jvshnx < arguments['length']; jvshnx++) o4_0 = o4_0['concat'](kqh6(arguments[jvshnx]));
            return o4_0;
        },
            r57p3t = typeof process !== 'undefined' && undefined !== 'never' && typeof TextEncoder !== 'undefined' && typeof TextDecoder !== 'undefined';
        function yco4_0(cly0b$) {
            var xsjvf = cly0b$['length'],
                hzvjkn = 0x0,
                zdv = 0x0;
            while (zdv < xsjvf) {
                var sjxf2 = cly0b$['charCodeAt'](zdv++);
                if ((sjxf2 & 0xffffff80) === 0x0) {
                    hzvjkn++;
                    continue;
                } else {
                    if ((sjxf2 & 0xfffff800) === 0x0) hzvjkn += 0x2;else {
                        if (sjxf2 >= 0xd800 && sjxf2 <= 0xdbff) {
                            if (zdv < xsjvf) {
                                var _u4weo = cly0b$['charCodeAt'](zdv);
                                (_u4weo & 0xfc00) === 0xdc00 && (++zdv, sjxf2 = ((sjxf2 & 0x3ff) << 0xa) + (_u4weo & 0x3ff) + 0x10000);
                            }
                        }
                        (sjxf2 & 0xffff0000) === 0x0 ? hzvjkn += 0x3 : hzvjkn += 0x4;
                    }
                }
            }
            return hzvjkn;
        }
        function knz6(jsvnxh, sjfx12, snvxfj) {
            var ew21g = jsvnxh['length'],
                bcmy$l = snvxfj,
                f2g1wu = 0x0;
            while (f2g1wu < ew21g) {
                var b40o = jsvnxh['charCodeAt'](f2g1wu++);
                if ((b40o & 0xffffff80) === 0x0) {
                    sjfx12[bcmy$l++] = b40o;
                    continue;
                } else {
                    if ((b40o & 0xfffff800) === 0x0) sjfx12[bcmy$l++] = b40o >> 0x6 & 0x1f | 0xc0;else {
                        if (b40o >= 0xd800 && b40o <= 0xdbff) {
                            if (f2g1wu < ew21g) {
                                var uwe1 = jsvnxh['charCodeAt'](f2g1wu);
                                (uwe1 & 0xfc00) === 0xdc00 && (++f2g1wu, b40o = ((b40o & 0x3ff) << 0xa) + (uwe1 & 0x3ff) + 0x10000);
                            }
                        }
                        (b40o & 0xffff0000) === 0x0 ? (sjfx12[bcmy$l++] = b40o >> 0xc & 0xf | 0xe0, sjfx12[bcmy$l++] = b40o >> 0x6 & 0x3f | 0x80) : (sjfx12[bcmy$l++] = b40o >> 0x12 & 0x7 | 0xf0, sjfx12[bcmy$l++] = b40o >> 0xc & 0x3f | 0x80, sjfx12[bcmy$l++] = b40o >> 0x6 & 0x3f | 0x80);
                    }
                }
                sjfx12[bcmy$l++] = b40o & 0x3f | 0x80;
            }
        }
        var bc$lym = r57p3t ? new TextEncoder() : undefined,
            q857tr = typeof process !== 'undefined' && undefined !== 'force' ? 0xc8 : 0x0;
        function wgf21(g2ufx1, b$yc0, sjvhzn) {
            b$yc0['set'](bc$lym['encode'](g2ufx1), sjvhzn);
        }
        function z6dhkv($mycbl, r57q, xu12f) {
            bc$lym['encodeInto']($mycbl, r57q['subarray'](xu12f));
        }
        var vnjxf = (bc$lym === null || bc$lym === void 0x0 ? void 0x0 : bc$lym['encodeInto']) ? z6dhkv : wgf21,
            qt8k6d = 0x1000;
        function gue2_(nvxshj, _weuo4, tq758) {
            var uweg_ = _weuo4,
                mbl$cy = uweg_ + tq758,
                sxv = [],
                sznhj = '';
            while (uweg_ < mbl$cy) {
                var e1gwu2 = nvxshj[uweg_++];
                if ((e1gwu2 & 0x80) === 0x0) sxv['push'](e1gwu2);else {
                    if ((e1gwu2 & 0xe0) === 0xc0) {
                        var oe_4w = nvxshj[uweg_++] & 0x3f;
                        sxv['push']((e1gwu2 & 0x1f) << 0x6 | oe_4w);
                    } else {
                        if ((e1gwu2 & 0xf0) === 0xe0) {
                            var oe_4w = nvxshj[uweg_++] & 0x3f,
                                mycl$b = nvxshj[uweg_++] & 0x3f;
                            sxv['push']((e1gwu2 & 0x1f) << 0xc | oe_4w << 0x6 | mycl$b);
                        } else {
                            if ((e1gwu2 & 0xf8) === 0xf0) {
                                var oe_4w = nvxshj[uweg_++] & 0x3f,
                                    mycl$b = nvxshj[uweg_++] & 0x3f,
                                    d8q5 = nvxshj[uweg_++] & 0x3f,
                                    rt5 = (e1gwu2 & 0x7) << 0x12 | oe_4w << 0xc | mycl$b << 0x6 | d8q5;
                                rt5 > 0xffff && (rt5 -= 0x10000, sxv['push'](rt5 >>> 0xa & 0x3ff | 0xd800), rt5 = 0xdc00 | rt5 & 0x3ff), sxv['push'](rt5);
                            } else sxv['push'](e1gwu2);
                        }
                    }
                }
                sxv['length'] >= qt8k6d && (sznhj += String['fromCharCode']['apply'](String, b$yco(sxv)), sxv['length'] = 0x0);
            }
            return sxv['length'] > 0x0 && (sznhj += String['fromCharCode']['apply'](String, b$yco(sxv))), sznhj;
        }
        var sfjv = r57p3t ? new TextDecoder() : null,
            m$by = typeof process !== 'undefined' && undefined !== 'force' ? 0xc8 : 0x0;
        function mlcyb(r573t, njzs, yc0b$l) {
            var rt3875 = r573t['subarray'](njzs, njzs + yc0b$l);
            return sfjv['decode'](rt3875);
        }
        var hnz6kv = function () {
            function k6hznv(zjknh, uo4_we) {
                this['type'] = zjknh, this['data'] = uo4_we;
            }
            return k6hznv;
        }();
        function dktq86(c4_y0o, uwoe_4, egw2_u) {
            var kqt6d = egw2_u / 0x100000000,
                e4w_0 = egw2_u;
            c4_y0o['setUint32'](uwoe_4, kqt6d), c4_y0o['setUint32'](uwoe_4 + 0x4, e4w_0);
        }
        function uxfg(_ey4, vnhkjz, t5rq7) {
            var ue_w4 = Math['floor'](t5rq7 / 0x100000000),
                k6qzh = t5rq7;
            _ey4['setUint32'](vnhkjz, ue_w4), _ey4['setUint32'](vnhkjz + 0x4, k6qzh);
        }
        function g12uew(_oew4u, pr3t75) {
            var nvzhjk = _oew4u['getInt32'](pr3t75),
                rq85 = _oew4u['getUint32'](pr3t75 + 0x4);
            return nvzhjk * 0x100000000 + rq85;
        }
        function mc$al(gw4_eu, s2g1fx) {
            var _2uw = gw4_eu['getUint32'](s2g1fx),
                f2wg = gw4_eu['getUint32'](s2g1fx + 0x4);
            return _2uw * 0x100000000 + f2wg;
        }
        var r8dq6 = -0x1,
            l$ybc = 0x100000000 - 0x1,
            zkh6q = 0x400000000 - 0x1;
        function ocy4_0(dk6vh) {
            var xg2u = dk6vh['sec'],
                u2x1f = dk6vh['nsec'];
            if (xg2u >= 0x0 && u2x1f >= 0x0 && xg2u <= zkh6q) {
                if (u2x1f === 0x0 && xg2u <= l$ybc) {
                    var vz6khn = new Uint8Array(0x4),
                        _ow4ue = new DataView(vz6khn['buffer']);
                    return _ow4ue['setUint32'](0x0, xg2u), vz6khn;
                } else {
                    var $bcmyl = xg2u / 0x100000000,
                        qr5t7 = xg2u & 0xffffffff,
                        vz6khn = new Uint8Array(0x8),
                        _ow4ue = new DataView(vz6khn['buffer']);
                    return _ow4ue['setUint32'](0x0, u2x1f << 0x2 | $bcmyl & 0x3), _ow4ue['setUint32'](0x4, qr5t7), vz6khn;
                }
            } else {
                var vz6khn = new Uint8Array(0xc),
                    _ow4ue = new DataView(vz6khn['buffer']);
                return _ow4ue['setUint32'](0x0, u2x1f), uxfg(_ow4ue, 0x4, xg2u), vz6khn;
            }
        }
        function p5r7t3(q6td) {
            var weg1u2 = q6td['getTime'](),
                znsh = Math['floor'](weg1u2 / 0x3e8),
                kvznhj = (weg1u2 - znsh * 0x3e8) * 0xf4240,
                fjsvnx = Math['floor'](kvznhj / 0x3b9aca00);
            return {
                'sec': znsh + fjsvnx,
                'nsec': kvznhj - fjsvnx * 0x3b9aca00
            };
        }
        function vjhxs(d5rtq) {
            if (d5rtq instanceof Date) {
                var eo4_0 = p5r7t3(d5rtq);
                return ocy4_0(eo4_0);
            } else return null;
        }
        function geu2_(zhn) {
            var tr7q58 = new DataView(zhn['buffer'], zhn['byteOffset'], zhn['byteLength']);
            switch (zhn['byteLength']) {
                case 0x4:
                    {
                        var l0c$ = tr7q58['getUint32'](0x0),
                            pi3 = 0x0;
                        return {
                            'sec': l0c$,
                            'nsec': pi3
                        };
                    }
                case 0x8:
                    {
                        var lcyb0$ = tr7q58['getUint32'](0x0),
                            b0lcy = tr7q58['getUint32'](0x4),
                            l0c$ = (lcyb0$ & 0x3) * 0x100000000 + b0lcy,
                            pi3 = lcyb0$ >>> 0x2;
                        return {
                            'sec': l0c$,
                            'nsec': pi3
                        };
                    }
                case 0xc:
                    {
                        var l0c$ = g12uew(tr7q58, 0x4),
                            pi3 = tr7q58['getUint32'](0x0);
                        return {
                            'sec': l0c$,
                            'nsec': pi3
                        };
                    }
                default:
                    throw new Error('Unrecognized data size for timestamp: ' + zhn['length']);
            }
        }
        function qk8dz6(yc0$bl) {
            var q8t57r = geu2_(yc0$bl);
            return new Date(q8t57r['sec'] * 0x3e8 + q8t57r['nsec'] / 0xf4240);
        }
        var yc4o_0 = {
            'type': r8dq6,
            'encode': vjhxs,
            'decode': qk8dz6
        },
            yl$ = function () {
            function cyb4o0() {
                this['builtInEncoders'] = [], this['builtInDecoders'] = [], this['encoders'] = [], this['decoders'] = [], this['register'](yc4o_0);
            }
            return cyb4o0['prototype']['register'] = function (kqz6) {
                var nf1 = kqz6['type'],
                    weou_4 = kqz6['encode'],
                    $mly = kqz6['decode'];
                if (nf1 >= 0x0) this['encoders'][nf1] = weou_4, this['decoders'][nf1] = $mly;else {
                    var uw_g = 0x1 + nf1;
                    this['builtInEncoders'][uw_g] = weou_4, this['builtInDecoders'][uw_g] = $mly;
                }
            }, cyb4o0['prototype']['tryToEncode'] = function ($lbcy, dkz8q6) {
                for (var ylcb$ = 0x0; ylcb$ < this['builtInEncoders']['length']; ylcb$++) {
                    var hnxv = this['builtInEncoders'][ylcb$];
                    if (hnxv != null) {
                        var yb$0 = hnxv($lbcy, dkz8q6);
                        if (yb$0 != null) {
                            var njf1x = -0x1 - ylcb$;
                            return new hnz6kv(njf1x, yb$0);
                        }
                    }
                }
                for (var ylcb$ = 0x0; ylcb$ < this['encoders']['length']; ylcb$++) {
                    var hnxv = this['encoders'][ylcb$];
                    if (hnxv != null) {
                        var yb$0 = hnxv($lbcy, dkz8q6);
                        if (yb$0 != null) {
                            var njf1x = ylcb$;
                            return new hnz6kv(njf1x, yb$0);
                        }
                    }
                }
                if ($lbcy instanceof hnz6kv) return $lbcy;
                return null;
            }, cyb4o0['prototype']['decode'] = function (qd86tk, xjnsh, f1xsj) {
                var dkhq = xjnsh < 0x0 ? this['builtInDecoders'][-0x1 - xjnsh] : this['decoders'][xjnsh];
                return dkhq ? dkhq(qd86tk, xjnsh, f1xsj) : new hnz6kv(xjnsh, qd86tk);
            }, cyb4o0['defaultCodec'] = new cyb4o0(), cyb4o0;
        }();
        function clyb$(mbcly$) {
            if (mbcly$ instanceof Uint8Array) return mbcly$;else {
                if (ArrayBuffer['isView'](mbcly$)) return new Uint8Array(mbcly$['buffer'], mbcly$['byteOffset'], mbcly$['byteLength']);else return mbcly$ instanceof ArrayBuffer ? new Uint8Array(mbcly$) : Uint8Array['from'](mbcly$);
            }
        }
        function vdhk6(wuo4e_) {
            if (wuo4e_ instanceof ArrayBuffer) return new DataView(wuo4e_);
            var wu4_eo = clyb$(wuo4e_);
            return new DataView(wu4_eo['buffer'], wu4_eo['byteOffset'], wu4_eo['byteLength']);
        }
        var jn1f = undefined && undefined['__values'] || function (nsvzj) {
            var r5p3i = typeof Symbol === 'function' && Symbol['iterator'],
                hx = r5p3i && nsvzj[r5p3i],
                c$y0ob = 0x0;
            if (hx) return hx['call'](nsvzj);
            if (nsvzj && typeof nsvzj['length'] === 'number') return {
                'next': function () {
                    if (nsvzj && c$y0ob >= nsvzj['length']) nsvzj = void 0x0;
                    return {
                        'value': nsvzj && nsvzj[c$y0ob++],
                        'done': !nsvzj
                    };
                }
            };
            throw new TypeError(r5p3i ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
        },
            dk6qt8 = Uint8Array['prototype']['slice'] != null || Uint8Array['prototype']['slice'] != undefined,
            my = 0x3e8,
            gwfu21 = 0x800,
            y_4co = function () {
            function zkhv6n(w1g2, j2sfx, _0o, dq8r6, euw2_g, rt8dq, x2fgs1) {
                w1g2 === void 0x0 && (w1g2 = yl$['defaultCodec']), _0o === void 0x0 && (_0o = my), dq8r6 === void 0x0 && (dq8r6 = gwfu21), euw2_g === void 0x0 && (euw2_g = ![]), rt8dq === void 0x0 && (rt8dq = ![]), x2fgs1 === void 0x0 && (x2fgs1 = ![]), this['extensionCodec'] = w1g2, this['context'] = j2sfx, this['maxDepth'] = _0o, this['initialBufferSize'] = dq8r6, this['sortKeys'] = euw2_g, this['forceFloat32'] = rt8dq, this['ignoreUndefined'] = x2fgs1, this['pos'] = 0x0, this['view'] = new DataView(new ArrayBuffer(this['initialBufferSize'])), this['bytes'] = new Uint8Array(this['view']['buffer']);
            }
            return zkhv6n['prototype']['encode'] = function (cy$m, zh6qd) {
                if (zh6qd > this['maxDepth']) throw new Error('Too deep objects in depth ' + zh6qd);
                if (cy$m == null) this['encodeNil']();else {
                    if (typeof cy$m === 'boolean') this['encodeBoolean'](cy$m);else {
                        if (typeof cy$m === 'number') this['encodeNumber'](cy$m);else typeof cy$m === 'string' ? this['encodeString'](cy$m) : this['encodeObject'](cy$m, zh6qd);
                    }
                }
            }, zkhv6n['prototype']['getUint8Array'] = function () {
                return this['bytes']['subarray'](0x0, this['pos']);
            }, zkhv6n['prototype']['ensureBufferSizeToWrite'] = function (kz) {
                var requiredSize = this['pos'] + kz;
                this['view']['byteLength'] < requiredSize && this['resizeBuffer'](requiredSize * 0x2);
            }, zkhv6n['prototype']['resizeBuffer'] = function (zhvjkn) {
                var xnv = new ArrayBuffer(zhvjkn),
                    i357pr = new Uint8Array(xnv),
                    p53tr7 = new DataView(xnv);
                i357pr['set'](this['bytes']), this['view'] = p53tr7, this['bytes'] = i357pr;
            }, zkhv6n['prototype']['encodeNil'] = function () {
                this['writeU8'](0xc0);
            }, zkhv6n['prototype']['encodeBoolean'] = function (xjhsn) {
                xjhsn === ![] ? this['writeU8'](0xc2) : this['writeU8'](0xc3);
            }, zkhv6n['prototype']['encodeNumber'] = function (_c40yo) {
                if (!Number['isSafeInteger'] || Number['isSafeInteger'](_c40yo)) {
                    if (_c40yo >= 0x0) {
                        if (_c40yo < 0x80) this['writeU8'](_c40yo);else {
                            if (_c40yo < 0x100) this['writeU8'](0xcc), this['writeU8'](_c40yo);else {
                                if (_c40yo < 0x10000) this['writeU8'](0xcd), this['writeU16'](_c40yo);else _c40yo < 0x100000000 ? (this['writeU8'](0xce), this['writeU32'](_c40yo)) : (this['writeU8'](0xcf), this['writeU64'](_c40yo));
                            }
                        }
                    } else {
                        if (_c40yo >= -0x20) this['writeU8'](0xe0 | _c40yo + 0x20);else {
                            if (_c40yo >= -0x80) this['writeU8'](0xd0), this['writeI8'](_c40yo);else {
                                if (_c40yo >= -0x8000) this['writeU8'](0xd1), this['writeI16'](_c40yo);else _c40yo >= -0x80000000 ? (this['writeU8'](0xd2), this['writeI32'](_c40yo)) : (this['writeU8'](0xd3), this['writeI64'](_c40yo));
                            }
                        }
                    }
                } else this['forceFloat32'] ? (this['writeU8'](0xca), this['writeF32'](_c40yo)) : (this['writeU8'](0xcb), this['writeF64'](_c40yo));
            }, zkhv6n['prototype']['writeStringHeader'] = function (kq8z6d) {
                if (kq8z6d < 0x20) this['writeU8'](0xa0 + kq8z6d);else {
                    if (kq8z6d < 0x100) this['writeU8'](0xd9), this['writeU8'](kq8z6d);else {
                        if (kq8z6d < 0x10000) this['writeU8'](0xda), this['writeU16'](kq8z6d);else {
                            if (kq8z6d < 0x100000000) this['writeU8'](0xdb), this['writeU32'](kq8z6d);else throw new Error('Too long string: ' + kq8z6d + ' bytes in UTF-8');
                        }
                    }
                }
            }, zkhv6n['prototype']['encodeString'] = function (y_oe4) {
                var eo04_ = 0x1 + 0x4,
                    w1gf = y_oe4['length'];
                if (r57p3t && w1gf > q857tr) {
                    var ip75r = yco4_0(y_oe4);
                    this['ensureBufferSizeToWrite'](eo04_ + ip75r), this['writeStringHeader'](ip75r), vnjxf(y_oe4, this['bytes'], this['pos']), this['pos'] += ip75r;
                } else {
                    var ip75r = yco4_0(y_oe4);
                    this['ensureBufferSizeToWrite'](eo04_ + ip75r), this['writeStringHeader'](ip75r), knz6(y_oe4, this['bytes'], this['pos']), this['pos'] += ip75r;
                }
            }, zkhv6n['prototype']['encodeObject'] = function (gu_4w, uxf2g1) {
                var c$ymlb = this['extensionCodec']['tryToEncode'](gu_4w, this['context']);
                if (c$ymlb != null) this['encodeExtension'](c$ymlb);else {
                    if (Array['isArray'](gu_4w)) this['encodeArray'](gu_4w, uxf2g1);else {
                        if (ArrayBuffer['isView'](gu_4w)) this['encodeBinary'](gu_4w);else {
                            if (typeof gu_4w === 'object') this['encodeMap'](gu_4w, uxf2g1);else throw new Error('Unrecognized object: ' + Object['prototype']['toString']['apply'](gu_4w));
                        }
                    }
                }
            }, zkhv6n['prototype']['encodeBinary'] = function (nvk6) {
                var k6dqh = nvk6['byteLength'];
                if (k6dqh < 0x100) this['writeU8'](0xc4), this['writeU8'](k6dqh);else {
                    if (k6dqh < 0x10000) this['writeU8'](0xc5), this['writeU16'](k6dqh);else {
                        if (k6dqh < 0x100000000) this['writeU8'](0xc6), this['writeU32'](k6dqh);else throw new Error('Too large binary: ' + k6dqh);
                    }
                }
                var lmb$cy = clyb$(nvk6);
                this['writeU8a'](lmb$cy);
            }, zkhv6n['prototype']['encodeArray'] = function (cy0bo, byc$0l) {
                var pr5i3,
                    _0cy4o,
                    nx1sj = cy0bo['length'];
                if (nx1sj < 0x10) this['writeU8'](0x90 + nx1sj);else {
                    if (nx1sj < 0x10000) this['writeU8'](0xdc), this['writeU16'](nx1sj);else {
                        if (nx1sj < 0x100000000) this['writeU8'](0xdd), this['writeU32'](nx1sj);else throw new Error('Too large array: ' + nx1sj);
                    }
                }
                try {
                    for (var $0oyb = jn1f(cy0bo), qdrt58 = $0oyb['next'](); !qdrt58['done']; qdrt58 = $0oyb['next']()) {
                        var zdkv6h = qdrt58['value'];
                        this['encode'](zdkv6h, byc$0l + 0x1);
                    }
                } catch (rt83) {
                    pr5i3 = { 'error': rt83 };
                } finally {
                    try {
                        if (qdrt58 && !qdrt58['done'] && (_0cy4o = $0oyb['return'])) _0cy4o['call']($0oyb);
                    } finally {
                        if (pr5i3) throw pr5i3['error'];
                    }
                }
            }, zkhv6n['prototype']['countWithoutUndefined'] = function (uoew, _4uwg) {
                var r5p7i,
                    cby0$l,
                    $byc0 = 0x0;
                try {
                    for (var ycb$l0 = jn1f(_4uwg), x1sjf = ycb$l0['next'](); !x1sjf['done']; x1sjf = ycb$l0['next']()) {
                        var m$ybc = x1sjf['value'];
                        uoew[m$ybc] !== undefined && $byc0++;
                    }
                } catch (p375i) {
                    r5p7i = { 'error': p375i };
                } finally {
                    try {
                        if (x1sjf && !x1sjf['done'] && (cby0$l = ycb$l0['return'])) cby0$l['call'](ycb$l0);
                    } finally {
                        if (r5p7i) throw r5p7i['error'];
                    }
                }
                return $byc0;
            }, zkhv6n['prototype']['encodeMap'] = function (jvhx, o$yb0) {
                var r7pi3,
                    hjnzvk,
                    _egwu = Object['keys'](jvhx);
                this['sortKeys'] && _egwu['sort']();
                var tkq8d6 = this['ignoreUndefined'] ? this['countWithoutUndefined'](jvhx, _egwu) : _egwu['length'];
                if (tkq8d6 < 0x10) this['writeU8'](0x80 + tkq8d6);else {
                    if (tkq8d6 < 0x10000) this['writeU8'](0xde), this['writeU16'](tkq8d6);else {
                        if (tkq8d6 < 0x100000000) this['writeU8'](0xdf), this['writeU32'](tkq8d6);else throw new Error('Too large map object: ' + tkq8d6);
                    }
                }
                try {
                    for (var qk6dh = jn1f(_egwu), q8t6 = qk6dh['next'](); !q8t6['done']; q8t6 = qk6dh['next']()) {
                        var zk6q8d = q8t6['value'],
                            r58t7q = jvhx[zk6q8d];
                        !(this['ignoreUndefined'] && r58t7q === undefined) && (this['encodeString'](zk6q8d), this['encode'](r58t7q, o$yb0 + 0x1));
                    }
                } catch (gufw) {
                    r7pi3 = { 'error': gufw };
                } finally {
                    try {
                        if (q8t6 && !q8t6['done'] && (hjnzvk = qk6dh['return'])) hjnzvk['call'](qk6dh);
                    } finally {
                        if (r7pi3) throw r7pi3['error'];
                    }
                }
            }, zkhv6n['prototype']['encodeExtension'] = function (z6hqd) {
                var kqzd = z6hqd['data']['length'];
                if (kqzd === 0x1) this['writeU8'](0xd4);else {
                    if (kqzd === 0x2) this['writeU8'](0xd5);else {
                        if (kqzd === 0x4) this['writeU8'](0xd6);else {
                            if (kqzd === 0x8) this['writeU8'](0xd7);else {
                                if (kqzd === 0x10) this['writeU8'](0xd8);else {
                                    if (kqzd < 0x100) this['writeU8'](0xc7), this['writeU8'](kqzd);else {
                                        if (kqzd < 0x10000) this['writeU8'](0xc8), this['writeU16'](kqzd);else {
                                            if (kqzd < 0x100000000) this['writeU8'](0xc9), this['writeU32'](kqzd);else throw new Error('Too large extension object: ' + kqzd);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                this['writeI8'](z6hqd['type']), this['writeU8a'](z6hqd['data']);
            }, zkhv6n['prototype']['writeU8'] = function (nshxjv) {
                this['ensureBufferSizeToWrite'](0x1), this['view']['setUint8'](this['pos'], nshxjv), this['pos']++;
            }, zkhv6n['prototype']['writeU8a'] = function (eyo4_0) {
                var dqt8k = eyo4_0['length'];
                this['ensureBufferSizeToWrite'](dqt8k), this['bytes']['set'](eyo4_0, this['pos']), this['pos'] += dqt8k;
            }, zkhv6n['prototype']['writeI8'] = function (g_4weu) {
                this['ensureBufferSizeToWrite'](0x1), this['view']['setInt8'](this['pos'], g_4weu), this['pos']++;
            }, zkhv6n['prototype']['writeU16'] = function (ri5p) {
                this['ensureBufferSizeToWrite'](0x2), this['view']['setUint16'](this['pos'], ri5p), this['pos'] += 0x2;
            }, zkhv6n['prototype']['writeI16'] = function (y0c_4) {
                this['ensureBufferSizeToWrite'](0x2), this['view']['setInt16'](this['pos'], y0c_4), this['pos'] += 0x2;
            }, zkhv6n['prototype']['writeU32'] = function (b0ycl$) {
                this['ensureBufferSizeToWrite'](0x4), this['view']['setUint32'](this['pos'], b0ycl$), this['pos'] += 0x4;
            }, zkhv6n['prototype']['writeI32'] = function (ugw1f) {
                this['ensureBufferSizeToWrite'](0x4), this['view']['setInt32'](this['pos'], ugw1f), this['pos'] += 0x4;
            }, zkhv6n['prototype']['writeF32'] = function (ewgu21) {
                this['ensureBufferSizeToWrite'](0x4), this['view']['setFloat32'](this['pos'], ewgu21), this['pos'] += 0x4;
            }, zkhv6n['prototype']['writeF64'] = function (njsfx1) {
                this['ensureBufferSizeToWrite'](0x8), this['view']['setFloat64'](this['pos'], njsfx1), this['pos'] += 0x8;
            }, zkhv6n['prototype']['writeU64'] = function (u2ew_g) {
                this['ensureBufferSizeToWrite'](0x8), dktq86(this['view'], this['pos'], u2ew_g), this['pos'] += 0x8;
            }, zkhv6n['prototype']['writeI64'] = function (pr37i) {
                this['ensureBufferSizeToWrite'](0x8), uxfg(this['view'], this['pos'], pr37i), this['pos'] += 0x8;
            }, zkhv6n;
        }(),
            t68qk = {};
        function zhjn(k6zhqd, q8d5rt) {
            q8d5rt === void 0x0 && (q8d5rt = t68qk);
            var xs12 = new y_4co(q8d5rt['extensionCodec'], q8d5rt['context'], q8d5rt['maxDepth'], q8d5rt['initialBufferSize'], q8d5rt['sortKeys'], q8d5rt['forceFloat32'], q8d5rt['ignoreUndefined']);
            return xs12['encode'](k6zhqd, 0x1), xs12['getUint8Array']();
        }
        function njzkh(jfs21x) {
            return (jfs21x < 0x0 ? '-' : '') + '0x' + Math['abs'](jfs21x)['toString'](0x10)['padStart'](0x2, '0');
        }
        var vnhxj = 0x10,
            dktq6 = 0x10,
            c0ybo4 = function () {
            function xug12(_eoy4, _4ouw) {
                _eoy4 === void 0x0 && (_eoy4 = vnhxj);
                _4ouw === void 0x0 && (_4ouw = dktq6);
                this['maxKeyLength'] = _eoy4, this['maxLengthPerKey'] = _4ouw, this['caches'] = [];
                for (var qtrd = 0x0; qtrd < this['maxKeyLength']; qtrd++) {
                    this['caches']['push']([]);
                }
            }
            return xug12['prototype']['canBeCached'] = function (egu2_w) {
                return egu2_w > 0x0 && egu2_w <= this['maxKeyLength'];
            }, xug12['prototype']['get'] = function (y4oe_0, xg2s, hk) {
                var hjnsvz = this['caches'][hk - 0x1],
                    vxnjs = hjnsvz['length'];
                xu12gf: for (var d6zq8k = 0x0; d6zq8k < vxnjs; d6zq8k++) {
                    var wg_2 = hjnsvz[d6zq8k],
                        w_40o = wg_2['bytes'];
                    for (var o40yc = 0x0; o40yc < hk; o40yc++) {
                        if (w_40o[o40yc] !== y4oe_0[xg2s + o40yc]) continue xu12gf;
                    }
                    return wg_2['value'];
                }
                return null;
            }, xug12['prototype']['store'] = function (qz6k8d, c04o_y) {
                var jkvhz = this['caches'][qz6k8d['length'] - 0x1],
                    cym = {
                    'bytes': qz6k8d,
                    'value': c04o_y
                };
                jkvhz['length'] >= this['maxLengthPerKey'] ? jkvhz[Math['random']() * jkvhz['length'] | 0x0] = cym : jkvhz['push'](cym);
            }, xug12['prototype']['decode'] = function (r58t73, snxjfv, vn6zk) {
                var w2e1gu = this['get'](r58t73, snxjfv, vn6zk);
                if (w2e1gu != null) return w2e1gu;
                var gfx1 = gue2_(r58t73, snxjfv, vn6zk),
                    eo4w_;
                if (dk6qt8) eo4w_ = Uint8Array['prototype']['slice']['call'](r58t73, snxjfv, snxjfv + vn6zk);else eo4w_ = Uint8Array['prototype']['subarray']['call'](r58t73, snxjfv, snxjfv + vn6zk);
                return this['store'](eo4w_, gfx1), gfx1;
            }, xug12;
        }(),
            zhsnv = undefined && undefined['__awaiter'] || function (nf1sjx, s1xg2f, $clbma, x1u) {
            function g2x1fs(p57ir3) {
                return p57ir3 instanceof $clbma ? p57ir3 : new $clbma(function (yoc04_) {
                    yoc04_(p57ir3);
                });
            }
            return new ($clbma || ($clbma = Promise))(function (f1j2s, xg2sf) {
                function fsnjx(w04_) {
                    try {
                        c$bl0(x1u['next'](w04_));
                    } catch (gew1u) {
                        xg2sf(gew1u);
                    }
                }
                function q7tr5(xnhsj) {
                    try {
                        c$bl0(x1u['throw'](xnhsj));
                    } catch (u4wge_) {
                        xg2sf(u4wge_);
                    }
                }
                function c$bl0(r75pi3) {
                    r75pi3['done'] ? f1j2s(r75pi3['value']) : g2x1fs(r75pi3['value'])['then'](fsnjx, q7tr5);
                }
                c$bl0((x1u = x1u['apply'](nf1sjx, s1xg2f || []))['next']());
            });
        },
            kvhjz = undefined && undefined['__generator'] || function (zvknh6, njvhz) {
            var tdkq68 = {
                'label': 0x0,
                'sent': function () {
                    if (r53p[0x0] & 0x1) throw r53p[0x1];
                    return r53p[0x1];
                },
                'trys': [],
                'ops': []
            },
                y_o4c0,
                ufw,
                r53p,
                xjnsfv;
            return xjnsfv = {
                'next': k6d8t(0x0),
                'throw': k6d8t(0x1),
                'return': k6d8t(0x2)
            }, typeof Symbol === 'function' && (xjnsfv[Symbol['iterator']] = function () {
                return this;
            }), xjnsfv;
            function k6d8t(xsvn) {
                return function (ri5p7) {
                    return cl$bmy([xsvn, ri5p7]);
                };
            }
            function cl$bmy(r7t58q) {
                if (y_o4c0) throw new TypeError('Generator is already executing.');
                while (tdkq68) try {
                    if (y_o4c0 = 0x1, ufw && (r53p = r7t58q[0x0] & 0x2 ? ufw['return'] : r7t58q[0x0] ? ufw['throw'] || ((r53p = ufw['return']) && r53p['call'](ufw), 0x0) : ufw['next']) && !(r53p = r53p['call'](ufw, r7t58q[0x1]))['done']) return r53p;
                    if (ufw = 0x0, r53p) r7t58q = [r7t58q[0x0] & 0x2, r53p['value']];
                    switch (r7t58q[0x0]) {
                        case 0x0:
                        case 0x1:
                            r53p = r7t58q;
                            break;
                        case 0x4:
                            tdkq68['label']++;
                            return {
                                'value': r7t58q[0x1],
                                'done': ![]
                            };
                        case 0x5:
                            tdkq68['label']++, ufw = r7t58q[0x1], r7t58q = [0x0];
                            continue;
                        case 0x7:
                            r7t58q = tdkq68['ops']['pop'](), tdkq68['trys']['pop']();
                            continue;
                        default:
                            if (!(r53p = tdkq68['trys'], r53p = r53p['length'] > 0x0 && r53p[r53p['length'] - 0x1]) && (r7t58q[0x0] === 0x6 || r7t58q[0x0] === 0x2)) {
                                tdkq68 = 0x0;
                                continue;
                            }
                            if (r7t58q[0x0] === 0x3 && (!r53p || r7t58q[0x1] > r53p[0x0] && r7t58q[0x1] < r53p[0x3])) {
                                tdkq68['label'] = r7t58q[0x1];
                                break;
                            }
                            if (r7t58q[0x0] === 0x6 && tdkq68['label'] < r53p[0x1]) {
                                tdkq68['label'] = r53p[0x1], r53p = r7t58q;
                                break;
                            }
                            if (r53p && tdkq68['label'] < r53p[0x2]) {
                                tdkq68['label'] = r53p[0x2], tdkq68['ops']['push'](r7t58q);
                                break;
                            }
                            if (r53p[0x2]) tdkq68['ops']['pop']();
                            tdkq68['trys']['pop']();
                            continue;
                    }
                    r7t58q = njvhz['call'](zvknh6, tdkq68);
                } catch (m$bl9) {
                    r7t58q = [0x6, m$bl9], ufw = 0x0;
                } finally {
                    y_o4c0 = r53p = 0x0;
                }
                if (r7t58q[0x0] & 0x5) throw r7t58q[0x1];
                return {
                    'value': r7t58q[0x0] ? r7t58q[0x1] : void 0x0,
                    'done': !![]
                };
            }
        },
            w2fu = undefined && undefined['__asyncValues'] || function (gw_4eu) {
            if (!Symbol['asyncIterator']) throw new TypeError('Symbol.asyncIterator is not defined.');
            var alcm = gw_4eu[Symbol['asyncIterator']],
                weu21g;
            return alcm ? alcm['call'](gw_4eu) : (gw_4eu = typeof __values === 'function' ? __values(gw_4eu) : gw_4eu[Symbol['iterator']](), weu21g = {}, bmca('next'), bmca('throw'), bmca('return'), weu21g[Symbol['asyncIterator']] = function () {
                return this;
            }, weu21g);
            function bmca(e_ow0) {
                weu21g[e_ow0] = gw_4eu[e_ow0] && function (dtq8r5) {
                    return new Promise(function (ge4wu, _we0o4) {
                        dtq8r5 = gw_4eu[e_ow0](dtq8r5), oc40(ge4wu, _we0o4, dtq8r5['done'], dtq8r5['value']);
                    });
                };
            }
            function oc40(blc$ma, t73p, vsjnf, we_g2u) {
                Promise['resolve'](we_g2u)['then'](function (malb$) {
                    blc$ma({
                        'value': malb$,
                        'done': vsjnf
                    });
                }, t73p);
            }
        },
            sj2 = undefined && undefined['__await'] || function (dq6z8) {
            return this instanceof sj2 ? (this['v'] = dq6z8, this) : new sj2(dq6z8);
        },
            obyc0 = undefined && undefined['__asyncGenerator'] || function (d6kz, jsfxvn, t8k6d) {
            if (!Symbol['asyncIterator']) throw new TypeError('Symbol.asyncIterator is not defined.');
            var g21ufx = t8k6d['apply'](d6kz, jsfxvn || []),
                by0,
                lb0c$ = [];
            return by0 = {}, uewg_4('next'), uewg_4('throw'), uewg_4('return'), by0[Symbol['asyncIterator']] = function () {
                return this;
            }, by0;
            function uewg_4(blcy0) {
                if (g21ufx[blcy0]) by0[blcy0] = function (hnjz) {
                    return new Promise(function (_e4y, c$0byl) {
                        lb0c$['push']([blcy0, hnjz, _e4y, c$0byl]) > 0x1 || bcma$(blcy0, hnjz);
                    });
                };
            }
            function bcma$(q8k6td, u_o) {
                try {
                    znvsjh(g21ufx[q8k6td](u_o));
                } catch (kjzhnv) {
                    kzd86q(lb0c$[0x0][0x3], kjzhnv);
                }
            }
            function znvsjh(u2wge_) {
                u2wge_['value'] instanceof sj2 ? Promise['resolve'](u2wge_['value']['v'])['then'](m$bacl, fx12gu) : kzd86q(lb0c$[0x0][0x2], u2wge_);
            }
            function m$bacl(jxhns) {
                bcma$('next', jxhns);
            }
            function fx12gu(y4eo) {
                bcma$('throw', y4eo);
            }
            function kzd86q($0ocyb, q578t) {
                if ($0ocyb(q578t), lb0c$['shift'](), lb0c$['length']) bcma$(lb0c$[0x0][0x0], lb0c$[0x0][0x1]);
            }
        },
            qt68d = function (xg) {
            var y4e_0o = typeof xg;
            return y4e_0o === 'string' || y4e_0o === 'number';
        },
            xsvnjf = -0x1,
            lba$ = new DataView(new ArrayBuffer(0x0)),
            wg21fu = new Uint8Array(lba$['buffer']),
            khzd6v = function () {
            try {
                lba$['getInt8'](0x0);
            } catch (qr8t6d) {
                return qr8t6d['constructor'];
            }
            throw new Error('never reached');
        }(),
            hzqkd6 = new khzd6v('Insufficient data'),
            hvjnsx = 0xffffffff,
            nzvjhk = new c0ybo4(),
            uoew_4 = function () {
            function vnsf(n6kz, nzvjh, ylmb$c, r3pt7, zdq6kh, c0byo, y40co, e4uow) {
                n6kz === void 0x0 && (n6kz = yl$['defaultCodec']), ylmb$c === void 0x0 && (ylmb$c = hvjnsx), r3pt7 === void 0x0 && (r3pt7 = hvjnsx), zdq6kh === void 0x0 && (zdq6kh = hvjnsx), c0byo === void 0x0 && (c0byo = hvjnsx), y40co === void 0x0 && (y40co = hvjnsx), e4uow === void 0x0 && (e4uow = nzvjhk), this['extensionCodec'] = n6kz, this['context'] = nzvjh, this['maxStrLength'] = ylmb$c, this['maxBinLength'] = r3pt7, this['maxArrayLength'] = zdq6kh, this['maxMapLength'] = c0byo, this['maxExtLength'] = y40co, this['cachedKeyDecoder'] = e4uow, this['totalPos'] = 0x0, this['pos'] = 0x0, this['view'] = lba$, this['bytes'] = wg21fu, this['headByte'] = xsvnjf, this['stack'] = [];
            }
            return vnsf['prototype']['setBuffer'] = function (nhjx) {
                this['bytes'] = clyb$(nhjx), this['view'] = vdhk6(this['bytes']), this['pos'] = 0x0;
            }, vnsf['prototype']['appendBuffer'] = function (o_ue) {
                if (this['headByte'] === xsvnjf && !this['hasRemaining']()) this['setBuffer'](o_ue);else {
                    var kq68dz = this['bytes']['subarray'](this['pos']),
                        sxg1f2 = clyb$(o_ue),
                        r58dtq = new Uint8Array(kq68dz['length'] + sxg1f2['length']);
                    r58dtq['set'](kq68dz), r58dtq['set'](sxg1f2, kq68dz['length']), this['setBuffer'](r58dtq);
                }
            }, vnsf['prototype']['hasRemaining'] = function (svhjxn) {
                return svhjxn === void 0x0 && (svhjxn = 0x1), this['view']['byteLength'] - this['pos'] >= svhjxn;
            }, vnsf['prototype']['createNoExtraBytesError'] = function (wg_ue2) {
                var sgf1x = this,
                    abl$mc = sgf1x['view'],
                    coy = sgf1x['pos'];
                return new RangeError('Extra ' + (abl$mc['byteLength'] - coy) + ' byte(s) found at buffer[' + wg_ue2 + ']');
            }, vnsf['prototype']['decodeSingleSync'] = function () {
                var khvnz6 = this['decodeSync']();
                if (this['hasRemaining']()) throw this['createNoExtraBytesError'](this['pos']);
                return khvnz6;
            }, vnsf['prototype']['decodeSingleAsync'] = function (_4ugew) {
                var drq6, p3tr57, xvnsfj, hk6;
                return zhsnv(this, void 0x0, void 0x0, function () {
                    var r35t7, c04y_, l$cmab, f2xj, $0blyc, sg1f2, zjhsnv, uew2g;
                    return kvhjz(this, function (vnkz6h) {
                        switch (vnkz6h['label']) {
                            case 0x0:
                                r35t7 = ![], vnkz6h['label'] = 0x1;
                            case 0x1:
                                vnkz6h['trys']['push']([0x1, 0x6, 0x7, 0xc]), drq6 = w2fu(_4ugew), vnkz6h['label'] = 0x2;
                            case 0x2:
                                return [0x4, drq6['next']()];
                            case 0x3:
                                if (!(p3tr57 = vnkz6h['sent'](), !p3tr57['done'])) return [0x3, 0x5];
                                l$cmab = p3tr57['value'];
                                if (r35t7) throw this['createNoExtraBytesError'](this['totalPos']);
                                this['appendBuffer'](l$cmab);
                                try {
                                    c04y_ = this['decodeSync'](), r35t7 = !![];
                                } catch ($cyo0) {
                                    if (!($cyo0 instanceof khzd6v)) throw $cyo0;
                                }
                                this['totalPos'] += this['pos'], vnkz6h['label'] = 0x4;
                            case 0x4:
                                return [0x3, 0x2];
                            case 0x5:
                                return [0x3, 0xc];
                            case 0x6:
                                f2xj = vnkz6h['sent'](), xvnsfj = { 'error': f2xj };
                                return [0x3, 0xc];
                            case 0x7:
                                vnkz6h['trys']['push']([0x7,, 0xa, 0xb]);
                                if (!(p3tr57 && !p3tr57['done'] && (hk6 = drq6['return']))) return [0x3, 0x9];
                                return [0x4, hk6['call'](drq6)];
                            case 0x8:
                                vnkz6h['sent'](), vnkz6h['label'] = 0x9;
                            case 0x9:
                                return [0x3, 0xb];
                            case 0xa:
                                if (xvnsfj) throw xvnsfj['error'];
                                return [0x7];
                            case 0xb:
                                return [0x7];
                            case 0xc:
                                if (r35t7) {
                                    if (this['hasRemaining']()) throw this['createNoExtraBytesError'](this['totalPos']);
                                    return [0x2, c04y_];
                                }
                                $0blyc = this, sg1f2 = $0blyc['headByte'], zjhsnv = $0blyc['pos'], uew2g = $0blyc['totalPos'];
                                throw new RangeError('Insufficient data in parcing ' + njzkh(sg1f2) + ' at ' + uew2g + '\x20(' + zjhsnv + ' in the current buffer)');
                        }
                    });
                });
            }, vnsf['prototype']['decodeArrayStream'] = function (bm$a9) {
                return this['decodeMultiAsync'](bm$a9, !![]);
            }, vnsf['prototype']['decodeStream'] = function (yc04ob) {
                return this['decodeMultiAsync'](yc04ob, ![]);
            }, vnsf['prototype']['decodeMultiAsync'] = function (qd8zk6, r58dqt) {
                return obyc0(this, arguments, function i53p7r() {
                    var mal$9b, o4_euw, ye0o, g1fu2, t6qdr8, g_w, c0y4b, eu4gw, jhzk;
                    return kvhjz(this, function (vhnzk6) {
                        switch (vhnzk6['label']) {
                            case 0x0:
                                mal$9b = r58dqt, o4_euw = -0x1, vhnzk6['label'] = 0x1;
                            case 0x1:
                                vhnzk6['trys']['push']([0x1, 0xd, 0xe, 0x13]), ye0o = w2fu(qd8zk6), vhnzk6['label'] = 0x2;
                            case 0x2:
                                return [0x4, sj2(ye0o['next']())];
                            case 0x3:
                                if (!(g1fu2 = vhnzk6['sent'](), !g1fu2['done'])) return [0x3, 0xc];
                                t6qdr8 = g1fu2['value'];
                                if (r58dqt && o4_euw === 0x0) throw this['createNoExtraBytesError'](this['totalPos']);
                                this['appendBuffer'](t6qdr8);
                                mal$9b && (o4_euw = this['readArraySize'](), mal$9b = ![], this['complete']());
                                vhnzk6['label'] = 0x4;
                            case 0x4:
                                vhnzk6['trys']['push']([0x4, 0x9,, 0xa]), vhnzk6['label'] = 0x5;
                            case 0x5:
                                if (![]) {}
                                return [0x4, sj2(this['decodeSync']())];
                            case 0x6:
                                return [0x4, vhnzk6['sent']()];
                            case 0x7:
                                vhnzk6['sent']();
                                if (--o4_euw === 0x0) return [0x3, 0x8];
                                return [0x3, 0x5];
                            case 0x8:
                                return [0x3, 0xa];
                            case 0x9:
                                g_w = vhnzk6['sent']();
                                if (!(g_w instanceof khzd6v)) throw g_w;
                                return [0x3, 0xa];
                            case 0xa:
                                this['totalPos'] += this['pos'], vhnzk6['label'] = 0xb;
                            case 0xb:
                                return [0x3, 0x2];
                            case 0xc:
                                return [0x3, 0x13];
                            case 0xd:
                                c0y4b = vhnzk6['sent'](), eu4gw = { 'error': c0y4b };
                                return [0x3, 0x13];
                            case 0xe:
                                vhnzk6['trys']['push']([0xe,, 0x11, 0x12]);
                                if (!(g1fu2 && !g1fu2['done'] && (jhzk = ye0o['return']))) return [0x3, 0x10];
                                return [0x4, sj2(jhzk['call'](ye0o))];
                            case 0xf:
                                vhnzk6['sent'](), vhnzk6['label'] = 0x10;
                            case 0x10:
                                return [0x3, 0x12];
                            case 0x11:
                                if (eu4gw) throw eu4gw['error'];
                                return [0x7];
                            case 0x12:
                                return [0x7];
                            case 0x13:
                                return [0x2];
                        }
                    });
                });
            }, vnsf['prototype']['decodeSync'] = function () {
                pr5t37: while (!![]) {
                    var tr7835 = this['readHeadByte'](),
                        dr58tq = void 0x0;
                    if (tr7835 >= 0xe0) dr58tq = tr7835 - 0x100;else {
                        if (tr7835 < 0xc0) {
                            if (tr7835 < 0x80) dr58tq = tr7835;else {
                                if (tr7835 < 0x90) {
                                    var gf2wu = tr7835 - 0x80;
                                    if (gf2wu !== 0x0) {
                                        this['pushMapState'](gf2wu), this['complete']();
                                        continue pr5t37;
                                    } else dr58tq = {};
                                } else {
                                    if (tr7835 < 0xa0) {
                                        var gf2wu = tr7835 - 0x90;
                                        if (gf2wu !== 0x0) {
                                            this['pushArrayState'](gf2wu), this['complete']();
                                            continue pr5t37;
                                        } else dr58tq = [];
                                    } else {
                                        var cob0$y = tr7835 - 0xa0;
                                        dr58tq = this['decodeUtf8String'](cob0$y, 0x0);
                                    }
                                }
                            }
                        } else {
                            if (tr7835 === 0xc0) dr58tq = null;else {
                                if (tr7835 === 0xc2) dr58tq = ![];else {
                                    if (tr7835 === 0xc3) dr58tq = !![];else {
                                        if (tr7835 === 0xca) dr58tq = this['readF32']();else {
                                            if (tr7835 === 0xcb) dr58tq = this['readF64']();else {
                                                if (tr7835 === 0xcc) dr58tq = this['readU8']();else {
                                                    if (tr7835 === 0xcd) dr58tq = this['readU16']();else {
                                                        if (tr7835 === 0xce) dr58tq = this['readU32']();else {
                                                            if (tr7835 === 0xcf) dr58tq = this['readU64']();else {
                                                                if (tr7835 === 0xd0) dr58tq = this['readI8']();else {
                                                                    if (tr7835 === 0xd1) dr58tq = this['readI16']();else {
                                                                        if (tr7835 === 0xd2) dr58tq = this['readI32']();else {
                                                                            if (tr7835 === 0xd3) dr58tq = this['readI64']();else {
                                                                                if (tr7835 === 0xd9) {
                                                                                    var cob0$y = this['lookU8']();
                                                                                    dr58tq = this['decodeUtf8String'](cob0$y, 0x1);
                                                                                } else {
                                                                                    if (tr7835 === 0xda) {
                                                                                        var cob0$y = this['lookU16']();
                                                                                        dr58tq = this['decodeUtf8String'](cob0$y, 0x2);
                                                                                    } else {
                                                                                        if (tr7835 === 0xdb) {
                                                                                            var cob0$y = this['lookU32']();
                                                                                            dr58tq = this['decodeUtf8String'](cob0$y, 0x4);
                                                                                        } else {
                                                                                            if (tr7835 === 0xdc) {
                                                                                                var gf2wu = this['readU16']();
                                                                                                if (gf2wu !== 0x0) {
                                                                                                    this['pushArrayState'](gf2wu), this['complete']();
                                                                                                    continue pr5t37;
                                                                                                } else dr58tq = [];
                                                                                            } else {
                                                                                                if (tr7835 === 0xdd) {
                                                                                                    var gf2wu = this['readU32']();
                                                                                                    if (gf2wu !== 0x0) {
                                                                                                        this['pushArrayState'](gf2wu), this['complete']();
                                                                                                        continue pr5t37;
                                                                                                    } else dr58tq = [];
                                                                                                } else {
                                                                                                    if (tr7835 === 0xde) {
                                                                                                        var gf2wu = this['readU16']();
                                                                                                        if (gf2wu !== 0x0) {
                                                                                                            this['pushMapState'](gf2wu), this['complete']();
                                                                                                            continue pr5t37;
                                                                                                        } else dr58tq = {};
                                                                                                    } else {
                                                                                                        if (tr7835 === 0xdf) {
                                                                                                            var gf2wu = this['readU32']();
                                                                                                            if (gf2wu !== 0x0) {
                                                                                                                this['pushMapState'](gf2wu), this['complete']();
                                                                                                                continue pr5t37;
                                                                                                            } else dr58tq = {};
                                                                                                        } else {
                                                                                                            if (tr7835 === 0xc4) {
                                                                                                                var gf2wu = this['lookU8']();
                                                                                                                dr58tq = this['decodeBinary'](gf2wu, 0x1);
                                                                                                            } else {
                                                                                                                if (tr7835 === 0xc5) {
                                                                                                                    var gf2wu = this['lookU16']();
                                                                                                                    dr58tq = this['decodeBinary'](gf2wu, 0x2);
                                                                                                                } else {
                                                                                                                    if (tr7835 === 0xc6) {
                                                                                                                        var gf2wu = this['lookU32']();
                                                                                                                        dr58tq = this['decodeBinary'](gf2wu, 0x4);
                                                                                                                    } else {
                                                                                                                        if (tr7835 === 0xd4) dr58tq = this['decodeExtension'](0x1, 0x0);else {
                                                                                                                            if (tr7835 === 0xd5) dr58tq = this['decodeExtension'](0x2, 0x0);else {
                                                                                                                                if (tr7835 === 0xd6) dr58tq = this['decodeExtension'](0x4, 0x0);else {
                                                                                                                                    if (tr7835 === 0xd7) dr58tq = this['decodeExtension'](0x8, 0x0);else {
                                                                                                                                        if (tr7835 === 0xd8) dr58tq = this['decodeExtension'](0x10, 0x0);else {
                                                                                                                                            if (tr7835 === 0xc7) {
                                                                                                                                                var gf2wu = this['lookU8']();
                                                                                                                                                dr58tq = this['decodeExtension'](gf2wu, 0x1);
                                                                                                                                            } else {
                                                                                                                                                if (tr7835 === 0xc8) {
                                                                                                                                                    var gf2wu = this['lookU16']();
                                                                                                                                                    dr58tq = this['decodeExtension'](gf2wu, 0x2);
                                                                                                                                                } else {
                                                                                                                                                    if (tr7835 === 0xc9) {
                                                                                                                                                        var gf2wu = this['lookU32']();
                                                                                                                                                        dr58tq = this['decodeExtension'](gf2wu, 0x4);
                                                                                                                                                    } else throw new Error('Unrecognized type byte: ' + njzkh(tr7835));
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    this['complete']();
                    var zhv = this['stack'];
                    while (zhv['length'] > 0x0) {
                        var nsjxvh = zhv[zhv['length'] - 0x1];
                        if (nsjxvh['type'] === 0x0) {
                            nsjxvh['array'][nsjxvh['position']] = dr58tq, nsjxvh['position']++;
                            if (nsjxvh['position'] === nsjxvh['size']) zhv['pop'](), dr58tq = nsjxvh['array'];else continue pr5t37;
                        } else {
                            if (nsjxvh['type'] === 0x1) {
                                if (!qt68d(dr58tq)) throw new Error('The type of key must be string or number but ' + typeof dr58tq);
                                nsjxvh['key'] = dr58tq, nsjxvh['type'] = 0x2;
                                continue pr5t37;
                            } else {
                                nsjxvh['map'][nsjxvh['key']] = dr58tq, nsjxvh['readCount']++;
                                if (nsjxvh['readCount'] === nsjxvh['size']) zhv['pop'](), dr58tq = nsjxvh['map'];else {
                                    nsjxvh['key'] = null, nsjxvh['type'] = 0x1;
                                    continue pr5t37;
                                }
                            }
                        }
                    }
                    return dr58tq;
                }
            }, vnsf['prototype']['readHeadByte'] = function () {
                return this['headByte'] === xsvnjf && (this['headByte'] = this['readU8']()), this['headByte'];
            }, vnsf['prototype']['complete'] = function () {
                this['headByte'] = xsvnjf;
            }, vnsf['prototype']['readArraySize'] = function () {
                var k6dqzh = this['readHeadByte']();
                switch (k6dqzh) {
                    case 0xdc:
                        return this['readU16']();
                    case 0xdd:
                        return this['readU32']();
                    default:
                        {
                            if (k6dqzh < 0xa0) return k6dqzh - 0x90;else throw new Error('Unrecognized array type byte: ' + njzkh(k6dqzh));
                        }
                }
            }, vnsf['prototype']['pushMapState'] = function (q57tr8) {
                if (q57tr8 > this['maxMapLength']) throw new Error('Max length exceeded: map length (' + q57tr8 + ') > maxMapLengthLength (' + this['maxMapLength'] + ')');
                this['stack']['push']({
                    'type': 0x1,
                    'size': q57tr8,
                    'key': null,
                    'readCount': 0x0,
                    'map': {}
                });
            }, vnsf['prototype']['pushArrayState'] = function (kz6qdh) {
                if (kz6qdh > this['maxArrayLength']) throw new Error('Max length exceeded: array length (' + kz6qdh + ') > maxArrayLength (' + this['maxArrayLength'] + ')');
                this['stack']['push']({
                    'type': 0x0,
                    'size': kz6qdh,
                    'array': new Array(kz6qdh),
                    'position': 0x0
                });
            }, vnsf['prototype']['decodeUtf8String'] = function (l$cbm, zdq6hk) {
                var d58qr;
                if (l$cbm > this['maxStrLength']) throw new Error('Max length exceeded: UTF-8 byte length (' + l$cbm + ') > maxStrLength (' + this['maxStrLength'] + ')');
                if (this['bytes']['byteLength'] < this['pos'] + zdq6hk + l$cbm) throw hzqkd6;
                var svjnzh = this['pos'] + zdq6hk,
                    u2gwf1;
                if (this['stateIsMapKey']() && ((d58qr = this['cachedKeyDecoder']) === null || d58qr === void 0x0 ? void 0x0 : d58qr['canBeCached'](l$cbm))) u2gwf1 = this['cachedKeyDecoder']['decode'](this['bytes'], svjnzh, l$cbm);else r57p3t && l$cbm > m$by ? u2gwf1 = mlcyb(this['bytes'], svjnzh, l$cbm) : u2gwf1 = gue2_(this['bytes'], svjnzh, l$cbm);
                return this['pos'] += zdq6hk + l$cbm, u2gwf1;
            }, vnsf['prototype']['stateIsMapKey'] = function () {
                if (this['stack']['length'] > 0x0) {
                    var fuw1g = this['stack'][this['stack']['length'] - 0x1];
                    return fuw1g['type'] === 0x1;
                }
                return ![];
            }, vnsf['prototype']['decodeBinary'] = function (o0ye, ktq68d) {
                if (o0ye > this['maxBinLength']) throw new Error('Max length exceeded: bin length (' + o0ye + ') > maxBinLength (' + this['maxBinLength'] + ')');
                if (!this['hasRemaining'](o0ye + ktq68d)) throw hzqkd6;
                var c4b0yo = this['pos'] + ktq68d,
                    coyb0 = this['bytes']['subarray'](c4b0yo, c4b0yo + o0ye);
                return this['pos'] += ktq68d + o0ye, coyb0;
            }, vnsf['prototype']['decodeExtension'] = function (t5q78r, ob0y) {
                if (t5q78r > this['maxExtLength']) throw new Error('Max length exceeded: ext length (' + t5q78r + ') > maxExtLength (' + this['maxExtLength'] + ')');
                var _g2wue = this['view']['getInt8'](this['pos'] + ob0y),
                    e_g2wu = this['decodeBinary'](t5q78r, ob0y + 0x1);
                return this['extensionCodec']['decode'](e_g2wu, _g2wue, this['context']);
            }, vnsf['prototype']['lookU8'] = function () {
                return this['view']['getUint8'](this['pos']);
            }, vnsf['prototype']['lookU16'] = function () {
                return this['view']['getUint16'](this['pos']);
            }, vnsf['prototype']['lookU32'] = function () {
                return this['view']['getUint32'](this['pos']);
            }, vnsf['prototype']['readU8'] = function () {
                var qr587t = this['view']['getUint8'](this['pos']);
                return this['pos']++, qr587t;
            }, vnsf['prototype']['readI8'] = function () {
                var x2guf = this['view']['getInt8'](this['pos']);
                return this['pos']++, x2guf;
            }, vnsf['prototype']['readU16'] = function () {
                var dt68r = this['view']['getUint16'](this['pos']);
                return this['pos'] += 0x2, dt68r;
            }, vnsf['prototype']['readI16'] = function () {
                var t58dr = this['view']['getInt16'](this['pos']);
                return this['pos'] += 0x2, t58dr;
            }, vnsf['prototype']['readU32'] = function () {
                var xj1sfn = this['view']['getUint32'](this['pos']);
                return this['pos'] += 0x4, xj1sfn;
            }, vnsf['prototype']['readI32'] = function () {
                var ca = this['view']['getInt32'](this['pos']);
                return this['pos'] += 0x4, ca;
            }, vnsf['prototype']['readU64'] = function () {
                var fxg21s = mc$al(this['view'], this['pos']);
                return this['pos'] += 0x8, fxg21s;
            }, vnsf['prototype']['readI64'] = function () {
                var i7r53p = g12uew(this['view'], this['pos']);
                return this['pos'] += 0x8, i7r53p;
            }, vnsf['prototype']['readF32'] = function () {
                var xvjh = this['view']['getFloat32'](this['pos']);
                return this['pos'] += 0x4, xvjh;
            }, vnsf['prototype']['readF64'] = function () {
                var qr75 = this['view']['getFloat64'](this['pos']);
                return this['pos'] += 0x8, qr75;
            }, vnsf;
        }(),
            fgu2 = {};
        function gfx2s1(d8t6q, am$blc) {
            am$blc === void 0x0 && (am$blc = fgu2);
            var r3t5p = new uoew_4(am$blc['extensionCodec'], am$blc['context'], am$blc['maxStrLength'], am$blc['maxBinLength'], am$blc['maxArrayLength'], am$blc['maxMapLength'], am$blc['maxExtLength']);
            return r3t5p['setBuffer'](d8t6q), r3t5p['decodeSingleSync']();
        }
        var myl = undefined && undefined['__generator'] || function (kvnj, y$lcbm) {
            var r7p5i3 = {
                'label': 0x0,
                'sent': function () {
                    if (cy0b$o[0x0] & 0x1) throw cy0b$o[0x1];
                    return cy0b$o[0x1];
                },
                'trys': [],
                'ops': []
            },
                $cmalb,
                x1sj2,
                cy0b$o,
                _weg4u;
            return _weg4u = {
                'next': $lc0y(0x0),
                'throw': $lc0y(0x1),
                'return': $lc0y(0x2)
            }, typeof Symbol === 'function' && (_weg4u[Symbol['iterator']] = function () {
                return this;
            }), _weg4u;
            function $lc0y(m9lab) {
                return function (_g2weu) {
                    return c_4yo([m9lab, _g2weu]);
                };
            }
            function c_4yo(ue4_) {
                if ($cmalb) throw new TypeError('Generator is already executing.');
                while (r7p5i3) try {
                    if ($cmalb = 0x1, x1sj2 && (cy0b$o = ue4_[0x0] & 0x2 ? x1sj2['return'] : ue4_[0x0] ? x1sj2['throw'] || ((cy0b$o = x1sj2['return']) && cy0b$o['call'](x1sj2), 0x0) : x1sj2['next']) && !(cy0b$o = cy0b$o['call'](x1sj2, ue4_[0x1]))['done']) return cy0b$o;
                    if (x1sj2 = 0x0, cy0b$o) ue4_ = [ue4_[0x0] & 0x2, cy0b$o['value']];
                    switch (ue4_[0x0]) {
                        case 0x0:
                        case 0x1:
                            cy0b$o = ue4_;
                            break;
                        case 0x4:
                            r7p5i3['label']++;
                            return {
                                'value': ue4_[0x1],
                                'done': ![]
                            };
                        case 0x5:
                            r7p5i3['label']++, x1sj2 = ue4_[0x1], ue4_ = [0x0];
                            continue;
                        case 0x7:
                            ue4_ = r7p5i3['ops']['pop'](), r7p5i3['trys']['pop']();
                            continue;
                        default:
                            if (!(cy0b$o = r7p5i3['trys'], cy0b$o = cy0b$o['length'] > 0x0 && cy0b$o[cy0b$o['length'] - 0x1]) && (ue4_[0x0] === 0x6 || ue4_[0x0] === 0x2)) {
                                r7p5i3 = 0x0;
                                continue;
                            }
                            if (ue4_[0x0] === 0x3 && (!cy0b$o || ue4_[0x1] > cy0b$o[0x0] && ue4_[0x1] < cy0b$o[0x3])) {
                                r7p5i3['label'] = ue4_[0x1];
                                break;
                            }
                            if (ue4_[0x0] === 0x6 && r7p5i3['label'] < cy0b$o[0x1]) {
                                r7p5i3['label'] = cy0b$o[0x1], cy0b$o = ue4_;
                                break;
                            }
                            if (cy0b$o && r7p5i3['label'] < cy0b$o[0x2]) {
                                r7p5i3['label'] = cy0b$o[0x2], r7p5i3['ops']['push'](ue4_);
                                break;
                            }
                            if (cy0b$o[0x2]) r7p5i3['ops']['pop']();
                            r7p5i3['trys']['pop']();
                            continue;
                    }
                    ue4_ = y$lcbm['call'](kvnj, r7p5i3);
                } catch (lb9m) {
                    ue4_ = [0x6, lb9m], x1sj2 = 0x0;
                } finally {
                    $cmalb = cy0b$o = 0x0;
                }
                if (ue4_[0x0] & 0x5) throw ue4_[0x1];
                return {
                    'value': ue4_[0x0] ? ue4_[0x1] : void 0x0,
                    'done': !![]
                };
            }
        },
            b9m$l = undefined && undefined['__await'] || function (fn1sjx) {
            return this instanceof b9m$l ? (this['v'] = fn1sjx, this) : new b9m$l(fn1sjx);
        },
            y_o = undefined && undefined['__asyncGenerator'] || function (yo0c$, $lamcb, o4yc0b) {
            if (!Symbol['asyncIterator']) throw new TypeError('Symbol.asyncIterator is not defined.');
            var qkt86d = o4yc0b['apply'](yo0c$, $lamcb || []),
                znvhk6,
                lyc$bm = [];
            return znvhk6 = {}, p75tr3('next'), p75tr3('throw'), p75tr3('return'), znvhk6[Symbol['asyncIterator']] = function () {
                return this;
            }, znvhk6;
            function p75tr3(p7ir3) {
                if (qkt86d[p7ir3]) znvhk6[p7ir3] = function (_oew) {
                    return new Promise(function (hvdz6, fs2j) {
                        lyc$bm['push']([p7ir3, _oew, hvdz6, fs2j]) > 0x1 || rd8qt5(p7ir3, _oew);
                    });
                };
            }
            function rd8qt5(_04oey, bc$oy) {
                try {
                    ufgw21(qkt86d[_04oey](bc$oy));
                } catch (q7r8t5) {
                    ufx2(lyc$bm[0x0][0x3], q7r8t5);
                }
            }
            function ufgw21(dtrq8) {
                dtrq8['value'] instanceof b9m$l ? Promise['resolve'](dtrq8['value']['v'])['then'](q5t87r, gsx1f) : ufx2(lyc$bm[0x0][0x2], dtrq8);
            }
            function q5t87r(vsnhx) {
                rd8qt5('next', vsnhx);
            }
            function gsx1f(zhqdk6) {
                rd8qt5('throw', zhqdk6);
            }
            function ufx2(xgsf1, ir53) {
                if (xgsf1(ir53), lyc$bm['shift'](), lyc$bm['length']) rd8qt5(lyc$bm[0x0][0x0], lyc$bm[0x0][0x1]);
            }
        };
        function xf12sj(tr5q78) {
            return tr5q78[Symbol['asyncIterator']] != null;
        }
        function yco_04(tpr35) {
            if (tpr35 == null) throw new Error('Assertion Failure: value must not be null nor undefined');
        }
        function d6hzk(ip3r75) {
            return y_o(this, arguments, function f2gx() {
                var vfjsn, fuw21g, ocy0_, vjx;
                return myl(this, function (_w4uo) {
                    switch (_w4uo['label']) {
                        case 0x0:
                            vfjsn = ip3r75['getReader'](), _w4uo['label'] = 0x1;
                        case 0x1:
                            _w4uo['trys']['push']([0x1,, 0x9, 0xa]), _w4uo['label'] = 0x2;
                        case 0x2:
                            if (![]) {}
                            return [0x4, b9m$l(vfjsn['read']())];
                        case 0x3:
                            fuw21g = _w4uo['sent'](), ocy0_ = fuw21g['done'], vjx = fuw21g['value'];
                            if (!ocy0_) return [0x3, 0x5];
                            return [0x4, b9m$l(void 0x0)];
                        case 0x4:
                            return [0x2, _w4uo['sent']()];
                        case 0x5:
                            yco_04(vjx);
                            return [0x4, b9m$l(vjx)];
                        case 0x6:
                            return [0x4, _w4uo['sent']()];
                        case 0x7:
                            _w4uo['sent']();
                            return [0x3, 0x2];
                        case 0x8:
                            return [0x3, 0xa];
                        case 0x9:
                            vfjsn['releaseLock']();
                            return [0x7];
                        case 0xa:
                            return [0x2];
                    }
                });
            });
        }
        function zhqd(kznv6) {
            return xf12sj(kznv6) ? kznv6 : d6hzk(kznv6);
        }
        var ux2fg1 = undefined && undefined['__awaiter'] || function (p7t53r, cyb40o, vkzh6, zvshn) {
            function dz86q(fg1s2) {
                return fg1s2 instanceof vkzh6 ? fg1s2 : new vkzh6(function (znkhvj) {
                    znkhvj(fg1s2);
                });
            }
            return new (vkzh6 || (vkzh6 = Promise))(function (dt8q5, ym$cb) {
                function r378(dq86tk) {
                    try {
                        dzkq86(zvshn['next'](dq86tk));
                    } catch (eo_4u) {
                        ym$cb(eo_4u);
                    }
                }
                function f1s2xj(_4ewg) {
                    try {
                        dzkq86(zvshn['throw'](_4ewg));
                    } catch (q8kzd) {
                        ym$cb(q8kzd);
                    }
                }
                function dzkq86(pi37) {
                    pi37['done'] ? dt8q5(pi37['value']) : dz86q(pi37['value'])['then'](r378, f1s2xj);
                }
                dzkq86((zvshn = zvshn['apply'](p7t53r, cyb40o || []))['next']());
            });
        },
            y$ml = undefined && undefined['__generator'] || function (g2ufw, qz6hkd) {
            var kzdq = {
                'label': 0x0,
                'sent': function () {
                    if (kzvn6[0x0] & 0x1) throw kzvn6[0x1];
                    return kzvn6[0x1];
                },
                'trys': [],
                'ops': []
            },
                bylc0,
                o4b0yc,
                kzvn6,
                _oeu4;
            return _oeu4 = {
                'next': weu2g1(0x0),
                'throw': weu2g1(0x1),
                'return': weu2g1(0x2)
            }, typeof Symbol === 'function' && (_oeu4[Symbol['iterator']] = function () {
                return this;
            }), _oeu4;
            function weu2g1(khjv) {
                return function (bcm$) {
                    return j2fxs([khjv, bcm$]);
                };
            }
            function j2fxs(dzq6hk) {
                if (bylc0) throw new TypeError('Generator is already executing.');
                while (kzdq) try {
                    if (bylc0 = 0x1, o4b0yc && (kzvn6 = dzq6hk[0x0] & 0x2 ? o4b0yc['return'] : dzq6hk[0x0] ? o4b0yc['throw'] || ((kzvn6 = o4b0yc['return']) && kzvn6['call'](o4b0yc), 0x0) : o4b0yc['next']) && !(kzvn6 = kzvn6['call'](o4b0yc, dzq6hk[0x1]))['done']) return kzvn6;
                    if (o4b0yc = 0x0, kzvn6) dzq6hk = [dzq6hk[0x0] & 0x2, kzvn6['value']];
                    switch (dzq6hk[0x0]) {
                        case 0x0:
                        case 0x1:
                            kzvn6 = dzq6hk;
                            break;
                        case 0x4:
                            kzdq['label']++;
                            return {
                                'value': dzq6hk[0x1],
                                'done': ![]
                            };
                        case 0x5:
                            kzdq['label']++, o4b0yc = dzq6hk[0x1], dzq6hk = [0x0];
                            continue;
                        case 0x7:
                            dzq6hk = kzdq['ops']['pop'](), kzdq['trys']['pop']();
                            continue;
                        default:
                            if (!(kzvn6 = kzdq['trys'], kzvn6 = kzvn6['length'] > 0x0 && kzvn6[kzvn6['length'] - 0x1]) && (dzq6hk[0x0] === 0x6 || dzq6hk[0x0] === 0x2)) {
                                kzdq = 0x0;
                                continue;
                            }
                            if (dzq6hk[0x0] === 0x3 && (!kzvn6 || dzq6hk[0x1] > kzvn6[0x0] && dzq6hk[0x1] < kzvn6[0x3])) {
                                kzdq['label'] = dzq6hk[0x1];
                                break;
                            }
                            if (dzq6hk[0x0] === 0x6 && kzdq['label'] < kzvn6[0x1]) {
                                kzdq['label'] = kzvn6[0x1], kzvn6 = dzq6hk;
                                break;
                            }
                            if (kzvn6 && kzdq['label'] < kzvn6[0x2]) {
                                kzdq['label'] = kzvn6[0x2], kzdq['ops']['push'](dzq6hk);
                                break;
                            }
                            if (kzvn6[0x2]) kzdq['ops']['pop']();
                            kzdq['trys']['pop']();
                            continue;
                    }
                    dzq6hk = qz6hkd['call'](g2ufw, kzdq);
                } catch (snjvxf) {
                    dzq6hk = [0x6, snjvxf], o4b0yc = 0x0;
                } finally {
                    bylc0 = kzvn6 = 0x0;
                }
                if (dzq6hk[0x0] & 0x5) throw dzq6hk[0x1];
                return {
                    'value': dzq6hk[0x0] ? dzq6hk[0x1] : void 0x0,
                    'done': !![]
                };
            }
        };
        function drq5(p37r5, byo$0) {
            return byo$0 === void 0x0 && (byo$0 = fgu2), ux2fg1(this, void 0x0, void 0x0, function () {
                var gu2w1, fjxnvs;
                return y$ml(this, function (t57r8) {
                    return gu2w1 = zhqd(p37r5), fjxnvs = new uoew_4(byo$0['extensionCodec'], byo$0['context'], byo$0['maxStrLength'], byo$0['maxBinLength'], byo$0['maxArrayLength'], byo$0['maxMapLength'], byo$0['maxExtLength']), [0x2, fjxnvs['decodeSingleAsync'](gu2w1)];
                });
            });
        }
        function fsg1($a9bl, r73p5t) {
            r73p5t === void 0x0 && (r73p5t = fgu2);
            var cly$0 = zhqd($a9bl),
                kd6q8 = new uoew_4(r73p5t['extensionCodec'], r73p5t['context'], r73p5t['maxStrLength'], r73p5t['maxBinLength'], r73p5t['maxArrayLength'], r73p5t['maxMapLength'], r73p5t['maxExtLength']);
            return kd6q8['decodeArrayStream'](cly$0);
        }
        function hvzd(a9b$l, k6hzdv) {
            k6hzdv === void 0x0 && (k6hzdv = fgu2);
            var uo4w_e = zhqd(a9b$l),
                yo40 = new uoew_4(k6hzdv['extensionCodec'], k6hzdv['context'], k6hzdv['maxStrLength'], k6hzdv['maxBinLength'], k6hzdv['maxArrayLength'], k6hzdv['maxMapLength'], k6hzdv['maxExtLength']);
            return yo40['decodeStream'](uo4w_e);
        }
    }]);
});
var gzkdv6h = function () {
    function ycbm$l() {}
    return ycbm$l['prototype']['bytesAvailable'] = function () {
        return this['length'] - this['cursor'];
    }, ycbm$l['prototype']['getUint8'] = function () {
        return this['input'][this['cursor']++];
    }, ycbm$l['prototype']['getUint16'] = function () {
        var t6dkq = this['view']['getUint16'](this['cursor'], this['littleEndian']);
        return this['cursor'] += 0x2, t6dkq;
    }, ycbm$l['prototype']['getUint32'] = function () {
        var t6qr8d = this['view']['getUint32'](this['cursor'], this['littleEndian']);
        return this['cursor'] += 0x4, t6qr8d;
    }, ycbm$l['prototype']['getUTF'] = function (_egw4) {
        var _4wgu = new Array(_egw4);
        for (var w2eg1 = 0x0; w2eg1 < _egw4; ++w2eg1) {
            _4wgu[w2eg1] = String['fromCharCode'](this['input'][this['cursor']++]);
        }
        return _4wgu['join']('');
    }, ycbm$l['prototype']['getBytes'] = function (v6knhz) {
        var gsx = new Uint8Array(this['input']['buffer'], this['input']['byteOffset'] + this['cursor'], v6knhz);
        return this['cursor'] += v6knhz, gsx;
    }, ycbm$l['prototype']['skip'] = function (ue4wg) {
        this['cursor'] += ue4wg;
    }, ycbm$l['prototype']['open'] = function (jhszvn, bcy0o$) {
        bcy0o$ === void 0x0 && (bcy0o$ = ![]), this['cursor'] = 0x0, this['length'] = jhszvn['byteLength'], this['input'] = jhszvn, this['view'] = new DataView(jhszvn['buffer']), this['littleEndian'] = bcy0o$;
    }, ycbm$l['prototype']['close'] = function () {
        this['input'] = null, this['view'] = null;
    }, ycbm$l;
}(),
    gwe40o = function gx1f2sg() {
    function b0yc(t53rp, jnvfsx) {
        this['message'] = t53rp, this['scanLines'] = jnvfsx;
    }
    return b0yc['prototype'] = new Error(), b0yc['prototype']['name'] = 'DNLMarkerError', b0yc['constructor'] = b0yc, b0yc;
}(),
    gxsjvnh = function gpr75t() {
    function lb$cy0(hvjnk) {
        this['message'] = hvjnk;
    }
    return lb$cy0['prototype'] = new Error(), lb$cy0['prototype']['name'] = 'EOIMarkerError', lb$cy0['constructor'] = lb$cy0, lb$cy0;
}(),
    gew_2u = function gu_2wg() {
    var vzn6kh = new Uint8Array([0x0, 0x1, 0x8, 0x10, 0x9, 0x2, 0x3, 0xa, 0x11, 0x18, 0x20, 0x19, 0x12, 0xb, 0x4, 0x5, 0xc, 0x13, 0x1a, 0x21, 0x28, 0x30, 0x29, 0x22, 0x1b, 0x14, 0xd, 0x6, 0x7, 0xe, 0x15, 0x1c, 0x23, 0x2a, 0x31, 0x38, 0x39, 0x32, 0x2b, 0x24, 0x1d, 0x16, 0xf, 0x17, 0x1e, 0x25, 0x2c, 0x33, 0x3a, 0x3b, 0x34, 0x2d, 0x26, 0x1f, 0x27, 0x2e, 0x35, 0x3c, 0x3d, 0x36, 0x2f, 0x37, 0x3e, 0x3f]),
        ycb0l$ = 0xfb1,
        u2gf1 = 0x31f,
        dt6r8q = 0xd4e,
        _oe4 = 0x8e4,
        njx1fs = 0x61f,
        o_0yc4 = 0xec8,
        p3t = 0x16a1,
        hnjzvk = 0xb50;
    function i7p53r(yob$0) {
        var _ug2e = yob$0 === void 0x0 ? {} : yob$0,
            y$b0cl = _ug2e['decodeTransform'],
            ugw1e2 = y$b0cl === void 0x0 ? null : y$b0cl,
            tr5 = _ug2e['colorTransform'],
            mcb$al = tr5 === void 0x0 ? -0x1 : tr5;
        this['_decodeTransform'] = ugw1e2, this['_colorTransform'] = mcb$al;
    }
    function lm9a$b(zd6hkq, gu1we2) {
        var sfxn1 = 0x0,
            g1f2uw = [],
            k6vhd,
            tr85q7,
            mycbl$ = 0x10;
        while (mycbl$ > 0x0 && !zd6hkq[mycbl$ - 0x1]) {
            mycbl$--;
        }
        g1f2uw['push']({
            'children': [],
            'index': 0x0
        });
        var _ye40 = g1f2uw[0x0],
            r87tq5;
        for (k6vhd = 0x0; k6vhd < mycbl$; k6vhd++) {
            for (tr85q7 = 0x0; tr85q7 < zd6hkq[k6vhd]; tr85q7++) {
                _ye40 = g1f2uw['pop'](), _ye40['children'][_ye40['index']] = gu1we2[sfxn1];
                while (_ye40['index'] > 0x0) {
                    _ye40 = g1f2uw['pop']();
                }
                _ye40['index']++, g1f2uw['push'](_ye40);
                while (g1f2uw['length'] <= k6vhd) {
                    g1f2uw['push'](r87tq5 = {
                        'children': [],
                        'index': 0x0
                    }), _ye40['children'][_ye40['index']] = r87tq5['children'], _ye40 = r87tq5;
                }
                sfxn1++;
            }
            k6vhd + 0x1 < mycbl$ && (g1f2uw['push'](r87tq5 = {
                'children': [],
                'index': 0x0
            }), _ye40['children'][_ye40['index']] = r87tq5['children'], _ye40 = r87tq5);
        }
        return g1f2uw[0x0]['children'];
    }
    function _u2w(u2f1gw, t8r5, s1xfn) {
        return 0x40 * ((u2f1gw['blocksPerLine'] + 0x1) * t8r5 + s1xfn);
    }
    function $am9b(co0y_4, t5r78q, dq6k8z, bco0$, egwu_2, o4ew0_, t8r35, tqd85, jvxfs, fxj1ns) {
        fxj1ns === void 0x0 && (fxj1ns = ![]);
        var r5p37 = dq6k8z['mcusPerLine'],
            b$mac = dq6k8z['progressive'],
            ewu_o = t5r78q,
            m$lbac = 0x0,
            o$0byc = 0x0;
        function snhvx() {
            if (o$0byc > 0x0) return o$0byc--, m$lbac >> o$0byc & 0x1;
            m$lbac = co0y_4[t5r78q++];
            if (m$lbac === 0xff) {
                var sfnxjv = co0y_4[t5r78q++];
                if (sfnxjv) {
                    if (sfnxjv === 0xdc && fxj1ns) {
                        t5r78q += 0x2;
                        var z68kq = co0y_4[t5r78q++] << 0x8 | co0y_4[t5r78q++];
                        if (z68kq > 0x0 && z68kq !== dq6k8z['scanLines']) throw new gwe40o('Found DNL marker (0xFFDC) while parsing scan data', z68kq);
                    } else {
                        if (sfnxjv === 0xd9) throw new gxsjvnh('Found EOI marker (0xFFD9) while parsing scan data');
                    }
                    throw new Error('unexpected marker ' + (m$lbac << 0x8 | sfnxjv)['toString'](0x10));
                }
            }
            return o$0byc = 0x7, m$lbac >>> 0x7;
        }
        function u_4gw(f1) {
            var pt3r7 = f1;
            while (!![]) {
                pt3r7 = pt3r7[snhvx()];
                if (typeof pt3r7 === 'number') return pt3r7;
                if (typeof pt3r7 !== 'object') throw new Error('invalid huffman sequence');
            }
        }
        function al9$mb(kh6qdz) {
            var bycl$ = 0x0;
            while (kh6qdz > 0x0) {
                bycl$ = bycl$ << 0x1 | snhvx(), kh6qdz--;
            }
            return bycl$;
        }
        function mblca$(fg1x2s) {
            if (fg1x2s === 0x1) return snhvx() === 0x1 ? 0x1 : -0x1;
            var a$9m = al9$mb(fg1x2s);
            if (a$9m >= 0x1 << fg1x2s - 0x1) return a$9m;
            return a$9m + (-0x1 << fg1x2s) + 0x1;
        }
        function k6zv(vzh6kd, jznkvh) {
            var y4o0e_ = u_4gw(vzh6kd['huffmanTableDC']),
                knhjv = y4o0e_ === 0x0 ? 0x0 : mblca$(y4o0e_);
            vzh6kd['blockData'][jznkvh] = vzh6kd['pred'] += knhjv;
            var _yc04 = 0x1;
            while (_yc04 < 0x40) {
                var zjhnv = u_4gw(vzh6kd['huffmanTableAC']),
                    i3rp7 = zjhnv & 0xf,
                    t58 = zjhnv >> 0x4;
                if (i3rp7 === 0x0) {
                    if (t58 < 0xf) break;
                    _yc04 += 0x10;
                    continue;
                }
                _yc04 += t58;
                var r5t378 = vzn6kh[_yc04];
                vzh6kd['blockData'][jznkvh + r5t378] = mblca$(i3rp7), _yc04++;
            }
        }
        function uew_g4(t8r6q, qhk6) {
            var gwue12 = u_4gw(t8r6q['huffmanTableDC']),
                nhvxsj = gwue12 === 0x0 ? 0x0 : mblca$(gwue12) << jvxfs;
            t8r6q['blockData'][qhk6] = t8r6q['pred'] += nhvxsj;
        }
        function boc0y(kqz68d, gx2s1f) {
            kqz68d['blockData'][gx2s1f] |= snhvx() << jvxfs;
        }
        var r86tqd = 0x0;
        function w4oe_(zh6dk, sxvnhj) {
            if (r86tqd > 0x0) {
                r86tqd--;
                return;
            }
            var lbac = o4ew0_,
                qk86zd = t8r35;
            while (lbac <= qk86zd) {
                var $y0c = u_4gw(zh6dk['huffmanTableAC']),
                    nxfvsj = $y0c & 0xf,
                    uew12 = $y0c >> 0x4;
                if (nxfvsj === 0x0) {
                    if (uew12 < 0xf) {
                        r86tqd = al9$mb(uew12) + (0x1 << uew12) - 0x1;
                        break;
                    }
                    lbac += 0x10;
                    continue;
                }
                lbac += uew12;
                var rp735t = vzn6kh[lbac];
                zh6dk['blockData'][sxvnhj + rp735t] = mblca$(nxfvsj) * (0x1 << jvxfs), lbac++;
            }
        }
        var znhvjs = 0x0,
            f1jxs2;
        function o_04(mab$, yc$) {
            var $9amlb = o4ew0_,
                jvxnsf = t8r35,
                vzjhn = 0x0,
                qhz6k,
                oy0$bc;
            while ($9amlb <= jvxnsf) {
                var sgf2 = yc$ + vzn6kh[$9amlb],
                    zhnsj = mab$['blockData'][sgf2] < 0x0 ? -0x1 : 0x1;
                switch (znhvjs) {
                    case 0x0:
                        oy0$bc = u_4gw(mab$['huffmanTableAC']), qhz6k = oy0$bc & 0xf, vzjhn = oy0$bc >> 0x4;
                        if (qhz6k === 0x0) vzjhn < 0xf ? (r86tqd = al9$mb(vzjhn) + (0x1 << vzjhn), znhvjs = 0x4) : (vzjhn = 0x10, znhvjs = 0x1);else {
                            if (qhz6k !== 0x1) throw new Error('invalid ACn encoding');
                            f1jxs2 = mblca$(qhz6k), znhvjs = vzjhn ? 0x2 : 0x3;
                        }
                        continue;
                    case 0x1:
                    case 0x2:
                        mab$['blockData'][sgf2] ? mab$['blockData'][sgf2] += zhnsj * (snhvx() << jvxfs) : (vzjhn--, vzjhn === 0x0 && (znhvjs = znhvjs === 0x2 ? 0x3 : 0x0));
                        break;
                    case 0x3:
                        mab$['blockData'][sgf2] ? mab$['blockData'][sgf2] += zhnsj * (snhvx() << jvxfs) : (mab$['blockData'][sgf2] = f1jxs2 << jvxfs, znhvjs = 0x0);
                        break;
                    case 0x4:
                        mab$['blockData'][sgf2] && (mab$['blockData'][sgf2] += zhnsj * (snhvx() << jvxfs));
                        break;
                }
                $9amlb++;
            }
            znhvjs === 0x4 && (r86tqd--, r86tqd === 0x0 && (znhvjs = 0x0));
        }
        function trq5d(p7i, y$l0, yo_40e, qz8, e21u) {
            var bo0yc4 = yo_40e / r5p37 | 0x0,
                _e4oy = yo_40e % r5p37,
                nvszjh = bo0yc4 * p7i['v'] + qz8,
                kqz8 = _e4oy * p7i['h'] + e21u,
                nfvjx = _u2w(p7i, nvszjh, kqz8);
            y$l0(p7i, nfvjx);
        }
        function pr7i35(x21s, l$acbm, hvkn6) {
            var oye4_0 = hvkn6 / x21s['blocksPerLine'] | 0x0,
                r758qt = hvkn6 % x21s['blocksPerLine'],
                nzvsj = _u2w(x21s, oye4_0, r758qt);
            l$acbm(x21s, nzvsj);
        }
        var jzvhnk = bco0$['length'],
            blca,
            nxsh,
            k8z6qd,
            pr3t57,
            $clmab,
            _wu2g;
        b$mac ? o4ew0_ === 0x0 ? _wu2g = tqd85 === 0x0 ? uew_g4 : boc0y : _wu2g = tqd85 === 0x0 ? w4oe_ : o_04 : _wu2g = k6zv;
        var mcal$ = 0x0,
            r7pi5,
            pt7r5;
        jzvhnk === 0x1 ? pt7r5 = bco0$[0x0]['blocksPerLine'] * bco0$[0x0]['blocksPerColumn'] : pt7r5 = r5p37 * dq6k8z['mcusPerColumn'];
        var dq6t8, b$lm9a;
        while (mcal$ < pt7r5) {
            var c0yo_4 = egwu_2 ? Math['min'](pt7r5 - mcal$, egwu_2) : pt7r5;
            for (nxsh = 0x0; nxsh < jzvhnk; nxsh++) {
                bco0$[nxsh]['pred'] = 0x0;
            }
            r86tqd = 0x0;
            if (jzvhnk === 0x1) {
                blca = bco0$[0x0];
                for ($clmab = 0x0; $clmab < c0yo_4; $clmab++) {
                    pr7i35(blca, _wu2g, mcal$), mcal$++;
                }
            } else for ($clmab = 0x0; $clmab < c0yo_4; $clmab++) {
                for (nxsh = 0x0; nxsh < jzvhnk; nxsh++) {
                    blca = bco0$[nxsh], dq6t8 = blca['h'], b$lm9a = blca['v'];
                    for (k8z6qd = 0x0; k8z6qd < b$lm9a; k8z6qd++) {
                        for (pr3t57 = 0x0; pr3t57 < dq6t8; pr3t57++) {
                            trq5d(blca, _wu2g, mcal$, k8z6qd, pr3t57);
                        }
                    }
                }
                mcal$++;
            }
            o$0byc = 0x0, r7pi5 = r6qdt8(co0y_4, t5r78q);
            r7pi5 && r7pi5['invalid'] && (warn('decodeScan - unexpected MCU data, current marker is: ' + r7pi5['invalid']), t5r78q = r7pi5['offset']);
            var yob$ = r7pi5 && r7pi5['marker'];
            if (!yob$ || yob$ <= 0xff00) throw new Error('marker was not found');
            if (yob$ >= 0xffd0 && yob$ <= 0xffd7) t5r78q += 0x2;else break;
        }
        return r7pi5 = r6qdt8(co0y_4, t5r78q), r7pi5 && r7pi5['invalid'] && (warn('decodeScan - unexpected Scan data, current marker is: ' + r7pi5['invalid']), t5r78q = r7pi5['offset']), t5r78q - ewu_o;
    }
    function w2gu1(qdt6r, p7t3, jnsx) {
        var u2_we = qdt6r['quantizationTable'],
            cabml = qdt6r['blockData'],
            z8qdk,
            x1gu2,
            w4ug,
            zvns,
            tr87q5,
            _w2g,
            q6rdt,
            ab9m$,
            $0byo,
            c4ob0y,
            wfug21,
            u4eg_w,
            jkvz,
            ca$l,
            qd5r8,
            uf2x1,
            uweo4_;
        if (!u2_we) throw new Error('missing required Quantization Table.');
        for (var hnsjz = 0x0; hnsjz < 0x40; hnsjz += 0x8) {
            $0byo = cabml[p7t3 + hnsjz], c4ob0y = cabml[p7t3 + hnsjz + 0x1], wfug21 = cabml[p7t3 + hnsjz + 0x2], u4eg_w = cabml[p7t3 + hnsjz + 0x3], jkvz = cabml[p7t3 + hnsjz + 0x4], ca$l = cabml[p7t3 + hnsjz + 0x5], qd5r8 = cabml[p7t3 + hnsjz + 0x6], uf2x1 = cabml[p7t3 + hnsjz + 0x7], $0byo *= u2_we[hnsjz];
            if ((c4ob0y | wfug21 | u4eg_w | jkvz | ca$l | qd5r8 | uf2x1) === 0x0) {
                uweo4_ = p3t * $0byo + 0x200 >> 0xa, jnsx[hnsjz] = uweo4_, jnsx[hnsjz + 0x1] = uweo4_, jnsx[hnsjz + 0x2] = uweo4_, jnsx[hnsjz + 0x3] = uweo4_, jnsx[hnsjz + 0x4] = uweo4_, jnsx[hnsjz + 0x5] = uweo4_, jnsx[hnsjz + 0x6] = uweo4_, jnsx[hnsjz + 0x7] = uweo4_;
                continue;
            }
            c4ob0y *= u2_we[hnsjz + 0x1], wfug21 *= u2_we[hnsjz + 0x2], u4eg_w *= u2_we[hnsjz + 0x3], jkvz *= u2_we[hnsjz + 0x4], ca$l *= u2_we[hnsjz + 0x5], qd5r8 *= u2_we[hnsjz + 0x6], uf2x1 *= u2_we[hnsjz + 0x7], z8qdk = p3t * $0byo + 0x80 >> 0x8, x1gu2 = p3t * jkvz + 0x80 >> 0x8, w4ug = wfug21, zvns = qd5r8, tr87q5 = hnjzvk * (c4ob0y - uf2x1) + 0x80 >> 0x8, ab9m$ = hnjzvk * (c4ob0y + uf2x1) + 0x80 >> 0x8, _w2g = u4eg_w << 0x4, q6rdt = ca$l << 0x4, z8qdk = z8qdk + x1gu2 + 0x1 >> 0x1, x1gu2 = z8qdk - x1gu2, uweo4_ = w4ug * o_0yc4 + zvns * njx1fs + 0x80 >> 0x8, w4ug = w4ug * njx1fs - zvns * o_0yc4 + 0x80 >> 0x8, zvns = uweo4_, tr87q5 = tr87q5 + q6rdt + 0x1 >> 0x1, q6rdt = tr87q5 - q6rdt, ab9m$ = ab9m$ + _w2g + 0x1 >> 0x1, _w2g = ab9m$ - _w2g, z8qdk = z8qdk + zvns + 0x1 >> 0x1, zvns = z8qdk - zvns, x1gu2 = x1gu2 + w4ug + 0x1 >> 0x1, w4ug = x1gu2 - w4ug, uweo4_ = tr87q5 * _oe4 + ab9m$ * dt6r8q + 0x800 >> 0xc, tr87q5 = tr87q5 * dt6r8q - ab9m$ * _oe4 + 0x800 >> 0xc, ab9m$ = uweo4_, uweo4_ = _w2g * u2gf1 + q6rdt * ycb0l$ + 0x800 >> 0xc, _w2g = _w2g * ycb0l$ - q6rdt * u2gf1 + 0x800 >> 0xc, q6rdt = uweo4_, jnsx[hnsjz] = z8qdk + ab9m$, jnsx[hnsjz + 0x7] = z8qdk - ab9m$, jnsx[hnsjz + 0x1] = x1gu2 + q6rdt, jnsx[hnsjz + 0x6] = x1gu2 - q6rdt, jnsx[hnsjz + 0x2] = w4ug + _w2g, jnsx[hnsjz + 0x5] = w4ug - _w2g, jnsx[hnsjz + 0x3] = zvns + tr87q5, jnsx[hnsjz + 0x4] = zvns - tr87q5;
        }
        for (var g1fuw = 0x0; g1fuw < 0x8; ++g1fuw) {
            $0byo = jnsx[g1fuw], c4ob0y = jnsx[g1fuw + 0x8], wfug21 = jnsx[g1fuw + 0x10], u4eg_w = jnsx[g1fuw + 0x18], jkvz = jnsx[g1fuw + 0x20], ca$l = jnsx[g1fuw + 0x28], qd5r8 = jnsx[g1fuw + 0x30], uf2x1 = jnsx[g1fuw + 0x38];
            if ((c4ob0y | wfug21 | u4eg_w | jkvz | ca$l | qd5r8 | uf2x1) === 0x0) {
                uweo4_ = p3t * $0byo + 0x2000 >> 0xe, uweo4_ = uweo4_ < -0x7f8 ? 0x0 : uweo4_ >= 0x7e8 ? 0xff : uweo4_ + 0x808 >> 0x4, cabml[p7t3 + g1fuw] = uweo4_, cabml[p7t3 + g1fuw + 0x8] = uweo4_, cabml[p7t3 + g1fuw + 0x10] = uweo4_, cabml[p7t3 + g1fuw + 0x18] = uweo4_, cabml[p7t3 + g1fuw + 0x20] = uweo4_, cabml[p7t3 + g1fuw + 0x28] = uweo4_, cabml[p7t3 + g1fuw + 0x30] = uweo4_, cabml[p7t3 + g1fuw + 0x38] = uweo4_;
                continue;
            }
            z8qdk = p3t * $0byo + 0x800 >> 0xc, x1gu2 = p3t * jkvz + 0x800 >> 0xc, w4ug = wfug21, zvns = qd5r8, tr87q5 = hnjzvk * (c4ob0y - uf2x1) + 0x800 >> 0xc, ab9m$ = hnjzvk * (c4ob0y + uf2x1) + 0x800 >> 0xc, _w2g = u4eg_w, q6rdt = ca$l, z8qdk = (z8qdk + x1gu2 + 0x1 >> 0x1) + 0x1010, x1gu2 = z8qdk - x1gu2, uweo4_ = w4ug * o_0yc4 + zvns * njx1fs + 0x800 >> 0xc, w4ug = w4ug * njx1fs - zvns * o_0yc4 + 0x800 >> 0xc, zvns = uweo4_, tr87q5 = tr87q5 + q6rdt + 0x1 >> 0x1, q6rdt = tr87q5 - q6rdt, ab9m$ = ab9m$ + _w2g + 0x1 >> 0x1, _w2g = ab9m$ - _w2g, z8qdk = z8qdk + zvns + 0x1 >> 0x1, zvns = z8qdk - zvns, x1gu2 = x1gu2 + w4ug + 0x1 >> 0x1, w4ug = x1gu2 - w4ug, uweo4_ = tr87q5 * _oe4 + ab9m$ * dt6r8q + 0x800 >> 0xc, tr87q5 = tr87q5 * dt6r8q - ab9m$ * _oe4 + 0x800 >> 0xc, ab9m$ = uweo4_, uweo4_ = _w2g * u2gf1 + q6rdt * ycb0l$ + 0x800 >> 0xc, _w2g = _w2g * ycb0l$ - q6rdt * u2gf1 + 0x800 >> 0xc, q6rdt = uweo4_, $0byo = z8qdk + ab9m$, uf2x1 = z8qdk - ab9m$, c4ob0y = x1gu2 + q6rdt, qd5r8 = x1gu2 - q6rdt, wfug21 = w4ug + _w2g, ca$l = w4ug - _w2g, u4eg_w = zvns + tr87q5, jkvz = zvns - tr87q5, $0byo = $0byo < 0x10 ? 0x0 : $0byo >= 0xff0 ? 0xff : $0byo >> 0x4, c4ob0y = c4ob0y < 0x10 ? 0x0 : c4ob0y >= 0xff0 ? 0xff : c4ob0y >> 0x4, wfug21 = wfug21 < 0x10 ? 0x0 : wfug21 >= 0xff0 ? 0xff : wfug21 >> 0x4, u4eg_w = u4eg_w < 0x10 ? 0x0 : u4eg_w >= 0xff0 ? 0xff : u4eg_w >> 0x4, jkvz = jkvz < 0x10 ? 0x0 : jkvz >= 0xff0 ? 0xff : jkvz >> 0x4, ca$l = ca$l < 0x10 ? 0x0 : ca$l >= 0xff0 ? 0xff : ca$l >> 0x4, qd5r8 = qd5r8 < 0x10 ? 0x0 : qd5r8 >= 0xff0 ? 0xff : qd5r8 >> 0x4, uf2x1 = uf2x1 < 0x10 ? 0x0 : uf2x1 >= 0xff0 ? 0xff : uf2x1 >> 0x4, cabml[p7t3 + g1fuw] = $0byo, cabml[p7t3 + g1fuw + 0x8] = c4ob0y, cabml[p7t3 + g1fuw + 0x10] = wfug21, cabml[p7t3 + g1fuw + 0x18] = u4eg_w, cabml[p7t3 + g1fuw + 0x20] = jkvz, cabml[p7t3 + g1fuw + 0x28] = ca$l, cabml[p7t3 + g1fuw + 0x30] = qd5r8, cabml[p7t3 + g1fuw + 0x38] = uf2x1;
        }
    }
    function hnz6vk(g12euw, zhsvjn) {
        var _4oy0 = zhsvjn['blocksPerLine'],
            v6hzd = zhsvjn['blocksPerColumn'],
            i35pr7 = new Int16Array(0x40);
        for (var u1w2 = 0x0; u1w2 < v6hzd; u1w2++) {
            for (var wug_4e = 0x0; wug_4e < _4oy0; wug_4e++) {
                var hznk6 = _u2w(zhsvjn, u1w2, wug_4e);
                w2gu1(zhsvjn, hznk6, i35pr7);
            }
        }
        return zhsvjn['blockData'];
    }
    function r6qdt8(gwf1u, kzhd6q, y4_0) {
        y4_0 === void 0x0 && (y4_0 = kzhd6q);
        function vh6kzn(qhzkd6) {
            return gwf1u[qhzkd6] << 0x8 | gwf1u[qhzkd6 + 0x1];
        }
        var _euw4g = gwf1u['length'] - 0x1,
            w1ge2 = y4_0 < kzhd6q ? y4_0 : kzhd6q;
        if (kzhd6q >= _euw4g) return null;
        var cylm$b = vh6kzn(kzhd6q);
        if (cylm$b >= 0xffc0 && cylm$b <= 0xfffe) return {
            'invalid': null,
            'marker': cylm$b,
            'offset': kzhd6q
        };
        var c$0 = vh6kzn(w1ge2);
        while (!(c$0 >= 0xffc0 && c$0 <= 0xfffe)) {
            if (++w1ge2 >= _euw4g) return null;
            c$0 = vh6kzn(w1ge2);
        }
        return {
            'invalid': cylm$b['toString'](0x10),
            'marker': c$0,
            'offset': w1ge2
        };
    }
    return i7p53r['prototype'] = {
        'width': 0x0,
        'height': 0x0,
        'parse': function (h6dqkz, xg21fs) {
            var blc0y$ = (xg21fs === void 0x0 ? {} : xg21fs)['dnlScanLines'],
                zvnjk = blc0y$ === void 0x0 ? null : blc0y$;
            function u_egw2() {
                var t6r8 = h6dqkz[rt6dq] << 0x8 | h6dqkz[rt6dq + 0x1];
                return rt6dq += 0x2, t6r8;
            }
            function kvn() {
                var kh6dv = u_egw2(),
                    nkz6 = rt6dq + kh6dv - 0x2,
                    g2xs = r6qdt8(h6dqkz, nkz6, rt6dq);
                g2xs && g2xs['invalid'] && (warn('readDataBlock - incorrect length, current marker is: ' + g2xs['invalid']), nkz6 = g2xs['offset']);
                var hjvznk = h6dqkz['subarray'](rt6dq, nkz6);
                return rt6dq += hjvznk['length'], hjvznk;
            }
            function vsfxn(wfg21) {
                var xjsfn = Math['ceil'](wfg21['samplesPerLine'] / 0x8 / wfg21['maxH']),
                    hjsn = Math['ceil'](wfg21['scanLines'] / 0x8 / wfg21['maxV']);
                for (var l$ycb = 0x0; l$ycb < wfg21['components']['length']; l$ycb++) {
                    o4u_ew = wfg21['components'][l$ycb];
                    var mlb$y = Math['ceil'](Math['ceil'](wfg21['samplesPerLine'] / 0x8) * o4u_ew['h'] / wfg21['maxH']),
                        hzkv6 = Math['ceil'](Math['ceil'](wfg21['scanLines'] / 0x8) * o4u_ew['v'] / wfg21['maxV']),
                        nkvhz6 = xjsfn * o4u_ew['h'],
                        r35p = hjsn * o4u_ew['v'],
                        p53ir7 = 0x40 * r35p * (nkvhz6 + 0x1);
                    o4u_ew['blockData'] = new Int16Array(p53ir7), o4u_ew['blocksPerLine'] = mlb$y, o4u_ew['blocksPerColumn'] = hzkv6;
                }
                wfg21['mcusPerLine'] = xjsfn, wfg21['mcusPerColumn'] = hjsn;
            }
            var rt6dq = 0x0,
                q8t5d = null,
                boc$ = null,
                eu_g2,
                blmy$,
                fx1s = 0x0,
                wu12f = [],
                ybc04 = [],
                gxuf21 = [],
                $amlbc = u_egw2();
            if ($amlbc !== 0xffd8) throw new Error('SOI not found');
            $amlbc = u_egw2();
            cyo0: while ($amlbc !== 0xffd9) {
                var wue4_, t8d6qr, eo0_y4;
                switch ($amlbc) {
                    case 0xffe0:
                    case 0xffe1:
                    case 0xffe2:
                    case 0xffe3:
                    case 0xffe4:
                    case 0xffe5:
                    case 0xffe6:
                    case 0xffe7:
                    case 0xffe8:
                    case 0xffe9:
                    case 0xffea:
                    case 0xffeb:
                    case 0xffec:
                    case 0xffed:
                    case 0xffee:
                    case 0xffef:
                    case 0xfffe:
                        var hxnsj = kvn();
                        $amlbc === 0xffe0 && hxnsj[0x0] === 0x4a && hxnsj[0x1] === 0x46 && hxnsj[0x2] === 0x49 && hxnsj[0x3] === 0x46 && hxnsj[0x4] === 0x0 && (q8t5d = {
                            'version': {
                                'major': hxnsj[0x5],
                                'minor': hxnsj[0x6]
                            },
                            'densityUnits': hxnsj[0x7],
                            'xDensity': hxnsj[0x8] << 0x8 | hxnsj[0x9],
                            'yDensity': hxnsj[0xa] << 0x8 | hxnsj[0xb],
                            'thumbWidth': hxnsj[0xc],
                            'thumbHeight': hxnsj[0xd],
                            'thumbData': hxnsj['subarray'](0xe, 0xe + 0x3 * hxnsj[0xc] * hxnsj[0xd])
                        });
                        $amlbc === 0xffee && hxnsj[0x0] === 0x41 && hxnsj[0x1] === 0x64 && hxnsj[0x2] === 0x6f && hxnsj[0x3] === 0x62 && hxnsj[0x4] === 0x65 && (boc$ = {
                            'version': hxnsj[0x5] << 0x8 | hxnsj[0x6],
                            'flags0': hxnsj[0x7] << 0x8 | hxnsj[0x8],
                            'flags1': hxnsj[0x9] << 0x8 | hxnsj[0xa],
                            'transformCode': hxnsj[0xb]
                        });
                        break;
                    case 0xffdb:
                        var sxvn = u_egw2(),
                            hxvsjn = sxvn + rt6dq - 0x2,
                            weo_u;
                        while (rt6dq < hxvsjn) {
                            var dqkh = h6dqkz[rt6dq++],
                                c0_4y = new Uint16Array(0x40);
                            if (dqkh >> 0x4 === 0x0) for (t8d6qr = 0x0; t8d6qr < 0x40; t8d6qr++) {
                                weo_u = vzn6kh[t8d6qr], c0_4y[weo_u] = h6dqkz[rt6dq++];
                            } else {
                                if (dqkh >> 0x4 === 0x1) for (t8d6qr = 0x0; t8d6qr < 0x40; t8d6qr++) {
                                    weo_u = vzn6kh[t8d6qr], c0_4y[weo_u] = u_egw2();
                                } else throw new Error('DQT - invalid table spec');
                            }
                            wu12f[dqkh & 0xf] = c0_4y;
                        }
                        break;
                    case 0xffc0:
                    case 0xffc1:
                    case 0xffc2:
                        if (eu_g2) throw new Error('Only single frame JPEGs supported');
                        u_egw2(), eu_g2 = {}, eu_g2['extended'] = $amlbc === 0xffc1, eu_g2['progressive'] = $amlbc === 0xffc2, eu_g2['precision'] = h6dqkz[rt6dq++];
                        var ocyb$0 = u_egw2();
                        eu_g2['scanLines'] = zvnjk || ocyb$0, eu_g2['samplesPerLine'] = u_egw2(), eu_g2['components'] = [], eu_g2['componentIds'] = {};
                        var clam = h6dqkz[rt6dq++],
                            hjvn,
                            dqh6z = 0x0,
                            j1sfx = 0x0;
                        for (wue4_ = 0x0; wue4_ < clam; wue4_++) {
                            hjvn = h6dqkz[rt6dq];
                            var s21gxf = h6dqkz[rt6dq + 0x1] >> 0x4,
                                yb0co = h6dqkz[rt6dq + 0x1] & 0xf;
                            dqh6z < s21gxf && (dqh6z = s21gxf);
                            j1sfx < yb0co && (j1sfx = yb0co);
                            var u4gw_ = h6dqkz[rt6dq + 0x2];
                            eo0_y4 = eu_g2['components']['push']({
                                'h': s21gxf,
                                'v': yb0co,
                                'quantizationId': u4gw_,
                                'quantizationTable': null
                            }), eu_g2['componentIds'][hjvn] = eo0_y4 - 0x1, rt6dq += 0x3;
                        }
                        eu_g2['maxH'] = dqh6z, eu_g2['maxV'] = j1sfx, vsfxn(eu_g2);
                        break;
                    case 0xffc4:
                        var zvjk = u_egw2();
                        for (wue4_ = 0x2; wue4_ < zvjk;) {
                            var rp537i = h6dqkz[rt6dq++],
                                js12xf = new Uint8Array(0x10),
                                qdr8t = 0x0;
                            for (t8d6qr = 0x0; t8d6qr < 0x10; t8d6qr++, rt6dq++) {
                                qdr8t += js12xf[t8d6qr] = h6dqkz[rt6dq];
                            }
                            var e2g_ = new Uint8Array(qdr8t);
                            for (t8d6qr = 0x0; t8d6qr < qdr8t; t8d6qr++, rt6dq++) {
                                e2g_[t8d6qr] = h6dqkz[rt6dq];
                            }
                            wue4_ += 0x11 + qdr8t, (rp537i >> 0x4 === 0x0 ? gxuf21 : ybc04)[rp537i & 0xf] = lm9a$b(js12xf, e2g_);
                        }
                        break;
                    case 0xffdd:
                        u_egw2(), blmy$ = u_egw2();
                        break;
                    case 0xffda:
                        var sjf2x = ++fx1s === 0x1 && !zvnjk;
                        u_egw2();
                        var vjnfx = h6dqkz[rt6dq++],
                            c4ob0 = [],
                            o4u_ew;
                        for (wue4_ = 0x0; wue4_ < vjnfx; wue4_++) {
                            var $m9ab = eu_g2['componentIds'][h6dqkz[rt6dq++]];
                            o4u_ew = eu_g2['components'][$m9ab];
                            var byo$c0 = h6dqkz[rt6dq++];
                            o4u_ew['huffmanTableDC'] = gxuf21[byo$c0 >> 0x4], o4u_ew['huffmanTableAC'] = ybc04[byo$c0 & 0xf], c4ob0['push'](o4u_ew);
                        }
                        var zkv6hd = h6dqkz[rt6dq++],
                            tkqd68 = h6dqkz[rt6dq++],
                            gu1wf = h6dqkz[rt6dq++];
                        try {
                            var cmlb = $am9b(h6dqkz, rt6dq, eu_g2, c4ob0, blmy$, zkv6hd, tkqd68, gu1wf >> 0x4, gu1wf & 0xf, sjf2x);
                            rt6dq += cmlb;
                        } catch (trq68d) {
                            if (trq68d instanceof gwe40o) return warn(trq68d['message'] + ' -- attempting to re-parse the JPEG image.'), this['parse'](h6dqkz, { 'dnlScanLines': trq68d['scanLines'] });else {
                                if (trq68d instanceof gxsjvnh) {
                                    warn(trq68d['message'] + ' -- ignoring the rest of the image data.');
                                    break cyo0;
                                }
                            }
                            throw trq68d;
                        }
                        break;
                    case 0xffdc:
                        rt6dq += 0x4;
                        break;
                    case 0xffff:
                        h6dqkz[rt6dq] !== 0xff && rt6dq--;
                        break;
                    default:
                        if (h6dqkz[rt6dq - 0x3] === 0xff && h6dqkz[rt6dq - 0x2] >= 0xc0 && h6dqkz[rt6dq - 0x2] <= 0xfe) {
                            rt6dq -= 0x3;
                            break;
                        }
                        var lbcm$y = r6qdt8(h6dqkz, rt6dq - 0x2);
                        if (lbcm$y && lbcm$y['invalid']) {
                            warn('JpegImage.parse - unexpected data, current marker is: ' + lbcm$y['invalid']), rt6dq = lbcm$y['offset'];
                            break;
                        }
                        throw new Error('unknown marker ' + $amlbc['toString'](0x10));
                }
                $amlbc = u_egw2();
            }
            this['width'] = eu_g2['samplesPerLine'], this['height'] = eu_g2['scanLines'], this['jfif'] = q8t5d, this['adobe'] = boc$, this['components'] = [];
            for (wue4_ = 0x0; wue4_ < eu_g2['components']['length']; wue4_++) {
                o4u_ew = eu_g2['components'][wue4_];
                var ueg_4w = wu12f[o4u_ew['quantizationId']];
                ueg_4w && (o4u_ew['quantizationTable'] = ueg_4w), this['components']['push']({
                    'output': hnz6vk(eu_g2, o4u_ew),
                    'scaleX': o4u_ew['h'] / eu_g2['maxH'],
                    'scaleY': o4u_ew['v'] / eu_g2['maxV'],
                    'blocksPerLine': o4u_ew['blocksPerLine'],
                    'blocksPerColumn': o4u_ew['blocksPerColumn']
                });
            }
            this['numComponents'] = this['components']['length'];
        },
        '_getLinearizedBlockData': function (ewg2, obyc40, pr57, ri7, sjzvn) {
            pr57 === void 0x0 && (pr57 = ![]);
            ri7 === void 0x0 && (ri7 = 0x0);
            sjzvn === void 0x0 && (sjzvn = null);
            var cymlb = ![],
                kq8d6 = this['width'] / ewg2,
                eu_ = this['height'] / obyc40,
                kdz8q,
                _4ueo,
                mb$,
                zvhjnk,
                tr35p,
                cb$lmy,
                e4wuo_,
                qd8k6,
                zvjshn,
                gu4_we,
                sxnjh = 0x0,
                u_gw4e,
                ew_ = this['components']['length'],
                kvnhz = ewg2 * obyc40 * ew_;
            ew_ == 0x3 && pr57 && (kvnhz = ewg2 * obyc40 * 0x4);
            var fnjvs = new ArrayBuffer(kvnhz + ri7),
                yc_4o = new Uint8ClampedArray(fnjvs, ri7),
                zkdq86 = new Uint32Array(ewg2),
                zhnjkv = 0xfffffff8;
            if (ew_ == 0x3 && pr57) {
                for (e4wuo_ = 0x0; e4wuo_ < ew_; e4wuo_++) {
                    kdz8q = this['components'][e4wuo_], _4ueo = kdz8q['scaleX'] * kq8d6, mb$ = kdz8q['scaleY'] * eu_, sxnjh = e4wuo_, u_gw4e = kdz8q['output'], zvhjnk = kdz8q['blocksPerLine'] + 0x1 << 0x3;
                    for (tr35p = 0x0; tr35p < ewg2; tr35p++) {
                        qd8k6 = 0x0 | tr35p * _4ueo, zkdq86[tr35p] = (qd8k6 & zhnjkv) << 0x3 | qd8k6 & 0x7;
                    }
                    for (cb$lmy = 0x0; cb$lmy < obyc40; cb$lmy++) {
                        qd8k6 = 0x0 | cb$lmy * mb$, gu4_we = zvhjnk * (qd8k6 & zhnjkv) | (qd8k6 & 0x7) << 0x3;
                        for (tr35p = 0x0; tr35p < ewg2; tr35p++) {
                            yc_4o[sxnjh] = u_gw4e[gu4_we + zkdq86[tr35p]], sxnjh += 0x4;
                        }
                    }
                }
                sxnjh = 0x3;
                if (sjzvn != null) {
                    var k8dzq = 0x0;
                    for (cb$lmy = 0x0; cb$lmy < obyc40; cb$lmy++) {
                        for (tr35p = 0x0; tr35p < ewg2; tr35p++) {
                            yc_4o[sxnjh] = sjzvn[k8dzq++], sxnjh += 0x4;
                        }
                    }
                } else for (cb$lmy = 0x0; cb$lmy < obyc40; cb$lmy++) {
                    for (tr35p = 0x0; tr35p < ewg2; tr35p++) {
                        yc_4o[sxnjh] = 0xff, sxnjh += 0x4;
                    }
                }
            } else for (e4wuo_ = 0x0; e4wuo_ < ew_; e4wuo_++) {
                kdz8q = this['components'][e4wuo_], _4ueo = kdz8q['scaleX'] * kq8d6, mb$ = kdz8q['scaleY'] * eu_, sxnjh = e4wuo_, u_gw4e = kdz8q['output'], zvhjnk = kdz8q['blocksPerLine'] + 0x1 << 0x3;
                for (tr35p = 0x0; tr35p < ewg2; tr35p++) {
                    qd8k6 = 0x0 | tr35p * _4ueo, zkdq86[tr35p] = (qd8k6 & zhnjkv) << 0x3 | qd8k6 & 0x7;
                }
                for (cb$lmy = 0x0; cb$lmy < obyc40; cb$lmy++) {
                    qd8k6 = 0x0 | cb$lmy * mb$, gu4_we = zvhjnk * (qd8k6 & zhnjkv) | (qd8k6 & 0x7) << 0x3;
                    for (tr35p = 0x0; tr35p < ewg2; tr35p++) {
                        yc_4o[sxnjh] = u_gw4e[gu4_we + zkdq86[tr35p]], sxnjh += ew_;
                    }
                }
            }
            var nshvx = this['_decodeTransform'];
            !cymlb && ew_ === 0x4 && !nshvx && (nshvx = new Int32Array([-0x100, 0xff, -0x100, 0xff, -0x100, 0xff, -0x100, 0xff]));
            if (nshvx) {
                if (ew_ == 0x3 && pr57) for (e4wuo_ = 0x0; e4wuo_ < kvnhz;) {
                    for (qd8k6 = 0x0, zvjshn = 0x0; qd8k6 < ew_; qd8k6++, e4wuo_++, zvjshn += 0x2) {
                        yc_4o[e4wuo_] = (yc_4o[e4wuo_] * nshvx[zvjshn] >> 0x8) + nshvx[zvjshn + 0x1];
                    }
                    e4wuo_++;
                } else for (e4wuo_ = 0x0; e4wuo_ < kvnhz;) {
                    for (qd8k6 = 0x0, zvjshn = 0x0; qd8k6 < ew_; qd8k6++, e4wuo_++, zvjshn += 0x2) {
                        yc_4o[e4wuo_] = (yc_4o[e4wuo_] * nshvx[zvjshn] >> 0x8) + nshvx[zvjshn + 0x1];
                    }
                }
            }
            return yc_4o;
        },
        get '_isColorConversionNeeded'() {
            if (this['adobe']) return !!this['adobe']['transformCode'];
            if (this['numComponents'] === 0x3) {
                if (this['_colorTransform'] === 0x0) return ![];
                return !![];
            }
            if (this['_colorTransform'] === 0x1) return !![];
            return ![];
        },
        '_convertYccToRgb': function t6q8rd(uo4e, lb$9a) {
            lb$9a === void 0x0 && (lb$9a = ![]);
            var vsxjnh, y0c4_o, e1ug2w, _0yo4e, uxg1f2;
            if (lb$9a) for (_0yo4e = 0x0, uxg1f2 = uo4e['length']; _0yo4e < uxg1f2; _0yo4e += 0x3) {
                vsxjnh = uo4e[_0yo4e], y0c4_o = uo4e[_0yo4e + 0x1], e1ug2w = uo4e[_0yo4e + 0x2], uo4e[_0yo4e] = vsxjnh - 179.456 + 1.402 * e1ug2w, uo4e[_0yo4e + 0x1] = vsxjnh + 135.459 - 0.344 * y0c4_o - 0.714 * e1ug2w, uo4e[_0yo4e + 0x2] = vsxjnh - 226.816 + 1.772 * y0c4_o, _0yo4e++;
            } else for (_0yo4e = 0x0, uxg1f2 = uo4e['length']; _0yo4e < uxg1f2; _0yo4e += 0x3) {
                vsxjnh = uo4e[_0yo4e], y0c4_o = uo4e[_0yo4e + 0x1], e1ug2w = uo4e[_0yo4e + 0x2], uo4e[_0yo4e] = vsxjnh - 179.456 + 1.402 * e1ug2w, uo4e[_0yo4e + 0x1] = vsxjnh + 135.459 - 0.344 * y0c4_o - 0.714 * e1ug2w, uo4e[_0yo4e + 0x2] = vsxjnh - 226.816 + 1.772 * y0c4_o;
            }
            return uo4e;
        },
        '_convertYcckToRgb': function yco_(c0bo4y) {
            var xu2fg,
                gwf2u1,
                q6dtk8,
                ue1w2,
                njszv = 0x0;
            for (var ml$cy = 0x0, njkhv = c0bo4y['length']; ml$cy < njkhv; ml$cy += 0x4) {
                xu2fg = c0bo4y[ml$cy], gwf2u1 = c0bo4y[ml$cy + 0x1], q6dtk8 = c0bo4y[ml$cy + 0x2], ue1w2 = c0bo4y[ml$cy + 0x3], c0bo4y[njszv++] = -122.67195406894 + gwf2u1 * (-0.0000660635669420364 * gwf2u1 + 0.000437130475926232 * q6dtk8 - 0.000054080610064599 * xu2fg + 0.00048449797120281 * ue1w2 - 0.154362151871126) + q6dtk8 * (-0.000957964378445773 * q6dtk8 + 0.000817076911346625 * xu2fg - 0.00477271405408747 * ue1w2 + 1.53380253221734) + xu2fg * (0.000961250184130688 * xu2fg - 0.00266257332283933 * ue1w2 + 0.48357088451265) + ue1w2 * (-0.000336197177618394 * ue1w2 + 0.484791561490776), c0bo4y[njszv++] = 107.268039397724 + gwf2u1 * (0.0000219927104525741 * gwf2u1 - 0.000640992018297945 * q6dtk8 + 0.000659397001245577 * xu2fg + 0.000426105652938837 * ue1w2 - 0.176491792462875) + q6dtk8 * (-0.000778269941513683 * q6dtk8 + 0.00130872261408275 * xu2fg + 0.000770482631801132 * ue1w2 - 0.151051492775562) + xu2fg * (0.00126935368114843 * xu2fg - 0.00265090189010898 * ue1w2 + 0.25802910206845) + ue1w2 * (-0.000318913117588328 * ue1w2 - 0.213742400323665), c0bo4y[njszv++] = -20.810012546947 + gwf2u1 * (-0.000570115196973677 * gwf2u1 - 0.0000263409051004589 * q6dtk8 + 0.0020741088115012 * xu2fg - 0.00288260236853442 * ue1w2 + 0.814272968359295) + q6dtk8 * (-0.0000153496057440975 * q6dtk8 - 0.000132689043961446 * xu2fg + 0.000560833691242812 * ue1w2 - 0.195152027534049) + xu2fg * (0.00174418132927582 * xu2fg - 0.00255243321439347 * ue1w2 + 0.116935020465145) + ue1w2 * (-0.000343531996510555 * ue1w2 + 0.24165260232407);
            }
            return c0bo4y['subarray'](0x0, njszv);
        },
        '_convertYcckToCmyk': function nxjv(m$calb) {
            var ugwe, o04yc_, e4g_uw;
            for (var nfvsx = 0x0, vdzh = m$calb['length']; nfvsx < vdzh; nfvsx += 0x4) {
                ugwe = m$calb[nfvsx], o04yc_ = m$calb[nfvsx + 0x1], e4g_uw = m$calb[nfvsx + 0x2], m$calb[nfvsx] = 434.456 - ugwe - 1.402 * e4g_uw, m$calb[nfvsx + 0x1] = 119.541 - ugwe + 0.344 * o04yc_ + 0.714 * e4g_uw, m$calb[nfvsx + 0x2] = 481.816 - ugwe - 1.772 * o04yc_;
            }
            return m$calb;
        },
        '_convertCmykToRgb': function gx2f1(o4e_0) {
            var t7q5,
                knjvz,
                zjvshn,
                uf2g1w,
                c0by$ = 0x0,
                s12jxf = 0x1 / 0xff;
            for (var y0bc$o = 0x0, h6zvkd = o4e_0['length']; y0bc$o < h6zvkd; y0bc$o += 0x4) {
                t7q5 = o4e_0[y0bc$o] * s12jxf, knjvz = o4e_0[y0bc$o + 0x1] * s12jxf, zjvshn = o4e_0[y0bc$o + 0x2] * s12jxf, uf2g1w = o4e_0[y0bc$o + 0x3] * s12jxf, o4e_0[c0by$++] = 0xff + t7q5 * (-4.387332384609988 * t7q5 + 54.48615194189176 * knjvz + 18.82290502165302 * zjvshn + 212.25662451639585 * uf2g1w - 285.2331026137004) + knjvz * (1.7149763477362134 * knjvz - 5.6096736904047315 * zjvshn - 17.873870861415444 * uf2g1w - 5.497006427196366) + zjvshn * (-2.5217340131683033 * zjvshn - 21.248923337353073 * uf2g1w + 17.5119270841813) - uf2g1w * (21.86122147463605 * uf2g1w + 189.48180835922747), o4e_0[c0by$++] = 0xff + t7q5 * (8.841041422036149 * t7q5 + 60.118027045597366 * knjvz + 6.871425592049007 * zjvshn + 31.159100130055922 * uf2g1w - 79.2970844816548) + knjvz * (-15.310361306967817 * knjvz + 17.575251261109482 * zjvshn + 131.35250912493976 * uf2g1w - 190.9453302588951) + zjvshn * (4.444339102852739 * zjvshn + 9.8632861493405 * uf2g1w - 24.86741582555878) - uf2g1w * (20.737325471181034 * uf2g1w + 187.80453709719578), o4e_0[c0by$++] = 0xff + t7q5 * (0.8842522430003296 * t7q5 + 8.078677503112928 * knjvz + 30.89978309703729 * zjvshn - 0.23883238689178934 * uf2g1w - 14.183576799673286) + knjvz * (10.49593273432072 * knjvz + 63.02378494754052 * zjvshn + 50.606957656360734 * uf2g1w - 112.23884253719248) + zjvshn * (0.03296041114873217 * zjvshn + 115.60384449646641 * uf2g1w - 193.58209356861505) - uf2g1w * (22.33816807309886 * uf2g1w + 180.12613974708367);
            }
            return o4e_0['subarray'](0x0, c0by$);
        },
        'getData': function (t58r73, oy4_0, p57ir, hxvjs, td85rq, co4yb) {
            p57ir === void 0x0 && (p57ir = ![]);
            hxvjs === void 0x0 && (hxvjs = ![]);
            td85rq === void 0x0 && (td85rq = 0x0);
            co4yb === void 0x0 && (co4yb = null);
            if (this['numComponents'] > 0x4) throw new Error('Unsupported color mode');
            var ewo0_ = this['_getLinearizedBlockData'](t58r73, oy4_0, hxvjs, td85rq, co4yb);
            if (this['numComponents'] === 0x1 && p57ir) {
                var zjnvh = ewo0_['length'],
                    xn1s = new Uint8ClampedArray(zjnvh * 0x3),
                    kqd6hz = 0x0;
                for (var x12sg = 0x0; x12sg < zjnvh; x12sg++) {
                    var njs1x = ewo0_[x12sg];
                    xn1s[kqd6hz++] = njs1x, xn1s[kqd6hz++] = njs1x, xn1s[kqd6hz++] = njs1x;
                }
                return xn1s;
            } else {
                if (this['numComponents'] === 0x3 && this['_isColorConversionNeeded']) return this['_convertYccToRgb'](ewo0_, hxvjs);else {
                    if (this['numComponents'] === 0x4) {
                        if (this['_isColorConversionNeeded']) {
                            if (p57ir) return this['_convertYcckToRgb'](ewo0_);
                            return this['_convertYcckToCmyk'](ewo0_);
                        } else {
                            if (p57ir) return this['_convertCmykToRgb'](ewo0_);
                        }
                    }
                }
            }
            return ewo0_;
        }
    }, i7p53r;
}(),
    go0y_4e = function () {
    function s2x1g() {
        this['segments'] = [];
    }
    return s2x1g['create'] = function () {
        var qz8kd;
        return s2x1g['p_sJob'] != null ? (qz8kd = this['p_sJob'], this['p_sJob'] = this['p_sJob']['p_next']) : qz8kd = new s2x1g(), qz8kd;
    }, s2x1g['free'] = function (wo4eu_) {
        wo4eu_['p_next'] = this['p_sJob'], s2x1g['p_sJob'] = wo4eu_, wo4eu_['paleT'] = null, wo4eu_['segments']['length'] = 0x0, wo4eu_['transT'] = null;
    }, s2x1g;
}(),
    gp537ir = function () {
    function c$oy0b() {}
    c$oy0b['init'] = function () {
        c$oy0b['p_setHands'] = {
            'IHDR': c$oy0b['p_IHDR'],
            'PLTE': c$oy0b['p_PLTE'],
            'IDAT': c$oy0b['p_IDAT'],
            'tRNS': c$oy0b['p_TRNS']
        };
    }, c$oy0b['decode'] = function ($bcy0) {
        var l$macb = go0y_4e['create'](),
            clm = new gzkdv6h();
        clm['open']($bcy0), clm['skip'](0x8);
        while (clm['bytesAvailable']() > 0x0) {
            var l0bc = clm['getUint32'](),
                hnv = clm['getUTF'](0x4),
                g1wu2e = c$oy0b['p_setHands'][hnv];
            g1wu2e != null ? g1wu2e(l$macb, clm, l0bc) : clm['skip'](l0bc);
            var wg2e1 = clm['getUint32']();
        }
        clm['close']();
        var r5ip73 = c$oy0b['p_decodePix'](l$macb);
        if (r5ip73 == null) return null;
        var $yclb0 = 0x0,
            b$alcm = 0x0,
            fsjnxv = l$macb['w'],
            vxfjsn = l$macb['h'],
            cbylm = new ArrayBuffer(fsjnxv * vxfjsn * c$oy0b['p_Pix'](l$macb) + 0x8),
            rqd58 = new Uint8Array(cbylm, 0x8),
            j12fx = new DataView(cbylm, 0x0, 0x8);
        j12fx['setUint32'](0x0, fsjnxv), j12fx['setUint32'](0x4, vxfjsn);
        switch (l$macb['colorT']) {
            case 0x3:
                {
                    c$oy0b['p_byPale'](l$macb, r5ip73, rqd58);
                    break;
                }
            case 0x2:
                {
                    switch (l$macb['bits']) {
                        case 0x8:
                            {
                                for (var l9$ab = 0x0; l9$ab < vxfjsn; ++l9$ab) {
                                    b$alcm++;
                                    for (var u1fg = 0x0; u1fg < fsjnxv; ++u1fg) {
                                        rqd58[$yclb0++] = r5ip73[b$alcm++], rqd58[$yclb0++] = r5ip73[b$alcm++], rqd58[$yclb0++] = r5ip73[b$alcm++];
                                    }
                                }
                                break;
                            }
                        case 0x10:
                            {
                                for (var l9$ab = 0x0; l9$ab < vxfjsn; ++l9$ab) {
                                    b$alcm++;
                                    for (var u1fg = 0x0; u1fg < fsjnxv; ++u1fg) {
                                        rqd58[$yclb0++] = (r5ip73[b$alcm] << 0x8 | r5ip73[b$alcm + 0x1]) / 0xffff * 0xff, b$alcm += 0x2, rqd58[$yclb0++] = (r5ip73[b$alcm] << 0x8 | r5ip73[b$alcm + 0x1]) / 0xffff * 0xff, b$alcm += 0x2, rqd58[$yclb0++] = (r5ip73[b$alcm] << 0x8 | r5ip73[b$alcm + 0x1]) / 0xffff * 0xff, b$alcm += 0x2;
                                    }
                                }
                                break;
                            }
                    }
                    break;
                }
            case 0x6:
                {
                    switch (l$macb['bits']) {
                        case 0x8:
                            {
                                for (var l9$ab = 0x0; l9$ab < vxfjsn; ++l9$ab) {
                                    b$alcm++;
                                    for (var u1fg = 0x0; u1fg < fsjnxv; ++u1fg) {
                                        rqd58[$yclb0++] = r5ip73[b$alcm++], rqd58[$yclb0++] = r5ip73[b$alcm++], rqd58[$yclb0++] = r5ip73[b$alcm++], rqd58[$yclb0++] = r5ip73[b$alcm++];
                                    }
                                }
                                break;
                            }
                        case 0x10:
                            {
                                for (var l9$ab = 0x0; l9$ab < vxfjsn; ++l9$ab) {
                                    b$alcm++;
                                    for (var u1fg = 0x0; u1fg < fsjnxv; ++u1fg) {
                                        rqd58[$yclb0++] = (r5ip73[b$alcm] << 0x8 | r5ip73[b$alcm + 0x1]) / 0xffff * 0xff, b$alcm += 0x2, rqd58[$yclb0++] = (r5ip73[b$alcm] << 0x8 | r5ip73[b$alcm + 0x1]) / 0xffff * 0xff, b$alcm += 0x2, rqd58[$yclb0++] = (r5ip73[b$alcm] << 0x8 | r5ip73[b$alcm + 0x1]) / 0xffff * 0xff, b$alcm += 0x2, rqd58[$yclb0++] = (r5ip73[b$alcm] << 0x8 | r5ip73[b$alcm + 0x1]) / 0xffff * 0xff, b$alcm += 0x2;
                                    }
                                }
                                break;
                            }
                    }
                    break;
                }
            default:
                {
                    console['error']('未支持的类型：', l$macb['colorT'], l$macb['bits']);
                    break;
                }
        }
        return go0y_4e['free'](l$macb), cbylm;
    }, c$oy0b['p_IHDR'] = function (y0c4, fuw12, qr5d8) {
        y0c4['w'] = fuw12['getUint32'](), y0c4['h'] = fuw12['getUint32'](), y0c4['bits'] = fuw12['getUint8'](), y0c4['colorT'] = fuw12['getUint8'](), y0c4['compressT'] = fuw12['getUint8'](), y0c4['filterT'] = fuw12['getUint8'](), y0c4['interT'] = fuw12['getUint8']();
    }, c$oy0b['p_PLTE'] = function (tp357r, $cyob, $lmbcy) {
        tp357r['paleT'] = $cyob['getBytes']($lmbcy);
    }, c$oy0b['p_IDAT'] = function ($lamb, l9$bam, qdhk6z) {
        $lamb['segments']['push'](l9$bam['getBytes'](qdhk6z));
    }, c$oy0b['p_TRNS'] = function (gf1xs2, z8dkq6, n1fxjs) {
        gf1xs2['transT'] = z8dkq6['getBytes'](n1fxjs);
    }, c$oy0b['p_Pale'] = function (prt73) {
        var eu21gw = prt73['paleT'],
            y0_4c = prt73['transT'],
            r3875t = eu21gw['length'],
            byc$l0 = new Uint8Array(r3875t / 0x3 * 0x4),
            f12 = 0x0,
            baml = 0x0,
            vknh6z = y0_4c['byteLength'],
            r7i5 = 0x0;
        while (f12 < r3875t) {
            byc$l0[baml++] = eu21gw[f12++], byc$l0[baml++] = eu21gw[f12++], byc$l0[baml++] = eu21gw[f12++], byc$l0[baml++] = r7i5 < vknh6z ? y0_4c[r7i5++] : 0xff;
        }
        return byc$l0;
    };
    ;
    return c$oy0b['p_mergeSeg'] = function (o0_4we) {
        var _e4yo = 0x0;
        for (var cby0$o = 0x0, wgue1 = o0_4we; cby0$o < wgue1['length']; cby0$o++) {
            var a9$ml = wgue1[cby0$o];
            _e4yo += a9$ml['byteLength'];
        }
        var jxvhn = new Uint8Array(_e4yo),
            eou_4 = 0x0;
        for (var nhzkvj = 0x0, a$9ml = o0_4we; nhzkvj < a$9ml['length']; nhzkvj++) {
            var a9$ml = a$9ml[nhzkvj];
            jxvhn['set'](a9$ml, eou_4), eou_4 += a9$ml['length'];
        }
        return new Zlib['Inflate'](jxvhn)['decompress']();
    }, c$oy0b['p_Pix'] = function (e4_gw) {
        var t6dr = 0x3;
        return e4_gw['colorT'] & 0x4 && (t6dr = 0x4), e4_gw['colorT'] == 0x3 && e4_gw['transT'] && (t6dr = 0x4), t6dr;
    }, c$oy0b['p_Bytes'] = function (qt758) {
        var fgxs21 = 0x1;
        switch (qt758['colorT']) {
            case 0x2:
                {
                    fgxs21 = 0x3;
                    break;
                }
            case 0x4:
                {
                    fgxs21 = 0x2;
                    break;
                }
            case 0x6:
                {
                    fgxs21 = 0x4;
                    break;
                }
        }
        var lamb$9 = fgxs21 * qt758['bits'];
        return lamb$9 + 0x7 >> 0x3;
    }, c$oy0b['p_decodePix'] = function (abmlc$) {
        if (abmlc$['interT'] == 0x0) return this['p_decodeInterT'](abmlc$);
        return null;
    }, c$oy0b['p_decodeInterT'] = function (yob0) {
        var ueg_2 = c$oy0b['p_mergeSeg'](yob0['segments']),
            oy0b$c = ueg_2['byteLength'],
            kzdh6q = yob0['h'],
            fux1g = c$oy0b['p_Bytes'](yob0),
            hzv6n = Math['floor']((oy0b$c - kzdh6q) / kzdh6q),
            g_2weu = hzv6n + 0x1,
            rt735p = 0x0,
            ab$l9 = 0x0,
            wu4o = 0x0,
            blac$ = 0x0,
            q8zkd = 0x0,
            mbyc = 0x0,
            y0b$o = 0x0,
            f1js2 = 0x0,
            q5r8t = 0x0,
            l9m$b = 0x0;
        while (ab$l9 < oy0b$c) {
            switch (ueg_2[ab$l9++]) {
                case 0x0:
                    {
                        ab$l9 += hzv6n;
                        break;
                    }
                case 0x1:
                    {
                        ab$l9 += fux1g;
                        for (rt735p = fux1g; rt735p < hzv6n; ++rt735p, ++ab$l9) {
                            ueg_2[ab$l9] = (ueg_2[ab$l9] + ueg_2[ab$l9 - fux1g]) % 0x100;
                        }
                        break;
                    }
                case 0x2:
                    {
                        if (ab$l9 != 0x1) for (rt735p = 0x0; rt735p < hzv6n; ++rt735p, ++ab$l9) {
                            ueg_2[ab$l9] = (ueg_2[ab$l9] + ueg_2[ab$l9 - g_2weu]) % 0x100;
                        }
                        break;
                    }
                case 0x3:
                    {
                        if (ab$l9 == 0x1) {
                            ab$l9 += fux1g;
                            for (rt735p = fux1g; rt735p < hzv6n; ++rt735p, ++ab$l9) {
                                ueg_2[ab$l9] = (ueg_2[ab$l9] + (ueg_2[ab$l9 - fux1g] >> 0x1)) % 0x100;
                            }
                        } else {
                            for (rt735p = 0x0; rt735p < fux1g; ++rt735p, ++ab$l9) {
                                ueg_2[ab$l9] = (ueg_2[ab$l9] + (ueg_2[ab$l9 - g_2weu] >> 0x1)) % 0x100;
                            }
                            for (rt735p = fux1g; rt735p < hzv6n; ++rt735p, ++ab$l9) {
                                ueg_2[ab$l9] = (ueg_2[ab$l9] + (ueg_2[ab$l9 - fux1g] + ueg_2[ab$l9 - g_2weu] >> 0x1)) % 0x100;
                            }
                        }
                        break;
                    }
                case 0x4:
                    {
                        if (fux1g == 0x1) {
                            if (ab$l9 == 0x1) {
                                wu4o = ueg_2[ab$l9++];
                                for (rt735p = 0x1; rt735p < hzv6n; ++rt735p, ++ab$l9) {
                                    l9m$b = wu4o > 0x0 ? wu4o : 0x0, wu4o = ueg_2[ab$l9] = (ueg_2[ab$l9] + l9m$b) % 0x100;
                                }
                            } else {
                                blac$ = ueg_2[ab$l9 - g_2weu], mbyc = blac$, y0b$o = mbyc;
                                y0b$o < 0x0 && (y0b$o = -y0b$o);
                                q5r8t = mbyc;
                                q5r8t < 0x0 && (q5r8t = -q5r8t);
                                l9m$b = mbyc <= 0x0 ? 0x0 : 0x0 <= q5r8t ? blac$ : 0x0, wu4o = ueg_2[ab$l9] = ueg_2[ab$l9] + l9m$b, ab$l9++;
                                for (rt735p = 0x1; rt735p < hzv6n; ++rt735p, ++ab$l9) {
                                    blac$ = ueg_2[ab$l9 - g_2weu], q8zkd = ueg_2[ab$l9 - g_2weu - 0x1], mbyc = wu4o + blac$ - q8zkd, y0b$o = mbyc - wu4o, y0b$o < 0x0 && (y0b$o = -y0b$o), f1js2 = mbyc - blac$, f1js2 < 0x0 && (f1js2 = -f1js2), q5r8t = mbyc - q8zkd, q5r8t < 0x0 && (q5r8t = -q5r8t), l9m$b = y0b$o <= f1js2 && y0b$o <= q5r8t ? wu4o : f1js2 <= q5r8t ? blac$ : q8zkd, wu4o = ueg_2[ab$l9] = (ueg_2[ab$l9] + l9m$b) % 0x100;
                                }
                            }
                        } else {
                            if (ab$l9 == 0x1) {
                                ab$l9 += fux1g, blac$ = q8zkd = 0x0;
                                for (rt735p = fux1g; rt735p < hzv6n; ++rt735p, ++ab$l9) {
                                    wu4o = ueg_2[ab$l9 - fux1g], mbyc = wu4o + blac$ - q8zkd, y0b$o = mbyc - wu4o, y0b$o < 0x0 && (y0b$o = -y0b$o), f1js2 = mbyc - blac$, f1js2 < 0x0 && (f1js2 = -f1js2), q5r8t = mbyc - q8zkd, q5r8t < 0x0 && (q5r8t = -q5r8t), l9m$b = y0b$o <= f1js2 && y0b$o <= q5r8t ? wu4o : f1js2 <= q5r8t ? blac$ : q8zkd, ueg_2[ab$l9] = (ueg_2[ab$l9] + l9m$b) % 0x100;
                                }
                            } else {
                                for (rt735p = 0x0; rt735p < fux1g; ++rt735p, ++ab$l9) {
                                    wu4o = 0x0, blac$ = ueg_2[ab$l9 - g_2weu], q8zkd = 0x0, mbyc = wu4o + blac$ - q8zkd, y0b$o = mbyc - wu4o, y0b$o < 0x0 && (y0b$o = -y0b$o), f1js2 = mbyc - blac$, f1js2 < 0x0 && (f1js2 = -f1js2), q5r8t = mbyc - q8zkd, q5r8t < 0x0 && (q5r8t = -q5r8t), l9m$b = y0b$o <= f1js2 && y0b$o <= q5r8t ? wu4o : f1js2 <= q5r8t ? blac$ : q8zkd, ueg_2[ab$l9] = (ueg_2[ab$l9] + l9m$b) % 0x100;
                                }
                                for (rt735p = fux1g; rt735p < hzv6n; ++rt735p, ++ab$l9) {
                                    wu4o = ueg_2[ab$l9 - fux1g], blac$ = ueg_2[ab$l9 - g_2weu], q8zkd = ueg_2[ab$l9 - g_2weu - fux1g], mbyc = wu4o + blac$ - q8zkd, y0b$o = mbyc - wu4o, y0b$o < 0x0 && (y0b$o = -y0b$o), f1js2 = mbyc - blac$, f1js2 < 0x0 && (f1js2 = -f1js2), q5r8t = mbyc - q8zkd, q5r8t < 0x0 && (q5r8t = -q5r8t), l9m$b = y0b$o <= f1js2 && y0b$o <= q5r8t ? wu4o : f1js2 <= q5r8t ? blac$ : q8zkd, ueg_2[ab$l9] = (ueg_2[ab$l9] + l9m$b) % 0x100;
                                }
                            }
                        }
                        break;
                    }
                default:
                    {
                        console['log']('解析出错：' + yob0['w'] + ',\x20' + yob0['h'] + ',\x20' + fux1g), console['log'](ueg_2['byteLength']);
                        break;
                    }
            }
        }
        return ueg_2;
    }, c$oy0b['p_byPale'] = function (vjhn, tr537p, $bocy0) {
        var t78r5q = 0x0,
            dqkzh6 = 0x0,
            ybc04o = vjhn['w'],
            baclm = vjhn['h'],
            kvhd6z = vjhn['paleT'];
        if (vjhn['transT'] != null) {
            kvhd6z = c$oy0b['p_Pale'](vjhn);
            switch (vjhn['bits']) {
                case 0x1:
                    {
                        for (var irp3 = 0x0; irp3 < baclm; ++irp3) {
                            dqkzh6++;
                            for (var sjfxn1 = 0x0; sjfxn1 < ybc04o; ++sjfxn1) {
                                var w_o0e = (tr537p[dqkzh6 + (sjfxn1 >> 0x3)] & 0x1) * 0x4;
                                $bocy0[t78r5q++] = kvhd6z[w_o0e], $bocy0[t78r5q++] = kvhd6z[w_o0e + 0x1], $bocy0[t78r5q++] = kvhd6z[w_o0e + 0x2], $bocy0[t78r5q++] = kvhd6z[w_o0e + 0x3];
                            }
                            dqkzh6 += ybc04o + 0x7 >> 0x3;
                        }
                        break;
                    }
                case 0x2:
                    {
                        for (var irp3 = 0x0; irp3 < baclm; ++irp3) {
                            dqkzh6++;
                            for (var sjfxn1 = 0x0; sjfxn1 < ybc04o; ++sjfxn1) {
                                var w_o0e = (tr537p[dqkzh6 + (sjfxn1 >> 0x2)] & 0x3) * 0x4;
                                $bocy0[t78r5q++] = kvhd6z[w_o0e], $bocy0[t78r5q++] = kvhd6z[w_o0e + 0x1], $bocy0[t78r5q++] = kvhd6z[w_o0e + 0x2], $bocy0[t78r5q++] = kvhd6z[w_o0e + 0x3];
                            }
                            dqkzh6 += ybc04o + 0x3 >> 0x2;
                        }
                        break;
                    }
                case 0x4:
                    {
                        for (var irp3 = 0x0; irp3 < baclm; ++irp3) {
                            dqkzh6++;
                            for (var sjfxn1 = 0x0; sjfxn1 < ybc04o; ++sjfxn1) {
                                var w_o0e = (tr537p[dqkzh6 + (sjfxn1 >> 0x1)] & 0xf) * 0x4;
                                $bocy0[t78r5q++] = kvhd6z[w_o0e], $bocy0[t78r5q++] = kvhd6z[w_o0e + 0x1], $bocy0[t78r5q++] = kvhd6z[w_o0e + 0x2], $bocy0[t78r5q++] = kvhd6z[w_o0e + 0x3];
                            }
                            dqkzh6 += ybc04o + 0x1 >> 0x1;
                        }
                        break;
                    }
                case 0x8:
                    {
                        for (var irp3 = 0x0; irp3 < baclm; ++irp3) {
                            dqkzh6++;
                            for (var sjfxn1 = 0x0; sjfxn1 < ybc04o; ++sjfxn1) {
                                var w_o0e = tr537p[dqkzh6++] * 0x4;
                                $bocy0[t78r5q++] = kvhd6z[w_o0e], $bocy0[t78r5q++] = kvhd6z[w_o0e + 0x1], $bocy0[t78r5q++] = kvhd6z[w_o0e + 0x2], $bocy0[t78r5q++] = kvhd6z[w_o0e + 0x3];
                            }
                        }
                        break;
                    }
            }
        } else switch (vjhn['bits']) {
            case 0x1:
                {
                    for (var irp3 = 0x0; irp3 < baclm; ++irp3) {
                        dqkzh6++;
                        for (var sjfxn1 = 0x0; sjfxn1 < ybc04o; ++sjfxn1) {
                            var w_o0e = (tr537p[dqkzh6 + (sjfxn1 >> 0x3)] & 0x1) * 0x3;
                            $bocy0[t78r5q++] = kvhd6z[w_o0e], $bocy0[t78r5q++] = kvhd6z[w_o0e + 0x1], $bocy0[t78r5q++] = kvhd6z[w_o0e + 0x2];
                        }
                        dqkzh6 += ybc04o + 0x7 >> 0x3;
                    }
                    break;
                }
            case 0x2:
                {
                    for (var irp3 = 0x0; irp3 < baclm; ++irp3) {
                        dqkzh6++;
                        for (var sjfxn1 = 0x0; sjfxn1 < ybc04o; ++sjfxn1) {
                            var w_o0e = (tr537p[dqkzh6 + (sjfxn1 >> 0x2)] & 0x3) * 0x3;
                            $bocy0[t78r5q++] = kvhd6z[w_o0e], $bocy0[t78r5q++] = kvhd6z[w_o0e + 0x1], $bocy0[t78r5q++] = kvhd6z[w_o0e + 0x2];
                        }
                        dqkzh6 += ybc04o + 0x3 >> 0x2;
                    }
                    break;
                }
            case 0x4:
                {
                    for (var irp3 = 0x0; irp3 < baclm; ++irp3) {
                        dqkzh6++;
                        for (var sjfxn1 = 0x0; sjfxn1 < ybc04o; ++sjfxn1) {
                            var w_o0e = (tr537p[dqkzh6 + (sjfxn1 >> 0x1)] & 0xf) * 0x3;
                            $bocy0[t78r5q++] = kvhd6z[w_o0e], $bocy0[t78r5q++] = kvhd6z[w_o0e + 0x1], $bocy0[t78r5q++] = kvhd6z[w_o0e + 0x2];
                        }
                        dqkzh6 += ybc04o + 0x1 >> 0x1;
                    }
                    break;
                }
            case 0x8:
                {
                    for (var irp3 = 0x0; irp3 < baclm; ++irp3) {
                        dqkzh6++;
                        for (var sjfxn1 = 0x0; sjfxn1 < ybc04o; ++sjfxn1) {
                            var w_o0e = tr537p[dqkzh6++] * 0x3;
                            $bocy0[t78r5q++] = kvhd6z[w_o0e], $bocy0[t78r5q++] = kvhd6z[w_o0e + 0x1], $bocy0[t78r5q++] = kvhd6z[w_o0e + 0x2];
                        }
                    }
                    break;
                }
        }
    }, c$oy0b['p_setHands'] = {}, c$oy0b;
}(),
    gco4_0y = window['DecodeTools'] = function () {
    function lyb() {}
    return lyb['init'] = function () {
        gp537ir['init']();
    }, lyb['decodeBuff'] = function (sf2gx, gwu21f) {
        var y$bclm;
        if (gwu21f) y$bclm = new Zlib['Inflate'](new Uint8Array(sf2gx))['decompress']();else {
            let ug_e2w = new Zlib['Unzip'](new Uint8Array(sf2gx));
            y$bclm = ug_e2w['decompress']('res');
        }
        return y$bclm['buffer']['slice'](y$bclm['byteOffset'], y$bclm['byteLength']);
    }, lyb['decodeImage'] = function (t573r, z6hvkn) {
        z6hvkn === void 0x0 && (z6hvkn = null);
        if (this['isPng'](t573r)) return gp537ir['decode'](t573r);
        var u_2ewg = new gew_2u();
        u_2ewg['parse'](t573r);
        var jnzhkv = u_2ewg['width'],
            nz6kv = u_2ewg['height'],
            vhjknz = lyb['p_needAlpha'](jnzhkv, nz6kv) || z6hvkn != null,
            bmc$yl = u_2ewg['getData'](jnzhkv, nz6kv, !![], vhjknz, 0x8, z6hvkn),
            gw21u = new DataView(bmc$yl['buffer']);
        return gw21u['setUint32'](0x0, jnzhkv), gw21u['setUint32'](0x4, nz6kv), bmc$yl['buffer'];
    }, lyb['p_needAlpha'] = function (ylb$0, vjs) {
        if (ylb$0 % 0x2 != 0x0 || vjs % 0x2 != 0x0) return !![];
        if (ylb$0 == 0x122 && vjs == 0x154) return !![];
        if (ylb$0 == 0x24a && vjs == 0x212) return !![];
        if (ylb$0 == 0x25a && vjs == 0x12e) return !![];
        if (ylb$0 == 0x27e && vjs == 0x1d2) return !![];
        return ![];
    }, lyb['isPng'] = function (u4we_o) {
        var hqkz6d = lyb['PngHeader'];
        for (var uwg2 = 0x0; uwg2 < 0x8; ++uwg2) {
            if (u4we_o[uwg2] != hqkz6d[uwg2]) return ![];
        }
        return !![];
    }, lyb['PngHeader'] = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0xd, 0xa, 0x1a, 0xa]), lyb;
}();
window['Number']['isSafeInteger'] = Number['isSafeInteger'] || function (qzhk6d) {
    return typeof qzhk6d === 'number' && (Math['round'](qzhk6d) === qzhk6d || qzhk6d === -0x1fffffffffffff || qzhk6d === 0x1fffffffffffff) && -0x1fffffffffffff <= qzhk6d && qzhk6d <= 0x1fffffffffffff;
};
var gfwgu21 = function (u_4ge, xjf1n, cyob$0) {
    xjf1n = xjf1n || 0x0, cyob$0 = cyob$0 || this['length'];
    xjf1n < 0x0 && (xjf1n = this['length'] + xjf1n);
    cyob$0 < 0x0 && (cyob$0 = this['length'] + cyob$0);
    if (xjf1n >= this['length']) return;
    cyob$0 > this['length'] && (cyob$0 = this['length']);
    while (xjf1n < cyob$0) {
        this[xjf1n++] = u_4ge;
    }
    return this;
},
    ggu2_we = [Uint8Array, Uint16Array, Uint32Array, Uint8ClampedArray, Int8Array, Int16Array, Int32Array, Float32Array, Float64Array];
for (var ge4gu_w = 0x0, g_ewou4 = ggu2_we; ge4gu_w < g_ewou4['length']; ge4gu_w++) {
    var gl0$bc = g_ewou4[ge4gu_w];
    !gl0$bc['prototype']['fill'] && (gl0$bc['prototype']['fill'] = gfwgu21);
}