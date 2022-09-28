var f = wx.$B;
(function (window, document, rj0ky) {
    var h6s$1 = rj0ky['un'],
        qkd9j = rj0ky['uns'],
        l8txg = rj0ky['static'],
        nouy = rj0ky['class'],
        g8at = rj0ky['getset'],
        rjfqd = rj0ky['__newvec'],
        r9y0nj = laya['utils']['Browser'],
        we2bmp = laya['events']['Event'],
        ig18xa = laya['events']['EventDispatcher'],
        z27p3b = laya['resource']['HTMLImage'],
        kj9rq = laya['utils']['Handler'],
        jk = laya['display']['Input'],
        tnl5u = laya['net']['Loader'],
        jqk9r = laya['maths']['Matrix'],
        bsm2e = laya['renders']['Render'],
        wms6$v = laya['utils']['RunDriver'],
        tulo5n = laya['media']['Sound'],
        sbem2w = laya['media']['SoundChannel'],
        jk9qdr = laya['media']['SoundManager'],
        i1ag8h = laya['display']['Stage'],
        z7_p3 = laya['net']['URL'],
        zb = laya['utils']['Utils'],
        jy0kr9 = function () {
        function $ihg61() {}
        return nouy($ihg61, 'laya.wx.mini.MiniAdpter'), $ihg61['getJson'] = function (l8xgai) {
            return JSON['parse'](l8xgai);
        }, $ihg61['init'] = function (whvs$, kr9jqd) {
            whvs$ === void 0x0 && (whvs$ = ![]), kr9jqd === void 0x0 && (kr9jqd = ![]);
            if ($ihg61['_inited']) return;
            $ihg61['window'] = window;
            if ($ihg61['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            $ihg61['_inited'] = !![], $ihg61['isZiYu'] = kr9jqd, $ihg61['isPosMsgYu'] = whvs$, $ihg61['EnvConfig'] = {}, !$ihg61['isZiYu'] && (lu8oxt['setNativeFileDir']('/layaairGame'), lu8oxt['existDir'](lu8oxt['fileNativeDir'], kj9rq['create']($ihg61, $ihg61['onMkdirCallBack']))), $ihg61['window']['focus'] = function () {}, rj0ky['getUrlPath'] = function () {}, $ihg61['window']['logtime'] = function (hs$w6) {}, $ihg61['window']['alertTimeLog'] = function (be23p) {}, $ihg61['window']['resetShareInfo'] = function () {}, $ihg61['window']['CanvasRenderingContext2D'] = function () {}, $ihg61['window']['CanvasRenderingContext2D']['prototype'] = $ihg61['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], $ihg61['window']['document']['body']['appendChild'] = function () {}, $ihg61['EnvConfig']['pixelRatioInt'] = 0x0, wms6$v['getPixelRatio'] = $ihg61['pixelRatio'], $ihg61['_preCreateElement'] = r9y0nj['createElement'], r9y0nj['createElement'] = $ihg61['createElement'], wms6$v['createShaderCondition'] = $ihg61['createShaderCondition'], zb['parseXMLFromString'] = $ihg61['parseXMLFromString'], jk['_createInputElement'] = l8xat['_createInputElement'], $ihg61['EnvConfig']['load'] = tnl5u['prototype']['load'], tnl5u['prototype']['load'] = nt5oul['prototype']['load'], $ihg61['isZiYu'] && whvs$ && wx['onMessage'](function (agi1h) {
                agi1h['isLoad'] && (lu8oxt['ziyuFileData'][agi1h['url']] = agi1h['data']);
            });
        }, $ihg61['onMkdirCallBack'] = function (rjky09, ws2bme) {
            if (!rjky09) lu8oxt['filesListObj'] = JSON['parse'](ws2bme['data']);
        }, $ihg61['pixelRatio'] = function () {
            if (!$ihg61['EnvConfig']['pixelRatioInt']) try {
                var tou5y = wx['getSystemInfoSync']();
                return $ihg61['EnvConfig']['pixelRatioInt'] = tou5y['pixelRatio'], tou5y = tou5y, tou5y['pixelRatio'];
            } catch (y0oun5) {}
            return $ihg61['EnvConfig']['pixelRatioInt'];
        }, $ihg61['createElement'] = function (r95) {
            if (r95 == 'canvas') {
                var yu0n;
                return $ihg61['idx'] == 0x1 ? $ihg61['isZiYu'] ? (yu0n = sharedCanvas, yu0n['style'] = {}) : yu0n = window['canvas'] : yu0n = window['wx']['createCanvas'](), $ihg61['idx']++, yu0n;
            } else {
                if (r95 == 'textarea' || r95 == 'input') return $ihg61['onCreateInput'](r95);else {
                    if (r95 == 'div') {
                        var olt5u = $ihg61['_preCreateElement'](r95);
                        return olt5u['contains'] = function (tax8g) {
                            return null;
                        }, olt5u['removeChild'] = function (jrkd0) {}, olt5u;
                    } else return $ihg61['_preCreateElement'](r95);
                }
            }
        }, $ihg61['onCreateInput'] = function (wm6$) {
            var j9n = $ihg61['_preCreateElement'](wm6$);
            return j9n['focus'] = l8xat['wxinputFocus'], j9n['blur'] = l8xat['wxinputblur'], j9n['style'] = {}, j9n['value'] = 0x0, j9n['parentElement'] = {}, j9n['placeholder'] = {}, j9n['type'] = {}, j9n['setColor'] = function (i8gax) {}, j9n['setType'] = function (mvewb) {}, j9n['setFontFace'] = function (y5uton) {}, j9n['addEventListener'] = function (lxgia8) {}, j9n['contains'] = function ($61sv) {
                return null;
            }, j9n['removeChild'] = function (kjdr0) {}, j9n;
        }, $ihg61['createShaderCondition'] = function (t8xa) {
            var q9rjdk = this,
                lixg = function () {
                var wes$ = t8xa;
                return q9rjdk[t8xa['replace']('this.', '')];
            };
            return lixg;
        }, $ihg61['EnvConfig'] = null, $ihg61['window'] = null, $ihg61['_preCreateElement'] = null, $ihg61['_inited'] = ![], $ihg61['wxRequest'] = null, $ihg61['systemInfo'] = null, $ihg61['version'] = '0.0.1', $ihg61['isZiYu'] = ![], $ihg61['isPosMsgYu'] = ![], $ihg61['parseXMLFromString'] = function (rk9jqd) {
            var ial8gx, z37bp;
            rk9jqd = rk9jqd['replace'](/>\s+</g, '><');
            try {
                ial8gx = new window['Parser']['DOMParser']()['parseFromString'](rk9jqd, 'text/xml');
            } catch ($sv6hw) {
                throw '需要引入xml解析库文件';
            }
            return ial8gx;
        }, $ihg61['idx'] = 0x1, $ihg61;
    }(),
        rj0kd = function () {
        function v6h$i() {}
        nouy(v6h$i, 'laya.wx.mini.MiniImage');
        var $hs16v = v6h$i['prototype'];
        return $hs16v['_loadImage'] = function (krdj9) {
            var r509ny = this,
                dfjqrk = ![];
            krdj9['indexOf']('layaNativeDir/') == -0x1 && (dfjqrk = !![], krdj9 = z7_p3['formatURL'](krdj9));
            if (!lu8oxt['getFileInfo'](krdj9)) {
                if (krdj9['indexOf']('http://') != -0x1 || krdj9['indexOf']('https://') != -0x1) lu8oxt['downImg'](krdj9, new kj9rq(v6h$i, v6h$i['onDownImgCallBack'], [krdj9, r509ny]), krdj9);else v6h$i['onCreateImage'](krdj9, r509ny, !![]);
            } else v6h$i['onCreateImage'](krdj9, r509ny, !dfjqrk);
        }, v6h$i['onDownImgCallBack'] = function ($wvhs, y5ontu, v6w$m) {
            if (!v6w$m) v6h$i['onCreateImage']($wvhs, y5ontu);else y5ontu['onError'](null);
        }, v6h$i['onCreateImage'] = function (r5ny09, mvesw$, iga81x) {
            iga81x === void 0x0 && (iga81x = ![]);
            var mp32b;
            if (!iga81x) {
                var lt5o = lu8oxt['getFileInfo'](r5ny09),
                    kjqfr = lt5o['md5'];
                mp32b = lu8oxt['getFileNativePath'](kjqfr);
            } else mp32b = r5ny09;
            if (mvesw$['imgCache'] == null) mvesw$['imgCache'] = {};
            var kqrf;
            function tluno5() {
                kqrf['onload'] = null, kqrf['onerror'] = null, delete mvesw$['imgCache'][r5ny09];
            }
            ;
            var z34_7 = function () {
                tluno5(), mvesw$['onLoaded'](kqrf);
            },
                z3_p4 = function () {
                tluno5(), mvesw$['event']('error', 'Load image failed');
            };
            mvesw$['_type'] == 'nativeimage' ? (kqrf = new r9y0nj['window']['Image'](), kqrf['crossOrigin'] = '', kqrf['onload'] = z34_7, kqrf['onerror'] = z3_p4, kqrf['src'] = mp32b, mvesw$['imgCache'][r5ny09] = kqrf) : new z27p3b['create'](mp32b, {
                'onload': z34_7,
                'onerror': z3_p4,
                'onCreate': function (ga16hi) {
                    kqrf = ga16hi, mvesw$['imgCache'][r5ny09] = ga16hi;
                }
            });
        }, v6h$i;
    }(),
        l8xat = function () {
        function p3z2_() {}
        return nouy(p3z2_, 'laya.wx.mini.MiniInput'), p3z2_['_createInputElement'] = function () {
            jk['_initInput'](jk['area'] = r9y0nj['createElement']('textarea')), jk['_initInput'](jk['input'] = r9y0nj['createElement']('input')), jk['inputContainer'] = r9y0nj['createElement']('div'), jk['inputContainer']['style']['position'] = 'absolute', jk['inputContainer']['style']['zIndex'] = 0x186a0, r9y0nj['container']['appendChild'](jk['inputContainer']), jk['inputContainer']['setPos'] = function (wbmse, pe3bm) {
                jk['inputContainer']['style']['left'] = wbmse + 'px', jk['inputContainer']['style']['top'] = pe3bm + 'px';
            }, rj0ky['stage']['on']('resize', null, p3z2_['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (bwe2mp) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), jk9qdr['_soundClass'] = k9jd, jk9qdr['_musicClass'] = k9jd, window['_videoClass'] = i1x8;
        }, p3z2_['_onStageResize'] = function () {
            var tu = rj0ky['stage']['_canvasTransform']['identity']();
            tu['scale'](r9y0nj['width'] / bsm2e['canvas']['width'] / wms6$v['getPixelRatio'](), r9y0nj['height'] / bsm2e['canvas']['height'] / wms6$v['getPixelRatio']());
        }, p3z2_['wxinputFocus'] = function (mv$wse) {
            var _p743z = jk['inputElement']['target'];
            if (_p743z && !_p743z['editable']) return;
            jy0kr9['window']['wx']['offKeyboardConfirm'](), jy0kr9['window']['wx']['offKeyboardInput'](), jy0kr9['window']['wx']['showKeyboard']({
                'defaultValue': _p743z['text'],
                'maxLength': _p743z['maxChars'],
                'multiple': _p743z['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function ($6vswh) {},
                'fail': function (h1iv$) {}
            }), jy0kr9['window']['wx']['onKeyboardConfirm'](function (l5otxu) {
                var u095ny = l5otxu ? l5otxu['value'] : '';
                _p743z['text'] = u095ny, _p743z['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), jy0kr9['window']['wx']['onKeyboardInput'](function (ut) {
                var frdjkq = ut ? ut['value'] : '';
                if (!_p743z['multiline']) {
                    if (frdjkq['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                _p743z['text'] = frdjkq, _p743z['event']('input');
            });
        }, p3z2_['inputEnter'] = function () {
            jk['inputElement']['target']['focus'] = ![];
        }, p3z2_['wxinputblur'] = function () {
            p3z2_['hideKeyboard']();
        }, p3z2_['hideKeyboard'] = function () {
            jy0kr9['window']['wx']['offKeyboardConfirm'](), jy0kr9['window']['wx']['offKeyboardInput'](), jy0kr9['window']['wx']['hideKeyboard']({
                'success': function ($ev) {
                    console['log']('隐藏键盘');
                },
                'fail': function (tuo5x) {
                    console['log']('隐藏键盘出错:' + (tuo5x ? tuo5x['errMsg'] : ''));
                }
            });
        }, p3z2_;
    }(),
        nt5oul = function () {
        function evmbw() {}
        nouy(evmbw, 'laya.wx.mini.MiniLoader');
        var txul5o = evmbw['prototype'];
        return txul5o['load'] = function (uoyt, otuln, drfjkq, iga16, g8a1ix) {
            drfjkq === void 0x0 && (drfjkq = !![]), g8a1ix === void 0x0 && (g8a1ix = ![]);
            var lt8x = this;
            lt8x['_url'] = uoyt;
            if (uoyt['indexOf']('data:image') === 0x0) lt8x['_type'] = otuln = 'image';else lt8x['_type'] = otuln || (otuln = lt8x['getTypeFromUrl'](uoyt));
            lt8x['_cache'] = drfjkq, lt8x['_data'] = null;
            var p73_ = 'ascii';
            if (uoyt['indexOf']('.fnt') != -0x1) p73_ = 'utf8';else otuln == 'arraybuffer' && (p73_ = '');
            ;
            var dkqfj = zb['getFileExtension'](uoyt);
            if (evmbw['_fileTypeArr']['indexOf'](dkqfj) != -0x1) jy0kr9['EnvConfig']['load']['call'](this, uoyt, otuln, drfjkq, iga16, g8a1ix);else {
                if (!lu8oxt['getFileInfo'](uoyt)) {
                    if (uoyt['indexOf']('layaNativeDir/') != -0x1) {
                        if (jy0kr9['isZiYu']) {
                            var k90rd = lu8oxt['ziyuFileData'][uoyt];
                            lt8x['onLoaded'](k90rd);
                            return;
                        } else {
                            cosnole['log']('read read'), lu8oxt['read'](uoyt, p73_, new kj9rq(evmbw, evmbw['onReadNativeCallBack'], [p73_, uoyt, otuln, drfjkq, iga16, g8a1ix, lt8x]));
                            return;
                        }
                    }
                    if (z7_p3['rootPath'] == '') var $mswv6 = uoyt;else $mswv6 = uoyt['split'](z7_p3['rootPath'])[0x0];
                    uoyt['indexOf']('http://') != -0x1 || uoyt['indexOf']('https://') != -0x1 ? jy0kr9['EnvConfig']['load']['call'](lt8x, uoyt, otuln, drfjkq, iga16, g8a1ix) : lu8oxt['readFile']($mswv6, p73_, new kj9rq(evmbw, evmbw['onReadNativeCallBack'], [p73_, uoyt, otuln, drfjkq, iga16, g8a1ix, lt8x]), uoyt);
                } else jy0kr9['EnvConfig']['load']['call'](this, uoyt, otuln, drfjkq, iga16, g8a1ix);
            }
        }, txul5o['resMgrLoad'] = function (xai18, ryn, svem$w, gx8tla, we2mpb, ha18gi, swvmeb) {
            svem$w === void 0x0 && (svem$w = 0x0), gx8tla === void 0x0 && (gx8tla = ![]), we2mpb === void 0x0 && (we2mpb = ![]), ha18gi === void 0x0 && (ha18gi = 0x0), swvmeb === void 0x0 && (swvmeb = 0x3), xai18['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', xai18), jy0kr9['EnvConfig']['resMgrLoad'](xai18, (g8xai, sbvmw, i1g6ha) => {
                evmbw['prototype']['resMgrLoadCallBack'](g8xai, sbvmw, i1g6ha, ryn);
            }, svem$w, gx8tla, we2mpb, ha18gi, swvmeb);
        }, txul5o['resMgrLoadCallBack'] = function (axlo8t, n5olt, r9kjq, hai) {
            console['log']('buff:::', axlo8t, r9kjq, lu8oxt['fileNativeDir'] + '///' + lu8oxt['fileListName']), hai(axlo8t, n5olt, r9kjq);
        }, txul5o['clearRes'] = function (utyo5, p3b2e) {
            p3b2e === void 0x0 && (p3b2e = ![]);
            var jrfqk = this;
            jrfqk['clearRes'](utyo5, p3b2e);
            var n95u0y = lu8oxt['getFileInfo'](utyo5);
            if (n95u0y && (utyo5['indexOf']('http://') != -0x1 || utyo5['indexOf']('https://') != -0x1)) {
                var h$61vi = n95u0y['md5'],
                    ltu5o = lu8oxt['getFileNativePath'](h$61vi);
                lu8oxt['remove'](ltu5o);
            }
        }, evmbw['onReadNativeCallBack'] = function (_p437, ryn950, a1xgi, $vs6w, s$v, oatl, _74pz, m32peb, g$1h6) {
            $vs6w === void 0x0 && ($vs6w = !![]), oatl === void 0x0 && (oatl = ![]), m32peb === void 0x0 && (m32peb = 0x0);
            if (!m32peb) {
                var jr9dk;
                if (a1xgi == 'json' || a1xgi == 'atlas') jr9dk = jy0kr9['getJson'](g$1h6['data']);else a1xgi == 'xml' ? jr9dk = zb['parseXMLFromString'](g$1h6['data']) : jr9dk = g$1h6['data'];
                _74pz['onLoaded'](jr9dk), !jy0kr9['isZiYu'] && jy0kr9['isPosMsgYu'] && a1xgi != 'arraybuffer' && wx['postMessage']({
                    'url': ryn950,
                    'data': jr9dk,
                    'isLoad': !![]
                });
            } else m32peb == 0x1 && jy0kr9['EnvConfig']['load']['call'](_74pz, ryn950, a1xgi, $vs6w, s$v, oatl);
        }, l8txg(evmbw, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), evmbw;
    }(),
        lu8oxt = function ($6vm) {
        function wvs6() {
            wvs6['__super']['call'](this);
            ;
        }
        return nouy(wvs6, 'laya.wx.mini.MiniFileMgr', $6vm), wvs6['isLoadFile'] = function (mwvesb) {
            return wvs6['_fileTypeArr']['indexOf'](mwvesb) != -0x1 ? !![] : ![];
        }, wvs6['getFileInfo'] = function (txo8al) {
            var me$vws = txo8al['split']('?')[0x0],
                sw$mve = wvs6['filesListObj'][me$vws];
            if (sw$mve == null) return null;else return sw$mve;
            return null;
        }, wvs6['onFileUpdate'] = function (rjkqd9, nut5lo) {
            var wv$me = rjkqd9['split']('/'),
                smewb2 = wv$me[wv$me['length'] - 0x1],
                fjqdrk = wvs6['getFileInfo'](nut5lo);
            if (fjqdrk == null) wvs6['onSaveFile'](nut5lo, smewb2);else {
                if (fjqdrk['readyUrl'] != nut5lo) wvs6['remove'](smewb2, nut5lo);
            }
        }, wvs6['exits'] = function (i1$h6v, i1x) {
            var d9rqk = wvs6['getFileNativePath'](i1$h6v);
            wvs6['fs']['getFileInfo']({
                'filePath': d9rqk,
                'success': function (drfjk) {
                    i1x != null && i1x['runWith']([0x0, drfjk]);
                },
                'fail': function (p732bz) {
                    i1x != null && i1x['runWith']([0x1, p732bz]);
                }
            });
        }, wvs6['read'] = function (a8gtxl, p7z23_, g8tlx, $wevsm) {
            p7z23_ === void 0x0 && (p7z23_ = 'ascill'), $wevsm === void 0x0 && ($wevsm = '');
            var w$shv6;
            $wevsm != '' ? w$shv6 = wvs6['getFileNativePath'](a8gtxl) : w$shv6 = a8gtxl, wvs6['fs']['readFile']({
                'filePath': w$shv6,
                'encoding': p7z23_,
                'success': function (dfrkqj) {
                    g8tlx != null && g8tlx['runWith']([0x0, dfrkqj]);
                },
                'fail': function (al8ix) {
                    if (al8ix && $wevsm != '') wvs6['down']($wevsm, p7z23_, g8tlx, $wevsm);else g8tlx != null && g8tlx['runWith']([0x1]);
                }
            });
        }, wvs6['readNativeFile'] = function (rn05, fjkqrd) {
            wvs6['fs']['readFile']({
                'filePath': rn05,
                'encoding': '',
                'success': function (wh$vs) {
                    fjkqrd != null && fjkqrd['runWith']([0x0]);
                },
                'fail': function (ot5lux) {
                    fjkqrd != null && fjkqrd['runWith']([0x1]);
                }
            });
        }, wvs6['down'] = function (y9un0, w$svh6, hv61s$, uo8xt) {
            w$svh6 === void 0x0 && (w$svh6 = 'ascill'), uo8xt === void 0x0 && (uo8xt = '');
            var ao8 = wvs6['getFileNativePath'](uo8xt),
                ag8h1 = wvs6['wxdown']({
                'url': y9un0,
                'filePath': ao8,
                'success': function (bsewmv) {
                    if (bsewmv['statusCode'] === 0xc8) wvs6['readFile'](bsewmv['filePath'], w$svh6, hv61s$, uo8xt);
                },
                'fail': function (nr509y) {
                    hv61s$ != null && hv61s$['runWith']([0x1, nr509y]);
                }
            });
            ag8h1['onProgressUpdate'](function (jk9q) {
                hv61s$ != null && hv61s$['runWith']([0x2, jk9q['progress']]);
            });
        }, wvs6['readFile'] = function (i6ga, x1a, e2m3bp, y05o) {
            x1a === void 0x0 && (x1a = 'ascill'), y05o === void 0x0 && (y05o = ''), wvs6['fs']['readFile']({
                'filePath': i6ga,
                'encoding': x1a,
                'success': function (xltag) {
                    if (i6ga['indexOf']('http://') != -0x1 || i6ga['indexOf']('https://') != -0x1) wvs6['onFileUpdate'](i6ga, y05o);
                    e2m3bp != null && e2m3bp['runWith']([0x0, xltag]);
                },
                'fail': function (mp2we) {
                    if (mp2we) e2m3bp != null && e2m3bp['runWith']([0x1, mp2we]);
                }
            });
        }, wvs6['downImg'] = function (jry9k, k9d0j, $ig) {
            $ig === void 0x0 && ($ig = '');
            var vh6$sw = wvs6['wxdown']({
                'url': jry9k,
                'success': function (z23_7p) {
                    z23_7p['statusCode'] === 0xc8 && wvs6['copyFile'](z23_7p['tempFilePath'], $ig, k9d0j);
                },
                'fail': function (esmvw$) {
                    k9d0j != null && k9d0j['runWith']([0x1, esmvw$]);
                }
            });
        }, wvs6['copyFile'] = function (_732z, uxlot, x5otlu) {
            var sbme2w = _732z['split']('/'),
                v$6swh = sbme2w[sbme2w['length'] - 0x1],
                tonyu = uxlot['split']('?')[0x0],
                $h6i1v = wvs6['getFileInfo'](uxlot),
                qjdr9 = wvs6['getFileNativePath'](v$6swh);
            wvs6['fs']['copyFile']({
                'srcPath': _732z,
                'destPath': qjdr9,
                'success': function (qj9kr) {
                    if (!$h6i1v) wvs6['onSaveFile'](uxlot, v$6swh), x5otlu != null && x5otlu['runWith']([0x0]);else {
                        if ($h6i1v['readyUrl'] != uxlot) wvs6['remove'](v$6swh, uxlot, x5otlu);
                    }
                },
                'fail': function (gl8ai) {
                    x5otlu != null && x5otlu['runWith']([0x1, gl8ai]);
                }
            });
        }, wvs6['getFileNativePath'] = function (mpw2eb) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + mpw2eb;
        }, wvs6['remove'] = function (bme32p, pb2e, rqkd9j) {
            pb2e === void 0x0 && (pb2e = '');
            var $v61 = wvs6['getFileInfo'](pb2e),
                m2es = wvs6['getFileNativePath']($v61['md5']);
            rj0ky['loader']['clearRes']($v61['readyUrl']), wvs6['fs']['unlink']({
                'filePath': m2es,
                'success': function (youtn) {
                    if (pb2e != '') wvs6['onSaveFile'](pb2e, bme32p);
                    rqkd9j != null && rqkd9j['runWith']([0x0]);
                },
                'fail': function (j0yr9k) {}
            });
        }, wvs6['onSaveFile'] = function (kjfd, bvsew) {
            var uotln = kjfd['split']('?')[0x0];
            wvs6['filesListObj'][uotln] = {
                'md5': bvsew,
                'readyUrl': kjfd
            }, wvs6['fs']['writeFile']({
                'filePath': wvs6['fileNativeDir'] + '/' + wvs6['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](wvs6['filesListObj']),
                'success': function (j0r9k) {
                    console['log']('写入测试测试成功：', j0r9k);
                },
                'fail': function (mbwpe2) {
                    console['log']('写入测试测试失败：', mbwpe2);
                }
            });
        }, wvs6['existDir'] = function (rfjkd, jkdr9) {
            wvs6['fs']['mkdir']({
                'dirPath': rfjkd,
                'success': function (e32bpm) {
                    jkdr9 != null && jkdr9['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (p_7z4) {
                    if (p_7z4['errMsg']['indexOf']('file already exists') != -0x1) wvs6['readSync'](wvs6['fileListName'], 'utf8', jkdr9);else jkdr9 != null && jkdr9['runWith']([0x1, p_7z4]);
                }
            });
        }, wvs6['readSync'] = function (krdqj9, pz34, $ewmvs, j9y0r) {
            pz34 === void 0x0 && (pz34 = 'ascill'), j9y0r === void 0x0 && (j9y0r = '');
            var otlxa8 = wvs6['getFileNativePath'](krdqj9),
                wembs;
            try {
                wembs = wvs6['fs']['readFileSync'](otlxa8), $ewmvs != null && $ewmvs['runWith']([0x0, { 'data': wembs }]);
            } catch (ykj90) {
                $ewmvs != null && $ewmvs['runWith']([0x1]);
            }
        }, wvs6['readCache'] = function () {}, wvs6['writeCache'] = function (l5utx) {
            var j9rny = readyUrl['split']('?')[0x0];
            wvs6['filesListObj'][j9rny] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, wvs6['fs']['writeFile']({
                'filePath': wvs6['fileNativeDir'] + '/' + wvs6['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](wvs6['filesListObj']),
                'success': function (hia18g) {},
                'fail': function (pbz2) {}
            });
        }, wvs6['setNativeFileDir'] = function (jkrqd9) {
            wvs6['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + jkrqd9;
        }, wvs6['filesListObj'] = {}, wvs6['fileNativeDir'] = null, wvs6['fileListName'] = 'layaairfiles.txt', wvs6['ziyuFileData'] = {}, l8txg(wvs6, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), wvs6;
    }(ig18xa),
        k9jd = function (ih1g6a) {
        function a16ihg() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], a16ihg['__super']['call'](this), this['_sound'] = a16ihg['_createSound'](), this['_chanell'] = new kry9j0(this['_sound']);
        }
        nouy(a16ihg, 'laya.wx.mini.MiniSound', ih1g6a);
        var zp34_7 = a16ihg['prototype'];
        return zp34_7['load'] = function (djkq) {
            var h$v16 = this;
            djkq = z7_p3['formatURL'](djkq), this['url'] = djkq;
            if (a16ihg['_audioCache'][djkq]) {
                this['event']('complete');
                return;
            }
            function o5yn0u() {
                if (a16ihg['_null'] != undefined) h$v16['_sound']['onCanplay'](a16ihg['_null']), h$v16['_sound']['onError'](a16ihg['_null']);else try {
                    h$v16['_sound']['onCanplay'](null), h$v16['_sound']['onError'](null), a16ihg['_null'] = null;
                } catch (y0uno) {
                    console['warn']('[wxmini] _clearSound:' + y0uno), h$v16['_sound']['onCanplay'](dr9qj), h$v16['_sound']['onError'](dr9qj), a16ihg['_null'] = dr9qj;
                }
            }
            function svwbm() {
                rq9djk['loaded'] = !![], rq9djk['event']('complete'), a16ihg['_audioCache'][rq9djk['url']] = rq9djk;
            }
            function e2sm(lgaxi8) {
                console['error']('errCode=' + lgaxi8['errCode'] + '  errMsg=' + lgaxi8['errMsg']), rq9djk['event']('error');
            }
            function dr9qj() {}
            this['_sound']['onCanplay'](svwbm), this['_sound']['onError'](e2sm), this['_sound']['src'] = djkq;
            var rq9djk = this;
        }, zp34_7['play'] = function (ig1ah6, a8to) {
            ig1ah6 === void 0x0 && (ig1ah6 = 0x0), a8to === void 0x0 && (a8to = 0x0);
            var m2bpew, u5tlno;
            if (this['url'] == jk9qdr['_tMusic']) {
                if (!a16ihg['_musicAudio']) a16ihg['_musicAudio'] = this['_sound'];
                m2bpew = a16ihg['_musicAudio'], u5tlno = this['_chanell'];
            } else m2bpew = this['_sound'], u5tlno = this['_chanell'];
            return m2bpew['src'] = this['url'], m2bpew['startTime'] = 0x0, u5tlno['isStopped'] && (u5tlno['url'] = this['url'], u5tlno['loops'] = a8to, u5tlno['startTime'] = ig1ah6, u5tlno['play'](), jk9qdr['addChannel'](u5tlno)), u5tlno;
        }, zp34_7['dispose'] = function () {
            var qjkdrf = a16ihg['_audioCache'][this['url']];
            qjkdrf && (qjkdrf['src'] = '', delete a16ihg['_audioCache'][this['url']]);
        }, g8at(0x0, zp34_7, 'duration', function () {
            return this['_sound']['duration'];
        }), a16ihg['_createSound'] = function () {
            a16ihg['_id']++;
            var oytn5 = jy0kr9['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return oytn5;
        }, a16ihg['_musicAudio'] = null, a16ihg['_id'] = 0x0, a16ihg['_audioCache'] = {}, a16ihg['_null'] = undefined, a16ihg;
    }(ig18xa),
        kry9j0 = function (dqfrk) {
        function v$i1h6(ep2bmw) {
            this['_audio'] = null, this['_onEnd'] = null, v$i1h6['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = ep2bmw, this['_onEnd'] = zb['bind'](this['__onEnd'], this), ep2bmw['onEnded'](this['_onEnd']);
        }
        nouy(v$i1h6, 'laya.wx.mini.MiniSoundChannel', dqfrk);
        var z_p3 = v$i1h6['prototype'];
        return z_p3['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (rj0ky['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, z_p3['__onNull'] = function () {}, z_p3['play'] = function () {
            this['isStopped'] = ![], jk9qdr['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, z_p3['stop'] = function () {
            this['isStopped'] = !![], jk9qdr['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, z_p3['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, z_p3['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], jk9qdr['addChannel'](this), this['_audio']['play']();
        }, g8at(0x0, z_p3, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), g8at(0x0, z_p3, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), g8at(0x0, z_p3, 'volume', function () {
            return 0x1;
        }, function (g8ai1h) {}), v$i1h6['_null'] = undefined, v$i1h6;
    }(sbem2w),
        i1x8 = function () {
        function xuot5l() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = jy0kr9['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        nouy(xuot5l, 'laya.wx.mini.MiniVideo');
        var x8glta = xuot5l['prototype'];
        return x8glta['on'] = function (vw6m$s, gh6$1, ewp2m) {
            if (vw6m$s == 'loadedmetadata') this['onPlayFunc'] = ewp2m['bind'](gh6$1), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else vw6m$s == 'ended' && (this['onEndedFunC'] = ewp2m['bind'](gh6$1), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, x8glta['onTimeUpdateFunc'] = function (hg8i1a) {
            this['position'] = hg8i1a['position'], this['_duration'] = hg8i1a['duration'];
        }, x8glta['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, x8glta['onended'] = function (s2ew, y509nr) {
            this['onEndedFunC'] = y509nr['bind'](s2ew), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, x8glta['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, x8glta['off'] = function (algi8, tx8l, d90r) {
            if (algi8 == 'loadedmetadata') this['onPlayFunc'] = d90r['bind'](tx8l), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else algi8 == 'ended' && (this['onEndedFunC'] = d90r['bind'](tx8l), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, x8glta['load'] = function (ga61h) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = ga61h;
        }, x8glta['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, x8glta['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, x8glta['size'] = function ($16vh, ws$hv) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = $16vh, this['videoElement']['height'] = ws$hv;
        }, x8glta['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, x8glta['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, g8at(0x0, x8glta, 'duration', function () {
            return this['_duration'];
        }), g8at(0x0, x8glta, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (g8i1a) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = g8i1a;
        }), g8at(0x0, x8glta, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), g8at(0x0, x8glta, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), g8at(0x0, x8glta, 'ended', function () {
            return this['videoend'];
        }), g8at(0x0, x8glta, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (dj09k) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = dj09k;
        }), g8at(0x0, x8glta, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (nyr95) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = nyr95;
        }), g8at(0x0, x8glta, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (h6$vs1) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = h6$vs1;
        }), g8at(0x0, x8glta, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), g8at(0x0, x8glta, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (v6swm) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = v6swm;
        }), g8at(0x0, x8glta, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (msbwe2) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = msbwe2;
        }), g8at(0x0, x8glta, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), g8at(0x0, x8glta, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (jy9rk0) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = jy9rk0;
        }), g8at(0x0, x8glta, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (ai18hg) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = ai18hg;
        }), g8at(0x0, x8glta, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (wbpem) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = wbpem;
        }), xuot5l;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var wh6s$ in Laya) {
        var r0kjy = Laya[wh6s$];
        r0kjy && r0kjy['__isclass'] && (exports[wh6s$] = r0kjy);
    }
});