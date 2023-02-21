var Q = wx.$v;
(function (window, document, vrkt) {
    var vwl3rk = vrkt['un'],
        u$yci1 = vrkt['uns'],
        lhyc = vrkt['static'],
        lrv = vrkt['class'],
        wkv3 = vrkt['getset'],
        cy1$hm = vrkt['__newvec'],
        bz_6p = laya['utils']['Browser'],
        vrwkxt = laya['events']['Event'],
        bo5fz_ = laya['events']['EventDispatcher'],
        xqtjkr = laya['resource']['HTMLImage'],
        hy$3lm = laya['utils']['Handler'],
        v3whlk = laya['display']['Input'],
        gqjtx = laya['net']['Loader'],
        txqkwr = laya['maths']['Matrix'],
        qgsx = laya['renders']['Render'],
        f7eo5a = laya['utils']['RunDriver'],
        u$yi1c = laya['media']['Sound'],
        qkx = laya['media']['SoundChannel'],
        k3wr = laya['media']['SoundManager'],
        rwk3lv = laya['display']['Stage'],
        vhly = laya['net']['URL'],
        qxrtk = laya['utils']['Utils'],
        pzb6d9 = function () {
        function y$1ci() {}
        return lrv(y$1ci, 'laya.wx.mini.MiniAdpter'), y$1ci['getJson'] = function (u2dn0p) {
            return JSON['parse'](u2dn0p);
        }, y$1ci['init'] = function (lwrk, zof5b_) {
            lwrk === void 0x0 && (lwrk = ![]), zof5b_ === void 0x0 && (zof5b_ = ![]);
            if (y$1ci['_inited']) return;
            y$1ci['window'] = window;
            if (y$1ci['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            y$1ci['_inited'] = !![], y$1ci['isZiYu'] = zof5b_, y$1ci['isPosMsgYu'] = lwrk, y$1ci['EnvConfig'] = {}, !y$1ci['isZiYu'] && (b_9o['setNativeFileDir']('/layaairGame'), b_9o['existDir'](b_9o['fileNativeDir'], hy$3lm['create'](y$1ci, y$1ci['onMkdirCallBack']))), y$1ci['window']['focus'] = function () {}, vrkt['getUrlPath'] = function () {}, y$1ci['window']['logtime'] = function (tjx) {}, y$1ci['window']['alertTimeLog'] = function (yvmh3) {}, y$1ci['window']['resetShareInfo'] = function () {}, y$1ci['window']['CanvasRenderingContext2D'] = function () {}, y$1ci['window']['CanvasRenderingContext2D']['prototype'] = y$1ci['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], y$1ci['window']['document']['body']['appendChild'] = function () {}, y$1ci['EnvConfig']['pixelRatioInt'] = 0x0, f7eo5a['getPixelRatio'] = y$1ci['pixelRatio'], y$1ci['_preCreateElement'] = bz_6p['createElement'], bz_6p['createElement'] = y$1ci['createElement'], f7eo5a['createShaderCondition'] = y$1ci['createShaderCondition'], qxrtk['parseXMLFromString'] = y$1ci['parseXMLFromString'], v3whlk['_createInputElement'] = ind2u['_createInputElement'], y$1ci['EnvConfig']['load'] = gqjtx['prototype']['load'], gqjtx['prototype']['load'] = eo5af['prototype']['load'], y$1ci['isZiYu'] && lwrk && wx['onMessage'](function (zof57_) {
                zof57_['isLoad'] && (b_9o['ziyuFileData'][zof57_['url']] = zof57_['data']);
            });
        }, y$1ci['onMkdirCallBack'] = function (lw3rk, hw3vlm) {
            if (!lw3rk) b_9o['filesListObj'] = JSON['parse'](hw3vlm['data']);
        }, y$1ci['pixelRatio'] = function () {
            if (!y$1ci['EnvConfig']['pixelRatioInt']) try {
                var b9_6o = wx['getSystemInfoSync']();
                return y$1ci['EnvConfig']['pixelRatioInt'] = b9_6o['pixelRatio'], b9_6o = b9_6o, b9_6o['pixelRatio'];
            } catch (r8tx) {}
            return y$1ci['EnvConfig']['pixelRatioInt'];
        }, y$1ci['createElement'] = function (nu2dp) {
            if (nu2dp == 'canvas') {
                var rtkwv;
                return y$1ci['idx'] == 0x1 ? y$1ci['isZiYu'] ? (rtkwv = sharedCanvas, rtkwv['style'] = {}) : rtkwv = window['canvas'] : rtkwv = window['wx']['createCanvas'](), y$1ci['idx']++, rtkwv;
            } else {
                if (nu2dp == 'textarea' || nu2dp == 'input') return y$1ci['onCreateInput'](nu2dp);else {
                    if (nu2dp == 'div') {
                        var npdu20 = y$1ci['_preCreateElement'](nu2dp);
                        return npdu20['contains'] = function ($ml3yh) {
                            return null;
                        }, npdu20['removeChild'] = function (wv3rtk) {}, npdu20;
                    } else return y$1ci['_preCreateElement'](nu2dp);
                }
            }
        }, y$1ci['onCreateInput'] = function (_of57e) {
            var cy$iu = y$1ci['_preCreateElement'](_of57e);
            return cy$iu['focus'] = ind2u['wxinputFocus'], cy$iu['blur'] = ind2u['wxinputblur'], cy$iu['style'] = {}, cy$iu['value'] = 0x0, cy$iu['parentElement'] = {}, cy$iu['placeholder'] = {}, cy$iu['type'] = {}, cy$iu['setColor'] = function (p62db9) {}, cy$iu['setType'] = function (rktqj) {}, cy$iu['setFontFace'] = function (hly3$) {}, cy$iu['addEventListener'] = function (ml$) {}, cy$iu['contains'] = function (rkxwv) {
                return null;
            }, cy$iu['removeChild'] = function (iuy1$c) {}, cy$iu;
        }, y$1ci['createShaderCondition'] = function (wk3h) {
            var x8gtjq = this,
                j8xsqg = function () {
                var _fbzo5 = wk3h;
                return x8gtjq[wk3h['replace']('this.', '')];
            };
            return j8xsqg;
        }, y$1ci['EnvConfig'] = null, y$1ci['window'] = null, y$1ci['_preCreateElement'] = null, y$1ci['_inited'] = ![], y$1ci['wxRequest'] = null, y$1ci['systemInfo'] = null, y$1ci['version'] = '0.0.1', y$1ci['isZiYu'] = ![], y$1ci['isPosMsgYu'] = ![], y$1ci['parseXMLFromString'] = function ($y1mc) {
            var lmh3wv, $cml;
            $y1mc = $y1mc['replace'](/>\s+</g, '><');
            try {
                lmh3wv = new window['Parser']['DOMParser']()['parseFromString']($y1mc, 'text/xml');
            } catch (c01ni) {
                throw '需要引入xml解析库文件';
            }
            return lmh3wv;
        }, y$1ci['idx'] = 0x1, y$1ci;
    }(),
        ktxqwr = function () {
        function ndiu02() {}
        lrv(ndiu02, 'laya.wx.mini.MiniImage');
        var t8gjq = ndiu02['prototype'];
        return t8gjq['_loadImage'] = function (lkv3rw) {
            var r3klwv = this,
                duni0 = ![];
            lkv3rw['indexOf']('layaNativeDir/') == -0x1 && (duni0 = !![], lkv3rw = vhly['formatURL'](lkv3rw));
            if (!b_9o['getFileInfo'](lkv3rw)) {
                if (lkv3rw['indexOf']('http://') != -0x1 || lkv3rw['indexOf']('https://') != -0x1) b_9o['downImg'](lkv3rw, new hy$3lm(ndiu02, ndiu02['onDownImgCallBack'], [lkv3rw, r3klwv]), lkv3rw);else ndiu02['onCreateImage'](lkv3rw, r3klwv, !![]);
            } else ndiu02['onCreateImage'](lkv3rw, r3klwv, !duni0);
        }, ndiu02['onDownImgCallBack'] = function (xkjqt, n2iu1, pdz96) {
            if (!pdz96) ndiu02['onCreateImage'](xkjqt, n2iu1);else n2iu1['onError'](null);
        }, ndiu02['onCreateImage'] = function (i10nu2, o65b_z, lr3wv) {
            lr3wv === void 0x0 && (lr3wv = ![]);
            var l3kwh;
            if (!lr3wv) {
                var o5ef7_ = b_9o['getFileInfo'](i10nu2),
                    uyi$1c = o5ef7_['md5'];
                l3kwh = b_9o['getFileNativePath'](uyi$1c);
            } else l3kwh = i10nu2;
            if (o65b_z['imgCache'] == null) o65b_z['imgCache'] = {};
            var hwl3;
            function k3hv() {
                hwl3['onload'] = null, hwl3['onerror'] = null, delete o65b_z['imgCache'][i10nu2];
            }
            ;
            var rj8xqt = function () {
                k3hv(), o65b_z['onLoaded'](hwl3);
            },
                xqtwk = function () {
                k3hv(), o65b_z['event']('error', 'Load image failed');
            };
            o65b_z['_type'] == 'nativeimage' ? (hwl3 = new bz_6p['window']['Image'](), hwl3['crossOrigin'] = '', hwl3['onload'] = rj8xqt, hwl3['onerror'] = xqtwk, hwl3['src'] = l3kwh, o65b_z['imgCache'][i10nu2] = hwl3) : new xqtjkr['create'](l3kwh, {
                'onload': rj8xqt,
                'onerror': xqtwk,
                'onCreate': function (hkl3) {
                    hwl3 = hkl3, o65b_z['imgCache'][i10nu2] = hkl3;
                }
            });
        }, ndiu02;
    }(),
        ind2u = function () {
        function ylh$mc() {}
        return lrv(ylh$mc, 'laya.wx.mini.MiniInput'), ylh$mc['_createInputElement'] = function () {
            v3whlk['_initInput'](v3whlk['area'] = bz_6p['createElement']('textarea')), v3whlk['_initInput'](v3whlk['input'] = bz_6p['createElement']('input')), v3whlk['inputContainer'] = bz_6p['createElement']('div'), v3whlk['inputContainer']['style']['position'] = 'absolute', v3whlk['inputContainer']['style']['zIndex'] = 0x186a0, bz_6p['container']['appendChild'](v3whlk['inputContainer']), v3whlk['inputContainer']['setPos'] = function (hylv3, udn20p) {
                v3whlk['inputContainer']['style']['left'] = hylv3 + 'px', v3whlk['inputContainer']['style']['top'] = udn20p + 'px';
            }, vrkt['stage']['on']('resize', null, ylh$mc['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (tqxjkr) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), k3wr['_soundClass'] = $ymi1c, k3wr['_musicClass'] = $ymi1c, window['_videoClass'] = m$yh;
        }, ylh$mc['_onStageResize'] = function () {
            var mhyl$c = vrkt['stage']['_canvasTransform']['identity']();
            mhyl$c['scale'](bz_6p['width'] / qgsx['canvas']['width'] / f7eo5a['getPixelRatio'](), bz_6p['height'] / qgsx['canvas']['height'] / f7eo5a['getPixelRatio']());
        }, ylh$mc['wxinputFocus'] = function (wrqtxk) {
            var u2dp = v3whlk['inputElement']['target'];
            if (u2dp && !u2dp['editable']) return;
            pzb6d9['window']['wx']['offKeyboardConfirm'](), pzb6d9['window']['wx']['offKeyboardInput'](), pzb6d9['window']['wx']['showKeyboard']({
                'defaultValue': u2dp['text'],
                'maxLength': u2dp['maxChars'],
                'multiple': u2dp['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (xjktq) {},
                'fail': function (p9d206) {}
            }), pzb6d9['window']['wx']['onKeyboardConfirm'](function (cui1n$) {
                var f5ea4 = cui1n$ ? cui1n$['value'] : '';
                u2dp['text'] = f5ea4, u2dp['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), pzb6d9['window']['wx']['onKeyboardInput'](function (wqxt) {
                var _f5o7 = wqxt ? wqxt['value'] : '';
                if (!u2dp['multiline']) {
                    if (_f5o7['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                u2dp['text'] = _f5o7, u2dp['event']('input');
            });
        }, ylh$mc['inputEnter'] = function () {
            v3whlk['inputElement']['target']['focus'] = ![];
        }, ylh$mc['wxinputblur'] = function () {
            ylh$mc['hideKeyboard']();
        }, ylh$mc['hideKeyboard'] = function () {
            pzb6d9['window']['wx']['offKeyboardConfirm'](), pzb6d9['window']['wx']['offKeyboardInput'](), pzb6d9['window']['wx']['hideKeyboard']({
                'success': function (zfbo5) {
                    console['log']('隐藏键盘');
                },
                'fail': function (zbd6p) {
                    console['log']('隐藏键盘出错:' + (zbd6p ? zbd6p['errMsg'] : ''));
                }
            });
        }, ylh$mc;
    }(),
        eo5af = function () {
        function kw3lr() {}
        lrv(kw3lr, 'laya.wx.mini.MiniLoader');
        var m$yc = kw3lr['prototype'];
        return m$yc['load'] = function (ucni1$, u2np0, cn01, khwlv3, gjsx8) {
            cn01 === void 0x0 && (cn01 = !![]), gjsx8 === void 0x0 && (gjsx8 = ![]);
            var wk3lh = this;
            wk3lh['_url'] = ucni1$;
            if (ucni1$['indexOf']('data:image') === 0x0) wk3lh['_type'] = u2np0 = 'image';else wk3lh['_type'] = u2np0 || (u2np0 = wk3lh['getTypeFromUrl'](ucni1$));
            wk3lh['_cache'] = cn01, wk3lh['_data'] = null;
            var jgxs8q = 'ascii';
            if (ucni1$['indexOf']('.fnt') != -0x1) jgxs8q = 'utf8';else u2np0 == 'arraybuffer' && (jgxs8q = '');
            ;
            var ch$yml = qxrtk['getFileExtension'](ucni1$);
            if (kw3lr['_fileTypeArr']['indexOf'](ch$yml) != -0x1) pzb6d9['EnvConfig']['load']['call'](this, ucni1$, u2np0, cn01, khwlv3, gjsx8);else {
                if (!b_9o['getFileInfo'](ucni1$)) {
                    if (ucni1$['indexOf']('layaNativeDir/') != -0x1) {
                        if (pzb6d9['isZiYu']) {
                            var o_b65 = b_9o['ziyuFileData'][ucni1$];
                            wk3lh['onLoaded'](o_b65);
                            return;
                        } else {
                            cosnole['log']('read read'), b_9o['read'](ucni1$, jgxs8q, new hy$3lm(kw3lr, kw3lr['onReadNativeCallBack'], [jgxs8q, ucni1$, u2np0, cn01, khwlv3, gjsx8, wk3lh]));
                            return;
                        }
                    }
                    if (vhly['rootPath'] == '') var dpz9 = ucni1$;else dpz9 = ucni1$['split'](vhly['rootPath'])[0x0];
                    ucni1$['indexOf']('http://') != -0x1 || ucni1$['indexOf']('https://') != -0x1 ? pzb6d9['EnvConfig']['load']['call'](wk3lh, ucni1$, u2np0, cn01, khwlv3, gjsx8) : b_9o['readFile'](dpz9, jgxs8q, new hy$3lm(kw3lr, kw3lr['onReadNativeCallBack'], [jgxs8q, ucni1$, u2np0, cn01, khwlv3, gjsx8, wk3lh]), ucni1$);
                } else pzb6d9['EnvConfig']['load']['call'](this, ucni1$, u2np0, cn01, khwlv3, gjsx8);
            }
        }, m$yc['resMgrLoad'] = function ($mhly, b_5zf, cmh1$y, twvrk, b62p9d, iu1cn$, jxkt) {
            cmh1$y === void 0x0 && (cmh1$y = 0x0), twvrk === void 0x0 && (twvrk = ![]), b62p9d === void 0x0 && (b62p9d = ![]), iu1cn$ === void 0x0 && (iu1cn$ = 0x0), jxkt === void 0x0 && (jxkt = 0x3), $mhly['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', $mhly), pzb6d9['EnvConfig']['resMgrLoad']($mhly, (ml3$y, n2u01, m1chy) => {
                kw3lr['prototype']['resMgrLoadCallBack'](ml3$y, n2u01, m1chy, b_5zf);
            }, cmh1$y, twvrk, b62p9d, iu1cn$, jxkt);
        }, m$yc['resMgrLoadCallBack'] = function (tvw3, _e5o, $ychm1, rkwqx) {
            console['log']('buff:::', tvw3, $ychm1, b_9o['fileNativeDir'] + '///' + b_9o['fileListName']), rkwqx(tvw3, _e5o, $ychm1);
        }, m$yc['clearRes'] = function (g8tqj, e7foa5) {
            e7foa5 === void 0x0 && (e7foa5 = ![]);
            var t8jxgq = this;
            t8jxgq['clearRes'](g8tqj, e7foa5);
            var p6zd9 = b_9o['getFileInfo'](g8tqj);
            if (p6zd9 && (g8tqj['indexOf']('http://') != -0x1 || g8tqj['indexOf']('https://') != -0x1)) {
                var gj8xq = p6zd9['md5'],
                    e74a5f = b_9o['getFileNativePath'](gj8xq);
                b_9o['remove'](e74a5f);
            }
        }, kw3lr['onReadNativeCallBack'] = function (pzb9d6, h1cy, i2dn0, yh3ml$, tj8xqr, p9n2d, qgsj8, pb9z_6, kqwt) {
            yh3ml$ === void 0x0 && (yh3ml$ = !![]), p9n2d === void 0x0 && (p9n2d = ![]), pb9z_6 === void 0x0 && (pb9z_6 = 0x0);
            if (!pb9z_6) {
                var _zfo75;
                if (i2dn0 == 'json' || i2dn0 == 'atlas') _zfo75 = pzb6d9['getJson'](kqwt['data']);else i2dn0 == 'xml' ? _zfo75 = qxrtk['parseXMLFromString'](kqwt['data']) : _zfo75 = kqwt['data'];
                qgsj8['onLoaded'](_zfo75), !pzb6d9['isZiYu'] && pzb6d9['isPosMsgYu'] && i2dn0 != 'arraybuffer' && wx['postMessage']({
                    'url': h1cy,
                    'data': _zfo75,
                    'isLoad': !![]
                });
            } else pb9z_6 == 0x1 && pzb6d9['EnvConfig']['load']['call'](qgsj8, h1cy, i2dn0, yh3ml$, tj8xqr, p9n2d);
        }, lhyc(kw3lr, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), kw3lr;
    }(),
        b_9o = function (kqx) {
        function mv3hlw() {
            mv3hlw['__super']['call'](this);
            ;
        }
        return lrv(mv3hlw, 'laya.wx.mini.MiniFileMgr', kqx), mv3hlw['isLoadFile'] = function (a5fe7) {
            return mv3hlw['_fileTypeArr']['indexOf'](a5fe7) != -0x1 ? !![] : ![];
        }, mv3hlw['getFileInfo'] = function (yvlh3m) {
            var icun0 = yvlh3m['split']('?')[0x0],
                zb9p6d = mv3hlw['filesListObj'][icun0];
            if (zb9p6d == null) return null;else return zb9p6d;
            return null;
        }, mv3hlw['onFileUpdate'] = function (qrkjt, d029) {
            var h1cym = qrkjt['split']('/'),
                b9zo = h1cym[h1cym['length'] - 0x1],
                pd609 = mv3hlw['getFileInfo'](d029);
            if (pd609 == null) mv3hlw['onSaveFile'](d029, b9zo);else {
                if (pd609['readyUrl'] != d029) mv3hlw['remove'](b9zo, d029);
            }
        }, mv3hlw['exits'] = function (vl3w, cyui) {
            var a4e5f = mv3hlw['getFileNativePath'](vl3w);
            mv3hlw['fs']['getFileInfo']({
                'filePath': a4e5f,
                'success': function (bof_5z) {
                    cyui != null && cyui['runWith']([0x0, bof_5z]);
                },
                'fail': function (p_z69) {
                    cyui != null && cyui['runWith']([0x1, p_z69]);
                }
            });
        }, mv3hlw['read'] = function (d96zp, ui1$c, k3vrt, qgjtx8) {
            ui1$c === void 0x0 && (ui1$c = 'ascill'), qgjtx8 === void 0x0 && (qgjtx8 = '');
            var u$ci1;
            qgjtx8 != '' ? u$ci1 = mv3hlw['getFileNativePath'](d96zp) : u$ci1 = d96zp, mv3hlw['fs']['readFile']({
                'filePath': u$ci1,
                'encoding': ui1$c,
                'success': function (fe7o5_) {
                    k3vrt != null && k3vrt['runWith']([0x0, fe7o5_]);
                },
                'fail': function (c$mh1) {
                    if (c$mh1 && qgjtx8 != '') mv3hlw['down'](qgjtx8, ui1$c, k3vrt, qgjtx8);else k3vrt != null && k3vrt['runWith']([0x1]);
                }
            });
        }, mv3hlw['readNativeFile'] = function (db6p2, lm$cy) {
            mv3hlw['fs']['readFile']({
                'filePath': db6p2,
                'encoding': '',
                'success': function (kxvr) {
                    lm$cy != null && lm$cy['runWith']([0x0]);
                },
                'fail': function (y1mhc$) {
                    lm$cy != null && lm$cy['runWith']([0x1]);
                }
            });
        }, mv3hlw['down'] = function (nc1iu0, eo7f_, x8jgqt, wlvm) {
            eo7f_ === void 0x0 && (eo7f_ = 'ascill'), wlvm === void 0x0 && (wlvm = '');
            var rkxwtv = mv3hlw['getFileNativePath'](wlvm),
                pnu02 = mv3hlw['wxdown']({
                'url': nc1iu0,
                'filePath': rkxwtv,
                'success': function (d02pu) {
                    if (d02pu['statusCode'] === 0xc8) mv3hlw['readFile'](d02pu['filePath'], eo7f_, x8jgqt, wlvm);
                },
                'fail': function (e5ao7) {
                    x8jgqt != null && x8jgqt['runWith']([0x1, e5ao7]);
                }
            });
            pnu02['onProgressUpdate'](function (hyc$ml) {
                x8jgqt != null && x8jgqt['runWith']([0x2, hyc$ml['progress']]);
            });
        }, mv3hlw['readFile'] = function (xjq8, $uci1, o9b6_, _b69zo) {
            $uci1 === void 0x0 && ($uci1 = 'ascill'), _b69zo === void 0x0 && (_b69zo = ''), mv3hlw['fs']['readFile']({
                'filePath': xjq8,
                'encoding': $uci1,
                'success': function (y$m1hc) {
                    if (xjq8['indexOf']('http://') != -0x1 || xjq8['indexOf']('https://') != -0x1) mv3hlw['onFileUpdate'](xjq8, _b69zo);
                    o9b6_ != null && o9b6_['runWith']([0x0, y$m1hc]);
                },
                'fail': function (yc1im$) {
                    if (yc1im$) o9b6_ != null && o9b6_['runWith']([0x1, yc1im$]);
                }
            });
        }, mv3hlw['downImg'] = function (wvrkx, b96pd, k3vlwr) {
            k3vlwr === void 0x0 && (k3vlwr = '');
            var _pz69 = mv3hlw['wxdown']({
                'url': wvrkx,
                'success': function (d69pb2) {
                    d69pb2['statusCode'] === 0xc8 && mv3hlw['copyFile'](d69pb2['tempFilePath'], k3vlwr, b96pd);
                },
                'fail': function (oz_5b6) {
                    b96pd != null && b96pd['runWith']([0x1, oz_5b6]);
                }
            });
        }, mv3hlw['copyFile'] = function (ozb_9, y1$ic, p0692d) {
            var o5_7z = ozb_9['split']('/'),
                rt8qxj = o5_7z[o5_7z['length'] - 0x1],
                p9_6zb = y1$ic['split']('?')[0x0],
                iu$nc1 = mv3hlw['getFileInfo'](y1$ic),
                uci$ = mv3hlw['getFileNativePath'](rt8qxj);
            mv3hlw['fs']['copyFile']({
                'srcPath': ozb_9,
                'destPath': uci$,
                'success': function (e4a75) {
                    if (!iu$nc1) mv3hlw['onSaveFile'](y1$ic, rt8qxj), p0692d != null && p0692d['runWith']([0x0]);else {
                        if (iu$nc1['readyUrl'] != y1$ic) mv3hlw['remove'](rt8qxj, y1$ic, p0692d);
                    }
                },
                'fail': function (wvkhl) {
                    p0692d != null && p0692d['runWith']([0x1, wvkhl]);
                }
            });
        }, mv3hlw['getFileNativePath'] = function (kxtrwv) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + kxtrwv;
        }, mv3hlw['remove'] = function ($uc1iy, iu21n0, obz5_f) {
            iu21n0 === void 0x0 && (iu21n0 = '');
            var wt3r = mv3hlw['getFileInfo'](iu21n0),
                z5_7o = mv3hlw['getFileNativePath'](wt3r['md5']);
            vrkt['loader']['clearRes'](wt3r['readyUrl']), mv3hlw['fs']['unlink']({
                'filePath': z5_7o,
                'success': function (jqr) {
                    if (iu21n0 != '') mv3hlw['onSaveFile'](iu21n0, $uc1iy);
                    obz5_f != null && obz5_f['runWith']([0x0]);
                },
                'fail': function (gjqx8s) {}
            });
        }, mv3hlw['onSaveFile'] = function (hw3lvk, m$clhy) {
            var yv3hm = hw3lvk['split']('?')[0x0];
            mv3hlw['filesListObj'][yv3hm] = {
                'md5': m$clhy,
                'readyUrl': hw3lvk
            }, mv3hlw['fs']['writeFile']({
                'filePath': mv3hlw['fileNativeDir'] + '/' + mv3hlw['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](mv3hlw['filesListObj']),
                'success': function (l3kvw) {
                    console['log']('写入测试测试成功：', l3kvw);
                },
                'fail': function (pb_9z6) {
                    console['log']('写入测试测试失败：', pb_9z6);
                }
            });
        }, mv3hlw['existDir'] = function (bzp69_, kxqtw) {
            mv3hlw['fs']['mkdir']({
                'dirPath': bzp69_,
                'success': function (in20) {
                    kxqtw != null && kxqtw['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (_96pzb) {
                    if (_96pzb['errMsg']['indexOf']('file already exists') != -0x1) mv3hlw['readSync'](mv3hlw['fileListName'], 'utf8', kxqtw);else kxqtw != null && kxqtw['runWith']([0x1, _96pzb]);
                }
            });
        }, mv3hlw['readSync'] = function (wr3tv, vw3hkl, b_5zo6, duin02) {
            vw3hkl === void 0x0 && (vw3hkl = 'ascill'), duin02 === void 0x0 && (duin02 = '');
            var hlm3wv = mv3hlw['getFileNativePath'](wr3tv),
                _96z;
            try {
                _96z = mv3hlw['fs']['readFileSync'](hlm3wv), b_5zo6 != null && b_5zo6['runWith']([0x0, { 'data': _96z }]);
            } catch (e7o5) {
                b_5zo6 != null && b_5zo6['runWith']([0x1]);
            }
        }, mv3hlw['readCache'] = function () {}, mv3hlw['writeCache'] = function (yu1$) {
            var yhlm3$ = readyUrl['split']('?')[0x0];
            mv3hlw['filesListObj'][yhlm3$] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, mv3hlw['fs']['writeFile']({
                'filePath': mv3hlw['fileNativeDir'] + '/' + mv3hlw['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](mv3hlw['filesListObj']),
                'success': function (zo_) {},
                'fail': function (vmw3hl) {}
            });
        }, mv3hlw['setNativeFileDir'] = function (j8xqtr) {
            mv3hlw['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + j8xqtr;
        }, mv3hlw['filesListObj'] = {}, mv3hlw['fileNativeDir'] = null, mv3hlw['fileListName'] = 'layaairfiles.txt', mv3hlw['ziyuFileData'] = {}, lhyc(mv3hlw, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), mv3hlw;
    }(bo5fz_),
        $ymi1c = function (z5b6) {
        function vhym3() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], vhym3['__super']['call'](this), this['_sound'] = vhym3['_createSound'](), this['_chanell'] = new $1uiy(this['_sound']);
        }
        lrv(vhym3, 'laya.wx.mini.MiniSound', z5b6);
        var rl3wkv = vhym3['prototype'];
        return rl3wkv['load'] = function (kxtrq) {
            var pz69 = this;
            kxtrq = vhly['formatURL'](kxtrq), this['url'] = kxtrq;
            if (vhym3['_audioCache'][kxtrq]) {
                this['event']('complete');
                return;
            }
            function h3y$m() {
                if (vhym3['_null'] != undefined) pz69['_sound']['onCanplay'](vhym3['_null']), pz69['_sound']['onError'](vhym3['_null']);else try {
                    pz69['_sound']['onCanplay'](null), pz69['_sound']['onError'](null), vhym3['_null'] = null;
                } catch (bfz_) {
                    console['warn']('[wxmini] _clearSound:' + bfz_), pz69['_sound']['onCanplay'](_f7oe), pz69['_sound']['onError'](_f7oe), vhym3['_null'] = _f7oe;
                }
            }
            function of5b_() {
                l3wvmh['loaded'] = !![], l3wvmh['event']('complete'), vhym3['_audioCache'][l3wvmh['url']] = l3wvmh;
            }
            function u2nd0i(i10cu) {
                console['error']('errCode=' + i10cu['errCode'] + '  errMsg=' + i10cu['errMsg']), l3wvmh['event']('error');
            }
            function _f7oe() {}
            this['_sound']['onCanplay'](of5b_), this['_sound']['onError'](u2nd0i), this['_sound']['src'] = kxtrq;
            var l3wvmh = this;
        }, rl3wkv['play'] = function (pb6_, cyu) {
            pb6_ === void 0x0 && (pb6_ = 0x0), cyu === void 0x0 && (cyu = 0x0);
            var xjt8g, vtrwkx;
            if (this['url'] == k3wr['_tMusic']) {
                if (!vhym3['_musicAudio']) vhym3['_musicAudio'] = this['_sound'];
                xjt8g = vhym3['_musicAudio'], vtrwkx = this['_chanell'];
            } else xjt8g = this['_sound'], vtrwkx = this['_chanell'];
            return xjt8g['src'] = this['url'], xjt8g['startTime'] = 0x0, vtrwkx['isStopped'] && (vtrwkx['url'] = this['url'], vtrwkx['loops'] = cyu, vtrwkx['startTime'] = pb6_, vtrwkx['play'](), k3wr['addChannel'](vtrwkx)), vtrwkx;
        }, rl3wkv['dispose'] = function () {
            var i$yu = vhym3['_audioCache'][this['url']];
            i$yu && (i$yu['src'] = '', delete vhym3['_audioCache'][this['url']]);
        }, wkv3(0x0, rl3wkv, 'duration', function () {
            return this['_sound']['duration'];
        }), vhym3['_createSound'] = function () {
            vhym3['_id']++;
            var cui01 = pzb6d9['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return cui01;
        }, vhym3['_musicAudio'] = null, vhym3['_id'] = 0x0, vhym3['_audioCache'] = {}, vhym3['_null'] = undefined, vhym3;
    }(bo5fz_),
        $1uiy = function (_zobf5) {
        function _o7f5z(di20n) {
            this['_audio'] = null, this['_onEnd'] = null, _o7f5z['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = di20n, this['_onEnd'] = qxrtk['bind'](this['__onEnd'], this), di20n['onEnded'](this['_onEnd']);
        }
        lrv(_o7f5z, 'laya.wx.mini.MiniSoundChannel', _zobf5);
        var xktvrw = _o7f5z['prototype'];
        return xktvrw['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (vrkt['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, xktvrw['__onNull'] = function () {}, xktvrw['play'] = function () {
            this['isStopped'] = ![], k3wr['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, xktvrw['stop'] = function () {
            this['isStopped'] = !![], k3wr['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, xktvrw['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, xktvrw['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], k3wr['addChannel'](this), this['_audio']['play']();
        }, wkv3(0x0, xktvrw, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), wkv3(0x0, xktvrw, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), wkv3(0x0, xktvrw, 'volume', function () {
            return 0x1;
        }, function (o7a5e) {}), _o7f5z['_null'] = undefined, _o7f5z;
    }(qkx),
        m$yh = function () {
        function ymlhc$() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = pzb6d9['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        lrv(ymlhc$, 'laya.wx.mini.MiniVideo');
        var o5zf7_ = ymlhc$['prototype'];
        return o5zf7_['on'] = function (n0dp92, o9b_z, oe75f_) {
            if (n0dp92 == 'loadedmetadata') this['onPlayFunc'] = oe75f_['bind'](o9b_z), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else n0dp92 == 'ended' && (this['onEndedFunC'] = oe75f_['bind'](o9b_z), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, o5zf7_['onTimeUpdateFunc'] = function (wvlkr) {
            this['position'] = wvlkr['position'], this['_duration'] = wvlkr['duration'];
        }, o5zf7_['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, o5zf7_['onended'] = function (lyvh3, c$y1ui) {
            this['onEndedFunC'] = c$y1ui['bind'](lyvh3), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, o5zf7_['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, o5zf7_['off'] = function (bo_6, gqxjs8, qxsg8) {
            if (bo_6 == 'loadedmetadata') this['onPlayFunc'] = qxsg8['bind'](gqxjs8), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else bo_6 == 'ended' && (this['onEndedFunC'] = qxsg8['bind'](gqxjs8), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, o5zf7_['load'] = function (aof5e7) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = aof5e7;
        }, o5zf7_['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, o5zf7_['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, o5zf7_['size'] = function (xtqwkr, vlk) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = xtqwkr, this['videoElement']['height'] = vlk;
        }, o5zf7_['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, o5zf7_['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, wkv3(0x0, o5zf7_, 'duration', function () {
            return this['_duration'];
        }), wkv3(0x0, o5zf7_, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (hw3vl) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = hw3vl;
        }), wkv3(0x0, o5zf7_, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), wkv3(0x0, o5zf7_, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), wkv3(0x0, o5zf7_, 'ended', function () {
            return this['videoend'];
        }), wkv3(0x0, o5zf7_, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (rqj8) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = rqj8;
        }), wkv3(0x0, o5zf7_, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (lh3wk) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = lh3wk;
        }), wkv3(0x0, o5zf7_, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (xgsqj) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = xgsqj;
        }), wkv3(0x0, o5zf7_, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), wkv3(0x0, o5zf7_, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (rxqkj) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = rxqkj;
        }), wkv3(0x0, o5zf7_, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (lhy3m$) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = lhy3m$;
        }), wkv3(0x0, o5zf7_, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), wkv3(0x0, o5zf7_, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (mlvh) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = mlvh;
        }), wkv3(0x0, o5zf7_, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (krvw) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = krvw;
        }), wkv3(0x0, o5zf7_, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (hwv3lm) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = hwv3lm;
        }), ymlhc$;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var hlm3y$ in Laya) {
        var hkw3 = Laya[hlm3y$];
        hkw3 && hkw3['__isclass'] && (exports[hlm3y$] = hkw3);
    }
});