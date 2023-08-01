var b = wx.$e;
(function (window, document, g46rsq) {
    var ja103 = g46rsq['un'],
        tc25 = g46rsq['uns'],
        ja13f = g46rsq['static'],
        xudkv = g46rsq['class'],
        dk52 = g46rsq['getset'],
        q4g6r = g46rsq['__newvec'],
        $ctbw = laya['utils']['Browser'],
        muv97 = laya['events']['Event'],
        mvkp = laya['events']['EventDispatcher'],
        qshgr = laya['resource']['HTMLImage'],
        x2dt5 = laya['utils']['Handler'],
        sg4r6e = laya['display']['Input'],
        o6ihqr = laya['net']['Loader'],
        fa0j = laya['maths']['Matrix'],
        puxv = laya['renders']['Render'],
        zjnya1 = laya['utils']['RunDriver'],
        bxd25k = laya['media']['Sound'],
        kx5b = laya['media']['SoundChannel'],
        ro6 = laya['media']['SoundManager'],
        w$bcl = laya['display']['Stage'],
        fj038o = laya['net']['URL'],
        kb2dx5 = laya['utils']['Utils'],
        qrg6s = function () {
        function i6q8ho() {}
        return xudkv(i6q8ho, 'laya.wx.mini.MiniAdpter'), i6q8ho['getJson'] = function (c$wlt) {
            return JSON['parse'](c$wlt);
        }, i6q8ho['init'] = function (iof3, cwtb$l) {
            iof3 === void 0x0 && (iof3 = ![]), cwtb$l === void 0x0 && (cwtb$l = ![]);
            if (i6q8ho['_inited']) return;
            i6q8ho['window'] = window;
            if (i6q8ho['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            i6q8ho['_inited'] = !![], i6q8ho['isZiYu'] = cwtb$l, i6q8ho['isPosMsgYu'] = iof3, i6q8ho['EnvConfig'] = {}, !i6q8ho['isZiYu'] && (ct$lb['setNativeFileDir']('/layaairGame'), ct$lb['existDir'](ct$lb['fileNativeDir'], x2dt5['create'](i6q8ho, i6q8ho['onMkdirCallBack']))), i6q8ho['window']['focus'] = function () {}, g46rsq['getUrlPath'] = function () {}, i6q8ho['window']['logtime'] = function (rg46qs) {}, i6q8ho['window']['alertTimeLog'] = function (ny1afj) {}, i6q8ho['window']['resetShareInfo'] = function () {}, i6q8ho['window']['CanvasRenderingContext2D'] = function () {}, i6q8ho['window']['CanvasRenderingContext2D']['prototype'] = i6q8ho['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], i6q8ho['window']['document']['body']['appendChild'] = function () {}, i6q8ho['EnvConfig']['pixelRatioInt'] = 0x0, zjnya1['getPixelRatio'] = i6q8ho['pixelRatio'], i6q8ho['_preCreateElement'] = $ctbw['createElement'], $ctbw['createElement'] = i6q8ho['createElement'], zjnya1['createShaderCondition'] = i6q8ho['createShaderCondition'], kb2dx5['parseXMLFromString'] = i6q8ho['parseXMLFromString'], sg4r6e['_createInputElement'] = xupmv['_createInputElement'], i6q8ho['EnvConfig']['load'] = o6ihqr['prototype']['load'], o6ihqr['prototype']['load'] = dxkv['prototype']['load'], i6q8ho['isZiYu'] && iof3 && wx['onMessage'](function (af013) {
                af013['isLoad'] && (ct$lb['ziyuFileData'][af013['url']] = af013['data']);
            });
        }, i6q8ho['onMkdirCallBack'] = function (r6s4, reg4s) {
            if (!r6s4) ct$lb['filesListObj'] = JSON['parse'](reg4s['data']);
        }, i6q8ho['pixelRatio'] = function () {
            if (!i6q8ho['EnvConfig']['pixelRatioInt']) try {
                var rhis = wx['getSystemInfoSync']();
                return i6q8ho['EnvConfig']['pixelRatioInt'] = rhis['pixelRatio'], rhis = rhis, rhis['pixelRatio'];
            } catch (kvxpd) {}
            return i6q8ho['EnvConfig']['pixelRatioInt'];
        }, i6q8ho['createElement'] = function (orhiq) {
            if (orhiq == 'canvas') {
                var ghsr;
                return i6q8ho['idx'] == 0x1 ? i6q8ho['isZiYu'] ? (ghsr = sharedCanvas, ghsr['style'] = {}) : ghsr = window['canvas'] : ghsr = window['wx']['createCanvas'](), i6q8ho['idx']++, ghsr;
            } else {
                if (orhiq == 'textarea' || orhiq == 'input') return i6q8ho['onCreateInput'](orhiq);else {
                    if (orhiq == 'div') {
                        var um9vp = i6q8ho['_preCreateElement'](orhiq);
                        return um9vp['contains'] = function (w_ct$l) {
                            return null;
                        }, um9vp['removeChild'] = function (up97vm) {}, um9vp;
                    } else return i6q8ho['_preCreateElement'](orhiq);
                }
            }
        }, i6q8ho['onCreateInput'] = function (kbd25x) {
            var dxk5 = i6q8ho['_preCreateElement'](kbd25x);
            return dxk5['focus'] = xupmv['wxinputFocus'], dxk5['blur'] = xupmv['wxinputblur'], dxk5['style'] = {}, dxk5['value'] = 0x0, dxk5['parentElement'] = {}, dxk5['placeholder'] = {}, dxk5['type'] = {}, dxk5['setColor'] = function (b2d5xt) {}, dxk5['setType'] = function (fy1) {}, dxk5['setFontFace'] = function (jyn1za) {}, dxk5['addEventListener'] = function (qo86) {}, dxk5['contains'] = function (c$2tbw) {
                return null;
            }, dxk5['removeChild'] = function (z97y1) {}, dxk5;
        }, i6q8ho['createShaderCondition'] = function (rqhg6) {
            var k5vxpd = this,
                sqg46r = function () {
                var kx2d5 = rqhg6;
                return k5vxpd[rqhg6['replace']('this.', '')];
            };
            return sqg46r;
        }, i6q8ho['EnvConfig'] = null, i6q8ho['window'] = null, i6q8ho['_preCreateElement'] = null, i6q8ho['_inited'] = ![], i6q8ho['wxRequest'] = null, i6q8ho['systemInfo'] = null, i6q8ho['version'] = '0.0.1', i6q8ho['isZiYu'] = ![], i6q8ho['isPosMsgYu'] = ![], i6q8ho['parseXMLFromString'] = function (srq6gh) {
            var $cwb2, t2b$c5;
            srq6gh = srq6gh['replace'](/>\s+</g, '><');
            try {
                $cwb2 = new window['Parser']['DOMParser']()['parseFromString'](srq6gh, 'text/xml');
            } catch (pxvkmu) {
                throw '需要引入xml解析库文件';
            }
            return $cwb2;
        }, i6q8ho['idx'] = 0x1, i6q8ho;
    }(),
        kudvp = function () {
        function h80ioq() {}
        xudkv(h80ioq, 'laya.wx.mini.MiniImage');
        var z79uy = h80ioq['prototype'];
        return z79uy['_loadImage'] = function (w$_l) {
            var fj0a3 = this,
                wcb2$ = ![];
            w$_l['indexOf']('layaNativeDir/') == -0x1 && (wcb2$ = !![], w$_l = fj038o['formatURL'](w$_l));
            if (!ct$lb['getFileInfo'](w$_l)) {
                if (w$_l['indexOf']('http://') != -0x1 || w$_l['indexOf']('https://') != -0x1) ct$lb['downImg'](w$_l, new x2dt5(h80ioq, h80ioq['onDownImgCallBack'], [w$_l, fj0a3]), w$_l);else h80ioq['onCreateImage'](w$_l, fj0a3, !![]);
            } else h80ioq['onCreateImage'](w$_l, fj0a3, !wcb2$);
        }, h80ioq['onDownImgCallBack'] = function (f0aj, x25kp, iqor6) {
            if (!iqor6) h80ioq['onCreateImage'](f0aj, x25kp);else x25kp['onError'](null);
        }, h80ioq['onCreateImage'] = function (bxdk, sgrh, r4sge) {
            r4sge === void 0x0 && (r4sge = ![]);
            var dk25bx;
            if (!r4sge) {
                var p9mvuk = ct$lb['getFileInfo'](bxdk),
                    ayjf = p9mvuk['md5'];
                dk25bx = ct$lb['getFileNativePath'](ayjf);
            } else dk25bx = bxdk;
            if (sgrh['imgCache'] == null) sgrh['imgCache'] = {};
            var puvxk;
            function vp9mu7() {
                puvxk['onload'] = null, puvxk['onerror'] = null, delete sgrh['imgCache'][bxdk];
            }
            ;
            var n1ya7z = function () {
                vp9mu7(), sgrh['onLoaded'](puvxk);
            },
                sg4r6q = function () {
                vp9mu7(), sgrh['event']('error', 'Load image failed');
            };
            sgrh['_type'] == 'nativeimage' ? (puvxk = new $ctbw['window']['Image'](), puvxk['crossOrigin'] = '', puvxk['onload'] = n1ya7z, puvxk['onerror'] = sg4r6q, puvxk['src'] = dk25bx, sgrh['imgCache'][bxdk] = puvxk) : new qshgr['create'](dk25bx, {
                'onload': n1ya7z,
                'onerror': sg4r6q,
                'onCreate': function (kuvpdx) {
                    puvxk = kuvpdx, sgrh['imgCache'][bxdk] = kuvpdx;
                }
            });
        }, h80ioq;
    }(),
        xupmv = function () {
        function kvx5d() {}
        return xudkv(kvx5d, 'laya.wx.mini.MiniInput'), kvx5d['_createInputElement'] = function () {
            sg4r6e['_initInput'](sg4r6e['area'] = $ctbw['createElement']('textarea')), sg4r6e['_initInput'](sg4r6e['input'] = $ctbw['createElement']('input')), sg4r6e['inputContainer'] = $ctbw['createElement']('div'), sg4r6e['inputContainer']['style']['position'] = 'absolute', sg4r6e['inputContainer']['style']['zIndex'] = 0x186a0, $ctbw['container']['appendChild'](sg4r6e['inputContainer']), sg4r6e['inputContainer']['setPos'] = function (yum9z, jn1az) {
                sg4r6e['inputContainer']['style']['left'] = yum9z + 'px', sg4r6e['inputContainer']['style']['top'] = jn1az + 'px';
            }, g46rsq['stage']['on']('resize', null, kvx5d['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (nzj1a) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), ro6['_soundClass'] = rohiq, ro6['_musicClass'] = rohiq, window['_videoClass'] = njaf3;
        }, kvx5d['_onStageResize'] = function () {
            var qs64 = g46rsq['stage']['_canvasTransform']['identity']();
            qs64['scale']($ctbw['width'] / puxv['canvas']['width'] / zjnya1['getPixelRatio'](), $ctbw['height'] / puxv['canvas']['height'] / zjnya1['getPixelRatio']());
        }, kvx5d['wxinputFocus'] = function (h6sqir) {
            var qrih6o = sg4r6e['inputElement']['target'];
            if (qrih6o && !qrih6o['editable']) return;
            qrg6s['window']['wx']['offKeyboardConfirm'](), qrg6s['window']['wx']['offKeyboardInput'](), qrg6s['window']['wx']['showKeyboard']({
                'defaultValue': qrih6o['text'],
                'maxLength': qrih6o['maxChars'],
                'multiple': qrih6o['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (a0j1f3) {},
                'fail': function (g6ser) {}
            }), qrg6s['window']['wx']['onKeyboardConfirm'](function (xkumvp) {
                var d5p = xkumvp ? xkumvp['value'] : '';
                qrih6o['text'] = d5p, qrih6o['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), qrg6s['window']['wx']['onKeyboardInput'](function ($_cwt) {
                var egr4s6 = $_cwt ? $_cwt['value'] : '';
                if (!qrih6o['multiline']) {
                    if (egr4s6['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                qrih6o['text'] = egr4s6, qrih6o['event']('input');
            });
        }, kvx5d['inputEnter'] = function () {
            sg4r6e['inputElement']['target']['focus'] = ![];
        }, kvx5d['wxinputblur'] = function () {
            kvx5d['hideKeyboard']();
        }, kvx5d['hideKeyboard'] = function () {
            qrg6s['window']['wx']['offKeyboardConfirm'](), qrg6s['window']['wx']['offKeyboardInput'](), qrg6s['window']['wx']['hideKeyboard']({
                'success': function ($dt5) {
                    console['log']('隐藏键盘');
                },
                'fail': function (jf3n1a) {
                    console['log']('隐藏键盘出错:' + (jf3n1a ? jf3n1a['errMsg'] : ''));
                }
            });
        }, kvx5d;
    }(),
        dxkv = function () {
        function eg64() {}
        xudkv(eg64, 'laya.wx.mini.MiniLoader');
        var k5dxb2 = eg64['prototype'];
        return k5dxb2['load'] = function (yjafn1, qhgsr, a308j, kmuvp, bc2tw$) {
            a308j === void 0x0 && (a308j = !![]), bc2tw$ === void 0x0 && (bc2tw$ = ![]);
            var puvdk = this;
            puvdk['_url'] = yjafn1;
            if (yjafn1['indexOf']('data:image') === 0x0) puvdk['_type'] = qhgsr = 'image';else puvdk['_type'] = qhgsr || (qhgsr = puvdk['getTypeFromUrl'](yjafn1));
            puvdk['_cache'] = a308j, puvdk['_data'] = null;
            var uvkxd = 'ascii';
            if (yjafn1['indexOf']('.fnt') != -0x1) uvkxd = 'utf8';else qhgsr == 'arraybuffer' && (uvkxd = '');
            ;
            var a1jy = kb2dx5['getFileExtension'](yjafn1);
            if (eg64['_fileTypeArr']['indexOf'](a1jy) != -0x1) qrg6s['EnvConfig']['load']['call'](this, yjafn1, qhgsr, a308j, kmuvp, bc2tw$);else {
                if (!ct$lb['getFileInfo'](yjafn1)) {
                    if (yjafn1['indexOf']('layaNativeDir/') != -0x1) {
                        if (qrg6s['isZiYu']) {
                            var dt$b25 = ct$lb['ziyuFileData'][yjafn1];
                            puvdk['onLoaded'](dt$b25);
                            return;
                        } else {
                            cosnole['log']('read read'), ct$lb['read'](yjafn1, uvkxd, new x2dt5(eg64, eg64['onReadNativeCallBack'], [uvkxd, yjafn1, qhgsr, a308j, kmuvp, bc2tw$, puvdk]));
                            return;
                        }
                    }
                    if (fj038o['rootPath'] == '') var g4ers = yjafn1;else g4ers = yjafn1['split'](fj038o['rootPath'])[0x0];
                    yjafn1['indexOf']('http://') != -0x1 || yjafn1['indexOf']('https://') != -0x1 ? qrg6s['EnvConfig']['load']['call'](puvdk, yjafn1, qhgsr, a308j, kmuvp, bc2tw$) : ct$lb['readFile'](g4ers, uvkxd, new x2dt5(eg64, eg64['onReadNativeCallBack'], [uvkxd, yjafn1, qhgsr, a308j, kmuvp, bc2tw$, puvdk]), yjafn1);
                } else qrg6s['EnvConfig']['load']['call'](this, yjafn1, qhgsr, a308j, kmuvp, bc2tw$);
            }
        }, k5dxb2['resMgrLoad'] = function (pmvxuk, i0f38, m9pkvu, kmuvp9, n1jf, fajy1, oriq6h) {
            m9pkvu === void 0x0 && (m9pkvu = 0x0), kmuvp9 === void 0x0 && (kmuvp9 = ![]), n1jf === void 0x0 && (n1jf = ![]), fajy1 === void 0x0 && (fajy1 = 0x0), oriq6h === void 0x0 && (oriq6h = 0x3), pmvxuk['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', pmvxuk), qrg6s['EnvConfig']['resMgrLoad'](pmvxuk, (yn17az, t_c$wl, zna1y7) => {
                eg64['prototype']['resMgrLoadCallBack'](yn17az, t_c$wl, zna1y7, i0f38);
            }, m9pkvu, kmuvp9, n1jf, fajy1, oriq6h);
        }, k5dxb2['resMgrLoadCallBack'] = function (mv9p7u, sgre64, g6hqs, n1za) {
            console['log']('buff:::', mv9p7u, g6hqs, ct$lb['fileNativeDir'] + '///' + ct$lb['fileListName']), n1za(mv9p7u, sgre64, g6hqs);
        }, k5dxb2['clearRes'] = function (w2b$ct, pmu7v9) {
            pmu7v9 === void 0x0 && (pmu7v9 = ![]);
            var za17yn = this;
            za17yn['clearRes'](w2b$ct, pmu7v9);
            var i6ohqr = ct$lb['getFileInfo'](w2b$ct);
            if (i6ohqr && (w2b$ct['indexOf']('http://') != -0x1 || w2b$ct['indexOf']('https://') != -0x1)) {
                var vu9p7m = i6ohqr['md5'],
                    a1nzyj = ct$lb['getFileNativePath'](vu9p7m);
                ct$lb['remove'](a1nzyj);
            }
        }, eg64['onReadNativeCallBack'] = function (hio6qr, dkxv5p, jf08a, $c5b, yn19, hroi6q, b25, zum97v, w2b) {
            $c5b === void 0x0 && ($c5b = !![]), hroi6q === void 0x0 && (hroi6q = ![]), zum97v === void 0x0 && (zum97v = 0x0);
            if (!zum97v) {
                var jfa1;
                if (jf08a == 'json' || jf08a == 'atlas') jfa1 = qrg6s['getJson'](w2b['data']);else jf08a == 'xml' ? jfa1 = kb2dx5['parseXMLFromString'](w2b['data']) : jfa1 = w2b['data'];
                b25['onLoaded'](jfa1), !qrg6s['isZiYu'] && qrg6s['isPosMsgYu'] && jf08a != 'arraybuffer' && wx['postMessage']({
                    'url': dkxv5p,
                    'data': jfa1,
                    'isLoad': !![]
                });
            } else zum97v == 0x1 && qrg6s['EnvConfig']['load']['call'](b25, dkxv5p, jf08a, $c5b, yn19, hroi6q);
        }, ja13f(eg64, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), eg64;
    }(),
        ct$lb = function (o8j3f) {
        function q4gs6() {
            q4gs6['__super']['call'](this);
            ;
        }
        return xudkv(q4gs6, 'laya.wx.mini.MiniFileMgr', o8j3f), q4gs6['isLoadFile'] = function (tlcw_) {
            return q4gs6['_fileTypeArr']['indexOf'](tlcw_) != -0x1 ? !![] : ![];
        }, q4gs6['getFileInfo'] = function (h8qo0) {
            var sg6rh = h8qo0['split']('?')[0x0],
                xudpkv = q4gs6['filesListObj'][sg6rh];
            if (xudpkv == null) return null;else return xudpkv;
            return null;
        }, q4gs6['onFileUpdate'] = function (na1zyj, gs4e) {
            var y1zna = na1zyj['split']('/'),
                hr6gsq = y1zna[y1zna['length'] - 0x1],
                na3f = q4gs6['getFileInfo'](gs4e);
            if (na3f == null) q4gs6['onSaveFile'](gs4e, hr6gsq);else {
                if (na3f['readyUrl'] != gs4e) q4gs6['remove'](hr6gsq, gs4e);
            }
        }, q4gs6['exits'] = function (mnzy97, nfa1) {
            var t2b5$d = q4gs6['getFileNativePath'](mnzy97);
            q4gs6['fs']['getFileInfo']({
                'filePath': t2b5$d,
                'success': function (iq08) {
                    nfa1 != null && nfa1['runWith']([0x0, iq08]);
                },
                'fail': function (zn79) {
                    nfa1 != null && nfa1['runWith']([0x1, zn79]);
                }
            });
        }, q4gs6['read'] = function (zy7n1, fo08i, bdxt, k52pdx) {
            fo08i === void 0x0 && (fo08i = 'ascill'), k52pdx === void 0x0 && (k52pdx = '');
            var hio6;
            k52pdx != '' ? hio6 = q4gs6['getFileNativePath'](zy7n1) : hio6 = zy7n1, q4gs6['fs']['readFile']({
                'filePath': hio6,
                'encoding': fo08i,
                'success': function ($wbct) {
                    bdxt != null && bdxt['runWith']([0x0, $wbct]);
                },
                'fail': function (ja1n) {
                    if (ja1n && k52pdx != '') q4gs6['down'](k52pdx, fo08i, bdxt, k52pdx);else bdxt != null && bdxt['runWith']([0x1]);
                }
            });
        }, q4gs6['readNativeFile'] = function (ct$w, cb$t52) {
            q4gs6['fs']['readFile']({
                'filePath': ct$w,
                'encoding': '',
                'success': function (kpdx25) {
                    cb$t52 != null && cb$t52['runWith']([0x0]);
                },
                'fail': function (dkpuxv) {
                    cb$t52 != null && cb$t52['runWith']([0x1]);
                }
            });
        }, q4gs6['down'] = function (dbtx2, v79uzm, nza71y, vpkxm) {
            v79uzm === void 0x0 && (v79uzm = 'ascill'), vpkxm === void 0x0 && (vpkxm = '');
            var vudpx = q4gs6['getFileNativePath'](vpkxm),
                gres4 = q4gs6['wxdown']({
                'url': dbtx2,
                'filePath': vudpx,
                'success': function (t5c$b2) {
                    if (t5c$b2['statusCode'] === 0xc8) q4gs6['readFile'](t5c$b2['filePath'], v79uzm, nza71y, vpkxm);
                },
                'fail': function (qsr64) {
                    nza71y != null && nza71y['runWith']([0x1, qsr64]);
                }
            });
            gres4['onProgressUpdate'](function (vu7mz9) {
                nza71y != null && nza71y['runWith']([0x2, vu7mz9['progress']]);
            });
        }, q4gs6['readFile'] = function ($lc, vmkup, vmz7u, nz179) {
            vmkup === void 0x0 && (vmkup = 'ascill'), nz179 === void 0x0 && (nz179 = ''), q4gs6['fs']['readFile']({
                'filePath': $lc,
                'encoding': vmkup,
                'success': function (my7nz9) {
                    if ($lc['indexOf']('http://') != -0x1 || $lc['indexOf']('https://') != -0x1) q4gs6['onFileUpdate']($lc, nz179);
                    vmz7u != null && vmz7u['runWith']([0x0, my7nz9]);
                },
                'fail': function (lcwt$_) {
                    if (lcwt$_) vmz7u != null && vmz7u['runWith']([0x1, lcwt$_]);
                }
            });
        }, q4gs6['downImg'] = function (kxpd5v, f31jan, hs6qri) {
            hs6qri === void 0x0 && (hs6qri = '');
            var rqh6io = q4gs6['wxdown']({
                'url': kxpd5v,
                'success': function (yn1az7) {
                    yn1az7['statusCode'] === 0xc8 && q4gs6['copyFile'](yn1az7['tempFilePath'], hs6qri, f31jan);
                },
                'fail': function (pdx2k) {
                    f31jan != null && f31jan['runWith']([0x1, pdx2k]);
                }
            });
        }, q4gs6['copyFile'] = function (hsiqr6, qi8ho, k5xv) {
            var v79m = hsiqr6['split']('/'),
                $twc_ = v79m[v79m['length'] - 0x1],
                vum9 = qi8ho['split']('?')[0x0],
                i6o8qh = q4gs6['getFileInfo'](qi8ho),
                mkxpv = q4gs6['getFileNativePath']($twc_);
            q4gs6['fs']['copyFile']({
                'srcPath': hsiqr6,
                'destPath': mkxpv,
                'success': function (t_cw$l) {
                    if (!i6o8qh) q4gs6['onSaveFile'](qi8ho, $twc_), k5xv != null && k5xv['runWith']([0x0]);else {
                        if (i6o8qh['readyUrl'] != qi8ho) q4gs6['remove']($twc_, qi8ho, k5xv);
                    }
                },
                'fail': function (d5k2b) {
                    k5xv != null && k5xv['runWith']([0x1, d5k2b]);
                }
            });
        }, q4gs6['getFileNativePath'] = function (afj1yn) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + afj1yn;
        }, q4gs6['remove'] = function (q4, vpudxk, myu7) {
            vpudxk === void 0x0 && (vpudxk = '');
            var gs6qh = q4gs6['getFileInfo'](vpudxk),
                k5p2dx = q4gs6['getFileNativePath'](gs6qh['md5']);
            g46rsq['loader']['clearRes'](gs6qh['readyUrl']), q4gs6['fs']['unlink']({
                'filePath': k5p2dx,
                'success': function ($tcbwl) {
                    if (vpudxk != '') q4gs6['onSaveFile'](vpudxk, q4);
                    myu7 != null && myu7['runWith']([0x0]);
                },
                'fail': function (bt$w2) {}
            });
        }, q4gs6['onSaveFile'] = function (qhrgs, ja1ynz) {
            var uy9z7m = qhrgs['split']('?')[0x0];
            q4gs6['filesListObj'][uy9z7m] = {
                'md5': ja1ynz,
                'readyUrl': qhrgs
            }, q4gs6['fs']['writeFile']({
                'filePath': q4gs6['fileNativeDir'] + '/' + q4gs6['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](q4gs6['filesListObj']),
                'success': function (bd25$) {
                    console['log']('写入测试测试成功：', bd25$);
                },
                'fail': function (pvxukd) {
                    console['log']('写入测试测试失败：', pvxukd);
                }
            });
        }, q4gs6['existDir'] = function (d2b5k, njy1f) {
            q4gs6['fs']['mkdir']({
                'dirPath': d2b5k,
                'success': function (l_$tw) {
                    njy1f != null && njy1f['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (xkupm) {
                    if (xkupm['errMsg']['indexOf']('file already exists') != -0x1) q4gs6['readSync'](q4gs6['fileListName'], 'utf8', njy1f);else njy1f != null && njy1f['runWith']([0x1, xkupm]);
                }
            });
        }, q4gs6['readSync'] = function ($tbcwl, io8h0q, g4rq6, sqri6) {
            io8h0q === void 0x0 && (io8h0q = 'ascill'), sqri6 === void 0x0 && (sqri6 = '');
            var zn79m = q4gs6['getFileNativePath']($tbcwl),
                sr6gq4;
            try {
                sr6gq4 = q4gs6['fs']['readFileSync'](zn79m), g4rq6 != null && g4rq6['runWith']([0x0, { 'data': sr6gq4 }]);
            } catch (pd52) {
                g4rq6 != null && g4rq6['runWith']([0x1]);
            }
        }, q4gs6['readCache'] = function () {}, q4gs6['writeCache'] = function (bxd25) {
            var anz71 = readyUrl['split']('?')[0x0];
            q4gs6['filesListObj'][anz71] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, q4gs6['fs']['writeFile']({
                'filePath': q4gs6['fileNativeDir'] + '/' + q4gs6['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](q4gs6['filesListObj']),
                'success': function (roi6hq) {},
                'fail': function (vkmpxu) {}
            });
        }, q4gs6['setNativeFileDir'] = function (ct$wl) {
            q4gs6['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + ct$wl;
        }, q4gs6['filesListObj'] = {}, q4gs6['fileNativeDir'] = null, q4gs6['fileListName'] = 'layaairfiles.txt', q4gs6['ziyuFileData'] = {}, ja13f(q4gs6, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), q4gs6;
    }(mvkp),
        rohiq = function (hs6ri) {
        function s6eg4r() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], s6eg4r['__super']['call'](this), this['_sound'] = s6eg4r['_createSound'](), this['_chanell'] = new b52kdx(this['_sound']);
        }
        xudkv(s6eg4r, 'laya.wx.mini.MiniSound', hs6ri);
        var j30o8f = s6eg4r['prototype'];
        return j30o8f['load'] = function (c$t25) {
            var io8qh0 = this;
            c$t25 = fj038o['formatURL'](c$t25), this['url'] = c$t25;
            if (s6eg4r['_audioCache'][c$t25]) {
                this['event']('complete');
                return;
            }
            function oqhi86() {
                if (s6eg4r['_null'] != undefined) io8qh0['_sound']['onCanplay'](s6eg4r['_null']), io8qh0['_sound']['onError'](s6eg4r['_null']);else try {
                    io8qh0['_sound']['onCanplay'](null), io8qh0['_sound']['onError'](null), s6eg4r['_null'] = null;
                } catch (vxpumk) {
                    console['warn']('[wxmini] _clearSound:' + vxpumk), io8qh0['_sound']['onCanplay'](mz7ny9), io8qh0['_sound']['onError'](mz7ny9), s6eg4r['_null'] = mz7ny9;
                }
            }
            function t2c5b$() {
                v7up['loaded'] = !![], v7up['event']('complete'), s6eg4r['_audioCache'][v7up['url']] = v7up;
            }
            function d5tx2($25bt) {
                console['error']('errCode=' + $25bt['errCode'] + '  errMsg=' + $25bt['errMsg']), v7up['event']('error');
            }
            function mz7ny9() {}
            this['_sound']['onCanplay'](t2c5b$), this['_sound']['onError'](d5tx2), this['_sound']['src'] = c$t25;
            var v7up = this;
        }, j30o8f['play'] = function (jz1yna, pxkdvu) {
            jz1yna === void 0x0 && (jz1yna = 0x0), pxkdvu === void 0x0 && (pxkdvu = 0x0);
            var ny1jz, kxdb25;
            if (this['url'] == ro6['_tMusic']) {
                if (!s6eg4r['_musicAudio']) s6eg4r['_musicAudio'] = this['_sound'];
                ny1jz = s6eg4r['_musicAudio'], kxdb25 = this['_chanell'];
            } else ny1jz = this['_sound'], kxdb25 = this['_chanell'];
            return ny1jz['src'] = this['url'], ny1jz['startTime'] = 0x0, kxdb25['isStopped'] && (kxdb25['url'] = this['url'], kxdb25['loops'] = pxkdvu, kxdb25['startTime'] = jz1yna, kxdb25['play'](), ro6['addChannel'](kxdb25)), kxdb25;
        }, j30o8f['dispose'] = function () {
            var xukpm = s6eg4r['_audioCache'][this['url']];
            xukpm && (xukpm['src'] = '', delete s6eg4r['_audioCache'][this['url']]);
        }, dk52(0x0, j30o8f, 'duration', function () {
            return this['_sound']['duration'];
        }), s6eg4r['_createSound'] = function () {
            s6eg4r['_id']++;
            var j03a8f = qrg6s['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return j03a8f;
        }, s6eg4r['_musicAudio'] = null, s6eg4r['_id'] = 0x0, s6eg4r['_audioCache'] = {}, s6eg4r['_null'] = undefined, s6eg4r;
    }(mvkp),
        b52kdx = function (kump) {
        function kp52(x2dt5b) {
            this['_audio'] = null, this['_onEnd'] = null, kp52['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = x2dt5b, this['_onEnd'] = kb2dx5['bind'](this['__onEnd'], this), x2dt5b['onEnded'](this['_onEnd']);
        }
        xudkv(kp52, 'laya.wx.mini.MiniSoundChannel', kump);
        var pvudx = kp52['prototype'];
        return pvudx['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (g46rsq['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, pvudx['__onNull'] = function () {}, pvudx['play'] = function () {
            this['isStopped'] = ![], ro6['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, pvudx['stop'] = function () {
            this['isStopped'] = !![], ro6['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, pvudx['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, pvudx['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], ro6['addChannel'](this), this['_audio']['play']();
        }, dk52(0x0, pvudx, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), dk52(0x0, pvudx, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), dk52(0x0, pvudx, 'volume', function () {
            return 0x1;
        }, function (ymz79u) {}), kp52['_null'] = undefined, kp52;
    }(kx5b),
        njaf3 = function () {
        function d2kpx() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = qrg6s['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        xudkv(d2kpx, 'laya.wx.mini.MiniVideo');
        var hi308o = d2kpx['prototype'];
        return hi308o['on'] = function (r4eg6s, zna7y, btw$2) {
            if (r4eg6s == 'loadedmetadata') this['onPlayFunc'] = btw$2['bind'](zna7y), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else r4eg6s == 'ended' && (this['onEndedFunC'] = btw$2['bind'](zna7y), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, hi308o['onTimeUpdateFunc'] = function ($ct_l) {
            this['position'] = $ct_l['position'], this['_duration'] = $ct_l['duration'];
        }, hi308o['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, hi308o['onended'] = function (jan1f, $2cwb) {
            this['onEndedFunC'] = $2cwb['bind'](jan1f), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, hi308o['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, hi308o['off'] = function (xukdvp, p9uv7m, a1zn) {
            if (xukdvp == 'loadedmetadata') this['onPlayFunc'] = a1zn['bind'](p9uv7m), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else xukdvp == 'ended' && (this['onEndedFunC'] = a1zn['bind'](p9uv7m), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, hi308o['load'] = function (uyz79m) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = uyz79m;
        }, hi308o['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, hi308o['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, hi308o['size'] = function (n9z17, zyanj1) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = n9z17, this['videoElement']['height'] = zyanj1;
        }, hi308o['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, hi308o['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, dk52(0x0, hi308o, 'duration', function () {
            return this['_duration'];
        }), dk52(0x0, hi308o, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (e4s) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = e4s;
        }), dk52(0x0, hi308o, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), dk52(0x0, hi308o, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), dk52(0x0, hi308o, 'ended', function () {
            return this['videoend'];
        }), dk52(0x0, hi308o, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (lcb) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = lcb;
        }), dk52(0x0, hi308o, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (zyu97) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = zyu97;
        }), dk52(0x0, hi308o, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (w2bc$t) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = w2bc$t;
        }), dk52(0x0, hi308o, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), dk52(0x0, hi308o, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (btd25) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = btd25;
        }), dk52(0x0, hi308o, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (mzuv79) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = mzuv79;
        }), dk52(0x0, hi308o, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), dk52(0x0, hi308o, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (d5kp2) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = d5kp2;
        }), dk52(0x0, hi308o, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (dbk25x) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = dbk25x;
        }), dk52(0x0, hi308o, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (wc$_lt) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = wc$_lt;
        }), d2kpx;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var nza7y in Laya) {
        var z1n7ya = Laya[nza7y];
        z1n7ya && z1n7ya['__isclass'] && (exports[nza7y] = z1n7ya);
    }
});