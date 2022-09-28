var u = wx.$x;
(function (window, document, xzoim) {
    var e0pqha = xzoim['un'],
        izmxos = xzoim['uns'],
        hqe_a = xzoim['static'],
        k613wt = xzoim['class'],
        wb1t = xzoim['getset'],
        he_qa = xzoim['__newvec'],
        ms4gix = laya['utils']['Browser'],
        f97l8c = laya['events']['Event'],
        ujfv = laya['events']['EventDispatcher'],
        fl9jnc = laya['resource']['HTMLImage'],
        fl8y79 = laya['utils']['Handler'],
        pe_qa = laya['display']['Input'],
        mixgs = laya['net']['Loader'],
        nduvgj = laya['maths']['Matrix'],
        kb3w01 = laya['renders']['Render'],
        zsiox = laya['utils']['RunDriver'],
        h0ekbw = laya['media']['Sound'],
        o6m = laya['media']['SoundChannel'],
        n9ufcj = laya['media']['SoundManager'],
        twb31k = laya['display']['Stage'],
        ewh0bk = laya['net']['URL'],
        f9yl8 = laya['utils']['Utils'],
        dx4vi = function () {
        function qap_eh() {}
        return k613wt(qap_eh, 'laya.wx.mini.MiniAdpter'), qap_eh['getJson'] = function (unf9j) {
            return JSON['parse'](unf9j);
        }, qap_eh['init'] = function (ab0ph, nvfcuj) {
            ab0ph === void 0x0 && (ab0ph = ![]), nvfcuj === void 0x0 && (nvfcuj = ![]);
            if (qap_eh['_inited']) return;
            qap_eh['window'] = window;
            if (qap_eh['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            qap_eh['_inited'] = !![], qap_eh['isZiYu'] = nvfcuj, qap_eh['isPosMsgYu'] = ab0ph, qap_eh['EnvConfig'] = {}, !qap_eh['isZiYu'] && (zt63['setNativeFileDir']('/layaairGame'), zt63['existDir'](zt63['fileNativeDir'], fl8y79['create'](qap_eh, qap_eh['onMkdirCallBack']))), qap_eh['window']['focus'] = function () {}, xzoim['getUrlPath'] = function () {}, qap_eh['window']['logtime'] = function (xivgd) {}, qap_eh['window']['alertTimeLog'] = function (f9cl78) {}, qap_eh['window']['resetShareInfo'] = function () {}, qap_eh['window']['CanvasRenderingContext2D'] = function () {}, qap_eh['window']['CanvasRenderingContext2D']['prototype'] = qap_eh['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], qap_eh['window']['document']['body']['appendChild'] = function () {}, qap_eh['EnvConfig']['pixelRatioInt'] = 0x0, zsiox['getPixelRatio'] = qap_eh['pixelRatio'], qap_eh['_preCreateElement'] = ms4gix['createElement'], ms4gix['createElement'] = qap_eh['createElement'], zsiox['createShaderCondition'] = qap_eh['createShaderCondition'], f9yl8['parseXMLFromString'] = qap_eh['parseXMLFromString'], pe_qa['_createInputElement'] = o52mzs['_createInputElement'], qap_eh['EnvConfig']['load'] = mixgs['prototype']['load'], mixgs['prototype']['load'] = cnuj9f['prototype']['load'], qap_eh['isZiYu'] && ab0ph && wx['onMessage'](function (gmxi4s) {
                gmxi4s['isLoad'] && (zt63['ziyuFileData'][gmxi4s['url']] = gmxi4s['data']);
            });
        }, qap_eh['onMkdirCallBack'] = function (msgix4, gudvnj) {
            if (!msgix4) zt63['filesListObj'] = JSON['parse'](gudvnj['data']);
        }, qap_eh['pixelRatio'] = function () {
            if (!qap_eh['EnvConfig']['pixelRatioInt']) try {
                var cvjdun = wx['getSystemInfoSync']();
                return qap_eh['EnvConfig']['pixelRatioInt'] = cvjdun['pixelRatio'], cvjdun = cvjdun, cvjdun['pixelRatio'];
            } catch (ioxsm) {}
            return qap_eh['EnvConfig']['pixelRatioInt'];
        }, qap_eh['createElement'] = function (r_paqh) {
            if (r_paqh == 'canvas') {
                var zt5o6;
                return qap_eh['idx'] == 0x1 ? qap_eh['isZiYu'] ? (zt5o6 = sharedCanvas, zt5o6['style'] = {}) : zt5o6 = window['canvas'] : zt5o6 = window['wx']['createCanvas'](), qap_eh['idx']++, zt5o6;
            } else {
                if (r_paqh == 'textarea' || r_paqh == 'input') return qap_eh['onCreateInput'](r_paqh);else {
                    if (r_paqh == 'div') {
                        var nju9c = qap_eh['_preCreateElement'](r_paqh);
                        return nju9c['contains'] = function (guvi) {
                            return null;
                        }, nju9c['removeChild'] = function (uv4gdi) {}, nju9c;
                    } else return qap_eh['_preCreateElement'](r_paqh);
                }
            }
        }, qap_eh['onCreateInput'] = function (y89fl) {
            var eb0w1k = qap_eh['_preCreateElement'](y89fl);
            return eb0w1k['focus'] = o52mzs['wxinputFocus'], eb0w1k['blur'] = o52mzs['wxinputblur'], eb0w1k['style'] = {}, eb0w1k['value'] = 0x0, eb0w1k['parentElement'] = {}, eb0w1k['placeholder'] = {}, eb0w1k['type'] = {}, eb0w1k['setColor'] = function (o2ms) {}, eb0w1k['setType'] = function (fnc9lj) {}, eb0w1k['setFontFace'] = function (lfcjn) {}, eb0w1k['addEventListener'] = function (tk3w1) {}, eb0w1k['contains'] = function (bk0e) {
                return null;
            }, eb0w1k['removeChild'] = function (b3wk) {}, eb0w1k;
        }, qap_eh['createShaderCondition'] = function (ewk1b0) {
            var k1twb = this,
                j9ncfl = function () {
                var kph0e = ewk1b0;
                return k1twb[ewk1b0['replace']('this.', '')];
            };
            return j9ncfl;
        }, qap_eh['EnvConfig'] = null, qap_eh['window'] = null, qap_eh['_preCreateElement'] = null, qap_eh['_inited'] = ![], qap_eh['wxRequest'] = null, qap_eh['systemInfo'] = null, qap_eh['version'] = '0.0.1', qap_eh['isZiYu'] = ![], qap_eh['isPosMsgYu'] = ![], qap_eh['parseXMLFromString'] = function (vgjudn) {
            var f87l9c, x5zom;
            vgjudn = vgjudn['replace'](/>\s+</g, '><');
            try {
                f87l9c = new window['Parser']['DOMParser']()['parseFromString'](vgjudn, 'text/xml');
            } catch (gndv) {
                throw '需要引入xml解析库文件';
            }
            return f87l9c;
        }, qap_eh['idx'] = 0x1, qap_eh;
    }(),
        clf87 = function () {
        function ph() {}
        k613wt(ph, 'laya.wx.mini.MiniImage');
        var pb0khe = ph['prototype'];
        return pb0khe['_loadImage'] = function (n4guvd) {
            var j9lc = this,
                gdvjn = ![];
            n4guvd['indexOf']('layaNativeDir/') == -0x1 && (gdvjn = !![], n4guvd = ewh0bk['formatURL'](n4guvd));
            if (!zt63['getFileInfo'](n4guvd)) {
                if (n4guvd['indexOf']('http://') != -0x1 || n4guvd['indexOf']('https://') != -0x1) zt63['downImg'](n4guvd, new fl8y79(ph, ph['onDownImgCallBack'], [n4guvd, j9lc]), n4guvd);else ph['onCreateImage'](n4guvd, j9lc, !![]);
            } else ph['onCreateImage'](n4guvd, j9lc, !gdvjn);
        }, ph['onDownImgCallBack'] = function (o256m, xiosz, ugjdnv) {
            if (!ugjdnv) ph['onCreateImage'](o256m, xiosz);else xiosz['onError'](null);
        }, ph['onCreateImage'] = function (ot2z65, kp0hbe, xso4m) {
            xso4m === void 0x0 && (xso4m = ![]);
            var l9f7cj;
            if (!xso4m) {
                var t1623w = zt63['getFileInfo'](ot2z65),
                    xgdiv4 = t1623w['md5'];
                l9f7cj = zt63['getFileNativePath'](xgdiv4);
            } else l9f7cj = ot2z65;
            if (kp0hbe['imgCache'] == null) kp0hbe['imgCache'] = {};
            var l79jc;
            function gui() {
                l79jc['onload'] = null, l79jc['onerror'] = null, delete kp0hbe['imgCache'][ot2z65];
            }
            ;
            var igx = function () {
                gui(), kp0hbe['onLoaded'](l79jc);
            },
                cvnujd = function () {
                gui(), kp0hbe['event']('error', 'Load image failed');
            };
            kp0hbe['_type'] == 'nativeimage' ? (l79jc = new ms4gix['window']['Image'](), l79jc['crossOrigin'] = '', l79jc['onload'] = igx, l79jc['onerror'] = cvnujd, l79jc['src'] = l9f7cj, kp0hbe['imgCache'][ot2z65] = l79jc) : new fl9jnc['create'](l9f7cj, {
                'onload': igx,
                'onerror': cvnujd,
                'onCreate': function (b0peh) {
                    l79jc = b0peh, kp0hbe['imgCache'][ot2z65] = b0peh;
                }
            });
        }, ph;
    }(),
        o52mzs = function () {
        function szx5o() {}
        return k613wt(szx5o, 'laya.wx.mini.MiniInput'), szx5o['_createInputElement'] = function () {
            pe_qa['_initInput'](pe_qa['area'] = ms4gix['createElement']('textarea')), pe_qa['_initInput'](pe_qa['input'] = ms4gix['createElement']('input')), pe_qa['inputContainer'] = ms4gix['createElement']('div'), pe_qa['inputContainer']['style']['position'] = 'absolute', pe_qa['inputContainer']['style']['zIndex'] = 0x186a0, ms4gix['container']['appendChild'](pe_qa['inputContainer']), pe_qa['inputContainer']['setPos'] = function (mz5ox, c7l89f) {
                pe_qa['inputContainer']['style']['left'] = mz5ox + 'px', pe_qa['inputContainer']['style']['top'] = c7l89f + 'px';
            }, xzoim['stage']['on']('resize', null, szx5o['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (t6531) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), n9ufcj['_soundClass'] = undjgv, n9ufcj['_musicClass'] = undjgv, window['_videoClass'] = cdnjuv;
        }, szx5o['_onStageResize'] = function () {
            var xmi4os = xzoim['stage']['_canvasTransform']['identity']();
            xmi4os['scale'](ms4gix['width'] / kb3w01['canvas']['width'] / zsiox['getPixelRatio'](), ms4gix['height'] / kb3w01['canvas']['height'] / zsiox['getPixelRatio']());
        }, szx5o['wxinputFocus'] = function (osmixz) {
            var jucnf9 = pe_qa['inputElement']['target'];
            if (jucnf9 && !jucnf9['editable']) return;
            dx4vi['window']['wx']['offKeyboardConfirm'](), dx4vi['window']['wx']['offKeyboardInput'](), dx4vi['window']['wx']['showKeyboard']({
                'defaultValue': jucnf9['text'],
                'maxLength': jucnf9['maxChars'],
                'multiple': jucnf9['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (ekw0hb) {},
                'fail': function (we1b0) {}
            }), dx4vi['window']['wx']['onKeyboardConfirm'](function (cuf9nj) {
                var t53162 = cuf9nj ? cuf9nj['value'] : '';
                jucnf9['text'] = t53162, jucnf9['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), dx4vi['window']['wx']['onKeyboardInput'](function (o2z) {
                var y$9l78 = o2z ? o2z['value'] : '';
                if (!jucnf9['multiline']) {
                    if (y$9l78['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                jucnf9['text'] = y$9l78, jucnf9['event']('input');
            });
        }, szx5o['inputEnter'] = function () {
            pe_qa['inputElement']['target']['focus'] = ![];
        }, szx5o['wxinputblur'] = function () {
            szx5o['hideKeyboard']();
        }, szx5o['hideKeyboard'] = function () {
            dx4vi['window']['wx']['offKeyboardConfirm'](), dx4vi['window']['wx']['offKeyboardInput'](), dx4vi['window']['wx']['hideKeyboard']({
                'success': function (jfcu9) {
                    console['log']('隐藏键盘');
                },
                'fail': function (bw1) {
                    console['log']('隐藏键盘出错:' + (bw1 ? bw1['errMsg'] : ''));
                }
            });
        }, szx5o;
    }(),
        cnuj9f = function () {
        function l798$() {}
        k613wt(l798$, 'laya.wx.mini.MiniLoader');
        var ui4vg = l798$['prototype'];
        return ui4vg['load'] = function (ozix, i4xo, smxo5, y7l$9, l$y978) {
            smxo5 === void 0x0 && (smxo5 = !![]), l$y978 === void 0x0 && (l$y978 = ![]);
            var bhk0ep = this;
            bhk0ep['_url'] = ozix;
            if (ozix['indexOf']('data:image') === 0x0) bhk0ep['_type'] = i4xo = 'image';else bhk0ep['_type'] = i4xo || (i4xo = bhk0ep['getTypeFromUrl'](ozix));
            bhk0ep['_cache'] = smxo5, bhk0ep['_data'] = null;
            var pa0qe = 'ascii';
            if (ozix['indexOf']('.fnt') != -0x1) pa0qe = 'utf8';else i4xo == 'arraybuffer' && (pa0qe = '');
            ;
            var b13wt = f9yl8['getFileExtension'](ozix);
            if (l798$['_fileTypeArr']['indexOf'](b13wt) != -0x1) dx4vi['EnvConfig']['load']['call'](this, ozix, i4xo, smxo5, y7l$9, l$y978);else {
                if (!zt63['getFileInfo'](ozix)) {
                    if (ozix['indexOf']('layaNativeDir/') != -0x1) {
                        if (dx4vi['isZiYu']) {
                            var imsxzo = zt63['ziyuFileData'][ozix];
                            bhk0ep['onLoaded'](imsxzo);
                            return;
                        } else {
                            cosnole['log']('read read'), zt63['read'](ozix, pa0qe, new fl8y79(l798$, l798$['onReadNativeCallBack'], [pa0qe, ozix, i4xo, smxo5, y7l$9, l$y978, bhk0ep]));
                            return;
                        }
                    }
                    if (ewh0bk['rootPath'] == '') var prh_q = ozix;else prh_q = ozix['split'](ewh0bk['rootPath'])[0x0];
                    ozix['indexOf']('http://') != -0x1 || ozix['indexOf']('https://') != -0x1 ? dx4vi['EnvConfig']['load']['call'](bhk0ep, ozix, i4xo, smxo5, y7l$9, l$y978) : zt63['readFile'](prh_q, pa0qe, new fl8y79(l798$, l798$['onReadNativeCallBack'], [pa0qe, ozix, i4xo, smxo5, y7l$9, l$y978, bhk0ep]), ozix);
                } else dx4vi['EnvConfig']['load']['call'](this, ozix, i4xo, smxo5, y7l$9, l$y978);
            }
        }, ui4vg['resMgrLoad'] = function (f987l, k6t1w3, zso2m, judg, zoimx, vcnd, i4dsg) {
            zso2m === void 0x0 && (zso2m = 0x0), judg === void 0x0 && (judg = ![]), zoimx === void 0x0 && (zoimx = ![]), vcnd === void 0x0 && (vcnd = 0x0), i4dsg === void 0x0 && (i4dsg = 0x3), f987l['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', f987l), dx4vi['EnvConfig']['resMgrLoad'](f987l, (bew0, e0bpkh, dgui4v) => {
                l798$['prototype']['resMgrLoadCallBack'](bew0, e0bpkh, dgui4v, k6t1w3);
            }, zso2m, judg, zoimx, vcnd, i4dsg);
        }, ui4vg['resMgrLoadCallBack'] = function (hp0b, l9fc87, dgn4uv, hk0be) {
            console['log']('buff:::', hp0b, dgn4uv, zt63['fileNativeDir'] + '///' + zt63['fileListName']), hk0be(hp0b, l9fc87, dgn4uv);
        }, ui4vg['clearRes'] = function (sixd4, l89c7f) {
            l89c7f === void 0x0 && (l89c7f = ![]);
            var wbk13 = this;
            wbk13['clearRes'](sixd4, l89c7f);
            var wt13 = zt63['getFileInfo'](sixd4);
            if (wt13 && (sixd4['indexOf']('http://') != -0x1 || sixd4['indexOf']('https://') != -0x1)) {
                var lcf9j7 = wt13['md5'],
                    qpa0e = zt63['getFileNativePath'](lcf9j7);
                zt63['remove'](qpa0e);
            }
        }, l798$['onReadNativeCallBack'] = function (xs4gmi, ewhkb0, ek0bph, igmx4s, oxs, xzsm5, to26z5, ly8$, uvnjg) {
            igmx4s === void 0x0 && (igmx4s = !![]), xzsm5 === void 0x0 && (xzsm5 = ![]), ly8$ === void 0x0 && (ly8$ = 0x0);
            if (!ly8$) {
                var ig4vdx;
                if (ek0bph == 'json' || ek0bph == 'atlas') ig4vdx = dx4vi['getJson'](uvnjg['data']);else ek0bph == 'xml' ? ig4vdx = f9yl8['parseXMLFromString'](uvnjg['data']) : ig4vdx = uvnjg['data'];
                to26z5['onLoaded'](ig4vdx), !dx4vi['isZiYu'] && dx4vi['isPosMsgYu'] && ek0bph != 'arraybuffer' && wx['postMessage']({
                    'url': ewhkb0,
                    'data': ig4vdx,
                    'isLoad': !![]
                });
            } else ly8$ == 0x1 && dx4vi['EnvConfig']['load']['call'](to26z5, ewhkb0, ek0bph, igmx4s, oxs, xzsm5);
        }, hqe_a(l798$, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), l798$;
    }(),
        zt63 = function (xio4) {
        function o6mz2() {
            o6mz2['__super']['call'](this);
            ;
        }
        return k613wt(o6mz2, 'laya.wx.mini.MiniFileMgr', xio4), o6mz2['isLoadFile'] = function (e0qpah) {
            return o6mz2['_fileTypeArr']['indexOf'](e0qpah) != -0x1 ? !![] : ![];
        }, o6mz2['getFileInfo'] = function (si4o) {
            var ke0wb1 = si4o['split']('?')[0x0],
                tb31 = o6mz2['filesListObj'][ke0wb1];
            if (tb31 == null) return null;else return tb31;
            return null;
        }, o6mz2['onFileUpdate'] = function (ph0ab, t62) {
            var img4x = ph0ab['split']('/'),
                f8yl79 = img4x[img4x['length'] - 0x1],
                ig4v = o6mz2['getFileInfo'](t62);
            if (ig4v == null) o6mz2['onSaveFile'](t62, f8yl79);else {
                if (ig4v['readyUrl'] != t62) o6mz2['remove'](f8yl79, t62);
            }
        }, o6mz2['exits'] = function (kbhw0, f9lcj7) {
            var c8fl9 = o6mz2['getFileNativePath'](kbhw0);
            o6mz2['fs']['getFileInfo']({
                'filePath': c8fl9,
                'success': function (ab0peh) {
                    f9lcj7 != null && f9lcj7['runWith']([0x0, ab0peh]);
                },
                'fail': function (vcn) {
                    f9lcj7 != null && f9lcj7['runWith']([0x1, vcn]);
                }
            });
        }, o6mz2['read'] = function (mzo265, xs4i, b0wk13, fncvu) {
            xs4i === void 0x0 && (xs4i = 'ascill'), fncvu === void 0x0 && (fncvu = '');
            var i4osx;
            fncvu != '' ? i4osx = o6mz2['getFileNativePath'](mzo265) : i4osx = mzo265, o6mz2['fs']['readFile']({
                'filePath': i4osx,
                'encoding': xs4i,
                'success': function (j9fc7) {
                    b0wk13 != null && b0wk13['runWith']([0x0, j9fc7]);
                },
                'fail': function (gnduvj) {
                    if (gnduvj && fncvu != '') o6mz2['down'](fncvu, xs4i, b0wk13, fncvu);else b0wk13 != null && b0wk13['runWith']([0x1]);
                }
            });
        }, o6mz2['readNativeFile'] = function (baep0, w3tk1) {
            o6mz2['fs']['readFile']({
                'filePath': baep0,
                'encoding': '',
                'success': function (hkep) {
                    w3tk1 != null && w3tk1['runWith']([0x0]);
                },
                'fail': function (cvuj) {
                    w3tk1 != null && w3tk1['runWith']([0x1]);
                }
            });
        }, o6mz2['down'] = function (w31bk, isxzm, ekph0, k6w13t) {
            isxzm === void 0x0 && (isxzm = 'ascill'), k6w13t === void 0x0 && (k6w13t = '');
            var tz53 = o6mz2['getFileNativePath'](k6w13t),
                vcnuj = o6mz2['wxdown']({
                'url': w31bk,
                'filePath': tz53,
                'success': function (abhep) {
                    if (abhep['statusCode'] === 0xc8) o6mz2['readFile'](abhep['filePath'], isxzm, ekph0, k6w13t);
                },
                'fail': function (eb0pkh) {
                    ekph0 != null && ekph0['runWith']([0x1, eb0pkh]);
                }
            });
            vcnuj['onProgressUpdate'](function (gduvn) {
                ekph0 != null && ekph0['runWith']([0x2, gduvn['progress']]);
            });
        }, o6mz2['readFile'] = function (s4xo, lcfj, ehaq0, gxi4vd) {
            lcfj === void 0x0 && (lcfj = 'ascill'), gxi4vd === void 0x0 && (gxi4vd = ''), o6mz2['fs']['readFile']({
                'filePath': s4xo,
                'encoding': lcfj,
                'success': function (jcu9fn) {
                    if (s4xo['indexOf']('http://') != -0x1 || s4xo['indexOf']('https://') != -0x1) o6mz2['onFileUpdate'](s4xo, gxi4vd);
                    ehaq0 != null && ehaq0['runWith']([0x0, jcu9fn]);
                },
                'fail': function (sdgxi) {
                    if (sdgxi) ehaq0 != null && ehaq0['runWith']([0x1, sdgxi]);
                }
            });
        }, o6mz2['downImg'] = function (g4xdis, nl9fjc, dnvgju) {
            dnvgju === void 0x0 && (dnvgju = '');
            var t635 = o6mz2['wxdown']({
                'url': g4xdis,
                'success': function (bk310) {
                    bk310['statusCode'] === 0xc8 && o6mz2['copyFile'](bk310['tempFilePath'], dnvgju, nl9fjc);
                },
                'fail': function (ehqp_a) {
                    nl9fjc != null && nl9fjc['runWith']([0x1, ehqp_a]);
                }
            });
        }, o6mz2['copyFile'] = function (e_hpaq, unj9c, cfj9nu) {
            var i4sgdx = e_hpaq['split']('/'),
                cjndu = i4sgdx[i4sgdx['length'] - 0x1],
                t32516 = unj9c['split']('?')[0x0],
                zmoix = o6mz2['getFileInfo'](unj9c),
                ig4xs = o6mz2['getFileNativePath'](cjndu);
            o6mz2['fs']['copyFile']({
                'srcPath': e_hpaq,
                'destPath': ig4xs,
                'success': function (be0k) {
                    if (!zmoix) o6mz2['onSaveFile'](unj9c, cjndu), cfj9nu != null && cfj9nu['runWith']([0x0]);else {
                        if (zmoix['readyUrl'] != unj9c) o6mz2['remove'](cjndu, unj9c, cfj9nu);
                    }
                },
                'fail': function (ha_prq) {
                    cfj9nu != null && cfj9nu['runWith']([0x1, ha_prq]);
                }
            });
        }, o6mz2['getFileNativePath'] = function (xosz5m) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + xosz5m;
        }, o6mz2['remove'] = function (he0w, b0hap, ab0p) {
            b0hap === void 0x0 && (b0hap = '');
            var nudjcv = o6mz2['getFileInfo'](b0hap),
                udgj = o6mz2['getFileNativePath'](nudjcv['md5']);
            xzoim['loader']['clearRes'](nudjcv['readyUrl']), o6mz2['fs']['unlink']({
                'filePath': udgj,
                'success': function (xsm5) {
                    if (b0hap != '') o6mz2['onSaveFile'](b0hap, he0w);
                    ab0p != null && ab0p['runWith']([0x0]);
                },
                'fail': function (vg4ixd) {}
            });
        }, o6mz2['onSaveFile'] = function (gvxd4i, bt31w) {
            var gjuvd = gvxd4i['split']('?')[0x0];
            o6mz2['filesListObj'][gjuvd] = {
                'md5': bt31w,
                'readyUrl': gvxd4i
            }, o6mz2['fs']['writeFile']({
                'filePath': o6mz2['fileNativeDir'] + '/' + o6mz2['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](o6mz2['filesListObj']),
                'success': function (d4gvun) {
                    console['log']('写入测试测试成功：', d4gvun);
                },
                'fail': function (xsgi4d) {
                    console['log']('写入测试测试失败：', xsgi4d);
                }
            });
        }, o6mz2['existDir'] = function (o5zm6, tzo25) {
            o6mz2['fs']['mkdir']({
                'dirPath': o5zm6,
                'success': function (l79jf) {
                    tzo25 != null && tzo25['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (bk31t) {
                    if (bk31t['errMsg']['indexOf']('file already exists') != -0x1) o6mz2['readSync'](o6mz2['fileListName'], 'utf8', tzo25);else tzo25 != null && tzo25['runWith']([0x1, bk31t]);
                }
            });
        }, o6mz2['readSync'] = function (wkt13, isgxm4, nj9ufc, vfnuc) {
            isgxm4 === void 0x0 && (isgxm4 = 'ascill'), vfnuc === void 0x0 && (vfnuc = '');
            var o26m5z = o6mz2['getFileNativePath'](wkt13),
                cduv;
            try {
                cduv = o6mz2['fs']['readFileSync'](o26m5z), nj9ufc != null && nj9ufc['runWith']([0x0, { 'data': cduv }]);
            } catch (oxz5) {
                nj9ufc != null && nj9ufc['runWith']([0x1]);
            }
        }, o6mz2['readCache'] = function () {}, o6mz2['writeCache'] = function (t3k) {
            var smgx4 = readyUrl['split']('?')[0x0];
            o6mz2['filesListObj'][smgx4] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, o6mz2['fs']['writeFile']({
                'filePath': o6mz2['fileNativeDir'] + '/' + o6mz2['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](o6mz2['filesListObj']),
                'success': function (hek0p) {},
                'fail': function (fnj9cu) {}
            });
        }, o6mz2['setNativeFileDir'] = function (m4xos) {
            o6mz2['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + m4xos;
        }, o6mz2['filesListObj'] = {}, o6mz2['fileNativeDir'] = null, o6mz2['fileListName'] = 'layaairfiles.txt', o6mz2['ziyuFileData'] = {}, hqe_a(o6mz2, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), o6mz2;
    }(ujfv),
        undjgv = function (wb130) {
        function lf897c() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], lf897c['__super']['call'](this), this['_sound'] = lf897c['_createSound'](), this['_chanell'] = new nudvgj(this['_sound']);
        }
        k613wt(lf897c, 'laya.wx.mini.MiniSound', wb130);
        var ms4gi = lf897c['prototype'];
        return ms4gi['load'] = function (xm4soi) {
            var k31bw = this;
            xm4soi = ewh0bk['formatURL'](xm4soi), this['url'] = xm4soi;
            if (lf897c['_audioCache'][xm4soi]) {
                this['event']('complete');
                return;
            }
            function nuj9cf() {
                if (lf897c['_null'] != undefined) k31bw['_sound']['onCanplay'](lf897c['_null']), k31bw['_sound']['onError'](lf897c['_null']);else try {
                    k31bw['_sound']['onCanplay'](null), k31bw['_sound']['onError'](null), lf897c['_null'] = null;
                } catch (yl79f8) {
                    console['warn']('[wxmini] _clearSound:' + yl79f8), k31bw['_sound']['onCanplay'](simg4x), k31bw['_sound']['onError'](simg4x), lf897c['_null'] = simg4x;
                }
            }
            function flc879() {
                c7ljf['loaded'] = !![], c7ljf['event']('complete'), lf897c['_audioCache'][c7ljf['url']] = c7ljf;
            }
            function smixoz($97y8) {
                console['error']('errCode=' + $97y8['errCode'] + '  errMsg=' + $97y8['errMsg']), c7ljf['event']('error');
            }
            function simg4x() {}
            this['_sound']['onCanplay'](flc879), this['_sound']['onError'](smixoz), this['_sound']['src'] = xm4soi;
            var c7ljf = this;
        }, ms4gi['play'] = function (phke0, fujcn9) {
            phke0 === void 0x0 && (phke0 = 0x0), fujcn9 === void 0x0 && (fujcn9 = 0x0);
            var bw0kh, fn9lc;
            if (this['url'] == n9ufcj['_tMusic']) {
                if (!lf897c['_musicAudio']) lf897c['_musicAudio'] = this['_sound'];
                bw0kh = lf897c['_musicAudio'], fn9lc = this['_chanell'];
            } else bw0kh = this['_sound'], fn9lc = this['_chanell'];
            return bw0kh['src'] = this['url'], bw0kh['startTime'] = 0x0, fn9lc['isStopped'] && (fn9lc['url'] = this['url'], fn9lc['loops'] = fujcn9, fn9lc['startTime'] = phke0, fn9lc['play'](), n9ufcj['addChannel'](fn9lc)), fn9lc;
        }, ms4gi['dispose'] = function () {
            var jucfn = lf897c['_audioCache'][this['url']];
            jucfn && (jucfn['src'] = '', delete lf897c['_audioCache'][this['url']]);
        }, wb1t(0x0, ms4gi, 'duration', function () {
            return this['_sound']['duration'];
        }), lf897c['_createSound'] = function () {
            lf897c['_id']++;
            var e_qhp = dx4vi['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return e_qhp;
        }, lf897c['_musicAudio'] = null, lf897c['_id'] = 0x0, lf897c['_audioCache'] = {}, lf897c['_null'] = undefined, lf897c;
    }(ujfv),
        nudvgj = function (gdnj) {
        function a0hbp(hq0) {
            this['_audio'] = null, this['_onEnd'] = null, a0hbp['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = hq0, this['_onEnd'] = f9yl8['bind'](this['__onEnd'], this), hq0['onEnded'](this['_onEnd']);
        }
        k613wt(a0hbp, 'laya.wx.mini.MiniSoundChannel', gdnj);
        var omxs5 = a0hbp['prototype'];
        return omxs5['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (xzoim['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, omxs5['__onNull'] = function () {}, omxs5['play'] = function () {
            this['isStopped'] = ![], n9ufcj['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, omxs5['stop'] = function () {
            this['isStopped'] = !![], n9ufcj['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, omxs5['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, omxs5['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], n9ufcj['addChannel'](this), this['_audio']['play']();
        }, wb1t(0x0, omxs5, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), wb1t(0x0, omxs5, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), wb1t(0x0, omxs5, 'volume', function () {
            return 0x1;
        }, function (nujc9) {}), a0hbp['_null'] = undefined, a0hbp;
    }(o6m),
        cdnjuv = function () {
        function w30k() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = dx4vi['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        k613wt(w30k, 'laya.wx.mini.MiniVideo');
        var mz5os2 = w30k['prototype'];
        return mz5os2['on'] = function (ehb0kw, w3tkb1, ba0h) {
            if (ehb0kw == 'loadedmetadata') this['onPlayFunc'] = ba0h['bind'](w3tkb1), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else ehb0kw == 'ended' && (this['onEndedFunC'] = ba0h['bind'](w3tkb1), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, mz5os2['onTimeUpdateFunc'] = function (d4uvgn) {
            this['position'] = d4uvgn['position'], this['_duration'] = d4uvgn['duration'];
        }, mz5os2['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, mz5os2['onended'] = function (cnjf, ah_eqp) {
            this['onEndedFunC'] = ah_eqp['bind'](cnjf), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, mz5os2['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, mz5os2['off'] = function (ehw, ufn9c, ew01bk) {
            if (ehw == 'loadedmetadata') this['onPlayFunc'] = ew01bk['bind'](ufn9c), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else ehw == 'ended' && (this['onEndedFunC'] = ew01bk['bind'](ufn9c), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, mz5os2['load'] = function (nlcj9) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = nlcj9;
        }, mz5os2['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, mz5os2['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, mz5os2['size'] = function (fjv, omsxi4) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = fjv, this['videoElement']['height'] = omsxi4;
        }, mz5os2['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, mz5os2['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, wb1t(0x0, mz5os2, 'duration', function () {
            return this['_duration'];
        }), wb1t(0x0, mz5os2, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (t16325) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = t16325;
        }), wb1t(0x0, mz5os2, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), wb1t(0x0, mz5os2, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), wb1t(0x0, mz5os2, 'ended', function () {
            return this['videoend'];
        }), wb1t(0x0, mz5os2, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (jcudvn) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = jcudvn;
        }), wb1t(0x0, mz5os2, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (bw0ek1) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = bw0ek1;
        }), wb1t(0x0, mz5os2, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (ahbep0) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = ahbep0;
        }), wb1t(0x0, mz5os2, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), wb1t(0x0, mz5os2, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (o562m) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = o562m;
        }), wb1t(0x0, mz5os2, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (dugi4) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = dugi4;
        }), wb1t(0x0, mz5os2, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), wb1t(0x0, mz5os2, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (e0hbwk) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = e0hbwk;
        }), wb1t(0x0, mz5os2, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (bhkw) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = bhkw;
        }), wb1t(0x0, mz5os2, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (jf79) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = jf79;
        }), w30k;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var xio4ms in Laya) {
        var o5s2z = Laya[xio4ms];
        o5s2z && o5s2z['__isclass'] && (exports[xio4ms] = o5s2z);
    }
});