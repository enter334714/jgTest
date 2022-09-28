var b = wx.$e;
(function (window, document, tj) {
    var rlgthx = tj['un'],
        w05b8d = tj['uns'],
        xrtg = tj['static'],
        omc7p = tj['class'],
        fvzr4y = tj['getset'],
        w5b08 = tj['__newvec'],
        fy_v74 = laya['utils']['Browser'],
        zlyhf = laya['events']['Event'],
        nqsu = laya['events']['EventDispatcher'],
        sub6 = laya['resource']['HTMLImage'],
        k9bu = laya['utils']['Handler'],
        rgzth = laya['display']['Input'],
        zhtyr = laya['net']['Loader'],
        w058db = laya['maths']['Matrix'],
        db5k = laya['renders']['Render'],
        rghtlz = laya['utils']['RunDriver'],
        b560kd = laya['media']['Sound'],
        mc4_a7 = laya['media']['SoundChannel'],
        y_f74v = laya['media']['SoundManager'],
        rfzh = laya['display']['Stage'],
        k05 = laya['net']['URL'],
        w218d5 = laya['utils']['Utils'],
        mc4 = function () {
        function _z4yvf() {}
        return omc7p(_z4yvf, 'laya.wx.mini.MiniAdpter'), _z4yvf['getJson'] = function (lzhty) {
            return JSON['parse'](lzhty);
        }, _z4yvf['init'] = function (k05d6, tigx) {
            k05d6 === void 0x0 && (k05d6 = ![]), tigx === void 0x0 && (tigx = ![]);
            if (_z4yvf['_inited']) return;
            _z4yvf['window'] = window;
            if (_z4yvf['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            _z4yvf['_inited'] = !![], _z4yvf['isZiYu'] = tigx, _z4yvf['isPosMsgYu'] = k05d6, _z4yvf['EnvConfig'] = {}, !_z4yvf['isZiYu'] && (opca7m['setNativeFileDir']('/layaairGame'), opca7m['existDir'](opca7m['fileNativeDir'], k9bu['create'](_z4yvf, _z4yvf['onMkdirCallBack']))), _z4yvf['window']['focus'] = function () {}, tj['getUrlPath'] = function () {}, _z4yvf['window']['logtime'] = function ($hgtxl) {}, _z4yvf['window']['alertTimeLog'] = function (njs3qu) {}, _z4yvf['window']['resetShareInfo'] = function () {}, _z4yvf['window']['CanvasRenderingContext2D'] = function () {}, _z4yvf['window']['CanvasRenderingContext2D']['prototype'] = _z4yvf['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], _z4yvf['window']['document']['body']['appendChild'] = function () {}, _z4yvf['EnvConfig']['pixelRatioInt'] = 0x0, rghtlz['getPixelRatio'] = _z4yvf['pixelRatio'], _z4yvf['_preCreateElement'] = fy_v74['createElement'], fy_v74['createElement'] = _z4yvf['createElement'], rghtlz['createShaderCondition'] = _z4yvf['createShaderCondition'], w218d5['parseXMLFromString'] = _z4yvf['parseXMLFromString'], rgzth['_createInputElement'] = l$ghxt['_createInputElement'], _z4yvf['EnvConfig']['load'] = zhtyr['prototype']['load'], zhtyr['prototype']['load'] = lgt$hx['prototype']['load'], _z4yvf['isZiYu'] && k05d6 && wx['onMessage'](function (a7_4mc) {
                a7_4mc['isLoad'] && (opca7m['ziyuFileData'][a7_4mc['url']] = a7_4mc['data']);
            });
        }, _z4yvf['onMkdirCallBack'] = function (glti$, bk90) {
            if (!glti$) opca7m['filesListObj'] = JSON['parse'](bk90['data']);
        }, _z4yvf['pixelRatio'] = function () {
            if (!_z4yvf['EnvConfig']['pixelRatioInt']) try {
                var xtjgi$ = wx['getSystemInfoSync']();
                return _z4yvf['EnvConfig']['pixelRatioInt'] = xtjgi$['pixelRatio'], xtjgi$ = xtjgi$, xtjgi$['pixelRatio'];
            } catch (nj3qiu) {}
            return _z4yvf['EnvConfig']['pixelRatioInt'];
        }, _z4yvf['createElement'] = function (uqsk9n) {
            if (uqsk9n == 'canvas') {
                var hzyrv;
                return _z4yvf['idx'] == 0x1 ? _z4yvf['isZiYu'] ? (hzyrv = sharedCanvas, hzyrv['style'] = {}) : hzyrv = window['canvas'] : hzyrv = window['wx']['createCanvas'](), _z4yvf['idx']++, hzyrv;
            } else {
                if (uqsk9n == 'textarea' || uqsk9n == 'input') return _z4yvf['onCreateInput'](uqsk9n);else {
                    if (uqsk9n == 'div') {
                        var tli$ = _z4yvf['_preCreateElement'](uqsk9n);
                        return tli$['contains'] = function (snqju) {
                            return null;
                        }, tli$['removeChild'] = function (iuq3j) {}, tli$;
                    } else return _z4yvf['_preCreateElement'](uqsk9n);
                }
            }
        }, _z4yvf['onCreateInput'] = function ($jg3i) {
            var kb9 = _z4yvf['_preCreateElement']($jg3i);
            return kb9['focus'] = l$ghxt['wxinputFocus'], kb9['blur'] = l$ghxt['wxinputblur'], kb9['style'] = {}, kb9['value'] = 0x0, kb9['parentElement'] = {}, kb9['placeholder'] = {}, kb9['type'] = {}, kb9['setColor'] = function (j3$gxi) {}, kb9['setType'] = function (av_m47) {}, kb9['setFontFace'] = function (wd5218) {}, kb9['addEventListener'] = function (m4a7) {}, kb9['contains'] = function (jgxi$) {
                return null;
            }, kb9['removeChild'] = function (xj$q3) {}, kb9;
        }, _z4yvf['createShaderCondition'] = function (sk09) {
            var ztlhry = this,
                rz4vfy = function () {
                var x3$jg = sk09;
                return ztlhry[sk09['replace']('this.', '')];
            };
            return rz4vfy;
        }, _z4yvf['EnvConfig'] = null, _z4yvf['window'] = null, _z4yvf['_preCreateElement'] = null, _z4yvf['_inited'] = ![], _z4yvf['wxRequest'] = null, _z4yvf['systemInfo'] = null, _z4yvf['version'] = '0.0.1', _z4yvf['isZiYu'] = ![], _z4yvf['isPosMsgYu'] = ![], _z4yvf['parseXMLFromString'] = function (nqj3s) {
            var fyz, opam;
            nqj3s = nqj3s['replace'](/>\s+</g, '><');
            try {
                fyz = new window['Parser']['DOMParser']()['parseFromString'](nqj3s, 'text/xml');
            } catch (tyl) {
                throw '需要引入xml解析库文件';
            }
            return fyz;
        }, _z4yvf['idx'] = 0x1, _z4yvf;
    }(),
        _yv4f7 = function () {
        function lgrht() {}
        omc7p(lgrht, 'laya.wx.mini.MiniImage');
        var unqjs = lgrht['prototype'];
        return unqjs['_loadImage'] = function (fhly) {
            var s0kb6 = this,
                usk96 = ![];
            fhly['indexOf']('layaNativeDir/') == -0x1 && (usk96 = !![], fhly = k05['formatURL'](fhly));
            if (!opca7m['getFileInfo'](fhly)) {
                if (fhly['indexOf']('http://') != -0x1 || fhly['indexOf']('https://') != -0x1) opca7m['downImg'](fhly, new k9bu(lgrht, lgrht['onDownImgCallBack'], [fhly, s0kb6]), fhly);else lgrht['onCreateImage'](fhly, s0kb6, !![]);
            } else lgrht['onCreateImage'](fhly, s0kb6, !usk96);
        }, lgrht['onDownImgCallBack'] = function (trhlz, tgjxi$, u3iq) {
            if (!u3iq) lgrht['onCreateImage'](trhlz, tgjxi$);else tgjxi$['onError'](null);
        }, lgrht['onCreateImage'] = function (_a47vf, ti$xlg, lzthr) {
            lzthr === void 0x0 && (lzthr = ![]);
            var opaec;
            if (!lzthr) {
                var rlxhg = opca7m['getFileInfo'](_a47vf),
                    frv4yz = rlxhg['md5'];
                opaec = opca7m['getFileNativePath'](frv4yz);
            } else opaec = _a47vf;
            if (ti$xlg['imgCache'] == null) ti$xlg['imgCache'] = {};
            var q3i$jn;
            function lhyrzt() {
                q3i$jn['onload'] = null, q3i$jn['onerror'] = null, delete ti$xlg['imgCache'][_a47vf];
            }
            ;
            var b0k5 = function () {
                lhyrzt(), ti$xlg['onLoaded'](q3i$jn);
            },
                q$j3ix = function () {
                lhyrzt(), ti$xlg['event']('error', 'Load image failed');
            };
            ti$xlg['_type'] == 'nativeimage' ? (q3i$jn = new fy_v74['window']['Image'](), q3i$jn['crossOrigin'] = '', q3i$jn['onload'] = b0k5, q3i$jn['onerror'] = q$j3ix, q3i$jn['src'] = opaec, ti$xlg['imgCache'][_a47vf] = q3i$jn) : new sub6['create'](opaec, {
                'onload': b0k5,
                'onerror': q$j3ix,
                'onCreate': function (_y4zvf) {
                    q3i$jn = _y4zvf, ti$xlg['imgCache'][_a47vf] = _y4zvf;
                }
            });
        }, lgrht;
    }(),
        l$ghxt = function () {
        function hrfzly() {}
        return omc7p(hrfzly, 'laya.wx.mini.MiniInput'), hrfzly['_createInputElement'] = function () {
            rgzth['_initInput'](rgzth['area'] = fy_v74['createElement']('textarea')), rgzth['_initInput'](rgzth['input'] = fy_v74['createElement']('input')), rgzth['inputContainer'] = fy_v74['createElement']('div'), rgzth['inputContainer']['style']['position'] = 'absolute', rgzth['inputContainer']['style']['zIndex'] = 0x186a0, fy_v74['container']['appendChild'](rgzth['inputContainer']), rgzth['inputContainer']['setPos'] = function (gi3j$x, hzlyf) {
                rgzth['inputContainer']['style']['left'] = gi3j$x + 'px', rgzth['inputContainer']['style']['top'] = hzlyf + 'px';
            }, tj['stage']['on']('resize', null, hrfzly['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (sun6k9) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), y_f74v['_soundClass'] = c_ao7m, y_f74v['_musicClass'] = c_ao7m, window['_videoClass'] = g$xhtl;
        }, hrfzly['_onStageResize'] = function () {
            var thx$ = tj['stage']['_canvasTransform']['identity']();
            thx$['scale'](fy_v74['width'] / db5k['canvas']['width'] / rghtlz['getPixelRatio'](), fy_v74['height'] / db5k['canvas']['height'] / rghtlz['getPixelRatio']());
        }, hrfzly['wxinputFocus'] = function ($3qjxi) {
            var a74cm_ = rgzth['inputElement']['target'];
            if (a74cm_ && !a74cm_['editable']) return;
            mc4['window']['wx']['offKeyboardConfirm'](), mc4['window']['wx']['offKeyboardInput'](), mc4['window']['wx']['showKeyboard']({
                'defaultValue': a74cm_['text'],
                'maxLength': a74cm_['maxChars'],
                'multiple': a74cm_['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (zlyfr) {},
                'fail': function (i$3qjn) {}
            }), mc4['window']['wx']['onKeyboardConfirm'](function (hfrvzy) {
                var m7a_4 = hfrvzy ? hfrvzy['value'] : '';
                a74cm_['text'] = m7a_4, a74cm_['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), mc4['window']['wx']['onKeyboardInput'](function (dk6b05) {
                var omeac = dk6b05 ? dk6b05['value'] : '';
                if (!a74cm_['multiline']) {
                    if (omeac['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                a74cm_['text'] = omeac, a74cm_['event']('input');
            });
        }, hrfzly['inputEnter'] = function () {
            rgzth['inputElement']['target']['focus'] = ![];
        }, hrfzly['wxinputblur'] = function () {
            hrfzly['hideKeyboard']();
        }, hrfzly['hideKeyboard'] = function () {
            mc4['window']['wx']['offKeyboardConfirm'](), mc4['window']['wx']['offKeyboardInput'](), mc4['window']['wx']['hideKeyboard']({
                'success': function (n3squj) {
                    console['log']('隐藏键盘');
                },
                'fail': function (v4_) {
                    console['log']('隐藏键盘出错:' + (v4_ ? v4_['errMsg'] : ''));
                }
            });
        }, hrfzly;
    }(),
        lgt$hx = function () {
        function hzrly() {}
        omc7p(hzrly, 'laya.wx.mini.MiniLoader');
        var lzgh = hzrly['prototype'];
        return lzgh['load'] = function (zryhfl, gtlhx, vzhfyr, d8512w, gi$tx) {
            vzhfyr === void 0x0 && (vzhfyr = !![]), gi$tx === void 0x0 && (gi$tx = ![]);
            var mp7oc = this;
            mp7oc['_url'] = zryhfl;
            if (zryhfl['indexOf']('data:image') === 0x0) mp7oc['_type'] = gtlhx = 'image';else mp7oc['_type'] = gtlhx || (gtlhx = mp7oc['getTypeFromUrl'](zryhfl));
            mp7oc['_cache'] = vzhfyr, mp7oc['_data'] = null;
            var zf4y = 'ascii';
            if (zryhfl['indexOf']('.fnt') != -0x1) zf4y = 'utf8';else gtlhx == 'arraybuffer' && (zf4y = '');
            ;
            var yrlhzf = w218d5['getFileExtension'](zryhfl);
            if (hzrly['_fileTypeArr']['indexOf'](yrlhzf) != -0x1) mc4['EnvConfig']['load']['call'](this, zryhfl, gtlhx, vzhfyr, d8512w, gi$tx);else {
                if (!opca7m['getFileInfo'](zryhfl)) {
                    if (zryhfl['indexOf']('layaNativeDir/') != -0x1) {
                        if (mc4['isZiYu']) {
                            var dw08 = opca7m['ziyuFileData'][zryhfl];
                            mp7oc['onLoaded'](dw08);
                            return;
                        } else {
                            cosnole['log']('read read'), opca7m['read'](zryhfl, zf4y, new k9bu(hzrly, hzrly['onReadNativeCallBack'], [zf4y, zryhfl, gtlhx, vzhfyr, d8512w, gi$tx, mp7oc]));
                            return;
                        }
                    }
                    if (k05['rootPath'] == '') var ap7c = zryhfl;else ap7c = zryhfl['split'](k05['rootPath'])[0x0];
                    zryhfl['indexOf']('http://') != -0x1 || zryhfl['indexOf']('https://') != -0x1 ? mc4['EnvConfig']['load']['call'](mp7oc, zryhfl, gtlhx, vzhfyr, d8512w, gi$tx) : opca7m['readFile'](ap7c, zf4y, new k9bu(hzrly, hzrly['onReadNativeCallBack'], [zf4y, zryhfl, gtlhx, vzhfyr, d8512w, gi$tx, mp7oc]), zryhfl);
                } else mc4['EnvConfig']['load']['call'](this, zryhfl, gtlhx, vzhfyr, d8512w, gi$tx);
            }
        }, lzgh['resMgrLoad'] = function (s9k, ji$xg3, ilx$gt, yz_v4, poac, qjinu3, w5d0b8) {
            ilx$gt === void 0x0 && (ilx$gt = 0x0), yz_v4 === void 0x0 && (yz_v4 = ![]), poac === void 0x0 && (poac = ![]), qjinu3 === void 0x0 && (qjinu3 = 0x0), w5d0b8 === void 0x0 && (w5d0b8 = 0x3), s9k['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', s9k), mc4['EnvConfig']['resMgrLoad'](s9k, (mcoea, s6buk, hvzfr) => {
                hzrly['prototype']['resMgrLoadCallBack'](mcoea, s6buk, hvzfr, ji$xg3);
            }, ilx$gt, yz_v4, poac, qjinu3, w5d0b8);
        }, lzgh['resMgrLoadCallBack'] = function (c_7oma, q$x, zyh, cmopa) {
            console['log']('buff:::', c_7oma, zyh, opca7m['fileNativeDir'] + '///' + opca7m['fileListName']), cmopa(c_7oma, q$x, zyh);
        }, lzgh['clearRes'] = function (txj, xl$hgt) {
            xl$hgt === void 0x0 && (xl$hgt = ![]);
            var eoacmp = this;
            eoacmp['clearRes'](txj, xl$hgt);
            var ztgh = opca7m['getFileInfo'](txj);
            if (ztgh && (txj['indexOf']('http://') != -0x1 || txj['indexOf']('https://') != -0x1)) {
                var ghzt = ztgh['md5'],
                    kusb96 = opca7m['getFileNativePath'](ghzt);
                opca7m['remove'](kusb96);
            }
        }, hzrly['onReadNativeCallBack'] = function (sb90k, k9ubs6, aepo, cao7_, ryzlth, y4zrv, zfvyh, a_c, moea) {
            cao7_ === void 0x0 && (cao7_ = !![]), y4zrv === void 0x0 && (y4zrv = ![]), a_c === void 0x0 && (a_c = 0x0);
            if (!a_c) {
                var _4vyf;
                if (aepo == 'json' || aepo == 'atlas') _4vyf = mc4['getJson'](moea['data']);else aepo == 'xml' ? _4vyf = w218d5['parseXMLFromString'](moea['data']) : _4vyf = moea['data'];
                zfvyh['onLoaded'](_4vyf), !mc4['isZiYu'] && mc4['isPosMsgYu'] && aepo != 'arraybuffer' && wx['postMessage']({
                    'url': k9ubs6,
                    'data': _4vyf,
                    'isLoad': !![]
                });
            } else a_c == 0x1 && mc4['EnvConfig']['load']['call'](zfvyh, k9ubs6, aepo, cao7_, ryzlth, y4zrv);
        }, xrtg(hzrly, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), hzrly;
    }(),
        opca7m = function (nj3squ) {
        function j$gtxi() {
            j$gtxi['__super']['call'](this);
            ;
        }
        return omc7p(j$gtxi, 'laya.wx.mini.MiniFileMgr', nj3squ), j$gtxi['isLoadFile'] = function (b56k) {
            return j$gtxi['_fileTypeArr']['indexOf'](b56k) != -0x1 ? !![] : ![];
        }, j$gtxi['getFileInfo'] = function (a4_7m) {
            var qusnj3 = a4_7m['split']('?')[0x0],
                d580bw = j$gtxi['filesListObj'][qusnj3];
            if (d580bw == null) return null;else return d580bw;
            return null;
        }, j$gtxi['onFileUpdate'] = function (wd825, $gjxt) {
            var vz4fry = wd825['split']('/'),
                c7apmo = vz4fry[vz4fry['length'] - 0x1],
                uqns39 = j$gtxi['getFileInfo']($gjxt);
            if (uqns39 == null) j$gtxi['onSaveFile']($gjxt, c7apmo);else {
                if (uqns39['readyUrl'] != $gjxt) j$gtxi['remove'](c7apmo, $gjxt);
            }
        }, j$gtxi['exits'] = function (hrlzty, x$thl) {
            var $hgtlx = j$gtxi['getFileNativePath'](hrlzty);
            j$gtxi['fs']['getFileInfo']({
                'filePath': $hgtlx,
                'success': function (mva74) {
                    x$thl != null && x$thl['runWith']([0x0, mva74]);
                },
                'fail': function (peoac) {
                    x$thl != null && x$thl['runWith']([0x1, peoac]);
                }
            });
        }, j$gtxi['read'] = function (rzhytl, t$ilg, hvzryf, mv74_) {
            t$ilg === void 0x0 && (t$ilg = 'ascill'), mv74_ === void 0x0 && (mv74_ = '');
            var va7_;
            mv74_ != '' ? va7_ = j$gtxi['getFileNativePath'](rzhytl) : va7_ = rzhytl, j$gtxi['fs']['readFile']({
                'filePath': va7_,
                'encoding': t$ilg,
                'success': function (uji3) {
                    hvzryf != null && hvzryf['runWith']([0x0, uji3]);
                },
                'fail': function (squjn3) {
                    if (squjn3 && mv74_ != '') j$gtxi['down'](mv74_, t$ilg, hvzryf, mv74_);else hvzryf != null && hvzryf['runWith']([0x1]);
                }
            });
        }, j$gtxi['readNativeFile'] = function (j3iqx$, fyrlzh) {
            j$gtxi['fs']['readFile']({
                'filePath': j3iqx$,
                'encoding': '',
                'success': function (_4fv7) {
                    fyrlzh != null && fyrlzh['runWith']([0x0]);
                },
                'fail': function (frhl) {
                    fyrlzh != null && fyrlzh['runWith']([0x1]);
                }
            });
        }, j$gtxi['down'] = function (n3sq, lhyrt, jg$ix3, lyfrhz) {
            lhyrt === void 0x0 && (lhyrt = 'ascill'), lyfrhz === void 0x0 && (lyfrhz = '');
            var rtxlg = j$gtxi['getFileNativePath'](lyfrhz),
                m74av = j$gtxi['wxdown']({
                'url': n3sq,
                'filePath': rtxlg,
                'success': function (lixtg) {
                    if (lixtg['statusCode'] === 0xc8) j$gtxi['readFile'](lixtg['filePath'], lhyrt, jg$ix3, lyfrhz);
                },
                'fail': function (k05b) {
                    jg$ix3 != null && jg$ix3['runWith']([0x1, k05b]);
                }
            });
            m74av['onProgressUpdate'](function (qnjs3) {
                jg$ix3 != null && jg$ix3['runWith']([0x2, qnjs3['progress']]);
            });
        }, j$gtxi['readFile'] = function (rhvzy, thlr, sb06k9, oca7_) {
            thlr === void 0x0 && (thlr = 'ascill'), oca7_ === void 0x0 && (oca7_ = ''), j$gtxi['fs']['readFile']({
                'filePath': rhvzy,
                'encoding': thlr,
                'success': function (zf_4vy) {
                    if (rhvzy['indexOf']('http://') != -0x1 || rhvzy['indexOf']('https://') != -0x1) j$gtxi['onFileUpdate'](rhvzy, oca7_);
                    sb06k9 != null && sb06k9['runWith']([0x0, zf_4vy]);
                },
                'fail': function (kb06d9) {
                    if (kb06d9) sb06k9 != null && sb06k9['runWith']([0x1, kb06d9]);
                }
            });
        }, j$gtxi['downImg'] = function ($xgli, ocm_, a7_4mv) {
            a7_4mv === void 0x0 && (a7_4mv = '');
            var lhrytz = j$gtxi['wxdown']({
                'url': $xgli,
                'success': function (lhtg$) {
                    lhtg$['statusCode'] === 0xc8 && j$gtxi['copyFile'](lhtg$['tempFilePath'], a7_4mv, ocm_);
                },
                'fail': function (hrgztl) {
                    ocm_ != null && ocm_['runWith']([0x1, hrgztl]);
                }
            });
        }, j$gtxi['copyFile'] = function (w02, ytzhlr, mapc7o) {
            var thlryz = w02['split']('/'),
                uinq3j = thlryz[thlryz['length'] - 0x1],
                qsku = ytzhlr['split']('?')[0x0],
                jinqu = j$gtxi['getFileInfo'](ytzhlr),
                ji$q3 = j$gtxi['getFileNativePath'](uinq3j);
            j$gtxi['fs']['copyFile']({
                'srcPath': w02,
                'destPath': ji$q3,
                'success': function (j3niu) {
                    if (!jinqu) j$gtxi['onSaveFile'](ytzhlr, uinq3j), mapc7o != null && mapc7o['runWith']([0x0]);else {
                        if (jinqu['readyUrl'] != ytzhlr) j$gtxi['remove'](uinq3j, ytzhlr, mapc7o);
                    }
                },
                'fail': function (poec) {
                    mapc7o != null && mapc7o['runWith']([0x1, poec]);
                }
            });
        }, j$gtxi['getFileNativePath'] = function (f4zv_) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + f4zv_;
        }, j$gtxi['remove'] = function (k6db9, s9k6u, w2d058) {
            s9k6u === void 0x0 && (s9k6u = '');
            var ltxgh$ = j$gtxi['getFileInfo'](s9k6u),
                f4_7v = j$gtxi['getFileNativePath'](ltxgh$['md5']);
            tj['loader']['clearRes'](ltxgh$['readyUrl']), j$gtxi['fs']['unlink']({
                'filePath': f4_7v,
                'success': function (g$til) {
                    if (s9k6u != '') j$gtxi['onSaveFile'](s9k6u, k6db9);
                    w2d058 != null && w2d058['runWith']([0x0]);
                },
                'fail': function (lgh$xt) {}
            });
        }, j$gtxi['onSaveFile'] = function (gtlx$, skbu6) {
            var kb056 = gtlx$['split']('?')[0x0];
            j$gtxi['filesListObj'][kb056] = {
                'md5': skbu6,
                'readyUrl': gtlx$
            }, j$gtxi['fs']['writeFile']({
                'filePath': j$gtxi['fileNativeDir'] + '/' + j$gtxi['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](j$gtxi['filesListObj']),
                'success': function (zrhlg) {
                    console['log']('写入测试测试成功：', zrhlg);
                },
                'fail': function (c7mop) {
                    console['log']('写入测试测试失败：', c7mop);
                }
            });
        }, j$gtxi['existDir'] = function (f4a_, ompce) {
            j$gtxi['fs']['mkdir']({
                'dirPath': f4a_,
                'success': function (b6d90k) {
                    ompce != null && ompce['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (us6k) {
                    if (us6k['errMsg']['indexOf']('file already exists') != -0x1) j$gtxi['readSync'](j$gtxi['fileListName'], 'utf8', ompce);else ompce != null && ompce['runWith']([0x1, us6k]);
                }
            });
        }, j$gtxi['readSync'] = function (pemoac, ji$g3x, lxg$it, v74yf_) {
            ji$g3x === void 0x0 && (ji$g3x = 'ascill'), v74yf_ === void 0x0 && (v74yf_ = '');
            var ocm7_ = j$gtxi['getFileNativePath'](pemoac),
                s6kb;
            try {
                s6kb = j$gtxi['fs']['readFileSync'](ocm7_), lxg$it != null && lxg$it['runWith']([0x0, { 'data': s6kb }]);
            } catch (lh$gtx) {
                lxg$it != null && lxg$it['runWith']([0x1]);
            }
        }, j$gtxi['readCache'] = function () {}, j$gtxi['writeCache'] = function (vf_y) {
            var yzrvfh = readyUrl['split']('?')[0x0];
            j$gtxi['filesListObj'][yzrvfh] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, j$gtxi['fs']['writeFile']({
                'filePath': j$gtxi['fileNativeDir'] + '/' + j$gtxi['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](j$gtxi['filesListObj']),
                'success': function ($hxtl) {},
                'fail': function (n$3j) {}
            });
        }, j$gtxi['setNativeFileDir'] = function (a4c7_m) {
            j$gtxi['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + a4c7_m;
        }, j$gtxi['filesListObj'] = {}, j$gtxi['fileNativeDir'] = null, j$gtxi['fileListName'] = 'layaairfiles.txt', j$gtxi['ziyuFileData'] = {}, xrtg(j$gtxi, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), j$gtxi;
    }(nqsu),
        c_ao7m = function (w1d5) {
        function rlzhyt() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], rlzhyt['__super']['call'](this), this['_sound'] = rlzhyt['_createSound'](), this['_chanell'] = new ixj(this['_sound']);
        }
        omc7p(rlzhyt, 'laya.wx.mini.MiniSound', w1d5);
        var unqs93 = rlzhyt['prototype'];
        return unqs93['load'] = function (hgxtr) {
            var vyzr4f = this;
            hgxtr = k05['formatURL'](hgxtr), this['url'] = hgxtr;
            if (rlzhyt['_audioCache'][hgxtr]) {
                this['event']('complete');
                return;
            }
            function q$n3ij() {
                if (rlzhyt['_null'] != undefined) vyzr4f['_sound']['onCanplay'](rlzhyt['_null']), vyzr4f['_sound']['onError'](rlzhyt['_null']);else try {
                    vyzr4f['_sound']['onCanplay'](null), vyzr4f['_sound']['onError'](null), rlzhyt['_null'] = null;
                } catch (b0s96) {
                    console['warn']('[wxmini] _clearSound:' + b0s96), vyzr4f['_sound']['onCanplay'](jxgi), vyzr4f['_sound']['onError'](jxgi), rlzhyt['_null'] = jxgi;
                }
            }
            function qs3u9() {
                k9db06['loaded'] = !![], k9db06['event']('complete'), rlzhyt['_audioCache'][k9db06['url']] = k9db06;
            }
            function _4vz(x$ij3) {
                console['error']('errCode=' + x$ij3['errCode'] + '  errMsg=' + x$ij3['errMsg']), k9db06['event']('error');
            }
            function jxgi() {}
            this['_sound']['onCanplay'](qs3u9), this['_sound']['onError'](_4vz), this['_sound']['src'] = hgxtr;
            var k9db06 = this;
        }, unqs93['play'] = function (mp7co, uk9qsn) {
            mp7co === void 0x0 && (mp7co = 0x0), uk9qsn === void 0x0 && (uk9qsn = 0x0);
            var t$glxi, fv_4zy;
            if (this['url'] == y_f74v['_tMusic']) {
                if (!rlzhyt['_musicAudio']) rlzhyt['_musicAudio'] = this['_sound'];
                t$glxi = rlzhyt['_musicAudio'], fv_4zy = this['_chanell'];
            } else t$glxi = this['_sound'], fv_4zy = this['_chanell'];
            return t$glxi['src'] = this['url'], t$glxi['startTime'] = 0x0, fv_4zy['isStopped'] && (fv_4zy['url'] = this['url'], fv_4zy['loops'] = uk9qsn, fv_4zy['startTime'] = mp7co, fv_4zy['play'](), y_f74v['addChannel'](fv_4zy)), fv_4zy;
        }, unqs93['dispose'] = function () {
            var rhglt = rlzhyt['_audioCache'][this['url']];
            rhglt && (rhglt['src'] = '', delete rlzhyt['_audioCache'][this['url']]);
        }, fvzr4y(0x0, unqs93, 'duration', function () {
            return this['_sound']['duration'];
        }), rlzhyt['_createSound'] = function () {
            rlzhyt['_id']++;
            var gltix$ = mc4['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return gltix$;
        }, rlzhyt['_musicAudio'] = null, rlzhyt['_id'] = 0x0, rlzhyt['_audioCache'] = {}, rlzhyt['_null'] = undefined, rlzhyt;
    }(nqsu),
        ixj = function (xhtlg$) {
        function qkn(iq$jx3) {
            this['_audio'] = null, this['_onEnd'] = null, qkn['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = iq$jx3, this['_onEnd'] = w218d5['bind'](this['__onEnd'], this), iq$jx3['onEnded'](this['_onEnd']);
        }
        omc7p(qkn, 'laya.wx.mini.MiniSoundChannel', xhtlg$);
        var qs3nu9 = qkn['prototype'];
        return qs3nu9['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (tj['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, qs3nu9['__onNull'] = function () {}, qs3nu9['play'] = function () {
            this['isStopped'] = ![], y_f74v['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, qs3nu9['stop'] = function () {
            this['isStopped'] = !![], y_f74v['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, qs3nu9['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, qs3nu9['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], y_f74v['addChannel'](this), this['_audio']['play']();
        }, fvzr4y(0x0, qs3nu9, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), fvzr4y(0x0, qs3nu9, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), fvzr4y(0x0, qs3nu9, 'volume', function () {
            return 0x1;
        }, function (xhlr) {}), qkn['_null'] = undefined, qkn;
    }(mc4_a7),
        g$xhtl = function () {
        function bd0k56() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = mc4['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        omc7p(bd0k56, 'laya.wx.mini.MiniVideo');
        var c7om_a = bd0k56['prototype'];
        return c7om_a['on'] = function (z_yvf, empao, usk69b) {
            if (z_yvf == 'loadedmetadata') this['onPlayFunc'] = usk69b['bind'](empao), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else z_yvf == 'ended' && (this['onEndedFunC'] = usk69b['bind'](empao), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, c7om_a['onTimeUpdateFunc'] = function (kub) {
            this['position'] = kub['position'], this['_duration'] = kub['duration'];
        }, c7om_a['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, c7om_a['onended'] = function (vfry, k65d0b) {
            this['onEndedFunC'] = k65d0b['bind'](vfry), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, c7om_a['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, c7om_a['off'] = function (fhyrzl, nsu3qj, s96knu) {
            if (fhyrzl == 'loadedmetadata') this['onPlayFunc'] = s96knu['bind'](nsu3qj), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else fhyrzl == 'ended' && (this['onEndedFunC'] = s96knu['bind'](nsu3qj), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, c7om_a['load'] = function (u9nsq) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = u9nsq;
        }, c7om_a['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, c7om_a['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, c7om_a['size'] = function (lytzr, _47avf) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = lytzr, this['videoElement']['height'] = _47avf;
        }, c7om_a['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, c7om_a['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, fvzr4y(0x0, c7om_a, 'duration', function () {
            return this['_duration'];
        }), fvzr4y(0x0, c7om_a, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (ghtrlx) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = ghtrlx;
        }), fvzr4y(0x0, c7om_a, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), fvzr4y(0x0, c7om_a, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), fvzr4y(0x0, c7om_a, 'ended', function () {
            return this['videoend'];
        }), fvzr4y(0x0, c7om_a, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (k5bd0) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = k5bd0;
        }), fvzr4y(0x0, c7om_a, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (tzrgl) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = tzrgl;
        }), fvzr4y(0x0, c7om_a, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (emopca) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = emopca;
        }), fvzr4y(0x0, c7om_a, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), fvzr4y(0x0, c7om_a, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (itg$j) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = itg$j;
        }), fvzr4y(0x0, c7om_a, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (u3jqs) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = u3jqs;
        }), fvzr4y(0x0, c7om_a, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), fvzr4y(0x0, c7om_a, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (tlhryz) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = tlhryz;
        }), fvzr4y(0x0, c7om_a, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function ($qi3) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = $qi3;
        }), fvzr4y(0x0, c7om_a, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (lzhgt) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = lzhgt;
        }), bd0k56;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var ompec in Laya) {
        var opamc = Laya[ompec];
        opamc && opamc['__isclass'] && (exports[ompec] = opamc);
    }
});