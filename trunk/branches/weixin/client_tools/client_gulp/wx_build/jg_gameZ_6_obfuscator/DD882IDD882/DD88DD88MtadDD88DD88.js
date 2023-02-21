var G = wx.$E;
(function (window, document, gnylxp) {
    var rwaqu = gnylxp['un'],
        ij_dt = gnylxp['uns'],
        b7f8wm = gnylxp['static'],
        t_di1s = gnylxp['class'],
        m87vw = gnylxp['getset'],
        hypg9n = gnylxp['__newvec'],
        uwvr = laya['utils']['Browser'],
        aqgu9h = laya['events']['Event'],
        dti1s_ = laya['events']['EventDispatcher'],
        bm7$4 = laya['resource']['HTMLImage'],
        fwqvr8 = laya['utils']['Handler'],
        mv = laya['display']['Input'],
        vwaurq = laya['net']['Loader'],
        ti1j_d = laya['maths']['Matrix'],
        nxpyl = laya['renders']['Render'],
        bkm4c$ = laya['utils']['RunDriver'],
        $m7c = laya['media']['Sound'],
        mc4bk = laya['media']['SoundChannel'],
        s0z3t = laya['media']['SoundManager'],
        b64kc = laya['display']['Stage'],
        rwv78 = laya['net']['URL'],
        lnghyp = laya['utils']['Utils'],
        $m47bc = function () {
        function onypxl() {}
        return t_di1s(onypxl, 'laya.wx.mini.MiniAdpter'), onypxl['getJson'] = function (vuwrqa) {
            return JSON['parse'](vuwrqa);
        }, onypxl['init'] = function (wf7b8m, _0ts32) {
            wf7b8m === void 0x0 && (wf7b8m = ![]), _0ts32 === void 0x0 && (_0ts32 = ![]);
            if (onypxl['_inited']) return;
            onypxl['window'] = window;
            if (onypxl['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            onypxl['_inited'] = !![], onypxl['isZiYu'] = _0ts32, onypxl['isPosMsgYu'] = wf7b8m, onypxl['EnvConfig'] = {}, !onypxl['isZiYu'] && (k4cm['setNativeFileDir']('/layaairGame'), k4cm['existDir'](k4cm['fileNativeDir'], fwqvr8['create'](onypxl, onypxl['onMkdirCallBack']))), onypxl['window']['focus'] = function () {}, gnylxp['getUrlPath'] = function () {}, onypxl['window']['logtime'] = function ($5kc) {}, onypxl['window']['alertTimeLog'] = function (_20s) {}, onypxl['window']['resetShareInfo'] = function () {}, onypxl['window']['CanvasRenderingContext2D'] = function () {}, onypxl['window']['CanvasRenderingContext2D']['prototype'] = onypxl['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], onypxl['window']['document']['body']['appendChild'] = function () {}, onypxl['EnvConfig']['pixelRatioInt'] = 0x0, bkm4c$['getPixelRatio'] = onypxl['pixelRatio'], onypxl['_preCreateElement'] = uwvr['createElement'], uwvr['createElement'] = onypxl['createElement'], bkm4c$['createShaderCondition'] = onypxl['createShaderCondition'], lnghyp['parseXMLFromString'] = onypxl['parseXMLFromString'], mv['_createInputElement'] = cj$5['_createInputElement'], onypxl['EnvConfig']['load'] = vwaurq['prototype']['load'], vwaurq['prototype']['load'] = ahp9g['prototype']['load'], onypxl['isZiYu'] && wf7b8m && wx['onMessage'](function (t32s1) {
                t32s1['isLoad'] && (k4cm['ziyuFileData'][t32s1['url']] = t32s1['data']);
            });
        }, onypxl['onMkdirCallBack'] = function (bwm7f8, vr9a) {
            if (!bwm7f8) k4cm['filesListObj'] = JSON['parse'](vr9a['data']);
        }, onypxl['pixelRatio'] = function () {
            if (!onypxl['EnvConfig']['pixelRatioInt']) try {
                var cfb7 = wx['getSystemInfoSync']();
                return onypxl['EnvConfig']['pixelRatioInt'] = cfb7['pixelRatio'], cfb7 = cfb7, cfb7['pixelRatio'];
            } catch (pgnh9) {}
            return onypxl['EnvConfig']['pixelRatioInt'];
        }, onypxl['createElement'] = function (wfm87v) {
            if (wfm87v == 'canvas') {
                var k564$c;
                return onypxl['idx'] == 0x1 ? onypxl['isZiYu'] ? (k564$c = sharedCanvas, k564$c['style'] = {}) : k564$c = window['canvas'] : k564$c = window['wx']['createCanvas'](), onypxl['idx']++, k564$c;
            } else {
                if (wfm87v == 'textarea' || wfm87v == 'input') return onypxl['onCreateInput'](wfm87v);else {
                    if (wfm87v == 'div') {
                        var m8bf74 = onypxl['_preCreateElement'](wfm87v);
                        return m8bf74['contains'] = function (bf7m8) {
                            return null;
                        }, m8bf74['removeChild'] = function (lxngpy) {}, m8bf74;
                    } else return onypxl['_preCreateElement'](wfm87v);
                }
            }
        }, onypxl['onCreateInput'] = function (i2t_1s) {
            var lgxnpy = onypxl['_preCreateElement'](i2t_1s);
            return lgxnpy['focus'] = cj$5['wxinputFocus'], lgxnpy['blur'] = cj$5['wxinputblur'], lgxnpy['style'] = {}, lgxnpy['value'] = 0x0, lgxnpy['parentElement'] = {}, lgxnpy['placeholder'] = {}, lgxnpy['type'] = {}, lgxnpy['setColor'] = function (mc7b$4) {}, lgxnpy['setType'] = function (t23sz) {}, lgxnpy['setFontFace'] = function (ahr) {}, lgxnpy['addEventListener'] = function (dji_t1) {}, lgxnpy['contains'] = function (itjd) {
                return null;
            }, lgxnpy['removeChild'] = function (qv8w) {}, lgxnpy;
        }, onypxl['createShaderCondition'] = function (wavqur) {
            var quagh9 = this,
                $kc6 = function () {
                var gph9uy = wavqur;
                return quagh9[wavqur['replace']('this.', '')];
            };
            return $kc6;
        }, onypxl['EnvConfig'] = null, onypxl['window'] = null, onypxl['_preCreateElement'] = null, onypxl['_inited'] = ![], onypxl['wxRequest'] = null, onypxl['systemInfo'] = null, onypxl['version'] = '0.0.1', onypxl['isZiYu'] = ![], onypxl['isPosMsgYu'] = ![], onypxl['parseXMLFromString'] = function (nolpy) {
            var _1sdit, d_1itj;
            nolpy = nolpy['replace'](/>\s+</g, '><');
            try {
                _1sdit = new window['Parser']['DOMParser']()['parseFromString'](nolpy, 'text/xml');
            } catch (m7fw8b) {
                throw '需要引入xml解析库文件';
            }
            return _1sdit;
        }, onypxl['idx'] = 0x1, onypxl;
    }(),
        kd6ji5 = function () {
        function kc$j6() {}
        t_di1s(kc$j6, 'laya.wx.mini.MiniImage');
        var j5k6id = kc$j6['prototype'];
        return j5k6id['_loadImage'] = function (nygpxl) {
            var ha9gup = this,
                ahguq9 = ![];
            nygpxl['indexOf']('layaNativeDir/') == -0x1 && (ahguq9 = !![], nygpxl = rwv78['formatURL'](nygpxl));
            if (!k4cm['getFileInfo'](nygpxl)) {
                if (nygpxl['indexOf']('http://') != -0x1 || nygpxl['indexOf']('https://') != -0x1) k4cm['downImg'](nygpxl, new fwqvr8(kc$j6, kc$j6['onDownImgCallBack'], [nygpxl, ha9gup]), nygpxl);else kc$j6['onCreateImage'](nygpxl, ha9gup, !![]);
            } else kc$j6['onCreateImage'](nygpxl, ha9gup, !ahguq9);
        }, kc$j6['onDownImgCallBack'] = function (vm8f7w, jk65$d, td1ij) {
            if (!td1ij) kc$j6['onCreateImage'](vm8f7w, jk65$d);else jk65$d['onError'](null);
        }, kc$j6['onCreateImage'] = function (_it1d, _d1sit, u9hrqa) {
            u9hrqa === void 0x0 && (u9hrqa = ![]);
            var dj_1i5;
            if (!u9hrqa) {
                var k6cb = k4cm['getFileInfo'](_it1d),
                    wfvq8r = k6cb['md5'];
                dj_1i5 = k4cm['getFileNativePath'](wfvq8r);
            } else dj_1i5 = _it1d;
            if (_d1sit['imgCache'] == null) _d1sit['imgCache'] = {};
            var yxnlpg;
            function vw8rq() {
                yxnlpg['onload'] = null, yxnlpg['onerror'] = null, delete _d1sit['imgCache'][_it1d];
            }
            ;
            var ji5d = function () {
                vw8rq(), _d1sit['onLoaded'](yxnlpg);
            },
                w7vrf = function () {
                vw8rq(), _d1sit['event']('error', 'Load image failed');
            };
            _d1sit['_type'] == 'nativeimage' ? (yxnlpg = new uwvr['window']['Image'](), yxnlpg['crossOrigin'] = '', yxnlpg['onload'] = ji5d, yxnlpg['onerror'] = w7vrf, yxnlpg['src'] = dj_1i5, _d1sit['imgCache'][_it1d] = yxnlpg) : new bm7$4['create'](dj_1i5, {
                'onload': ji5d,
                'onerror': w7vrf,
                'onCreate': function (jti_d1) {
                    yxnlpg = jti_d1, _d1sit['imgCache'][_it1d] = jti_d1;
                }
            });
        }, kc$j6;
    }(),
        cj$5 = function () {
        function uhg9y() {}
        return t_di1s(uhg9y, 'laya.wx.mini.MiniInput'), uhg9y['_createInputElement'] = function () {
            mv['_initInput'](mv['area'] = uwvr['createElement']('textarea')), mv['_initInput'](mv['input'] = uwvr['createElement']('input')), mv['inputContainer'] = uwvr['createElement']('div'), mv['inputContainer']['style']['position'] = 'absolute', mv['inputContainer']['style']['zIndex'] = 0x186a0, uwvr['container']['appendChild'](mv['inputContainer']), mv['inputContainer']['setPos'] = function (ik6dj, djit1) {
                mv['inputContainer']['style']['left'] = ik6dj + 'px', mv['inputContainer']['style']['top'] = djit1 + 'px';
            }, gnylxp['stage']['on']('resize', null, uhg9y['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (gnphl) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), s0z3t['_soundClass'] = pynhg9, s0z3t['_musicClass'] = pynhg9, window['_videoClass'] = w8r7fv;
        }, uhg9y['_onStageResize'] = function () {
            var $bmk4c = gnylxp['stage']['_canvasTransform']['identity']();
            $bmk4c['scale'](uwvr['width'] / nxpyl['canvas']['width'] / bkm4c$['getPixelRatio'](), uwvr['height'] / nxpyl['canvas']['height'] / bkm4c$['getPixelRatio']());
        }, uhg9y['wxinputFocus'] = function (fqw8) {
            var _2s = mv['inputElement']['target'];
            if (_2s && !_2s['editable']) return;
            $m47bc['window']['wx']['offKeyboardConfirm'](), $m47bc['window']['wx']['offKeyboardInput'](), $m47bc['window']['wx']['showKeyboard']({
                'defaultValue': _2s['text'],
                'maxLength': _2s['maxChars'],
                'multiple': _2s['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (it) {},
                'fail': function (hq9uar) {}
            }), $m47bc['window']['wx']['onKeyboardConfirm'](function (nxylg) {
                var w8 = nxylg ? nxylg['value'] : '';
                _2s['text'] = w8, _2s['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), $m47bc['window']['wx']['onKeyboardInput'](function ($6c4) {
                var st_21i = $6c4 ? $6c4['value'] : '';
                if (!_2s['multiline']) {
                    if (st_21i['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                _2s['text'] = st_21i, _2s['event']('input');
            });
        }, uhg9y['inputEnter'] = function () {
            mv['inputElement']['target']['focus'] = ![];
        }, uhg9y['wxinputblur'] = function () {
            uhg9y['hideKeyboard']();
        }, uhg9y['hideKeyboard'] = function () {
            $m47bc['window']['wx']['offKeyboardConfirm'](), $m47bc['window']['wx']['offKeyboardInput'](), $m47bc['window']['wx']['hideKeyboard']({
                'success': function (uhpy9g) {
                    console['log']('隐藏键盘');
                },
                'fail': function (_i5d) {
                    console['log']('隐藏键盘出错:' + (_i5d ? _i5d['errMsg'] : ''));
                }
            });
        }, uhg9y;
    }(),
        ahp9g = function () {
        function ti1sd() {}
        t_di1s(ti1sd, 'laya.wx.mini.MiniLoader');
        var xyopl = ti1sd['prototype'];
        return xyopl['load'] = function (vf8wrq, dts_, bc$46, _32t1, m74b8f) {
            bc$46 === void 0x0 && (bc$46 = !![]), m74b8f === void 0x0 && (m74b8f = ![]);
            var ylxonp = this;
            ylxonp['_url'] = vf8wrq;
            if (vf8wrq['indexOf']('data:image') === 0x0) ylxonp['_type'] = dts_ = 'image';else ylxonp['_type'] = dts_ || (dts_ = ylxonp['getTypeFromUrl'](vf8wrq));
            ylxonp['_cache'] = bc$46, ylxonp['_data'] = null;
            var hy9up = 'ascii';
            if (vf8wrq['indexOf']('.fnt') != -0x1) hy9up = 'utf8';else dts_ == 'arraybuffer' && (hy9up = '');
            ;
            var v7fw8m = lnghyp['getFileExtension'](vf8wrq);
            if (ti1sd['_fileTypeArr']['indexOf'](v7fw8m) != -0x1) $m47bc['EnvConfig']['load']['call'](this, vf8wrq, dts_, bc$46, _32t1, m74b8f);else {
                if (!k4cm['getFileInfo'](vf8wrq)) {
                    if (vf8wrq['indexOf']('layaNativeDir/') != -0x1) {
                        if ($m47bc['isZiYu']) {
                            var urq9 = k4cm['ziyuFileData'][vf8wrq];
                            ylxonp['onLoaded'](urq9);
                            return;
                        } else {
                            cosnole['log']('read read'), k4cm['read'](vf8wrq, hy9up, new fwqvr8(ti1sd, ti1sd['onReadNativeCallBack'], [hy9up, vf8wrq, dts_, bc$46, _32t1, m74b8f, ylxonp]));
                            return;
                        }
                    }
                    if (rwv78['rootPath'] == '') var _t320 = vf8wrq;else _t320 = vf8wrq['split'](rwv78['rootPath'])[0x0];
                    vf8wrq['indexOf']('http://') != -0x1 || vf8wrq['indexOf']('https://') != -0x1 ? $m47bc['EnvConfig']['load']['call'](ylxonp, vf8wrq, dts_, bc$46, _32t1, m74b8f) : k4cm['readFile'](_t320, hy9up, new fwqvr8(ti1sd, ti1sd['onReadNativeCallBack'], [hy9up, vf8wrq, dts_, bc$46, _32t1, m74b8f, ylxonp]), vf8wrq);
                } else $m47bc['EnvConfig']['load']['call'](this, vf8wrq, dts_, bc$46, _32t1, m74b8f);
            }
        }, xyopl['resMgrLoad'] = function (bmcf74, b4c$7m, _31st, nlyo, nyhpgl, wuqar, v8rf) {
            _31st === void 0x0 && (_31st = 0x0), nlyo === void 0x0 && (nlyo = ![]), nyhpgl === void 0x0 && (nyhpgl = ![]), wuqar === void 0x0 && (wuqar = 0x0), v8rf === void 0x0 && (v8rf = 0x3), bmcf74['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', bmcf74), $m47bc['EnvConfig']['resMgrLoad'](bmcf74, ($kd56j, $cmb, aphg9u) => {
                ti1sd['prototype']['resMgrLoadCallBack']($kd56j, $cmb, aphg9u, b4c$7m);
            }, _31st, nlyo, nyhpgl, wuqar, v8rf);
        }, xyopl['resMgrLoadCallBack'] = function (kcb$64, bfc74, puyhg9, yoxpl) {
            console['log']('buff:::', kcb$64, puyhg9, k4cm['fileNativeDir'] + '///' + k4cm['fileListName']), yoxpl(kcb$64, bfc74, puyhg9);
        }, xyopl['clearRes'] = function (h9uraq, cmf) {
            cmf === void 0x0 && (cmf = ![]);
            var _0t32 = this;
            _0t32['clearRes'](h9uraq, cmf);
            var vwmf87 = k4cm['getFileInfo'](h9uraq);
            if (vwmf87 && (h9uraq['indexOf']('http://') != -0x1 || h9uraq['indexOf']('https://') != -0x1)) {
                var frwq = vwmf87['md5'],
                    a8rwvq = k4cm['getFileNativePath'](frwq);
                k4cm['remove'](a8rwvq);
            }
        }, ti1sd['onReadNativeCallBack'] = function ($k5c6, uv9qa, dkj5$6, a9vrq, rw8qv, aq8wrv, gyhpu9, p9uagh, st21_) {
            a9vrq === void 0x0 && (a9vrq = !![]), aq8wrv === void 0x0 && (aq8wrv = ![]), p9uagh === void 0x0 && (p9uagh = 0x0);
            if (!p9uagh) {
                var puyh;
                if (dkj5$6 == 'json' || dkj5$6 == 'atlas') puyh = $m47bc['getJson'](st21_['data']);else dkj5$6 == 'xml' ? puyh = lnghyp['parseXMLFromString'](st21_['data']) : puyh = st21_['data'];
                gyhpu9['onLoaded'](puyh), !$m47bc['isZiYu'] && $m47bc['isPosMsgYu'] && dkj5$6 != 'arraybuffer' && wx['postMessage']({
                    'url': uv9qa,
                    'data': puyh,
                    'isLoad': !![]
                });
            } else p9uagh == 0x1 && $m47bc['EnvConfig']['load']['call'](gyhpu9, uv9qa, dkj5$6, a9vrq, rw8qv, aq8wrv);
        }, b7f8wm(ti1sd, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), ti1sd;
    }(),
        k4cm = function (_1di5j) {
        function $4kbc() {
            $4kbc['__super']['call'](this);
            ;
        }
        return t_di1s($4kbc, 'laya.wx.mini.MiniFileMgr', _1di5j), $4kbc['isLoadFile'] = function (s20_) {
            return $4kbc['_fileTypeArr']['indexOf'](s20_) != -0x1 ? !![] : ![];
        }, $4kbc['getFileInfo'] = function (b7m8fw) {
            var _ji = b7m8fw['split']('?')[0x0],
                xygpn = $4kbc['filesListObj'][_ji];
            if (xygpn == null) return null;else return xygpn;
            return null;
        }, $4kbc['onFileUpdate'] = function (hy9ug, $c645) {
            var lnyopx = hy9ug['split']('/'),
                f8b4m7 = lnyopx[lnyopx['length'] - 0x1],
                hq9uga = $4kbc['getFileInfo']($c645);
            if (hq9uga == null) $4kbc['onSaveFile']($c645, f8b4m7);else {
                if (hq9uga['readyUrl'] != $c645) $4kbc['remove'](f8b4m7, $c645);
            }
        }, $4kbc['exits'] = function (dti1, qwrva) {
            var phgn = $4kbc['getFileNativePath'](dti1);
            $4kbc['fs']['getFileInfo']({
                'filePath': phgn,
                'success': function (wq8vfr) {
                    qwrva != null && qwrva['runWith']([0x0, wq8vfr]);
                },
                'fail': function (uaqv9) {
                    qwrva != null && qwrva['runWith']([0x1, uaqv9]);
                }
            });
        }, $4kbc['read'] = function (i_j15d, ti12_, rauh9, rqva9) {
            ti12_ === void 0x0 && (ti12_ = 'ascill'), rqva9 === void 0x0 && (rqva9 = '');
            var xnlgy;
            rqva9 != '' ? xnlgy = $4kbc['getFileNativePath'](i_j15d) : xnlgy = i_j15d, $4kbc['fs']['readFile']({
                'filePath': xnlgy,
                'encoding': ti12_,
                'success': function (z02) {
                    rauh9 != null && rauh9['runWith']([0x0, z02]);
                },
                'fail': function (aq9gh) {
                    if (aq9gh && rqva9 != '') $4kbc['down'](rqva9, ti12_, rauh9, rqva9);else rauh9 != null && rauh9['runWith']([0x1]);
                }
            });
        }, $4kbc['readNativeFile'] = function (j5id16, _1i2ts) {
            $4kbc['fs']['readFile']({
                'filePath': j5id16,
                'encoding': '',
                'success': function (t_s0) {
                    _1i2ts != null && _1i2ts['runWith']([0x0]);
                },
                'fail': function (hpn) {
                    _1i2ts != null && _1i2ts['runWith']([0x1]);
                }
            });
        }, $4kbc['down'] = function (qr8vaw, xpnylo, kmb, t2s0_) {
            xpnylo === void 0x0 && (xpnylo = 'ascill'), t2s0_ === void 0x0 && (t2s0_ = '');
            var s23_0 = $4kbc['getFileNativePath'](t2s0_),
                wqv8f = $4kbc['wxdown']({
                'url': qr8vaw,
                'filePath': s23_0,
                'success': function (uaqh9g) {
                    if (uaqh9g['statusCode'] === 0xc8) $4kbc['readFile'](uaqh9g['filePath'], xpnylo, kmb, t2s0_);
                },
                'fail': function (s032z) {
                    kmb != null && kmb['runWith']([0x1, s032z]);
                }
            });
            wqv8f['onProgressUpdate'](function (hpgua) {
                kmb != null && kmb['runWith']([0x2, hpgua['progress']]);
            });
        }, $4kbc['readFile'] = function (qaw8rv, pxlng, w8vfqr, t3_21) {
            pxlng === void 0x0 && (pxlng = 'ascill'), t3_21 === void 0x0 && (t3_21 = ''), $4kbc['fs']['readFile']({
                'filePath': qaw8rv,
                'encoding': pxlng,
                'success': function (rqfwv8) {
                    if (qaw8rv['indexOf']('http://') != -0x1 || qaw8rv['indexOf']('https://') != -0x1) $4kbc['onFileUpdate'](qaw8rv, t3_21);
                    w8vfqr != null && w8vfqr['runWith']([0x0, rqfwv8]);
                },
                'fail': function (vf8qrw) {
                    if (vf8qrw) w8vfqr != null && w8vfqr['runWith']([0x1, vf8qrw]);
                }
            });
        }, $4kbc['downImg'] = function (_2s31, jd_ti, ur9aqh) {
            ur9aqh === void 0x0 && (ur9aqh = '');
            var q8wfv = $4kbc['wxdown']({
                'url': _2s31,
                'success': function (lnypgx) {
                    lnypgx['statusCode'] === 0xc8 && $4kbc['copyFile'](lnypgx['tempFilePath'], ur9aqh, jd_ti);
                },
                'fail': function (j$d6k) {
                    jd_ti != null && jd_ti['runWith']([0x1, j$d6k]);
                }
            });
        }, $4kbc['copyFile'] = function (m74f, dkij5, _dj1) {
            var vr9uqa = m74f['split']('/'),
                bm$4kc = vr9uqa[vr9uqa['length'] - 0x1],
                _jd1t = dkij5['split']('?')[0x0],
                h9pygu = $4kbc['getFileInfo'](dkij5),
                is12_t = $4kbc['getFileNativePath'](bm$4kc);
            $4kbc['fs']['copyFile']({
                'srcPath': m74f,
                'destPath': is12_t,
                'success': function (id_tj) {
                    if (!h9pygu) $4kbc['onSaveFile'](dkij5, bm$4kc), _dj1 != null && _dj1['runWith']([0x0]);else {
                        if (h9pygu['readyUrl'] != dkij5) $4kbc['remove'](bm$4kc, dkij5, _dj1);
                    }
                },
                'fail': function (i_5j1) {
                    _dj1 != null && _dj1['runWith']([0x1, i_5j1]);
                }
            });
        }, $4kbc['getFileNativePath'] = function (ij1d_t) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ij1d_t;
        }, $4kbc['remove'] = function (vq9aur, pnlygh, c6k$5j) {
            pnlygh === void 0x0 && (pnlygh = '');
            var _321ts = $4kbc['getFileInfo'](pnlygh),
                ngyxp = $4kbc['getFileNativePath'](_321ts['md5']);
            gnylxp['loader']['clearRes'](_321ts['readyUrl']), $4kbc['fs']['unlink']({
                'filePath': ngyxp,
                'success': function (idj_51) {
                    if (pnlygh != '') $4kbc['onSaveFile'](pnlygh, vq9aur);
                    c6k$5j != null && c6k$5j['runWith']([0x0]);
                },
                'fail': function (uravq) {}
            });
        }, $4kbc['onSaveFile'] = function (raqwv, f4mbc) {
            var mbwf78 = raqwv['split']('?')[0x0];
            $4kbc['filesListObj'][mbwf78] = {
                'md5': f4mbc,
                'readyUrl': raqwv
            }, $4kbc['fs']['writeFile']({
                'filePath': $4kbc['fileNativeDir'] + '/' + $4kbc['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify']($4kbc['filesListObj']),
                'success': function (h9raqu) {
                    console['log']('写入测试测试成功：', h9raqu);
                },
                'fail': function (u9pgyh) {
                    console['log']('写入测试测试失败：', u9pgyh);
                }
            });
        }, $4kbc['existDir'] = function (quh9a, qahu9g) {
            $4kbc['fs']['mkdir']({
                'dirPath': quh9a,
                'success': function (uyh9p) {
                    qahu9g != null && qahu9g['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (bcm4f) {
                    if (bcm4f['errMsg']['indexOf']('file already exists') != -0x1) $4kbc['readSync']($4kbc['fileListName'], 'utf8', qahu9g);else qahu9g != null && qahu9g['runWith']([0x1, bcm4f]);
                }
            });
        }, $4kbc['readSync'] = function (yopx, m8w7fb, wravu, d5$j) {
            m8w7fb === void 0x0 && (m8w7fb = 'ascill'), d5$j === void 0x0 && (d5$j = '');
            var tdi1 = $4kbc['getFileNativePath'](yopx),
                j_5;
            try {
                j_5 = $4kbc['fs']['readFileSync'](tdi1), wravu != null && wravu['runWith']([0x0, { 'data': j_5 }]);
            } catch (xoylpn) {
                wravu != null && wravu['runWith']([0x1]);
            }
        }, $4kbc['readCache'] = function () {}, $4kbc['writeCache'] = function (pnlyhg) {
            var wmf8b7 = readyUrl['split']('?')[0x0];
            $4kbc['filesListObj'][wmf8b7] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, $4kbc['fs']['writeFile']({
                'filePath': $4kbc['fileNativeDir'] + '/' + $4kbc['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify']($4kbc['filesListObj']),
                'success': function (lxpgny) {},
                'fail': function (aug9q) {}
            });
        }, $4kbc['setNativeFileDir'] = function (w8rv7f) {
            $4kbc['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + w8rv7f;
        }, $4kbc['filesListObj'] = {}, $4kbc['fileNativeDir'] = null, $4kbc['fileListName'] = 'layaairfiles.txt', $4kbc['ziyuFileData'] = {}, b7f8wm($4kbc, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), $4kbc;
    }(dti1s_),
        pynhg9 = function (_d5ij) {
        function _dst1i() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], _dst1i['__super']['call'](this), this['_sound'] = _dst1i['_createSound'](), this['_chanell'] = new _dj1ti(this['_sound']);
        }
        t_di1s(_dst1i, 'laya.wx.mini.MiniSound', _d5ij);
        var i5jd_ = _dst1i['prototype'];
        return i5jd_['load'] = function (rfw8qv) {
            var vrauq9 = this;
            rfw8qv = rwv78['formatURL'](rfw8qv), this['url'] = rfw8qv;
            if (_dst1i['_audioCache'][rfw8qv]) {
                this['event']('complete');
                return;
            }
            function m$4bk() {
                if (_dst1i['_null'] != undefined) vrauq9['_sound']['onCanplay'](_dst1i['_null']), vrauq9['_sound']['onError'](_dst1i['_null']);else try {
                    vrauq9['_sound']['onCanplay'](null), vrauq9['_sound']['onError'](null), _dst1i['_null'] = null;
                } catch (r9uva) {
                    console['warn']('[wxmini] _clearSound:' + r9uva), vrauq9['_sound']['onCanplay'](wfmv), vrauq9['_sound']['onError'](wfmv), _dst1i['_null'] = wfmv;
                }
            }
            function haqur9() {
                rwqfv['loaded'] = !![], rwqfv['event']('complete'), _dst1i['_audioCache'][rwqfv['url']] = rwqfv;
            }
            function d15_i(lgxp) {
                console['error']('errCode=' + lgxp['errCode'] + '  errMsg=' + lgxp['errMsg']), rwqfv['event']('error');
            }
            function wfmv() {}
            this['_sound']['onCanplay'](haqur9), this['_sound']['onError'](d15_i), this['_sound']['src'] = rfw8qv;
            var rwqfv = this;
        }, i5jd_['play'] = function (xpoyn, wf8m) {
            xpoyn === void 0x0 && (xpoyn = 0x0), wf8m === void 0x0 && (wf8m = 0x0);
            var z2t, j6d5ki;
            if (this['url'] == s0z3t['_tMusic']) {
                if (!_dst1i['_musicAudio']) _dst1i['_musicAudio'] = this['_sound'];
                z2t = _dst1i['_musicAudio'], j6d5ki = this['_chanell'];
            } else z2t = this['_sound'], j6d5ki = this['_chanell'];
            return z2t['src'] = this['url'], z2t['startTime'] = 0x0, j6d5ki['isStopped'] && (j6d5ki['url'] = this['url'], j6d5ki['loops'] = wf8m, j6d5ki['startTime'] = xpoyn, j6d5ki['play'](), s0z3t['addChannel'](j6d5ki)), j6d5ki;
        }, i5jd_['dispose'] = function () {
            var _213 = _dst1i['_audioCache'][this['url']];
            _213 && (_213['src'] = '', delete _dst1i['_audioCache'][this['url']]);
        }, m87vw(0x0, i5jd_, 'duration', function () {
            return this['_sound']['duration'];
        }), _dst1i['_createSound'] = function () {
            _dst1i['_id']++;
            var i5j_ = $m47bc['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return i5j_;
        }, _dst1i['_musicAudio'] = null, _dst1i['_id'] = 0x0, _dst1i['_audioCache'] = {}, _dst1i['_null'] = undefined, _dst1i;
    }(dti1s_),
        _dj1ti = function (arqvw8) {
        function jdi51(gahu9q) {
            this['_audio'] = null, this['_onEnd'] = null, jdi51['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = gahu9q, this['_onEnd'] = lnghyp['bind'](this['__onEnd'], this), gahu9q['onEnded'](this['_onEnd']);
        }
        t_di1s(jdi51, 'laya.wx.mini.MiniSoundChannel', arqvw8);
        var rqwav8 = jdi51['prototype'];
        return rqwav8['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (gnylxp['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, rqwav8['__onNull'] = function () {}, rqwav8['play'] = function () {
            this['isStopped'] = ![], s0z3t['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, rqwav8['stop'] = function () {
            this['isStopped'] = !![], s0z3t['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, rqwav8['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, rqwav8['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], s0z3t['addChannel'](this), this['_audio']['play']();
        }, m87vw(0x0, rqwav8, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), m87vw(0x0, rqwav8, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), m87vw(0x0, rqwav8, 'volume', function () {
            return 0x1;
        }, function (huy9) {}), jdi51['_null'] = undefined, jdi51;
    }(mc4bk),
        w8r7fv = function () {
        function hpua() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = $m47bc['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        t_di1s(hpua, 'laya.wx.mini.MiniVideo');
        var b6ck$4 = hpua['prototype'];
        return b6ck$4['on'] = function (phgln, pnyl, cj$6k5) {
            if (phgln == 'loadedmetadata') this['onPlayFunc'] = cj$6k5['bind'](pnyl), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else phgln == 'ended' && (this['onEndedFunC'] = cj$6k5['bind'](pnyl), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, b6ck$4['onTimeUpdateFunc'] = function (b7wm8) {
            this['position'] = b7wm8['position'], this['_duration'] = b7wm8['duration'];
        }, b6ck$4['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, b6ck$4['onended'] = function (nyhglp, bf784) {
            this['onEndedFunC'] = bf784['bind'](nyhglp), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, b6ck$4['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, b6ck$4['off'] = function (_2t30s, _di1st, $k46c) {
            if (_2t30s == 'loadedmetadata') this['onPlayFunc'] = $k46c['bind'](_di1st), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else _2t30s == 'ended' && (this['onEndedFunC'] = $k46c['bind'](_di1st), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, b6ck$4['load'] = function (jk5) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = jk5;
        }, b6ck$4['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, b6ck$4['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, b6ck$4['size'] = function (mcb$4k, aqrv9u) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = mcb$4k, this['videoElement']['height'] = aqrv9u;
        }, b6ck$4['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, b6ck$4['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, m87vw(0x0, b6ck$4, 'duration', function () {
            return this['_duration'];
        }), m87vw(0x0, b6ck$4, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function ($6cjk) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = $6cjk;
        }), m87vw(0x0, b6ck$4, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), m87vw(0x0, b6ck$4, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), m87vw(0x0, b6ck$4, 'ended', function () {
            return this['videoend'];
        }), m87vw(0x0, b6ck$4, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function ($7c4m) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = $7c4m;
        }), m87vw(0x0, b6ck$4, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (mw8bf7) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = mw8bf7;
        }), m87vw(0x0, b6ck$4, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function ($cmk4b) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = $cmk4b;
        }), m87vw(0x0, b6ck$4, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), m87vw(0x0, b6ck$4, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (c6b$k) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = c6b$k;
        }), m87vw(0x0, b6ck$4, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (rv9ua) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = rv9ua;
        }), m87vw(0x0, b6ck$4, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), m87vw(0x0, b6ck$4, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function ($7mb4) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = $7mb4;
        }), m87vw(0x0, b6ck$4, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (v8rw7) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = v8rw7;
        }), m87vw(0x0, b6ck$4, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (hug9aq) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = hug9aq;
        }), hpua;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var ra9vu in Laya) {
        var ghau9p = Laya[ra9vu];
        ghau9p && ghau9p['__isclass'] && (exports[ra9vu] = ghau9p);
    }
});