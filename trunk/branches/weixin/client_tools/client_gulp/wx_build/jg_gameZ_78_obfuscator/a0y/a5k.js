var s1 = wx.l$;
(function (window, document, $dt80) {
    var ieg6xy = $dt80['un'],
        arocq_ = $dt80['uns'],
        m7zuo = $dt80['static'],
        kv9wn = $dt80['class'],
        i6yex = $dt80['getset'],
        i65xe = $dt80['__newvec'],
        r_caqk = laya['utils']['Browser'],
        mauo7 = laya['events']['Event'],
        _kracq = laya['events']['EventDispatcher'],
        jv9nc = laya['resource']['HTMLImage'],
        cqnk_ = laya['utils']['Handler'],
        vk9wjn = laya['display']['Input'],
        xsef5 = laya['net']['Loader'],
        muaoqr = laya['maths']['Matrix'],
        twjv = laya['renders']['Render'],
        g2ihy = laya['utils']['RunDriver'],
        r_nq = laya['media']['Sound'],
        rqau = laya['media']['SoundChannel'],
        e5l6fs = laya['media']['SoundManager'],
        kv9jcn = laya['display']['Stage'],
        i4hy2 = laya['net']['URL'],
        xyegi6 = laya['utils']['Utils'],
        fsp6l = function () {
        function i42gy() {}
        return kv9wn(i42gy, 'laya.wx.mini.MiniAdpter'), i42gy['getJson'] = function (p5f) {
            return JSON['parse'](p5f);
        }, i42gy['init'] = function (mqa7, v$w9n) {
            mqa7 === void 0x0 && (mqa7 = ![]), v$w9n === void 0x0 && (v$w9n = ![]);
            if (i42gy['_inited']) return;
            i42gy['window'] = window;
            if (i42gy['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            i42gy['_inited'] = !![], i42gy['isZiYu'] = v$w9n, i42gy['isPosMsgYu'] = mqa7, i42gy['EnvConfig'] = {}, !i42gy['isZiYu'] && (roumq['setNativeFileDir']('/layaairGame'), roumq['existDir'](roumq['fileNativeDir'], cqnk_['create'](i42gy, i42gy['onMkdirCallBack']))), i42gy['window']['focus'] = function () {}, $dt80['getUrlPath'] = function () {}, i42gy['window']['logtime'] = function (vn9jw$) {}, i42gy['window']['alertTimeLog'] = function (auzm7) {}, i42gy['window']['resetShareInfo'] = function () {}, i42gy['window']['CanvasRenderingContext2D'] = function () {}, i42gy['window']['CanvasRenderingContext2D']['prototype'] = i42gy['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], i42gy['window']['document']['body']['appendChild'] = function () {}, i42gy['EnvConfig']['pixelRatioInt'] = 0x0, g2ihy['getPixelRatio'] = i42gy['pixelRatio'], i42gy['_preCreateElement'] = r_caqk['createElement'], r_caqk['createElement'] = i42gy['createElement'], g2ihy['createShaderCondition'] = i42gy['createShaderCondition'], xyegi6['parseXMLFromString'] = i42gy['parseXMLFromString'], vk9wjn['_createInputElement'] = jv$9wn['_createInputElement'], i42gy['EnvConfig']['load'] = xsef5['prototype']['load'], xsef5['prototype']['load'] = gh1324['prototype']['load'], i42gy['isZiYu'] && mqa7 && wx['onMessage'](function (bt$08d) {
                bt$08d['isLoad'] && (roumq['ziyuFileData'][bt$08d['url']] = bt$08d['data']);
            });
        }, i42gy['onMkdirCallBack'] = function (l5fzs, wt0$db) {
            if (!l5fzs) roumq['filesListObj'] = JSON['parse'](wt0$db['data']);
        }, i42gy['pixelRatio'] = function () {
            if (!i42gy['EnvConfig']['pixelRatioInt']) try {
                var lmp7uz = wx['getSystemInfoSync']();
                return i42gy['EnvConfig']['pixelRatioInt'] = lmp7uz['pixelRatio'], lmp7uz = lmp7uz, lmp7uz['pixelRatio'];
            } catch (v$0wt) {}
            return i42gy['EnvConfig']['pixelRatioInt'];
        }, i42gy['createElement'] = function (zopu7) {
            if (zopu7 == 'canvas') {
                var zful7;
                return i42gy['idx'] == 0x1 ? i42gy['isZiYu'] ? (zful7 = sharedCanvas, zful7['style'] = {}) : zful7 = window['canvas'] : zful7 = window['wx']['createCanvas'](), i42gy['idx']++, zful7;
            } else {
                if (zopu7 == 'textarea' || zopu7 == 'input') return i42gy['onCreateInput'](zopu7);else {
                    if (zopu7 == 'div') {
                        var d08t$ = i42gy['_preCreateElement'](zopu7);
                        return d08t$['contains'] = function (_moraq) {
                            return null;
                        }, d08t$['removeChild'] = function ($td0b) {}, d08t$;
                    } else return i42gy['_preCreateElement'](zopu7);
                }
            }
        }, i42gy['onCreateInput'] = function (qmro) {
            var v$t9j = i42gy['_preCreateElement'](qmro);
            return v$t9j['focus'] = jv$9wn['wxinputFocus'], v$t9j['blur'] = jv$9wn['wxinputblur'], v$t9j['style'] = {}, v$t9j['value'] = 0x0, v$t9j['parentElement'] = {}, v$t9j['placeholder'] = {}, v$t9j['type'] = {}, v$t9j['setColor'] = function (knj_c9) {}, v$t9j['setType'] = function (o_a) {}, v$t9j['setFontFace'] = function (twj9$v) {}, v$t9j['addEventListener'] = function (oqau7) {}, v$t9j['contains'] = function (plzfs7) {
                return null;
            }, v$t9j['removeChild'] = function (o7qmau) {}, v$t9j;
        }, i42gy['createShaderCondition'] = function (qac_) {
            var ozm7a = this,
                z7mlp = function () {
                var iygxe = qac_;
                return ozm7a[qac_['replace']('this.', '')];
            };
            return z7mlp;
        }, i42gy['EnvConfig'] = null, i42gy['window'] = null, i42gy['_preCreateElement'] = null, i42gy['_inited'] = ![], i42gy['wxRequest'] = null, i42gy['systemInfo'] = null, i42gy['version'] = '0.0.1', i42gy['isZiYu'] = ![], i42gy['isPosMsgYu'] = ![], i42gy['parseXMLFromString'] = function ($08tbd) {
            var v0t$bw, i1h2g4;
            $08tbd = $08tbd['replace'](/>\s+</g, '><');
            try {
                v0t$bw = new window['Parser']['DOMParser']()['parseFromString']($08tbd, 'text/xml');
            } catch (hg3241) {
                throw '需要引入xml解析库文件';
            }
            return v0t$bw;
        }, i42gy['idx'] = 0x1, i42gy;
    }(),
        p7ufz = function () {
        function td0b$8() {}
        kv9wn(td0b$8, 'laya.wx.mini.MiniImage');
        var q_rn = td0b$8['prototype'];
        return q_rn['_loadImage'] = function (cknjv) {
            var p7zuml = this,
                s6lfp = ![];
            cknjv['indexOf']('layaNativeDir/') == -0x1 && (s6lfp = !![], cknjv = i4hy2['formatURL'](cknjv));
            if (!roumq['getFileInfo'](cknjv)) {
                if (cknjv['indexOf']('http://') != -0x1 || cknjv['indexOf']('https://') != -0x1) roumq['downImg'](cknjv, new cqnk_(td0b$8, td0b$8['onDownImgCallBack'], [cknjv, p7zuml]), cknjv);else td0b$8['onCreateImage'](cknjv, p7zuml, !![]);
            } else td0b$8['onCreateImage'](cknjv, p7zuml, !s6lfp);
        }, td0b$8['onDownImgCallBack'] = function (amuo, flp5s, i4gyxe) {
            if (!i4gyxe) td0b$8['onCreateImage'](amuo, flp5s);else flp5s['onError'](null);
        }, td0b$8['onCreateImage'] = function (lpz7uf, c_nrq, rk_cn) {
            rk_cn === void 0x0 && (rk_cn = ![]);
            var gxy24;
            if (!rk_cn) {
                var kcjn9 = roumq['getFileInfo'](lpz7uf),
                    yexs6 = kcjn9['md5'];
                gxy24 = roumq['getFileNativePath'](yexs6);
            } else gxy24 = lpz7uf;
            if (c_nrq['imgCache'] == null) c_nrq['imgCache'] = {};
            var n_cq;
            function jvwt0$() {
                n_cq['onload'] = null, n_cq['onerror'] = null, delete c_nrq['imgCache'][lpz7uf];
            }
            ;
            var pzuo = function () {
                jvwt0$(), c_nrq['onLoaded'](n_cq);
            },
                k9jvcn = function () {
                jvwt0$(), c_nrq['event']('error', 'Load image failed');
            };
            c_nrq['_type'] == 'nativeimage' ? (n_cq = new r_caqk['window']['Image'](), n_cq['crossOrigin'] = '', n_cq['onload'] = pzuo, n_cq['onerror'] = k9jvcn, n_cq['src'] = gxy24, c_nrq['imgCache'][lpz7uf] = n_cq) : new jv9nc['create'](gxy24, {
                'onload': pzuo,
                'onerror': k9jvcn,
                'onCreate': function (twb$v0) {
                    n_cq = twb$v0, c_nrq['imgCache'][lpz7uf] = twb$v0;
                }
            });
        }, td0b$8;
    }(),
        jv$9wn = function () {
        function vjnc9() {}
        return kv9wn(vjnc9, 'laya.wx.mini.MiniInput'), vjnc9['_createInputElement'] = function () {
            vk9wjn['_initInput'](vk9wjn['area'] = r_caqk['createElement']('textarea')), vk9wjn['_initInput'](vk9wjn['input'] = r_caqk['createElement']('input')), vk9wjn['inputContainer'] = r_caqk['createElement']('div'), vk9wjn['inputContainer']['style']['position'] = 'absolute', vk9wjn['inputContainer']['style']['zIndex'] = 0x186a0, r_caqk['container']['appendChild'](vk9wjn['inputContainer']), vk9wjn['inputContainer']['setPos'] = function (o7mpuz, ump7zl) {
                vk9wjn['inputContainer']['style']['left'] = o7mpuz + 'px', vk9wjn['inputContainer']['style']['top'] = ump7zl + 'px';
            }, $dt80['stage']['on']('resize', null, vjnc9['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (plz7f) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), e5l6fs['_soundClass'] = nqcrk, e5l6fs['_musicClass'] = nqcrk, window['_videoClass'] = pzmuo;
        }, vjnc9['_onStageResize'] = function () {
            var moqrua = $dt80['stage']['_canvasTransform']['identity']();
            moqrua['scale'](r_caqk['width'] / twjv['canvas']['width'] / g2ihy['getPixelRatio'](), r_caqk['height'] / twjv['canvas']['height'] / g2ihy['getPixelRatio']());
        }, vjnc9['wxinputFocus'] = function (e6x5s) {
            var sxf5e6 = vk9wjn['inputElement']['target'];
            if (sxf5e6 && !sxf5e6['editable']) return;
            fsp6l['window']['wx']['offKeyboardConfirm'](), fsp6l['window']['wx']['offKeyboardInput'](), fsp6l['window']['wx']['showKeyboard']({
                'defaultValue': sxf5e6['text'],
                'maxLength': sxf5e6['maxChars'],
                'multiple': sxf5e6['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (oa_qr) {},
                'fail': function (_9kc) {}
            }), fsp6l['window']['wx']['onKeyboardConfirm'](function (ps56fl) {
                var fslp = ps56fl ? ps56fl['value'] : '';
                sxf5e6['text'] = fslp, sxf5e6['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), fsp6l['window']['wx']['onKeyboardInput'](function (i4gh) {
                var wb0vt = i4gh ? i4gh['value'] : '';
                if (!sxf5e6['multiline']) {
                    if (wb0vt['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                sxf5e6['text'] = wb0vt, sxf5e6['event']('input');
            });
        }, vjnc9['inputEnter'] = function () {
            vk9wjn['inputElement']['target']['focus'] = ![];
        }, vjnc9['wxinputblur'] = function () {
            vjnc9['hideKeyboard']();
        }, vjnc9['hideKeyboard'] = function () {
            fsp6l['window']['wx']['offKeyboardConfirm'](), fsp6l['window']['wx']['offKeyboardInput'](), fsp6l['window']['wx']['hideKeyboard']({
                'success': function (wnvk9j) {
                    console['log']('隐藏键盘');
                },
                'fail': function (ckj) {
                    console['log']('隐藏键盘出错:' + (ckj ? ckj['errMsg'] : ''));
                }
            });
        }, vjnc9;
    }(),
        gh1324 = function () {
        function j$wvn() {}
        kv9wn(j$wvn, 'laya.wx.mini.MiniLoader');
        var rq_aco = j$wvn['prototype'];
        return rq_aco['load'] = function (ulpz7m, zulf7, exig6, muao7q, wn9jv$) {
            exig6 === void 0x0 && (exig6 = !![]), wn9jv$ === void 0x0 && (wn9jv$ = ![]);
            var tb8d = this;
            tb8d['_url'] = ulpz7m;
            if (ulpz7m['indexOf']('data:image') === 0x0) tb8d['_type'] = zulf7 = 'image';else tb8d['_type'] = zulf7 || (zulf7 = tb8d['getTypeFromUrl'](ulpz7m));
            tb8d['_cache'] = exig6, tb8d['_data'] = null;
            var mqa_ro = 'ascii';
            if (ulpz7m['indexOf']('.fnt') != -0x1) mqa_ro = 'utf8';else zulf7 == 'arraybuffer' && (mqa_ro = '');
            ;
            var cro_q = xyegi6['getFileExtension'](ulpz7m);
            if (j$wvn['_fileTypeArr']['indexOf'](cro_q) != -0x1) fsp6l['EnvConfig']['load']['call'](this, ulpz7m, zulf7, exig6, muao7q, wn9jv$);else {
                if (!roumq['getFileInfo'](ulpz7m)) {
                    if (ulpz7m['indexOf']('layaNativeDir/') != -0x1) {
                        if (fsp6l['isZiYu']) {
                            var lfpz7 = roumq['ziyuFileData'][ulpz7m];
                            tb8d['onLoaded'](lfpz7);
                            return;
                        } else {
                            cosnole['log']('read read'), roumq['read'](ulpz7m, mqa_ro, new cqnk_(j$wvn, j$wvn['onReadNativeCallBack'], [mqa_ro, ulpz7m, zulf7, exig6, muao7q, wn9jv$, tb8d]));
                            return;
                        }
                    }
                    if (i4hy2['rootPath'] == '') var l5fzp = ulpz7m;else l5fzp = ulpz7m['split'](i4hy2['rootPath'])[0x0];
                    ulpz7m['indexOf']('http://') != -0x1 || ulpz7m['indexOf']('https://') != -0x1 ? fsp6l['EnvConfig']['load']['call'](tb8d, ulpz7m, zulf7, exig6, muao7q, wn9jv$) : roumq['readFile'](l5fzp, mqa_ro, new cqnk_(j$wvn, j$wvn['onReadNativeCallBack'], [mqa_ro, ulpz7m, zulf7, exig6, muao7q, wn9jv$, tb8d]), ulpz7m);
                } else fsp6l['EnvConfig']['load']['call'](this, ulpz7m, zulf7, exig6, muao7q, wn9jv$);
            }
        }, rq_aco['resMgrLoad'] = function (p5fzs, mz7ulp, _cr9k, kc9nv, jkwv9n, e6xiyg, rcqk_a) {
            _cr9k === void 0x0 && (_cr9k = 0x0), kc9nv === void 0x0 && (kc9nv = ![]), jkwv9n === void 0x0 && (jkwv9n = ![]), e6xiyg === void 0x0 && (e6xiyg = 0x0), rcqk_a === void 0x0 && (rcqk_a = 0x3), p5fzs['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', p5fzs), fsp6l['EnvConfig']['resMgrLoad'](p5fzs, (yxei6, jwkvn9, ig4h2) => {
                j$wvn['prototype']['resMgrLoadCallBack'](yxei6, jwkvn9, ig4h2, mz7ulp);
            }, _cr9k, kc9nv, jkwv9n, e6xiyg, rcqk_a);
        }, rq_aco['resMgrLoadCallBack'] = function (dbt$8, hg241, _rqoac, yx56ei) {
            console['log']('buff:::', dbt$8, _rqoac, roumq['fileNativeDir'] + '///' + roumq['fileListName']), yx56ei(dbt$8, hg241, _rqoac);
        }, rq_aco['clearRes'] = function (cr9nk, $vj9n) {
            $vj9n === void 0x0 && ($vj9n = ![]);
            var jnvc = this;
            jnvc['clearRes'](cr9nk, $vj9n);
            var cqar_k = roumq['getFileInfo'](cr9nk);
            if (cqar_k && (cr9nk['indexOf']('http://') != -0x1 || cr9nk['indexOf']('https://') != -0x1)) {
                var tvw0j = cqar_k['md5'],
                    nwk9jv = roumq['getFileNativePath'](tvw0j);
                roumq['remove'](nwk9jv);
            }
        }, j$wvn['onReadNativeCallBack'] = function (tb$0w, w9$jnv, _coq, _r9, g132h4, yxig, $d8b0t, omauz7, c9nrk) {
            _r9 === void 0x0 && (_r9 = !![]), yxig === void 0x0 && (yxig = ![]), omauz7 === void 0x0 && (omauz7 = 0x0);
            if (!omauz7) {
                var muzop;
                if (_coq == 'json' || _coq == 'atlas') muzop = fsp6l['getJson'](c9nrk['data']);else _coq == 'xml' ? muzop = xyegi6['parseXMLFromString'](c9nrk['data']) : muzop = c9nrk['data'];
                $d8b0t['onLoaded'](muzop), !fsp6l['isZiYu'] && fsp6l['isPosMsgYu'] && _coq != 'arraybuffer' && wx['postMessage']({
                    'url': w9$jnv,
                    'data': muzop,
                    'isLoad': !![]
                });
            } else omauz7 == 0x1 && fsp6l['EnvConfig']['load']['call']($d8b0t, w9$jnv, _coq, _r9, g132h4, yxig);
        }, m7zuo(j$wvn, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), j$wvn;
    }(),
        roumq = function (oam_rq) {
        function i6xye() {
            i6xye['__super']['call'](this);
            ;
        }
        return kv9wn(i6xye, 'laya.wx.mini.MiniFileMgr', oam_rq), i6xye['isLoadFile'] = function (gyei6) {
            return i6xye['_fileTypeArr']['indexOf'](gyei6) != -0x1 ? !![] : ![];
        }, i6xye['getFileInfo'] = function (xgie4y) {
            var kac_qr = xgie4y['split']('?')[0x0],
                gxiy = i6xye['filesListObj'][kac_qr];
            if (gxiy == null) return null;else return gxiy;
            return null;
        }, i6xye['onFileUpdate'] = function (efs, o7amu) {
            var xyegi = efs['split']('/'),
                orqc_a = xyegi[xyegi['length'] - 0x1],
                n9$vj = i6xye['getFileInfo'](o7amu);
            if (n9$vj == null) i6xye['onSaveFile'](o7amu, orqc_a);else {
                if (n9$vj['readyUrl'] != o7amu) i6xye['remove'](orqc_a, o7amu);
            }
        }, i6xye['exits'] = function (_rmoqa, xg6ie) {
            var $tbw = i6xye['getFileNativePath'](_rmoqa);
            i6xye['fs']['getFileInfo']({
                'filePath': $tbw,
                'success': function (eyxs5) {
                    xg6ie != null && xg6ie['runWith']([0x0, eyxs5]);
                },
                'fail': function (rc_kaq) {
                    xg6ie != null && xg6ie['runWith']([0x1, rc_kaq]);
                }
            });
        }, i6xye['read'] = function (db$t8, wn$v9j, eiy6, aocr) {
            wn$v9j === void 0x0 && (wn$v9j = 'ascill'), aocr === void 0x0 && (aocr = '');
            var h341g;
            aocr != '' ? h341g = i6xye['getFileNativePath'](db$t8) : h341g = db$t8, i6xye['fs']['readFile']({
                'filePath': h341g,
                'encoding': wn$v9j,
                'success': function (yx42g) {
                    eiy6 != null && eiy6['runWith']([0x0, yx42g]);
                },
                'fail': function (cjvn) {
                    if (cjvn && aocr != '') i6xye['down'](aocr, wn$v9j, eiy6, aocr);else eiy6 != null && eiy6['runWith']([0x1]);
                }
            });
        }, i6xye['readNativeFile'] = function (zl7pfs, opmu7) {
            i6xye['fs']['readFile']({
                'filePath': zl7pfs,
                'encoding': '',
                'success': function (y2hi4) {
                    opmu7 != null && opmu7['runWith']([0x0]);
                },
                'fail': function (szp7lf) {
                    opmu7 != null && opmu7['runWith']([0x1]);
                }
            });
        }, i6xye['down'] = function (_cark, zam7, tb0wv$, rq_oa) {
            zam7 === void 0x0 && (zam7 = 'ascill'), rq_oa === void 0x0 && (rq_oa = '');
            var pmuz7 = i6xye['getFileNativePath'](rq_oa),
                lzpf7u = i6xye['wxdown']({
                'url': _cark,
                'filePath': pmuz7,
                'success': function (raoqm) {
                    if (raoqm['statusCode'] === 0xc8) i6xye['readFile'](raoqm['filePath'], zam7, tb0wv$, rq_oa);
                },
                'fail': function (xy2ig) {
                    tb0wv$ != null && tb0wv$['runWith']([0x1, xy2ig]);
                }
            });
            lzpf7u['onProgressUpdate'](function ($jw0) {
                tb0wv$ != null && tb0wv$['runWith']([0x2, $jw0['progress']]);
            });
        }, i6xye['readFile'] = function (xse5f, p7zoum, knqcr_, fs5pz) {
            p7zoum === void 0x0 && (p7zoum = 'ascill'), fs5pz === void 0x0 && (fs5pz = ''), i6xye['fs']['readFile']({
                'filePath': xse5f,
                'encoding': p7zoum,
                'success': function (mqruao) {
                    if (xse5f['indexOf']('http://') != -0x1 || xse5f['indexOf']('https://') != -0x1) i6xye['onFileUpdate'](xse5f, fs5pz);
                    knqcr_ != null && knqcr_['runWith']([0x0, mqruao]);
                },
                'fail': function (w$0vb) {
                    if (w$0vb) knqcr_ != null && knqcr_['runWith']([0x1, w$0vb]);
                }
            });
        }, i6xye['downImg'] = function (esfl5, qraco, $jv9t) {
            $jv9t === void 0x0 && ($jv9t = '');
            var knc9jv = i6xye['wxdown']({
                'url': esfl5,
                'success': function (c_r9k) {
                    c_r9k['statusCode'] === 0xc8 && i6xye['copyFile'](c_r9k['tempFilePath'], $jv9t, qraco);
                },
                'fail': function (xi4g2) {
                    qraco != null && qraco['runWith']([0x1, xi4g2]);
                }
            });
        }, i6xye['copyFile'] = function (mqrao_, y5ex, zpulm7) {
            var uo7ma = mqrao_['split']('/'),
                o7muaq = uo7ma[uo7ma['length'] - 0x1],
                moqrau = y5ex['split']('?')[0x0],
                ua7zo = i6xye['getFileInfo'](y5ex),
                omzu = i6xye['getFileNativePath'](o7muaq);
            i6xye['fs']['copyFile']({
                'srcPath': mqrao_,
                'destPath': omzu,
                'success': function (g6ie) {
                    if (!ua7zo) i6xye['onSaveFile'](y5ex, o7muaq), zpulm7 != null && zpulm7['runWith']([0x0]);else {
                        if (ua7zo['readyUrl'] != y5ex) i6xye['remove'](o7muaq, y5ex, zpulm7);
                    }
                },
                'fail': function (e6yx5s) {
                    zpulm7 != null && zpulm7['runWith']([0x1, e6yx5s]);
                }
            });
        }, i6xye['getFileNativePath'] = function (s7zf) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + s7zf;
        }, i6xye['remove'] = function (mlz7, cnk9j, nvjw9$) {
            cnk9j === void 0x0 && (cnk9j = '');
            var muqao = i6xye['getFileInfo'](cnk9j),
                lz5fp = i6xye['getFileNativePath'](muqao['md5']);
            $dt80['loader']['clearRes'](muqao['readyUrl']), i6xye['fs']['unlink']({
                'filePath': lz5fp,
                'success': function (oqam_) {
                    if (cnk9j != '') i6xye['onSaveFile'](cnk9j, mlz7);
                    nvjw9$ != null && nvjw9$['runWith']([0x0]);
                },
                'fail': function (vbw$0) {}
            });
        }, i6xye['onSaveFile'] = function (y5xi6, g1h24i) {
            var rq_kcn = y5xi6['split']('?')[0x0];
            i6xye['filesListObj'][rq_kcn] = {
                'md5': g1h24i,
                'readyUrl': y5xi6
            }, i6xye['fs']['writeFile']({
                'filePath': i6xye['fileNativeDir'] + '/' + i6xye['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](i6xye['filesListObj']),
                'success': function (lmpz7) {
                    console['log']('写入测试测试成功：', lmpz7);
                },
                'fail': function (jnv9kw) {
                    console['log']('写入测试测试失败：', jnv9kw);
                }
            });
        }, i6xye['existDir'] = function ($0tvw, ix5e) {
            i6xye['fs']['mkdir']({
                'dirPath': $0tvw,
                'success': function (x5s6fe) {
                    ix5e != null && ix5e['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (arc) {
                    if (arc['errMsg']['indexOf']('file already exists') != -0x1) i6xye['readSync'](i6xye['fileListName'], 'utf8', ix5e);else ix5e != null && ix5e['runWith']([0x1, arc]);
                }
            });
        }, i6xye['readSync'] = function (o_rqm, arqm, wn9$j, wvj9k) {
            arqm === void 0x0 && (arqm = 'ascill'), wvj9k === void 0x0 && (wvj9k = '');
            var j$vtw9 = i6xye['getFileNativePath'](o_rqm),
                amo_;
            try {
                amo_ = i6xye['fs']['readFileSync'](j$vtw9), wn9$j != null && wn9$j['runWith']([0x0, { 'data': amo_ }]);
            } catch (n9rck) {
                wn9$j != null && wn9$j['runWith']([0x1]);
            }
        }, i6xye['readCache'] = function () {}, i6xye['writeCache'] = function (o7zump) {
            var crao_q = readyUrl['split']('?')[0x0];
            i6xye['filesListObj'][crao_q] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, i6xye['fs']['writeFile']({
                'filePath': i6xye['fileNativeDir'] + '/' + i6xye['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](i6xye['filesListObj']),
                'success': function (yh4ig) {},
                'fail': function (t9w$jv) {}
            });
        }, i6xye['setNativeFileDir'] = function (lp5f) {
            i6xye['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + lp5f;
        }, i6xye['filesListObj'] = {}, i6xye['fileNativeDir'] = null, i6xye['fileListName'] = 'layaairfiles.txt', i6xye['ziyuFileData'] = {}, m7zuo(i6xye, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), i6xye;
    }(_kracq),
        nqcrk = function (p5s6) {
        function e6gxyi() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], e6gxyi['__super']['call'](this), this['_sound'] = e6gxyi['_createSound'](), this['_chanell'] = new w9knvj(this['_sound']);
        }
        kv9wn(e6gxyi, 'laya.wx.mini.MiniSound', p5s6);
        var _krc9n = e6gxyi['prototype'];
        return _krc9n['load'] = function (lzs) {
            var ex5y6i = this;
            lzs = i4hy2['formatURL'](lzs), this['url'] = lzs;
            if (e6gxyi['_audioCache'][lzs]) {
                this['event']('complete');
                return;
            }
            function amor_q() {
                if (e6gxyi['_null'] != undefined) ex5y6i['_sound']['onCanplay'](e6gxyi['_null']), ex5y6i['_sound']['onError'](e6gxyi['_null']);else try {
                    ex5y6i['_sound']['onCanplay'](null), ex5y6i['_sound']['onError'](null), e6gxyi['_null'] = null;
                } catch (ar_cqo) {
                    console['warn']('[wxmini] _clearSound:' + ar_cqo), ex5y6i['_sound']['onCanplay'](o_rqca), ex5y6i['_sound']['onError'](o_rqca), e6gxyi['_null'] = o_rqca;
                }
            }
            function qakr_c() {
                rn9c['loaded'] = !![], rn9c['event']('complete'), e6gxyi['_audioCache'][rn9c['url']] = rn9c;
            }
            function x2i4(y6e5) {
                console['error']('errCode=' + y6e5['errCode'] + '  errMsg=' + y6e5['errMsg']), rn9c['event']('error');
            }
            function o_rqca() {}
            this['_sound']['onCanplay'](qakr_c), this['_sound']['onError'](x2i4), this['_sound']['src'] = lzs;
            var rn9c = this;
        }, _krc9n['play'] = function (cv9nj, g13) {
            cv9nj === void 0x0 && (cv9nj = 0x0), g13 === void 0x0 && (g13 = 0x0);
            var e6xygi, _qrcak;
            if (this['url'] == e5l6fs['_tMusic']) {
                if (!e6gxyi['_musicAudio']) e6gxyi['_musicAudio'] = this['_sound'];
                e6xygi = e6gxyi['_musicAudio'], _qrcak = this['_chanell'];
            } else e6xygi = this['_sound'], _qrcak = this['_chanell'];
            return e6xygi['src'] = this['url'], e6xygi['startTime'] = 0x0, _qrcak['isStopped'] && (_qrcak['url'] = this['url'], _qrcak['loops'] = g13, _qrcak['startTime'] = cv9nj, _qrcak['play'](), e5l6fs['addChannel'](_qrcak)), _qrcak;
        }, _krc9n['dispose'] = function () {
            var t0w$d = e6gxyi['_audioCache'][this['url']];
            t0w$d && (t0w$d['src'] = '', delete e6gxyi['_audioCache'][this['url']]);
        }, i6yex(0x0, _krc9n, 'duration', function () {
            return this['_sound']['duration'];
        }), e6gxyi['_createSound'] = function () {
            e6gxyi['_id']++;
            var t$wdb0 = fsp6l['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return t$wdb0;
        }, e6gxyi['_musicAudio'] = null, e6gxyi['_id'] = 0x0, e6gxyi['_audioCache'] = {}, e6gxyi['_null'] = undefined, e6gxyi;
    }(_kracq),
        w9knvj = function (o7ua) {
        function lpzsf7(nr_ck9) {
            this['_audio'] = null, this['_onEnd'] = null, lpzsf7['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = nr_ck9, this['_onEnd'] = xyegi6['bind'](this['__onEnd'], this), nr_ck9['onEnded'](this['_onEnd']);
        }
        kv9wn(lpzsf7, 'laya.wx.mini.MiniSoundChannel', o7ua);
        var _cnr = lpzsf7['prototype'];
        return _cnr['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && ($dt80['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, _cnr['__onNull'] = function () {}, _cnr['play'] = function () {
            this['isStopped'] = ![], e5l6fs['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, _cnr['stop'] = function () {
            this['isStopped'] = !![], e5l6fs['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, _cnr['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, _cnr['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], e5l6fs['addChannel'](this), this['_audio']['play']();
        }, i6yex(0x0, _cnr, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), i6yex(0x0, _cnr, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), i6yex(0x0, _cnr, 'volume', function () {
            return 0x1;
        }, function (a7oum) {}), lpzsf7['_null'] = undefined, lpzsf7;
    }(rqau),
        pzmuo = function () {
        function i6yxg() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = fsp6l['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        kv9wn(i6yxg, 'laya.wx.mini.MiniVideo');
        var p6sf5 = i6yxg['prototype'];
        return p6sf5['on'] = function (uzo7am, $w0tdb, rq_ack) {
            if (uzo7am == 'loadedmetadata') this['onPlayFunc'] = rq_ack['bind']($w0tdb), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else uzo7am == 'ended' && (this['onEndedFunC'] = rq_ack['bind']($w0tdb), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, p6sf5['onTimeUpdateFunc'] = function (xyi4g2) {
            this['position'] = xyi4g2['position'], this['_duration'] = xyi4g2['duration'];
        }, p6sf5['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, p6sf5['onended'] = function (ac_qro, zs5l) {
            this['onEndedFunC'] = zs5l['bind'](ac_qro), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, p6sf5['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, p6sf5['off'] = function (_nckqr, ao7zm, maqro) {
            if (_nckqr == 'loadedmetadata') this['onPlayFunc'] = maqro['bind'](ao7zm), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else _nckqr == 'ended' && (this['onEndedFunC'] = maqro['bind'](ao7zm), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, p6sf5['load'] = function (uz7lm) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = uz7lm;
        }, p6sf5['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, p6sf5['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, p6sf5['size'] = function (slp6f, kcnq_) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = slp6f, this['videoElement']['height'] = kcnq_;
        }, p6sf5['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, p6sf5['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, i6yex(0x0, p6sf5, 'duration', function () {
            return this['_duration'];
        }), i6yex(0x0, p6sf5, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (w0t$vb) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = w0t$vb;
        }), i6yex(0x0, p6sf5, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), i6yex(0x0, p6sf5, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), i6yex(0x0, p6sf5, 'ended', function () {
            return this['videoend'];
        }), i6yex(0x0, p6sf5, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (ig4yx) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = ig4yx;
        }), i6yex(0x0, p6sf5, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (au7mzo) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = au7mzo;
        }), i6yex(0x0, p6sf5, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (uqamro) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = uqamro;
        }), i6yex(0x0, p6sf5, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), i6yex(0x0, p6sf5, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (q_cak) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = q_cak;
        }), i6yex(0x0, p6sf5, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (kjcvn9) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = kjcvn9;
        }), i6yex(0x0, p6sf5, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), i6yex(0x0, p6sf5, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (y5ie) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = y5ie;
        }), i6yex(0x0, p6sf5, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (y2igx4) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = y2igx4;
        }), i6yex(0x0, p6sf5, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (v9tw) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = v9tw;
        }), i6yxg;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var wjk9vn in Laya) {
        var plzm = Laya[wjk9vn];
        plzm && plzm['__isclass'] && (exports[wjk9vn] = plzm);
    }
});