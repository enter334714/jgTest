var c = wx.$a;
(function (window, document, $mab9) {
    var e_ug = $mab9['un'],
        _ewo4 = $mab9['uns'],
        qdr = $mab9['static'],
        jzvnhs = $mab9['class'],
        hvnz6k = $mab9['getset'],
        xg21f = $mab9['__newvec'],
        wge_u4 = laya['utils']['Browser'],
        dz6khv = laya['events']['Event'],
        jf2xs = laya['events']['EventDispatcher'],
        yb$clm = laya['resource']['HTMLImage'],
        rd58q = laya['utils']['Handler'],
        dqkh = laya['display']['Input'],
        fn1sj = laya['net']['Loader'],
        fsx2g1 = laya['maths']['Matrix'],
        wgf1u2 = laya['renders']['Render'],
        xnsj1f = laya['utils']['RunDriver'],
        vzhkd6 = laya['media']['Sound'],
        ybo0c$ = laya['media']['SoundChannel'],
        hxsnv = laya['media']['SoundManager'],
        qr6d8t = laya['display']['Stage'],
        abmc$l = laya['net']['URL'],
        yo_c0 = laya['utils']['Utils'],
        m$blcy = function () {
        function m$la9b() {}
        return jzvnhs(m$la9b, 'laya.wx.mini.MiniAdpter'), m$la9b['getJson'] = function (zhqdk6) {
            return JSON['parse'](zhqdk6);
        }, m$la9b['init'] = function (u21w, ir53p7) {
            u21w === void 0x0 && (u21w = ![]), ir53p7 === void 0x0 && (ir53p7 = ![]);
            if (m$la9b['_inited']) return;
            m$la9b['window'] = window;
            if (m$la9b['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            m$la9b['_inited'] = !![], m$la9b['isZiYu'] = ir53p7, m$la9b['isPosMsgYu'] = u21w, m$la9b['EnvConfig'] = {}, !m$la9b['isZiYu'] && (d6zq8['setNativeFileDir']('/layaairGame'), d6zq8['existDir'](d6zq8['fileNativeDir'], rd58q['create'](m$la9b, m$la9b['onMkdirCallBack']))), m$la9b['window']['focus'] = function () {}, $mab9['getUrlPath'] = function () {}, m$la9b['window']['logtime'] = function (cy4bo) {}, m$la9b['window']['alertTimeLog'] = function (vjhxsn) {}, m$la9b['window']['resetShareInfo'] = function () {}, m$la9b['window']['CanvasRenderingContext2D'] = function () {}, m$la9b['window']['CanvasRenderingContext2D']['prototype'] = m$la9b['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], m$la9b['window']['document']['body']['appendChild'] = function () {}, m$la9b['EnvConfig']['pixelRatioInt'] = 0x0, xnsj1f['getPixelRatio'] = m$la9b['pixelRatio'], m$la9b['_preCreateElement'] = wge_u4['createElement'], wge_u4['createElement'] = m$la9b['createElement'], xnsj1f['createShaderCondition'] = m$la9b['createShaderCondition'], yo_c0['parseXMLFromString'] = m$la9b['parseXMLFromString'], dqkh['_createInputElement'] = l$cby['_createInputElement'], m$la9b['EnvConfig']['load'] = fn1sj['prototype']['load'], fn1sj['prototype']['load'] = $mbly['prototype']['load'], m$la9b['isZiYu'] && u21w && wx['onMessage'](function (d8trq5) {
                d8trq5['isLoad'] && (d6zq8['ziyuFileData'][d8trq5['url']] = d8trq5['data']);
            });
        }, m$la9b['onMkdirCallBack'] = function (_ou4we, snzvhj) {
            if (!_ou4we) d6zq8['filesListObj'] = JSON['parse'](snzvhj['data']);
        }, m$la9b['pixelRatio'] = function () {
            if (!m$la9b['EnvConfig']['pixelRatioInt']) try {
                var hzjnsv = wx['getSystemInfoSync']();
                return m$la9b['EnvConfig']['pixelRatioInt'] = hzjnsv['pixelRatio'], hzjnsv = hzjnsv, hzjnsv['pixelRatio'];
            } catch (r73pi5) {}
            return m$la9b['EnvConfig']['pixelRatioInt'];
        }, m$la9b['createElement'] = function (p7r35i) {
            if (p7r35i == 'canvas') {
                var fnjsx1;
                return m$la9b['idx'] == 0x1 ? m$la9b['isZiYu'] ? (fnjsx1 = sharedCanvas, fnjsx1['style'] = {}) : fnjsx1 = window['canvas'] : fnjsx1 = window['wx']['createCanvas'](), m$la9b['idx']++, fnjsx1;
            } else {
                if (p7r35i == 'textarea' || p7r35i == 'input') return m$la9b['onCreateInput'](p7r35i);else {
                    if (p7r35i == 'div') {
                        var xfjnvs = m$la9b['_preCreateElement'](p7r35i);
                        return xfjnvs['contains'] = function (lcm$) {
                            return null;
                        }, xfjnvs['removeChild'] = function (_2ug) {}, xfjnvs;
                    } else return m$la9b['_preCreateElement'](p7r35i);
                }
            }
        }, m$la9b['onCreateInput'] = function (z6d) {
            var $bly = m$la9b['_preCreateElement'](z6d);
            return $bly['focus'] = l$cby['wxinputFocus'], $bly['blur'] = l$cby['wxinputblur'], $bly['style'] = {}, $bly['value'] = 0x0, $bly['parentElement'] = {}, $bly['placeholder'] = {}, $bly['type'] = {}, $bly['setColor'] = function (hsjnzv) {}, $bly['setType'] = function (p573r) {}, $bly['setFontFace'] = function (vjnzh) {}, $bly['addEventListener'] = function (mcy$b) {}, $bly['contains'] = function (khv6n) {
                return null;
            }, $bly['removeChild'] = function (c4oy0b) {}, $bly;
        }, m$la9b['createShaderCondition'] = function (obyc0$) {
            var eu_o4 = this,
                jnkzhv = function () {
                var m$ylcb = obyc0$;
                return eu_o4[obyc0$['replace']('this.', '')];
            };
            return jnkzhv;
        }, m$la9b['EnvConfig'] = null, m$la9b['window'] = null, m$la9b['_preCreateElement'] = null, m$la9b['_inited'] = ![], m$la9b['wxRequest'] = null, m$la9b['systemInfo'] = null, m$la9b['version'] = '0.0.1', m$la9b['isZiYu'] = ![], m$la9b['isPosMsgYu'] = ![], m$la9b['parseXMLFromString'] = function (t6dqk8) {
            var pri735, zhnsv;
            t6dqk8 = t6dqk8['replace'](/>\s+</g, '><');
            try {
                pri735 = new window['Parser']['DOMParser']()['parseFromString'](t6dqk8, 'text/xml');
            } catch (zjvns) {
                throw '需要引入xml解析库文件';
            }
            return pri735;
        }, m$la9b['idx'] = 0x1, m$la9b;
    }(),
        sfxg2 = function () {
        function bac$m() {}
        jzvnhs(bac$m, 'laya.wx.mini.MiniImage');
        var e_oy40 = bac$m['prototype'];
        return e_oy40['_loadImage'] = function (mbl9) {
            var s1nxj = this,
                xsjn1f = ![];
            mbl9['indexOf']('layaNativeDir/') == -0x1 && (xsjn1f = !![], mbl9 = abmc$l['formatURL'](mbl9));
            if (!d6zq8['getFileInfo'](mbl9)) {
                if (mbl9['indexOf']('http://') != -0x1 || mbl9['indexOf']('https://') != -0x1) d6zq8['downImg'](mbl9, new rd58q(bac$m, bac$m['onDownImgCallBack'], [mbl9, s1nxj]), mbl9);else bac$m['onCreateImage'](mbl9, s1nxj, !![]);
            } else bac$m['onCreateImage'](mbl9, s1nxj, !xsjn1f);
        }, bac$m['onDownImgCallBack'] = function (gx1fu2, i37p5r, sjn1x) {
            if (!sjn1x) bac$m['onCreateImage'](gx1fu2, i37p5r);else i37p5r['onError'](null);
        }, bac$m['onCreateImage'] = function (ou4ew_, tr86qd, ly$0cb) {
            ly$0cb === void 0x0 && (ly$0cb = ![]);
            var lbac$m;
            if (!ly$0cb) {
                var ybl$cm = d6zq8['getFileInfo'](ou4ew_),
                    fx12 = ybl$cm['md5'];
                lbac$m = d6zq8['getFileNativePath'](fx12);
            } else lbac$m = ou4ew_;
            if (tr86qd['imgCache'] == null) tr86qd['imgCache'] = {};
            var y0lb;
            function f2u1() {
                y0lb['onload'] = null, y0lb['onerror'] = null, delete tr86qd['imgCache'][ou4ew_];
            }
            ;
            var l$bam9 = function () {
                f2u1(), tr86qd['onLoaded'](y0lb);
            },
                g2sfx = function () {
                f2u1(), tr86qd['event']('error', 'Load image failed');
            };
            tr86qd['_type'] == 'nativeimage' ? (y0lb = new wge_u4['window']['Image'](), y0lb['crossOrigin'] = '', y0lb['onload'] = l$bam9, y0lb['onerror'] = g2sfx, y0lb['src'] = lbac$m, tr86qd['imgCache'][ou4ew_] = y0lb) : new yb$clm['create'](lbac$m, {
                'onload': l$bam9,
                'onerror': g2sfx,
                'onCreate': function (gfs1) {
                    y0lb = gfs1, tr86qd['imgCache'][ou4ew_] = gfs1;
                }
            });
        }, bac$m;
    }(),
        l$cby = function () {
        function ge_u4() {}
        return jzvnhs(ge_u4, 'laya.wx.mini.MiniInput'), ge_u4['_createInputElement'] = function () {
            dqkh['_initInput'](dqkh['area'] = wge_u4['createElement']('textarea')), dqkh['_initInput'](dqkh['input'] = wge_u4['createElement']('input')), dqkh['inputContainer'] = wge_u4['createElement']('div'), dqkh['inputContainer']['style']['position'] = 'absolute', dqkh['inputContainer']['style']['zIndex'] = 0x186a0, wge_u4['container']['appendChild'](dqkh['inputContainer']), dqkh['inputContainer']['setPos'] = function (f1gxu, vk6nzh) {
                dqkh['inputContainer']['style']['left'] = f1gxu + 'px', dqkh['inputContainer']['style']['top'] = vk6nzh + 'px';
            }, $mab9['stage']['on']('resize', null, ge_u4['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (vzsjnh) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), hxsnv['_soundClass'] = lcybm, hxsnv['_musicClass'] = lcybm, window['_videoClass'] = xnhjsv;
        }, ge_u4['_onStageResize'] = function () {
            var wu21fg = $mab9['stage']['_canvasTransform']['identity']();
            wu21fg['scale'](wge_u4['width'] / wgf1u2['canvas']['width'] / xnsj1f['getPixelRatio'](), wge_u4['height'] / wgf1u2['canvas']['height'] / xnsj1f['getPixelRatio']());
        }, ge_u4['wxinputFocus'] = function (u4g_w) {
            var fx2gs = dqkh['inputElement']['target'];
            if (fx2gs && !fx2gs['editable']) return;
            m$blcy['window']['wx']['offKeyboardConfirm'](), m$blcy['window']['wx']['offKeyboardInput'](), m$blcy['window']['wx']['showKeyboard']({
                'defaultValue': fx2gs['text'],
                'maxLength': fx2gs['maxChars'],
                'multiple': fx2gs['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (kqdzh) {},
                'fail': function (xnvj) {}
            }), m$blcy['window']['wx']['onKeyboardConfirm'](function (dqzh6k) {
                var f12uxg = dqzh6k ? dqzh6k['value'] : '';
                fx2gs['text'] = f12uxg, fx2gs['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), m$blcy['window']['wx']['onKeyboardInput'](function (gw4_) {
                var xfs12j = gw4_ ? gw4_['value'] : '';
                if (!fx2gs['multiline']) {
                    if (xfs12j['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                fx2gs['text'] = xfs12j, fx2gs['event']('input');
            });
        }, ge_u4['inputEnter'] = function () {
            dqkh['inputElement']['target']['focus'] = ![];
        }, ge_u4['wxinputblur'] = function () {
            ge_u4['hideKeyboard']();
        }, ge_u4['hideKeyboard'] = function () {
            m$blcy['window']['wx']['offKeyboardConfirm'](), m$blcy['window']['wx']['offKeyboardInput'](), m$blcy['window']['wx']['hideKeyboard']({
                'success': function ($ybc0o) {
                    console['log']('隐藏键盘');
                },
                'fail': function (y0b$o) {
                    console['log']('隐藏键盘出错:' + (y0b$o ? y0b$o['errMsg'] : ''));
                }
            });
        }, ge_u4;
    }(),
        $mbly = function () {
        function $amcb() {}
        jzvnhs($amcb, 'laya.wx.mini.MiniLoader');
        var aclb$ = $amcb['prototype'];
        return aclb$['load'] = function (y0c4_o, y0e_4, zkq6, vz6hkd, gu2we_) {
            zkq6 === void 0x0 && (zkq6 = !![]), gu2we_ === void 0x0 && (gu2we_ = ![]);
            var u21eg = this;
            u21eg['_url'] = y0c4_o;
            if (y0c4_o['indexOf']('data:image') === 0x0) u21eg['_type'] = y0e_4 = 'image';else u21eg['_type'] = y0e_4 || (y0e_4 = u21eg['getTypeFromUrl'](y0c4_o));
            u21eg['_cache'] = zkq6, u21eg['_data'] = null;
            var jzk = 'ascii';
            if (y0c4_o['indexOf']('.fnt') != -0x1) jzk = 'utf8';else y0e_4 == 'arraybuffer' && (jzk = '');
            ;
            var mcba$ = yo_c0['getFileExtension'](y0c4_o);
            if ($amcb['_fileTypeArr']['indexOf'](mcba$) != -0x1) m$blcy['EnvConfig']['load']['call'](this, y0c4_o, y0e_4, zkq6, vz6hkd, gu2we_);else {
                if (!d6zq8['getFileInfo'](y0c4_o)) {
                    if (y0c4_o['indexOf']('layaNativeDir/') != -0x1) {
                        if (m$blcy['isZiYu']) {
                            var e4w0o_ = d6zq8['ziyuFileData'][y0c4_o];
                            u21eg['onLoaded'](e4w0o_);
                            return;
                        } else {
                            cosnole['log']('read read'), d6zq8['read'](y0c4_o, jzk, new rd58q($amcb, $amcb['onReadNativeCallBack'], [jzk, y0c4_o, y0e_4, zkq6, vz6hkd, gu2we_, u21eg]));
                            return;
                        }
                    }
                    if (abmc$l['rootPath'] == '') var tq86 = y0c4_o;else tq86 = y0c4_o['split'](abmc$l['rootPath'])[0x0];
                    y0c4_o['indexOf']('http://') != -0x1 || y0c4_o['indexOf']('https://') != -0x1 ? m$blcy['EnvConfig']['load']['call'](u21eg, y0c4_o, y0e_4, zkq6, vz6hkd, gu2we_) : d6zq8['readFile'](tq86, jzk, new rd58q($amcb, $amcb['onReadNativeCallBack'], [jzk, y0c4_o, y0e_4, zkq6, vz6hkd, gu2we_, u21eg]), y0c4_o);
                } else m$blcy['EnvConfig']['load']['call'](this, y0c4_o, y0e_4, zkq6, vz6hkd, gu2we_);
            }
        }, aclb$['resMgrLoad'] = function (bcy$0o, xhvns, b9$aml, eg12, dq6zhk, xj1fns, y$mcl) {
            b9$aml === void 0x0 && (b9$aml = 0x0), eg12 === void 0x0 && (eg12 = ![]), dq6zhk === void 0x0 && (dq6zhk = ![]), xj1fns === void 0x0 && (xj1fns = 0x0), y$mcl === void 0x0 && (y$mcl = 0x3), bcy$0o['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', bcy$0o), m$blcy['EnvConfig']['resMgrLoad'](bcy$0o, ($0yo, $obc0y, wge2_) => {
                $amcb['prototype']['resMgrLoadCallBack']($0yo, $obc0y, wge2_, xhvns);
            }, b9$aml, eg12, dq6zhk, xj1fns, y$mcl);
        }, aclb$['resMgrLoadCallBack'] = function (tq7, znv6h, jxfvns, jhvnx) {
            console['log']('buff:::', tq7, jxfvns, d6zq8['fileNativeDir'] + '///' + d6zq8['fileListName']), jhvnx(tq7, znv6h, jxfvns);
        }, aclb$['clearRes'] = function (ma9b, vjnhsx) {
            vjnhsx === void 0x0 && (vjnhsx = ![]);
            var njvhzk = this;
            njvhzk['clearRes'](ma9b, vjnhsx);
            var v6zhkn = d6zq8['getFileInfo'](ma9b);
            if (v6zhkn && (ma9b['indexOf']('http://') != -0x1 || ma9b['indexOf']('https://') != -0x1)) {
                var eg_2w = v6zhkn['md5'],
                    rdq58 = d6zq8['getFileNativePath'](eg_2w);
                d6zq8['remove'](rdq58);
            }
        }, $amcb['onReadNativeCallBack'] = function (w4uge_, lcmby$, o04ey_, gu4w_e, g_uw4, _weuo, oy_0c, tr357, o0b4) {
            gu4w_e === void 0x0 && (gu4w_e = !![]), _weuo === void 0x0 && (_weuo = ![]), tr357 === void 0x0 && (tr357 = 0x0);
            if (!tr357) {
                var ug2_ew;
                if (o04ey_ == 'json' || o04ey_ == 'atlas') ug2_ew = m$blcy['getJson'](o0b4['data']);else o04ey_ == 'xml' ? ug2_ew = yo_c0['parseXMLFromString'](o0b4['data']) : ug2_ew = o0b4['data'];
                oy_0c['onLoaded'](ug2_ew), !m$blcy['isZiYu'] && m$blcy['isPosMsgYu'] && o04ey_ != 'arraybuffer' && wx['postMessage']({
                    'url': lcmby$,
                    'data': ug2_ew,
                    'isLoad': !![]
                });
            } else tr357 == 0x1 && m$blcy['EnvConfig']['load']['call'](oy_0c, lcmby$, o04ey_, gu4w_e, g_uw4, _weuo);
        }, qdr($amcb, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), $amcb;
    }(),
        d6zq8 = function (gw2e_) {
        function t385r7() {
            t385r7['__super']['call'](this);
            ;
        }
        return jzvnhs(t385r7, 'laya.wx.mini.MiniFileMgr', gw2e_), t385r7['isLoadFile'] = function (ym$cbl) {
            return t385r7['_fileTypeArr']['indexOf'](ym$cbl) != -0x1 ? !![] : ![];
        }, t385r7['getFileInfo'] = function (vnhjkz) {
            var uweg1 = vnhjkz['split']('?')[0x0],
                tr358 = t385r7['filesListObj'][uweg1];
            if (tr358 == null) return null;else return tr358;
            return null;
        }, t385r7['onFileUpdate'] = function (q8k, w1gf) {
            var ylc0$b = q8k['split']('/'),
                o4ewu = ylc0$b[ylc0$b['length'] - 0x1],
                rd8tq = t385r7['getFileInfo'](w1gf);
            if (rd8tq == null) t385r7['onSaveFile'](w1gf, o4ewu);else {
                if (rd8tq['readyUrl'] != w1gf) t385r7['remove'](o4ewu, w1gf);
            }
        }, t385r7['exits'] = function (y0e4o, c0_) {
            var zvhd6k = t385r7['getFileNativePath'](y0e4o);
            t385r7['fs']['getFileInfo']({
                'filePath': zvhd6k,
                'success': function (r35t78) {
                    c0_ != null && c0_['runWith']([0x0, r35t78]);
                },
                'fail': function (yob4c0) {
                    c0_ != null && c0_['runWith']([0x1, yob4c0]);
                }
            });
        }, t385r7['read'] = function (njzvhk, t5q7r, jxsn1f, z86kd) {
            t5q7r === void 0x0 && (t5q7r = 'ascill'), z86kd === void 0x0 && (z86kd = '');
            var u_weo;
            z86kd != '' ? u_weo = t385r7['getFileNativePath'](njzvhk) : u_weo = njzvhk, t385r7['fs']['readFile']({
                'filePath': u_weo,
                'encoding': t5q7r,
                'success': function (p3t) {
                    jxsn1f != null && jxsn1f['runWith']([0x0, p3t]);
                },
                'fail': function (_wu4oe) {
                    if (_wu4oe && z86kd != '') t385r7['down'](z86kd, t5q7r, jxsn1f, z86kd);else jxsn1f != null && jxsn1f['runWith']([0x1]);
                }
            });
        }, t385r7['readNativeFile'] = function (oc_40y, o4_euw) {
            t385r7['fs']['readFile']({
                'filePath': oc_40y,
                'encoding': '',
                'success': function (m$bl9) {
                    o4_euw != null && o4_euw['runWith']([0x0]);
                },
                'fail': function (mc$bal) {
                    o4_euw != null && o4_euw['runWith']([0x1]);
                }
            });
        }, t385r7['down'] = function (c0$l, vzkn6h, ycbl$, jxsn1) {
            vzkn6h === void 0x0 && (vzkn6h = 'ascill'), jxsn1 === void 0x0 && (jxsn1 = '');
            var dzqh6 = t385r7['getFileNativePath'](jxsn1),
                l0$ycb = t385r7['wxdown']({
                'url': c0$l,
                'filePath': dzqh6,
                'success': function (xsvhjn) {
                    if (xsvhjn['statusCode'] === 0xc8) t385r7['readFile'](xsvhjn['filePath'], vzkn6h, ycbl$, jxsn1);
                },
                'fail': function (trq6) {
                    ycbl$ != null && ycbl$['runWith']([0x1, trq6]);
                }
            });
            l0$ycb['onProgressUpdate'](function (egu4w) {
                ycbl$ != null && ycbl$['runWith']([0x2, egu4w['progress']]);
            });
        }, t385r7['readFile'] = function (o$0yc, pri357, qk68dt, t85dr) {
            pri357 === void 0x0 && (pri357 = 'ascill'), t85dr === void 0x0 && (t85dr = ''), t385r7['fs']['readFile']({
                'filePath': o$0yc,
                'encoding': pri357,
                'success': function (hzkd6) {
                    if (o$0yc['indexOf']('http://') != -0x1 || o$0yc['indexOf']('https://') != -0x1) t385r7['onFileUpdate'](o$0yc, t85dr);
                    qk68dt != null && qk68dt['runWith']([0x0, hzkd6]);
                },
                'fail': function (vnjxf) {
                    if (vnjxf) qk68dt != null && qk68dt['runWith']([0x1, vnjxf]);
                }
            });
        }, t385r7['downImg'] = function (_4uew, vjhk, jxs12f) {
            jxs12f === void 0x0 && (jxs12f = '');
            var gux2f1 = t385r7['wxdown']({
                'url': _4uew,
                'success': function (mlcby$) {
                    mlcby$['statusCode'] === 0xc8 && t385r7['copyFile'](mlcby$['tempFilePath'], jxs12f, vjhk);
                },
                'fail': function (nfsvxj) {
                    vjhk != null && vjhk['runWith']([0x1, nfsvxj]);
                }
            });
        }, t385r7['copyFile'] = function (o40e, s1jf, qt857) {
            var r83t57 = o40e['split']('/'),
                _egu4 = r83t57[r83t57['length'] - 0x1],
                kqtd68 = s1jf['split']('?')[0x0],
                ue_ = t385r7['getFileInfo'](s1jf),
                jx1fns = t385r7['getFileNativePath'](_egu4);
            t385r7['fs']['copyFile']({
                'srcPath': o40e,
                'destPath': jx1fns,
                'success': function (uwo_4e) {
                    if (!ue_) t385r7['onSaveFile'](s1jf, _egu4), qt857 != null && qt857['runWith']([0x0]);else {
                        if (ue_['readyUrl'] != s1jf) t385r7['remove'](_egu4, s1jf, qt857);
                    }
                },
                'fail': function (tq5d8) {
                    qt857 != null && qt857['runWith']([0x1, tq5d8]);
                }
            });
        }, t385r7['getFileNativePath'] = function (vnkj) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + vnkj;
        }, t385r7['remove'] = function (c$ylb, kznjh, t5r783) {
            kznjh === void 0x0 && (kznjh = '');
            var y0b4c = t385r7['getFileInfo'](kznjh),
                z68kd = t385r7['getFileNativePath'](y0b4c['md5']);
            $mab9['loader']['clearRes'](y0b4c['readyUrl']), t385r7['fs']['unlink']({
                'filePath': z68kd,
                'success': function (blc0y$) {
                    if (kznjh != '') t385r7['onSaveFile'](kznjh, c$ylb);
                    t5r783 != null && t5r783['runWith']([0x0]);
                },
                'fail': function (t537r) {}
            });
        }, t385r7['onSaveFile'] = function ($lmcab, jsnf) {
            var u2fg = $lmcab['split']('?')[0x0];
            t385r7['filesListObj'][u2fg] = {
                'md5': jsnf,
                'readyUrl': $lmcab
            }, t385r7['fs']['writeFile']({
                'filePath': t385r7['fileNativeDir'] + '/' + t385r7['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](t385r7['filesListObj']),
                'success': function (w40o_e) {
                    console['log']('写入测试测试成功：', w40o_e);
                },
                'fail': function (znvkhj) {
                    console['log']('写入测试测试失败：', znvkhj);
                }
            });
        }, t385r7['existDir'] = function (fw2u, o0$ybc) {
            t385r7['fs']['mkdir']({
                'dirPath': fw2u,
                'success': function (lcb$y) {
                    o0$ybc != null && o0$ybc['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (wou_4) {
                    if (wou_4['errMsg']['indexOf']('file already exists') != -0x1) t385r7['readSync'](t385r7['fileListName'], 'utf8', o0$ybc);else o0$ybc != null && o0$ybc['runWith']([0x1, wou_4]);
                }
            });
        }, t385r7['readSync'] = function (gu12we, fx2s, vsznj, $coy0) {
            fx2s === void 0x0 && (fx2s = 'ascill'), $coy0 === void 0x0 && ($coy0 = '');
            var dk6zhv = t385r7['getFileNativePath'](gu12we),
                ob$cy0;
            try {
                ob$cy0 = t385r7['fs']['readFileSync'](dk6zhv), vsznj != null && vsznj['runWith']([0x0, { 'data': ob$cy0 }]);
            } catch (sxjnfv) {
                vsznj != null && vsznj['runWith']([0x1]);
            }
        }, t385r7['readCache'] = function () {}, t385r7['writeCache'] = function (vsxjnh) {
            var ugx2f1 = readyUrl['split']('?')[0x0];
            t385r7['filesListObj'][ugx2f1] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, t385r7['fs']['writeFile']({
                'filePath': t385r7['fileNativeDir'] + '/' + t385r7['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](t385r7['filesListObj']),
                'success': function (ge4u) {},
                'fail': function (vkhzn) {}
            });
        }, t385r7['setNativeFileDir'] = function (vnjkhz) {
            t385r7['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + vnjkhz;
        }, t385r7['filesListObj'] = {}, t385r7['fileNativeDir'] = null, t385r7['fileListName'] = 'layaairfiles.txt', t385r7['ziyuFileData'] = {}, qdr(t385r7, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), t385r7;
    }(jf2xs),
        lcybm = function (sjxhvn) {
        function _04ey() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], _04ey['__super']['call'](this), this['_sound'] = _04ey['_createSound'](), this['_chanell'] = new td58rq(this['_sound']);
        }
        jzvnhs(_04ey, 'laya.wx.mini.MiniSound', sjxhvn);
        var vdhz = _04ey['prototype'];
        return vdhz['load'] = function (svznh) {
            var ue4wg = this;
            svznh = abmc$l['formatURL'](svznh), this['url'] = svznh;
            if (_04ey['_audioCache'][svznh]) {
                this['event']('complete');
                return;
            }
            function $0bcoy() {
                if (_04ey['_null'] != undefined) ue4wg['_sound']['onCanplay'](_04ey['_null']), ue4wg['_sound']['onError'](_04ey['_null']);else try {
                    ue4wg['_sound']['onCanplay'](null), ue4wg['_sound']['onError'](null), _04ey['_null'] = null;
                } catch (r7pt) {
                    console['warn']('[wxmini] _clearSound:' + r7pt), ue4wg['_sound']['onCanplay'](xjs2f1), ue4wg['_sound']['onError'](xjs2f1), _04ey['_null'] = xjs2f1;
                }
            }
            function jfnxs1() {
                zdhvk6['loaded'] = !![], zdhvk6['event']('complete'), _04ey['_audioCache'][zdhvk6['url']] = zdhvk6;
            }
            function x2uf(wo_0) {
                console['error']('errCode=' + wo_0['errCode'] + '  errMsg=' + wo_0['errMsg']), zdhvk6['event']('error');
            }
            function xjs2f1() {}
            this['_sound']['onCanplay'](jfnxs1), this['_sound']['onError'](x2uf), this['_sound']['src'] = svznh;
            var zdhvk6 = this;
        }, vdhz['play'] = function (_euwo4, fvx) {
            _euwo4 === void 0x0 && (_euwo4 = 0x0), fvx === void 0x0 && (fvx = 0x0);
            var jn1sf, rdqt;
            if (this['url'] == hxsnv['_tMusic']) {
                if (!_04ey['_musicAudio']) _04ey['_musicAudio'] = this['_sound'];
                jn1sf = _04ey['_musicAudio'], rdqt = this['_chanell'];
            } else jn1sf = this['_sound'], rdqt = this['_chanell'];
            return jn1sf['src'] = this['url'], jn1sf['startTime'] = 0x0, rdqt['isStopped'] && (rdqt['url'] = this['url'], rdqt['loops'] = fvx, rdqt['startTime'] = _euwo4, rdqt['play'](), hxsnv['addChannel'](rdqt)), rdqt;
        }, vdhz['dispose'] = function () {
            var q6t8 = _04ey['_audioCache'][this['url']];
            q6t8 && (q6t8['src'] = '', delete _04ey['_audioCache'][this['url']]);
        }, hvnz6k(0x0, vdhz, 'duration', function () {
            return this['_sound']['duration'];
        }), _04ey['_createSound'] = function () {
            _04ey['_id']++;
            var nxfj1s = m$blcy['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return nxfj1s;
        }, _04ey['_musicAudio'] = null, _04ey['_id'] = 0x0, _04ey['_audioCache'] = {}, _04ey['_null'] = undefined, _04ey;
    }(jf2xs),
        td58rq = function (wg2u1e) {
        function vnjhzs(jsxfn) {
            this['_audio'] = null, this['_onEnd'] = null, vnjhzs['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = jsxfn, this['_onEnd'] = yo_c0['bind'](this['__onEnd'], this), jsxfn['onEnded'](this['_onEnd']);
        }
        jzvnhs(vnjhzs, 'laya.wx.mini.MiniSoundChannel', wg2u1e);
        var qt8r5 = vnjhzs['prototype'];
        return qt8r5['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && ($mab9['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, qt8r5['__onNull'] = function () {}, qt8r5['play'] = function () {
            this['isStopped'] = ![], hxsnv['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, qt8r5['stop'] = function () {
            this['isStopped'] = !![], hxsnv['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, qt8r5['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, qt8r5['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], hxsnv['addChannel'](this), this['_audio']['play']();
        }, hvnz6k(0x0, qt8r5, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), hvnz6k(0x0, qt8r5, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), hvnz6k(0x0, qt8r5, 'volume', function () {
            return 0x1;
        }, function (qr85t7) {}), vnjhzs['_null'] = undefined, vnjhzs;
    }(ybo0c$),
        xnhjsv = function () {
        function m$y() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = m$blcy['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        jzvnhs(m$y, 'laya.wx.mini.MiniVideo');
        var t537p = m$y['prototype'];
        return t537p['on'] = function (tr86dq, ug_w4e, _eou4w) {
            if (tr86dq == 'loadedmetadata') this['onPlayFunc'] = _eou4w['bind'](ug_w4e), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else tr86dq == 'ended' && (this['onEndedFunC'] = _eou4w['bind'](ug_w4e), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, t537p['onTimeUpdateFunc'] = function (nkvz) {
            this['position'] = nkvz['position'], this['_duration'] = nkvz['duration'];
        }, t537p['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, t537p['onended'] = function (ly0$cb, nfs1x) {
            this['onEndedFunC'] = nfs1x['bind'](ly0$cb), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, t537p['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, t537p['off'] = function (hvz, eu2gw, vfnj) {
            if (hvz == 'loadedmetadata') this['onPlayFunc'] = vfnj['bind'](eu2gw), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else hvz == 'ended' && (this['onEndedFunC'] = vfnj['bind'](eu2gw), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, t537p['load'] = function (vnkhz6) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = vnkhz6;
        }, t537p['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, t537p['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, t537p['size'] = function (xn1fsj, qtd86r) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = xn1fsj, this['videoElement']['height'] = qtd86r;
        }, t537p['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, t537p['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, hvnz6k(0x0, t537p, 'duration', function () {
            return this['_duration'];
        }), hvnz6k(0x0, t537p, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (ye04_) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = ye04_;
        }), hvnz6k(0x0, t537p, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), hvnz6k(0x0, t537p, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), hvnz6k(0x0, t537p, 'ended', function () {
            return this['videoend'];
        }), hvnz6k(0x0, t537p, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (co0by$) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = co0by$;
        }), hvnz6k(0x0, t537p, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (we4ou) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = we4ou;
        }), hvnz6k(0x0, t537p, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (xfvn) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = xfvn;
        }), hvnz6k(0x0, t537p, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), hvnz6k(0x0, t537p, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (u2wfg) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = u2wfg;
        }), hvnz6k(0x0, t537p, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (xgfs1) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = xgfs1;
        }), hvnz6k(0x0, t537p, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), hvnz6k(0x0, t537p, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (ybl$c) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = ybl$c;
        }), hvnz6k(0x0, t537p, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (yb$0cl) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = yb$0cl;
        }), hvnz6k(0x0, t537p, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (w4e_g) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = w4e_g;
        }), m$y;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var l$y0b in Laya) {
        var b0o = Laya[l$y0b];
        b0o && b0o['__isclass'] && (exports[l$y0b] = b0o);
    }
});