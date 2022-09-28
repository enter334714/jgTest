var J = wx.h$;
(function (window, document, w2p9) {
    var yo7jv = w2p9['un'],
        k8dc = w2p9['uns'],
        qbkg05 = w2p9['static'],
        t_zhep = w2p9['class'],
        bko5q0 = w2p9['getset'],
        jv7roy = w2p9['__newvec'],
        zeht8 = laya['utils']['Browser'],
        orvy5 = laya['events']['Event'],
        ryjo = laya['events']['EventDispatcher'],
        kb0dgq = laya['resource']['HTMLImage'],
        j5ovr = laya['utils']['Handler'],
        v5yjor = laya['display']['Input'],
        kbdgq = laya['net']['Loader'],
        o0bqy5 = laya['maths']['Matrix'],
        we9_2 = laya['renders']['Render'],
        rv7xj = laya['utils']['RunDriver'],
        y7jvxr = laya['media']['Sound'],
        jvxn = laya['media']['SoundChannel'],
        x7i1nj = laya['media']['SoundManager'],
        kd6c = laya['display']['Stage'],
        thcze = laya['net']['URL'],
        epz2_w = laya['utils']['Utils'],
        d6 = function () {
        function ze_pt() {}
        return t_zhep(ze_pt, 'laya.wx.mini.MiniAdpter'), ze_pt['getJson'] = function (ul43) {
            return JSON['parse'](ul43);
        }, ze_pt['init'] = function (ewpz, w_2$9) {
            ewpz === void 0x0 && (ewpz = ![]), w_2$9 === void 0x0 && (w_2$9 = ![]);
            if (ze_pt['_inited']) return;
            ze_pt['window'] = window;
            if (ze_pt['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            ze_pt['_inited'] = !![], ze_pt['isZiYu'] = w_2$9, ze_pt['isPosMsgYu'] = ewpz, ze_pt['EnvConfig'] = {}, !ze_pt['isZiYu'] && (kgqb05['setNativeFileDir']('/layaairGame'), kgqb05['existDir'](kgqb05['fileNativeDir'], j5ovr['create'](ze_pt, ze_pt['onMkdirCallBack']))), ze_pt['window']['focus'] = function () {}, w2p9['getUrlPath'] = function () {}, ze_pt['window']['logtime'] = function (u4mla3) {}, ze_pt['window']['alertTimeLog'] = function (ws92) {}, ze_pt['window']['resetShareInfo'] = function () {}, ze_pt['window']['CanvasRenderingContext2D'] = function () {}, ze_pt['window']['CanvasRenderingContext2D']['prototype'] = ze_pt['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], ze_pt['window']['document']['body']['appendChild'] = function () {}, ze_pt['EnvConfig']['pixelRatioInt'] = 0x0, rv7xj['getPixelRatio'] = ze_pt['pixelRatio'], ze_pt['_preCreateElement'] = zeht8['createElement'], zeht8['createElement'] = ze_pt['createElement'], rv7xj['createShaderCondition'] = ze_pt['createShaderCondition'], epz2_w['parseXMLFromString'] = ze_pt['parseXMLFromString'], v5yjor['_createInputElement'] = _29$wf['_createInputElement'], ze_pt['EnvConfig']['load'] = kbdgq['prototype']['load'], kbdgq['prototype']['load'] = kg08['prototype']['load'], ze_pt['isZiYu'] && ewpz && wx['onMessage'](function (ro5qvy) {
                ro5qvy['isLoad'] && (kgqb05['ziyuFileData'][ro5qvy['url']] = ro5qvy['data']);
            });
        }, ze_pt['onMkdirCallBack'] = function (jy7r, hzt) {
            if (!jy7r) kgqb05['filesListObj'] = JSON['parse'](hzt['data']);
        }, ze_pt['pixelRatio'] = function () {
            if (!ze_pt['EnvConfig']['pixelRatioInt']) try {
                var y5vroj = wx['getSystemInfoSync']();
                return ze_pt['EnvConfig']['pixelRatioInt'] = y5vroj['pixelRatio'], y5vroj = y5vroj, y5vroj['pixelRatio'];
            } catch (g06bdk) {}
            return ze_pt['EnvConfig']['pixelRatioInt'];
        }, ze_pt['createElement'] = function (_hetp) {
            if (_hetp == 'canvas') {
                var tc86hd;
                return ze_pt['idx'] == 0x1 ? ze_pt['isZiYu'] ? (tc86hd = sharedCanvas, tc86hd['style'] = {}) : tc86hd = window['canvas'] : tc86hd = window['wx']['createCanvas'](), ze_pt['idx']++, tc86hd;
            } else {
                if (_hetp == 'textarea' || _hetp == 'input') return ze_pt['onCreateInput'](_hetp);else {
                    if (_hetp == 'div') {
                        var v7xrjy = ze_pt['_preCreateElement'](_hetp);
                        return v7xrjy['contains'] = function (qkdbg0) {
                            return null;
                        }, v7xrjy['removeChild'] = function (kqg50) {}, v7xrjy;
                    } else return ze_pt['_preCreateElement'](_hetp);
                }
            }
        }, ze_pt['onCreateInput'] = function (xij7rv) {
            var la4u1 = ze_pt['_preCreateElement'](xij7rv);
            return la4u1['focus'] = _29$wf['wxinputFocus'], la4u1['blur'] = _29$wf['wxinputblur'], la4u1['style'] = {}, la4u1['value'] = 0x0, la4u1['parentElement'] = {}, la4u1['placeholder'] = {}, la4u1['type'] = {}, la4u1['setColor'] = function (_p2zwe) {}, la4u1['setType'] = function ($2_f9w) {}, la4u1['setFontFace'] = function (boq) {}, la4u1['addEventListener'] = function (c8tz6) {}, la4u1['contains'] = function (n34x) {
                return null;
            }, la4u1['removeChild'] = function (dk8g) {}, la4u1;
        }, ze_pt['createShaderCondition'] = function (o5qrby) {
            var w2f$9 = this,
                ehz_pt = function () {
                var zth8ec = o5qrby;
                return w2f$9[o5qrby['replace']('this.', '')];
            };
            return ehz_pt;
        }, ze_pt['EnvConfig'] = null, ze_pt['window'] = null, ze_pt['_preCreateElement'] = null, ze_pt['_inited'] = ![], ze_pt['wxRequest'] = null, ze_pt['systemInfo'] = null, ze_pt['version'] = '0.0.1', ze_pt['isZiYu'] = ![], ze_pt['isPosMsgYu'] = ![], ze_pt['parseXMLFromString'] = function (obq5y) {
            var hze8c, by5qro;
            obq5y = obq5y['replace'](/>\s+</g, '><');
            try {
                hze8c = new window['Parser']['DOMParser']()['parseFromString'](obq5y, 'text/xml');
            } catch (htcepz) {
                throw '需要引入xml解析库文件';
            }
            return hze8c;
        }, ze_pt['idx'] = 0x1, ze_pt;
    }(),
        jrxvi = function () {
        function bo5k0q() {}
        t_zhep(bo5k0q, 'laya.wx.mini.MiniImage');
        var dk86 = bo5k0q['prototype'];
        return dk86['_loadImage'] = function (bk0dqg) {
            var koq = this,
                bqk50 = ![];
            bk0dqg['indexOf']('layaNativeDir/') == -0x1 && (bqk50 = !![], bk0dqg = thcze['formatURL'](bk0dqg));
            if (!kgqb05['getFileInfo'](bk0dqg)) {
                if (bk0dqg['indexOf']('http://') != -0x1 || bk0dqg['indexOf']('https://') != -0x1) kgqb05['downImg'](bk0dqg, new j5ovr(bo5k0q, bo5k0q['onDownImgCallBack'], [bk0dqg, koq]), bk0dqg);else bo5k0q['onCreateImage'](bk0dqg, koq, !![]);
            } else bo5k0q['onCreateImage'](bk0dqg, koq, !bqk50);
        }, bo5k0q['onDownImgCallBack'] = function (e2zp, dk86g, m43la) {
            if (!m43la) bo5k0q['onCreateImage'](e2zp, dk86g);else dk86g['onError'](null);
        }, bo5k0q['onCreateImage'] = function (ehct8z, ecpt, n1xi4) {
            n1xi4 === void 0x0 && (n1xi4 = ![]);
            var rijv7;
            if (!n1xi4) {
                var ztpche = kgqb05['getFileInfo'](ehct8z),
                    o5qyrb = ztpche['md5'];
                rijv7 = kgqb05['getFileNativePath'](o5qyrb);
            } else rijv7 = ehct8z;
            if (ecpt['imgCache'] == null) ecpt['imgCache'] = {};
            var vx7ijn;
            function inu3() {
                vx7ijn['onload'] = null, vx7ijn['onerror'] = null, delete ecpt['imgCache'][ehct8z];
            }
            ;
            var jx7n1 = function () {
                inu3(), ecpt['onLoaded'](vx7ijn);
            },
                l34u1a = function () {
                inu3(), ecpt['event']('error', 'Load image failed');
            };
            ecpt['_type'] == 'nativeimage' ? (vx7ijn = new zeht8['window']['Image'](), vx7ijn['crossOrigin'] = '', vx7ijn['onload'] = jx7n1, vx7ijn['onerror'] = l34u1a, vx7ijn['src'] = rijv7, ecpt['imgCache'][ehct8z] = vx7ijn) : new kb0dgq['create'](rijv7, {
                'onload': jx7n1,
                'onerror': l34u1a,
                'onCreate': function (xi1j7) {
                    vx7ijn = xi1j7, ecpt['imgCache'][ehct8z] = xi1j7;
                }
            });
        }, bo5k0q;
    }(),
        _29$wf = function () {
        function eczt() {}
        return t_zhep(eczt, 'laya.wx.mini.MiniInput'), eczt['_createInputElement'] = function () {
            v5yjor['_initInput'](v5yjor['area'] = zeht8['createElement']('textarea')), v5yjor['_initInput'](v5yjor['input'] = zeht8['createElement']('input')), v5yjor['inputContainer'] = zeht8['createElement']('div'), v5yjor['inputContainer']['style']['position'] = 'absolute', v5yjor['inputContainer']['style']['zIndex'] = 0x186a0, zeht8['container']['appendChild'](v5yjor['inputContainer']), v5yjor['inputContainer']['setPos'] = function (yv5rjo, gkqd) {
                v5yjor['inputContainer']['style']['left'] = yv5rjo + 'px', v5yjor['inputContainer']['style']['top'] = gkqd + 'px';
            }, w2p9['stage']['on']('resize', null, eczt['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (jroy) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), x7i1nj['_soundClass'] = dgq, x7i1nj['_musicClass'] = dgq, window['_videoClass'] = t8he;
        }, eczt['_onStageResize'] = function () {
            var y05oq = w2p9['stage']['_canvasTransform']['identity']();
            y05oq['scale'](zeht8['width'] / we9_2['canvas']['width'] / rv7xj['getPixelRatio'](), zeht8['height'] / we9_2['canvas']['height'] / rv7xj['getPixelRatio']());
        }, eczt['wxinputFocus'] = function (gbkq) {
            var ji7vxn = v5yjor['inputElement']['target'];
            if (ji7vxn && !ji7vxn['editable']) return;
            d6['window']['wx']['offKeyboardConfirm'](), d6['window']['wx']['offKeyboardInput'](), d6['window']['wx']['showKeyboard']({
                'defaultValue': ji7vxn['text'],
                'maxLength': ji7vxn['maxChars'],
                'multiple': ji7vxn['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (kgqbd0) {},
                'fail': function (xjvy7) {}
            }), d6['window']['wx']['onKeyboardConfirm'](function (bgd06k) {
                var ybr5qo = bgd06k ? bgd06k['value'] : '';
                ji7vxn['text'] = ybr5qo, ji7vxn['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), d6['window']['wx']['onKeyboardInput'](function (peht_z) {
                var phzcet = peht_z ? peht_z['value'] : '';
                if (!ji7vxn['multiline']) {
                    if (phzcet['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                ji7vxn['text'] = phzcet, ji7vxn['event']('input');
            });
        }, eczt['inputEnter'] = function () {
            v5yjor['inputElement']['target']['focus'] = ![];
        }, eczt['wxinputblur'] = function () {
            eczt['hideKeyboard']();
        }, eczt['hideKeyboard'] = function () {
            d6['window']['wx']['offKeyboardConfirm'](), d6['window']['wx']['offKeyboardInput'](), d6['window']['wx']['hideKeyboard']({
                'success': function (q5bgk0) {
                    console['log']('隐藏键盘');
                },
                'fail': function (qvoyr) {
                    console['log']('隐藏键盘出错:' + (qvoyr ? qvoyr['errMsg'] : ''));
                }
            });
        }, eczt;
    }(),
        kg08 = function () {
        function etczp() {}
        t_zhep(etczp, 'laya.wx.mini.MiniLoader');
        var a413un = etczp['prototype'];
        return a413un['load'] = function (qoyb5r, _9f2wp, yr5qo, e2zph_, tzpe) {
            yr5qo === void 0x0 && (yr5qo = !![]), tzpe === void 0x0 && (tzpe = ![]);
            var tcdh8 = this;
            tcdh8['_url'] = qoyb5r;
            if (qoyb5r['indexOf']('data:image') === 0x0) tcdh8['_type'] = _9f2wp = 'image';else tcdh8['_type'] = _9f2wp || (_9f2wp = tcdh8['getTypeFromUrl'](qoyb5r));
            tcdh8['_cache'] = yr5qo, tcdh8['_data'] = null;
            var yrjxv7 = 'ascii';
            if (qoyb5r['indexOf']('.fnt') != -0x1) yrjxv7 = 'utf8';else _9f2wp == 'arraybuffer' && (yrjxv7 = '');
            ;
            var g6db0k = epz2_w['getFileExtension'](qoyb5r);
            if (etczp['_fileTypeArr']['indexOf'](g6db0k) != -0x1) d6['EnvConfig']['load']['call'](this, qoyb5r, _9f2wp, yr5qo, e2zph_, tzpe);else {
                if (!kgqb05['getFileInfo'](qoyb5r)) {
                    if (qoyb5r['indexOf']('layaNativeDir/') != -0x1) {
                        if (d6['isZiYu']) {
                            var k86dcg = kgqb05['ziyuFileData'][qoyb5r];
                            tcdh8['onLoaded'](k86dcg);
                            return;
                        } else {
                            cosnole['log']('read read'), kgqb05['read'](qoyb5r, yrjxv7, new j5ovr(etczp, etczp['onReadNativeCallBack'], [yrjxv7, qoyb5r, _9f2wp, yr5qo, e2zph_, tzpe, tcdh8]));
                            return;
                        }
                    }
                    if (thcze['rootPath'] == '') var ma3u4l = qoyb5r;else ma3u4l = qoyb5r['split'](thcze['rootPath'])[0x0];
                    qoyb5r['indexOf']('http://') != -0x1 || qoyb5r['indexOf']('https://') != -0x1 ? d6['EnvConfig']['load']['call'](tcdh8, qoyb5r, _9f2wp, yr5qo, e2zph_, tzpe) : kgqb05['readFile'](ma3u4l, yrjxv7, new j5ovr(etczp, etczp['onReadNativeCallBack'], [yrjxv7, qoyb5r, _9f2wp, yr5qo, e2zph_, tzpe, tcdh8]), qoyb5r);
                } else d6['EnvConfig']['load']['call'](this, qoyb5r, _9f2wp, yr5qo, e2zph_, tzpe);
            }
        }, a413un['resMgrLoad'] = function (yrojv, zh6tc, zhpe_t, ob5k0q, n4i71x, i13xn4, e2z_p) {
            zhpe_t === void 0x0 && (zhpe_t = 0x0), ob5k0q === void 0x0 && (ob5k0q = ![]), n4i71x === void 0x0 && (n4i71x = ![]), i13xn4 === void 0x0 && (i13xn4 = 0x0), e2z_p === void 0x0 && (e2z_p = 0x3), yrojv['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', yrojv), d6['EnvConfig']['resMgrLoad'](yrojv, (e_2hp, nx1i7, kd806g) => {
                etczp['prototype']['resMgrLoadCallBack'](e_2hp, nx1i7, kd806g, zh6tc);
            }, zhpe_t, ob5k0q, n4i71x, i13xn4, e2z_p);
        }, a413un['resMgrLoadCallBack'] = function (gcd68t, czte, ojyv7, u4la) {
            console['log']('buff:::', gcd68t, ojyv7, kgqb05['fileNativeDir'] + '///' + kgqb05['fileListName']), u4la(gcd68t, czte, ojyv7);
        }, a413un['clearRes'] = function (y7ro, bg5kq0) {
            bg5kq0 === void 0x0 && (bg5kq0 = ![]);
            var qkg0db = this;
            qkg0db['clearRes'](y7ro, bg5kq0);
            var htez_p = kgqb05['getFileInfo'](y7ro);
            if (htez_p && (y7ro['indexOf']('http://') != -0x1 || y7ro['indexOf']('https://') != -0x1)) {
                var n1i7jx = htez_p['md5'],
                    b0kg = kgqb05['getFileNativePath'](n1i7jx);
                kgqb05['remove'](b0kg);
            }
        }, etczp['onReadNativeCallBack'] = function (jn1i7x, al431, z8ch, bkdqg0, c68h, o0b5q, h_tez, au431, zp_2e) {
            bkdqg0 === void 0x0 && (bkdqg0 = !![]), o0b5q === void 0x0 && (o0b5q = ![]), au431 === void 0x0 && (au431 = 0x0);
            if (!au431) {
                var jx7vyr;
                if (z8ch == 'json' || z8ch == 'atlas') jx7vyr = d6['getJson'](zp_2e['data']);else z8ch == 'xml' ? jx7vyr = epz2_w['parseXMLFromString'](zp_2e['data']) : jx7vyr = zp_2e['data'];
                h_tez['onLoaded'](jx7vyr), !d6['isZiYu'] && d6['isPosMsgYu'] && z8ch != 'arraybuffer' && wx['postMessage']({
                    'url': al431,
                    'data': jx7vyr,
                    'isLoad': !![]
                });
            } else au431 == 0x1 && d6['EnvConfig']['load']['call'](h_tez, al431, z8ch, bkdqg0, c68h, o0b5q);
        }, qbkg05(etczp, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), etczp;
    }(),
        kgqb05 = function (rjivx7) {
        function ijvr7() {
            ijvr7['__super']['call'](this);
            ;
        }
        return t_zhep(ijvr7, 'laya.wx.mini.MiniFileMgr', rjivx7), ijvr7['isLoadFile'] = function (xjy7) {
            return ijvr7['_fileTypeArr']['indexOf'](xjy7) != -0x1 ? !![] : ![];
        }, ijvr7['getFileInfo'] = function (jx17in) {
            var $wsf9 = jx17in['split']('?')[0x0],
                jxin7v = ijvr7['filesListObj'][$wsf9];
            if (jxin7v == null) return null;else return jxin7v;
            return null;
        }, ijvr7['onFileUpdate'] = function (dgqk, nu4i) {
            var pwz2e_ = dgqk['split']('/'),
                xirj = pwz2e_[pwz2e_['length'] - 0x1],
                epw9 = ijvr7['getFileInfo'](nu4i);
            if (epw9 == null) ijvr7['onSaveFile'](nu4i, xirj);else {
                if (epw9['readyUrl'] != nu4i) ijvr7['remove'](xirj, nu4i);
            }
        }, ijvr7['exits'] = function (_9w$f2, yv7xrj) {
            var zw_p2e = ijvr7['getFileNativePath'](_9w$f2);
            ijvr7['fs']['getFileInfo']({
                'filePath': zw_p2e,
                'success': function (vyor5q) {
                    yv7xrj != null && yv7xrj['runWith']([0x0, vyor5q]);
                },
                'fail': function (dc6t8) {
                    yv7xrj != null && yv7xrj['runWith']([0x1, dc6t8]);
                }
            });
        }, ijvr7['read'] = function (ctg68, ht, u4lma, _zpeh2) {
            ht === void 0x0 && (ht = 'ascill'), _zpeh2 === void 0x0 && (_zpeh2 = '');
            var _f2p9;
            _zpeh2 != '' ? _f2p9 = ijvr7['getFileNativePath'](ctg68) : _f2p9 = ctg68, ijvr7['fs']['readFile']({
                'filePath': _f2p9,
                'encoding': ht,
                'success': function (k6g0bd) {
                    u4lma != null && u4lma['runWith']([0x0, k6g0bd]);
                },
                'fail': function (bkg60) {
                    if (bkg60 && _zpeh2 != '') ijvr7['down'](_zpeh2, ht, u4lma, _zpeh2);else u4lma != null && u4lma['runWith']([0x1]);
                }
            });
        }, ijvr7['readNativeFile'] = function (d68tc, obyq5) {
            ijvr7['fs']['readFile']({
                'filePath': d68tc,
                'encoding': '',
                'success': function (ze_2wp) {
                    obyq5 != null && obyq5['runWith']([0x0]);
                },
                'fail': function (ixn47) {
                    obyq5 != null && obyq5['runWith']([0x1]);
                }
            });
        }, ijvr7['down'] = function (n1ua34, k60g, $w29fs, ryvjx7) {
            k60g === void 0x0 && (k60g = 'ascill'), ryvjx7 === void 0x0 && (ryvjx7 = '');
            var p_eht = ijvr7['getFileNativePath'](ryvjx7),
                h8zcet = ijvr7['wxdown']({
                'url': n1ua34,
                'filePath': p_eht,
                'success': function (tz8ec) {
                    if (tz8ec['statusCode'] === 0xc8) ijvr7['readFile'](tz8ec['filePath'], k60g, $w29fs, ryvjx7);
                },
                'fail': function (hctpe) {
                    $w29fs != null && $w29fs['runWith']([0x1, hctpe]);
                }
            });
            h8zcet['onProgressUpdate'](function (g86dc) {
                $w29fs != null && $w29fs['runWith']([0x2, g86dc['progress']]);
            });
        }, ijvr7['readFile'] = function (_wf2p9, cz86, zhect8, p92_ew) {
            cz86 === void 0x0 && (cz86 = 'ascill'), p92_ew === void 0x0 && (p92_ew = ''), ijvr7['fs']['readFile']({
                'filePath': _wf2p9,
                'encoding': cz86,
                'success': function (e_) {
                    if (_wf2p9['indexOf']('http://') != -0x1 || _wf2p9['indexOf']('https://') != -0x1) ijvr7['onFileUpdate'](_wf2p9, p92_ew);
                    zhect8 != null && zhect8['runWith']([0x0, e_]);
                },
                'fail': function (ethcp) {
                    if (ethcp) zhect8 != null && zhect8['runWith']([0x1, ethcp]);
                }
            });
        }, ijvr7['downImg'] = function (jrov5y, oq0y5, u1a34l) {
            u1a34l === void 0x0 && (u1a34l = '');
            var xr7j = ijvr7['wxdown']({
                'url': jrov5y,
                'success': function (w9_f) {
                    w9_f['statusCode'] === 0xc8 && ijvr7['copyFile'](w9_f['tempFilePath'], u1a34l, oq0y5);
                },
                'fail': function (x7jrvi) {
                    oq0y5 != null && oq0y5['runWith']([0x1, x7jrvi]);
                }
            });
        }, ijvr7['copyFile'] = function (pecht, ctehzp, yv5qro) {
            var p_ew = pecht['split']('/'),
                ixv7r = p_ew[p_ew['length'] - 0x1],
                hce = ctehzp['split']('?')[0x0],
                byo5qr = ijvr7['getFileInfo'](ctehzp),
                njxiv7 = ijvr7['getFileNativePath'](ixv7r);
            ijvr7['fs']['copyFile']({
                'srcPath': pecht,
                'destPath': njxiv7,
                'success': function (oyjv) {
                    if (!byo5qr) ijvr7['onSaveFile'](ctehzp, ixv7r), yv5qro != null && yv5qro['runWith']([0x0]);else {
                        if (byo5qr['readyUrl'] != ctehzp) ijvr7['remove'](ixv7r, ctehzp, yv5qro);
                    }
                },
                'fail': function (x7jyrv) {
                    yv5qro != null && yv5qro['runWith']([0x1, x7jyrv]);
                }
            });
        }, ijvr7['getFileNativePath'] = function (ct6g8) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ct6g8;
        }, ijvr7['remove'] = function (hce8, $fw, a413) {
            $fw === void 0x0 && ($fw = '');
            var ko5b = ijvr7['getFileInfo']($fw),
                i1x43n = ijvr7['getFileNativePath'](ko5b['md5']);
            w2p9['loader']['clearRes'](ko5b['readyUrl']), ijvr7['fs']['unlink']({
                'filePath': i1x43n,
                'success': function (hc8ze) {
                    if ($fw != '') ijvr7['onSaveFile']($fw, hce8);
                    a413 != null && a413['runWith']([0x0]);
                },
                'fail': function (d86tcg) {}
            });
        }, ijvr7['onSaveFile'] = function (vrqy5o, gbd0k6) {
            var d8c6 = vrqy5o['split']('?')[0x0];
            ijvr7['filesListObj'][d8c6] = {
                'md5': gbd0k6,
                'readyUrl': vrqy5o
            }, ijvr7['fs']['writeFile']({
                'filePath': ijvr7['fileNativeDir'] + '/' + ijvr7['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](ijvr7['filesListObj']),
                'success': function ($2f_w9) {
                    console['log']('写入测试测试成功：', $2f_w9);
                },
                'fail': function (yqrbo5) {
                    console['log']('写入测试测试失败：', yqrbo5);
                }
            });
        }, ijvr7['existDir'] = function (xi314n, _9wfp2) {
            ijvr7['fs']['mkdir']({
                'dirPath': xi314n,
                'success': function (c6hzt) {
                    _9wfp2 != null && _9wfp2['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (gdkb0q) {
                    if (gdkb0q['errMsg']['indexOf']('file already exists') != -0x1) ijvr7['readSync'](ijvr7['fileListName'], 'utf8', _9wfp2);else _9wfp2 != null && _9wfp2['runWith']([0x1, gdkb0q]);
                }
            });
        }, ijvr7['readSync'] = function (e_w9p2, u43n1, _zpeht, ze_2h) {
            u43n1 === void 0x0 && (u43n1 = 'ascill'), ze_2h === void 0x0 && (ze_2h = '');
            var phcezt = ijvr7['getFileNativePath'](e_w9p2),
                jirx;
            try {
                jirx = ijvr7['fs']['readFileSync'](phcezt), _zpeht != null && _zpeht['runWith']([0x0, { 'data': jirx }]);
            } catch (chtz86) {
                _zpeht != null && _zpeht['runWith']([0x1]);
            }
        }, ijvr7['readCache'] = function () {}, ijvr7['writeCache'] = function (u4i31) {
            var s92$wf = readyUrl['split']('?')[0x0];
            ijvr7['filesListObj'][s92$wf] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, ijvr7['fs']['writeFile']({
                'filePath': ijvr7['fileNativeDir'] + '/' + ijvr7['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](ijvr7['filesListObj']),
                'success': function (p9fw_) {},
                'fail': function (w2_p9) {}
            });
        }, ijvr7['setNativeFileDir'] = function (_$f2w9) {
            ijvr7['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + _$f2w9;
        }, ijvr7['filesListObj'] = {}, ijvr7['fileNativeDir'] = null, ijvr7['fileListName'] = 'layaairfiles.txt', ijvr7['ziyuFileData'] = {}, qbkg05(ijvr7, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), ijvr7;
    }(ryjo),
        dgq = function (n41ix7) {
        function _$w9f2() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], _$w9f2['__super']['call'](this), this['_sound'] = _$w9f2['_createSound'](), this['_chanell'] = new k0bdgq(this['_sound']);
        }
        t_zhep(_$w9f2, 'laya.wx.mini.MiniSound', n41ix7);
        var zepth = _$w9f2['prototype'];
        return zepth['load'] = function (yjxrv7) {
            var z8the = this;
            yjxrv7 = thcze['formatURL'](yjxrv7), this['url'] = yjxrv7;
            if (_$w9f2['_audioCache'][yjxrv7]) {
                this['event']('complete');
                return;
            }
            function _ptehz() {
                if (_$w9f2['_null'] != undefined) z8the['_sound']['onCanplay'](_$w9f2['_null']), z8the['_sound']['onError'](_$w9f2['_null']);else try {
                    z8the['_sound']['onCanplay'](null), z8the['_sound']['onError'](null), _$w9f2['_null'] = null;
                } catch (e_zpw) {
                    console['warn']('[wxmini] _clearSound:' + e_zpw), z8the['_sound']['onCanplay'](tc6z8), z8the['_sound']['onError'](tc6z8), _$w9f2['_null'] = tc6z8;
                }
            }
            function zephct() {
                zehtcp['loaded'] = !![], zehtcp['event']('complete'), _$w9f2['_audioCache'][zehtcp['url']] = zehtcp;
            }
            function dkc68g(wp9f_) {
                console['error']('errCode=' + wp9f_['errCode'] + '  errMsg=' + wp9f_['errMsg']), zehtcp['event']('error');
            }
            function tc6z8() {}
            this['_sound']['onCanplay'](zephct), this['_sound']['onError'](dkc68g), this['_sound']['src'] = yjxrv7;
            var zehtcp = this;
        }, zepth['play'] = function (dh86, hpet_) {
            dh86 === void 0x0 && (dh86 = 0x0), hpet_ === void 0x0 && (hpet_ = 0x0);
            var jrxi, yq5or;
            if (this['url'] == x7i1nj['_tMusic']) {
                if (!_$w9f2['_musicAudio']) _$w9f2['_musicAudio'] = this['_sound'];
                jrxi = _$w9f2['_musicAudio'], yq5or = this['_chanell'];
            } else jrxi = this['_sound'], yq5or = this['_chanell'];
            return jrxi['src'] = this['url'], jrxi['startTime'] = 0x0, yq5or['isStopped'] && (yq5or['url'] = this['url'], yq5or['loops'] = hpet_, yq5or['startTime'] = dh86, yq5or['play'](), x7i1nj['addChannel'](yq5or)), yq5or;
        }, zepth['dispose'] = function () {
            var oyjr5 = _$w9f2['_audioCache'][this['url']];
            oyjr5 && (oyjr5['src'] = '', delete _$w9f2['_audioCache'][this['url']]);
        }, bko5q0(0x0, zepth, 'duration', function () {
            return this['_sound']['duration'];
        }), _$w9f2['_createSound'] = function () {
            _$w9f2['_id']++;
            var bo5y0 = d6['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return bo5y0;
        }, _$w9f2['_musicAudio'] = null, _$w9f2['_id'] = 0x0, _$w9f2['_audioCache'] = {}, _$w9f2['_null'] = undefined, _$w9f2;
    }(ryjo),
        k0bdgq = function (y5vjor) {
        function $sf29w(ph_ez2) {
            this['_audio'] = null, this['_onEnd'] = null, $sf29w['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = ph_ez2, this['_onEnd'] = epz2_w['bind'](this['__onEnd'], this), ph_ez2['onEnded'](this['_onEnd']);
        }
        t_zhep($sf29w, 'laya.wx.mini.MiniSoundChannel', y5vjor);
        var oqyv5r = $sf29w['prototype'];
        return oqyv5r['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (w2p9['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, oqyv5r['__onNull'] = function () {}, oqyv5r['play'] = function () {
            this['isStopped'] = ![], x7i1nj['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, oqyv5r['stop'] = function () {
            this['isStopped'] = !![], x7i1nj['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, oqyv5r['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, oqyv5r['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], x7i1nj['addChannel'](this), this['_audio']['play']();
        }, bko5q0(0x0, oqyv5r, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), bko5q0(0x0, oqyv5r, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), bko5q0(0x0, oqyv5r, 'volume', function () {
            return 0x1;
        }, function (bko50) {}), $sf29w['_null'] = undefined, $sf29w;
    }(jvxn),
        t8he = function () {
        function zhtpe() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = d6['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        t_zhep(zhtpe, 'laya.wx.mini.MiniVideo');
        var orb5 = zhtpe['prototype'];
        return orb5['on'] = function (jxyr, a13un, s$fw) {
            if (jxyr == 'loadedmetadata') this['onPlayFunc'] = s$fw['bind'](a13un), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else jxyr == 'ended' && (this['onEndedFunC'] = s$fw['bind'](a13un), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, orb5['onTimeUpdateFunc'] = function (roq5yv) {
            this['position'] = roq5yv['position'], this['_duration'] = roq5yv['duration'];
        }, orb5['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, orb5['onended'] = function (x3i14n, ij1n) {
            this['onEndedFunC'] = ij1n['bind'](x3i14n), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, orb5['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, orb5['off'] = function (yqvor, xnv7ji, pz_hte) {
            if (yqvor == 'loadedmetadata') this['onPlayFunc'] = pz_hte['bind'](xnv7ji), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else yqvor == 'ended' && (this['onEndedFunC'] = pz_hte['bind'](xnv7ji), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, orb5['load'] = function (u1i4n3) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = u1i4n3;
        }, orb5['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, orb5['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, orb5['size'] = function ($92_, xn4i31) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = $92_, this['videoElement']['height'] = xn4i31;
        }, orb5['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, orb5['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, bko5q0(0x0, orb5, 'duration', function () {
            return this['_duration'];
        }), bko5q0(0x0, orb5, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (i7vjxn) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = i7vjxn;
        }), bko5q0(0x0, orb5, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), bko5q0(0x0, orb5, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), bko5q0(0x0, orb5, 'ended', function () {
            return this['videoend'];
        }), bko5q0(0x0, orb5, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (rvo7yj) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = rvo7yj;
        }), bko5q0(0x0, orb5, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (aml34) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = aml34;
        }), bko5q0(0x0, orb5, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (z8che) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = z8che;
        }), bko5q0(0x0, orb5, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), bko5q0(0x0, orb5, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (yrq5bo) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = yrq5bo;
        }), bko5q0(0x0, orb5, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (j7rvyx) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = j7rvyx;
        }), bko5q0(0x0, orb5, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), bko5q0(0x0, orb5, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (phz_e2) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = phz_e2;
        }), bko5q0(0x0, orb5, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (tephzc) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = tephzc;
        }), bko5q0(0x0, orb5, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (g8t6c) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = g8t6c;
        }), zhtpe;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var hetpz_ in Laya) {
        var pw_2ze = Laya[hetpz_];
        pw_2ze && pw_2ze['__isclass'] && (exports[hetpz_] = pw_2ze);
    }
});