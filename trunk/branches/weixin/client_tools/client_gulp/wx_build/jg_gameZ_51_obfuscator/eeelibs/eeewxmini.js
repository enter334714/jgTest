var b = wx.$e;
(function (window, document, bs9uk6) {
    var lhtyz = bs9uk6['un'],
        txij$g = bs9uk6['uns'],
        us6bk9 = bs9uk6['static'],
        sk9qn = bs9uk6['class'],
        ij$3q = bs9uk6['getset'],
        ceoa = bs9uk6['__newvec'],
        apoem = laya['utils']['Browser'],
        b5d8 = laya['events']['Event'],
        w12d5 = laya['events']['EventDispatcher'],
        lgzrth = laya['resource']['HTMLImage'],
        c_7ma = laya['utils']['Handler'],
        ghrltz = laya['display']['Input'],
        co7_am = laya['net']['Loader'],
        va_4 = laya['maths']['Matrix'],
        ryzhfl = laya['renders']['Render'],
        kb0s = laya['utils']['RunDriver'],
        xt$jig = laya['media']['Sound'],
        j3xg$ = laya['media']['SoundChannel'],
        capeo = laya['media']['SoundManager'],
        o7capm = laya['display']['Stage'],
        ryflzh = laya['net']['URL'],
        lxrtg = laya['utils']['Utils'],
        oaemc = function () {
        function nuqi3j() {}
        return sk9qn(nuqi3j, 'laya.wx.mini.MiniAdpter'), nuqi3j['getJson'] = function (ijx3q) {
            return JSON['parse'](ijx3q);
        }, nuqi3j['init'] = function (oapc7, ns3ju) {
            oapc7 === void 0x0 && (oapc7 = ![]), ns3ju === void 0x0 && (ns3ju = ![]);
            if (nuqi3j['_inited']) return;
            nuqi3j['window'] = window;
            if (nuqi3j['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            nuqi3j['_inited'] = !![], nuqi3j['isZiYu'] = ns3ju, nuqi3j['isPosMsgYu'] = oapc7, nuqi3j['EnvConfig'] = {}, !nuqi3j['isZiYu'] && (trlhzg['setNativeFileDir']('/layaairGame'), trlhzg['existDir'](trlhzg['fileNativeDir'], c_7ma['create'](nuqi3j, nuqi3j['onMkdirCallBack']))), nuqi3j['window']['focus'] = function () {}, bs9uk6['getUrlPath'] = function () {}, nuqi3j['window']['logtime'] = function (rz4vfy) {}, nuqi3j['window']['alertTimeLog'] = function (db5680) {}, nuqi3j['window']['resetShareInfo'] = function () {}, nuqi3j['window']['CanvasRenderingContext2D'] = function () {}, nuqi3j['window']['CanvasRenderingContext2D']['prototype'] = nuqi3j['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], nuqi3j['window']['document']['body']['appendChild'] = function () {}, nuqi3j['EnvConfig']['pixelRatioInt'] = 0x0, kb0s['getPixelRatio'] = nuqi3j['pixelRatio'], nuqi3j['_preCreateElement'] = apoem['createElement'], apoem['createElement'] = nuqi3j['createElement'], kb0s['createShaderCondition'] = nuqi3j['createShaderCondition'], lxrtg['parseXMLFromString'] = nuqi3j['parseXMLFromString'], ghrltz['_createInputElement'] = _7av4['_createInputElement'], nuqi3j['EnvConfig']['load'] = co7_am['prototype']['load'], co7_am['prototype']['load'] = zfrhl['prototype']['load'], nuqi3j['isZiYu'] && oapc7 && wx['onMessage'](function (_fv4y7) {
                _fv4y7['isLoad'] && (trlhzg['ziyuFileData'][_fv4y7['url']] = _fv4y7['data']);
            });
        }, nuqi3j['onMkdirCallBack'] = function (jx$g3, yvzf) {
            if (!jx$g3) trlhzg['filesListObj'] = JSON['parse'](yvzf['data']);
        }, nuqi3j['pixelRatio'] = function () {
            if (!nuqi3j['EnvConfig']['pixelRatioInt']) try {
                var _f4a = wx['getSystemInfoSync']();
                return nuqi3j['EnvConfig']['pixelRatioInt'] = _f4a['pixelRatio'], _f4a = _f4a, _f4a['pixelRatio'];
            } catch (_yzvf) {}
            return nuqi3j['EnvConfig']['pixelRatioInt'];
        }, nuqi3j['createElement'] = function (pmco) {
            if (pmco == 'canvas') {
                var y74_;
                return nuqi3j['idx'] == 0x1 ? nuqi3j['isZiYu'] ? (y74_ = sharedCanvas, y74_['style'] = {}) : y74_ = window['canvas'] : y74_ = window['wx']['createCanvas'](), nuqi3j['idx']++, y74_;
            } else {
                if (pmco == 'textarea' || pmco == 'input') return nuqi3j['onCreateInput'](pmco);else {
                    if (pmco == 'div') {
                        var xltrh = nuqi3j['_preCreateElement'](pmco);
                        return xltrh['contains'] = function (fy4zr) {
                            return null;
                        }, xltrh['removeChild'] = function (wd085) {}, xltrh;
                    } else return nuqi3j['_preCreateElement'](pmco);
                }
            }
        }, nuqi3j['onCreateInput'] = function (u96k) {
            var fyzrvh = nuqi3j['_preCreateElement'](u96k);
            return fyzrvh['focus'] = _7av4['wxinputFocus'], fyzrvh['blur'] = _7av4['wxinputblur'], fyzrvh['style'] = {}, fyzrvh['value'] = 0x0, fyzrvh['parentElement'] = {}, fyzrvh['placeholder'] = {}, fyzrvh['type'] = {}, fyzrvh['setColor'] = function (qijx$3) {}, fyzrvh['setType'] = function (usbk69) {}, fyzrvh['setFontFace'] = function (o7a_c) {}, fyzrvh['addEventListener'] = function (zyfhvr) {}, fyzrvh['contains'] = function (un96ks) {
                return null;
            }, fyzrvh['removeChild'] = function (ecpao) {}, fyzrvh;
        }, nuqi3j['createShaderCondition'] = function (a4m_c7) {
            var xghtrl = this,
                b0w = function () {
                var m7oa = a4m_c7;
                return xghtrl[a4m_c7['replace']('this.', '')];
            };
            return b0w;
        }, nuqi3j['EnvConfig'] = null, nuqi3j['window'] = null, nuqi3j['_preCreateElement'] = null, nuqi3j['_inited'] = ![], nuqi3j['wxRequest'] = null, nuqi3j['systemInfo'] = null, nuqi3j['version'] = '0.0.1', nuqi3j['isZiYu'] = ![], nuqi3j['isPosMsgYu'] = ![], nuqi3j['parseXMLFromString'] = function (n3$jq) {
            var fa4v_, d065k;
            n3$jq = n3$jq['replace'](/>\s+</g, '><');
            try {
                fa4v_ = new window['Parser']['DOMParser']()['parseFromString'](n3$jq, 'text/xml');
            } catch (k6db) {
                throw '需要引入xml解析库文件';
            }
            return fa4v_;
        }, nuqi3j['idx'] = 0x1, nuqi3j;
    }(),
        l$xgit = function () {
        function ytz() {}
        sk9qn(ytz, 'laya.wx.mini.MiniImage');
        var uqjni3 = ytz['prototype'];
        return uqjni3['_loadImage'] = function (jqxi$3) {
            var o_c7ma = this,
                lg$it = ![];
            jqxi$3['indexOf']('layaNativeDir/') == -0x1 && (lg$it = !![], jqxi$3 = ryflzh['formatURL'](jqxi$3));
            if (!trlhzg['getFileInfo'](jqxi$3)) {
                if (jqxi$3['indexOf']('http://') != -0x1 || jqxi$3['indexOf']('https://') != -0x1) trlhzg['downImg'](jqxi$3, new c_7ma(ytz, ytz['onDownImgCallBack'], [jqxi$3, o_c7ma]), jqxi$3);else ytz['onCreateImage'](jqxi$3, o_c7ma, !![]);
            } else ytz['onCreateImage'](jqxi$3, o_c7ma, !lg$it);
        }, ytz['onDownImgCallBack'] = function (v4f7y, tigl$x, b8d6) {
            if (!b8d6) ytz['onCreateImage'](v4f7y, tigl$x);else tigl$x['onError'](null);
        }, ytz['onCreateImage'] = function (wb08, hvyzfr, jg$xi) {
            jg$xi === void 0x0 && (jg$xi = ![]);
            var vf4_a;
            if (!jg$xi) {
                var c7moa_ = trlhzg['getFileInfo'](wb08),
                    v7am_4 = c7moa_['md5'];
                vf4_a = trlhzg['getFileNativePath'](v7am_4);
            } else vf4_a = wb08;
            if (hvyzfr['imgCache'] == null) hvyzfr['imgCache'] = {};
            var oapmce;
            function db9() {
                oapmce['onload'] = null, oapmce['onerror'] = null, delete hvyzfr['imgCache'][wb08];
            }
            ;
            var sub69k = function () {
                db9(), hvyzfr['onLoaded'](oapmce);
            },
                ac7_o = function () {
                db9(), hvyzfr['event']('error', 'Load image failed');
            };
            hvyzfr['_type'] == 'nativeimage' ? (oapmce = new apoem['window']['Image'](), oapmce['crossOrigin'] = '', oapmce['onload'] = sub69k, oapmce['onerror'] = ac7_o, oapmce['src'] = vf4_a, hvyzfr['imgCache'][wb08] = oapmce) : new lgzrth['create'](vf4_a, {
                'onload': sub69k,
                'onerror': ac7_o,
                'onCreate': function (hrvyzf) {
                    oapmce = hrvyzf, hvyzfr['imgCache'][wb08] = hrvyzf;
                }
            });
        }, ytz;
    }(),
        _7av4 = function () {
        function d82w5() {}
        return sk9qn(d82w5, 'laya.wx.mini.MiniInput'), d82w5['_createInputElement'] = function () {
            ghrltz['_initInput'](ghrltz['area'] = apoem['createElement']('textarea')), ghrltz['_initInput'](ghrltz['input'] = apoem['createElement']('input')), ghrltz['inputContainer'] = apoem['createElement']('div'), ghrltz['inputContainer']['style']['position'] = 'absolute', ghrltz['inputContainer']['style']['zIndex'] = 0x186a0, apoem['container']['appendChild'](ghrltz['inputContainer']), ghrltz['inputContainer']['setPos'] = function (ameo, d0k96b) {
                ghrltz['inputContainer']['style']['left'] = ameo + 'px', ghrltz['inputContainer']['style']['top'] = d0k96b + 'px';
            }, bs9uk6['stage']['on']('resize', null, d82w5['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (xjtig$) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), capeo['_soundClass'] = tj$ig, capeo['_musicClass'] = tj$ig, window['_videoClass'] = kbd065;
        }, d82w5['_onStageResize'] = function () {
            var sq3jnu = bs9uk6['stage']['_canvasTransform']['identity']();
            sq3jnu['scale'](apoem['width'] / ryzhfl['canvas']['width'] / kb0s['getPixelRatio'](), apoem['height'] / ryzhfl['canvas']['height'] / kb0s['getPixelRatio']());
        }, d82w5['wxinputFocus'] = function (gijx$t) {
            var kdb06 = ghrltz['inputElement']['target'];
            if (kdb06 && !kdb06['editable']) return;
            oaemc['window']['wx']['offKeyboardConfirm'](), oaemc['window']['wx']['offKeyboardInput'](), oaemc['window']['wx']['showKeyboard']({
                'defaultValue': kdb06['text'],
                'maxLength': kdb06['maxChars'],
                'multiple': kdb06['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (hzvfy) {},
                'fail': function (zrthly) {}
            }), oaemc['window']['wx']['onKeyboardConfirm'](function (hrzfy) {
                var mac_ = hrzfy ? hrzfy['value'] : '';
                kdb06['text'] = mac_, kdb06['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), oaemc['window']['wx']['onKeyboardInput'](function (rxltg) {
                var v4_yzf = rxltg ? rxltg['value'] : '';
                if (!kdb06['multiline']) {
                    if (v4_yzf['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                kdb06['text'] = v4_yzf, kdb06['event']('input');
            });
        }, d82w5['inputEnter'] = function () {
            ghrltz['inputElement']['target']['focus'] = ![];
        }, d82w5['wxinputblur'] = function () {
            d82w5['hideKeyboard']();
        }, d82w5['hideKeyboard'] = function () {
            oaemc['window']['wx']['offKeyboardConfirm'](), oaemc['window']['wx']['offKeyboardInput'](), oaemc['window']['wx']['hideKeyboard']({
                'success': function (iqjx3$) {
                    console['log']('隐藏键盘');
                },
                'fail': function (rltxg) {
                    console['log']('隐藏键盘出错:' + (rltxg ? rltxg['errMsg'] : ''));
                }
            });
        }, d82w5;
    }(),
        zfrhl = function () {
        function aomepc() {}
        sk9qn(aomepc, 'laya.wx.mini.MiniLoader');
        var u6n9ks = aomepc['prototype'];
        return u6n9ks['load'] = function (d81w25, rv, pmcaeo, xg$, bd0568) {
            pmcaeo === void 0x0 && (pmcaeo = !![]), bd0568 === void 0x0 && (bd0568 = ![]);
            var zlhyfr = this;
            zlhyfr['_url'] = d81w25;
            if (d81w25['indexOf']('data:image') === 0x0) zlhyfr['_type'] = rv = 'image';else zlhyfr['_type'] = rv || (rv = zlhyfr['getTypeFromUrl'](d81w25));
            zlhyfr['_cache'] = pmcaeo, zlhyfr['_data'] = null;
            var yzlfhr = 'ascii';
            if (d81w25['indexOf']('.fnt') != -0x1) yzlfhr = 'utf8';else rv == 'arraybuffer' && (yzlfhr = '');
            ;
            var trhlxg = lxrtg['getFileExtension'](d81w25);
            if (aomepc['_fileTypeArr']['indexOf'](trhlxg) != -0x1) oaemc['EnvConfig']['load']['call'](this, d81w25, rv, pmcaeo, xg$, bd0568);else {
                if (!trlhzg['getFileInfo'](d81w25)) {
                    if (d81w25['indexOf']('layaNativeDir/') != -0x1) {
                        if (oaemc['isZiYu']) {
                            var xi$q3 = trlhzg['ziyuFileData'][d81w25];
                            zlhyfr['onLoaded'](xi$q3);
                            return;
                        } else {
                            cosnole['log']('read read'), trlhzg['read'](d81w25, yzlfhr, new c_7ma(aomepc, aomepc['onReadNativeCallBack'], [yzlfhr, d81w25, rv, pmcaeo, xg$, bd0568, zlhyfr]));
                            return;
                        }
                    }
                    if (ryflzh['rootPath'] == '') var caem = d81w25;else caem = d81w25['split'](ryflzh['rootPath'])[0x0];
                    d81w25['indexOf']('http://') != -0x1 || d81w25['indexOf']('https://') != -0x1 ? oaemc['EnvConfig']['load']['call'](zlhyfr, d81w25, rv, pmcaeo, xg$, bd0568) : trlhzg['readFile'](caem, yzlfhr, new c_7ma(aomepc, aomepc['onReadNativeCallBack'], [yzlfhr, d81w25, rv, pmcaeo, xg$, bd0568, zlhyfr]), d81w25);
                } else oaemc['EnvConfig']['load']['call'](this, d81w25, rv, pmcaeo, xg$, bd0568);
            }
        }, u6n9ks['resMgrLoad'] = function (ixj$3g, k69db0, w8bd, hxlgrt, qk9nu, rhzvy, i$3jqn) {
            w8bd === void 0x0 && (w8bd = 0x0), hxlgrt === void 0x0 && (hxlgrt = ![]), qk9nu === void 0x0 && (qk9nu = ![]), rhzvy === void 0x0 && (rhzvy = 0x0), i$3jqn === void 0x0 && (i$3jqn = 0x3), ixj$3g['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', ixj$3g), oaemc['EnvConfig']['resMgrLoad'](ixj$3g, (c4_am, j3i$qx, epc) => {
                aomepc['prototype']['resMgrLoadCallBack'](c4_am, j3i$qx, epc, k69db0);
            }, w8bd, hxlgrt, qk9nu, rhzvy, i$3jqn);
        }, u6n9ks['resMgrLoadCallBack'] = function (fa4v7, d056b, bsku, epmcao) {
            console['log']('buff:::', fa4v7, bsku, trlhzg['fileNativeDir'] + '///' + trlhzg['fileListName']), epmcao(fa4v7, d056b, bsku);
        }, u6n9ks['clearRes'] = function (xrtl, jq3$in) {
            jq3$in === void 0x0 && (jq3$in = ![]);
            var c_om = this;
            c_om['clearRes'](xrtl, jq3$in);
            var u6k9sn = trlhzg['getFileInfo'](xrtl);
            if (u6k9sn && (xrtl['indexOf']('http://') != -0x1 || xrtl['indexOf']('https://') != -0x1)) {
                var rgxlht = u6k9sn['md5'],
                    x$tilg = trlhzg['getFileNativePath'](rgxlht);
                trlhzg['remove'](x$tilg);
            }
        }, aomepc['onReadNativeCallBack'] = function (f74_vy, zrtlhy, a4m7_c, lgrtxh, d5k0b, yvf_z4, rtxhgl, $ijqn, qn39u) {
            lgrtxh === void 0x0 && (lgrtxh = !![]), yvf_z4 === void 0x0 && (yvf_z4 = ![]), $ijqn === void 0x0 && ($ijqn = 0x0);
            if (!$ijqn) {
                var x3iq$j;
                if (a4m7_c == 'json' || a4m7_c == 'atlas') x3iq$j = oaemc['getJson'](qn39u['data']);else a4m7_c == 'xml' ? x3iq$j = lxrtg['parseXMLFromString'](qn39u['data']) : x3iq$j = qn39u['data'];
                rtxhgl['onLoaded'](x3iq$j), !oaemc['isZiYu'] && oaemc['isPosMsgYu'] && a4m7_c != 'arraybuffer' && wx['postMessage']({
                    'url': zrtlhy,
                    'data': x3iq$j,
                    'isLoad': !![]
                });
            } else $ijqn == 0x1 && oaemc['EnvConfig']['load']['call'](rtxhgl, zrtlhy, a4m7_c, lgrtxh, d5k0b, yvf_z4);
        }, us6bk9(aomepc, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), aomepc;
    }(),
        trlhzg = function (yvz4f) {
        function ztlrhg() {
            ztlrhg['__super']['call'](this);
            ;
        }
        return sk9qn(ztlrhg, 'laya.wx.mini.MiniFileMgr', yvz4f), ztlrhg['isLoadFile'] = function ($xgtl) {
            return ztlrhg['_fileTypeArr']['indexOf']($xgtl) != -0x1 ? !![] : ![];
        }, ztlrhg['getFileInfo'] = function (iq3$j) {
            var knsu = iq3$j['split']('?')[0x0],
                rfyhv = ztlrhg['filesListObj'][knsu];
            if (rfyhv == null) return null;else return rfyhv;
            return null;
        }, ztlrhg['onFileUpdate'] = function (tli$gx, jix$) {
            var iujn3 = tli$gx['split']('/'),
                bu9s6k = iujn3[iujn3['length'] - 0x1],
                njq3u = ztlrhg['getFileInfo'](jix$);
            if (njq3u == null) ztlrhg['onSaveFile'](jix$, bu9s6k);else {
                if (njq3u['readyUrl'] != jix$) ztlrhg['remove'](bu9s6k, jix$);
            }
        }, ztlrhg['exits'] = function (mepoa, gxrtl) {
            var _4zfy = ztlrhg['getFileNativePath'](mepoa);
            ztlrhg['fs']['getFileInfo']({
                'filePath': _4zfy,
                'success': function (w20d) {
                    gxrtl != null && gxrtl['runWith']([0x0, w20d]);
                },
                'fail': function (yrtz) {
                    gxrtl != null && gxrtl['runWith']([0x1, yrtz]);
                }
            });
        }, ztlrhg['read'] = function (grhtzl, amecop, niuj, tyrhl) {
            amecop === void 0x0 && (amecop = 'ascill'), tyrhl === void 0x0 && (tyrhl = '');
            var j3ix$q;
            tyrhl != '' ? j3ix$q = ztlrhg['getFileNativePath'](grhtzl) : j3ix$q = grhtzl, ztlrhg['fs']['readFile']({
                'filePath': j3ix$q,
                'encoding': amecop,
                'success': function (rhlgtz) {
                    niuj != null && niuj['runWith']([0x0, rhlgtz]);
                },
                'fail': function (c7a4_m) {
                    if (c7a4_m && tyrhl != '') ztlrhg['down'](tyrhl, amecop, niuj, tyrhl);else niuj != null && niuj['runWith']([0x1]);
                }
            });
        }, ztlrhg['readNativeFile'] = function (s69nuk, zv4_y) {
            ztlrhg['fs']['readFile']({
                'filePath': s69nuk,
                'encoding': '',
                'success': function (ku9nqs) {
                    zv4_y != null && zv4_y['runWith']([0x0]);
                },
                'fail': function (u69kb) {
                    zv4_y != null && zv4_y['runWith']([0x1]);
                }
            });
        }, ztlrhg['down'] = function (vhzfr, c7m_a4, _4m7, xtgil) {
            c7m_a4 === void 0x0 && (c7m_a4 = 'ascill'), xtgil === void 0x0 && (xtgil = '');
            var _7a4vm = ztlrhg['getFileNativePath'](xtgil),
                o_mac = ztlrhg['wxdown']({
                'url': vhzfr,
                'filePath': _7a4vm,
                'success': function (w82d50) {
                    if (w82d50['statusCode'] === 0xc8) ztlrhg['readFile'](w82d50['filePath'], c7m_a4, _4m7, xtgil);
                },
                'fail': function (wd0b) {
                    _4m7 != null && _4m7['runWith']([0x1, wd0b]);
                }
            });
            o_mac['onProgressUpdate'](function (ujs3nq) {
                _4m7 != null && _4m7['runWith']([0x2, ujs3nq['progress']]);
            });
        }, ztlrhg['readFile'] = function (x$q, s9bk0, x3ij$, jnus) {
            s9bk0 === void 0x0 && (s9bk0 = 'ascill'), jnus === void 0x0 && (jnus = ''), ztlrhg['fs']['readFile']({
                'filePath': x$q,
                'encoding': s9bk0,
                'success': function (htlrg) {
                    if (x$q['indexOf']('http://') != -0x1 || x$q['indexOf']('https://') != -0x1) ztlrhg['onFileUpdate'](x$q, jnus);
                    x3ij$ != null && x3ij$['runWith']([0x0, htlrg]);
                },
                'fail': function (rlzty) {
                    if (rlzty) x3ij$ != null && x3ij$['runWith']([0x1, rlzty]);
                }
            });
        }, ztlrhg['downImg'] = function (g$jtx, ks6n9u, jn$qi) {
            jn$qi === void 0x0 && (jn$qi = '');
            var aeocp = ztlrhg['wxdown']({
                'url': g$jtx,
                'success': function (d2w05) {
                    d2w05['statusCode'] === 0xc8 && ztlrhg['copyFile'](d2w05['tempFilePath'], jn$qi, ks6n9u);
                },
                'fail': function (xrtgh) {
                    ks6n9u != null && ks6n9u['runWith']([0x1, xrtgh]);
                }
            });
        }, ztlrhg['copyFile'] = function (_m4av, yzfv_4, ocam7) {
            var z4fv = _m4av['split']('/'),
                fz_y4 = z4fv[z4fv['length'] - 0x1],
                qn3s9 = yzfv_4['split']('?')[0x0],
                dk605 = ztlrhg['getFileInfo'](yzfv_4),
                fyzhr = ztlrhg['getFileNativePath'](fz_y4);
            ztlrhg['fs']['copyFile']({
                'srcPath': _m4av,
                'destPath': fyzhr,
                'success': function (hlfry) {
                    if (!dk605) ztlrhg['onSaveFile'](yzfv_4, fz_y4), ocam7 != null && ocam7['runWith']([0x0]);else {
                        if (dk605['readyUrl'] != yzfv_4) ztlrhg['remove'](fz_y4, yzfv_4, ocam7);
                    }
                },
                'fail': function (vfy4z) {
                    ocam7 != null && ocam7['runWith']([0x1, vfy4z]);
                }
            });
        }, ztlrhg['getFileNativePath'] = function (g$hxtl) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + g$hxtl;
        }, ztlrhg['remove'] = function (hzgr, j$gxit, hylrzf) {
            j$gxit === void 0x0 && (j$gxit = '');
            var lhzfry = ztlrhg['getFileInfo'](j$gxit),
                jin3u = ztlrhg['getFileNativePath'](lhzfry['md5']);
            bs9uk6['loader']['clearRes'](lhzfry['readyUrl']), ztlrhg['fs']['unlink']({
                'filePath': jin3u,
                'success': function (jq3ns) {
                    if (j$gxit != '') ztlrhg['onSaveFile'](j$gxit, hzgr);
                    hylrzf != null && hylrzf['runWith']([0x0]);
                },
                'fail': function (lh$tgx) {}
            });
        }, ztlrhg['onSaveFile'] = function (vy4rf, d5bw0) {
            var k69bsu = vy4rf['split']('?')[0x0];
            ztlrhg['filesListObj'][k69bsu] = {
                'md5': d5bw0,
                'readyUrl': vy4rf
            }, ztlrhg['fs']['writeFile']({
                'filePath': ztlrhg['fileNativeDir'] + '/' + ztlrhg['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](ztlrhg['filesListObj']),
                'success': function (iq3jn$) {
                    console['log']('写入测试测试成功：', iq3jn$);
                },
                'fail': function (mpoec) {
                    console['log']('写入测试测试失败：', mpoec);
                }
            });
        }, ztlrhg['existDir'] = function (ksnqu9, usjqn) {
            ztlrhg['fs']['mkdir']({
                'dirPath': ksnqu9,
                'success': function (xgh$tl) {
                    usjqn != null && usjqn['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (zyfhlr) {
                    if (zyfhlr['errMsg']['indexOf']('file already exists') != -0x1) ztlrhg['readSync'](ztlrhg['fileListName'], 'utf8', usjqn);else usjqn != null && usjqn['runWith']([0x1, zyfhlr]);
                }
            });
        }, ztlrhg['readSync'] = function (ca_, v4_yf7, s69kun, nqju3) {
            v4_yf7 === void 0x0 && (v4_yf7 = 'ascill'), nqju3 === void 0x0 && (nqju3 = '');
            var sunk96 = ztlrhg['getFileNativePath'](ca_),
                ac_m7o;
            try {
                ac_m7o = ztlrhg['fs']['readFileSync'](sunk96), s69kun != null && s69kun['runWith']([0x0, { 'data': ac_m7o }]);
            } catch (qsk9n) {
                s69kun != null && s69kun['runWith']([0x1]);
            }
        }, ztlrhg['readCache'] = function () {}, ztlrhg['writeCache'] = function (cmope) {
            var $qn3j = readyUrl['split']('?')[0x0];
            ztlrhg['filesListObj'][$qn3j] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, ztlrhg['fs']['writeFile']({
                'filePath': ztlrhg['fileNativeDir'] + '/' + ztlrhg['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](ztlrhg['filesListObj']),
                'success': function (bkd56) {},
                'fail': function (oeampc) {}
            });
        }, ztlrhg['setNativeFileDir'] = function (cpaeom) {
            ztlrhg['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + cpaeom;
        }, ztlrhg['filesListObj'] = {}, ztlrhg['fileNativeDir'] = null, ztlrhg['fileListName'] = 'layaairfiles.txt', ztlrhg['ziyuFileData'] = {}, us6bk9(ztlrhg, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), ztlrhg;
    }(w12d5),
        tj$ig = function (poa7m) {
        function gtxl() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], gtxl['__super']['call'](this), this['_sound'] = gtxl['_createSound'](), this['_chanell'] = new d518(this['_sound']);
        }
        sk9qn(gtxl, 'laya.wx.mini.MiniSound', poa7m);
        var uk6sn = gtxl['prototype'];
        return uk6sn['load'] = function (hgltx$) {
            var tzlgh = this;
            hgltx$ = ryflzh['formatURL'](hgltx$), this['url'] = hgltx$;
            if (gtxl['_audioCache'][hgltx$]) {
                this['event']('complete');
                return;
            }
            function q9sun() {
                if (gtxl['_null'] != undefined) tzlgh['_sound']['onCanplay'](gtxl['_null']), tzlgh['_sound']['onError'](gtxl['_null']);else try {
                    tzlgh['_sound']['onCanplay'](null), tzlgh['_sound']['onError'](null), gtxl['_null'] = null;
                } catch (ca7m_4) {
                    console['warn']('[wxmini] _clearSound:' + ca7m_4), tzlgh['_sound']['onCanplay'](x$glit), tzlgh['_sound']['onError'](x$glit), gtxl['_null'] = x$glit;
                }
            }
            function apcoem() {
                ujqs['loaded'] = !![], ujqs['event']('complete'), gtxl['_audioCache'][ujqs['url']] = ujqs;
            }
            function juin(gtrlhz) {
                console['error']('errCode=' + gtrlhz['errCode'] + '  errMsg=' + gtrlhz['errMsg']), ujqs['event']('error');
            }
            function x$glit() {}
            this['_sound']['onCanplay'](apcoem), this['_sound']['onError'](juin), this['_sound']['src'] = hgltx$;
            var ujqs = this;
        }, uk6sn['play'] = function (n3ij, d6b850) {
            n3ij === void 0x0 && (n3ij = 0x0), d6b850 === void 0x0 && (d6b850 = 0x0);
            var s0k6, zyhlt;
            if (this['url'] == capeo['_tMusic']) {
                if (!gtxl['_musicAudio']) gtxl['_musicAudio'] = this['_sound'];
                s0k6 = gtxl['_musicAudio'], zyhlt = this['_chanell'];
            } else s0k6 = this['_sound'], zyhlt = this['_chanell'];
            return s0k6['src'] = this['url'], s0k6['startTime'] = 0x0, zyhlt['isStopped'] && (zyhlt['url'] = this['url'], zyhlt['loops'] = d6b850, zyhlt['startTime'] = n3ij, zyhlt['play'](), capeo['addChannel'](zyhlt)), zyhlt;
        }, uk6sn['dispose'] = function () {
            var rfy4 = gtxl['_audioCache'][this['url']];
            rfy4 && (rfy4['src'] = '', delete gtxl['_audioCache'][this['url']]);
        }, ij$3q(0x0, uk6sn, 'duration', function () {
            return this['_sound']['duration'];
        }), gtxl['_createSound'] = function () {
            gtxl['_id']++;
            var qj3in$ = oaemc['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return qj3in$;
        }, gtxl['_musicAudio'] = null, gtxl['_id'] = 0x0, gtxl['_audioCache'] = {}, gtxl['_null'] = undefined, gtxl;
    }(w12d5),
        d518 = function (njui3) {
        function com7($xtj) {
            this['_audio'] = null, this['_onEnd'] = null, com7['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = $xtj, this['_onEnd'] = lxrtg['bind'](this['__onEnd'], this), $xtj['onEnded'](this['_onEnd']);
        }
        sk9qn(com7, 'laya.wx.mini.MiniSoundChannel', njui3);
        var nqj = com7['prototype'];
        return nqj['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (bs9uk6['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, nqj['__onNull'] = function () {}, nqj['play'] = function () {
            this['isStopped'] = ![], capeo['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, nqj['stop'] = function () {
            this['isStopped'] = !![], capeo['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, nqj['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, nqj['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], capeo['addChannel'](this), this['_audio']['play']();
        }, ij$3q(0x0, nqj, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), ij$3q(0x0, nqj, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), ij$3q(0x0, nqj, 'volume', function () {
            return 0x1;
        }, function (p7cao) {}), com7['_null'] = undefined, com7;
    }(j3xg$),
        kbd065 = function () {
        function jq3ui() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = oaemc['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        sk9qn(jq3ui, 'laya.wx.mini.MiniVideo');
        var i3$j = jq3ui['prototype'];
        return i3$j['on'] = function (a7v_m, d68, lhzyfr) {
            if (a7v_m == 'loadedmetadata') this['onPlayFunc'] = lhzyfr['bind'](d68), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else a7v_m == 'ended' && (this['onEndedFunC'] = lhzyfr['bind'](d68), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, i3$j['onTimeUpdateFunc'] = function (zlfyh) {
            this['position'] = zlfyh['position'], this['_duration'] = zlfyh['duration'];
        }, i3$j['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, i3$j['onended'] = function ($qjx, njiu3) {
            this['onEndedFunC'] = njiu3['bind']($qjx), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, i3$j['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, i3$j['off'] = function (nquji, b058dw, dk60) {
            if (nquji == 'loadedmetadata') this['onPlayFunc'] = dk60['bind'](b058dw), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else nquji == 'ended' && (this['onEndedFunC'] = dk60['bind'](b058dw), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, i3$j['load'] = function (q3sju) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = q3sju;
        }, i3$j['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, i3$j['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, i3$j['size'] = function (omep, gj3xi) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = omep, this['videoElement']['height'] = gj3xi;
        }, i3$j['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, i3$j['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, ij$3q(0x0, i3$j, 'duration', function () {
            return this['_duration'];
        }), ij$3q(0x0, i3$j, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (i$x3q) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = i$x3q;
        }), ij$3q(0x0, i3$j, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), ij$3q(0x0, i3$j, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), ij$3q(0x0, i3$j, 'ended', function () {
            return this['videoend'];
        }), ij$3q(0x0, i3$j, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (sk) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = sk;
        }), ij$3q(0x0, i3$j, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (ztlhgr) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = ztlhgr;
        }), ij$3q(0x0, i3$j, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (xtij) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = xtij;
        }), ij$3q(0x0, i3$j, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), ij$3q(0x0, i3$j, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (capoem) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = capoem;
        }), ij$3q(0x0, i3$j, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (kd506b) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = kd506b;
        }), ij$3q(0x0, i3$j, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), ij$3q(0x0, i3$j, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (rxtg) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = rxtg;
        }), ij$3q(0x0, i3$j, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (niq3uj) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = niq3uj;
        }), ij$3q(0x0, i3$j, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (pc7oa) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = pc7oa;
        }), jq3ui;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var apom7 in Laya) {
        var k9nsuq = Laya[apom7];
        k9nsuq && k9nsuq['__isclass'] && (exports[apom7] = k9nsuq);
    }
});