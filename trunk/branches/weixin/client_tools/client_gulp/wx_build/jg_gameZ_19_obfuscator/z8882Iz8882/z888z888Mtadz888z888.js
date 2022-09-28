var u = wx.$x;
(function (window, document, dow1u0) {
    var r_sem = dow1u0['un'],
        q_$re = dow1u0['uns'],
        xbtin = dow1u0['static'],
        k4of5 = dow1u0['class'],
        tix2yh = dow1u0['getset'],
        wp910g = dow1u0['__newvec'],
        bint = laya['utils']['Browser'],
        tznbms = laya['events']['Event'],
        dfa45 = laya['events']['EventDispatcher'],
        o0u1d = laya['resource']['HTMLImage'],
        yih = laya['utils']['Handler'],
        sq_$r = laya['display']['Input'],
        ibxyht = laya['net']['Loader'],
        lka6v7 = laya['maths']['Matrix'],
        douf1 = laya['renders']['Render'],
        ynb = laya['utils']['RunDriver'],
        fv4k = laya['media']['Sound'],
        icy2x = laya['media']['SoundChannel'],
        uwo4d = laya['media']['SoundManager'],
        nztb = laya['display']['Stage'],
        u0o1 = laya['net']['URL'],
        $sr_m = laya['utils']['Utils'],
        dou4f1 = function () {
        function f4uo5d() {}
        return k4of5(f4uo5d, 'laya.wx.mini.MiniAdpter'), f4uo5d['getJson'] = function (v54) {
            return JSON['parse'](v54);
        }, f4uo5d['init'] = function (xtzm, smre$) {
            xtzm === void 0x0 && (xtzm = ![]), smre$ === void 0x0 && (smre$ = ![]);
            if (f4uo5d['_inited']) return;
            f4uo5d['window'] = window;
            if (f4uo5d['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            f4uo5d['_inited'] = !![], f4uo5d['isZiYu'] = smre$, f4uo5d['isPosMsgYu'] = xtzm, f4uo5d['EnvConfig'] = {}, !f4uo5d['isZiYu'] && ($_mrse['setNativeFileDir']('/layaairGame'), $_mrse['existDir']($_mrse['fileNativeDir'], yih['create'](f4uo5d, f4uo5d['onMkdirCallBack']))), f4uo5d['window']['focus'] = function () {}, dow1u0['getUrlPath'] = function () {}, f4uo5d['window']['logtime'] = function (ud4fo1) {}, f4uo5d['window']['alertTimeLog'] = function (btxzi) {}, f4uo5d['window']['resetShareInfo'] = function () {}, f4uo5d['window']['CanvasRenderingContext2D'] = function () {}, f4uo5d['window']['CanvasRenderingContext2D']['prototype'] = f4uo5d['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], f4uo5d['window']['document']['body']['appendChild'] = function () {}, f4uo5d['EnvConfig']['pixelRatioInt'] = 0x0, ynb['getPixelRatio'] = f4uo5d['pixelRatio'], f4uo5d['_preCreateElement'] = bint['createElement'], bint['createElement'] = f4uo5d['createElement'], ynb['createShaderCondition'] = f4uo5d['createShaderCondition'], $sr_m['parseXMLFromString'] = f4uo5d['parseXMLFromString'], sq_$r['_createInputElement'] = fvk5a['_createInputElement'], f4uo5d['EnvConfig']['load'] = ibxyht['prototype']['load'], ibxyht['prototype']['load'] = e$s['prototype']['load'], f4uo5d['isZiYu'] && xtzm && wx['onMessage'](function ($rzm_) {
                $rzm_['isLoad'] && ($_mrse['ziyuFileData'][$rzm_['url']] = $rzm_['data']);
            });
        }, f4uo5d['onMkdirCallBack'] = function (elq$83, itbxyh) {
            if (!elq$83) $_mrse['filesListObj'] = JSON['parse'](itbxyh['data']);
        }, f4uo5d['pixelRatio'] = function () {
            if (!f4uo5d['EnvConfig']['pixelRatioInt']) try {
                var eq$rs = wx['getSystemInfoSync']();
                return f4uo5d['EnvConfig']['pixelRatioInt'] = eq$rs['pixelRatio'], eq$rs = eq$rs, eq$rs['pixelRatio'];
            } catch (u1odf4) {}
            return f4uo5d['EnvConfig']['pixelRatioInt'];
        }, f4uo5d['createElement'] = function (l8v73) {
            if (l8v73 == 'canvas') {
                var rq_$;
                return f4uo5d['idx'] == 0x1 ? f4uo5d['isZiYu'] ? (rq_$ = sharedCanvas, rq_$['style'] = {}) : rq_$ = window['canvas'] : rq_$ = window['wx']['createCanvas'](), f4uo5d['idx']++, rq_$;
            } else {
                if (l8v73 == 'textarea' || l8v73 == 'input') return f4uo5d['onCreateInput'](l8v73);else {
                    if (l8v73 == 'div') {
                        var l8a = f4uo5d['_preCreateElement'](l8v73);
                        return l8a['contains'] = function (xmb) {
                            return null;
                        }, l8a['removeChild'] = function (a5k7v6) {}, l8a;
                    } else return f4uo5d['_preCreateElement'](l8v73);
                }
            }
        }, f4uo5d['onCreateInput'] = function (y2hij) {
            var x2it = f4uo5d['_preCreateElement'](y2hij);
            return x2it['focus'] = fvk5a['wxinputFocus'], x2it['blur'] = fvk5a['wxinputblur'], x2it['style'] = {}, x2it['value'] = 0x0, x2it['parentElement'] = {}, x2it['placeholder'] = {}, x2it['type'] = {}, x2it['setColor'] = function (v5ka) {}, x2it['setType'] = function (u0wdo1) {}, x2it['setFontFace'] = function (xbhti) {}, x2it['addEventListener'] = function (v6a7k) {}, x2it['contains'] = function (f4ok5d) {
                return null;
            }, x2it['removeChild'] = function (uwo0p) {}, x2it;
        }, f4uo5d['createShaderCondition'] = function (jhci) {
            var ud0w = this,
                tixhyb = function () {
                var uf4o5 = jhci;
                return ud0w[jhci['replace']('this.', '')];
            };
            return tixhyb;
        }, f4uo5d['EnvConfig'] = null, f4uo5d['window'] = null, f4uo5d['_preCreateElement'] = null, f4uo5d['_inited'] = ![], f4uo5d['wxRequest'] = null, f4uo5d['systemInfo'] = null, f4uo5d['version'] = '0.0.1', f4uo5d['isZiYu'] = ![], f4uo5d['isPosMsgYu'] = ![], f4uo5d['parseXMLFromString'] = function (hx2yi) {
            var q7l3, iytnbx;
            hx2yi = hx2yi['replace'](/>\s+</g, '><');
            try {
                q7l3 = new window['Parser']['DOMParser']()['parseFromString'](hx2yi, 'text/xml');
            } catch (nxzib) {
                throw '需要引入xml解析库文件';
            }
            return q7l3;
        }, f4uo5d['idx'] = 0x1, f4uo5d;
    }(),
        _e$qsr = function () {
        function odw14u() {}
        k4of5(odw14u, 'laya.wx.mini.MiniImage');
        var iztxnb = odw14u['prototype'];
        return iztxnb['_loadImage'] = function (u0p1w) {
            var w1dou4 = this,
                xtyh2 = ![];
            u0p1w['indexOf']('layaNativeDir/') == -0x1 && (xtyh2 = !![], u0p1w = u0o1['formatURL'](u0p1w));
            if (!$_mrse['getFileInfo'](u0p1w)) {
                if (u0p1w['indexOf']('http://') != -0x1 || u0p1w['indexOf']('https://') != -0x1) $_mrse['downImg'](u0p1w, new yih(odw14u, odw14u['onDownImgCallBack'], [u0p1w, w1dou4]), u0p1w);else odw14u['onCreateImage'](u0p1w, w1dou4, !![]);
            } else odw14u['onCreateImage'](u0p1w, w1dou4, !xtyh2);
        }, odw14u['onDownImgCallBack'] = function (w0op, f5kva, av67lk) {
            if (!av67lk) odw14u['onCreateImage'](w0op, f5kva);else f5kva['onError'](null);
        }, odw14u['onCreateImage'] = function (fkdo4, uf4o1d, hxyit2) {
            hxyit2 === void 0x0 && (hxyit2 = ![]);
            var bnizxt;
            if (!hxyit2) {
                var _res = $_mrse['getFileInfo'](fkdo4),
                    _srmz = _res['md5'];
                bnizxt = $_mrse['getFileNativePath'](_srmz);
            } else bnizxt = fkdo4;
            if (uf4o1d['imgCache'] == null) uf4o1d['imgCache'] = {};
            var f1o;
            function l786q() {
                f1o['onload'] = null, f1o['onerror'] = null, delete uf4o1d['imgCache'][fkdo4];
            }
            ;
            var dufo41 = function () {
                l786q(), uf4o1d['onLoaded'](f1o);
            },
                l8v6a7 = function () {
                l786q(), uf4o1d['event']('error', 'Load image failed');
            };
            uf4o1d['_type'] == 'nativeimage' ? (f1o = new bint['window']['Image'](), f1o['crossOrigin'] = '', f1o['onload'] = dufo41, f1o['onerror'] = l8v6a7, f1o['src'] = bnizxt, uf4o1d['imgCache'][fkdo4] = f1o) : new o0u1d['create'](bnizxt, {
                'onload': dufo41,
                'onerror': l8v6a7,
                'onCreate': function (p10uw) {
                    f1o = p10uw, uf4o1d['imgCache'][fkdo4] = p10uw;
                }
            });
        }, odw14u;
    }(),
        fvk5a = function () {
        function yhbtx() {}
        return k4of5(yhbtx, 'laya.wx.mini.MiniInput'), yhbtx['_createInputElement'] = function () {
            sq_$r['_initInput'](sq_$r['area'] = bint['createElement']('textarea')), sq_$r['_initInput'](sq_$r['input'] = bint['createElement']('input')), sq_$r['inputContainer'] = bint['createElement']('div'), sq_$r['inputContainer']['style']['position'] = 'absolute', sq_$r['inputContainer']['style']['zIndex'] = 0x186a0, bint['container']['appendChild'](sq_$r['inputContainer']), sq_$r['inputContainer']['setPos'] = function (bmzntx, yhxtbi) {
                sq_$r['inputContainer']['style']['left'] = bmzntx + 'px', sq_$r['inputContainer']['style']['top'] = yhxtbi + 'px';
            }, dow1u0['stage']['on']('resize', null, yhbtx['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (gp09w) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), uwo4d['_soundClass'] = l6vk, uwo4d['_musicClass'] = l6vk, window['_videoClass'] = zbin;
        }, yhbtx['_onStageResize'] = function () {
            var zrbs = dow1u0['stage']['_canvasTransform']['identity']();
            zrbs['scale'](bint['width'] / douf1['canvas']['width'] / ynb['getPixelRatio'](), bint['height'] / douf1['canvas']['height'] / ynb['getPixelRatio']());
        }, yhbtx['wxinputFocus'] = function (xtyhi) {
            var j2cyh = sq_$r['inputElement']['target'];
            if (j2cyh && !j2cyh['editable']) return;
            dou4f1['window']['wx']['offKeyboardConfirm'](), dou4f1['window']['wx']['offKeyboardInput'](), dou4f1['window']['wx']['showKeyboard']({
                'defaultValue': j2cyh['text'],
                'maxLength': j2cyh['maxChars'],
                'multiple': j2cyh['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (owd1) {},
                'fail': function (u1fo) {}
            }), dou4f1['window']['wx']['onKeyboardConfirm'](function (nz_rsm) {
                var l8q3e = nz_rsm ? nz_rsm['value'] : '';
                j2cyh['text'] = l8q3e, j2cyh['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), dou4f1['window']['wx']['onKeyboardInput'](function (xitbnz) {
                var $qe_rs = xitbnz ? xitbnz['value'] : '';
                if (!j2cyh['multiline']) {
                    if ($qe_rs['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                j2cyh['text'] = $qe_rs, j2cyh['event']('input');
            });
        }, yhbtx['inputEnter'] = function () {
            sq_$r['inputElement']['target']['focus'] = ![];
        }, yhbtx['wxinputblur'] = function () {
            yhbtx['hideKeyboard']();
        }, yhbtx['hideKeyboard'] = function () {
            dou4f1['window']['wx']['offKeyboardConfirm'](), dou4f1['window']['wx']['offKeyboardInput'](), dou4f1['window']['wx']['hideKeyboard']({
                'success': function (_$szrm) {
                    console['log']('隐藏键盘');
                },
                'fail': function (ic) {
                    console['log']('隐藏键盘出错:' + (ic ? ic['errMsg'] : ''));
                }
            });
        }, yhbtx;
    }(),
        e$s = function () {
        function a8l6v7() {}
        k4of5(a8l6v7, 'laya.wx.mini.MiniLoader');
        var re3_$ = a8l6v7['prototype'];
        return re3_$['load'] = function (l3eq68, nibtxz, favk, ijy2ch, dk54fa) {
            favk === void 0x0 && (favk = !![]), dk54fa === void 0x0 && (dk54fa = ![]);
            var mn_srz = this;
            mn_srz['_url'] = l3eq68;
            if (l3eq68['indexOf']('data:image') === 0x0) mn_srz['_type'] = nibtxz = 'image';else mn_srz['_type'] = nibtxz || (nibtxz = mn_srz['getTypeFromUrl'](l3eq68));
            mn_srz['_cache'] = favk, mn_srz['_data'] = null;
            var hbyitx = 'ascii';
            if (l3eq68['indexOf']('.fnt') != -0x1) hbyitx = 'utf8';else nibtxz == 'arraybuffer' && (hbyitx = '');
            ;
            var va86l7 = $sr_m['getFileExtension'](l3eq68);
            if (a8l6v7['_fileTypeArr']['indexOf'](va86l7) != -0x1) dou4f1['EnvConfig']['load']['call'](this, l3eq68, nibtxz, favk, ijy2ch, dk54fa);else {
                if (!$_mrse['getFileInfo'](l3eq68)) {
                    if (l3eq68['indexOf']('layaNativeDir/') != -0x1) {
                        if (dou4f1['isZiYu']) {
                            var _$zsmr = $_mrse['ziyuFileData'][l3eq68];
                            mn_srz['onLoaded'](_$zsmr);
                            return;
                        } else {
                            cosnole['log']('read read'), $_mrse['read'](l3eq68, hbyitx, new yih(a8l6v7, a8l6v7['onReadNativeCallBack'], [hbyitx, l3eq68, nibtxz, favk, ijy2ch, dk54fa, mn_srz]));
                            return;
                        }
                    }
                    if (u0o1['rootPath'] == '') var x2yhi = l3eq68;else x2yhi = l3eq68['split'](u0o1['rootPath'])[0x0];
                    l3eq68['indexOf']('http://') != -0x1 || l3eq68['indexOf']('https://') != -0x1 ? dou4f1['EnvConfig']['load']['call'](mn_srz, l3eq68, nibtxz, favk, ijy2ch, dk54fa) : $_mrse['readFile'](x2yhi, hbyitx, new yih(a8l6v7, a8l6v7['onReadNativeCallBack'], [hbyitx, l3eq68, nibtxz, favk, ijy2ch, dk54fa, mn_srz]), l3eq68);
                } else dou4f1['EnvConfig']['load']['call'](this, l3eq68, nibtxz, favk, ijy2ch, dk54fa);
            }
        }, re3_$['resMgrLoad'] = function (h2ycji, ow1d, f5vk7, jy2hic, q$er_, adkf, _e$smr) {
            f5vk7 === void 0x0 && (f5vk7 = 0x0), jy2hic === void 0x0 && (jy2hic = ![]), q$er_ === void 0x0 && (q$er_ = ![]), adkf === void 0x0 && (adkf = 0x0), _e$smr === void 0x0 && (_e$smr = 0x3), h2ycji['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', h2ycji), dou4f1['EnvConfig']['resMgrLoad'](h2ycji, (duw0, _$mser, e8$q_) => {
                a8l6v7['prototype']['resMgrLoadCallBack'](duw0, _$mser, e8$q_, ow1d);
            }, f5vk7, jy2hic, q$er_, adkf, _e$smr);
        }, re3_$['resMgrLoadCallBack'] = function (txbnm, d1owu4, v7a5k6, e_sq$) {
            console['log']('buff:::', txbnm, v7a5k6, $_mrse['fileNativeDir'] + '///' + $_mrse['fileListName']), e_sq$(txbnm, d1owu4, v7a5k6);
        }, re3_$['clearRes'] = function (bnztix, d1w4o) {
            d1w4o === void 0x0 && (d1w4o = ![]);
            var i2cyxh = this;
            i2cyxh['clearRes'](bnztix, d1w4o);
            var al6k7v = $_mrse['getFileInfo'](bnztix);
            if (al6k7v && (bnztix['indexOf']('http://') != -0x1 || bnztix['indexOf']('https://') != -0x1)) {
                var rme$s = al6k7v['md5'],
                    r_$esq = $_mrse['getFileNativePath'](rme$s);
                $_mrse['remove'](r_$esq);
            }
        }, a8l6v7['onReadNativeCallBack'] = function (nstbm, bxiznt, oduf5, ud1o4, ql378, zmbtn, a5f4k, bthixy, _m$sz) {
            ud1o4 === void 0x0 && (ud1o4 = !![]), zmbtn === void 0x0 && (zmbtn = ![]), bthixy === void 0x0 && (bthixy = 0x0);
            if (!bthixy) {
                var f4odk;
                if (oduf5 == 'json' || oduf5 == 'atlas') f4odk = dou4f1['getJson'](_m$sz['data']);else oduf5 == 'xml' ? f4odk = $sr_m['parseXMLFromString'](_m$sz['data']) : f4odk = _m$sz['data'];
                a5f4k['onLoaded'](f4odk), !dou4f1['isZiYu'] && dou4f1['isPosMsgYu'] && oduf5 != 'arraybuffer' && wx['postMessage']({
                    'url': bxiznt,
                    'data': f4odk,
                    'isLoad': !![]
                });
            } else bthixy == 0x1 && dou4f1['EnvConfig']['load']['call'](a5f4k, bxiznt, oduf5, ud1o4, ql378, zmbtn);
        }, xbtin(a8l6v7, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), a8l6v7;
    }(),
        $_mrse = function (o5uf4) {
        function p10ow() {
            p10ow['__super']['call'](this);
            ;
        }
        return k4of5(p10ow, 'laya.wx.mini.MiniFileMgr', o5uf4), p10ow['isLoadFile'] = function (fd5uo4) {
            return p10ow['_fileTypeArr']['indexOf'](fd5uo4) != -0x1 ? !![] : ![];
        }, p10ow['getFileInfo'] = function (rz_n) {
            var _smznr = rz_n['split']('?')[0x0],
                akl6v7 = p10ow['filesListObj'][_smznr];
            if (akl6v7 == null) return null;else return akl6v7;
            return null;
        }, p10ow['onFileUpdate'] = function (bnzrsm, xhbyi) {
            var v6lka = bnzrsm['split']('/'),
                sbztn = v6lka[v6lka['length'] - 0x1],
                le3 = p10ow['getFileInfo'](xhbyi);
            if (le3 == null) p10ow['onSaveFile'](xhbyi, sbztn);else {
                if (le3['readyUrl'] != xhbyi) p10ow['remove'](sbztn, xhbyi);
            }
        }, p10ow['exits'] = function (_eq$sr, nxitb) {
            var xzmtbn = p10ow['getFileNativePath'](_eq$sr);
            p10ow['fs']['getFileInfo']({
                'filePath': xzmtbn,
                'success': function (fo4u5) {
                    nxitb != null && nxitb['runWith']([0x0, fo4u5]);
                },
                'fail': function (_rsnz) {
                    nxitb != null && nxitb['runWith']([0x1, _rsnz]);
                }
            });
        }, p10ow['read'] = function (lv76, e$_rms, udo54f, r_nzs) {
            e$_rms === void 0x0 && (e$_rms = 'ascill'), r_nzs === void 0x0 && (r_nzs = '');
            var o4d1f;
            r_nzs != '' ? o4d1f = p10ow['getFileNativePath'](lv76) : o4d1f = lv76, p10ow['fs']['readFile']({
                'filePath': o4d1f,
                'encoding': e$_rms,
                'success': function ($_mzrs) {
                    udo54f != null && udo54f['runWith']([0x0, $_mzrs]);
                },
                'fail': function (v683l7) {
                    if (v683l7 && r_nzs != '') p10ow['down'](r_nzs, e$_rms, udo54f, r_nzs);else udo54f != null && udo54f['runWith']([0x1]);
                }
            });
        }, p10ow['readNativeFile'] = function (uowd, uw1o0d) {
            p10ow['fs']['readFile']({
                'filePath': uowd,
                'encoding': '',
                'success': function (l$3e) {
                    uw1o0d != null && uw1o0d['runWith']([0x0]);
                },
                'fail': function (da54fk) {
                    uw1o0d != null && uw1o0d['runWith']([0x1]);
                }
            });
        }, p10ow['down'] = function (bnszmr, sm_zr, smrz$_, o4df) {
            sm_zr === void 0x0 && (sm_zr = 'ascill'), o4df === void 0x0 && (o4df = '');
            var bntmz = p10ow['getFileNativePath'](o4df),
                xbznit = p10ow['wxdown']({
                'url': bnszmr,
                'filePath': bntmz,
                'success': function (y2jhi) {
                    if (y2jhi['statusCode'] === 0xc8) p10ow['readFile'](y2jhi['filePath'], sm_zr, smrz$_, o4df);
                },
                'fail': function (kfad4) {
                    smrz$_ != null && smrz$_['runWith']([0x1, kfad4]);
                }
            });
            xbznit['onProgressUpdate'](function (xythi) {
                smrz$_ != null && smrz$_['runWith']([0x2, xythi['progress']]);
            });
        }, p10ow['readFile'] = function (mb, rbmnz, s$r_me, av756) {
            rbmnz === void 0x0 && (rbmnz = 'ascill'), av756 === void 0x0 && (av756 = ''), p10ow['fs']['readFile']({
                'filePath': mb,
                'encoding': rbmnz,
                'success': function (w91up) {
                    if (mb['indexOf']('http://') != -0x1 || mb['indexOf']('https://') != -0x1) p10ow['onFileUpdate'](mb, av756);
                    s$r_me != null && s$r_me['runWith']([0x0, w91up]);
                },
                'fail': function (la8v7) {
                    if (la8v7) s$r_me != null && s$r_me['runWith']([0x1, la8v7]);
                }
            });
        }, p10ow['downImg'] = function (tnbxmz, d45kf, xzibnt) {
            xzibnt === void 0x0 && (xzibnt = '');
            var hcy2j = p10ow['wxdown']({
                'url': tnbxmz,
                'success': function (p019wu) {
                    p019wu['statusCode'] === 0xc8 && p10ow['copyFile'](p019wu['tempFilePath'], xzibnt, d45kf);
                },
                'fail': function (yhcx) {
                    d45kf != null && d45kf['runWith']([0x1, yhcx]);
                }
            });
        }, p10ow['copyFile'] = function (brmszn, k6lav, xib) {
            var nmxbz = brmszn['split']('/'),
                r$seq_ = nmxbz[nmxbz['length'] - 0x1],
                ak675 = k6lav['split']('?')[0x0],
                kafd4 = p10ow['getFileInfo'](k6lav),
                t2hixy = p10ow['getFileNativePath'](r$seq_);
            p10ow['fs']['copyFile']({
                'srcPath': brmszn,
                'destPath': t2hixy,
                'success': function (hx2yc) {
                    if (!kafd4) p10ow['onSaveFile'](k6lav, r$seq_), xib != null && xib['runWith']([0x0]);else {
                        if (kafd4['readyUrl'] != k6lav) p10ow['remove'](r$seq_, k6lav, xib);
                    }
                },
                'fail': function (ztsn) {
                    xib != null && xib['runWith']([0x1, ztsn]);
                }
            });
        }, p10ow['getFileNativePath'] = function (xyntib) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + xyntib;
        }, p10ow['remove'] = function (cijyh2, l6783v, w0od) {
            l6783v === void 0x0 && (l6783v = '');
            var f5do4k = p10ow['getFileInfo'](l6783v),
                znmr_ = p10ow['getFileNativePath'](f5do4k['md5']);
            dow1u0['loader']['clearRes'](f5do4k['readyUrl']), p10ow['fs']['unlink']({
                'filePath': znmr_,
                'success': function (xnyib) {
                    if (l6783v != '') p10ow['onSaveFile'](l6783v, cijyh2);
                    w0od != null && w0od['runWith']([0x0]);
                },
                'fail': function (zrsmbn) {}
            });
        }, p10ow['onSaveFile'] = function (rz$_m, uo41fd) {
            var k5a67 = rz$_m['split']('?')[0x0];
            p10ow['filesListObj'][k5a67] = {
                'md5': uo41fd,
                'readyUrl': rz$_m
            }, p10ow['fs']['writeFile']({
                'filePath': p10ow['fileNativeDir'] + '/' + p10ow['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](p10ow['filesListObj']),
                'success': function (e_3$q) {
                    console['log']('写入测试测试成功：', e_3$q);
                },
                'fail': function (szrbm) {
                    console['log']('写入测试测试失败：', szrbm);
                }
            });
        }, p10ow['existDir'] = function (intbx, dufo1) {
            p10ow['fs']['mkdir']({
                'dirPath': intbx,
                'success': function (bnmr) {
                    dufo1 != null && dufo1['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (inytx) {
                    if (inytx['errMsg']['indexOf']('file already exists') != -0x1) p10ow['readSync'](p10ow['fileListName'], 'utf8', dufo1);else dufo1 != null && dufo1['runWith']([0x1, inytx]);
                }
            });
        }, p10ow['readSync'] = function (uwdo01, a5vkf, _$esq, ynibx) {
            a5vkf === void 0x0 && (a5vkf = 'ascill'), ynibx === void 0x0 && (ynibx = '');
            var s_zrmn = p10ow['getFileNativePath'](uwdo01),
                nmzbst;
            try {
                nmzbst = p10ow['fs']['readFileSync'](s_zrmn), _$esq != null && _$esq['runWith']([0x0, { 'data': nmzbst }]);
            } catch (biytxh) {
                _$esq != null && _$esq['runWith']([0x1]);
            }
        }, p10ow['readCache'] = function () {}, p10ow['writeCache'] = function (byith) {
            var esq$r_ = readyUrl['split']('?')[0x0];
            p10ow['filesListObj'][esq$r_] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, p10ow['fs']['writeFile']({
                'filePath': p10ow['fileNativeDir'] + '/' + p10ow['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](p10ow['filesListObj']),
                'success': function (mtszb) {},
                'fail': function (mtznxb) {}
            });
        }, p10ow['setNativeFileDir'] = function (vkf5) {
            p10ow['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + vkf5;
        }, p10ow['filesListObj'] = {}, p10ow['fileNativeDir'] = null, p10ow['fileListName'] = 'layaairfiles.txt', p10ow['ziyuFileData'] = {}, xbtin(p10ow, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), p10ow;
    }(dfa45),
        l6vk = function (rzms$_) {
        function znrsm() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], znrsm['__super']['call'](this), this['_sound'] = znrsm['_createSound'](), this['_chanell'] = new byth(this['_sound']);
        }
        k4of5(znrsm, 'laya.wx.mini.MiniSound', rzms$_);
        var v6al87 = znrsm['prototype'];
        return v6al87['load'] = function ($serq) {
            var vak5f7 = this;
            $serq = u0o1['formatURL']($serq), this['url'] = $serq;
            if (znrsm['_audioCache'][$serq]) {
                this['event']('complete');
                return;
            }
            function $e38l() {
                if (znrsm['_null'] != undefined) vak5f7['_sound']['onCanplay'](znrsm['_null']), vak5f7['_sound']['onError'](znrsm['_null']);else try {
                    vak5f7['_sound']['onCanplay'](null), vak5f7['_sound']['onError'](null), znrsm['_null'] = null;
                } catch (fuo1) {
                    console['warn']('[wxmini] _clearSound:' + fuo1), vak5f7['_sound']['onCanplay'](u1opw), vak5f7['_sound']['onError'](u1opw), znrsm['_null'] = u1opw;
                }
            }
            function le38$q() {
                uw01o['loaded'] = !![], uw01o['event']('complete'), znrsm['_audioCache'][uw01o['url']] = uw01o;
            }
            function qe$83_(e68ql) {
                console['error']('errCode=' + e68ql['errCode'] + '  errMsg=' + e68ql['errMsg']), uw01o['event']('error');
            }
            function u1opw() {}
            this['_sound']['onCanplay'](le38$q), this['_sound']['onError'](qe$83_), this['_sound']['src'] = $serq;
            var uw01o = this;
        }, v6al87['play'] = function (zsrm, zbmsr) {
            zsrm === void 0x0 && (zsrm = 0x0), zbmsr === void 0x0 && (zbmsr = 0x0);
            var _$38e, l763q;
            if (this['url'] == uwo4d['_tMusic']) {
                if (!znrsm['_musicAudio']) znrsm['_musicAudio'] = this['_sound'];
                _$38e = znrsm['_musicAudio'], l763q = this['_chanell'];
            } else _$38e = this['_sound'], l763q = this['_chanell'];
            return _$38e['src'] = this['url'], _$38e['startTime'] = 0x0, l763q['isStopped'] && (l763q['url'] = this['url'], l763q['loops'] = zbmsr, l763q['startTime'] = zsrm, l763q['play'](), uwo4d['addChannel'](l763q)), l763q;
        }, v6al87['dispose'] = function () {
            var m_znr = znrsm['_audioCache'][this['url']];
            m_znr && (m_znr['src'] = '', delete znrsm['_audioCache'][this['url']]);
        }, tix2yh(0x0, v6al87, 'duration', function () {
            return this['_sound']['duration'];
        }), znrsm['_createSound'] = function () {
            znrsm['_id']++;
            var $resq_ = dou4f1['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return $resq_;
        }, znrsm['_musicAudio'] = null, znrsm['_id'] = 0x0, znrsm['_audioCache'] = {}, znrsm['_null'] = undefined, znrsm;
    }(dfa45),
        byth = function (ixt2hy) {
        function ntiz(mxbz) {
            this['_audio'] = null, this['_onEnd'] = null, ntiz['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = mxbz, this['_onEnd'] = $sr_m['bind'](this['__onEnd'], this), mxbz['onEnded'](this['_onEnd']);
        }
        k4of5(ntiz, 'laya.wx.mini.MiniSoundChannel', ixt2hy);
        var xiznb = ntiz['prototype'];
        return xiznb['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (dow1u0['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, xiznb['__onNull'] = function () {}, xiznb['play'] = function () {
            this['isStopped'] = ![], uwo4d['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, xiznb['stop'] = function () {
            this['isStopped'] = !![], uwo4d['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, xiznb['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, xiznb['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], uwo4d['addChannel'](this), this['_audio']['play']();
        }, tix2yh(0x0, xiznb, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), tix2yh(0x0, xiznb, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), tix2yh(0x0, xiznb, 'volume', function () {
            return 0x1;
        }, function (o1d4u) {}), ntiz['_null'] = undefined, ntiz;
    }(icy2x),
        zbin = function () {
        function v6l8a() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = dou4f1['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        k4of5(v6l8a, 'laya.wx.mini.MiniVideo');
        var lv3678 = v6l8a['prototype'];
        return lv3678['on'] = function (_nsmz, eq$_38, afk4d5) {
            if (_nsmz == 'loadedmetadata') this['onPlayFunc'] = afk4d5['bind'](eq$_38), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else _nsmz == 'ended' && (this['onEndedFunC'] = afk4d5['bind'](eq$_38), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, lv3678['onTimeUpdateFunc'] = function (snmr_z) {
            this['position'] = snmr_z['position'], this['_duration'] = snmr_z['duration'];
        }, lv3678['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, lv3678['onended'] = function (qr$, c2yh) {
            this['onEndedFunC'] = c2yh['bind'](qr$), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, lv3678['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, lv3678['off'] = function (ixbyth, uwo0, $erm_) {
            if (ixbyth == 'loadedmetadata') this['onPlayFunc'] = $erm_['bind'](uwo0), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else ixbyth == 'ended' && (this['onEndedFunC'] = $erm_['bind'](uwo0), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, lv3678['load'] = function (e$8q_) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = e$8q_;
        }, lv3678['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, lv3678['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, lv3678['size'] = function (niz, kvl7a6) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = niz, this['videoElement']['height'] = kvl7a6;
        }, lv3678['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, lv3678['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, tix2yh(0x0, lv3678, 'duration', function () {
            return this['_duration'];
        }), tix2yh(0x0, lv3678, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (xzibn) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = xzibn;
        }), tix2yh(0x0, lv3678, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), tix2yh(0x0, lv3678, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), tix2yh(0x0, lv3678, 'ended', function () {
            return this['videoend'];
        }), tix2yh(0x0, lv3678, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (smr_z$) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = smr_z$;
        }), tix2yh(0x0, lv3678, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (tmxzbn) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = tmxzbn;
        }), tix2yh(0x0, lv3678, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (lv7a) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = lv7a;
        }), tix2yh(0x0, lv3678, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), tix2yh(0x0, lv3678, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (er$q_s) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = er$q_s;
        }), tix2yh(0x0, lv3678, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (_res$m) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = _res$m;
        }), tix2yh(0x0, lv3678, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), tix2yh(0x0, lv3678, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (y2itxh) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = y2itxh;
        }), tix2yh(0x0, lv3678, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function ($qe38_) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = $qe38_;
        }), tix2yh(0x0, lv3678, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (rmz) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = rmz;
        }), v6l8a;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var bzmxtn in Laya) {
        var a5fd4k = Laya[bzmxtn];
        a5fd4k && a5fd4k['__isclass'] && (exports[bzmxtn] = a5fd4k);
    }
});