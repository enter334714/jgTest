var b = wx.$e;
(function (window, document, eaki_) {
    var q2nj = eaki_['un'],
        m9k0_ = eaki_['uns'],
        k$_0 = eaki_['static'],
        k90i_ = eaki_['class'],
        w$tei = eaki_['getset'],
        avwe = eaki_['__newvec'],
        of9m0g = laya['utils']['Browser'],
        j3ox1s = laya['events']['Event'],
        d4rv = laya['events']['EventDispatcher'],
        mgf9_0 = laya['resource']['HTMLImage'],
        dz6bc = laya['utils']['Handler'],
        zcp6b7 = laya['display']['Input'],
        s5j2qn = laya['net']['Loader'],
        gfm09 = laya['maths']['Matrix'],
        f9i_0 = laya['renders']['Render'],
        wetv4 = laya['utils']['RunDriver'],
        $atev = laya['media']['Sound'],
        h2qun5 = laya['media']['SoundChannel'],
        evt$a = laya['media']['SoundManager'],
        rzcdb7 = laya['display']['Stage'],
        e84wt = laya['net']['URL'],
        cdz7b6 = laya['utils']['Utils'],
        _m90f = function () {
        function xogm9() {}
        return k90i_(xogm9, 'laya.wx.mini.MiniAdpter'), xogm9['getJson'] = function (unhyl) {
            return JSON['parse'](unhyl);
        }, xogm9['init'] = function (v8t4ew, $etav) {
            v8t4ew === void 0x0 && (v8t4ew = ![]), $etav === void 0x0 && ($etav = ![]);
            if (xogm9['_inited']) return;
            xogm9['window'] = window;
            if (xogm9['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            xogm9['_inited'] = !![], xogm9['isZiYu'] = $etav, xogm9['isPosMsgYu'] = v8t4ew, xogm9['EnvConfig'] = {}, !xogm9['isZiYu'] && (ea_i['setNativeFileDir']('/layaairGame'), ea_i['existDir'](ea_i['fileNativeDir'], dz6bc['create'](xogm9, xogm9['onMkdirCallBack']))), xogm9['window']['focus'] = function () {}, eaki_['getUrlPath'] = function () {}, xogm9['window']['logtime'] = function (jsq235) {}, xogm9['window']['alertTimeLog'] = function (qj5sn) {}, xogm9['window']['resetShareInfo'] = function () {}, xogm9['window']['CanvasRenderingContext2D'] = function () {}, xogm9['window']['CanvasRenderingContext2D']['prototype'] = xogm9['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], xogm9['window']['document']['body']['appendChild'] = function () {}, xogm9['EnvConfig']['pixelRatioInt'] = 0x0, wetv4['getPixelRatio'] = xogm9['pixelRatio'], xogm9['_preCreateElement'] = of9m0g['createElement'], of9m0g['createElement'] = xogm9['createElement'], wetv4['createShaderCondition'] = xogm9['createShaderCondition'], cdz7b6['parseXMLFromString'] = xogm9['parseXMLFromString'], zcp6b7['_createInputElement'] = e$vw['_createInputElement'], xogm9['EnvConfig']['load'] = s5j2qn['prototype']['load'], s5j2qn['prototype']['load'] = ka_$0i['prototype']['load'], xogm9['isZiYu'] && v8t4ew && wx['onMessage'](function (m9xf) {
                m9xf['isLoad'] && (ea_i['ziyuFileData'][m9xf['url']] = m9xf['data']);
            });
        }, xogm9['onMkdirCallBack'] = function (ulyn2h, o1x9m) {
            if (!ulyn2h) ea_i['filesListObj'] = JSON['parse'](o1x9m['data']);
        }, xogm9['pixelRatio'] = function () {
            if (!xogm9['EnvConfig']['pixelRatioInt']) try {
                var i_09f = wx['getSystemInfoSync']();
                return xogm9['EnvConfig']['pixelRatioInt'] = i_09f['pixelRatio'], i_09f = i_09f, i_09f['pixelRatio'];
            } catch (wt8e4) {}
            return xogm9['EnvConfig']['pixelRatioInt'];
        }, xogm9['createElement'] = function (i9k0_f) {
            if (i9k0_f == 'canvas') {
                var d478;
                return xogm9['idx'] == 0x1 ? xogm9['isZiYu'] ? (d478 = sharedCanvas, d478['style'] = {}) : d478 = window['canvas'] : d478 = window['wx']['createCanvas'](), xogm9['idx']++, d478;
            } else {
                if (i9k0_f == 'textarea' || i9k0_f == 'input') return xogm9['onCreateInput'](i9k0_f);else {
                    if (i9k0_f == 'div') {
                        var bzdrc = xogm9['_preCreateElement'](i9k0_f);
                        return bzdrc['contains'] = function (k_m9f0) {
                            return null;
                        }, bzdrc['removeChild'] = function (xgj1) {}, bzdrc;
                    } else return xogm9['_preCreateElement'](i9k0_f);
                }
            }
        }, xogm9['onCreateInput'] = function (dr847z) {
            var s5q13j = xogm9['_preCreateElement'](dr847z);
            return s5q13j['focus'] = e$vw['wxinputFocus'], s5q13j['blur'] = e$vw['wxinputblur'], s5q13j['style'] = {}, s5q13j['value'] = 0x0, s5q13j['parentElement'] = {}, s5q13j['placeholder'] = {}, s5q13j['type'] = {}, s5q13j['setColor'] = function (ikaf) {}, s5q13j['setType'] = function (ea$k_) {}, s5q13j['setFontFace'] = function ($aeik) {}, s5q13j['addEventListener'] = function (ki_e) {}, s5q13j['contains'] = function (w8tv$e) {
                return null;
            }, s5q13j['removeChild'] = function (nus52) {}, s5q13j;
        }, xogm9['createShaderCondition'] = function (fo09mg) {
            var n2qs5j = this,
                atw$i = function () {
                var of9mgx = fo09mg;
                return n2qs5j[fo09mg['replace']('this.', '')];
            };
            return atw$i;
        }, xogm9['EnvConfig'] = null, xogm9['window'] = null, xogm9['_preCreateElement'] = null, xogm9['_inited'] = ![], xogm9['wxRequest'] = null, xogm9['systemInfo'] = null, xogm9['version'] = '0.0.1', xogm9['isZiYu'] = ![], xogm9['isPosMsgYu'] = ![], xogm9['parseXMLFromString'] = function (mo09) {
            var z7bc6p, _09mf;
            mo09 = mo09['replace'](/>\s+</g, '><');
            try {
                z7bc6p = new window['Parser']['DOMParser']()['parseFromString'](mo09, 'text/xml');
            } catch (q5h2n) {
                throw '需要引入xml解析库文件';
            }
            return z7bc6p;
        }, xogm9['idx'] = 0x1, xogm9;
    }(),
        xo3jg = function () {
        function hq2lnu() {}
        k90i_(hq2lnu, 'laya.wx.mini.MiniImage');
        var xmo3 = hq2lnu['prototype'];
        return xmo3['_loadImage'] = function (j3x5s1) {
            var uhnyl2 = this,
                cbd7r = ![];
            j3x5s1['indexOf']('layaNativeDir/') == -0x1 && (cbd7r = !![], j3x5s1 = e84wt['formatURL'](j3x5s1));
            if (!ea_i['getFileInfo'](j3x5s1)) {
                if (j3x5s1['indexOf']('http://') != -0x1 || j3x5s1['indexOf']('https://') != -0x1) ea_i['downImg'](j3x5s1, new dz6bc(hq2lnu, hq2lnu['onDownImgCallBack'], [j3x5s1, uhnyl2]), j3x5s1);else hq2lnu['onCreateImage'](j3x5s1, uhnyl2, !![]);
            } else hq2lnu['onCreateImage'](j3x5s1, uhnyl2, !cbd7r);
        }, hq2lnu['onDownImgCallBack'] = function (ojg, a$eiwt, o3js1x) {
            if (!o3js1x) hq2lnu['onCreateImage'](ojg, a$eiwt);else a$eiwt['onError'](null);
        }, hq2lnu['onCreateImage'] = function (f9xmo, ogjx13, vw8dr4) {
            vw8dr4 === void 0x0 && (vw8dr4 = ![]);
            var vw8d;
            if (!vw8dr4) {
                var hu2yl = ea_i['getFileInfo'](f9xmo),
                    mg1x3o = hu2yl['md5'];
                vw8d = ea_i['getFileNativePath'](mg1x3o);
            } else vw8d = f9xmo;
            if (ogjx13['imgCache'] == null) ogjx13['imgCache'] = {};
            var ak$i;
            function q2js53() {
                ak$i['onload'] = null, ak$i['onerror'] = null, delete ogjx13['imgCache'][f9xmo];
            }
            ;
            var s31j5 = function () {
                q2js53(), ogjx13['onLoaded'](ak$i);
            },
                pzcb6 = function () {
                q2js53(), ogjx13['event']('error', 'Load image failed');
            };
            ogjx13['_type'] == 'nativeimage' ? (ak$i = new of9m0g['window']['Image'](), ak$i['crossOrigin'] = '', ak$i['onload'] = s31j5, ak$i['onerror'] = pzcb6, ak$i['src'] = vw8d, ogjx13['imgCache'][f9xmo] = ak$i) : new mgf9_0['create'](vw8d, {
                'onload': s31j5,
                'onerror': pzcb6,
                'onCreate': function (_0$a) {
                    ak$i = _0$a, ogjx13['imgCache'][f9xmo] = _0$a;
                }
            });
        }, hq2lnu;
    }(),
        e$vw = function () {
        function m9xo1g() {}
        return k90i_(m9xo1g, 'laya.wx.mini.MiniInput'), m9xo1g['_createInputElement'] = function () {
            zcp6b7['_initInput'](zcp6b7['area'] = of9m0g['createElement']('textarea')), zcp6b7['_initInput'](zcp6b7['input'] = of9m0g['createElement']('input')), zcp6b7['inputContainer'] = of9m0g['createElement']('div'), zcp6b7['inputContainer']['style']['position'] = 'absolute', zcp6b7['inputContainer']['style']['zIndex'] = 0x186a0, of9m0g['container']['appendChild'](zcp6b7['inputContainer']), zcp6b7['inputContainer']['setPos'] = function (e$tki, xsj53) {
                zcp6b7['inputContainer']['style']['left'] = e$tki + 'px', zcp6b7['inputContainer']['style']['top'] = xsj53 + 'px';
            }, eaki_['stage']['on']('resize', null, m9xo1g['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (hq) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), evt$a['_soundClass'] = n2lhyu, evt$a['_musicClass'] = n2lhyu, window['_videoClass'] = gj1ox;
        }, m9xo1g['_onStageResize'] = function () {
            var _ka$ei = eaki_['stage']['_canvasTransform']['identity']();
            _ka$ei['scale'](of9m0g['width'] / f9i_0['canvas']['width'] / wetv4['getPixelRatio'](), of9m0g['height'] / f9i_0['canvas']['height'] / wetv4['getPixelRatio']());
        }, m9xo1g['wxinputFocus'] = function (q5j13s) {
            var z4vdr8 = zcp6b7['inputElement']['target'];
            if (z4vdr8 && !z4vdr8['editable']) return;
            _m90f['window']['wx']['offKeyboardConfirm'](), _m90f['window']['wx']['offKeyboardInput'](), _m90f['window']['wx']['showKeyboard']({
                'defaultValue': z4vdr8['text'],
                'maxLength': z4vdr8['maxChars'],
                'multiple': z4vdr8['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (yhnu) {},
                'fail': function (j3q52s) {}
            }), _m90f['window']['wx']['onKeyboardConfirm'](function (t$waei) {
                var xomfg9 = t$waei ? t$waei['value'] : '';
                z4vdr8['text'] = xomfg9, z4vdr8['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), _m90f['window']['wx']['onKeyboardInput'](function (g0_f9m) {
                var sun5q = g0_f9m ? g0_f9m['value'] : '';
                if (!z4vdr8['multiline']) {
                    if (sun5q['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                z4vdr8['text'] = sun5q, z4vdr8['event']('input');
            });
        }, m9xo1g['inputEnter'] = function () {
            zcp6b7['inputElement']['target']['focus'] = ![];
        }, m9xo1g['wxinputblur'] = function () {
            m9xo1g['hideKeyboard']();
        }, m9xo1g['hideKeyboard'] = function () {
            _m90f['window']['wx']['offKeyboardConfirm'](), _m90f['window']['wx']['offKeyboardInput'](), _m90f['window']['wx']['hideKeyboard']({
                'success': function (wet8v4) {
                    console['log']('隐藏键盘');
                },
                'fail': function (kai0f) {
                    console['log']('隐藏键盘出错:' + (kai0f ? kai0f['errMsg'] : ''));
                }
            });
        }, m9xo1g;
    }(),
        ka_$0i = function () {
        function js31xo() {}
        k90i_(js31xo, 'laya.wx.mini.MiniLoader');
        var $0k_ = js31xo['prototype'];
        return $0k_['load'] = function (_i0f9k, go0mf9, xfo9m, $ek, _a0k$) {
            xfo9m === void 0x0 && (xfo9m = !![]), _a0k$ === void 0x0 && (_a0k$ = ![]);
            var vr4zd = this;
            vr4zd['_url'] = _i0f9k;
            if (_i0f9k['indexOf']('data:image') === 0x0) vr4zd['_type'] = go0mf9 = 'image';else vr4zd['_type'] = go0mf9 || (go0mf9 = vr4zd['getTypeFromUrl'](_i0f9k));
            vr4zd['_cache'] = xfo9m, vr4zd['_data'] = null;
            var dbz76c = 'ascii';
            if (_i0f9k['indexOf']('.fnt') != -0x1) dbz76c = 'utf8';else go0mf9 == 'arraybuffer' && (dbz76c = '');
            ;
            var g9xomf = cdz7b6['getFileExtension'](_i0f9k);
            if (js31xo['_fileTypeArr']['indexOf'](g9xomf) != -0x1) _m90f['EnvConfig']['load']['call'](this, _i0f9k, go0mf9, xfo9m, $ek, _a0k$);else {
                if (!ea_i['getFileInfo'](_i0f9k)) {
                    if (_i0f9k['indexOf']('layaNativeDir/') != -0x1) {
                        if (_m90f['isZiYu']) {
                            var ie_ka$ = ea_i['ziyuFileData'][_i0f9k];
                            vr4zd['onLoaded'](ie_ka$);
                            return;
                        } else {
                            cosnole['log']('read read'), ea_i['read'](_i0f9k, dbz76c, new dz6bc(js31xo, js31xo['onReadNativeCallBack'], [dbz76c, _i0f9k, go0mf9, xfo9m, $ek, _a0k$, vr4zd]));
                            return;
                        }
                    }
                    if (e84wt['rootPath'] == '') var ewa$tv = _i0f9k;else ewa$tv = _i0f9k['split'](e84wt['rootPath'])[0x0];
                    _i0f9k['indexOf']('http://') != -0x1 || _i0f9k['indexOf']('https://') != -0x1 ? _m90f['EnvConfig']['load']['call'](vr4zd, _i0f9k, go0mf9, xfo9m, $ek, _a0k$) : ea_i['readFile'](ewa$tv, dbz76c, new dz6bc(js31xo, js31xo['onReadNativeCallBack'], [dbz76c, _i0f9k, go0mf9, xfo9m, $ek, _a0k$, vr4zd]), _i0f9k);
                } else _m90f['EnvConfig']['load']['call'](this, _i0f9k, go0mf9, xfo9m, $ek, _a0k$);
            }
        }, $0k_['resMgrLoad'] = function (m_g0f9, ewa$vt, fk0m_, sj13o, bdz6c, w$ieta, e$v8) {
            fk0m_ === void 0x0 && (fk0m_ = 0x0), sj13o === void 0x0 && (sj13o = ![]), bdz6c === void 0x0 && (bdz6c = ![]), w$ieta === void 0x0 && (w$ieta = 0x0), e$v8 === void 0x0 && (e$v8 = 0x3), m_g0f9['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', m_g0f9), _m90f['EnvConfig']['resMgrLoad'](m_g0f9, (if0, ka0_i$, h2luyn) => {
                js31xo['prototype']['resMgrLoadCallBack'](if0, ka0_i$, h2luyn, ewa$vt);
            }, fk0m_, sj13o, bdz6c, w$ieta, e$v8);
        }, $0k_['resMgrLoadCallBack'] = function ($ae, fm09g_, t4vwr, twai$e) {
            console['log']('buff:::', $ae, t4vwr, ea_i['fileNativeDir'] + '///' + ea_i['fileListName']), twai$e($ae, fm09g_, t4vwr);
        }, $0k_['clearRes'] = function (rcdz7, k$0i) {
            k$0i === void 0x0 && (k$0i = ![]);
            var t8vew4 = this;
            t8vew4['clearRes'](rcdz7, k$0i);
            var rz48vd = ea_i['getFileInfo'](rcdz7);
            if (rz48vd && (rcdz7['indexOf']('http://') != -0x1 || rcdz7['indexOf']('https://') != -0x1)) {
                var xg9o1 = rz48vd['md5'],
                    j35s = ea_i['getFileNativePath'](xg9o1);
                ea_i['remove'](j35s);
            }
        }, js31xo['onReadNativeCallBack'] = function (x3s15j, unqs2, w8$tve, vtewa$, we8$vt, ogxj1, d4zr7b, db6z, $8tve) {
            vtewa$ === void 0x0 && (vtewa$ = !![]), ogxj1 === void 0x0 && (ogxj1 = ![]), db6z === void 0x0 && (db6z = 0x0);
            if (!db6z) {
                var _0ika;
                if (w8$tve == 'json' || w8$tve == 'atlas') _0ika = _m90f['getJson']($8tve['data']);else w8$tve == 'xml' ? _0ika = cdz7b6['parseXMLFromString']($8tve['data']) : _0ika = $8tve['data'];
                d4zr7b['onLoaded'](_0ika), !_m90f['isZiYu'] && _m90f['isPosMsgYu'] && w8$tve != 'arraybuffer' && wx['postMessage']({
                    'url': unqs2,
                    'data': _0ika,
                    'isLoad': !![]
                });
            } else db6z == 0x1 && _m90f['EnvConfig']['load']['call'](d4zr7b, unqs2, w8$tve, vtewa$, we8$vt, ogxj1);
        }, k$_0(js31xo, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), js31xo;
    }(),
        ea_i = function (b7zrc) {
        function a$_ki0() {
            a$_ki0['__super']['call'](this);
            ;
        }
        return k90i_(a$_ki0, 'laya.wx.mini.MiniFileMgr', b7zrc), a$_ki0['isLoadFile'] = function (tr84wv) {
            return a$_ki0['_fileTypeArr']['indexOf'](tr84wv) != -0x1 ? !![] : ![];
        }, a$_ki0['getFileInfo'] = function (sj3q25) {
            var m0of = sj3q25['split']('?')[0x0],
                fo9m0g = a$_ki0['filesListObj'][m0of];
            if (fo9m0g == null) return null;else return fo9m0g;
            return null;
        }, a$_ki0['onFileUpdate'] = function (j15xs, dvzr) {
            var rwv4d8 = j15xs['split']('/'),
                fgm0_ = rwv4d8[rwv4d8['length'] - 0x1],
                f0omg = a$_ki0['getFileInfo'](dvzr);
            if (f0omg == null) a$_ki0['onSaveFile'](dvzr, fgm0_);else {
                if (f0omg['readyUrl'] != dvzr) a$_ki0['remove'](fgm0_, dvzr);
            }
        }, a$_ki0['exits'] = function (o3xs, v8z4) {
            var oxg31 = a$_ki0['getFileNativePath'](o3xs);
            a$_ki0['fs']['getFileInfo']({
                'filePath': oxg31,
                'success': function (hq52un) {
                    v8z4 != null && v8z4['runWith']([0x0, hq52un]);
                },
                'fail': function (eik$a) {
                    v8z4 != null && v8z4['runWith']([0x1, eik$a]);
                }
            });
        }, a$_ki0['read'] = function (s2q5jn, k_a0if, f_0km, lh2n) {
            k_a0if === void 0x0 && (k_a0if = 'ascill'), lh2n === void 0x0 && (lh2n = '');
            var gfm9ox;
            lh2n != '' ? gfm9ox = a$_ki0['getFileNativePath'](s2q5jn) : gfm9ox = s2q5jn, a$_ki0['fs']['readFile']({
                'filePath': gfm9ox,
                'encoding': k_a0if,
                'success': function (k$itea) {
                    f_0km != null && f_0km['runWith']([0x0, k$itea]);
                },
                'fail': function (w4etv) {
                    if (w4etv && lh2n != '') a$_ki0['down'](lh2n, k_a0if, f_0km, lh2n);else f_0km != null && f_0km['runWith']([0x1]);
                }
            });
        }, a$_ki0['readNativeFile'] = function (iwat$, evw48) {
            a$_ki0['fs']['readFile']({
                'filePath': iwat$,
                'encoding': '',
                'success': function (brcz7) {
                    evw48 != null && evw48['runWith']([0x0]);
                },
                'fail': function (vt4) {
                    evw48 != null && evw48['runWith']([0x1]);
                }
            });
        }, a$_ki0['down'] = function (nq5j2s, i_9k, ki0_9, _$0ai) {
            i_9k === void 0x0 && (i_9k = 'ascill'), _$0ai === void 0x0 && (_$0ai = '');
            var joxg1 = a$_ki0['getFileNativePath'](_$0ai),
                $e8wtv = a$_ki0['wxdown']({
                'url': nq5j2s,
                'filePath': joxg1,
                'success': function (awt$ei) {
                    if (awt$ei['statusCode'] === 0xc8) a$_ki0['readFile'](awt$ei['filePath'], i_9k, ki0_9, _$0ai);
                },
                'fail': function (if0_) {
                    ki0_9 != null && ki0_9['runWith']([0x1, if0_]);
                }
            });
            $e8wtv['onProgressUpdate'](function (fgom09) {
                ki0_9 != null && ki0_9['runWith']([0x2, fgom09['progress']]);
            });
        }, a$_ki0['readFile'] = function (lnyu2, weait, o0mf, w$aiet) {
            weait === void 0x0 && (weait = 'ascill'), w$aiet === void 0x0 && (w$aiet = ''), a$_ki0['fs']['readFile']({
                'filePath': lnyu2,
                'encoding': weait,
                'success': function (k_0fai) {
                    if (lnyu2['indexOf']('http://') != -0x1 || lnyu2['indexOf']('https://') != -0x1) a$_ki0['onFileUpdate'](lnyu2, w$aiet);
                    o0mf != null && o0mf['runWith']([0x0, k_0fai]);
                },
                'fail': function (ql2hu) {
                    if (ql2hu) o0mf != null && o0mf['runWith']([0x1, ql2hu]);
                }
            });
        }, a$_ki0['downImg'] = function (j3q2, om9xg, goxm91) {
            goxm91 === void 0x0 && (goxm91 = '');
            var s1j53x = a$_ki0['wxdown']({
                'url': j3q2,
                'success': function (vwr48) {
                    vwr48['statusCode'] === 0xc8 && a$_ki0['copyFile'](vwr48['tempFilePath'], goxm91, om9xg);
                },
                'fail': function (drbz47) {
                    om9xg != null && om9xg['runWith']([0x1, drbz47]);
                }
            });
        }, a$_ki0['copyFile'] = function (ylnuh2, $et8, l2nqu) {
            var $keit = ylnuh2['split']('/'),
                ew4v8t = $keit[$keit['length'] - 0x1],
                mxgo31 = $et8['split']('?')[0x0],
                wevt$a = a$_ki0['getFileInfo']($et8),
                f9k_m = a$_ki0['getFileNativePath'](ew4v8t);
            a$_ki0['fs']['copyFile']({
                'srcPath': ylnuh2,
                'destPath': f9k_m,
                'success': function (r4bd7z) {
                    if (!wevt$a) a$_ki0['onSaveFile']($et8, ew4v8t), l2nqu != null && l2nqu['runWith']([0x0]);else {
                        if (wevt$a['readyUrl'] != $et8) a$_ki0['remove'](ew4v8t, $et8, l2nqu);
                    }
                },
                'fail': function (n25us) {
                    l2nqu != null && l2nqu['runWith']([0x1, n25us]);
                }
            });
        }, a$_ki0['getFileNativePath'] = function (kf0_9m) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + kf0_9m;
        }, a$_ki0['remove'] = function (k0a_if, g9fom, tv$ae) {
            g9fom === void 0x0 && (g9fom = '');
            var z7cb6d = a$_ki0['getFileInfo'](g9fom),
                v8e4 = a$_ki0['getFileNativePath'](z7cb6d['md5']);
            eaki_['loader']['clearRes'](z7cb6d['readyUrl']), a$_ki0['fs']['unlink']({
                'filePath': v8e4,
                'success': function (x135s) {
                    if (g9fom != '') a$_ki0['onSaveFile'](g9fom, k0a_if);
                    tv$ae != null && tv$ae['runWith']([0x0]);
                },
                'fail': function (g3o1mx) {}
            });
        }, a$_ki0['onSaveFile'] = function (ka_ie, sj2nq) {
            var _mfk0 = ka_ie['split']('?')[0x0];
            a$_ki0['filesListObj'][_mfk0] = {
                'md5': sj2nq,
                'readyUrl': ka_ie
            }, a$_ki0['fs']['writeFile']({
                'filePath': a$_ki0['fileNativeDir'] + '/' + a$_ki0['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](a$_ki0['filesListObj']),
                'success': function (te$a) {
                    console['log']('写入测试测试成功：', te$a);
                },
                'fail': function (nqu2lh) {
                    console['log']('写入测试测试失败：', nqu2lh);
                }
            });
        }, a$_ki0['existDir'] = function (ox19m, s3xj1) {
            a$_ki0['fs']['mkdir']({
                'dirPath': ox19m,
                'success': function (_eaki$) {
                    s3xj1 != null && s3xj1['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (n5u2hq) {
                    if (n5u2hq['errMsg']['indexOf']('file already exists') != -0x1) a$_ki0['readSync'](a$_ki0['fileListName'], 'utf8', s3xj1);else s3xj1 != null && s3xj1['runWith']([0x1, n5u2hq]);
                }
            });
        }, a$_ki0['readSync'] = function (g3jxo1, fxgo, rw8vd4, f9_0i) {
            fxgo === void 0x0 && (fxgo = 'ascill'), f9_0i === void 0x0 && (f9_0i = '');
            var aki_e$ = a$_ki0['getFileNativePath'](g3jxo1),
                hul2y;
            try {
                hul2y = a$_ki0['fs']['readFileSync'](aki_e$), rw8vd4 != null && rw8vd4['runWith']([0x0, { 'data': hul2y }]);
            } catch (tvw4e8) {
                rw8vd4 != null && rw8vd4['runWith']([0x1]);
            }
        }, a$_ki0['readCache'] = function () {}, a$_ki0['writeCache'] = function (ia_f0) {
            var x53j = readyUrl['split']('?')[0x0];
            a$_ki0['filesListObj'][x53j] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, a$_ki0['fs']['writeFile']({
                'filePath': a$_ki0['fileNativeDir'] + '/' + a$_ki0['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](a$_ki0['filesListObj']),
                'success': function (u2nhy) {},
                'fail': function (if_0k9) {}
            });
        }, a$_ki0['setNativeFileDir'] = function (lnuh2y) {
            a$_ki0['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + lnuh2y;
        }, a$_ki0['filesListObj'] = {}, a$_ki0['fileNativeDir'] = null, a$_ki0['fileListName'] = 'layaairfiles.txt', a$_ki0['ziyuFileData'] = {}, k$_0(a$_ki0, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), a$_ki0;
    }(d4rv),
        n2lhyu = function (z78d4r) {
        function w$eiat() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], w$eiat['__super']['call'](this), this['_sound'] = w$eiat['_createSound'](), this['_chanell'] = new w4et8(this['_sound']);
        }
        k90i_(w$eiat, 'laya.wx.mini.MiniSound', z78d4r);
        var f0g_m9 = w$eiat['prototype'];
        return f0g_m9['load'] = function (ogj3x) {
            var zvd4 = this;
            ogj3x = e84wt['formatURL'](ogj3x), this['url'] = ogj3x;
            if (w$eiat['_audioCache'][ogj3x]) {
                this['event']('complete');
                return;
            }
            function jxg13() {
                if (w$eiat['_null'] != undefined) zvd4['_sound']['onCanplay'](w$eiat['_null']), zvd4['_sound']['onError'](w$eiat['_null']);else try {
                    zvd4['_sound']['onCanplay'](null), zvd4['_sound']['onError'](null), w$eiat['_null'] = null;
                } catch (gmf) {
                    console['warn']('[wxmini] _clearSound:' + gmf), zvd4['_sound']['onCanplay'](veaw$), zvd4['_sound']['onError'](veaw$), w$eiat['_null'] = veaw$;
                }
            }
            function ox9gmf() {
                nq25['loaded'] = !![], nq25['event']('complete'), w$eiat['_audioCache'][nq25['url']] = nq25;
            }
            function $8te(uh52) {
                console['error']('errCode=' + uh52['errCode'] + '  errMsg=' + uh52['errMsg']), nq25['event']('error');
            }
            function veaw$() {}
            this['_sound']['onCanplay'](ox9gmf), this['_sound']['onError']($8te), this['_sound']['src'] = ogj3x;
            var nq25 = this;
        }, f0g_m9['play'] = function (un2qs5, tw8$) {
            un2qs5 === void 0x0 && (un2qs5 = 0x0), tw8$ === void 0x0 && (tw8$ = 0x0);
            var ieawt$, bz7c6p;
            if (this['url'] == evt$a['_tMusic']) {
                if (!w$eiat['_musicAudio']) w$eiat['_musicAudio'] = this['_sound'];
                ieawt$ = w$eiat['_musicAudio'], bz7c6p = this['_chanell'];
            } else ieawt$ = this['_sound'], bz7c6p = this['_chanell'];
            return ieawt$['src'] = this['url'], ieawt$['startTime'] = 0x0, bz7c6p['isStopped'] && (bz7c6p['url'] = this['url'], bz7c6p['loops'] = tw8$, bz7c6p['startTime'] = un2qs5, bz7c6p['play'](), evt$a['addChannel'](bz7c6p)), bz7c6p;
        }, f0g_m9['dispose'] = function () {
            var _09fm = w$eiat['_audioCache'][this['url']];
            _09fm && (_09fm['src'] = '', delete w$eiat['_audioCache'][this['url']]);
        }, w$tei(0x0, f0g_m9, 'duration', function () {
            return this['_sound']['duration'];
        }), w$eiat['_createSound'] = function () {
            w$eiat['_id']++;
            var jsq513 = _m90f['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return jsq513;
        }, w$eiat['_musicAudio'] = null, w$eiat['_id'] = 0x0, w$eiat['_audioCache'] = {}, w$eiat['_null'] = undefined, w$eiat;
    }(d4rv),
        w4et8 = function (o13gxm) {
        function _f0km9(gfo9x) {
            this['_audio'] = null, this['_onEnd'] = null, _f0km9['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = gfo9x, this['_onEnd'] = cdz7b6['bind'](this['__onEnd'], this), gfo9x['onEnded'](this['_onEnd']);
        }
        k90i_(_f0km9, 'laya.wx.mini.MiniSoundChannel', o13gxm);
        var j31qs5 = _f0km9['prototype'];
        return j31qs5['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (eaki_['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, j31qs5['__onNull'] = function () {}, j31qs5['play'] = function () {
            this['isStopped'] = ![], evt$a['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, j31qs5['stop'] = function () {
            this['isStopped'] = !![], evt$a['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, j31qs5['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, j31qs5['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], evt$a['addChannel'](this), this['_audio']['play']();
        }, w$tei(0x0, j31qs5, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), w$tei(0x0, j31qs5, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), w$tei(0x0, j31qs5, 'volume', function () {
            return 0x1;
        }, function (dz748r) {}), _f0km9['_null'] = undefined, _f0km9;
    }(h2qun5),
        gj1ox = function () {
        function g31oj() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = _m90f['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        k90i_(g31oj, 'laya.wx.mini.MiniVideo');
        var s5j31x = g31oj['prototype'];
        return s5j31x['on'] = function (s1xj53, nhuql2, d7zc) {
            if (s1xj53 == 'loadedmetadata') this['onPlayFunc'] = d7zc['bind'](nhuql2), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else s1xj53 == 'ended' && (this['onEndedFunC'] = d7zc['bind'](nhuql2), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, s5j31x['onTimeUpdateFunc'] = function (tavew) {
            this['position'] = tavew['position'], this['_duration'] = tavew['duration'];
        }, s5j31x['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, s5j31x['onended'] = function (vte48w, ox3s1) {
            this['onEndedFunC'] = ox3s1['bind'](vte48w), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, s5j31x['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, s5j31x['off'] = function (aetv$w, hnly2u, etvw48) {
            if (aetv$w == 'loadedmetadata') this['onPlayFunc'] = etvw48['bind'](hnly2u), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else aetv$w == 'ended' && (this['onEndedFunC'] = etvw48['bind'](hnly2u), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, s5j31x['load'] = function (fo90gm) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = fo90gm;
        }, s5j31x['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, s5j31x['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, s5j31x['size'] = function (fk0i_a, s35x1) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = fk0i_a, this['videoElement']['height'] = s35x1;
        }, s5j31x['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, s5j31x['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, w$tei(0x0, s5j31x, 'duration', function () {
            return this['_duration'];
        }), w$tei(0x0, s5j31x, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (rd4zb) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = rd4zb;
        }), w$tei(0x0, s5j31x, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), w$tei(0x0, s5j31x, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), w$tei(0x0, s5j31x, 'ended', function () {
            return this['videoend'];
        }), w$tei(0x0, s5j31x, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (jn2qs5) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = jn2qs5;
        }), w$tei(0x0, s5j31x, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (we8t$v) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = we8t$v;
        }), w$tei(0x0, s5j31x, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (dz74r) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = dz74r;
        }), w$tei(0x0, s5j31x, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), w$tei(0x0, s5j31x, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function ($k_ai0) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = $k_ai0;
        }), w$tei(0x0, s5j31x, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (lq2hun) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = lq2hun;
        }), w$tei(0x0, s5j31x, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), w$tei(0x0, s5j31x, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (qu2hl) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = qu2hl;
        }), w$tei(0x0, s5j31x, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (huyn) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = huyn;
        }), w$tei(0x0, s5j31x, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (bp6cz7) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = bp6cz7;
        }), g31oj;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var wd8rv in Laya) {
        var g3xm1o = Laya[wd8rv];
        g3xm1o && g3xm1o['__isclass'] && (exports[wd8rv] = g3xm1o);
    }
});