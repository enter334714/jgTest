var _ = wx.y$;
(function (window, document, bfeda) {
    var kgihjf = bfeda['un'],
        swvr = bfeda['uns'],
        rqmpno = bfeda['static'],
        ptsoqr = bfeda['class'],
        fedg = bfeda['getset'],
        ljgk = bfeda['__newvec'],
        torqps = laya['utils']['Browser'],
        rtpoqs = laya['events']['Event'],
        vwrut = laya['events']['EventDispatcher'],
        ghklij = laya['resource']['HTMLImage'],
        ljh = laya['utils']['Handler'],
        nkplm = laya['display']['Input'],
        suqvrt = laya['net']['Loader'],
        prqus = laya['maths']['Matrix'],
        qpnmlo = laya['renders']['Render'],
        dafcbe = laya['utils']['RunDriver'],
        injlmk = laya['media']['Sound'],
        $_zy0x = laya['media']['SoundChannel'],
        gebdf = laya['media']['SoundManager'],
        xyz$vw = laya['display']['Stage'],
        qprtus = laya['net']['URL'],
        mlinj = laya['utils']['Utils'],
        rqvts = function () {
        function qmopnl() {}
        return ptsoqr(qmopnl, 'laya.wx.mini.MiniAdpter'), qmopnl['getJson'] = function (hgcd) {
            return JSON['parse'](hgcd);
        }, qmopnl['init'] = function (tspq, vxwut) {
            tspq === void 0x0 && (tspq = ![]), vxwut === void 0x0 && (vxwut = ![]);
            if (qmopnl['_inited']) return;
            qmopnl['window'] = window;
            if (qmopnl['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            qmopnl['_inited'] = !![], qmopnl['isZiYu'] = vxwut, qmopnl['isPosMsgYu'] = tspq, qmopnl['EnvConfig'] = {}, !qmopnl['isZiYu'] && (lmnqp['setNativeFileDir']('/layaairGame'), lmnqp['existDir'](lmnqp['fileNativeDir'], ljh['create'](qmopnl, qmopnl['onMkdirCallBack']))), qmopnl['window']['focus'] = function () {}, bfeda['getUrlPath'] = function () {}, qmopnl['window']['logtime'] = function (qsrpon) {}, qmopnl['window']['alertTimeLog'] = function (oqsrp) {}, qmopnl['window']['resetShareInfo'] = function () {}, qmopnl['window']['CanvasRenderingContext2D'] = function () {}, qmopnl['window']['CanvasRenderingContext2D']['prototype'] = qmopnl['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], qmopnl['window']['document']['body']['appendChild'] = function () {}, qmopnl['EnvConfig']['pixelRatioInt'] = 0x0, dafcbe['getPixelRatio'] = qmopnl['pixelRatio'], qmopnl['_preCreateElement'] = torqps['createElement'], torqps['createElement'] = qmopnl['createElement'], dafcbe['createShaderCondition'] = qmopnl['createShaderCondition'], mlinj['parseXMLFromString'] = qmopnl['parseXMLFromString'], nkplm['_createInputElement'] = xwvus['_createInputElement'], qmopnl['EnvConfig']['load'] = suqvrt['prototype']['load'], suqvrt['prototype']['load'] = vuywtx['prototype']['load'], qmopnl['isZiYu'] && tspq && wx['onMessage'](function (tuywvx) {
                tuywvx['isLoad'] && (lmnqp['ziyuFileData'][tuywvx['url']] = tuywvx['data']);
            });
        }, qmopnl['onMkdirCallBack'] = function (pmornq, $_13) {
            if (!pmornq) lmnqp['filesListObj'] = JSON['parse']($_13['data']);
        }, qmopnl['pixelRatio'] = function () {
            if (!qmopnl['EnvConfig']['pixelRatioInt']) try {
                var nmkojl = wx['getSystemInfoSync']();
                return qmopnl['EnvConfig']['pixelRatioInt'] = nmkojl['pixelRatio'], nmkojl = nmkojl, nmkojl['pixelRatio'];
            } catch (_10$2z) {}
            return qmopnl['EnvConfig']['pixelRatioInt'];
        }, qmopnl['createElement'] = function (defgbc) {
            if (defgbc == 'canvas') {
                var rpqnmo;
                return qmopnl['idx'] == 0x1 ? qmopnl['isZiYu'] ? (rpqnmo = sharedCanvas, rpqnmo['style'] = {}) : rpqnmo = window['canvas'] : rpqnmo = window['wx']['createCanvas'](), qmopnl['idx']++, rpqnmo;
            } else {
                if (defgbc == 'textarea' || defgbc == 'input') return qmopnl['onCreateInput'](defgbc);else {
                    if (defgbc == 'div') {
                        var dfaec = qmopnl['_preCreateElement'](defgbc);
                        return dfaec['contains'] = function (knomjl) {
                            return null;
                        }, dfaec['removeChild'] = function (jkmiln) {}, dfaec;
                    } else return qmopnl['_preCreateElement'](defgbc);
                }
            }
        }, qmopnl['onCreateInput'] = function (igkfh) {
            var jlgkhi = qmopnl['_preCreateElement'](igkfh);
            return jlgkhi['focus'] = xwvus['wxinputFocus'], jlgkhi['blur'] = xwvus['wxinputblur'], jlgkhi['style'] = {}, jlgkhi['value'] = 0x0, jlgkhi['parentElement'] = {}, jlgkhi['placeholder'] = {}, jlgkhi['type'] = {}, jlgkhi['setColor'] = function (efbdac) {}, jlgkhi['setType'] = function (ihgjlk) {}, jlgkhi['setFontFace'] = function (tsrqv) {}, jlgkhi['addEventListener'] = function (vxz$) {}, jlgkhi['contains'] = function (rvstw) {
                return null;
            }, jlgkhi['removeChild'] = function (lkjmi) {}, jlgkhi;
        }, qmopnl['createShaderCondition'] = function (wzvx$) {
            var cefghd = this,
                fchg = function () {
                var opqr = wzvx$;
                return cefghd[wzvx$['replace']('this.', '')];
            };
            return fchg;
        }, qmopnl['EnvConfig'] = null, qmopnl['window'] = null, qmopnl['_preCreateElement'] = null, qmopnl['_inited'] = ![], qmopnl['wxRequest'] = null, qmopnl['systemInfo'] = null, qmopnl['version'] = '0.0.1', qmopnl['isZiYu'] = ![], qmopnl['isPosMsgYu'] = ![], qmopnl['parseXMLFromString'] = function (dafceb) {
            var fhgeji, tvsx;
            dafceb = dafceb['replace'](/>\s+</g, '><');
            try {
                fhgeji = new window['Parser']['DOMParser']()['parseFromString'](dafceb, 'text/xml');
            } catch (pqrmon) {
                throw '需要引入xml解析库文件';
            }
            return fhgeji;
        }, qmopnl['idx'] = 0x1, qmopnl;
    }(),
        jlnmo = function () {
        function opkmln() {}
        ptsoqr(opkmln, 'laya.wx.mini.MiniImage');
        var $2_31 = opkmln['prototype'];
        return $2_31['_loadImage'] = function (hgi) {
            var mplnko = this,
                z10$ = ![];
            hgi['indexOf']('layaNativeDir/') == -0x1 && (z10$ = !![], hgi = qprtus['formatURL'](hgi));
            if (!lmnqp['getFileInfo'](hgi)) {
                if (hgi['indexOf']('http://') != -0x1 || hgi['indexOf']('https://') != -0x1) lmnqp['downImg'](hgi, new ljh(opkmln, opkmln['onDownImgCallBack'], [hgi, mplnko]), hgi);else opkmln['onCreateImage'](hgi, mplnko, !![]);
            } else opkmln['onCreateImage'](hgi, mplnko, !z10$);
        }, opkmln['onDownImgCallBack'] = function (hilmkj, spuqt, pqsrtu) {
            if (!pqsrtu) opkmln['onCreateImage'](hilmkj, spuqt);else spuqt['onError'](null);
        }, opkmln['onCreateImage'] = function (gijhf, vzuwyx, efbacd) {
            efbacd === void 0x0 && (efbacd = ![]);
            var mihljk;
            if (!efbacd) {
                var wvtsxu = lmnqp['getFileInfo'](gijhf),
                    vzyw$x = wvtsxu['md5'];
                mihljk = lmnqp['getFileNativePath'](vzyw$x);
            } else mihljk = gijhf;
            if (vzuwyx['imgCache'] == null) vzuwyx['imgCache'] = {};
            var gcdbef;
            function $_2130() {
                gcdbef['onload'] = null, gcdbef['onerror'] = null, delete vzuwyx['imgCache'][gijhf];
            }
            ;
            var nmr = function () {
                $_2130(), vzuwyx['onLoaded'](gcdbef);
            },
                wvtrsu = function () {
                $_2130(), vzuwyx['event']('error', 'Load image failed');
            };
            vzuwyx['_type'] == 'nativeimage' ? (gcdbef = new torqps['window']['Image'](), gcdbef['crossOrigin'] = '', gcdbef['onload'] = nmr, gcdbef['onerror'] = wvtrsu, gcdbef['src'] = mihljk, vzuwyx['imgCache'][gijhf] = gcdbef) : new ghklij['create'](mihljk, {
                'onload': nmr,
                'onerror': wvtrsu,
                'onCreate': function (y10_$) {
                    gcdbef = y10_$, vzuwyx['imgCache'][gijhf] = y10_$;
                }
            });
        }, opkmln;
    }(),
        xwvus = function () {
        function mnkpo() {}
        return ptsoqr(mnkpo, 'laya.wx.mini.MiniInput'), mnkpo['_createInputElement'] = function () {
            nkplm['_initInput'](nkplm['area'] = torqps['createElement']('textarea')), nkplm['_initInput'](nkplm['input'] = torqps['createElement']('input')), nkplm['inputContainer'] = torqps['createElement']('div'), nkplm['inputContainer']['style']['position'] = 'absolute', nkplm['inputContainer']['style']['zIndex'] = 0x186a0, torqps['container']['appendChild'](nkplm['inputContainer']), nkplm['inputContainer']['setPos'] = function (uxtvsw, gcdfeh) {
                nkplm['inputContainer']['style']['left'] = uxtvsw + 'px', nkplm['inputContainer']['style']['top'] = gcdfeh + 'px';
            }, bfeda['stage']['on']('resize', null, mnkpo['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (zwvxu) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), gebdf['_soundClass'] = $zxy, gebdf['_musicClass'] = $zxy, window['_videoClass'] = xuvz;
        }, mnkpo['_onStageResize'] = function () {
            var mknplo = bfeda['stage']['_canvasTransform']['identity']();
            mknplo['scale'](torqps['width'] / qpnmlo['canvas']['width'] / dafcbe['getPixelRatio'](), torqps['height'] / qpnmlo['canvas']['height'] / dafcbe['getPixelRatio']());
        }, mnkpo['wxinputFocus'] = function (hmli) {
            var konlmj = nkplm['inputElement']['target'];
            if (konlmj && !konlmj['editable']) return;
            rqvts['window']['wx']['offKeyboardConfirm'](), rqvts['window']['wx']['offKeyboardInput'](), rqvts['window']['wx']['showKeyboard']({
                'defaultValue': konlmj['text'],
                'maxLength': konlmj['maxChars'],
                'multiple': konlmj['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (eadfbc) {},
                'fail': function (rpqon) {}
            }), rqvts['window']['wx']['onKeyboardConfirm'](function (mklh) {
                var ihejgf = mklh ? mklh['value'] : '';
                konlmj['text'] = ihejgf, konlmj['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), rqvts['window']['wx']['onKeyboardInput'](function (uqtsrv) {
                var stux = uqtsrv ? uqtsrv['value'] : '';
                if (!konlmj['multiline']) {
                    if (stux['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                konlmj['text'] = stux, konlmj['event']('input');
            });
        }, mnkpo['inputEnter'] = function () {
            nkplm['inputElement']['target']['focus'] = ![];
        }, mnkpo['wxinputblur'] = function () {
            mnkpo['hideKeyboard']();
        }, mnkpo['hideKeyboard'] = function () {
            rqvts['window']['wx']['offKeyboardConfirm'](), rqvts['window']['wx']['offKeyboardInput'](), rqvts['window']['wx']['hideKeyboard']({
                'success': function (kmplno) {
                    console['log']('隐藏键盘');
                },
                'fail': function (ifgk) {
                    console['log']('隐藏键盘出错:' + (ifgk ? ifgk['errMsg'] : ''));
                }
            });
        }, mnkpo;
    }(),
        vuywtx = function () {
        function dhefig() {}
        ptsoqr(dhefig, 'laya.wx.mini.MiniLoader');
        var vuq = dhefig['prototype'];
        return vuq['load'] = function (dfgeih, vzyx$, gehf, jhiml, z0$_xy) {
            gehf === void 0x0 && (gehf = !![]), z0$_xy === void 0x0 && (z0$_xy = ![]);
            var z12$0 = this;
            z12$0['_url'] = dfgeih;
            if (dfgeih['indexOf']('data:image') === 0x0) z12$0['_type'] = vzyx$ = 'image';else z12$0['_type'] = vzyx$ || (vzyx$ = z12$0['getTypeFromUrl'](dfgeih));
            z12$0['_cache'] = gehf, z12$0['_data'] = null;
            var ot = 'ascii';
            if (dfgeih['indexOf']('.fnt') != -0x1) ot = 'utf8';else vzyx$ == 'arraybuffer' && (ot = '');
            ;
            var sptqr = mlinj['getFileExtension'](dfgeih);
            if (dhefig['_fileTypeArr']['indexOf'](sptqr) != -0x1) rqvts['EnvConfig']['load']['call'](this, dfgeih, vzyx$, gehf, jhiml, z0$_xy);else {
                if (!lmnqp['getFileInfo'](dfgeih)) {
                    if (dfgeih['indexOf']('layaNativeDir/') != -0x1) {
                        if (rqvts['isZiYu']) {
                            var trsopq = lmnqp['ziyuFileData'][dfgeih];
                            z12$0['onLoaded'](trsopq);
                            return;
                        } else {
                            cosnole['log']('read read'), lmnqp['read'](dfgeih, ot, new ljh(dhefig, dhefig['onReadNativeCallBack'], [ot, dfgeih, vzyx$, gehf, jhiml, z0$_xy, z12$0]));
                            return;
                        }
                    }
                    if (qprtus['rootPath'] == '') var prnmqo = dfgeih;else prnmqo = dfgeih['split'](qprtus['rootPath'])[0x0];
                    dfgeih['indexOf']('http://') != -0x1 || dfgeih['indexOf']('https://') != -0x1 ? rqvts['EnvConfig']['load']['call'](z12$0, dfgeih, vzyx$, gehf, jhiml, z0$_xy) : lmnqp['readFile'](prnmqo, ot, new ljh(dhefig, dhefig['onReadNativeCallBack'], [ot, dfgeih, vzyx$, gehf, jhiml, z0$_xy, z12$0]), dfgeih);
                } else rqvts['EnvConfig']['load']['call'](this, dfgeih, vzyx$, gehf, jhiml, z0$_xy);
            }
        }, vuq['resMgrLoad'] = function (igefjh, nlkj, _wzx$y, noqml, z0x$_, twuyvx, ihjegf) {
            _wzx$y === void 0x0 && (_wzx$y = 0x0), noqml === void 0x0 && (noqml = ![]), z0x$_ === void 0x0 && (z0x$_ = ![]), twuyvx === void 0x0 && (twuyvx = 0x0), ihjegf === void 0x0 && (ihjegf = 0x3), igefjh['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', igefjh), rqvts['EnvConfig']['resMgrLoad'](igefjh, (prnso, vytxu, pqtsru) => {
                dhefig['prototype']['resMgrLoadCallBack'](prnso, vytxu, pqtsru, nlkj);
            }, _wzx$y, noqml, z0x$_, twuyvx, ihjegf);
        }, vuq['resMgrLoadCallBack'] = function (lkhi, glkhj, lnjkim, xswv) {
            console['log']('buff:::', lkhi, lnjkim, lmnqp['fileNativeDir'] + '///' + lmnqp['fileListName']), xswv(lkhi, glkhj, lnjkim);
        }, vuq['clearRes'] = function (qnorp, rmqonp) {
            rmqonp === void 0x0 && (rmqonp = ![]);
            var cde = this;
            cde['clearRes'](qnorp, rmqonp);
            var srpqut = lmnqp['getFileInfo'](qnorp);
            if (srpqut && (qnorp['indexOf']('http://') != -0x1 || qnorp['indexOf']('https://') != -0x1)) {
                var kihgjl = srpqut['md5'],
                    vtsqur = lmnqp['getFileNativePath'](kihgjl);
                lmnqp['remove'](vtsqur);
            }
        }, dhefig['onReadNativeCallBack'] = function (z0y$x, lmkojn, sputr, z102, xyuz, mpo, uwtxyv, hcedf, oqrmp) {
            z102 === void 0x0 && (z102 = !![]), mpo === void 0x0 && (mpo = ![]), hcedf === void 0x0 && (hcedf = 0x0);
            if (!hcedf) {
                var mkojl;
                if (sputr == 'json' || sputr == 'atlas') mkojl = rqvts['getJson'](oqrmp['data']);else sputr == 'xml' ? mkojl = mlinj['parseXMLFromString'](oqrmp['data']) : mkojl = oqrmp['data'];
                uwtxyv['onLoaded'](mkojl), !rqvts['isZiYu'] && rqvts['isPosMsgYu'] && sputr != 'arraybuffer' && wx['postMessage']({
                    'url': lmkojn,
                    'data': mkojl,
                    'isLoad': !![]
                });
            } else hcedf == 0x1 && rqvts['EnvConfig']['load']['call'](uwtxyv, lmkojn, sputr, z102, xyuz, mpo);
        }, rqmpno(dhefig, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), dhefig;
    }(),
        lmnqp = function (igfkhj) {
        function $312_0() {
            $312_0['__super']['call'](this);
            ;
        }
        return ptsoqr($312_0, 'laya.wx.mini.MiniFileMgr', igfkhj), $312_0['isLoadFile'] = function (jgkif) {
            return $312_0['_fileTypeArr']['indexOf'](jgkif) != -0x1 ? !![] : ![];
        }, $312_0['getFileInfo'] = function ($wvzyx) {
            var y_x$wz = $wvzyx['split']('?')[0x0],
                $z_0y1 = $312_0['filesListObj'][y_x$wz];
            if ($z_0y1 == null) return null;else return $z_0y1;
            return null;
        }, $312_0['onFileUpdate'] = function (uxs, lkjn) {
            var cdehg = uxs['split']('/'),
                stprqo = cdehg[cdehg['length'] - 0x1],
                mikn = $312_0['getFileInfo'](lkjn);
            if (mikn == null) $312_0['onSaveFile'](lkjn, stprqo);else {
                if (mikn['readyUrl'] != lkjn) $312_0['remove'](stprqo, lkjn);
            }
        }, $312_0['exits'] = function (kjonm, ptor) {
            var kjlhmi = $312_0['getFileNativePath'](kjonm);
            $312_0['fs']['getFileInfo']({
                'filePath': kjlhmi,
                'success': function (wy$x) {
                    ptor != null && ptor['runWith']([0x0, wy$x]);
                },
                'fail': function (nrqso) {
                    ptor != null && ptor['runWith']([0x1, nrqso]);
                }
            });
        }, $312_0['read'] = function (spoqrt, cade, $y_10, jlkinm) {
            cade === void 0x0 && (cade = 'ascill'), jlkinm === void 0x0 && (jlkinm = '');
            var qmpro;
            jlkinm != '' ? qmpro = $312_0['getFileNativePath'](spoqrt) : qmpro = spoqrt, $312_0['fs']['readFile']({
                'filePath': qmpro,
                'encoding': cade,
                'success': function (bface) {
                    $y_10 != null && $y_10['runWith']([0x0, bface]);
                },
                'fail': function (vwus) {
                    if (vwus && jlkinm != '') $312_0['down'](jlkinm, cade, $y_10, jlkinm);else $y_10 != null && $y_10['runWith']([0x1]);
                }
            });
        }, $312_0['readNativeFile'] = function (glkh, srvqut) {
            $312_0['fs']['readFile']({
                'filePath': glkh,
                'encoding': '',
                'success': function (igfe) {
                    srvqut != null && srvqut['runWith']([0x0]);
                },
                'fail': function (rpsuq) {
                    srvqut != null && srvqut['runWith']([0x1]);
                }
            });
        }, $312_0['down'] = function (rqpsut, higfed, xvywzu, ifhjeg) {
            higfed === void 0x0 && (higfed = 'ascill'), ifhjeg === void 0x0 && (ifhjeg = '');
            var $xy_w = $312_0['getFileNativePath'](ifhjeg),
                $wyx_ = $312_0['wxdown']({
                'url': rqpsut,
                'filePath': $xy_w,
                'success': function (quvtsr) {
                    if (quvtsr['statusCode'] === 0xc8) $312_0['readFile'](quvtsr['filePath'], higfed, xvywzu, ifhjeg);
                },
                'fail': function (vxzy$w) {
                    xvywzu != null && xvywzu['runWith']([0x1, vxzy$w]);
                }
            });
            $wyx_['onProgressUpdate'](function (lkinjm) {
                xvywzu != null && xvywzu['runWith']([0x2, lkinjm['progress']]);
            });
        }, $312_0['readFile'] = function (wtyvu, ijfgh, utpqrs, sqtuv) {
            ijfgh === void 0x0 && (ijfgh = 'ascill'), sqtuv === void 0x0 && (sqtuv = ''), $312_0['fs']['readFile']({
                'filePath': wtyvu,
                'encoding': ijfgh,
                'success': function (qponmr) {
                    if (wtyvu['indexOf']('http://') != -0x1 || wtyvu['indexOf']('https://') != -0x1) $312_0['onFileUpdate'](wtyvu, sqtuv);
                    utpqrs != null && utpqrs['runWith']([0x0, qponmr]);
                },
                'fail': function (_x$zy0) {
                    if (_x$zy0) utpqrs != null && utpqrs['runWith']([0x1, _x$zy0]);
                }
            });
        }, $312_0['downImg'] = function (hfdi, molpnk, vw$xz) {
            vw$xz === void 0x0 && (vw$xz = '');
            var qsrpo = $312_0['wxdown']({
                'url': hfdi,
                'success': function (zw_y) {
                    zw_y['statusCode'] === 0xc8 && $312_0['copyFile'](zw_y['tempFilePath'], vw$xz, molpnk);
                },
                'fail': function (_1430) {
                    molpnk != null && molpnk['runWith']([0x1, _1430]);
                }
            });
        }, $312_0['copyFile'] = function (qrtv, ljn, nlim) {
            var pqmnol = qrtv['split']('/'),
                ptsrqo = pqmnol[pqmnol['length'] - 0x1],
                rstqo = ljn['split']('?')[0x0],
                zwuvyx = $312_0['getFileInfo'](ljn),
                igjefh = $312_0['getFileNativePath'](ptsrqo);
            $312_0['fs']['copyFile']({
                'srcPath': qrtv,
                'destPath': igjefh,
                'success': function (oqtprs) {
                    if (!zwuvyx) $312_0['onSaveFile'](ljn, ptsrqo), nlim != null && nlim['runWith']([0x0]);else {
                        if (zwuvyx['readyUrl'] != ljn) $312_0['remove'](ptsrqo, ljn, nlim);
                    }
                },
                'fail': function (tvwrs) {
                    nlim != null && nlim['runWith']([0x1, tvwrs]);
                }
            });
        }, $312_0['getFileNativePath'] = function (lmoknp) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + lmoknp;
        }, $312_0['remove'] = function (z1_20, gecfdh, $210_) {
            gecfdh === void 0x0 && (gecfdh = '');
            var febc = $312_0['getFileInfo'](gecfdh),
                jkilm = $312_0['getFileNativePath'](febc['md5']);
            bfeda['loader']['clearRes'](febc['readyUrl']), $312_0['fs']['unlink']({
                'filePath': jkilm,
                'success': function (hkjlgi) {
                    if (gecfdh != '') $312_0['onSaveFile'](gecfdh, z1_20);
                    $210_ != null && $210_['runWith']([0x0]);
                },
                'fail': function ($zvxy) {}
            });
        }, $312_0['onSaveFile'] = function (egfid, jghkil) {
            var _12340 = egfid['split']('?')[0x0];
            $312_0['filesListObj'][_12340] = {
                'md5': jghkil,
                'readyUrl': egfid
            }, $312_0['fs']['writeFile']({
                'filePath': $312_0['fileNativeDir'] + '/' + $312_0['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify']($312_0['filesListObj']),
                'success': function (lmpqn) {
                    console['log']('写入测试测试成功：', lmpqn);
                },
                'fail': function (x0$_) {
                    console['log']('写入测试测试失败：', x0$_);
                }
            });
        }, $312_0['existDir'] = function (w_y$zx, $zvxwy) {
            $312_0['fs']['mkdir']({
                'dirPath': w_y$zx,
                'success': function (_z0xy$) {
                    $zvxwy != null && $zvxwy['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (_y0$zx) {
                    if (_y0$zx['errMsg']['indexOf']('file already exists') != -0x1) $312_0['readSync']($312_0['fileListName'], 'utf8', $zvxwy);else $zvxwy != null && $zvxwy['runWith']([0x1, _y0$zx]);
                }
            });
        }, $312_0['readSync'] = function (xyw$v, fjhei, hlikg, yxu) {
            fjhei === void 0x0 && (fjhei = 'ascill'), yxu === void 0x0 && (yxu = '');
            var uwrs = $312_0['getFileNativePath'](xyw$v),
                oplqmn;
            try {
                oplqmn = $312_0['fs']['readFileSync'](uwrs), hlikg != null && hlikg['runWith']([0x0, { 'data': oplqmn }]);
            } catch (dfbae) {
                hlikg != null && hlikg['runWith']([0x1]);
            }
        }, $312_0['readCache'] = function () {}, $312_0['writeCache'] = function ($0yz1_) {
            var y_z1 = readyUrl['split']('?')[0x0];
            $312_0['filesListObj'][y_z1] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, $312_0['fs']['writeFile']({
                'filePath': $312_0['fileNativeDir'] + '/' + $312_0['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify']($312_0['filesListObj']),
                'success': function (mljni) {},
                'fail': function (uvyxz) {}
            });
        }, $312_0['setNativeFileDir'] = function (poqnmr) {
            $312_0['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + poqnmr;
        }, $312_0['filesListObj'] = {}, $312_0['fileNativeDir'] = null, $312_0['fileListName'] = 'layaairfiles.txt', $312_0['ziyuFileData'] = {}, rqmpno($312_0, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), $312_0;
    }(vwrut),
        $zxy = function (edbcfg) {
        function daecfb() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], daecfb['__super']['call'](this), this['_sound'] = daecfb['_createSound'](), this['_chanell'] = new xvyzu(this['_sound']);
        }
        ptsoqr(daecfb, 'laya.wx.mini.MiniSound', edbcfg);
        var ikgjhf = daecfb['prototype'];
        return ikgjhf['load'] = function (lonjm) {
            var nlimj = this;
            lonjm = qprtus['formatURL'](lonjm), this['url'] = lonjm;
            if (daecfb['_audioCache'][lonjm]) {
                this['event']('complete');
                return;
            }
            function adcfe() {
                if (daecfb['_null'] != undefined) nlimj['_sound']['onCanplay'](daecfb['_null']), nlimj['_sound']['onError'](daecfb['_null']);else try {
                    nlimj['_sound']['onCanplay'](null), nlimj['_sound']['onError'](null), daecfb['_null'] = null;
                } catch (lpmk) {
                    console['warn']('[wxmini] _clearSound:' + lpmk), nlimj['_sound']['onCanplay'](w$xy_z), nlimj['_sound']['onError'](w$xy_z), daecfb['_null'] = w$xy_z;
                }
            }
            function xvzwy() {
                hcfd['loaded'] = !![], hcfd['event']('complete'), daecfb['_audioCache'][hcfd['url']] = hcfd;
            }
            function jfgikh(vxw$z) {
                console['error']('errCode=' + vxw$z['errCode'] + '  errMsg=' + vxw$z['errMsg']), hcfd['event']('error');
            }
            function w$xy_z() {}
            this['_sound']['onCanplay'](xvzwy), this['_sound']['onError'](jfgikh), this['_sound']['src'] = lonjm;
            var hcfd = this;
        }, ikgjhf['play'] = function (dfechg, cefdbg) {
            dfechg === void 0x0 && (dfechg = 0x0), cefdbg === void 0x0 && (cefdbg = 0x0);
            var opstr, dbface;
            if (this['url'] == gebdf['_tMusic']) {
                if (!daecfb['_musicAudio']) daecfb['_musicAudio'] = this['_sound'];
                opstr = daecfb['_musicAudio'], dbface = this['_chanell'];
            } else opstr = this['_sound'], dbface = this['_chanell'];
            return opstr['src'] = this['url'], opstr['startTime'] = 0x0, dbface['isStopped'] && (dbface['url'] = this['url'], dbface['loops'] = cefdbg, dbface['startTime'] = dfechg, dbface['play'](), gebdf['addChannel'](dbface)), dbface;
        }, ikgjhf['dispose'] = function () {
            var ikfjhg = daecfb['_audioCache'][this['url']];
            ikfjhg && (ikfjhg['src'] = '', delete daecfb['_audioCache'][this['url']]);
        }, fedg(0x0, ikgjhf, 'duration', function () {
            return this['_sound']['duration'];
        }), daecfb['_createSound'] = function () {
            daecfb['_id']++;
            var dbcea = rqvts['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return dbcea;
        }, daecfb['_musicAudio'] = null, daecfb['_id'] = 0x0, daecfb['_audioCache'] = {}, daecfb['_null'] = undefined, daecfb;
    }(vwrut),
        xvyzu = function (lkojm) {
        function kglhij(uxvtwy) {
            this['_audio'] = null, this['_onEnd'] = null, kglhij['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = uxvtwy, this['_onEnd'] = mlinj['bind'](this['__onEnd'], this), uxvtwy['onEnded'](this['_onEnd']);
        }
        ptsoqr(kglhij, 'laya.wx.mini.MiniSoundChannel', lkojm);
        var mnkil = kglhij['prototype'];
        return mnkil['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (bfeda['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, mnkil['__onNull'] = function () {}, mnkil['play'] = function () {
            this['isStopped'] = ![], gebdf['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, mnkil['stop'] = function () {
            this['isStopped'] = !![], gebdf['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, mnkil['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, mnkil['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], gebdf['addChannel'](this), this['_audio']['play']();
        }, fedg(0x0, mnkil, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), fedg(0x0, mnkil, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), fedg(0x0, mnkil, 'volume', function () {
            return 0x1;
        }, function (utrvw) {}), kglhij['_null'] = undefined, kglhij;
    }($_zy0x),
        xuvz = function () {
        function z2$0() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = rqvts['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        ptsoqr(z2$0, 'laya.wx.mini.MiniVideo');
        var twurvs = z2$0['prototype'];
        return twurvs['on'] = function (posqtr, uvstr, z$yvw) {
            if (posqtr == 'loadedmetadata') this['onPlayFunc'] = z$yvw['bind'](uvstr), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else posqtr == 'ended' && (this['onEndedFunC'] = z$yvw['bind'](uvstr), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, twurvs['onTimeUpdateFunc'] = function (figd) {
            this['position'] = figd['position'], this['_duration'] = figd['duration'];
        }, twurvs['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, twurvs['onended'] = function (mknilj, trso) {
            this['onEndedFunC'] = trso['bind'](mknilj), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, twurvs['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, twurvs['off'] = function (nkojm, sqo, fghjk) {
            if (nkojm == 'loadedmetadata') this['onPlayFunc'] = fghjk['bind'](sqo), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else nkojm == 'ended' && (this['onEndedFunC'] = fghjk['bind'](sqo), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, twurvs['load'] = function (dbcfa) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = dbcfa;
        }, twurvs['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, twurvs['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, twurvs['size'] = function (rqtsup, onmqlp) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = rqtsup, this['videoElement']['height'] = onmqlp;
        }, twurvs['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, twurvs['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, fedg(0x0, twurvs, 'duration', function () {
            return this['_duration'];
        }), fedg(0x0, twurvs, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (ijkgl) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = ijkgl;
        }), fedg(0x0, twurvs, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), fedg(0x0, twurvs, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), fedg(0x0, twurvs, 'ended', function () {
            return this['videoend'];
        }), fedg(0x0, twurvs, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (njkoml) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = njkoml;
        }), fedg(0x0, twurvs, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (tvuqs) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = tvuqs;
        }), fedg(0x0, twurvs, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (jinmkl) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = jinmkl;
        }), fedg(0x0, twurvs, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), fedg(0x0, twurvs, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (quvr) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = quvr;
        }), fedg(0x0, twurvs, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (fehgcd) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = fehgcd;
        }), fedg(0x0, twurvs, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), fedg(0x0, twurvs, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (wyxvut) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = wyxvut;
        }), fedg(0x0, twurvs, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (xw_y$z) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = xw_y$z;
        }), fedg(0x0, twurvs, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (kfjhgi) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = kfjhgi;
        }), z2$0;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var jglk in Laya) {
        var xzyvuw = Laya[jglk];
        xzyvuw && xzyvuw['__isclass'] && (exports[jglk] = xzyvuw);
    }
});