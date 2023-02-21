var B = wx.$z;
(function (window, document, q3i7$m) {
    var mvi7ln = q3i7$m['un'],
        zoky = q3i7$m['uns'],
        u_5r = q3i7$m['static'],
        u_r2w = q3i7$m['class'],
        aezs = q3i7$m['getset'],
        br8ky = q3i7$m['__newvec'],
        a9x1e = laya['utils']['Browser'],
        u28_5r = laya['events']['Event'],
        inv7ml = laya['events']['EventDispatcher'],
        xes9a = laya['resource']['HTMLImage'],
        tkzd = laya['utils']['Handler'],
        k58r = laya['display']['Input'],
        fglv6 = laya['net']['Loader'],
        _2ru = laya['maths']['Matrix'],
        r8dby = laya['renders']['Render'],
        kobd = laya['utils']['RunDriver'],
        p49h = laya['media']['Sound'],
        p46h1 = laya['media']['SoundChannel'],
        zedyto = laya['media']['SoundManager'],
        fil7v = laya['display']['Stage'],
        ivlm7 = laya['net']['URL'],
        toeyz = laya['utils']['Utils'],
        q3inm7 = function () {
        function bryk8_() {}
        return u_r2w(bryk8_, 'laya.wx.mini.MiniAdpter'), bryk8_['getJson'] = function (tose) {
            return JSON['parse'](tose);
        }, bryk8_['init'] = function (rb8kyd, oybdk) {
            rb8kyd === void 0x0 && (rb8kyd = ![]), oybdk === void 0x0 && (oybdk = ![]);
            if (bryk8_['_inited']) return;
            bryk8_['window'] = window;
            if (bryk8_['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            bryk8_['_inited'] = !![], bryk8_['isZiYu'] = oybdk, bryk8_['isPosMsgYu'] = rb8kyd, bryk8_['EnvConfig'] = {}, !bryk8_['isZiYu'] && (zsa9ex['setNativeFileDir']('/layaairGame'), zsa9ex['existDir'](zsa9ex['fileNativeDir'], tkzd['create'](bryk8_, bryk8_['onMkdirCallBack']))), bryk8_['window']['focus'] = function () {}, q3i7$m['getUrlPath'] = function () {}, bryk8_['window']['logtime'] = function (lf7i) {}, bryk8_['window']['alertTimeLog'] = function (_8ybk) {}, bryk8_['window']['resetShareInfo'] = function () {}, bryk8_['window']['CanvasRenderingContext2D'] = function () {}, bryk8_['window']['CanvasRenderingContext2D']['prototype'] = bryk8_['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], bryk8_['window']['document']['body']['appendChild'] = function () {}, bryk8_['EnvConfig']['pixelRatioInt'] = 0x0, kobd['getPixelRatio'] = bryk8_['pixelRatio'], bryk8_['_preCreateElement'] = a9x1e['createElement'], a9x1e['createElement'] = bryk8_['createElement'], kobd['createShaderCondition'] = bryk8_['createShaderCondition'], toeyz['parseXMLFromString'] = bryk8_['parseXMLFromString'], k58r['_createInputElement'] = dtz['_createInputElement'], bryk8_['EnvConfig']['load'] = fglv6['prototype']['load'], fglv6['prototype']['load'] = h4pgf6['prototype']['load'], bryk8_['isZiYu'] && rb8kyd && wx['onMessage'](function (u2w5) {
                u2w5['isLoad'] && (zsa9ex['ziyuFileData'][u2w5['url']] = u2w5['data']);
            });
        }, bryk8_['onMkdirCallBack'] = function (b8_rk, $qijm3) {
            if (!b8_rk) zsa9ex['filesListObj'] = JSON['parse']($qijm3['data']);
        }, bryk8_['pixelRatio'] = function () {
            if (!bryk8_['EnvConfig']['pixelRatioInt']) try {
                var h164g = wx['getSystemInfoSync']();
                return bryk8_['EnvConfig']['pixelRatioInt'] = h164g['pixelRatio'], h164g = h164g, h164g['pixelRatio'];
            } catch (g19pxh) {}
            return bryk8_['EnvConfig']['pixelRatioInt'];
        }, bryk8_['createElement'] = function (sztx) {
            if (sztx == 'canvas') {
                var ydko;
                return bryk8_['idx'] == 0x1 ? bryk8_['isZiYu'] ? (ydko = sharedCanvas, ydko['style'] = {}) : ydko = window['canvas'] : ydko = window['wx']['createCanvas'](), bryk8_['idx']++, ydko;
            } else {
                if (sztx == 'textarea' || sztx == 'input') return bryk8_['onCreateInput'](sztx);else {
                    if (sztx == 'div') {
                        var axzts = bryk8_['_preCreateElement'](sztx);
                        return axzts['contains'] = function (ij3q$m) {
                            return null;
                        }, axzts['removeChild'] = function (u5w2_0) {}, axzts;
                    } else return bryk8_['_preCreateElement'](sztx);
                }
            }
        }, bryk8_['onCreateInput'] = function (ahx91) {
            var zkdty = bryk8_['_preCreateElement'](ahx91);
            return zkdty['focus'] = dtz['wxinputFocus'], zkdty['blur'] = dtz['wxinputblur'], zkdty['style'] = {}, zkdty['value'] = 0x0, zkdty['parentElement'] = {}, zkdty['placeholder'] = {}, zkdty['type'] = {}, zkdty['setColor'] = function (p9h4g) {}, zkdty['setType'] = function (mi73q$) {}, zkdty['setFontFace'] = function ($3q7) {}, zkdty['addEventListener'] = function (iq73m) {}, zkdty['contains'] = function (_2w5u) {
                return null;
            }, zkdty['removeChild'] = function (dozta) {}, zkdty;
        }, bryk8_['createShaderCondition'] = function (kztody) {
            var ivfl7n = this,
                _02uw = function () {
                var _8rkyb = kztody;
                return ivfl7n[kztody['replace']('this.', '')];
            };
            return _02uw;
        }, bryk8_['EnvConfig'] = null, bryk8_['window'] = null, bryk8_['_preCreateElement'] = null, bryk8_['_inited'] = ![], bryk8_['wxRequest'] = null, bryk8_['systemInfo'] = null, bryk8_['version'] = '0.0.1', bryk8_['isZiYu'] = ![], bryk8_['isPosMsgYu'] = ![], bryk8_['parseXMLFromString'] = function (tseoz) {
            var l4gvf6, zsaeto;
            tseoz = tseoz['replace'](/>\s+</g, '><');
            try {
                l4gvf6 = new window['Parser']['DOMParser']()['parseFromString'](tseoz, 'text/xml');
            } catch (gp9h1x) {
                throw '需要引入xml解析库文件';
            }
            return l4gvf6;
        }, bryk8_['idx'] = 0x1, bryk8_;
    }(),
        w2r5_ = function () {
        function dkybo() {}
        u_r2w(dkybo, 'laya.wx.mini.MiniImage');
        var aezdot = dkybo['prototype'];
        return aezdot['_loadImage'] = function (txzaes) {
            var fg4ph = this,
                oeazts = ![];
            txzaes['indexOf']('layaNativeDir/') == -0x1 && (oeazts = !![], txzaes = ivlm7['formatURL'](txzaes));
            if (!zsa9ex['getFileInfo'](txzaes)) {
                if (txzaes['indexOf']('http://') != -0x1 || txzaes['indexOf']('https://') != -0x1) zsa9ex['downImg'](txzaes, new tkzd(dkybo, dkybo['onDownImgCallBack'], [txzaes, fg4ph]), txzaes);else dkybo['onCreateImage'](txzaes, fg4ph, !![]);
            } else dkybo['onCreateImage'](txzaes, fg4ph, !oeazts);
        }, dkybo['onDownImgCallBack'] = function (l4f6, ij, g6vp4) {
            if (!g6vp4) dkybo['onCreateImage'](l4f6, ij);else ij['onError'](null);
        }, dkybo['onCreateImage'] = function (tezdyo, q3min7, p9x1) {
            p9x1 === void 0x0 && (p9x1 = ![]);
            var flv7ni;
            if (!p9x1) {
                var x9p1hg = zsa9ex['getFileInfo'](tezdyo),
                    ydtzko = x9p1hg['md5'];
                flv7ni = zsa9ex['getFileNativePath'](ydtzko);
            } else flv7ni = tezdyo;
            if (q3min7['imgCache'] == null) q3min7['imgCache'] = {};
            var ax9s;
            function dezat() {
                ax9s['onload'] = null, ax9s['onerror'] = null, delete q3min7['imgCache'][tezdyo];
            }
            ;
            var b_5r2 = function () {
                dezat(), q3min7['onLoaded'](ax9s);
            },
                s19ex = function () {
                dezat(), q3min7['event']('error', 'Load image failed');
            };
            q3min7['_type'] == 'nativeimage' ? (ax9s = new a9x1e['window']['Image'](), ax9s['crossOrigin'] = '', ax9s['onload'] = b_5r2, ax9s['onerror'] = s19ex, ax9s['src'] = flv7ni, q3min7['imgCache'][tezdyo] = ax9s) : new xes9a['create'](flv7ni, {
                'onload': b_5r2,
                'onerror': s19ex,
                'onCreate': function (sto) {
                    ax9s = sto, q3min7['imgCache'][tezdyo] = sto;
                }
            });
        }, dkybo;
    }(),
        dtz = function () {
        function invm7l() {}
        return u_r2w(invm7l, 'laya.wx.mini.MiniInput'), invm7l['_createInputElement'] = function () {
            k58r['_initInput'](k58r['area'] = a9x1e['createElement']('textarea')), k58r['_initInput'](k58r['input'] = a9x1e['createElement']('input')), k58r['inputContainer'] = a9x1e['createElement']('div'), k58r['inputContainer']['style']['position'] = 'absolute', k58r['inputContainer']['style']['zIndex'] = 0x186a0, a9x1e['container']['appendChild'](k58r['inputContainer']), k58r['inputContainer']['setPos'] = function (j3miq, w5_u2r) {
                k58r['inputContainer']['style']['left'] = j3miq + 'px', k58r['inputContainer']['style']['top'] = w5_u2r + 'px';
            }, q3i7$m['stage']['on']('resize', null, invm7l['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (by8d) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), zedyto['_soundClass'] = vfin7l, zedyto['_musicClass'] = vfin7l, window['_videoClass'] = zxs9ea;
        }, invm7l['_onStageResize'] = function () {
            var vln4f = q3i7$m['stage']['_canvasTransform']['identity']();
            vln4f['scale'](a9x1e['width'] / r8dby['canvas']['width'] / kobd['getPixelRatio'](), a9x1e['height'] / r8dby['canvas']['height'] / kobd['getPixelRatio']());
        }, invm7l['wxinputFocus'] = function (u2r85_) {
            var miq3j = k58r['inputElement']['target'];
            if (miq3j && !miq3j['editable']) return;
            q3inm7['window']['wx']['offKeyboardConfirm'](), q3inm7['window']['wx']['offKeyboardInput'](), q3inm7['window']['wx']['showKeyboard']({
                'defaultValue': miq3j['text'],
                'maxLength': miq3j['maxChars'],
                'multiple': miq3j['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (azsote) {},
                'fail': function (tykb) {}
            }), q3inm7['window']['wx']['onKeyboardConfirm'](function (xh9sa1) {
                var ilmv7n = xh9sa1 ? xh9sa1['value'] : '';
                miq3j['text'] = ilmv7n, miq3j['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), q3inm7['window']['wx']['onKeyboardInput'](function (asex9z) {
                var inf7v = asex9z ? asex9z['value'] : '';
                if (!miq3j['multiline']) {
                    if (inf7v['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                miq3j['text'] = inf7v, miq3j['event']('input');
            });
        }, invm7l['inputEnter'] = function () {
            k58r['inputElement']['target']['focus'] = ![];
        }, invm7l['wxinputblur'] = function () {
            invm7l['hideKeyboard']();
        }, invm7l['hideKeyboard'] = function () {
            q3inm7['window']['wx']['offKeyboardConfirm'](), q3inm7['window']['wx']['offKeyboardInput'](), q3inm7['window']['wx']['hideKeyboard']({
                'success': function (a9sxez) {
                    console['log']('隐藏键盘');
                },
                'fail': function (fgpv64) {
                    console['log']('隐藏键盘出错:' + (fgpv64 ? fgpv64['errMsg'] : ''));
                }
            });
        }, invm7l;
    }(),
        h4pgf6 = function () {
        function deo() {}
        u_r2w(deo, 'laya.wx.mini.MiniLoader');
        var a9xs = deo['prototype'];
        return a9xs['load'] = function (gfv6p4, ru5w_2, odtkz, k8ry_, dezato) {
            odtkz === void 0x0 && (odtkz = !![]), dezato === void 0x0 && (dezato = ![]);
            var zeaso = this;
            zeaso['_url'] = gfv6p4;
            if (gfv6p4['indexOf']('data:image') === 0x0) zeaso['_type'] = ru5w_2 = 'image';else zeaso['_type'] = ru5w_2 || (ru5w_2 = zeaso['getTypeFromUrl'](gfv6p4));
            zeaso['_cache'] = odtkz, zeaso['_data'] = null;
            var ifl7vn = 'ascii';
            if (gfv6p4['indexOf']('.fnt') != -0x1) ifl7vn = 'utf8';else ru5w_2 == 'arraybuffer' && (ifl7vn = '');
            ;
            var r58_b2 = toeyz['getFileExtension'](gfv6p4);
            if (deo['_fileTypeArr']['indexOf'](r58_b2) != -0x1) q3inm7['EnvConfig']['load']['call'](this, gfv6p4, ru5w_2, odtkz, k8ry_, dezato);else {
                if (!zsa9ex['getFileInfo'](gfv6p4)) {
                    if (gfv6p4['indexOf']('layaNativeDir/') != -0x1) {
                        if (q3inm7['isZiYu']) {
                            var ztoeyd = zsa9ex['ziyuFileData'][gfv6p4];
                            zeaso['onLoaded'](ztoeyd);
                            return;
                        } else {
                            cosnole['log']('read read'), zsa9ex['read'](gfv6p4, ifl7vn, new tkzd(deo, deo['onReadNativeCallBack'], [ifl7vn, gfv6p4, ru5w_2, odtkz, k8ry_, dezato, zeaso]));
                            return;
                        }
                    }
                    if (ivlm7['rootPath'] == '') var jiq3m = gfv6p4;else jiq3m = gfv6p4['split'](ivlm7['rootPath'])[0x0];
                    gfv6p4['indexOf']('http://') != -0x1 || gfv6p4['indexOf']('https://') != -0x1 ? q3inm7['EnvConfig']['load']['call'](zeaso, gfv6p4, ru5w_2, odtkz, k8ry_, dezato) : zsa9ex['readFile'](jiq3m, ifl7vn, new tkzd(deo, deo['onReadNativeCallBack'], [ifl7vn, gfv6p4, ru5w_2, odtkz, k8ry_, dezato, zeaso]), gfv6p4);
                } else q3inm7['EnvConfig']['load']['call'](this, gfv6p4, ru5w_2, odtkz, k8ry_, dezato);
            }
        }, a9xs['resMgrLoad'] = function (sa9x, ozset, ruw25_, nlv6f7, fp46vg, zots, x9g1) {
            ruw25_ === void 0x0 && (ruw25_ = 0x0), nlv6f7 === void 0x0 && (nlv6f7 = ![]), fp46vg === void 0x0 && (fp46vg = ![]), zots === void 0x0 && (zots = 0x0), x9g1 === void 0x0 && (x9g1 = 0x3), sa9x['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', sa9x), q3inm7['EnvConfig']['resMgrLoad'](sa9x, (tzoydk, nf4v6, n7fil) => {
                deo['prototype']['resMgrLoadCallBack'](tzoydk, nf4v6, n7fil, ozset);
            }, ruw25_, nlv6f7, fp46vg, zots, x9g1);
        }, a9xs['resMgrLoadCallBack'] = function (edaot, sezao, iflv, x9g1hp) {
            console['log']('buff:::', edaot, iflv, zsa9ex['fileNativeDir'] + '///' + zsa9ex['fileListName']), x9g1hp(edaot, sezao, iflv);
        }, a9xs['clearRes'] = function (kybrd8, s9ph1) {
            s9ph1 === void 0x0 && (s9ph1 = ![]);
            var zytedo = this;
            zytedo['clearRes'](kybrd8, s9ph1);
            var r8ybd = zsa9ex['getFileInfo'](kybrd8);
            if (r8ybd && (kybrd8['indexOf']('http://') != -0x1 || kybrd8['indexOf']('https://') != -0x1)) {
                var ax9ze = r8ybd['md5'],
                    $q3imj = zsa9ex['getFileNativePath'](ax9ze);
                zsa9ex['remove']($q3imj);
            }
        }, deo['onReadNativeCallBack'] = function (zodytk, tdazo, bkyotd, h19x, lvmin7, sezxat, dkoyt, uw_r, p49g) {
            h19x === void 0x0 && (h19x = !![]), sezxat === void 0x0 && (sezxat = ![]), uw_r === void 0x0 && (uw_r = 0x0);
            if (!uw_r) {
                var yk_8b;
                if (bkyotd == 'json' || bkyotd == 'atlas') yk_8b = q3inm7['getJson'](p49g['data']);else bkyotd == 'xml' ? yk_8b = toeyz['parseXMLFromString'](p49g['data']) : yk_8b = p49g['data'];
                dkoyt['onLoaded'](yk_8b), !q3inm7['isZiYu'] && q3inm7['isPosMsgYu'] && bkyotd != 'arraybuffer' && wx['postMessage']({
                    'url': tdazo,
                    'data': yk_8b,
                    'isLoad': !![]
                });
            } else uw_r == 0x1 && q3inm7['EnvConfig']['load']['call'](dkoyt, tdazo, bkyotd, h19x, lvmin7, sezxat);
        }, u_5r(deo, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), deo;
    }(),
        zsa9ex = function (wru_5) {
        function gvl6f4() {
            gvl6f4['__super']['call'](this);
            ;
        }
        return u_r2w(gvl6f4, 'laya.wx.mini.MiniFileMgr', wru_5), gvl6f4['isLoadFile'] = function (zetosa) {
            return gvl6f4['_fileTypeArr']['indexOf'](zetosa) != -0x1 ? !![] : ![];
        }, gvl6f4['getFileInfo'] = function (tdeaz) {
            var r825_u = tdeaz['split']('?')[0x0],
                hp6f4g = gvl6f4['filesListObj'][r825_u];
            if (hp6f4g == null) return null;else return hp6f4g;
            return null;
        }, gvl6f4['onFileUpdate'] = function (ghp6f, p914h) {
            var bokdyt = ghp6f['split']('/'),
                lg6v4 = bokdyt[bokdyt['length'] - 0x1],
                pg6fv = gvl6f4['getFileInfo'](p914h);
            if (pg6fv == null) gvl6f4['onSaveFile'](p914h, lg6v4);else {
                if (pg6fv['readyUrl'] != p914h) gvl6f4['remove'](lg6v4, p914h);
            }
        }, gvl6f4['exits'] = function (kydbt, ztsea) {
            var datez = gvl6f4['getFileNativePath'](kydbt);
            gvl6f4['fs']['getFileInfo']({
                'filePath': datez,
                'success': function (w0u_) {
                    ztsea != null && ztsea['runWith']([0x0, w0u_]);
                },
                'fail': function (ybktod) {
                    ztsea != null && ztsea['runWith']([0x1, ybktod]);
                }
            });
        }, gvl6f4['read'] = function (niv7l, dy, azedto, dkyrb) {
            dy === void 0x0 && (dy = 'ascill'), dkyrb === void 0x0 && (dkyrb = '');
            var hs91px;
            dkyrb != '' ? hs91px = gvl6f4['getFileNativePath'](niv7l) : hs91px = niv7l, gvl6f4['fs']['readFile']({
                'filePath': hs91px,
                'encoding': dy,
                'success': function (br5_8k) {
                    azedto != null && azedto['runWith']([0x0, br5_8k]);
                },
                'fail': function (ydktoz) {
                    if (ydktoz && dkyrb != '') gvl6f4['down'](dkyrb, dy, azedto, dkyrb);else azedto != null && azedto['runWith']([0x1]);
                }
            });
        }, gvl6f4['readNativeFile'] = function (q3nmi, uw_05) {
            gvl6f4['fs']['readFile']({
                'filePath': q3nmi,
                'encoding': '',
                'success': function (br8y_k) {
                    uw_05 != null && uw_05['runWith']([0x0]);
                },
                'fail': function (br28_) {
                    uw_05 != null && uw_05['runWith']([0x1]);
                }
            });
        }, gvl6f4['down'] = function (p1g9hx, kr5b_8, q3jm, yd8brk) {
            kr5b_8 === void 0x0 && (kr5b_8 = 'ascill'), yd8brk === void 0x0 && (yd8brk = '');
            var xaes9z = gvl6f4['getFileNativePath'](yd8brk),
                vi7lmn = gvl6f4['wxdown']({
                'url': p1g9hx,
                'filePath': xaes9z,
                'success': function (qjmi$) {
                    if (qjmi$['statusCode'] === 0xc8) gvl6f4['readFile'](qjmi$['filePath'], kr5b_8, q3jm, yd8brk);
                },
                'fail': function (xsh9) {
                    q3jm != null && q3jm['runWith']([0x1, xsh9]);
                }
            });
            vi7lmn['onProgressUpdate'](function (g46fh) {
                q3jm != null && q3jm['runWith']([0x2, g46fh['progress']]);
            });
        }, gvl6f4['readFile'] = function (mjq3$i, m$iqj3, otdbky, f64lg) {
            m$iqj3 === void 0x0 && (m$iqj3 = 'ascill'), f64lg === void 0x0 && (f64lg = ''), gvl6f4['fs']['readFile']({
                'filePath': mjq3$i,
                'encoding': m$iqj3,
                'success': function (n46) {
                    if (mjq3$i['indexOf']('http://') != -0x1 || mjq3$i['indexOf']('https://') != -0x1) gvl6f4['onFileUpdate'](mjq3$i, f64lg);
                    otdbky != null && otdbky['runWith']([0x0, n46]);
                },
                'fail': function (b_rk58) {
                    if (b_rk58) otdbky != null && otdbky['runWith']([0x1, b_rk58]);
                }
            });
        }, gvl6f4['downImg'] = function (h9ax1, eodytz, szoeat) {
            szoeat === void 0x0 && (szoeat = '');
            var ilv7nm = gvl6f4['wxdown']({
                'url': h9ax1,
                'success': function (teadzo) {
                    teadzo['statusCode'] === 0xc8 && gvl6f4['copyFile'](teadzo['tempFilePath'], szoeat, eodytz);
                },
                'fail': function (texza) {
                    eodytz != null && eodytz['runWith']([0x1, texza]);
                }
            });
        }, gvl6f4['copyFile'] = function (m$73i, l7fnv6, xps91) {
            var zdtoye = m$73i['split']('/'),
                tobky = zdtoye[zdtoye['length'] - 0x1],
                i$3jmq = l7fnv6['split']('?')[0x0],
                dkbty = gvl6f4['getFileInfo'](l7fnv6),
                rb_8k5 = gvl6f4['getFileNativePath'](tobky);
            gvl6f4['fs']['copyFile']({
                'srcPath': m$73i,
                'destPath': rb_8k5,
                'success': function (ybr) {
                    if (!dkbty) gvl6f4['onSaveFile'](l7fnv6, tobky), xps91 != null && xps91['runWith']([0x0]);else {
                        if (dkbty['readyUrl'] != l7fnv6) gvl6f4['remove'](tobky, l7fnv6, xps91);
                    }
                },
                'fail': function (_5w2) {
                    xps91 != null && xps91['runWith']([0x1, _5w2]);
                }
            });
        }, gvl6f4['getFileNativePath'] = function (m$q3) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + m$q3;
        }, gvl6f4['remove'] = function (pg4h19, eyoztd, za9sx) {
            eyoztd === void 0x0 && (eyoztd = '');
            var $mi73q = gvl6f4['getFileInfo'](eyoztd),
                dokby = gvl6f4['getFileNativePath']($mi73q['md5']);
            q3i7$m['loader']['clearRes']($mi73q['readyUrl']), gvl6f4['fs']['unlink']({
                'filePath': dokby,
                'success': function (nqm3) {
                    if (eyoztd != '') gvl6f4['onSaveFile'](eyoztd, pg4h19);
                    za9sx != null && za9sx['runWith']([0x0]);
                },
                'fail': function (b8k_r5) {}
            });
        }, gvl6f4['onSaveFile'] = function (xesta, ybdkot) {
            var r8_k = xesta['split']('?')[0x0];
            gvl6f4['filesListObj'][r8_k] = {
                'md5': ybdkot,
                'readyUrl': xesta
            }, gvl6f4['fs']['writeFile']({
                'filePath': gvl6f4['fileNativeDir'] + '/' + gvl6f4['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](gvl6f4['filesListObj']),
                'success': function (do8) {
                    console['log']('写入测试测试成功：', do8);
                },
                'fail': function (y8krbd) {
                    console['log']('写入测试测试失败：', y8krbd);
                }
            });
        }, gvl6f4['existDir'] = function (fpgh4, ky8dob) {
            gvl6f4['fs']['mkdir']({
                'dirPath': fpgh4,
                'success': function (iln7vf) {
                    ky8dob != null && ky8dob['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (hpx1s) {
                    if (hpx1s['errMsg']['indexOf']('file already exists') != -0x1) gvl6f4['readSync'](gvl6f4['fileListName'], 'utf8', ky8dob);else ky8dob != null && ky8dob['runWith']([0x1, hpx1s]);
                }
            });
        }, gvl6f4['readSync'] = function (i73$q, _wu25, gh1px9, l73inm) {
            _wu25 === void 0x0 && (_wu25 = 'ascill'), l73inm === void 0x0 && (l73inm = '');
            var jm3$qi = gvl6f4['getFileNativePath'](i73$q),
                p4fh6;
            try {
                p4fh6 = gvl6f4['fs']['readFileSync'](jm3$qi), gh1px9 != null && gh1px9['runWith']([0x0, { 'data': p4fh6 }]);
            } catch (eaxzt) {
                gh1px9 != null && gh1px9['runWith']([0x1]);
            }
        }, gvl6f4['readCache'] = function () {}, gvl6f4['writeCache'] = function (hpx1) {
            var okzytd = readyUrl['split']('?')[0x0];
            gvl6f4['filesListObj'][okzytd] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, gvl6f4['fs']['writeFile']({
                'filePath': gvl6f4['fileNativeDir'] + '/' + gvl6f4['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](gvl6f4['filesListObj']),
                'success': function (drykb8) {},
                'fail': function (gpx19) {}
            });
        }, gvl6f4['setNativeFileDir'] = function (by8r_k) {
            gvl6f4['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + by8r_k;
        }, gvl6f4['filesListObj'] = {}, gvl6f4['fileNativeDir'] = null, gvl6f4['fileListName'] = 'layaairfiles.txt', gvl6f4['ziyuFileData'] = {}, u_5r(gvl6f4, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), gvl6f4;
    }(inv7ml),
        vfin7l = function (nm7i) {
        function lvfn64() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], lvfn64['__super']['call'](this), this['_sound'] = lvfn64['_createSound'](), this['_chanell'] = new vnf4l6(this['_sound']);
        }
        u_r2w(lvfn64, 'laya.wx.mini.MiniSound', nm7i);
        var zktdoy = lvfn64['prototype'];
        return zktdoy['load'] = function (ex9az) {
            var ytdzo = this;
            ex9az = ivlm7['formatURL'](ex9az), this['url'] = ex9az;
            if (lvfn64['_audioCache'][ex9az]) {
                this['event']('complete');
                return;
            }
            function oes() {
                if (lvfn64['_null'] != undefined) ytdzo['_sound']['onCanplay'](lvfn64['_null']), ytdzo['_sound']['onError'](lvfn64['_null']);else try {
                    ytdzo['_sound']['onCanplay'](null), ytdzo['_sound']['onError'](null), lvfn64['_null'] = null;
                } catch (exz9sa) {
                    console['warn']('[wxmini] _clearSound:' + exz9sa), ytdzo['_sound']['onCanplay'](qn3mi), ytdzo['_sound']['onError'](qn3mi), lvfn64['_null'] = qn3mi;
                }
            }
            function odtkyz() {
                o8bdy['loaded'] = !![], o8bdy['event']('complete'), lvfn64['_audioCache'][o8bdy['url']] = o8bdy;
            }
            function iq$j(g49h1) {
                console['error']('errCode=' + g49h1['errCode'] + '  errMsg=' + g49h1['errMsg']), o8bdy['event']('error');
            }
            function qn3mi() {}
            this['_sound']['onCanplay'](odtkyz), this['_sound']['onError'](iq$j), this['_sound']['src'] = ex9az;
            var o8bdy = this;
        }, zktdoy['play'] = function (bdy8k, nfl) {
            bdy8k === void 0x0 && (bdy8k = 0x0), nfl === void 0x0 && (nfl = 0x0);
            var gxh91, eas1x9;
            if (this['url'] == zedyto['_tMusic']) {
                if (!lvfn64['_musicAudio']) lvfn64['_musicAudio'] = this['_sound'];
                gxh91 = lvfn64['_musicAudio'], eas1x9 = this['_chanell'];
            } else gxh91 = this['_sound'], eas1x9 = this['_chanell'];
            return gxh91['src'] = this['url'], gxh91['startTime'] = 0x0, eas1x9['isStopped'] && (eas1x9['url'] = this['url'], eas1x9['loops'] = nfl, eas1x9['startTime'] = bdy8k, eas1x9['play'](), zedyto['addChannel'](eas1x9)), eas1x9;
        }, zktdoy['dispose'] = function () {
            var teoasz = lvfn64['_audioCache'][this['url']];
            teoasz && (teoasz['src'] = '', delete lvfn64['_audioCache'][this['url']]);
        }, aezs(0x0, zktdoy, 'duration', function () {
            return this['_sound']['duration'];
        }), lvfn64['_createSound'] = function () {
            lvfn64['_id']++;
            var nm3i7l = q3inm7['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return nm3i7l;
        }, lvfn64['_musicAudio'] = null, lvfn64['_id'] = 0x0, lvfn64['_audioCache'] = {}, lvfn64['_null'] = undefined, lvfn64;
    }(inv7ml),
        vnf4l6 = function (u258_r) {
        function vm7nl(rk8_b5) {
            this['_audio'] = null, this['_onEnd'] = null, vm7nl['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = rk8_b5, this['_onEnd'] = toeyz['bind'](this['__onEnd'], this), rk8_b5['onEnded'](this['_onEnd']);
        }
        u_r2w(vm7nl, 'laya.wx.mini.MiniSoundChannel', u258_r);
        var dybo8k = vm7nl['prototype'];
        return dybo8k['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (q3i7$m['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, dybo8k['__onNull'] = function () {}, dybo8k['play'] = function () {
            this['isStopped'] = ![], zedyto['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, dybo8k['stop'] = function () {
            this['isStopped'] = !![], zedyto['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, dybo8k['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, dybo8k['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], zedyto['addChannel'](this), this['_audio']['play']();
        }, aezs(0x0, dybo8k, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), aezs(0x0, dybo8k, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), aezs(0x0, dybo8k, 'volume', function () {
            return 0x1;
        }, function (n73qim) {}), vm7nl['_null'] = undefined, vm7nl;
    }(p46h1),
        zxs9ea = function () {
        function ykdt() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = q3inm7['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        u_r2w(ykdt, 'laya.wx.mini.MiniVideo');
        var n3i7l = ykdt['prototype'];
        return n3i7l['on'] = function (ru_5w2, a9hs1x, lin7mv) {
            if (ru_5w2 == 'loadedmetadata') this['onPlayFunc'] = lin7mv['bind'](a9hs1x), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else ru_5w2 == 'ended' && (this['onEndedFunC'] = lin7mv['bind'](a9hs1x), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, n3i7l['onTimeUpdateFunc'] = function (q3i$m) {
            this['position'] = q3i$m['position'], this['_duration'] = q3i$m['duration'];
        }, n3i7l['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, n3i7l['onended'] = function (br_y8, vln) {
            this['onEndedFunC'] = vln['bind'](br_y8), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, n3i7l['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, n3i7l['off'] = function (zx9es, l76nvf, h1gp49) {
            if (zx9es == 'loadedmetadata') this['onPlayFunc'] = h1gp49['bind'](l76nvf), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else zx9es == 'ended' && (this['onEndedFunC'] = h1gp49['bind'](l76nvf), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, n3i7l['load'] = function (mi7nl3) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = mi7nl3;
        }, n3i7l['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, n3i7l['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, n3i7l['size'] = function (n7lm3, ml7ni3) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = n7lm3, this['videoElement']['height'] = ml7ni3;
        }, n3i7l['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, n3i7l['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, aezs(0x0, n3i7l, 'duration', function () {
            return this['_duration'];
        }), aezs(0x0, n3i7l, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (gph491) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = gph491;
        }), aezs(0x0, n3i7l, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), aezs(0x0, n3i7l, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), aezs(0x0, n3i7l, 'ended', function () {
            return this['videoend'];
        }), aezs(0x0, n3i7l, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (as1) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = as1;
        }), aezs(0x0, n3i7l, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (taez) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = taez;
        }), aezs(0x0, n3i7l, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (sxzat) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = sxzat;
        }), aezs(0x0, n3i7l, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), aezs(0x0, n3i7l, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (l4fv6n) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = l4fv6n;
        }), aezs(0x0, n3i7l, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (wr25_) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = wr25_;
        }), aezs(0x0, n3i7l, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), aezs(0x0, n3i7l, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (l73ni) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = l73ni;
        }), aezs(0x0, n3i7l, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (xa91e) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = xa91e;
        }), aezs(0x0, n3i7l, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (exstz) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = exstz;
        }), ykdt;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var n3iqm in Laya) {
        var sat = Laya[n3iqm];
        sat && sat['__isclass'] && (exports[n3iqm] = sat);
    }
});