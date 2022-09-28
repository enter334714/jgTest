var W = wx.$l;
(function (window, document, lbi6) {
    var u9ldxf = lbi6['un'],
        f8ib1 = lbi6['uns'],
        y3cwk7 = lbi6['static'],
        hpo0q4 = lbi6['class'],
        k3_z2v = lbi6['getset'],
        v_1i6 = lbi6['__newvec'],
        d8f = laya['utils']['Browser'],
        ldfbu8 = laya['events']['Event'],
        i_8 = laya['events']['EventDispatcher'],
        jcnre7 = laya['resource']['HTMLImage'],
        mo0$tg = laya['utils']['Handler'],
        z623_ = laya['display']['Input'],
        spax54 = laya['net']['Loader'],
        dxa5s = laya['maths']['Matrix'],
        lfi1 = laya['renders']['Render'],
        omh$t = laya['utils']['RunDriver'],
        q4m0 = laya['media']['Sound'],
        mht$o = laya['media']['SoundChannel'],
        p5saq = laya['media']['SoundManager'],
        sda5x = laya['display']['Stage'],
        _12vz6 = laya['net']['URL'],
        jrc7 = laya['utils']['Utils'],
        osqp = function () {
        function zv_32k() {}
        return hpo0q4(zv_32k, 'laya.wx.mini.MiniAdpter'), zv_32k['getJson'] = function (xad9s) {
            return JSON['parse'](xad9s);
        }, zv_32k['init'] = function (ew7c, yne7cw) {
            ew7c === void 0x0 && (ew7c = ![]), yne7cw === void 0x0 && (yne7cw = ![]);
            if (zv_32k['_inited']) return;
            zv_32k['window'] = window;
            if (zv_32k['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            zv_32k['_inited'] = !![], zv_32k['isZiYu'] = yne7cw, zv_32k['isPosMsgYu'] = ew7c, zv_32k['EnvConfig'] = {}, !zv_32k['isZiYu'] && (yvw['setNativeFileDir']('/layaairGame'), yvw['existDir'](yvw['fileNativeDir'], mo0$tg['create'](zv_32k, zv_32k['onMkdirCallBack']))), zv_32k['window']['focus'] = function () {}, lbi6['getUrlPath'] = function () {}, zv_32k['window']['logtime'] = function (_i62v) {}, zv_32k['window']['alertTimeLog'] = function (s5p9) {}, zv_32k['window']['resetShareInfo'] = function () {}, zv_32k['window']['CanvasRenderingContext2D'] = function () {}, zv_32k['window']['CanvasRenderingContext2D']['prototype'] = zv_32k['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], zv_32k['window']['document']['body']['appendChild'] = function () {}, zv_32k['EnvConfig']['pixelRatioInt'] = 0x0, omh$t['getPixelRatio'] = zv_32k['pixelRatio'], zv_32k['_preCreateElement'] = d8f['createElement'], d8f['createElement'] = zv_32k['createElement'], omh$t['createShaderCondition'] = zv_32k['createShaderCondition'], jrc7['parseXMLFromString'] = zv_32k['parseXMLFromString'], z623_['_createInputElement'] = mo$th0['_createInputElement'], zv_32k['EnvConfig']['load'] = spax54['prototype']['load'], spax54['prototype']['load'] = rcj7['prototype']['load'], zv_32k['isZiYu'] && ew7c && wx['onMessage'](function (nywe7) {
                nywe7['isLoad'] && (yvw['ziyuFileData'][nywe7['url']] = nywe7['data']);
            });
        }, zv_32k['onMkdirCallBack'] = function (z_16, $h0) {
            if (!z_16) yvw['filesListObj'] = JSON['parse']($h0['data']);
        }, zv_32k['pixelRatio'] = function () {
            if (!zv_32k['EnvConfig']['pixelRatioInt']) try {
                var er7nw = wx['getSystemInfoSync']();
                return zv_32k['EnvConfig']['pixelRatioInt'] = er7nw['pixelRatio'], er7nw = er7nw, er7nw['pixelRatio'];
            } catch (ne7j) {}
            return zv_32k['EnvConfig']['pixelRatioInt'];
        }, zv_32k['createElement'] = function (b1l86i) {
            if (b1l86i == 'canvas') {
                var k37c;
                return zv_32k['idx'] == 0x1 ? zv_32k['isZiYu'] ? (k37c = sharedCanvas, k37c['style'] = {}) : k37c = window['canvas'] : k37c = window['wx']['createCanvas'](), zv_32k['idx']++, k37c;
            } else {
                if (b1l86i == 'textarea' || b1l86i == 'input') return zv_32k['onCreateInput'](b1l86i);else {
                    if (b1l86i == 'div') {
                        var l9xfd = zv_32k['_preCreateElement'](b1l86i);
                        return l9xfd['contains'] = function (_i61) {
                            return null;
                        }, l9xfd['removeChild'] = function (o0$hm) {}, l9xfd;
                    } else return zv_32k['_preCreateElement'](b1l86i);
                }
            }
        }, zv_32k['onCreateInput'] = function (om0$) {
            var ax95ps = zv_32k['_preCreateElement'](om0$);
            return ax95ps['focus'] = mo$th0['wxinputFocus'], ax95ps['blur'] = mo$th0['wxinputblur'], ax95ps['style'] = {}, ax95ps['value'] = 0x0, ax95ps['parentElement'] = {}, ax95ps['placeholder'] = {}, ax95ps['type'] = {}, ax95ps['setColor'] = function (bfui8l) {}, ax95ps['setType'] = function (i1b_6) {}, ax95ps['setFontFace'] = function (k32_z) {}, ax95ps['addEventListener'] = function (sph4o) {}, ax95ps['contains'] = function (ykz32) {
                return null;
            }, ax95ps['removeChild'] = function (lf9u) {}, ax95ps;
        }, zv_32k['createShaderCondition'] = function (z_12v) {
            var _21z6 = this,
                jern7 = function () {
                var ph40oq = z_12v;
                return _21z6[z_12v['replace']('this.', '')];
            };
            return jern7;
        }, zv_32k['EnvConfig'] = null, zv_32k['window'] = null, zv_32k['_preCreateElement'] = null, zv_32k['_inited'] = ![], zv_32k['wxRequest'] = null, zv_32k['systemInfo'] = null, zv_32k['version'] = '0.0.1', zv_32k['isZiYu'] = ![], zv_32k['isPosMsgYu'] = ![], zv_32k['parseXMLFromString'] = function (lxd9u) {
            var k3wcy7, l61;
            lxd9u = lxd9u['replace'](/>\s+</g, '><');
            try {
                k3wcy7 = new window['Parser']['DOMParser']()['parseFromString'](lxd9u, 'text/xml');
            } catch (ulf8d) {
                throw '需要引入xml解析库文件';
            }
            return k3wcy7;
        }, zv_32k['idx'] = 0x1, zv_32k;
    }(),
        u5dx = function () {
        function wnec7r() {}
        hpo0q4(wnec7r, 'laya.wx.mini.MiniImage');
        var oqh0p = wnec7r['prototype'];
        return oqh0p['_loadImage'] = function (gt$mo0) {
            var z2vk_ = this,
                xp4sa = ![];
            gt$mo0['indexOf']('layaNativeDir/') == -0x1 && (xp4sa = !![], gt$mo0 = _12vz6['formatURL'](gt$mo0));
            if (!yvw['getFileInfo'](gt$mo0)) {
                if (gt$mo0['indexOf']('http://') != -0x1 || gt$mo0['indexOf']('https://') != -0x1) yvw['downImg'](gt$mo0, new mo0$tg(wnec7r, wnec7r['onDownImgCallBack'], [gt$mo0, z2vk_]), gt$mo0);else wnec7r['onCreateImage'](gt$mo0, z2vk_, !![]);
            } else wnec7r['onCreateImage'](gt$mo0, z2vk_, !xp4sa);
        }, wnec7r['onDownImgCallBack'] = function (ern7j, l8ufbi, cwynk7) {
            if (!cwynk7) wnec7r['onCreateImage'](ern7j, l8ufbi);else l8ufbi['onError'](null);
        }, wnec7r['onCreateImage'] = function (adx5u, k3cyz, ynwe7c) {
            ynwe7c === void 0x0 && (ynwe7c = ![]);
            var z326v;
            if (!ynwe7c) {
                var xlfu = yvw['getFileInfo'](adx5u),
                    qa45p = xlfu['md5'];
                z326v = yvw['getFileNativePath'](qa45p);
            } else z326v = adx5u;
            if (k3cyz['imgCache'] == null) k3cyz['imgCache'] = {};
            var enc7w;
            function ap9x5() {
                enc7w['onload'] = null, enc7w['onerror'] = null, delete k3cyz['imgCache'][adx5u];
            }
            ;
            var dxu9 = function () {
                ap9x5(), k3cyz['onLoaded'](enc7w);
            },
                jr7cen = function () {
                ap9x5(), k3cyz['event']('error', 'Load image failed');
            };
            k3cyz['_type'] == 'nativeimage' ? (enc7w = new d8f['window']['Image'](), enc7w['crossOrigin'] = '', enc7w['onload'] = dxu9, enc7w['onerror'] = jr7cen, enc7w['src'] = z326v, k3cyz['imgCache'][adx5u] = enc7w) : new jcnre7['create'](z326v, {
                'onload': dxu9,
                'onerror': jr7cen,
                'onCreate': function (qm$0ho) {
                    enc7w = qm$0ho, k3cyz['imgCache'][adx5u] = qm$0ho;
                }
            });
        }, wnec7r;
    }(),
        mo$th0 = function () {
        function qp04oh() {}
        return hpo0q4(qp04oh, 'laya.wx.mini.MiniInput'), qp04oh['_createInputElement'] = function () {
            z623_['_initInput'](z623_['area'] = d8f['createElement']('textarea')), z623_['_initInput'](z623_['input'] = d8f['createElement']('input')), z623_['inputContainer'] = d8f['createElement']('div'), z623_['inputContainer']['style']['position'] = 'absolute', z623_['inputContainer']['style']['zIndex'] = 0x186a0, d8f['container']['appendChild'](z623_['inputContainer']), z623_['inputContainer']['setPos'] = function (i612, cj7en) {
                z623_['inputContainer']['style']['left'] = i612 + 'px', z623_['inputContainer']['style']['top'] = cj7en + 'px';
            }, lbi6['stage']['on']('resize', null, qp04oh['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (nerc) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), p5saq['_soundClass'] = recwn7, p5saq['_musicClass'] = recwn7;
        }, qp04oh['_onStageResize'] = function () {
            var cnkwy = lbi6['stage']['_canvasTransform']['identity']();
            cnkwy['scale'](d8f['width'] / lfi1['canvas']['width'] / omh$t['getPixelRatio'](), d8f['height'] / lfi1['canvas']['height'] / omh$t['getPixelRatio']());
        }, qp04oh['wxinputFocus'] = function (biluf) {
            var i_v16 = z623_['inputElement']['target'];
            if (i_v16 && !i_v16['editable']) return;
            osqp['window']['wx']['offKeyboardConfirm'](), osqp['window']['wx']['offKeyboardInput'](), osqp['window']['wx']['showKeyboard']({
                'defaultValue': i_v16['text'],
                'maxLength': i_v16['maxChars'],
                'multiple': i_v16['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (w7nerc) {},
                'fail': function (y7w3ck) {}
            }), osqp['window']['wx']['onKeyboardConfirm'](function (o0t$mh) {
                var _61i8 = o0t$mh ? o0t$mh['value'] : '';
                i_v16['text'] = _61i8, i_v16['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), osqp['window']['wx']['onKeyboardInput'](function (lxfdu) {
                var dbfl8u = lxfdu ? lxfdu['value'] : '';
                if (!i_v16['multiline']) {
                    if (dbfl8u['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                i_v16['text'] = dbfl8u, i_v16['event']('input');
            });
        }, qp04oh['inputEnter'] = function () {
            z623_['inputElement']['target']['focus'] = ![];
        }, qp04oh['wxinputblur'] = function () {
            qp04oh['hideKeyboard']();
        }, qp04oh['hideKeyboard'] = function () {
            osqp['window']['wx']['offKeyboardConfirm'](), osqp['window']['wx']['offKeyboardInput'](), osqp['window']['wx']['hideKeyboard']({
                'success': function (p9x5as) {
                    console['log']('隐藏键盘');
                },
                'fail': function (o$0ht) {
                    console['log']('隐藏键盘出错:' + (o$0ht ? o$0ht['errMsg'] : ''));
                }
            });
        }, qp04oh;
    }(),
        rcj7 = function () {
        function zkwyv() {}
        hpo0q4(zkwyv, 'laya.wx.mini.MiniLoader');
        var q4om0 = zkwyv['prototype'];
        return q4om0['load'] = function (ul8fi, cn7j, wckn, ecnj7, q0oh) {
            wckn === void 0x0 && (wckn = !![]), q0oh === void 0x0 && (q0oh = ![]);
            var c7yew = this;
            c7yew['_url'] = ul8fi;
            if (ul8fi['indexOf']('data:image') === 0x0) c7yew['_type'] = cn7j = 'image';else c7yew['_type'] = cn7j || (cn7j = c7yew['getTypeFromUrl'](ul8fi));
            c7yew['_cache'] = wckn, c7yew['_data'] = null;
            var oq4hs = 'ascii';
            if (ul8fi['indexOf']('.fnt') != -0x1) oq4hs = 'utf8';else cn7j == 'arraybuffer' && (oq4hs = '');
            ;
            var wkzcy3 = jrc7['getFileExtension'](ul8fi);
            if (zkwyv['_fileTypeArr']['indexOf'](wkzcy3) != -0x1) osqp['EnvConfig']['load']['call'](this, ul8fi, cn7j, wckn, ecnj7, q0oh);else {
                if (!yvw['getFileInfo'](ul8fi)) {
                    if (ul8fi['indexOf']('layaNativeDir/') != -0x1) {
                        if (osqp['isZiYu']) {
                            var kzywc3 = yvw['ziyuFileData'][ul8fi];
                            c7yew['onLoaded'](kzywc3);
                            return;
                        } else {
                            cosnole['log']('read read'), yvw['read'](ul8fi, oq4hs, new mo0$tg(zkwyv, zkwyv['onReadNativeCallBack'], [oq4hs, ul8fi, cn7j, wckn, ecnj7, q0oh, c7yew]));
                            return;
                        }
                    }
                    if (_12vz6['rootPath'] == '') var y3zkcw = ul8fi;else y3zkcw = ul8fi['split'](_12vz6['rootPath'])[0x0];
                    ul8fi['indexOf']('http://') != -0x1 || ul8fi['indexOf']('https://') != -0x1 ? osqp['EnvConfig']['load']['call'](c7yew, ul8fi, cn7j, wckn, ecnj7, q0oh) : yvw['readFile'](y3zkcw, oq4hs, new mo0$tg(zkwyv, zkwyv['onReadNativeCallBack'], [oq4hs, ul8fi, cn7j, wckn, ecnj7, q0oh, c7yew]), ul8fi);
                } else osqp['EnvConfig']['load']['call'](this, ul8fi, cn7j, wckn, ecnj7, q0oh);
            }
        }, q4om0['resMgrLoad'] = function (w7nrc, o40hmq, kyw3zc, nw7kc, cwz3ky, sad9x5, ky3wcz) {
            kyw3zc === void 0x0 && (kyw3zc = 0x0), nw7kc === void 0x0 && (nw7kc = ![]), cwz3ky === void 0x0 && (cwz3ky = ![]), sad9x5 === void 0x0 && (sad9x5 = 0x0), ky3wcz === void 0x0 && (ky3wcz = 0x3), w7nrc['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', w7nrc), osqp['EnvConfig']['resMgrLoad'](w7nrc, (nwc7ky, opq04, i1_68b) => {
                zkwyv['prototype']['resMgrLoadCallBack'](nwc7ky, opq04, i1_68b, o40hmq);
            }, kyw3zc, nw7kc, cwz3ky, sad9x5, ky3wcz);
        }, q4om0['resMgrLoadCallBack'] = function (ifu8bl, sapq54, sq4op, qm0$o) {
            console['log']('buff:::', ifu8bl, sq4op, yvw['fileNativeDir'] + '///' + yvw['fileListName']), qm0$o(ifu8bl, sapq54, sq4op);
        }, q4om0['clearRes'] = function (oh$tm0, hm0$q) {
            hm0$q === void 0x0 && (hm0$q = ![]);
            var sap5q = this;
            sap5q['clearRes'](oh$tm0, hm0$q);
            var yk3w7 = yvw['getFileInfo'](oh$tm0);
            if (yk3w7 && (oh$tm0['indexOf']('http://') != -0x1 || oh$tm0['indexOf']('https://') != -0x1)) {
                var o0hm4q = yk3w7['md5'],
                    dxful = yvw['getFileNativePath'](o0hm4q);
                yvw['remove'](dxful);
            }
        }, zkwyv['onReadNativeCallBack'] = function (yzwk3v, _3vzk, yv2kz, kny, sohp4q, spoq4, y3zwkv, lufbd9, dufl9x) {
            kny === void 0x0 && (kny = !![]), spoq4 === void 0x0 && (spoq4 = ![]), lufbd9 === void 0x0 && (lufbd9 = 0x0);
            if (!lufbd9) {
                var p5sa;
                if (yv2kz == 'json' || yv2kz == 'atlas') p5sa = osqp['getJson'](dufl9x['data']);else yv2kz == 'xml' ? p5sa = jrc7['parseXMLFromString'](dufl9x['data']) : p5sa = dufl9x['data'];
                y3zwkv['onLoaded'](p5sa), !osqp['isZiYu'] && osqp['isPosMsgYu'] && yv2kz != 'arraybuffer' && wx['postMessage']({
                    'url': _3vzk,
                    'data': p5sa,
                    'isLoad': !![]
                });
            } else lufbd9 == 0x1 && osqp['EnvConfig']['load']['call'](y3zwkv, _3vzk, yv2kz, kny, sohp4q, spoq4);
        }, y3cwk7(zkwyv, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), zkwyv;
    }(),
        yvw = function (k3zy2v) {
        function f8ilub() {
            f8ilub['__super']['call'](this);
            ;
        }
        return hpo0q4(f8ilub, 'laya.wx.mini.MiniFileMgr', k3zy2v), f8ilub['isLoadFile'] = function (liu) {
            return f8ilub['_fileTypeArr']['indexOf'](liu) != -0x1 ? !![] : ![];
        }, f8ilub['getFileInfo'] = function (k3zv2) {
            var df9bu = k3zv2['split']('?')[0x0],
                lxfu9d = f8ilub['filesListObj'][df9bu];
            if (lxfu9d == null) return null;else return lxfu9d;
            return null;
        }, f8ilub['onFileUpdate'] = function (zkvw, du9bf) {
            var wy7nce = zkvw['split']('/'),
                ldfbu = wy7nce[wy7nce['length'] - 0x1],
                s4ohqp = f8ilub['getFileInfo'](du9bf);
            if (s4ohqp == null) f8ilub['onSaveFile'](du9bf, ldfbu);else {
                if (s4ohqp['readyUrl'] != du9bf) f8ilub['remove'](ldfbu, du9bf);
            }
        }, f8ilub['exits'] = function (ecw7ny, iu8bfl) {
            var v2zk_3 = f8ilub['getFileNativePath'](ecw7ny);
            f8ilub['fs']['getFileInfo']({
                'filePath': v2zk_3,
                'success': function (w7nyc) {
                    iu8bfl != null && iu8bfl['runWith']([0x0, w7nyc]);
                },
                'fail': function (kv3) {
                    iu8bfl != null && iu8bfl['runWith']([0x1, kv3]);
                }
            });
        }, f8ilub['read'] = function (kwy3, a54pq, ibluf, wecny) {
            a54pq === void 0x0 && (a54pq = 'ascill'), wecny === void 0x0 && (wecny = '');
            var ib16l;
            wecny != '' ? ib16l = f8ilub['getFileNativePath'](kwy3) : ib16l = kwy3, f8ilub['fs']['readFile']({
                'filePath': ib16l,
                'encoding': a54pq,
                'success': function (q4ho0m) {
                    ibluf != null && ibluf['runWith']([0x0, q4ho0m]);
                },
                'fail': function (wykc73) {
                    if (wykc73 && wecny != '') f8ilub['down'](wecny, a54pq, ibluf, wecny);else ibluf != null && ibluf['runWith']([0x1]);
                }
            });
        }, f8ilub['readNativeFile'] = function (jerc7n, a4sq5p) {
            f8ilub['fs']['readFile']({
                'filePath': jerc7n,
                'encoding': '',
                'success': function (s5ph4) {
                    a4sq5p != null && a4sq5p['runWith']([0x0]);
                },
                'fail': function (rcn) {
                    a4sq5p != null && a4sq5p['runWith']([0x1]);
                }
            });
        }, f8ilub['down'] = function (mto0h, y2z3kv, sqpa4, $0omt) {
            y2z3kv === void 0x0 && (y2z3kv = 'ascill'), $0omt === void 0x0 && ($0omt = '');
            var og = f8ilub['getFileNativePath']($0omt),
                iv12_6 = f8ilub['wxdown']({
                'url': mto0h,
                'filePath': og,
                'success': function (w7nky) {
                    if (w7nky['statusCode'] === 0xc8) f8ilub['readFile'](w7nky['filePath'], y2z3kv, sqpa4, $0omt);
                },
                'fail': function (c7ewn) {
                    sqpa4 != null && sqpa4['runWith']([0x1, c7ewn]);
                }
            });
            iv12_6['onProgressUpdate'](function (e7r) {
                sqpa4 != null && sqpa4['runWith']([0x2, e7r['progress']]);
            });
        }, f8ilub['readFile'] = function (kyczw3, ph4qs5, v_i216, ibl61) {
            ph4qs5 === void 0x0 && (ph4qs5 = 'ascill'), ibl61 === void 0x0 && (ibl61 = ''), f8ilub['fs']['readFile']({
                'filePath': kyczw3,
                'encoding': ph4qs5,
                'success': function (yzvw3k) {
                    if (kyczw3['indexOf']('http://') != -0x1 || kyczw3['indexOf']('https://') != -0x1) f8ilub['onFileUpdate'](kyczw3, ibl61);
                    v_i216 != null && v_i216['runWith']([0x0, yzvw3k]);
                },
                'fail': function (xdflu) {
                    if (xdflu) v_i216 != null && v_i216['runWith']([0x1, xdflu]);
                }
            });
        }, f8ilub['downImg'] = function (q4om0h, bl9ud, cnje) {
            cnje === void 0x0 && (cnje = '');
            var axudf9 = f8ilub['wxdown']({
                'url': q4om0h,
                'success': function (h4m0qo) {
                    h4m0qo['statusCode'] === 0xc8 && f8ilub['copyFile'](h4m0qo['tempFilePath'], cnje, bl9ud);
                },
                'fail': function (a59s) {
                    bl9ud != null && bl9ud['runWith']([0x1, a59s]);
                }
            });
        }, f8ilub['copyFile'] = function (d5axs9, d9xafu, xfud9) {
            var bi8_ = d5axs9['split']('/'),
                sopq4 = bi8_[bi8_['length'] - 0x1],
                budf8 = d9xafu['split']('?')[0x0],
                ywnec7 = f8ilub['getFileInfo'](d9xafu),
                t0$ = f8ilub['getFileNativePath'](sopq4);
            f8ilub['fs']['copyFile']({
                'srcPath': d5axs9,
                'destPath': t0$,
                'success': function (ot0mh) {
                    if (!ywnec7) f8ilub['onSaveFile'](d9xafu, sopq4), xfud9 != null && xfud9['runWith']([0x0]);else {
                        if (ywnec7['readyUrl'] != d9xafu) f8ilub['remove'](sopq4, d9xafu, xfud9);
                    }
                },
                'fail': function (lf9) {
                    xfud9 != null && xfud9['runWith']([0x1, lf9]);
                }
            });
        }, f8ilub['getFileNativePath'] = function (vk2z_) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + vk2z_;
        }, f8ilub['remove'] = function (hqps, y7nwe, yewn) {
            y7nwe === void 0x0 && (y7nwe = '');
            var ldfux = f8ilub['getFileInfo'](y7nwe),
                yc3kz = f8ilub['getFileNativePath'](ldfux['md5']);
            lbi6['loader']['clearRes'](ldfux['readyUrl']), f8ilub['fs']['unlink']({
                'filePath': yc3kz,
                'success': function (i612_8) {
                    if (y7nwe != '') f8ilub['onSaveFile'](y7nwe, hqps);
                    yewn != null && yewn['runWith']([0x0]);
                },
                'fail': function (wkncy) {}
            });
        }, f8ilub['onSaveFile'] = function (z2v3_, ludb9f) {
            var f8ibl = z2v3_['split']('?')[0x0];
            f8ilub['filesListObj'][f8ibl] = {
                'md5': ludb9f,
                'readyUrl': z2v3_
            }, f8ilub['fs']['writeFile']({
                'filePath': f8ilub['fileNativeDir'] + '/' + f8ilub['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](f8ilub['filesListObj']),
                'success': function (xd9s5a) {
                    console['log']('写入测试测试成功：', xd9s5a);
                },
                'fail': function (h45s) {
                    console['log']('写入测试测试失败：', h45s);
                }
            });
        }, f8ilub['existDir'] = function (sa5p4x, _z236v) {
            f8ilub['fs']['mkdir']({
                'dirPath': sa5p4x,
                'success': function (a59sd) {
                    _z236v != null && _z236v['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (b9ufld) {
                    if (b9ufld['errMsg']['indexOf']('file already exists') != -0x1) f8ilub['readSync'](f8ilub['fileListName'], 'utf8', _z236v);else _z236v != null && _z236v['runWith']([0x1, b9ufld]);
                }
            });
        }, f8ilub['readSync'] = function (uiblf, qo4h0p, s5pq4h, s5xpa4) {
            qo4h0p === void 0x0 && (qo4h0p = 'ascill'), s5xpa4 === void 0x0 && (s5xpa4 = '');
            var q$0om = f8ilub['getFileNativePath'](uiblf),
                i8u;
            try {
                i8u = f8ilub['fs']['readFileSync'](q$0om), s5pq4h != null && s5pq4h['runWith']([0x0, { 'data': i8u }]);
            } catch (qmh4) {
                s5pq4h != null && s5pq4h['runWith']([0x1]);
            }
        }, f8ilub['readCache'] = function () {}, f8ilub['writeCache'] = function (nykcw) {
            var r7wcne = readyUrl['split']('?')[0x0];
            f8ilub['filesListObj'][r7wcne] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, f8ilub['fs']['writeFile']({
                'filePath': f8ilub['fileNativeDir'] + '/' + f8ilub['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](f8ilub['filesListObj']),
                'success': function (ulfb8i) {},
                'fail': function (xp4a) {}
            });
        }, f8ilub['setNativeFileDir'] = function (nw7ky) {
            f8ilub['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + nw7ky;
        }, f8ilub['filesListObj'] = {}, f8ilub['fileNativeDir'] = null, f8ilub['fileListName'] = 'layaairfiles.txt', f8ilub['ziyuFileData'] = {}, y3cwk7(f8ilub, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), f8ilub;
    }(i_8),
        recwn7 = function (il618) {
        function i6() {
            this['_sound'] = null, this['url'] = null, this['loaded'] = ![], i6['__super']['call'](this), this['_sound'] = i6['_createSound']();
        }
        hpo0q4(i6, 'laya.wx.mini.MiniSound', il618);
        var l8d = i6['prototype'];
        return l8d['load'] = function (cweny7) {
            var ot0m$h = this;
            cweny7 = _12vz6['formatURL'](cweny7), this['url'] = cweny7;
            if (i6['_audioCache'][cweny7]) {
                this['event']('complete');
                return;
            }
            function xa5d() {
                if (i6['_null'] != undefined) ot0m$h['_sound']['onCanplay'](i6['_null']), ot0m$h['_sound']['onError'](i6['_null']);else try {
                    ot0m$h['_sound']['onCanplay'](null), ot0m$h['_sound']['onError'](null), i6['_null'] = null;
                } catch (nrj) {
                    console['warn']('[wxmini] _clearSound:' + nrj), ot0m$h['_sound']['onCanplay'](hpq4o), ot0m$h['_sound']['onError'](hpq4o), i6['_null'] = hpq4o;
                }
            }
            function i_1v26() {
                xa5d(), zcwy3['loaded'] = !![], zcwy3['event']('complete'), i6['_audioCache'][zcwy3['url']] = zcwy3;
            }
            function b_816i(osp4qh) {
                console['error']('errCode=' + osp4qh['errCode'] + '  errMsg=' + osp4qh['errMsg']), xa5d(), zcwy3['event']('error');
            }
            function hpq4o() {}
            this['_sound']['onCanplay'](i_1v26), this['_sound']['onError'](b_816i), this['_sound']['src'] = cweny7;
            var zcwy3 = this;
        }, l8d['play'] = function (d9u5a, i8b61_) {
            d9u5a === void 0x0 && (d9u5a = 0x0), i8b61_ === void 0x0 && (i8b61_ = 0x0);
            var zvk_23;
            if (this['url'] == p5saq['_tMusic']) {
                if (!i6['_musicAudio']) i6['_musicAudio'] = i6['_createSound']();
                zvk_23 = i6['_musicAudio'];
            } else zvk_23 = i6['_createSound']();
            zvk_23['src'] = this['url'];
            var _zv = new df9ulb(zvk_23);
            return _zv['url'] = this['url'], _zv['loops'] = i8b61_, _zv['startTime'] = d9u5a, _zv['play'](), p5saq['addChannel'](_zv), _zv;
        }, l8d['dispose'] = function () {
            var s5p4h = i6['_audioCache'][this['url']];
            s5p4h && (s5p4h['src'] = '', delete i6['_audioCache'][this['url']]);
        }, k3_z2v(0x0, l8d, 'duration', function () {
            return this['_sound']['duration'];
        }), i6['_createSound'] = function () {
            return i6['_id']++, osqp['window']['wx']['createInnerAudioContext']();
        }, i6['_musicAudio'] = null, i6['_id'] = 0x0, i6['_audioCache'] = {}, i6['_null'] = undefined, i6;
    }(i_8),
        df9ulb = function (fi18bl) {
        function zv_632(q5ap4s) {
            this['_audio'] = null, this['_onEnd'] = null, zv_632['__super']['call'](this), this['_audio'] = q5ap4s, this['_onEnd'] = jrc7['bind'](this['__onEnd'], this), q5ap4s['onEnded'](this['_onEnd']);
        }
        hpo0q4(zv_632, 'laya.wx.mini.MiniSoundChannel', fi18bl);
        var b861_ = zv_632['prototype'];
        return b861_['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (lbi6['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, b861_['__onNull'] = function () {}, b861_['play'] = function () {
            this['isStopped'] = ![], p5saq['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, b861_['stop'] = function () {
            this['isStopped'] = !![], p5saq['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
            if (zv_632['_null'] != undefined) this['_audio']['onEnded'](zv_632['_null']);else try {
                this['_audio']['onEnded'](null), zv_632['_null'] = null;
            } catch (enywc) {
                console['warn']('[wxmini] stop:' + enywc), this['_audio']['onEnded'](jrc7['bind'](this['__onNull'], this)), zv_632['_null'] = jrc7['bind'](this['__onNull'], this);
            }
            this['_audio'] = null;
        }, b861_['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, b861_['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], p5saq['addChannel'](this), this['_audio']['play']();
        }, k3_z2v(0x0, b861_, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), k3_z2v(0x0, b861_, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), k3_z2v(0x0, b861_, 'volume', function () {
            return 0x1;
        }, function (ib8ul) {}), zv_632['_null'] = undefined, zv_632;
    }(mht$o);
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var i6821_ in Laya) {
        var v_1i62 = Laya[i6821_];
        v_1i62 && v_1i62['__isclass'] && (exports[i6821_] = v_1i62);
    }
});