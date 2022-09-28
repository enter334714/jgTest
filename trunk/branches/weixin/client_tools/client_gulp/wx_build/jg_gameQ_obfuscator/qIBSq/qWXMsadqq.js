var g = wx.$Q;
(function (window, document, n6o9me) {
    var abvlig = n6o9me['un'],
        on_96 = n6o9me['uns'],
        s81h4 = n6o9me['static'],
        $_oe9z = n6o9me['class'],
        p20fla = n6o9me['getset'],
        ckyd5t = n6o9me['__newvec'],
        s48hj1 = laya['utils']['Browser'],
        ibgal = laya['events']['Event'],
        c5dtyk = laya['events']['EventDispatcher'],
        _rz$de = laya['resource']['HTMLImage'],
        wjs = laya['utils']['Handler'],
        tdkrcz = laya['display']['Input'],
        j1m84h = laya['net']['Loader'],
        n_o$9e = laya['maths']['Matrix'],
        wjqsu8 = laya['renders']['Render'],
        m1h48 = laya['utils']['RunDriver'],
        zd_c$r = laya['media']['Sound'],
        dre = laya['media']['SoundChannel'],
        fpx2l = laya['media']['SoundManager'],
        c5dytk = laya['display']['Stage'],
        me6o9n = laya['net']['URL'],
        drtkcz = laya['utils']['Utils'],
        lgvbai = function () {
        function tczdk() {}
        return $_oe9z(tczdk, 'laya.wx.mini.MiniAdpter'), tczdk['getJson'] = function (ezd_r) {
            return JSON['parse'](ezd_r);
        }, tczdk['init'] = function (lbavig, af2p) {
            lbavig === void 0x0 && (lbavig = ![]), af2p === void 0x0 && (af2p = ![]);
            if (tczdk['_inited']) return;
            tczdk['window'] = window;
            if (tczdk['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            tczdk['_inited'] = !![], tczdk['isZiYu'] = af2p, tczdk['isPosMsgYu'] = lbavig, tczdk['EnvConfig'] = {}, !tczdk['isZiYu'] && (l2p0fx['setNativeFileDir']('/layaairGame'), l2p0fx['existDir'](l2p0fx['fileNativeDir'], wjs['create'](tczdk, tczdk['onMkdirCallBack']))), tczdk['window']['focus'] = function () {}, n6o9me['getUrlPath'] = function () {}, tczdk['window']['logtime'] = function (tyc5) {}, tczdk['window']['alertTimeLog'] = function (wusqj) {}, tczdk['window']['resetShareInfo'] = function () {}, tczdk['window']['CanvasRenderingContext2D'] = function () {}, tczdk['window']['CanvasRenderingContext2D']['prototype'] = tczdk['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], tczdk['window']['document']['body']['appendChild'] = function () {}, tczdk['EnvConfig']['pixelRatioInt'] = 0x0, m1h48['getPixelRatio'] = tczdk['pixelRatio'], tczdk['_preCreateElement'] = s48hj1['createElement'], s48hj1['createElement'] = tczdk['createElement'], m1h48['createShaderCondition'] = tczdk['createShaderCondition'], drtkcz['parseXMLFromString'] = tczdk['parseXMLFromString'], tdkrcz['_createInputElement'] = ck5y3['_createInputElement'], tczdk['EnvConfig']['load'] = j1m84h['prototype']['load'], j1m84h['prototype']['load'] = liavbg['prototype']['load'], tczdk['isZiYu'] && lbavig && wx['onMessage'](function (l20apf) {
                l20apf['isLoad'] && (l2p0fx['ziyuFileData'][l20apf['url']] = l20apf['data']);
            });
        }, tczdk['onMkdirCallBack'] = function (xf50, x23y5) {
            if (!xf50) l2p0fx['filesListObj'] = JSON['parse'](x23y5['data']);
        }, tczdk['pixelRatio'] = function () {
            if (!tczdk['EnvConfig']['pixelRatioInt']) try {
                var plgbf = wx['getSystemInfoSync']();
                return tczdk['EnvConfig']['pixelRatioInt'] = plgbf['pixelRatio'], plgbf = plgbf, plgbf['pixelRatio'];
            } catch (tckzr) {}
            return tczdk['EnvConfig']['pixelRatioInt'];
        }, tczdk['createElement'] = function (kcyt5) {
            if (kcyt5 == 'canvas') {
                var r_z9$e;
                return tczdk['idx'] == 0x1 ? tczdk['isZiYu'] ? (r_z9$e = sharedCanvas, r_z9$e['style'] = {}) : r_z9$e = window['canvas'] : r_z9$e = window['wx']['createCanvas'](), tczdk['idx']++, r_z9$e;
            } else {
                if (kcyt5 == 'textarea' || kcyt5 == 'input') return tczdk['onCreateInput'](kcyt5);else {
                    if (kcyt5 == 'div') {
                        var pbigla = tczdk['_preCreateElement'](kcyt5);
                        return pbigla['contains'] = function (b7vai) {
                            return null;
                        }, pbigla['removeChild'] = function (k523y) {}, pbigla;
                    } else return tczdk['_preCreateElement'](kcyt5);
                }
            }
        }, tczdk['onCreateInput'] = function (k23y5x) {
            var x5y3 = tczdk['_preCreateElement'](k23y5x);
            return x5y3['focus'] = ck5y3['wxinputFocus'], x5y3['blur'] = ck5y3['wxinputblur'], x5y3['style'] = {}, x5y3['value'] = 0x0, x5y3['parentElement'] = {}, x5y3['placeholder'] = {}, x5y3['type'] = {}, x5y3['setColor'] = function (ycdtk) {}, x5y3['setType'] = function (abgip) {}, x5y3['setFontFace'] = function (baglip) {}, x5y3['addEventListener'] = function (drct) {}, x5y3['contains'] = function (qsjw) {
                return null;
            }, x5y3['removeChild'] = function (glp0) {}, x5y3;
        }, tczdk['createShaderCondition'] = function (krtcyd) {
            var usjwq8 = this,
                rtdz$ = function () {
                var palg = krtcyd;
                return usjwq8[krtcyd['replace']('this.', '')];
            };
            return rtdz$;
        }, tczdk['EnvConfig'] = null, tczdk['window'] = null, tczdk['_preCreateElement'] = null, tczdk['_inited'] = ![], tczdk['wxRequest'] = null, tczdk['systemInfo'] = null, tczdk['version'] = '0.0.1', tczdk['isZiYu'] = ![], tczdk['isPosMsgYu'] = ![], tczdk['parseXMLFromString'] = function (lagipb) {
            var e$r_9z, h81jm;
            lagipb = lagipb['replace'](/>\s+</g, '><');
            try {
                e$r_9z = new window['Parser']['DOMParser']()['parseFromString'](lagipb, 'text/xml');
            } catch (z_e$9r) {
                throw '需要引入xml解析库文件';
            }
            return e$r_9z;
        }, tczdk['idx'] = 0x1, tczdk;
    }(),
        m9no6 = function () {
        function h4m6n() {}
        $_oe9z(h4m6n, 'laya.wx.mini.MiniImage');
        var f530x2 = h4m6n['prototype'];
        return f530x2['_loadImage'] = function (s8h1j4) {
            var _6noe9 = this,
                on16m = ![];
            s8h1j4['indexOf']('layaNativeDir/') == -0x1 && (on16m = !![], s8h1j4 = me6o9n['formatURL'](s8h1j4));
            if (!l2p0fx['getFileInfo'](s8h1j4)) {
                if (s8h1j4['indexOf']('http://') != -0x1 || s8h1j4['indexOf']('https://') != -0x1) l2p0fx['downImg'](s8h1j4, new wjs(h4m6n, h4m6n['onDownImgCallBack'], [s8h1j4, _6noe9]), s8h1j4);else h4m6n['onCreateImage'](s8h1j4, _6noe9, !![]);
            } else h4m6n['onCreateImage'](s8h1j4, _6noe9, !on16m);
        }, h4m6n['onDownImgCallBack'] = function (hjm4, o_9$ne, _dzc$) {
            if (!_dzc$) h4m6n['onCreateImage'](hjm4, o_9$ne);else o_9$ne['onError'](null);
        }, h4m6n['onCreateImage'] = function (bglpai, u8jsq, _r$dzc) {
            _r$dzc === void 0x0 && (_r$dzc = ![]);
            var ligavb;
            if (!_r$dzc) {
                var x2fpl0 = l2p0fx['getFileInfo'](bglpai),
                    ze_r$9 = x2fpl0['md5'];
                ligavb = l2p0fx['getFileNativePath'](ze_r$9);
            } else ligavb = bglpai;
            if (u8jsq['imgCache'] == null) u8jsq['imgCache'] = {};
            var p2x03;
            function blviag() {
                p2x03['onload'] = null, p2x03['onerror'] = null, delete u8jsq['imgCache'][bglpai];
            }
            ;
            var ilgpa = function () {
                blviag(), u8jsq['onLoaded'](p2x03);
            },
                f0pagl = function () {
                blviag(), u8jsq['event']('error', 'Load image failed');
            };
            u8jsq['_type'] == 'nativeimage' ? (p2x03 = new s48hj1['window']['Image'](), p2x03['crossOrigin'] = '', p2x03['onload'] = ilgpa, p2x03['onerror'] = f0pagl, p2x03['src'] = ligavb, u8jsq['imgCache'][bglpai] = p2x03) : new _rz$de['create'](ligavb, {
                'onload': ilgpa,
                'onerror': f0pagl,
                'onCreate': function (afp0l) {
                    p2x03 = afp0l, u8jsq['imgCache'][bglpai] = afp0l;
                }
            });
        }, h4m6n;
    }(),
        ck5y3 = function () {
        function x3y25k() {}
        return $_oe9z(x3y25k, 'laya.wx.mini.MiniInput'), x3y25k['_createInputElement'] = function () {
            tdkrcz['_initInput'](tdkrcz['area'] = s48hj1['createElement']('textarea')), tdkrcz['_initInput'](tdkrcz['input'] = s48hj1['createElement']('input')), tdkrcz['inputContainer'] = s48hj1['createElement']('div'), tdkrcz['inputContainer']['style']['position'] = 'absolute', tdkrcz['inputContainer']['style']['zIndex'] = 0x186a0, s48hj1['container']['appendChild'](tdkrcz['inputContainer']), tdkrcz['inputContainer']['setPos'] = function (uw8jhs, zrdct) {
                tdkrcz['inputContainer']['style']['left'] = uw8jhs + 'px', tdkrcz['inputContainer']['style']['top'] = zrdct + 'px';
            }, n6o9me['stage']['on']('resize', null, x3y25k['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (o9mn6) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), fpx2l['_soundClass'] = rtyckd, fpx2l['_musicClass'] = rtyckd, window['_videoClass'] = ztc$r;
        }, x3y25k['_onStageResize'] = function () {
            var m4o9n6 = n6o9me['stage']['_canvasTransform']['identity']();
            m4o9n6['scale'](s48hj1['width'] / wjqsu8['canvas']['width'] / m1h48['getPixelRatio'](), s48hj1['height'] / wjqsu8['canvas']['height'] / m1h48['getPixelRatio']());
        }, x3y25k['wxinputFocus'] = function (m4o6n1) {
            var aivlg = tdkrcz['inputElement']['target'];
            if (aivlg && !aivlg['editable']) return;
            lgvbai['window']['wx']['offKeyboardConfirm'](), lgvbai['window']['wx']['offKeyboardInput'](), lgvbai['window']['wx']['showKeyboard']({
                'defaultValue': aivlg['text'],
                'maxLength': aivlg['maxChars'],
                'multiple': aivlg['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (laf0pg) {},
                'fail': function (pfx3) {}
            }), lgvbai['window']['wx']['onKeyboardConfirm'](function (oe_9n) {
                var a0lpf = oe_9n ? oe_9n['value'] : '';
                aivlg['text'] = a0lpf, aivlg['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), lgvbai['window']['wx']['onKeyboardInput'](function (o9enm6) {
                var f3x025 = o9enm6 ? o9enm6['value'] : '';
                if (!aivlg['multiline']) {
                    if (f3x025['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                aivlg['text'] = f3x025, aivlg['event']('input');
            });
        }, x3y25k['inputEnter'] = function () {
            tdkrcz['inputElement']['target']['focus'] = ![];
        }, x3y25k['wxinputblur'] = function () {
            x3y25k['hideKeyboard']();
        }, x3y25k['hideKeyboard'] = function () {
            lgvbai['window']['wx']['offKeyboardConfirm'](), lgvbai['window']['wx']['offKeyboardInput'](), lgvbai['window']['wx']['hideKeyboard']({
                'success': function (f0p3x) {
                    console['log']('隐藏键盘');
                },
                'fail': function (y2350x) {
                    console['log']('隐藏键盘出错:' + (y2350x ? y2350x['errMsg'] : ''));
                }
            });
        }, x3y25k;
    }(),
        liavbg = function () {
        function ktrdcz() {}
        $_oe9z(ktrdcz, 'laya.wx.mini.MiniLoader');
        var m148j = ktrdcz['prototype'];
        return m148j['load'] = function (hjusw8, bfgla, o41n, r9ez_$, y35x20) {
            o41n === void 0x0 && (o41n = !![]), y35x20 === void 0x0 && (y35x20 = ![]);
            var erd_$ = this;
            erd_$['_url'] = hjusw8;
            if (hjusw8['indexOf']('data:image') === 0x0) erd_$['_type'] = bfgla = 'image';else erd_$['_type'] = bfgla || (bfgla = erd_$['getTypeFromUrl'](hjusw8));
            erd_$['_cache'] = o41n, erd_$['_data'] = null;
            var y502x3 = 'ascii';
            if (hjusw8['indexOf']('.fnt') != -0x1) y502x3 = 'utf8';else bfgla == 'arraybuffer' && (y502x3 = '');
            ;
            var z$cd = drtkcz['getFileExtension'](hjusw8);
            if (ktrdcz['_fileTypeArr']['indexOf'](z$cd) != -0x1) lgvbai['EnvConfig']['load']['call'](this, hjusw8, bfgla, o41n, r9ez_$, y35x20);else {
                if (!l2p0fx['getFileInfo'](hjusw8)) {
                    if (hjusw8['indexOf']('layaNativeDir/') != -0x1) {
                        if (lgvbai['isZiYu']) {
                            var k35ytc = l2p0fx['ziyuFileData'][hjusw8];
                            erd_$['onLoaded'](k35ytc);
                            return;
                        } else {
                            cosnole['log']('read read'), l2p0fx['read'](hjusw8, y502x3, new wjs(ktrdcz, ktrdcz['onReadNativeCallBack'], [y502x3, hjusw8, bfgla, o41n, r9ez_$, y35x20, erd_$]));
                            return;
                        }
                    }
                    if (me6o9n['rootPath'] == '') var gablpi = hjusw8;else gablpi = hjusw8['split'](me6o9n['rootPath'])[0x0];
                    hjusw8['indexOf']('http://') != -0x1 || hjusw8['indexOf']('https://') != -0x1 ? lgvbai['EnvConfig']['load']['call'](erd_$, hjusw8, bfgla, o41n, r9ez_$, y35x20) : l2p0fx['readFile'](gablpi, y502x3, new wjs(ktrdcz, ktrdcz['onReadNativeCallBack'], [y502x3, hjusw8, bfgla, o41n, r9ez_$, y35x20, erd_$]), hjusw8);
                } else lgvbai['EnvConfig']['load']['call'](this, hjusw8, bfgla, o41n, r9ez_$, y35x20);
            }
        }, m148j['resMgrLoad'] = function (yc5ktd, js14h8, baliv, c$r_zd, pf0, fa0gl, m6on) {
            baliv === void 0x0 && (baliv = 0x0), c$r_zd === void 0x0 && (c$r_zd = ![]), pf0 === void 0x0 && (pf0 = ![]), fa0gl === void 0x0 && (fa0gl = 0x0), m6on === void 0x0 && (m6on = 0x3), yc5ktd['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', yc5ktd), lgvbai['EnvConfig']['resMgrLoad'](yc5ktd, (gbalvi, a2plf, iablv) => {
                ktrdcz['prototype']['resMgrLoadCallBack'](gbalvi, a2plf, iablv, js14h8);
            }, baliv, c$r_zd, pf0, fa0gl, m6on);
        }, m148j['resMgrLoadCallBack'] = function (rykd, j8swu, ag7vi, rcdz) {
            console['log']('buff:::', rykd, ag7vi, l2p0fx['fileNativeDir'] + '///' + l2p0fx['fileListName']), rcdz(rykd, j8swu, ag7vi);
        }, m148j['clearRes'] = function (dcz_$, o9e_$z) {
            o9e_$z === void 0x0 && (o9e_$z = ![]);
            var $r_9e = this;
            $r_9e['clearRes'](dcz_$, o9e_$z);
            var avibg = l2p0fx['getFileInfo'](dcz_$);
            if (avibg && (dcz_$['indexOf']('http://') != -0x1 || dcz_$['indexOf']('https://') != -0x1)) {
                var pagilb = avibg['md5'],
                    pf032 = l2p0fx['getFileNativePath'](pagilb);
                l2p0fx['remove'](pf032);
            }
        }, ktrdcz['onReadNativeCallBack'] = function (kd, m8h416, js4h8, m64h8, e9nom, mj1h8, $e9zo_, om46, gibavl) {
            m64h8 === void 0x0 && (m64h8 = !![]), mj1h8 === void 0x0 && (mj1h8 = ![]), om46 === void 0x0 && (om46 = 0x0);
            if (!om46) {
                var rctyd;
                if (js4h8 == 'json' || js4h8 == 'atlas') rctyd = lgvbai['getJson'](gibavl['data']);else js4h8 == 'xml' ? rctyd = drtkcz['parseXMLFromString'](gibavl['data']) : rctyd = gibavl['data'];
                $e9zo_['onLoaded'](rctyd), !lgvbai['isZiYu'] && lgvbai['isPosMsgYu'] && js4h8 != 'arraybuffer' && wx['postMessage']({
                    'url': m8h416,
                    'data': rctyd,
                    'isLoad': !![]
                });
            } else om46 == 0x1 && lgvbai['EnvConfig']['load']['call']($e9zo_, m8h416, js4h8, m64h8, e9nom, mj1h8);
        }, s81h4(ktrdcz, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), ktrdcz;
    }(),
        l2p0fx = function (abfg) {
        function dk5c() {
            dk5c['__super']['call'](this);
            ;
        }
        return $_oe9z(dk5c, 'laya.wx.mini.MiniFileMgr', abfg), dk5c['isLoadFile'] = function (tyk5x3) {
            return dk5c['_fileTypeArr']['indexOf'](tyk5x3) != -0x1 ? !![] : ![];
        }, dk5c['getFileInfo'] = function (plf0a2) {
            var z_9o$e = plf0a2['split']('?')[0x0],
                quw8j = dk5c['filesListObj'][z_9o$e];
            if (quw8j == null) return null;else return quw8j;
            return null;
        }, dk5c['onFileUpdate'] = function (ktyx3, fp0gal) {
            var dc$rz_ = ktyx3['split']('/'),
                dkztr = dc$rz_[dc$rz_['length'] - 0x1],
                flgab = dk5c['getFileInfo'](fp0gal);
            if (flgab == null) dk5c['onSaveFile'](fp0gal, dkztr);else {
                if (flgab['readyUrl'] != fp0gal) dk5c['remove'](dkztr, fp0gal);
            }
        }, dk5c['exits'] = function (pfx203, jwsq8) {
            var js8qwu = dk5c['getFileNativePath'](pfx203);
            dk5c['fs']['getFileInfo']({
                'filePath': js8qwu,
                'success': function (gbpial) {
                    jwsq8 != null && jwsq8['runWith']([0x0, gbpial]);
                },
                'fail': function ($9_rez) {
                    jwsq8 != null && jwsq8['runWith']([0x1, $9_rez]);
                }
            });
        }, dk5c['read'] = function (lagfpb, apflg, dt$zc, _eon96) {
            apflg === void 0x0 && (apflg = 'ascill'), _eon96 === void 0x0 && (_eon96 = '');
            var n_9e6;
            _eon96 != '' ? n_9e6 = dk5c['getFileNativePath'](lagfpb) : n_9e6 = lagfpb, dk5c['fs']['readFile']({
                'filePath': n_9e6,
                'encoding': apflg,
                'success': function (tkyx) {
                    dt$zc != null && dt$zc['runWith']([0x0, tkyx]);
                },
                'fail': function (shjwu8) {
                    if (shjwu8 && _eon96 != '') dk5c['down'](_eon96, apflg, dt$zc, _eon96);else dt$zc != null && dt$zc['runWith']([0x1]);
                }
            });
        }, dk5c['readNativeFile'] = function (jwsuq, fplbga) {
            dk5c['fs']['readFile']({
                'filePath': jwsuq,
                'encoding': '',
                'success': function (s8hj4) {
                    fplbga != null && fplbga['runWith']([0x0]);
                },
                'fail': function (sqjuw8) {
                    fplbga != null && fplbga['runWith']([0x1]);
                }
            });
        }, dk5c['down'] = function (h48js1, xyt5k3, $ne_9, h86m1) {
            xyt5k3 === void 0x0 && (xyt5k3 = 'ascill'), h86m1 === void 0x0 && (h86m1 = '');
            var x35tk = dk5c['getFileNativePath'](h86m1),
                _9$n = dk5c['wxdown']({
                'url': h48js1,
                'filePath': x35tk,
                'success': function (gblia) {
                    if (gblia['statusCode'] === 0xc8) dk5c['readFile'](gblia['filePath'], xyt5k3, $ne_9, h86m1);
                },
                'fail': function (f2xp0) {
                    $ne_9 != null && $ne_9['runWith']([0x1, f2xp0]);
                }
            });
            _9$n['onProgressUpdate'](function (bfgpal) {
                $ne_9 != null && $ne_9['runWith']([0x2, bfgpal['progress']]);
            });
        }, dk5c['readFile'] = function (tkc53y, rd$cz_, vigba, x3y5) {
            rd$cz_ === void 0x0 && (rd$cz_ = 'ascill'), x3y5 === void 0x0 && (x3y5 = ''), dk5c['fs']['readFile']({
                'filePath': tkc53y,
                'encoding': rd$cz_,
                'success': function (h486) {
                    if (tkc53y['indexOf']('http://') != -0x1 || tkc53y['indexOf']('https://') != -0x1) dk5c['onFileUpdate'](tkc53y, x3y5);
                    vigba != null && vigba['runWith']([0x0, h486]);
                },
                'fail': function (agiblp) {
                    if (agiblp) vigba != null && vigba['runWith']([0x1, agiblp]);
                }
            });
        }, dk5c['downImg'] = function (vialb, _$9eoz, lvabi) {
            lvabi === void 0x0 && (lvabi = '');
            var gvlabi = dk5c['wxdown']({
                'url': vialb,
                'success': function (zd$tr) {
                    zd$tr['statusCode'] === 0xc8 && dk5c['copyFile'](zd$tr['tempFilePath'], lvabi, _$9eoz);
                },
                'fail': function (vbgli) {
                    _$9eoz != null && _$9eoz['runWith']([0x1, vbgli]);
                }
            });
        }, dk5c['copyFile'] = function (mj184h, hjm184, tzcrdk) {
            var ai7vgb = mj184h['split']('/'),
                pl02af = ai7vgb[ai7vgb['length'] - 0x1],
                _$ne = hjm184['split']('?')[0x0],
                h8jw1 = dk5c['getFileInfo'](hjm184),
                n4mh6 = dk5c['getFileNativePath'](pl02af);
            dk5c['fs']['copyFile']({
                'srcPath': mj184h,
                'destPath': n4mh6,
                'success': function (_$zred) {
                    if (!h8jw1) dk5c['onSaveFile'](hjm184, pl02af), tzcrdk != null && tzcrdk['runWith']([0x0]);else {
                        if (h8jw1['readyUrl'] != hjm184) dk5c['remove'](pl02af, hjm184, tzcrdk);
                    }
                },
                'fail': function (cz$dt) {
                    tzcrdk != null && tzcrdk['runWith']([0x1, cz$dt]);
                }
            });
        }, dk5c['getFileNativePath'] = function (e$n_) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + e$n_;
        }, dk5c['remove'] = function (ytcr, c3y5, tcd5yk) {
            c3y5 === void 0x0 && (c3y5 = '');
            var y52x3k = dk5c['getFileInfo'](c3y5),
                m61no4 = dk5c['getFileNativePath'](y52x3k['md5']);
            n6o9me['loader']['clearRes'](y52x3k['readyUrl']), dk5c['fs']['unlink']({
                'filePath': m61no4,
                'success': function (dtryck) {
                    if (c3y5 != '') dk5c['onSaveFile'](c3y5, ytcr);
                    tcd5yk != null && tcd5yk['runWith']([0x0]);
                },
                'fail': function (on6_9e) {}
            });
        }, dk5c['onSaveFile'] = function (txk, zkr) {
            var dtrykc = txk['split']('?')[0x0];
            dk5c['filesListObj'][dtrykc] = {
                'md5': zkr,
                'readyUrl': txk
            }, dk5c['fs']['writeFile']({
                'filePath': dk5c['fileNativeDir'] + '/' + dk5c['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](dk5c['filesListObj']),
                'success': function ($rdze_) {
                    console['log']('写入测试测试成功：', $rdze_);
                },
                'fail': function (al2p) {
                    console['log']('写入测试测试失败：', al2p);
                }
            });
        }, dk5c['existDir'] = function ($r9z, pblfga) {
            dk5c['fs']['mkdir']({
                'dirPath': $r9z,
                'success': function (ezdr_$) {
                    pblfga != null && pblfga['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (n1h4) {
                    if (n1h4['errMsg']['indexOf']('file already exists') != -0x1) dk5c['readSync'](dk5c['fileListName'], 'utf8', pblfga);else pblfga != null && pblfga['runWith']([0x1, n1h4]);
                }
            });
        }, dk5c['readSync'] = function (pflg0a, x0p23f, e6n9mo, lgpbi) {
            x0p23f === void 0x0 && (x0p23f = 'ascill'), lgpbi === void 0x0 && (lgpbi = '');
            var o_e = dk5c['getFileNativePath'](pflg0a),
                a2l0;
            try {
                a2l0 = dk5c['fs']['readFileSync'](o_e), e6n9mo != null && e6n9mo['runWith']([0x0, { 'data': a2l0 }]);
            } catch (j8wus) {
                e6n9mo != null && e6n9mo['runWith']([0x1]);
            }
        }, dk5c['readCache'] = function () {}, dk5c['writeCache'] = function (z$rdtc) {
            var tczd$ = readyUrl['split']('?')[0x0];
            dk5c['filesListObj'][tczd$] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, dk5c['fs']['writeFile']({
                'filePath': dk5c['fileNativeDir'] + '/' + dk5c['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](dk5c['filesListObj']),
                'success': function (suw8jq) {},
                'fail': function (g7ibav) {}
            });
        }, dk5c['setNativeFileDir'] = function (tcydrk) {
            dk5c['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + tcydrk;
        }, dk5c['filesListObj'] = {}, dk5c['fileNativeDir'] = null, dk5c['fileListName'] = 'layaairfiles.txt', dk5c['ziyuFileData'] = {}, s81h4(dk5c, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), dk5c;
    }(c5dtyk),
        rtyckd = function (pxf2l) {
        function gfbap() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], gfbap['__super']['call'](this), this['_sound'] = gfbap['_createSound'](), this['_chanell'] = new e$9_on(this['_sound']);
        }
        $_oe9z(gfbap, 'laya.wx.mini.MiniSound', pxf2l);
        var n4o1m6 = gfbap['prototype'];
        return n4o1m6['load'] = function (ipbgal) {
            var _o$z9e = this;
            ipbgal = me6o9n['formatURL'](ipbgal), this['url'] = ipbgal;
            if (gfbap['_audioCache'][ipbgal]) {
                this['event']('complete');
                return;
            }
            function rdtcz() {
                if (gfbap['_null'] != undefined) _o$z9e['_sound']['onCanplay'](gfbap['_null']), _o$z9e['_sound']['onError'](gfbap['_null']);else try {
                    _o$z9e['_sound']['onCanplay'](null), _o$z9e['_sound']['onError'](null), gfbap['_null'] = null;
                } catch (xf20p3) {
                    console['warn']('[wxmini] _clearSound:' + xf20p3), _o$z9e['_sound']['onCanplay'](lgpfb), _o$z9e['_sound']['onError'](lgpfb), gfbap['_null'] = lgpfb;
                }
            }
            function uwsjq() {
                h8usjw['loaded'] = !![], h8usjw['event']('complete'), gfbap['_audioCache'][h8usjw['url']] = h8usjw;
            }
            function yck5t3(c5dkty) {
                console['error']('errCode=' + c5dkty['errCode'] + '  errMsg=' + c5dkty['errMsg']), h8usjw['event']('error');
            }
            function lgpfb() {}
            this['_sound']['onCanplay'](uwsjq), this['_sound']['onError'](yck5t3), this['_sound']['src'] = ipbgal;
            var h8usjw = this;
        }, n4o1m6['play'] = function (j481hs, kxy52) {
            j481hs === void 0x0 && (j481hs = 0x0), kxy52 === void 0x0 && (kxy52 = 0x0);
            var uswjq8, txy5k;
            if (this['url'] == fpx2l['_tMusic']) {
                if (!gfbap['_musicAudio']) gfbap['_musicAudio'] = this['_sound'];
                uswjq8 = gfbap['_musicAudio'], txy5k = this['_chanell'];
            } else uswjq8 = this['_sound'], txy5k = this['_chanell'];
            return uswjq8['src'] = this['url'], uswjq8['startTime'] = 0x0, txy5k['isStopped'] && (txy5k['url'] = this['url'], txy5k['loops'] = kxy52, txy5k['startTime'] = j481hs, txy5k['play'](), fpx2l['addChannel'](txy5k)), txy5k;
        }, n4o1m6['dispose'] = function () {
            var rckd = gfbap['_audioCache'][this['url']];
            rckd && (rckd['src'] = '', delete gfbap['_audioCache'][this['url']]);
        }, p20fla(0x0, n4o1m6, 'duration', function () {
            return this['_sound']['duration'];
        }), gfbap['_createSound'] = function () {
            gfbap['_id']++;
            var ws1h8j = lgvbai['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return ws1h8j;
        }, gfbap['_musicAudio'] = null, gfbap['_id'] = 0x0, gfbap['_audioCache'] = {}, gfbap['_null'] = undefined, gfbap;
    }(c5dtyk),
        e$9_on = function (n4h) {
        function o649m(gpbla) {
            this['_audio'] = null, this['_onEnd'] = null, o649m['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = gpbla, this['_onEnd'] = drtkcz['bind'](this['__onEnd'], this), gpbla['onEnded'](this['_onEnd']);
        }
        $_oe9z(o649m, 'laya.wx.mini.MiniSoundChannel', n4h);
        var bgia7v = o649m['prototype'];
        return bgia7v['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (n6o9me['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, bgia7v['__onNull'] = function () {}, bgia7v['play'] = function () {
            this['isStopped'] = ![], fpx2l['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, bgia7v['stop'] = function () {
            this['isStopped'] = !![], fpx2l['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, bgia7v['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, bgia7v['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], fpx2l['addChannel'](this), this['_audio']['play']();
        }, p20fla(0x0, bgia7v, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), p20fla(0x0, bgia7v, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), p20fla(0x0, bgia7v, 'volume', function () {
            return 0x1;
        }, function (fabglp) {}), o649m['_null'] = undefined, o649m;
    }(dre),
        ztc$r = function () {
        function o64m() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = lgvbai['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        $_oe9z(o64m, 'laya.wx.mini.MiniVideo');
        var z$9_o = o64m['prototype'];
        return z$9_o['on'] = function (s18wh, ydc5t, tk5cy) {
            if (s18wh == 'loadedmetadata') this['onPlayFunc'] = tk5cy['bind'](ydc5t), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else s18wh == 'ended' && (this['onEndedFunC'] = tk5cy['bind'](ydc5t), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, z$9_o['onTimeUpdateFunc'] = function (fl0agp) {
            this['position'] = fl0agp['position'], this['_duration'] = fl0agp['duration'];
        }, z$9_o['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, z$9_o['onended'] = function (huwsj8, m648h1) {
            this['onEndedFunC'] = m648h1['bind'](huwsj8), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, z$9_o['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, z$9_o['off'] = function (rct$dz, r_c$z, ykrdct) {
            if (rct$dz == 'loadedmetadata') this['onPlayFunc'] = ykrdct['bind'](r_c$z), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else rct$dz == 'ended' && (this['onEndedFunC'] = ykrdct['bind'](r_c$z), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, z$9_o['load'] = function (fp3x0) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = fp3x0;
        }, z$9_o['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, z$9_o['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, z$9_o['size'] = function (lfapb, o9z) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = lfapb, this['videoElement']['height'] = o9z;
        }, z$9_o['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, z$9_o['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, p20fla(0x0, z$9_o, 'duration', function () {
            return this['_duration'];
        }), p20fla(0x0, z$9_o, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (uqswj8) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = uqswj8;
        }), p20fla(0x0, z$9_o, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), p20fla(0x0, z$9_o, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), p20fla(0x0, z$9_o, 'ended', function () {
            return this['videoend'];
        }), p20fla(0x0, z$9_o, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (ytrkd) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = ytrkd;
        }), p20fla(0x0, z$9_o, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (gfla0p) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = gfla0p;
        }), p20fla(0x0, z$9_o, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (p302f) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = p302f;
        }), p20fla(0x0, z$9_o, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), p20fla(0x0, z$9_o, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (zre_9) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = zre_9;
        }), p20fla(0x0, z$9_o, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (libpg) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = libpg;
        }), p20fla(0x0, z$9_o, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), p20fla(0x0, z$9_o, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (o641nm) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = o641nm;
        }), p20fla(0x0, z$9_o, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (kycdrt) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = kycdrt;
        }), p20fla(0x0, z$9_o, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (m14hn) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = m14hn;
        }), o64m;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var x3025y in Laya) {
        var k5ydt = Laya[x3025y];
        k5ydt && k5ydt['__isclass'] && (exports[x3025y] = k5ydt);
    }
});