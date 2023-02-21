var B = wx.$z;
(function (window, document, qmnw0h) {
    var qmhn0a = qmnw0h['un'],
        aegn_q = qmnw0h['uns'],
        _arej = qmnw0h['static'],
        bi725y = qmnw0h['class'],
        bo7 = qmnw0h['getset'],
        gsoujr = qmnw0h['__newvec'],
        or_jg = laya['utils']['Browser'],
        ty$2v = laya['events']['Event'],
        y$52lt = laya['events']['EventDispatcher'],
        gor_ej = laya['resource']['HTMLImage'],
        isbu7 = laya['utils']['Handler'],
        hm0nqw = laya['display']['Input'],
        nq0_ha = laya['net']['Loader'],
        earj = laya['maths']['Matrix'],
        p6x81 = laya['renders']['Render'],
        srjog = laya['utils']['RunDriver'],
        r_goj = laya['media']['Sound'],
        ujrsg = laya['media']['SoundChannel'],
        qnm0hw = laya['media']['SoundManager'],
        aje_q = laya['display']['Stage'],
        anqmh = laya['net']['URL'],
        fwmd9z = laya['utils']['Utils'],
        qma0n = function () {
        function dz3f9() {}
        return bi725y(dz3f9, 'laya.wx.mini.MiniAdpter'), dz3f9['getJson'] = function (wn0mhq) {
            return JSON['parse'](wn0mhq);
        }, dz3f9['init'] = function (_eqgn, a0_qh) {
            _eqgn === void 0x0 && (_eqgn = ![]), a0_qh === void 0x0 && (a0_qh = ![]);
            if (dz3f9['_inited']) return;
            dz3f9['window'] = window;
            if (dz3f9['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            dz3f9['_inited'] = !![], dz3f9['isZiYu'] = a0_qh, dz3f9['isPosMsgYu'] = _eqgn, dz3f9['EnvConfig'] = {}, !dz3f9['isZiYu'] && (ngea_['setNativeFileDir']('/layaairGame'), ngea_['existDir'](ngea_['fileNativeDir'], isbu7['create'](dz3f9, dz3f9['onMkdirCallBack']))), dz3f9['window']['focus'] = function () {}, qmnw0h['getUrlPath'] = function () {}, dz3f9['window']['logtime'] = function (g_aenq) {}, dz3f9['window']['alertTimeLog'] = function (zmwn) {}, dz3f9['window']['resetShareInfo'] = function () {}, dz3f9['window']['CanvasRenderingContext2D'] = function () {}, dz3f9['window']['CanvasRenderingContext2D']['prototype'] = dz3f9['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], dz3f9['window']['document']['body']['appendChild'] = function () {}, dz3f9['EnvConfig']['pixelRatioInt'] = 0x0, srjog['getPixelRatio'] = dz3f9['pixelRatio'], dz3f9['_preCreateElement'] = or_jg['createElement'], or_jg['createElement'] = dz3f9['createElement'], srjog['createShaderCondition'] = dz3f9['createShaderCondition'], fwmd9z['parseXMLFromString'] = dz3f9['parseXMLFromString'], hm0nqw['_createInputElement'] = biso7u['_createInputElement'], dz3f9['EnvConfig']['load'] = nq0_ha['prototype']['load'], nq0_ha['prototype']['load'] = qanh0m['prototype']['load'], dz3f9['isZiYu'] && _eqgn && wx['onMessage'](function (ujgs) {
                ujgs['isLoad'] && (ngea_['ziyuFileData'][ujgs['url']] = ujgs['data']);
            });
        }, dz3f9['onMkdirCallBack'] = function (b7suo, $vl2) {
            if (!b7suo) ngea_['filesListObj'] = JSON['parse']($vl2['data']);
        }, dz3f9['pixelRatio'] = function () {
            if (!dz3f9['EnvConfig']['pixelRatioInt']) try {
                var z09 = wx['getSystemInfoSync']();
                return dz3f9['EnvConfig']['pixelRatioInt'] = z09['pixelRatio'], z09 = z09, z09['pixelRatio'];
            } catch (w9fz) {}
            return dz3f9['EnvConfig']['pixelRatioInt'];
        }, dz3f9['createElement'] = function ($yl5t) {
            if ($yl5t == 'canvas') {
                var qahe;
                return dz3f9['idx'] == 0x1 ? dz3f9['isZiYu'] ? (qahe = sharedCanvas, qahe['style'] = {}) : qahe = window['canvas'] : qahe = window['wx']['createCanvas'](), dz3f9['idx']++, qahe;
            } else {
                if ($yl5t == 'textarea' || $yl5t == 'input') return dz3f9['onCreateInput']($yl5t);else {
                    if ($yl5t == 'div') {
                        var uoijrs = dz3f9['_preCreateElement']($yl5t);
                        return uoijrs['contains'] = function (hn0wmq) {
                            return null;
                        }, uoijrs['removeChild'] = function (usrio) {}, uoijrs;
                    } else return dz3f9['_preCreateElement']($yl5t);
                }
            }
        }, dz3f9['onCreateInput'] = function (zw90fm) {
            var dx13 = dz3f9['_preCreateElement'](zw90fm);
            return dx13['focus'] = biso7u['wxinputFocus'], dx13['blur'] = biso7u['wxinputblur'], dx13['style'] = {}, dx13['value'] = 0x0, dx13['parentElement'] = {}, dx13['placeholder'] = {}, dx13['type'] = {}, dx13['setColor'] = function (ga_qn) {}, dx13['setType'] = function (mz0n) {}, dx13['setFontFace'] = function (y5i7ub) {}, dx13['addEventListener'] = function (_nqh) {}, dx13['contains'] = function (ujrgs) {
                return null;
            }, dx13['removeChild'] = function (yi57ub) {}, dx13;
        }, dz3f9['createShaderCondition'] = function (k81x4p) {
            var _jeo = this,
                g_rae = function () {
                var j_eqg = k81x4p;
                return _jeo[k81x4p['replace']('this.', '')];
            };
            return g_rae;
        }, dz3f9['EnvConfig'] = null, dz3f9['window'] = null, dz3f9['_preCreateElement'] = null, dz3f9['_inited'] = ![], dz3f9['wxRequest'] = null, dz3f9['systemInfo'] = null, dz3f9['version'] = '0.0.1', dz3f9['isZiYu'] = ![], dz3f9['isPosMsgYu'] = ![], dz3f9['parseXMLFromString'] = function (t5ly2$) {
            var urjio, dwz93;
            t5ly2$ = t5ly2$['replace'](/>\s+</g, '><');
            try {
                urjio = new window['Parser']['DOMParser']()['parseFromString'](t5ly2$, 'text/xml');
            } catch (_jegaq) {
                throw '需要引入xml解析库文件';
            }
            return urjio;
        }, dz3f9['idx'] = 0x1, dz3f9;
    }(),
        iou7rs = function () {
        function t72by() {}
        bi725y(t72by, 'laya.wx.mini.MiniImage');
        var bi72y5 = t72by['prototype'];
        return bi72y5['_loadImage'] = function (hf0m) {
            var i257yb = this,
                bui7 = ![];
            hf0m['indexOf']('layaNativeDir/') == -0x1 && (bui7 = !![], hf0m = anqmh['formatURL'](hf0m));
            if (!ngea_['getFileInfo'](hf0m)) {
                if (hf0m['indexOf']('http://') != -0x1 || hf0m['indexOf']('https://') != -0x1) ngea_['downImg'](hf0m, new isbu7(t72by, t72by['onDownImgCallBack'], [hf0m, i257yb]), hf0m);else t72by['onCreateImage'](hf0m, i257yb, !![]);
            } else t72by['onCreateImage'](hf0m, i257yb, !bui7);
        }, t72by['onDownImgCallBack'] = function (p8x416, uisro7, wzmdf) {
            if (!wzmdf) t72by['onCreateImage'](p8x416, uisro7);else uisro7['onError'](null);
        }, t72by['onCreateImage'] = function (oejgrs, d9316f, vt$2l) {
            vt$2l === void 0x0 && (vt$2l = ![]);
            var y5t27;
            if (!vt$2l) {
                var usrjgo = ngea_['getFileInfo'](oejgrs),
                    qa_neh = usrjgo['md5'];
                y5t27 = ngea_['getFileNativePath'](qa_neh);
            } else y5t27 = oejgrs;
            if (d9316f['imgCache'] == null) d9316f['imgCache'] = {};
            var nea_qh;
            function q_0ha() {
                nea_qh['onload'] = null, nea_qh['onerror'] = null, delete d9316f['imgCache'][oejgrs];
            }
            ;
            var mqhw = function () {
                q_0ha(), d9316f['onLoaded'](nea_qh);
            },
                t2y$b5 = function () {
                q_0ha(), d9316f['event']('error', 'Load image failed');
            };
            d9316f['_type'] == 'nativeimage' ? (nea_qh = new or_jg['window']['Image'](), nea_qh['crossOrigin'] = '', nea_qh['onload'] = mqhw, nea_qh['onerror'] = t2y$b5, nea_qh['src'] = y5t27, d9316f['imgCache'][oejgrs] = nea_qh) : new gor_ej['create'](y5t27, {
                'onload': mqhw,
                'onerror': t2y$b5,
                'onCreate': function (x36) {
                    nea_qh = x36, d9316f['imgCache'][oejgrs] = x36;
                }
            });
        }, t72by;
    }(),
        biso7u = function () {
        function dz9w3f() {}
        return bi725y(dz9w3f, 'laya.wx.mini.MiniInput'), dz9w3f['_createInputElement'] = function () {
            hm0nqw['_initInput'](hm0nqw['area'] = or_jg['createElement']('textarea')), hm0nqw['_initInput'](hm0nqw['input'] = or_jg['createElement']('input')), hm0nqw['inputContainer'] = or_jg['createElement']('div'), hm0nqw['inputContainer']['style']['position'] = 'absolute', hm0nqw['inputContainer']['style']['zIndex'] = 0x186a0, or_jg['container']['appendChild'](hm0nqw['inputContainer']), hm0nqw['inputContainer']['setPos'] = function (g_ro, usrjio) {
                hm0nqw['inputContainer']['style']['left'] = g_ro + 'px', hm0nqw['inputContainer']['style']['top'] = usrjio + 'px';
            }, qmnw0h['stage']['on']('resize', null, dz9w3f['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (surjg) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), qnm0hw['_soundClass'] = zfwm9, qnm0hw['_musicClass'] = zfwm9, window['_videoClass'] = usjori;
        }, dz9w3f['_onStageResize'] = function () {
            var jrego = qmnw0h['stage']['_canvasTransform']['identity']();
            jrego['scale'](or_jg['width'] / p6x81['canvas']['width'] / srjog['getPixelRatio'](), or_jg['height'] / p6x81['canvas']['height'] / srjog['getPixelRatio']());
        }, dz9w3f['wxinputFocus'] = function (x8136p) {
            var gr_aj = hm0nqw['inputElement']['target'];
            if (gr_aj && !gr_aj['editable']) return;
            qma0n['window']['wx']['offKeyboardConfirm'](), qma0n['window']['wx']['offKeyboardInput'](), qma0n['window']['wx']['showKeyboard']({
                'defaultValue': gr_aj['text'],
                'maxLength': gr_aj['maxChars'],
                'multiple': gr_aj['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (aqge_j) {},
                'fail': function (amh0qn) {}
            }), qma0n['window']['wx']['onKeyboardConfirm'](function ($yvlt) {
                var ngqe = $yvlt ? $yvlt['value'] : '';
                gr_aj['text'] = ngqe, gr_aj['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), qma0n['window']['wx']['onKeyboardInput'](function ($5b2y) {
                var fw90z = $5b2y ? $5b2y['value'] : '';
                if (!gr_aj['multiline']) {
                    if (fw90z['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                gr_aj['text'] = fw90z, gr_aj['event']('input');
            });
        }, dz9w3f['inputEnter'] = function () {
            hm0nqw['inputElement']['target']['focus'] = ![];
        }, dz9w3f['wxinputblur'] = function () {
            dz9w3f['hideKeyboard']();
        }, dz9w3f['hideKeyboard'] = function () {
            qma0n['window']['wx']['offKeyboardConfirm'](), qma0n['window']['wx']['offKeyboardInput'](), qma0n['window']['wx']['hideKeyboard']({
                'success': function (nhw0) {
                    console['log']('隐藏键盘');
                },
                'fail': function (_eagr) {
                    console['log']('隐藏键盘出错:' + (_eagr ? _eagr['errMsg'] : ''));
                }
            });
        }, dz9w3f;
    }(),
        qanh0m = function () {
        function d3zw9() {}
        bi725y(d3zw9, 'laya.wx.mini.MiniLoader');
        var x31p68 = d3zw9['prototype'];
        return x31p68['load'] = function ($t5by, gje_or, u7s, qe_ah, rges) {
            u7s === void 0x0 && (u7s = !![]), rges === void 0x0 && (rges = ![]);
            var so7ir = this;
            so7ir['_url'] = $t5by;
            if ($t5by['indexOf']('data:image') === 0x0) so7ir['_type'] = gje_or = 'image';else so7ir['_type'] = gje_or || (gje_or = so7ir['getTypeFromUrl']($t5by));
            so7ir['_cache'] = u7s, so7ir['_data'] = null;
            var _an0q = 'ascii';
            if ($t5by['indexOf']('.fnt') != -0x1) _an0q = 'utf8';else gje_or == 'arraybuffer' && (_an0q = '');
            ;
            var q0nmwh = fwmd9z['getFileExtension']($t5by);
            if (d3zw9['_fileTypeArr']['indexOf'](q0nmwh) != -0x1) qma0n['EnvConfig']['load']['call'](this, $t5by, gje_or, u7s, qe_ah, rges);else {
                if (!ngea_['getFileInfo']($t5by)) {
                    if ($t5by['indexOf']('layaNativeDir/') != -0x1) {
                        if (qma0n['isZiYu']) {
                            var usogr = ngea_['ziyuFileData'][$t5by];
                            so7ir['onLoaded'](usogr);
                            return;
                        } else {
                            cosnole['log']('read read'), ngea_['read']($t5by, _an0q, new isbu7(d3zw9, d3zw9['onReadNativeCallBack'], [_an0q, $t5by, gje_or, u7s, qe_ah, rges, so7ir]));
                            return;
                        }
                    }
                    if (anqmh['rootPath'] == '') var l5$y = $t5by;else l5$y = $t5by['split'](anqmh['rootPath'])[0x0];
                    $t5by['indexOf']('http://') != -0x1 || $t5by['indexOf']('https://') != -0x1 ? qma0n['EnvConfig']['load']['call'](so7ir, $t5by, gje_or, u7s, qe_ah, rges) : ngea_['readFile'](l5$y, _an0q, new isbu7(d3zw9, d3zw9['onReadNativeCallBack'], [_an0q, $t5by, gje_or, u7s, qe_ah, rges, so7ir]), $t5by);
                } else qma0n['EnvConfig']['load']['call'](this, $t5by, gje_or, u7s, qe_ah, rges);
            }
        }, x31p68['resMgrLoad'] = function (eg_qan, e_qjga, urijos, tb$2, whmq0, mqnha, ejo_r) {
            urijos === void 0x0 && (urijos = 0x0), tb$2 === void 0x0 && (tb$2 = ![]), whmq0 === void 0x0 && (whmq0 = ![]), mqnha === void 0x0 && (mqnha = 0x0), ejo_r === void 0x0 && (ejo_r = 0x3), eg_qan['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', eg_qan), qma0n['EnvConfig']['resMgrLoad'](eg_qan, (rujsgo, fm0z9, $5t2yb) => {
                d3zw9['prototype']['resMgrLoadCallBack'](rujsgo, fm0z9, $5t2yb, e_qjga);
            }, urijos, tb$2, whmq0, mqnha, ejo_r);
        }, x31p68['resMgrLoadCallBack'] = function (qenah, h0an_q, uori7, aejrg) {
            console['log']('buff:::', qenah, uori7, ngea_['fileNativeDir'] + '///' + ngea_['fileListName']), aejrg(qenah, h0an_q, uori7);
        }, x31p68['clearRes'] = function (wq0nm, rougj) {
            rougj === void 0x0 && (rougj = ![]);
            var zfw0 = this;
            zfw0['clearRes'](wq0nm, rougj);
            var yb52$ = ngea_['getFileInfo'](wq0nm);
            if (yb52$ && (wq0nm['indexOf']('http://') != -0x1 || wq0nm['indexOf']('https://') != -0x1)) {
                var y52i = yb52$['md5'],
                    qaj = ngea_['getFileNativePath'](y52i);
                ngea_['remove'](qaj);
            }
        }, d3zw9['onReadNativeCallBack'] = function (u5si7b, i7buso, su75bi, t2y7b, j_eqga, jsir, uosbi, hq0_a, ah0qnm) {
            t2y7b === void 0x0 && (t2y7b = !![]), jsir === void 0x0 && (jsir = ![]), hq0_a === void 0x0 && (hq0_a = 0x0);
            if (!hq0_a) {
                var rjage;
                if (su75bi == 'json' || su75bi == 'atlas') rjage = qma0n['getJson'](ah0qnm['data']);else su75bi == 'xml' ? rjage = fwmd9z['parseXMLFromString'](ah0qnm['data']) : rjage = ah0qnm['data'];
                uosbi['onLoaded'](rjage), !qma0n['isZiYu'] && qma0n['isPosMsgYu'] && su75bi != 'arraybuffer' && wx['postMessage']({
                    'url': i7buso,
                    'data': rjage,
                    'isLoad': !![]
                });
            } else hq0_a == 0x1 && qma0n['EnvConfig']['load']['call'](uosbi, i7buso, su75bi, t2y7b, j_eqga, jsir);
        }, _arej(d3zw9, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), d3zw9;
    }(),
        ngea_ = function (goursj) {
        function jgsu() {
            jgsu['__super']['call'](this);
            ;
        }
        return bi725y(jgsu, 'laya.wx.mini.MiniFileMgr', goursj), jgsu['isLoadFile'] = function (fhm) {
            return jgsu['_fileTypeArr']['indexOf'](fhm) != -0x1 ? !![] : ![];
        }, jgsu['getFileInfo'] = function (t$ylv2) {
            var w90fm = t$ylv2['split']('?')[0x0],
                egsjr = jgsu['filesListObj'][w90fm];
            if (egsjr == null) return null;else return egsjr;
            return null;
        }, jgsu['onFileUpdate'] = function (na0qh, t$b52) {
            var u5y7b = na0qh['split']('/'),
                whn0qm = u5y7b[u5y7b['length'] - 0x1],
                gj_ra = jgsu['getFileInfo'](t$b52);
            if (gj_ra == null) jgsu['onSaveFile'](t$b52, whn0qm);else {
                if (gj_ra['readyUrl'] != t$b52) jgsu['remove'](whn0qm, t$b52);
            }
        }, jgsu['exits'] = function (_reog, gre_o) {
            var mwh0nq = jgsu['getFileNativePath'](_reog);
            jgsu['fs']['getFileInfo']({
                'filePath': mwh0nq,
                'success': function (t2yb) {
                    gre_o != null && gre_o['runWith']([0x0, t2yb]);
                },
                'fail': function (px8k4) {
                    gre_o != null && gre_o['runWith']([0x1, px8k4]);
                }
            });
        }, jgsu['read'] = function (eqj_a, fwhz, bsi7u, zfh) {
            fwhz === void 0x0 && (fwhz = 'ascill'), zfh === void 0x0 && (zfh = '');
            var qhmn;
            zfh != '' ? qhmn = jgsu['getFileNativePath'](eqj_a) : qhmn = eqj_a, jgsu['fs']['readFile']({
                'filePath': qhmn,
                'encoding': fwhz,
                'success': function (nmzwh) {
                    bsi7u != null && bsi7u['runWith']([0x0, nmzwh]);
                },
                'fail': function (bi7su5) {
                    if (bi7su5 && zfh != '') jgsu['down'](zfh, fwhz, bsi7u, zfh);else bsi7u != null && bsi7u['runWith']([0x1]);
                }
            });
        }, jgsu['readNativeFile'] = function (mzwh, d1x368) {
            jgsu['fs']['readFile']({
                'filePath': mzwh,
                'encoding': '',
                'success': function (f63) {
                    d1x368 != null && d1x368['runWith']([0x0]);
                },
                'fail': function (wz9f3d) {
                    d1x368 != null && d1x368['runWith']([0x1]);
                }
            });
        }, jgsu['down'] = function ($tby, _naeh, a_gejq, f3wdz9) {
            _naeh === void 0x0 && (_naeh = 'ascill'), f3wdz9 === void 0x0 && (f3wdz9 = '');
            var fh0wmz = jgsu['getFileNativePath'](f3wdz9),
                a_nge = jgsu['wxdown']({
                'url': $tby,
                'filePath': fh0wmz,
                'success': function (b2t$y) {
                    if (b2t$y['statusCode'] === 0xc8) jgsu['readFile'](b2t$y['filePath'], _naeh, a_gejq, f3wdz9);
                },
                'fail': function (_nagq) {
                    a_gejq != null && a_gejq['runWith']([0x1, _nagq]);
                }
            });
            a_nge['onProgressUpdate'](function (_qan0h) {
                a_gejq != null && a_gejq['runWith']([0x2, _qan0h['progress']]);
            });
        }, jgsu['readFile'] = function (dfwmz, irsoj, aje_g, hzn0mw) {
            irsoj === void 0x0 && (irsoj = 'ascill'), hzn0mw === void 0x0 && (hzn0mw = ''), jgsu['fs']['readFile']({
                'filePath': dfwmz,
                'encoding': irsoj,
                'success': function (i5bu7) {
                    if (dfwmz['indexOf']('http://') != -0x1 || dfwmz['indexOf']('https://') != -0x1) jgsu['onFileUpdate'](dfwmz, hzn0mw);
                    aje_g != null && aje_g['runWith']([0x0, i5bu7]);
                },
                'fail': function (r7iou) {
                    if (r7iou) aje_g != null && aje_g['runWith']([0x1, r7iou]);
                }
            });
        }, jgsu['downImg'] = function (reoj_g, egrjos, egq) {
            egq === void 0x0 && (egq = '');
            var am0hq = jgsu['wxdown']({
                'url': reoj_g,
                'success': function (x4k1p) {
                    x4k1p['statusCode'] === 0xc8 && jgsu['copyFile'](x4k1p['tempFilePath'], egq, egrjos);
                },
                'fail': function (b7t5) {
                    egrjos != null && egrjos['runWith']([0x1, b7t5]);
                }
            });
        }, jgsu['copyFile'] = function (b$2t, jaq, serjog) {
            var b7t2y5 = b$2t['split']('/'),
                d9z3w = b7t2y5[b7t2y5['length'] - 0x1],
                sojgru = jaq['split']('?')[0x0],
                ojersg = jgsu['getFileInfo'](jaq),
                d8631 = jgsu['getFileNativePath'](d9z3w);
            jgsu['fs']['copyFile']({
                'srcPath': b$2t,
                'destPath': d8631,
                'success': function (bs7o) {
                    if (!ojersg) jgsu['onSaveFile'](jaq, d9z3w), serjog != null && serjog['runWith']([0x0]);else {
                        if (ojersg['readyUrl'] != jaq) jgsu['remove'](d9z3w, jaq, serjog);
                    }
                },
                'fail': function (grejo) {
                    serjog != null && serjog['runWith']([0x1, grejo]);
                }
            });
        }, jgsu['getFileNativePath'] = function (s75ub) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + s75ub;
        }, jgsu['remove'] = function (y25l$, yib725, egj_q) {
            yib725 === void 0x0 && (yib725 = '');
            var nhwmq0 = jgsu['getFileInfo'](yib725),
                y$2vt = jgsu['getFileNativePath'](nhwmq0['md5']);
            qmnw0h['loader']['clearRes'](nhwmq0['readyUrl']), jgsu['fs']['unlink']({
                'filePath': y$2vt,
                'success': function (j_rge) {
                    if (yib725 != '') jgsu['onSaveFile'](yib725, y25l$);
                    egj_q != null && egj_q['runWith']([0x0]);
                },
                'fail': function (bo7usi) {}
            });
        }, jgsu['onSaveFile'] = function (z0hnmw, nge) {
            var _rg = z0hnmw['split']('?')[0x0];
            jgsu['filesListObj'][_rg] = {
                'md5': nge,
                'readyUrl': z0hnmw
            }, jgsu['fs']['writeFile']({
                'filePath': jgsu['fileNativeDir'] + '/' + jgsu['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](jgsu['filesListObj']),
                'success': function (df9w3) {
                    console['log']('写入测试测试成功：', df9w3);
                },
                'fail': function (grejo_) {
                    console['log']('写入测试测试失败：', grejo_);
                }
            });
        }, jgsu['existDir'] = function (nwhq, h_aq0) {
            jgsu['fs']['mkdir']({
                'dirPath': nwhq,
                'success': function (t5yb) {
                    h_aq0 != null && h_aq0['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (t2yl$v) {
                    if (t2yl$v['errMsg']['indexOf']('file already exists') != -0x1) jgsu['readSync'](jgsu['fileListName'], 'utf8', h_aq0);else h_aq0 != null && h_aq0['runWith']([0x1, t2yl$v]);
                }
            });
        }, jgsu['readSync'] = function (a0qmhn, mf9w0z, a0hqn_, mf09zw) {
            mf9w0z === void 0x0 && (mf9w0z = 'ascill'), mf09zw === void 0x0 && (mf09zw = '');
            var ena_qg = jgsu['getFileNativePath'](a0qmhn),
                iu7r;
            try {
                iu7r = jgsu['fs']['readFileSync'](ena_qg), a0hqn_ != null && a0hqn_['runWith']([0x0, { 'data': iu7r }]);
            } catch (nhzm0w) {
                a0hqn_ != null && a0hqn_['runWith']([0x1]);
            }
        }, jgsu['readCache'] = function () {}, jgsu['writeCache'] = function (uroi) {
            var bt52y = readyUrl['split']('?')[0x0];
            jgsu['filesListObj'][bt52y] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, jgsu['fs']['writeFile']({
                'filePath': jgsu['fileNativeDir'] + '/' + jgsu['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](jgsu['filesListObj']),
                'success': function (_h0naq) {},
                'fail': function (gjoe_r) {}
            });
        }, jgsu['setNativeFileDir'] = function (p61x) {
            jgsu['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + p61x;
        }, jgsu['filesListObj'] = {}, jgsu['fileNativeDir'] = null, jgsu['fileListName'] = 'layaairfiles.txt', jgsu['ziyuFileData'] = {}, _arej(jgsu, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), jgsu;
    }(y$52lt),
        zfwm9 = function (roejgs) {
        function fmdw9z() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], fmdw9z['__super']['call'](this), this['_sound'] = fmdw9z['_createSound'](), this['_chanell'] = new r_eogj(this['_sound']);
        }
        bi725y(fmdw9z, 'laya.wx.mini.MiniSound', roejgs);
        var aer_g = fmdw9z['prototype'];
        return aer_g['load'] = function (an_qeg) {
            var _0hq = this;
            an_qeg = anqmh['formatURL'](an_qeg), this['url'] = an_qeg;
            if (fmdw9z['_audioCache'][an_qeg]) {
                this['event']('complete');
                return;
            }
            function h0aqn_() {
                if (fmdw9z['_null'] != undefined) _0hq['_sound']['onCanplay'](fmdw9z['_null']), _0hq['_sound']['onError'](fmdw9z['_null']);else try {
                    _0hq['_sound']['onCanplay'](null), _0hq['_sound']['onError'](null), fmdw9z['_null'] = null;
                } catch (nwzhm) {
                    console['warn']('[wxmini] _clearSound:' + nwzhm), _0hq['_sound']['onCanplay'](aq_gn), _0hq['_sound']['onError'](aq_gn), fmdw9z['_null'] = aq_gn;
                }
            }
            function wm90() {
                xp4681['loaded'] = !![], xp4681['event']('complete'), fmdw9z['_audioCache'][xp4681['url']] = xp4681;
            }
            function y57(y57ub) {
                console['error']('errCode=' + y57ub['errCode'] + '  errMsg=' + y57ub['errMsg']), xp4681['event']('error');
            }
            function aq_gn() {}
            this['_sound']['onCanplay'](wm90), this['_sound']['onError'](y57), this['_sound']['src'] = an_qeg;
            var xp4681 = this;
        }, aer_g['play'] = function (qa0n_h, y75iub) {
            qa0n_h === void 0x0 && (qa0n_h = 0x0), y75iub === void 0x0 && (y75iub = 0x0);
            var jageq, zm0fhw;
            if (this['url'] == qnm0hw['_tMusic']) {
                if (!fmdw9z['_musicAudio']) fmdw9z['_musicAudio'] = this['_sound'];
                jageq = fmdw9z['_musicAudio'], zm0fhw = this['_chanell'];
            } else jageq = this['_sound'], zm0fhw = this['_chanell'];
            return jageq['src'] = this['url'], jageq['startTime'] = 0x0, zm0fhw['isStopped'] && (zm0fhw['url'] = this['url'], zm0fhw['loops'] = y75iub, zm0fhw['startTime'] = qa0n_h, zm0fhw['play'](), qnm0hw['addChannel'](zm0fhw)), zm0fhw;
        }, aer_g['dispose'] = function () {
            var y$l2v = fmdw9z['_audioCache'][this['url']];
            y$l2v && (y$l2v['src'] = '', delete fmdw9z['_audioCache'][this['url']]);
        }, bo7(0x0, aer_g, 'duration', function () {
            return this['_sound']['duration'];
        }), fmdw9z['_createSound'] = function () {
            fmdw9z['_id']++;
            var $b2t5y = qma0n['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return $b2t5y;
        }, fmdw9z['_musicAudio'] = null, fmdw9z['_id'] = 0x0, fmdw9z['_audioCache'] = {}, fmdw9z['_null'] = undefined, fmdw9z;
    }(y$52lt),
        r_eogj = function (qe_nah) {
        function fz9mdw(q0ahn) {
            this['_audio'] = null, this['_onEnd'] = null, fz9mdw['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = q0ahn, this['_onEnd'] = fwmd9z['bind'](this['__onEnd'], this), q0ahn['onEnded'](this['_onEnd']);
        }
        bi725y(fz9mdw, 'laya.wx.mini.MiniSoundChannel', qe_nah);
        var h0nma = fz9mdw['prototype'];
        return h0nma['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (qmnw0h['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, h0nma['__onNull'] = function () {}, h0nma['play'] = function () {
            this['isStopped'] = ![], qnm0hw['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, h0nma['stop'] = function () {
            this['isStopped'] = !![], qnm0hw['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, h0nma['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, h0nma['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], qnm0hw['addChannel'](this), this['_audio']['play']();
        }, bo7(0x0, h0nma, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), bo7(0x0, h0nma, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), bo7(0x0, h0nma, 'volume', function () {
            return 0x1;
        }, function (riuj) {}), fz9mdw['_null'] = undefined, fz9mdw;
    }(ujrsg),
        usjori = function () {
        function egro_j() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = qma0n['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        bi725y(egro_j, 'laya.wx.mini.MiniVideo');
        var fzd3 = egro_j['prototype'];
        return fzd3['on'] = function (isbou7, _jreog, nmz0wh) {
            if (isbou7 == 'loadedmetadata') this['onPlayFunc'] = nmz0wh['bind'](_jreog), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else isbou7 == 'ended' && (this['onEndedFunC'] = nmz0wh['bind'](_jreog), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, fzd3['onTimeUpdateFunc'] = function (fwmzh) {
            this['position'] = fwmzh['position'], this['_duration'] = fwmzh['duration'];
        }, fzd3['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, fzd3['onended'] = function (ae_jq, sb7iuo) {
            this['onEndedFunC'] = sb7iuo['bind'](ae_jq), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, fzd3['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, fzd3['off'] = function (wmf90z, joresg, b725t) {
            if (wmf90z == 'loadedmetadata') this['onPlayFunc'] = b725t['bind'](joresg), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else wmf90z == 'ended' && (this['onEndedFunC'] = b725t['bind'](joresg), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, fzd3['load'] = function (x4861p) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = x4861p;
        }, fzd3['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, fzd3['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, fzd3['size'] = function (bi5u7s, joreg_) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = bi5u7s, this['videoElement']['height'] = joreg_;
        }, fzd3['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, fzd3['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, bo7(0x0, fzd3, 'duration', function () {
            return this['_duration'];
        }), bo7(0x0, fzd3, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (v$ly2t) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = v$ly2t;
        }), bo7(0x0, fzd3, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), bo7(0x0, fzd3, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), bo7(0x0, fzd3, 'ended', function () {
            return this['videoend'];
        }), bo7(0x0, fzd3, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (gaeqj_) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = gaeqj_;
        }), bo7(0x0, fzd3, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (q_0hna) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = q_0hna;
        }), bo7(0x0, fzd3, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (geq_ja) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = geq_ja;
        }), bo7(0x0, fzd3, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), bo7(0x0, fzd3, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (sgjru) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = sgjru;
        }), bo7(0x0, fzd3, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (mhzw) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = mhzw;
        }), bo7(0x0, fzd3, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), bo7(0x0, fzd3, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (t2v$ly) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = t2v$ly;
        }), bo7(0x0, fzd3, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (f0wmh) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = f0wmh;
        }), bo7(0x0, fzd3, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (yl5t2) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = yl5t2;
        }), egro_j;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var ah0qn_ in Laya) {
        var v$l2 = Laya[ah0qn_];
        v$l2 && v$l2['__isclass'] && (exports[ah0qn_] = v$l2);
    }
});