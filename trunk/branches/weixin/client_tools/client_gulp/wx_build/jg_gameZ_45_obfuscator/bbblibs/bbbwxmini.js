var _ = wx.y$;
(function (window, document, tb8n1) {
    var xu_hd = tb8n1['un'],
        ko07y = tb8n1['uns'],
        yhk7p0 = tb8n1['static'],
        kpy07h = tb8n1['class'],
        z0uhp7 = tb8n1['getset'],
        inqajm = tb8n1['__newvec'],
        qa$9 = laya['utils']['Browser'],
        s6r52g = laya['events']['Event'],
        p7uhz = laya['events']['EventDispatcher'],
        wkeo4 = laya['resource']['HTMLImage'],
        g6f = laya['utils']['Handler'],
        qn8vi1 = laya['display']['Input'],
        $xdma = laya['net']['Loader'],
        iajq = laya['maths']['Matrix'],
        d_a$x = laya['renders']['Render'],
        a$m9q = laya['utils']['RunDriver'],
        hz7_u0 = laya['media']['Sound'],
        r6s25 = laya['media']['SoundChannel'],
        bls8tc = laya['media']['SoundManager'],
        b1lt8c = laya['display']['Stage'],
        owy4ke = laya['net']['URL'],
        kyo70p = laya['utils']['Utils'],
        s62g5 = function () {
        function _x$d9a() {}
        return kpy07h(_x$d9a, 'laya.wx.mini.MiniAdpter'), _x$d9a['getJson'] = function (jvqim) {
            return JSON['parse'](jvqim);
        }, _x$d9a['init'] = function (i9jam, o0kp7) {
            i9jam === void 0x0 && (i9jam = ![]), o0kp7 === void 0x0 && (o0kp7 = ![]);
            if (_x$d9a['_inited']) return;
            _x$d9a['window'] = window;
            if (_x$d9a['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            _x$d9a['_inited'] = !![], _x$d9a['isZiYu'] = o0kp7, _x$d9a['isPosMsgYu'] = i9jam, _x$d9a['EnvConfig'] = {}, !_x$d9a['isZiYu'] && (duz$['setNativeFileDir']('/layaairGame'), duz$['existDir'](duz$['fileNativeDir'], g6f['create'](_x$d9a, _x$d9a['onMkdirCallBack']))), _x$d9a['window']['focus'] = function () {}, tb8n1['getUrlPath'] = function () {}, _x$d9a['window']['logtime'] = function (yekw4o) {}, _x$d9a['window']['alertTimeLog'] = function (bc1tv) {}, _x$d9a['window']['resetShareInfo'] = function () {}, _x$d9a['window']['CanvasRenderingContext2D'] = function () {}, _x$d9a['window']['CanvasRenderingContext2D']['prototype'] = _x$d9a['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], _x$d9a['window']['document']['body']['appendChild'] = function () {}, _x$d9a['EnvConfig']['pixelRatioInt'] = 0x0, a$m9q['getPixelRatio'] = _x$d9a['pixelRatio'], _x$d9a['_preCreateElement'] = qa$9['createElement'], qa$9['createElement'] = _x$d9a['createElement'], a$m9q['createShaderCondition'] = _x$d9a['createShaderCondition'], kyo70p['parseXMLFromString'] = _x$d9a['parseXMLFromString'], qn8vi1['_createInputElement'] = rg265['_createInputElement'], _x$d9a['EnvConfig']['load'] = $xdma['prototype']['load'], $xdma['prototype']['load'] = tl8cbs['prototype']['load'], _x$d9a['isZiYu'] && i9jam && wx['onMessage'](function (qimjvn) {
                qimjvn['isLoad'] && (duz$['ziyuFileData'][qimjvn['url']] = qimjvn['data']);
            });
        }, _x$d9a['onMkdirCallBack'] = function (_duzx, rs62lg) {
            if (!_duzx) duz$['filesListObj'] = JSON['parse'](rs62lg['data']);
        }, _x$d9a['pixelRatio'] = function () {
            if (!_x$d9a['EnvConfig']['pixelRatioInt']) try {
                var fg26 = wx['getSystemInfoSync']();
                return _x$d9a['EnvConfig']['pixelRatioInt'] = fg26['pixelRatio'], fg26 = fg26, fg26['pixelRatio'];
            } catch (e43wko) {}
            return _x$d9a['EnvConfig']['pixelRatioInt'];
        }, _x$d9a['createElement'] = function (a$9dx_) {
            if (a$9dx_ == 'canvas') {
                var jnqmvi;
                return _x$d9a['idx'] == 0x1 ? _x$d9a['isZiYu'] ? (jnqmvi = sharedCanvas, jnqmvi['style'] = {}) : jnqmvi = window['canvas'] : jnqmvi = window['wx']['createCanvas'](), _x$d9a['idx']++, jnqmvi;
            } else {
                if (a$9dx_ == 'textarea' || a$9dx_ == 'input') return _x$d9a['onCreateInput'](a$9dx_);else {
                    if (a$9dx_ == 'div') {
                        var j9aqi = _x$d9a['_preCreateElement'](a$9dx_);
                        return j9aqi['contains'] = function (hz7u_) {
                            return null;
                        }, j9aqi['removeChild'] = function (tvc8) {}, j9aqi;
                    } else return _x$d9a['_preCreateElement'](a$9dx_);
                }
            }
        }, _x$d9a['onCreateInput'] = function (ewpyo) {
            var s5g2 = _x$d9a['_preCreateElement'](ewpyo);
            return s5g2['focus'] = rg265['wxinputFocus'], s5g2['blur'] = rg265['wxinputblur'], s5g2['style'] = {}, s5g2['value'] = 0x0, s5g2['parentElement'] = {}, s5g2['placeholder'] = {}, s5g2['type'] = {}, s5g2['setColor'] = function (vt8i1) {}, s5g2['setType'] = function (wpyok) {}, s5g2['setFontFace'] = function (cg2sb) {}, s5g2['addEventListener'] = function (srl2g) {}, s5g2['contains'] = function (c2gbsl) {
                return null;
            }, s5g2['removeChild'] = function (lstbc8) {}, s5g2;
        }, _x$d9a['createShaderCondition'] = function (p0uzh7) {
            var n81ivt = this,
                n1iv8 = function () {
                var jma9q = p0uzh7;
                return n81ivt[p0uzh7['replace']('this.', '')];
            };
            return n1iv8;
        }, _x$d9a['EnvConfig'] = null, _x$d9a['window'] = null, _x$d9a['_preCreateElement'] = null, _x$d9a['_inited'] = ![], _x$d9a['wxRequest'] = null, _x$d9a['systemInfo'] = null, _x$d9a['version'] = '0.0.1', _x$d9a['isZiYu'] = ![], _x$d9a['isPosMsgYu'] = ![], _x$d9a['parseXMLFromString'] = function (invmqj) {
            var cbt18, bsgl2;
            invmqj = invmqj['replace'](/>\s+</g, '><');
            try {
                cbt18 = new window['Parser']['DOMParser']()['parseFromString'](invmqj, 'text/xml');
            } catch (bvt81c) {
                throw '需要引入xml解析库文件';
            }
            return cbt18;
        }, _x$d9a['idx'] = 0x1, _x$d9a;
    }(),
        damx = function () {
        function mnqa() {}
        kpy07h(mnqa, 'laya.wx.mini.MiniImage');
        var d9$amx = mnqa['prototype'];
        return d9$amx['_loadImage'] = function (b81ctv) {
            var h07kyp = this,
                it1n = ![];
            b81ctv['indexOf']('layaNativeDir/') == -0x1 && (it1n = !![], b81ctv = owy4ke['formatURL'](b81ctv));
            if (!duz$['getFileInfo'](b81ctv)) {
                if (b81ctv['indexOf']('http://') != -0x1 || b81ctv['indexOf']('https://') != -0x1) duz$['downImg'](b81ctv, new g6f(mnqa, mnqa['onDownImgCallBack'], [b81ctv, h07kyp]), b81ctv);else mnqa['onCreateImage'](b81ctv, h07kyp, !![]);
            } else mnqa['onCreateImage'](b81ctv, h07kyp, !it1n);
        }, mnqa['onDownImgCallBack'] = function (nijqv1, o7ekp, qam9$j) {
            if (!qam9$j) mnqa['onCreateImage'](nijqv1, o7ekp);else o7ekp['onError'](null);
        }, mnqa['onCreateImage'] = function (a9mij, ky7o0, l1tbc8) {
            l1tbc8 === void 0x0 && (l1tbc8 = ![]);
            var sr5g;
            if (!l1tbc8) {
                var r26f = duz$['getFileInfo'](a9mij),
                    t1in8 = r26f['md5'];
                sr5g = duz$['getFileNativePath'](t1in8);
            } else sr5g = a9mij;
            if (ky7o0['imgCache'] == null) ky7o0['imgCache'] = {};
            var h0pz7u;
            function r26ls() {
                h0pz7u['onload'] = null, h0pz7u['onerror'] = null, delete ky7o0['imgCache'][a9mij];
            }
            ;
            var g2rs5 = function () {
                r26ls(), ky7o0['onLoaded'](h0pz7u);
            },
                s2cblt = function () {
                r26ls(), ky7o0['event']('error', 'Load image failed');
            };
            ky7o0['_type'] == 'nativeimage' ? (h0pz7u = new qa$9['window']['Image'](), h0pz7u['crossOrigin'] = '', h0pz7u['onload'] = g2rs5, h0pz7u['onerror'] = s2cblt, h0pz7u['src'] = sr5g, ky7o0['imgCache'][a9mij] = h0pz7u) : new wkeo4['create'](sr5g, {
                'onload': g2rs5,
                'onerror': s2cblt,
                'onCreate': function (ewoy4k) {
                    h0pz7u = ewoy4k, ky7o0['imgCache'][a9mij] = ewoy4k;
                }
            });
        }, mnqa;
    }(),
        rg265 = function () {
        function opeky() {}
        return kpy07h(opeky, 'laya.wx.mini.MiniInput'), opeky['_createInputElement'] = function () {
            qn8vi1['_initInput'](qn8vi1['area'] = qa$9['createElement']('textarea')), qn8vi1['_initInput'](qn8vi1['input'] = qa$9['createElement']('input')), qn8vi1['inputContainer'] = qa$9['createElement']('div'), qn8vi1['inputContainer']['style']['position'] = 'absolute', qn8vi1['inputContainer']['style']['zIndex'] = 0x186a0, qa$9['container']['appendChild'](qn8vi1['inputContainer']), qn8vi1['inputContainer']['setPos'] = function (mni, blt8c1) {
                qn8vi1['inputContainer']['style']['left'] = mni + 'px', qn8vi1['inputContainer']['style']['top'] = blt8c1 + 'px';
            }, tb8n1['stage']['on']('resize', null, opeky['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (y7zh) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), bls8tc['_soundClass'] = bc2sl, bls8tc['_musicClass'] = bc2sl, window['_videoClass'] = phzy0;
        }, opeky['_onStageResize'] = function () {
            var $9majq = tb8n1['stage']['_canvasTransform']['identity']();
            $9majq['scale'](qa$9['width'] / d_a$x['canvas']['width'] / a$m9q['getPixelRatio'](), qa$9['height'] / d_a$x['canvas']['height'] / a$m9q['getPixelRatio']());
        }, opeky['wxinputFocus'] = function (v8qi) {
            var a$d9xm = qn8vi1['inputElement']['target'];
            if (a$d9xm && !a$d9xm['editable']) return;
            s62g5['window']['wx']['offKeyboardConfirm'](), s62g5['window']['wx']['offKeyboardInput'](), s62g5['window']['wx']['showKeyboard']({
                'defaultValue': a$d9xm['text'],
                'maxLength': a$d9xm['maxChars'],
                'multiple': a$d9xm['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (jqm$9) {},
                'fail': function (ypkew) {}
            }), s62g5['window']['wx']['onKeyboardConfirm'](function (ax$md) {
                var p0yz7 = ax$md ? ax$md['value'] : '';
                a$d9xm['text'] = p0yz7, a$d9xm['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), s62g5['window']['wx']['onKeyboardInput'](function (vbnt81) {
                var oywek4 = vbnt81 ? vbnt81['value'] : '';
                if (!a$d9xm['multiline']) {
                    if (oywek4['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                a$d9xm['text'] = oywek4, a$d9xm['event']('input');
            });
        }, opeky['inputEnter'] = function () {
            qn8vi1['inputElement']['target']['focus'] = ![];
        }, opeky['wxinputblur'] = function () {
            opeky['hideKeyboard']();
        }, opeky['hideKeyboard'] = function () {
            s62g5['window']['wx']['offKeyboardConfirm'](), s62g5['window']['wx']['offKeyboardInput'](), s62g5['window']['wx']['hideKeyboard']({
                'success': function (g2rl6) {
                    console['log']('隐藏键盘');
                },
                'fail': function ($q9) {
                    console['log']('隐藏键盘出错:' + ($q9 ? $q9['errMsg'] : ''));
                }
            });
        }, opeky;
    }(),
        tl8cbs = function () {
        function h7yk() {}
        kpy07h(h7yk, 'laya.wx.mini.MiniLoader');
        var hpuz = h7yk['prototype'];
        return hpuz['load'] = function (rs625, xjam$, v1ntb, gs2lr, qin1) {
            v1ntb === void 0x0 && (v1ntb = !![]), qin1 === void 0x0 && (qin1 = ![]);
            var o4wky = this;
            o4wky['_url'] = rs625;
            if (rs625['indexOf']('data:image') === 0x0) o4wky['_type'] = xjam$ = 'image';else o4wky['_type'] = xjam$ || (xjam$ = o4wky['getTypeFromUrl'](rs625));
            o4wky['_cache'] = v1ntb, o4wky['_data'] = null;
            var ypo7k0 = 'ascii';
            if (rs625['indexOf']('.fnt') != -0x1) ypo7k0 = 'utf8';else xjam$ == 'arraybuffer' && (ypo7k0 = '');
            ;
            var z0_7u = kyo70p['getFileExtension'](rs625);
            if (h7yk['_fileTypeArr']['indexOf'](z0_7u) != -0x1) s62g5['EnvConfig']['load']['call'](this, rs625, xjam$, v1ntb, gs2lr, qin1);else {
                if (!duz$['getFileInfo'](rs625)) {
                    if (rs625['indexOf']('layaNativeDir/') != -0x1) {
                        if (s62g5['isZiYu']) {
                            var clstb8 = duz$['ziyuFileData'][rs625];
                            o4wky['onLoaded'](clstb8);
                            return;
                        } else {
                            cosnole['log']('read read'), duz$['read'](rs625, ypo7k0, new g6f(h7yk, h7yk['onReadNativeCallBack'], [ypo7k0, rs625, xjam$, v1ntb, gs2lr, qin1, o4wky]));
                            return;
                        }
                    }
                    if (owy4ke['rootPath'] == '') var jmniqv = rs625;else jmniqv = rs625['split'](owy4ke['rootPath'])[0x0];
                    rs625['indexOf']('http://') != -0x1 || rs625['indexOf']('https://') != -0x1 ? s62g5['EnvConfig']['load']['call'](o4wky, rs625, xjam$, v1ntb, gs2lr, qin1) : duz$['readFile'](jmniqv, ypo7k0, new g6f(h7yk, h7yk['onReadNativeCallBack'], [ypo7k0, rs625, xjam$, v1ntb, gs2lr, qin1, o4wky]), rs625);
                } else s62g5['EnvConfig']['load']['call'](this, rs625, xjam$, v1ntb, gs2lr, qin1);
            }
        }, hpuz['resMgrLoad'] = function (eykopw, h70_z, e4wky, gs2rl, jvniqm, m$9xaj, aimnq) {
            e4wky === void 0x0 && (e4wky = 0x0), gs2rl === void 0x0 && (gs2rl = ![]), jvniqm === void 0x0 && (jvniqm = ![]), m$9xaj === void 0x0 && (m$9xaj = 0x0), aimnq === void 0x0 && (aimnq = 0x3), eykopw['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', eykopw), s62g5['EnvConfig']['resMgrLoad'](eykopw, (nvit8, sc2bt, yz0p7h) => {
                h7yk['prototype']['resMgrLoadCallBack'](nvit8, sc2bt, yz0p7h, h70_z);
            }, e4wky, gs2rl, jvniqm, m$9xaj, aimnq);
        }, hpuz['resMgrLoadCallBack'] = function (csltb2, b1vtc8, aqimj9, zhdux) {
            console['log']('buff:::', csltb2, aqimj9, duz$['fileNativeDir'] + '///' + duz$['fileListName']), zhdux(csltb2, b1vtc8, aqimj9);
        }, hpuz['clearRes'] = function (qmin, k70po) {
            k70po === void 0x0 && (k70po = ![]);
            var _ax$9 = this;
            _ax$9['clearRes'](qmin, k70po);
            var u70hzp = duz$['getFileInfo'](qmin);
            if (u70hzp && (qmin['indexOf']('http://') != -0x1 || qmin['indexOf']('https://') != -0x1)) {
                var a9jim = u70hzp['md5'],
                    ivn1j = duz$['getFileNativePath'](a9jim);
                duz$['remove'](ivn1j);
            }
        }, h7yk['onReadNativeCallBack'] = function (kp7yo0, mqja$, njmaiq, tlsbc2, vi8nt1, zx$ud_, h_z0u7, $_a9d, y7epok) {
            tlsbc2 === void 0x0 && (tlsbc2 = !![]), zx$ud_ === void 0x0 && (zx$ud_ = ![]), $_a9d === void 0x0 && ($_a9d = 0x0);
            if (!$_a9d) {
                var n1vq8i;
                if (njmaiq == 'json' || njmaiq == 'atlas') n1vq8i = s62g5['getJson'](y7epok['data']);else njmaiq == 'xml' ? n1vq8i = kyo70p['parseXMLFromString'](y7epok['data']) : n1vq8i = y7epok['data'];
                h_z0u7['onLoaded'](n1vq8i), !s62g5['isZiYu'] && s62g5['isPosMsgYu'] && njmaiq != 'arraybuffer' && wx['postMessage']({
                    'url': mqja$,
                    'data': n1vq8i,
                    'isLoad': !![]
                });
            } else $_a9d == 0x1 && s62g5['EnvConfig']['load']['call'](h_z0u7, mqja$, njmaiq, tlsbc2, vi8nt1, zx$ud_);
        }, yhk7p0(h7yk, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), h7yk;
    }(),
        duz$ = function (f652g) {
        function axm$d9() {
            axm$d9['__super']['call'](this);
            ;
        }
        return kpy07h(axm$d9, 'laya.wx.mini.MiniFileMgr', f652g), axm$d9['isLoadFile'] = function (btvn18) {
            return axm$d9['_fileTypeArr']['indexOf'](btvn18) != -0x1 ? !![] : ![];
        }, axm$d9['getFileInfo'] = function (keow4y) {
            var pz7uh0 = keow4y['split']('?')[0x0],
                u70z = axm$d9['filesListObj'][pz7uh0];
            if (u70z == null) return null;else return u70z;
            return null;
        }, axm$d9['onFileUpdate'] = function (rl6gs, jvqni1) {
            var hz_0du = rl6gs['split']('/'),
                pk7h0 = hz_0du[hz_0du['length'] - 0x1],
                n8vb1t = axm$d9['getFileInfo'](jvqni1);
            if (n8vb1t == null) axm$d9['onSaveFile'](jvqni1, pk7h0);else {
                if (n8vb1t['readyUrl'] != jvqni1) axm$d9['remove'](pk7h0, jvqni1);
            }
        }, axm$d9['exits'] = function (kyowp, jqvi1) {
            var $aj9x = axm$d9['getFileNativePath'](kyowp);
            axm$d9['fs']['getFileInfo']({
                'filePath': $aj9x,
                'success': function (owpyk) {
                    jqvi1 != null && jqvi1['runWith']([0x0, owpyk]);
                },
                'fail': function (x9jm) {
                    jqvi1 != null && jqvi1['runWith']([0x1, x9jm]);
                }
            });
        }, axm$d9['read'] = function (kw43eo, inmjv, jviq, aqmjn) {
            inmjv === void 0x0 && (inmjv = 'ascill'), aqmjn === void 0x0 && (aqmjn = '');
            var c26s;
            aqmjn != '' ? c26s = axm$d9['getFileNativePath'](kw43eo) : c26s = kw43eo, axm$d9['fs']['readFile']({
                'filePath': c26s,
                'encoding': inmjv,
                'success': function (naq) {
                    jviq != null && jviq['runWith']([0x0, naq]);
                },
                'fail': function (d$a_x9) {
                    if (d$a_x9 && aqmjn != '') axm$d9['down'](aqmjn, inmjv, jviq, aqmjn);else jviq != null && jviq['runWith']([0x1]);
                }
            });
        }, axm$d9['readNativeFile'] = function (w4eyko, mxj$) {
            axm$d9['fs']['readFile']({
                'filePath': w4eyko,
                'encoding': '',
                'success': function (iqjam) {
                    mxj$ != null && mxj$['runWith']([0x0]);
                },
                'fail': function (h07uz_) {
                    mxj$ != null && mxj$['runWith']([0x1]);
                }
            });
        }, axm$d9['down'] = function (zhu, zdhu_0, mjqv, a9$m) {
            zdhu_0 === void 0x0 && (zdhu_0 = 'ascill'), a9$m === void 0x0 && (a9$m = '');
            var sl2ct = axm$d9['getFileNativePath'](a9$m),
                gl2s6 = axm$d9['wxdown']({
                'url': zhu,
                'filePath': sl2ct,
                'success': function (ph7y0z) {
                    if (ph7y0z['statusCode'] === 0xc8) axm$d9['readFile'](ph7y0z['filePath'], zdhu_0, mjqv, a9$m);
                },
                'fail': function (md9$xa) {
                    mjqv != null && mjqv['runWith']([0x1, md9$xa]);
                }
            });
            gl2s6['onProgressUpdate'](function (a$jx9m) {
                mjqv != null && mjqv['runWith']([0x2, a$jx9m['progress']]);
            });
        }, axm$d9['readFile'] = function (yk07h, ajx$9, x_$9du, eoykp) {
            ajx$9 === void 0x0 && (ajx$9 = 'ascill'), eoykp === void 0x0 && (eoykp = ''), axm$d9['fs']['readFile']({
                'filePath': yk07h,
                'encoding': ajx$9,
                'success': function (h_07z) {
                    if (yk07h['indexOf']('http://') != -0x1 || yk07h['indexOf']('https://') != -0x1) axm$d9['onFileUpdate'](yk07h, eoykp);
                    x_$9du != null && x_$9du['runWith']([0x0, h_07z]);
                },
                'fail': function (_hudz0) {
                    if (_hudz0) x_$9du != null && x_$9du['runWith']([0x1, _hudz0]);
                }
            });
        }, axm$d9['downImg'] = function (puhz0, lb8c1, poe) {
            poe === void 0x0 && (poe = '');
            var k7pyo = axm$d9['wxdown']({
                'url': puhz0,
                'success': function (_zuhd0) {
                    _zuhd0['statusCode'] === 0xc8 && axm$d9['copyFile'](_zuhd0['tempFilePath'], poe, lb8c1);
                },
                'fail': function (c8tb1v) {
                    lb8c1 != null && lb8c1['runWith']([0x1, c8tb1v]);
                }
            });
        }, axm$d9['copyFile'] = function (amdx$9, w3ek4o, i9qam) {
            var o3ke4 = amdx$9['split']('/'),
                ivqn1j = o3ke4[o3ke4['length'] - 0x1],
                fg62r = w3ek4o['split']('?')[0x0],
                nqvj = axm$d9['getFileInfo'](w3ek4o),
                uzh_0d = axm$d9['getFileNativePath'](ivqn1j);
            axm$d9['fs']['copyFile']({
                'srcPath': amdx$9,
                'destPath': uzh_0d,
                'success': function (weypo) {
                    if (!nqvj) axm$d9['onSaveFile'](w3ek4o, ivqn1j), i9qam != null && i9qam['runWith']([0x0]);else {
                        if (nqvj['readyUrl'] != w3ek4o) axm$d9['remove'](ivqn1j, w3ek4o, i9qam);
                    }
                },
                'fail': function (rs2g6) {
                    i9qam != null && i9qam['runWith']([0x1, rs2g6]);
                }
            });
        }, axm$d9['getFileNativePath'] = function ($d_uz) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + $d_uz;
        }, axm$d9['remove'] = function (cl8s, cgs2l6, y0p) {
            cgs2l6 === void 0x0 && (cgs2l6 = '');
            var wpoy = axm$d9['getFileInfo'](cgs2l6),
                $x9 = axm$d9['getFileNativePath'](wpoy['md5']);
            tb8n1['loader']['clearRes'](wpoy['readyUrl']), axm$d9['fs']['unlink']({
                'filePath': $x9,
                'success': function (x$jma9) {
                    if (cgs2l6 != '') axm$d9['onSaveFile'](cgs2l6, cl8s);
                    y0p != null && y0p['runWith']([0x0]);
                },
                'fail': function (p7ok0) {}
            });
        }, axm$d9['onSaveFile'] = function (bt, u_xdzh) {
            var yo7pk0 = bt['split']('?')[0x0];
            axm$d9['filesListObj'][yo7pk0] = {
                'md5': u_xdzh,
                'readyUrl': bt
            }, axm$d9['fs']['writeFile']({
                'filePath': axm$d9['fileNativeDir'] + '/' + axm$d9['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](axm$d9['filesListObj']),
                'success': function (rgf) {
                    console['log']('写入测试测试成功：', rgf);
                },
                'fail': function (dux_$9) {
                    console['log']('写入测试测试失败：', dux_$9);
                }
            });
        }, axm$d9['existDir'] = function (dhz0, s6l2c) {
            axm$d9['fs']['mkdir']({
                'dirPath': dhz0,
                'success': function (c2sbtl) {
                    s6l2c != null && s6l2c['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (nmjiv) {
                    if (nmjiv['errMsg']['indexOf']('file already exists') != -0x1) axm$d9['readSync'](axm$d9['fileListName'], 'utf8', s6l2c);else s6l2c != null && s6l2c['runWith']([0x1, nmjiv]);
                }
            });
        }, axm$d9['readSync'] = function (zxhd_, ewyk4o, cvt8b, kpyh0) {
            ewyk4o === void 0x0 && (ewyk4o = 'ascill'), kpyh0 === void 0x0 && (kpyh0 = '');
            var u07z = axm$d9['getFileNativePath'](zxhd_),
                phy70;
            try {
                phy70 = axm$d9['fs']['readFileSync'](u07z), cvt8b != null && cvt8b['runWith']([0x0, { 'data': phy70 }]);
            } catch (zuh_07) {
                cvt8b != null && cvt8b['runWith']([0x1]);
            }
        }, axm$d9['readCache'] = function () {}, axm$d9['writeCache'] = function (bgcl) {
            var ykeo4 = readyUrl['split']('?')[0x0];
            axm$d9['filesListObj'][ykeo4] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, axm$d9['fs']['writeFile']({
                'filePath': axm$d9['fileNativeDir'] + '/' + axm$d9['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](axm$d9['filesListObj']),
                'success': function (h0ykp) {},
                'fail': function (qja9$) {}
            });
        }, axm$d9['setNativeFileDir'] = function (t81in) {
            axm$d9['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + t81in;
        }, axm$d9['filesListObj'] = {}, axm$d9['fileNativeDir'] = null, axm$d9['fileListName'] = 'layaairfiles.txt', axm$d9['ziyuFileData'] = {}, yhk7p0(axm$d9, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), axm$d9;
    }(p7uhz),
        bc2sl = function (ajqinm) {
        function a9_$dx() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], a9_$dx['__super']['call'](this), this['_sound'] = a9_$dx['_createSound'](), this['_chanell'] = new p0huz7(this['_sound']);
        }
        kpy07h(a9_$dx, 'laya.wx.mini.MiniSound', ajqinm);
        var t18cbv = a9_$dx['prototype'];
        return t18cbv['load'] = function (q1jn) {
            var epoyk = this;
            q1jn = owy4ke['formatURL'](q1jn), this['url'] = q1jn;
            if (a9_$dx['_audioCache'][q1jn]) {
                this['event']('complete');
                return;
            }
            function ad$x9_() {
                if (a9_$dx['_null'] != undefined) epoyk['_sound']['onCanplay'](a9_$dx['_null']), epoyk['_sound']['onError'](a9_$dx['_null']);else try {
                    epoyk['_sound']['onCanplay'](null), epoyk['_sound']['onError'](null), a9_$dx['_null'] = null;
                } catch (p0oy7k) {
                    console['warn']('[wxmini] _clearSound:' + p0oy7k), epoyk['_sound']['onCanplay'](hzp70), epoyk['_sound']['onError'](hzp70), a9_$dx['_null'] = hzp70;
                }
            }
            function $9jxma() {
                amj$9['loaded'] = !![], amj$9['event']('complete'), a9_$dx['_audioCache'][amj$9['url']] = amj$9;
            }
            function lsg6c(o7kp0) {
                console['error']('errCode=' + o7kp0['errCode'] + '  errMsg=' + o7kp0['errMsg']), amj$9['event']('error');
            }
            function hzp70() {}
            this['_sound']['onCanplay']($9jxma), this['_sound']['onError'](lsg6c), this['_sound']['src'] = q1jn;
            var amj$9 = this;
        }, t18cbv['play'] = function (koyewp, t2cbsl) {
            koyewp === void 0x0 && (koyewp = 0x0), t2cbsl === void 0x0 && (t2cbsl = 0x0);
            var kwe4, xu_d$z;
            if (this['url'] == bls8tc['_tMusic']) {
                if (!a9_$dx['_musicAudio']) a9_$dx['_musicAudio'] = this['_sound'];
                kwe4 = a9_$dx['_musicAudio'], xu_d$z = this['_chanell'];
            } else kwe4 = this['_sound'], xu_d$z = this['_chanell'];
            return kwe4['src'] = this['url'], kwe4['startTime'] = 0x0, xu_d$z['isStopped'] && (xu_d$z['url'] = this['url'], xu_d$z['loops'] = t2cbsl, xu_d$z['startTime'] = koyewp, xu_d$z['play'](), bls8tc['addChannel'](xu_d$z)), xu_d$z;
        }, t18cbv['dispose'] = function () {
            var m$xaj = a9_$dx['_audioCache'][this['url']];
            m$xaj && (m$xaj['src'] = '', delete a9_$dx['_audioCache'][this['url']]);
        }, z0uhp7(0x0, t18cbv, 'duration', function () {
            return this['_sound']['duration'];
        }), a9_$dx['_createSound'] = function () {
            a9_$dx['_id']++;
            var xma$9d = s62g5['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return xma$9d;
        }, a9_$dx['_musicAudio'] = null, a9_$dx['_id'] = 0x0, a9_$dx['_audioCache'] = {}, a9_$dx['_null'] = undefined, a9_$dx;
    }(p7uhz),
        p0huz7 = function (lg62sr) {
        function c18bv(wkyope) {
            this['_audio'] = null, this['_onEnd'] = null, c18bv['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = wkyope, this['_onEnd'] = kyo70p['bind'](this['__onEnd'], this), wkyope['onEnded'](this['_onEnd']);
        }
        kpy07h(c18bv, 'laya.wx.mini.MiniSoundChannel', lg62sr);
        var vi1qj = c18bv['prototype'];
        return vi1qj['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (tb8n1['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, vi1qj['__onNull'] = function () {}, vi1qj['play'] = function () {
            this['isStopped'] = ![], bls8tc['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, vi1qj['stop'] = function () {
            this['isStopped'] = !![], bls8tc['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, vi1qj['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, vi1qj['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], bls8tc['addChannel'](this), this['_audio']['play']();
        }, z0uhp7(0x0, vi1qj, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), z0uhp7(0x0, vi1qj, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), z0uhp7(0x0, vi1qj, 'volume', function () {
            return 0x1;
        }, function (mqa$j9) {}), c18bv['_null'] = undefined, c18bv;
    }(r6s25),
        phzy0 = function () {
        function mjnvi() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = s62g5['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        kpy07h(mjnvi, 'laya.wx.mini.MiniVideo');
        var ji9mq = mjnvi['prototype'];
        return ji9mq['on'] = function (m9adx$, k7eyp, uhz_d) {
            if (m9adx$ == 'loadedmetadata') this['onPlayFunc'] = uhz_d['bind'](k7eyp), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else m9adx$ == 'ended' && (this['onEndedFunC'] = uhz_d['bind'](k7eyp), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, ji9mq['onTimeUpdateFunc'] = function (x_$z) {
            this['position'] = x_$z['position'], this['_duration'] = x_$z['duration'];
        }, ji9mq['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, ji9mq['onended'] = function (weoyk4, m9ijq) {
            this['onEndedFunC'] = m9ijq['bind'](weoyk4), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, ji9mq['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, ji9mq['off'] = function (hpz0y7, $ax9mj, _a$d) {
            if (hpz0y7 == 'loadedmetadata') this['onPlayFunc'] = _a$d['bind']($ax9mj), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else hpz0y7 == 'ended' && (this['onEndedFunC'] = _a$d['bind']($ax9mj), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, ji9mq['load'] = function (j$xa9m) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = j$xa9m;
        }, ji9mq['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, ji9mq['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, ji9mq['size'] = function (lsct2, gs62c) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = lsct2, this['videoElement']['height'] = gs62c;
        }, ji9mq['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, ji9mq['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, z0uhp7(0x0, ji9mq, 'duration', function () {
            return this['_duration'];
        }), z0uhp7(0x0, ji9mq, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (mxd9) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = mxd9;
        }), z0uhp7(0x0, ji9mq, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), z0uhp7(0x0, ji9mq, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), z0uhp7(0x0, ji9mq, 'ended', function () {
            return this['videoend'];
        }), z0uhp7(0x0, ji9mq, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (grls) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = grls;
        }), z0uhp7(0x0, ji9mq, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (pok70y) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = pok70y;
        }), z0uhp7(0x0, ji9mq, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (x_d$a) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = x_d$a;
        }), z0uhp7(0x0, ji9mq, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), z0uhp7(0x0, ji9mq, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (tcs) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = tcs;
        }), z0uhp7(0x0, ji9mq, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (kpo7) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = kpo7;
        }), z0uhp7(0x0, ji9mq, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), z0uhp7(0x0, ji9mq, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (ma9q) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = ma9q;
        }), z0uhp7(0x0, ji9mq, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (gcls) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = gcls;
        }), z0uhp7(0x0, ji9mq, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (iqvjn1) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = iqvjn1;
        }), mjnvi;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var x_d$z in Laya) {
        var u$x_zd = Laya[x_d$z];
        u$x_zd && u$x_zd['__isclass'] && (exports[x_d$z] = u$x_zd);
    }
});