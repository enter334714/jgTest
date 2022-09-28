var b = wx.$e;
(function (window, document, ns3q9) {
    var niq3j = ns3q9['un'],
        c7mpao = ns3q9['uns'],
        c_ma7 = ns3q9['static'],
        ryzvhf = ns3q9['class'],
        _cam4 = ns3q9['getset'],
        u6b9 = ns3q9['__newvec'],
        eaop = laya['utils']['Browser'],
        gij3$ = laya['events']['Event'],
        rfyvzh = laya['events']['EventDispatcher'],
        av7f_ = laya['resource']['HTMLImage'],
        d12w85 = laya['utils']['Handler'],
        _vm = laya['display']['Input'],
        uji = laya['net']['Loader'],
        va47_f = laya['maths']['Matrix'],
        nsujq = laya['renders']['Render'],
        nj3i = laya['utils']['RunDriver'],
        po = laya['media']['Sound'],
        sq9unk = laya['media']['SoundChannel'],
        xltrg = laya['media']['SoundManager'],
        xghl = laya['display']['Stage'],
        jg$tix = laya['net']['URL'],
        j3qn = laya['utils']['Utils'],
        nq9ks = function () {
        function i3xq() {}
        return ryzvhf(i3xq, 'laya.wx.mini.MiniAdpter'), i3xq['getJson'] = function (qk9ns) {
            return JSON['parse'](qk9ns);
        }, i3xq['init'] = function (aocpem, kd0b9) {
            aocpem === void 0x0 && (aocpem = ![]), kd0b9 === void 0x0 && (kd0b9 = ![]);
            if (i3xq['_inited']) return;
            i3xq['window'] = window;
            if (i3xq['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            i3xq['_inited'] = !![], i3xq['isZiYu'] = kd0b9, i3xq['isPosMsgYu'] = aocpem, i3xq['EnvConfig'] = {}, !i3xq['isZiYu'] && (pma7c['setNativeFileDir']('/layaairGame'), pma7c['existDir'](pma7c['fileNativeDir'], d12w85['create'](i3xq, i3xq['onMkdirCallBack']))), i3xq['window']['focus'] = function () {}, ns3q9['getUrlPath'] = function () {}, i3xq['window']['logtime'] = function (t$lgh) {}, i3xq['window']['alertTimeLog'] = function (a_4mv) {}, i3xq['window']['resetShareInfo'] = function () {}, i3xq['window']['CanvasRenderingContext2D'] = function () {}, i3xq['window']['CanvasRenderingContext2D']['prototype'] = i3xq['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], i3xq['window']['document']['body']['appendChild'] = function () {}, i3xq['EnvConfig']['pixelRatioInt'] = 0x0, nj3i['getPixelRatio'] = i3xq['pixelRatio'], i3xq['_preCreateElement'] = eaop['createElement'], eaop['createElement'] = i3xq['createElement'], nj3i['createShaderCondition'] = i3xq['createShaderCondition'], j3qn['parseXMLFromString'] = i3xq['parseXMLFromString'], _vm['_createInputElement'] = c4_7a['_createInputElement'], i3xq['EnvConfig']['load'] = uji['prototype']['load'], uji['prototype']['load'] = rzhylf['prototype']['load'], i3xq['isZiYu'] && aocpem && wx['onMessage'](function (pa7) {
                pa7['isLoad'] && (pma7c['ziyuFileData'][pa7['url']] = pa7['data']);
            });
        }, i3xq['onMkdirCallBack'] = function (sku96n, u6nsk9) {
            if (!sku96n) pma7c['filesListObj'] = JSON['parse'](u6nsk9['data']);
        }, i3xq['pixelRatio'] = function () {
            if (!i3xq['EnvConfig']['pixelRatioInt']) try {
                var tlzyrh = wx['getSystemInfoSync']();
                return i3xq['EnvConfig']['pixelRatioInt'] = tlzyrh['pixelRatio'], tlzyrh = tlzyrh, tlzyrh['pixelRatio'];
            } catch (d08wb) {}
            return i3xq['EnvConfig']['pixelRatioInt'];
        }, i3xq['createElement'] = function (wbd805) {
            if (wbd805 == 'canvas') {
                var w582d0;
                return i3xq['idx'] == 0x1 ? i3xq['isZiYu'] ? (w582d0 = sharedCanvas, w582d0['style'] = {}) : w582d0 = window['canvas'] : w582d0 = window['wx']['createCanvas'](), i3xq['idx']++, w582d0;
            } else {
                if (wbd805 == 'textarea' || wbd805 == 'input') return i3xq['onCreateInput'](wbd805);else {
                    if (wbd805 == 'div') {
                        var q3njus = i3xq['_preCreateElement'](wbd805);
                        return q3njus['contains'] = function (aemco) {
                            return null;
                        }, q3njus['removeChild'] = function (ltig) {}, q3njus;
                    } else return i3xq['_preCreateElement'](wbd805);
                }
            }
        }, i3xq['onCreateInput'] = function (unsk) {
            var i$j3nq = i3xq['_preCreateElement'](unsk);
            return i$j3nq['focus'] = c4_7a['wxinputFocus'], i$j3nq['blur'] = c4_7a['wxinputblur'], i$j3nq['style'] = {}, i$j3nq['value'] = 0x0, i$j3nq['parentElement'] = {}, i$j3nq['placeholder'] = {}, i$j3nq['type'] = {}, i$j3nq['setColor'] = function (gji$x3) {}, i$j3nq['setType'] = function (lig$tx) {}, i$j3nq['setFontFace'] = function (g3ix$) {}, i$j3nq['addEventListener'] = function (u69n) {}, i$j3nq['contains'] = function (thgxlr) {
                return null;
            }, i$j3nq['removeChild'] = function (_va47) {}, i$j3nq;
        }, i3xq['createShaderCondition'] = function (xqi3$j) {
            var nqu3i = this,
                xl$h = function () {
                var lgi$tx = xqi3$j;
                return nqu3i[xqi3$j['replace']('this.', '')];
            };
            return xl$h;
        }, i3xq['EnvConfig'] = null, i3xq['window'] = null, i3xq['_preCreateElement'] = null, i3xq['_inited'] = ![], i3xq['wxRequest'] = null, i3xq['systemInfo'] = null, i3xq['version'] = '0.0.1', i3xq['isZiYu'] = ![], i3xq['isPosMsgYu'] = ![], i3xq['parseXMLFromString'] = function (k6u9sb) {
            var yhflz, op7cma;
            k6u9sb = k6u9sb['replace'](/>\s+</g, '><');
            try {
                yhflz = new window['Parser']['DOMParser']()['parseFromString'](k6u9sb, 'text/xml');
            } catch (rzhv) {
                throw '需要引入xml解析库文件';
            }
            return yhflz;
        }, i3xq['idx'] = 0x1, i3xq;
    }(),
        xig$lt = function () {
        function qx$i3() {}
        ryzvhf(qx$i3, 'laya.wx.mini.MiniImage');
        var $q3jix = qx$i3['prototype'];
        return $q3jix['_loadImage'] = function (inqj3) {
            var iq3$jn = this,
                tgj = ![];
            inqj3['indexOf']('layaNativeDir/') == -0x1 && (tgj = !![], inqj3 = jg$tix['formatURL'](inqj3));
            if (!pma7c['getFileInfo'](inqj3)) {
                if (inqj3['indexOf']('http://') != -0x1 || inqj3['indexOf']('https://') != -0x1) pma7c['downImg'](inqj3, new d12w85(qx$i3, qx$i3['onDownImgCallBack'], [inqj3, iq3$jn]), inqj3);else qx$i3['onCreateImage'](inqj3, iq3$jn, !![]);
            } else qx$i3['onCreateImage'](inqj3, iq3$jn, !tgj);
        }, qx$i3['onDownImgCallBack'] = function (u93, bd0, bd6085) {
            if (!bd6085) qx$i3['onCreateImage'](u93, bd0);else bd0['onError'](null);
        }, qx$i3['onCreateImage'] = function (lrgzth, am_4, bd8650) {
            bd8650 === void 0x0 && (bd8650 = ![]);
            var mc74_;
            if (!bd8650) {
                var t$glx = pma7c['getFileInfo'](lrgzth),
                    hrlfz = t$glx['md5'];
                mc74_ = pma7c['getFileNativePath'](hrlfz);
            } else mc74_ = lrgzth;
            if (am_4['imgCache'] == null) am_4['imgCache'] = {};
            var vy_f4;
            function ijuqn3() {
                vy_f4['onload'] = null, vy_f4['onerror'] = null, delete am_4['imgCache'][lrgzth];
            }
            ;
            var f7vy = function () {
                ijuqn3(), am_4['onLoaded'](vy_f4);
            },
                $itlxg = function () {
                ijuqn3(), am_4['event']('error', 'Load image failed');
            };
            am_4['_type'] == 'nativeimage' ? (vy_f4 = new eaop['window']['Image'](), vy_f4['crossOrigin'] = '', vy_f4['onload'] = f7vy, vy_f4['onerror'] = $itlxg, vy_f4['src'] = mc74_, am_4['imgCache'][lrgzth] = vy_f4) : new av7f_['create'](mc74_, {
                'onload': f7vy,
                'onerror': $itlxg,
                'onCreate': function (nkusq) {
                    vy_f4 = nkusq, am_4['imgCache'][lrgzth] = nkusq;
                }
            });
        }, qx$i3;
    }(),
        c4_7a = function () {
        function i3xg$j() {}
        return ryzvhf(i3xg$j, 'laya.wx.mini.MiniInput'), i3xg$j['_createInputElement'] = function () {
            _vm['_initInput'](_vm['area'] = eaop['createElement']('textarea')), _vm['_initInput'](_vm['input'] = eaop['createElement']('input')), _vm['inputContainer'] = eaop['createElement']('div'), _vm['inputContainer']['style']['position'] = 'absolute', _vm['inputContainer']['style']['zIndex'] = 0x186a0, eaop['container']['appendChild'](_vm['inputContainer']), _vm['inputContainer']['setPos'] = function (gj3$ix, n39usq) {
                _vm['inputContainer']['style']['left'] = gj3$ix + 'px', _vm['inputContainer']['style']['top'] = n39usq + 'px';
            }, ns3q9['stage']['on']('resize', null, i3xg$j['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (_maco) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), xltrg['_soundClass'] = qsk9un, xltrg['_musicClass'] = qsk9un, window['_videoClass'] = d50k6;
        }, i3xg$j['_onStageResize'] = function () {
            var $txl = ns3q9['stage']['_canvasTransform']['identity']();
            $txl['scale'](eaop['width'] / nsujq['canvas']['width'] / nj3i['getPixelRatio'](), eaop['height'] / nsujq['canvas']['height'] / nj3i['getPixelRatio']());
        }, i3xg$j['wxinputFocus'] = function (d15w82) {
            var db685 = _vm['inputElement']['target'];
            if (db685 && !db685['editable']) return;
            nq9ks['window']['wx']['offKeyboardConfirm'](), nq9ks['window']['wx']['offKeyboardInput'](), nq9ks['window']['wx']['showKeyboard']({
                'defaultValue': db685['text'],
                'maxLength': db685['maxChars'],
                'multiple': db685['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (g$txj) {},
                'fail': function (b0d5k) {}
            }), nq9ks['window']['wx']['onKeyboardConfirm'](function (uqkn) {
                var moeap = uqkn ? uqkn['value'] : '';
                db685['text'] = moeap, db685['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), nq9ks['window']['wx']['onKeyboardInput'](function (j$itgx) {
                var d806b5 = j$itgx ? j$itgx['value'] : '';
                if (!db685['multiline']) {
                    if (d806b5['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                db685['text'] = d806b5, db685['event']('input');
            });
        }, i3xg$j['inputEnter'] = function () {
            _vm['inputElement']['target']['focus'] = ![];
        }, i3xg$j['wxinputblur'] = function () {
            i3xg$j['hideKeyboard']();
        }, i3xg$j['hideKeyboard'] = function () {
            nq9ks['window']['wx']['offKeyboardConfirm'](), nq9ks['window']['wx']['offKeyboardInput'](), nq9ks['window']['wx']['hideKeyboard']({
                'success': function (tylrzh) {
                    console['log']('隐藏键盘');
                },
                'fail': function (b0k69s) {
                    console['log']('隐藏键盘出错:' + (b0k69s ? b0k69s['errMsg'] : ''));
                }
            });
        }, i3xg$j;
    }(),
        rzhylf = function () {
        function k0bd6() {}
        ryzvhf(k0bd6, 'laya.wx.mini.MiniLoader');
        var gxti$j = k0bd6['prototype'];
        return gxti$j['load'] = function (gthzlr, dw5281, k960, b650, bw5d8) {
            k960 === void 0x0 && (k960 = !![]), bw5d8 === void 0x0 && (bw5d8 = ![]);
            var vrz4yf = this;
            vrz4yf['_url'] = gthzlr;
            if (gthzlr['indexOf']('data:image') === 0x0) vrz4yf['_type'] = dw5281 = 'image';else vrz4yf['_type'] = dw5281 || (dw5281 = vrz4yf['getTypeFromUrl'](gthzlr));
            vrz4yf['_cache'] = k960, vrz4yf['_data'] = null;
            var igl$xt = 'ascii';
            if (gthzlr['indexOf']('.fnt') != -0x1) igl$xt = 'utf8';else dw5281 == 'arraybuffer' && (igl$xt = '');
            ;
            var ylhzf = j3qn['getFileExtension'](gthzlr);
            if (k0bd6['_fileTypeArr']['indexOf'](ylhzf) != -0x1) nq9ks['EnvConfig']['load']['call'](this, gthzlr, dw5281, k960, b650, bw5d8);else {
                if (!pma7c['getFileInfo'](gthzlr)) {
                    if (gthzlr['indexOf']('layaNativeDir/') != -0x1) {
                        if (nq9ks['isZiYu']) {
                            var ecpoam = pma7c['ziyuFileData'][gthzlr];
                            vrz4yf['onLoaded'](ecpoam);
                            return;
                        } else {
                            cosnole['log']('read read'), pma7c['read'](gthzlr, igl$xt, new d12w85(k0bd6, k0bd6['onReadNativeCallBack'], [igl$xt, gthzlr, dw5281, k960, b650, bw5d8, vrz4yf]));
                            return;
                        }
                    }
                    if (jg$tix['rootPath'] == '') var frv = gthzlr;else frv = gthzlr['split'](jg$tix['rootPath'])[0x0];
                    gthzlr['indexOf']('http://') != -0x1 || gthzlr['indexOf']('https://') != -0x1 ? nq9ks['EnvConfig']['load']['call'](vrz4yf, gthzlr, dw5281, k960, b650, bw5d8) : pma7c['readFile'](frv, igl$xt, new d12w85(k0bd6, k0bd6['onReadNativeCallBack'], [igl$xt, gthzlr, dw5281, k960, b650, bw5d8, vrz4yf]), gthzlr);
                } else nq9ks['EnvConfig']['load']['call'](this, gthzlr, dw5281, k960, b650, bw5d8);
            }
        }, gxti$j['resMgrLoad'] = function (dw258, a4fv7, _7ocma, jquin3, flzhy, d281w, x$gthl) {
            _7ocma === void 0x0 && (_7ocma = 0x0), jquin3 === void 0x0 && (jquin3 = ![]), flzhy === void 0x0 && (flzhy = ![]), d281w === void 0x0 && (d281w = 0x0), x$gthl === void 0x0 && (x$gthl = 0x3), dw258['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', dw258), nq9ks['EnvConfig']['resMgrLoad'](dw258, (db680, zvr4f, c47am_) => {
                k0bd6['prototype']['resMgrLoadCallBack'](db680, zvr4f, c47am_, a4fv7);
            }, _7ocma, jquin3, flzhy, d281w, x$gthl);
        }, gxti$j['resMgrLoadCallBack'] = function (rz4fvy, us6b9, jxg3$, m7caop) {
            console['log']('buff:::', rz4fvy, jxg3$, pma7c['fileNativeDir'] + '///' + pma7c['fileListName']), m7caop(rz4fvy, us6b9, jxg3$);
        }, gxti$j['clearRes'] = function (u3nijq, fy4zr) {
            fy4zr === void 0x0 && (fy4zr = ![]);
            var xl$gi = this;
            xl$gi['clearRes'](u3nijq, fy4zr);
            var b5dk60 = pma7c['getFileInfo'](u3nijq);
            if (b5dk60 && (u3nijq['indexOf']('http://') != -0x1 || u3nijq['indexOf']('https://') != -0x1)) {
                var cm_ao7 = b5dk60['md5'],
                    d82w5 = pma7c['getFileNativePath'](cm_ao7);
                pma7c['remove'](d82w5);
            }
        }, k0bd6['onReadNativeCallBack'] = function (glixt$, $tj, ji$3gx, qinj, r4yzfv, c7ampo, u9sqn3, hryltz, ac_m7o) {
            qinj === void 0x0 && (qinj = !![]), c7ampo === void 0x0 && (c7ampo = ![]), hryltz === void 0x0 && (hryltz = 0x0);
            if (!hryltz) {
                var d1w2;
                if (ji$3gx == 'json' || ji$3gx == 'atlas') d1w2 = nq9ks['getJson'](ac_m7o['data']);else ji$3gx == 'xml' ? d1w2 = j3qn['parseXMLFromString'](ac_m7o['data']) : d1w2 = ac_m7o['data'];
                u9sqn3['onLoaded'](d1w2), !nq9ks['isZiYu'] && nq9ks['isPosMsgYu'] && ji$3gx != 'arraybuffer' && wx['postMessage']({
                    'url': $tj,
                    'data': d1w2,
                    'isLoad': !![]
                });
            } else hryltz == 0x1 && nq9ks['EnvConfig']['load']['call'](u9sqn3, $tj, ji$3gx, qinj, r4yzfv, c7ampo);
        }, c_ma7(k0bd6, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), k0bd6;
    }(),
        pma7c = function (yrzl) {
        function apmce() {
            apmce['__super']['call'](this);
            ;
        }
        return ryzvhf(apmce, 'laya.wx.mini.MiniFileMgr', yrzl), apmce['isLoadFile'] = function (vfz) {
            return apmce['_fileTypeArr']['indexOf'](vfz) != -0x1 ? !![] : ![];
        }, apmce['getFileInfo'] = function (jgix$3) {
            var db06k9 = jgix$3['split']('?')[0x0],
                xg$th = apmce['filesListObj'][db06k9];
            if (xg$th == null) return null;else return xg$th;
            return null;
        }, apmce['onFileUpdate'] = function (uqs9n3, zlhtgr) {
            var jix$3q = uqs9n3['split']('/'),
                tg$ji = jix$3q[jix$3q['length'] - 0x1],
                s96ubk = apmce['getFileInfo'](zlhtgr);
            if (s96ubk == null) apmce['onSaveFile'](zlhtgr, tg$ji);else {
                if (s96ubk['readyUrl'] != zlhtgr) apmce['remove'](tg$ji, zlhtgr);
            }
        }, apmce['exits'] = function (bw85, wd81) {
            var lxtg$h = apmce['getFileNativePath'](bw85);
            apmce['fs']['getFileInfo']({
                'filePath': lxtg$h,
                'success': function (yrlzth) {
                    wd81 != null && wd81['runWith']([0x0, yrlzth]);
                },
                'fail': function (ji3$) {
                    wd81 != null && wd81['runWith']([0x1, ji3$]);
                }
            });
        }, apmce['read'] = function (n9su3, mpaeco, lhtyzr, li$tx) {
            mpaeco === void 0x0 && (mpaeco = 'ascill'), li$tx === void 0x0 && (li$tx = '');
            var coap;
            li$tx != '' ? coap = apmce['getFileNativePath'](n9su3) : coap = n9su3, apmce['fs']['readFile']({
                'filePath': coap,
                'encoding': mpaeco,
                'success': function (qs9k) {
                    lhtyzr != null && lhtyzr['runWith']([0x0, qs9k]);
                },
                'fail': function (s93qnu) {
                    if (s93qnu && li$tx != '') apmce['down'](li$tx, mpaeco, lhtyzr, li$tx);else lhtyzr != null && lhtyzr['runWith']([0x1]);
                }
            });
        }, apmce['readNativeFile'] = function (txlhg$, jiqn) {
            apmce['fs']['readFile']({
                'filePath': txlhg$,
                'encoding': '',
                'success': function (k90sb6) {
                    jiqn != null && jiqn['runWith']([0x0]);
                },
                'fail': function (gzlhtr) {
                    jiqn != null && jiqn['runWith']([0x1]);
                }
            });
        }, apmce['down'] = function (rfzhl, _7av4f, qj3i$n, qnusj) {
            _7av4f === void 0x0 && (_7av4f = 'ascill'), qnusj === void 0x0 && (qnusj = '');
            var nks9uq = apmce['getFileNativePath'](qnusj),
                vrhfy = apmce['wxdown']({
                'url': rfzhl,
                'filePath': nks9uq,
                'success': function (wdb580) {
                    if (wdb580['statusCode'] === 0xc8) apmce['readFile'](wdb580['filePath'], _7av4f, qj3i$n, qnusj);
                },
                'fail': function (tlyzr) {
                    qj3i$n != null && qj3i$n['runWith']([0x1, tlyzr]);
                }
            });
            vrhfy['onProgressUpdate'](function (d5w) {
                qj3i$n != null && qj3i$n['runWith']([0x2, d5w['progress']]);
            });
        }, apmce['readFile'] = function (a74_vm, lgx$h, d805w2, nq$ji) {
            lgx$h === void 0x0 && (lgx$h = 'ascill'), nq$ji === void 0x0 && (nq$ji = ''), apmce['fs']['readFile']({
                'filePath': a74_vm,
                'encoding': lgx$h,
                'success': function (sb9ku) {
                    if (a74_vm['indexOf']('http://') != -0x1 || a74_vm['indexOf']('https://') != -0x1) apmce['onFileUpdate'](a74_vm, nq$ji);
                    d805w2 != null && d805w2['runWith']([0x0, sb9ku]);
                },
                'fail': function (lgrxht) {
                    if (lgrxht) d805w2 != null && d805w2['runWith']([0x1, lgrxht]);
                }
            });
        }, apmce['downImg'] = function ($qx3i, _fvzy4, y7f4_v) {
            y7f4_v === void 0x0 && (y7f4_v = '');
            var vhz = apmce['wxdown']({
                'url': $qx3i,
                'success': function (rvfy) {
                    rvfy['statusCode'] === 0xc8 && apmce['copyFile'](rvfy['tempFilePath'], y7f4_v, _fvzy4);
                },
                'fail': function (inq$3j) {
                    _fvzy4 != null && _fvzy4['runWith']([0x1, inq$3j]);
                }
            });
        }, apmce['copyFile'] = function (m4_7, knsu9, cpaeom) {
            var mpec = m4_7['split']('/'),
                u9skb6 = mpec[mpec['length'] - 0x1],
                rhlfz = knsu9['split']('?')[0x0],
                $3gxij = apmce['getFileInfo'](knsu9),
                zhvf = apmce['getFileNativePath'](u9skb6);
            apmce['fs']['copyFile']({
                'srcPath': m4_7,
                'destPath': zhvf,
                'success': function (va_47) {
                    if (!$3gxij) apmce['onSaveFile'](knsu9, u9skb6), cpaeom != null && cpaeom['runWith']([0x0]);else {
                        if ($3gxij['readyUrl'] != knsu9) apmce['remove'](u9skb6, knsu9, cpaeom);
                    }
                },
                'fail': function (ghxtl$) {
                    cpaeom != null && cpaeom['runWith']([0x1, ghxtl$]);
                }
            });
        }, apmce['getFileNativePath'] = function (nqi3$j) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + nqi3$j;
        }, apmce['remove'] = function (gij$x3, igltx, ao7_cm) {
            igltx === void 0x0 && (igltx = '');
            var d5b60k = apmce['getFileInfo'](igltx),
                c_a47m = apmce['getFileNativePath'](d5b60k['md5']);
            ns3q9['loader']['clearRes'](d5b60k['readyUrl']), apmce['fs']['unlink']({
                'filePath': c_a47m,
                'success': function (p7aco) {
                    if (igltx != '') apmce['onSaveFile'](igltx, gij$x3);
                    ao7_cm != null && ao7_cm['runWith']([0x0]);
                },
                'fail': function (tyzrh) {}
            });
        }, apmce['onSaveFile'] = function (sq3ujn, snu3jq) {
            var cm_74a = sq3ujn['split']('?')[0x0];
            apmce['filesListObj'][cm_74a] = {
                'md5': snu3jq,
                'readyUrl': sq3ujn
            }, apmce['fs']['writeFile']({
                'filePath': apmce['fileNativeDir'] + '/' + apmce['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](apmce['filesListObj']),
                'success': function (snqu3j) {
                    console['log']('写入测试测试成功：', snqu3j);
                },
                'fail': function (v4f7_y) {
                    console['log']('写入测试测试失败：', v4f7_y);
                }
            });
        }, apmce['existDir'] = function (_vzf4, ixt) {
            apmce['fs']['mkdir']({
                'dirPath': _vzf4,
                'success': function (eaopcm) {
                    ixt != null && ixt['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (m_7v) {
                    if (m_7v['errMsg']['indexOf']('file already exists') != -0x1) apmce['readSync'](apmce['fileListName'], 'utf8', ixt);else ixt != null && ixt['runWith']([0x1, m_7v]);
                }
            });
        }, apmce['readSync'] = function (htyrzl, u3q9sn, ilgx, k9u) {
            u3q9sn === void 0x0 && (u3q9sn = 'ascill'), k9u === void 0x0 && (k9u = '');
            var d960k = apmce['getFileNativePath'](htyrzl),
                cmoa_7;
            try {
                cmoa_7 = apmce['fs']['readFileSync'](d960k), ilgx != null && ilgx['runWith']([0x0, { 'data': cmoa_7 }]);
            } catch (lrhz) {
                ilgx != null && ilgx['runWith']([0x1]);
            }
        }, apmce['readCache'] = function () {}, apmce['writeCache'] = function (x$j3gi) {
            var kns9 = readyUrl['split']('?')[0x0];
            apmce['filesListObj'][kns9] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, apmce['fs']['writeFile']({
                'filePath': apmce['fileNativeDir'] + '/' + apmce['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](apmce['filesListObj']),
                'success': function (frzhvy) {},
                'fail': function (us9bk) {}
            });
        }, apmce['setNativeFileDir'] = function (q3u9ns) {
            apmce['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + q3u9ns;
        }, apmce['filesListObj'] = {}, apmce['fileNativeDir'] = null, apmce['fileListName'] = 'layaairfiles.txt', apmce['ziyuFileData'] = {}, c_ma7(apmce, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), apmce;
    }(rfyvzh),
        qsk9un = function (b9us6k) {
        function rlghxt() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], rlghxt['__super']['call'](this), this['_sound'] = rlghxt['_createSound'](), this['_chanell'] = new ig3$jx(this['_sound']);
        }
        ryzvhf(rlghxt, 'laya.wx.mini.MiniSound', b9us6k);
        var rhgtzl = rlghxt['prototype'];
        return rhgtzl['load'] = function (d65bk0) {
            var x$thg = this;
            d65bk0 = jg$tix['formatURL'](d65bk0), this['url'] = d65bk0;
            if (rlghxt['_audioCache'][d65bk0]) {
                this['event']('complete');
                return;
            }
            function kb96us() {
                if (rlghxt['_null'] != undefined) x$thg['_sound']['onCanplay'](rlghxt['_null']), x$thg['_sound']['onError'](rlghxt['_null']);else try {
                    x$thg['_sound']['onCanplay'](null), x$thg['_sound']['onError'](null), rlghxt['_null'] = null;
                } catch (wd215) {
                    console['warn']('[wxmini] _clearSound:' + wd215), x$thg['_sound']['onCanplay'](flrhzy), x$thg['_sound']['onError'](flrhzy), rlghxt['_null'] = flrhzy;
                }
            }
            function _camo() {
                v_4fy['loaded'] = !![], v_4fy['event']('complete'), rlghxt['_audioCache'][v_4fy['url']] = v_4fy;
            }
            function y47v(u3jqni) {
                console['error']('errCode=' + u3jqni['errCode'] + '  errMsg=' + u3jqni['errMsg']), v_4fy['event']('error');
            }
            function flrhzy() {}
            this['_sound']['onCanplay'](_camo), this['_sound']['onError'](y47v), this['_sound']['src'] = d65bk0;
            var v_4fy = this;
        }, rhgtzl['play'] = function (vf4rz, $hlxtg) {
            vf4rz === void 0x0 && (vf4rz = 0x0), $hlxtg === void 0x0 && ($hlxtg = 0x0);
            var hylrzt, itjx;
            if (this['url'] == xltrg['_tMusic']) {
                if (!rlghxt['_musicAudio']) rlghxt['_musicAudio'] = this['_sound'];
                hylrzt = rlghxt['_musicAudio'], itjx = this['_chanell'];
            } else hylrzt = this['_sound'], itjx = this['_chanell'];
            return hylrzt['src'] = this['url'], hylrzt['startTime'] = 0x0, itjx['isStopped'] && (itjx['url'] = this['url'], itjx['loops'] = $hlxtg, itjx['startTime'] = vf4rz, itjx['play'](), xltrg['addChannel'](itjx)), itjx;
        }, rhgtzl['dispose'] = function () {
            var d6b09k = rlghxt['_audioCache'][this['url']];
            d6b09k && (d6b09k['src'] = '', delete rlghxt['_audioCache'][this['url']]);
        }, _cam4(0x0, rhgtzl, 'duration', function () {
            return this['_sound']['duration'];
        }), rlghxt['_createSound'] = function () {
            rlghxt['_id']++;
            var l$gitx = nq9ks['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return l$gitx;
        }, rlghxt['_musicAudio'] = null, rlghxt['_id'] = 0x0, rlghxt['_audioCache'] = {}, rlghxt['_null'] = undefined, rlghxt;
    }(rfyvzh),
        ig3$jx = function (hfyvzr) {
        function ksu9n6(lyfrhz) {
            this['_audio'] = null, this['_onEnd'] = null, ksu9n6['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = lyfrhz, this['_onEnd'] = j3qn['bind'](this['__onEnd'], this), lyfrhz['onEnded'](this['_onEnd']);
        }
        ryzvhf(ksu9n6, 'laya.wx.mini.MiniSoundChannel', hfyvzr);
        var nsuq3 = ksu9n6['prototype'];
        return nsuq3['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (ns3q9['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, nsuq3['__onNull'] = function () {}, nsuq3['play'] = function () {
            this['isStopped'] = ![], xltrg['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, nsuq3['stop'] = function () {
            this['isStopped'] = !![], xltrg['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, nsuq3['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, nsuq3['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], xltrg['addChannel'](this), this['_audio']['play']();
        }, _cam4(0x0, nsuq3, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), _cam4(0x0, nsuq3, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), _cam4(0x0, nsuq3, 'volume', function () {
            return 0x1;
        }, function (fhyzl) {}), ksu9n6['_null'] = undefined, ksu9n6;
    }(sq9unk),
        d50k6 = function () {
        function mocape() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = nq9ks['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        ryzvhf(mocape, 'laya.wx.mini.MiniVideo');
        var tg$lxh = mocape['prototype'];
        return tg$lxh['on'] = function (usk69b, ma7cp, op7cam) {
            if (usk69b == 'loadedmetadata') this['onPlayFunc'] = op7cam['bind'](ma7cp), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else usk69b == 'ended' && (this['onEndedFunC'] = op7cam['bind'](ma7cp), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, tg$lxh['onTimeUpdateFunc'] = function (fz_4v) {
            this['position'] = fz_4v['position'], this['_duration'] = fz_4v['duration'];
        }, tg$lxh['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, tg$lxh['onended'] = function (q$jin3, ub69sk) {
            this['onEndedFunC'] = ub69sk['bind'](q$jin3), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, tg$lxh['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, tg$lxh['off'] = function (qujs3n, d21, gilxt$) {
            if (qujs3n == 'loadedmetadata') this['onPlayFunc'] = gilxt$['bind'](d21), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else qujs3n == 'ended' && (this['onEndedFunC'] = gilxt$['bind'](d21), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, tg$lxh['load'] = function (hyrt) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = hyrt;
        }, tg$lxh['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, tg$lxh['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, tg$lxh['size'] = function (b06sk9, vzhrfy) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = b06sk9, this['videoElement']['height'] = vzhrfy;
        }, tg$lxh['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, tg$lxh['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, _cam4(0x0, tg$lxh, 'duration', function () {
            return this['_duration'];
        }), _cam4(0x0, tg$lxh, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (z4rvf) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = z4rvf;
        }), _cam4(0x0, tg$lxh, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), _cam4(0x0, tg$lxh, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), _cam4(0x0, tg$lxh, 'ended', function () {
            return this['videoend'];
        }), _cam4(0x0, tg$lxh, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (qi$n3) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = qi$n3;
        }), _cam4(0x0, tg$lxh, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (r4yfzv) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = r4yfzv;
        }), _cam4(0x0, tg$lxh, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (ji3x$) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = ji3x$;
        }), _cam4(0x0, tg$lxh, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), _cam4(0x0, tg$lxh, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (acm7op) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = acm7op;
        }), _cam4(0x0, tg$lxh, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (un3sjq) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = un3sjq;
        }), _cam4(0x0, tg$lxh, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), _cam4(0x0, tg$lxh, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (vfrzhy) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = vfrzhy;
        }), _cam4(0x0, tg$lxh, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (u9skn) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = u9skn;
        }), _cam4(0x0, tg$lxh, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (hrflzy) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = hrflzy;
        }), mocape;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var b6su in Laya) {
        var k6un9s = Laya[b6su];
        k6un9s && k6un9s['__isclass'] && (exports[b6su] = k6un9s);
    }
});