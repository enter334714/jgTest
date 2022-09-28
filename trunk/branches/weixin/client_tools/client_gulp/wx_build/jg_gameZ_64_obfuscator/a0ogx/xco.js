var f = wx.$B;
(function (window, document, loxw) {
    var hkpgm = loxw['un'],
        hetpk = loxw['uns'],
        hmigx = loxw['static'],
        mgixw = loxw['class'],
        wi13l5 = loxw['getset'],
        $r_z = loxw['__newvec'],
        t9p4 = laya['utils']['Browser'],
        mpthkg = laya['events']['Event'],
        j4k9t = laya['events']['EventDispatcher'],
        n794 = laya['resource']['HTMLImage'],
        e74$j9 = laya['utils']['Handler'],
        mehp = laya['display']['Input'],
        q802vy = laya['net']['Loader'],
        etj49 = laya['maths']['Matrix'],
        epk49 = laya['renders']['Render'],
        xopmh = laya['utils']['RunDriver'],
        xhogpm = laya['media']['Sound'],
        bz_fdr = laya['media']['SoundChannel'],
        j4tk9 = laya['media']['SoundManager'],
        sua56 = laya['display']['Stage'],
        zbfr = laya['net']['URL'],
        r9$7n = laya['utils']['Utils'],
        nfz$_ = function () {
        function hmtop() {}
        return mgixw(hmtop, 'laya.wx.mini.MiniAdpter'), hmtop['getJson'] = function ($_7) {
            return JSON['parse']($_7);
        }, hmtop['init'] = function (jn_r$7, p9tke4) {
            jn_r$7 === void 0x0 && (jn_r$7 = ![]), p9tke4 === void 0x0 && (p9tke4 = ![]);
            if (hmtop['_inited']) return;
            hmtop['window'] = window;
            if (hmtop['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            hmtop['_inited'] = !![], hmtop['isZiYu'] = p9tke4, hmtop['isPosMsgYu'] = jn_r$7, hmtop['EnvConfig'] = {}, !hmtop['isZiYu'] && (w613l5['setNativeFileDir']('/layaairGame'), w613l5['existDir'](w613l5['fileNativeDir'], e74$j9['create'](hmtop, hmtop['onMkdirCallBack']))), hmtop['window']['focus'] = function () {}, loxw['getUrlPath'] = function () {}, hmtop['window']['logtime'] = function (igwmx) {}, hmtop['window']['alertTimeLog'] = function (epmthk) {}, hmtop['window']['resetShareInfo'] = function () {}, hmtop['window']['CanvasRenderingContext2D'] = function () {}, hmtop['window']['CanvasRenderingContext2D']['prototype'] = hmtop['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], hmtop['window']['document']['body']['appendChild'] = function () {}, hmtop['EnvConfig']['pixelRatioInt'] = 0x0, xopmh['getPixelRatio'] = hmtop['pixelRatio'], hmtop['_preCreateElement'] = t9p4['createElement'], t9p4['createElement'] = hmtop['createElement'], xopmh['createShaderCondition'] = hmtop['createShaderCondition'], r9$7n['parseXMLFromString'] = hmtop['parseXMLFromString'], mehp['_createInputElement'] = i5wl1['_createInputElement'], hmtop['EnvConfig']['load'] = q802vy['prototype']['load'], q802vy['prototype']['load'] = x1ilw3['prototype']['load'], hmtop['isZiYu'] && jn_r$7 && wx['onMessage'](function (n_rfzb) {
                n_rfzb['isLoad'] && (w613l5['ziyuFileData'][n_rfzb['url']] = n_rfzb['data']);
            });
        }, hmtop['onMkdirCallBack'] = function (_bzrfd, e74$9j) {
            if (!_bzrfd) w613l5['filesListObj'] = JSON['parse'](e74$9j['data']);
        }, hmtop['pixelRatio'] = function () {
            if (!hmtop['EnvConfig']['pixelRatioInt']) try {
                var ysv8 = wx['getSystemInfoSync']();
                return hmtop['EnvConfig']['pixelRatioInt'] = ysv8['pixelRatio'], ysv8 = ysv8, ysv8['pixelRatio'];
            } catch (nz_7$r) {}
            return hmtop['EnvConfig']['pixelRatioInt'];
        }, hmtop['createElement'] = function (xghmoi) {
            if (xghmoi == 'canvas') {
                var ek9t;
                return hmtop['idx'] == 0x1 ? hmtop['isZiYu'] ? (ek9t = sharedCanvas, ek9t['style'] = {}) : ek9t = window['canvas'] : ek9t = window['wx']['createCanvas'](), hmtop['idx']++, ek9t;
            } else {
                if (xghmoi == 'textarea' || xghmoi == 'input') return hmtop['onCreateInput'](xghmoi);else {
                    if (xghmoi == 'div') {
                        var v2q = hmtop['_preCreateElement'](xghmoi);
                        return v2q['contains'] = function (q82syv) {
                            return null;
                        }, v2q['removeChild'] = function (hpmtg) {}, v2q;
                    } else return hmtop['_preCreateElement'](xghmoi);
                }
            }
        }, hmtop['onCreateInput'] = function (vasq) {
            var n$7j94 = hmtop['_preCreateElement'](vasq);
            return n$7j94['focus'] = i5wl1['wxinputFocus'], n$7j94['blur'] = i5wl1['wxinputblur'], n$7j94['style'] = {}, n$7j94['value'] = 0x0, n$7j94['parentElement'] = {}, n$7j94['placeholder'] = {}, n$7j94['type'] = {}, n$7j94['setColor'] = function (zbrf_n) {}, n$7j94['setType'] = function (nj974) {}, n$7j94['setFontFace'] = function (n7$j_) {}, n$7j94['addEventListener'] = function (pghkt) {}, n$7j94['contains'] = function (rj79$) {
                return null;
            }, n$7j94['removeChild'] = function (j$7n49) {}, n$7j94;
        }, hmtop['createShaderCondition'] = function (ilw153) {
            var j4ekt9 = this,
                fz_rb = function () {
                var ul65 = ilw153;
                return j4ekt9[ilw153['replace']('this.', '')];
            };
            return fz_rb;
        }, hmtop['EnvConfig'] = null, hmtop['window'] = null, hmtop['_preCreateElement'] = null, hmtop['_inited'] = ![], hmtop['wxRequest'] = null, hmtop['systemInfo'] = null, hmtop['version'] = '0.0.1', hmtop['isZiYu'] = ![], hmtop['isPosMsgYu'] = ![], hmtop['parseXMLFromString'] = function (xwiolg) {
            var sa536, drf_bz;
            xwiolg = xwiolg['replace'](/>\s+</g, '><');
            try {
                sa536 = new window['Parser']['DOMParser']()['parseFromString'](xwiolg, 'text/xml');
            } catch ($47) {
                throw '需要引入xml解析库文件';
            }
            return sa536;
        }, hmtop['idx'] = 0x1, hmtop;
    }(),
        z$_rfn = function () {
        function gmoxph() {}
        mgixw(gmoxph, 'laya.wx.mini.MiniImage');
        var zbrn = gmoxph['prototype'];
        return zbrn['_loadImage'] = function (xiowm) {
            var _jn7$r = this,
                nr_$f = ![];
            xiowm['indexOf']('layaNativeDir/') == -0x1 && (nr_$f = !![], xiowm = zbfr['formatURL'](xiowm));
            if (!w613l5['getFileInfo'](xiowm)) {
                if (xiowm['indexOf']('http://') != -0x1 || xiowm['indexOf']('https://') != -0x1) w613l5['downImg'](xiowm, new e74$j9(gmoxph, gmoxph['onDownImgCallBack'], [xiowm, _jn7$r]), xiowm);else gmoxph['onCreateImage'](xiowm, _jn7$r, !![]);
            } else gmoxph['onCreateImage'](xiowm, _jn7$r, !nr_$f);
        }, gmoxph['onDownImgCallBack'] = function (n794$, j_r, e9k4p) {
            if (!e9k4p) gmoxph['onCreateImage'](n794$, j_r);else j_r['onError'](null);
        }, gmoxph['onCreateImage'] = function (j$r_n7, sua36, li513w) {
            li513w === void 0x0 && (li513w = ![]);
            var $j79rn;
            if (!li513w) {
                var hpe4kt = w613l5['getFileInfo'](j$r_n7),
                    rzf_n$ = hpe4kt['md5'];
                $j79rn = w613l5['getFileNativePath'](rzf_n$);
            } else $j79rn = j$r_n7;
            if (sua36['imgCache'] == null) sua36['imgCache'] = {};
            var pmekh;
            function i5l3w1() {
                pmekh['onload'] = null, pmekh['onerror'] = null, delete sua36['imgCache'][j$r_n7];
            }
            ;
            var tjke49 = function () {
                i5l3w1(), sua36['onLoaded'](pmekh);
            },
                rj7_$ = function () {
                i5l3w1(), sua36['event']('error', 'Load image failed');
            };
            sua36['_type'] == 'nativeimage' ? (pmekh = new t9p4['window']['Image'](), pmekh['crossOrigin'] = '', pmekh['onload'] = tjke49, pmekh['onerror'] = rj7_$, pmekh['src'] = $j79rn, sua36['imgCache'][j$r_n7] = pmekh) : new n794['create']($j79rn, {
                'onload': tjke49,
                'onerror': rj7_$,
                'onCreate': function (xl3wi) {
                    pmekh = xl3wi, sua36['imgCache'][j$r_n7] = xl3wi;
                }
            });
        }, gmoxph;
    }(),
        i5wl1 = function () {
        function ausq68() {}
        return mgixw(ausq68, 'laya.wx.mini.MiniInput'), ausq68['_createInputElement'] = function () {
            mehp['_initInput'](mehp['area'] = t9p4['createElement']('textarea')), mehp['_initInput'](mehp['input'] = t9p4['createElement']('input')), mehp['inputContainer'] = t9p4['createElement']('div'), mehp['inputContainer']['style']['position'] = 'absolute', mehp['inputContainer']['style']['zIndex'] = 0x186a0, t9p4['container']['appendChild'](mehp['inputContainer']), mehp['inputContainer']['setPos'] = function (zd_fr, oxgih) {
                mehp['inputContainer']['style']['left'] = zd_fr + 'px', mehp['inputContainer']['style']['top'] = oxgih + 'px';
            }, loxw['stage']['on']('resize', null, ausq68['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (ktehm) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), j4tk9['_soundClass'] = et49p, j4tk9['_musicClass'] = et49p, window['_videoClass'] = zd_f;
        }, ausq68['_onStageResize'] = function () {
            var ek4hp = loxw['stage']['_canvasTransform']['identity']();
            ek4hp['scale'](t9p4['width'] / epk49['canvas']['width'] / xopmh['getPixelRatio'](), t9p4['height'] / epk49['canvas']['height'] / xopmh['getPixelRatio']());
        }, ausq68['wxinputFocus'] = function (xil13) {
            var k7j4e9 = mehp['inputElement']['target'];
            if (k7j4e9 && !k7j4e9['editable']) return;
            nfz$_['window']['wx']['offKeyboardConfirm'](), nfz$_['window']['wx']['offKeyboardInput'](), nfz$_['window']['wx']['showKeyboard']({
                'defaultValue': k7j4e9['text'],
                'maxLength': k7j4e9['maxChars'],
                'multiple': k7j4e9['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (xi) {},
                'fail': function (zfdr_b) {}
            }), nfz$_['window']['wx']['onKeyboardConfirm'](function (u58s6a) {
                var su3a65 = u58s6a ? u58s6a['value'] : '';
                k7j4e9['text'] = su3a65, k7j4e9['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), nfz$_['window']['wx']['onKeyboardInput'](function (q2av8) {
                var nr7j9$ = q2av8 ? q2av8['value'] : '';
                if (!k7j4e9['multiline']) {
                    if (nr7j9$['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                k7j4e9['text'] = nr7j9$, k7j4e9['event']('input');
            });
        }, ausq68['inputEnter'] = function () {
            mehp['inputElement']['target']['focus'] = ![];
        }, ausq68['wxinputblur'] = function () {
            ausq68['hideKeyboard']();
        }, ausq68['hideKeyboard'] = function () {
            nfz$_['window']['wx']['offKeyboardConfirm'](), nfz$_['window']['wx']['offKeyboardInput'](), nfz$_['window']['wx']['hideKeyboard']({
                'success': function (v02q) {
                    console['log']('隐藏键盘');
                },
                'fail': function (_nrzbf) {
                    console['log']('隐藏键盘出错:' + (_nrzbf ? _nrzbf['errMsg'] : ''));
                }
            });
        }, ausq68;
    }(),
        x1ilw3 = function () {
        function tpke4() {}
        mgixw(tpke4, 'laya.wx.mini.MiniLoader');
        var hetk4p = tpke4['prototype'];
        return hetk4p['load'] = function (ktmgh, ua28qs, rfnz, kept4h, uq8s2) {
            rfnz === void 0x0 && (rfnz = !![]), uq8s2 === void 0x0 && (uq8s2 = ![]);
            var k9pte = this;
            k9pte['_url'] = ktmgh;
            if (ktmgh['indexOf']('data:image') === 0x0) k9pte['_type'] = ua28qs = 'image';else k9pte['_type'] = ua28qs || (ua28qs = k9pte['getTypeFromUrl'](ktmgh));
            k9pte['_cache'] = rfnz, k9pte['_data'] = null;
            var znr$7 = 'ascii';
            if (ktmgh['indexOf']('.fnt') != -0x1) znr$7 = 'utf8';else ua28qs == 'arraybuffer' && (znr$7 = '');
            ;
            var l51wi = r9$7n['getFileExtension'](ktmgh);
            if (tpke4['_fileTypeArr']['indexOf'](l51wi) != -0x1) nfz$_['EnvConfig']['load']['call'](this, ktmgh, ua28qs, rfnz, kept4h, uq8s2);else {
                if (!w613l5['getFileInfo'](ktmgh)) {
                    if (ktmgh['indexOf']('layaNativeDir/') != -0x1) {
                        if (nfz$_['isZiYu']) {
                            var ioxl = w613l5['ziyuFileData'][ktmgh];
                            k9pte['onLoaded'](ioxl);
                            return;
                        } else {
                            cosnole['log']('read read'), w613l5['read'](ktmgh, znr$7, new e74$j9(tpke4, tpke4['onReadNativeCallBack'], [znr$7, ktmgh, ua28qs, rfnz, kept4h, uq8s2, k9pte]));
                            return;
                        }
                    }
                    if (zbfr['rootPath'] == '') var yqv0 = ktmgh;else yqv0 = ktmgh['split'](zbfr['rootPath'])[0x0];
                    ktmgh['indexOf']('http://') != -0x1 || ktmgh['indexOf']('https://') != -0x1 ? nfz$_['EnvConfig']['load']['call'](k9pte, ktmgh, ua28qs, rfnz, kept4h, uq8s2) : w613l5['readFile'](yqv0, znr$7, new e74$j9(tpke4, tpke4['onReadNativeCallBack'], [znr$7, ktmgh, ua28qs, rfnz, kept4h, uq8s2, k9pte]), ktmgh);
                } else nfz$_['EnvConfig']['load']['call'](this, ktmgh, ua28qs, rfnz, kept4h, uq8s2);
            }
        }, hetk4p['resMgrLoad'] = function (q6us8a, hotpmg, bznr_, hgmk, zf_rbn, saqv8, hoxmgp) {
            bznr_ === void 0x0 && (bznr_ = 0x0), hgmk === void 0x0 && (hgmk = ![]), zf_rbn === void 0x0 && (zf_rbn = ![]), saqv8 === void 0x0 && (saqv8 = 0x0), hoxmgp === void 0x0 && (hoxmgp = 0x3), q6us8a['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', q6us8a), nfz$_['EnvConfig']['resMgrLoad'](q6us8a, (i1l35w, j_7r$n, _znr) => {
                tpke4['prototype']['resMgrLoadCallBack'](i1l35w, j_7r$n, _znr, hotpmg);
            }, bznr_, hgmk, zf_rbn, saqv8, hoxmgp);
        }, hetk4p['resMgrLoadCallBack'] = function (u36a5s, i1x3w, u36as5, u531) {
            console['log']('buff:::', u36a5s, u36as5, w613l5['fileNativeDir'] + '///' + w613l5['fileListName']), u531(u36a5s, i1x3w, u36as5);
        }, hetk4p['clearRes'] = function (himoxg, l35u1) {
            l35u1 === void 0x0 && (l35u1 = ![]);
            var rj$_n7 = this;
            rj$_n7['clearRes'](himoxg, l35u1);
            var ek4j = w613l5['getFileInfo'](himoxg);
            if (ek4j && (himoxg['indexOf']('http://') != -0x1 || himoxg['indexOf']('https://') != -0x1)) {
                var k94pe = ek4j['md5'],
                    gmixo = w613l5['getFileNativePath'](k94pe);
                w613l5['remove'](gmixo);
            }
        }, tpke4['onReadNativeCallBack'] = function (bdfzr_, nzr$f, fzrbd_, h4tpek, q6uas, tkhgpm, lgwoxi, y028qv, b_zdfr) {
            h4tpek === void 0x0 && (h4tpek = !![]), tkhgpm === void 0x0 && (tkhgpm = ![]), y028qv === void 0x0 && (y028qv = 0x0);
            if (!y028qv) {
                var j9$e;
                if (fzrbd_ == 'json' || fzrbd_ == 'atlas') j9$e = nfz$_['getJson'](b_zdfr['data']);else fzrbd_ == 'xml' ? j9$e = r9$7n['parseXMLFromString'](b_zdfr['data']) : j9$e = b_zdfr['data'];
                lgwoxi['onLoaded'](j9$e), !nfz$_['isZiYu'] && nfz$_['isPosMsgYu'] && fzrbd_ != 'arraybuffer' && wx['postMessage']({
                    'url': nzr$f,
                    'data': j9$e,
                    'isLoad': !![]
                });
            } else y028qv == 0x1 && nfz$_['EnvConfig']['load']['call'](lgwoxi, nzr$f, fzrbd_, h4tpek, q6uas, tkhgpm);
        }, hmigx(tpke4, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), tpke4;
    }(),
        w613l5 = function (xiwl31) {
        function tmpkgh() {
            tmpkgh['__super']['call'](this);
            ;
        }
        return mgixw(tmpkgh, 'laya.wx.mini.MiniFileMgr', xiwl31), tmpkgh['isLoadFile'] = function (khmpe) {
            return tmpkgh['_fileTypeArr']['indexOf'](khmpe) != -0x1 ? !![] : ![];
        }, tmpkgh['getFileInfo'] = function (s5a8u6) {
            var $_r7z = s5a8u6['split']('?')[0x0],
                s8u6a = tmpkgh['filesListObj'][$_r7z];
            if (s8u6a == null) return null;else return s8u6a;
            return null;
        }, tmpkgh['onFileUpdate'] = function (ke497j, j7$94n) {
            var jn79r$ = ke497j['split']('/'),
                lw65 = jn79r$[jn79r$['length'] - 0x1],
                z7n_r = tmpkgh['getFileInfo'](j7$94n);
            if (z7n_r == null) tmpkgh['onSaveFile'](j7$94n, lw65);else {
                if (z7n_r['readyUrl'] != j7$94n) tmpkgh['remove'](lw65, j7$94n);
            }
        }, tmpkgh['exits'] = function (u65s8, tepk) {
            var s536ua = tmpkgh['getFileNativePath'](u65s8);
            tmpkgh['fs']['getFileInfo']({
                'filePath': s536ua,
                'success': function (zbnf_) {
                    tepk != null && tepk['runWith']([0x0, zbnf_]);
                },
                'fail': function (ekp4t9) {
                    tepk != null && tepk['runWith']([0x1, ekp4t9]);
                }
            });
        }, tmpkgh['read'] = function (lx, ogmhpx, ioxl1, hpket4) {
            ogmhpx === void 0x0 && (ogmhpx = 'ascill'), hpket4 === void 0x0 && (hpket4 = '');
            var n$z_f;
            hpket4 != '' ? n$z_f = tmpkgh['getFileNativePath'](lx) : n$z_f = lx, tmpkgh['fs']['readFile']({
                'filePath': n$z_f,
                'encoding': ogmhpx,
                'success': function (tmhgk) {
                    ioxl1 != null && ioxl1['runWith']([0x0, tmhgk]);
                },
                'fail': function (khtgp) {
                    if (khtgp && hpket4 != '') tmpkgh['down'](hpket4, ogmhpx, ioxl1, hpket4);else ioxl1 != null && ioxl1['runWith']([0x1]);
                }
            });
        }, tmpkgh['readNativeFile'] = function (syq82, gomixh) {
            tmpkgh['fs']['readFile']({
                'filePath': syq82,
                'encoding': '',
                'success': function (gkthp) {
                    gomixh != null && gomixh['runWith']([0x0]);
                },
                'fail': function (o1xl) {
                    gomixh != null && gomixh['runWith']([0x1]);
                }
            });
        }, tmpkgh['down'] = function (ej79k, kgtm, qs8v2, _fbnr) {
            kgtm === void 0x0 && (kgtm = 'ascill'), _fbnr === void 0x0 && (_fbnr = '');
            var vqs = tmpkgh['getFileNativePath'](_fbnr),
                gphtm = tmpkgh['wxdown']({
                'url': ej79k,
                'filePath': vqs,
                'success': function (khmpgt) {
                    if (khmpgt['statusCode'] === 0xc8) tmpkgh['readFile'](khmpgt['filePath'], kgtm, qs8v2, _fbnr);
                },
                'fail': function (a356u) {
                    qs8v2 != null && qs8v2['runWith']([0x1, a356u]);
                }
            });
            gphtm['onProgressUpdate'](function (ysv8q) {
                qs8v2 != null && qs8v2['runWith']([0x2, ysv8q['progress']]);
            });
        }, tmpkgh['readFile'] = function (j7r$9n, t94ekp, s86uaq, b_drzf) {
            t94ekp === void 0x0 && (t94ekp = 'ascill'), b_drzf === void 0x0 && (b_drzf = ''), tmpkgh['fs']['readFile']({
                'filePath': j7r$9n,
                'encoding': t94ekp,
                'success': function (q6u8sa) {
                    if (j7r$9n['indexOf']('http://') != -0x1 || j7r$9n['indexOf']('https://') != -0x1) tmpkgh['onFileUpdate'](j7r$9n, b_drzf);
                    s86uaq != null && s86uaq['runWith']([0x0, q6u8sa]);
                },
                'fail': function (_bnrzf) {
                    if (_bnrzf) s86uaq != null && s86uaq['runWith']([0x1, _bnrzf]);
                }
            });
        }, tmpkgh['downImg'] = function (wil513, s6qu, ul1356) {
            ul1356 === void 0x0 && (ul1356 = '');
            var _$nrz = tmpkgh['wxdown']({
                'url': wil513,
                'success': function (ohmixg) {
                    ohmixg['statusCode'] === 0xc8 && tmpkgh['copyFile'](ohmixg['tempFilePath'], ul1356, s6qu);
                },
                'fail': function (rf$nz) {
                    s6qu != null && s6qu['runWith']([0x1, rf$nz]);
                }
            });
        }, tmpkgh['copyFile'] = function (ogmht, owgxim, tek94j) {
            var _bfd = ogmht['split']('/'),
                nj$r9 = _bfd[_bfd['length'] - 0x1],
                ua8q6 = owgxim['split']('?')[0x0],
                ejk4t = tmpkgh['getFileInfo'](owgxim),
                $znf = tmpkgh['getFileNativePath'](nj$r9);
            tmpkgh['fs']['copyFile']({
                'srcPath': ogmht,
                'destPath': $znf,
                'success': function (_brfnz) {
                    if (!ejk4t) tmpkgh['onSaveFile'](owgxim, nj$r9), tek94j != null && tek94j['runWith']([0x0]);else {
                        if (ejk4t['readyUrl'] != owgxim) tmpkgh['remove'](nj$r9, owgxim, tek94j);
                    }
                },
                'fail': function ($794) {
                    tek94j != null && tek94j['runWith']([0x1, $794]);
                }
            });
        }, tmpkgh['getFileNativePath'] = function (l31u6) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + l31u6;
        }, tmpkgh['remove'] = function (asq2u8, v2aq8s, xwgol) {
            v2aq8s === void 0x0 && (v2aq8s = '');
            var gxihmo = tmpkgh['getFileInfo'](v2aq8s),
                il1o = tmpkgh['getFileNativePath'](gxihmo['md5']);
            loxw['loader']['clearRes'](gxihmo['readyUrl']), tmpkgh['fs']['unlink']({
                'filePath': il1o,
                'success': function (hmoixg) {
                    if (v2aq8s != '') tmpkgh['onSaveFile'](v2aq8s, asq2u8);
                    xwgol != null && xwgol['runWith']([0x0]);
                },
                'fail': function (wi31l5) {}
            });
        }, tmpkgh['onSaveFile'] = function (db_r, e94k7) {
            var sa2uq = db_r['split']('?')[0x0];
            tmpkgh['filesListObj'][sa2uq] = {
                'md5': e94k7,
                'readyUrl': db_r
            }, tmpkgh['fs']['writeFile']({
                'filePath': tmpkgh['fileNativeDir'] + '/' + tmpkgh['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](tmpkgh['filesListObj']),
                'success': function (fbrnz) {
                    console['log']('写入测试测试成功：', fbrnz);
                },
                'fail': function (tkpgh) {
                    console['log']('写入测试测试失败：', tkpgh);
                }
            });
        }, tmpkgh['existDir'] = function (ilxo1w, rd_zfb) {
            tmpkgh['fs']['mkdir']({
                'dirPath': ilxo1w,
                'success': function (_zbrf) {
                    rd_zfb != null && rd_zfb['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (w3x1li) {
                    if (w3x1li['errMsg']['indexOf']('file already exists') != -0x1) tmpkgh['readSync'](tmpkgh['fileListName'], 'utf8', rd_zfb);else rd_zfb != null && rd_zfb['runWith']([0x1, w3x1li]);
                }
            });
        }, tmpkgh['readSync'] = function (mhktpg, qu28a, xpghom, tgmohp) {
            qu28a === void 0x0 && (qu28a = 'ascill'), tgmohp === void 0x0 && (tgmohp = '');
            var eh4kt = tmpkgh['getFileNativePath'](mhktpg),
                au28sq;
            try {
                au28sq = tmpkgh['fs']['readFileSync'](eh4kt), xpghom != null && xpghom['runWith']([0x0, { 'data': au28sq }]);
            } catch (ktgm) {
                xpghom != null && xpghom['runWith']([0x1]);
            }
        }, tmpkgh['readCache'] = function () {}, tmpkgh['writeCache'] = function (thepkm) {
            var frdz = readyUrl['split']('?')[0x0];
            tmpkgh['filesListObj'][frdz] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, tmpkgh['fs']['writeFile']({
                'filePath': tmpkgh['fileNativeDir'] + '/' + tmpkgh['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](tmpkgh['filesListObj']),
                'success': function (r_$7j) {},
                'fail': function (hpmot) {}
            });
        }, tmpkgh['setNativeFileDir'] = function (pgohm) {
            tmpkgh['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + pgohm;
        }, tmpkgh['filesListObj'] = {}, tmpkgh['fileNativeDir'] = null, tmpkgh['fileListName'] = 'layaairfiles.txt', tmpkgh['ziyuFileData'] = {}, hmigx(tmpkgh, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), tmpkgh;
    }(j4k9t),
        et49p = function (uas356) {
        function _fnz() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], _fnz['__super']['call'](this), this['_sound'] = _fnz['_createSound'](), this['_chanell'] = new brz(this['_sound']);
        }
        mgixw(_fnz, 'laya.wx.mini.MiniSound', uas356);
        var moptgh = _fnz['prototype'];
        return moptgh['load'] = function (s8a6u5) {
            var fzr_$n = this;
            s8a6u5 = zbfr['formatURL'](s8a6u5), this['url'] = s8a6u5;
            if (_fnz['_audioCache'][s8a6u5]) {
                this['event']('complete');
                return;
            }
            function drfb_() {
                if (_fnz['_null'] != undefined) fzr_$n['_sound']['onCanplay'](_fnz['_null']), fzr_$n['_sound']['onError'](_fnz['_null']);else try {
                    fzr_$n['_sound']['onCanplay'](null), fzr_$n['_sound']['onError'](null), _fnz['_null'] = null;
                } catch (qa6us8) {
                    console['warn']('[wxmini] _clearSound:' + qa6us8), fzr_$n['_sound']['onCanplay'](r79$nj), fzr_$n['_sound']['onError'](r79$nj), _fnz['_null'] = r79$nj;
                }
            }
            function i3l1w() {
                lxwgoi['loaded'] = !![], lxwgoi['event']('complete'), _fnz['_audioCache'][lxwgoi['url']] = lxwgoi;
            }
            function gxioh(tpe4h) {
                console['error']('errCode=' + tpe4h['errCode'] + '  errMsg=' + tpe4h['errMsg']), lxwgoi['event']('error');
            }
            function r79$nj() {}
            this['_sound']['onCanplay'](i3l1w), this['_sound']['onError'](gxioh), this['_sound']['src'] = s8a6u5;
            var lxwgoi = this;
        }, moptgh['play'] = function (us28a, xiw31l) {
            us28a === void 0x0 && (us28a = 0x0), xiw31l === void 0x0 && (xiw31l = 0x0);
            var tkpmg, n7_rz$;
            if (this['url'] == j4tk9['_tMusic']) {
                if (!_fnz['_musicAudio']) _fnz['_musicAudio'] = this['_sound'];
                tkpmg = _fnz['_musicAudio'], n7_rz$ = this['_chanell'];
            } else tkpmg = this['_sound'], n7_rz$ = this['_chanell'];
            return tkpmg['src'] = this['url'], tkpmg['startTime'] = 0x0, n7_rz$['isStopped'] && (n7_rz$['url'] = this['url'], n7_rz$['loops'] = xiw31l, n7_rz$['startTime'] = us28a, n7_rz$['play'](), j4tk9['addChannel'](n7_rz$)), n7_rz$;
        }, moptgh['dispose'] = function () {
            var tmphek = _fnz['_audioCache'][this['url']];
            tmphek && (tmphek['src'] = '', delete _fnz['_audioCache'][this['url']]);
        }, wi13l5(0x0, moptgh, 'duration', function () {
            return this['_sound']['duration'];
        }), _fnz['_createSound'] = function () {
            _fnz['_id']++;
            var ke9pt = nfz$_['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return ke9pt;
        }, _fnz['_musicAudio'] = null, _fnz['_id'] = 0x0, _fnz['_audioCache'] = {}, _fnz['_null'] = undefined, _fnz;
    }(j4k9t),
        brz = function (ej49k) {
        function rd(xgowi) {
            this['_audio'] = null, this['_onEnd'] = null, rd['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = xgowi, this['_onEnd'] = r9$7n['bind'](this['__onEnd'], this), xgowi['onEnded'](this['_onEnd']);
        }
        mgixw(rd, 'laya.wx.mini.MiniSoundChannel', ej49k);
        var ohmpgt = rd['prototype'];
        return ohmpgt['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (loxw['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, ohmpgt['__onNull'] = function () {}, ohmpgt['play'] = function () {
            this['isStopped'] = ![], j4tk9['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, ohmpgt['stop'] = function () {
            this['isStopped'] = !![], j4tk9['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, ohmpgt['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, ohmpgt['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], j4tk9['addChannel'](this), this['_audio']['play']();
        }, wi13l5(0x0, ohmpgt, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), wi13l5(0x0, ohmpgt, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), wi13l5(0x0, ohmpgt, 'volume', function () {
            return 0x1;
        }, function (xigmho) {}), rd['_null'] = undefined, rd;
    }(bz_fdr),
        zd_f = function () {
        function io1l() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = nfz$_['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        mgixw(io1l, 'laya.wx.mini.MiniVideo');
        var tehpmk = io1l['prototype'];
        return tehpmk['on'] = function (gtpmkh, pghm, mpekth) {
            if (gtpmkh == 'loadedmetadata') this['onPlayFunc'] = mpekth['bind'](pghm), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else gtpmkh == 'ended' && (this['onEndedFunC'] = mpekth['bind'](pghm), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, tehpmk['onTimeUpdateFunc'] = function (u3l1) {
            this['position'] = u3l1['position'], this['_duration'] = u3l1['duration'];
        }, tehpmk['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, tehpmk['onended'] = function (rbdz_f, bfzd_r) {
            this['onEndedFunC'] = bfzd_r['bind'](rbdz_f), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, tehpmk['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, tehpmk['off'] = function (qaus2, a85us, s8qv2a) {
            if (qaus2 == 'loadedmetadata') this['onPlayFunc'] = s8qv2a['bind'](a85us), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else qaus2 == 'ended' && (this['onEndedFunC'] = s8qv2a['bind'](a85us), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, tehpmk['load'] = function (w1il5) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = w1il5;
        }, tehpmk['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, tehpmk['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, tehpmk['size'] = function (il15, l613u5) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = il15, this['videoElement']['height'] = l613u5;
        }, tehpmk['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, tehpmk['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, wi13l5(0x0, tehpmk, 'duration', function () {
            return this['_duration'];
        }), wi13l5(0x0, tehpmk, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (j9$n) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = j9$n;
        }), wi13l5(0x0, tehpmk, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), wi13l5(0x0, tehpmk, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), wi13l5(0x0, tehpmk, 'ended', function () {
            return this['videoend'];
        }), wi13l5(0x0, tehpmk, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (quas6) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = quas6;
        }), wi13l5(0x0, tehpmk, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (sq8au6) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = sq8au6;
        }), wi13l5(0x0, tehpmk, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (il53w) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = il53w;
        }), wi13l5(0x0, tehpmk, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), wi13l5(0x0, tehpmk, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (_7jr) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = _7jr;
        }), wi13l5(0x0, tehpmk, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (r_b) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = r_b;
        }), wi13l5(0x0, tehpmk, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), wi13l5(0x0, tehpmk, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (wo1lx) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = wo1lx;
        }), wi13l5(0x0, tehpmk, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (sv8a2q) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = sv8a2q;
        }), wi13l5(0x0, tehpmk, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (pk4eh) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = pk4eh;
        }), io1l;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var hogm in Laya) {
        var kmpet = Laya[hogm];
        kmpet && kmpet['__isclass'] && (exports[hogm] = kmpet);
    }
});