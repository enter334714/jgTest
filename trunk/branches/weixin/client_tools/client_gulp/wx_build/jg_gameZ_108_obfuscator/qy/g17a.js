var _j = wx.n$;
(function (window, document, om37_0) {
    var _vmo = om37_0['un'],
        c_73 = om37_0['uns'],
        hjkay = om37_0['static'],
        xjey = om37_0['class'],
        nd8l1 = om37_0['getset'],
        fq2ir = om37_0['__newvec'],
        riqs = laya['utils']['Browser'],
        t8bnl1 = laya['events']['Event'],
        i2rq = laya['events']['EventDispatcher'],
        m_3o70 = laya['resource']['HTMLImage'],
        kaj9g = laya['utils']['Handler'],
        ou9m = laya['display']['Input'],
        gey5h = laya['net']['Loader'],
        ir2wq = laya['maths']['Matrix'],
        kaug9v = laya['renders']['Render'],
        ak9 = laya['utils']['RunDriver'],
        qb1 = laya['media']['Sound'],
        d1tln = laya['media']['SoundChannel'],
        bsqr = laya['media']['SoundManager'],
        kuvga9 = laya['display']['Stage'],
        tbin = laya['net']['URL'],
        wqbits = laya['utils']['Utils'],
        wp2r6f = function () {
        function av9kgu() {}
        return xjey(av9kgu, 'laya.wx.mini.MiniAdpter'), av9kgu['getJson'] = function (e5jyx) {
            return JSON['parse'](e5jyx);
        }, av9kgu['init'] = function ($ez4, ka9cvu) {
            $ez4 === void 0x0 && ($ez4 = ![]), ka9cvu === void 0x0 && (ka9cvu = ![]);
            if (av9kgu['_inited']) return;
            av9kgu['window'] = window;
            if (av9kgu['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            av9kgu['_inited'] = !![], av9kgu['isZiYu'] = ka9cvu, av9kgu['isPosMsgYu'] = $ez4, av9kgu['EnvConfig'] = {}, !av9kgu['isZiYu'] && (qsnt1['setNativeFileDir']('/layaairGame'), qsnt1['existDir'](qsnt1['fileNativeDir'], kaj9g['create'](av9kgu, av9kgu['onMkdirCallBack']))), av9kgu['window']['focus'] = function () {}, om37_0['getUrlPath'] = function () {}, av9kgu['window']['logtime'] = function (d81l) {}, av9kgu['window']['alertTimeLog'] = function (e5gjhy) {}, av9kgu['window']['resetShareInfo'] = function () {}, av9kgu['window']['CanvasRenderingContext2D'] = function () {}, av9kgu['window']['CanvasRenderingContext2D']['prototype'] = av9kgu['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], av9kgu['window']['document']['body']['appendChild'] = function () {}, av9kgu['EnvConfig']['pixelRatioInt'] = 0x0, ak9['getPixelRatio'] = av9kgu['pixelRatio'], av9kgu['_preCreateElement'] = riqs['createElement'], riqs['createElement'] = av9kgu['createElement'], ak9['createShaderCondition'] = av9kgu['createShaderCondition'], wqbits['parseXMLFromString'] = av9kgu['parseXMLFromString'], ou9m['_createInputElement'] = wbstiq['_createInputElement'], av9kgu['EnvConfig']['load'] = gey5h['prototype']['load'], gey5h['prototype']['load'] = v7mo['prototype']['load'], av9kgu['isZiYu'] && $ez4 && wx['onMessage'](function (m_ov9) {
                m_ov9['isLoad'] && (qsnt1['ziyuFileData'][m_ov9['url']] = m_ov9['data']);
            });
        }, av9kgu['onMkdirCallBack'] = function ($5ze, hykg5) {
            if (!$5ze) qsnt1['filesListObj'] = JSON['parse'](hykg5['data']);
        }, av9kgu['pixelRatio'] = function () {
            if (!av9kgu['EnvConfig']['pixelRatioInt']) try {
                var _367p0 = wx['getSystemInfoSync']();
                return av9kgu['EnvConfig']['pixelRatioInt'] = _367p0['pixelRatio'], _367p0 = _367p0, _367p0['pixelRatio'];
            } catch (cvmu9a) {}
            return av9kgu['EnvConfig']['pixelRatioInt'];
        }, av9kgu['createElement'] = function (ibstn) {
            if (ibstn == 'canvas') {
                var yh5gjk;
                return av9kgu['idx'] == 0x1 ? av9kgu['isZiYu'] ? (yh5gjk = sharedCanvas, yh5gjk['style'] = {}) : yh5gjk = window['canvas'] : yh5gjk = window['wx']['createCanvas'](), av9kgu['idx']++, yh5gjk;
            } else {
                if (ibstn == 'textarea' || ibstn == 'input') return av9kgu['onCreateInput'](ibstn);else {
                    if (ibstn == 'div') {
                        var inqbt = av9kgu['_preCreateElement'](ibstn);
                        return inqbt['contains'] = function (dt81ln) {
                            return null;
                        }, inqbt['removeChild'] = function (yex5hj) {}, inqbt;
                    } else return av9kgu['_preCreateElement'](ibstn);
                }
            }
        }, av9kgu['onCreateInput'] = function (hzxye) {
            var iwqrsf = av9kgu['_preCreateElement'](hzxye);
            return iwqrsf['focus'] = wbstiq['wxinputFocus'], iwqrsf['blur'] = wbstiq['wxinputblur'], iwqrsf['style'] = {}, iwqrsf['value'] = 0x0, iwqrsf['parentElement'] = {}, iwqrsf['placeholder'] = {}, iwqrsf['type'] = {}, iwqrsf['setColor'] = function (ghk5jy) {}, iwqrsf['setType'] = function (iqr) {}, iwqrsf['setFontFace'] = function (uakjg9) {}, iwqrsf['addEventListener'] = function (qwf2ir) {}, iwqrsf['contains'] = function (tbsqn) {
                return null;
            }, iwqrsf['removeChild'] = function (kygju) {}, iwqrsf;
        }, av9kgu['createShaderCondition'] = function (hyg5ej) {
            var au9vcm = this,
                qr2iwf = function () {
                var kuv9a = hyg5ej;
                return au9vcm[hyg5ej['replace']('this.', '')];
            };
            return qr2iwf;
        }, av9kgu['EnvConfig'] = null, av9kgu['window'] = null, av9kgu['_preCreateElement'] = null, av9kgu['_inited'] = ![], av9kgu['wxRequest'] = null, av9kgu['systemInfo'] = null, av9kgu['version'] = '0.0.1', av9kgu['isZiYu'] = ![], av9kgu['isPosMsgYu'] = ![], av9kgu['parseXMLFromString'] = function (ajhgy) {
            var gkayu, sfirwq;
            ajhgy = ajhgy['replace'](/>\s+</g, '><');
            try {
                gkayu = new window['Parser']['DOMParser']()['parseFromString'](ajhgy, 'text/xml');
            } catch (qwbtsi) {
                throw '需要引入xml解析库文件';
            }
            return gkayu;
        }, av9kgu['idx'] = 0x1, av9kgu;
    }(),
        e5jhx = function () {
        function jgy5hk() {}
        xjey(jgy5hk, 'laya.wx.mini.MiniImage');
        var qtsn1b = jgy5hk['prototype'];
        return qtsn1b['_loadImage'] = function (xez45$) {
            var vco7_m = this,
                $hxze5 = ![];
            xez45$['indexOf']('layaNativeDir/') == -0x1 && ($hxze5 = !![], xez45$ = tbin['formatURL'](xez45$));
            if (!qsnt1['getFileInfo'](xez45$)) {
                if (xez45$['indexOf']('http://') != -0x1 || xez45$['indexOf']('https://') != -0x1) qsnt1['downImg'](xez45$, new kaj9g(jgy5hk, jgy5hk['onDownImgCallBack'], [xez45$, vco7_m]), xez45$);else jgy5hk['onCreateImage'](xez45$, vco7_m, !![]);
            } else jgy5hk['onCreateImage'](xez45$, vco7_m, !$hxze5);
        }, jgy5hk['onDownImgCallBack'] = function (t81, yjgk, irq2fw) {
            if (!irq2fw) jgy5hk['onCreateImage'](t81, yjgk);else yjgk['onError'](null);
        }, jgy5hk['onCreateImage'] = function (uajk, kjgu, o7mv) {
            o7mv === void 0x0 && (o7mv = ![]);
            var rwisqf;
            if (!o7mv) {
                var cvum = qsnt1['getFileInfo'](uajk),
                    kyahgj = cvum['md5'];
                rwisqf = qsnt1['getFileNativePath'](kyahgj);
            } else rwisqf = uajk;
            if (kjgu['imgCache'] == null) kjgu['imgCache'] = {};
            var ip2rw;
            function eyhz5() {
                ip2rw['onload'] = null, ip2rw['onerror'] = null, delete kjgu['imgCache'][uajk];
            }
            ;
            var p6037_ = function () {
                eyhz5(), kjgu['onLoaded'](ip2rw);
            },
                yajhg = function () {
                eyhz5(), kjgu['event']('error', 'Load image failed');
            };
            kjgu['_type'] == 'nativeimage' ? (ip2rw = new riqs['window']['Image'](), ip2rw['crossOrigin'] = '', ip2rw['onload'] = p6037_, ip2rw['onerror'] = yajhg, ip2rw['src'] = rwisqf, kjgu['imgCache'][uajk] = ip2rw) : new m_3o70['create'](rwisqf, {
                'onload': p6037_,
                'onerror': yajhg,
                'onCreate': function (qrsifw) {
                    ip2rw = qrsifw, kjgu['imgCache'][uajk] = qrsifw;
                }
            });
        }, jgy5hk;
    }(),
        wbstiq = function () {
        function rpiw() {}
        return xjey(rpiw, 'laya.wx.mini.MiniInput'), rpiw['_createInputElement'] = function () {
            ou9m['_initInput'](ou9m['area'] = riqs['createElement']('textarea')), ou9m['_initInput'](ou9m['input'] = riqs['createElement']('input')), ou9m['inputContainer'] = riqs['createElement']('div'), ou9m['inputContainer']['style']['position'] = 'absolute', ou9m['inputContainer']['style']['zIndex'] = 0x186a0, riqs['container']['appendChild'](ou9m['inputContainer']), ou9m['inputContainer']['setPos'] = function (oc9_vm, fp6) {
                ou9m['inputContainer']['style']['left'] = oc9_vm + 'px', ou9m['inputContainer']['style']['top'] = fp6 + 'px';
            }, om37_0['stage']['on']('resize', null, rpiw['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (mvu9co) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), bsqr['_soundClass'] = ua9jkg, bsqr['_musicClass'] = ua9jkg, window['_videoClass'] = hge5;
        }, rpiw['_onStageResize'] = function () {
            var ov9_c = om37_0['stage']['_canvasTransform']['identity']();
            ov9_c['scale'](riqs['width'] / kaug9v['canvas']['width'] / ak9['getPixelRatio'](), riqs['height'] / kaug9v['canvas']['height'] / ak9['getPixelRatio']());
        }, rpiw['wxinputFocus'] = function (hxyze) {
            var snibq = ou9m['inputElement']['target'];
            if (snibq && !snibq['editable']) return;
            wp2r6f['window']['wx']['offKeyboardConfirm'](), wp2r6f['window']['wx']['offKeyboardInput'](), wp2r6f['window']['wx']['showKeyboard']({
                'defaultValue': snibq['text'],
                'maxLength': snibq['maxChars'],
                'multiple': snibq['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (c9ouv) {},
                'fail': function (b8l1n) {}
            }), wp2r6f['window']['wx']['onKeyboardConfirm'](function (zeh5yx) {
                var va9ukc = zeh5yx ? zeh5yx['value'] : '';
                snibq['text'] = va9ukc, snibq['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), wp2r6f['window']['wx']['onKeyboardInput'](function (sbq1nt) {
                var q1tsb = sbq1nt ? sbq1nt['value'] : '';
                if (!snibq['multiline']) {
                    if (q1tsb['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                snibq['text'] = q1tsb, snibq['event']('input');
            });
        }, rpiw['inputEnter'] = function () {
            ou9m['inputElement']['target']['focus'] = ![];
        }, rpiw['wxinputblur'] = function () {
            rpiw['hideKeyboard']();
        }, rpiw['hideKeyboard'] = function () {
            wp2r6f['window']['wx']['offKeyboardConfirm'](), wp2r6f['window']['wx']['offKeyboardInput'](), wp2r6f['window']['wx']['hideKeyboard']({
                'success': function (kjyhg) {
                    console['log']('隐藏键盘');
                },
                'fail': function (ipfwr2) {
                    console['log']('隐藏键盘出错:' + (ipfwr2 ? ipfwr2['errMsg'] : ''));
                }
            });
        }, rpiw;
    }(),
        v7mo = function () {
        function irwqbs() {}
        xjey(irwqbs, 'laya.wx.mini.MiniLoader');
        var c9om = irwqbs['prototype'];
        return c9om['load'] = function (hy5ze, g5eyj, ln81, gjuak, l8tbn1) {
            ln81 === void 0x0 && (ln81 = !![]), l8tbn1 === void 0x0 && (l8tbn1 = ![]);
            var gj5kyh = this;
            gj5kyh['_url'] = hy5ze;
            if (hy5ze['indexOf']('data:image') === 0x0) gj5kyh['_type'] = g5eyj = 'image';else gj5kyh['_type'] = g5eyj || (g5eyj = gj5kyh['getTypeFromUrl'](hy5ze));
            gj5kyh['_cache'] = ln81, gj5kyh['_data'] = null;
            var yxh5ej = 'ascii';
            if (hy5ze['indexOf']('.fnt') != -0x1) yxh5ej = 'utf8';else g5eyj == 'arraybuffer' && (yxh5ej = '');
            ;
            var f6p0 = wqbits['getFileExtension'](hy5ze);
            if (irwqbs['_fileTypeArr']['indexOf'](f6p0) != -0x1) wp2r6f['EnvConfig']['load']['call'](this, hy5ze, g5eyj, ln81, gjuak, l8tbn1);else {
                if (!qsnt1['getFileInfo'](hy5ze)) {
                    if (hy5ze['indexOf']('layaNativeDir/') != -0x1) {
                        if (wp2r6f['isZiYu']) {
                            var f2pr6w = qsnt1['ziyuFileData'][hy5ze];
                            gj5kyh['onLoaded'](f2pr6w);
                            return;
                        } else {
                            cosnole['log']('read read'), qsnt1['read'](hy5ze, yxh5ej, new kaj9g(irwqbs, irwqbs['onReadNativeCallBack'], [yxh5ej, hy5ze, g5eyj, ln81, gjuak, l8tbn1, gj5kyh]));
                            return;
                        }
                    }
                    if (tbin['rootPath'] == '') var yhaj = hy5ze;else yhaj = hy5ze['split'](tbin['rootPath'])[0x0];
                    hy5ze['indexOf']('http://') != -0x1 || hy5ze['indexOf']('https://') != -0x1 ? wp2r6f['EnvConfig']['load']['call'](gj5kyh, hy5ze, g5eyj, ln81, gjuak, l8tbn1) : qsnt1['readFile'](yhaj, yxh5ej, new kaj9g(irwqbs, irwqbs['onReadNativeCallBack'], [yxh5ej, hy5ze, g5eyj, ln81, gjuak, l8tbn1, gj5kyh]), hy5ze);
                } else wp2r6f['EnvConfig']['load']['call'](this, hy5ze, g5eyj, ln81, gjuak, l8tbn1);
            }
        }, c9om['resMgrLoad'] = function (_m30o, isqrb, rf2i, ahjyk, qtibns, a9j, mauc9) {
            rf2i === void 0x0 && (rf2i = 0x0), ahjyk === void 0x0 && (ahjyk = ![]), qtibns === void 0x0 && (qtibns = ![]), a9j === void 0x0 && (a9j = 0x0), mauc9 === void 0x0 && (mauc9 = 0x3), _m30o['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', _m30o), wp2r6f['EnvConfig']['resMgrLoad'](_m30o, (tn1b, iwrpf2, sn8b1) => {
                irwqbs['prototype']['resMgrLoadCallBack'](tn1b, iwrpf2, sn8b1, isqrb);
            }, rf2i, ahjyk, qtibns, a9j, mauc9);
        }, c9om['resMgrLoadCallBack'] = function (yhagj, ajkg9u, jykgau, qnbt1s) {
            console['log']('buff:::', yhagj, jykgau, qsnt1['fileNativeDir'] + '///' + qsnt1['fileListName']), qnbt1s(yhagj, ajkg9u, jykgau);
        }, c9om['clearRes'] = function (ukag9, jkgh5y) {
            jkgh5y === void 0x0 && (jkgh5y = ![]);
            var rwbsi = this;
            rwbsi['clearRes'](ukag9, jkgh5y);
            var wtbiqs = qsnt1['getFileInfo'](ukag9);
            if (wtbiqs && (ukag9['indexOf']('http://') != -0x1 || ukag9['indexOf']('https://') != -0x1)) {
                var j5hyge = wtbiqs['md5'],
                    x$e4z5 = qsnt1['getFileNativePath'](j5hyge);
                qsnt1['remove'](x$e4z5);
            }
        }, irwqbs['onReadNativeCallBack'] = function (tqsbi, iwqbsr, ajkuyg, eghj, gyaku, tsqbi, bnt81l, hez$x, tisbq) {
            eghj === void 0x0 && (eghj = !![]), tsqbi === void 0x0 && (tsqbi = ![]), hez$x === void 0x0 && (hez$x = 0x0);
            if (!hez$x) {
                var cm9_vo;
                if (ajkuyg == 'json' || ajkuyg == 'atlas') cm9_vo = wp2r6f['getJson'](tisbq['data']);else ajkuyg == 'xml' ? cm9_vo = wqbits['parseXMLFromString'](tisbq['data']) : cm9_vo = tisbq['data'];
                bnt81l['onLoaded'](cm9_vo), !wp2r6f['isZiYu'] && wp2r6f['isPosMsgYu'] && ajkuyg != 'arraybuffer' && wx['postMessage']({
                    'url': iwqbsr,
                    'data': cm9_vo,
                    'isLoad': !![]
                });
            } else hez$x == 0x1 && wp2r6f['EnvConfig']['load']['call'](bnt81l, iwqbsr, ajkuyg, eghj, gyaku, tsqbi);
        }, hjkay(irwqbs, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), irwqbs;
    }(),
        qsnt1 = function (btisqw) {
        function gjahyk() {
            gjahyk['__super']['call'](this);
            ;
        }
        return xjey(gjahyk, 'laya.wx.mini.MiniFileMgr', btisqw), gjahyk['isLoadFile'] = function (xje5) {
            return gjahyk['_fileTypeArr']['indexOf'](xje5) != -0x1 ? !![] : ![];
        }, gjahyk['getFileInfo'] = function (v7_moc) {
            var acvu9m = v7_moc['split']('?')[0x0],
                $zx5 = gjahyk['filesListObj'][acvu9m];
            if ($zx5 == null) return null;else return $zx5;
            return null;
        }, gjahyk['onFileUpdate'] = function (wfr62p, pf0r62) {
            var lndt8 = wfr62p['split']('/'),
                akvgu = lndt8[lndt8['length'] - 0x1],
                _mc9ov = gjahyk['getFileInfo'](pf0r62);
            if (_mc9ov == null) gjahyk['onSaveFile'](pf0r62, akvgu);else {
                if (_mc9ov['readyUrl'] != pf0r62) gjahyk['remove'](akvgu, pf0r62);
            }
        }, gjahyk['exits'] = function (f0p623, f0263) {
            var frsqiw = gjahyk['getFileNativePath'](f0p623);
            gjahyk['fs']['getFileInfo']({
                'filePath': frsqiw,
                'success': function (cua9kv) {
                    f0263 != null && f0263['runWith']([0x0, cua9kv]);
                },
                'fail': function (gkuyja) {
                    f0263 != null && f0263['runWith']([0x1, gkuyja]);
                }
            });
        }, gjahyk['read'] = function (jkhgy, c37mo_, itbqns, fi2p) {
            c37mo_ === void 0x0 && (c37mo_ = 'ascill'), fi2p === void 0x0 && (fi2p = '');
            var vc9kua;
            fi2p != '' ? vc9kua = gjahyk['getFileNativePath'](jkhgy) : vc9kua = jkhgy, gjahyk['fs']['readFile']({
                'filePath': vc9kua,
                'encoding': c37mo_,
                'success': function (g5hj) {
                    itbqns != null && itbqns['runWith']([0x0, g5hj]);
                },
                'fail': function (co9mv) {
                    if (co9mv && fi2p != '') gjahyk['down'](fi2p, c37mo_, itbqns, fi2p);else itbqns != null && itbqns['runWith']([0x1]);
                }
            });
        }, gjahyk['readNativeFile'] = function (kygah, xyz5h) {
            gjahyk['fs']['readFile']({
                'filePath': kygah,
                'encoding': '',
                'success': function (akgv9u) {
                    xyz5h != null && xyz5h['runWith']([0x0]);
                },
                'fail': function (td8n1l) {
                    xyz5h != null && xyz5h['runWith']([0x1]);
                }
            });
        }, gjahyk['down'] = function (kgyju, m_o30, i2wrqf, qirwfs) {
            m_o30 === void 0x0 && (m_o30 = 'ascill'), qirwfs === void 0x0 && (qirwfs = '');
            var ntqbsi = gjahyk['getFileNativePath'](qirwfs),
                cvm_o9 = gjahyk['wxdown']({
                'url': kgyju,
                'filePath': ntqbsi,
                'success': function (_o706) {
                    if (_o706['statusCode'] === 0xc8) gjahyk['readFile'](_o706['filePath'], m_o30, i2wrqf, qirwfs);
                },
                'fail': function (yh5kg) {
                    i2wrqf != null && i2wrqf['runWith']([0x1, yh5kg]);
                }
            });
            cvm_o9['onProgressUpdate'](function (ez5hx$) {
                i2wrqf != null && i2wrqf['runWith']([0x2, ez5hx$['progress']]);
            });
        }, gjahyk['readFile'] = function (pr62f0, umvca, jhy5, m_vo9) {
            umvca === void 0x0 && (umvca = 'ascill'), m_vo9 === void 0x0 && (m_vo9 = ''), gjahyk['fs']['readFile']({
                'filePath': pr62f0,
                'encoding': umvca,
                'success': function (cvomu) {
                    if (pr62f0['indexOf']('http://') != -0x1 || pr62f0['indexOf']('https://') != -0x1) gjahyk['onFileUpdate'](pr62f0, m_vo9);
                    jhy5 != null && jhy5['runWith']([0x0, cvomu]);
                },
                'fail': function (m_o0) {
                    if (m_o0) jhy5 != null && jhy5['runWith']([0x1, m_o0]);
                }
            });
        }, gjahyk['downImg'] = function (r602p, mvo_7, p26fr) {
            p26fr === void 0x0 && (p26fr = '');
            var kajghy = gjahyk['wxdown']({
                'url': r602p,
                'success': function (wqirbs) {
                    wqirbs['statusCode'] === 0xc8 && gjahyk['copyFile'](wqirbs['tempFilePath'], p26fr, mvo_7);
                },
                'fail': function (hz5ye) {
                    mvo_7 != null && mvo_7['runWith']([0x1, hz5ye]);
                }
            });
        }, gjahyk['copyFile'] = function (t8l, ehx5$z, fwrq2i) {
            var bns18t = t8l['split']('/'),
                o76_3 = bns18t[bns18t['length'] - 0x1],
                kayjh = ehx5$z['split']('?')[0x0],
                prwi2f = gjahyk['getFileInfo'](ehx5$z),
                oc9m = gjahyk['getFileNativePath'](o76_3);
            gjahyk['fs']['copyFile']({
                'srcPath': t8l,
                'destPath': oc9m,
                'success': function (ca9m) {
                    if (!prwi2f) gjahyk['onSaveFile'](ehx5$z, o76_3), fwrq2i != null && fwrq2i['runWith']([0x0]);else {
                        if (prwi2f['readyUrl'] != ehx5$z) gjahyk['remove'](o76_3, ehx5$z, fwrq2i);
                    }
                },
                'fail': function (zey5xh) {
                    fwrq2i != null && fwrq2i['runWith']([0x1, zey5xh]);
                }
            });
        }, gjahyk['getFileNativePath'] = function (nsiqb) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + nsiqb;
        }, gjahyk['remove'] = function (tl8d1, agkh, _om70) {
            agkh === void 0x0 && (agkh = '');
            var sqfriw = gjahyk['getFileInfo'](agkh),
                wfqsri = gjahyk['getFileNativePath'](sqfriw['md5']);
            om37_0['loader']['clearRes'](sqfriw['readyUrl']), gjahyk['fs']['unlink']({
                'filePath': wfqsri,
                'success': function (_o07m3) {
                    if (agkh != '') gjahyk['onSaveFile'](agkh, tl8d1);
                    _om70 != null && _om70['runWith']([0x0]);
                },
                'fail': function (_7cvm) {}
            });
        }, gjahyk['onSaveFile'] = function (gak9uj, kguaj) {
            var c9vmuo = gak9uj['split']('?')[0x0];
            gjahyk['filesListObj'][c9vmuo] = {
                'md5': kguaj,
                'readyUrl': gak9uj
            }, gjahyk['fs']['writeFile']({
                'filePath': gjahyk['fileNativeDir'] + '/' + gjahyk['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](gjahyk['filesListObj']),
                'success': function (hxyz5) {
                    console['log']('写入测试测试成功：', hxyz5);
                },
                'fail': function (wrqifs) {
                    console['log']('写入测试测试失败：', wrqifs);
                }
            });
        }, gjahyk['existDir'] = function (rfwsq, hkj5) {
            gjahyk['fs']['mkdir']({
                'dirPath': rfwsq,
                'success': function (ujakyg) {
                    hkj5 != null && hkj5['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (kvag9) {
                    if (kvag9['errMsg']['indexOf']('file already exists') != -0x1) gjahyk['readSync'](gjahyk['fileListName'], 'utf8', hkj5);else hkj5 != null && hkj5['runWith']([0x1, kvag9]);
                }
            });
        }, gjahyk['readSync'] = function (cm3o_, m703_, isfqw, qtbws) {
            m703_ === void 0x0 && (m703_ = 'ascill'), qtbws === void 0x0 && (qtbws = '');
            var h5jyex = gjahyk['getFileNativePath'](cm3o_),
                frswi;
            try {
                frswi = gjahyk['fs']['readFileSync'](h5jyex), isfqw != null && isfqw['runWith']([0x0, { 'data': frswi }]);
            } catch (pf2irw) {
                isfqw != null && isfqw['runWith']([0x1]);
            }
        }, gjahyk['readCache'] = function () {}, gjahyk['writeCache'] = function (brws) {
            var ghk5j = readyUrl['split']('?')[0x0];
            gjahyk['filesListObj'][ghk5j] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, gjahyk['fs']['writeFile']({
                'filePath': gjahyk['fileNativeDir'] + '/' + gjahyk['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](gjahyk['filesListObj']),
                'success': function (friw2) {},
                'fail': function (kvc9u) {}
            });
        }, gjahyk['setNativeFileDir'] = function (o7cmv_) {
            gjahyk['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + o7cmv_;
        }, gjahyk['filesListObj'] = {}, gjahyk['fileNativeDir'] = null, gjahyk['fileListName'] = 'layaairfiles.txt', gjahyk['ziyuFileData'] = {}, hjkay(gjahyk, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), gjahyk;
    }(i2rq),
        ua9jkg = function (y5jxeh) {
        function mc9uav() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], mc9uav['__super']['call'](this), this['_sound'] = mc9uav['_createSound'](), this['_chanell'] = new wip2f(this['_sound']);
        }
        xjey(mc9uav, 'laya.wx.mini.MiniSound', y5jxeh);
        var rwqib = mc9uav['prototype'];
        return rwqib['load'] = function (ykugja) {
            var u9mvoc = this;
            ykugja = tbin['formatURL'](ykugja), this['url'] = ykugja;
            if (mc9uav['_audioCache'][ykugja]) {
                this['event']('complete');
                return;
            }
            function ua9gj() {
                if (mc9uav['_null'] != undefined) u9mvoc['_sound']['onCanplay'](mc9uav['_null']), u9mvoc['_sound']['onError'](mc9uav['_null']);else try {
                    u9mvoc['_sound']['onCanplay'](null), u9mvoc['_sound']['onError'](null), mc9uav['_null'] = null;
                } catch (s1b8) {
                    console['warn']('[wxmini] _clearSound:' + s1b8), u9mvoc['_sound']['onCanplay'](rqsif), u9mvoc['_sound']['onError'](rqsif), mc9uav['_null'] = rqsif;
                }
            }
            function jkuyag() {
                b1tq['loaded'] = !![], b1tq['event']('complete'), mc9uav['_audioCache'][b1tq['url']] = b1tq;
            }
            function vk9uag(siqtwb) {
                console['error']('errCode=' + siqtwb['errCode'] + '  errMsg=' + siqtwb['errMsg']), b1tq['event']('error');
            }
            function rqsif() {}
            this['_sound']['onCanplay'](jkuyag), this['_sound']['onError'](vk9uag), this['_sound']['src'] = ykugja;
            var b1tq = this;
        }, rwqib['play'] = function (heyjg5, p230f) {
            heyjg5 === void 0x0 && (heyjg5 = 0x0), p230f === void 0x0 && (p230f = 0x0);
            var co7m_, rsbqwi;
            if (this['url'] == bsqr['_tMusic']) {
                if (!mc9uav['_musicAudio']) mc9uav['_musicAudio'] = this['_sound'];
                co7m_ = mc9uav['_musicAudio'], rsbqwi = this['_chanell'];
            } else co7m_ = this['_sound'], rsbqwi = this['_chanell'];
            return co7m_['src'] = this['url'], co7m_['startTime'] = 0x0, rsbqwi['isStopped'] && (rsbqwi['url'] = this['url'], rsbqwi['loops'] = p230f, rsbqwi['startTime'] = heyjg5, rsbqwi['play'](), bsqr['addChannel'](rsbqwi)), rsbqwi;
        }, rwqib['dispose'] = function () {
            var m7c3_ = mc9uav['_audioCache'][this['url']];
            m7c3_ && (m7c3_['src'] = '', delete mc9uav['_audioCache'][this['url']]);
        }, nd8l1(0x0, rwqib, 'duration', function () {
            return this['_sound']['duration'];
        }), mc9uav['_createSound'] = function () {
            mc9uav['_id']++;
            var t18d = wp2r6f['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return t18d;
        }, mc9uav['_musicAudio'] = null, mc9uav['_id'] = 0x0, mc9uav['_audioCache'] = {}, mc9uav['_null'] = undefined, mc9uav;
    }(i2rq),
        wip2f = function (exjh5y) {
        function kjgyua(q2wr) {
            this['_audio'] = null, this['_onEnd'] = null, kjgyua['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = q2wr, this['_onEnd'] = wqbits['bind'](this['__onEnd'], this), q2wr['onEnded'](this['_onEnd']);
        }
        xjey(kjgyua, 'laya.wx.mini.MiniSoundChannel', exjh5y);
        var e$5zxh = kjgyua['prototype'];
        return e$5zxh['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (om37_0['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, e$5zxh['__onNull'] = function () {}, e$5zxh['play'] = function () {
            this['isStopped'] = ![], bsqr['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, e$5zxh['stop'] = function () {
            this['isStopped'] = !![], bsqr['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, e$5zxh['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, e$5zxh['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], bsqr['addChannel'](this), this['_audio']['play']();
        }, nd8l1(0x0, e$5zxh, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), nd8l1(0x0, e$5zxh, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), nd8l1(0x0, e$5zxh, 'volume', function () {
            return 0x1;
        }, function (isqrw) {}), kjgyua['_null'] = undefined, kjgyua;
    }(d1tln),
        hge5 = function () {
        function sifr() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = wp2r6f['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        xjey(sifr, 'laya.wx.mini.MiniVideo');
        var bstqwi = sifr['prototype'];
        return bstqwi['on'] = function (r6p0f, jkg5hy, vgak9u) {
            if (r6p0f == 'loadedmetadata') this['onPlayFunc'] = vgak9u['bind'](jkg5hy), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else r6p0f == 'ended' && (this['onEndedFunC'] = vgak9u['bind'](jkg5hy), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, bstqwi['onTimeUpdateFunc'] = function (vcam) {
            this['position'] = vcam['position'], this['_duration'] = vcam['duration'];
        }, bstqwi['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, bstqwi['onended'] = function (d81n, c9vku) {
            this['onEndedFunC'] = c9vku['bind'](d81n), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, bstqwi['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, bstqwi['off'] = function (o603_, g5jhe, dltn) {
            if (o603_ == 'loadedmetadata') this['onPlayFunc'] = dltn['bind'](g5jhe), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else o603_ == 'ended' && (this['onEndedFunC'] = dltn['bind'](g5jhe), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, bstqwi['load'] = function (iwqbr) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = iwqbr;
        }, bstqwi['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, bstqwi['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, bstqwi['size'] = function (yguaj, sqwr) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = yguaj, this['videoElement']['height'] = sqwr;
        }, bstqwi['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, bstqwi['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, nd8l1(0x0, bstqwi, 'duration', function () {
            return this['_duration'];
        }), nd8l1(0x0, bstqwi, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (x5yz) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = x5yz;
        }), nd8l1(0x0, bstqwi, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), nd8l1(0x0, bstqwi, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), nd8l1(0x0, bstqwi, 'ended', function () {
            return this['videoend'];
        }), nd8l1(0x0, bstqwi, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (t1sqb) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = t1sqb;
        }), nd8l1(0x0, bstqwi, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (yxe5hz) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = yxe5hz;
        }), nd8l1(0x0, bstqwi, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (rf26p0) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = rf26p0;
        }), nd8l1(0x0, bstqwi, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), nd8l1(0x0, bstqwi, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (tqsiw) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = tqsiw;
        }), nd8l1(0x0, bstqwi, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (rwp) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = rwp;
        }), nd8l1(0x0, bstqwi, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), nd8l1(0x0, bstqwi, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (_o0763) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = _o0763;
        }), nd8l1(0x0, bstqwi, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (rpfw6) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = rpfw6;
        }), nd8l1(0x0, bstqwi, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (ukgva9) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = ukgva9;
        }), sifr;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var vma in Laya) {
        var wpr62 = Laya[vma];
        wpr62 && wpr62['__isclass'] && (exports[vma] = wpr62);
    }
});