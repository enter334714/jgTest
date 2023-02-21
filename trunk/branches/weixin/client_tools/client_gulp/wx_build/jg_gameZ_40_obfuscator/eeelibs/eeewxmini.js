var b = wx.$e;
(function (window, document, nj3$iq) {
    var ju3i = nj3$iq['un'],
        tlhzr = nj3$iq['uns'],
        uji3q = nj3$iq['static'],
        n6s9ku = nj3$iq['class'],
        u6s9kb = nj3$iq['getset'],
        lgh$x = nj3$iq['__newvec'],
        b05w8d = laya['utils']['Browser'],
        lgxi = laya['events']['Event'],
        camepo = laya['events']['EventDispatcher'],
        q3jinu = laya['resource']['HTMLImage'],
        w5d08 = laya['utils']['Handler'],
        jn3squ = laya['display']['Input'],
        jiq$3 = laya['net']['Loader'],
        lgi$ = laya['maths']['Matrix'],
        nq3iu = laya['renders']['Render'],
        jxi$ = laya['utils']['RunDriver'],
        htrl = laya['media']['Sound'],
        cm_a4 = laya['media']['SoundChannel'],
        db96k0 = laya['media']['SoundManager'],
        hgrt = laya['display']['Stage'],
        mco7a_ = laya['net']['URL'],
        y7fv = laya['utils']['Utils'],
        a7_4vf = function () {
        function $jixgt() {}
        return n6s9ku($jixgt, 'laya.wx.mini.MiniAdpter'), $jixgt['getJson'] = function (yv_4z) {
            return JSON['parse'](yv_4z);
        }, $jixgt['init'] = function (xti$j, oeam) {
            xti$j === void 0x0 && (xti$j = ![]), oeam === void 0x0 && (oeam = ![]);
            if ($jixgt['_inited']) return;
            $jixgt['window'] = window;
            if ($jixgt['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            $jixgt['_inited'] = !![], $jixgt['isZiYu'] = oeam, $jixgt['isPosMsgYu'] = xti$j, $jixgt['EnvConfig'] = {}, !$jixgt['isZiYu'] && (itj$['setNativeFileDir']('/layaairGame'), itj$['existDir'](itj$['fileNativeDir'], w5d08['create']($jixgt, $jixgt['onMkdirCallBack']))), $jixgt['window']['focus'] = function () {}, nj3$iq['getUrlPath'] = function () {}, $jixgt['window']['logtime'] = function (xtrgh) {}, $jixgt['window']['alertTimeLog'] = function (hlyfrz) {}, $jixgt['window']['resetShareInfo'] = function () {}, $jixgt['window']['CanvasRenderingContext2D'] = function () {}, $jixgt['window']['CanvasRenderingContext2D']['prototype'] = $jixgt['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], $jixgt['window']['document']['body']['appendChild'] = function () {}, $jixgt['EnvConfig']['pixelRatioInt'] = 0x0, jxi$['getPixelRatio'] = $jixgt['pixelRatio'], $jixgt['_preCreateElement'] = b05w8d['createElement'], b05w8d['createElement'] = $jixgt['createElement'], jxi$['createShaderCondition'] = $jixgt['createShaderCondition'], y7fv['parseXMLFromString'] = $jixgt['parseXMLFromString'], jn3squ['_createInputElement'] = a4m_c7['_createInputElement'], $jixgt['EnvConfig']['load'] = jiq$3['prototype']['load'], jiq$3['prototype']['load'] = fzhlyr['prototype']['load'], $jixgt['isZiYu'] && xti$j && wx['onMessage'](function (_4yzvf) {
                _4yzvf['isLoad'] && (itj$['ziyuFileData'][_4yzvf['url']] = _4yzvf['data']);
            });
        }, $jixgt['onMkdirCallBack'] = function (fhyzl, _4avm) {
            if (!fhyzl) itj$['filesListObj'] = JSON['parse'](_4avm['data']);
        }, $jixgt['pixelRatio'] = function () {
            if (!$jixgt['EnvConfig']['pixelRatioInt']) try {
                var sun6 = wx['getSystemInfoSync']();
                return $jixgt['EnvConfig']['pixelRatioInt'] = sun6['pixelRatio'], sun6 = sun6, sun6['pixelRatio'];
            } catch (zfv4ry) {}
            return $jixgt['EnvConfig']['pixelRatioInt'];
        }, $jixgt['createElement'] = function (op7) {
            if (op7 == 'canvas') {
                var _zy4;
                return $jixgt['idx'] == 0x1 ? $jixgt['isZiYu'] ? (_zy4 = sharedCanvas, _zy4['style'] = {}) : _zy4 = window['canvas'] : _zy4 = window['wx']['createCanvas'](), $jixgt['idx']++, _zy4;
            } else {
                if (op7 == 'textarea' || op7 == 'input') return $jixgt['onCreateInput'](op7);else {
                    if (op7 == 'div') {
                        var _4c7am = $jixgt['_preCreateElement'](op7);
                        return _4c7am['contains'] = function (glxt$h) {
                            return null;
                        }, _4c7am['removeChild'] = function (gxj3i$) {}, _4c7am;
                    } else return $jixgt['_preCreateElement'](op7);
                }
            }
        }, $jixgt['onCreateInput'] = function (fy4zrv) {
            var ilt$x = $jixgt['_preCreateElement'](fy4zrv);
            return ilt$x['focus'] = a4m_c7['wxinputFocus'], ilt$x['blur'] = a4m_c7['wxinputblur'], ilt$x['style'] = {}, ilt$x['value'] = 0x0, ilt$x['parentElement'] = {}, ilt$x['placeholder'] = {}, ilt$x['type'] = {}, ilt$x['setColor'] = function (ac7mp) {}, ilt$x['setType'] = function (u3jqns) {}, ilt$x['setFontFace'] = function (gthl$x) {}, ilt$x['addEventListener'] = function (g$jitx) {}, ilt$x['contains'] = function (m_a74v) {
                return null;
            }, ilt$x['removeChild'] = function (ztlhy) {}, ilt$x;
        }, $jixgt['createShaderCondition'] = function (z4frvy) {
            var xit$gj = this,
                qu9sn = function () {
                var thlxr = z4frvy;
                return xit$gj[z4frvy['replace']('this.', '')];
            };
            return qu9sn;
        }, $jixgt['EnvConfig'] = null, $jixgt['window'] = null, $jixgt['_preCreateElement'] = null, $jixgt['_inited'] = ![], $jixgt['wxRequest'] = null, $jixgt['systemInfo'] = null, $jixgt['version'] = '0.0.1', $jixgt['isZiYu'] = ![], $jixgt['isPosMsgYu'] = ![], $jixgt['parseXMLFromString'] = function (b05dk6) {
            var k0b69s, ji$gx3;
            b05dk6 = b05dk6['replace'](/>\s+</g, '><');
            try {
                k0b69s = new window['Parser']['DOMParser']()['parseFromString'](b05dk6, 'text/xml');
            } catch (m_oca) {
                throw '需要引入xml解析库文件';
            }
            return k0b69s;
        }, $jixgt['idx'] = 0x1, $jixgt;
    }(),
        v4_m = function () {
        function opcm7() {}
        n6s9ku(opcm7, 'laya.wx.mini.MiniImage');
        var xqj3i$ = opcm7['prototype'];
        return xqj3i$['_loadImage'] = function (jq3x$) {
            var zrhlyf = this,
                rglth = ![];
            jq3x$['indexOf']('layaNativeDir/') == -0x1 && (rglth = !![], jq3x$ = mco7a_['formatURL'](jq3x$));
            if (!itj$['getFileInfo'](jq3x$)) {
                if (jq3x$['indexOf']('http://') != -0x1 || jq3x$['indexOf']('https://') != -0x1) itj$['downImg'](jq3x$, new w5d08(opcm7, opcm7['onDownImgCallBack'], [jq3x$, zrhlyf]), jq3x$);else opcm7['onCreateImage'](jq3x$, zrhlyf, !![]);
            } else opcm7['onCreateImage'](jq3x$, zrhlyf, !rglth);
        }, opcm7['onDownImgCallBack'] = function (_amoc7, htlrgz, $hgxtl) {
            if (!$hgxtl) opcm7['onCreateImage'](_amoc7, htlrgz);else htlrgz['onError'](null);
        }, opcm7['onCreateImage'] = function (r4vyfz, ig$xjt, x3j$qi) {
            x3j$qi === void 0x0 && (x3j$qi = ![]);
            var vf_47y;
            if (!x3j$qi) {
                var sb60k9 = itj$['getFileInfo'](r4vyfz),
                    uns6 = sb60k9['md5'];
                vf_47y = itj$['getFileNativePath'](uns6);
            } else vf_47y = r4vyfz;
            if (ig$xjt['imgCache'] == null) ig$xjt['imgCache'] = {};
            var w0d258;
            function zlyfh() {
                w0d258['onload'] = null, w0d258['onerror'] = null, delete ig$xjt['imgCache'][r4vyfz];
            }
            ;
            var xji$t = function () {
                zlyfh(), ig$xjt['onLoaded'](w0d258);
            },
                tlghz = function () {
                zlyfh(), ig$xjt['event']('error', 'Load image failed');
            };
            ig$xjt['_type'] == 'nativeimage' ? (w0d258 = new b05w8d['window']['Image'](), w0d258['crossOrigin'] = '', w0d258['onload'] = xji$t, w0d258['onerror'] = tlghz, w0d258['src'] = vf_47y, ig$xjt['imgCache'][r4vyfz] = w0d258) : new q3jinu['create'](vf_47y, {
                'onload': xji$t,
                'onerror': tlghz,
                'onCreate': function (b8d06) {
                    w0d258 = b8d06, ig$xjt['imgCache'][r4vyfz] = b8d06;
                }
            });
        }, opcm7;
    }(),
        a4m_c7 = function () {
        function k0bd() {}
        return n6s9ku(k0bd, 'laya.wx.mini.MiniInput'), k0bd['_createInputElement'] = function () {
            jn3squ['_initInput'](jn3squ['area'] = b05w8d['createElement']('textarea')), jn3squ['_initInput'](jn3squ['input'] = b05w8d['createElement']('input')), jn3squ['inputContainer'] = b05w8d['createElement']('div'), jn3squ['inputContainer']['style']['position'] = 'absolute', jn3squ['inputContainer']['style']['zIndex'] = 0x186a0, b05w8d['container']['appendChild'](jn3squ['inputContainer']), jn3squ['inputContainer']['setPos'] = function (d02, vzfrh) {
                jn3squ['inputContainer']['style']['left'] = d02 + 'px', jn3squ['inputContainer']['style']['top'] = vzfrh + 'px';
            }, nj3$iq['stage']['on']('resize', null, k0bd['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function ($j3g) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), db96k0['_soundClass'] = wd8b50, db96k0['_musicClass'] = wd8b50, window['_videoClass'] = _omac7;
        }, k0bd['_onStageResize'] = function () {
            var mop = nj3$iq['stage']['_canvasTransform']['identity']();
            mop['scale'](b05w8d['width'] / nq3iu['canvas']['width'] / jxi$['getPixelRatio'](), b05w8d['height'] / nq3iu['canvas']['height'] / jxi$['getPixelRatio']());
        }, k0bd['wxinputFocus'] = function (k96sub) {
            var vzhrf = jn3squ['inputElement']['target'];
            if (vzhrf && !vzhrf['editable']) return;
            a7_4vf['window']['wx']['offKeyboardConfirm'](), a7_4vf['window']['wx']['offKeyboardInput'](), a7_4vf['window']['wx']['showKeyboard']({
                'defaultValue': vzhrf['text'],
                'maxLength': vzhrf['maxChars'],
                'multiple': vzhrf['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (mcpeo) {},
                'fail': function (hx$gl) {}
            }), a7_4vf['window']['wx']['onKeyboardConfirm'](function (g$xilt) {
                var ryfz4 = g$xilt ? g$xilt['value'] : '';
                vzhrf['text'] = ryfz4, vzhrf['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), a7_4vf['window']['wx']['onKeyboardInput'](function (y_v74f) {
                var m74_ac = y_v74f ? y_v74f['value'] : '';
                if (!vzhrf['multiline']) {
                    if (m74_ac['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                vzhrf['text'] = m74_ac, vzhrf['event']('input');
            });
        }, k0bd['inputEnter'] = function () {
            jn3squ['inputElement']['target']['focus'] = ![];
        }, k0bd['wxinputblur'] = function () {
            k0bd['hideKeyboard']();
        }, k0bd['hideKeyboard'] = function () {
            a7_4vf['window']['wx']['offKeyboardConfirm'](), a7_4vf['window']['wx']['offKeyboardInput'](), a7_4vf['window']['wx']['hideKeyboard']({
                'success': function (cape) {
                    console['log']('隐藏键盘');
                },
                'fail': function (qsknu) {
                    console['log']('隐藏键盘出错:' + (qsknu ? qsknu['errMsg'] : ''));
                }
            });
        }, k0bd;
    }(),
        fzhlyr = function () {
        function cm_7a4() {}
        n6s9ku(cm_7a4, 'laya.wx.mini.MiniLoader');
        var _fzv = cm_7a4['prototype'];
        return _fzv['load'] = function (v_47a, nqu9sk, xqi$j3, qjn$, k9d0) {
            xqi$j3 === void 0x0 && (xqi$j3 = !![]), k9d0 === void 0x0 && (k9d0 = ![]);
            var n9ksqu = this;
            n9ksqu['_url'] = v_47a;
            if (v_47a['indexOf']('data:image') === 0x0) n9ksqu['_type'] = nqu9sk = 'image';else n9ksqu['_type'] = nqu9sk || (nqu9sk = n9ksqu['getTypeFromUrl'](v_47a));
            n9ksqu['_cache'] = xqi$j3, n9ksqu['_data'] = null;
            var gjxi$t = 'ascii';
            if (v_47a['indexOf']('.fnt') != -0x1) gjxi$t = 'utf8';else nqu9sk == 'arraybuffer' && (gjxi$t = '');
            ;
            var hzlgtr = y7fv['getFileExtension'](v_47a);
            if (cm_7a4['_fileTypeArr']['indexOf'](hzlgtr) != -0x1) a7_4vf['EnvConfig']['load']['call'](this, v_47a, nqu9sk, xqi$j3, qjn$, k9d0);else {
                if (!itj$['getFileInfo'](v_47a)) {
                    if (v_47a['indexOf']('layaNativeDir/') != -0x1) {
                        if (a7_4vf['isZiYu']) {
                            var zlryh = itj$['ziyuFileData'][v_47a];
                            n9ksqu['onLoaded'](zlryh);
                            return;
                        } else {
                            cosnole['log']('read read'), itj$['read'](v_47a, gjxi$t, new w5d08(cm_7a4, cm_7a4['onReadNativeCallBack'], [gjxi$t, v_47a, nqu9sk, xqi$j3, qjn$, k9d0, n9ksqu]));
                            return;
                        }
                    }
                    if (mco7a_['rootPath'] == '') var gzlth = v_47a;else gzlth = v_47a['split'](mco7a_['rootPath'])[0x0];
                    v_47a['indexOf']('http://') != -0x1 || v_47a['indexOf']('https://') != -0x1 ? a7_4vf['EnvConfig']['load']['call'](n9ksqu, v_47a, nqu9sk, xqi$j3, qjn$, k9d0) : itj$['readFile'](gzlth, gjxi$t, new w5d08(cm_7a4, cm_7a4['onReadNativeCallBack'], [gjxi$t, v_47a, nqu9sk, xqi$j3, qjn$, k9d0, n9ksqu]), v_47a);
                } else a7_4vf['EnvConfig']['load']['call'](this, v_47a, nqu9sk, xqi$j3, qjn$, k9d0);
            }
        }, _fzv['resMgrLoad'] = function (x$jgt, un9sk6, tzrhg, b6k0, f_z4v, lhxtrg, tlyrz) {
            tzrhg === void 0x0 && (tzrhg = 0x0), b6k0 === void 0x0 && (b6k0 = ![]), f_z4v === void 0x0 && (f_z4v = ![]), lhxtrg === void 0x0 && (lhxtrg = 0x0), tlyrz === void 0x0 && (tlyrz = 0x3), x$jgt['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', x$jgt), a7_4vf['EnvConfig']['resMgrLoad'](x$jgt, (uqi3n, frzyh, uijq3n) => {
                cm_7a4['prototype']['resMgrLoadCallBack'](uqi3n, frzyh, uijq3n, un9sk6);
            }, tzrhg, b6k0, f_z4v, lhxtrg, tlyrz);
        }, _fzv['resMgrLoadCallBack'] = function (sb96k0, ryzht, dwb5, lthrz) {
            console['log']('buff:::', sb96k0, dwb5, itj$['fileNativeDir'] + '///' + itj$['fileListName']), lthrz(sb96k0, ryzht, dwb5);
        }, _fzv['clearRes'] = function (v4a_7f, jxi$q3) {
            jxi$q3 === void 0x0 && (jxi$q3 = ![]);
            var un9q3s = this;
            un9q3s['clearRes'](v4a_7f, jxi$q3);
            var ceop = itj$['getFileInfo'](v4a_7f);
            if (ceop && (v4a_7f['indexOf']('http://') != -0x1 || v4a_7f['indexOf']('https://') != -0x1)) {
                var hyfzlr = ceop['md5'],
                    lgxtrh = itj$['getFileNativePath'](hyfzlr);
                itj$['remove'](lgxtrh);
            }
        }, cm_7a4['onReadNativeCallBack'] = function (b9uk6s, moca_, q3snj, yhrvz, hgx, nusq9, am_v, xg$itl, acmpoe) {
            yhrvz === void 0x0 && (yhrvz = !![]), nusq9 === void 0x0 && (nusq9 = ![]), xg$itl === void 0x0 && (xg$itl = 0x0);
            if (!xg$itl) {
                var oaecpm;
                if (q3snj == 'json' || q3snj == 'atlas') oaecpm = a7_4vf['getJson'](acmpoe['data']);else q3snj == 'xml' ? oaecpm = y7fv['parseXMLFromString'](acmpoe['data']) : oaecpm = acmpoe['data'];
                am_v['onLoaded'](oaecpm), !a7_4vf['isZiYu'] && a7_4vf['isPosMsgYu'] && q3snj != 'arraybuffer' && wx['postMessage']({
                    'url': moca_,
                    'data': oaecpm,
                    'isLoad': !![]
                });
            } else xg$itl == 0x1 && a7_4vf['EnvConfig']['load']['call'](am_v, moca_, q3snj, yhrvz, hgx, nusq9);
        }, uji3q(cm_7a4, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), cm_7a4;
    }(),
        itj$ = function (z4rfv) {
        function gthzl() {
            gthzl['__super']['call'](this);
            ;
        }
        return n6s9ku(gthzl, 'laya.wx.mini.MiniFileMgr', z4rfv), gthzl['isLoadFile'] = function (mocae) {
            return gthzl['_fileTypeArr']['indexOf'](mocae) != -0x1 ? !![] : ![];
        }, gthzl['getFileInfo'] = function (x$3qj) {
            var qunk9s = x$3qj['split']('?')[0x0],
                gxrth = gthzl['filesListObj'][qunk9s];
            if (gxrth == null) return null;else return gxrth;
            return null;
        }, gthzl['onFileUpdate'] = function (frlzh, a7m_v) {
            var cp7mo = frlzh['split']('/'),
                zv_yf4 = cp7mo[cp7mo['length'] - 0x1],
                niq$j3 = gthzl['getFileInfo'](a7m_v);
            if (niq$j3 == null) gthzl['onSaveFile'](a7m_v, zv_yf4);else {
                if (niq$j3['readyUrl'] != a7m_v) gthzl['remove'](zv_yf4, a7m_v);
            }
        }, gthzl['exits'] = function (zytlr, nqsu9k) {
            var hzrlt = gthzl['getFileNativePath'](zytlr);
            gthzl['fs']['getFileInfo']({
                'filePath': hzrlt,
                'success': function (_vzf) {
                    nqsu9k != null && nqsu9k['runWith']([0x0, _vzf]);
                },
                'fail': function (i3juq) {
                    nqsu9k != null && nqsu9k['runWith']([0x1, i3juq]);
                }
            });
        }, gthzl['read'] = function (c47_, rxthl, f4av7, b0d) {
            rxthl === void 0x0 && (rxthl = 'ascill'), b0d === void 0x0 && (b0d = '');
            var vfz_4y;
            b0d != '' ? vfz_4y = gthzl['getFileNativePath'](c47_) : vfz_4y = c47_, gthzl['fs']['readFile']({
                'filePath': vfz_4y,
                'encoding': rxthl,
                'success': function (y4zv_f) {
                    f4av7 != null && f4av7['runWith']([0x0, y4zv_f]);
                },
                'fail': function (ubs) {
                    if (ubs && b0d != '') gthzl['down'](b0d, rxthl, f4av7, b0d);else f4av7 != null && f4av7['runWith']([0x1]);
                }
            });
        }, gthzl['readNativeFile'] = function (y4_fzv, $gxhlt) {
            gthzl['fs']['readFile']({
                'filePath': y4_fzv,
                'encoding': '',
                'success': function (b8w05) {
                    $gxhlt != null && $gxhlt['runWith']([0x0]);
                },
                'fail': function (poacm7) {
                    $gxhlt != null && $gxhlt['runWith']([0x1]);
                }
            });
        }, gthzl['down'] = function ($jqi3n, iq3j$n, nui, nqjui) {
            iq3j$n === void 0x0 && (iq3j$n = 'ascill'), nqjui === void 0x0 && (nqjui = '');
            var k960 = gthzl['getFileNativePath'](nqjui),
                ij3g$ = gthzl['wxdown']({
                'url': $jqi3n,
                'filePath': k960,
                'success': function (trhlzy) {
                    if (trhlzy['statusCode'] === 0xc8) gthzl['readFile'](trhlzy['filePath'], iq3j$n, nui, nqjui);
                },
                'fail': function (a_7f4v) {
                    nui != null && nui['runWith']([0x1, a_7f4v]);
                }
            });
            ij3g$['onProgressUpdate'](function (frlzyh) {
                nui != null && nui['runWith']([0x2, frlzyh['progress']]);
            });
        }, gthzl['readFile'] = function (xgrhl, $xigj, txi$gl, yvfrhz) {
            $xigj === void 0x0 && ($xigj = 'ascill'), yvfrhz === void 0x0 && (yvfrhz = ''), gthzl['fs']['readFile']({
                'filePath': xgrhl,
                'encoding': $xigj,
                'success': function (c_oam7) {
                    if (xgrhl['indexOf']('http://') != -0x1 || xgrhl['indexOf']('https://') != -0x1) gthzl['onFileUpdate'](xgrhl, yvfrhz);
                    txi$gl != null && txi$gl['runWith']([0x0, c_oam7]);
                },
                'fail': function (dw182) {
                    if (dw182) txi$gl != null && txi$gl['runWith']([0x1, dw182]);
                }
            });
        }, gthzl['downImg'] = function (xthl$g, lyhzrf, vrfyzh) {
            vrfyzh === void 0x0 && (vrfyzh = '');
            var qinju3 = gthzl['wxdown']({
                'url': xthl$g,
                'success': function (uqksn) {
                    uqksn['statusCode'] === 0xc8 && gthzl['copyFile'](uqksn['tempFilePath'], vrfyzh, lyhzrf);
                },
                'fail': function (dkb) {
                    lyhzrf != null && lyhzrf['runWith']([0x1, dkb]);
                }
            });
        }, gthzl['copyFile'] = function (k69us, njq3s, d06b9) {
            var _fy74 = k69us['split']('/'),
                ukns9q = _fy74[_fy74['length'] - 0x1],
                pomca = njq3s['split']('?')[0x0],
                gxth = gthzl['getFileInfo'](njq3s),
                vzyr = gthzl['getFileNativePath'](ukns9q);
            gthzl['fs']['copyFile']({
                'srcPath': k69us,
                'destPath': vzyr,
                'success': function (g$xlth) {
                    if (!gxth) gthzl['onSaveFile'](njq3s, ukns9q), d06b9 != null && d06b9['runWith']([0x0]);else {
                        if (gxth['readyUrl'] != njq3s) gthzl['remove'](ukns9q, njq3s, d06b9);
                    }
                },
                'fail': function (hyzlrf) {
                    d06b9 != null && d06b9['runWith']([0x1, hyzlrf]);
                }
            });
        }, gthzl['getFileNativePath'] = function (tghx) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + tghx;
        }, gthzl['remove'] = function (yzthrl, om7ca_, ksb60) {
            om7ca_ === void 0x0 && (om7ca_ = '');
            var glhxt$ = gthzl['getFileInfo'](om7ca_),
                uqjns3 = gthzl['getFileNativePath'](glhxt$['md5']);
            nj3$iq['loader']['clearRes'](glhxt$['readyUrl']), gthzl['fs']['unlink']({
                'filePath': uqjns3,
                'success': function (z4fvry) {
                    if (om7ca_ != '') gthzl['onSaveFile'](om7ca_, yzthrl);
                    ksb60 != null && ksb60['runWith']([0x0]);
                },
                'fail': function (capeom) {}
            });
        }, gthzl['onSaveFile'] = function (a_f, om7a_c) {
            var hfl = a_f['split']('?')[0x0];
            gthzl['filesListObj'][hfl] = {
                'md5': om7a_c,
                'readyUrl': a_f
            }, gthzl['fs']['writeFile']({
                'filePath': gthzl['fileNativeDir'] + '/' + gthzl['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](gthzl['filesListObj']),
                'success': function (gzlh) {
                    console['log']('写入测试测试成功：', gzlh);
                },
                'fail': function (tyhl) {
                    console['log']('写入测试测试失败：', tyhl);
                }
            });
        }, gthzl['existDir'] = function (mepac, v7y4) {
            gthzl['fs']['mkdir']({
                'dirPath': mepac,
                'success': function (htg) {
                    v7y4 != null && v7y4['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (tgzrh) {
                    if (tgzrh['errMsg']['indexOf']('file already exists') != -0x1) gthzl['readSync'](gthzl['fileListName'], 'utf8', v7y4);else v7y4 != null && v7y4['runWith']([0x1, tgzrh]);
                }
            });
        }, gthzl['readSync'] = function (k69s0b, sqku9, uks9n, d50wb8) {
            sqku9 === void 0x0 && (sqku9 = 'ascill'), d50wb8 === void 0x0 && (d50wb8 = '');
            var nqsu9 = gthzl['getFileNativePath'](k69s0b),
                a7cmp;
            try {
                a7cmp = gthzl['fs']['readFileSync'](nqsu9), uks9n != null && uks9n['runWith']([0x0, { 'data': a7cmp }]);
            } catch (emao) {
                uks9n != null && uks9n['runWith']([0x1]);
            }
        }, gthzl['readCache'] = function () {}, gthzl['writeCache'] = function (f4zry) {
            var hzgtlr = readyUrl['split']('?')[0x0];
            gthzl['filesListObj'][hzgtlr] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, gthzl['fs']['writeFile']({
                'filePath': gthzl['fileNativeDir'] + '/' + gthzl['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](gthzl['filesListObj']),
                'success': function (tlzg) {},
                'fail': function (w5d812) {}
            });
        }, gthzl['setNativeFileDir'] = function (zhtlry) {
            gthzl['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + zhtlry;
        }, gthzl['filesListObj'] = {}, gthzl['fileNativeDir'] = null, gthzl['fileListName'] = 'layaairfiles.txt', gthzl['ziyuFileData'] = {}, uji3q(gthzl, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), gthzl;
    }(camepo),
        wd8b50 = function (htzlyr) {
        function iqn3j$() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], iqn3j$['__super']['call'](this), this['_sound'] = iqn3j$['_createSound'](), this['_chanell'] = new sun3q(this['_sound']);
        }
        n6s9ku(iqn3j$, 'laya.wx.mini.MiniSound', htzlyr);
        var vm47_ = iqn3j$['prototype'];
        return vm47_['load'] = function (zrlfyh) {
            var qk9usn = this;
            zrlfyh = mco7a_['formatURL'](zrlfyh), this['url'] = zrlfyh;
            if (iqn3j$['_audioCache'][zrlfyh]) {
                this['event']('complete');
                return;
            }
            function $jtigx() {
                if (iqn3j$['_null'] != undefined) qk9usn['_sound']['onCanplay'](iqn3j$['_null']), qk9usn['_sound']['onError'](iqn3j$['_null']);else try {
                    qk9usn['_sound']['onCanplay'](null), qk9usn['_sound']['onError'](null), iqn3j$['_null'] = null;
                } catch (yf_47v) {
                    console['warn']('[wxmini] _clearSound:' + yf_47v), qk9usn['_sound']['onCanplay'](nsquk9), qk9usn['_sound']['onError'](nsquk9), iqn3j$['_null'] = nsquk9;
                }
            }
            function m7a_4c() {
                hvfyzr['loaded'] = !![], hvfyzr['event']('complete'), iqn3j$['_audioCache'][hvfyzr['url']] = hvfyzr;
            }
            function vzyfh(av) {
                console['error']('errCode=' + av['errCode'] + '  errMsg=' + av['errMsg']), hvfyzr['event']('error');
            }
            function nsquk9() {}
            this['_sound']['onCanplay'](m7a_4c), this['_sound']['onError'](vzyfh), this['_sound']['src'] = zrlfyh;
            var hvfyzr = this;
        }, vm47_['play'] = function (s9qnu3, ca_7m4) {
            s9qnu3 === void 0x0 && (s9qnu3 = 0x0), ca_7m4 === void 0x0 && (ca_7m4 = 0x0);
            var bkd50, qujsn;
            if (this['url'] == db96k0['_tMusic']) {
                if (!iqn3j$['_musicAudio']) iqn3j$['_musicAudio'] = this['_sound'];
                bkd50 = iqn3j$['_musicAudio'], qujsn = this['_chanell'];
            } else bkd50 = this['_sound'], qujsn = this['_chanell'];
            return bkd50['src'] = this['url'], bkd50['startTime'] = 0x0, qujsn['isStopped'] && (qujsn['url'] = this['url'], qujsn['loops'] = ca_7m4, qujsn['startTime'] = s9qnu3, qujsn['play'](), db96k0['addChannel'](qujsn)), qujsn;
        }, vm47_['dispose'] = function () {
            var fa7_ = iqn3j$['_audioCache'][this['url']];
            fa7_ && (fa7_['src'] = '', delete iqn3j$['_audioCache'][this['url']]);
        }, u6s9kb(0x0, vm47_, 'duration', function () {
            return this['_sound']['duration'];
        }), iqn3j$['_createSound'] = function () {
            iqn3j$['_id']++;
            var thlgrz = a7_4vf['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return thlgrz;
        }, iqn3j$['_musicAudio'] = null, iqn3j$['_id'] = 0x0, iqn3j$['_audioCache'] = {}, iqn3j$['_null'] = undefined, iqn3j$;
    }(camepo),
        sun3q = function (_47v) {
        function ghrlx(apoc) {
            this['_audio'] = null, this['_onEnd'] = null, ghrlx['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = apoc, this['_onEnd'] = y7fv['bind'](this['__onEnd'], this), apoc['onEnded'](this['_onEnd']);
        }
        n6s9ku(ghrlx, 'laya.wx.mini.MiniSoundChannel', _47v);
        var f4z_ = ghrlx['prototype'];
        return f4z_['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (nj3$iq['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, f4z_['__onNull'] = function () {}, f4z_['play'] = function () {
            this['isStopped'] = ![], db96k0['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, f4z_['stop'] = function () {
            this['isStopped'] = !![], db96k0['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, f4z_['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, f4z_['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], db96k0['addChannel'](this), this['_audio']['play']();
        }, u6s9kb(0x0, f4z_, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), u6s9kb(0x0, f4z_, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), u6s9kb(0x0, f4z_, 'volume', function () {
            return 0x1;
        }, function (_mao7) {}), ghrlx['_null'] = undefined, ghrlx;
    }(cm_a4),
        _omac7 = function () {
        function b9k06() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = a7_4vf['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        n6s9ku(b9k06, 'laya.wx.mini.MiniVideo');
        var kbs60 = b9k06['prototype'];
        return kbs60['on'] = function (b8d0, b6s9, yzrlht) {
            if (b8d0 == 'loadedmetadata') this['onPlayFunc'] = yzrlht['bind'](b6s9), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else b8d0 == 'ended' && (this['onEndedFunC'] = yzrlht['bind'](b6s9), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, kbs60['onTimeUpdateFunc'] = function ($ltixg) {
            this['position'] = $ltixg['position'], this['_duration'] = $ltixg['duration'];
        }, kbs60['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, kbs60['onended'] = function (d9k0b, $gixtj) {
            this['onEndedFunC'] = $gixtj['bind'](d9k0b), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, kbs60['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, kbs60['off'] = function (nkqsu9, w5d28, lzrght) {
            if (nkqsu9 == 'loadedmetadata') this['onPlayFunc'] = lzrght['bind'](w5d28), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else nkqsu9 == 'ended' && (this['onEndedFunC'] = lzrght['bind'](w5d28), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, kbs60['load'] = function (bw8) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = bw8;
        }, kbs60['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, kbs60['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, kbs60['size'] = function (qjui3n, s69buk) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = qjui3n, this['videoElement']['height'] = s69buk;
        }, kbs60['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, kbs60['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, u6s9kb(0x0, kbs60, 'duration', function () {
            return this['_duration'];
        }), u6s9kb(0x0, kbs60, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (v7f_a4) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = v7f_a4;
        }), u6s9kb(0x0, kbs60, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), u6s9kb(0x0, kbs60, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), u6s9kb(0x0, kbs60, 'ended', function () {
            return this['videoend'];
        }), u6s9kb(0x0, kbs60, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (f7_v4a) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = f7_v4a;
        }), u6s9kb(0x0, kbs60, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (x$i3j) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = x$i3j;
        }), u6s9kb(0x0, kbs60, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (xtli) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = xtli;
        }), u6s9kb(0x0, kbs60, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), u6s9kb(0x0, kbs60, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (j$ix3q) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = j$ix3q;
        }), u6s9kb(0x0, kbs60, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (y_4zfv) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = y_4zfv;
        }), u6s9kb(0x0, kbs60, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), u6s9kb(0x0, kbs60, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (q$jin3) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = q$jin3;
        }), u6s9kb(0x0, kbs60, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (thyzl) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = thyzl;
        }), u6s9kb(0x0, kbs60, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (jgt$xi) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = jgt$xi;
        }), b9k06;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var d9b60k in Laya) {
        var uns3 = Laya[d9b60k];
        uns3 && uns3['__isclass'] && (exports[d9b60k] = uns3);
    }
});