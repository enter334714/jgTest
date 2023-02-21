var b = wx.$e;
(function (window, document, nskqu9) {
    var zyrfvh = nskqu9['un'],
        nji$3q = nskqu9['uns'],
        ijx$3g = nskqu9['static'],
        a7ocpm = nskqu9['class'],
        lg$it = nskqu9['getset'],
        wd2815 = nskqu9['__newvec'],
        yf4_v = laya['utils']['Browser'],
        sb906k = laya['events']['Event'],
        v4_7am = laya['events']['EventDispatcher'],
        ep = laya['resource']['HTMLImage'],
        gxji = laya['utils']['Handler'],
        b086d = laya['display']['Input'],
        dw0258 = laya['net']['Loader'],
        pocae = laya['maths']['Matrix'],
        yhvrfz = laya['renders']['Render'],
        gtlhx = laya['utils']['RunDriver'],
        gxi$3 = laya['media']['Sound'],
        hyvzf = laya['media']['SoundChannel'],
        bk6 = laya['media']['SoundManager'],
        vy4fr = laya['display']['Stage'],
        i$g = laya['net']['URL'],
        kn9su6 = laya['utils']['Utils'],
        vfrhz = function () {
        function yhzrlt() {}
        return a7ocpm(yhzrlt, 'laya.wx.mini.MiniAdpter'), yhzrlt['getJson'] = function (ji3n$) {
            return JSON['parse'](ji3n$);
        }, yhzrlt['init'] = function (tlzh, _mv4) {
            tlzh === void 0x0 && (tlzh = ![]), _mv4 === void 0x0 && (_mv4 = ![]);
            if (yhzrlt['_inited']) return;
            yhzrlt['window'] = window;
            if (yhzrlt['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            yhzrlt['_inited'] = !![], yhzrlt['isZiYu'] = _mv4, yhzrlt['isPosMsgYu'] = tlzh, yhzrlt['EnvConfig'] = {}, !yhzrlt['isZiYu'] && (wb850['setNativeFileDir']('/layaairGame'), wb850['existDir'](wb850['fileNativeDir'], gxji['create'](yhzrlt, yhzrlt['onMkdirCallBack']))), yhzrlt['window']['focus'] = function () {}, nskqu9['getUrlPath'] = function () {}, yhzrlt['window']['logtime'] = function (snku9) {}, yhzrlt['window']['alertTimeLog'] = function (a74vf_) {}, yhzrlt['window']['resetShareInfo'] = function () {}, yhzrlt['window']['CanvasRenderingContext2D'] = function () {}, yhzrlt['window']['CanvasRenderingContext2D']['prototype'] = yhzrlt['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], yhzrlt['window']['document']['body']['appendChild'] = function () {}, yhzrlt['EnvConfig']['pixelRatioInt'] = 0x0, gtlhx['getPixelRatio'] = yhzrlt['pixelRatio'], yhzrlt['_preCreateElement'] = yf4_v['createElement'], yf4_v['createElement'] = yhzrlt['createElement'], gtlhx['createShaderCondition'] = yhzrlt['createShaderCondition'], kn9su6['parseXMLFromString'] = yhzrlt['parseXMLFromString'], b086d['_createInputElement'] = s6nu9k['_createInputElement'], yhzrlt['EnvConfig']['load'] = dw0258['prototype']['load'], dw0258['prototype']['load'] = xj3$q['prototype']['load'], yhzrlt['isZiYu'] && tlzh && wx['onMessage'](function (lyhf) {
                lyhf['isLoad'] && (wb850['ziyuFileData'][lyhf['url']] = lyhf['data']);
            });
        }, yhzrlt['onMkdirCallBack'] = function (apome, zlhfyr) {
            if (!apome) wb850['filesListObj'] = JSON['parse'](zlhfyr['data']);
        }, yhzrlt['pixelRatio'] = function () {
            if (!yhzrlt['EnvConfig']['pixelRatioInt']) try {
                var hlfyrz = wx['getSystemInfoSync']();
                return yhzrlt['EnvConfig']['pixelRatioInt'] = hlfyrz['pixelRatio'], hlfyrz = hlfyrz, hlfyrz['pixelRatio'];
            } catch (b0kd5) {}
            return yhzrlt['EnvConfig']['pixelRatioInt'];
        }, yhzrlt['createElement'] = function (htlgr) {
            if (htlgr == 'canvas') {
                var mao_c7;
                return yhzrlt['idx'] == 0x1 ? yhzrlt['isZiYu'] ? (mao_c7 = sharedCanvas, mao_c7['style'] = {}) : mao_c7 = window['canvas'] : mao_c7 = window['wx']['createCanvas'](), yhzrlt['idx']++, mao_c7;
            } else {
                if (htlgr == 'textarea' || htlgr == 'input') return yhzrlt['onCreateInput'](htlgr);else {
                    if (htlgr == 'div') {
                        var n69 = yhzrlt['_preCreateElement'](htlgr);
                        return n69['contains'] = function (ampceo) {
                            return null;
                        }, n69['removeChild'] = function (zvhyfr) {}, n69;
                    } else return yhzrlt['_preCreateElement'](htlgr);
                }
            }
        }, yhzrlt['onCreateInput'] = function (vz4f_y) {
            var a_7m4c = yhzrlt['_preCreateElement'](vz4f_y);
            return a_7m4c['focus'] = s6nu9k['wxinputFocus'], a_7m4c['blur'] = s6nu9k['wxinputblur'], a_7m4c['style'] = {}, a_7m4c['value'] = 0x0, a_7m4c['parentElement'] = {}, a_7m4c['placeholder'] = {}, a_7m4c['type'] = {}, a_7m4c['setColor'] = function (vy4f_) {}, a_7m4c['setType'] = function (rhxglt) {}, a_7m4c['setFontFace'] = function (rvyfzh) {}, a_7m4c['addEventListener'] = function (xh) {}, a_7m4c['contains'] = function (i3juq) {
                return null;
            }, a_7m4c['removeChild'] = function (s90) {}, a_7m4c;
        }, yhzrlt['createShaderCondition'] = function ($n3ji) {
            var ltzhr = this,
                a7mpo = function () {
                var zglht = $n3ji;
                return ltzhr[$n3ji['replace']('this.', '')];
            };
            return a7mpo;
        }, yhzrlt['EnvConfig'] = null, yhzrlt['window'] = null, yhzrlt['_preCreateElement'] = null, yhzrlt['_inited'] = ![], yhzrlt['wxRequest'] = null, yhzrlt['systemInfo'] = null, yhzrlt['version'] = '0.0.1', yhzrlt['isZiYu'] = ![], yhzrlt['isPosMsgYu'] = ![], yhzrlt['parseXMLFromString'] = function (lzyrfh) {
            var g$jxi, u3iqj;
            lzyrfh = lzyrfh['replace'](/>\s+</g, '><');
            try {
                g$jxi = new window['Parser']['DOMParser']()['parseFromString'](lzyrfh, 'text/xml');
            } catch (pacme) {
                throw '需要引入xml解析库文件';
            }
            return g$jxi;
        }, yhzrlt['idx'] = 0x1, yhzrlt;
    }(),
        fvryhz = function () {
        function knqsu9() {}
        a7ocpm(knqsu9, 'laya.wx.mini.MiniImage');
        var gxtij$ = knqsu9['prototype'];
        return gxtij$['_loadImage'] = function (tjgxi) {
            var xgj$t = this,
                yfzvh = ![];
            tjgxi['indexOf']('layaNativeDir/') == -0x1 && (yfzvh = !![], tjgxi = i$g['formatURL'](tjgxi));
            if (!wb850['getFileInfo'](tjgxi)) {
                if (tjgxi['indexOf']('http://') != -0x1 || tjgxi['indexOf']('https://') != -0x1) wb850['downImg'](tjgxi, new gxji(knqsu9, knqsu9['onDownImgCallBack'], [tjgxi, xgj$t]), tjgxi);else knqsu9['onCreateImage'](tjgxi, xgj$t, !![]);
            } else knqsu9['onCreateImage'](tjgxi, xgj$t, !yfzvh);
        }, knqsu9['onDownImgCallBack'] = function ($jxq3i, s9kb, vfy) {
            if (!vfy) knqsu9['onCreateImage']($jxq3i, s9kb);else s9kb['onError'](null);
        }, knqsu9['onCreateImage'] = function (usn39q, i$x3j, ksb9u) {
            ksb9u === void 0x0 && (ksb9u = ![]);
            var ig3$jx;
            if (!ksb9u) {
                var ilg$x = wb850['getFileInfo'](usn39q),
                    fz4r = ilg$x['md5'];
                ig3$jx = wb850['getFileNativePath'](fz4r);
            } else ig3$jx = usn39q;
            if (i$x3j['imgCache'] == null) i$x3j['imgCache'] = {};
            var s9kbu;
            function w50() {
                s9kbu['onload'] = null, s9kbu['onerror'] = null, delete i$x3j['imgCache'][usn39q];
            }
            ;
            var _vy4zf = function () {
                w50(), i$x3j['onLoaded'](s9kbu);
            },
                yv4fz_ = function () {
                w50(), i$x3j['event']('error', 'Load image failed');
            };
            i$x3j['_type'] == 'nativeimage' ? (s9kbu = new yf4_v['window']['Image'](), s9kbu['crossOrigin'] = '', s9kbu['onload'] = _vy4zf, s9kbu['onerror'] = yv4fz_, s9kbu['src'] = ig3$jx, i$x3j['imgCache'][usn39q] = s9kbu) : new ep['create'](ig3$jx, {
                'onload': _vy4zf,
                'onerror': yv4fz_,
                'onCreate': function (ujnqi) {
                    s9kbu = ujnqi, i$x3j['imgCache'][usn39q] = ujnqi;
                }
            });
        }, knqsu9;
    }(),
        s6nu9k = function () {
        function p7ca() {}
        return a7ocpm(p7ca, 'laya.wx.mini.MiniInput'), p7ca['_createInputElement'] = function () {
            b086d['_initInput'](b086d['area'] = yf4_v['createElement']('textarea')), b086d['_initInput'](b086d['input'] = yf4_v['createElement']('input')), b086d['inputContainer'] = yf4_v['createElement']('div'), b086d['inputContainer']['style']['position'] = 'absolute', b086d['inputContainer']['style']['zIndex'] = 0x186a0, yf4_v['container']['appendChild'](b086d['inputContainer']), b086d['inputContainer']['setPos'] = function (ht$, b96dk) {
                b086d['inputContainer']['style']['left'] = ht$ + 'px', b086d['inputContainer']['style']['top'] = b96dk + 'px';
            }, nskqu9['stage']['on']('resize', null, p7ca['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (m_a) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), bk6['_soundClass'] = k6d5b0, bk6['_musicClass'] = k6d5b0, window['_videoClass'] = u9bks;
        }, p7ca['_onStageResize'] = function () {
            var sk9nuq = nskqu9['stage']['_canvasTransform']['identity']();
            sk9nuq['scale'](yf4_v['width'] / yhvrfz['canvas']['width'] / gtlhx['getPixelRatio'](), yf4_v['height'] / yhvrfz['canvas']['height'] / gtlhx['getPixelRatio']());
        }, p7ca['wxinputFocus'] = function (yfhzvr) {
            var s3qu9 = b086d['inputElement']['target'];
            if (s3qu9 && !s3qu9['editable']) return;
            vfrhz['window']['wx']['offKeyboardConfirm'](), vfrhz['window']['wx']['offKeyboardInput'](), vfrhz['window']['wx']['showKeyboard']({
                'defaultValue': s3qu9['text'],
                'maxLength': s3qu9['maxChars'],
                'multiple': s3qu9['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (lrtgz) {},
                'fail': function (qks9un) {}
            }), vfrhz['window']['wx']['onKeyboardConfirm'](function (kqnu9) {
                var d0bw85 = kqnu9 ? kqnu9['value'] : '';
                s3qu9['text'] = d0bw85, s3qu9['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), vfrhz['window']['wx']['onKeyboardInput'](function (itlgx$) {
                var bk906d = itlgx$ ? itlgx$['value'] : '';
                if (!s3qu9['multiline']) {
                    if (bk906d['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                s3qu9['text'] = bk906d, s3qu9['event']('input');
            });
        }, p7ca['inputEnter'] = function () {
            b086d['inputElement']['target']['focus'] = ![];
        }, p7ca['wxinputblur'] = function () {
            p7ca['hideKeyboard']();
        }, p7ca['hideKeyboard'] = function () {
            vfrhz['window']['wx']['offKeyboardConfirm'](), vfrhz['window']['wx']['offKeyboardInput'](), vfrhz['window']['wx']['hideKeyboard']({
                'success': function (b8560d) {
                    console['log']('隐藏键盘');
                },
                'fail': function (a7fv4) {
                    console['log']('隐藏键盘出错:' + (a7fv4 ? a7fv4['errMsg'] : ''));
                }
            });
        }, p7ca;
    }(),
        xj3$q = function () {
        function _7vm4a() {}
        a7ocpm(_7vm4a, 'laya.wx.mini.MiniLoader');
        var fy4z_ = _7vm4a['prototype'];
        return fy4z_['load'] = function (rzv, mv_a4, vy_z4f, emp, usk9n6) {
            vy_z4f === void 0x0 && (vy_z4f = !![]), usk9n6 === void 0x0 && (usk9n6 = ![]);
            var q9s = this;
            q9s['_url'] = rzv;
            if (rzv['indexOf']('data:image') === 0x0) q9s['_type'] = mv_a4 = 'image';else q9s['_type'] = mv_a4 || (mv_a4 = q9s['getTypeFromUrl'](rzv));
            q9s['_cache'] = vy_z4f, q9s['_data'] = null;
            var i3jx = 'ascii';
            if (rzv['indexOf']('.fnt') != -0x1) i3jx = 'utf8';else mv_a4 == 'arraybuffer' && (i3jx = '');
            ;
            var rlgxht = kn9su6['getFileExtension'](rzv);
            if (_7vm4a['_fileTypeArr']['indexOf'](rlgxht) != -0x1) vfrhz['EnvConfig']['load']['call'](this, rzv, mv_a4, vy_z4f, emp, usk9n6);else {
                if (!wb850['getFileInfo'](rzv)) {
                    if (rzv['indexOf']('layaNativeDir/') != -0x1) {
                        if (vfrhz['isZiYu']) {
                            var xgtij$ = wb850['ziyuFileData'][rzv];
                            q9s['onLoaded'](xgtij$);
                            return;
                        } else {
                            cosnole['log']('read read'), wb850['read'](rzv, i3jx, new gxji(_7vm4a, _7vm4a['onReadNativeCallBack'], [i3jx, rzv, mv_a4, vy_z4f, emp, usk9n6, q9s]));
                            return;
                        }
                    }
                    if (i$g['rootPath'] == '') var vyzf4 = rzv;else vyzf4 = rzv['split'](i$g['rootPath'])[0x0];
                    rzv['indexOf']('http://') != -0x1 || rzv['indexOf']('https://') != -0x1 ? vfrhz['EnvConfig']['load']['call'](q9s, rzv, mv_a4, vy_z4f, emp, usk9n6) : wb850['readFile'](vyzf4, i3jx, new gxji(_7vm4a, _7vm4a['onReadNativeCallBack'], [i3jx, rzv, mv_a4, vy_z4f, emp, usk9n6, q9s]), rzv);
                } else vfrhz['EnvConfig']['load']['call'](this, rzv, mv_a4, vy_z4f, emp, usk9n6);
            }
        }, fy4z_['resMgrLoad'] = function (tijx$g, $lhgt, paoe, j$3gx, yzfvhr, gitxj$, pom7a) {
            paoe === void 0x0 && (paoe = 0x0), j$3gx === void 0x0 && (j$3gx = ![]), yzfvhr === void 0x0 && (yzfvhr = ![]), gitxj$ === void 0x0 && (gitxj$ = 0x0), pom7a === void 0x0 && (pom7a = 0x3), tijx$g['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', tijx$g), vfrhz['EnvConfig']['resMgrLoad'](tijx$g, (w850bd, ceompa, w82d5) => {
                _7vm4a['prototype']['resMgrLoadCallBack'](w850bd, ceompa, w82d5, $lhgt);
            }, paoe, j$3gx, yzfvhr, gitxj$, pom7a);
        }, fy4z_['resMgrLoadCallBack'] = function (u69nk, $gthx, rtgzh, eopac) {
            console['log']('buff:::', u69nk, rtgzh, wb850['fileNativeDir'] + '///' + wb850['fileListName']), eopac(u69nk, $gthx, rtgzh);
        }, fy4z_['clearRes'] = function (rhglx, eoamc) {
            eoamc === void 0x0 && (eoamc = ![]);
            var w25d80 = this;
            w25d80['clearRes'](rhglx, eoamc);
            var d0b58 = wb850['getFileInfo'](rhglx);
            if (d0b58 && (rhglx['indexOf']('http://') != -0x1 || rhglx['indexOf']('https://') != -0x1)) {
                var u6b = d0b58['md5'],
                    ocp7ma = wb850['getFileNativePath'](u6b);
                wb850['remove'](ocp7ma);
            }
        }, _7vm4a['onReadNativeCallBack'] = function (ns9qu, v_zf4y, igtjx, ks60b, hxrtl, s6u9nk, x$iq, xti$lg, a7c) {
            ks60b === void 0x0 && (ks60b = !![]), s6u9nk === void 0x0 && (s6u9nk = ![]), xti$lg === void 0x0 && (xti$lg = 0x0);
            if (!xti$lg) {
                var zvhyr;
                if (igtjx == 'json' || igtjx == 'atlas') zvhyr = vfrhz['getJson'](a7c['data']);else igtjx == 'xml' ? zvhyr = kn9su6['parseXMLFromString'](a7c['data']) : zvhyr = a7c['data'];
                x$iq['onLoaded'](zvhyr), !vfrhz['isZiYu'] && vfrhz['isPosMsgYu'] && igtjx != 'arraybuffer' && wx['postMessage']({
                    'url': v_zf4y,
                    'data': zvhyr,
                    'isLoad': !![]
                });
            } else xti$lg == 0x1 && vfrhz['EnvConfig']['load']['call'](x$iq, v_zf4y, igtjx, ks60b, hxrtl, s6u9nk);
        }, ijx$3g(_7vm4a, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), _7vm4a;
    }(),
        wb850 = function (epacom) {
        function a4_7mv() {
            a4_7mv['__super']['call'](this);
            ;
        }
        return a7ocpm(a4_7mv, 'laya.wx.mini.MiniFileMgr', epacom), a4_7mv['isLoadFile'] = function ($nq3j) {
            return a4_7mv['_fileTypeArr']['indexOf']($nq3j) != -0x1 ? !![] : ![];
        }, a4_7mv['getFileInfo'] = function ($xg3j) {
            var nsk9q = $xg3j['split']('?')[0x0],
                rvyz = a4_7mv['filesListObj'][nsk9q];
            if (rvyz == null) return null;else return rvyz;
            return null;
        }, a4_7mv['onFileUpdate'] = function (pmc7a, yhzlrf) {
            var fhrylz = pmc7a['split']('/'),
                skq9nu = fhrylz[fhrylz['length'] - 0x1],
                _va7m4 = a4_7mv['getFileInfo'](yhzlrf);
            if (_va7m4 == null) a4_7mv['onSaveFile'](yhzlrf, skq9nu);else {
                if (_va7m4['readyUrl'] != yhzlrf) a4_7mv['remove'](skq9nu, yhzlrf);
            }
        }, a4_7mv['exits'] = function (m_v47, lyrfz) {
            var jxi3g = a4_7mv['getFileNativePath'](m_v47);
            a4_7mv['fs']['getFileInfo']({
                'filePath': jxi3g,
                'success': function (gxhlt$) {
                    lyrfz != null && lyrfz['runWith']([0x0, gxhlt$]);
                },
                'fail': function (a74_vf) {
                    lyrfz != null && lyrfz['runWith']([0x1, a74_vf]);
                }
            });
        }, a4_7mv['read'] = function (vy_4fz, a7mo_c, _fv47, h$x) {
            a7mo_c === void 0x0 && (a7mo_c = 'ascill'), h$x === void 0x0 && (h$x = '');
            var ixj3;
            h$x != '' ? ixj3 = a4_7mv['getFileNativePath'](vy_4fz) : ixj3 = vy_4fz, a4_7mv['fs']['readFile']({
                'filePath': ixj3,
                'encoding': a7mo_c,
                'success': function (xigtj) {
                    _fv47 != null && _fv47['runWith']([0x0, xigtj]);
                },
                'fail': function (l$ghx) {
                    if (l$ghx && h$x != '') a4_7mv['down'](h$x, a7mo_c, _fv47, h$x);else _fv47 != null && _fv47['runWith']([0x1]);
                }
            });
        }, a4_7mv['readNativeFile'] = function (s39uq, gjix) {
            a4_7mv['fs']['readFile']({
                'filePath': s39uq,
                'encoding': '',
                'success': function (i3nu) {
                    gjix != null && gjix['runWith']([0x0]);
                },
                'fail': function (d05kb) {
                    gjix != null && gjix['runWith']([0x1]);
                }
            });
        }, a4_7mv['down'] = function (qxji3, yzhtr, fy74v, cpoema) {
            yzhtr === void 0x0 && (yzhtr = 'ascill'), cpoema === void 0x0 && (cpoema = '');
            var jixgt$ = a4_7mv['getFileNativePath'](cpoema),
                mcoa_ = a4_7mv['wxdown']({
                'url': qxji3,
                'filePath': jixgt$,
                'success': function (lzghtr) {
                    if (lzghtr['statusCode'] === 0xc8) a4_7mv['readFile'](lzghtr['filePath'], yzhtr, fy74v, cpoema);
                },
                'fail': function ($jxtgi) {
                    fy74v != null && fy74v['runWith']([0x1, $jxtgi]);
                }
            });
            mcoa_['onProgressUpdate'](function ($3ixgj) {
                fy74v != null && fy74v['runWith']([0x2, $3ixgj['progress']]);
            });
        }, a4_7mv['readFile'] = function (d2w05, lrhtg, d906b, _yzf4v) {
            lrhtg === void 0x0 && (lrhtg = 'ascill'), _yzf4v === void 0x0 && (_yzf4v = ''), a4_7mv['fs']['readFile']({
                'filePath': d2w05,
                'encoding': lrhtg,
                'success': function (d06bk) {
                    if (d2w05['indexOf']('http://') != -0x1 || d2w05['indexOf']('https://') != -0x1) a4_7mv['onFileUpdate'](d2w05, _yzf4v);
                    d906b != null && d906b['runWith']([0x0, d06bk]);
                },
                'fail': function (db80w5) {
                    if (db80w5) d906b != null && d906b['runWith']([0x1, db80w5]);
                }
            });
        }, a4_7mv['downImg'] = function ($3jiqn, _4vy7f, b05d) {
            b05d === void 0x0 && (b05d = '');
            var sb690 = a4_7mv['wxdown']({
                'url': $3jiqn,
                'success': function (vzy) {
                    vzy['statusCode'] === 0xc8 && a4_7mv['copyFile'](vzy['tempFilePath'], b05d, _4vy7f);
                },
                'fail': function (qus3) {
                    _4vy7f != null && _4vy7f['runWith']([0x1, qus3]);
                }
            });
        }, a4_7mv['copyFile'] = function (qij$x, thlxgr, a7f4_v) {
            var x$tlh = qij$x['split']('/'),
                kusnq = x$tlh[x$tlh['length'] - 0x1],
                ukbs = thlxgr['split']('?')[0x0],
                jiq3x$ = a4_7mv['getFileInfo'](thlxgr),
                u6ksn = a4_7mv['getFileNativePath'](kusnq);
            a4_7mv['fs']['copyFile']({
                'srcPath': qij$x,
                'destPath': u6ksn,
                'success': function (m4ca_7) {
                    if (!jiq3x$) a4_7mv['onSaveFile'](thlxgr, kusnq), a7f4_v != null && a7f4_v['runWith']([0x0]);else {
                        if (jiq3x$['readyUrl'] != thlxgr) a4_7mv['remove'](kusnq, thlxgr, a7f4_v);
                    }
                },
                'fail': function (unqi3) {
                    a7f4_v != null && a7f4_v['runWith']([0x1, unqi3]);
                }
            });
        }, a4_7mv['getFileNativePath'] = function (k096bd) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + k096bd;
        }, a4_7mv['remove'] = function (iqj3nu, k6usn, thxrgl) {
            k6usn === void 0x0 && (k6usn = '');
            var m_7va = a4_7mv['getFileInfo'](k6usn),
                pecaom = a4_7mv['getFileNativePath'](m_7va['md5']);
            nskqu9['loader']['clearRes'](m_7va['readyUrl']), a4_7mv['fs']['unlink']({
                'filePath': pecaom,
                'success': function (m7c4_a) {
                    if (k6usn != '') a4_7mv['onSaveFile'](k6usn, iqj3nu);
                    thxrgl != null && thxrgl['runWith']([0x0]);
                },
                'fail': function (wd1) {}
            });
        }, a4_7mv['onSaveFile'] = function (s9kn6, zhlrg) {
            var gtlxh$ = s9kn6['split']('?')[0x0];
            a4_7mv['filesListObj'][gtlxh$] = {
                'md5': zhlrg,
                'readyUrl': s9kn6
            }, a4_7mv['fs']['writeFile']({
                'filePath': a4_7mv['fileNativeDir'] + '/' + a4_7mv['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](a4_7mv['filesListObj']),
                'success': function (a4m7c_) {
                    console['log']('写入测试测试成功：', a4m7c_);
                },
                'fail': function (zhry) {
                    console['log']('写入测试测试失败：', zhry);
                }
            });
        }, a4_7mv['existDir'] = function (v_fz4y, u6kb) {
            a4_7mv['fs']['mkdir']({
                'dirPath': v_fz4y,
                'success': function (rlzfh) {
                    u6kb != null && u6kb['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (lhgx$t) {
                    if (lhgx$t['errMsg']['indexOf']('file already exists') != -0x1) a4_7mv['readSync'](a4_7mv['fileListName'], 'utf8', u6kb);else u6kb != null && u6kb['runWith']([0x1, lhgx$t]);
                }
            });
        }, a4_7mv['readSync'] = function (lrtz, a7com, bk9d06, f4yv) {
            a7com === void 0x0 && (a7com = 'ascill'), f4yv === void 0x0 && (f4yv = '');
            var d05b6k = a4_7mv['getFileNativePath'](lrtz),
                c7pam;
            try {
                c7pam = a4_7mv['fs']['readFileSync'](d05b6k), bk9d06 != null && bk9d06['runWith']([0x0, { 'data': c7pam }]);
            } catch (cam_7o) {
                bk9d06 != null && bk9d06['runWith']([0x1]);
            }
        }, a4_7mv['readCache'] = function () {}, a4_7mv['writeCache'] = function (rlyt) {
            var c7_4m = readyUrl['split']('?')[0x0];
            a4_7mv['filesListObj'][c7_4m] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, a4_7mv['fs']['writeFile']({
                'filePath': a4_7mv['fileNativeDir'] + '/' + a4_7mv['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](a4_7mv['filesListObj']),
                'success': function (un9kqs) {},
                'fail': function (i3jqn$) {}
            });
        }, a4_7mv['setNativeFileDir'] = function (s69kb) {
            a4_7mv['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + s69kb;
        }, a4_7mv['filesListObj'] = {}, a4_7mv['fileNativeDir'] = null, a4_7mv['fileListName'] = 'layaairfiles.txt', a4_7mv['ziyuFileData'] = {}, ijx$3g(a4_7mv, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), a4_7mv;
    }(v4_7am),
        k6d5b0 = function (rthlyz) {
        function k6bd5() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], k6bd5['__super']['call'](this), this['_sound'] = k6bd5['_createSound'](), this['_chanell'] = new mcopa(this['_sound']);
        }
        a7ocpm(k6bd5, 'laya.wx.mini.MiniSound', rthlyz);
        var j$i3n = k6bd5['prototype'];
        return j$i3n['load'] = function (k069d) {
            var q9n3s = this;
            k069d = i$g['formatURL'](k069d), this['url'] = k069d;
            if (k6bd5['_audioCache'][k069d]) {
                this['event']('complete');
                return;
            }
            function nsuk6() {
                if (k6bd5['_null'] != undefined) q9n3s['_sound']['onCanplay'](k6bd5['_null']), q9n3s['_sound']['onError'](k6bd5['_null']);else try {
                    q9n3s['_sound']['onCanplay'](null), q9n3s['_sound']['onError'](null), k6bd5['_null'] = null;
                } catch (av_7) {
                    console['warn']('[wxmini] _clearSound:' + av_7), q9n3s['_sound']['onCanplay'](yrzfv4), q9n3s['_sound']['onError'](yrzfv4), k6bd5['_null'] = yrzfv4;
                }
            }
            function xiq$j() {
                unqsk['loaded'] = !![], unqsk['event']('complete'), k6bd5['_audioCache'][unqsk['url']] = unqsk;
            }
            function b96k(s3qn9u) {
                console['error']('errCode=' + s3qn9u['errCode'] + '  errMsg=' + s3qn9u['errMsg']), unqsk['event']('error');
            }
            function yrzfv4() {}
            this['_sound']['onCanplay'](xiq$j), this['_sound']['onError'](b96k), this['_sound']['src'] = k069d;
            var unqsk = this;
        }, j$i3n['play'] = function (jinq3$, mcao7_) {
            jinq3$ === void 0x0 && (jinq3$ = 0x0), mcao7_ === void 0x0 && (mcao7_ = 0x0);
            var aoc7_m, meco;
            if (this['url'] == bk6['_tMusic']) {
                if (!k6bd5['_musicAudio']) k6bd5['_musicAudio'] = this['_sound'];
                aoc7_m = k6bd5['_musicAudio'], meco = this['_chanell'];
            } else aoc7_m = this['_sound'], meco = this['_chanell'];
            return aoc7_m['src'] = this['url'], aoc7_m['startTime'] = 0x0, meco['isStopped'] && (meco['url'] = this['url'], meco['loops'] = mcao7_, meco['startTime'] = jinq3$, meco['play'](), bk6['addChannel'](meco)), meco;
        }, j$i3n['dispose'] = function () {
            var igxj3$ = k6bd5['_audioCache'][this['url']];
            igxj3$ && (igxj3$['src'] = '', delete k6bd5['_audioCache'][this['url']]);
        }, lg$it(0x0, j$i3n, 'duration', function () {
            return this['_sound']['duration'];
        }), k6bd5['_createSound'] = function () {
            k6bd5['_id']++;
            var eao = vfrhz['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return eao;
        }, k6bd5['_musicAudio'] = null, k6bd5['_id'] = 0x0, k6bd5['_audioCache'] = {}, k6bd5['_null'] = undefined, k6bd5;
    }(v4_7am),
        mcopa = function (_vm74) {
        function lzrhg(ijtxg) {
            this['_audio'] = null, this['_onEnd'] = null, lzrhg['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = ijtxg, this['_onEnd'] = kn9su6['bind'](this['__onEnd'], this), ijtxg['onEnded'](this['_onEnd']);
        }
        a7ocpm(lzrhg, 'laya.wx.mini.MiniSoundChannel', _vm74);
        var qijn$ = lzrhg['prototype'];
        return qijn$['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (nskqu9['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, qijn$['__onNull'] = function () {}, qijn$['play'] = function () {
            this['isStopped'] = ![], bk6['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, qijn$['stop'] = function () {
            this['isStopped'] = !![], bk6['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, qijn$['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, qijn$['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], bk6['addChannel'](this), this['_audio']['play']();
        }, lg$it(0x0, qijn$, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), lg$it(0x0, qijn$, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), lg$it(0x0, qijn$, 'volume', function () {
            return 0x1;
        }, function (njqu3s) {}), lzrhg['_null'] = undefined, lzrhg;
    }(hyvzf),
        u9bks = function () {
        function yrv4fz() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = vfrhz['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        a7ocpm(yrv4fz, 'laya.wx.mini.MiniVideo');
        var _4a7mc = yrv4fz['prototype'];
        return _4a7mc['on'] = function (pcoma, com7a_, _7oa) {
            if (pcoma == 'loadedmetadata') this['onPlayFunc'] = _7oa['bind'](com7a_), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else pcoma == 'ended' && (this['onEndedFunC'] = _7oa['bind'](com7a_), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, _4a7mc['onTimeUpdateFunc'] = function (m_va4) {
            this['position'] = m_va4['position'], this['_duration'] = m_va4['duration'];
        }, _4a7mc['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, _4a7mc['onended'] = function (x3qi$j, tzlrg) {
            this['onEndedFunC'] = tzlrg['bind'](x3qi$j), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, _4a7mc['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, _4a7mc['off'] = function (caopm, o7cmpa, in$qj) {
            if (caopm == 'loadedmetadata') this['onPlayFunc'] = in$qj['bind'](o7cmpa), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else caopm == 'ended' && (this['onEndedFunC'] = in$qj['bind'](o7cmpa), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, _4a7mc['load'] = function (y_fz4) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = y_fz4;
        }, _4a7mc['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, _4a7mc['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, _4a7mc['size'] = function (cmo_a, hryflz) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = cmo_a, this['videoElement']['height'] = hryflz;
        }, _4a7mc['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, _4a7mc['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, lg$it(0x0, _4a7mc, 'duration', function () {
            return this['_duration'];
        }), lg$it(0x0, _4a7mc, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (yv47_) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = yv47_;
        }), lg$it(0x0, _4a7mc, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), lg$it(0x0, _4a7mc, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), lg$it(0x0, _4a7mc, 'ended', function () {
            return this['videoend'];
        }), lg$it(0x0, _4a7mc, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (nj3qsu) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = nj3qsu;
        }), lg$it(0x0, _4a7mc, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (_fa4) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = _fa4;
        }), lg$it(0x0, _4a7mc, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (d8bw5) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = d8bw5;
        }), lg$it(0x0, _4a7mc, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), lg$it(0x0, _4a7mc, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (k6b05) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = k6b05;
        }), lg$it(0x0, _4a7mc, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (k609sb) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = k609sb;
        }), lg$it(0x0, _4a7mc, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), lg$it(0x0, _4a7mc, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (g$xij3) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = g$xij3;
        }), lg$it(0x0, _4a7mc, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function ($lhgx) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = $lhgx;
        }), lg$it(0x0, _4a7mc, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (o_) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = o_;
        }), yrv4fz;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var q$3ji in Laya) {
        var s690kb = Laya[q$3ji];
        s690kb && s690kb['__isclass'] && (exports[q$3ji] = s690kb);
    }
});