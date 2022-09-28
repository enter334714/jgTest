var P = wx.$y;
(function (window, document, wkf2tp) {
    var ond = wkf2tp['un'],
        te16zv = wkf2tp['uns'],
        b4r37 = wkf2tp['static'],
        rslcm = wkf2tp['class'],
        qy_gl = wkf2tp['getset'],
        gqysl = wkf2tp['__newvec'],
        nqygx8 = laya['utils']['Browser'],
        _qxsyg = laya['events']['Event'],
        qx8nd = laya['events']['EventDispatcher'],
        o$wkf = laya['resource']['HTMLImage'],
        qysg_ = laya['utils']['Handler'],
        kf2$p = laya['display']['Input'],
        $f2k = laya['net']['Loader'],
        sx_gy = laya['maths']['Matrix'],
        ewtz = laya['renders']['Render'],
        wzp = laya['utils']['RunDriver'],
        onx$8d = laya['media']['Sound'],
        pzt2w = laya['media']['SoundChannel'],
        ptz2fw = laya['media']['SoundManager'],
        qxdg8n = laya['display']['Stage'],
        ok2fw$ = laya['net']['URL'],
        wzetp6 = laya['utils']['Utils'],
        w6tzp = function () {
        function zwpt2() {}
        return rslcm(zwpt2, 'laya.wx.mini.MiniAdpter'), zwpt2['getJson'] = function (biu3a4) {
            return JSON['parse'](biu3a4);
        }, zwpt2['init'] = function (scrml7, gdxon) {
            scrml7 === void 0x0 && (scrml7 = ![]), gdxon === void 0x0 && (gdxon = ![]);
            if (zwpt2['_inited']) return;
            zwpt2['window'] = window;
            if (zwpt2['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            zwpt2['_inited'] = !![], zwpt2['isZiYu'] = gdxon, zwpt2['isPosMsgYu'] = scrml7, zwpt2['EnvConfig'] = {}, !zwpt2['isZiYu'] && (fpktw2['setNativeFileDir']('/layaairGame'), fpktw2['existDir'](fpktw2['fileNativeDir'], qysg_['create'](zwpt2, zwpt2['onMkdirCallBack']))), zwpt2['window']['focus'] = function () {}, wkf2tp['getUrlPath'] = function () {}, zwpt2['window']['logtime'] = function (r3m) {}, zwpt2['window']['alertTimeLog'] = function (rmcl7) {}, zwpt2['window']['resetShareInfo'] = function () {}, zwpt2['window']['CanvasRenderingContext2D'] = function () {}, zwpt2['window']['CanvasRenderingContext2D']['prototype'] = zwpt2['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], zwpt2['window']['document']['body']['appendChild'] = function () {}, zwpt2['EnvConfig']['pixelRatioInt'] = 0x0, wzp['getPixelRatio'] = zwpt2['pixelRatio'], zwpt2['_preCreateElement'] = nqygx8['createElement'], nqygx8['createElement'] = zwpt2['createElement'], wzp['createShaderCondition'] = zwpt2['createShaderCondition'], wzetp6['parseXMLFromString'] = zwpt2['parseXMLFromString'], kf2$p['_createInputElement'] = b4im3['_createInputElement'], zwpt2['EnvConfig']['load'] = $f2k['prototype']['load'], $f2k['prototype']['load'] = ygx_qn['prototype']['load'], zwpt2['isZiYu'] && scrml7 && wx['onMessage'](function (d2ko$f) {
                d2ko$f['isLoad'] && (fpktw2['ziyuFileData'][d2ko$f['url']] = d2ko$f['data']);
            });
        }, zwpt2['onMkdirCallBack'] = function (ptwe, xgny) {
            if (!ptwe) fpktw2['filesListObj'] = JSON['parse'](xgny['data']);
        }, zwpt2['pixelRatio'] = function () {
            if (!zwpt2['EnvConfig']['pixelRatioInt']) try {
                var _gyxsq = wx['getSystemInfoSync']();
                return zwpt2['EnvConfig']['pixelRatioInt'] = _gyxsq['pixelRatio'], _gyxsq = _gyxsq, _gyxsq['pixelRatio'];
            } catch (ngyqx8) {}
            return zwpt2['EnvConfig']['pixelRatioInt'];
        }, zwpt2['createElement'] = function (pwt62z) {
            if (pwt62z == 'canvas') {
                var crml7s;
                return zwpt2['idx'] == 0x1 ? zwpt2['isZiYu'] ? (crml7s = sharedCanvas, crml7s['style'] = {}) : crml7s = window['canvas'] : crml7s = window['wx']['createCanvas'](), zwpt2['idx']++, crml7s;
            } else {
                if (pwt62z == 'textarea' || pwt62z == 'input') return zwpt2['onCreateInput'](pwt62z);else {
                    if (pwt62z == 'div') {
                        var je6v10 = zwpt2['_preCreateElement'](pwt62z);
                        return je6v10['contains'] = function (v91) {
                            return null;
                        }, je6v10['removeChild'] = function (ko8d$n) {}, je6v10;
                    } else return zwpt2['_preCreateElement'](pwt62z);
                }
            }
        }, zwpt2['onCreateInput'] = function (_srly) {
            var x_ysg = zwpt2['_preCreateElement'](_srly);
            return x_ysg['focus'] = b4im3['wxinputFocus'], x_ysg['blur'] = b4im3['wxinputblur'], x_ysg['style'] = {}, x_ysg['value'] = 0x0, x_ysg['parentElement'] = {}, x_ysg['placeholder'] = {}, x_ysg['type'] = {}, x_ysg['setColor'] = function (fw2k$o) {}, x_ysg['setType'] = function (lsy_rc) {}, x_ysg['setFontFace'] = function (evpt6z) {}, x_ysg['addEventListener'] = function (y8ngq) {}, x_ysg['contains'] = function (rmbl) {
                return null;
            }, x_ysg['removeChild'] = function (sqyxg_) {}, x_ysg;
        }, zwpt2['createShaderCondition'] = function (e60vz1) {
            var scrm7 = this,
                wz6t = function () {
                var kd2of$ = e60vz1;
                return scrm7[e60vz1['replace']('this.', '')];
            };
            return wz6t;
        }, zwpt2['EnvConfig'] = null, zwpt2['window'] = null, zwpt2['_preCreateElement'] = null, zwpt2['_inited'] = ![], zwpt2['wxRequest'] = null, zwpt2['systemInfo'] = null, zwpt2['version'] = '0.0.1', zwpt2['isZiYu'] = ![], zwpt2['isPosMsgYu'] = ![], zwpt2['parseXMLFromString'] = function (_yxng) {
            var jh51, ej0v19;
            _yxng = _yxng['replace'](/>\s+</g, '><');
            try {
                jh51 = new window['Parser']['DOMParser']()['parseFromString'](_yxng, 'text/xml');
            } catch (e1tzv) {
                throw '需要引入xml解析库文件';
            }
            return jh51;
        }, zwpt2['idx'] = 0x1, zwpt2;
    }(),
        o2d$f = function () {
        function onk$d8() {}
        rslcm(onk$d8, 'laya.wx.mini.MiniImage');
        var ngq_y = onk$d8['prototype'];
        return ngq_y['_loadImage'] = function (qsly_) {
            var u437ib = this,
                vz6pet = ![];
            qsly_['indexOf']('layaNativeDir/') == -0x1 && (vz6pet = !![], qsly_ = ok2fw$['formatURL'](qsly_));
            if (!fpktw2['getFileInfo'](qsly_)) {
                if (qsly_['indexOf']('http://') != -0x1 || qsly_['indexOf']('https://') != -0x1) fpktw2['downImg'](qsly_, new qysg_(onk$d8, onk$d8['onDownImgCallBack'], [qsly_, u437ib]), qsly_);else onk$d8['onCreateImage'](qsly_, u437ib, !![]);
            } else onk$d8['onCreateImage'](qsly_, u437ib, !vz6pet);
        }, onk$d8['onDownImgCallBack'] = function (ve1, dngq8x, gy_xq) {
            if (!gy_xq) onk$d8['onCreateImage'](ve1, dngq8x);else dngq8x['onError'](null);
        }, onk$d8['onCreateImage'] = function ($wk2fo, cys_lq, n8gdox) {
            n8gdox === void 0x0 && (n8gdox = ![]);
            var t6zvep;
            if (!n8gdox) {
                var ys_lcr = fpktw2['getFileInfo']($wk2fo),
                    pzve6 = ys_lcr['md5'];
                t6zvep = fpktw2['getFileNativePath'](pzve6);
            } else t6zvep = $wk2fo;
            if (cys_lq['imgCache'] == null) cys_lq['imgCache'] = {};
            var qyn8g;
            function i4ub37() {
                qyn8g['onload'] = null, qyn8g['onerror'] = null, delete cys_lq['imgCache'][$wk2fo];
            }
            ;
            var kwf = function () {
                i4ub37(), cys_lq['onLoaded'](qyn8g);
            },
                _xys = function () {
                i4ub37(), cys_lq['event']('error', 'Load image failed');
            };
            cys_lq['_type'] == 'nativeimage' ? (qyn8g = new nqygx8['window']['Image'](), qyn8g['crossOrigin'] = '', qyn8g['onload'] = kwf, qyn8g['onerror'] = _xys, qyn8g['src'] = t6zvep, cys_lq['imgCache'][$wk2fo] = qyn8g) : new o$wkf['create'](t6zvep, {
                'onload': kwf,
                'onerror': _xys,
                'onCreate': function (f$odk2) {
                    qyn8g = f$odk2, cys_lq['imgCache'][$wk2fo] = f$odk2;
                }
            });
        }, onk$d8;
    }(),
        b4im3 = function () {
        function pt2w() {}
        return rslcm(pt2w, 'laya.wx.mini.MiniInput'), pt2w['_createInputElement'] = function () {
            kf2$p['_initInput'](kf2$p['area'] = nqygx8['createElement']('textarea')), kf2$p['_initInput'](kf2$p['input'] = nqygx8['createElement']('input')), kf2$p['inputContainer'] = nqygx8['createElement']('div'), kf2$p['inputContainer']['style']['position'] = 'absolute', kf2$p['inputContainer']['style']['zIndex'] = 0x186a0, nqygx8['container']['appendChild'](kf2$p['inputContainer']), kf2$p['inputContainer']['setPos'] = function (dq8gn, sly_cq) {
                kf2$p['inputContainer']['style']['left'] = dq8gn + 'px', kf2$p['inputContainer']['style']['top'] = sly_cq + 'px';
            }, wkf2tp['stage']['on']('resize', null, pt2w['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (d8qgnx) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), ptz2fw['_soundClass'] = cm_l, ptz2fw['_musicClass'] = cm_l, window['_videoClass'] = dfo$8;
        }, pt2w['_onStageResize'] = function () {
            var qn8y = wkf2tp['stage']['_canvasTransform']['identity']();
            qn8y['scale'](nqygx8['width'] / ewtz['canvas']['width'] / wzp['getPixelRatio'](), nqygx8['height'] / ewtz['canvas']['height'] / wzp['getPixelRatio']());
        }, pt2w['wxinputFocus'] = function ($2okw) {
            var nqxg_y = kf2$p['inputElement']['target'];
            if (nqxg_y && !nqxg_y['editable']) return;
            w6tzp['window']['wx']['offKeyboardConfirm'](), w6tzp['window']['wx']['offKeyboardInput'](), w6tzp['window']['wx']['showKeyboard']({
                'defaultValue': nqxg_y['text'],
                'maxLength': nqxg_y['maxChars'],
                'multiple': nqxg_y['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (t1v6ez) {},
                'fail': function (_cmrsl) {}
            }), w6tzp['window']['wx']['onKeyboardConfirm'](function (bm74r) {
                var wkt2fp = bm74r ? bm74r['value'] : '';
                nqxg_y['text'] = wkt2fp, nqxg_y['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), w6tzp['window']['wx']['onKeyboardInput'](function (ylcr_s) {
                var $o8dkn = ylcr_s ? ylcr_s['value'] : '';
                if (!nqxg_y['multiline']) {
                    if ($o8dkn['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                nqxg_y['text'] = $o8dkn, nqxg_y['event']('input');
            });
        }, pt2w['inputEnter'] = function () {
            kf2$p['inputElement']['target']['focus'] = ![];
        }, pt2w['wxinputblur'] = function () {
            pt2w['hideKeyboard']();
        }, pt2w['hideKeyboard'] = function () {
            w6tzp['window']['wx']['offKeyboardConfirm'](), w6tzp['window']['wx']['offKeyboardInput'](), w6tzp['window']['wx']['hideKeyboard']({
                'success': function (c7rlbm) {
                    console['log']('隐藏键盘');
                },
                'fail': function (g_sylq) {
                    console['log']('隐藏键盘出错:' + (g_sylq ? g_sylq['errMsg'] : ''));
                }
            });
        }, pt2w;
    }(),
        ygx_qn = function () {
        function kp2tf() {}
        rslcm(kp2tf, 'laya.wx.mini.MiniLoader');
        var ptzfw = kp2tf['prototype'];
        return ptzfw['load'] = function (o$k2fd, nd8$o, ngdx, ib37, i73b) {
            ngdx === void 0x0 && (ngdx = !![]), i73b === void 0x0 && (i73b = ![]);
            var csr_ly = this;
            csr_ly['_url'] = o$k2fd;
            if (o$k2fd['indexOf']('data:image') === 0x0) csr_ly['_type'] = nd8$o = 'image';else csr_ly['_type'] = nd8$o || (nd8$o = csr_ly['getTypeFromUrl'](o$k2fd));
            csr_ly['_cache'] = ngdx, csr_ly['_data'] = null;
            var lqg_ = 'ascii';
            if (o$k2fd['indexOf']('.fnt') != -0x1) lqg_ = 'utf8';else nd8$o == 'arraybuffer' && (lqg_ = '');
            ;
            var _qgy = wzetp6['getFileExtension'](o$k2fd);
            if (kp2tf['_fileTypeArr']['indexOf'](_qgy) != -0x1) w6tzp['EnvConfig']['load']['call'](this, o$k2fd, nd8$o, ngdx, ib37, i73b);else {
                if (!fpktw2['getFileInfo'](o$k2fd)) {
                    if (o$k2fd['indexOf']('layaNativeDir/') != -0x1) {
                        if (w6tzp['isZiYu']) {
                            var xd8o$n = fpktw2['ziyuFileData'][o$k2fd];
                            csr_ly['onLoaded'](xd8o$n);
                            return;
                        } else {
                            cosnole['log']('read read'), fpktw2['read'](o$k2fd, lqg_, new qysg_(kp2tf, kp2tf['onReadNativeCallBack'], [lqg_, o$k2fd, nd8$o, ngdx, ib37, i73b, csr_ly]));
                            return;
                        }
                    }
                    if (ok2fw$['rootPath'] == '') var j9h051 = o$k2fd;else j9h051 = o$k2fd['split'](ok2fw$['rootPath'])[0x0];
                    o$k2fd['indexOf']('http://') != -0x1 || o$k2fd['indexOf']('https://') != -0x1 ? w6tzp['EnvConfig']['load']['call'](csr_ly, o$k2fd, nd8$o, ngdx, ib37, i73b) : fpktw2['readFile'](j9h051, lqg_, new qysg_(kp2tf, kp2tf['onReadNativeCallBack'], [lqg_, o$k2fd, nd8$o, ngdx, ib37, i73b, csr_ly]), o$k2fd);
                } else w6tzp['EnvConfig']['load']['call'](this, o$k2fd, nd8$o, ngdx, ib37, i73b);
            }
        }, ptzfw['resMgrLoad'] = function ($pk2fw, o$nkd8, _qysxg, hj19v, zftp2w, ui4a3b, t2zpf) {
            _qysxg === void 0x0 && (_qysxg = 0x0), hj19v === void 0x0 && (hj19v = ![]), zftp2w === void 0x0 && (zftp2w = ![]), ui4a3b === void 0x0 && (ui4a3b = 0x0), t2zpf === void 0x0 && (t2zpf = 0x3), $pk2fw['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', $pk2fw), w6tzp['EnvConfig']['resMgrLoad']($pk2fw, ($8nok, k2fpw, _sxyg) => {
                kp2tf['prototype']['resMgrLoadCallBack']($8nok, k2fpw, _sxyg, o$nkd8);
            }, _qysxg, hj19v, zftp2w, ui4a3b, t2zpf);
        }, ptzfw['resMgrLoadCallBack'] = function (vj901e, dog8xn, xnyg8, ptzv6e) {
            console['log']('buff:::', vj901e, xnyg8, fpktw2['fileNativeDir'] + '///' + fpktw2['fileListName']), ptzv6e(vj901e, dog8xn, xnyg8);
        }, ptzfw['clearRes'] = function (vet1z, c_ls) {
            c_ls === void 0x0 && (c_ls = ![]);
            var ygq8nx = this;
            ygq8nx['clearRes'](vet1z, c_ls);
            var zve6p = fpktw2['getFileInfo'](vet1z);
            if (zve6p && (vet1z['indexOf']('http://') != -0x1 || vet1z['indexOf']('https://') != -0x1)) {
                var fko$ = zve6p['md5'],
                    yxn = fpktw2['getFileNativePath'](fko$);
                fpktw2['remove'](yxn);
            }
        }, kp2tf['onReadNativeCallBack'] = function (vez6t1, c_rlms, fpz2t, j061ve, csql, o8nx, on8dgx, ql_scy, n$o8x) {
            j061ve === void 0x0 && (j061ve = !![]), o8nx === void 0x0 && (o8nx = ![]), ql_scy === void 0x0 && (ql_scy = 0x0);
            if (!ql_scy) {
                var bclmr;
                if (fpz2t == 'json' || fpz2t == 'atlas') bclmr = w6tzp['getJson'](n$o8x['data']);else fpz2t == 'xml' ? bclmr = wzetp6['parseXMLFromString'](n$o8x['data']) : bclmr = n$o8x['data'];
                on8dgx['onLoaded'](bclmr), !w6tzp['isZiYu'] && w6tzp['isPosMsgYu'] && fpz2t != 'arraybuffer' && wx['postMessage']({
                    'url': c_rlms,
                    'data': bclmr,
                    'isLoad': !![]
                });
            } else ql_scy == 0x1 && w6tzp['EnvConfig']['load']['call'](on8dgx, c_rlms, fpz2t, j061ve, csql, o8nx);
        }, b4r37(kp2tf, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), kp2tf;
    }(),
        fpktw2 = function (h0519j) {
        function rmc73b() {
            rmc73b['__super']['call'](this);
            ;
        }
        return rslcm(rmc73b, 'laya.wx.mini.MiniFileMgr', h0519j), rmc73b['isLoadFile'] = function (tkfp) {
            return rmc73b['_fileTypeArr']['indexOf'](tkfp) != -0x1 ? !![] : ![];
        }, rmc73b['getFileInfo'] = function (e1vt6z) {
            var cr7lmb = e1vt6z['split']('?')[0x0],
                t2wpf = rmc73b['filesListObj'][cr7lmb];
            if (t2wpf == null) return null;else return t2wpf;
            return null;
        }, rmc73b['onFileUpdate'] = function (tv1ez6, fok2$w) {
            var rc_sl = tv1ez6['split']('/'),
                kwp2t = rc_sl[rc_sl['length'] - 0x1],
                lcsyr = rmc73b['getFileInfo'](fok2$w);
            if (lcsyr == null) rmc73b['onSaveFile'](fok2$w, kwp2t);else {
                if (lcsyr['readyUrl'] != fok2$w) rmc73b['remove'](kwp2t, fok2$w);
            }
        }, rmc73b['exits'] = function (_cyqsl, f$o2d) {
            var $2fokw = rmc73b['getFileNativePath'](_cyqsl);
            rmc73b['fs']['getFileInfo']({
                'filePath': $2fokw,
                'success': function (rsl7c) {
                    f$o2d != null && f$o2d['runWith']([0x0, rsl7c]);
                },
                'fail': function (x8qndg) {
                    f$o2d != null && f$o2d['runWith']([0x1, x8qndg]);
                }
            });
        }, rmc73b['read'] = function (rcs_y, n_g, ok8df$, dox8$) {
            n_g === void 0x0 && (n_g = 'ascill'), dox8$ === void 0x0 && (dox8$ = '');
            var z2fp;
            dox8$ != '' ? z2fp = rmc73b['getFileNativePath'](rcs_y) : z2fp = rcs_y, rmc73b['fs']['readFile']({
                'filePath': z2fp,
                'encoding': n_g,
                'success': function (yc_lsr) {
                    ok8df$ != null && ok8df$['runWith']([0x0, yc_lsr]);
                },
                'fail': function (x8od$n) {
                    if (x8od$n && dox8$ != '') rmc73b['down'](dox8$, n_g, ok8df$, dox8$);else ok8df$ != null && ok8df$['runWith']([0x1]);
                }
            });
        }, rmc73b['readNativeFile'] = function (n8xdgo, r7c) {
            rmc73b['fs']['readFile']({
                'filePath': n8xdgo,
                'encoding': '',
                'success': function (te6wz) {
                    r7c != null && r7c['runWith']([0x0]);
                },
                'fail': function (qn_xyg) {
                    r7c != null && r7c['runWith']([0x1]);
                }
            });
        }, rmc73b['down'] = function (vztp, o2$wf, pf2zwt, xgyn8) {
            o2$wf === void 0x0 && (o2$wf = 'ascill'), xgyn8 === void 0x0 && (xgyn8 = '');
            var ysc_rl = rmc73b['getFileNativePath'](xgyn8),
                lmc7br = rmc73b['wxdown']({
                'url': vztp,
                'filePath': ysc_rl,
                'success': function (dxno$8) {
                    if (dxno$8['statusCode'] === 0xc8) rmc73b['readFile'](dxno$8['filePath'], o2$wf, pf2zwt, xgyn8);
                },
                'fail': function (x8$nod) {
                    pf2zwt != null && pf2zwt['runWith']([0x1, x8$nod]);
                }
            });
            lmc7br['onProgressUpdate'](function (dx8ngq) {
                pf2zwt != null && pf2zwt['runWith']([0x2, dx8ngq['progress']]);
            });
        }, rmc73b['readFile'] = function (i3u4ab, wzptf, sqylg_, ng_q) {
            wzptf === void 0x0 && (wzptf = 'ascill'), ng_q === void 0x0 && (ng_q = ''), rmc73b['fs']['readFile']({
                'filePath': i3u4ab,
                'encoding': wzptf,
                'success': function (dgnox) {
                    if (i3u4ab['indexOf']('http://') != -0x1 || i3u4ab['indexOf']('https://') != -0x1) rmc73b['onFileUpdate'](i3u4ab, ng_q);
                    sqylg_ != null && sqylg_['runWith']([0x0, dgnox]);
                },
                'fail': function (smclr) {
                    if (smclr) sqylg_ != null && sqylg_['runWith']([0x1, smclr]);
                }
            });
        }, rmc73b['downImg'] = function (y_gqs, pvez, zw2tpf) {
            zw2tpf === void 0x0 && (zw2tpf = '');
            var qg_x = rmc73b['wxdown']({
                'url': y_gqs,
                'success': function (sqg_x) {
                    sqg_x['statusCode'] === 0xc8 && rmc73b['copyFile'](sqg_x['tempFilePath'], zw2tpf, pvez);
                },
                'fail': function (kwp$2) {
                    pvez != null && pvez['runWith']([0x1, kwp$2]);
                }
            });
        }, rmc73b['copyFile'] = function (e10vj6, $n8oxd, k2owf) {
            var gxqs = e10vj6['split']('/'),
                i743bu = gxqs[gxqs['length'] - 0x1],
                wpfz2 = $n8oxd['split']('?')[0x0],
                yq_xsg = rmc73b['getFileInfo']($n8oxd),
                ms_rl = rmc73b['getFileNativePath'](i743bu);
            rmc73b['fs']['copyFile']({
                'srcPath': e10vj6,
                'destPath': ms_rl,
                'success': function (c7lbmr) {
                    if (!yq_xsg) rmc73b['onSaveFile']($n8oxd, i743bu), k2owf != null && k2owf['runWith']([0x0]);else {
                        if (yq_xsg['readyUrl'] != $n8oxd) rmc73b['remove'](i743bu, $n8oxd, k2owf);
                    }
                },
                'fail': function (m7rlb) {
                    k2owf != null && k2owf['runWith']([0x1, m7rlb]);
                }
            });
        }, rmc73b['getFileNativePath'] = function (rbm4) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + rbm4;
        }, rmc73b['remove'] = function (v1z06e, sl_yr, b3mi4) {
            sl_yr === void 0x0 && (sl_yr = '');
            var yn_x = rmc73b['getFileInfo'](sl_yr),
                iu7b3 = rmc73b['getFileNativePath'](yn_x['md5']);
            wkf2tp['loader']['clearRes'](yn_x['readyUrl']), rmc73b['fs']['unlink']({
                'filePath': iu7b3,
                'success': function (z1et) {
                    if (sl_yr != '') rmc73b['onSaveFile'](sl_yr, v1z06e);
                    b3mi4 != null && b3mi4['runWith']([0x0]);
                },
                'fail': function (qyxng8) {}
            });
        }, rmc73b['onSaveFile'] = function (pfwtz, m7srcl) {
            var mc_rls = pfwtz['split']('?')[0x0];
            rmc73b['filesListObj'][mc_rls] = {
                'md5': m7srcl,
                'readyUrl': pfwtz
            }, rmc73b['fs']['writeFile']({
                'filePath': rmc73b['fileNativeDir'] + '/' + rmc73b['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](rmc73b['filesListObj']),
                'success': function (gy_qxs) {
                    console['log']('写入测试测试成功：', gy_qxs);
                },
                'fail': function (ze6p) {
                    console['log']('写入测试测试失败：', ze6p);
                }
            });
        }, rmc73b['existDir'] = function (t2zwfp, _sqlcy) {
            rmc73b['fs']['mkdir']({
                'dirPath': t2zwfp,
                'success': function (_mrscl) {
                    _sqlcy != null && _sqlcy['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (wte6z) {
                    if (wte6z['errMsg']['indexOf']('file already exists') != -0x1) rmc73b['readSync'](rmc73b['fileListName'], 'utf8', _sqlcy);else _sqlcy != null && _sqlcy['runWith']([0x1, wte6z]);
                }
            });
        }, rmc73b['readSync'] = function ($n8d, ndgxo, n$odx, q_yx) {
            ndgxo === void 0x0 && (ndgxo = 'ascill'), q_yx === void 0x0 && (q_yx = '');
            var qng_x = rmc73b['getFileNativePath']($n8d),
                f2tpwk;
            try {
                f2tpwk = rmc73b['fs']['readFileSync'](qng_x), n$odx != null && n$odx['runWith']([0x0, { 'data': f2tpwk }]);
            } catch (tzfp2w) {
                n$odx != null && n$odx['runWith']([0x1]);
            }
        }, rmc73b['readCache'] = function () {}, rmc73b['writeCache'] = function (h19j0v) {
            var d$ok8f = readyUrl['split']('?')[0x0];
            rmc73b['filesListObj'][d$ok8f] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, rmc73b['fs']['writeFile']({
                'filePath': rmc73b['fileNativeDir'] + '/' + rmc73b['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](rmc73b['filesListObj']),
                'success': function (y_xs) {},
                'fail': function (zetp6) {}
            });
        }, rmc73b['setNativeFileDir'] = function ($xodn) {
            rmc73b['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + $xodn;
        }, rmc73b['filesListObj'] = {}, rmc73b['fileNativeDir'] = null, rmc73b['fileListName'] = 'layaairfiles.txt', rmc73b['ziyuFileData'] = {}, b4r37(rmc73b, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), rmc73b;
    }(qx8nd),
        cm_l = function (tfwz) {
        function hv01j9() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], hv01j9['__super']['call'](this), this['_sound'] = hv01j9['_createSound'](), this['_chanell'] = new qg_sxy(this['_sound']);
        }
        rslcm(hv01j9, 'laya.wx.mini.MiniSound', tfwz);
        var i7mb3 = hv01j9['prototype'];
        return i7mb3['load'] = function (sl_yg) {
            var r7b43 = this;
            sl_yg = ok2fw$['formatURL'](sl_yg), this['url'] = sl_yg;
            if (hv01j9['_audioCache'][sl_yg]) {
                this['event']('complete');
                return;
            }
            function e09v1j() {
                if (hv01j9['_null'] != undefined) r7b43['_sound']['onCanplay'](hv01j9['_null']), r7b43['_sound']['onError'](hv01j9['_null']);else try {
                    r7b43['_sound']['onCanplay'](null), r7b43['_sound']['onError'](null), hv01j9['_null'] = null;
                } catch (fwok$2) {
                    console['warn']('[wxmini] _clearSound:' + fwok$2), r7b43['_sound']['onCanplay'](kf2p), r7b43['_sound']['onError'](kf2p), hv01j9['_null'] = kf2p;
                }
            }
            function kfod8$() {
                pzwe6['loaded'] = !![], pzwe6['event']('complete'), hv01j9['_audioCache'][pzwe6['url']] = pzwe6;
            }
            function jh01(k2od$) {
                console['error']('errCode=' + k2od$['errCode'] + '  errMsg=' + k2od$['errMsg']), pzwe6['event']('error');
            }
            function kf2p() {}
            this['_sound']['onCanplay'](kfod8$), this['_sound']['onError'](jh01), this['_sound']['src'] = sl_yg;
            var pzwe6 = this;
        }, i7mb3['play'] = function (k8o$, b7u43) {
            k8o$ === void 0x0 && (k8o$ = 0x0), b7u43 === void 0x0 && (b7u43 = 0x0);
            var gsqly_, fwk2o$;
            if (this['url'] == ptz2fw['_tMusic']) {
                if (!hv01j9['_musicAudio']) hv01j9['_musicAudio'] = this['_sound'];
                gsqly_ = hv01j9['_musicAudio'], fwk2o$ = this['_chanell'];
            } else gsqly_ = this['_sound'], fwk2o$ = this['_chanell'];
            return gsqly_['src'] = this['url'], gsqly_['startTime'] = 0x0, fwk2o$['isStopped'] && (fwk2o$['url'] = this['url'], fwk2o$['loops'] = b7u43, fwk2o$['startTime'] = k8o$, fwk2o$['play'](), ptz2fw['addChannel'](fwk2o$)), fwk2o$;
        }, i7mb3['dispose'] = function () {
            var auib = hv01j9['_audioCache'][this['url']];
            auib && (auib['src'] = '', delete hv01j9['_audioCache'][this['url']]);
        }, qy_gl(0x0, i7mb3, 'duration', function () {
            return this['_sound']['duration'];
        }), hv01j9['_createSound'] = function () {
            hv01j9['_id']++;
            var c7mbl = w6tzp['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return c7mbl;
        }, hv01j9['_musicAudio'] = null, hv01j9['_id'] = 0x0, hv01j9['_audioCache'] = {}, hv01j9['_null'] = undefined, hv01j9;
    }(qx8nd),
        qg_sxy = function (k2ptf) {
        function lm_sc(sl_c) {
            this['_audio'] = null, this['_onEnd'] = null, lm_sc['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = sl_c, this['_onEnd'] = wzetp6['bind'](this['__onEnd'], this), sl_c['onEnded'](this['_onEnd']);
        }
        rslcm(lm_sc, 'laya.wx.mini.MiniSoundChannel', k2ptf);
        var srl_c = lm_sc['prototype'];
        return srl_c['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (wkf2tp['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, srl_c['__onNull'] = function () {}, srl_c['play'] = function () {
            this['isStopped'] = ![], ptz2fw['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, srl_c['stop'] = function () {
            this['isStopped'] = !![], ptz2fw['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, srl_c['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, srl_c['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], ptz2fw['addChannel'](this), this['_audio']['play']();
        }, qy_gl(0x0, srl_c, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), qy_gl(0x0, srl_c, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), qy_gl(0x0, srl_c, 'volume', function () {
            return 0x1;
        }, function (im43b7) {}), lm_sc['_null'] = undefined, lm_sc;
    }(pzt2w),
        dfo$8 = function () {
        function i4m37() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = w6tzp['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        rslcm(i4m37, 'laya.wx.mini.MiniVideo');
        var z26p = i4m37['prototype'];
        return z26p['on'] = function ($o8, w2pk$, wfo$k) {
            if ($o8 == 'loadedmetadata') this['onPlayFunc'] = wfo$k['bind'](w2pk$), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else $o8 == 'ended' && (this['onEndedFunC'] = wfo$k['bind'](w2pk$), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, z26p['onTimeUpdateFunc'] = function (wzpt62) {
            this['position'] = wzpt62['position'], this['_duration'] = wzpt62['duration'];
        }, z26p['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, z26p['onended'] = function (r7mb43, yxq_sg) {
            this['onEndedFunC'] = yxq_sg['bind'](r7mb43), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, z26p['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, z26p['off'] = function (okdn8$, no8x, ly_qcs) {
            if (okdn8$ == 'loadedmetadata') this['onPlayFunc'] = ly_qcs['bind'](no8x), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else okdn8$ == 'ended' && (this['onEndedFunC'] = ly_qcs['bind'](no8x), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, z26p['load'] = function (dn$8x) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = dn$8x;
        }, z26p['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, z26p['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, z26p['size'] = function (wzft2, b3r7c) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = wzft2, this['videoElement']['height'] = b3r7c;
        }, z26p['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, z26p['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, qy_gl(0x0, z26p, 'duration', function () {
            return this['_duration'];
        }), qy_gl(0x0, z26p, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (qyx_s) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = qyx_s;
        }), qy_gl(0x0, z26p, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), qy_gl(0x0, z26p, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), qy_gl(0x0, z26p, 'ended', function () {
            return this['videoend'];
        }), qy_gl(0x0, z26p, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (zw6tp) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = zw6tp;
        }), qy_gl(0x0, z26p, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (cl7sr) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = cl7sr;
        }), qy_gl(0x0, z26p, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (wfpz) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = wfpz;
        }), qy_gl(0x0, z26p, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), qy_gl(0x0, z26p, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (_sql) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = _sql;
        }), qy_gl(0x0, z26p, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (b73rmc) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = b73rmc;
        }), qy_gl(0x0, z26p, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), qy_gl(0x0, z26p, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (n8xdq) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = n8xdq;
        }), qy_gl(0x0, z26p, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (ftpwz) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = ftpwz;
        }), qy_gl(0x0, z26p, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (od8xn) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = od8xn;
        }), i4m37;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var $2pfw in Laya) {
        var mb7rlc = Laya[$2pfw];
        mb7rlc && mb7rlc['__isclass'] && (exports[$2pfw] = mb7rlc);
    }
});