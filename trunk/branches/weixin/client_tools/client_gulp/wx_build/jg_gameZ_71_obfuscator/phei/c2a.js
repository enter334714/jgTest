var f = wx.$B;
(function (window, document, noy) {
    var smvw6$ = noy['un'],
        m$v = noy['uns'],
        xl8 = noy['static'],
        laxg = noy['class'],
        mwep = noy['getset'],
        m$v6w = noy['__newvec'],
        ot8ux = laya['utils']['Browser'],
        ah8i1 = laya['events']['Event'],
        i1ag6h = laya['events']['EventDispatcher'],
        t5noul = laya['resource']['HTMLImage'],
        x5oul = laya['utils']['Handler'],
        mes$w = laya['display']['Input'],
        mwse$ = laya['net']['Loader'],
        be23mp = laya['maths']['Matrix'],
        vsw$m6 = laya['renders']['Render'],
        pz32_7 = laya['utils']['RunDriver'],
        vi6$h1 = laya['media']['Sound'],
        kd9jq = laya['media']['SoundChannel'],
        ltuo5x = laya['media']['SoundManager'],
        kdrq = laya['display']['Stage'],
        xltu5 = laya['net']['URL'],
        kqrd9j = laya['utils']['Utils'],
        $mwvs6 = function () {
        function djk0r() {}
        return laxg(djk0r, 'laya.wx.mini.MiniAdpter'), djk0r['getJson'] = function (eb2wm) {
            return JSON['parse'](eb2wm);
        }, djk0r['init'] = function (ny50u9, fkqrj) {
            ny50u9 === void 0x0 && (ny50u9 = ![]), fkqrj === void 0x0 && (fkqrj = ![]);
            if (djk0r['_inited']) return;
            djk0r['window'] = window;
            if (djk0r['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            djk0r['_inited'] = !![], djk0r['isZiYu'] = fkqrj, djk0r['isPosMsgYu'] = ny50u9, djk0r['EnvConfig'] = {}, !djk0r['isZiYu'] && (mwse2b['setNativeFileDir']('/layaairGame'), mwse2b['existDir'](mwse2b['fileNativeDir'], x5oul['create'](djk0r, djk0r['onMkdirCallBack']))), djk0r['window']['focus'] = function () {}, noy['getUrlPath'] = function () {}, djk0r['window']['logtime'] = function ($6shw) {}, djk0r['window']['alertTimeLog'] = function (z3b7p) {}, djk0r['window']['resetShareInfo'] = function () {}, djk0r['window']['CanvasRenderingContext2D'] = function () {}, djk0r['window']['CanvasRenderingContext2D']['prototype'] = djk0r['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], djk0r['window']['document']['body']['appendChild'] = function () {}, djk0r['EnvConfig']['pixelRatioInt'] = 0x0, pz32_7['getPixelRatio'] = djk0r['pixelRatio'], djk0r['_preCreateElement'] = ot8ux['createElement'], ot8ux['createElement'] = djk0r['createElement'], pz32_7['createShaderCondition'] = djk0r['createShaderCondition'], kqrd9j['parseXMLFromString'] = djk0r['parseXMLFromString'], mes$w['_createInputElement'] = sw6h$v['_createInputElement'], djk0r['EnvConfig']['load'] = mwse$['prototype']['load'], mwse$['prototype']['load'] = giha6['prototype']['load'], djk0r['isZiYu'] && ny50u9 && wx['onMessage'](function (vbes) {
                vbes['isLoad'] && (mwse2b['ziyuFileData'][vbes['url']] = vbes['data']);
            });
        }, djk0r['onMkdirCallBack'] = function (hv1$6s, pmb2e) {
            if (!hv1$6s) mwse2b['filesListObj'] = JSON['parse'](pmb2e['data']);
        }, djk0r['pixelRatio'] = function () {
            if (!djk0r['EnvConfig']['pixelRatioInt']) try {
                var xtulo8 = wx['getSystemInfoSync']();
                return djk0r['EnvConfig']['pixelRatioInt'] = xtulo8['pixelRatio'], xtulo8 = xtulo8, xtulo8['pixelRatio'];
            } catch (g6a1hi) {}
            return djk0r['EnvConfig']['pixelRatioInt'];
        }, djk0r['createElement'] = function (xt8ga) {
            if (xt8ga == 'canvas') {
                var e2mpb;
                return djk0r['idx'] == 0x1 ? djk0r['isZiYu'] ? (e2mpb = sharedCanvas, e2mpb['style'] = {}) : e2mpb = window['canvas'] : e2mpb = window['wx']['createCanvas'](), djk0r['idx']++, e2mpb;
            } else {
                if (xt8ga == 'textarea' || xt8ga == 'input') return djk0r['onCreateInput'](xt8ga);else {
                    if (xt8ga == 'div') {
                        var swe = djk0r['_preCreateElement'](xt8ga);
                        return swe['contains'] = function (xg1a) {
                            return null;
                        }, swe['removeChild'] = function (ahi81) {}, swe;
                    } else return djk0r['_preCreateElement'](xt8ga);
                }
            }
        }, djk0r['onCreateInput'] = function (wmpe2b) {
            var a1i6g = djk0r['_preCreateElement'](wmpe2b);
            return a1i6g['focus'] = sw6h$v['wxinputFocus'], a1i6g['blur'] = sw6h$v['wxinputblur'], a1i6g['style'] = {}, a1i6g['value'] = 0x0, a1i6g['parentElement'] = {}, a1i6g['placeholder'] = {}, a1i6g['type'] = {}, a1i6g['setColor'] = function (y9nu) {}, a1i6g['setType'] = function (u05yn) {}, a1i6g['setFontFace'] = function (m23ep) {}, a1i6g['addEventListener'] = function (v6$1h) {}, a1i6g['contains'] = function (laoxt8) {
                return null;
            }, a1i6g['removeChild'] = function (taxgl) {}, a1i6g;
        }, djk0r['createShaderCondition'] = function (_z237p) {
            var g1axi = this,
                xi18g = function () {
                var gxali = _z237p;
                return g1axi[_z237p['replace']('this.', '')];
            };
            return xi18g;
        }, djk0r['EnvConfig'] = null, djk0r['window'] = null, djk0r['_preCreateElement'] = null, djk0r['_inited'] = ![], djk0r['wxRequest'] = null, djk0r['systemInfo'] = null, djk0r['version'] = '0.0.1', djk0r['isZiYu'] = ![], djk0r['isPosMsgYu'] = ![], djk0r['parseXMLFromString'] = function (ih6$) {
            var sw$, r9njy0;
            ih6$ = ih6$['replace'](/>\s+</g, '><');
            try {
                sw$ = new window['Parser']['DOMParser']()['parseFromString'](ih6$, 'text/xml');
            } catch (ahig8) {
                throw '需要引入xml解析库文件';
            }
            return sw$;
        }, djk0r['idx'] = 0x1, djk0r;
    }(),
        nt5o = function () {
        function x1gi() {}
        laxg(x1gi, 'laya.wx.mini.MiniImage');
        var iahg6 = x1gi['prototype'];
        return iahg6['_loadImage'] = function (lxagt) {
            var jk90yr = this,
                z3_7p = ![];
            lxagt['indexOf']('layaNativeDir/') == -0x1 && (z3_7p = !![], lxagt = xltu5['formatURL'](lxagt));
            if (!mwse2b['getFileInfo'](lxagt)) {
                if (lxagt['indexOf']('http://') != -0x1 || lxagt['indexOf']('https://') != -0x1) mwse2b['downImg'](lxagt, new x5oul(x1gi, x1gi['onDownImgCallBack'], [lxagt, jk90yr]), lxagt);else x1gi['onCreateImage'](lxagt, jk90yr, !![]);
            } else x1gi['onCreateImage'](lxagt, jk90yr, !z3_7p);
        }, x1gi['onDownImgCallBack'] = function (ah1g8i, shvw$6, z3_p2) {
            if (!z3_p2) x1gi['onCreateImage'](ah1g8i, shvw$6);else shvw$6['onError'](null);
        }, x1gi['onCreateImage'] = function (pb3, bp2e, rj0k9y) {
            rj0k9y === void 0x0 && (rj0k9y = ![]);
            var xtl5;
            if (!rj0k9y) {
                var a1g6 = mwse2b['getFileInfo'](pb3),
                    o5nut = a1g6['md5'];
                xtl5 = mwse2b['getFileNativePath'](o5nut);
            } else xtl5 = pb3;
            if (bp2e['imgCache'] == null) bp2e['imgCache'] = {};
            var z7p43_;
            function _p7() {
                z7p43_['onload'] = null, z7p43_['onerror'] = null, delete bp2e['imgCache'][pb3];
            }
            ;
            var rjky9 = function () {
                _p7(), bp2e['onLoaded'](z7p43_);
            },
                $h6v1i = function () {
                _p7(), bp2e['event']('error', 'Load image failed');
            };
            bp2e['_type'] == 'nativeimage' ? (z7p43_ = new ot8ux['window']['Image'](), z7p43_['crossOrigin'] = '', z7p43_['onload'] = rjky9, z7p43_['onerror'] = $h6v1i, z7p43_['src'] = xtl5, bp2e['imgCache'][pb3] = z7p43_) : new t5noul['create'](xtl5, {
                'onload': rjky9,
                'onerror': $h6v1i,
                'onCreate': function (h$swv) {
                    z7p43_ = h$swv, bp2e['imgCache'][pb3] = h$swv;
                }
            });
        }, x1gi;
    }(),
        sw6h$v = function () {
        function ol5t() {}
        return laxg(ol5t, 'laya.wx.mini.MiniInput'), ol5t['_createInputElement'] = function () {
            mes$w['_initInput'](mes$w['area'] = ot8ux['createElement']('textarea')), mes$w['_initInput'](mes$w['input'] = ot8ux['createElement']('input')), mes$w['inputContainer'] = ot8ux['createElement']('div'), mes$w['inputContainer']['style']['position'] = 'absolute', mes$w['inputContainer']['style']['zIndex'] = 0x186a0, ot8ux['container']['appendChild'](mes$w['inputContainer']), mes$w['inputContainer']['setPos'] = function (t8loxu, otal) {
                mes$w['inputContainer']['style']['left'] = t8loxu + 'px', mes$w['inputContainer']['style']['top'] = otal + 'px';
            }, noy['stage']['on']('resize', null, ol5t['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (jyn90) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), ltuo5x['_soundClass'] = lu8otx, ltuo5x['_musicClass'] = lu8otx, window['_videoClass'] = wb2sme;
        }, ol5t['_onStageResize'] = function () {
            var sev$ = noy['stage']['_canvasTransform']['identity']();
            sev$['scale'](ot8ux['width'] / vsw$m6['canvas']['width'] / pz32_7['getPixelRatio'](), ot8ux['height'] / vsw$m6['canvas']['height'] / pz32_7['getPixelRatio']());
        }, ol5t['wxinputFocus'] = function (p2z3e) {
            var hgai8 = mes$w['inputElement']['target'];
            if (hgai8 && !hgai8['editable']) return;
            $mwvs6['window']['wx']['offKeyboardConfirm'](), $mwvs6['window']['wx']['offKeyboardInput'](), $mwvs6['window']['wx']['showKeyboard']({
                'defaultValue': hgai8['text'],
                'maxLength': hgai8['maxChars'],
                'multiple': hgai8['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (aot8lx) {},
                'fail': function (jyk0) {}
            }), $mwvs6['window']['wx']['onKeyboardConfirm'](function (v6$i) {
                var tlox8u = v6$i ? v6$i['value'] : '';
                hgai8['text'] = tlox8u, hgai8['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), $mwvs6['window']['wx']['onKeyboardInput'](function (aoxlt) {
                var kj9ry = aoxlt ? aoxlt['value'] : '';
                if (!hgai8['multiline']) {
                    if (kj9ry['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                hgai8['text'] = kj9ry, hgai8['event']('input');
            });
        }, ol5t['inputEnter'] = function () {
            mes$w['inputElement']['target']['focus'] = ![];
        }, ol5t['wxinputblur'] = function () {
            ol5t['hideKeyboard']();
        }, ol5t['hideKeyboard'] = function () {
            $mwvs6['window']['wx']['offKeyboardConfirm'](), $mwvs6['window']['wx']['offKeyboardInput'](), $mwvs6['window']['wx']['hideKeyboard']({
                'success': function (jy9rk) {
                    console['log']('隐藏键盘');
                },
                'fail': function (l8out) {
                    console['log']('隐藏键盘出错:' + (l8out ? l8out['errMsg'] : ''));
                }
            });
        }, ol5t;
    }(),
        giha6 = function () {
        function mvbse() {}
        laxg(mvbse, 'laya.wx.mini.MiniLoader');
        var fkrq = mvbse['prototype'];
        return fkrq['load'] = function (l5txo, $6s, i1agh, svmb, djrkq) {
            i1agh === void 0x0 && (i1agh = !![]), djrkq === void 0x0 && (djrkq = ![]);
            var ewbsm = this;
            ewbsm['_url'] = l5txo;
            if (l5txo['indexOf']('data:image') === 0x0) ewbsm['_type'] = $6s = 'image';else ewbsm['_type'] = $6s || ($6s = ewbsm['getTypeFromUrl'](l5txo));
            ewbsm['_cache'] = i1agh, ewbsm['_data'] = null;
            var yn590u = 'ascii';
            if (l5txo['indexOf']('.fnt') != -0x1) yn590u = 'utf8';else $6s == 'arraybuffer' && (yn590u = '');
            ;
            var lxtu5 = kqrd9j['getFileExtension'](l5txo);
            if (mvbse['_fileTypeArr']['indexOf'](lxtu5) != -0x1) $mwvs6['EnvConfig']['load']['call'](this, l5txo, $6s, i1agh, svmb, djrkq);else {
                if (!mwse2b['getFileInfo'](l5txo)) {
                    if (l5txo['indexOf']('layaNativeDir/') != -0x1) {
                        if ($mwvs6['isZiYu']) {
                            var wb2pe = mwse2b['ziyuFileData'][l5txo];
                            ewbsm['onLoaded'](wb2pe);
                            return;
                        } else {
                            cosnole['log']('read read'), mwse2b['read'](l5txo, yn590u, new x5oul(mvbse, mvbse['onReadNativeCallBack'], [yn590u, l5txo, $6s, i1agh, svmb, djrkq, ewbsm]));
                            return;
                        }
                    }
                    if (xltu5['rootPath'] == '') var vmws = l5txo;else vmws = l5txo['split'](xltu5['rootPath'])[0x0];
                    l5txo['indexOf']('http://') != -0x1 || l5txo['indexOf']('https://') != -0x1 ? $mwvs6['EnvConfig']['load']['call'](ewbsm, l5txo, $6s, i1agh, svmb, djrkq) : mwse2b['readFile'](vmws, yn590u, new x5oul(mvbse, mvbse['onReadNativeCallBack'], [yn590u, l5txo, $6s, i1agh, svmb, djrkq, ewbsm]), l5txo);
                } else $mwvs6['EnvConfig']['load']['call'](this, l5txo, $6s, i1agh, svmb, djrkq);
            }
        }, fkrq['resMgrLoad'] = function (l5nt, bwemsv, i81agh, xla8ig, wm$sve, kjyr9, sbvewm) {
            i81agh === void 0x0 && (i81agh = 0x0), xla8ig === void 0x0 && (xla8ig = ![]), wm$sve === void 0x0 && (wm$sve = ![]), kjyr9 === void 0x0 && (kjyr9 = 0x0), sbvewm === void 0x0 && (sbvewm = 0x3), l5nt['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', l5nt), $mwvs6['EnvConfig']['resMgrLoad'](l5nt, (xial8, $vmswe, lux8) => {
                mvbse['prototype']['resMgrLoadCallBack'](xial8, $vmswe, lux8, bwemsv);
            }, i81agh, xla8ig, wm$sve, kjyr9, sbvewm);
        }, fkrq['resMgrLoadCallBack'] = function (yk0r9, wsvbe, pbz72, mebp2w) {
            console['log']('buff:::', yk0r9, pbz72, mwse2b['fileNativeDir'] + '///' + mwse2b['fileListName']), mebp2w(yk0r9, wsvbe, pbz72);
        }, fkrq['clearRes'] = function (wp2eb, agi1) {
            agi1 === void 0x0 && (agi1 = ![]);
            var dr09 = this;
            dr09['clearRes'](wp2eb, agi1);
            var y05uno = mwse2b['getFileInfo'](wp2eb);
            if (y05uno && (wp2eb['indexOf']('http://') != -0x1 || wp2eb['indexOf']('https://') != -0x1)) {
                var mbpwe = y05uno['md5'],
                    g8lt = mwse2b['getFileNativePath'](mbpwe);
                mwse2b['remove'](g8lt);
            }
        }, mvbse['onReadNativeCallBack'] = function (igl8ax, a8xi1g, p273b, wms2eb, axtl8o, u05y, vhws, pwbme2, ulo5) {
            wms2eb === void 0x0 && (wms2eb = !![]), u05y === void 0x0 && (u05y = ![]), pwbme2 === void 0x0 && (pwbme2 = 0x0);
            if (!pwbme2) {
                var nr90y5;
                if (p273b == 'json' || p273b == 'atlas') nr90y5 = $mwvs6['getJson'](ulo5['data']);else p273b == 'xml' ? nr90y5 = kqrd9j['parseXMLFromString'](ulo5['data']) : nr90y5 = ulo5['data'];
                vhws['onLoaded'](nr90y5), !$mwvs6['isZiYu'] && $mwvs6['isPosMsgYu'] && p273b != 'arraybuffer' && wx['postMessage']({
                    'url': a8xi1g,
                    'data': nr90y5,
                    'isLoad': !![]
                });
            } else pwbme2 == 0x1 && $mwvs6['EnvConfig']['load']['call'](vhws, a8xi1g, p273b, wms2eb, axtl8o, u05y);
        }, xl8(mvbse, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), mvbse;
    }(),
        mwse2b = function (ny05ou) {
        function kdrf() {
            kdrf['__super']['call'](this);
            ;
        }
        return laxg(kdrf, 'laya.wx.mini.MiniFileMgr', ny05ou), kdrf['isLoadFile'] = function (evwb) {
            return kdrf['_fileTypeArr']['indexOf'](evwb) != -0x1 ? !![] : ![];
        }, kdrf['getFileInfo'] = function (zp34_7) {
            var l8ag = zp34_7['split']('?')[0x0],
                kd9q = kdrf['filesListObj'][l8ag];
            if (kd9q == null) return null;else return kd9q;
            return null;
        }, kdrf['onFileUpdate'] = function (w$vs6, sev$m) {
            var $vih6 = w$vs6['split']('/'),
                msvw$ = $vih6[$vih6['length'] - 0x1],
                rny90j = kdrf['getFileInfo'](sev$m);
            if (rny90j == null) kdrf['onSaveFile'](sev$m, msvw$);else {
                if (rny90j['readyUrl'] != sev$m) kdrf['remove'](msvw$, sev$m);
            }
        }, kdrf['exits'] = function (m$sv6, jk0r) {
            var ox8l = kdrf['getFileNativePath'](m$sv6);
            kdrf['fs']['getFileInfo']({
                'filePath': ox8l,
                'success': function (a18xg) {
                    jk0r != null && jk0r['runWith']([0x0, a18xg]);
                },
                'fail': function (h6vs$) {
                    jk0r != null && jk0r['runWith']([0x1, h6vs$]);
                }
            });
        }, kdrf['read'] = function (nu5y09, l8tux, x8ag1, r0jdk9) {
            l8tux === void 0x0 && (l8tux = 'ascill'), r0jdk9 === void 0x0 && (r0jdk9 = '');
            var i16ahg;
            r0jdk9 != '' ? i16ahg = kdrf['getFileNativePath'](nu5y09) : i16ahg = nu5y09, kdrf['fs']['readFile']({
                'filePath': i16ahg,
                'encoding': l8tux,
                'success': function (o8ltx) {
                    x8ag1 != null && x8ag1['runWith']([0x0, o8ltx]);
                },
                'fail': function (kd9) {
                    if (kd9 && r0jdk9 != '') kdrf['down'](r0jdk9, l8tux, x8ag1, r0jdk9);else x8ag1 != null && x8ag1['runWith']([0x1]);
                }
            });
        }, kdrf['readNativeFile'] = function (wbvmse, jk9r0y) {
            kdrf['fs']['readFile']({
                'filePath': wbvmse,
                'encoding': '',
                'success': function (tox5) {
                    jk9r0y != null && jk9r0y['runWith']([0x0]);
                },
                'fail': function (axig8) {
                    jk9r0y != null && jk9r0y['runWith']([0x1]);
                }
            });
        }, kdrf['down'] = function (txl8ga, y9j0k, hgai81, jqdrf) {
            y9j0k === void 0x0 && (y9j0k = 'ascill'), jqdrf === void 0x0 && (jqdrf = '');
            var bz732 = kdrf['getFileNativePath'](jqdrf),
                _43z7p = kdrf['wxdown']({
                'url': txl8ga,
                'filePath': bz732,
                'success': function (jrqkdf) {
                    if (jrqkdf['statusCode'] === 0xc8) kdrf['readFile'](jrqkdf['filePath'], y9j0k, hgai81, jqdrf);
                },
                'fail': function (uny5) {
                    hgai81 != null && hgai81['runWith']([0x1, uny5]);
                }
            });
            _43z7p['onProgressUpdate'](function (i$h) {
                hgai81 != null && hgai81['runWith']([0x2, i$h['progress']]);
            });
        }, kdrf['readFile'] = function (g8xial, r9k0y, gxa1, ms$e) {
            r9k0y === void 0x0 && (r9k0y = 'ascill'), ms$e === void 0x0 && (ms$e = ''), kdrf['fs']['readFile']({
                'filePath': g8xial,
                'encoding': r9k0y,
                'success': function (y5n) {
                    if (g8xial['indexOf']('http://') != -0x1 || g8xial['indexOf']('https://') != -0x1) kdrf['onFileUpdate'](g8xial, ms$e);
                    gxa1 != null && gxa1['runWith']([0x0, y5n]);
                },
                'fail': function (hg$6) {
                    if (hg$6) gxa1 != null && gxa1['runWith']([0x1, hg$6]);
                }
            });
        }, kdrf['downImg'] = function (_p273, $16ihv, h6i$1) {
            h6i$1 === void 0x0 && (h6i$1 = '');
            var o0y = kdrf['wxdown']({
                'url': _p273,
                'success': function (z72p3b) {
                    z72p3b['statusCode'] === 0xc8 && kdrf['copyFile'](z72p3b['tempFilePath'], h6i$1, $16ihv);
                },
                'fail': function (un5to) {
                    $16ihv != null && $16ihv['runWith']([0x1, un5to]);
                }
            });
        }, kdrf['copyFile'] = function (tao, gtlax8, ny95r0) {
            var h16i$g = tao['split']('/'),
                z43_ = h16i$g[h16i$g['length'] - 0x1],
                mpb23e = gtlax8['split']('?')[0x0],
                m$wsve = kdrf['getFileInfo'](gtlax8),
                uo5xtl = kdrf['getFileNativePath'](z43_);
            kdrf['fs']['copyFile']({
                'srcPath': tao,
                'destPath': uo5xtl,
                'success': function (ltao) {
                    if (!m$wsve) kdrf['onSaveFile'](gtlax8, z43_), ny95r0 != null && ny95r0['runWith']([0x0]);else {
                        if (m$wsve['readyUrl'] != gtlax8) kdrf['remove'](z43_, gtlax8, ny95r0);
                    }
                },
                'fail': function (u905n) {
                    ny95r0 != null && ny95r0['runWith']([0x1, u905n]);
                }
            });
        }, kdrf['getFileNativePath'] = function (higa61) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + higa61;
        }, kdrf['remove'] = function (djkr0, $1g6h, vmws6) {
            $1g6h === void 0x0 && ($1g6h = '');
            var i1vh$ = kdrf['getFileInfo']($1g6h),
                ga8i = kdrf['getFileNativePath'](i1vh$['md5']);
            noy['loader']['clearRes'](i1vh$['readyUrl']), kdrf['fs']['unlink']({
                'filePath': ga8i,
                'success': function (r0k9j) {
                    if ($1g6h != '') kdrf['onSaveFile']($1g6h, djkr0);
                    vmws6 != null && vmws6['runWith']([0x0]);
                },
                'fail': function (y0onu5) {}
            });
        }, kdrf['onSaveFile'] = function (u5y0no, qrkf) {
            var kjdrf = u5y0no['split']('?')[0x0];
            kdrf['filesListObj'][kjdrf] = {
                'md5': qrkf,
                'readyUrl': u5y0no
            }, kdrf['fs']['writeFile']({
                'filePath': kdrf['fileNativeDir'] + '/' + kdrf['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](kdrf['filesListObj']),
                'success': function (r9qk) {
                    console['log']('写入测试测试成功：', r9qk);
                },
                'fail': function (y5nr) {
                    console['log']('写入测试测试失败：', y5nr);
                }
            });
        }, kdrf['existDir'] = function (k0jy9r, p_37z) {
            kdrf['fs']['mkdir']({
                'dirPath': k0jy9r,
                'success': function (swvbe) {
                    p_37z != null && p_37z['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (qjdf) {
                    if (qjdf['errMsg']['indexOf']('file already exists') != -0x1) kdrf['readSync'](kdrf['fileListName'], 'utf8', p_37z);else p_37z != null && p_37z['runWith']([0x1, qjdf]);
                }
            });
        }, kdrf['readSync'] = function (ou5lt, ms2wb, yu50n9, bmvws) {
            ms2wb === void 0x0 && (ms2wb = 'ascill'), bmvws === void 0x0 && (bmvws = '');
            var m2b3e = kdrf['getFileNativePath'](ou5lt),
                yo;
            try {
                yo = kdrf['fs']['readFileSync'](m2b3e), yu50n9 != null && yu50n9['runWith']([0x0, { 'data': yo }]);
            } catch (krj9y0) {
                yu50n9 != null && yu50n9['runWith']([0x1]);
            }
        }, kdrf['readCache'] = function () {}, kdrf['writeCache'] = function (h6v$1s) {
            var p732 = readyUrl['split']('?')[0x0];
            kdrf['filesListObj'][p732] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, kdrf['fs']['writeFile']({
                'filePath': kdrf['fileNativeDir'] + '/' + kdrf['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](kdrf['filesListObj']),
                'success': function (nt5) {},
                'fail': function (bmpwe) {}
            });
        }, kdrf['setNativeFileDir'] = function ($m6vs) {
            kdrf['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + $m6vs;
        }, kdrf['filesListObj'] = {}, kdrf['fileNativeDir'] = null, kdrf['fileListName'] = 'layaairfiles.txt', kdrf['ziyuFileData'] = {}, xl8(kdrf, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), kdrf;
    }(i1ag6h),
        lu8otx = function (axolt) {
        function v$s6() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], v$s6['__super']['call'](this), this['_sound'] = v$s6['_createSound'](), this['_chanell'] = new glxt(this['_sound']);
        }
        laxg(v$s6, 'laya.wx.mini.MiniSound', axolt);
        var yuo50n = v$s6['prototype'];
        return yuo50n['load'] = function (uo5xlt) {
            var m2ewb = this;
            uo5xlt = xltu5['formatURL'](uo5xlt), this['url'] = uo5xlt;
            if (v$s6['_audioCache'][uo5xlt]) {
                this['event']('complete');
                return;
            }
            function yn0u95() {
                if (v$s6['_null'] != undefined) m2ewb['_sound']['onCanplay'](v$s6['_null']), m2ewb['_sound']['onError'](v$s6['_null']);else try {
                    m2ewb['_sound']['onCanplay'](null), m2ewb['_sound']['onError'](null), v$s6['_null'] = null;
                } catch (rj9dkq) {
                    console['warn']('[wxmini] _clearSound:' + rj9dkq), m2ewb['_sound']['onCanplay'](wsbmve), m2ewb['_sound']['onError'](wsbmve), v$s6['_null'] = wsbmve;
                }
            }
            function p7_23z() {
                h1sv6$['loaded'] = !![], h1sv6$['event']('complete'), v$s6['_audioCache'][h1sv6$['url']] = h1sv6$;
            }
            function yrn0j9(kdjr90) {
                console['error']('errCode=' + kdjr90['errCode'] + '  errMsg=' + kdjr90['errMsg']), h1sv6$['event']('error');
            }
            function wsbmve() {}
            this['_sound']['onCanplay'](p7_23z), this['_sound']['onError'](yrn0j9), this['_sound']['src'] = uo5xlt;
            var h1sv6$ = this;
        }, yuo50n['play'] = function (oax8t, _z4p73) {
            oax8t === void 0x0 && (oax8t = 0x0), _z4p73 === void 0x0 && (_z4p73 = 0x0);
            var o5tnu, b3mp2;
            if (this['url'] == ltuo5x['_tMusic']) {
                if (!v$s6['_musicAudio']) v$s6['_musicAudio'] = this['_sound'];
                o5tnu = v$s6['_musicAudio'], b3mp2 = this['_chanell'];
            } else o5tnu = this['_sound'], b3mp2 = this['_chanell'];
            return o5tnu['src'] = this['url'], o5tnu['startTime'] = 0x0, b3mp2['isStopped'] && (b3mp2['url'] = this['url'], b3mp2['loops'] = _z4p73, b3mp2['startTime'] = oax8t, b3mp2['play'](), ltuo5x['addChannel'](b3mp2)), b3mp2;
        }, yuo50n['dispose'] = function () {
            var gxta = v$s6['_audioCache'][this['url']];
            gxta && (gxta['src'] = '', delete v$s6['_audioCache'][this['url']]);
        }, mwep(0x0, yuo50n, 'duration', function () {
            return this['_sound']['duration'];
        }), v$s6['_createSound'] = function () {
            v$s6['_id']++;
            var qfjrd = $mwvs6['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return qfjrd;
        }, v$s6['_musicAudio'] = null, v$s6['_id'] = 0x0, v$s6['_audioCache'] = {}, v$s6['_null'] = undefined, v$s6;
    }(i1ag6h),
        glxt = function (iv1$6) {
        function utln(bwes2) {
            this['_audio'] = null, this['_onEnd'] = null, utln['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = bwes2, this['_onEnd'] = kqrd9j['bind'](this['__onEnd'], this), bwes2['onEnded'](this['_onEnd']);
        }
        laxg(utln, 'laya.wx.mini.MiniSoundChannel', iv1$6);
        var bpz732 = utln['prototype'];
        return bpz732['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (noy['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, bpz732['__onNull'] = function () {}, bpz732['play'] = function () {
            this['isStopped'] = ![], ltuo5x['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, bpz732['stop'] = function () {
            this['isStopped'] = !![], ltuo5x['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, bpz732['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, bpz732['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], ltuo5x['addChannel'](this), this['_audio']['play']();
        }, mwep(0x0, bpz732, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), mwep(0x0, bpz732, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), mwep(0x0, bpz732, 'volume', function () {
            return 0x1;
        }, function ($wsm6) {}), utln['_null'] = undefined, utln;
    }(kd9jq),
        wb2sme = function () {
        function w$hsv() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = $mwvs6['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        laxg(w$hsv, 'laya.wx.mini.MiniVideo');
        var oxtu8 = w$hsv['prototype'];
        return oxtu8['on'] = function (i61gah, olut8x, vw$6s) {
            if (i61gah == 'loadedmetadata') this['onPlayFunc'] = vw$6s['bind'](olut8x), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else i61gah == 'ended' && (this['onEndedFunC'] = vw$6s['bind'](olut8x), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, oxtu8['onTimeUpdateFunc'] = function (bezp) {
            this['position'] = bezp['position'], this['_duration'] = bezp['duration'];
        }, oxtu8['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, oxtu8['onended'] = function (alxi8g, esv$) {
            this['onEndedFunC'] = esv$['bind'](alxi8g), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, oxtu8['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, oxtu8['off'] = function (laot, hv$6s, z3eb2) {
            if (laot == 'loadedmetadata') this['onPlayFunc'] = z3eb2['bind'](hv$6s), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else laot == 'ended' && (this['onEndedFunC'] = z3eb2['bind'](hv$6s), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, oxtu8['load'] = function (q9kdj) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = q9kdj;
        }, oxtu8['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, oxtu8['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, oxtu8['size'] = function (p2mb3e, $hg61) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = p2mb3e, this['videoElement']['height'] = $hg61;
        }, oxtu8['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, oxtu8['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, mwep(0x0, oxtu8, 'duration', function () {
            return this['_duration'];
        }), mwep(0x0, oxtu8, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (bz2ep3) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = bz2ep3;
        }), mwep(0x0, oxtu8, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), mwep(0x0, oxtu8, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), mwep(0x0, oxtu8, 'ended', function () {
            return this['videoend'];
        }), mwep(0x0, oxtu8, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (_47zp) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = _47zp;
        }), mwep(0x0, oxtu8, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (kr09yj) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = kr09yj;
        }), mwep(0x0, oxtu8, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (g6ia1) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = g6ia1;
        }), mwep(0x0, oxtu8, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), mwep(0x0, oxtu8, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (svebw) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = svebw;
        }), mwep(0x0, oxtu8, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (lt8oax) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = lt8oax;
        }), mwep(0x0, oxtu8, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), mwep(0x0, oxtu8, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (pb32em) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = pb32em;
        }), mwep(0x0, oxtu8, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (wevbms) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = wevbms;
        }), mwep(0x0, oxtu8, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (y09rn5) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = y09rn5;
        }), w$hsv;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var _z74p3 in Laya) {
        var zep32 = Laya[_z74p3];
        zep32 && zep32['__isclass'] && (exports[_z74p3] = zep32);
    }
});