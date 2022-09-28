var c = wx.$a;
(function (window, document, cyb40) {
    var nf1jsx = cyb40['un'],
        tr3875 = cyb40['uns'],
        zjsvhn = cyb40['static'],
        kvhnz = cyb40['class'],
        vsz = cyb40['getset'],
        $clmy = cyb40['__newvec'],
        tr857 = laya['utils']['Browser'],
        kqhz = laya['events']['Event'],
        dqtk68 = laya['events']['EventDispatcher'],
        j1nsf = laya['resource']['HTMLImage'],
        e4ow0 = laya['utils']['Handler'],
        amb$lc = laya['display']['Input'],
        ymlc$b = laya['net']['Loader'],
        dtrq85 = laya['maths']['Matrix'],
        $bmca = laya['renders']['Render'],
        td5rq = laya['utils']['RunDriver'],
        j1xsn = laya['media']['Sound'],
        vhzk = laya['media']['SoundChannel'],
        ug21ew = laya['media']['SoundManager'],
        uo4e = laya['display']['Stage'],
        ew0o = laya['net']['URL'],
        jfnsx = laya['utils']['Utils'],
        i7r3p = function () {
        function kvzhj() {}
        return kvhnz(kvzhj, 'laya.wx.mini.MiniAdpter'), kvzhj['getJson'] = function (by0c4o) {
            return JSON['parse'](by0c4o);
        }, kvzhj['init'] = function (we21g, ewo_4u) {
            we21g === void 0x0 && (we21g = ![]), ewo_4u === void 0x0 && (ewo_4u = ![]);
            if (kvzhj['_inited']) return;
            kvzhj['window'] = window;
            if (kvzhj['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            kvzhj['_inited'] = !![], kvzhj['isZiYu'] = ewo_4u, kvzhj['isPosMsgYu'] = we21g, kvzhj['EnvConfig'] = {}, !kvzhj['isZiYu'] && (c$abm['setNativeFileDir']('/layaairGame'), c$abm['existDir'](c$abm['fileNativeDir'], e4ow0['create'](kvzhj, kvzhj['onMkdirCallBack']))), kvzhj['window']['focus'] = function () {}, cyb40['getUrlPath'] = function () {}, kvzhj['window']['logtime'] = function (xjs1f) {}, kvzhj['window']['alertTimeLog'] = function (oyb4) {}, kvzhj['window']['resetShareInfo'] = function () {}, kvzhj['window']['CanvasRenderingContext2D'] = function () {}, kvzhj['window']['CanvasRenderingContext2D']['prototype'] = kvzhj['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], kvzhj['window']['document']['body']['appendChild'] = function () {}, kvzhj['EnvConfig']['pixelRatioInt'] = 0x0, td5rq['getPixelRatio'] = kvzhj['pixelRatio'], kvzhj['_preCreateElement'] = tr857['createElement'], tr857['createElement'] = kvzhj['createElement'], td5rq['createShaderCondition'] = kvzhj['createShaderCondition'], jfnsx['parseXMLFromString'] = kvzhj['parseXMLFromString'], amb$lc['_createInputElement'] = r5i37p['_createInputElement'], kvzhj['EnvConfig']['load'] = ymlc$b['prototype']['load'], ymlc$b['prototype']['load'] = cyo_4['prototype']['load'], kvzhj['isZiYu'] && we21g && wx['onMessage'](function (sjzh) {
                sjzh['isLoad'] && (c$abm['ziyuFileData'][sjzh['url']] = sjzh['data']);
            });
        }, kvzhj['onMkdirCallBack'] = function (yb$l, $mb) {
            if (!yb$l) c$abm['filesListObj'] = JSON['parse']($mb['data']);
        }, kvzhj['pixelRatio'] = function () {
            if (!kvzhj['EnvConfig']['pixelRatioInt']) try {
                var wu_g4e = wx['getSystemInfoSync']();
                return kvzhj['EnvConfig']['pixelRatioInt'] = wu_g4e['pixelRatio'], wu_g4e = wu_g4e, wu_g4e['pixelRatio'];
            } catch (hknvz6) {}
            return kvzhj['EnvConfig']['pixelRatioInt'];
        }, kvzhj['createElement'] = function (fxjns) {
            if (fxjns == 'canvas') {
                var vszhnj;
                return kvzhj['idx'] == 0x1 ? kvzhj['isZiYu'] ? (vszhnj = sharedCanvas, vszhnj['style'] = {}) : vszhnj = window['canvas'] : vszhnj = window['wx']['createCanvas'](), kvzhj['idx']++, vszhnj;
            } else {
                if (fxjns == 'textarea' || fxjns == 'input') return kvzhj['onCreateInput'](fxjns);else {
                    if (fxjns == 'div') {
                        var p7tr35 = kvzhj['_preCreateElement'](fxjns);
                        return p7tr35['contains'] = function (qdk6z8) {
                            return null;
                        }, p7tr35['removeChild'] = function (xjnvfs) {}, p7tr35;
                    } else return kvzhj['_preCreateElement'](fxjns);
                }
            }
        }, kvzhj['onCreateInput'] = function (r5tdq) {
            var abclm$ = kvzhj['_preCreateElement'](r5tdq);
            return abclm$['focus'] = r5i37p['wxinputFocus'], abclm$['blur'] = r5i37p['wxinputblur'], abclm$['style'] = {}, abclm$['value'] = 0x0, abclm$['parentElement'] = {}, abclm$['placeholder'] = {}, abclm$['type'] = {}, abclm$['setColor'] = function (f1nxj) {}, abclm$['setType'] = function (lymcb) {}, abclm$['setFontFace'] = function (w0_o) {}, abclm$['addEventListener'] = function (gw_e4) {}, abclm$['contains'] = function (ocyb$0) {
                return null;
            }, abclm$['removeChild'] = function (o4y0b) {}, abclm$;
        }, kvzhj['createShaderCondition'] = function (y0c$bo) {
            var cboy04 = this,
                fnxsj1 = function () {
                var xvsjnh = y0c$bo;
                return cboy04[y0c$bo['replace']('this.', '')];
            };
            return fnxsj1;
        }, kvzhj['EnvConfig'] = null, kvzhj['window'] = null, kvzhj['_preCreateElement'] = null, kvzhj['_inited'] = ![], kvzhj['wxRequest'] = null, kvzhj['systemInfo'] = null, kvzhj['version'] = '0.0.1', kvzhj['isZiYu'] = ![], kvzhj['isPosMsgYu'] = ![], kvzhj['parseXMLFromString'] = function (zvnhsj) {
            var znhjsv, l0cby$;
            zvnhsj = zvnhsj['replace'](/>\s+</g, '><');
            try {
                znhjsv = new window['Parser']['DOMParser']()['parseFromString'](zvnhsj, 'text/xml');
            } catch ($bymc) {
                throw '需要引入xml解析库文件';
            }
            return znhjsv;
        }, kvzhj['idx'] = 0x1, kvzhj;
    }(),
        fu2g1w = function () {
        function ktqd86() {}
        kvhnz(ktqd86, 'laya.wx.mini.MiniImage');
        var w2g1e = ktqd86['prototype'];
        return w2g1e['_loadImage'] = function (fsxnj) {
            var _uw2ge = this,
                ylb0$ = ![];
            fsxnj['indexOf']('layaNativeDir/') == -0x1 && (ylb0$ = !![], fsxnj = ew0o['formatURL'](fsxnj));
            if (!c$abm['getFileInfo'](fsxnj)) {
                if (fsxnj['indexOf']('http://') != -0x1 || fsxnj['indexOf']('https://') != -0x1) c$abm['downImg'](fsxnj, new e4ow0(ktqd86, ktqd86['onDownImgCallBack'], [fsxnj, _uw2ge]), fsxnj);else ktqd86['onCreateImage'](fsxnj, _uw2ge, !![]);
            } else ktqd86['onCreateImage'](fsxnj, _uw2ge, !ylb0$);
        }, ktqd86['onDownImgCallBack'] = function (vnhxjs, xsjfn1, vnh6) {
            if (!vnh6) ktqd86['onCreateImage'](vnhxjs, xsjfn1);else xsjfn1['onError'](null);
        }, ktqd86['onCreateImage'] = function (y0_o, $lcamb, jxsf2) {
            jxsf2 === void 0x0 && (jxsf2 = ![]);
            var nkvhj;
            if (!jxsf2) {
                var tp73 = c$abm['getFileInfo'](y0_o),
                    woe = tp73['md5'];
                nkvhj = c$abm['getFileNativePath'](woe);
            } else nkvhj = y0_o;
            if ($lcamb['imgCache'] == null) $lcamb['imgCache'] = {};
            var k8z6q;
            function qk8dt() {
                k8z6q['onload'] = null, k8z6q['onerror'] = null, delete $lcamb['imgCache'][y0_o];
            }
            ;
            var xsjhvn = function () {
                qk8dt(), $lcamb['onLoaded'](k8z6q);
            },
                guf1w = function () {
                qk8dt(), $lcamb['event']('error', 'Load image failed');
            };
            $lcamb['_type'] == 'nativeimage' ? (k8z6q = new tr857['window']['Image'](), k8z6q['crossOrigin'] = '', k8z6q['onload'] = xsjhvn, k8z6q['onerror'] = guf1w, k8z6q['src'] = nkvhj, $lcamb['imgCache'][y0_o] = k8z6q) : new j1nsf['create'](nkvhj, {
                'onload': xsjhvn,
                'onerror': guf1w,
                'onCreate': function (tq58d) {
                    k8z6q = tq58d, $lcamb['imgCache'][y0_o] = tq58d;
                }
            });
        }, ktqd86;
    }(),
        r5i37p = function () {
        function t7p3r5() {}
        return kvhnz(t7p3r5, 'laya.wx.mini.MiniInput'), t7p3r5['_createInputElement'] = function () {
            amb$lc['_initInput'](amb$lc['area'] = tr857['createElement']('textarea')), amb$lc['_initInput'](amb$lc['input'] = tr857['createElement']('input')), amb$lc['inputContainer'] = tr857['createElement']('div'), amb$lc['inputContainer']['style']['position'] = 'absolute', amb$lc['inputContainer']['style']['zIndex'] = 0x186a0, tr857['container']['appendChild'](amb$lc['inputContainer']), amb$lc['inputContainer']['setPos'] = function (kvz6hn, q6k8t) {
                amb$lc['inputContainer']['style']['left'] = kvz6hn + 'px', amb$lc['inputContainer']['style']['top'] = q6k8t + 'px';
            }, cyb40['stage']['on']('resize', null, t7p3r5['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (r6qt8) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), ug21ew['_soundClass'] = xf2s1g, ug21ew['_musicClass'] = xf2s1g, window['_videoClass'] = e4uw;
        }, t7p3r5['_onStageResize'] = function () {
            var hnxsjv = cyb40['stage']['_canvasTransform']['identity']();
            hnxsjv['scale'](tr857['width'] / $bmca['canvas']['width'] / td5rq['getPixelRatio'](), tr857['height'] / $bmca['canvas']['height'] / td5rq['getPixelRatio']());
        }, t7p3r5['wxinputFocus'] = function (rd8) {
            var e2g1u = amb$lc['inputElement']['target'];
            if (e2g1u && !e2g1u['editable']) return;
            i7r3p['window']['wx']['offKeyboardConfirm'](), i7r3p['window']['wx']['offKeyboardInput'](), i7r3p['window']['wx']['showKeyboard']({
                'defaultValue': e2g1u['text'],
                'maxLength': e2g1u['maxChars'],
                'multiple': e2g1u['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (r7p5i) {},
                'fail': function (eou_) {}
            }), i7r3p['window']['wx']['onKeyboardConfirm'](function (lm9a$) {
                var tq75 = lm9a$ ? lm9a$['value'] : '';
                e2g1u['text'] = tq75, e2g1u['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), i7r3p['window']['wx']['onKeyboardInput'](function (_4wu) {
                var bc0y$o = _4wu ? _4wu['value'] : '';
                if (!e2g1u['multiline']) {
                    if (bc0y$o['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                e2g1u['text'] = bc0y$o, e2g1u['event']('input');
            });
        }, t7p3r5['inputEnter'] = function () {
            amb$lc['inputElement']['target']['focus'] = ![];
        }, t7p3r5['wxinputblur'] = function () {
            t7p3r5['hideKeyboard']();
        }, t7p3r5['hideKeyboard'] = function () {
            i7r3p['window']['wx']['offKeyboardConfirm'](), i7r3p['window']['wx']['offKeyboardInput'](), i7r3p['window']['wx']['hideKeyboard']({
                'success': function (_c0y4) {
                    console['log']('隐藏键盘');
                },
                'fail': function (z6kqdh) {
                    console['log']('隐藏键盘出错:' + (z6kqdh ? z6kqdh['errMsg'] : ''));
                }
            });
        }, t7p3r5;
    }(),
        cyo_4 = function () {
        function o_e4u() {}
        kvhnz(o_e4u, 'laya.wx.mini.MiniLoader');
        var dz68q = o_e4u['prototype'];
        return dz68q['load'] = function (c$myl, t6d, cbma$, j1fs2x, zhnk) {
            cbma$ === void 0x0 && (cbma$ = !![]), zhnk === void 0x0 && (zhnk = ![]);
            var q758r = this;
            q758r['_url'] = c$myl;
            if (c$myl['indexOf']('data:image') === 0x0) q758r['_type'] = t6d = 'image';else q758r['_type'] = t6d || (t6d = q758r['getTypeFromUrl'](c$myl));
            q758r['_cache'] = cbma$, q758r['_data'] = null;
            var uwg_e = 'ascii';
            if (c$myl['indexOf']('.fnt') != -0x1) uwg_e = 'utf8';else t6d == 'arraybuffer' && (uwg_e = '');
            ;
            var _e2uwg = jfnsx['getFileExtension'](c$myl);
            if (o_e4u['_fileTypeArr']['indexOf'](_e2uwg) != -0x1) i7r3p['EnvConfig']['load']['call'](this, c$myl, t6d, cbma$, j1fs2x, zhnk);else {
                if (!c$abm['getFileInfo'](c$myl)) {
                    if (c$myl['indexOf']('layaNativeDir/') != -0x1) {
                        if (i7r3p['isZiYu']) {
                            var d8kqt6 = c$abm['ziyuFileData'][c$myl];
                            q758r['onLoaded'](d8kqt6);
                            return;
                        } else {
                            cosnole['log']('read read'), c$abm['read'](c$myl, uwg_e, new e4ow0(o_e4u, o_e4u['onReadNativeCallBack'], [uwg_e, c$myl, t6d, cbma$, j1fs2x, zhnk, q758r]));
                            return;
                        }
                    }
                    if (ew0o['rootPath'] == '') var nsf1x = c$myl;else nsf1x = c$myl['split'](ew0o['rootPath'])[0x0];
                    c$myl['indexOf']('http://') != -0x1 || c$myl['indexOf']('https://') != -0x1 ? i7r3p['EnvConfig']['load']['call'](q758r, c$myl, t6d, cbma$, j1fs2x, zhnk) : c$abm['readFile'](nsf1x, uwg_e, new e4ow0(o_e4u, o_e4u['onReadNativeCallBack'], [uwg_e, c$myl, t6d, cbma$, j1fs2x, zhnk, q758r]), c$myl);
                } else i7r3p['EnvConfig']['load']['call'](this, c$myl, t6d, cbma$, j1fs2x, zhnk);
            }
        }, dz68q['resMgrLoad'] = function (wug_, $bco0, hkz6, fg1uw, f12wgu, b$lc0y, $a9blm) {
            hkz6 === void 0x0 && (hkz6 = 0x0), fg1uw === void 0x0 && (fg1uw = ![]), f12wgu === void 0x0 && (f12wgu = ![]), b$lc0y === void 0x0 && (b$lc0y = 0x0), $a9blm === void 0x0 && ($a9blm = 0x3), wug_['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', wug_), i7r3p['EnvConfig']['resMgrLoad'](wug_, (w1gue2, al9$, oy$bc) => {
                o_e4u['prototype']['resMgrLoadCallBack'](w1gue2, al9$, oy$bc, $bco0);
            }, hkz6, fg1uw, f12wgu, b$lc0y, $a9blm);
        }, dz68q['resMgrLoadCallBack'] = function (tkq8, q5rtd8, _0e4, mly$c) {
            console['log']('buff:::', tkq8, _0e4, c$abm['fileNativeDir'] + '///' + c$abm['fileListName']), mly$c(tkq8, q5rtd8, _0e4);
        }, dz68q['clearRes'] = function (xjf1n, t75r83) {
            t75r83 === void 0x0 && (t75r83 = ![]);
            var cb$yml = this;
            cb$yml['clearRes'](xjf1n, t75r83);
            var c_y0 = c$abm['getFileInfo'](xjf1n);
            if (c_y0 && (xjf1n['indexOf']('http://') != -0x1 || xjf1n['indexOf']('https://') != -0x1)) {
                var nhzvjk = c_y0['md5'],
                    p753rt = c$abm['getFileNativePath'](nhzvjk);
                c$abm['remove'](p753rt);
            }
        }, o_e4u['onReadNativeCallBack'] = function (p5i3, _o40w, uge12, u1fgx2, lmb$9a, rq85t7, vhknj, b$0ly, nshvx) {
            u1fgx2 === void 0x0 && (u1fgx2 = !![]), rq85t7 === void 0x0 && (rq85t7 = ![]), b$0ly === void 0x0 && (b$0ly = 0x0);
            if (!b$0ly) {
                var y0_co;
                if (uge12 == 'json' || uge12 == 'atlas') y0_co = i7r3p['getJson'](nshvx['data']);else uge12 == 'xml' ? y0_co = jfnsx['parseXMLFromString'](nshvx['data']) : y0_co = nshvx['data'];
                vhknj['onLoaded'](y0_co), !i7r3p['isZiYu'] && i7r3p['isPosMsgYu'] && uge12 != 'arraybuffer' && wx['postMessage']({
                    'url': _o40w,
                    'data': y0_co,
                    'isLoad': !![]
                });
            } else b$0ly == 0x1 && i7r3p['EnvConfig']['load']['call'](vhknj, _o40w, uge12, u1fgx2, lmb$9a, rq85t7);
        }, zjsvhn(o_e4u, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), o_e4u;
    }(),
        c$abm = function (uxgf2) {
        function rqtd5() {
            rqtd5['__super']['call'](this);
            ;
        }
        return kvhnz(rqtd5, 'laya.wx.mini.MiniFileMgr', uxgf2), rqtd5['isLoadFile'] = function (oyc4) {
            return rqtd5['_fileTypeArr']['indexOf'](oyc4) != -0x1 ? !![] : ![];
        }, rqtd5['getFileInfo'] = function ($cblym) {
            var z6knh = $cblym['split']('?')[0x0],
                l0c$y = rqtd5['filesListObj'][z6knh];
            if (l0c$y == null) return null;else return l0c$y;
            return null;
        }, rqtd5['onFileUpdate'] = function (wf12u, gewu4_) {
            var $cymlb = wf12u['split']('/'),
                qdzh = $cymlb[$cymlb['length'] - 0x1],
                hkjzvn = rqtd5['getFileInfo'](gewu4_);
            if (hkjzvn == null) rqtd5['onSaveFile'](gewu4_, qdzh);else {
                if (hkjzvn['readyUrl'] != gewu4_) rqtd5['remove'](qdzh, gewu4_);
            }
        }, rqtd5['exits'] = function (sfj1, wf1gu) {
            var rqt86d = rqtd5['getFileNativePath'](sfj1);
            rqtd5['fs']['getFileInfo']({
                'filePath': rqt86d,
                'success': function (vznkh6) {
                    wf1gu != null && wf1gu['runWith']([0x0, vznkh6]);
                },
                'fail': function (vz6dhk) {
                    wf1gu != null && wf1gu['runWith']([0x1, vz6dhk]);
                }
            });
        }, rqtd5['read'] = function (njvx, k6vhnz, jxvsf, bc$ly) {
            k6vhnz === void 0x0 && (k6vhnz = 'ascill'), bc$ly === void 0x0 && (bc$ly = '');
            var sxfv;
            bc$ly != '' ? sxfv = rqtd5['getFileNativePath'](njvx) : sxfv = njvx, rqtd5['fs']['readFile']({
                'filePath': sxfv,
                'encoding': k6vhnz,
                'success': function (fg21wu) {
                    jxvsf != null && jxvsf['runWith']([0x0, fg21wu]);
                },
                'fail': function (zkdqh6) {
                    if (zkdqh6 && bc$ly != '') rqtd5['down'](bc$ly, k6vhnz, jxvsf, bc$ly);else jxvsf != null && jxvsf['runWith']([0x1]);
                }
            });
        }, rqtd5['readNativeFile'] = function (t87qr, xjfvs) {
            rqtd5['fs']['readFile']({
                'filePath': t87qr,
                'encoding': '',
                'success': function (t87rq5) {
                    xjfvs != null && xjfvs['runWith']([0x0]);
                },
                'fail': function (kjnhz) {
                    xjfvs != null && xjfvs['runWith']([0x1]);
                }
            });
        }, rqtd5['down'] = function (r738t, khvn, g4e, bc0l$y) {
            khvn === void 0x0 && (khvn = 'ascill'), bc0l$y === void 0x0 && (bc0l$y = '');
            var kq86dt = rqtd5['getFileNativePath'](bc0l$y),
                cybo$0 = rqtd5['wxdown']({
                'url': r738t,
                'filePath': kq86dt,
                'success': function (t3578) {
                    if (t3578['statusCode'] === 0xc8) rqtd5['readFile'](t3578['filePath'], khvn, g4e, bc0l$y);
                },
                'fail': function (gux1f) {
                    g4e != null && g4e['runWith']([0x1, gux1f]);
                }
            });
            cybo$0['onProgressUpdate'](function (wug21e) {
                g4e != null && g4e['runWith']([0x2, wug21e['progress']]);
            });
        }, rqtd5['readFile'] = function (bcla$, d68tqk, uf12, x1sfg2) {
            d68tqk === void 0x0 && (d68tqk = 'ascill'), x1sfg2 === void 0x0 && (x1sfg2 = ''), rqtd5['fs']['readFile']({
                'filePath': bcla$,
                'encoding': d68tqk,
                'success': function (gu2e1) {
                    if (bcla$['indexOf']('http://') != -0x1 || bcla$['indexOf']('https://') != -0x1) rqtd5['onFileUpdate'](bcla$, x1sfg2);
                    uf12 != null && uf12['runWith']([0x0, gu2e1]);
                },
                'fail': function (p7t) {
                    if (p7t) uf12 != null && uf12['runWith']([0x1, p7t]);
                }
            });
        }, rqtd5['downImg'] = function (dzq6k, k6vzd, $lm9ba) {
            $lm9ba === void 0x0 && ($lm9ba = '');
            var zvsj = rqtd5['wxdown']({
                'url': dzq6k,
                'success': function (lmyb) {
                    lmyb['statusCode'] === 0xc8 && rqtd5['copyFile'](lmyb['tempFilePath'], $lm9ba, k6vzd);
                },
                'fail': function (sfx1j2) {
                    k6vzd != null && k6vzd['runWith']([0x1, sfx1j2]);
                }
            });
        }, rqtd5['copyFile'] = function (cbm$y, zhq6d, r6tq) {
            var bylmc = cbm$y['split']('/'),
                zq6hdk = bylmc[bylmc['length'] - 0x1],
                hz6qd = zhq6d['split']('?')[0x0],
                vnjxfs = rqtd5['getFileInfo'](zhq6d),
                mlac$ = rqtd5['getFileNativePath'](zq6hdk);
            rqtd5['fs']['copyFile']({
                'srcPath': cbm$y,
                'destPath': mlac$,
                'success': function (hqkd6z) {
                    if (!vnjxfs) rqtd5['onSaveFile'](zhq6d, zq6hdk), r6tq != null && r6tq['runWith']([0x0]);else {
                        if (vnjxfs['readyUrl'] != zhq6d) rqtd5['remove'](zq6hdk, zhq6d, r6tq);
                    }
                },
                'fail': function (zhkqd6) {
                    r6tq != null && r6tq['runWith']([0x1, zhkqd6]);
                }
            });
        }, rqtd5['getFileNativePath'] = function (q6tdk8) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + q6tdk8;
        }, rqtd5['remove'] = function (kzhjnv, eguw12, xj1fs) {
            eguw12 === void 0x0 && (eguw12 = '');
            var tr57q = rqtd5['getFileInfo'](eguw12),
                o0y$ = rqtd5['getFileNativePath'](tr57q['md5']);
            cyb40['loader']['clearRes'](tr57q['readyUrl']), rqtd5['fs']['unlink']({
                'filePath': o0y$,
                'success': function (t6qdk) {
                    if (eguw12 != '') rqtd5['onSaveFile'](eguw12, kzhjnv);
                    xj1fs != null && xj1fs['runWith']([0x0]);
                },
                'fail': function (fs12xj) {}
            });
        }, rqtd5['onSaveFile'] = function (o_0cy, vsjf) {
            var jsfxvn = o_0cy['split']('?')[0x0];
            rqtd5['filesListObj'][jsfxvn] = {
                'md5': vsjf,
                'readyUrl': o_0cy
            }, rqtd5['fs']['writeFile']({
                'filePath': rqtd5['fileNativeDir'] + '/' + rqtd5['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](rqtd5['filesListObj']),
                'success': function (g_w2eu) {
                    console['log']('写入测试测试成功：', g_w2eu);
                },
                'fail': function (y04c_o) {
                    console['log']('写入测试测试失败：', y04c_o);
                }
            });
        }, rqtd5['existDir'] = function (hvzk6, nfs1jx) {
            rqtd5['fs']['mkdir']({
                'dirPath': hvzk6,
                'success': function (fj21s) {
                    nfs1jx != null && nfs1jx['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (i73rp5) {
                    if (i73rp5['errMsg']['indexOf']('file already exists') != -0x1) rqtd5['readSync'](rqtd5['fileListName'], 'utf8', nfs1jx);else nfs1jx != null && nfs1jx['runWith']([0x1, i73rp5]);
                }
            });
        }, rqtd5['readSync'] = function (nzkv, cbal, yb0c, u2e_g) {
            cbal === void 0x0 && (cbal = 'ascill'), u2e_g === void 0x0 && (u2e_g = '');
            var nvfs = rqtd5['getFileNativePath'](nzkv),
                zvknh;
            try {
                zvknh = rqtd5['fs']['readFileSync'](nvfs), yb0c != null && yb0c['runWith']([0x0, { 'data': zvknh }]);
            } catch (p5rt37) {
                yb0c != null && yb0c['runWith']([0x1]);
            }
        }, rqtd5['readCache'] = function () {}, rqtd5['writeCache'] = function (k6q8dt) {
            var d5rq = readyUrl['split']('?')[0x0];
            rqtd5['filesListObj'][d5rq] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, rqtd5['fs']['writeFile']({
                'filePath': rqtd5['fileNativeDir'] + '/' + rqtd5['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](rqtd5['filesListObj']),
                'success': function (_g2ewu) {},
                'fail': function (w21ueg) {}
            });
        }, rqtd5['setNativeFileDir'] = function (l9a$) {
            rqtd5['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + l9a$;
        }, rqtd5['filesListObj'] = {}, rqtd5['fileNativeDir'] = null, rqtd5['fileListName'] = 'layaairfiles.txt', rqtd5['ziyuFileData'] = {}, zjsvhn(rqtd5, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), rqtd5;
    }(dqtk68),
        xf2s1g = function (lm$a) {
        function tqrd86() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], tqrd86['__super']['call'](this), this['_sound'] = tqrd86['_createSound'](), this['_chanell'] = new kzq8(this['_sound']);
        }
        kvhnz(tqrd86, 'laya.wx.mini.MiniSound', lm$a);
        var e21uwg = tqrd86['prototype'];
        return e21uwg['load'] = function (fx1j2) {
            var i5r37 = this;
            fx1j2 = ew0o['formatURL'](fx1j2), this['url'] = fx1j2;
            if (tqrd86['_audioCache'][fx1j2]) {
                this['event']('complete');
                return;
            }
            function y$cml() {
                if (tqrd86['_null'] != undefined) i5r37['_sound']['onCanplay'](tqrd86['_null']), i5r37['_sound']['onError'](tqrd86['_null']);else try {
                    i5r37['_sound']['onCanplay'](null), i5r37['_sound']['onError'](null), tqrd86['_null'] = null;
                } catch (y_40o) {
                    console['warn']('[wxmini] _clearSound:' + y_40o), i5r37['_sound']['onCanplay'](uw2f), i5r37['_sound']['onError'](uw2f), tqrd86['_null'] = uw2f;
                }
            }
            function o40ye_() {
                zkhjv['loaded'] = !![], zkhjv['event']('complete'), tqrd86['_audioCache'][zkhjv['url']] = zkhjv;
            }
            function hkdz6(byl$m) {
                console['error']('errCode=' + byl$m['errCode'] + '  errMsg=' + byl$m['errMsg']), zkhjv['event']('error');
            }
            function uw2f() {}
            this['_sound']['onCanplay'](o40ye_), this['_sound']['onError'](hkdz6), this['_sound']['src'] = fx1j2;
            var zkhjv = this;
        }, e21uwg['play'] = function (r83t57, pt) {
            r83t57 === void 0x0 && (r83t57 = 0x0), pt === void 0x0 && (pt = 0x0);
            var _0owe4, vhsjx;
            if (this['url'] == ug21ew['_tMusic']) {
                if (!tqrd86['_musicAudio']) tqrd86['_musicAudio'] = this['_sound'];
                _0owe4 = tqrd86['_musicAudio'], vhsjx = this['_chanell'];
            } else _0owe4 = this['_sound'], vhsjx = this['_chanell'];
            return _0owe4['src'] = this['url'], _0owe4['startTime'] = 0x0, vhsjx['isStopped'] && (vhsjx['url'] = this['url'], vhsjx['loops'] = pt, vhsjx['startTime'] = r83t57, vhsjx['play'](), ug21ew['addChannel'](vhsjx)), vhsjx;
        }, e21uwg['dispose'] = function () {
            var g1ew2 = tqrd86['_audioCache'][this['url']];
            g1ew2 && (g1ew2['src'] = '', delete tqrd86['_audioCache'][this['url']]);
        }, vsz(0x0, e21uwg, 'duration', function () {
            return this['_sound']['duration'];
        }), tqrd86['_createSound'] = function () {
            tqrd86['_id']++;
            var wu4oe = i7r3p['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return wu4oe;
        }, tqrd86['_musicAudio'] = null, tqrd86['_id'] = 0x0, tqrd86['_audioCache'] = {}, tqrd86['_null'] = undefined, tqrd86;
    }(dqtk68),
        kzq8 = function (qz6hk) {
        function r75pt(f1sxn) {
            this['_audio'] = null, this['_onEnd'] = null, r75pt['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = f1sxn, this['_onEnd'] = jfnsx['bind'](this['__onEnd'], this), f1sxn['onEnded'](this['_onEnd']);
        }
        kvhnz(r75pt, 'laya.wx.mini.MiniSoundChannel', qz6hk);
        var qd6k = r75pt['prototype'];
        return qd6k['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (cyb40['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, qd6k['__onNull'] = function () {}, qd6k['play'] = function () {
            this['isStopped'] = ![], ug21ew['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, qd6k['stop'] = function () {
            this['isStopped'] = !![], ug21ew['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, qd6k['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, qd6k['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], ug21ew['addChannel'](this), this['_audio']['play']();
        }, vsz(0x0, qd6k, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), vsz(0x0, qd6k, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), vsz(0x0, qd6k, 'volume', function () {
            return 0x1;
        }, function (td58) {}), r75pt['_null'] = undefined, r75pt;
    }(vhzk),
        e4uw = function () {
        function gx1f2s() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = i7r3p['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        kvhnz(gx1f2s, 'laya.wx.mini.MiniVideo');
        var v6kzhn = gx1f2s['prototype'];
        return v6kzhn['on'] = function (tq8k6d, svnjzh, qh6zdk) {
            if (tq8k6d == 'loadedmetadata') this['onPlayFunc'] = qh6zdk['bind'](svnjzh), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else tq8k6d == 'ended' && (this['onEndedFunC'] = qh6zdk['bind'](svnjzh), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, v6kzhn['onTimeUpdateFunc'] = function (jvnxsf) {
            this['position'] = jvnxsf['position'], this['_duration'] = jvnxsf['duration'];
        }, v6kzhn['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, v6kzhn['onended'] = function (bcoy, r75t3p) {
            this['onEndedFunC'] = r75t3p['bind'](bcoy), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, v6kzhn['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, v6kzhn['off'] = function (nzkjvh, zqd6kh, qdtk6) {
            if (nzkjvh == 'loadedmetadata') this['onPlayFunc'] = qdtk6['bind'](zqd6kh), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else nzkjvh == 'ended' && (this['onEndedFunC'] = qdtk6['bind'](zqd6kh), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, v6kzhn['load'] = function (u4ge_w) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = u4ge_w;
        }, v6kzhn['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, v6kzhn['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, v6kzhn['size'] = function (dkh6z, fgx2s) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = dkh6z, this['videoElement']['height'] = fgx2s;
        }, v6kzhn['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, v6kzhn['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, vsz(0x0, v6kzhn, 'duration', function () {
            return this['_duration'];
        }), vsz(0x0, v6kzhn, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (p57t3r) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = p57t3r;
        }), vsz(0x0, v6kzhn, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), vsz(0x0, v6kzhn, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), vsz(0x0, v6kzhn, 'ended', function () {
            return this['videoend'];
        }), vsz(0x0, v6kzhn, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (r37i5) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = r37i5;
        }), vsz(0x0, v6kzhn, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (nfjs) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = nfjs;
        }), vsz(0x0, v6kzhn, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (nj1fx) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = nj1fx;
        }), vsz(0x0, v6kzhn, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), vsz(0x0, v6kzhn, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (hxjv) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = hxjv;
        }), vsz(0x0, v6kzhn, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function ($lcbym) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = $lcbym;
        }), vsz(0x0, v6kzhn, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), vsz(0x0, v6kzhn, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (gwe4_u) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = gwe4_u;
        }), vsz(0x0, v6kzhn, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (w04e_) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = w04e_;
        }), vsz(0x0, v6kzhn, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (e2g1w) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = e2g1w;
        }), gx1f2s;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var _w4ou in Laya) {
        var n1xfjs = Laya[_w4ou];
        n1xfjs && n1xfjs['__isclass'] && (exports[_w4ou] = n1xfjs);
    }
});