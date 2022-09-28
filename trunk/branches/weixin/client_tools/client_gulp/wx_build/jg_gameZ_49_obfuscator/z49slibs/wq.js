var b = wx.$e;
(function (window, document, qu2s) {
    var wr4dv = qu2s['un'],
        _f9m0 = qu2s['uns'],
        rw8tv = qu2s['static'],
        ewav$ = qu2s['class'],
        bpcz7 = qu2s['getset'],
        dr87z = qu2s['__newvec'],
        k09_f = laya['utils']['Browser'],
        u5s2nq = laya['events']['Event'],
        ve8 = laya['events']['EventDispatcher'],
        vtewa$ = laya['resource']['HTMLImage'],
        pzcb6 = laya['utils']['Handler'],
        gmof = laya['display']['Input'],
        w48vtr = laya['net']['Loader'],
        v84dzr = laya['maths']['Matrix'],
        tea$wv = laya['renders']['Render'],
        mkf0 = laya['utils']['RunDriver'],
        bpcz67 = laya['media']['Sound'],
        qj1s3 = laya['media']['SoundChannel'],
        t4vr = laya['media']['SoundManager'],
        s35q2j = laya['display']['Stage'],
        l2qhun = laya['net']['URL'],
        x3s1 = laya['utils']['Utils'],
        sq35j2 = function () {
        function om0gf() {}
        return ewav$(om0gf, 'laya.wx.mini.MiniAdpter'), om0gf['getJson'] = function (p7cb) {
            return JSON['parse'](p7cb);
        }, om0gf['init'] = function (rvwt48, xj3s15) {
            rvwt48 === void 0x0 && (rvwt48 = ![]), xj3s15 === void 0x0 && (xj3s15 = ![]);
            if (om0gf['_inited']) return;
            om0gf['window'] = window;
            if (om0gf['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            om0gf['_inited'] = !![], om0gf['isZiYu'] = xj3s15, om0gf['isPosMsgYu'] = rvwt48, om0gf['EnvConfig'] = {}, !om0gf['isZiYu'] && (twav$e['setNativeFileDir']('/layaairGame'), twav$e['existDir'](twav$e['fileNativeDir'], pzcb6['create'](om0gf, om0gf['onMkdirCallBack']))), om0gf['window']['focus'] = function () {}, qu2s['getUrlPath'] = function () {}, om0gf['window']['logtime'] = function (qj2s5n) {}, om0gf['window']['alertTimeLog'] = function (vt8$we) {}, om0gf['window']['resetShareInfo'] = function () {}, om0gf['window']['CanvasRenderingContext2D'] = function () {}, om0gf['window']['CanvasRenderingContext2D']['prototype'] = om0gf['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], om0gf['window']['document']['body']['appendChild'] = function () {}, om0gf['EnvConfig']['pixelRatioInt'] = 0x0, mkf0['getPixelRatio'] = om0gf['pixelRatio'], om0gf['_preCreateElement'] = k09_f['createElement'], k09_f['createElement'] = om0gf['createElement'], mkf0['createShaderCondition'] = om0gf['createShaderCondition'], x3s1['parseXMLFromString'] = om0gf['parseXMLFromString'], gmof['_createInputElement'] = zv4r8['_createInputElement'], om0gf['EnvConfig']['load'] = w48vtr['prototype']['load'], w48vtr['prototype']['load'] = n5sq2j['prototype']['load'], om0gf['isZiYu'] && rvwt48 && wx['onMessage'](function (bc67zp) {
                bc67zp['isLoad'] && (twav$e['ziyuFileData'][bc67zp['url']] = bc67zp['data']);
            });
        }, om0gf['onMkdirCallBack'] = function (q35js1, wv$e8) {
            if (!q35js1) twav$e['filesListObj'] = JSON['parse'](wv$e8['data']);
        }, om0gf['pixelRatio'] = function () {
            if (!om0gf['EnvConfig']['pixelRatioInt']) try {
                var jqs2n5 = wx['getSystemInfoSync']();
                return om0gf['EnvConfig']['pixelRatioInt'] = jqs2n5['pixelRatio'], jqs2n5 = jqs2n5, jqs2n5['pixelRatio'];
            } catch (og9xfm) {}
            return om0gf['EnvConfig']['pixelRatioInt'];
        }, om0gf['createElement'] = function (w4te) {
            if (w4te == 'canvas') {
                var $wve;
                return om0gf['idx'] == 0x1 ? om0gf['isZiYu'] ? ($wve = sharedCanvas, $wve['style'] = {}) : $wve = window['canvas'] : $wve = window['wx']['createCanvas'](), om0gf['idx']++, $wve;
            } else {
                if (w4te == 'textarea' || w4te == 'input') return om0gf['onCreateInput'](w4te);else {
                    if (w4te == 'div') {
                        var s2j5q3 = om0gf['_preCreateElement'](w4te);
                        return s2j5q3['contains'] = function (g0f9m) {
                            return null;
                        }, s2j5q3['removeChild'] = function (b6pzc) {}, s2j5q3;
                    } else return om0gf['_preCreateElement'](w4te);
                }
            }
        }, om0gf['onCreateInput'] = function (ve$twa) {
            var nq52js = om0gf['_preCreateElement'](ve$twa);
            return nq52js['focus'] = zv4r8['wxinputFocus'], nq52js['blur'] = zv4r8['wxinputblur'], nq52js['style'] = {}, nq52js['value'] = 0x0, nq52js['parentElement'] = {}, nq52js['placeholder'] = {}, nq52js['type'] = {}, nq52js['setColor'] = function (b6czd7) {}, nq52js['setType'] = function (xgmo9) {}, nq52js['setFontFace'] = function (tvw$8e) {}, nq52js['addEventListener'] = function (drb7z) {}, nq52js['contains'] = function (a_if0) {
                return null;
            }, nq52js['removeChild'] = function (xom3g1) {}, nq52js;
        }, om0gf['createShaderCondition'] = function (b7czd6) {
            var bz67c = this,
                m31go = function () {
                var xg1om9 = b7czd6;
                return bz67c[b7czd6['replace']('this.', '')];
            };
            return m31go;
        }, om0gf['EnvConfig'] = null, om0gf['window'] = null, om0gf['_preCreateElement'] = null, om0gf['_inited'] = ![], om0gf['wxRequest'] = null, om0gf['systemInfo'] = null, om0gf['version'] = '0.0.1', om0gf['isZiYu'] = ![], om0gf['isPosMsgYu'] = ![], om0gf['parseXMLFromString'] = function (g1o3xm) {
            var qs531, zp6b;
            g1o3xm = g1o3xm['replace'](/>\s+</g, '><');
            try {
                qs531 = new window['Parser']['DOMParser']()['parseFromString'](g1o3xm, 'text/xml');
            } catch (n2l) {
                throw '需要引入xml解析库文件';
            }
            return qs531;
        }, om0gf['idx'] = 0x1, om0gf;
    }(),
        _e$k = function () {
        function s5xj31() {}
        ewav$(s5xj31, 'laya.wx.mini.MiniImage');
        var nsq25 = s5xj31['prototype'];
        return nsq25['_loadImage'] = function (w$iea) {
            var ki0$a = this,
                i$ka0 = ![];
            w$iea['indexOf']('layaNativeDir/') == -0x1 && (i$ka0 = !![], w$iea = l2qhun['formatURL'](w$iea));
            if (!twav$e['getFileInfo'](w$iea)) {
                if (w$iea['indexOf']('http://') != -0x1 || w$iea['indexOf']('https://') != -0x1) twav$e['downImg'](w$iea, new pzcb6(s5xj31, s5xj31['onDownImgCallBack'], [w$iea, ki0$a]), w$iea);else s5xj31['onCreateImage'](w$iea, ki0$a, !![]);
            } else s5xj31['onCreateImage'](w$iea, ki0$a, !i$ka0);
        }, s5xj31['onDownImgCallBack'] = function (omx9, nlu2q, afi0) {
            if (!afi0) s5xj31['onCreateImage'](omx9, nlu2q);else nlu2q['onError'](null);
        }, s5xj31['onCreateImage'] = function (a_0ki$, ea_ik, j235q) {
            j235q === void 0x0 && (j235q = ![]);
            var rcdbz7;
            if (!j235q) {
                var z6c7db = twav$e['getFileInfo'](a_0ki$),
                    dz784r = z6c7db['md5'];
                rcdbz7 = twav$e['getFileNativePath'](dz784r);
            } else rcdbz7 = a_0ki$;
            if (ea_ik['imgCache'] == null) ea_ik['imgCache'] = {};
            var ifk90_;
            function itw$a() {
                ifk90_['onload'] = null, ifk90_['onerror'] = null, delete ea_ik['imgCache'][a_0ki$];
            }
            ;
            var zc7rdb = function () {
                itw$a(), ea_ik['onLoaded'](ifk90_);
            },
                yulhn2 = function () {
                itw$a(), ea_ik['event']('error', 'Load image failed');
            };
            ea_ik['_type'] == 'nativeimage' ? (ifk90_ = new k09_f['window']['Image'](), ifk90_['crossOrigin'] = '', ifk90_['onload'] = zc7rdb, ifk90_['onerror'] = yulhn2, ifk90_['src'] = rcdbz7, ea_ik['imgCache'][a_0ki$] = ifk90_) : new vtewa$['create'](rcdbz7, {
                'onload': zc7rdb,
                'onerror': yulhn2,
                'onCreate': function (rv48wt) {
                    ifk90_ = rv48wt, ea_ik['imgCache'][a_0ki$] = rv48wt;
                }
            });
        }, s5xj31;
    }(),
        zv4r8 = function () {
        function o1g9xm() {}
        return ewav$(o1g9xm, 'laya.wx.mini.MiniInput'), o1g9xm['_createInputElement'] = function () {
            gmof['_initInput'](gmof['area'] = k09_f['createElement']('textarea')), gmof['_initInput'](gmof['input'] = k09_f['createElement']('input')), gmof['inputContainer'] = k09_f['createElement']('div'), gmof['inputContainer']['style']['position'] = 'absolute', gmof['inputContainer']['style']['zIndex'] = 0x186a0, k09_f['container']['appendChild'](gmof['inputContainer']), gmof['inputContainer']['setPos'] = function (kiea$t, ogx9mf) {
                gmof['inputContainer']['style']['left'] = kiea$t + 'px', gmof['inputContainer']['style']['top'] = ogx9mf + 'px';
            }, qu2s['stage']['on']('resize', null, o1g9xm['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function ($akie) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), t4vr['_soundClass'] = mf0k9_, t4vr['_musicClass'] = mf0k9_, window['_videoClass'] = ie$aw;
        }, o1g9xm['_onStageResize'] = function () {
            var _kfm = qu2s['stage']['_canvasTransform']['identity']();
            _kfm['scale'](k09_f['width'] / tea$wv['canvas']['width'] / mkf0['getPixelRatio'](), k09_f['height'] / tea$wv['canvas']['height'] / mkf0['getPixelRatio']());
        }, o1g9xm['wxinputFocus'] = function (tw8v4e) {
            var j35qs2 = gmof['inputElement']['target'];
            if (j35qs2 && !j35qs2['editable']) return;
            sq35j2['window']['wx']['offKeyboardConfirm'](), sq35j2['window']['wx']['offKeyboardInput'](), sq35j2['window']['wx']['showKeyboard']({
                'defaultValue': j35qs2['text'],
                'maxLength': j35qs2['maxChars'],
                'multiple': j35qs2['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (hunlq) {},
                'fail': function (w$atie) {}
            }), sq35j2['window']['wx']['onKeyboardConfirm'](function (u2qhn) {
                var sq5j23 = u2qhn ? u2qhn['value'] : '';
                j35qs2['text'] = sq5j23, j35qs2['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), sq35j2['window']['wx']['onKeyboardInput'](function (czbp) {
                var if_0ak = czbp ? czbp['value'] : '';
                if (!j35qs2['multiline']) {
                    if (if_0ak['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                j35qs2['text'] = if_0ak, j35qs2['event']('input');
            });
        }, o1g9xm['inputEnter'] = function () {
            gmof['inputElement']['target']['focus'] = ![];
        }, o1g9xm['wxinputblur'] = function () {
            o1g9xm['hideKeyboard']();
        }, o1g9xm['hideKeyboard'] = function () {
            sq35j2['window']['wx']['offKeyboardConfirm'](), sq35j2['window']['wx']['offKeyboardInput'](), sq35j2['window']['wx']['hideKeyboard']({
                'success': function (sjq315) {
                    console['log']('隐藏键盘');
                },
                'fail': function (rd7zb4) {
                    console['log']('隐藏键盘出错:' + (rd7zb4 ? rd7zb4['errMsg'] : ''));
                }
            });
        }, o1g9xm;
    }(),
        n5sq2j = function () {
        function lqu2() {}
        ewav$(lqu2, 'laya.wx.mini.MiniLoader');
        var uyl2nh = lqu2['prototype'];
        return uyl2nh['load'] = function (if0ka, itw$ae, $avewt, n5su, kieat$) {
            $avewt === void 0x0 && ($avewt = !![]), kieat$ === void 0x0 && (kieat$ = ![]);
            var c6d7b = this;
            c6d7b['_url'] = if0ka;
            if (if0ka['indexOf']('data:image') === 0x0) c6d7b['_type'] = itw$ae = 'image';else c6d7b['_type'] = itw$ae || (itw$ae = c6d7b['getTypeFromUrl'](if0ka));
            c6d7b['_cache'] = $avewt, c6d7b['_data'] = null;
            var hlyun = 'ascii';
            if (if0ka['indexOf']('.fnt') != -0x1) hlyun = 'utf8';else itw$ae == 'arraybuffer' && (hlyun = '');
            ;
            var sjq53 = x3s1['getFileExtension'](if0ka);
            if (lqu2['_fileTypeArr']['indexOf'](sjq53) != -0x1) sq35j2['EnvConfig']['load']['call'](this, if0ka, itw$ae, $avewt, n5su, kieat$);else {
                if (!twav$e['getFileInfo'](if0ka)) {
                    if (if0ka['indexOf']('layaNativeDir/') != -0x1) {
                        if (sq35j2['isZiYu']) {
                            var $awv = twav$e['ziyuFileData'][if0ka];
                            c6d7b['onLoaded']($awv);
                            return;
                        } else {
                            cosnole['log']('read read'), twav$e['read'](if0ka, hlyun, new pzcb6(lqu2, lqu2['onReadNativeCallBack'], [hlyun, if0ka, itw$ae, $avewt, n5su, kieat$, c6d7b]));
                            return;
                        }
                    }
                    if (l2qhun['rootPath'] == '') var q2s5j3 = if0ka;else q2s5j3 = if0ka['split'](l2qhun['rootPath'])[0x0];
                    if0ka['indexOf']('http://') != -0x1 || if0ka['indexOf']('https://') != -0x1 ? sq35j2['EnvConfig']['load']['call'](c6d7b, if0ka, itw$ae, $avewt, n5su, kieat$) : twav$e['readFile'](q2s5j3, hlyun, new pzcb6(lqu2, lqu2['onReadNativeCallBack'], [hlyun, if0ka, itw$ae, $avewt, n5su, kieat$, c6d7b]), if0ka);
                } else sq35j2['EnvConfig']['load']['call'](this, if0ka, itw$ae, $avewt, n5su, kieat$);
            }
        }, uyl2nh['resMgrLoad'] = function (jq1s3, nh2u5q, eatik, ox1m, $wtve, vdr48w, w8vet4) {
            eatik === void 0x0 && (eatik = 0x0), ox1m === void 0x0 && (ox1m = ![]), $wtve === void 0x0 && ($wtve = ![]), vdr48w === void 0x0 && (vdr48w = 0x0), w8vet4 === void 0x0 && (w8vet4 = 0x3), jq1s3['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', jq1s3), sq35j2['EnvConfig']['resMgrLoad'](jq1s3, (pzc7b, z8d74, k0fi_) => {
                lqu2['prototype']['resMgrLoadCallBack'](pzc7b, z8d74, k0fi_, nh2u5q);
            }, eatik, ox1m, $wtve, vdr48w, w8vet4);
        }, uyl2nh['resMgrLoadCallBack'] = function (_g90fm, o9xgfm, hynul, t4w8e) {
            console['log']('buff:::', _g90fm, hynul, twav$e['fileNativeDir'] + '///' + twav$e['fileListName']), t4w8e(_g90fm, o9xgfm, hynul);
        }, uyl2nh['clearRes'] = function (ki9_f0, k_9f0) {
            k_9f0 === void 0x0 && (k_9f0 = ![]);
            var ogm9f0 = this;
            ogm9f0['clearRes'](ki9_f0, k_9f0);
            var o9fg0 = twav$e['getFileInfo'](ki9_f0);
            if (o9fg0 && (ki9_f0['indexOf']('http://') != -0x1 || ki9_f0['indexOf']('https://') != -0x1)) {
                var bc6 = o9fg0['md5'],
                    _fki90 = twav$e['getFileNativePath'](bc6);
                twav$e['remove'](_fki90);
            }
        }, lqu2['onReadNativeCallBack'] = function (i_fak0, dvrz8, vrw84, x9fmog, z7bdr, fki0_a, j1xog, fo9g0m, w84evt) {
            x9fmog === void 0x0 && (x9fmog = !![]), fki0_a === void 0x0 && (fki0_a = ![]), fo9g0m === void 0x0 && (fo9g0m = 0x0);
            if (!fo9g0m) {
                var s1q5j3;
                if (vrw84 == 'json' || vrw84 == 'atlas') s1q5j3 = sq35j2['getJson'](w84evt['data']);else vrw84 == 'xml' ? s1q5j3 = x3s1['parseXMLFromString'](w84evt['data']) : s1q5j3 = w84evt['data'];
                j1xog['onLoaded'](s1q5j3), !sq35j2['isZiYu'] && sq35j2['isPosMsgYu'] && vrw84 != 'arraybuffer' && wx['postMessage']({
                    'url': dvrz8,
                    'data': s1q5j3,
                    'isLoad': !![]
                });
            } else fo9g0m == 0x1 && sq35j2['EnvConfig']['load']['call'](j1xog, dvrz8, vrw84, x9fmog, z7bdr, fki0_a);
        }, rw8tv(lqu2, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), lqu2;
    }(),
        twav$e = function (gj31xo) {
        function iwt$() {
            iwt$['__super']['call'](this);
            ;
        }
        return ewav$(iwt$, 'laya.wx.mini.MiniFileMgr', gj31xo), iwt$['isLoadFile'] = function (kf_i9) {
            return iwt$['_fileTypeArr']['indexOf'](kf_i9) != -0x1 ? !![] : ![];
        }, iwt$['getFileInfo'] = function (m09fg) {
            var mg90of = m09fg['split']('?')[0x0],
                pzcb67 = iwt$['filesListObj'][mg90of];
            if (pzcb67 == null) return null;else return pzcb67;
            return null;
        }, iwt$['onFileUpdate'] = function (dwrv84, xs15) {
            var pb6c7z = dwrv84['split']('/'),
                ofmxg9 = pb6c7z[pb6c7z['length'] - 0x1],
                m19ox = iwt$['getFileInfo'](xs15);
            if (m19ox == null) iwt$['onSaveFile'](xs15, ofmxg9);else {
                if (m19ox['readyUrl'] != xs15) iwt$['remove'](ofmxg9, xs15);
            }
        }, iwt$['exits'] = function (ktei, iw$et) {
            var ogm9fx = iwt$['getFileNativePath'](ktei);
            iwt$['fs']['getFileInfo']({
                'filePath': ogm9fx,
                'success': function (fo) {
                    iw$et != null && iw$et['runWith']([0x0, fo]);
                },
                'fail': function (d874z) {
                    iw$et != null && iw$et['runWith']([0x1, d874z]);
                }
            });
        }, iwt$['read'] = function (uq5s2, zd4r87, kf09_, r7dz) {
            zd4r87 === void 0x0 && (zd4r87 = 'ascill'), r7dz === void 0x0 && (r7dz = '');
            var zb7rcd;
            r7dz != '' ? zb7rcd = iwt$['getFileNativePath'](uq5s2) : zb7rcd = uq5s2, iwt$['fs']['readFile']({
                'filePath': zb7rcd,
                'encoding': zd4r87,
                'success': function (we$vt) {
                    kf09_ != null && kf09_['runWith']([0x0, we$vt]);
                },
                'fail': function (nqu2h5) {
                    if (nqu2h5 && r7dz != '') iwt$['down'](r7dz, zd4r87, kf09_, r7dz);else kf09_ != null && kf09_['runWith']([0x1]);
                }
            });
        }, iwt$['readNativeFile'] = function (mgf0o9, jq5n) {
            iwt$['fs']['readFile']({
                'filePath': mgf0o9,
                'encoding': '',
                'success': function (et8$vw) {
                    jq5n != null && jq5n['runWith']([0x0]);
                },
                'fail': function (r8vz4d) {
                    jq5n != null && jq5n['runWith']([0x1]);
                }
            });
        }, iwt$['down'] = function (rd7z4b, etvw$a, js25q3, uq25hn) {
            etvw$a === void 0x0 && (etvw$a = 'ascill'), uq25hn === void 0x0 && (uq25hn = '');
            var zcd7 = iwt$['getFileNativePath'](uq25hn),
                xs1jo3 = iwt$['wxdown']({
                'url': rd7z4b,
                'filePath': zcd7,
                'success': function (mofg) {
                    if (mofg['statusCode'] === 0xc8) iwt$['readFile'](mofg['filePath'], etvw$a, js25q3, uq25hn);
                },
                'fail': function (k_aif) {
                    js25q3 != null && js25q3['runWith']([0x1, k_aif]);
                }
            });
            xs1jo3['onProgressUpdate'](function ($kae_) {
                js25q3 != null && js25q3['runWith']([0x2, $kae_['progress']]);
            });
        }, iwt$['readFile'] = function (gxo31m, pczb76, ki_0, d4vzr8) {
            pczb76 === void 0x0 && (pczb76 = 'ascill'), d4vzr8 === void 0x0 && (d4vzr8 = ''), iwt$['fs']['readFile']({
                'filePath': gxo31m,
                'encoding': pczb76,
                'success': function (rzbdc7) {
                    if (gxo31m['indexOf']('http://') != -0x1 || gxo31m['indexOf']('https://') != -0x1) iwt$['onFileUpdate'](gxo31m, d4vzr8);
                    ki_0 != null && ki_0['runWith']([0x0, rzbdc7]);
                },
                'fail': function (z7dr4) {
                    if (z7dr4) ki_0 != null && ki_0['runWith']([0x1, z7dr4]);
                }
            });
        }, iwt$['downImg'] = function (kei, $t8v, lnhy2) {
            lnhy2 === void 0x0 && (lnhy2 = '');
            var _0m9gf = iwt$['wxdown']({
                'url': kei,
                'success': function (iatk$) {
                    iatk$['statusCode'] === 0xc8 && iwt$['copyFile'](iatk$['tempFilePath'], lnhy2, $t8v);
                },
                'fail': function (m_f0k9) {
                    $t8v != null && $t8v['runWith']([0x1, m_f0k9]);
                }
            });
        }, iwt$['copyFile'] = function (j5x3s1, zb6, tvew8) {
            var $ieta = j5x3s1['split']('/'),
                rdb7 = $ieta[$ieta['length'] - 0x1],
                t8we4v = zb6['split']('?')[0x0],
                zvd48 = iwt$['getFileInfo'](zb6),
                nlhq2 = iwt$['getFileNativePath'](rdb7);
            iwt$['fs']['copyFile']({
                'srcPath': j5x3s1,
                'destPath': nlhq2,
                'success': function (dbz7) {
                    if (!zvd48) iwt$['onSaveFile'](zb6, rdb7), tvew8 != null && tvew8['runWith']([0x0]);else {
                        if (zvd48['readyUrl'] != zb6) iwt$['remove'](rdb7, zb6, tvew8);
                    }
                },
                'fail': function ($vawt) {
                    tvew8 != null && tvew8['runWith']([0x1, $vawt]);
                }
            });
        }, iwt$['getFileNativePath'] = function (dv8) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + dv8;
        }, iwt$['remove'] = function (ojgx13, i0ak_$, vt8we) {
            i0ak_$ === void 0x0 && (i0ak_$ = '');
            var cbp7z = iwt$['getFileInfo'](i0ak_$),
                qus52 = iwt$['getFileNativePath'](cbp7z['md5']);
            qu2s['loader']['clearRes'](cbp7z['readyUrl']), iwt$['fs']['unlink']({
                'filePath': qus52,
                'success': function (nsqj52) {
                    if (i0ak_$ != '') iwt$['onSaveFile'](i0ak_$, ojgx13);
                    vt8we != null && vt8we['runWith']([0x0]);
                },
                'fail': function (n25qu) {}
            });
        }, iwt$['onSaveFile'] = function (r84wt, if0ka_) {
            var eat$ = r84wt['split']('?')[0x0];
            iwt$['filesListObj'][eat$] = {
                'md5': if0ka_,
                'readyUrl': r84wt
            }, iwt$['fs']['writeFile']({
                'filePath': iwt$['fileNativeDir'] + '/' + iwt$['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](iwt$['filesListObj']),
                'success': function (rz4db) {
                    console['log']('写入测试测试成功：', rz4db);
                },
                'fail': function (d4zv8) {
                    console['log']('写入测试测试失败：', d4zv8);
                }
            });
        }, iwt$['existDir'] = function (twv48e, _i$ke) {
            iwt$['fs']['mkdir']({
                'dirPath': twv48e,
                'success': function (quh2ln) {
                    _i$ke != null && _i$ke['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (_$0ik) {
                    if (_$0ik['errMsg']['indexOf']('file already exists') != -0x1) iwt$['readSync'](iwt$['fileListName'], 'utf8', _i$ke);else _i$ke != null && _i$ke['runWith']([0x1, _$0ik]);
                }
            });
        }, iwt$['readSync'] = function (mgox1, n52jqs, _afk0i, o9gx1) {
            n52jqs === void 0x0 && (n52jqs = 'ascill'), o9gx1 === void 0x0 && (o9gx1 = '');
            var mgof9x = iwt$['getFileNativePath'](mgox1),
                $ev8w;
            try {
                $ev8w = iwt$['fs']['readFileSync'](mgof9x), _afk0i != null && _afk0i['runWith']([0x0, { 'data': $ev8w }]);
            } catch (zd47br) {
                _afk0i != null && _afk0i['runWith']([0x1]);
            }
        }, iwt$['readCache'] = function () {}, iwt$['writeCache'] = function (cbd67z) {
            var o1gxj = readyUrl['split']('?')[0x0];
            iwt$['filesListObj'][o1gxj] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, iwt$['fs']['writeFile']({
                'filePath': iwt$['fileNativeDir'] + '/' + iwt$['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](iwt$['filesListObj']),
                'success': function (g1m3x) {},
                'fail': function (ynh2ul) {}
            });
        }, iwt$['setNativeFileDir'] = function (bdrz) {
            iwt$['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + bdrz;
        }, iwt$['filesListObj'] = {}, iwt$['fileNativeDir'] = null, iwt$['fileListName'] = 'layaairfiles.txt', iwt$['ziyuFileData'] = {}, rw8tv(iwt$, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), iwt$;
    }(ve8),
        mf0k9_ = function (d7z4b) {
        function z478dr() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], z478dr['__super']['call'](this), this['_sound'] = z478dr['_createSound'](), this['_chanell'] = new q52snu(this['_sound']);
        }
        ewav$(z478dr, 'laya.wx.mini.MiniSound', d7z4b);
        var $ka_e = z478dr['prototype'];
        return $ka_e['load'] = function (eka$i) {
            var d7c6z = this;
            eka$i = l2qhun['formatURL'](eka$i), this['url'] = eka$i;
            if (z478dr['_audioCache'][eka$i]) {
                this['event']('complete');
                return;
            }
            function _fkia0() {
                if (z478dr['_null'] != undefined) d7c6z['_sound']['onCanplay'](z478dr['_null']), d7c6z['_sound']['onError'](z478dr['_null']);else try {
                    d7c6z['_sound']['onCanplay'](null), d7c6z['_sound']['onError'](null), z478dr['_null'] = null;
                } catch (nhyu) {
                    console['warn']('[wxmini] _clearSound:' + nhyu), d7c6z['_sound']['onCanplay'](z7bdc6), d7c6z['_sound']['onError'](z7bdc6), z478dr['_null'] = z7bdc6;
                }
            }
            function vetw84() {
                _mf9g0['loaded'] = !![], _mf9g0['event']('complete'), z478dr['_audioCache'][_mf9g0['url']] = _mf9g0;
            }
            function dvr4(dz7c6) {
                console['error']('errCode=' + dz7c6['errCode'] + '  errMsg=' + dz7c6['errMsg']), _mf9g0['event']('error');
            }
            function z7bdc6() {}
            this['_sound']['onCanplay'](vetw84), this['_sound']['onError'](dvr4), this['_sound']['src'] = eka$i;
            var _mf9g0 = this;
        }, $ka_e['play'] = function (keat$i, _0a$ki) {
            keat$i === void 0x0 && (keat$i = 0x0), _0a$ki === void 0x0 && (_0a$ki = 0x0);
            var a_if0k, s3jq5;
            if (this['url'] == t4vr['_tMusic']) {
                if (!z478dr['_musicAudio']) z478dr['_musicAudio'] = this['_sound'];
                a_if0k = z478dr['_musicAudio'], s3jq5 = this['_chanell'];
            } else a_if0k = this['_sound'], s3jq5 = this['_chanell'];
            return a_if0k['src'] = this['url'], a_if0k['startTime'] = 0x0, s3jq5['isStopped'] && (s3jq5['url'] = this['url'], s3jq5['loops'] = _0a$ki, s3jq5['startTime'] = keat$i, s3jq5['play'](), t4vr['addChannel'](s3jq5)), s3jq5;
        }, $ka_e['dispose'] = function () {
            var i0a$_ = z478dr['_audioCache'][this['url']];
            i0a$_ && (i0a$_['src'] = '', delete z478dr['_audioCache'][this['url']]);
        }, bpcz7(0x0, $ka_e, 'duration', function () {
            return this['_sound']['duration'];
        }), z478dr['_createSound'] = function () {
            z478dr['_id']++;
            var t4vwe8 = sq35j2['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return t4vwe8;
        }, z478dr['_musicAudio'] = null, z478dr['_id'] = 0x0, z478dr['_audioCache'] = {}, z478dr['_null'] = undefined, z478dr;
    }(ve8),
        q52snu = function (_k9f0) {
        function vwe$t(sq35j) {
            this['_audio'] = null, this['_onEnd'] = null, vwe$t['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = sq35j, this['_onEnd'] = x3s1['bind'](this['__onEnd'], this), sq35j['onEnded'](this['_onEnd']);
        }
        ewav$(vwe$t, 'laya.wx.mini.MiniSoundChannel', _k9f0);
        var sox3j1 = vwe$t['prototype'];
        return sox3j1['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (qu2s['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, sox3j1['__onNull'] = function () {}, sox3j1['play'] = function () {
            this['isStopped'] = ![], t4vr['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, sox3j1['stop'] = function () {
            this['isStopped'] = !![], t4vr['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, sox3j1['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, sox3j1['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], t4vr['addChannel'](this), this['_audio']['play']();
        }, bpcz7(0x0, sox3j1, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), bpcz7(0x0, sox3j1, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), bpcz7(0x0, sox3j1, 'volume', function () {
            return 0x1;
        }, function ($wva) {}), vwe$t['_null'] = undefined, vwe$t;
    }(qj1s3),
        ie$aw = function () {
        function xg3m() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = sq35j2['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        ewav$(xg3m, 'laya.wx.mini.MiniVideo');
        var luqh = xg3m['prototype'];
        return luqh['on'] = function (vw48dr, t$ea, usn2q) {
            if (vw48dr == 'loadedmetadata') this['onPlayFunc'] = usn2q['bind'](t$ea), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else vw48dr == 'ended' && (this['onEndedFunC'] = usn2q['bind'](t$ea), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, luqh['onTimeUpdateFunc'] = function (gomx91) {
            this['position'] = gomx91['position'], this['_duration'] = gomx91['duration'];
        }, luqh['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, luqh['onended'] = function (s5q, j3x1so) {
            this['onEndedFunC'] = j3x1so['bind'](s5q), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, luqh['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, luqh['off'] = function (mgo31x, _$ai0, rz7dbc) {
            if (mgo31x == 'loadedmetadata') this['onPlayFunc'] = rz7dbc['bind'](_$ai0), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else mgo31x == 'ended' && (this['onEndedFunC'] = rz7dbc['bind'](_$ai0), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, luqh['load'] = function (xmg13) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = xmg13;
        }, luqh['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, luqh['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, luqh['size'] = function (jgo1x, _if90k) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = jgo1x, this['videoElement']['height'] = _if90k;
        }, luqh['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, luqh['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, bpcz7(0x0, luqh, 'duration', function () {
            return this['_duration'];
        }), bpcz7(0x0, luqh, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (rw4tv8) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = rw4tv8;
        }), bpcz7(0x0, luqh, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), bpcz7(0x0, luqh, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), bpcz7(0x0, luqh, 'ended', function () {
            return this['videoend'];
        }), bpcz7(0x0, luqh, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (h25un) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = h25un;
        }), bpcz7(0x0, luqh, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (d47rz8) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = d47rz8;
        }), bpcz7(0x0, luqh, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (qusn5) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = qusn5;
        }), bpcz7(0x0, luqh, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), bpcz7(0x0, luqh, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (jogx) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = jogx;
        }), bpcz7(0x0, luqh, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (zd48v) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = zd48v;
        }), bpcz7(0x0, luqh, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), bpcz7(0x0, luqh, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (yh2u) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = yh2u;
        }), bpcz7(0x0, luqh, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (iaw$) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = iaw$;
        }), bpcz7(0x0, luqh, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (czb7d) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = czb7d;
        }), xg3m;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var bdc67 in Laya) {
        var dzr8v = Laya[bdc67];
        dzr8v && dzr8v['__isclass'] && (exports[bdc67] = dzr8v);
    }
});