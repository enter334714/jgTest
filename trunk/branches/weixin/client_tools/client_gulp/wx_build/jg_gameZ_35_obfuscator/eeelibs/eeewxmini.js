var b = wx.$e;
(function (window, document, s9k6) {
    var u3iq = s9k6['un'],
        tlhg$ = s9k6['uns'],
        $igxtj = s9k6['static'],
        gitx$l = s9k6['class'],
        gtrhzl = s9k6['getset'],
        d560kb = s9k6['__newvec'],
        j3suq = laya['utils']['Browser'],
        uq9k = laya['events']['Event'],
        lrthzy = laya['events']['EventDispatcher'],
        $iqxj3 = laya['resource']['HTMLImage'],
        qj3i = laya['utils']['Handler'],
        htlyr = laya['display']['Input'],
        j$xtig = laya['net']['Loader'],
        zyrthl = laya['maths']['Matrix'],
        xiglt$ = laya['renders']['Render'],
        cpao = laya['utils']['RunDriver'],
        _yvz = laya['media']['Sound'],
        ti$lx = laya['media']['SoundChannel'],
        xj$3ig = laya['media']['SoundManager'],
        ryv = laya['display']['Stage'],
        grzt = laya['net']['URL'],
        qi3$jx = laya['utils']['Utils'],
        rfyzv = function () {
        function i3jg$x() {}
        return gitx$l(i3jg$x, 'laya.wx.mini.MiniAdpter'), i3jg$x['getJson'] = function (pmoac7) {
            return JSON['parse'](pmoac7);
        }, i3jg$x['init'] = function (c7a_m, qx) {
            c7a_m === void 0x0 && (c7a_m = ![]), qx === void 0x0 && (qx = ![]);
            if (i3jg$x['_inited']) return;
            i3jg$x['window'] = window;
            if (i3jg$x['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            i3jg$x['_inited'] = !![], i3jg$x['isZiYu'] = qx, i3jg$x['isPosMsgYu'] = c7a_m, i3jg$x['EnvConfig'] = {}, !i3jg$x['isZiYu'] && (lgi$xt['setNativeFileDir']('/layaairGame'), lgi$xt['existDir'](lgi$xt['fileNativeDir'], qj3i['create'](i3jg$x, i3jg$x['onMkdirCallBack']))), i3jg$x['window']['focus'] = function () {}, s9k6['getUrlPath'] = function () {}, i3jg$x['window']['logtime'] = function (d28w15) {}, i3jg$x['window']['alertTimeLog'] = function (tzlgr) {}, i3jg$x['window']['resetShareInfo'] = function () {}, i3jg$x['window']['CanvasRenderingContext2D'] = function () {}, i3jg$x['window']['CanvasRenderingContext2D']['prototype'] = i3jg$x['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], i3jg$x['window']['document']['body']['appendChild'] = function () {}, i3jg$x['EnvConfig']['pixelRatioInt'] = 0x0, cpao['getPixelRatio'] = i3jg$x['pixelRatio'], i3jg$x['_preCreateElement'] = j3suq['createElement'], j3suq['createElement'] = i3jg$x['createElement'], cpao['createShaderCondition'] = i3jg$x['createShaderCondition'], qi3$jx['parseXMLFromString'] = i3jg$x['parseXMLFromString'], htlyr['_createInputElement'] = d068['_createInputElement'], i3jg$x['EnvConfig']['load'] = j$xtig['prototype']['load'], j$xtig['prototype']['load'] = _acm7o['prototype']['load'], i3jg$x['isZiYu'] && c7a_m && wx['onMessage'](function (trzhgl) {
                trzhgl['isLoad'] && (lgi$xt['ziyuFileData'][trzhgl['url']] = trzhgl['data']);
            });
        }, i3jg$x['onMkdirCallBack'] = function (rhglt, $3xq) {
            if (!rhglt) lgi$xt['filesListObj'] = JSON['parse']($3xq['data']);
        }, i3jg$x['pixelRatio'] = function () {
            if (!i3jg$x['EnvConfig']['pixelRatioInt']) try {
                var wd281 = wx['getSystemInfoSync']();
                return i3jg$x['EnvConfig']['pixelRatioInt'] = wd281['pixelRatio'], wd281 = wd281, wd281['pixelRatio'];
            } catch (gxtl) {}
            return i3jg$x['EnvConfig']['pixelRatioInt'];
        }, i3jg$x['createElement'] = function (bs0) {
            if (bs0 == 'canvas') {
                var tjg$ix;
                return i3jg$x['idx'] == 0x1 ? i3jg$x['isZiYu'] ? (tjg$ix = sharedCanvas, tjg$ix['style'] = {}) : tjg$ix = window['canvas'] : tjg$ix = window['wx']['createCanvas'](), i3jg$x['idx']++, tjg$ix;
            } else {
                if (bs0 == 'textarea' || bs0 == 'input') return i3jg$x['onCreateInput'](bs0);else {
                    if (bs0 == 'div') {
                        var j3usq = i3jg$x['_preCreateElement'](bs0);
                        return j3usq['contains'] = function (aom7_c) {
                            return null;
                        }, j3usq['removeChild'] = function (lrfhy) {}, j3usq;
                    } else return i3jg$x['_preCreateElement'](bs0);
                }
            }
        }, i3jg$x['onCreateInput'] = function (_4v7) {
            var omape = i3jg$x['_preCreateElement'](_4v7);
            return omape['focus'] = d068['wxinputFocus'], omape['blur'] = d068['wxinputblur'], omape['style'] = {}, omape['value'] = 0x0, omape['parentElement'] = {}, omape['placeholder'] = {}, omape['type'] = {}, omape['setColor'] = function (rzf4v) {}, omape['setType'] = function (wd08) {}, omape['setFontFace'] = function (fv7_) {}, omape['addEventListener'] = function (iqn3j) {}, omape['contains'] = function (ji3xg$) {
                return null;
            }, omape['removeChild'] = function (mpocea) {}, omape;
        }, i3jg$x['createShaderCondition'] = function (d5wb8) {
            var mc4_a7 = this,
                qn3ij = function () {
                var d5b8w = d5wb8;
                return mc4_a7[d5wb8['replace']('this.', '')];
            };
            return qn3ij;
        }, i3jg$x['EnvConfig'] = null, i3jg$x['window'] = null, i3jg$x['_preCreateElement'] = null, i3jg$x['_inited'] = ![], i3jg$x['wxRequest'] = null, i3jg$x['systemInfo'] = null, i3jg$x['version'] = '0.0.1', i3jg$x['isZiYu'] = ![], i3jg$x['isPosMsgYu'] = ![], i3jg$x['parseXMLFromString'] = function (z_4yfv) {
            var k9n6us, fvryhz;
            z_4yfv = z_4yfv['replace'](/>\s+</g, '><');
            try {
                k9n6us = new window['Parser']['DOMParser']()['parseFromString'](z_4yfv, 'text/xml');
            } catch (kn9su6) {
                throw '需要引入xml解析库文件';
            }
            return k9n6us;
        }, i3jg$x['idx'] = 0x1, i3jg$x;
    }(),
        kb90s = function () {
        function d68b() {}
        gitx$l(d68b, 'laya.wx.mini.MiniImage');
        var xjtg$i = d68b['prototype'];
        return xjtg$i['_loadImage'] = function (ukn69s) {
            var jsn3qu = this,
                fv4_y7 = ![];
            ukn69s['indexOf']('layaNativeDir/') == -0x1 && (fv4_y7 = !![], ukn69s = grzt['formatURL'](ukn69s));
            if (!lgi$xt['getFileInfo'](ukn69s)) {
                if (ukn69s['indexOf']('http://') != -0x1 || ukn69s['indexOf']('https://') != -0x1) lgi$xt['downImg'](ukn69s, new qj3i(d68b, d68b['onDownImgCallBack'], [ukn69s, jsn3qu]), ukn69s);else d68b['onCreateImage'](ukn69s, jsn3qu, !![]);
            } else d68b['onCreateImage'](ukn69s, jsn3qu, !fv4_y7);
        }, d68b['onDownImgCallBack'] = function (tlgx, hglxt$, lxh$g) {
            if (!lxh$g) d68b['onCreateImage'](tlgx, hglxt$);else hglxt$['onError'](null);
        }, d68b['onCreateImage'] = function (y_f, d2w508, gjitx$) {
            gjitx$ === void 0x0 && (gjitx$ = ![]);
            var b9sk;
            if (!gjitx$) {
                var ghlrzt = lgi$xt['getFileInfo'](y_f),
                    zhrtl = ghlrzt['md5'];
                b9sk = lgi$xt['getFileNativePath'](zhrtl);
            } else b9sk = y_f;
            if (d2w508['imgCache'] == null) d2w508['imgCache'] = {};
            var cpao7m;
            function zv4ry() {
                cpao7m['onload'] = null, cpao7m['onerror'] = null, delete d2w508['imgCache'][y_f];
            }
            ;
            var m_4a = function () {
                zv4ry(), d2w508['onLoaded'](cpao7m);
            },
                lfhyr = function () {
                zv4ry(), d2w508['event']('error', 'Load image failed');
            };
            d2w508['_type'] == 'nativeimage' ? (cpao7m = new j3suq['window']['Image'](), cpao7m['crossOrigin'] = '', cpao7m['onload'] = m_4a, cpao7m['onerror'] = lfhyr, cpao7m['src'] = b9sk, d2w508['imgCache'][y_f] = cpao7m) : new $iqxj3['create'](b9sk, {
                'onload': m_4a,
                'onerror': lfhyr,
                'onCreate': function ($gjxt) {
                    cpao7m = $gjxt, d2w508['imgCache'][y_f] = $gjxt;
                }
            });
        }, d68b;
    }(),
        d068 = function () {
        function _4a7() {}
        return gitx$l(_4a7, 'laya.wx.mini.MiniInput'), _4a7['_createInputElement'] = function () {
            htlyr['_initInput'](htlyr['area'] = j3suq['createElement']('textarea')), htlyr['_initInput'](htlyr['input'] = j3suq['createElement']('input')), htlyr['inputContainer'] = j3suq['createElement']('div'), htlyr['inputContainer']['style']['position'] = 'absolute', htlyr['inputContainer']['style']['zIndex'] = 0x186a0, j3suq['container']['appendChild'](htlyr['inputContainer']), htlyr['inputContainer']['setPos'] = function (us3jqn, xigl$) {
                htlyr['inputContainer']['style']['left'] = us3jqn + 'px', htlyr['inputContainer']['style']['top'] = xigl$ + 'px';
            }, s9k6['stage']['on']('resize', null, _4a7['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (hlrzty) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), xj$3ig['_soundClass'] = c_7ma, xj$3ig['_musicClass'] = c_7ma, window['_videoClass'] = gxij$3;
        }, _4a7['_onStageResize'] = function () {
            var v4fa7_ = s9k6['stage']['_canvasTransform']['identity']();
            v4fa7_['scale'](j3suq['width'] / xiglt$['canvas']['width'] / cpao['getPixelRatio'](), j3suq['height'] / xiglt$['canvas']['height'] / cpao['getPixelRatio']());
        }, _4a7['wxinputFocus'] = function (jqi3u) {
            var aopmce = htlyr['inputElement']['target'];
            if (aopmce && !aopmce['editable']) return;
            rfyzv['window']['wx']['offKeyboardConfirm'](), rfyzv['window']['wx']['offKeyboardInput'](), rfyzv['window']['wx']['showKeyboard']({
                'defaultValue': aopmce['text'],
                'maxLength': aopmce['maxChars'],
                'multiple': aopmce['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (sq39nu) {},
                'fail': function (pme) {}
            }), rfyzv['window']['wx']['onKeyboardConfirm'](function (nu9sq) {
                var vrzfhy = nu9sq ? nu9sq['value'] : '';
                aopmce['text'] = vrzfhy, aopmce['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), rfyzv['window']['wx']['onKeyboardInput'](function (iqnj$3) {
                var xlrght = iqnj$3 ? iqnj$3['value'] : '';
                if (!aopmce['multiline']) {
                    if (xlrght['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                aopmce['text'] = xlrght, aopmce['event']('input');
            });
        }, _4a7['inputEnter'] = function () {
            htlyr['inputElement']['target']['focus'] = ![];
        }, _4a7['wxinputblur'] = function () {
            _4a7['hideKeyboard']();
        }, _4a7['hideKeyboard'] = function () {
            rfyzv['window']['wx']['offKeyboardConfirm'](), rfyzv['window']['wx']['offKeyboardInput'](), rfyzv['window']['wx']['hideKeyboard']({
                'success': function (hvzf) {
                    console['log']('隐藏键盘');
                },
                'fail': function (u9bk6) {
                    console['log']('隐藏键盘出错:' + (u9bk6 ? u9bk6['errMsg'] : ''));
                }
            });
        }, _4a7;
    }(),
        _acm7o = function () {
        function inquj() {}
        gitx$l(inquj, 'laya.wx.mini.MiniLoader');
        var _f74a = inquj['prototype'];
        return _f74a['load'] = function (qjn3u, moa7p, u39nqs, acmoe, $itj) {
            u39nqs === void 0x0 && (u39nqs = !![]), $itj === void 0x0 && ($itj = ![]);
            var lxtig$ = this;
            lxtig$['_url'] = qjn3u;
            if (qjn3u['indexOf']('data:image') === 0x0) lxtig$['_type'] = moa7p = 'image';else lxtig$['_type'] = moa7p || (moa7p = lxtig$['getTypeFromUrl'](qjn3u));
            lxtig$['_cache'] = u39nqs, lxtig$['_data'] = null;
            var trghlz = 'ascii';
            if (qjn3u['indexOf']('.fnt') != -0x1) trghlz = 'utf8';else moa7p == 'arraybuffer' && (trghlz = '');
            ;
            var ks609 = qi3$jx['getFileExtension'](qjn3u);
            if (inquj['_fileTypeArr']['indexOf'](ks609) != -0x1) rfyzv['EnvConfig']['load']['call'](this, qjn3u, moa7p, u39nqs, acmoe, $itj);else {
                if (!lgi$xt['getFileInfo'](qjn3u)) {
                    if (qjn3u['indexOf']('layaNativeDir/') != -0x1) {
                        if (rfyzv['isZiYu']) {
                            var ocma_ = lgi$xt['ziyuFileData'][qjn3u];
                            lxtig$['onLoaded'](ocma_);
                            return;
                        } else {
                            cosnole['log']('read read'), lgi$xt['read'](qjn3u, trghlz, new qj3i(inquj, inquj['onReadNativeCallBack'], [trghlz, qjn3u, moa7p, u39nqs, acmoe, $itj, lxtig$]));
                            return;
                        }
                    }
                    if (grzt['rootPath'] == '') var pac7 = qjn3u;else pac7 = qjn3u['split'](grzt['rootPath'])[0x0];
                    qjn3u['indexOf']('http://') != -0x1 || qjn3u['indexOf']('https://') != -0x1 ? rfyzv['EnvConfig']['load']['call'](lxtig$, qjn3u, moa7p, u39nqs, acmoe, $itj) : lgi$xt['readFile'](pac7, trghlz, new qj3i(inquj, inquj['onReadNativeCallBack'], [trghlz, qjn3u, moa7p, u39nqs, acmoe, $itj, lxtig$]), qjn3u);
                } else rfyzv['EnvConfig']['load']['call'](this, qjn3u, moa7p, u39nqs, acmoe, $itj);
            }
        }, _f74a['resMgrLoad'] = function (jun3iq, sn6uk9, tgxh, x$tjig, ma47_v, a7m_oc, unqks9) {
            tgxh === void 0x0 && (tgxh = 0x0), x$tjig === void 0x0 && (x$tjig = ![]), ma47_v === void 0x0 && (ma47_v = ![]), a7m_oc === void 0x0 && (a7m_oc = 0x0), unqks9 === void 0x0 && (unqks9 = 0x3), jun3iq['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', jun3iq), rfyzv['EnvConfig']['resMgrLoad'](jun3iq, (hzfvry, tg$xli, d218w) => {
                inquj['prototype']['resMgrLoadCallBack'](hzfvry, tg$xli, d218w, sn6uk9);
            }, tgxh, x$tjig, ma47_v, a7m_oc, unqks9);
        }, _f74a['resMgrLoadCallBack'] = function (tzrh, xgt$l, mocpa7, s9kun) {
            console['log']('buff:::', tzrh, mocpa7, lgi$xt['fileNativeDir'] + '///' + lgi$xt['fileListName']), s9kun(tzrh, xgt$l, mocpa7);
        }, _f74a['clearRes'] = function (nu9k6s, rhzlf) {
            rhzlf === void 0x0 && (rhzlf = ![]);
            var knu = this;
            knu['clearRes'](nu9k6s, rhzlf);
            var g$tijx = lgi$xt['getFileInfo'](nu9k6s);
            if (g$tijx && (nu9k6s['indexOf']('http://') != -0x1 || nu9k6s['indexOf']('https://') != -0x1)) {
                var tzhryl = g$tijx['md5'],
                    zghltr = lgi$xt['getFileNativePath'](tzhryl);
                lgi$xt['remove'](zghltr);
            }
        }, inquj['onReadNativeCallBack'] = function (d58, vy47f, ujqn3, _7y4v, z4fvyr, qnjiu3, b90ks6, xrthlg, zthgrl) {
            _7y4v === void 0x0 && (_7y4v = !![]), qnjiu3 === void 0x0 && (qnjiu3 = ![]), xrthlg === void 0x0 && (xrthlg = 0x0);
            if (!xrthlg) {
                var $ijnq;
                if (ujqn3 == 'json' || ujqn3 == 'atlas') $ijnq = rfyzv['getJson'](zthgrl['data']);else ujqn3 == 'xml' ? $ijnq = qi3$jx['parseXMLFromString'](zthgrl['data']) : $ijnq = zthgrl['data'];
                b90ks6['onLoaded']($ijnq), !rfyzv['isZiYu'] && rfyzv['isPosMsgYu'] && ujqn3 != 'arraybuffer' && wx['postMessage']({
                    'url': vy47f,
                    'data': $ijnq,
                    'isLoad': !![]
                });
            } else xrthlg == 0x1 && rfyzv['EnvConfig']['load']['call'](b90ks6, vy47f, ujqn3, _7y4v, z4fvyr, qnjiu3);
        }, $igxtj(inquj, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), inquj;
    }(),
        lgi$xt = function (d80bw5) {
        function b5d08() {
            b5d08['__super']['call'](this);
            ;
        }
        return gitx$l(b5d08, 'laya.wx.mini.MiniFileMgr', d80bw5), b5d08['isLoadFile'] = function (xhg$) {
            return b5d08['_fileTypeArr']['indexOf'](xhg$) != -0x1 ? !![] : ![];
        }, b5d08['getFileInfo'] = function (d50k) {
            var flyz = d50k['split']('?')[0x0],
                u3nsqj = b5d08['filesListObj'][flyz];
            if (u3nsqj == null) return null;else return u3nsqj;
            return null;
        }, b5d08['onFileUpdate'] = function (vyrfz, d806b5) {
            var un93 = vyrfz['split']('/'),
                k9s06b = un93[un93['length'] - 0x1],
                uin3 = b5d08['getFileInfo'](d806b5);
            if (uin3 == null) b5d08['onSaveFile'](d806b5, k9s06b);else {
                if (uin3['readyUrl'] != d806b5) b5d08['remove'](k9s06b, d806b5);
            }
        }, b5d08['exits'] = function (lrgthz, it$gjx) {
            var j3x$i = b5d08['getFileNativePath'](lrgthz);
            b5d08['fs']['getFileInfo']({
                'filePath': j3x$i,
                'success': function (avm4) {
                    it$gjx != null && it$gjx['runWith']([0x0, avm4]);
                },
                'fail': function (ltxrgh) {
                    it$gjx != null && it$gjx['runWith']([0x1, ltxrgh]);
                }
            });
        }, b5d08['read'] = function (emcp, yrzf4, pcoma7, knsuq) {
            yrzf4 === void 0x0 && (yrzf4 = 'ascill'), knsuq === void 0x0 && (knsuq = '');
            var u9qnsk;
            knsuq != '' ? u9qnsk = b5d08['getFileNativePath'](emcp) : u9qnsk = emcp, b5d08['fs']['readFile']({
                'filePath': u9qnsk,
                'encoding': yrzf4,
                'success': function (xi$gl) {
                    pcoma7 != null && pcoma7['runWith']([0x0, xi$gl]);
                },
                'fail': function (yrf4z) {
                    if (yrf4z && knsuq != '') b5d08['down'](knsuq, yrzf4, pcoma7, knsuq);else pcoma7 != null && pcoma7['runWith']([0x1]);
                }
            });
        }, b5d08['readNativeFile'] = function (q9nksu, i3jx) {
            b5d08['fs']['readFile']({
                'filePath': q9nksu,
                'encoding': '',
                'success': function (igxt$l) {
                    i3jx != null && i3jx['runWith']([0x0]);
                },
                'fail': function (_7avf) {
                    i3jx != null && i3jx['runWith']([0x1]);
                }
            });
        }, b5d08['down'] = function (vyf7_4, $ixgl, _mv7, x3jg) {
            $ixgl === void 0x0 && ($ixgl = 'ascill'), x3jg === void 0x0 && (x3jg = '');
            var hyzrvf = b5d08['getFileNativePath'](x3jg),
                tx$ji = b5d08['wxdown']({
                'url': vyf7_4,
                'filePath': hyzrvf,
                'success': function (m4a7v_) {
                    if (m4a7v_['statusCode'] === 0xc8) b5d08['readFile'](m4a7v_['filePath'], $ixgl, _mv7, x3jg);
                },
                'fail': function (rhlyfz) {
                    _mv7 != null && _mv7['runWith']([0x1, rhlyfz]);
                }
            });
            tx$ji['onProgressUpdate'](function (lxtgrh) {
                _mv7 != null && _mv7['runWith']([0x2, lxtgrh['progress']]);
            });
        }, b5d08['readFile'] = function ($gtji, gxil, x3qij, mapc) {
            gxil === void 0x0 && (gxil = 'ascill'), mapc === void 0x0 && (mapc = ''), b5d08['fs']['readFile']({
                'filePath': $gtji,
                'encoding': gxil,
                'success': function (y_vzf) {
                    if ($gtji['indexOf']('http://') != -0x1 || $gtji['indexOf']('https://') != -0x1) b5d08['onFileUpdate']($gtji, mapc);
                    x3qij != null && x3qij['runWith']([0x0, y_vzf]);
                },
                'fail': function (sn93uq) {
                    if (sn93uq) x3qij != null && x3qij['runWith']([0x1, sn93uq]);
                }
            });
        }, b5d08['downImg'] = function (z_vy4f, mpoca7, k6sub9) {
            k6sub9 === void 0x0 && (k6sub9 = '');
            var gxli$ = b5d08['wxdown']({
                'url': z_vy4f,
                'success': function (fryhlz) {
                    fryhlz['statusCode'] === 0xc8 && b5d08['copyFile'](fryhlz['tempFilePath'], k6sub9, mpoca7);
                },
                'fail': function (d1w85) {
                    mpoca7 != null && mpoca7['runWith']([0x1, d1w85]);
                }
            });
        }, b5d08['copyFile'] = function (_ma7v, n3iju, bw) {
            var $tgil = _ma7v['split']('/'),
                yz4rfv = $tgil[$tgil['length'] - 0x1],
                glxit = n3iju['split']('?')[0x0],
                u6k9sn = b5d08['getFileInfo'](n3iju),
                v4_7m = b5d08['getFileNativePath'](yz4rfv);
            b5d08['fs']['copyFile']({
                'srcPath': _ma7v,
                'destPath': v4_7m,
                'success': function (ilgx$t) {
                    if (!u6k9sn) b5d08['onSaveFile'](n3iju, yz4rfv), bw != null && bw['runWith']([0x0]);else {
                        if (u6k9sn['readyUrl'] != n3iju) b5d08['remove'](yz4rfv, n3iju, bw);
                    }
                },
                'fail': function (ksn69u) {
                    bw != null && bw['runWith']([0x1, ksn69u]);
                }
            });
        }, b5d08['getFileNativePath'] = function (jni3uq) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + jni3uq;
        }, b5d08['remove'] = function (fzryl, opca7, v7fy) {
            opca7 === void 0x0 && (opca7 = '');
            var j3$i = b5d08['getFileInfo'](opca7),
                njui = b5d08['getFileNativePath'](j3$i['md5']);
            s9k6['loader']['clearRes'](j3$i['readyUrl']), b5d08['fs']['unlink']({
                'filePath': njui,
                'success': function (pacmoe) {
                    if (opca7 != '') b5d08['onSaveFile'](opca7, fzryl);
                    v7fy != null && v7fy['runWith']([0x0]);
                },
                'fail': function (k9qu) {}
            });
        }, b5d08['onSaveFile'] = function (fv4ry, a7pcmo) {
            var uqs = fv4ry['split']('?')[0x0];
            b5d08['filesListObj'][uqs] = {
                'md5': a7pcmo,
                'readyUrl': fv4ry
            }, b5d08['fs']['writeFile']({
                'filePath': b5d08['fileNativeDir'] + '/' + b5d08['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](b5d08['filesListObj']),
                'success': function (w5820d) {
                    console['log']('写入测试测试成功：', w5820d);
                },
                'fail': function (xg3j$) {
                    console['log']('写入测试测试失败：', xg3j$);
                }
            });
        }, b5d08['existDir'] = function (vfz, bdk065) {
            b5d08['fs']['mkdir']({
                'dirPath': vfz,
                'success': function (oca7) {
                    bdk065 != null && bdk065['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (k6b90) {
                    if (k6b90['errMsg']['indexOf']('file already exists') != -0x1) b5d08['readSync'](b5d08['fileListName'], 'utf8', bdk065);else bdk065 != null && bdk065['runWith']([0x1, k6b90]);
                }
            });
        }, b5d08['readSync'] = function (u9qkn, k6s0b, iqxj$3, n9su6k) {
            k6s0b === void 0x0 && (k6s0b = 'ascill'), n9su6k === void 0x0 && (n9su6k = '');
            var rtlhx = b5d08['getFileNativePath'](u9qkn),
                nj$3iq;
            try {
                nj$3iq = b5d08['fs']['readFileSync'](rtlhx), iqxj$3 != null && iqxj$3['runWith']([0x0, { 'data': nj$3iq }]);
            } catch (vrzf4y) {
                iqxj$3 != null && iqxj$3['runWith']([0x1]);
            }
        }, b5d08['readCache'] = function () {}, b5d08['writeCache'] = function (ap7omc) {
            var vy7f4_ = readyUrl['split']('?')[0x0];
            b5d08['filesListObj'][vy7f4_] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, b5d08['fs']['writeFile']({
                'filePath': b5d08['fileNativeDir'] + '/' + b5d08['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](b5d08['filesListObj']),
                'success': function (db6k0) {},
                'fail': function (f_a7v4) {}
            });
        }, b5d08['setNativeFileDir'] = function (ceomp) {
            b5d08['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + ceomp;
        }, b5d08['filesListObj'] = {}, b5d08['fileNativeDir'] = null, b5d08['fileListName'] = 'layaairfiles.txt', b5d08['ziyuFileData'] = {}, $igxtj(b5d08, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), b5d08;
    }(lrthzy),
        c_7ma = function (a_cm47) {
        function js3qu() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], js3qu['__super']['call'](this), this['_sound'] = js3qu['_createSound'](), this['_chanell'] = new ix$tjg(this['_sound']);
        }
        gitx$l(js3qu, 'laya.wx.mini.MiniSound', a_cm47);
        var caepm = js3qu['prototype'];
        return caepm['load'] = function (d68b05) {
            var _4vyz = this;
            d68b05 = grzt['formatURL'](d68b05), this['url'] = d68b05;
            if (js3qu['_audioCache'][d68b05]) {
                this['event']('complete');
                return;
            }
            function rty() {
                if (js3qu['_null'] != undefined) _4vyz['_sound']['onCanplay'](js3qu['_null']), _4vyz['_sound']['onError'](js3qu['_null']);else try {
                    _4vyz['_sound']['onCanplay'](null), _4vyz['_sound']['onError'](null), js3qu['_null'] = null;
                } catch (us69kn) {
                    console['warn']('[wxmini] _clearSound:' + us69kn), _4vyz['_sound']['onCanplay'](qsn), _4vyz['_sound']['onError'](qsn), js3qu['_null'] = qsn;
                }
            }
            function d52w80() {
                nuqi3j['loaded'] = !![], nuqi3j['event']('complete'), js3qu['_audioCache'][nuqi3j['url']] = nuqi3j;
            }
            function zthry($gh) {
                console['error']('errCode=' + $gh['errCode'] + '  errMsg=' + $gh['errMsg']), nuqi3j['event']('error');
            }
            function qsn() {}
            this['_sound']['onCanplay'](d52w80), this['_sound']['onError'](zthry), this['_sound']['src'] = d68b05;
            var nuqi3j = this;
        }, caepm['play'] = function (gx$ijt, jn3) {
            gx$ijt === void 0x0 && (gx$ijt = 0x0), jn3 === void 0x0 && (jn3 = 0x0);
            var b805d6, dw205;
            if (this['url'] == xj$3ig['_tMusic']) {
                if (!js3qu['_musicAudio']) js3qu['_musicAudio'] = this['_sound'];
                b805d6 = js3qu['_musicAudio'], dw205 = this['_chanell'];
            } else b805d6 = this['_sound'], dw205 = this['_chanell'];
            return b805d6['src'] = this['url'], b805d6['startTime'] = 0x0, dw205['isStopped'] && (dw205['url'] = this['url'], dw205['loops'] = jn3, dw205['startTime'] = gx$ijt, dw205['play'](), xj$3ig['addChannel'](dw205)), dw205;
        }, caepm['dispose'] = function () {
            var bus = js3qu['_audioCache'][this['url']];
            bus && (bus['src'] = '', delete js3qu['_audioCache'][this['url']]);
        }, gtrhzl(0x0, caepm, 'duration', function () {
            return this['_sound']['duration'];
        }), js3qu['_createSound'] = function () {
            js3qu['_id']++;
            var d218 = rfyzv['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return d218;
        }, js3qu['_musicAudio'] = null, js3qu['_id'] = 0x0, js3qu['_audioCache'] = {}, js3qu['_null'] = undefined, js3qu;
    }(lrthzy),
        ix$tjg = function (omac_) {
        function lzryh(gtlrx) {
            this['_audio'] = null, this['_onEnd'] = null, lzryh['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = gtlrx, this['_onEnd'] = qi3$jx['bind'](this['__onEnd'], this), gtlrx['onEnded'](this['_onEnd']);
        }
        gitx$l(lzryh, 'laya.wx.mini.MiniSoundChannel', omac_);
        var coa = lzryh['prototype'];
        return coa['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (s9k6['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, coa['__onNull'] = function () {}, coa['play'] = function () {
            this['isStopped'] = ![], xj$3ig['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, coa['stop'] = function () {
            this['isStopped'] = !![], xj$3ig['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, coa['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, coa['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], xj$3ig['addChannel'](this), this['_audio']['play']();
        }, gtrhzl(0x0, coa, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), gtrhzl(0x0, coa, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), gtrhzl(0x0, coa, 'volume', function () {
            return 0x1;
        }, function (ghtlrz) {}), lzryh['_null'] = undefined, lzryh;
    }(ti$lx),
        gxij$3 = function () {
        function q3j$n() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = rfyzv['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        gitx$l(q3j$n, 'laya.wx.mini.MiniVideo');
        var n9sukq = q3j$n['prototype'];
        return n9sukq['on'] = function (b5k0, compae, _coam) {
            if (b5k0 == 'loadedmetadata') this['onPlayFunc'] = _coam['bind'](compae), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else b5k0 == 'ended' && (this['onEndedFunC'] = _coam['bind'](compae), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, n9sukq['onTimeUpdateFunc'] = function (buks96) {
            this['position'] = buks96['position'], this['_duration'] = buks96['duration'];
        }, n9sukq['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, n9sukq['onended'] = function (igj$3, vma4_7) {
            this['onEndedFunC'] = vma4_7['bind'](igj$3), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, n9sukq['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, n9sukq['off'] = function (kb0, epoca, vyhzrf) {
            if (kb0 == 'loadedmetadata') this['onPlayFunc'] = vyhzrf['bind'](epoca), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else kb0 == 'ended' && (this['onEndedFunC'] = vyhzrf['bind'](epoca), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, n9sukq['load'] = function (ui3qn) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = ui3qn;
        }, n9sukq['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, n9sukq['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, n9sukq['size'] = function (aoepmc, bkus) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = aoepmc, this['videoElement']['height'] = bkus;
        }, n9sukq['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, n9sukq['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, gtrhzl(0x0, n9sukq, 'duration', function () {
            return this['_duration'];
        }), gtrhzl(0x0, n9sukq, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (yrlth) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = yrlth;
        }), gtrhzl(0x0, n9sukq, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), gtrhzl(0x0, n9sukq, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), gtrhzl(0x0, n9sukq, 'ended', function () {
            return this['videoend'];
        }), gtrhzl(0x0, n9sukq, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (gzthlr) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = gzthlr;
        }), gtrhzl(0x0, n9sukq, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (zhylrt) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = zhylrt;
        }), gtrhzl(0x0, n9sukq, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (i$j3qn) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = i$j3qn;
        }), gtrhzl(0x0, n9sukq, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), gtrhzl(0x0, n9sukq, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (zhrgt) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = zhrgt;
        }), gtrhzl(0x0, n9sukq, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (vf4_a7) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = vf4_a7;
        }), gtrhzl(0x0, n9sukq, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), gtrhzl(0x0, n9sukq, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (cpa7m) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = cpa7m;
        }), gtrhzl(0x0, n9sukq, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (_aom7) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = _aom7;
        }), gtrhzl(0x0, n9sukq, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (k5b6) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = k5b6;
        }), q3j$n;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var vyrf in Laya) {
        var a74m = Laya[vyrf];
        a74m && a74m['__isclass'] && (exports[vyrf] = a74m);
    }
});