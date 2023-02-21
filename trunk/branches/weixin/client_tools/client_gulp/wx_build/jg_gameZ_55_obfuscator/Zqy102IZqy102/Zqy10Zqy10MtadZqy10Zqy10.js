var J = wx.h$;
(function (window, document, hfe8) {
    var p9ylz1 = hfe8['un'],
        ehsf = hfe8['uns'],
        o0nkiv = hfe8['static'],
        yxlq = hfe8['class'],
        tp6am7 = hfe8['getset'],
        g$kxv0 = hfe8['__newvec'],
        _f38rs = laya['utils']['Browser'],
        h4eu5d = laya['events']['Event'],
        fe8sh = laya['events']['EventDispatcher'],
        hu5 = laya['resource']['HTMLImage'],
        deb5u4 = laya['utils']['Handler'],
        k0x$q = laya['display']['Input'],
        g0vx$ = laya['net']['Loader'],
        xgql$0 = laya['maths']['Matrix'],
        i$vk0x = laya['renders']['Render'],
        df4hu = laya['utils']['RunDriver'],
        kion0 = laya['media']['Sound'],
        m2ra7 = laya['media']['SoundChannel'],
        hs8f_e = laya['media']['SoundManager'],
        d4efhu = laya['display']['Stage'],
        s3_82r = laya['net']['URL'],
        k0v$ = laya['utils']['Utils'],
        z9y6p1 = function () {
        function e8h_df() {}
        return yxlq(e8h_df, 'laya.wx.mini.MiniAdpter'), e8h_df['getJson'] = function (lz9qy) {
            return JSON['parse'](lz9qy);
        }, e8h_df['init'] = function (l0qgx$, aw3r2s) {
            l0qgx$ === void 0x0 && (l0qgx$ = ![]), aw3r2s === void 0x0 && (aw3r2s = ![]);
            if (e8h_df['_inited']) return;
            e8h_df['window'] = window;
            if (e8h_df['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            e8h_df['_inited'] = !![], e8h_df['isZiYu'] = aw3r2s, e8h_df['isPosMsgYu'] = l0qgx$, e8h_df['EnvConfig'] = {}, !e8h_df['isZiYu'] && (xkv$0['setNativeFileDir']('/layaairGame'), xkv$0['existDir'](xkv$0['fileNativeDir'], deb5u4['create'](e8h_df, e8h_df['onMkdirCallBack']))), e8h_df['window']['focus'] = function () {}, hfe8['getUrlPath'] = function () {}, e8h_df['window']['logtime'] = function (s_28r3) {}, e8h_df['window']['alertTimeLog'] = function (y9) {}, e8h_df['window']['resetShareInfo'] = function () {}, e8h_df['window']['CanvasRenderingContext2D'] = function () {}, e8h_df['window']['CanvasRenderingContext2D']['prototype'] = e8h_df['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], e8h_df['window']['document']['body']['appendChild'] = function () {}, e8h_df['EnvConfig']['pixelRatioInt'] = 0x0, df4hu['getPixelRatio'] = e8h_df['pixelRatio'], e8h_df['_preCreateElement'] = _f38rs['createElement'], _f38rs['createElement'] = e8h_df['createElement'], df4hu['createShaderCondition'] = e8h_df['createShaderCondition'], k0v$['parseXMLFromString'] = e8h_df['parseXMLFromString'], k0x$q['_createInputElement'] = glx$qy['_createInputElement'], e8h_df['EnvConfig']['load'] = g0vx$['prototype']['load'], g0vx$['prototype']['load'] = $i0kx['prototype']['load'], e8h_df['isZiYu'] && l0qgx$ && wx['onMessage'](function (pzy69) {
                pzy69['isLoad'] && (xkv$0['ziyuFileData'][pzy69['url']] = pzy69['data']);
            });
        }, e8h_df['onMkdirCallBack'] = function (ra23, voik0x) {
            if (!ra23) xkv$0['filesListObj'] = JSON['parse'](voik0x['data']);
        }, e8h_df['pixelRatio'] = function () {
            if (!e8h_df['EnvConfig']['pixelRatioInt']) try {
                var u4edfh = wx['getSystemInfoSync']();
                return e8h_df['EnvConfig']['pixelRatioInt'] = u4edfh['pixelRatio'], u4edfh = u4edfh, u4edfh['pixelRatio'];
            } catch (kvno0i) {}
            return e8h_df['EnvConfig']['pixelRatioInt'];
        }, e8h_df['createElement'] = function (oijvcn) {
            if (oijvcn == 'canvas') {
                var v$gkx;
                return e8h_df['idx'] == 0x1 ? e8h_df['isZiYu'] ? (v$gkx = sharedCanvas, v$gkx['style'] = {}) : v$gkx = window['canvas'] : v$gkx = window['wx']['createCanvas'](), e8h_df['idx']++, v$gkx;
            } else {
                if (oijvcn == 'textarea' || oijvcn == 'input') return e8h_df['onCreateInput'](oijvcn);else {
                    if (oijvcn == 'div') {
                        var cjivo = e8h_df['_preCreateElement'](oijvcn);
                        return cjivo['contains'] = function (nvcoki) {
                            return null;
                        }, cjivo['removeChild'] = function (zlp91) {}, cjivo;
                    } else return e8h_df['_preCreateElement'](oijvcn);
                }
            }
        }, e8h_df['onCreateInput'] = function (_8fed) {
            var qy = e8h_df['_preCreateElement'](_8fed);
            return qy['focus'] = glx$qy['wxinputFocus'], qy['blur'] = glx$qy['wxinputblur'], qy['style'] = {}, qy['value'] = 0x0, qy['parentElement'] = {}, qy['placeholder'] = {}, qy['type'] = {}, qy['setColor'] = function (h4ud) {}, qy['setType'] = function (zm16t) {}, qy['setFontFace'] = function (tp6m7z) {}, qy['addEventListener'] = function (wr72a) {}, qy['contains'] = function (q1y9g) {
                return null;
            }, qy['removeChild'] = function (kg$xq0) {}, qy;
        }, e8h_df['createShaderCondition'] = function (k0xgv) {
            var pl9y1 = this,
                xqk0g$ = function () {
                var p1l9z = k0xgv;
                return pl9y1[k0xgv['replace']('this.', '')];
            };
            return xqk0g$;
        }, e8h_df['EnvConfig'] = null, e8h_df['window'] = null, e8h_df['_preCreateElement'] = null, e8h_df['_inited'] = ![], e8h_df['wxRequest'] = null, e8h_df['systemInfo'] = null, e8h_df['version'] = '0.0.1', e8h_df['isZiYu'] = ![], e8h_df['isPosMsgYu'] = ![], e8h_df['parseXMLFromString'] = function (r7w2am) {
            var h38f_s, sw32r;
            r7w2am = r7w2am['replace'](/>\s+</g, '><');
            try {
                h38f_s = new window['Parser']['DOMParser']()['parseFromString'](r7w2am, 'text/xml');
            } catch (wa67) {
                throw '需要引入xml解析库文件';
            }
            return h38f_s;
        }, e8h_df['idx'] = 0x1, e8h_df;
    }(),
        _sf3h = function () {
        function x0gql() {}
        yxlq(x0gql, 'laya.wx.mini.MiniImage');
        var $kiv = x0gql['prototype'];
        return $kiv['_loadImage'] = function (rs_32) {
            var bd5u4e = this,
                a327rw = ![];
            rs_32['indexOf']('layaNativeDir/') == -0x1 && (a327rw = !![], rs_32 = s3_82r['formatURL'](rs_32));
            if (!xkv$0['getFileInfo'](rs_32)) {
                if (rs_32['indexOf']('http://') != -0x1 || rs_32['indexOf']('https://') != -0x1) xkv$0['downImg'](rs_32, new deb5u4(x0gql, x0gql['onDownImgCallBack'], [rs_32, bd5u4e]), rs_32);else x0gql['onCreateImage'](rs_32, bd5u4e, !![]);
            } else x0gql['onCreateImage'](rs_32, bd5u4e, !a327rw);
        }, x0gql['onDownImgCallBack'] = function (d5u4e, deb4u5, x0v$) {
            if (!x0v$) x0gql['onCreateImage'](d5u4e, deb4u5);else deb4u5['onError'](null);
        }, x0gql['onCreateImage'] = function (dhu4fe, pt916, zp91l) {
            zp91l === void 0x0 && (zp91l = ![]);
            var $0kxvg;
            if (!zp91l) {
                var _s83r2 = xkv$0['getFileInfo'](dhu4fe),
                    w3a7 = _s83r2['md5'];
                $0kxvg = xkv$0['getFileNativePath'](w3a7);
            } else $0kxvg = dhu4fe;
            if (pt916['imgCache'] == null) pt916['imgCache'] = {};
            var vxki0o;
            function mwt2a() {
                vxki0o['onload'] = null, vxki0o['onerror'] = null, delete pt916['imgCache'][dhu4fe];
            }
            ;
            var e4db5 = function () {
                mwt2a(), pt916['onLoaded'](vxki0o);
            },
                ikx0vo = function () {
                mwt2a(), pt916['event']('error', 'Load image failed');
            };
            pt916['_type'] == 'nativeimage' ? (vxki0o = new _f38rs['window']['Image'](), vxki0o['crossOrigin'] = '', vxki0o['onload'] = e4db5, vxki0o['onerror'] = ikx0vo, vxki0o['src'] = $0kxvg, pt916['imgCache'][dhu4fe] = vxki0o) : new hu5['create']($0kxvg, {
                'onload': e4db5,
                'onerror': ikx0vo,
                'onCreate': function (e_d4h) {
                    vxki0o = e_d4h, pt916['imgCache'][dhu4fe] = e_d4h;
                }
            });
        }, x0gql;
    }(),
        glx$qy = function () {
        function iovkcn() {}
        return yxlq(iovkcn, 'laya.wx.mini.MiniInput'), iovkcn['_createInputElement'] = function () {
            k0x$q['_initInput'](k0x$q['area'] = _f38rs['createElement']('textarea')), k0x$q['_initInput'](k0x$q['input'] = _f38rs['createElement']('input')), k0x$q['inputContainer'] = _f38rs['createElement']('div'), k0x$q['inputContainer']['style']['position'] = 'absolute', k0x$q['inputContainer']['style']['zIndex'] = 0x186a0, _f38rs['container']['appendChild'](k0x$q['inputContainer']), k0x$q['inputContainer']['setPos'] = function (onciv, kv$xg0) {
                k0x$q['inputContainer']['style']['left'] = onciv + 'px', k0x$q['inputContainer']['style']['top'] = kv$xg0 + 'px';
            }, hfe8['stage']['on']('resize', null, iovkcn['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (icknvo) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), hs8f_e['_soundClass'] = ok0xi, hs8f_e['_musicClass'] = ok0xi, window['_videoClass'] = ude5b4;
        }, iovkcn['_onStageResize'] = function () {
            var lg1q = hfe8['stage']['_canvasTransform']['identity']();
            lg1q['scale'](_f38rs['width'] / i$vk0x['canvas']['width'] / df4hu['getPixelRatio'](), _f38rs['height'] / i$vk0x['canvas']['height'] / df4hu['getPixelRatio']());
        }, iovkcn['wxinputFocus'] = function (p7at) {
            var ws8r23 = k0x$q['inputElement']['target'];
            if (ws8r23 && !ws8r23['editable']) return;
            z9y6p1['window']['wx']['offKeyboardConfirm'](), z9y6p1['window']['wx']['offKeyboardInput'](), z9y6p1['window']['wx']['showKeyboard']({
                'defaultValue': ws8r23['text'],
                'maxLength': ws8r23['maxChars'],
                'multiple': ws8r23['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (fd8h_) {},
                'fail': function (_3hf8) {}
            }), z9y6p1['window']['wx']['onKeyboardConfirm'](function (o0kvix) {
                var w6ma7 = o0kvix ? o0kvix['value'] : '';
                ws8r23['text'] = w6ma7, ws8r23['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), z9y6p1['window']['wx']['onKeyboardInput'](function (ijvnc) {
                var vxo0i = ijvnc ? ijvnc['value'] : '';
                if (!ws8r23['multiline']) {
                    if (vxo0i['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                ws8r23['text'] = vxo0i, ws8r23['event']('input');
            });
        }, iovkcn['inputEnter'] = function () {
            k0x$q['inputElement']['target']['focus'] = ![];
        }, iovkcn['wxinputblur'] = function () {
            iovkcn['hideKeyboard']();
        }, iovkcn['hideKeyboard'] = function () {
            z9y6p1['window']['wx']['offKeyboardConfirm'](), z9y6p1['window']['wx']['offKeyboardInput'](), z9y6p1['window']['wx']['hideKeyboard']({
                'success': function ($qkxg0) {
                    console['log']('隐藏键盘');
                },
                'fail': function (lzy19) {
                    console['log']('隐藏键盘出错:' + (lzy19 ? lzy19['errMsg'] : ''));
                }
            });
        }, iovkcn;
    }(),
        $i0kx = function () {
        function zq1l() {}
        yxlq(zq1l, 'laya.wx.mini.MiniLoader');
        var fehs8_ = zq1l['prototype'];
        return fehs8_['load'] = function (y1z9lq, r2a7m, p61mt, g0xq$, he4d_) {
            p61mt === void 0x0 && (p61mt = !![]), he4d_ === void 0x0 && (he4d_ = ![]);
            var jnovc = this;
            jnovc['_url'] = y1z9lq;
            if (y1z9lq['indexOf']('data:image') === 0x0) jnovc['_type'] = r2a7m = 'image';else jnovc['_type'] = r2a7m || (r2a7m = jnovc['getTypeFromUrl'](y1z9lq));
            jnovc['_cache'] = p61mt, jnovc['_data'] = null;
            var v$0xg = 'ascii';
            if (y1z9lq['indexOf']('.fnt') != -0x1) v$0xg = 'utf8';else r2a7m == 'arraybuffer' && (v$0xg = '');
            ;
            var gq$x0l = k0v$['getFileExtension'](y1z9lq);
            if (zq1l['_fileTypeArr']['indexOf'](gq$x0l) != -0x1) z9y6p1['EnvConfig']['load']['call'](this, y1z9lq, r2a7m, p61mt, g0xq$, he4d_);else {
                if (!xkv$0['getFileInfo'](y1z9lq)) {
                    if (y1z9lq['indexOf']('layaNativeDir/') != -0x1) {
                        if (z9y6p1['isZiYu']) {
                            var tm6w = xkv$0['ziyuFileData'][y1z9lq];
                            jnovc['onLoaded'](tm6w);
                            return;
                        } else {
                            cosnole['log']('read read'), xkv$0['read'](y1z9lq, v$0xg, new deb5u4(zq1l, zq1l['onReadNativeCallBack'], [v$0xg, y1z9lq, r2a7m, p61mt, g0xq$, he4d_, jnovc]));
                            return;
                        }
                    }
                    if (s3_82r['rootPath'] == '') var $xy = y1z9lq;else $xy = y1z9lq['split'](s3_82r['rootPath'])[0x0];
                    y1z9lq['indexOf']('http://') != -0x1 || y1z9lq['indexOf']('https://') != -0x1 ? z9y6p1['EnvConfig']['load']['call'](jnovc, y1z9lq, r2a7m, p61mt, g0xq$, he4d_) : xkv$0['readFile']($xy, v$0xg, new deb5u4(zq1l, zq1l['onReadNativeCallBack'], [v$0xg, y1z9lq, r2a7m, p61mt, g0xq$, he4d_, jnovc]), y1z9lq);
                } else z9y6p1['EnvConfig']['load']['call'](this, y1z9lq, r2a7m, p61mt, g0xq$, he4d_);
            }
        }, fehs8_['resMgrLoad'] = function (iv0onk, x$0qgk, fh3_, lp19yz, rf83_s, xq$0gk, he_fs) {
            fh3_ === void 0x0 && (fh3_ = 0x0), lp19yz === void 0x0 && (lp19yz = ![]), rf83_s === void 0x0 && (rf83_s = ![]), xq$0gk === void 0x0 && (xq$0gk = 0x0), he_fs === void 0x0 && (he_fs = 0x3), iv0onk['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', iv0onk), z9y6p1['EnvConfig']['resMgrLoad'](iv0onk, (voicnk, $x0kgq, z1p9yl) => {
                zq1l['prototype']['resMgrLoadCallBack'](voicnk, $x0kgq, z1p9yl, x$0qgk);
            }, fh3_, lp19yz, rf83_s, xq$0gk, he_fs);
        }, fehs8_['resMgrLoadCallBack'] = function (xq$lgy, z91tp6, gvkx$0, qy$lg) {
            console['log']('buff:::', xq$lgy, gvkx$0, xkv$0['fileNativeDir'] + '///' + xkv$0['fileListName']), qy$lg(xq$lgy, z91tp6, gvkx$0);
        }, fehs8_['clearRes'] = function (de_hf8, g0$lqx) {
            g0$lqx === void 0x0 && (g0$lqx = ![]);
            var p169t = this;
            p169t['clearRes'](de_hf8, g0$lqx);
            var z1m6tp = xkv$0['getFileInfo'](de_hf8);
            if (z1m6tp && (de_hf8['indexOf']('http://') != -0x1 || de_hf8['indexOf']('https://') != -0x1)) {
                var fhe8s_ = z1m6tp['md5'],
                    $vkx0 = xkv$0['getFileNativePath'](fhe8s_);
                xkv$0['remove']($vkx0);
            }
        }, zq1l['onReadNativeCallBack'] = function (mwt76, rw2a73, _f3s8, qlz19, z6mpt1, ed5u4b, vk$, pmt61, r2_s8) {
            qlz19 === void 0x0 && (qlz19 = !![]), ed5u4b === void 0x0 && (ed5u4b = ![]), pmt61 === void 0x0 && (pmt61 = 0x0);
            if (!pmt61) {
                var a2rsw3;
                if (_f3s8 == 'json' || _f3s8 == 'atlas') a2rsw3 = z9y6p1['getJson'](r2_s8['data']);else _f3s8 == 'xml' ? a2rsw3 = k0v$['parseXMLFromString'](r2_s8['data']) : a2rsw3 = r2_s8['data'];
                vk$['onLoaded'](a2rsw3), !z9y6p1['isZiYu'] && z9y6p1['isPosMsgYu'] && _f3s8 != 'arraybuffer' && wx['postMessage']({
                    'url': rw2a73,
                    'data': a2rsw3,
                    'isLoad': !![]
                });
            } else pmt61 == 0x1 && z9y6p1['EnvConfig']['load']['call'](vk$, rw2a73, _f3s8, qlz19, z6mpt1, ed5u4b);
        }, o0nkiv(zq1l, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), zq1l;
    }(),
        xkv$0 = function (f38_r) {
        function vjcoi() {
            vjcoi['__super']['call'](this);
            ;
        }
        return yxlq(vjcoi, 'laya.wx.mini.MiniFileMgr', f38_r), vjcoi['isLoadFile'] = function (yz61p9) {
            return vjcoi['_fileTypeArr']['indexOf'](yz61p9) != -0x1 ? !![] : ![];
        }, vjcoi['getFileInfo'] = function (inkoc) {
            var jcvno = inkoc['split']('?')[0x0],
                v0ixk$ = vjcoi['filesListObj'][jcvno];
            if (v0ixk$ == null) return null;else return v0ixk$;
            return null;
        }, vjcoi['onFileUpdate'] = function (sfh3_8, udehf) {
            var kv0ix = sfh3_8['split']('/'),
                xgl0$ = kv0ix[kv0ix['length'] - 0x1],
                fuhe4d = vjcoi['getFileInfo'](udehf);
            if (fuhe4d == null) vjcoi['onSaveFile'](udehf, xgl0$);else {
                if (fuhe4d['readyUrl'] != udehf) vjcoi['remove'](xgl0$, udehf);
            }
        }, vjcoi['exits'] = function (_rf83s, yl19pz) {
            var kovxi0 = vjcoi['getFileNativePath'](_rf83s);
            vjcoi['fs']['getFileInfo']({
                'filePath': kovxi0,
                'success': function (lqz9y1) {
                    yl19pz != null && yl19pz['runWith']([0x0, lqz9y1]);
                },
                'fail': function (k0ox) {
                    yl19pz != null && yl19pz['runWith']([0x1, k0ox]);
                }
            });
        }, vjcoi['read'] = function (g$xvk, hdfe4u, h_e8, y6p19z) {
            hdfe4u === void 0x0 && (hdfe4u = 'ascill'), y6p19z === void 0x0 && (y6p19z = '');
            var ix0vok;
            y6p19z != '' ? ix0vok = vjcoi['getFileNativePath'](g$xvk) : ix0vok = g$xvk, vjcoi['fs']['readFile']({
                'filePath': ix0vok,
                'encoding': hdfe4u,
                'success': function (e8sh_) {
                    h_e8 != null && h_e8['runWith']([0x0, e8sh_]);
                },
                'fail': function (ocnij) {
                    if (ocnij && y6p19z != '') vjcoi['down'](y6p19z, hdfe4u, h_e8, y6p19z);else h_e8 != null && h_e8['runWith']([0x1]);
                }
            });
        }, vjcoi['readNativeFile'] = function (o0ik, bed) {
            vjcoi['fs']['readFile']({
                'filePath': o0ik,
                'encoding': '',
                'success': function (ly9g$) {
                    bed != null && bed['runWith']([0x0]);
                },
                'fail': function (iv0x$k) {
                    bed != null && bed['runWith']([0x1]);
                }
            });
        }, vjcoi['down'] = function (tp619z, xgl$q, ql9$y, uhfde) {
            xgl$q === void 0x0 && (xgl$q = 'ascill'), uhfde === void 0x0 && (uhfde = '');
            var x$vg = vjcoi['getFileNativePath'](uhfde),
                qy$lg9 = vjcoi['wxdown']({
                'url': tp619z,
                'filePath': x$vg,
                'success': function (lxg0$q) {
                    if (lxg0$q['statusCode'] === 0xc8) vjcoi['readFile'](lxg0$q['filePath'], xgl$q, ql9$y, uhfde);
                },
                'fail': function (vncoi) {
                    ql9$y != null && ql9$y['runWith']([0x1, vncoi]);
                }
            });
            qy$lg9['onProgressUpdate'](function (swar3) {
                ql9$y != null && ql9$y['runWith']([0x2, swar3['progress']]);
            });
        }, vjcoi['readFile'] = function (kic, mapt6, s_rf8, deu54b) {
            mapt6 === void 0x0 && (mapt6 = 'ascill'), deu54b === void 0x0 && (deu54b = ''), vjcoi['fs']['readFile']({
                'filePath': kic,
                'encoding': mapt6,
                'success': function (hdu54e) {
                    if (kic['indexOf']('http://') != -0x1 || kic['indexOf']('https://') != -0x1) vjcoi['onFileUpdate'](kic, deu54b);
                    s_rf8 != null && s_rf8['runWith']([0x0, hdu54e]);
                },
                'fail': function (x$k0q) {
                    if (x$k0q) s_rf8 != null && s_rf8['runWith']([0x1, x$k0q]);
                }
            });
        }, vjcoi['downImg'] = function (pz67t, mar2, _382s) {
            _382s === void 0x0 && (_382s = '');
            var awmt76 = vjcoi['wxdown']({
                'url': pz67t,
                'success': function (k$ix0v) {
                    k$ix0v['statusCode'] === 0xc8 && vjcoi['copyFile'](k$ix0v['tempFilePath'], _382s, mar2);
                },
                'fail': function ($xgql) {
                    mar2 != null && mar2['runWith']([0x1, $xgql]);
                }
            });
        }, vjcoi['copyFile'] = function (vniko0, q0g$xl, l19y) {
            var sraw23 = vniko0['split']('/'),
                ki0vxo = sraw23[sraw23['length'] - 0x1],
                civkon = q0g$xl['split']('?')[0x0],
                pat67 = vjcoi['getFileInfo'](q0g$xl),
                $lygq = vjcoi['getFileNativePath'](ki0vxo);
            vjcoi['fs']['copyFile']({
                'srcPath': vniko0,
                'destPath': $lygq,
                'success': function (xv0$) {
                    if (!pat67) vjcoi['onSaveFile'](q0g$xl, ki0vxo), l19y != null && l19y['runWith']([0x0]);else {
                        if (pat67['readyUrl'] != q0g$xl) vjcoi['remove'](ki0vxo, q0g$xl, l19y);
                    }
                },
                'fail': function (ypl91) {
                    l19y != null && l19y['runWith']([0x1, ypl91]);
                }
            });
        }, vjcoi['getFileNativePath'] = function (o0nv) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + o0nv;
        }, vjcoi['remove'] = function (zt1p, f_8s3, tzp61) {
            f_8s3 === void 0x0 && (f_8s3 = '');
            var fhe_s8 = vjcoi['getFileInfo'](f_8s3),
                yz19p6 = vjcoi['getFileNativePath'](fhe_s8['md5']);
            hfe8['loader']['clearRes'](fhe_s8['readyUrl']), vjcoi['fs']['unlink']({
                'filePath': yz19p6,
                'success': function (r2s83) {
                    if (f_8s3 != '') vjcoi['onSaveFile'](f_8s3, zt1p);
                    tzp61 != null && tzp61['runWith']([0x0]);
                },
                'fail': function (_3r82s) {}
            });
        }, vjcoi['onSaveFile'] = function (wr23a, jcion) {
            var maw6t = wr23a['split']('?')[0x0];
            vjcoi['filesListObj'][maw6t] = {
                'md5': jcion,
                'readyUrl': wr23a
            }, vjcoi['fs']['writeFile']({
                'filePath': vjcoi['fileNativeDir'] + '/' + vjcoi['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](vjcoi['filesListObj']),
                'success': function ($lygx) {
                    console['log']('写入测试测试成功：', $lygx);
                },
                'fail': function (x0k$vi) {
                    console['log']('写入测试测试失败：', x0k$vi);
                }
            });
        }, vjcoi['existDir'] = function (lqg1, _f38sr) {
            vjcoi['fs']['mkdir']({
                'dirPath': lqg1,
                'success': function (tamp67) {
                    _f38sr != null && _f38sr['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function ($0lxgq) {
                    if ($0lxgq['errMsg']['indexOf']('file already exists') != -0x1) vjcoi['readSync'](vjcoi['fileListName'], 'utf8', _f38sr);else _f38sr != null && _f38sr['runWith']([0x1, $0lxgq]);
                }
            });
        }, vjcoi['readSync'] = function (wa2mt, $kvg, zt61, vinck) {
            $kvg === void 0x0 && ($kvg = 'ascill'), vinck === void 0x0 && (vinck = '');
            var i0$ = vjcoi['getFileNativePath'](wa2mt),
                njic;
            try {
                njic = vjcoi['fs']['readFileSync'](i0$), zt61 != null && zt61['runWith']([0x0, { 'data': njic }]);
            } catch (fsr_8) {
                zt61 != null && zt61['runWith']([0x1]);
            }
        }, vjcoi['readCache'] = function () {}, vjcoi['writeCache'] = function (hs3f) {
            var gl$9y = readyUrl['split']('?')[0x0];
            vjcoi['filesListObj'][gl$9y] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, vjcoi['fs']['writeFile']({
                'filePath': vjcoi['fileNativeDir'] + '/' + vjcoi['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](vjcoi['filesListObj']),
                'success': function (qy19) {},
                'fail': function (vx$kg) {}
            });
        }, vjcoi['setNativeFileDir'] = function (oi0kxv) {
            vjcoi['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + oi0kxv;
        }, vjcoi['filesListObj'] = {}, vjcoi['fileNativeDir'] = null, vjcoi['fileListName'] = 'layaairfiles.txt', vjcoi['ziyuFileData'] = {}, o0nkiv(vjcoi, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), vjcoi;
    }(fe8sh),
        ok0xi = function (vnkoc) {
        function edf4u() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], edf4u['__super']['call'](this), this['_sound'] = edf4u['_createSound'](), this['_chanell'] = new zy6p9(this['_sound']);
        }
        yxlq(edf4u, 'laya.wx.mini.MiniSound', vnkoc);
        var $gq9l = edf4u['prototype'];
        return $gq9l['load'] = function (t6mpa7) {
            var ko = this;
            t6mpa7 = s3_82r['formatURL'](t6mpa7), this['url'] = t6mpa7;
            if (edf4u['_audioCache'][t6mpa7]) {
                this['event']('complete');
                return;
            }
            function $qxlgy() {
                if (edf4u['_null'] != undefined) ko['_sound']['onCanplay'](edf4u['_null']), ko['_sound']['onError'](edf4u['_null']);else try {
                    ko['_sound']['onCanplay'](null), ko['_sound']['onError'](null), edf4u['_null'] = null;
                } catch ($q0kgx) {
                    console['warn']('[wxmini] _clearSound:' + $q0kgx), ko['_sound']['onCanplay'](t6pa), ko['_sound']['onError'](t6pa), edf4u['_null'] = t6pa;
                }
            }
            function n0kio() {
                y169z['loaded'] = !![], y169z['event']('complete'), edf4u['_audioCache'][y169z['url']] = y169z;
            }
            function pyz9(w7amr) {
                console['error']('errCode=' + w7amr['errCode'] + '  errMsg=' + w7amr['errMsg']), y169z['event']('error');
            }
            function t6pa() {}
            this['_sound']['onCanplay'](n0kio), this['_sound']['onError'](pyz9), this['_sound']['src'] = t6mpa7;
            var y169z = this;
        }, $gq9l['play'] = function (sr3w2, icnvk) {
            sr3w2 === void 0x0 && (sr3w2 = 0x0), icnvk === void 0x0 && (icnvk = 0x0);
            var de_8h, nciko;
            if (this['url'] == hs8f_e['_tMusic']) {
                if (!edf4u['_musicAudio']) edf4u['_musicAudio'] = this['_sound'];
                de_8h = edf4u['_musicAudio'], nciko = this['_chanell'];
            } else de_8h = this['_sound'], nciko = this['_chanell'];
            return de_8h['src'] = this['url'], de_8h['startTime'] = 0x0, nciko['isStopped'] && (nciko['url'] = this['url'], nciko['loops'] = icnvk, nciko['startTime'] = sr3w2, nciko['play'](), hs8f_e['addChannel'](nciko)), nciko;
        }, $gq9l['dispose'] = function () {
            var sw23r8 = edf4u['_audioCache'][this['url']];
            sw23r8 && (sw23r8['src'] = '', delete edf4u['_audioCache'][this['url']]);
        }, tp6am7(0x0, $gq9l, 'duration', function () {
            return this['_sound']['duration'];
        }), edf4u['_createSound'] = function () {
            edf4u['_id']++;
            var _dfh = z9y6p1['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return _dfh;
        }, edf4u['_musicAudio'] = null, edf4u['_id'] = 0x0, edf4u['_audioCache'] = {}, edf4u['_null'] = undefined, edf4u;
    }(fe8sh),
        zy6p9 = function (g0x$ql) {
        function t96z1p(m61tz) {
            this['_audio'] = null, this['_onEnd'] = null, t96z1p['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = m61tz, this['_onEnd'] = k0v$['bind'](this['__onEnd'], this), m61tz['onEnded'](this['_onEnd']);
        }
        yxlq(t96z1p, 'laya.wx.mini.MiniSoundChannel', g0x$ql);
        var lqg$0x = t96z1p['prototype'];
        return lqg$0x['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (hfe8['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, lqg$0x['__onNull'] = function () {}, lqg$0x['play'] = function () {
            this['isStopped'] = ![], hs8f_e['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, lqg$0x['stop'] = function () {
            this['isStopped'] = !![], hs8f_e['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, lqg$0x['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, lqg$0x['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], hs8f_e['addChannel'](this), this['_audio']['play']();
        }, tp6am7(0x0, lqg$0x, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), tp6am7(0x0, lqg$0x, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), tp6am7(0x0, lqg$0x, 'volume', function () {
            return 0x1;
        }, function ($ylq9) {}), t96z1p['_null'] = undefined, t96z1p;
    }(m2ra7),
        ude5b4 = function () {
        function he8_fs() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = z9y6p1['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        yxlq(he8_fs, 'laya.wx.mini.MiniVideo');
        var xk0$vg = he8_fs['prototype'];
        return xk0$vg['on'] = function (e_hd4, qlg19, $0kq) {
            if (e_hd4 == 'loadedmetadata') this['onPlayFunc'] = $0kq['bind'](qlg19), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else e_hd4 == 'ended' && (this['onEndedFunC'] = $0kq['bind'](qlg19), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, xk0$vg['onTimeUpdateFunc'] = function (h8s_f3) {
            this['position'] = h8s_f3['position'], this['_duration'] = h8s_f3['duration'];
        }, xk0$vg['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, xk0$vg['onended'] = function (tp691, k$x0i) {
            this['onEndedFunC'] = k$x0i['bind'](tp691), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, xk0$vg['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, xk0$vg['off'] = function (rs8f_3, at7m2, g9lq1) {
            if (rs8f_3 == 'loadedmetadata') this['onPlayFunc'] = g9lq1['bind'](at7m2), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else rs8f_3 == 'ended' && (this['onEndedFunC'] = g9lq1['bind'](at7m2), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, xk0$vg['load'] = function (t61zp9) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = t61zp9;
        }, xk0$vg['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, xk0$vg['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, xk0$vg['size'] = function (awtm27, kixv0o) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = awtm27, this['videoElement']['height'] = kixv0o;
        }, xk0$vg['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, xk0$vg['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, tp6am7(0x0, xk0$vg, 'duration', function () {
            return this['_duration'];
        }), tp6am7(0x0, xk0$vg, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (yzl1p) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = yzl1p;
        }), tp6am7(0x0, xk0$vg, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), tp6am7(0x0, xk0$vg, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), tp6am7(0x0, xk0$vg, 'ended', function () {
            return this['videoend'];
        }), tp6am7(0x0, xk0$vg, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (ik0xvo) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = ik0xvo;
        }), tp6am7(0x0, xk0$vg, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (qylx$) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = qylx$;
        }), tp6am7(0x0, xk0$vg, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (q0$glx) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = q0$glx;
        }), tp6am7(0x0, xk0$vg, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), tp6am7(0x0, xk0$vg, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function ($gxl) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = $gxl;
        }), tp6am7(0x0, xk0$vg, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (jcinvo) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = jcinvo;
        }), tp6am7(0x0, xk0$vg, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), tp6am7(0x0, xk0$vg, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (r7am2) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = r7am2;
        }), tp6am7(0x0, xk0$vg, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (uhdf4e) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = uhdf4e;
        }), tp6am7(0x0, xk0$vg, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (y1zlp9) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = y1zlp9;
        }), he8_fs;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var r32w in Laya) {
        var rw82s = Laya[r32w];
        rw82s && rw82s['__isclass'] && (exports[r32w] = rw82s);
    }
});