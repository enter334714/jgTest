var J = wx.h$;
(function (window, document, v7rjyx) {
    var n7xi = v7rjyx['un'],
        tdc6h8 = v7rjyx['uns'],
        qob5yr = v7rjyx['static'],
        w2f9s = v7rjyx['class'],
        dqbg0k = v7rjyx['getset'],
        nu34a = v7rjyx['__newvec'],
        h8t6c = laya['utils']['Browser'],
        xnij17 = laya['events']['Event'],
        i7nxj1 = laya['events']['EventDispatcher'],
        u1a43n = laya['resource']['HTMLImage'],
        vrq5o = laya['utils']['Handler'],
        ch6z8 = laya['display']['Input'],
        k8d0g6 = laya['net']['Loader'],
        d6g = laya['maths']['Matrix'],
        u43ni = laya['renders']['Render'],
        u31a4 = laya['utils']['RunDriver'],
        p2ez = laya['media']['Sound'],
        xn71ji = laya['media']['SoundChannel'],
        fpw_9 = laya['media']['SoundManager'],
        g8k0d6 = laya['display']['Stage'],
        vj7xni = laya['net']['URL'],
        p2h_ = laya['utils']['Utils'],
        rj5vo = function () {
        function g0bkd() {}
        return w2f9s(g0bkd, 'laya.wx.mini.MiniAdpter'), g0bkd['getJson'] = function (x7i4n) {
            return JSON['parse'](x7i4n);
        }, g0bkd['init'] = function (br5yoq, vjyor) {
            br5yoq === void 0x0 && (br5yoq = ![]), vjyor === void 0x0 && (vjyor = ![]);
            if (g0bkd['_inited']) return;
            g0bkd['window'] = window;
            if (g0bkd['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            g0bkd['_inited'] = !![], g0bkd['isZiYu'] = vjyor, g0bkd['isPosMsgYu'] = br5yoq, g0bkd['EnvConfig'] = {}, !g0bkd['isZiYu'] && (cdt['setNativeFileDir']('/layaairGame'), cdt['existDir'](cdt['fileNativeDir'], vrq5o['create'](g0bkd, g0bkd['onMkdirCallBack']))), g0bkd['window']['focus'] = function () {}, v7rjyx['getUrlPath'] = function () {}, g0bkd['window']['logtime'] = function (an314) {}, g0bkd['window']['alertTimeLog'] = function (c68hdt) {}, g0bkd['window']['resetShareInfo'] = function () {}, g0bkd['window']['CanvasRenderingContext2D'] = function () {}, g0bkd['window']['CanvasRenderingContext2D']['prototype'] = g0bkd['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], g0bkd['window']['document']['body']['appendChild'] = function () {}, g0bkd['EnvConfig']['pixelRatioInt'] = 0x0, u31a4['getPixelRatio'] = g0bkd['pixelRatio'], g0bkd['_preCreateElement'] = h8t6c['createElement'], h8t6c['createElement'] = g0bkd['createElement'], u31a4['createShaderCondition'] = g0bkd['createShaderCondition'], p2h_['parseXMLFromString'] = g0bkd['parseXMLFromString'], ch6z8['_createInputElement'] = ckd['_createInputElement'], g0bkd['EnvConfig']['load'] = k8d0g6['prototype']['load'], k8d0g6['prototype']['load'] = b50qoy['prototype']['load'], g0bkd['isZiYu'] && br5yoq && wx['onMessage'](function (n1u4a3) {
                n1u4a3['isLoad'] && (cdt['ziyuFileData'][n1u4a3['url']] = n1u4a3['data']);
            });
        }, g0bkd['onMkdirCallBack'] = function (a4mul3, e_w92) {
            if (!a4mul3) cdt['filesListObj'] = JSON['parse'](e_w92['data']);
        }, g0bkd['pixelRatio'] = function () {
            if (!g0bkd['EnvConfig']['pixelRatioInt']) try {
                var p_zt = wx['getSystemInfoSync']();
                return g0bkd['EnvConfig']['pixelRatioInt'] = p_zt['pixelRatio'], p_zt = p_zt, p_zt['pixelRatio'];
            } catch (r7oyj) {}
            return g0bkd['EnvConfig']['pixelRatioInt'];
        }, g0bkd['createElement'] = function (dk06) {
            if (dk06 == 'canvas') {
                var zpceh;
                return g0bkd['idx'] == 0x1 ? g0bkd['isZiYu'] ? (zpceh = sharedCanvas, zpceh['style'] = {}) : zpceh = window['canvas'] : zpceh = window['wx']['createCanvas'](), g0bkd['idx']++, zpceh;
            } else {
                if (dk06 == 'textarea' || dk06 == 'input') return g0bkd['onCreateInput'](dk06);else {
                    if (dk06 == 'div') {
                        var xy7vjr = g0bkd['_preCreateElement'](dk06);
                        return xy7vjr['contains'] = function (g86ct) {
                            return null;
                        }, xy7vjr['removeChild'] = function (we_z) {}, xy7vjr;
                    } else return g0bkd['_preCreateElement'](dk06);
                }
            }
        }, g0bkd['onCreateInput'] = function (ovrjy) {
            var u4l = g0bkd['_preCreateElement'](ovrjy);
            return u4l['focus'] = ckd['wxinputFocus'], u4l['blur'] = ckd['wxinputblur'], u4l['style'] = {}, u4l['value'] = 0x0, u4l['parentElement'] = {}, u4l['placeholder'] = {}, u4l['type'] = {}, u4l['setColor'] = function ($2wsf9) {}, u4l['setType'] = function (czh6) {}, u4l['setFontFace'] = function (gqk5b) {}, u4l['addEventListener'] = function (nv7x) {}, u4l['contains'] = function (rxvjy) {
                return null;
            }, u4l['removeChild'] = function (pw_z) {}, u4l;
        }, g0bkd['createShaderCondition'] = function (hetpcz) {
            var d086g = this,
                b0g5q = function () {
                var pz_w2 = hetpcz;
                return d086g[hetpcz['replace']('this.', '')];
            };
            return b0g5q;
        }, g0bkd['EnvConfig'] = null, g0bkd['window'] = null, g0bkd['_preCreateElement'] = null, g0bkd['_inited'] = ![], g0bkd['wxRequest'] = null, g0bkd['systemInfo'] = null, g0bkd['version'] = '0.0.1', g0bkd['isZiYu'] = ![], g0bkd['isPosMsgYu'] = ![], g0bkd['parseXMLFromString'] = function (xrjvy7) {
            var dkq, d0k6g8;
            xrjvy7 = xrjvy7['replace'](/>\s+</g, '><');
            try {
                dkq = new window['Parser']['DOMParser']()['parseFromString'](xrjvy7, 'text/xml');
            } catch (hd86ct) {
                throw '需要引入xml解析库文件';
            }
            return dkq;
        }, g0bkd['idx'] = 0x1, g0bkd;
    }(),
        dk6gb = function () {
        function ijrx() {}
        w2f9s(ijrx, 'laya.wx.mini.MiniImage');
        var dqkb = ijrx['prototype'];
        return dqkb['_loadImage'] = function (jrv) {
            var w2_e9 = this,
                yrob5 = ![];
            jrv['indexOf']('layaNativeDir/') == -0x1 && (yrob5 = !![], jrv = vj7xni['formatURL'](jrv));
            if (!cdt['getFileInfo'](jrv)) {
                if (jrv['indexOf']('http://') != -0x1 || jrv['indexOf']('https://') != -0x1) cdt['downImg'](jrv, new vrq5o(ijrx, ijrx['onDownImgCallBack'], [jrv, w2_e9]), jrv);else ijrx['onCreateImage'](jrv, w2_e9, !![]);
            } else ijrx['onCreateImage'](jrv, w2_e9, !yrob5);
        }, ijrx['onDownImgCallBack'] = function (w29pe, g6kd8, d086) {
            if (!d086) ijrx['onCreateImage'](w29pe, g6kd8);else g6kd8['onError'](null);
        }, ijrx['onCreateImage'] = function (boy5r, bgq50k, ovr5j) {
            ovr5j === void 0x0 && (ovr5j = ![]);
            var bg0q5;
            if (!ovr5j) {
                var b5qoyr = cdt['getFileInfo'](boy5r),
                    n14xi = b5qoyr['md5'];
                bg0q5 = cdt['getFileNativePath'](n14xi);
            } else bg0q5 = boy5r;
            if (bgq50k['imgCache'] == null) bgq50k['imgCache'] = {};
            var nivj7x;
            function n43ua1() {
                nivj7x['onload'] = null, nivj7x['onerror'] = null, delete bgq50k['imgCache'][boy5r];
            }
            ;
            var i417 = function () {
                n43ua1(), bgq50k['onLoaded'](nivj7x);
            },
                fw9_2$ = function () {
                n43ua1(), bgq50k['event']('error', 'Load image failed');
            };
            bgq50k['_type'] == 'nativeimage' ? (nivj7x = new h8t6c['window']['Image'](), nivj7x['crossOrigin'] = '', nivj7x['onload'] = i417, nivj7x['onerror'] = fw9_2$, nivj7x['src'] = bg0q5, bgq50k['imgCache'][boy5r] = nivj7x) : new u1a43n['create'](bg0q5, {
                'onload': i417,
                'onerror': fw9_2$,
                'onCreate': function (u4in3) {
                    nivj7x = u4in3, bgq50k['imgCache'][boy5r] = u4in3;
                }
            });
        }, ijrx;
    }(),
        ckd = function () {
        function ui14n() {}
        return w2f9s(ui14n, 'laya.wx.mini.MiniInput'), ui14n['_createInputElement'] = function () {
            ch6z8['_initInput'](ch6z8['area'] = h8t6c['createElement']('textarea')), ch6z8['_initInput'](ch6z8['input'] = h8t6c['createElement']('input')), ch6z8['inputContainer'] = h8t6c['createElement']('div'), ch6z8['inputContainer']['style']['position'] = 'absolute', ch6z8['inputContainer']['style']['zIndex'] = 0x186a0, h8t6c['container']['appendChild'](ch6z8['inputContainer']), ch6z8['inputContainer']['setPos'] = function (j7oyrv, bkoq) {
                ch6z8['inputContainer']['style']['left'] = j7oyrv + 'px', ch6z8['inputContainer']['style']['top'] = bkoq + 'px';
            }, v7rjyx['stage']['on']('resize', null, ui14n['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (nx1j7i) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), fpw_9['_soundClass'] = _$w2f, fpw_9['_musicClass'] = _$w2f, window['_videoClass'] = yjxr7v;
        }, ui14n['_onStageResize'] = function () {
            var pcezth = v7rjyx['stage']['_canvasTransform']['identity']();
            pcezth['scale'](h8t6c['width'] / u43ni['canvas']['width'] / u31a4['getPixelRatio'](), h8t6c['height'] / u43ni['canvas']['height'] / u31a4['getPixelRatio']());
        }, ui14n['wxinputFocus'] = function (het) {
            var ztehc = ch6z8['inputElement']['target'];
            if (ztehc && !ztehc['editable']) return;
            rj5vo['window']['wx']['offKeyboardConfirm'](), rj5vo['window']['wx']['offKeyboardInput'](), rj5vo['window']['wx']['showKeyboard']({
                'defaultValue': ztehc['text'],
                'maxLength': ztehc['maxChars'],
                'multiple': ztehc['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (d6ckg8) {},
                'fail': function (xyr7v) {}
            }), rj5vo['window']['wx']['onKeyboardConfirm'](function (t8g6cd) {
                var yojvr5 = t8g6cd ? t8g6cd['value'] : '';
                ztehc['text'] = yojvr5, ztehc['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), rj5vo['window']['wx']['onKeyboardInput'](function (i3un41) {
                var jxr7iv = i3un41 ? i3un41['value'] : '';
                if (!ztehc['multiline']) {
                    if (jxr7iv['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                ztehc['text'] = jxr7iv, ztehc['event']('input');
            });
        }, ui14n['inputEnter'] = function () {
            ch6z8['inputElement']['target']['focus'] = ![];
        }, ui14n['wxinputblur'] = function () {
            ui14n['hideKeyboard']();
        }, ui14n['hideKeyboard'] = function () {
            rj5vo['window']['wx']['offKeyboardConfirm'](), rj5vo['window']['wx']['offKeyboardInput'](), rj5vo['window']['wx']['hideKeyboard']({
                'success': function (etzph_) {
                    console['log']('隐藏键盘');
                },
                'fail': function (pzth_e) {
                    console['log']('隐藏键盘出错:' + (pzth_e ? pzth_e['errMsg'] : ''));
                }
            });
        }, ui14n;
    }(),
        b50qoy = function () {
        function u41l3() {}
        w2f9s(u41l3, 'laya.wx.mini.MiniLoader');
        var l3m4ua = u41l3['prototype'];
        return l3m4ua['load'] = function (xi7jn, k6gc, dt8cg, oqb0y, v7yor) {
            dt8cg === void 0x0 && (dt8cg = !![]), v7yor === void 0x0 && (v7yor = ![]);
            var gd06b = this;
            gd06b['_url'] = xi7jn;
            if (xi7jn['indexOf']('data:image') === 0x0) gd06b['_type'] = k6gc = 'image';else gd06b['_type'] = k6gc || (k6gc = gd06b['getTypeFromUrl'](xi7jn));
            gd06b['_cache'] = dt8cg, gd06b['_data'] = null;
            var n134u = 'ascii';
            if (xi7jn['indexOf']('.fnt') != -0x1) n134u = 'utf8';else k6gc == 'arraybuffer' && (n134u = '');
            ;
            var ry5vj = p2h_['getFileExtension'](xi7jn);
            if (u41l3['_fileTypeArr']['indexOf'](ry5vj) != -0x1) rj5vo['EnvConfig']['load']['call'](this, xi7jn, k6gc, dt8cg, oqb0y, v7yor);else {
                if (!cdt['getFileInfo'](xi7jn)) {
                    if (xi7jn['indexOf']('layaNativeDir/') != -0x1) {
                        if (rj5vo['isZiYu']) {
                            var cpetz = cdt['ziyuFileData'][xi7jn];
                            gd06b['onLoaded'](cpetz);
                            return;
                        } else {
                            cosnole['log']('read read'), cdt['read'](xi7jn, n134u, new vrq5o(u41l3, u41l3['onReadNativeCallBack'], [n134u, xi7jn, k6gc, dt8cg, oqb0y, v7yor, gd06b]));
                            return;
                        }
                    }
                    if (vj7xni['rootPath'] == '') var g0d = xi7jn;else g0d = xi7jn['split'](vj7xni['rootPath'])[0x0];
                    xi7jn['indexOf']('http://') != -0x1 || xi7jn['indexOf']('https://') != -0x1 ? rj5vo['EnvConfig']['load']['call'](gd06b, xi7jn, k6gc, dt8cg, oqb0y, v7yor) : cdt['readFile'](g0d, n134u, new vrq5o(u41l3, u41l3['onReadNativeCallBack'], [n134u, xi7jn, k6gc, dt8cg, oqb0y, v7yor, gd06b]), xi7jn);
                } else rj5vo['EnvConfig']['load']['call'](this, xi7jn, k6gc, dt8cg, oqb0y, v7yor);
            }
        }, l3m4ua['resMgrLoad'] = function (gc, u413l, jxiv7r, pw2_ez, z_hp2, hzctep, t8dhc) {
            jxiv7r === void 0x0 && (jxiv7r = 0x0), pw2_ez === void 0x0 && (pw2_ez = ![]), z_hp2 === void 0x0 && (z_hp2 = ![]), hzctep === void 0x0 && (hzctep = 0x0), t8dhc === void 0x0 && (t8dhc = 0x3), gc['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', gc), rj5vo['EnvConfig']['resMgrLoad'](gc, (zth86, hzc8te, rv5oqy) => {
                u41l3['prototype']['resMgrLoadCallBack'](zth86, hzc8te, rv5oqy, u413l);
            }, jxiv7r, pw2_ez, z_hp2, hzctep, t8dhc);
        }, l3m4ua['resMgrLoadCallBack'] = function (xrj7i, phzt_, kdgc68, _p2wf) {
            console['log']('buff:::', xrj7i, kdgc68, cdt['fileNativeDir'] + '///' + cdt['fileListName']), _p2wf(xrj7i, phzt_, kdgc68);
        }, l3m4ua['clearRes'] = function (ehzpt_, m3lu4) {
            m3lu4 === void 0x0 && (m3lu4 = ![]);
            var vrq = this;
            vrq['clearRes'](ehzpt_, m3lu4);
            var kd8cg = cdt['getFileInfo'](ehzpt_);
            if (kd8cg && (ehzpt_['indexOf']('http://') != -0x1 || ehzpt_['indexOf']('https://') != -0x1)) {
                var q5bo0y = kd8cg['md5'],
                    e8tzch = cdt['getFileNativePath'](q5bo0y);
                cdt['remove'](e8tzch);
            }
        }, u41l3['onReadNativeCallBack'] = function (g0kbdq, rvo7yj, yqovr, n143a, p2hz_, bro5q, n14i3x, ovy5rq, byqo05) {
            n143a === void 0x0 && (n143a = !![]), bro5q === void 0x0 && (bro5q = ![]), ovy5rq === void 0x0 && (ovy5rq = 0x0);
            if (!ovy5rq) {
                var f_w$29;
                if (yqovr == 'json' || yqovr == 'atlas') f_w$29 = rj5vo['getJson'](byqo05['data']);else yqovr == 'xml' ? f_w$29 = p2h_['parseXMLFromString'](byqo05['data']) : f_w$29 = byqo05['data'];
                n14i3x['onLoaded'](f_w$29), !rj5vo['isZiYu'] && rj5vo['isPosMsgYu'] && yqovr != 'arraybuffer' && wx['postMessage']({
                    'url': rvo7yj,
                    'data': f_w$29,
                    'isLoad': !![]
                });
            } else ovy5rq == 0x1 && rj5vo['EnvConfig']['load']['call'](n14i3x, rvo7yj, yqovr, n143a, p2hz_, bro5q);
        }, qob5yr(u41l3, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), u41l3;
    }(),
        cdt = function (ro5yjv) {
        function nv7ix() {
            nv7ix['__super']['call'](this);
            ;
        }
        return w2f9s(nv7ix, 'laya.wx.mini.MiniFileMgr', ro5yjv), nv7ix['isLoadFile'] = function (dt8hc) {
            return nv7ix['_fileTypeArr']['indexOf'](dt8hc) != -0x1 ? !![] : ![];
        }, nv7ix['getFileInfo'] = function (u3i14) {
            var tz_h = u3i14['split']('?')[0x0],
                hcz8e = nv7ix['filesListObj'][tz_h];
            if (hcz8e == null) return null;else return hcz8e;
            return null;
        }, nv7ix['onFileUpdate'] = function (kg0d68, u13ni) {
            var cz68h = kg0d68['split']('/'),
                vjx7ir = cz68h[cz68h['length'] - 0x1],
                dc6k = nv7ix['getFileInfo'](u13ni);
            if (dc6k == null) nv7ix['onSaveFile'](u13ni, vjx7ir);else {
                if (dc6k['readyUrl'] != u13ni) nv7ix['remove'](vjx7ir, u13ni);
            }
        }, nv7ix['exits'] = function (z_2pew, gtd68c) {
            var qyorv5 = nv7ix['getFileNativePath'](z_2pew);
            nv7ix['fs']['getFileInfo']({
                'filePath': qyorv5,
                'success': function (thze8) {
                    gtd68c != null && gtd68c['runWith']([0x0, thze8]);
                },
                'fail': function (obrq5) {
                    gtd68c != null && gtd68c['runWith']([0x1, obrq5]);
                }
            });
        }, nv7ix['read'] = function (et_hpz, qoyvr, h6ct8, ro7vyj) {
            qoyvr === void 0x0 && (qoyvr = 'ascill'), ro7vyj === void 0x0 && (ro7vyj = '');
            var f9w_$2;
            ro7vyj != '' ? f9w_$2 = nv7ix['getFileNativePath'](et_hpz) : f9w_$2 = et_hpz, nv7ix['fs']['readFile']({
                'filePath': f9w_$2,
                'encoding': qoyvr,
                'success': function (i3n1u4) {
                    h6ct8 != null && h6ct8['runWith']([0x0, i3n1u4]);
                },
                'fail': function (d086kg) {
                    if (d086kg && ro7vyj != '') nv7ix['down'](ro7vyj, qoyvr, h6ct8, ro7vyj);else h6ct8 != null && h6ct8['runWith']([0x1]);
                }
            });
        }, nv7ix['readNativeFile'] = function (pf92, gt6d8) {
            nv7ix['fs']['readFile']({
                'filePath': pf92,
                'encoding': '',
                'success': function (n1ua3) {
                    gt6d8 != null && gt6d8['runWith']([0x0]);
                },
                'fail': function (b50kg) {
                    gt6d8 != null && gt6d8['runWith']([0x1]);
                }
            });
        }, nv7ix['down'] = function (byoqr, un4, s9$wf, yoq0b5) {
            un4 === void 0x0 && (un4 = 'ascill'), yoq0b5 === void 0x0 && (yoq0b5 = '');
            var j7ivr = nv7ix['getFileNativePath'](yoq0b5),
                pewz_ = nv7ix['wxdown']({
                'url': byoqr,
                'filePath': j7ivr,
                'success': function (e2p_hz) {
                    if (e2p_hz['statusCode'] === 0xc8) nv7ix['readFile'](e2p_hz['filePath'], un4, s9$wf, yoq0b5);
                },
                'fail': function (hzt8c6) {
                    s9$wf != null && s9$wf['runWith']([0x1, hzt8c6]);
                }
            });
            pewz_['onProgressUpdate'](function (u1i43) {
                s9$wf != null && s9$wf['runWith']([0x2, u1i43['progress']]);
            });
        }, nv7ix['readFile'] = function (yxvj, wf2s9, dcgk68, t8zch6) {
            wf2s9 === void 0x0 && (wf2s9 = 'ascill'), t8zch6 === void 0x0 && (t8zch6 = ''), nv7ix['fs']['readFile']({
                'filePath': yxvj,
                'encoding': wf2s9,
                'success': function (u4n3i1) {
                    if (yxvj['indexOf']('http://') != -0x1 || yxvj['indexOf']('https://') != -0x1) nv7ix['onFileUpdate'](yxvj, t8zch6);
                    dcgk68 != null && dcgk68['runWith']([0x0, u4n3i1]);
                },
                'fail': function (l4uam) {
                    if (l4uam) dcgk68 != null && dcgk68['runWith']([0x1, l4uam]);
                }
            });
        }, nv7ix['downImg'] = function (rj5y, ixr, dg0) {
            dg0 === void 0x0 && (dg0 = '');
            var in417 = nv7ix['wxdown']({
                'url': rj5y,
                'success': function (vj7yro) {
                    vj7yro['statusCode'] === 0xc8 && nv7ix['copyFile'](vj7yro['tempFilePath'], dg0, ixr);
                },
                'fail': function (vjr5oy) {
                    ixr != null && ixr['runWith']([0x1, vjr5oy]);
                }
            });
        }, nv7ix['copyFile'] = function (pte_zh, pzhe, okq05) {
            var ix41n = pte_zh['split']('/'),
                hc8te = ix41n[ix41n['length'] - 0x1],
                pe9w_2 = pzhe['split']('?')[0x0],
                pehtz = nv7ix['getFileInfo'](pzhe),
                zhetp_ = nv7ix['getFileNativePath'](hc8te);
            nv7ix['fs']['copyFile']({
                'srcPath': pte_zh,
                'destPath': zhetp_,
                'success': function (lu3a4) {
                    if (!pehtz) nv7ix['onSaveFile'](pzhe, hc8te), okq05 != null && okq05['runWith']([0x0]);else {
                        if (pehtz['readyUrl'] != pzhe) nv7ix['remove'](hc8te, pzhe, okq05);
                    }
                },
                'fail': function ($w2f_) {
                    okq05 != null && okq05['runWith']([0x1, $w2f_]);
                }
            });
        }, nv7ix['getFileNativePath'] = function (jvy7) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + jvy7;
        }, nv7ix['remove'] = function (f_29wp, t8he, kboq) {
            t8he === void 0x0 && (t8he = '');
            var gc68td = nv7ix['getFileInfo'](t8he),
                w2$fs = nv7ix['getFileNativePath'](gc68td['md5']);
            v7rjyx['loader']['clearRes'](gc68td['readyUrl']), nv7ix['fs']['unlink']({
                'filePath': w2$fs,
                'success': function (vo5yj) {
                    if (t8he != '') nv7ix['onSaveFile'](t8he, f_29wp);
                    kboq != null && kboq['runWith']([0x0]);
                },
                'fail': function (_w2$) {}
            });
        }, nv7ix['onSaveFile'] = function (n17ix, eph2_) {
            var gdc8t6 = n17ix['split']('?')[0x0];
            nv7ix['filesListObj'][gdc8t6] = {
                'md5': eph2_,
                'readyUrl': n17ix
            }, nv7ix['fs']['writeFile']({
                'filePath': nv7ix['fileNativeDir'] + '/' + nv7ix['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](nv7ix['filesListObj']),
                'success': function (y5bq0) {
                    console['log']('写入测试测试成功：', y5bq0);
                },
                'fail': function (sw9f2) {
                    console['log']('写入测试测试失败：', sw9f2);
                }
            });
        }, nv7ix['existDir'] = function (zch86, pzcth) {
            nv7ix['fs']['mkdir']({
                'dirPath': zch86,
                'success': function (h8td6c) {
                    pzcth != null && pzcth['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (v7i) {
                    if (v7i['errMsg']['indexOf']('file already exists') != -0x1) nv7ix['readSync'](nv7ix['fileListName'], 'utf8', pzcth);else pzcth != null && pzcth['runWith']([0x1, v7i]);
                }
            });
        }, nv7ix['readSync'] = function (_2e9, cetp, wep_29, d8th6c) {
            cetp === void 0x0 && (cetp = 'ascill'), d8th6c === void 0x0 && (d8th6c = '');
            var iv7njx = nv7ix['getFileNativePath'](_2e9),
                jxni71;
            try {
                jxni71 = nv7ix['fs']['readFileSync'](iv7njx), wep_29 != null && wep_29['runWith']([0x0, { 'data': jxni71 }]);
            } catch (ctp) {
                wep_29 != null && wep_29['runWith']([0x1]);
            }
        }, nv7ix['readCache'] = function () {}, nv7ix['writeCache'] = function (ctpez) {
            var vrxij7 = readyUrl['split']('?')[0x0];
            nv7ix['filesListObj'][vrxij7] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, nv7ix['fs']['writeFile']({
                'filePath': nv7ix['fileNativeDir'] + '/' + nv7ix['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](nv7ix['filesListObj']),
                'success': function (n314au) {},
                'fail': function (ixrvj) {}
            });
        }, nv7ix['setNativeFileDir'] = function (i74xn1) {
            nv7ix['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + i74xn1;
        }, nv7ix['filesListObj'] = {}, nv7ix['fileNativeDir'] = null, nv7ix['fileListName'] = 'layaairfiles.txt', nv7ix['ziyuFileData'] = {}, qob5yr(nv7ix, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), nv7ix;
    }(i7nxj1),
        _$w2f = function (ji7rx) {
        function dtc6h() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], dtc6h['__super']['call'](this), this['_sound'] = dtc6h['_createSound'](), this['_chanell'] = new n3a41u(this['_sound']);
        }
        w2f9s(dtc6h, 'laya.wx.mini.MiniSound', ji7rx);
        var i1jnx = dtc6h['prototype'];
        return i1jnx['load'] = function (ua31) {
            var bo50qy = this;
            ua31 = vj7xni['formatURL'](ua31), this['url'] = ua31;
            if (dtc6h['_audioCache'][ua31]) {
                this['event']('complete');
                return;
            }
            function j5oyrv() {
                if (dtc6h['_null'] != undefined) bo50qy['_sound']['onCanplay'](dtc6h['_null']), bo50qy['_sound']['onError'](dtc6h['_null']);else try {
                    bo50qy['_sound']['onCanplay'](null), bo50qy['_sound']['onError'](null), dtc6h['_null'] = null;
                } catch (_w2ze) {
                    console['warn']('[wxmini] _clearSound:' + _w2ze), bo50qy['_sound']['onCanplay'](gk06d), bo50qy['_sound']['onError'](gk06d), dtc6h['_null'] = gk06d;
                }
            }
            function e9p_() {
                yvqro5['loaded'] = !![], yvqro5['event']('complete'), dtc6h['_audioCache'][yvqro5['url']] = yvqro5;
            }
            function dc6(u14l3) {
                console['error']('errCode=' + u14l3['errCode'] + '  errMsg=' + u14l3['errMsg']), yvqro5['event']('error');
            }
            function gk06d() {}
            this['_sound']['onCanplay'](e9p_), this['_sound']['onError'](dc6), this['_sound']['src'] = ua31;
            var yvqro5 = this;
        }, i1jnx['play'] = function (a1lu3, au4n1) {
            a1lu3 === void 0x0 && (a1lu3 = 0x0), au4n1 === void 0x0 && (au4n1 = 0x0);
            var y5vrq, al3u1;
            if (this['url'] == fpw_9['_tMusic']) {
                if (!dtc6h['_musicAudio']) dtc6h['_musicAudio'] = this['_sound'];
                y5vrq = dtc6h['_musicAudio'], al3u1 = this['_chanell'];
            } else y5vrq = this['_sound'], al3u1 = this['_chanell'];
            return y5vrq['src'] = this['url'], y5vrq['startTime'] = 0x0, al3u1['isStopped'] && (al3u1['url'] = this['url'], al3u1['loops'] = au4n1, al3u1['startTime'] = a1lu3, al3u1['play'](), fpw_9['addChannel'](al3u1)), al3u1;
        }, i1jnx['dispose'] = function () {
            var ep2zw = dtc6h['_audioCache'][this['url']];
            ep2zw && (ep2zw['src'] = '', delete dtc6h['_audioCache'][this['url']]);
        }, dqbg0k(0x0, i1jnx, 'duration', function () {
            return this['_sound']['duration'];
        }), dtc6h['_createSound'] = function () {
            dtc6h['_id']++;
            var v7ryj = rj5vo['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return v7ryj;
        }, dtc6h['_musicAudio'] = null, dtc6h['_id'] = 0x0, dtc6h['_audioCache'] = {}, dtc6h['_null'] = undefined, dtc6h;
    }(i7nxj1),
        n3a41u = function (xnij7v) {
        function pf9w2_(n7ivx) {
            this['_audio'] = null, this['_onEnd'] = null, pf9w2_['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = n7ivx, this['_onEnd'] = p2h_['bind'](this['__onEnd'], this), n7ivx['onEnded'](this['_onEnd']);
        }
        w2f9s(pf9w2_, 'laya.wx.mini.MiniSoundChannel', xnij7v);
        var x7jyrv = pf9w2_['prototype'];
        return x7jyrv['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (v7rjyx['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, x7jyrv['__onNull'] = function () {}, x7jyrv['play'] = function () {
            this['isStopped'] = ![], fpw_9['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, x7jyrv['stop'] = function () {
            this['isStopped'] = !![], fpw_9['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, x7jyrv['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, x7jyrv['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], fpw_9['addChannel'](this), this['_audio']['play']();
        }, dqbg0k(0x0, x7jyrv, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), dqbg0k(0x0, x7jyrv, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), dqbg0k(0x0, x7jyrv, 'volume', function () {
            return 0x1;
        }, function (u3la) {}), pf9w2_['_null'] = undefined, pf9w2_;
    }(xn71ji),
        yjxr7v = function () {
        function ma() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = rj5vo['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        w2f9s(ma, 'laya.wx.mini.MiniVideo');
        var hd6ct = ma['prototype'];
        return hd6ct['on'] = function (phzct, o0yb5, gcd86) {
            if (phzct == 'loadedmetadata') this['onPlayFunc'] = gcd86['bind'](o0yb5), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else phzct == 'ended' && (this['onEndedFunC'] = gcd86['bind'](o0yb5), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, hd6ct['onTimeUpdateFunc'] = function (vx7nj) {
            this['position'] = vx7nj['position'], this['_duration'] = vx7nj['duration'];
        }, hd6ct['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, hd6ct['onended'] = function (qo0b5k, r5yv) {
            this['onEndedFunC'] = r5yv['bind'](qo0b5k), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, hd6ct['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, hd6ct['off'] = function (g06kbd, dbk60, $w_9f) {
            if (g06kbd == 'loadedmetadata') this['onPlayFunc'] = $w_9f['bind'](dbk60), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else g06kbd == 'ended' && (this['onEndedFunC'] = $w_9f['bind'](dbk60), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, hd6ct['load'] = function (s$9fw2) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = s$9fw2;
        }, hd6ct['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, hd6ct['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, hd6ct['size'] = function (yovjr5, a14l) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = yovjr5, this['videoElement']['height'] = a14l;
        }, hd6ct['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, hd6ct['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, dqbg0k(0x0, hd6ct, 'duration', function () {
            return this['_duration'];
        }), dqbg0k(0x0, hd6ct, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (yov5r) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = yov5r;
        }), dqbg0k(0x0, hd6ct, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), dqbg0k(0x0, hd6ct, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), dqbg0k(0x0, hd6ct, 'ended', function () {
            return this['videoend'];
        }), dqbg0k(0x0, hd6ct, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (ct68) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = ct68;
        }), dqbg0k(0x0, hd6ct, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (e_zw2) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = e_zw2;
        }), dqbg0k(0x0, hd6ct, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (rvji7x) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = rvji7x;
        }), dqbg0k(0x0, hd6ct, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), dqbg0k(0x0, hd6ct, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (y5qob0) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = y5qob0;
        }), dqbg0k(0x0, hd6ct, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (yrojv) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = yrojv;
        }), dqbg0k(0x0, hd6ct, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), dqbg0k(0x0, hd6ct, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (e_hpz2) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = e_hpz2;
        }), dqbg0k(0x0, hd6ct, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (jrv7yo) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = jrv7yo;
        }), dqbg0k(0x0, hd6ct, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (yovr5j) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = yovr5j;
        }), ma;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var c8gd6k in Laya) {
        var hc8tez = Laya[c8gd6k];
        hc8tez && hc8tez['__isclass'] && (exports[c8gd6k] = hc8tez);
    }
});