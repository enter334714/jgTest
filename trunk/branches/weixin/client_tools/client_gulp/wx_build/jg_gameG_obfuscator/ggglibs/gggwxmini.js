var m = wx.$g;
(function (window, document, r$u2j6) {
    var y1xwk = r$u2j6['un'],
        eqg7vy = r$u2j6['uns'],
        qvwey = r$u2j6['static'],
        $rj2z = r$u2j6['class'],
        pb5f0 = r$u2j6['getset'],
        g9lsc = r$u2j6['__newvec'],
        fbp05_ = laya['utils']['Browser'],
        gs87cq = laya['events']['Event'],
        q78gsc = laya['events']['EventDispatcher'],
        xy1hk = laya['resource']['HTMLImage'],
        _fp40 = laya['utils']['Handler'],
        _bptf = laya['display']['Input'],
        b5p0_ = laya['net']['Loader'],
        t0bf_p = laya['maths']['Matrix'],
        cgs78q = laya['renders']['Render'],
        xbpa5 = laya['utils']['RunDriver'],
        _t0bf = laya['media']['Sound'],
        xkih1 = laya['media']['SoundChannel'],
        ewykv = laya['media']['SoundManager'],
        y7vkw = laya['display']['Stage'],
        b_5i = laya['net']['URL'],
        c7qgev = laya['utils']['Utils'],
        cv7qgs = function () {
        function y7kev() {}
        return $rj2z(y7kev, 'laya.wx.mini.MiniAdpter'), y7kev['getJson'] = function (axih15) {
            return JSON['parse'](axih15);
        }, y7kev['init'] = function (w1ykhx, kxh1wy) {
            w1ykhx === void 0x0 && (w1ykhx = ![]), kxh1wy === void 0x0 && (kxh1wy = ![]);
            if (y7kev['_inited']) return;
            y7kev['window'] = window;
            if (y7kev['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            y7kev['_inited'] = !![], y7kev['isZiYu'] = kxh1wy, y7kev['isPosMsgYu'] = w1ykhx, y7kev['EnvConfig'] = {}, !y7kev['isZiYu'] && (vqyew7['setNativeFileDir']('/layaairGame'), vqyew7['existDir'](vqyew7['fileNativeDir'], _fp40['create'](y7kev, y7kev['onMkdirCallBack']))), y7kev['window']['focus'] = function () {}, r$u2j6['getUrlPath'] = function () {}, y7kev['window']['logtime'] = function (kv1yw) {}, y7kev['window']['alertTimeLog'] = function (vcqs) {}, y7kev['window']['resetShareInfo'] = function () {}, y7kev['window']['CanvasRenderingContext2D'] = function () {}, y7kev['window']['CanvasRenderingContext2D']['prototype'] = y7kev['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], y7kev['window']['document']['body']['appendChild'] = function () {}, y7kev['EnvConfig']['pixelRatioInt'] = 0x0, xbpa5['getPixelRatio'] = y7kev['pixelRatio'], y7kev['_preCreateElement'] = fbp05_['createElement'], fbp05_['createElement'] = y7kev['createElement'], xbpa5['createShaderCondition'] = y7kev['createShaderCondition'], c7qgev['parseXMLFromString'] = y7kev['parseXMLFromString'], _bptf['_createInputElement'] = ewy7q['_createInputElement'], y7kev['EnvConfig']['load'] = b5p0_['prototype']['load'], b5p0_['prototype']['load'] = i5bpxa['prototype']['load'], y7kev['isZiYu'] && w1ykhx && wx['onMessage'](function (gsc7q8) {
                gsc7q8['isLoad'] && (vqyew7['ziyuFileData'][gsc7q8['url']] = gsc7q8['data']);
            });
        }, y7kev['onMkdirCallBack'] = function (f_bp50, dz3o26) {
            if (!f_bp50) vqyew7['filesListObj'] = JSON['parse'](dz3o26['data']);
        }, y7kev['pixelRatio'] = function () {
            if (!y7kev['EnvConfig']['pixelRatioInt']) try {
                var glc8q = wx['getSystemInfoSync']();
                return y7kev['EnvConfig']['pixelRatioInt'] = glc8q['pixelRatio'], glc8q = glc8q, glc8q['pixelRatio'];
            } catch (q7weyv) {}
            return y7kev['EnvConfig']['pixelRatioInt'];
        }, y7kev['createElement'] = function (o3td4) {
            if (o3td4 == 'canvas') {
                var aib5px;
                return y7kev['idx'] == 0x1 ? y7kev['isZiYu'] ? (aib5px = sharedCanvas, aib5px['style'] = {}) : aib5px = window['canvas'] : aib5px = window['wx']['createCanvas'](), y7kev['idx']++, aib5px;
            } else {
                if (o3td4 == 'textarea' || o3td4 == 'input') return y7kev['onCreateInput'](o3td4);else {
                    if (o3td4 == 'div') {
                        var kxhwy = y7kev['_preCreateElement'](o3td4);
                        return kxhwy['contains'] = function (do2z63) {
                            return null;
                        }, kxhwy['removeChild'] = function (vewky1) {}, kxhwy;
                    } else return y7kev['_preCreateElement'](o3td4);
                }
            }
        }, y7kev['onCreateInput'] = function (j2r$z) {
            var zdrj26 = y7kev['_preCreateElement'](j2r$z);
            return zdrj26['focus'] = ewy7q['wxinputFocus'], zdrj26['blur'] = ewy7q['wxinputblur'], zdrj26['style'] = {}, zdrj26['value'] = 0x0, zdrj26['parentElement'] = {}, zdrj26['placeholder'] = {}, zdrj26['type'] = {}, zdrj26['setColor'] = function ($2rju6) {}, zdrj26['setType'] = function (f_3ot4) {}, zdrj26['setFontFace'] = function (g7cvq) {}, zdrj26['addEventListener'] = function (tf0_b) {}, zdrj26['contains'] = function (o2d43z) {
                return null;
            }, zdrj26['removeChild'] = function (ykvwe) {}, zdrj26;
        }, y7kev['createShaderCondition'] = function (b05f_p) {
            var jzr6d2 = this,
                qcg8 = function () {
                var jr2u6 = b05f_p;
                return jzr6d2[b05f_p['replace']('this.', '')];
            };
            return qcg8;
        }, y7kev['EnvConfig'] = null, y7kev['window'] = null, y7kev['_preCreateElement'] = null, y7kev['_inited'] = ![], y7kev['wxRequest'] = null, y7kev['systemInfo'] = null, y7kev['version'] = '0.0.1', y7kev['isZiYu'] = ![], y7kev['isPosMsgYu'] = ![], y7kev['parseXMLFromString'] = function (csgq7v) {
            var jru6$m, _fptb;
            csgq7v = csgq7v['replace'](/>\s+</g, '><');
            try {
                jru6$m = new window['Parser']['DOMParser']()['parseFromString'](csgq7v, 'text/xml');
            } catch (d62zr) {
                throw '需要引入xml解析库文件';
            }
            return jru6$m;
        }, y7kev['idx'] = 0x1, y7kev;
    }(),
        ixp5 = function () {
        function vygqe7() {}
        $rj2z(vygqe7, 'laya.wx.mini.MiniImage');
        var muj6r = vygqe7['prototype'];
        return muj6r['_loadImage'] = function (pf0t) {
            var jrz62$ = this,
                kwaxh1 = ![];
            pf0t['indexOf']('layaNativeDir/') == -0x1 && (kwaxh1 = !![], pf0t = b_5i['formatURL'](pf0t));
            if (!vqyew7['getFileInfo'](pf0t)) {
                if (pf0t['indexOf']('http://') != -0x1 || pf0t['indexOf']('https://') != -0x1) vqyew7['downImg'](pf0t, new _fp40(vygqe7, vygqe7['onDownImgCallBack'], [pf0t, jrz62$]), pf0t);else vygqe7['onCreateImage'](pf0t, jrz62$, !![]);
            } else vygqe7['onCreateImage'](pf0t, jrz62$, !kwaxh1);
        }, vygqe7['onDownImgCallBack'] = function (tp_04f, o_3tf4, qwvy7) {
            if (!qwvy7) vygqe7['onCreateImage'](tp_04f, o_3tf4);else o_3tf4['onError'](null);
        }, vygqe7['onCreateImage'] = function ($rjz62, s7c8q, do3tz) {
            do3tz === void 0x0 && (do3tz = ![]);
            var r6zd;
            if (!do3tz) {
                var qlgc8 = vqyew7['getFileInfo']($rjz62),
                    cgsqv7 = qlgc8['md5'];
                r6zd = vqyew7['getFileNativePath'](cgsqv7);
            } else r6zd = $rjz62;
            if (s7c8q['imgCache'] == null) s7c8q['imgCache'] = {};
            var mrj$;
            function vk() {
                mrj$['onload'] = null, mrj$['onerror'] = null, delete s7c8q['imgCache'][$rjz62];
            }
            ;
            var o43f = function () {
                vk(), s7c8q['onLoaded'](mrj$);
            },
                gcvs7 = function () {
                vk(), s7c8q['event']('error', 'Load image failed');
            };
            s7c8q['_type'] == 'nativeimage' ? (mrj$ = new fbp05_['window']['Image'](), mrj$['crossOrigin'] = '', mrj$['onload'] = o43f, mrj$['onerror'] = gcvs7, mrj$['src'] = r6zd, s7c8q['imgCache'][$rjz62] = mrj$) : new xy1hk['create'](r6zd, {
                'onload': o43f,
                'onerror': gcvs7,
                'onCreate': function (_bpi05) {
                    mrj$ = _bpi05, s7c8q['imgCache'][$rjz62] = _bpi05;
                }
            });
        }, vygqe7;
    }(),
        ewy7q = function () {
        function j$62u() {}
        return $rj2z(j$62u, 'laya.wx.mini.MiniInput'), j$62u['_createInputElement'] = function () {
            _bptf['_initInput'](_bptf['area'] = fbp05_['createElement']('textarea')), _bptf['_initInput'](_bptf['input'] = fbp05_['createElement']('input')), _bptf['inputContainer'] = fbp05_['createElement']('div'), _bptf['inputContainer']['style']['position'] = 'absolute', _bptf['inputContainer']['style']['zIndex'] = 0x186a0, fbp05_['container']['appendChild'](_bptf['inputContainer']), _bptf['inputContainer']['setPos'] = function (sgq8c, api5) {
                _bptf['inputContainer']['style']['left'] = sgq8c + 'px', _bptf['inputContainer']['style']['top'] = api5 + 'px';
            }, r$u2j6['stage']['on']('resize', null, j$62u['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (dz34) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), ewykv['_soundClass'] = $r6z2, ewykv['_musicClass'] = $r6z2, window['_videoClass'] = t4dzo;
        }, j$62u['_onStageResize'] = function () {
            var m$6u = r$u2j6['stage']['_canvasTransform']['identity']();
            m$6u['scale'](fbp05_['width'] / cgs78q['canvas']['width'] / xbpa5['getPixelRatio'](), fbp05_['height'] / cgs78q['canvas']['height'] / xbpa5['getPixelRatio']());
        }, j$62u['wxinputFocus'] = function (tf40_p) {
            var yekh1 = _bptf['inputElement']['target'];
            if (yekh1 && !yekh1['editable']) return;
            cv7qgs['window']['wx']['offKeyboardConfirm'](), cv7qgs['window']['wx']['offKeyboardInput'](), cv7qgs['window']['wx']['showKeyboard']({
                'defaultValue': yekh1['text'],
                'maxLength': yekh1['maxChars'],
                'multiple': yekh1['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (iap5xb) {},
                'fail': function (scg7v) {}
            }), cv7qgs['window']['wx']['onKeyboardConfirm'](function (cg7sq8) {
                var wey7q = cg7sq8 ? cg7sq8['value'] : '';
                yekh1['text'] = wey7q, yekh1['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), cv7qgs['window']['wx']['onKeyboardInput'](function (_340) {
                var ls9cg = _340 ? _340['value'] : '';
                if (!yekh1['multiline']) {
                    if (ls9cg['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                yekh1['text'] = ls9cg, yekh1['event']('input');
            });
        }, j$62u['inputEnter'] = function () {
            _bptf['inputElement']['target']['focus'] = ![];
        }, j$62u['wxinputblur'] = function () {
            j$62u['hideKeyboard']();
        }, j$62u['hideKeyboard'] = function () {
            cv7qgs['window']['wx']['offKeyboardConfirm'](), cv7qgs['window']['wx']['offKeyboardInput'](), cv7qgs['window']['wx']['hideKeyboard']({
                'success': function (xkyh) {
                    console['log']('隐藏键盘');
                },
                'fail': function (tp_0f) {
                    console['log']('隐藏键盘出错:' + (tp_0f ? tp_0f['errMsg'] : ''));
                }
            });
        }, j$62u;
    }(),
        i5bpxa = function () {
        function ozd2() {}
        $rj2z(ozd2, 'laya.wx.mini.MiniLoader');
        var pbai5x = ozd2['prototype'];
        return pbai5x['load'] = function (ju2r$6, y7gev, kywev7, f04_tp, wyv1) {
            kywev7 === void 0x0 && (kywev7 = !![]), wyv1 === void 0x0 && (wyv1 = ![]);
            var s78gc = this;
            s78gc['_url'] = ju2r$6;
            if (ju2r$6['indexOf']('data:image') === 0x0) s78gc['_type'] = y7gev = 'image';else s78gc['_type'] = y7gev || (y7gev = s78gc['getTypeFromUrl'](ju2r$6));
            s78gc['_cache'] = kywev7, s78gc['_data'] = null;
            var z2d4o = 'ascii';
            if (ju2r$6['indexOf']('.fnt') != -0x1) z2d4o = 'utf8';else y7gev == 'arraybuffer' && (z2d4o = '');
            ;
            var lc9gs8 = c7qgev['getFileExtension'](ju2r$6);
            if (ozd2['_fileTypeArr']['indexOf'](lc9gs8) != -0x1) cv7qgs['EnvConfig']['load']['call'](this, ju2r$6, y7gev, kywev7, f04_tp, wyv1);else {
                if (!vqyew7['getFileInfo'](ju2r$6)) {
                    if (ju2r$6['indexOf']('layaNativeDir/') != -0x1) {
                        if (cv7qgs['isZiYu']) {
                            var pb5xa = vqyew7['ziyuFileData'][ju2r$6];
                            s78gc['onLoaded'](pb5xa);
                            return;
                        } else {
                            cosnole['log']('read read'), vqyew7['read'](ju2r$6, z2d4o, new _fp40(ozd2, ozd2['onReadNativeCallBack'], [z2d4o, ju2r$6, y7gev, kywev7, f04_tp, wyv1, s78gc]));
                            return;
                        }
                    }
                    if (b_5i['rootPath'] == '') var _40fp = ju2r$6;else _40fp = ju2r$6['split'](b_5i['rootPath'])[0x0];
                    ju2r$6['indexOf']('http://') != -0x1 || ju2r$6['indexOf']('https://') != -0x1 ? cv7qgs['EnvConfig']['load']['call'](s78gc, ju2r$6, y7gev, kywev7, f04_tp, wyv1) : vqyew7['readFile'](_40fp, z2d4o, new _fp40(ozd2, ozd2['onReadNativeCallBack'], [z2d4o, ju2r$6, y7gev, kywev7, f04_tp, wyv1, s78gc]), ju2r$6);
                } else cv7qgs['EnvConfig']['load']['call'](this, ju2r$6, y7gev, kywev7, f04_tp, wyv1);
            }
        }, pbai5x['resMgrLoad'] = function (p_t4f, dzr2o, tf3_04, r6zdj2, o6rd2z, bp_f0t, pbi5xa) {
            tf3_04 === void 0x0 && (tf3_04 = 0x0), r6zdj2 === void 0x0 && (r6zdj2 = ![]), o6rd2z === void 0x0 && (o6rd2z = ![]), bp_f0t === void 0x0 && (bp_f0t = 0x0), pbi5xa === void 0x0 && (pbi5xa = 0x3), p_t4f['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', p_t4f), cv7qgs['EnvConfig']['resMgrLoad'](p_t4f, (csv7g, tf0pb, tf_03) => {
                ozd2['prototype']['resMgrLoadCallBack'](csv7g, tf0pb, tf_03, dzr2o);
            }, tf3_04, r6zdj2, o6rd2z, bp_f0t, pbi5xa);
        }, pbai5x['resMgrLoadCallBack'] = function (hix1k, e7gqvc, he1w, f0p_t) {
            console['log']('buff:::', hix1k, he1w, vqyew7['fileNativeDir'] + '///' + vqyew7['fileListName']), f0p_t(hix1k, e7gqvc, he1w);
        }, pbai5x['clearRes'] = function (ye7vkw, f430_t) {
            f430_t === void 0x0 && (f430_t = ![]);
            var oft3d = this;
            oft3d['clearRes'](ye7vkw, f430_t);
            var _340t = vqyew7['getFileInfo'](ye7vkw);
            if (_340t && (ye7vkw['indexOf']('http://') != -0x1 || ye7vkw['indexOf']('https://') != -0x1)) {
                var kx1wah = _340t['md5'],
                    pb_0t = vqyew7['getFileNativePath'](kx1wah);
                vqyew7['remove'](pb_0t);
            }
        }, ozd2['onReadNativeCallBack'] = function (tfp, kh1aix, qvcs7g, jzd6, vq7gec, rzd2, uj26, ye1vw, xyhwk) {
            jzd6 === void 0x0 && (jzd6 = !![]), rzd2 === void 0x0 && (rzd2 = ![]), ye1vw === void 0x0 && (ye1vw = 0x0);
            if (!ye1vw) {
                var khxa;
                if (qvcs7g == 'json' || qvcs7g == 'atlas') khxa = cv7qgs['getJson'](xyhwk['data']);else qvcs7g == 'xml' ? khxa = c7qgev['parseXMLFromString'](xyhwk['data']) : khxa = xyhwk['data'];
                uj26['onLoaded'](khxa), !cv7qgs['isZiYu'] && cv7qgs['isPosMsgYu'] && qvcs7g != 'arraybuffer' && wx['postMessage']({
                    'url': kh1aix,
                    'data': khxa,
                    'isLoad': !![]
                });
            } else ye1vw == 0x1 && cv7qgs['EnvConfig']['load']['call'](uj26, kh1aix, qvcs7g, jzd6, vq7gec, rzd2);
        }, qvwey(ozd2, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), ozd2;
    }(),
        vqyew7 = function (c89s) {
        function cgq7s() {
            cgq7s['__super']['call'](this);
            ;
        }
        return $rj2z(cgq7s, 'laya.wx.mini.MiniFileMgr', c89s), cgq7s['isLoadFile'] = function (u$rm) {
            return cgq7s['_fileTypeArr']['indexOf'](u$rm) != -0x1 ? !![] : ![];
        }, cgq7s['getFileInfo'] = function (g8qcs7) {
            var $6j2zr = g8qcs7['split']('?')[0x0],
                zor = cgq7s['filesListObj'][$6j2zr];
            if (zor == null) return null;else return zor;
            return null;
        }, cgq7s['onFileUpdate'] = function (od26zr, whyxk) {
            var xhaib = od26zr['split']('/'),
                hw1ykx = xhaib[xhaib['length'] - 0x1],
                w7vye = cgq7s['getFileInfo'](whyxk);
            if (w7vye == null) cgq7s['onSaveFile'](whyxk, hw1ykx);else {
                if (w7vye['readyUrl'] != whyxk) cgq7s['remove'](hw1ykx, whyxk);
            }
        }, cgq7s['exits'] = function (r2z, ihab5) {
            var yevwk7 = cgq7s['getFileNativePath'](r2z);
            cgq7s['fs']['getFileInfo']({
                'filePath': yevwk7,
                'success': function (whe1k) {
                    ihab5 != null && ihab5['runWith']([0x0, whe1k]);
                },
                'fail': function (kxh1ia) {
                    ihab5 != null && ihab5['runWith']([0x1, kxh1ia]);
                }
            });
        }, cgq7s['read'] = function (j6$ru, q7ygve, hi5x, kxh1yw) {
            q7ygve === void 0x0 && (q7ygve = 'ascill'), kxh1yw === void 0x0 && (kxh1yw = '');
            var o26rz;
            kxh1yw != '' ? o26rz = cgq7s['getFileNativePath'](j6$ru) : o26rz = j6$ru, cgq7s['fs']['readFile']({
                'filePath': o26rz,
                'encoding': q7ygve,
                'success': function (ibxh5) {
                    hi5x != null && hi5x['runWith']([0x0, ibxh5]);
                },
                'fail': function (p_0t4f) {
                    if (p_0t4f && kxh1yw != '') cgq7s['down'](kxh1yw, q7ygve, hi5x, kxh1yw);else hi5x != null && hi5x['runWith']([0x1]);
                }
            });
        }, cgq7s['readNativeFile'] = function (hia51, j26dzr) {
            cgq7s['fs']['readFile']({
                'filePath': hia51,
                'encoding': '',
                'success': function (rjz62$) {
                    j26dzr != null && j26dzr['runWith']([0x0]);
                },
                'fail': function ($rjum) {
                    j26dzr != null && j26dzr['runWith']([0x1]);
                }
            });
        }, cgq7s['down'] = function (p0_4t, kxhi1a, jr$6m, cg78q) {
            kxhi1a === void 0x0 && (kxhi1a = 'ascill'), cg78q === void 0x0 && (cg78q = '');
            var hika1 = cgq7s['getFileNativePath'](cg78q),
                yevq7w = cgq7s['wxdown']({
                'url': p0_4t,
                'filePath': hika1,
                'success': function (fpt40_) {
                    if (fpt40_['statusCode'] === 0xc8) cgq7s['readFile'](fpt40_['filePath'], kxhi1a, jr$6m, cg78q);
                },
                'fail': function (p4f) {
                    jr$6m != null && jr$6m['runWith']([0x1, p4f]);
                }
            });
            yevq7w['onProgressUpdate'](function (p0iab) {
                jr$6m != null && jr$6m['runWith']([0x2, p0iab['progress']]);
            });
        }, cgq7s['readFile'] = function (d43o, zj26, t0f4p_, r$6j2z) {
            zj26 === void 0x0 && (zj26 = 'ascill'), r$6j2z === void 0x0 && (r$6j2z = ''), cgq7s['fs']['readFile']({
                'filePath': d43o,
                'encoding': zj26,
                'success': function (x51) {
                    if (d43o['indexOf']('http://') != -0x1 || d43o['indexOf']('https://') != -0x1) cgq7s['onFileUpdate'](d43o, r$6j2z);
                    t0f4p_ != null && t0f4p_['runWith']([0x0, x51]);
                },
                'fail': function ($rj26z) {
                    if ($rj26z) t0f4p_ != null && t0f4p_['runWith']([0x1, $rj26z]);
                }
            });
        }, cgq7s['downImg'] = function (t0_f4p, xhik1a, a1ixh) {
            a1ixh === void 0x0 && (a1ixh = '');
            var b5p0i = cgq7s['wxdown']({
                'url': t0_f4p,
                'success': function (scq78g) {
                    scq78g['statusCode'] === 0xc8 && cgq7s['copyFile'](scq78g['tempFilePath'], a1ixh, xhik1a);
                },
                'fail': function (t3zod4) {
                    xhik1a != null && xhik1a['runWith']([0x1, t3zod4]);
                }
            });
        }, cgq7s['copyFile'] = function (xa5ibh, tp04f_, f4tp_0) {
            var lqscg8 = xa5ibh['split']('/'),
                fp_b0t = lqscg8[lqscg8['length'] - 0x1],
                ba0i = tp04f_['split']('?')[0x0],
                yg7evq = cgq7s['getFileInfo'](tp04f_),
                ve1ky = cgq7s['getFileNativePath'](fp_b0t);
            cgq7s['fs']['copyFile']({
                'srcPath': xa5ibh,
                'destPath': ve1ky,
                'success': function (o4d3t) {
                    if (!yg7evq) cgq7s['onSaveFile'](tp04f_, fp_b0t), f4tp_0 != null && f4tp_0['runWith']([0x0]);else {
                        if (yg7evq['readyUrl'] != tp04f_) cgq7s['remove'](fp_b0t, tp04f_, f4tp_0);
                    }
                },
                'fail': function (kwh1ye) {
                    f4tp_0 != null && f4tp_0['runWith']([0x1, kwh1ye]);
                }
            });
        }, cgq7s['getFileNativePath'] = function (gscl9) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + gscl9;
        }, cgq7s['remove'] = function (pa5b0, ia5pb, wka1h) {
            ia5pb === void 0x0 && (ia5pb = '');
            var vkywe1 = cgq7s['getFileInfo'](ia5pb),
                b_05pf = cgq7s['getFileNativePath'](vkywe1['md5']);
            r$u2j6['loader']['clearRes'](vkywe1['readyUrl']), cgq7s['fs']['unlink']({
                'filePath': b_05pf,
                'success': function (xi51h) {
                    if (ia5pb != '') cgq7s['onSaveFile'](ia5pb, pa5b0);
                    wka1h != null && wka1h['runWith']([0x0]);
                },
                'fail': function (f_t4) {}
            });
        }, cgq7s['onSaveFile'] = function (pb_i50, t3dz) {
            var d62z3o = pb_i50['split']('?')[0x0];
            cgq7s['filesListObj'][d62z3o] = {
                'md5': t3dz,
                'readyUrl': pb_i50
            }, cgq7s['fs']['writeFile']({
                'filePath': cgq7s['fileNativeDir'] + '/' + cgq7s['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](cgq7s['filesListObj']),
                'success': function (gqvye7) {
                    console['log']('写入测试测试成功：', gqvye7);
                },
                'fail': function (s7g8c) {
                    console['log']('写入测试测试失败：', s7g8c);
                }
            });
        }, cgq7s['existDir'] = function (ye7wkv, whky) {
            cgq7s['fs']['mkdir']({
                'dirPath': ye7wkv,
                'success': function (gyq7) {
                    whky != null && whky['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (a50b) {
                    if (a50b['errMsg']['indexOf']('file already exists') != -0x1) cgq7s['readSync'](cgq7s['fileListName'], 'utf8', whky);else whky != null && whky['runWith']([0x1, a50b]);
                }
            });
        }, cgq7s['readSync'] = function (rjz2$6, bp0i5, k1whxa, ecq7) {
            bp0i5 === void 0x0 && (bp0i5 = 'ascill'), ecq7 === void 0x0 && (ecq7 = '');
            var he1k = cgq7s['getFileNativePath'](rjz2$6),
                dr2zj;
            try {
                dr2zj = cgq7s['fs']['readFileSync'](he1k), k1whxa != null && k1whxa['runWith']([0x0, { 'data': dr2zj }]);
            } catch (b5ahxi) {
                k1whxa != null && k1whxa['runWith']([0x1]);
            }
        }, cgq7s['readCache'] = function () {}, cgq7s['writeCache'] = function (a0b5pi) {
            var f43otd = readyUrl['split']('?')[0x0];
            cgq7s['filesListObj'][f43otd] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, cgq7s['fs']['writeFile']({
                'filePath': cgq7s['fileNativeDir'] + '/' + cgq7s['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](cgq7s['filesListObj']),
                'success': function (r6do) {},
                'fail': function (ixhk) {}
            });
        }, cgq7s['setNativeFileDir'] = function (x5hbai) {
            cgq7s['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + x5hbai;
        }, cgq7s['filesListObj'] = {}, cgq7s['fileNativeDir'] = null, cgq7s['fileListName'] = 'layaairfiles.txt', cgq7s['ziyuFileData'] = {}, qvwey(cgq7s, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), cgq7s;
    }(q78gsc),
        $r6z2 = function (h1ywke) {
        function hkew1y() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], hkew1y['__super']['call'](this), this['_sound'] = hkew1y['_createSound'](), this['_chanell'] = new wyve(this['_sound']);
        }
        $rj2z(hkew1y, 'laya.wx.mini.MiniSound', h1ywke);
        var glq = hkew1y['prototype'];
        return glq['load'] = function (pbia5x) {
            var sclg8 = this;
            pbia5x = b_5i['formatURL'](pbia5x), this['url'] = pbia5x;
            if (hkew1y['_audioCache'][pbia5x]) {
                this['event']('complete');
                return;
            }
            function ih5xa() {
                if (hkew1y['_null'] != undefined) sclg8['_sound']['onCanplay'](hkew1y['_null']), sclg8['_sound']['onError'](hkew1y['_null']);else try {
                    sclg8['_sound']['onCanplay'](null), sclg8['_sound']['onError'](null), hkew1y['_null'] = null;
                } catch (i0b_p) {
                    console['warn']('[wxmini] _clearSound:' + i0b_p), sclg8['_sound']['onCanplay'](ruj$26), sclg8['_sound']['onError'](ruj$26), hkew1y['_null'] = ruj$26;
                }
            }
            function jur$62() {
                vgsq7c['loaded'] = !![], vgsq7c['event']('complete'), hkew1y['_audioCache'][vgsq7c['url']] = vgsq7c;
            }
            function f_bp0(zr2d6o) {
                console['error']('errCode=' + zr2d6o['errCode'] + '  errMsg=' + zr2d6o['errMsg']), vgsq7c['event']('error');
            }
            function ruj$26() {}
            this['_sound']['onCanplay'](jur$62), this['_sound']['onError'](f_bp0), this['_sound']['src'] = pbia5x;
            var vgsq7c = this;
        }, glq['play'] = function (aip5x, d24) {
            aip5x === void 0x0 && (aip5x = 0x0), d24 === void 0x0 && (d24 = 0x0);
            var wq7e, _btpf0;
            if (this['url'] == ewykv['_tMusic']) {
                if (!hkew1y['_musicAudio']) hkew1y['_musicAudio'] = this['_sound'];
                wq7e = hkew1y['_musicAudio'], _btpf0 = this['_chanell'];
            } else wq7e = this['_sound'], _btpf0 = this['_chanell'];
            return wq7e['src'] = this['url'], wq7e['startTime'] = 0x0, _btpf0['isStopped'] && (_btpf0['url'] = this['url'], _btpf0['loops'] = d24, _btpf0['startTime'] = aip5x, _btpf0['play'](), ewykv['addChannel'](_btpf0)), _btpf0;
        }, glq['dispose'] = function () {
            var wy7vqe = hkew1y['_audioCache'][this['url']];
            wy7vqe && (wy7vqe['src'] = '', delete hkew1y['_audioCache'][this['url']]);
        }, pb5f0(0x0, glq, 'duration', function () {
            return this['_sound']['duration'];
        }), hkew1y['_createSound'] = function () {
            hkew1y['_id']++;
            var $r6j2u = cv7qgs['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return $r6j2u;
        }, hkew1y['_musicAudio'] = null, hkew1y['_id'] = 0x0, hkew1y['_audioCache'] = {}, hkew1y['_null'] = undefined, hkew1y;
    }(q78gsc),
        wyve = function (do3zt4) {
        function kwha1(e7wyq) {
            this['_audio'] = null, this['_onEnd'] = null, kwha1['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = e7wyq, this['_onEnd'] = c7qgev['bind'](this['__onEnd'], this), e7wyq['onEnded'](this['_onEnd']);
        }
        $rj2z(kwha1, 'laya.wx.mini.MiniSoundChannel', do3zt4);
        var p05bi_ = kwha1['prototype'];
        return p05bi_['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (r$u2j6['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, p05bi_['__onNull'] = function () {}, p05bi_['play'] = function () {
            this['isStopped'] = ![], ewykv['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, p05bi_['stop'] = function () {
            this['isStopped'] = !![], ewykv['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, p05bi_['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, p05bi_['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], ewykv['addChannel'](this), this['_audio']['play']();
        }, pb5f0(0x0, p05bi_, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), pb5f0(0x0, p05bi_, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), pb5f0(0x0, p05bi_, 'volume', function () {
            return 0x1;
        }, function (_34otf) {}), kwha1['_null'] = undefined, kwha1;
    }(xkih1),
        t4dzo = function () {
        function t3fo4d() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = cv7qgs['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        $rj2z(t3fo4d, 'laya.wx.mini.MiniVideo');
        var $2ru = t3fo4d['prototype'];
        return $2ru['on'] = function (j$2rz, kyxwh, cs8l9) {
            if (j$2rz == 'loadedmetadata') this['onPlayFunc'] = cs8l9['bind'](kyxwh), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else j$2rz == 'ended' && (this['onEndedFunC'] = cs8l9['bind'](kyxwh), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, $2ru['onTimeUpdateFunc'] = function (z6drj2) {
            this['position'] = z6drj2['position'], this['_duration'] = z6drj2['duration'];
        }, $2ru['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, $2ru['onended'] = function (gc8s7q, _5b0ip) {
            this['onEndedFunC'] = _5b0ip['bind'](gc8s7q), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, $2ru['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, $2ru['off'] = function ($mur6, z36od2, g8lqsc) {
            if ($mur6 == 'loadedmetadata') this['onPlayFunc'] = g8lqsc['bind'](z36od2), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else $mur6 == 'ended' && (this['onEndedFunC'] = g8lqsc['bind'](z36od2), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, $2ru['load'] = function (mj$ru) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = mj$ru;
        }, $2ru['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, $2ru['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, $2ru['size'] = function (bh5xai, bfp0t) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = bh5xai, this['videoElement']['height'] = bfp0t;
        }, $2ru['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, $2ru['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, pb5f0(0x0, $2ru, 'duration', function () {
            return this['_duration'];
        }), pb5f0(0x0, $2ru, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (hax) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = hax;
        }), pb5f0(0x0, $2ru, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), pb5f0(0x0, $2ru, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), pb5f0(0x0, $2ru, 'ended', function () {
            return this['videoend'];
        }), pb5f0(0x0, $2ru, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (w1kyx) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = w1kyx;
        }), pb5f0(0x0, $2ru, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (f_t40) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = f_t40;
        }), pb5f0(0x0, $2ru, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (qgs7) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = qgs7;
        }), pb5f0(0x0, $2ru, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), pb5f0(0x0, $2ru, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (ju2$6r) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = ju2$6r;
        }), pb5f0(0x0, $2ru, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (hkey) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = hkey;
        }), pb5f0(0x0, $2ru, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), pb5f0(0x0, $2ru, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (t_40pf) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = t_40pf;
        }), pb5f0(0x0, $2ru, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (pt0f) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = pt0f;
        }), pb5f0(0x0, $2ru, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (rdzo6) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = rdzo6;
        }), t3fo4d;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var bi_50 in Laya) {
        var x5ihb = Laya[bi_50];
        x5ihb && x5ihb['__isclass'] && (exports[bi_50] = x5ihb);
    }
});