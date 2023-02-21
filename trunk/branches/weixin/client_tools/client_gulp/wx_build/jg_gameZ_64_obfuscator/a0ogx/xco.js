var f = wx.$B;
(function (window, document, pmkteh) {
    var xgomhp = pmkteh['un'],
        phk4et = pmkteh['uns'],
        pomghx = pmkteh['static'],
        nj49$7 = pmkteh['class'],
        brf_ = pmkteh['getset'],
        gkthp = pmkteh['__newvec'],
        q2syv = laya['utils']['Browser'],
        mkgpht = laya['events']['Event'],
        u61l3 = laya['events']['EventDispatcher'],
        wloix1 = laya['resource']['HTMLImage'],
        yvqs82 = laya['utils']['Handler'],
        li3w51 = laya['display']['Input'],
        _znr$ = laya['net']['Loader'],
        q2a8v = laya['maths']['Matrix'],
        ixmo = laya['renders']['Render'],
        jr_7n = laya['utils']['RunDriver'],
        l51u63 = laya['media']['Sound'],
        b_zdf = laya['media']['SoundChannel'],
        n$4j79 = laya['media']['SoundManager'],
        j9$4n7 = laya['display']['Stage'],
        oxmwg = laya['net']['URL'],
        ph4tke = laya['utils']['Utils'],
        tpgo = function () {
        function n$jr97() {}
        return nj49$7(n$jr97, 'laya.wx.mini.MiniAdpter'), n$jr97['getJson'] = function (nfr_$) {
            return JSON['parse'](nfr_$);
        }, n$jr97['init'] = function (w51l3i, y02q) {
            w51l3i === void 0x0 && (w51l3i = ![]), y02q === void 0x0 && (y02q = ![]);
            if (n$jr97['_inited']) return;
            n$jr97['window'] = window;
            if (n$jr97['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            n$jr97['_inited'] = !![], n$jr97['isZiYu'] = y02q, n$jr97['isPosMsgYu'] = w51l3i, n$jr97['EnvConfig'] = {}, !n$jr97['isZiYu'] && (mkp['setNativeFileDir']('/layaairGame'), mkp['existDir'](mkp['fileNativeDir'], yvqs82['create'](n$jr97, n$jr97['onMkdirCallBack']))), n$jr97['window']['focus'] = function () {}, pmkteh['getUrlPath'] = function () {}, n$jr97['window']['logtime'] = function ($9e74j) {}, n$jr97['window']['alertTimeLog'] = function (s2q8vy) {}, n$jr97['window']['resetShareInfo'] = function () {}, n$jr97['window']['CanvasRenderingContext2D'] = function () {}, n$jr97['window']['CanvasRenderingContext2D']['prototype'] = n$jr97['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], n$jr97['window']['document']['body']['appendChild'] = function () {}, n$jr97['EnvConfig']['pixelRatioInt'] = 0x0, jr_7n['getPixelRatio'] = n$jr97['pixelRatio'], n$jr97['_preCreateElement'] = q2syv['createElement'], q2syv['createElement'] = n$jr97['createElement'], jr_7n['createShaderCondition'] = n$jr97['createShaderCondition'], ph4tke['parseXMLFromString'] = n$jr97['parseXMLFromString'], li3w51['_createInputElement'] = kmgth['_createInputElement'], n$jr97['EnvConfig']['load'] = _znr$['prototype']['load'], _znr$['prototype']['load'] = su53['prototype']['load'], n$jr97['isZiYu'] && w51l3i && wx['onMessage'](function (lig) {
                lig['isLoad'] && (mkp['ziyuFileData'][lig['url']] = lig['data']);
            });
        }, n$jr97['onMkdirCallBack'] = function (l3wi1, z$nr7) {
            if (!l3wi1) mkp['filesListObj'] = JSON['parse'](z$nr7['data']);
        }, n$jr97['pixelRatio'] = function () {
            if (!n$jr97['EnvConfig']['pixelRatioInt']) try {
                var moxphg = wx['getSystemInfoSync']();
                return n$jr97['EnvConfig']['pixelRatioInt'] = moxphg['pixelRatio'], moxphg = moxphg, moxphg['pixelRatio'];
            } catch (auq82s) {}
            return n$jr97['EnvConfig']['pixelRatioInt'];
        }, n$jr97['createElement'] = function (kpt4he) {
            if (kpt4he == 'canvas') {
                var bn_;
                return n$jr97['idx'] == 0x1 ? n$jr97['isZiYu'] ? (bn_ = sharedCanvas, bn_['style'] = {}) : bn_ = window['canvas'] : bn_ = window['wx']['createCanvas'](), n$jr97['idx']++, bn_;
            } else {
                if (kpt4he == 'textarea' || kpt4he == 'input') return n$jr97['onCreateInput'](kpt4he);else {
                    if (kpt4he == 'div') {
                        var r$jn79 = n$jr97['_preCreateElement'](kpt4he);
                        return r$jn79['contains'] = function (kep9t) {
                            return null;
                        }, r$jn79['removeChild'] = function (phgomt) {}, r$jn79;
                    } else return n$jr97['_preCreateElement'](kpt4he);
                }
            }
        }, n$jr97['onCreateInput'] = function (loiwg) {
            var q2v08 = n$jr97['_preCreateElement'](loiwg);
            return q2v08['focus'] = kmgth['wxinputFocus'], q2v08['blur'] = kmgth['wxinputblur'], q2v08['style'] = {}, q2v08['value'] = 0x0, q2v08['parentElement'] = {}, q2v08['placeholder'] = {}, q2v08['type'] = {}, q2v08['setColor'] = function (nj47$9) {}, q2v08['setType'] = function (j$e74) {}, q2v08['setFontFace'] = function (e79k4) {}, q2v08['addEventListener'] = function (nfzb_r) {}, q2v08['contains'] = function (kteh4p) {
                return null;
            }, q2v08['removeChild'] = function (wogim) {}, q2v08;
        }, n$jr97['createShaderCondition'] = function (gwolxi) {
            var yv2q8s = this,
                w163l5 = function () {
                var giw = gwolxi;
                return yv2q8s[gwolxi['replace']('this.', '')];
            };
            return w163l5;
        }, n$jr97['EnvConfig'] = null, n$jr97['window'] = null, n$jr97['_preCreateElement'] = null, n$jr97['_inited'] = ![], n$jr97['wxRequest'] = null, n$jr97['systemInfo'] = null, n$jr97['version'] = '0.0.1', n$jr97['isZiYu'] = ![], n$jr97['isPosMsgYu'] = ![], n$jr97['parseXMLFromString'] = function (av8s2) {
            var khm, ohgxmp;
            av8s2 = av8s2['replace'](/>\s+</g, '><');
            try {
                khm = new window['Parser']['DOMParser']()['parseFromString'](av8s2, 'text/xml');
            } catch (s6uqa8) {
                throw '需要引入xml解析库文件';
            }
            return khm;
        }, n$jr97['idx'] = 0x1, n$jr97;
    }(),
        kt4p9e = function () {
        function u6sa53() {}
        nj49$7(u6sa53, 'laya.wx.mini.MiniImage');
        var n_br = u6sa53['prototype'];
        return n_br['_loadImage'] = function (xwl13) {
            var znrf$_ = this,
                ihog = ![];
            xwl13['indexOf']('layaNativeDir/') == -0x1 && (ihog = !![], xwl13 = oxmwg['formatURL'](xwl13));
            if (!mkp['getFileInfo'](xwl13)) {
                if (xwl13['indexOf']('http://') != -0x1 || xwl13['indexOf']('https://') != -0x1) mkp['downImg'](xwl13, new yvqs82(u6sa53, u6sa53['onDownImgCallBack'], [xwl13, znrf$_]), xwl13);else u6sa53['onCreateImage'](xwl13, znrf$_, !![]);
            } else u6sa53['onCreateImage'](xwl13, znrf$_, !ihog);
        }, u6sa53['onDownImgCallBack'] = function ($j_7n, bfz_rn, sy2v8) {
            if (!sy2v8) u6sa53['onCreateImage']($j_7n, bfz_rn);else bfz_rn['onError'](null);
        }, u6sa53['onCreateImage'] = function ($7jn9r, gomxph, k74e) {
            k74e === void 0x0 && (k74e = ![]);
            var b_zdfr;
            if (!k74e) {
                var _rdf = mkp['getFileInfo']($7jn9r),
                    u2q8as = _rdf['md5'];
                b_zdfr = mkp['getFileNativePath'](u2q8as);
            } else b_zdfr = $7jn9r;
            if (gomxph['imgCache'] == null) gomxph['imgCache'] = {};
            var aq8u6s;
            function iowgmx() {
                aq8u6s['onload'] = null, aq8u6s['onerror'] = null, delete gomxph['imgCache'][$7jn9r];
            }
            ;
            var l36w51 = function () {
                iowgmx(), gomxph['onLoaded'](aq8u6s);
            },
                xog = function () {
                iowgmx(), gomxph['event']('error', 'Load image failed');
            };
            gomxph['_type'] == 'nativeimage' ? (aq8u6s = new q2syv['window']['Image'](), aq8u6s['crossOrigin'] = '', aq8u6s['onload'] = l36w51, aq8u6s['onerror'] = xog, aq8u6s['src'] = b_zdfr, gomxph['imgCache'][$7jn9r] = aq8u6s) : new wloix1['create'](b_zdfr, {
                'onload': l36w51,
                'onerror': xog,
                'onCreate': function (r97$j) {
                    aq8u6s = r97$j, gomxph['imgCache'][$7jn9r] = r97$j;
                }
            });
        }, u6sa53;
    }(),
        kmgth = function () {
        function mpohgt() {}
        return nj49$7(mpohgt, 'laya.wx.mini.MiniInput'), mpohgt['_createInputElement'] = function () {
            li3w51['_initInput'](li3w51['area'] = q2syv['createElement']('textarea')), li3w51['_initInput'](li3w51['input'] = q2syv['createElement']('input')), li3w51['inputContainer'] = q2syv['createElement']('div'), li3w51['inputContainer']['style']['position'] = 'absolute', li3w51['inputContainer']['style']['zIndex'] = 0x186a0, q2syv['container']['appendChild'](li3w51['inputContainer']), li3w51['inputContainer']['setPos'] = function (empkth, wloix) {
                li3w51['inputContainer']['style']['left'] = empkth + 'px', li3w51['inputContainer']['style']['top'] = wloix + 'px';
            }, pmkteh['stage']['on']('resize', null, mpohgt['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (xmogiw) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), n$4j79['_soundClass'] = xwomi, n$4j79['_musicClass'] = xwomi, window['_videoClass'] = wlo1x;
        }, mpohgt['_onStageResize'] = function () {
            var nj$_r = pmkteh['stage']['_canvasTransform']['identity']();
            nj$_r['scale'](q2syv['width'] / ixmo['canvas']['width'] / jr_7n['getPixelRatio'](), q2syv['height'] / ixmo['canvas']['height'] / jr_7n['getPixelRatio']());
        }, mpohgt['wxinputFocus'] = function (us36a) {
            var _n7z = li3w51['inputElement']['target'];
            if (_n7z && !_n7z['editable']) return;
            tpgo['window']['wx']['offKeyboardConfirm'](), tpgo['window']['wx']['offKeyboardInput'](), tpgo['window']['wx']['showKeyboard']({
                'defaultValue': _n7z['text'],
                'maxLength': _n7z['maxChars'],
                'multiple': _n7z['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (tpe94k) {},
                'fail': function (zn_$) {}
            }), tpgo['window']['wx']['onKeyboardConfirm'](function (e9j4tk) {
                var sy8v2q = e9j4tk ? e9j4tk['value'] : '';
                _n7z['text'] = sy8v2q, _n7z['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), tpgo['window']['wx']['onKeyboardInput'](function (vq2as8) {
                var sau8q = vq2as8 ? vq2as8['value'] : '';
                if (!_n7z['multiline']) {
                    if (sau8q['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                _n7z['text'] = sau8q, _n7z['event']('input');
            });
        }, mpohgt['inputEnter'] = function () {
            li3w51['inputElement']['target']['focus'] = ![];
        }, mpohgt['wxinputblur'] = function () {
            mpohgt['hideKeyboard']();
        }, mpohgt['hideKeyboard'] = function () {
            tpgo['window']['wx']['offKeyboardConfirm'](), tpgo['window']['wx']['offKeyboardInput'](), tpgo['window']['wx']['hideKeyboard']({
                'success': function (pmhto) {
                    console['log']('隐藏键盘');
                },
                'fail': function (gihx) {
                    console['log']('隐藏键盘出错:' + (gihx ? gihx['errMsg'] : ''));
                }
            });
        }, mpohgt;
    }(),
        su53 = function () {
        function ph4ek() {}
        nj49$7(ph4ek, 'laya.wx.mini.MiniLoader');
        var mhgx = ph4ek['prototype'];
        return mhgx['load'] = function (nr_fbz, gimhx, hmptg, k4eht, uq8a) {
            hmptg === void 0x0 && (hmptg = !![]), uq8a === void 0x0 && (uq8a = ![]);
            var $974jn = this;
            $974jn['_url'] = nr_fbz;
            if (nr_fbz['indexOf']('data:image') === 0x0) $974jn['_type'] = gimhx = 'image';else $974jn['_type'] = gimhx || (gimhx = $974jn['getTypeFromUrl'](nr_fbz));
            $974jn['_cache'] = hmptg, $974jn['_data'] = null;
            var hepkm = 'ascii';
            if (nr_fbz['indexOf']('.fnt') != -0x1) hepkm = 'utf8';else gimhx == 'arraybuffer' && (hepkm = '');
            ;
            var xogih = ph4tke['getFileExtension'](nr_fbz);
            if (ph4ek['_fileTypeArr']['indexOf'](xogih) != -0x1) tpgo['EnvConfig']['load']['call'](this, nr_fbz, gimhx, hmptg, k4eht, uq8a);else {
                if (!mkp['getFileInfo'](nr_fbz)) {
                    if (nr_fbz['indexOf']('layaNativeDir/') != -0x1) {
                        if (tpgo['isZiYu']) {
                            var igmw = mkp['ziyuFileData'][nr_fbz];
                            $974jn['onLoaded'](igmw);
                            return;
                        } else {
                            cosnole['log']('read read'), mkp['read'](nr_fbz, hepkm, new yvqs82(ph4ek, ph4ek['onReadNativeCallBack'], [hepkm, nr_fbz, gimhx, hmptg, k4eht, uq8a, $974jn]));
                            return;
                        }
                    }
                    if (oxmwg['rootPath'] == '') var w13l65 = nr_fbz;else w13l65 = nr_fbz['split'](oxmwg['rootPath'])[0x0];
                    nr_fbz['indexOf']('http://') != -0x1 || nr_fbz['indexOf']('https://') != -0x1 ? tpgo['EnvConfig']['load']['call']($974jn, nr_fbz, gimhx, hmptg, k4eht, uq8a) : mkp['readFile'](w13l65, hepkm, new yvqs82(ph4ek, ph4ek['onReadNativeCallBack'], [hepkm, nr_fbz, gimhx, hmptg, k4eht, uq8a, $974jn]), nr_fbz);
                } else tpgo['EnvConfig']['load']['call'](this, nr_fbz, gimhx, hmptg, k4eht, uq8a);
            }
        }, mhgx['resMgrLoad'] = function (zrnf_$, l31w65, tke49p, pketh, omxgih, l35i1, _frbz) {
            tke49p === void 0x0 && (tke49p = 0x0), pketh === void 0x0 && (pketh = ![]), omxgih === void 0x0 && (omxgih = ![]), l35i1 === void 0x0 && (l35i1 = 0x0), _frbz === void 0x0 && (_frbz = 0x3), zrnf_$['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', zrnf_$), tpgo['EnvConfig']['resMgrLoad'](zrnf_$, (wl5136, pgkmh, gowli) => {
                ph4ek['prototype']['resMgrLoadCallBack'](wl5136, pgkmh, gowli, l31w65);
            }, tke49p, pketh, omxgih, l35i1, _frbz);
        }, mhgx['resMgrLoadCallBack'] = function (s28qu, p9ekt4, j4kt, rnj97$) {
            console['log']('buff:::', s28qu, j4kt, mkp['fileNativeDir'] + '///' + mkp['fileListName']), rnj97$(s28qu, p9ekt4, j4kt);
        }, mhgx['clearRes'] = function (gmoixh, wl5) {
            wl5 === void 0x0 && (wl5 = ![]);
            var nbfz_r = this;
            nbfz_r['clearRes'](gmoixh, wl5);
            var aq8s2u = mkp['getFileInfo'](gmoixh);
            if (aq8s2u && (gmoixh['indexOf']('http://') != -0x1 || gmoixh['indexOf']('https://') != -0x1)) {
                var nbz_ = aq8s2u['md5'],
                    k9e7j4 = mkp['getFileNativePath'](nbz_);
                mkp['remove'](k9e7j4);
            }
        }, ph4ek['onReadNativeCallBack'] = function (xmiowg, fzn_, _jnr$, pgthom, gphmkt, rj97n$, a68squ, usa, tmhek) {
            pgthom === void 0x0 && (pgthom = !![]), rj97n$ === void 0x0 && (rj97n$ = ![]), usa === void 0x0 && (usa = 0x0);
            if (!usa) {
                var zbfdr;
                if (_jnr$ == 'json' || _jnr$ == 'atlas') zbfdr = tpgo['getJson'](tmhek['data']);else _jnr$ == 'xml' ? zbfdr = ph4tke['parseXMLFromString'](tmhek['data']) : zbfdr = tmhek['data'];
                a68squ['onLoaded'](zbfdr), !tpgo['isZiYu'] && tpgo['isPosMsgYu'] && _jnr$ != 'arraybuffer' && wx['postMessage']({
                    'url': fzn_,
                    'data': zbfdr,
                    'isLoad': !![]
                });
            } else usa == 0x1 && tpgo['EnvConfig']['load']['call'](a68squ, fzn_, _jnr$, pgthom, gphmkt, rj97n$);
        }, pomghx(ph4ek, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), ph4ek;
    }(),
        mkp = function (aus2) {
        function ix3w1l() {
            ix3w1l['__super']['call'](this);
            ;
        }
        return nj49$7(ix3w1l, 'laya.wx.mini.MiniFileMgr', aus2), ix3w1l['isLoadFile'] = function (qvsa) {
            return ix3w1l['_fileTypeArr']['indexOf'](qvsa) != -0x1 ? !![] : ![];
        }, ix3w1l['getFileInfo'] = function (a8vsq) {
            var a2uq8 = a8vsq['split']('?')[0x0],
                n_f$r = ix3w1l['filesListObj'][a2uq8];
            if (n_f$r == null) return null;else return n_f$r;
            return null;
        }, ix3w1l['onFileUpdate'] = function (hmetk, sqy2v) {
            var _n$frz = hmetk['split']('/'),
                tgpo = _n$frz[_n$frz['length'] - 0x1],
                y08qv2 = ix3w1l['getFileInfo'](sqy2v);
            if (y08qv2 == null) ix3w1l['onSaveFile'](sqy2v, tgpo);else {
                if (y08qv2['readyUrl'] != sqy2v) ix3w1l['remove'](tgpo, sqy2v);
            }
        }, ix3w1l['exits'] = function (h4e, nzr7_$) {
            var brf_d = ix3w1l['getFileNativePath'](h4e);
            ix3w1l['fs']['getFileInfo']({
                'filePath': brf_d,
                'success': function (mhigx) {
                    nzr7_$ != null && nzr7_$['runWith']([0x0, mhigx]);
                },
                'fail': function (rzd) {
                    nzr7_$ != null && nzr7_$['runWith']([0x1, rzd]);
                }
            });
        }, ix3w1l['read'] = function (zr_nb, migxw, k9pte4, fz_db) {
            migxw === void 0x0 && (migxw = 'ascill'), fz_db === void 0x0 && (fz_db = '');
            var zr_db;
            fz_db != '' ? zr_db = ix3w1l['getFileNativePath'](zr_nb) : zr_db = zr_nb, ix3w1l['fs']['readFile']({
                'filePath': zr_db,
                'encoding': migxw,
                'success': function (gomxhp) {
                    k9pte4 != null && k9pte4['runWith']([0x0, gomxhp]);
                },
                'fail': function (iowgx) {
                    if (iowgx && fz_db != '') ix3w1l['down'](fz_db, migxw, k9pte4, fz_db);else k9pte4 != null && k9pte4['runWith']([0x1]);
                }
            });
        }, ix3w1l['readNativeFile'] = function (n974$, nj49$) {
            ix3w1l['fs']['readFile']({
                'filePath': n974$,
                'encoding': '',
                'success': function (ktpgm) {
                    nj49$ != null && nj49$['runWith']([0x0]);
                },
                'fail': function (tkhmpe) {
                    nj49$ != null && nj49$['runWith']([0x1]);
                }
            });
        }, ix3w1l['down'] = function (phktm, mophx, emth, gompt) {
            mophx === void 0x0 && (mophx = 'ascill'), gompt === void 0x0 && (gompt = '');
            var r_zbn = ix3w1l['getFileNativePath'](gompt),
                j$9n74 = ix3w1l['wxdown']({
                'url': phktm,
                'filePath': r_zbn,
                'success': function (ul531) {
                    if (ul531['statusCode'] === 0xc8) ix3w1l['readFile'](ul531['filePath'], mophx, emth, gompt);
                },
                'fail': function ($n_zrf) {
                    emth != null && emth['runWith']([0x1, $n_zrf]);
                }
            });
            j$9n74['onProgressUpdate'](function (gwlx) {
                emth != null && emth['runWith']([0x2, gwlx['progress']]);
            });
        }, ix3w1l['readFile'] = function (hmoxp, olxi1w, j94e7k, us356) {
            olxi1w === void 0x0 && (olxi1w = 'ascill'), us356 === void 0x0 && (us356 = ''), ix3w1l['fs']['readFile']({
                'filePath': hmoxp,
                'encoding': olxi1w,
                'success': function (mg) {
                    if (hmoxp['indexOf']('http://') != -0x1 || hmoxp['indexOf']('https://') != -0x1) ix3w1l['onFileUpdate'](hmoxp, us356);
                    j94e7k != null && j94e7k['runWith']([0x0, mg]);
                },
                'fail': function (vqy028) {
                    if (vqy028) j94e7k != null && j94e7k['runWith']([0x1, vqy028]);
                }
            });
        }, ix3w1l['downImg'] = function (a35us, r_dfb, d_zrfb) {
            d_zrfb === void 0x0 && (d_zrfb = '');
            var b_nr = ix3w1l['wxdown']({
                'url': a35us,
                'success': function (mkhgp) {
                    mkhgp['statusCode'] === 0xc8 && ix3w1l['copyFile'](mkhgp['tempFilePath'], d_zrfb, r_dfb);
                },
                'fail': function (ilgxw) {
                    r_dfb != null && r_dfb['runWith']([0x1, ilgxw]);
                }
            });
        }, ix3w1l['copyFile'] = function (_7$n, wl31, bfz_rd) {
            var iw1xl = _7$n['split']('/'),
                mgwoi = iw1xl[iw1xl['length'] - 0x1],
                _bfzr = wl31['split']('?')[0x0],
                gkthmp = ix3w1l['getFileInfo'](wl31),
                s8yqv2 = ix3w1l['getFileNativePath'](mgwoi);
            ix3w1l['fs']['copyFile']({
                'srcPath': _7$n,
                'destPath': s8yqv2,
                'success': function (omxhpg) {
                    if (!gkthmp) ix3w1l['onSaveFile'](wl31, mgwoi), bfz_rd != null && bfz_rd['runWith']([0x0]);else {
                        if (gkthmp['readyUrl'] != wl31) ix3w1l['remove'](mgwoi, wl31, bfz_rd);
                    }
                },
                'fail': function (q82vy0) {
                    bfz_rd != null && bfz_rd['runWith']([0x1, q82vy0]);
                }
            });
        }, ix3w1l['getFileNativePath'] = function (squ28a) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + squ28a;
        }, ix3w1l['remove'] = function (s2, pgth, xlwoi) {
            pgth === void 0x0 && (pgth = '');
            var k9t4ep = ix3w1l['getFileInfo'](pgth),
                zfnr$_ = ix3w1l['getFileNativePath'](k9t4ep['md5']);
            pmkteh['loader']['clearRes'](k9t4ep['readyUrl']), ix3w1l['fs']['unlink']({
                'filePath': zfnr$_,
                'success': function (mwixog) {
                    if (pgth != '') ix3w1l['onSaveFile'](pgth, s2);
                    xlwoi != null && xlwoi['runWith']([0x0]);
                },
                'fail': function (xhiogm) {}
            });
        }, ix3w1l['onSaveFile'] = function (f_zbn, s82yq) {
            var xmow = f_zbn['split']('?')[0x0];
            ix3w1l['filesListObj'][xmow] = {
                'md5': s82yq,
                'readyUrl': f_zbn
            }, ix3w1l['fs']['writeFile']({
                'filePath': ix3w1l['fileNativeDir'] + '/' + ix3w1l['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](ix3w1l['filesListObj']),
                'success': function (f_nbzr) {
                    console['log']('写入测试测试成功：', f_nbzr);
                },
                'fail': function (_bzrd) {
                    console['log']('写入测试测试失败：', _bzrd);
                }
            });
        }, ix3w1l['existDir'] = function (db_frz, gohxi) {
            ix3w1l['fs']['mkdir']({
                'dirPath': db_frz,
                'success': function (qa8) {
                    gohxi != null && gohxi['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (_znr) {
                    if (_znr['errMsg']['indexOf']('file already exists') != -0x1) ix3w1l['readSync'](ix3w1l['fileListName'], 'utf8', gohxi);else gohxi != null && gohxi['runWith']([0x1, _znr]);
                }
            });
        }, ix3w1l['readSync'] = function (pxmhog, rdb_, mekh, u5s6a) {
            rdb_ === void 0x0 && (rdb_ = 'ascill'), u5s6a === void 0x0 && (u5s6a = '');
            var gxpom = ix3w1l['getFileNativePath'](pxmhog),
                lw6351;
            try {
                lw6351 = ix3w1l['fs']['readFileSync'](gxpom), mekh != null && mekh['runWith']([0x0, { 'data': lw6351 }]);
            } catch (owmx) {
                mekh != null && mekh['runWith']([0x1]);
            }
        }, ix3w1l['readCache'] = function () {}, ix3w1l['writeCache'] = function (tkh4) {
            var _$r7 = readyUrl['split']('?')[0x0];
            ix3w1l['filesListObj'][_$r7] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, ix3w1l['fs']['writeFile']({
                'filePath': ix3w1l['fileNativeDir'] + '/' + ix3w1l['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](ix3w1l['filesListObj']),
                'success': function (u8sq2) {},
                'fail': function (tkh4e) {}
            });
        }, ix3w1l['setNativeFileDir'] = function (hkpmet) {
            ix3w1l['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + hkpmet;
        }, ix3w1l['filesListObj'] = {}, ix3w1l['fileNativeDir'] = null, ix3w1l['fileListName'] = 'layaairfiles.txt', ix3w1l['ziyuFileData'] = {}, pomghx(ix3w1l, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), ix3w1l;
    }(u61l3),
        xwomi = function (hp4ekt) {
        function asvq8() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], asvq8['__super']['call'](this), this['_sound'] = asvq8['_createSound'](), this['_chanell'] = new $7nj_r(this['_sound']);
        }
        nj49$7(asvq8, 'laya.wx.mini.MiniSound', hp4ekt);
        var tehmkp = asvq8['prototype'];
        return tehmkp['load'] = function (pkhet) {
            var p9tk4 = this;
            pkhet = oxmwg['formatURL'](pkhet), this['url'] = pkhet;
            if (asvq8['_audioCache'][pkhet]) {
                this['event']('complete');
                return;
            }
            function woil1x() {
                if (asvq8['_null'] != undefined) p9tk4['_sound']['onCanplay'](asvq8['_null']), p9tk4['_sound']['onError'](asvq8['_null']);else try {
                    p9tk4['_sound']['onCanplay'](null), p9tk4['_sound']['onError'](null), asvq8['_null'] = null;
                } catch (ket49p) {
                    console['warn']('[wxmini] _clearSound:' + ket49p), p9tk4['_sound']['onCanplay'](hgkpmt), p9tk4['_sound']['onError'](hgkpmt), asvq8['_null'] = hgkpmt;
                }
            }
            function xmphg() {
                n_z$7r['loaded'] = !![], n_z$7r['event']('complete'), asvq8['_audioCache'][n_z$7r['url']] = n_z$7r;
            }
            function w651l(mgoxiw) {
                console['error']('errCode=' + mgoxiw['errCode'] + '  errMsg=' + mgoxiw['errMsg']), n_z$7r['event']('error');
            }
            function hgkpmt() {}
            this['_sound']['onCanplay'](xmphg), this['_sound']['onError'](w651l), this['_sound']['src'] = pkhet;
            var n_z$7r = this;
        }, tehmkp['play'] = function (kj4e79, jn97r) {
            kj4e79 === void 0x0 && (kj4e79 = 0x0), jn97r === void 0x0 && (jn97r = 0x0);
            var _znfrb, oxiw1;
            if (this['url'] == n$4j79['_tMusic']) {
                if (!asvq8['_musicAudio']) asvq8['_musicAudio'] = this['_sound'];
                _znfrb = asvq8['_musicAudio'], oxiw1 = this['_chanell'];
            } else _znfrb = this['_sound'], oxiw1 = this['_chanell'];
            return _znfrb['src'] = this['url'], _znfrb['startTime'] = 0x0, oxiw1['isStopped'] && (oxiw1['url'] = this['url'], oxiw1['loops'] = jn97r, oxiw1['startTime'] = kj4e79, oxiw1['play'](), n$4j79['addChannel'](oxiw1)), oxiw1;
        }, tehmkp['dispose'] = function () {
            var lw653 = asvq8['_audioCache'][this['url']];
            lw653 && (lw653['src'] = '', delete asvq8['_audioCache'][this['url']]);
        }, brf_(0x0, tehmkp, 'duration', function () {
            return this['_sound']['duration'];
        }), asvq8['_createSound'] = function () {
            asvq8['_id']++;
            var n497j$ = tpgo['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return n497j$;
        }, asvq8['_musicAudio'] = null, asvq8['_id'] = 0x0, asvq8['_audioCache'] = {}, asvq8['_null'] = undefined, asvq8;
    }(u61l3),
        $7nj_r = function (i1w5) {
        function oxphmg($e94) {
            this['_audio'] = null, this['_onEnd'] = null, oxphmg['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = $e94, this['_onEnd'] = ph4tke['bind'](this['__onEnd'], this), $e94['onEnded'](this['_onEnd']);
        }
        nj49$7(oxphmg, 'laya.wx.mini.MiniSoundChannel', i1w5);
        var w1oix = oxphmg['prototype'];
        return w1oix['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (pmkteh['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, w1oix['__onNull'] = function () {}, w1oix['play'] = function () {
            this['isStopped'] = ![], n$4j79['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, w1oix['stop'] = function () {
            this['isStopped'] = !![], n$4j79['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, w1oix['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, w1oix['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], n$4j79['addChannel'](this), this['_audio']['play']();
        }, brf_(0x0, w1oix, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), brf_(0x0, w1oix, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), brf_(0x0, w1oix, 'volume', function () {
            return 0x1;
        }, function (u6a351) {}), oxphmg['_null'] = undefined, oxphmg;
    }(b_zdf),
        wlo1x = function () {
        function ghpm() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = tpgo['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        nj49$7(ghpm, 'laya.wx.mini.MiniVideo');
        var zb_fnr = ghpm['prototype'];
        return zb_fnr['on'] = function (phoxm, j47ke9, pghm) {
            if (phoxm == 'loadedmetadata') this['onPlayFunc'] = pghm['bind'](j47ke9), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else phoxm == 'ended' && (this['onEndedFunC'] = pghm['bind'](j47ke9), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, zb_fnr['onTimeUpdateFunc'] = function (hemt) {
            this['position'] = hemt['position'], this['_duration'] = hemt['duration'];
        }, zb_fnr['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, zb_fnr['onended'] = function (_njr7, z7nr_$) {
            this['onEndedFunC'] = z7nr_$['bind'](_njr7), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, zb_fnr['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, zb_fnr['off'] = function (pmhtog, sy8v2, r9j$) {
            if (pmhtog == 'loadedmetadata') this['onPlayFunc'] = r9j$['bind'](sy8v2), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else pmhtog == 'ended' && (this['onEndedFunC'] = r9j$['bind'](sy8v2), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, zb_fnr['load'] = function (e94p) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = e94p;
        }, zb_fnr['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, zb_fnr['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, zb_fnr['size'] = function (l6u31, x1ilw3) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = l6u31, this['videoElement']['height'] = x1ilw3;
        }, zb_fnr['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, zb_fnr['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, brf_(0x0, zb_fnr, 'duration', function () {
            return this['_duration'];
        }), brf_(0x0, zb_fnr, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (f$zn) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = f$zn;
        }), brf_(0x0, zb_fnr, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), brf_(0x0, zb_fnr, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), brf_(0x0, zb_fnr, 'ended', function () {
            return this['videoend'];
        }), brf_(0x0, zb_fnr, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (tkgmp) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = tkgmp;
        }), brf_(0x0, zb_fnr, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (jrn9$) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = jrn9$;
        }), brf_(0x0, zb_fnr, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (j9ke47) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = j9ke47;
        }), brf_(0x0, zb_fnr, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), brf_(0x0, zb_fnr, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (s2qy8) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = s2qy8;
        }), brf_(0x0, zb_fnr, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (xgmoiw) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = xgmoiw;
        }), brf_(0x0, zb_fnr, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), brf_(0x0, zb_fnr, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (j$r7n_) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = j$r7n_;
        }), brf_(0x0, zb_fnr, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (ke4hpt) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = ke4hpt;
        }), brf_(0x0, zb_fnr, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (hmgxio) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = hmgxio;
        }), ghpm;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var dzf_rb in Laya) {
        var j7$49e = Laya[dzf_rb];
        j7$49e && j7$49e['__isclass'] && (exports[dzf_rb] = j7$49e);
    }
});