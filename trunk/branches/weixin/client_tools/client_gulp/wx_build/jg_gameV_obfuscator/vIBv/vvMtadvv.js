var Q = wx.$v;
(function (window, document, pb69_z) {
    var rvxkt = pb69_z['un'],
        x8qsj = pb69_z['uns'],
        r8tjx = pb69_z['static'],
        d60 = pb69_z['class'],
        wvkr3 = pb69_z['getset'],
        krt3w = pb69_z['__newvec'],
        ci$uy = laya['utils']['Browser'],
        vk = laya['events']['Event'],
        d6bz = laya['events']['EventDispatcher'],
        h3kv = laya['resource']['HTMLImage'],
        r3vkl = laya['utils']['Handler'],
        d920p = laya['display']['Input'],
        dp69b = laya['net']['Loader'],
        v3tw = laya['maths']['Matrix'],
        y3h = laya['renders']['Render'],
        id02 = laya['utils']['RunDriver'],
        mhly$ = laya['media']['Sound'],
        zb9_o = laya['media']['SoundChannel'],
        trjxqk = laya['media']['SoundManager'],
        u20n1 = laya['display']['Stage'],
        zo_fb5 = laya['net']['URL'],
        wtkrx = laya['utils']['Utils'],
        yh$3 = function () {
        function q8sjgx() {}
        return d60(q8sjgx, 'laya.wx.mini.MiniAdpter'), q8sjgx['getJson'] = function (lh3mw) {
            return JSON['parse'](lh3mw);
        }, q8sjgx['init'] = function (vxrkw, i1n$c) {
            vxrkw === void 0x0 && (vxrkw = ![]), i1n$c === void 0x0 && (i1n$c = ![]);
            if (q8sjgx['_inited']) return;
            q8sjgx['window'] = window;
            if (q8sjgx['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            q8sjgx['_inited'] = !![], q8sjgx['isZiYu'] = i1n$c, q8sjgx['isPosMsgYu'] = vxrkw, q8sjgx['EnvConfig'] = {}, !q8sjgx['isZiYu'] && (rqktxw['setNativeFileDir']('/layaairGame'), rqktxw['existDir'](rqktxw['fileNativeDir'], r3vkl['create'](q8sjgx, q8sjgx['onMkdirCallBack']))), q8sjgx['window']['focus'] = function () {}, pb69_z['getUrlPath'] = function () {}, q8sjgx['window']['logtime'] = function (q8rj) {}, q8sjgx['window']['alertTimeLog'] = function (yhml3v) {}, q8sjgx['window']['resetShareInfo'] = function () {}, q8sjgx['window']['CanvasRenderingContext2D'] = function () {}, q8sjgx['window']['CanvasRenderingContext2D']['prototype'] = q8sjgx['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], q8sjgx['window']['document']['body']['appendChild'] = function () {}, q8sjgx['EnvConfig']['pixelRatioInt'] = 0x0, id02['getPixelRatio'] = q8sjgx['pixelRatio'], q8sjgx['_preCreateElement'] = ci$uy['createElement'], ci$uy['createElement'] = q8sjgx['createElement'], id02['createShaderCondition'] = q8sjgx['createShaderCondition'], wtkrx['parseXMLFromString'] = q8sjgx['parseXMLFromString'], d920p['_createInputElement'] = u0ni['_createInputElement'], q8sjgx['EnvConfig']['load'] = dp69b['prototype']['load'], dp69b['prototype']['load'] = a547e['prototype']['load'], q8sjgx['isZiYu'] && vxrkw && wx['onMessage'](function (rklv3) {
                rklv3['isLoad'] && (rqktxw['ziyuFileData'][rklv3['url']] = rklv3['data']);
            });
        }, q8sjgx['onMkdirCallBack'] = function (c$ymh1, un2dp) {
            if (!c$ymh1) rqktxw['filesListObj'] = JSON['parse'](un2dp['data']);
        }, q8sjgx['pixelRatio'] = function () {
            if (!q8sjgx['EnvConfig']['pixelRatioInt']) try {
                var r8xtj = wx['getSystemInfoSync']();
                return q8sjgx['EnvConfig']['pixelRatioInt'] = r8xtj['pixelRatio'], r8xtj = r8xtj, r8xtj['pixelRatio'];
            } catch (e7of_5) {}
            return q8sjgx['EnvConfig']['pixelRatioInt'];
        }, q8sjgx['createElement'] = function (o_57fe) {
            if (o_57fe == 'canvas') {
                var f57oea;
                return q8sjgx['idx'] == 0x1 ? q8sjgx['isZiYu'] ? (f57oea = sharedCanvas, f57oea['style'] = {}) : f57oea = window['canvas'] : f57oea = window['wx']['createCanvas'](), q8sjgx['idx']++, f57oea;
            } else {
                if (o_57fe == 'textarea' || o_57fe == 'input') return q8sjgx['onCreateInput'](o_57fe);else {
                    if (o_57fe == 'div') {
                        var klv3h = q8sjgx['_preCreateElement'](o_57fe);
                        return klv3h['contains'] = function (xg8tj) {
                            return null;
                        }, klv3h['removeChild'] = function (kqjtxr) {}, klv3h;
                    } else return q8sjgx['_preCreateElement'](o_57fe);
                }
            }
        }, q8sjgx['onCreateInput'] = function (p26bd) {
            var hvmyl3 = q8sjgx['_preCreateElement'](p26bd);
            return hvmyl3['focus'] = u0ni['wxinputFocus'], hvmyl3['blur'] = u0ni['wxinputblur'], hvmyl3['style'] = {}, hvmyl3['value'] = 0x0, hvmyl3['parentElement'] = {}, hvmyl3['placeholder'] = {}, hvmyl3['type'] = {}, hvmyl3['setColor'] = function (bp29d6) {}, hvmyl3['setType'] = function (zo_5f) {}, hvmyl3['setFontFace'] = function (qxgs8j) {}, hvmyl3['addEventListener'] = function (l3whm) {}, hvmyl3['contains'] = function (xkrvt) {
                return null;
            }, hvmyl3['removeChild'] = function (qgsj) {}, hvmyl3;
        }, q8sjgx['createShaderCondition'] = function (tjkx) {
            var mwl3h = this,
                v3mlwh = function () {
                var i20nu1 = tjkx;
                return mwl3h[tjkx['replace']('this.', '')];
            };
            return v3mlwh;
        }, q8sjgx['EnvConfig'] = null, q8sjgx['window'] = null, q8sjgx['_preCreateElement'] = null, q8sjgx['_inited'] = ![], q8sjgx['wxRequest'] = null, q8sjgx['systemInfo'] = null, q8sjgx['version'] = '0.0.1', q8sjgx['isZiYu'] = ![], q8sjgx['isPosMsgYu'] = ![], q8sjgx['parseXMLFromString'] = function (n92p0d) {
            var $imy, e5a7f4;
            n92p0d = n92p0d['replace'](/>\s+</g, '><');
            try {
                $imy = new window['Parser']['DOMParser']()['parseFromString'](n92p0d, 'text/xml');
            } catch (fa47e5) {
                throw '需要引入xml解析库文件';
            }
            return $imy;
        }, q8sjgx['idx'] = 0x1, q8sjgx;
    }(),
        e75af = function () {
        function ndu20i() {}
        d60(ndu20i, 'laya.wx.mini.MiniImage');
        var qjt8g = ndu20i['prototype'];
        return qjt8g['_loadImage'] = function (pb9_6) {
            var ea5fo = this,
                myvlh = ![];
            pb9_6['indexOf']('layaNativeDir/') == -0x1 && (myvlh = !![], pb9_6 = zo_fb5['formatURL'](pb9_6));
            if (!rqktxw['getFileInfo'](pb9_6)) {
                if (pb9_6['indexOf']('http://') != -0x1 || pb9_6['indexOf']('https://') != -0x1) rqktxw['downImg'](pb9_6, new r3vkl(ndu20i, ndu20i['onDownImgCallBack'], [pb9_6, ea5fo]), pb9_6);else ndu20i['onCreateImage'](pb9_6, ea5fo, !![]);
            } else ndu20i['onCreateImage'](pb9_6, ea5fo, !myvlh);
        }, ndu20i['onDownImgCallBack'] = function (cy$im1, wvkxtr, lyhm3) {
            if (!lyhm3) ndu20i['onCreateImage'](cy$im1, wvkxtr);else wvkxtr['onError'](null);
        }, ndu20i['onCreateImage'] = function (o7e_5, mci, xs8) {
            xs8 === void 0x0 && (xs8 = ![]);
            var hc1m$y;
            if (!xs8) {
                var h$y3 = rqktxw['getFileInfo'](o7e_5),
                    c1i$nu = h$y3['md5'];
                hc1m$y = rqktxw['getFileNativePath'](c1i$nu);
            } else hc1m$y = o7e_5;
            if (mci['imgCache'] == null) mci['imgCache'] = {};
            var mhy$l;
            function ndu20p() {
                mhy$l['onload'] = null, mhy$l['onerror'] = null, delete mci['imgCache'][o7e_5];
            }
            ;
            var bo6z_5 = function () {
                ndu20p(), mci['onLoaded'](mhy$l);
            },
                c$iuy = function () {
                ndu20p(), mci['event']('error', 'Load image failed');
            };
            mci['_type'] == 'nativeimage' ? (mhy$l = new ci$uy['window']['Image'](), mhy$l['crossOrigin'] = '', mhy$l['onload'] = bo6z_5, mhy$l['onerror'] = c$iuy, mhy$l['src'] = hc1m$y, mci['imgCache'][o7e_5] = mhy$l) : new h3kv['create'](hc1m$y, {
                'onload': bo6z_5,
                'onerror': c$iuy,
                'onCreate': function (ncu$1) {
                    mhy$l = ncu$1, mci['imgCache'][o7e_5] = ncu$1;
                }
            });
        }, ndu20i;
    }(),
        u0ni = function () {
        function h$cy1m() {}
        return d60(h$cy1m, 'laya.wx.mini.MiniInput'), h$cy1m['_createInputElement'] = function () {
            d920p['_initInput'](d920p['area'] = ci$uy['createElement']('textarea')), d920p['_initInput'](d920p['input'] = ci$uy['createElement']('input')), d920p['inputContainer'] = ci$uy['createElement']('div'), d920p['inputContainer']['style']['position'] = 'absolute', d920p['inputContainer']['style']['zIndex'] = 0x186a0, ci$uy['container']['appendChild'](d920p['inputContainer']), d920p['inputContainer']['setPos'] = function (w3rvtk, fo7_e5) {
                d920p['inputContainer']['style']['left'] = w3rvtk + 'px', d920p['inputContainer']['style']['top'] = fo7_e5 + 'px';
            }, pb69_z['stage']['on']('resize', null, h$cy1m['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (fea5o) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), trjxqk['_soundClass'] = xq8tg, trjxqk['_musicClass'] = xq8tg, window['_videoClass'] = d0n2p9;
        }, h$cy1m['_onStageResize'] = function () {
            var e_5o7f = pb69_z['stage']['_canvasTransform']['identity']();
            e_5o7f['scale'](ci$uy['width'] / y3h['canvas']['width'] / id02['getPixelRatio'](), ci$uy['height'] / y3h['canvas']['height'] / id02['getPixelRatio']());
        }, h$cy1m['wxinputFocus'] = function (ud02p) {
            var vxwrt = d920p['inputElement']['target'];
            if (vxwrt && !vxwrt['editable']) return;
            yh$3['window']['wx']['offKeyboardConfirm'](), yh$3['window']['wx']['offKeyboardInput'](), yh$3['window']['wx']['showKeyboard']({
                'defaultValue': vxwrt['text'],
                'maxLength': vxwrt['maxChars'],
                'multiple': vxwrt['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (f5_ob) {},
                'fail': function (m$yc1) {}
            }), yh$3['window']['wx']['onKeyboardConfirm'](function (nic1u) {
                var mlvw3h = nic1u ? nic1u['value'] : '';
                vxwrt['text'] = mlvw3h, vxwrt['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), yh$3['window']['wx']['onKeyboardInput'](function (n0ui2) {
                var nu2d0i = n0ui2 ? n0ui2['value'] : '';
                if (!vxwrt['multiline']) {
                    if (nu2d0i['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                vxwrt['text'] = nu2d0i, vxwrt['event']('input');
            });
        }, h$cy1m['inputEnter'] = function () {
            d920p['inputElement']['target']['focus'] = ![];
        }, h$cy1m['wxinputblur'] = function () {
            h$cy1m['hideKeyboard']();
        }, h$cy1m['hideKeyboard'] = function () {
            yh$3['window']['wx']['offKeyboardConfirm'](), yh$3['window']['wx']['offKeyboardInput'](), yh$3['window']['wx']['hideKeyboard']({
                'success': function (pudn02) {
                    console['log']('隐藏键盘');
                },
                'fail': function (xrtvkw) {
                    console['log']('隐藏键盘出错:' + (xrtvkw ? xrtvkw['errMsg'] : ''));
                }
            });
        }, h$cy1m;
    }(),
        a547e = function () {
        function h$mc() {}
        d60(h$mc, 'laya.wx.mini.MiniLoader');
        var kvxwtr = h$mc['prototype'];
        return kvxwtr['load'] = function (fo_5zb, vklwh3, jtkxr, rlvkw3, a7ofe) {
            jtkxr === void 0x0 && (jtkxr = !![]), a7ofe === void 0x0 && (a7ofe = ![]);
            var bzf_5 = this;
            bzf_5['_url'] = fo_5zb;
            if (fo_5zb['indexOf']('data:image') === 0x0) bzf_5['_type'] = vklwh3 = 'image';else bzf_5['_type'] = vklwh3 || (vklwh3 = bzf_5['getTypeFromUrl'](fo_5zb));
            bzf_5['_cache'] = jtkxr, bzf_5['_data'] = null;
            var tkwrv = 'ascii';
            if (fo_5zb['indexOf']('.fnt') != -0x1) tkwrv = 'utf8';else vklwh3 == 'arraybuffer' && (tkwrv = '');
            ;
            var lmh3y = wtkrx['getFileExtension'](fo_5zb);
            if (h$mc['_fileTypeArr']['indexOf'](lmh3y) != -0x1) yh$3['EnvConfig']['load']['call'](this, fo_5zb, vklwh3, jtkxr, rlvkw3, a7ofe);else {
                if (!rqktxw['getFileInfo'](fo_5zb)) {
                    if (fo_5zb['indexOf']('layaNativeDir/') != -0x1) {
                        if (yh$3['isZiYu']) {
                            var z5f_bo = rqktxw['ziyuFileData'][fo_5zb];
                            bzf_5['onLoaded'](z5f_bo);
                            return;
                        } else {
                            cosnole['log']('read read'), rqktxw['read'](fo_5zb, tkwrv, new r3vkl(h$mc, h$mc['onReadNativeCallBack'], [tkwrv, fo_5zb, vklwh3, jtkxr, rlvkw3, a7ofe, bzf_5]));
                            return;
                        }
                    }
                    if (zo_fb5['rootPath'] == '') var f7a45e = fo_5zb;else f7a45e = fo_5zb['split'](zo_fb5['rootPath'])[0x0];
                    fo_5zb['indexOf']('http://') != -0x1 || fo_5zb['indexOf']('https://') != -0x1 ? yh$3['EnvConfig']['load']['call'](bzf_5, fo_5zb, vklwh3, jtkxr, rlvkw3, a7ofe) : rqktxw['readFile'](f7a45e, tkwrv, new r3vkl(h$mc, h$mc['onReadNativeCallBack'], [tkwrv, fo_5zb, vklwh3, jtkxr, rlvkw3, a7ofe, bzf_5]), fo_5zb);
                } else yh$3['EnvConfig']['load']['call'](this, fo_5zb, vklwh3, jtkxr, rlvkw3, a7ofe);
            }
        }, kvxwtr['resMgrLoad'] = function (f57eao, m3ly$h, trvxw, b9_, h$cyml, i02nd, myhc) {
            trvxw === void 0x0 && (trvxw = 0x0), b9_ === void 0x0 && (b9_ = ![]), h$cyml === void 0x0 && (h$cyml = ![]), i02nd === void 0x0 && (i02nd = 0x0), myhc === void 0x0 && (myhc = 0x3), f57eao['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', f57eao), yh$3['EnvConfig']['resMgrLoad'](f57eao, (rx8, dp9n20, uic1) => {
                h$mc['prototype']['resMgrLoadCallBack'](rx8, dp9n20, uic1, m3ly$h);
            }, trvxw, b9_, h$cyml, i02nd, myhc);
        }, kvxwtr['resMgrLoadCallBack'] = function (ci1u, bof5z, gj8qtx, hw3k) {
            console['log']('buff:::', ci1u, gj8qtx, rqktxw['fileNativeDir'] + '///' + rqktxw['fileListName']), hw3k(ci1u, bof5z, gj8qtx);
        }, kvxwtr['clearRes'] = function (i1u$nc, gqsj8) {
            gqsj8 === void 0x0 && (gqsj8 = ![]);
            var un2i10 = this;
            un2i10['clearRes'](i1u$nc, gqsj8);
            var i10n = rqktxw['getFileInfo'](i1u$nc);
            if (i10n && (i1u$nc['indexOf']('http://') != -0x1 || i1u$nc['indexOf']('https://') != -0x1)) {
                var lcyhm$ = i10n['md5'],
                    trjx8 = rqktxw['getFileNativePath'](lcyhm$);
                rqktxw['remove'](trjx8);
            }
        }, h$mc['onReadNativeCallBack'] = function (pn9d2, d02pnu, i10u2, l$chmy, zo6_5, ktrjqx, tkqr, j8gsx, ktqwr) {
            l$chmy === void 0x0 && (l$chmy = !![]), ktrjqx === void 0x0 && (ktrjqx = ![]), j8gsx === void 0x0 && (j8gsx = 0x0);
            if (!j8gsx) {
                var _5efo;
                if (i10u2 == 'json' || i10u2 == 'atlas') _5efo = yh$3['getJson'](ktqwr['data']);else i10u2 == 'xml' ? _5efo = wtkrx['parseXMLFromString'](ktqwr['data']) : _5efo = ktqwr['data'];
                tkqr['onLoaded'](_5efo), !yh$3['isZiYu'] && yh$3['isPosMsgYu'] && i10u2 != 'arraybuffer' && wx['postMessage']({
                    'url': d02pnu,
                    'data': _5efo,
                    'isLoad': !![]
                });
            } else j8gsx == 0x1 && yh$3['EnvConfig']['load']['call'](tkqr, d02pnu, i10u2, l$chmy, zo6_5, ktrjqx);
        }, r8tjx(h$mc, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), h$mc;
    }(),
        rqktxw = function (vw3lh) {
        function hwlv3() {
            hwlv3['__super']['call'](this);
            ;
        }
        return d60(hwlv3, 'laya.wx.mini.MiniFileMgr', vw3lh), hwlv3['isLoadFile'] = function ($1icyu) {
            return hwlv3['_fileTypeArr']['indexOf']($1icyu) != -0x1 ? !![] : ![];
        }, hwlv3['getFileInfo'] = function (l$hm3) {
            var oz5_f = l$hm3['split']('?')[0x0],
                ktxj = hwlv3['filesListObj'][oz5_f];
            if (ktxj == null) return null;else return ktxj;
            return null;
        }, hwlv3['onFileUpdate'] = function (bz_6p9, uind20) {
            var mlv3 = bz_6p9['split']('/'),
                rtw3v = mlv3[mlv3['length'] - 0x1],
                $mh = hwlv3['getFileInfo'](uind20);
            if ($mh == null) hwlv3['onSaveFile'](uind20, rtw3v);else {
                if ($mh['readyUrl'] != uind20) hwlv3['remove'](rtw3v, uind20);
            }
        }, hwlv3['exits'] = function (xwkrv, vrwtxk) {
            var qgt = hwlv3['getFileNativePath'](xwkrv);
            hwlv3['fs']['getFileInfo']({
                'filePath': qgt,
                'success': function (ychml) {
                    vrwtxk != null && vrwtxk['runWith']([0x0, ychml]);
                },
                'fail': function (m1cyi) {
                    vrwtxk != null && vrwtxk['runWith']([0x1, m1cyi]);
                }
            });
        }, hwlv3['read'] = function (rxjtk, v3my, np29d, in20u) {
            v3my === void 0x0 && (v3my = 'ascill'), in20u === void 0x0 && (in20u = '');
            var c1u$in;
            in20u != '' ? c1u$in = hwlv3['getFileNativePath'](rxjtk) : c1u$in = rxjtk, hwlv3['fs']['readFile']({
                'filePath': c1u$in,
                'encoding': v3my,
                'success': function (myl$) {
                    np29d != null && np29d['runWith']([0x0, myl$]);
                },
                'fail': function (v3lkw) {
                    if (v3lkw && in20u != '') hwlv3['down'](in20u, v3my, np29d, in20u);else np29d != null && np29d['runWith']([0x1]);
                }
            });
        }, hwlv3['readNativeFile'] = function (e5oa7f, $cmh) {
            hwlv3['fs']['readFile']({
                'filePath': e5oa7f,
                'encoding': '',
                'success': function (i$u1cy) {
                    $cmh != null && $cmh['runWith']([0x0]);
                },
                'fail': function (yl$3hm) {
                    $cmh != null && $cmh['runWith']([0x1]);
                }
            });
        }, hwlv3['down'] = function (zfo57, f_z75, lhy3mv, wtrv3k) {
            f_z75 === void 0x0 && (f_z75 = 'ascill'), wtrv3k === void 0x0 && (wtrv3k = '');
            var o_5fbz = hwlv3['getFileNativePath'](wtrv3k),
                qjg8t = hwlv3['wxdown']({
                'url': zfo57,
                'filePath': o_5fbz,
                'success': function (o5bz6_) {
                    if (o5bz6_['statusCode'] === 0xc8) hwlv3['readFile'](o5bz6_['filePath'], f_z75, lhy3mv, wtrv3k);
                },
                'fail': function (vlh3m) {
                    lhy3mv != null && lhy3mv['runWith']([0x1, vlh3m]);
                }
            });
            qjg8t['onProgressUpdate'](function (oz69_b) {
                lhy3mv != null && lhy3mv['runWith']([0x2, oz69_b['progress']]);
            });
        }, hwlv3['readFile'] = function (m3wv, jtgx8q, xqjg8t, _ozb56) {
            jtgx8q === void 0x0 && (jtgx8q = 'ascill'), _ozb56 === void 0x0 && (_ozb56 = ''), hwlv3['fs']['readFile']({
                'filePath': m3wv,
                'encoding': jtgx8q,
                'success': function (zb6p9d) {
                    if (m3wv['indexOf']('http://') != -0x1 || m3wv['indexOf']('https://') != -0x1) hwlv3['onFileUpdate'](m3wv, _ozb56);
                    xqjg8t != null && xqjg8t['runWith']([0x0, zb6p9d]);
                },
                'fail': function (tkwr3v) {
                    if (tkwr3v) xqjg8t != null && xqjg8t['runWith']([0x1, tkwr3v]);
                }
            });
        }, hwlv3['downImg'] = function (sjgx, p0d269, z_b6o9) {
            z_b6o9 === void 0x0 && (z_b6o9 = '');
            var tgx = hwlv3['wxdown']({
                'url': sjgx,
                'success': function (o5z6_b) {
                    o5z6_b['statusCode'] === 0xc8 && hwlv3['copyFile'](o5z6_b['tempFilePath'], z_b6o9, p0d269);
                },
                'fail': function (lv3h) {
                    p0d269 != null && p0d269['runWith']([0x1, lv3h]);
                }
            });
        }, hwlv3['copyFile'] = function (kxqt, q8tjgx, u1iy) {
            var wtqkrx = kxqt['split']('/'),
                qgjxs = wtqkrx[wtqkrx['length'] - 0x1],
                vylm3h = q8tjgx['split']('?')[0x0],
                xkwrtv = hwlv3['getFileInfo'](q8tjgx),
                f_bz5o = hwlv3['getFileNativePath'](qgjxs);
            hwlv3['fs']['copyFile']({
                'srcPath': kxqt,
                'destPath': f_bz5o,
                'success': function (cyu$i) {
                    if (!xkwrtv) hwlv3['onSaveFile'](q8tjgx, qgjxs), u1iy != null && u1iy['runWith']([0x0]);else {
                        if (xkwrtv['readyUrl'] != q8tjgx) hwlv3['remove'](qgjxs, q8tjgx, u1iy);
                    }
                },
                'fail': function ($1ym) {
                    u1iy != null && u1iy['runWith']([0x1, $1ym]);
                }
            });
        }, hwlv3['getFileNativePath'] = function (o5z7) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + o5z7;
        }, hwlv3['remove'] = function ($yc1hm, o75fea, h3ylvm) {
            o75fea === void 0x0 && (o75fea = '');
            var l3$hy = hwlv3['getFileInfo'](o75fea),
                d920 = hwlv3['getFileNativePath'](l3$hy['md5']);
            pb69_z['loader']['clearRes'](l3$hy['readyUrl']), hwlv3['fs']['unlink']({
                'filePath': d920,
                'success': function (z9pd) {
                    if (o75fea != '') hwlv3['onSaveFile'](o75fea, $yc1hm);
                    h3ylvm != null && h3ylvm['runWith']([0x0]);
                },
                'fail': function (xtqjr) {}
            });
        }, hwlv3['onSaveFile'] = function (kwqrt, l3wvhm) {
            var vlwh = kwqrt['split']('?')[0x0];
            hwlv3['filesListObj'][vlwh] = {
                'md5': l3wvhm,
                'readyUrl': kwqrt
            }, hwlv3['fs']['writeFile']({
                'filePath': hwlv3['fileNativeDir'] + '/' + hwlv3['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](hwlv3['filesListObj']),
                'success': function (wrkt) {
                    console['log']('写入测试测试成功：', wrkt);
                },
                'fail': function (tkxwqr) {
                    console['log']('写入测试测试失败：', tkxwqr);
                }
            });
        }, hwlv3['existDir'] = function (_7fe5o, vk3wlr) {
            hwlv3['fs']['mkdir']({
                'dirPath': _7fe5o,
                'success': function (pn920) {
                    vk3wlr != null && vk3wlr['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (pu20) {
                    if (pu20['errMsg']['indexOf']('file already exists') != -0x1) hwlv3['readSync'](hwlv3['fileListName'], 'utf8', vk3wlr);else vk3wlr != null && vk3wlr['runWith']([0x1, pu20]);
                }
            });
        }, hwlv3['readSync'] = function (vxwt, d9p206, y3m$lh, wrv3t) {
            d9p206 === void 0x0 && (d9p206 = 'ascill'), wrv3t === void 0x0 && (wrv3t = '');
            var v3klwh = hwlv3['getFileNativePath'](vxwt),
                $yh1cm;
            try {
                $yh1cm = hwlv3['fs']['readFileSync'](v3klwh), y3m$lh != null && y3m$lh['runWith']([0x0, { 'data': $yh1cm }]);
            } catch (h3lmyv) {
                y3m$lh != null && y3m$lh['runWith']([0x1]);
            }
        }, hwlv3['readCache'] = function () {}, hwlv3['writeCache'] = function (m$cyl) {
            var xj8qgt = readyUrl['split']('?')[0x0];
            hwlv3['filesListObj'][xj8qgt] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, hwlv3['fs']['writeFile']({
                'filePath': hwlv3['fileNativeDir'] + '/' + hwlv3['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](hwlv3['filesListObj']),
                'success': function (rwktxq) {},
                'fail': function (cu$i) {}
            });
        }, hwlv3['setNativeFileDir'] = function (d0u2i) {
            hwlv3['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + d0u2i;
        }, hwlv3['filesListObj'] = {}, hwlv3['fileNativeDir'] = null, hwlv3['fileListName'] = 'layaairfiles.txt', hwlv3['ziyuFileData'] = {}, r8tjx(hwlv3, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), hwlv3;
    }(d6bz),
        xq8tg = function (gq8tx) {
        function wkvlr() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], wkvlr['__super']['call'](this), this['_sound'] = wkvlr['_createSound'](), this['_chanell'] = new hklvw3(this['_sound']);
        }
        d60(wkvlr, 'laya.wx.mini.MiniSound', gq8tx);
        var lm3vwh = wkvlr['prototype'];
        return lm3vwh['load'] = function (mchl$y) {
            var jxqs = this;
            mchl$y = zo_fb5['formatURL'](mchl$y), this['url'] = mchl$y;
            if (wkvlr['_audioCache'][mchl$y]) {
                this['event']('complete');
                return;
            }
            function cuyi$() {
                if (wkvlr['_null'] != undefined) jxqs['_sound']['onCanplay'](wkvlr['_null']), jxqs['_sound']['onError'](wkvlr['_null']);else try {
                    jxqs['_sound']['onCanplay'](null), jxqs['_sound']['onError'](null), wkvlr['_null'] = null;
                } catch (bo5_zf) {
                    console['warn']('[wxmini] _clearSound:' + bo5_zf), jxqs['_sound']['onCanplay'](wtkv3r), jxqs['_sound']['onError'](wtkv3r), wkvlr['_null'] = wtkv3r;
                }
            }
            function xkrq() {
                pnd209['loaded'] = !![], pnd209['event']('complete'), wkvlr['_audioCache'][pnd209['url']] = pnd209;
            }
            function fbo_(cyu1$) {
                console['error']('errCode=' + cyu1$['errCode'] + '  errMsg=' + cyu1$['errMsg']), pnd209['event']('error');
            }
            function wtkv3r() {}
            this['_sound']['onCanplay'](xkrq), this['_sound']['onError'](fbo_), this['_sound']['src'] = mchl$y;
            var pnd209 = this;
        }, lm3vwh['play'] = function (yl, wvrtxk) {
            yl === void 0x0 && (yl = 0x0), wvrtxk === void 0x0 && (wvrtxk = 0x0);
            var xrqkwt, _ofz7;
            if (this['url'] == trjxqk['_tMusic']) {
                if (!wkvlr['_musicAudio']) wkvlr['_musicAudio'] = this['_sound'];
                xrqkwt = wkvlr['_musicAudio'], _ofz7 = this['_chanell'];
            } else xrqkwt = this['_sound'], _ofz7 = this['_chanell'];
            return xrqkwt['src'] = this['url'], xrqkwt['startTime'] = 0x0, _ofz7['isStopped'] && (_ofz7['url'] = this['url'], _ofz7['loops'] = wvrtxk, _ofz7['startTime'] = yl, _ofz7['play'](), trjxqk['addChannel'](_ofz7)), _ofz7;
        }, lm3vwh['dispose'] = function () {
            var uc1y$ = wkvlr['_audioCache'][this['url']];
            uc1y$ && (uc1y$['src'] = '', delete wkvlr['_audioCache'][this['url']]);
        }, wvkr3(0x0, lm3vwh, 'duration', function () {
            return this['_sound']['duration'];
        }), wkvlr['_createSound'] = function () {
            wkvlr['_id']++;
            var vwlh = yh$3['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return vwlh;
        }, wkvlr['_musicAudio'] = null, wkvlr['_id'] = 0x0, wkvlr['_audioCache'] = {}, wkvlr['_null'] = undefined, wkvlr;
    }(d6bz),
        hklvw3 = function (n1uci0) {
        function vlkwh3(_z6b) {
            this['_audio'] = null, this['_onEnd'] = null, vlkwh3['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = _z6b, this['_onEnd'] = wtkrx['bind'](this['__onEnd'], this), _z6b['onEnded'](this['_onEnd']);
        }
        d60(vlkwh3, 'laya.wx.mini.MiniSoundChannel', n1uci0);
        var w3lmvh = vlkwh3['prototype'];
        return w3lmvh['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (pb69_z['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, w3lmvh['__onNull'] = function () {}, w3lmvh['play'] = function () {
            this['isStopped'] = ![], trjxqk['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, w3lmvh['stop'] = function () {
            this['isStopped'] = !![], trjxqk['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, w3lmvh['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, w3lmvh['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], trjxqk['addChannel'](this), this['_audio']['play']();
        }, wvkr3(0x0, w3lmvh, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), wvkr3(0x0, w3lmvh, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), wvkr3(0x0, w3lmvh, 'volume', function () {
            return 0x1;
        }, function (hvkwl) {}), vlkwh3['_null'] = undefined, vlkwh3;
    }(zb9_o),
        d0n2p9 = function () {
        function bo_56() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = yh$3['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        d60(bo_56, 'laya.wx.mini.MiniVideo');
        var m3$lyh = bo_56['prototype'];
        return m3$lyh['on'] = function (xjrkt, f_7e5, hm1$) {
            if (xjrkt == 'loadedmetadata') this['onPlayFunc'] = hm1$['bind'](f_7e5), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else xjrkt == 'ended' && (this['onEndedFunC'] = hm1$['bind'](f_7e5), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, m3$lyh['onTimeUpdateFunc'] = function (yh1$mc) {
            this['position'] = yh1$mc['position'], this['_duration'] = yh1$mc['duration'];
        }, m3$lyh['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, m3$lyh['onended'] = function (d9p62b, w3lrvk) {
            this['onEndedFunC'] = w3lrvk['bind'](d9p62b), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, m3$lyh['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, m3$lyh['off'] = function (tqkwrx, fbzo, whm) {
            if (tqkwrx == 'loadedmetadata') this['onPlayFunc'] = whm['bind'](fbzo), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else tqkwrx == 'ended' && (this['onEndedFunC'] = whm['bind'](fbzo), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, m3$lyh['load'] = function (krjxqt) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = krjxqt;
        }, m3$lyh['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, m3$lyh['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, m3$lyh['size'] = function (uci0, miyc$1) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = uci0, this['videoElement']['height'] = miyc$1;
        }, m3$lyh['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, m3$lyh['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, wvkr3(0x0, m3$lyh, 'duration', function () {
            return this['_duration'];
        }), wvkr3(0x0, m3$lyh, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (p920d) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = p920d;
        }), wvkr3(0x0, m3$lyh, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), wvkr3(0x0, m3$lyh, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), wvkr3(0x0, m3$lyh, 'ended', function () {
            return this['videoend'];
        }), wvkr3(0x0, m3$lyh, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (in1uc$) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = in1uc$;
        }), wvkr3(0x0, m3$lyh, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (trx8qj) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = trx8qj;
        }), wvkr3(0x0, m3$lyh, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (x8gj) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = x8gj;
        }), wvkr3(0x0, m3$lyh, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), wvkr3(0x0, m3$lyh, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (un0ci1) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = un0ci1;
        }), wvkr3(0x0, m3$lyh, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (vh3yl) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = vh3yl;
        }), wvkr3(0x0, m3$lyh, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), wvkr3(0x0, m3$lyh, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (un20id) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = un20id;
        }), wvkr3(0x0, m3$lyh, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (dnup0) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = dnup0;
        }), wvkr3(0x0, m3$lyh, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (cy1mh$) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = cy1mh$;
        }), bo_56;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var obzf in Laya) {
        var c$iun1 = Laya[obzf];
        c$iun1 && c$iun1['__isclass'] && (exports[obzf] = c$iun1);
    }
});