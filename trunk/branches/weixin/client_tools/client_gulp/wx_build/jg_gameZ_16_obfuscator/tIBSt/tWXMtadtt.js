var W = wx.$l;
(function (window, document, tor8g) {
    var lqp$y = tor8g['un'],
        x9_c = tor8g['uns'],
        zn4b5a = tor8g['static'],
        g8miro = tor8g['class'],
        kw7sf = tor8g['getset'],
        rom0i = tor8g['__newvec'],
        c_kx9e = laya['utils']['Browser'],
        cw7kfe = laya['events']['Event'],
        a4n50z = laya['events']['EventDispatcher'],
        dj1bvu = laya['resource']['HTMLImage'],
        $sqf2l = laya['utils']['Handler'],
        r8io6 = laya['display']['Input'],
        orgm = laya['net']['Loader'],
        ygpt63 = laya['maths']['Matrix'],
        ypto6 = laya['renders']['Render'],
        l3$yqp = laya['utils']['RunDriver'],
        ud1hjv = laya['media']['Sound'],
        v1uhdj = laya['media']['SoundChannel'],
        z54bna = laya['media']['SoundManager'],
        azdvb1 = laya['display']['Stage'],
        sqf$ = laya['net']['URL'],
        z4ad5b = laya['utils']['Utils'],
        lq$y = function () {
        function igr8m() {}
        return g8miro(igr8m, 'laya.wx.mini.MiniAdpter'), igr8m['getJson'] = function (gr8io) {
            return JSON['parse'](gr8io);
        }, igr8m['init'] = function (dzb45a, ck_e) {
            dzb45a === void 0x0 && (dzb45a = ![]), ck_e === void 0x0 && (ck_e = ![]);
            if (igr8m['_inited']) return;
            igr8m['window'] = window;
            if (igr8m['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            igr8m['_inited'] = !![], igr8m['isZiYu'] = ck_e, igr8m['isPosMsgYu'] = dzb45a, igr8m['EnvConfig'] = {}, !igr8m['isZiYu'] && (xk_cew['setNativeFileDir']('/layaairGame'), xk_cew['existDir'](xk_cew['fileNativeDir'], $sqf2l['create'](igr8m, igr8m['onMkdirCallBack']))), igr8m['window']['focus'] = function () {}, tor8g['getUrlPath'] = function () {}, igr8m['window']['logtime'] = function (pq3ty) {}, igr8m['window']['alertTimeLog'] = function (c2wf) {}, igr8m['window']['resetShareInfo'] = function () {}, igr8m['window']['CanvasRenderingContext2D'] = function () {}, igr8m['window']['CanvasRenderingContext2D']['prototype'] = igr8m['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], igr8m['window']['document']['body']['appendChild'] = function () {}, igr8m['EnvConfig']['pixelRatioInt'] = 0x0, l3$yqp['getPixelRatio'] = igr8m['pixelRatio'], igr8m['_preCreateElement'] = c_kx9e['createElement'], c_kx9e['createElement'] = igr8m['createElement'], l3$yqp['createShaderCondition'] = igr8m['createShaderCondition'], z4ad5b['parseXMLFromString'] = igr8m['parseXMLFromString'], r8io6['_createInputElement'] = dab1vz['_createInputElement'], igr8m['EnvConfig']['load'] = orgm['prototype']['load'], orgm['prototype']['load'] = dvz1j['prototype']['load'], igr8m['isZiYu'] && dzb45a && wx['onMessage'](function (lysq3$) {
                lysq3$['isLoad'] && (xk_cew['ziyuFileData'][lysq3$['url']] = lysq3$['data']);
            });
        }, igr8m['onMkdirCallBack'] = function (ekcw7, i8gom) {
            if (!ekcw7) xk_cew['filesListObj'] = JSON['parse'](i8gom['data']);
        }, igr8m['pixelRatio'] = function () {
            if (!igr8m['EnvConfig']['pixelRatioInt']) try {
                var l3ypt = wx['getSystemInfoSync']();
                return igr8m['EnvConfig']['pixelRatioInt'] = l3ypt['pixelRatio'], l3ypt = l3ypt, l3ypt['pixelRatio'];
            } catch (ro6gt) {}
            return igr8m['EnvConfig']['pixelRatioInt'];
        }, igr8m['createElement'] = function (ogy6t) {
            if (ogy6t == 'canvas') {
                var ba4d5z;
                return igr8m['idx'] == 0x1 ? igr8m['isZiYu'] ? (ba4d5z = sharedCanvas, ba4d5z['style'] = {}) : ba4d5z = window['canvas'] : ba4d5z = window['wx']['createCanvas'](), igr8m['idx']++, ba4d5z;
            } else {
                if (ogy6t == 'textarea' || ogy6t == 'input') return igr8m['onCreateInput'](ogy6t);else {
                    if (ogy6t == 'div') {
                        var b4az5 = igr8m['_preCreateElement'](ogy6t);
                        return b4az5['contains'] = function (_wck7) {
                            return null;
                        }, b4az5['removeChild'] = function (avzb5) {}, b4az5;
                    } else return igr8m['_preCreateElement'](ogy6t);
                }
            }
        }, igr8m['onCreateInput'] = function (i6rgo8) {
            var g6ptyo = igr8m['_preCreateElement'](i6rgo8);
            return g6ptyo['focus'] = dab1vz['wxinputFocus'], g6ptyo['blur'] = dab1vz['wxinputblur'], g6ptyo['style'] = {}, g6ptyo['value'] = 0x0, g6ptyo['parentElement'] = {}, g6ptyo['placeholder'] = {}, g6ptyo['type'] = {}, g6ptyo['setColor'] = function (bjud1) {}, g6ptyo['setType'] = function (f2ws7) {}, g6ptyo['setFontFace'] = function (rimg8o) {}, g6ptyo['addEventListener'] = function (qsy$3) {}, g6ptyo['contains'] = function (dju1b) {
                return null;
            }, g6ptyo['removeChild'] = function (rom8gi) {}, g6ptyo;
        }, igr8m['createShaderCondition'] = function (d5vbza) {
            var azd1 = this,
                mni54 = function () {
                var $flqs2 = d5vbza;
                return azd1[d5vbza['replace']('this.', '')];
            };
            return mni54;
        }, igr8m['EnvConfig'] = null, igr8m['window'] = null, igr8m['_preCreateElement'] = null, igr8m['_inited'] = ![], igr8m['wxRequest'] = null, igr8m['systemInfo'] = null, igr8m['version'] = '0.0.1', igr8m['isZiYu'] = ![], igr8m['isPosMsgYu'] = ![], igr8m['parseXMLFromString'] = function (ce7wfk) {
            var naz504, juv;
            ce7wfk = ce7wfk['replace'](/>\s+</g, '><');
            try {
                naz504 = new window['Parser']['DOMParser']()['parseFromString'](ce7wfk, 'text/xml');
            } catch (fecw) {
                throw '需要引入xml解析库文件';
            }
            return naz504;
        }, igr8m['idx'] = 0x1, igr8m;
    }(),
        s7kw2f = function () {
        function p3yg6t() {}
        g8miro(p3yg6t, 'laya.wx.mini.MiniImage');
        var q72s = p3yg6t['prototype'];
        return q72s['_loadImage'] = function (a4nz5) {
            var o8gt = this,
                oygt = ![];
            a4nz5['indexOf']('layaNativeDir/') == -0x1 && (oygt = !![], a4nz5 = sqf$['formatURL'](a4nz5));
            if (!xk_cew['getFileInfo'](a4nz5)) {
                if (a4nz5['indexOf']('http://') != -0x1 || a4nz5['indexOf']('https://') != -0x1) xk_cew['downImg'](a4nz5, new $sqf2l(p3yg6t, p3yg6t['onDownImgCallBack'], [a4nz5, o8gt]), a4nz5);else p3yg6t['onCreateImage'](a4nz5, o8gt, !![]);
            } else p3yg6t['onCreateImage'](a4nz5, o8gt, !oygt);
        }, p3yg6t['onDownImgCallBack'] = function (anm40, jvbdz, d1juvh) {
            if (!d1juvh) p3yg6t['onCreateImage'](anm40, jvbdz);else jvbdz['onError'](null);
        }, p3yg6t['onCreateImage'] = function (mr8o0, o6ygtp, kwc7_) {
            kwc7_ === void 0x0 && (kwc7_ = ![]);
            var bnaz5;
            if (!kwc7_) {
                var z40an = xk_cew['getFileInfo'](mr8o0),
                    kwsf27 = z40an['md5'];
                bnaz5 = xk_cew['getFileNativePath'](kwsf27);
            } else bnaz5 = mr8o0;
            if (o6ygtp['imgCache'] == null) o6ygtp['imgCache'] = {};
            var l2qs$;
            function ql$yp3() {
                l2qs$['onload'] = null, l2qs$['onerror'] = null, delete o6ygtp['imgCache'][mr8o0];
            }
            ;
            var $fs72 = function () {
                ql$yp3(), o6ygtp['onLoaded'](l2qs$);
            },
                rgt6o = function () {
                ql$yp3(), o6ygtp['event']('error', 'Load image failed');
            };
            o6ygtp['_type'] == 'nativeimage' ? (l2qs$ = new c_kx9e['window']['Image'](), l2qs$['crossOrigin'] = '', l2qs$['onload'] = $fs72, l2qs$['onerror'] = rgt6o, l2qs$['src'] = bnaz5, o6ygtp['imgCache'][mr8o0] = l2qs$) : new dj1bvu['create'](bnaz5, {
                'onload': $fs72,
                'onerror': rgt6o,
                'onCreate': function (q$fs2l) {
                    l2qs$ = q$fs2l, o6ygtp['imgCache'][mr8o0] = q$fs2l;
                }
            });
        }, p3yg6t;
    }(),
        dab1vz = function () {
        function ws72fk() {}
        return g8miro(ws72fk, 'laya.wx.mini.MiniInput'), ws72fk['_createInputElement'] = function () {
            r8io6['_initInput'](r8io6['area'] = c_kx9e['createElement']('textarea')), r8io6['_initInput'](r8io6['input'] = c_kx9e['createElement']('input')), r8io6['inputContainer'] = c_kx9e['createElement']('div'), r8io6['inputContainer']['style']['position'] = 'absolute', r8io6['inputContainer']['style']['zIndex'] = 0x186a0, c_kx9e['container']['appendChild'](r8io6['inputContainer']), r8io6['inputContainer']['setPos'] = function (wk_e7, ewc7k) {
                r8io6['inputContainer']['style']['left'] = wk_e7 + 'px', r8io6['inputContainer']['style']['top'] = ewc7k + 'px';
            }, tor8g['stage']['on']('resize', null, ws72fk['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (ex_k9) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), z54bna['_soundClass'] = wsf2, z54bna['_musicClass'] = wsf2, window['_videoClass'] = n4a0z;
        }, ws72fk['_onStageResize'] = function () {
            var jvhdu = tor8g['stage']['_canvasTransform']['identity']();
            jvhdu['scale'](c_kx9e['width'] / ypto6['canvas']['width'] / l3$yqp['getPixelRatio'](), c_kx9e['height'] / ypto6['canvas']['height'] / l3$yqp['getPixelRatio']());
        }, ws72fk['wxinputFocus'] = function (swk72) {
            var o8gr6i = r8io6['inputElement']['target'];
            if (o8gr6i && !o8gr6i['editable']) return;
            lq$y['window']['wx']['offKeyboardConfirm'](), lq$y['window']['wx']['offKeyboardInput'](), lq$y['window']['wx']['showKeyboard']({
                'defaultValue': o8gr6i['text'],
                'maxLength': o8gr6i['maxChars'],
                'multiple': o8gr6i['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (fq$ls2) {},
                'fail': function (r8imn0) {}
            }), lq$y['window']['wx']['onKeyboardConfirm'](function (pq) {
                var v1judh = pq ? pq['value'] : '';
                o8gr6i['text'] = v1judh, o8gr6i['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), lq$y['window']['wx']['onKeyboardInput'](function (tlp6) {
                var _c7 = tlp6 ? tlp6['value'] : '';
                if (!o8gr6i['multiline']) {
                    if (_c7['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                o8gr6i['text'] = _c7, o8gr6i['event']('input');
            });
        }, ws72fk['inputEnter'] = function () {
            r8io6['inputElement']['target']['focus'] = ![];
        }, ws72fk['wxinputblur'] = function () {
            ws72fk['hideKeyboard']();
        }, ws72fk['hideKeyboard'] = function () {
            lq$y['window']['wx']['offKeyboardConfirm'](), lq$y['window']['wx']['offKeyboardInput'](), lq$y['window']['wx']['hideKeyboard']({
                'success': function (qpy3t) {
                    console['log']('隐藏键盘');
                },
                'fail': function (yptg3) {
                    console['log']('隐藏键盘出错:' + (yptg3 ? yptg3['errMsg'] : ''));
                }
            });
        }, ws72fk;
    }(),
        dvz1j = function () {
        function v1duj() {}
        g8miro(v1duj, 'laya.wx.mini.MiniLoader');
        var ytog6 = v1duj['prototype'];
        return ytog6['load'] = function (hv1jdu, r04m, a4n5m0, f$7qs2, i0mn4r) {
            a4n5m0 === void 0x0 && (a4n5m0 = !![]), i0mn4r === void 0x0 && (i0mn4r = ![]);
            var roi6g8 = this;
            roi6g8['_url'] = hv1jdu;
            if (hv1jdu['indexOf']('data:image') === 0x0) roi6g8['_type'] = r04m = 'image';else roi6g8['_type'] = r04m || (r04m = roi6g8['getTypeFromUrl'](hv1jdu));
            roi6g8['_cache'] = a4n5m0, roi6g8['_data'] = null;
            var in4m0r = 'ascii';
            if (hv1jdu['indexOf']('.fnt') != -0x1) in4m0r = 'utf8';else r04m == 'arraybuffer' && (in4m0r = '');
            ;
            var zbn4a5 = z4ad5b['getFileExtension'](hv1jdu);
            if (v1duj['_fileTypeArr']['indexOf'](zbn4a5) != -0x1) lq$y['EnvConfig']['load']['call'](this, hv1jdu, r04m, a4n5m0, f$7qs2, i0mn4r);else {
                if (!xk_cew['getFileInfo'](hv1jdu)) {
                    if (hv1jdu['indexOf']('layaNativeDir/') != -0x1) {
                        if (lq$y['isZiYu']) {
                            var n5i4 = xk_cew['ziyuFileData'][hv1jdu];
                            roi6g8['onLoaded'](n5i4);
                            return;
                        } else {
                            cosnole['log']('read read'), xk_cew['read'](hv1jdu, in4m0r, new $sqf2l(v1duj, v1duj['onReadNativeCallBack'], [in4m0r, hv1jdu, r04m, a4n5m0, f$7qs2, i0mn4r, roi6g8]));
                            return;
                        }
                    }
                    if (sqf$['rootPath'] == '') var vdj = hv1jdu;else vdj = hv1jdu['split'](sqf$['rootPath'])[0x0];
                    hv1jdu['indexOf']('http://') != -0x1 || hv1jdu['indexOf']('https://') != -0x1 ? lq$y['EnvConfig']['load']['call'](roi6g8, hv1jdu, r04m, a4n5m0, f$7qs2, i0mn4r) : xk_cew['readFile'](vdj, in4m0r, new $sqf2l(v1duj, v1duj['onReadNativeCallBack'], [in4m0r, hv1jdu, r04m, a4n5m0, f$7qs2, i0mn4r, roi6g8]), hv1jdu);
                } else lq$y['EnvConfig']['load']['call'](this, hv1jdu, r04m, a4n5m0, f$7qs2, i0mn4r);
            }
        }, ytog6['resMgrLoad'] = function (r8m0o, az50n, ir8g, $l2qs3, wfc7ke, g6ort, e7kwfc) {
            ir8g === void 0x0 && (ir8g = 0x0), $l2qs3 === void 0x0 && ($l2qs3 = ![]), wfc7ke === void 0x0 && (wfc7ke = ![]), g6ort === void 0x0 && (g6ort = 0x0), e7kwfc === void 0x0 && (e7kwfc = 0x3), r8m0o['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', r8m0o), lq$y['EnvConfig']['resMgrLoad'](r8m0o, (db1ujv, abdvz5, t6oypg) => {
                v1duj['prototype']['resMgrLoadCallBack'](db1ujv, abdvz5, t6oypg, az50n);
            }, ir8g, $l2qs3, wfc7ke, g6ort, e7kwfc);
        }, ytog6['resMgrLoadCallBack'] = function (n4am0, qs$f27, i40rm, or8mg) {
            console['log']('buff:::', n4am0, i40rm, xk_cew['fileNativeDir'] + '///' + xk_cew['fileListName']), or8mg(n4am0, qs$f27, i40rm);
        }, ytog6['clearRes'] = function (e7, _exc9) {
            _exc9 === void 0x0 && (_exc9 = ![]);
            var zbd4 = this;
            zbd4['clearRes'](e7, _exc9);
            var qsf27$ = xk_cew['getFileInfo'](e7);
            if (qsf27$ && (e7['indexOf']('http://') != -0x1 || e7['indexOf']('https://') != -0x1)) {
                var v1zjd = qsf27$['md5'],
                    zbjd1 = xk_cew['getFileNativePath'](v1zjd);
                xk_cew['remove'](zbjd1);
            }
        }, v1duj['onReadNativeCallBack'] = function (girmo8, p3yq, o6tpyg, zj1vb, m08nir, q$l23s, $ysq, ltyqp, u1vjb) {
            zj1vb === void 0x0 && (zj1vb = !![]), q$l23s === void 0x0 && (q$l23s = ![]), ltyqp === void 0x0 && (ltyqp = 0x0);
            if (!ltyqp) {
                var w7fs2$;
                if (o6tpyg == 'json' || o6tpyg == 'atlas') w7fs2$ = lq$y['getJson'](u1vjb['data']);else o6tpyg == 'xml' ? w7fs2$ = z4ad5b['parseXMLFromString'](u1vjb['data']) : w7fs2$ = u1vjb['data'];
                $ysq['onLoaded'](w7fs2$), !lq$y['isZiYu'] && lq$y['isPosMsgYu'] && o6tpyg != 'arraybuffer' && wx['postMessage']({
                    'url': p3yq,
                    'data': w7fs2$,
                    'isLoad': !![]
                });
            } else ltyqp == 0x1 && lq$y['EnvConfig']['load']['call']($ysq, p3yq, o6tpyg, zj1vb, m08nir, q$l23s);
        }, zn4b5a(v1duj, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), v1duj;
    }(),
        xk_cew = function (in8r0m) {
        function tog6p8() {
            tog6p8['__super']['call'](this);
            ;
        }
        return g8miro(tog6p8, 'laya.wx.mini.MiniFileMgr', in8r0m), tog6p8['isLoadFile'] = function (db1vuj) {
            return tog6p8['_fileTypeArr']['indexOf'](db1vuj) != -0x1 ? !![] : ![];
        }, tog6p8['getFileInfo'] = function (rt8og6) {
            var io0rm8 = rt8og6['split']('?')[0x0],
                r8n0m = tog6p8['filesListObj'][io0rm8];
            if (r8n0m == null) return null;else return r8n0m;
            return null;
        }, tog6p8['onFileUpdate'] = function (rin4m, _9cxk) {
            var zad45 = rin4m['split']('/'),
                r04nm = zad45[zad45['length'] - 0x1],
                yg3tp = tog6p8['getFileInfo'](_9cxk);
            if (yg3tp == null) tog6p8['onSaveFile'](_9cxk, r04nm);else {
                if (yg3tp['readyUrl'] != _9cxk) tog6p8['remove'](r04nm, _9cxk);
            }
        }, tog6p8['exits'] = function (vduj1h, mnr8i) {
            var q$f2s = tog6p8['getFileNativePath'](vduj1h);
            tog6p8['fs']['getFileInfo']({
                'filePath': q$f2s,
                'success': function (l$qf2s) {
                    mnr8i != null && mnr8i['runWith']([0x0, l$qf2s]);
                },
                'fail': function (_9kxc) {
                    mnr8i != null && mnr8i['runWith']([0x1, _9kxc]);
                }
            });
        }, tog6p8['read'] = function (q3p$y, dujb, m4n05, z50) {
            dujb === void 0x0 && (dujb = 'ascill'), z50 === void 0x0 && (z50 = '');
            var f7cwk2;
            z50 != '' ? f7cwk2 = tog6p8['getFileNativePath'](q3p$y) : f7cwk2 = q3p$y, tog6p8['fs']['readFile']({
                'filePath': f7cwk2,
                'encoding': dujb,
                'success': function (_wckx) {
                    m4n05 != null && m4n05['runWith']([0x0, _wckx]);
                },
                'fail': function (n05mi4) {
                    if (n05mi4 && z50 != '') tog6p8['down'](z50, dujb, m4n05, z50);else m4n05 != null && m4n05['runWith']([0x1]);
                }
            });
        }, tog6p8['readNativeFile'] = function (lyp36t, rn0m8) {
            tog6p8['fs']['readFile']({
                'filePath': lyp36t,
                'encoding': '',
                'success': function (dv1zab) {
                    rn0m8 != null && rn0m8['runWith']([0x0]);
                },
                'fail': function (ri80o) {
                    rn0m8 != null && rn0m8['runWith']([0x1]);
                }
            });
        }, tog6p8['down'] = function ($lqsf, b1dav, ek9xc_, kx9_c) {
            b1dav === void 0x0 && (b1dav = 'ascill'), kx9_c === void 0x0 && (kx9_c = '');
            var mrn4i0 = tog6p8['getFileNativePath'](kx9_c),
                dzav = tog6p8['wxdown']({
                'url': $lqsf,
                'filePath': mrn4i0,
                'success': function (z1adb) {
                    if (z1adb['statusCode'] === 0xc8) tog6p8['readFile'](z1adb['filePath'], b1dav, ek9xc_, kx9_c);
                },
                'fail': function (jdu1h) {
                    ek9xc_ != null && ek9xc_['runWith']([0x1, jdu1h]);
                }
            });
            dzav['onProgressUpdate'](function (ew7kcf) {
                ek9xc_ != null && ek9xc_['runWith']([0x2, ew7kcf['progress']]);
            });
        }, tog6p8['readFile'] = function (rmoi0, w7e_ck, s$72q, o8imgr) {
            w7e_ck === void 0x0 && (w7e_ck = 'ascill'), o8imgr === void 0x0 && (o8imgr = ''), tog6p8['fs']['readFile']({
                'filePath': rmoi0,
                'encoding': w7e_ck,
                'success': function (db1vu) {
                    if (rmoi0['indexOf']('http://') != -0x1 || rmoi0['indexOf']('https://') != -0x1) tog6p8['onFileUpdate'](rmoi0, o8imgr);
                    s$72q != null && s$72q['runWith']([0x0, db1vu]);
                },
                'fail': function (sq$lf) {
                    if (sq$lf) s$72q != null && s$72q['runWith']([0x1, sq$lf]);
                }
            });
        }, tog6p8['downImg'] = function (v5dzba, _cx9e, udvjh1) {
            udvjh1 === void 0x0 && (udvjh1 = '');
            var xck_9e = tog6p8['wxdown']({
                'url': v5dzba,
                'success': function (f7cw2k) {
                    f7cw2k['statusCode'] === 0xc8 && tog6p8['copyFile'](f7cw2k['tempFilePath'], udvjh1, _cx9e);
                },
                'fail': function (n8ri0m) {
                    _cx9e != null && _cx9e['runWith']([0x1, n8ri0m]);
                }
            });
        }, tog6p8['copyFile'] = function ($3qysl, uj1bv, m8n) {
            var x9_ekc = $3qysl['split']('/'),
                imo80r = x9_ekc[x9_ekc['length'] - 0x1],
                ec9xk = uj1bv['split']('?')[0x0],
                duhv = tog6p8['getFileInfo'](uj1bv),
                wkexc_ = tog6p8['getFileNativePath'](imo80r);
            tog6p8['fs']['copyFile']({
                'srcPath': $3qysl,
                'destPath': wkexc_,
                'success': function (p3l$) {
                    if (!duhv) tog6p8['onSaveFile'](uj1bv, imo80r), m8n != null && m8n['runWith']([0x0]);else {
                        if (duhv['readyUrl'] != uj1bv) tog6p8['remove'](imo80r, uj1bv, m8n);
                    }
                },
                'fail': function (g8mior) {
                    m8n != null && m8n['runWith']([0x1, g8mior]);
                }
            });
        }, tog6p8['getFileNativePath'] = function (fs2$q7) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + fs2$q7;
        }, tog6p8['remove'] = function (db5z4a, zadbv5, kfwc) {
            zadbv5 === void 0x0 && (zadbv5 = '');
            var n4ab5z = tog6p8['getFileInfo'](zadbv5),
                t6og8p = tog6p8['getFileNativePath'](n4ab5z['md5']);
            tor8g['loader']['clearRes'](n4ab5z['readyUrl']), tog6p8['fs']['unlink']({
                'filePath': t6og8p,
                'success': function (wcf7k2) {
                    if (zadbv5 != '') tog6p8['onSaveFile'](zadbv5, db5z4a);
                    kfwc != null && kfwc['runWith']([0x0]);
                },
                'fail': function (ri04m) {}
            });
        }, tog6p8['onSaveFile'] = function (typ36g, poyg6t) {
            var syl$q3 = typ36g['split']('?')[0x0];
            tog6p8['filesListObj'][syl$q3] = {
                'md5': poyg6t,
                'readyUrl': typ36g
            }, tog6p8['fs']['writeFile']({
                'filePath': tog6p8['fileNativeDir'] + '/' + tog6p8['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](tog6p8['filesListObj']),
                'success': function (bv1az) {
                    console['log']('写入测试测试成功：', bv1az);
                },
                'fail': function (cw7_ke) {
                    console['log']('写入测试测试失败：', cw7_ke);
                }
            });
        }, tog6p8['existDir'] = function (q2$ls3, pg36yt) {
            tog6p8['fs']['mkdir']({
                'dirPath': q2$ls3,
                'success': function (k_9) {
                    pg36yt != null && pg36yt['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (b1djvz) {
                    if (b1djvz['errMsg']['indexOf']('file already exists') != -0x1) tog6p8['readSync'](tog6p8['fileListName'], 'utf8', pg36yt);else pg36yt != null && pg36yt['runWith']([0x1, b1djvz]);
                }
            });
        }, tog6p8['readSync'] = function (vbujd1, zbd45, mi8ogr, p8o6) {
            zbd45 === void 0x0 && (zbd45 = 'ascill'), p8o6 === void 0x0 && (p8o6 = '');
            var u1vjd = tog6p8['getFileNativePath'](vbujd1),
                nm50a4;
            try {
                nm50a4 = tog6p8['fs']['readFileSync'](u1vjd), mi8ogr != null && mi8ogr['runWith']([0x0, { 'data': nm50a4 }]);
            } catch (yslq) {
                mi8ogr != null && mi8ogr['runWith']([0x1]);
            }
        }, tog6p8['readCache'] = function () {}, tog6p8['writeCache'] = function (pyql3$) {
            var fc7w2 = readyUrl['split']('?')[0x0];
            tog6p8['filesListObj'][fc7w2] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, tog6p8['fs']['writeFile']({
                'filePath': tog6p8['fileNativeDir'] + '/' + tog6p8['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](tog6p8['filesListObj']),
                'success': function (_eckxw) {},
                'fail': function ($lq3) {}
            });
        }, tog6p8['setNativeFileDir'] = function (cekw7f) {
            tog6p8['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + cekw7f;
        }, tog6p8['filesListObj'] = {}, tog6p8['fileNativeDir'] = null, tog6p8['fileListName'] = 'layaairfiles.txt', tog6p8['ziyuFileData'] = {}, zn4b5a(tog6p8, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), tog6p8;
    }(a4n50z),
        wsf2 = function (tlyp6) {
        function p3y$l() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], p3y$l['__super']['call'](this), this['_sound'] = p3y$l['_createSound'](), this['_chanell'] = new abzv1(this['_sound']);
        }
        g8miro(p3y$l, 'laya.wx.mini.MiniSound', tlyp6);
        var zb5avd = p3y$l['prototype'];
        return zb5avd['load'] = function (to6yp) {
            var pyql3 = this;
            to6yp = sqf$['formatURL'](to6yp), this['url'] = to6yp;
            if (p3y$l['_audioCache'][to6yp]) {
                this['event']('complete');
                return;
            }
            function ri8g6() {
                if (p3y$l['_null'] != undefined) pyql3['_sound']['onCanplay'](p3y$l['_null']), pyql3['_sound']['onError'](p3y$l['_null']);else try {
                    pyql3['_sound']['onCanplay'](null), pyql3['_sound']['onError'](null), p3y$l['_null'] = null;
                } catch (i05mn) {
                    console['warn']('[wxmini] _clearSound:' + i05mn), pyql3['_sound']['onCanplay'](zbad4), pyql3['_sound']['onError'](zbad4), p3y$l['_null'] = zbad4;
                }
            }
            function fk7wc() {
                a50z['loaded'] = !![], a50z['event']('complete'), p3y$l['_audioCache'][a50z['url']] = a50z;
            }
            function bda5(fs$7w2) {
                console['error']('errCode=' + fs$7w2['errCode'] + '  errMsg=' + fs$7w2['errMsg']), a50z['event']('error');
            }
            function zbad4() {}
            this['_sound']['onCanplay'](fk7wc), this['_sound']['onError'](bda5), this['_sound']['src'] = to6yp;
            var a50z = this;
        }, zb5avd['play'] = function (p6yog, py$ql) {
            p6yog === void 0x0 && (p6yog = 0x0), py$ql === void 0x0 && (py$ql = 0x0);
            var cf2k7w, og6t8;
            if (this['url'] == z54bna['_tMusic']) {
                if (!p3y$l['_musicAudio']) p3y$l['_musicAudio'] = this['_sound'];
                cf2k7w = p3y$l['_musicAudio'], og6t8 = this['_chanell'];
            } else cf2k7w = this['_sound'], og6t8 = this['_chanell'];
            return cf2k7w['src'] = this['url'], cf2k7w['startTime'] = 0x0, og6t8['isStopped'] && (og6t8['url'] = this['url'], og6t8['loops'] = py$ql, og6t8['startTime'] = p6yog, og6t8['play'](), z54bna['addChannel'](og6t8)), og6t8;
        }, zb5avd['dispose'] = function () {
            var m45 = p3y$l['_audioCache'][this['url']];
            m45 && (m45['src'] = '', delete p3y$l['_audioCache'][this['url']]);
        }, kw7sf(0x0, zb5avd, 'duration', function () {
            return this['_sound']['duration'];
        }), p3y$l['_createSound'] = function () {
            p3y$l['_id']++;
            var xeck9 = lq$y['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return xeck9;
        }, p3y$l['_musicAudio'] = null, p3y$l['_id'] = 0x0, p3y$l['_audioCache'] = {}, p3y$l['_null'] = undefined, p3y$l;
    }(a4n50z),
        abzv1 = function (m5i0n) {
        function dbzjv(kc_ex9) {
            this['_audio'] = null, this['_onEnd'] = null, dbzjv['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = kc_ex9, this['_onEnd'] = z4ad5b['bind'](this['__onEnd'], this), kc_ex9['onEnded'](this['_onEnd']);
        }
        g8miro(dbzjv, 'laya.wx.mini.MiniSoundChannel', m5i0n);
        var w7$fs2 = dbzjv['prototype'];
        return w7$fs2['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (tor8g['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, w7$fs2['__onNull'] = function () {}, w7$fs2['play'] = function () {
            this['isStopped'] = ![], z54bna['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, w7$fs2['stop'] = function () {
            this['isStopped'] = !![], z54bna['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, w7$fs2['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, w7$fs2['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], z54bna['addChannel'](this), this['_audio']['play']();
        }, kw7sf(0x0, w7$fs2, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), kw7sf(0x0, w7$fs2, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), kw7sf(0x0, w7$fs2, 'volume', function () {
            return 0x1;
        }, function (u1jb) {}), dbzjv['_null'] = undefined, dbzjv;
    }(v1uhdj),
        n4a0z = function () {
        function vjdu1h() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = lq$y['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        g8miro(vjdu1h, 'laya.wx.mini.MiniVideo');
        var rimn = vjdu1h['prototype'];
        return rimn['on'] = function (pgo86t, i4r0nm, fsql) {
            if (pgo86t == 'loadedmetadata') this['onPlayFunc'] = fsql['bind'](i4r0nm), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else pgo86t == 'ended' && (this['onEndedFunC'] = fsql['bind'](i4r0nm), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, rimn['onTimeUpdateFunc'] = function (abdv1) {
            this['position'] = abdv1['position'], this['_duration'] = abdv1['duration'];
        }, rimn['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, rimn['onended'] = function (_ex9, io8m0r) {
            this['onEndedFunC'] = io8m0r['bind'](_ex9), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, rimn['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, rimn['off'] = function (ma0n, oig68, h1vjud) {
            if (ma0n == 'loadedmetadata') this['onPlayFunc'] = h1vjud['bind'](oig68), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else ma0n == 'ended' && (this['onEndedFunC'] = h1vjud['bind'](oig68), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, rimn['load'] = function ($p3ql) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = $p3ql;
        }, rimn['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, rimn['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, rimn['size'] = function (gpo6, zvbd1a) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = gpo6, this['videoElement']['height'] = zvbd1a;
        }, rimn['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, rimn['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, kw7sf(0x0, rimn, 'duration', function () {
            return this['_duration'];
        }), kw7sf(0x0, rimn, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (ypt6l) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = ypt6l;
        }), kw7sf(0x0, rimn, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), kw7sf(0x0, rimn, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), kw7sf(0x0, rimn, 'ended', function () {
            return this['videoend'];
        }), kw7sf(0x0, rimn, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function ($3sq2l) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = $3sq2l;
        }), kw7sf(0x0, rimn, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (wkc27f) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = wkc27f;
        }), kw7sf(0x0, rimn, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (jvhdu1) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = jvhdu1;
        }), kw7sf(0x0, rimn, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), kw7sf(0x0, rimn, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (ri0nm) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = ri0nm;
        }), kw7sf(0x0, rimn, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (otp6g8) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = otp6g8;
        }), kw7sf(0x0, rimn, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), kw7sf(0x0, rimn, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (qls$2f) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = qls$2f;
        }), kw7sf(0x0, rimn, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (uj1vdb) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = uj1vdb;
        }), kw7sf(0x0, rimn, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (ni045) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = ni045;
        }), vjdu1h;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var azb5 in Laya) {
        var dba4 = Laya[azb5];
        dba4 && dba4['__isclass'] && (exports[azb5] = dba4);
    }
});