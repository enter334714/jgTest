var J = wx.h$;
(function (window, document, robyq5) {
    var kqb5g0 = robyq5['un'],
        jryvx7 = robyq5['uns'],
        chptez = robyq5['static'],
        f2s = robyq5['class'],
        ul1a3 = robyq5['getset'],
        qo50 = robyq5['__newvec'],
        gb0kq5 = laya['utils']['Browser'],
        hz2_p = laya['events']['Event'],
        yj7rx = laya['events']['EventDispatcher'],
        w2ez_p = laya['resource']['HTMLImage'],
        ry5j = laya['utils']['Handler'],
        d6c8ht = laya['display']['Input'],
        lau34 = laya['net']['Loader'],
        orvy5 = laya['maths']['Matrix'],
        ztc8e = laya['renders']['Render'],
        s9f$ = laya['utils']['RunDriver'],
        irxvj7 = laya['media']['Sound'],
        x7in14 = laya['media']['SoundChannel'],
        xj7i = laya['media']['SoundManager'],
        a14n3 = laya['display']['Stage'],
        n41x7i = laya['net']['URL'],
        vyro5q = laya['utils']['Utils'],
        orqyb5 = function () {
        function i7vxrj() {}
        return f2s(i7vxrj, 'laya.wx.mini.MiniAdpter'), i7vxrj['getJson'] = function (iu4n13) {
            return JSON['parse'](iu4n13);
        }, i7vxrj['init'] = function (wf$92_, u43alm) {
            wf$92_ === void 0x0 && (wf$92_ = ![]), u43alm === void 0x0 && (u43alm = ![]);
            if (i7vxrj['_inited']) return;
            i7vxrj['window'] = window;
            if (i7vxrj['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            i7vxrj['_inited'] = !![], i7vxrj['isZiYu'] = u43alm, i7vxrj['isPosMsgYu'] = wf$92_, i7vxrj['EnvConfig'] = {}, !i7vxrj['isZiYu'] && (_pzeth['setNativeFileDir']('/layaairGame'), _pzeth['existDir'](_pzeth['fileNativeDir'], ry5j['create'](i7vxrj, i7vxrj['onMkdirCallBack']))), i7vxrj['window']['focus'] = function () {}, robyq5['getUrlPath'] = function () {}, i7vxrj['window']['logtime'] = function (oq0yb) {}, i7vxrj['window']['alertTimeLog'] = function (epw92) {}, i7vxrj['window']['resetShareInfo'] = function () {}, i7vxrj['window']['CanvasRenderingContext2D'] = function () {}, i7vxrj['window']['CanvasRenderingContext2D']['prototype'] = i7vxrj['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], i7vxrj['window']['document']['body']['appendChild'] = function () {}, i7vxrj['EnvConfig']['pixelRatioInt'] = 0x0, s9f$['getPixelRatio'] = i7vxrj['pixelRatio'], i7vxrj['_preCreateElement'] = gb0kq5['createElement'], gb0kq5['createElement'] = i7vxrj['createElement'], s9f$['createShaderCondition'] = i7vxrj['createShaderCondition'], vyro5q['parseXMLFromString'] = i7vxrj['parseXMLFromString'], d6c8ht['_createInputElement'] = i7jnx1['_createInputElement'], i7vxrj['EnvConfig']['load'] = lau34['prototype']['load'], lau34['prototype']['load'] = au31n['prototype']['load'], i7vxrj['isZiYu'] && wf$92_ && wx['onMessage'](function (o5yrb) {
                o5yrb['isLoad'] && (_pzeth['ziyuFileData'][o5yrb['url']] = o5yrb['data']);
            });
        }, i7vxrj['onMkdirCallBack'] = function (kc6dg, l41a3u) {
            if (!kc6dg) _pzeth['filesListObj'] = JSON['parse'](l41a3u['data']);
        }, i7vxrj['pixelRatio'] = function () {
            if (!i7vxrj['EnvConfig']['pixelRatioInt']) try {
                var jn71 = wx['getSystemInfoSync']();
                return i7vxrj['EnvConfig']['pixelRatioInt'] = jn71['pixelRatio'], jn71 = jn71, jn71['pixelRatio'];
            } catch (f2$_9w) {}
            return i7vxrj['EnvConfig']['pixelRatioInt'];
        }, i7vxrj['createElement'] = function (r5oqv) {
            if (r5oqv == 'canvas') {
                var xni471;
                return i7vxrj['idx'] == 0x1 ? i7vxrj['isZiYu'] ? (xni471 = sharedCanvas, xni471['style'] = {}) : xni471 = window['canvas'] : xni471 = window['wx']['createCanvas'](), i7vxrj['idx']++, xni471;
            } else {
                if (r5oqv == 'textarea' || r5oqv == 'input') return i7vxrj['onCreateInput'](r5oqv);else {
                    if (r5oqv == 'div') {
                        var gcd6 = i7vxrj['_preCreateElement'](r5oqv);
                        return gcd6['contains'] = function (jx7nv) {
                            return null;
                        }, gcd6['removeChild'] = function (hctep) {}, gcd6;
                    } else return i7vxrj['_preCreateElement'](r5oqv);
                }
            }
        }, i7vxrj['onCreateInput'] = function (dg8ck6) {
            var qk5g0 = i7vxrj['_preCreateElement'](dg8ck6);
            return qk5g0['focus'] = i7jnx1['wxinputFocus'], qk5g0['blur'] = i7jnx1['wxinputblur'], qk5g0['style'] = {}, qk5g0['value'] = 0x0, qk5g0['parentElement'] = {}, qk5g0['placeholder'] = {}, qk5g0['type'] = {}, qk5g0['setColor'] = function (cez) {}, qk5g0['setType'] = function (q5yrob) {}, qk5g0['setFontFace'] = function (tzephc) {}, qk5g0['addEventListener'] = function (jx7in) {}, qk5g0['contains'] = function (td8g) {
                return null;
            }, qk5g0['removeChild'] = function (eczht) {}, qk5g0;
        }, i7vxrj['createShaderCondition'] = function (xn71ij) {
            var th86d = this,
                zchet = function () {
                var q5yorb = xn71ij;
                return th86d[xn71ij['replace']('this.', '')];
            };
            return zchet;
        }, i7vxrj['EnvConfig'] = null, i7vxrj['window'] = null, i7vxrj['_preCreateElement'] = null, i7vxrj['_inited'] = ![], i7vxrj['wxRequest'] = null, i7vxrj['systemInfo'] = null, i7vxrj['version'] = '0.0.1', i7vxrj['isZiYu'] = ![], i7vxrj['isPosMsgYu'] = ![], i7vxrj['parseXMLFromString'] = function (la431u) {
            var kg06d8, vo7jr;
            la431u = la431u['replace'](/>\s+</g, '><');
            try {
                kg06d8 = new window['Parser']['DOMParser']()['parseFromString'](la431u, 'text/xml');
            } catch (dqbk0) {
                throw '需要引入xml解析库文件';
            }
            return kg06d8;
        }, i7vxrj['idx'] = 0x1, i7vxrj;
    }(),
        a41ul = function () {
        function n34i1x() {}
        f2s(n34i1x, 'laya.wx.mini.MiniImage');
        var voqyr = n34i1x['prototype'];
        return voqyr['_loadImage'] = function (w$2fs9) {
            var ethzcp = this,
                w9e_ = ![];
            w$2fs9['indexOf']('layaNativeDir/') == -0x1 && (w9e_ = !![], w$2fs9 = n41x7i['formatURL'](w$2fs9));
            if (!_pzeth['getFileInfo'](w$2fs9)) {
                if (w$2fs9['indexOf']('http://') != -0x1 || w$2fs9['indexOf']('https://') != -0x1) _pzeth['downImg'](w$2fs9, new ry5j(n34i1x, n34i1x['onDownImgCallBack'], [w$2fs9, ethzcp]), w$2fs9);else n34i1x['onCreateImage'](w$2fs9, ethzcp, !![]);
            } else n34i1x['onCreateImage'](w$2fs9, ethzcp, !w9e_);
        }, n34i1x['onDownImgCallBack'] = function (h8t6zc, bkdqg0, x7ij1n) {
            if (!x7ij1n) n34i1x['onCreateImage'](h8t6zc, bkdqg0);else bkdqg0['onError'](null);
        }, n34i1x['onCreateImage'] = function (br5yo, gd8k6c, p9_e) {
            p9_e === void 0x0 && (p9_e = ![]);
            var e_9wp;
            if (!p9_e) {
                var tze8hc = _pzeth['getFileInfo'](br5yo),
                    dtc6h8 = tze8hc['md5'];
                e_9wp = _pzeth['getFileNativePath'](dtc6h8);
            } else e_9wp = br5yo;
            if (gd8k6c['imgCache'] == null) gd8k6c['imgCache'] = {};
            var d6ch8;
            function c8htd() {
                d6ch8['onload'] = null, d6ch8['onerror'] = null, delete gd8k6c['imgCache'][br5yo];
            }
            ;
            var b5o0q = function () {
                c8htd(), gd8k6c['onLoaded'](d6ch8);
            },
                bgk0 = function () {
                c8htd(), gd8k6c['event']('error', 'Load image failed');
            };
            gd8k6c['_type'] == 'nativeimage' ? (d6ch8 = new gb0kq5['window']['Image'](), d6ch8['crossOrigin'] = '', d6ch8['onload'] = b5o0q, d6ch8['onerror'] = bgk0, d6ch8['src'] = e_9wp, gd8k6c['imgCache'][br5yo] = d6ch8) : new w2ez_p['create'](e_9wp, {
                'onload': b5o0q,
                'onerror': bgk0,
                'onCreate': function (z2_phe) {
                    d6ch8 = z2_phe, gd8k6c['imgCache'][br5yo] = z2_phe;
                }
            });
        }, n34i1x;
    }(),
        i7jnx1 = function () {
        function rov7y() {}
        return f2s(rov7y, 'laya.wx.mini.MiniInput'), rov7y['_createInputElement'] = function () {
            d6c8ht['_initInput'](d6c8ht['area'] = gb0kq5['createElement']('textarea')), d6c8ht['_initInput'](d6c8ht['input'] = gb0kq5['createElement']('input')), d6c8ht['inputContainer'] = gb0kq5['createElement']('div'), d6c8ht['inputContainer']['style']['position'] = 'absolute', d6c8ht['inputContainer']['style']['zIndex'] = 0x186a0, gb0kq5['container']['appendChild'](d6c8ht['inputContainer']), d6c8ht['inputContainer']['setPos'] = function (fw2p, cd86gt) {
                d6c8ht['inputContainer']['style']['left'] = fw2p + 'px', d6c8ht['inputContainer']['style']['top'] = cd86gt + 'px';
            }, robyq5['stage']['on']('resize', null, rov7y['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (cze8ht) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), xj7i['_soundClass'] = ko5b0q, xj7i['_musicClass'] = ko5b0q, window['_videoClass'] = na4u13;
        }, rov7y['_onStageResize'] = function () {
            var i47x = robyq5['stage']['_canvasTransform']['identity']();
            i47x['scale'](gb0kq5['width'] / ztc8e['canvas']['width'] / s9f$['getPixelRatio'](), gb0kq5['height'] / ztc8e['canvas']['height'] / s9f$['getPixelRatio']());
        }, rov7y['wxinputFocus'] = function (b0qkg5) {
            var j7i1xn = d6c8ht['inputElement']['target'];
            if (j7i1xn && !j7i1xn['editable']) return;
            orqyb5['window']['wx']['offKeyboardConfirm'](), orqyb5['window']['wx']['offKeyboardInput'](), orqyb5['window']['wx']['showKeyboard']({
                'defaultValue': j7i1xn['text'],
                'maxLength': j7i1xn['maxChars'],
                'multiple': j7i1xn['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (y5j) {},
                'fail': function (f$w92s) {}
            }), orqyb5['window']['wx']['onKeyboardConfirm'](function (c6t8hd) {
                var b0qgd = c6t8hd ? c6t8hd['value'] : '';
                j7i1xn['text'] = b0qgd, j7i1xn['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), orqyb5['window']['wx']['onKeyboardInput'](function (vxj7in) {
                var oby5qr = vxj7in ? vxj7in['value'] : '';
                if (!j7i1xn['multiline']) {
                    if (oby5qr['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                j7i1xn['text'] = oby5qr, j7i1xn['event']('input');
            });
        }, rov7y['inputEnter'] = function () {
            d6c8ht['inputElement']['target']['focus'] = ![];
        }, rov7y['wxinputblur'] = function () {
            rov7y['hideKeyboard']();
        }, rov7y['hideKeyboard'] = function () {
            orqyb5['window']['wx']['offKeyboardConfirm'](), orqyb5['window']['wx']['offKeyboardInput'](), orqyb5['window']['wx']['hideKeyboard']({
                'success': function (rb5yq) {
                    console['log']('隐藏键盘');
                },
                'fail': function (h8ct6z) {
                    console['log']('隐藏键盘出错:' + (h8ct6z ? h8ct6z['errMsg'] : ''));
                }
            });
        }, rov7y;
    }(),
        au31n = function () {
        function gq0kd() {}
        f2s(gq0kd, 'laya.wx.mini.MiniLoader');
        var gdc8t = gq0kd['prototype'];
        return gdc8t['load'] = function (z8et, un3a4, _hpz2e, f$2w9_, xi134) {
            _hpz2e === void 0x0 && (_hpz2e = !![]), xi134 === void 0x0 && (xi134 = ![]);
            var o0ybq5 = this;
            o0ybq5['_url'] = z8et;
            if (z8et['indexOf']('data:image') === 0x0) o0ybq5['_type'] = un3a4 = 'image';else o0ybq5['_type'] = un3a4 || (un3a4 = o0ybq5['getTypeFromUrl'](z8et));
            o0ybq5['_cache'] = _hpz2e, o0ybq5['_data'] = null;
            var vx7ijr = 'ascii';
            if (z8et['indexOf']('.fnt') != -0x1) vx7ijr = 'utf8';else un3a4 == 'arraybuffer' && (vx7ijr = '');
            ;
            var m4l3ua = vyro5q['getFileExtension'](z8et);
            if (gq0kd['_fileTypeArr']['indexOf'](m4l3ua) != -0x1) orqyb5['EnvConfig']['load']['call'](this, z8et, un3a4, _hpz2e, f$2w9_, xi134);else {
                if (!_pzeth['getFileInfo'](z8et)) {
                    if (z8et['indexOf']('layaNativeDir/') != -0x1) {
                        if (orqyb5['isZiYu']) {
                            var l3a4um = _pzeth['ziyuFileData'][z8et];
                            o0ybq5['onLoaded'](l3a4um);
                            return;
                        } else {
                            cosnole['log']('read read'), _pzeth['read'](z8et, vx7ijr, new ry5j(gq0kd, gq0kd['onReadNativeCallBack'], [vx7ijr, z8et, un3a4, _hpz2e, f$2w9_, xi134, o0ybq5]));
                            return;
                        }
                    }
                    if (n41x7i['rootPath'] == '') var jn71ix = z8et;else jn71ix = z8et['split'](n41x7i['rootPath'])[0x0];
                    z8et['indexOf']('http://') != -0x1 || z8et['indexOf']('https://') != -0x1 ? orqyb5['EnvConfig']['load']['call'](o0ybq5, z8et, un3a4, _hpz2e, f$2w9_, xi134) : _pzeth['readFile'](jn71ix, vx7ijr, new ry5j(gq0kd, gq0kd['onReadNativeCallBack'], [vx7ijr, z8et, un3a4, _hpz2e, f$2w9_, xi134, o0ybq5]), z8et);
                } else orqyb5['EnvConfig']['load']['call'](this, z8et, un3a4, _hpz2e, f$2w9_, xi134);
            }
        }, gdc8t['resMgrLoad'] = function (vqo5y, gdk608, ezhtp_, au413, ij7rv, ix3n14, q0k5bg) {
            ezhtp_ === void 0x0 && (ezhtp_ = 0x0), au413 === void 0x0 && (au413 = ![]), ij7rv === void 0x0 && (ij7rv = ![]), ix3n14 === void 0x0 && (ix3n14 = 0x0), q0k5bg === void 0x0 && (q0k5bg = 0x3), vqo5y['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', vqo5y), orqyb5['EnvConfig']['resMgrLoad'](vqo5y, (q5vr, rbq5yo, he_pt) => {
                gq0kd['prototype']['resMgrLoadCallBack'](q5vr, rbq5yo, he_pt, gdk608);
            }, ezhtp_, au413, ij7rv, ix3n14, q0k5bg);
        }, gdc8t['resMgrLoadCallBack'] = function (amu3l, ni1x7, kg6d8c, p9e2w) {
            console['log']('buff:::', amu3l, kg6d8c, _pzeth['fileNativeDir'] + '///' + _pzeth['fileListName']), p9e2w(amu3l, ni1x7, kg6d8c);
        }, gdc8t['clearRes'] = function (zceht8, _2pewz) {
            _2pewz === void 0x0 && (_2pewz = ![]);
            var xi4n31 = this;
            xi4n31['clearRes'](zceht8, _2pewz);
            var rvjxi = _pzeth['getFileInfo'](zceht8);
            if (rvjxi && (zceht8['indexOf']('http://') != -0x1 || zceht8['indexOf']('https://') != -0x1)) {
                var al4mu = rvjxi['md5'],
                    h2p_e = _pzeth['getFileNativePath'](al4mu);
                _pzeth['remove'](h2p_e);
            }
        }, gq0kd['onReadNativeCallBack'] = function (a3l41u, d8kc6, cpetzh, xn4i17, n7i1jx, d0g6k, kb0dgq, oj7ryv, kbq0gd) {
            xn4i17 === void 0x0 && (xn4i17 = !![]), d0g6k === void 0x0 && (d0g6k = ![]), oj7ryv === void 0x0 && (oj7ryv = 0x0);
            if (!oj7ryv) {
                var un3i41;
                if (cpetzh == 'json' || cpetzh == 'atlas') un3i41 = orqyb5['getJson'](kbq0gd['data']);else cpetzh == 'xml' ? un3i41 = vyro5q['parseXMLFromString'](kbq0gd['data']) : un3i41 = kbq0gd['data'];
                kb0dgq['onLoaded'](un3i41), !orqyb5['isZiYu'] && orqyb5['isPosMsgYu'] && cpetzh != 'arraybuffer' && wx['postMessage']({
                    'url': d8kc6,
                    'data': un3i41,
                    'isLoad': !![]
                });
            } else oj7ryv == 0x1 && orqyb5['EnvConfig']['load']['call'](kb0dgq, d8kc6, cpetzh, xn4i17, n7i1jx, d0g6k);
        }, chptez(gq0kd, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), gq0kd;
    }(),
        _pzeth = function (tzehc) {
        function o0yq5() {
            o0yq5['__super']['call'](this);
            ;
        }
        return f2s(o0yq5, 'laya.wx.mini.MiniFileMgr', tzehc), o0yq5['isLoadFile'] = function (bgd0kq) {
            return o0yq5['_fileTypeArr']['indexOf'](bgd0kq) != -0x1 ? !![] : ![];
        }, o0yq5['getFileInfo'] = function (la3) {
            var z2e_ = la3['split']('?')[0x0],
                oy50bq = o0yq5['filesListObj'][z2e_];
            if (oy50bq == null) return null;else return oy50bq;
            return null;
        }, o0yq5['onFileUpdate'] = function (_p9f, oyv5r) {
            var xjrvy = _p9f['split']('/'),
                yorqv = xjrvy[xjrvy['length'] - 0x1],
                h_pe = o0yq5['getFileInfo'](oyv5r);
            if (h_pe == null) o0yq5['onSaveFile'](oyv5r, yorqv);else {
                if (h_pe['readyUrl'] != oyv5r) o0yq5['remove'](yorqv, oyv5r);
            }
        }, o0yq5['exits'] = function (vnji, d60g8) {
            var i7rvj = o0yq5['getFileNativePath'](vnji);
            o0yq5['fs']['getFileInfo']({
                'filePath': i7rvj,
                'success': function (m4aul3) {
                    d60g8 != null && d60g8['runWith']([0x0, m4aul3]);
                },
                'fail': function (oq5b0y) {
                    d60g8 != null && d60g8['runWith']([0x1, oq5b0y]);
                }
            });
        }, o0yq5['read'] = function (yb0o, h_2pze, i1jx7n, bqyor5) {
            h_2pze === void 0x0 && (h_2pze = 'ascill'), bqyor5 === void 0x0 && (bqyor5 = '');
            var bo5yr;
            bqyor5 != '' ? bo5yr = o0yq5['getFileNativePath'](yb0o) : bo5yr = yb0o, o0yq5['fs']['readFile']({
                'filePath': bo5yr,
                'encoding': h_2pze,
                'success': function (yrqb) {
                    i1jx7n != null && i1jx7n['runWith']([0x0, yrqb]);
                },
                'fail': function (xy7rv) {
                    if (xy7rv && bqyor5 != '') o0yq5['down'](bqyor5, h_2pze, i1jx7n, bqyor5);else i1jx7n != null && i1jx7n['runWith']([0x1]);
                }
            });
        }, o0yq5['readNativeFile'] = function (mlua4, j1xi7n) {
            o0yq5['fs']['readFile']({
                'filePath': mlua4,
                'encoding': '',
                'success': function (gd6b) {
                    j1xi7n != null && j1xi7n['runWith']([0x0]);
                },
                'fail': function (p2ez_w) {
                    j1xi7n != null && j1xi7n['runWith']([0x1]);
                }
            });
        }, o0yq5['down'] = function (xr7vyj, vxi7j, f$w_9, c6htd8) {
            vxi7j === void 0x0 && (vxi7j = 'ascill'), c6htd8 === void 0x0 && (c6htd8 = '');
            var o5ryvq = o0yq5['getFileNativePath'](c6htd8),
                wf2s9 = o0yq5['wxdown']({
                'url': xr7vyj,
                'filePath': o5ryvq,
                'success': function (_pzh) {
                    if (_pzh['statusCode'] === 0xc8) o0yq5['readFile'](_pzh['filePath'], vxi7j, f$w_9, c6htd8);
                },
                'fail': function (vi7jxr) {
                    f$w_9 != null && f$w_9['runWith']([0x1, vi7jxr]);
                }
            });
            wf2s9['onProgressUpdate'](function (yjovr) {
                f$w_9 != null && f$w_9['runWith']([0x2, yjovr['progress']]);
            });
        }, o0yq5['readFile'] = function (swf2, b6kdg0, tcpe, ctzph) {
            b6kdg0 === void 0x0 && (b6kdg0 = 'ascill'), ctzph === void 0x0 && (ctzph = ''), o0yq5['fs']['readFile']({
                'filePath': swf2,
                'encoding': b6kdg0,
                'success': function (k0gbqd) {
                    if (swf2['indexOf']('http://') != -0x1 || swf2['indexOf']('https://') != -0x1) o0yq5['onFileUpdate'](swf2, ctzph);
                    tcpe != null && tcpe['runWith']([0x0, k0gbqd]);
                },
                'fail': function (rqy5v) {
                    if (rqy5v) tcpe != null && tcpe['runWith']([0x1, rqy5v]);
                }
            });
        }, o0yq5['downImg'] = function (f29$, qyro5b, jxvi7n) {
            jxvi7n === void 0x0 && (jxvi7n = '');
            var kb5qg = o0yq5['wxdown']({
                'url': f29$,
                'success': function (ybrq) {
                    ybrq['statusCode'] === 0xc8 && o0yq5['copyFile'](ybrq['tempFilePath'], jxvi7n, qyro5b);
                },
                'fail': function (kb5gq) {
                    qyro5b != null && qyro5b['runWith']([0x1, kb5gq]);
                }
            });
        }, o0yq5['copyFile'] = function (qb5o0y, rv5ojy, x13n) {
            var s9$f = qb5o0y['split']('/'),
                i1xj7 = s9$f[s9$f['length'] - 0x1],
                t86g = rv5ojy['split']('?')[0x0],
                gkc8d6 = o0yq5['getFileInfo'](rv5ojy),
                vqyo5r = o0yq5['getFileNativePath'](i1xj7);
            o0yq5['fs']['copyFile']({
                'srcPath': qb5o0y,
                'destPath': vqyo5r,
                'success': function (dcgk8) {
                    if (!gkc8d6) o0yq5['onSaveFile'](rv5ojy, i1xj7), x13n != null && x13n['runWith']([0x0]);else {
                        if (gkc8d6['readyUrl'] != rv5ojy) o0yq5['remove'](i1xj7, rv5ojy, x13n);
                    }
                },
                'fail': function (hze8) {
                    x13n != null && x13n['runWith']([0x1, hze8]);
                }
            });
        }, o0yq5['getFileNativePath'] = function (w$29fs) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + w$29fs;
        }, o0yq5['remove'] = function (qoy5b, v7jnxi, i14u3) {
            v7jnxi === void 0x0 && (v7jnxi = '');
            var ew_ = o0yq5['getFileInfo'](v7jnxi),
                tehzc = o0yq5['getFileNativePath'](ew_['md5']);
            robyq5['loader']['clearRes'](ew_['readyUrl']), o0yq5['fs']['unlink']({
                'filePath': tehzc,
                'success': function (pzch) {
                    if (v7jnxi != '') o0yq5['onSaveFile'](v7jnxi, qoy5b);
                    i14u3 != null && i14u3['runWith']([0x0]);
                },
                'fail': function (x7nj1) {}
            });
        }, o0yq5['onSaveFile'] = function (gbkd0, d60k8) {
            var qok0b = gbkd0['split']('?')[0x0];
            o0yq5['filesListObj'][qok0b] = {
                'md5': d60k8,
                'readyUrl': gbkd0
            }, o0yq5['fs']['writeFile']({
                'filePath': o0yq5['fileNativeDir'] + '/' + o0yq5['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](o0yq5['filesListObj']),
                'success': function (_pe29) {
                    console['log']('写入测试测试成功：', _pe29);
                },
                'fail': function (ezhctp) {
                    console['log']('写入测试测试失败：', ezhctp);
                }
            });
        }, o0yq5['existDir'] = function (kd8cg6, ryjo7v) {
            o0yq5['fs']['mkdir']({
                'dirPath': kd8cg6,
                'success': function (e_9w2) {
                    ryjo7v != null && ryjo7v['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (_2$wf) {
                    if (_2$wf['errMsg']['indexOf']('file already exists') != -0x1) o0yq5['readSync'](o0yq5['fileListName'], 'utf8', ryjo7v);else ryjo7v != null && ryjo7v['runWith']([0x1, _2$wf]);
                }
            });
        }, o0yq5['readSync'] = function (vyo5rj, _pw9f, ivnj7x, j7xvry) {
            _pw9f === void 0x0 && (_pw9f = 'ascill'), j7xvry === void 0x0 && (j7xvry = '');
            var rjo5v = o0yq5['getFileNativePath'](vyo5rj),
                h6d8tc;
            try {
                h6d8tc = o0yq5['fs']['readFileSync'](rjo5v), ivnj7x != null && ivnj7x['runWith']([0x0, { 'data': h6d8tc }]);
            } catch (zwpe2_) {
                ivnj7x != null && ivnj7x['runWith']([0x1]);
            }
        }, o0yq5['readCache'] = function () {}, o0yq5['writeCache'] = function (cpht) {
            var oyqb0 = readyUrl['split']('?')[0x0];
            o0yq5['filesListObj'][oyqb0] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, o0yq5['fs']['writeFile']({
                'filePath': o0yq5['fileNativeDir'] + '/' + o0yq5['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](o0yq5['filesListObj']),
                'success': function (kdg680) {},
                'fail': function (dg80k) {}
            });
        }, o0yq5['setNativeFileDir'] = function (tpe_) {
            o0yq5['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + tpe_;
        }, o0yq5['filesListObj'] = {}, o0yq5['fileNativeDir'] = null, o0yq5['fileListName'] = 'layaairfiles.txt', o0yq5['ziyuFileData'] = {}, chptez(o0yq5, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), o0yq5;
    }(yj7rx),
        ko5b0q = function (gbqd0) {
        function yrqo() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], yrqo['__super']['call'](this), this['_sound'] = yrqo['_createSound'](), this['_chanell'] = new jxy7(this['_sound']);
        }
        f2s(yrqo, 'laya.wx.mini.MiniSound', gbqd0);
        var ob0y5 = yrqo['prototype'];
        return ob0y5['load'] = function (pzche) {
            var yqrb5o = this;
            pzche = n41x7i['formatURL'](pzche), this['url'] = pzche;
            if (yrqo['_audioCache'][pzche]) {
                this['event']('complete');
                return;
            }
            function zetc() {
                if (yrqo['_null'] != undefined) yqrb5o['_sound']['onCanplay'](yrqo['_null']), yqrb5o['_sound']['onError'](yrqo['_null']);else try {
                    yqrb5o['_sound']['onCanplay'](null), yqrb5o['_sound']['onError'](null), yrqo['_null'] = null;
                } catch (voqr) {
                    console['warn']('[wxmini] _clearSound:' + voqr), yqrb5o['_sound']['onCanplay'](g0bk5q), yqrb5o['_sound']['onError'](g0bk5q), yrqo['_null'] = g0bk5q;
                }
            }
            function bqo5k() {
                au3['loaded'] = !![], au3['event']('complete'), yrqo['_audioCache'][au3['url']] = au3;
            }
            function l34ua(tezp) {
                console['error']('errCode=' + tezp['errCode'] + '  errMsg=' + tezp['errMsg']), au3['event']('error');
            }
            function g0bk5q() {}
            this['_sound']['onCanplay'](bqo5k), this['_sound']['onError'](l34ua), this['_sound']['src'] = pzche;
            var au3 = this;
        }, ob0y5['play'] = function (b5okq, thp_z) {
            b5okq === void 0x0 && (b5okq = 0x0), thp_z === void 0x0 && (thp_z = 0x0);
            var i7xj, j7xyvr;
            if (this['url'] == xj7i['_tMusic']) {
                if (!yrqo['_musicAudio']) yrqo['_musicAudio'] = this['_sound'];
                i7xj = yrqo['_musicAudio'], j7xyvr = this['_chanell'];
            } else i7xj = this['_sound'], j7xyvr = this['_chanell'];
            return i7xj['src'] = this['url'], i7xj['startTime'] = 0x0, j7xyvr['isStopped'] && (j7xyvr['url'] = this['url'], j7xyvr['loops'] = thp_z, j7xyvr['startTime'] = b5okq, j7xyvr['play'](), xj7i['addChannel'](j7xyvr)), j7xyvr;
        }, ob0y5['dispose'] = function () {
            var n7vj = yrqo['_audioCache'][this['url']];
            n7vj && (n7vj['src'] = '', delete yrqo['_audioCache'][this['url']]);
        }, ul1a3(0x0, ob0y5, 'duration', function () {
            return this['_sound']['duration'];
        }), yrqo['_createSound'] = function () {
            yrqo['_id']++;
            var ptzeh_ = orqyb5['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return ptzeh_;
        }, yrqo['_musicAudio'] = null, yrqo['_id'] = 0x0, yrqo['_audioCache'] = {}, yrqo['_null'] = undefined, yrqo;
    }(yj7rx),
        jxy7 = function (x4i7n1) {
        function _9wf2p(a43) {
            this['_audio'] = null, this['_onEnd'] = null, _9wf2p['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = a43, this['_onEnd'] = vyro5q['bind'](this['__onEnd'], this), a43['onEnded'](this['_onEnd']);
        }
        f2s(_9wf2p, 'laya.wx.mini.MiniSoundChannel', x4i7n1);
        var fs9 = _9wf2p['prototype'];
        return fs9['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (robyq5['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, fs9['__onNull'] = function () {}, fs9['play'] = function () {
            this['isStopped'] = ![], xj7i['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, fs9['stop'] = function () {
            this['isStopped'] = !![], xj7i['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, fs9['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, fs9['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], xj7i['addChannel'](this), this['_audio']['play']();
        }, ul1a3(0x0, fs9, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), ul1a3(0x0, fs9, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), ul1a3(0x0, fs9, 'volume', function () {
            return 0x1;
        }, function (xvjyr7) {}), _9wf2p['_null'] = undefined, _9wf2p;
    }(x7in14),
        na4u13 = function () {
        function na34() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = orqyb5['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        f2s(na34, 'laya.wx.mini.MiniVideo');
        var ixvnj7 = na34['prototype'];
        return ixvnj7['on'] = function (h2p_, z_he, j5yvo) {
            if (h2p_ == 'loadedmetadata') this['onPlayFunc'] = j5yvo['bind'](z_he), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else h2p_ == 'ended' && (this['onEndedFunC'] = j5yvo['bind'](z_he), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, ixvnj7['onTimeUpdateFunc'] = function (_wz2) {
            this['position'] = _wz2['position'], this['_duration'] = _wz2['duration'];
        }, ixvnj7['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, ixvnj7['onended'] = function (h_ept, ulam43) {
            this['onEndedFunC'] = ulam43['bind'](h_ept), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, ixvnj7['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, ixvnj7['off'] = function (e2zp_h, j7yrvo, g8kd) {
            if (e2zp_h == 'loadedmetadata') this['onPlayFunc'] = g8kd['bind'](j7yrvo), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else e2zp_h == 'ended' && (this['onEndedFunC'] = g8kd['bind'](j7yrvo), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, ixvnj7['load'] = function (an3u4) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = an3u4;
        }, ixvnj7['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, ixvnj7['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, ixvnj7['size'] = function (h2pe, jx7nvi) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = h2pe, this['videoElement']['height'] = jx7nvi;
        }, ixvnj7['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, ixvnj7['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, ul1a3(0x0, ixvnj7, 'duration', function () {
            return this['_duration'];
        }), ul1a3(0x0, ixvnj7, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (jixvn) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = jixvn;
        }), ul1a3(0x0, ixvnj7, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), ul1a3(0x0, ixvnj7, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), ul1a3(0x0, ixvnj7, 'ended', function () {
            return this['videoend'];
        }), ul1a3(0x0, ixvnj7, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (in47x1) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = in47x1;
        }), ul1a3(0x0, ixvnj7, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (yr5jv) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = yr5jv;
        }), ul1a3(0x0, ixvnj7, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (g5qbk) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = g5qbk;
        }), ul1a3(0x0, ixvnj7, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), ul1a3(0x0, ixvnj7, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (t_ezph) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = t_ezph;
        }), ul1a3(0x0, ixvnj7, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (g05kbq) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = g05kbq;
        }), ul1a3(0x0, ixvnj7, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), ul1a3(0x0, ixvnj7, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (y50bqo) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = y50bqo;
        }), ul1a3(0x0, ixvnj7, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (p_2f9w) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = p_2f9w;
        }), ul1a3(0x0, ixvnj7, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (xrvjy7) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = xrvjy7;
        }), na34;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var we_2p in Laya) {
        var _p9we2 = Laya[we_2p];
        _p9we2 && _p9we2['__isclass'] && (exports[we_2p] = _p9we2);
    }
});