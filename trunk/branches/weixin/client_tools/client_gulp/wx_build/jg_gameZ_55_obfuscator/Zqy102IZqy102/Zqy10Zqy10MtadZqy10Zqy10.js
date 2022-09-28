var J = wx.h$;
(function (window, document, covink) {
    var ql9zy1 = covink['un'],
        nvck = covink['uns'],
        k$0vxi = covink['static'],
        i0knvo = covink['class'],
        sw8r32 = covink['getset'],
        $i0vx = covink['__newvec'],
        x0kio = laya['utils']['Browser'],
        p7m6ta = laya['events']['Event'],
        s23_ = laya['events']['EventDispatcher'],
        b4u5d = laya['resource']['HTMLImage'],
        lgqx$0 = laya['utils']['Handler'],
        ampt67 = laya['display']['Input'],
        fs8h = laya['net']['Loader'],
        vg$xk0 = laya['maths']['Matrix'],
        xl0 = laya['renders']['Render'],
        ar2sw = laya['utils']['RunDriver'],
        qg$x0l = laya['media']['Sound'],
        nvoik = laya['media']['SoundChannel'],
        _rs382 = laya['media']['SoundManager'],
        voi0kn = laya['display']['Stage'],
        r3_8fs = laya['net']['URL'],
        dbue4 = laya['utils']['Utils'],
        pa7tm = function () {
        function mwt72() {}
        return i0knvo(mwt72, 'laya.wx.mini.MiniAdpter'), mwt72['getJson'] = function (i$kv) {
            return JSON['parse'](i$kv);
        }, mwt72['init'] = function (deuhf4, efh_d) {
            deuhf4 === void 0x0 && (deuhf4 = ![]), efh_d === void 0x0 && (efh_d = ![]);
            if (mwt72['_inited']) return;
            mwt72['window'] = window;
            if (mwt72['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            mwt72['_inited'] = !![], mwt72['isZiYu'] = efh_d, mwt72['isPosMsgYu'] = deuhf4, mwt72['EnvConfig'] = {}, !mwt72['isZiYu'] && (u5deb4['setNativeFileDir']('/layaairGame'), u5deb4['existDir'](u5deb4['fileNativeDir'], lgqx$0['create'](mwt72, mwt72['onMkdirCallBack']))), mwt72['window']['focus'] = function () {}, covink['getUrlPath'] = function () {}, mwt72['window']['logtime'] = function (a3ws2r) {}, mwt72['window']['alertTimeLog'] = function (fh4ude) {}, mwt72['window']['resetShareInfo'] = function () {}, mwt72['window']['CanvasRenderingContext2D'] = function () {}, mwt72['window']['CanvasRenderingContext2D']['prototype'] = mwt72['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], mwt72['window']['document']['body']['appendChild'] = function () {}, mwt72['EnvConfig']['pixelRatioInt'] = 0x0, ar2sw['getPixelRatio'] = mwt72['pixelRatio'], mwt72['_preCreateElement'] = x0kio['createElement'], x0kio['createElement'] = mwt72['createElement'], ar2sw['createShaderCondition'] = mwt72['createShaderCondition'], dbue4['parseXMLFromString'] = mwt72['parseXMLFromString'], ampt67['_createInputElement'] = _ehdf['_createInputElement'], mwt72['EnvConfig']['load'] = fs8h['prototype']['load'], fs8h['prototype']['load'] = nv0kio['prototype']['load'], mwt72['isZiYu'] && deuhf4 && wx['onMessage'](function (ra2s) {
                ra2s['isLoad'] && (u5deb4['ziyuFileData'][ra2s['url']] = ra2s['data']);
            });
        }, mwt72['onMkdirCallBack'] = function (njio, $kxqg) {
            if (!njio) u5deb4['filesListObj'] = JSON['parse']($kxqg['data']);
        }, mwt72['pixelRatio'] = function () {
            if (!mwt72['EnvConfig']['pixelRatioInt']) try {
                var dh5e4 = wx['getSystemInfoSync']();
                return mwt72['EnvConfig']['pixelRatioInt'] = dh5e4['pixelRatio'], dh5e4 = dh5e4, dh5e4['pixelRatio'];
            } catch (qxgl$y) {}
            return mwt72['EnvConfig']['pixelRatioInt'];
        }, mwt72['createElement'] = function (efh_8d) {
            if (efh_8d == 'canvas') {
                var yg91q;
                return mwt72['idx'] == 0x1 ? mwt72['isZiYu'] ? (yg91q = sharedCanvas, yg91q['style'] = {}) : yg91q = window['canvas'] : yg91q = window['wx']['createCanvas'](), mwt72['idx']++, yg91q;
            } else {
                if (efh_8d == 'textarea' || efh_8d == 'input') return mwt72['onCreateInput'](efh_8d);else {
                    if (efh_8d == 'div') {
                        var hdfe_4 = mwt72['_preCreateElement'](efh_8d);
                        return hdfe_4['contains'] = function (eb45d) {
                            return null;
                        }, hdfe_4['removeChild'] = function (xi0vok) {}, hdfe_4;
                    } else return mwt72['_preCreateElement'](efh_8d);
                }
            }
        }, mwt72['onCreateInput'] = function ($g0qk) {
            var mtz67 = mwt72['_preCreateElement']($g0qk);
            return mtz67['focus'] = _ehdf['wxinputFocus'], mtz67['blur'] = _ehdf['wxinputblur'], mtz67['style'] = {}, mtz67['value'] = 0x0, mtz67['parentElement'] = {}, mtz67['placeholder'] = {}, mtz67['type'] = {}, mtz67['setColor'] = function (t6p19z) {}, mtz67['setType'] = function (am7rw) {}, mtz67['setFontFace'] = function (xi$0v) {}, mtz67['addEventListener'] = function (ikcvno) {}, mtz67['contains'] = function (lyzq1) {
                return null;
            }, mtz67['removeChild'] = function (mz7) {}, mtz67;
        }, mwt72['createShaderCondition'] = function (p6z1y) {
            var dbeu4 = this,
                wt72ma = function () {
                var y$xqgl = p6z1y;
                return dbeu4[p6z1y['replace']('this.', '')];
            };
            return wt72ma;
        }, mwt72['EnvConfig'] = null, mwt72['window'] = null, mwt72['_preCreateElement'] = null, mwt72['_inited'] = ![], mwt72['wxRequest'] = null, mwt72['systemInfo'] = null, mwt72['version'] = '0.0.1', mwt72['isZiYu'] = ![], mwt72['isPosMsgYu'] = ![], mwt72['parseXMLFromString'] = function (cinvoj) {
            var e5b4du, q$lygx;
            cinvoj = cinvoj['replace'](/>\s+</g, '><');
            try {
                e5b4du = new window['Parser']['DOMParser']()['parseFromString'](cinvoj, 'text/xml');
            } catch (f8e_d) {
                throw '需要引入xml解析库文件';
            }
            return e5b4du;
        }, mwt72['idx'] = 0x1, mwt72;
    }(),
        lq$g = function () {
        function wa72mt() {}
        i0knvo(wa72mt, 'laya.wx.mini.MiniImage');
        var cojin = wa72mt['prototype'];
        return cojin['_loadImage'] = function (o0vkx) {
            var eud4f = this,
                s8r32 = ![];
            o0vkx['indexOf']('layaNativeDir/') == -0x1 && (s8r32 = !![], o0vkx = r3_8fs['formatURL'](o0vkx));
            if (!u5deb4['getFileInfo'](o0vkx)) {
                if (o0vkx['indexOf']('http://') != -0x1 || o0vkx['indexOf']('https://') != -0x1) u5deb4['downImg'](o0vkx, new lgqx$0(wa72mt, wa72mt['onDownImgCallBack'], [o0vkx, eud4f]), o0vkx);else wa72mt['onCreateImage'](o0vkx, eud4f, !![]);
            } else wa72mt['onCreateImage'](o0vkx, eud4f, !s8r32);
        }, wa72mt['onDownImgCallBack'] = function (noivk0, f38rs, vncok) {
            if (!vncok) wa72mt['onCreateImage'](noivk0, f38rs);else f38rs['onError'](null);
        }, wa72mt['onCreateImage'] = function (r38_2s, w23ra7, k0g$) {
            k0g$ === void 0x0 && (k0g$ = ![]);
            var m6atp;
            if (!k0g$) {
                var fshe8_ = u5deb4['getFileInfo'](r38_2s),
                    inojcv = fshe8_['md5'];
                m6atp = u5deb4['getFileNativePath'](inojcv);
            } else m6atp = r38_2s;
            if (w23ra7['imgCache'] == null) w23ra7['imgCache'] = {};
            var z1yp69;
            function dfe_4h() {
                z1yp69['onload'] = null, z1yp69['onerror'] = null, delete w23ra7['imgCache'][r38_2s];
            }
            ;
            var $g = function () {
                dfe_4h(), w23ra7['onLoaded'](z1yp69);
            },
                novji = function () {
                dfe_4h(), w23ra7['event']('error', 'Load image failed');
            };
            w23ra7['_type'] == 'nativeimage' ? (z1yp69 = new x0kio['window']['Image'](), z1yp69['crossOrigin'] = '', z1yp69['onload'] = $g, z1yp69['onerror'] = novji, z1yp69['src'] = m6atp, w23ra7['imgCache'][r38_2s] = z1yp69) : new b4u5d['create'](m6atp, {
                'onload': $g,
                'onerror': novji,
                'onCreate': function (t1p69) {
                    z1yp69 = t1p69, w23ra7['imgCache'][r38_2s] = t1p69;
                }
            });
        }, wa72mt;
    }(),
        _ehdf = function () {
        function vikocn() {}
        return i0knvo(vikocn, 'laya.wx.mini.MiniInput'), vikocn['_createInputElement'] = function () {
            ampt67['_initInput'](ampt67['area'] = x0kio['createElement']('textarea')), ampt67['_initInput'](ampt67['input'] = x0kio['createElement']('input')), ampt67['inputContainer'] = x0kio['createElement']('div'), ampt67['inputContainer']['style']['position'] = 'absolute', ampt67['inputContainer']['style']['zIndex'] = 0x186a0, x0kio['container']['appendChild'](ampt67['inputContainer']), ampt67['inputContainer']['setPos'] = function (_fr38, lg0$q) {
                ampt67['inputContainer']['style']['left'] = _fr38 + 'px', ampt67['inputContainer']['style']['top'] = lg0$q + 'px';
            }, covink['stage']['on']('resize', null, vikocn['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (x$lg0q) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), _rs382['_soundClass'] = mp6t7z, _rs382['_musicClass'] = mp6t7z, window['_videoClass'] = p67tz;
        }, vikocn['_onStageResize'] = function () {
            var h_dfe4 = covink['stage']['_canvasTransform']['identity']();
            h_dfe4['scale'](x0kio['width'] / xl0['canvas']['width'] / ar2sw['getPixelRatio'](), x0kio['height'] / xl0['canvas']['height'] / ar2sw['getPixelRatio']());
        }, vikocn['wxinputFocus'] = function (a3r2sw) {
            var ckivo = ampt67['inputElement']['target'];
            if (ckivo && !ckivo['editable']) return;
            pa7tm['window']['wx']['offKeyboardConfirm'](), pa7tm['window']['wx']['offKeyboardInput'](), pa7tm['window']['wx']['showKeyboard']({
                'defaultValue': ckivo['text'],
                'maxLength': ckivo['maxChars'],
                'multiple': ckivo['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (ijcno) {},
                'fail': function (p9y) {}
            }), pa7tm['window']['wx']['onKeyboardConfirm'](function (t76maw) {
                var yqx = t76maw ? t76maw['value'] : '';
                ckivo['text'] = yqx, ckivo['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), pa7tm['window']['wx']['onKeyboardInput'](function (w2mt7a) {
                var gx0kq$ = w2mt7a ? w2mt7a['value'] : '';
                if (!ckivo['multiline']) {
                    if (gx0kq$['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                ckivo['text'] = gx0kq$, ckivo['event']('input');
            });
        }, vikocn['inputEnter'] = function () {
            ampt67['inputElement']['target']['focus'] = ![];
        }, vikocn['wxinputblur'] = function () {
            vikocn['hideKeyboard']();
        }, vikocn['hideKeyboard'] = function () {
            pa7tm['window']['wx']['offKeyboardConfirm'](), pa7tm['window']['wx']['offKeyboardInput'](), pa7tm['window']['wx']['hideKeyboard']({
                'success': function (pz19t6) {
                    console['log']('隐藏键盘');
                },
                'fail': function (okcvin) {
                    console['log']('隐藏键盘出错:' + (okcvin ? okcvin['errMsg'] : ''));
                }
            });
        }, vikocn;
    }(),
        nv0kio = function () {
        function $k0xv() {}
        i0knvo($k0xv, 'laya.wx.mini.MiniLoader');
        var r28 = $k0xv['prototype'];
        return r28['load'] = function (kxivo0, xvg$k0, cjnivo, zt169, twma) {
            cjnivo === void 0x0 && (cjnivo = !![]), twma === void 0x0 && (twma = ![]);
            var qx0l$ = this;
            qx0l$['_url'] = kxivo0;
            if (kxivo0['indexOf']('data:image') === 0x0) qx0l$['_type'] = xvg$k0 = 'image';else qx0l$['_type'] = xvg$k0 || (xvg$k0 = qx0l$['getTypeFromUrl'](kxivo0));
            qx0l$['_cache'] = cjnivo, qx0l$['_data'] = null;
            var p6m7 = 'ascii';
            if (kxivo0['indexOf']('.fnt') != -0x1) p6m7 = 'utf8';else xvg$k0 == 'arraybuffer' && (p6m7 = '');
            ;
            var vnk0i = dbue4['getFileExtension'](kxivo0);
            if ($k0xv['_fileTypeArr']['indexOf'](vnk0i) != -0x1) pa7tm['EnvConfig']['load']['call'](this, kxivo0, xvg$k0, cjnivo, zt169, twma);else {
                if (!u5deb4['getFileInfo'](kxivo0)) {
                    if (kxivo0['indexOf']('layaNativeDir/') != -0x1) {
                        if (pa7tm['isZiYu']) {
                            var xq$0k = u5deb4['ziyuFileData'][kxivo0];
                            qx0l$['onLoaded'](xq$0k);
                            return;
                        } else {
                            cosnole['log']('read read'), u5deb4['read'](kxivo0, p6m7, new lgqx$0($k0xv, $k0xv['onReadNativeCallBack'], [p6m7, kxivo0, xvg$k0, cjnivo, zt169, twma, qx0l$]));
                            return;
                        }
                    }
                    if (r3_8fs['rootPath'] == '') var m7pzt6 = kxivo0;else m7pzt6 = kxivo0['split'](r3_8fs['rootPath'])[0x0];
                    kxivo0['indexOf']('http://') != -0x1 || kxivo0['indexOf']('https://') != -0x1 ? pa7tm['EnvConfig']['load']['call'](qx0l$, kxivo0, xvg$k0, cjnivo, zt169, twma) : u5deb4['readFile'](m7pzt6, p6m7, new lgqx$0($k0xv, $k0xv['onReadNativeCallBack'], [p6m7, kxivo0, xvg$k0, cjnivo, zt169, twma, qx0l$]), kxivo0);
                } else pa7tm['EnvConfig']['load']['call'](this, kxivo0, xvg$k0, cjnivo, zt169, twma);
            }
        }, r28['resMgrLoad'] = function (z91p6t, e4hfd_, f3sh_8, udh4, p6mz1t, ube54, r8sw2) {
            f3sh_8 === void 0x0 && (f3sh_8 = 0x0), udh4 === void 0x0 && (udh4 = ![]), p6mz1t === void 0x0 && (p6mz1t = ![]), ube54 === void 0x0 && (ube54 = 0x0), r8sw2 === void 0x0 && (r8sw2 = 0x3), z91p6t['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', z91p6t), pa7tm['EnvConfig']['resMgrLoad'](z91p6t, (u4fdh, m1zpt, lgqx$) => {
                $k0xv['prototype']['resMgrLoadCallBack'](u4fdh, m1zpt, lgqx$, e4hfd_);
            }, f3sh_8, udh4, p6mz1t, ube54, r8sw2);
        }, r28['resMgrLoadCallBack'] = function (awt72m, r32aws, jnco, gvxk0) {
            console['log']('buff:::', awt72m, jnco, u5deb4['fileNativeDir'] + '///' + u5deb4['fileListName']), gvxk0(awt72m, r32aws, jnco);
        }, r28['clearRes'] = function (i0oxk, _fs8eh) {
            _fs8eh === void 0x0 && (_fs8eh = ![]);
            var ijn = this;
            ijn['clearRes'](i0oxk, _fs8eh);
            var l1g9q = u5deb4['getFileInfo'](i0oxk);
            if (l1g9q && (i0oxk['indexOf']('http://') != -0x1 || i0oxk['indexOf']('https://') != -0x1)) {
                var zq9ly = l1g9q['md5'],
                    $lxygq = u5deb4['getFileNativePath'](zq9ly);
                u5deb4['remove']($lxygq);
            }
        }, $k0xv['onReadNativeCallBack'] = function (feh_8d, l0$, uehd54, a3sw2, zm1pt6, ufe4hd, k0$g, mzt61p, s_he8) {
            a3sw2 === void 0x0 && (a3sw2 = !![]), ufe4hd === void 0x0 && (ufe4hd = ![]), mzt61p === void 0x0 && (mzt61p = 0x0);
            if (!mzt61p) {
                var ionck;
                if (uehd54 == 'json' || uehd54 == 'atlas') ionck = pa7tm['getJson'](s_he8['data']);else uehd54 == 'xml' ? ionck = dbue4['parseXMLFromString'](s_he8['data']) : ionck = s_he8['data'];
                k0$g['onLoaded'](ionck), !pa7tm['isZiYu'] && pa7tm['isPosMsgYu'] && uehd54 != 'arraybuffer' && wx['postMessage']({
                    'url': l0$,
                    'data': ionck,
                    'isLoad': !![]
                });
            } else mzt61p == 0x1 && pa7tm['EnvConfig']['load']['call'](k0$g, l0$, uehd54, a3sw2, zm1pt6, ufe4hd);
        }, k$0vxi($k0xv, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), $k0xv;
    }(),
        u5deb4 = function (hdf_) {
        function _hedf4() {
            _hedf4['__super']['call'](this);
            ;
        }
        return i0knvo(_hedf4, 'laya.wx.mini.MiniFileMgr', hdf_), _hedf4['isLoadFile'] = function (vi0oxk) {
            return _hedf4['_fileTypeArr']['indexOf'](vi0oxk) != -0x1 ? !![] : ![];
        }, _hedf4['getFileInfo'] = function (kq0x$) {
            var lg9$yq = kq0x$['split']('?')[0x0],
                zp196t = _hedf4['filesListObj'][lg9$yq];
            if (zp196t == null) return null;else return zp196t;
            return null;
        }, _hedf4['onFileUpdate'] = function (mt6p, udb54) {
            var $x0qlg = mt6p['split']('/'),
                sh8e_f = $x0qlg[$x0qlg['length'] - 0x1],
                _f8sh3 = _hedf4['getFileInfo'](udb54);
            if (_f8sh3 == null) _hedf4['onSaveFile'](udb54, sh8e_f);else {
                if (_f8sh3['readyUrl'] != udb54) _hedf4['remove'](sh8e_f, udb54);
            }
        }, _hedf4['exits'] = function (noickv, njivco) {
            var s38_h = _hedf4['getFileNativePath'](noickv);
            _hedf4['fs']['getFileInfo']({
                'filePath': s38_h,
                'success': function (d4he_f) {
                    njivco != null && njivco['runWith']([0x0, d4he_f]);
                },
                'fail': function (glqyx$) {
                    njivco != null && njivco['runWith']([0x1, glqyx$]);
                }
            });
        }, _hedf4['read'] = function (amwt27, cvnijo, u45hd, q9gy$l) {
            cvnijo === void 0x0 && (cvnijo = 'ascill'), q9gy$l === void 0x0 && (q9gy$l = '');
            var $qgy9;
            q9gy$l != '' ? $qgy9 = _hedf4['getFileNativePath'](amwt27) : $qgy9 = amwt27, _hedf4['fs']['readFile']({
                'filePath': $qgy9,
                'encoding': cvnijo,
                'success': function (u5de4b) {
                    u45hd != null && u45hd['runWith']([0x0, u5de4b]);
                },
                'fail': function (xkgv$) {
                    if (xkgv$ && q9gy$l != '') _hedf4['down'](q9gy$l, cvnijo, u45hd, q9gy$l);else u45hd != null && u45hd['runWith']([0x1]);
                }
            });
        }, _hedf4['readNativeFile'] = function (gl0$q, a7mp6t) {
            _hedf4['fs']['readFile']({
                'filePath': gl0$q,
                'encoding': '',
                'success': function ($0ik) {
                    a7mp6t != null && a7mp6t['runWith']([0x0]);
                },
                'fail': function (qxlg0) {
                    a7mp6t != null && a7mp6t['runWith']([0x1]);
                }
            });
        }, _hedf4['down'] = function (dh4uf, gq9ly1, rmwa2, oi0vnk) {
            gq9ly1 === void 0x0 && (gq9ly1 = 'ascill'), oi0vnk === void 0x0 && (oi0vnk = '');
            var y$9gl = _hedf4['getFileNativePath'](oi0vnk),
                eud5b = _hedf4['wxdown']({
                'url': dh4uf,
                'filePath': y$9gl,
                'success': function (p6yz19) {
                    if (p6yz19['statusCode'] === 0xc8) _hedf4['readFile'](p6yz19['filePath'], gq9ly1, rmwa2, oi0vnk);
                },
                'fail': function (xk$i0) {
                    rmwa2 != null && rmwa2['runWith']([0x1, xk$i0]);
                }
            });
            eud5b['onProgressUpdate'](function (e5b4ud) {
                rmwa2 != null && rmwa2['runWith']([0x2, e5b4ud['progress']]);
            });
        }, _hedf4['readFile'] = function (de_, ivkno0, hde8f, $qkxg0) {
            ivkno0 === void 0x0 && (ivkno0 = 'ascill'), $qkxg0 === void 0x0 && ($qkxg0 = ''), _hedf4['fs']['readFile']({
                'filePath': de_,
                'encoding': ivkno0,
                'success': function (gxk$0) {
                    if (de_['indexOf']('http://') != -0x1 || de_['indexOf']('https://') != -0x1) _hedf4['onFileUpdate'](de_, $qkxg0);
                    hde8f != null && hde8f['runWith']([0x0, gxk$0]);
                },
                'fail': function (yp91lz) {
                    if (yp91lz) hde8f != null && hde8f['runWith']([0x1, yp91lz]);
                }
            });
        }, _hedf4['downImg'] = function (noij, wa27tm, $0xkiv) {
            $0xkiv === void 0x0 && ($0xkiv = '');
            var x0$kvg = _hedf4['wxdown']({
                'url': noij,
                'success': function (vknoi) {
                    vknoi['statusCode'] === 0xc8 && _hedf4['copyFile'](vknoi['tempFilePath'], $0xkiv, wa27tm);
                },
                'fail': function (kv0i$x) {
                    wa27tm != null && wa27tm['runWith']([0x1, kv0i$x]);
                }
            });
        }, _hedf4['copyFile'] = function (fsh38, yql19, vix0ko) {
            var a723wr = fsh38['split']('/'),
                w3r27 = a723wr[a723wr['length'] - 0x1],
                pz96t = yql19['split']('?')[0x0],
                ylq = _hedf4['getFileInfo'](yql19),
                yp61z = _hedf4['getFileNativePath'](w3r27);
            _hedf4['fs']['copyFile']({
                'srcPath': fsh38,
                'destPath': yp61z,
                'success': function (hdefu) {
                    if (!ylq) _hedf4['onSaveFile'](yql19, w3r27), vix0ko != null && vix0ko['runWith']([0x0]);else {
                        if (ylq['readyUrl'] != yql19) _hedf4['remove'](w3r27, yql19, vix0ko);
                    }
                },
                'fail': function (mt16) {
                    vix0ko != null && vix0ko['runWith']([0x1, mt16]);
                }
            });
        }, _hedf4['getFileNativePath'] = function (df_4he) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + df_4he;
        }, _hedf4['remove'] = function (ko0xvi, zmt7p6, _h3s8) {
            zmt7p6 === void 0x0 && (zmt7p6 = '');
            var ovkni0 = _hedf4['getFileInfo'](zmt7p6),
                kinocv = _hedf4['getFileNativePath'](ovkni0['md5']);
            covink['loader']['clearRes'](ovkni0['readyUrl']), _hedf4['fs']['unlink']({
                'filePath': kinocv,
                'success': function (g9l1) {
                    if (zmt7p6 != '') _hedf4['onSaveFile'](zmt7p6, ko0xvi);
                    _h3s8 != null && _h3s8['runWith']([0x0]);
                },
                'fail': function (lz9py1) {}
            });
        }, _hedf4['onSaveFile'] = function (zl91, x0$lq) {
            var l1zy9q = zl91['split']('?')[0x0];
            _hedf4['filesListObj'][l1zy9q] = {
                'md5': x0$lq,
                'readyUrl': zl91
            }, _hedf4['fs']['writeFile']({
                'filePath': _hedf4['fileNativeDir'] + '/' + _hedf4['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](_hedf4['filesListObj']),
                'success': function (w3ra) {
                    console['log']('写入测试测试成功：', w3ra);
                },
                'fail': function (sf3r8_) {
                    console['log']('写入测试测试失败：', sf3r8_);
                }
            });
        }, _hedf4['existDir'] = function (tw6ma7, tp61mz) {
            _hedf4['fs']['mkdir']({
                'dirPath': tw6ma7,
                'success': function (z69py) {
                    tp61mz != null && tp61mz['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (hf4due) {
                    if (hf4due['errMsg']['indexOf']('file already exists') != -0x1) _hedf4['readSync'](_hedf4['fileListName'], 'utf8', tp61mz);else tp61mz != null && tp61mz['runWith']([0x1, hf4due]);
                }
            });
        }, _hedf4['readSync'] = function (a72wr3, ql1zy9, w82sr3, xv$k0i) {
            ql1zy9 === void 0x0 && (ql1zy9 = 'ascill'), xv$k0i === void 0x0 && (xv$k0i = '');
            var onvcki = _hedf4['getFileNativePath'](a72wr3),
                efdh8;
            try {
                efdh8 = _hedf4['fs']['readFileSync'](onvcki), w82sr3 != null && w82sr3['runWith']([0x0, { 'data': efdh8 }]);
            } catch (ueh4df) {
                w82sr3 != null && w82sr3['runWith']([0x1]);
            }
        }, _hedf4['readCache'] = function () {}, _hedf4['writeCache'] = function (m2wat7) {
            var ocjivn = readyUrl['split']('?')[0x0];
            _hedf4['filesListObj'][ocjivn] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, _hedf4['fs']['writeFile']({
                'filePath': _hedf4['fileNativeDir'] + '/' + _hedf4['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](_hedf4['filesListObj']),
                'success': function (t9zp6) {},
                'fail': function (mpa67) {}
            });
        }, _hedf4['setNativeFileDir'] = function (g91lq) {
            _hedf4['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + g91lq;
        }, _hedf4['filesListObj'] = {}, _hedf4['fileNativeDir'] = null, _hedf4['fileListName'] = 'layaairfiles.txt', _hedf4['ziyuFileData'] = {}, k$0vxi(_hedf4, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), _hedf4;
    }(s23_),
        mp6t7z = function (q91lyz) {
        function t6p7am() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], t6p7am['__super']['call'](this), this['_sound'] = t6p7am['_createSound'](), this['_chanell'] = new a6p7tm(this['_sound']);
        }
        i0knvo(t6p7am, 'laya.wx.mini.MiniSound', q91lyz);
        var nv0iok = t6p7am['prototype'];
        return nv0iok['load'] = function (f8d_he) {
            var q0gx$k = this;
            f8d_he = r3_8fs['formatURL'](f8d_he), this['url'] = f8d_he;
            if (t6p7am['_audioCache'][f8d_he]) {
                this['event']('complete');
                return;
            }
            function ap76mt() {
                if (t6p7am['_null'] != undefined) q0gx$k['_sound']['onCanplay'](t6p7am['_null']), q0gx$k['_sound']['onError'](t6p7am['_null']);else try {
                    q0gx$k['_sound']['onCanplay'](null), q0gx$k['_sound']['onError'](null), t6p7am['_null'] = null;
                } catch (o0nv) {
                    console['warn']('[wxmini] _clearSound:' + o0nv), q0gx$k['_sound']['onCanplay'](x0iv), q0gx$k['_sound']['onError'](x0iv), t6p7am['_null'] = x0iv;
                }
            }
            function mr7a() {
                mz6tp1['loaded'] = !![], mz6tp1['event']('complete'), t6p7am['_audioCache'][mz6tp1['url']] = mz6tp1;
            }
            function kxgq0$(kq0x$g) {
                console['error']('errCode=' + kq0x$g['errCode'] + '  errMsg=' + kq0x$g['errMsg']), mz6tp1['event']('error');
            }
            function x0iv() {}
            this['_sound']['onCanplay'](mr7a), this['_sound']['onError'](kxgq0$), this['_sound']['src'] = f8d_he;
            var mz6tp1 = this;
        }, nv0iok['play'] = function (fs_3r8, u5ed) {
            fs_3r8 === void 0x0 && (fs_3r8 = 0x0), u5ed === void 0x0 && (u5ed = 0x0);
            var e45, wrm27;
            if (this['url'] == _rs382['_tMusic']) {
                if (!t6p7am['_musicAudio']) t6p7am['_musicAudio'] = this['_sound'];
                e45 = t6p7am['_musicAudio'], wrm27 = this['_chanell'];
            } else e45 = this['_sound'], wrm27 = this['_chanell'];
            return e45['src'] = this['url'], e45['startTime'] = 0x0, wrm27['isStopped'] && (wrm27['url'] = this['url'], wrm27['loops'] = u5ed, wrm27['startTime'] = fs_3r8, wrm27['play'](), _rs382['addChannel'](wrm27)), wrm27;
        }, nv0iok['dispose'] = function () {
            var _fe4dh = t6p7am['_audioCache'][this['url']];
            _fe4dh && (_fe4dh['src'] = '', delete t6p7am['_audioCache'][this['url']]);
        }, sw8r32(0x0, nv0iok, 'duration', function () {
            return this['_sound']['duration'];
        }), t6p7am['_createSound'] = function () {
            t6p7am['_id']++;
            var jivcon = pa7tm['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return jivcon;
        }, t6p7am['_musicAudio'] = null, t6p7am['_id'] = 0x0, t6p7am['_audioCache'] = {}, t6p7am['_null'] = undefined, t6p7am;
    }(s23_),
        a6p7tm = function (xvk0i) {
        function u4b5de(x0kg$v) {
            this['_audio'] = null, this['_onEnd'] = null, u4b5de['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = x0kg$v, this['_onEnd'] = dbue4['bind'](this['__onEnd'], this), x0kg$v['onEnded'](this['_onEnd']);
        }
        i0knvo(u4b5de, 'laya.wx.mini.MiniSoundChannel', xvk0i);
        var qzl1y = u4b5de['prototype'];
        return qzl1y['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (covink['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, qzl1y['__onNull'] = function () {}, qzl1y['play'] = function () {
            this['isStopped'] = ![], _rs382['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, qzl1y['stop'] = function () {
            this['isStopped'] = !![], _rs382['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, qzl1y['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, qzl1y['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], _rs382['addChannel'](this), this['_audio']['play']();
        }, sw8r32(0x0, qzl1y, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), sw8r32(0x0, qzl1y, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), sw8r32(0x0, qzl1y, 'volume', function () {
            return 0x1;
        }, function (hdef4_) {}), u4b5de['_null'] = undefined, u4b5de;
    }(nvoik),
        p67tz = function () {
        function ixv0$k() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = pa7tm['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        i0knvo(ixv0$k, 'laya.wx.mini.MiniVideo');
        var noivjc = ixv0$k['prototype'];
        return noivjc['on'] = function (y1l9zp, s23ar, gk0xv$) {
            if (y1l9zp == 'loadedmetadata') this['onPlayFunc'] = gk0xv$['bind'](s23ar), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else y1l9zp == 'ended' && (this['onEndedFunC'] = gk0xv$['bind'](s23ar), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, noivjc['onTimeUpdateFunc'] = function (_3fsr8) {
            this['position'] = _3fsr8['position'], this['_duration'] = _3fsr8['duration'];
        }, noivjc['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, noivjc['onended'] = function (ivocj, ovkinc) {
            this['onEndedFunC'] = ovkinc['bind'](ivocj), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, noivjc['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, noivjc['off'] = function (vx$g, _es8fh, ovcnki) {
            if (vx$g == 'loadedmetadata') this['onPlayFunc'] = ovcnki['bind'](_es8fh), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else vx$g == 'ended' && (this['onEndedFunC'] = ovcnki['bind'](_es8fh), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, noivjc['load'] = function ($gk0v) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = $gk0v;
        }, noivjc['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, noivjc['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, noivjc['size'] = function (p9t61, u4hd5) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = p9t61, this['videoElement']['height'] = u4hd5;
        }, noivjc['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, noivjc['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, sw8r32(0x0, noivjc, 'duration', function () {
            return this['_duration'];
        }), sw8r32(0x0, noivjc, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (hes_f8) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = hes_f8;
        }), sw8r32(0x0, noivjc, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), sw8r32(0x0, noivjc, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), sw8r32(0x0, noivjc, 'ended', function () {
            return this['videoend'];
        }), sw8r32(0x0, noivjc, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (x$k0g) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = x$k0g;
        }), sw8r32(0x0, noivjc, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (mt6wa) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = mt6wa;
        }), sw8r32(0x0, noivjc, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (w2ar7) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = w2ar7;
        }), sw8r32(0x0, noivjc, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), sw8r32(0x0, noivjc, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (nckvoi) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = nckvoi;
        }), sw8r32(0x0, noivjc, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (f_8r3s) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = f_8r3s;
        }), sw8r32(0x0, noivjc, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), sw8r32(0x0, noivjc, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (ixvk0) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = ixvk0;
        }), sw8r32(0x0, noivjc, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function ($0xql) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = $0xql;
        }), sw8r32(0x0, noivjc, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (wa7mt2) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = wa7mt2;
        }), ixv0$k;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var $gq9yl in Laya) {
        var qxk0$g = Laya[$gq9yl];
        qxk0$g && qxk0$g['__isclass'] && (exports[$gq9yl] = qxk0$g);
    }
});