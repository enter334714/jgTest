var b = wx.$e;
(function (window, document, qh68sl) {
    var blvhi = qh68sl['un'],
        yr708 = qh68sl['uns'],
        iqblvh = qh68sl['static'],
        h8qs63 = qh68sl['class'],
        iabw = qh68sl['getset'],
        g4tjf = qh68sl['__newvec'],
        ncy7 = laya['utils']['Browser'],
        q8ls = laya['events']['Event'],
        ewivl = laya['events']['EventDispatcher'],
        tjk$2 = laya['resource']['HTMLImage'],
        gbe4w = laya['utils']['Handler'],
        lhisvq = laya['display']['Input'],
        xj$2kf = laya['net']['Loader'],
        hslq = laya['maths']['Matrix'],
        xzopm2 = laya['renders']['Render'],
        cr75ny = laya['utils']['RunDriver'],
        y037r = laya['media']['Sound'],
        wbgae = laya['media']['SoundChannel'],
        evbilq = laya['media']['SoundManager'],
        dz1o9 = laya['display']['Stage'],
        gakf = laya['net']['URL'],
        ft4gjk = laya['utils']['Utils'],
        akf4 = function () {
        function zmox2p() {}
        return h8qs63(zmox2p, 'laya.wx.mini.MiniAdpter'), zmox2p['getJson'] = function (mopxz) {
            return JSON['parse'](mopxz);
        }, zmox2p['init'] = function (zdoxm, d1u9m) {
            zdoxm === void 0x0 && (zdoxm = ![]), d1u9m === void 0x0 && (d1u9m = ![]);
            if (zmox2p['_inited']) return;
            zmox2p['window'] = window;
            if (zmox2p['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            zmox2p['_inited'] = !![], zmox2p['isZiYu'] = d1u9m, zmox2p['isPosMsgYu'] = zdoxm, zmox2p['EnvConfig'] = {}, !zmox2p['isZiYu'] && (bhvilq['setNativeFileDir']('/layaairGame'), bhvilq['existDir'](bhvilq['fileNativeDir'], gbe4w['create'](zmox2p, zmox2p['onMkdirCallBack']))), zmox2p['window']['focus'] = function () {}, qh68sl['getUrlPath'] = function () {}, zmox2p['window']['logtime'] = function (ql68hs) {}, zmox2p['window']['alertTimeLog'] = function (qevl) {}, zmox2p['window']['resetShareInfo'] = function () {}, zmox2p['window']['CanvasRenderingContext2D'] = function () {}, zmox2p['window']['CanvasRenderingContext2D']['prototype'] = zmox2p['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], zmox2p['window']['document']['body']['appendChild'] = function () {}, zmox2p['EnvConfig']['pixelRatioInt'] = 0x0, cr75ny['getPixelRatio'] = zmox2p['pixelRatio'], zmox2p['_preCreateElement'] = ncy7['createElement'], ncy7['createElement'] = zmox2p['createElement'], cr75ny['createShaderCondition'] = zmox2p['createShaderCondition'], ft4gjk['parseXMLFromString'] = zmox2p['parseXMLFromString'], lhisvq['_createInputElement'] = px2jo$['_createInputElement'], zmox2p['EnvConfig']['load'] = xj$2kf['prototype']['load'], xj$2kf['prototype']['load'] = g4eta['prototype']['load'], zmox2p['isZiYu'] && zdoxm && wx['onMessage'](function (jpo) {
                jpo['isLoad'] && (bhvilq['ziyuFileData'][jpo['url']] = jpo['data']);
            });
        }, zmox2p['onMkdirCallBack'] = function ($kgfj, m2oxz) {
            if (!$kgfj) bhvilq['filesListObj'] = JSON['parse'](m2oxz['data']);
        }, zmox2p['pixelRatio'] = function () {
            if (!zmox2p['EnvConfig']['pixelRatioInt']) try {
                var hsqivl = wx['getSystemInfoSync']();
                return zmox2p['EnvConfig']['pixelRatioInt'] = hsqivl['pixelRatio'], hsqivl = hsqivl, hsqivl['pixelRatio'];
            } catch (ivlewb) {}
            return zmox2p['EnvConfig']['pixelRatioInt'];
        }, zmox2p['createElement'] = function (tgaew) {
            if (tgaew == 'canvas') {
                var s068;
                return zmox2p['idx'] == 0x1 ? zmox2p['isZiYu'] ? (s068 = sharedCanvas, s068['style'] = {}) : s068 = window['canvas'] : s068 = window['wx']['createCanvas'](), zmox2p['idx']++, s068;
            } else {
                if (tgaew == 'textarea' || tgaew == 'input') return zmox2p['onCreateInput'](tgaew);else {
                    if (tgaew == 'div') {
                        var ka4f = zmox2p['_preCreateElement'](tgaew);
                        return ka4f['contains'] = function (y3r057) {
                            return null;
                        }, ka4f['removeChild'] = function (cr57ny) {}, ka4f;
                    } else return zmox2p['_preCreateElement'](tgaew);
                }
            }
        }, zmox2p['onCreateInput'] = function ($kj2xf) {
            var fpj$ = zmox2p['_preCreateElement']($kj2xf);
            return fpj$['focus'] = px2jo$['wxinputFocus'], fpj$['blur'] = px2jo$['wxinputblur'], fpj$['style'] = {}, fpj$['value'] = 0x0, fpj$['parentElement'] = {}, fpj$['placeholder'] = {}, fpj$['type'] = {}, fpj$['setColor'] = function (ihqlvb) {}, fpj$['setType'] = function (lqhvb) {}, fpj$['setFontFace'] = function (qlhis6) {}, fpj$['addEventListener'] = function (sr) {}, fpj$['contains'] = function (xfj$k) {
                return null;
            }, fpj$['removeChild'] = function (c7y5r) {}, fpj$;
        }, zmox2p['createShaderCondition'] = function (gf$kj) {
            var leqivb = this,
                j2tkf$ = function () {
                var m9d1o = gf$kj;
                return leqivb[gf$kj['replace']('this.', '')];
            };
            return j2tkf$;
        }, zmox2p['EnvConfig'] = null, zmox2p['window'] = null, zmox2p['_preCreateElement'] = null, zmox2p['_inited'] = ![], zmox2p['wxRequest'] = null, zmox2p['systemInfo'] = null, zmox2p['version'] = '0.0.1', zmox2p['isZiYu'] = ![], zmox2p['isPosMsgYu'] = ![], zmox2p['parseXMLFromString'] = function (liqb) {
            var ba4wge, lqhvis;
            liqb = liqb['replace'](/>\s+</g, '><');
            try {
                ba4wge = new window['Parser']['DOMParser']()['parseFromString'](liqb, 'text/xml');
            } catch (qihl) {
                throw '需要引入xml解析库文件';
            }
            return ba4wge;
        }, zmox2p['idx'] = 0x1, zmox2p;
    }(),
        $opx2j = function () {
        function qvhsli() {}
        h8qs63(qvhsli, 'laya.wx.mini.MiniImage');
        var pmoz9 = qvhsli['prototype'];
        return pmoz9['_loadImage'] = function (jgf$t) {
            var xf$2j = this,
                xmop = ![];
            jgf$t['indexOf']('layaNativeDir/') == -0x1 && (xmop = !![], jgf$t = gakf['formatURL'](jgf$t));
            if (!bhvilq['getFileInfo'](jgf$t)) {
                if (jgf$t['indexOf']('http://') != -0x1 || jgf$t['indexOf']('https://') != -0x1) bhvilq['downImg'](jgf$t, new gbe4w(qvhsli, qvhsli['onDownImgCallBack'], [jgf$t, xf$2j]), jgf$t);else qvhsli['onCreateImage'](jgf$t, xf$2j, !![]);
            } else qvhsli['onCreateImage'](jgf$t, xf$2j, !xmop);
        }, qvhsli['onDownImgCallBack'] = function (dz9mu1, lhqs6i, vwilbe) {
            if (!vwilbe) qvhsli['onCreateImage'](dz9mu1, lhqs6i);else lhqs6i['onError'](null);
        }, qvhsli['onCreateImage'] = function (pjx$2o, b4weag, liewb) {
            liewb === void 0x0 && (liewb = ![]);
            var $xk2f;
            if (!liewb) {
                var pxm$ = bhvilq['getFileInfo'](pjx$2o),
                    ewabg4 = pxm$['md5'];
                $xk2f = bhvilq['getFileNativePath'](ewabg4);
            } else $xk2f = pjx$2o;
            if (b4weag['imgCache'] == null) b4weag['imgCache'] = {};
            var gjkf$t;
            function wtgae() {
                gjkf$t['onload'] = null, gjkf$t['onerror'] = null, delete b4weag['imgCache'][pjx$2o];
            }
            ;
            var ieqvl = function () {
                wtgae(), b4weag['onLoaded'](gjkf$t);
            },
                bieav = function () {
                wtgae(), b4weag['event']('error', 'Load image failed');
            };
            b4weag['_type'] == 'nativeimage' ? (gjkf$t = new ncy7['window']['Image'](), gjkf$t['crossOrigin'] = '', gjkf$t['onload'] = ieqvl, gjkf$t['onerror'] = bieav, gjkf$t['src'] = $xk2f, b4weag['imgCache'][pjx$2o] = gjkf$t) : new tjk$2['create']($xk2f, {
                'onload': ieqvl,
                'onerror': bieav,
                'onCreate': function (beiwav) {
                    gjkf$t = beiwav, b4weag['imgCache'][pjx$2o] = beiwav;
                }
            });
        }, qvhsli;
    }(),
        px2jo$ = function () {
        function at4gwk() {}
        return h8qs63(at4gwk, 'laya.wx.mini.MiniInput'), at4gwk['_createInputElement'] = function () {
            lhisvq['_initInput'](lhisvq['area'] = ncy7['createElement']('textarea')), lhisvq['_initInput'](lhisvq['input'] = ncy7['createElement']('input')), lhisvq['inputContainer'] = ncy7['createElement']('div'), lhisvq['inputContainer']['style']['position'] = 'absolute', lhisvq['inputContainer']['style']['zIndex'] = 0x186a0, ncy7['container']['appendChild'](lhisvq['inputContainer']), lhisvq['inputContainer']['setPos'] = function (fat4kg, tk4jf) {
                lhisvq['inputContainer']['style']['left'] = fat4kg + 'px', lhisvq['inputContainer']['style']['top'] = tk4jf + 'px';
            }, qh68sl['stage']['on']('resize', null, at4gwk['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (ebvqi) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), evbilq['_soundClass'] = t$k2, evbilq['_musicClass'] = t$k2, window['_videoClass'] = shlviq;
        }, at4gwk['_onStageResize'] = function () {
            var vqsih = qh68sl['stage']['_canvasTransform']['identity']();
            vqsih['scale'](ncy7['width'] / xzopm2['canvas']['width'] / cr75ny['getPixelRatio'](), ncy7['height'] / xzopm2['canvas']['height'] / cr75ny['getPixelRatio']());
        }, at4gwk['wxinputFocus'] = function (ae4wb) {
            var kg4ftj = lhisvq['inputElement']['target'];
            if (kg4ftj && !kg4ftj['editable']) return;
            akf4['window']['wx']['offKeyboardConfirm'](), akf4['window']['wx']['offKeyboardInput'](), akf4['window']['wx']['showKeyboard']({
                'defaultValue': kg4ftj['text'],
                'maxLength': kg4ftj['maxChars'],
                'multiple': kg4ftj['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (oz1d) {},
                'fail': function (yr073) {}
            }), akf4['window']['wx']['onKeyboardConfirm'](function ($jgtk) {
                var a4tewg = $jgtk ? $jgtk['value'] : '';
                kg4ftj['text'] = a4tewg, kg4ftj['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), akf4['window']['wx']['onKeyboardInput'](function (r8y30) {
                var pzod = r8y30 ? r8y30['value'] : '';
                if (!kg4ftj['multiline']) {
                    if (pzod['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                kg4ftj['text'] = pzod, kg4ftj['event']('input');
            });
        }, at4gwk['inputEnter'] = function () {
            lhisvq['inputElement']['target']['focus'] = ![];
        }, at4gwk['wxinputblur'] = function () {
            at4gwk['hideKeyboard']();
        }, at4gwk['hideKeyboard'] = function () {
            akf4['window']['wx']['offKeyboardConfirm'](), akf4['window']['wx']['offKeyboardInput'](), akf4['window']['wx']['hideKeyboard']({
                'success': function (z2xomp) {
                    console['log']('隐藏键盘');
                },
                'fail': function (m$o2x) {
                    console['log']('隐藏键盘出错:' + (m$o2x ? m$o2x['errMsg'] : ''));
                }
            });
        }, at4gwk;
    }(),
        g4eta = function () {
        function f4jt() {}
        h8qs63(f4jt, 'laya.wx.mini.MiniLoader');
        var hlvqi = f4jt['prototype'];
        return hlvqi['load'] = function (akg4tw, lvqsih, mpz9o, y7cnr, zdo1) {
            mpz9o === void 0x0 && (mpz9o = !![]), zdo1 === void 0x0 && (zdo1 = ![]);
            var li6qh = this;
            li6qh['_url'] = akg4tw;
            if (akg4tw['indexOf']('data:image') === 0x0) li6qh['_type'] = lvqsih = 'image';else li6qh['_type'] = lvqsih || (lvqsih = li6qh['getTypeFromUrl'](akg4tw));
            li6qh['_cache'] = mpz9o, li6qh['_data'] = null;
            var isqlh6 = 'ascii';
            if (akg4tw['indexOf']('.fnt') != -0x1) isqlh6 = 'utf8';else lvqsih == 'arraybuffer' && (isqlh6 = '');
            ;
            var kfx2$j = ft4gjk['getFileExtension'](akg4tw);
            if (f4jt['_fileTypeArr']['indexOf'](kfx2$j) != -0x1) akf4['EnvConfig']['load']['call'](this, akg4tw, lvqsih, mpz9o, y7cnr, zdo1);else {
                if (!bhvilq['getFileInfo'](akg4tw)) {
                    if (akg4tw['indexOf']('layaNativeDir/') != -0x1) {
                        if (akf4['isZiYu']) {
                            var ewta = bhvilq['ziyuFileData'][akg4tw];
                            li6qh['onLoaded'](ewta);
                            return;
                        } else {
                            cosnole['log']('read read'), bhvilq['read'](akg4tw, isqlh6, new gbe4w(f4jt, f4jt['onReadNativeCallBack'], [isqlh6, akg4tw, lvqsih, mpz9o, y7cnr, zdo1, li6qh]));
                            return;
                        }
                    }
                    if (gakf['rootPath'] == '') var silh = akg4tw;else silh = akg4tw['split'](gakf['rootPath'])[0x0];
                    akg4tw['indexOf']('http://') != -0x1 || akg4tw['indexOf']('https://') != -0x1 ? akf4['EnvConfig']['load']['call'](li6qh, akg4tw, lvqsih, mpz9o, y7cnr, zdo1) : bhvilq['readFile'](silh, isqlh6, new gbe4w(f4jt, f4jt['onReadNativeCallBack'], [isqlh6, akg4tw, lvqsih, mpz9o, y7cnr, zdo1, li6qh]), akg4tw);
                } else akf4['EnvConfig']['load']['call'](this, akg4tw, lvqsih, mpz9o, y7cnr, zdo1);
            }
        }, hlvqi['resMgrLoad'] = function (ak4gf, t$2jk, z91mdo, px2, fx2jp, jt$k2f, vbleqi) {
            z91mdo === void 0x0 && (z91mdo = 0x0), px2 === void 0x0 && (px2 = ![]), fx2jp === void 0x0 && (fx2jp = ![]), jt$k2f === void 0x0 && (jt$k2f = 0x0), vbleqi === void 0x0 && (vbleqi = 0x3), ak4gf['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', ak4gf), akf4['EnvConfig']['resMgrLoad'](ak4gf, (d9zop, mx2p$, rs3086) => {
                f4jt['prototype']['resMgrLoadCallBack'](d9zop, mx2p$, rs3086, t$2jk);
            }, z91mdo, px2, fx2jp, jt$k2f, vbleqi);
        }, hlvqi['resMgrLoadCallBack'] = function (kg4jt, qlvibh, ihvbq, ibwe) {
            console['log']('buff:::', kg4jt, ihvbq, bhvilq['fileNativeDir'] + '///' + bhvilq['fileListName']), ibwe(kg4jt, qlvibh, ihvbq);
        }, hlvqi['clearRes'] = function (r70863, mpdz9o) {
            mpdz9o === void 0x0 && (mpdz9o = ![]);
            var e4wgba = this;
            e4wgba['clearRes'](r70863, mpdz9o);
            var xjo$p2 = bhvilq['getFileInfo'](r70863);
            if (xjo$p2 && (r70863['indexOf']('http://') != -0x1 || r70863['indexOf']('https://') != -0x1)) {
                var x$kjf = xjo$p2['md5'],
                    nyc57_ = bhvilq['getFileNativePath'](x$kjf);
                bhvilq['remove'](nyc57_);
            }
        }, f4jt['onReadNativeCallBack'] = function (r8, mz91d, fga4kt, xjpf2$, hbqlv, ivqeb, hlqi6, ftkjg4, eiblqv) {
            xjpf2$ === void 0x0 && (xjpf2$ = !![]), ivqeb === void 0x0 && (ivqeb = ![]), ftkjg4 === void 0x0 && (ftkjg4 = 0x0);
            if (!ftkjg4) {
                var k$xjf;
                if (fga4kt == 'json' || fga4kt == 'atlas') k$xjf = akf4['getJson'](eiblqv['data']);else fga4kt == 'xml' ? k$xjf = ft4gjk['parseXMLFromString'](eiblqv['data']) : k$xjf = eiblqv['data'];
                hlqi6['onLoaded'](k$xjf), !akf4['isZiYu'] && akf4['isPosMsgYu'] && fga4kt != 'arraybuffer' && wx['postMessage']({
                    'url': mz91d,
                    'data': k$xjf,
                    'isLoad': !![]
                });
            } else ftkjg4 == 0x1 && akf4['EnvConfig']['load']['call'](hlqi6, mz91d, fga4kt, xjpf2$, hbqlv, ivqeb);
        }, iqblvh(f4jt, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), f4jt;
    }(),
        bhvilq = function ($jfg) {
        function cy7_5n() {
            cy7_5n['__super']['call'](this);
            ;
        }
        return h8qs63(cy7_5n, 'laya.wx.mini.MiniFileMgr', $jfg), cy7_5n['isLoadFile'] = function (mzxpo2) {
            return cy7_5n['_fileTypeArr']['indexOf'](mzxpo2) != -0x1 ? !![] : ![];
        }, cy7_5n['getFileInfo'] = function (kt2j$f) {
            var r7c05y = kt2j$f['split']('?')[0x0],
                umd1z9 = cy7_5n['filesListObj'][r7c05y];
            if (umd1z9 == null) return null;else return umd1z9;
            return null;
        }, cy7_5n['onFileUpdate'] = function (ql8h6, tk4wa) {
            var sh6803 = ql8h6['split']('/'),
                _ync57 = sh6803[sh6803['length'] - 0x1],
                y75rc0 = cy7_5n['getFileInfo'](tk4wa);
            if (y75rc0 == null) cy7_5n['onSaveFile'](tk4wa, _ync57);else {
                if (y75rc0['readyUrl'] != tk4wa) cy7_5n['remove'](_ync57, tk4wa);
            }
        }, cy7_5n['exits'] = function ($2oxpm, gtf4a) {
            var h3s = cy7_5n['getFileNativePath']($2oxpm);
            cy7_5n['fs']['getFileInfo']({
                'filePath': h3s,
                'success': function (x2om$) {
                    gtf4a != null && gtf4a['runWith']([0x0, x2om$]);
                },
                'fail': function (gk4ta) {
                    gtf4a != null && gtf4a['runWith']([0x1, gk4ta]);
                }
            });
        }, cy7_5n['read'] = function (p2xmoz, fkg4t, zod9p, oz19md) {
            fkg4t === void 0x0 && (fkg4t = 'ascill'), oz19md === void 0x0 && (oz19md = '');
            var wliv;
            oz19md != '' ? wliv = cy7_5n['getFileNativePath'](p2xmoz) : wliv = p2xmoz, cy7_5n['fs']['readFile']({
                'filePath': wliv,
                'encoding': fkg4t,
                'success': function (eibvwa) {
                    zod9p != null && zod9p['runWith']([0x0, eibvwa]);
                },
                'fail': function (liewv) {
                    if (liewv && oz19md != '') cy7_5n['down'](oz19md, fkg4t, zod9p, oz19md);else zod9p != null && zod9p['runWith']([0x1]);
                }
            });
        }, cy7_5n['readNativeFile'] = function ($pm2x, zdu91m) {
            cy7_5n['fs']['readFile']({
                'filePath': $pm2x,
                'encoding': '',
                'success': function (qsl68) {
                    zdu91m != null && zdu91m['runWith']([0x0]);
                },
                'fail': function (qsh68) {
                    zdu91m != null && zdu91m['runWith']([0x1]);
                }
            });
        }, cy7_5n['down'] = function (lieqv, jk$xf2, sihq6l, vibwe) {
            jk$xf2 === void 0x0 && (jk$xf2 = 'ascill'), vibwe === void 0x0 && (vibwe = '');
            var o9pzdm = cy7_5n['getFileNativePath'](vibwe),
                slivq = cy7_5n['wxdown']({
                'url': lieqv,
                'filePath': o9pzdm,
                'success': function (r075) {
                    if (r075['statusCode'] === 0xc8) cy7_5n['readFile'](r075['filePath'], jk$xf2, sihq6l, vibwe);
                },
                'fail': function (ewagb4) {
                    sihq6l != null && sihq6l['runWith']([0x1, ewagb4]);
                }
            });
            slivq['onProgressUpdate'](function (r57c) {
                sihq6l != null && sihq6l['runWith']([0x2, r57c['progress']]);
            });
        }, cy7_5n['readFile'] = function (bqvhi, hslqi, shqil, y870) {
            hslqi === void 0x0 && (hslqi = 'ascill'), y870 === void 0x0 && (y870 = ''), cy7_5n['fs']['readFile']({
                'filePath': bqvhi,
                'encoding': hslqi,
                'success': function (mx2opz) {
                    if (bqvhi['indexOf']('http://') != -0x1 || bqvhi['indexOf']('https://') != -0x1) cy7_5n['onFileUpdate'](bqvhi, y870);
                    shqil != null && shqil['runWith']([0x0, mx2opz]);
                },
                'fail': function (umdz) {
                    if (umdz) shqil != null && shqil['runWith']([0x1, umdz]);
                }
            });
        }, cy7_5n['downImg'] = function (y053, fg4ta, jkf$t) {
            jkf$t === void 0x0 && (jkf$t = '');
            var j4 = cy7_5n['wxdown']({
                'url': y053,
                'success': function (w4gtk) {
                    w4gtk['statusCode'] === 0xc8 && cy7_5n['copyFile'](w4gtk['tempFilePath'], jkf$t, fg4ta);
                },
                'fail': function (qibe) {
                    fg4ta != null && fg4ta['runWith']([0x1, qibe]);
                }
            });
        }, cy7_5n['copyFile'] = function (fj$2p, vilhqs, qsilh6) {
            var yr0375 = fj$2p['split']('/'),
                yc075r = yr0375[yr0375['length'] - 0x1],
                m9do1z = vilhqs['split']('?')[0x0],
                hviqsl = cy7_5n['getFileInfo'](vilhqs),
                $2jpxf = cy7_5n['getFileNativePath'](yc075r);
            cy7_5n['fs']['copyFile']({
                'srcPath': fj$2p,
                'destPath': $2jpxf,
                'success': function (yr50) {
                    if (!hviqsl) cy7_5n['onSaveFile'](vilhqs, yc075r), qsilh6 != null && qsilh6['runWith']([0x0]);else {
                        if (hviqsl['readyUrl'] != vilhqs) cy7_5n['remove'](yc075r, vilhqs, qsilh6);
                    }
                },
                'fail': function (gtkjf$) {
                    qsilh6 != null && qsilh6['runWith']([0x1, gtkjf$]);
                }
            });
        }, cy7_5n['getFileNativePath'] = function (rnc75) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + rnc75;
        }, cy7_5n['remove'] = function (x2f$jk, d1uz9m, shq863) {
            d1uz9m === void 0x0 && (d1uz9m = '');
            var r683 = cy7_5n['getFileInfo'](d1uz9m),
                x2opzm = cy7_5n['getFileNativePath'](r683['md5']);
            qh68sl['loader']['clearRes'](r683['readyUrl']), cy7_5n['fs']['unlink']({
                'filePath': x2opzm,
                'success': function (abvwi) {
                    if (d1uz9m != '') cy7_5n['onSaveFile'](d1uz9m, x2f$jk);
                    shq863 != null && shq863['runWith']([0x0]);
                },
                'fail': function (c50y7) {}
            });
        }, cy7_5n['onSaveFile'] = function (q8ls6h, p2zm) {
            var px$2oj = q8ls6h['split']('?')[0x0];
            cy7_5n['filesListObj'][px$2oj] = {
                'md5': p2zm,
                'readyUrl': q8ls6h
            }, cy7_5n['fs']['writeFile']({
                'filePath': cy7_5n['fileNativeDir'] + '/' + cy7_5n['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](cy7_5n['filesListObj']),
                'success': function (r38760) {
                    console['log']('写入测试测试成功：', r38760);
                },
                'fail': function (fkj2x$) {
                    console['log']('写入测试测试失败：', fkj2x$);
                }
            });
        }, cy7_5n['existDir'] = function (vbqli, $2fxj) {
            cy7_5n['fs']['mkdir']({
                'dirPath': vbqli,
                'success': function (s3r60) {
                    $2fxj != null && $2fxj['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (y7cn5_) {
                    if (y7cn5_['errMsg']['indexOf']('file already exists') != -0x1) cy7_5n['readSync'](cy7_5n['fileListName'], 'utf8', $2fxj);else $2fxj != null && $2fxj['runWith']([0x1, y7cn5_]);
                }
            });
        }, cy7_5n['readSync'] = function (y057c, kj$x2f, x2pjo$, pdom) {
            kj$x2f === void 0x0 && (kj$x2f = 'ascill'), pdom === void 0x0 && (pdom = '');
            var kj2fx = cy7_5n['getFileNativePath'](y057c),
                wt4gae;
            try {
                wt4gae = cy7_5n['fs']['readFileSync'](kj2fx), x2pjo$ != null && x2pjo$['runWith']([0x0, { 'data': wt4gae }]);
            } catch (bvqlie) {
                x2pjo$ != null && x2pjo$['runWith']([0x1]);
            }
        }, cy7_5n['readCache'] = function () {}, cy7_5n['writeCache'] = function (bvw) {
            var od1z = readyUrl['split']('?')[0x0];
            cy7_5n['filesListObj'][od1z] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, cy7_5n['fs']['writeFile']({
                'filePath': cy7_5n['fileNativeDir'] + '/' + cy7_5n['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](cy7_5n['filesListObj']),
                'success': function (um9dz) {},
                'fail': function (y375) {}
            });
        }, cy7_5n['setNativeFileDir'] = function (wve4) {
            cy7_5n['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + wve4;
        }, cy7_5n['filesListObj'] = {}, cy7_5n['fileNativeDir'] = null, cy7_5n['fileListName'] = 'layaairfiles.txt', cy7_5n['ziyuFileData'] = {}, iqblvh(cy7_5n, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), cy7_5n;
    }(ewivl),
        t$k2 = function (weilbv) {
        function zdomp() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], zdomp['__super']['call'](this), this['_sound'] = zdomp['_createSound'](), this['_chanell'] = new zomd9(this['_sound']);
        }
        h8qs63(zdomp, 'laya.wx.mini.MiniSound', weilbv);
        var vb4a = zdomp['prototype'];
        return vb4a['load'] = function (iblveq) {
            var fjx2 = this;
            iblveq = gakf['formatURL'](iblveq), this['url'] = iblveq;
            if (zdomp['_audioCache'][iblveq]) {
                this['event']('complete');
                return;
            }
            function tk4gf() {
                if (zdomp['_null'] != undefined) fjx2['_sound']['onCanplay'](zdomp['_null']), fjx2['_sound']['onError'](zdomp['_null']);else try {
                    fjx2['_sound']['onCanplay'](null), fjx2['_sound']['onError'](null), zdomp['_null'] = null;
                } catch (biqvlh) {
                    console['warn']('[wxmini] _clearSound:' + biqvlh), fjx2['_sound']['onCanplay'](bvhiql), fjx2['_sound']['onError'](bvhiql), zdomp['_null'] = bvhiql;
                }
            }
            function bqhil() {
                ilvqe['loaded'] = !![], ilvqe['event']('complete'), zdomp['_audioCache'][ilvqe['url']] = ilvqe;
            }
            function s6308r(kfgta4) {
                console['error']('errCode=' + kfgta4['errCode'] + '  errMsg=' + kfgta4['errMsg']), ilvqe['event']('error');
            }
            function bvhiql() {}
            this['_sound']['onCanplay'](bqhil), this['_sound']['onError'](s6308r), this['_sound']['src'] = iblveq;
            var ilvqe = this;
        }, vb4a['play'] = function (agewb4, qeib) {
            agewb4 === void 0x0 && (agewb4 = 0x0), qeib === void 0x0 && (qeib = 0x0);
            var eiqlv, lhs86;
            if (this['url'] == evbilq['_tMusic']) {
                if (!zdomp['_musicAudio']) zdomp['_musicAudio'] = this['_sound'];
                eiqlv = zdomp['_musicAudio'], lhs86 = this['_chanell'];
            } else eiqlv = this['_sound'], lhs86 = this['_chanell'];
            return eiqlv['src'] = this['url'], eiqlv['startTime'] = 0x0, lhs86['isStopped'] && (lhs86['url'] = this['url'], lhs86['loops'] = qeib, lhs86['startTime'] = agewb4, lhs86['play'](), evbilq['addChannel'](lhs86)), lhs86;
        }, vb4a['dispose'] = function () {
            var omp2$x = zdomp['_audioCache'][this['url']];
            omp2$x && (omp2$x['src'] = '', delete zdomp['_audioCache'][this['url']]);
        }, iabw(0x0, vb4a, 'duration', function () {
            return this['_sound']['duration'];
        }), zdomp['_createSound'] = function () {
            zdomp['_id']++;
            var ilvhqs = akf4['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return ilvhqs;
        }, zdomp['_musicAudio'] = null, zdomp['_id'] = 0x0, zdomp['_audioCache'] = {}, zdomp['_null'] = undefined, zdomp;
    }(ewivl),
        zomd9 = function (gw4tea) {
        function jf2(jg4tkf) {
            this['_audio'] = null, this['_onEnd'] = null, jf2['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = jg4tkf, this['_onEnd'] = ft4gjk['bind'](this['__onEnd'], this), jg4tkf['onEnded'](this['_onEnd']);
        }
        h8qs63(jf2, 'laya.wx.mini.MiniSoundChannel', gw4tea);
        var d91zum = jf2['prototype'];
        return d91zum['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (qh68sl['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, d91zum['__onNull'] = function () {}, d91zum['play'] = function () {
            this['isStopped'] = ![], evbilq['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, d91zum['stop'] = function () {
            this['isStopped'] = !![], evbilq['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, d91zum['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, d91zum['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], evbilq['addChannel'](this), this['_audio']['play']();
        }, iabw(0x0, d91zum, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), iabw(0x0, d91zum, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), iabw(0x0, d91zum, 'volume', function () {
            return 0x1;
        }, function (m1zud) {}), jf2['_null'] = undefined, jf2;
    }(wbgae),
        shlviq = function () {
        function xkj$2() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = akf4['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        h8qs63(xkj$2, 'laya.wx.mini.MiniVideo');
        var s6r08 = xkj$2['prototype'];
        return s6r08['on'] = function (dzm9, vewabi, f2px) {
            if (dzm9 == 'loadedmetadata') this['onPlayFunc'] = f2px['bind'](vewabi), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else dzm9 == 'ended' && (this['onEndedFunC'] = f2px['bind'](vewabi), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, s6r08['onTimeUpdateFunc'] = function (ewibl) {
            this['position'] = ewibl['position'], this['_duration'] = ewibl['duration'];
        }, s6r08['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, s6r08['onended'] = function (h6308, zd19) {
            this['onEndedFunC'] = zd19['bind'](h6308), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, s6r08['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, s6r08['off'] = function (y570r, gwtea4, opzmx) {
            if (y570r == 'loadedmetadata') this['onPlayFunc'] = opzmx['bind'](gwtea4), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else y570r == 'ended' && (this['onEndedFunC'] = opzmx['bind'](gwtea4), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, s6r08['load'] = function (md1o9z) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = md1o9z;
        }, s6r08['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, s6r08['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, s6r08['size'] = function (dxzpo, mzu91) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = dxzpo, this['videoElement']['height'] = mzu91;
        }, s6r08['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, s6r08['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, iabw(0x0, s6r08, 'duration', function () {
            return this['_duration'];
        }), iabw(0x0, s6r08, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (iqsl6h) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = iqsl6h;
        }), iabw(0x0, s6r08, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), iabw(0x0, s6r08, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), iabw(0x0, s6r08, 'ended', function () {
            return this['videoend'];
        }), iabw(0x0, s6r08, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (rc07y5) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = rc07y5;
        }), iabw(0x0, s6r08, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (oj2$x) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = oj2$x;
        }), iabw(0x0, s6r08, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (w4bgea) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = w4bgea;
        }), iabw(0x0, s6r08, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), iabw(0x0, s6r08, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (s08r36) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = s08r36;
        }), iabw(0x0, s6r08, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (isqh) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = isqh;
        }), iabw(0x0, s6r08, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), iabw(0x0, s6r08, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function ($2fjpx) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = $2fjpx;
        }), iabw(0x0, s6r08, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (p2o$m) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = p2o$m;
        }), iabw(0x0, s6r08, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (r68s30) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = r68s30;
        }), xkj$2;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var kjfg$ in Laya) {
        var nc5r7y = Laya[kjfg$];
        nc5r7y && nc5r7y['__isclass'] && (exports[kjfg$] = nc5r7y);
    }
});