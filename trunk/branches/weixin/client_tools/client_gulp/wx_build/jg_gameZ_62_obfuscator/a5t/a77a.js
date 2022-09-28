var f = wx.$B;
(function (window, document, svi4) {
    var pxr0y = svi4['un'],
        a37e9f = svi4['uns'],
        wlb6g = svi4['static'],
        xqr8p0 = svi4['class'],
        e7f93 = svi4['getset'],
        bkrgl = svi4['__newvec'],
        k8pq = laya['utils']['Browser'],
        eaistz = laya['events']['Event'],
        _w15o = laya['events']['EventDispatcher'],
        v14to = laya['resource']['HTMLImage'],
        y8rpx = laya['utils']['Handler'],
        ow16 = laya['display']['Input'],
        pk8qxr = laya['net']['Loader'],
        ivzsta = laya['maths']['Matrix'],
        ais3 = laya['renders']['Render'],
        h$n2uf = laya['utils']['RunDriver'],
        i7ez = laya['media']['Sound'],
        zasi = laya['media']['SoundChannel'],
        dp8jy0 = laya['media']['SoundManager'],
        qkx8pr = laya['display']['Stage'],
        iszv4 = laya['net']['URL'],
        dp0xy8 = laya['utils']['Utils'],
        p8x0q = function () {
        function $hm2() {}
        return xqr8p0($hm2, 'laya.wx.mini.MiniAdpter'), $hm2['getJson'] = function (rqlbk) {
            return JSON['parse'](rqlbk);
        }, $hm2['init'] = function (y0rx8, r8kxq) {
            y0rx8 === void 0x0 && (y0rx8 = ![]), r8kxq === void 0x0 && (r8kxq = ![]);
            if ($hm2['_inited']) return;
            $hm2['window'] = window;
            if ($hm2['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            $hm2['_inited'] = !![], $hm2['isZiYu'] = r8kxq, $hm2['isPosMsgYu'] = y0rx8, $hm2['EnvConfig'] = {}, !$hm2['isZiYu'] && (_o164['setNativeFileDir']('/layaairGame'), _o164['existDir'](_o164['fileNativeDir'], y8rpx['create']($hm2, $hm2['onMkdirCallBack']))), $hm2['window']['focus'] = function () {}, svi4['getUrlPath'] = function () {}, $hm2['window']['logtime'] = function (af397) {}, $hm2['window']['alertTimeLog'] = function (_l61) {}, $hm2['window']['resetShareInfo'] = function () {}, $hm2['window']['CanvasRenderingContext2D'] = function () {}, $hm2['window']['CanvasRenderingContext2D']['prototype'] = $hm2['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], $hm2['window']['document']['body']['appendChild'] = function () {}, $hm2['EnvConfig']['pixelRatioInt'] = 0x0, h$n2uf['getPixelRatio'] = $hm2['pixelRatio'], $hm2['_preCreateElement'] = k8pq['createElement'], k8pq['createElement'] = $hm2['createElement'], h$n2uf['createShaderCondition'] = $hm2['createShaderCondition'], dp0xy8['parseXMLFromString'] = $hm2['parseXMLFromString'], ow16['_createInputElement'] = $37f['_createInputElement'], $hm2['EnvConfig']['load'] = pk8qxr['prototype']['load'], pk8qxr['prototype']['load'] = brlq['prototype']['load'], $hm2['isZiYu'] && y0rx8 && wx['onMessage'](function (a9z73) {
                a9z73['isLoad'] && (_o164['ziyuFileData'][a9z73['url']] = a9z73['data']);
            });
        }, $hm2['onMkdirCallBack'] = function (_5l1, fu$h) {
            if (!_5l1) _o164['filesListObj'] = JSON['parse'](fu$h['data']);
        }, $hm2['pixelRatio'] = function () {
            if (!$hm2['EnvConfig']['pixelRatioInt']) try {
                var r8bxqk = wx['getSystemInfoSync']();
                return $hm2['EnvConfig']['pixelRatioInt'] = r8bxqk['pixelRatio'], r8bxqk = r8bxqk, r8bxqk['pixelRatio'];
            } catch (pxd8y0) {}
            return $hm2['EnvConfig']['pixelRatioInt'];
        }, $hm2['createElement'] = function (prxkq) {
            if (prxkq == 'canvas') {
                var _o6w51;
                return $hm2['idx'] == 0x1 ? $hm2['isZiYu'] ? (_o6w51 = sharedCanvas, _o6w51['style'] = {}) : _o6w51 = window['canvas'] : _o6w51 = window['wx']['createCanvas'](), $hm2['idx']++, _o6w51;
            } else {
                if (prxkq == 'textarea' || prxkq == 'input') return $hm2['onCreateInput'](prxkq);else {
                    if (prxkq == 'div') {
                        var pd8jy = $hm2['_preCreateElement'](prxkq);
                        return pd8jy['contains'] = function (ois4t) {
                            return null;
                        }, pd8jy['removeChild'] = function (prx80) {}, pd8jy;
                    } else return $hm2['_preCreateElement'](prxkq);
                }
            }
        }, $hm2['onCreateInput'] = function (e937) {
            var _w6o5 = $hm2['_preCreateElement'](e937);
            return _w6o5['focus'] = $37f['wxinputFocus'], _w6o5['blur'] = $37f['wxinputblur'], _w6o5['style'] = {}, _w6o5['value'] = 0x0, _w6o5['parentElement'] = {}, _w6o5['placeholder'] = {}, _w6o5['type'] = {}, _w6o5['setColor'] = function (x80d) {}, _w6o5['setType'] = function (n9fh$2) {}, _w6o5['setFontFace'] = function (p8ydj) {}, _w6o5['addEventListener'] = function (xydp08) {}, _w6o5['contains'] = function (rxp08y) {
                return null;
            }, _w6o5['removeChild'] = function (dxyp) {}, _w6o5;
        }, $hm2['createShaderCondition'] = function (tvois) {
            var f$7923 = this,
                nh9f = function () {
                var lkbr = tvois;
                return f$7923[tvois['replace']('this.', '')];
            };
            return nh9f;
        }, $hm2['EnvConfig'] = null, $hm2['window'] = null, $hm2['_preCreateElement'] = null, $hm2['_inited'] = ![], $hm2['wxRequest'] = null, $hm2['systemInfo'] = null, $hm2['version'] = '0.0.1', $hm2['isZiYu'] = ![], $hm2['isPosMsgYu'] = ![], $hm2['parseXMLFromString'] = function (vitzs4) {
            var rpxq80, vt4i;
            vitzs4 = vitzs4['replace'](/>\s+</g, '><');
            try {
                rpxq80 = new window['Parser']['DOMParser']()['parseFromString'](vitzs4, 'text/xml');
            } catch (i37e) {
                throw '需要引入xml解析库文件';
            }
            return rpxq80;
        }, $hm2['idx'] = 0x1, $hm2;
    }(),
        ea7f9 = function () {
        function r08yp() {}
        xqr8p0(r08yp, 'laya.wx.mini.MiniImage');
        var isvtz4 = r08yp['prototype'];
        return isvtz4['_loadImage'] = function (e9f7a3) {
            var kwlqg = this,
                vtis = ![];
            e9f7a3['indexOf']('layaNativeDir/') == -0x1 && (vtis = !![], e9f7a3 = iszv4['formatURL'](e9f7a3));
            if (!_o164['getFileInfo'](e9f7a3)) {
                if (e9f7a3['indexOf']('http://') != -0x1 || e9f7a3['indexOf']('https://') != -0x1) _o164['downImg'](e9f7a3, new y8rpx(r08yp, r08yp['onDownImgCallBack'], [e9f7a3, kwlqg]), e9f7a3);else r08yp['onCreateImage'](e9f7a3, kwlqg, !![]);
            } else r08yp['onCreateImage'](e9f7a3, kwlqg, !vtis);
        }, r08yp['onDownImgCallBack'] = function (w_l165, si4vto, iazs3e) {
            if (!iazs3e) r08yp['onCreateImage'](w_l165, si4vto);else si4vto['onError'](null);
        }, r08yp['onCreateImage'] = function (r0qp, bgrqk, d8pj0) {
            d8pj0 === void 0x0 && (d8pj0 = ![]);
            var gblw_6;
            if (!d8pj0) {
                var gl56_ = _o164['getFileInfo'](r0qp),
                    o6_514 = gl56_['md5'];
                gblw_6 = _o164['getFileNativePath'](o6_514);
            } else gblw_6 = r0qp;
            if (bgrqk['imgCache'] == null) bgrqk['imgCache'] = {};
            var rx8qp0;
            function its4ov() {
                rx8qp0['onload'] = null, rx8qp0['onerror'] = null, delete bgrqk['imgCache'][r0qp];
            }
            ;
            var f9n$2 = function () {
                its4ov(), bgrqk['onLoaded'](rx8qp0);
            },
                qkwgbl = function () {
                its4ov(), bgrqk['event']('error', 'Load image failed');
            };
            bgrqk['_type'] == 'nativeimage' ? (rx8qp0 = new k8pq['window']['Image'](), rx8qp0['crossOrigin'] = '', rx8qp0['onload'] = f9n$2, rx8qp0['onerror'] = qkwgbl, rx8qp0['src'] = gblw_6, bgrqk['imgCache'][r0qp] = rx8qp0) : new v14to['create'](gblw_6, {
                'onload': f9n$2,
                'onerror': qkwgbl,
                'onCreate': function (hu2f) {
                    rx8qp0 = hu2f, bgrqk['imgCache'][r0qp] = hu2f;
                }
            });
        }, r08yp;
    }(),
        $37f = function () {
        function pd0y8j() {}
        return xqr8p0(pd0y8j, 'laya.wx.mini.MiniInput'), pd0y8j['_createInputElement'] = function () {
            ow16['_initInput'](ow16['area'] = k8pq['createElement']('textarea')), ow16['_initInput'](ow16['input'] = k8pq['createElement']('input')), ow16['inputContainer'] = k8pq['createElement']('div'), ow16['inputContainer']['style']['position'] = 'absolute', ow16['inputContainer']['style']['zIndex'] = 0x186a0, k8pq['container']['appendChild'](ow16['inputContainer']), ow16['inputContainer']['setPos'] = function (m2$, wbk6gl) {
                ow16['inputContainer']['style']['left'] = m2$ + 'px', ow16['inputContainer']['style']['top'] = wbk6gl + 'px';
            }, svi4['stage']['on']('resize', null, pd0y8j['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (wl561) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), dp8jy0['_soundClass'] = v4o1t, dp8jy0['_musicClass'] = v4o1t, window['_videoClass'] = ea3f9;
        }, pd0y8j['_onStageResize'] = function () {
            var ezai = svi4['stage']['_canvasTransform']['identity']();
            ezai['scale'](k8pq['width'] / ais3['canvas']['width'] / h$n2uf['getPixelRatio'](), k8pq['height'] / ais3['canvas']['height'] / h$n2uf['getPixelRatio']());
        }, pd0y8j['wxinputFocus'] = function (rx0y) {
            var $29f7h = ow16['inputElement']['target'];
            if ($29f7h && !$29f7h['editable']) return;
            p8x0q['window']['wx']['offKeyboardConfirm'](), p8x0q['window']['wx']['offKeyboardInput'](), p8x0q['window']['wx']['showKeyboard']({
                'defaultValue': $29f7h['text'],
                'maxLength': $29f7h['maxChars'],
                'multiple': $29f7h['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (p08xy) {},
                'fail': function (_1l5w) {}
            }), p8x0q['window']['wx']['onKeyboardConfirm'](function (sti4o) {
                var e7z9a3 = sti4o ? sti4o['value'] : '';
                $29f7h['text'] = e7z9a3, $29f7h['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), p8x0q['window']['wx']['onKeyboardInput'](function (istze) {
                var uh$2nm = istze ? istze['value'] : '';
                if (!$29f7h['multiline']) {
                    if (uh$2nm['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                $29f7h['text'] = uh$2nm, $29f7h['event']('input');
            });
        }, pd0y8j['inputEnter'] = function () {
            ow16['inputElement']['target']['focus'] = ![];
        }, pd0y8j['wxinputblur'] = function () {
            pd0y8j['hideKeyboard']();
        }, pd0y8j['hideKeyboard'] = function () {
            p8x0q['window']['wx']['offKeyboardConfirm'](), p8x0q['window']['wx']['offKeyboardInput'](), p8x0q['window']['wx']['hideKeyboard']({
                'success': function (_6wlbg) {
                    console['log']('隐藏键盘');
                },
                'fail': function (kgqrlb) {
                    console['log']('隐藏键盘出错:' + (kgqrlb ? kgqrlb['errMsg'] : ''));
                }
            });
        }, pd0y8j;
    }(),
        brlq = function () {
        function qbglkr() {}
        xqr8p0(qbglkr, 'laya.wx.mini.MiniLoader');
        var qlbkwg = qbglkr['prototype'];
        return qlbkwg['load'] = function (v4tois, s4itvz, os41tv, blkwq, fea379) {
            os41tv === void 0x0 && (os41tv = !![]), fea379 === void 0x0 && (fea379 = ![]);
            var svot4 = this;
            svot4['_url'] = v4tois;
            if (v4tois['indexOf']('data:image') === 0x0) svot4['_type'] = s4itvz = 'image';else svot4['_type'] = s4itvz || (s4itvz = svot4['getTypeFromUrl'](v4tois));
            svot4['_cache'] = os41tv, svot4['_data'] = null;
            var h2nuf = 'ascii';
            if (v4tois['indexOf']('.fnt') != -0x1) h2nuf = 'utf8';else s4itvz == 'arraybuffer' && (h2nuf = '');
            ;
            var l1_6w = dp0xy8['getFileExtension'](v4tois);
            if (qbglkr['_fileTypeArr']['indexOf'](l1_6w) != -0x1) p8x0q['EnvConfig']['load']['call'](this, v4tois, s4itvz, os41tv, blkwq, fea379);else {
                if (!_o164['getFileInfo'](v4tois)) {
                    if (v4tois['indexOf']('layaNativeDir/') != -0x1) {
                        if (p8x0q['isZiYu']) {
                            var gw56 = _o164['ziyuFileData'][v4tois];
                            svot4['onLoaded'](gw56);
                            return;
                        } else {
                            cosnole['log']('read read'), _o164['read'](v4tois, h2nuf, new y8rpx(qbglkr, qbglkr['onReadNativeCallBack'], [h2nuf, v4tois, s4itvz, os41tv, blkwq, fea379, svot4]));
                            return;
                        }
                    }
                    if (iszv4['rootPath'] == '') var kbxrg = v4tois;else kbxrg = v4tois['split'](iszv4['rootPath'])[0x0];
                    v4tois['indexOf']('http://') != -0x1 || v4tois['indexOf']('https://') != -0x1 ? p8x0q['EnvConfig']['load']['call'](svot4, v4tois, s4itvz, os41tv, blkwq, fea379) : _o164['readFile'](kbxrg, h2nuf, new y8rpx(qbglkr, qbglkr['onReadNativeCallBack'], [h2nuf, v4tois, s4itvz, os41tv, blkwq, fea379, svot4]), v4tois);
                } else p8x0q['EnvConfig']['load']['call'](this, v4tois, s4itvz, os41tv, blkwq, fea379);
            }
        }, qlbkwg['resMgrLoad'] = function (vt1so4, t5ov41, e7af39, l65_w1, h297f$, saze, vatsi) {
            e7af39 === void 0x0 && (e7af39 = 0x0), l65_w1 === void 0x0 && (l65_w1 = ![]), h297f$ === void 0x0 && (h297f$ = ![]), saze === void 0x0 && (saze = 0x0), vatsi === void 0x0 && (vatsi = 0x3), vt1so4['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', vt1so4), p8x0q['EnvConfig']['resMgrLoad'](vt1so4, (wlb_g6, o1svt4, o1vs4) => {
                qbglkr['prototype']['resMgrLoadCallBack'](wlb_g6, o1svt4, o1vs4, t5ov41);
            }, e7af39, l65_w1, h297f$, saze, vatsi);
        }, qlbkwg['resMgrLoadCallBack'] = function (isetza, f9h72, szti4, gkbxrq) {
            console['log']('buff:::', isetza, szti4, _o164['fileNativeDir'] + '///' + _o164['fileListName']), gkbxrq(isetza, f9h72, szti4);
        }, qlbkwg['clearRes'] = function (xr0y8, dpy0j) {
            dpy0j === void 0x0 && (dpy0j = ![]);
            var d08jy = this;
            d08jy['clearRes'](xr0y8, dpy0j);
            var ze7 = _o164['getFileInfo'](xr0y8);
            if (ze7 && (xr0y8['indexOf']('http://') != -0x1 || xr0y8['indexOf']('https://') != -0x1)) {
                var yprx08 = ze7['md5'],
                    xypd80 = _o164['getFileNativePath'](yprx08);
                _o164['remove'](xypd80);
            }
        }, qbglkr['onReadNativeCallBack'] = function (kbqrxg, jpd0y8, lw1_65, lwbqk, o614_, pr8qkx, $hunm, iasvt, w_g5) {
            lwbqk === void 0x0 && (lwbqk = !![]), pr8qkx === void 0x0 && (pr8qkx = ![]), iasvt === void 0x0 && (iasvt = 0x0);
            if (!iasvt) {
                var az3s;
                if (lw1_65 == 'json' || lw1_65 == 'atlas') az3s = p8x0q['getJson'](w_g5['data']);else lw1_65 == 'xml' ? az3s = dp0xy8['parseXMLFromString'](w_g5['data']) : az3s = w_g5['data'];
                $hunm['onLoaded'](az3s), !p8x0q['isZiYu'] && p8x0q['isPosMsgYu'] && lw1_65 != 'arraybuffer' && wx['postMessage']({
                    'url': jpd0y8,
                    'data': az3s,
                    'isLoad': !![]
                });
            } else iasvt == 0x1 && p8x0q['EnvConfig']['load']['call']($hunm, jpd0y8, lw1_65, lwbqk, o614_, pr8qkx);
        }, wlb6g(qbglkr, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), qbglkr;
    }(),
        _o164 = function (eztias) {
        function vsto4() {
            vsto4['__super']['call'](this);
            ;
        }
        return xqr8p0(vsto4, 'laya.wx.mini.MiniFileMgr', eztias), vsto4['isLoadFile'] = function (pqrk8x) {
            return vsto4['_fileTypeArr']['indexOf'](pqrk8x) != -0x1 ? !![] : ![];
        }, vsto4['getFileInfo'] = function (xpy0) {
            var qr8p0x = xpy0['split']('?')[0x0],
                rp8y0x = vsto4['filesListObj'][qr8p0x];
            if (rp8y0x == null) return null;else return rp8y0x;
            return null;
        }, vsto4['onFileUpdate'] = function (iosvt4, itzsav) {
            var _v45o1 = iosvt4['split']('/'),
                uf2nh$ = _v45o1[_v45o1['length'] - 0x1],
                jyd80 = vsto4['getFileInfo'](itzsav);
            if (jyd80 == null) vsto4['onSaveFile'](itzsav, uf2nh$);else {
                if (jyd80['readyUrl'] != itzsav) vsto4['remove'](uf2nh$, itzsav);
            }
        }, vsto4['exits'] = function (s4io, ae3s) {
            var prxy08 = vsto4['getFileNativePath'](s4io);
            vsto4['fs']['getFileInfo']({
                'filePath': prxy08,
                'success': function (t4o1v5) {
                    ae3s != null && ae3s['runWith']([0x0, t4o1v5]);
                },
                'fail': function (se3az) {
                    ae3s != null && ae3s['runWith']([0x1, se3az]);
                }
            });
        }, vsto4['read'] = function (aez79, ovit4s, p8rqx0, kr8qxp) {
            ovit4s === void 0x0 && (ovit4s = 'ascill'), kr8qxp === void 0x0 && (kr8qxp = '');
            var x0qp;
            kr8qxp != '' ? x0qp = vsto4['getFileNativePath'](aez79) : x0qp = aez79, vsto4['fs']['readFile']({
                'filePath': x0qp,
                'encoding': ovit4s,
                'success': function (h$ufn2) {
                    p8rqx0 != null && p8rqx0['runWith']([0x0, h$ufn2]);
                },
                'fail': function (p0r) {
                    if (p0r && kr8qxp != '') vsto4['down'](kr8qxp, ovit4s, p8rqx0, kr8qxp);else p8rqx0 != null && p8rqx0['runWith']([0x1]);
                }
            });
        }, vsto4['readNativeFile'] = function (azstie, pyd80j) {
            vsto4['fs']['readFile']({
                'filePath': azstie,
                'encoding': '',
                'success': function (az937e) {
                    pyd80j != null && pyd80j['runWith']([0x0]);
                },
                'fail': function (o4_61) {
                    pyd80j != null && pyd80j['runWith']([0x1]);
                }
            });
        }, vsto4['down'] = function ($729f3, szi4, hn2f$, tviz4) {
            szi4 === void 0x0 && (szi4 = 'ascill'), tviz4 === void 0x0 && (tviz4 = '');
            var stzav = vsto4['getFileNativePath'](tviz4),
                ai3esz = vsto4['wxdown']({
                'url': $729f3,
                'filePath': stzav,
                'success': function (gl6kbw) {
                    if (gl6kbw['statusCode'] === 0xc8) vsto4['readFile'](gl6kbw['filePath'], szi4, hn2f$, tviz4);
                },
                'fail': function (dyj80p) {
                    hn2f$ != null && hn2f$['runWith']([0x1, dyj80p]);
                }
            });
            ai3esz['onProgressUpdate'](function ($f92nh) {
                hn2f$ != null && hn2f$['runWith']([0x2, $f92nh['progress']]);
            });
        }, vsto4['readFile'] = function (fn29, savi, $2f93, _o5w16) {
            savi === void 0x0 && (savi = 'ascill'), _o5w16 === void 0x0 && (_o5w16 = ''), vsto4['fs']['readFile']({
                'filePath': fn29,
                'encoding': savi,
                'success': function (az937) {
                    if (fn29['indexOf']('http://') != -0x1 || fn29['indexOf']('https://') != -0x1) vsto4['onFileUpdate'](fn29, _o5w16);
                    $2f93 != null && $2f93['runWith']([0x0, az937]);
                },
                'fail': function (tzsaei) {
                    if (tzsaei) $2f93 != null && $2f93['runWith']([0x1, tzsaei]);
                }
            });
        }, vsto4['downImg'] = function (s4t1o, _l6gb, vt5o14) {
            vt5o14 === void 0x0 && (vt5o14 = '');
            var $97f3 = vsto4['wxdown']({
                'url': s4t1o,
                'success': function (tv14so) {
                    tv14so['statusCode'] === 0xc8 && vsto4['copyFile'](tv14so['tempFilePath'], vt5o14, _l6gb);
                },
                'fail': function (tizae) {
                    _l6gb != null && _l6gb['runWith']([0x1, tizae]);
                }
            });
        }, vsto4['copyFile'] = function (djy8p, ie7za3, $h2f9) {
            var af973e = djy8p['split']('/'),
                a3z79 = af973e[af973e['length'] - 0x1],
                qklrbg = ie7za3['split']('?')[0x0],
                sztei = vsto4['getFileInfo'](ie7za3),
                qlgkb = vsto4['getFileNativePath'](a3z79);
            vsto4['fs']['copyFile']({
                'srcPath': djy8p,
                'destPath': qlgkb,
                'success': function (lkwb6g) {
                    if (!sztei) vsto4['onSaveFile'](ie7za3, a3z79), $h2f9 != null && $h2f9['runWith']([0x0]);else {
                        if (sztei['readyUrl'] != ie7za3) vsto4['remove'](a3z79, ie7za3, $h2f9);
                    }
                },
                'fail': function (l_w56g) {
                    $h2f9 != null && $h2f9['runWith']([0x1, l_w56g]);
                }
            });
        }, vsto4['getFileNativePath'] = function (vso1t4) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + vso1t4;
        }, vsto4['remove'] = function (e3az9, w65l_g, y08rp) {
            w65l_g === void 0x0 && (w65l_g = '');
            var ov15t4 = vsto4['getFileInfo'](w65l_g),
                f2e = vsto4['getFileNativePath'](ov15t4['md5']);
            svi4['loader']['clearRes'](ov15t4['readyUrl']), vsto4['fs']['unlink']({
                'filePath': f2e,
                'success': function (iz3s) {
                    if (w65l_g != '') vsto4['onSaveFile'](w65l_g, e3az9);
                    y08rp != null && y08rp['runWith']([0x0]);
                },
                'fail': function (o4vt1) {}
            });
        }, vsto4['onSaveFile'] = function (qrx, pd80jy) {
            var xqp0r8 = qrx['split']('?')[0x0];
            vsto4['filesListObj'][xqp0r8] = {
                'md5': pd80jy,
                'readyUrl': qrx
            }, vsto4['fs']['writeFile']({
                'filePath': vsto4['fileNativeDir'] + '/' + vsto4['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](vsto4['filesListObj']),
                'success': function (vs1) {
                    console['log']('写入测试测试成功：', vs1);
                },
                'fail': function (bxk8rq) {
                    console['log']('写入测试测试失败：', bxk8rq);
                }
            });
        }, vsto4['existDir'] = function (p8ydx0, xrgk) {
            vsto4['fs']['mkdir']({
                'dirPath': p8ydx0,
                'success': function (blgk6w) {
                    xrgk != null && xrgk['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (tvzsia) {
                    if (tvzsia['errMsg']['indexOf']('file already exists') != -0x1) vsto4['readSync'](vsto4['fileListName'], 'utf8', xrgk);else xrgk != null && xrgk['runWith']([0x1, tvzsia]);
                }
            });
        }, vsto4['readSync'] = function (dy80, o614, ztaiv, bglkqw) {
            o614 === void 0x0 && (o614 = 'ascill'), bglkqw === void 0x0 && (bglkqw = '');
            var $n9h2f = vsto4['getFileNativePath'](dy80),
                fa7e3;
            try {
                fa7e3 = vsto4['fs']['readFileSync']($n9h2f), ztaiv != null && ztaiv['runWith']([0x0, { 'data': fa7e3 }]);
            } catch (lqwgk) {
                ztaiv != null && ztaiv['runWith']([0x1]);
            }
        }, vsto4['readCache'] = function () {}, vsto4['writeCache'] = function ($uhmn) {
            var o5t4v1 = readyUrl['split']('?')[0x0];
            vsto4['filesListObj'][o5t4v1] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, vsto4['fs']['writeFile']({
                'filePath': vsto4['fileNativeDir'] + '/' + vsto4['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](vsto4['filesListObj']),
                'success': function (krqpx8) {},
                'fail': function (xqrk) {}
            });
        }, vsto4['setNativeFileDir'] = function (h9f) {
            vsto4['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + h9f;
        }, vsto4['filesListObj'] = {}, vsto4['fileNativeDir'] = null, vsto4['fileListName'] = 'layaairfiles.txt', vsto4['ziyuFileData'] = {}, wlb6g(vsto4, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), vsto4;
    }(_w15o),
        v4o1t = function (ypx8r) {
        function z37e9() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], z37e9['__super']['call'](this), this['_sound'] = z37e9['_createSound'](), this['_chanell'] = new vt51o4(this['_sound']);
        }
        xqr8p0(z37e9, 'laya.wx.mini.MiniSound', ypx8r);
        var qgxbr = z37e9['prototype'];
        return qgxbr['load'] = function (t1v4o) {
            var vzstia = this;
            t1v4o = iszv4['formatURL'](t1v4o), this['url'] = t1v4o;
            if (z37e9['_audioCache'][t1v4o]) {
                this['event']('complete');
                return;
            }
            function pkr() {
                if (z37e9['_null'] != undefined) vzstia['_sound']['onCanplay'](z37e9['_null']), vzstia['_sound']['onError'](z37e9['_null']);else try {
                    vzstia['_sound']['onCanplay'](null), vzstia['_sound']['onError'](null), z37e9['_null'] = null;
                } catch (ry80xp) {
                    console['warn']('[wxmini] _clearSound:' + ry80xp), vzstia['_sound']['onCanplay'](vt4z), vzstia['_sound']['onError'](vt4z), z37e9['_null'] = vt4z;
                }
            }
            function p0xry() {
                ivo['loaded'] = !![], ivo['event']('complete'), z37e9['_audioCache'][ivo['url']] = ivo;
            }
            function h$2u(it4szv) {
                console['error']('errCode=' + it4szv['errCode'] + '  errMsg=' + it4szv['errMsg']), ivo['event']('error');
            }
            function vt4z() {}
            this['_sound']['onCanplay'](p0xry), this['_sound']['onError'](h$2u), this['_sound']['src'] = t1v4o;
            var ivo = this;
        }, qgxbr['play'] = function (_w5g6, $nh2um) {
            _w5g6 === void 0x0 && (_w5g6 = 0x0), $nh2um === void 0x0 && ($nh2um = 0x0);
            var tzisea, ietsza;
            if (this['url'] == dp8jy0['_tMusic']) {
                if (!z37e9['_musicAudio']) z37e9['_musicAudio'] = this['_sound'];
                tzisea = z37e9['_musicAudio'], ietsza = this['_chanell'];
            } else tzisea = this['_sound'], ietsza = this['_chanell'];
            return tzisea['src'] = this['url'], tzisea['startTime'] = 0x0, ietsza['isStopped'] && (ietsza['url'] = this['url'], ietsza['loops'] = $nh2um, ietsza['startTime'] = _w5g6, ietsza['play'](), dp8jy0['addChannel'](ietsza)), ietsza;
        }, qgxbr['dispose'] = function () {
            var e93a = z37e9['_audioCache'][this['url']];
            e93a && (e93a['src'] = '', delete z37e9['_audioCache'][this['url']]);
        }, e7f93(0x0, qgxbr, 'duration', function () {
            return this['_sound']['duration'];
        }), z37e9['_createSound'] = function () {
            z37e9['_id']++;
            var eiaz3 = p8x0q['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return eiaz3;
        }, z37e9['_musicAudio'] = null, z37e9['_id'] = 0x0, z37e9['_audioCache'] = {}, z37e9['_null'] = undefined, z37e9;
    }(_w15o),
        vt51o4 = function (x0ydp8) {
        function b6w_l(osi) {
            this['_audio'] = null, this['_onEnd'] = null, b6w_l['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = osi, this['_onEnd'] = dp0xy8['bind'](this['__onEnd'], this), osi['onEnded'](this['_onEnd']);
        }
        xqr8p0(b6w_l, 'laya.wx.mini.MiniSoundChannel', x0ydp8);
        var x8rpqk = b6w_l['prototype'];
        return x8rpqk['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (svi4['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, x8rpqk['__onNull'] = function () {}, x8rpqk['play'] = function () {
            this['isStopped'] = ![], dp8jy0['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, x8rpqk['stop'] = function () {
            this['isStopped'] = !![], dp8jy0['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, x8rpqk['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, x8rpqk['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], dp8jy0['addChannel'](this), this['_audio']['play']();
        }, e7f93(0x0, x8rpqk, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), e7f93(0x0, x8rpqk, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), e7f93(0x0, x8rpqk, 'volume', function () {
            return 0x1;
        }, function (esazit) {}), b6w_l['_null'] = undefined, b6w_l;
    }(zasi),
        ea3f9 = function () {
        function klg6bw() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = p8x0q['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        xqr8p0(klg6bw, 'laya.wx.mini.MiniVideo');
        var a7ef3 = klg6bw['prototype'];
        return a7ef3['on'] = function (qblwgk, izet, f9h2n) {
            if (qblwgk == 'loadedmetadata') this['onPlayFunc'] = f9h2n['bind'](izet), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else qblwgk == 'ended' && (this['onEndedFunC'] = f9h2n['bind'](izet), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, a7ef3['onTimeUpdateFunc'] = function (nuf$h2) {
            this['position'] = nuf$h2['position'], this['_duration'] = nuf$h2['duration'];
        }, a7ef3['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, a7ef3['onended'] = function (tziv4s, gbqkl) {
            this['onEndedFunC'] = gbqkl['bind'](tziv4s), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, a7ef3['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, a7ef3['off'] = function (gqkbwl, nf$9, xy8rp) {
            if (gqkbwl == 'loadedmetadata') this['onPlayFunc'] = xy8rp['bind'](nf$9), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else gqkbwl == 'ended' && (this['onEndedFunC'] = xy8rp['bind'](nf$9), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, a7ef3['load'] = function (a3ef97) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = a3ef97;
        }, a7ef3['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, a7ef3['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, a7ef3['size'] = function (e79a, atsz) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = e79a, this['videoElement']['height'] = atsz;
        }, a7ef3['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, a7ef3['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, e7f93(0x0, a7ef3, 'duration', function () {
            return this['_duration'];
        }), e7f93(0x0, a7ef3, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (pqx0r8) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = pqx0r8;
        }), e7f93(0x0, a7ef3, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), e7f93(0x0, a7ef3, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), e7f93(0x0, a7ef3, 'ended', function () {
            return this['videoend'];
        }), e7f93(0x0, a7ef3, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (vs1o4t) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = vs1o4t;
        }), e7f93(0x0, a7ef3, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (rgklbq) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = rgklbq;
        }), e7f93(0x0, a7ef3, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (kg6wbl) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = kg6wbl;
        }), e7f93(0x0, a7ef3, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), e7f93(0x0, a7ef3, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (g6lbk) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = g6lbk;
        }), e7f93(0x0, a7ef3, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (sa3zi) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = sa3zi;
        }), e7f93(0x0, a7ef3, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), e7f93(0x0, a7ef3, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (vs4i) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = vs4i;
        }), e7f93(0x0, a7ef3, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (az3e) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = az3e;
        }), e7f93(0x0, a7ef3, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (djy) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = djy;
        }), klg6bw;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var jd0y in Laya) {
        var j8yd0p = Laya[jd0y];
        j8yd0p && j8yd0p['__isclass'] && (exports[jd0y] = j8yd0p);
    }
});