var v = wx.$d;
(function (window, document, k3l4uh) {
    var nb0p = k3l4uh['un'],
        jp6mva = k3l4uh['uns'],
        pm6an0 = k3l4uh['static'],
        h482d3 = k3l4uh['class'],
        f$9_x = k3l4uh['getset'],
        pag0nb = k3l4uh['__newvec'],
        x$vm = laya['utils']['Browser'],
        hd2348 = laya['events']['Event'],
        x6vj = laya['events']['EventDispatcher'],
        gnea0 = laya['resource']['HTMLImage'],
        j_97$x = laya['utils']['Handler'],
        oqd8 = laya['display']['Input'],
        owqc8 = laya['net']['Loader'],
        aeb0ng = laya['maths']['Matrix'],
        uztykr = laya['renders']['Render'],
        nga0 = laya['utils']['RunDriver'],
        d83c24 = laya['media']['Sound'],
        lu3k4h = laya['media']['SoundChannel'],
        d4u3h = laya['media']['SoundManager'],
        _91f = laya['display']['Stage'],
        z71f = laya['net']['URL'],
        p0ganb = laya['utils']['Utils'],
        tukyh = function () {
        function hu3kl4() {}
        return h482d3(hu3kl4, 'laya.wx.mini.MiniAdpter'), hu3kl4['getJson'] = function (kzry) {
            return JSON['parse'](kzry);
        }, hu3kl4['init'] = function (kzytr1, x7j) {
            kzytr1 === void 0x0 && (kzytr1 = ![]), x7j === void 0x0 && (x7j = ![]);
            if (hu3kl4['_inited']) return;
            hu3kl4['window'] = window;
            if (hu3kl4['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            hu3kl4['_inited'] = !![], hu3kl4['isZiYu'] = x7j, hu3kl4['isPosMsgYu'] = kzytr1, hu3kl4['EnvConfig'] = {}, !hu3kl4['isZiYu'] && (x$m6j['setNativeFileDir']('/layaairGame'), x$m6j['existDir'](x$m6j['fileNativeDir'], j_97$x['create'](hu3kl4, hu3kl4['onMkdirCallBack']))), hu3kl4['window']['focus'] = function () {}, k3l4uh['getUrlPath'] = function () {}, hu3kl4['window']['logtime'] = function (d824qc) {}, hu3kl4['window']['alertTimeLog'] = function (en0agb) {}, hu3kl4['window']['resetShareInfo'] = function () {}, hu3kl4['window']['CanvasRenderingContext2D'] = function () {}, hu3kl4['window']['CanvasRenderingContext2D']['prototype'] = hu3kl4['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], hu3kl4['window']['document']['body']['appendChild'] = function () {}, hu3kl4['EnvConfig']['pixelRatioInt'] = 0x0, nga0['getPixelRatio'] = hu3kl4['pixelRatio'], hu3kl4['_preCreateElement'] = x$vm['createElement'], x$vm['createElement'] = hu3kl4['createElement'], nga0['createShaderCondition'] = hu3kl4['createShaderCondition'], p0ganb['parseXMLFromString'] = hu3kl4['parseXMLFromString'], oqd8['_createInputElement'] = f$9_['_createInputElement'], hu3kl4['EnvConfig']['load'] = owqc8['prototype']['load'], owqc8['prototype']['load'] = k1rytz['prototype']['load'], hu3kl4['isZiYu'] && kzytr1 && wx['onMessage'](function (xf$7_) {
                xf$7_['isLoad'] && (x$m6j['ziyuFileData'][xf$7_['url']] = xf$7_['data']);
            });
        }, hu3kl4['onMkdirCallBack'] = function (kyuhl3, f_$7x9) {
            if (!kyuhl3) x$m6j['filesListObj'] = JSON['parse'](f_$7x9['data']);
        }, hu3kl4['pixelRatio'] = function () {
            if (!hu3kl4['EnvConfig']['pixelRatioInt']) try {
                var vjx9$ = wx['getSystemInfoSync']();
                return hu3kl4['EnvConfig']['pixelRatioInt'] = vjx9$['pixelRatio'], vjx9$ = vjx9$, vjx9$['pixelRatio'];
            } catch (panb) {}
            return hu3kl4['EnvConfig']['pixelRatioInt'];
        }, hu3kl4['createElement'] = function (l4h3) {
            if (l4h3 == 'canvas') {
                var a0mbnp;
                return hu3kl4['idx'] == 0x1 ? hu3kl4['isZiYu'] ? (a0mbnp = sharedCanvas, a0mbnp['style'] = {}) : a0mbnp = window['canvas'] : a0mbnp = window['wx']['createCanvas'](), hu3kl4['idx']++, a0mbnp;
            } else {
                if (l4h3 == 'textarea' || l4h3 == 'input') return hu3kl4['onCreateInput'](l4h3);else {
                    if (l4h3 == 'div') {
                        var uk3hl = hu3kl4['_preCreateElement'](l4h3);
                        return uk3hl['contains'] = function (vmp6xj) {
                            return null;
                        }, uk3hl['removeChild'] = function (_f19) {}, uk3hl;
                    } else return hu3kl4['_preCreateElement'](l4h3);
                }
            }
        }, hu3kl4['onCreateInput'] = function (_1zrf) {
            var $7x9_f = hu3kl4['_preCreateElement'](_1zrf);
            return $7x9_f['focus'] = f$9_['wxinputFocus'], $7x9_f['blur'] = f$9_['wxinputblur'], $7x9_f['style'] = {}, $7x9_f['value'] = 0x0, $7x9_f['parentElement'] = {}, $7x9_f['placeholder'] = {}, $7x9_f['type'] = {}, $7x9_f['setColor'] = function ($jv79x) {}, $7x9_f['setType'] = function (f_1z57) {}, $7x9_f['setFontFace'] = function (ytzuk) {}, $7x9_f['addEventListener'] = function (x7$9f_) {}, $7x9_f['contains'] = function (tryz1) {
                return null;
            }, $7x9_f['removeChild'] = function (z1f75_) {}, $7x9_f;
        }, hu3kl4['createShaderCondition'] = function (gin0b) {
            var npbm = this,
                _f75$9 = function () {
                var _75f$ = gin0b;
                return npbm[gin0b['replace']('this.', '')];
            };
            return _f75$9;
        }, hu3kl4['EnvConfig'] = null, hu3kl4['window'] = null, hu3kl4['_preCreateElement'] = null, hu3kl4['_inited'] = ![], hu3kl4['wxRequest'] = null, hu3kl4['systemInfo'] = null, hu3kl4['version'] = '0.0.1', hu3kl4['isZiYu'] = ![], hu3kl4['isPosMsgYu'] = ![], hu3kl4['parseXMLFromString'] = function (ebgn0a) {
            var t51ry, _j7x$;
            ebgn0a = ebgn0a['replace'](/>\s+</g, '><');
            try {
                t51ry = new window['Parser']['DOMParser']()['parseFromString'](ebgn0a, 'text/xml');
            } catch (r1tyz5) {
                throw '需要引入xml解析库文件';
            }
            return t51ry;
        }, hu3kl4['idx'] = 0x1, hu3kl4;
    }(),
        v96 = function () {
        function m6ap0v() {}
        h482d3(m6ap0v, 'laya.wx.mini.MiniImage');
        var r1z = m6ap0v['prototype'];
        return r1z['_loadImage'] = function (vm0ap6) {
            var ngbie0 = this,
                f9x_7$ = ![];
            vm0ap6['indexOf']('layaNativeDir/') == -0x1 && (f9x_7$ = !![], vm0ap6 = z71f['formatURL'](vm0ap6));
            if (!x$m6j['getFileInfo'](vm0ap6)) {
                if (vm0ap6['indexOf']('http://') != -0x1 || vm0ap6['indexOf']('https://') != -0x1) x$m6j['downImg'](vm0ap6, new j_97$x(m6ap0v, m6ap0v['onDownImgCallBack'], [vm0ap6, ngbie0]), vm0ap6);else m6ap0v['onCreateImage'](vm0ap6, ngbie0, !![]);
            } else m6ap0v['onCreateImage'](vm0ap6, ngbie0, !f9x_7$);
        }, m6ap0v['onDownImgCallBack'] = function (m6a0pv, c432, hl4u3k) {
            if (!hl4u3k) m6ap0v['onCreateImage'](m6a0pv, c432);else c432['onError'](null);
        }, m6ap0v['onCreateImage'] = function (ztyku, avm6, napm0b) {
            napm0b === void 0x0 && (napm0b = ![]);
            var m6j$x;
            if (!napm0b) {
                var dh34l = x$m6j['getFileInfo'](ztyku),
                    a6pjm = dh34l['md5'];
                m6j$x = x$m6j['getFileNativePath'](a6pjm);
            } else m6j$x = ztyku;
            if (avm6['imgCache'] == null) avm6['imgCache'] = {};
            var _951f7;
            function yzt5() {
                _951f7['onload'] = null, _951f7['onerror'] = null, delete avm6['imgCache'][ztyku];
            }
            ;
            var xf79$ = function () {
                yzt5(), avm6['onLoaded'](_951f7);
            },
                n0mabp = function () {
                yzt5(), avm6['event']('error', 'Load image failed');
            };
            avm6['_type'] == 'nativeimage' ? (_951f7 = new x$vm['window']['Image'](), _951f7['crossOrigin'] = '', _951f7['onload'] = xf79$, _951f7['onerror'] = n0mabp, _951f7['src'] = m6j$x, avm6['imgCache'][ztyku] = _951f7) : new gnea0['create'](m6j$x, {
                'onload': xf79$,
                'onerror': n0mabp,
                'onCreate': function (nbgei0) {
                    _951f7 = nbgei0, avm6['imgCache'][ztyku] = nbgei0;
                }
            });
        }, m6ap0v;
    }(),
        f$9_ = function () {
        function jam6pv() {}
        return h482d3(jam6pv, 'laya.wx.mini.MiniInput'), jam6pv['_createInputElement'] = function () {
            oqd8['_initInput'](oqd8['area'] = x$vm['createElement']('textarea')), oqd8['_initInput'](oqd8['input'] = x$vm['createElement']('input')), oqd8['inputContainer'] = x$vm['createElement']('div'), oqd8['inputContainer']['style']['position'] = 'absolute', oqd8['inputContainer']['style']['zIndex'] = 0x186a0, x$vm['container']['appendChild'](oqd8['inputContainer']), oqd8['inputContainer']['setPos'] = function (dh38l4, $j6mv) {
                oqd8['inputContainer']['style']['left'] = dh38l4 + 'px', oqd8['inputContainer']['style']['top'] = $j6mv + 'px';
            }, k3l4uh['stage']['on']('resize', null, jam6pv['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (khlu3) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), d4u3h['_soundClass'] = ngba, d4u3h['_musicClass'] = ngba;
        }, jam6pv['_onStageResize'] = function () {
            var eibg0 = k3l4uh['stage']['_canvasTransform']['identity']();
            eibg0['scale'](x$vm['width'] / uztykr['canvas']['width'] / nga0['getPixelRatio'](), x$vm['height'] / uztykr['canvas']['height'] / nga0['getPixelRatio']());
        }, jam6pv['wxinputFocus'] = function (xj6pmv) {
            var _17f9 = oqd8['inputElement']['target'];
            if (_17f9 && !_17f9['editable']) return;
            tukyh['window']['wx']['offKeyboardConfirm'](), tukyh['window']['wx']['offKeyboardInput'](), tukyh['window']['wx']['showKeyboard']({
                'defaultValue': _17f9['text'],
                'maxLength': _17f9['maxChars'],
                'multiple': _17f9['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (jx7v9) {},
                'fail': function (va6) {}
            }), tukyh['window']['wx']['onKeyboardConfirm'](function (ie0b) {
                var avp6m0 = ie0b ? ie0b['value'] : '';
                _17f9['text'] = avp6m0, _17f9['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), tukyh['window']['wx']['onKeyboardInput'](function (ulkhyt) {
                var tzuk = ulkhyt ? ulkhyt['value'] : '';
                if (!_17f9['multiline']) {
                    if (tzuk['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                _17f9['text'] = tzuk, _17f9['event']('input');
            });
        }, jam6pv['inputEnter'] = function () {
            oqd8['inputElement']['target']['focus'] = ![];
        }, jam6pv['wxinputblur'] = function () {
            jam6pv['hideKeyboard']();
        }, jam6pv['hideKeyboard'] = function () {
            tukyh['window']['wx']['offKeyboardConfirm'](), tukyh['window']['wx']['offKeyboardInput'](), tukyh['window']['wx']['hideKeyboard']({
                'success': function (p6nma) {
                    console['log']('隐藏键盘');
                },
                'fail': function (f57$_9) {
                    console['log']('隐藏键盘出错:' + (f57$_9 ? f57$_9['errMsg'] : ''));
                }
            });
        }, jam6pv;
    }(),
        k1rytz = function () {
        function x9$6jv() {}
        h482d3(x9$6jv, 'laya.wx.mini.MiniLoader');
        var q428 = x9$6jv['prototype'];
        return q428['load'] = function (ukl43h, agen0b, d82q, a0gnpb, ngpb) {
            d82q === void 0x0 && (d82q = !![]), ngpb === void 0x0 && (ngpb = ![]);
            var q82dc = this;
            q82dc['_url'] = ukl43h;
            if (ukl43h['indexOf']('data:image') === 0x0) q82dc['_type'] = agen0b = 'image';else q82dc['_type'] = agen0b || (agen0b = q82dc['getTypeFromUrl'](ukl43h));
            q82dc['_cache'] = d82q, q82dc['_data'] = null;
            var e0ba = 'ascii';
            if (ukl43h['indexOf']('.fnt') != -0x1) e0ba = 'utf8';else agen0b == 'arraybuffer' && (e0ba = '');
            ;
            var $_x7f9 = p0ganb['getFileExtension'](ukl43h);
            if (x9$6jv['_fileTypeArr']['indexOf']($_x7f9) != -0x1) tukyh['EnvConfig']['load']['call'](this, ukl43h, agen0b, d82q, a0gnpb, ngpb);else {
                if (!x$m6j['getFileInfo'](ukl43h)) {
                    if (ukl43h['indexOf']('layaNativeDir/') != -0x1) {
                        if (tukyh['isZiYu']) {
                            var am0pv = x$m6j['ziyuFileData'][ukl43h];
                            q82dc['onLoaded'](am0pv);
                            return;
                        } else {
                            cosnole['log']('read read'), x$m6j['read'](ukl43h, e0ba, new j_97$x(x9$6jv, x9$6jv['onReadNativeCallBack'], [e0ba, ukl43h, agen0b, d82q, a0gnpb, ngpb, q82dc]));
                            return;
                        }
                    }
                    if (z71f['rootPath'] == '') var nbgie0 = ukl43h;else nbgie0 = ukl43h['split'](z71f['rootPath'])[0x0];
                    ukl43h['indexOf']('http://') != -0x1 || ukl43h['indexOf']('https://') != -0x1 ? tukyh['EnvConfig']['load']['call'](q82dc, ukl43h, agen0b, d82q, a0gnpb, ngpb) : x$m6j['readFile'](nbgie0, e0ba, new j_97$x(x9$6jv, x9$6jv['onReadNativeCallBack'], [e0ba, ukl43h, agen0b, d82q, a0gnpb, ngpb, q82dc]), ukl43h);
                } else tukyh['EnvConfig']['load']['call'](this, ukl43h, agen0b, d82q, a0gnpb, ngpb);
            }
        }, q428['resMgrLoad'] = function (npa0gb, m0a6p, a06pv, pna6m0, cd28qo, o2cqw8, $95f7) {
            a06pv === void 0x0 && (a06pv = 0x0), pna6m0 === void 0x0 && (pna6m0 = ![]), cd28qo === void 0x0 && (cd28qo = ![]), o2cqw8 === void 0x0 && (o2cqw8 = 0x0), $95f7 === void 0x0 && ($95f7 = 0x3), npa0gb['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', npa0gb), tukyh['EnvConfig']['resMgrLoad'](npa0gb, (f_x9$7, $mx6v, n0amb) => {
                x9$6jv['prototype']['resMgrLoadCallBack'](f_x9$7, $mx6v, n0amb, m0a6p);
            }, a06pv, pna6m0, cd28qo, o2cqw8, $95f7);
        }, q428['resMgrLoadCallBack'] = function (f5tzr, qdoc28, xf_97, b0nma) {
            console['log']('buff:::', f5tzr, xf_97, x$m6j['fileNativeDir'] + '///' + x$m6j['fileListName']), b0nma(f5tzr, qdoc28, xf_97);
        }, q428['clearRes'] = function (c834d, klyur) {
            klyur === void 0x0 && (klyur = ![]);
            var klhyu = this;
            klhyu['clearRes'](c834d, klyur);
            var _f795 = x$m6j['getFileInfo'](c834d);
            if (_f795 && (c834d['indexOf']('http://') != -0x1 || c834d['indexOf']('https://') != -0x1)) {
                var _$59 = _f795['md5'],
                    lu3kh4 = x$m6j['getFileNativePath'](_$59);
                x$m6j['remove'](lu3kh4);
            }
        }, x9$6jv['onReadNativeCallBack'] = function (z51_fr, engab0, jma6, z517_, _$x97, ei, nb0gie, yktrzu, $xj79_) {
            z517_ === void 0x0 && (z517_ = !![]), ei === void 0x0 && (ei = ![]), yktrzu === void 0x0 && (yktrzu = 0x0);
            if (!yktrzu) {
                var lhdu;
                if (jma6 == 'json' || jma6 == 'atlas') lhdu = tukyh['getJson']($xj79_['data']);else jma6 == 'xml' ? lhdu = p0ganb['parseXMLFromString']($xj79_['data']) : lhdu = $xj79_['data'];
                nb0gie['onLoaded'](lhdu), !tukyh['isZiYu'] && tukyh['isPosMsgYu'] && jma6 != 'arraybuffer' && wx['postMessage']({
                    'url': engab0,
                    'data': lhdu,
                    'isLoad': !![]
                });
            } else yktrzu == 0x1 && tukyh['EnvConfig']['load']['call'](nb0gie, engab0, jma6, z517_, _$x97, ei);
        }, pm6an0(x9$6jv, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), x9$6jv;
    }(),
        x$m6j = function (krzuyt) {
        function pmj6av() {
            pmj6av['__super']['call'](this);
            ;
        }
        return h482d3(pmj6av, 'laya.wx.mini.MiniFileMgr', krzuyt), pmj6av['isLoadFile'] = function (d3h842) {
            return pmj6av['_fileTypeArr']['indexOf'](d3h842) != -0x1 ? !![] : ![];
        }, pmj6av['getFileInfo'] = function (z5r1t) {
            var zf_r51 = z5r1t['split']('?')[0x0],
                x97j$ = pmj6av['filesListObj'][zf_r51];
            if (x97j$ == null) return null;else return x97j$;
            return null;
        }, pmj6av['onFileUpdate'] = function (dc4q28, h24d) {
            var xj$9_7 = dc4q28['split']('/'),
                r1tzk = xj$9_7[xj$9_7['length'] - 0x1],
                vjxp = pmj6av['getFileInfo'](h24d);
            if (vjxp == null) pmj6av['onSaveFile'](h24d, r1tzk);else {
                if (vjxp['readyUrl'] != h24d) pmj6av['remove'](r1tzk, h24d);
            }
        }, pmj6av['exits'] = function (lkhuy3, z5y1rt) {
            var h8342d = pmj6av['getFileNativePath'](lkhuy3);
            pmj6av['fs']['getFileInfo']({
                'filePath': h8342d,
                'success': function (av6m) {
                    z5y1rt != null && z5y1rt['runWith']([0x0, av6m]);
                },
                'fail': function (hu3k4l) {
                    z5y1rt != null && z5y1rt['runWith']([0x1, hu3k4l]);
                }
            });
        }, pmj6av['read'] = function (x_f9, y1ztk, dh3842, t1f5z) {
            y1ztk === void 0x0 && (y1ztk = 'ascill'), t1f5z === void 0x0 && (t1f5z = '');
            var x9f_;
            t1f5z != '' ? x9f_ = pmj6av['getFileNativePath'](x_f9) : x9f_ = x_f9, pmj6av['fs']['readFile']({
                'filePath': x9f_,
                'encoding': y1ztk,
                'success': function (bg0ei) {
                    dh3842 != null && dh3842['runWith']([0x0, bg0ei]);
                },
                'fail': function (ukylr) {
                    if (ukylr && t1f5z != '') pmj6av['down'](t1f5z, y1ztk, dh3842, t1f5z);else dh3842 != null && dh3842['runWith']([0x1]);
                }
            });
        }, pmj6av['readNativeFile'] = function (nbgei, x_9f$) {
            pmj6av['fs']['readFile']({
                'filePath': nbgei,
                'encoding': '',
                'success': function (hl3d4) {
                    x_9f$ != null && x_9f$['runWith']([0x0]);
                },
                'fail': function (jp6xm) {
                    x_9f$ != null && x_9f$['runWith']([0x1]);
                }
            });
        }, pmj6av['down'] = function (np0b, p06anm, nbi0ge, avm6p) {
            p06anm === void 0x0 && (p06anm = 'ascill'), avm6p === void 0x0 && (avm6p = '');
            var o2d = pmj6av['getFileNativePath'](avm6p),
                hl3du = pmj6av['wxdown']({
                'url': np0b,
                'filePath': o2d,
                'success': function (qo2wc) {
                    if (qo2wc['statusCode'] === 0xc8) pmj6av['readFile'](qo2wc['filePath'], p06anm, nbi0ge, avm6p);
                },
                'fail': function (ktlruy) {
                    nbi0ge != null && nbi0ge['runWith']([0x1, ktlruy]);
                }
            });
            hl3du['onProgressUpdate'](function (ab0m) {
                nbi0ge != null && nbi0ge['runWith']([0x2, ab0m['progress']]);
            });
        }, pmj6av['readFile'] = function (lhku3y, uykh3l, zrky, begn) {
            uykh3l === void 0x0 && (uykh3l = 'ascill'), begn === void 0x0 && (begn = ''), pmj6av['fs']['readFile']({
                'filePath': lhku3y,
                'encoding': uykh3l,
                'success': function (t1r5z) {
                    if (lhku3y['indexOf']('http://') != -0x1 || lhku3y['indexOf']('https://') != -0x1) pmj6av['onFileUpdate'](lhku3y, begn);
                    zrky != null && zrky['runWith']([0x0, t1r5z]);
                },
                'fail': function (eigb) {
                    if (eigb) zrky != null && zrky['runWith']([0x1, eigb]);
                }
            });
        }, pmj6av['downImg'] = function (q4d8c2, do8c2, hud43) {
            hud43 === void 0x0 && (hud43 = '');
            var q2d8 = pmj6av['wxdown']({
                'url': q4d8c2,
                'success': function (_$f75) {
                    _$f75['statusCode'] === 0xc8 && pmj6av['copyFile'](_$f75['tempFilePath'], hud43, do8c2);
                },
                'fail': function (t51rfz) {
                    do8c2 != null && do8c2['runWith']([0x1, t51rfz]);
                }
            });
        }, pmj6av['copyFile'] = function (tylukh, f51rzt, trlu) {
            var l3hk = tylukh['split']('/'),
                _fx97 = l3hk[l3hk['length'] - 0x1],
                nag0p = f51rzt['split']('?')[0x0],
                tyzr51 = pmj6av['getFileInfo'](f51rzt),
                tkyuh = pmj6av['getFileNativePath'](_fx97);
            pmj6av['fs']['copyFile']({
                'srcPath': tylukh,
                'destPath': tkyuh,
                'success': function (xp6j) {
                    if (!tyzr51) pmj6av['onSaveFile'](f51rzt, _fx97), trlu != null && trlu['runWith']([0x0]);else {
                        if (tyzr51['readyUrl'] != f51rzt) pmj6av['remove'](_fx97, f51rzt, trlu);
                    }
                },
                'fail': function (zrtf) {
                    trlu != null && trlu['runWith']([0x1, zrtf]);
                }
            });
        }, pmj6av['getFileNativePath'] = function (bg0ne) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + bg0ne;
        }, pmj6av['remove'] = function (tlhuyk, jxmv$, pxv6m) {
            jxmv$ === void 0x0 && (jxmv$ = '');
            var ruktly = pmj6av['getFileInfo'](jxmv$),
                anpmb0 = pmj6av['getFileNativePath'](ruktly['md5']);
            k3l4uh['loader']['clearRes'](ruktly['readyUrl']), pmj6av['fs']['unlink']({
                'filePath': anpmb0,
                'success': function (x9v$j) {
                    if (jxmv$ != '') pmj6av['onSaveFile'](jxmv$, tlhuyk);
                    pxv6m != null && pxv6m['runWith']([0x0]);
                },
                'fail': function (ldh4) {}
            });
        }, pmj6av['onSaveFile'] = function (qc8d2o, f571z_) {
            var jp6vm = qc8d2o['split']('?')[0x0];
            pmj6av['filesListObj'][jp6vm] = {
                'md5': f571z_,
                'readyUrl': qc8d2o
            }, pmj6av['fs']['writeFile']({
                'filePath': pmj6av['fileNativeDir'] + '/' + pmj6av['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](pmj6av['filesListObj']),
                'success': function (tz5yr) {
                    console['log']('写入测试测试成功：', tz5yr);
                },
                'fail': function (xpjmv) {
                    console['log']('写入测试测试失败：', xpjmv);
                }
            });
        }, pmj6av['existDir'] = function (x_$, abm) {
            pmj6av['fs']['mkdir']({
                'dirPath': x_$,
                'success': function (jvp6a) {
                    abm != null && abm['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (tryuz) {
                    if (tryuz['errMsg']['indexOf']('file already exists') != -0x1) pmj6av['readSync'](pmj6av['fileListName'], 'utf8', abm);else abm != null && abm['runWith']([0x1, tryuz]);
                }
            });
        }, pmj6av['readSync'] = function (ma6n, vjm$6x, l4u3dh, kyhlu3) {
            vjm$6x === void 0x0 && (vjm$6x = 'ascill'), kyhlu3 === void 0x0 && (kyhlu3 = '');
            var nma0pb = pmj6av['getFileNativePath'](ma6n),
                jx7_9;
            try {
                jx7_9 = pmj6av['fs']['readFileSync'](nma0pb), l4u3dh != null && l4u3dh['runWith']([0x0, { 'data': jx7_9 }]);
            } catch (d4328) {
                l4u3dh != null && l4u3dh['runWith']([0x1]);
            }
        }, pmj6av['readCache'] = function () {}, pmj6av['writeCache'] = function (tklyhu) {
            var _jx$7 = readyUrl['split']('?')[0x0];
            pmj6av['filesListObj'][_jx$7] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, pmj6av['fs']['writeFile']({
                'filePath': pmj6av['fileNativeDir'] + '/' + pmj6av['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](pmj6av['filesListObj']),
                'success': function (ea0bn) {},
                'fail': function (h3dl4) {}
            });
        }, pmj6av['setNativeFileDir'] = function (xmpvj6) {
            pmj6av['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + xmpvj6;
        }, pmj6av['filesListObj'] = {}, pmj6av['fileNativeDir'] = null, pmj6av['fileListName'] = 'layaairfiles.txt', pmj6av['ziyuFileData'] = {}, pm6an0(pmj6av, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), pmj6av;
    }(x6vj),
        ngba = function ($vmj6x) {
        function n0ig() {
            this['_sound'] = null, this['url'] = null, this['loaded'] = ![], n0ig['__super']['call'](this), this['_sound'] = n0ig['_createSound']();
        }
        h482d3(n0ig, 'laya.wx.mini.MiniSound', $vmj6x);
        var gi0 = n0ig['prototype'];
        return gi0['load'] = function (vj6a) {
            var xv6$m = this;
            vj6a = z71f['formatURL'](vj6a), this['url'] = vj6a;
            if (n0ig['_audioCache'][vj6a]) {
                this['event']('complete');
                return;
            }
            function w8ocq2() {
                if (n0ig['_null'] != undefined) xv6$m['_sound']['onCanplay'](n0ig['_null']), xv6$m['_sound']['onError'](n0ig['_null']);else try {
                    xv6$m['_sound']['onCanplay'](null), xv6$m['_sound']['onError'](null), n0ig['_null'] = null;
                } catch (d348hl) {
                    console['warn']('[wxmini] _clearSound:' + d348hl), xv6$m['_sound']['onCanplay'](vm0p), xv6$m['_sound']['onError'](vm0p), n0ig['_null'] = vm0p;
                }
            }
            function j9v7x$() {
                w8ocq2(), nm06['loaded'] = !![], nm06['event']('complete'), n0ig['_audioCache'][nm06['url']] = nm06;
            }
            function kl4uh3(ige0n) {
                console['error']('errCode=' + ige0n['errCode'] + '  errMsg=' + ige0n['errMsg']), w8ocq2(), nm06['event']('error');
            }
            function vm0p() {}
            this['_sound']['onCanplay'](j9v7x$), this['_sound']['onError'](kl4uh3), this['_sound']['src'] = vj6a;
            var nm06 = this;
        }, gi0['play'] = function (woc8, uzrt) {
            woc8 === void 0x0 && (woc8 = 0x0), uzrt === void 0x0 && (uzrt = 0x0);
            var t15zfr;
            if (this['url'] == d4u3h['_tMusic']) {
                if (!n0ig['_musicAudio']) n0ig['_musicAudio'] = n0ig['_createSound']();
                t15zfr = n0ig['_musicAudio'];
            } else t15zfr = n0ig['_createSound']();
            t15zfr['src'] = this['url'];
            var ld34uh = new bnge0(t15zfr);
            return ld34uh['url'] = this['url'], ld34uh['loops'] = uzrt, ld34uh['startTime'] = woc8, ld34uh['play'](), d4u3h['addChannel'](ld34uh), ld34uh;
        }, gi0['dispose'] = function () {
            var qo28c = n0ig['_audioCache'][this['url']];
            qo28c && (qo28c['src'] = '', delete n0ig['_audioCache'][this['url']]);
        }, f$9_x(0x0, gi0, 'duration', function () {
            return this['_sound']['duration'];
        }), n0ig['_createSound'] = function () {
            return n0ig['_id']++, tukyh['window']['wx']['createInnerAudioContext']();
        }, n0ig['_musicAudio'] = null, n0ig['_id'] = 0x0, n0ig['_audioCache'] = {}, n0ig['_null'] = undefined, n0ig;
    }(x6vj),
        bnge0 = function (c8q42) {
        function pajv6m(trfz) {
            this['_audio'] = null, this['_onEnd'] = null, pajv6m['__super']['call'](this), this['_audio'] = trfz, this['_onEnd'] = p0ganb['bind'](this['__onEnd'], this), trfz['onEnded'](this['_onEnd']);
        }
        h482d3(pajv6m, 'laya.wx.mini.MiniSoundChannel', c8q42);
        var _fz715 = pajv6m['prototype'];
        return _fz715['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (k3l4uh['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, _fz715['__onNull'] = function () {}, _fz715['play'] = function () {
            this['isStopped'] = ![], d4u3h['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, _fz715['stop'] = function () {
            this['isStopped'] = !![], d4u3h['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
            if (pajv6m['_null'] != undefined) this['_audio']['onEnded'](pajv6m['_null']);else try {
                this['_audio']['onEnded'](null), pajv6m['_null'] = null;
            } catch (ft5z) {
                console['warn']('[wxmini] stop:' + ft5z), this['_audio']['onEnded'](p0ganb['bind'](this['__onNull'], this)), pajv6m['_null'] = p0ganb['bind'](this['__onNull'], this);
            }
            this['_audio'] = null;
        }, _fz715['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, _fz715['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], d4u3h['addChannel'](this), this['_audio']['play']();
        }, f$9_x(0x0, _fz715, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), f$9_x(0x0, _fz715, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), f$9_x(0x0, _fz715, 'volume', function () {
            return 0x1;
        }, function (xj6v$) {}), pajv6m['_null'] = undefined, pajv6m;
    }(lu3k4h);
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var ktrluy in Laya) {
        var yhk3lu = Laya[ktrluy];
        yhk3lu && yhk3lu['__isclass'] && (exports[ktrluy] = yhk3lu);
    }
});