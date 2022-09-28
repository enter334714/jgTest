var J = wx.h$;
(function (window, document, o5vry) {
    var yqov5 = o5vry['un'],
        c68gk = o5vry['uns'],
        cthzep = o5vry['static'],
        rvoqy = o5vry['class'],
        _p9w2 = o5vry['getset'],
        _w2fp9 = o5vry['__newvec'],
        z8tch6 = laya['utils']['Browser'],
        g86t = laya['events']['Event'],
        vji7r = laya['events']['EventDispatcher'],
        zpct = laya['resource']['HTMLImage'],
        tcz6h8 = laya['utils']['Handler'],
        o0qyb = laya['display']['Input'],
        rvxy7 = laya['net']['Loader'],
        zechpt = laya['maths']['Matrix'],
        u3al4 = laya['renders']['Render'],
        yvjr = laya['utils']['RunDriver'],
        vrjo7y = laya['media']['Sound'],
        thc8 = laya['media']['SoundChannel'],
        wf9$_2 = laya['media']['SoundManager'],
        hcz8et = laya['display']['Stage'],
        eh_pzt = laya['net']['URL'],
        pzw2 = laya['utils']['Utils'],
        njixv = function () {
        function d8g6() {}
        return rvoqy(d8g6, 'laya.wx.mini.MiniAdpter'), d8g6['getJson'] = function (eth8z) {
            return JSON['parse'](eth8z);
        }, d8g6['init'] = function (ixv7jn, xyrvj7) {
            ixv7jn === void 0x0 && (ixv7jn = ![]), xyrvj7 === void 0x0 && (xyrvj7 = ![]);
            if (d8g6['_inited']) return;
            d8g6['window'] = window;
            if (d8g6['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            d8g6['_inited'] = !![], d8g6['isZiYu'] = xyrvj7, d8g6['isPosMsgYu'] = ixv7jn, d8g6['EnvConfig'] = {}, !d8g6['isZiYu'] && (ctd68['setNativeFileDir']('/layaairGame'), ctd68['existDir'](ctd68['fileNativeDir'], tcz6h8['create'](d8g6, d8g6['onMkdirCallBack']))), d8g6['window']['focus'] = function () {}, o5vry['getUrlPath'] = function () {}, d8g6['window']['logtime'] = function (h_pe2z) {}, d8g6['window']['alertTimeLog'] = function (x4ni7) {}, d8g6['window']['resetShareInfo'] = function () {}, d8g6['window']['CanvasRenderingContext2D'] = function () {}, d8g6['window']['CanvasRenderingContext2D']['prototype'] = d8g6['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], d8g6['window']['document']['body']['appendChild'] = function () {}, d8g6['EnvConfig']['pixelRatioInt'] = 0x0, yvjr['getPixelRatio'] = d8g6['pixelRatio'], d8g6['_preCreateElement'] = z8tch6['createElement'], z8tch6['createElement'] = d8g6['createElement'], yvjr['createShaderCondition'] = d8g6['createShaderCondition'], pzw2['parseXMLFromString'] = d8g6['parseXMLFromString'], o0qyb['_createInputElement'] = we2z['_createInputElement'], d8g6['EnvConfig']['load'] = rvxy7['prototype']['load'], rvxy7['prototype']['load'] = _2$f9w['prototype']['load'], d8g6['isZiYu'] && ixv7jn && wx['onMessage'](function (sf9$w) {
                sf9$w['isLoad'] && (ctd68['ziyuFileData'][sf9$w['url']] = sf9$w['data']);
            });
        }, d8g6['onMkdirCallBack'] = function (e2zw, n143x) {
            if (!e2zw) ctd68['filesListObj'] = JSON['parse'](n143x['data']);
        }, d8g6['pixelRatio'] = function () {
            if (!d8g6['EnvConfig']['pixelRatioInt']) try {
                var dg80k = wx['getSystemInfoSync']();
                return d8g6['EnvConfig']['pixelRatioInt'] = dg80k['pixelRatio'], dg80k = dg80k, dg80k['pixelRatio'];
            } catch (_fw2$9) {}
            return d8g6['EnvConfig']['pixelRatioInt'];
        }, d8g6['createElement'] = function (ij17) {
            if (ij17 == 'canvas') {
                var ryo5vj;
                return d8g6['idx'] == 0x1 ? d8g6['isZiYu'] ? (ryo5vj = sharedCanvas, ryo5vj['style'] = {}) : ryo5vj = window['canvas'] : ryo5vj = window['wx']['createCanvas'](), d8g6['idx']++, ryo5vj;
            } else {
                if (ij17 == 'textarea' || ij17 == 'input') return d8g6['onCreateInput'](ij17);else {
                    if (ij17 == 'div') {
                        var t8hce = d8g6['_preCreateElement'](ij17);
                        return t8hce['contains'] = function (u1n4i) {
                            return null;
                        }, t8hce['removeChild'] = function (_hzep2) {}, t8hce;
                    } else return d8g6['_preCreateElement'](ij17);
                }
            }
        }, d8g6['onCreateInput'] = function (b5qoyr) {
            var d0kgqb = d8g6['_preCreateElement'](b5qoyr);
            return d0kgqb['focus'] = we2z['wxinputFocus'], d0kgqb['blur'] = we2z['wxinputblur'], d0kgqb['style'] = {}, d0kgqb['value'] = 0x0, d0kgqb['parentElement'] = {}, d0kgqb['placeholder'] = {}, d0kgqb['type'] = {}, d0kgqb['setColor'] = function (qg5k0b) {}, d0kgqb['setType'] = function (f92w$_) {}, d0kgqb['setFontFace'] = function (x7ryj) {}, d0kgqb['addEventListener'] = function (m3lua4) {}, d0kgqb['contains'] = function (bq0ko5) {
                return null;
            }, d0kgqb['removeChild'] = function (gd08k) {}, d0kgqb;
        }, d8g6['createShaderCondition'] = function (j7ovyr) {
            var yv7ro = this,
                i7nj1x = function () {
                var x7i41 = j7ovyr;
                return yv7ro[j7ovyr['replace']('this.', '')];
            };
            return i7nj1x;
        }, d8g6['EnvConfig'] = null, d8g6['window'] = null, d8g6['_preCreateElement'] = null, d8g6['_inited'] = ![], d8g6['wxRequest'] = null, d8g6['systemInfo'] = null, d8g6['version'] = '0.0.1', d8g6['isZiYu'] = ![], d8g6['isPosMsgYu'] = ![], d8g6['parseXMLFromString'] = function (ixvj) {
            var vn7x, phtze;
            ixvj = ixvj['replace'](/>\s+</g, '><');
            try {
                vn7x = new window['Parser']['DOMParser']()['parseFromString'](ixvj, 'text/xml');
            } catch (t8cg6) {
                throw '需要引入xml解析库文件';
            }
            return vn7x;
        }, d8g6['idx'] = 0x1, d8g6;
    }(),
        j17xi = function () {
        function rjvyo() {}
        rvoqy(rjvyo, 'laya.wx.mini.MiniImage');
        var wep_92 = rjvyo['prototype'];
        return wep_92['_loadImage'] = function (yov5jr) {
            var ix7nvj = this,
                rixjv = ![];
            yov5jr['indexOf']('layaNativeDir/') == -0x1 && (rixjv = !![], yov5jr = eh_pzt['formatURL'](yov5jr));
            if (!ctd68['getFileInfo'](yov5jr)) {
                if (yov5jr['indexOf']('http://') != -0x1 || yov5jr['indexOf']('https://') != -0x1) ctd68['downImg'](yov5jr, new tcz6h8(rjvyo, rjvyo['onDownImgCallBack'], [yov5jr, ix7nvj]), yov5jr);else rjvyo['onCreateImage'](yov5jr, ix7nvj, !![]);
            } else rjvyo['onCreateImage'](yov5jr, ix7nvj, !rixjv);
        }, rjvyo['onDownImgCallBack'] = function (rob5qy, _fw9$2, gk0d6b) {
            if (!gk0d6b) rjvyo['onCreateImage'](rob5qy, _fw9$2);else _fw9$2['onError'](null);
        }, rjvyo['onCreateImage'] = function (f_, s9f2, _9f$) {
            _9f$ === void 0x0 && (_9f$ = ![]);
            var tpzh_;
            if (!_9f$) {
                var dkq0bg = ctd68['getFileInfo'](f_),
                    g0d6 = dkq0bg['md5'];
                tpzh_ = ctd68['getFileNativePath'](g0d6);
            } else tpzh_ = f_;
            if (s9f2['imgCache'] == null) s9f2['imgCache'] = {};
            var gdc6t;
            function rb5yqo() {
                gdc6t['onload'] = null, gdc6t['onerror'] = null, delete s9f2['imgCache'][f_];
            }
            ;
            var v7ixjr = function () {
                rb5yqo(), s9f2['onLoaded'](gdc6t);
            },
                hz_p2e = function () {
                rb5yqo(), s9f2['event']('error', 'Load image failed');
            };
            s9f2['_type'] == 'nativeimage' ? (gdc6t = new z8tch6['window']['Image'](), gdc6t['crossOrigin'] = '', gdc6t['onload'] = v7ixjr, gdc6t['onerror'] = hz_p2e, gdc6t['src'] = tpzh_, s9f2['imgCache'][f_] = gdc6t) : new zpct['create'](tpzh_, {
                'onload': v7ixjr,
                'onerror': hz_p2e,
                'onCreate': function (l3u1) {
                    gdc6t = l3u1, s9f2['imgCache'][f_] = l3u1;
                }
            });
        }, rjvyo;
    }(),
        we2z = function () {
        function byqro5() {}
        return rvoqy(byqro5, 'laya.wx.mini.MiniInput'), byqro5['_createInputElement'] = function () {
            o0qyb['_initInput'](o0qyb['area'] = z8tch6['createElement']('textarea')), o0qyb['_initInput'](o0qyb['input'] = z8tch6['createElement']('input')), o0qyb['inputContainer'] = z8tch6['createElement']('div'), o0qyb['inputContainer']['style']['position'] = 'absolute', o0qyb['inputContainer']['style']['zIndex'] = 0x186a0, z8tch6['container']['appendChild'](o0qyb['inputContainer']), o0qyb['inputContainer']['setPos'] = function (hd68c, s9f2w) {
                o0qyb['inputContainer']['style']['left'] = hd68c + 'px', o0qyb['inputContainer']['style']['top'] = s9f2w + 'px';
            }, o5vry['stage']['on']('resize', null, byqro5['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (kqdbg0) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), wf9$_2['_soundClass'] = pe_thz, wf9$_2['_musicClass'] = pe_thz, window['_videoClass'] = jir7vx;
        }, byqro5['_onStageResize'] = function () {
            var _wp9e2 = o5vry['stage']['_canvasTransform']['identity']();
            _wp9e2['scale'](z8tch6['width'] / u3al4['canvas']['width'] / yvjr['getPixelRatio'](), z8tch6['height'] / u3al4['canvas']['height'] / yvjr['getPixelRatio']());
        }, byqro5['wxinputFocus'] = function (ryv5oj) {
            var rvqoy = o0qyb['inputElement']['target'];
            if (rvqoy && !rvqoy['editable']) return;
            njixv['window']['wx']['offKeyboardConfirm'](), njixv['window']['wx']['offKeyboardInput'](), njixv['window']['wx']['showKeyboard']({
                'defaultValue': rvqoy['text'],
                'maxLength': rvqoy['maxChars'],
                'multiple': rvqoy['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (g6c) {},
                'fail': function (t86c) {}
            }), njixv['window']['wx']['onKeyboardConfirm'](function (f9ws) {
                var u4i13n = f9ws ? f9ws['value'] : '';
                rvqoy['text'] = u4i13n, rvqoy['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), njixv['window']['wx']['onKeyboardInput'](function (ix17n) {
                var vxijr = ix17n ? ix17n['value'] : '';
                if (!rvqoy['multiline']) {
                    if (vxijr['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                rvqoy['text'] = vxijr, rvqoy['event']('input');
            });
        }, byqro5['inputEnter'] = function () {
            o0qyb['inputElement']['target']['focus'] = ![];
        }, byqro5['wxinputblur'] = function () {
            byqro5['hideKeyboard']();
        }, byqro5['hideKeyboard'] = function () {
            njixv['window']['wx']['offKeyboardConfirm'](), njixv['window']['wx']['offKeyboardInput'](), njixv['window']['wx']['hideKeyboard']({
                'success': function (b5yorq) {
                    console['log']('隐藏键盘');
                },
                'fail': function (tcz8he) {
                    console['log']('隐藏键盘出错:' + (tcz8he ? tcz8he['errMsg'] : ''));
                }
            });
        }, byqro5;
    }(),
        _2$f9w = function () {
        function r5oby() {}
        rvoqy(r5oby, 'laya.wx.mini.MiniLoader');
        var hte8zc = r5oby['prototype'];
        return hte8zc['load'] = function (_epw2, d6c8gk, bkq0d, bdg6k0, oqr) {
            bkq0d === void 0x0 && (bkq0d = !![]), oqr === void 0x0 && (oqr = ![]);
            var y5ro = this;
            y5ro['_url'] = _epw2;
            if (_epw2['indexOf']('data:image') === 0x0) y5ro['_type'] = d6c8gk = 'image';else y5ro['_type'] = d6c8gk || (d6c8gk = y5ro['getTypeFromUrl'](_epw2));
            y5ro['_cache'] = bkq0d, y5ro['_data'] = null;
            var $fs2w9 = 'ascii';
            if (_epw2['indexOf']('.fnt') != -0x1) $fs2w9 = 'utf8';else d6c8gk == 'arraybuffer' && ($fs2w9 = '');
            ;
            var ctz68h = pzw2['getFileExtension'](_epw2);
            if (r5oby['_fileTypeArr']['indexOf'](ctz68h) != -0x1) njixv['EnvConfig']['load']['call'](this, _epw2, d6c8gk, bkq0d, bdg6k0, oqr);else {
                if (!ctd68['getFileInfo'](_epw2)) {
                    if (_epw2['indexOf']('layaNativeDir/') != -0x1) {
                        if (njixv['isZiYu']) {
                            var oyv5rj = ctd68['ziyuFileData'][_epw2];
                            y5ro['onLoaded'](oyv5rj);
                            return;
                        } else {
                            cosnole['log']('read read'), ctd68['read'](_epw2, $fs2w9, new tcz6h8(r5oby, r5oby['onReadNativeCallBack'], [$fs2w9, _epw2, d6c8gk, bkq0d, bdg6k0, oqr, y5ro]));
                            return;
                        }
                    }
                    if (eh_pzt['rootPath'] == '') var w9_2fp = _epw2;else w9_2fp = _epw2['split'](eh_pzt['rootPath'])[0x0];
                    _epw2['indexOf']('http://') != -0x1 || _epw2['indexOf']('https://') != -0x1 ? njixv['EnvConfig']['load']['call'](y5ro, _epw2, d6c8gk, bkq0d, bdg6k0, oqr) : ctd68['readFile'](w9_2fp, $fs2w9, new tcz6h8(r5oby, r5oby['onReadNativeCallBack'], [$fs2w9, _epw2, d6c8gk, bkq0d, bdg6k0, oqr, y5ro]), _epw2);
                } else njixv['EnvConfig']['load']['call'](this, _epw2, d6c8gk, bkq0d, bdg6k0, oqr);
            }
        }, hte8zc['resMgrLoad'] = function (jyo7r, v7jxyr, xjin7v, rji7xv, ivrjx, o7v, p2fw_9) {
            xjin7v === void 0x0 && (xjin7v = 0x0), rji7xv === void 0x0 && (rji7xv = ![]), ivrjx === void 0x0 && (ivrjx = ![]), o7v === void 0x0 && (o7v = 0x0), p2fw_9 === void 0x0 && (p2fw_9 = 0x3), jyo7r['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', jyo7r), njixv['EnvConfig']['resMgrLoad'](jyo7r, (g6kb0d, vjyrx7, ro7) => {
                r5oby['prototype']['resMgrLoadCallBack'](g6kb0d, vjyrx7, ro7, v7jxyr);
            }, xjin7v, rji7xv, ivrjx, o7v, p2fw_9);
        }, hte8zc['resMgrLoadCallBack'] = function (pez_h, r7oj, k0o5bq, ovr5yj) {
            console['log']('buff:::', pez_h, k0o5bq, ctd68['fileNativeDir'] + '///' + ctd68['fileListName']), ovr5yj(pez_h, r7oj, k0o5bq);
        }, hte8zc['clearRes'] = function (inx7jv, x71ni) {
            x71ni === void 0x0 && (x71ni = ![]);
            var kgbq0 = this;
            kgbq0['clearRes'](inx7jv, x71ni);
            var o5ryjv = ctd68['getFileInfo'](inx7jv);
            if (o5ryjv && (inx7jv['indexOf']('http://') != -0x1 || inx7jv['indexOf']('https://') != -0x1)) {
                var mula3 = o5ryjv['md5'],
                    fp_9w2 = ctd68['getFileNativePath'](mula3);
                ctd68['remove'](fp_9w2);
            }
        }, r5oby['onReadNativeCallBack'] = function (d6k8c, b0kg6d, jvro5y, nxvi7j, yov7rj, eczt, qby0, xi17n4, vj7nxi) {
            nxvi7j === void 0x0 && (nxvi7j = !![]), eczt === void 0x0 && (eczt = ![]), xi17n4 === void 0x0 && (xi17n4 = 0x0);
            if (!xi17n4) {
                var zwe_2;
                if (jvro5y == 'json' || jvro5y == 'atlas') zwe_2 = njixv['getJson'](vj7nxi['data']);else jvro5y == 'xml' ? zwe_2 = pzw2['parseXMLFromString'](vj7nxi['data']) : zwe_2 = vj7nxi['data'];
                qby0['onLoaded'](zwe_2), !njixv['isZiYu'] && njixv['isPosMsgYu'] && jvro5y != 'arraybuffer' && wx['postMessage']({
                    'url': b0kg6d,
                    'data': zwe_2,
                    'isLoad': !![]
                });
            } else xi17n4 == 0x1 && njixv['EnvConfig']['load']['call'](qby0, b0kg6d, jvro5y, nxvi7j, yov7rj, eczt);
        }, cthzep(r5oby, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), r5oby;
    }(),
        ctd68 = function (ro7vyj) {
        function ztepc() {
            ztepc['__super']['call'](this);
            ;
        }
        return rvoqy(ztepc, 'laya.wx.mini.MiniFileMgr', ro7vyj), ztepc['isLoadFile'] = function (yq5br) {
            return ztepc['_fileTypeArr']['indexOf'](yq5br) != -0x1 ? !![] : ![];
        }, ztepc['getFileInfo'] = function (k8gc6) {
            var i4u1n3 = k8gc6['split']('?')[0x0],
                etczh8 = ztepc['filesListObj'][i4u1n3];
            if (etczh8 == null) return null;else return etczh8;
            return null;
        }, ztepc['onFileUpdate'] = function (g6c8d, i4n1x7) {
            var n1i34 = g6c8d['split']('/'),
                kbg6d = n1i34[n1i34['length'] - 0x1],
                xrvj7 = ztepc['getFileInfo'](i4n1x7);
            if (xrvj7 == null) ztepc['onSaveFile'](i4n1x7, kbg6d);else {
                if (xrvj7['readyUrl'] != i4n1x7) ztepc['remove'](kbg6d, i4n1x7);
            }
        }, ztepc['exits'] = function (kdbg60, yo5rb) {
            var czh6t = ztepc['getFileNativePath'](kdbg60);
            ztepc['fs']['getFileInfo']({
                'filePath': czh6t,
                'success': function (lm3au4) {
                    yo5rb != null && yo5rb['runWith']([0x0, lm3au4]);
                },
                'fail': function (kg68d0) {
                    yo5rb != null && yo5rb['runWith']([0x1, kg68d0]);
                }
            });
        }, ztepc['read'] = function (jy7o, vi7nxj, oyv5qr, bgd06) {
            vi7nxj === void 0x0 && (vi7nxj = 'ascill'), bgd06 === void 0x0 && (bgd06 = '');
            var jr5yv;
            bgd06 != '' ? jr5yv = ztepc['getFileNativePath'](jy7o) : jr5yv = jy7o, ztepc['fs']['readFile']({
                'filePath': jr5yv,
                'encoding': vi7nxj,
                'success': function (ryv5j) {
                    oyv5qr != null && oyv5qr['runWith']([0x0, ryv5j]);
                },
                'fail': function (g68c) {
                    if (g68c && bgd06 != '') ztepc['down'](bgd06, vi7nxj, oyv5qr, bgd06);else oyv5qr != null && oyv5qr['runWith']([0x1]);
                }
            });
        }, ztepc['readNativeFile'] = function (p_eh2, in3u41) {
            ztepc['fs']['readFile']({
                'filePath': p_eh2,
                'encoding': '',
                'success': function ($sf9) {
                    in3u41 != null && in3u41['runWith']([0x0]);
                },
                'fail': function (htecp) {
                    in3u41 != null && in3u41['runWith']([0x1]);
                }
            });
        }, ztepc['down'] = function (y7ovj, kdgq0, _p2z, i17jn) {
            kdgq0 === void 0x0 && (kdgq0 = 'ascill'), i17jn === void 0x0 && (i17jn = '');
            var yvxr7j = ztepc['getFileNativePath'](i17jn),
                tz86h = ztepc['wxdown']({
                'url': y7ovj,
                'filePath': yvxr7j,
                'success': function (p_2h) {
                    if (p_2h['statusCode'] === 0xc8) ztepc['readFile'](p_2h['filePath'], kdgq0, _p2z, i17jn);
                },
                'fail': function (b0q5ok) {
                    _p2z != null && _p2z['runWith']([0x1, b0q5ok]);
                }
            });
            tz86h['onProgressUpdate'](function (z_ehpt) {
                _p2z != null && _p2z['runWith']([0x2, z_ehpt['progress']]);
            });
        }, ztepc['readFile'] = function (bk0, niu31, gb5qk0, d68ht) {
            niu31 === void 0x0 && (niu31 = 'ascill'), d68ht === void 0x0 && (d68ht = ''), ztepc['fs']['readFile']({
                'filePath': bk0,
                'encoding': niu31,
                'success': function (yo5qv) {
                    if (bk0['indexOf']('http://') != -0x1 || bk0['indexOf']('https://') != -0x1) ztepc['onFileUpdate'](bk0, d68ht);
                    gb5qk0 != null && gb5qk0['runWith']([0x0, yo5qv]);
                },
                'fail': function (bgq50k) {
                    if (bgq50k) gb5qk0 != null && gb5qk0['runWith']([0x1, bgq50k]);
                }
            });
        }, ztepc['downImg'] = function (db6k, xr7jyv, g8dc6k) {
            g8dc6k === void 0x0 && (g8dc6k = '');
            var i7vjn = ztepc['wxdown']({
                'url': db6k,
                'success': function (nx3i41) {
                    nx3i41['statusCode'] === 0xc8 && ztepc['copyFile'](nx3i41['tempFilePath'], g8dc6k, xr7jyv);
                },
                'fail': function (xj1i7) {
                    xr7jyv != null && xr7jyv['runWith']([0x1, xj1i7]);
                }
            });
        }, ztepc['copyFile'] = function (orj7vy, $92wf, yovr5j) {
            var _wp9f2 = orj7vy['split']('/'),
                sw29$ = _wp9f2[_wp9f2['length'] - 0x1],
                ry5jv = $92wf['split']('?')[0x0],
                j5yov = ztepc['getFileInfo']($92wf),
                tchpze = ztepc['getFileNativePath'](sw29$);
            ztepc['fs']['copyFile']({
                'srcPath': orj7vy,
                'destPath': tchpze,
                'success': function (r5ob) {
                    if (!j5yov) ztepc['onSaveFile']($92wf, sw29$), yovr5j != null && yovr5j['runWith']([0x0]);else {
                        if (j5yov['readyUrl'] != $92wf) ztepc['remove'](sw29$, $92wf, yovr5j);
                    }
                },
                'fail': function (dkgb6) {
                    yovr5j != null && yovr5j['runWith']([0x1, dkgb6]);
                }
            });
        }, ztepc['getFileNativePath'] = function (w_f92) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + w_f92;
        }, ztepc['remove'] = function (p2z_he, lu43ma, n4xi3) {
            lu43ma === void 0x0 && (lu43ma = '');
            var h8tc6d = ztepc['getFileInfo'](lu43ma),
                wp_2z = ztepc['getFileNativePath'](h8tc6d['md5']);
            o5vry['loader']['clearRes'](h8tc6d['readyUrl']), ztepc['fs']['unlink']({
                'filePath': wp_2z,
                'success': function (u34n1a) {
                    if (lu43ma != '') ztepc['onSaveFile'](lu43ma, p2z_he);
                    n4xi3 != null && n4xi3['runWith']([0x0]);
                },
                'fail': function (bg0dk6) {}
            });
        }, ztepc['onSaveFile'] = function (kc68g, in1xj7) {
            var au3lm = kc68g['split']('?')[0x0];
            ztepc['filesListObj'][au3lm] = {
                'md5': in1xj7,
                'readyUrl': kc68g
            }, ztepc['fs']['writeFile']({
                'filePath': ztepc['fileNativeDir'] + '/' + ztepc['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](ztepc['filesListObj']),
                'success': function (htec8) {
                    console['log']('写入测试测试成功：', htec8);
                },
                'fail': function (htczpe) {
                    console['log']('写入测试测试失败：', htczpe);
                }
            });
        }, ztepc['existDir'] = function (u34al1, c6z8h) {
            ztepc['fs']['mkdir']({
                'dirPath': u34al1,
                'success': function (ko0bq) {
                    c6z8h != null && c6z8h['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (jyo7v) {
                    if (jyo7v['errMsg']['indexOf']('file already exists') != -0x1) ztepc['readSync'](ztepc['fileListName'], 'utf8', c6z8h);else c6z8h != null && c6z8h['runWith']([0x1, jyo7v]);
                }
            });
        }, ztepc['readSync'] = function (yrb5o, we92_p, d6h8tc, njix1) {
            we92_p === void 0x0 && (we92_p = 'ascill'), njix1 === void 0x0 && (njix1 = '');
            var $2_w = ztepc['getFileNativePath'](yrb5o),
                c6gt;
            try {
                c6gt = ztepc['fs']['readFileSync']($2_w), d6h8tc != null && d6h8tc['runWith']([0x0, { 'data': c6gt }]);
            } catch ($w9_) {
                d6h8tc != null && d6h8tc['runWith']([0x1]);
            }
        }, ztepc['readCache'] = function () {}, ztepc['writeCache'] = function (tpczhe) {
            var k60dg = readyUrl['split']('?')[0x0];
            ztepc['filesListObj'][k60dg] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, ztepc['fs']['writeFile']({
                'filePath': ztepc['fileNativeDir'] + '/' + ztepc['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](ztepc['filesListObj']),
                'success': function (ryjxv) {},
                'fail': function (he2z_p) {}
            });
        }, ztepc['setNativeFileDir'] = function (oqrb5) {
            ztepc['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + oqrb5;
        }, ztepc['filesListObj'] = {}, ztepc['fileNativeDir'] = null, ztepc['fileListName'] = 'layaairfiles.txt', ztepc['ziyuFileData'] = {}, cthzep(ztepc, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), ztepc;
    }(vji7r),
        pe_thz = function (hezct) {
        function l1u() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], l1u['__super']['call'](this), this['_sound'] = l1u['_createSound'](), this['_chanell'] = new w$f_92(this['_sound']);
        }
        rvoqy(l1u, 'laya.wx.mini.MiniSound', hezct);
        var kbg0d = l1u['prototype'];
        return kbg0d['load'] = function (te_phz) {
            var ula341 = this;
            te_phz = eh_pzt['formatURL'](te_phz), this['url'] = te_phz;
            if (l1u['_audioCache'][te_phz]) {
                this['event']('complete');
                return;
            }
            function iu1n3() {
                if (l1u['_null'] != undefined) ula341['_sound']['onCanplay'](l1u['_null']), ula341['_sound']['onError'](l1u['_null']);else try {
                    ula341['_sound']['onCanplay'](null), ula341['_sound']['onError'](null), l1u['_null'] = null;
                } catch (rxij7) {
                    console['warn']('[wxmini] _clearSound:' + rxij7), ula341['_sound']['onCanplay'](pe_tz), ula341['_sound']['onError'](pe_tz), l1u['_null'] = pe_tz;
                }
            }
            function we9p2_() {
                gdck8['loaded'] = !![], gdck8['event']('complete'), l1u['_audioCache'][gdck8['url']] = gdck8;
            }
            function l1ua4(lm4u3a) {
                console['error']('errCode=' + lm4u3a['errCode'] + '  errMsg=' + lm4u3a['errMsg']), gdck8['event']('error');
            }
            function pe_tz() {}
            this['_sound']['onCanplay'](we9p2_), this['_sound']['onError'](l1ua4), this['_sound']['src'] = te_phz;
            var gdck8 = this;
        }, kbg0d['play'] = function (boqk50, ij1nx) {
            boqk50 === void 0x0 && (boqk50 = 0x0), ij1nx === void 0x0 && (ij1nx = 0x0);
            var al13, rqv5yo;
            if (this['url'] == wf9$_2['_tMusic']) {
                if (!l1u['_musicAudio']) l1u['_musicAudio'] = this['_sound'];
                al13 = l1u['_musicAudio'], rqv5yo = this['_chanell'];
            } else al13 = this['_sound'], rqv5yo = this['_chanell'];
            return al13['src'] = this['url'], al13['startTime'] = 0x0, rqv5yo['isStopped'] && (rqv5yo['url'] = this['url'], rqv5yo['loops'] = ij1nx, rqv5yo['startTime'] = boqk50, rqv5yo['play'](), wf9$_2['addChannel'](rqv5yo)), rqv5yo;
        }, kbg0d['dispose'] = function () {
            var c68hd = l1u['_audioCache'][this['url']];
            c68hd && (c68hd['src'] = '', delete l1u['_audioCache'][this['url']]);
        }, _p9w2(0x0, kbg0d, 'duration', function () {
            return this['_sound']['duration'];
        }), l1u['_createSound'] = function () {
            l1u['_id']++;
            var t68chd = njixv['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return t68chd;
        }, l1u['_musicAudio'] = null, l1u['_id'] = 0x0, l1u['_audioCache'] = {}, l1u['_null'] = undefined, l1u;
    }(vji7r),
        w$f_92 = function (qbgdk) {
        function ethc(qovyr5) {
            this['_audio'] = null, this['_onEnd'] = null, ethc['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = qovyr5, this['_onEnd'] = pzw2['bind'](this['__onEnd'], this), qovyr5['onEnded'](this['_onEnd']);
        }
        rvoqy(ethc, 'laya.wx.mini.MiniSoundChannel', qbgdk);
        var xrj7vi = ethc['prototype'];
        return xrj7vi['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (o5vry['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, xrj7vi['__onNull'] = function () {}, xrj7vi['play'] = function () {
            this['isStopped'] = ![], wf9$_2['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, xrj7vi['stop'] = function () {
            this['isStopped'] = !![], wf9$_2['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, xrj7vi['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, xrj7vi['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], wf9$_2['addChannel'](this), this['_audio']['play']();
        }, _p9w2(0x0, xrj7vi, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), _p9w2(0x0, xrj7vi, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), _p9w2(0x0, xrj7vi, 'volume', function () {
            return 0x1;
        }, function (k5qbo0) {}), ethc['_null'] = undefined, ethc;
    }(thc8),
        jir7vx = function () {
        function in3u() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = njixv['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        rvoqy(in3u, 'laya.wx.mini.MiniVideo');
        var k0qo5b = in3u['prototype'];
        return k0qo5b['on'] = function (t86hc, kq5bg, kobq) {
            if (t86hc == 'loadedmetadata') this['onPlayFunc'] = kobq['bind'](kq5bg), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else t86hc == 'ended' && (this['onEndedFunC'] = kobq['bind'](kq5bg), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, k0qo5b['onTimeUpdateFunc'] = function (i1x7nj) {
            this['position'] = i1x7nj['position'], this['_duration'] = i1x7nj['duration'];
        }, k0qo5b['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, k0qo5b['onended'] = function (q5kgb0, f9w2p_) {
            this['onEndedFunC'] = f9w2p_['bind'](q5kgb0), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, k0qo5b['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, k0qo5b['off'] = function (hez_p2, lu34a, n4ix) {
            if (hez_p2 == 'loadedmetadata') this['onPlayFunc'] = n4ix['bind'](lu34a), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else hez_p2 == 'ended' && (this['onEndedFunC'] = n4ix['bind'](lu34a), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, k0qo5b['load'] = function (sw9$f2) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = sw9$f2;
        }, k0qo5b['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, k0qo5b['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, k0qo5b['size'] = function (_hzpet, kobq05) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = _hzpet, this['videoElement']['height'] = kobq05;
        }, k0qo5b['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, k0qo5b['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, _p9w2(0x0, k0qo5b, 'duration', function () {
            return this['_duration'];
        }), _p9w2(0x0, k0qo5b, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (jr7xy) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = jr7xy;
        }), _p9w2(0x0, k0qo5b, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), _p9w2(0x0, k0qo5b, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), _p9w2(0x0, k0qo5b, 'ended', function () {
            return this['videoend'];
        }), _p9w2(0x0, k0qo5b, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (dc6g8t) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = dc6g8t;
        }), _p9w2(0x0, k0qo5b, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (_pf2w) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = _pf2w;
        }), _p9w2(0x0, k0qo5b, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function ($2f_w) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = $2f_w;
        }), _p9w2(0x0, k0qo5b, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), _p9w2(0x0, k0qo5b, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (th8ze) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = th8ze;
        }), _p9w2(0x0, k0qo5b, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (gk6c8) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = gk6c8;
        }), _p9w2(0x0, k0qo5b, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), _p9w2(0x0, k0qo5b, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (bqy5r) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = bqy5r;
        }), _p9w2(0x0, k0qo5b, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (yqvor) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = yqvor;
        }), _p9w2(0x0, k0qo5b, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (ph_2ez) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = ph_2ez;
        }), in3u;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var kd0bg in Laya) {
        var ijnx7 = Laya[kd0bg];
        ijnx7 && ijnx7['__isclass'] && (exports[kd0bg] = ijnx7);
    }
});