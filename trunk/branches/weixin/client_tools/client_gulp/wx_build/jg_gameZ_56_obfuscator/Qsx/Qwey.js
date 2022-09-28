var u = wx.$x;
(function (window, document, czg5) {
    var y$p7s = czg5['un'],
        kzxg3c = czg5['uns'],
        m$6t05 = czg5['static'],
        xt53gc = czg5['class'],
        cg3t5x = czg5['getset'],
        f8uo2_ = czg5['__newvec'],
        w70ps$ = laya['utils']['Browser'],
        gxzkc3 = laya['events']['Event'],
        f2ur_8 = laya['events']['EventDispatcher'],
        wyd = laya['resource']['HTMLImage'],
        pws7yv = laya['utils']['Handler'],
        rkx3fz = laya['display']['Input'],
        vwp7 = laya['net']['Loader'],
        ahie = laya['maths']['Matrix'],
        olb8_q = laya['renders']['Render'],
        dea1h = laya['utils']['RunDriver'],
        pyw7v = laya['media']['Sound'],
        pw6$0s = laya['media']['SoundChannel'],
        yad1 = laya['media']['SoundManager'],
        krz3f = laya['display']['Stage'],
        f_2u8o = laya['net']['URL'],
        m$tp60 = laya['utils']['Utils'],
        krzf = function () {
        function kurfz3() {}
        return xt53gc(kurfz3, 'laya.wx.mini.MiniAdpter'), kurfz3['getJson'] = function (xct5) {
            return JSON['parse'](xct5);
        }, kurfz3['init'] = function (u_8of2, w7vys) {
            u_8of2 === void 0x0 && (u_8of2 = ![]), w7vys === void 0x0 && (w7vys = ![]);
            if (kurfz3['_inited']) return;
            kurfz3['window'] = window;
            if (kurfz3['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            kurfz3['_inited'] = !![], kurfz3['isZiYu'] = w7vys, kurfz3['isPosMsgYu'] = u_8of2, kurfz3['EnvConfig'] = {}, !kurfz3['isZiYu'] && (t0$p6['setNativeFileDir']('/layaairGame'), t0$p6['existDir'](t0$p6['fileNativeDir'], pws7yv['create'](kurfz3, kurfz3['onMkdirCallBack']))), kurfz3['window']['focus'] = function () {}, czg5['getUrlPath'] = function () {}, kurfz3['window']['logtime'] = function (wyav7d) {}, kurfz3['window']['alertTimeLog'] = function (i9nhe) {}, kurfz3['window']['resetShareInfo'] = function () {}, kurfz3['window']['CanvasRenderingContext2D'] = function () {}, kurfz3['window']['CanvasRenderingContext2D']['prototype'] = kurfz3['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], kurfz3['window']['document']['body']['appendChild'] = function () {}, kurfz3['EnvConfig']['pixelRatioInt'] = 0x0, dea1h['getPixelRatio'] = kurfz3['pixelRatio'], kurfz3['_preCreateElement'] = w70ps$['createElement'], w70ps$['createElement'] = kurfz3['createElement'], dea1h['createShaderCondition'] = kurfz3['createShaderCondition'], m$tp60['parseXMLFromString'] = kurfz3['parseXMLFromString'], rkx3fz['_createInputElement'] = gczx3k['_createInputElement'], kurfz3['EnvConfig']['load'] = vwp7['prototype']['load'], vwp7['prototype']['load'] = eda4v['prototype']['load'], kurfz3['isZiYu'] && u_8of2 && wx['onMessage'](function (c056mt) {
                c056mt['isLoad'] && (t0$p6['ziyuFileData'][c056mt['url']] = c056mt['data']);
            });
        }, kurfz3['onMkdirCallBack'] = function (ms6, s0$w7p) {
            if (!ms6) t0$p6['filesListObj'] = JSON['parse'](s0$w7p['data']);
        }, kurfz3['pixelRatio'] = function () {
            if (!kurfz3['EnvConfig']['pixelRatioInt']) try {
                var ia14 = wx['getSystemInfoSync']();
                return kurfz3['EnvConfig']['pixelRatioInt'] = ia14['pixelRatio'], ia14 = ia14, ia14['pixelRatio'];
            } catch (z3rgxk) {}
            return kurfz3['EnvConfig']['pixelRatioInt'];
        }, kurfz3['createElement'] = function (ehi4n) {
            if (ehi4n == 'canvas') {
                var x3grkz;
                return kurfz3['idx'] == 0x1 ? kurfz3['isZiYu'] ? (x3grkz = sharedCanvas, x3grkz['style'] = {}) : x3grkz = window['canvas'] : x3grkz = window['wx']['createCanvas'](), kurfz3['idx']++, x3grkz;
            } else {
                if (ehi4n == 'textarea' || ehi4n == 'input') return kurfz3['onCreateInput'](ehi4n);else {
                    if (ehi4n == 'div') {
                        var fxr3kz = kurfz3['_preCreateElement'](ehi4n);
                        return fxr3kz['contains'] = function (p7w$0) {
                            return null;
                        }, fxr3kz['removeChild'] = function (s$6pw) {}, fxr3kz;
                    } else return kurfz3['_preCreateElement'](ehi4n);
                }
            }
        }, kurfz3['onCreateInput'] = function (pw$07s) {
            var w7syp = kurfz3['_preCreateElement'](pw$07s);
            return w7syp['focus'] = gczx3k['wxinputFocus'], w7syp['blur'] = gczx3k['wxinputblur'], w7syp['style'] = {}, w7syp['value'] = 0x0, w7syp['parentElement'] = {}, w7syp['placeholder'] = {}, w7syp['type'] = {}, w7syp['setColor'] = function (y7sdv) {}, w7syp['setType'] = function (c3z5xg) {}, w7syp['setFontFace'] = function (gcmt5) {}, w7syp['addEventListener'] = function (s60$pm) {}, w7syp['contains'] = function (_f2) {
                return null;
            }, w7syp['removeChild'] = function (en9hi4) {}, w7syp;
        }, kurfz3['createShaderCondition'] = function (cmg5xt) {
            var tcg5xm = this,
                uz2r = function () {
                var kgx3 = cmg5xt;
                return tcg5xm[cmg5xt['replace']('this.', '')];
            };
            return uz2r;
        }, kurfz3['EnvConfig'] = null, kurfz3['window'] = null, kurfz3['_preCreateElement'] = null, kurfz3['_inited'] = ![], kurfz3['wxRequest'] = null, kurfz3['systemInfo'] = null, kurfz3['version'] = '0.0.1', kurfz3['isZiYu'] = ![], kurfz3['isPosMsgYu'] = ![], kurfz3['parseXMLFromString'] = function (oq8bj) {
            var q_l8b, gzxr3k;
            oq8bj = oq8bj['replace'](/>\s+</g, '><');
            try {
                q_l8b = new window['Parser']['DOMParser']()['parseFromString'](oq8bj, 'text/xml');
            } catch (qo_lb) {
                throw '需要引入xml解析库文件';
            }
            return q_l8b;
        }, kurfz3['idx'] = 0x1, kurfz3;
    }(),
        cmx5gt = function () {
        function _ou8() {}
        xt53gc(_ou8, 'laya.wx.mini.MiniImage');
        var a4v = _ou8['prototype'];
        return a4v['_loadImage'] = function (rf2z) {
            var wsd7y = this,
                of_2u8 = ![];
            rf2z['indexOf']('layaNativeDir/') == -0x1 && (of_2u8 = !![], rf2z = f_2u8o['formatURL'](rf2z));
            if (!t0$p6['getFileInfo'](rf2z)) {
                if (rf2z['indexOf']('http://') != -0x1 || rf2z['indexOf']('https://') != -0x1) t0$p6['downImg'](rf2z, new pws7yv(_ou8, _ou8['onDownImgCallBack'], [rf2z, wsd7y]), rf2z);else _ou8['onCreateImage'](rf2z, wsd7y, !![]);
            } else _ou8['onCreateImage'](rf2z, wsd7y, !of_2u8);
        }, _ou8['onDownImgCallBack'] = function (pv7ysw, u82f_, y$7wsp) {
            if (!y$7wsp) _ou8['onCreateImage'](pv7ysw, u82f_);else u82f_['onError'](null);
        }, _ou8['onCreateImage'] = function (w$06, fzukr2, xkcg3z) {
            xkcg3z === void 0x0 && (xkcg3z = ![]);
            var kzr3g;
            if (!xkcg3z) {
                var cmg5t = t0$p6['getFileInfo'](w$06),
                    u2 = cmg5t['md5'];
                kzr3g = t0$p6['getFileNativePath'](u2);
            } else kzr3g = w$06;
            if (fzukr2['imgCache'] == null) fzukr2['imgCache'] = {};
            var tc5m6;
            function $y7pw() {
                tc5m6['onload'] = null, tc5m6['onerror'] = null, delete fzukr2['imgCache'][w$06];
            }
            ;
            var r8uf = function () {
                $y7pw(), fzukr2['onLoaded'](tc5m6);
            },
                u_q2o = function () {
                $y7pw(), fzukr2['event']('error', 'Load image failed');
            };
            fzukr2['_type'] == 'nativeimage' ? (tc5m6 = new w70ps$['window']['Image'](), tc5m6['crossOrigin'] = '', tc5m6['onload'] = r8uf, tc5m6['onerror'] = u_q2o, tc5m6['src'] = kzr3g, fzukr2['imgCache'][w$06] = tc5m6) : new wyd['create'](kzr3g, {
                'onload': r8uf,
                'onerror': u_q2o,
                'onCreate': function (d7av) {
                    tc5m6 = d7av, fzukr2['imgCache'][w$06] = d7av;
                }
            });
        }, _ou8;
    }(),
        gczx3k = function () {
        function pswy$7() {}
        return xt53gc(pswy$7, 'laya.wx.mini.MiniInput'), pswy$7['_createInputElement'] = function () {
            rkx3fz['_initInput'](rkx3fz['area'] = w70ps$['createElement']('textarea')), rkx3fz['_initInput'](rkx3fz['input'] = w70ps$['createElement']('input')), rkx3fz['inputContainer'] = w70ps$['createElement']('div'), rkx3fz['inputContainer']['style']['position'] = 'absolute', rkx3fz['inputContainer']['style']['zIndex'] = 0x186a0, w70ps$['container']['appendChild'](rkx3fz['inputContainer']), rkx3fz['inputContainer']['setPos'] = function (dyv1a7, $0pms) {
                rkx3fz['inputContainer']['style']['left'] = dyv1a7 + 'px', rkx3fz['inputContainer']['style']['top'] = $0pms + 'px';
            }, czg5['stage']['on']('resize', null, pswy$7['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function ($sw0p6) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), yad1['_soundClass'] = vy71, yad1['_musicClass'] = vy71, window['_videoClass'] = wys$;
        }, pswy$7['_onStageResize'] = function () {
            var kf3 = czg5['stage']['_canvasTransform']['identity']();
            kf3['scale'](w70ps$['width'] / olb8_q['canvas']['width'] / dea1h['getPixelRatio'](), w70ps$['height'] / olb8_q['canvas']['height'] / dea1h['getPixelRatio']());
        }, pswy$7['wxinputFocus'] = function (ad14) {
            var czkxg = rkx3fz['inputElement']['target'];
            if (czkxg && !czkxg['editable']) return;
            krzf['window']['wx']['offKeyboardConfirm'](), krzf['window']['wx']['offKeyboardInput'](), krzf['window']['wx']['showKeyboard']({
                'defaultValue': czkxg['text'],
                'maxLength': czkxg['maxChars'],
                'multiple': czkxg['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (v7aw) {},
                'fail': function (fk2_ur) {}
            }), krzf['window']['wx']['onKeyboardConfirm'](function ($pmt) {
                var sw$yp7 = $pmt ? $pmt['value'] : '';
                czkxg['text'] = sw$yp7, czkxg['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), krzf['window']['wx']['onKeyboardInput'](function (q82o_) {
                var rz3xgk = q82o_ ? q82o_['value'] : '';
                if (!czkxg['multiline']) {
                    if (rz3xgk['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                czkxg['text'] = rz3xgk, czkxg['event']('input');
            });
        }, pswy$7['inputEnter'] = function () {
            rkx3fz['inputElement']['target']['focus'] = ![];
        }, pswy$7['wxinputblur'] = function () {
            pswy$7['hideKeyboard']();
        }, pswy$7['hideKeyboard'] = function () {
            krzf['window']['wx']['offKeyboardConfirm'](), krzf['window']['wx']['offKeyboardInput'](), krzf['window']['wx']['hideKeyboard']({
                'success': function (ave4d) {
                    console['log']('隐藏键盘');
                },
                'fail': function (i9h1e4) {
                    console['log']('隐藏键盘出错:' + (i9h1e4 ? i9h1e4['errMsg'] : ''));
                }
            });
        }, pswy$7;
    }(),
        eda4v = function () {
        function av17y() {}
        xt53gc(av17y, 'laya.wx.mini.MiniLoader');
        var t5gxc = av17y['prototype'];
        return t5gxc['load'] = function (l2qo8, wd7svy, gmc6, ws$p07, sypwv7) {
            gmc6 === void 0x0 && (gmc6 = !![]), sypwv7 === void 0x0 && (sypwv7 = ![]);
            var awyd = this;
            awyd['_url'] = l2qo8;
            if (l2qo8['indexOf']('data:image') === 0x0) awyd['_type'] = wd7svy = 'image';else awyd['_type'] = wd7svy || (wd7svy = awyd['getTypeFromUrl'](l2qo8));
            awyd['_cache'] = gmc6, awyd['_data'] = null;
            var q8olb = 'ascii';
            if (l2qo8['indexOf']('.fnt') != -0x1) q8olb = 'utf8';else wd7svy == 'arraybuffer' && (q8olb = '');
            ;
            var x3t5cg = m$tp60['getFileExtension'](l2qo8);
            if (av17y['_fileTypeArr']['indexOf'](x3t5cg) != -0x1) krzf['EnvConfig']['load']['call'](this, l2qo8, wd7svy, gmc6, ws$p07, sypwv7);else {
                if (!t0$p6['getFileInfo'](l2qo8)) {
                    if (l2qo8['indexOf']('layaNativeDir/') != -0x1) {
                        if (krzf['isZiYu']) {
                            var u28r = t0$p6['ziyuFileData'][l2qo8];
                            awyd['onLoaded'](u28r);
                            return;
                        } else {
                            cosnole['log']('read read'), t0$p6['read'](l2qo8, q8olb, new pws7yv(av17y, av17y['onReadNativeCallBack'], [q8olb, l2qo8, wd7svy, gmc6, ws$p07, sypwv7, awyd]));
                            return;
                        }
                    }
                    if (f_2u8o['rootPath'] == '') var va71y = l2qo8;else va71y = l2qo8['split'](f_2u8o['rootPath'])[0x0];
                    l2qo8['indexOf']('http://') != -0x1 || l2qo8['indexOf']('https://') != -0x1 ? krzf['EnvConfig']['load']['call'](awyd, l2qo8, wd7svy, gmc6, ws$p07, sypwv7) : t0$p6['readFile'](va71y, q8olb, new pws7yv(av17y, av17y['onReadNativeCallBack'], [q8olb, l2qo8, wd7svy, gmc6, ws$p07, sypwv7, awyd]), l2qo8);
                } else krzf['EnvConfig']['load']['call'](this, l2qo8, wd7svy, gmc6, ws$p07, sypwv7);
            }
        }, t5gxc['resMgrLoad'] = function (hi4ae1, fr_k2, xmcg, z3fkur, s$wy7, _8fr2u, mxct5) {
            xmcg === void 0x0 && (xmcg = 0x0), z3fkur === void 0x0 && (z3fkur = ![]), s$wy7 === void 0x0 && (s$wy7 = ![]), _8fr2u === void 0x0 && (_8fr2u = 0x0), mxct5 === void 0x0 && (mxct5 = 0x3), hi4ae1['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', hi4ae1), krzf['EnvConfig']['resMgrLoad'](hi4ae1, (qobj, blojq8, fkx3rz) => {
                av17y['prototype']['resMgrLoadCallBack'](qobj, blojq8, fkx3rz, fr_k2);
            }, xmcg, z3fkur, s$wy7, _8fr2u, mxct5);
        }, t5gxc['resMgrLoadCallBack'] = function (t60m$5, vdyws, ur_kf2, had14) {
            console['log']('buff:::', t60m$5, ur_kf2, t0$p6['fileNativeDir'] + '///' + t0$p6['fileListName']), had14(t60m$5, vdyws, ur_kf2);
        }, t5gxc['clearRes'] = function (o8u_f, h41ia) {
            h41ia === void 0x0 && (h41ia = ![]);
            var da1ve4 = this;
            da1ve4['clearRes'](o8u_f, h41ia);
            var $pm0s = t0$p6['getFileInfo'](o8u_f);
            if ($pm0s && (o8u_f['indexOf']('http://') != -0x1 || o8u_f['indexOf']('https://') != -0x1)) {
                var d4h1ea = $pm0s['md5'],
                    m5c6 = t0$p6['getFileNativePath'](d4h1ea);
                t0$p6['remove'](m5c6);
            }
        }, av17y['onReadNativeCallBack'] = function (_8bql, xk3fzr, z3xfkr, m0$6tp, s$0m, _ol8bq, cm06, fr8_2u, oq8l) {
            m0$6tp === void 0x0 && (m0$6tp = !![]), _ol8bq === void 0x0 && (_ol8bq = ![]), fr8_2u === void 0x0 && (fr8_2u = 0x0);
            if (!fr8_2u) {
                var kg3xc;
                if (z3xfkr == 'json' || z3xfkr == 'atlas') kg3xc = krzf['getJson'](oq8l['data']);else z3xfkr == 'xml' ? kg3xc = m$tp60['parseXMLFromString'](oq8l['data']) : kg3xc = oq8l['data'];
                cm06['onLoaded'](kg3xc), !krzf['isZiYu'] && krzf['isPosMsgYu'] && z3xfkr != 'arraybuffer' && wx['postMessage']({
                    'url': xk3fzr,
                    'data': kg3xc,
                    'isLoad': !![]
                });
            } else fr8_2u == 0x1 && krzf['EnvConfig']['load']['call'](cm06, xk3fzr, z3xfkr, m0$6tp, s$0m, _ol8bq);
        }, m$6t05(av17y, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), av17y;
    }(),
        t0$p6 = function (jbq8) {
        function dvye() {
            dvye['__super']['call'](this);
            ;
        }
        return xt53gc(dvye, 'laya.wx.mini.MiniFileMgr', jbq8), dvye['isLoadFile'] = function (d1yve) {
            return dvye['_fileTypeArr']['indexOf'](d1yve) != -0x1 ? !![] : ![];
        }, dvye['getFileInfo'] = function (p7y$) {
            var lobqj8 = p7y$['split']('?')[0x0],
                m65tg = dvye['filesListObj'][lobqj8];
            if (m65tg == null) return null;else return m65tg;
            return null;
        }, dvye['onFileUpdate'] = function (hi94, ie41ah) {
            var uo_82q = hi94['split']('/'),
                kxzfr = uo_82q[uo_82q['length'] - 0x1],
                bq_ol = dvye['getFileInfo'](ie41ah);
            if (bq_ol == null) dvye['onSaveFile'](ie41ah, kxzfr);else {
                if (bq_ol['readyUrl'] != ie41ah) dvye['remove'](kxzfr, ie41ah);
            }
        }, dvye['exits'] = function (dvsy7, pt0$6) {
            var x3g5t = dvye['getFileNativePath'](dvsy7);
            dvye['fs']['getFileInfo']({
                'filePath': x3g5t,
                'success': function (z3cx5) {
                    pt0$6 != null && pt0$6['runWith']([0x0, z3cx5]);
                },
                'fail': function (wyp$7) {
                    pt0$6 != null && pt0$6['runWith']([0x1, wyp$7]);
                }
            });
        }, dvye['read'] = function (vsy, fukzr2, $70p, tgc65m) {
            fukzr2 === void 0x0 && (fukzr2 = 'ascill'), tgc65m === void 0x0 && (tgc65m = '');
            var rz3gkx;
            tgc65m != '' ? rz3gkx = dvye['getFileNativePath'](vsy) : rz3gkx = vsy, dvye['fs']['readFile']({
                'filePath': rz3gkx,
                'encoding': fukzr2,
                'success': function (m$06tp) {
                    $70p != null && $70p['runWith']([0x0, m$06tp]);
                },
                'fail': function (w0p7s$) {
                    if (w0p7s$ && tgc65m != '') dvye['down'](tgc65m, fukzr2, $70p, tgc65m);else $70p != null && $70p['runWith']([0x1]);
                }
            });
        }, dvye['readNativeFile'] = function (o_2l8, m60s) {
            dvye['fs']['readFile']({
                'filePath': o_2l8,
                'encoding': '',
                'success': function ($0m6tp) {
                    m60s != null && m60s['runWith']([0x0]);
                },
                'fail': function (_rfk) {
                    m60s != null && m60s['runWith']([0x1]);
                }
            });
        }, dvye['down'] = function (oq8_u, xzc, s7w0, r_82) {
            xzc === void 0x0 && (xzc = 'ascill'), r_82 === void 0x0 && (r_82 = '');
            var c6gm = dvye['getFileNativePath'](r_82),
                wvyds7 = dvye['wxdown']({
                'url': oq8_u,
                'filePath': c6gm,
                'success': function (tmgc65) {
                    if (tmgc65['statusCode'] === 0xc8) dvye['readFile'](tmgc65['filePath'], xzc, s7w0, r_82);
                },
                'fail': function (ruz) {
                    s7w0 != null && s7w0['runWith']([0x1, ruz]);
                }
            });
            wvyds7['onProgressUpdate'](function (r_uf2k) {
                s7w0 != null && s7w0['runWith']([0x2, r_uf2k['progress']]);
            });
        }, dvye['readFile'] = function (f_ou28, c5gxm, c5gx3t, bljo8q) {
            c5gxm === void 0x0 && (c5gxm = 'ascill'), bljo8q === void 0x0 && (bljo8q = ''), dvye['fs']['readFile']({
                'filePath': f_ou28,
                'encoding': c5gxm,
                'success': function (t0p6m$) {
                    if (f_ou28['indexOf']('http://') != -0x1 || f_ou28['indexOf']('https://') != -0x1) dvye['onFileUpdate'](f_ou28, bljo8q);
                    c5gx3t != null && c5gx3t['runWith']([0x0, t0p6m$]);
                },
                'fail': function (gt5m) {
                    if (gt5m) c5gx3t != null && c5gx3t['runWith']([0x1, gt5m]);
                }
            });
        }, dvye['downImg'] = function ($m6s0p, v7d, fru_82) {
            fru_82 === void 0x0 && (fru_82 = '');
            var vwspy = dvye['wxdown']({
                'url': $m6s0p,
                'success': function (xcgz5) {
                    xcgz5['statusCode'] === 0xc8 && dvye['copyFile'](xcgz5['tempFilePath'], fru_82, v7d);
                },
                'fail': function (r8u) {
                    v7d != null && v7d['runWith']([0x1, r8u]);
                }
            });
        }, dvye['copyFile'] = function (zxc5g, yvda7w, e9i41h) {
            var vadye = zxc5g['split']('/'),
                lqojb8 = vadye[vadye['length'] - 0x1],
                frk_2u = yvda7w['split']('?')[0x0],
                fu2_8o = dvye['getFileInfo'](yvda7w),
                $mp0s = dvye['getFileNativePath'](lqojb8);
            dvye['fs']['copyFile']({
                'srcPath': zxc5g,
                'destPath': $mp0s,
                'success': function (vae41d) {
                    if (!fu2_8o) dvye['onSaveFile'](yvda7w, lqojb8), e9i41h != null && e9i41h['runWith']([0x0]);else {
                        if (fu2_8o['readyUrl'] != yvda7w) dvye['remove'](lqojb8, yvda7w, e9i41h);
                    }
                },
                'fail': function (evayd) {
                    e9i41h != null && e9i41h['runWith']([0x1, evayd]);
                }
            });
        }, dvye['getFileNativePath'] = function (rfx3zk) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + rfx3zk;
        }, dvye['remove'] = function (dvy1e, gkr3xz, ojql) {
            gkr3xz === void 0x0 && (gkr3xz = '');
            var s7ywvd = dvye['getFileInfo'](gkr3xz),
                _lboq = dvye['getFileNativePath'](s7ywvd['md5']);
            czg5['loader']['clearRes'](s7ywvd['readyUrl']), dvye['fs']['unlink']({
                'filePath': _lboq,
                'success': function (oqb8j) {
                    if (gkr3xz != '') dvye['onSaveFile'](gkr3xz, dvy1e);
                    ojql != null && ojql['runWith']([0x0]);
                },
                'fail': function (c3z5) {}
            });
        }, dvye['onSaveFile'] = function (uo2f8_, p0t6m) {
            var ie14h = uo2f8_['split']('?')[0x0];
            dvye['filesListObj'][ie14h] = {
                'md5': p0t6m,
                'readyUrl': uo2f8_
            }, dvye['fs']['writeFile']({
                'filePath': dvye['fileNativeDir'] + '/' + dvye['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](dvye['filesListObj']),
                'success': function (psw$7y) {
                    console['log']('写入测试测试成功：', psw$7y);
                },
                'fail': function (qu_o) {
                    console['log']('写入测试测试失败：', qu_o);
                }
            });
        }, dvye['existDir'] = function (yadw7v, psm6$) {
            dvye['fs']['mkdir']({
                'dirPath': yadw7v,
                'success': function (he1i4a) {
                    psm6$ != null && psm6$['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (p0s6$w) {
                    if (p0s6$w['errMsg']['indexOf']('file already exists') != -0x1) dvye['readSync'](dvye['fileListName'], 'utf8', psm6$);else psm6$ != null && psm6$['runWith']([0x1, p0s6$w]);
                }
            });
        }, dvye['readSync'] = function (o2uq8, vyp7s, $s6pm0, ws0$p6) {
            vyp7s === void 0x0 && (vyp7s = 'ascill'), ws0$p6 === void 0x0 && (ws0$p6 = '');
            var u_8oq = dvye['getFileNativePath'](o2uq8),
                ru2_k;
            try {
                ru2_k = dvye['fs']['readFileSync'](u_8oq), $s6pm0 != null && $s6pm0['runWith']([0x0, { 'data': ru2_k }]);
            } catch (tc5xmg) {
                $s6pm0 != null && $s6pm0['runWith']([0x1]);
            }
        }, dvye['readCache'] = function () {}, dvye['writeCache'] = function (wspvy7) {
            var ah41i = readyUrl['split']('?')[0x0];
            dvye['filesListObj'][ah41i] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, dvye['fs']['writeFile']({
                'filePath': dvye['fileNativeDir'] + '/' + dvye['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](dvye['filesListObj']),
                'success': function (p$w6) {},
                'fail': function (d7vay1) {}
            });
        }, dvye['setNativeFileDir'] = function (svyd) {
            dvye['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + svyd;
        }, dvye['filesListObj'] = {}, dvye['fileNativeDir'] = null, dvye['fileListName'] = 'layaairfiles.txt', dvye['ziyuFileData'] = {}, m$6t05(dvye, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), dvye;
    }(f2ur_8),
        vy71 = function (dy7wsv) {
        function mp60s$() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], mp60s$['__super']['call'](this), this['_sound'] = mp60s$['_createSound'](), this['_chanell'] = new p7w$sy(this['_sound']);
        }
        xt53gc(mp60s$, 'laya.wx.mini.MiniSound', dy7wsv);
        var pm0$6t = mp60s$['prototype'];
        return pm0$6t['load'] = function (n9hie4) {
            var o_8lb = this;
            n9hie4 = f_2u8o['formatURL'](n9hie4), this['url'] = n9hie4;
            if (mp60s$['_audioCache'][n9hie4]) {
                this['event']('complete');
                return;
            }
            function p$0t6m() {
                if (mp60s$['_null'] != undefined) o_8lb['_sound']['onCanplay'](mp60s$['_null']), o_8lb['_sound']['onError'](mp60s$['_null']);else try {
                    o_8lb['_sound']['onCanplay'](null), o_8lb['_sound']['onError'](null), mp60s$['_null'] = null;
                } catch (mgx5ct) {
                    console['warn']('[wxmini] _clearSound:' + mgx5ct), o_8lb['_sound']['onCanplay'](g65mt), o_8lb['_sound']['onError'](g65mt), mp60s$['_null'] = g65mt;
                }
            }
            function gzkxc() {
                ei91h4['loaded'] = !![], ei91h4['event']('complete'), mp60s$['_audioCache'][ei91h4['url']] = ei91h4;
            }
            function $pt60m(n4he) {
                console['error']('errCode=' + n4he['errCode'] + '  errMsg=' + n4he['errMsg']), ei91h4['event']('error');
            }
            function g65mt() {}
            this['_sound']['onCanplay'](gzkxc), this['_sound']['onError']($pt60m), this['_sound']['src'] = n9hie4;
            var ei91h4 = this;
        }, pm0$6t['play'] = function (p7vwys, x3tcg5) {
            p7vwys === void 0x0 && (p7vwys = 0x0), x3tcg5 === void 0x0 && (x3tcg5 = 0x0);
            var rg3zx, kuzf2r;
            if (this['url'] == yad1['_tMusic']) {
                if (!mp60s$['_musicAudio']) mp60s$['_musicAudio'] = this['_sound'];
                rg3zx = mp60s$['_musicAudio'], kuzf2r = this['_chanell'];
            } else rg3zx = this['_sound'], kuzf2r = this['_chanell'];
            return rg3zx['src'] = this['url'], rg3zx['startTime'] = 0x0, kuzf2r['isStopped'] && (kuzf2r['url'] = this['url'], kuzf2r['loops'] = x3tcg5, kuzf2r['startTime'] = p7vwys, kuzf2r['play'](), yad1['addChannel'](kuzf2r)), kuzf2r;
        }, pm0$6t['dispose'] = function () {
            var grz3k = mp60s$['_audioCache'][this['url']];
            grz3k && (grz3k['src'] = '', delete mp60s$['_audioCache'][this['url']]);
        }, cg3t5x(0x0, pm0$6t, 'duration', function () {
            return this['_sound']['duration'];
        }), mp60s$['_createSound'] = function () {
            mp60s$['_id']++;
            var t6$0p = krzf['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return t6$0p;
        }, mp60s$['_musicAudio'] = null, mp60s$['_id'] = 0x0, mp60s$['_audioCache'] = {}, mp60s$['_null'] = undefined, mp60s$;
    }(f2ur_8),
        p7w$sy = function (pws$y) {
        function $0p6tm(ms6$p0) {
            this['_audio'] = null, this['_onEnd'] = null, $0p6tm['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = ms6$p0, this['_onEnd'] = m$tp60['bind'](this['__onEnd'], this), ms6$p0['onEnded'](this['_onEnd']);
        }
        xt53gc($0p6tm, 'laya.wx.mini.MiniSoundChannel', pws$y);
        var mt0c65 = $0p6tm['prototype'];
        return mt0c65['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (czg5['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, mt0c65['__onNull'] = function () {}, mt0c65['play'] = function () {
            this['isStopped'] = ![], yad1['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, mt0c65['stop'] = function () {
            this['isStopped'] = !![], yad1['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, mt0c65['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, mt0c65['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], yad1['addChannel'](this), this['_audio']['play']();
        }, cg3t5x(0x0, mt0c65, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), cg3t5x(0x0, mt0c65, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), cg3t5x(0x0, mt0c65, 'volume', function () {
            return 0x1;
        }, function (jqlb) {}), $0p6tm['_null'] = undefined, $0p6tm;
    }(pw6$0s),
        wys$ = function () {
        function gc56t() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = krzf['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        xt53gc(gc56t, 'laya.wx.mini.MiniVideo');
        var eh = gc56t['prototype'];
        return eh['on'] = function (u2zk, dwyvs7, pm6$t) {
            if (u2zk == 'loadedmetadata') this['onPlayFunc'] = pm6$t['bind'](dwyvs7), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else u2zk == 'ended' && (this['onEndedFunC'] = pm6$t['bind'](dwyvs7), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, eh['onTimeUpdateFunc'] = function (gxtcm) {
            this['position'] = gxtcm['position'], this['_duration'] = gxtcm['duration'];
        }, eh['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, eh['onended'] = function (rfz2k, tmc06) {
            this['onEndedFunC'] = tmc06['bind'](rfz2k), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, eh['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, eh['off'] = function ($7w0ps, ol_b8, e4ih9n) {
            if ($7w0ps == 'loadedmetadata') this['onPlayFunc'] = e4ih9n['bind'](ol_b8), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else $7w0ps == 'ended' && (this['onEndedFunC'] = e4ih9n['bind'](ol_b8), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, eh['load'] = function (rzkxg3) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = rzkxg3;
        }, eh['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, eh['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, eh['size'] = function (o_28qu, $7wp0s) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = o_28qu, this['videoElement']['height'] = $7wp0s;
        }, eh['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, eh['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, cg3t5x(0x0, eh, 'duration', function () {
            return this['_duration'];
        }), cg3t5x(0x0, eh, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (q2o_u8) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = q2o_u8;
        }), cg3t5x(0x0, eh, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), cg3t5x(0x0, eh, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), cg3t5x(0x0, eh, 'ended', function () {
            return this['videoend'];
        }), cg3t5x(0x0, eh, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (u_kr) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = u_kr;
        }), cg3t5x(0x0, eh, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (uo2q_) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = uo2q_;
        }), cg3t5x(0x0, eh, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (yv17a) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = yv17a;
        }), cg3t5x(0x0, eh, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), cg3t5x(0x0, eh, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (o8qb_l) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = o8qb_l;
        }), cg3t5x(0x0, eh, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (a7dvy1) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = a7dvy1;
        }), cg3t5x(0x0, eh, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), cg3t5x(0x0, eh, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (rkf_2) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = rkf_2;
        }), cg3t5x(0x0, eh, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (s$wp70) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = s$wp70;
        }), cg3t5x(0x0, eh, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (dw7a) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = dw7a;
        }), gc56t;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var l_o2 in Laya) {
        var _lq82o = Laya[l_o2];
        _lq82o && _lq82o['__isclass'] && (exports[l_o2] = _lq82o);
    }
});