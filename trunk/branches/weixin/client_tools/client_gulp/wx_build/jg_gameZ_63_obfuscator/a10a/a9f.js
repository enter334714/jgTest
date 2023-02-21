var f = wx.$B;
(function (window, document, aomuqj) {
    var k74stf = aomuqj['un'],
        uq1lo = aomuqj['uns'],
        d2gbv = aomuqj['static'],
        gfbv2d = aomuqj['class'],
        ahy9 = aomuqj['getset'],
        yh0m = aomuqj['__newvec'],
        h230vg = laya['utils']['Browser'],
        gbd2kf = laya['events']['Event'],
        swr4t = laya['events']['EventDispatcher'],
        a9y6h = laya['resource']['HTMLImage'],
        txwr = laya['utils']['Handler'],
        ix_$np = laya['display']['Input'],
        umay = laya['net']['Loader'],
        sfd7 = laya['maths']['Matrix'],
        hv063 = laya['renders']['Render'],
        $tr8x = laya['utils']['RunDriver'],
        ft74sk = laya['media']['Sound'],
        d2gbk = laya['media']['SoundChannel'],
        wrt7$8 = laya['media']['SoundManager'],
        qze1lo = laya['display']['Stage'],
        tr4w = laya['net']['URL'],
        oaymu = laya['utils']['Utils'],
        wr$xi8 = function () {
        function a1qujo() {}
        return gfbv2d(a1qujo, 'laya.wx.mini.MiniAdpter'), a1qujo['getJson'] = function (jy6uma) {
            return JSON['parse'](jy6uma);
        }, a1qujo['init'] = function (dbg2v3, uoqja1) {
            dbg2v3 === void 0x0 && (dbg2v3 = ![]), uoqja1 === void 0x0 && (uoqja1 = ![]);
            if (a1qujo['_inited']) return;
            a1qujo['window'] = window;
            if (a1qujo['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            a1qujo['_inited'] = !![], a1qujo['isZiYu'] = uoqja1, a1qujo['isPosMsgYu'] = dbg2v3, a1qujo['EnvConfig'] = {}, !a1qujo['isZiYu'] && (o1qlu['setNativeFileDir']('/layaairGame'), o1qlu['existDir'](o1qlu['fileNativeDir'], txwr['create'](a1qujo, a1qujo['onMkdirCallBack']))), a1qujo['window']['focus'] = function () {}, aomuqj['getUrlPath'] = function () {}, a1qujo['window']['logtime'] = function (bd4fg) {}, a1qujo['window']['alertTimeLog'] = function (x$w8ip) {}, a1qujo['window']['resetShareInfo'] = function () {}, a1qujo['window']['CanvasRenderingContext2D'] = function () {}, a1qujo['window']['CanvasRenderingContext2D']['prototype'] = a1qujo['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], a1qujo['window']['document']['body']['appendChild'] = function () {}, a1qujo['EnvConfig']['pixelRatioInt'] = 0x0, $tr8x['getPixelRatio'] = a1qujo['pixelRatio'], a1qujo['_preCreateElement'] = h230vg['createElement'], h230vg['createElement'] = a1qujo['createElement'], $tr8x['createShaderCondition'] = a1qujo['createShaderCondition'], oaymu['parseXMLFromString'] = a1qujo['parseXMLFromString'], ix_$np['_createInputElement'] = kbgf2['_createInputElement'], a1qujo['EnvConfig']['load'] = umay['prototype']['load'], umay['prototype']['load'] = ftks47['prototype']['load'], a1qujo['isZiYu'] && dbg2v3 && wx['onMessage'](function (i_x$) {
                i_x$['isLoad'] && (o1qlu['ziyuFileData'][i_x$['url']] = i_x$['data']);
            });
        }, a1qujo['onMkdirCallBack'] = function (oyu, l1ez5q) {
            if (!oyu) o1qlu['filesListObj'] = JSON['parse'](l1ez5q['data']);
        }, a1qujo['pixelRatio'] = function () {
            if (!a1qujo['EnvConfig']['pixelRatioInt']) try {
                var r$8tw = wx['getSystemInfoSync']();
                return a1qujo['EnvConfig']['pixelRatioInt'] = r$8tw['pixelRatio'], r$8tw = r$8tw, r$8tw['pixelRatio'];
            } catch (q1zle) {}
            return a1qujo['EnvConfig']['pixelRatioInt'];
        }, a1qujo['createElement'] = function (g2) {
            if (g2 == 'canvas') {
                var u1jq;
                return a1qujo['idx'] == 0x1 ? a1qujo['isZiYu'] ? (u1jq = sharedCanvas, u1jq['style'] = {}) : u1jq = window['canvas'] : u1jq = window['wx']['createCanvas'](), a1qujo['idx']++, u1jq;
            } else {
                if (g2 == 'textarea' || g2 == 'input') return a1qujo['onCreateInput'](g2);else {
                    if (g2 == 'div') {
                        var jolqz1 = a1qujo['_preCreateElement'](g2);
                        return jolqz1['contains'] = function (a6yujm) {
                            return null;
                        }, jolqz1['removeChild'] = function (ghv230) {}, jolqz1;
                    } else return a1qujo['_preCreateElement'](g2);
                }
            }
        }, a1qujo['onCreateInput'] = function (lj1q) {
            var e15lz = a1qujo['_preCreateElement'](lj1q);
            return e15lz['focus'] = kbgf2['wxinputFocus'], e15lz['blur'] = kbgf2['wxinputblur'], e15lz['style'] = {}, e15lz['value'] = 0x0, e15lz['parentElement'] = {}, e15lz['placeholder'] = {}, e15lz['type'] = {}, e15lz['setColor'] = function (yh963) {}, e15lz['setType'] = function (ri8xw$) {}, e15lz['setFontFace'] = function (qez1l5) {}, e15lz['addEventListener'] = function (wsrt47) {}, e15lz['contains'] = function (j1ulo) {
                return null;
            }, e15lz['removeChild'] = function (r7tw4s) {}, e15lz;
        }, a1qujo['createShaderCondition'] = function (h06v) {
            var kr7s = this,
                leqz1o = function () {
                var $8irw = h06v;
                return kr7s[h06v['replace']('this.', '')];
            };
            return leqz1o;
        }, a1qujo['EnvConfig'] = null, a1qujo['window'] = null, a1qujo['_preCreateElement'] = null, a1qujo['_inited'] = ![], a1qujo['wxRequest'] = null, a1qujo['systemInfo'] = null, a1qujo['version'] = '0.0.1', a1qujo['isZiYu'] = ![], a1qujo['isPosMsgYu'] = ![], a1qujo['parseXMLFromString'] = function (v0h23g) {
            var pw8i$x, ix8$wp;
            v0h23g = v0h23g['replace'](/>\s+</g, '><');
            try {
                pw8i$x = new window['Parser']['DOMParser']()['parseFromString'](v0h23g, 'text/xml');
            } catch (v32gdb) {
                throw '需要引入xml解析库文件';
            }
            return pw8i$x;
        }, a1qujo['idx'] = 0x1, a1qujo;
    }(),
        _8xp = function () {
        function lju1qo() {}
        gfbv2d(lju1qo, 'laya.wx.mini.MiniImage');
        var np_ix$ = lju1qo['prototype'];
        return np_ix$['_loadImage'] = function (g2vfb) {
            var lo1e = this,
                $8_ixp = ![];
            g2vfb['indexOf']('layaNativeDir/') == -0x1 && ($8_ixp = !![], g2vfb = tr4w['formatURL'](g2vfb));
            if (!o1qlu['getFileInfo'](g2vfb)) {
                if (g2vfb['indexOf']('http://') != -0x1 || g2vfb['indexOf']('https://') != -0x1) o1qlu['downImg'](g2vfb, new txwr(lju1qo, lju1qo['onDownImgCallBack'], [g2vfb, lo1e]), g2vfb);else lju1qo['onCreateImage'](g2vfb, lo1e, !![]);
            } else lju1qo['onCreateImage'](g2vfb, lo1e, !$8_ixp);
        }, lju1qo['onDownImgCallBack'] = function (bgdk, fkdsb, h60my9) {
            if (!h60my9) lju1qo['onCreateImage'](bgdk, fkdsb);else fkdsb['onError'](null);
        }, lju1qo['onCreateImage'] = function (ql1juo, mjuaoy, g3b0v) {
            g3b0v === void 0x0 && (g3b0v = ![]);
            var hvg023;
            if (!g3b0v) {
                var uq1oj = o1qlu['getFileInfo'](ql1juo),
                    m9ua = uq1oj['md5'];
                hvg023 = o1qlu['getFileNativePath'](m9ua);
            } else hvg023 = ql1juo;
            if (mjuaoy['imgCache'] == null) mjuaoy['imgCache'] = {};
            var y6juam;
            function sk4tf() {
                y6juam['onload'] = null, y6juam['onerror'] = null, delete mjuaoy['imgCache'][ql1juo];
            }
            ;
            var kd7s4 = function () {
                sk4tf(), mjuaoy['onLoaded'](y6juam);
            },
                wpx8$ = function () {
                sk4tf(), mjuaoy['event']('error', 'Load image failed');
            };
            mjuaoy['_type'] == 'nativeimage' ? (y6juam = new h230vg['window']['Image'](), y6juam['crossOrigin'] = '', y6juam['onload'] = kd7s4, y6juam['onerror'] = wpx8$, y6juam['src'] = hvg023, mjuaoy['imgCache'][ql1juo] = y6juam) : new a9y6h['create'](hvg023, {
                'onload': kd7s4,
                'onerror': wpx8$,
                'onCreate': function (r78w$t) {
                    y6juam = r78w$t, mjuaoy['imgCache'][ql1juo] = r78w$t;
                }
            });
        }, lju1qo;
    }(),
        kbgf2 = function () {
        function ip$xw8() {}
        return gfbv2d(ip$xw8, 'laya.wx.mini.MiniInput'), ip$xw8['_createInputElement'] = function () {
            ix_$np['_initInput'](ix_$np['area'] = h230vg['createElement']('textarea')), ix_$np['_initInput'](ix_$np['input'] = h230vg['createElement']('input')), ix_$np['inputContainer'] = h230vg['createElement']('div'), ix_$np['inputContainer']['style']['position'] = 'absolute', ix_$np['inputContainer']['style']['zIndex'] = 0x186a0, h230vg['container']['appendChild'](ix_$np['inputContainer']), ix_$np['inputContainer']['setPos'] = function (ujaoqm, b2gfdv) {
                ix_$np['inputContainer']['style']['left'] = ujaoqm + 'px', ix_$np['inputContainer']['style']['top'] = b2gfdv + 'px';
            }, aomuqj['stage']['on']('resize', null, ip$xw8['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (gvh32) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), wrt7$8['_soundClass'] = dgk2f, wrt7$8['_musicClass'] = dgk2f, window['_videoClass'] = $8rxwi;
        }, ip$xw8['_onStageResize'] = function () {
            var t7wr = aomuqj['stage']['_canvasTransform']['identity']();
            t7wr['scale'](h230vg['width'] / hv063['canvas']['width'] / $tr8x['getPixelRatio'](), h230vg['height'] / hv063['canvas']['height'] / $tr8x['getPixelRatio']());
        }, ip$xw8['wxinputFocus'] = function (w7t8$r) {
            var b3v2d = ix_$np['inputElement']['target'];
            if (b3v2d && !b3v2d['editable']) return;
            wr$xi8['window']['wx']['offKeyboardConfirm'](), wr$xi8['window']['wx']['offKeyboardInput'](), wr$xi8['window']['wx']['showKeyboard']({
                'defaultValue': b3v2d['text'],
                'maxLength': b3v2d['maxChars'],
                'multiple': b3v2d['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (fs4kt) {},
                'fail': function (p8xiw$) {}
            }), wr$xi8['window']['wx']['onKeyboardConfirm'](function ($r7tw) {
                var y9mha6 = $r7tw ? $r7tw['value'] : '';
                b3v2d['text'] = y9mha6, b3v2d['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), wr$xi8['window']['wx']['onKeyboardInput'](function (g4kdf) {
                var s4fbkd = g4kdf ? g4kdf['value'] : '';
                if (!b3v2d['multiline']) {
                    if (s4fbkd['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                b3v2d['text'] = s4fbkd, b3v2d['event']('input');
            });
        }, ip$xw8['inputEnter'] = function () {
            ix_$np['inputElement']['target']['focus'] = ![];
        }, ip$xw8['wxinputblur'] = function () {
            ip$xw8['hideKeyboard']();
        }, ip$xw8['hideKeyboard'] = function () {
            wr$xi8['window']['wx']['offKeyboardConfirm'](), wr$xi8['window']['wx']['offKeyboardInput'](), wr$xi8['window']['wx']['hideKeyboard']({
                'success': function (kfdb) {
                    console['log']('隐藏键盘');
                },
                'fail': function (vg0) {
                    console['log']('隐藏键盘出错:' + (vg0 ? vg0['errMsg'] : ''));
                }
            });
        }, ip$xw8;
    }(),
        ftks47 = function () {
        function dgbvf2() {}
        gfbv2d(dgbvf2, 'laya.wx.mini.MiniLoader');
        var gfbd2 = dgbvf2['prototype'];
        return gfbd2['load'] = function (h0v963, uja1qo, rs78t, $ixp_n, a9mu6y) {
            rs78t === void 0x0 && (rs78t = !![]), a9mu6y === void 0x0 && (a9mu6y = ![]);
            var r$xiw = this;
            r$xiw['_url'] = h0v963;
            if (h0v963['indexOf']('data:image') === 0x0) r$xiw['_type'] = uja1qo = 'image';else r$xiw['_type'] = uja1qo || (uja1qo = r$xiw['getTypeFromUrl'](h0v963));
            r$xiw['_cache'] = rs78t, r$xiw['_data'] = null;
            var np_ix = 'ascii';
            if (h0v963['indexOf']('.fnt') != -0x1) np_ix = 'utf8';else uja1qo == 'arraybuffer' && (np_ix = '');
            ;
            var h3v60 = oaymu['getFileExtension'](h0v963);
            if (dgbvf2['_fileTypeArr']['indexOf'](h3v60) != -0x1) wr$xi8['EnvConfig']['load']['call'](this, h0v963, uja1qo, rs78t, $ixp_n, a9mu6y);else {
                if (!o1qlu['getFileInfo'](h0v963)) {
                    if (h0v963['indexOf']('layaNativeDir/') != -0x1) {
                        if (wr$xi8['isZiYu']) {
                            var sdfk4b = o1qlu['ziyuFileData'][h0v963];
                            r$xiw['onLoaded'](sdfk4b);
                            return;
                        } else {
                            cosnole['log']('read read'), o1qlu['read'](h0v963, np_ix, new txwr(dgbvf2, dgbvf2['onReadNativeCallBack'], [np_ix, h0v963, uja1qo, rs78t, $ixp_n, a9mu6y, r$xiw]));
                            return;
                        }
                    }
                    if (tr4w['rootPath'] == '') var rk4st = h0v963;else rk4st = h0v963['split'](tr4w['rootPath'])[0x0];
                    h0v963['indexOf']('http://') != -0x1 || h0v963['indexOf']('https://') != -0x1 ? wr$xi8['EnvConfig']['load']['call'](r$xiw, h0v963, uja1qo, rs78t, $ixp_n, a9mu6y) : o1qlu['readFile'](rk4st, np_ix, new txwr(dgbvf2, dgbvf2['onReadNativeCallBack'], [np_ix, h0v963, uja1qo, rs78t, $ixp_n, a9mu6y, r$xiw]), h0v963);
                } else wr$xi8['EnvConfig']['load']['call'](this, h0v963, uja1qo, rs78t, $ixp_n, a9mu6y);
            }
        }, gfbd2['resMgrLoad'] = function (mujoqa, j1qulo, uaoj1q, v230gb, l1ojz, r8w, lojq) {
            uaoj1q === void 0x0 && (uaoj1q = 0x0), v230gb === void 0x0 && (v230gb = ![]), l1ojz === void 0x0 && (l1ojz = ![]), r8w === void 0x0 && (r8w = 0x0), lojq === void 0x0 && (lojq = 0x3), mujoqa['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', mujoqa), wr$xi8['EnvConfig']['resMgrLoad'](mujoqa, (p$nxi, wrs47, pxi$) => {
                dgbvf2['prototype']['resMgrLoadCallBack'](p$nxi, wrs47, pxi$, j1qulo);
            }, uaoj1q, v230gb, l1ojz, r8w, lojq);
        }, gfbd2['resMgrLoadCallBack'] = function (zq1e5l, g23vh0, s74rkt, myjau6) {
            console['log']('buff:::', zq1e5l, s74rkt, o1qlu['fileNativeDir'] + '///' + o1qlu['fileListName']), myjau6(zq1e5l, g23vh0, s74rkt);
        }, gfbd2['clearRes'] = function (db2kfg, wtr$) {
            wtr$ === void 0x0 && (wtr$ = ![]);
            var d7ks4f = this;
            d7ks4f['clearRes'](db2kfg, wtr$);
            var oumqa = o1qlu['getFileInfo'](db2kfg);
            if (oumqa && (db2kfg['indexOf']('http://') != -0x1 || db2kfg['indexOf']('https://') != -0x1)) {
                var _nipx$ = oumqa['md5'],
                    s7k4t = o1qlu['getFileNativePath'](_nipx$);
                o1qlu['remove'](s7k4t);
            }
        }, dgbvf2['onReadNativeCallBack'] = function (ipn$, gf2kdb, skf74d, mouya, g20vb, r8wt7s, zoeql, amuq, i8wrx) {
            mouya === void 0x0 && (mouya = !![]), r8wt7s === void 0x0 && (r8wt7s = ![]), amuq === void 0x0 && (amuq = 0x0);
            if (!amuq) {
                var aou1qj;
                if (skf74d == 'json' || skf74d == 'atlas') aou1qj = wr$xi8['getJson'](i8wrx['data']);else skf74d == 'xml' ? aou1qj = oaymu['parseXMLFromString'](i8wrx['data']) : aou1qj = i8wrx['data'];
                zoeql['onLoaded'](aou1qj), !wr$xi8['isZiYu'] && wr$xi8['isPosMsgYu'] && skf74d != 'arraybuffer' && wx['postMessage']({
                    'url': gf2kdb,
                    'data': aou1qj,
                    'isLoad': !![]
                });
            } else amuq == 0x1 && wr$xi8['EnvConfig']['load']['call'](zoeql, gf2kdb, skf74d, mouya, g20vb, r8wt7s);
        }, d2gbv(dgbvf2, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), dgbvf2;
    }(),
        o1qlu = function (fgk4bd) {
        function bskf() {
            bskf['__super']['call'](this);
            ;
        }
        return gfbv2d(bskf, 'laya.wx.mini.MiniFileMgr', fgk4bd), bskf['isLoadFile'] = function (sdk) {
            return bskf['_fileTypeArr']['indexOf'](sdk) != -0x1 ? !![] : ![];
        }, bskf['getFileInfo'] = function (wr8i) {
            var j6aumy = wr8i['split']('?')[0x0],
                k47s = bskf['filesListObj'][j6aumy];
            if (k47s == null) return null;else return k47s;
            return null;
        }, bskf['onFileUpdate'] = function (df74s, $7rtw8) {
            var dgbfv2 = df74s['split']('/'),
                $n_ix = dgbfv2[dgbfv2['length'] - 0x1],
                eoz1l = bskf['getFileInfo']($7rtw8);
            if (eoz1l == null) bskf['onSaveFile']($7rtw8, $n_ix);else {
                if (eoz1l['readyUrl'] != $7rtw8) bskf['remove']($n_ix, $7rtw8);
            }
        }, bskf['exits'] = function (b0v, n_i$px) {
            var m6ju = bskf['getFileNativePath'](b0v);
            bskf['fs']['getFileInfo']({
                'filePath': m6ju,
                'success': function (qaumjo) {
                    n_i$px != null && n_i$px['runWith']([0x0, qaumjo]);
                },
                'fail': function (z1q5) {
                    n_i$px != null && n_i$px['runWith']([0x1, z1q5]);
                }
            });
        }, bskf['read'] = function (ksf7t, kr7t, ozqj1l, y390h6) {
            kr7t === void 0x0 && (kr7t = 'ascill'), y390h6 === void 0x0 && (y390h6 = '');
            var k4ts7r;
            y390h6 != '' ? k4ts7r = bskf['getFileNativePath'](ksf7t) : k4ts7r = ksf7t, bskf['fs']['readFile']({
                'filePath': k4ts7r,
                'encoding': kr7t,
                'success': function (oelq1) {
                    ozqj1l != null && ozqj1l['runWith']([0x0, oelq1]);
                },
                'fail': function (kt74r) {
                    if (kt74r && y390h6 != '') bskf['down'](y390h6, kr7t, ozqj1l, y390h6);else ozqj1l != null && ozqj1l['runWith']([0x1]);
                }
            });
        }, bskf['readNativeFile'] = function (fvgb2d, _$xp) {
            bskf['fs']['readFile']({
                'filePath': fvgb2d,
                'encoding': '',
                'success': function (k4dbf) {
                    _$xp != null && _$xp['runWith']([0x0]);
                },
                'fail': function (fk74st) {
                    _$xp != null && _$xp['runWith']([0x1]);
                }
            });
        }, bskf['down'] = function (kdb4fg, qau1jo, wtr47s, ajy6mu) {
            qau1jo === void 0x0 && (qau1jo = 'ascill'), ajy6mu === void 0x0 && (ajy6mu = '');
            var $8rtx = bskf['getFileNativePath'](ajy6mu),
                aumyo = bskf['wxdown']({
                'url': kdb4fg,
                'filePath': $8rtx,
                'success': function (a1qouj) {
                    if (a1qouj['statusCode'] === 0xc8) bskf['readFile'](a1qouj['filePath'], qau1jo, wtr47s, ajy6mu);
                },
                'fail': function (b2g30) {
                    wtr47s != null && wtr47s['runWith']([0x1, b2g30]);
                }
            });
            aumyo['onProgressUpdate'](function (xr$) {
                wtr47s != null && wtr47s['runWith']([0x2, xr$['progress']]);
            });
        }, bskf['readFile'] = function (d7s4kf, twr78$, $ni_, g2kbd) {
            twr78$ === void 0x0 && (twr78$ = 'ascill'), g2kbd === void 0x0 && (g2kbd = ''), bskf['fs']['readFile']({
                'filePath': d7s4kf,
                'encoding': twr78$,
                'success': function (ymau) {
                    if (d7s4kf['indexOf']('http://') != -0x1 || d7s4kf['indexOf']('https://') != -0x1) bskf['onFileUpdate'](d7s4kf, g2kbd);
                    $ni_ != null && $ni_['runWith']([0x0, ymau]);
                },
                'fail': function (k4t7r) {
                    if (k4t7r) $ni_ != null && $ni_['runWith']([0x1, k4t7r]);
                }
            });
        }, bskf['downImg'] = function (q5ezl1, $xnp_i, ql1zo) {
            ql1zo === void 0x0 && (ql1zo = '');
            var qo1auj = bskf['wxdown']({
                'url': q5ezl1,
                'success': function (mouq) {
                    mouq['statusCode'] === 0xc8 && bskf['copyFile'](mouq['tempFilePath'], ql1zo, $xnp_i);
                },
                'fail': function ($i_nx) {
                    $xnp_i != null && $xnp_i['runWith']([0x1, $i_nx]);
                }
            });
        }, bskf['copyFile'] = function (omuya, qz15, uy96a) {
            var k7ds4 = omuya['split']('/'),
                gbf = k7ds4[k7ds4['length'] - 0x1],
                myha6 = qz15['split']('?')[0x0],
                s4dbf = bskf['getFileInfo'](qz15),
                yamu6j = bskf['getFileNativePath'](gbf);
            bskf['fs']['copyFile']({
                'srcPath': omuya,
                'destPath': yamu6j,
                'success': function (st74f) {
                    if (!s4dbf) bskf['onSaveFile'](qz15, gbf), uy96a != null && uy96a['runWith']([0x0]);else {
                        if (s4dbf['readyUrl'] != qz15) bskf['remove'](gbf, qz15, uy96a);
                    }
                },
                'fail': function (hy9a6) {
                    uy96a != null && uy96a['runWith']([0x1, hy9a6]);
                }
            });
        }, bskf['getFileNativePath'] = function (trw4s) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + trw4s;
        }, bskf['remove'] = function (krts, ipx$_8, $xr8i) {
            ipx$_8 === void 0x0 && (ipx$_8 = '');
            var auy9m6 = bskf['getFileInfo'](ipx$_8),
                joql1u = bskf['getFileNativePath'](auy9m6['md5']);
            aomuqj['loader']['clearRes'](auy9m6['readyUrl']), bskf['fs']['unlink']({
                'filePath': joql1u,
                'success': function (ua6yj) {
                    if (ipx$_8 != '') bskf['onSaveFile'](ipx$_8, krts);
                    $xr8i != null && $xr8i['runWith']([0x0]);
                },
                'fail': function (q5lze) {}
            });
        }, bskf['onSaveFile'] = function (loj, d4kb) {
            var dbs = loj['split']('?')[0x0];
            bskf['filesListObj'][dbs] = {
                'md5': d4kb,
                'readyUrl': loj
            }, bskf['fs']['writeFile']({
                'filePath': bskf['fileNativeDir'] + '/' + bskf['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](bskf['filesListObj']),
                'success': function (yuajo) {
                    console['log']('写入测试测试成功：', yuajo);
                },
                'fail': function (gh2v03) {
                    console['log']('写入测试测试失败：', gh2v03);
                }
            });
        }, bskf['existDir'] = function (my6a9, v3h69) {
            bskf['fs']['mkdir']({
                'dirPath': my6a9,
                'success': function (df2bg) {
                    v3h69 != null && v3h69['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (sdk4f7) {
                    if (sdk4f7['errMsg']['indexOf']('file already exists') != -0x1) bskf['readSync'](bskf['fileListName'], 'utf8', v3h69);else v3h69 != null && v3h69['runWith']([0x1, sdk4f7]);
                }
            });
        }, bskf['readSync'] = function (hv0g, ksd, qoz1l, f47ds) {
            ksd === void 0x0 && (ksd = 'ascill'), f47ds === void 0x0 && (f47ds = '');
            var fsk7t4 = bskf['getFileNativePath'](hv0g),
                fdgk4;
            try {
                fdgk4 = bskf['fs']['readFileSync'](fsk7t4), qoz1l != null && qoz1l['runWith']([0x0, { 'data': fdgk4 }]);
            } catch (rtks) {
                qoz1l != null && qoz1l['runWith']([0x1]);
            }
        }, bskf['readCache'] = function () {}, bskf['writeCache'] = function (b03gv2) {
            var oqaumj = readyUrl['split']('?')[0x0];
            bskf['filesListObj'][oqaumj] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, bskf['fs']['writeFile']({
                'filePath': bskf['fileNativeDir'] + '/' + bskf['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](bskf['filesListObj']),
                'success': function (b0v32g) {},
                'fail': function (i_$p8) {}
            });
        }, bskf['setNativeFileDir'] = function (ym0h) {
            bskf['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + ym0h;
        }, bskf['filesListObj'] = {}, bskf['fileNativeDir'] = null, bskf['fileListName'] = 'layaairfiles.txt', bskf['ziyuFileData'] = {}, d2gbv(bskf, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), bskf;
    }(swr4t),
        dgk2f = function (k74df) {
        function bfvg2d() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], bfvg2d['__super']['call'](this), this['_sound'] = bfvg2d['_createSound'](), this['_chanell'] = new b32gvd(this['_sound']);
        }
        gfbv2d(bfvg2d, 'laya.wx.mini.MiniSound', k74df);
        var zq1loe = bfvg2d['prototype'];
        return zq1loe['load'] = function (f4ks7) {
            var bvd32 = this;
            f4ks7 = tr4w['formatURL'](f4ks7), this['url'] = f4ks7;
            if (bfvg2d['_audioCache'][f4ks7]) {
                this['event']('complete');
                return;
            }
            function bv2gd3() {
                if (bfvg2d['_null'] != undefined) bvd32['_sound']['onCanplay'](bfvg2d['_null']), bvd32['_sound']['onError'](bfvg2d['_null']);else try {
                    bvd32['_sound']['onCanplay'](null), bvd32['_sound']['onError'](null), bfvg2d['_null'] = null;
                } catch (myh69a) {
                    console['warn']('[wxmini] _clearSound:' + myh69a), bvd32['_sound']['onCanplay'](oz1leq), bvd32['_sound']['onError'](oz1leq), bfvg2d['_null'] = oz1leq;
                }
            }
            function oq1ujl() {
                o1lqez['loaded'] = !![], o1lqez['event']('complete'), bfvg2d['_audioCache'][o1lqez['url']] = o1lqez;
            }
            function zle15q(p8x$i) {
                console['error']('errCode=' + p8x$i['errCode'] + '  errMsg=' + p8x$i['errMsg']), o1lqez['event']('error');
            }
            function oz1leq() {}
            this['_sound']['onCanplay'](oq1ujl), this['_sound']['onError'](zle15q), this['_sound']['src'] = f4ks7;
            var o1lqez = this;
        }, zq1loe['play'] = function (m90yh, u1lqj) {
            m90yh === void 0x0 && (m90yh = 0x0), u1lqj === void 0x0 && (u1lqj = 0x0);
            var kd4sbf, ulq1o;
            if (this['url'] == wrt7$8['_tMusic']) {
                if (!bfvg2d['_musicAudio']) bfvg2d['_musicAudio'] = this['_sound'];
                kd4sbf = bfvg2d['_musicAudio'], ulq1o = this['_chanell'];
            } else kd4sbf = this['_sound'], ulq1o = this['_chanell'];
            return kd4sbf['src'] = this['url'], kd4sbf['startTime'] = 0x0, ulq1o['isStopped'] && (ulq1o['url'] = this['url'], ulq1o['loops'] = u1lqj, ulq1o['startTime'] = m90yh, ulq1o['play'](), wrt7$8['addChannel'](ulq1o)), ulq1o;
        }, zq1loe['dispose'] = function () {
            var t8s7rw = bfvg2d['_audioCache'][this['url']];
            t8s7rw && (t8s7rw['src'] = '', delete bfvg2d['_audioCache'][this['url']]);
        }, ahy9(0x0, zq1loe, 'duration', function () {
            return this['_sound']['duration'];
        }), bfvg2d['_createSound'] = function () {
            bfvg2d['_id']++;
            var kfb4d = wr$xi8['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return kfb4d;
        }, bfvg2d['_musicAudio'] = null, bfvg2d['_id'] = 0x0, bfvg2d['_audioCache'] = {}, bfvg2d['_null'] = undefined, bfvg2d;
    }(swr4t),
        b32gvd = function (fdgbk4) {
        function r8x$wi(aoumjq) {
            this['_audio'] = null, this['_onEnd'] = null, r8x$wi['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = aoumjq, this['_onEnd'] = oaymu['bind'](this['__onEnd'], this), aoumjq['onEnded'](this['_onEnd']);
        }
        gfbv2d(r8x$wi, 'laya.wx.mini.MiniSoundChannel', fdgbk4);
        var p$8iw = r8x$wi['prototype'];
        return p$8iw['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (aomuqj['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, p$8iw['__onNull'] = function () {}, p$8iw['play'] = function () {
            this['isStopped'] = ![], wrt7$8['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, p$8iw['stop'] = function () {
            this['isStopped'] = !![], wrt7$8['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, p$8iw['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, p$8iw['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], wrt7$8['addChannel'](this), this['_audio']['play']();
        }, ahy9(0x0, p$8iw, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), ahy9(0x0, p$8iw, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), ahy9(0x0, p$8iw, 'volume', function () {
            return 0x1;
        }, function (mjyu6) {}), r8x$wi['_null'] = undefined, r8x$wi;
    }(d2gbk),
        $8rxwi = function () {
        function wsrt74() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = wr$xi8['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        gfbv2d(wsrt74, 'laya.wx.mini.MiniVideo');
        var kt4f7s = wsrt74['prototype'];
        return kt4f7s['on'] = function ($7r8tw, gfbd4, df2bvg) {
            if ($7r8tw == 'loadedmetadata') this['onPlayFunc'] = df2bvg['bind'](gfbd4), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else $7r8tw == 'ended' && (this['onEndedFunC'] = df2bvg['bind'](gfbd4), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, kt4f7s['onTimeUpdateFunc'] = function (y6m9ah) {
            this['position'] = y6m9ah['position'], this['_duration'] = y6m9ah['duration'];
        }, kt4f7s['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, kt4f7s['onended'] = function (zql1oj, ymoaj) {
            this['onEndedFunC'] = ymoaj['bind'](zql1oj), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, kt4f7s['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, kt4f7s['off'] = function (kdgfb4, y6uam9, qo1ul) {
            if (kdgfb4 == 'loadedmetadata') this['onPlayFunc'] = qo1ul['bind'](y6uam9), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else kdgfb4 == 'ended' && (this['onEndedFunC'] = qo1ul['bind'](y6uam9), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, kt4f7s['load'] = function (mojuy) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = mojuy;
        }, kt4f7s['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, kt4f7s['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, kt4f7s['size'] = function (aumy6j, wrx$8i) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = aumy6j, this['videoElement']['height'] = wrx$8i;
        }, kt4f7s['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, kt4f7s['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, ahy9(0x0, kt4f7s, 'duration', function () {
            return this['_duration'];
        }), ahy9(0x0, kt4f7s, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (rsk4t) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = rsk4t;
        }), ahy9(0x0, kt4f7s, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), ahy9(0x0, kt4f7s, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), ahy9(0x0, kt4f7s, 'ended', function () {
            return this['videoend'];
        }), ahy9(0x0, kt4f7s, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (qlz15) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = qlz15;
        }), ahy9(0x0, kt4f7s, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (jqu1) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = jqu1;
        }), ahy9(0x0, kt4f7s, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (_ix$) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = _ix$;
        }), ahy9(0x0, kt4f7s, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), ahy9(0x0, kt4f7s, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (xtwr8$) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = xtwr8$;
        }), ahy9(0x0, kt4f7s, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (ws7) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = ws7;
        }), ahy9(0x0, kt4f7s, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), ahy9(0x0, kt4f7s, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (ao1quj) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = ao1quj;
        }), ahy9(0x0, kt4f7s, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (fkdgb2) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = fkdgb2;
        }), ahy9(0x0, kt4f7s, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function ($inx) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = $inx;
        }), wsrt74;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var srk4t7 in Laya) {
        var z1qoel = Laya[srk4t7];
        z1qoel && z1qoel['__isclass'] && (exports[srk4t7] = z1qoel);
    }
});