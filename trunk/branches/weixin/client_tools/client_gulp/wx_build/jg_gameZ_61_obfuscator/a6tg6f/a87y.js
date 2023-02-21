var f = wx.$B;
(function (window, document, qn0o) {
    var gwb3_y = qn0o['un'],
        en7xqo = qn0o['uns'],
        y34w = qn0o['static'],
        t8spf = qn0o['class'],
        tfispk = qn0o['getset'],
        b3gvwh = qn0o['__newvec'],
        u_y6a4 = laya['utils']['Browser'],
        z21dmj = laya['events']['Event'],
        mzlj2 = laya['events']['EventDispatcher'],
        nxuoa = laya['resource']['HTMLImage'],
        uy6w4 = laya['utils']['Handler'],
        zh5v9l = laya['display']['Input'],
        pksfti = laya['net']['Loader'],
        fsikpt = laya['maths']['Matrix'],
        _4yw6 = laya['renders']['Render'],
        tsp8f = laya['utils']['RunDriver'],
        oqex7n = laya['media']['Sound'],
        w4g6y_ = laya['media']['SoundChannel'],
        oxre0q = laya['media']['SoundManager'],
        xoeqn = laya['display']['Stage'],
        wb3ghv = laya['net']['URL'],
        lzj912 = laya['utils']['Utils'],
        _y6ua4 = function () {
        function y4ua() {}
        return t8spf(y4ua, 'laya.wx.mini.MiniAdpter'), y4ua['getJson'] = function (lv95hz) {
            return JSON['parse'](lv95hz);
        }, y4ua['init'] = function (fktps8, t$dkf) {
            fktps8 === void 0x0 && (fktps8 = ![]), t$dkf === void 0x0 && (t$dkf = ![]);
            if (y4ua['_inited']) return;
            y4ua['window'] = window;
            if (y4ua['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            y4ua['_inited'] = !![], y4ua['isZiYu'] = t$dkf, y4ua['isPosMsgYu'] = fktps8, y4ua['EnvConfig'] = {}, !y4ua['isZiYu'] && (qen0x['setNativeFileDir']('/layaairGame'), qen0x['existDir'](qen0x['fileNativeDir'], uy6w4['create'](y4ua, y4ua['onMkdirCallBack']))), y4ua['window']['focus'] = function () {}, qn0o['getUrlPath'] = function () {}, y4ua['window']['logtime'] = function (mj$81) {}, y4ua['window']['alertTimeLog'] = function (jz91l2) {}, y4ua['window']['resetShareInfo'] = function () {}, y4ua['window']['CanvasRenderingContext2D'] = function () {}, y4ua['window']['CanvasRenderingContext2D']['prototype'] = y4ua['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], y4ua['window']['document']['body']['appendChild'] = function () {}, y4ua['EnvConfig']['pixelRatioInt'] = 0x0, tsp8f['getPixelRatio'] = y4ua['pixelRatio'], y4ua['_preCreateElement'] = u_y6a4['createElement'], u_y6a4['createElement'] = y4ua['createElement'], tsp8f['createShaderCondition'] = y4ua['createShaderCondition'], lzj912['parseXMLFromString'] = y4ua['parseXMLFromString'], zh5v9l['_createInputElement'] = w6y4g['_createInputElement'], y4ua['EnvConfig']['load'] = pksfti['prototype']['load'], pksfti['prototype']['load'] = pitfs['prototype']['load'], y4ua['isZiYu'] && fktps8 && wx['onMessage'](function (j$dtm8) {
                j$dtm8['isLoad'] && (qen0x['ziyuFileData'][j$dtm8['url']] = j$dtm8['data']);
            });
        }, y4ua['onMkdirCallBack'] = function (kmdt8$, xq7) {
            if (!kmdt8$) qen0x['filesListObj'] = JSON['parse'](xq7['data']);
        }, y4ua['pixelRatio'] = function () {
            if (!y4ua['EnvConfig']['pixelRatioInt']) try {
                var w3hgb = wx['getSystemInfoSync']();
                return y4ua['EnvConfig']['pixelRatioInt'] = w3hgb['pixelRatio'], w3hgb = w3hgb, w3hgb['pixelRatio'];
            } catch (_w4) {}
            return y4ua['EnvConfig']['pixelRatioInt'];
        }, y4ua['createElement'] = function (e7anxo) {
            if (e7anxo == 'canvas') {
                var d$2mj1;
                return y4ua['idx'] == 0x1 ? y4ua['isZiYu'] ? (d$2mj1 = sharedCanvas, d$2mj1['style'] = {}) : d$2mj1 = window['canvas'] : d$2mj1 = window['wx']['createCanvas'](), y4ua['idx']++, d$2mj1;
            } else {
                if (e7anxo == 'textarea' || e7anxo == 'input') return y4ua['onCreateInput'](e7anxo);else {
                    if (e7anxo == 'div') {
                        var orqe0x = y4ua['_preCreateElement'](e7anxo);
                        return orqe0x['contains'] = function (nx0e) {
                            return null;
                        }, orqe0x['removeChild'] = function (xn7oea) {}, orqe0x;
                    } else return y4ua['_preCreateElement'](e7anxo);
                }
            }
        }, y4ua['onCreateInput'] = function (one7q) {
            var g3hwbv = y4ua['_preCreateElement'](one7q);
            return g3hwbv['focus'] = w6y4g['wxinputFocus'], g3hwbv['blur'] = w6y4g['wxinputblur'], g3hwbv['style'] = {}, g3hwbv['value'] = 0x0, g3hwbv['parentElement'] = {}, g3hwbv['placeholder'] = {}, g3hwbv['type'] = {}, g3hwbv['setColor'] = function (mjdz21) {}, g3hwbv['setType'] = function (isfktp) {}, g3hwbv['setFontFace'] = function (gyw_) {}, g3hwbv['addEventListener'] = function (eo0xnq) {}, g3hwbv['contains'] = function (tksif) {
                return null;
            }, g3hwbv['removeChild'] = function (a74n6u) {}, g3hwbv;
        }, y4ua['createShaderCondition'] = function (kdft$8) {
            var hzl59v = this,
                g_h3b = function () {
                var $21md = kdft$8;
                return hzl59v[kdft$8['replace']('this.', '')];
            };
            return g_h3b;
        }, y4ua['EnvConfig'] = null, y4ua['window'] = null, y4ua['_preCreateElement'] = null, y4ua['_inited'] = ![], y4ua['wxRequest'] = null, y4ua['systemInfo'] = null, y4ua['version'] = '0.0.1', y4ua['isZiYu'] = ![], y4ua['isPosMsgYu'] = ![], y4ua['parseXMLFromString'] = function (lz2m1j) {
            var o7u6an, x7nqe;
            lz2m1j = lz2m1j['replace'](/>\s+</g, '><');
            try {
                o7u6an = new window['Parser']['DOMParser']()['parseFromString'](lz2m1j, 'text/xml');
            } catch (uan4) {
                throw '需要引入xml解析库文件';
            }
            return o7u6an;
        }, y4ua['idx'] = 0x1, y4ua;
    }(),
        wu_y = function () {
        function _gy() {}
        t8spf(_gy, 'laya.wx.mini.MiniImage');
        var exqno = _gy['prototype'];
        return exqno['_loadImage'] = function (h3bw_) {
            var w3gvbh = this,
                qexon = ![];
            h3bw_['indexOf']('layaNativeDir/') == -0x1 && (qexon = !![], h3bw_ = wb3ghv['formatURL'](h3bw_));
            if (!qen0x['getFileInfo'](h3bw_)) {
                if (h3bw_['indexOf']('http://') != -0x1 || h3bw_['indexOf']('https://') != -0x1) qen0x['downImg'](h3bw_, new uy6w4(_gy, _gy['onDownImgCallBack'], [h3bw_, w3gvbh]), h3bw_);else _gy['onCreateImage'](h3bw_, w3gvbh, !![]);
            } else _gy['onCreateImage'](h3bw_, w3gvbh, !qexon);
        }, _gy['onDownImgCallBack'] = function ($kdm, jm12zl, m$t8d) {
            if (!m$t8d) _gy['onCreateImage']($kdm, jm12zl);else jm12zl['onError'](null);
        }, _gy['onCreateImage'] = function (kfpt8, ay6u_4, qne7x) {
            qne7x === void 0x0 && (qne7x = ![]);
            var g_b3w;
            if (!qne7x) {
                var z9j21 = qen0x['getFileInfo'](kfpt8),
                    y46_w = z9j21['md5'];
                g_b3w = qen0x['getFileNativePath'](y46_w);
            } else g_b3w = kfpt8;
            if (ay6u_4['imgCache'] == null) ay6u_4['imgCache'] = {};
            var j291z;
            function tfk8ps() {
                j291z['onload'] = null, j291z['onerror'] = null, delete ay6u_4['imgCache'][kfpt8];
            }
            ;
            var $8kfd = function () {
                tfk8ps(), ay6u_4['onLoaded'](j291z);
            },
                xn7ea = function () {
                tfk8ps(), ay6u_4['event']('error', 'Load image failed');
            };
            ay6u_4['_type'] == 'nativeimage' ? (j291z = new u_y6a4['window']['Image'](), j291z['crossOrigin'] = '', j291z['onload'] = $8kfd, j291z['onerror'] = xn7ea, j291z['src'] = g_b3w, ay6u_4['imgCache'][kfpt8] = j291z) : new nxuoa['create'](g_b3w, {
                'onload': $8kfd,
                'onerror': xn7ea,
                'onCreate': function (_u6w4y) {
                    j291z = _u6w4y, ay6u_4['imgCache'][kfpt8] = _u6w4y;
                }
            });
        }, _gy;
    }(),
        w6y4g = function () {
        function v5h3gb() {}
        return t8spf(v5h3gb, 'laya.wx.mini.MiniInput'), v5h3gb['_createInputElement'] = function () {
            zh5v9l['_initInput'](zh5v9l['area'] = u_y6a4['createElement']('textarea')), zh5v9l['_initInput'](zh5v9l['input'] = u_y6a4['createElement']('input')), zh5v9l['inputContainer'] = u_y6a4['createElement']('div'), zh5v9l['inputContainer']['style']['position'] = 'absolute', zh5v9l['inputContainer']['style']['zIndex'] = 0x186a0, u_y6a4['container']['appendChild'](zh5v9l['inputContainer']), zh5v9l['inputContainer']['setPos'] = function (oq0ex, tfp8$k) {
                zh5v9l['inputContainer']['style']['left'] = oq0ex + 'px', zh5v9l['inputContainer']['style']['top'] = tfp8$k + 'px';
            }, qn0o['stage']['on']('resize', null, v5h3gb['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (pfksi) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), oxre0q['_soundClass'] = kfstip, oxre0q['_musicClass'] = kfstip, window['_videoClass'] = uon7a6;
        }, v5h3gb['_onStageResize'] = function () {
            var $d8kft = qn0o['stage']['_canvasTransform']['identity']();
            $d8kft['scale'](u_y6a4['width'] / _4yw6['canvas']['width'] / tsp8f['getPixelRatio'](), u_y6a4['height'] / _4yw6['canvas']['height'] / tsp8f['getPixelRatio']());
        }, v5h3gb['wxinputFocus'] = function (xoqn0e) {
            var qonx = zh5v9l['inputElement']['target'];
            if (qonx && !qonx['editable']) return;
            _y6ua4['window']['wx']['offKeyboardConfirm'](), _y6ua4['window']['wx']['offKeyboardInput'](), _y6ua4['window']['wx']['showKeyboard']({
                'defaultValue': qonx['text'],
                'maxLength': qonx['maxChars'],
                'multiple': qonx['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (zj12) {},
                'fail': function (z1ml2j) {}
            }), _y6ua4['window']['wx']['onKeyboardConfirm'](function (tkpif) {
                var er0qxo = tkpif ? tkpif['value'] : '';
                qonx['text'] = er0qxo, qonx['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), _y6ua4['window']['wx']['onKeyboardInput'](function ($jm12d) {
                var m81d = $jm12d ? $jm12d['value'] : '';
                if (!qonx['multiline']) {
                    if (m81d['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                qonx['text'] = m81d, qonx['event']('input');
            });
        }, v5h3gb['inputEnter'] = function () {
            zh5v9l['inputElement']['target']['focus'] = ![];
        }, v5h3gb['wxinputblur'] = function () {
            v5h3gb['hideKeyboard']();
        }, v5h3gb['hideKeyboard'] = function () {
            _y6ua4['window']['wx']['offKeyboardConfirm'](), _y6ua4['window']['wx']['offKeyboardInput'](), _y6ua4['window']['wx']['hideKeyboard']({
                'success': function (d8jtm$) {
                    console['log']('隐藏键盘');
                },
                'fail': function (j2m1d$) {
                    console['log']('隐藏键盘出错:' + (j2m1d$ ? j2m1d$['errMsg'] : ''));
                }
            });
        }, v5h3gb;
    }(),
        pitfs = function () {
        function md2j1z() {}
        t8spf(md2j1z, 'laya.wx.mini.MiniLoader');
        var b53h = md2j1z['prototype'];
        return b53h['load'] = function (vl95hz, z91j, unaox, pktfsi, qnex0o) {
            unaox === void 0x0 && (unaox = !![]), qnex0o === void 0x0 && (qnex0o = ![]);
            var dk$t8 = this;
            dk$t8['_url'] = vl95hz;
            if (vl95hz['indexOf']('data:image') === 0x0) dk$t8['_type'] = z91j = 'image';else dk$t8['_type'] = z91j || (z91j = dk$t8['getTypeFromUrl'](vl95hz));
            dk$t8['_cache'] = unaox, dk$t8['_data'] = null;
            var v9hbl = 'ascii';
            if (vl95hz['indexOf']('.fnt') != -0x1) v9hbl = 'utf8';else z91j == 'arraybuffer' && (v9hbl = '');
            ;
            var mj1dz = lzj912['getFileExtension'](vl95hz);
            if (md2j1z['_fileTypeArr']['indexOf'](mj1dz) != -0x1) _y6ua4['EnvConfig']['load']['call'](this, vl95hz, z91j, unaox, pktfsi, qnex0o);else {
                if (!qen0x['getFileInfo'](vl95hz)) {
                    if (vl95hz['indexOf']('layaNativeDir/') != -0x1) {
                        if (_y6ua4['isZiYu']) {
                            var vh5bl = qen0x['ziyuFileData'][vl95hz];
                            dk$t8['onLoaded'](vh5bl);
                            return;
                        } else {
                            cosnole['log']('read read'), qen0x['read'](vl95hz, v9hbl, new uy6w4(md2j1z, md2j1z['onReadNativeCallBack'], [v9hbl, vl95hz, z91j, unaox, pktfsi, qnex0o, dk$t8]));
                            return;
                        }
                    }
                    if (wb3ghv['rootPath'] == '') var _a6yu4 = vl95hz;else _a6yu4 = vl95hz['split'](wb3ghv['rootPath'])[0x0];
                    vl95hz['indexOf']('http://') != -0x1 || vl95hz['indexOf']('https://') != -0x1 ? _y6ua4['EnvConfig']['load']['call'](dk$t8, vl95hz, z91j, unaox, pktfsi, qnex0o) : qen0x['readFile'](_a6yu4, v9hbl, new uy6w4(md2j1z, md2j1z['onReadNativeCallBack'], [v9hbl, vl95hz, z91j, unaox, pktfsi, qnex0o, dk$t8]), vl95hz);
                } else _y6ua4['EnvConfig']['load']['call'](this, vl95hz, z91j, unaox, pktfsi, qnex0o);
            }
        }, b53h['resMgrLoad'] = function (u467a, m2jd$1, _6ywg4, xa7oun, y4u6a, eqx7, n46) {
            _6ywg4 === void 0x0 && (_6ywg4 = 0x0), xa7oun === void 0x0 && (xa7oun = ![]), y4u6a === void 0x0 && (y4u6a = ![]), eqx7 === void 0x0 && (eqx7 = 0x0), n46 === void 0x0 && (n46 = 0x3), u467a['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', u467a), _y6ua4['EnvConfig']['resMgrLoad'](u467a, (xeroq0, a674nu, _gw6) => {
                md2j1z['prototype']['resMgrLoadCallBack'](xeroq0, a674nu, _gw6, m2jd$1);
            }, _6ywg4, xa7oun, y4u6a, eqx7, n46);
        }, b53h['resMgrLoadCallBack'] = function (wgb_, u4n76a, _gw46y, t8mk) {
            console['log']('buff:::', wgb_, _gw46y, qen0x['fileNativeDir'] + '///' + qen0x['fileListName']), t8mk(wgb_, u4n76a, _gw46y);
        }, b53h['clearRes'] = function (hw3bg_, g5bh3) {
            g5bh3 === void 0x0 && (g5bh3 = ![]);
            var on7axu = this;
            on7axu['clearRes'](hw3bg_, g5bh3);
            var zj291 = qen0x['getFileInfo'](hw3bg_);
            if (zj291 && (hw3bg_['indexOf']('http://') != -0x1 || hw3bg_['indexOf']('https://') != -0x1)) {
                var zm1dj = zj291['md5'],
                    h93v = qen0x['getFileNativePath'](zm1dj);
                qen0x['remove'](h93v);
            }
        }, md2j1z['onReadNativeCallBack'] = function (dkft8, y4_g3w, bgv3h, ktd8f$, dz12m, hw3gv, n7auo, axnuo, ay6_) {
            ktd8f$ === void 0x0 && (ktd8f$ = !![]), hw3gv === void 0x0 && (hw3gv = ![]), axnuo === void 0x0 && (axnuo = 0x0);
            if (!axnuo) {
                var j12m$;
                if (bgv3h == 'json' || bgv3h == 'atlas') j12m$ = _y6ua4['getJson'](ay6_['data']);else bgv3h == 'xml' ? j12m$ = lzj912['parseXMLFromString'](ay6_['data']) : j12m$ = ay6_['data'];
                n7auo['onLoaded'](j12m$), !_y6ua4['isZiYu'] && _y6ua4['isPosMsgYu'] && bgv3h != 'arraybuffer' && wx['postMessage']({
                    'url': y4_g3w,
                    'data': j12m$,
                    'isLoad': !![]
                });
            } else axnuo == 0x1 && _y6ua4['EnvConfig']['load']['call'](n7auo, y4_g3w, bgv3h, ktd8f$, dz12m, hw3gv);
        }, y34w(md2j1z, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), md2j1z;
    }(),
        qen0x = function (j9l12z) {
        function tsip() {
            tsip['__super']['call'](this);
            ;
        }
        return t8spf(tsip, 'laya.wx.mini.MiniFileMgr', j9l12z), tsip['isLoadFile'] = function (uy4_a6) {
            return tsip['_fileTypeArr']['indexOf'](uy4_a6) != -0x1 ? !![] : ![];
        }, tsip['getFileInfo'] = function (uy_4w) {
            var l2mzj = uy_4w['split']('?')[0x0],
                qorx0e = tsip['filesListObj'][l2mzj];
            if (qorx0e == null) return null;else return qorx0e;
            return null;
        }, tsip['onFileUpdate'] = function (iktfs, q7xone) {
            var pfstk8 = iktfs['split']('/'),
                g_y43w = pfstk8[pfstk8['length'] - 0x1],
                qxneo7 = tsip['getFileInfo'](q7xone);
            if (qxneo7 == null) tsip['onSaveFile'](q7xone, g_y43w);else {
                if (qxneo7['readyUrl'] != q7xone) tsip['remove'](g_y43w, q7xone);
            }
        }, tsip['exits'] = function (u64wy, pktis) {
            var y_6g4w = tsip['getFileNativePath'](u64wy);
            tsip['fs']['getFileInfo']({
                'filePath': y_6g4w,
                'success': function (l95) {
                    pktis != null && pktis['runWith']([0x0, l95]);
                },
                'fail': function (_3w4g) {
                    pktis != null && pktis['runWith']([0x1, _3w4g]);
                }
            });
        }, tsip['read'] = function (y7u46, bh3g, eqx, s8tpfk) {
            bh3g === void 0x0 && (bh3g = 'ascill'), s8tpfk === void 0x0 && (s8tpfk = '');
            var qoxe0r;
            s8tpfk != '' ? qoxe0r = tsip['getFileNativePath'](y7u46) : qoxe0r = y7u46, tsip['fs']['readFile']({
                'filePath': qoxe0r,
                'encoding': bh3g,
                'success': function (qr0o) {
                    eqx != null && eqx['runWith']([0x0, qr0o]);
                },
                'fail': function (ouna) {
                    if (ouna && s8tpfk != '') tsip['down'](s8tpfk, bh3g, eqx, s8tpfk);else eqx != null && eqx['runWith']([0x1]);
                }
            });
        }, tsip['readNativeFile'] = function (sp8ktf, v9bh53) {
            tsip['fs']['readFile']({
                'filePath': sp8ktf,
                'encoding': '',
                'success': function (kptsi) {
                    v9bh53 != null && v9bh53['runWith']([0x0]);
                },
                'fail': function (m2$d1j) {
                    v9bh53 != null && v9bh53['runWith']([0x1]);
                }
            });
        }, tsip['down'] = function (z21mjl, d$8t, u6a_4, m$81j) {
            d$8t === void 0x0 && (d$8t = 'ascill'), m$81j === void 0x0 && (m$81j = '');
            var _uwy46 = tsip['getFileNativePath'](m$81j),
                kip = tsip['wxdown']({
                'url': z21mjl,
                'filePath': _uwy46,
                'success': function (t8d$mj) {
                    if (t8d$mj['statusCode'] === 0xc8) tsip['readFile'](t8d$mj['filePath'], d$8t, u6a_4, m$81j);
                },
                'fail': function (j$d21m) {
                    u6a_4 != null && u6a_4['runWith']([0x1, j$d21m]);
                }
            });
            kip['onProgressUpdate'](function (fkpsti) {
                u6a_4 != null && u6a_4['runWith']([0x2, fkpsti['progress']]);
            });
        }, tsip['readFile'] = function (p8tk$f, wgb3v, $fkt8p, tk8$d) {
            wgb3v === void 0x0 && (wgb3v = 'ascill'), tk8$d === void 0x0 && (tk8$d = ''), tsip['fs']['readFile']({
                'filePath': p8tk$f,
                'encoding': wgb3v,
                'success': function (vb3hg5) {
                    if (p8tk$f['indexOf']('http://') != -0x1 || p8tk$f['indexOf']('https://') != -0x1) tsip['onFileUpdate'](p8tk$f, tk8$d);
                    $fkt8p != null && $fkt8p['runWith']([0x0, vb3hg5]);
                },
                'fail': function (_w34gy) {
                    if (_w34gy) $fkt8p != null && $fkt8p['runWith']([0x1, _w34gy]);
                }
            });
        }, tsip['downImg'] = function (y34wg, p$tk, ftd8$) {
            ftd8$ === void 0x0 && (ftd8$ = '');
            var n0eoq = tsip['wxdown']({
                'url': y34wg,
                'success': function (wy3_) {
                    wy3_['statusCode'] === 0xc8 && tsip['copyFile'](wy3_['tempFilePath'], ftd8$, p$tk);
                },
                'fail': function (dj18$) {
                    p$tk != null && p$tk['runWith']([0x1, dj18$]);
                }
            });
        }, tsip['copyFile'] = function (ua46_y, ane7xo, y_b3) {
            var mt8d = ua46_y['split']('/'),
                _6g4wy = mt8d[mt8d['length'] - 0x1],
                h59lz = ane7xo['split']('?')[0x0],
                xe0qro = tsip['getFileInfo'](ane7xo),
                mlzj2 = tsip['getFileNativePath'](_6g4wy);
            tsip['fs']['copyFile']({
                'srcPath': ua46_y,
                'destPath': mlzj2,
                'success': function (m1jd8) {
                    if (!xe0qro) tsip['onSaveFile'](ane7xo, _6g4wy), y_b3 != null && y_b3['runWith']([0x0]);else {
                        if (xe0qro['readyUrl'] != ane7xo) tsip['remove'](_6g4wy, ane7xo, y_b3);
                    }
                },
                'fail': function (b_gwh) {
                    y_b3 != null && y_b3['runWith']([0x1, b_gwh]);
                }
            });
        }, tsip['getFileNativePath'] = function (d$12jm) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + d$12jm;
        }, tsip['remove'] = function (w46_yg, sf8tp, $mj8) {
            sf8tp === void 0x0 && (sf8tp = '');
            var _bwgy = tsip['getFileInfo'](sf8tp),
                gy3w_4 = tsip['getFileNativePath'](_bwgy['md5']);
            qn0o['loader']['clearRes'](_bwgy['readyUrl']), tsip['fs']['unlink']({
                'filePath': gy3w_4,
                'success': function (dm8k$) {
                    if (sf8tp != '') tsip['onSaveFile'](sf8tp, w46_yg);
                    $mj8 != null && $mj8['runWith']([0x0]);
                },
                'fail': function (kisftp) {}
            });
        }, tsip['onSaveFile'] = function ($tfk, hb3g_) {
            var zj921 = $tfk['split']('?')[0x0];
            tsip['filesListObj'][zj921] = {
                'md5': hb3g_,
                'readyUrl': $tfk
            }, tsip['fs']['writeFile']({
                'filePath': tsip['fileNativeDir'] + '/' + tsip['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](tsip['filesListObj']),
                'success': function (vg3bh5) {
                    console['log']('写入测试测试成功：', vg3bh5);
                },
                'fail': function (_u4wy) {
                    console['log']('写入测试测试失败：', _u4wy);
                }
            });
        }, tsip['existDir'] = function (psitkf, xoerq) {
            tsip['fs']['mkdir']({
                'dirPath': psitkf,
                'success': function (itkp) {
                    xoerq != null && xoerq['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (nau7o6) {
                    if (nau7o6['errMsg']['indexOf']('file already exists') != -0x1) tsip['readSync'](tsip['fileListName'], 'utf8', xoerq);else xoerq != null && xoerq['runWith']([0x1, nau7o6]);
                }
            });
        }, tsip['readSync'] = function (oaxen, f$8kt, g3hwb_, jzl219) {
            f$8kt === void 0x0 && (f$8kt = 'ascill'), jzl219 === void 0x0 && (jzl219 = '');
            var n4au6 = tsip['getFileNativePath'](oaxen),
                oxua;
            try {
                oxua = tsip['fs']['readFileSync'](n4au6), g3hwb_ != null && g3hwb_['runWith']([0x0, { 'data': oxua }]);
            } catch ($tdkm) {
                g3hwb_ != null && g3hwb_['runWith']([0x1]);
            }
        }, tsip['readCache'] = function () {}, tsip['writeCache'] = function (zj1m2d) {
            var u6_yw4 = readyUrl['split']('?')[0x0];
            tsip['filesListObj'][u6_yw4] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, tsip['fs']['writeFile']({
                'filePath': tsip['fileNativeDir'] + '/' + tsip['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](tsip['filesListObj']),
                'success': function (bh5lv9) {},
                'fail': function ($18dm) {}
            });
        }, tsip['setNativeFileDir'] = function (j8m$d) {
            tsip['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + j8m$d;
        }, tsip['filesListObj'] = {}, tsip['fileNativeDir'] = null, tsip['fileListName'] = 'layaairfiles.txt', tsip['ziyuFileData'] = {}, y34w(tsip, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), tsip;
    }(mzlj2),
        kfstip = function (bhgwv) {
        function y74a6u() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], y74a6u['__super']['call'](this), this['_sound'] = y74a6u['_createSound'](), this['_chanell'] = new dtk$8f(this['_sound']);
        }
        t8spf(y74a6u, 'laya.wx.mini.MiniSound', bhgwv);
        var u7a64n = y74a6u['prototype'];
        return u7a64n['load'] = function (bh3_g) {
            var $dmj8 = this;
            bh3_g = wb3ghv['formatURL'](bh3_g), this['url'] = bh3_g;
            if (y74a6u['_audioCache'][bh3_g]) {
                this['event']('complete');
                return;
            }
            function a67un() {
                if (y74a6u['_null'] != undefined) $dmj8['_sound']['onCanplay'](y74a6u['_null']), $dmj8['_sound']['onError'](y74a6u['_null']);else try {
                    $dmj8['_sound']['onCanplay'](null), $dmj8['_sound']['onError'](null), y74a6u['_null'] = null;
                } catch ($12jd) {
                    console['warn']('[wxmini] _clearSound:' + $12jd), $dmj8['_sound']['onCanplay'](gbw3_), $dmj8['_sound']['onError'](gbw3_), y74a6u['_null'] = gbw3_;
                }
            }
            function b_h3w() {
                ispt['loaded'] = !![], ispt['event']('complete'), y74a6u['_audioCache'][ispt['url']] = ispt;
            }
            function xo0e(mzd2j1) {
                console['error']('errCode=' + mzd2j1['errCode'] + '  errMsg=' + mzd2j1['errMsg']), ispt['event']('error');
            }
            function gbw3_() {}
            this['_sound']['onCanplay'](b_h3w), this['_sound']['onError'](xo0e), this['_sound']['src'] = bh3_g;
            var ispt = this;
        }, u7a64n['play'] = function (mdtk, y64_w) {
            mdtk === void 0x0 && (mdtk = 0x0), y64_w === void 0x0 && (y64_w = 0x0);
            var x7eoa, $m1j2d;
            if (this['url'] == oxre0q['_tMusic']) {
                if (!y74a6u['_musicAudio']) y74a6u['_musicAudio'] = this['_sound'];
                x7eoa = y74a6u['_musicAudio'], $m1j2d = this['_chanell'];
            } else x7eoa = this['_sound'], $m1j2d = this['_chanell'];
            return x7eoa['src'] = this['url'], x7eoa['startTime'] = 0x0, $m1j2d['isStopped'] && ($m1j2d['url'] = this['url'], $m1j2d['loops'] = y64_w, $m1j2d['startTime'] = mdtk, $m1j2d['play'](), oxre0q['addChannel']($m1j2d)), $m1j2d;
        }, u7a64n['dispose'] = function () {
            var xeno0q = y74a6u['_audioCache'][this['url']];
            xeno0q && (xeno0q['src'] = '', delete y74a6u['_audioCache'][this['url']]);
        }, tfispk(0x0, u7a64n, 'duration', function () {
            return this['_sound']['duration'];
        }), y74a6u['_createSound'] = function () {
            y74a6u['_id']++;
            var _gwy43 = _y6ua4['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return _gwy43;
        }, y74a6u['_musicAudio'] = null, y74a6u['_id'] = 0x0, y74a6u['_audioCache'] = {}, y74a6u['_null'] = undefined, y74a6u;
    }(mzlj2),
        dtk$8f = function (_4wuy) {
        function gyw43(jm1d8$) {
            this['_audio'] = null, this['_onEnd'] = null, gyw43['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = jm1d8$, this['_onEnd'] = lzj912['bind'](this['__onEnd'], this), jm1d8$['onEnded'](this['_onEnd']);
        }
        t8spf(gyw43, 'laya.wx.mini.MiniSoundChannel', _4wuy);
        var qneo0 = gyw43['prototype'];
        return qneo0['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (qn0o['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, qneo0['__onNull'] = function () {}, qneo0['play'] = function () {
            this['isStopped'] = ![], oxre0q['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, qneo0['stop'] = function () {
            this['isStopped'] = !![], oxre0q['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, qneo0['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, qneo0['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], oxre0q['addChannel'](this), this['_audio']['play']();
        }, tfispk(0x0, qneo0, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), tfispk(0x0, qneo0, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), tfispk(0x0, qneo0, 'volume', function () {
            return 0x1;
        }, function (yu47a) {}), gyw43['_null'] = undefined, gyw43;
    }(w4g6y_),
        uon7a6 = function () {
        function gyw_b() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = _y6ua4['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        t8spf(gyw_b, 'laya.wx.mini.MiniVideo');
        var d$jm8t = gyw_b['prototype'];
        return d$jm8t['on'] = function (k$dtm, oau6n, w_y4g3) {
            if (k$dtm == 'loadedmetadata') this['onPlayFunc'] = w_y4g3['bind'](oau6n), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else k$dtm == 'ended' && (this['onEndedFunC'] = w_y4g3['bind'](oau6n), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, d$jm8t['onTimeUpdateFunc'] = function ($m8jdt) {
            this['position'] = $m8jdt['position'], this['_duration'] = $m8jdt['duration'];
        }, d$jm8t['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, d$jm8t['onended'] = function (h_wg3b, d$1j8m) {
            this['onEndedFunC'] = d$1j8m['bind'](h_wg3b), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, d$jm8t['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, d$jm8t['off'] = function (un4a67, hb3w, ktisf) {
            if (un4a67 == 'loadedmetadata') this['onPlayFunc'] = ktisf['bind'](hb3w), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else un4a67 == 'ended' && (this['onEndedFunC'] = ktisf['bind'](hb3w), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, d$jm8t['load'] = function (_6wgy4) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = _6wgy4;
        }, d$jm8t['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, d$jm8t['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, d$jm8t['size'] = function (o67un, $fkdt8) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = o67un, this['videoElement']['height'] = $fkdt8;
        }, d$jm8t['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, d$jm8t['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, tfispk(0x0, d$jm8t, 'duration', function () {
            return this['_duration'];
        }), tfispk(0x0, d$jm8t, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (p8t$kf) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = p8t$kf;
        }), tfispk(0x0, d$jm8t, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), tfispk(0x0, d$jm8t, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), tfispk(0x0, d$jm8t, 'ended', function () {
            return this['videoend'];
        }), tfispk(0x0, d$jm8t, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function ($j8m) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = $j8m;
        }), tfispk(0x0, d$jm8t, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (bgh35v) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = bgh35v;
        }), tfispk(0x0, d$jm8t, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (lz529) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = lz529;
        }), tfispk(0x0, d$jm8t, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), tfispk(0x0, d$jm8t, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (ml1jz) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = ml1jz;
        }), tfispk(0x0, d$jm8t, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (dm2jz) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = dm2jz;
        }), tfispk(0x0, d$jm8t, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), tfispk(0x0, d$jm8t, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (jdm$1) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = jdm$1;
        }), tfispk(0x0, d$jm8t, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (fktd8) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = fktd8;
        }), tfispk(0x0, d$jm8t, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (wvhg3b) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = wvhg3b;
        }), gyw_b;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var byg3w_ in Laya) {
        var gwbvh3 = Laya[byg3w_];
        gwbvh3 && gwbvh3['__isclass'] && (exports[byg3w_] = gwbvh3);
    }
});