var G = wx.$E;
(function (window, document, mcbk$) {
    var k4 = mcbk$['un'],
        qf8vwr = mcbk$['uns'],
        z0s32t = mcbk$['static'],
        s_13t2 = mcbk$['class'],
        cbmf4 = mcbk$['getset'],
        d6k5i = mcbk$['__newvec'],
        qrwuva = laya['utils']['Browser'],
        r9aquh = laya['events']['Event'],
        c4k5$ = laya['events']['EventDispatcher'],
        ck4b$m = laya['resource']['HTMLImage'],
        hqaru9 = laya['utils']['Handler'],
        i15jd = laya['display']['Input'],
        p9hg = laya['net']['Loader'],
        qru9ah = laya['maths']['Matrix'],
        v8fwr = laya['renders']['Render'],
        hqra9 = laya['utils']['RunDriver'],
        b7mfc = laya['media']['Sound'],
        wm7 = laya['media']['SoundChannel'],
        loxp = laya['media']['SoundManager'],
        fw7bm = laya['display']['Stage'],
        s321_t = laya['net']['URL'],
        t1s32_ = laya['utils']['Utils'],
        t1d_si = function () {
        function itd1_j() {}
        return s_13t2(itd1_j, 'laya.wx.mini.MiniAdpter'), itd1_j['getJson'] = function (uvraw) {
            return JSON['parse'](uvraw);
        }, itd1_j['init'] = function (c645k, v8wfq) {
            c645k === void 0x0 && (c645k = ![]), v8wfq === void 0x0 && (v8wfq = ![]);
            if (itd1_j['_inited']) return;
            itd1_j['window'] = window;
            if (itd1_j['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            itd1_j['_inited'] = !![], itd1_j['isZiYu'] = v8wfq, itd1_j['isPosMsgYu'] = c645k, itd1_j['EnvConfig'] = {}, !itd1_j['isZiYu'] && (t0_23['setNativeFileDir']('/layaairGame'), t0_23['existDir'](t0_23['fileNativeDir'], hqaru9['create'](itd1_j, itd1_j['onMkdirCallBack']))), itd1_j['window']['focus'] = function () {}, mcbk$['getUrlPath'] = function () {}, itd1_j['window']['logtime'] = function (c6k$45) {}, itd1_j['window']['alertTimeLog'] = function ($6k54) {}, itd1_j['window']['resetShareInfo'] = function () {}, itd1_j['window']['CanvasRenderingContext2D'] = function () {}, itd1_j['window']['CanvasRenderingContext2D']['prototype'] = itd1_j['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], itd1_j['window']['document']['body']['appendChild'] = function () {}, itd1_j['EnvConfig']['pixelRatioInt'] = 0x0, hqra9['getPixelRatio'] = itd1_j['pixelRatio'], itd1_j['_preCreateElement'] = qrwuva['createElement'], qrwuva['createElement'] = itd1_j['createElement'], hqra9['createShaderCondition'] = itd1_j['createShaderCondition'], t1s32_['parseXMLFromString'] = itd1_j['parseXMLFromString'], i15jd['_createInputElement'] = itd_1['_createInputElement'], itd1_j['EnvConfig']['load'] = p9hg['prototype']['load'], p9hg['prototype']['load'] = _ts312['prototype']['load'], itd1_j['isZiYu'] && c645k && wx['onMessage'](function (rqva8) {
                rqva8['isLoad'] && (t0_23['ziyuFileData'][rqva8['url']] = rqva8['data']);
            });
        }, itd1_j['onMkdirCallBack'] = function (rqa8w, i6djk) {
            if (!rqa8w) t0_23['filesListObj'] = JSON['parse'](i6djk['data']);
        }, itd1_j['pixelRatio'] = function () {
            if (!itd1_j['EnvConfig']['pixelRatioInt']) try {
                var t1jid_ = wx['getSystemInfoSync']();
                return itd1_j['EnvConfig']['pixelRatioInt'] = t1jid_['pixelRatio'], t1jid_ = t1jid_, t1jid_['pixelRatio'];
            } catch (j$ck6) {}
            return itd1_j['EnvConfig']['pixelRatioInt'];
        }, itd1_j['createElement'] = function (i561j) {
            if (i561j == 'canvas') {
                var _0t3s;
                return itd1_j['idx'] == 0x1 ? itd1_j['isZiYu'] ? (_0t3s = sharedCanvas, _0t3s['style'] = {}) : _0t3s = window['canvas'] : _0t3s = window['wx']['createCanvas'](), itd1_j['idx']++, _0t3s;
            } else {
                if (i561j == 'textarea' || i561j == 'input') return itd1_j['onCreateInput'](i561j);else {
                    if (i561j == 'div') {
                        var b47$cm = itd1_j['_preCreateElement'](i561j);
                        return b47$cm['contains'] = function (dkj$65) {
                            return null;
                        }, b47$cm['removeChild'] = function (uv9qar) {}, b47$cm;
                    } else return itd1_j['_preCreateElement'](i561j);
                }
            }
        }, itd1_j['onCreateInput'] = function (raqwuv) {
            var q8wrva = itd1_j['_preCreateElement'](raqwuv);
            return q8wrva['focus'] = itd_1['wxinputFocus'], q8wrva['blur'] = itd_1['wxinputblur'], q8wrva['style'] = {}, q8wrva['value'] = 0x0, q8wrva['parentElement'] = {}, q8wrva['placeholder'] = {}, q8wrva['type'] = {}, q8wrva['setColor'] = function (vqwrf) {}, q8wrva['setType'] = function (lpgynh) {}, q8wrva['setFontFace'] = function (hnyp9) {}, q8wrva['addEventListener'] = function (z203ts) {}, q8wrva['contains'] = function (ji6d51) {
                return null;
            }, q8wrva['removeChild'] = function (kc4bm$) {}, q8wrva;
        }, itd1_j['createShaderCondition'] = function (vqfr8) {
            var tj1 = this,
                $6b4c = function () {
                var yoxlnp = vqfr8;
                return tj1[vqfr8['replace']('this.', '')];
            };
            return $6b4c;
        }, itd1_j['EnvConfig'] = null, itd1_j['window'] = null, itd1_j['_preCreateElement'] = null, itd1_j['_inited'] = ![], itd1_j['wxRequest'] = null, itd1_j['systemInfo'] = null, itd1_j['version'] = '0.0.1', itd1_j['isZiYu'] = ![], itd1_j['isPosMsgYu'] = ![], itd1_j['parseXMLFromString'] = function ($bm4kc) {
            var uh9y, m8fwb;
            $bm4kc = $bm4kc['replace'](/>\s+</g, '><');
            try {
                uh9y = new window['Parser']['DOMParser']()['parseFromString']($bm4kc, 'text/xml');
            } catch (uvrw) {
                throw '需要引入xml解析库文件';
            }
            return uh9y;
        }, itd1_j['idx'] = 0x1, itd1_j;
    }(),
        bf74cm = function () {
        function idjt() {}
        s_13t2(idjt, 'laya.wx.mini.MiniImage');
        var bm47cf = idjt['prototype'];
        return bm47cf['_loadImage'] = function (auqr9h) {
            var _t1jid = this,
                gphyln = ![];
            auqr9h['indexOf']('layaNativeDir/') == -0x1 && (gphyln = !![], auqr9h = s321_t['formatURL'](auqr9h));
            if (!t0_23['getFileInfo'](auqr9h)) {
                if (auqr9h['indexOf']('http://') != -0x1 || auqr9h['indexOf']('https://') != -0x1) t0_23['downImg'](auqr9h, new hqaru9(idjt, idjt['onDownImgCallBack'], [auqr9h, _t1jid]), auqr9h);else idjt['onCreateImage'](auqr9h, _t1jid, !![]);
            } else idjt['onCreateImage'](auqr9h, _t1jid, !gphyln);
        }, idjt['onDownImgCallBack'] = function (uga9, xyng, augq9h) {
            if (!augq9h) idjt['onCreateImage'](uga9, xyng);else xyng['onError'](null);
        }, idjt['onCreateImage'] = function (djk$5, t1dis_, $c5j6k) {
            $c5j6k === void 0x0 && ($c5j6k = ![]);
            var b4m78;
            if (!$c5j6k) {
                var b4mck$ = t0_23['getFileInfo'](djk$5),
                    i_dj15 = b4mck$['md5'];
                b4m78 = t0_23['getFileNativePath'](i_dj15);
            } else b4m78 = djk$5;
            if (t1dis_['imgCache'] == null) t1dis_['imgCache'] = {};
            var qugh9;
            function z203st() {
                qugh9['onload'] = null, qugh9['onerror'] = null, delete t1dis_['imgCache'][djk$5];
            }
            ;
            var k46b$c = function () {
                z203st(), t1dis_['onLoaded'](qugh9);
            },
                vuwr = function () {
                z203st(), t1dis_['event']('error', 'Load image failed');
            };
            t1dis_['_type'] == 'nativeimage' ? (qugh9 = new qrwuva['window']['Image'](), qugh9['crossOrigin'] = '', qugh9['onload'] = k46b$c, qugh9['onerror'] = vuwr, qugh9['src'] = b4m78, t1dis_['imgCache'][djk$5] = qugh9) : new ck4b$m['create'](b4m78, {
                'onload': k46b$c,
                'onerror': vuwr,
                'onCreate': function (hurq9a) {
                    qugh9 = hurq9a, t1dis_['imgCache'][djk$5] = hurq9a;
                }
            });
        }, idjt;
    }(),
        itd_1 = function () {
        function wfqv8() {}
        return s_13t2(wfqv8, 'laya.wx.mini.MiniInput'), wfqv8['_createInputElement'] = function () {
            i15jd['_initInput'](i15jd['area'] = qrwuva['createElement']('textarea')), i15jd['_initInput'](i15jd['input'] = qrwuva['createElement']('input')), i15jd['inputContainer'] = qrwuva['createElement']('div'), i15jd['inputContainer']['style']['position'] = 'absolute', i15jd['inputContainer']['style']['zIndex'] = 0x186a0, qrwuva['container']['appendChild'](i15jd['inputContainer']), i15jd['inputContainer']['setPos'] = function (k4m$c, s123t) {
                i15jd['inputContainer']['style']['left'] = k4m$c + 'px', i15jd['inputContainer']['style']['top'] = s123t + 'px';
            }, mcbk$['stage']['on']('resize', null, wfqv8['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (it1_s2) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), loxp['_soundClass'] = i1ts2, loxp['_musicClass'] = i1ts2, window['_videoClass'] = wrvf78;
        }, wfqv8['_onStageResize'] = function () {
            var uyg9 = mcbk$['stage']['_canvasTransform']['identity']();
            uyg9['scale'](qrwuva['width'] / v8fwr['canvas']['width'] / hqra9['getPixelRatio'](), qrwuva['height'] / v8fwr['canvas']['height'] / hqra9['getPixelRatio']());
        }, wfqv8['wxinputFocus'] = function (j1_it) {
            var rvwfq8 = i15jd['inputElement']['target'];
            if (rvwfq8 && !rvwfq8['editable']) return;
            t1d_si['window']['wx']['offKeyboardConfirm'](), t1d_si['window']['wx']['offKeyboardInput'](), t1d_si['window']['wx']['showKeyboard']({
                'defaultValue': rvwfq8['text'],
                'maxLength': rvwfq8['maxChars'],
                'multiple': rvwfq8['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (dj61i5) {},
                'fail': function (ylpx) {}
            }), t1d_si['window']['wx']['onKeyboardConfirm'](function (ypu9) {
                var $k6jd = ypu9 ? ypu9['value'] : '';
                rvwfq8['text'] = $k6jd, rvwfq8['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), t1d_si['window']['wx']['onKeyboardInput'](function (hnpg) {
                var rv9uq = hnpg ? hnpg['value'] : '';
                if (!rvwfq8['multiline']) {
                    if (rv9uq['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                rvwfq8['text'] = rv9uq, rvwfq8['event']('input');
            });
        }, wfqv8['inputEnter'] = function () {
            i15jd['inputElement']['target']['focus'] = ![];
        }, wfqv8['wxinputblur'] = function () {
            wfqv8['hideKeyboard']();
        }, wfqv8['hideKeyboard'] = function () {
            t1d_si['window']['wx']['offKeyboardConfirm'](), t1d_si['window']['wx']['offKeyboardInput'](), t1d_si['window']['wx']['hideKeyboard']({
                'success': function (sz0) {
                    console['log']('隐藏键盘');
                },
                'fail': function ($5djk6) {
                    console['log']('隐藏键盘出错:' + ($5djk6 ? $5djk6['errMsg'] : ''));
                }
            });
        }, wfqv8;
    }(),
        _ts312 = function () {
        function d1_jit() {}
        s_13t2(d1_jit, 'laya.wx.mini.MiniLoader');
        var $cmb74 = d1_jit['prototype'];
        return $cmb74['load'] = function (j1itd, f4c7mb, _23st0, d_1tis, m4kc$b) {
            _23st0 === void 0x0 && (_23st0 = !![]), m4kc$b === void 0x0 && (m4kc$b = ![]);
            var vwurqa = this;
            vwurqa['_url'] = j1itd;
            if (j1itd['indexOf']('data:image') === 0x0) vwurqa['_type'] = f4c7mb = 'image';else vwurqa['_type'] = f4c7mb || (f4c7mb = vwurqa['getTypeFromUrl'](j1itd));
            vwurqa['_cache'] = _23st0, vwurqa['_data'] = null;
            var j$k5d6 = 'ascii';
            if (j1itd['indexOf']('.fnt') != -0x1) j$k5d6 = 'utf8';else f4c7mb == 'arraybuffer' && (j$k5d6 = '');
            ;
            var rauh9q = t1s32_['getFileExtension'](j1itd);
            if (d1_jit['_fileTypeArr']['indexOf'](rauh9q) != -0x1) t1d_si['EnvConfig']['load']['call'](this, j1itd, f4c7mb, _23st0, d_1tis, m4kc$b);else {
                if (!t0_23['getFileInfo'](j1itd)) {
                    if (j1itd['indexOf']('layaNativeDir/') != -0x1) {
                        if (t1d_si['isZiYu']) {
                            var quhga = t0_23['ziyuFileData'][j1itd];
                            vwurqa['onLoaded'](quhga);
                            return;
                        } else {
                            cosnole['log']('read read'), t0_23['read'](j1itd, j$k5d6, new hqaru9(d1_jit, d1_jit['onReadNativeCallBack'], [j$k5d6, j1itd, f4c7mb, _23st0, d_1tis, m4kc$b, vwurqa]));
                            return;
                        }
                    }
                    if (s321_t['rootPath'] == '') var cfb7m = j1itd;else cfb7m = j1itd['split'](s321_t['rootPath'])[0x0];
                    j1itd['indexOf']('http://') != -0x1 || j1itd['indexOf']('https://') != -0x1 ? t1d_si['EnvConfig']['load']['call'](vwurqa, j1itd, f4c7mb, _23st0, d_1tis, m4kc$b) : t0_23['readFile'](cfb7m, j$k5d6, new hqaru9(d1_jit, d1_jit['onReadNativeCallBack'], [j$k5d6, j1itd, f4c7mb, _23st0, d_1tis, m4kc$b, vwurqa]), j1itd);
                } else t1d_si['EnvConfig']['load']['call'](this, j1itd, f4c7mb, _23st0, d_1tis, m4kc$b);
            }
        }, $cmb74['resMgrLoad'] = function (d65kj$, hpnlg, lypgnh, f8m74b, nopyxl, z3s20, pno) {
            lypgnh === void 0x0 && (lypgnh = 0x0), f8m74b === void 0x0 && (f8m74b = ![]), nopyxl === void 0x0 && (nopyxl = ![]), z3s20 === void 0x0 && (z3s20 = 0x0), pno === void 0x0 && (pno = 0x3), d65kj$['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', d65kj$), t1d_si['EnvConfig']['resMgrLoad'](d65kj$, (ygnlp, wm7b8f, oypnxl) => {
                d1_jit['prototype']['resMgrLoadCallBack'](ygnlp, wm7b8f, oypnxl, hpnlg);
            }, lypgnh, f8m74b, nopyxl, z3s20, pno);
        }, $cmb74['resMgrLoadCallBack'] = function (r8vwqf, ti1_2, nyhp9, d651i) {
            console['log']('buff:::', r8vwqf, nyhp9, t0_23['fileNativeDir'] + '///' + t0_23['fileListName']), d651i(r8vwqf, ti1_2, nyhp9);
        }, $cmb74['clearRes'] = function (ruha, dji651) {
            dji651 === void 0x0 && (dji651 = ![]);
            var awuvr = this;
            awuvr['clearRes'](ruha, dji651);
            var lxnyg = t0_23['getFileInfo'](ruha);
            if (lxnyg && (ruha['indexOf']('http://') != -0x1 || ruha['indexOf']('https://') != -0x1)) {
                var j56k$c = lxnyg['md5'],
                    $cj6k = t0_23['getFileNativePath'](j56k$c);
                t0_23['remove']($cj6k);
            }
        }, d1_jit['onReadNativeCallBack'] = function (_it1ds, aruh, m$bc47, aphgu, m8bw7, $4kmb, t_id, _ij, qrawvu) {
            aphgu === void 0x0 && (aphgu = !![]), $4kmb === void 0x0 && ($4kmb = ![]), _ij === void 0x0 && (_ij = 0x0);
            if (!_ij) {
                var jk5i;
                if (m$bc47 == 'json' || m$bc47 == 'atlas') jk5i = t1d_si['getJson'](qrawvu['data']);else m$bc47 == 'xml' ? jk5i = t1s32_['parseXMLFromString'](qrawvu['data']) : jk5i = qrawvu['data'];
                t_id['onLoaded'](jk5i), !t1d_si['isZiYu'] && t1d_si['isPosMsgYu'] && m$bc47 != 'arraybuffer' && wx['postMessage']({
                    'url': aruh,
                    'data': jk5i,
                    'isLoad': !![]
                });
            } else _ij == 0x1 && t1d_si['EnvConfig']['load']['call'](t_id, aruh, m$bc47, aphgu, m8bw7, $4kmb);
        }, z0s32t(d1_jit, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), d1_jit;
    }(),
        t0_23 = function (t230) {
        function t32_0s() {
            t32_0s['__super']['call'](this);
            ;
        }
        return s_13t2(t32_0s, 'laya.wx.mini.MiniFileMgr', t230), t32_0s['isLoadFile'] = function (pua9h) {
            return t32_0s['_fileTypeArr']['indexOf'](pua9h) != -0x1 ? !![] : ![];
        }, t32_0s['getFileInfo'] = function (k$cb4) {
            var wv87mf = k$cb4['split']('?')[0x0],
                d1t_s = t32_0s['filesListObj'][wv87mf];
            if (d1t_s == null) return null;else return d1t_s;
            return null;
        }, t32_0s['onFileUpdate'] = function (ti12s_, b4f7m8) {
            var _13 = ti12s_['split']('/'),
                pyolnx = _13[_13['length'] - 0x1],
                arqwv8 = t32_0s['getFileInfo'](b4f7m8);
            if (arqwv8 == null) t32_0s['onSaveFile'](b4f7m8, pyolnx);else {
                if (arqwv8['readyUrl'] != b4f7m8) t32_0s['remove'](pyolnx, b4f7m8);
            }
        }, t32_0s['exits'] = function (gapuh9, uhpy) {
            var vra = t32_0s['getFileNativePath'](gapuh9);
            t32_0s['fs']['getFileInfo']({
                'filePath': vra,
                'success': function (jikd65) {
                    uhpy != null && uhpy['runWith']([0x0, jikd65]);
                },
                'fail': function ($456c) {
                    uhpy != null && uhpy['runWith']([0x1, $456c]);
                }
            });
        }, t32_0s['read'] = function (xlnyop, $dj5k, ts21i_, qfvrw8) {
            $dj5k === void 0x0 && ($dj5k = 'ascill'), qfvrw8 === void 0x0 && (qfvrw8 = '');
            var auh9qg;
            qfvrw8 != '' ? auh9qg = t32_0s['getFileNativePath'](xlnyop) : auh9qg = xlnyop, t32_0s['fs']['readFile']({
                'filePath': auh9qg,
                'encoding': $dj5k,
                'success': function (i1j6) {
                    ts21i_ != null && ts21i_['runWith']([0x0, i1j6]);
                },
                'fail': function (ruq9ha) {
                    if (ruq9ha && qfvrw8 != '') t32_0s['down'](qfvrw8, $dj5k, ts21i_, qfvrw8);else ts21i_ != null && ts21i_['runWith']([0x1]);
                }
            });
        }, t32_0s['readNativeFile'] = function (gup9, qvra) {
            t32_0s['fs']['readFile']({
                'filePath': gup9,
                'encoding': '',
                'success': function (m4fb78) {
                    qvra != null && qvra['runWith']([0x0]);
                },
                'fail': function (dt_si) {
                    qvra != null && qvra['runWith']([0x1]);
                }
            });
        }, t32_0s['down'] = function (m7vf, qhag9u, k$j6, paghu9) {
            qhag9u === void 0x0 && (qhag9u = 'ascill'), paghu9 === void 0x0 && (paghu9 = '');
            var yxng = t32_0s['getFileNativePath'](paghu9),
                lphy = t32_0s['wxdown']({
                'url': m7vf,
                'filePath': yxng,
                'success': function (xglny) {
                    if (xglny['statusCode'] === 0xc8) t32_0s['readFile'](xglny['filePath'], qhag9u, k$j6, paghu9);
                },
                'fail': function (q9aguh) {
                    k$j6 != null && k$j6['runWith']([0x1, q9aguh]);
                }
            });
            lphy['onProgressUpdate'](function (dj_5i1) {
                k$j6 != null && k$j6['runWith']([0x2, dj_5i1['progress']]);
            });
        }, t32_0s['readFile'] = function (ghuqa, bwfm78, b$ck64, ghp9ny) {
            bwfm78 === void 0x0 && (bwfm78 = 'ascill'), ghp9ny === void 0x0 && (ghp9ny = ''), t32_0s['fs']['readFile']({
                'filePath': ghuqa,
                'encoding': bwfm78,
                'success': function (djk6) {
                    if (ghuqa['indexOf']('http://') != -0x1 || ghuqa['indexOf']('https://') != -0x1) t32_0s['onFileUpdate'](ghuqa, ghp9ny);
                    b$ck64 != null && b$ck64['runWith']([0x0, djk6]);
                },
                'fail': function (wuvqra) {
                    if (wuvqra) b$ck64 != null && b$ck64['runWith']([0x1, wuvqra]);
                }
            });
        }, t32_0s['downImg'] = function (fmc7, ist, _ts1d) {
            _ts1d === void 0x0 && (_ts1d = '');
            var hyn9pg = t32_0s['wxdown']({
                'url': fmc7,
                'success': function (qfwvr8) {
                    qfwvr8['statusCode'] === 0xc8 && t32_0s['copyFile'](qfwvr8['tempFilePath'], _ts1d, ist);
                },
                'fail': function (gu9qh) {
                    ist != null && ist['runWith']([0x1, gu9qh]);
                }
            });
        }, t32_0s['copyFile'] = function (uhra9q, qhgau9, qgau) {
            var vauwqr = uhra9q['split']('/'),
                hygnlp = vauwqr[vauwqr['length'] - 0x1],
                bm8w7f = qhgau9['split']('?')[0x0],
                j65id = t32_0s['getFileInfo'](qhgau9),
                d6k5 = t32_0s['getFileNativePath'](hygnlp);
            t32_0s['fs']['copyFile']({
                'srcPath': uhra9q,
                'destPath': d6k5,
                'success': function (h9arq) {
                    if (!j65id) t32_0s['onSaveFile'](qhgau9, hygnlp), qgau != null && qgau['runWith']([0x0]);else {
                        if (j65id['readyUrl'] != qhgau9) t32_0s['remove'](hygnlp, qhgau9, qgau);
                    }
                },
                'fail': function (it12_) {
                    qgau != null && qgau['runWith']([0x1, it12_]);
                }
            });
        }, t32_0s['getFileNativePath'] = function (jd65) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + jd65;
        }, t32_0s['remove'] = function (vrqwau, pn9gy, di5j) {
            pn9gy === void 0x0 && (pn9gy = '');
            var qurav9 = t32_0s['getFileInfo'](pn9gy),
                j1_i = t32_0s['getFileNativePath'](qurav9['md5']);
            mcbk$['loader']['clearRes'](qurav9['readyUrl']), t32_0s['fs']['unlink']({
                'filePath': j1_i,
                'success': function (puy9gh) {
                    if (pn9gy != '') t32_0s['onSaveFile'](pn9gy, vrqwau);
                    di5j != null && di5j['runWith']([0x0]);
                },
                'fail': function (mwfv7) {}
            });
        }, t32_0s['onSaveFile'] = function (pu9y, wm8v) {
            var noyl = pu9y['split']('?')[0x0];
            t32_0s['filesListObj'][noyl] = {
                'md5': wm8v,
                'readyUrl': pu9y
            }, t32_0s['fs']['writeFile']({
                'filePath': t32_0s['fileNativeDir'] + '/' + t32_0s['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](t32_0s['filesListObj']),
                'success': function (yhlgp) {
                    console['log']('写入测试测试成功：', yhlgp);
                },
                'fail': function (yhg) {
                    console['log']('写入测试测试失败：', yhg);
                }
            });
        }, t32_0s['existDir'] = function (yngp9, _15jdi) {
            t32_0s['fs']['mkdir']({
                'dirPath': yngp9,
                'success': function (wf) {
                    _15jdi != null && _15jdi['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (_3t02s) {
                    if (_3t02s['errMsg']['indexOf']('file already exists') != -0x1) t32_0s['readSync'](t32_0s['fileListName'], 'utf8', _15jdi);else _15jdi != null && _15jdi['runWith']([0x1, _3t02s]);
                }
            });
        }, t32_0s['readSync'] = function (i2ts_1, $4cb6, yhlgn, hpyug9) {
            $4cb6 === void 0x0 && ($4cb6 = 'ascill'), hpyug9 === void 0x0 && (hpyug9 = '');
            var pgnlyh = t32_0s['getFileNativePath'](i2ts_1),
                f7bc4m;
            try {
                f7bc4m = t32_0s['fs']['readFileSync'](pgnlyh), yhlgn != null && yhlgn['runWith']([0x0, { 'data': f7bc4m }]);
            } catch (m74bf8) {
                yhlgn != null && yhlgn['runWith']([0x1]);
            }
        }, t32_0s['readCache'] = function () {}, t32_0s['writeCache'] = function (kcm$b4) {
            var $b4kc = readyUrl['split']('?')[0x0];
            t32_0s['filesListObj'][$b4kc] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, t32_0s['fs']['writeFile']({
                'filePath': t32_0s['fileNativeDir'] + '/' + t32_0s['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](t32_0s['filesListObj']),
                'success': function (avur) {},
                'fail': function (j65idk) {}
            });
        }, t32_0s['setNativeFileDir'] = function ($46) {
            t32_0s['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + $46;
        }, t32_0s['filesListObj'] = {}, t32_0s['fileNativeDir'] = null, t32_0s['fileListName'] = 'layaairfiles.txt', t32_0s['ziyuFileData'] = {}, z0s32t(t32_0s, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), t32_0s;
    }(c4k5$),
        i1ts2 = function (cb$4k) {
        function mbw7f8() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], mbw7f8['__super']['call'](this), this['_sound'] = mbw7f8['_createSound'](), this['_chanell'] = new _di1jt(this['_sound']);
        }
        s_13t2(mbw7f8, 'laya.wx.mini.MiniSound', cb$4k);
        var lxyo = mbw7f8['prototype'];
        return lxyo['load'] = function (d6ki) {
            var _ijd1 = this;
            d6ki = s321_t['formatURL'](d6ki), this['url'] = d6ki;
            if (mbw7f8['_audioCache'][d6ki]) {
                this['event']('complete');
                return;
            }
            function wfvm87() {
                if (mbw7f8['_null'] != undefined) _ijd1['_sound']['onCanplay'](mbw7f8['_null']), _ijd1['_sound']['onError'](mbw7f8['_null']);else try {
                    _ijd1['_sound']['onCanplay'](null), _ijd1['_sound']['onError'](null), mbw7f8['_null'] = null;
                } catch (hagpu) {
                    console['warn']('[wxmini] _clearSound:' + hagpu), _ijd1['_sound']['onCanplay'](_t1jdi), _ijd1['_sound']['onError'](_t1jdi), mbw7f8['_null'] = _t1jdi;
                }
            }
            function w7mb8() {
                sid_['loaded'] = !![], sid_['event']('complete'), mbw7f8['_audioCache'][sid_['url']] = sid_;
            }
            function _1t32s(oylx) {
                console['error']('errCode=' + oylx['errCode'] + '  errMsg=' + oylx['errMsg']), sid_['event']('error');
            }
            function _t1jdi() {}
            this['_sound']['onCanplay'](w7mb8), this['_sound']['onError'](_1t32s), this['_sound']['src'] = d6ki;
            var sid_ = this;
        }, lxyo['play'] = function (_1, $c54) {
            _1 === void 0x0 && (_1 = 0x0), $c54 === void 0x0 && ($c54 = 0x0);
            var oylnx, vr87f;
            if (this['url'] == loxp['_tMusic']) {
                if (!mbw7f8['_musicAudio']) mbw7f8['_musicAudio'] = this['_sound'];
                oylnx = mbw7f8['_musicAudio'], vr87f = this['_chanell'];
            } else oylnx = this['_sound'], vr87f = this['_chanell'];
            return oylnx['src'] = this['url'], oylnx['startTime'] = 0x0, vr87f['isStopped'] && (vr87f['url'] = this['url'], vr87f['loops'] = $c54, vr87f['startTime'] = _1, vr87f['play'](), loxp['addChannel'](vr87f)), vr87f;
        }, lxyo['dispose'] = function () {
            var j$kd6 = mbw7f8['_audioCache'][this['url']];
            j$kd6 && (j$kd6['src'] = '', delete mbw7f8['_audioCache'][this['url']]);
        }, cbmf4(0x0, lxyo, 'duration', function () {
            return this['_sound']['duration'];
        }), mbw7f8['_createSound'] = function () {
            mbw7f8['_id']++;
            var bwfm = t1d_si['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return bwfm;
        }, mbw7f8['_musicAudio'] = null, mbw7f8['_id'] = 0x0, mbw7f8['_audioCache'] = {}, mbw7f8['_null'] = undefined, mbw7f8;
    }(c4k5$),
        _di1jt = function (qv8war) {
        function tz23s0(w7mv8f) {
            this['_audio'] = null, this['_onEnd'] = null, tz23s0['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = w7mv8f, this['_onEnd'] = t1s32_['bind'](this['__onEnd'], this), w7mv8f['onEnded'](this['_onEnd']);
        }
        s_13t2(tz23s0, 'laya.wx.mini.MiniSoundChannel', qv8war);
        var f84b7 = tz23s0['prototype'];
        return f84b7['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (mcbk$['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, f84b7['__onNull'] = function () {}, f84b7['play'] = function () {
            this['isStopped'] = ![], loxp['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, f84b7['stop'] = function () {
            this['isStopped'] = !![], loxp['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, f84b7['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, f84b7['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], loxp['addChannel'](this), this['_audio']['play']();
        }, cbmf4(0x0, f84b7, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), cbmf4(0x0, f84b7, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), cbmf4(0x0, f84b7, 'volume', function () {
            return 0x1;
        }, function (z2st) {}), tz23s0['_null'] = undefined, tz23s0;
    }(wm7),
        wrvf78 = function () {
        function uhgp9y() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = t1d_si['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        s_13t2(uhgp9y, 'laya.wx.mini.MiniVideo');
        var w8mf = uhgp9y['prototype'];
        return w8mf['on'] = function (c56, c$4mbk, qf8rvw) {
            if (c56 == 'loadedmetadata') this['onPlayFunc'] = qf8rvw['bind'](c$4mbk), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else c56 == 'ended' && (this['onEndedFunC'] = qf8rvw['bind'](c$4mbk), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, w8mf['onTimeUpdateFunc'] = function (s30_2t) {
            this['position'] = s30_2t['position'], this['_duration'] = s30_2t['duration'];
        }, w8mf['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, w8mf['onended'] = function (_5d1i, lnphy) {
            this['onEndedFunC'] = lnphy['bind'](_5d1i), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, w8mf['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, w8mf['off'] = function (c65, jd1_i, kd6) {
            if (c65 == 'loadedmetadata') this['onPlayFunc'] = kd6['bind'](jd1_i), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else c65 == 'ended' && (this['onEndedFunC'] = kd6['bind'](jd1_i), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, w8mf['load'] = function (_jd5i) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = _jd5i;
        }, w8mf['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, w8mf['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, w8mf['size'] = function ($56kc, $4bm7c) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = $56kc, this['videoElement']['height'] = $4bm7c;
        }, w8mf['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, w8mf['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, cbmf4(0x0, w8mf, 'duration', function () {
            return this['_duration'];
        }), cbmf4(0x0, w8mf, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (t03s) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = t03s;
        }), cbmf4(0x0, w8mf, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), cbmf4(0x0, w8mf, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), cbmf4(0x0, w8mf, 'ended', function () {
            return this['videoend'];
        }), cbmf4(0x0, w8mf, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (dj$k5) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = dj$k5;
        }), cbmf4(0x0, w8mf, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (id1_) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = id1_;
        }), cbmf4(0x0, w8mf, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (k465c) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = k465c;
        }), cbmf4(0x0, w8mf, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), cbmf4(0x0, w8mf, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (ck56$j) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = ck56$j;
        }), cbmf4(0x0, w8mf, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (k$6c) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = k$6c;
        }), cbmf4(0x0, w8mf, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), cbmf4(0x0, w8mf, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (b78wm) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = b78wm;
        }), cbmf4(0x0, w8mf, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (gh9apu) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = gh9apu;
        }), cbmf4(0x0, w8mf, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (wfvr8) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = wfvr8;
        }), uhgp9y;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var hq9rau in Laya) {
        var pyxg = Laya[hq9rau];
        pyxg && pyxg['__isclass'] && (exports[hq9rau] = pyxg);
    }
});