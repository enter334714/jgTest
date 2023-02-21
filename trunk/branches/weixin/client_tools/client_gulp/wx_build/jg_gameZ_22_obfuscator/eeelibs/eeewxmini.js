var b = wx.$e;
(function (window, document, l85z9i) {
    var d_4th6 = l85z9i['un'],
        b$7x = l85z9i['uns'],
        d_64 = l85z9i['static'],
        mrgs$ = l85z9i['class'],
        ouvw = l85z9i['getset'],
        rse0mx = l85z9i['__newvec'],
        s3x = laya['utils']['Browser'],
        tn_6 = laya['events']['Event'],
        $xb7 = laya['events']['EventDispatcher'],
        t4d6_h = laya['resource']['HTMLImage'],
        v1b37 = laya['utils']['Handler'],
        w2ou = laya['display']['Input'],
        i89z = laya['net']['Loader'],
        _jkan = laya['maths']['Matrix'],
        dqth46 = laya['renders']['Render'],
        uy2vow = laya['utils']['RunDriver'],
        sxm$0r = laya['media']['Sound'],
        h_t46d = laya['media']['SoundChannel'],
        mg$x = laya['media']['SoundManager'],
        q4h6dt = laya['display']['Stage'],
        s3$ = laya['net']['URL'],
        bmxs = laya['utils']['Utils'],
        i9f = function () {
        function c9f5i() {}
        return mrgs$(c9f5i, 'laya.wx.mini.MiniAdpter'), c9f5i['getJson'] = function (xresm0) {
            return JSON['parse'](xresm0);
        }, c9f5i['init'] = function (m0exrs, _6ktn4) {
            m0exrs === void 0x0 && (m0exrs = ![]), _6ktn4 === void 0x0 && (_6ktn4 = ![]);
            if (c9f5i['_inited']) return;
            c9f5i['window'] = window;
            if (c9f5i['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            c9f5i['_inited'] = !![], c9f5i['isZiYu'] = _6ktn4, c9f5i['isPosMsgYu'] = m0exrs, c9f5i['EnvConfig'] = {}, !c9f5i['isZiYu'] && (dfch['setNativeFileDir']('/layaairGame'), dfch['existDir'](dfch['fileNativeDir'], v1b37['create'](c9f5i, c9f5i['onMkdirCallBack']))), c9f5i['window']['focus'] = function () {}, l85z9i['getUrlPath'] = function () {}, c9f5i['window']['logtime'] = function (wv21o) {}, c9f5i['window']['alertTimeLog'] = function (pb17v) {}, c9f5i['window']['resetShareInfo'] = function () {}, c9f5i['window']['CanvasRenderingContext2D'] = function () {}, c9f5i['window']['CanvasRenderingContext2D']['prototype'] = c9f5i['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], c9f5i['window']['document']['body']['appendChild'] = function () {}, c9f5i['EnvConfig']['pixelRatioInt'] = 0x0, uy2vow['getPixelRatio'] = c9f5i['pixelRatio'], c9f5i['_preCreateElement'] = s3x['createElement'], s3x['createElement'] = c9f5i['createElement'], uy2vow['createShaderCondition'] = c9f5i['createShaderCondition'], bmxs['parseXMLFromString'] = c9f5i['parseXMLFromString'], w2ou['_createInputElement'] = p1b3g['_createInputElement'], c9f5i['EnvConfig']['load'] = i89z['prototype']['load'], i89z['prototype']['load'] = upvo2['prototype']['load'], c9f5i['isZiYu'] && m0exrs && wx['onMessage'](function (cqi9f) {
                cqi9f['isLoad'] && (dfch['ziyuFileData'][cqi9f['url']] = cqi9f['data']);
            });
        }, c9f5i['onMkdirCallBack'] = function (vwu2po, pv3w7) {
            if (!vwu2po) dfch['filesListObj'] = JSON['parse'](pv3w7['data']);
        }, c9f5i['pixelRatio'] = function () {
            if (!c9f5i['EnvConfig']['pixelRatioInt']) try {
                var _tdh6 = wx['getSystemInfoSync']();
                return c9f5i['EnvConfig']['pixelRatioInt'] = _tdh6['pixelRatio'], _tdh6 = _tdh6, _tdh6['pixelRatio'];
            } catch (td6hq) {}
            return c9f5i['EnvConfig']['pixelRatioInt'];
        }, c9f5i['createElement'] = function (p3v1) {
            if (p3v1 == 'canvas') {
                var gp71;
                return c9f5i['idx'] == 0x1 ? c9f5i['isZiYu'] ? (gp71 = sharedCanvas, gp71['style'] = {}) : gp71 = window['canvas'] : gp71 = window['wx']['createCanvas'](), c9f5i['idx']++, gp71;
            } else {
                if (p3v1 == 'textarea' || p3v1 == 'input') return c9f5i['onCreateInput'](p3v1);else {
                    if (p3v1 == 'div') {
                        var wvy2 = c9f5i['_preCreateElement'](p3v1);
                        return wvy2['contains'] = function (uov2y) {
                            return null;
                        }, wvy2['removeChild'] = function (pov2w) {}, wvy2;
                    } else return c9f5i['_preCreateElement'](p3v1);
                }
            }
        }, c9f5i['onCreateInput'] = function (ifch) {
            var sx$mr = c9f5i['_preCreateElement'](ifch);
            return sx$mr['focus'] = p1b3g['wxinputFocus'], sx$mr['blur'] = p1b3g['wxinputblur'], sx$mr['style'] = {}, sx$mr['value'] = 0x0, sx$mr['parentElement'] = {}, sx$mr['placeholder'] = {}, sx$mr['type'] = {}, sx$mr['setColor'] = function (iz985l) {}, sx$mr['setType'] = function (l9i5zc) {}, sx$mr['setFontFace'] = function (dk6_t) {}, sx$mr['addEventListener'] = function (mgx$bs) {}, sx$mr['contains'] = function (dihf) {
                return null;
            }, sx$mr['removeChild'] = function (f4qcdh) {}, sx$mr;
        }, c9f5i['createShaderCondition'] = function (v2upw) {
            var zel80 = this,
                bs3$x = function () {
                var w3p7 = v2upw;
                return zel80[v2upw['replace']('this.', '')];
            };
            return bs3$x;
        }, c9f5i['EnvConfig'] = null, c9f5i['window'] = null, c9f5i['_preCreateElement'] = null, c9f5i['_inited'] = ![], c9f5i['wxRequest'] = null, c9f5i['systemInfo'] = null, c9f5i['version'] = '0.0.1', c9f5i['isZiYu'] = ![], c9f5i['isPosMsgYu'] = ![], c9f5i['parseXMLFromString'] = function (rm$sx) {
            var _k4t6d, po1w;
            rm$sx = rm$sx['replace'](/>\s+</g, '><');
            try {
                _k4t6d = new window['Parser']['DOMParser']()['parseFromString'](rm$sx, 'text/xml');
            } catch (b7pv3) {
                throw '需要引入xml解析库文件';
            }
            return _k4t6d;
        }, c9f5i['idx'] = 0x1, c9f5i;
    }(),
        ovu2y = function () {
        function _td6k4() {}
        mrgs$(_td6k4, 'laya.wx.mini.MiniImage');
        var vup2ow = _td6k4['prototype'];
        return vup2ow['_loadImage'] = function (qcf9i5) {
            var n_kt64 = this,
                w2opuv = ![];
            qcf9i5['indexOf']('layaNativeDir/') == -0x1 && (w2opuv = !![], qcf9i5 = s3$['formatURL'](qcf9i5));
            if (!dfch['getFileInfo'](qcf9i5)) {
                if (qcf9i5['indexOf']('http://') != -0x1 || qcf9i5['indexOf']('https://') != -0x1) dfch['downImg'](qcf9i5, new v1b37(_td6k4, _td6k4['onDownImgCallBack'], [qcf9i5, n_kt64]), qcf9i5);else _td6k4['onCreateImage'](qcf9i5, n_kt64, !![]);
            } else _td6k4['onCreateImage'](qcf9i5, n_kt64, !w2opuv);
        }, _td6k4['onDownImgCallBack'] = function (vw2yo, l95ze8, v21pow) {
            if (!v21pow) _td6k4['onCreateImage'](vw2yo, l95ze8);else l95ze8['onError'](null);
        }, _td6k4['onCreateImage'] = function (j6k_t, h5iqcf, grm$xs) {
            grm$xs === void 0x0 && (grm$xs = ![]);
            var thq6d;
            if (!grm$xs) {
                var $sgxbm = dfch['getFileInfo'](j6k_t),
                    wv71p = $sgxbm['md5'];
                thq6d = dfch['getFileNativePath'](wv71p);
            } else thq6d = j6k_t;
            if (h5iqcf['imgCache'] == null) h5iqcf['imgCache'] = {};
            var v217w;
            function mb$xs() {
                v217w['onload'] = null, v217w['onerror'] = null, delete h5iqcf['imgCache'][j6k_t];
            }
            ;
            var mxsr$g = function () {
                mb$xs(), h5iqcf['onLoaded'](v217w);
            },
                woup2v = function () {
                mb$xs(), h5iqcf['event']('error', 'Load image failed');
            };
            h5iqcf['_type'] == 'nativeimage' ? (v217w = new s3x['window']['Image'](), v217w['crossOrigin'] = '', v217w['onload'] = mxsr$g, v217w['onerror'] = woup2v, v217w['src'] = thq6d, h5iqcf['imgCache'][j6k_t] = v217w) : new t4d6_h['create'](thq6d, {
                'onload': mxsr$g,
                'onerror': woup2v,
                'onCreate': function (pvo12w) {
                    v217w = pvo12w, h5iqcf['imgCache'][j6k_t] = pvo12w;
                }
            });
        }, _td6k4;
    }(),
        p1b3g = function () {
        function g1pb7() {}
        return mrgs$(g1pb7, 'laya.wx.mini.MiniInput'), g1pb7['_createInputElement'] = function () {
            w2ou['_initInput'](w2ou['area'] = s3x['createElement']('textarea')), w2ou['_initInput'](w2ou['input'] = s3x['createElement']('input')), w2ou['inputContainer'] = s3x['createElement']('div'), w2ou['inputContainer']['style']['position'] = 'absolute', w2ou['inputContainer']['style']['zIndex'] = 0x186a0, s3x['container']['appendChild'](w2ou['inputContainer']), w2ou['inputContainer']['setPos'] = function (m$s0xr, hf4d) {
                w2ou['inputContainer']['style']['left'] = m$s0xr + 'px', w2ou['inputContainer']['style']['top'] = hf4d + 'px';
            }, l85z9i['stage']['on']('resize', null, g1pb7['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (b1p73v) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), mg$x['_soundClass'] = bxsm$g, mg$x['_musicClass'] = bxsm$g, window['_videoClass'] = mr0xse;
        }, g1pb7['_onStageResize'] = function () {
            var r0lze = l85z9i['stage']['_canvasTransform']['identity']();
            r0lze['scale'](s3x['width'] / dqth46['canvas']['width'] / uy2vow['getPixelRatio'](), s3x['height'] / dqth46['canvas']['height'] / uy2vow['getPixelRatio']());
        }, g1pb7['wxinputFocus'] = function (dh4_6t) {
            var iz8 = w2ou['inputElement']['target'];
            if (iz8 && !iz8['editable']) return;
            i9f['window']['wx']['offKeyboardConfirm'](), i9f['window']['wx']['offKeyboardInput'](), i9f['window']['wx']['showKeyboard']({
                'defaultValue': iz8['text'],
                'maxLength': iz8['maxChars'],
                'multiple': iz8['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (z9e8l) {},
                'fail': function (b3x) {}
            }), i9f['window']['wx']['onKeyboardConfirm'](function ($731) {
                var iqcf95 = $731 ? $731['value'] : '';
                iz8['text'] = iqcf95, iz8['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), i9f['window']['wx']['onKeyboardInput'](function (s3bxg) {
                var up2wo = s3bxg ? s3bxg['value'] : '';
                if (!iz8['multiline']) {
                    if (up2wo['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                iz8['text'] = up2wo, iz8['event']('input');
            });
        }, g1pb7['inputEnter'] = function () {
            w2ou['inputElement']['target']['focus'] = ![];
        }, g1pb7['wxinputblur'] = function () {
            g1pb7['hideKeyboard']();
        }, g1pb7['hideKeyboard'] = function () {
            i9f['window']['wx']['offKeyboardConfirm'](), i9f['window']['wx']['offKeyboardInput'](), i9f['window']['wx']['hideKeyboard']({
                'success': function (xmbs$g) {
                    console['log']('隐藏键盘');
                },
                'fail': function (k4n6_t) {
                    console['log']('隐藏键盘出错:' + (k4n6_t ? k4n6_t['errMsg'] : ''));
                }
            });
        }, g1pb7;
    }(),
        upvo2 = function () {
        function dhqfc() {}
        mrgs$(dhqfc, 'laya.wx.mini.MiniLoader');
        var qdfic = dhqfc['prototype'];
        return qdfic['load'] = function (ouw2p, _h6dt4, $bxgsm, b1g$3, erz8l) {
            $bxgsm === void 0x0 && ($bxgsm = !![]), erz8l === void 0x0 && (erz8l = ![]);
            var $sg3 = this;
            $sg3['_url'] = ouw2p;
            if (ouw2p['indexOf']('data:image') === 0x0) $sg3['_type'] = _h6dt4 = 'image';else $sg3['_type'] = _h6dt4 || (_h6dt4 = $sg3['getTypeFromUrl'](ouw2p));
            $sg3['_cache'] = $bxgsm, $sg3['_data'] = null;
            var ywvou = 'ascii';
            if (ouw2p['indexOf']('.fnt') != -0x1) ywvou = 'utf8';else _h6dt4 == 'arraybuffer' && (ywvou = '');
            ;
            var z809el = bmxs['getFileExtension'](ouw2p);
            if (dhqfc['_fileTypeArr']['indexOf'](z809el) != -0x1) i9f['EnvConfig']['load']['call'](this, ouw2p, _h6dt4, $bxgsm, b1g$3, erz8l);else {
                if (!dfch['getFileInfo'](ouw2p)) {
                    if (ouw2p['indexOf']('layaNativeDir/') != -0x1) {
                        if (i9f['isZiYu']) {
                            var pbg13 = dfch['ziyuFileData'][ouw2p];
                            $sg3['onLoaded'](pbg13);
                            return;
                        } else {
                            cosnole['log']('read read'), dfch['read'](ouw2p, ywvou, new v1b37(dhqfc, dhqfc['onReadNativeCallBack'], [ywvou, ouw2p, _h6dt4, $bxgsm, b1g$3, erz8l, $sg3]));
                            return;
                        }
                    }
                    if (s3$['rootPath'] == '') var _4tdk = ouw2p;else _4tdk = ouw2p['split'](s3$['rootPath'])[0x0];
                    ouw2p['indexOf']('http://') != -0x1 || ouw2p['indexOf']('https://') != -0x1 ? i9f['EnvConfig']['load']['call']($sg3, ouw2p, _h6dt4, $bxgsm, b1g$3, erz8l) : dfch['readFile'](_4tdk, ywvou, new v1b37(dhqfc, dhqfc['onReadNativeCallBack'], [ywvou, ouw2p, _h6dt4, $bxgsm, b1g$3, erz8l, $sg3]), ouw2p);
                } else i9f['EnvConfig']['load']['call'](this, ouw2p, _h6dt4, $bxgsm, b1g$3, erz8l);
            }
        }, qdfic['resMgrLoad'] = function (fhd4q, l95c, mrse, v1pw72, xg$bs3, ms$gr, mg$sxr) {
            mrse === void 0x0 && (mrse = 0x0), v1pw72 === void 0x0 && (v1pw72 = ![]), xg$bs3 === void 0x0 && (xg$bs3 = ![]), ms$gr === void 0x0 && (ms$gr = 0x0), mg$sxr === void 0x0 && (mg$sxr = 0x3), fhd4q['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', fhd4q), i9f['EnvConfig']['resMgrLoad'](fhd4q, (gmx$rs, q6hd, cfi95) => {
                dhqfc['prototype']['resMgrLoadCallBack'](gmx$rs, q6hd, cfi95, l95c);
            }, mrse, v1pw72, xg$bs3, ms$gr, mg$sxr);
        }, qdfic['resMgrLoadCallBack'] = function (zc59if, $gxbsm, uowp, s08mr) {
            console['log']('buff:::', zc59if, uowp, dfch['fileNativeDir'] + '///' + dfch['fileListName']), s08mr(zc59if, $gxbsm, uowp);
        }, qdfic['clearRes'] = function (e0rlm, x$s3b) {
            x$s3b === void 0x0 && (x$s3b = ![]);
            var b$sxm = this;
            b$sxm['clearRes'](e0rlm, x$s3b);
            var zlci5 = dfch['getFileInfo'](e0rlm);
            if (zlci5 && (e0rlm['indexOf']('http://') != -0x1 || e0rlm['indexOf']('https://') != -0x1)) {
                var wvpuo2 = zlci5['md5'],
                    t46h_d = dfch['getFileNativePath'](wvpuo2);
                dfch['remove'](t46h_d);
            }
        }, dhqfc['onReadNativeCallBack'] = function (lz89, mgrsx, ifqch5, qdh6f, ktd6_, es8r, _k64n, cdhqf4, fdiqc) {
            qdh6f === void 0x0 && (qdh6f = !![]), es8r === void 0x0 && (es8r = ![]), cdhqf4 === void 0x0 && (cdhqf4 = 0x0);
            if (!cdhqf4) {
                var mexs;
                if (ifqch5 == 'json' || ifqch5 == 'atlas') mexs = i9f['getJson'](fdiqc['data']);else ifqch5 == 'xml' ? mexs = bmxs['parseXMLFromString'](fdiqc['data']) : mexs = fdiqc['data'];
                _k64n['onLoaded'](mexs), !i9f['isZiYu'] && i9f['isPosMsgYu'] && ifqch5 != 'arraybuffer' && wx['postMessage']({
                    'url': mgrsx,
                    'data': mexs,
                    'isLoad': !![]
                });
            } else cdhqf4 == 0x1 && i9f['EnvConfig']['load']['call'](_k64n, mgrsx, ifqch5, qdh6f, ktd6_, es8r);
        }, d_64(dhqfc, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), dhqfc;
    }(),
        dfch = function (p2ouw) {
        function g13$() {
            g13$['__super']['call'](this);
            ;
        }
        return mrgs$(g13$, 'laya.wx.mini.MiniFileMgr', p2ouw), g13$['isLoadFile'] = function (u2wpv) {
            return g13$['_fileTypeArr']['indexOf'](u2wpv) != -0x1 ? !![] : ![];
        }, g13$['getFileInfo'] = function (x0emrs) {
            var x$3bgs = x0emrs['split']('?')[0x0],
                l8em = g13$['filesListObj'][x$3bgs];
            if (l8em == null) return null;else return l8em;
            return null;
        }, g13$['onFileUpdate'] = function (upow2v, uoywv2) {
            var q4fch = upow2v['split']('/'),
                j6kt_ = q4fch[q4fch['length'] - 0x1],
                _t64n = g13$['getFileInfo'](uoywv2);
            if (_t64n == null) g13$['onSaveFile'](uoywv2, j6kt_);else {
                if (_t64n['readyUrl'] != uoywv2) g13$['remove'](j6kt_, uoywv2);
            }
        }, g13$['exits'] = function (n6k4_t, _tk) {
            var gxbs = g13$['getFileNativePath'](n6k4_t);
            g13$['fs']['getFileInfo']({
                'filePath': gxbs,
                'success': function (n6k) {
                    _tk != null && _tk['runWith']([0x0, n6k]);
                },
                'fail': function (w21vop) {
                    _tk != null && _tk['runWith']([0x1, w21vop]);
                }
            });
        }, g13$['read'] = function (zcf9i5, qf4h6, s$3bx, dth) {
            qf4h6 === void 0x0 && (qf4h6 = 'ascill'), dth === void 0x0 && (dth = '');
            var f4dch;
            dth != '' ? f4dch = g13$['getFileNativePath'](zcf9i5) : f4dch = zcf9i5, g13$['fs']['readFile']({
                'filePath': f4dch,
                'encoding': qf4h6,
                'success': function (i9lz5) {
                    s$3bx != null && s$3bx['runWith']([0x0, i9lz5]);
                },
                'fail': function ($gxmsb) {
                    if ($gxmsb && dth != '') g13$['down'](dth, qf4h6, s$3bx, dth);else s$3bx != null && s$3bx['runWith']([0x1]);
                }
            });
        }, g13$['readNativeFile'] = function (z5l9i, sr$0mx) {
            g13$['fs']['readFile']({
                'filePath': z5l9i,
                'encoding': '',
                'success': function (re8l0m) {
                    sr$0mx != null && sr$0mx['runWith']([0x0]);
                },
                'fail': function (pv31b7) {
                    sr$0mx != null && sr$0mx['runWith']([0x1]);
                }
            });
        }, g13$['down'] = function (jankt_, r80e, d4t6, o2uvwp) {
            r80e === void 0x0 && (r80e = 'ascill'), o2uvwp === void 0x0 && (o2uvwp = '');
            var zi85l = g13$['getFileNativePath'](o2uvwp),
                k_nj6t = g13$['wxdown']({
                'url': jankt_,
                'filePath': zi85l,
                'success': function (m$r0) {
                    if (m$r0['statusCode'] === 0xc8) g13$['readFile'](m$r0['filePath'], r80e, d4t6, o2uvwp);
                },
                'fail': function (x7b3$g) {
                    d4t6 != null && d4t6['runWith']([0x1, x7b3$g]);
                }
            });
            k_nj6t['onProgressUpdate'](function (s8m0) {
                d4t6 != null && d4t6['runWith']([0x2, s8m0['progress']]);
            });
        }, g13$['readFile'] = function (e89l0z, wo12pv, $mgxrs, k6_d4t) {
            wo12pv === void 0x0 && (wo12pv = 'ascill'), k6_d4t === void 0x0 && (k6_d4t = ''), g13$['fs']['readFile']({
                'filePath': e89l0z,
                'encoding': wo12pv,
                'success': function (d4cqh) {
                    if (e89l0z['indexOf']('http://') != -0x1 || e89l0z['indexOf']('https://') != -0x1) g13$['onFileUpdate'](e89l0z, k6_d4t);
                    $mgxrs != null && $mgxrs['runWith']([0x0, d4cqh]);
                },
                'fail': function (pw) {
                    if (pw) $mgxrs != null && $mgxrs['runWith']([0x1, pw]);
                }
            });
        }, g13$['downImg'] = function (l8r, gbxm$, $sgrxm) {
            $sgrxm === void 0x0 && ($sgrxm = '');
            var s0mx$r = g13$['wxdown']({
                'url': l8r,
                'success': function (fch5i) {
                    fch5i['statusCode'] === 0xc8 && g13$['copyFile'](fch5i['tempFilePath'], $sgrxm, gbxm$);
                },
                'fail': function (f5icz) {
                    gbxm$ != null && gbxm$['runWith']([0x1, f5icz]);
                }
            });
        }, g13$['copyFile'] = function (wpo12v, f59i, jnt6) {
            var i9zf5 = wpo12v['split']('/'),
                lz8re = i9zf5[i9zf5['length'] - 0x1],
                elz58 = f59i['split']('?')[0x0],
                iz85l = g13$['getFileInfo'](f59i),
                sxe = g13$['getFileNativePath'](lz8re);
            g13$['fs']['copyFile']({
                'srcPath': wpo12v,
                'destPath': sxe,
                'success': function (bsm$gx) {
                    if (!iz85l) g13$['onSaveFile'](f59i, lz8re), jnt6 != null && jnt6['runWith']([0x0]);else {
                        if (iz85l['readyUrl'] != f59i) g13$['remove'](lz8re, f59i, jnt6);
                    }
                },
                'fail': function (i5hqcf) {
                    jnt6 != null && jnt6['runWith']([0x1, i5hqcf]);
                }
            });
        }, g13$['getFileNativePath'] = function (c5l9zi) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + c5l9zi;
        }, g13$['remove'] = function (d6hf, dkt, elrz8) {
            dkt === void 0x0 && (dkt = '');
            var sxm0e = g13$['getFileInfo'](dkt),
                mxr0es = g13$['getFileNativePath'](sxm0e['md5']);
            l85z9i['loader']['clearRes'](sxm0e['readyUrl']), g13$['fs']['unlink']({
                'filePath': mxr0es,
                'success': function (sgxm) {
                    if (dkt != '') g13$['onSaveFile'](dkt, d6hf);
                    elrz8 != null && elrz8['runWith']([0x0]);
                },
                'fail': function (wpou2) {}
            });
        }, g13$['onSaveFile'] = function (fiqcd, clz95i) {
            var gpb7 = fiqcd['split']('?')[0x0];
            g13$['filesListObj'][gpb7] = {
                'md5': clz95i,
                'readyUrl': fiqcd
            }, g13$['fs']['writeFile']({
                'filePath': g13$['fileNativeDir'] + '/' + g13$['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](g13$['filesListObj']),
                'success': function (lzre8) {
                    console['log']('写入测试测试成功：', lzre8);
                },
                'fail': function (_6njt) {
                    console['log']('写入测试测试失败：', _6njt);
                }
            });
        }, g13$['existDir'] = function (mxbs$g, n_jka) {
            g13$['fs']['mkdir']({
                'dirPath': mxbs$g,
                'success': function (ktja) {
                    n_jka != null && n_jka['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (lz08er) {
                    if (lz08er['errMsg']['indexOf']('file already exists') != -0x1) g13$['readSync'](g13$['fileListName'], 'utf8', n_jka);else n_jka != null && n_jka['runWith']([0x1, lz08er]);
                }
            });
        }, g13$['readSync'] = function (pv13b7, fhc5q, rxm0es, qch5) {
            fhc5q === void 0x0 && (fhc5q = 'ascill'), qch5 === void 0x0 && (qch5 = '');
            var es = g13$['getFileNativePath'](pv13b7),
                ta_kn;
            try {
                ta_kn = g13$['fs']['readFileSync'](es), rxm0es != null && rxm0es['runWith']([0x0, { 'data': ta_kn }]);
            } catch (kd46_t) {
                rxm0es != null && rxm0es['runWith']([0x1]);
            }
        }, g13$['readCache'] = function () {}, g13$['writeCache'] = function (yw2vou) {
            var $mrgx = readyUrl['split']('?')[0x0];
            g13$['filesListObj'][$mrgx] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, g13$['fs']['writeFile']({
                'filePath': g13$['fileNativeDir'] + '/' + g13$['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](g13$['filesListObj']),
                'success': function (msxe0) {},
                'fail': function ($rx0s) {}
            });
        }, g13$['setNativeFileDir'] = function (wo2uy) {
            g13$['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + wo2uy;
        }, g13$['filesListObj'] = {}, g13$['fileNativeDir'] = null, g13$['fileListName'] = 'layaairfiles.txt', g13$['ziyuFileData'] = {}, d_64(g13$, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), g13$;
    }($xb7),
        bxsm$g = function (uvp2wo) {
        function c4qfhd() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], c4qfhd['__super']['call'](this), this['_sound'] = c4qfhd['_createSound'](), this['_chanell'] = new lc9iz(this['_sound']);
        }
        mrgs$(c4qfhd, 'laya.wx.mini.MiniSound', uvp2wo);
        var qt4d6h = c4qfhd['prototype'];
        return qt4d6h['load'] = function (t_naj) {
            var sm0rxe = this;
            t_naj = s3$['formatURL'](t_naj), this['url'] = t_naj;
            if (c4qfhd['_audioCache'][t_naj]) {
                this['event']('complete');
                return;
            }
            function _kd() {
                if (c4qfhd['_null'] != undefined) sm0rxe['_sound']['onCanplay'](c4qfhd['_null']), sm0rxe['_sound']['onError'](c4qfhd['_null']);else try {
                    sm0rxe['_sound']['onCanplay'](null), sm0rxe['_sound']['onError'](null), c4qfhd['_null'] = null;
                } catch (b3gs$x) {
                    console['warn']('[wxmini] _clearSound:' + b3gs$x), sm0rxe['_sound']['onCanplay'](zel598), sm0rxe['_sound']['onError'](zel598), c4qfhd['_null'] = zel598;
                }
            }
            function $3bsx() {
                $xr0ms['loaded'] = !![], $xr0ms['event']('complete'), c4qfhd['_audioCache'][$xr0ms['url']] = $xr0ms;
            }
            function vw2you(cqdh4f) {
                console['error']('errCode=' + cqdh4f['errCode'] + '  errMsg=' + cqdh4f['errMsg']), $xr0ms['event']('error');
            }
            function zel598() {}
            this['_sound']['onCanplay']($3bsx), this['_sound']['onError'](vw2you), this['_sound']['src'] = t_naj;
            var $xr0ms = this;
        }, qt4d6h['play'] = function (l0e9, ch4fq) {
            l0e9 === void 0x0 && (l0e9 = 0x0), ch4fq === void 0x0 && (ch4fq = 0x0);
            var j_nkta, vpw1;
            if (this['url'] == mg$x['_tMusic']) {
                if (!c4qfhd['_musicAudio']) c4qfhd['_musicAudio'] = this['_sound'];
                j_nkta = c4qfhd['_musicAudio'], vpw1 = this['_chanell'];
            } else j_nkta = this['_sound'], vpw1 = this['_chanell'];
            return j_nkta['src'] = this['url'], j_nkta['startTime'] = 0x0, vpw1['isStopped'] && (vpw1['url'] = this['url'], vpw1['loops'] = ch4fq, vpw1['startTime'] = l0e9, vpw1['play'](), mg$x['addChannel'](vpw1)), vpw1;
        }, qt4d6h['dispose'] = function () {
            var f9c5 = c4qfhd['_audioCache'][this['url']];
            f9c5 && (f9c5['src'] = '', delete c4qfhd['_audioCache'][this['url']]);
        }, ouvw(0x0, qt4d6h, 'duration', function () {
            return this['_sound']['duration'];
        }), c4qfhd['_createSound'] = function () {
            c4qfhd['_id']++;
            var nk_4 = i9f['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return nk_4;
        }, c4qfhd['_musicAudio'] = null, c4qfhd['_id'] = 0x0, c4qfhd['_audioCache'] = {}, c4qfhd['_null'] = undefined, c4qfhd;
    }($xb7),
        lc9iz = function (e8rms) {
        function fhiqc5(m0xes) {
            this['_audio'] = null, this['_onEnd'] = null, fhiqc5['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = m0xes, this['_onEnd'] = bmxs['bind'](this['__onEnd'], this), m0xes['onEnded'](this['_onEnd']);
        }
        mrgs$(fhiqc5, 'laya.wx.mini.MiniSoundChannel', e8rms);
        var e089 = fhiqc5['prototype'];
        return e089['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (l85z9i['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, e089['__onNull'] = function () {}, e089['play'] = function () {
            this['isStopped'] = ![], mg$x['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, e089['stop'] = function () {
            this['isStopped'] = !![], mg$x['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, e089['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, e089['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], mg$x['addChannel'](this), this['_audio']['play']();
        }, ouvw(0x0, e089, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), ouvw(0x0, e089, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), ouvw(0x0, e089, 'volume', function () {
            return 0x1;
        }, function (l9e08) {}), fhiqc5['_null'] = undefined, fhiqc5;
    }(h_t46d),
        mr0xse = function () {
        function _tjkn() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = i9f['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        mrgs$(_tjkn, 'laya.wx.mini.MiniVideo');
        var hf4qdc = _tjkn['prototype'];
        return hf4qdc['on'] = function (w17pv3, xgms, h6d_t) {
            if (w17pv3 == 'loadedmetadata') this['onPlayFunc'] = h6d_t['bind'](xgms), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else w17pv3 == 'ended' && (this['onEndedFunC'] = h6d_t['bind'](xgms), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, hf4qdc['onTimeUpdateFunc'] = function (chq4d) {
            this['position'] = chq4d['position'], this['_duration'] = chq4d['duration'];
        }, hf4qdc['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, hf4qdc['onended'] = function (idqhf, qdhf64) {
            this['onEndedFunC'] = qdhf64['bind'](idqhf), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, hf4qdc['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, hf4qdc['off'] = function (w173pv, kt4d_6, wu2yov) {
            if (w173pv == 'loadedmetadata') this['onPlayFunc'] = wu2yov['bind'](kt4d_6), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else w173pv == 'ended' && (this['onEndedFunC'] = wu2yov['bind'](kt4d_6), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, hf4qdc['load'] = function (b$g37x) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = b$g37x;
        }, hf4qdc['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, hf4qdc['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, hf4qdc['size'] = function (_an, xesmr0) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = _an, this['videoElement']['height'] = xesmr0;
        }, hf4qdc['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, hf4qdc['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, ouvw(0x0, hf4qdc, 'duration', function () {
            return this['_duration'];
        }), ouvw(0x0, hf4qdc, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (td46hq) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = td46hq;
        }), ouvw(0x0, hf4qdc, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), ouvw(0x0, hf4qdc, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), ouvw(0x0, hf4qdc, 'ended', function () {
            return this['videoend'];
        }), ouvw(0x0, hf4qdc, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (gs$r) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = gs$r;
        }), ouvw(0x0, hf4qdc, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (df4h6q) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = df4h6q;
        }), ouvw(0x0, hf4qdc, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (p12v) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = p12v;
        }), ouvw(0x0, hf4qdc, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), ouvw(0x0, hf4qdc, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (s08rem) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = s08rem;
        }), ouvw(0x0, hf4qdc, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (dhcfqi) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = dhcfqi;
        }), ouvw(0x0, hf4qdc, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), ouvw(0x0, hf4qdc, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (me0xs) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = me0xs;
        }), ouvw(0x0, hf4qdc, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (v2ouwy) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = v2ouwy;
        }), ouvw(0x0, hf4qdc, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (le08rm) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = le08rm;
        }), _tjkn;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var fqhd4 in Laya) {
        var qic = Laya[fqhd4];
        qic && qic['__isclass'] && (exports[fqhd4] = qic);
    }
});