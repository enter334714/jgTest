var f = wx.$B;
(function (window, document, rl_$3) {
    var egojiv = rl_$3['un'],
        qsmt8 = rl_$3['uns'],
        bv7zg = rl_$3['static'],
        _l3r$d = rl_$3['class'],
        ijyge = rl_$3['getset'],
        m48pw = rl_$3['__newvec'],
        ts8m = laya['utils']['Browser'],
        _lr$ = laya['events']['Event'],
        dlr_ = laya['events']['EventDispatcher'],
        stqh9 = laya['resource']['HTMLImage'],
        z6v7b = laya['utils']['Handler'],
        sp8q = laya['display']['Input'],
        p8a = laya['net']['Loader'],
        xs9 = laya['maths']['Matrix'],
        pn4aku = laya['renders']['Render'],
        nw8pa = laya['utils']['RunDriver'],
        mq9t = laya['media']['Sound'],
        gvzoi = laya['media']['SoundChannel'],
        f250b = laya['media']['SoundManager'],
        wps8mq = laya['display']['Stage'],
        tfh1x = laya['net']['URL'],
        jeovig = laya['utils']['Utils'],
        l3$dr_ = function () {
        function sqmh9t() {}
        return _l3r$d(sqmh9t, 'laya.wx.mini.MiniAdpter'), sqmh9t['getJson'] = function (zbv7ig) {
            return JSON['parse'](zbv7ig);
        }, sqmh9t['init'] = function (ld$y3, egioj) {
            ld$y3 === void 0x0 && (ld$y3 = ![]), egioj === void 0x0 && (egioj = ![]);
            if (sqmh9t['_inited']) return;
            sqmh9t['window'] = window;
            if (sqmh9t['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            sqmh9t['_inited'] = !![], sqmh9t['isZiYu'] = egioj, sqmh9t['isPosMsgYu'] = ld$y3, sqmh9t['EnvConfig'] = {}, !sqmh9t['isZiYu'] && (yiegjo['setNativeFileDir']('/layaairGame'), yiegjo['existDir'](yiegjo['fileNativeDir'], z6v7b['create'](sqmh9t, sqmh9t['onMkdirCallBack']))), sqmh9t['window']['focus'] = function () {}, rl_$3['getUrlPath'] = function () {}, sqmh9t['window']['logtime'] = function (pa8un4) {}, sqmh9t['window']['alertTimeLog'] = function (yd3eo) {}, sqmh9t['window']['resetShareInfo'] = function () {}, sqmh9t['window']['CanvasRenderingContext2D'] = function () {}, sqmh9t['window']['CanvasRenderingContext2D']['prototype'] = sqmh9t['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], sqmh9t['window']['document']['body']['appendChild'] = function () {}, sqmh9t['EnvConfig']['pixelRatioInt'] = 0x0, nw8pa['getPixelRatio'] = sqmh9t['pixelRatio'], sqmh9t['_preCreateElement'] = ts8m['createElement'], ts8m['createElement'] = sqmh9t['createElement'], nw8pa['createShaderCondition'] = sqmh9t['createShaderCondition'], jeovig['parseXMLFromString'] = sqmh9t['parseXMLFromString'], sp8q['_createInputElement'] = x1ft['_createInputElement'], sqmh9t['EnvConfig']['load'] = p8a['prototype']['load'], p8a['prototype']['load'] = stwqm['prototype']['load'], sqmh9t['isZiYu'] && ld$y3 && wx['onMessage'](function (a8pwm4) {
                a8pwm4['isLoad'] && (yiegjo['ziyuFileData'][a8pwm4['url']] = a8pwm4['data']);
            });
        }, sqmh9t['onMkdirCallBack'] = function (twqhs, f901h) {
            if (!twqhs) yiegjo['filesListObj'] = JSON['parse'](f901h['data']);
        }, sqmh9t['pixelRatio'] = function () {
            if (!sqmh9t['EnvConfig']['pixelRatioInt']) try {
                var eryjoi = wx['getSystemInfoSync']();
                return sqmh9t['EnvConfig']['pixelRatioInt'] = eryjoi['pixelRatio'], eryjoi = eryjoi, eryjoi['pixelRatio'];
            } catch (zb27v) {}
            return sqmh9t['EnvConfig']['pixelRatioInt'];
        }, sqmh9t['createElement'] = function (b7ivg) {
            if (b7ivg == 'canvas') {
                var lrdy$;
                return sqmh9t['idx'] == 0x1 ? sqmh9t['isZiYu'] ? (lrdy$ = sharedCanvas, lrdy$['style'] = {}) : lrdy$ = window['canvas'] : lrdy$ = window['wx']['createCanvas'](), sqmh9t['idx']++, lrdy$;
            } else {
                if (b7ivg == 'textarea' || b7ivg == 'input') return sqmh9t['onCreateInput'](b7ivg);else {
                    if (b7ivg == 'div') {
                        var m8p4wa = sqmh9t['_preCreateElement'](b7ivg);
                        return m8p4wa['contains'] = function (qmhws) {
                            return null;
                        }, m8p4wa['removeChild'] = function (oye3d) {}, m8p4wa;
                    } else return sqmh9t['_preCreateElement'](b7ivg);
                }
            }
        }, sqmh9t['onCreateInput'] = function (a4pu8) {
            var l_3d$r = sqmh9t['_preCreateElement'](a4pu8);
            return l_3d$r['focus'] = x1ft['wxinputFocus'], l_3d$r['blur'] = x1ft['wxinputblur'], l_3d$r['style'] = {}, l_3d$r['value'] = 0x0, l_3d$r['parentElement'] = {}, l_3d$r['placeholder'] = {}, l_3d$r['type'] = {}, l_3d$r['setColor'] = function (f10) {}, l_3d$r['setType'] = function (l_rd3$) {}, l_3d$r['setFontFace'] = function (h10xf) {}, l_3d$r['addEventListener'] = function (sx1) {}, l_3d$r['contains'] = function (yrejd) {
                return null;
            }, l_3d$r['removeChild'] = function (xf5620) {}, l_3d$r;
        }, sqmh9t['createShaderCondition'] = function (ryoije) {
            var xf1h90 = this,
                b76g = function () {
                var zv67 = ryoije;
                return xf1h90[ryoije['replace']('this.', '')];
            };
            return b76g;
        }, sqmh9t['EnvConfig'] = null, sqmh9t['window'] = null, sqmh9t['_preCreateElement'] = null, sqmh9t['_inited'] = ![], sqmh9t['wxRequest'] = null, sqmh9t['systemInfo'] = null, sqmh9t['version'] = '0.0.1', sqmh9t['isZiYu'] = ![], sqmh9t['isPosMsgYu'] = ![], sqmh9t['parseXMLFromString'] = function (h19txs) {
            var vjeg, gioeyj;
            h19txs = h19txs['replace'](/>\s+</g, '><');
            try {
                vjeg = new window['Parser']['DOMParser']()['parseFromString'](h19txs, 'text/xml');
            } catch (qhs9t) {
                throw '需要引入xml解析库文件';
            }
            return vjeg;
        }, sqmh9t['idx'] = 0x1, sqmh9t;
    }(),
        hsx9 = function () {
        function viej() {}
        _l3r$d(viej, 'laya.wx.mini.MiniImage');
        var i7vgzb = viej['prototype'];
        return i7vgzb['_loadImage'] = function (bz7v26) {
            var hx910 = this,
                edyoj = ![];
            bz7v26['indexOf']('layaNativeDir/') == -0x1 && (edyoj = !![], bz7v26 = tfh1x['formatURL'](bz7v26));
            if (!yiegjo['getFileInfo'](bz7v26)) {
                if (bz7v26['indexOf']('http://') != -0x1 || bz7v26['indexOf']('https://') != -0x1) yiegjo['downImg'](bz7v26, new z6v7b(viej, viej['onDownImgCallBack'], [bz7v26, hx910]), bz7v26);else viej['onCreateImage'](bz7v26, hx910, !![]);
            } else viej['onCreateImage'](bz7v26, hx910, !edyoj);
        }, viej['onDownImgCallBack'] = function (oejgvi, wtmhq, qmswt8) {
            if (!qmswt8) viej['onCreateImage'](oejgvi, wtmhq);else wtmhq['onError'](null);
        }, viej['onCreateImage'] = function (hf1x9t, t9smqh, i7gzjv) {
            i7gzjv === void 0x0 && (i7gzjv = ![]);
            var ovgizj;
            if (!i7gzjv) {
                var $drl = yiegjo['getFileInfo'](hf1x9t),
                    lyrd$3 = $drl['md5'];
                ovgizj = yiegjo['getFileNativePath'](lyrd$3);
            } else ovgizj = hf1x9t;
            if (t9smqh['imgCache'] == null) t9smqh['imgCache'] = {};
            var v7gjz;
            function vioeg() {
                v7gjz['onload'] = null, v7gjz['onerror'] = null, delete t9smqh['imgCache'][hf1x9t];
            }
            ;
            var f19x = function () {
                vioeg(), t9smqh['onLoaded'](v7gjz);
            },
                l3d_$ = function () {
                vioeg(), t9smqh['event']('error', 'Load image failed');
            };
            t9smqh['_type'] == 'nativeimage' ? (v7gjz = new ts8m['window']['Image'](), v7gjz['crossOrigin'] = '', v7gjz['onload'] = f19x, v7gjz['onerror'] = l3d_$, v7gjz['src'] = ovgizj, t9smqh['imgCache'][hf1x9t] = v7gjz) : new stqh9['create'](ovgizj, {
                'onload': f19x,
                'onerror': l3d_$,
                'onCreate': function (r3le) {
                    v7gjz = r3le, t9smqh['imgCache'][hf1x9t] = r3le;
                }
            });
        }, viej;
    }(),
        x1ft = function () {
        function jyed() {}
        return _l3r$d(jyed, 'laya.wx.mini.MiniInput'), jyed['_createInputElement'] = function () {
            sp8q['_initInput'](sp8q['area'] = ts8m['createElement']('textarea')), sp8q['_initInput'](sp8q['input'] = ts8m['createElement']('input')), sp8q['inputContainer'] = ts8m['createElement']('div'), sp8q['inputContainer']['style']['position'] = 'absolute', sp8q['inputContainer']['style']['zIndex'] = 0x186a0, ts8m['container']['appendChild'](sp8q['inputContainer']), sp8q['inputContainer']['setPos'] = function (nup84a, naw48) {
                sp8q['inputContainer']['style']['left'] = nup84a + 'px', sp8q['inputContainer']['style']['top'] = naw48 + 'px';
            }, rl_$3['stage']['on']('resize', null, jyed['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (p4awm8) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), f250b['_soundClass'] = f0x591, f250b['_musicClass'] = f0x591, window['_videoClass'] = veigj;
        }, jyed['_onStageResize'] = function () {
            var anp4k = rl_$3['stage']['_canvasTransform']['identity']();
            anp4k['scale'](ts8m['width'] / pn4aku['canvas']['width'] / nw8pa['getPixelRatio'](), ts8m['height'] / pn4aku['canvas']['height'] / nw8pa['getPixelRatio']());
        }, jyed['wxinputFocus'] = function (l_rd$) {
            var b7652 = sp8q['inputElement']['target'];
            if (b7652 && !b7652['editable']) return;
            l3$dr_['window']['wx']['offKeyboardConfirm'](), l3$dr_['window']['wx']['offKeyboardInput'](), l3$dr_['window']['wx']['showKeyboard']({
                'defaultValue': b7652['text'],
                'maxLength': b7652['maxChars'],
                'multiple': b7652['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (b7625) {},
                'fail': function (am84pw) {}
            }), l3$dr_['window']['wx']['onKeyboardConfirm'](function (wm8p) {
                var vjzog = wm8p ? wm8p['value'] : '';
                b7652['text'] = vjzog, b7652['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), l3$dr_['window']['wx']['onKeyboardInput'](function (w4pn) {
                var tswmqh = w4pn ? w4pn['value'] : '';
                if (!b7652['multiline']) {
                    if (tswmqh['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                b7652['text'] = tswmqh, b7652['event']('input');
            });
        }, jyed['inputEnter'] = function () {
            sp8q['inputElement']['target']['focus'] = ![];
        }, jyed['wxinputblur'] = function () {
            jyed['hideKeyboard']();
        }, jyed['hideKeyboard'] = function () {
            l3$dr_['window']['wx']['offKeyboardConfirm'](), l3$dr_['window']['wx']['offKeyboardInput'](), l3$dr_['window']['wx']['hideKeyboard']({
                'success': function (vg7izb) {
                    console['log']('隐藏键盘');
                },
                'fail': function (jyiero) {
                    console['log']('隐藏键盘出错:' + (jyiero ? jyiero['errMsg'] : ''));
                }
            });
        }, jyed;
    }(),
        stwqm = function () {
        function f605() {}
        _l3r$d(f605, 'laya.wx.mini.MiniLoader');
        var r3ydle = f605['prototype'];
        return r3ydle['load'] = function (mwpq84, f0b265, m4wap8, wpma48, gvib7) {
            m4wap8 === void 0x0 && (m4wap8 = !![]), gvib7 === void 0x0 && (gvib7 = ![]);
            var i7gjvz = this;
            i7gjvz['_url'] = mwpq84;
            if (mwpq84['indexOf']('data:image') === 0x0) i7gjvz['_type'] = f0b265 = 'image';else i7gjvz['_type'] = f0b265 || (f0b265 = i7gjvz['getTypeFromUrl'](mwpq84));
            i7gjvz['_cache'] = m4wap8, i7gjvz['_data'] = null;
            var iyorje = 'ascii';
            if (mwpq84['indexOf']('.fnt') != -0x1) iyorje = 'utf8';else f0b265 == 'arraybuffer' && (iyorje = '');
            ;
            var w8smq = jeovig['getFileExtension'](mwpq84);
            if (f605['_fileTypeArr']['indexOf'](w8smq) != -0x1) l3$dr_['EnvConfig']['load']['call'](this, mwpq84, f0b265, m4wap8, wpma48, gvib7);else {
                if (!yiegjo['getFileInfo'](mwpq84)) {
                    if (mwpq84['indexOf']('layaNativeDir/') != -0x1) {
                        if (l3$dr_['isZiYu']) {
                            var vbgi = yiegjo['ziyuFileData'][mwpq84];
                            i7gjvz['onLoaded'](vbgi);
                            return;
                        } else {
                            cosnole['log']('read read'), yiegjo['read'](mwpq84, iyorje, new z6v7b(f605, f605['onReadNativeCallBack'], [iyorje, mwpq84, f0b265, m4wap8, wpma48, gvib7, i7gjvz]));
                            return;
                        }
                    }
                    if (tfh1x['rootPath'] == '') var hts9x = mwpq84;else hts9x = mwpq84['split'](tfh1x['rootPath'])[0x0];
                    mwpq84['indexOf']('http://') != -0x1 || mwpq84['indexOf']('https://') != -0x1 ? l3$dr_['EnvConfig']['load']['call'](i7gjvz, mwpq84, f0b265, m4wap8, wpma48, gvib7) : yiegjo['readFile'](hts9x, iyorje, new z6v7b(f605, f605['onReadNativeCallBack'], [iyorje, mwpq84, f0b265, m4wap8, wpma48, gvib7, i7gjvz]), mwpq84);
                } else l3$dr_['EnvConfig']['load']['call'](this, mwpq84, f0b265, m4wap8, wpma48, gvib7);
            }
        }, r3ydle['resMgrLoad'] = function (ivej, x56, d3el, xf0256, np8au, stm9h, x5f91) {
            d3el === void 0x0 && (d3el = 0x0), xf0256 === void 0x0 && (xf0256 = ![]), np8au === void 0x0 && (np8au = ![]), stm9h === void 0x0 && (stm9h = 0x0), x5f91 === void 0x0 && (x5f91 = 0x3), ivej['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', ivej), l3$dr_['EnvConfig']['resMgrLoad'](ivej, (f1xt, f9hx1, jeigov) => {
                f605['prototype']['resMgrLoadCallBack'](f1xt, f9hx1, jeigov, x56);
            }, d3el, xf0256, np8au, stm9h, x5f91);
        }, r3ydle['resMgrLoadCallBack'] = function (pn84aw, b5762z, ryd$3, dlyer) {
            console['log']('buff:::', pn84aw, ryd$3, yiegjo['fileNativeDir'] + '///' + yiegjo['fileListName']), dlyer(pn84aw, b5762z, ryd$3);
        }, r3ydle['clearRes'] = function (bf06, qmhst9) {
            qmhst9 === void 0x0 && (qmhst9 = ![]);
            var f90x1 = this;
            f90x1['clearRes'](bf06, qmhst9);
            var $3yld = yiegjo['getFileInfo'](bf06);
            if ($3yld && (bf06['indexOf']('http://') != -0x1 || bf06['indexOf']('https://') != -0x1)) {
                var vzbgi = $3yld['md5'],
                    v7b6gz = yiegjo['getFileNativePath'](vzbgi);
                yiegjo['remove'](v7b6gz);
            }
        }, f605['onReadNativeCallBack'] = function (z6v7, f2b, deyl3r, m8wtq, punk4, _lr$d3, pnaw84, yoegji, p8amw) {
            m8wtq === void 0x0 && (m8wtq = !![]), _lr$d3 === void 0x0 && (_lr$d3 = ![]), yoegji === void 0x0 && (yoegji = 0x0);
            if (!yoegji) {
                var d_3l;
                if (deyl3r == 'json' || deyl3r == 'atlas') d_3l = l3$dr_['getJson'](p8amw['data']);else deyl3r == 'xml' ? d_3l = jeovig['parseXMLFromString'](p8amw['data']) : d_3l = p8amw['data'];
                pnaw84['onLoaded'](d_3l), !l3$dr_['isZiYu'] && l3$dr_['isPosMsgYu'] && deyl3r != 'arraybuffer' && wx['postMessage']({
                    'url': f2b,
                    'data': d_3l,
                    'isLoad': !![]
                });
            } else yoegji == 0x1 && l3$dr_['EnvConfig']['load']['call'](pnaw84, f2b, deyl3r, m8wtq, punk4, _lr$d3);
        }, bv7zg(f605, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), f605;
    }(),
        yiegjo = function (rl$3) {
        function swtm8() {
            swtm8['__super']['call'](this);
            ;
        }
        return _l3r$d(swtm8, 'laya.wx.mini.MiniFileMgr', rl$3), swtm8['isLoadFile'] = function (t8qm) {
            return swtm8['_fileTypeArr']['indexOf'](t8qm) != -0x1 ? !![] : ![];
        }, swtm8['getFileInfo'] = function (goijzv) {
            var s9qmht = goijzv['split']('?')[0x0],
                dyeor = swtm8['filesListObj'][s9qmht];
            if (dyeor == null) return null;else return dyeor;
            return null;
        }, swtm8['onFileUpdate'] = function (fb650, egiyoj) {
            var f526b0 = fb650['split']('/'),
                z7b562 = f526b0[f526b0['length'] - 0x1],
                oygje = swtm8['getFileInfo'](egiyoj);
            if (oygje == null) swtm8['onSaveFile'](egiyoj, z7b562);else {
                if (oygje['readyUrl'] != egiyoj) swtm8['remove'](z7b562, egiyoj);
            }
        }, swtm8['exits'] = function (m4pw, r$ldy3) {
            var f6b = swtm8['getFileNativePath'](m4pw);
            swtm8['fs']['getFileInfo']({
                'filePath': f6b,
                'success': function (iovgz) {
                    r$ldy3 != null && r$ldy3['runWith']([0x0, iovgz]);
                },
                'fail': function (xf9501) {
                    r$ldy3 != null && r$ldy3['runWith']([0x1, xf9501]);
                }
            });
        }, swtm8['read'] = function (deyj, ojdye, deoyj, n4up8) {
            ojdye === void 0x0 && (ojdye = 'ascill'), n4up8 === void 0x0 && (n4up8 = '');
            var zv7ji;
            n4up8 != '' ? zv7ji = swtm8['getFileNativePath'](deyj) : zv7ji = deyj, swtm8['fs']['readFile']({
                'filePath': zv7ji,
                'encoding': ojdye,
                'success': function (f6b52) {
                    deoyj != null && deoyj['runWith']([0x0, f6b52]);
                },
                'fail': function (zgvij7) {
                    if (zgvij7 && n4up8 != '') swtm8['down'](n4up8, ojdye, deoyj, n4up8);else deoyj != null && deoyj['runWith']([0x1]);
                }
            });
        }, swtm8['readNativeFile'] = function (w84mpa, awm8) {
            swtm8['fs']['readFile']({
                'filePath': w84mpa,
                'encoding': '',
                'success': function (nu48p) {
                    awm8 != null && awm8['runWith']([0x0]);
                },
                'fail': function (x210f) {
                    awm8 != null && awm8['runWith']([0x1]);
                }
            });
        }, swtm8['down'] = function (eodr3, twmqs8, f91xh, ldy$3r) {
            twmqs8 === void 0x0 && (twmqs8 = 'ascill'), ldy$3r === void 0x0 && (ldy$3r = '');
            var qsht = swtm8['getFileNativePath'](ldy$3r),
                zvijog = swtm8['wxdown']({
                'url': eodr3,
                'filePath': qsht,
                'success': function (fx2105) {
                    if (fx2105['statusCode'] === 0xc8) swtm8['readFile'](fx2105['filePath'], twmqs8, f91xh, ldy$3r);
                },
                'fail': function (yjig) {
                    f91xh != null && f91xh['runWith']([0x1, yjig]);
                }
            });
            zvijog['onProgressUpdate'](function (h9sqm) {
                f91xh != null && f91xh['runWith']([0x2, h9sqm['progress']]);
            });
        }, swtm8['readFile'] = function (yjogei, th9x1f, rdle, dlr_$) {
            th9x1f === void 0x0 && (th9x1f = 'ascill'), dlr_$ === void 0x0 && (dlr_$ = ''), swtm8['fs']['readFile']({
                'filePath': yjogei,
                'encoding': th9x1f,
                'success': function (ijogz) {
                    if (yjogei['indexOf']('http://') != -0x1 || yjogei['indexOf']('https://') != -0x1) swtm8['onFileUpdate'](yjogei, dlr_$);
                    rdle != null && rdle['runWith']([0x0, ijogz]);
                },
                'fail': function (x201f) {
                    if (x201f) rdle != null && rdle['runWith']([0x1, x201f]);
                }
            });
        }, swtm8['downImg'] = function (v62bz7, f01x52, egivj) {
            egivj === void 0x0 && (egivj = '');
            var wqm4p = swtm8['wxdown']({
                'url': v62bz7,
                'success': function (d_lr$3) {
                    d_lr$3['statusCode'] === 0xc8 && swtm8['copyFile'](d_lr$3['tempFilePath'], egivj, f01x52);
                },
                'fail': function (h9xt1) {
                    f01x52 != null && f01x52['runWith']([0x1, h9xt1]);
                }
            });
        }, swtm8['copyFile'] = function (w8msqt, qsth9, z6v7b2) {
            var ley3rd = w8msqt['split']('/'),
                z27bv = ley3rd[ley3rd['length'] - 0x1],
                sx1h9 = qsth9['split']('?')[0x0],
                i7gz = swtm8['getFileInfo'](qsth9),
                whts = swtm8['getFileNativePath'](z27bv);
            swtm8['fs']['copyFile']({
                'srcPath': w8msqt,
                'destPath': whts,
                'success': function (p8u4a) {
                    if (!i7gz) swtm8['onSaveFile'](qsth9, z27bv), z6v7b2 != null && z6v7b2['runWith']([0x0]);else {
                        if (i7gz['readyUrl'] != qsth9) swtm8['remove'](z27bv, qsth9, z6v7b2);
                    }
                },
                'fail': function (w8tm) {
                    z6v7b2 != null && z6v7b2['runWith']([0x1, w8tm]);
                }
            });
        }, swtm8['getFileNativePath'] = function (wmsqp8) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + wmsqp8;
        }, swtm8['remove'] = function (t9s1xh, vozgi, l$dy3) {
            vozgi === void 0x0 && (vozgi = '');
            var ejdory = swtm8['getFileInfo'](vozgi),
                b5072 = swtm8['getFileNativePath'](ejdory['md5']);
            rl_$3['loader']['clearRes'](ejdory['readyUrl']), swtm8['fs']['unlink']({
                'filePath': b5072,
                'success': function (fxh1t9) {
                    if (vozgi != '') swtm8['onSaveFile'](vozgi, t9s1xh);
                    l$dy3 != null && l$dy3['runWith']([0x0]);
                },
                'fail': function (dr3yl$) {}
            });
        }, swtm8['onSaveFile'] = function (rld3$, xh1t9f) {
            var qt1 = rld3$['split']('?')[0x0];
            swtm8['filesListObj'][qt1] = {
                'md5': xh1t9f,
                'readyUrl': rld3$
            }, swtm8['fs']['writeFile']({
                'filePath': swtm8['fileNativeDir'] + '/' + swtm8['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](swtm8['filesListObj']),
                'success': function ($ld_r3) {
                    console['log']('写入测试测试成功：', $ld_r3);
                },
                'fail': function (jyod) {
                    console['log']('写入测试测试失败：', jyod);
                }
            });
        }, swtm8['existDir'] = function (ydlr3$, s9hqt) {
            swtm8['fs']['mkdir']({
                'dirPath': ydlr3$,
                'success': function (vioj) {
                    s9hqt != null && s9hqt['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (wtqshm) {
                    if (wtqshm['errMsg']['indexOf']('file already exists') != -0x1) swtm8['readSync'](swtm8['fileListName'], 'utf8', s9hqt);else s9hqt != null && s9hqt['runWith']([0x1, wtqshm]);
                }
            });
        }, swtm8['readSync'] = function (jir, qs9h1t, n4pa, _ld$r3) {
            qs9h1t === void 0x0 && (qs9h1t = 'ascill'), _ld$r3 === void 0x0 && (_ld$r3 = '');
            var l3dy = swtm8['getFileNativePath'](jir),
                fth1x9;
            try {
                fth1x9 = swtm8['fs']['readFileSync'](l3dy), n4pa != null && n4pa['runWith']([0x0, { 'data': fth1x9 }]);
            } catch (roey3d) {
                n4pa != null && n4pa['runWith']([0x1]);
            }
        }, swtm8['readCache'] = function () {}, swtm8['writeCache'] = function (hx1ts9) {
            var oder3 = readyUrl['split']('?')[0x0];
            swtm8['filesListObj'][oder3] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, swtm8['fs']['writeFile']({
                'filePath': swtm8['fileNativeDir'] + '/' + swtm8['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](swtm8['filesListObj']),
                'success': function (ms8tqw) {},
                'fail': function (giojve) {}
            });
        }, swtm8['setNativeFileDir'] = function (x950) {
            swtm8['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + x950;
        }, swtm8['filesListObj'] = {}, swtm8['fileNativeDir'] = null, swtm8['fileListName'] = 'layaairfiles.txt', swtm8['ziyuFileData'] = {}, bv7zg(swtm8, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), swtm8;
    }(dlr_),
        f0x591 = function (whstq) {
        function reody3() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], reody3['__super']['call'](this), this['_sound'] = reody3['_createSound'](), this['_chanell'] = new x1sh(this['_sound']);
        }
        _l3r$d(reody3, 'laya.wx.mini.MiniSound', whstq);
        var r$yd3l = reody3['prototype'];
        return r$yd3l['load'] = function (zvjgo) {
            var wst8mq = this;
            zvjgo = tfh1x['formatURL'](zvjgo), this['url'] = zvjgo;
            if (reody3['_audioCache'][zvjgo]) {
                this['event']('complete');
                return;
            }
            function bzg() {
                if (reody3['_null'] != undefined) wst8mq['_sound']['onCanplay'](reody3['_null']), wst8mq['_sound']['onError'](reody3['_null']);else try {
                    wst8mq['_sound']['onCanplay'](null), wst8mq['_sound']['onError'](null), reody3['_null'] = null;
                } catch (vgjoiz) {
                    console['warn']('[wxmini] _clearSound:' + vgjoiz), wst8mq['_sound']['onCanplay'](swmt), wst8mq['_sound']['onError'](swmt), reody3['_null'] = swmt;
                }
            }
            function f01xh9() {
                xh1st['loaded'] = !![], xh1st['event']('complete'), reody3['_audioCache'][xh1st['url']] = xh1st;
            }
            function b267v(drjeoy) {
                console['error']('errCode=' + drjeoy['errCode'] + '  errMsg=' + drjeoy['errMsg']), xh1st['event']('error');
            }
            function swmt() {}
            this['_sound']['onCanplay'](f01xh9), this['_sound']['onError'](b267v), this['_sound']['src'] = zvjgo;
            var xh1st = this;
        }, r$yd3l['play'] = function (roedyj, zgjvi7) {
            roedyj === void 0x0 && (roedyj = 0x0), zgjvi7 === void 0x0 && (zgjvi7 = 0x0);
            var t8qws, geiyj;
            if (this['url'] == f250b['_tMusic']) {
                if (!reody3['_musicAudio']) reody3['_musicAudio'] = this['_sound'];
                t8qws = reody3['_musicAudio'], geiyj = this['_chanell'];
            } else t8qws = this['_sound'], geiyj = this['_chanell'];
            return t8qws['src'] = this['url'], t8qws['startTime'] = 0x0, geiyj['isStopped'] && (geiyj['url'] = this['url'], geiyj['loops'] = zgjvi7, geiyj['startTime'] = roedyj, geiyj['play'](), f250b['addChannel'](geiyj)), geiyj;
        }, r$yd3l['dispose'] = function () {
            var mqs9h = reody3['_audioCache'][this['url']];
            mqs9h && (mqs9h['src'] = '', delete reody3['_audioCache'][this['url']]);
        }, ijyge(0x0, r$yd3l, 'duration', function () {
            return this['_sound']['duration'];
        }), reody3['_createSound'] = function () {
            reody3['_id']++;
            var erjod = l3$dr_['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return erjod;
        }, reody3['_musicAudio'] = null, reody3['_id'] = 0x0, reody3['_audioCache'] = {}, reody3['_null'] = undefined, reody3;
    }(dlr_),
        x1sh = function (jyieg) {
        function gjovzi(ieyog) {
            this['_audio'] = null, this['_onEnd'] = null, gjovzi['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = ieyog, this['_onEnd'] = jeovig['bind'](this['__onEnd'], this), ieyog['onEnded'](this['_onEnd']);
        }
        _l3r$d(gjovzi, 'laya.wx.mini.MiniSoundChannel', jyieg);
        var gejv = gjovzi['prototype'];
        return gejv['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (rl_$3['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, gejv['__onNull'] = function () {}, gejv['play'] = function () {
            this['isStopped'] = ![], f250b['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, gejv['stop'] = function () {
            this['isStopped'] = !![], f250b['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, gejv['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, gejv['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], f250b['addChannel'](this), this['_audio']['play']();
        }, ijyge(0x0, gejv, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), ijyge(0x0, gejv, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), ijyge(0x0, gejv, 'volume', function () {
            return 0x1;
        }, function (x0512) {}), gjovzi['_null'] = undefined, gjovzi;
    }(gvzoi),
        veigj = function () {
        function v76gbz() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = l3$dr_['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        _l3r$d(v76gbz, 'laya.wx.mini.MiniVideo');
        var zgb6 = v76gbz['prototype'];
        return zgb6['on'] = function (m8w4pa, dr3_$l, jrdoy) {
            if (m8w4pa == 'loadedmetadata') this['onPlayFunc'] = jrdoy['bind'](dr3_$l), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else m8w4pa == 'ended' && (this['onEndedFunC'] = jrdoy['bind'](dr3_$l), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, zgb6['onTimeUpdateFunc'] = function (bzv76g) {
            this['position'] = bzv76g['position'], this['_duration'] = bzv76g['duration'];
        }, zgb6['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, zgb6['onended'] = function (gvbz7i, qs) {
            this['onEndedFunC'] = qs['bind'](gvbz7i), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, zgb6['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, zgb6['off'] = function (uan4, p4kn, h9mstq) {
            if (uan4 == 'loadedmetadata') this['onPlayFunc'] = h9mstq['bind'](p4kn), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else uan4 == 'ended' && (this['onEndedFunC'] = h9mstq['bind'](p4kn), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, zgb6['load'] = function (giojv) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = giojv;
        }, zgb6['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, zgb6['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, zgb6['size'] = function (b2706, qw8ts) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = b2706, this['videoElement']['height'] = qw8ts;
        }, zgb6['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, zgb6['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, ijyge(0x0, zgb6, 'duration', function () {
            return this['_duration'];
        }), ijyge(0x0, zgb6, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (i7zvgb) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = i7zvgb;
        }), ijyge(0x0, zgb6, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), ijyge(0x0, zgb6, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), ijyge(0x0, zgb6, 'ended', function () {
            return this['videoend'];
        }), ijyge(0x0, zgb6, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (pu4an) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = pu4an;
        }), ijyge(0x0, zgb6, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (hsqmtw) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = hsqmtw;
        }), ijyge(0x0, zgb6, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (tswq8) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = tswq8;
        }), ijyge(0x0, zgb6, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), ijyge(0x0, zgb6, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (f6205b) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = f6205b;
        }), ijyge(0x0, zgb6, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (mwtq) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = mwtq;
        }), ijyge(0x0, zgb6, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), ijyge(0x0, zgb6, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (fx0159) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = fx0159;
        }), ijyge(0x0, zgb6, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (ogvzi) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = ogvzi;
        }), ijyge(0x0, zgb6, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (jivgzo) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = jivgzo;
        }), v76gbz;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var f12x05 in Laya) {
        var ryiejo = Laya[f12x05];
        ryiejo && ryiejo['__isclass'] && (exports[f12x05] = ryiejo);
    }
});