var B = wx.$z;
(function (window, document, vn7lfi) {
    var tasezo = vn7lfi['un'],
        vg6p4 = vn7lfi['uns'],
        q$mij3 = vn7lfi['static'],
        asetz = vn7lfi['class'],
        yb8r_ = vn7lfi['getset'],
        xph91g = vn7lfi['__newvec'],
        b25_ = laya['utils']['Browser'],
        w0_52u = laya['events']['Event'],
        etzdoa = laya['events']['EventDispatcher'],
        xg91 = laya['resource']['HTMLImage'],
        nflv = laya['utils']['Handler'],
        e19sxa = laya['display']['Input'],
        zoetyd = laya['net']['Loader'],
        lfvn7 = laya['maths']['Matrix'],
        nif7v = laya['renders']['Render'],
        p1ghx9 = laya['utils']['RunDriver'],
        zeyo = laya['media']['Sound'],
        p4fvg = laya['media']['SoundChannel'],
        b85k_ = laya['media']['SoundManager'],
        zdeoyt = laya['display']['Stage'],
        es19 = laya['net']['URL'],
        h1ax = laya['utils']['Utils'],
        qi37m = function () {
        function h6gpf() {}
        return asetz(h6gpf, 'laya.wx.mini.MiniAdpter'), h6gpf['getJson'] = function (nm7i3l) {
            return JSON['parse'](nm7i3l);
        }, h6gpf['init'] = function (ph19xs, tadeo) {
            ph19xs === void 0x0 && (ph19xs = ![]), tadeo === void 0x0 && (tadeo = ![]);
            if (h6gpf['_inited']) return;
            h6gpf['window'] = window;
            if (h6gpf['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            h6gpf['_inited'] = !![], h6gpf['isZiYu'] = tadeo, h6gpf['isPosMsgYu'] = ph19xs, h6gpf['EnvConfig'] = {}, !h6gpf['isZiYu'] && (rb8dk['setNativeFileDir']('/layaairGame'), rb8dk['existDir'](rb8dk['fileNativeDir'], nflv['create'](h6gpf, h6gpf['onMkdirCallBack']))), h6gpf['window']['focus'] = function () {}, vn7lfi['getUrlPath'] = function () {}, h6gpf['window']['logtime'] = function (eytz) {}, h6gpf['window']['alertTimeLog'] = function (rd8y) {}, h6gpf['window']['resetShareInfo'] = function () {}, h6gpf['window']['CanvasRenderingContext2D'] = function () {}, h6gpf['window']['CanvasRenderingContext2D']['prototype'] = h6gpf['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], h6gpf['window']['document']['body']['appendChild'] = function () {}, h6gpf['EnvConfig']['pixelRatioInt'] = 0x0, p1ghx9['getPixelRatio'] = h6gpf['pixelRatio'], h6gpf['_preCreateElement'] = b25_['createElement'], b25_['createElement'] = h6gpf['createElement'], p1ghx9['createShaderCondition'] = h6gpf['createShaderCondition'], h1ax['parseXMLFromString'] = h6gpf['parseXMLFromString'], e19sxa['_createInputElement'] = saozte['_createInputElement'], h6gpf['EnvConfig']['load'] = zoetyd['prototype']['load'], zoetyd['prototype']['load'] = hf6pg4['prototype']['load'], h6gpf['isZiYu'] && ph19xs && wx['onMessage'](function (br_2) {
                br_2['isLoad'] && (rb8dk['ziyuFileData'][br_2['url']] = br_2['data']);
            });
        }, h6gpf['onMkdirCallBack'] = function (iqmn37, hs1px) {
            if (!iqmn37) rb8dk['filesListObj'] = JSON['parse'](hs1px['data']);
        }, h6gpf['pixelRatio'] = function () {
            if (!h6gpf['EnvConfig']['pixelRatioInt']) try {
                var xsteaz = wx['getSystemInfoSync']();
                return h6gpf['EnvConfig']['pixelRatioInt'] = xsteaz['pixelRatio'], xsteaz = xsteaz, xsteaz['pixelRatio'];
            } catch (krbd8y) {}
            return h6gpf['EnvConfig']['pixelRatioInt'];
        }, h6gpf['createElement'] = function (gh1x9) {
            if (gh1x9 == 'canvas') {
                var nil7;
                return h6gpf['idx'] == 0x1 ? h6gpf['isZiYu'] ? (nil7 = sharedCanvas, nil7['style'] = {}) : nil7 = window['canvas'] : nil7 = window['wx']['createCanvas'](), h6gpf['idx']++, nil7;
            } else {
                if (gh1x9 == 'textarea' || gh1x9 == 'input') return h6gpf['onCreateInput'](gh1x9);else {
                    if (gh1x9 == 'div') {
                        var l6g4fv = h6gpf['_preCreateElement'](gh1x9);
                        return l6g4fv['contains'] = function (w5u_0) {
                            return null;
                        }, l6g4fv['removeChild'] = function (w2_ur5) {}, l6g4fv;
                    } else return h6gpf['_preCreateElement'](gh1x9);
                }
            }
        }, h6gpf['onCreateInput'] = function (tzyde) {
            var zteoa = h6gpf['_preCreateElement'](tzyde);
            return zteoa['focus'] = saozte['wxinputFocus'], zteoa['blur'] = saozte['wxinputblur'], zteoa['style'] = {}, zteoa['value'] = 0x0, zteoa['parentElement'] = {}, zteoa['placeholder'] = {}, zteoa['type'] = {}, zteoa['setColor'] = function (ky_br8) {}, zteoa['setType'] = function (tesxaz) {}, zteoa['setFontFace'] = function (fi7vn) {}, zteoa['addEventListener'] = function (kob8yd) {}, zteoa['contains'] = function (fn7l6v) {
                return null;
            }, zteoa['removeChild'] = function (eoy) {}, zteoa;
        }, h6gpf['createShaderCondition'] = function (q7i$m) {
            var _y8br = this,
                kb_y8r = function () {
                var saex9z = q7i$m;
                return _y8br[q7i$m['replace']('this.', '')];
            };
            return kb_y8r;
        }, h6gpf['EnvConfig'] = null, h6gpf['window'] = null, h6gpf['_preCreateElement'] = null, h6gpf['_inited'] = ![], h6gpf['wxRequest'] = null, h6gpf['systemInfo'] = null, h6gpf['version'] = '0.0.1', h6gpf['isZiYu'] = ![], h6gpf['isPosMsgYu'] = ![], h6gpf['parseXMLFromString'] = function (_w25u) {
            var h9s1ax, texsz;
            _w25u = _w25u['replace'](/>\s+</g, '><');
            try {
                h9s1ax = new window['Parser']['DOMParser']()['parseFromString'](_w25u, 'text/xml');
            } catch (ezaots) {
                throw '需要引入xml解析库文件';
            }
            return h9s1ax;
        }, h6gpf['idx'] = 0x1, h6gpf;
    }(),
        hsx1a = function () {
        function fgpv46() {}
        asetz(fgpv46, 'laya.wx.mini.MiniImage');
        var pfg4v6 = fgpv46['prototype'];
        return pfg4v6['_loadImage'] = function (ybdok8) {
            var in3m7l = this,
                otdkzy = ![];
            ybdok8['indexOf']('layaNativeDir/') == -0x1 && (otdkzy = !![], ybdok8 = es19['formatURL'](ybdok8));
            if (!rb8dk['getFileInfo'](ybdok8)) {
                if (ybdok8['indexOf']('http://') != -0x1 || ybdok8['indexOf']('https://') != -0x1) rb8dk['downImg'](ybdok8, new nflv(fgpv46, fgpv46['onDownImgCallBack'], [ybdok8, in3m7l]), ybdok8);else fgpv46['onCreateImage'](ybdok8, in3m7l, !![]);
            } else fgpv46['onCreateImage'](ybdok8, in3m7l, !otdkzy);
        }, fgpv46['onDownImgCallBack'] = function (ph4g6, oatdez, f4gp6) {
            if (!f4gp6) fgpv46['onCreateImage'](ph4g6, oatdez);else oatdez['onError'](null);
        }, fgpv46['onCreateImage'] = function (r_825, ji3q$, _b5r) {
            _b5r === void 0x0 && (_b5r = ![]);
            var gfv6l;
            if (!_b5r) {
                var pfvg4 = rb8dk['getFileInfo'](r_825),
                    xsetaz = pfvg4['md5'];
                gfv6l = rb8dk['getFileNativePath'](xsetaz);
            } else gfv6l = r_825;
            if (ji3q$['imgCache'] == null) ji3q$['imgCache'] = {};
            var fvn46l;
            function ezasxt() {
                fvn46l['onload'] = null, fvn46l['onerror'] = null, delete ji3q$['imgCache'][r_825];
            }
            ;
            var n6vl4f = function () {
                ezasxt(), ji3q$['onLoaded'](fvn46l);
            },
                mi37nl = function () {
                ezasxt(), ji3q$['event']('error', 'Load image failed');
            };
            ji3q$['_type'] == 'nativeimage' ? (fvn46l = new b25_['window']['Image'](), fvn46l['crossOrigin'] = '', fvn46l['onload'] = n6vl4f, fvn46l['onerror'] = mi37nl, fvn46l['src'] = gfv6l, ji3q$['imgCache'][r_825] = fvn46l) : new xg91['create'](gfv6l, {
                'onload': n6vl4f,
                'onerror': mi37nl,
                'onCreate': function (u2_w5r) {
                    fvn46l = u2_w5r, ji3q$['imgCache'][r_825] = u2_w5r;
                }
            });
        }, fgpv46;
    }(),
        saozte = function () {
        function v67l() {}
        return asetz(v67l, 'laya.wx.mini.MiniInput'), v67l['_createInputElement'] = function () {
            e19sxa['_initInput'](e19sxa['area'] = b25_['createElement']('textarea')), e19sxa['_initInput'](e19sxa['input'] = b25_['createElement']('input')), e19sxa['inputContainer'] = b25_['createElement']('div'), e19sxa['inputContainer']['style']['position'] = 'absolute', e19sxa['inputContainer']['style']['zIndex'] = 0x186a0, b25_['container']['appendChild'](e19sxa['inputContainer']), e19sxa['inputContainer']['setPos'] = function (nvlf6, jiq3$m) {
                e19sxa['inputContainer']['style']['left'] = nvlf6 + 'px', e19sxa['inputContainer']['style']['top'] = jiq3$m + 'px';
            }, vn7lfi['stage']['on']('resize', null, v67l['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (obytk) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), b85k_['_soundClass'] = kdb8r, b85k_['_musicClass'] = kdb8r, window['_videoClass'] = vnlm7i;
        }, v67l['_onStageResize'] = function () {
            var es1a9 = vn7lfi['stage']['_canvasTransform']['identity']();
            es1a9['scale'](b25_['width'] / nif7v['canvas']['width'] / p1ghx9['getPixelRatio'](), b25_['height'] / nif7v['canvas']['height'] / p1ghx9['getPixelRatio']());
        }, v67l['wxinputFocus'] = function (otdea) {
            var flv46g = e19sxa['inputElement']['target'];
            if (flv46g && !flv46g['editable']) return;
            qi37m['window']['wx']['offKeyboardConfirm'](), qi37m['window']['wx']['offKeyboardInput'](), qi37m['window']['wx']['showKeyboard']({
                'defaultValue': flv46g['text'],
                'maxLength': flv46g['maxChars'],
                'multiple': flv46g['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (oesaz) {},
                'fail': function (b_) {}
            }), qi37m['window']['wx']['onKeyboardConfirm'](function (b8r2_) {
                var ivlm = b8r2_ ? b8r2_['value'] : '';
                flv46g['text'] = ivlm, flv46g['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), qi37m['window']['wx']['onKeyboardInput'](function (k8rdb) {
                var yoetdz = k8rdb ? k8rdb['value'] : '';
                if (!flv46g['multiline']) {
                    if (yoetdz['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                flv46g['text'] = yoetdz, flv46g['event']('input');
            });
        }, v67l['inputEnter'] = function () {
            e19sxa['inputElement']['target']['focus'] = ![];
        }, v67l['wxinputblur'] = function () {
            v67l['hideKeyboard']();
        }, v67l['hideKeyboard'] = function () {
            qi37m['window']['wx']['offKeyboardConfirm'](), qi37m['window']['wx']['offKeyboardInput'](), qi37m['window']['wx']['hideKeyboard']({
                'success': function (oykd8) {
                    console['log']('隐藏键盘');
                },
                'fail': function (yztdeo) {
                    console['log']('隐藏键盘出错:' + (yztdeo ? yztdeo['errMsg'] : ''));
                }
            });
        }, v67l;
    }(),
        hf6pg4 = function () {
        function il37mn() {}
        asetz(il37mn, 'laya.wx.mini.MiniLoader');
        var r5_b28 = il37mn['prototype'];
        return r5_b28['load'] = function (ozeats, tyzde, bytdok, etxzs, xgh91) {
            bytdok === void 0x0 && (bytdok = !![]), xgh91 === void 0x0 && (xgh91 = ![]);
            var aezxst = this;
            aezxst['_url'] = ozeats;
            if (ozeats['indexOf']('data:image') === 0x0) aezxst['_type'] = tyzde = 'image';else aezxst['_type'] = tyzde || (tyzde = aezxst['getTypeFromUrl'](ozeats));
            aezxst['_cache'] = bytdok, aezxst['_data'] = null;
            var ade = 'ascii';
            if (ozeats['indexOf']('.fnt') != -0x1) ade = 'utf8';else tyzde == 'arraybuffer' && (ade = '');
            ;
            var xg9ph1 = h1ax['getFileExtension'](ozeats);
            if (il37mn['_fileTypeArr']['indexOf'](xg9ph1) != -0x1) qi37m['EnvConfig']['load']['call'](this, ozeats, tyzde, bytdok, etxzs, xgh91);else {
                if (!rb8dk['getFileInfo'](ozeats)) {
                    if (ozeats['indexOf']('layaNativeDir/') != -0x1) {
                        if (qi37m['isZiYu']) {
                            var aeztsx = rb8dk['ziyuFileData'][ozeats];
                            aezxst['onLoaded'](aeztsx);
                            return;
                        } else {
                            cosnole['log']('read read'), rb8dk['read'](ozeats, ade, new nflv(il37mn, il37mn['onReadNativeCallBack'], [ade, ozeats, tyzde, bytdok, etxzs, xgh91, aezxst]));
                            return;
                        }
                    }
                    if (es19['rootPath'] == '') var $im3qj = ozeats;else $im3qj = ozeats['split'](es19['rootPath'])[0x0];
                    ozeats['indexOf']('http://') != -0x1 || ozeats['indexOf']('https://') != -0x1 ? qi37m['EnvConfig']['load']['call'](aezxst, ozeats, tyzde, bytdok, etxzs, xgh91) : rb8dk['readFile']($im3qj, ade, new nflv(il37mn, il37mn['onReadNativeCallBack'], [ade, ozeats, tyzde, bytdok, etxzs, xgh91, aezxst]), ozeats);
                } else qi37m['EnvConfig']['load']['call'](this, ozeats, tyzde, bytdok, etxzs, xgh91);
            }
        }, r5_b28['resMgrLoad'] = function (xas1e9, i73mnq, kbyo8, tsxe, tobyk, r8b_y, vgf6l) {
            kbyo8 === void 0x0 && (kbyo8 = 0x0), tsxe === void 0x0 && (tsxe = ![]), tobyk === void 0x0 && (tobyk = ![]), r8b_y === void 0x0 && (r8b_y = 0x0), vgf6l === void 0x0 && (vgf6l = 0x3), xas1e9['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', xas1e9), qi37m['EnvConfig']['resMgrLoad'](xas1e9, (zxtas, toezs, fn4lv) => {
                il37mn['prototype']['resMgrLoadCallBack'](zxtas, toezs, fn4lv, i73mnq);
            }, kbyo8, tsxe, tobyk, r8b_y, vgf6l);
        }, r5_b28['resMgrLoadCallBack'] = function (lv76fn, sxe9a1, drk8y, g194hp) {
            console['log']('buff:::', lv76fn, drk8y, rb8dk['fileNativeDir'] + '///' + rb8dk['fileListName']), g194hp(lv76fn, sxe9a1, drk8y);
        }, r5_b28['clearRes'] = function (oydtkb, tdyez) {
            tdyez === void 0x0 && (tdyez = ![]);
            var vf4gl = this;
            vf4gl['clearRes'](oydtkb, tdyez);
            var ozky = rb8dk['getFileInfo'](oydtkb);
            if (ozky && (oydtkb['indexOf']('http://') != -0x1 || oydtkb['indexOf']('https://') != -0x1)) {
                var ybr8kd = ozky['md5'],
                    x19hp = rb8dk['getFileNativePath'](ybr8kd);
                rb8dk['remove'](x19hp);
            }
        }, il37mn['onReadNativeCallBack'] = function (dk8yb, u2_5rw, tkboy, pg149h, qj$m, hp6fg, asezot, ytkob, ilfnv7) {
            pg149h === void 0x0 && (pg149h = !![]), hp6fg === void 0x0 && (hp6fg = ![]), ytkob === void 0x0 && (ytkob = 0x0);
            if (!ytkob) {
                var bo8dy;
                if (tkboy == 'json' || tkboy == 'atlas') bo8dy = qi37m['getJson'](ilfnv7['data']);else tkboy == 'xml' ? bo8dy = h1ax['parseXMLFromString'](ilfnv7['data']) : bo8dy = ilfnv7['data'];
                asezot['onLoaded'](bo8dy), !qi37m['isZiYu'] && qi37m['isPosMsgYu'] && tkboy != 'arraybuffer' && wx['postMessage']({
                    'url': u2_5rw,
                    'data': bo8dy,
                    'isLoad': !![]
                });
            } else ytkob == 0x1 && qi37m['EnvConfig']['load']['call'](asezot, u2_5rw, tkboy, pg149h, qj$m, hp6fg);
        }, q$mij3(il37mn, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), il37mn;
    }(),
        rb8dk = function (s1pxh9) {
        function u50_w() {
            u50_w['__super']['call'](this);
            ;
        }
        return asetz(u50_w, 'laya.wx.mini.MiniFileMgr', s1pxh9), u50_w['isLoadFile'] = function (nilv7) {
            return u50_w['_fileTypeArr']['indexOf'](nilv7) != -0x1 ? !![] : ![];
        }, u50_w['getFileInfo'] = function (soezt) {
            var aszet = soezt['split']('?')[0x0],
                nvf6 = u50_w['filesListObj'][aszet];
            if (nvf6 == null) return null;else return nvf6;
            return null;
        }, u50_w['onFileUpdate'] = function (azdte, m7vni) {
            var eax = azdte['split']('/'),
                kb_yr = eax[eax['length'] - 0x1],
                b_kr58 = u50_w['getFileInfo'](m7vni);
            if (b_kr58 == null) u50_w['onSaveFile'](m7vni, kb_yr);else {
                if (b_kr58['readyUrl'] != m7vni) u50_w['remove'](kb_yr, m7vni);
            }
        }, u50_w['exits'] = function (o8yd, lf7inv) {
            var b5r8k_ = u50_w['getFileNativePath'](o8yd);
            u50_w['fs']['getFileInfo']({
                'filePath': b5r8k_,
                'success': function (exas1) {
                    lf7inv != null && lf7inv['runWith']([0x0, exas1]);
                },
                'fail': function (odtyb) {
                    lf7inv != null && lf7inv['runWith']([0x1, odtyb]);
                }
            });
        }, u50_w['read'] = function (nli37m, yboktd, i3mq7, krdyb) {
            yboktd === void 0x0 && (yboktd = 'ascill'), krdyb === void 0x0 && (krdyb = '');
            var i37qm$;
            krdyb != '' ? i37qm$ = u50_w['getFileNativePath'](nli37m) : i37qm$ = nli37m, u50_w['fs']['readFile']({
                'filePath': i37qm$,
                'encoding': yboktd,
                'success': function (l7ivf) {
                    i3mq7 != null && i3mq7['runWith']([0x0, l7ivf]);
                },
                'fail': function (lf7vi) {
                    if (lf7vi && krdyb != '') u50_w['down'](krdyb, yboktd, i3mq7, krdyb);else i3mq7 != null && i3mq7['runWith']([0x1]);
                }
            });
        }, u50_w['readNativeFile'] = function (bdy8kr, wu_52r) {
            u50_w['fs']['readFile']({
                'filePath': bdy8kr,
                'encoding': '',
                'success': function (ybdkt) {
                    wu_52r != null && wu_52r['runWith']([0x0]);
                },
                'fail': function (p9s1h) {
                    wu_52r != null && wu_52r['runWith']([0x1]);
                }
            });
        }, u50_w['down'] = function (dyeozt, _b8y, tbyokd, b_r528) {
            _b8y === void 0x0 && (_b8y = 'ascill'), b_r528 === void 0x0 && (b_r528 = '');
            var r28u_ = u50_w['getFileNativePath'](b_r528),
                rdby = u50_w['wxdown']({
                'url': dyeozt,
                'filePath': r28u_,
                'success': function (p1sh9x) {
                    if (p1sh9x['statusCode'] === 0xc8) u50_w['readFile'](p1sh9x['filePath'], _b8y, tbyokd, b_r528);
                },
                'fail': function (_0w5) {
                    tbyokd != null && tbyokd['runWith']([0x1, _0w5]);
                }
            });
            rdby['onProgressUpdate'](function (szoea) {
                tbyokd != null && tbyokd['runWith']([0x2, szoea['progress']]);
            });
        }, u50_w['readFile'] = function (eztoas, wr_52u, l7finv, qi7$m3) {
            wr_52u === void 0x0 && (wr_52u = 'ascill'), qi7$m3 === void 0x0 && (qi7$m3 = ''), u50_w['fs']['readFile']({
                'filePath': eztoas,
                'encoding': wr_52u,
                'success': function (hg4f) {
                    if (eztoas['indexOf']('http://') != -0x1 || eztoas['indexOf']('https://') != -0x1) u50_w['onFileUpdate'](eztoas, qi7$m3);
                    l7finv != null && l7finv['runWith']([0x0, hg4f]);
                },
                'fail': function (ivm7n) {
                    if (ivm7n) l7finv != null && l7finv['runWith']([0x1, ivm7n]);
                }
            });
        }, u50_w['downImg'] = function (ru2w5_, edtyoz, exsat) {
            exsat === void 0x0 && (exsat = '');
            var $3qij = u50_w['wxdown']({
                'url': ru2w5_,
                'success': function (ykdob8) {
                    ykdob8['statusCode'] === 0xc8 && u50_w['copyFile'](ykdob8['tempFilePath'], exsat, edtyoz);
                },
                'fail': function (v7mlin) {
                    edtyoz != null && edtyoz['runWith']([0x1, v7mlin]);
                }
            });
        }, u50_w['copyFile'] = function (i3n7ml, byotkd, nfv64l) {
            var zdyet = i3n7ml['split']('/'),
                shx9a = zdyet[zdyet['length'] - 0x1],
                ln7vmi = byotkd['split']('?')[0x0],
                e9axs = u50_w['getFileInfo'](byotkd),
                rby_ = u50_w['getFileNativePath'](shx9a);
            u50_w['fs']['copyFile']({
                'srcPath': i3n7ml,
                'destPath': rby_,
                'success': function (tx) {
                    if (!e9axs) u50_w['onSaveFile'](byotkd, shx9a), nfv64l != null && nfv64l['runWith']([0x0]);else {
                        if (e9axs['readyUrl'] != byotkd) u50_w['remove'](shx9a, byotkd, nfv64l);
                    }
                },
                'fail': function (hpxg) {
                    nfv64l != null && nfv64l['runWith']([0x1, hpxg]);
                }
            });
        }, u50_w['getFileNativePath'] = function (mn) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + mn;
        }, u50_w['remove'] = function (tezsx, pg416, zyk) {
            pg416 === void 0x0 && (pg416 = '');
            var w5r2 = u50_w['getFileInfo'](pg416),
                r58u_ = u50_w['getFileNativePath'](w5r2['md5']);
            vn7lfi['loader']['clearRes'](w5r2['readyUrl']), u50_w['fs']['unlink']({
                'filePath': r58u_,
                'success': function (aoezdt) {
                    if (pg416 != '') u50_w['onSaveFile'](pg416, tezsx);
                    zyk != null && zyk['runWith']([0x0]);
                },
                'fail': function (xe9saz) {}
            });
        }, u50_w['onSaveFile'] = function (ur_5w, sza9e) {
            var doykb8 = ur_5w['split']('?')[0x0];
            u50_w['filesListObj'][doykb8] = {
                'md5': sza9e,
                'readyUrl': ur_5w
            }, u50_w['fs']['writeFile']({
                'filePath': u50_w['fileNativeDir'] + '/' + u50_w['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](u50_w['filesListObj']),
                'success': function (h1xps9) {
                    console['log']('写入测试测试成功：', h1xps9);
                },
                'fail': function (r5w2_u) {
                    console['log']('写入测试测试失败：', r5w2_u);
                }
            });
        }, u50_w['existDir'] = function (f6vlg, q7nmi3) {
            u50_w['fs']['mkdir']({
                'dirPath': f6vlg,
                'success': function (g6ph4f) {
                    q7nmi3 != null && q7nmi3['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (xp19hs) {
                    if (xp19hs['errMsg']['indexOf']('file already exists') != -0x1) u50_w['readSync'](u50_w['fileListName'], 'utf8', q7nmi3);else q7nmi3 != null && q7nmi3['runWith']([0x1, xp19hs]);
                }
            });
        }, u50_w['readSync'] = function (zseax, zkot, rb825, zoedta) {
            zkot === void 0x0 && (zkot = 'ascill'), zoedta === void 0x0 && (zoedta = '');
            var nfv4l = u50_w['getFileNativePath'](zseax),
                n67;
            try {
                n67 = u50_w['fs']['readFileSync'](nfv4l), rb825 != null && rb825['runWith']([0x0, { 'data': n67 }]);
            } catch (fi7lv) {
                rb825 != null && rb825['runWith']([0x1]);
            }
        }, u50_w['readCache'] = function () {}, u50_w['writeCache'] = function (x9hs1a) {
            var ezytd = readyUrl['split']('?')[0x0];
            u50_w['filesListObj'][ezytd] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, u50_w['fs']['writeFile']({
                'filePath': u50_w['fileNativeDir'] + '/' + u50_w['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](u50_w['filesListObj']),
                'success': function (lvfin) {},
                'fail': function (xazes) {}
            });
        }, u50_w['setNativeFileDir'] = function (sha9x) {
            u50_w['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + sha9x;
        }, u50_w['filesListObj'] = {}, u50_w['fileNativeDir'] = null, u50_w['fileListName'] = 'layaairfiles.txt', u50_w['ziyuFileData'] = {}, q$mij3(u50_w, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), u50_w;
    }(etzdoa),
        kdb8r = function (p4h61) {
        function q7mi3n() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], q7mi3n['__super']['call'](this), this['_sound'] = q7mi3n['_createSound'](), this['_chanell'] = new qim3j(this['_sound']);
        }
        asetz(q7mi3n, 'laya.wx.mini.MiniSound', p4h61);
        var g1p49 = q7mi3n['prototype'];
        return g1p49['load'] = function (liv7fn) {
            var ydbkto = this;
            liv7fn = es19['formatURL'](liv7fn), this['url'] = liv7fn;
            if (q7mi3n['_audioCache'][liv7fn]) {
                this['event']('complete');
                return;
            }
            function p149g() {
                if (q7mi3n['_null'] != undefined) ydbkto['_sound']['onCanplay'](q7mi3n['_null']), ydbkto['_sound']['onError'](q7mi3n['_null']);else try {
                    ydbkto['_sound']['onCanplay'](null), ydbkto['_sound']['onError'](null), q7mi3n['_null'] = null;
                } catch (br28_5) {
                    console['warn']('[wxmini] _clearSound:' + br28_5), ydbkto['_sound']['onCanplay'](tkdoz), ydbkto['_sound']['onError'](tkdoz), q7mi3n['_null'] = tkdoz;
                }
            }
            function w20_() {
                u5w_0['loaded'] = !![], u5w_0['event']('complete'), q7mi3n['_audioCache'][u5w_0['url']] = u5w_0;
            }
            function hfp6g(rbk_8) {
                console['error']('errCode=' + rbk_8['errCode'] + '  errMsg=' + rbk_8['errMsg']), u5w_0['event']('error');
            }
            function tkdoz() {}
            this['_sound']['onCanplay'](w20_), this['_sound']['onError'](hfp6g), this['_sound']['src'] = liv7fn;
            var u5w_0 = this;
        }, g1p49['play'] = function (sxp19h, tdboky) {
            sxp19h === void 0x0 && (sxp19h = 0x0), tdboky === void 0x0 && (tdboky = 0x0);
            var fg6ph4, uw025;
            if (this['url'] == b85k_['_tMusic']) {
                if (!q7mi3n['_musicAudio']) q7mi3n['_musicAudio'] = this['_sound'];
                fg6ph4 = q7mi3n['_musicAudio'], uw025 = this['_chanell'];
            } else fg6ph4 = this['_sound'], uw025 = this['_chanell'];
            return fg6ph4['src'] = this['url'], fg6ph4['startTime'] = 0x0, uw025['isStopped'] && (uw025['url'] = this['url'], uw025['loops'] = tdboky, uw025['startTime'] = sxp19h, uw025['play'](), b85k_['addChannel'](uw025)), uw025;
        }, g1p49['dispose'] = function () {
            var atso = q7mi3n['_audioCache'][this['url']];
            atso && (atso['src'] = '', delete q7mi3n['_audioCache'][this['url']]);
        }, yb8r_(0x0, g1p49, 'duration', function () {
            return this['_sound']['duration'];
        }), q7mi3n['_createSound'] = function () {
            q7mi3n['_id']++;
            var zaxest = qi37m['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return zaxest;
        }, q7mi3n['_musicAudio'] = null, q7mi3n['_id'] = 0x0, q7mi3n['_audioCache'] = {}, q7mi3n['_null'] = undefined, q7mi3n;
    }(etzdoa),
        qim3j = function (zdoey) {
        function gh4p9(gv64p) {
            this['_audio'] = null, this['_onEnd'] = null, gh4p9['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = gv64p, this['_onEnd'] = h1ax['bind'](this['__onEnd'], this), gv64p['onEnded'](this['_onEnd']);
        }
        asetz(gh4p9, 'laya.wx.mini.MiniSoundChannel', zdoey);
        var _052 = gh4p9['prototype'];
        return _052['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (vn7lfi['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, _052['__onNull'] = function () {}, _052['play'] = function () {
            this['isStopped'] = ![], b85k_['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, _052['stop'] = function () {
            this['isStopped'] = !![], b85k_['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, _052['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, _052['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], b85k_['addChannel'](this), this['_audio']['play']();
        }, yb8r_(0x0, _052, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), yb8r_(0x0, _052, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), yb8r_(0x0, _052, 'volume', function () {
            return 0x1;
        }, function (tzsao) {}), gh4p9['_null'] = undefined, gh4p9;
    }(p4fvg),
        vnlm7i = function () {
        function r8ydk() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = qi37m['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        asetz(r8ydk, 'laya.wx.mini.MiniVideo');
        var tkybdo = r8ydk['prototype'];
        return tkybdo['on'] = function (_5r2b8, n7lvf6, kd8ybr) {
            if (_5r2b8 == 'loadedmetadata') this['onPlayFunc'] = kd8ybr['bind'](n7lvf6), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else _5r2b8 == 'ended' && (this['onEndedFunC'] = kd8ybr['bind'](n7lvf6), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, tkybdo['onTimeUpdateFunc'] = function ($imjq) {
            this['position'] = $imjq['position'], this['_duration'] = $imjq['duration'];
        }, tkybdo['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, tkybdo['onended'] = function (gh94, nifv7) {
            this['onEndedFunC'] = nifv7['bind'](gh94), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, tkybdo['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, tkybdo['off'] = function (hsx91, zyot, _uw25r) {
            if (hsx91 == 'loadedmetadata') this['onPlayFunc'] = _uw25r['bind'](zyot), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else hsx91 == 'ended' && (this['onEndedFunC'] = _uw25r['bind'](zyot), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, tkybdo['load'] = function (iqm73n) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = iqm73n;
        }, tkybdo['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, tkybdo['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, tkybdo['size'] = function (zeaxs, _r58u2) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = zeaxs, this['videoElement']['height'] = _r58u2;
        }, tkybdo['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, tkybdo['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, yb8r_(0x0, tkybdo, 'duration', function () {
            return this['_duration'];
        }), yb8r_(0x0, tkybdo, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (pf6v) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = pf6v;
        }), yb8r_(0x0, tkybdo, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), yb8r_(0x0, tkybdo, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), yb8r_(0x0, tkybdo, 'ended', function () {
            return this['videoend'];
        }), yb8r_(0x0, tkybdo, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (eatozd) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = eatozd;
        }), yb8r_(0x0, tkybdo, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (phg91) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = phg91;
        }), yb8r_(0x0, tkybdo, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (hps91x) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = hps91x;
        }), yb8r_(0x0, tkybdo, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), yb8r_(0x0, tkybdo, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (miv7n) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = miv7n;
        }), yb8r_(0x0, tkybdo, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (nm37) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = nm37;
        }), yb8r_(0x0, tkybdo, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), yb8r_(0x0, tkybdo, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (ky8od) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = ky8od;
        }), yb8r_(0x0, tkybdo, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (etyz) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = etyz;
        }), yb8r_(0x0, tkybdo, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (_u82r5) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = _u82r5;
        }), r8ydk;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var u5w2_r in Laya) {
        var _5r28 = Laya[u5w2_r];
        _5r28 && _5r28['__isclass'] && (exports[u5w2_r] = _5r28);
    }
});