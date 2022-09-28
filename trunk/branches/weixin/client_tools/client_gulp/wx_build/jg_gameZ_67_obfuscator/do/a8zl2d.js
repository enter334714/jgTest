var J = wx.h$;
(function (window, document, oq1ak) {
    var _koq1 = oq1ak['un'],
        w4$ijv = oq1ak['uns'],
        y$w4l = oq1ak['static'],
        cke = oq1ak['class'],
        suh3zn = oq1ak['getset'],
        cde9p = oq1ak['__newvec'],
        n0b2 = laya['utils']['Browser'],
        cedk_ = laya['events']['Event'],
        c_dkeo = laya['events']['EventDispatcher'],
        fglyt = laya['resource']['HTMLImage'],
        mkc_d = laya['utils']['Handler'],
        ywj$l = laya['display']['Input'],
        qarb10 = laya['net']['Loader'],
        bko1a = laya['maths']['Matrix'],
        qobar1 = laya['renders']['Render'],
        f9gt5 = laya['utils']['RunDriver'],
        a_ekq = laya['media']['Sound'],
        l$jwi4 = laya['media']['SoundChannel'],
        snu3h8 = laya['media']['SoundManager'],
        zunsh3 = laya['display']['Stage'],
        m95pt = laya['net']['URL'],
        uhzn3s = laya['utils']['Utils'],
        n83s = function () {
        function cpdem() {}
        return cke(cpdem, 'laya.wx.mini.MiniAdpter'), cpdem['getJson'] = function (k_a) {
            return JSON['parse'](k_a);
        }, cpdem['init'] = function (un3zhs, ijl$4w) {
            un3zhs === void 0x0 && (un3zhs = ![]), ijl$4w === void 0x0 && (ijl$4w = ![]);
            if (cpdem['_inited']) return;
            cpdem['window'] = window;
            if (cpdem['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            cpdem['_inited'] = !![], cpdem['isZiYu'] = ijl$4w, cpdem['isPosMsgYu'] = un3zhs, cpdem['EnvConfig'] = {}, !cpdem['isZiYu'] && (c_oake['setNativeFileDir']('/layaairGame'), c_oake['existDir'](c_oake['fileNativeDir'], mkc_d['create'](cpdem, cpdem['onMkdirCallBack']))), cpdem['window']['focus'] = function () {}, oq1ak['getUrlPath'] = function () {}, cpdem['window']['logtime'] = function (usz3n) {}, cpdem['window']['alertTimeLog'] = function (hzsnu3) {}, cpdem['window']['resetShareInfo'] = function () {}, cpdem['window']['CanvasRenderingContext2D'] = function () {}, cpdem['window']['CanvasRenderingContext2D']['prototype'] = cpdem['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], cpdem['window']['document']['body']['appendChild'] = function () {}, cpdem['EnvConfig']['pixelRatioInt'] = 0x0, f9gt5['getPixelRatio'] = cpdem['pixelRatio'], cpdem['_preCreateElement'] = n0b2['createElement'], n0b2['createElement'] = cpdem['createElement'], f9gt5['createShaderCondition'] = cpdem['createShaderCondition'], uhzn3s['parseXMLFromString'] = cpdem['parseXMLFromString'], ywj$l['_createInputElement'] = coka_e['_createInputElement'], cpdem['EnvConfig']['load'] = qarb10['prototype']['load'], qarb10['prototype']['load'] = lj$y['prototype']['load'], cpdem['isZiYu'] && un3zhs && wx['onMessage'](function (pdcme_) {
                pdcme_['isLoad'] && (c_oake['ziyuFileData'][pdcme_['url']] = pdcme_['data']);
            });
        }, cpdem['onMkdirCallBack'] = function (g9f5tp, ecm) {
            if (!g9f5tp) c_oake['filesListObj'] = JSON['parse'](ecm['data']);
        }, cpdem['pixelRatio'] = function () {
            if (!cpdem['EnvConfig']['pixelRatioInt']) try {
                var nhu3 = wx['getSystemInfoSync']();
                return cpdem['EnvConfig']['pixelRatioInt'] = nhu3['pixelRatio'], nhu3 = nhu3, nhu3['pixelRatio'];
            } catch (jl$46y) {}
            return cpdem['EnvConfig']['pixelRatioInt'];
        }, cpdem['createElement'] = function (g6l4fy) {
            if (g6l4fy == 'canvas') {
                var nuz;
                return cpdem['idx'] == 0x1 ? cpdem['isZiYu'] ? (nuz = sharedCanvas, nuz['style'] = {}) : nuz = window['canvas'] : nuz = window['wx']['createCanvas'](), cpdem['idx']++, nuz;
            } else {
                if (g6l4fy == 'textarea' || g6l4fy == 'input') return cpdem['onCreateInput'](g6l4fy);else {
                    if (g6l4fy == 'div') {
                        var yf6t5g = cpdem['_preCreateElement'](g6l4fy);
                        return yf6t5g['contains'] = function (nh3zs) {
                            return null;
                        }, yf6t5g['removeChild'] = function (i$jw4l) {}, yf6t5g;
                    } else return cpdem['_preCreateElement'](g6l4fy);
                }
            }
        }, cpdem['onCreateInput'] = function (rabo) {
            var m5dc9 = cpdem['_preCreateElement'](rabo);
            return m5dc9['focus'] = coka_e['wxinputFocus'], m5dc9['blur'] = coka_e['wxinputblur'], m5dc9['style'] = {}, m5dc9['value'] = 0x0, m5dc9['parentElement'] = {}, m5dc9['placeholder'] = {}, m5dc9['type'] = {}, m5dc9['setColor'] = function (q10rb2) {}, m5dc9['setType'] = function (tm5p9d) {}, m5dc9['setFontFace'] = function (cd_k) {}, m5dc9['addEventListener'] = function (h2n80r) {}, m5dc9['contains'] = function (_1qoka) {
                return null;
            }, m5dc9['removeChild'] = function (ywj4l$) {}, m5dc9;
        }, cpdem['createShaderCondition'] = function (oq1bk) {
            var _oakec = this,
                h38nus = function () {
                var xus7z3 = oq1bk;
                return _oakec[oq1bk['replace']('this.', '')];
            };
            return h38nus;
        }, cpdem['EnvConfig'] = null, cpdem['window'] = null, cpdem['_preCreateElement'] = null, cpdem['_inited'] = ![], cpdem['wxRequest'] = null, cpdem['systemInfo'] = null, cpdem['version'] = '0.0.1', cpdem['isZiYu'] = ![], cpdem['isPosMsgYu'] = ![], cpdem['parseXMLFromString'] = function (t9pf5g) {
            var sun8, kdeco;
            t9pf5g = t9pf5g['replace'](/>\s+</g, '><');
            try {
                sun8 = new window['Parser']['DOMParser']()['parseFromString'](t9pf5g, 'text/xml');
            } catch (q20rb) {
                throw '需要引入xml解析库文件';
            }
            return sun8;
        }, cpdem['idx'] = 0x1, cpdem;
    }(),
        q21b = function () {
        function rn28h0() {}
        cke(rn28h0, 'laya.wx.mini.MiniImage');
        var gfytl = rn28h0['prototype'];
        return gfytl['_loadImage'] = function (unh382) {
            var lf6tyg = this,
                r028hn = ![];
            unh382['indexOf']('layaNativeDir/') == -0x1 && (r028hn = !![], unh382 = m95pt['formatURL'](unh382));
            if (!c_oake['getFileInfo'](unh382)) {
                if (unh382['indexOf']('http://') != -0x1 || unh382['indexOf']('https://') != -0x1) c_oake['downImg'](unh382, new mkc_d(rn28h0, rn28h0['onDownImgCallBack'], [unh382, lf6tyg]), unh382);else rn28h0['onCreateImage'](unh382, lf6tyg, !![]);
            } else rn28h0['onCreateImage'](unh382, lf6tyg, !r028hn);
        }, rn28h0['onDownImgCallBack'] = function (bao1, g5t69, n28u) {
            if (!n28u) rn28h0['onCreateImage'](bao1, g5t69);else g5t69['onError'](null);
        }, rn28h0['onCreateImage'] = function (kbo1qa, fg46, tflg6) {
            tflg6 === void 0x0 && (tflg6 = ![]);
            var qbkoa;
            if (!tflg6) {
                var pt9d = c_oake['getFileInfo'](kbo1qa),
                    li4wj$ = pt9d['md5'];
                qbkoa = c_oake['getFileNativePath'](li4wj$);
            } else qbkoa = kbo1qa;
            if (fg46['imgCache'] == null) fg46['imgCache'] = {};
            var ok_d;
            function cdme_() {
                ok_d['onload'] = null, ok_d['onerror'] = null, delete fg46['imgCache'][kbo1qa];
            }
            ;
            var q021 = function () {
                cdme_(), fg46['onLoaded'](ok_d);
            },
                shun8 = function () {
                cdme_(), fg46['event']('error', 'Load image failed');
            };
            fg46['_type'] == 'nativeimage' ? (ok_d = new n0b2['window']['Image'](), ok_d['crossOrigin'] = '', ok_d['onload'] = q021, ok_d['onerror'] = shun8, ok_d['src'] = qbkoa, fg46['imgCache'][kbo1qa] = ok_d) : new fglyt['create'](qbkoa, {
                'onload': q021,
                'onerror': shun8,
                'onCreate': function (rq0ab) {
                    ok_d = rq0ab, fg46['imgCache'][kbo1qa] = rq0ab;
                }
            });
        }, rn28h0;
    }(),
        coka_e = function () {
        function qb1oar() {}
        return cke(qb1oar, 'laya.wx.mini.MiniInput'), qb1oar['_createInputElement'] = function () {
            ywj$l['_initInput'](ywj$l['area'] = n0b2['createElement']('textarea')), ywj$l['_initInput'](ywj$l['input'] = n0b2['createElement']('input')), ywj$l['inputContainer'] = n0b2['createElement']('div'), ywj$l['inputContainer']['style']['position'] = 'absolute', ywj$l['inputContainer']['style']['zIndex'] = 0x186a0, n0b2['container']['appendChild'](ywj$l['inputContainer']), ywj$l['inputContainer']['setPos'] = function (a_qek, nh2r80) {
                ywj$l['inputContainer']['style']['left'] = a_qek + 'px', ywj$l['inputContainer']['style']['top'] = nh2r80 + 'px';
            }, oq1ak['stage']['on']('resize', null, qb1oar['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (qbr1a) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), snu3h8['_soundClass'] = o_ck, snu3h8['_musicClass'] = o_ck, window['_videoClass'] = eaqko_;
        }, qb1oar['_onStageResize'] = function () {
            var cdo_ = oq1ak['stage']['_canvasTransform']['identity']();
            cdo_['scale'](n0b2['width'] / qobar1['canvas']['width'] / f9gt5['getPixelRatio'](), n0b2['height'] / qobar1['canvas']['height'] / f9gt5['getPixelRatio']());
        }, qb1oar['wxinputFocus'] = function (kdcem_) {
            var xsz7u = ywj$l['inputElement']['target'];
            if (xsz7u && !xsz7u['editable']) return;
            n83s['window']['wx']['offKeyboardConfirm'](), n83s['window']['wx']['offKeyboardInput'](), n83s['window']['wx']['showKeyboard']({
                'defaultValue': xsz7u['text'],
                'maxLength': xsz7u['maxChars'],
                'multiple': xsz7u['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (wl4y$j) {},
                'fail': function (gf956t) {}
            }), n83s['window']['wx']['onKeyboardConfirm'](function (q0b1r) {
                var ilj4$w = q0b1r ? q0b1r['value'] : '';
                xsz7u['text'] = ilj4$w, xsz7u['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), n83s['window']['wx']['onKeyboardInput'](function (zuh3sn) {
                var hsu7z3 = zuh3sn ? zuh3sn['value'] : '';
                if (!xsz7u['multiline']) {
                    if (hsu7z3['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                xsz7u['text'] = hsu7z3, xsz7u['event']('input');
            });
        }, qb1oar['inputEnter'] = function () {
            ywj$l['inputElement']['target']['focus'] = ![];
        }, qb1oar['wxinputblur'] = function () {
            qb1oar['hideKeyboard']();
        }, qb1oar['hideKeyboard'] = function () {
            n83s['window']['wx']['offKeyboardConfirm'](), n83s['window']['wx']['offKeyboardInput'](), n83s['window']['wx']['hideKeyboard']({
                'success': function (tg6lyf) {
                    console['log']('隐藏键盘');
                },
                'fail': function (fylg6) {
                    console['log']('隐藏键盘出错:' + (fylg6 ? fylg6['errMsg'] : ''));
                }
            });
        }, qb1oar;
    }(),
        lj$y = function () {
        function x7usz3() {}
        cke(x7usz3, 'laya.wx.mini.MiniLoader');
        var pm5d9t = x7usz3['prototype'];
        return pm5d9t['load'] = function (kd_cem, r02q1b, _1qkoa, j$ly, n3h8) {
            _1qkoa === void 0x0 && (_1qkoa = !![]), n3h8 === void 0x0 && (n3h8 = ![]);
            var wvi$j4 = this;
            wvi$j4['_url'] = kd_cem;
            if (kd_cem['indexOf']('data:image') === 0x0) wvi$j4['_type'] = r02q1b = 'image';else wvi$j4['_type'] = r02q1b || (r02q1b = wvi$j4['getTypeFromUrl'](kd_cem));
            wvi$j4['_cache'] = _1qkoa, wvi$j4['_data'] = null;
            var _koaqe = 'ascii';
            if (kd_cem['indexOf']('.fnt') != -0x1) _koaqe = 'utf8';else r02q1b == 'arraybuffer' && (_koaqe = '');
            ;
            var cke_oa = uhzn3s['getFileExtension'](kd_cem);
            if (x7usz3['_fileTypeArr']['indexOf'](cke_oa) != -0x1) n83s['EnvConfig']['load']['call'](this, kd_cem, r02q1b, _1qkoa, j$ly, n3h8);else {
                if (!c_oake['getFileInfo'](kd_cem)) {
                    if (kd_cem['indexOf']('layaNativeDir/') != -0x1) {
                        if (n83s['isZiYu']) {
                            var jl$y64 = c_oake['ziyuFileData'][kd_cem];
                            wvi$j4['onLoaded'](jl$y64);
                            return;
                        } else {
                            cosnole['log']('read read'), c_oake['read'](kd_cem, _koaqe, new mkc_d(x7usz3, x7usz3['onReadNativeCallBack'], [_koaqe, kd_cem, r02q1b, _1qkoa, j$ly, n3h8, wvi$j4]));
                            return;
                        }
                    }
                    if (m95pt['rootPath'] == '') var qk_aoe = kd_cem;else qk_aoe = kd_cem['split'](m95pt['rootPath'])[0x0];
                    kd_cem['indexOf']('http://') != -0x1 || kd_cem['indexOf']('https://') != -0x1 ? n83s['EnvConfig']['load']['call'](wvi$j4, kd_cem, r02q1b, _1qkoa, j$ly, n3h8) : c_oake['readFile'](qk_aoe, _koaqe, new mkc_d(x7usz3, x7usz3['onReadNativeCallBack'], [_koaqe, kd_cem, r02q1b, _1qkoa, j$ly, n3h8, wvi$j4]), kd_cem);
                } else n83s['EnvConfig']['load']['call'](this, kd_cem, r02q1b, _1qkoa, j$ly, n3h8);
            }
        }, pm5d9t['resMgrLoad'] = function (tgfp5, n8su3h, or1aq, yg65, cmep9, j$4y, cm5pd) {
            or1aq === void 0x0 && (or1aq = 0x0), yg65 === void 0x0 && (yg65 = ![]), cmep9 === void 0x0 && (cmep9 = ![]), j$4y === void 0x0 && (j$4y = 0x0), cm5pd === void 0x0 && (cm5pd = 0x3), tgfp5['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', tgfp5), n83s['EnvConfig']['resMgrLoad'](tgfp5, (c9m5dp, b0q1ar, tyf5g) => {
                x7usz3['prototype']['resMgrLoadCallBack'](c9m5dp, b0q1ar, tyf5g, n8su3h);
            }, or1aq, yg65, cmep9, j$4y, cm5pd);
        }, pm5d9t['resMgrLoadCallBack'] = function (f6jly4, g9ft5p, epm9d, ylfgt6) {
            console['log']('buff:::', f6jly4, epm9d, c_oake['fileNativeDir'] + '///' + c_oake['fileListName']), ylfgt6(f6jly4, g9ft5p, epm9d);
        }, pm5d9t['clearRes'] = function (qke_oa, kem_cd) {
            kem_cd === void 0x0 && (kem_cd = ![]);
            var s8hn3 = this;
            s8hn3['clearRes'](qke_oa, kem_cd);
            var ek_ocd = c_oake['getFileInfo'](qke_oa);
            if (ek_ocd && (qke_oa['indexOf']('http://') != -0x1 || qke_oa['indexOf']('https://') != -0x1)) {
                var ba1kq = ek_ocd['md5'],
                    jv4w = c_oake['getFileNativePath'](ba1kq);
                c_oake['remove'](jv4w);
            }
        }, x7usz3['onReadNativeCallBack'] = function (c9pe, tl6yg, $v4iwj, t6lgyf, t5yfg, h3n8, yl4f, okcde_, gt5m9) {
            t6lgyf === void 0x0 && (t6lgyf = !![]), h3n8 === void 0x0 && (h3n8 = ![]), okcde_ === void 0x0 && (okcde_ = 0x0);
            if (!okcde_) {
                var _ocake;
                if ($v4iwj == 'json' || $v4iwj == 'atlas') _ocake = n83s['getJson'](gt5m9['data']);else $v4iwj == 'xml' ? _ocake = uhzn3s['parseXMLFromString'](gt5m9['data']) : _ocake = gt5m9['data'];
                yl4f['onLoaded'](_ocake), !n83s['isZiYu'] && n83s['isPosMsgYu'] && $v4iwj != 'arraybuffer' && wx['postMessage']({
                    'url': tl6yg,
                    'data': _ocake,
                    'isLoad': !![]
                });
            } else okcde_ == 0x1 && n83s['EnvConfig']['load']['call'](yl4f, tl6yg, $v4iwj, t6lgyf, t5yfg, h3n8);
        }, y$w4l(x7usz3, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), x7usz3;
    }(),
        c_oake = function (l$wj4i) {
        function dpe9mc() {
            dpe9mc['__super']['call'](this);
            ;
        }
        return cke(dpe9mc, 'laya.wx.mini.MiniFileMgr', l$wj4i), dpe9mc['isLoadFile'] = function (ra10) {
            return dpe9mc['_fileTypeArr']['indexOf'](ra10) != -0x1 ? !![] : ![];
        }, dpe9mc['getFileInfo'] = function (_kcd) {
            var arq1b = _kcd['split']('?')[0x0],
                jivw4 = dpe9mc['filesListObj'][arq1b];
            if (jivw4 == null) return null;else return jivw4;
            return null;
        }, dpe9mc['onFileUpdate'] = function (gm59pt, r1abo) {
            var e_kdco = gm59pt['split']('/'),
                hrn0 = e_kdco[e_kdco['length'] - 0x1],
                uzsn = dpe9mc['getFileInfo'](r1abo);
            if (uzsn == null) dpe9mc['onSaveFile'](r1abo, hrn0);else {
                if (uzsn['readyUrl'] != r1abo) dpe9mc['remove'](hrn0, r1abo);
            }
        }, dpe9mc['exits'] = function (s8nh3, uzs37h) {
            var t5fyg = dpe9mc['getFileNativePath'](s8nh3);
            dpe9mc['fs']['getFileInfo']({
                'filePath': t5fyg,
                'success': function (pm9gt5) {
                    uzs37h != null && uzs37h['runWith']([0x0, pm9gt5]);
                },
                'fail': function (_emdcp) {
                    uzs37h != null && uzs37h['runWith']([0x1, _emdcp]);
                }
            });
        }, dpe9mc['read'] = function (unsz3h, eodck_, ty6gfl, r208) {
            eodck_ === void 0x0 && (eodck_ = 'ascill'), r208 === void 0x0 && (r208 = '');
            var p9fg;
            r208 != '' ? p9fg = dpe9mc['getFileNativePath'](unsz3h) : p9fg = unsz3h, dpe9mc['fs']['readFile']({
                'filePath': p9fg,
                'encoding': eodck_,
                'success': function (qk1_) {
                    ty6gfl != null && ty6gfl['runWith']([0x0, qk1_]);
                },
                'fail': function (r1qba0) {
                    if (r1qba0 && r208 != '') dpe9mc['down'](r208, eodck_, ty6gfl, r208);else ty6gfl != null && ty6gfl['runWith']([0x1]);
                }
            });
        }, dpe9mc['readNativeFile'] = function (ylt6g, b1raoq) {
            dpe9mc['fs']['readFile']({
                'filePath': ylt6g,
                'encoding': '',
                'success': function (zsu7x) {
                    b1raoq != null && b1raoq['runWith']([0x0]);
                },
                'fail': function (fp9gt) {
                    b1raoq != null && b1raoq['runWith']([0x1]);
                }
            });
        }, dpe9mc['down'] = function (dkc_oe, ekao, yl64f, ly6gf) {
            ekao === void 0x0 && (ekao = 'ascill'), ly6gf === void 0x0 && (ly6gf = '');
            var ux7s = dpe9mc['getFileNativePath'](ly6gf),
                c9pmd = dpe9mc['wxdown']({
                'url': dkc_oe,
                'filePath': ux7s,
                'success': function (lgyt6f) {
                    if (lgyt6f['statusCode'] === 0xc8) dpe9mc['readFile'](lgyt6f['filePath'], ekao, yl64f, ly6gf);
                },
                'fail': function (dm_cek) {
                    yl64f != null && yl64f['runWith']([0x1, dm_cek]);
                }
            });
            c9pmd['onProgressUpdate'](function (l4i$w) {
                yl64f != null && yl64f['runWith']([0x2, l4i$w['progress']]);
            });
        }, dpe9mc['readFile'] = function (p5g9f, j4il$w, fl4g6y, $yjl64) {
            j4il$w === void 0x0 && (j4il$w = 'ascill'), $yjl64 === void 0x0 && ($yjl64 = ''), dpe9mc['fs']['readFile']({
                'filePath': p5g9f,
                'encoding': j4il$w,
                'success': function (hs3uz7) {
                    if (p5g9f['indexOf']('http://') != -0x1 || p5g9f['indexOf']('https://') != -0x1) dpe9mc['onFileUpdate'](p5g9f, $yjl64);
                    fl4g6y != null && fl4g6y['runWith']([0x0, hs3uz7]);
                },
                'fail': function (t9p5d) {
                    if (t9p5d) fl4g6y != null && fl4g6y['runWith']([0x1, t9p5d]);
                }
            });
        }, dpe9mc['downImg'] = function (lj6$y, lw$, aoec) {
            aoec === void 0x0 && (aoec = '');
            var ko_1aq = dpe9mc['wxdown']({
                'url': lj6$y,
                'success': function (dmp_) {
                    dmp_['statusCode'] === 0xc8 && dpe9mc['copyFile'](dmp_['tempFilePath'], aoec, lw$);
                },
                'fail': function (j$l) {
                    lw$ != null && lw$['runWith']([0x1, j$l]);
                }
            });
        }, dpe9mc['copyFile'] = function (rn802b, d_kemc, xsuz3) {
            var $jv4wi = rn802b['split']('/'),
                dp9cm = $jv4wi[$jv4wi['length'] - 0x1],
                h3sunz = d_kemc['split']('?')[0x0],
                uh3s8 = dpe9mc['getFileInfo'](d_kemc),
                oke_ac = dpe9mc['getFileNativePath'](dp9cm);
            dpe9mc['fs']['copyFile']({
                'srcPath': rn802b,
                'destPath': oke_ac,
                'success': function (p9mt) {
                    if (!uh3s8) dpe9mc['onSaveFile'](d_kemc, dp9cm), xsuz3 != null && xsuz3['runWith']([0x0]);else {
                        if (uh3s8['readyUrl'] != d_kemc) dpe9mc['remove'](dp9cm, d_kemc, xsuz3);
                    }
                },
                'fail': function (xs3u7z) {
                    xsuz3 != null && xsuz3['runWith']([0x1, xs3u7z]);
                }
            });
        }, dpe9mc['getFileNativePath'] = function (p_mce) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + p_mce;
        }, dpe9mc['remove'] = function (_kcdeo, p9cmd5, cde_ko) {
            p9cmd5 === void 0x0 && (p9cmd5 = '');
            var dec_ko = dpe9mc['getFileInfo'](p9cmd5),
                g46yfl = dpe9mc['getFileNativePath'](dec_ko['md5']);
            oq1ak['loader']['clearRes'](dec_ko['readyUrl']), dpe9mc['fs']['unlink']({
                'filePath': g46yfl,
                'success': function (ptgm59) {
                    if (p9cmd5 != '') dpe9mc['onSaveFile'](p9cmd5, _kcdeo);
                    cde_ko != null && cde_ko['runWith']([0x0]);
                },
                'fail': function (koae_q) {}
            });
        }, dpe9mc['onSaveFile'] = function (_kqoa1, de_o) {
            var g56tf = _kqoa1['split']('?')[0x0];
            dpe9mc['filesListObj'][g56tf] = {
                'md5': de_o,
                'readyUrl': _kqoa1
            }, dpe9mc['fs']['writeFile']({
                'filePath': dpe9mc['fileNativeDir'] + '/' + dpe9mc['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](dpe9mc['filesListObj']),
                'success': function (_koeac) {
                    console['log']('写入测试测试成功：', _koeac);
                },
                'fail': function (nh80) {
                    console['log']('写入测试测试失败：', nh80);
                }
            });
        }, dpe9mc['existDir'] = function (ftlg6, tdpm9) {
            dpe9mc['fs']['mkdir']({
                'dirPath': ftlg6,
                'success': function (u7hzs3) {
                    tdpm9 != null && tdpm9['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (o_ekcd) {
                    if (o_ekcd['errMsg']['indexOf']('file already exists') != -0x1) dpe9mc['readSync'](dpe9mc['fileListName'], 'utf8', tdpm9);else tdpm9 != null && tdpm9['runWith']([0x1, o_ekcd]);
                }
            });
        }, dpe9mc['readSync'] = function (d9tp5, nb08r, ek_aq, q1abk) {
            nb08r === void 0x0 && (nb08r = 'ascill'), q1abk === void 0x0 && (q1abk = '');
            var _qko1 = dpe9mc['getFileNativePath'](d9tp5),
                qoa1br;
            try {
                qoa1br = dpe9mc['fs']['readFileSync'](_qko1), ek_aq != null && ek_aq['runWith']([0x0, { 'data': qoa1br }]);
            } catch (j$) {
                ek_aq != null && ek_aq['runWith']([0x1]);
            }
        }, dpe9mc['readCache'] = function () {}, dpe9mc['writeCache'] = function (r0b128) {
            var lfgyt = readyUrl['split']('?')[0x0];
            dpe9mc['filesListObj'][lfgyt] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, dpe9mc['fs']['writeFile']({
                'filePath': dpe9mc['fileNativeDir'] + '/' + dpe9mc['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](dpe9mc['filesListObj']),
                'success': function (b02r8) {},
                'fail': function (hr82) {}
            });
        }, dpe9mc['setNativeFileDir'] = function (oa_ec) {
            dpe9mc['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + oa_ec;
        }, dpe9mc['filesListObj'] = {}, dpe9mc['fileNativeDir'] = null, dpe9mc['fileListName'] = 'layaairfiles.txt', dpe9mc['ziyuFileData'] = {}, y$w4l(dpe9mc, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), dpe9mc;
    }(c_dkeo),
        o_ck = function (g5m9t) {
        function nh2r8() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], nh2r8['__super']['call'](this), this['_sound'] = nh2r8['_createSound'](), this['_chanell'] = new dmt95p(this['_sound']);
        }
        cke(nh2r8, 'laya.wx.mini.MiniSound', g5m9t);
        var _kce = nh2r8['prototype'];
        return _kce['load'] = function (aok1q_) {
            var n3uz = this;
            aok1q_ = m95pt['formatURL'](aok1q_), this['url'] = aok1q_;
            if (nh2r8['_audioCache'][aok1q_]) {
                this['event']('complete');
                return;
            }
            function cmd5p() {
                if (nh2r8['_null'] != undefined) n3uz['_sound']['onCanplay'](nh2r8['_null']), n3uz['_sound']['onError'](nh2r8['_null']);else try {
                    n3uz['_sound']['onCanplay'](null), n3uz['_sound']['onError'](null), nh2r8['_null'] = null;
                } catch (kqb1oa) {
                    console['warn']('[wxmini] _clearSound:' + kqb1oa), n3uz['_sound']['onCanplay'](j4i$lw), n3uz['_sound']['onError'](j4i$lw), nh2r8['_null'] = j4i$lw;
                }
            }
            function jli4$w() {
                l4f6yj['loaded'] = !![], l4f6yj['event']('complete'), nh2r8['_audioCache'][l4f6yj['url']] = l4f6yj;
            }
            function kd_c(u3zs7) {
                console['error']('errCode=' + u3zs7['errCode'] + '  errMsg=' + u3zs7['errMsg']), l4f6yj['event']('error');
            }
            function j4i$lw() {}
            this['_sound']['onCanplay'](jli4$w), this['_sound']['onError'](kd_c), this['_sound']['src'] = aok1q_;
            var l4f6yj = this;
        }, _kce['play'] = function (pmec9d, zuhns) {
            pmec9d === void 0x0 && (pmec9d = 0x0), zuhns === void 0x0 && (zuhns = 0x0);
            var oq_1ak, j4;
            if (this['url'] == snu3h8['_tMusic']) {
                if (!nh2r8['_musicAudio']) nh2r8['_musicAudio'] = this['_sound'];
                oq_1ak = nh2r8['_musicAudio'], j4 = this['_chanell'];
            } else oq_1ak = this['_sound'], j4 = this['_chanell'];
            return oq_1ak['src'] = this['url'], oq_1ak['startTime'] = 0x0, j4['isStopped'] && (j4['url'] = this['url'], j4['loops'] = zuhns, j4['startTime'] = pmec9d, j4['play'](), snu3h8['addChannel'](j4)), j4;
        }, _kce['dispose'] = function () {
            var epm9 = nh2r8['_audioCache'][this['url']];
            epm9 && (epm9['src'] = '', delete nh2r8['_audioCache'][this['url']]);
        }, suh3zn(0x0, _kce, 'duration', function () {
            return this['_sound']['duration'];
        }), nh2r8['_createSound'] = function () {
            nh2r8['_id']++;
            var zus3h = n83s['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return zus3h;
        }, nh2r8['_musicAudio'] = null, nh2r8['_id'] = 0x0, nh2r8['_audioCache'] = {}, nh2r8['_null'] = undefined, nh2r8;
    }(c_dkeo),
        dmt95p = function (r0hn8) {
        function lyw4$(epd) {
            this['_audio'] = null, this['_onEnd'] = null, lyw4$['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = epd, this['_onEnd'] = uhzn3s['bind'](this['__onEnd'], this), epd['onEnded'](this['_onEnd']);
        }
        cke(lyw4$, 'laya.wx.mini.MiniSoundChannel', r0hn8);
        var l$6y = lyw4$['prototype'];
        return l$6y['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (oq1ak['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, l$6y['__onNull'] = function () {}, l$6y['play'] = function () {
            this['isStopped'] = ![], snu3h8['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, l$6y['stop'] = function () {
            this['isStopped'] = !![], snu3h8['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, l$6y['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, l$6y['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], snu3h8['addChannel'](this), this['_audio']['play']();
        }, suh3zn(0x0, l$6y, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), suh3zn(0x0, l$6y, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), suh3zn(0x0, l$6y, 'volume', function () {
            return 0x1;
        }, function (cp_dm) {}), lyw4$['_null'] = undefined, lyw4$;
    }(l$jwi4),
        eaqko_ = function () {
        function su3hz7() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = n83s['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        cke(su3hz7, 'laya.wx.mini.MiniVideo');
        var j4$iv = su3hz7['prototype'];
        return j4$iv['on'] = function (ba1rq, md9pec, unsh83) {
            if (ba1rq == 'loadedmetadata') this['onPlayFunc'] = unsh83['bind'](md9pec), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else ba1rq == 'ended' && (this['onEndedFunC'] = unsh83['bind'](md9pec), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, j4$iv['onTimeUpdateFunc'] = function (a1qkbo) {
            this['position'] = a1qkbo['position'], this['_duration'] = a1qkbo['duration'];
        }, j4$iv['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, j4$iv['onended'] = function (jivw$4, rb10) {
            this['onEndedFunC'] = rb10['bind'](jivw$4), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, j4$iv['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, j4$iv['off'] = function (yl64$, ft6y, r2b80n) {
            if (yl64$ == 'loadedmetadata') this['onPlayFunc'] = r2b80n['bind'](ft6y), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else yl64$ == 'ended' && (this['onEndedFunC'] = r2b80n['bind'](ft6y), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, j4$iv['load'] = function (pdm9e) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = pdm9e;
        }, j4$iv['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, j4$iv['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, j4$iv['size'] = function (g5tmp, h8nr0) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = g5tmp, this['videoElement']['height'] = h8nr0;
        }, j4$iv['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, j4$iv['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, suh3zn(0x0, j4$iv, 'duration', function () {
            return this['_duration'];
        }), suh3zn(0x0, j4$iv, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (ep_cmd) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = ep_cmd;
        }), suh3zn(0x0, j4$iv, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), suh3zn(0x0, j4$iv, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), suh3zn(0x0, j4$iv, 'ended', function () {
            return this['videoend'];
        }), suh3zn(0x0, j4$iv, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (edk_) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = edk_;
        }), suh3zn(0x0, j4$iv, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (kaec_) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = kaec_;
        }), suh3zn(0x0, j4$iv, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (t9pgm) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = t9pgm;
        }), suh3zn(0x0, j4$iv, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), suh3zn(0x0, j4$iv, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (wjiv4) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = wjiv4;
        }), suh3zn(0x0, j4$iv, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (q1arb) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = q1arb;
        }), suh3zn(0x0, j4$iv, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), suh3zn(0x0, j4$iv, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (f4jy) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = f4jy;
        }), suh3zn(0x0, j4$iv, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (sx73z) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = sx73z;
        }), suh3zn(0x0, j4$iv, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (y4lgf) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = y4lgf;
        }), su3hz7;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var ytg6f in Laya) {
        var nuzh3 = Laya[ytg6f];
        nuzh3 && nuzh3['__isclass'] && (exports[ytg6f] = nuzh3);
    }
});