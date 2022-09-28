var f = wx.$B;
(function (window, document, zypb_5) {
    var v$6ik = zypb_5['un'],
        gr8e97 = zypb_5['uns'],
        $vm62 = zypb_5['static'],
        gftul = zypb_5['class'],
        dao0w = zypb_5['getset'],
        wodaq = zypb_5['__newvec'],
        h4$isk = laya['utils']['Browser'],
        rulg1e = laya['events']['Event'],
        qma0d2 = laya['events']['EventDispatcher'],
        _xzpy5 = laya['resource']['HTMLImage'],
        mv2d06 = laya['utils']['Handler'],
        l1egu = laya['display']['Input'],
        i6s = laya['net']['Loader'],
        $mvk6 = laya['maths']['Matrix'],
        e98rg7 = laya['renders']['Render'],
        oqpyw = laya['utils']['RunDriver'],
        r893j7 = laya['media']['Sound'],
        qdm0 = laya['media']['SoundChannel'],
        ski$v = laya['media']['SoundManager'],
        vm$sk6 = laya['display']['Stage'],
        h$i4 = laya['net']['URL'],
        pyowq = laya['utils']['Utils'],
        erlg1 = function () {
        function is6$k() {}
        return gftul(is6$k, 'laya.wx.mini.MiniAdpter'), is6$k['getJson'] = function (hjs4) {
            return JSON['parse'](hjs4);
        }, is6$k['init'] = function (z5y_bn, xoaqwp) {
            z5y_bn === void 0x0 && (z5y_bn = ![]), xoaqwp === void 0x0 && (xoaqwp = ![]);
            if (is6$k['_inited']) return;
            is6$k['window'] = window;
            if (is6$k['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            is6$k['_inited'] = !![], is6$k['isZiYu'] = xoaqwp, is6$k['isPosMsgYu'] = z5y_bn, is6$k['EnvConfig'] = {}, !is6$k['isZiYu'] && (zyp_5b['setNativeFileDir']('/layaairGame'), zyp_5b['existDir'](zyp_5b['fileNativeDir'], mv2d06['create'](is6$k, is6$k['onMkdirCallBack']))), is6$k['window']['focus'] = function () {}, zypb_5['getUrlPath'] = function () {}, is6$k['window']['logtime'] = function (m$6vk) {}, is6$k['window']['alertTimeLog'] = function (shij3) {}, is6$k['window']['resetShareInfo'] = function () {}, is6$k['window']['CanvasRenderingContext2D'] = function () {}, is6$k['window']['CanvasRenderingContext2D']['prototype'] = is6$k['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], is6$k['window']['document']['body']['appendChild'] = function () {}, is6$k['EnvConfig']['pixelRatioInt'] = 0x0, oqpyw['getPixelRatio'] = is6$k['pixelRatio'], is6$k['_preCreateElement'] = h4$isk['createElement'], h4$isk['createElement'] = is6$k['createElement'], oqpyw['createShaderCondition'] = is6$k['createShaderCondition'], pyowq['parseXMLFromString'] = is6$k['parseXMLFromString'], l1egu['_createInputElement'] = mv02['_createInputElement'], is6$k['EnvConfig']['load'] = i6s['prototype']['load'], i6s['prototype']['load'] = i$6skv['prototype']['load'], is6$k['isZiYu'] && z5y_bn && wx['onMessage'](function (yxqow) {
                yxqow['isLoad'] && (zyp_5b['ziyuFileData'][yxqow['url']] = yxqow['data']);
            });
        }, is6$k['onMkdirCallBack'] = function (o0daq, hs4j) {
            if (!o0daq) zyp_5b['filesListObj'] = JSON['parse'](hs4j['data']);
        }, is6$k['pixelRatio'] = function () {
            if (!is6$k['EnvConfig']['pixelRatioInt']) try {
                var lerug1 = wx['getSystemInfoSync']();
                return is6$k['EnvConfig']['pixelRatioInt'] = lerug1['pixelRatio'], lerug1 = lerug1, lerug1['pixelRatio'];
            } catch (ksh$6i) {}
            return is6$k['EnvConfig']['pixelRatioInt'];
        }, is6$k['createElement'] = function (hs4i) {
            if (hs4i == 'canvas') {
                var hk4i$s;
                return is6$k['idx'] == 0x1 ? is6$k['isZiYu'] ? (hk4i$s = sharedCanvas, hk4i$s['style'] = {}) : hk4i$s = window['canvas'] : hk4i$s = window['wx']['createCanvas'](), is6$k['idx']++, hk4i$s;
            } else {
                if (hs4i == 'textarea' || hs4i == 'input') return is6$k['onCreateInput'](hs4i);else {
                    if (hs4i == 'div') {
                        var h$ki6 = is6$k['_preCreateElement'](hs4i);
                        return h$ki6['contains'] = function (gu1fe) {
                            return null;
                        }, h$ki6['removeChild'] = function (kv$s6) {}, h$ki6;
                    } else return is6$k['_preCreateElement'](hs4i);
                }
            }
        }, is6$k['onCreateInput'] = function (i3h$s4) {
            var m0dqa2 = is6$k['_preCreateElement'](i3h$s4);
            return m0dqa2['focus'] = mv02['wxinputFocus'], m0dqa2['blur'] = mv02['wxinputblur'], m0dqa2['style'] = {}, m0dqa2['value'] = 0x0, m0dqa2['parentElement'] = {}, m0dqa2['placeholder'] = {}, m0dqa2['type'] = {}, m0dqa2['setColor'] = function (ybz5_) {}, m0dqa2['setType'] = function (znb5_y) {}, m0dqa2['setFontFace'] = function (pzx) {}, m0dqa2['addEventListener'] = function (vi6s$) {}, m0dqa2['contains'] = function (_5pzby) {
                return null;
            }, m0dqa2['removeChild'] = function (sk6$ih) {}, m0dqa2;
        }, is6$k['createShaderCondition'] = function (awodx) {
            var xwqpa = this,
                rj93 = function () {
                var xw5op = awodx;
                return xwqpa[awodx['replace']('this.', '')];
            };
            return rj93;
        }, is6$k['EnvConfig'] = null, is6$k['window'] = null, is6$k['_preCreateElement'] = null, is6$k['_inited'] = ![], is6$k['wxRequest'] = null, is6$k['systemInfo'] = null, is6$k['version'] = '0.0.1', is6$k['isZiYu'] = ![], is6$k['isPosMsgYu'] = ![], is6$k['parseXMLFromString'] = function (qwad0) {
            var g9lur, r387;
            qwad0 = qwad0['replace'](/>\s+</g, '><');
            try {
                g9lur = new window['Parser']['DOMParser']()['parseFromString'](qwad0, 'text/xml');
            } catch (_5byp) {
                throw '需要引入xml解析库文件';
            }
            return g9lur;
        }, is6$k['idx'] = 0x1, is6$k;
    }(),
        zn_yb = function () {
        function mv() {}
        gftul(mv, 'laya.wx.mini.MiniImage');
        var e7jr89 = mv['prototype'];
        return e7jr89['_loadImage'] = function (_zpxy) {
            var _5 = this,
                madq20 = ![];
            _zpxy['indexOf']('layaNativeDir/') == -0x1 && (madq20 = !![], _zpxy = h$i4['formatURL'](_zpxy));
            if (!zyp_5b['getFileInfo'](_zpxy)) {
                if (_zpxy['indexOf']('http://') != -0x1 || _zpxy['indexOf']('https://') != -0x1) zyp_5b['downImg'](_zpxy, new mv2d06(mv, mv['onDownImgCallBack'], [_zpxy, _5]), _zpxy);else mv['onCreateImage'](_zpxy, _5, !![]);
            } else mv['onCreateImage'](_zpxy, _5, !madq20);
        }, mv['onDownImgCallBack'] = function (j9e7r, xw5oyp, o5xpwy) {
            if (!o5xpwy) mv['onCreateImage'](j9e7r, xw5oyp);else xw5oyp['onError'](null);
        }, mv['onCreateImage'] = function (vadm, yzn_, oxwpa) {
            oxwpa === void 0x0 && (oxwpa = ![]);
            var zn_5yb;
            if (!oxwpa) {
                var ge9ulr = zyp_5b['getFileInfo'](vadm),
                    eu1glr = ge9ulr['md5'];
                zn_5yb = zyp_5b['getFileNativePath'](eu1glr);
            } else zn_5yb = vadm;
            if (yzn_['imgCache'] == null) yzn_['imgCache'] = {};
            var dwoaq;
            function gfl() {
                dwoaq['onload'] = null, dwoaq['onerror'] = null, delete yzn_['imgCache'][vadm];
            }
            ;
            var h43ijs = function () {
                gfl(), yzn_['onLoaded'](dwoaq);
            },
                yx_5z = function () {
                gfl(), yzn_['event']('error', 'Load image failed');
            };
            yzn_['_type'] == 'nativeimage' ? (dwoaq = new h4$isk['window']['Image'](), dwoaq['crossOrigin'] = '', dwoaq['onload'] = h43ijs, dwoaq['onerror'] = yx_5z, dwoaq['src'] = zn_5yb, yzn_['imgCache'][vadm] = dwoaq) : new _xzpy5['create'](zn_5yb, {
                'onload': h43ijs,
                'onerror': yx_5z,
                'onCreate': function (hs$6) {
                    dwoaq = hs$6, yzn_['imgCache'][vadm] = hs$6;
                }
            });
        }, mv;
    }(),
        mv02 = function () {
        function le9ugr() {}
        return gftul(le9ugr, 'laya.wx.mini.MiniInput'), le9ugr['_createInputElement'] = function () {
            l1egu['_initInput'](l1egu['area'] = h4$isk['createElement']('textarea')), l1egu['_initInput'](l1egu['input'] = h4$isk['createElement']('input')), l1egu['inputContainer'] = h4$isk['createElement']('div'), l1egu['inputContainer']['style']['position'] = 'absolute', l1egu['inputContainer']['style']['zIndex'] = 0x186a0, h4$isk['container']['appendChild'](l1egu['inputContainer']), l1egu['inputContainer']['setPos'] = function (h74j38, a02dm) {
                l1egu['inputContainer']['style']['left'] = h74j38 + 'px', l1egu['inputContainer']['style']['top'] = a02dm + 'px';
            }, zypb_5['stage']['on']('resize', null, le9ugr['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (js4) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), ski$v['_soundClass'] = geur1, ski$v['_musicClass'] = geur1, window['_videoClass'] = dv2a0m;
        }, le9ugr['_onStageResize'] = function () {
            var oyw5px = zypb_5['stage']['_canvasTransform']['identity']();
            oyw5px['scale'](h4$isk['width'] / e98rg7['canvas']['width'] / oqpyw['getPixelRatio'](), h4$isk['height'] / e98rg7['canvas']['height'] / oqpyw['getPixelRatio']());
        }, le9ugr['wxinputFocus'] = function (er798j) {
            var aqpwo = l1egu['inputElement']['target'];
            if (aqpwo && !aqpwo['editable']) return;
            erlg1['window']['wx']['offKeyboardConfirm'](), erlg1['window']['wx']['offKeyboardInput'](), erlg1['window']['wx']['showKeyboard']({
                'defaultValue': aqpwo['text'],
                'maxLength': aqpwo['maxChars'],
                'multiple': aqpwo['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (vd0ma2) {},
                'fail': function (fluge1) {}
            }), erlg1['window']['wx']['onKeyboardConfirm'](function (p5xz) {
                var k6sm$ = p5xz ? p5xz['value'] : '';
                aqpwo['text'] = k6sm$, aqpwo['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), erlg1['window']['wx']['onKeyboardInput'](function (lf1ge) {
                var z_b5ny = lf1ge ? lf1ge['value'] : '';
                if (!aqpwo['multiline']) {
                    if (z_b5ny['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                aqpwo['text'] = z_b5ny, aqpwo['event']('input');
            });
        }, le9ugr['inputEnter'] = function () {
            l1egu['inputElement']['target']['focus'] = ![];
        }, le9ugr['wxinputblur'] = function () {
            le9ugr['hideKeyboard']();
        }, le9ugr['hideKeyboard'] = function () {
            erlg1['window']['wx']['offKeyboardConfirm'](), erlg1['window']['wx']['offKeyboardInput'](), erlg1['window']['wx']['hideKeyboard']({
                'success': function (yp5b_) {
                    console['log']('隐藏键盘');
                },
                'fail': function (aqm0d) {
                    console['log']('隐藏键盘出错:' + (aqm0d ? aqm0d['errMsg'] : ''));
                }
            });
        }, le9ugr;
    }(),
        i$6skv = function () {
        function lrgu() {}
        gftul(lrgu, 'laya.wx.mini.MiniLoader');
        var ge79r8 = lrgu['prototype'];
        return ge79r8['load'] = function (s6vmk, pxwy, ihs43j, d2qma, xyw5zp) {
            ihs43j === void 0x0 && (ihs43j = !![]), xyw5zp === void 0x0 && (xyw5zp = ![]);
            var p5_xz = this;
            p5_xz['_url'] = s6vmk;
            if (s6vmk['indexOf']('data:image') === 0x0) p5_xz['_type'] = pxwy = 'image';else p5_xz['_type'] = pxwy || (pxwy = p5_xz['getTypeFromUrl'](s6vmk));
            p5_xz['_cache'] = ihs43j, p5_xz['_data'] = null;
            var zx_y = 'ascii';
            if (s6vmk['indexOf']('.fnt') != -0x1) zx_y = 'utf8';else pxwy == 'arraybuffer' && (zx_y = '');
            ;
            var ad2m0q = pyowq['getFileExtension'](s6vmk);
            if (lrgu['_fileTypeArr']['indexOf'](ad2m0q) != -0x1) erlg1['EnvConfig']['load']['call'](this, s6vmk, pxwy, ihs43j, d2qma, xyw5zp);else {
                if (!zyp_5b['getFileInfo'](s6vmk)) {
                    if (s6vmk['indexOf']('layaNativeDir/') != -0x1) {
                        if (erlg1['isZiYu']) {
                            var rl1uge = zyp_5b['ziyuFileData'][s6vmk];
                            p5_xz['onLoaded'](rl1uge);
                            return;
                        } else {
                            cosnole['log']('read read'), zyp_5b['read'](s6vmk, zx_y, new mv2d06(lrgu, lrgu['onReadNativeCallBack'], [zx_y, s6vmk, pxwy, ihs43j, d2qma, xyw5zp, p5_xz]));
                            return;
                        }
                    }
                    if (h$i4['rootPath'] == '') var $vskm = s6vmk;else $vskm = s6vmk['split'](h$i4['rootPath'])[0x0];
                    s6vmk['indexOf']('http://') != -0x1 || s6vmk['indexOf']('https://') != -0x1 ? erlg1['EnvConfig']['load']['call'](p5_xz, s6vmk, pxwy, ihs43j, d2qma, xyw5zp) : zyp_5b['readFile']($vskm, zx_y, new mv2d06(lrgu, lrgu['onReadNativeCallBack'], [zx_y, s6vmk, pxwy, ihs43j, d2qma, xyw5zp, p5_xz]), s6vmk);
                } else erlg1['EnvConfig']['load']['call'](this, s6vmk, pxwy, ihs43j, d2qma, xyw5zp);
            }
        }, ge79r8['resMgrLoad'] = function (er97j8, sv$i6k, _zn5, dawoq, ik4$h, gu1lfe, qyopw) {
            _zn5 === void 0x0 && (_zn5 = 0x0), dawoq === void 0x0 && (dawoq = ![]), ik4$h === void 0x0 && (ik4$h = ![]), gu1lfe === void 0x0 && (gu1lfe = 0x0), qyopw === void 0x0 && (qyopw = 0x3), er97j8['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', er97j8), erlg1['EnvConfig']['resMgrLoad'](er97j8, (h4j, je879r, woqa0d) => {
                lrgu['prototype']['resMgrLoadCallBack'](h4j, je879r, woqa0d, sv$i6k);
            }, _zn5, dawoq, ik4$h, gu1lfe, qyopw);
        }, ge79r8['resMgrLoadCallBack'] = function ($mk26, g9rleu, q2da0o, wo5ypx) {
            console['log']('buff:::', $mk26, q2da0o, zyp_5b['fileNativeDir'] + '///' + zyp_5b['fileListName']), wo5ypx($mk26, g9rleu, q2da0o);
        }, ge79r8['clearRes'] = function (m0daq, s4$ih) {
            s4$ih === void 0x0 && (s4$ih = ![]);
            var ufe1 = this;
            ufe1['clearRes'](m0daq, s4$ih);
            var _5ybn = zyp_5b['getFileInfo'](m0daq);
            if (_5ybn && (m0daq['indexOf']('http://') != -0x1 || m0daq['indexOf']('https://') != -0x1)) {
                var vm2d0a = _5ybn['md5'],
                    _bny5 = zyp_5b['getFileNativePath'](vm2d0a);
                zyp_5b['remove'](_bny5);
            }
        }, lrgu['onReadNativeCallBack'] = function (od02, g1luef, vms$6k, r9elug, j4sih3, opy, g1feul, h47j3, pxy_z5) {
            r9elug === void 0x0 && (r9elug = !![]), opy === void 0x0 && (opy = ![]), h47j3 === void 0x0 && (h47j3 = 0x0);
            if (!h47j3) {
                var d0aqo;
                if (vms$6k == 'json' || vms$6k == 'atlas') d0aqo = erlg1['getJson'](pxy_z5['data']);else vms$6k == 'xml' ? d0aqo = pyowq['parseXMLFromString'](pxy_z5['data']) : d0aqo = pxy_z5['data'];
                g1feul['onLoaded'](d0aqo), !erlg1['isZiYu'] && erlg1['isPosMsgYu'] && vms$6k != 'arraybuffer' && wx['postMessage']({
                    'url': g1luef,
                    'data': d0aqo,
                    'isLoad': !![]
                });
            } else h47j3 == 0x1 && erlg1['EnvConfig']['load']['call'](g1feul, g1luef, vms$6k, r9elug, j4sih3, opy);
        }, $vm62(lrgu, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), lrgu;
    }(),
        zyp_5b = function (h34j8i) {
        function skv6i() {
            skv6i['__super']['call'](this);
            ;
        }
        return gftul(skv6i, 'laya.wx.mini.MiniFileMgr', h34j8i), skv6i['isLoadFile'] = function (hs$k4) {
            return skv6i['_fileTypeArr']['indexOf'](hs$k4) != -0x1 ? !![] : ![];
        }, skv6i['getFileInfo'] = function (gfu1e) {
            var n_byz5 = gfu1e['split']('?')[0x0],
                ywzx = skv6i['filesListObj'][n_byz5];
            if (ywzx == null) return null;else return ywzx;
            return null;
        }, skv6i['onFileUpdate'] = function (d0owaq, ej7) {
            var j8493 = d0owaq['split']('/'),
                d0av = j8493[j8493['length'] - 0x1],
                mv62$k = skv6i['getFileInfo'](ej7);
            if (mv62$k == null) skv6i['onSaveFile'](ej7, d0av);else {
                if (mv62$k['readyUrl'] != ej7) skv6i['remove'](d0av, ej7);
            }
        }, skv6i['exits'] = function (sh$i4, xdqoaw) {
            var adowqx = skv6i['getFileNativePath'](sh$i4);
            skv6i['fs']['getFileInfo']({
                'filePath': adowqx,
                'success': function (leuf1) {
                    xdqoaw != null && xdqoaw['runWith']([0x0, leuf1]);
                },
                'fail': function ($s6kiv) {
                    xdqoaw != null && xdqoaw['runWith']([0x1, $s6kiv]);
                }
            });
        }, skv6i['read'] = function (x_5z, mk26v, gtf1u, _zbpy5) {
            mk26v === void 0x0 && (mk26v = 'ascill'), _zbpy5 === void 0x0 && (_zbpy5 = '');
            var tu1lf;
            _zbpy5 != '' ? tu1lf = skv6i['getFileNativePath'](x_5z) : tu1lf = x_5z, skv6i['fs']['readFile']({
                'filePath': tu1lf,
                'encoding': mk26v,
                'success': function ($i34hs) {
                    gtf1u != null && gtf1u['runWith']([0x0, $i34hs]);
                },
                'fail': function (wqpoy) {
                    if (wqpoy && _zbpy5 != '') skv6i['down'](_zbpy5, mk26v, gtf1u, _zbpy5);else gtf1u != null && gtf1u['runWith']([0x1]);
                }
            });
        }, skv6i['readNativeFile'] = function (jr897, zpx5_y) {
            skv6i['fs']['readFile']({
                'filePath': jr897,
                'encoding': '',
                'success': function (sihk6$) {
                    zpx5_y != null && zpx5_y['runWith']([0x0]);
                },
                'fail': function (opwqxy) {
                    zpx5_y != null && zpx5_y['runWith']([0x1]);
                }
            });
        }, skv6i['down'] = function ($h3i4, k62mv, skv$6i, v0amd2) {
            k62mv === void 0x0 && (k62mv = 'ascill'), v0amd2 === void 0x0 && (v0amd2 = '');
            var rge1l = skv6i['getFileNativePath'](v0amd2),
                dwax = skv6i['wxdown']({
                'url': $h3i4,
                'filePath': rge1l,
                'success': function (sik6$h) {
                    if (sik6$h['statusCode'] === 0xc8) skv6i['readFile'](sik6$h['filePath'], k62mv, skv$6i, v0amd2);
                },
                'fail': function (xw) {
                    skv$6i != null && skv$6i['runWith']([0x1, xw]);
                }
            });
            dwax['onProgressUpdate'](function (ugflt1) {
                skv$6i != null && skv$6i['runWith']([0x2, ugflt1['progress']]);
            });
        }, skv6i['readFile'] = function (i3h48j, xwqaod, l1eug, z_5pb) {
            xwqaod === void 0x0 && (xwqaod = 'ascill'), z_5pb === void 0x0 && (z_5pb = ''), skv6i['fs']['readFile']({
                'filePath': i3h48j,
                'encoding': xwqaod,
                'success': function (er7u) {
                    if (i3h48j['indexOf']('http://') != -0x1 || i3h48j['indexOf']('https://') != -0x1) skv6i['onFileUpdate'](i3h48j, z_5pb);
                    l1eug != null && l1eug['runWith']([0x0, er7u]);
                },
                'fail': function (hi6k$) {
                    if (hi6k$) l1eug != null && l1eug['runWith']([0x1, hi6k$]);
                }
            });
        }, skv6i['downImg'] = function (axwoqd, r79e8, g789er) {
            g789er === void 0x0 && (g789er = '');
            var admv0 = skv6i['wxdown']({
                'url': axwoqd,
                'success': function (dqoaxw) {
                    dqoaxw['statusCode'] === 0xc8 && skv6i['copyFile'](dqoaxw['tempFilePath'], g789er, r79e8);
                },
                'fail': function (xoawqd) {
                    r79e8 != null && r79e8['runWith']([0x1, xoawqd]);
                }
            });
        }, skv6i['copyFile'] = function ($4sih3, s4k$hi, e1grlu) {
            var rg8e79 = $4sih3['split']('/'),
                re9lug = rg8e79[rg8e79['length'] - 0x1],
                e98j7 = s4k$hi['split']('?')[0x0],
                j397r = skv6i['getFileInfo'](s4k$hi),
                qopxw = skv6i['getFileNativePath'](re9lug);
            skv6i['fs']['copyFile']({
                'srcPath': $4sih3,
                'destPath': qopxw,
                'success': function (m0q2) {
                    if (!j397r) skv6i['onSaveFile'](s4k$hi, re9lug), e1grlu != null && e1grlu['runWith']([0x0]);else {
                        if (j397r['readyUrl'] != s4k$hi) skv6i['remove'](re9lug, s4k$hi, e1grlu);
                    }
                },
                'fail': function (m0aqd) {
                    e1grlu != null && e1grlu['runWith']([0x1, m0aqd]);
                }
            });
        }, skv6i['getFileNativePath'] = function (vs$k6i) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + vs$k6i;
        }, skv6i['remove'] = function (s3i$4, m062v, m$2k6) {
            m062v === void 0x0 && (m062v = '');
            var ksi6h$ = skv6i['getFileInfo'](m062v),
                xwoy = skv6i['getFileNativePath'](ksi6h$['md5']);
            zypb_5['loader']['clearRes'](ksi6h$['readyUrl']), skv6i['fs']['unlink']({
                'filePath': xwoy,
                'success': function (lergu9) {
                    if (m062v != '') skv6i['onSaveFile'](m062v, s3i$4);
                    m$2k6 != null && m$2k6['runWith']([0x0]);
                },
                'fail': function (ij84h3) {}
            });
        }, skv6i['onSaveFile'] = function ($2kvm, n_b5z) {
            var i$43s = $2kvm['split']('?')[0x0];
            skv6i['filesListObj'][i$43s] = {
                'md5': n_b5z,
                'readyUrl': $2kvm
            }, skv6i['fs']['writeFile']({
                'filePath': skv6i['fileNativeDir'] + '/' + skv6i['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](skv6i['filesListObj']),
                'success': function (yz5xp) {
                    console['log']('写入测试测试成功：', yz5xp);
                },
                'fail': function (xdaq) {
                    console['log']('写入测试测试失败：', xdaq);
                }
            });
        }, skv6i['existDir'] = function (r7g9e, aodwqx) {
            skv6i['fs']['mkdir']({
                'dirPath': r7g9e,
                'success': function (ks4) {
                    aodwqx != null && aodwqx['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (shik) {
                    if (shik['errMsg']['indexOf']('file already exists') != -0x1) skv6i['readSync'](skv6i['fileListName'], 'utf8', aodwqx);else aodwqx != null && aodwqx['runWith']([0x1, shik]);
                }
            });
        }, skv6i['readSync'] = function (h7j438, m0aq2, ue1, pzyw5x) {
            m0aq2 === void 0x0 && (m0aq2 = 'ascill'), pzyw5x === void 0x0 && (pzyw5x = '');
            var e9g87r = skv6i['getFileNativePath'](h7j438),
                zwy5x;
            try {
                zwy5x = skv6i['fs']['readFileSync'](e9g87r), ue1 != null && ue1['runWith']([0x0, { 'data': zwy5x }]);
            } catch ($62mvk) {
                ue1 != null && ue1['runWith']([0x1]);
            }
        }, skv6i['readCache'] = function () {}, skv6i['writeCache'] = function (dmv2a) {
            var i6$v = readyUrl['split']('?')[0x0];
            skv6i['filesListObj'][i6$v] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, skv6i['fs']['writeFile']({
                'filePath': skv6i['fileNativeDir'] + '/' + skv6i['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](skv6i['filesListObj']),
                'success': function (z_y5x) {},
                'fail': function (mdva20) {}
            });
        }, skv6i['setNativeFileDir'] = function (i$6) {
            skv6i['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + i$6;
        }, skv6i['filesListObj'] = {}, skv6i['fileNativeDir'] = null, skv6i['fileListName'] = 'layaairfiles.txt', skv6i['ziyuFileData'] = {}, $vm62(skv6i, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), skv6i;
    }(qma0d2),
        geur1 = function (e1lgru) {
        function $ihs6() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], $ihs6['__super']['call'](this), this['_sound'] = $ihs6['_createSound'](), this['_chanell'] = new s6kv$m(this['_sound']);
        }
        gftul($ihs6, 'laya.wx.mini.MiniSound', e1lgru);
        var s4h$3 = $ihs6['prototype'];
        return s4h$3['load'] = function (by_p5z) {
            var da2v0 = this;
            by_p5z = h$i4['formatURL'](by_p5z), this['url'] = by_p5z;
            if ($ihs6['_audioCache'][by_p5z]) {
                this['event']('complete');
                return;
            }
            function od0q2a() {
                if ($ihs6['_null'] != undefined) da2v0['_sound']['onCanplay']($ihs6['_null']), da2v0['_sound']['onError']($ihs6['_null']);else try {
                    da2v0['_sound']['onCanplay'](null), da2v0['_sound']['onError'](null), $ihs6['_null'] = null;
                } catch (ugrle1) {
                    console['warn']('[wxmini] _clearSound:' + ugrle1), da2v0['_sound']['onCanplay'](owpqyx), da2v0['_sound']['onError'](owpqyx), $ihs6['_null'] = owpqyx;
                }
            }
            function ksv$m() {
                ge8r7['loaded'] = !![], ge8r7['event']('complete'), $ihs6['_audioCache'][ge8r7['url']] = ge8r7;
            }
            function y5xpzw(m2qad) {
                console['error']('errCode=' + m2qad['errCode'] + '  errMsg=' + m2qad['errMsg']), ge8r7['event']('error');
            }
            function owpqyx() {}
            this['_sound']['onCanplay'](ksv$m), this['_sound']['onError'](y5xpzw), this['_sound']['src'] = by_p5z;
            var ge8r7 = this;
        }, s4h$3['play'] = function (j78re, aw0dq) {
            j78re === void 0x0 && (j78re = 0x0), aw0dq === void 0x0 && (aw0dq = 0x0);
            var is3jh, oqyxp;
            if (this['url'] == ski$v['_tMusic']) {
                if (!$ihs6['_musicAudio']) $ihs6['_musicAudio'] = this['_sound'];
                is3jh = $ihs6['_musicAudio'], oqyxp = this['_chanell'];
            } else is3jh = this['_sound'], oqyxp = this['_chanell'];
            return is3jh['src'] = this['url'], is3jh['startTime'] = 0x0, oqyxp['isStopped'] && (oqyxp['url'] = this['url'], oqyxp['loops'] = aw0dq, oqyxp['startTime'] = j78re, oqyxp['play'](), ski$v['addChannel'](oqyxp)), oqyxp;
        }, s4h$3['dispose'] = function () {
            var ufgle = $ihs6['_audioCache'][this['url']];
            ufgle && (ufgle['src'] = '', delete $ihs6['_audioCache'][this['url']]);
        }, dao0w(0x0, s4h$3, 'duration', function () {
            return this['_sound']['duration'];
        }), $ihs6['_createSound'] = function () {
            $ihs6['_id']++;
            var ksi$v6 = erlg1['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return ksi$v6;
        }, $ihs6['_musicAudio'] = null, $ihs6['_id'] = 0x0, $ihs6['_audioCache'] = {}, $ihs6['_null'] = undefined, $ihs6;
    }(qma0d2),
        s6kv$m = function (yp_5b) {
        function avd02(sv6mk) {
            this['_audio'] = null, this['_onEnd'] = null, avd02['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = sv6mk, this['_onEnd'] = pyowq['bind'](this['__onEnd'], this), sv6mk['onEnded'](this['_onEnd']);
        }
        gftul(avd02, 'laya.wx.mini.MiniSoundChannel', yp_5b);
        var sk6iv$ = avd02['prototype'];
        return sk6iv$['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (zypb_5['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, sk6iv$['__onNull'] = function () {}, sk6iv$['play'] = function () {
            this['isStopped'] = ![], ski$v['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, sk6iv$['stop'] = function () {
            this['isStopped'] = !![], ski$v['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, sk6iv$['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, sk6iv$['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], ski$v['addChannel'](this), this['_audio']['play']();
        }, dao0w(0x0, sk6iv$, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), dao0w(0x0, sk6iv$, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), dao0w(0x0, sk6iv$, 'volume', function () {
            return 0x1;
        }, function (s3i4h$) {}), avd02['_null'] = undefined, avd02;
    }(qdm0),
        dv2a0m = function () {
        function daqm() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = erlg1['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        gftul(daqm, 'laya.wx.mini.MiniVideo');
        var i6ks$v = daqm['prototype'];
        return i6ks$v['on'] = function (xodaqw, hik6, km26v$) {
            if (xodaqw == 'loadedmetadata') this['onPlayFunc'] = km26v$['bind'](hik6), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else xodaqw == 'ended' && (this['onEndedFunC'] = km26v$['bind'](hik6), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, i6ks$v['onTimeUpdateFunc'] = function (xpywq) {
            this['position'] = xpywq['position'], this['_duration'] = xpywq['duration'];
        }, i6ks$v['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, i6ks$v['onended'] = function (sm$6vk, m2av0d) {
            this['onEndedFunC'] = m2av0d['bind'](sm$6vk), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, i6ks$v['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, i6ks$v['off'] = function (nyzb5_, k0m6v2, qdm2a0) {
            if (nyzb5_ == 'loadedmetadata') this['onPlayFunc'] = qdm2a0['bind'](k0m6v2), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else nyzb5_ == 'ended' && (this['onEndedFunC'] = qdm2a0['bind'](k0m6v2), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, i6ks$v['load'] = function (v62mk) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = v62mk;
        }, i6ks$v['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, i6ks$v['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, i6ks$v['size'] = function (owqpax, p5z) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = owqpax, this['videoElement']['height'] = p5z;
        }, i6ks$v['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, i6ks$v['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, dao0w(0x0, i6ks$v, 'duration', function () {
            return this['_duration'];
        }), dao0w(0x0, i6ks$v, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (_znb5y) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = _znb5y;
        }), dao0w(0x0, i6ks$v, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), dao0w(0x0, i6ks$v, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), dao0w(0x0, i6ks$v, 'ended', function () {
            return this['videoend'];
        }), dao0w(0x0, i6ks$v, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (h$si43) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = h$si43;
        }), dao0w(0x0, i6ks$v, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (xpwoq) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = xpwoq;
        }), dao0w(0x0, i6ks$v, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (j8hi) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = j8hi;
        }), dao0w(0x0, i6ks$v, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), dao0w(0x0, i6ks$v, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function ($vk6m2) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = $vk6m2;
        }), dao0w(0x0, i6ks$v, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (kv6$si) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = kv6$si;
        }), dao0w(0x0, i6ks$v, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), dao0w(0x0, i6ks$v, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (i3j4h) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = i3j4h;
        }), dao0w(0x0, i6ks$v, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (woqpxa) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = woqpxa;
        }), dao0w(0x0, i6ks$v, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (xqaopw) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = xqaopw;
        }), daqm;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var s4hi$3 in Laya) {
        var jh43i = Laya[s4hi$3];
        jh43i && jh43i['__isclass'] && (exports[s4hi$3] = jh43i);
    }
});