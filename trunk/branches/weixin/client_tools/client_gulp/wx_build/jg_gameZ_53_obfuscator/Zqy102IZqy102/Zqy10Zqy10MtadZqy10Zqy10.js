var J = wx.h$;
(function (window, document, tzech) {
    var qor5b = tzech['un'],
        f$_w9 = tzech['uns'],
        i1x7n4 = tzech['static'],
        e_92pw = tzech['class'],
        mu43l = tzech['getset'],
        tz8hce = tzech['__newvec'],
        ckg8d = laya['utils']['Browser'],
        yojv5r = laya['events']['Event'],
        u34i = laya['events']['EventDispatcher'],
        zp2e_h = laya['resource']['HTMLImage'],
        s9f$w2 = laya['utils']['Handler'],
        b0dg6k = laya['display']['Input'],
        w_9f2p = laya['net']['Loader'],
        qoryb = laya['maths']['Matrix'],
        u3l41a = laya['renders']['Render'],
        kc86d = laya['utils']['RunDriver'],
        y7rjov = laya['media']['Sound'],
        r7jvy = laya['media']['SoundChannel'],
        q5bo = laya['media']['SoundManager'],
        mu4l3 = laya['display']['Stage'],
        orj7vy = laya['net']['URL'],
        b5oq0k = laya['utils']['Utils'],
        ptczh = function () {
        function u41a() {}
        return e_92pw(u41a, 'laya.wx.mini.MiniAdpter'), u41a['getJson'] = function (dgck6) {
            return JSON['parse'](dgck6);
        }, u41a['init'] = function (p2_zwe, i7n1) {
            p2_zwe === void 0x0 && (p2_zwe = ![]), i7n1 === void 0x0 && (i7n1 = ![]);
            if (u41a['_inited']) return;
            u41a['window'] = window;
            if (u41a['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            u41a['_inited'] = !![], u41a['isZiYu'] = i7n1, u41a['isPosMsgYu'] = p2_zwe, u41a['EnvConfig'] = {}, !u41a['isZiYu'] && (bgdk6['setNativeFileDir']('/layaairGame'), bgdk6['existDir'](bgdk6['fileNativeDir'], s9f$w2['create'](u41a, u41a['onMkdirCallBack']))), u41a['window']['focus'] = function () {}, tzech['getUrlPath'] = function () {}, u41a['window']['logtime'] = function (wzpe_) {}, u41a['window']['alertTimeLog'] = function (yr7vjx) {}, u41a['window']['resetShareInfo'] = function () {}, u41a['window']['CanvasRenderingContext2D'] = function () {}, u41a['window']['CanvasRenderingContext2D']['prototype'] = u41a['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], u41a['window']['document']['body']['appendChild'] = function () {}, u41a['EnvConfig']['pixelRatioInt'] = 0x0, kc86d['getPixelRatio'] = u41a['pixelRatio'], u41a['_preCreateElement'] = ckg8d['createElement'], ckg8d['createElement'] = u41a['createElement'], kc86d['createShaderCondition'] = u41a['createShaderCondition'], b5oq0k['parseXMLFromString'] = u41a['parseXMLFromString'], b0dg6k['_createInputElement'] = an14u3['_createInputElement'], u41a['EnvConfig']['load'] = w_9f2p['prototype']['load'], w_9f2p['prototype']['load'] = obqk5['prototype']['load'], u41a['isZiYu'] && p2_zwe && wx['onMessage'](function (q50bkg) {
                q50bkg['isLoad'] && (bgdk6['ziyuFileData'][q50bkg['url']] = q50bkg['data']);
            });
        }, u41a['onMkdirCallBack'] = function (_$f92, b5kqo) {
            if (!_$f92) bgdk6['filesListObj'] = JSON['parse'](b5kqo['data']);
        }, u41a['pixelRatio'] = function () {
            if (!u41a['EnvConfig']['pixelRatioInt']) try {
                var ivrx7j = wx['getSystemInfoSync']();
                return u41a['EnvConfig']['pixelRatioInt'] = ivrx7j['pixelRatio'], ivrx7j = ivrx7j, ivrx7j['pixelRatio'];
            } catch (f_29pw) {}
            return u41a['EnvConfig']['pixelRatioInt'];
        }, u41a['createElement'] = function (u3al4m) {
            if (u3al4m == 'canvas') {
                var nx3i4;
                return u41a['idx'] == 0x1 ? u41a['isZiYu'] ? (nx3i4 = sharedCanvas, nx3i4['style'] = {}) : nx3i4 = window['canvas'] : nx3i4 = window['wx']['createCanvas'](), u41a['idx']++, nx3i4;
            } else {
                if (u3al4m == 'textarea' || u3al4m == 'input') return u41a['onCreateInput'](u3al4m);else {
                    if (u3al4m == 'div') {
                        var he_tpz = u41a['_preCreateElement'](u3al4m);
                        return he_tpz['contains'] = function (m3ula4) {
                            return null;
                        }, he_tpz['removeChild'] = function (czht68) {}, he_tpz;
                    } else return u41a['_preCreateElement'](u3al4m);
                }
            }
        }, u41a['onCreateInput'] = function (hdc86t) {
            var w_pez = u41a['_preCreateElement'](hdc86t);
            return w_pez['focus'] = an14u3['wxinputFocus'], w_pez['blur'] = an14u3['wxinputblur'], w_pez['style'] = {}, w_pez['value'] = 0x0, w_pez['parentElement'] = {}, w_pez['placeholder'] = {}, w_pez['type'] = {}, w_pez['setColor'] = function (gk08d) {}, w_pez['setType'] = function (gd8k60) {}, w_pez['setFontFace'] = function (db0gk6) {}, w_pez['addEventListener'] = function (y5bqo) {}, w_pez['contains'] = function (ob05y) {
                return null;
            }, w_pez['removeChild'] = function (w$sf92) {}, w_pez;
        }, u41a['createShaderCondition'] = function (et_hp) {
            var w2p_ez = this,
                i471xn = function () {
                var u4n13a = et_hp;
                return w2p_ez[et_hp['replace']('this.', '')];
            };
            return i471xn;
        }, u41a['EnvConfig'] = null, u41a['window'] = null, u41a['_preCreateElement'] = null, u41a['_inited'] = ![], u41a['wxRequest'] = null, u41a['systemInfo'] = null, u41a['version'] = '0.0.1', u41a['isZiYu'] = ![], u41a['isPosMsgYu'] = ![], u41a['parseXMLFromString'] = function (dtc8h6) {
            var alu34m, vy5jro;
            dtc8h6 = dtc8h6['replace'](/>\s+</g, '><');
            try {
                alu34m = new window['Parser']['DOMParser']()['parseFromString'](dtc8h6, 'text/xml');
            } catch (l43ua1) {
                throw '需要引入xml解析库文件';
            }
            return alu34m;
        }, u41a['idx'] = 0x1, u41a;
    }(),
        qgbk0 = function () {
        function vyqo5() {}
        e_92pw(vyqo5, 'laya.wx.mini.MiniImage');
        var ceh8z = vyqo5['prototype'];
        return ceh8z['_loadImage'] = function (bq5yo0) {
            var i17xjn = this,
                lu14a = ![];
            bq5yo0['indexOf']('layaNativeDir/') == -0x1 && (lu14a = !![], bq5yo0 = orj7vy['formatURL'](bq5yo0));
            if (!bgdk6['getFileInfo'](bq5yo0)) {
                if (bq5yo0['indexOf']('http://') != -0x1 || bq5yo0['indexOf']('https://') != -0x1) bgdk6['downImg'](bq5yo0, new s9f$w2(vyqo5, vyqo5['onDownImgCallBack'], [bq5yo0, i17xjn]), bq5yo0);else vyqo5['onCreateImage'](bq5yo0, i17xjn, !![]);
            } else vyqo5['onCreateImage'](bq5yo0, i17xjn, !lu14a);
        }, vyqo5['onDownImgCallBack'] = function (w9e, gd0bq, au4lm) {
            if (!au4lm) vyqo5['onCreateImage'](w9e, gd0bq);else gd0bq['onError'](null);
        }, vyqo5['onCreateImage'] = function (i741x, wpf2_, _etzhp) {
            _etzhp === void 0x0 && (_etzhp = ![]);
            var kb0q5o;
            if (!_etzhp) {
                var _2wpe9 = bgdk6['getFileInfo'](i741x),
                    qo5vry = _2wpe9['md5'];
                kb0q5o = bgdk6['getFileNativePath'](qo5vry);
            } else kb0q5o = i741x;
            if (wpf2_['imgCache'] == null) wpf2_['imgCache'] = {};
            var ewp9_2;
            function qo5y() {
                ewp9_2['onload'] = null, ewp9_2['onerror'] = null, delete wpf2_['imgCache'][i741x];
            }
            ;
            var nx3 = function () {
                qo5y(), wpf2_['onLoaded'](ewp9_2);
            },
                we2z_p = function () {
                qo5y(), wpf2_['event']('error', 'Load image failed');
            };
            wpf2_['_type'] == 'nativeimage' ? (ewp9_2 = new ckg8d['window']['Image'](), ewp9_2['crossOrigin'] = '', ewp9_2['onload'] = nx3, ewp9_2['onerror'] = we2z_p, ewp9_2['src'] = kb0q5o, wpf2_['imgCache'][i741x] = ewp9_2) : new zp2e_h['create'](kb0q5o, {
                'onload': nx3,
                'onerror': we2z_p,
                'onCreate': function (zp_2we) {
                    ewp9_2 = zp_2we, wpf2_['imgCache'][i741x] = zp_2we;
                }
            });
        }, vyqo5;
    }(),
        an14u3 = function () {
        function ui3n() {}
        return e_92pw(ui3n, 'laya.wx.mini.MiniInput'), ui3n['_createInputElement'] = function () {
            b0dg6k['_initInput'](b0dg6k['area'] = ckg8d['createElement']('textarea')), b0dg6k['_initInput'](b0dg6k['input'] = ckg8d['createElement']('input')), b0dg6k['inputContainer'] = ckg8d['createElement']('div'), b0dg6k['inputContainer']['style']['position'] = 'absolute', b0dg6k['inputContainer']['style']['zIndex'] = 0x186a0, ckg8d['container']['appendChild'](b0dg6k['inputContainer']), b0dg6k['inputContainer']['setPos'] = function (_2zwe, xyvj7) {
                b0dg6k['inputContainer']['style']['left'] = _2zwe + 'px', b0dg6k['inputContainer']['style']['top'] = xyvj7 + 'px';
            }, tzech['stage']['on']('resize', null, ui3n['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (zhpcte) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), q5bo['_soundClass'] = cgk6d, q5bo['_musicClass'] = cgk6d, window['_videoClass'] = g8kdc;
        }, ui3n['_onStageResize'] = function () {
            var d6hc8t = tzech['stage']['_canvasTransform']['identity']();
            d6hc8t['scale'](ckg8d['width'] / u3l41a['canvas']['width'] / kc86d['getPixelRatio'](), ckg8d['height'] / u3l41a['canvas']['height'] / kc86d['getPixelRatio']());
        }, ui3n['wxinputFocus'] = function (d6gkc8) {
            var alm34u = b0dg6k['inputElement']['target'];
            if (alm34u && !alm34u['editable']) return;
            ptczh['window']['wx']['offKeyboardConfirm'](), ptczh['window']['wx']['offKeyboardInput'](), ptczh['window']['wx']['showKeyboard']({
                'defaultValue': alm34u['text'],
                'maxLength': alm34u['maxChars'],
                'multiple': alm34u['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (_w29p) {},
                'fail': function (gkdb06) {}
            }), ptczh['window']['wx']['onKeyboardConfirm'](function (w_9e2p) {
                var tgc68 = w_9e2p ? w_9e2p['value'] : '';
                alm34u['text'] = tgc68, alm34u['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), ptczh['window']['wx']['onKeyboardInput'](function (k86c) {
                var f29_ = k86c ? k86c['value'] : '';
                if (!alm34u['multiline']) {
                    if (f29_['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                alm34u['text'] = f29_, alm34u['event']('input');
            });
        }, ui3n['inputEnter'] = function () {
            b0dg6k['inputElement']['target']['focus'] = ![];
        }, ui3n['wxinputblur'] = function () {
            ui3n['hideKeyboard']();
        }, ui3n['hideKeyboard'] = function () {
            ptczh['window']['wx']['offKeyboardConfirm'](), ptczh['window']['wx']['offKeyboardInput'](), ptczh['window']['wx']['hideKeyboard']({
                'success': function (hdt86c) {
                    console['log']('隐藏键盘');
                },
                'fail': function (b5yq0) {
                    console['log']('隐藏键盘出错:' + (b5yq0 ? b5yq0['errMsg'] : ''));
                }
            });
        }, ui3n;
    }(),
        obqk5 = function () {
        function _2pw9f() {}
        e_92pw(_2pw9f, 'laya.wx.mini.MiniLoader');
        var $swf29 = _2pw9f['prototype'];
        return $swf29['load'] = function (t8hc6, yr7ojv, d6t, xjin71, pzetc) {
            d6t === void 0x0 && (d6t = !![]), pzetc === void 0x0 && (pzetc = ![]);
            var gc86kd = this;
            gc86kd['_url'] = t8hc6;
            if (t8hc6['indexOf']('data:image') === 0x0) gc86kd['_type'] = yr7ojv = 'image';else gc86kd['_type'] = yr7ojv || (yr7ojv = gc86kd['getTypeFromUrl'](t8hc6));
            gc86kd['_cache'] = d6t, gc86kd['_data'] = null;
            var chept = 'ascii';
            if (t8hc6['indexOf']('.fnt') != -0x1) chept = 'utf8';else yr7ojv == 'arraybuffer' && (chept = '');
            ;
            var ew_p2z = b5oq0k['getFileExtension'](t8hc6);
            if (_2pw9f['_fileTypeArr']['indexOf'](ew_p2z) != -0x1) ptczh['EnvConfig']['load']['call'](this, t8hc6, yr7ojv, d6t, xjin71, pzetc);else {
                if (!bgdk6['getFileInfo'](t8hc6)) {
                    if (t8hc6['indexOf']('layaNativeDir/') != -0x1) {
                        if (ptczh['isZiYu']) {
                            var yjvx = bgdk6['ziyuFileData'][t8hc6];
                            gc86kd['onLoaded'](yjvx);
                            return;
                        } else {
                            cosnole['log']('read read'), bgdk6['read'](t8hc6, chept, new s9f$w2(_2pw9f, _2pw9f['onReadNativeCallBack'], [chept, t8hc6, yr7ojv, d6t, xjin71, pzetc, gc86kd]));
                            return;
                        }
                    }
                    if (orj7vy['rootPath'] == '') var h68tdc = t8hc6;else h68tdc = t8hc6['split'](orj7vy['rootPath'])[0x0];
                    t8hc6['indexOf']('http://') != -0x1 || t8hc6['indexOf']('https://') != -0x1 ? ptczh['EnvConfig']['load']['call'](gc86kd, t8hc6, yr7ojv, d6t, xjin71, pzetc) : bgdk6['readFile'](h68tdc, chept, new s9f$w2(_2pw9f, _2pw9f['onReadNativeCallBack'], [chept, t8hc6, yr7ojv, d6t, xjin71, pzetc, gc86kd]), t8hc6);
                } else ptczh['EnvConfig']['load']['call'](this, t8hc6, yr7ojv, d6t, xjin71, pzetc);
            }
        }, $swf29['resMgrLoad'] = function (yo5b, k0qob, zpecht, n7i1jx, f2$9s, u4na1, pehz) {
            zpecht === void 0x0 && (zpecht = 0x0), n7i1jx === void 0x0 && (n7i1jx = ![]), f2$9s === void 0x0 && (f2$9s = ![]), u4na1 === void 0x0 && (u4na1 = 0x0), pehz === void 0x0 && (pehz = 0x3), yo5b['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', yo5b), ptczh['EnvConfig']['resMgrLoad'](yo5b, (dt8h6, pzeh_2, dg6kc) => {
                _2pw9f['prototype']['resMgrLoadCallBack'](dt8h6, pzeh_2, dg6kc, k0qob);
            }, zpecht, n7i1jx, f2$9s, u4na1, pehz);
        }, $swf29['resMgrLoadCallBack'] = function (ni3, ep2h, qybor5, jxn7i) {
            console['log']('buff:::', ni3, qybor5, bgdk6['fileNativeDir'] + '///' + bgdk6['fileListName']), jxn7i(ni3, ep2h, qybor5);
        }, $swf29['clearRes'] = function (d8g6c, ula1) {
            ula1 === void 0x0 && (ula1 = ![]);
            var xi34n1 = this;
            xi34n1['clearRes'](d8g6c, ula1);
            var _pf29w = bgdk6['getFileInfo'](d8g6c);
            if (_pf29w && (d8g6c['indexOf']('http://') != -0x1 || d8g6c['indexOf']('https://') != -0x1)) {
                var nu13i4 = _pf29w['md5'],
                    xrjiv7 = bgdk6['getFileNativePath'](nu13i4);
                bgdk6['remove'](xrjiv7);
            }
        }, _2pw9f['onReadNativeCallBack'] = function (tc6dg, q0ob, l3u41, i143un, i4x7n, rvy7jx, k08g6d, rb5q, vrijx) {
            i143un === void 0x0 && (i143un = !![]), rvy7jx === void 0x0 && (rvy7jx = ![]), rb5q === void 0x0 && (rb5q = 0x0);
            if (!rb5q) {
                var ehp_zt;
                if (l3u41 == 'json' || l3u41 == 'atlas') ehp_zt = ptczh['getJson'](vrijx['data']);else l3u41 == 'xml' ? ehp_zt = b5oq0k['parseXMLFromString'](vrijx['data']) : ehp_zt = vrijx['data'];
                k08g6d['onLoaded'](ehp_zt), !ptczh['isZiYu'] && ptczh['isPosMsgYu'] && l3u41 != 'arraybuffer' && wx['postMessage']({
                    'url': q0ob,
                    'data': ehp_zt,
                    'isLoad': !![]
                });
            } else rb5q == 0x1 && ptczh['EnvConfig']['load']['call'](k08g6d, q0ob, l3u41, i143un, i4x7n, rvy7jx);
        }, i1x7n4(_2pw9f, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), _2pw9f;
    }(),
        bgdk6 = function (h8z6c) {
        function ni1x74() {
            ni1x74['__super']['call'](this);
            ;
        }
        return e_92pw(ni1x74, 'laya.wx.mini.MiniFileMgr', h8z6c), ni1x74['isLoadFile'] = function (vi7xjn) {
            return ni1x74['_fileTypeArr']['indexOf'](vi7xjn) != -0x1 ? !![] : ![];
        }, ni1x74['getFileInfo'] = function (d08g) {
            var qvr5oy = d08g['split']('?')[0x0],
                _2pewz = ni1x74['filesListObj'][qvr5oy];
            if (_2pewz == null) return null;else return _2pewz;
            return null;
        }, ni1x74['onFileUpdate'] = function (tz68c, orq5) {
            var yq5r = tz68c['split']('/'),
                dkbgq = yq5r[yq5r['length'] - 0x1],
                kqgb05 = ni1x74['getFileInfo'](orq5);
            if (kqgb05 == null) ni1x74['onSaveFile'](orq5, dkbgq);else {
                if (kqgb05['readyUrl'] != orq5) ni1x74['remove'](dkbgq, orq5);
            }
        }, ni1x74['exits'] = function (zh_pt, h2_zpe) {
            var tcdh86 = ni1x74['getFileNativePath'](zh_pt);
            ni1x74['fs']['getFileInfo']({
                'filePath': tcdh86,
                'success': function (_wze2) {
                    h2_zpe != null && h2_zpe['runWith']([0x0, _wze2]);
                },
                'fail': function (phz_2) {
                    h2_zpe != null && h2_zpe['runWith']([0x1, phz_2]);
                }
            });
        }, ni1x74['read'] = function (ix47n1, p_we92, yvjro5, ryqb) {
            p_we92 === void 0x0 && (p_we92 = 'ascill'), ryqb === void 0x0 && (ryqb = '');
            var jxvr7;
            ryqb != '' ? jxvr7 = ni1x74['getFileNativePath'](ix47n1) : jxvr7 = ix47n1, ni1x74['fs']['readFile']({
                'filePath': jxvr7,
                'encoding': p_we92,
                'success': function (g68tdc) {
                    yvjro5 != null && yvjro5['runWith']([0x0, g68tdc]);
                },
                'fail': function (zehtc) {
                    if (zehtc && ryqb != '') ni1x74['down'](ryqb, p_we92, yvjro5, ryqb);else yvjro5 != null && yvjro5['runWith']([0x1]);
                }
            });
        }, ni1x74['readNativeFile'] = function (gd68k, i7jvxn) {
            ni1x74['fs']['readFile']({
                'filePath': gd68k,
                'encoding': '',
                'success': function (w9_2pe) {
                    i7jvxn != null && i7jvxn['runWith']([0x0]);
                },
                'fail': function (byq05) {
                    i7jvxn != null && i7jvxn['runWith']([0x1]);
                }
            });
        }, ni1x74['down'] = function (u4n13i, z2pw, nij7v, d6k80g) {
            z2pw === void 0x0 && (z2pw = 'ascill'), d6k80g === void 0x0 && (d6k80g = '');
            var p_ewz = ni1x74['getFileNativePath'](d6k80g),
                tceh = ni1x74['wxdown']({
                'url': u4n13i,
                'filePath': p_ewz,
                'success': function (_$2) {
                    if (_$2['statusCode'] === 0xc8) ni1x74['readFile'](_$2['filePath'], z2pw, nij7v, d6k80g);
                },
                'fail': function (nx1i7) {
                    nij7v != null && nij7v['runWith']([0x1, nx1i7]);
                }
            });
            tceh['onProgressUpdate'](function (pf_w) {
                nij7v != null && nij7v['runWith']([0x2, pf_w['progress']]);
            });
        }, ni1x74['readFile'] = function (jvoy, t8chz6, qok50b, o5yqv) {
            t8chz6 === void 0x0 && (t8chz6 = 'ascill'), o5yqv === void 0x0 && (o5yqv = ''), ni1x74['fs']['readFile']({
                'filePath': jvoy,
                'encoding': t8chz6,
                'success': function (tcd86) {
                    if (jvoy['indexOf']('http://') != -0x1 || jvoy['indexOf']('https://') != -0x1) ni1x74['onFileUpdate'](jvoy, o5yqv);
                    qok50b != null && qok50b['runWith']([0x0, tcd86]);
                },
                'fail': function (xn13i4) {
                    if (xn13i4) qok50b != null && qok50b['runWith']([0x1, xn13i4]);
                }
            });
        }, ni1x74['downImg'] = function (yqo5vr, kg806d, tz_hep) {
            tz_hep === void 0x0 && (tz_hep = '');
            var tgd6c8 = ni1x74['wxdown']({
                'url': yqo5vr,
                'success': function (ui41n) {
                    ui41n['statusCode'] === 0xc8 && ni1x74['copyFile'](ui41n['tempFilePath'], tz_hep, kg806d);
                },
                'fail': function (xj7ivr) {
                    kg806d != null && kg806d['runWith']([0x1, xj7ivr]);
                }
            });
        }, ni1x74['copyFile'] = function (hpzt_e, _we92p, gkb0d) {
            var gk8 = hpzt_e['split']('/'),
                ov5qyr = gk8[gk8['length'] - 0x1],
                umal = _we92p['split']('?')[0x0],
                ua13n4 = ni1x74['getFileInfo'](_we92p),
                vrjo5y = ni1x74['getFileNativePath'](ov5qyr);
            ni1x74['fs']['copyFile']({
                'srcPath': hpzt_e,
                'destPath': vrjo5y,
                'success': function (ezhtp_) {
                    if (!ua13n4) ni1x74['onSaveFile'](_we92p, ov5qyr), gkb0d != null && gkb0d['runWith']([0x0]);else {
                        if (ua13n4['readyUrl'] != _we92p) ni1x74['remove'](ov5qyr, _we92p, gkb0d);
                    }
                },
                'fail': function (jyrov5) {
                    gkb0d != null && gkb0d['runWith']([0x1, jyrov5]);
                }
            });
        }, ni1x74['getFileNativePath'] = function (malu3) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + malu3;
        }, ni1x74['remove'] = function (v5rqoy, cztphe, vjor) {
            cztphe === void 0x0 && (cztphe = '');
            var vxijr = ni1x74['getFileInfo'](cztphe),
                j5ovry = ni1x74['getFileNativePath'](vxijr['md5']);
            tzech['loader']['clearRes'](vxijr['readyUrl']), ni1x74['fs']['unlink']({
                'filePath': j5ovry,
                'success': function (eczh) {
                    if (cztphe != '') ni1x74['onSaveFile'](cztphe, v5rqoy);
                    vjor != null && vjor['runWith']([0x0]);
                },
                'fail': function (yrxj7v) {}
            });
        }, ni1x74['onSaveFile'] = function (k0bqd, rqb5yo) {
            var phctze = k0bqd['split']('?')[0x0];
            ni1x74['filesListObj'][phctze] = {
                'md5': rqb5yo,
                'readyUrl': k0bqd
            }, ni1x74['fs']['writeFile']({
                'filePath': ni1x74['fileNativeDir'] + '/' + ni1x74['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](ni1x74['filesListObj']),
                'success': function (hz2p) {
                    console['log']('写入测试测试成功：', hz2p);
                },
                'fail': function (u4la31) {
                    console['log']('写入测试测试失败：', u4la31);
                }
            });
        }, ni1x74['existDir'] = function (htc6d8, u143i) {
            ni1x74['fs']['mkdir']({
                'dirPath': htc6d8,
                'success': function (r5qyb) {
                    u143i != null && u143i['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (h_e2pz) {
                    if (h_e2pz['errMsg']['indexOf']('file already exists') != -0x1) ni1x74['readSync'](ni1x74['fileListName'], 'utf8', u143i);else u143i != null && u143i['runWith']([0x1, h_e2pz]);
                }
            });
        }, ni1x74['readSync'] = function (ep2z_h, etch8z, wsf$2, thz_p) {
            etch8z === void 0x0 && (etch8z = 'ascill'), thz_p === void 0x0 && (thz_p = '');
            var kqbo5 = ni1x74['getFileNativePath'](ep2z_h),
                ep_h;
            try {
                ep_h = ni1x74['fs']['readFileSync'](kqbo5), wsf$2 != null && wsf$2['runWith']([0x0, { 'data': ep_h }]);
            } catch (f2_w9$) {
                wsf$2 != null && wsf$2['runWith']([0x1]);
            }
        }, ni1x74['readCache'] = function () {}, ni1x74['writeCache'] = function (jxr7yv) {
            var czth86 = readyUrl['split']('?')[0x0];
            ni1x74['filesListObj'][czth86] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, ni1x74['fs']['writeFile']({
                'filePath': ni1x74['fileNativeDir'] + '/' + ni1x74['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](ni1x74['filesListObj']),
                'success': function (xjvni7) {},
                'fail': function (j5oyrv) {}
            });
        }, ni1x74['setNativeFileDir'] = function (vxnj7i) {
            ni1x74['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + vxnj7i;
        }, ni1x74['filesListObj'] = {}, ni1x74['fileNativeDir'] = null, ni1x74['fileListName'] = 'layaairfiles.txt', ni1x74['ziyuFileData'] = {}, i1x7n4(ni1x74, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), ni1x74;
    }(u34i),
        cgk6d = function (jxin7v) {
        function t6hcd8() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], t6hcd8['__super']['call'](this), this['_sound'] = t6hcd8['_createSound'](), this['_chanell'] = new nxi47(this['_sound']);
        }
        e_92pw(t6hcd8, 'laya.wx.mini.MiniSound', jxin7v);
        var n1i34u = t6hcd8['prototype'];
        return n1i34u['load'] = function (xni714) {
            var hpz_et = this;
            xni714 = orj7vy['formatURL'](xni714), this['url'] = xni714;
            if (t6hcd8['_audioCache'][xni714]) {
                this['event']('complete');
                return;
            }
            function x7vji() {
                if (t6hcd8['_null'] != undefined) hpz_et['_sound']['onCanplay'](t6hcd8['_null']), hpz_et['_sound']['onError'](t6hcd8['_null']);else try {
                    hpz_et['_sound']['onCanplay'](null), hpz_et['_sound']['onError'](null), t6hcd8['_null'] = null;
                } catch (ro5byq) {
                    console['warn']('[wxmini] _clearSound:' + ro5byq), hpz_et['_sound']['onCanplay'](e_zpw), hpz_et['_sound']['onError'](e_zpw), t6hcd8['_null'] = e_zpw;
                }
            }
            function zhe2p() {
                wz_p2e['loaded'] = !![], wz_p2e['event']('complete'), t6hcd8['_audioCache'][wz_p2e['url']] = wz_p2e;
            }
            function yrqbo5(vxy7) {
                console['error']('errCode=' + vxy7['errCode'] + '  errMsg=' + vxy7['errMsg']), wz_p2e['event']('error');
            }
            function e_zpw() {}
            this['_sound']['onCanplay'](zhe2p), this['_sound']['onError'](yrqbo5), this['_sound']['src'] = xni714;
            var wz_p2e = this;
        }, n1i34u['play'] = function (s$9w2, i34u) {
            s$9w2 === void 0x0 && (s$9w2 = 0x0), i34u === void 0x0 && (i34u = 0x0);
            var vo7rjy, pe2z_w;
            if (this['url'] == q5bo['_tMusic']) {
                if (!t6hcd8['_musicAudio']) t6hcd8['_musicAudio'] = this['_sound'];
                vo7rjy = t6hcd8['_musicAudio'], pe2z_w = this['_chanell'];
            } else vo7rjy = this['_sound'], pe2z_w = this['_chanell'];
            return vo7rjy['src'] = this['url'], vo7rjy['startTime'] = 0x0, pe2z_w['isStopped'] && (pe2z_w['url'] = this['url'], pe2z_w['loops'] = i34u, pe2z_w['startTime'] = s$9w2, pe2z_w['play'](), q5bo['addChannel'](pe2z_w)), pe2z_w;
        }, n1i34u['dispose'] = function () {
            var ij71nx = t6hcd8['_audioCache'][this['url']];
            ij71nx && (ij71nx['src'] = '', delete t6hcd8['_audioCache'][this['url']]);
        }, mu43l(0x0, n1i34u, 'duration', function () {
            return this['_sound']['duration'];
        }), t6hcd8['_createSound'] = function () {
            t6hcd8['_id']++;
            var d8cth = ptczh['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return d8cth;
        }, t6hcd8['_musicAudio'] = null, t6hcd8['_id'] = 0x0, t6hcd8['_audioCache'] = {}, t6hcd8['_null'] = undefined, t6hcd8;
    }(u34i),
        nxi47 = function (epz_h2) {
        function e_pzht(_wf2$) {
            this['_audio'] = null, this['_onEnd'] = null, e_pzht['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = _wf2$, this['_onEnd'] = b5oq0k['bind'](this['__onEnd'], this), _wf2$['onEnded'](this['_onEnd']);
        }
        e_92pw(e_pzht, 'laya.wx.mini.MiniSoundChannel', epz_h2);
        var byrqo5 = e_pzht['prototype'];
        return byrqo5['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (tzech['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, byrqo5['__onNull'] = function () {}, byrqo5['play'] = function () {
            this['isStopped'] = ![], q5bo['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, byrqo5['stop'] = function () {
            this['isStopped'] = !![], q5bo['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, byrqo5['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, byrqo5['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], q5bo['addChannel'](this), this['_audio']['play']();
        }, mu43l(0x0, byrqo5, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), mu43l(0x0, byrqo5, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), mu43l(0x0, byrqo5, 'volume', function () {
            return 0x1;
        }, function (vy5qo) {}), e_pzht['_null'] = undefined, e_pzht;
    }(r7jvy),
        g8kdc = function () {
        function th86c() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = ptczh['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        e_92pw(th86c, 'laya.wx.mini.MiniVideo');
        var ixjvr7 = th86c['prototype'];
        return ixjvr7['on'] = function (oyq0b, u4ml3, jix17) {
            if (oyq0b == 'loadedmetadata') this['onPlayFunc'] = jix17['bind'](u4ml3), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else oyq0b == 'ended' && (this['onEndedFunC'] = jix17['bind'](u4ml3), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, ixjvr7['onTimeUpdateFunc'] = function (nj1i7x) {
            this['position'] = nj1i7x['position'], this['_duration'] = nj1i7x['duration'];
        }, ixjvr7['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, ixjvr7['onended'] = function (ivxjr, bgq0d) {
            this['onEndedFunC'] = bgq0d['bind'](ivxjr), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, ixjvr7['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, ixjvr7['off'] = function (riv7jx, a3l4mu, _w$) {
            if (riv7jx == 'loadedmetadata') this['onPlayFunc'] = _w$['bind'](a3l4mu), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else riv7jx == 'ended' && (this['onEndedFunC'] = _w$['bind'](a3l4mu), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, ixjvr7['load'] = function (vyxj7r) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = vyxj7r;
        }, ixjvr7['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, ixjvr7['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, ixjvr7['size'] = function (yr5oqb, s2fw9$) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = yr5oqb, this['videoElement']['height'] = s2fw9$;
        }, ixjvr7['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, ixjvr7['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, mu43l(0x0, ixjvr7, 'duration', function () {
            return this['_duration'];
        }), mu43l(0x0, ixjvr7, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (f92$_) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = f92$_;
        }), mu43l(0x0, ixjvr7, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), mu43l(0x0, ixjvr7, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), mu43l(0x0, ixjvr7, 'ended', function () {
            return this['videoend'];
        }), mu43l(0x0, ixjvr7, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (r7xj) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = r7xj;
        }), mu43l(0x0, ixjvr7, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (oyr5b) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = oyr5b;
        }), mu43l(0x0, ixjvr7, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (eh_2zp) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = eh_2zp;
        }), mu43l(0x0, ixjvr7, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), mu43l(0x0, ixjvr7, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (chz6t8) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = chz6t8;
        }), mu43l(0x0, ixjvr7, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (j7vry) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = j7vry;
        }), mu43l(0x0, ixjvr7, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), mu43l(0x0, ixjvr7, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (wpe92_) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = wpe92_;
        }), mu43l(0x0, ixjvr7, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (jxir) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = jxir;
        }), mu43l(0x0, ixjvr7, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (zh6tc) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = zh6tc;
        }), th86c;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var dkc8 in Laya) {
        var ewzp = Laya[dkc8];
        ewzp && ewzp['__isclass'] && (exports[dkc8] = ewzp);
    }
});