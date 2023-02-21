var W = wx.$l;
(function (window, document, hm$oq) {
    var fd9lbu = hm$oq['un'],
        kz32v = hm$oq['uns'],
        wncyk = hm$oq['static'],
        kwc3y = hm$oq['class'],
        v_6i2 = hm$oq['getset'],
        _362v = hm$oq['__newvec'],
        xps5a4 = laya['utils']['Browser'],
        pasx59 = laya['events']['Event'],
        sdax95 = laya['events']['EventDispatcher'],
        z26_v1 = laya['resource']['HTMLImage'],
        qh0$ = laya['utils']['Handler'],
        jcn7r = laya['display']['Input'],
        d9s5xa = laya['net']['Loader'],
        ubl9 = laya['maths']['Matrix'],
        dlfbu = laya['renders']['Render'],
        x59as = laya['utils']['RunDriver'],
        qhm$0o = laya['media']['Sound'],
        ynk7c = laya['media']['SoundChannel'],
        c7jern = laya['media']['SoundManager'],
        po4q0 = laya['display']['Stage'],
        ncwy7e = laya['net']['URL'],
        blf8u = laya['utils']['Utils'],
        k3zvyw = function () {
        function hqmo$() {}
        return kwc3y(hqmo$, 'laya.wx.mini.MiniAdpter'), hqmo$['getJson'] = function (zk3y2v) {
            return JSON['parse'](zk3y2v);
        }, hqmo$['init'] = function (oh0mq$, f8l) {
            oh0mq$ === void 0x0 && (oh0mq$ = ![]), f8l === void 0x0 && (f8l = ![]);
            if (hqmo$['_inited']) return;
            hqmo$['window'] = window;
            if (hqmo$['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            hqmo$['_inited'] = !![], hqmo$['isZiYu'] = f8l, hqmo$['isPosMsgYu'] = oh0mq$, hqmo$['EnvConfig'] = {}, !hqmo$['isZiYu'] && ($tm0o['setNativeFileDir']('/layaairGame'), $tm0o['existDir']($tm0o['fileNativeDir'], qh0$['create'](hqmo$, hqmo$['onMkdirCallBack']))), hqmo$['window']['focus'] = function () {}, hm$oq['getUrlPath'] = function () {}, hqmo$['window']['logtime'] = function (d9ful) {}, hqmo$['window']['alertTimeLog'] = function (ky73) {}, hqmo$['window']['resetShareInfo'] = function () {}, hqmo$['window']['CanvasRenderingContext2D'] = function () {}, hqmo$['window']['CanvasRenderingContext2D']['prototype'] = hqmo$['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], hqmo$['window']['document']['body']['appendChild'] = function () {}, hqmo$['EnvConfig']['pixelRatioInt'] = 0x0, x59as['getPixelRatio'] = hqmo$['pixelRatio'], hqmo$['_preCreateElement'] = xps5a4['createElement'], xps5a4['createElement'] = hqmo$['createElement'], x59as['createShaderCondition'] = hqmo$['createShaderCondition'], blf8u['parseXMLFromString'] = hqmo$['parseXMLFromString'], jcn7r['_createInputElement'] = w3yc7k['_createInputElement'], hqmo$['EnvConfig']['load'] = d9s5xa['prototype']['load'], d9s5xa['prototype']['load'] = moqh0$['prototype']['load'], hqmo$['isZiYu'] && oh0mq$ && wx['onMessage'](function (pqs5h4) {
                pqs5h4['isLoad'] && ($tm0o['ziyuFileData'][pqs5h4['url']] = pqs5h4['data']);
            });
        }, hqmo$['onMkdirCallBack'] = function (pohs, o0hp4q) {
            if (!pohs) $tm0o['filesListObj'] = JSON['parse'](o0hp4q['data']);
        }, hqmo$['pixelRatio'] = function () {
            if (!hqmo$['EnvConfig']['pixelRatioInt']) try {
                var iub = wx['getSystemInfoSync']();
                return hqmo$['EnvConfig']['pixelRatioInt'] = iub['pixelRatio'], iub = iub, iub['pixelRatio'];
            } catch (s45hq) {}
            return hqmo$['EnvConfig']['pixelRatioInt'];
        }, hqmo$['createElement'] = function (_v32) {
            if (_v32 == 'canvas') {
                var sp45qh;
                return hqmo$['idx'] == 0x1 ? hqmo$['isZiYu'] ? (sp45qh = sharedCanvas, sp45qh['style'] = {}) : sp45qh = window['canvas'] : sp45qh = window['wx']['createCanvas'](), hqmo$['idx']++, sp45qh;
            } else {
                if (_v32 == 'textarea' || _v32 == 'input') return hqmo$['onCreateInput'](_v32);else {
                    if (_v32 == 'div') {
                        var xa4p5s = hqmo$['_preCreateElement'](_v32);
                        return xa4p5s['contains'] = function (mqo$0h) {
                            return null;
                        }, xa4p5s['removeChild'] = function (z6_v32) {}, xa4p5s;
                    } else return hqmo$['_preCreateElement'](_v32);
                }
            }
        }, hqmo$['onCreateInput'] = function (mot0g) {
            var zv3wyk = hqmo$['_preCreateElement'](mot0g);
            return zv3wyk['focus'] = w3yc7k['wxinputFocus'], zv3wyk['blur'] = w3yc7k['wxinputblur'], zv3wyk['style'] = {}, zv3wyk['value'] = 0x0, zv3wyk['parentElement'] = {}, zv3wyk['placeholder'] = {}, zv3wyk['type'] = {}, zv3wyk['setColor'] = function (b9ufdl) {}, zv3wyk['setType'] = function (l816ib) {}, zv3wyk['setFontFace'] = function (psx59a) {}, zv3wyk['addEventListener'] = function (zk_v32) {}, zv3wyk['contains'] = function (w7yecn) {
                return null;
            }, zv3wyk['removeChild'] = function (cn) {}, zv3wyk;
        }, hqmo$['createShaderCondition'] = function (fx9a) {
            var a9ux5 = this,
                cw7re = function () {
                var oh$0q = fx9a;
                return a9ux5[fx9a['replace']('this.', '')];
            };
            return cw7re;
        }, hqmo$['EnvConfig'] = null, hqmo$['window'] = null, hqmo$['_preCreateElement'] = null, hqmo$['_inited'] = ![], hqmo$['wxRequest'] = null, hqmo$['systemInfo'] = null, hqmo$['version'] = '0.0.1', hqmo$['isZiYu'] = ![], hqmo$['isPosMsgYu'] = ![], hqmo$['parseXMLFromString'] = function (wcyen) {
            var renjc, wyzv3k;
            wcyen = wcyen['replace'](/>\s+</g, '><');
            try {
                renjc = new window['Parser']['DOMParser']()['parseFromString'](wcyen, 'text/xml');
            } catch (_bi16) {
                throw '需要引入xml解析库文件';
            }
            return renjc;
        }, hqmo$['idx'] = 0x1, hqmo$;
    }(),
        xsad9 = function () {
        function ul9fd() {}
        kwc3y(ul9fd, 'laya.wx.mini.MiniImage');
        var mo$qh = ul9fd['prototype'];
        return mo$qh['_loadImage'] = function (qp5a4) {
            var zk2yv3 = this,
                _263 = ![];
            qp5a4['indexOf']('layaNativeDir/') == -0x1 && (_263 = !![], qp5a4 = ncwy7e['formatURL'](qp5a4));
            if (!$tm0o['getFileInfo'](qp5a4)) {
                if (qp5a4['indexOf']('http://') != -0x1 || qp5a4['indexOf']('https://') != -0x1) $tm0o['downImg'](qp5a4, new qh0$(ul9fd, ul9fd['onDownImgCallBack'], [qp5a4, zk2yv3]), qp5a4);else ul9fd['onCreateImage'](qp5a4, zk2yv3, !![]);
            } else ul9fd['onCreateImage'](qp5a4, zk2yv3, !_263);
        }, ul9fd['onDownImgCallBack'] = function (ck7wy3, z2k3y, xldf) {
            if (!xldf) ul9fd['onCreateImage'](ck7wy3, z2k3y);else z2k3y['onError'](null);
        }, ul9fd['onCreateImage'] = function (p4xas5, aq4, cjen7r) {
            cjen7r === void 0x0 && (cjen7r = ![]);
            var fud9a;
            if (!cjen7r) {
                var wzyv3 = $tm0o['getFileInfo'](p4xas5),
                    df9ub = wzyv3['md5'];
                fud9a = $tm0o['getFileNativePath'](df9ub);
            } else fud9a = p4xas5;
            if (aq4['imgCache'] == null) aq4['imgCache'] = {};
            var h4poq0;
            function dlxfu() {
                h4poq0['onload'] = null, h4poq0['onerror'] = null, delete aq4['imgCache'][p4xas5];
            }
            ;
            var lfb8 = function () {
                dlxfu(), aq4['onLoaded'](h4poq0);
            },
                f9lbdu = function () {
                dlxfu(), aq4['event']('error', 'Load image failed');
            };
            aq4['_type'] == 'nativeimage' ? (h4poq0 = new xps5a4['window']['Image'](), h4poq0['crossOrigin'] = '', h4poq0['onload'] = lfb8, h4poq0['onerror'] = f9lbdu, h4poq0['src'] = fud9a, aq4['imgCache'][p4xas5] = h4poq0) : new z26_v1['create'](fud9a, {
                'onload': lfb8,
                'onerror': f9lbdu,
                'onCreate': function (nercj7) {
                    h4poq0 = nercj7, aq4['imgCache'][p4xas5] = nercj7;
                }
            });
        }, ul9fd;
    }(),
        w3yc7k = function () {
        function om$h0t() {}
        return kwc3y(om$h0t, 'laya.wx.mini.MiniInput'), om$h0t['_createInputElement'] = function () {
            jcn7r['_initInput'](jcn7r['area'] = xps5a4['createElement']('textarea')), jcn7r['_initInput'](jcn7r['input'] = xps5a4['createElement']('input')), jcn7r['inputContainer'] = xps5a4['createElement']('div'), jcn7r['inputContainer']['style']['position'] = 'absolute', jcn7r['inputContainer']['style']['zIndex'] = 0x186a0, xps5a4['container']['appendChild'](jcn7r['inputContainer']), jcn7r['inputContainer']['setPos'] = function (a9xds, o4q0h) {
                jcn7r['inputContainer']['style']['left'] = a9xds + 'px', jcn7r['inputContainer']['style']['top'] = o4q0h + 'px';
            }, hm$oq['stage']['on']('resize', null, om$h0t['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (_621) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), c7jern['_soundClass'] = u5axd, c7jern['_musicClass'] = u5axd;
        }, om$h0t['_onStageResize'] = function () {
            var cnk7 = hm$oq['stage']['_canvasTransform']['identity']();
            cnk7['scale'](xps5a4['width'] / dlfbu['canvas']['width'] / x59as['getPixelRatio'](), xps5a4['height'] / dlfbu['canvas']['height'] / x59as['getPixelRatio']());
        }, om$h0t['wxinputFocus'] = function (i26v1) {
            var lufb8i = jcn7r['inputElement']['target'];
            if (lufb8i && !lufb8i['editable']) return;
            k3zvyw['window']['wx']['offKeyboardConfirm'](), k3zvyw['window']['wx']['offKeyboardInput'](), k3zvyw['window']['wx']['showKeyboard']({
                'defaultValue': lufb8i['text'],
                'maxLength': lufb8i['maxChars'],
                'multiple': lufb8i['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (fu8bd) {},
                'fail': function (ps9) {}
            }), k3zvyw['window']['wx']['onKeyboardConfirm'](function (a4s5q) {
                var fu9xa = a4s5q ? a4s5q['value'] : '';
                lufb8i['text'] = fu9xa, lufb8i['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), k3zvyw['window']['wx']['onKeyboardInput'](function (tm$0og) {
                var nyc7wk = tm$0og ? tm$0og['value'] : '';
                if (!lufb8i['multiline']) {
                    if (nyc7wk['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                lufb8i['text'] = nyc7wk, lufb8i['event']('input');
            });
        }, om$h0t['inputEnter'] = function () {
            jcn7r['inputElement']['target']['focus'] = ![];
        }, om$h0t['wxinputblur'] = function () {
            om$h0t['hideKeyboard']();
        }, om$h0t['hideKeyboard'] = function () {
            k3zvyw['window']['wx']['offKeyboardConfirm'](), k3zvyw['window']['wx']['offKeyboardInput'](), k3zvyw['window']['wx']['hideKeyboard']({
                'success': function (xda59u) {
                    console['log']('隐藏键盘');
                },
                'fail': function (phqo) {
                    console['log']('隐藏键盘出错:' + (phqo ? phqo['errMsg'] : ''));
                }
            });
        }, om$h0t;
    }(),
        moqh0$ = function () {
        function v3ykwz() {}
        kwc3y(v3ykwz, 'laya.wx.mini.MiniLoader');
        var aud9x = v3ykwz['prototype'];
        return aud9x['load'] = function (i1bl8, fui8b, qhm$o0, c3yk7w, l8i1b6) {
            qhm$o0 === void 0x0 && (qhm$o0 = !![]), l8i1b6 === void 0x0 && (l8i1b6 = ![]);
            var adu5x = this;
            adu5x['_url'] = i1bl8;
            if (i1bl8['indexOf']('data:image') === 0x0) adu5x['_type'] = fui8b = 'image';else adu5x['_type'] = fui8b || (fui8b = adu5x['getTypeFromUrl'](i1bl8));
            adu5x['_cache'] = qhm$o0, adu5x['_data'] = null;
            var n7rew = 'ascii';
            if (i1bl8['indexOf']('.fnt') != -0x1) n7rew = 'utf8';else fui8b == 'arraybuffer' && (n7rew = '');
            ;
            var uxfdl9 = blf8u['getFileExtension'](i1bl8);
            if (v3ykwz['_fileTypeArr']['indexOf'](uxfdl9) != -0x1) k3zvyw['EnvConfig']['load']['call'](this, i1bl8, fui8b, qhm$o0, c3yk7w, l8i1b6);else {
                if (!$tm0o['getFileInfo'](i1bl8)) {
                    if (i1bl8['indexOf']('layaNativeDir/') != -0x1) {
                        if (k3zvyw['isZiYu']) {
                            var n7ewcr = $tm0o['ziyuFileData'][i1bl8];
                            adu5x['onLoaded'](n7ewcr);
                            return;
                        } else {
                            cosnole['log']('read read'), $tm0o['read'](i1bl8, n7rew, new qh0$(v3ykwz, v3ykwz['onReadNativeCallBack'], [n7rew, i1bl8, fui8b, qhm$o0, c3yk7w, l8i1b6, adu5x]));
                            return;
                        }
                    }
                    if (ncwy7e['rootPath'] == '') var kwy = i1bl8;else kwy = i1bl8['split'](ncwy7e['rootPath'])[0x0];
                    i1bl8['indexOf']('http://') != -0x1 || i1bl8['indexOf']('https://') != -0x1 ? k3zvyw['EnvConfig']['load']['call'](adu5x, i1bl8, fui8b, qhm$o0, c3yk7w, l8i1b6) : $tm0o['readFile'](kwy, n7rew, new qh0$(v3ykwz, v3ykwz['onReadNativeCallBack'], [n7rew, i1bl8, fui8b, qhm$o0, c3yk7w, l8i1b6, adu5x]), i1bl8);
                } else k3zvyw['EnvConfig']['load']['call'](this, i1bl8, fui8b, qhm$o0, c3yk7w, l8i1b6);
            }
        }, aud9x['resMgrLoad'] = function (v3wkz, s5q4ph, wecn7, afx9u, _28i6, udlbf8, qmoh$) {
            wecn7 === void 0x0 && (wecn7 = 0x0), afx9u === void 0x0 && (afx9u = ![]), _28i6 === void 0x0 && (_28i6 = ![]), udlbf8 === void 0x0 && (udlbf8 = 0x0), qmoh$ === void 0x0 && (qmoh$ = 0x3), v3wkz['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', v3wkz), k3zvyw['EnvConfig']['resMgrLoad'](v3wkz, (a9sx5d, b_86, wcn7ky) => {
                v3ykwz['prototype']['resMgrLoadCallBack'](a9sx5d, b_86, wcn7ky, s5q4ph);
            }, wecn7, afx9u, _28i6, udlbf8, qmoh$);
        }, aud9x['resMgrLoadCallBack'] = function (z63_, oqm0h$, x9p5as, wzykc3) {
            console['log']('buff:::', z63_, x9p5as, $tm0o['fileNativeDir'] + '///' + $tm0o['fileListName']), wzykc3(z63_, oqm0h$, x9p5as);
        }, aud9x['clearRes'] = function (b1i8_, flux) {
            flux === void 0x0 && (flux = ![]);
            var cy7knw = this;
            cy7knw['clearRes'](b1i8_, flux);
            var qhsop4 = $tm0o['getFileInfo'](b1i8_);
            if (qhsop4 && (b1i8_['indexOf']('http://') != -0x1 || b1i8_['indexOf']('https://') != -0x1)) {
                var ubdl = qhsop4['md5'],
                    z3_2vk = $tm0o['getFileNativePath'](ubdl);
                $tm0o['remove'](z3_2vk);
            }
        }, v3ykwz['onReadNativeCallBack'] = function (_k2v, tm0$h, zv3y2, dafxu9, xaf, asx59, bi81, rn7cje, sho4p) {
            dafxu9 === void 0x0 && (dafxu9 = !![]), asx59 === void 0x0 && (asx59 = ![]), rn7cje === void 0x0 && (rn7cje = 0x0);
            if (!rn7cje) {
                var $oqhm0;
                if (zv3y2 == 'json' || zv3y2 == 'atlas') $oqhm0 = k3zvyw['getJson'](sho4p['data']);else zv3y2 == 'xml' ? $oqhm0 = blf8u['parseXMLFromString'](sho4p['data']) : $oqhm0 = sho4p['data'];
                bi81['onLoaded']($oqhm0), !k3zvyw['isZiYu'] && k3zvyw['isPosMsgYu'] && zv3y2 != 'arraybuffer' && wx['postMessage']({
                    'url': tm0$h,
                    'data': $oqhm0,
                    'isLoad': !![]
                });
            } else rn7cje == 0x1 && k3zvyw['EnvConfig']['load']['call'](bi81, tm0$h, zv3y2, dafxu9, xaf, asx59);
        }, wncyk(v3ykwz, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), v3ykwz;
    }(),
        $tm0o = function (ldfux9) {
        function d9xa() {
            d9xa['__super']['call'](this);
            ;
        }
        return kwc3y(d9xa, 'laya.wx.mini.MiniFileMgr', ldfux9), d9xa['isLoadFile'] = function (xds5) {
            return d9xa['_fileTypeArr']['indexOf'](xds5) != -0x1 ? !![] : ![];
        }, d9xa['getFileInfo'] = function (_b168) {
            var y3czwk = _b168['split']('?')[0x0],
                axs5p9 = d9xa['filesListObj'][y3czwk];
            if (axs5p9 == null) return null;else return axs5p9;
            return null;
        }, d9xa['onFileUpdate'] = function (mtg0o, xda95) {
            var wkzc3 = mtg0o['split']('/'),
                s9a5 = wkzc3[wkzc3['length'] - 0x1],
                _6ib = d9xa['getFileInfo'](xda95);
            if (_6ib == null) d9xa['onSaveFile'](xda95, s9a5);else {
                if (_6ib['readyUrl'] != xda95) d9xa['remove'](s9a5, xda95);
            }
        }, d9xa['exits'] = function (s5xpa4, vwzky) {
            var lbudf9 = d9xa['getFileNativePath'](s5xpa4);
            d9xa['fs']['getFileInfo']({
                'filePath': lbudf9,
                'success': function (mg0) {
                    vwzky != null && vwzky['runWith']([0x0, mg0]);
                },
                'fail': function (xludf9) {
                    vwzky != null && vwzky['runWith']([0x1, xludf9]);
                }
            });
        }, d9xa['read'] = function (qap5s, dbu8l, wzyvk3, cnrj7e) {
            dbu8l === void 0x0 && (dbu8l = 'ascill'), cnrj7e === void 0x0 && (cnrj7e = '');
            var k3yw;
            cnrj7e != '' ? k3yw = d9xa['getFileNativePath'](qap5s) : k3yw = qap5s, d9xa['fs']['readFile']({
                'filePath': k3yw,
                'encoding': dbu8l,
                'success': function ($ot) {
                    wzyvk3 != null && wzyvk3['runWith']([0x0, $ot]);
                },
                'fail': function (b_6i81) {
                    if (b_6i81 && cnrj7e != '') d9xa['down'](cnrj7e, dbu8l, wzyvk3, cnrj7e);else wzyvk3 != null && wzyvk3['runWith']([0x1]);
                }
            });
        }, d9xa['readNativeFile'] = function (tg$0, a5xsp) {
            d9xa['fs']['readFile']({
                'filePath': tg$0,
                'encoding': '',
                'success': function (_32kv) {
                    a5xsp != null && a5xsp['runWith']([0x0]);
                },
                'fail': function (yv3wzk) {
                    a5xsp != null && a5xsp['runWith']([0x1]);
                }
            });
        }, d9xa['down'] = function (ps9x, sx9p5a, om0$, iv162) {
            sx9p5a === void 0x0 && (sx9p5a = 'ascill'), iv162 === void 0x0 && (iv162 = '');
            var b8iul = d9xa['getFileNativePath'](iv162),
                u8fil = d9xa['wxdown']({
                'url': ps9x,
                'filePath': b8iul,
                'success': function (ud5x) {
                    if (ud5x['statusCode'] === 0xc8) d9xa['readFile'](ud5x['filePath'], sx9p5a, om0$, iv162);
                },
                'fail': function (db9lu) {
                    om0$ != null && om0$['runWith']([0x1, db9lu]);
                }
            });
            u8fil['onProgressUpdate'](function ($hmoq) {
                om0$ != null && om0$['runWith']([0x2, $hmoq['progress']]);
            });
        }, d9xa['readFile'] = function (k7ny, zwvk, budf9, daux59) {
            zwvk === void 0x0 && (zwvk = 'ascill'), daux59 === void 0x0 && (daux59 = ''), d9xa['fs']['readFile']({
                'filePath': k7ny,
                'encoding': zwvk,
                'success': function (shoqp4) {
                    if (k7ny['indexOf']('http://') != -0x1 || k7ny['indexOf']('https://') != -0x1) d9xa['onFileUpdate'](k7ny, daux59);
                    budf9 != null && budf9['runWith']([0x0, shoqp4]);
                },
                'fail': function ($ogm0t) {
                    if ($ogm0t) budf9 != null && budf9['runWith']([0x1, $ogm0t]);
                }
            });
        }, d9xa['downImg'] = function (sxa4, o$0tmh, yzkv2) {
            yzkv2 === void 0x0 && (yzkv2 = '');
            var i8b6l1 = d9xa['wxdown']({
                'url': sxa4,
                'success': function (c3yzw) {
                    c3yzw['statusCode'] === 0xc8 && d9xa['copyFile'](c3yzw['tempFilePath'], yzkv2, o$0tmh);
                },
                'fail': function (h$mt0) {
                    o$0tmh != null && o$0tmh['runWith']([0x1, h$mt0]);
                }
            });
        }, d9xa['copyFile'] = function (wck3y, n7jec, iul8b) {
            var k_2 = wck3y['split']('/'),
                zky3v2 = k_2[k_2['length'] - 0x1],
                cwz3k = n7jec['split']('?')[0x0],
                l9fbu = d9xa['getFileInfo'](n7jec),
                z_3k2v = d9xa['getFileNativePath'](zky3v2);
            d9xa['fs']['copyFile']({
                'srcPath': wck3y,
                'destPath': z_3k2v,
                'success': function (zyw3vk) {
                    if (!l9fbu) d9xa['onSaveFile'](n7jec, zky3v2), iul8b != null && iul8b['runWith']([0x0]);else {
                        if (l9fbu['readyUrl'] != n7jec) d9xa['remove'](zky3v2, n7jec, iul8b);
                    }
                },
                'fail': function (ecjn) {
                    iul8b != null && iul8b['runWith']([0x1, ecjn]);
                }
            });
        }, d9xa['getFileNativePath'] = function (x5ud) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + x5ud;
        }, d9xa['remove'] = function (kw3zvy, ho0m$q, aduxf) {
            ho0m$q === void 0x0 && (ho0m$q = '');
            var fib8ul = d9xa['getFileInfo'](ho0m$q),
                p4sa5x = d9xa['getFileNativePath'](fib8ul['md5']);
            hm$oq['loader']['clearRes'](fib8ul['readyUrl']), d9xa['fs']['unlink']({
                'filePath': p4sa5x,
                'success': function (ap54sq) {
                    if (ho0m$q != '') d9xa['onSaveFile'](ho0m$q, kw3zvy);
                    aduxf != null && aduxf['runWith']([0x0]);
                },
                'fail': function (z61v_2) {}
            });
        }, d9xa['onSaveFile'] = function (sap9x, wckzy) {
            var z2v61 = sap9x['split']('?')[0x0];
            d9xa['filesListObj'][z2v61] = {
                'md5': wckzy,
                'readyUrl': sap9x
            }, d9xa['fs']['writeFile']({
                'filePath': d9xa['fileNativeDir'] + '/' + d9xa['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](d9xa['filesListObj']),
                'success': function (bli8u) {
                    console['log']('写入测试测试成功：', bli8u);
                },
                'fail': function (yvwz3) {
                    console['log']('写入测试测试失败：', yvwz3);
                }
            });
        }, d9xa['existDir'] = function (h0$mq, vk2z3y) {
            d9xa['fs']['mkdir']({
                'dirPath': h0$mq,
                'success': function (rcwe) {
                    vk2z3y != null && vk2z3y['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (v_z32k) {
                    if (v_z32k['errMsg']['indexOf']('file already exists') != -0x1) d9xa['readSync'](d9xa['fileListName'], 'utf8', vk2z3y);else vk2z3y != null && vk2z3y['runWith']([0x1, v_z32k]);
                }
            });
        }, d9xa['readSync'] = function (hm0oq4, pa4q5, o0hq4m, vi16_) {
            pa4q5 === void 0x0 && (pa4q5 = 'ascill'), vi16_ === void 0x0 && (vi16_ = '');
            var xsp5 = d9xa['getFileNativePath'](hm0oq4),
                du9a5x;
            try {
                du9a5x = d9xa['fs']['readFileSync'](xsp5), o0hq4m != null && o0hq4m['runWith']([0x0, { 'data': du9a5x }]);
            } catch (yknc7w) {
                o0hq4m != null && o0hq4m['runWith']([0x1]);
            }
        }, d9xa['readCache'] = function () {}, d9xa['writeCache'] = function (h$0om) {
            var wc3zk = readyUrl['split']('?')[0x0];
            d9xa['filesListObj'][wc3zk] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, d9xa['fs']['writeFile']({
                'filePath': d9xa['fileNativeDir'] + '/' + d9xa['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](d9xa['filesListObj']),
                'success': function (_6v23) {},
                'fail': function (bf1) {}
            });
        }, d9xa['setNativeFileDir'] = function (e7rcnj) {
            d9xa['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + e7rcnj;
        }, d9xa['filesListObj'] = {}, d9xa['fileNativeDir'] = null, d9xa['fileListName'] = 'layaairfiles.txt', d9xa['ziyuFileData'] = {}, wncyk(d9xa, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), d9xa;
    }(sdax95),
        u5axd = function (i61l8b) {
        function qs54ap() {
            this['_sound'] = null, this['url'] = null, this['loaded'] = ![], qs54ap['__super']['call'](this), this['_sound'] = qs54ap['_createSound']();
        }
        kwc3y(qs54ap, 'laya.wx.mini.MiniSound', i61l8b);
        var z261v = qs54ap['prototype'];
        return z261v['load'] = function (axd95) {
            var as5xd9 = this;
            axd95 = ncwy7e['formatURL'](axd95), this['url'] = axd95;
            if (qs54ap['_audioCache'][axd95]) {
                this['event']('complete');
                return;
            }
            function b8il() {
                if (qs54ap['_null'] != undefined) as5xd9['_sound']['onCanplay'](qs54ap['_null']), as5xd9['_sound']['onError'](qs54ap['_null']);else try {
                    as5xd9['_sound']['onCanplay'](null), as5xd9['_sound']['onError'](null), qs54ap['_null'] = null;
                } catch (_vk3z2) {
                    console['warn']('[wxmini] _clearSound:' + _vk3z2), as5xd9['_sound']['onCanplay'](z3v_26), as5xd9['_sound']['onError'](z3v_26), qs54ap['_null'] = z3v_26;
                }
            }
            function c7ren() {
                b8il(), c7rnej['loaded'] = !![], c7rnej['event']('complete'), qs54ap['_audioCache'][c7rnej['url']] = c7rnej;
            }
            function fdul(i1l6b8) {
                console['error']('errCode=' + i1l6b8['errCode'] + '  errMsg=' + i1l6b8['errMsg']), b8il(), c7rnej['event']('error');
            }
            function z3v_26() {}
            this['_sound']['onCanplay'](c7ren), this['_sound']['onError'](fdul), this['_sound']['src'] = axd95;
            var c7rnej = this;
        }, z261v['play'] = function (oq4h0p, i2v1_6) {
            oq4h0p === void 0x0 && (oq4h0p = 0x0), i2v1_6 === void 0x0 && (i2v1_6 = 0x0);
            var udflb9;
            if (this['url'] == c7jern['_tMusic']) {
                if (!qs54ap['_musicAudio']) qs54ap['_musicAudio'] = qs54ap['_createSound']();
                udflb9 = qs54ap['_musicAudio'];
            } else udflb9 = qs54ap['_createSound']();
            udflb9['src'] = this['url'];
            var z2vk = new fl8iu(udflb9);
            return z2vk['url'] = this['url'], z2vk['loops'] = i2v1_6, z2vk['startTime'] = oq4h0p, z2vk['play'](), c7jern['addChannel'](z2vk), z2vk;
        }, z261v['dispose'] = function () {
            var d9ax5u = qs54ap['_audioCache'][this['url']];
            d9ax5u && (d9ax5u['src'] = '', delete qs54ap['_audioCache'][this['url']]);
        }, v_6i2(0x0, z261v, 'duration', function () {
            return this['_sound']['duration'];
        }), qs54ap['_createSound'] = function () {
            return qs54ap['_id']++, k3zvyw['window']['wx']['createInnerAudioContext']();
        }, qs54ap['_musicAudio'] = null, qs54ap['_id'] = 0x0, qs54ap['_audioCache'] = {}, qs54ap['_null'] = undefined, qs54ap;
    }(sdax95),
        fl8iu = function (xpa54s) {
        function p4sax(vw3) {
            this['_audio'] = null, this['_onEnd'] = null, p4sax['__super']['call'](this), this['_audio'] = vw3, this['_onEnd'] = blf8u['bind'](this['__onEnd'], this), vw3['onEnded'](this['_onEnd']);
        }
        kwc3y(p4sax, 'laya.wx.mini.MiniSoundChannel', xpa54s);
        var $ot0mg = p4sax['prototype'];
        return $ot0mg['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (hm$oq['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, $ot0mg['__onNull'] = function () {}, $ot0mg['play'] = function () {
            this['isStopped'] = ![], c7jern['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, $ot0mg['stop'] = function () {
            this['isStopped'] = !![], c7jern['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
            if (p4sax['_null'] != undefined) this['_audio']['onEnded'](p4sax['_null']);else try {
                this['_audio']['onEnded'](null), p4sax['_null'] = null;
            } catch (x5au9d) {
                console['warn']('[wxmini] stop:' + x5au9d), this['_audio']['onEnded'](blf8u['bind'](this['__onNull'], this)), p4sax['_null'] = blf8u['bind'](this['__onNull'], this);
            }
            this['_audio'] = null;
        }, $ot0mg['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, $ot0mg['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], c7jern['addChannel'](this), this['_audio']['play']();
        }, v_6i2(0x0, $ot0mg, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), v_6i2(0x0, $ot0mg, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), v_6i2(0x0, $ot0mg, 'volume', function () {
            return 0x1;
        }, function (xuadf9) {}), p4sax['_null'] = undefined, p4sax;
    }(ynk7c);
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var u8dlfb in Laya) {
        var xfuda9 = Laya[u8dlfb];
        xfuda9 && xfuda9['__isclass'] && (exports[u8dlfb] = xfuda9);
    }
});