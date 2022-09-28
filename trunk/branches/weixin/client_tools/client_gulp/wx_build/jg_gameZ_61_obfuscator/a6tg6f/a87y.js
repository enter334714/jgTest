var f = wx.$B;
(function (window, document, g_b3yw) {
    var gywb3 = g_b3yw['un'],
        _3wbyg = g_b3yw['uns'],
        l125z9 = g_b3yw['static'],
        hb39 = g_b3yw['class'],
        b_g = g_b3yw['getset'],
        e7oxa = g_b3yw['__newvec'],
        a6u7y4 = laya['utils']['Browser'],
        na6uo = laya['events']['Event'],
        jdt$8m = laya['events']['EventDispatcher'],
        w_gh3 = laya['resource']['HTMLImage'],
        kpftis = laya['utils']['Handler'],
        t$d8k = laya['display']['Input'],
        y_34 = laya['net']['Loader'],
        h3b_wg = laya['maths']['Matrix'],
        hzv9l5 = laya['renders']['Render'],
        j21mzd = laya['utils']['RunDriver'],
        w_gh3b = laya['media']['Sound'],
        u74ya6 = laya['media']['SoundChannel'],
        n7xo = laya['media']['SoundManager'],
        tmjd8$ = laya['display']['Stage'],
        _g3wb = laya['net']['URL'],
        z2l1j = laya['utils']['Utils'],
        _34 = function () {
        function _u64ya() {}
        return hb39(_u64ya, 'laya.wx.mini.MiniAdpter'), _u64ya['getJson'] = function (enaox7) {
            return JSON['parse'](enaox7);
        }, _u64ya['init'] = function (tf8p, au_4y) {
            tf8p === void 0x0 && (tf8p = ![]), au_4y === void 0x0 && (au_4y = ![]);
            if (_u64ya['_inited']) return;
            _u64ya['window'] = window;
            if (_u64ya['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            _u64ya['_inited'] = !![], _u64ya['isZiYu'] = au_4y, _u64ya['isPosMsgYu'] = tf8p, _u64ya['EnvConfig'] = {}, !_u64ya['isZiYu'] && (ifskpt['setNativeFileDir']('/layaairGame'), ifskpt['existDir'](ifskpt['fileNativeDir'], kpftis['create'](_u64ya, _u64ya['onMkdirCallBack']))), _u64ya['window']['focus'] = function () {}, g_b3yw['getUrlPath'] = function () {}, _u64ya['window']['logtime'] = function (ktdf8$) {}, _u64ya['window']['alertTimeLog'] = function (zjm2l) {}, _u64ya['window']['resetShareInfo'] = function () {}, _u64ya['window']['CanvasRenderingContext2D'] = function () {}, _u64ya['window']['CanvasRenderingContext2D']['prototype'] = _u64ya['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], _u64ya['window']['document']['body']['appendChild'] = function () {}, _u64ya['EnvConfig']['pixelRatioInt'] = 0x0, j21mzd['getPixelRatio'] = _u64ya['pixelRatio'], _u64ya['_preCreateElement'] = a6u7y4['createElement'], a6u7y4['createElement'] = _u64ya['createElement'], j21mzd['createShaderCondition'] = _u64ya['createShaderCondition'], z2l1j['parseXMLFromString'] = _u64ya['parseXMLFromString'], t$d8k['_createInputElement'] = au7ox['_createInputElement'], _u64ya['EnvConfig']['load'] = y_34['prototype']['load'], y_34['prototype']['load'] = l129z5['prototype']['load'], _u64ya['isZiYu'] && tf8p && wx['onMessage'](function (qnex0) {
                qnex0['isLoad'] && (ifskpt['ziyuFileData'][qnex0['url']] = qnex0['data']);
            });
        }, _u64ya['onMkdirCallBack'] = function (ya_4u6, eqnxo) {
            if (!ya_4u6) ifskpt['filesListObj'] = JSON['parse'](eqnxo['data']);
        }, _u64ya['pixelRatio'] = function () {
            if (!_u64ya['EnvConfig']['pixelRatioInt']) try {
                var n0xeq = wx['getSystemInfoSync']();
                return _u64ya['EnvConfig']['pixelRatioInt'] = n0xeq['pixelRatio'], n0xeq = n0xeq, n0xeq['pixelRatio'];
            } catch (mt8$d) {}
            return _u64ya['EnvConfig']['pixelRatioInt'];
        }, _u64ya['createElement'] = function (a46u) {
            if (a46u == 'canvas') {
                var a7oxen;
                return _u64ya['idx'] == 0x1 ? _u64ya['isZiYu'] ? (a7oxen = sharedCanvas, a7oxen['style'] = {}) : a7oxen = window['canvas'] : a7oxen = window['wx']['createCanvas'](), _u64ya['idx']++, a7oxen;
            } else {
                if (a46u == 'textarea' || a46u == 'input') return _u64ya['onCreateInput'](a46u);else {
                    if (a46u == 'div') {
                        var td$8km = _u64ya['_preCreateElement'](a46u);
                        return td$8km['contains'] = function (dktf$) {
                            return null;
                        }, td$8km['removeChild'] = function (lj1z) {}, td$8km;
                    } else return _u64ya['_preCreateElement'](a46u);
                }
            }
        }, _u64ya['onCreateInput'] = function (_wgb3h) {
            var km$dt = _u64ya['_preCreateElement'](_wgb3h);
            return km$dt['focus'] = au7ox['wxinputFocus'], km$dt['blur'] = au7ox['wxinputblur'], km$dt['style'] = {}, km$dt['value'] = 0x0, km$dt['parentElement'] = {}, km$dt['placeholder'] = {}, km$dt['type'] = {}, km$dt['setColor'] = function (z59) {}, km$dt['setType'] = function (stpikf) {}, km$dt['setFontFace'] = function (b9hv3) {}, km$dt['addEventListener'] = function (yg_) {}, km$dt['contains'] = function (tkpsf8) {
                return null;
            }, km$dt['removeChild'] = function (mkt$d) {}, km$dt;
        }, _u64ya['createShaderCondition'] = function (jd1mz) {
            var o0nxqe = this,
                l29vz = function () {
                var hwg3v = jd1mz;
                return o0nxqe[jd1mz['replace']('this.', '')];
            };
            return l29vz;
        }, _u64ya['EnvConfig'] = null, _u64ya['window'] = null, _u64ya['_preCreateElement'] = null, _u64ya['_inited'] = ![], _u64ya['wxRequest'] = null, _u64ya['systemInfo'] = null, _u64ya['version'] = '0.0.1', _u64ya['isZiYu'] = ![], _u64ya['isPosMsgYu'] = ![], _u64ya['parseXMLFromString'] = function ($8kp) {
            var hbg53v, vwhg3b;
            $8kp = $8kp['replace'](/>\s+</g, '><');
            try {
                hbg53v = new window['Parser']['DOMParser']()['parseFromString']($8kp, 'text/xml');
            } catch (rex0q) {
                throw '需要引入xml解析库文件';
            }
            return hbg53v;
        }, _u64ya['idx'] = 0x1, _u64ya;
    }(),
        spift = function () {
        function wgy_b() {}
        hb39(wgy_b, 'laya.wx.mini.MiniImage');
        var j2z1d = wgy_b['prototype'];
        return j2z1d['_loadImage'] = function (mjd$1) {
            var td8km$ = this,
                $8mtkd = ![];
            mjd$1['indexOf']('layaNativeDir/') == -0x1 && ($8mtkd = !![], mjd$1 = _g3wb['formatURL'](mjd$1));
            if (!ifskpt['getFileInfo'](mjd$1)) {
                if (mjd$1['indexOf']('http://') != -0x1 || mjd$1['indexOf']('https://') != -0x1) ifskpt['downImg'](mjd$1, new kpftis(wgy_b, wgy_b['onDownImgCallBack'], [mjd$1, td8km$]), mjd$1);else wgy_b['onCreateImage'](mjd$1, td8km$, !![]);
            } else wgy_b['onCreateImage'](mjd$1, td8km$, !$8mtkd);
        }, wgy_b['onDownImgCallBack'] = function (nxqoe0, ksiptf, djmt8$) {
            if (!djmt8$) wgy_b['onCreateImage'](nxqoe0, ksiptf);else ksiptf['onError'](null);
        }, wgy_b['onCreateImage'] = function (oxrq, w_g34y, v9b5h3) {
            v9b5h3 === void 0x0 && (v9b5h3 = ![]);
            var qex0no;
            if (!v9b5h3) {
                var z5hlv9 = ifskpt['getFileInfo'](oxrq),
                    roq0ex = z5hlv9['md5'];
                qex0no = ifskpt['getFileNativePath'](roq0ex);
            } else qex0no = oxrq;
            if (w_g34y['imgCache'] == null) w_g34y['imgCache'] = {};
            var y46_ua;
            function qeonx7() {
                y46_ua['onload'] = null, y46_ua['onerror'] = null, delete w_g34y['imgCache'][oxrq];
            }
            ;
            var zl92 = function () {
                qeonx7(), w_g34y['onLoaded'](y46_ua);
            },
                dj21mz = function () {
                qeonx7(), w_g34y['event']('error', 'Load image failed');
            };
            w_g34y['_type'] == 'nativeimage' ? (y46_ua = new a6u7y4['window']['Image'](), y46_ua['crossOrigin'] = '', y46_ua['onload'] = zl92, y46_ua['onerror'] = dj21mz, y46_ua['src'] = qex0no, w_g34y['imgCache'][oxrq] = y46_ua) : new w_gh3['create'](qex0no, {
                'onload': zl92,
                'onerror': dj21mz,
                'onCreate': function (xno7u) {
                    y46_ua = xno7u, w_g34y['imgCache'][oxrq] = xno7u;
                }
            });
        }, wgy_b;
    }(),
        au7ox = function () {
        function ghb3() {}
        return hb39(ghb3, 'laya.wx.mini.MiniInput'), ghb3['_createInputElement'] = function () {
            t$d8k['_initInput'](t$d8k['area'] = a6u7y4['createElement']('textarea')), t$d8k['_initInput'](t$d8k['input'] = a6u7y4['createElement']('input')), t$d8k['inputContainer'] = a6u7y4['createElement']('div'), t$d8k['inputContainer']['style']['position'] = 'absolute', t$d8k['inputContainer']['style']['zIndex'] = 0x186a0, a6u7y4['container']['appendChild'](t$d8k['inputContainer']), t$d8k['inputContainer']['setPos'] = function (hbgvw3, lzj2m) {
                t$d8k['inputContainer']['style']['left'] = hbgvw3 + 'px', t$d8k['inputContainer']['style']['top'] = lzj2m + 'px';
            }, g_b3yw['stage']['on']('resize', null, ghb3['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (qeox7n) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), n7xo['_soundClass'] = nq0oe, n7xo['_musicClass'] = nq0oe, window['_videoClass'] = djt8m;
        }, ghb3['_onStageResize'] = function () {
            var y4u_6a = g_b3yw['stage']['_canvasTransform']['identity']();
            y4u_6a['scale'](a6u7y4['width'] / hzv9l5['canvas']['width'] / j21mzd['getPixelRatio'](), a6u7y4['height'] / hzv9l5['canvas']['height'] / j21mzd['getPixelRatio']());
        }, ghb3['wxinputFocus'] = function (bw3gh_) {
            var sktfi = t$d8k['inputElement']['target'];
            if (sktfi && !sktfi['editable']) return;
            _34['window']['wx']['offKeyboardConfirm'](), _34['window']['wx']['offKeyboardInput'](), _34['window']['wx']['showKeyboard']({
                'defaultValue': sktfi['text'],
                'maxLength': sktfi['maxChars'],
                'multiple': sktfi['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (w_gy3) {},
                'fail': function (orqx0) {}
            }), _34['window']['wx']['onKeyboardConfirm'](function (g3_4wy) {
                var u6y7 = g3_4wy ? g3_4wy['value'] : '';
                sktfi['text'] = u6y7, sktfi['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), _34['window']['wx']['onKeyboardInput'](function (n7u6a4) {
                var itfp = n7u6a4 ? n7u6a4['value'] : '';
                if (!sktfi['multiline']) {
                    if (itfp['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                sktfi['text'] = itfp, sktfi['event']('input');
            });
        }, ghb3['inputEnter'] = function () {
            t$d8k['inputElement']['target']['focus'] = ![];
        }, ghb3['wxinputblur'] = function () {
            ghb3['hideKeyboard']();
        }, ghb3['hideKeyboard'] = function () {
            _34['window']['wx']['offKeyboardConfirm'](), _34['window']['wx']['offKeyboardInput'](), _34['window']['wx']['hideKeyboard']({
                'success': function (hwvg) {
                    console['log']('隐藏键盘');
                },
                'fail': function (j21mz) {
                    console['log']('隐藏键盘出错:' + (j21mz ? j21mz['errMsg'] : ''));
                }
            });
        }, ghb3;
    }(),
        l129z5 = function () {
        function xnq7o() {}
        hb39(xnq7o, 'laya.wx.mini.MiniLoader');
        var ua7no = xnq7o['prototype'];
        return ua7no['load'] = function (ksifpt, eoxrq, _gw3y4, mj$td, _gy3w4) {
            _gw3y4 === void 0x0 && (_gw3y4 = !![]), _gy3w4 === void 0x0 && (_gy3w4 = ![]);
            var z921j = this;
            z921j['_url'] = ksifpt;
            if (ksifpt['indexOf']('data:image') === 0x0) z921j['_type'] = eoxrq = 'image';else z921j['_type'] = eoxrq || (eoxrq = z921j['getTypeFromUrl'](ksifpt));
            z921j['_cache'] = _gw3y4, z921j['_data'] = null;
            var jdm = 'ascii';
            if (ksifpt['indexOf']('.fnt') != -0x1) jdm = 'utf8';else eoxrq == 'arraybuffer' && (jdm = '');
            ;
            var d2$j = z2l1j['getFileExtension'](ksifpt);
            if (xnq7o['_fileTypeArr']['indexOf'](d2$j) != -0x1) _34['EnvConfig']['load']['call'](this, ksifpt, eoxrq, _gw3y4, mj$td, _gy3w4);else {
                if (!ifskpt['getFileInfo'](ksifpt)) {
                    if (ksifpt['indexOf']('layaNativeDir/') != -0x1) {
                        if (_34['isZiYu']) {
                            var _hg = ifskpt['ziyuFileData'][ksifpt];
                            z921j['onLoaded'](_hg);
                            return;
                        } else {
                            cosnole['log']('read read'), ifskpt['read'](ksifpt, jdm, new kpftis(xnq7o, xnq7o['onReadNativeCallBack'], [jdm, ksifpt, eoxrq, _gw3y4, mj$td, _gy3w4, z921j]));
                            return;
                        }
                    }
                    if (_g3wb['rootPath'] == '') var dk8$mt = ksifpt;else dk8$mt = ksifpt['split'](_g3wb['rootPath'])[0x0];
                    ksifpt['indexOf']('http://') != -0x1 || ksifpt['indexOf']('https://') != -0x1 ? _34['EnvConfig']['load']['call'](z921j, ksifpt, eoxrq, _gw3y4, mj$td, _gy3w4) : ifskpt['readFile'](dk8$mt, jdm, new kpftis(xnq7o, xnq7o['onReadNativeCallBack'], [jdm, ksifpt, eoxrq, _gw3y4, mj$td, _gy3w4, z921j]), ksifpt);
                } else _34['EnvConfig']['load']['call'](this, ksifpt, eoxrq, _gw3y4, mj$td, _gy3w4);
            }
        }, ua7no['resMgrLoad'] = function (nou76a, j8m$d1, ktfd8$, yu4a_, d8ktf, a6uo7n, j2dzm1) {
            ktfd8$ === void 0x0 && (ktfd8$ = 0x0), yu4a_ === void 0x0 && (yu4a_ = ![]), d8ktf === void 0x0 && (d8ktf = ![]), a6uo7n === void 0x0 && (a6uo7n = 0x0), j2dzm1 === void 0x0 && (j2dzm1 = 0x3), nou76a['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', nou76a), _34['EnvConfig']['resMgrLoad'](nou76a, (u_6yw, mt$dj8, aun7o6) => {
                xnq7o['prototype']['resMgrLoadCallBack'](u_6yw, mt$dj8, aun7o6, j8m$d1);
            }, ktfd8$, yu4a_, d8ktf, a6uo7n, j2dzm1);
        }, ua7no['resMgrLoadCallBack'] = function (dtj$8, xno7, h95v3, gbyw) {
            console['log']('buff:::', dtj$8, h95v3, ifskpt['fileNativeDir'] + '///' + ifskpt['fileListName']), gbyw(dtj$8, xno7, h95v3);
        }, ua7no['clearRes'] = function (vhlb9, sf8tkp) {
            sf8tkp === void 0x0 && (sf8tkp = ![]);
            var h3b5v9 = this;
            h3b5v9['clearRes'](vhlb9, sf8tkp);
            var xoa7u = ifskpt['getFileInfo'](vhlb9);
            if (xoa7u && (vhlb9['indexOf']('http://') != -0x1 || vhlb9['indexOf']('https://') != -0x1)) {
                var oneqx7 = xoa7u['md5'],
                    zmd1j = ifskpt['getFileNativePath'](oneqx7);
                ifskpt['remove'](zmd1j);
            }
        }, xnq7o['onReadNativeCallBack'] = function (nau7o6, dm2$1j, noau67, n6ao7, d8j1m$, j2$1dm, bv3ghw, un67a4, v3hbg5) {
            n6ao7 === void 0x0 && (n6ao7 = !![]), j2$1dm === void 0x0 && (j2$1dm = ![]), un67a4 === void 0x0 && (un67a4 = 0x0);
            if (!un67a4) {
                var y_w6u4;
                if (noau67 == 'json' || noau67 == 'atlas') y_w6u4 = _34['getJson'](v3hbg5['data']);else noau67 == 'xml' ? y_w6u4 = z2l1j['parseXMLFromString'](v3hbg5['data']) : y_w6u4 = v3hbg5['data'];
                bv3ghw['onLoaded'](y_w6u4), !_34['isZiYu'] && _34['isPosMsgYu'] && noau67 != 'arraybuffer' && wx['postMessage']({
                    'url': dm2$1j,
                    'data': y_w6u4,
                    'isLoad': !![]
                });
            } else un67a4 == 0x1 && _34['EnvConfig']['load']['call'](bv3ghw, dm2$1j, noau67, n6ao7, d8j1m$, j2$1dm);
        }, l125z9(xnq7o, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), xnq7o;
    }(),
        ifskpt = function (jlz219) {
        function ktf8p$() {
            ktf8p$['__super']['call'](this);
            ;
        }
        return hb39(ktf8p$, 'laya.wx.mini.MiniFileMgr', jlz219), ktf8p$['isLoadFile'] = function (tpfs8) {
            return ktf8p$['_fileTypeArr']['indexOf'](tpfs8) != -0x1 ? !![] : ![];
        }, ktf8p$['getFileInfo'] = function (qo0n) {
            var ljzm12 = qo0n['split']('?')[0x0],
                xoreq0 = ktf8p$['filesListObj'][ljzm12];
            if (xoreq0 == null) return null;else return xoreq0;
            return null;
        }, ktf8p$['onFileUpdate'] = function ($mjd2, l92z5v) {
            var gw = $mjd2['split']('/'),
                gw_bh = gw[gw['length'] - 0x1],
                jd1mz2 = ktf8p$['getFileInfo'](l92z5v);
            if (jd1mz2 == null) ktf8p$['onSaveFile'](l92z5v, gw_bh);else {
                if (jd1mz2['readyUrl'] != l92z5v) ktf8p$['remove'](gw_bh, l92z5v);
            }
        }, ktf8p$['exits'] = function (n7oxua, dm1$j2) {
            var j19lz2 = ktf8p$['getFileNativePath'](n7oxua);
            ktf8p$['fs']['getFileInfo']({
                'filePath': j19lz2,
                'success': function (h5z9) {
                    dm1$j2 != null && dm1$j2['runWith']([0x0, h5z9]);
                },
                'fail': function (pksitf) {
                    dm1$j2 != null && dm1$j2['runWith']([0x1, pksitf]);
                }
            });
        }, ktf8p$['read'] = function (ftipsk, eroqx, rq0ex, $dkm8t) {
            eroqx === void 0x0 && (eroqx = 'ascill'), $dkm8t === void 0x0 && ($dkm8t = '');
            var z1j92l;
            $dkm8t != '' ? z1j92l = ktf8p$['getFileNativePath'](ftipsk) : z1j92l = ftipsk, ktf8p$['fs']['readFile']({
                'filePath': z1j92l,
                'encoding': eroqx,
                'success': function (wy6g) {
                    rq0ex != null && rq0ex['runWith']([0x0, wy6g]);
                },
                'fail': function (wy4g) {
                    if (wy4g && $dkm8t != '') ktf8p$['down']($dkm8t, eroqx, rq0ex, $dkm8t);else rq0ex != null && rq0ex['runWith']([0x1]);
                }
            });
        }, ktf8p$['readNativeFile'] = function (xeoa7n, j1lz2) {
            ktf8p$['fs']['readFile']({
                'filePath': xeoa7n,
                'encoding': '',
                'success': function (dmj8t) {
                    j1lz2 != null && j1lz2['runWith']([0x0]);
                },
                'fail': function (v93h) {
                    j1lz2 != null && j1lz2['runWith']([0x1]);
                }
            });
        }, ktf8p$['down'] = function (ygw64, vh9z5l, y4wu, wvgh3) {
            vh9z5l === void 0x0 && (vh9z5l = 'ascill'), wvgh3 === void 0x0 && (wvgh3 = '');
            var gy43 = ktf8p$['getFileNativePath'](wvgh3),
                y_gbw3 = ktf8p$['wxdown']({
                'url': ygw64,
                'filePath': gy43,
                'success': function (qe7ox) {
                    if (qe7ox['statusCode'] === 0xc8) ktf8p$['readFile'](qe7ox['filePath'], vh9z5l, y4wu, wvgh3);
                },
                'fail': function ($d8tmj) {
                    y4wu != null && y4wu['runWith']([0x1, $d8tmj]);
                }
            });
            y_gbw3['onProgressUpdate'](function (unaox) {
                y4wu != null && y4wu['runWith']([0x2, unaox['progress']]);
            });
        }, ktf8p$['readFile'] = function (f8d$tk, on7ua, e7oxnq, o0rqx) {
            on7ua === void 0x0 && (on7ua = 'ascill'), o0rqx === void 0x0 && (o0rqx = ''), ktf8p$['fs']['readFile']({
                'filePath': f8d$tk,
                'encoding': on7ua,
                'success': function (wg3_y4) {
                    if (f8d$tk['indexOf']('http://') != -0x1 || f8d$tk['indexOf']('https://') != -0x1) ktf8p$['onFileUpdate'](f8d$tk, o0rqx);
                    e7oxnq != null && e7oxnq['runWith']([0x0, wg3_y4]);
                },
                'fail': function (wvbg) {
                    if (wvbg) e7oxnq != null && e7oxnq['runWith']([0x1, wvbg]);
                }
            });
        }, ktf8p$['downImg'] = function (y46ua, blvh5, z29l5v) {
            z29l5v === void 0x0 && (z29l5v = '');
            var una7x = ktf8p$['wxdown']({
                'url': y46ua,
                'success': function (hbw_g3) {
                    hbw_g3['statusCode'] === 0xc8 && ktf8p$['copyFile'](hbw_g3['tempFilePath'], z29l5v, blvh5);
                },
                'fail': function (bvg3w) {
                    blvh5 != null && blvh5['runWith']([0x1, bvg3w]);
                }
            });
        }, ktf8p$['copyFile'] = function (g3y4_, ox7en, $jd21m) {
            var n7oux = g3y4_['split']('/'),
                spifk = n7oux[n7oux['length'] - 0x1],
                l5bv9 = ox7en['split']('?')[0x0],
                n6a74 = ktf8p$['getFileInfo'](ox7en),
                gw43y_ = ktf8p$['getFileNativePath'](spifk);
            ktf8p$['fs']['copyFile']({
                'srcPath': g3y4_,
                'destPath': gw43y_,
                'success': function (itfsk) {
                    if (!n6a74) ktf8p$['onSaveFile'](ox7en, spifk), $jd21m != null && $jd21m['runWith']([0x0]);else {
                        if (n6a74['readyUrl'] != ox7en) ktf8p$['remove'](spifk, ox7en, $jd21m);
                    }
                },
                'fail': function (hvb3gw) {
                    $jd21m != null && $jd21m['runWith']([0x1, hvb3gw]);
                }
            });
        }, ktf8p$['getFileNativePath'] = function (lhbv9) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + lhbv9;
        }, ktf8p$['remove'] = function (vl59bh, p8tk, t8kd$f) {
            p8tk === void 0x0 && (p8tk = '');
            var tj8m = ktf8p$['getFileInfo'](p8tk),
                yu_6w = ktf8p$['getFileNativePath'](tj8m['md5']);
            g_b3yw['loader']['clearRes'](tj8m['readyUrl']), ktf8p$['fs']['unlink']({
                'filePath': yu_6w,
                'success': function (hb5lv9) {
                    if (p8tk != '') ktf8p$['onSaveFile'](p8tk, vl59bh);
                    t8kd$f != null && t8kd$f['runWith']([0x0]);
                },
                'fail': function ($t8kfp) {}
            });
        }, ktf8p$['onSaveFile'] = function (hvb359, j21zdm) {
            var dmj$t8 = hvb359['split']('?')[0x0];
            ktf8p$['filesListObj'][dmj$t8] = {
                'md5': j21zdm,
                'readyUrl': hvb359
            }, ktf8p$['fs']['writeFile']({
                'filePath': ktf8p$['fileNativeDir'] + '/' + ktf8p$['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](ktf8p$['filesListObj']),
                'success': function (xnq0oe) {
                    console['log']('写入测试测试成功：', xnq0oe);
                },
                'fail': function (xenao7) {
                    console['log']('写入测试测试失败：', xenao7);
                }
            });
        }, ktf8p$['existDir'] = function (bv3whg, wbg_h) {
            ktf8p$['fs']['mkdir']({
                'dirPath': bv3whg,
                'success': function (xneoq) {
                    wbg_h != null && wbg_h['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (h5b3g) {
                    if (h5b3g['errMsg']['indexOf']('file already exists') != -0x1) ktf8p$['readSync'](ktf8p$['fileListName'], 'utf8', wbg_h);else wbg_h != null && wbg_h['runWith']([0x1, h5b3g]);
                }
            });
        }, ktf8p$['readSync'] = function (l912, k8$pf, _uay4, l92v5z) {
            k8$pf === void 0x0 && (k8$pf = 'ascill'), l92v5z === void 0x0 && (l92v5z = '');
            var bl5v = ktf8p$['getFileNativePath'](l912),
                $m8jd1;
            try {
                $m8jd1 = ktf8p$['fs']['readFileSync'](bl5v), _uay4 != null && _uay4['runWith']([0x0, { 'data': $m8jd1 }]);
            } catch (a7n46u) {
                _uay4 != null && _uay4['runWith']([0x1]);
            }
        }, ktf8p$['readCache'] = function () {}, ktf8p$['writeCache'] = function ($djm21) {
            var tifspk = readyUrl['split']('?')[0x0];
            ktf8p$['filesListObj'][tifspk] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, ktf8p$['fs']['writeFile']({
                'filePath': ktf8p$['fileNativeDir'] + '/' + ktf8p$['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](ktf8p$['filesListObj']),
                'success': function (a7nx) {},
                'fail': function (md1zj2) {}
            });
        }, ktf8p$['setNativeFileDir'] = function (wu4_y) {
            ktf8p$['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + wu4_y;
        }, ktf8p$['filesListObj'] = {}, ktf8p$['fileNativeDir'] = null, ktf8p$['fileListName'] = 'layaairfiles.txt', ktf8p$['ziyuFileData'] = {}, l125z9(ktf8p$, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), ktf8p$;
    }(jdt$8m),
        nq0oe = function (exn7qo) {
        function j8md$t() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], j8md$t['__super']['call'](this), this['_sound'] = j8md$t['_createSound'](), this['_chanell'] = new m8tk(this['_sound']);
        }
        hb39(j8md$t, 'laya.wx.mini.MiniSound', exn7qo);
        var gbh3w_ = j8md$t['prototype'];
        return gbh3w_['load'] = function (o0r) {
            var p$f8t = this;
            o0r = _g3wb['formatURL'](o0r), this['url'] = o0r;
            if (j8md$t['_audioCache'][o0r]) {
                this['event']('complete');
                return;
            }
            function vg3bhw() {
                if (j8md$t['_null'] != undefined) p$f8t['_sound']['onCanplay'](j8md$t['_null']), p$f8t['_sound']['onError'](j8md$t['_null']);else try {
                    p$f8t['_sound']['onCanplay'](null), p$f8t['_sound']['onError'](null), j8md$t['_null'] = null;
                } catch (n7uo6a) {
                    console['warn']('[wxmini] _clearSound:' + n7uo6a), p$f8t['_sound']['onCanplay'](t8fskp), p$f8t['_sound']['onError'](t8fskp), j8md$t['_null'] = t8fskp;
                }
            }
            function noeqx() {
                b3_gwh['loaded'] = !![], b3_gwh['event']('complete'), j8md$t['_audioCache'][b3_gwh['url']] = b3_gwh;
            }
            function bg5(pfstik) {
                console['error']('errCode=' + pfstik['errCode'] + '  errMsg=' + pfstik['errMsg']), b3_gwh['event']('error');
            }
            function t8fskp() {}
            this['_sound']['onCanplay'](noeqx), this['_sound']['onError'](bg5), this['_sound']['src'] = o0r;
            var b3_gwh = this;
        }, gbh3w_['play'] = function ($1jm8d, ipf) {
            $1jm8d === void 0x0 && ($1jm8d = 0x0), ipf === void 0x0 && (ipf = 0x0);
            var vbg5h3, _34gwy;
            if (this['url'] == n7xo['_tMusic']) {
                if (!j8md$t['_musicAudio']) j8md$t['_musicAudio'] = this['_sound'];
                vbg5h3 = j8md$t['_musicAudio'], _34gwy = this['_chanell'];
            } else vbg5h3 = this['_sound'], _34gwy = this['_chanell'];
            return vbg5h3['src'] = this['url'], vbg5h3['startTime'] = 0x0, _34gwy['isStopped'] && (_34gwy['url'] = this['url'], _34gwy['loops'] = ipf, _34gwy['startTime'] = $1jm8d, _34gwy['play'](), n7xo['addChannel'](_34gwy)), _34gwy;
        }, gbh3w_['dispose'] = function () {
            var z5lv29 = j8md$t['_audioCache'][this['url']];
            z5lv29 && (z5lv29['src'] = '', delete j8md$t['_audioCache'][this['url']]);
        }, b_g(0x0, gbh3w_, 'duration', function () {
            return this['_sound']['duration'];
        }), j8md$t['_createSound'] = function () {
            j8md$t['_id']++;
            var lm1zj2 = _34['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return lm1zj2;
        }, j8md$t['_musicAudio'] = null, j8md$t['_id'] = 0x0, j8md$t['_audioCache'] = {}, j8md$t['_null'] = undefined, j8md$t;
    }(jdt$8m),
        m8tk = function (g3bw_h) {
        function h59b3v(y6w4_g) {
            this['_audio'] = null, this['_onEnd'] = null, h59b3v['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = y6w4_g, this['_onEnd'] = z2l1j['bind'](this['__onEnd'], this), y6w4_g['onEnded'](this['_onEnd']);
        }
        hb39(h59b3v, 'laya.wx.mini.MiniSoundChannel', g3bw_h);
        var nu76oa = h59b3v['prototype'];
        return nu76oa['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (g_b3yw['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, nu76oa['__onNull'] = function () {}, nu76oa['play'] = function () {
            this['isStopped'] = ![], n7xo['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, nu76oa['stop'] = function () {
            this['isStopped'] = !![], n7xo['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, nu76oa['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, nu76oa['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], n7xo['addChannel'](this), this['_audio']['play']();
        }, b_g(0x0, nu76oa, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), b_g(0x0, nu76oa, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), b_g(0x0, nu76oa, 'volume', function () {
            return 0x1;
        }, function (lh5b9v) {}), h59b3v['_null'] = undefined, h59b3v;
    }(u74ya6),
        djt8m = function () {
        function hb5lv() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = _34['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        hb39(hb5lv, 'laya.wx.mini.MiniVideo');
        var _64yg = hb5lv['prototype'];
        return _64yg['on'] = function (gw_3, y4_gw, _4gy3w) {
            if (gw_3 == 'loadedmetadata') this['onPlayFunc'] = _4gy3w['bind'](y4_gw), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else gw_3 == 'ended' && (this['onEndedFunC'] = _4gy3w['bind'](y4_gw), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, _64yg['onTimeUpdateFunc'] = function (qneox) {
            this['position'] = qneox['position'], this['_duration'] = qneox['duration'];
        }, _64yg['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, _64yg['onended'] = function (onae, p8stk) {
            this['onEndedFunC'] = p8stk['bind'](onae), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, _64yg['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, _64yg['off'] = function (en0qo, z95vh, yau64_) {
            if (en0qo == 'loadedmetadata') this['onPlayFunc'] = yau64_['bind'](z95vh), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else en0qo == 'ended' && (this['onEndedFunC'] = yau64_['bind'](z95vh), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, _64yg['load'] = function (onua) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = onua;
        }, _64yg['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, _64yg['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, _64yg['size'] = function (ikptfs, rqoex0) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = ikptfs, this['videoElement']['height'] = rqoex0;
        }, _64yg['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, _64yg['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, b_g(0x0, _64yg, 'duration', function () {
            return this['_duration'];
        }), b_g(0x0, _64yg, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (z5h9) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = z5h9;
        }), b_g(0x0, _64yg, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), b_g(0x0, _64yg, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), b_g(0x0, _64yg, 'ended', function () {
            return this['videoend'];
        }), b_g(0x0, _64yg, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (vb59l) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = vb59l;
        }), b_g(0x0, _64yg, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (uw6y_4) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = uw6y_4;
        }), b_g(0x0, _64yg, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (jz21l9) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = jz21l9;
        }), b_g(0x0, _64yg, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), b_g(0x0, _64yg, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (vhl95) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = vhl95;
        }), b_g(0x0, _64yg, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (fpistk) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = fpistk;
        }), b_g(0x0, _64yg, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), b_g(0x0, _64yg, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (fkist) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = fkist;
        }), b_g(0x0, _64yg, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (kfips) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = kfips;
        }), b_g(0x0, _64yg, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (itfs) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = itfs;
        }), hb5lv;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var b5hv9l in Laya) {
        var gbw_h3 = Laya[b5hv9l];
        gbw_h3 && gbw_h3['__isclass'] && (exports[b5hv9l] = gbw_h3);
    }
});