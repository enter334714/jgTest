var c = wx.$a;
(function (window, document, z68kdq) {
    var hzqk6d = z68kdq['un'],
        bmc$yl = z68kdq['uns'],
        jhvzs = z68kdq['static'],
        hz6vkd = z68kdq['class'],
        bcy0o$ = z68kdq['getset'],
        z8qd6k = z68kdq['__newvec'],
        lm$acb = laya['utils']['Browser'],
        vsnfjx = laya['events']['Event'],
        wegu = laya['events']['EventDispatcher'],
        $mla9b = laya['resource']['HTMLImage'],
        vzjnhs = laya['utils']['Handler'],
        q5d8 = laya['display']['Input'],
        hzvk6d = laya['net']['Loader'],
        yc$bo = laya['maths']['Matrix'],
        hsjxnv = laya['renders']['Render'],
        eug2w_ = laya['utils']['RunDriver'],
        jhnkz = laya['media']['Sound'],
        snfjx = laya['media']['SoundChannel'],
        o$yc = laya['media']['SoundManager'],
        wgf2 = laya['display']['Stage'],
        f2x1gu = laya['net']['URL'],
        y0cb4o = laya['utils']['Utils'],
        tp73 = function () {
        function lc$bma() {}
        return hz6vkd(lc$bma, 'laya.wx.mini.MiniAdpter'), lc$bma['getJson'] = function (bla$m9) {
            return JSON['parse'](bla$m9);
        }, lc$bma['init'] = function (cbly$, nvkhjz) {
            cbly$ === void 0x0 && (cbly$ = ![]), nvkhjz === void 0x0 && (nvkhjz = ![]);
            if (lc$bma['_inited']) return;
            lc$bma['window'] = window;
            if (lc$bma['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            lc$bma['_inited'] = !![], lc$bma['isZiYu'] = nvkhjz, lc$bma['isPosMsgYu'] = cbly$, lc$bma['EnvConfig'] = {}, !lc$bma['isZiYu'] && (we4_gu['setNativeFileDir']('/layaairGame'), we4_gu['existDir'](we4_gu['fileNativeDir'], vzjnhs['create'](lc$bma, lc$bma['onMkdirCallBack']))), lc$bma['window']['focus'] = function () {}, z68kdq['getUrlPath'] = function () {}, lc$bma['window']['logtime'] = function (wge2u) {}, lc$bma['window']['alertTimeLog'] = function (q6tdk) {}, lc$bma['window']['resetShareInfo'] = function () {}, lc$bma['window']['CanvasRenderingContext2D'] = function () {}, lc$bma['window']['CanvasRenderingContext2D']['prototype'] = lc$bma['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], lc$bma['window']['document']['body']['appendChild'] = function () {}, lc$bma['EnvConfig']['pixelRatioInt'] = 0x0, eug2w_['getPixelRatio'] = lc$bma['pixelRatio'], lc$bma['_preCreateElement'] = lm$acb['createElement'], lm$acb['createElement'] = lc$bma['createElement'], eug2w_['createShaderCondition'] = lc$bma['createShaderCondition'], y0cb4o['parseXMLFromString'] = lc$bma['parseXMLFromString'], q5d8['_createInputElement'] = w_ueg2['_createInputElement'], lc$bma['EnvConfig']['load'] = hzvk6d['prototype']['load'], hzvk6d['prototype']['load'] = g2_weu['prototype']['load'], lc$bma['isZiYu'] && cbly$ && wx['onMessage'](function (d6zqk) {
                d6zqk['isLoad'] && (we4_gu['ziyuFileData'][d6zqk['url']] = d6zqk['data']);
            });
        }, lc$bma['onMkdirCallBack'] = function (xjsf2, lcybm$) {
            if (!xjsf2) we4_gu['filesListObj'] = JSON['parse'](lcybm$['data']);
        }, lc$bma['pixelRatio'] = function () {
            if (!lc$bma['EnvConfig']['pixelRatioInt']) try {
                var jzhnv = wx['getSystemInfoSync']();
                return lc$bma['EnvConfig']['pixelRatioInt'] = jzhnv['pixelRatio'], jzhnv = jzhnv, jzhnv['pixelRatio'];
            } catch (gufx) {}
            return lc$bma['EnvConfig']['pixelRatioInt'];
        }, lc$bma['createElement'] = function (zqdkh6) {
            if (zqdkh6 == 'canvas') {
                var $bcyl0;
                return lc$bma['idx'] == 0x1 ? lc$bma['isZiYu'] ? ($bcyl0 = sharedCanvas, $bcyl0['style'] = {}) : $bcyl0 = window['canvas'] : $bcyl0 = window['wx']['createCanvas'](), lc$bma['idx']++, $bcyl0;
            } else {
                if (zqdkh6 == 'textarea' || zqdkh6 == 'input') return lc$bma['onCreateInput'](zqdkh6);else {
                    if (zqdkh6 == 'div') {
                        var gu_w4 = lc$bma['_preCreateElement'](zqdkh6);
                        return gu_w4['contains'] = function (hzkjv) {
                            return null;
                        }, gu_w4['removeChild'] = function (zhvsjn) {}, gu_w4;
                    } else return lc$bma['_preCreateElement'](zqdkh6);
                }
            }
        }, lc$bma['onCreateInput'] = function (b$ly0c) {
            var $ymblc = lc$bma['_preCreateElement'](b$ly0c);
            return $ymblc['focus'] = w_ueg2['wxinputFocus'], $ymblc['blur'] = w_ueg2['wxinputblur'], $ymblc['style'] = {}, $ymblc['value'] = 0x0, $ymblc['parentElement'] = {}, $ymblc['placeholder'] = {}, $ymblc['type'] = {}, $ymblc['setColor'] = function (njfxs) {}, $ymblc['setType'] = function (nsxf1j) {}, $ymblc['setFontFace'] = function (ew12gu) {}, $ymblc['addEventListener'] = function (_gue4) {}, $ymblc['contains'] = function (b9lm) {
                return null;
            }, $ymblc['removeChild'] = function (_c0o) {}, $ymblc;
        }, lc$bma['createShaderCondition'] = function (u2ewg_) {
            var w_2eg = this,
                cl = function () {
                var _y40 = u2ewg_;
                return w_2eg[u2ewg_['replace']('this.', '')];
            };
            return cl;
        }, lc$bma['EnvConfig'] = null, lc$bma['window'] = null, lc$bma['_preCreateElement'] = null, lc$bma['_inited'] = ![], lc$bma['wxRequest'] = null, lc$bma['systemInfo'] = null, lc$bma['version'] = '0.0.1', lc$bma['isZiYu'] = ![], lc$bma['isPosMsgYu'] = ![], lc$bma['parseXMLFromString'] = function (cyl0) {
            var nfjx1s, fj1xns;
            cyl0 = cyl0['replace'](/>\s+</g, '><');
            try {
                nfjx1s = new window['Parser']['DOMParser']()['parseFromString'](cyl0, 'text/xml');
            } catch ($ycb) {
                throw '需要引入xml解析库文件';
            }
            return nfjx1s;
        }, lc$bma['idx'] = 0x1, lc$bma;
    }(),
        qtr6d = function () {
        function ob0cy4() {}
        hz6vkd(ob0cy4, 'laya.wx.mini.MiniImage');
        var egu = ob0cy4['prototype'];
        return egu['_loadImage'] = function (g2wfu1) {
            var lbcym = this,
                _oey = ![];
            g2wfu1['indexOf']('layaNativeDir/') == -0x1 && (_oey = !![], g2wfu1 = f2x1gu['formatURL'](g2wfu1));
            if (!we4_gu['getFileInfo'](g2wfu1)) {
                if (g2wfu1['indexOf']('http://') != -0x1 || g2wfu1['indexOf']('https://') != -0x1) we4_gu['downImg'](g2wfu1, new vzjnhs(ob0cy4, ob0cy4['onDownImgCallBack'], [g2wfu1, lbcym]), g2wfu1);else ob0cy4['onCreateImage'](g2wfu1, lbcym, !![]);
            } else ob0cy4['onCreateImage'](g2wfu1, lbcym, !_oey);
        }, ob0cy4['onDownImgCallBack'] = function (yl$mbc, lma$b9, q5) {
            if (!q5) ob0cy4['onCreateImage'](yl$mbc, lma$b9);else lma$b9['onError'](null);
        }, ob0cy4['onCreateImage'] = function (vnhsz, wue4_g, $yl0b) {
            $yl0b === void 0x0 && ($yl0b = ![]);
            var gu2;
            if (!$yl0b) {
                var w_g4 = we4_gu['getFileInfo'](vnhsz),
                    o4we_0 = w_g4['md5'];
                gu2 = we4_gu['getFileNativePath'](o4we_0);
            } else gu2 = vnhsz;
            if (wue4_g['imgCache'] == null) wue4_g['imgCache'] = {};
            var fvjxn;
            function gw4_eu() {
                fvjxn['onload'] = null, fvjxn['onerror'] = null, delete wue4_g['imgCache'][vnhsz];
            }
            ;
            var oe40w_ = function () {
                gw4_eu(), wue4_g['onLoaded'](fvjxn);
            },
                _4o0y = function () {
                gw4_eu(), wue4_g['event']('error', 'Load image failed');
            };
            wue4_g['_type'] == 'nativeimage' ? (fvjxn = new lm$acb['window']['Image'](), fvjxn['crossOrigin'] = '', fvjxn['onload'] = oe40w_, fvjxn['onerror'] = _4o0y, fvjxn['src'] = gu2, wue4_g['imgCache'][vnhsz] = fvjxn) : new $mla9b['create'](gu2, {
                'onload': oe40w_,
                'onerror': _4o0y,
                'onCreate': function (dq8kz6) {
                    fvjxn = dq8kz6, wue4_g['imgCache'][vnhsz] = dq8kz6;
                }
            });
        }, ob0cy4;
    }(),
        w_ueg2 = function () {
        function _2wg() {}
        return hz6vkd(_2wg, 'laya.wx.mini.MiniInput'), _2wg['_createInputElement'] = function () {
            q5d8['_initInput'](q5d8['area'] = lm$acb['createElement']('textarea')), q5d8['_initInput'](q5d8['input'] = lm$acb['createElement']('input')), q5d8['inputContainer'] = lm$acb['createElement']('div'), q5d8['inputContainer']['style']['position'] = 'absolute', q5d8['inputContainer']['style']['zIndex'] = 0x186a0, lm$acb['container']['appendChild'](q5d8['inputContainer']), q5d8['inputContainer']['setPos'] = function (zsjhv, fu12gx) {
                q5d8['inputContainer']['style']['left'] = zsjhv + 'px', q5d8['inputContainer']['style']['top'] = fu12gx + 'px';
            }, z68kdq['stage']['on']('resize', null, _2wg['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (jvzsnh) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), o$yc['_soundClass'] = pi57, o$yc['_musicClass'] = pi57, window['_videoClass'] = o40ew_;
        }, _2wg['_onStageResize'] = function () {
            var g_eu2 = z68kdq['stage']['_canvasTransform']['identity']();
            g_eu2['scale'](lm$acb['width'] / hsjxnv['canvas']['width'] / eug2w_['getPixelRatio'](), lm$acb['height'] / hsjxnv['canvas']['height'] / eug2w_['getPixelRatio']());
        }, _2wg['wxinputFocus'] = function (g2wu1f) {
            var eyo0 = q5d8['inputElement']['target'];
            if (eyo0 && !eyo0['editable']) return;
            tp73['window']['wx']['offKeyboardConfirm'](), tp73['window']['wx']['offKeyboardInput'](), tp73['window']['wx']['showKeyboard']({
                'defaultValue': eyo0['text'],
                'maxLength': eyo0['maxChars'],
                'multiple': eyo0['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (m$b) {},
                'fail': function (dkzh6q) {}
            }), tp73['window']['wx']['onKeyboardConfirm'](function (cbam$l) {
                var kdhzq = cbam$l ? cbam$l['value'] : '';
                eyo0['text'] = kdhzq, eyo0['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), tp73['window']['wx']['onKeyboardInput'](function (njvsz) {
                var o4w0_ = njvsz ? njvsz['value'] : '';
                if (!eyo0['multiline']) {
                    if (o4w0_['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                eyo0['text'] = o4w0_, eyo0['event']('input');
            });
        }, _2wg['inputEnter'] = function () {
            q5d8['inputElement']['target']['focus'] = ![];
        }, _2wg['wxinputblur'] = function () {
            _2wg['hideKeyboard']();
        }, _2wg['hideKeyboard'] = function () {
            tp73['window']['wx']['offKeyboardConfirm'](), tp73['window']['wx']['offKeyboardInput'](), tp73['window']['wx']['hideKeyboard']({
                'success': function (hvjxs) {
                    console['log']('隐藏键盘');
                },
                'fail': function (abmc) {
                    console['log']('隐藏键盘出错:' + (abmc ? abmc['errMsg'] : ''));
                }
            });
        }, _2wg;
    }(),
        g2_weu = function () {
        function xsg12f() {}
        hz6vkd(xsg12f, 'laya.wx.mini.MiniLoader');
        var tr3785 = xsg12f['prototype'];
        return tr3785['load'] = function (jnhvs, euwo4_, o0ew4_, _ew4o, z86k) {
            o0ew4_ === void 0x0 && (o0ew4_ = !![]), z86k === void 0x0 && (z86k = ![]);
            var d6q8kt = this;
            d6q8kt['_url'] = jnhvs;
            if (jnhvs['indexOf']('data:image') === 0x0) d6q8kt['_type'] = euwo4_ = 'image';else d6q8kt['_type'] = euwo4_ || (euwo4_ = d6q8kt['getTypeFromUrl'](jnhvs));
            d6q8kt['_cache'] = o0ew4_, d6q8kt['_data'] = null;
            var dzh6kq = 'ascii';
            if (jnhvs['indexOf']('.fnt') != -0x1) dzh6kq = 'utf8';else euwo4_ == 'arraybuffer' && (dzh6kq = '');
            ;
            var fs21g = y0cb4o['getFileExtension'](jnhvs);
            if (xsg12f['_fileTypeArr']['indexOf'](fs21g) != -0x1) tp73['EnvConfig']['load']['call'](this, jnhvs, euwo4_, o0ew4_, _ew4o, z86k);else {
                if (!we4_gu['getFileInfo'](jnhvs)) {
                    if (jnhvs['indexOf']('layaNativeDir/') != -0x1) {
                        if (tp73['isZiYu']) {
                            var fj1nsx = we4_gu['ziyuFileData'][jnhvs];
                            d6q8kt['onLoaded'](fj1nsx);
                            return;
                        } else {
                            cosnole['log']('read read'), we4_gu['read'](jnhvs, dzh6kq, new vzjnhs(xsg12f, xsg12f['onReadNativeCallBack'], [dzh6kq, jnhvs, euwo4_, o0ew4_, _ew4o, z86k, d6q8kt]));
                            return;
                        }
                    }
                    if (f2x1gu['rootPath'] == '') var qdkhz6 = jnhvs;else qdkhz6 = jnhvs['split'](f2x1gu['rootPath'])[0x0];
                    jnhvs['indexOf']('http://') != -0x1 || jnhvs['indexOf']('https://') != -0x1 ? tp73['EnvConfig']['load']['call'](d6q8kt, jnhvs, euwo4_, o0ew4_, _ew4o, z86k) : we4_gu['readFile'](qdkhz6, dzh6kq, new vzjnhs(xsg12f, xsg12f['onReadNativeCallBack'], [dzh6kq, jnhvs, euwo4_, o0ew4_, _ew4o, z86k, d6q8kt]), jnhvs);
                } else tp73['EnvConfig']['load']['call'](this, jnhvs, euwo4_, o0ew4_, _ew4o, z86k);
            }
        }, tr3785['resMgrLoad'] = function (i3r5, rt78q5, snhxj, hvjx, eu21, hvjkz, mcb$ly) {
            snhxj === void 0x0 && (snhxj = 0x0), hvjx === void 0x0 && (hvjx = ![]), eu21 === void 0x0 && (eu21 = ![]), hvjkz === void 0x0 && (hvjkz = 0x0), mcb$ly === void 0x0 && (mcb$ly = 0x3), i3r5['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', i3r5), tp73['EnvConfig']['resMgrLoad'](i3r5, (wge_u, b$lcma, knzvhj) => {
                xsg12f['prototype']['resMgrLoadCallBack'](wge_u, b$lcma, knzvhj, rt78q5);
            }, snhxj, hvjx, eu21, hvjkz, mcb$ly);
        }, tr3785['resMgrLoadCallBack'] = function (o0e_, o4_c0, o_4cy0, hzqk6) {
            console['log']('buff:::', o0e_, o_4cy0, we4_gu['fileNativeDir'] + '///' + we4_gu['fileListName']), hzqk6(o0e_, o4_c0, o_4cy0);
        }, tr3785['clearRes'] = function (hxjnsv, yc04_) {
            yc04_ === void 0x0 && (yc04_ = ![]);
            var o_ew = this;
            o_ew['clearRes'](hxjnsv, yc04_);
            var nvhjzs = we4_gu['getFileInfo'](hxjnsv);
            if (nvhjzs && (hxjnsv['indexOf']('http://') != -0x1 || hxjnsv['indexOf']('https://') != -0x1)) {
                var q8dr6t = nvhjzs['md5'],
                    snx1j = we4_gu['getFileNativePath'](q8dr6t);
                we4_gu['remove'](snx1j);
            }
        }, xsg12f['onReadNativeCallBack'] = function (_eo4w, ew1u, v6hdk, oe_w40, y0o4_c, t7385r, u2g, t8r6q, myc$lb) {
            oe_w40 === void 0x0 && (oe_w40 = !![]), t7385r === void 0x0 && (t7385r = ![]), t8r6q === void 0x0 && (t8r6q = 0x0);
            if (!t8r6q) {
                var tr857q;
                if (v6hdk == 'json' || v6hdk == 'atlas') tr857q = tp73['getJson'](myc$lb['data']);else v6hdk == 'xml' ? tr857q = y0cb4o['parseXMLFromString'](myc$lb['data']) : tr857q = myc$lb['data'];
                u2g['onLoaded'](tr857q), !tp73['isZiYu'] && tp73['isPosMsgYu'] && v6hdk != 'arraybuffer' && wx['postMessage']({
                    'url': ew1u,
                    'data': tr857q,
                    'isLoad': !![]
                });
            } else t8r6q == 0x1 && tp73['EnvConfig']['load']['call'](u2g, ew1u, v6hdk, oe_w40, y0o4_c, t7385r);
        }, jhvzs(xsg12f, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), xsg12f;
    }(),
        we4_gu = function (p375i) {
        function g_ew4() {
            g_ew4['__super']['call'](this);
            ;
        }
        return hz6vkd(g_ew4, 'laya.wx.mini.MiniFileMgr', p375i), g_ew4['isLoadFile'] = function (z8k6qd) {
            return g_ew4['_fileTypeArr']['indexOf'](z8k6qd) != -0x1 ? !![] : ![];
        }, g_ew4['getFileInfo'] = function (uw21eg) {
            var y0l$bc = uw21eg['split']('?')[0x0],
                ge2u = g_ew4['filesListObj'][y0l$bc];
            if (ge2u == null) return null;else return ge2u;
            return null;
        }, g_ew4['onFileUpdate'] = function ($yco0, eu2wg) {
            var gxf1s = $yco0['split']('/'),
                g2fwu1 = gxf1s[gxf1s['length'] - 0x1],
                zk6hd = g_ew4['getFileInfo'](eu2wg);
            if (zk6hd == null) g_ew4['onSaveFile'](eu2wg, g2fwu1);else {
                if (zk6hd['readyUrl'] != eu2wg) g_ew4['remove'](g2fwu1, eu2wg);
            }
        }, g_ew4['exits'] = function (uw12e, lmca$b) {
            var guw2e = g_ew4['getFileNativePath'](uw12e);
            g_ew4['fs']['getFileInfo']({
                'filePath': guw2e,
                'success': function (e_u2) {
                    lmca$b != null && lmca$b['runWith']([0x0, e_u2]);
                },
                'fail': function (hvkn) {
                    lmca$b != null && lmca$b['runWith']([0x1, hvkn]);
                }
            });
        }, g_ew4['read'] = function (dkh6, jvnxfs, vk6, njkzv) {
            jvnxfs === void 0x0 && (jvnxfs = 'ascill'), njkzv === void 0x0 && (njkzv = '');
            var bma$c;
            njkzv != '' ? bma$c = g_ew4['getFileNativePath'](dkh6) : bma$c = dkh6, g_ew4['fs']['readFile']({
                'filePath': bma$c,
                'encoding': jvnxfs,
                'success': function (nkzhj) {
                    vk6 != null && vk6['runWith']([0x0, nkzhj]);
                },
                'fail': function (t3r75) {
                    if (t3r75 && njkzv != '') g_ew4['down'](njkzv, jvnxfs, vk6, njkzv);else vk6 != null && vk6['runWith']([0x1]);
                }
            });
        }, g_ew4['readNativeFile'] = function (gxf1, lbyc) {
            g_ew4['fs']['readFile']({
                'filePath': gxf1,
                'encoding': '',
                'success': function (ge1u) {
                    lbyc != null && lbyc['runWith']([0x0]);
                },
                'fail': function (bac$lm) {
                    lbyc != null && lbyc['runWith']([0x1]);
                }
            });
        }, g_ew4['down'] = function (r5ip, k68zdq, gew4_u, bmcla$) {
            k68zdq === void 0x0 && (k68zdq = 'ascill'), bmcla$ === void 0x0 && (bmcla$ = '');
            var a9bl$ = g_ew4['getFileNativePath'](bmcla$),
                g4w_eu = g_ew4['wxdown']({
                'url': r5ip,
                'filePath': a9bl$,
                'success': function (fnxsvj) {
                    if (fnxsvj['statusCode'] === 0xc8) g_ew4['readFile'](fnxsvj['filePath'], k68zdq, gew4_u, bmcla$);
                },
                'fail': function (tr837) {
                    gew4_u != null && gew4_u['runWith']([0x1, tr837]);
                }
            });
            g4w_eu['onProgressUpdate'](function (fjnxvs) {
                gew4_u != null && gew4_u['runWith']([0x2, fjnxvs['progress']]);
            });
        }, g_ew4['readFile'] = function (cboy04, cbo0y, eoy4_, gfu21w) {
            cbo0y === void 0x0 && (cbo0y = 'ascill'), gfu21w === void 0x0 && (gfu21w = ''), g_ew4['fs']['readFile']({
                'filePath': cboy04,
                'encoding': cbo0y,
                'success': function (qr6t8) {
                    if (cboy04['indexOf']('http://') != -0x1 || cboy04['indexOf']('https://') != -0x1) g_ew4['onFileUpdate'](cboy04, gfu21w);
                    eoy4_ != null && eoy4_['runWith']([0x0, qr6t8]);
                },
                'fail': function (tq68kd) {
                    if (tq68kd) eoy4_ != null && eoy4_['runWith']([0x1, tq68kd]);
                }
            });
        }, g_ew4['downImg'] = function ($bo0y, g_we2, lb9a$m) {
            lb9a$m === void 0x0 && (lb9a$m = '');
            var t853 = g_ew4['wxdown']({
                'url': $bo0y,
                'success': function (vhzsjn) {
                    vhzsjn['statusCode'] === 0xc8 && g_ew4['copyFile'](vhzsjn['tempFilePath'], lb9a$m, g_we2);
                },
                'fail': function (nzv6) {
                    g_we2 != null && g_we2['runWith']([0x1, nzv6]);
                }
            });
        }, g_ew4['copyFile'] = function (w2u1eg, nj1sx, vjsxnf) {
            var nv6hz = w2u1eg['split']('/'),
                co0$ = nv6hz[nv6hz['length'] - 0x1],
                cybo = nj1sx['split']('?')[0x0],
                q5t78r = g_ew4['getFileInfo'](nj1sx),
                sfx21j = g_ew4['getFileNativePath'](co0$);
            g_ew4['fs']['copyFile']({
                'srcPath': w2u1eg,
                'destPath': sfx21j,
                'success': function (b40) {
                    if (!q5t78r) g_ew4['onSaveFile'](nj1sx, co0$), vjsxnf != null && vjsxnf['runWith']([0x0]);else {
                        if (q5t78r['readyUrl'] != nj1sx) g_ew4['remove'](co0$, nj1sx, vjsxnf);
                    }
                },
                'fail': function (jshvz) {
                    vjsxnf != null && vjsxnf['runWith']([0x1, jshvz]);
                }
            });
        }, g_ew4['getFileNativePath'] = function (uw_ge) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + uw_ge;
        }, g_ew4['remove'] = function (uew4_, wue_4o, $0cbly) {
            wue_4o === void 0x0 && (wue_4o = '');
            var vzd6k = g_ew4['getFileInfo'](wue_4o),
                qrt58 = g_ew4['getFileNativePath'](vzd6k['md5']);
            z68kdq['loader']['clearRes'](vzd6k['readyUrl']), g_ew4['fs']['unlink']({
                'filePath': qrt58,
                'success': function (eg4_uw) {
                    if (wue_4o != '') g_ew4['onSaveFile'](wue_4o, uew4_);
                    $0cbly != null && $0cbly['runWith']([0x0]);
                },
                'fail': function (alm9) {}
            });
        }, g_ew4['onSaveFile'] = function (yoc_, gu1we2) {
            var w_2eug = yoc_['split']('?')[0x0];
            g_ew4['filesListObj'][w_2eug] = {
                'md5': gu1we2,
                'readyUrl': yoc_
            }, g_ew4['fs']['writeFile']({
                'filePath': g_ew4['fileNativeDir'] + '/' + g_ew4['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](g_ew4['filesListObj']),
                'success': function (a9mlb) {
                    console['log']('写入测试测试成功：', a9mlb);
                },
                'fail': function (f12sxj) {
                    console['log']('写入测试测试失败：', f12sxj);
                }
            });
        }, g_ew4['existDir'] = function (sjxn, nkzv) {
            g_ew4['fs']['mkdir']({
                'dirPath': sjxn,
                'success': function (kt8q) {
                    nkzv != null && nkzv['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (dq5) {
                    if (dq5['errMsg']['indexOf']('file already exists') != -0x1) g_ew4['readSync'](g_ew4['fileListName'], 'utf8', nkzv);else nkzv != null && nkzv['runWith']([0x1, dq5]);
                }
            });
        }, g_ew4['readSync'] = function (j2x1f, $c0b, e4o0w_, hsjvx) {
            $c0b === void 0x0 && ($c0b = 'ascill'), hsjvx === void 0x0 && (hsjvx = '');
            var tk8q6 = g_ew4['getFileNativePath'](j2x1f),
                p7ri53;
            try {
                p7ri53 = g_ew4['fs']['readFileSync'](tk8q6), e4o0w_ != null && e4o0w_['runWith']([0x0, { 'data': p7ri53 }]);
            } catch (kdhz6v) {
                e4o0w_ != null && e4o0w_['runWith']([0x1]);
            }
        }, g_ew4['readCache'] = function () {}, g_ew4['writeCache'] = function (fgwu21) {
            var $mac = readyUrl['split']('?')[0x0];
            g_ew4['filesListObj'][$mac] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, g_ew4['fs']['writeFile']({
                'filePath': g_ew4['fileNativeDir'] + '/' + g_ew4['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](g_ew4['filesListObj']),
                'success': function (ge_4u) {},
                'fail': function (fuw1g2) {}
            });
        }, g_ew4['setNativeFileDir'] = function (bcal$m) {
            g_ew4['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + bcal$m;
        }, g_ew4['filesListObj'] = {}, g_ew4['fileNativeDir'] = null, g_ew4['fileListName'] = 'layaairfiles.txt', g_ew4['ziyuFileData'] = {}, jhvzs(g_ew4, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), g_ew4;
    }(wegu),
        pi57 = function (qzkdh6) {
        function j2xfs1() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], j2xfs1['__super']['call'](this), this['_sound'] = j2xfs1['_createSound'](), this['_chanell'] = new dvzk6h(this['_sound']);
        }
        hz6vkd(j2xfs1, 'laya.wx.mini.MiniSound', qzkdh6);
        var oe_0 = j2xfs1['prototype'];
        return oe_0['load'] = function (kdtq68) {
            var ybcm = this;
            kdtq68 = f2x1gu['formatURL'](kdtq68), this['url'] = kdtq68;
            if (j2xfs1['_audioCache'][kdtq68]) {
                this['event']('complete');
                return;
            }
            function hvsxnj() {
                if (j2xfs1['_null'] != undefined) ybcm['_sound']['onCanplay'](j2xfs1['_null']), ybcm['_sound']['onError'](j2xfs1['_null']);else try {
                    ybcm['_sound']['onCanplay'](null), ybcm['_sound']['onError'](null), j2xfs1['_null'] = null;
                } catch (gue4w) {
                    console['warn']('[wxmini] _clearSound:' + gue4w), ybcm['_sound']['onCanplay'](vnkjhz), ybcm['_sound']['onError'](vnkjhz), j2xfs1['_null'] = vnkjhz;
                }
            }
            function kznvj() {
                cbmyl$['loaded'] = !![], cbmyl$['event']('complete'), j2xfs1['_audioCache'][cbmyl$['url']] = cbmyl$;
            }
            function w2u1ge(hzv6d) {
                console['error']('errCode=' + hzv6d['errCode'] + '  errMsg=' + hzv6d['errMsg']), cbmyl$['event']('error');
            }
            function vnkjhz() {}
            this['_sound']['onCanplay'](kznvj), this['_sound']['onError'](w2u1ge), this['_sound']['src'] = kdtq68;
            var cbmyl$ = this;
        }, oe_0['play'] = function (y4boc, hv6z) {
            y4boc === void 0x0 && (y4boc = 0x0), hv6z === void 0x0 && (hv6z = 0x0);
            var yo0$, vknhjz;
            if (this['url'] == o$yc['_tMusic']) {
                if (!j2xfs1['_musicAudio']) j2xfs1['_musicAudio'] = this['_sound'];
                yo0$ = j2xfs1['_musicAudio'], vknhjz = this['_chanell'];
            } else yo0$ = this['_sound'], vknhjz = this['_chanell'];
            return yo0$['src'] = this['url'], yo0$['startTime'] = 0x0, vknhjz['isStopped'] && (vknhjz['url'] = this['url'], vknhjz['loops'] = hv6z, vknhjz['startTime'] = y4boc, vknhjz['play'](), o$yc['addChannel'](vknhjz)), vknhjz;
        }, oe_0['dispose'] = function () {
            var b0y4 = j2xfs1['_audioCache'][this['url']];
            b0y4 && (b0y4['src'] = '', delete j2xfs1['_audioCache'][this['url']]);
        }, bcy0o$(0x0, oe_0, 'duration', function () {
            return this['_sound']['duration'];
        }), j2xfs1['_createSound'] = function () {
            j2xfs1['_id']++;
            var bocy4 = tp73['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return bocy4;
        }, j2xfs1['_musicAudio'] = null, j2xfs1['_id'] = 0x0, j2xfs1['_audioCache'] = {}, j2xfs1['_null'] = undefined, j2xfs1;
    }(wegu),
        dvzk6h = function (d6rt) {
        function xhjsn(vfjn) {
            this['_audio'] = null, this['_onEnd'] = null, xhjsn['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = vfjn, this['_onEnd'] = y0cb4o['bind'](this['__onEnd'], this), vfjn['onEnded'](this['_onEnd']);
        }
        hz6vkd(xhjsn, 'laya.wx.mini.MiniSoundChannel', d6rt);
        var wo_u = xhjsn['prototype'];
        return wo_u['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (z68kdq['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, wo_u['__onNull'] = function () {}, wo_u['play'] = function () {
            this['isStopped'] = ![], o$yc['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, wo_u['stop'] = function () {
            this['isStopped'] = !![], o$yc['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, wo_u['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, wo_u['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], o$yc['addChannel'](this), this['_audio']['play']();
        }, bcy0o$(0x0, wo_u, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), bcy0o$(0x0, wo_u, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), bcy0o$(0x0, wo_u, 'volume', function () {
            return 0x1;
        }, function (bo$y) {}), xhjsn['_null'] = undefined, xhjsn;
    }(snfjx),
        o40ew_ = function () {
        function nzshj() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = tp73['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        hz6vkd(nzshj, 'laya.wx.mini.MiniVideo');
        var ip3r57 = nzshj['prototype'];
        return ip3r57['on'] = function (jnsvzh, _oy0, qtd6) {
            if (jnsvzh == 'loadedmetadata') this['onPlayFunc'] = qtd6['bind'](_oy0), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else jnsvzh == 'ended' && (this['onEndedFunC'] = qtd6['bind'](_oy0), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, ip3r57['onTimeUpdateFunc'] = function (r587qt) {
            this['position'] = r587qt['position'], this['_duration'] = r587qt['duration'];
        }, ip3r57['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, ip3r57['onended'] = function (kv6n, vnzhjs) {
            this['onEndedFunC'] = vnzhjs['bind'](kv6n), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, ip3r57['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, ip3r57['off'] = function (jnvsf, w2fug, jnhvz) {
            if (jnvsf == 'loadedmetadata') this['onPlayFunc'] = jnhvz['bind'](w2fug), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else jnvsf == 'ended' && (this['onEndedFunC'] = jnhvz['bind'](w2fug), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, ip3r57['load'] = function (xf1gu) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = xf1gu;
        }, ip3r57['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, ip3r57['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, ip3r57['size'] = function (eo_40y, _wueg4) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = eo_40y, this['videoElement']['height'] = _wueg4;
        }, ip3r57['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, ip3r57['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, bcy0o$(0x0, ip3r57, 'duration', function () {
            return this['_duration'];
        }), bcy0o$(0x0, ip3r57, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (rq58dt) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = rq58dt;
        }), bcy0o$(0x0, ip3r57, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), bcy0o$(0x0, ip3r57, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), bcy0o$(0x0, ip3r57, 'ended', function () {
            return this['videoend'];
        }), bcy0o$(0x0, ip3r57, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (i75pr3) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = i75pr3;
        }), bcy0o$(0x0, ip3r57, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (v6knzh) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = v6knzh;
        }), bcy0o$(0x0, ip3r57, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (bco0y$) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = bco0y$;
        }), bcy0o$(0x0, ip3r57, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), bcy0o$(0x0, ip3r57, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (jnxsfv) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = jnxsfv;
        }), bcy0o$(0x0, ip3r57, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (uwg2) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = uwg2;
        }), bcy0o$(0x0, ip3r57, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), bcy0o$(0x0, ip3r57, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (weug4) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = weug4;
        }), bcy0o$(0x0, ip3r57, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (ufg12x) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = ufg12x;
        }), bcy0o$(0x0, ip3r57, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (jnhxvs) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = jnhxvs;
        }), nzshj;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var b$clma in Laya) {
        var l0yc$b = Laya[b$clma];
        l0yc$b && l0yc$b['__isclass'] && (exports[b$clma] = l0yc$b);
    }
});