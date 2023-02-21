var W = wx.$l;
(function (window, document, x9_ekc) {
    var ewfc = x9_ekc['un'],
        zb45da = x9_ekc['uns'],
        am45n0 = x9_ekc['static'],
        i8r0n = x9_ekc['class'],
        sfq = x9_ekc['getset'],
        l23$s = x9_ekc['__newvec'],
        jdzb1 = laya['utils']['Browser'],
        l$y = laya['events']['Event'],
        am54n0 = laya['events']['EventDispatcher'],
        vzj1d = laya['resource']['HTMLImage'],
        iorm = laya['utils']['Handler'],
        oir68 = laya['display']['Input'],
        $sf7w = laya['net']['Loader'],
        ni50m4 = laya['maths']['Matrix'],
        fls$2 = laya['renders']['Render'],
        _e7wck = laya['utils']['RunDriver'],
        qslf2 = laya['media']['Sound'],
        $3sl2q = laya['media']['SoundChannel'],
        jdbvu = laya['media']['SoundManager'],
        qt3yp = laya['display']['Stage'],
        kxwc_e = laya['net']['URL'],
        tr6og8 = laya['utils']['Utils'],
        dv5baz = function () {
        function dvzb() {}
        return i8r0n(dvzb, 'laya.wx.mini.MiniAdpter'), dvzb['getJson'] = function (ce7wkf) {
            return JSON['parse'](ce7wkf);
        }, dvzb['init'] = function (m5i0, s7$fw2) {
            m5i0 === void 0x0 && (m5i0 = ![]), s7$fw2 === void 0x0 && (s7$fw2 = ![]);
            if (dvzb['_inited']) return;
            dvzb['window'] = window;
            if (dvzb['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            dvzb['_inited'] = !![], dvzb['isZiYu'] = s7$fw2, dvzb['isPosMsgYu'] = m5i0, dvzb['EnvConfig'] = {}, !dvzb['isZiYu'] && ($sq['setNativeFileDir']('/layaairGame'), $sq['existDir']($sq['fileNativeDir'], iorm['create'](dvzb, dvzb['onMkdirCallBack']))), dvzb['window']['focus'] = function () {}, x9_ekc['getUrlPath'] = function () {}, dvzb['window']['logtime'] = function (m4n0i) {}, dvzb['window']['alertTimeLog'] = function (a54bz) {}, dvzb['window']['resetShareInfo'] = function () {}, dvzb['window']['CanvasRenderingContext2D'] = function () {}, dvzb['window']['CanvasRenderingContext2D']['prototype'] = dvzb['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], dvzb['window']['document']['body']['appendChild'] = function () {}, dvzb['EnvConfig']['pixelRatioInt'] = 0x0, _e7wck['getPixelRatio'] = dvzb['pixelRatio'], dvzb['_preCreateElement'] = jdzb1['createElement'], jdzb1['createElement'] = dvzb['createElement'], _e7wck['createShaderCondition'] = dvzb['createShaderCondition'], tr6og8['parseXMLFromString'] = dvzb['parseXMLFromString'], oir68['_createInputElement'] = e9kcx_['_createInputElement'], dvzb['EnvConfig']['load'] = $sf7w['prototype']['load'], $sf7w['prototype']['load'] = bavz['prototype']['load'], dvzb['isZiYu'] && m5i0 && wx['onMessage'](function (udvh) {
                udvh['isLoad'] && ($sq['ziyuFileData'][udvh['url']] = udvh['data']);
            });
        }, dvzb['onMkdirCallBack'] = function (fws7k2, n0ri4) {
            if (!fws7k2) $sq['filesListObj'] = JSON['parse'](n0ri4['data']);
        }, dvzb['pixelRatio'] = function () {
            if (!dvzb['EnvConfig']['pixelRatioInt']) try {
                var dju1hv = wx['getSystemInfoSync']();
                return dvzb['EnvConfig']['pixelRatioInt'] = dju1hv['pixelRatio'], dju1hv = dju1hv, dju1hv['pixelRatio'];
            } catch (s2$q3l) {}
            return dvzb['EnvConfig']['pixelRatioInt'];
        }, dvzb['createElement'] = function (irm8o0) {
            if (irm8o0 == 'canvas') {
                var pty3ql;
                return dvzb['idx'] == 0x1 ? dvzb['isZiYu'] ? (pty3ql = sharedCanvas, pty3ql['style'] = {}) : pty3ql = window['canvas'] : pty3ql = window['wx']['createCanvas'](), dvzb['idx']++, pty3ql;
            } else {
                if (irm8o0 == 'textarea' || irm8o0 == 'input') return dvzb['onCreateInput'](irm8o0);else {
                    if (irm8o0 == 'div') {
                        var qf27$ = dvzb['_preCreateElement'](irm8o0);
                        return qf27$['contains'] = function (i40n5m) {
                            return null;
                        }, qf27$['removeChild'] = function (udh1v) {}, qf27$;
                    } else return dvzb['_preCreateElement'](irm8o0);
                }
            }
        }, dvzb['onCreateInput'] = function (goyp) {
            var i45mn = dvzb['_preCreateElement'](goyp);
            return i45mn['focus'] = e9kcx_['wxinputFocus'], i45mn['blur'] = e9kcx_['wxinputblur'], i45mn['style'] = {}, i45mn['value'] = 0x0, i45mn['parentElement'] = {}, i45mn['placeholder'] = {}, i45mn['type'] = {}, i45mn['setColor'] = function (lq3ypt) {}, i45mn['setType'] = function (kw72s) {}, i45mn['setFontFace'] = function (gor8im) {}, i45mn['addEventListener'] = function (yt6pg3) {}, i45mn['contains'] = function (qf$2l) {
                return null;
            }, i45mn['removeChild'] = function (i045) {}, i45mn;
        }, dvzb['createShaderCondition'] = function (vb5da) {
            var og8 = this,
                q$3yp = function () {
                var y$3sql = vb5da;
                return og8[vb5da['replace']('this.', '')];
            };
            return q$3yp;
        }, dvzb['EnvConfig'] = null, dvzb['window'] = null, dvzb['_preCreateElement'] = null, dvzb['_inited'] = ![], dvzb['wxRequest'] = null, dvzb['systemInfo'] = null, dvzb['version'] = '0.0.1', dvzb['isZiYu'] = ![], dvzb['isPosMsgYu'] = ![], dvzb['parseXMLFromString'] = function (s$f72q) {
            var tpl3qy, fs$2q;
            s$f72q = s$f72q['replace'](/>\s+</g, '><');
            try {
                tpl3qy = new window['Parser']['DOMParser']()['parseFromString'](s$f72q, 'text/xml');
            } catch (b4ad5) {
                throw '需要引入xml解析库文件';
            }
            return tpl3qy;
        }, dvzb['idx'] = 0x1, dvzb;
    }(),
        f7ewk = function () {
        function ks72wf() {}
        i8r0n(ks72wf, 'laya.wx.mini.MiniImage');
        var wkf2c7 = ks72wf['prototype'];
        return wkf2c7['_loadImage'] = function (bzjv1d) {
            var fws27 = this,
                g8irm = ![];
            bzjv1d['indexOf']('layaNativeDir/') == -0x1 && (g8irm = !![], bzjv1d = kxwc_e['formatURL'](bzjv1d));
            if (!$sq['getFileInfo'](bzjv1d)) {
                if (bzjv1d['indexOf']('http://') != -0x1 || bzjv1d['indexOf']('https://') != -0x1) $sq['downImg'](bzjv1d, new iorm(ks72wf, ks72wf['onDownImgCallBack'], [bzjv1d, fws27]), bzjv1d);else ks72wf['onCreateImage'](bzjv1d, fws27, !![]);
            } else ks72wf['onCreateImage'](bzjv1d, fws27, !g8irm);
        }, ks72wf['onDownImgCallBack'] = function (yt3qlp, z4a5bd, r0n4) {
            if (!r0n4) ks72wf['onCreateImage'](yt3qlp, z4a5bd);else z4a5bd['onError'](null);
        }, ks72wf['onCreateImage'] = function (irmg8, jdhv1, e7kfwc) {
            e7kfwc === void 0x0 && (e7kfwc = ![]);
            var n4b5z;
            if (!e7kfwc) {
                var bvda5z = $sq['getFileInfo'](irmg8),
                    wk2fs = bvda5z['md5'];
                n4b5z = $sq['getFileNativePath'](wk2fs);
            } else n4b5z = irmg8;
            if (jdhv1['imgCache'] == null) jdhv1['imgCache'] = {};
            var bza1dv;
            function h1udv() {
                bza1dv['onload'] = null, bza1dv['onerror'] = null, delete jdhv1['imgCache'][irmg8];
            }
            ;
            var ort6 = function () {
                h1udv(), jdhv1['onLoaded'](bza1dv);
            },
                bzd1vj = function () {
                h1udv(), jdhv1['event']('error', 'Load image failed');
            };
            jdhv1['_type'] == 'nativeimage' ? (bza1dv = new jdzb1['window']['Image'](), bza1dv['crossOrigin'] = '', bza1dv['onload'] = ort6, bza1dv['onerror'] = bzd1vj, bza1dv['src'] = n4b5z, jdhv1['imgCache'][irmg8] = bza1dv) : new vzj1d['create'](n4b5z, {
                'onload': ort6,
                'onerror': bzd1vj,
                'onCreate': function (f2kc7w) {
                    bza1dv = f2kc7w, jdhv1['imgCache'][irmg8] = f2kc7w;
                }
            });
        }, ks72wf;
    }(),
        e9kcx_ = function () {
        function po6tgy() {}
        return i8r0n(po6tgy, 'laya.wx.mini.MiniInput'), po6tgy['_createInputElement'] = function () {
            oir68['_initInput'](oir68['area'] = jdzb1['createElement']('textarea')), oir68['_initInput'](oir68['input'] = jdzb1['createElement']('input')), oir68['inputContainer'] = jdzb1['createElement']('div'), oir68['inputContainer']['style']['position'] = 'absolute', oir68['inputContainer']['style']['zIndex'] = 0x186a0, jdzb1['container']['appendChild'](oir68['inputContainer']), oir68['inputContainer']['setPos'] = function (m08ori, fkec7w) {
                oir68['inputContainer']['style']['left'] = m08ori + 'px', oir68['inputContainer']['style']['top'] = fkec7w + 'px';
            }, x9_ekc['stage']['on']('resize', null, po6tgy['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (jvu1) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), jdbvu['_soundClass'] = wcxke, jdbvu['_musicClass'] = wcxke, window['_videoClass'] = h1djv;
        }, po6tgy['_onStageResize'] = function () {
            var w_7eck = x9_ekc['stage']['_canvasTransform']['identity']();
            w_7eck['scale'](jdzb1['width'] / fls$2['canvas']['width'] / _e7wck['getPixelRatio'](), jdzb1['height'] / fls$2['canvas']['height'] / _e7wck['getPixelRatio']());
        }, po6tgy['wxinputFocus'] = function (tqyp3) {
            var sf7w$ = oir68['inputElement']['target'];
            if (sf7w$ && !sf7w$['editable']) return;
            dv5baz['window']['wx']['offKeyboardConfirm'](), dv5baz['window']['wx']['offKeyboardInput'](), dv5baz['window']['wx']['showKeyboard']({
                'defaultValue': sf7w$['text'],
                'maxLength': sf7w$['maxChars'],
                'multiple': sf7w$['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (y6top) {},
                'fail': function (or86ig) {}
            }), dv5baz['window']['wx']['onKeyboardConfirm'](function (plt6y3) {
                var k2wfs = plt6y3 ? plt6y3['value'] : '';
                sf7w$['text'] = k2wfs, sf7w$['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), dv5baz['window']['wx']['onKeyboardInput'](function (nb4za5) {
                var o6ypgt = nb4za5 ? nb4za5['value'] : '';
                if (!sf7w$['multiline']) {
                    if (o6ypgt['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                sf7w$['text'] = o6ypgt, sf7w$['event']('input');
            });
        }, po6tgy['inputEnter'] = function () {
            oir68['inputElement']['target']['focus'] = ![];
        }, po6tgy['wxinputblur'] = function () {
            po6tgy['hideKeyboard']();
        }, po6tgy['hideKeyboard'] = function () {
            dv5baz['window']['wx']['offKeyboardConfirm'](), dv5baz['window']['wx']['offKeyboardInput'](), dv5baz['window']['wx']['hideKeyboard']({
                'success': function (uhd1vj) {
                    console['log']('隐藏键盘');
                },
                'fail': function (mnr40) {
                    console['log']('隐藏键盘出错:' + (mnr40 ? mnr40['errMsg'] : ''));
                }
            });
        }, po6tgy;
    }(),
        bavz = function () {
        function ekfwc() {}
        i8r0n(ekfwc, 'laya.wx.mini.MiniLoader');
        var ptqy = ekfwc['prototype'];
        return ptqy['load'] = function (gi86o, $wf2, i5m0n4, lqyp3, bdz4a5) {
            i5m0n4 === void 0x0 && (i5m0n4 = !![]), bdz4a5 === void 0x0 && (bdz4a5 = ![]);
            var kefc7w = this;
            kefc7w['_url'] = gi86o;
            if (gi86o['indexOf']('data:image') === 0x0) kefc7w['_type'] = $wf2 = 'image';else kefc7w['_type'] = $wf2 || ($wf2 = kefc7w['getTypeFromUrl'](gi86o));
            kefc7w['_cache'] = i5m0n4, kefc7w['_data'] = null;
            var an0z4 = 'ascii';
            if (gi86o['indexOf']('.fnt') != -0x1) an0z4 = 'utf8';else $wf2 == 'arraybuffer' && (an0z4 = '');
            ;
            var na405 = tr6og8['getFileExtension'](gi86o);
            if (ekfwc['_fileTypeArr']['indexOf'](na405) != -0x1) dv5baz['EnvConfig']['load']['call'](this, gi86o, $wf2, i5m0n4, lqyp3, bdz4a5);else {
                if (!$sq['getFileInfo'](gi86o)) {
                    if (gi86o['indexOf']('layaNativeDir/') != -0x1) {
                        if (dv5baz['isZiYu']) {
                            var q2fl = $sq['ziyuFileData'][gi86o];
                            kefc7w['onLoaded'](q2fl);
                            return;
                        } else {
                            cosnole['log']('read read'), $sq['read'](gi86o, an0z4, new iorm(ekfwc, ekfwc['onReadNativeCallBack'], [an0z4, gi86o, $wf2, i5m0n4, lqyp3, bdz4a5, kefc7w]));
                            return;
                        }
                    }
                    if (kxwc_e['rootPath'] == '') var fl$2q = gi86o;else fl$2q = gi86o['split'](kxwc_e['rootPath'])[0x0];
                    gi86o['indexOf']('http://') != -0x1 || gi86o['indexOf']('https://') != -0x1 ? dv5baz['EnvConfig']['load']['call'](kefc7w, gi86o, $wf2, i5m0n4, lqyp3, bdz4a5) : $sq['readFile'](fl$2q, an0z4, new iorm(ekfwc, ekfwc['onReadNativeCallBack'], [an0z4, gi86o, $wf2, i5m0n4, lqyp3, bdz4a5, kefc7w]), gi86o);
                } else dv5baz['EnvConfig']['load']['call'](this, gi86o, $wf2, i5m0n4, lqyp3, bdz4a5);
            }
        }, ptqy['resMgrLoad'] = function (d5ab4z, wkfc72, rto86g, g86tro, f7c2k, s7q2f$, yl$s3) {
            rto86g === void 0x0 && (rto86g = 0x0), g86tro === void 0x0 && (g86tro = ![]), f7c2k === void 0x0 && (f7c2k = ![]), s7q2f$ === void 0x0 && (s7q2f$ = 0x0), yl$s3 === void 0x0 && (yl$s3 = 0x3), d5ab4z['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', d5ab4z), dv5baz['EnvConfig']['resMgrLoad'](d5ab4z, (m5na0, pg6yo, bzvda) => {
                ekfwc['prototype']['resMgrLoadCallBack'](m5na0, pg6yo, bzvda, wkfc72);
            }, rto86g, g86tro, f7c2k, s7q2f$, yl$s3);
        }, ptqy['resMgrLoadCallBack'] = function (n4i0m, nm50i, mni08, oy6tpg) {
            console['log']('buff:::', n4i0m, mni08, $sq['fileNativeDir'] + '///' + $sq['fileListName']), oy6tpg(n4i0m, nm50i, mni08);
        }, ptqy['clearRes'] = function (gtyo6, u1hdjv) {
            u1hdjv === void 0x0 && (u1hdjv = ![]);
            var xke9_ = this;
            xke9_['clearRes'](gtyo6, u1hdjv);
            var amn450 = $sq['getFileInfo'](gtyo6);
            if (amn450 && (gtyo6['indexOf']('http://') != -0x1 || gtyo6['indexOf']('https://') != -0x1)) {
                var _ecw7k = amn450['md5'],
                    irmn4 = $sq['getFileNativePath'](_ecw7k);
                $sq['remove'](irmn4);
            }
        }, ekfwc['onReadNativeCallBack'] = function (r80mni, $lyq3s, rtgo8, vzab1, p3lt6y, tp6l, typlq, lf2, mrn0) {
            vzab1 === void 0x0 && (vzab1 = !![]), tp6l === void 0x0 && (tp6l = ![]), lf2 === void 0x0 && (lf2 = 0x0);
            if (!lf2) {
                var z0na;
                if (rtgo8 == 'json' || rtgo8 == 'atlas') z0na = dv5baz['getJson'](mrn0['data']);else rtgo8 == 'xml' ? z0na = tr6og8['parseXMLFromString'](mrn0['data']) : z0na = mrn0['data'];
                typlq['onLoaded'](z0na), !dv5baz['isZiYu'] && dv5baz['isPosMsgYu'] && rtgo8 != 'arraybuffer' && wx['postMessage']({
                    'url': $lyq3s,
                    'data': z0na,
                    'isLoad': !![]
                });
            } else lf2 == 0x1 && dv5baz['EnvConfig']['load']['call'](typlq, $lyq3s, rtgo8, vzab1, p3lt6y, tp6l);
        }, am45n0(ekfwc, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), ekfwc;
    }(),
        $sq = function (inr) {
        function gy63t() {
            gy63t['__super']['call'](this);
            ;
        }
        return i8r0n(gy63t, 'laya.wx.mini.MiniFileMgr', inr), gy63t['isLoadFile'] = function (m8i0or) {
            return gy63t['_fileTypeArr']['indexOf'](m8i0or) != -0x1 ? !![] : ![];
        }, gy63t['getFileInfo'] = function (bvz5da) {
            var s3$qyl = bvz5da['split']('?')[0x0],
                zva1bd = gy63t['filesListObj'][s3$qyl];
            if (zva1bd == null) return null;else return zva1bd;
            return null;
        }, gy63t['onFileUpdate'] = function (ck7w_e, ekcw) {
            var an450m = ck7w_e['split']('/'),
                kw27 = an450m[an450m['length'] - 0x1],
                tgoyp = gy63t['getFileInfo'](ekcw);
            if (tgoyp == null) gy63t['onSaveFile'](ekcw, kw27);else {
                if (tgoyp['readyUrl'] != ekcw) gy63t['remove'](kw27, ekcw);
            }
        }, gy63t['exits'] = function (ltp3y6, ecw) {
            var _xecwk = gy63t['getFileNativePath'](ltp3y6);
            gy63t['fs']['getFileInfo']({
                'filePath': _xecwk,
                'success': function (mo8rgi) {
                    ecw != null && ecw['runWith']([0x0, mo8rgi]);
                },
                'fail': function (fwke7c) {
                    ecw != null && ecw['runWith']([0x1, fwke7c]);
                }
            });
        }, gy63t['read'] = function (xe, n0rmi4, im0n, vzba5d) {
            n0rmi4 === void 0x0 && (n0rmi4 = 'ascill'), vzba5d === void 0x0 && (vzba5d = '');
            var pyg3;
            vzba5d != '' ? pyg3 = gy63t['getFileNativePath'](xe) : pyg3 = xe, gy63t['fs']['readFile']({
                'filePath': pyg3,
                'encoding': n0rmi4,
                'success': function (bjvd1z) {
                    im0n != null && im0n['runWith']([0x0, bjvd1z]);
                },
                'fail': function (_x9ek) {
                    if (_x9ek && vzba5d != '') gy63t['down'](vzba5d, n0rmi4, im0n, vzba5d);else im0n != null && im0n['runWith']([0x1]);
                }
            });
        }, gy63t['readNativeFile'] = function (w27cfk, dz1jvb) {
            gy63t['fs']['readFile']({
                'filePath': w27cfk,
                'encoding': '',
                'success': function (p63tg) {
                    dz1jvb != null && dz1jvb['runWith']([0x0]);
                },
                'fail': function (rom0i8) {
                    dz1jvb != null && dz1jvb['runWith']([0x1]);
                }
            });
        }, gy63t['down'] = function (gt8or6, zb4da, _cxw, y3gtp) {
            zb4da === void 0x0 && (zb4da = 'ascill'), y3gtp === void 0x0 && (y3gtp = '');
            var pytq = gy63t['getFileNativePath'](y3gtp),
                z5adb = gy63t['wxdown']({
                'url': gt8or6,
                'filePath': pytq,
                'success': function (s2fk) {
                    if (s2fk['statusCode'] === 0xc8) gy63t['readFile'](s2fk['filePath'], zb4da, _cxw, y3gtp);
                },
                'fail': function (dujh1v) {
                    _cxw != null && _cxw['runWith']([0x1, dujh1v]);
                }
            });
            z5adb['onProgressUpdate'](function (dh1vu) {
                _cxw != null && _cxw['runWith']([0x2, dh1vu['progress']]);
            });
        }, gy63t['readFile'] = function (bzd5a4, g8opt, ad1zbv, bdza5v) {
            g8opt === void 0x0 && (g8opt = 'ascill'), bdza5v === void 0x0 && (bdza5v = ''), gy63t['fs']['readFile']({
                'filePath': bzd5a4,
                'encoding': g8opt,
                'success': function (zda45b) {
                    if (bzd5a4['indexOf']('http://') != -0x1 || bzd5a4['indexOf']('https://') != -0x1) gy63t['onFileUpdate'](bzd5a4, bdza5v);
                    ad1zbv != null && ad1zbv['runWith']([0x0, zda45b]);
                },
                'fail': function (b5av) {
                    if (b5av) ad1zbv != null && ad1zbv['runWith']([0x1, b5av]);
                }
            });
        }, gy63t['downImg'] = function (minr8, z1bdva, d5bzv) {
            d5bzv === void 0x0 && (d5bzv = '');
            var typ3l = gy63t['wxdown']({
                'url': minr8,
                'success': function (z5vadb) {
                    z5vadb['statusCode'] === 0xc8 && gy63t['copyFile'](z5vadb['tempFilePath'], d5bzv, z1bdva);
                },
                'fail': function (w$7f2) {
                    z1bdva != null && z1bdva['runWith']([0x1, w$7f2]);
                }
            });
        }, gy63t['copyFile'] = function (imgr8o, fs2$q7, b5adz) {
            var d4bza = imgr8o['split']('/'),
                pqy$3l = d4bza[d4bza['length'] - 0x1],
                sy3$ql = fs2$q7['split']('?')[0x0],
                ytgp63 = gy63t['getFileInfo'](fs2$q7),
                $32l = gy63t['getFileNativePath'](pqy$3l);
            gy63t['fs']['copyFile']({
                'srcPath': imgr8o,
                'destPath': $32l,
                'success': function (ly36pt) {
                    if (!ytgp63) gy63t['onSaveFile'](fs2$q7, pqy$3l), b5adz != null && b5adz['runWith']([0x0]);else {
                        if (ytgp63['readyUrl'] != fs2$q7) gy63t['remove'](pqy$3l, fs2$q7, b5adz);
                    }
                },
                'fail': function (c7k_e) {
                    b5adz != null && b5adz['runWith']([0x1, c7k_e]);
                }
            });
        }, gy63t['getFileNativePath'] = function (in05) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + in05;
        }, gy63t['remove'] = function (uvdj1b, ckef7w, hj1) {
            ckef7w === void 0x0 && (ckef7w = '');
            var qfs$l = gy63t['getFileInfo'](ckef7w),
                k_w7ce = gy63t['getFileNativePath'](qfs$l['md5']);
            x9_ekc['loader']['clearRes'](qfs$l['readyUrl']), gy63t['fs']['unlink']({
                'filePath': k_w7ce,
                'success': function (d1jbu) {
                    if (ckef7w != '') gy63t['onSaveFile'](ckef7w, uvdj1b);
                    hj1 != null && hj1['runWith']([0x0]);
                },
                'fail': function (rm08ni) {}
            });
        }, gy63t['onSaveFile'] = function (pty36g, g6py3t) {
            var a4n5 = pty36g['split']('?')[0x0];
            gy63t['filesListObj'][a4n5] = {
                'md5': g6py3t,
                'readyUrl': pty36g
            }, gy63t['fs']['writeFile']({
                'filePath': gy63t['fileNativeDir'] + '/' + gy63t['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](gy63t['filesListObj']),
                'success': function (nim40) {
                    console['log']('写入测试测试成功：', nim40);
                },
                'fail': function (bza5d) {
                    console['log']('写入测试测试失败：', bza5d);
                }
            });
        }, gy63t['existDir'] = function (c7f, ekw_xc) {
            gy63t['fs']['mkdir']({
                'dirPath': c7f,
                'success': function (wcex_k) {
                    ekw_xc != null && ekw_xc['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (op8tg) {
                    if (op8tg['errMsg']['indexOf']('file already exists') != -0x1) gy63t['readSync'](gy63t['fileListName'], 'utf8', ekw_xc);else ekw_xc != null && ekw_xc['runWith']([0x1, op8tg]);
                }
            });
        }, gy63t['readSync'] = function (g6io8r, kwcx_, mg8iro, r8gio) {
            kwcx_ === void 0x0 && (kwcx_ = 'ascill'), r8gio === void 0x0 && (r8gio = '');
            var i450m = gy63t['getFileNativePath'](g6io8r),
                n54zb;
            try {
                n54zb = gy63t['fs']['readFileSync'](i450m), mg8iro != null && mg8iro['runWith']([0x0, { 'data': n54zb }]);
            } catch (bjzvd) {
                mg8iro != null && mg8iro['runWith']([0x1]);
            }
        }, gy63t['readCache'] = function () {}, gy63t['writeCache'] = function (lq$3s2) {
            var m5n04a = readyUrl['split']('?')[0x0];
            gy63t['filesListObj'][m5n04a] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, gy63t['fs']['writeFile']({
                'filePath': gy63t['fileNativeDir'] + '/' + gy63t['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](gy63t['filesListObj']),
                'success': function (g86ri) {},
                'fail': function (vbj1ud) {}
            });
        }, gy63t['setNativeFileDir'] = function (mnir0) {
            gy63t['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + mnir0;
        }, gy63t['filesListObj'] = {}, gy63t['fileNativeDir'] = null, gy63t['fileListName'] = 'layaairfiles.txt', gy63t['ziyuFileData'] = {}, am45n0(gy63t, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), gy63t;
    }(am54n0),
        wcxke = function (qly3) {
        function jdvuh1() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], jdvuh1['__super']['call'](this), this['_sound'] = jdvuh1['_createSound'](), this['_chanell'] = new $fs2l(this['_sound']);
        }
        i8r0n(jdvuh1, 'laya.wx.mini.MiniSound', qly3);
        var i0m8or = jdvuh1['prototype'];
        return i0m8or['load'] = function (d4z5ab) {
            var $2qls3 = this;
            d4z5ab = kxwc_e['formatURL'](d4z5ab), this['url'] = d4z5ab;
            if (jdvuh1['_audioCache'][d4z5ab]) {
                this['event']('complete');
                return;
            }
            function sw2$() {
                if (jdvuh1['_null'] != undefined) $2qls3['_sound']['onCanplay'](jdvuh1['_null']), $2qls3['_sound']['onError'](jdvuh1['_null']);else try {
                    $2qls3['_sound']['onCanplay'](null), $2qls3['_sound']['onError'](null), jdvuh1['_null'] = null;
                } catch (mr04ni) {
                    console['warn']('[wxmini] _clearSound:' + mr04ni), $2qls3['_sound']['onCanplay'](zdj1vb), $2qls3['_sound']['onError'](zdj1vb), jdvuh1['_null'] = zdj1vb;
                }
            }
            function tlyp3() {
                b5vdaz['loaded'] = !![], b5vdaz['event']('complete'), jdvuh1['_audioCache'][b5vdaz['url']] = b5vdaz;
            }
            function ni4m(s$wf27) {
                console['error']('errCode=' + s$wf27['errCode'] + '  errMsg=' + s$wf27['errMsg']), b5vdaz['event']('error');
            }
            function zdj1vb() {}
            this['_sound']['onCanplay'](tlyp3), this['_sound']['onError'](ni4m), this['_sound']['src'] = d4z5ab;
            var b5vdaz = this;
        }, i0m8or['play'] = function ($7fs2q, cxw_k) {
            $7fs2q === void 0x0 && ($7fs2q = 0x0), cxw_k === void 0x0 && (cxw_k = 0x0);
            var z1adv, y$lpq;
            if (this['url'] == jdbvu['_tMusic']) {
                if (!jdvuh1['_musicAudio']) jdvuh1['_musicAudio'] = this['_sound'];
                z1adv = jdvuh1['_musicAudio'], y$lpq = this['_chanell'];
            } else z1adv = this['_sound'], y$lpq = this['_chanell'];
            return z1adv['src'] = this['url'], z1adv['startTime'] = 0x0, y$lpq['isStopped'] && (y$lpq['url'] = this['url'], y$lpq['loops'] = cxw_k, y$lpq['startTime'] = $7fs2q, y$lpq['play'](), jdbvu['addChannel'](y$lpq)), y$lpq;
        }, i0m8or['dispose'] = function () {
            var kx_ec9 = jdvuh1['_audioCache'][this['url']];
            kx_ec9 && (kx_ec9['src'] = '', delete jdvuh1['_audioCache'][this['url']]);
        }, sfq(0x0, i0m8or, 'duration', function () {
            return this['_sound']['duration'];
        }), jdvuh1['_createSound'] = function () {
            jdvuh1['_id']++;
            var bzjv = dv5baz['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return bzjv;
        }, jdvuh1['_musicAudio'] = null, jdvuh1['_id'] = 0x0, jdvuh1['_audioCache'] = {}, jdvuh1['_null'] = undefined, jdvuh1;
    }(am54n0),
        $fs2l = function ($sf27) {
        function vjdzb1(kcf72) {
            this['_audio'] = null, this['_onEnd'] = null, vjdzb1['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = kcf72, this['_onEnd'] = tr6og8['bind'](this['__onEnd'], this), kcf72['onEnded'](this['_onEnd']);
        }
        i8r0n(vjdzb1, 'laya.wx.mini.MiniSoundChannel', $sf27);
        var f27ks = vjdzb1['prototype'];
        return f27ks['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (x9_ekc['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, f27ks['__onNull'] = function () {}, f27ks['play'] = function () {
            this['isStopped'] = ![], jdbvu['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, f27ks['stop'] = function () {
            this['isStopped'] = !![], jdbvu['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, f27ks['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, f27ks['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], jdbvu['addChannel'](this), this['_audio']['play']();
        }, sfq(0x0, f27ks, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), sfq(0x0, f27ks, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), sfq(0x0, f27ks, 'volume', function () {
            return 0x1;
        }, function (zda5) {}), vjdzb1['_null'] = undefined, vjdzb1;
    }($3sl2q),
        h1djv = function () {
        function oi8m() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = dv5baz['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        i8r0n(oi8m, 'laya.wx.mini.MiniVideo');
        var jvubd1 = oi8m['prototype'];
        return jvubd1['on'] = function (a0zn, vadb5, xcekw_) {
            if (a0zn == 'loadedmetadata') this['onPlayFunc'] = xcekw_['bind'](vadb5), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else a0zn == 'ended' && (this['onEndedFunC'] = xcekw_['bind'](vadb5), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, jvubd1['onTimeUpdateFunc'] = function (bza45n) {
            this['position'] = bza45n['position'], this['_duration'] = bza45n['duration'];
        }, jvubd1['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, jvubd1['onended'] = function (a5vzd, juv1dh) {
            this['onEndedFunC'] = juv1dh['bind'](a5vzd), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, jvubd1['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, jvubd1['off'] = function (py6l, a0n5z4, ypql$3) {
            if (py6l == 'loadedmetadata') this['onPlayFunc'] = ypql$3['bind'](a0n5z4), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else py6l == 'ended' && (this['onEndedFunC'] = ypql$3['bind'](a0n5z4), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, jvubd1['load'] = function (q2$7s) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = q2$7s;
        }, jvubd1['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, jvubd1['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, jvubd1['size'] = function (ptg63, s3l$2) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = ptg63, this['videoElement']['height'] = s3l$2;
        }, jvubd1['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, jvubd1['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, sfq(0x0, jvubd1, 'duration', function () {
            return this['_duration'];
        }), sfq(0x0, jvubd1, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (pl3y$q) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = pl3y$q;
        }), sfq(0x0, jvubd1, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), sfq(0x0, jvubd1, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), sfq(0x0, jvubd1, 'ended', function () {
            return this['videoend'];
        }), sfq(0x0, jvubd1, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (g6r8io) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = g6r8io;
        }), sfq(0x0, jvubd1, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (ogyp6t) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = ogyp6t;
        }), sfq(0x0, jvubd1, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function ($qf2s7) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = $qf2s7;
        }), sfq(0x0, jvubd1, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), sfq(0x0, jvubd1, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (t6lyp3) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = t6lyp3;
        }), sfq(0x0, jvubd1, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (zadb54) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = zadb54;
        }), sfq(0x0, jvubd1, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), sfq(0x0, jvubd1, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (u1hdvj) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = u1hdvj;
        }), sfq(0x0, jvubd1, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (yp6t) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = yp6t;
        }), sfq(0x0, jvubd1, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (o6gp) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = o6gp;
        }), oi8m;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var t3qlp in Laya) {
        var ba1vd = Laya[t3qlp];
        ba1vd && ba1vd['__isclass'] && (exports[t3qlp] = ba1vd);
    }
});