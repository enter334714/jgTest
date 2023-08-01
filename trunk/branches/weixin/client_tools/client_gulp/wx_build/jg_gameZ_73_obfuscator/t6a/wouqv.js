var z1 = wx.Z$;
(function (window, document, opica_) {
    var d12xy7 = opica_['un'],
        r1w = opica_['uns'],
        yejs6 = opica_['static'],
        _lgftm = opica_['class'],
        l5gk = opica_['getset'],
        fghmk = opica_['__newvec'],
        gkfhn5 = laya['utils']['Browser'],
        $z09 = laya['events']['Event'],
        lhmgkf = laya['events']['EventDispatcher'],
        xd7r1 = laya['resource']['HTMLImage'],
        es68j = laya['utils']['Handler'],
        paoc = laya['display']['Input'],
        n95kzh = laya['net']['Loader'],
        _lmgt = laya['maths']['Matrix'],
        zrw03 = laya['renders']['Render'],
        p_aoic = laya['utils']['RunDriver'],
        $0wr3 = laya['media']['Sound'],
        apioc4 = laya['media']['SoundChannel'],
        sedyj = laya['media']['SoundManager'],
        yx217 = laya['display']['Stage'],
        hlfgmt = laya['net']['URL'],
        _mlac = laya['utils']['Utils'],
        dx12y7 = function () {
        function wz953() {}
        return _lgftm(wz953, 'laya.wx.mini.MiniAdpter'), wz953['getJson'] = function (w12$0) {
            return JSON['parse'](w12$0);
        }, wz953['init'] = function (kglf5h, l_amtc) {
            kglf5h === void 0x0 && (kglf5h = ![]), l_amtc === void 0x0 && (l_amtc = ![]);
            if (wz953['_inited']) return;
            wz953['window'] = window;
            if (wz953['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            wz953['_inited'] = !![], wz953['isZiYu'] = l_amtc, wz953['isPosMsgYu'] = kglf5h, wz953['EnvConfig'] = {}, !wz953['isZiYu'] && (mlca_t['setNativeFileDir']('/layaairGame'), mlca_t['existDir'](mlca_t['fileNativeDir'], es68j['create'](wz953, wz953['onMkdirCallBack']))), wz953['window']['focus'] = function () {}, opica_['getUrlPath'] = function () {}, wz953['window']['logtime'] = function (w03z9n) {}, wz953['window']['alertTimeLog'] = function (yd271x) {}, wz953['window']['resetShareInfo'] = function () {}, wz953['window']['CanvasRenderingContext2D'] = function () {}, wz953['window']['CanvasRenderingContext2D']['prototype'] = wz953['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], wz953['window']['document']['body']['appendChild'] = function () {}, wz953['EnvConfig']['pixelRatioInt'] = 0x0, p_aoic['getPixelRatio'] = wz953['pixelRatio'], wz953['_preCreateElement'] = gkfhn5['createElement'], gkfhn5['createElement'] = wz953['createElement'], p_aoic['createShaderCondition'] = wz953['createShaderCondition'], _mlac['parseXMLFromString'] = wz953['parseXMLFromString'], paoc['_createInputElement'] = w$02r1['_createInputElement'], wz953['EnvConfig']['load'] = n95kzh['prototype']['load'], n95kzh['prototype']['load'] = sy1d7['prototype']['load'], wz953['isZiYu'] && kglf5h && wx['onMessage'](function (z93w$0) {
                z93w$0['isLoad'] && (mlca_t['ziyuFileData'][z93w$0['url']] = z93w$0['data']);
            });
        }, wz953['onMkdirCallBack'] = function (d1xy7, zkn93) {
            if (!d1xy7) mlca_t['filesListObj'] = JSON['parse'](zkn93['data']);
        }, wz953['pixelRatio'] = function () {
            if (!wz953['EnvConfig']['pixelRatioInt']) try {
                var jsqe6 = wx['getSystemInfoSync']();
                return wz953['EnvConfig']['pixelRatioInt'] = jsqe6['pixelRatio'], jsqe6 = jsqe6, jsqe6['pixelRatio'];
            } catch (d17sy) {}
            return wz953['EnvConfig']['pixelRatioInt'];
        }, wz953['createElement'] = function (cm_lat) {
            if (cm_lat == 'canvas') {
                var sjq68;
                return wz953['idx'] == 0x1 ? wz953['isZiYu'] ? (sjq68 = sharedCanvas, sjq68['style'] = {}) : sjq68 = window['canvas'] : sjq68 = window['wx']['createCanvas'](), wz953['idx']++, sjq68;
            } else {
                if (cm_lat == 'textarea' || cm_lat == 'input') return wz953['onCreateInput'](cm_lat);else {
                    if (cm_lat == 'div') {
                        var tc_ = wz953['_preCreateElement'](cm_lat);
                        return tc_['contains'] = function (nzw093) {
                            return null;
                        }, tc_['removeChild'] = function (wz0$39) {}, tc_;
                    } else return wz953['_preCreateElement'](cm_lat);
                }
            }
        }, wz953['onCreateInput'] = function (tpmc_a) {
            var aioc4p = wz953['_preCreateElement'](tpmc_a);
            return aioc4p['focus'] = w$02r1['wxinputFocus'], aioc4p['blur'] = w$02r1['wxinputblur'], aioc4p['style'] = {}, aioc4p['value'] = 0x0, aioc4p['parentElement'] = {}, aioc4p['placeholder'] = {}, aioc4p['type'] = {}, aioc4p['setColor'] = function (x7$r1) {}, aioc4p['setType'] = function (i4vop) {}, aioc4p['setFontFace'] = function (n95hz) {}, aioc4p['addEventListener'] = function (hgf5n) {}, aioc4p['contains'] = function (tg_mfl) {
                return null;
            }, aioc4p['removeChild'] = function (s7xy6d) {}, aioc4p;
        }, wz953['createShaderCondition'] = function (kfl5gh) {
            var xd7y = this,
                t_mca = function () {
                var w0n3 = kfl5gh;
                return xd7y[kfl5gh['replace']('this.', '')];
            };
            return t_mca;
        }, wz953['EnvConfig'] = null, wz953['window'] = null, wz953['_preCreateElement'] = null, wz953['_inited'] = ![], wz953['wxRequest'] = null, wz953['systemInfo'] = null, wz953['version'] = '0.0.1', wz953['isZiYu'] = ![], wz953['isPosMsgYu'] = ![], wz953['parseXMLFromString'] = function (yds7x1) {
            var iv4oap, x1sd;
            yds7x1 = yds7x1['replace'](/>\s+</g, '><');
            try {
                iv4oap = new window['Parser']['DOMParser']()['parseFromString'](yds7x1, 'text/xml');
            } catch (gmftl_) {
                throw '需要引入xml解析库文件';
            }
            return iv4oap;
        }, wz953['idx'] = 0x1, wz953;
    }(),
        r$w210 = function () {
        function _amcl() {}
        _lgftm(_amcl, 'laya.wx.mini.MiniImage');
        var av4o = _amcl['prototype'];
        return av4o['_loadImage'] = function ($9) {
            var ciapo = this,
                b6ej8q = ![];
            $9['indexOf']('layaNativeDir/') == -0x1 && (b6ej8q = !![], $9 = hlfgmt['formatURL']($9));
            if (!mlca_t['getFileInfo']($9)) {
                if ($9['indexOf']('http://') != -0x1 || $9['indexOf']('https://') != -0x1) mlca_t['downImg']($9, new es68j(_amcl, _amcl['onDownImgCallBack'], [$9, ciapo]), $9);else _amcl['onCreateImage']($9, ciapo, !![]);
            } else _amcl['onCreateImage']($9, ciapo, !b6ej8q);
        }, _amcl['onDownImgCallBack'] = function (sdy6ej, $2wr10, e6jy8) {
            if (!e6jy8) _amcl['onCreateImage'](sdy6ej, $2wr10);else $2wr10['onError'](null);
        }, _amcl['onCreateImage'] = function (dr2x71, d217yx, lta_mc) {
            lta_mc === void 0x0 && (lta_mc = ![]);
            var io4v;
            if (!lta_mc) {
                var gh5fl = mlca_t['getFileInfo'](dr2x71),
                    tl_gm = gh5fl['md5'];
                io4v = mlca_t['getFileNativePath'](tl_gm);
            } else io4v = dr2x71;
            if (d217yx['imgCache'] == null) d217yx['imgCache'] = {};
            var jequb;
            function _tmcfl() {
                jequb['onload'] = null, jequb['onerror'] = null, delete d217yx['imgCache'][dr2x71];
            }
            ;
            var v4ai = function () {
                _tmcfl(), d217yx['onLoaded'](jequb);
            },
                pc4aio = function () {
                _tmcfl(), d217yx['event']('error', 'Load image failed');
            };
            d217yx['_type'] == 'nativeimage' ? (jequb = new gkfhn5['window']['Image'](), jequb['crossOrigin'] = '', jequb['onload'] = v4ai, jequb['onerror'] = pc4aio, jequb['src'] = io4v, d217yx['imgCache'][dr2x71] = jequb) : new xd7r1['create'](io4v, {
                'onload': v4ai,
                'onerror': pc4aio,
                'onCreate': function (vipo4) {
                    jequb = vipo4, d217yx['imgCache'][dr2x71] = vipo4;
                }
            });
        }, _amcl;
    }(),
        w$02r1 = function () {
        function tgm() {}
        return _lgftm(tgm, 'laya.wx.mini.MiniInput'), tgm['_createInputElement'] = function () {
            paoc['_initInput'](paoc['area'] = gkfhn5['createElement']('textarea')), paoc['_initInput'](paoc['input'] = gkfhn5['createElement']('input')), paoc['inputContainer'] = gkfhn5['createElement']('div'), paoc['inputContainer']['style']['position'] = 'absolute', paoc['inputContainer']['style']['zIndex'] = 0x186a0, gkfhn5['container']['appendChild'](paoc['inputContainer']), paoc['inputContainer']['setPos'] = function (tca, j6se8y) {
                paoc['inputContainer']['style']['left'] = tca + 'px', paoc['inputContainer']['style']['top'] = j6se8y + 'px';
            }, opica_['stage']['on']('resize', null, tgm['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (r1$0) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), sedyj['_soundClass'] = k59ng, sedyj['_musicClass'] = k59ng, window['_videoClass'] = k5z39n;
        }, tgm['_onStageResize'] = function () {
            var zwr30 = opica_['stage']['_canvasTransform']['identity']();
            zwr30['scale'](gkfhn5['width'] / zrw03['canvas']['width'] / p_aoic['getPixelRatio'](), gkfhn5['height'] / zrw03['canvas']['height'] / p_aoic['getPixelRatio']());
        }, tgm['wxinputFocus'] = function (wz$3r0) {
            var r03w$ = paoc['inputElement']['target'];
            if (r03w$ && !r03w$['editable']) return;
            dx12y7['window']['wx']['offKeyboardConfirm'](), dx12y7['window']['wx']['offKeyboardInput'](), dx12y7['window']['wx']['showKeyboard']({
                'defaultValue': r03w$['text'],
                'maxLength': r03w$['maxChars'],
                'multiple': r03w$['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (r1w$20) {},
                'fail': function (kh59nz) {}
            }), dx12y7['window']['wx']['onKeyboardConfirm'](function (w593) {
                var pvio4a = w593 ? w593['value'] : '';
                r03w$['text'] = pvio4a, r03w$['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), dx12y7['window']['wx']['onKeyboardInput'](function (ma_ct) {
                var tmgfh = ma_ct ? ma_ct['value'] : '';
                if (!r03w$['multiline']) {
                    if (tmgfh['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                r03w$['text'] = tmgfh, r03w$['event']('input');
            });
        }, tgm['inputEnter'] = function () {
            paoc['inputElement']['target']['focus'] = ![];
        }, tgm['wxinputblur'] = function () {
            tgm['hideKeyboard']();
        }, tgm['hideKeyboard'] = function () {
            dx12y7['window']['wx']['offKeyboardConfirm'](), dx12y7['window']['wx']['offKeyboardInput'](), dx12y7['window']['wx']['hideKeyboard']({
                'success': function (n93z0) {
                    console['log']('隐藏键盘');
                },
                'fail': function (ca4op) {
                    console['log']('隐藏键盘出错:' + (ca4op ? ca4op['errMsg'] : ''));
                }
            });
        }, tgm;
    }(),
        sy1d7 = function () {
        function g5khf() {}
        _lgftm(g5khf, 'laya.wx.mini.MiniLoader');
        var gf_tlm = g5khf['prototype'];
        return gf_tlm['load'] = function (y8e6js, d2y1x7, hfnkg5, ebq6j, jesq68) {
            hfnkg5 === void 0x0 && (hfnkg5 = !![]), jesq68 === void 0x0 && (jesq68 = ![]);
            var clm_tf = this;
            clm_tf['_url'] = y8e6js;
            if (y8e6js['indexOf']('data:image') === 0x0) clm_tf['_type'] = d2y1x7 = 'image';else clm_tf['_type'] = d2y1x7 || (d2y1x7 = clm_tf['getTypeFromUrl'](y8e6js));
            clm_tf['_cache'] = hfnkg5, clm_tf['_data'] = null;
            var io4vap = 'ascii';
            if (y8e6js['indexOf']('.fnt') != -0x1) io4vap = 'utf8';else d2y1x7 == 'arraybuffer' && (io4vap = '');
            ;
            var s6q8ej = _mlac['getFileExtension'](y8e6js);
            if (g5khf['_fileTypeArr']['indexOf'](s6q8ej) != -0x1) dx12y7['EnvConfig']['load']['call'](this, y8e6js, d2y1x7, hfnkg5, ebq6j, jesq68);else {
                if (!mlca_t['getFileInfo'](y8e6js)) {
                    if (y8e6js['indexOf']('layaNativeDir/') != -0x1) {
                        if (dx12y7['isZiYu']) {
                            var fh5lgk = mlca_t['ziyuFileData'][y8e6js];
                            clm_tf['onLoaded'](fh5lgk);
                            return;
                        } else {
                            cosnole['log']('read read'), mlca_t['read'](y8e6js, io4vap, new es68j(g5khf, g5khf['onReadNativeCallBack'], [io4vap, y8e6js, d2y1x7, hfnkg5, ebq6j, jesq68, clm_tf]));
                            return;
                        }
                    }
                    if (hlfgmt['rootPath'] == '') var ej86 = y8e6js;else ej86 = y8e6js['split'](hlfgmt['rootPath'])[0x0];
                    y8e6js['indexOf']('http://') != -0x1 || y8e6js['indexOf']('https://') != -0x1 ? dx12y7['EnvConfig']['load']['call'](clm_tf, y8e6js, d2y1x7, hfnkg5, ebq6j, jesq68) : mlca_t['readFile'](ej86, io4vap, new es68j(g5khf, g5khf['onReadNativeCallBack'], [io4vap, y8e6js, d2y1x7, hfnkg5, ebq6j, jesq68, clm_tf]), y8e6js);
                } else dx12y7['EnvConfig']['load']['call'](this, y8e6js, d2y1x7, hfnkg5, ebq6j, jesq68);
            }
        }, gf_tlm['resMgrLoad'] = function (ftm, d7x2y, nz35w, d7yxs1, flmt_c, x7s6yd, zw3$r0) {
            nz35w === void 0x0 && (nz35w = 0x0), d7yxs1 === void 0x0 && (d7yxs1 = ![]), flmt_c === void 0x0 && (flmt_c = ![]), x7s6yd === void 0x0 && (x7s6yd = 0x0), zw3$r0 === void 0x0 && (zw3$r0 = 0x3), ftm['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', ftm), dx12y7['EnvConfig']['resMgrLoad'](ftm, (tcia_, g5lfhk, rw21) => {
                g5khf['prototype']['resMgrLoadCallBack'](tcia_, g5lfhk, rw21, d7x2y);
            }, nz35w, d7yxs1, flmt_c, x7s6yd, zw3$r0);
        }, gf_tlm['resMgrLoadCallBack'] = function (lhf5kg, klhgfm, ju8e, r7xd) {
            console['log']('buff:::', lhf5kg, ju8e, mlca_t['fileNativeDir'] + '///' + mlca_t['fileListName']), r7xd(lhf5kg, klhgfm, ju8e);
        }, gf_tlm['clearRes'] = function (ub8jeq, hk59z) {
            hk59z === void 0x0 && (hk59z = ![]);
            var z9nk53 = this;
            z9nk53['clearRes'](ub8jeq, hk59z);
            var eu8jb = mlca_t['getFileInfo'](ub8jeq);
            if (eu8jb && (ub8jeq['indexOf']('http://') != -0x1 || ub8jeq['indexOf']('https://') != -0x1)) {
                var k5hngf = eu8jb['md5'],
                    fgtm_ = mlca_t['getFileNativePath'](k5hngf);
                mlca_t['remove'](fgtm_);
            }
        }, g5khf['onReadNativeCallBack'] = function (o4avp, x7y2d, xs67, tlgf, r$02x, _mctal, pica4o, znw09, ctf_ml) {
            tlgf === void 0x0 && (tlgf = !![]), _mctal === void 0x0 && (_mctal = ![]), znw09 === void 0x0 && (znw09 = 0x0);
            if (!znw09) {
                var x72d1r;
                if (xs67 == 'json' || xs67 == 'atlas') x72d1r = dx12y7['getJson'](ctf_ml['data']);else xs67 == 'xml' ? x72d1r = _mlac['parseXMLFromString'](ctf_ml['data']) : x72d1r = ctf_ml['data'];
                pica4o['onLoaded'](x72d1r), !dx12y7['isZiYu'] && dx12y7['isPosMsgYu'] && xs67 != 'arraybuffer' && wx['postMessage']({
                    'url': x7y2d,
                    'data': x72d1r,
                    'isLoad': !![]
                });
            } else znw09 == 0x1 && dx12y7['EnvConfig']['load']['call'](pica4o, x7y2d, xs67, tlgf, r$02x, _mctal);
        }, yejs6(g5khf, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), g5khf;
    }(),
        mlca_t = function (tgl_mf) {
        function a_tcmp() {
            a_tcmp['__super']['call'](this);
            ;
        }
        return _lgftm(a_tcmp, 'laya.wx.mini.MiniFileMgr', tgl_mf), a_tcmp['isLoadFile'] = function (n903wz) {
            return a_tcmp['_fileTypeArr']['indexOf'](n903wz) != -0x1 ? !![] : ![];
        }, a_tcmp['getFileInfo'] = function (dsx7) {
            var y1s7dx = dsx7['split']('?')[0x0],
                y67dxs = a_tcmp['filesListObj'][y1s7dx];
            if (y67dxs == null) return null;else return y67dxs;
            return null;
        }, a_tcmp['onFileUpdate'] = function (gmhft, $30w2) {
            var dr217x = gmhft['split']('/'),
                tfhl = dr217x[dr217x['length'] - 0x1],
                m_lfc = a_tcmp['getFileInfo']($30w2);
            if (m_lfc == null) a_tcmp['onSaveFile']($30w2, tfhl);else {
                if (m_lfc['readyUrl'] != $30w2) a_tcmp['remove'](tfhl, $30w2);
            }
        }, a_tcmp['exits'] = function (kn9z, ghkf5n) {
            var hfn = a_tcmp['getFileNativePath'](kn9z);
            a_tcmp['fs']['getFileInfo']({
                'filePath': hfn,
                'success': function (r$z30) {
                    ghkf5n != null && ghkf5n['runWith']([0x0, r$z30]);
                },
                'fail': function (g95nkh) {
                    ghkf5n != null && ghkf5n['runWith']([0x1, g95nkh]);
                }
            });
        }, a_tcmp['read'] = function (sjy8, qe6sj, nz95hk, z5k3n) {
            qe6sj === void 0x0 && (qe6sj = 'ascill'), z5k3n === void 0x0 && (z5k3n = '');
            var kn9g5;
            z5k3n != '' ? kn9g5 = a_tcmp['getFileNativePath'](sjy8) : kn9g5 = sjy8, a_tcmp['fs']['readFile']({
                'filePath': kn9g5,
                'encoding': qe6sj,
                'success': function (mfgk) {
                    nz95hk != null && nz95hk['runWith']([0x0, mfgk]);
                },
                'fail': function (jb68e) {
                    if (jb68e && z5k3n != '') a_tcmp['down'](z5k3n, qe6sj, nz95hk, z5k3n);else nz95hk != null && nz95hk['runWith']([0x1]);
                }
            });
        }, a_tcmp['readNativeFile'] = function (oap4v, wr102$) {
            a_tcmp['fs']['readFile']({
                'filePath': oap4v,
                'encoding': '',
                'success': function (w35nz9) {
                    wr102$ != null && wr102$['runWith']([0x0]);
                },
                'fail': function ($17) {
                    wr102$ != null && wr102$['runWith']([0x1]);
                }
            });
        }, a_tcmp['down'] = function (mlfgt_, v4iao, h9nkg5, mlctf_) {
            v4iao === void 0x0 && (v4iao = 'ascill'), mlctf_ === void 0x0 && (mlctf_ = '');
            var cmlat_ = a_tcmp['getFileNativePath'](mlctf_),
                fhgtl = a_tcmp['wxdown']({
                'url': mlfgt_,
                'filePath': cmlat_,
                'success': function (cp4io) {
                    if (cp4io['statusCode'] === 0xc8) a_tcmp['readFile'](cp4io['filePath'], v4iao, h9nkg5, mlctf_);
                },
                'fail': function (mcla_t) {
                    h9nkg5 != null && h9nkg5['runWith']([0x1, mcla_t]);
                }
            });
            fhgtl['onProgressUpdate'](function (s76yxd) {
                h9nkg5 != null && h9nkg5['runWith']([0x2, s76yxd['progress']]);
            });
        }, a_tcmp['readFile'] = function (nz093w, wr1$0, po4aic, rx1$7) {
            wr1$0 === void 0x0 && (wr1$0 = 'ascill'), rx1$7 === void 0x0 && (rx1$7 = ''), a_tcmp['fs']['readFile']({
                'filePath': nz093w,
                'encoding': wr1$0,
                'success': function (n5hfgk) {
                    if (nz093w['indexOf']('http://') != -0x1 || nz093w['indexOf']('https://') != -0x1) a_tcmp['onFileUpdate'](nz093w, rx1$7);
                    po4aic != null && po4aic['runWith']([0x0, n5hfgk]);
                },
                'fail': function (kgh59) {
                    if (kgh59) po4aic != null && po4aic['runWith']([0x1, kgh59]);
                }
            });
        }, a_tcmp['downImg'] = function (lmhftg, $309, z9$3w0) {
            z9$3w0 === void 0x0 && (z9$3w0 = '');
            var w39$z0 = a_tcmp['wxdown']({
                'url': lmhftg,
                'success': function (jy7s) {
                    jy7s['statusCode'] === 0xc8 && a_tcmp['copyFile'](jy7s['tempFilePath'], z9$3w0, $309);
                },
                'fail': function (ctf_l) {
                    $309 != null && $309['runWith']([0x1, ctf_l]);
                }
            });
        }, a_tcmp['copyFile'] = function (sdy67x, w$20r, d21x) {
            var kh95 = sdy67x['split']('/'),
                w90zn3 = kh95[kh95['length'] - 0x1],
                gf5lkh = w$20r['split']('?')[0x0],
                k539zn = a_tcmp['getFileInfo'](w$20r),
                kgfhlm = a_tcmp['getFileNativePath'](w90zn3);
            a_tcmp['fs']['copyFile']({
                'srcPath': sdy67x,
                'destPath': kgfhlm,
                'success': function (gfhl5k) {
                    if (!k539zn) a_tcmp['onSaveFile'](w$20r, w90zn3), d21x != null && d21x['runWith']([0x0]);else {
                        if (k539zn['readyUrl'] != w$20r) a_tcmp['remove'](w90zn3, w$20r, d21x);
                    }
                },
                'fail': function (ap_mct) {
                    d21x != null && d21x['runWith']([0x1, ap_mct]);
                }
            });
        }, a_tcmp['getFileNativePath'] = function (ciop4) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ciop4;
        }, a_tcmp['remove'] = function (_tgm, n309z, h59k) {
            n309z === void 0x0 && (n309z = '');
            var tpac_i = a_tcmp['getFileInfo'](n309z),
                hnf5gk = a_tcmp['getFileNativePath'](tpac_i['md5']);
            opica_['loader']['clearRes'](tpac_i['readyUrl']), a_tcmp['fs']['unlink']({
                'filePath': hnf5gk,
                'success': function (mgklhf) {
                    if (n309z != '') a_tcmp['onSaveFile'](n309z, _tgm);
                    h59k != null && h59k['runWith']([0x0]);
                },
                'fail': function (p4aic) {}
            });
        }, a_tcmp['onSaveFile'] = function (hg5, xdy76) {
            var gk5h9 = hg5['split']('?')[0x0];
            a_tcmp['filesListObj'][gk5h9] = {
                'md5': xdy76,
                'readyUrl': hg5
            }, a_tcmp['fs']['writeFile']({
                'filePath': a_tcmp['fileNativeDir'] + '/' + a_tcmp['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](a_tcmp['filesListObj']),
                'success': function (kfglhm) {
                    console['log']('写入测试测试成功：', kfglhm);
                },
                'fail': function (_ocpi) {
                    console['log']('写入测试测试失败：', _ocpi);
                }
            });
        }, a_tcmp['existDir'] = function (jyd76, gh5n) {
            a_tcmp['fs']['mkdir']({
                'dirPath': jyd76,
                'success': function (cia_p) {
                    gh5n != null && gh5n['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (ct_ml) {
                    if (ct_ml['errMsg']['indexOf']('file already exists') != -0x1) a_tcmp['readSync'](a_tcmp['fileListName'], 'utf8', gh5n);else gh5n != null && gh5n['runWith']([0x1, ct_ml]);
                }
            });
        }, a_tcmp['readSync'] = function (ghtfml, amcp_t, zw0$39, caio) {
            amcp_t === void 0x0 && (amcp_t = 'ascill'), caio === void 0x0 && (caio = '');
            var tp_ac = a_tcmp['getFileNativePath'](ghtfml),
                ghkfl5;
            try {
                ghkfl5 = a_tcmp['fs']['readFileSync'](tp_ac), zw0$39 != null && zw0$39['runWith']([0x0, { 'data': ghkfl5 }]);
            } catch (f5khlg) {
                zw0$39 != null && zw0$39['runWith']([0x1]);
            }
        }, a_tcmp['readCache'] = function () {}, a_tcmp['writeCache'] = function (caipt) {
            var kzn5 = readyUrl['split']('?')[0x0];
            a_tcmp['filesListObj'][kzn5] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, a_tcmp['fs']['writeFile']({
                'filePath': a_tcmp['fileNativeDir'] + '/' + a_tcmp['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](a_tcmp['filesListObj']),
                'success': function (hflgmt) {},
                'fail': function (x2r7) {}
            });
        }, a_tcmp['setNativeFileDir'] = function (w$r0) {
            a_tcmp['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + w$r0;
        }, a_tcmp['filesListObj'] = {}, a_tcmp['fileNativeDir'] = null, a_tcmp['fileListName'] = 'layaairfiles.txt', a_tcmp['ziyuFileData'] = {}, yejs6(a_tcmp, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), a_tcmp;
    }(lhmgkf),
        k59ng = function (r$2x0) {
        function kl5fgh() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], kl5fgh['__super']['call'](this), this['_sound'] = kl5fgh['_createSound'](), this['_chanell'] = new w12(this['_sound']);
        }
        _lgftm(kl5fgh, 'laya.wx.mini.MiniSound', r$2x0);
        var hgfmkl = kl5fgh['prototype'];
        return hgfmkl['load'] = function (t_ipca) {
            var h5ng9 = this;
            t_ipca = hlfgmt['formatURL'](t_ipca), this['url'] = t_ipca;
            if (kl5fgh['_audioCache'][t_ipca]) {
                this['event']('complete');
                return;
            }
            function mhflkg() {
                if (kl5fgh['_null'] != undefined) h5ng9['_sound']['onCanplay'](kl5fgh['_null']), h5ng9['_sound']['onError'](kl5fgh['_null']);else try {
                    h5ng9['_sound']['onCanplay'](null), h5ng9['_sound']['onError'](null), kl5fgh['_null'] = null;
                } catch (_cmftl) {
                    console['warn']('[wxmini] _clearSound:' + _cmftl), h5ng9['_sound']['onCanplay'](pa4), h5ng9['_sound']['onError'](pa4), kl5fgh['_null'] = pa4;
                }
            }
            function gfkhlm() {
                x$r1['loaded'] = !![], x$r1['event']('complete'), kl5fgh['_audioCache'][x$r1['url']] = x$r1;
            }
            function z39w0(y127) {
                console['error']('errCode=' + y127['errCode'] + '  errMsg=' + y127['errMsg']), x$r1['event']('error');
            }
            function pa4() {}
            this['_sound']['onCanplay'](gfkhlm), this['_sound']['onError'](z39w0), this['_sound']['src'] = t_ipca;
            var x$r1 = this;
        }, hgfmkl['play'] = function (wz90, opiv4) {
            wz90 === void 0x0 && (wz90 = 0x0), opiv4 === void 0x0 && (opiv4 = 0x0);
            var nkg5h9, k5gfnh;
            if (this['url'] == sedyj['_tMusic']) {
                if (!kl5fgh['_musicAudio']) kl5fgh['_musicAudio'] = this['_sound'];
                nkg5h9 = kl5fgh['_musicAudio'], k5gfnh = this['_chanell'];
            } else nkg5h9 = this['_sound'], k5gfnh = this['_chanell'];
            return nkg5h9['src'] = this['url'], nkg5h9['startTime'] = 0x0, k5gfnh['isStopped'] && (k5gfnh['url'] = this['url'], k5gfnh['loops'] = opiv4, k5gfnh['startTime'] = wz90, k5gfnh['play'](), sedyj['addChannel'](k5gfnh)), k5gfnh;
        }, hgfmkl['dispose'] = function () {
            var fkngh5 = kl5fgh['_audioCache'][this['url']];
            fkngh5 && (fkngh5['src'] = '', delete kl5fgh['_audioCache'][this['url']]);
        }, l5gk(0x0, hgfmkl, 'duration', function () {
            return this['_sound']['duration'];
        }), kl5fgh['_createSound'] = function () {
            kl5fgh['_id']++;
            var sdy6x7 = dx12y7['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return sdy6x7;
        }, kl5fgh['_musicAudio'] = null, kl5fgh['_id'] = 0x0, kl5fgh['_audioCache'] = {}, kl5fgh['_null'] = undefined, kl5fgh;
    }(lhmgkf),
        w12 = function (sjey68) {
        function t_clf(lgtmhf) {
            this['_audio'] = null, this['_onEnd'] = null, t_clf['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = lgtmhf, this['_onEnd'] = _mlac['bind'](this['__onEnd'], this), lgtmhf['onEnded'](this['_onEnd']);
        }
        _lgftm(t_clf, 'laya.wx.mini.MiniSoundChannel', sjey68);
        var y1d2 = t_clf['prototype'];
        return y1d2['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (opica_['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, y1d2['__onNull'] = function () {}, y1d2['play'] = function () {
            this['isStopped'] = ![], sedyj['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, y1d2['stop'] = function () {
            this['isStopped'] = !![], sedyj['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, y1d2['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, y1d2['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], sedyj['addChannel'](this), this['_audio']['play']();
        }, l5gk(0x0, y1d2, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), l5gk(0x0, y1d2, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), l5gk(0x0, y1d2, 'volume', function () {
            return 0x1;
        }, function (aocip) {}), t_clf['_null'] = undefined, t_clf;
    }(apioc4),
        k5z39n = function () {
        function t_mpc() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = dx12y7['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        _lgftm(t_mpc, 'laya.wx.mini.MiniVideo');
        var apit_ = t_mpc['prototype'];
        return apit_['on'] = function (mtcf, lmghk, w3r2) {
            if (mtcf == 'loadedmetadata') this['onPlayFunc'] = w3r2['bind'](lmghk), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else mtcf == 'ended' && (this['onEndedFunC'] = w3r2['bind'](lmghk), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, apit_['onTimeUpdateFunc'] = function (gmlf_) {
            this['position'] = gmlf_['position'], this['_duration'] = gmlf_['duration'];
        }, apit_['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, apit_['onended'] = function (hg5k9, glmth) {
            this['onEndedFunC'] = glmth['bind'](hg5k9), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, apit_['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, apit_['off'] = function (nfh5g, z5n3w9, cpt_i) {
            if (nfh5g == 'loadedmetadata') this['onPlayFunc'] = cpt_i['bind'](z5n3w9), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else nfh5g == 'ended' && (this['onEndedFunC'] = cpt_i['bind'](z5n3w9), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, apit_['load'] = function (x7d6ys) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = x7d6ys;
        }, apit_['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, apit_['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, apit_['size'] = function (htfmlg, gflmk) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = htfmlg, this['videoElement']['height'] = gflmk;
        }, apit_['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, apit_['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, l5gk(0x0, apit_, 'duration', function () {
            return this['_duration'];
        }), l5gk(0x0, apit_, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (fhlm) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = fhlm;
        }), l5gk(0x0, apit_, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), l5gk(0x0, apit_, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), l5gk(0x0, apit_, 'ended', function () {
            return this['videoend'];
        }), l5gk(0x0, apit_, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (gkf) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = gkf;
        }), l5gk(0x0, apit_, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (hl5gf) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = hl5gf;
        }), l5gk(0x0, apit_, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (camp_) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = camp_;
        }), l5gk(0x0, apit_, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), l5gk(0x0, apit_, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (cfl) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = cfl;
        }), l5gk(0x0, apit_, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (e8y6sj) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = e8y6sj;
        }), l5gk(0x0, apit_, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), l5gk(0x0, apit_, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (ciopa_) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = ciopa_;
        }), l5gk(0x0, apit_, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (ghmtf) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = ghmtf;
        }), l5gk(0x0, apit_, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (n359wz) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = n359wz;
        }), t_mpc;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var p_tica in Laya) {
        var beqj68 = Laya[p_tica];
        beqj68 && beqj68['__isclass'] && (exports[p_tica] = beqj68);
    }
});