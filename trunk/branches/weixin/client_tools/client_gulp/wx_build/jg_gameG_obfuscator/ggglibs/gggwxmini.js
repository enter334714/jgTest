var m = wx.$g;
(function (window, document, tbf_) {
    var d3o2 = tbf_['un'],
        ibaxp = tbf_['uns'],
        fto43_ = tbf_['static'],
        b_0pi5 = tbf_['class'],
        xika1h = tbf_['getset'],
        h5aib = tbf_['__newvec'],
        xa5ib = laya['utils']['Browser'],
        r2j6$u = laya['events']['Event'],
        iaxkh1 = laya['events']['EventDispatcher'],
        pbaix5 = laya['resource']['HTMLImage'],
        x1ihak = laya['utils']['Handler'],
        o4t3dz = laya['display']['Input'],
        t0_p = laya['net']['Loader'],
        yvqg7 = laya['maths']['Matrix'],
        hyk1x = laya['renders']['Render'],
        rj$6 = laya['utils']['RunDriver'],
        tdfo43 = laya['media']['Sound'],
        d6j2zr = laya['media']['SoundChannel'],
        hwk1x = laya['media']['SoundManager'],
        yvqe7g = laya['display']['Stage'],
        heywk = laya['net']['URL'],
        _b0f = laya['utils']['Utils'],
        t0p_f4 = function () {
        function ixbh5a() {}
        return b_0pi5(ixbh5a, 'laya.wx.mini.MiniAdpter'), ixbh5a['getJson'] = function (r26ju$) {
            return JSON['parse'](r26ju$);
        }, ixbh5a['init'] = function (u$m6rj, qywev7) {
            u$m6rj === void 0x0 && (u$m6rj = ![]), qywev7 === void 0x0 && (qywev7 = ![]);
            if (ixbh5a['_inited']) return;
            ixbh5a['window'] = window;
            if (ixbh5a['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            ixbh5a['_inited'] = !![], ixbh5a['isZiYu'] = qywev7, ixbh5a['isPosMsgYu'] = u$m6rj, ixbh5a['EnvConfig'] = {}, !ixbh5a['isZiYu'] && (v7qyeg['setNativeFileDir']('/layaairGame'), v7qyeg['existDir'](v7qyeg['fileNativeDir'], x1ihak['create'](ixbh5a, ixbh5a['onMkdirCallBack']))), ixbh5a['window']['focus'] = function () {}, tbf_['getUrlPath'] = function () {}, ixbh5a['window']['logtime'] = function (f0_t4p) {}, ixbh5a['window']['alertTimeLog'] = function (u$jrm6) {}, ixbh5a['window']['resetShareInfo'] = function () {}, ixbh5a['window']['CanvasRenderingContext2D'] = function () {}, ixbh5a['window']['CanvasRenderingContext2D']['prototype'] = ixbh5a['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], ixbh5a['window']['document']['body']['appendChild'] = function () {}, ixbh5a['EnvConfig']['pixelRatioInt'] = 0x0, rj$6['getPixelRatio'] = ixbh5a['pixelRatio'], ixbh5a['_preCreateElement'] = xa5ib['createElement'], xa5ib['createElement'] = ixbh5a['createElement'], rj$6['createShaderCondition'] = ixbh5a['createShaderCondition'], _b0f['parseXMLFromString'] = ixbh5a['parseXMLFromString'], o4t3dz['_createInputElement'] = c9gsl['_createInputElement'], ixbh5a['EnvConfig']['load'] = t0_p['prototype']['load'], t0_p['prototype']['load'] = c7gsv['prototype']['load'], ixbh5a['isZiYu'] && u$m6rj && wx['onMessage'](function (dzr6o2) {
                dzr6o2['isLoad'] && (v7qyeg['ziyuFileData'][dzr6o2['url']] = dzr6o2['data']);
            });
        }, ixbh5a['onMkdirCallBack'] = function (xbaih5, q8cgl) {
            if (!xbaih5) v7qyeg['filesListObj'] = JSON['parse'](q8cgl['data']);
        }, ixbh5a['pixelRatio'] = function () {
            if (!ixbh5a['EnvConfig']['pixelRatioInt']) try {
                var aih51 = wx['getSystemInfoSync']();
                return ixbh5a['EnvConfig']['pixelRatioInt'] = aih51['pixelRatio'], aih51 = aih51, aih51['pixelRatio'];
            } catch (fd34to) {}
            return ixbh5a['EnvConfig']['pixelRatioInt'];
        }, ixbh5a['createElement'] = function (vgq7sc) {
            if (vgq7sc == 'canvas') {
                var y1ek;
                return ixbh5a['idx'] == 0x1 ? ixbh5a['isZiYu'] ? (y1ek = sharedCanvas, y1ek['style'] = {}) : y1ek = window['canvas'] : y1ek = window['wx']['createCanvas'](), ixbh5a['idx']++, y1ek;
            } else {
                if (vgq7sc == 'textarea' || vgq7sc == 'input') return ixbh5a['onCreateInput'](vgq7sc);else {
                    if (vgq7sc == 'div') {
                        var whx1 = ixbh5a['_preCreateElement'](vgq7sc);
                        return whx1['contains'] = function (b5pf0) {
                            return null;
                        }, whx1['removeChild'] = function (df4o3) {}, whx1;
                    } else return ixbh5a['_preCreateElement'](vgq7sc);
                }
            }
        }, ixbh5a['onCreateInput'] = function (hxi5ab) {
            var abi5p0 = ixbh5a['_preCreateElement'](hxi5ab);
            return abi5p0['focus'] = c9gsl['wxinputFocus'], abi5p0['blur'] = c9gsl['wxinputblur'], abi5p0['style'] = {}, abi5p0['value'] = 0x0, abi5p0['parentElement'] = {}, abi5p0['placeholder'] = {}, abi5p0['type'] = {}, abi5p0['setColor'] = function (ewhk1) {}, abi5p0['setType'] = function (w7eyvk) {}, abi5p0['setFontFace'] = function (oz) {}, abi5p0['addEventListener'] = function (ibahx) {}, abi5p0['contains'] = function (j6um) {
                return null;
            }, abi5p0['removeChild'] = function (yewk1h) {}, abi5p0;
        }, ixbh5a['createShaderCondition'] = function (f4o3dt) {
            var jzd = this,
                pf0b5 = function () {
                var ql8c = f4o3dt;
                return jzd[f4o3dt['replace']('this.', '')];
            };
            return pf0b5;
        }, ixbh5a['EnvConfig'] = null, ixbh5a['window'] = null, ixbh5a['_preCreateElement'] = null, ixbh5a['_inited'] = ![], ixbh5a['wxRequest'] = null, ixbh5a['systemInfo'] = null, ixbh5a['version'] = '0.0.1', ixbh5a['isZiYu'] = ![], ixbh5a['isPosMsgYu'] = ![], ixbh5a['parseXMLFromString'] = function (gqeyv) {
            var a05bp, $2r6;
            gqeyv = gqeyv['replace'](/>\s+</g, '><');
            try {
                a05bp = new window['Parser']['DOMParser']()['parseFromString'](gqeyv, 'text/xml');
            } catch (o3zd4) {
                throw '需要引入xml解析库文件';
            }
            return a05bp;
        }, ixbh5a['idx'] = 0x1, ixbh5a;
    }(),
        kh1iax = function () {
        function vyekw() {}
        b_0pi5(vyekw, 'laya.wx.mini.MiniImage');
        var $2jr6u = vyekw['prototype'];
        return $2jr6u['_loadImage'] = function (p0ab5i) {
            var gv7sc = this,
                pb5_i = ![];
            p0ab5i['indexOf']('layaNativeDir/') == -0x1 && (pb5_i = !![], p0ab5i = heywk['formatURL'](p0ab5i));
            if (!v7qyeg['getFileInfo'](p0ab5i)) {
                if (p0ab5i['indexOf']('http://') != -0x1 || p0ab5i['indexOf']('https://') != -0x1) v7qyeg['downImg'](p0ab5i, new x1ihak(vyekw, vyekw['onDownImgCallBack'], [p0ab5i, gv7sc]), p0ab5i);else vyekw['onCreateImage'](p0ab5i, gv7sc, !![]);
            } else vyekw['onCreateImage'](p0ab5i, gv7sc, !pb5_i);
        }, vyekw['onDownImgCallBack'] = function (b5aihx, f4pt_0, $ruj26) {
            if (!$ruj26) vyekw['onCreateImage'](b5aihx, f4pt_0);else f4pt_0['onError'](null);
        }, vyekw['onCreateImage'] = function (vwyeq7, yqv7ew, cvs7gq) {
            cvs7gq === void 0x0 && (cvs7gq = ![]);
            var baxih5;
            if (!cvs7gq) {
                var vqgc7 = v7qyeg['getFileInfo'](vwyeq7),
                    b5piax = vqgc7['md5'];
                baxih5 = v7qyeg['getFileNativePath'](b5piax);
            } else baxih5 = vwyeq7;
            if (yqv7ew['imgCache'] == null) yqv7ew['imgCache'] = {};
            var _b0pf5;
            function yh1xw() {
                _b0pf5['onload'] = null, _b0pf5['onerror'] = null, delete yqv7ew['imgCache'][vwyeq7];
            }
            ;
            var w7vey = function () {
                yh1xw(), yqv7ew['onLoaded'](_b0pf5);
            },
                eky1wh = function () {
                yh1xw(), yqv7ew['event']('error', 'Load image failed');
            };
            yqv7ew['_type'] == 'nativeimage' ? (_b0pf5 = new xa5ib['window']['Image'](), _b0pf5['crossOrigin'] = '', _b0pf5['onload'] = w7vey, _b0pf5['onerror'] = eky1wh, _b0pf5['src'] = baxih5, yqv7ew['imgCache'][vwyeq7] = _b0pf5) : new pbaix5['create'](baxih5, {
                'onload': w7vey,
                'onerror': eky1wh,
                'onCreate': function (k7evyw) {
                    _b0pf5 = k7evyw, yqv7ew['imgCache'][vwyeq7] = k7evyw;
                }
            });
        }, vyekw;
    }(),
        c9gsl = function () {
        function c98gsl() {}
        return b_0pi5(c98gsl, 'laya.wx.mini.MiniInput'), c98gsl['_createInputElement'] = function () {
            o4t3dz['_initInput'](o4t3dz['area'] = xa5ib['createElement']('textarea')), o4t3dz['_initInput'](o4t3dz['input'] = xa5ib['createElement']('input')), o4t3dz['inputContainer'] = xa5ib['createElement']('div'), o4t3dz['inputContainer']['style']['position'] = 'absolute', o4t3dz['inputContainer']['style']['zIndex'] = 0x186a0, xa5ib['container']['appendChild'](o4t3dz['inputContainer']), o4t3dz['inputContainer']['setPos'] = function (xwahk1, hax1ik) {
                o4t3dz['inputContainer']['style']['left'] = xwahk1 + 'px', o4t3dz['inputContainer']['style']['top'] = hax1ik + 'px';
            }, tbf_['stage']['on']('resize', null, c98gsl['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (do324z) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), hwk1x['_soundClass'] = q8c7, hwk1x['_musicClass'] = q8c7, window['_videoClass'] = j6$2ur;
        }, c98gsl['_onStageResize'] = function () {
            var f3ot_ = tbf_['stage']['_canvasTransform']['identity']();
            f3ot_['scale'](xa5ib['width'] / hyk1x['canvas']['width'] / rj$6['getPixelRatio'](), xa5ib['height'] / hyk1x['canvas']['height'] / rj$6['getPixelRatio']());
        }, c98gsl['wxinputFocus'] = function (x5ipa) {
            var rzj$6 = o4t3dz['inputElement']['target'];
            if (rzj$6 && !rzj$6['editable']) return;
            t0p_f4['window']['wx']['offKeyboardConfirm'](), t0p_f4['window']['wx']['offKeyboardInput'](), t0p_f4['window']['wx']['showKeyboard']({
                'defaultValue': rzj$6['text'],
                'maxLength': rzj$6['maxChars'],
                'multiple': rzj$6['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (kixh1a) {},
                'fail': function (fbt) {}
            }), t0p_f4['window']['wx']['onKeyboardConfirm'](function (ipba50) {
                var xia1hk = ipba50 ? ipba50['value'] : '';
                rzj$6['text'] = xia1hk, rzj$6['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), t0p_f4['window']['wx']['onKeyboardInput'](function (ibp50a) {
                var hbxia5 = ibp50a ? ibp50a['value'] : '';
                if (!rzj$6['multiline']) {
                    if (hbxia5['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                rzj$6['text'] = hbxia5, rzj$6['event']('input');
            });
        }, c98gsl['inputEnter'] = function () {
            o4t3dz['inputElement']['target']['focus'] = ![];
        }, c98gsl['wxinputblur'] = function () {
            c98gsl['hideKeyboard']();
        }, c98gsl['hideKeyboard'] = function () {
            t0p_f4['window']['wx']['offKeyboardConfirm'](), t0p_f4['window']['wx']['offKeyboardInput'](), t0p_f4['window']['wx']['hideKeyboard']({
                'success': function (urj2$) {
                    console['log']('隐藏键盘');
                },
                'fail': function (cl8gs9) {
                    console['log']('隐藏键盘出错:' + (cl8gs9 ? cl8gs9['errMsg'] : ''));
                }
            });
        }, c98gsl;
    }(),
        c7gsv = function () {
        function xkwh1y() {}
        b_0pi5(xkwh1y, 'laya.wx.mini.MiniLoader');
        var yqew7v = xkwh1y['prototype'];
        return yqew7v['load'] = function (ujr6$2, ixpa5b, f4_30t, fp_05b, z23od4) {
            f4_30t === void 0x0 && (f4_30t = !![]), z23od4 === void 0x0 && (z23od4 = ![]);
            var w1vky = this;
            w1vky['_url'] = ujr6$2;
            if (ujr6$2['indexOf']('data:image') === 0x0) w1vky['_type'] = ixpa5b = 'image';else w1vky['_type'] = ixpa5b || (ixpa5b = w1vky['getTypeFromUrl'](ujr6$2));
            w1vky['_cache'] = f4_30t, w1vky['_data'] = null;
            var f_5b = 'ascii';
            if (ujr6$2['indexOf']('.fnt') != -0x1) f_5b = 'utf8';else ixpa5b == 'arraybuffer' && (f_5b = '');
            ;
            var odft3 = _b0f['getFileExtension'](ujr6$2);
            if (xkwh1y['_fileTypeArr']['indexOf'](odft3) != -0x1) t0p_f4['EnvConfig']['load']['call'](this, ujr6$2, ixpa5b, f4_30t, fp_05b, z23od4);else {
                if (!v7qyeg['getFileInfo'](ujr6$2)) {
                    if (ujr6$2['indexOf']('layaNativeDir/') != -0x1) {
                        if (t0p_f4['isZiYu']) {
                            var z34tod = v7qyeg['ziyuFileData'][ujr6$2];
                            w1vky['onLoaded'](z34tod);
                            return;
                        } else {
                            cosnole['log']('read read'), v7qyeg['read'](ujr6$2, f_5b, new x1ihak(xkwh1y, xkwh1y['onReadNativeCallBack'], [f_5b, ujr6$2, ixpa5b, f4_30t, fp_05b, z23od4, w1vky]));
                            return;
                        }
                    }
                    if (heywk['rootPath'] == '') var tfp_4 = ujr6$2;else tfp_4 = ujr6$2['split'](heywk['rootPath'])[0x0];
                    ujr6$2['indexOf']('http://') != -0x1 || ujr6$2['indexOf']('https://') != -0x1 ? t0p_f4['EnvConfig']['load']['call'](w1vky, ujr6$2, ixpa5b, f4_30t, fp_05b, z23od4) : v7qyeg['readFile'](tfp_4, f_5b, new x1ihak(xkwh1y, xkwh1y['onReadNativeCallBack'], [f_5b, ujr6$2, ixpa5b, f4_30t, fp_05b, z23od4, w1vky]), ujr6$2);
                } else t0p_f4['EnvConfig']['load']['call'](this, ujr6$2, ixpa5b, f4_30t, fp_05b, z23od4);
            }
        }, yqew7v['resMgrLoad'] = function ($z6, ykv7, a5xib, hxwky1, dzro62, r26oz, ot4z3d) {
            a5xib === void 0x0 && (a5xib = 0x0), hxwky1 === void 0x0 && (hxwky1 = ![]), dzro62 === void 0x0 && (dzro62 = ![]), r26oz === void 0x0 && (r26oz = 0x0), ot4z3d === void 0x0 && (ot4z3d = 0x3), $z6['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', $z6), t0p_f4['EnvConfig']['resMgrLoad']($z6, (eqvy7g, s7c8g, r2zod6) => {
                xkwh1y['prototype']['resMgrLoadCallBack'](eqvy7g, s7c8g, r2zod6, ykv7);
            }, a5xib, hxwky1, dzro62, r26oz, ot4z3d);
        }, yqew7v['resMgrLoadCallBack'] = function (bi5xp, evqy, wh1xyk, ek7) {
            console['log']('buff:::', bi5xp, wh1xyk, v7qyeg['fileNativeDir'] + '///' + v7qyeg['fileListName']), ek7(bi5xp, evqy, wh1xyk);
        }, yqew7v['clearRes'] = function (j62u$, u6$r) {
            u6$r === void 0x0 && (u6$r = ![]);
            var ke1yhw = this;
            ke1yhw['clearRes'](j62u$, u6$r);
            var _f0p4 = v7qyeg['getFileInfo'](j62u$);
            if (_f0p4 && (j62u$['indexOf']('http://') != -0x1 || j62u$['indexOf']('https://') != -0x1)) {
                var t40_f = _f0p4['md5'],
                    cgq = v7qyeg['getFileNativePath'](t40_f);
                v7qyeg['remove'](cgq);
            }
        }, xkwh1y['onReadNativeCallBack'] = function (bpa5xi, c7qvgs, lqs8cg, zt4o3d, eyvgq7, tzdo4, kia1, s8c9lg, qsgcv) {
            zt4o3d === void 0x0 && (zt4o3d = !![]), tzdo4 === void 0x0 && (tzdo4 = ![]), s8c9lg === void 0x0 && (s8c9lg = 0x0);
            if (!s8c9lg) {
                var lg9s8;
                if (lqs8cg == 'json' || lqs8cg == 'atlas') lg9s8 = t0p_f4['getJson'](qsgcv['data']);else lqs8cg == 'xml' ? lg9s8 = _b0f['parseXMLFromString'](qsgcv['data']) : lg9s8 = qsgcv['data'];
                kia1['onLoaded'](lg9s8), !t0p_f4['isZiYu'] && t0p_f4['isPosMsgYu'] && lqs8cg != 'arraybuffer' && wx['postMessage']({
                    'url': c7qvgs,
                    'data': lg9s8,
                    'isLoad': !![]
                });
            } else s8c9lg == 0x1 && t0p_f4['EnvConfig']['load']['call'](kia1, c7qvgs, lqs8cg, zt4o3d, eyvgq7, tzdo4);
        }, fto43_(xkwh1y, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), xkwh1y;
    }(),
        v7qyeg = function (zdrj) {
        function z2do3() {
            z2do3['__super']['call'](this);
            ;
        }
        return b_0pi5(z2do3, 'laya.wx.mini.MiniFileMgr', zdrj), z2do3['isLoadFile'] = function (bpia05) {
            return z2do3['_fileTypeArr']['indexOf'](bpia05) != -0x1 ? !![] : ![];
        }, z2do3['getFileInfo'] = function (pxa5ib) {
            var r6j$ = pxa5ib['split']('?')[0x0],
                a5bxpi = z2do3['filesListObj'][r6j$];
            if (a5bxpi == null) return null;else return a5bxpi;
            return null;
        }, z2do3['onFileUpdate'] = function (gc89ls, f04p_) {
            var e7kyv = gc89ls['split']('/'),
                ah1i5 = e7kyv[e7kyv['length'] - 0x1],
                fo4_t3 = z2do3['getFileInfo'](f04p_);
            if (fo4_t3 == null) z2do3['onSaveFile'](f04p_, ah1i5);else {
                if (fo4_t3['readyUrl'] != f04p_) z2do3['remove'](ah1i5, f04p_);
            }
        }, z2do3['exits'] = function (ev7c, ehwyk) {
            var fo_t4 = z2do3['getFileNativePath'](ev7c);
            z2do3['fs']['getFileInfo']({
                'filePath': fo_t4,
                'success': function (t4d3o) {
                    ehwyk != null && ehwyk['runWith']([0x0, t4d3o]);
                },
                'fail': function (z62rod) {
                    ehwyk != null && ehwyk['runWith']([0x1, z62rod]);
                }
            });
        }, z2do3['read'] = function (bf5_, r2$zj6, akwh1x, w7yk) {
            r2$zj6 === void 0x0 && (r2$zj6 = 'ascill'), w7yk === void 0x0 && (w7yk = '');
            var hky1e;
            w7yk != '' ? hky1e = z2do3['getFileNativePath'](bf5_) : hky1e = bf5_, z2do3['fs']['readFile']({
                'filePath': hky1e,
                'encoding': r2$zj6,
                'success': function (yekw1v) {
                    akwh1x != null && akwh1x['runWith']([0x0, yekw1v]);
                },
                'fail': function (xhwky) {
                    if (xhwky && w7yk != '') z2do3['down'](w7yk, r2$zj6, akwh1x, w7yk);else akwh1x != null && akwh1x['runWith']([0x1]);
                }
            });
        }, z2do3['readNativeFile'] = function (zr6$j, doz6) {
            z2do3['fs']['readFile']({
                'filePath': zr6$j,
                'encoding': '',
                'success': function (pbi_50) {
                    doz6 != null && doz6['runWith']([0x0]);
                },
                'fail': function (eqwv7y) {
                    doz6 != null && doz6['runWith']([0x1]);
                }
            });
        }, z2do3['down'] = function (fp4t0_, ecq7vg, ywv7eq, wakx) {
            ecq7vg === void 0x0 && (ecq7vg = 'ascill'), wakx === void 0x0 && (wakx = '');
            var evyk = z2do3['getFileNativePath'](wakx),
                ip05_b = z2do3['wxdown']({
                'url': fp4t0_,
                'filePath': evyk,
                'success': function (d4z3) {
                    if (d4z3['statusCode'] === 0xc8) z2do3['readFile'](d4z3['filePath'], ecq7vg, ywv7eq, wakx);
                },
                'fail': function (kvw1) {
                    ywv7eq != null && ywv7eq['runWith']([0x1, kvw1]);
                }
            });
            ip05_b['onProgressUpdate'](function (ofd43t) {
                ywv7eq != null && ywv7eq['runWith']([0x2, ofd43t['progress']]);
            });
        }, z2do3['readFile'] = function (ib0a, i_5p0b, _tp40, g87sq) {
            i_5p0b === void 0x0 && (i_5p0b = 'ascill'), g87sq === void 0x0 && (g87sq = ''), z2do3['fs']['readFile']({
                'filePath': ib0a,
                'encoding': i_5p0b,
                'success': function (khw1xy) {
                    if (ib0a['indexOf']('http://') != -0x1 || ib0a['indexOf']('https://') != -0x1) z2do3['onFileUpdate'](ib0a, g87sq);
                    _tp40 != null && _tp40['runWith']([0x0, khw1xy]);
                },
                'fail': function (i_5b0p) {
                    if (i_5b0p) _tp40 != null && _tp40['runWith']([0x1, i_5b0p]);
                }
            });
        }, z2do3['downImg'] = function (djr2, yhe1wk, h15ax) {
            h15ax === void 0x0 && (h15ax = '');
            var xh5ib = z2do3['wxdown']({
                'url': djr2,
                'success': function (kh1x) {
                    kh1x['statusCode'] === 0xc8 && z2do3['copyFile'](kh1x['tempFilePath'], h15ax, yhe1wk);
                },
                'fail': function (o4ft_) {
                    yhe1wk != null && yhe1wk['runWith']([0x1, o4ft_]);
                }
            });
        }, z2do3['copyFile'] = function (ft34d, bi_0p, i5p0ba) {
            var u26j$ = ft34d['split']('/'),
                hxbai5 = u26j$[u26j$['length'] - 0x1],
                lgsq8c = bi_0p['split']('?')[0x0],
                oz36d2 = z2do3['getFileInfo'](bi_0p),
                f50b_p = z2do3['getFileNativePath'](hxbai5);
            z2do3['fs']['copyFile']({
                'srcPath': ft34d,
                'destPath': f50b_p,
                'success': function (qlgcs8) {
                    if (!oz36d2) z2do3['onSaveFile'](bi_0p, hxbai5), i5p0ba != null && i5p0ba['runWith']([0x0]);else {
                        if (oz36d2['readyUrl'] != bi_0p) z2do3['remove'](hxbai5, bi_0p, i5p0ba);
                    }
                },
                'fail': function (xiba5p) {
                    i5p0ba != null && i5p0ba['runWith']([0x1, xiba5p]);
                }
            });
        }, z2do3['getFileNativePath'] = function (u26rj) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + u26rj;
        }, z2do3['remove'] = function (veq7c, s8gcq7, p5xai) {
            s8gcq7 === void 0x0 && (s8gcq7 = '');
            var z6d2j = z2do3['getFileInfo'](s8gcq7),
                zod236 = z2do3['getFileNativePath'](z6d2j['md5']);
            tbf_['loader']['clearRes'](z6d2j['readyUrl']), z2do3['fs']['unlink']({
                'filePath': zod236,
                'success': function (zot4d3) {
                    if (s8gcq7 != '') z2do3['onSaveFile'](s8gcq7, veq7c);
                    p5xai != null && p5xai['runWith']([0x0]);
                },
                'fail': function (sqcg7) {}
            });
        }, z2do3['onSaveFile'] = function (fbp_5, $j2u) {
            var tf04p = fbp_5['split']('?')[0x0];
            z2do3['filesListObj'][tf04p] = {
                'md5': $j2u,
                'readyUrl': fbp_5
            }, z2do3['fs']['writeFile']({
                'filePath': z2do3['fileNativeDir'] + '/' + z2do3['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](z2do3['filesListObj']),
                'success': function (tfod) {
                    console['log']('写入测试测试成功：', tfod);
                },
                'fail': function (hax1i) {
                    console['log']('写入测试测试失败：', hax1i);
                }
            });
        }, z2do3['existDir'] = function (x51iha, o3tz4) {
            z2do3['fs']['mkdir']({
                'dirPath': x51iha,
                'success': function (kyv1we) {
                    o3tz4 != null && o3tz4['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (d2z36) {
                    if (d2z36['errMsg']['indexOf']('file already exists') != -0x1) z2do3['readSync'](z2do3['fileListName'], 'utf8', o3tz4);else o3tz4 != null && o3tz4['runWith']([0x1, d2z36]);
                }
            });
        }, z2do3['readSync'] = function (tpf40_, ozt4d3, slqg8c, q7vyge) {
            ozt4d3 === void 0x0 && (ozt4d3 = 'ascill'), q7vyge === void 0x0 && (q7vyge = '');
            var ip5xa = z2do3['getFileNativePath'](tpf40_),
                a1kw;
            try {
                a1kw = z2do3['fs']['readFileSync'](ip5xa), slqg8c != null && slqg8c['runWith']([0x0, { 'data': a1kw }]);
            } catch (lcsgq) {
                slqg8c != null && slqg8c['runWith']([0x1]);
            }
        }, z2do3['readCache'] = function () {}, z2do3['writeCache'] = function (qg78) {
            var vkey = readyUrl['split']('?')[0x0];
            z2do3['filesListObj'][vkey] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, z2do3['fs']['writeFile']({
                'filePath': z2do3['fileNativeDir'] + '/' + z2do3['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](z2do3['filesListObj']),
                'success': function (t_0p) {},
                'fail': function (uj$6rm) {}
            });
        }, z2do3['setNativeFileDir'] = function (ekyw1) {
            z2do3['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + ekyw1;
        }, z2do3['filesListObj'] = {}, z2do3['fileNativeDir'] = null, z2do3['fileListName'] = 'layaairfiles.txt', z2do3['ziyuFileData'] = {}, fto43_(z2do3, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), z2do3;
    }(iaxkh1),
        q8c7 = function (t4d) {
        function qw7ve() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], qw7ve['__super']['call'](this), this['_sound'] = qw7ve['_createSound'](), this['_chanell'] = new ipb0_5(this['_sound']);
        }
        b_0pi5(qw7ve, 'laya.wx.mini.MiniSound', t4d);
        var ib0_p5 = qw7ve['prototype'];
        return ib0_p5['load'] = function (k1yxwh) {
            var o324 = this;
            k1yxwh = heywk['formatURL'](k1yxwh), this['url'] = k1yxwh;
            if (qw7ve['_audioCache'][k1yxwh]) {
                this['event']('complete');
                return;
            }
            function qcgs8() {
                if (qw7ve['_null'] != undefined) o324['_sound']['onCanplay'](qw7ve['_null']), o324['_sound']['onError'](qw7ve['_null']);else try {
                    o324['_sound']['onCanplay'](null), o324['_sound']['onError'](null), qw7ve['_null'] = null;
                } catch (qe7gcv) {
                    console['warn']('[wxmini] _clearSound:' + qe7gcv), o324['_sound']['onCanplay'](zo3d26), o324['_sound']['onError'](zo3d26), qw7ve['_null'] = zo3d26;
                }
            }
            function _5pf() {
                fp0b5['loaded'] = !![], fp0b5['event']('complete'), qw7ve['_audioCache'][fp0b5['url']] = fp0b5;
            }
            function b05pi(f5b0_) {
                console['error']('errCode=' + f5b0_['errCode'] + '  errMsg=' + f5b0_['errMsg']), fp0b5['event']('error');
            }
            function zo3d26() {}
            this['_sound']['onCanplay'](_5pf), this['_sound']['onError'](b05pi), this['_sound']['src'] = k1yxwh;
            var fp0b5 = this;
        }, ib0_p5['play'] = function (d342oz, r6uj$m) {
            d342oz === void 0x0 && (d342oz = 0x0), r6uj$m === void 0x0 && (r6uj$m = 0x0);
            var kxhi1a, f_b05p;
            if (this['url'] == hwk1x['_tMusic']) {
                if (!qw7ve['_musicAudio']) qw7ve['_musicAudio'] = this['_sound'];
                kxhi1a = qw7ve['_musicAudio'], f_b05p = this['_chanell'];
            } else kxhi1a = this['_sound'], f_b05p = this['_chanell'];
            return kxhi1a['src'] = this['url'], kxhi1a['startTime'] = 0x0, f_b05p['isStopped'] && (f_b05p['url'] = this['url'], f_b05p['loops'] = r6uj$m, f_b05p['startTime'] = d342oz, f_b05p['play'](), hwk1x['addChannel'](f_b05p)), f_b05p;
        }, ib0_p5['dispose'] = function () {
            var t_03 = qw7ve['_audioCache'][this['url']];
            t_03 && (t_03['src'] = '', delete qw7ve['_audioCache'][this['url']]);
        }, xika1h(0x0, ib0_p5, 'duration', function () {
            return this['_sound']['duration'];
        }), qw7ve['_createSound'] = function () {
            qw7ve['_id']++;
            var gq7vc = t0p_f4['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return gq7vc;
        }, qw7ve['_musicAudio'] = null, qw7ve['_id'] = 0x0, qw7ve['_audioCache'] = {}, qw7ve['_null'] = undefined, qw7ve;
    }(iaxkh1),
        ipb0_5 = function (xha51i) {
        function cge7v(z32o6d) {
            this['_audio'] = null, this['_onEnd'] = null, cge7v['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = z32o6d, this['_onEnd'] = _b0f['bind'](this['__onEnd'], this), z32o6d['onEnded'](this['_onEnd']);
        }
        b_0pi5(cge7v, 'laya.wx.mini.MiniSoundChannel', xha51i);
        var kw1ehy = cge7v['prototype'];
        return kw1ehy['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (tbf_['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, kw1ehy['__onNull'] = function () {}, kw1ehy['play'] = function () {
            this['isStopped'] = ![], hwk1x['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, kw1ehy['stop'] = function () {
            this['isStopped'] = !![], hwk1x['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, kw1ehy['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, kw1ehy['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], hwk1x['addChannel'](this), this['_audio']['play']();
        }, xika1h(0x0, kw1ehy, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), xika1h(0x0, kw1ehy, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), xika1h(0x0, kw1ehy, 'volume', function () {
            return 0x1;
        }, function (z3d4to) {}), cge7v['_null'] = undefined, cge7v;
    }(d6j2zr),
        j6$2ur = function () {
        function ecv7qg() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = t0p_f4['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        b_0pi5(ecv7qg, 'laya.wx.mini.MiniVideo');
        var v7gsc = ecv7qg['prototype'];
        return v7gsc['on'] = function (gq8lc, fb_pt, yve1k) {
            if (gq8lc == 'loadedmetadata') this['onPlayFunc'] = yve1k['bind'](fb_pt), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else gq8lc == 'ended' && (this['onEndedFunC'] = yve1k['bind'](fb_pt), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, v7gsc['onTimeUpdateFunc'] = function (bi5p0_) {
            this['position'] = bi5p0_['position'], this['_duration'] = bi5p0_['duration'];
        }, v7gsc['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, v7gsc['onended'] = function (do3z26, of3td4) {
            this['onEndedFunC'] = of3td4['bind'](do3z26), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, v7gsc['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, v7gsc['off'] = function (tf4p_, qvecg7, j$um) {
            if (tf4p_ == 'loadedmetadata') this['onPlayFunc'] = j$um['bind'](qvecg7), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else tf4p_ == 'ended' && (this['onEndedFunC'] = j$um['bind'](qvecg7), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, v7gsc['load'] = function (lg9) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = lg9;
        }, v7gsc['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, v7gsc['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, v7gsc['size'] = function (um$r, xab5ih) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = um$r, this['videoElement']['height'] = xab5ih;
        }, v7gsc['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, v7gsc['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, xika1h(0x0, v7gsc, 'duration', function () {
            return this['_duration'];
        }), xika1h(0x0, v7gsc, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (urmj6) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = urmj6;
        }), xika1h(0x0, v7gsc, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), xika1h(0x0, v7gsc, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), xika1h(0x0, v7gsc, 'ended', function () {
            return this['videoend'];
        }), xika1h(0x0, v7gsc, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (u2j6$r) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = u2j6$r;
        }), xika1h(0x0, v7gsc, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (hixak1) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = hixak1;
        }), xika1h(0x0, v7gsc, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (xka1hw) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = xka1hw;
        }), xika1h(0x0, v7gsc, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), xika1h(0x0, v7gsc, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (ke7wvy) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = ke7wvy;
        }), xika1h(0x0, v7gsc, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (_0t34) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = _0t34;
        }), xika1h(0x0, v7gsc, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), xika1h(0x0, v7gsc, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (z26rj$) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = z26rj$;
        }), xika1h(0x0, v7gsc, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (b5xha) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = b5xha;
        }), xika1h(0x0, v7gsc, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function ($mrju6) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = $mrju6;
        }), ecv7qg;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var l9c in Laya) {
        var ah5x = Laya[l9c];
        ah5x && ah5x['__isclass'] && (exports[l9c] = ah5x);
    }
});