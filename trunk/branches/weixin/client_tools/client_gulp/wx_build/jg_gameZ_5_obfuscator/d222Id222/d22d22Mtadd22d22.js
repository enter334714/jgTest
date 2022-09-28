var F = wx.$D;
(function (window, document, mzlio_) {
    var ucpb = mzlio_['un'],
        mja5go = mzlio_['uns'],
        tc3e0s = mzlio_['static'],
        z_ih2r = mzlio_['class'],
        molg5_ = mzlio_['getset'],
        ewstvq = mzlio_['__newvec'],
        h1yn$8 = laya['utils']['Browser'],
        h1zrn = laya['events']['Event'],
        k6vtq = laya['events']['EventDispatcher'],
        vtqw6k = laya['resource']['HTMLImage'],
        _i5mlo = laya['utils']['Handler'],
        kwqxj6 = laya['display']['Input'],
        qkw6v = laya['net']['Loader'],
        i5_lom = laya['maths']['Matrix'],
        moa5 = laya['renders']['Render'],
        il5m_o = laya['utils']['RunDriver'],
        u3pb9c = laya['media']['Sound'],
        kqvx = laya['media']['SoundChannel'],
        n18 = laya['media']['SoundManager'],
        pbf4 = laya['display']['Stage'],
        tqsvwk = laya['net']['URL'],
        qw6jk = laya['utils']['Utils'],
        p9fbu = function () {
        function bup03c() {}
        return z_ih2r(bup03c, 'laya.wx.mini.MiniAdpter'), bup03c['getJson'] = function (_zm) {
            return JSON['parse'](_zm);
        }, bup03c['init'] = function (ajmx, stqv) {
            ajmx === void 0x0 && (ajmx = ![]), stqv === void 0x0 && (stqv = ![]);
            if (bup03c['_inited']) return;
            bup03c['window'] = window;
            if (bup03c['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            bup03c['_inited'] = !![], bup03c['isZiYu'] = stqv, bup03c['isPosMsgYu'] = ajmx, bup03c['EnvConfig'] = {}, !bup03c['isZiYu'] && (teqw['setNativeFileDir']('/layaairGame'), teqw['existDir'](teqw['fileNativeDir'], _i5mlo['create'](bup03c, bup03c['onMkdirCallBack']))), bup03c['window']['focus'] = function () {}, mzlio_['getUrlPath'] = function () {}, bup03c['window']['logtime'] = function (p74f9) {}, bup03c['window']['alertTimeLog'] = function (mogj5a) {}, bup03c['window']['resetShareInfo'] = function () {}, bup03c['window']['CanvasRenderingContext2D'] = function () {}, bup03c['window']['CanvasRenderingContext2D']['prototype'] = bup03c['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], bup03c['window']['document']['body']['appendChild'] = function () {}, bup03c['EnvConfig']['pixelRatioInt'] = 0x0, il5m_o['getPixelRatio'] = bup03c['pixelRatio'], bup03c['_preCreateElement'] = h1yn$8['createElement'], h1yn$8['createElement'] = bup03c['createElement'], il5m_o['createShaderCondition'] = bup03c['createShaderCondition'], qw6jk['parseXMLFromString'] = bup03c['parseXMLFromString'], kwqxj6['_createInputElement'] = vq0ets['_createInputElement'], bup03c['EnvConfig']['load'] = qkw6v['prototype']['load'], qkw6v['prototype']['load'] = s03tce['prototype']['load'], bup03c['isZiYu'] && ajmx && wx['onMessage'](function (mz_ol) {
                mz_ol['isLoad'] && (teqw['ziyuFileData'][mz_ol['url']] = mz_ol['data']);
            });
        }, bup03c['onMkdirCallBack'] = function (qte0vs, h_zr2i) {
            if (!qte0vs) teqw['filesListObj'] = JSON['parse'](h_zr2i['data']);
        }, bup03c['pixelRatio'] = function () {
            if (!bup03c['EnvConfig']['pixelRatioInt']) try {
                var evcs0 = wx['getSystemInfoSync']();
                return bup03c['EnvConfig']['pixelRatioInt'] = evcs0['pixelRatio'], evcs0 = evcs0, evcs0['pixelRatio'];
            } catch (xwk6) {}
            return bup03c['EnvConfig']['pixelRatioInt'];
        }, bup03c['createElement'] = function (sv0tq) {
            if (sv0tq == 'canvas') {
                var il2r_z;
                return bup03c['idx'] == 0x1 ? bup03c['isZiYu'] ? (il2r_z = sharedCanvas, il2r_z['style'] = {}) : il2r_z = window['canvas'] : il2r_z = window['wx']['createCanvas'](), bup03c['idx']++, il2r_z;
            } else {
                if (sv0tq == 'textarea' || sv0tq == 'input') return bup03c['onCreateInput'](sv0tq);else {
                    if (sv0tq == 'div') {
                        var gjk = bup03c['_preCreateElement'](sv0tq);
                        return gjk['contains'] = function (vw6xq) {
                            return null;
                        }, gjk['removeChild'] = function (xg65ja) {}, gjk;
                    } else return bup03c['_preCreateElement'](sv0tq);
                }
            }
        }, bup03c['onCreateInput'] = function (ub9p7) {
            var maxg = bup03c['_preCreateElement'](ub9p7);
            return maxg['focus'] = vq0ets['wxinputFocus'], maxg['blur'] = vq0ets['wxinputblur'], maxg['style'] = {}, maxg['value'] = 0x0, maxg['parentElement'] = {}, maxg['placeholder'] = {}, maxg['type'] = {}, maxg['setColor'] = function (f7p) {}, maxg['setType'] = function (h$1yn) {}, maxg['setFontFace'] = function (qjxk6) {}, maxg['addEventListener'] = function (kstq) {}, maxg['contains'] = function (ja6x5) {
                return null;
            }, maxg['removeChild'] = function (tqvsk) {}, maxg;
        }, bup03c['createShaderCondition'] = function (nhy1$) {
            var upfb93 = this,
                pbf7u9 = function () {
                var n2h$81 = nhy1$;
                return upfb93[nhy1$['replace']('this.', '')];
            };
            return pbf7u9;
        }, bup03c['EnvConfig'] = null, bup03c['window'] = null, bup03c['_preCreateElement'] = null, bup03c['_inited'] = ![], bup03c['wxRequest'] = null, bup03c['systemInfo'] = null, bup03c['version'] = '0.0.1', bup03c['isZiYu'] = ![], bup03c['isPosMsgYu'] = ![], bup03c['parseXMLFromString'] = function (u3ec0s) {
            var ajgm5, zi_oml;
            u3ec0s = u3ec0s['replace'](/>\s+</g, '><');
            try {
                ajgm5 = new window['Parser']['DOMParser']()['parseFromString'](u3ec0s, 'text/xml');
            } catch (b7pfu9) {
                throw '需要引入xml解析库文件';
            }
            return ajgm5;
        }, bup03c['idx'] = 0x1, bup03c;
    }(),
        rh12n8 = function () {
        function gxajm() {}
        z_ih2r(gxajm, 'laya.wx.mini.MiniImage');
        var kj6xqw = gxajm['prototype'];
        return kj6xqw['_loadImage'] = function (b93cup) {
            var kvqw6 = this,
                ozri = ![];
            b93cup['indexOf']('layaNativeDir/') == -0x1 && (ozri = !![], b93cup = tqsvwk['formatURL'](b93cup));
            if (!teqw['getFileInfo'](b93cup)) {
                if (b93cup['indexOf']('http://') != -0x1 || b93cup['indexOf']('https://') != -0x1) teqw['downImg'](b93cup, new _i5mlo(gxajm, gxajm['onDownImgCallBack'], [b93cup, kvqw6]), b93cup);else gxajm['onCreateImage'](b93cup, kvqw6, !![]);
            } else gxajm['onCreateImage'](b93cup, kvqw6, !ozri);
        }, gxajm['onDownImgCallBack'] = function (loi5_, twvsqe, gm5jao) {
            if (!gm5jao) gxajm['onCreateImage'](loi5_, twvsqe);else twvsqe['onError'](null);
        }, gxajm['onCreateImage'] = function (oimlz_, seu30, uc0e) {
            uc0e === void 0x0 && (uc0e = ![]);
            var lom5g_;
            if (!uc0e) {
                var x6kawj = teqw['getFileInfo'](oimlz_),
                    gja5mo = x6kawj['md5'];
                lom5g_ = teqw['getFileNativePath'](gja5mo);
            } else lom5g_ = oimlz_;
            if (seu30['imgCache'] == null) seu30['imgCache'] = {};
            var z2lir_;
            function v0tec() {
                z2lir_['onload'] = null, z2lir_['onerror'] = null, delete seu30['imgCache'][oimlz_];
            }
            ;
            var l2r_iz = function () {
                v0tec(), seu30['onLoaded'](z2lir_);
            },
                amol5 = function () {
                v0tec(), seu30['event']('error', 'Load image failed');
            };
            seu30['_type'] == 'nativeimage' ? (z2lir_ = new h1yn$8['window']['Image'](), z2lir_['crossOrigin'] = '', z2lir_['onload'] = l2r_iz, z2lir_['onerror'] = amol5, z2lir_['src'] = lom5g_, seu30['imgCache'][oimlz_] = z2lir_) : new vtqw6k['create'](lom5g_, {
                'onload': l2r_iz,
                'onerror': amol5,
                'onCreate': function (tvse0) {
                    z2lir_ = tvse0, seu30['imgCache'][oimlz_] = tvse0;
                }
            });
        }, gxajm;
    }(),
        vq0ets = function () {
        function kgajx6() {}
        return z_ih2r(kgajx6, 'laya.wx.mini.MiniInput'), kgajx6['_createInputElement'] = function () {
            kwqxj6['_initInput'](kwqxj6['area'] = h1yn$8['createElement']('textarea')), kwqxj6['_initInput'](kwqxj6['input'] = h1yn$8['createElement']('input')), kwqxj6['inputContainer'] = h1yn$8['createElement']('div'), kwqxj6['inputContainer']['style']['position'] = 'absolute', kwqxj6['inputContainer']['style']['zIndex'] = 0x186a0, h1yn$8['container']['appendChild'](kwqxj6['inputContainer']), kwqxj6['inputContainer']['setPos'] = function (teq0s, zr21nh) {
                kwqxj6['inputContainer']['style']['left'] = teq0s + 'px', kwqxj6['inputContainer']['style']['top'] = zr21nh + 'px';
            }, mzlio_['stage']['on']('resize', null, kgajx6['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (tvse0c) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), n18['_soundClass'] = r2z_il, n18['_musicClass'] = r2z_il, window['_videoClass'] = qvwks;
        }, kgajx6['_onStageResize'] = function () {
            var h81n$y = mzlio_['stage']['_canvasTransform']['identity']();
            h81n$y['scale'](h1yn$8['width'] / moa5['canvas']['width'] / il5m_o['getPixelRatio'](), h1yn$8['height'] / moa5['canvas']['height'] / il5m_o['getPixelRatio']());
        }, kgajx6['wxinputFocus'] = function (h$28) {
            var zh2ir = kwqxj6['inputElement']['target'];
            if (zh2ir && !zh2ir['editable']) return;
            p9fbu['window']['wx']['offKeyboardConfirm'](), p9fbu['window']['wx']['offKeyboardInput'](), p9fbu['window']['wx']['showKeyboard']({
                'defaultValue': zh2ir['text'],
                'maxLength': zh2ir['maxChars'],
                'multiple': zh2ir['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (gjx5m) {},
                'fail': function (h21nz) {}
            }), p9fbu['window']['wx']['onKeyboardConfirm'](function (ub0pc3) {
                var ceu30 = ub0pc3 ? ub0pc3['value'] : '';
                zh2ir['text'] = ceu30, zh2ir['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), p9fbu['window']['wx']['onKeyboardInput'](function (malg) {
                var m_glo5 = malg ? malg['value'] : '';
                if (!zh2ir['multiline']) {
                    if (m_glo5['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                zh2ir['text'] = m_glo5, zh2ir['event']('input');
            });
        }, kgajx6['inputEnter'] = function () {
            kwqxj6['inputElement']['target']['focus'] = ![];
        }, kgajx6['wxinputblur'] = function () {
            kgajx6['hideKeyboard']();
        }, kgajx6['hideKeyboard'] = function () {
            p9fbu['window']['wx']['offKeyboardConfirm'](), p9fbu['window']['wx']['offKeyboardInput'](), p9fbu['window']['wx']['hideKeyboard']({
                'success': function (sc3e0u) {
                    console['log']('隐藏键盘');
                },
                'fail': function (p7ubf9) {
                    console['log']('隐藏键盘出错:' + (p7ubf9 ? p7ubf9['errMsg'] : ''));
                }
            });
        }, kgajx6;
    }(),
        s03tce = function () {
        function kw6xj() {}
        z_ih2r(kw6xj, 'laya.wx.mini.MiniLoader');
        var tvwqk = kw6xj['prototype'];
        return tvwqk['load'] = function (l_5imo, cvet0, cp3u0b, vwq6, c0tvse) {
            cp3u0b === void 0x0 && (cp3u0b = !![]), c0tvse === void 0x0 && (c0tvse = ![]);
            var kqtwsv = this;
            kqtwsv['_url'] = l_5imo;
            if (l_5imo['indexOf']('data:image') === 0x0) kqtwsv['_type'] = cvet0 = 'image';else kqtwsv['_type'] = cvet0 || (cvet0 = kqtwsv['getTypeFromUrl'](l_5imo));
            kqtwsv['_cache'] = cp3u0b, kqtwsv['_data'] = null;
            var ts0qev = 'ascii';
            if (l_5imo['indexOf']('.fnt') != -0x1) ts0qev = 'utf8';else cvet0 == 'arraybuffer' && (ts0qev = '');
            ;
            var omlz_ = qw6jk['getFileExtension'](l_5imo);
            if (kw6xj['_fileTypeArr']['indexOf'](omlz_) != -0x1) p9fbu['EnvConfig']['load']['call'](this, l_5imo, cvet0, cp3u0b, vwq6, c0tvse);else {
                if (!teqw['getFileInfo'](l_5imo)) {
                    if (l_5imo['indexOf']('layaNativeDir/') != -0x1) {
                        if (p9fbu['isZiYu']) {
                            var rzil_o = teqw['ziyuFileData'][l_5imo];
                            kqtwsv['onLoaded'](rzil_o);
                            return;
                        } else {
                            cosnole['log']('read read'), teqw['read'](l_5imo, ts0qev, new _i5mlo(kw6xj, kw6xj['onReadNativeCallBack'], [ts0qev, l_5imo, cvet0, cp3u0b, vwq6, c0tvse, kqtwsv]));
                            return;
                        }
                    }
                    if (tqsvwk['rootPath'] == '') var b7fp = l_5imo;else b7fp = l_5imo['split'](tqsvwk['rootPath'])[0x0];
                    l_5imo['indexOf']('http://') != -0x1 || l_5imo['indexOf']('https://') != -0x1 ? p9fbu['EnvConfig']['load']['call'](kqtwsv, l_5imo, cvet0, cp3u0b, vwq6, c0tvse) : teqw['readFile'](b7fp, ts0qev, new _i5mlo(kw6xj, kw6xj['onReadNativeCallBack'], [ts0qev, l_5imo, cvet0, cp3u0b, vwq6, c0tvse, kqtwsv]), l_5imo);
                } else p9fbu['EnvConfig']['load']['call'](this, l_5imo, cvet0, cp3u0b, vwq6, c0tvse);
            }
        }, tvwqk['resMgrLoad'] = function (f7b9, gaj6x, s0qtev, qvt0es, ktv6w, vwsq, s0cue3) {
            s0qtev === void 0x0 && (s0qtev = 0x0), qvt0es === void 0x0 && (qvt0es = ![]), ktv6w === void 0x0 && (ktv6w = ![]), vwsq === void 0x0 && (vwsq = 0x0), s0cue3 === void 0x0 && (s0cue3 = 0x3), f7b9['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', f7b9), p9fbu['EnvConfig']['resMgrLoad'](f7b9, (iz_lr2, $nh2, xgaj56) => {
                kw6xj['prototype']['resMgrLoadCallBack'](iz_lr2, $nh2, xgaj56, gaj6x);
            }, s0qtev, qvt0es, ktv6w, vwsq, s0cue3);
        }, tvwqk['resMgrLoadCallBack'] = function (wveqt, u39pb, ec30t, puf9b3) {
            console['log']('buff:::', wveqt, ec30t, teqw['fileNativeDir'] + '///' + teqw['fileListName']), puf9b3(wveqt, u39pb, ec30t);
        }, tvwqk['clearRes'] = function (k6vwt, jgamx) {
            jgamx === void 0x0 && (jgamx = ![]);
            var rloz = this;
            rloz['clearRes'](k6vwt, jgamx);
            var ozi_l = teqw['getFileInfo'](k6vwt);
            if (ozi_l && (k6vwt['indexOf']('http://') != -0x1 || k6vwt['indexOf']('https://') != -0x1)) {
                var us3ce = ozi_l['md5'],
                    o5jga = teqw['getFileNativePath'](us3ce);
                teqw['remove'](o5jga);
            }
        }, kw6xj['onReadNativeCallBack'] = function (wsqkt, kxv6wq, xam, _m5olg, $n821h, k6wq, jqw6xk, akxjg6, xa6g5) {
            _m5olg === void 0x0 && (_m5olg = !![]), k6wq === void 0x0 && (k6wq = ![]), akxjg6 === void 0x0 && (akxjg6 = 0x0);
            if (!akxjg6) {
                var h28n1$;
                if (xam == 'json' || xam == 'atlas') h28n1$ = p9fbu['getJson'](xa6g5['data']);else xam == 'xml' ? h28n1$ = qw6jk['parseXMLFromString'](xa6g5['data']) : h28n1$ = xa6g5['data'];
                jqw6xk['onLoaded'](h28n1$), !p9fbu['isZiYu'] && p9fbu['isPosMsgYu'] && xam != 'arraybuffer' && wx['postMessage']({
                    'url': kxv6wq,
                    'data': h28n1$,
                    'isLoad': !![]
                });
            } else akxjg6 == 0x1 && p9fbu['EnvConfig']['load']['call'](jqw6xk, kxv6wq, xam, _m5olg, $n821h, k6wq);
        }, tc3e0s(kw6xj, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), kw6xj;
    }(),
        teqw = function (r1n82h) {
        function stvkq() {
            stvkq['__super']['call'](this);
            ;
        }
        return z_ih2r(stvkq, 'laya.wx.mini.MiniFileMgr', r1n82h), stvkq['isLoadFile'] = function (ir2_) {
            return stvkq['_fileTypeArr']['indexOf'](ir2_) != -0x1 ? !![] : ![];
        }, stvkq['getFileInfo'] = function (a5lmog) {
            var i_hzr = a5lmog['split']('?')[0x0],
                t0eqvs = stvkq['filesListObj'][i_hzr];
            if (t0eqvs == null) return null;else return t0eqvs;
            return null;
        }, stvkq['onFileUpdate'] = function (jxak6g, kqtwv6) {
            var pc0eu = jxak6g['split']('/'),
                kqwj = pc0eu[pc0eu['length'] - 0x1],
                hr2_ = stvkq['getFileInfo'](kqtwv6);
            if (hr2_ == null) stvkq['onSaveFile'](kqtwv6, kqwj);else {
                if (hr2_['readyUrl'] != kqtwv6) stvkq['remove'](kqwj, kqtwv6);
            }
        }, stvkq['exits'] = function (gakx6j, u3pbc9) {
            var vws = stvkq['getFileNativePath'](gakx6j);
            stvkq['fs']['getFileInfo']({
                'filePath': vws,
                'success': function (axmj5g) {
                    u3pbc9 != null && u3pbc9['runWith']([0x0, axmj5g]);
                },
                'fail': function (vqswtk) {
                    u3pbc9 != null && u3pbc9['runWith']([0x1, vqswtk]);
                }
            });
        }, stvkq['read'] = function (_oim5, sce0u3, zrlo_, vsq0te) {
            sce0u3 === void 0x0 && (sce0u3 = 'ascill'), vsq0te === void 0x0 && (vsq0te = '');
            var _mi5l;
            vsq0te != '' ? _mi5l = stvkq['getFileNativePath'](_oim5) : _mi5l = _oim5, stvkq['fs']['readFile']({
                'filePath': _mi5l,
                'encoding': sce0u3,
                'success': function (r2zn1h) {
                    zrlo_ != null && zrlo_['runWith']([0x0, r2zn1h]);
                },
                'fail': function (l5mio_) {
                    if (l5mio_ && vsq0te != '') stvkq['down'](vsq0te, sce0u3, zrlo_, vsq0te);else zrlo_ != null && zrlo_['runWith']([0x1]);
                }
            });
        }, stvkq['readNativeFile'] = function (wsetqv, xakg6j) {
            stvkq['fs']['readFile']({
                'filePath': wsetqv,
                'encoding': '',
                'success': function (qvkt6w) {
                    xakg6j != null && xakg6j['runWith']([0x0]);
                },
                'fail': function (i_olrz) {
                    xakg6j != null && xakg6j['runWith']([0x1]);
                }
            });
        }, stvkq['down'] = function (xw6jka, sc0tve, qkw6tv, lom5i_) {
            sc0tve === void 0x0 && (sc0tve = 'ascill'), lom5i_ === void 0x0 && (lom5i_ = '');
            var kxajw = stvkq['getFileNativePath'](lom5i_),
                o_ml5i = stvkq['wxdown']({
                'url': xw6jka,
                'filePath': kxajw,
                'success': function (ce30s) {
                    if (ce30s['statusCode'] === 0xc8) stvkq['readFile'](ce30s['filePath'], sc0tve, qkw6tv, lom5i_);
                },
                'fail': function ($y1n8h) {
                    qkw6tv != null && qkw6tv['runWith']([0x1, $y1n8h]);
                }
            });
            o_ml5i['onProgressUpdate'](function (jax65g) {
                qkw6tv != null && qkw6tv['runWith']([0x2, jax65g['progress']]);
            });
        }, stvkq['readFile'] = function (_zrlo, p4f, b7up9f, qets0) {
            p4f === void 0x0 && (p4f = 'ascill'), qets0 === void 0x0 && (qets0 = ''), stvkq['fs']['readFile']({
                'filePath': _zrlo,
                'encoding': p4f,
                'success': function (s3ecu) {
                    if (_zrlo['indexOf']('http://') != -0x1 || _zrlo['indexOf']('https://') != -0x1) stvkq['onFileUpdate'](_zrlo, qets0);
                    b7up9f != null && b7up9f['runWith']([0x0, s3ecu]);
                },
                'fail': function (_mo5g) {
                    if (_mo5g) b7up9f != null && b7up9f['runWith']([0x1, _mo5g]);
                }
            });
        }, stvkq['downImg'] = function (bfp7u9, x65ajg, tkwq) {
            tkwq === void 0x0 && (tkwq = '');
            var e3cs = stvkq['wxdown']({
                'url': bfp7u9,
                'success': function (mlgo) {
                    mlgo['statusCode'] === 0xc8 && stvkq['copyFile'](mlgo['tempFilePath'], tkwq, x65ajg);
                },
                'fail': function (ak6jgx) {
                    x65ajg != null && x65ajg['runWith']([0x1, ak6jgx]);
                }
            });
        }, stvkq['copyFile'] = function (wkqx6, nhz, zh1ir2) {
            var jx5mga = wkqx6['split']('/'),
                i_ozr = jx5mga[jx5mga['length'] - 0x1],
                qtvw6 = nhz['split']('?')[0x0],
                cubp03 = stvkq['getFileInfo'](nhz),
                ubc39 = stvkq['getFileNativePath'](i_ozr);
            stvkq['fs']['copyFile']({
                'srcPath': wkqx6,
                'destPath': ubc39,
                'success': function (x6kwqj) {
                    if (!cubp03) stvkq['onSaveFile'](nhz, i_ozr), zh1ir2 != null && zh1ir2['runWith']([0x0]);else {
                        if (cubp03['readyUrl'] != nhz) stvkq['remove'](i_ozr, nhz, zh1ir2);
                    }
                },
                'fail': function (vqew) {
                    zh1ir2 != null && zh1ir2['runWith']([0x1, vqew]);
                }
            });
        }, stvkq['getFileNativePath'] = function (gj5x) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + gj5x;
        }, stvkq['remove'] = function (vqt0es, olim5, u03) {
            olim5 === void 0x0 && (olim5 = '');
            var h1r2n8 = stvkq['getFileInfo'](olim5),
                i2hz1r = stvkq['getFileNativePath'](h1r2n8['md5']);
            mzlio_['loader']['clearRes'](h1r2n8['readyUrl']), stvkq['fs']['unlink']({
                'filePath': i2hz1r,
                'success': function (o5li_m) {
                    if (olim5 != '') stvkq['onSaveFile'](olim5, vqt0es);
                    u03 != null && u03['runWith']([0x0]);
                },
                'fail': function (p497b) {}
            });
        }, stvkq['onSaveFile'] = function (bcu9p3, r81nh) {
            var nz1 = bcu9p3['split']('?')[0x0];
            stvkq['filesListObj'][nz1] = {
                'md5': r81nh,
                'readyUrl': bcu9p3
            }, stvkq['fs']['writeFile']({
                'filePath': stvkq['fileNativeDir'] + '/' + stvkq['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](stvkq['filesListObj']),
                'success': function (vxqk6w) {
                    console['log']('写入测试测试成功：', vxqk6w);
                },
                'fail': function (fpu7) {
                    console['log']('写入测试测试失败：', fpu7);
                }
            });
        }, stvkq['existDir'] = function (q0tsve, kjax6w) {
            stvkq['fs']['mkdir']({
                'dirPath': q0tsve,
                'success': function (mg5lo) {
                    kjax6w != null && kjax6w['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (twsv) {
                    if (twsv['errMsg']['indexOf']('file already exists') != -0x1) stvkq['readSync'](stvkq['fileListName'], 'utf8', kjax6w);else kjax6w != null && kjax6w['runWith']([0x1, twsv]);
                }
            });
        }, stvkq['readSync'] = function (b7p9uf, f7b9p4, _omli, mgloa5) {
            f7b9p4 === void 0x0 && (f7b9p4 = 'ascill'), mgloa5 === void 0x0 && (mgloa5 = '');
            var qwsvte = stvkq['getFileNativePath'](b7p9uf),
                irl2z;
            try {
                irl2z = stvkq['fs']['readFileSync'](qwsvte), _omli != null && _omli['runWith']([0x0, { 'data': irl2z }]);
            } catch (t30c) {
                _omli != null && _omli['runWith']([0x1]);
            }
        }, stvkq['readCache'] = function () {}, stvkq['writeCache'] = function (mxga5j) {
            var i2_zrl = readyUrl['split']('?')[0x0];
            stvkq['filesListObj'][i2_zrl] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, stvkq['fs']['writeFile']({
                'filePath': stvkq['fileNativeDir'] + '/' + stvkq['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](stvkq['filesListObj']),
                'success': function (sec3t) {},
                'fail': function (v0eqst) {}
            });
        }, stvkq['setNativeFileDir'] = function (x6jga5) {
            stvkq['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + x6jga5;
        }, stvkq['filesListObj'] = {}, stvkq['fileNativeDir'] = null, stvkq['fileListName'] = 'layaairfiles.txt', stvkq['ziyuFileData'] = {}, tc3e0s(stvkq, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), stvkq;
    }(k6vtq),
        r2z_il = function (ir12z) {
        function ri2hz_() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], ri2hz_['__super']['call'](this), this['_sound'] = ri2hz_['_createSound'](), this['_chanell'] = new ecu0s(this['_sound']);
        }
        z_ih2r(ri2hz_, 'laya.wx.mini.MiniSound', ir12z);
        var rol_iz = ri2hz_['prototype'];
        return rol_iz['load'] = function (ja5xm) {
            var ir_2hz = this;
            ja5xm = tqsvwk['formatURL'](ja5xm), this['url'] = ja5xm;
            if (ri2hz_['_audioCache'][ja5xm]) {
                this['event']('complete');
                return;
            }
            function gl5_o() {
                if (ri2hz_['_null'] != undefined) ir_2hz['_sound']['onCanplay'](ri2hz_['_null']), ir_2hz['_sound']['onError'](ri2hz_['_null']);else try {
                    ir_2hz['_sound']['onCanplay'](null), ir_2hz['_sound']['onError'](null), ri2hz_['_null'] = null;
                } catch (oli5m_) {
                    console['warn']('[wxmini] _clearSound:' + oli5m_), ir_2hz['_sound']['onCanplay'](i_5lmo), ir_2hz['_sound']['onError'](i_5lmo), ri2hz_['_null'] = i_5lmo;
                }
            }
            function z1() {
                bup3c0['loaded'] = !![], bup3c0['event']('complete'), ri2hz_['_audioCache'][bup3c0['url']] = bup3c0;
            }
            function gla5om(hrz21) {
                console['error']('errCode=' + hrz21['errCode'] + '  errMsg=' + hrz21['errMsg']), bup3c0['event']('error');
            }
            function i_5lmo() {}
            this['_sound']['onCanplay'](z1), this['_sound']['onError'](gla5om), this['_sound']['src'] = ja5xm;
            var bup3c0 = this;
        }, rol_iz['play'] = function (hnzr12, tweqs) {
            hnzr12 === void 0x0 && (hnzr12 = 0x0), tweqs === void 0x0 && (tweqs = 0x0);
            var a5jomg, xgajm;
            if (this['url'] == n18['_tMusic']) {
                if (!ri2hz_['_musicAudio']) ri2hz_['_musicAudio'] = this['_sound'];
                a5jomg = ri2hz_['_musicAudio'], xgajm = this['_chanell'];
            } else a5jomg = this['_sound'], xgajm = this['_chanell'];
            return a5jomg['src'] = this['url'], a5jomg['startTime'] = 0x0, xgajm['isStopped'] && (xgajm['url'] = this['url'], xgajm['loops'] = tweqs, xgajm['startTime'] = hnzr12, xgajm['play'](), n18['addChannel'](xgajm)), xgajm;
        }, rol_iz['dispose'] = function () {
            var qx6k = ri2hz_['_audioCache'][this['url']];
            qx6k && (qx6k['src'] = '', delete ri2hz_['_audioCache'][this['url']]);
        }, molg5_(0x0, rol_iz, 'duration', function () {
            return this['_sound']['duration'];
        }), ri2hz_['_createSound'] = function () {
            ri2hz_['_id']++;
            var c0ve = p9fbu['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return c0ve;
        }, ri2hz_['_musicAudio'] = null, ri2hz_['_id'] = 0x0, ri2hz_['_audioCache'] = {}, ri2hz_['_null'] = undefined, ri2hz_;
    }(k6vtq),
        ecu0s = function (ny8) {
        function o5_lmg(etq0) {
            this['_audio'] = null, this['_onEnd'] = null, o5_lmg['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = etq0, this['_onEnd'] = qw6jk['bind'](this['__onEnd'], this), etq0['onEnded'](this['_onEnd']);
        }
        z_ih2r(o5_lmg, 'laya.wx.mini.MiniSoundChannel', ny8);
        var bp30uc = o5_lmg['prototype'];
        return bp30uc['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (mzlio_['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, bp30uc['__onNull'] = function () {}, bp30uc['play'] = function () {
            this['isStopped'] = ![], n18['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, bp30uc['stop'] = function () {
            this['isStopped'] = !![], n18['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, bp30uc['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, bp30uc['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], n18['addChannel'](this), this['_audio']['play']();
        }, molg5_(0x0, bp30uc, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), molg5_(0x0, bp30uc, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), molg5_(0x0, bp30uc, 'volume', function () {
            return 0x1;
        }, function (w6qjx) {}), o5_lmg['_null'] = undefined, o5_lmg;
    }(kqvx),
        qvwks = function () {
        function bc3() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = p9fbu['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        z_ih2r(bc3, 'laya.wx.mini.MiniVideo');
        var lir_oz = bc3['prototype'];
        return lir_oz['on'] = function (t0sc3e, gl5_m, u7pbf9) {
            if (t0sc3e == 'loadedmetadata') this['onPlayFunc'] = u7pbf9['bind'](gl5_m), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else t0sc3e == 'ended' && (this['onEndedFunC'] = u7pbf9['bind'](gl5_m), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, lir_oz['onTimeUpdateFunc'] = function (puc0b3) {
            this['position'] = puc0b3['position'], this['_duration'] = puc0b3['duration'];
        }, lir_oz['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, lir_oz['onended'] = function (v6wqk, h82r1) {
            this['onEndedFunC'] = h82r1['bind'](v6wqk), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, lir_oz['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, lir_oz['off'] = function (mla5og, iomlz_, h8n1$) {
            if (mla5og == 'loadedmetadata') this['onPlayFunc'] = h8n1$['bind'](iomlz_), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else mla5og == 'ended' && (this['onEndedFunC'] = h8n1$['bind'](iomlz_), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, lir_oz['load'] = function (_mlo) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = _mlo;
        }, lir_oz['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, lir_oz['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, lir_oz['size'] = function (r21iz, vt0qse) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = r21iz, this['videoElement']['height'] = vt0qse;
        }, lir_oz['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, lir_oz['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, molg5_(0x0, lir_oz, 'duration', function () {
            return this['_duration'];
        }), molg5_(0x0, lir_oz, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (_ozilr) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = _ozilr;
        }), molg5_(0x0, lir_oz, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), molg5_(0x0, lir_oz, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), molg5_(0x0, lir_oz, 'ended', function () {
            return this['videoend'];
        }), molg5_(0x0, lir_oz, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (scev) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = scev;
        }), molg5_(0x0, lir_oz, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (zimlo_) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = zimlo_;
        }), molg5_(0x0, lir_oz, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (h128rn) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = h128rn;
        }), molg5_(0x0, lir_oz, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), molg5_(0x0, lir_oz, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (bp03uc) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = bp03uc;
        }), molg5_(0x0, lir_oz, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (xvw6qk) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = xvw6qk;
        }), molg5_(0x0, lir_oz, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), molg5_(0x0, lir_oz, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (wjkx6a) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = wjkx6a;
        }), molg5_(0x0, lir_oz, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (k6xwvq) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = k6xwvq;
        }), molg5_(0x0, lir_oz, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (hn1rz2) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = hn1rz2;
        }), bc3;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var ago in Laya) {
        var p4b7 = Laya[ago];
        p4b7 && p4b7['__isclass'] && (exports[ago] = p4b7);
    }
});