var b = wx.e$;
(function (window, document, b9f$pe) {
    var p9f$e = b9f$pe['un'],
        iw0so = b9f$pe['uns'],
        z8uy2v = b9f$pe['static'],
        ak47qj = b9f$pe['class'],
        g0s5id = b9f$pe['getset'],
        cu2y = b9f$pe['__newvec'],
        bpe = laya['utils']['Browser'],
        p$xbhe = laya['events']['Event'],
        u6 = laya['events']['EventDispatcher'],
        rv83u = laya['resource']['HTMLImage'],
        kjqt4 = laya['utils']['Handler'],
        bf$pe9 = laya['display']['Input'],
        $boxhn = laya['net']['Loader'],
        wo = laya['maths']['Matrix'],
        _fep19 = laya['renders']['Render'],
        bhow = laya['utils']['RunDriver'],
        zu28vy = laya['media']['Sound'],
        hnsiwo = laya['media']['SoundChannel'],
        bhoxnw = laya['media']['SoundManager'],
        i0mdg5 = laya['display']['Stage'],
        f1e9 = laya['net']['URL'],
        $x9 = laya['utils']['Utils'],
        $9pf_ = function () {
        function kj1q4() {}
        return ak47qj(kj1q4, 'laya.wx.mini.MiniAdpter'), kj1q4['getJson'] = function (v28u) {
            return JSON['parse'](v28u);
        }, kj1q4['init'] = function (xwnsho, uyvl) {
            xwnsho === void 0x0 && (xwnsho = ![]), uyvl === void 0x0 && (uyvl = ![]);
            if (kj1q4['_inited']) return;
            kj1q4['window'] = window;
            if (kj1q4['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            kj1q4['_inited'] = !![], kj1q4['isZiYu'] = uyvl, kj1q4['isPosMsgYu'] = xwnsho, kj1q4['EnvConfig'] = {}, !kj1q4['isZiYu'] && (nwsi0['setNativeFileDir']('/layaairGame'), nwsi0['existDir'](nwsi0['fileNativeDir'], kjqt4['create'](kj1q4, kj1q4['onMkdirCallBack']))), kj1q4['window']['focus'] = function () {}, b9f$pe['getUrlPath'] = function () {}, kj1q4['window']['logtime'] = function (yv2u8z) {}, kj1q4['window']['alertTimeLog'] = function ($px9eb) {}, kj1q4['window']['resetShareInfo'] = function () {}, kj1q4['window']['CanvasRenderingContext2D'] = function () {}, kj1q4['window']['CanvasRenderingContext2D']['prototype'] = kj1q4['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], kj1q4['window']['document']['body']['appendChild'] = function () {}, kj1q4['EnvConfig']['pixelRatioInt'] = 0x0, bhow['getPixelRatio'] = kj1q4['pixelRatio'], kj1q4['_preCreateElement'] = bpe['createElement'], bpe['createElement'] = kj1q4['createElement'], bhow['createShaderCondition'] = kj1q4['createShaderCondition'], $x9['parseXMLFromString'] = kj1q4['parseXMLFromString'], bf$pe9['_createInputElement'] = $pohxb['_createInputElement'], kj1q4['EnvConfig']['load'] = $boxhn['prototype']['load'], $boxhn['prototype']['load'] = p_fe$['prototype']['load'], kj1q4['isZiYu'] && xwnsho && wx['onMessage'](function (ishn) {
                ishn['isLoad'] && (nwsi0['ziyuFileData'][ishn['url']] = ishn['data']);
            });
        }, kj1q4['onMkdirCallBack'] = function (m5dg0i, lur8vy) {
            if (!m5dg0i) nwsi0['filesListObj'] = JSON['parse'](lur8vy['data']);
        }, kj1q4['pixelRatio'] = function () {
            if (!kj1q4['EnvConfig']['pixelRatioInt']) try {
                var bpeh$ = wx['getSystemInfoSync']();
                return kj1q4['EnvConfig']['pixelRatioInt'] = bpeh$['pixelRatio'], bpeh$ = bpeh$, bpeh$['pixelRatio'];
            } catch (q1jk) {}
            return kj1q4['EnvConfig']['pixelRatioInt'];
        }, kj1q4['createElement'] = function (p1_e) {
            if (p1_e == 'canvas') {
                var f4_9;
                return kj1q4['idx'] == 0x1 ? kj1q4['isZiYu'] ? (f4_9 = sharedCanvas, f4_9['style'] = {}) : f4_9 = window['canvas'] : f4_9 = window['wx']['createCanvas'](), kj1q4['idx']++, f4_9;
            } else {
                if (p1_e == 'textarea' || p1_e == 'input') return kj1q4['onCreateInput'](p1_e);else {
                    if (p1_e == 'div') {
                        var j4tqk7 = kj1q4['_preCreateElement'](p1_e);
                        return j4tqk7['contains'] = function (j37l6) {
                            return null;
                        }, j4tqk7['removeChild'] = function (ka1f_) {}, j4tqk7;
                    } else return kj1q4['_preCreateElement'](p1_e);
                }
            }
        }, kj1q4['onCreateInput'] = function (v8r) {
            var xp$be9 = kj1q4['_preCreateElement'](v8r);
            return xp$be9['focus'] = $pohxb['wxinputFocus'], xp$be9['blur'] = $pohxb['wxinputblur'], xp$be9['style'] = {}, xp$be9['value'] = 0x0, xp$be9['parentElement'] = {}, xp$be9['placeholder'] = {}, xp$be9['type'] = {}, xp$be9['setColor'] = function (b$ox) {}, xp$be9['setType'] = function (x$9) {}, xp$be9['setFontFace'] = function (lr76t) {}, xp$be9['addEventListener'] = function (l6j3) {}, xp$be9['contains'] = function (win0d) {
                return null;
            }, xp$be9['removeChild'] = function (aq14jk) {}, xp$be9;
        }, kj1q4['createShaderCondition'] = function (yuczv2) {
            var qkj4t7 = this,
                p1e_f9 = function () {
                var kqtj67 = yuczv2;
                return qkj4t7[yuczv2['replace']('this.', '')];
            };
            return p1e_f9;
        }, kj1q4['EnvConfig'] = null, kj1q4['window'] = null, kj1q4['_preCreateElement'] = null, kj1q4['_inited'] = ![], kj1q4['wxRequest'] = null, kj1q4['systemInfo'] = null, kj1q4['version'] = '0.0.1', kj1q4['isZiYu'] = ![], kj1q4['isPosMsgYu'] = ![], kj1q4['parseXMLFromString'] = function (uyvr2) {
            var uvz2y8, pebx$;
            uyvr2 = uyvr2['replace'](/>\s+</g, '><');
            try {
                uvz2y8 = new window['Parser']['DOMParser']()['parseFromString'](uyvr2, 'text/xml');
            } catch (q4a7j) {
                throw '需要引入xml解析库文件';
            }
            return uvz2y8;
        }, kj1q4['idx'] = 0x1, kj1q4;
    }(),
        nowihs = function () {
        function lj76() {}
        ak47qj(lj76, 'laya.wx.mini.MiniImage');
        var wg0d = lj76['prototype'];
        return wg0d['_loadImage'] = function (q637) {
            var m50idg = this,
                f_914a = ![];
            q637['indexOf']('layaNativeDir/') == -0x1 && (f_914a = !![], q637 = f1e9['formatURL'](q637));
            if (!nwsi0['getFileInfo'](q637)) {
                if (q637['indexOf']('http://') != -0x1 || q637['indexOf']('https://') != -0x1) nwsi0['downImg'](q637, new kjqt4(lj76, lj76['onDownImgCallBack'], [q637, m50idg]), q637);else lj76['onCreateImage'](q637, m50idg, !![]);
            } else lj76['onCreateImage'](q637, m50idg, !f_914a);
        }, lj76['onDownImgCallBack'] = function (dsig50, u2cy, jt37) {
            if (!jt37) lj76['onCreateImage'](dsig50, u2cy);else u2cy['onError'](null);
        }, lj76['onCreateImage'] = function (zu2vy, hpexb, q47) {
            q47 === void 0x0 && (q47 = ![]);
            var yr28u;
            if (!q47) {
                var l8r3 = nwsi0['getFileInfo'](zu2vy),
                    vul8r3 = l8r3['md5'];
                yr28u = nwsi0['getFileNativePath'](vul8r3);
            } else yr28u = zu2vy;
            if (hpexb['imgCache'] == null) hpexb['imgCache'] = {};
            var isdg;
            function j4akq1() {
                isdg['onload'] = null, isdg['onerror'] = null, delete hpexb['imgCache'][zu2vy];
            }
            ;
            var $xnob = function () {
                j4akq1(), hpexb['onLoaded'](isdg);
            },
                wi = function () {
                j4akq1(), hpexb['event']('error', 'Load image failed');
            };
            hpexb['_type'] == 'nativeimage' ? (isdg = new bpe['window']['Image'](), isdg['crossOrigin'] = '', isdg['onload'] = $xnob, isdg['onerror'] = wi, isdg['src'] = yr28u, hpexb['imgCache'][zu2vy] = isdg) : new rv83u['create'](yr28u, {
                'onload': $xnob,
                'onerror': wi,
                'onCreate': function (xwbonh) {
                    isdg = xwbonh, hpexb['imgCache'][zu2vy] = xwbonh;
                }
            });
        }, lj76;
    }(),
        $pohxb = function () {
        function phxb() {}
        return ak47qj(phxb, 'laya.wx.mini.MiniInput'), phxb['_createInputElement'] = function () {
            bf$pe9['_initInput'](bf$pe9['area'] = bpe['createElement']('textarea')), bf$pe9['_initInput'](bf$pe9['input'] = bpe['createElement']('input')), bf$pe9['inputContainer'] = bpe['createElement']('div'), bf$pe9['inputContainer']['style']['position'] = 'absolute', bf$pe9['inputContainer']['style']['zIndex'] = 0x186a0, bpe['container']['appendChild'](bf$pe9['inputContainer']), bf$pe9['inputContainer']['setPos'] = function (g5d0i, zycvu2) {
                bf$pe9['inputContainer']['style']['left'] = g5d0i + 'px', bf$pe9['inputContainer']['style']['top'] = zycvu2 + 'px';
            }, b9f$pe['stage']['on']('resize', null, phxb['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function ($hbpex) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), bhoxnw['_soundClass'] = gdmi5, bhoxnw['_musicClass'] = gdmi5, window['_videoClass'] = jq74ak;
        }, phxb['_onStageResize'] = function () {
            var fep_19 = b9f$pe['stage']['_canvasTransform']['identity']();
            fep_19['scale'](bpe['width'] / _fep19['canvas']['width'] / bhow['getPixelRatio'](), bpe['height'] / _fep19['canvas']['height'] / bhow['getPixelRatio']());
        }, phxb['wxinputFocus'] = function (qjka41) {
            var p9ef_ = bf$pe9['inputElement']['target'];
            if (p9ef_ && !p9ef_['editable']) return;
            $9pf_['window']['wx']['offKeyboardConfirm'](), $9pf_['window']['wx']['offKeyboardInput'](), $9pf_['window']['wx']['showKeyboard']({
                'defaultValue': p9ef_['text'],
                'maxLength': p9ef_['maxChars'],
                'multiple': p9ef_['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (sdwn0) {},
                'fail': function (a1kf4) {}
            }), $9pf_['window']['wx']['onKeyboardConfirm'](function (l8r6u) {
                var p$f_ = l8r6u ? l8r6u['value'] : '';
                p9ef_['text'] = p$f_, p9ef_['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), $9pf_['window']['wx']['onKeyboardInput'](function (uvcy) {
                var p9b$ef = uvcy ? uvcy['value'] : '';
                if (!p9ef_['multiline']) {
                    if (p9b$ef['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                p9ef_['text'] = p9b$ef, p9ef_['event']('input');
            });
        }, phxb['inputEnter'] = function () {
            bf$pe9['inputElement']['target']['focus'] = ![];
        }, phxb['wxinputblur'] = function () {
            phxb['hideKeyboard']();
        }, phxb['hideKeyboard'] = function () {
            $9pf_['window']['wx']['offKeyboardConfirm'](), $9pf_['window']['wx']['offKeyboardInput'](), $9pf_['window']['wx']['hideKeyboard']({
                'success': function (a1_kf4) {
                    console['log']('隐藏键盘');
                },
                'fail': function (u3v8l) {
                    console['log']('隐藏键盘出错:' + (u3v8l ? u3v8l['errMsg'] : ''));
                }
            });
        }, phxb;
    }(),
        p_fe$ = function () {
        function inowhs() {}
        ak47qj(inowhs, 'laya.wx.mini.MiniLoader');
        var hwn = inowhs['prototype'];
        return hwn['load'] = function (f1a4, f_1ea9, sxnho, ulv83, nsow0i) {
            sxnho === void 0x0 && (sxnho = !![]), nsow0i === void 0x0 && (nsow0i = ![]);
            var si0wn = this;
            si0wn['_url'] = f1a4;
            if (f1a4['indexOf']('data:image') === 0x0) si0wn['_type'] = f_1ea9 = 'image';else si0wn['_type'] = f_1ea9 || (f_1ea9 = si0wn['getTypeFromUrl'](f1a4));
            si0wn['_cache'] = sxnho, si0wn['_data'] = null;
            var xhnw = 'ascii';
            if (f1a4['indexOf']('.fnt') != -0x1) xhnw = 'utf8';else f_1ea9 == 'arraybuffer' && (xhnw = '');
            ;
            var inowh = $x9['getFileExtension'](f1a4);
            if (inowhs['_fileTypeArr']['indexOf'](inowh) != -0x1) $9pf_['EnvConfig']['load']['call'](this, f1a4, f_1ea9, sxnho, ulv83, nsow0i);else {
                if (!nwsi0['getFileInfo'](f1a4)) {
                    if (f1a4['indexOf']('layaNativeDir/') != -0x1) {
                        if ($9pf_['isZiYu']) {
                            var fe1p9 = nwsi0['ziyuFileData'][f1a4];
                            si0wn['onLoaded'](fe1p9);
                            return;
                        } else {
                            cosnole['log']('read read'), nwsi0['read'](f1a4, xhnw, new kjqt4(inowhs, inowhs['onReadNativeCallBack'], [xhnw, f1a4, f_1ea9, sxnho, ulv83, nsow0i, si0wn]));
                            return;
                        }
                    }
                    if (f1e9['rootPath'] == '') var xwho = f1a4;else xwho = f1a4['split'](f1e9['rootPath'])[0x0];
                    f1a4['indexOf']('http://') != -0x1 || f1a4['indexOf']('https://') != -0x1 ? $9pf_['EnvConfig']['load']['call'](si0wn, f1a4, f_1ea9, sxnho, ulv83, nsow0i) : nwsi0['readFile'](xwho, xhnw, new kjqt4(inowhs, inowhs['onReadNativeCallBack'], [xhnw, f1a4, f_1ea9, sxnho, ulv83, nsow0i, si0wn]), f1a4);
                } else $9pf_['EnvConfig']['load']['call'](this, f1a4, f_1ea9, sxnho, ulv83, nsow0i);
            }
        }, hwn['resMgrLoad'] = function (hobn, zu2v8y, f_9ae, o0n, b$xp, qj7a4, lu8vr3) {
            f_9ae === void 0x0 && (f_9ae = 0x0), o0n === void 0x0 && (o0n = ![]), b$xp === void 0x0 && (b$xp = ![]), qj7a4 === void 0x0 && (qj7a4 = 0x0), lu8vr3 === void 0x0 && (lu8vr3 = 0x3), hobn['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', hobn), $9pf_['EnvConfig']['resMgrLoad'](hobn, (bnwh, fbpe$, jk47a) => {
                inowhs['prototype']['resMgrLoadCallBack'](bnwh, fbpe$, jk47a, zu2v8y);
            }, f_9ae, o0n, b$xp, qj7a4, lu8vr3);
        }, hwn['resMgrLoadCallBack'] = function ($bep9x, ly8ruv, $bpxoh, wso) {
            console['log']('buff:::', $bep9x, $bpxoh, nwsi0['fileNativeDir'] + '///' + nwsi0['fileListName']), wso($bep9x, ly8ruv, $bpxoh);
        }, hwn['clearRes'] = function (t37r6, q4tk7j) {
            q4tk7j === void 0x0 && (q4tk7j = ![]);
            var niws = this;
            niws['clearRes'](t37r6, q4tk7j);
            var xwhons = nwsi0['getFileInfo'](t37r6);
            if (xwhons && (t37r6['indexOf']('http://') != -0x1 || t37r6['indexOf']('https://') != -0x1)) {
                var $xpbe = xwhons['md5'],
                    i0osw = nwsi0['getFileNativePath']($xpbe);
                nwsi0['remove'](i0osw);
            }
        }, inowhs['onReadNativeCallBack'] = function (aqjk4, onsw, j73t6l, wgdsi, ktjq4, exbp$9, xnsow, rul8v3, $pbx) {
            wgdsi === void 0x0 && (wgdsi = !![]), exbp$9 === void 0x0 && (exbp$9 = ![]), rul8v3 === void 0x0 && (rul8v3 = 0x0);
            if (!rul8v3) {
                var af94;
                if (j73t6l == 'json' || j73t6l == 'atlas') af94 = $9pf_['getJson']($pbx['data']);else j73t6l == 'xml' ? af94 = $x9['parseXMLFromString']($pbx['data']) : af94 = $pbx['data'];
                xnsow['onLoaded'](af94), !$9pf_['isZiYu'] && $9pf_['isPosMsgYu'] && j73t6l != 'arraybuffer' && wx['postMessage']({
                    'url': onsw,
                    'data': af94,
                    'isLoad': !![]
                });
            } else rul8v3 == 0x1 && $9pf_['EnvConfig']['load']['call'](xnsow, onsw, j73t6l, wgdsi, ktjq4, exbp$9);
        }, z8uy2v(inowhs, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), inowhs;
    }(),
        nwsi0 = function (qjtk7) {
        function _f941() {
            _f941['__super']['call'](this);
            ;
        }
        return ak47qj(_f941, 'laya.wx.mini.MiniFileMgr', qjtk7), _f941['isLoadFile'] = function (_ef19a) {
            return _f941['_fileTypeArr']['indexOf'](_ef19a) != -0x1 ? !![] : ![];
        }, _f941['getFileInfo'] = function (op$hx) {
            var ids0g5 = op$hx['split']('?')[0x0],
                snw0d = _f941['filesListObj'][ids0g5];
            if (snw0d == null) return null;else return snw0d;
            return null;
        }, _f941['onFileUpdate'] = function (_e$pf9, qkj7a) {
            var xb$no = _e$pf9['split']('/'),
                mid0g5 = xb$no[xb$no['length'] - 0x1],
                k_fa14 = _f941['getFileInfo'](qkj7a);
            if (k_fa14 == null) _f941['onSaveFile'](qkj7a, mid0g5);else {
                if (k_fa14['readyUrl'] != qkj7a) _f941['remove'](mid0g5, qkj7a);
            }
        }, _f941['exits'] = function (hnoswi, ep$b9f) {
            var $bephx = _f941['getFileNativePath'](hnoswi);
            _f941['fs']['getFileInfo']({
                'filePath': $bephx,
                'success': function (fe1_) {
                    ep$b9f != null && ep$b9f['runWith']([0x0, fe1_]);
                },
                'fail': function (swho) {
                    ep$b9f != null && ep$b9f['runWith']([0x1, swho]);
                }
            });
        }, _f941['read'] = function (ru38l, f$bpe, oxwhbn, dm0g5) {
            f$bpe === void 0x0 && (f$bpe = 'ascill'), dm0g5 === void 0x0 && (dm0g5 = '');
            var f_1p9;
            dm0g5 != '' ? f_1p9 = _f941['getFileNativePath'](ru38l) : f_1p9 = ru38l, _f941['fs']['readFile']({
                'filePath': f_1p9,
                'encoding': f$bpe,
                'success': function (bhp$e) {
                    oxwhbn != null && oxwhbn['runWith']([0x0, bhp$e]);
                },
                'fail': function (ioshnw) {
                    if (ioshnw && dm0g5 != '') _f941['down'](dm0g5, f$bpe, oxwhbn, dm0g5);else oxwhbn != null && oxwhbn['runWith']([0x1]);
                }
            });
        }, _f941['readNativeFile'] = function (q3jt67, iwnhs) {
            _f941['fs']['readFile']({
                'filePath': q3jt67,
                'encoding': '',
                'success': function (_pf) {
                    iwnhs != null && iwnhs['runWith']([0x0]);
                },
                'fail': function (e_f$9p) {
                    iwnhs != null && iwnhs['runWith']([0x1]);
                }
            });
        }, _f941['down'] = function (_a1fk4, jt4kq7, uy8vr, lr6t3) {
            jt4kq7 === void 0x0 && (jt4kq7 = 'ascill'), lr6t3 === void 0x0 && (lr6t3 = '');
            var j6kt = _f941['getFileNativePath'](lr6t3),
                bpo$ = _f941['wxdown']({
                'url': _a1fk4,
                'filePath': j6kt,
                'success': function (_91fep) {
                    if (_91fep['statusCode'] === 0xc8) _f941['readFile'](_91fep['filePath'], jt4kq7, uy8vr, lr6t3);
                },
                'fail': function (pf19) {
                    uy8vr != null && uy8vr['runWith']([0x1, pf19]);
                }
            });
            bpo$['onProgressUpdate'](function (s0oni) {
                uy8vr != null && uy8vr['runWith']([0x2, s0oni['progress']]);
            });
        }, _f941['readFile'] = function (bf$e, vcuyz2, e$bxp, zvu8y2) {
            vcuyz2 === void 0x0 && (vcuyz2 = 'ascill'), zvu8y2 === void 0x0 && (zvu8y2 = ''), _f941['fs']['readFile']({
                'filePath': bf$e,
                'encoding': vcuyz2,
                'success': function (dgs0w) {
                    if (bf$e['indexOf']('http://') != -0x1 || bf$e['indexOf']('https://') != -0x1) _f941['onFileUpdate'](bf$e, zvu8y2);
                    e$bxp != null && e$bxp['runWith']([0x0, dgs0w]);
                },
                'fail': function (a41_qk) {
                    if (a41_qk) e$bxp != null && e$bxp['runWith']([0x1, a41_qk]);
                }
            });
        }, _f941['downImg'] = function (v82zuy, d0nsw, sigwd0) {
            sigwd0 === void 0x0 && (sigwd0 = '');
            var a1kjq = _f941['wxdown']({
                'url': v82zuy,
                'success': function (fak1_) {
                    fak1_['statusCode'] === 0xc8 && _f941['copyFile'](fak1_['tempFilePath'], sigwd0, d0nsw);
                },
                'fail': function (j67t3q) {
                    d0nsw != null && d0nsw['runWith']([0x1, j67t3q]);
                }
            });
        }, _f941['copyFile'] = function (p_f$9, zucv, _e9af) {
            var xobnw = p_f$9['split']('/'),
                rl38u = xobnw[xobnw['length'] - 0x1],
                $e_p9f = zucv['split']('?')[0x0],
                $pe9fb = _f941['getFileInfo'](zucv),
                eb$x9 = _f941['getFileNativePath'](rl38u);
            _f941['fs']['copyFile']({
                'srcPath': p_f$9,
                'destPath': eb$x9,
                'success': function (vyru8) {
                    if (!$pe9fb) _f941['onSaveFile'](zucv, rl38u), _e9af != null && _e9af['runWith']([0x0]);else {
                        if ($pe9fb['readyUrl'] != zucv) _f941['remove'](rl38u, zucv, _e9af);
                    }
                },
                'fail': function (sig0w) {
                    _e9af != null && _e9af['runWith']([0x1, sig0w]);
                }
            });
        }, _f941['getFileNativePath'] = function (lu38vr) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + lu38vr;
        }, _f941['remove'] = function (eb9f$, l683, xhwbn) {
            l683 === void 0x0 && (l683 = '');
            var zy2uc = _f941['getFileInfo'](l683),
                _p91e = _f941['getFileNativePath'](zy2uc['md5']);
            b9f$pe['loader']['clearRes'](zy2uc['readyUrl']), _f941['fs']['unlink']({
                'filePath': _p91e,
                'success': function (tq367j) {
                    if (l683 != '') _f941['onSaveFile'](l683, eb9f$);
                    xhwbn != null && xhwbn['runWith']([0x0]);
                },
                'fail': function (nwi0os) {}
            });
        }, _f941['onSaveFile'] = function (q47kj, dw0gi) {
            var t7j3q = q47kj['split']('?')[0x0];
            _f941['filesListObj'][t7j3q] = {
                'md5': dw0gi,
                'readyUrl': q47kj
            }, _f941['fs']['writeFile']({
                'filePath': _f941['fileNativeDir'] + '/' + _f941['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](_f941['filesListObj']),
                'success': function (i0nsd) {
                    console['log']('写入测试测试成功：', i0nsd);
                },
                'fail': function (pb9x$) {
                    console['log']('写入测试测试失败：', pb9x$);
                }
            });
        }, _f941['existDir'] = function ($pf9eb, d0g5s) {
            _f941['fs']['mkdir']({
                'dirPath': $pf9eb,
                'success': function (e$pbf) {
                    d0g5s != null && d0g5s['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (d50gi) {
                    if (d50gi['errMsg']['indexOf']('file already exists') != -0x1) _f941['readSync'](_f941['fileListName'], 'utf8', d0g5s);else d0g5s != null && d0g5s['runWith']([0x1, d50gi]);
                }
            });
        }, _f941['readSync'] = function (_ak4f, q4akj7, l83u6r, bxhop) {
            q4akj7 === void 0x0 && (q4akj7 = 'ascill'), bxhop === void 0x0 && (bxhop = '');
            var dim5 = _f941['getFileNativePath'](_ak4f),
                i0gm;
            try {
                i0gm = _f941['fs']['readFileSync'](dim5), l83u6r != null && l83u6r['runWith']([0x0, { 'data': i0gm }]);
            } catch (p$be9f) {
                l83u6r != null && l83u6r['runWith']([0x1]);
            }
        }, _f941['readCache'] = function () {}, _f941['writeCache'] = function (y8r2) {
            var onhsxw = readyUrl['split']('?')[0x0];
            _f941['filesListObj'][onhsxw] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, _f941['fs']['writeFile']({
                'filePath': _f941['fileNativeDir'] + '/' + _f941['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](_f941['filesListObj']),
                'success': function (fepb9) {},
                'fail': function (xohswn) {}
            });
        }, _f941['setNativeFileDir'] = function ($nohx) {
            _f941['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + $nohx;
        }, _f941['filesListObj'] = {}, _f941['fileNativeDir'] = null, _f941['fileListName'] = 'layaairfiles.txt', _f941['ziyuFileData'] = {}, z8uy2v(_f941, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), _f941;
    }(u6),
        gdmi5 = function (ws0noi) {
        function v8l3r() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], v8l3r['__super']['call'](this), this['_sound'] = v8l3r['_createSound'](), this['_chanell'] = new widns0(this['_sound']);
        }
        ak47qj(v8l3r, 'laya.wx.mini.MiniSound', ws0noi);
        var _4a1kq = v8l3r['prototype'];
        return _4a1kq['load'] = function (l3r7) {
            var giwd0 = this;
            l3r7 = f1e9['formatURL'](l3r7), this['url'] = l3r7;
            if (v8l3r['_audioCache'][l3r7]) {
                this['event']('complete');
                return;
            }
            function box$() {
                if (v8l3r['_null'] != undefined) giwd0['_sound']['onCanplay'](v8l3r['_null']), giwd0['_sound']['onError'](v8l3r['_null']);else try {
                    giwd0['_sound']['onCanplay'](null), giwd0['_sound']['onError'](null), v8l3r['_null'] = null;
                } catch (bp9x$e) {
                    console['warn']('[wxmini] _clearSound:' + bp9x$e), giwd0['_sound']['onCanplay'](z2vcyu), giwd0['_sound']['onError'](z2vcyu), v8l3r['_null'] = z2vcyu;
                }
            }
            function pfeb9$() {
                xp$eb9['loaded'] = !![], xp$eb9['event']('complete'), v8l3r['_audioCache'][xp$eb9['url']] = xp$eb9;
            }
            function dgm0(wnobh) {
                console['error']('errCode=' + wnobh['errCode'] + '  errMsg=' + wnobh['errMsg']), xp$eb9['event']('error');
            }
            function z2vcyu() {}
            this['_sound']['onCanplay'](pfeb9$), this['_sound']['onError'](dgm0), this['_sound']['src'] = l3r7;
            var xp$eb9 = this;
        }, _4a1kq['play'] = function (o$hbpx, o$bpx) {
            o$hbpx === void 0x0 && (o$hbpx = 0x0), o$bpx === void 0x0 && (o$bpx = 0x0);
            var $ehxbp, yv8z2u;
            if (this['url'] == bhoxnw['_tMusic']) {
                if (!v8l3r['_musicAudio']) v8l3r['_musicAudio'] = this['_sound'];
                $ehxbp = v8l3r['_musicAudio'], yv8z2u = this['_chanell'];
            } else $ehxbp = this['_sound'], yv8z2u = this['_chanell'];
            return $ehxbp['src'] = this['url'], $ehxbp['startTime'] = 0x0, yv8z2u['isStopped'] && (yv8z2u['url'] = this['url'], yv8z2u['loops'] = o$bpx, yv8z2u['startTime'] = o$hbpx, yv8z2u['play'](), bhoxnw['addChannel'](yv8z2u)), yv8z2u;
        }, _4a1kq['dispose'] = function () {
            var xwnb = v8l3r['_audioCache'][this['url']];
            xwnb && (xwnb['src'] = '', delete v8l3r['_audioCache'][this['url']]);
        }, g0s5id(0x0, _4a1kq, 'duration', function () {
            return this['_sound']['duration'];
        }), v8l3r['_createSound'] = function () {
            v8l3r['_id']++;
            var vy82ur = $9pf_['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return vy82ur;
        }, v8l3r['_musicAudio'] = null, v8l3r['_id'] = 0x0, v8l3r['_audioCache'] = {}, v8l3r['_null'] = undefined, v8l3r;
    }(u6),
        widns0 = function (l6t7j3) {
        function i0sdn(j4ka1) {
            this['_audio'] = null, this['_onEnd'] = null, i0sdn['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = j4ka1, this['_onEnd'] = $x9['bind'](this['__onEnd'], this), j4ka1['onEnded'](this['_onEnd']);
        }
        ak47qj(i0sdn, 'laya.wx.mini.MiniSoundChannel', l6t7j3);
        var lur8y = i0sdn['prototype'];
        return lur8y['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (b9f$pe['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, lur8y['__onNull'] = function () {}, lur8y['play'] = function () {
            this['isStopped'] = ![], bhoxnw['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, lur8y['stop'] = function () {
            this['isStopped'] = !![], bhoxnw['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, lur8y['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, lur8y['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], bhoxnw['addChannel'](this), this['_audio']['play']();
        }, g0s5id(0x0, lur8y, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), g0s5id(0x0, lur8y, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), g0s5id(0x0, lur8y, 'volume', function () {
            return 0x1;
        }, function (rtl7) {}), i0sdn['_null'] = undefined, i0sdn;
    }(hnsiwo),
        jq74ak = function () {
        function u8v2ry() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = $9pf_['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        ak47qj(u8v2ry, 'laya.wx.mini.MiniVideo');
        var _qa14 = u8v2ry['prototype'];
        return _qa14['on'] = function (igd50, ylrvu, ury8vl) {
            if (igd50 == 'loadedmetadata') this['onPlayFunc'] = ury8vl['bind'](ylrvu), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else igd50 == 'ended' && (this['onEndedFunC'] = ury8vl['bind'](ylrvu), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, _qa14['onTimeUpdateFunc'] = function (qk4_1a) {
            this['position'] = qk4_1a['position'], this['_duration'] = qk4_1a['duration'];
        }, _qa14['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, _qa14['onended'] = function (z2y8v, $hoxnb) {
            this['onEndedFunC'] = $hoxnb['bind'](z2y8v), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, _qa14['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, _qa14['off'] = function (qa41, af9e_1, d50img) {
            if (qa41 == 'loadedmetadata') this['onPlayFunc'] = d50img['bind'](af9e_1), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else qa41 == 'ended' && (this['onEndedFunC'] = d50img['bind'](af9e_1), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, _qa14['load'] = function (r8lvu3) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = r8lvu3;
        }, _qa14['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, _qa14['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, _qa14['size'] = function (ul638r, wn0sdi) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = ul638r, this['videoElement']['height'] = wn0sdi;
        }, _qa14['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, _qa14['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, g0s5id(0x0, _qa14, 'duration', function () {
            return this['_duration'];
        }), g0s5id(0x0, _qa14, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (dgm5i) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = dgm5i;
        }), g0s5id(0x0, _qa14, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), g0s5id(0x0, _qa14, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), g0s5id(0x0, _qa14, 'ended', function () {
            return this['videoend'];
        }), g0s5id(0x0, _qa14, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (iwns) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = iwns;
        }), g0s5id(0x0, _qa14, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (xobn$h) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = xobn$h;
        }), g0s5id(0x0, _qa14, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (qj637t) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = qj637t;
        }), g0s5id(0x0, _qa14, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), g0s5id(0x0, _qa14, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (hn$box) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = hn$box;
        }), g0s5id(0x0, _qa14, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (dwis) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = dwis;
        }), g0s5id(0x0, _qa14, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), g0s5id(0x0, _qa14, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (k6jtq7) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = k6jtq7;
        }), g0s5id(0x0, _qa14, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (u2vy) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = u2vy;
        }), g0s5id(0x0, _qa14, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (efp$_) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = efp$_;
        }), u8v2ry;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var $nhxbo in Laya) {
        var t7q4 = Laya[$nhxbo];
        t7q4 && t7q4['__isclass'] && (exports[$nhxbo] = t7q4);
    }
});