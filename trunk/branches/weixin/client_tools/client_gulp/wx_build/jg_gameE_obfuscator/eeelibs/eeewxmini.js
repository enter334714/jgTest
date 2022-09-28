var b = wx.$e;
(function (window, document, $3qnij) {
    var qnsk = $3qnij['un'],
        yz4vf = $3qnij['uns'],
        fv_a = $3qnij['static'],
        j$ni = $3qnij['class'],
        zrg = $3qnij['getset'],
        $jqi3x = $3qnij['__newvec'],
        zlhyrf = laya['utils']['Browser'],
        un3q9s = laya['events']['Event'],
        qin$ = laya['events']['EventDispatcher'],
        grlthz = laya['resource']['HTMLImage'],
        w0b = laya['utils']['Handler'],
        yzlht = laya['display']['Input'],
        niqj3$ = laya['net']['Loader'],
        us96kb = laya['maths']['Matrix'],
        nqjus = laya['renders']['Render'],
        mca7o_ = laya['utils']['RunDriver'],
        m_o = laya['media']['Sound'],
        a_4f7v = laya['media']['SoundChannel'],
        d5860b = laya['media']['SoundManager'],
        copma7 = laya['display']['Stage'],
        gt$ixl = laya['net']['URL'],
        dwb508 = laya['utils']['Utils'],
        qujsn = function () {
        function b8w0d5() {}
        return j$ni(b8w0d5, 'laya.wx.mini.MiniAdpter'), b8w0d5['getJson'] = function (am74_v) {
            return JSON['parse'](am74_v);
        }, b8w0d5['init'] = function (fhzlyr, meaop) {
            fhzlyr === void 0x0 && (fhzlyr = ![]), meaop === void 0x0 && (meaop = ![]);
            if (b8w0d5['_inited']) return;
            b8w0d5['window'] = window;
            if (b8w0d5['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            b8w0d5['_inited'] = !![], b8w0d5['isZiYu'] = meaop, b8w0d5['isPosMsgYu'] = fhzlyr, b8w0d5['EnvConfig'] = {}, !b8w0d5['isZiYu'] && (squn3['setNativeFileDir']('/layaairGame'), squn3['existDir'](squn3['fileNativeDir'], w0b['create'](b8w0d5, b8w0d5['onMkdirCallBack']))), b8w0d5['window']['focus'] = function () {}, $3qnij['getUrlPath'] = function () {}, b8w0d5['window']['logtime'] = function (nsk96u) {}, b8w0d5['window']['alertTimeLog'] = function (d09kb) {}, b8w0d5['window']['resetShareInfo'] = function () {}, b8w0d5['window']['CanvasRenderingContext2D'] = function () {}, b8w0d5['window']['CanvasRenderingContext2D']['prototype'] = b8w0d5['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], b8w0d5['window']['document']['body']['appendChild'] = function () {}, b8w0d5['EnvConfig']['pixelRatioInt'] = 0x0, mca7o_['getPixelRatio'] = b8w0d5['pixelRatio'], b8w0d5['_preCreateElement'] = zlhyrf['createElement'], zlhyrf['createElement'] = b8w0d5['createElement'], mca7o_['createShaderCondition'] = b8w0d5['createShaderCondition'], dwb508['parseXMLFromString'] = b8w0d5['parseXMLFromString'], yzlht['_createInputElement'] = n9s['_createInputElement'], b8w0d5['EnvConfig']['load'] = niqj3$['prototype']['load'], niqj3$['prototype']['load'] = gthxr['prototype']['load'], b8w0d5['isZiYu'] && fhzlyr && wx['onMessage'](function (o_7cma) {
                o_7cma['isLoad'] && (squn3['ziyuFileData'][o_7cma['url']] = o_7cma['data']);
            });
        }, b8w0d5['onMkdirCallBack'] = function (_ao7cm, qus) {
            if (!_ao7cm) squn3['filesListObj'] = JSON['parse'](qus['data']);
        }, b8w0d5['pixelRatio'] = function () {
            if (!b8w0d5['EnvConfig']['pixelRatioInt']) try {
                var v47_fa = wx['getSystemInfoSync']();
                return b8w0d5['EnvConfig']['pixelRatioInt'] = v47_fa['pixelRatio'], v47_fa = v47_fa, v47_fa['pixelRatio'];
            } catch (fv4y_z) {}
            return b8w0d5['EnvConfig']['pixelRatioInt'];
        }, b8w0d5['createElement'] = function (d0w82) {
            if (d0w82 == 'canvas') {
                var ks6b;
                return b8w0d5['idx'] == 0x1 ? b8w0d5['isZiYu'] ? (ks6b = sharedCanvas, ks6b['style'] = {}) : ks6b = window['canvas'] : ks6b = window['wx']['createCanvas'](), b8w0d5['idx']++, ks6b;
            } else {
                if (d0w82 == 'textarea' || d0w82 == 'input') return b8w0d5['onCreateInput'](d0w82);else {
                    if (d0w82 == 'div') {
                        var c7apmo = b8w0d5['_preCreateElement'](d0w82);
                        return c7apmo['contains'] = function (i$g3jx) {
                            return null;
                        }, c7apmo['removeChild'] = function (cam_7o) {}, c7apmo;
                    } else return b8w0d5['_preCreateElement'](d0w82);
                }
            }
        }, b8w0d5['onCreateInput'] = function (kdb50) {
            var pc7a = b8w0d5['_preCreateElement'](kdb50);
            return pc7a['focus'] = n9s['wxinputFocus'], pc7a['blur'] = n9s['wxinputblur'], pc7a['style'] = {}, pc7a['value'] = 0x0, pc7a['parentElement'] = {}, pc7a['placeholder'] = {}, pc7a['type'] = {}, pc7a['setColor'] = function (sqnuk9) {}, pc7a['setType'] = function (qu39sn) {}, pc7a['setFontFace'] = function (s06b) {}, pc7a['addEventListener'] = function (b0685) {}, pc7a['contains'] = function (tgj$ix) {
                return null;
            }, pc7a['removeChild'] = function (rfyzhv) {}, pc7a;
        }, b8w0d5['createShaderCondition'] = function (ghrzlt) {
            var gx$lh = this,
                rv4yfz = function () {
                var f_a74v = ghrzlt;
                return gx$lh[ghrzlt['replace']('this.', '')];
            };
            return rv4yfz;
        }, b8w0d5['EnvConfig'] = null, b8w0d5['window'] = null, b8w0d5['_preCreateElement'] = null, b8w0d5['_inited'] = ![], b8w0d5['wxRequest'] = null, b8w0d5['systemInfo'] = null, b8w0d5['version'] = '0.0.1', b8w0d5['isZiYu'] = ![], b8w0d5['isPosMsgYu'] = ![], b8w0d5['parseXMLFromString'] = function (g$j3) {
            var copme, fzylh;
            g$j3 = g$j3['replace'](/>\s+</g, '><');
            try {
                copme = new window['Parser']['DOMParser']()['parseFromString'](g$j3, 'text/xml');
            } catch (v_7af) {
                throw '需要引入xml解析库文件';
            }
            return copme;
        }, b8w0d5['idx'] = 0x1, b8w0d5;
    }(),
        cpemo = function () {
        function t$glx() {}
        j$ni(t$glx, 'laya.wx.mini.MiniImage');
        var _mav4 = t$glx['prototype'];
        return _mav4['_loadImage'] = function (frlhyz) {
            var sb9 = this,
                lg$xi = ![];
            frlhyz['indexOf']('layaNativeDir/') == -0x1 && (lg$xi = !![], frlhyz = gt$ixl['formatURL'](frlhyz));
            if (!squn3['getFileInfo'](frlhyz)) {
                if (frlhyz['indexOf']('http://') != -0x1 || frlhyz['indexOf']('https://') != -0x1) squn3['downImg'](frlhyz, new w0b(t$glx, t$glx['onDownImgCallBack'], [frlhyz, sb9]), frlhyz);else t$glx['onCreateImage'](frlhyz, sb9, !![]);
            } else t$glx['onCreateImage'](frlhyz, sb9, !lg$xi);
        }, t$glx['onDownImgCallBack'] = function (kqsun9, vma7, f7v_4y) {
            if (!f7v_4y) t$glx['onCreateImage'](kqsun9, vma7);else vma7['onError'](null);
        }, t$glx['onCreateImage'] = function (acomp7, g$3xji, d251w8) {
            d251w8 === void 0x0 && (d251w8 = ![]);
            var rthyl;
            if (!d251w8) {
                var v4zfy = squn3['getFileInfo'](acomp7),
                    lgi = v4zfy['md5'];
                rthyl = squn3['getFileNativePath'](lgi);
            } else rthyl = acomp7;
            if (g$3xji['imgCache'] == null) g$3xji['imgCache'] = {};
            var _am;
            function dw0582() {
                _am['onload'] = null, _am['onerror'] = null, delete g$3xji['imgCache'][acomp7];
            }
            ;
            var f7_4v = function () {
                dw0582(), g$3xji['onLoaded'](_am);
            },
                l$tix = function () {
                dw0582(), g$3xji['event']('error', 'Load image failed');
            };
            g$3xji['_type'] == 'nativeimage' ? (_am = new zlhyrf['window']['Image'](), _am['crossOrigin'] = '', _am['onload'] = f7_4v, _am['onerror'] = l$tix, _am['src'] = rthyl, g$3xji['imgCache'][acomp7] = _am) : new grlthz['create'](rthyl, {
                'onload': f7_4v,
                'onerror': l$tix,
                'onCreate': function ($qj3ni) {
                    _am = $qj3ni, g$3xji['imgCache'][acomp7] = $qj3ni;
                }
            });
        }, t$glx;
    }(),
        n9s = function () {
        function iq$3() {}
        return j$ni(iq$3, 'laya.wx.mini.MiniInput'), iq$3['_createInputElement'] = function () {
            yzlht['_initInput'](yzlht['area'] = zlhyrf['createElement']('textarea')), yzlht['_initInput'](yzlht['input'] = zlhyrf['createElement']('input')), yzlht['inputContainer'] = zlhyrf['createElement']('div'), yzlht['inputContainer']['style']['position'] = 'absolute', yzlht['inputContainer']['style']['zIndex'] = 0x186a0, zlhyrf['container']['appendChild'](yzlht['inputContainer']), yzlht['inputContainer']['setPos'] = function (f_4vz, f_7y4v) {
                yzlht['inputContainer']['style']['left'] = f_4vz + 'px', yzlht['inputContainer']['style']['top'] = f_7y4v + 'px';
            }, $3qnij['stage']['on']('resize', null, iq$3['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (vfy7) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), d5860b['_soundClass'] = s9nkqu, d5860b['_musicClass'] = s9nkqu, window['_videoClass'] = grtx;
        }, iq$3['_onStageResize'] = function () {
            var d8w05b = $3qnij['stage']['_canvasTransform']['identity']();
            d8w05b['scale'](zlhyrf['width'] / nqjus['canvas']['width'] / mca7o_['getPixelRatio'](), zlhyrf['height'] / nqjus['canvas']['height'] / mca7o_['getPixelRatio']());
        }, iq$3['wxinputFocus'] = function (aoc7p) {
            var fv_4y7 = yzlht['inputElement']['target'];
            if (fv_4y7 && !fv_4y7['editable']) return;
            qujsn['window']['wx']['offKeyboardConfirm'](), qujsn['window']['wx']['offKeyboardInput'](), qujsn['window']['wx']['showKeyboard']({
                'defaultValue': fv_4y7['text'],
                'maxLength': fv_4y7['maxChars'],
                'multiple': fv_4y7['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (fvz_4) {},
                'fail': function (ij3qn$) {}
            }), qujsn['window']['wx']['onKeyboardConfirm'](function ($hgx) {
                var qu9n3s = $hgx ? $hgx['value'] : '';
                fv_4y7['text'] = qu9n3s, fv_4y7['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), qujsn['window']['wx']['onKeyboardInput'](function (b506kd) {
                var txlgi = b506kd ? b506kd['value'] : '';
                if (!fv_4y7['multiline']) {
                    if (txlgi['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                fv_4y7['text'] = txlgi, fv_4y7['event']('input');
            });
        }, iq$3['inputEnter'] = function () {
            yzlht['inputElement']['target']['focus'] = ![];
        }, iq$3['wxinputblur'] = function () {
            iq$3['hideKeyboard']();
        }, iq$3['hideKeyboard'] = function () {
            qujsn['window']['wx']['offKeyboardConfirm'](), qujsn['window']['wx']['offKeyboardInput'](), qujsn['window']['wx']['hideKeyboard']({
                'success': function (epaco) {
                    console['log']('隐藏键盘');
                },
                'fail': function (rtlgzh) {
                    console['log']('隐藏键盘出错:' + (rtlgzh ? rtlgzh['errMsg'] : ''));
                }
            });
        }, iq$3;
    }(),
        gthxr = function () {
        function ixg$t() {}
        j$ni(ixg$t, 'laya.wx.mini.MiniLoader');
        var unqs9 = ixg$t['prototype'];
        return unqs9['load'] = function (lhzytr, rtyhz, amo7p, zfyrvh, nu3qs) {
            amo7p === void 0x0 && (amo7p = !![]), nu3qs === void 0x0 && (nu3qs = ![]);
            var ht$lxg = this;
            ht$lxg['_url'] = lhzytr;
            if (lhzytr['indexOf']('data:image') === 0x0) ht$lxg['_type'] = rtyhz = 'image';else ht$lxg['_type'] = rtyhz || (rtyhz = ht$lxg['getTypeFromUrl'](lhzytr));
            ht$lxg['_cache'] = amo7p, ht$lxg['_data'] = null;
            var vy4rz = 'ascii';
            if (lhzytr['indexOf']('.fnt') != -0x1) vy4rz = 'utf8';else rtyhz == 'arraybuffer' && (vy4rz = '');
            ;
            var ltxh$ = dwb508['getFileExtension'](lhzytr);
            if (ixg$t['_fileTypeArr']['indexOf'](ltxh$) != -0x1) qujsn['EnvConfig']['load']['call'](this, lhzytr, rtyhz, amo7p, zfyrvh, nu3qs);else {
                if (!squn3['getFileInfo'](lhzytr)) {
                    if (lhzytr['indexOf']('layaNativeDir/') != -0x1) {
                        if (qujsn['isZiYu']) {
                            var b9s60 = squn3['ziyuFileData'][lhzytr];
                            ht$lxg['onLoaded'](b9s60);
                            return;
                        } else {
                            cosnole['log']('read read'), squn3['read'](lhzytr, vy4rz, new w0b(ixg$t, ixg$t['onReadNativeCallBack'], [vy4rz, lhzytr, rtyhz, amo7p, zfyrvh, nu3qs, ht$lxg]));
                            return;
                        }
                    }
                    if (gt$ixl['rootPath'] == '') var m_c74a = lhzytr;else m_c74a = lhzytr['split'](gt$ixl['rootPath'])[0x0];
                    lhzytr['indexOf']('http://') != -0x1 || lhzytr['indexOf']('https://') != -0x1 ? qujsn['EnvConfig']['load']['call'](ht$lxg, lhzytr, rtyhz, amo7p, zfyrvh, nu3qs) : squn3['readFile'](m_c74a, vy4rz, new w0b(ixg$t, ixg$t['onReadNativeCallBack'], [vy4rz, lhzytr, rtyhz, amo7p, zfyrvh, nu3qs, ht$lxg]), lhzytr);
                } else qujsn['EnvConfig']['load']['call'](this, lhzytr, rtyhz, amo7p, zfyrvh, nu3qs);
            }
        }, unqs9['resMgrLoad'] = function (b9dk06, hzvyr, $q3in, o7cpma, rztlhy, xlhtgr, oc7am) {
            $q3in === void 0x0 && ($q3in = 0x0), o7cpma === void 0x0 && (o7cpma = ![]), rztlhy === void 0x0 && (rztlhy = ![]), xlhtgr === void 0x0 && (xlhtgr = 0x0), oc7am === void 0x0 && (oc7am = 0x3), b9dk06['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', b9dk06), qujsn['EnvConfig']['resMgrLoad'](b9dk06, (jg3$x, lhrzty, epoc) => {
                ixg$t['prototype']['resMgrLoadCallBack'](jg3$x, lhrzty, epoc, hzvyr);
            }, $q3in, o7cpma, rztlhy, xlhtgr, oc7am);
        }, unqs9['resMgrLoadCallBack'] = function (i3qj, ryhlt, yhrlf, qukn) {
            console['log']('buff:::', i3qj, yhrlf, squn3['fileNativeDir'] + '///' + squn3['fileListName']), qukn(i3qj, ryhlt, yhrlf);
        }, unqs9['clearRes'] = function (w5281, apeocm) {
            apeocm === void 0x0 && (apeocm = ![]);
            var yzfv4r = this;
            yzfv4r['clearRes'](w5281, apeocm);
            var n$ji3q = squn3['getFileInfo'](w5281);
            if (n$ji3q && (w5281['indexOf']('http://') != -0x1 || w5281['indexOf']('https://') != -0x1)) {
                var v4yrfz = n$ji3q['md5'],
                    capem = squn3['getFileNativePath'](v4yrfz);
                squn3['remove'](capem);
            }
        }, ixg$t['onReadNativeCallBack'] = function (zfryhl, nuq9, ampoce, k9u6sn, grxtlh, yrvz4, emcoap, eopcm, xt$glh) {
            k9u6sn === void 0x0 && (k9u6sn = !![]), yrvz4 === void 0x0 && (yrvz4 = ![]), eopcm === void 0x0 && (eopcm = 0x0);
            if (!eopcm) {
                var ltr;
                if (ampoce == 'json' || ampoce == 'atlas') ltr = qujsn['getJson'](xt$glh['data']);else ampoce == 'xml' ? ltr = dwb508['parseXMLFromString'](xt$glh['data']) : ltr = xt$glh['data'];
                emcoap['onLoaded'](ltr), !qujsn['isZiYu'] && qujsn['isPosMsgYu'] && ampoce != 'arraybuffer' && wx['postMessage']({
                    'url': nuq9,
                    'data': ltr,
                    'isLoad': !![]
                });
            } else eopcm == 0x1 && qujsn['EnvConfig']['load']['call'](emcoap, nuq9, ampoce, k9u6sn, grxtlh, yrvz4);
        }, fv_a(ixg$t, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), ixg$t;
    }(),
        squn3 = function (v4_7a) {
        function tgj$x() {
            tgj$x['__super']['call'](this);
            ;
        }
        return j$ni(tgj$x, 'laya.wx.mini.MiniFileMgr', v4_7a), tgj$x['isLoadFile'] = function (suknq9) {
            return tgj$x['_fileTypeArr']['indexOf'](suknq9) != -0x1 ? !![] : ![];
        }, tgj$x['getFileInfo'] = function (t$xh) {
            var xiqj3$ = t$xh['split']('?')[0x0],
                vyrhfz = tgj$x['filesListObj'][xiqj3$];
            if (vyrhfz == null) return null;else return vyrhfz;
            return null;
        }, tgj$x['onFileUpdate'] = function (zy4vf, lytzh) {
            var co7pma = zy4vf['split']('/'),
                rhzly = co7pma[co7pma['length'] - 0x1],
                jn$3 = tgj$x['getFileInfo'](lytzh);
            if (jn$3 == null) tgj$x['onSaveFile'](lytzh, rhzly);else {
                if (jn$3['readyUrl'] != lytzh) tgj$x['remove'](rhzly, lytzh);
            }
        }, tgj$x['exits'] = function (i$jg3x, v7a_f4) {
            var unj3q = tgj$x['getFileNativePath'](i$jg3x);
            tgj$x['fs']['getFileInfo']({
                'filePath': unj3q,
                'success': function (fz_vy) {
                    v7a_f4 != null && v7a_f4['runWith']([0x0, fz_vy]);
                },
                'fail': function (d65bk0) {
                    v7a_f4 != null && v7a_f4['runWith']([0x1, d65bk0]);
                }
            });
        }, tgj$x['read'] = function (cmaoep, _7av4m, kd056, igtj$) {
            _7av4m === void 0x0 && (_7av4m = 'ascill'), igtj$ === void 0x0 && (igtj$ = '');
            var gij;
            igtj$ != '' ? gij = tgj$x['getFileNativePath'](cmaoep) : gij = cmaoep, tgj$x['fs']['readFile']({
                'filePath': gij,
                'encoding': _7av4m,
                'success': function (ju3qns) {
                    kd056 != null && kd056['runWith']([0x0, ju3qns]);
                },
                'fail': function ($gji) {
                    if ($gji && igtj$ != '') tgj$x['down'](igtj$, _7av4m, kd056, igtj$);else kd056 != null && kd056['runWith']([0x1]);
                }
            });
        }, tgj$x['readNativeFile'] = function (gtl, fzvy4r) {
            tgj$x['fs']['readFile']({
                'filePath': gtl,
                'encoding': '',
                'success': function (oa_c7m) {
                    fzvy4r != null && fzvy4r['runWith']([0x0]);
                },
                'fail': function (b5d068) {
                    fzvy4r != null && fzvy4r['runWith']([0x1]);
                }
            });
        }, tgj$x['down'] = function (lyhz, qj$3ix, lhzgt, tzgrl) {
            qj$3ix === void 0x0 && (qj$3ix = 'ascill'), tzgrl === void 0x0 && (tzgrl = '');
            var ryz4vf = tgj$x['getFileNativePath'](tzgrl),
                ji3n$q = tgj$x['wxdown']({
                'url': lyhz,
                'filePath': ryz4vf,
                'success': function (jqix) {
                    if (jqix['statusCode'] === 0xc8) tgj$x['readFile'](jqix['filePath'], qj$3ix, lhzgt, tzgrl);
                },
                'fail': function (kd906) {
                    lhzgt != null && lhzgt['runWith']([0x1, kd906]);
                }
            });
            ji3n$q['onProgressUpdate'](function (vaf47_) {
                lhzgt != null && lhzgt['runWith']([0x2, vaf47_['progress']]);
            });
        }, tgj$x['readFile'] = function (fyzhvr, nqu9ks, njq3su, v4yfzr) {
            nqu9ks === void 0x0 && (nqu9ks = 'ascill'), v4yfzr === void 0x0 && (v4yfzr = ''), tgj$x['fs']['readFile']({
                'filePath': fyzhvr,
                'encoding': nqu9ks,
                'success': function (h$lgt) {
                    if (fyzhvr['indexOf']('http://') != -0x1 || fyzhvr['indexOf']('https://') != -0x1) tgj$x['onFileUpdate'](fyzhvr, v4yfzr);
                    njq3su != null && njq3su['runWith']([0x0, h$lgt]);
                },
                'fail': function (_vf7a) {
                    if (_vf7a) njq3su != null && njq3su['runWith']([0x1, _vf7a]);
                }
            });
        }, tgj$x['downImg'] = function (hrzgtl, ns9u3q, jxig$3) {
            jxig$3 === void 0x0 && (jxig$3 = '');
            var $ijt = tgj$x['wxdown']({
                'url': hrzgtl,
                'success': function (glzrh) {
                    glzrh['statusCode'] === 0xc8 && tgj$x['copyFile'](glzrh['tempFilePath'], jxig$3, ns9u3q);
                },
                'fail': function (bd586) {
                    ns9u3q != null && ns9u3q['runWith']([0x1, bd586]);
                }
            });
        }, tgj$x['copyFile'] = function (ks09, $g3i, b0w58) {
            var nsq39 = ks09['split']('/'),
                jgxti$ = nsq39[nsq39['length'] - 0x1],
                gj$itx = $g3i['split']('?')[0x0],
                yhvzfr = tgj$x['getFileInfo']($g3i),
                _4y7fv = tgj$x['getFileNativePath'](jgxti$);
            tgj$x['fs']['copyFile']({
                'srcPath': ks09,
                'destPath': _4y7fv,
                'success': function (yfzh) {
                    if (!yhvzfr) tgj$x['onSaveFile']($g3i, jgxti$), b0w58 != null && b0w58['runWith']([0x0]);else {
                        if (yhvzfr['readyUrl'] != $g3i) tgj$x['remove'](jgxti$, $g3i, b0w58);
                    }
                },
                'fail': function (c7apm) {
                    b0w58 != null && b0w58['runWith']([0x1, c7apm]);
                }
            });
        }, tgj$x['getFileNativePath'] = function (x$jq3i) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + x$jq3i;
        }, tgj$x['remove'] = function (n96us, $i3jq, v_yz) {
            $i3jq === void 0x0 && ($i3jq = '');
            var jnui3q = tgj$x['getFileInfo']($i3jq),
                gjxt$ = tgj$x['getFileNativePath'](jnui3q['md5']);
            $3qnij['loader']['clearRes'](jnui3q['readyUrl']), tgj$x['fs']['unlink']({
                'filePath': gjxt$,
                'success': function (zhyr) {
                    if ($i3jq != '') tgj$x['onSaveFile']($i3jq, n96us);
                    v_yz != null && v_yz['runWith']([0x0]);
                },
                'fail': function (cmpeao) {}
            });
        }, tgj$x['onSaveFile'] = function (hrxtlg, kbd96) {
            var suq3j = hrxtlg['split']('?')[0x0];
            tgj$x['filesListObj'][suq3j] = {
                'md5': kbd96,
                'readyUrl': hrxtlg
            }, tgj$x['fs']['writeFile']({
                'filePath': tgj$x['fileNativeDir'] + '/' + tgj$x['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](tgj$x['filesListObj']),
                'success': function (jqu3i) {
                    console['log']('写入测试测试成功：', jqu3i);
                },
                'fail': function (ju) {
                    console['log']('写入测试测试失败：', ju);
                }
            });
        }, tgj$x['existDir'] = function (gh$lx, ry4f) {
            tgj$x['fs']['mkdir']({
                'dirPath': gh$lx,
                'success': function (ltrhg) {
                    ry4f != null && ry4f['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (n$qji) {
                    if (n$qji['errMsg']['indexOf']('file already exists') != -0x1) tgj$x['readSync'](tgj$x['fileListName'], 'utf8', ry4f);else ry4f != null && ry4f['runWith']([0x1, n$qji]);
                }
            });
        }, tgj$x['readSync'] = function ($jtgi, yf_zv, k560d, bks096) {
            yf_zv === void 0x0 && (yf_zv = 'ascill'), bks096 === void 0x0 && (bks096 = '');
            var zlrthg = tgj$x['getFileNativePath']($jtgi),
                v4_zy;
            try {
                v4_zy = tgj$x['fs']['readFileSync'](zlrthg), k560d != null && k560d['runWith']([0x0, { 'data': v4_zy }]);
            } catch (_7mcoa) {
                k560d != null && k560d['runWith']([0x1]);
            }
        }, tgj$x['readCache'] = function () {}, tgj$x['writeCache'] = function (qnk9us) {
            var g3jx$ = readyUrl['split']('?')[0x0];
            tgj$x['filesListObj'][g3jx$] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, tgj$x['fs']['writeFile']({
                'filePath': tgj$x['fileNativeDir'] + '/' + tgj$x['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](tgj$x['filesListObj']),
                'success': function (k9b6us) {},
                'fail': function (b608d) {}
            });
        }, tgj$x['setNativeFileDir'] = function (d5wb08) {
            tgj$x['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + d5wb08;
        }, tgj$x['filesListObj'] = {}, tgj$x['fileNativeDir'] = null, tgj$x['fileListName'] = 'layaairfiles.txt', tgj$x['ziyuFileData'] = {}, fv_a(tgj$x, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), tgj$x;
    }(qin$),
        s9nkqu = function (_47fav) {
        function _7amv() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], _7amv['__super']['call'](this), this['_sound'] = _7amv['_createSound'](), this['_chanell'] = new _zyf4(this['_sound']);
        }
        j$ni(_7amv, 'laya.wx.mini.MiniSound', _47fav);
        var _cam74 = _7amv['prototype'];
        return _cam74['load'] = function (tlhx$) {
            var y4vzf = this;
            tlhx$ = gt$ixl['formatURL'](tlhx$), this['url'] = tlhx$;
            if (_7amv['_audioCache'][tlhx$]) {
                this['event']('complete');
                return;
            }
            function r4zy() {
                if (_7amv['_null'] != undefined) y4vzf['_sound']['onCanplay'](_7amv['_null']), y4vzf['_sound']['onError'](_7amv['_null']);else try {
                    y4vzf['_sound']['onCanplay'](null), y4vzf['_sound']['onError'](null), _7amv['_null'] = null;
                } catch (_4yf7) {
                    console['warn']('[wxmini] _clearSound:' + _4yf7), y4vzf['_sound']['onCanplay'](vzhfy), y4vzf['_sound']['onError'](vzhfy), _7amv['_null'] = vzhfy;
                }
            }
            function aecopm() {
                sb9u['loaded'] = !![], sb9u['event']('complete'), _7amv['_audioCache'][sb9u['url']] = sb9u;
            }
            function ca74(qjsnu3) {
                console['error']('errCode=' + qjsnu3['errCode'] + '  errMsg=' + qjsnu3['errMsg']), sb9u['event']('error');
            }
            function vzhfy() {}
            this['_sound']['onCanplay'](aecopm), this['_sound']['onError'](ca74), this['_sound']['src'] = tlhx$;
            var sb9u = this;
        }, _cam74['play'] = function (x$3ijg, y_fv7) {
            x$3ijg === void 0x0 && (x$3ijg = 0x0), y_fv7 === void 0x0 && (y_fv7 = 0x0);
            var k9un6, moa_c7;
            if (this['url'] == d5860b['_tMusic']) {
                if (!_7amv['_musicAudio']) _7amv['_musicAudio'] = this['_sound'];
                k9un6 = _7amv['_musicAudio'], moa_c7 = this['_chanell'];
            } else k9un6 = this['_sound'], moa_c7 = this['_chanell'];
            return k9un6['src'] = this['url'], k9un6['startTime'] = 0x0, moa_c7['isStopped'] && (moa_c7['url'] = this['url'], moa_c7['loops'] = y_fv7, moa_c7['startTime'] = x$3ijg, moa_c7['play'](), d5860b['addChannel'](moa_c7)), moa_c7;
        }, _cam74['dispose'] = function () {
            var lryfzh = _7amv['_audioCache'][this['url']];
            lryfzh && (lryfzh['src'] = '', delete _7amv['_audioCache'][this['url']]);
        }, zrg(0x0, _cam74, 'duration', function () {
            return this['_sound']['duration'];
        }), _7amv['_createSound'] = function () {
            _7amv['_id']++;
            var fhyvz = qujsn['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return fhyvz;
        }, _7amv['_musicAudio'] = null, _7amv['_id'] = 0x0, _7amv['_audioCache'] = {}, _7amv['_null'] = undefined, _7amv;
    }(qin$),
        _zyf4 = function (igj3$) {
        function k960d(ilxgt$) {
            this['_audio'] = null, this['_onEnd'] = null, k960d['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = ilxgt$, this['_onEnd'] = dwb508['bind'](this['__onEnd'], this), ilxgt$['onEnded'](this['_onEnd']);
        }
        j$ni(k960d, 'laya.wx.mini.MiniSoundChannel', igj3$);
        var thrzlg = k960d['prototype'];
        return thrzlg['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && ($3qnij['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, thrzlg['__onNull'] = function () {}, thrzlg['play'] = function () {
            this['isStopped'] = ![], d5860b['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, thrzlg['stop'] = function () {
            this['isStopped'] = !![], d5860b['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, thrzlg['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, thrzlg['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], d5860b['addChannel'](this), this['_audio']['play']();
        }, zrg(0x0, thrzlg, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), zrg(0x0, thrzlg, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), zrg(0x0, thrzlg, 'volume', function () {
            return 0x1;
        }, function (b658d0) {}), k960d['_null'] = undefined, k960d;
    }(a_4f7v),
        grtx = function () {
        function uksb6() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = qujsn['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        j$ni(uksb6, 'laya.wx.mini.MiniVideo');
        var d685b0 = uksb6['prototype'];
        return d685b0['on'] = function (hx$lt, mc74a_, lrxgth) {
            if (hx$lt == 'loadedmetadata') this['onPlayFunc'] = lrxgth['bind'](mc74a_), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else hx$lt == 'ended' && (this['onEndedFunC'] = lrxgth['bind'](mc74a_), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, d685b0['onTimeUpdateFunc'] = function (xjtig$) {
            this['position'] = xjtig$['position'], this['_duration'] = xjtig$['duration'];
        }, d685b0['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, d685b0['onended'] = function (mv4_7, subk) {
            this['onEndedFunC'] = subk['bind'](mv4_7), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, d685b0['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, d685b0['off'] = function (b0856d, maopce, s3unj) {
            if (b0856d == 'loadedmetadata') this['onPlayFunc'] = s3unj['bind'](maopce), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else b0856d == 'ended' && (this['onEndedFunC'] = s3unj['bind'](maopce), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, d685b0['load'] = function (oamc7) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = oamc7;
        }, d685b0['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, d685b0['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, d685b0['size'] = function (gtx$j, x$ij) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = gtx$j, this['videoElement']['height'] = x$ij;
        }, d685b0['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, d685b0['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, zrg(0x0, d685b0, 'duration', function () {
            return this['_duration'];
        }), zrg(0x0, d685b0, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (_mv7a) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = _mv7a;
        }), zrg(0x0, d685b0, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), zrg(0x0, d685b0, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), zrg(0x0, d685b0, 'ended', function () {
            return this['videoend'];
        }), zrg(0x0, d685b0, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (us9kq) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = us9kq;
        }), zrg(0x0, d685b0, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (nji3u) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = nji3u;
        }), zrg(0x0, d685b0, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (_4fa7v) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = _4fa7v;
        }), zrg(0x0, d685b0, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), zrg(0x0, d685b0, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (vz4yrf) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = vz4yrf;
        }), zrg(0x0, d685b0, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (qsun) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = qsun;
        }), zrg(0x0, d685b0, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), zrg(0x0, d685b0, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (pcoma) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = pcoma;
        }), zrg(0x0, d685b0, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (copae) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = copae;
        }), zrg(0x0, d685b0, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (_v7a4f) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = _v7a4f;
        }), uksb6;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var _7vf4 in Laya) {
        var k6d9 = Laya[_7vf4];
        k6d9 && k6d9['__isclass'] && (exports[_7vf4] = k6d9);
    }
});