var u = wx.$x;
(function (window, document, gz5c) {
    var k3zrfx = gz5c['un'],
        r3gkx = gz5c['uns'],
        spyv = gz5c['static'],
        d41av = gz5c['class'],
        bqo_8l = gz5c['getset'],
        yvd7 = gz5c['__newvec'],
        gt6mc = laya['utils']['Browser'],
        f3kurz = laya['events']['Event'],
        g3kzxc = laya['events']['EventDispatcher'],
        xcz3g = laya['resource']['HTMLImage'],
        he9i1 = laya['utils']['Handler'],
        bl8qj = laya['display']['Input'],
        cg5xtm = laya['net']['Loader'],
        m6$50 = laya['maths']['Matrix'],
        rf_u2k = laya['renders']['Render'],
        gmc56 = laya['utils']['RunDriver'],
        v7ydws = laya['media']['Sound'],
        $7yps = laya['media']['SoundChannel'],
        kf2ru_ = laya['media']['SoundManager'],
        r28u_ = laya['display']['Stage'],
        m$t06p = laya['net']['URL'],
        y$p7 = laya['utils']['Utils'],
        q_b8o = function () {
        function gt56mc() {}
        return d41av(gt56mc, 'laya.wx.mini.MiniAdpter'), gt56mc['getJson'] = function (r2uf_8) {
            return JSON['parse'](r2uf_8);
        }, gt56mc['init'] = function (zfr3x, m$0t56) {
            zfr3x === void 0x0 && (zfr3x = ![]), m$0t56 === void 0x0 && (m$0t56 = ![]);
            if (gt56mc['_inited']) return;
            gt56mc['window'] = window;
            if (gt56mc['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            gt56mc['_inited'] = !![], gt56mc['isZiYu'] = m$0t56, gt56mc['isPosMsgYu'] = zfr3x, gt56mc['EnvConfig'] = {}, !gt56mc['isZiYu'] && (qbl_o8['setNativeFileDir']('/layaairGame'), qbl_o8['existDir'](qbl_o8['fileNativeDir'], he9i1['create'](gt56mc, gt56mc['onMkdirCallBack']))), gt56mc['window']['focus'] = function () {}, gz5c['getUrlPath'] = function () {}, gt56mc['window']['logtime'] = function (n9e4ih) {}, gt56mc['window']['alertTimeLog'] = function (sw0p6$) {}, gt56mc['window']['resetShareInfo'] = function () {}, gt56mc['window']['CanvasRenderingContext2D'] = function () {}, gt56mc['window']['CanvasRenderingContext2D']['prototype'] = gt56mc['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], gt56mc['window']['document']['body']['appendChild'] = function () {}, gt56mc['EnvConfig']['pixelRatioInt'] = 0x0, gmc56['getPixelRatio'] = gt56mc['pixelRatio'], gt56mc['_preCreateElement'] = gt6mc['createElement'], gt6mc['createElement'] = gt56mc['createElement'], gmc56['createShaderCondition'] = gt56mc['createShaderCondition'], y$p7['parseXMLFromString'] = gt56mc['parseXMLFromString'], bl8qj['_createInputElement'] = tc5gx['_createInputElement'], gt56mc['EnvConfig']['load'] = cg5xtm['prototype']['load'], cg5xtm['prototype']['load'] = ukf_2['prototype']['load'], gt56mc['isZiYu'] && zfr3x && wx['onMessage'](function (wayvd7) {
                wayvd7['isLoad'] && (qbl_o8['ziyuFileData'][wayvd7['url']] = wayvd7['data']);
            });
        }, gt56mc['onMkdirCallBack'] = function (_28urf, cmt506) {
            if (!_28urf) qbl_o8['filesListObj'] = JSON['parse'](cmt506['data']);
        }, gt56mc['pixelRatio'] = function () {
            if (!gt56mc['EnvConfig']['pixelRatioInt']) try {
                var yveda = wx['getSystemInfoSync']();
                return gt56mc['EnvConfig']['pixelRatioInt'] = yveda['pixelRatio'], yveda = yveda, yveda['pixelRatio'];
            } catch (ai1e4h) {}
            return gt56mc['EnvConfig']['pixelRatioInt'];
        }, gt56mc['createElement'] = function (d7wyva) {
            if (d7wyva == 'canvas') {
                var gzkcx3;
                return gt56mc['idx'] == 0x1 ? gt56mc['isZiYu'] ? (gzkcx3 = sharedCanvas, gzkcx3['style'] = {}) : gzkcx3 = window['canvas'] : gzkcx3 = window['wx']['createCanvas'](), gt56mc['idx']++, gzkcx3;
            } else {
                if (d7wyva == 'textarea' || d7wyva == 'input') return gt56mc['onCreateInput'](d7wyva);else {
                    if (d7wyva == 'div') {
                        var s6$wp0 = gt56mc['_preCreateElement'](d7wyva);
                        return s6$wp0['contains'] = function (deah4) {
                            return null;
                        }, s6$wp0['removeChild'] = function (mp6$0s) {}, s6$wp0;
                    } else return gt56mc['_preCreateElement'](d7wyva);
                }
            }
        }, gt56mc['onCreateInput'] = function (rk_u2f) {
            var ur_f28 = gt56mc['_preCreateElement'](rk_u2f);
            return ur_f28['focus'] = tc5gx['wxinputFocus'], ur_f28['blur'] = tc5gx['wxinputblur'], ur_f28['style'] = {}, ur_f28['value'] = 0x0, ur_f28['parentElement'] = {}, ur_f28['placeholder'] = {}, ur_f28['type'] = {}, ur_f28['setColor'] = function (t5gcm) {}, ur_f28['setType'] = function (o8q2_u) {}, ur_f28['setFontFace'] = function (m6$0sp) {}, ur_f28['addEventListener'] = function (u3rfkz) {}, ur_f28['contains'] = function (sw7) {
                return null;
            }, ur_f28['removeChild'] = function (da7wyv) {}, ur_f28;
        }, gt56mc['createShaderCondition'] = function (m60t$5) {
            var r_fu = this,
                ei9nh = function () {
                var g3xzkr = m60t$5;
                return r_fu[m60t$5['replace']('this.', '')];
            };
            return ei9nh;
        }, gt56mc['EnvConfig'] = null, gt56mc['window'] = null, gt56mc['_preCreateElement'] = null, gt56mc['_inited'] = ![], gt56mc['wxRequest'] = null, gt56mc['systemInfo'] = null, gt56mc['version'] = '0.0.1', gt56mc['isZiYu'] = ![], gt56mc['isPosMsgYu'] = ![], gt56mc['parseXMLFromString'] = function (ruk3z) {
            var awvyd7, pw60$s;
            ruk3z = ruk3z['replace'](/>\s+</g, '><');
            try {
                awvyd7 = new window['Parser']['DOMParser']()['parseFromString'](ruk3z, 'text/xml');
            } catch (zru) {
                throw '需要引入xml解析库文件';
            }
            return awvyd7;
        }, gt56mc['idx'] = 0x1, gt56mc;
    }(),
        kur_f2 = function () {
        function he941() {}
        d41av(he941, 'laya.wx.mini.MiniImage');
        var xgkzr = he941['prototype'];
        return xgkzr['_loadImage'] = function (ehni94) {
            var hei91 = this,
                tg3x5 = ![];
            ehni94['indexOf']('layaNativeDir/') == -0x1 && (tg3x5 = !![], ehni94 = m$t06p['formatURL'](ehni94));
            if (!qbl_o8['getFileInfo'](ehni94)) {
                if (ehni94['indexOf']('http://') != -0x1 || ehni94['indexOf']('https://') != -0x1) qbl_o8['downImg'](ehni94, new he9i1(he941, he941['onDownImgCallBack'], [ehni94, hei91]), ehni94);else he941['onCreateImage'](ehni94, hei91, !![]);
            } else he941['onCreateImage'](ehni94, hei91, !tg3x5);
        }, he941['onDownImgCallBack'] = function (vsypw, zxckg3, rfzk3) {
            if (!rfzk3) he941['onCreateImage'](vsypw, zxckg3);else zxckg3['onError'](null);
        }, he941['onCreateImage'] = function (aveyd, s6p0$w, of28_u) {
            of28_u === void 0x0 && (of28_u = ![]);
            var p0w$6s;
            if (!of28_u) {
                var dva7y1 = qbl_o8['getFileInfo'](aveyd),
                    yvsp7 = dva7y1['md5'];
                p0w$6s = qbl_o8['getFileNativePath'](yvsp7);
            } else p0w$6s = aveyd;
            if (s6p0$w['imgCache'] == null) s6p0$w['imgCache'] = {};
            var w7dsy;
            function jlq8ob() {
                w7dsy['onload'] = null, w7dsy['onerror'] = null, delete s6p0$w['imgCache'][aveyd];
            }
            ;
            var wyd7v = function () {
                jlq8ob(), s6p0$w['onLoaded'](w7dsy);
            },
                kxgc = function () {
                jlq8ob(), s6p0$w['event']('error', 'Load image failed');
            };
            s6p0$w['_type'] == 'nativeimage' ? (w7dsy = new gt6mc['window']['Image'](), w7dsy['crossOrigin'] = '', w7dsy['onload'] = wyd7v, w7dsy['onerror'] = kxgc, w7dsy['src'] = p0w$6s, s6p0$w['imgCache'][aveyd] = w7dsy) : new xcz3g['create'](p0w$6s, {
                'onload': wyd7v,
                'onerror': kxgc,
                'onCreate': function (kuz2r) {
                    w7dsy = kuz2r, s6p0$w['imgCache'][aveyd] = kuz2r;
                }
            });
        }, he941;
    }(),
        tc5gx = function () {
        function adeyv() {}
        return d41av(adeyv, 'laya.wx.mini.MiniInput'), adeyv['_createInputElement'] = function () {
            bl8qj['_initInput'](bl8qj['area'] = gt6mc['createElement']('textarea')), bl8qj['_initInput'](bl8qj['input'] = gt6mc['createElement']('input')), bl8qj['inputContainer'] = gt6mc['createElement']('div'), bl8qj['inputContainer']['style']['position'] = 'absolute', bl8qj['inputContainer']['style']['zIndex'] = 0x186a0, gt6mc['container']['appendChild'](bl8qj['inputContainer']), bl8qj['inputContainer']['setPos'] = function (ou_, _o8fu) {
                bl8qj['inputContainer']['style']['left'] = ou_ + 'px', bl8qj['inputContainer']['style']['top'] = _o8fu + 'px';
            }, gz5c['stage']['on']('resize', null, adeyv['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (f2ur) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), kf2ru_['_soundClass'] = ws70p$, kf2ru_['_musicClass'] = ws70p$, window['_videoClass'] = a41evd;
        }, adeyv['_onStageResize'] = function () {
            var $05t6 = gz5c['stage']['_canvasTransform']['identity']();
            $05t6['scale'](gt6mc['width'] / rf_u2k['canvas']['width'] / gmc56['getPixelRatio'](), gt6mc['height'] / rf_u2k['canvas']['height'] / gmc56['getPixelRatio']());
        }, adeyv['wxinputFocus'] = function (u3krzf) {
            var t6m50 = bl8qj['inputElement']['target'];
            if (t6m50 && !t6m50['editable']) return;
            q_b8o['window']['wx']['offKeyboardConfirm'](), q_b8o['window']['wx']['offKeyboardInput'](), q_b8o['window']['wx']['showKeyboard']({
                'defaultValue': t6m50['text'],
                'maxLength': t6m50['maxChars'],
                'multiple': t6m50['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (l8_q2) {},
                'fail': function (v1ydea) {}
            }), q_b8o['window']['wx']['onKeyboardConfirm'](function (wysvd7) {
                var yvs7p = wysvd7 ? wysvd7['value'] : '';
                t6m50['text'] = yvs7p, t6m50['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), q_b8o['window']['wx']['onKeyboardInput'](function (dv7ws) {
                var pm6t$0 = dv7ws ? dv7ws['value'] : '';
                if (!t6m50['multiline']) {
                    if (pm6t$0['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                t6m50['text'] = pm6t$0, t6m50['event']('input');
            });
        }, adeyv['inputEnter'] = function () {
            bl8qj['inputElement']['target']['focus'] = ![];
        }, adeyv['wxinputblur'] = function () {
            adeyv['hideKeyboard']();
        }, adeyv['hideKeyboard'] = function () {
            q_b8o['window']['wx']['offKeyboardConfirm'](), q_b8o['window']['wx']['offKeyboardInput'](), q_b8o['window']['wx']['hideKeyboard']({
                'success': function (vaed4) {
                    console['log']('隐藏键盘');
                },
                'fail': function (e1vdy) {
                    console['log']('隐藏键盘出错:' + (e1vdy ? e1vdy['errMsg'] : ''));
                }
            });
        }, adeyv;
    }(),
        ukf_2 = function () {
        function b8jlo() {}
        d41av(b8jlo, 'laya.wx.mini.MiniLoader');
        var xmc5gt = b8jlo['prototype'];
        return xmc5gt['load'] = function (_8uf2o, gx3tc5, ur2k_f, g5mxt, vdw7ys) {
            ur2k_f === void 0x0 && (ur2k_f = !![]), vdw7ys === void 0x0 && (vdw7ys = ![]);
            var d7ysv = this;
            d7ysv['_url'] = _8uf2o;
            if (_8uf2o['indexOf']('data:image') === 0x0) d7ysv['_type'] = gx3tc5 = 'image';else d7ysv['_type'] = gx3tc5 || (gx3tc5 = d7ysv['getTypeFromUrl'](_8uf2o));
            d7ysv['_cache'] = ur2k_f, d7ysv['_data'] = null;
            var mp$0 = 'ascii';
            if (_8uf2o['indexOf']('.fnt') != -0x1) mp$0 = 'utf8';else gx3tc5 == 'arraybuffer' && (mp$0 = '');
            ;
            var urzfk2 = y$p7['getFileExtension'](_8uf2o);
            if (b8jlo['_fileTypeArr']['indexOf'](urzfk2) != -0x1) q_b8o['EnvConfig']['load']['call'](this, _8uf2o, gx3tc5, ur2k_f, g5mxt, vdw7ys);else {
                if (!qbl_o8['getFileInfo'](_8uf2o)) {
                    if (_8uf2o['indexOf']('layaNativeDir/') != -0x1) {
                        if (q_b8o['isZiYu']) {
                            var _blo8 = qbl_o8['ziyuFileData'][_8uf2o];
                            d7ysv['onLoaded'](_blo8);
                            return;
                        } else {
                            cosnole['log']('read read'), qbl_o8['read'](_8uf2o, mp$0, new he9i1(b8jlo, b8jlo['onReadNativeCallBack'], [mp$0, _8uf2o, gx3tc5, ur2k_f, g5mxt, vdw7ys, d7ysv]));
                            return;
                        }
                    }
                    if (m$t06p['rootPath'] == '') var k2rzuf = _8uf2o;else k2rzuf = _8uf2o['split'](m$t06p['rootPath'])[0x0];
                    _8uf2o['indexOf']('http://') != -0x1 || _8uf2o['indexOf']('https://') != -0x1 ? q_b8o['EnvConfig']['load']['call'](d7ysv, _8uf2o, gx3tc5, ur2k_f, g5mxt, vdw7ys) : qbl_o8['readFile'](k2rzuf, mp$0, new he9i1(b8jlo, b8jlo['onReadNativeCallBack'], [mp$0, _8uf2o, gx3tc5, ur2k_f, g5mxt, vdw7ys, d7ysv]), _8uf2o);
                } else q_b8o['EnvConfig']['load']['call'](this, _8uf2o, gx3tc5, ur2k_f, g5mxt, vdw7ys);
            }
        }, xmc5gt['resMgrLoad'] = function (a4hei, ru_2f, m6p0t$, a7yvwd, e1hd4a, sp0w$, q28ol_) {
            m6p0t$ === void 0x0 && (m6p0t$ = 0x0), a7yvwd === void 0x0 && (a7yvwd = ![]), e1hd4a === void 0x0 && (e1hd4a = ![]), sp0w$ === void 0x0 && (sp0w$ = 0x0), q28ol_ === void 0x0 && (q28ol_ = 0x3), a4hei['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', a4hei), q_b8o['EnvConfig']['resMgrLoad'](a4hei, (u8f2o, v14da, xz3g5) => {
                b8jlo['prototype']['resMgrLoadCallBack'](u8f2o, v14da, xz3g5, ru_2f);
            }, m6p0t$, a7yvwd, e1hd4a, sp0w$, q28ol_);
        }, xmc5gt['resMgrLoadCallBack'] = function (gct65, v71ad, f_r28u, tmx5c) {
            console['log']('buff:::', gct65, f_r28u, qbl_o8['fileNativeDir'] + '///' + qbl_o8['fileListName']), tmx5c(gct65, v71ad, f_r28u);
        }, xmc5gt['clearRes'] = function (t6c5g, sdyvw) {
            sdyvw === void 0x0 && (sdyvw = ![]);
            var kfr_2u = this;
            kfr_2u['clearRes'](t6c5g, sdyvw);
            var edv4 = qbl_o8['getFileInfo'](t6c5g);
            if (edv4 && (t6c5g['indexOf']('http://') != -0x1 || t6c5g['indexOf']('https://') != -0x1)) {
                var bljoq = edv4['md5'],
                    t5mc60 = qbl_o8['getFileNativePath'](bljoq);
                qbl_o8['remove'](t5mc60);
            }
        }, b8jlo['onReadNativeCallBack'] = function (w$7y, ea1dvy, $ps07w, wys7v, bj8oq, p6$tm, awyv7, yvd7aw, bl8_q) {
            wys7v === void 0x0 && (wys7v = !![]), p6$tm === void 0x0 && (p6$tm = ![]), yvd7aw === void 0x0 && (yvd7aw = 0x0);
            if (!yvd7aw) {
                var kzcg3x;
                if ($ps07w == 'json' || $ps07w == 'atlas') kzcg3x = q_b8o['getJson'](bl8_q['data']);else $ps07w == 'xml' ? kzcg3x = y$p7['parseXMLFromString'](bl8_q['data']) : kzcg3x = bl8_q['data'];
                awyv7['onLoaded'](kzcg3x), !q_b8o['isZiYu'] && q_b8o['isPosMsgYu'] && $ps07w != 'arraybuffer' && wx['postMessage']({
                    'url': ea1dvy,
                    'data': kzcg3x,
                    'isLoad': !![]
                });
            } else yvd7aw == 0x1 && q_b8o['EnvConfig']['load']['call'](awyv7, ea1dvy, $ps07w, wys7v, bj8oq, p6$tm);
        }, spyv(b8jlo, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), b8jlo;
    }(),
        qbl_o8 = function (tcmxg) {
        function aev1dy() {
            aev1dy['__super']['call'](this);
            ;
        }
        return d41av(aev1dy, 'laya.wx.mini.MiniFileMgr', tcmxg), aev1dy['isLoadFile'] = function (z3c5g) {
            return aev1dy['_fileTypeArr']['indexOf'](z3c5g) != -0x1 ? !![] : ![];
        }, aev1dy['getFileInfo'] = function (_r2kf) {
            var yadvw7 = _r2kf['split']('?')[0x0],
                r8uf_ = aev1dy['filesListObj'][yadvw7];
            if (r8uf_ == null) return null;else return r8uf_;
            return null;
        }, aev1dy['onFileUpdate'] = function (a1v7y, t6$05m) {
            var t6c0m = a1v7y['split']('/'),
                dy7sv = t6c0m[t6c0m['length'] - 0x1],
                lo8jb = aev1dy['getFileInfo'](t6$05m);
            if (lo8jb == null) aev1dy['onSaveFile'](t6$05m, dy7sv);else {
                if (lo8jb['readyUrl'] != t6$05m) aev1dy['remove'](dy7sv, t6$05m);
            }
        }, aev1dy['exits'] = function (v4e1a, u_fr) {
            var zu3fr = aev1dy['getFileNativePath'](v4e1a);
            aev1dy['fs']['getFileInfo']({
                'filePath': zu3fr,
                'success': function (i1ah4e) {
                    u_fr != null && u_fr['runWith']([0x0, i1ah4e]);
                },
                'fail': function (tc0m5) {
                    u_fr != null && u_fr['runWith']([0x1, tc0m5]);
                }
            });
        }, aev1dy['read'] = function (i1e94h, cm6tg5, ave1yd, h1a4i) {
            cm6tg5 === void 0x0 && (cm6tg5 = 'ascill'), h1a4i === void 0x0 && (h1a4i = '');
            var vdw7sy;
            h1a4i != '' ? vdw7sy = aev1dy['getFileNativePath'](i1e94h) : vdw7sy = i1e94h, aev1dy['fs']['readFile']({
                'filePath': vdw7sy,
                'encoding': cm6tg5,
                'success': function (o2u8f) {
                    ave1yd != null && ave1yd['runWith']([0x0, o2u8f]);
                },
                'fail': function ($mp6s0) {
                    if ($mp6s0 && h1a4i != '') aev1dy['down'](h1a4i, cm6tg5, ave1yd, h1a4i);else ave1yd != null && ave1yd['runWith']([0x1]);
                }
            });
        }, aev1dy['readNativeFile'] = function (v1y7da, aehd) {
            aev1dy['fs']['readFile']({
                'filePath': v1y7da,
                'encoding': '',
                'success': function (q8jbo) {
                    aehd != null && aehd['runWith']([0x0]);
                },
                'fail': function (ay1) {
                    aehd != null && aehd['runWith']([0x1]);
                }
            });
        }, aev1dy['down'] = function (t53gcx, hie9n, he4da1, xz3fr) {
            hie9n === void 0x0 && (hie9n = 'ascill'), xz3fr === void 0x0 && (xz3fr = '');
            var wvs7py = aev1dy['getFileNativePath'](xz3fr),
                m065t$ = aev1dy['wxdown']({
                'url': t53gcx,
                'filePath': wvs7py,
                'success': function (vypsw7) {
                    if (vypsw7['statusCode'] === 0xc8) aev1dy['readFile'](vypsw7['filePath'], hie9n, he4da1, xz3fr);
                },
                'fail': function ($6wsp) {
                    he4da1 != null && he4da1['runWith']([0x1, $6wsp]);
                }
            });
            m065t$['onProgressUpdate'](function (u82q_o) {
                he4da1 != null && he4da1['runWith']([0x2, u82q_o['progress']]);
            });
        }, aev1dy['readFile'] = function (v7syp, k2rf_u, xg5zc3, cg6m5t) {
            k2rf_u === void 0x0 && (k2rf_u = 'ascill'), cg6m5t === void 0x0 && (cg6m5t = ''), aev1dy['fs']['readFile']({
                'filePath': v7syp,
                'encoding': k2rf_u,
                'success': function ($swpy7) {
                    if (v7syp['indexOf']('http://') != -0x1 || v7syp['indexOf']('https://') != -0x1) aev1dy['onFileUpdate'](v7syp, cg6m5t);
                    xg5zc3 != null && xg5zc3['runWith']([0x0, $swpy7]);
                },
                'fail': function (w0s$p) {
                    if (w0s$p) xg5zc3 != null && xg5zc3['runWith']([0x1, w0s$p]);
                }
            });
        }, aev1dy['downImg'] = function (ljo8b, r3xzfk, cxgz) {
            cxgz === void 0x0 && (cxgz = '');
            var $p6mt = aev1dy['wxdown']({
                'url': ljo8b,
                'success': function (vd7aw) {
                    vd7aw['statusCode'] === 0xc8 && aev1dy['copyFile'](vd7aw['tempFilePath'], cxgz, r3xzfk);
                },
                'fail': function (z3xrf) {
                    r3xzfk != null && r3xzfk['runWith']([0x1, z3xrf]);
                }
            });
        }, aev1dy['copyFile'] = function (hdae1, t5c3gx, i1e9h) {
            var ypw7$ = hdae1['split']('/'),
                e1ha4d = ypw7$[ypw7$['length'] - 0x1],
                b_8ql = t5c3gx['split']('?')[0x0],
                a7y = aev1dy['getFileInfo'](t5c3gx),
                $tm0 = aev1dy['getFileNativePath'](e1ha4d);
            aev1dy['fs']['copyFile']({
                'srcPath': hdae1,
                'destPath': $tm0,
                'success': function (xkzgc3) {
                    if (!a7y) aev1dy['onSaveFile'](t5c3gx, e1ha4d), i1e9h != null && i1e9h['runWith']([0x0]);else {
                        if (a7y['readyUrl'] != t5c3gx) aev1dy['remove'](e1ha4d, t5c3gx, i1e9h);
                    }
                },
                'fail': function (l8_o) {
                    i1e9h != null && i1e9h['runWith']([0x1, l8_o]);
                }
            });
        }, aev1dy['getFileNativePath'] = function (e4a1hi) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + e4a1hi;
        }, aev1dy['remove'] = function (r82uf, t5xgmc, oblqj) {
            t5xgmc === void 0x0 && (t5xgmc = '');
            var wsvpy = aev1dy['getFileInfo'](t5xgmc),
                y7svd = aev1dy['getFileNativePath'](wsvpy['md5']);
            gz5c['loader']['clearRes'](wsvpy['readyUrl']), aev1dy['fs']['unlink']({
                'filePath': y7svd,
                'success': function (lq_82) {
                    if (t5xgmc != '') aev1dy['onSaveFile'](t5xgmc, r82uf);
                    oblqj != null && oblqj['runWith']([0x0]);
                },
                'fail': function (r3kgx) {}
            });
        }, aev1dy['onSaveFile'] = function (gxmc, czg3) {
            var $tpm6 = gxmc['split']('?')[0x0];
            aev1dy['filesListObj'][$tpm6] = {
                'md5': czg3,
                'readyUrl': gxmc
            }, aev1dy['fs']['writeFile']({
                'filePath': aev1dy['fileNativeDir'] + '/' + aev1dy['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](aev1dy['filesListObj']),
                'success': function (c5m0) {
                    console['log']('写入测试测试成功：', c5m0);
                },
                'fail': function (aei1) {
                    console['log']('写入测试测试失败：', aei1);
                }
            });
        }, aev1dy['existDir'] = function (rfk2u, tc5x3g) {
            aev1dy['fs']['mkdir']({
                'dirPath': rfk2u,
                'success': function (_qol82) {
                    tc5x3g != null && tc5x3g['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (ou28_f) {
                    if (ou28_f['errMsg']['indexOf']('file already exists') != -0x1) aev1dy['readSync'](aev1dy['fileListName'], 'utf8', tc5x3g);else tc5x3g != null && tc5x3g['runWith']([0x1, ou28_f]);
                }
            });
        }, aev1dy['readSync'] = function (vyspw7, rkxg3z, dya1ev, e4i9) {
            rkxg3z === void 0x0 && (rkxg3z = 'ascill'), e4i9 === void 0x0 && (e4i9 = '');
            var mtcxg5 = aev1dy['getFileNativePath'](vyspw7),
                g5c3zx;
            try {
                g5c3zx = aev1dy['fs']['readFileSync'](mtcxg5), dya1ev != null && dya1ev['runWith']([0x0, { 'data': g5c3zx }]);
            } catch (bqo) {
                dya1ev != null && dya1ev['runWith']([0x1]);
            }
        }, aev1dy['readCache'] = function () {}, aev1dy['writeCache'] = function (rgkx) {
            var rk2zuf = readyUrl['split']('?')[0x0];
            aev1dy['filesListObj'][rk2zuf] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, aev1dy['fs']['writeFile']({
                'filePath': aev1dy['fileNativeDir'] + '/' + aev1dy['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](aev1dy['filesListObj']),
                'success': function (y7w$sp) {},
                'fail': function (u_qo28) {}
            });
        }, aev1dy['setNativeFileDir'] = function (r3) {
            aev1dy['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + r3;
        }, aev1dy['filesListObj'] = {}, aev1dy['fileNativeDir'] = null, aev1dy['fileListName'] = 'layaairfiles.txt', aev1dy['ziyuFileData'] = {}, spyv(aev1dy, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), aev1dy;
    }(g3kzxc),
        ws70p$ = function (ad4ev1) {
        function _b8l() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], _b8l['__super']['call'](this), this['_sound'] = _b8l['_createSound'](), this['_chanell'] = new ljqb8o(this['_sound']);
        }
        d41av(_b8l, 'laya.wx.mini.MiniSound', ad4ev1);
        var u_28oq = _b8l['prototype'];
        return u_28oq['load'] = function (wy$7sp) {
            var m0$tp6 = this;
            wy$7sp = m$t06p['formatURL'](wy$7sp), this['url'] = wy$7sp;
            if (_b8l['_audioCache'][wy$7sp]) {
                this['event']('complete');
                return;
            }
            function zufr() {
                if (_b8l['_null'] != undefined) m0$tp6['_sound']['onCanplay'](_b8l['_null']), m0$tp6['_sound']['onError'](_b8l['_null']);else try {
                    m0$tp6['_sound']['onCanplay'](null), m0$tp6['_sound']['onError'](null), _b8l['_null'] = null;
                } catch (f2u_rk) {
                    console['warn']('[wxmini] _clearSound:' + f2u_rk), m0$tp6['_sound']['onCanplay'](dav14), m0$tp6['_sound']['onError'](dav14), _b8l['_null'] = dav14;
                }
            }
            function aw7dv() {
                ydwa7['loaded'] = !![], ydwa7['event']('complete'), _b8l['_audioCache'][ydwa7['url']] = ydwa7;
            }
            function vws7d(ywda7) {
                console['error']('errCode=' + ywda7['errCode'] + '  errMsg=' + ywda7['errMsg']), ydwa7['event']('error');
            }
            function dav14() {}
            this['_sound']['onCanplay'](aw7dv), this['_sound']['onError'](vws7d), this['_sound']['src'] = wy$7sp;
            var ydwa7 = this;
        }, u_28oq['play'] = function (zkf3ur, w7yps) {
            zkf3ur === void 0x0 && (zkf3ur = 0x0), w7yps === void 0x0 && (w7yps = 0x0);
            var hn94e, d14ev;
            if (this['url'] == kf2ru_['_tMusic']) {
                if (!_b8l['_musicAudio']) _b8l['_musicAudio'] = this['_sound'];
                hn94e = _b8l['_musicAudio'], d14ev = this['_chanell'];
            } else hn94e = this['_sound'], d14ev = this['_chanell'];
            return hn94e['src'] = this['url'], hn94e['startTime'] = 0x0, d14ev['isStopped'] && (d14ev['url'] = this['url'], d14ev['loops'] = w7yps, d14ev['startTime'] = zkf3ur, d14ev['play'](), kf2ru_['addChannel'](d14ev)), d14ev;
        }, u_28oq['dispose'] = function () {
            var m5cgx = _b8l['_audioCache'][this['url']];
            m5cgx && (m5cgx['src'] = '', delete _b8l['_audioCache'][this['url']]);
        }, bqo_8l(0x0, u_28oq, 'duration', function () {
            return this['_sound']['duration'];
        }), _b8l['_createSound'] = function () {
            _b8l['_id']++;
            var wavd7 = q_b8o['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return wavd7;
        }, _b8l['_musicAudio'] = null, _b8l['_id'] = 0x0, _b8l['_audioCache'] = {}, _b8l['_null'] = undefined, _b8l;
    }(g3kzxc),
        ljqb8o = function (g6m5) {
        function tgxm5(c3gz) {
            this['_audio'] = null, this['_onEnd'] = null, tgxm5['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = c3gz, this['_onEnd'] = y$p7['bind'](this['__onEnd'], this), c3gz['onEnded'](this['_onEnd']);
        }
        d41av(tgxm5, 'laya.wx.mini.MiniSoundChannel', g6m5);
        var _2u8qo = tgxm5['prototype'];
        return _2u8qo['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (gz5c['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, _2u8qo['__onNull'] = function () {}, _2u8qo['play'] = function () {
            this['isStopped'] = ![], kf2ru_['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, _2u8qo['stop'] = function () {
            this['isStopped'] = !![], kf2ru_['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, _2u8qo['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, _2u8qo['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], kf2ru_['addChannel'](this), this['_audio']['play']();
        }, bqo_8l(0x0, _2u8qo, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), bqo_8l(0x0, _2u8qo, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), bqo_8l(0x0, _2u8qo, 'volume', function () {
            return 0x1;
        }, function (r_kfu2) {}), tgxm5['_null'] = undefined, tgxm5;
    }($7yps),
        a41evd = function () {
        function l2o8() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = q_b8o['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        d41av(l2o8, 'laya.wx.mini.MiniVideo');
        var i41a = l2o8['prototype'];
        return i41a['on'] = function (i4a1h, t6m5c0, cz3xkg) {
            if (i4a1h == 'loadedmetadata') this['onPlayFunc'] = cz3xkg['bind'](t6m5c0), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else i4a1h == 'ended' && (this['onEndedFunC'] = cz3xkg['bind'](t6m5c0), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, i41a['onTimeUpdateFunc'] = function (kcgzx3) {
            this['position'] = kcgzx3['position'], this['_duration'] = kcgzx3['duration'];
        }, i41a['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, i41a['onended'] = function (ehi, eda14) {
            this['onEndedFunC'] = eda14['bind'](ehi), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, i41a['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, i41a['off'] = function (bq_l8o, rg3k, q_82) {
            if (bq_l8o == 'loadedmetadata') this['onPlayFunc'] = q_82['bind'](rg3k), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else bq_l8o == 'ended' && (this['onEndedFunC'] = q_82['bind'](rg3k), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, i41a['load'] = function (w6$p0) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = w6$p0;
        }, i41a['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, i41a['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, i41a['size'] = function (s$0wp6, a4hi) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = s$0wp6, this['videoElement']['height'] = a4hi;
        }, i41a['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, i41a['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, bqo_8l(0x0, i41a, 'duration', function () {
            return this['_duration'];
        }), bqo_8l(0x0, i41a, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (xfrkz3) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = xfrkz3;
        }), bqo_8l(0x0, i41a, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), bqo_8l(0x0, i41a, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), bqo_8l(0x0, i41a, 'ended', function () {
            return this['videoend'];
        }), bqo_8l(0x0, i41a, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function ($0ms6p) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = $0ms6p;
        }), bqo_8l(0x0, i41a, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (a4d1) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = a4d1;
        }), bqo_8l(0x0, i41a, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (lq82_) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = lq82_;
        }), bqo_8l(0x0, i41a, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), bqo_8l(0x0, i41a, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (xt3c5) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = xt3c5;
        }), bqo_8l(0x0, i41a, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (pw7svy) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = pw7svy;
        }), bqo_8l(0x0, i41a, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), bqo_8l(0x0, i41a, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (ie94h) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = ie94h;
        }), bqo_8l(0x0, i41a, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (t3x5c) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = t3x5c;
        }), bqo_8l(0x0, i41a, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (ad1) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = ad1;
        }), l2o8;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var hei4 in Laya) {
        var lo_q28 = Laya[hei4];
        lo_q28 && lo_q28['__isclass'] && (exports[hei4] = lo_q28);
    }
});