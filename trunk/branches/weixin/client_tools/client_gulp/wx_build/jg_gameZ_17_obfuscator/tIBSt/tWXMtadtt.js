var g = wx.u$;
(function (window, document, moc4px) {
    var _s8ewh = moc4px['un'],
        xji4 = moc4px['uns'],
        weah = moc4px['static'],
        comzl = moc4px['class'],
        jxi4yg = moc4px['getset'],
        ft1 = moc4px['__newvec'],
        n_ew8 = laya['utils']['Browser'],
        yji4 = laya['events']['Event'],
        zlob = laya['events']['EventDispatcher'],
        gxyi = laya['resource']['HTMLImage'],
        t3frd = laya['utils']['Handler'],
        rfd3t6 = laya['display']['Input'],
        igy = laya['net']['Loader'],
        y_njk = laya['maths']['Matrix'],
        ud6fq5 = laya['renders']['Render'],
        ewjkn = laya['utils']['RunDriver'],
        kw_e = laya['media']['Sound'],
        k_wen8 = laya['media']['SoundChannel'],
        r316t = laya['media']['SoundManager'],
        gniy4j = laya['display']['Stage'],
        gkiyjn = laya['net']['URL'],
        vq5u = laya['utils']['Utils'],
        qu56fd = function () {
        function duvfq5() {}
        return comzl(duvfq5, 'laya.wx.mini.MiniAdpter'), duvfq5['getJson'] = function (kn_je) {
            return JSON['parse'](kn_je);
        }, duvfq5['init'] = function (nj_kwy, jngk_y) {
            nj_kwy === void 0x0 && (nj_kwy = ![]), jngk_y === void 0x0 && (jngk_y = ![]);
            if (duvfq5['_inited']) return;
            duvfq5['window'] = window;
            if (duvfq5['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            duvfq5['_inited'] = !![], duvfq5['isZiYu'] = jngk_y, duvfq5['isPosMsgYu'] = nj_kwy, duvfq5['EnvConfig'] = {}, !duvfq5['isZiYu'] && (ha8ws['setNativeFileDir']('/layaairGame'), ha8ws['existDir'](ha8ws['fileNativeDir'], t3frd['create'](duvfq5, duvfq5['onMkdirCallBack']))), duvfq5['window']['focus'] = function () {}, moc4px['getUrlPath'] = function () {}, duvfq5['window']['logtime'] = function (mx4cpo) {}, duvfq5['window']['alertTimeLog'] = function (qd5f6u) {}, duvfq5['window']['resetShareInfo'] = function () {}, duvfq5['window']['CanvasRenderingContext2D'] = function () {}, duvfq5['window']['CanvasRenderingContext2D']['prototype'] = duvfq5['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], duvfq5['window']['document']['body']['appendChild'] = function () {}, duvfq5['EnvConfig']['pixelRatioInt'] = 0x0, ewjkn['getPixelRatio'] = duvfq5['pixelRatio'], duvfq5['_preCreateElement'] = n_ew8['createElement'], n_ew8['createElement'] = duvfq5['createElement'], ewjkn['createShaderCondition'] = duvfq5['createShaderCondition'], vq5u['parseXMLFromString'] = duvfq5['parseXMLFromString'], rfd3t6['_createInputElement'] = l$29['_createInputElement'], duvfq5['EnvConfig']['load'] = igy['prototype']['load'], igy['prototype']['load'] = opxzm['prototype']['load'], duvfq5['isZiYu'] && nj_kwy && wx['onMessage'](function (wne_8k) {
                wne_8k['isLoad'] && (ha8ws['ziyuFileData'][wne_8k['url']] = wne_8k['data']);
            });
        }, duvfq5['onMkdirCallBack'] = function (sawe8h, df65q) {
            if (!sawe8h) ha8ws['filesListObj'] = JSON['parse'](df65q['data']);
        }, duvfq5['pixelRatio'] = function () {
            if (!duvfq5['EnvConfig']['pixelRatioInt']) try {
                var oxm4p = wx['getSystemInfoSync']();
                return duvfq5['EnvConfig']['pixelRatioInt'] = oxm4p['pixelRatio'], oxm4p = oxm4p, oxm4p['pixelRatio'];
            } catch (l279b) {}
            return duvfq5['EnvConfig']['pixelRatioInt'];
        }, duvfq5['createElement'] = function (pgxy4) {
            if (pgxy4 == 'canvas') {
                var l2$b;
                return duvfq5['idx'] == 0x1 ? duvfq5['isZiYu'] ? (l2$b = sharedCanvas, l2$b['style'] = {}) : l2$b = window['canvas'] : l2$b = window['wx']['createCanvas'](), duvfq5['idx']++, l2$b;
            } else {
                if (pgxy4 == 'textarea' || pgxy4 == 'input') return duvfq5['onCreateInput'](pgxy4);else {
                    if (pgxy4 == 'div') {
                        var gxjiy4 = duvfq5['_preCreateElement'](pgxy4);
                        return gxjiy4['contains'] = function (q56fdr) {
                            return null;
                        }, gxjiy4['removeChild'] = function (b$92vu) {}, gxjiy4;
                    } else return duvfq5['_preCreateElement'](pgxy4);
                }
            }
        }, duvfq5['onCreateInput'] = function (c7lm) {
            var $b7l2 = duvfq5['_preCreateElement'](c7lm);
            return $b7l2['focus'] = l$29['wxinputFocus'], $b7l2['blur'] = l$29['wxinputblur'], $b7l2['style'] = {}, $b7l2['value'] = 0x0, $b7l2['parentElement'] = {}, $b7l2['placeholder'] = {}, $b7l2['type'] = {}, $b7l2['setColor'] = function (u9b2v) {}, $b7l2['setType'] = function (mpxci4) {}, $b7l2['setFontFace'] = function (yjwn) {}, $b7l2['addEventListener'] = function ($v27) {}, $b7l2['contains'] = function (ixc4pm) {
                return null;
            }, $b7l2['removeChild'] = function (zobl7) {}, $b7l2;
        }, duvfq5['createShaderCondition'] = function (eh8s0) {
            var $z7mlo = this,
                d63r = function () {
                var u9v2$ = eh8s0;
                return $z7mlo[eh8s0['replace']('this.', '')];
            };
            return d63r;
        }, duvfq5['EnvConfig'] = null, duvfq5['window'] = null, duvfq5['_preCreateElement'] = null, duvfq5['_inited'] = ![], duvfq5['wxRequest'] = null, duvfq5['systemInfo'] = null, duvfq5['version'] = '0.0.1', duvfq5['isZiYu'] = ![], duvfq5['isPosMsgYu'] = ![], duvfq5['parseXMLFromString'] = function (j_gky) {
            var gypix, gxpy;
            j_gky = j_gky['replace'](/>\s+</g, '><');
            try {
                gypix = new window['Parser']['DOMParser']()['parseFromString'](j_gky, 'text/xml');
            } catch (pmzol) {
                throw '需要引入xml解析库文件';
            }
            return gypix;
        }, duvfq5['idx'] = 0x1, duvfq5;
    }(),
        e8s0ha = function () {
        function locz7() {}
        comzl(locz7, 'laya.wx.mini.MiniImage');
        var fdvu5 = locz7['prototype'];
        return fdvu5['_loadImage'] = function (rd65fq) {
            var mpcxo4 = this,
                xyp = ![];
            rd65fq['indexOf']('layaNativeDir/') == -0x1 && (xyp = !![], rd65fq = gkiyjn['formatURL'](rd65fq));
            if (!ha8ws['getFileInfo'](rd65fq)) {
                if (rd65fq['indexOf']('http://') != -0x1 || rd65fq['indexOf']('https://') != -0x1) ha8ws['downImg'](rd65fq, new t3frd(locz7, locz7['onDownImgCallBack'], [rd65fq, mpcxo4]), rd65fq);else locz7['onCreateImage'](rd65fq, mpcxo4, !![]);
            } else locz7['onCreateImage'](rd65fq, mpcxo4, !xyp);
        }, locz7['onDownImgCallBack'] = function (ngk_yj, du5vf, i4gyjn) {
            if (!i4gyjn) locz7['onCreateImage'](ngk_yj, du5vf);else du5vf['onError'](null);
        }, locz7['onCreateImage'] = function (pgicx, gnjk_y, s0h8ae) {
            s0h8ae === void 0x0 && (s0h8ae = ![]);
            var p4cxg;
            if (!s0h8ae) {
                var u$29vb = ha8ws['getFileInfo'](pgicx),
                    gjn_yk = u$29vb['md5'];
                p4cxg = ha8ws['getFileNativePath'](gjn_yk);
            } else p4cxg = pgicx;
            if (gnjk_y['imgCache'] == null) gnjk_y['imgCache'] = {};
            var gxyp4;
            function ozpxm() {
                gxyp4['onload'] = null, gxyp4['onerror'] = null, delete gnjk_y['imgCache'][pgicx];
            }
            ;
            var z$7bol = function () {
                ozpxm(), gnjk_y['onLoaded'](gxyp4);
            },
                fd6t3 = function () {
                ozpxm(), gnjk_y['event']('error', 'Load image failed');
            };
            gnjk_y['_type'] == 'nativeimage' ? (gxyp4 = new n_ew8['window']['Image'](), gxyp4['crossOrigin'] = '', gxyp4['onload'] = z$7bol, gxyp4['onerror'] = fd6t3, gxyp4['src'] = p4cxg, gnjk_y['imgCache'][pgicx] = gxyp4) : new gxyi['create'](p4cxg, {
                'onload': z$7bol,
                'onerror': fd6t3,
                'onCreate': function (v297) {
                    gxyp4 = v297, gnjk_y['imgCache'][pgicx] = v297;
                }
            });
        }, locz7;
    }(),
        l$29 = function () {
        function gix4jy() {}
        return comzl(gix4jy, 'laya.wx.mini.MiniInput'), gix4jy['_createInputElement'] = function () {
            rfd3t6['_initInput'](rfd3t6['area'] = n_ew8['createElement']('textarea')), rfd3t6['_initInput'](rfd3t6['input'] = n_ew8['createElement']('input')), rfd3t6['inputContainer'] = n_ew8['createElement']('div'), rfd3t6['inputContainer']['style']['position'] = 'absolute', rfd3t6['inputContainer']['style']['zIndex'] = 0x186a0, n_ew8['container']['appendChild'](rfd3t6['inputContainer']), rfd3t6['inputContainer']['setPos'] = function ($9bvu2, ky_gn) {
                rfd3t6['inputContainer']['style']['left'] = $9bvu2 + 'px', rfd3t6['inputContainer']['style']['top'] = ky_gn + 'px';
            }, moc4px['stage']['on']('resize', null, gix4jy['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (fqu5vd) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), r316t['_soundClass'] = fduq6, r316t['_musicClass'] = fduq6, window['_videoClass'] = qdfr56;
        }, gix4jy['_onStageResize'] = function () {
            var l79$bz = moc4px['stage']['_canvasTransform']['identity']();
            l79$bz['scale'](n_ew8['width'] / ud6fq5['canvas']['width'] / ewjkn['getPixelRatio'](), n_ew8['height'] / ud6fq5['canvas']['height'] / ewjkn['getPixelRatio']());
        }, gix4jy['wxinputFocus'] = function (frqd5) {
            var n4ji = rfd3t6['inputElement']['target'];
            if (n4ji && !n4ji['editable']) return;
            qu56fd['window']['wx']['offKeyboardConfirm'](), qu56fd['window']['wx']['offKeyboardInput'](), qu56fd['window']['wx']['showKeyboard']({
                'defaultValue': n4ji['text'],
                'maxLength': n4ji['maxChars'],
                'multiple': n4ji['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (v52qud) {},
                'fail': function (nikgj) {}
            }), qu56fd['window']['wx']['onKeyboardConfirm'](function (ejwn_) {
                var j4gin = ejwn_ ? ejwn_['value'] : '';
                n4ji['text'] = j4gin, n4ji['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), qu56fd['window']['wx']['onKeyboardInput'](function (rtf613) {
                var lb9$27 = rtf613 ? rtf613['value'] : '';
                if (!n4ji['multiline']) {
                    if (lb9$27['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                n4ji['text'] = lb9$27, n4ji['event']('input');
            });
        }, gix4jy['inputEnter'] = function () {
            rfd3t6['inputElement']['target']['focus'] = ![];
        }, gix4jy['wxinputblur'] = function () {
            gix4jy['hideKeyboard']();
        }, gix4jy['hideKeyboard'] = function () {
            qu56fd['window']['wx']['offKeyboardConfirm'](), qu56fd['window']['wx']['offKeyboardInput'](), qu56fd['window']['wx']['hideKeyboard']({
                'success': function (jyg_) {
                    console['log']('隐藏键盘');
                },
                'fail': function (k_nyjw) {
                    console['log']('隐藏键盘出错:' + (k_nyjw ? k_nyjw['errMsg'] : ''));
                }
            });
        }, gix4jy;
    }(),
        opxzm = function () {
        function fdu65() {}
        comzl(fdu65, 'laya.wx.mini.MiniLoader');
        var j4yxig = fdu65['prototype'];
        return j4yxig['load'] = function (pxcim, _gnjky, fdu5q6, pmxz, xpm4i) {
            fdu5q6 === void 0x0 && (fdu5q6 = !![]), xpm4i === void 0x0 && (xpm4i = ![]);
            var fu6q = this;
            fu6q['_url'] = pxcim;
            if (pxcim['indexOf']('data:image') === 0x0) fu6q['_type'] = _gnjky = 'image';else fu6q['_type'] = _gnjky || (_gnjky = fu6q['getTypeFromUrl'](pxcim));
            fu6q['_cache'] = fdu5q6, fu6q['_data'] = null;
            var lmo$ = 'ascii';
            if (pxcim['indexOf']('.fnt') != -0x1) lmo$ = 'utf8';else _gnjky == 'arraybuffer' && (lmo$ = '');
            ;
            var $7bv9 = vq5u['getFileExtension'](pxcim);
            if (fdu65['_fileTypeArr']['indexOf']($7bv9) != -0x1) qu56fd['EnvConfig']['load']['call'](this, pxcim, _gnjky, fdu5q6, pmxz, xpm4i);else {
                if (!ha8ws['getFileInfo'](pxcim)) {
                    if (pxcim['indexOf']('layaNativeDir/') != -0x1) {
                        if (qu56fd['isZiYu']) {
                            var gkyji = ha8ws['ziyuFileData'][pxcim];
                            fu6q['onLoaded'](gkyji);
                            return;
                        } else {
                            cosnole['log']('read read'), ha8ws['read'](pxcim, lmo$, new t3frd(fdu65, fdu65['onReadNativeCallBack'], [lmo$, pxcim, _gnjky, fdu5q6, pmxz, xpm4i, fu6q]));
                            return;
                        }
                    }
                    if (gkiyjn['rootPath'] == '') var ij4n = pxcim;else ij4n = pxcim['split'](gkiyjn['rootPath'])[0x0];
                    pxcim['indexOf']('http://') != -0x1 || pxcim['indexOf']('https://') != -0x1 ? qu56fd['EnvConfig']['load']['call'](fu6q, pxcim, _gnjky, fdu5q6, pmxz, xpm4i) : ha8ws['readFile'](ij4n, lmo$, new t3frd(fdu65, fdu65['onReadNativeCallBack'], [lmo$, pxcim, _gnjky, fdu5q6, pmxz, xpm4i, fu6q]), pxcim);
                } else qu56fd['EnvConfig']['load']['call'](this, pxcim, _gnjky, fdu5q6, pmxz, xpm4i);
            }
        }, j4yxig['resMgrLoad'] = function (l$b7z9, wken_j, xmopc4, v52bu, i4pgy, ob7$zl, f63t1) {
            xmopc4 === void 0x0 && (xmopc4 = 0x0), v52bu === void 0x0 && (v52bu = ![]), i4pgy === void 0x0 && (i4pgy = ![]), ob7$zl === void 0x0 && (ob7$zl = 0x0), f63t1 === void 0x0 && (f63t1 = 0x3), l$b7z9['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', l$b7z9), qu56fd['EnvConfig']['resMgrLoad'](l$b7z9, (knjy_, $2v97, ing4jy) => {
                fdu65['prototype']['resMgrLoadCallBack'](knjy_, $2v97, ing4jy, wken_j);
            }, xmopc4, v52bu, i4pgy, ob7$zl, f63t1);
        }, j4yxig['resMgrLoadCallBack'] = function (bu59, _gjky, jgnky, m4pox) {
            console['log']('buff:::', bu59, jgnky, ha8ws['fileNativeDir'] + '///' + ha8ws['fileListName']), m4pox(bu59, _gjky, jgnky);
        }, j4yxig['clearRes'] = function (jyg4ni, _en8k) {
            _en8k === void 0x0 && (_en8k = ![]);
            var l$o7 = this;
            l$o7['clearRes'](jyg4ni, _en8k);
            var d5vf = ha8ws['getFileInfo'](jyg4ni);
            if (d5vf && (jyg4ni['indexOf']('http://') != -0x1 || jyg4ni['indexOf']('https://') != -0x1)) {
                var gpxc4i = d5vf['md5'],
                    cimx = ha8ws['getFileNativePath'](gpxc4i);
                ha8ws['remove'](cimx);
            }
        }, fdu65['onReadNativeCallBack'] = function ($9v2ub, v9qu25, ykg_n, jnekw, xy4igp, gjk_n, i4yngj, d36r, qv2u9) {
            jnekw === void 0x0 && (jnekw = !![]), gjk_n === void 0x0 && (gjk_n = ![]), d36r === void 0x0 && (d36r = 0x0);
            if (!d36r) {
                var qr5df;
                if (ykg_n == 'json' || ykg_n == 'atlas') qr5df = qu56fd['getJson'](qv2u9['data']);else ykg_n == 'xml' ? qr5df = vq5u['parseXMLFromString'](qv2u9['data']) : qr5df = qv2u9['data'];
                i4yngj['onLoaded'](qr5df), !qu56fd['isZiYu'] && qu56fd['isPosMsgYu'] && ykg_n != 'arraybuffer' && wx['postMessage']({
                    'url': v9qu25,
                    'data': qr5df,
                    'isLoad': !![]
                });
            } else d36r == 0x1 && qu56fd['EnvConfig']['load']['call'](i4yngj, v9qu25, ykg_n, jnekw, xy4igp, gjk_n);
        }, weah(fdu65, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), fdu65;
    }(),
        ha8ws = function (ftdr63) {
        function m$l7zo() {
            m$l7zo['__super']['call'](this);
            ;
        }
        return comzl(m$l7zo, 'laya.wx.mini.MiniFileMgr', ftdr63), m$l7zo['isLoadFile'] = function (jknwe) {
            return m$l7zo['_fileTypeArr']['indexOf'](jknwe) != -0x1 ? !![] : ![];
        }, m$l7zo['getFileInfo'] = function (q592vu) {
            var he_s = q592vu['split']('?')[0x0],
                jyk_w = m$l7zo['filesListObj'][he_s];
            if (jyk_w == null) return null;else return jyk_w;
            return null;
        }, m$l7zo['onFileUpdate'] = function ($om, dq6f) {
            var qu56 = $om['split']('/'),
                _hke = qu56[qu56['length'] - 0x1],
                lzcmo = m$l7zo['getFileInfo'](dq6f);
            if (lzcmo == null) m$l7zo['onSaveFile'](dq6f, _hke);else {
                if (lzcmo['readyUrl'] != dq6f) m$l7zo['remove'](_hke, dq6f);
            }
        }, m$l7zo['exits'] = function (xmc4ip, ynjgi) {
            var $9buv = m$l7zo['getFileNativePath'](xmc4ip);
            m$l7zo['fs']['getFileInfo']({
                'filePath': $9buv,
                'success': function (cgp4i) {
                    ynjgi != null && ynjgi['runWith']([0x0, cgp4i]);
                },
                'fail': function (rdt36f) {
                    ynjgi != null && ynjgi['runWith']([0x1, rdt36f]);
                }
            });
        }, m$l7zo['read'] = function (_yjwk, cix4p, $bv92, wk_ne) {
            cix4p === void 0x0 && (cix4p = 'ascill'), wk_ne === void 0x0 && (wk_ne = '');
            var cm7zlo;
            wk_ne != '' ? cm7zlo = m$l7zo['getFileNativePath'](_yjwk) : cm7zlo = _yjwk, m$l7zo['fs']['readFile']({
                'filePath': cm7zlo,
                'encoding': cix4p,
                'success': function (wejkn_) {
                    $bv92 != null && $bv92['runWith']([0x0, wejkn_]);
                },
                'fail': function (gin4) {
                    if (gin4 && wk_ne != '') m$l7zo['down'](wk_ne, cix4p, $bv92, wk_ne);else $bv92 != null && $bv92['runWith']([0x1]);
                }
            });
        }, m$l7zo['readNativeFile'] = function (gjyki, mxoc4p) {
            m$l7zo['fs']['readFile']({
                'filePath': gjyki,
                'encoding': '',
                'success': function (copmzl) {
                    mxoc4p != null && mxoc4p['runWith']([0x0]);
                },
                'fail': function (k_wynj) {
                    mxoc4p != null && mxoc4p['runWith']([0x1]);
                }
            });
        }, m$l7zo['down'] = function ($7lb, r13tf, kjgyni, jy_kng) {
            r13tf === void 0x0 && (r13tf = 'ascill'), jy_kng === void 0x0 && (jy_kng = '');
            var d2q = m$l7zo['getFileNativePath'](jy_kng),
                _k8wen = m$l7zo['wxdown']({
                'url': $7lb,
                'filePath': d2q,
                'success': function (icm4p) {
                    if (icm4p['statusCode'] === 0xc8) m$l7zo['readFile'](icm4p['filePath'], r13tf, kjgyni, jy_kng);
                },
                'fail': function (ijx4) {
                    kjgyni != null && kjgyni['runWith']([0x1, ijx4]);
                }
            });
            _k8wen['onProgressUpdate'](function (rd36f) {
                kjgyni != null && kjgyni['runWith']([0x2, rd36f['progress']]);
            });
        }, m$l7zo['readFile'] = function (x4yg, enjw_, qd5uv2, ynkj_) {
            enjw_ === void 0x0 && (enjw_ = 'ascill'), ynkj_ === void 0x0 && (ynkj_ = ''), m$l7zo['fs']['readFile']({
                'filePath': x4yg,
                'encoding': enjw_,
                'success': function (h_k8we) {
                    if (x4yg['indexOf']('http://') != -0x1 || x4yg['indexOf']('https://') != -0x1) m$l7zo['onFileUpdate'](x4yg, ynkj_);
                    qd5uv2 != null && qd5uv2['runWith']([0x0, h_k8we]);
                },
                'fail': function (_jkwy) {
                    if (_jkwy) qd5uv2 != null && qd5uv2['runWith']([0x1, _jkwy]);
                }
            });
        }, m$l7zo['downImg'] = function (b2v$97, dtq6r, mz$7lo) {
            mz$7lo === void 0x0 && (mz$7lo = '');
            var hse0 = m$l7zo['wxdown']({
                'url': b2v$97,
                'success': function (g4ixpy) {
                    g4ixpy['statusCode'] === 0xc8 && m$l7zo['copyFile'](g4ixpy['tempFilePath'], mz$7lo, dtq6r);
                },
                'fail': function (l7z$9) {
                    dtq6r != null && dtq6r['runWith']([0x1, l7z$9]);
                }
            });
        }, m$l7zo['copyFile'] = function (x4pgy, f5quv, shaw8e) {
            var mlcz = x4pgy['split']('/'),
                lboz = mlcz[mlcz['length'] - 0x1],
                $b97v2 = f5quv['split']('?')[0x0],
                tqrf = m$l7zo['getFileInfo'](f5quv),
                fqrd = m$l7zo['getFileNativePath'](lboz);
            m$l7zo['fs']['copyFile']({
                'srcPath': x4pgy,
                'destPath': fqrd,
                'success': function (v29$b7) {
                    if (!tqrf) m$l7zo['onSaveFile'](f5quv, lboz), shaw8e != null && shaw8e['runWith']([0x0]);else {
                        if (tqrf['readyUrl'] != f5quv) m$l7zo['remove'](lboz, f5quv, shaw8e);
                    }
                },
                'fail': function (m$7lz) {
                    shaw8e != null && shaw8e['runWith']([0x1, m$7lz]);
                }
            });
        }, m$l7zo['getFileNativePath'] = function (_gyjnk) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + _gyjnk;
        }, m$l7zo['remove'] = function (zocml, pyig4x, pmcix4) {
            pyig4x === void 0x0 && (pyig4x = '');
            var zmoc7 = m$l7zo['getFileInfo'](pyig4x),
                cmozxp = m$l7zo['getFileNativePath'](zmoc7['md5']);
            moc4px['loader']['clearRes'](zmoc7['readyUrl']), m$l7zo['fs']['unlink']({
                'filePath': cmozxp,
                'success': function (xgpci) {
                    if (pyig4x != '') m$l7zo['onSaveFile'](pyig4x, zocml);
                    pmcix4 != null && pmcix4['runWith']([0x0]);
                },
                'fail': function (ixpcg) {}
            });
        }, m$l7zo['onSaveFile'] = function (zxopm, jkgy_) {
            var j_enk = zxopm['split']('?')[0x0];
            m$l7zo['filesListObj'][j_enk] = {
                'md5': jkgy_,
                'readyUrl': zxopm
            }, m$l7zo['fs']['writeFile']({
                'filePath': m$l7zo['fileNativeDir'] + '/' + m$l7zo['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](m$l7zo['filesListObj']),
                'success': function (omlcp) {
                    console['log']('写入测试测试成功：', omlcp);
                },
                'fail': function (fud6) {
                    console['log']('写入测试测试失败：', fud6);
                }
            });
        }, m$l7zo['existDir'] = function (mzcxo, icx4pm) {
            m$l7zo['fs']['mkdir']({
                'dirPath': mzcxo,
                'success': function (omcxzp) {
                    icx4pm != null && icx4pm['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (z$79bl) {
                    if (z$79bl['errMsg']['indexOf']('file already exists') != -0x1) m$l7zo['readSync'](m$l7zo['fileListName'], 'utf8', icx4pm);else icx4pm != null && icx4pm['runWith']([0x1, z$79bl]);
                }
            });
        }, m$l7zo['readSync'] = function (d65rf, c7lmz, $v92bu, ygixj4) {
            c7lmz === void 0x0 && (c7lmz = 'ascill'), ygixj4 === void 0x0 && (ygixj4 = '');
            var omzpl = m$l7zo['getFileNativePath'](d65rf),
                o$7zlb;
            try {
                o$7zlb = m$l7zo['fs']['readFileSync'](omzpl), $v92bu != null && $v92bu['runWith']([0x0, { 'data': o$7zlb }]);
            } catch (he8ws) {
                $v92bu != null && $v92bu['runWith']([0x1]);
            }
        }, m$l7zo['readCache'] = function () {}, m$l7zo['writeCache'] = function (mlozc) {
            var y_nj = readyUrl['split']('?')[0x0];
            m$l7zo['filesListObj'][y_nj] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, m$l7zo['fs']['writeFile']({
                'filePath': m$l7zo['fileNativeDir'] + '/' + m$l7zo['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](m$l7zo['filesListObj']),
                'success': function (pim4) {},
                'fail': function (c4pom) {}
            });
        }, m$l7zo['setNativeFileDir'] = function (xm4cpo) {
            m$l7zo['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + xm4cpo;
        }, m$l7zo['filesListObj'] = {}, m$l7zo['fileNativeDir'] = null, m$l7zo['fileListName'] = 'layaairfiles.txt', m$l7zo['ziyuFileData'] = {}, weah(m$l7zo, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), m$l7zo;
    }(zlob),
        fduq6 = function (cxop4m) {
        function vbu9() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], vbu9['__super']['call'](this), this['_sound'] = vbu9['_createSound'](), this['_chanell'] = new zlmpo(this['_sound']);
        }
        comzl(vbu9, 'laya.wx.mini.MiniSound', cxop4m);
        var q5fd6u = vbu9['prototype'];
        return q5fd6u['load'] = function ($buv92) {
            var nyk_ = this;
            $buv92 = gkiyjn['formatURL']($buv92), this['url'] = $buv92;
            if (vbu9['_audioCache'][$buv92]) {
                this['event']('complete');
                return;
            }
            function ig4yjn() {
                if (vbu9['_null'] != undefined) nyk_['_sound']['onCanplay'](vbu9['_null']), nyk_['_sound']['onError'](vbu9['_null']);else try {
                    nyk_['_sound']['onCanplay'](null), nyk_['_sound']['onError'](null), vbu9['_null'] = null;
                } catch (rtf6q) {
                    console['warn']('[wxmini] _clearSound:' + rtf6q), nyk_['_sound']['onCanplay'](pm4xo), nyk_['_sound']['onError'](pm4xo), vbu9['_null'] = pm4xo;
                }
            }
            function $7zbl9() {
                vb2u$['loaded'] = !![], vb2u$['event']('complete'), vbu9['_audioCache'][vb2u$['url']] = vb2u$;
            }
            function ew_8n(ny_wk) {
                console['error']('errCode=' + ny_wk['errCode'] + '  errMsg=' + ny_wk['errMsg']), vb2u$['event']('error');
            }
            function pm4xo() {}
            this['_sound']['onCanplay']($7zbl9), this['_sound']['onError'](ew_8n), this['_sound']['src'] = $buv92;
            var vb2u$ = this;
        }, q5fd6u['play'] = function (c4mpx, i4gjyx) {
            c4mpx === void 0x0 && (c4mpx = 0x0), i4gjyx === void 0x0 && (i4gjyx = 0x0);
            var zm7co, yj4gi;
            if (this['url'] == r316t['_tMusic']) {
                if (!vbu9['_musicAudio']) vbu9['_musicAudio'] = this['_sound'];
                zm7co = vbu9['_musicAudio'], yj4gi = this['_chanell'];
            } else zm7co = this['_sound'], yj4gi = this['_chanell'];
            return zm7co['src'] = this['url'], zm7co['startTime'] = 0x0, yj4gi['isStopped'] && (yj4gi['url'] = this['url'], yj4gi['loops'] = i4gjyx, yj4gi['startTime'] = c4mpx, yj4gi['play'](), r316t['addChannel'](yj4gi)), yj4gi;
        }, q5fd6u['dispose'] = function () {
            var $l7m = vbu9['_audioCache'][this['url']];
            $l7m && ($l7m['src'] = '', delete vbu9['_audioCache'][this['url']]);
        }, jxi4yg(0x0, q5fd6u, 'duration', function () {
            return this['_sound']['duration'];
        }), vbu9['_createSound'] = function () {
            vbu9['_id']++;
            var $2b9vu = qu56fd['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return $2b9vu;
        }, vbu9['_musicAudio'] = null, vbu9['_id'] = 0x0, vbu9['_audioCache'] = {}, vbu9['_null'] = undefined, vbu9;
    }(zlob),
        zlmpo = function (l7o$bz) {
        function vu2b9$(ocxm4p) {
            this['_audio'] = null, this['_onEnd'] = null, vu2b9$['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = ocxm4p, this['_onEnd'] = vq5u['bind'](this['__onEnd'], this), ocxm4p['onEnded'](this['_onEnd']);
        }
        comzl(vu2b9$, 'laya.wx.mini.MiniSoundChannel', l7o$bz);
        var duv2q5 = vu2b9$['prototype'];
        return duv2q5['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (moc4px['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, duv2q5['__onNull'] = function () {}, duv2q5['play'] = function () {
            this['isStopped'] = ![], r316t['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, duv2q5['stop'] = function () {
            this['isStopped'] = !![], r316t['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, duv2q5['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, duv2q5['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], r316t['addChannel'](this), this['_audio']['play']();
        }, jxi4yg(0x0, duv2q5, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), jxi4yg(0x0, duv2q5, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), jxi4yg(0x0, duv2q5, 'volume', function () {
            return 0x1;
        }, function (y4ipxg) {}), vu2b9$['_null'] = undefined, vu2b9$;
    }(k_wen8),
        qdfr56 = function () {
        function pi4xc() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = qu56fd['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        comzl(pi4xc, 'laya.wx.mini.MiniVideo');
        var cxmozp = pi4xc['prototype'];
        return cxmozp['on'] = function (bu25, kh, v5u92q) {
            if (bu25 == 'loadedmetadata') this['onPlayFunc'] = v5u92q['bind'](kh), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else bu25 == 'ended' && (this['onEndedFunC'] = v5u92q['bind'](kh), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, cxmozp['onTimeUpdateFunc'] = function (cix4pg) {
            this['position'] = cix4pg['position'], this['_duration'] = cix4pg['duration'];
        }, cxmozp['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, cxmozp['onended'] = function (b9v52u, fdr3) {
            this['onEndedFunC'] = fdr3['bind'](b9v52u), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, cxmozp['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, cxmozp['off'] = function (jingk, ipgxy4, ea8hsw) {
            if (jingk == 'loadedmetadata') this['onPlayFunc'] = ea8hsw['bind'](ipgxy4), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else jingk == 'ended' && (this['onEndedFunC'] = ea8hsw['bind'](ipgxy4), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, cxmozp['load'] = function (rf6td) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = rf6td;
        }, cxmozp['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, cxmozp['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, cxmozp['size'] = function (g4xij, $9uv) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = g4xij, this['videoElement']['height'] = $9uv;
        }, cxmozp['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, cxmozp['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, jxi4yg(0x0, cxmozp, 'duration', function () {
            return this['_duration'];
        }), jxi4yg(0x0, cxmozp, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (ywj_nk) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = ywj_nk;
        }), jxi4yg(0x0, cxmozp, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), jxi4yg(0x0, cxmozp, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), jxi4yg(0x0, cxmozp, 'ended', function () {
            return this['videoend'];
        }), jxi4yg(0x0, cxmozp, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (co7lmz) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = co7lmz;
        }), jxi4yg(0x0, cxmozp, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (d65uq) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = d65uq;
        }), jxi4yg(0x0, cxmozp, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (r6q5fd) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = r6q5fd;
        }), jxi4yg(0x0, cxmozp, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), jxi4yg(0x0, cxmozp, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (wjkny) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = wjkny;
        }), jxi4yg(0x0, cxmozp, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (q952) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = q952;
        }), jxi4yg(0x0, cxmozp, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), jxi4yg(0x0, cxmozp, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (v5dquf) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = v5dquf;
        }), jxi4yg(0x0, cxmozp, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (aehs8) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = aehs8;
        }), jxi4yg(0x0, cxmozp, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (lm7z) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = lm7z;
        }), pi4xc;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var vfuq in Laya) {
        var ix4cgp = Laya[vfuq];
        ix4cgp && ix4cgp['__isclass'] && (exports[vfuq] = ix4cgp);
    }
});