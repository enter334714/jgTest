var q1 = wx.f$;
(function (window, document, geyvi) {
    var k1qb0 = geyvi['un'],
        xc7oh$ = geyvi['uns'],
        $7cos = geyvi['static'],
        g9vyie = geyvi['class'],
        hqprf = geyvi['getset'],
        fph5rx = geyvi['__newvec'],
        a42_uj = laya['utils']['Browser'],
        evygi = laya['events']['Event'],
        wblztm = laya['events']['EventDispatcher'],
        fh$xoc = laya['resource']['HTMLImage'],
        j4au = laya['utils']['Handler'],
        u3_l4z = laya['display']['Input'],
        jia_ = laya['net']['Loader'],
        f5rpx = laya['maths']['Matrix'],
        bw61km = laya['renders']['Render'],
        zbwtl = laya['utils']['RunDriver'],
        iaj2uv = laya['media']['Sound'],
        fp05r = laya['media']['SoundChannel'],
        yiveg9 = laya['media']['SoundManager'],
        ncd7$s = laya['display']['Stage'],
        _4lz3u = laya['net']['URL'],
        $xfcho = laya['utils']['Utils'],
        jvgei = function () {
        function qk05() {}
        return g9vyie(qk05, 'laya.wx.mini.MiniAdpter'), qk05['getJson'] = function (t6mk) {
            return JSON['parse'](t6mk);
        }, qk05['init'] = function (z_tl3, vjie9g) {
            z_tl3 === void 0x0 && (z_tl3 = ![]), vjie9g === void 0x0 && (vjie9g = ![]);
            if (qk05['_inited']) return;
            qk05['window'] = window;
            if (qk05['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            qk05['_inited'] = !![], qk05['isZiYu'] = vjie9g, qk05['isPosMsgYu'] = z_tl3, qk05['EnvConfig'] = {}, !qk05['isZiYu'] && ($co7n['setNativeFileDir']('/layaairGame'), $co7n['existDir']($co7n['fileNativeDir'], j4au['create'](qk05, qk05['onMkdirCallBack']))), qk05['window']['focus'] = function () {}, geyvi['getUrlPath'] = function () {}, qk05['window']['logtime'] = function (avu2j) {}, qk05['window']['alertTimeLog'] = function (gyi9v) {}, qk05['window']['resetShareInfo'] = function () {}, qk05['window']['CanvasRenderingContext2D'] = function () {}, qk05['window']['CanvasRenderingContext2D']['prototype'] = qk05['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], qk05['window']['document']['body']['appendChild'] = function () {}, qk05['EnvConfig']['pixelRatioInt'] = 0x0, zbwtl['getPixelRatio'] = qk05['pixelRatio'], qk05['_preCreateElement'] = a42_uj['createElement'], a42_uj['createElement'] = qk05['createElement'], zbwtl['createShaderCondition'] = qk05['createShaderCondition'], $xfcho['parseXMLFromString'] = qk05['parseXMLFromString'], u3_l4z['_createInputElement'] = a2j_4['_createInputElement'], qk05['EnvConfig']['load'] = jia_['prototype']['load'], jia_['prototype']['load'] = _auij2['prototype']['load'], qk05['isZiYu'] && z_tl3 && wx['onMessage'](function (i_aj) {
                i_aj['isLoad'] && ($co7n['ziyuFileData'][i_aj['url']] = i_aj['data']);
            });
        }, qk05['onMkdirCallBack'] = function (uajv, hc$7) {
            if (!uajv) $co7n['filesListObj'] = JSON['parse'](hc$7['data']);
        }, qk05['pixelRatio'] = function () {
            if (!qk05['EnvConfig']['pixelRatioInt']) try {
                var i2vaj = wx['getSystemInfoSync']();
                return qk05['EnvConfig']['pixelRatioInt'] = i2vaj['pixelRatio'], i2vaj = i2vaj, i2vaj['pixelRatio'];
            } catch (bm1w6k) {}
            return qk05['EnvConfig']['pixelRatioInt'];
        }, qk05['createElement'] = function (vejg9) {
            if (vejg9 == 'canvas') {
                var l3zt4;
                return qk05['idx'] == 0x1 ? qk05['isZiYu'] ? (l3zt4 = sharedCanvas, l3zt4['style'] = {}) : l3zt4 = window['canvas'] : l3zt4 = window['wx']['createCanvas'](), qk05['idx']++, l3zt4;
            } else {
                if (vejg9 == 'textarea' || vejg9 == 'input') return qk05['onCreateInput'](vejg9);else {
                    if (vejg9 == 'div') {
                        var z_34ua = qk05['_preCreateElement'](vejg9);
                        return z_34ua['contains'] = function (ohfr$) {
                            return null;
                        }, z_34ua['removeChild'] = function (x5rp) {}, z_34ua;
                    } else return qk05['_preCreateElement'](vejg9);
                }
            }
        }, qk05['onCreateInput'] = function (jgv29i) {
            var q5pfh = qk05['_preCreateElement'](jgv29i);
            return q5pfh['focus'] = a2j_4['wxinputFocus'], q5pfh['blur'] = a2j_4['wxinputblur'], q5pfh['style'] = {}, q5pfh['value'] = 0x0, q5pfh['parentElement'] = {}, q5pfh['placeholder'] = {}, q5pfh['type'] = {}, q5pfh['setColor'] = function (g9iejv) {}, q5pfh['setType'] = function (h$rxfo) {}, q5pfh['setFontFace'] = function (p5qhf) {}, q5pfh['addEventListener'] = function (sd8c7) {}, q5pfh['contains'] = function (_3tl) {
                return null;
            }, q5pfh['removeChild'] = function (j2a) {}, q5pfh;
        }, qk05['createShaderCondition'] = function (bkwt) {
            var mwztl3 = this,
                gv2ij9 = function () {
                var v2iju = bkwt;
                return mwztl3[bkwt['replace']('this.', '')];
            };
            return gv2ij9;
        }, qk05['EnvConfig'] = null, qk05['window'] = null, qk05['_preCreateElement'] = null, qk05['_inited'] = ![], qk05['wxRequest'] = null, qk05['systemInfo'] = null, qk05['version'] = '0.0.1', qk05['isZiYu'] = ![], qk05['isPosMsgYu'] = ![], qk05['parseXMLFromString'] = function (rq50f) {
            var a_24uj, mtwkb6;
            rq50f = rq50f['replace'](/>\s+</g, '><');
            try {
                a_24uj = new window['Parser']['DOMParser']()['parseFromString'](rq50f, 'text/xml');
            } catch (gvei) {
                throw '需要引入xml解析库文件';
            }
            return a_24uj;
        }, qk05['idx'] = 0x1, qk05;
    }(),
        fch$xo = function () {
        function ey9v() {}
        g9vyie(ey9v, 'laya.wx.mini.MiniImage');
        var o$rf = ey9v['prototype'];
        return o$rf['_loadImage'] = function (wbt6lm) {
            var evyi9 = this,
                uij_a2 = ![];
            wbt6lm['indexOf']('layaNativeDir/') == -0x1 && (uij_a2 = !![], wbt6lm = _4lz3u['formatURL'](wbt6lm));
            if (!$co7n['getFileInfo'](wbt6lm)) {
                if (wbt6lm['indexOf']('http://') != -0x1 || wbt6lm['indexOf']('https://') != -0x1) $co7n['downImg'](wbt6lm, new j4au(ey9v, ey9v['onDownImgCallBack'], [wbt6lm, evyi9]), wbt6lm);else ey9v['onCreateImage'](wbt6lm, evyi9, !![]);
            } else ey9v['onCreateImage'](wbt6lm, evyi9, !uij_a2);
        }, ey9v['onDownImgCallBack'] = function (wzm3tl, av2gi, ve9y) {
            if (!ve9y) ey9v['onCreateImage'](wzm3tl, av2gi);else av2gi['onError'](null);
        }, ey9v['onCreateImage'] = function (pfxr, wmt6b, tlm3zw) {
            tlm3zw === void 0x0 && (tlm3zw = ![]);
            var rxophf;
            if (!tlm3zw) {
                var $xohfc = $co7n['getFileInfo'](pfxr),
                    f5q0pr = $xohfc['md5'];
                rxophf = $co7n['getFileNativePath'](f5q0pr);
            } else rxophf = pfxr;
            if (wmt6b['imgCache'] == null) wmt6b['imgCache'] = {};
            var wz3lm;
            function au_423() {
                wz3lm['onload'] = null, wz3lm['onerror'] = null, delete wmt6b['imgCache'][pfxr];
            }
            ;
            var qp501 = function () {
                au_423(), wmt6b['onLoaded'](wz3lm);
            },
                uv2a = function () {
                au_423(), wmt6b['event']('error', 'Load image failed');
            };
            wmt6b['_type'] == 'nativeimage' ? (wz3lm = new a42_uj['window']['Image'](), wz3lm['crossOrigin'] = '', wz3lm['onload'] = qp501, wz3lm['onerror'] = uv2a, wz3lm['src'] = rxophf, wmt6b['imgCache'][pfxr] = wz3lm) : new fh$xoc['create'](rxophf, {
                'onload': qp501,
                'onerror': uv2a,
                'onCreate': function (m3tzlw) {
                    wz3lm = m3tzlw, wmt6b['imgCache'][pfxr] = m3tzlw;
                }
            });
        }, ey9v;
    }(),
        a2j_4 = function () {
        function ai2u_() {}
        return g9vyie(ai2u_, 'laya.wx.mini.MiniInput'), ai2u_['_createInputElement'] = function () {
            u3_l4z['_initInput'](u3_l4z['area'] = a42_uj['createElement']('textarea')), u3_l4z['_initInput'](u3_l4z['input'] = a42_uj['createElement']('input')), u3_l4z['inputContainer'] = a42_uj['createElement']('div'), u3_l4z['inputContainer']['style']['position'] = 'absolute', u3_l4z['inputContainer']['style']['zIndex'] = 0x186a0, a42_uj['container']['appendChild'](u3_l4z['inputContainer']), u3_l4z['inputContainer']['setPos'] = function (wlztbm, vje9ig) {
                u3_l4z['inputContainer']['style']['left'] = wlztbm + 'px', u3_l4z['inputContainer']['style']['top'] = vje9ig + 'px';
            }, geyvi['stage']['on']('resize', null, ai2u_['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function ($chfo) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), yiveg9['_soundClass'] = bmk1w6, yiveg9['_musicClass'] = bmk1w6, window['_videoClass'] = mkt6b;
        }, ai2u_['_onStageResize'] = function () {
            var h5q = geyvi['stage']['_canvasTransform']['identity']();
            h5q['scale'](a42_uj['width'] / bw61km['canvas']['width'] / zbwtl['getPixelRatio'](), a42_uj['height'] / bw61km['canvas']['height'] / zbwtl['getPixelRatio']());
        }, ai2u_['wxinputFocus'] = function (jge9) {
            var $oc7sn = u3_l4z['inputElement']['target'];
            if ($oc7sn && !$oc7sn['editable']) return;
            jvgei['window']['wx']['offKeyboardConfirm'](), jvgei['window']['wx']['offKeyboardInput'](), jvgei['window']['wx']['showKeyboard']({
                'defaultValue': $oc7sn['text'],
                'maxLength': $oc7sn['maxChars'],
                'multiple': $oc7sn['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (pfqh) {},
                'fail': function (_u423) {}
            }), jvgei['window']['wx']['onKeyboardConfirm'](function (lwbzmt) {
                var qr0p5 = lwbzmt ? lwbzmt['value'] : '';
                $oc7sn['text'] = qr0p5, $oc7sn['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), jvgei['window']['wx']['onKeyboardInput'](function (wmzl3) {
                var m3lzt4 = wmzl3 ? wmzl3['value'] : '';
                if (!$oc7sn['multiline']) {
                    if (m3lzt4['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                $oc7sn['text'] = m3lzt4, $oc7sn['event']('input');
            });
        }, ai2u_['inputEnter'] = function () {
            u3_l4z['inputElement']['target']['focus'] = ![];
        }, ai2u_['wxinputblur'] = function () {
            ai2u_['hideKeyboard']();
        }, ai2u_['hideKeyboard'] = function () {
            jvgei['window']['wx']['offKeyboardConfirm'](), jvgei['window']['wx']['offKeyboardInput'](), jvgei['window']['wx']['hideKeyboard']({
                'success': function (fch$o) {
                    console['log']('隐藏键盘');
                },
                'fail': function (qpf5h) {
                    console['log']('隐藏键盘出错:' + (qpf5h ? qpf5h['errMsg'] : ''));
                }
            });
        }, ai2u_;
    }(),
        _auij2 = function () {
        function xch7o() {}
        g9vyie(xch7o, 'laya.wx.mini.MiniLoader');
        var evg9yi = xch7o['prototype'];
        return evg9yi['load'] = function ($7sonc, mblzw, wtbml6, _z4t3l, $noxc7) {
            wtbml6 === void 0x0 && (wtbml6 = !![]), $noxc7 === void 0x0 && ($noxc7 = ![]);
            var egyi9 = this;
            egyi9['_url'] = $7sonc;
            if ($7sonc['indexOf']('data:image') === 0x0) egyi9['_type'] = mblzw = 'image';else egyi9['_type'] = mblzw || (mblzw = egyi9['getTypeFromUrl']($7sonc));
            egyi9['_cache'] = wtbml6, egyi9['_data'] = null;
            var _3u4zl = 'ascii';
            if ($7sonc['indexOf']('.fnt') != -0x1) _3u4zl = 'utf8';else mblzw == 'arraybuffer' && (_3u4zl = '');
            ;
            var _lu3z = $xfcho['getFileExtension']($7sonc);
            if (xch7o['_fileTypeArr']['indexOf'](_lu3z) != -0x1) jvgei['EnvConfig']['load']['call'](this, $7sonc, mblzw, wtbml6, _z4t3l, $noxc7);else {
                if (!$co7n['getFileInfo']($7sonc)) {
                    if ($7sonc['indexOf']('layaNativeDir/') != -0x1) {
                        if (jvgei['isZiYu']) {
                            var k5 = $co7n['ziyuFileData'][$7sonc];
                            egyi9['onLoaded'](k5);
                            return;
                        } else {
                            cosnole['log']('read read'), $co7n['read']($7sonc, _3u4zl, new j4au(xch7o, xch7o['onReadNativeCallBack'], [_3u4zl, $7sonc, mblzw, wtbml6, _z4t3l, $noxc7, egyi9]));
                            return;
                        }
                    }
                    if (_4lz3u['rootPath'] == '') var qfh = $7sonc;else qfh = $7sonc['split'](_4lz3u['rootPath'])[0x0];
                    $7sonc['indexOf']('http://') != -0x1 || $7sonc['indexOf']('https://') != -0x1 ? jvgei['EnvConfig']['load']['call'](egyi9, $7sonc, mblzw, wtbml6, _z4t3l, $noxc7) : $co7n['readFile'](qfh, _3u4zl, new j4au(xch7o, xch7o['onReadNativeCallBack'], [_3u4zl, $7sonc, mblzw, wtbml6, _z4t3l, $noxc7, egyi9]), $7sonc);
                } else jvgei['EnvConfig']['load']['call'](this, $7sonc, mblzw, wtbml6, _z4t3l, $noxc7);
            }
        }, evg9yi['resMgrLoad'] = function (xhcfo$, h$7oxc, kbtwm6, cdsn78, rxpo, l3zm4, qf5hrp) {
            kbtwm6 === void 0x0 && (kbtwm6 = 0x0), cdsn78 === void 0x0 && (cdsn78 = ![]), rxpo === void 0x0 && (rxpo = ![]), l3zm4 === void 0x0 && (l3zm4 = 0x0), qf5hrp === void 0x0 && (qf5hrp = 0x3), xhcfo$['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', xhcfo$), jvgei['EnvConfig']['resMgrLoad'](xhcfo$, (ia2uj_, ncx7o, ds7$n) => {
                xch7o['prototype']['resMgrLoadCallBack'](ia2uj_, ncx7o, ds7$n, h$7oxc);
            }, kbtwm6, cdsn78, rxpo, l3zm4, qf5hrp);
        }, evg9yi['resMgrLoadCallBack'] = function (zl_u4, t6mwk, t3_l4z, blw6m) {
            console['log']('buff:::', zl_u4, t3_l4z, $co7n['fileNativeDir'] + '///' + $co7n['fileListName']), blw6m(zl_u4, t6mwk, t3_l4z);
        }, evg9yi['clearRes'] = function (c$hx, ijau_) {
            ijau_ === void 0x0 && (ijau_ = ![]);
            var avg2 = this;
            avg2['clearRes'](c$hx, ijau_);
            var i29 = $co7n['getFileInfo'](c$hx);
            if (i29 && (c$hx['indexOf']('http://') != -0x1 || c$hx['indexOf']('https://') != -0x1)) {
                var juia2v = i29['md5'],
                    rh5pxf = $co7n['getFileNativePath'](juia2v);
                $co7n['remove'](rh5pxf);
            }
        }, xch7o['onReadNativeCallBack'] = function (cdsn$7, gi2ajv, tmw6bl, q5k0, hofr$, ja_u2, oxf$ch, cnds, evijg9) {
            q5k0 === void 0x0 && (q5k0 = !![]), ja_u2 === void 0x0 && (ja_u2 = ![]), cnds === void 0x0 && (cnds = 0x0);
            if (!cnds) {
                var ujvia2;
                if (tmw6bl == 'json' || tmw6bl == 'atlas') ujvia2 = jvgei['getJson'](evijg9['data']);else tmw6bl == 'xml' ? ujvia2 = $xfcho['parseXMLFromString'](evijg9['data']) : ujvia2 = evijg9['data'];
                oxf$ch['onLoaded'](ujvia2), !jvgei['isZiYu'] && jvgei['isPosMsgYu'] && tmw6bl != 'arraybuffer' && wx['postMessage']({
                    'url': gi2ajv,
                    'data': ujvia2,
                    'isLoad': !![]
                });
            } else cnds == 0x1 && jvgei['EnvConfig']['load']['call'](oxf$ch, gi2ajv, tmw6bl, q5k0, hofr$, ja_u2);
        }, $7cos(xch7o, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), xch7o;
    }(),
        $co7n = function (x7co$) {
        function x$roh() {
            x$roh['__super']['call'](this);
            ;
        }
        return g9vyie(x$roh, 'laya.wx.mini.MiniFileMgr', x7co$), x$roh['isLoadFile'] = function (ivj29g) {
            return x$roh['_fileTypeArr']['indexOf'](ivj29g) != -0x1 ? !![] : ![];
        }, x$roh['getFileInfo'] = function (k61qb0) {
            var ohfxr = k61qb0['split']('?')[0x0],
                lzmt4 = x$roh['filesListObj'][ohfxr];
            if (lzmt4 == null) return null;else return lzmt4;
            return null;
        }, x$roh['onFileUpdate'] = function (zmtbw, fhp5xr) {
            var v2gjai = zmtbw['split']('/'),
                l6wmtb = v2gjai[v2gjai['length'] - 0x1],
                qb0 = x$roh['getFileInfo'](fhp5xr);
            if (qb0 == null) x$roh['onSaveFile'](fhp5xr, l6wmtb);else {
                if (qb0['readyUrl'] != fhp5xr) x$roh['remove'](l6wmtb, fhp5xr);
            }
        }, x$roh['exits'] = function (w6mkb1, _3lz) {
            var z4t = x$roh['getFileNativePath'](w6mkb1);
            x$roh['fs']['getFileInfo']({
                'filePath': z4t,
                'success': function (oxn$) {
                    _3lz != null && _3lz['runWith']([0x0, oxn$]);
                },
                'fail': function (hr5fqp) {
                    _3lz != null && _3lz['runWith']([0x1, hr5fqp]);
                }
            });
        }, x$roh['read'] = function (hpxfor, gije, r$ofx, ijau) {
            gije === void 0x0 && (gije = 'ascill'), ijau === void 0x0 && (ijau = '');
            var y9vie;
            ijau != '' ? y9vie = x$roh['getFileNativePath'](hpxfor) : y9vie = hpxfor, x$roh['fs']['readFile']({
                'filePath': y9vie,
                'encoding': gije,
                'success': function (hpfq) {
                    r$ofx != null && r$ofx['runWith']([0x0, hpfq]);
                },
                'fail': function (fphr5q) {
                    if (fphr5q && ijau != '') x$roh['down'](ijau, gije, r$ofx, ijau);else r$ofx != null && r$ofx['runWith']([0x1]);
                }
            });
        }, x$roh['readNativeFile'] = function (_4zt3, bkt6) {
            x$roh['fs']['readFile']({
                'filePath': _4zt3,
                'encoding': '',
                'success': function ($cd7n) {
                    bkt6 != null && bkt6['runWith']([0x0]);
                },
                'fail': function (zwm) {
                    bkt6 != null && bkt6['runWith']([0x1]);
                }
            });
        }, x$roh['down'] = function (nsco7$, m1kw6b, fphqr5, $foch) {
            m1kw6b === void 0x0 && (m1kw6b = 'ascill'), $foch === void 0x0 && ($foch = '');
            var ivajg = x$roh['getFileNativePath']($foch),
                m3tzl4 = x$roh['wxdown']({
                'url': nsco7$,
                'filePath': ivajg,
                'success': function (jg2va) {
                    if (jg2va['statusCode'] === 0xc8) x$roh['readFile'](jg2va['filePath'], m1kw6b, fphqr5, $foch);
                },
                'fail': function (fr0q5p) {
                    fphqr5 != null && fphqr5['runWith']([0x1, fr0q5p]);
                }
            });
            m3tzl4['onProgressUpdate'](function (xho$fr) {
                fphqr5 != null && fphqr5['runWith']([0x2, xho$fr['progress']]);
            });
        }, x$roh['readFile'] = function (p51q0, lz3wt, lz3tw, $orx) {
            lz3wt === void 0x0 && (lz3wt = 'ascill'), $orx === void 0x0 && ($orx = ''), x$roh['fs']['readFile']({
                'filePath': p51q0,
                'encoding': lz3wt,
                'success': function (mtbzwl) {
                    if (p51q0['indexOf']('http://') != -0x1 || p51q0['indexOf']('https://') != -0x1) x$roh['onFileUpdate'](p51q0, $orx);
                    lz3tw != null && lz3tw['runWith']([0x0, mtbzwl]);
                },
                'fail': function (fxhro) {
                    if (fxhro) lz3tw != null && lz3tw['runWith']([0x1, fxhro]);
                }
            });
        }, x$roh['downImg'] = function (j2i9vg, vej9ig, xrpfo) {
            xrpfo === void 0x0 && (xrpfo = '');
            var bw610 = x$roh['wxdown']({
                'url': j2i9vg,
                'success': function ($n7ox) {
                    $n7ox['statusCode'] === 0xc8 && x$roh['copyFile']($n7ox['tempFilePath'], xrpfo, vej9ig);
                },
                'fail': function (csnd78) {
                    vej9ig != null && vej9ig['runWith']([0x1, csnd78]);
                }
            });
        }, x$roh['copyFile'] = function (rx$h, i2gvja, yvi) {
            var jiv9ge = rx$h['split']('/'),
                a_42 = jiv9ge[jiv9ge['length'] - 0x1],
                a3u2_4 = i2gvja['split']('?')[0x0],
                cho$f = x$roh['getFileInfo'](i2gvja),
                vi92 = x$roh['getFileNativePath'](a_42);
            x$roh['fs']['copyFile']({
                'srcPath': rx$h,
                'destPath': vi92,
                'success': function (fhq) {
                    if (!cho$f) x$roh['onSaveFile'](i2gvja, a_42), yvi != null && yvi['runWith']([0x0]);else {
                        if (cho$f['readyUrl'] != i2gvja) x$roh['remove'](a_42, i2gvja, yvi);
                    }
                },
                'fail': function (o$7cx) {
                    yvi != null && yvi['runWith']([0x1, o$7cx]);
                }
            });
        }, x$roh['getFileNativePath'] = function (poh) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + poh;
        }, x$roh['remove'] = function (jviua, ox$7, hx$fco) {
            ox$7 === void 0x0 && (ox$7 = '');
            var $fcx = x$roh['getFileInfo'](ox$7),
                l3z_4 = x$roh['getFileNativePath']($fcx['md5']);
            geyvi['loader']['clearRes']($fcx['readyUrl']), x$roh['fs']['unlink']({
                'filePath': l3z_4,
                'success': function ($oxc) {
                    if (ox$7 != '') x$roh['onSaveFile'](ox$7, jviua);
                    hx$fco != null && hx$fco['runWith']([0x0]);
                },
                'fail': function (sn8c) {}
            });
        }, x$roh['onSaveFile'] = function ($fohcx, sdc8n) {
            var r0p = $fohcx['split']('?')[0x0];
            x$roh['filesListObj'][r0p] = {
                'md5': sdc8n,
                'readyUrl': $fohcx
            }, x$roh['fs']['writeFile']({
                'filePath': x$roh['fileNativeDir'] + '/' + x$roh['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](x$roh['filesListObj']),
                'success': function (z3_l4u) {
                    console['log']('写入测试测试成功：', z3_l4u);
                },
                'fail': function (p50r1q) {
                    console['log']('写入测试测试失败：', p50r1q);
                }
            });
        }, x$roh['existDir'] = function (tmlz4, fxoprh) {
            x$roh['fs']['mkdir']({
                'dirPath': tmlz4,
                'success': function (k560q) {
                    fxoprh != null && fxoprh['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function ($ohfc) {
                    if ($ohfc['errMsg']['indexOf']('file already exists') != -0x1) x$roh['readSync'](x$roh['fileListName'], 'utf8', fxoprh);else fxoprh != null && fxoprh['runWith']([0x1, $ohfc]);
                }
            });
        }, x$roh['readSync'] = function (_uz4a, j9e, mwk16, q165k) {
            j9e === void 0x0 && (j9e = 'ascill'), q165k === void 0x0 && (q165k = '');
            var gjaiv2 = x$roh['getFileNativePath'](_uz4a),
                _4aj2;
            try {
                _4aj2 = x$roh['fs']['readFileSync'](gjaiv2), mwk16 != null && mwk16['runWith']([0x0, { 'data': _4aj2 }]);
            } catch (nd7) {
                mwk16 != null && mwk16['runWith']([0x1]);
            }
        }, x$roh['readCache'] = function () {}, x$roh['writeCache'] = function (_34zlu) {
            var qp5k0 = readyUrl['split']('?')[0x0];
            x$roh['filesListObj'][qp5k0] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, x$roh['fs']['writeFile']({
                'filePath': x$roh['fileNativeDir'] + '/' + x$roh['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](x$roh['filesListObj']),
                'success': function (ohxrf) {},
                'fail': function (e9ivjg) {}
            });
        }, x$roh['setNativeFileDir'] = function (zmtw3) {
            x$roh['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + zmtw3;
        }, x$roh['filesListObj'] = {}, x$roh['fileNativeDir'] = null, x$roh['fileListName'] = 'layaairfiles.txt', x$roh['ziyuFileData'] = {}, $7cos(x$roh, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), x$roh;
    }(wblztm),
        bmk1w6 = function (vi9gey) {
        function c7so$n() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], c7so$n['__super']['call'](this), this['_sound'] = c7so$n['_createSound'](), this['_chanell'] = new $7xoc(this['_sound']);
        }
        g9vyie(c7so$n, 'laya.wx.mini.MiniSound', vi9gey);
        var gav2ji = c7so$n['prototype'];
        return gav2ji['load'] = function (evgi9) {
            var fq5prh = this;
            evgi9 = _4lz3u['formatURL'](evgi9), this['url'] = evgi9;
            if (c7so$n['_audioCache'][evgi9]) {
                this['event']('complete');
                return;
            }
            function hc$f() {
                if (c7so$n['_null'] != undefined) fq5prh['_sound']['onCanplay'](c7so$n['_null']), fq5prh['_sound']['onError'](c7so$n['_null']);else try {
                    fq5prh['_sound']['onCanplay'](null), fq5prh['_sound']['onError'](null), c7so$n['_null'] = null;
                } catch (x$on7c) {
                    console['warn']('[wxmini] _clearSound:' + x$on7c), fq5prh['_sound']['onCanplay'](bwmt6l), fq5prh['_sound']['onError'](bwmt6l), c7so$n['_null'] = bwmt6l;
                }
            }
            function fx5() {
                oh$rxf['loaded'] = !![], oh$rxf['event']('complete'), c7so$n['_audioCache'][oh$rxf['url']] = oh$rxf;
            }
            function ye9g(xc7h$) {
                console['error']('errCode=' + xc7h$['errCode'] + '  errMsg=' + xc7h$['errMsg']), oh$rxf['event']('error');
            }
            function bwmt6l() {}
            this['_sound']['onCanplay'](fx5), this['_sound']['onError'](ye9g), this['_sound']['src'] = evgi9;
            var oh$rxf = this;
        }, gav2ji['play'] = function (l_4zt, g9ivye) {
            l_4zt === void 0x0 && (l_4zt = 0x0), g9ivye === void 0x0 && (g9ivye = 0x0);
            var lwzbmt, nosc7;
            if (this['url'] == yiveg9['_tMusic']) {
                if (!c7so$n['_musicAudio']) c7so$n['_musicAudio'] = this['_sound'];
                lwzbmt = c7so$n['_musicAudio'], nosc7 = this['_chanell'];
            } else lwzbmt = this['_sound'], nosc7 = this['_chanell'];
            return lwzbmt['src'] = this['url'], lwzbmt['startTime'] = 0x0, nosc7['isStopped'] && (nosc7['url'] = this['url'], nosc7['loops'] = g9ivye, nosc7['startTime'] = l_4zt, nosc7['play'](), yiveg9['addChannel'](nosc7)), nosc7;
        }, gav2ji['dispose'] = function () {
            var cns87d = c7so$n['_audioCache'][this['url']];
            cns87d && (cns87d['src'] = '', delete c7so$n['_audioCache'][this['url']]);
        }, hqprf(0x0, gav2ji, 'duration', function () {
            return this['_sound']['duration'];
        }), c7so$n['_createSound'] = function () {
            c7so$n['_id']++;
            var tl3z4m = jvgei['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return tl3z4m;
        }, c7so$n['_musicAudio'] = null, c7so$n['_id'] = 0x0, c7so$n['_audioCache'] = {}, c7so$n['_null'] = undefined, c7so$n;
    }(wblztm),
        $7xoc = function (vegj) {
        function qf5rp(x$7nc) {
            this['_audio'] = null, this['_onEnd'] = null, qf5rp['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = x$7nc, this['_onEnd'] = $xfcho['bind'](this['__onEnd'], this), x$7nc['onEnded'](this['_onEnd']);
        }
        g9vyie(qf5rp, 'laya.wx.mini.MiniSoundChannel', vegj);
        var wtb6l = qf5rp['prototype'];
        return wtb6l['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (geyvi['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, wtb6l['__onNull'] = function () {}, wtb6l['play'] = function () {
            this['isStopped'] = ![], yiveg9['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, wtb6l['stop'] = function () {
            this['isStopped'] = !![], yiveg9['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, wtb6l['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, wtb6l['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], yiveg9['addChannel'](this), this['_audio']['play']();
        }, hqprf(0x0, wtb6l, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), hqprf(0x0, wtb6l, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), hqprf(0x0, wtb6l, 'volume', function () {
            return 0x1;
        }, function (jei) {}), qf5rp['_null'] = undefined, qf5rp;
    }(fp05r),
        mkt6b = function () {
        function ncsd() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = jvgei['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        g9vyie(ncsd, 'laya.wx.mini.MiniVideo');
        var w6k0b = ncsd['prototype'];
        return w6k0b['on'] = function (va2jig, s7n$co, jiga) {
            if (va2jig == 'loadedmetadata') this['onPlayFunc'] = jiga['bind'](s7n$co), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else va2jig == 'ended' && (this['onEndedFunC'] = jiga['bind'](s7n$co), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, w6k0b['onTimeUpdateFunc'] = function (tkw6b) {
            this['position'] = tkw6b['position'], this['_duration'] = tkw6b['duration'];
        }, w6k0b['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, w6k0b['onended'] = function (blwtmz, a2uiv) {
            this['onEndedFunC'] = a2uiv['bind'](blwtmz), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, w6k0b['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, w6k0b['off'] = function (u2ai_j, w160k, horfxp) {
            if (u2ai_j == 'loadedmetadata') this['onPlayFunc'] = horfxp['bind'](w160k), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else u2ai_j == 'ended' && (this['onEndedFunC'] = horfxp['bind'](w160k), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, w6k0b['load'] = function (mwtk6) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = mwtk6;
        }, w6k0b['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, w6k0b['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, w6k0b['size'] = function (z43a_u, ocnx$7) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = z43a_u, this['videoElement']['height'] = ocnx$7;
        }, w6k0b['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, w6k0b['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, hqprf(0x0, w6k0b, 'duration', function () {
            return this['_duration'];
        }), hqprf(0x0, w6k0b, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function ($cnox7) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = $cnox7;
        }), hqprf(0x0, w6k0b, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), hqprf(0x0, w6k0b, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), hqprf(0x0, w6k0b, 'ended', function () {
            return this['videoend'];
        }), hqprf(0x0, w6k0b, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (rfh5xp) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = rfh5xp;
        }), hqprf(0x0, w6k0b, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (ltm34) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = ltm34;
        }), hqprf(0x0, w6k0b, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (fqpr50) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = fqpr50;
        }), hqprf(0x0, w6k0b, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), hqprf(0x0, w6k0b, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (lm3z) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = lm3z;
        }), hqprf(0x0, w6k0b, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (wztm3l) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = wztm3l;
        }), hqprf(0x0, w6k0b, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), hqprf(0x0, w6k0b, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (wtblz) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = wtblz;
        }), hqprf(0x0, w6k0b, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (rf0p5q) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = rf0p5q;
        }), hqprf(0x0, w6k0b, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (hxrpo) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = hxrpo;
        }), ncsd;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var l4u_3z in Laya) {
        var u34l = Laya[l4u_3z];
        u34l && u34l['__isclass'] && (exports[l4u_3z] = u34l);
    }
});