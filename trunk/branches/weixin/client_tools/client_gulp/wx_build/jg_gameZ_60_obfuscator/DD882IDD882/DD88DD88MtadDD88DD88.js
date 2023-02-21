var G = wx.$E;
(function (window, document, _t12si) {
    var qwrf8v = _t12si['un'],
        npoxy = _t12si['uns'],
        hpyl = _t12si['static'],
        i_j15d = _t12si['class'],
        f4b78m = _t12si['getset'],
        _203ts = _t12si['__newvec'],
        nlygp = laya['utils']['Browser'],
        v7m8w = laya['events']['Event'],
        c$5k6 = laya['events']['EventDispatcher'],
        wruavq = laya['resource']['HTMLImage'],
        wvqfr8 = laya['utils']['Handler'],
        c6$4kb = laya['display']['Input'],
        $ckj65 = laya['net']['Loader'],
        dtji_1 = laya['maths']['Matrix'],
        d5_ji = laya['renders']['Render'],
        q9rv = laya['utils']['RunDriver'],
        j6$5k = laya['media']['Sound'],
        _st231 = laya['media']['SoundChannel'],
        h9urq = laya['media']['SoundManager'],
        hpg = laya['display']['Stage'],
        q8rvw = laya['net']['URL'],
        $k5j = laya['utils']['Utils'],
        $64ck5 = function () {
        function y9uhpg() {}
        return i_j15d(y9uhpg, 'laya.wx.mini.MiniAdpter'), y9uhpg['getJson'] = function (ikdj5) {
            return JSON['parse'](ikdj5);
        }, y9uhpg['init'] = function (k$mcb, xyonl) {
            k$mcb === void 0x0 && (k$mcb = ![]), xyonl === void 0x0 && (xyonl = ![]);
            if (y9uhpg['_inited']) return;
            y9uhpg['window'] = window;
            if (y9uhpg['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            y9uhpg['_inited'] = !![], y9uhpg['isZiYu'] = xyonl, y9uhpg['isPosMsgYu'] = k$mcb, y9uhpg['EnvConfig'] = {}, !y9uhpg['isZiYu'] && (_302s['setNativeFileDir']('/layaairGame'), _302s['existDir'](_302s['fileNativeDir'], wvqfr8['create'](y9uhpg, y9uhpg['onMkdirCallBack']))), y9uhpg['window']['focus'] = function () {}, _t12si['getUrlPath'] = function () {}, y9uhpg['window']['logtime'] = function (ug9ha) {}, y9uhpg['window']['alertTimeLog'] = function (yxpgn) {}, y9uhpg['window']['resetShareInfo'] = function () {}, y9uhpg['window']['CanvasRenderingContext2D'] = function () {}, y9uhpg['window']['CanvasRenderingContext2D']['prototype'] = y9uhpg['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], y9uhpg['window']['document']['body']['appendChild'] = function () {}, y9uhpg['EnvConfig']['pixelRatioInt'] = 0x0, q9rv['getPixelRatio'] = y9uhpg['pixelRatio'], y9uhpg['_preCreateElement'] = nlygp['createElement'], nlygp['createElement'] = y9uhpg['createElement'], q9rv['createShaderCondition'] = y9uhpg['createShaderCondition'], $k5j['parseXMLFromString'] = y9uhpg['parseXMLFromString'], c6$4kb['_createInputElement'] = rfvq8['_createInputElement'], y9uhpg['EnvConfig']['load'] = $ckj65['prototype']['load'], $ckj65['prototype']['load'] = st123['prototype']['load'], y9uhpg['isZiYu'] && k$mcb && wx['onMessage'](function ($5k6dj) {
                $5k6dj['isLoad'] && (_302s['ziyuFileData'][$5k6dj['url']] = $5k6dj['data']);
            });
        }, y9uhpg['onMkdirCallBack'] = function (pylh, bk6c4$) {
            if (!pylh) _302s['filesListObj'] = JSON['parse'](bk6c4$['data']);
        }, y9uhpg['pixelRatio'] = function () {
            if (!y9uhpg['EnvConfig']['pixelRatioInt']) try {
                var vwrqua = wx['getSystemInfoSync']();
                return y9uhpg['EnvConfig']['pixelRatioInt'] = vwrqua['pixelRatio'], vwrqua = vwrqua, vwrqua['pixelRatio'];
            } catch (d56kji) {}
            return y9uhpg['EnvConfig']['pixelRatioInt'];
        }, y9uhpg['createElement'] = function (aqguh) {
            if (aqguh == 'canvas') {
                var c6k$5;
                return y9uhpg['idx'] == 0x1 ? y9uhpg['isZiYu'] ? (c6k$5 = sharedCanvas, c6k$5['style'] = {}) : c6k$5 = window['canvas'] : c6k$5 = window['wx']['createCanvas'](), y9uhpg['idx']++, c6k$5;
            } else {
                if (aqguh == 'textarea' || aqguh == 'input') return y9uhpg['onCreateInput'](aqguh);else {
                    if (aqguh == 'div') {
                        var hau9g = y9uhpg['_preCreateElement'](aqguh);
                        return hau9g['contains'] = function (ruhq) {
                            return null;
                        }, hau9g['removeChild'] = function (ts032z) {}, hau9g;
                    } else return y9uhpg['_preCreateElement'](aqguh);
                }
            }
        }, y9uhpg['onCreateInput'] = function (b$64) {
            var avr8 = y9uhpg['_preCreateElement'](b$64);
            return avr8['focus'] = rfvq8['wxinputFocus'], avr8['blur'] = rfvq8['wxinputblur'], avr8['style'] = {}, avr8['value'] = 0x0, avr8['parentElement'] = {}, avr8['placeholder'] = {}, avr8['type'] = {}, avr8['setColor'] = function (arh9u) {}, avr8['setType'] = function (s_i21) {}, avr8['setFontFace'] = function (b74m) {}, avr8['addEventListener'] = function (j$c5) {}, avr8['contains'] = function (uq9hag) {
                return null;
            }, avr8['removeChild'] = function (uy9pg) {}, avr8;
        }, y9uhpg['createShaderCondition'] = function (hn9) {
            var lxpyo = this,
                aqvru = function () {
                var _sd1t = hn9;
                return lxpyo[hn9['replace']('this.', '')];
            };
            return aqvru;
        }, y9uhpg['EnvConfig'] = null, y9uhpg['window'] = null, y9uhpg['_preCreateElement'] = null, y9uhpg['_inited'] = ![], y9uhpg['wxRequest'] = null, y9uhpg['systemInfo'] = null, y9uhpg['version'] = '0.0.1', y9uhpg['isZiYu'] = ![], y9uhpg['isPosMsgYu'] = ![], y9uhpg['parseXMLFromString'] = function (_tis12) {
            var d_t1is, d1itj_;
            _tis12 = _tis12['replace'](/>\s+</g, '><');
            try {
                d_t1is = new window['Parser']['DOMParser']()['parseFromString'](_tis12, 'text/xml');
            } catch (ngplh) {
                throw '需要引入xml解析库文件';
            }
            return d_t1is;
        }, y9uhpg['idx'] = 0x1, y9uhpg;
    }(),
        z2s03 = function () {
        function quv9ar() {}
        i_j15d(quv9ar, 'laya.wx.mini.MiniImage');
        var fwm7v8 = quv9ar['prototype'];
        return fwm7v8['_loadImage'] = function (t3s1) {
            var rvaq8 = this,
                sd1_it = ![];
            t3s1['indexOf']('layaNativeDir/') == -0x1 && (sd1_it = !![], t3s1 = q8rvw['formatURL'](t3s1));
            if (!_302s['getFileInfo'](t3s1)) {
                if (t3s1['indexOf']('http://') != -0x1 || t3s1['indexOf']('https://') != -0x1) _302s['downImg'](t3s1, new wvqfr8(quv9ar, quv9ar['onDownImgCallBack'], [t3s1, rvaq8]), t3s1);else quv9ar['onCreateImage'](t3s1, rvaq8, !![]);
            } else quv9ar['onCreateImage'](t3s1, rvaq8, !sd1_it);
        }, quv9ar['onDownImgCallBack'] = function (pyh9u, lnp, wrfv) {
            if (!wrfv) quv9ar['onCreateImage'](pyh9u, lnp);else lnp['onError'](null);
        }, quv9ar['onCreateImage'] = function (f47mb8, hrau9, q8rav) {
            q8rav === void 0x0 && (q8rav = ![]);
            var f4mbc;
            if (!q8rav) {
                var st_320 = _302s['getFileInfo'](f47mb8),
                    lxgpyn = st_320['md5'];
                f4mbc = _302s['getFileNativePath'](lxgpyn);
            } else f4mbc = f47mb8;
            if (hrau9['imgCache'] == null) hrau9['imgCache'] = {};
            var c47fbm;
            function j$d56() {
                c47fbm['onload'] = null, c47fbm['onerror'] = null, delete hrau9['imgCache'][f47mb8];
            }
            ;
            var kid6 = function () {
                j$d56(), hrau9['onLoaded'](c47fbm);
            },
                u9hpg = function () {
                j$d56(), hrau9['event']('error', 'Load image failed');
            };
            hrau9['_type'] == 'nativeimage' ? (c47fbm = new nlygp['window']['Image'](), c47fbm['crossOrigin'] = '', c47fbm['onload'] = kid6, c47fbm['onerror'] = u9hpg, c47fbm['src'] = f4mbc, hrau9['imgCache'][f47mb8] = c47fbm) : new wruavq['create'](f4mbc, {
                'onload': kid6,
                'onerror': u9hpg,
                'onCreate': function (j6i1d5) {
                    c47fbm = j6i1d5, hrau9['imgCache'][f47mb8] = j6i1d5;
                }
            });
        }, quv9ar;
    }(),
        rfvq8 = function () {
        function i1tsd_() {}
        return i_j15d(i1tsd_, 'laya.wx.mini.MiniInput'), i1tsd_['_createInputElement'] = function () {
            c6$4kb['_initInput'](c6$4kb['area'] = nlygp['createElement']('textarea')), c6$4kb['_initInput'](c6$4kb['input'] = nlygp['createElement']('input')), c6$4kb['inputContainer'] = nlygp['createElement']('div'), c6$4kb['inputContainer']['style']['position'] = 'absolute', c6$4kb['inputContainer']['style']['zIndex'] = 0x186a0, nlygp['container']['appendChild'](c6$4kb['inputContainer']), c6$4kb['inputContainer']['setPos'] = function (hp9gn, _id5j1) {
                c6$4kb['inputContainer']['style']['left'] = hp9gn + 'px', c6$4kb['inputContainer']['style']['top'] = _id5j1 + 'px';
            }, _t12si['stage']['on']('resize', null, i1tsd_['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (k$j6c5) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), h9urq['_soundClass'] = ck$654, h9urq['_musicClass'] = ck$654, window['_videoClass'] = uaqv9;
        }, i1tsd_['_onStageResize'] = function () {
            var $64k = _t12si['stage']['_canvasTransform']['identity']();
            $64k['scale'](nlygp['width'] / d5_ji['canvas']['width'] / q9rv['getPixelRatio'](), nlygp['height'] / d5_ji['canvas']['height'] / q9rv['getPixelRatio']());
        }, i1tsd_['wxinputFocus'] = function (ny9phg) {
            var rwuav = c6$4kb['inputElement']['target'];
            if (rwuav && !rwuav['editable']) return;
            $64ck5['window']['wx']['offKeyboardConfirm'](), $64ck5['window']['wx']['offKeyboardInput'](), $64ck5['window']['wx']['showKeyboard']({
                'defaultValue': rwuav['text'],
                'maxLength': rwuav['maxChars'],
                'multiple': rwuav['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (ji5d1_) {},
                'fail': function (_ts12) {}
            }), $64ck5['window']['wx']['onKeyboardConfirm'](function (jd_51) {
                var uqwrav = jd_51 ? jd_51['value'] : '';
                rwuav['text'] = uqwrav, rwuav['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), $64ck5['window']['wx']['onKeyboardInput'](function (p9guhy) {
                var hqga = p9guhy ? p9guhy['value'] : '';
                if (!rwuav['multiline']) {
                    if (hqga['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                rwuav['text'] = hqga, rwuav['event']('input');
            });
        }, i1tsd_['inputEnter'] = function () {
            c6$4kb['inputElement']['target']['focus'] = ![];
        }, i1tsd_['wxinputblur'] = function () {
            i1tsd_['hideKeyboard']();
        }, i1tsd_['hideKeyboard'] = function () {
            $64ck5['window']['wx']['offKeyboardConfirm'](), $64ck5['window']['wx']['offKeyboardInput'](), $64ck5['window']['wx']['hideKeyboard']({
                'success': function (j6$d) {
                    console['log']('隐藏键盘');
                },
                'fail': function (fwv7m) {
                    console['log']('隐藏键盘出错:' + (fwv7m ? fwv7m['errMsg'] : ''));
                }
            });
        }, i1tsd_;
    }(),
        st123 = function () {
        function di_15() {}
        i_j15d(di_15, 'laya.wx.mini.MiniLoader');
        var i1t2_s = di_15['prototype'];
        return i1t2_s['load'] = function (yhp9ug, wvrq, qvwua, yglnph, gyhpn) {
            qvwua === void 0x0 && (qvwua = !![]), gyhpn === void 0x0 && (gyhpn = ![]);
            var hgaq9u = this;
            hgaq9u['_url'] = yhp9ug;
            if (yhp9ug['indexOf']('data:image') === 0x0) hgaq9u['_type'] = wvrq = 'image';else hgaq9u['_type'] = wvrq || (wvrq = hgaq9u['getTypeFromUrl'](yhp9ug));
            hgaq9u['_cache'] = qvwua, hgaq9u['_data'] = null;
            var r9quh = 'ascii';
            if (yhp9ug['indexOf']('.fnt') != -0x1) r9quh = 'utf8';else wvrq == 'arraybuffer' && (r9quh = '');
            ;
            var k56c$4 = $k5j['getFileExtension'](yhp9ug);
            if (di_15['_fileTypeArr']['indexOf'](k56c$4) != -0x1) $64ck5['EnvConfig']['load']['call'](this, yhp9ug, wvrq, qvwua, yglnph, gyhpn);else {
                if (!_302s['getFileInfo'](yhp9ug)) {
                    if (yhp9ug['indexOf']('layaNativeDir/') != -0x1) {
                        if ($64ck5['isZiYu']) {
                            var s3zt20 = _302s['ziyuFileData'][yhp9ug];
                            hgaq9u['onLoaded'](s3zt20);
                            return;
                        } else {
                            cosnole['log']('read read'), _302s['read'](yhp9ug, r9quh, new wvqfr8(di_15, di_15['onReadNativeCallBack'], [r9quh, yhp9ug, wvrq, qvwua, yglnph, gyhpn, hgaq9u]));
                            return;
                        }
                    }
                    if (q8rvw['rootPath'] == '') var av9qru = yhp9ug;else av9qru = yhp9ug['split'](q8rvw['rootPath'])[0x0];
                    yhp9ug['indexOf']('http://') != -0x1 || yhp9ug['indexOf']('https://') != -0x1 ? $64ck5['EnvConfig']['load']['call'](hgaq9u, yhp9ug, wvrq, qvwua, yglnph, gyhpn) : _302s['readFile'](av9qru, r9quh, new wvqfr8(di_15, di_15['onReadNativeCallBack'], [r9quh, yhp9ug, wvrq, qvwua, yglnph, gyhpn, hgaq9u]), yhp9ug);
                } else $64ck5['EnvConfig']['load']['call'](this, yhp9ug, wvrq, qvwua, yglnph, gyhpn);
            }
        }, i1t2_s['resMgrLoad'] = function (ghnlpy, qa9rhu, ylpnxo, $54k6, gu9yp, j1d_5i, f7m4b8) {
            ylpnxo === void 0x0 && (ylpnxo = 0x0), $54k6 === void 0x0 && ($54k6 = ![]), gu9yp === void 0x0 && (gu9yp = ![]), j1d_5i === void 0x0 && (j1d_5i = 0x0), f7m4b8 === void 0x0 && (f7m4b8 = 0x3), ghnlpy['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', ghnlpy), $64ck5['EnvConfig']['resMgrLoad'](ghnlpy, (pghyu, ik56jd, kc4$m) => {
                di_15['prototype']['resMgrLoadCallBack'](pghyu, ik56jd, kc4$m, qa9rhu);
            }, ylpnxo, $54k6, gu9yp, j1d_5i, f7m4b8);
        }, i1t2_s['resMgrLoadCallBack'] = function (uh9ra, _ij1d5, zs02t, $jkd65) {
            console['log']('buff:::', uh9ra, zs02t, _302s['fileNativeDir'] + '///' + _302s['fileListName']), $jkd65(uh9ra, _ij1d5, zs02t);
        }, i1t2_s['clearRes'] = function (ghlyp, va8qrw) {
            va8qrw === void 0x0 && (va8qrw = ![]);
            var _ti21 = this;
            _ti21['clearRes'](ghlyp, va8qrw);
            var vwrfq8 = _302s['getFileInfo'](ghlyp);
            if (vwrfq8 && (ghlyp['indexOf']('http://') != -0x1 || ghlyp['indexOf']('https://') != -0x1)) {
                var $mck4 = vwrfq8['md5'],
                    ha9upg = _302s['getFileNativePath']($mck4);
                _302s['remove'](ha9upg);
            }
        }, di_15['onReadNativeCallBack'] = function (vfwm8, k6$b4c, i_j5, xngp, $m7c4, $46k5c, phlg, b47mf8, hnpy9g) {
            xngp === void 0x0 && (xngp = !![]), $46k5c === void 0x0 && ($46k5c = ![]), b47mf8 === void 0x0 && (b47mf8 = 0x0);
            if (!b47mf8) {
                var $4kc56;
                if (i_j5 == 'json' || i_j5 == 'atlas') $4kc56 = $64ck5['getJson'](hnpy9g['data']);else i_j5 == 'xml' ? $4kc56 = $k5j['parseXMLFromString'](hnpy9g['data']) : $4kc56 = hnpy9g['data'];
                phlg['onLoaded']($4kc56), !$64ck5['isZiYu'] && $64ck5['isPosMsgYu'] && i_j5 != 'arraybuffer' && wx['postMessage']({
                    'url': k6$b4c,
                    'data': $4kc56,
                    'isLoad': !![]
                });
            } else b47mf8 == 0x1 && $64ck5['EnvConfig']['load']['call'](phlg, k6$b4c, i_j5, xngp, $m7c4, $46k5c);
        }, hpyl(di_15, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), di_15;
    }(),
        _302s = function (ygpnxl) {
        function t12s_3() {
            t12s_3['__super']['call'](this);
            ;
        }
        return i_j15d(t12s_3, 'laya.wx.mini.MiniFileMgr', ygpnxl), t12s_3['isLoadFile'] = function (hny9) {
            return t12s_3['_fileTypeArr']['indexOf'](hny9) != -0x1 ? !![] : ![];
        }, t12s_3['getFileInfo'] = function (ts1_23) {
            var qgha = ts1_23['split']('?')[0x0],
                $d6j = t12s_3['filesListObj'][qgha];
            if ($d6j == null) return null;else return $d6j;
            return null;
        }, t12s_3['onFileUpdate'] = function (i_2st1, wqvau) {
            var f7bc = i_2st1['split']('/'),
                qw = f7bc[f7bc['length'] - 0x1],
                _dj15i = t12s_3['getFileInfo'](wqvau);
            if (_dj15i == null) t12s_3['onSaveFile'](wqvau, qw);else {
                if (_dj15i['readyUrl'] != wqvau) t12s_3['remove'](qw, wqvau);
            }
        }, t12s_3['exits'] = function ($c64b, avwqr8) {
            var qaruwv = t12s_3['getFileNativePath']($c64b);
            t12s_3['fs']['getFileInfo']({
                'filePath': qaruwv,
                'success': function (lyphng) {
                    avwqr8 != null && avwqr8['runWith']([0x0, lyphng]);
                },
                'fail': function (k6$dj) {
                    avwqr8 != null && avwqr8['runWith']([0x1, k6$dj]);
                }
            });
        }, t12s_3['read'] = function (bm8wf7, b7m$4, varq8w, v8rwa) {
            b7m$4 === void 0x0 && (b7m$4 = 'ascill'), v8rwa === void 0x0 && (v8rwa = '');
            var gxyp;
            v8rwa != '' ? gxyp = t12s_3['getFileNativePath'](bm8wf7) : gxyp = bm8wf7, t12s_3['fs']['readFile']({
                'filePath': gxyp,
                'encoding': b7m$4,
                'success': function (k65$dj) {
                    varq8w != null && varq8w['runWith']([0x0, k65$dj]);
                },
                'fail': function (p9nhgy) {
                    if (p9nhgy && v8rwa != '') t12s_3['down'](v8rwa, b7m$4, varq8w, v8rwa);else varq8w != null && varq8w['runWith']([0x1]);
                }
            });
        }, t12s_3['readNativeFile'] = function (auvqrw, wfv78m) {
            t12s_3['fs']['readFile']({
                'filePath': auvqrw,
                'encoding': '',
                'success': function (b4k$cm) {
                    wfv78m != null && wfv78m['runWith']([0x0]);
                },
                'fail': function (rwfqv) {
                    wfv78m != null && wfv78m['runWith']([0x1]);
                }
            });
        }, t12s_3['down'] = function (ughp9y, aqrh9u, tz2, pyxlg) {
            aqrh9u === void 0x0 && (aqrh9u = 'ascill'), pyxlg === void 0x0 && (pyxlg = '');
            var v8r7w = t12s_3['getFileNativePath'](pyxlg),
                vfmw87 = t12s_3['wxdown']({
                'url': ughp9y,
                'filePath': v8r7w,
                'success': function (gn9phy) {
                    if (gn9phy['statusCode'] === 0xc8) t12s_3['readFile'](gn9phy['filePath'], aqrh9u, tz2, pyxlg);
                },
                'fail': function ($7b4) {
                    tz2 != null && tz2['runWith']([0x1, $7b4]);
                }
            });
            vfmw87['onProgressUpdate'](function (vw8qr) {
                tz2 != null && tz2['runWith']([0x2, vw8qr['progress']]);
            });
        }, t12s_3['readFile'] = function (wrauv, phuy9g, i51d6j, lpghn) {
            phuy9g === void 0x0 && (phuy9g = 'ascill'), lpghn === void 0x0 && (lpghn = ''), t12s_3['fs']['readFile']({
                'filePath': wrauv,
                'encoding': phuy9g,
                'success': function (qf8w) {
                    if (wrauv['indexOf']('http://') != -0x1 || wrauv['indexOf']('https://') != -0x1) t12s_3['onFileUpdate'](wrauv, lpghn);
                    i51d6j != null && i51d6j['runWith']([0x0, qf8w]);
                },
                'fail': function (cb$km) {
                    if (cb$km) i51d6j != null && i51d6j['runWith']([0x1, cb$km]);
                }
            });
        }, t12s_3['downImg'] = function (ruawqv, aqu9rv, dj1ti) {
            dj1ti === void 0x0 && (dj1ti = '');
            var yuph = t12s_3['wxdown']({
                'url': ruawqv,
                'success': function (rqauh) {
                    rqauh['statusCode'] === 0xc8 && t12s_3['copyFile'](rqauh['tempFilePath'], dj1ti, aqu9rv);
                },
                'fail': function (gpyxn) {
                    aqu9rv != null && aqu9rv['runWith']([0x1, gpyxn]);
                }
            });
        }, t12s_3['copyFile'] = function (j_5i, raq8, cb$k4) {
            var oplyxn = j_5i['split']('/'),
                qvrau = oplyxn[oplyxn['length'] - 0x1],
                waqurv = raq8['split']('?')[0x0],
                s3_0 = t12s_3['getFileInfo'](raq8),
                t02s_3 = t12s_3['getFileNativePath'](qvrau);
            t12s_3['fs']['copyFile']({
                'srcPath': j_5i,
                'destPath': t02s_3,
                'success': function (s_t032) {
                    if (!s3_0) t12s_3['onSaveFile'](raq8, qvrau), cb$k4 != null && cb$k4['runWith']([0x0]);else {
                        if (s3_0['readyUrl'] != raq8) t12s_3['remove'](qvrau, raq8, cb$k4);
                    }
                },
                'fail': function (s1dt) {
                    cb$k4 != null && cb$k4['runWith']([0x1, s1dt]);
                }
            });
        }, t12s_3['getFileNativePath'] = function (ghp9a) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ghp9a;
        }, t12s_3['remove'] = function (phylg, wbm7f8, hplng) {
            wbm7f8 === void 0x0 && (wbm7f8 = '');
            var vwra8q = t12s_3['getFileInfo'](wbm7f8),
                _1j5 = t12s_3['getFileNativePath'](vwra8q['md5']);
            _t12si['loader']['clearRes'](vwra8q['readyUrl']), t12s_3['fs']['unlink']({
                'filePath': _1j5,
                'success': function (w78v) {
                    if (wbm7f8 != '') t12s_3['onSaveFile'](wbm7f8, phylg);
                    hplng != null && hplng['runWith']([0x0]);
                },
                'fail': function (i_1t2s) {}
            });
        }, t12s_3['onSaveFile'] = function (nglphy, kd6ij5) {
            var d5ki = nglphy['split']('?')[0x0];
            t12s_3['filesListObj'][d5ki] = {
                'md5': kd6ij5,
                'readyUrl': nglphy
            }, t12s_3['fs']['writeFile']({
                'filePath': t12s_3['fileNativeDir'] + '/' + t12s_3['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](t12s_3['filesListObj']),
                'success': function (a9hug) {
                    console['log']('写入测试测试成功：', a9hug);
                },
                'fail': function (hag9pu) {
                    console['log']('写入测试测试失败：', hag9pu);
                }
            });
        }, t12s_3['existDir'] = function (j56d1i, s13_t) {
            t12s_3['fs']['mkdir']({
                'dirPath': j56d1i,
                'success': function (hypgn9) {
                    s13_t != null && s13_t['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (fb47cm) {
                    if (fb47cm['errMsg']['indexOf']('file already exists') != -0x1) t12s_3['readSync'](t12s_3['fileListName'], 'utf8', s13_t);else s13_t != null && s13_t['runWith']([0x1, fb47cm]);
                }
            });
        }, t12s_3['readSync'] = function (c$k6j, st2i, hrq9, s213t) {
            st2i === void 0x0 && (st2i = 'ascill'), s213t === void 0x0 && (s213t = '');
            var jkd56$ = t12s_3['getFileNativePath'](c$k6j),
                d$5k;
            try {
                d$5k = t12s_3['fs']['readFileSync'](jkd56$), hrq9 != null && hrq9['runWith']([0x0, { 'data': d$5k }]);
            } catch (s230) {
                hrq9 != null && hrq9['runWith']([0x1]);
            }
        }, t12s_3['readCache'] = function () {}, t12s_3['writeCache'] = function (gpn9hy) {
            var va8rwq = readyUrl['split']('?')[0x0];
            t12s_3['filesListObj'][va8rwq] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, t12s_3['fs']['writeFile']({
                'filePath': t12s_3['fileNativeDir'] + '/' + t12s_3['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](t12s_3['filesListObj']),
                'success': function (_jit1d) {},
                'fail': function (wquav) {}
            });
        }, t12s_3['setNativeFileDir'] = function (a9ugqh) {
            t12s_3['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + a9ugqh;
        }, t12s_3['filesListObj'] = {}, t12s_3['fileNativeDir'] = null, t12s_3['fileListName'] = 'layaairfiles.txt', t12s_3['ziyuFileData'] = {}, hpyl(t12s_3, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), t12s_3;
    }(c$5k6),
        ck$654 = function (_di1j) {
        function f8rwv7() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], f8rwv7['__super']['call'](this), this['_sound'] = f8rwv7['_createSound'](), this['_chanell'] = new lxypng(this['_sound']);
        }
        i_j15d(f8rwv7, 'laya.wx.mini.MiniSound', _di1j);
        var wf78r = f8rwv7['prototype'];
        return wf78r['load'] = function (f7b4c) {
            var mb487 = this;
            f7b4c = q8rvw['formatURL'](f7b4c), this['url'] = f7b4c;
            if (f8rwv7['_audioCache'][f7b4c]) {
                this['event']('complete');
                return;
            }
            function mbf4c7() {
                if (f8rwv7['_null'] != undefined) mb487['_sound']['onCanplay'](f8rwv7['_null']), mb487['_sound']['onError'](f8rwv7['_null']);else try {
                    mb487['_sound']['onCanplay'](null), mb487['_sound']['onError'](null), f8rwv7['_null'] = null;
                } catch (t320z) {
                    console['warn']('[wxmini] _clearSound:' + t320z), mb487['_sound']['onCanplay'](j6k5di), mb487['_sound']['onError'](j6k5di), f8rwv7['_null'] = j6k5di;
                }
            }
            function pg() {
                fb74m8['loaded'] = !![], fb74m8['event']('complete'), f8rwv7['_audioCache'][fb74m8['url']] = fb74m8;
            }
            function yu(bc7fm4) {
                console['error']('errCode=' + bc7fm4['errCode'] + '  errMsg=' + bc7fm4['errMsg']), fb74m8['event']('error');
            }
            function j6k5di() {}
            this['_sound']['onCanplay'](pg), this['_sound']['onError'](yu), this['_sound']['src'] = f7b4c;
            var fb74m8 = this;
        }, wf78r['play'] = function (bc74mf, b46k$c) {
            bc74mf === void 0x0 && (bc74mf = 0x0), b46k$c === void 0x0 && (b46k$c = 0x0);
            var vrqwu, fb7m4c;
            if (this['url'] == h9urq['_tMusic']) {
                if (!f8rwv7['_musicAudio']) f8rwv7['_musicAudio'] = this['_sound'];
                vrqwu = f8rwv7['_musicAudio'], fb7m4c = this['_chanell'];
            } else vrqwu = this['_sound'], fb7m4c = this['_chanell'];
            return vrqwu['src'] = this['url'], vrqwu['startTime'] = 0x0, fb7m4c['isStopped'] && (fb7m4c['url'] = this['url'], fb7m4c['loops'] = b46k$c, fb7m4c['startTime'] = bc74mf, fb7m4c['play'](), h9urq['addChannel'](fb7m4c)), fb7m4c;
        }, wf78r['dispose'] = function () {
            var wb = f8rwv7['_audioCache'][this['url']];
            wb && (wb['src'] = '', delete f8rwv7['_audioCache'][this['url']]);
        }, f4b78m(0x0, wf78r, 'duration', function () {
            return this['_sound']['duration'];
        }), f8rwv7['_createSound'] = function () {
            f8rwv7['_id']++;
            var b4mf = $64ck5['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return b4mf;
        }, f8rwv7['_musicAudio'] = null, f8rwv7['_id'] = 0x0, f8rwv7['_audioCache'] = {}, f8rwv7['_null'] = undefined, f8rwv7;
    }(c$5k6),
        lxypng = function (nplyh) {
        function awvur(xoyn) {
            this['_audio'] = null, this['_onEnd'] = null, awvur['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = xoyn, this['_onEnd'] = $k5j['bind'](this['__onEnd'], this), xoyn['onEnded'](this['_onEnd']);
        }
        i_j15d(awvur, 'laya.wx.mini.MiniSoundChannel', nplyh);
        var $b4cm = awvur['prototype'];
        return $b4cm['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (_t12si['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, $b4cm['__onNull'] = function () {}, $b4cm['play'] = function () {
            this['isStopped'] = ![], h9urq['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, $b4cm['stop'] = function () {
            this['isStopped'] = !![], h9urq['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, $b4cm['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, $b4cm['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], h9urq['addChannel'](this), this['_audio']['play']();
        }, f4b78m(0x0, $b4cm, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), f4b78m(0x0, $b4cm, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), f4b78m(0x0, $b4cm, 'volume', function () {
            return 0x1;
        }, function (s1t2_i) {}), awvur['_null'] = undefined, awvur;
    }(_st231),
        uaqv9 = function () {
        function jki5d() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = $64ck5['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        i_j15d(jki5d, 'laya.wx.mini.MiniVideo');
        var t3s = jki5d['prototype'];
        return t3s['on'] = function (_s320, z0s, cjk5) {
            if (_s320 == 'loadedmetadata') this['onPlayFunc'] = cjk5['bind'](z0s), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else _s320 == 'ended' && (this['onEndedFunC'] = cjk5['bind'](z0s), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, t3s['onTimeUpdateFunc'] = function (j_i51) {
            this['position'] = j_i51['position'], this['_duration'] = j_i51['duration'];
        }, t3s['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, t3s['onended'] = function (_ts20, hau9) {
            this['onEndedFunC'] = hau9['bind'](_ts20), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, t3s['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, t3s['off'] = function (gphy9u, wqaurv, i2_s) {
            if (gphy9u == 'loadedmetadata') this['onPlayFunc'] = i2_s['bind'](wqaurv), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else gphy9u == 'ended' && (this['onEndedFunC'] = i2_s['bind'](wqaurv), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, t3s['load'] = function (t23s) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = t23s;
        }, t3s['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, t3s['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, t3s['size'] = function (cmb4$, c$b6k4) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = cmb4$, this['videoElement']['height'] = c$b6k4;
        }, t3s['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, t3s['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, f4b78m(0x0, t3s, 'duration', function () {
            return this['_duration'];
        }), f4b78m(0x0, t3s, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (ahu9) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = ahu9;
        }), f4b78m(0x0, t3s, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), f4b78m(0x0, t3s, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), f4b78m(0x0, t3s, 'ended', function () {
            return this['videoend'];
        }), f4b78m(0x0, t3s, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (ts23) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = ts23;
        }), f4b78m(0x0, t3s, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (bck64$) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = bck64$;
        }), f4b78m(0x0, t3s, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (j65idk) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = j65idk;
        }), f4b78m(0x0, t3s, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), f4b78m(0x0, t3s, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (sid_) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = sid_;
        }), f4b78m(0x0, t3s, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (yplx) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = yplx;
        }), f4b78m(0x0, t3s, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), f4b78m(0x0, t3s, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (vuqrw) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = vuqrw;
        }), f4b78m(0x0, t3s, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (bmc4$) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = bmc4$;
        }), f4b78m(0x0, t3s, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (_5ijd) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = _5ijd;
        }), jki5d;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var frv87w in Laya) {
        var c$564 = Laya[frv87w];
        c$564 && c$564['__isclass'] && (exports[frv87w] = c$564);
    }
});