var _ = wx.y$;
(function (window, document, yu5e) {
    var kfv3 = yu5e['un'],
        u4ejiy = yu5e['uns'],
        i2eyb = yu5e['static'],
        vcax_ = yu5e['class'],
        mcax = yu5e['getset'],
        uij5ye = yu5e['__newvec'],
        zw6qh = laya['utils']['Browser'],
        or93 = laya['events']['Event'],
        dw7lp = laya['events']['EventDispatcher'],
        fk9$3v = laya['resource']['HTMLImage'],
        gynb24 = laya['utils']['Handler'],
        whq6 = laya['display']['Input'],
        km_fav = laya['net']['Loader'],
        n4b2gp = laya['maths']['Matrix'],
        r309f = laya['renders']['Render'],
        y4ejbi = laya['utils']['RunDriver'],
        y24be = laya['media']['Sound'],
        ute1j = laya['media']['SoundChannel'],
        mac8_x = laya['media']['SoundManager'],
        tiej = laya['display']['Stage'],
        $v9kf = laya['net']['URL'],
        ng72b = laya['utils']['Utils'],
        sqhzw = function () {
        function j4yieb() {}
        return vcax_(j4yieb, 'laya.wx.mini.MiniAdpter'), j4yieb['getJson'] = function (yjeib4) {
            return JSON['parse'](yjeib4);
        }, j4yieb['init'] = function (lw7dg, qroh) {
            lw7dg === void 0x0 && (lw7dg = ![]), qroh === void 0x0 && (qroh = ![]);
            if (j4yieb['_inited']) return;
            j4yieb['window'] = window;
            if (j4yieb['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            j4yieb['_inited'] = !![], j4yieb['isZiYu'] = qroh, j4yieb['isPosMsgYu'] = lw7dg, j4yieb['EnvConfig'] = {}, !j4yieb['isZiYu'] && (ybn4g2['setNativeFileDir']('/layaairGame'), ybn4g2['existDir'](ybn4g2['fileNativeDir'], gynb24['create'](j4yieb, j4yieb['onMkdirCallBack']))), j4yieb['window']['focus'] = function () {}, yu5e['getUrlPath'] = function () {}, j4yieb['window']['logtime'] = function (k$vf93) {}, j4yieb['window']['alertTimeLog'] = function (zr9o03) {}, j4yieb['window']['resetShareInfo'] = function () {}, j4yieb['window']['CanvasRenderingContext2D'] = function () {}, j4yieb['window']['CanvasRenderingContext2D']['prototype'] = j4yieb['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], j4yieb['window']['document']['body']['appendChild'] = function () {}, j4yieb['EnvConfig']['pixelRatioInt'] = 0x0, y4ejbi['getPixelRatio'] = j4yieb['pixelRatio'], j4yieb['_preCreateElement'] = zw6qh['createElement'], zw6qh['createElement'] = j4yieb['createElement'], y4ejbi['createShaderCondition'] = j4yieb['createShaderCondition'], ng72b['parseXMLFromString'] = j4yieb['parseXMLFromString'], whq6['_createInputElement'] = jy4ibe['_createInputElement'], j4yieb['EnvConfig']['load'] = km_fav['prototype']['load'], km_fav['prototype']['load'] = hqsd6['prototype']['load'], j4yieb['isZiYu'] && lw7dg && wx['onMessage'](function (pgnb4) {
                pgnb4['isLoad'] && (ybn4g2['ziyuFileData'][pgnb4['url']] = pgnb4['data']);
            });
        }, j4yieb['onMkdirCallBack'] = function (teju1, p42gb) {
            if (!teju1) ybn4g2['filesListObj'] = JSON['parse'](p42gb['data']);
        }, j4yieb['pixelRatio'] = function () {
            if (!j4yieb['EnvConfig']['pixelRatioInt']) try {
                var yju = wx['getSystemInfoSync']();
                return j4yieb['EnvConfig']['pixelRatioInt'] = yju['pixelRatio'], yju = yju, yju['pixelRatio'];
            } catch (a_vk) {}
            return j4yieb['EnvConfig']['pixelRatioInt'];
        }, j4yieb['createElement'] = function (pbgn4) {
            if (pbgn4 == 'canvas') {
                var qzoh6;
                return j4yieb['idx'] == 0x1 ? j4yieb['isZiYu'] ? (qzoh6 = sharedCanvas, qzoh6['style'] = {}) : qzoh6 = window['canvas'] : qzoh6 = window['wx']['createCanvas'](), j4yieb['idx']++, qzoh6;
            } else {
                if (pbgn4 == 'textarea' || pbgn4 == 'input') return j4yieb['onCreateInput'](pbgn4);else {
                    if (pbgn4 == 'div') {
                        var dqls = j4yieb['_preCreateElement'](pbgn4);
                        return dqls['contains'] = function (y2bn4) {
                            return null;
                        }, dqls['removeChild'] = function (zqh6o) {}, dqls;
                    } else return j4yieb['_preCreateElement'](pbgn4);
                }
            }
        }, j4yieb['onCreateInput'] = function (mk_f) {
            var av = j4yieb['_preCreateElement'](mk_f);
            return av['focus'] = jy4ibe['wxinputFocus'], av['blur'] = jy4ibe['wxinputblur'], av['style'] = {}, av['value'] = 0x0, av['parentElement'] = {}, av['placeholder'] = {}, av['type'] = {}, av['setColor'] = function (va_mc) {}, av['setType'] = function (c_avkm) {}, av['setFontFace'] = function (z0rhq) {}, av['addEventListener'] = function (kva$m) {}, av['contains'] = function (nyb4g2) {
                return null;
            }, av['removeChild'] = function (gdwpl7) {}, av;
        }, j4yieb['createShaderCondition'] = function (nbp4) {
            var bn2p4g = this,
                d7gwl = function () {
                var _vcxam = nbp4;
                return bn2p4g[nbp4['replace']('this.', '')];
            };
            return d7gwl;
        }, j4yieb['EnvConfig'] = null, j4yieb['window'] = null, j4yieb['_preCreateElement'] = null, j4yieb['_inited'] = ![], j4yieb['wxRequest'] = null, j4yieb['systemInfo'] = null, j4yieb['version'] = '0.0.1', j4yieb['isZiYu'] = ![], j4yieb['isPosMsgYu'] = ![], j4yieb['parseXMLFromString'] = function (ohq0) {
            var pwdsl, wdhqs6;
            ohq0 = ohq0['replace'](/>\s+</g, '><');
            try {
                pwdsl = new window['Parser']['DOMParser']()['parseFromString'](ohq0, 'text/xml');
            } catch (s6wzhq) {
                throw '需要引入xml解析库文件';
            }
            return pwdsl;
        }, j4yieb['idx'] = 0x1, j4yieb;
    }(),
        vfk3$ = function () {
        function nb7pg() {}
        vcax_(nb7pg, 'laya.wx.mini.MiniImage');
        var ohrz03 = nb7pg['prototype'];
        return ohrz03['_loadImage'] = function (gn2by4) {
            var ac_vmk = this,
                lg7d = ![];
            gn2by4['indexOf']('layaNativeDir/') == -0x1 && (lg7d = !![], gn2by4 = $v9kf['formatURL'](gn2by4));
            if (!ybn4g2['getFileInfo'](gn2by4)) {
                if (gn2by4['indexOf']('http://') != -0x1 || gn2by4['indexOf']('https://') != -0x1) ybn4g2['downImg'](gn2by4, new gynb24(nb7pg, nb7pg['onDownImgCallBack'], [gn2by4, ac_vmk]), gn2by4);else nb7pg['onCreateImage'](gn2by4, ac_vmk, !![]);
            } else nb7pg['onCreateImage'](gn2by4, ac_vmk, !lg7d);
        }, nb7pg['onDownImgCallBack'] = function (k$9mfv, bng42, euijt5) {
            if (!euijt5) nb7pg['onCreateImage'](k$9mfv, bng42);else bng42['onError'](null);
        }, nb7pg['onCreateImage'] = function (p72lg, iue5yj, k$3vf) {
            k$3vf === void 0x0 && (k$3vf = ![]);
            var s6q;
            if (!k$3vf) {
                var lwdsq = ybn4g2['getFileInfo'](p72lg),
                    ieut5 = lwdsq['md5'];
                s6q = ybn4g2['getFileNativePath'](ieut5);
            } else s6q = p72lg;
            if (iue5yj['imgCache'] == null) iue5yj['imgCache'] = {};
            var eyu4ji;
            function b4iyn2() {
                eyu4ji['onload'] = null, eyu4ji['onerror'] = null, delete iue5yj['imgCache'][p72lg];
            }
            ;
            var nbi42y = function () {
                b4iyn2(), iue5yj['onLoaded'](eyu4ji);
            },
                o0z = function () {
                b4iyn2(), iue5yj['event']('error', 'Load image failed');
            };
            iue5yj['_type'] == 'nativeimage' ? (eyu4ji = new zw6qh['window']['Image'](), eyu4ji['crossOrigin'] = '', eyu4ji['onload'] = nbi42y, eyu4ji['onerror'] = o0z, eyu4ji['src'] = s6q, iue5yj['imgCache'][p72lg] = eyu4ji) : new fk9$3v['create'](s6q, {
                'onload': nbi42y,
                'onerror': o0z,
                'onCreate': function (ozr093) {
                    eyu4ji = ozr093, iue5yj['imgCache'][p72lg] = ozr093;
                }
            });
        }, nb7pg;
    }(),
        jy4ibe = function () {
        function l7pn2g() {}
        return vcax_(l7pn2g, 'laya.wx.mini.MiniInput'), l7pn2g['_createInputElement'] = function () {
            whq6['_initInput'](whq6['area'] = zw6qh['createElement']('textarea')), whq6['_initInput'](whq6['input'] = zw6qh['createElement']('input')), whq6['inputContainer'] = zw6qh['createElement']('div'), whq6['inputContainer']['style']['position'] = 'absolute', whq6['inputContainer']['style']['zIndex'] = 0x186a0, zw6qh['container']['appendChild'](whq6['inputContainer']), whq6['inputContainer']['setPos'] = function (e5i, _cvaxm) {
                whq6['inputContainer']['style']['left'] = e5i + 'px', whq6['inputContainer']['style']['top'] = _cvaxm + 'px';
            }, yu5e['stage']['on']('resize', null, l7pn2g['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (nby24i) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), mac8_x['_soundClass'] = qdswl6, mac8_x['_musicClass'] = qdswl6, window['_videoClass'] = oz903r;
        }, l7pn2g['_onStageResize'] = function () {
            var o6szqh = yu5e['stage']['_canvasTransform']['identity']();
            o6szqh['scale'](zw6qh['width'] / r309f['canvas']['width'] / y4ejbi['getPixelRatio'](), zw6qh['height'] / r309f['canvas']['height'] / y4ejbi['getPixelRatio']());
        }, l7pn2g['wxinputFocus'] = function (rho0qz) {
            var ln7dp = whq6['inputElement']['target'];
            if (ln7dp && !ln7dp['editable']) return;
            sqhzw['window']['wx']['offKeyboardConfirm'](), sqhzw['window']['wx']['offKeyboardInput'](), sqhzw['window']['wx']['showKeyboard']({
                'defaultValue': ln7dp['text'],
                'maxLength': ln7dp['maxChars'],
                'multiple': ln7dp['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (fvma$k) {},
                'fail': function ($fr39k) {}
            }), sqhzw['window']['wx']['onKeyboardConfirm'](function (y42i) {
                var pnb24 = y42i ? y42i['value'] : '';
                ln7dp['text'] = pnb24, ln7dp['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), sqhzw['window']['wx']['onKeyboardInput'](function (mf$9) {
                var fk9m$ = mf$9 ? mf$9['value'] : '';
                if (!ln7dp['multiline']) {
                    if (fk9m$['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                ln7dp['text'] = fk9m$, ln7dp['event']('input');
            });
        }, l7pn2g['inputEnter'] = function () {
            whq6['inputElement']['target']['focus'] = ![];
        }, l7pn2g['wxinputblur'] = function () {
            l7pn2g['hideKeyboard']();
        }, l7pn2g['hideKeyboard'] = function () {
            sqhzw['window']['wx']['offKeyboardConfirm'](), sqhzw['window']['wx']['offKeyboardInput'](), sqhzw['window']['wx']['hideKeyboard']({
                'success': function (b2y) {
                    console['log']('隐藏键盘');
                },
                'fail': function (yng24) {
                    console['log']('隐藏键盘出错:' + (yng24 ? yng24['errMsg'] : ''));
                }
            });
        }, l7pn2g;
    }(),
        hqsd6 = function () {
        function fk$r3() {}
        vcax_(fk$r3, 'laya.wx.mini.MiniLoader');
        var kma = fk$r3['prototype'];
        return kma['load'] = function (spw7, qwsd6h, u5yji, xcvam, plg27n) {
            u5yji === void 0x0 && (u5yji = !![]), plg27n === void 0x0 && (plg27n = ![]);
            var va_km = this;
            va_km['_url'] = spw7;
            if (spw7['indexOf']('data:image') === 0x0) va_km['_type'] = qwsd6h = 'image';else va_km['_type'] = qwsd6h || (qwsd6h = va_km['getTypeFromUrl'](spw7));
            va_km['_cache'] = u5yji, va_km['_data'] = null;
            var qds6l = 'ascii';
            if (spw7['indexOf']('.fnt') != -0x1) qds6l = 'utf8';else qwsd6h == 'arraybuffer' && (qds6l = '');
            ;
            var _ckvm = ng72b['getFileExtension'](spw7);
            if (fk$r3['_fileTypeArr']['indexOf'](_ckvm) != -0x1) sqhzw['EnvConfig']['load']['call'](this, spw7, qwsd6h, u5yji, xcvam, plg27n);else {
                if (!ybn4g2['getFileInfo'](spw7)) {
                    if (spw7['indexOf']('layaNativeDir/') != -0x1) {
                        if (sqhzw['isZiYu']) {
                            var k3rf = ybn4g2['ziyuFileData'][spw7];
                            va_km['onLoaded'](k3rf);
                            return;
                        } else {
                            cosnole['log']('read read'), ybn4g2['read'](spw7, qds6l, new gynb24(fk$r3, fk$r3['onReadNativeCallBack'], [qds6l, spw7, qwsd6h, u5yji, xcvam, plg27n, va_km]));
                            return;
                        }
                    }
                    if ($v9kf['rootPath'] == '') var c_mx8a = spw7;else c_mx8a = spw7['split']($v9kf['rootPath'])[0x0];
                    spw7['indexOf']('http://') != -0x1 || spw7['indexOf']('https://') != -0x1 ? sqhzw['EnvConfig']['load']['call'](va_km, spw7, qwsd6h, u5yji, xcvam, plg27n) : ybn4g2['readFile'](c_mx8a, qds6l, new gynb24(fk$r3, fk$r3['onReadNativeCallBack'], [qds6l, spw7, qwsd6h, u5yji, xcvam, plg27n, va_km]), spw7);
                } else sqhzw['EnvConfig']['load']['call'](this, spw7, qwsd6h, u5yji, xcvam, plg27n);
            }
        }, kma['resMgrLoad'] = function (be2yi, y42, xmc, kc_a, wdsl67, n4yg2b, mkaf$) {
            xmc === void 0x0 && (xmc = 0x0), kc_a === void 0x0 && (kc_a = ![]), wdsl67 === void 0x0 && (wdsl67 = ![]), n4yg2b === void 0x0 && (n4yg2b = 0x0), mkaf$ === void 0x0 && (mkaf$ = 0x3), be2yi['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', be2yi), sqhzw['EnvConfig']['resMgrLoad'](be2yi, (pl7sdw, y2i4nb, q0hzo6) => {
                fk$r3['prototype']['resMgrLoadCallBack'](pl7sdw, y2i4nb, q0hzo6, y42);
            }, xmc, kc_a, wdsl67, n4yg2b, mkaf$);
        }, kma['resMgrLoadCallBack'] = function (eyui5j, cx_mav, yb2ie4, o6hqz0) {
            console['log']('buff:::', eyui5j, yb2ie4, ybn4g2['fileNativeDir'] + '///' + ybn4g2['fileListName']), o6hqz0(eyui5j, cx_mav, yb2ie4);
        }, kma['clearRes'] = function ($r39f0, k$avf) {
            k$avf === void 0x0 && (k$avf = ![]);
            var yu5ije = this;
            yu5ije['clearRes']($r39f0, k$avf);
            var pdlng7 = ybn4g2['getFileInfo']($r39f0);
            if (pdlng7 && ($r39f0['indexOf']('http://') != -0x1 || $r39f0['indexOf']('https://') != -0x1)) {
                var mvf_ = pdlng7['md5'],
                    avmck_ = ybn4g2['getFileNativePath'](mvf_);
                ybn4g2['remove'](avmck_);
            }
        }, fk$r3['onReadNativeCallBack'] = function (ujte51, c8_ma, $fr309, bn2g4y, eyj4b, ngpl, o03zrh, juiey4, amckv_) {
            bn2g4y === void 0x0 && (bn2g4y = !![]), ngpl === void 0x0 && (ngpl = ![]), juiey4 === void 0x0 && (juiey4 = 0x0);
            if (!juiey4) {
                var whqs6d;
                if ($fr309 == 'json' || $fr309 == 'atlas') whqs6d = sqhzw['getJson'](amckv_['data']);else $fr309 == 'xml' ? whqs6d = ng72b['parseXMLFromString'](amckv_['data']) : whqs6d = amckv_['data'];
                o03zrh['onLoaded'](whqs6d), !sqhzw['isZiYu'] && sqhzw['isPosMsgYu'] && $fr309 != 'arraybuffer' && wx['postMessage']({
                    'url': c8_ma,
                    'data': whqs6d,
                    'isLoad': !![]
                });
            } else juiey4 == 0x1 && sqhzw['EnvConfig']['load']['call'](o03zrh, c8_ma, $fr309, bn2g4y, eyj4b, ngpl);
        }, i2eyb(fk$r3, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), fk$r3;
    }(),
        ybn4g2 = function (dwpl7) {
        function ib4n2() {
            ib4n2['__super']['call'](this);
            ;
        }
        return vcax_(ib4n2, 'laya.wx.mini.MiniFileMgr', dwpl7), ib4n2['isLoadFile'] = function (eiyjb) {
            return ib4n2['_fileTypeArr']['indexOf'](eiyjb) != -0x1 ? !![] : ![];
        }, ib4n2['getFileInfo'] = function (wdl76) {
            var u5tj1e = wdl76['split']('?')[0x0],
                ld7swp = ib4n2['filesListObj'][u5tj1e];
            if (ld7swp == null) return null;else return ld7swp;
            return null;
        }, ib4n2['onFileUpdate'] = function (lpds7, amv$) {
            var q6z0 = lpds7['split']('/'),
                _8 = q6z0[q6z0['length'] - 0x1],
                hoqr = ib4n2['getFileInfo'](amv$);
            if (hoqr == null) ib4n2['onSaveFile'](amv$, _8);else {
                if (hoqr['readyUrl'] != amv$) ib4n2['remove'](_8, amv$);
            }
        }, ib4n2['exits'] = function (cxa_, iuejy4) {
            var vx_mac = ib4n2['getFileNativePath'](cxa_);
            ib4n2['fs']['getFileInfo']({
                'filePath': vx_mac,
                'success': function (swql6d) {
                    iuejy4 != null && iuejy4['runWith']([0x0, swql6d]);
                },
                'fail': function (zr0q) {
                    iuejy4 != null && iuejy4['runWith']([0x1, zr0q]);
                }
            });
        }, ib4n2['read'] = function (bp72gn, je4yi, _fk, q0ohrz) {
            je4yi === void 0x0 && (je4yi = 'ascill'), q0ohrz === void 0x0 && (q0ohrz = '');
            var slqwd6;
            q0ohrz != '' ? slqwd6 = ib4n2['getFileNativePath'](bp72gn) : slqwd6 = bp72gn, ib4n2['fs']['readFile']({
                'filePath': slqwd6,
                'encoding': je4yi,
                'success': function (u5jey) {
                    _fk != null && _fk['runWith']([0x0, u5jey]);
                },
                'fail': function (b4jiye) {
                    if (b4jiye && q0ohrz != '') ib4n2['down'](q0ohrz, je4yi, _fk, q0ohrz);else _fk != null && _fk['runWith']([0x1]);
                }
            });
        }, ib4n2['readNativeFile'] = function (e4jbi, d7swl) {
            ib4n2['fs']['readFile']({
                'filePath': e4jbi,
                'encoding': '',
                'success': function (ibjey4) {
                    d7swl != null && d7swl['runWith']([0x0]);
                },
                'fail': function (y5jei) {
                    d7swl != null && d7swl['runWith']([0x1]);
                }
            });
        }, ib4n2['down'] = function (n7plg2, mavf_k, bg2n7p, s7lpwd) {
            mavf_k === void 0x0 && (mavf_k = 'ascill'), s7lpwd === void 0x0 && (s7lpwd = '');
            var ui5jte = ib4n2['getFileNativePath'](s7lpwd),
                vckm_ = ib4n2['wxdown']({
                'url': n7plg2,
                'filePath': ui5jte,
                'success': function (d7gp) {
                    if (d7gp['statusCode'] === 0xc8) ib4n2['readFile'](d7gp['filePath'], mavf_k, bg2n7p, s7lpwd);
                },
                'fail': function (c8_mx) {
                    bg2n7p != null && bg2n7p['runWith']([0x1, c8_mx]);
                }
            });
            vckm_['onProgressUpdate'](function (nb4iy) {
                bg2n7p != null && bg2n7p['runWith']([0x2, nb4iy['progress']]);
            });
        }, ib4n2['readFile'] = function (o6q0zh, gbn4y, osq6zh, h0zoq) {
            gbn4y === void 0x0 && (gbn4y = 'ascill'), h0zoq === void 0x0 && (h0zoq = ''), ib4n2['fs']['readFile']({
                'filePath': o6q0zh,
                'encoding': gbn4y,
                'success': function (by2ie) {
                    if (o6q0zh['indexOf']('http://') != -0x1 || o6q0zh['indexOf']('https://') != -0x1) ib4n2['onFileUpdate'](o6q0zh, h0zoq);
                    osq6zh != null && osq6zh['runWith']([0x0, by2ie]);
                },
                'fail': function (cam8x_) {
                    if (cam8x_) osq6zh != null && osq6zh['runWith']([0x1, cam8x_]);
                }
            });
        }, ib4n2['downImg'] = function (mkv$9, kvmac_, dslp7) {
            dslp7 === void 0x0 && (dslp7 = '');
            var qdsh6 = ib4n2['wxdown']({
                'url': mkv$9,
                'success': function (_cvxam) {
                    _cvxam['statusCode'] === 0xc8 && ib4n2['copyFile'](_cvxam['tempFilePath'], dslp7, kvmac_);
                },
                'fail': function (wsl7p) {
                    kvmac_ != null && kvmac_['runWith']([0x1, wsl7p]);
                }
            });
        }, ib4n2['copyFile'] = function (jti5, eujt5, $3r0f) {
            var yu4je = jti5['split']('/'),
                slwd76 = yu4je[yu4je['length'] - 0x1],
                npg2 = eujt5['split']('?')[0x0],
                cmv_ak = ib4n2['getFileInfo'](eujt5),
                ujtei5 = ib4n2['getFileNativePath'](slwd76);
            ib4n2['fs']['copyFile']({
                'srcPath': jti5,
                'destPath': ujtei5,
                'success': function (y2i4bn) {
                    if (!cmv_ak) ib4n2['onSaveFile'](eujt5, slwd76), $3r0f != null && $3r0f['runWith']([0x0]);else {
                        if (cmv_ak['readyUrl'] != eujt5) ib4n2['remove'](slwd76, eujt5, $3r0f);
                    }
                },
                'fail': function (lsw76) {
                    $3r0f != null && $3r0f['runWith']([0x1, lsw76]);
                }
            });
        }, ib4n2['getFileNativePath'] = function (ey5uji) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ey5uji;
        }, ib4n2['remove'] = function (avkmc_, wd6, kv39$) {
            wd6 === void 0x0 && (wd6 = '');
            var zr093o = ib4n2['getFileInfo'](wd6),
                f3$09 = ib4n2['getFileNativePath'](zr093o['md5']);
            yu5e['loader']['clearRes'](zr093o['readyUrl']), ib4n2['fs']['unlink']({
                'filePath': f3$09,
                'success': function (mc) {
                    if (wd6 != '') ib4n2['onSaveFile'](wd6, avkmc_);
                    kv39$ != null && kv39$['runWith']([0x0]);
                },
                'fail': function (s7wlp) {}
            });
        }, ib4n2['onSaveFile'] = function (mvak_, fmk$v9) {
            var dwl6s = mvak_['split']('?')[0x0];
            ib4n2['filesListObj'][dwl6s] = {
                'md5': fmk$v9,
                'readyUrl': mvak_
            }, ib4n2['fs']['writeFile']({
                'filePath': ib4n2['fileNativeDir'] + '/' + ib4n2['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](ib4n2['filesListObj']),
                'success': function ($km9fv) {
                    console['log']('写入测试测试成功：', $km9fv);
                },
                'fail': function (beij) {
                    console['log']('写入测试测试失败：', beij);
                }
            });
        }, ib4n2['existDir'] = function (dgwlp7, yiuje4) {
            ib4n2['fs']['mkdir']({
                'dirPath': dgwlp7,
                'success': function (zhs6w) {
                    yiuje4 != null && yiuje4['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (rozq0h) {
                    if (rozq0h['errMsg']['indexOf']('file already exists') != -0x1) ib4n2['readSync'](ib4n2['fileListName'], 'utf8', yiuje4);else yiuje4 != null && yiuje4['runWith']([0x1, rozq0h]);
                }
            });
        }, ib4n2['readSync'] = function (lds7, k9fr3$, yeijb4, pgdn7) {
            k9fr3$ === void 0x0 && (k9fr3$ = 'ascill'), pgdn7 === void 0x0 && (pgdn7 = '');
            var _kmvac = ib4n2['getFileNativePath'](lds7),
                iet5j;
            try {
                iet5j = ib4n2['fs']['readFileSync'](_kmvac), yeijb4 != null && yeijb4['runWith']([0x0, { 'data': iet5j }]);
            } catch (dwpsl7) {
                yeijb4 != null && yeijb4['runWith']([0x1]);
            }
        }, ib4n2['readCache'] = function () {}, ib4n2['writeCache'] = function (v93k$) {
            var gbny4 = readyUrl['split']('?')[0x0];
            ib4n2['filesListObj'][gbny4] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, ib4n2['fs']['writeFile']({
                'filePath': ib4n2['fileNativeDir'] + '/' + ib4n2['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](ib4n2['filesListObj']),
                'success': function (mx8_) {},
                'fail': function (a8) {}
            });
        }, ib4n2['setNativeFileDir'] = function (g2npb7) {
            ib4n2['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + g2npb7;
        }, ib4n2['filesListObj'] = {}, ib4n2['fileNativeDir'] = null, ib4n2['fileListName'] = 'layaairfiles.txt', ib4n2['ziyuFileData'] = {}, i2eyb(ib4n2, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), ib4n2;
    }(dw7lp),
        qdswl6 = function (q0zoh6) {
        function gb2p4() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], gb2p4['__super']['call'](this), this['_sound'] = gb2p4['_createSound'](), this['_chanell'] = new i4n2b(this['_sound']);
        }
        vcax_(gb2p4, 'laya.wx.mini.MiniSound', q0zoh6);
        var $fr9k = gb2p4['prototype'];
        return $fr9k['load'] = function (l7spd) {
            var amcx_ = this;
            l7spd = $v9kf['formatURL'](l7spd), this['url'] = l7spd;
            if (gb2p4['_audioCache'][l7spd]) {
                this['event']('complete');
                return;
            }
            function zhor() {
                if (gb2p4['_null'] != undefined) amcx_['_sound']['onCanplay'](gb2p4['_null']), amcx_['_sound']['onError'](gb2p4['_null']);else try {
                    amcx_['_sound']['onCanplay'](null), amcx_['_sound']['onError'](null), gb2p4['_null'] = null;
                } catch (ngdl) {
                    console['warn']('[wxmini] _clearSound:' + ngdl), amcx_['_sound']['onCanplay']($093fr), amcx_['_sound']['onError']($093fr), gb2p4['_null'] = $093fr;
                }
            }
            function xcv_() {
                r039o['loaded'] = !![], r039o['event']('complete'), gb2p4['_audioCache'][r039o['url']] = r039o;
            }
            function avc_m(rqzho0) {
                console['error']('errCode=' + rqzho0['errCode'] + '  errMsg=' + rqzho0['errMsg']), r039o['event']('error');
            }
            function $093fr() {}
            this['_sound']['onCanplay'](xcv_), this['_sound']['onError'](avc_m), this['_sound']['src'] = l7spd;
            var r039o = this;
        }, $fr9k['play'] = function (r0oz3h, rk$39f) {
            r0oz3h === void 0x0 && (r0oz3h = 0x0), rk$39f === void 0x0 && (rk$39f = 0x0);
            var gnby42, ieyb4;
            if (this['url'] == mac8_x['_tMusic']) {
                if (!gb2p4['_musicAudio']) gb2p4['_musicAudio'] = this['_sound'];
                gnby42 = gb2p4['_musicAudio'], ieyb4 = this['_chanell'];
            } else gnby42 = this['_sound'], ieyb4 = this['_chanell'];
            return gnby42['src'] = this['url'], gnby42['startTime'] = 0x0, ieyb4['isStopped'] && (ieyb4['url'] = this['url'], ieyb4['loops'] = rk$39f, ieyb4['startTime'] = r0oz3h, ieyb4['play'](), mac8_x['addChannel'](ieyb4)), ieyb4;
        }, $fr9k['dispose'] = function () {
            var o0zh3r = gb2p4['_audioCache'][this['url']];
            o0zh3r && (o0zh3r['src'] = '', delete gb2p4['_audioCache'][this['url']]);
        }, mcax(0x0, $fr9k, 'duration', function () {
            return this['_sound']['duration'];
        }), gb2p4['_createSound'] = function () {
            gb2p4['_id']++;
            var j5ie = sqhzw['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return j5ie;
        }, gb2p4['_musicAudio'] = null, gb2p4['_id'] = 0x0, gb2p4['_audioCache'] = {}, gb2p4['_null'] = undefined, gb2p4;
    }(dw7lp),
        i4n2b = function (ji4uye) {
        function lqdw6(i2bye) {
            this['_audio'] = null, this['_onEnd'] = null, lqdw6['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = i2bye, this['_onEnd'] = ng72b['bind'](this['__onEnd'], this), i2bye['onEnded'](this['_onEnd']);
        }
        vcax_(lqdw6, 'laya.wx.mini.MiniSoundChannel', ji4uye);
        var ieb24 = lqdw6['prototype'];
        return ieb24['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (yu5e['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, ieb24['__onNull'] = function () {}, ieb24['play'] = function () {
            this['isStopped'] = ![], mac8_x['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, ieb24['stop'] = function () {
            this['isStopped'] = !![], mac8_x['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, ieb24['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, ieb24['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], mac8_x['addChannel'](this), this['_audio']['play']();
        }, mcax(0x0, ieb24, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), mcax(0x0, ieb24, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), mcax(0x0, ieb24, 'volume', function () {
            return 0x1;
        }, function (fr$903) {}), lqdw6['_null'] = undefined, lqdw6;
    }(ute1j),
        oz903r = function () {
        function eb() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = sqhzw['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        vcax_(eb, 'laya.wx.mini.MiniVideo');
        var tu5je = eb['prototype'];
        return tu5je['on'] = function (mxca8, gny, iteu5j) {
            if (mxca8 == 'loadedmetadata') this['onPlayFunc'] = iteu5j['bind'](gny), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else mxca8 == 'ended' && (this['onEndedFunC'] = iteu5j['bind'](gny), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, tu5je['onTimeUpdateFunc'] = function (gp4) {
            this['position'] = gp4['position'], this['_duration'] = gp4['duration'];
        }, tu5je['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, tu5je['onended'] = function (jeyi4b, gn4by) {
            this['onEndedFunC'] = gn4by['bind'](jeyi4b), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, tu5je['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, tu5je['off'] = function (gpn2, et1j, mkvca_) {
            if (gpn2 == 'loadedmetadata') this['onPlayFunc'] = mkvca_['bind'](et1j), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else gpn2 == 'ended' && (this['onEndedFunC'] = mkvca_['bind'](et1j), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, tu5je['load'] = function (hrqzo) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = hrqzo;
        }, tu5je['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, tu5je['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, tu5je['size'] = function (jet, _fmvk) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = jet, this['videoElement']['height'] = _fmvk;
        }, tu5je['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, tu5je['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, mcax(0x0, tu5je, 'duration', function () {
            return this['_duration'];
        }), mcax(0x0, tu5je, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (w6ql) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = w6ql;
        }), mcax(0x0, tu5je, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), mcax(0x0, tu5je, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), mcax(0x0, tu5je, 'ended', function () {
            return this['videoend'];
        }), mcax(0x0, tu5je, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (qz0h) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = qz0h;
        }), mcax(0x0, tu5je, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (l7dpg) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = l7dpg;
        }), mcax(0x0, tu5je, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (ey5ui) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = ey5ui;
        }), mcax(0x0, tu5je, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), mcax(0x0, tu5je, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (rf09) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = rf09;
        }), mcax(0x0, tu5je, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (v9f$m) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = v9f$m;
        }), mcax(0x0, tu5je, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), mcax(0x0, tu5je, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (tiue) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = tiue;
        }), mcax(0x0, tu5je, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (q0rhzo) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = q0rhzo;
        }), mcax(0x0, tu5je, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (l67ds) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = l67ds;
        }), eb;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var ozr30 in Laya) {
        var w6dqls = Laya[ozr30];
        w6dqls && w6dqls['__isclass'] && (exports[ozr30] = w6dqls);
    }
});