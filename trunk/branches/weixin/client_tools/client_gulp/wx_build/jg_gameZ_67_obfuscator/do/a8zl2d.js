(function (window, document, _ackoe) {
    var gfy4 = _ackoe['un'],
        h80r2 = _ackoe['uns'],
        yfg5t = _ackoe['static'],
        ft9g = _ackoe['class'],
        v4ji$ = _ackoe['getset'],
        $4jlw = _ackoe['__newvec'],
        t6yglf = laya['utils']['Browser'],
        k_odc = laya['events']['Event'],
        yj6l4 = laya['events']['EventDispatcher'],
        dck_me = laya['resource']['HTMLImage'],
        _kmd = laya['utils']['Handler'],
        _dpmce = laya['display']['Input'],
        wvij4$ = laya['net']['Loader'],
        y$l6 = laya['maths']['Matrix'],
        gp9ft = laya['renders']['Render'],
        nh83s = laya['utils']['RunDriver'],
        b120rq = laya['media']['Sound'],
        ilj$ = laya['media']['SoundChannel'],
        g956 = laya['media']['SoundManager'],
        gp59tf = laya['display']['Stage'],
        s3h8nu = laya['net']['URL'],
        hun823 = laya['utils']['Utils'],
        t9gp5 = function () {
        function fl46jy() {}
        return ft9g(fl46jy, 'laya.wx.mini.MiniAdpter'), fl46jy['getJson'] = function (jy4$6) {
            return JSON['parse'](jy4$6);
        }, fl46jy['init'] = function (eaoc_k, sx7z) {
            eaoc_k === void 0x0 && (eaoc_k = ![]), sx7z === void 0x0 && (sx7z = ![]);
            if (fl46jy['_inited']) return;
            fl46jy['window'] = window;
            if (fl46jy['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            fl46jy['_inited'] = !![], fl46jy['isZiYu'] = sx7z, fl46jy['isPosMsgYu'] = eaoc_k, fl46jy['EnvConfig'] = {}, !fl46jy['isZiYu'] && (rb0n['setNativeFileDir']('/layaairGame'), rb0n['existDir'](rb0n['fileNativeDir'], _kmd['create'](fl46jy, fl46jy['onMkdirCallBack']))), fl46jy['window']['focus'] = function () {}, _ackoe['getUrlPath'] = function () {}, fl46jy['window']['logtime'] = function (h0n382) {}, fl46jy['window']['alertTimeLog'] = function (dcp5) {}, fl46jy['window']['resetShareInfo'] = function () {}, fl46jy['window']['CanvasRenderingContext2D'] = function () {}, fl46jy['window']['CanvasRenderingContext2D']['prototype'] = fl46jy['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], fl46jy['window']['document']['body']['appendChild'] = function () {}, fl46jy['EnvConfig']['pixelRatioInt'] = 0x0, nh83s['getPixelRatio'] = fl46jy['pixelRatio'], fl46jy['_preCreateElement'] = t6yglf['createElement'], t6yglf['createElement'] = fl46jy['createElement'], nh83s['createShaderCondition'] = fl46jy['createShaderCondition'], hun823['parseXMLFromString'] = fl46jy['parseXMLFromString'], _dpmce['_createInputElement'] = f4ylg6['_createInputElement'], fl46jy['EnvConfig']['load'] = wvij4$['prototype']['load'], wvij4$['prototype']['load'] = u8nh3['prototype']['load'], fl46jy['isZiYu'] && eaoc_k && wx['onMessage'](function (ekca_o) {
                ekca_o['isLoad'] && (rb0n['ziyuFileData'][ekca_o['url']] = ekca_o['data']);
            });
        }, fl46jy['onMkdirCallBack'] = function (i4w$, deo_kc) {
            if (!i4w$) rb0n['filesListObj'] = JSON['parse'](deo_kc['data']);
        }, fl46jy['pixelRatio'] = function () {
            if (!fl46jy['EnvConfig']['pixelRatioInt']) try {
                var deo_ = wx['getSystemInfoSync']();
                return fl46jy['EnvConfig']['pixelRatioInt'] = deo_['pixelRatio'], deo_ = deo_, deo_['pixelRatio'];
            } catch (a_ekoc) {}
            return fl46jy['EnvConfig']['pixelRatioInt'];
        }, fl46jy['createElement'] = function (y4j$w) {
            if (y4j$w == 'canvas') {
                var dmecp9;
                return fl46jy['idx'] == 0x1 ? fl46jy['isZiYu'] ? (dmecp9 = sharedCanvas, dmecp9['style'] = {}) : dmecp9 = window['canvas'] : dmecp9 = window['wx']['createCanvas'](), fl46jy['idx']++, dmecp9;
            } else {
                if (y4j$w == 'textarea' || y4j$w == 'input') return fl46jy['onCreateInput'](y4j$w);else {
                    if (y4j$w == 'div') {
                        var h32un8 = fl46jy['_preCreateElement'](y4j$w);
                        return h32un8['contains'] = function (ke_d) {
                            return null;
                        }, h32un8['removeChild'] = function (r0ba1q) {}, h32un8;
                    } else return fl46jy['_preCreateElement'](y4j$w);
                }
            }
        }, fl46jy['onCreateInput'] = function (j4lwi) {
            var j4ivw = fl46jy['_preCreateElement'](j4lwi);
            return j4ivw['focus'] = f4ylg6['wxinputFocus'], j4ivw['blur'] = f4ylg6['wxinputblur'], j4ivw['style'] = {}, j4ivw['value'] = 0x0, j4ivw['parentElement'] = {}, j4ivw['placeholder'] = {}, j4ivw['type'] = {}, j4ivw['setColor'] = function (ko1_qa) {}, j4ivw['setType'] = function (c_do) {}, j4ivw['setFontFace'] = function (oq_1) {}, j4ivw['addEventListener'] = function (u7h3z) {}, j4ivw['contains'] = function (nuhzs) {
                return null;
            }, j4ivw['removeChild'] = function (rq0b1) {}, j4ivw;
        }, fl46jy['createShaderCondition'] = function (gf5t6y) {
            var mkdc_e = this,
                rqba10 = function () {
                var a_1okq = gf5t6y;
                return mkdc_e[gf5t6y['replace']('this.', '')];
            };
            return rqba10;
        }, fl46jy['EnvConfig'] = null, fl46jy['window'] = null, fl46jy['_preCreateElement'] = null, fl46jy['_inited'] = ![], fl46jy['wxRequest'] = null, fl46jy['systemInfo'] = null, fl46jy['version'] = '0.0.1', fl46jy['isZiYu'] = ![], fl46jy['isPosMsgYu'] = ![], fl46jy['parseXMLFromString'] = function (ec_oa) {
            var q102rb, r0bq;
            ec_oa = ec_oa['replace'](/>\s+</g, '><');
            try {
                q102rb = new window['Parser']['DOMParser']()['parseFromString'](ec_oa, 'text/xml');
            } catch (uhzs37) {
                throw '需要引入xml解析库文件';
            }
            return q102rb;
        }, fl46jy['idx'] = 0x1, fl46jy;
    }(),
        q20r = function () {
        function aq1or() {}
        ft9g(aq1or, 'laya.wx.mini.MiniImage');
        var ckoe_a = aq1or['prototype'];
        return ckoe_a['_loadImage'] = function (tg5p) {
            var pm5 = this,
                ft956 = ![];
            tg5p['indexOf']('layaNativeDir/') == -0x1 && (ft956 = !![], tg5p = s3h8nu['formatURL'](tg5p));
            if (!rb0n['getFileInfo'](tg5p)) {
                if (tg5p['indexOf']('http://') != -0x1 || tg5p['indexOf']('https://') != -0x1) rb0n['downImg'](tg5p, new _kmd(aq1or, aq1or['onDownImgCallBack'], [tg5p, pm5]), tg5p);else aq1or['onCreateImage'](tg5p, pm5, !![]);
            } else aq1or['onCreateImage'](tg5p, pm5, !ft956);
        }, aq1or['onDownImgCallBack'] = function (br028n, dp9cm, h8rn0) {
            if (!h8rn0) aq1or['onCreateImage'](br028n, dp9cm);else dp9cm['onError'](null);
        }, aq1or['onCreateImage'] = function (mpg59, lt6y, _qoe) {
            _qoe === void 0x0 && (_qoe = ![]);
            var un;
            if (!_qoe) {
                var bkqo1a = rb0n['getFileInfo'](mpg59),
                    ekc_md = bkqo1a['md5'];
                un = rb0n['getFileNativePath'](ekc_md);
            } else un = mpg59;
            if (lt6y['imgCache'] == null) lt6y['imgCache'] = {};
            var t59dpm;
            function $jlw4() {
                t59dpm['onload'] = null, t59dpm['onerror'] = null, delete lt6y['imgCache'][mpg59];
            }
            ;
            var _akqo1 = function () {
                $jlw4(), lt6y['onLoaded'](t59dpm);
            },
                qrab1o = function () {
                $jlw4(), lt6y['event']('error', 'Load image failed');
            };
            lt6y['_type'] == 'nativeimage' ? (t59dpm = new t6yglf['window']['Image'](), t59dpm['crossOrigin'] = '', t59dpm['onload'] = _akqo1, t59dpm['onerror'] = qrab1o, t59dpm['src'] = un, lt6y['imgCache'][mpg59] = t59dpm) : new dck_me['create'](un, {
                'onload': _akqo1,
                'onerror': qrab1o,
                'onCreate': function (usn8) {
                    t59dpm = usn8, lt6y['imgCache'][mpg59] = usn8;
                }
            });
        }, aq1or;
    }(),
        f4ylg6 = function () {
        function r8h2n0() {}
        return ft9g(r8h2n0, 'laya.wx.mini.MiniInput'), r8h2n0['_createInputElement'] = function () {
            _dpmce['_initInput'](_dpmce['area'] = t6yglf['createElement']('textarea')), _dpmce['_initInput'](_dpmce['input'] = t6yglf['createElement']('input')), _dpmce['inputContainer'] = t6yglf['createElement']('div'), _dpmce['inputContainer']['style']['position'] = 'absolute', _dpmce['inputContainer']['style']['zIndex'] = 0x186a0, t6yglf['container']['appendChild'](_dpmce['inputContainer']), _dpmce['inputContainer']['setPos'] = function (nhs3uz, a1qbk) {
                _dpmce['inputContainer']['style']['left'] = nhs3uz + 'px', _dpmce['inputContainer']['style']['top'] = a1qbk + 'px';
            }, _ackoe['stage']['on']('resize', null, r8h2n0['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (ek_a) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), g956['_soundClass'] = h8sun3, g956['_musicClass'] = h8sun3, window['_videoClass'] = broaq1;
        }, r8h2n0['_onStageResize'] = function () {
            var okcd_ = _ackoe['stage']['_canvasTransform']['identity']();
            okcd_['scale'](t6yglf['width'] / gp9ft['canvas']['width'] / nh83s['getPixelRatio'](), t6yglf['height'] / gp9ft['canvas']['height'] / nh83s['getPixelRatio']());
        }, r8h2n0['wxinputFocus'] = function (gf5yt6) {
            var p95cdm = _dpmce['inputElement']['target'];
            if (p95cdm && !p95cdm['editable']) return;
            t9gp5['window']['wx']['offKeyboardConfirm'](), t9gp5['window']['wx']['offKeyboardInput'](), t9gp5['window']['wx']['showKeyboard']({
                'defaultValue': p95cdm['text'],
                'maxLength': p95cdm['maxChars'],
                'multiple': p95cdm['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (gy6fl4) {},
                'fail': function (_oecak) {}
            }), t9gp5['window']['wx']['onKeyboardConfirm'](function (c5p9m) {
                var u3x7sz = c5p9m ? c5p9m['value'] : '';
                p95cdm['text'] = u3x7sz, p95cdm['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), t9gp5['window']['wx']['onKeyboardInput'](function (j4ylf) {
                var lg6fty = j4ylf ? j4ylf['value'] : '';
                if (!p95cdm['multiline']) {
                    if (lg6fty['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                p95cdm['text'] = lg6fty, p95cdm['event']('input');
            });
        }, r8h2n0['inputEnter'] = function () {
            _dpmce['inputElement']['target']['focus'] = ![];
        }, r8h2n0['wxinputblur'] = function () {
            r8h2n0['hideKeyboard']();
        }, r8h2n0['hideKeyboard'] = function () {
            t9gp5['window']['wx']['offKeyboardConfirm'](), t9gp5['window']['wx']['offKeyboardInput'](), t9gp5['window']['wx']['hideKeyboard']({
                'success': function (k_oeq) {
                    console['log']('隐藏键盘');
                },
                'fail': function (o_a1k) {
                    console['log']('隐藏键盘出错:' + (o_a1k ? o_a1k['errMsg'] : ''));
                }
            });
        }, r8h2n0;
    }(),
        u8nh3 = function () {
        function s37uhz() {}
        ft9g(s37uhz, 'laya.wx.mini.MiniLoader');
        var un3zh = s37uhz['prototype'];
        return un3zh['load'] = function ($iwjv4, xz7s3, vi4wj$, h3nu28, l$4j6) {
            vi4wj$ === void 0x0 && (vi4wj$ = !![]), l$4j6 === void 0x0 && (l$4j6 = ![]);
            var boa1q = this;
            boa1q['_url'] = $iwjv4;
            if ($iwjv4['indexOf']('data:image') === 0x0) boa1q['_type'] = xz7s3 = 'image';else boa1q['_type'] = xz7s3 || (xz7s3 = boa1q['getTypeFromUrl']($iwjv4));
            boa1q['_cache'] = vi4wj$, boa1q['_data'] = null;
            var r0b218 = 'ascii';
            if ($iwjv4['indexOf']('.fnt') != -0x1) r0b218 = 'utf8';else xz7s3 == 'arraybuffer' && (r0b218 = '');
            ;
            var gyf65 = hun823['getFileExtension']($iwjv4);
            if (s37uhz['_fileTypeArr']['indexOf'](gyf65) != -0x1) t9gp5['EnvConfig']['load']['call'](this, $iwjv4, xz7s3, vi4wj$, h3nu28, l$4j6);else {
                if (!rb0n['getFileInfo']($iwjv4)) {
                    if ($iwjv4['indexOf']('layaNativeDir/') != -0x1) {
                        if (t9gp5['isZiYu']) {
                            var yl6g4f = rb0n['ziyuFileData'][$iwjv4];
                            boa1q['onLoaded'](yl6g4f);
                            return;
                        } else {
                            cosnole['log']('read read'), rb0n['read']($iwjv4, r0b218, new _kmd(s37uhz, s37uhz['onReadNativeCallBack'], [r0b218, $iwjv4, xz7s3, vi4wj$, h3nu28, l$4j6, boa1q]));
                            return;
                        }
                    }
                    if (s3h8nu['rootPath'] == '') var qkoae = $iwjv4;else qkoae = $iwjv4['split'](s3h8nu['rootPath'])[0x0];
                    $iwjv4['indexOf']('http://') != -0x1 || $iwjv4['indexOf']('https://') != -0x1 ? t9gp5['EnvConfig']['load']['call'](boa1q, $iwjv4, xz7s3, vi4wj$, h3nu28, l$4j6) : rb0n['readFile'](qkoae, r0b218, new _kmd(s37uhz, s37uhz['onReadNativeCallBack'], [r0b218, $iwjv4, xz7s3, vi4wj$, h3nu28, l$4j6, boa1q]), $iwjv4);
                } else t9gp5['EnvConfig']['load']['call'](this, $iwjv4, xz7s3, vi4wj$, h3nu28, l$4j6);
            }
        }, un3zh['resMgrLoad'] = function (a_qk1o, u2h8n3, p9dm5t, j64fly, a_coke, oak1qb, br820n) {
            p9dm5t === void 0x0 && (p9dm5t = 0x0), j64fly === void 0x0 && (j64fly = ![]), a_coke === void 0x0 && (a_coke = ![]), oak1qb === void 0x0 && (oak1qb = 0x0), br820n === void 0x0 && (br820n = 0x3), a_qk1o['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', a_qk1o), t9gp5['EnvConfig']['resMgrLoad'](a_qk1o, (fg6tl, tp95m, pmt5d) => {
                s37uhz['prototype']['resMgrLoadCallBack'](fg6tl, tp95m, pmt5d, u2h8n3);
            }, p9dm5t, j64fly, a_coke, oak1qb, br820n);
        }, un3zh['resMgrLoadCallBack'] = function (kod, _cmde, ka_oqe, q0b1ar) {
            console['log']('buff:::', kod, ka_oqe, rb0n['fileNativeDir'] + '///' + rb0n['fileListName']), q0b1ar(kod, _cmde, ka_oqe);
        }, un3zh['clearRes'] = function (b2180r, eak_) {
            eak_ === void 0x0 && (eak_ = ![]);
            var y46fjl = this;
            y46fjl['clearRes'](b2180r, eak_);
            var jwiv = rb0n['getFileInfo'](b2180r);
            if (jwiv && (b2180r['indexOf']('http://') != -0x1 || b2180r['indexOf']('https://') != -0x1)) {
                var nhzs = jwiv['md5'],
                    qobar = rb0n['getFileNativePath'](nhzs);
                rb0n['remove'](qobar);
            }
        }, s37uhz['onReadNativeCallBack'] = function (e_koqa, hn823u, jw$il, q1r0b2, kqboa, rqo, bn2r, mdepc, aokec) {
            q1r0b2 === void 0x0 && (q1r0b2 = !![]), rqo === void 0x0 && (rqo = ![]), mdepc === void 0x0 && (mdepc = 0x0);
            if (!mdepc) {
                var l4$6;
                if (jw$il == 'json' || jw$il == 'atlas') l4$6 = t9gp5['getJson'](aokec['data']);else jw$il == 'xml' ? l4$6 = hun823['parseXMLFromString'](aokec['data']) : l4$6 = aokec['data'];
                bn2r['onLoaded'](l4$6), !t9gp5['isZiYu'] && t9gp5['isPosMsgYu'] && jw$il != 'arraybuffer' && wx['postMessage']({
                    'url': hn823u,
                    'data': l4$6,
                    'isLoad': !![]
                });
            } else mdepc == 0x1 && t9gp5['EnvConfig']['load']['call'](bn2r, hn823u, jw$il, q1r0b2, kqboa, rqo);
        }, yfg5t(s37uhz, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), s37uhz;
    }(),
        rb0n = function (n2hu38) {
        function hn83su() {
            hn83su['__super']['call'](this);
            ;
        }
        return ft9g(hn83su, 'laya.wx.mini.MiniFileMgr', n2hu38), hn83su['isLoadFile'] = function (r2b81) {
            return hn83su['_fileTypeArr']['indexOf'](r2b81) != -0x1 ? !![] : ![];
        }, hn83su['getFileInfo'] = function (l$yj) {
            var yfl6j = l$yj['split']('?')[0x0],
                i$jl4 = hn83su['filesListObj'][yfl6j];
            if (i$jl4 == null) return null;else return i$jl4;
            return null;
        }, hn83su['onFileUpdate'] = function (s3znh, d_ecko) {
            var pced9 = s3znh['split']('/'),
                ilwj = pced9[pced9['length'] - 0x1],
                gyf5 = hn83su['getFileInfo'](d_ecko);
            if (gyf5 == null) hn83su['onSaveFile'](d_ecko, ilwj);else {
                if (gyf5['readyUrl'] != d_ecko) hn83su['remove'](ilwj, d_ecko);
            }
        }, hn83su['exits'] = function (ecm_d, ji$w4l) {
            var tm5gp9 = hn83su['getFileNativePath'](ecm_d);
            hn83su['fs']['getFileInfo']({
                'filePath': tm5gp9,
                'success': function (k_aoq1) {
                    ji$w4l != null && ji$w4l['runWith']([0x0, k_aoq1]);
                },
                'fail': function (qk1_a) {
                    ji$w4l != null && ji$w4l['runWith']([0x1, qk1_a]);
                }
            });
        }, hn83su['read'] = function (f4lg6y, _kqo, nszuh, qk_ae) {
            _kqo === void 0x0 && (_kqo = 'ascill'), qk_ae === void 0x0 && (qk_ae = '');
            var nuhs38;
            qk_ae != '' ? nuhs38 = hn83su['getFileNativePath'](f4lg6y) : nuhs38 = f4lg6y, hn83su['fs']['readFile']({
                'filePath': nuhs38,
                'encoding': _kqo,
                'success': function (cmekd_) {
                    nszuh != null && nszuh['runWith']([0x0, cmekd_]);
                },
                'fail': function (ji4w) {
                    if (ji4w && qk_ae != '') hn83su['down'](qk_ae, _kqo, nszuh, qk_ae);else nszuh != null && nszuh['runWith']([0x1]);
                }
            });
        }, hn83su['readNativeFile'] = function (fg6lyt, _1ako) {
            hn83su['fs']['readFile']({
                'filePath': fg6lyt,
                'encoding': '',
                'success': function (b802n) {
                    _1ako != null && _1ako['runWith']([0x0]);
                },
                'fail': function (rqa1bo) {
                    _1ako != null && _1ako['runWith']([0x1]);
                }
            });
        }, hn83su['down'] = function (i4wv$j, _kdme, bq02, ly$w4) {
            _kdme === void 0x0 && (_kdme = 'ascill'), ly$w4 === void 0x0 && (ly$w4 = '');
            var oaqek = hn83su['getFileNativePath'](ly$w4),
                gf59 = hn83su['wxdown']({
                'url': i4wv$j,
                'filePath': oaqek,
                'success': function (_aeko) {
                    if (_aeko['statusCode'] === 0xc8) hn83su['readFile'](_aeko['filePath'], _kdme, bq02, ly$w4);
                },
                'fail': function (tgyf6l) {
                    bq02 != null && bq02['runWith']([0x1, tgyf6l]);
                }
            });
            gf59['onProgressUpdate'](function (_eokaq) {
                bq02 != null && bq02['runWith']([0x2, _eokaq['progress']]);
            });
        }, hn83su['readFile'] = function (oc_a, kcd_em, fgtly6, rb1q) {
            kcd_em === void 0x0 && (kcd_em = 'ascill'), rb1q === void 0x0 && (rb1q = ''), hn83su['fs']['readFile']({
                'filePath': oc_a,
                'encoding': kcd_em,
                'success': function (mdpe9c) {
                    if (oc_a['indexOf']('http://') != -0x1 || oc_a['indexOf']('https://') != -0x1) hn83su['onFileUpdate'](oc_a, rb1q);
                    fgtly6 != null && fgtly6['runWith']([0x0, mdpe9c]);
                },
                'fail': function (xz3) {
                    if (xz3) fgtly6 != null && fgtly6['runWith']([0x1, xz3]);
                }
            });
        }, hn83su['downImg'] = function (h28n3u, g4y6l, ft59g6) {
            ft59g6 === void 0x0 && (ft59g6 = '');
            var aeko_ = hn83su['wxdown']({
                'url': h28n3u,
                'success': function (doekc_) {
                    doekc_['statusCode'] === 0xc8 && hn83su['copyFile'](doekc_['tempFilePath'], ft59g6, g4y6l);
                },
                'fail': function (il4w$) {
                    g4y6l != null && g4y6l['runWith']([0x1, il4w$]);
                }
            });
        }, hn83su['copyFile'] = function (t96gf5, cmd_pe, _eaokq) {
            var rhn02 = t96gf5['split']('/'),
                p9mde = rhn02[rhn02['length'] - 0x1],
                tgf5y6 = cmd_pe['split']('?')[0x0],
                akoe = hn83su['getFileInfo'](cmd_pe),
                eko = hn83su['getFileNativePath'](p9mde);
            hn83su['fs']['copyFile']({
                'srcPath': t96gf5,
                'destPath': eko,
                'success': function (n3zsh) {
                    if (!akoe) hn83su['onSaveFile'](cmd_pe, p9mde), _eaokq != null && _eaokq['runWith']([0x0]);else {
                        if (akoe['readyUrl'] != cmd_pe) hn83su['remove'](p9mde, cmd_pe, _eaokq);
                    }
                },
                'fail': function (w$i4jl) {
                    _eaokq != null && _eaokq['runWith']([0x1, w$i4jl]);
                }
            });
        }, hn83su['getFileNativePath'] = function (m_dkec) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + m_dkec;
        }, hn83su['remove'] = function (wl$4i, liw4$j, p5dc9) {
            liw4$j === void 0x0 && (liw4$j = '');
            var cmpd_e = hn83su['getFileInfo'](liw4$j),
                tf9g5p = hn83su['getFileNativePath'](cmpd_e['md5']);
            _ackoe['loader']['clearRes'](cmpd_e['readyUrl']), hn83su['fs']['unlink']({
                'filePath': tf9g5p,
                'success': function (dmcek_) {
                    if (liw4$j != '') hn83su['onSaveFile'](liw4$j, wl$4i);
                    p5dc9 != null && p5dc9['runWith']([0x0]);
                },
                'fail': function (j4wvi) {}
            });
        }, hn83su['onSaveFile'] = function ($lj46y, zn3h) {
            var l4$yj6 = $lj46y['split']('?')[0x0];
            hn83su['filesListObj'][l4$yj6] = {
                'md5': zn3h,
                'readyUrl': $lj46y
            }, hn83su['fs']['writeFile']({
                'filePath': hn83su['fileNativeDir'] + '/' + hn83su['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](hn83su['filesListObj']),
                'success': function (j4$liw) {
                    console['log']('写入测试测试成功：', j4$liw);
                },
                'fail': function (r210b8) {
                    console['log']('写入测试测试失败：', r210b8);
                }
            });
        }, hn83su['existDir'] = function (a_kco, t6f9g5) {
            hn83su['fs']['mkdir']({
                'dirPath': a_kco,
                'success': function (ao1rb) {
                    t6f9g5 != null && t6f9g5['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (fylg46) {
                    if (fylg46['errMsg']['indexOf']('file already exists') != -0x1) hn83su['readSync'](hn83su['fileListName'], 'utf8', t6f9g5);else t6f9g5 != null && t6f9g5['runWith']([0x1, fylg46]);
                }
            });
        }, hn83su['readSync'] = function (mpe9c, pd5t, m5d9cp, qb1a) {
            pd5t === void 0x0 && (pd5t = 'ascill'), qb1a === void 0x0 && (qb1a = '');
            var lfjy4 = hn83su['getFileNativePath'](mpe9c),
                ekoc;
            try {
                ekoc = hn83su['fs']['readFileSync'](lfjy4), m5d9cp != null && m5d9cp['runWith']([0x0, { 'data': ekoc }]);
            } catch (j4w) {
                m5d9cp != null && m5d9cp['runWith']([0x1]);
            }
        }, hn83su['readCache'] = function () {}, hn83su['writeCache'] = function (eao_k) {
            var fyg64l = readyUrl['split']('?')[0x0];
            hn83su['filesListObj'][fyg64l] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, hn83su['fs']['writeFile']({
                'filePath': hn83su['fileNativeDir'] + '/' + hn83su['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](hn83su['filesListObj']),
                'success': function (zs3nhu) {},
                'fail': function (g65ytf) {}
            });
        }, hn83su['setNativeFileDir'] = function (wij4) {
            hn83su['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + wij4;
        }, hn83su['filesListObj'] = {}, hn83su['fileNativeDir'] = null, hn83su['fileListName'] = 'layaairfiles.txt', hn83su['ziyuFileData'] = {}, yfg5t(hn83su, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), hn83su;
    }(yj6l4),
        h8sun3 = function (zhun3) {
        function pd_me() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], pd_me['__super']['call'](this), this['_sound'] = pd_me['_createSound'](), this['_chanell'] = new huz73(this['_sound']);
        }
        ft9g(pd_me, 'laya.wx.mini.MiniSound', zhun3);
        var l4y6j = pd_me['prototype'];
        return l4y6j['load'] = function (_a1q) {
            var yfg6tl = this;
            _a1q = s3h8nu['formatURL'](_a1q), this['url'] = _a1q;
            if (pd_me['_audioCache'][_a1q]) {
                this['event']('complete');
                return;
            }
            function rab1q() {
                if (pd_me['_null'] != undefined) yfg6tl['_sound']['onCanplay'](pd_me['_null']), yfg6tl['_sound']['onError'](pd_me['_null']);else try {
                    yfg6tl['_sound']['onCanplay'](null), yfg6tl['_sound']['onError'](null), pd_me['_null'] = null;
                } catch (edok_c) {
                    console['warn']('[wxmini] _clearSound:' + edok_c), yfg6tl['_sound']['onCanplay'](qr0a1), yfg6tl['_sound']['onError'](qr0a1), pd_me['_null'] = qr0a1;
                }
            }
            function l6gft() {
                z7s3ux['loaded'] = !![], z7s3ux['event']('complete'), pd_me['_audioCache'][z7s3ux['url']] = z7s3ux;
            }
            function tpm(kca_o) {
                console['error']('errCode=' + kca_o['errCode'] + '  errMsg=' + kca_o['errMsg']), z7s3ux['event']('error');
            }
            function qr0a1() {}
            this['_sound']['onCanplay'](l6gft), this['_sound']['onError'](tpm), this['_sound']['src'] = _a1q;
            var z7s3ux = this;
        }, l4y6j['play'] = function (b8r20n, d_mc) {
            b8r20n === void 0x0 && (b8r20n = 0x0), d_mc === void 0x0 && (d_mc = 0x0);
            var r1bq0a, v4iw$j;
            if (this['url'] == g956['_tMusic']) {
                if (!pd_me['_musicAudio']) pd_me['_musicAudio'] = this['_sound'];
                r1bq0a = pd_me['_musicAudio'], v4iw$j = this['_chanell'];
            } else r1bq0a = this['_sound'], v4iw$j = this['_chanell'];
            return r1bq0a['src'] = this['url'], r1bq0a['startTime'] = 0x0, v4iw$j['isStopped'] && (v4iw$j['url'] = this['url'], v4iw$j['loops'] = d_mc, v4iw$j['startTime'] = b8r20n, v4iw$j['play'](), g956['addChannel'](v4iw$j)), v4iw$j;
        }, l4y6j['dispose'] = function () {
            var j$wl4y = pd_me['_audioCache'][this['url']];
            j$wl4y && (j$wl4y['src'] = '', delete pd_me['_audioCache'][this['url']]);
        }, v4ji$(0x0, l4y6j, 'duration', function () {
            return this['_sound']['duration'];
        }), pd_me['_createSound'] = function () {
            pd_me['_id']++;
            var jwv$4i = t9gp5['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return jwv$4i;
        }, pd_me['_musicAudio'] = null, pd_me['_id'] = 0x0, pd_me['_audioCache'] = {}, pd_me['_null'] = undefined, pd_me;
    }(yj6l4),
        huz73 = function (b1a) {
        function mecpd9(ock_e) {
            this['_audio'] = null, this['_onEnd'] = null, mecpd9['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = ock_e, this['_onEnd'] = hun823['bind'](this['__onEnd'], this), ock_e['onEnded'](this['_onEnd']);
        }
        ft9g(mecpd9, 'laya.wx.mini.MiniSoundChannel', b1a);
        var mde_p = mecpd9['prototype'];
        return mde_p['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (_ackoe['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, mde_p['__onNull'] = function () {}, mde_p['play'] = function () {
            this['isStopped'] = ![], g956['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, mde_p['stop'] = function () {
            this['isStopped'] = !![], g956['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, mde_p['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, mde_p['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], g956['addChannel'](this), this['_audio']['play']();
        }, v4ji$(0x0, mde_p, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), v4ji$(0x0, mde_p, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), v4ji$(0x0, mde_p, 'volume', function () {
            return 0x1;
        }, function (rob1) {}), mecpd9['_null'] = undefined, mecpd9;
    }(ilj$),
        broaq1 = function () {
        function _koc() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = t9gp5['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        ft9g(_koc, 'laya.wx.mini.MiniVideo');
        var m9epdc = _koc['prototype'];
        return m9epdc['on'] = function (qrbao, $4jli, l6g4fy) {
            if (qrbao == 'loadedmetadata') this['onPlayFunc'] = l6g4fy['bind']($4jli), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else qrbao == 'ended' && (this['onEndedFunC'] = l6g4fy['bind']($4jli), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, m9epdc['onTimeUpdateFunc'] = function (zu3hs) {
            this['position'] = zu3hs['position'], this['_duration'] = zu3hs['duration'];
        }, m9epdc['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, m9epdc['onended'] = function (cmpde, pt9fg) {
            this['onEndedFunC'] = pt9fg['bind'](cmpde), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, m9epdc['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, m9epdc['off'] = function (unhz3, $ijw4l, suz7) {
            if (unhz3 == 'loadedmetadata') this['onPlayFunc'] = suz7['bind']($ijw4l), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else unhz3 == 'ended' && (this['onEndedFunC'] = suz7['bind']($ijw4l), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, m9epdc['load'] = function (rq2b10) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = rq2b10;
        }, m9epdc['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, m9epdc['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, m9epdc['size'] = function (pecd9, tpmd) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = pecd9, this['videoElement']['height'] = tpmd;
        }, m9epdc['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, m9epdc['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, v4ji$(0x0, m9epdc, 'duration', function () {
            return this['_duration'];
        }), v4ji$(0x0, m9epdc, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (eckao_) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = eckao_;
        }), v4ji$(0x0, m9epdc, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), v4ji$(0x0, m9epdc, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), v4ji$(0x0, m9epdc, 'ended', function () {
            return this['videoend'];
        }), v4ji$(0x0, m9epdc, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (a10qbr) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = a10qbr;
        }), v4ji$(0x0, m9epdc, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (ygf56t) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = ygf56t;
        }), v4ji$(0x0, m9epdc, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (jilw4) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = jilw4;
        }), v4ji$(0x0, m9epdc, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), v4ji$(0x0, m9epdc, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (vwi$j4) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = vwi$j4;
        }), v4ji$(0x0, m9epdc, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (brq0) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = brq0;
        }), v4ji$(0x0, m9epdc, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), v4ji$(0x0, m9epdc, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (iw$4lj) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = iw$4lj;
        }), v4ji$(0x0, m9epdc, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (fg6t5) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = fg6t5;
        }), v4ji$(0x0, m9epdc, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (nr082) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = nr082;
        }), _koc;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var zs3xu in Laya) {
        var rq02 = Laya[zs3xu];
        rq02 && rq02['__isclass'] && (exports[zs3xu] = rq02);
    }
});