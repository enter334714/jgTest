var S = wx.$J;
(function (window, document, lbeup) {
    var $x9h = lbeup['un'],
        zixa89 = lbeup['uns'],
        nebj5 = lbeup['static'],
        iha = lbeup['class'],
        jpn35 = lbeup['getset'],
        fr17q = lbeup['__newvec'],
        bepj5 = laya['utils']['Browser'],
        e3pj = laya['events']['Event'],
        xi982z = laya['events']['EventDispatcher'],
        gu0 = laya['resource']['HTMLImage'],
        cblu04 = laya['utils']['Handler'],
        i8x9az = laya['display']['Input'],
        p35jwn = laya['net']['Loader'],
        ublc0 = laya['maths']['Matrix'],
        fr6k7m = laya['renders']['Render'],
        p53en = laya['utils']['RunDriver'],
        qrm71 = laya['media']['Sound'],
        peu4l = laya['media']['SoundChannel'],
        log0 = laya['media']['SoundManager'],
        qmdf = laya['display']['Stage'],
        ha$x9 = laya['net']['URL'],
        j3en = laya['utils']['Utils'],
        n4eb5 = function () {
        function o0yclg() {}
        return iha(o0yclg, 'laya.wx.mini.MiniAdpter'), o0yclg['getJson'] = function (axz98i) {
            return JSON['parse'](axz98i);
        }, o0yclg['init'] = function (buple, ugolc) {
            buple === void 0x0 && (buple = ![]), ugolc === void 0x0 && (ugolc = ![]);
            if (o0yclg['_inited']) return;
            o0yclg['window'] = window;
            if (o0yclg['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            o0yclg['_inited'] = !![], o0yclg['isZiYu'] = ugolc, o0yclg['isPosMsgYu'] = buple, o0yclg['EnvConfig'] = {}, !o0yclg['isZiYu'] && (i9ahxz['setNativeFileDir']('/layaairGame'), i9ahxz['existDir'](i9ahxz['fileNativeDir'], cblu04['create'](o0yclg, o0yclg['onMkdirCallBack']))), o0yclg['window']['focus'] = function () {}, lbeup['getUrlPath'] = function () {}, o0yclg['window']['logtime'] = function (fqr71m) {}, o0yclg['window']['alertTimeLog'] = function (idq2) {}, o0yclg['window']['resetShareInfo'] = function () {}, o0yclg['window']['CanvasRenderingContext2D'] = function () {}, o0yclg['window']['CanvasRenderingContext2D']['prototype'] = o0yclg['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], o0yclg['window']['document']['body']['appendChild'] = function () {}, o0yclg['EnvConfig']['pixelRatioInt'] = 0x0, p53en['getPixelRatio'] = o0yclg['pixelRatio'], o0yclg['_preCreateElement'] = bepj5['createElement'], bepj5['createElement'] = o0yclg['createElement'], p53en['createShaderCondition'] = o0yclg['createShaderCondition'], j3en['parseXMLFromString'] = o0yclg['parseXMLFromString'], i8x9az['_createInputElement'] = o6sy7['_createInputElement'], o0yclg['EnvConfig']['load'] = p35jwn['prototype']['load'], p35jwn['prototype']['load'] = z982ix['prototype']['load'], o0yclg['isZiYu'] && buple && wx['onMessage'](function (i2q18) {
                i2q18['isLoad'] && (i9ahxz['ziyuFileData'][i2q18['url']] = i2q18['data']);
            });
        }, o0yclg['onMkdirCallBack'] = function (yksg6o, z98ia) {
            if (!yksg6o) i9ahxz['filesListObj'] = JSON['parse'](z98ia['data']);
        }, o0yclg['pixelRatio'] = function () {
            if (!o0yclg['EnvConfig']['pixelRatioInt']) try {
                var nj3v5w = wx['getSystemInfoSync']();
                return o0yclg['EnvConfig']['pixelRatioInt'] = nj3v5w['pixelRatio'], nj3v5w = nj3v5w, nj3v5w['pixelRatio'];
            } catch (nep5jb) {}
            return o0yclg['EnvConfig']['pixelRatioInt'];
        }, o0yclg['createElement'] = function (rqdf) {
            if (rqdf == 'canvas') {
                var uglco0;
                return o0yclg['idx'] == 0x1 ? o0yclg['isZiYu'] ? (uglco0 = sharedCanvas, uglco0['style'] = {}) : uglco0 = window['canvas'] : uglco0 = window['wx']['createCanvas'](), o0yclg['idx']++, uglco0;
            } else {
                if (rqdf == 'textarea' || rqdf == 'input') return o0yclg['onCreateInput'](rqdf);else {
                    if (rqdf == 'div') {
                        var bupe4l = o0yclg['_preCreateElement'](rqdf);
                        return bupe4l['contains'] = function (yoks67) {
                            return null;
                        }, bupe4l['removeChild'] = function (mr1f67) {}, bupe4l;
                    } else return o0yclg['_preCreateElement'](rqdf);
                }
            }
        }, o0yclg['onCreateInput'] = function (pbule) {
            var locy0g = o0yclg['_preCreateElement'](pbule);
            return locy0g['focus'] = o6sy7['wxinputFocus'], locy0g['blur'] = o6sy7['wxinputblur'], locy0g['style'] = {}, locy0g['value'] = 0x0, locy0g['parentElement'] = {}, locy0g['placeholder'] = {}, locy0g['type'] = {}, locy0g['setColor'] = function (srky) {}, locy0g['setType'] = function (oclu0) {}, locy0g['setFontFace'] = function (qd8i21) {}, locy0g['addEventListener'] = function (belup4) {}, locy0g['contains'] = function (b5enpj) {
                return null;
            }, locy0g['removeChild'] = function (gcu0l) {}, locy0g;
        }, o0yclg['createShaderCondition'] = function (bep5nj) {
            var gyo0s = this,
                zhxai = function () {
                var fsrk6 = bep5nj;
                return gyo0s[bep5nj['replace']('this.', '')];
            };
            return zhxai;
        }, o0yclg['EnvConfig'] = null, o0yclg['window'] = null, o0yclg['_preCreateElement'] = null, o0yclg['_inited'] = ![], o0yclg['wxRequest'] = null, o0yclg['systemInfo'] = null, o0yclg['version'] = '0.0.1', o0yclg['isZiYu'] = ![], o0yclg['isPosMsgYu'] = ![], o0yclg['parseXMLFromString'] = function (s7kry) {
            var syg0k, zx82;
            s7kry = s7kry['replace'](/>\s+</g, '><');
            try {
                syg0k = new window['Parser']['DOMParser']()['parseFromString'](s7kry, 'text/xml');
            } catch (peb45) {
                throw '需要引入xml解析库文件';
            }
            return syg0k;
        }, o0yclg['idx'] = 0x1, o0yclg;
    }(),
        p5nje3 = function () {
        function haxz9$() {}
        iha(haxz9$, 'laya.wx.mini.MiniImage');
        var f21m = haxz9$['prototype'];
        return f21m['_loadImage'] = function (cysgo0) {
            var b4epl = this,
                loguc0 = ![];
            cysgo0['indexOf']('layaNativeDir/') == -0x1 && (loguc0 = !![], cysgo0 = ha$x9['formatURL'](cysgo0));
            if (!i9ahxz['getFileInfo'](cysgo0)) {
                if (cysgo0['indexOf']('http://') != -0x1 || cysgo0['indexOf']('https://') != -0x1) i9ahxz['downImg'](cysgo0, new cblu04(haxz9$, haxz9$['onDownImgCallBack'], [cysgo0, b4epl]), cysgo0);else haxz9$['onCreateImage'](cysgo0, b4epl, !![]);
            } else haxz9$['onCreateImage'](cysgo0, b4epl, !loguc0);
        }, haxz9$['onDownImgCallBack'] = function (jp5b, n45eb, lcu0g4) {
            if (!lcu0g4) haxz9$['onCreateImage'](jp5b, n45eb);else n45eb['onError'](null);
        }, haxz9$['onCreateImage'] = function (ygosk, upe4nb, dm28q) {
            dm28q === void 0x0 && (dm28q = ![]);
            var zi92;
            if (!dm28q) {
                var el4bc = i9ahxz['getFileInfo'](ygosk),
                    oy0scg = el4bc['md5'];
                zi92 = i9ahxz['getFileNativePath'](oy0scg);
            } else zi92 = ygosk;
            if (upe4nb['imgCache'] == null) upe4nb['imgCache'] = {};
            var jpneb5;
            function ueb() {
                jpneb5['onload'] = null, jpneb5['onerror'] = null, delete upe4nb['imgCache'][ygosk];
            }
            ;
            var gc0ol = function () {
                ueb(), upe4nb['onLoaded'](jpneb5);
            },
                qrdmf1 = function () {
                ueb(), upe4nb['event']('error', 'Load image failed');
            };
            upe4nb['_type'] == 'nativeimage' ? (jpneb5 = new bepj5['window']['Image'](), jpneb5['crossOrigin'] = '', jpneb5['onload'] = gc0ol, jpneb5['onerror'] = qrdmf1, jpneb5['src'] = zi92, upe4nb['imgCache'][ygosk] = jpneb5) : new gu0['create'](zi92, {
                'onload': gc0ol,
                'onerror': qrdmf1,
                'onCreate': function (q12mfd) {
                    jpneb5 = q12mfd, upe4nb['imgCache'][ygosk] = q12mfd;
                }
            });
        }, haxz9$;
    }(),
        o6sy7 = function () {
        function ublce() {}
        return iha(ublce, 'laya.wx.mini.MiniInput'), ublce['_createInputElement'] = function () {
            i8x9az['_initInput'](i8x9az['area'] = bepj5['createElement']('textarea')), i8x9az['_initInput'](i8x9az['input'] = bepj5['createElement']('input')), i8x9az['inputContainer'] = bepj5['createElement']('div'), i8x9az['inputContainer']['style']['position'] = 'absolute', i8x9az['inputContainer']['style']['zIndex'] = 0x186a0, bepj5['container']['appendChild'](i8x9az['inputContainer']), i8x9az['inputContainer']['setPos'] = function (clebu, y6ksog) {
                i8x9az['inputContainer']['style']['left'] = clebu + 'px', i8x9az['inputContainer']['style']['top'] = y6ksog + 'px';
            }, lbeup['stage']['on']('resize', null, ublce['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (p5bne) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), log0['_soundClass'] = ixq8d2, log0['_musicClass'] = ixq8d2, window['_videoClass'] = ogcys;
        }, ublce['_onStageResize'] = function () {
            var k6rys7 = lbeup['stage']['_canvasTransform']['identity']();
            k6rys7['scale'](bepj5['width'] / fr6k7m['canvas']['width'] / p53en['getPixelRatio'](), bepj5['height'] / fr6k7m['canvas']['height'] / p53en['getPixelRatio']());
        }, ublce['wxinputFocus'] = function (npeb5) {
            var vw5n = i8x9az['inputElement']['target'];
            if (vw5n && !vw5n['editable']) return;
            n4eb5['window']['wx']['offKeyboardConfirm'](), n4eb5['window']['wx']['offKeyboardInput'](), n4eb5['window']['wx']['showKeyboard']({
                'defaultValue': vw5n['text'],
                'maxLength': vw5n['maxChars'],
                'multiple': vw5n['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (ygcl0) {},
                'fail': function (olg0yc) {}
            }), n4eb5['window']['wx']['onKeyboardConfirm'](function (m1df2) {
                var s6ok7y = m1df2 ? m1df2['value'] : '';
                vw5n['text'] = s6ok7y, vw5n['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), n4eb5['window']['wx']['onKeyboardInput'](function (scoyg) {
                var r6ksf7 = scoyg ? scoyg['value'] : '';
                if (!vw5n['multiline']) {
                    if (r6ksf7['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                vw5n['text'] = r6ksf7, vw5n['event']('input');
            });
        }, ublce['inputEnter'] = function () {
            i8x9az['inputElement']['target']['focus'] = ![];
        }, ublce['wxinputblur'] = function () {
            ublce['hideKeyboard']();
        }, ublce['hideKeyboard'] = function () {
            n4eb5['window']['wx']['offKeyboardConfirm'](), n4eb5['window']['wx']['offKeyboardInput'](), n4eb5['window']['wx']['hideKeyboard']({
                'success': function (uc4le) {
                    console['log']('隐藏键盘');
                },
                'fail': function (jp5e3n) {
                    console['log']('隐藏键盘出错:' + (jp5e3n ? jp5e3n['errMsg'] : ''));
                }
            });
        }, ublce;
    }(),
        z982ix = function () {
        function gu04c() {}
        iha(gu04c, 'laya.wx.mini.MiniLoader');
        var ne4ub = gu04c['prototype'];
        return ne4ub['load'] = function (dx8i2, rf67sk, iq2d8, ok6gys, mqr7) {
            iq2d8 === void 0x0 && (iq2d8 = !![]), mqr7 === void 0x0 && (mqr7 = ![]);
            var ixq8d = this;
            ixq8d['_url'] = dx8i2;
            if (dx8i2['indexOf']('data:image') === 0x0) ixq8d['_type'] = rf67sk = 'image';else ixq8d['_type'] = rf67sk || (rf67sk = ixq8d['getTypeFromUrl'](dx8i2));
            ixq8d['_cache'] = iq2d8, ixq8d['_data'] = null;
            var v3j5 = 'ascii';
            if (dx8i2['indexOf']('.fnt') != -0x1) v3j5 = 'utf8';else rf67sk == 'arraybuffer' && (v3j5 = '');
            ;
            var d2q81i = j3en['getFileExtension'](dx8i2);
            if (gu04c['_fileTypeArr']['indexOf'](d2q81i) != -0x1) n4eb5['EnvConfig']['load']['call'](this, dx8i2, rf67sk, iq2d8, ok6gys, mqr7);else {
                if (!i9ahxz['getFileInfo'](dx8i2)) {
                    if (dx8i2['indexOf']('layaNativeDir/') != -0x1) {
                        if (n4eb5['isZiYu']) {
                            var u4bl0c = i9ahxz['ziyuFileData'][dx8i2];
                            ixq8d['onLoaded'](u4bl0c);
                            return;
                        } else {
                            cosnole['log']('read read'), i9ahxz['read'](dx8i2, v3j5, new cblu04(gu04c, gu04c['onReadNativeCallBack'], [v3j5, dx8i2, rf67sk, iq2d8, ok6gys, mqr7, ixq8d]));
                            return;
                        }
                    }
                    if (ha$x9['rootPath'] == '') var rfmdq = dx8i2;else rfmdq = dx8i2['split'](ha$x9['rootPath'])[0x0];
                    dx8i2['indexOf']('http://') != -0x1 || dx8i2['indexOf']('https://') != -0x1 ? n4eb5['EnvConfig']['load']['call'](ixq8d, dx8i2, rf67sk, iq2d8, ok6gys, mqr7) : i9ahxz['readFile'](rfmdq, v3j5, new cblu04(gu04c, gu04c['onReadNativeCallBack'], [v3j5, dx8i2, rf67sk, iq2d8, ok6gys, mqr7, ixq8d]), dx8i2);
                } else n4eb5['EnvConfig']['load']['call'](this, dx8i2, rf67sk, iq2d8, ok6gys, mqr7);
            }
        }, ne4ub['resMgrLoad'] = function (x98id2, guo0l, qi21d, syo6, u4cleb, l4u0bc, xa$9zh) {
            qi21d === void 0x0 && (qi21d = 0x0), syo6 === void 0x0 && (syo6 = ![]), u4cleb === void 0x0 && (u4cleb = ![]), l4u0bc === void 0x0 && (l4u0bc = 0x0), xa$9zh === void 0x0 && (xa$9zh = 0x3), x98id2['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', x98id2), n4eb5['EnvConfig']['resMgrLoad'](x98id2, (x$9za, z9$axh, b4cl) => {
                gu04c['prototype']['resMgrLoadCallBack'](x$9za, z9$axh, b4cl, guo0l);
            }, qi21d, syo6, u4cleb, l4u0bc, xa$9zh);
        }, ne4ub['resMgrLoadCallBack'] = function (ahi9, bl4, id29, r1mfq) {
            console['log']('buff:::', ahi9, id29, i9ahxz['fileNativeDir'] + '///' + i9ahxz['fileListName']), r1mfq(ahi9, bl4, id29);
        }, ne4ub['clearRes'] = function (jpbe, i9z8x) {
            i9z8x === void 0x0 && (i9z8x = ![]);
            var b40l = this;
            b40l['clearRes'](jpbe, i9z8x);
            var nwj35v = i9ahxz['getFileInfo'](jpbe);
            if (nwj35v && (jpbe['indexOf']('http://') != -0x1 || jpbe['indexOf']('https://') != -0x1)) {
                var pneb45 = nwj35v['md5'],
                    en4b = i9ahxz['getFileNativePath'](pneb45);
                i9ahxz['remove'](en4b);
            }
        }, gu04c['onReadNativeCallBack'] = function (pbelu4, ebup4n, drqm1f, pj5neb, nj5v, mq2f1d, fr76m, p4b5e, qfm1r7) {
            pj5neb === void 0x0 && (pj5neb = !![]), mq2f1d === void 0x0 && (mq2f1d = ![]), p4b5e === void 0x0 && (p4b5e = 0x0);
            if (!p4b5e) {
                var syc0;
                if (drqm1f == 'json' || drqm1f == 'atlas') syc0 = n4eb5['getJson'](qfm1r7['data']);else drqm1f == 'xml' ? syc0 = j3en['parseXMLFromString'](qfm1r7['data']) : syc0 = qfm1r7['data'];
                fr76m['onLoaded'](syc0), !n4eb5['isZiYu'] && n4eb5['isPosMsgYu'] && drqm1f != 'arraybuffer' && wx['postMessage']({
                    'url': ebup4n,
                    'data': syc0,
                    'isLoad': !![]
                });
            } else p4b5e == 0x1 && n4eb5['EnvConfig']['load']['call'](fr76m, ebup4n, drqm1f, pj5neb, nj5v, mq2f1d);
        }, nebj5(gu04c, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), gu04c;
    }(),
        i9ahxz = function (eulcb) {
        function s6f7rk() {
            s6f7rk['__super']['call'](this);
            ;
        }
        return iha(s6f7rk, 'laya.wx.mini.MiniFileMgr', eulcb), s6f7rk['isLoadFile'] = function (epb5n4) {
            return s6f7rk['_fileTypeArr']['indexOf'](epb5n4) != -0x1 ? !![] : ![];
        }, s6f7rk['getFileInfo'] = function (d812iq) {
            var z89x2i = d812iq['split']('?')[0x0],
                m17rfq = s6f7rk['filesListObj'][z89x2i];
            if (m17rfq == null) return null;else return m17rfq;
            return null;
        }, s6f7rk['onFileUpdate'] = function (kry6s7, nwj) {
            var o0cl = kry6s7['split']('/'),
                skyo0g = o0cl[o0cl['length'] - 0x1],
                ys6ogk = s6f7rk['getFileInfo'](nwj);
            if (ys6ogk == null) s6f7rk['onSaveFile'](nwj, skyo0g);else {
                if (ys6ogk['readyUrl'] != nwj) s6f7rk['remove'](skyo0g, nwj);
            }
        }, s6f7rk['exits'] = function (ix8az, pejb5n) {
            var b45ep = s6f7rk['getFileNativePath'](ix8az);
            s6f7rk['fs']['getFileInfo']({
                'filePath': b45ep,
                'success': function (zx98ai) {
                    pejb5n != null && pejb5n['runWith']([0x0, zx98ai]);
                },
                'fail': function (gsy0oc) {
                    pejb5n != null && pejb5n['runWith']([0x1, gsy0oc]);
                }
            });
        }, s6f7rk['read'] = function (zxi928, qmd82, q1fmr, xziha9) {
            qmd82 === void 0x0 && (qmd82 = 'ascill'), xziha9 === void 0x0 && (xziha9 = '');
            var gocl0;
            xziha9 != '' ? gocl0 = s6f7rk['getFileNativePath'](zxi928) : gocl0 = zxi928, s6f7rk['fs']['readFile']({
                'filePath': gocl0,
                'encoding': qmd82,
                'success': function (uc40gl) {
                    q1fmr != null && q1fmr['runWith']([0x0, uc40gl]);
                },
                'fail': function (ne4pb5) {
                    if (ne4pb5 && xziha9 != '') s6f7rk['down'](xziha9, qmd82, q1fmr, xziha9);else q1fmr != null && q1fmr['runWith']([0x1]);
                }
            });
        }, s6f7rk['readNativeFile'] = function (diq81, lb4epu) {
            s6f7rk['fs']['readFile']({
                'filePath': diq81,
                'encoding': '',
                'success': function (qr1f) {
                    lb4epu != null && lb4epu['runWith']([0x0]);
                },
                'fail': function (hxai9z) {
                    lb4epu != null && lb4epu['runWith']([0x1]);
                }
            });
        }, s6f7rk['down'] = function (y6sgok, ahz$x, mqd1fr, kmf6r) {
            ahz$x === void 0x0 && (ahz$x = 'ascill'), kmf6r === void 0x0 && (kmf6r = '');
            var og0ksy = s6f7rk['getFileNativePath'](kmf6r),
                uogl0c = s6f7rk['wxdown']({
                'url': y6sgok,
                'filePath': og0ksy,
                'success': function (f6mr) {
                    if (f6mr['statusCode'] === 0xc8) s6f7rk['readFile'](f6mr['filePath'], ahz$x, mqd1fr, kmf6r);
                },
                'fail': function (x9ia8) {
                    mqd1fr != null && mqd1fr['runWith']([0x1, x9ia8]);
                }
            });
            uogl0c['onProgressUpdate'](function (ep5nj) {
                mqd1fr != null && mqd1fr['runWith']([0x2, ep5nj['progress']]);
            });
        }, s6f7rk['readFile'] = function (x98z2, soc0, bl4cu0, ue4bl) {
            soc0 === void 0x0 && (soc0 = 'ascill'), ue4bl === void 0x0 && (ue4bl = ''), s6f7rk['fs']['readFile']({
                'filePath': x98z2,
                'encoding': soc0,
                'success': function (bcu0l4) {
                    if (x98z2['indexOf']('http://') != -0x1 || x98z2['indexOf']('https://') != -0x1) s6f7rk['onFileUpdate'](x98z2, ue4bl);
                    bl4cu0 != null && bl4cu0['runWith']([0x0, bcu0l4]);
                },
                'fail': function (n5e) {
                    if (n5e) bl4cu0 != null && bl4cu0['runWith']([0x1, n5e]);
                }
            });
        }, s6f7rk['downImg'] = function (hazi9x, enpu, ej5bnp) {
            ej5bnp === void 0x0 && (ej5bnp = '');
            var idx298 = s6f7rk['wxdown']({
                'url': hazi9x,
                'success': function (kr6mf) {
                    kr6mf['statusCode'] === 0xc8 && s6f7rk['copyFile'](kr6mf['tempFilePath'], ej5bnp, enpu);
                },
                'fail': function (f7mk6r) {
                    enpu != null && enpu['runWith']([0x1, f7mk6r]);
                }
            });
        }, s6f7rk['copyFile'] = function (qdfm12, buce, y6oks) {
            var a$x = qdfm12['split']('/'),
                qmd2 = a$x[a$x['length'] - 0x1],
                lcbu40 = buce['split']('?')[0x0],
                f7rsk = s6f7rk['getFileInfo'](buce),
                qmf12d = s6f7rk['getFileNativePath'](qmd2);
            s6f7rk['fs']['copyFile']({
                'srcPath': qdfm12,
                'destPath': qmf12d,
                'success': function (id829x) {
                    if (!f7rsk) s6f7rk['onSaveFile'](buce, qmd2), y6oks != null && y6oks['runWith']([0x0]);else {
                        if (f7rsk['readyUrl'] != buce) s6f7rk['remove'](qmd2, buce, y6oks);
                    }
                },
                'fail': function (ulc40) {
                    y6oks != null && y6oks['runWith']([0x1, ulc40]);
                }
            });
        }, s6f7rk['getFileNativePath'] = function (frks76) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + frks76;
        }, s6f7rk['remove'] = function (a$xh9, i89zx, k6y7so) {
            i89zx === void 0x0 && (i89zx = '');
            var lc04ug = s6f7rk['getFileInfo'](i89zx),
                e4lub = s6f7rk['getFileNativePath'](lc04ug['md5']);
            lbeup['loader']['clearRes'](lc04ug['readyUrl']), s6f7rk['fs']['unlink']({
                'filePath': e4lub,
                'success': function (di8q) {
                    if (i89zx != '') s6f7rk['onSaveFile'](i89zx, a$xh9);
                    k6y7so != null && k6y7so['runWith']([0x0]);
                },
                'fail': function (o6sy) {}
            });
        }, s6f7rk['onSaveFile'] = function (lgc0uo, oclyg0) {
            var sr7ky6 = lgc0uo['split']('?')[0x0];
            s6f7rk['filesListObj'][sr7ky6] = {
                'md5': oclyg0,
                'readyUrl': lgc0uo
            }, s6f7rk['fs']['writeFile']({
                'filePath': s6f7rk['fileNativeDir'] + '/' + s6f7rk['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](s6f7rk['filesListObj']),
                'success': function (up4e) {
                    console['log']('写入测试测试成功：', up4e);
                },
                'fail': function (wpn53) {
                    console['log']('写入测试测试失败：', wpn53);
                }
            });
        }, s6f7rk['existDir'] = function (f6rsk, wjp5n) {
            s6f7rk['fs']['mkdir']({
                'dirPath': f6rsk,
                'success': function (ykos6) {
                    wjp5n != null && wjp5n['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (skry6) {
                    if (skry6['errMsg']['indexOf']('file already exists') != -0x1) s6f7rk['readSync'](s6f7rk['fileListName'], 'utf8', wjp5n);else wjp5n != null && wjp5n['runWith']([0x1, skry6]);
                }
            });
        }, s6f7rk['readSync'] = function (c0b4ul, luco0, azxh, fdm1qr) {
            luco0 === void 0x0 && (luco0 = 'ascill'), fdm1qr === void 0x0 && (fdm1qr = '');
            var lbc0 = s6f7rk['getFileNativePath'](c0b4ul),
                lgyc0o;
            try {
                lgyc0o = s6f7rk['fs']['readFileSync'](lbc0), azxh != null && azxh['runWith']([0x0, { 'data': lgyc0o }]);
            } catch (r716m) {
                azxh != null && azxh['runWith']([0x1]);
            }
        }, s6f7rk['readCache'] = function () {}, s6f7rk['writeCache'] = function (xdi2q8) {
            var x982di = readyUrl['split']('?')[0x0];
            s6f7rk['filesListObj'][x982di] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, s6f7rk['fs']['writeFile']({
                'filePath': s6f7rk['fileNativeDir'] + '/' + s6f7rk['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](s6f7rk['filesListObj']),
                'success': function (ocyg0l) {},
                'fail': function (kyrs) {}
            });
        }, s6f7rk['setNativeFileDir'] = function ($ha) {
            s6f7rk['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + $ha;
        }, s6f7rk['filesListObj'] = {}, s6f7rk['fileNativeDir'] = null, s6f7rk['fileListName'] = 'layaairfiles.txt', s6f7rk['ziyuFileData'] = {}, nebj5(s6f7rk, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), s6f7rk;
    }(xi982z),
        ixq8d2 = function (ogky0) {
        function eb4pun() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], eb4pun['__super']['call'](this), this['_sound'] = eb4pun['_createSound'](), this['_chanell'] = new fd1rmq(this['_sound']);
        }
        iha(eb4pun, 'laya.wx.mini.MiniSound', ogky0);
        var z2x9 = eb4pun['prototype'];
        return z2x9['load'] = function (h$xaz) {
            var ou0gl = this;
            h$xaz = ha$x9['formatURL'](h$xaz), this['url'] = h$xaz;
            if (eb4pun['_audioCache'][h$xaz]) {
                this['event']('complete');
                return;
            }
            function w5pj3n() {
                if (eb4pun['_null'] != undefined) ou0gl['_sound']['onCanplay'](eb4pun['_null']), ou0gl['_sound']['onError'](eb4pun['_null']);else try {
                    ou0gl['_sound']['onCanplay'](null), ou0gl['_sound']['onError'](null), eb4pun['_null'] = null;
                } catch (e5b4np) {
                    console['warn']('[wxmini] _clearSound:' + e5b4np), ou0gl['_sound']['onCanplay'](ksy6r7), ou0gl['_sound']['onError'](ksy6r7), eb4pun['_null'] = ksy6r7;
                }
            }
            function axz9i8() {
                qd1m2f['loaded'] = !![], qd1m2f['event']('complete'), eb4pun['_audioCache'][qd1m2f['url']] = qd1m2f;
            }
            function s0ocg(b54ne) {
                console['error']('errCode=' + b54ne['errCode'] + '  errMsg=' + b54ne['errMsg']), qd1m2f['event']('error');
            }
            function ksy6r7() {}
            this['_sound']['onCanplay'](axz9i8), this['_sound']['onError'](s0ocg), this['_sound']['src'] = h$xaz;
            var qd1m2f = this;
        }, z2x9['play'] = function (ih9xa, m167) {
            ih9xa === void 0x0 && (ih9xa = 0x0), m167 === void 0x0 && (m167 = 0x0);
            var d2fm1q, pejb;
            if (this['url'] == log0['_tMusic']) {
                if (!eb4pun['_musicAudio']) eb4pun['_musicAudio'] = this['_sound'];
                d2fm1q = eb4pun['_musicAudio'], pejb = this['_chanell'];
            } else d2fm1q = this['_sound'], pejb = this['_chanell'];
            return d2fm1q['src'] = this['url'], d2fm1q['startTime'] = 0x0, pejb['isStopped'] && (pejb['url'] = this['url'], pejb['loops'] = m167, pejb['startTime'] = ih9xa, pejb['play'](), log0['addChannel'](pejb)), pejb;
        }, z2x9['dispose'] = function () {
            var s6o = eb4pun['_audioCache'][this['url']];
            s6o && (s6o['src'] = '', delete eb4pun['_audioCache'][this['url']]);
        }, jpn35(0x0, z2x9, 'duration', function () {
            return this['_sound']['duration'];
        }), eb4pun['_createSound'] = function () {
            eb4pun['_id']++;
            var qfrmd = n4eb5['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return qfrmd;
        }, eb4pun['_musicAudio'] = null, eb4pun['_id'] = 0x0, eb4pun['_audioCache'] = {}, eb4pun['_null'] = undefined, eb4pun;
    }(xi982z),
        fd1rmq = function (z9i82) {
        function z9ax8i(z9aix) {
            this['_audio'] = null, this['_onEnd'] = null, z9ax8i['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = z9aix, this['_onEnd'] = j3en['bind'](this['__onEnd'], this), z9aix['onEnded'](this['_onEnd']);
        }
        iha(z9ax8i, 'laya.wx.mini.MiniSoundChannel', z9i82);
        var lcy0o = z9ax8i['prototype'];
        return lcy0o['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (lbeup['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, lcy0o['__onNull'] = function () {}, lcy0o['play'] = function () {
            this['isStopped'] = ![], log0['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, lcy0o['stop'] = function () {
            this['isStopped'] = !![], log0['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, lcy0o['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, lcy0o['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], log0['addChannel'](this), this['_audio']['play']();
        }, jpn35(0x0, lcy0o, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), jpn35(0x0, lcy0o, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), jpn35(0x0, lcy0o, 'volume', function () {
            return 0x1;
        }, function (w35jpn) {}), z9ax8i['_null'] = undefined, z9ax8i;
    }(peu4l),
        ogcys = function () {
        function pnb54e() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = n4eb5['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        iha(pnb54e, 'laya.wx.mini.MiniVideo');
        var nv3 = pnb54e['prototype'];
        return nv3['on'] = function (yksg, blp4u, oysc0) {
            if (yksg == 'loadedmetadata') this['onPlayFunc'] = oysc0['bind'](blp4u), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else yksg == 'ended' && (this['onEndedFunC'] = oysc0['bind'](blp4u), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, nv3['onTimeUpdateFunc'] = function (dqm1) {
            this['position'] = dqm1['position'], this['_duration'] = dqm1['duration'];
        }, nv3['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, nv3['onended'] = function (nupbe, n53vjw) {
            this['onEndedFunC'] = n53vjw['bind'](nupbe), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, nv3['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, nv3['off'] = function (p5ej3, qr1dm, gs0k) {
            if (p5ej3 == 'loadedmetadata') this['onPlayFunc'] = gs0k['bind'](qr1dm), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else p5ej3 == 'ended' && (this['onEndedFunC'] = gs0k['bind'](qr1dm), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, nv3['load'] = function (pnube4) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = pnube4;
        }, nv3['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, nv3['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, nv3['size'] = function (yskg6, b4ulc) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = yskg6, this['videoElement']['height'] = b4ulc;
        }, nv3['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, nv3['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, jpn35(0x0, nv3, 'duration', function () {
            return this['_duration'];
        }), jpn35(0x0, nv3, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (epb5) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = epb5;
        }), jpn35(0x0, nv3, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), jpn35(0x0, nv3, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), jpn35(0x0, nv3, 'ended', function () {
            return this['videoend'];
        }), jpn35(0x0, nv3, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (f67rsk) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = f67rsk;
        }), jpn35(0x0, nv3, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (di2x89) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = di2x89;
        }), jpn35(0x0, nv3, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (y6sogk) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = y6sogk;
        }), jpn35(0x0, nv3, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), jpn35(0x0, nv3, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (kfs7r) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = kfs7r;
        }), jpn35(0x0, nv3, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (b0cl4) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = b0cl4;
        }), jpn35(0x0, nv3, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), jpn35(0x0, nv3, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (epl4) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = epl4;
        }), jpn35(0x0, nv3, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (u04blc) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = u04blc;
        }), jpn35(0x0, nv3, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (zi9a) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = zi9a;
        }), pnb54e;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var p5nb in Laya) {
        var q8m1 = Laya[p5nb];
        q8m1 && q8m1['__isclass'] && (exports[p5nb] = q8m1);
    }
});