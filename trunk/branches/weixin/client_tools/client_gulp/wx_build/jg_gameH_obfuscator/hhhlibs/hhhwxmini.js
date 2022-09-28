var O = wx.$C;
(function (window, document, emr1qt) {
    var uzc5id = emr1qt['un'],
        rjs8bn = emr1qt['uns'],
        njrbs8 = emr1qt['static'],
        rmet1q = emr1qt['class'],
        qrm1te = emr1qt['getset'],
        w2$7m9 = emr1qt['__newvec'],
        m7tw$2 = laya['utils']['Browser'],
        f2paw = laya['events']['Event'],
        g_0oyx = laya['events']['EventDispatcher'],
        _xgy = laya['resource']['HTMLImage'],
        lz3c6k = laya['utils']['Handler'],
        tjqre = laya['display']['Input'],
        jbns8d = laya['net']['Loader'],
        w92$7a = laya['maths']['Matrix'],
        x_y0og = laya['renders']['Render'],
        wfa29 = laya['utils']['RunDriver'],
        izdu5 = laya['media']['Sound'],
        xv_oh = laya['media']['SoundChannel'],
        hyg_o = laya['media']['SoundManager'],
        x_yoh = laya['display']['Stage'],
        q8nsj = laya['net']['URL'],
        qrj1et = laya['utils']['Utils'],
        dcu5b = function () {
        function i8d5bn() {}
        return rmet1q(i8d5bn, 'laya.wx.mini.MiniAdpter'), i8d5bn['getJson'] = function (mqtr1) {
            return JSON['parse'](mqtr1);
        }, i8d5bn['init'] = function (mre1tq, xyf0g) {
            mre1tq === void 0x0 && (mre1tq = ![]), xyf0g === void 0x0 && (xyf0g = ![]);
            if (i8d5bn['_inited']) return;
            i8d5bn['window'] = window;
            if (i8d5bn['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            i8d5bn['_inited'] = !![], i8d5bn['isZiYu'] = xyf0g, i8d5bn['isPosMsgYu'] = mre1tq, i8d5bn['EnvConfig'] = {}, !i8d5bn['isZiYu'] && (cdi5uz['setNativeFileDir']('/layaairGame'), cdi5uz['existDir'](cdi5uz['fileNativeDir'], lz3c6k['create'](i8d5bn, i8d5bn['onMkdirCallBack']))), i8d5bn['window']['focus'] = function () {}, emr1qt['getUrlPath'] = function () {}, i8d5bn['window']['logtime'] = function (qrs1nj) {}, i8d5bn['window']['alertTimeLog'] = function (_ygx0) {}, i8d5bn['window']['resetShareInfo'] = function () {}, i8d5bn['window']['CanvasRenderingContext2D'] = function () {}, i8d5bn['window']['CanvasRenderingContext2D']['prototype'] = i8d5bn['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], i8d5bn['window']['document']['body']['appendChild'] = function () {}, i8d5bn['EnvConfig']['pixelRatioInt'] = 0x0, wfa29['getPixelRatio'] = i8d5bn['pixelRatio'], i8d5bn['_preCreateElement'] = m7tw$2['createElement'], m7tw$2['createElement'] = i8d5bn['createElement'], wfa29['createShaderCondition'] = i8d5bn['createShaderCondition'], qrj1et['parseXMLFromString'] = i8d5bn['parseXMLFromString'], tjqre['_createInputElement'] = qmet$['_createInputElement'], i8d5bn['EnvConfig']['load'] = jbns8d['prototype']['load'], jbns8d['prototype']['load'] = kcz3u5['prototype']['load'], i8d5bn['isZiYu'] && mre1tq && wx['onMessage'](function (gf9ap0) {
                gf9ap0['isLoad'] && (cdi5uz['ziyuFileData'][gf9ap0['url']] = gf9ap0['data']);
            });
        }, i8d5bn['onMkdirCallBack'] = function (jtrq1e, oxf0gy) {
            if (!jtrq1e) cdi5uz['filesListObj'] = JSON['parse'](oxf0gy['data']);
        }, i8d5bn['pixelRatio'] = function () {
            if (!i8d5bn['EnvConfig']['pixelRatioInt']) try {
                var idb5n8 = wx['getSystemInfoSync']();
                return i8d5bn['EnvConfig']['pixelRatioInt'] = idb5n8['pixelRatio'], idb5n8 = idb5n8, idb5n8['pixelRatio'];
            } catch (tmerq) {}
            return i8d5bn['EnvConfig']['pixelRatioInt'];
        }, i8d5bn['createElement'] = function (oy0gp) {
            if (oy0gp == 'canvas') {
                var t2w7$;
                return i8d5bn['idx'] == 0x1 ? i8d5bn['isZiYu'] ? (t2w7$ = sharedCanvas, t2w7$['style'] = {}) : t2w7$ = window['canvas'] : t2w7$ = window['wx']['createCanvas'](), i8d5bn['idx']++, t2w7$;
            } else {
                if (oy0gp == 'textarea' || oy0gp == 'input') return i8d5bn['onCreateInput'](oy0gp);else {
                    if (oy0gp == 'div') {
                        var goyf0x = i8d5bn['_preCreateElement'](oy0gp);
                        return goyf0x['contains'] = function (q1tejr) {
                            return null;
                        }, goyf0x['removeChild'] = function (jns8rq) {}, goyf0x;
                    } else return i8d5bn['_preCreateElement'](oy0gp);
                }
            }
        }, i8d5bn['onCreateInput'] = function (zu6c) {
            var rjqes = i8d5bn['_preCreateElement'](zu6c);
            return rjqes['focus'] = qmet$['wxinputFocus'], rjqes['blur'] = qmet$['wxinputblur'], rjqes['style'] = {}, rjqes['value'] = 0x0, rjqes['parentElement'] = {}, rjqes['placeholder'] = {}, rjqes['type'] = {}, rjqes['setColor'] = function (jq8) {}, rjqes['setType'] = function (n8bjr) {}, rjqes['setFontFace'] = function ($tmeq) {}, rjqes['addEventListener'] = function (_xyv) {}, rjqes['contains'] = function (yxgf) {
                return null;
            }, rjqes['removeChild'] = function (gofyp0) {}, rjqes;
        }, i8d5bn['createShaderCondition'] = function (w$m29) {
            var dzc5ui = this,
                id5cub = function () {
                var te$m7 = w$m29;
                return dzc5ui[w$m29['replace']('this.', '')];
            };
            return id5cub;
        }, i8d5bn['EnvConfig'] = null, i8d5bn['window'] = null, i8d5bn['_preCreateElement'] = null, i8d5bn['_inited'] = ![], i8d5bn['wxRequest'] = null, i8d5bn['systemInfo'] = null, i8d5bn['version'] = '0.0.1', i8d5bn['isZiYu'] = ![], i8d5bn['isPosMsgYu'] = ![], i8d5bn['parseXMLFromString'] = function (gxyho_) {
            var yh_gxo, jrnsq8;
            gxyho_ = gxyho_['replace'](/>\s+</g, '><');
            try {
                yh_gxo = new window['Parser']['DOMParser']()['parseFromString'](gxyho_, 'text/xml');
            } catch (k6cu3) {
                throw '需要引入xml解析库文件';
            }
            return yh_gxo;
        }, i8d5bn['idx'] = 0x1, i8d5bn;
    }(),
        ub5idc = function () {
        function tm1() {}
        rmet1q(tm1, 'laya.wx.mini.MiniImage');
        var wfp2 = tm1['prototype'];
        return wfp2['_loadImage'] = function (qser1) {
            var e1mtrq = this,
                czuki5 = ![];
            qser1['indexOf']('layaNativeDir/') == -0x1 && (czuki5 = !![], qser1 = q8nsj['formatURL'](qser1));
            if (!cdi5uz['getFileInfo'](qser1)) {
                if (qser1['indexOf']('http://') != -0x1 || qser1['indexOf']('https://') != -0x1) cdi5uz['downImg'](qser1, new lz3c6k(tm1, tm1['onDownImgCallBack'], [qser1, e1mtrq]), qser1);else tm1['onCreateImage'](qser1, e1mtrq, !![]);
            } else tm1['onCreateImage'](qser1, e1mtrq, !czuki5);
        }, tm1['onDownImgCallBack'] = function (te7$2, mrtq, m1rteq) {
            if (!m1rteq) tm1['onCreateImage'](te7$2, mrtq);else mrtq['onError'](null);
        }, tm1['onCreateImage'] = function (icz5u, aw7p92, $m27wt) {
            $m27wt === void 0x0 && ($m27wt = ![]);
            var kziu5;
            if (!$m27wt) {
                var wa92 = cdi5uz['getFileInfo'](icz5u),
                    f0g9ap = wa92['md5'];
                kziu5 = cdi5uz['getFileNativePath'](f0g9ap);
            } else kziu5 = icz5u;
            if (aw7p92['imgCache'] == null) aw7p92['imgCache'] = {};
            var ukzci5;
            function d85() {
                ukzci5['onload'] = null, ukzci5['onerror'] = null, delete aw7p92['imgCache'][icz5u];
            }
            ;
            var $7twm2 = function () {
                d85(), aw7p92['onLoaded'](ukzci5);
            },
                bcu5id = function () {
                d85(), aw7p92['event']('error', 'Load image failed');
            };
            aw7p92['_type'] == 'nativeimage' ? (ukzci5 = new m7tw$2['window']['Image'](), ukzci5['crossOrigin'] = '', ukzci5['onload'] = $7twm2, ukzci5['onerror'] = bcu5id, ukzci5['src'] = kziu5, aw7p92['imgCache'][icz5u] = ukzci5) : new _xgy['create'](kziu5, {
                'onload': $7twm2,
                'onerror': bcu5id,
                'onCreate': function (wpaf) {
                    ukzci5 = wpaf, aw7p92['imgCache'][icz5u] = wpaf;
                }
            });
        }, tm1;
    }(),
        qmet$ = function () {
        function is8dnb() {}
        return rmet1q(is8dnb, 'laya.wx.mini.MiniInput'), is8dnb['_createInputElement'] = function () {
            tjqre['_initInput'](tjqre['area'] = m7tw$2['createElement']('textarea')), tjqre['_initInput'](tjqre['input'] = m7tw$2['createElement']('input')), tjqre['inputContainer'] = m7tw$2['createElement']('div'), tjqre['inputContainer']['style']['position'] = 'absolute', tjqre['inputContainer']['style']['zIndex'] = 0x186a0, m7tw$2['container']['appendChild'](tjqre['inputContainer']), tjqre['inputContainer']['setPos'] = function (me$7t1, lk643z) {
                tjqre['inputContainer']['style']['left'] = me$7t1 + 'px', tjqre['inputContainer']['style']['top'] = lk643z + 'px';
            }, emr1qt['stage']['on']('resize', null, is8dnb['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (yogh_) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), hyg_o['_soundClass'] = a9pgf, hyg_o['_musicClass'] = a9pgf, window['_videoClass'] = mw$2t;
        }, is8dnb['_onStageResize'] = function () {
            var em1rq = emr1qt['stage']['_canvasTransform']['identity']();
            em1rq['scale'](m7tw$2['width'] / x_y0og['canvas']['width'] / wfa29['getPixelRatio'](), m7tw$2['height'] / x_y0og['canvas']['height'] / wfa29['getPixelRatio']());
        }, is8dnb['wxinputFocus'] = function (jqrse) {
            var _0xyog = tjqre['inputElement']['target'];
            if (_0xyog && !_0xyog['editable']) return;
            dcu5b['window']['wx']['offKeyboardConfirm'](), dcu5b['window']['wx']['offKeyboardInput'](), dcu5b['window']['wx']['showKeyboard']({
                'defaultValue': _0xyog['text'],
                'maxLength': _0xyog['maxChars'],
                'multiple': _0xyog['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (l34kz) {},
                'fail': function (qtme1r) {}
            }), dcu5b['window']['wx']['onKeyboardConfirm'](function (jr1e) {
                var rjqse = jr1e ? jr1e['value'] : '';
                _0xyog['text'] = rjqse, _0xyog['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), dcu5b['window']['wx']['onKeyboardInput'](function (jretq) {
                var wp2a9 = jretq ? jretq['value'] : '';
                if (!_0xyog['multiline']) {
                    if (wp2a9['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                _0xyog['text'] = wp2a9, _0xyog['event']('input');
            });
        }, is8dnb['inputEnter'] = function () {
            tjqre['inputElement']['target']['focus'] = ![];
        }, is8dnb['wxinputblur'] = function () {
            is8dnb['hideKeyboard']();
        }, is8dnb['hideKeyboard'] = function () {
            dcu5b['window']['wx']['offKeyboardConfirm'](), dcu5b['window']['wx']['offKeyboardInput'](), dcu5b['window']['wx']['hideKeyboard']({
                'success': function (s8ndi) {
                    console['log']('隐藏键盘');
                },
                'fail': function (yg0xof) {
                    console['log']('隐藏键盘出错:' + (yg0xof ? yg0xof['errMsg'] : ''));
                }
            });
        }, is8dnb;
    }(),
        kcz3u5 = function () {
        function ndbj8s() {}
        rmet1q(ndbj8s, 'laya.wx.mini.MiniLoader');
        var m$72tw = ndbj8s['prototype'];
        return m$72tw['load'] = function (g9af, oyg_0x, k3cl, yhvxo, udcb) {
            k3cl === void 0x0 && (k3cl = !![]), udcb === void 0x0 && (udcb = ![]);
            var g0fp9 = this;
            g0fp9['_url'] = g9af;
            if (g9af['indexOf']('data:image') === 0x0) g0fp9['_type'] = oyg_0x = 'image';else g0fp9['_type'] = oyg_0x || (oyg_0x = g0fp9['getTypeFromUrl'](g9af));
            g0fp9['_cache'] = k3cl, g0fp9['_data'] = null;
            var agp0 = 'ascii';
            if (g9af['indexOf']('.fnt') != -0x1) agp0 = 'utf8';else oyg_0x == 'arraybuffer' && (agp0 = '');
            ;
            var nsbdj8 = qrj1et['getFileExtension'](g9af);
            if (ndbj8s['_fileTypeArr']['indexOf'](nsbdj8) != -0x1) dcu5b['EnvConfig']['load']['call'](this, g9af, oyg_0x, k3cl, yhvxo, udcb);else {
                if (!cdi5uz['getFileInfo'](g9af)) {
                    if (g9af['indexOf']('layaNativeDir/') != -0x1) {
                        if (dcu5b['isZiYu']) {
                            var wa7$2 = cdi5uz['ziyuFileData'][g9af];
                            g0fp9['onLoaded'](wa7$2);
                            return;
                        } else {
                            cosnole['log']('read read'), cdi5uz['read'](g9af, agp0, new lz3c6k(ndbj8s, ndbj8s['onReadNativeCallBack'], [agp0, g9af, oyg_0x, k3cl, yhvxo, udcb, g0fp9]));
                            return;
                        }
                    }
                    if (q8nsj['rootPath'] == '') var jbnsr = g9af;else jbnsr = g9af['split'](q8nsj['rootPath'])[0x0];
                    g9af['indexOf']('http://') != -0x1 || g9af['indexOf']('https://') != -0x1 ? dcu5b['EnvConfig']['load']['call'](g0fp9, g9af, oyg_0x, k3cl, yhvxo, udcb) : cdi5uz['readFile'](jbnsr, agp0, new lz3c6k(ndbj8s, ndbj8s['onReadNativeCallBack'], [agp0, g9af, oyg_0x, k3cl, yhvxo, udcb, g0fp9]), g9af);
                } else dcu5b['EnvConfig']['load']['call'](this, g9af, oyg_0x, k3cl, yhvxo, udcb);
            }
        }, m$72tw['resMgrLoad'] = function (nidb8s, hxyvo, fx0goy, e17t$, oyf0x, bu58d, etm$27) {
            fx0goy === void 0x0 && (fx0goy = 0x0), e17t$ === void 0x0 && (e17t$ = ![]), oyf0x === void 0x0 && (oyf0x = ![]), bu58d === void 0x0 && (bu58d = 0x0), etm$27 === void 0x0 && (etm$27 = 0x3), nidb8s['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', nidb8s), dcu5b['EnvConfig']['resMgrLoad'](nidb8s, (id8, a2p97w, snbdi) => {
                ndbj8s['prototype']['resMgrLoadCallBack'](id8, a2p97w, snbdi, hxyvo);
            }, fx0goy, e17t$, oyf0x, bu58d, etm$27);
        }, m$72tw['resMgrLoadCallBack'] = function (_yvhx, xgf0, rs1ej, a2wp) {
            console['log']('buff:::', _yvhx, rs1ej, cdi5uz['fileNativeDir'] + '///' + cdi5uz['fileListName']), a2wp(_yvhx, xgf0, rs1ej);
        }, m$72tw['clearRes'] = function (di5nb, ck36l) {
            ck36l === void 0x0 && (ck36l = ![]);
            var $qm1te = this;
            $qm1te['clearRes'](di5nb, ck36l);
            var o_g0x = cdi5uz['getFileInfo'](di5nb);
            if (o_g0x && (di5nb['indexOf']('http://') != -0x1 || di5nb['indexOf']('https://') != -0x1)) {
                var k43zl = o_g0x['md5'],
                    ejs1rq = cdi5uz['getFileNativePath'](k43zl);
                cdi5uz['remove'](ejs1rq);
            }
        }, ndbj8s['onReadNativeCallBack'] = function (b8idn5, nqrs, cku35z, djn8s, o0agf, dsnbj8, gfo0a, o0gaf, qetmr1) {
            djn8s === void 0x0 && (djn8s = !![]), dsnbj8 === void 0x0 && (dsnbj8 = ![]), o0gaf === void 0x0 && (o0gaf = 0x0);
            if (!o0gaf) {
                var rqj1es;
                if (cku35z == 'json' || cku35z == 'atlas') rqj1es = dcu5b['getJson'](qetmr1['data']);else cku35z == 'xml' ? rqj1es = qrj1et['parseXMLFromString'](qetmr1['data']) : rqj1es = qetmr1['data'];
                gfo0a['onLoaded'](rqj1es), !dcu5b['isZiYu'] && dcu5b['isPosMsgYu'] && cku35z != 'arraybuffer' && wx['postMessage']({
                    'url': nqrs,
                    'data': rqj1es,
                    'isLoad': !![]
                });
            } else o0gaf == 0x1 && dcu5b['EnvConfig']['load']['call'](gfo0a, nqrs, cku35z, djn8s, o0agf, dsnbj8);
        }, njrbs8(ndbj8s, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), ndbj8s;
    }(),
        cdi5uz = function (jetr) {
        function jsdb8() {
            jsdb8['__super']['call'](this);
            ;
        }
        return rmet1q(jsdb8, 'laya.wx.mini.MiniFileMgr', jetr), jsdb8['isLoadFile'] = function (nsqjr1) {
            return jsdb8['_fileTypeArr']['indexOf'](nsqjr1) != -0x1 ? !![] : ![];
        }, jsdb8['getFileInfo'] = function (sidn) {
            var q$1etm = sidn['split']('?')[0x0],
                t1$eq = jsdb8['filesListObj'][q$1etm];
            if (t1$eq == null) return null;else return t1$eq;
            return null;
        }, jsdb8['onFileUpdate'] = function (bsnd8, n8si) {
            var jqrt = bsnd8['split']('/'),
                cz3lk6 = jqrt[jqrt['length'] - 0x1],
                fp92wa = jsdb8['getFileInfo'](n8si);
            if (fp92wa == null) jsdb8['onSaveFile'](n8si, cz3lk6);else {
                if (fp92wa['readyUrl'] != n8si) jsdb8['remove'](cz3lk6, n8si);
            }
        }, jsdb8['exits'] = function (zikcu, c3uzk6) {
            var go0fpy = jsdb8['getFileNativePath'](zikcu);
            jsdb8['fs']['getFileInfo']({
                'filePath': go0fpy,
                'success': function (bsr8jn) {
                    c3uzk6 != null && c3uzk6['runWith']([0x0, bsr8jn]);
                },
                'fail': function (jd8nsb) {
                    c3uzk6 != null && c3uzk6['runWith']([0x1, jd8nsb]);
                }
            });
        }, jsdb8['read'] = function ($m17t, jqret1, brnjs, gfa09p) {
            jqret1 === void 0x0 && (jqret1 = 'ascill'), gfa09p === void 0x0 && (gfa09p = '');
            var p9wa0f;
            gfa09p != '' ? p9wa0f = jsdb8['getFileNativePath']($m17t) : p9wa0f = $m17t, jsdb8['fs']['readFile']({
                'filePath': p9wa0f,
                'encoding': jqret1,
                'success': function (w79$2m) {
                    brnjs != null && brnjs['runWith']([0x0, w79$2m]);
                },
                'fail': function (pa0go) {
                    if (pa0go && gfa09p != '') jsdb8['down'](gfa09p, jqret1, brnjs, gfa09p);else brnjs != null && brnjs['runWith']([0x1]);
                }
            });
        }, jsdb8['readNativeFile'] = function (gyx_o0, ypgf) {
            jsdb8['fs']['readFile']({
                'filePath': gyx_o0,
                'encoding': '',
                'success': function (p97wa2) {
                    ypgf != null && ypgf['runWith']([0x0]);
                },
                'fail': function (nbjr) {
                    ypgf != null && ypgf['runWith']([0x1]);
                }
            });
        }, jsdb8['down'] = function (c5izu, mret1q, qme1$, a0pfog) {
            mret1q === void 0x0 && (mret1q = 'ascill'), a0pfog === void 0x0 && (a0pfog = '');
            var nj1qr = jsdb8['getFileNativePath'](a0pfog),
                s8bid = jsdb8['wxdown']({
                'url': c5izu,
                'filePath': nj1qr,
                'success': function (gpoaf0) {
                    if (gpoaf0['statusCode'] === 0xc8) jsdb8['readFile'](gpoaf0['filePath'], mret1q, qme1$, a0pfog);
                },
                'fail': function (l34z) {
                    qme1$ != null && qme1$['runWith']([0x1, l34z]);
                }
            });
            s8bid['onProgressUpdate'](function (a7wp29) {
                qme1$ != null && qme1$['runWith']([0x2, a7wp29['progress']]);
            });
        }, jsdb8['readFile'] = function (sbnjr, nib58, a$w2, dcubi) {
            nib58 === void 0x0 && (nib58 = 'ascill'), dcubi === void 0x0 && (dcubi = ''), jsdb8['fs']['readFile']({
                'filePath': sbnjr,
                'encoding': nib58,
                'success': function (bui58) {
                    if (sbnjr['indexOf']('http://') != -0x1 || sbnjr['indexOf']('https://') != -0x1) jsdb8['onFileUpdate'](sbnjr, dcubi);
                    a$w2 != null && a$w2['runWith']([0x0, bui58]);
                },
                'fail': function (m1e$7t) {
                    if (m1e$7t) a$w2 != null && a$w2['runWith']([0x1, m1e$7t]);
                }
            });
        }, jsdb8['downImg'] = function (et72m, og0ypf, qe1$mt) {
            qe1$mt === void 0x0 && (qe1$mt = '');
            var gox0y_ = jsdb8['wxdown']({
                'url': et72m,
                'success': function (etj1rq) {
                    etj1rq['statusCode'] === 0xc8 && jsdb8['copyFile'](etj1rq['tempFilePath'], qe1$mt, og0ypf);
                },
                'fail': function (w7a92p) {
                    og0ypf != null && og0ypf['runWith']([0x1, w7a92p]);
                }
            });
        }, jsdb8['copyFile'] = function (w90apf, fpgyo0, ndis) {
            var sr1njq = w90apf['split']('/'),
                jt1qe = sr1njq[sr1njq['length'] - 0x1],
                ygxh_o = fpgyo0['split']('?')[0x0],
                afw0 = jsdb8['getFileInfo'](fpgyo0),
                d8njbs = jsdb8['getFileNativePath'](jt1qe);
            jsdb8['fs']['copyFile']({
                'srcPath': w90apf,
                'destPath': d8njbs,
                'success': function (yox_vh) {
                    if (!afw0) jsdb8['onSaveFile'](fpgyo0, jt1qe), ndis != null && ndis['runWith']([0x0]);else {
                        if (afw0['readyUrl'] != fpgyo0) jsdb8['remove'](jt1qe, fpgyo0, ndis);
                    }
                },
                'fail': function (z4k36) {
                    ndis != null && ndis['runWith']([0x1, z4k36]);
                }
            });
        }, jsdb8['getFileNativePath'] = function (t1qjer) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + t1qjer;
        }, jsdb8['remove'] = function (in8b5, u3, a7w29) {
            u3 === void 0x0 && (u3 = '');
            var j1qsnr = jsdb8['getFileInfo'](u3),
                bsj = jsdb8['getFileNativePath'](j1qsnr['md5']);
            emr1qt['loader']['clearRes'](j1qsnr['readyUrl']), jsdb8['fs']['unlink']({
                'filePath': bsj,
                'success': function (oypg0f) {
                    if (u3 != '') jsdb8['onSaveFile'](u3, in8b5);
                    a7w29 != null && a7w29['runWith']([0x0]);
                },
                'fail': function (ago0fp) {}
            });
        }, jsdb8['onSaveFile'] = function (qjes1, h_xv) {
            var zk63uc = qjes1['split']('?')[0x0];
            jsdb8['filesListObj'][zk63uc] = {
                'md5': h_xv,
                'readyUrl': qjes1
            }, jsdb8['fs']['writeFile']({
                'filePath': jsdb8['fileNativeDir'] + '/' + jsdb8['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](jsdb8['filesListObj']),
                'success': function (trqj1e) {
                    console['log']('写入测试测试成功：', trqj1e);
                },
                'fail': function (uz5kc) {
                    console['log']('写入测试测试失败：', uz5kc);
                }
            });
        }, jsdb8['existDir'] = function (n58bdi, aop0g) {
            jsdb8['fs']['mkdir']({
                'dirPath': n58bdi,
                'success': function (id85) {
                    aop0g != null && aop0g['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (z3k4) {
                    if (z3k4['errMsg']['indexOf']('file already exists') != -0x1) jsdb8['readSync'](jsdb8['fileListName'], 'utf8', aop0g);else aop0g != null && aop0g['runWith']([0x1, z3k4]);
                }
            });
        }, jsdb8['readSync'] = function (w2m7$9, met71$, yx_0o, j8qsnr) {
            met71$ === void 0x0 && (met71$ = 'ascill'), j8qsnr === void 0x0 && (j8qsnr = '');
            var kz5uic = jsdb8['getFileNativePath'](w2m7$9),
                k3cu5z;
            try {
                k3cu5z = jsdb8['fs']['readFileSync'](kz5uic), yx_0o != null && yx_0o['runWith']([0x0, { 'data': k3cu5z }]);
            } catch (gf0opa) {
                yx_0o != null && yx_0o['runWith']([0x1]);
            }
        }, jsdb8['readCache'] = function () {}, jsdb8['writeCache'] = function (s8db) {
            var ckuz63 = readyUrl['split']('?')[0x0];
            jsdb8['filesListObj'][ckuz63] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, jsdb8['fs']['writeFile']({
                'filePath': jsdb8['fileNativeDir'] + '/' + jsdb8['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](jsdb8['filesListObj']),
                'success': function (ikzuc5) {},
                'fail': function (agp9) {}
            });
        }, jsdb8['setNativeFileDir'] = function (t1$mq) {
            jsdb8['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + t1$mq;
        }, jsdb8['filesListObj'] = {}, jsdb8['fileNativeDir'] = null, jsdb8['fileListName'] = 'layaairfiles.txt', jsdb8['ziyuFileData'] = {}, njrbs8(jsdb8, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), jsdb8;
    }(g_0oyx),
        a9pgf = function (yoxg0f) {
        function sbd8() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], sbd8['__super']['call'](this), this['_sound'] = sbd8['_createSound'](), this['_chanell'] = new m2t7w(this['_sound']);
        }
        rmet1q(sbd8, 'laya.wx.mini.MiniSound', yoxg0f);
        var rq8snj = sbd8['prototype'];
        return rq8snj['load'] = function (j8srbn) {
            var dzui5 = this;
            j8srbn = q8nsj['formatURL'](j8srbn), this['url'] = j8srbn;
            if (sbd8['_audioCache'][j8srbn]) {
                this['event']('complete');
                return;
            }
            function xog_h() {
                if (sbd8['_null'] != undefined) dzui5['_sound']['onCanplay'](sbd8['_null']), dzui5['_sound']['onError'](sbd8['_null']);else try {
                    dzui5['_sound']['onCanplay'](null), dzui5['_sound']['onError'](null), sbd8['_null'] = null;
                } catch (m2t7) {
                    console['warn']('[wxmini] _clearSound:' + m2t7), dzui5['_sound']['onCanplay'](xoy_g), dzui5['_sound']['onError'](xoy_g), sbd8['_null'] = xoy_g;
                }
            }
            function w2f9pa() {
                bi8dsn['loaded'] = !![], bi8dsn['event']('complete'), sbd8['_audioCache'][bi8dsn['url']] = bi8dsn;
            }
            function izk(iu5kz) {
                console['error']('errCode=' + iu5kz['errCode'] + '  errMsg=' + iu5kz['errMsg']), bi8dsn['event']('error');
            }
            function xoy_g() {}
            this['_sound']['onCanplay'](w2f9pa), this['_sound']['onError'](izk), this['_sound']['src'] = j8srbn;
            var bi8dsn = this;
        }, rq8snj['play'] = function (nbsjd8, xh_y) {
            nbsjd8 === void 0x0 && (nbsjd8 = 0x0), xh_y === void 0x0 && (xh_y = 0x0);
            var zcku3, x0fogy;
            if (this['url'] == hyg_o['_tMusic']) {
                if (!sbd8['_musicAudio']) sbd8['_musicAudio'] = this['_sound'];
                zcku3 = sbd8['_musicAudio'], x0fogy = this['_chanell'];
            } else zcku3 = this['_sound'], x0fogy = this['_chanell'];
            return zcku3['src'] = this['url'], zcku3['startTime'] = 0x0, x0fogy['isStopped'] && (x0fogy['url'] = this['url'], x0fogy['loops'] = xh_y, x0fogy['startTime'] = nbsjd8, x0fogy['play'](), hyg_o['addChannel'](x0fogy)), x0fogy;
        }, rq8snj['dispose'] = function () {
            var nr8sjb = sbd8['_audioCache'][this['url']];
            nr8sjb && (nr8sjb['src'] = '', delete sbd8['_audioCache'][this['url']]);
        }, qrm1te(0x0, rq8snj, 'duration', function () {
            return this['_sound']['duration'];
        }), sbd8['_createSound'] = function () {
            sbd8['_id']++;
            var rqtje1 = dcu5b['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return rqtje1;
        }, sbd8['_musicAudio'] = null, sbd8['_id'] = 0x0, sbd8['_audioCache'] = {}, sbd8['_null'] = undefined, sbd8;
    }(g_0oyx),
        m2t7w = function (_hoyv) {
        function er1tjq(te1$7m) {
            this['_audio'] = null, this['_onEnd'] = null, er1tjq['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = te1$7m, this['_onEnd'] = qrj1et['bind'](this['__onEnd'], this), te1$7m['onEnded'](this['_onEnd']);
        }
        rmet1q(er1tjq, 'laya.wx.mini.MiniSoundChannel', _hoyv);
        var zcl36 = er1tjq['prototype'];
        return zcl36['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (emr1qt['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, zcl36['__onNull'] = function () {}, zcl36['play'] = function () {
            this['isStopped'] = ![], hyg_o['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, zcl36['stop'] = function () {
            this['isStopped'] = !![], hyg_o['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, zcl36['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, zcl36['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], hyg_o['addChannel'](this), this['_audio']['play']();
        }, qrm1te(0x0, zcl36, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), qrm1te(0x0, zcl36, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), qrm1te(0x0, zcl36, 'volume', function () {
            return 0x1;
        }, function (nbs8d) {}), er1tjq['_null'] = undefined, er1tjq;
    }(xv_oh),
        mw$2t = function () {
        function xhvo_() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = dcu5b['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        rmet1q(xhvo_, 'laya.wx.mini.MiniVideo');
        var kuz35 = xhvo_['prototype'];
        return kuz35['on'] = function (ovxh_, dnsb, jqtr) {
            if (ovxh_ == 'loadedmetadata') this['onPlayFunc'] = jqtr['bind'](dnsb), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else ovxh_ == 'ended' && (this['onEndedFunC'] = jqtr['bind'](dnsb), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, kuz35['onTimeUpdateFunc'] = function (iku) {
            this['position'] = iku['position'], this['_duration'] = iku['duration'];
        }, kuz35['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, kuz35['onended'] = function (qm$1e, gpfoy0) {
            this['onEndedFunC'] = gpfoy0['bind'](qm$1e), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, kuz35['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, kuz35['off'] = function (bdin8, bds, f9a2pw) {
            if (bdin8 == 'loadedmetadata') this['onPlayFunc'] = f9a2pw['bind'](bds), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else bdin8 == 'ended' && (this['onEndedFunC'] = f9a2pw['bind'](bds), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, kuz35['load'] = function (u58bid) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = u58bid;
        }, kuz35['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, kuz35['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, kuz35['size'] = function (fw0p9a, ku5cz) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = fw0p9a, this['videoElement']['height'] = ku5cz;
        }, kuz35['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, kuz35['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, qrm1te(0x0, kuz35, 'duration', function () {
            return this['_duration'];
        }), qrm1te(0x0, kuz35, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (wp09f) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = wp09f;
        }), qrm1te(0x0, kuz35, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), qrm1te(0x0, kuz35, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), qrm1te(0x0, kuz35, 'ended', function () {
            return this['videoend'];
        }), qrm1te(0x0, kuz35, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (dc5) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = dc5;
        }), qrm1te(0x0, kuz35, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (si8db) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = si8db;
        }), qrm1te(0x0, kuz35, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (d8bn5i) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = d8bn5i;
        }), qrm1te(0x0, kuz35, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), qrm1te(0x0, kuz35, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function ($t17) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = $t17;
        }), qrm1te(0x0, kuz35, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (fa90gp) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = fa90gp;
        }), qrm1te(0x0, kuz35, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), qrm1te(0x0, kuz35, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (agf9p0) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = agf9p0;
        }), qrm1te(0x0, kuz35, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (eqmrt) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = eqmrt;
        }), qrm1te(0x0, kuz35, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (g_oyxh) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = g_oyxh;
        }), xhvo_;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var u8ib in Laya) {
        var yxog0f = Laya[u8ib];
        yxog0f && yxog0f['__isclass'] && (exports[u8ib] = yxog0f);
    }
});