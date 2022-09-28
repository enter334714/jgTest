var b = wx.$e;
(function (window, document, _4mc) {
    var nqi3$j = _4mc['un'],
        xi$gl = _4mc['uns'],
        _c7am = _4mc['static'],
        xjg = _4mc['class'],
        quk9ns = _4mc['getset'],
        i$j3gx = _4mc['__newvec'],
        hylz = laya['utils']['Browser'],
        k6su9b = laya['events']['Event'],
        cmae = laya['events']['EventDispatcher'],
        j$qn3i = laya['resource']['HTMLImage'],
        lgrtx = laya['utils']['Handler'],
        rvzyf = laya['display']['Input'],
        capm7o = laya['net']['Loader'],
        yrvfz = laya['maths']['Matrix'],
        xlg$it = laya['renders']['Render'],
        snuq9 = laya['utils']['RunDriver'],
        lhrztg = laya['media']['Sound'],
        tlhx$ = laya['media']['SoundChannel'],
        uq3n9 = laya['media']['SoundManager'],
        xq$i3j = laya['display']['Stage'],
        _com7a = laya['net']['URL'],
        kb0d65 = laya['utils']['Utils'],
        tixl$g = function () {
        function hrvyz() {}
        return xjg(hrvyz, 'laya.wx.mini.MiniAdpter'), hrvyz['getJson'] = function (lzyr) {
            return JSON['parse'](lzyr);
        }, hrvyz['init'] = function (nskuq9, tgzrhl) {
            nskuq9 === void 0x0 && (nskuq9 = ![]), tgzrhl === void 0x0 && (tgzrhl = ![]);
            if (hrvyz['_inited']) return;
            hrvyz['window'] = window;
            if (hrvyz['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            hrvyz['_inited'] = !![], hrvyz['isZiYu'] = tgzrhl, hrvyz['isPosMsgYu'] = nskuq9, hrvyz['EnvConfig'] = {}, !hrvyz['isZiYu'] && ($gixj3['setNativeFileDir']('/layaairGame'), $gixj3['existDir']($gixj3['fileNativeDir'], lgrtx['create'](hrvyz, hrvyz['onMkdirCallBack']))), hrvyz['window']['focus'] = function () {}, _4mc['getUrlPath'] = function () {}, hrvyz['window']['logtime'] = function (l$ig) {}, hrvyz['window']['alertTimeLog'] = function (mca_47) {}, hrvyz['window']['resetShareInfo'] = function () {}, hrvyz['window']['CanvasRenderingContext2D'] = function () {}, hrvyz['window']['CanvasRenderingContext2D']['prototype'] = hrvyz['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], hrvyz['window']['document']['body']['appendChild'] = function () {}, hrvyz['EnvConfig']['pixelRatioInt'] = 0x0, snuq9['getPixelRatio'] = hrvyz['pixelRatio'], hrvyz['_preCreateElement'] = hylz['createElement'], hylz['createElement'] = hrvyz['createElement'], snuq9['createShaderCondition'] = hrvyz['createShaderCondition'], kb0d65['parseXMLFromString'] = hrvyz['parseXMLFromString'], rvzyf['_createInputElement'] = zglth['_createInputElement'], hrvyz['EnvConfig']['load'] = capm7o['prototype']['load'], capm7o['prototype']['load'] = hxgt$l['prototype']['load'], hrvyz['isZiYu'] && nskuq9 && wx['onMessage'](function (rhgz) {
                rhgz['isLoad'] && ($gixj3['ziyuFileData'][rhgz['url']] = rhgz['data']);
            });
        }, hrvyz['onMkdirCallBack'] = function (d8025w, xjq3$i) {
            if (!d8025w) $gixj3['filesListObj'] = JSON['parse'](xjq3$i['data']);
        }, hrvyz['pixelRatio'] = function () {
            if (!hrvyz['EnvConfig']['pixelRatioInt']) try {
                var jiq$3x = wx['getSystemInfoSync']();
                return hrvyz['EnvConfig']['pixelRatioInt'] = jiq$3x['pixelRatio'], jiq$3x = jiq$3x, jiq$3x['pixelRatio'];
            } catch (f4vz_) {}
            return hrvyz['EnvConfig']['pixelRatioInt'];
        }, hrvyz['createElement'] = function (ghlrtz) {
            if (ghlrtz == 'canvas') {
                var frzlhy;
                return hrvyz['idx'] == 0x1 ? hrvyz['isZiYu'] ? (frzlhy = sharedCanvas, frzlhy['style'] = {}) : frzlhy = window['canvas'] : frzlhy = window['wx']['createCanvas'](), hrvyz['idx']++, frzlhy;
            } else {
                if (ghlrtz == 'textarea' || ghlrtz == 'input') return hrvyz['onCreateInput'](ghlrtz);else {
                    if (ghlrtz == 'div') {
                        var rzhy = hrvyz['_preCreateElement'](ghlrtz);
                        return rzhy['contains'] = function (kuns) {
                            return null;
                        }, rzhy['removeChild'] = function (iqj$x3) {}, rzhy;
                    } else return hrvyz['_preCreateElement'](ghlrtz);
                }
            }
        }, hrvyz['onCreateInput'] = function (frhyl) {
            var ghtzl = hrvyz['_preCreateElement'](frhyl);
            return ghtzl['focus'] = zglth['wxinputFocus'], ghtzl['blur'] = zglth['wxinputblur'], ghtzl['style'] = {}, ghtzl['value'] = 0x0, ghtzl['parentElement'] = {}, ghtzl['placeholder'] = {}, ghtzl['type'] = {}, ghtzl['setColor'] = function (hyvzrf) {}, ghtzl['setType'] = function (k6b05d) {}, ghtzl['setFontFace'] = function (ampc) {}, ghtzl['addEventListener'] = function (_c7moa) {}, ghtzl['contains'] = function (b856d0) {
                return null;
            }, ghtzl['removeChild'] = function (jin3) {}, ghtzl;
        }, hrvyz['createShaderCondition'] = function (ylrzth) {
            var i$lxg = this,
                hltgx = function () {
                var tg$xlh = ylrzth;
                return i$lxg[ylrzth['replace']('this.', '')];
            };
            return hltgx;
        }, hrvyz['EnvConfig'] = null, hrvyz['window'] = null, hrvyz['_preCreateElement'] = null, hrvyz['_inited'] = ![], hrvyz['wxRequest'] = null, hrvyz['systemInfo'] = null, hrvyz['version'] = '0.0.1', hrvyz['isZiYu'] = ![], hrvyz['isPosMsgYu'] = ![], hrvyz['parseXMLFromString'] = function (hrtxgl) {
            var k5bd06, ixjt$;
            hrtxgl = hrtxgl['replace'](/>\s+</g, '><');
            try {
                k5bd06 = new window['Parser']['DOMParser']()['parseFromString'](hrtxgl, 'text/xml');
            } catch (q$xij) {
                throw '需要引入xml解析库文件';
            }
            return k5bd06;
        }, hrvyz['idx'] = 0x1, hrvyz;
    }(),
        iqu3jn = function () {
        function j$nq3i() {}
        xjg(j$nq3i, 'laya.wx.mini.MiniImage');
        var $xtjgi = j$nq3i['prototype'];
        return $xtjgi['_loadImage'] = function (tgl$xh) {
            var v4f7y_ = this,
                am7c_4 = ![];
            tgl$xh['indexOf']('layaNativeDir/') == -0x1 && (am7c_4 = !![], tgl$xh = _com7a['formatURL'](tgl$xh));
            if (!$gixj3['getFileInfo'](tgl$xh)) {
                if (tgl$xh['indexOf']('http://') != -0x1 || tgl$xh['indexOf']('https://') != -0x1) $gixj3['downImg'](tgl$xh, new lgrtx(j$nq3i, j$nq3i['onDownImgCallBack'], [tgl$xh, v4f7y_]), tgl$xh);else j$nq3i['onCreateImage'](tgl$xh, v4f7y_, !![]);
            } else j$nq3i['onCreateImage'](tgl$xh, v4f7y_, !am7c_4);
        }, j$nq3i['onDownImgCallBack'] = function (f4vyrz, lyfrzh, u6k9n) {
            if (!u6k9n) j$nq3i['onCreateImage'](f4vyrz, lyfrzh);else lyfrzh['onError'](null);
        }, j$nq3i['onCreateImage'] = function (y7f4v, _yv4f7, zvyrhf) {
            zvyrhf === void 0x0 && (zvyrhf = ![]);
            var il$tx;
            if (!zvyrhf) {
                var ca7p = $gixj3['getFileInfo'](y7f4v),
                    ztlyh = ca7p['md5'];
                il$tx = $gixj3['getFileNativePath'](ztlyh);
            } else il$tx = y7f4v;
            if (_yv4f7['imgCache'] == null) _yv4f7['imgCache'] = {};
            var zvfyh;
            function s96ukb() {
                zvfyh['onload'] = null, zvfyh['onerror'] = null, delete _yv4f7['imgCache'][y7f4v];
            }
            ;
            var htlrzy = function () {
                s96ukb(), _yv4f7['onLoaded'](zvfyh);
            },
                d285w1 = function () {
                s96ukb(), _yv4f7['event']('error', 'Load image failed');
            };
            _yv4f7['_type'] == 'nativeimage' ? (zvfyh = new hylz['window']['Image'](), zvfyh['crossOrigin'] = '', zvfyh['onload'] = htlrzy, zvfyh['onerror'] = d285w1, zvfyh['src'] = il$tx, _yv4f7['imgCache'][y7f4v] = zvfyh) : new j$qn3i['create'](il$tx, {
                'onload': htlrzy,
                'onerror': d285w1,
                'onCreate': function (g$xi3) {
                    zvfyh = g$xi3, _yv4f7['imgCache'][y7f4v] = g$xi3;
                }
            });
        }, j$nq3i;
    }(),
        zglth = function () {
        function zhylt() {}
        return xjg(zhylt, 'laya.wx.mini.MiniInput'), zhylt['_createInputElement'] = function () {
            rvzyf['_initInput'](rvzyf['area'] = hylz['createElement']('textarea')), rvzyf['_initInput'](rvzyf['input'] = hylz['createElement']('input')), rvzyf['inputContainer'] = hylz['createElement']('div'), rvzyf['inputContainer']['style']['position'] = 'absolute', rvzyf['inputContainer']['style']['zIndex'] = 0x186a0, hylz['container']['appendChild'](rvzyf['inputContainer']), rvzyf['inputContainer']['setPos'] = function (usnq3, d28w) {
                rvzyf['inputContainer']['style']['left'] = usnq3 + 'px', rvzyf['inputContainer']['style']['top'] = d28w + 'px';
            }, _4mc['stage']['on']('resize', null, zhylt['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (a_c47m) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), uq3n9['_soundClass'] = rzyhfl, uq3n9['_musicClass'] = rzyhfl, window['_videoClass'] = d20w;
        }, zhylt['_onStageResize'] = function () {
            var zhryv = _4mc['stage']['_canvasTransform']['identity']();
            zhryv['scale'](hylz['width'] / xlg$it['canvas']['width'] / snuq9['getPixelRatio'](), hylz['height'] / xlg$it['canvas']['height'] / snuq9['getPixelRatio']());
        }, zhylt['wxinputFocus'] = function (ac7om_) {
            var flyrhz = rvzyf['inputElement']['target'];
            if (flyrhz && !flyrhz['editable']) return;
            tixl$g['window']['wx']['offKeyboardConfirm'](), tixl$g['window']['wx']['offKeyboardInput'](), tixl$g['window']['wx']['showKeyboard']({
                'defaultValue': flyrhz['text'],
                'maxLength': flyrhz['maxChars'],
                'multiple': flyrhz['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (ryvfhz) {},
                'fail': function (d6bk0) {}
            }), tixl$g['window']['wx']['onKeyboardConfirm'](function (q$n3i) {
                var d60k5b = q$n3i ? q$n3i['value'] : '';
                flyrhz['text'] = d60k5b, flyrhz['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), tixl$g['window']['wx']['onKeyboardInput'](function (rvyhzf) {
                var s39qn = rvyhzf ? rvyhzf['value'] : '';
                if (!flyrhz['multiline']) {
                    if (s39qn['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                flyrhz['text'] = s39qn, flyrhz['event']('input');
            });
        }, zhylt['inputEnter'] = function () {
            rvzyf['inputElement']['target']['focus'] = ![];
        }, zhylt['wxinputblur'] = function () {
            zhylt['hideKeyboard']();
        }, zhylt['hideKeyboard'] = function () {
            tixl$g['window']['wx']['offKeyboardConfirm'](), tixl$g['window']['wx']['offKeyboardInput'](), tixl$g['window']['wx']['hideKeyboard']({
                'success': function ($tilxg) {
                    console['log']('隐藏键盘');
                },
                'fail': function (k5d60b) {
                    console['log']('隐藏键盘出错:' + (k5d60b ? k5d60b['errMsg'] : ''));
                }
            });
        }, zhylt;
    }(),
        hxgt$l = function () {
        function $tjgx() {}
        xjg($tjgx, 'laya.wx.mini.MiniLoader');
        var vf74_ = $tjgx['prototype'];
        return vf74_['load'] = function (s9qk, cpeom, k6su9, tjx$g, f4yv_) {
            k6su9 === void 0x0 && (k6su9 = !![]), f4yv_ === void 0x0 && (f4yv_ = ![]);
            var n9uq3 = this;
            n9uq3['_url'] = s9qk;
            if (s9qk['indexOf']('data:image') === 0x0) n9uq3['_type'] = cpeom = 'image';else n9uq3['_type'] = cpeom || (cpeom = n9uq3['getTypeFromUrl'](s9qk));
            n9uq3['_cache'] = k6su9, n9uq3['_data'] = null;
            var bw08d = 'ascii';
            if (s9qk['indexOf']('.fnt') != -0x1) bw08d = 'utf8';else cpeom == 'arraybuffer' && (bw08d = '');
            ;
            var sq39n = kb0d65['getFileExtension'](s9qk);
            if ($tjgx['_fileTypeArr']['indexOf'](sq39n) != -0x1) tixl$g['EnvConfig']['load']['call'](this, s9qk, cpeom, k6su9, tjx$g, f4yv_);else {
                if (!$gixj3['getFileInfo'](s9qk)) {
                    if (s9qk['indexOf']('layaNativeDir/') != -0x1) {
                        if (tixl$g['isZiYu']) {
                            var lx$th = $gixj3['ziyuFileData'][s9qk];
                            n9uq3['onLoaded'](lx$th);
                            return;
                        } else {
                            cosnole['log']('read read'), $gixj3['read'](s9qk, bw08d, new lgrtx($tjgx, $tjgx['onReadNativeCallBack'], [bw08d, s9qk, cpeom, k6su9, tjx$g, f4yv_, n9uq3]));
                            return;
                        }
                    }
                    if (_com7a['rootPath'] == '') var ca4m = s9qk;else ca4m = s9qk['split'](_com7a['rootPath'])[0x0];
                    s9qk['indexOf']('http://') != -0x1 || s9qk['indexOf']('https://') != -0x1 ? tixl$g['EnvConfig']['load']['call'](n9uq3, s9qk, cpeom, k6su9, tjx$g, f4yv_) : $gixj3['readFile'](ca4m, bw08d, new lgrtx($tjgx, $tjgx['onReadNativeCallBack'], [bw08d, s9qk, cpeom, k6su9, tjx$g, f4yv_, n9uq3]), s9qk);
                } else tixl$g['EnvConfig']['load']['call'](this, s9qk, cpeom, k6su9, tjx$g, f4yv_);
            }
        }, vf74_['resMgrLoad'] = function (d9kb60, xthlgr, _am74c, ap7c, _vaf47, mav47_, vf_4y7) {
            _am74c === void 0x0 && (_am74c = 0x0), ap7c === void 0x0 && (ap7c = ![]), _vaf47 === void 0x0 && (_vaf47 = ![]), mav47_ === void 0x0 && (mav47_ = 0x0), vf_4y7 === void 0x0 && (vf_4y7 = 0x3), d9kb60['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', d9kb60), tixl$g['EnvConfig']['resMgrLoad'](d9kb60, (lyfhr, pmoca, vam_4) => {
                $tjgx['prototype']['resMgrLoadCallBack'](lyfhr, pmoca, vam_4, xthlgr);
            }, _am74c, ap7c, _vaf47, mav47_, vf_4y7);
        }, vf74_['resMgrLoadCallBack'] = function (zglhr, bk69s, _fvy47, y4zrv) {
            console['log']('buff:::', zglhr, _fvy47, $gixj3['fileNativeDir'] + '///' + $gixj3['fileListName']), y4zrv(zglhr, bk69s, _fvy47);
        }, vf74_['clearRes'] = function (a7m, n9uqsk) {
            n9uqsk === void 0x0 && (n9uqsk = ![]);
            var qsun9 = this;
            qsun9['clearRes'](a7m, n9uqsk);
            var oempac = $gixj3['getFileInfo'](a7m);
            if (oempac && (a7m['indexOf']('http://') != -0x1 || a7m['indexOf']('https://') != -0x1)) {
                var lyzhfr = oempac['md5'],
                    xtjig = $gixj3['getFileNativePath'](lyzhfr);
                $gixj3['remove'](xtjig);
            }
        }, $tjgx['onReadNativeCallBack'] = function (sb96, rtlg, $ilxg, bk560d, lzhyrt, iltxg, k0s96b, vf_y47, k96sub) {
            bk560d === void 0x0 && (bk560d = !![]), iltxg === void 0x0 && (iltxg = ![]), vf_y47 === void 0x0 && (vf_y47 = 0x0);
            if (!vf_y47) {
                var hfyvz;
                if ($ilxg == 'json' || $ilxg == 'atlas') hfyvz = tixl$g['getJson'](k96sub['data']);else $ilxg == 'xml' ? hfyvz = kb0d65['parseXMLFromString'](k96sub['data']) : hfyvz = k96sub['data'];
                k0s96b['onLoaded'](hfyvz), !tixl$g['isZiYu'] && tixl$g['isPosMsgYu'] && $ilxg != 'arraybuffer' && wx['postMessage']({
                    'url': rtlg,
                    'data': hfyvz,
                    'isLoad': !![]
                });
            } else vf_y47 == 0x1 && tixl$g['EnvConfig']['load']['call'](k0s96b, rtlg, $ilxg, bk560d, lzhyrt, iltxg);
        }, _c7am($tjgx, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), $tjgx;
    }(),
        $gixj3 = function (zgrlht) {
        function aecmp() {
            aecmp['__super']['call'](this);
            ;
        }
        return xjg(aecmp, 'laya.wx.mini.MiniFileMgr', zgrlht), aecmp['isLoadFile'] = function (_vf4zy) {
            return aecmp['_fileTypeArr']['indexOf'](_vf4zy) != -0x1 ? !![] : ![];
        }, aecmp['getFileInfo'] = function (bd5k06) {
            var hglrx = bd5k06['split']('?')[0x0],
                snku96 = aecmp['filesListObj'][hglrx];
            if (snku96 == null) return null;else return snku96;
            return null;
        }, aecmp['onFileUpdate'] = function (glit$, glxt$) {
            var ju3nsq = glit$['split']('/'),
                gj$i3 = ju3nsq[ju3nsq['length'] - 0x1],
                cmoap7 = aecmp['getFileInfo'](glxt$);
            if (cmoap7 == null) aecmp['onSaveFile'](glxt$, gj$i3);else {
                if (cmoap7['readyUrl'] != glxt$) aecmp['remove'](gj$i3, glxt$);
            }
        }, aecmp['exits'] = function (yzrf4, ujnsq) {
            var oepmc = aecmp['getFileNativePath'](yzrf4);
            aecmp['fs']['getFileInfo']({
                'filePath': oepmc,
                'success': function (zrhvfy) {
                    ujnsq != null && ujnsq['runWith']([0x0, zrhvfy]);
                },
                'fail': function (sbku96) {
                    ujnsq != null && ujnsq['runWith']([0x1, sbku96]);
                }
            });
        }, aecmp['read'] = function (b0s96, v7_m4a, z4f, _y4fvz) {
            v7_m4a === void 0x0 && (v7_m4a = 'ascill'), _y4fvz === void 0x0 && (_y4fvz = '');
            var mva47_;
            _y4fvz != '' ? mva47_ = aecmp['getFileNativePath'](b0s96) : mva47_ = b0s96, aecmp['fs']['readFile']({
                'filePath': mva47_,
                'encoding': v7_m4a,
                'success': function (n$jqi) {
                    z4f != null && z4f['runWith']([0x0, n$jqi]);
                },
                'fail': function (htgzlr) {
                    if (htgzlr && _y4fvz != '') aecmp['down'](_y4fvz, v7_m4a, z4f, _y4fvz);else z4f != null && z4f['runWith']([0x1]);
                }
            });
        }, aecmp['readNativeFile'] = function (glzt, tryzl) {
            aecmp['fs']['readFile']({
                'filePath': glzt,
                'encoding': '',
                'success': function ($nq3ij) {
                    tryzl != null && tryzl['runWith']([0x0]);
                },
                'fail': function (om7_a) {
                    tryzl != null && tryzl['runWith']([0x1]);
                }
            });
        }, aecmp['down'] = function (su9bk, k90bs, d25w1, x$glit) {
            k90bs === void 0x0 && (k90bs = 'ascill'), x$glit === void 0x0 && (x$glit = '');
            var gtxhr = aecmp['getFileNativePath'](x$glit),
                xq3ij$ = aecmp['wxdown']({
                'url': su9bk,
                'filePath': gtxhr,
                'success': function ($ghxt) {
                    if ($ghxt['statusCode'] === 0xc8) aecmp['readFile']($ghxt['filePath'], k90bs, d25w1, x$glit);
                },
                'fail': function (gtl$xi) {
                    d25w1 != null && d25w1['runWith']([0x1, gtl$xi]);
                }
            });
            xq3ij$['onProgressUpdate'](function (su9n6k) {
                d25w1 != null && d25w1['runWith']([0x2, su9n6k['progress']]);
            });
        }, aecmp['readFile'] = function (tlyz, kd5b0, sq3uj, b9us) {
            kd5b0 === void 0x0 && (kd5b0 = 'ascill'), b9us === void 0x0 && (b9us = ''), aecmp['fs']['readFile']({
                'filePath': tlyz,
                'encoding': kd5b0,
                'success': function (v_4f7) {
                    if (tlyz['indexOf']('http://') != -0x1 || tlyz['indexOf']('https://') != -0x1) aecmp['onFileUpdate'](tlyz, b9us);
                    sq3uj != null && sq3uj['runWith']([0x0, v_4f7]);
                },
                'fail': function (hzgrlt) {
                    if (hzgrlt) sq3uj != null && sq3uj['runWith']([0x1, hzgrlt]);
                }
            });
        }, aecmp['downImg'] = function (zrlth, nk6s9, ylzhrt) {
            ylzhrt === void 0x0 && (ylzhrt = '');
            var xghrlt = aecmp['wxdown']({
                'url': zrlth,
                'success': function (xitj) {
                    xitj['statusCode'] === 0xc8 && aecmp['copyFile'](xitj['tempFilePath'], ylzhrt, nk6s9);
                },
                'fail': function (u9bks6) {
                    nk6s9 != null && nk6s9['runWith']([0x1, u9bks6]);
                }
            });
        }, aecmp['copyFile'] = function (us3njq, qj3xi, pm7ca) {
            var u9ksn6 = us3njq['split']('/'),
                xhtlgr = u9ksn6[u9ksn6['length'] - 0x1],
                xgi$3 = qj3xi['split']('?')[0x0],
                f4_vz = aecmp['getFileInfo'](qj3xi),
                qij$n3 = aecmp['getFileNativePath'](xhtlgr);
            aecmp['fs']['copyFile']({
                'srcPath': us3njq,
                'destPath': qij$n3,
                'success': function (lhytz) {
                    if (!f4_vz) aecmp['onSaveFile'](qj3xi, xhtlgr), pm7ca != null && pm7ca['runWith']([0x0]);else {
                        if (f4_vz['readyUrl'] != qj3xi) aecmp['remove'](xhtlgr, qj3xi, pm7ca);
                    }
                },
                'fail': function (ma4_c7) {
                    pm7ca != null && pm7ca['runWith']([0x1, ma4_c7]);
                }
            });
        }, aecmp['getFileNativePath'] = function (ukns9) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ukns9;
        }, aecmp['remove'] = function (acpme, gtrlx, qujin) {
            gtrlx === void 0x0 && (gtrlx = '');
            var unqs3 = aecmp['getFileInfo'](gtrlx),
                q9skun = aecmp['getFileNativePath'](unqs3['md5']);
            _4mc['loader']['clearRes'](unqs3['readyUrl']), aecmp['fs']['unlink']({
                'filePath': q9skun,
                'success': function ($ijgt) {
                    if (gtrlx != '') aecmp['onSaveFile'](gtrlx, acpme);
                    qujin != null && qujin['runWith']([0x0]);
                },
                'fail': function (c4a_m7) {}
            });
        }, aecmp['onSaveFile'] = function (f7_v, d608) {
            var bs09 = f7_v['split']('?')[0x0];
            aecmp['filesListObj'][bs09] = {
                'md5': d608,
                'readyUrl': f7_v
            }, aecmp['fs']['writeFile']({
                'filePath': aecmp['fileNativeDir'] + '/' + aecmp['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](aecmp['filesListObj']),
                'success': function (hfryzl) {
                    console['log']('写入测试测试成功：', hfryzl);
                },
                'fail': function (nku9q) {
                    console['log']('写入测试测试失败：', nku9q);
                }
            });
        }, aecmp['existDir'] = function (lrhtxg, ht$xgl) {
            aecmp['fs']['mkdir']({
                'dirPath': lrhtxg,
                'success': function (va74m_) {
                    ht$xgl != null && ht$xgl['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (ns39uq) {
                    if (ns39uq['errMsg']['indexOf']('file already exists') != -0x1) aecmp['readSync'](aecmp['fileListName'], 'utf8', ht$xgl);else ht$xgl != null && ht$xgl['runWith']([0x1, ns39uq]);
                }
            });
        }, aecmp['readSync'] = function (_7vyf4, vrfy, u3jnq, nku9) {
            vrfy === void 0x0 && (vrfy = 'ascill'), nku9 === void 0x0 && (nku9 = '');
            var ac4m = aecmp['getFileNativePath'](_7vyf4),
                vf_4a7;
            try {
                vf_4a7 = aecmp['fs']['readFileSync'](ac4m), u3jnq != null && u3jnq['runWith']([0x0, { 'data': vf_4a7 }]);
            } catch (u3qj) {
                u3jnq != null && u3jnq['runWith']([0x1]);
            }
        }, aecmp['readCache'] = function () {}, aecmp['writeCache'] = function (gt$lix) {
            var qjix$3 = readyUrl['split']('?')[0x0];
            aecmp['filesListObj'][qjix$3] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, aecmp['fs']['writeFile']({
                'filePath': aecmp['fileNativeDir'] + '/' + aecmp['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](aecmp['filesListObj']),
                'success': function (sk6bu) {},
                'fail': function (kb05) {}
            });
        }, aecmp['setNativeFileDir'] = function (igx$jt) {
            aecmp['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + igx$jt;
        }, aecmp['filesListObj'] = {}, aecmp['fileNativeDir'] = null, aecmp['fileListName'] = 'layaairfiles.txt', aecmp['ziyuFileData'] = {}, _c7am(aecmp, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), aecmp;
    }(cmae),
        rzyhfl = function (s9nkuq) {
        function hzyrl() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], hzyrl['__super']['call'](this), this['_sound'] = hzyrl['_createSound'](), this['_chanell'] = new yfv_4z(this['_sound']);
        }
        xjg(hzyrl, 'laya.wx.mini.MiniSound', s9nkuq);
        var qijn3u = hzyrl['prototype'];
        return qijn3u['load'] = function (jtg$i) {
            var ijqn = this;
            jtg$i = _com7a['formatURL'](jtg$i), this['url'] = jtg$i;
            if (hzyrl['_audioCache'][jtg$i]) {
                this['event']('complete');
                return;
            }
            function x$lth() {
                if (hzyrl['_null'] != undefined) ijqn['_sound']['onCanplay'](hzyrl['_null']), ijqn['_sound']['onError'](hzyrl['_null']);else try {
                    ijqn['_sound']['onCanplay'](null), ijqn['_sound']['onError'](null), hzyrl['_null'] = null;
                } catch (ti) {
                    console['warn']('[wxmini] _clearSound:' + ti), ijqn['_sound']['onCanplay'](pco7), ijqn['_sound']['onError'](pco7), hzyrl['_null'] = pco7;
                }
            }
            function jxt$() {
                jnqsu['loaded'] = !![], jnqsu['event']('complete'), hzyrl['_audioCache'][jnqsu['url']] = jnqsu;
            }
            function sj3qu(q3xi$) {
                console['error']('errCode=' + q3xi$['errCode'] + '  errMsg=' + q3xi$['errMsg']), jnqsu['event']('error');
            }
            function pco7() {}
            this['_sound']['onCanplay'](jxt$), this['_sound']['onError'](sj3qu), this['_sound']['src'] = jtg$i;
            var jnqsu = this;
        }, qijn3u['play'] = function (k065b, o_7cm) {
            k065b === void 0x0 && (k065b = 0x0), o_7cm === void 0x0 && (o_7cm = 0x0);
            var ghrxl, $jqn;
            if (this['url'] == uq3n9['_tMusic']) {
                if (!hzyrl['_musicAudio']) hzyrl['_musicAudio'] = this['_sound'];
                ghrxl = hzyrl['_musicAudio'], $jqn = this['_chanell'];
            } else ghrxl = this['_sound'], $jqn = this['_chanell'];
            return ghrxl['src'] = this['url'], ghrxl['startTime'] = 0x0, $jqn['isStopped'] && ($jqn['url'] = this['url'], $jqn['loops'] = o_7cm, $jqn['startTime'] = k065b, $jqn['play'](), uq3n9['addChannel']($jqn)), $jqn;
        }, qijn3u['dispose'] = function () {
            var ku6bs = hzyrl['_audioCache'][this['url']];
            ku6bs && (ku6bs['src'] = '', delete hzyrl['_audioCache'][this['url']]);
        }, quk9ns(0x0, qijn3u, 'duration', function () {
            return this['_sound']['duration'];
        }), hzyrl['_createSound'] = function () {
            hzyrl['_id']++;
            var zlgt = tixl$g['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return zlgt;
        }, hzyrl['_musicAudio'] = null, hzyrl['_id'] = 0x0, hzyrl['_audioCache'] = {}, hzyrl['_null'] = undefined, hzyrl;
    }(cmae),
        yfv_4z = function (vryhz) {
        function u6kb9(_7m4v) {
            this['_audio'] = null, this['_onEnd'] = null, u6kb9['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = _7m4v, this['_onEnd'] = kb0d65['bind'](this['__onEnd'], this), _7m4v['onEnded'](this['_onEnd']);
        }
        xjg(u6kb9, 'laya.wx.mini.MiniSoundChannel', vryhz);
        var s6b90k = u6kb9['prototype'];
        return s6b90k['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (_4mc['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, s6b90k['__onNull'] = function () {}, s6b90k['play'] = function () {
            this['isStopped'] = ![], uq3n9['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, s6b90k['stop'] = function () {
            this['isStopped'] = !![], uq3n9['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, s6b90k['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, s6b90k['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], uq3n9['addChannel'](this), this['_audio']['play']();
        }, quk9ns(0x0, s6b90k, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), quk9ns(0x0, s6b90k, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), quk9ns(0x0, s6b90k, 'volume', function () {
            return 0x1;
        }, function ($j3xq) {}), u6kb9['_null'] = undefined, u6kb9;
    }(tlhx$),
        d20w = function () {
        function xgrtl() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = tixl$g['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        xjg(xgrtl, 'laya.wx.mini.MiniVideo');
        var quji3n = xgrtl['prototype'];
        return quji3n['on'] = function (zhyrfv, vma7_, frylz) {
            if (zhyrfv == 'loadedmetadata') this['onPlayFunc'] = frylz['bind'](vma7_), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else zhyrfv == 'ended' && (this['onEndedFunC'] = frylz['bind'](vma7_), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, quji3n['onTimeUpdateFunc'] = function (nqs3u9) {
            this['position'] = nqs3u9['position'], this['_duration'] = nqs3u9['duration'];
        }, quji3n['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, quji3n['onended'] = function (cap7mo, i$xg) {
            this['onEndedFunC'] = i$xg['bind'](cap7mo), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, quji3n['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, quji3n['off'] = function (rglthx, ca4_m7, w8d12) {
            if (rglthx == 'loadedmetadata') this['onPlayFunc'] = w8d12['bind'](ca4_m7), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else rglthx == 'ended' && (this['onEndedFunC'] = w8d12['bind'](ca4_m7), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, quji3n['load'] = function (mco7_a) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = mco7_a;
        }, quji3n['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, quji3n['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, quji3n['size'] = function (hzytr, a_4m7c) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = hzytr, this['videoElement']['height'] = a_4m7c;
        }, quji3n['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, quji3n['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, quk9ns(0x0, quji3n, 'duration', function () {
            return this['_duration'];
        }), quk9ns(0x0, quji3n, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (gx$lh) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = gx$lh;
        }), quk9ns(0x0, quji3n, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), quk9ns(0x0, quji3n, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), quk9ns(0x0, quji3n, 'ended', function () {
            return this['videoend'];
        }), quk9ns(0x0, quji3n, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (vfyr) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = vfyr;
        }), quk9ns(0x0, quji3n, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (qn3usj) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = qn3usj;
        }), quk9ns(0x0, quji3n, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (poeca) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = poeca;
        }), quk9ns(0x0, quji3n, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), quk9ns(0x0, quji3n, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (w802) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = w802;
        }), quk9ns(0x0, quji3n, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (nksqu9) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = nksqu9;
        }), quk9ns(0x0, quji3n, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), quk9ns(0x0, quji3n, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (yvhrzf) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = yvhrzf;
        }), quk9ns(0x0, quji3n, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (b05d) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = b05d;
        }), quk9ns(0x0, quji3n, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (d6850b) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = d6850b;
        }), xgrtl;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var $j in Laya) {
        var j3xi$ = Laya[$j];
        j3xi$ && j3xi$['__isclass'] && (exports[$j] = j3xi$);
    }
});