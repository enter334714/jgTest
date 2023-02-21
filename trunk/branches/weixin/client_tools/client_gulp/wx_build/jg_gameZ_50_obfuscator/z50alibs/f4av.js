var b = wx.$e;
(function (window, document, c$lm_) {
    var l_0$dm = c$lm_['un'],
        hs26wn = c$lm_['uns'],
        s2jw6y = c$lm_['static'],
        or98 = c$lm_['class'],
        ox9ur8 = c$lm_['getset'],
        tfavbg = c$lm_['__newvec'],
        xruo9 = laya['utils']['Browser'],
        wh2s = laya['events']['Event'],
        vtgfba = laya['events']['EventDispatcher'],
        fvbt = laya['resource']['HTMLImage'],
        lm0_c = laya['utils']['Handler'],
        baftvg = laya['display']['Input'],
        l0_mc$ = laya['net']['Loader'],
        t57r = laya['maths']['Matrix'],
        whne1z = laya['renders']['Render'],
        t7r = laya['utils']['RunDriver'],
        g5fbkt = laya['media']['Sound'],
        t5f7kb = laya['media']['SoundChannel'],
        udx08 = laya['media']['SoundManager'],
        eph1n = laya['display']['Stage'],
        dx9_0 = laya['net']['URL'],
        lc$_0m = laya['utils']['Utils'],
        wnze1h = function () {
        function ld90_8() {}
        return or98(ld90_8, 'laya.wx.mini.MiniAdpter'), ld90_8['getJson'] = function (wh1ne) {
            return JSON['parse'](wh1ne);
        }, ld90_8['init'] = function (kft7b5, phez1n) {
            kft7b5 === void 0x0 && (kft7b5 = ![]), phez1n === void 0x0 && (phez1n = ![]);
            if (ld90_8['_inited']) return;
            ld90_8['window'] = window;
            if (ld90_8['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            ld90_8['_inited'] = !![], ld90_8['isZiYu'] = phez1n, ld90_8['isPosMsgYu'] = kft7b5, ld90_8['EnvConfig'] = {}, !ld90_8['isZiYu'] && (k5otb['setNativeFileDir']('/layaairGame'), k5otb['existDir'](k5otb['fileNativeDir'], lm0_c['create'](ld90_8, ld90_8['onMkdirCallBack']))), ld90_8['window']['focus'] = function () {}, c$lm_['getUrlPath'] = function () {}, ld90_8['window']['logtime'] = function (vfkbgt) {}, ld90_8['window']['alertTimeLog'] = function (_d$m0) {}, ld90_8['window']['resetShareInfo'] = function () {}, ld90_8['window']['CanvasRenderingContext2D'] = function () {}, ld90_8['window']['CanvasRenderingContext2D']['prototype'] = ld90_8['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], ld90_8['window']['document']['body']['appendChild'] = function () {}, ld90_8['EnvConfig']['pixelRatioInt'] = 0x0, t7r['getPixelRatio'] = ld90_8['pixelRatio'], ld90_8['_preCreateElement'] = xruo9['createElement'], xruo9['createElement'] = ld90_8['createElement'], t7r['createShaderCondition'] = ld90_8['createShaderCondition'], lc$_0m['parseXMLFromString'] = ld90_8['parseXMLFromString'], baftvg['_createInputElement'] = kt5f['_createInputElement'], ld90_8['EnvConfig']['load'] = l0_mc$['prototype']['load'], l0_mc$['prototype']['load'] = a2ygvj['prototype']['load'], ld90_8['isZiYu'] && kft7b5 && wx['onMessage'](function (o75xr) {
                o75xr['isLoad'] && (k5otb['ziyuFileData'][o75xr['url']] = o75xr['data']);
            });
        }, ld90_8['onMkdirCallBack'] = function (c_i$l, kt7or) {
            if (!c_i$l) k5otb['filesListObj'] = JSON['parse'](kt7or['data']);
        }, ld90_8['pixelRatio'] = function () {
            if (!ld90_8['EnvConfig']['pixelRatioInt']) try {
                var our5x = wx['getSystemInfoSync']();
                return ld90_8['EnvConfig']['pixelRatioInt'] = our5x['pixelRatio'], our5x = our5x, our5x['pixelRatio'];
            } catch (dl9_0) {}
            return ld90_8['EnvConfig']['pixelRatioInt'];
        }, ld90_8['createElement'] = function (nh26s) {
            if (nh26s == 'canvas') {
                var j6s2ya;
                return ld90_8['idx'] == 0x1 ? ld90_8['isZiYu'] ? (j6s2ya = sharedCanvas, j6s2ya['style'] = {}) : j6s2ya = window['canvas'] : j6s2ya = window['wx']['createCanvas'](), ld90_8['idx']++, j6s2ya;
            } else {
                if (nh26s == 'textarea' || nh26s == 'input') return ld90_8['onCreateInput'](nh26s);else {
                    if (nh26s == 'div') {
                        var o7ktr5 = ld90_8['_preCreateElement'](nh26s);
                        return o7ktr5['contains'] = function (ruo87) {
                            return null;
                        }, o7ktr5['removeChild'] = function (uo75) {}, o7ktr5;
                    } else return ld90_8['_preCreateElement'](nh26s);
                }
            }
        }, ld90_8['onCreateInput'] = function (our7) {
            var kfbvgt = ld90_8['_preCreateElement'](our7);
            return kfbvgt['focus'] = kt5f['wxinputFocus'], kfbvgt['blur'] = kt5f['wxinputblur'], kfbvgt['style'] = {}, kfbvgt['value'] = 0x0, kfbvgt['parentElement'] = {}, kfbvgt['placeholder'] = {}, kfbvgt['type'] = {}, kfbvgt['setColor'] = function (_m$c0l) {}, kfbvgt['setType'] = function (_0xd89) {}, kfbvgt['setFontFace'] = function (bftv) {}, kfbvgt['addEventListener'] = function ($_l0mc) {}, kfbvgt['contains'] = function (avg) {
                return null;
            }, kfbvgt['removeChild'] = function (mc4$i3) {}, kfbvgt;
        }, ld90_8['createShaderCondition'] = function (du80) {
            var agfvbt = this,
                otkb5 = function () {
                var y6j2a = du80;
                return agfvbt[du80['replace']('this.', '')];
            };
            return otkb5;
        }, ld90_8['EnvConfig'] = null, ld90_8['window'] = null, ld90_8['_preCreateElement'] = null, ld90_8['_inited'] = ![], ld90_8['wxRequest'] = null, ld90_8['systemInfo'] = null, ld90_8['version'] = '0.0.1', ld90_8['isZiYu'] = ![], ld90_8['isPosMsgYu'] = ![], ld90_8['parseXMLFromString'] = function (bjgf) {
            var u5kr, l890;
            bjgf = bjgf['replace'](/>\s+</g, '><');
            try {
                u5kr = new window['Parser']['DOMParser']()['parseFromString'](bjgf, 'text/xml');
            } catch (ud80x9) {
                throw '需要引入xml解析库文件';
            }
            return u5kr;
        }, ld90_8['idx'] = 0x1, ld90_8;
    }(),
        v2gjay = function () {
        function mqci34() {}
        or98(mqci34, 'laya.wx.mini.MiniImage');
        var ou9r = mqci34['prototype'];
        return ou9r['_loadImage'] = function (r8ux9d) {
            var tko57 = this,
                $m0c = ![];
            r8ux9d['indexOf']('layaNativeDir/') == -0x1 && ($m0c = !![], r8ux9d = dx9_0['formatURL'](r8ux9d));
            if (!k5otb['getFileInfo'](r8ux9d)) {
                if (r8ux9d['indexOf']('http://') != -0x1 || r8ux9d['indexOf']('https://') != -0x1) k5otb['downImg'](r8ux9d, new lm0_c(mqci34, mqci34['onDownImgCallBack'], [r8ux9d, tko57]), r8ux9d);else mqci34['onCreateImage'](r8ux9d, tko57, !![]);
            } else mqci34['onCreateImage'](r8ux9d, tko57, !$m0c);
        }, mqci34['onDownImgCallBack'] = function (_licm, l4$mic, k7tro) {
            if (!k7tro) mqci34['onCreateImage'](_licm, l4$mic);else l4$mic['onError'](null);
        }, mqci34['onCreateImage'] = function (lcim_, $i_clm, vgbkft) {
            vgbkft === void 0x0 && (vgbkft = ![]);
            var r9o;
            if (!vgbkft) {
                var hzen6 = k5otb['getFileInfo'](lcim_),
                    jyg2a = hzen6['md5'];
                r9o = k5otb['getFileNativePath'](jyg2a);
            } else r9o = lcim_;
            if ($i_clm['imgCache'] == null) $i_clm['imgCache'] = {};
            var o7trk;
            function $l_90() {
                o7trk['onload'] = null, o7trk['onerror'] = null, delete $i_clm['imgCache'][lcim_];
            }
            ;
            var im3c$ = function () {
                $l_90(), $i_clm['onLoaded'](o7trk);
            },
                k57bt = function () {
                $l_90(), $i_clm['event']('error', 'Load image failed');
            };
            $i_clm['_type'] == 'nativeimage' ? (o7trk = new xruo9['window']['Image'](), o7trk['crossOrigin'] = '', o7trk['onload'] = im3c$, o7trk['onerror'] = k57bt, o7trk['src'] = r9o, $i_clm['imgCache'][lcim_] = o7trk) : new fvbt['create'](r9o, {
                'onload': im3c$,
                'onerror': k57bt,
                'onCreate': function (hs2n6) {
                    o7trk = hs2n6, $i_clm['imgCache'][lcim_] = hs2n6;
                }
            });
        }, mqci34;
    }(),
        kt5f = function () {
        function ru5x7o() {}
        return or98(ru5x7o, 'laya.wx.mini.MiniInput'), ru5x7o['_createInputElement'] = function () {
            baftvg['_initInput'](baftvg['area'] = xruo9['createElement']('textarea')), baftvg['_initInput'](baftvg['input'] = xruo9['createElement']('input')), baftvg['inputContainer'] = xruo9['createElement']('div'), baftvg['inputContainer']['style']['position'] = 'absolute', baftvg['inputContainer']['style']['zIndex'] = 0x186a0, xruo9['container']['appendChild'](baftvg['inputContainer']), baftvg['inputContainer']['setPos'] = function (gyav2j, $dml) {
                baftvg['inputContainer']['style']['left'] = gyav2j + 'px', baftvg['inputContainer']['style']['top'] = $dml + 'px';
            }, c$lm_['stage']['on']('resize', null, ru5x7o['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (henpz1) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), udx08['_soundClass'] = we1h, udx08['_musicClass'] = we1h, window['_videoClass'] = nze1hp;
        }, ru5x7o['_onStageResize'] = function () {
            var afgvbt = c$lm_['stage']['_canvasTransform']['identity']();
            afgvbt['scale'](xruo9['width'] / whne1z['canvas']['width'] / t7r['getPixelRatio'](), xruo9['height'] / whne1z['canvas']['height'] / t7r['getPixelRatio']());
        }, ru5x7o['wxinputFocus'] = function (bktf75) {
            var ajfvgy = baftvg['inputElement']['target'];
            if (ajfvgy && !ajfvgy['editable']) return;
            wnze1h['window']['wx']['offKeyboardConfirm'](), wnze1h['window']['wx']['offKeyboardInput'](), wnze1h['window']['wx']['showKeyboard']({
                'defaultValue': ajfvgy['text'],
                'maxLength': ajfvgy['maxChars'],
                'multiple': ajfvgy['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (kb7tf5) {},
                'fail': function (gtfkvb) {}
            }), wnze1h['window']['wx']['onKeyboardConfirm'](function (orx87u) {
                var n6hswz = orx87u ? orx87u['value'] : '';
                ajfvgy['text'] = n6hswz, ajfvgy['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), wnze1h['window']['wx']['onKeyboardInput'](function (x9dr) {
                var xuo89 = x9dr ? x9dr['value'] : '';
                if (!ajfvgy['multiline']) {
                    if (xuo89['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                ajfvgy['text'] = xuo89, ajfvgy['event']('input');
            });
        }, ru5x7o['inputEnter'] = function () {
            baftvg['inputElement']['target']['focus'] = ![];
        }, ru5x7o['wxinputblur'] = function () {
            ru5x7o['hideKeyboard']();
        }, ru5x7o['hideKeyboard'] = function () {
            wnze1h['window']['wx']['offKeyboardConfirm'](), wnze1h['window']['wx']['offKeyboardInput'](), wnze1h['window']['wx']['hideKeyboard']({
                'success': function (r87oux) {
                    console['log']('隐藏键盘');
                },
                'fail': function (_0m$d) {
                    console['log']('隐藏键盘出错:' + (_0m$d ? _0m$d['errMsg'] : ''));
                }
            });
        }, ru5x7o;
    }(),
        a2ygvj = function () {
        function sw6h2() {}
        or98(sw6h2, 'laya.wx.mini.MiniLoader');
        var w2ysj6 = sw6h2['prototype'];
        return w2ysj6['load'] = function (f5bkg, ouk5r, o5tk7b, vtbgfk, ciq4) {
            o5tk7b === void 0x0 && (o5tk7b = !![]), ciq4 === void 0x0 && (ciq4 = ![]);
            var ml_$d0 = this;
            ml_$d0['_url'] = f5bkg;
            if (f5bkg['indexOf']('data:image') === 0x0) ml_$d0['_type'] = ouk5r = 'image';else ml_$d0['_type'] = ouk5r || (ouk5r = ml_$d0['getTypeFromUrl'](f5bkg));
            ml_$d0['_cache'] = o5tk7b, ml_$d0['_data'] = null;
            var u9orx8 = 'ascii';
            if (f5bkg['indexOf']('.fnt') != -0x1) u9orx8 = 'utf8';else ouk5r == 'arraybuffer' && (u9orx8 = '');
            ;
            var lc0_m = lc$_0m['getFileExtension'](f5bkg);
            if (sw6h2['_fileTypeArr']['indexOf'](lc0_m) != -0x1) wnze1h['EnvConfig']['load']['call'](this, f5bkg, ouk5r, o5tk7b, vtbgfk, ciq4);else {
                if (!k5otb['getFileInfo'](f5bkg)) {
                    if (f5bkg['indexOf']('layaNativeDir/') != -0x1) {
                        if (wnze1h['isZiYu']) {
                            var vygj2a = k5otb['ziyuFileData'][f5bkg];
                            ml_$d0['onLoaded'](vygj2a);
                            return;
                        } else {
                            cosnole['log']('read read'), k5otb['read'](f5bkg, u9orx8, new lm0_c(sw6h2, sw6h2['onReadNativeCallBack'], [u9orx8, f5bkg, ouk5r, o5tk7b, vtbgfk, ciq4, ml_$d0]));
                            return;
                        }
                    }
                    if (dx9_0['rootPath'] == '') var bot7k = f5bkg;else bot7k = f5bkg['split'](dx9_0['rootPath'])[0x0];
                    f5bkg['indexOf']('http://') != -0x1 || f5bkg['indexOf']('https://') != -0x1 ? wnze1h['EnvConfig']['load']['call'](ml_$d0, f5bkg, ouk5r, o5tk7b, vtbgfk, ciq4) : k5otb['readFile'](bot7k, u9orx8, new lm0_c(sw6h2, sw6h2['onReadNativeCallBack'], [u9orx8, f5bkg, ouk5r, o5tk7b, vtbgfk, ciq4, ml_$d0]), f5bkg);
                } else wnze1h['EnvConfig']['load']['call'](this, f5bkg, ouk5r, o5tk7b, vtbgfk, ciq4);
            }
        }, w2ysj6['resMgrLoad'] = function (saj62y, tk7b5, jvas2y, sj6a2y, wzh6ns, $lmc_, imcl) {
            jvas2y === void 0x0 && (jvas2y = 0x0), sj6a2y === void 0x0 && (sj6a2y = ![]), wzh6ns === void 0x0 && (wzh6ns = ![]), $lmc_ === void 0x0 && ($lmc_ = 0x0), imcl === void 0x0 && (imcl = 0x3), saj62y['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', saj62y), wnze1h['EnvConfig']['resMgrLoad'](saj62y, (gjyfv, uor5, vsa) => {
                sw6h2['prototype']['resMgrLoadCallBack'](gjyfv, uor5, vsa, tk7b5);
            }, jvas2y, sj6a2y, wzh6ns, $lmc_, imcl);
        }, w2ysj6['resMgrLoadCallBack'] = function (wzhne1, u80, nwz6s, xr78o) {
            console['log']('buff:::', wzhne1, nwz6s, k5otb['fileNativeDir'] + '///' + k5otb['fileListName']), xr78o(wzhne1, u80, nwz6s);
        }, w2ysj6['clearRes'] = function (z6newh, ru5o7) {
            ru5o7 === void 0x0 && (ru5o7 = ![]);
            var du90x = this;
            du90x['clearRes'](z6newh, ru5o7);
            var zepn1h = k5otb['getFileInfo'](z6newh);
            if (zepn1h && (z6newh['indexOf']('http://') != -0x1 || z6newh['indexOf']('https://') != -0x1)) {
                var pehzn1 = zepn1h['md5'],
                    bktvfg = k5otb['getFileNativePath'](pehzn1);
                k5otb['remove'](bktvfg);
            }
        }, sw6h2['onReadNativeCallBack'] = function (l0d98_, zh6s, _dx89, znh1w, cm4i3$, abj, d8xu09, u5rxo, gvj2a) {
            znh1w === void 0x0 && (znh1w = !![]), abj === void 0x0 && (abj = ![]), u5rxo === void 0x0 && (u5rxo = 0x0);
            if (!u5rxo) {
                var tb5ok;
                if (_dx89 == 'json' || _dx89 == 'atlas') tb5ok = wnze1h['getJson'](gvj2a['data']);else _dx89 == 'xml' ? tb5ok = lc$_0m['parseXMLFromString'](gvj2a['data']) : tb5ok = gvj2a['data'];
                d8xu09['onLoaded'](tb5ok), !wnze1h['isZiYu'] && wnze1h['isPosMsgYu'] && _dx89 != 'arraybuffer' && wx['postMessage']({
                    'url': zh6s,
                    'data': tb5ok,
                    'isLoad': !![]
                });
            } else u5rxo == 0x1 && wnze1h['EnvConfig']['load']['call'](d8xu09, zh6s, _dx89, znh1w, cm4i3$, abj);
        }, s2jw6y(sw6h2, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), sw6h2;
    }(),
        k5otb = function (ajs2v) {
        function yvsa2() {
            yvsa2['__super']['call'](this);
            ;
        }
        return or98(yvsa2, 'laya.wx.mini.MiniFileMgr', ajs2v), yvsa2['isLoadFile'] = function (vjgyfa) {
            return yvsa2['_fileTypeArr']['indexOf'](vjgyfa) != -0x1 ? !![] : ![];
        }, yvsa2['getFileInfo'] = function (n1p) {
            var ml4c$ = n1p['split']('?')[0x0],
                bfktv = yvsa2['filesListObj'][ml4c$];
            if (bfktv == null) return null;else return bfktv;
            return null;
        }, yvsa2['onFileUpdate'] = function (vjyg2, ci$_) {
            var jbvfag = vjyg2['split']('/'),
                kr75o = jbvfag[jbvfag['length'] - 0x1],
                abjfgv = yvsa2['getFileInfo'](ci$_);
            if (abjfgv == null) yvsa2['onSaveFile'](ci$_, kr75o);else {
                if (abjfgv['readyUrl'] != ci$_) yvsa2['remove'](kr75o, ci$_);
            }
        }, yvsa2['exits'] = function (dl$9_, $lm4) {
            var kf5 = yvsa2['getFileNativePath'](dl$9_);
            yvsa2['fs']['getFileInfo']({
                'filePath': kf5,
                'success': function (fjvgy) {
                    $lm4 != null && $lm4['runWith']([0x0, fjvgy]);
                },
                'fail': function (oku57) {
                    $lm4 != null && $lm4['runWith']([0x1, oku57]);
                }
            });
        }, yvsa2['read'] = function (x89udr, r5xou, cli$_, $l_d0m) {
            r5xou === void 0x0 && (r5xou = 'ascill'), $l_d0m === void 0x0 && ($l_d0m = '');
            var tbgvaf;
            $l_d0m != '' ? tbgvaf = yvsa2['getFileNativePath'](x89udr) : tbgvaf = x89udr, yvsa2['fs']['readFile']({
                'filePath': tbgvaf,
                'encoding': r5xou,
                'success': function (_0$9) {
                    cli$_ != null && cli$_['runWith']([0x0, _0$9]);
                },
                'fail': function (ur5ox) {
                    if (ur5ox && $l_d0m != '') yvsa2['down']($l_d0m, r5xou, cli$_, $l_d0m);else cli$_ != null && cli$_['runWith']([0x1]);
                }
            });
        }, yvsa2['readNativeFile'] = function (xr87ou, swhnz6) {
            yvsa2['fs']['readFile']({
                'filePath': xr87ou,
                'encoding': '',
                'success': function (hw6szn) {
                    swhnz6 != null && swhnz6['runWith']([0x0]);
                },
                'fail': function (tkfbvg) {
                    swhnz6 != null && swhnz6['runWith']([0x1]);
                }
            });
        }, yvsa2['down'] = function (ur78x, ur7o5, ru8x7o, d89_x) {
            ur7o5 === void 0x0 && (ur7o5 = 'ascill'), d89_x === void 0x0 && (d89_x = '');
            var u5ox = yvsa2['getFileNativePath'](d89_x),
                en1zp = yvsa2['wxdown']({
                'url': ur78x,
                'filePath': u5ox,
                'success': function (xd9u08) {
                    if (xd9u08['statusCode'] === 0xc8) yvsa2['readFile'](xd9u08['filePath'], ur7o5, ru8x7o, d89_x);
                },
                'fail': function (md$_) {
                    ru8x7o != null && ru8x7o['runWith']([0x1, md$_]);
                }
            });
            en1zp['onProgressUpdate'](function (d980ux) {
                ru8x7o != null && ru8x7o['runWith']([0x2, d980ux['progress']]);
            });
        }, yvsa2['readFile'] = function (otb, sjva2y, k7rto5, zne1h) {
            sjva2y === void 0x0 && (sjva2y = 'ascill'), zne1h === void 0x0 && (zne1h = ''), yvsa2['fs']['readFile']({
                'filePath': otb,
                'encoding': sjva2y,
                'success': function (nzehw1) {
                    if (otb['indexOf']('http://') != -0x1 || otb['indexOf']('https://') != -0x1) yvsa2['onFileUpdate'](otb, zne1h);
                    k7rto5 != null && k7rto5['runWith']([0x0, nzehw1]);
                },
                'fail': function (lc$_i) {
                    if (lc$_i) k7rto5 != null && k7rto5['runWith']([0x1, lc$_i]);
                }
            });
        }, yvsa2['downImg'] = function (m0$d_, ci$ml4, i4$cm) {
            i4$cm === void 0x0 && (i4$cm = '');
            var _d8l = yvsa2['wxdown']({
                'url': m0$d_,
                'success': function ($i43c) {
                    $i43c['statusCode'] === 0xc8 && yvsa2['copyFile']($i43c['tempFilePath'], i4$cm, ci$ml4);
                },
                'fail': function (xr9o) {
                    ci$ml4 != null && ci$ml4['runWith']([0x1, xr9o]);
                }
            });
        }, yvsa2['copyFile'] = function (d890ux, jagyvf, dl9$_0) {
            var $_mc = d890ux['split']('/'),
                fgajv = $_mc[$_mc['length'] - 0x1],
                z6enh = jagyvf['split']('?')[0x0],
                c_$0m = yvsa2['getFileInfo'](jagyvf),
                t5gkfb = yvsa2['getFileNativePath'](fgajv);
            yvsa2['fs']['copyFile']({
                'srcPath': d890ux,
                'destPath': t5gkfb,
                'success': function (e1zwh) {
                    if (!c_$0m) yvsa2['onSaveFile'](jagyvf, fgajv), dl9$_0 != null && dl9$_0['runWith']([0x0]);else {
                        if (c_$0m['readyUrl'] != jagyvf) yvsa2['remove'](fgajv, jagyvf, dl9$_0);
                    }
                },
                'fail': function (im$c43) {
                    dl9$_0 != null && dl9$_0['runWith']([0x1, im$c43]);
                }
            });
        }, yvsa2['getFileNativePath'] = function (nhzw6) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + nhzw6;
        }, yvsa2['remove'] = function (d9u8x, sw2h6n, c4ml) {
            sw2h6n === void 0x0 && (sw2h6n = '');
            var vgfajb = yvsa2['getFileInfo'](sw2h6n),
                d0$l_9 = yvsa2['getFileNativePath'](vgfajb['md5']);
            c$lm_['loader']['clearRes'](vgfajb['readyUrl']), yvsa2['fs']['unlink']({
                'filePath': d0$l_9,
                'success': function (ud98x) {
                    if (sw2h6n != '') yvsa2['onSaveFile'](sw2h6n, d9u8x);
                    c4ml != null && c4ml['runWith']([0x0]);
                },
                'fail': function (pz1) {}
            });
        }, yvsa2['onSaveFile'] = function (qim3, d8x90u) {
            var gtaf = qim3['split']('?')[0x0];
            yvsa2['filesListObj'][gtaf] = {
                'md5': d8x90u,
                'readyUrl': qim3
            }, yvsa2['fs']['writeFile']({
                'filePath': yvsa2['fileNativeDir'] + '/' + yvsa2['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](yvsa2['filesListObj']),
                'success': function (o9r8u) {
                    console['log']('写入测试测试成功：', o9r8u);
                },
                'fail': function (fgtb) {
                    console['log']('写入测试测试失败：', fgtb);
                }
            });
        }, yvsa2['existDir'] = function (whe1z, wzhsn) {
            yvsa2['fs']['mkdir']({
                'dirPath': whe1z,
                'success': function (ws2hn) {
                    wzhsn != null && wzhsn['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (kgtbf5) {
                    if (kgtbf5['errMsg']['indexOf']('file already exists') != -0x1) yvsa2['readSync'](yvsa2['fileListName'], 'utf8', wzhsn);else wzhsn != null && wzhsn['runWith']([0x1, kgtbf5]);
                }
            });
        }, yvsa2['readSync'] = function (bgk5ft, kbot7, jayvfg, $4cm3) {
            kbot7 === void 0x0 && (kbot7 = 'ascill'), $4cm3 === void 0x0 && ($4cm3 = '');
            var u8rxo9 = yvsa2['getFileNativePath'](bgk5ft),
                jvsy2;
            try {
                jvsy2 = yvsa2['fs']['readFileSync'](u8rxo9), jayvfg != null && jayvfg['runWith']([0x0, { 'data': jvsy2 }]);
            } catch (tkvgb) {
                jayvfg != null && jayvfg['runWith']([0x1]);
            }
        }, yvsa2['readCache'] = function () {}, yvsa2['writeCache'] = function (x90du) {
            var avgbj = readyUrl['split']('?')[0x0];
            yvsa2['filesListObj'][avgbj] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, yvsa2['fs']['writeFile']({
                'filePath': yvsa2['fileNativeDir'] + '/' + yvsa2['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](yvsa2['filesListObj']),
                'success': function (j2agv) {},
                'fail': function (u098dx) {}
            });
        }, yvsa2['setNativeFileDir'] = function (gb5tfk) {
            yvsa2['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + gb5tfk;
        }, yvsa2['filesListObj'] = {}, yvsa2['fileNativeDir'] = null, yvsa2['fileListName'] = 'layaairfiles.txt', yvsa2['ziyuFileData'] = {}, s2jw6y(yvsa2, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), yvsa2;
    }(vtgfba),
        we1h = function (hnwez6) {
        function ic4lm$() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], ic4lm$['__super']['call'](this), this['_sound'] = ic4lm$['_createSound'](), this['_chanell'] = new y26saj(this['_sound']);
        }
        or98(ic4lm$, 'laya.wx.mini.MiniSound', hnwez6);
        var wh6ne = ic4lm$['prototype'];
        return wh6ne['load'] = function (vay2g) {
            var mci = this;
            vay2g = dx9_0['formatURL'](vay2g), this['url'] = vay2g;
            if (ic4lm$['_audioCache'][vay2g]) {
                this['event']('complete');
                return;
            }
            function vjgyf() {
                if (ic4lm$['_null'] != undefined) mci['_sound']['onCanplay'](ic4lm$['_null']), mci['_sound']['onError'](ic4lm$['_null']);else try {
                    mci['_sound']['onCanplay'](null), mci['_sound']['onError'](null), ic4lm$['_null'] = null;
                } catch (xrdu89) {
                    console['warn']('[wxmini] _clearSound:' + xrdu89), mci['_sound']['onCanplay'](uxo9), mci['_sound']['onError'](uxo9), ic4lm$['_null'] = uxo9;
                }
            }
            function k5bgft() {
                ewhn1['loaded'] = !![], ewhn1['event']('complete'), ic4lm$['_audioCache'][ewhn1['url']] = ewhn1;
            }
            function ku5or7(l0d_9$) {
                console['error']('errCode=' + l0d_9$['errCode'] + '  errMsg=' + l0d_9$['errMsg']), ewhn1['event']('error');
            }
            function uxo9() {}
            this['_sound']['onCanplay'](k5bgft), this['_sound']['onError'](ku5or7), this['_sound']['src'] = vay2g;
            var ewhn1 = this;
        }, wh6ne['play'] = function (gbftva, j2y6sw) {
            gbftva === void 0x0 && (gbftva = 0x0), j2y6sw === void 0x0 && (j2y6sw = 0x0);
            var gajy2v, u0x8;
            if (this['url'] == udx08['_tMusic']) {
                if (!ic4lm$['_musicAudio']) ic4lm$['_musicAudio'] = this['_sound'];
                gajy2v = ic4lm$['_musicAudio'], u0x8 = this['_chanell'];
            } else gajy2v = this['_sound'], u0x8 = this['_chanell'];
            return gajy2v['src'] = this['url'], gajy2v['startTime'] = 0x0, u0x8['isStopped'] && (u0x8['url'] = this['url'], u0x8['loops'] = j2y6sw, u0x8['startTime'] = gbftva, u0x8['play'](), udx08['addChannel'](u0x8)), u0x8;
        }, wh6ne['dispose'] = function () {
            var g5tkb = ic4lm$['_audioCache'][this['url']];
            g5tkb && (g5tkb['src'] = '', delete ic4lm$['_audioCache'][this['url']]);
        }, ox9ur8(0x0, wh6ne, 'duration', function () {
            return this['_sound']['duration'];
        }), ic4lm$['_createSound'] = function () {
            ic4lm$['_id']++;
            var rd8ux = wnze1h['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return rd8ux;
        }, ic4lm$['_musicAudio'] = null, ic4lm$['_id'] = 0x0, ic4lm$['_audioCache'] = {}, ic4lm$['_null'] = undefined, ic4lm$;
    }(vtgfba),
        y26saj = function (pnh1ez) {
        function ehp1nz(jvgfb) {
            this['_audio'] = null, this['_onEnd'] = null, ehp1nz['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = jvgfb, this['_onEnd'] = lc$_0m['bind'](this['__onEnd'], this), jvgfb['onEnded'](this['_onEnd']);
        }
        or98(ehp1nz, 'laya.wx.mini.MiniSoundChannel', pnh1ez);
        var ygj2a = ehp1nz['prototype'];
        return ygj2a['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (c$lm_['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, ygj2a['__onNull'] = function () {}, ygj2a['play'] = function () {
            this['isStopped'] = ![], udx08['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, ygj2a['stop'] = function () {
            this['isStopped'] = !![], udx08['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, ygj2a['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, ygj2a['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], udx08['addChannel'](this), this['_audio']['play']();
        }, ox9ur8(0x0, ygj2a, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), ox9ur8(0x0, ygj2a, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), ox9ur8(0x0, ygj2a, 'volume', function () {
            return 0x1;
        }, function (w6nhzs) {}), ehp1nz['_null'] = undefined, ehp1nz;
    }(t5f7kb),
        nze1hp = function () {
        function h1wenz() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = wnze1h['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        or98(h1wenz, 'laya.wx.mini.MiniVideo');
        var zh6e = h1wenz['prototype'];
        return zh6e['on'] = function (bvtgaf, bjfag, sjw6y) {
            if (bvtgaf == 'loadedmetadata') this['onPlayFunc'] = sjw6y['bind'](bjfag), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else bvtgaf == 'ended' && (this['onEndedFunC'] = sjw6y['bind'](bjfag), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, zh6e['onTimeUpdateFunc'] = function (w6h2sn) {
            this['position'] = w6h2sn['position'], this['_duration'] = w6h2sn['duration'];
        }, zh6e['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, zh6e['onended'] = function (hn6ze, z1enhw) {
            this['onEndedFunC'] = z1enhw['bind'](hn6ze), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, zh6e['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, zh6e['off'] = function (pnzeh, i3cm4$, _d890x) {
            if (pnzeh == 'loadedmetadata') this['onPlayFunc'] = _d890x['bind'](i3cm4$), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else pnzeh == 'ended' && (this['onEndedFunC'] = _d890x['bind'](i3cm4$), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, zh6e['load'] = function (xrou9) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = xrou9;
        }, zh6e['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, zh6e['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, zh6e['size'] = function (o7xur, or7ku5) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = o7xur, this['videoElement']['height'] = or7ku5;
        }, zh6e['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, zh6e['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, ox9ur8(0x0, zh6e, 'duration', function () {
            return this['_duration'];
        }), ox9ur8(0x0, zh6e, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (xoru57) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = xoru57;
        }), ox9ur8(0x0, zh6e, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), ox9ur8(0x0, zh6e, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), ox9ur8(0x0, zh6e, 'ended', function () {
            return this['videoend'];
        }), ox9ur8(0x0, zh6e, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (fbtk5) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = fbtk5;
        }), ox9ur8(0x0, zh6e, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (nezh) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = nezh;
        }), ox9ur8(0x0, zh6e, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (i3$4) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = i3$4;
        }), ox9ur8(0x0, zh6e, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), ox9ur8(0x0, zh6e, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (d80x) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = d80x;
        }), ox9ur8(0x0, zh6e, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (hw26ns) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = hw26ns;
        }), ox9ur8(0x0, zh6e, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), ox9ur8(0x0, zh6e, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function ($4c3im) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = $4c3im;
        }), ox9ur8(0x0, zh6e, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (m$_ic) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = m$_ic;
        }), ox9ur8(0x0, zh6e, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (_0mdl) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = _0mdl;
        }), h1wenz;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var b7f5 in Laya) {
        var ftkv = Laya[b7f5];
        ftkv && ftkv['__isclass'] && (exports[b7f5] = ftkv);
    }
});