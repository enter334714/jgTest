var _ = wx.y$;
(function (window, document, vk2j_q) {
    var s450d = vk2j_q['un'],
        qjck2 = vk2j_q['uns'],
        _qyk2 = vk2j_q['static'],
        mf$ho = vk2j_q['class'],
        p72uyc = vk2j_q['getset'],
        cumh7p = vk2j_q['__newvec'],
        vi8qj_ = laya['utils']['Browser'],
        _qie = laya['events']['Event'],
        l8eng = laya['events']['EventDispatcher'],
        s450$ = laya['resource']['HTMLImage'],
        om7phf = laya['utils']['Handler'],
        f5 = laya['display']['Input'],
        yuc7 = laya['net']['Loader'],
        a40sb = laya['maths']['Matrix'],
        rxz96 = laya['renders']['Render'],
        fhotm$ = laya['utils']['RunDriver'],
        e18gn = laya['media']['Sound'],
        ot7mf = laya['media']['SoundChannel'],
        dz3r9 = laya['media']['SoundManager'],
        $o5mtf = laya['display']['Stage'],
        o5$f4 = laya['net']['URL'],
        jq_k2v = laya['utils']['Utils'],
        hp7fum = function () {
        function i8eng1() {}
        return mf$ho(i8eng1, 'laya.wx.mini.MiniAdpter'), i8eng1['getJson'] = function ($ot4f5) {
            return JSON['parse']($ot4f5);
        }, i8eng1['init'] = function (e1gwnl, nl8eg1) {
            e1gwnl === void 0x0 && (e1gwnl = ![]), nl8eg1 === void 0x0 && (nl8eg1 = ![]);
            if (i8eng1['_inited']) return;
            i8eng1['window'] = window;
            if (i8eng1['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            i8eng1['_inited'] = !![], i8eng1['isZiYu'] = nl8eg1, i8eng1['isPosMsgYu'] = e1gwnl, i8eng1['EnvConfig'] = {}, !i8eng1['isZiYu'] && (_8qvij['setNativeFileDir']('/layaairGame'), _8qvij['existDir'](_8qvij['fileNativeDir'], om7phf['create'](i8eng1, i8eng1['onMkdirCallBack']))), i8eng1['window']['focus'] = function () {}, vk2j_q['getUrlPath'] = function () {}, i8eng1['window']['logtime'] = function (azr6) {}, i8eng1['window']['alertTimeLog'] = function (jcky2u) {}, i8eng1['window']['resetShareInfo'] = function () {}, i8eng1['window']['CanvasRenderingContext2D'] = function () {}, i8eng1['window']['CanvasRenderingContext2D']['prototype'] = i8eng1['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], i8eng1['window']['document']['body']['appendChild'] = function () {}, i8eng1['EnvConfig']['pixelRatioInt'] = 0x0, fhotm$['getPixelRatio'] = i8eng1['pixelRatio'], i8eng1['_preCreateElement'] = vi8qj_['createElement'], vi8qj_['createElement'] = i8eng1['createElement'], fhotm$['createShaderCondition'] = i8eng1['createShaderCondition'], jq_k2v['parseXMLFromString'] = i8eng1['parseXMLFromString'], f5['_createInputElement'] = d9rzab['_createInputElement'], i8eng1['EnvConfig']['load'] = yuc7['prototype']['load'], yuc7['prototype']['load'] = ds4a0b['prototype']['load'], i8eng1['isZiYu'] && e1gwnl && wx['onMessage'](function (en1gwl) {
                en1gwl['isLoad'] && (_8qvij['ziyuFileData'][en1gwl['url']] = en1gwl['data']);
            });
        }, i8eng1['onMkdirCallBack'] = function (ve_iq8, mfu) {
            if (!ve_iq8) _8qvij['filesListObj'] = JSON['parse'](mfu['data']);
        }, i8eng1['pixelRatio'] = function () {
            if (!i8eng1['EnvConfig']['pixelRatioInt']) try {
                var sbd50 = wx['getSystemInfoSync']();
                return i8eng1['EnvConfig']['pixelRatioInt'] = sbd50['pixelRatio'], sbd50 = sbd50, sbd50['pixelRatio'];
            } catch (o50$4t) {}
            return i8eng1['EnvConfig']['pixelRatioInt'];
        }, i8eng1['createElement'] = function (qj_8iv) {
            if (qj_8iv == 'canvas') {
                var kj2cuy;
                return i8eng1['idx'] == 0x1 ? i8eng1['isZiYu'] ? (kj2cuy = sharedCanvas, kj2cuy['style'] = {}) : kj2cuy = window['canvas'] : kj2cuy = window['wx']['createCanvas'](), i8eng1['idx']++, kj2cuy;
            } else {
                if (qj_8iv == 'textarea' || qj_8iv == 'input') return i8eng1['onCreateInput'](qj_8iv);else {
                    if (qj_8iv == 'div') {
                        var f4$5to = i8eng1['_preCreateElement'](qj_8iv);
                        return f4$5to['contains'] = function (cykjq2) {
                            return null;
                        }, f4$5to['removeChild'] = function (qjkv_) {}, f4$5to;
                    } else return i8eng1['_preCreateElement'](qj_8iv);
                }
            }
        }, i8eng1['onCreateInput'] = function (otmfh$) {
            var vkjq_i = i8eng1['_preCreateElement'](otmfh$);
            return vkjq_i['focus'] = d9rzab['wxinputFocus'], vkjq_i['blur'] = d9rzab['wxinputblur'], vkjq_i['style'] = {}, vkjq_i['value'] = 0x0, vkjq_i['parentElement'] = {}, vkjq_i['placeholder'] = {}, vkjq_i['type'] = {}, vkjq_i['setColor'] = function (t5$o4) {}, vkjq_i['setType'] = function (_kqv2j) {}, vkjq_i['setFontFace'] = function (o$ftmh) {}, vkjq_i['addEventListener'] = function (_qvk2j) {}, vkjq_i['contains'] = function (uhp7m) {
                return null;
            }, vkjq_i['removeChild'] = function (dz9sab) {}, vkjq_i;
        }, i8eng1['createShaderCondition'] = function (i81gne) {
            var tmf$o = this,
                kv = function () {
                var u72c = i81gne;
                return tmf$o[i81gne['replace']('this.', '')];
            };
            return kv;
        }, i8eng1['EnvConfig'] = null, i8eng1['window'] = null, i8eng1['_preCreateElement'] = null, i8eng1['_inited'] = ![], i8eng1['wxRequest'] = null, i8eng1['systemInfo'] = null, i8eng1['version'] = '0.0.1', i8eng1['isZiYu'] = ![], i8eng1['isPosMsgYu'] = ![], i8eng1['parseXMLFromString'] = function (db9zas) {
            var _vkij, $s450;
            db9zas = db9zas['replace'](/>\s+</g, '><');
            try {
                _vkij = new window['Parser']['DOMParser']()['parseFromString'](db9zas, 'text/xml');
            } catch (s4$b5) {
                throw '需要引入xml解析库文件';
            }
            return _vkij;
        }, i8eng1['idx'] = 0x1, i8eng1;
    }(),
        y_2jk = function () {
        function z3x9r() {}
        mf$ho(z3x9r, 'laya.wx.mini.MiniImage');
        var fmto = z3x9r['prototype'];
        return fmto['_loadImage'] = function (ar9) {
            var bzd9ra = this,
                ng18 = ![];
            ar9['indexOf']('layaNativeDir/') == -0x1 && (ng18 = !![], ar9 = o5$f4['formatURL'](ar9));
            if (!_8qvij['getFileInfo'](ar9)) {
                if (ar9['indexOf']('http://') != -0x1 || ar9['indexOf']('https://') != -0x1) _8qvij['downImg'](ar9, new om7phf(z3x9r, z3x9r['onDownImgCallBack'], [ar9, bzd9ra]), ar9);else z3x9r['onCreateImage'](ar9, bzd9ra, !![]);
            } else z3x9r['onCreateImage'](ar9, bzd9ra, !ng18);
        }, z3x9r['onDownImgCallBack'] = function (h7tfm, gi8ne1, hotmf$) {
            if (!hotmf$) z3x9r['onCreateImage'](h7tfm, gi8ne1);else gi8ne1['onError'](null);
        }, z3x9r['onCreateImage'] = function (b50s, e1i8ng, saz0db) {
            saz0db === void 0x0 && (saz0db = ![]);
            var yp2u;
            if (!saz0db) {
                var ad0zb = _8qvij['getFileInfo'](b50s),
                    bs54$ = ad0zb['md5'];
                yp2u = _8qvij['getFileNativePath'](bs54$);
            } else yp2u = b50s;
            if (e1i8ng['imgCache'] == null) e1i8ng['imgCache'] = {};
            var jyqk_;
            function kqy_2j() {
                jyqk_['onload'] = null, jyqk_['onerror'] = null, delete e1i8ng['imgCache'][b50s];
            }
            ;
            var zx936 = function () {
                kqy_2j(), e1i8ng['onLoaded'](jyqk_);
            },
                y7pu2c = function () {
                kqy_2j(), e1i8ng['event']('error', 'Load image failed');
            };
            e1i8ng['_type'] == 'nativeimage' ? (jyqk_ = new vi8qj_['window']['Image'](), jyqk_['crossOrigin'] = '', jyqk_['onload'] = zx936, jyqk_['onerror'] = y7pu2c, jyqk_['src'] = yp2u, e1i8ng['imgCache'][b50s] = jyqk_) : new s450$['create'](yp2u, {
                'onload': zx936,
                'onerror': y7pu2c,
                'onCreate': function (yqck2) {
                    jyqk_ = yqck2, e1i8ng['imgCache'][b50s] = yqck2;
                }
            });
        }, z3x9r;
    }(),
        d9rzab = function () {
        function $5mfot() {}
        return mf$ho($5mfot, 'laya.wx.mini.MiniInput'), $5mfot['_createInputElement'] = function () {
            f5['_initInput'](f5['area'] = vi8qj_['createElement']('textarea')), f5['_initInput'](f5['input'] = vi8qj_['createElement']('input')), f5['inputContainer'] = vi8qj_['createElement']('div'), f5['inputContainer']['style']['position'] = 'absolute', f5['inputContainer']['style']['zIndex'] = 0x186a0, vi8qj_['container']['appendChild'](f5['inputContainer']), f5['inputContainer']['setPos'] = function (egln8, fh7tmo) {
                f5['inputContainer']['style']['left'] = egln8 + 'px', f5['inputContainer']['style']['top'] = fh7tmo + 'px';
            }, vk2j_q['stage']['on']('resize', null, $5mfot['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (tmf5$) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), dz3r9['_soundClass'] = ne1lwg, dz3r9['_musicClass'] = ne1lwg, window['_videoClass'] = thof$m;
        }, $5mfot['_onStageResize'] = function () {
            var umf7hp = vk2j_q['stage']['_canvasTransform']['identity']();
            umf7hp['scale'](vi8qj_['width'] / rxz96['canvas']['width'] / fhotm$['getPixelRatio'](), vi8qj_['height'] / rxz96['canvas']['height'] / fhotm$['getPixelRatio']());
        }, $5mfot['wxinputFocus'] = function (ewl1g) {
            var ft$m = f5['inputElement']['target'];
            if (ft$m && !ft$m['editable']) return;
            hp7fum['window']['wx']['offKeyboardConfirm'](), hp7fum['window']['wx']['offKeyboardInput'](), hp7fum['window']['wx']['showKeyboard']({
                'defaultValue': ft$m['text'],
                'maxLength': ft$m['maxChars'],
                'multiple': ft$m['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (draz39) {},
                'fail': function (hcpuy7) {}
            }), hp7fum['window']['wx']['onKeyboardConfirm'](function (f$omht) {
                var vkq2j = f$omht ? f$omht['value'] : '';
                ft$m['text'] = vkq2j, ft$m['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), hp7fum['window']['wx']['onKeyboardInput'](function (qj2_v) {
                var bdzs0a = qj2_v ? qj2_v['value'] : '';
                if (!ft$m['multiline']) {
                    if (bdzs0a['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                ft$m['text'] = bdzs0a, ft$m['event']('input');
            });
        }, $5mfot['inputEnter'] = function () {
            f5['inputElement']['target']['focus'] = ![];
        }, $5mfot['wxinputblur'] = function () {
            $5mfot['hideKeyboard']();
        }, $5mfot['hideKeyboard'] = function () {
            hp7fum['window']['wx']['offKeyboardConfirm'](), hp7fum['window']['wx']['offKeyboardInput'](), hp7fum['window']['wx']['hideKeyboard']({
                'success': function (t$40s) {
                    console['log']('隐藏键盘');
                },
                'fail': function ($40t5o) {
                    console['log']('隐藏键盘出错:' + ($40t5o ? $40t5o['errMsg'] : ''));
                }
            });
        }, $5mfot;
    }(),
        ds4a0b = function () {
        function t5$m() {}
        mf$ho(t5$m, 'laya.wx.mini.MiniLoader');
        var d4s0b5 = t5$m['prototype'];
        return d4s0b5['load'] = function (rza3, ij_, t405$, kcypu2, hc7pyu) {
            t405$ === void 0x0 && (t405$ = !![]), hc7pyu === void 0x0 && (hc7pyu = ![]);
            var q2jv_k = this;
            q2jv_k['_url'] = rza3;
            if (rza3['indexOf']('data:image') === 0x0) q2jv_k['_type'] = ij_ = 'image';else q2jv_k['_type'] = ij_ || (ij_ = q2jv_k['getTypeFromUrl'](rza3));
            q2jv_k['_cache'] = t405$, q2jv_k['_data'] = null;
            var pkyu = 'ascii';
            if (rza3['indexOf']('.fnt') != -0x1) pkyu = 'utf8';else ij_ == 'arraybuffer' && (pkyu = '');
            ;
            var f$4ot5 = jq_k2v['getFileExtension'](rza3);
            if (t5$m['_fileTypeArr']['indexOf'](f$4ot5) != -0x1) hp7fum['EnvConfig']['load']['call'](this, rza3, ij_, t405$, kcypu2, hc7pyu);else {
                if (!_8qvij['getFileInfo'](rza3)) {
                    if (rza3['indexOf']('layaNativeDir/') != -0x1) {
                        if (hp7fum['isZiYu']) {
                            var c2ypuk = _8qvij['ziyuFileData'][rza3];
                            q2jv_k['onLoaded'](c2ypuk);
                            return;
                        } else {
                            cosnole['log']('read read'), _8qvij['read'](rza3, pkyu, new om7phf(t5$m, t5$m['onReadNativeCallBack'], [pkyu, rza3, ij_, t405$, kcypu2, hc7pyu, q2jv_k]));
                            return;
                        }
                    }
                    if (o5$f4['rootPath'] == '') var eviq8_ = rza3;else eviq8_ = rza3['split'](o5$f4['rootPath'])[0x0];
                    rza3['indexOf']('http://') != -0x1 || rza3['indexOf']('https://') != -0x1 ? hp7fum['EnvConfig']['load']['call'](q2jv_k, rza3, ij_, t405$, kcypu2, hc7pyu) : _8qvij['readFile'](eviq8_, pkyu, new om7phf(t5$m, t5$m['onReadNativeCallBack'], [pkyu, rza3, ij_, t405$, kcypu2, hc7pyu, q2jv_k]), rza3);
                } else hp7fum['EnvConfig']['load']['call'](this, rza3, ij_, t405$, kcypu2, hc7pyu);
            }
        }, d4s0b5['resMgrLoad'] = function (jyq_2k, h7mufp, _qe8i, c27y, yup7, ycp7hu, ba9zds) {
            _qe8i === void 0x0 && (_qe8i = 0x0), c27y === void 0x0 && (c27y = ![]), yup7 === void 0x0 && (yup7 = ![]), ycp7hu === void 0x0 && (ycp7hu = 0x0), ba9zds === void 0x0 && (ba9zds = 0x3), jyq_2k['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', jyq_2k), hp7fum['EnvConfig']['resMgrLoad'](jyq_2k, (s0ab4, gln1ew, s40abd) => {
                t5$m['prototype']['resMgrLoadCallBack'](s0ab4, gln1ew, s40abd, h7mufp);
            }, _qe8i, c27y, yup7, ycp7hu, ba9zds);
        }, d4s0b5['resMgrLoadCallBack'] = function (kjy2q, cykqj2, jvqik, eg8n1i) {
            console['log']('buff:::', kjy2q, jvqik, _8qvij['fileNativeDir'] + '///' + _8qvij['fileListName']), eg8n1i(kjy2q, cykqj2, jvqik);
        }, d4s0b5['clearRes'] = function (qji8v_, ei8g1) {
            ei8g1 === void 0x0 && (ei8g1 = ![]);
            var ukc2jy = this;
            ukc2jy['clearRes'](qji8v_, ei8g1);
            var cyqk2j = _8qvij['getFileInfo'](qji8v_);
            if (cyqk2j && (qji8v_['indexOf']('http://') != -0x1 || qji8v_['indexOf']('https://') != -0x1)) {
                var jk2uc = cyqk2j['md5'],
                    e1ivg8 = _8qvij['getFileNativePath'](jk2uc);
                _8qvij['remove'](e1ivg8);
            }
        }, t5$m['onReadNativeCallBack'] = function (bdrza, u2jck, e_iv1, $htom, cukjy2, t4o5f, $40s, egnlw, ab9drz) {
            $htom === void 0x0 && ($htom = !![]), t4o5f === void 0x0 && (t4o5f = ![]), egnlw === void 0x0 && (egnlw = 0x0);
            if (!egnlw) {
                var v_1i8;
                if (e_iv1 == 'json' || e_iv1 == 'atlas') v_1i8 = hp7fum['getJson'](ab9drz['data']);else e_iv1 == 'xml' ? v_1i8 = jq_k2v['parseXMLFromString'](ab9drz['data']) : v_1i8 = ab9drz['data'];
                $40s['onLoaded'](v_1i8), !hp7fum['isZiYu'] && hp7fum['isPosMsgYu'] && e_iv1 != 'arraybuffer' && wx['postMessage']({
                    'url': u2jck,
                    'data': v_1i8,
                    'isLoad': !![]
                });
            } else egnlw == 0x1 && hp7fum['EnvConfig']['load']['call']($40s, u2jck, e_iv1, $htom, cukjy2, t4o5f);
        }, _qyk2(t5$m, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), t5$m;
    }(),
        _8qvij = function (ikjv_q) {
        function x6z93r() {
            x6z93r['__super']['call'](this);
            ;
        }
        return mf$ho(x6z93r, 'laya.wx.mini.MiniFileMgr', ikjv_q), x6z93r['isLoadFile'] = function (to0$4) {
            return x6z93r['_fileTypeArr']['indexOf'](to0$4) != -0x1 ? !![] : ![];
        }, x6z93r['getFileInfo'] = function (hpmuf7) {
            var uch7 = hpmuf7['split']('?')[0x0],
                sb0$4 = x6z93r['filesListObj'][uch7];
            if (sb0$4 == null) return null;else return sb0$4;
            return null;
        }, x6z93r['onFileUpdate'] = function (of5t$, i8_qvj) {
            var nei1g = of5t$['split']('/'),
                o$5tmf = nei1g[nei1g['length'] - 0x1],
                $f5mto = x6z93r['getFileInfo'](i8_qvj);
            if ($f5mto == null) x6z93r['onSaveFile'](i8_qvj, o$5tmf);else {
                if ($f5mto['readyUrl'] != i8_qvj) x6z93r['remove'](o$5tmf, i8_qvj);
            }
        }, x6z93r['exits'] = function (_kvj2, $fho) {
            var ev = x6z93r['getFileNativePath'](_kvj2);
            x6z93r['fs']['getFileInfo']({
                'filePath': ev,
                'success': function (qj_yk) {
                    $fho != null && $fho['runWith']([0x0, qj_yk]);
                },
                'fail': function (o$htf) {
                    $fho != null && $fho['runWith']([0x1, o$htf]);
                }
            });
        }, x6z93r['read'] = function (jqck, uc2pyk, mof5$t, da3z) {
            uc2pyk === void 0x0 && (uc2pyk = 'ascill'), da3z === void 0x0 && (da3z = '');
            var mto7f;
            da3z != '' ? mto7f = x6z93r['getFileNativePath'](jqck) : mto7f = jqck, x6z93r['fs']['readFile']({
                'filePath': mto7f,
                'encoding': uc2pyk,
                'success': function ($tf4) {
                    mof5$t != null && mof5$t['runWith']([0x0, $tf4]);
                },
                'fail': function (o05t$4) {
                    if (o05t$4 && da3z != '') x6z93r['down'](da3z, uc2pyk, mof5$t, da3z);else mof5$t != null && mof5$t['runWith']([0x1]);
                }
            });
        }, x6z93r['readNativeFile'] = function (ht$mfo, to$fm5) {
            x6z93r['fs']['readFile']({
                'filePath': ht$mfo,
                'encoding': '',
                'success': function (j_2qyk) {
                    to$fm5 != null && to$fm5['runWith']([0x0]);
                },
                'fail': function (vgi1e8) {
                    to$fm5 != null && to$fm5['runWith']([0x1]);
                }
            });
        }, x6z93r['down'] = function (a9sdb, t0$45, d9ar, r36z9x) {
            t0$45 === void 0x0 && (t0$45 = 'ascill'), r36z9x === void 0x0 && (r36z9x = '');
            var gne1l = x6z93r['getFileNativePath'](r36z9x),
                r6za3 = x6z93r['wxdown']({
                'url': a9sdb,
                'filePath': gne1l,
                'success': function (uy7cp2) {
                    if (uy7cp2['statusCode'] === 0xc8) x6z93r['readFile'](uy7cp2['filePath'], t0$45, d9ar, r36z9x);
                },
                'fail': function (hpo7mf) {
                    d9ar != null && d9ar['runWith']([0x1, hpo7mf]);
                }
            });
            r6za3['onProgressUpdate'](function (i_jkv) {
                d9ar != null && d9ar['runWith']([0x2, i_jkv['progress']]);
            });
        }, x6z93r['readFile'] = function (q_2yk, ngie18, abdzs0, o5$tf4) {
            ngie18 === void 0x0 && (ngie18 = 'ascill'), o5$tf4 === void 0x0 && (o5$tf4 = ''), x6z93r['fs']['readFile']({
                'filePath': q_2yk,
                'encoding': ngie18,
                'success': function (t$fm5o) {
                    if (q_2yk['indexOf']('http://') != -0x1 || q_2yk['indexOf']('https://') != -0x1) x6z93r['onFileUpdate'](q_2yk, o5$tf4);
                    abdzs0 != null && abdzs0['runWith']([0x0, t$fm5o]);
                },
                'fail': function (eg1ln) {
                    if (eg1ln) abdzs0 != null && abdzs0['runWith']([0x1, eg1ln]);
                }
            });
        }, x6z93r['downImg'] = function (ra39zd, engwl, d04s) {
            d04s === void 0x0 && (d04s = '');
            var y2cu7p = x6z93r['wxdown']({
                'url': ra39zd,
                'success': function (v_i) {
                    v_i['statusCode'] === 0xc8 && x6z93r['copyFile'](v_i['tempFilePath'], d04s, engwl);
                },
                'fail': function (vq_e8i) {
                    engwl != null && engwl['runWith']([0x1, vq_e8i]);
                }
            });
        }, x6z93r['copyFile'] = function (ukypc, _v2jkq, e_v81i) {
            var kup2y = ukypc['split']('/'),
                elg = kup2y[kup2y['length'] - 0x1],
                mhcu7 = _v2jkq['split']('?')[0x0],
                n18gle = x6z93r['getFileInfo'](_v2jkq),
                m7hpuf = x6z93r['getFileNativePath'](elg);
            x6z93r['fs']['copyFile']({
                'srcPath': ukypc,
                'destPath': m7hpuf,
                'success': function (zbsad0) {
                    if (!n18gle) x6z93r['onSaveFile'](_v2jkq, elg), e_v81i != null && e_v81i['runWith']([0x0]);else {
                        if (n18gle['readyUrl'] != _v2jkq) x6z93r['remove'](elg, _v2jkq, e_v81i);
                    }
                },
                'fail': function (kupc) {
                    e_v81i != null && e_v81i['runWith']([0x1, kupc]);
                }
            });
        }, x6z93r['getFileNativePath'] = function (jcky2) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + jcky2;
        }, x6z93r['remove'] = function (cpy7h, vkj_q, za93rd) {
            vkj_q === void 0x0 && (vkj_q = '');
            var da4b = x6z93r['getFileInfo'](vkj_q),
                ych7p = x6z93r['getFileNativePath'](da4b['md5']);
            vk2j_q['loader']['clearRes'](da4b['readyUrl']), x6z93r['fs']['unlink']({
                'filePath': ych7p,
                'success': function (qjkiv) {
                    if (vkj_q != '') x6z93r['onSaveFile'](vkj_q, cpy7h);
                    za93rd != null && za93rd['runWith']([0x0]);
                },
                'fail': function (v1i_8e) {}
            });
        }, x6z93r['onSaveFile'] = function (mhot, oh$tmf) {
            var jq8 = mhot['split']('?')[0x0];
            x6z93r['filesListObj'][jq8] = {
                'md5': oh$tmf,
                'readyUrl': mhot
            }, x6z93r['fs']['writeFile']({
                'filePath': x6z93r['fileNativeDir'] + '/' + x6z93r['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](x6z93r['filesListObj']),
                'success': function (ige1n) {
                    console['log']('写入测试测试成功：', ige1n);
                },
                'fail': function (q8evi_) {
                    console['log']('写入测试测试失败：', q8evi_);
                }
            });
        }, x6z93r['existDir'] = function (ckyuj, o5t$0) {
            x6z93r['fs']['mkdir']({
                'dirPath': ckyuj,
                'success': function (t0$s45) {
                    o5t$0 != null && o5t$0['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (r9dab) {
                    if (r9dab['errMsg']['indexOf']('file already exists') != -0x1) x6z93r['readSync'](x6z93r['fileListName'], 'utf8', o5t$0);else o5t$0 != null && o5t$0['runWith']([0x1, r9dab]);
                }
            });
        }, x6z93r['readSync'] = function (f7muhp, uycp2k, _jvi8q, cjk2yu) {
            uycp2k === void 0x0 && (uycp2k = 'ascill'), cjk2yu === void 0x0 && (cjk2yu = '');
            var f5om = x6z93r['getFileNativePath'](f7muhp),
                b4sd50;
            try {
                b4sd50 = x6z93r['fs']['readFileSync'](f5om), _jvi8q != null && _jvi8q['runWith']([0x0, { 'data': b4sd50 }]);
            } catch (szadb) {
                _jvi8q != null && _jvi8q['runWith']([0x1]);
            }
        }, x6z93r['readCache'] = function () {}, x6z93r['writeCache'] = function (xzr3) {
            var up7y = readyUrl['split']('?')[0x0];
            x6z93r['filesListObj'][up7y] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, x6z93r['fs']['writeFile']({
                'filePath': x6z93r['fileNativeDir'] + '/' + x6z93r['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](x6z93r['filesListObj']),
                'success': function (uhmc7p) {},
                'fail': function (tm$hf) {}
            });
        }, x6z93r['setNativeFileDir'] = function (h7uyc) {
            x6z93r['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + h7uyc;
        }, x6z93r['filesListObj'] = {}, x6z93r['fileNativeDir'] = null, x6z93r['fileListName'] = 'layaairfiles.txt', x6z93r['ziyuFileData'] = {}, _qyk2(x6z93r, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), x6z93r;
    }(l8eng),
        ne1lwg = function (q8ji_v) {
        function zr639() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], zr639['__super']['call'](this), this['_sound'] = zr639['_createSound'](), this['_chanell'] = new t$50s4(this['_sound']);
        }
        mf$ho(zr639, 'laya.wx.mini.MiniSound', q8ji_v);
        var u7mfp = zr639['prototype'];
        return u7mfp['load'] = function (iv_1e) {
            var dsa04 = this;
            iv_1e = o5$f4['formatURL'](iv_1e), this['url'] = iv_1e;
            if (zr639['_audioCache'][iv_1e]) {
                this['event']('complete');
                return;
            }
            function i_vkq() {
                if (zr639['_null'] != undefined) dsa04['_sound']['onCanplay'](zr639['_null']), dsa04['_sound']['onError'](zr639['_null']);else try {
                    dsa04['_sound']['onCanplay'](null), dsa04['_sound']['onError'](null), zr639['_null'] = null;
                } catch (jkuc2y) {
                    console['warn']('[wxmini] _clearSound:' + jkuc2y), dsa04['_sound']['onCanplay'](p7umc), dsa04['_sound']['onError'](p7umc), zr639['_null'] = p7umc;
                }
            }
            function iqjv8() {
                nlgw1['loaded'] = !![], nlgw1['event']('complete'), zr639['_audioCache'][nlgw1['url']] = nlgw1;
            }
            function _kqyj2(o$450) {
                console['error']('errCode=' + o$450['errCode'] + '  errMsg=' + o$450['errMsg']), nlgw1['event']('error');
            }
            function p7umc() {}
            this['_sound']['onCanplay'](iqjv8), this['_sound']['onError'](_kqyj2), this['_sound']['src'] = iv_1e;
            var nlgw1 = this;
        }, u7mfp['play'] = function (dbs45, otf4) {
            dbs45 === void 0x0 && (dbs45 = 0x0), otf4 === void 0x0 && (otf4 = 0x0);
            var zxr396, nw1gel;
            if (this['url'] == dz3r9['_tMusic']) {
                if (!zr639['_musicAudio']) zr639['_musicAudio'] = this['_sound'];
                zxr396 = zr639['_musicAudio'], nw1gel = this['_chanell'];
            } else zxr396 = this['_sound'], nw1gel = this['_chanell'];
            return zxr396['src'] = this['url'], zxr396['startTime'] = 0x0, nw1gel['isStopped'] && (nw1gel['url'] = this['url'], nw1gel['loops'] = otf4, nw1gel['startTime'] = dbs45, nw1gel['play'](), dz3r9['addChannel'](nw1gel)), nw1gel;
        }, u7mfp['dispose'] = function () {
            var cmpu = zr639['_audioCache'][this['url']];
            cmpu && (cmpu['src'] = '', delete zr639['_audioCache'][this['url']]);
        }, p72uyc(0x0, u7mfp, 'duration', function () {
            return this['_sound']['duration'];
        }), zr639['_createSound'] = function () {
            zr639['_id']++;
            var mof5t$ = hp7fum['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return mof5t$;
        }, zr639['_musicAudio'] = null, zr639['_id'] = 0x0, zr639['_audioCache'] = {}, zr639['_null'] = undefined, zr639;
    }(l8eng),
        t$50s4 = function (k_j2yq) {
        function c2kuyj(b0$s) {
            this['_audio'] = null, this['_onEnd'] = null, c2kuyj['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = b0$s, this['_onEnd'] = jq_k2v['bind'](this['__onEnd'], this), b0$s['onEnded'](this['_onEnd']);
        }
        mf$ho(c2kuyj, 'laya.wx.mini.MiniSoundChannel', k_j2yq);
        var ucy7h = c2kuyj['prototype'];
        return ucy7h['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (vk2j_q['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, ucy7h['__onNull'] = function () {}, ucy7h['play'] = function () {
            this['isStopped'] = ![], dz3r9['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, ucy7h['stop'] = function () {
            this['isStopped'] = !![], dz3r9['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, ucy7h['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, ucy7h['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], dz3r9['addChannel'](this), this['_audio']['play']();
        }, p72uyc(0x0, ucy7h, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), p72uyc(0x0, ucy7h, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), p72uyc(0x0, ucy7h, 'volume', function () {
            return 0x1;
        }, function (absz0) {}), c2kuyj['_null'] = undefined, c2kuyj;
    }(ot7mf),
        thof$m = function () {
        function adb4s() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = hp7fum['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        mf$ho(adb4s, 'laya.wx.mini.MiniVideo');
        var e_qv = adb4s['prototype'];
        return e_qv['on'] = function (s5$04t, v_q8j, s$5b) {
            if (s5$04t == 'loadedmetadata') this['onPlayFunc'] = s$5b['bind'](v_q8j), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else s5$04t == 'ended' && (this['onEndedFunC'] = s$5b['bind'](v_q8j), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, e_qv['onTimeUpdateFunc'] = function (qky) {
            this['position'] = qky['position'], this['_duration'] = qky['duration'];
        }, e_qv['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, e_qv['onended'] = function (eg8, q_jv8) {
            this['onEndedFunC'] = q_jv8['bind'](eg8), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, e_qv['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, e_qv['off'] = function (hf7up, basdz, r3a9z) {
            if (hf7up == 'loadedmetadata') this['onPlayFunc'] = r3a9z['bind'](basdz), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else hf7up == 'ended' && (this['onEndedFunC'] = r3a9z['bind'](basdz), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, e_qv['load'] = function (pcu2y) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = pcu2y;
        }, e_qv['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, e_qv['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, e_qv['size'] = function (s$5t4, mc7puh) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = s$5t4, this['videoElement']['height'] = mc7puh;
        }, e_qv['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, e_qv['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, p72uyc(0x0, e_qv, 'duration', function () {
            return this['_duration'];
        }), p72uyc(0x0, e_qv, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (jk_qv2) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = jk_qv2;
        }), p72uyc(0x0, e_qv, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), p72uyc(0x0, e_qv, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), p72uyc(0x0, e_qv, 'ended', function () {
            return this['videoend'];
        }), p72uyc(0x0, e_qv, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (gvi8e) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = gvi8e;
        }), p72uyc(0x0, e_qv, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (p7yu) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = p7yu;
        }), p72uyc(0x0, e_qv, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (ivg1e8) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = ivg1e8;
        }), p72uyc(0x0, e_qv, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), p72uyc(0x0, e_qv, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (h7upf) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = h7upf;
        }), p72uyc(0x0, e_qv, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (f$4o5t) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = f$4o5t;
        }), p72uyc(0x0, e_qv, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), p72uyc(0x0, e_qv, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (_2qv) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = _2qv;
        }), p72uyc(0x0, e_qv, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (veq_i) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = veq_i;
        }), p72uyc(0x0, e_qv, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (fm5t) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = fm5t;
        }), adb4s;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var x3rz6 in Laya) {
        var rd9abz = Laya[x3rz6];
        rd9abz && rd9abz['__isclass'] && (exports[x3rz6] = rd9abz);
    }
});