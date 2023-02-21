var f = wx.$B;
(function (window, document, sziae3) {
    var jy0pd8 = sziae3['un'],
        $92nhf = sziae3['uns'],
        azts = sziae3['static'],
        bqlwgk = sziae3['class'],
        x0q8rp = sziae3['getset'],
        py8j = sziae3['__newvec'],
        rbkx8q = laya['utils']['Browser'],
        lw1 = laya['events']['Event'],
        zi7a3e = laya['events']['EventDispatcher'],
        i4zv = laya['resource']['HTMLImage'],
        bg_wl6 = laya['utils']['Handler'],
        $hunf2 = laya['display']['Input'],
        ov4sit = laya['net']['Loader'],
        _415 = laya['maths']['Matrix'],
        o_4v1 = laya['renders']['Render'],
        ae9f3 = laya['utils']['RunDriver'],
        tasze = laya['media']['Sound'],
        easzi3 = laya['media']['SoundChannel'],
        tvz4is = laya['media']['SoundManager'],
        h$2um = laya['display']['Stage'],
        gblkw6 = laya['net']['URL'],
        wgkqlb = laya['utils']['Utils'],
        h$fu2n = function () {
        function tso14() {}
        return bqlwgk(tso14, 'laya.wx.mini.MiniAdpter'), tso14['getJson'] = function ($7f329) {
            return JSON['parse']($7f329);
        }, tso14['init'] = function (eatzsi, ieazts) {
            eatzsi === void 0x0 && (eatzsi = ![]), ieazts === void 0x0 && (ieazts = ![]);
            if (tso14['_inited']) return;
            tso14['window'] = window;
            if (tso14['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            tso14['_inited'] = !![], tso14['isZiYu'] = ieazts, tso14['isPosMsgYu'] = eatzsi, tso14['EnvConfig'] = {}, !tso14['isZiYu'] && (p8rxqk['setNativeFileDir']('/layaairGame'), p8rxqk['existDir'](p8rxqk['fileNativeDir'], bg_wl6['create'](tso14, tso14['onMkdirCallBack']))), tso14['window']['focus'] = function () {}, sziae3['getUrlPath'] = function () {}, tso14['window']['logtime'] = function (k8rbqx) {}, tso14['window']['alertTimeLog'] = function (p8jd) {}, tso14['window']['resetShareInfo'] = function () {}, tso14['window']['CanvasRenderingContext2D'] = function () {}, tso14['window']['CanvasRenderingContext2D']['prototype'] = tso14['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], tso14['window']['document']['body']['appendChild'] = function () {}, tso14['EnvConfig']['pixelRatioInt'] = 0x0, ae9f3['getPixelRatio'] = tso14['pixelRatio'], tso14['_preCreateElement'] = rbkx8q['createElement'], rbkx8q['createElement'] = tso14['createElement'], ae9f3['createShaderCondition'] = tso14['createShaderCondition'], wgkqlb['parseXMLFromString'] = tso14['parseXMLFromString'], $hunf2['_createInputElement'] = s4ivt['_createInputElement'], tso14['EnvConfig']['load'] = ov4sit['prototype']['load'], ov4sit['prototype']['load'] = rpkqx8['prototype']['load'], tso14['isZiYu'] && eatzsi && wx['onMessage'](function (ase3zi) {
                ase3zi['isLoad'] && (p8rxqk['ziyuFileData'][ase3zi['url']] = ase3zi['data']);
            });
        }, tso14['onMkdirCallBack'] = function (v5_o, qp8x) {
            if (!v5_o) p8rxqk['filesListObj'] = JSON['parse'](qp8x['data']);
        }, tso14['pixelRatio'] = function () {
            if (!tso14['EnvConfig']['pixelRatioInt']) try {
                var $fnh = wx['getSystemInfoSync']();
                return tso14['EnvConfig']['pixelRatioInt'] = $fnh['pixelRatio'], $fnh = $fnh, $fnh['pixelRatio'];
            } catch (xqrkb) {}
            return tso14['EnvConfig']['pixelRatioInt'];
        }, tso14['createElement'] = function (bgw6l_) {
            if (bgw6l_ == 'canvas') {
                var rkbgl;
                return tso14['idx'] == 0x1 ? tso14['isZiYu'] ? (rkbgl = sharedCanvas, rkbgl['style'] = {}) : rkbgl = window['canvas'] : rkbgl = window['wx']['createCanvas'](), tso14['idx']++, rkbgl;
            } else {
                if (bgw6l_ == 'textarea' || bgw6l_ == 'input') return tso14['onCreateInput'](bgw6l_);else {
                    if (bgw6l_ == 'div') {
                        var hun$ = tso14['_preCreateElement'](bgw6l_);
                        return hun$['contains'] = function (x8y0r) {
                            return null;
                        }, hun$['removeChild'] = function (ypdx) {}, hun$;
                    } else return tso14['_preCreateElement'](bgw6l_);
                }
            }
        }, tso14['onCreateInput'] = function (sez) {
            var rklqb = tso14['_preCreateElement'](sez);
            return rklqb['focus'] = s4ivt['wxinputFocus'], rklqb['blur'] = s4ivt['wxinputblur'], rklqb['style'] = {}, rklqb['value'] = 0x0, rklqb['parentElement'] = {}, rklqb['placeholder'] = {}, rklqb['type'] = {}, rklqb['setColor'] = function (v4ts1o) {}, rklqb['setType'] = function (zasvit) {}, rklqb['setFontFace'] = function (gwl_56) {}, rklqb['addEventListener'] = function (bg_) {}, rklqb['contains'] = function (io4) {
                return null;
            }, rklqb['removeChild'] = function (astzv) {}, rklqb;
        }, tso14['createShaderCondition'] = function (ef7a9) {
            var bwlgqk = this,
                $37f = function () {
                var o1_45 = ef7a9;
                return bwlgqk[ef7a9['replace']('this.', '')];
            };
            return $37f;
        }, tso14['EnvConfig'] = null, tso14['window'] = null, tso14['_preCreateElement'] = null, tso14['_inited'] = ![], tso14['wxRequest'] = null, tso14['systemInfo'] = null, tso14['version'] = '0.0.1', tso14['isZiYu'] = ![], tso14['isPosMsgYu'] = ![], tso14['parseXMLFromString'] = function (toi) {
            var a93ez7, vzts;
            toi = toi['replace'](/>\s+</g, '><');
            try {
                a93ez7 = new window['Parser']['DOMParser']()['parseFromString'](toi, 'text/xml');
            } catch (bglqk) {
                throw '需要引入xml解析库文件';
            }
            return a93ez7;
        }, tso14['idx'] = 0x1, tso14;
    }(),
        blqgkw = function () {
        function svzt4() {}
        bqlwgk(svzt4, 'laya.wx.mini.MiniImage');
        var _5w1l = svzt4['prototype'];
        return _5w1l['_loadImage'] = function (bkgr) {
            var x80dp = this,
                krqg = ![];
            bkgr['indexOf']('layaNativeDir/') == -0x1 && (krqg = !![], bkgr = gblkw6['formatURL'](bkgr));
            if (!p8rxqk['getFileInfo'](bkgr)) {
                if (bkgr['indexOf']('http://') != -0x1 || bkgr['indexOf']('https://') != -0x1) p8rxqk['downImg'](bkgr, new bg_wl6(svzt4, svzt4['onDownImgCallBack'], [bkgr, x80dp]), bkgr);else svzt4['onCreateImage'](bkgr, x80dp, !![]);
            } else svzt4['onCreateImage'](bkgr, x80dp, !krqg);
        }, svzt4['onDownImgCallBack'] = function (tvosi4, i7z3ae, jypd80) {
            if (!jypd80) svzt4['onCreateImage'](tvosi4, i7z3ae);else i7z3ae['onError'](null);
        }, svzt4['onCreateImage'] = function (f379e, o1v45t, ryx0p8) {
            ryx0p8 === void 0x0 && (ryx0p8 = ![]);
            var wk6l;
            if (!ryx0p8) {
                var aitsz = p8rxqk['getFileInfo'](f379e),
                    lb6kg = aitsz['md5'];
                wk6l = p8rxqk['getFileNativePath'](lb6kg);
            } else wk6l = f379e;
            if (o1v45t['imgCache'] == null) o1v45t['imgCache'] = {};
            var azits;
            function nh2$f() {
                azits['onload'] = null, azits['onerror'] = null, delete o1v45t['imgCache'][f379e];
            }
            ;
            var fn2h9 = function () {
                nh2$f(), o1v45t['onLoaded'](azits);
            },
                wl65 = function () {
                nh2$f(), o1v45t['event']('error', 'Load image failed');
            };
            o1v45t['_type'] == 'nativeimage' ? (azits = new rbkx8q['window']['Image'](), azits['crossOrigin'] = '', azits['onload'] = fn2h9, azits['onerror'] = wl65, azits['src'] = wk6l, o1v45t['imgCache'][f379e] = azits) : new i4zv['create'](wk6l, {
                'onload': fn2h9,
                'onerror': wl65,
                'onCreate': function (pyx0d8) {
                    azits = pyx0d8, o1v45t['imgCache'][f379e] = pyx0d8;
                }
            });
        }, svzt4;
    }(),
        s4ivt = function () {
        function w_1l5() {}
        return bqlwgk(w_1l5, 'laya.wx.mini.MiniInput'), w_1l5['_createInputElement'] = function () {
            $hunf2['_initInput']($hunf2['area'] = rbkx8q['createElement']('textarea')), $hunf2['_initInput']($hunf2['input'] = rbkx8q['createElement']('input')), $hunf2['inputContainer'] = rbkx8q['createElement']('div'), $hunf2['inputContainer']['style']['position'] = 'absolute', $hunf2['inputContainer']['style']['zIndex'] = 0x186a0, rbkx8q['container']['appendChild']($hunf2['inputContainer']), $hunf2['inputContainer']['setPos'] = function (qklrg, azitvs) {
                $hunf2['inputContainer']['style']['left'] = qklrg + 'px', $hunf2['inputContainer']['style']['top'] = azitvs + 'px';
            }, sziae3['stage']['on']('resize', null, w_1l5['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (ow5_61) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), tvz4is['_soundClass'] = l6b_w, tvz4is['_musicClass'] = l6b_w, window['_videoClass'] = wlbkq;
        }, w_1l5['_onStageResize'] = function () {
            var u$hn = sziae3['stage']['_canvasTransform']['identity']();
            u$hn['scale'](rbkx8q['width'] / o_4v1['canvas']['width'] / ae9f3['getPixelRatio'](), rbkx8q['height'] / o_4v1['canvas']['height'] / ae9f3['getPixelRatio']());
        }, w_1l5['wxinputFocus'] = function (l6wbk) {
            var tvio = $hunf2['inputElement']['target'];
            if (tvio && !tvio['editable']) return;
            h$fu2n['window']['wx']['offKeyboardConfirm'](), h$fu2n['window']['wx']['offKeyboardInput'](), h$fu2n['window']['wx']['showKeyboard']({
                'defaultValue': tvio['text'],
                'maxLength': tvio['maxChars'],
                'multiple': tvio['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (t4viz) {},
                'fail': function (ztaies) {}
            }), h$fu2n['window']['wx']['onKeyboardConfirm'](function (zisv4t) {
                var rxpy08 = zisv4t ? zisv4t['value'] : '';
                tvio['text'] = rxpy08, tvio['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), h$fu2n['window']['wx']['onKeyboardInput'](function (vosi) {
                var w6lkbg = vosi ? vosi['value'] : '';
                if (!tvio['multiline']) {
                    if (w6lkbg['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                tvio['text'] = w6lkbg, tvio['event']('input');
            });
        }, w_1l5['inputEnter'] = function () {
            $hunf2['inputElement']['target']['focus'] = ![];
        }, w_1l5['wxinputblur'] = function () {
            w_1l5['hideKeyboard']();
        }, w_1l5['hideKeyboard'] = function () {
            h$fu2n['window']['wx']['offKeyboardConfirm'](), h$fu2n['window']['wx']['offKeyboardInput'](), h$fu2n['window']['wx']['hideKeyboard']({
                'success': function ($fh2n) {
                    console['log']('隐藏键盘');
                },
                'fail': function ($273) {
                    console['log']('隐藏键盘出错:' + ($273 ? $273['errMsg'] : ''));
                }
            });
        }, w_1l5;
    }(),
        rpkqx8 = function () {
        function r8xk() {}
        bqlwgk(r8xk, 'laya.wx.mini.MiniLoader');
        var fe327 = r8xk['prototype'];
        return fe327['load'] = function (lqkrbg, lwb6g, aisvt, w65lg, nhf9$) {
            aisvt === void 0x0 && (aisvt = !![]), nhf9$ === void 0x0 && (nhf9$ = ![]);
            var qrp80 = this;
            qrp80['_url'] = lqkrbg;
            if (lqkrbg['indexOf']('data:image') === 0x0) qrp80['_type'] = lwb6g = 'image';else qrp80['_type'] = lwb6g || (lwb6g = qrp80['getTypeFromUrl'](lqkrbg));
            qrp80['_cache'] = aisvt, qrp80['_data'] = null;
            var rg = 'ascii';
            if (lqkrbg['indexOf']('.fnt') != -0x1) rg = 'utf8';else lwb6g == 'arraybuffer' && (rg = '');
            ;
            var gkbq = wgkqlb['getFileExtension'](lqkrbg);
            if (r8xk['_fileTypeArr']['indexOf'](gkbq) != -0x1) h$fu2n['EnvConfig']['load']['call'](this, lqkrbg, lwb6g, aisvt, w65lg, nhf9$);else {
                if (!p8rxqk['getFileInfo'](lqkrbg)) {
                    if (lqkrbg['indexOf']('layaNativeDir/') != -0x1) {
                        if (h$fu2n['isZiYu']) {
                            var qwbkl = p8rxqk['ziyuFileData'][lqkrbg];
                            qrp80['onLoaded'](qwbkl);
                            return;
                        } else {
                            cosnole['log']('read read'), p8rxqk['read'](lqkrbg, rg, new bg_wl6(r8xk, r8xk['onReadNativeCallBack'], [rg, lqkrbg, lwb6g, aisvt, w65lg, nhf9$, qrp80]));
                            return;
                        }
                    }
                    if (gblkw6['rootPath'] == '') var tv4os = lqkrbg;else tv4os = lqkrbg['split'](gblkw6['rootPath'])[0x0];
                    lqkrbg['indexOf']('http://') != -0x1 || lqkrbg['indexOf']('https://') != -0x1 ? h$fu2n['EnvConfig']['load']['call'](qrp80, lqkrbg, lwb6g, aisvt, w65lg, nhf9$) : p8rxqk['readFile'](tv4os, rg, new bg_wl6(r8xk, r8xk['onReadNativeCallBack'], [rg, lqkrbg, lwb6g, aisvt, w65lg, nhf9$, qrp80]), lqkrbg);
                } else h$fu2n['EnvConfig']['load']['call'](this, lqkrbg, lwb6g, aisvt, w65lg, nhf9$);
            }
        }, fe327['resMgrLoad'] = function (vo41t5, pdxy80, izs4t, wqkgb, o_4v15, vs4io, bgxrk) {
            izs4t === void 0x0 && (izs4t = 0x0), wqkgb === void 0x0 && (wqkgb = ![]), o_4v15 === void 0x0 && (o_4v15 = ![]), vs4io === void 0x0 && (vs4io = 0x0), bgxrk === void 0x0 && (bgxrk = 0x3), vo41t5['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', vo41t5), h$fu2n['EnvConfig']['resMgrLoad'](vo41t5, (p08dyx, nhmu$2, xrpy08) => {
                r8xk['prototype']['resMgrLoadCallBack'](p08dyx, nhmu$2, xrpy08, pdxy80);
            }, izs4t, wqkgb, o_4v15, vs4io, bgxrk);
        }, fe327['resMgrLoadCallBack'] = function (st14, rxkbqg, w5_o, eisa3z) {
            console['log']('buff:::', st14, w5_o, p8rxqk['fileNativeDir'] + '///' + p8rxqk['fileListName']), eisa3z(st14, rxkbqg, w5_o);
        }, fe327['clearRes'] = function (u2m$hn, oi4vt) {
            oi4vt === void 0x0 && (oi4vt = ![]);
            var aeszti = this;
            aeszti['clearRes'](u2m$hn, oi4vt);
            var a3zi7e = p8rxqk['getFileInfo'](u2m$hn);
            if (a3zi7e && (u2m$hn['indexOf']('http://') != -0x1 || u2m$hn['indexOf']('https://') != -0x1)) {
                var tesazi = a3zi7e['md5'],
                    saietz = p8rxqk['getFileNativePath'](tesazi);
                p8rxqk['remove'](saietz);
            }
        }, r8xk['onReadNativeCallBack'] = function (krbqx8, aetsiz, $3f29, w_l5g6, x80qpr, izvast, klqw, lqgkwb, tivso) {
            w_l5g6 === void 0x0 && (w_l5g6 = !![]), izvast === void 0x0 && (izvast = ![]), lqgkwb === void 0x0 && (lqgkwb = 0x0);
            if (!lqgkwb) {
                var gwb_l;
                if ($3f29 == 'json' || $3f29 == 'atlas') gwb_l = h$fu2n['getJson'](tivso['data']);else $3f29 == 'xml' ? gwb_l = wgkqlb['parseXMLFromString'](tivso['data']) : gwb_l = tivso['data'];
                klqw['onLoaded'](gwb_l), !h$fu2n['isZiYu'] && h$fu2n['isPosMsgYu'] && $3f29 != 'arraybuffer' && wx['postMessage']({
                    'url': aetsiz,
                    'data': gwb_l,
                    'isLoad': !![]
                });
            } else lqgkwb == 0x1 && h$fu2n['EnvConfig']['load']['call'](klqw, aetsiz, $3f29, w_l5g6, x80qpr, izvast);
        }, azts(r8xk, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), r8xk;
    }(),
        p8rxqk = function (o5_164) {
        function q8pxrk() {
            q8pxrk['__super']['call'](this);
            ;
        }
        return bqlwgk(q8pxrk, 'laya.wx.mini.MiniFileMgr', o5_164), q8pxrk['isLoadFile'] = function (tsze) {
            return q8pxrk['_fileTypeArr']['indexOf'](tsze) != -0x1 ? !![] : ![];
        }, q8pxrk['getFileInfo'] = function (i3zse) {
            var l61 = i3zse['split']('?')[0x0],
                tiaszv = q8pxrk['filesListObj'][l61];
            if (tiaszv == null) return null;else return tiaszv;
            return null;
        }, q8pxrk['onFileUpdate'] = function (yp0, y0p8j) {
            var f239$ = yp0['split']('/'),
                qrxbkg = f239$[f239$['length'] - 0x1],
                xbk8qr = q8pxrk['getFileInfo'](y0p8j);
            if (xbk8qr == null) q8pxrk['onSaveFile'](y0p8j, qrxbkg);else {
                if (xbk8qr['readyUrl'] != y0p8j) q8pxrk['remove'](qrxbkg, y0p8j);
            }
        }, q8pxrk['exits'] = function (to54, wlg6) {
            var ef9a73 = q8pxrk['getFileNativePath'](to54);
            q8pxrk['fs']['getFileInfo']({
                'filePath': ef9a73,
                'success': function (gblkw) {
                    wlg6 != null && wlg6['runWith']([0x0, gblkw]);
                },
                'fail': function (gbk6wl) {
                    wlg6 != null && wlg6['runWith']([0x1, gbk6wl]);
                }
            });
        }, q8pxrk['read'] = function (_glb6w, vos14, b8rqxk, u$2nf) {
            vos14 === void 0x0 && (vos14 = 'ascill'), u$2nf === void 0x0 && (u$2nf = '');
            var xy0p8r;
            u$2nf != '' ? xy0p8r = q8pxrk['getFileNativePath'](_glb6w) : xy0p8r = _glb6w, q8pxrk['fs']['readFile']({
                'filePath': xy0p8r,
                'encoding': vos14,
                'success': function (v_154) {
                    b8rqxk != null && b8rqxk['runWith']([0x0, v_154]);
                },
                'fail': function (t4sv) {
                    if (t4sv && u$2nf != '') q8pxrk['down'](u$2nf, vos14, b8rqxk, u$2nf);else b8rqxk != null && b8rqxk['runWith']([0x1]);
                }
            });
        }, q8pxrk['readNativeFile'] = function (iazes3, fnh) {
            q8pxrk['fs']['readFile']({
                'filePath': iazes3,
                'encoding': '',
                'success': function (kq8) {
                    fnh != null && fnh['runWith']([0x0]);
                },
                'fail': function (f7$9h) {
                    fnh != null && fnh['runWith']([0x1]);
                }
            });
        }, q8pxrk['down'] = function (se3iza, _wgl56, itzsav, taze) {
            _wgl56 === void 0x0 && (_wgl56 = 'ascill'), taze === void 0x0 && (taze = '');
            var yjp80 = q8pxrk['getFileNativePath'](taze),
                gqlwbk = q8pxrk['wxdown']({
                'url': se3iza,
                'filePath': yjp80,
                'success': function (ie37) {
                    if (ie37['statusCode'] === 0xc8) q8pxrk['readFile'](ie37['filePath'], _wgl56, itzsav, taze);
                },
                'fail': function (d8py0j) {
                    itzsav != null && itzsav['runWith']([0x1, d8py0j]);
                }
            });
            gqlwbk['onProgressUpdate'](function (l6bkw) {
                itzsav != null && itzsav['runWith']([0x2, l6bkw['progress']]);
            });
        }, q8pxrk['readFile'] = function ($27hf, f9$7h, ae3i, lgb_w) {
            f9$7h === void 0x0 && (f9$7h = 'ascill'), lgb_w === void 0x0 && (lgb_w = ''), q8pxrk['fs']['readFile']({
                'filePath': $27hf,
                'encoding': f9$7h,
                'success': function (grbqlk) {
                    if ($27hf['indexOf']('http://') != -0x1 || $27hf['indexOf']('https://') != -0x1) q8pxrk['onFileUpdate']($27hf, lgb_w);
                    ae3i != null && ae3i['runWith']([0x0, grbqlk]);
                },
                'fail': function (_16ow) {
                    if (_16ow) ae3i != null && ae3i['runWith']([0x1, _16ow]);
                }
            });
        }, q8pxrk['downImg'] = function (u2n$f, p8xqrk, o6_14) {
            o6_14 === void 0x0 && (o6_14 = '');
            var qwbgkl = q8pxrk['wxdown']({
                'url': u2n$f,
                'success': function ($f72h9) {
                    $f72h9['statusCode'] === 0xc8 && q8pxrk['copyFile']($f72h9['tempFilePath'], o6_14, p8xqrk);
                },
                'fail': function (n$29) {
                    p8xqrk != null && p8xqrk['runWith']([0x1, n$29]);
                }
            });
        }, q8pxrk['copyFile'] = function (vt4, uh2n$m, stzi4) {
            var qkxg = vt4['split']('/'),
                ia3se = qkxg[qkxg['length'] - 0x1],
                $nhmu = uh2n$m['split']('?')[0x0],
                bwlkqg = q8pxrk['getFileInfo'](uh2n$m),
                vit4sz = q8pxrk['getFileNativePath'](ia3se);
            q8pxrk['fs']['copyFile']({
                'srcPath': vt4,
                'destPath': vit4sz,
                'success': function (ry0x8) {
                    if (!bwlkqg) q8pxrk['onSaveFile'](uh2n$m, ia3se), stzi4 != null && stzi4['runWith']([0x0]);else {
                        if (bwlkqg['readyUrl'] != uh2n$m) q8pxrk['remove'](ia3se, uh2n$m, stzi4);
                    }
                },
                'fail': function (bwqlg) {
                    stzi4 != null && stzi4['runWith']([0x1, bwqlg]);
                }
            });
        }, q8pxrk['getFileNativePath'] = function (wklqb) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + wklqb;
        }, q8pxrk['remove'] = function (wl15_6, is4tv, zsa) {
            is4tv === void 0x0 && (is4tv = '');
            var $729fh = q8pxrk['getFileInfo'](is4tv),
                _w6o51 = q8pxrk['getFileNativePath']($729fh['md5']);
            sziae3['loader']['clearRes']($729fh['readyUrl']), q8pxrk['fs']['unlink']({
                'filePath': _w6o51,
                'success': function (ist4) {
                    if (is4tv != '') q8pxrk['onSaveFile'](is4tv, wl15_6);
                    zsa != null && zsa['runWith']([0x0]);
                },
                'fail': function (kbrlgq) {}
            });
        }, q8pxrk['onSaveFile'] = function (unf$2h, ea79z3) {
            var d80pyx = unf$2h['split']('?')[0x0];
            q8pxrk['filesListObj'][d80pyx] = {
                'md5': ea79z3,
                'readyUrl': unf$2h
            }, q8pxrk['fs']['writeFile']({
                'filePath': q8pxrk['fileNativeDir'] + '/' + q8pxrk['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](q8pxrk['filesListObj']),
                'success': function (qxrp8k) {
                    console['log']('写入测试测试成功：', qxrp8k);
                },
                'fail': function (q8xrp0) {
                    console['log']('写入测试测试失败：', q8xrp0);
                }
            });
        }, q8pxrk['existDir'] = function (x80pr, vatsi) {
            q8pxrk['fs']['mkdir']({
                'dirPath': x80pr,
                'success': function (lbqkgw) {
                    vatsi != null && vatsi['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (wbgqkl) {
                    if (wbgqkl['errMsg']['indexOf']('file already exists') != -0x1) q8pxrk['readSync'](q8pxrk['fileListName'], 'utf8', vatsi);else vatsi != null && vatsi['runWith']([0x1, wbgqkl]);
                }
            });
        }, q8pxrk['readSync'] = function (ef9a3, vti4zs, _6ow, $fhn2) {
            vti4zs === void 0x0 && (vti4zs = 'ascill'), $fhn2 === void 0x0 && ($fhn2 = '');
            var _415v = q8pxrk['getFileNativePath'](ef9a3),
                pyjd80;
            try {
                pyjd80 = q8pxrk['fs']['readFileSync'](_415v), _6ow != null && _6ow['runWith']([0x0, { 'data': pyjd80 }]);
            } catch (i3eza) {
                _6ow != null && _6ow['runWith']([0x1]);
            }
        }, q8pxrk['readCache'] = function () {}, q8pxrk['writeCache'] = function (vst) {
            var stvz4i = readyUrl['split']('?')[0x0];
            q8pxrk['filesListObj'][stvz4i] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, q8pxrk['fs']['writeFile']({
                'filePath': q8pxrk['fileNativeDir'] + '/' + q8pxrk['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](q8pxrk['filesListObj']),
                'success': function (tzie) {},
                'fail': function (gxkrb) {}
            });
        }, q8pxrk['setNativeFileDir'] = function (wbgk) {
            q8pxrk['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + wbgk;
        }, q8pxrk['filesListObj'] = {}, q8pxrk['fileNativeDir'] = null, q8pxrk['fileListName'] = 'layaairfiles.txt', q8pxrk['ziyuFileData'] = {}, azts(q8pxrk, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), q8pxrk;
    }(zi7a3e),
        l6b_w = function (ov45t) {
        function tavi() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], tavi['__super']['call'](this), this['_sound'] = tavi['_createSound'](), this['_chanell'] = new kxbr8q(this['_sound']);
        }
        bqlwgk(tavi, 'laya.wx.mini.MiniSound', ov45t);
        var saziet = tavi['prototype'];
        return saziet['load'] = function (ias3ze) {
            var t4zisv = this;
            ias3ze = gblkw6['formatURL'](ias3ze), this['url'] = ias3ze;
            if (tavi['_audioCache'][ias3ze]) {
                this['event']('complete');
                return;
            }
            function l_5w61() {
                if (tavi['_null'] != undefined) t4zisv['_sound']['onCanplay'](tavi['_null']), t4zisv['_sound']['onError'](tavi['_null']);else try {
                    t4zisv['_sound']['onCanplay'](null), t4zisv['_sound']['onError'](null), tavi['_null'] = null;
                } catch (mh$2un) {
                    console['warn']('[wxmini] _clearSound:' + mh$2un), t4zisv['_sound']['onCanplay'](bqgkrl), t4zisv['_sound']['onError'](bqgkrl), tavi['_null'] = bqgkrl;
                }
            }
            function bkxgqr() {
                lwbq['loaded'] = !![], lwbq['event']('complete'), tavi['_audioCache'][lwbq['url']] = lwbq;
            }
            function kq8rbx(l516_) {
                console['error']('errCode=' + l516_['errCode'] + '  errMsg=' + l516_['errMsg']), lwbq['event']('error');
            }
            function bqgkrl() {}
            this['_sound']['onCanplay'](bkxgqr), this['_sound']['onError'](kq8rbx), this['_sound']['src'] = ias3ze;
            var lwbq = this;
        }, saziet['play'] = function (t45o, u$h2nm) {
            t45o === void 0x0 && (t45o = 0x0), u$h2nm === void 0x0 && (u$h2nm = 0x0);
            var bkgwl, ot154v;
            if (this['url'] == tvz4is['_tMusic']) {
                if (!tavi['_musicAudio']) tavi['_musicAudio'] = this['_sound'];
                bkgwl = tavi['_musicAudio'], ot154v = this['_chanell'];
            } else bkgwl = this['_sound'], ot154v = this['_chanell'];
            return bkgwl['src'] = this['url'], bkgwl['startTime'] = 0x0, ot154v['isStopped'] && (ot154v['url'] = this['url'], ot154v['loops'] = u$h2nm, ot154v['startTime'] = t45o, ot154v['play'](), tvz4is['addChannel'](ot154v)), ot154v;
        }, saziet['dispose'] = function () {
            var xqp8rk = tavi['_audioCache'][this['url']];
            xqp8rk && (xqp8rk['src'] = '', delete tavi['_audioCache'][this['url']]);
        }, x0q8rp(0x0, saziet, 'duration', function () {
            return this['_sound']['duration'];
        }), tavi['_createSound'] = function () {
            tavi['_id']++;
            var vsitza = h$fu2n['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return vsitza;
        }, tavi['_musicAudio'] = null, tavi['_id'] = 0x0, tavi['_audioCache'] = {}, tavi['_null'] = undefined, tavi;
    }(zi7a3e),
        kxbr8q = function (ea7z39) {
        function w_5l6g(wgbl6_) {
            this['_audio'] = null, this['_onEnd'] = null, w_5l6g['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = wgbl6_, this['_onEnd'] = wgkqlb['bind'](this['__onEnd'], this), wgbl6_['onEnded'](this['_onEnd']);
        }
        bqlwgk(w_5l6g, 'laya.wx.mini.MiniSoundChannel', ea7z39);
        var saeitz = w_5l6g['prototype'];
        return saeitz['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (sziae3['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, saeitz['__onNull'] = function () {}, saeitz['play'] = function () {
            this['isStopped'] = ![], tvz4is['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, saeitz['stop'] = function () {
            this['isStopped'] = !![], tvz4is['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, saeitz['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, saeitz['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], tvz4is['addChannel'](this), this['_audio']['play']();
        }, x0q8rp(0x0, saeitz, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), x0q8rp(0x0, saeitz, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), x0q8rp(0x0, saeitz, 'volume', function () {
            return 0x1;
        }, function (_o65) {}), w_5l6g['_null'] = undefined, w_5l6g;
    }(easzi3),
        wlbkq = function () {
        function p8dy0j() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = h$fu2n['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        bqlwgk(p8dy0j, 'laya.wx.mini.MiniVideo');
        var qbkr = p8dy0j['prototype'];
        return qbkr['on'] = function (jpy80, ow1_6, y0j) {
            if (jpy80 == 'loadedmetadata') this['onPlayFunc'] = y0j['bind'](ow1_6), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else jpy80 == 'ended' && (this['onEndedFunC'] = y0j['bind'](ow1_6), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, qbkr['onTimeUpdateFunc'] = function (vt1o5) {
            this['position'] = vt1o5['position'], this['_duration'] = vt1o5['duration'];
        }, qbkr['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, qbkr['onended'] = function (xk, w51o6_) {
            this['onEndedFunC'] = w51o6_['bind'](xk), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, qbkr['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, qbkr['off'] = function (kqrgb, x0y8pr, wlg6_5) {
            if (kqrgb == 'loadedmetadata') this['onPlayFunc'] = wlg6_5['bind'](x0y8pr), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else kqrgb == 'ended' && (this['onEndedFunC'] = wlg6_5['bind'](x0y8pr), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, qbkr['load'] = function (jy80pd) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = jy80pd;
        }, qbkr['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, qbkr['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, qbkr['size'] = function (a9z73, ez9a73) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = a9z73, this['videoElement']['height'] = ez9a73;
        }, qbkr['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, qbkr['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, x0q8rp(0x0, qbkr, 'duration', function () {
            return this['_duration'];
        }), x0q8rp(0x0, qbkr, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (to54v1) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = to54v1;
        }), x0q8rp(0x0, qbkr, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), x0q8rp(0x0, qbkr, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), x0q8rp(0x0, qbkr, 'ended', function () {
            return this['videoend'];
        }), x0q8rp(0x0, qbkr, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (vsz4) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = vsz4;
        }), x0q8rp(0x0, qbkr, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (bgkxq) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = bgkxq;
        }), x0q8rp(0x0, qbkr, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (nm$h2u) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = nm$h2u;
        }), x0q8rp(0x0, qbkr, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), x0q8rp(0x0, qbkr, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (a7ze39) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = a7ze39;
        }), x0q8rp(0x0, qbkr, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (y0pxd8) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = y0pxd8;
        }), x0q8rp(0x0, qbkr, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), x0q8rp(0x0, qbkr, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (_1ow6) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = _1ow6;
        }), x0q8rp(0x0, qbkr, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (xq8br) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = xq8br;
        }), x0q8rp(0x0, qbkr, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (k8b) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = k8b;
        }), p8dy0j;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var l56gw_ in Laya) {
        var oisvt = Laya[l56gw_];
        oisvt && oisvt['__isclass'] && (exports[l56gw_] = oisvt);
    }
});