var G = wx.$E;
(function (window, document, nhy9g) {
    var c6k$4b = nhy9g['un'],
        b74m8 = nhy9g['uns'],
        kmc4$b = nhy9g['static'],
        kmb$4c = nhy9g['class'],
        lyxgp = nhy9g['getset'],
        $k6c = nhy9g['__newvec'],
        lhgyp = laya['utils']['Browser'],
        xlp = laya['events']['Event'],
        m$c4bk = laya['events']['EventDispatcher'],
        ghpyl = laya['resource']['HTMLImage'],
        ijdt1 = laya['utils']['Handler'],
        v78wf = laya['display']['Input'],
        rqavwu = laya['net']['Loader'],
        hupga = laya['maths']['Matrix'],
        _ts30 = laya['renders']['Render'],
        $b4cm7 = laya['utils']['RunDriver'],
        cb74mf = laya['media']['Sound'],
        si2_1t = laya['media']['SoundChannel'],
        m$4kbc = laya['media']['SoundManager'],
        i1djt_ = laya['display']['Stage'],
        qauv = laya['net']['URL'],
        vqr8wf = laya['utils']['Utils'],
        plyhgn = function () {
        function mck4b() {}
        return kmb$4c(mck4b, 'laya.wx.mini.MiniAdpter'), mck4b['getJson'] = function (_3ts0) {
            return JSON['parse'](_3ts0);
        }, mck4b['init'] = function (uvq, $56jk) {
            uvq === void 0x0 && (uvq = ![]), $56jk === void 0x0 && ($56jk = ![]);
            if (mck4b['_inited']) return;
            mck4b['window'] = window;
            if (mck4b['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            mck4b['_inited'] = !![], mck4b['isZiYu'] = $56jk, mck4b['isPosMsgYu'] = uvq, mck4b['EnvConfig'] = {}, !mck4b['isZiYu'] && (hgpau['setNativeFileDir']('/layaairGame'), hgpau['existDir'](hgpau['fileNativeDir'], ijdt1['create'](mck4b, mck4b['onMkdirCallBack']))), mck4b['window']['focus'] = function () {}, nhy9g['getUrlPath'] = function () {}, mck4b['window']['logtime'] = function (tij1d) {}, mck4b['window']['alertTimeLog'] = function (v8rqaw) {}, mck4b['window']['resetShareInfo'] = function () {}, mck4b['window']['CanvasRenderingContext2D'] = function () {}, mck4b['window']['CanvasRenderingContext2D']['prototype'] = mck4b['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], mck4b['window']['document']['body']['appendChild'] = function () {}, mck4b['EnvConfig']['pixelRatioInt'] = 0x0, $b4cm7['getPixelRatio'] = mck4b['pixelRatio'], mck4b['_preCreateElement'] = lhgyp['createElement'], lhgyp['createElement'] = mck4b['createElement'], $b4cm7['createShaderCondition'] = mck4b['createShaderCondition'], vqr8wf['parseXMLFromString'] = mck4b['parseXMLFromString'], v78wf['_createInputElement'] = _5i1['_createInputElement'], mck4b['EnvConfig']['load'] = rqavwu['prototype']['load'], rqavwu['prototype']['load'] = jtid1_['prototype']['load'], mck4b['isZiYu'] && uvq && wx['onMessage'](function (d51i_) {
                d51i_['isLoad'] && (hgpau['ziyuFileData'][d51i_['url']] = d51i_['data']);
            });
        }, mck4b['onMkdirCallBack'] = function (idt_s1, j_51di) {
            if (!idt_s1) hgpau['filesListObj'] = JSON['parse'](j_51di['data']);
        }, mck4b['pixelRatio'] = function () {
            if (!mck4b['EnvConfig']['pixelRatioInt']) try {
                var _t31s = wx['getSystemInfoSync']();
                return mck4b['EnvConfig']['pixelRatioInt'] = _t31s['pixelRatio'], _t31s = _t31s, _t31s['pixelRatio'];
            } catch (wvaq8r) {}
            return mck4b['EnvConfig']['pixelRatioInt'];
        }, mck4b['createElement'] = function (bk$4m) {
            if (bk$4m == 'canvas') {
                var opxyl;
                return mck4b['idx'] == 0x1 ? mck4b['isZiYu'] ? (opxyl = sharedCanvas, opxyl['style'] = {}) : opxyl = window['canvas'] : opxyl = window['wx']['createCanvas'](), mck4b['idx']++, opxyl;
            } else {
                if (bk$4m == 'textarea' || bk$4m == 'input') return mck4b['onCreateInput'](bk$4m);else {
                    if (bk$4m == 'div') {
                        var upgyh9 = mck4b['_preCreateElement'](bk$4m);
                        return upgyh9['contains'] = function (yghlnp) {
                            return null;
                        }, upgyh9['removeChild'] = function (wvq) {}, upgyh9;
                    } else return mck4b['_preCreateElement'](bk$4m);
                }
            }
        }, mck4b['onCreateInput'] = function (dij_t1) {
            var xnpgy = mck4b['_preCreateElement'](dij_t1);
            return xnpgy['focus'] = _5i1['wxinputFocus'], xnpgy['blur'] = _5i1['wxinputblur'], xnpgy['style'] = {}, xnpgy['value'] = 0x0, xnpgy['parentElement'] = {}, xnpgy['placeholder'] = {}, xnpgy['type'] = {}, xnpgy['setColor'] = function (qauhr9) {}, xnpgy['setType'] = function ($c6j5k) {}, xnpgy['setFontFace'] = function (yhnp) {}, xnpgy['addEventListener'] = function (frw7) {}, xnpgy['contains'] = function (vrfq8) {
                return null;
            }, xnpgy['removeChild'] = function (ur9qah) {}, xnpgy;
        }, mck4b['createShaderCondition'] = function (hg9uq) {
            var g9hypn = this,
                jd15i_ = function () {
                var jc6$ = hg9uq;
                return g9hypn[hg9uq['replace']('this.', '')];
            };
            return jd15i_;
        }, mck4b['EnvConfig'] = null, mck4b['window'] = null, mck4b['_preCreateElement'] = null, mck4b['_inited'] = ![], mck4b['wxRequest'] = null, mck4b['systemInfo'] = null, mck4b['version'] = '0.0.1', mck4b['isZiYu'] = ![], mck4b['isPosMsgYu'] = ![], mck4b['parseXMLFromString'] = function (i1t_ds) {
            var plyonx, ug9a;
            i1t_ds = i1t_ds['replace'](/>\s+</g, '><');
            try {
                plyonx = new window['Parser']['DOMParser']()['parseFromString'](i1t_ds, 'text/xml');
            } catch (zst230) {
                throw '需要引入xml解析库文件';
            }
            return plyonx;
        }, mck4b['idx'] = 0x1, mck4b;
    }(),
        f8w7bm = function () {
        function xgpynl() {}
        kmb$4c(xgpynl, 'laya.wx.mini.MiniImage');
        var dj_it = xgpynl['prototype'];
        return dj_it['_loadImage'] = function (ts_23) {
            var dsit1_ = this,
                vqar9 = ![];
            ts_23['indexOf']('layaNativeDir/') == -0x1 && (vqar9 = !![], ts_23 = qauv['formatURL'](ts_23));
            if (!hgpau['getFileInfo'](ts_23)) {
                if (ts_23['indexOf']('http://') != -0x1 || ts_23['indexOf']('https://') != -0x1) hgpau['downImg'](ts_23, new ijdt1(xgpynl, xgpynl['onDownImgCallBack'], [ts_23, dsit1_]), ts_23);else xgpynl['onCreateImage'](ts_23, dsit1_, !![]);
            } else xgpynl['onCreateImage'](ts_23, dsit1_, !vqar9);
        }, xgpynl['onDownImgCallBack'] = function (w8fv7, hpuag9, aquh) {
            if (!aquh) xgpynl['onCreateImage'](w8fv7, hpuag9);else hpuag9['onError'](null);
        }, xgpynl['onCreateImage'] = function (ijd_1, _s1di, yplox) {
            yplox === void 0x0 && (yplox = ![]);
            var t32_;
            if (!yplox) {
                var _1di = hgpau['getFileInfo'](ijd_1),
                    mckb4$ = _1di['md5'];
                t32_ = hgpau['getFileNativePath'](mckb4$);
            } else t32_ = ijd_1;
            if (_s1di['imgCache'] == null) _s1di['imgCache'] = {};
            var $km4c;
            function $6b() {
                $km4c['onload'] = null, $km4c['onerror'] = null, delete _s1di['imgCache'][ijd_1];
            }
            ;
            var rqvua = function () {
                $6b(), _s1di['onLoaded']($km4c);
            },
                wm7f8 = function () {
                $6b(), _s1di['event']('error', 'Load image failed');
            };
            _s1di['_type'] == 'nativeimage' ? ($km4c = new lhgyp['window']['Image'](), $km4c['crossOrigin'] = '', $km4c['onload'] = rqvua, $km4c['onerror'] = wm7f8, $km4c['src'] = t32_, _s1di['imgCache'][ijd_1] = $km4c) : new ghpyl['create'](t32_, {
                'onload': rqvua,
                'onerror': wm7f8,
                'onCreate': function (mw7vf8) {
                    $km4c = mw7vf8, _s1di['imgCache'][ijd_1] = mw7vf8;
                }
            });
        }, xgpynl;
    }(),
        _5i1 = function () {
        function nphy9g() {}
        return kmb$4c(nphy9g, 'laya.wx.mini.MiniInput'), nphy9g['_createInputElement'] = function () {
            v78wf['_initInput'](v78wf['area'] = lhgyp['createElement']('textarea')), v78wf['_initInput'](v78wf['input'] = lhgyp['createElement']('input')), v78wf['inputContainer'] = lhgyp['createElement']('div'), v78wf['inputContainer']['style']['position'] = 'absolute', v78wf['inputContainer']['style']['zIndex'] = 0x186a0, lhgyp['container']['appendChild'](v78wf['inputContainer']), v78wf['inputContainer']['setPos'] = function (ughpy, ygphl) {
                v78wf['inputContainer']['style']['left'] = ughpy + 'px', v78wf['inputContainer']['style']['top'] = ygphl + 'px';
            }, nhy9g['stage']['on']('resize', null, nphy9g['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (cb$4) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), m$4kbc['_soundClass'] = k$bcm, m$4kbc['_musicClass'] = k$bcm, window['_videoClass'] = st23_0;
        }, nphy9g['_onStageResize'] = function () {
            var uq9gha = nhy9g['stage']['_canvasTransform']['identity']();
            uq9gha['scale'](lhgyp['width'] / _ts30['canvas']['width'] / $b4cm7['getPixelRatio'](), lhgyp['height'] / _ts30['canvas']['height'] / $b4cm7['getPixelRatio']());
        }, nphy9g['wxinputFocus'] = function (_02s) {
            var k4$bc6 = v78wf['inputElement']['target'];
            if (k4$bc6 && !k4$bc6['editable']) return;
            plyhgn['window']['wx']['offKeyboardConfirm'](), plyhgn['window']['wx']['offKeyboardInput'](), plyhgn['window']['wx']['showKeyboard']({
                'defaultValue': k4$bc6['text'],
                'maxLength': k4$bc6['maxChars'],
                'multiple': k4$bc6['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (f8mb4) {},
                'fail': function (qrvau9) {}
            }), plyhgn['window']['wx']['onKeyboardConfirm'](function (q8rwa) {
                var xlno = q8rwa ? q8rwa['value'] : '';
                k4$bc6['text'] = xlno, k4$bc6['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), plyhgn['window']['wx']['onKeyboardInput'](function (d6kji) {
                var k5c64 = d6kji ? d6kji['value'] : '';
                if (!k4$bc6['multiline']) {
                    if (k5c64['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                k4$bc6['text'] = k5c64, k4$bc6['event']('input');
            });
        }, nphy9g['inputEnter'] = function () {
            v78wf['inputElement']['target']['focus'] = ![];
        }, nphy9g['wxinputblur'] = function () {
            nphy9g['hideKeyboard']();
        }, nphy9g['hideKeyboard'] = function () {
            plyhgn['window']['wx']['offKeyboardConfirm'](), plyhgn['window']['wx']['offKeyboardInput'](), plyhgn['window']['wx']['hideKeyboard']({
                'success': function (m4$c7b) {
                    console['log']('隐藏键盘');
                },
                'fail': function (hu9pgy) {
                    console['log']('隐藏键盘出错:' + (hu9pgy ? hu9pgy['errMsg'] : ''));
                }
            });
        }, nphy9g;
    }(),
        jtid1_ = function () {
        function $4kb6() {}
        kmb$4c($4kb6, 'laya.wx.mini.MiniLoader');
        var arq9uv = $4kb6['prototype'];
        return arq9uv['load'] = function (pn9yhg, ploxy, ghupa, dij_15, aru9v) {
            ghupa === void 0x0 && (ghupa = !![]), aru9v === void 0x0 && (aru9v = ![]);
            var k$5c6j = this;
            k$5c6j['_url'] = pn9yhg;
            if (pn9yhg['indexOf']('data:image') === 0x0) k$5c6j['_type'] = ploxy = 'image';else k$5c6j['_type'] = ploxy || (ploxy = k$5c6j['getTypeFromUrl'](pn9yhg));
            k$5c6j['_cache'] = ghupa, k$5c6j['_data'] = null;
            var ist1d_ = 'ascii';
            if (pn9yhg['indexOf']('.fnt') != -0x1) ist1d_ = 'utf8';else ploxy == 'arraybuffer' && (ist1d_ = '');
            ;
            var gqua = vqr8wf['getFileExtension'](pn9yhg);
            if ($4kb6['_fileTypeArr']['indexOf'](gqua) != -0x1) plyhgn['EnvConfig']['load']['call'](this, pn9yhg, ploxy, ghupa, dij_15, aru9v);else {
                if (!hgpau['getFileInfo'](pn9yhg)) {
                    if (pn9yhg['indexOf']('layaNativeDir/') != -0x1) {
                        if (plyhgn['isZiYu']) {
                            var arq9h = hgpau['ziyuFileData'][pn9yhg];
                            k$5c6j['onLoaded'](arq9h);
                            return;
                        } else {
                            cosnole['log']('read read'), hgpau['read'](pn9yhg, ist1d_, new ijdt1($4kb6, $4kb6['onReadNativeCallBack'], [ist1d_, pn9yhg, ploxy, ghupa, dij_15, aru9v, k$5c6j]));
                            return;
                        }
                    }
                    if (qauv['rootPath'] == '') var fm7bc4 = pn9yhg;else fm7bc4 = pn9yhg['split'](qauv['rootPath'])[0x0];
                    pn9yhg['indexOf']('http://') != -0x1 || pn9yhg['indexOf']('https://') != -0x1 ? plyhgn['EnvConfig']['load']['call'](k$5c6j, pn9yhg, ploxy, ghupa, dij_15, aru9v) : hgpau['readFile'](fm7bc4, ist1d_, new ijdt1($4kb6, $4kb6['onReadNativeCallBack'], [ist1d_, pn9yhg, ploxy, ghupa, dij_15, aru9v, k$5c6j]), pn9yhg);
                } else plyhgn['EnvConfig']['load']['call'](this, pn9yhg, ploxy, ghupa, dij_15, aru9v);
            }
        }, arq9uv['resMgrLoad'] = function (jk5$d6, v9aur, vrawuq, ckj$65, vwfqr8, j_dt1i, ylnxpg) {
            vrawuq === void 0x0 && (vrawuq = 0x0), ckj$65 === void 0x0 && (ckj$65 = ![]), vwfqr8 === void 0x0 && (vwfqr8 = ![]), j_dt1i === void 0x0 && (j_dt1i = 0x0), ylnxpg === void 0x0 && (ylnxpg = 0x3), jk5$d6['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', jk5$d6), plyhgn['EnvConfig']['resMgrLoad'](jk5$d6, (m4fb7c, h9upyg, yng9p) => {
                $4kb6['prototype']['resMgrLoadCallBack'](m4fb7c, h9upyg, yng9p, v9aur);
            }, vrawuq, ckj$65, vwfqr8, j_dt1i, ylnxpg);
        }, arq9uv['resMgrLoadCallBack'] = function (kc6j5$, g9yn, k6j5c, f8rwq) {
            console['log']('buff:::', kc6j5$, k6j5c, hgpau['fileNativeDir'] + '///' + hgpau['fileListName']), f8rwq(kc6j5$, g9yn, k6j5c);
        }, arq9uv['clearRes'] = function (j6d5k$, oxlnp) {
            oxlnp === void 0x0 && (oxlnp = ![]);
            var mfb8 = this;
            mfb8['clearRes'](j6d5k$, oxlnp);
            var d5jk$6 = hgpau['getFileInfo'](j6d5k$);
            if (d5jk$6 && (j6d5k$['indexOf']('http://') != -0x1 || j6d5k$['indexOf']('https://') != -0x1)) {
                var jd5$k = d5jk$6['md5'],
                    wv7mf8 = hgpau['getFileNativePath'](jd5$k);
                hgpau['remove'](wv7mf8);
            }
        }, $4kb6['onReadNativeCallBack'] = function (f748mb, a9ugqh, f7m84, bw8, ygh9up, p9nygh, bk$6c, ji_51, cbm47) {
            bw8 === void 0x0 && (bw8 = !![]), p9nygh === void 0x0 && (p9nygh = ![]), ji_51 === void 0x0 && (ji_51 = 0x0);
            if (!ji_51) {
                var nygpx;
                if (f7m84 == 'json' || f7m84 == 'atlas') nygpx = plyhgn['getJson'](cbm47['data']);else f7m84 == 'xml' ? nygpx = vqr8wf['parseXMLFromString'](cbm47['data']) : nygpx = cbm47['data'];
                bk$6c['onLoaded'](nygpx), !plyhgn['isZiYu'] && plyhgn['isPosMsgYu'] && f7m84 != 'arraybuffer' && wx['postMessage']({
                    'url': a9ugqh,
                    'data': nygpx,
                    'isLoad': !![]
                });
            } else ji_51 == 0x1 && plyhgn['EnvConfig']['load']['call'](bk$6c, a9ugqh, f7m84, bw8, ygh9up, p9nygh);
        }, kmc4$b($4kb6, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), $4kb6;
    }(),
        hgpau = function (kdj6) {
        function cjk$56() {
            cjk$56['__super']['call'](this);
            ;
        }
        return kmb$4c(cjk$56, 'laya.wx.mini.MiniFileMgr', kdj6), cjk$56['isLoadFile'] = function (u9aph) {
            return cjk$56['_fileTypeArr']['indexOf'](u9aph) != -0x1 ? !![] : ![];
        }, cjk$56['getFileInfo'] = function (z0t23) {
            var cj6 = z0t23['split']('?')[0x0],
                kdj56$ = cjk$56['filesListObj'][cj6];
            if (kdj56$ == null) return null;else return kdj56$;
            return null;
        }, cjk$56['onFileUpdate'] = function (kc4$65, vwqf8r) {
            var h9pugy = kc4$65['split']('/'),
                _it21s = h9pugy[h9pugy['length'] - 0x1],
                dt_i1s = cjk$56['getFileInfo'](vwqf8r);
            if (dt_i1s == null) cjk$56['onSaveFile'](vwqf8r, _it21s);else {
                if (dt_i1s['readyUrl'] != vwqf8r) cjk$56['remove'](_it21s, vwqf8r);
            }
        }, cjk$56['exits'] = function (xlyngp, hu9gyp) {
            var p9ua = cjk$56['getFileNativePath'](xlyngp);
            cjk$56['fs']['getFileInfo']({
                'filePath': p9ua,
                'success': function (vwaru) {
                    hu9gyp != null && hu9gyp['runWith']([0x0, vwaru]);
                },
                'fail': function (j5d6i1) {
                    hu9gyp != null && hu9gyp['runWith']([0x1, j5d6i1]);
                }
            });
        }, cjk$56['read'] = function (kc$4mb, s_2t1, _s023t, glpy) {
            s_2t1 === void 0x0 && (s_2t1 = 'ascill'), glpy === void 0x0 && (glpy = '');
            var vqaur9;
            glpy != '' ? vqaur9 = cjk$56['getFileNativePath'](kc$4mb) : vqaur9 = kc$4mb, cjk$56['fs']['readFile']({
                'filePath': vqaur9,
                'encoding': s_2t1,
                'success': function (r8wfq) {
                    _s023t != null && _s023t['runWith']([0x0, r8wfq]);
                },
                'fail': function (hgyu9) {
                    if (hgyu9 && glpy != '') cjk$56['down'](glpy, s_2t1, _s023t, glpy);else _s023t != null && _s023t['runWith']([0x1]);
                }
            });
        }, cjk$56['readNativeFile'] = function (m8bfw, jit_1) {
            cjk$56['fs']['readFile']({
                'filePath': m8bfw,
                'encoding': '',
                'success': function (nplyxg) {
                    jit_1 != null && jit_1['runWith']([0x0]);
                },
                'fail': function (kb4m$) {
                    jit_1 != null && jit_1['runWith']([0x1]);
                }
            });
        }, cjk$56['down'] = function (mcf7, pug9ah, $4kc6, $6k5dj) {
            pug9ah === void 0x0 && (pug9ah = 'ascill'), $6k5dj === void 0x0 && ($6k5dj = '');
            var hug9p = cjk$56['getFileNativePath']($6k5dj),
                vqw = cjk$56['wxdown']({
                'url': mcf7,
                'filePath': hug9p,
                'success': function (bf7c4m) {
                    if (bf7c4m['statusCode'] === 0xc8) cjk$56['readFile'](bf7c4m['filePath'], pug9ah, $4kc6, $6k5dj);
                },
                'fail': function (dki65) {
                    $4kc6 != null && $4kc6['runWith']([0x1, dki65]);
                }
            });
            vqw['onProgressUpdate'](function (rvqwau) {
                $4kc6 != null && $4kc6['runWith']([0x2, rvqwau['progress']]);
            });
        }, cjk$56['readFile'] = function (stz023, ylnxg, b4mcf, jid_51) {
            ylnxg === void 0x0 && (ylnxg = 'ascill'), jid_51 === void 0x0 && (jid_51 = ''), cjk$56['fs']['readFile']({
                'filePath': stz023,
                'encoding': ylnxg,
                'success': function (p9yghu) {
                    if (stz023['indexOf']('http://') != -0x1 || stz023['indexOf']('https://') != -0x1) cjk$56['onFileUpdate'](stz023, jid_51);
                    b4mcf != null && b4mcf['runWith']([0x0, p9yghu]);
                },
                'fail': function (w8var) {
                    if (w8var) b4mcf != null && b4mcf['runWith']([0x1, w8var]);
                }
            });
        }, cjk$56['downImg'] = function (rha9q, upa9h, fw8m7b) {
            fw8m7b === void 0x0 && (fw8m7b = '');
            var s2t_i = cjk$56['wxdown']({
                'url': rha9q,
                'success': function (phlgyn) {
                    phlgyn['statusCode'] === 0xc8 && cjk$56['copyFile'](phlgyn['tempFilePath'], fw8m7b, upa9h);
                },
                'fail': function ($47m) {
                    upa9h != null && upa9h['runWith']([0x1, $47m]);
                }
            });
        }, cjk$56['copyFile'] = function (j1i5, hpy9n, _21tis) {
            var j6kid = j1i5['split']('/'),
                idk65 = j6kid[j6kid['length'] - 0x1],
                i15jd_ = hpy9n['split']('?')[0x0],
                avqruw = cjk$56['getFileInfo'](hpy9n),
                hpgnl = cjk$56['getFileNativePath'](idk65);
            cjk$56['fs']['copyFile']({
                'srcPath': j1i5,
                'destPath': hpgnl,
                'success': function ($5kj) {
                    if (!avqruw) cjk$56['onSaveFile'](hpy9n, idk65), _21tis != null && _21tis['runWith']([0x0]);else {
                        if (avqruw['readyUrl'] != hpy9n) cjk$56['remove'](idk65, hpy9n, _21tis);
                    }
                },
                'fail': function (b8m74) {
                    _21tis != null && _21tis['runWith']([0x1, b8m74]);
                }
            });
        }, cjk$56['getFileNativePath'] = function (k$b46) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + k$b46;
        }, cjk$56['remove'] = function (tsid1, ghpny9, nxplg) {
            ghpny9 === void 0x0 && (ghpny9 = '');
            var tz2 = cjk$56['getFileInfo'](ghpny9),
                s32t1_ = cjk$56['getFileNativePath'](tz2['md5']);
            nhy9g['loader']['clearRes'](tz2['readyUrl']), cjk$56['fs']['unlink']({
                'filePath': s32t1_,
                'success': function (ugqa9h) {
                    if (ghpny9 != '') cjk$56['onSaveFile'](ghpny9, tsid1);
                    nxplg != null && nxplg['runWith']([0x0]);
                },
                'fail': function (c4mb$k) {}
            });
        }, cjk$56['onSaveFile'] = function (dts1, t3z20s) {
            var j_1tdi = dts1['split']('?')[0x0];
            cjk$56['filesListObj'][j_1tdi] = {
                'md5': t3z20s,
                'readyUrl': dts1
            }, cjk$56['fs']['writeFile']({
                'filePath': cjk$56['fileNativeDir'] + '/' + cjk$56['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](cjk$56['filesListObj']),
                'success': function (aqhr9) {
                    console['log']('写入测试测试成功：', aqhr9);
                },
                'fail': function (nphygl) {
                    console['log']('写入测试测试失败：', nphygl);
                }
            });
        }, cjk$56['existDir'] = function (rvfw8, jd1i_) {
            cjk$56['fs']['mkdir']({
                'dirPath': rvfw8,
                'success': function (di1j_5) {
                    jd1i_ != null && jd1i_['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (_t2s3) {
                    if (_t2s3['errMsg']['indexOf']('file already exists') != -0x1) cjk$56['readSync'](cjk$56['fileListName'], 'utf8', jd1i_);else jd1i_ != null && jd1i_['runWith']([0x1, _t2s3]);
                }
            });
        }, cjk$56['readSync'] = function (vwaqr8, st1di_, pu9gh, vwfm7) {
            st1di_ === void 0x0 && (st1di_ = 'ascill'), vwfm7 === void 0x0 && (vwfm7 = '');
            var di5_1j = cjk$56['getFileNativePath'](vwaqr8),
                arwv8q;
            try {
                arwv8q = cjk$56['fs']['readFileSync'](di5_1j), pu9gh != null && pu9gh['runWith']([0x0, { 'data': arwv8q }]);
            } catch (py9) {
                pu9gh != null && pu9gh['runWith']([0x1]);
            }
        }, cjk$56['readCache'] = function () {}, cjk$56['writeCache'] = function (c$km) {
            var m4f7bc = readyUrl['split']('?')[0x0];
            cjk$56['filesListObj'][m4f7bc] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, cjk$56['fs']['writeFile']({
                'filePath': cjk$56['fileNativeDir'] + '/' + cjk$56['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](cjk$56['filesListObj']),
                'success': function (uar9vq) {},
                'fail': function (nlypo) {}
            });
        }, cjk$56['setNativeFileDir'] = function (qrvwau) {
            cjk$56['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + qrvwau;
        }, cjk$56['filesListObj'] = {}, cjk$56['fileNativeDir'] = null, cjk$56['fileListName'] = 'layaairfiles.txt', cjk$56['ziyuFileData'] = {}, kmc4$b(cjk$56, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), cjk$56;
    }(m$c4bk),
        k$bcm = function (_15) {
        function tisd1_() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], tisd1_['__super']['call'](this), this['_sound'] = tisd1_['_createSound'](), this['_chanell'] = new phgn9y(this['_sound']);
        }
        kmb$4c(tisd1_, 'laya.wx.mini.MiniSound', _15);
        var dj5i6 = tisd1_['prototype'];
        return dj5i6['load'] = function (ru9ha) {
            var _2tsi1 = this;
            ru9ha = qauv['formatURL'](ru9ha), this['url'] = ru9ha;
            if (tisd1_['_audioCache'][ru9ha]) {
                this['event']('complete');
                return;
            }
            function vqr8f() {
                if (tisd1_['_null'] != undefined) _2tsi1['_sound']['onCanplay'](tisd1_['_null']), _2tsi1['_sound']['onError'](tisd1_['_null']);else try {
                    _2tsi1['_sound']['onCanplay'](null), _2tsi1['_sound']['onError'](null), tisd1_['_null'] = null;
                } catch (qvuar) {
                    console['warn']('[wxmini] _clearSound:' + qvuar), _2tsi1['_sound']['onCanplay'](npoxl), _2tsi1['_sound']['onError'](npoxl), tisd1_['_null'] = npoxl;
                }
            }
            function ts_2i() {
                _tsi21['loaded'] = !![], _tsi21['event']('complete'), tisd1_['_audioCache'][_tsi21['url']] = _tsi21;
            }
            function $4c7(dji51_) {
                console['error']('errCode=' + dji51_['errCode'] + '  errMsg=' + dji51_['errMsg']), _tsi21['event']('error');
            }
            function npoxl() {}
            this['_sound']['onCanplay'](ts_2i), this['_sound']['onError']($4c7), this['_sound']['src'] = ru9ha;
            var _tsi21 = this;
        }, dj5i6['play'] = function (rvaquw, sdt1_) {
            rvaquw === void 0x0 && (rvaquw = 0x0), sdt1_ === void 0x0 && (sdt1_ = 0x0);
            var nlygp, s2_1t3;
            if (this['url'] == m$4kbc['_tMusic']) {
                if (!tisd1_['_musicAudio']) tisd1_['_musicAudio'] = this['_sound'];
                nlygp = tisd1_['_musicAudio'], s2_1t3 = this['_chanell'];
            } else nlygp = this['_sound'], s2_1t3 = this['_chanell'];
            return nlygp['src'] = this['url'], nlygp['startTime'] = 0x0, s2_1t3['isStopped'] && (s2_1t3['url'] = this['url'], s2_1t3['loops'] = sdt1_, s2_1t3['startTime'] = rvaquw, s2_1t3['play'](), m$4kbc['addChannel'](s2_1t3)), s2_1t3;
        }, dj5i6['dispose'] = function () {
            var ijdk56 = tisd1_['_audioCache'][this['url']];
            ijdk56 && (ijdk56['src'] = '', delete tisd1_['_audioCache'][this['url']]);
        }, lyxgp(0x0, dj5i6, 'duration', function () {
            return this['_sound']['duration'];
        }), tisd1_['_createSound'] = function () {
            tisd1_['_id']++;
            var wvqrf = plyhgn['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return wvqrf;
        }, tisd1_['_musicAudio'] = null, tisd1_['_id'] = 0x0, tisd1_['_audioCache'] = {}, tisd1_['_null'] = undefined, tisd1_;
    }(m$c4bk),
        phgn9y = function (nlgp) {
        function pnlhyg(vm8wf) {
            this['_audio'] = null, this['_onEnd'] = null, pnlhyg['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = vm8wf, this['_onEnd'] = vqr8wf['bind'](this['__onEnd'], this), vm8wf['onEnded'](this['_onEnd']);
        }
        kmb$4c(pnlhyg, 'laya.wx.mini.MiniSoundChannel', nlgp);
        var cj6k = pnlhyg['prototype'];
        return cj6k['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (nhy9g['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, cj6k['__onNull'] = function () {}, cj6k['play'] = function () {
            this['isStopped'] = ![], m$4kbc['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, cj6k['stop'] = function () {
            this['isStopped'] = !![], m$4kbc['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, cj6k['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, cj6k['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], m$4kbc['addChannel'](this), this['_audio']['play']();
        }, lyxgp(0x0, cj6k, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), lyxgp(0x0, cj6k, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), lyxgp(0x0, cj6k, 'volume', function () {
            return 0x1;
        }, function (opynlx) {}), pnlhyg['_null'] = undefined, pnlhyg;
    }(si2_1t),
        st23_0 = function () {
        function $j56dk() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = plyhgn['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        kmb$4c($j56dk, 'laya.wx.mini.MiniVideo');
        var gnlhp = $j56dk['prototype'];
        return gnlhp['on'] = function (_d1tj, pglyxn, noxy) {
            if (_d1tj == 'loadedmetadata') this['onPlayFunc'] = noxy['bind'](pglyxn), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else _d1tj == 'ended' && (this['onEndedFunC'] = noxy['bind'](pglyxn), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, gnlhp['onTimeUpdateFunc'] = function ($cmb4) {
            this['position'] = $cmb4['position'], this['_duration'] = $cmb4['duration'];
        }, gnlhp['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, gnlhp['onended'] = function (k65dj$, rv78f) {
            this['onEndedFunC'] = rv78f['bind'](k65dj$), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, gnlhp['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, gnlhp['off'] = function (ikdj56, hglpy, c$bkm) {
            if (ikdj56 == 'loadedmetadata') this['onPlayFunc'] = c$bkm['bind'](hglpy), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else ikdj56 == 'ended' && (this['onEndedFunC'] = c$bkm['bind'](hglpy), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, gnlhp['load'] = function (r9quh) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = r9quh;
        }, gnlhp['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, gnlhp['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, gnlhp['size'] = function (fm78wv, vr8qa) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = fm78wv, this['videoElement']['height'] = vr8qa;
        }, gnlhp['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, gnlhp['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, lyxgp(0x0, gnlhp, 'duration', function () {
            return this['_duration'];
        }), lyxgp(0x0, gnlhp, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (mvw7) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = mvw7;
        }), lyxgp(0x0, gnlhp, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), lyxgp(0x0, gnlhp, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), lyxgp(0x0, gnlhp, 'ended', function () {
            return this['videoend'];
        }), lyxgp(0x0, gnlhp, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (b4fm87) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = b4fm87;
        }), lyxgp(0x0, gnlhp, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (mb$4k) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = mb$4k;
        }), lyxgp(0x0, gnlhp, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (p9nh) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = p9nh;
        }), lyxgp(0x0, gnlhp, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), lyxgp(0x0, gnlhp, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (_tj1i) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = _tj1i;
        }), lyxgp(0x0, gnlhp, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (xolpn) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = xolpn;
        }), lyxgp(0x0, gnlhp, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), lyxgp(0x0, gnlhp, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (pa9) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = pa9;
        }), lyxgp(0x0, gnlhp, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (hglnpy) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = hglnpy;
        }), lyxgp(0x0, gnlhp, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (jc6k) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = jc6k;
        }), $j56dk;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var hglynp in Laya) {
        var it2s = Laya[hglynp];
        it2s && it2s['__isclass'] && (exports[hglynp] = it2s);
    }
});