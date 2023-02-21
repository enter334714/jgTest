var _ = wx.y$;
(function (window, document, k_v2) {
    var q_jk = k_v2['un'],
        g1wlen = k_v2['uns'],
        i1_ = k_v2['static'],
        of$ = k_v2['class'],
        toh$m = k_v2['getset'],
        g1wl = k_v2['__newvec'],
        p2y7uc = laya['utils']['Browser'],
        k2qj_ = laya['events']['Event'],
        j_qv2 = laya['events']['EventDispatcher'],
        cyjuk2 = laya['resource']['HTMLImage'],
        nwleg = laya['utils']['Handler'],
        r3z9da = laya['display']['Input'],
        rzd9a3 = laya['net']['Loader'],
        saz9 = laya['maths']['Matrix'],
        d93rza = laya['renders']['Render'],
        o7hpm = laya['utils']['RunDriver'],
        ie18gv = laya['media']['Sound'],
        dba0zs = laya['media']['SoundChannel'],
        jqky2_ = laya['media']['SoundManager'],
        cu2kyj = laya['display']['Stage'],
        of$t5 = laya['net']['URL'],
        b0$4s = laya['utils']['Utils'],
        ds5b4 = function () {
        function _qivj() {}
        return of$(_qivj, 'laya.wx.mini.MiniAdpter'), _qivj['getJson'] = function (jqky2) {
            return JSON['parse'](jqky2);
        }, _qivj['init'] = function (fmt5$, dasb4) {
            fmt5$ === void 0x0 && (fmt5$ = ![]), dasb4 === void 0x0 && (dasb4 = ![]);
            if (_qivj['_inited']) return;
            _qivj['window'] = window;
            if (_qivj['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            _qivj['_inited'] = !![], _qivj['isZiYu'] = dasb4, _qivj['isPosMsgYu'] = fmt5$, _qivj['EnvConfig'] = {}, !_qivj['isZiYu'] && (ei1['setNativeFileDir']('/layaairGame'), ei1['existDir'](ei1['fileNativeDir'], nwleg['create'](_qivj, _qivj['onMkdirCallBack']))), _qivj['window']['focus'] = function () {}, k_v2['getUrlPath'] = function () {}, _qivj['window']['logtime'] = function (mp7uhf) {}, _qivj['window']['alertTimeLog'] = function (a369rz) {}, _qivj['window']['resetShareInfo'] = function () {}, _qivj['window']['CanvasRenderingContext2D'] = function () {}, _qivj['window']['CanvasRenderingContext2D']['prototype'] = _qivj['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], _qivj['window']['document']['body']['appendChild'] = function () {}, _qivj['EnvConfig']['pixelRatioInt'] = 0x0, o7hpm['getPixelRatio'] = _qivj['pixelRatio'], _qivj['_preCreateElement'] = p2y7uc['createElement'], p2y7uc['createElement'] = _qivj['createElement'], o7hpm['createShaderCondition'] = _qivj['createShaderCondition'], b0$4s['parseXMLFromString'] = _qivj['parseXMLFromString'], r3z9da['_createInputElement'] = kpcuy2['_createInputElement'], _qivj['EnvConfig']['load'] = rzd9a3['prototype']['load'], rzd9a3['prototype']['load'] = upmf7h['prototype']['load'], _qivj['isZiYu'] && fmt5$ && wx['onMessage'](function ($540b) {
                $540b['isLoad'] && (ei1['ziyuFileData'][$540b['url']] = $540b['data']);
            });
        }, _qivj['onMkdirCallBack'] = function (ho7mpf, kq_jv) {
            if (!ho7mpf) ei1['filesListObj'] = JSON['parse'](kq_jv['data']);
        }, _qivj['pixelRatio'] = function () {
            if (!_qivj['EnvConfig']['pixelRatioInt']) try {
                var k2vj_q = wx['getSystemInfoSync']();
                return _qivj['EnvConfig']['pixelRatioInt'] = k2vj_q['pixelRatio'], k2vj_q = k2vj_q, k2vj_q['pixelRatio'];
            } catch (k2yjc) {}
            return _qivj['EnvConfig']['pixelRatioInt'];
        }, _qivj['createElement'] = function (u2cjky) {
            if (u2cjky == 'canvas') {
                var geni1;
                return _qivj['idx'] == 0x1 ? _qivj['isZiYu'] ? (geni1 = sharedCanvas, geni1['style'] = {}) : geni1 = window['canvas'] : geni1 = window['wx']['createCanvas'](), _qivj['idx']++, geni1;
            } else {
                if (u2cjky == 'textarea' || u2cjky == 'input') return _qivj['onCreateInput'](u2cjky);else {
                    if (u2cjky == 'div') {
                        var s$4b50 = _qivj['_preCreateElement'](u2cjky);
                        return s$4b50['contains'] = function (viq8e) {
                            return null;
                        }, s$4b50['removeChild'] = function (t$50o4) {}, s$4b50;
                    } else return _qivj['_preCreateElement'](u2cjky);
                }
            }
        }, _qivj['onCreateInput'] = function (r9b) {
            var hfm7 = _qivj['_preCreateElement'](r9b);
            return hfm7['focus'] = kpcuy2['wxinputFocus'], hfm7['blur'] = kpcuy2['wxinputblur'], hfm7['style'] = {}, hfm7['value'] = 0x0, hfm7['parentElement'] = {}, hfm7['placeholder'] = {}, hfm7['type'] = {}, hfm7['setColor'] = function (d39az) {}, hfm7['setType'] = function (d39ra) {}, hfm7['setFontFace'] = function (qjvik_) {}, hfm7['addEventListener'] = function (r9z3) {}, hfm7['contains'] = function (gwle) {
                return null;
            }, hfm7['removeChild'] = function (zds9) {}, hfm7;
        }, _qivj['createShaderCondition'] = function (dz9sba) {
            var b$5s04 = this,
                dbas9 = function () {
                var ofm$th = dz9sba;
                return b$5s04[dz9sba['replace']('this.', '')];
            };
            return dbas9;
        }, _qivj['EnvConfig'] = null, _qivj['window'] = null, _qivj['_preCreateElement'] = null, _qivj['_inited'] = ![], _qivj['wxRequest'] = null, _qivj['systemInfo'] = null, _qivj['version'] = '0.0.1', _qivj['isZiYu'] = ![], _qivj['isPosMsgYu'] = ![], _qivj['parseXMLFromString'] = function (a93zr6) {
            var v1_8ie, iv_qkj;
            a93zr6 = a93zr6['replace'](/>\s+</g, '><');
            try {
                v1_8ie = new window['Parser']['DOMParser']()['parseFromString'](a93zr6, 'text/xml');
            } catch (ykp2cu) {
                throw '需要引入xml解析库文件';
            }
            return v1_8ie;
        }, _qivj['idx'] = 0x1, _qivj;
    }(),
        i1eng8 = function () {
        function za39r6() {}
        of$(za39r6, 'laya.wx.mini.MiniImage');
        var c7mh = za39r6['prototype'];
        return c7mh['_loadImage'] = function (_qvji) {
            var $t45s0 = this,
                nwge1 = ![];
            _qvji['indexOf']('layaNativeDir/') == -0x1 && (nwge1 = !![], _qvji = of$t5['formatURL'](_qvji));
            if (!ei1['getFileInfo'](_qvji)) {
                if (_qvji['indexOf']('http://') != -0x1 || _qvji['indexOf']('https://') != -0x1) ei1['downImg'](_qvji, new nwleg(za39r6, za39r6['onDownImgCallBack'], [_qvji, $t45s0]), _qvji);else za39r6['onCreateImage'](_qvji, $t45s0, !![]);
            } else za39r6['onCreateImage'](_qvji, $t45s0, !nwge1);
        }, za39r6['onDownImgCallBack'] = function (bs5$, f7phum, g1ewn) {
            if (!g1ewn) za39r6['onCreateImage'](bs5$, f7phum);else f7phum['onError'](null);
        }, za39r6['onCreateImage'] = function (gien8, b40d5, $5b04) {
            $5b04 === void 0x0 && ($5b04 = ![]);
            var uk2cyj;
            if (!$5b04) {
                var ypu2k = ei1['getFileInfo'](gien8),
                    s4b = ypu2k['md5'];
                uk2cyj = ei1['getFileNativePath'](s4b);
            } else uk2cyj = gien8;
            if (b40d5['imgCache'] == null) b40d5['imgCache'] = {};
            var s5d04;
            function negw() {
                s5d04['onload'] = null, s5d04['onerror'] = null, delete b40d5['imgCache'][gien8];
            }
            ;
            var iqkv_j = function () {
                negw(), b40d5['onLoaded'](s5d04);
            },
                cjyku = function () {
                negw(), b40d5['event']('error', 'Load image failed');
            };
            b40d5['_type'] == 'nativeimage' ? (s5d04 = new p2y7uc['window']['Image'](), s5d04['crossOrigin'] = '', s5d04['onload'] = iqkv_j, s5d04['onerror'] = cjyku, s5d04['src'] = uk2cyj, b40d5['imgCache'][gien8] = s5d04) : new cyjuk2['create'](uk2cyj, {
                'onload': iqkv_j,
                'onerror': cjyku,
                'onCreate': function (v8e1g) {
                    s5d04 = v8e1g, b40d5['imgCache'][gien8] = v8e1g;
                }
            });
        }, za39r6;
    }(),
        kpcuy2 = function () {
        function ngwe1() {}
        return of$(ngwe1, 'laya.wx.mini.MiniInput'), ngwe1['_createInputElement'] = function () {
            r3z9da['_initInput'](r3z9da['area'] = p2y7uc['createElement']('textarea')), r3z9da['_initInput'](r3z9da['input'] = p2y7uc['createElement']('input')), r3z9da['inputContainer'] = p2y7uc['createElement']('div'), r3z9da['inputContainer']['style']['position'] = 'absolute', r3z9da['inputContainer']['style']['zIndex'] = 0x186a0, p2y7uc['container']['appendChild'](r3z9da['inputContainer']), r3z9da['inputContainer']['setPos'] = function (bd04sa, $bs054) {
                r3z9da['inputContainer']['style']['left'] = bd04sa + 'px', r3z9da['inputContainer']['style']['top'] = $bs054 + 'px';
            }, k_v2['stage']['on']('resize', null, ngwe1['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (fmt$5o) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), jqky2_['_soundClass'] = ykucp2, jqky2_['_musicClass'] = ykucp2, window['_videoClass'] = s0dzb;
        }, ngwe1['_onStageResize'] = function () {
            var i18gn = k_v2['stage']['_canvasTransform']['identity']();
            i18gn['scale'](p2y7uc['width'] / d93rza['canvas']['width'] / o7hpm['getPixelRatio'](), p2y7uc['height'] / d93rza['canvas']['height'] / o7hpm['getPixelRatio']());
        }, ngwe1['wxinputFocus'] = function (ne1l8) {
            var fmoh7t = r3z9da['inputElement']['target'];
            if (fmoh7t && !fmoh7t['editable']) return;
            ds5b4['window']['wx']['offKeyboardConfirm'](), ds5b4['window']['wx']['offKeyboardInput'](), ds5b4['window']['wx']['showKeyboard']({
                'defaultValue': fmoh7t['text'],
                'maxLength': fmoh7t['maxChars'],
                'multiple': fmoh7t['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (cpyu27) {},
                'fail': function (s04$5) {}
            }), ds5b4['window']['wx']['onKeyboardConfirm'](function (en1gwl) {
                var k_vj = en1gwl ? en1gwl['value'] : '';
                fmoh7t['text'] = k_vj, fmoh7t['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), ds5b4['window']['wx']['onKeyboardInput'](function (rza693) {
                var b9zdr = rza693 ? rza693['value'] : '';
                if (!fmoh7t['multiline']) {
                    if (b9zdr['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                fmoh7t['text'] = b9zdr, fmoh7t['event']('input');
            });
        }, ngwe1['inputEnter'] = function () {
            r3z9da['inputElement']['target']['focus'] = ![];
        }, ngwe1['wxinputblur'] = function () {
            ngwe1['hideKeyboard']();
        }, ngwe1['hideKeyboard'] = function () {
            ds5b4['window']['wx']['offKeyboardConfirm'](), ds5b4['window']['wx']['offKeyboardInput'](), ds5b4['window']['wx']['hideKeyboard']({
                'success': function (om7t) {
                    console['log']('隐藏键盘');
                },
                'fail': function (p72u) {
                    console['log']('隐藏键盘出错:' + (p72u ? p72u['errMsg'] : ''));
                }
            });
        }, ngwe1;
    }(),
        upmf7h = function () {
        function _8i() {}
        of$(_8i, 'laya.wx.mini.MiniLoader');
        var zbsd9 = _8i['prototype'];
        return zbsd9['load'] = function (eiq8v, $5ot40, b0saz, jqi_kv, cuk2j) {
            b0saz === void 0x0 && (b0saz = !![]), cuk2j === void 0x0 && (cuk2j = ![]);
            var qyj_k = this;
            qyj_k['_url'] = eiq8v;
            if (eiq8v['indexOf']('data:image') === 0x0) qyj_k['_type'] = $5ot40 = 'image';else qyj_k['_type'] = $5ot40 || ($5ot40 = qyj_k['getTypeFromUrl'](eiq8v));
            qyj_k['_cache'] = b0saz, qyj_k['_data'] = null;
            var evi8g1 = 'ascii';
            if (eiq8v['indexOf']('.fnt') != -0x1) evi8g1 = 'utf8';else $5ot40 == 'arraybuffer' && (evi8g1 = '');
            ;
            var jk_viq = b0$4s['getFileExtension'](eiq8v);
            if (_8i['_fileTypeArr']['indexOf'](jk_viq) != -0x1) ds5b4['EnvConfig']['load']['call'](this, eiq8v, $5ot40, b0saz, jqi_kv, cuk2j);else {
                if (!ei1['getFileInfo'](eiq8v)) {
                    if (eiq8v['indexOf']('layaNativeDir/') != -0x1) {
                        if (ds5b4['isZiYu']) {
                            var kcyp2 = ei1['ziyuFileData'][eiq8v];
                            qyj_k['onLoaded'](kcyp2);
                            return;
                        } else {
                            cosnole['log']('read read'), ei1['read'](eiq8v, evi8g1, new nwleg(_8i, _8i['onReadNativeCallBack'], [evi8g1, eiq8v, $5ot40, b0saz, jqi_kv, cuk2j, qyj_k]));
                            return;
                        }
                    }
                    if (of$t5['rootPath'] == '') var dbz0as = eiq8v;else dbz0as = eiq8v['split'](of$t5['rootPath'])[0x0];
                    eiq8v['indexOf']('http://') != -0x1 || eiq8v['indexOf']('https://') != -0x1 ? ds5b4['EnvConfig']['load']['call'](qyj_k, eiq8v, $5ot40, b0saz, jqi_kv, cuk2j) : ei1['readFile'](dbz0as, evi8g1, new nwleg(_8i, _8i['onReadNativeCallBack'], [evi8g1, eiq8v, $5ot40, b0saz, jqi_kv, cuk2j, qyj_k]), eiq8v);
                } else ds5b4['EnvConfig']['load']['call'](this, eiq8v, $5ot40, b0saz, jqi_kv, cuk2j);
            }
        }, zbsd9['resMgrLoad'] = function (zbd9, um7ch, y27pu, dsazb0, nl1gw, _vj2k, yp2cuk) {
            y27pu === void 0x0 && (y27pu = 0x0), dsazb0 === void 0x0 && (dsazb0 = ![]), nl1gw === void 0x0 && (nl1gw = ![]), _vj2k === void 0x0 && (_vj2k = 0x0), yp2cuk === void 0x0 && (yp2cuk = 0x3), zbd9['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', zbd9), ds5b4['EnvConfig']['resMgrLoad'](zbd9, (ujcy2k, n18el, ev81ig) => {
                _8i['prototype']['resMgrLoadCallBack'](ujcy2k, n18el, ev81ig, um7ch);
            }, y27pu, dsazb0, nl1gw, _vj2k, yp2cuk);
        }, zbsd9['resMgrLoadCallBack'] = function (ab9, vi1_e, q_iev, zsa0) {
            console['log']('buff:::', ab9, q_iev, ei1['fileNativeDir'] + '///' + ei1['fileListName']), zsa0(ab9, vi1_e, q_iev);
        }, zbsd9['clearRes'] = function (za3, iq8jv_) {
            iq8jv_ === void 0x0 && (iq8jv_ = ![]);
            var fom$h = this;
            fom$h['clearRes'](za3, iq8jv_);
            var ckuyp = ei1['getFileInfo'](za3);
            if (ckuyp && (za3['indexOf']('http://') != -0x1 || za3['indexOf']('https://') != -0x1)) {
                var e_i8 = ckuyp['md5'],
                    qk2y_j = ei1['getFileNativePath'](e_i8);
                ei1['remove'](qk2y_j);
            }
        }, _8i['onReadNativeCallBack'] = function (fpmu7h, gl1ne8, hmu7c, za9r3d, uyjck2, foh$t, u7py2, upmh, v8ie_q) {
            za9r3d === void 0x0 && (za9r3d = !![]), foh$t === void 0x0 && (foh$t = ![]), upmh === void 0x0 && (upmh = 0x0);
            if (!upmh) {
                var pk2yc;
                if (hmu7c == 'json' || hmu7c == 'atlas') pk2yc = ds5b4['getJson'](v8ie_q['data']);else hmu7c == 'xml' ? pk2yc = b0$4s['parseXMLFromString'](v8ie_q['data']) : pk2yc = v8ie_q['data'];
                u7py2['onLoaded'](pk2yc), !ds5b4['isZiYu'] && ds5b4['isPosMsgYu'] && hmu7c != 'arraybuffer' && wx['postMessage']({
                    'url': gl1ne8,
                    'data': pk2yc,
                    'isLoad': !![]
                });
            } else upmh == 0x1 && ds5b4['EnvConfig']['load']['call'](u7py2, gl1ne8, hmu7c, za9r3d, uyjck2, foh$t);
        }, i1_(_8i, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), _8i;
    }(),
        ei1 = function (lge) {
        function ycpu27() {
            ycpu27['__super']['call'](this);
            ;
        }
        return of$(ycpu27, 'laya.wx.mini.MiniFileMgr', lge), ycpu27['isLoadFile'] = function (cuj2yk) {
            return ycpu27['_fileTypeArr']['indexOf'](cuj2yk) != -0x1 ? !![] : ![];
        }, ycpu27['getFileInfo'] = function (y7h) {
            var t540$s = y7h['split']('?')[0x0],
                mcup = ycpu27['filesListObj'][t540$s];
            if (mcup == null) return null;else return mcup;
            return null;
        }, ycpu27['onFileUpdate'] = function (q8e_i, ft$moh) {
            var i8e1n = q8e_i['split']('/'),
                mupc7h = i8e1n[i8e1n['length'] - 0x1],
                jy = ycpu27['getFileInfo'](ft$moh);
            if (jy == null) ycpu27['onSaveFile'](ft$moh, mupc7h);else {
                if (jy['readyUrl'] != ft$moh) ycpu27['remove'](mupc7h, ft$moh);
            }
        }, ycpu27['exits'] = function (kj2qv_, i8gev1) {
            var qi8v = ycpu27['getFileNativePath'](kj2qv_);
            ycpu27['fs']['getFileInfo']({
                'filePath': qi8v,
                'success': function (ngel8) {
                    i8gev1 != null && i8gev1['runWith']([0x0, ngel8]);
                },
                'fail': function (v_1ie) {
                    i8gev1 != null && i8gev1['runWith']([0x1, v_1ie]);
                }
            });
        }, ycpu27['read'] = function (g81vi, ei_18v, fotm$5, bs0d54) {
            ei_18v === void 0x0 && (ei_18v = 'ascill'), bs0d54 === void 0x0 && (bs0d54 = '');
            var zdar39;
            bs0d54 != '' ? zdar39 = ycpu27['getFileNativePath'](g81vi) : zdar39 = g81vi, ycpu27['fs']['readFile']({
                'filePath': zdar39,
                'encoding': ei_18v,
                'success': function (t5o4f) {
                    fotm$5 != null && fotm$5['runWith']([0x0, t5o4f]);
                },
                'fail': function (egi8v1) {
                    if (egi8v1 && bs0d54 != '') ycpu27['down'](bs0d54, ei_18v, fotm$5, bs0d54);else fotm$5 != null && fotm$5['runWith']([0x1]);
                }
            });
        }, ycpu27['readNativeFile'] = function (r3xz9, hpycu7) {
            ycpu27['fs']['readFile']({
                'filePath': r3xz9,
                'encoding': '',
                'success': function (z639ar) {
                    hpycu7 != null && hpycu7['runWith']([0x0]);
                },
                'fail': function (s54bd0) {
                    hpycu7 != null && hpycu7['runWith']([0x1]);
                }
            });
        }, ycpu27['down'] = function (i_vqe, _8vji, r6a9z3, gv8ei) {
            _8vji === void 0x0 && (_8vji = 'ascill'), gv8ei === void 0x0 && (gv8ei = '');
            var ivjq_8 = ycpu27['getFileNativePath'](gv8ei),
                d9rb = ycpu27['wxdown']({
                'url': i_vqe,
                'filePath': ivjq_8,
                'success': function (ijk_q) {
                    if (ijk_q['statusCode'] === 0xc8) ycpu27['readFile'](ijk_q['filePath'], _8vji, r6a9z3, gv8ei);
                },
                'fail': function (e8n1g) {
                    r6a9z3 != null && r6a9z3['runWith']([0x1, e8n1g]);
                }
            });
            d9rb['onProgressUpdate'](function (_1v8e) {
                r6a9z3 != null && r6a9z3['runWith']([0x2, _1v8e['progress']]);
            });
        }, ycpu27['readFile'] = function (zabs, q_j2kv, vi_8eq, a36z) {
            q_j2kv === void 0x0 && (q_j2kv = 'ascill'), a36z === void 0x0 && (a36z = ''), ycpu27['fs']['readFile']({
                'filePath': zabs,
                'encoding': q_j2kv,
                'success': function (fhum7p) {
                    if (zabs['indexOf']('http://') != -0x1 || zabs['indexOf']('https://') != -0x1) ycpu27['onFileUpdate'](zabs, a36z);
                    vi_8eq != null && vi_8eq['runWith']([0x0, fhum7p]);
                },
                'fail': function (sb05) {
                    if (sb05) vi_8eq != null && vi_8eq['runWith']([0x1, sb05]);
                }
            });
        }, ycpu27['downImg'] = function (vj_kq2, hmof7p, t40$o) {
            t40$o === void 0x0 && (t40$o = '');
            var _eq8i = ycpu27['wxdown']({
                'url': vj_kq2,
                'success': function (eglw1) {
                    eglw1['statusCode'] === 0xc8 && ycpu27['copyFile'](eglw1['tempFilePath'], t40$o, hmof7p);
                },
                'fail': function (wgnl1e) {
                    hmof7p != null && hmof7p['runWith']([0x1, wgnl1e]);
                }
            });
        }, ycpu27['copyFile'] = function (cykju2, s4d0ab, vkj2q) {
            var m7pfo = cykju2['split']('/'),
                _qvk2j = m7pfo[m7pfo['length'] - 0x1],
                fpm7 = s4d0ab['split']('?')[0x0],
                rza69 = ycpu27['getFileInfo'](s4d0ab),
                mh7oft = ycpu27['getFileNativePath'](_qvk2j);
            ycpu27['fs']['copyFile']({
                'srcPath': cykju2,
                'destPath': mh7oft,
                'success': function (zr36) {
                    if (!rza69) ycpu27['onSaveFile'](s4d0ab, _qvk2j), vkj2q != null && vkj2q['runWith']([0x0]);else {
                        if (rza69['readyUrl'] != s4d0ab) ycpu27['remove'](_qvk2j, s4d0ab, vkj2q);
                    }
                },
                'fail': function (t4s0$) {
                    vkj2q != null && vkj2q['runWith']([0x1, t4s0$]);
                }
            });
        }, ycpu27['getFileNativePath'] = function (o5f$4) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + o5f$4;
        }, ycpu27['remove'] = function (sazd9, $tf, h$motf) {
            $tf === void 0x0 && ($tf = '');
            var zrbd = ycpu27['getFileInfo']($tf),
                hf7tm = ycpu27['getFileNativePath'](zrbd['md5']);
            k_v2['loader']['clearRes'](zrbd['readyUrl']), ycpu27['fs']['unlink']({
                'filePath': hf7tm,
                'success': function (xz639r) {
                    if ($tf != '') ycpu27['onSaveFile']($tf, sazd9);
                    h$motf != null && h$motf['runWith']([0x0]);
                },
                'fail': function (muph7c) {}
            });
        }, ycpu27['onSaveFile'] = function (a04sbd, kqj2) {
            var phu7y = a04sbd['split']('?')[0x0];
            ycpu27['filesListObj'][phu7y] = {
                'md5': kqj2,
                'readyUrl': a04sbd
            }, ycpu27['fs']['writeFile']({
                'filePath': ycpu27['fileNativeDir'] + '/' + ycpu27['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](ycpu27['filesListObj']),
                'success': function (bads0) {
                    console['log']('写入测试测试成功：', bads0);
                },
                'fail': function (v81gei) {
                    console['log']('写入测试测试失败：', v81gei);
                }
            });
        }, ycpu27['existDir'] = function ($t40o5, qk_y2) {
            ycpu27['fs']['mkdir']({
                'dirPath': $t40o5,
                'success': function ($mhfo) {
                    qk_y2 != null && qk_y2['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (p7humf) {
                    if (p7humf['errMsg']['indexOf']('file already exists') != -0x1) ycpu27['readSync'](ycpu27['fileListName'], 'utf8', qk_y2);else qk_y2 != null && qk_y2['runWith']([0x1, p7humf]);
                }
            });
        }, ycpu27['readSync'] = function ($4s5t, q_jkiv, ku2yj, xrz36) {
            q_jkiv === void 0x0 && (q_jkiv = 'ascill'), xrz36 === void 0x0 && (xrz36 = '');
            var asdb0 = ycpu27['getFileNativePath']($4s5t),
                b0s5d;
            try {
                b0s5d = ycpu27['fs']['readFileSync'](asdb0), ku2yj != null && ku2yj['runWith']([0x0, { 'data': b0s5d }]);
            } catch (hm7fto) {
                ku2yj != null && ku2yj['runWith']([0x1]);
            }
        }, ycpu27['readCache'] = function () {}, ycpu27['writeCache'] = function (xz9) {
            var vjik = readyUrl['split']('?')[0x0];
            ycpu27['filesListObj'][vjik] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, ycpu27['fs']['writeFile']({
                'filePath': ycpu27['fileNativeDir'] + '/' + ycpu27['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](ycpu27['filesListObj']),
                'success': function (r9x3z) {},
                'fail': function ($t4s0) {}
            });
        }, ycpu27['setNativeFileDir'] = function (kyq_) {
            ycpu27['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + kyq_;
        }, ycpu27['filesListObj'] = {}, ycpu27['fileNativeDir'] = null, ycpu27['fileListName'] = 'layaairfiles.txt', ycpu27['ziyuFileData'] = {}, i1_(ycpu27, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), ycpu27;
    }(j_qv2),
        ykucp2 = function (qv2k_j) {
        function hpu7() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], hpu7['__super']['call'](this), this['_sound'] = hpu7['_createSound'](), this['_chanell'] = new hup(this['_sound']);
        }
        of$(hpu7, 'laya.wx.mini.MiniSound', qv2k_j);
        var fo45 = hpu7['prototype'];
        return fo45['load'] = function (zarb) {
            var fmup7 = this;
            zarb = of$t5['formatURL'](zarb), this['url'] = zarb;
            if (hpu7['_audioCache'][zarb]) {
                this['event']('complete');
                return;
            }
            function gei1v() {
                if (hpu7['_null'] != undefined) fmup7['_sound']['onCanplay'](hpu7['_null']), fmup7['_sound']['onError'](hpu7['_null']);else try {
                    fmup7['_sound']['onCanplay'](null), fmup7['_sound']['onError'](null), hpu7['_null'] = null;
                } catch (jy2q_k) {
                    console['warn']('[wxmini] _clearSound:' + jy2q_k), fmup7['_sound']['onCanplay'](iev81), fmup7['_sound']['onError'](iev81), hpu7['_null'] = iev81;
                }
            }
            function t$4fo5() {
                $fmtho['loaded'] = !![], $fmtho['event']('complete'), hpu7['_audioCache'][$fmtho['url']] = $fmtho;
            }
            function sdb05(l18gne) {
                console['error']('errCode=' + l18gne['errCode'] + '  errMsg=' + l18gne['errMsg']), $fmtho['event']('error');
            }
            function iev81() {}
            this['_sound']['onCanplay'](t$4fo5), this['_sound']['onError'](sdb05), this['_sound']['src'] = zarb;
            var $fmtho = this;
        }, fo45['play'] = function (fhto$, f$5mt) {
            fhto$ === void 0x0 && (fhto$ = 0x0), f$5mt === void 0x0 && (f$5mt = 0x0);
            var pky2uc, vi8_j;
            if (this['url'] == jqky2_['_tMusic']) {
                if (!hpu7['_musicAudio']) hpu7['_musicAudio'] = this['_sound'];
                pky2uc = hpu7['_musicAudio'], vi8_j = this['_chanell'];
            } else pky2uc = this['_sound'], vi8_j = this['_chanell'];
            return pky2uc['src'] = this['url'], pky2uc['startTime'] = 0x0, vi8_j['isStopped'] && (vi8_j['url'] = this['url'], vi8_j['loops'] = f$5mt, vi8_j['startTime'] = fhto$, vi8_j['play'](), jqky2_['addChannel'](vi8_j)), vi8_j;
        }, fo45['dispose'] = function () {
            var yc2qjk = hpu7['_audioCache'][this['url']];
            yc2qjk && (yc2qjk['src'] = '', delete hpu7['_audioCache'][this['url']]);
        }, toh$m(0x0, fo45, 'duration', function () {
            return this['_sound']['duration'];
        }), hpu7['_createSound'] = function () {
            hpu7['_id']++;
            var dzb9ar = ds5b4['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return dzb9ar;
        }, hpu7['_musicAudio'] = null, hpu7['_id'] = 0x0, hpu7['_audioCache'] = {}, hpu7['_null'] = undefined, hpu7;
    }(j_qv2),
        hup = function (eign8) {
        function _q2kjv(ykuc2p) {
            this['_audio'] = null, this['_onEnd'] = null, _q2kjv['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = ykuc2p, this['_onEnd'] = b0$4s['bind'](this['__onEnd'], this), ykuc2p['onEnded'](this['_onEnd']);
        }
        of$(_q2kjv, 'laya.wx.mini.MiniSoundChannel', eign8);
        var s4b0ad = _q2kjv['prototype'];
        return s4b0ad['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (k_v2['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, s4b0ad['__onNull'] = function () {}, s4b0ad['play'] = function () {
            this['isStopped'] = ![], jqky2_['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, s4b0ad['stop'] = function () {
            this['isStopped'] = !![], jqky2_['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, s4b0ad['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, s4b0ad['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], jqky2_['addChannel'](this), this['_audio']['play']();
        }, toh$m(0x0, s4b0ad, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), toh$m(0x0, s4b0ad, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), toh$m(0x0, s4b0ad, 'volume', function () {
            return 0x1;
        }, function (jcu2yk) {}), _q2kjv['_null'] = undefined, _q2kjv;
    }(dba0zs),
        s0dzb = function () {
        function tho$f() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = ds5b4['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        of$(tho$f, 'laya.wx.mini.MiniVideo');
        var ohp7 = tho$f['prototype'];
        return ohp7['on'] = function (tom7f, f7hotm, o54$0) {
            if (tom7f == 'loadedmetadata') this['onPlayFunc'] = o54$0['bind'](f7hotm), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else tom7f == 'ended' && (this['onEndedFunC'] = o54$0['bind'](f7hotm), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, ohp7['onTimeUpdateFunc'] = function (yhpc) {
            this['position'] = yhpc['position'], this['_duration'] = yhpc['duration'];
        }, ohp7['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, ohp7['onended'] = function (oh7mft, gle1n) {
            this['onEndedFunC'] = gle1n['bind'](oh7mft), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, ohp7['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, ohp7['off'] = function (raz39, k2v_jq, z9bs) {
            if (raz39 == 'loadedmetadata') this['onPlayFunc'] = z9bs['bind'](k2v_jq), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else raz39 == 'ended' && (this['onEndedFunC'] = z9bs['bind'](k2v_jq), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, ohp7['load'] = function (az9rd) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = az9rd;
        }, ohp7['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, ohp7['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, ohp7['size'] = function (mto$fh, rz9dba) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = mto$fh, this['videoElement']['height'] = rz9dba;
        }, ohp7['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, ohp7['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, toh$m(0x0, ohp7, 'duration', function () {
            return this['_duration'];
        }), toh$m(0x0, ohp7, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function ($h) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = $h;
        }), toh$m(0x0, ohp7, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), toh$m(0x0, ohp7, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), toh$m(0x0, ohp7, 'ended', function () {
            return this['videoend'];
        }), toh$m(0x0, ohp7, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (d54bs0) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = d54bs0;
        }), toh$m(0x0, ohp7, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (k2_vq) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = k2_vq;
        }), toh$m(0x0, ohp7, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (e1gin) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = e1gin;
        }), toh$m(0x0, ohp7, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), toh$m(0x0, ohp7, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (zx36) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = zx36;
        }), toh$m(0x0, ohp7, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (v_e8i1) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = v_e8i1;
        }), toh$m(0x0, ohp7, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), toh$m(0x0, ohp7, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (dz9r) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = dz9r;
        }), toh$m(0x0, ohp7, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (fh$t) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = fh$t;
        }), toh$m(0x0, ohp7, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (jcyq2k) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = jcyq2k;
        }), tho$f;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var dz93a in Laya) {
        var kjqi_v = Laya[dz93a];
        kjqi_v && kjqi_v['__isclass'] && (exports[dz93a] = kjqi_v);
    }
});