var b = wx.$e;
(function (window, document, qju3ni) {
    var zyvrhf = qju3ni['un'],
        k6 = qju3ni['uns'],
        u3sjqn = qju3ni['static'],
        zrhyfl = qju3ni['class'],
        vy_zf4 = qju3ni['getset'],
        yfrz4 = qju3ni['__newvec'],
        zhryfv = laya['utils']['Browser'],
        yfz = laya['events']['Event'],
        nu3q9s = laya['events']['EventDispatcher'],
        coap = laya['resource']['HTMLImage'],
        vzrfyh = laya['utils']['Handler'],
        jtgi = laya['display']['Input'],
        b8wd5 = laya['net']['Loader'],
        xl$tgh = laya['maths']['Matrix'],
        paoce = laya['renders']['Render'],
        c_4m = laya['utils']['RunDriver'],
        k69db = laya['media']['Sound'],
        fyzhv = laya['media']['SoundChannel'],
        hrzlfy = laya['media']['SoundManager'],
        bus = laya['display']['Stage'],
        kusn6 = laya['net']['URL'],
        bus69k = laya['utils']['Utils'],
        rlzfh = function () {
        function ujnq3() {}
        return zrhyfl(ujnq3, 'laya.wx.mini.MiniAdpter'), ujnq3['getJson'] = function (s3jnq) {
            return JSON['parse'](s3jnq);
        }, ujnq3['init'] = function (qujni3, mpcoa7) {
            qujni3 === void 0x0 && (qujni3 = ![]), mpcoa7 === void 0x0 && (mpcoa7 = ![]);
            if (ujnq3['_inited']) return;
            ujnq3['window'] = window;
            if (ujnq3['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            ujnq3['_inited'] = !![], ujnq3['isZiYu'] = mpcoa7, ujnq3['isPosMsgYu'] = qujni3, ujnq3['EnvConfig'] = {}, !ujnq3['isZiYu'] && (lhrzty['setNativeFileDir']('/layaairGame'), lhrzty['existDir'](lhrzty['fileNativeDir'], vzrfyh['create'](ujnq3, ujnq3['onMkdirCallBack']))), ujnq3['window']['focus'] = function () {}, qju3ni['getUrlPath'] = function () {}, ujnq3['window']['logtime'] = function (ujniq3) {}, ujnq3['window']['alertTimeLog'] = function (x$gtil) {}, ujnq3['window']['resetShareInfo'] = function () {}, ujnq3['window']['CanvasRenderingContext2D'] = function () {}, ujnq3['window']['CanvasRenderingContext2D']['prototype'] = ujnq3['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], ujnq3['window']['document']['body']['appendChild'] = function () {}, ujnq3['EnvConfig']['pixelRatioInt'] = 0x0, c_4m['getPixelRatio'] = ujnq3['pixelRatio'], ujnq3['_preCreateElement'] = zhryfv['createElement'], zhryfv['createElement'] = ujnq3['createElement'], c_4m['createShaderCondition'] = ujnq3['createShaderCondition'], bus69k['parseXMLFromString'] = ujnq3['parseXMLFromString'], jtgi['_createInputElement'] = gx$['_createInputElement'], ujnq3['EnvConfig']['load'] = b8wd5['prototype']['load'], b8wd5['prototype']['load'] = i$x3j['prototype']['load'], ujnq3['isZiYu'] && qujni3 && wx['onMessage'](function (hlyfr) {
                hlyfr['isLoad'] && (lhrzty['ziyuFileData'][hlyfr['url']] = hlyfr['data']);
            });
        }, ujnq3['onMkdirCallBack'] = function (rtlgxh, ltixg) {
            if (!rtlgxh) lhrzty['filesListObj'] = JSON['parse'](ltixg['data']);
        }, ujnq3['pixelRatio'] = function () {
            if (!ujnq3['EnvConfig']['pixelRatioInt']) try {
                var u3jsq = wx['getSystemInfoSync']();
                return ujnq3['EnvConfig']['pixelRatioInt'] = u3jsq['pixelRatio'], u3jsq = u3jsq, u3jsq['pixelRatio'];
            } catch (t$xj) {}
            return ujnq3['EnvConfig']['pixelRatioInt'];
        }, ujnq3['createElement'] = function (_7v4fa) {
            if (_7v4fa == 'canvas') {
                var ujiq3;
                return ujnq3['idx'] == 0x1 ? ujnq3['isZiYu'] ? (ujiq3 = sharedCanvas, ujiq3['style'] = {}) : ujiq3 = window['canvas'] : ujiq3 = window['wx']['createCanvas'](), ujnq3['idx']++, ujiq3;
            } else {
                if (_7v4fa == 'textarea' || _7v4fa == 'input') return ujnq3['onCreateInput'](_7v4fa);else {
                    if (_7v4fa == 'div') {
                        var ecpmo = ujnq3['_preCreateElement'](_7v4fa);
                        return ecpmo['contains'] = function (rvzyf) {
                            return null;
                        }, ecpmo['removeChild'] = function (li$x) {}, ecpmo;
                    } else return ujnq3['_preCreateElement'](_7v4fa);
                }
            }
        }, ujnq3['onCreateInput'] = function (gji3$) {
            var lght$x = ujnq3['_preCreateElement'](gji3$);
            return lght$x['focus'] = gx$['wxinputFocus'], lght$x['blur'] = gx$['wxinputblur'], lght$x['style'] = {}, lght$x['value'] = 0x0, lght$x['parentElement'] = {}, lght$x['placeholder'] = {}, lght$x['type'] = {}, lght$x['setColor'] = function (vr4) {}, lght$x['setType'] = function (u9skn) {}, lght$x['setFontFace'] = function (lxit$) {}, lght$x['addEventListener'] = function (j3ni) {}, lght$x['contains'] = function (yzfv4r) {
                return null;
            }, lght$x['removeChild'] = function (qnuks9) {}, lght$x;
        }, ujnq3['createShaderCondition'] = function (qju3i) {
            var db658 = this,
                kd650b = function () {
                var njqs = qju3i;
                return db658[qju3i['replace']('this.', '')];
            };
            return kd650b;
        }, ujnq3['EnvConfig'] = null, ujnq3['window'] = null, ujnq3['_preCreateElement'] = null, ujnq3['_inited'] = ![], ujnq3['wxRequest'] = null, ujnq3['systemInfo'] = null, ujnq3['version'] = '0.0.1', ujnq3['isZiYu'] = ![], ujnq3['isPosMsgYu'] = ![], ujnq3['parseXMLFromString'] = function (bdk90) {
            var xlhg$t, q$ji3;
            bdk90 = bdk90['replace'](/>\s+</g, '><');
            try {
                xlhg$t = new window['Parser']['DOMParser']()['parseFromString'](bdk90, 'text/xml');
            } catch (mopea) {
                throw '需要引入xml解析库文件';
            }
            return xlhg$t;
        }, ujnq3['idx'] = 0x1, ujnq3;
    }(),
        iq3u = function () {
        function b0k6s() {}
        zrhyfl(b0k6s, 'laya.wx.mini.MiniImage');
        var w5082d = b0k6s['prototype'];
        return w5082d['_loadImage'] = function (knsu) {
            var vy_47 = this,
                $qx = ![];
            knsu['indexOf']('layaNativeDir/') == -0x1 && ($qx = !![], knsu = kusn6['formatURL'](knsu));
            if (!lhrzty['getFileInfo'](knsu)) {
                if (knsu['indexOf']('http://') != -0x1 || knsu['indexOf']('https://') != -0x1) lhrzty['downImg'](knsu, new vzrfyh(b0k6s, b0k6s['onDownImgCallBack'], [knsu, vy_47]), knsu);else b0k6s['onCreateImage'](knsu, vy_47, !![]);
            } else b0k6s['onCreateImage'](knsu, vy_47, !$qx);
        }, b0k6s['onDownImgCallBack'] = function (qu3n9, i$xlgt, ylztr) {
            if (!ylztr) b0k6s['onCreateImage'](qu3n9, i$xlgt);else i$xlgt['onError'](null);
        }, b0k6s['onCreateImage'] = function (bu9k6, copam, txil$g) {
            txil$g === void 0x0 && (txil$g = ![]);
            var k5db;
            if (!txil$g) {
                var yf7_v4 = lhrzty['getFileInfo'](bu9k6),
                    ksq = yf7_v4['md5'];
                k5db = lhrzty['getFileNativePath'](ksq);
            } else k5db = bu9k6;
            if (copam['imgCache'] == null) copam['imgCache'] = {};
            var grl;
            function sk9b6u() {
                grl['onload'] = null, grl['onerror'] = null, delete copam['imgCache'][bu9k6];
            }
            ;
            var fyhv = function () {
                sk9b6u(), copam['onLoaded'](grl);
            },
                kb506d = function () {
                sk9b6u(), copam['event']('error', 'Load image failed');
            };
            copam['_type'] == 'nativeimage' ? (grl = new zhryfv['window']['Image'](), grl['crossOrigin'] = '', grl['onload'] = fyhv, grl['onerror'] = kb506d, grl['src'] = k5db, copam['imgCache'][bu9k6] = grl) : new coap['create'](k5db, {
                'onload': fyhv,
                'onerror': kb506d,
                'onCreate': function (vm74_) {
                    grl = vm74_, copam['imgCache'][bu9k6] = vm74_;
                }
            });
        }, b0k6s;
    }(),
        gx$ = function () {
        function _v7y() {}
        return zrhyfl(_v7y, 'laya.wx.mini.MiniInput'), _v7y['_createInputElement'] = function () {
            jtgi['_initInput'](jtgi['area'] = zhryfv['createElement']('textarea')), jtgi['_initInput'](jtgi['input'] = zhryfv['createElement']('input')), jtgi['inputContainer'] = zhryfv['createElement']('div'), jtgi['inputContainer']['style']['position'] = 'absolute', jtgi['inputContainer']['style']['zIndex'] = 0x186a0, zhryfv['container']['appendChild'](jtgi['inputContainer']), jtgi['inputContainer']['setPos'] = function (ijqx3$, sku96) {
                jtgi['inputContainer']['style']['left'] = ijqx3$ + 'px', jtgi['inputContainer']['style']['top'] = sku96 + 'px';
            }, qju3ni['stage']['on']('resize', null, _v7y['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (_z4f) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), hrzlfy['_soundClass'] = lxhtg, hrzlfy['_musicClass'] = lxhtg, window['_videoClass'] = b8d605;
        }, _v7y['_onStageResize'] = function () {
            var hlrzyt = qju3ni['stage']['_canvasTransform']['identity']();
            hlrzyt['scale'](zhryfv['width'] / paoce['canvas']['width'] / c_4m['getPixelRatio'](), zhryfv['height'] / paoce['canvas']['height'] / c_4m['getPixelRatio']());
        }, _v7y['wxinputFocus'] = function (oc_a) {
            var zfyv4r = jtgi['inputElement']['target'];
            if (zfyv4r && !zfyv4r['editable']) return;
            rlzfh['window']['wx']['offKeyboardConfirm'](), rlzfh['window']['wx']['offKeyboardInput'](), rlzfh['window']['wx']['showKeyboard']({
                'defaultValue': zfyv4r['text'],
                'maxLength': zfyv4r['maxChars'],
                'multiple': zfyv4r['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (_vm4a7) {},
                'fail': function (mpaco) {}
            }), rlzfh['window']['wx']['onKeyboardConfirm'](function (qn$i) {
                var qn9suk = qn$i ? qn$i['value'] : '';
                zfyv4r['text'] = qn9suk, zfyv4r['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), rlzfh['window']['wx']['onKeyboardInput'](function (fv4a_) {
                var $tglxh = fv4a_ ? fv4a_['value'] : '';
                if (!zfyv4r['multiline']) {
                    if ($tglxh['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                zfyv4r['text'] = $tglxh, zfyv4r['event']('input');
            });
        }, _v7y['inputEnter'] = function () {
            jtgi['inputElement']['target']['focus'] = ![];
        }, _v7y['wxinputblur'] = function () {
            _v7y['hideKeyboard']();
        }, _v7y['hideKeyboard'] = function () {
            rlzfh['window']['wx']['offKeyboardConfirm'](), rlzfh['window']['wx']['offKeyboardInput'](), rlzfh['window']['wx']['hideKeyboard']({
                'success': function (ijg$x) {
                    console['log']('隐藏键盘');
                },
                'fail': function (d60b9) {
                    console['log']('隐藏键盘出错:' + (d60b9 ? d60b9['errMsg'] : ''));
                }
            });
        }, _v7y;
    }(),
        i$x3j = function () {
        function nqui3j() {}
        zrhyfl(nqui3j, 'laya.wx.mini.MiniLoader');
        var ujqs3 = nqui3j['prototype'];
        return ujqs3['load'] = function (vm4a_7, o7mca_, qinju3, u9q3n, vz4fyr) {
            qinju3 === void 0x0 && (qinju3 = !![]), vz4fyr === void 0x0 && (vz4fyr = ![]);
            var g3jix = this;
            g3jix['_url'] = vm4a_7;
            if (vm4a_7['indexOf']('data:image') === 0x0) g3jix['_type'] = o7mca_ = 'image';else g3jix['_type'] = o7mca_ || (o7mca_ = g3jix['getTypeFromUrl'](vm4a_7));
            g3jix['_cache'] = qinju3, g3jix['_data'] = null;
            var d6k9 = 'ascii';
            if (vm4a_7['indexOf']('.fnt') != -0x1) d6k9 = 'utf8';else o7mca_ == 'arraybuffer' && (d6k9 = '');
            ;
            var aoemc = bus69k['getFileExtension'](vm4a_7);
            if (nqui3j['_fileTypeArr']['indexOf'](aoemc) != -0x1) rlzfh['EnvConfig']['load']['call'](this, vm4a_7, o7mca_, qinju3, u9q3n, vz4fyr);else {
                if (!lhrzty['getFileInfo'](vm4a_7)) {
                    if (vm4a_7['indexOf']('layaNativeDir/') != -0x1) {
                        if (rlzfh['isZiYu']) {
                            var cm47_ = lhrzty['ziyuFileData'][vm4a_7];
                            g3jix['onLoaded'](cm47_);
                            return;
                        } else {
                            cosnole['log']('read read'), lhrzty['read'](vm4a_7, d6k9, new vzrfyh(nqui3j, nqui3j['onReadNativeCallBack'], [d6k9, vm4a_7, o7mca_, qinju3, u9q3n, vz4fyr, g3jix]));
                            return;
                        }
                    }
                    if (kusn6['rootPath'] == '') var g$lh = vm4a_7;else g$lh = vm4a_7['split'](kusn6['rootPath'])[0x0];
                    vm4a_7['indexOf']('http://') != -0x1 || vm4a_7['indexOf']('https://') != -0x1 ? rlzfh['EnvConfig']['load']['call'](g3jix, vm4a_7, o7mca_, qinju3, u9q3n, vz4fyr) : lhrzty['readFile'](g$lh, d6k9, new vzrfyh(nqui3j, nqui3j['onReadNativeCallBack'], [d6k9, vm4a_7, o7mca_, qinju3, u9q3n, vz4fyr, g3jix]), vm4a_7);
                } else rlzfh['EnvConfig']['load']['call'](this, vm4a_7, o7mca_, qinju3, u9q3n, vz4fyr);
            }
        }, ujqs3['resMgrLoad'] = function (jxtgi$, gix$lt, bd0w58, $tigx, ji$3g, tglzrh, u9k6sn) {
            bd0w58 === void 0x0 && (bd0w58 = 0x0), $tigx === void 0x0 && ($tigx = ![]), ji$3g === void 0x0 && (ji$3g = ![]), tglzrh === void 0x0 && (tglzrh = 0x0), u9k6sn === void 0x0 && (u9k6sn = 0x3), jxtgi$['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', jxtgi$), rlzfh['EnvConfig']['resMgrLoad'](jxtgi$, (f_y74v, ecao, tglhrx) => {
                nqui3j['prototype']['resMgrLoadCallBack'](f_y74v, ecao, tglhrx, gix$lt);
            }, bd0w58, $tigx, ji$3g, tglzrh, u9k6sn);
        }, ujqs3['resMgrLoadCallBack'] = function (lh$tg, b56d0k, kbd096, dk906) {
            console['log']('buff:::', lh$tg, kbd096, lhrzty['fileNativeDir'] + '///' + lhrzty['fileListName']), dk906(lh$tg, b56d0k, kbd096);
        }, ujqs3['clearRes'] = function (amc4_, s9qu3) {
            s9qu3 === void 0x0 && (s9qu3 = ![]);
            var o7pmca = this;
            o7pmca['clearRes'](amc4_, s9qu3);
            var rgzhlt = lhrzty['getFileInfo'](amc4_);
            if (rgzhlt && (amc4_['indexOf']('http://') != -0x1 || amc4_['indexOf']('https://') != -0x1)) {
                var $i3 = rgzhlt['md5'],
                    sn9ku6 = lhrzty['getFileNativePath']($i3);
                lhrzty['remove'](sn9ku6);
            }
        }, nqui3j['onReadNativeCallBack'] = function (fyv_4z, usq3nj, ksq9, z4vry, lzry, moae, $tlxgh, u9nq3, fhrl) {
            z4vry === void 0x0 && (z4vry = !![]), moae === void 0x0 && (moae = ![]), u9nq3 === void 0x0 && (u9nq3 = 0x0);
            if (!u9nq3) {
                var pa7;
                if (ksq9 == 'json' || ksq9 == 'atlas') pa7 = rlzfh['getJson'](fhrl['data']);else ksq9 == 'xml' ? pa7 = bus69k['parseXMLFromString'](fhrl['data']) : pa7 = fhrl['data'];
                $tlxgh['onLoaded'](pa7), !rlzfh['isZiYu'] && rlzfh['isPosMsgYu'] && ksq9 != 'arraybuffer' && wx['postMessage']({
                    'url': usq3nj,
                    'data': pa7,
                    'isLoad': !![]
                });
            } else u9nq3 == 0x1 && rlzfh['EnvConfig']['load']['call']($tlxgh, usq3nj, ksq9, z4vry, lzry, moae);
        }, u3sjqn(nqui3j, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), nqui3j;
    }(),
        lhrzty = function (k09bd6) {
        function i$xj3() {
            i$xj3['__super']['call'](this);
            ;
        }
        return zrhyfl(i$xj3, 'laya.wx.mini.MiniFileMgr', k09bd6), i$xj3['isLoadFile'] = function (w058d2) {
            return i$xj3['_fileTypeArr']['indexOf'](w058d2) != -0x1 ? !![] : ![];
        }, i$xj3['getFileInfo'] = function (q$3ijx) {
            var aopmce = q$3ijx['split']('?')[0x0],
                lfyh = i$xj3['filesListObj'][aopmce];
            if (lfyh == null) return null;else return lfyh;
            return null;
        }, i$xj3['onFileUpdate'] = function (iqujn3, lxrhg) {
            var fvhzry = iqujn3['split']('/'),
                mav7_ = fvhzry[fvhzry['length'] - 0x1],
                qn3iu = i$xj3['getFileInfo'](lxrhg);
            if (qn3iu == null) i$xj3['onSaveFile'](lxrhg, mav7_);else {
                if (qn3iu['readyUrl'] != lxrhg) i$xj3['remove'](mav7_, lxrhg);
            }
        }, i$xj3['exits'] = function (ns9qu3, qj3ix) {
            var bd5 = i$xj3['getFileNativePath'](ns9qu3);
            i$xj3['fs']['getFileInfo']({
                'filePath': bd5,
                'success': function (ji3x$g) {
                    qj3ix != null && qj3ix['runWith']([0x0, ji3x$g]);
                },
                'fail': function (fz4y) {
                    qj3ix != null && qj3ix['runWith']([0x1, fz4y]);
                }
            });
        }, i$xj3['read'] = function (yrvh, j$t, xlrgt, j$3ix) {
            j$t === void 0x0 && (j$t = 'ascill'), j$3ix === void 0x0 && (j$3ix = '');
            var fhrylz;
            j$3ix != '' ? fhrylz = i$xj3['getFileNativePath'](yrvh) : fhrylz = yrvh, i$xj3['fs']['readFile']({
                'filePath': fhrylz,
                'encoding': j$t,
                'success': function (nujs3) {
                    xlrgt != null && xlrgt['runWith']([0x0, nujs3]);
                },
                'fail': function (s06b) {
                    if (s06b && j$3ix != '') i$xj3['down'](j$3ix, j$t, xlrgt, j$3ix);else xlrgt != null && xlrgt['runWith']([0x1]);
                }
            });
        }, i$xj3['readNativeFile'] = function (rhfvyz, lztyr) {
            i$xj3['fs']['readFile']({
                'filePath': rhfvyz,
                'encoding': '',
                'success': function (a7m_) {
                    lztyr != null && lztyr['runWith']([0x0]);
                },
                'fail': function ($tijgx) {
                    lztyr != null && lztyr['runWith']([0x1]);
                }
            });
        }, i$xj3['down'] = function (o7_cma, qun93, usq39n, ltx$gh) {
            qun93 === void 0x0 && (qun93 = 'ascill'), ltx$gh === void 0x0 && (ltx$gh = '');
            var d1w8 = i$xj3['getFileNativePath'](ltx$gh),
                m_a7oc = i$xj3['wxdown']({
                'url': o7_cma,
                'filePath': d1w8,
                'success': function (fzlyrh) {
                    if (fzlyrh['statusCode'] === 0xc8) i$xj3['readFile'](fzlyrh['filePath'], qun93, usq39n, ltx$gh);
                },
                'fail': function (oa7pcm) {
                    usq39n != null && usq39n['runWith']([0x1, oa7pcm]);
                }
            });
            m_a7oc['onProgressUpdate'](function (rhgzt) {
                usq39n != null && usq39n['runWith']([0x2, rhgzt['progress']]);
            });
        }, i$xj3['readFile'] = function (thz, k0d6b9, sb90, $j3) {
            k0d6b9 === void 0x0 && (k0d6b9 = 'ascill'), $j3 === void 0x0 && ($j3 = ''), i$xj3['fs']['readFile']({
                'filePath': thz,
                'encoding': k0d6b9,
                'success': function (i$t) {
                    if (thz['indexOf']('http://') != -0x1 || thz['indexOf']('https://') != -0x1) i$xj3['onFileUpdate'](thz, $j3);
                    sb90 != null && sb90['runWith']([0x0, i$t]);
                },
                'fail': function (tzyhl) {
                    if (tzyhl) sb90 != null && sb90['runWith']([0x1, tzyhl]);
                }
            });
        }, i$xj3['downImg'] = function (ca74_m, lrhyf, ji$q) {
            ji$q === void 0x0 && (ji$q = '');
            var sbuk6 = i$xj3['wxdown']({
                'url': ca74_m,
                'success': function ($ixltg) {
                    $ixltg['statusCode'] === 0xc8 && i$xj3['copyFile']($ixltg['tempFilePath'], ji$q, lrhyf);
                },
                'fail': function (hyrztl) {
                    lrhyf != null && lrhyf['runWith']([0x1, hyrztl]);
                }
            });
        }, i$xj3['copyFile'] = function (hlrt, kuq9n, vy47_f) {
            var zvrhy = hlrt['split']('/'),
                x$3ijq = zvrhy[zvrhy['length'] - 0x1],
                wd0285 = kuq9n['split']('?')[0x0],
                k06bs9 = i$xj3['getFileInfo'](kuq9n),
                yzf_ = i$xj3['getFileNativePath'](x$3ijq);
            i$xj3['fs']['copyFile']({
                'srcPath': hlrt,
                'destPath': yzf_,
                'success': function (w0b8d5) {
                    if (!k06bs9) i$xj3['onSaveFile'](kuq9n, x$3ijq), vy47_f != null && vy47_f['runWith']([0x0]);else {
                        if (k06bs9['readyUrl'] != kuq9n) i$xj3['remove'](x$3ijq, kuq9n, vy47_f);
                    }
                },
                'fail': function (q3inuj) {
                    vy47_f != null && vy47_f['runWith']([0x1, q3inuj]);
                }
            });
        }, i$xj3['getFileNativePath'] = function (xiq3) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + xiq3;
        }, i$xj3['remove'] = function (yzhfvr, b609dk, mo_ca7) {
            b609dk === void 0x0 && (b609dk = '');
            var rhvzy = i$xj3['getFileInfo'](b609dk),
                zrflh = i$xj3['getFileNativePath'](rhvzy['md5']);
            qju3ni['loader']['clearRes'](rhvzy['readyUrl']), i$xj3['fs']['unlink']({
                'filePath': zrflh,
                'success': function (m_co7) {
                    if (b609dk != '') i$xj3['onSaveFile'](b609dk, yzhfvr);
                    mo_ca7 != null && mo_ca7['runWith']([0x0]);
                },
                'fail': function (ao7pcm) {}
            });
        }, i$xj3['onSaveFile'] = function (mocep, htrylz) {
            var snuk6 = mocep['split']('?')[0x0];
            i$xj3['filesListObj'][snuk6] = {
                'md5': htrylz,
                'readyUrl': mocep
            }, i$xj3['fs']['writeFile']({
                'filePath': i$xj3['fileNativeDir'] + '/' + i$xj3['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](i$xj3['filesListObj']),
                'success': function (jxg3$) {
                    console['log']('写入测试测试成功：', jxg3$);
                },
                'fail': function (n3ju) {
                    console['log']('写入测试测试失败：', n3ju);
                }
            });
        }, i$xj3['existDir'] = function (zhlyrt, jix$g3) {
            i$xj3['fs']['mkdir']({
                'dirPath': zhlyrt,
                'success': function (w2d05) {
                    jix$g3 != null && jix$g3['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (lgthx) {
                    if (lgthx['errMsg']['indexOf']('file already exists') != -0x1) i$xj3['readSync'](i$xj3['fileListName'], 'utf8', jix$g3);else jix$g3 != null && jix$g3['runWith']([0x1, lgthx]);
                }
            });
        }, i$xj3['readSync'] = function (s6b, s9kb06, fyhlrz, ry4zvf) {
            s9kb06 === void 0x0 && (s9kb06 = 'ascill'), ry4zvf === void 0x0 && (ry4zvf = '');
            var nku69s = i$xj3['getFileNativePath'](s6b),
                zyrlhf;
            try {
                zyrlhf = i$xj3['fs']['readFileSync'](nku69s), fyhlrz != null && fyhlrz['runWith']([0x0, { 'data': zyrlhf }]);
            } catch (niuj3) {
                fyhlrz != null && fyhlrz['runWith']([0x1]);
            }
        }, i$xj3['readCache'] = function () {}, i$xj3['writeCache'] = function (qs9kun) {
            var fa_v74 = readyUrl['split']('?')[0x0];
            i$xj3['filesListObj'][fa_v74] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, i$xj3['fs']['writeFile']({
                'filePath': i$xj3['fileNativeDir'] + '/' + i$xj3['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](i$xj3['filesListObj']),
                'success': function (vy_4z) {},
                'fail': function (qx3ij) {}
            });
        }, i$xj3['setNativeFileDir'] = function (q$jxi3) {
            i$xj3['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + q$jxi3;
        }, i$xj3['filesListObj'] = {}, i$xj3['fileNativeDir'] = null, i$xj3['fileListName'] = 'layaairfiles.txt', i$xj3['ziyuFileData'] = {}, u3sjqn(i$xj3, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), i$xj3;
    }(nu3q9s),
        lxhtg = function (tix$lg) {
        function knu9s6() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], knu9s6['__super']['call'](this), this['_sound'] = knu9s6['_createSound'](), this['_chanell'] = new _74vma(this['_sound']);
        }
        zrhyfl(knu9s6, 'laya.wx.mini.MiniSound', tix$lg);
        var mcaoe = knu9s6['prototype'];
        return mcaoe['load'] = function (hgzltr) {
            var paoec = this;
            hgzltr = kusn6['formatURL'](hgzltr), this['url'] = hgzltr;
            if (knu9s6['_audioCache'][hgzltr]) {
                this['event']('complete');
                return;
            }
            function _c4m7a() {
                if (knu9s6['_null'] != undefined) paoec['_sound']['onCanplay'](knu9s6['_null']), paoec['_sound']['onError'](knu9s6['_null']);else try {
                    paoec['_sound']['onCanplay'](null), paoec['_sound']['onError'](null), knu9s6['_null'] = null;
                } catch (acempo) {
                    console['warn']('[wxmini] _clearSound:' + acempo), paoec['_sound']['onCanplay'](coa7m_), paoec['_sound']['onError'](coa7m_), knu9s6['_null'] = coa7m_;
                }
            }
            function sk9qnu() {
                qku9['loaded'] = !![], qku9['event']('complete'), knu9s6['_audioCache'][qku9['url']] = qku9;
            }
            function jit$(gilt$x) {
                console['error']('errCode=' + gilt$x['errCode'] + '  errMsg=' + gilt$x['errMsg']), qku9['event']('error');
            }
            function coa7m_() {}
            this['_sound']['onCanplay'](sk9qnu), this['_sound']['onError'](jit$), this['_sound']['src'] = hgzltr;
            var qku9 = this;
        }, mcaoe['play'] = function (x$gji, gj3) {
            x$gji === void 0x0 && (x$gji = 0x0), gj3 === void 0x0 && (gj3 = 0x0);
            var q$jn3, $xligt;
            if (this['url'] == hrzlfy['_tMusic']) {
                if (!knu9s6['_musicAudio']) knu9s6['_musicAudio'] = this['_sound'];
                q$jn3 = knu9s6['_musicAudio'], $xligt = this['_chanell'];
            } else q$jn3 = this['_sound'], $xligt = this['_chanell'];
            return q$jn3['src'] = this['url'], q$jn3['startTime'] = 0x0, $xligt['isStopped'] && ($xligt['url'] = this['url'], $xligt['loops'] = gj3, $xligt['startTime'] = x$gji, $xligt['play'](), hrzlfy['addChannel']($xligt)), $xligt;
        }, mcaoe['dispose'] = function () {
            var b650d8 = knu9s6['_audioCache'][this['url']];
            b650d8 && (b650d8['src'] = '', delete knu9s6['_audioCache'][this['url']]);
        }, vy_zf4(0x0, mcaoe, 'duration', function () {
            return this['_sound']['duration'];
        }), knu9s6['_createSound'] = function () {
            knu9s6['_id']++;
            var oamp = rlzfh['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return oamp;
        }, knu9s6['_musicAudio'] = null, knu9s6['_id'] = 0x0, knu9s6['_audioCache'] = {}, knu9s6['_null'] = undefined, knu9s6;
    }(nu3q9s),
        _74vma = function (c4a) {
        function f_7a4(_a7) {
            this['_audio'] = null, this['_onEnd'] = null, f_7a4['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = _a7, this['_onEnd'] = bus69k['bind'](this['__onEnd'], this), _a7['onEnded'](this['_onEnd']);
        }
        zrhyfl(f_7a4, 'laya.wx.mini.MiniSoundChannel', c4a);
        var yzfv_ = f_7a4['prototype'];
        return yzfv_['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (qju3ni['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, yzfv_['__onNull'] = function () {}, yzfv_['play'] = function () {
            this['isStopped'] = ![], hrzlfy['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, yzfv_['stop'] = function () {
            this['isStopped'] = !![], hrzlfy['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, yzfv_['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, yzfv_['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], hrzlfy['addChannel'](this), this['_audio']['play']();
        }, vy_zf4(0x0, yzfv_, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), vy_zf4(0x0, yzfv_, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), vy_zf4(0x0, yzfv_, 'volume', function () {
            return 0x1;
        }, function (fzyhl) {}), f_7a4['_null'] = undefined, f_7a4;
    }(fyzhv),
        b8d605 = function () {
        function k06() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = rlzfh['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        zrhyfl(k06, 'laya.wx.mini.MiniVideo');
        var rzlyht = k06['prototype'];
        return rzlyht['on'] = function (gt$lx, hzgl, qxi$j3) {
            if (gt$lx == 'loadedmetadata') this['onPlayFunc'] = qxi$j3['bind'](hzgl), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else gt$lx == 'ended' && (this['onEndedFunC'] = qxi$j3['bind'](hzgl), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, rzlyht['onTimeUpdateFunc'] = function (qun3) {
            this['position'] = qun3['position'], this['_duration'] = qun3['duration'];
        }, rzlyht['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, rzlyht['onended'] = function ($tlix, lhrfyz) {
            this['onEndedFunC'] = lhrfyz['bind']($tlix), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, rzlyht['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, rzlyht['off'] = function (q9snuk, rvzfhy, ij$g3) {
            if (q9snuk == 'loadedmetadata') this['onPlayFunc'] = ij$g3['bind'](rvzfhy), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else q9snuk == 'ended' && (this['onEndedFunC'] = ij$g3['bind'](rvzfhy), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, rzlyht['load'] = function (hyfzr) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = hyfzr;
        }, rzlyht['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, rzlyht['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, rzlyht['size'] = function (s96uk, xtji) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = s96uk, this['videoElement']['height'] = xtji;
        }, rzlyht['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, rzlyht['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, vy_zf4(0x0, rzlyht, 'duration', function () {
            return this['_duration'];
        }), vy_zf4(0x0, rzlyht, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (kd09b6) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = kd09b6;
        }), vy_zf4(0x0, rzlyht, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), vy_zf4(0x0, rzlyht, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), vy_zf4(0x0, rzlyht, 'ended', function () {
            return this['videoend'];
        }), vy_zf4(0x0, rzlyht, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (coaem) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = coaem;
        }), vy_zf4(0x0, rzlyht, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (i$3gx) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = i$3gx;
        }), vy_zf4(0x0, rzlyht, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (k0b5d6) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = k0b5d6;
        }), vy_zf4(0x0, rzlyht, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), vy_zf4(0x0, rzlyht, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function ($g3xi) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = $g3xi;
        }), vy_zf4(0x0, rzlyht, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (sk6n9u) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = sk6n9u;
        }), vy_zf4(0x0, rzlyht, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), vy_zf4(0x0, rzlyht, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (q3ij$n) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = q3ij$n;
        }), vy_zf4(0x0, rzlyht, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (i$nq3) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = i$nq3;
        }), vy_zf4(0x0, rzlyht, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (zrytlh) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = zrytlh;
        }), k06;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var d0b5k6 in Laya) {
        var zyl = Laya[d0b5k6];
        zyl && zyl['__isclass'] && (exports[d0b5k6] = zyl);
    }
});