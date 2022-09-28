var g = wx.u$;
(function (window, document, rdfq6) {
    var v5fuqd = rdfq6['un'],
        ken_ = rdfq6['uns'],
        _ws8eh = rdfq6['static'],
        im4xcp = rdfq6['class'],
        zbl97 = rdfq6['getset'],
        v$b2u = rdfq6['__newvec'],
        r3dt = laya['utils']['Browser'],
        ekn8_ = laya['events']['Event'],
        zolm7c = laya['events']['EventDispatcher'],
        eh8sa = laya['resource']['HTMLImage'],
        wk8n = laya['utils']['Handler'],
        k_jw = laya['display']['Input'],
        _wyjnk = laya['net']['Loader'],
        ha0e8s = laya['maths']['Matrix'],
        ob7zl = laya['renders']['Render'],
        pgxic4 = laya['utils']['RunDriver'],
        e_wh = laya['media']['Sound'],
        uqf56 = laya['media']['SoundChannel'],
        gyijx = laya['media']['SoundManager'],
        ub9v2$ = laya['display']['Stage'],
        ygjnk = laya['net']['URL'],
        xgypi4 = laya['utils']['Utils'],
        gykjni = function () {
        function nkgji() {}
        return im4xcp(nkgji, 'laya.wx.mini.MiniAdpter'), nkgji['getJson'] = function (dufv5q) {
            return JSON['parse'](dufv5q);
        }, nkgji['init'] = function (ewn8_k, dtq6) {
            ewn8_k === void 0x0 && (ewn8_k = ![]), dtq6 === void 0x0 && (dtq6 = ![]);
            if (nkgji['_inited']) return;
            nkgji['window'] = window;
            if (nkgji['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            nkgji['_inited'] = !![], nkgji['isZiYu'] = dtq6, nkgji['isPosMsgYu'] = ewn8_k, nkgji['EnvConfig'] = {}, !nkgji['isZiYu'] && (vqdu['setNativeFileDir']('/layaairGame'), vqdu['existDir'](vqdu['fileNativeDir'], wk8n['create'](nkgji, nkgji['onMkdirCallBack']))), nkgji['window']['focus'] = function () {}, rdfq6['getUrlPath'] = function () {}, nkgji['window']['logtime'] = function (colm) {}, nkgji['window']['alertTimeLog'] = function (zo7l) {}, nkgji['window']['resetShareInfo'] = function () {}, nkgji['window']['CanvasRenderingContext2D'] = function () {}, nkgji['window']['CanvasRenderingContext2D']['prototype'] = nkgji['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], nkgji['window']['document']['body']['appendChild'] = function () {}, nkgji['EnvConfig']['pixelRatioInt'] = 0x0, pgxic4['getPixelRatio'] = nkgji['pixelRatio'], nkgji['_preCreateElement'] = r3dt['createElement'], r3dt['createElement'] = nkgji['createElement'], pgxic4['createShaderCondition'] = nkgji['createShaderCondition'], xgypi4['parseXMLFromString'] = nkgji['parseXMLFromString'], k_jw['_createInputElement'] = bu$92['_createInputElement'], nkgji['EnvConfig']['load'] = _wyjnk['prototype']['load'], _wyjnk['prototype']['load'] = kynigj['prototype']['load'], nkgji['isZiYu'] && ewn8_k && wx['onMessage'](function (qd2v) {
                qd2v['isLoad'] && (vqdu['ziyuFileData'][qd2v['url']] = qd2v['data']);
            });
        }, nkgji['onMkdirCallBack'] = function (mcx, lz$bo) {
            if (!mcx) vqdu['filesListObj'] = JSON['parse'](lz$bo['data']);
        }, nkgji['pixelRatio'] = function () {
            if (!nkgji['EnvConfig']['pixelRatioInt']) try {
                var gxp4 = wx['getSystemInfoSync']();
                return nkgji['EnvConfig']['pixelRatioInt'] = gxp4['pixelRatio'], gxp4 = gxp4, gxp4['pixelRatio'];
            } catch (vb$29) {}
            return nkgji['EnvConfig']['pixelRatioInt'];
        }, nkgji['createElement'] = function (k8h_e) {
            if (k8h_e == 'canvas') {
                var d5u;
                return nkgji['idx'] == 0x1 ? nkgji['isZiYu'] ? (d5u = sharedCanvas, d5u['style'] = {}) : d5u = window['canvas'] : d5u = window['wx']['createCanvas'](), nkgji['idx']++, d5u;
            } else {
                if (k8h_e == 'textarea' || k8h_e == 'input') return nkgji['onCreateInput'](k8h_e);else {
                    if (k8h_e == 'div') {
                        var c4ipgx = nkgji['_preCreateElement'](k8h_e);
                        return c4ipgx['contains'] = function (whs_8e) {
                            return null;
                        }, c4ipgx['removeChild'] = function (opxm4) {}, c4ipgx;
                    } else return nkgji['_preCreateElement'](k8h_e);
                }
            }
        }, nkgji['onCreateInput'] = function (nygi4j) {
            var mpoxzc = nkgji['_preCreateElement'](nygi4j);
            return mpoxzc['focus'] = bu$92['wxinputFocus'], mpoxzc['blur'] = bu$92['wxinputblur'], mpoxzc['style'] = {}, mpoxzc['value'] = 0x0, mpoxzc['parentElement'] = {}, mpoxzc['placeholder'] = {}, mpoxzc['type'] = {}, mpoxzc['setColor'] = function (sw8_h) {}, mpoxzc['setType'] = function (vf5du) {}, mpoxzc['setFontFace'] = function (o$mz) {}, mpoxzc['addEventListener'] = function (b5u92) {}, mpoxzc['contains'] = function (cxozp) {
                return null;
            }, mpoxzc['removeChild'] = function ($b7zo) {}, mpoxzc;
        }, nkgji['createShaderCondition'] = function (hk_e8) {
            var b2l9$ = this,
                qd5uf = function () {
                var _wnyj = hk_e8;
                return b2l9$[hk_e8['replace']('this.', '')];
            };
            return qd5uf;
        }, nkgji['EnvConfig'] = null, nkgji['window'] = null, nkgji['_preCreateElement'] = null, nkgji['_inited'] = ![], nkgji['wxRequest'] = null, nkgji['systemInfo'] = null, nkgji['version'] = '0.0.1', nkgji['isZiYu'] = ![], nkgji['isPosMsgYu'] = ![], nkgji['parseXMLFromString'] = function (zcoxmp) {
            var m4icp, jg4yxi;
            zcoxmp = zcoxmp['replace'](/>\s+</g, '><');
            try {
                m4icp = new window['Parser']['DOMParser']()['parseFromString'](zcoxmp, 'text/xml');
            } catch (moz7$) {
                throw '需要引入xml解析库文件';
            }
            return m4icp;
        }, nkgji['idx'] = 0x1, nkgji;
    }(),
        qdt6r = function () {
        function cpm4ix() {}
        im4xcp(cpm4ix, 'laya.wx.mini.MiniImage');
        var dr3f6t = cpm4ix['prototype'];
        return dr3f6t['_loadImage'] = function (m7$ozl) {
            var uq9v2 = this,
                jgiyn = ![];
            m7$ozl['indexOf']('layaNativeDir/') == -0x1 && (jgiyn = !![], m7$ozl = ygjnk['formatURL'](m7$ozl));
            if (!vqdu['getFileInfo'](m7$ozl)) {
                if (m7$ozl['indexOf']('http://') != -0x1 || m7$ozl['indexOf']('https://') != -0x1) vqdu['downImg'](m7$ozl, new wk8n(cpm4ix, cpm4ix['onDownImgCallBack'], [m7$ozl, uq9v2]), m7$ozl);else cpm4ix['onCreateImage'](m7$ozl, uq9v2, !![]);
            } else cpm4ix['onCreateImage'](m7$ozl, uq9v2, !jgiyn);
        }, cpm4ix['onDownImgCallBack'] = function (u5qd6f, p4mcx, f6dqr5) {
            if (!f6dqr5) cpm4ix['onCreateImage'](u5qd6f, p4mcx);else p4mcx['onError'](null);
        }, cpm4ix['onCreateImage'] = function (es_h8, fr3d6t, dv5ufq) {
            dv5ufq === void 0x0 && (dv5ufq = ![]);
            var uv92b;
            if (!dv5ufq) {
                var j_nwyk = vqdu['getFileInfo'](es_h8),
                    xpmzo = j_nwyk['md5'];
                uv92b = vqdu['getFileNativePath'](xpmzo);
            } else uv92b = es_h8;
            if (fr3d6t['imgCache'] == null) fr3d6t['imgCache'] = {};
            var v29$7;
            function ozlcp() {
                v29$7['onload'] = null, v29$7['onerror'] = null, delete fr3d6t['imgCache'][es_h8];
            }
            ;
            var wke8n_ = function () {
                ozlcp(), fr3d6t['onLoaded'](v29$7);
            },
                mxp4ci = function () {
                ozlcp(), fr3d6t['event']('error', 'Load image failed');
            };
            fr3d6t['_type'] == 'nativeimage' ? (v29$7 = new r3dt['window']['Image'](), v29$7['crossOrigin'] = '', v29$7['onload'] = wke8n_, v29$7['onerror'] = mxp4ci, v29$7['src'] = uv92b, fr3d6t['imgCache'][es_h8] = v29$7) : new eh8sa['create'](uv92b, {
                'onload': wke8n_,
                'onerror': mxp4ci,
                'onCreate': function (omxc4p) {
                    v29$7 = omxc4p, fr3d6t['imgCache'][es_h8] = omxc4p;
                }
            });
        }, cpm4ix;
    }(),
        bu$92 = function () {
        function h_s8() {}
        return im4xcp(h_s8, 'laya.wx.mini.MiniInput'), h_s8['_createInputElement'] = function () {
            k_jw['_initInput'](k_jw['area'] = r3dt['createElement']('textarea')), k_jw['_initInput'](k_jw['input'] = r3dt['createElement']('input')), k_jw['inputContainer'] = r3dt['createElement']('div'), k_jw['inputContainer']['style']['position'] = 'absolute', k_jw['inputContainer']['style']['zIndex'] = 0x186a0, r3dt['container']['appendChild'](k_jw['inputContainer']), k_jw['inputContainer']['setPos'] = function (q2vd, wke_n8) {
                k_jw['inputContainer']['style']['left'] = q2vd + 'px', k_jw['inputContainer']['style']['top'] = wke_n8 + 'px';
            }, rdfq6['stage']['on']('resize', null, h_s8['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (nwjke_) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), gyijx['_soundClass'] = ipgyx4, gyijx['_musicClass'] = ipgyx4, window['_videoClass'] = h_e8w;
        }, h_s8['_onStageResize'] = function () {
            var ws8eha = rdfq6['stage']['_canvasTransform']['identity']();
            ws8eha['scale'](r3dt['width'] / ob7zl['canvas']['width'] / pgxic4['getPixelRatio'](), r3dt['height'] / ob7zl['canvas']['height'] / pgxic4['getPixelRatio']());
        }, h_s8['wxinputFocus'] = function (xipm) {
            var l72 = k_jw['inputElement']['target'];
            if (l72 && !l72['editable']) return;
            gykjni['window']['wx']['offKeyboardConfirm'](), gykjni['window']['wx']['offKeyboardInput'](), gykjni['window']['wx']['showKeyboard']({
                'defaultValue': l72['text'],
                'maxLength': l72['maxChars'],
                'multiple': l72['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (h8wes_) {},
                'fail': function (g4ixcp) {}
            }), gykjni['window']['wx']['onKeyboardConfirm'](function (v5u2) {
                var q25du = v5u2 ? v5u2['value'] : '';
                l72['text'] = q25du, l72['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), gykjni['window']['wx']['onKeyboardInput'](function (z$7mol) {
                var olcz7m = z$7mol ? z$7mol['value'] : '';
                if (!l72['multiline']) {
                    if (olcz7m['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                l72['text'] = olcz7m, l72['event']('input');
            });
        }, h_s8['inputEnter'] = function () {
            k_jw['inputElement']['target']['focus'] = ![];
        }, h_s8['wxinputblur'] = function () {
            h_s8['hideKeyboard']();
        }, h_s8['hideKeyboard'] = function () {
            gykjni['window']['wx']['offKeyboardConfirm'](), gykjni['window']['wx']['offKeyboardInput'](), gykjni['window']['wx']['hideKeyboard']({
                'success': function ($927l) {
                    console['log']('隐藏键盘');
                },
                'fail': function (zmcolp) {
                    console['log']('隐藏键盘出错:' + (zmcolp ? zmcolp['errMsg'] : ''));
                }
            });
        }, h_s8;
    }(),
        kynigj = function () {
        function dqf5() {}
        im4xcp(dqf5, 'laya.wx.mini.MiniLoader');
        var zpc = dqf5['prototype'];
        return zpc['load'] = function (q52vu9, r6fdt3, gynkj_, _jwykn, polzcm) {
            gynkj_ === void 0x0 && (gynkj_ = !![]), polzcm === void 0x0 && (polzcm = ![]);
            var ol7zb = this;
            ol7zb['_url'] = q52vu9;
            if (q52vu9['indexOf']('data:image') === 0x0) ol7zb['_type'] = r6fdt3 = 'image';else ol7zb['_type'] = r6fdt3 || (r6fdt3 = ol7zb['getTypeFromUrl'](q52vu9));
            ol7zb['_cache'] = gynkj_, ol7zb['_data'] = null;
            var ne_wkj = 'ascii';
            if (q52vu9['indexOf']('.fnt') != -0x1) ne_wkj = 'utf8';else r6fdt3 == 'arraybuffer' && (ne_wkj = '');
            ;
            var yj_kwn = xgypi4['getFileExtension'](q52vu9);
            if (dqf5['_fileTypeArr']['indexOf'](yj_kwn) != -0x1) gykjni['EnvConfig']['load']['call'](this, q52vu9, r6fdt3, gynkj_, _jwykn, polzcm);else {
                if (!vqdu['getFileInfo'](q52vu9)) {
                    if (q52vu9['indexOf']('layaNativeDir/') != -0x1) {
                        if (gykjni['isZiYu']) {
                            var xcm = vqdu['ziyuFileData'][q52vu9];
                            ol7zb['onLoaded'](xcm);
                            return;
                        } else {
                            cosnole['log']('read read'), vqdu['read'](q52vu9, ne_wkj, new wk8n(dqf5, dqf5['onReadNativeCallBack'], [ne_wkj, q52vu9, r6fdt3, gynkj_, _jwykn, polzcm, ol7zb]));
                            return;
                        }
                    }
                    if (ygjnk['rootPath'] == '') var _hwke8 = q52vu9;else _hwke8 = q52vu9['split'](ygjnk['rootPath'])[0x0];
                    q52vu9['indexOf']('http://') != -0x1 || q52vu9['indexOf']('https://') != -0x1 ? gykjni['EnvConfig']['load']['call'](ol7zb, q52vu9, r6fdt3, gynkj_, _jwykn, polzcm) : vqdu['readFile'](_hwke8, ne_wkj, new wk8n(dqf5, dqf5['onReadNativeCallBack'], [ne_wkj, q52vu9, r6fdt3, gynkj_, _jwykn, polzcm, ol7zb]), q52vu9);
                } else gykjni['EnvConfig']['load']['call'](this, q52vu9, r6fdt3, gynkj_, _jwykn, polzcm);
            }
        }, zpc['resMgrLoad'] = function (we8, a0hse8, ygjxi4, tq6fdr, f163r, pxcmzo, fd63) {
            ygjxi4 === void 0x0 && (ygjxi4 = 0x0), tq6fdr === void 0x0 && (tq6fdr = ![]), f163r === void 0x0 && (f163r = ![]), pxcmzo === void 0x0 && (pxcmzo = 0x0), fd63 === void 0x0 && (fd63 = 0x3), we8['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', we8), gykjni['EnvConfig']['resMgrLoad'](we8, ($lb79, gkjiny, $2v97b) => {
                dqf5['prototype']['resMgrLoadCallBack']($lb79, gkjiny, $2v97b, a0hse8);
            }, ygjxi4, tq6fdr, f163r, pxcmzo, fd63);
        }, zpc['resMgrLoadCallBack'] = function (j_kny, $v2, _shew8, ikg) {
            console['log']('buff:::', j_kny, _shew8, vqdu['fileNativeDir'] + '///' + vqdu['fileListName']), ikg(j_kny, $v2, _shew8);
        }, zpc['clearRes'] = function (q6fd5r, o4pmcx) {
            o4pmcx === void 0x0 && (o4pmcx = ![]);
            var x4cgpi = this;
            x4cgpi['clearRes'](q6fd5r, o4pmcx);
            var w8ea = vqdu['getFileInfo'](q6fd5r);
            if (w8ea && (q6fd5r['indexOf']('http://') != -0x1 || q6fd5r['indexOf']('https://') != -0x1)) {
                var wjky_n = w8ea['md5'],
                    kygnj = vqdu['getFileNativePath'](wjky_n);
                vqdu['remove'](kygnj);
            }
        }, dqf5['onReadNativeCallBack'] = function (xpco4, b7z$9, zcpx, n_ykwj, rt6fdq, t6fr13, xzmco, z$bol, ixpc4m) {
            n_ykwj === void 0x0 && (n_ykwj = !![]), t6fr13 === void 0x0 && (t6fr13 = ![]), z$bol === void 0x0 && (z$bol = 0x0);
            if (!z$bol) {
                var l9b$27;
                if (zcpx == 'json' || zcpx == 'atlas') l9b$27 = gykjni['getJson'](ixpc4m['data']);else zcpx == 'xml' ? l9b$27 = xgypi4['parseXMLFromString'](ixpc4m['data']) : l9b$27 = ixpc4m['data'];
                xzmco['onLoaded'](l9b$27), !gykjni['isZiYu'] && gykjni['isPosMsgYu'] && zcpx != 'arraybuffer' && wx['postMessage']({
                    'url': b7z$9,
                    'data': l9b$27,
                    'isLoad': !![]
                });
            } else z$bol == 0x1 && gykjni['EnvConfig']['load']['call'](xzmco, b7z$9, zcpx, n_ykwj, rt6fdq, t6fr13);
        }, _ws8eh(dqf5, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), dqf5;
    }(),
        vqdu = function (jikgn) {
        function ixg() {
            ixg['__super']['call'](this);
            ;
        }
        return im4xcp(ixg, 'laya.wx.mini.MiniFileMgr', jikgn), ixg['isLoadFile'] = function (f56drq) {
            return ixg['_fileTypeArr']['indexOf'](f56drq) != -0x1 ? !![] : ![];
        }, ixg['getFileInfo'] = function (uv59) {
            var $92vb = uv59['split']('?')[0x0],
                wj_kny = ixg['filesListObj'][$92vb];
            if (wj_kny == null) return null;else return wj_kny;
            return null;
        }, ixg['onFileUpdate'] = function (jy4i, f5uvqd) {
            var njwy_k = jy4i['split']('/'),
                ygi = njwy_k[njwy_k['length'] - 0x1],
                xp4 = ixg['getFileInfo'](f5uvqd);
            if (xp4 == null) ixg['onSaveFile'](f5uvqd, ygi);else {
                if (xp4['readyUrl'] != f5uvqd) ixg['remove'](ygi, f5uvqd);
            }
        }, ixg['exits'] = function (w_hse8, jyg4ni) {
            var ipxy4 = ixg['getFileNativePath'](w_hse8);
            ixg['fs']['getFileInfo']({
                'filePath': ipxy4,
                'success': function (jyx4) {
                    jyg4ni != null && jyg4ni['runWith']([0x0, jyx4]);
                },
                'fail': function (bo$z) {
                    jyg4ni != null && jyg4ni['runWith']([0x1, bo$z]);
                }
            });
        }, ixg['read'] = function ($zb9l7, x4gj, ubv52, pzmxoc) {
            x4gj === void 0x0 && (x4gj = 'ascill'), pzmxoc === void 0x0 && (pzmxoc = '');
            var tdfq6;
            pzmxoc != '' ? tdfq6 = ixg['getFileNativePath']($zb9l7) : tdfq6 = $zb9l7, ixg['fs']['readFile']({
                'filePath': tdfq6,
                'encoding': x4gj,
                'success': function (q5d2u) {
                    ubv52 != null && ubv52['runWith']([0x0, q5d2u]);
                },
                'fail': function (r6td3f) {
                    if (r6td3f && pzmxoc != '') ixg['down'](pzmxoc, x4gj, ubv52, pzmxoc);else ubv52 != null && ubv52['runWith']([0x1]);
                }
            });
        }, ixg['readNativeFile'] = function (e8_nk, r63tf) {
            ixg['fs']['readFile']({
                'filePath': e8_nk,
                'encoding': '',
                'success': function (ek_nj) {
                    r63tf != null && r63tf['runWith']([0x0]);
                },
                'fail': function (u952b) {
                    r63tf != null && r63tf['runWith']([0x1]);
                }
            });
        }, ixg['down'] = function (_nk8w, ykg_nj, zb$9l7, ocpx) {
            ykg_nj === void 0x0 && (ykg_nj = 'ascill'), ocpx === void 0x0 && (ocpx = '');
            var ub2v5 = ixg['getFileNativePath'](ocpx),
                pmlcz = ixg['wxdown']({
                'url': _nk8w,
                'filePath': ub2v5,
                'success': function (l$bzo) {
                    if (l$bzo['statusCode'] === 0xc8) ixg['readFile'](l$bzo['filePath'], ykg_nj, zb$9l7, ocpx);
                },
                'fail': function (cmp4i) {
                    zb$9l7 != null && zb$9l7['runWith']([0x1, cmp4i]);
                }
            });
            pmlcz['onProgressUpdate'](function (moxzc) {
                zb$9l7 != null && zb$9l7['runWith']([0x2, moxzc['progress']]);
            });
        }, ixg['readFile'] = function (oxcpz, ykj_ng, mzpocx, du5fq6) {
            ykj_ng === void 0x0 && (ykj_ng = 'ascill'), du5fq6 === void 0x0 && (du5fq6 = ''), ixg['fs']['readFile']({
                'filePath': oxcpz,
                'encoding': ykj_ng,
                'success': function (enw_k) {
                    if (oxcpz['indexOf']('http://') != -0x1 || oxcpz['indexOf']('https://') != -0x1) ixg['onFileUpdate'](oxcpz, du5fq6);
                    mzpocx != null && mzpocx['runWith']([0x0, enw_k]);
                },
                'fail': function (lczmp) {
                    if (lczmp) mzpocx != null && mzpocx['runWith']([0x1, lczmp]);
                }
            });
        }, ixg['downImg'] = function (nygjk, zxpocm, mpx4oc) {
            mpx4oc === void 0x0 && (mpx4oc = '');
            var u2qd5v = ixg['wxdown']({
                'url': nygjk,
                'success': function (yn_jwk) {
                    yn_jwk['statusCode'] === 0xc8 && ixg['copyFile'](yn_jwk['tempFilePath'], mpx4oc, zxpocm);
                },
                'fail': function (ocm7l) {
                    zxpocm != null && zxpocm['runWith']([0x1, ocm7l]);
                }
            });
        }, ixg['copyFile'] = function (qd5v2u, ci4xgp, jny) {
            var f56qdr = qd5v2u['split']('/'),
                ngy4 = f56qdr[f56qdr['length'] - 0x1],
                igyn = ci4xgp['split']('?')[0x0],
                b295 = ixg['getFileInfo'](ci4xgp),
                x4ocp = ixg['getFileNativePath'](ngy4);
            ixg['fs']['copyFile']({
                'srcPath': qd5v2u,
                'destPath': x4ocp,
                'success': function (w8_h) {
                    if (!b295) ixg['onSaveFile'](ci4xgp, ngy4), jny != null && jny['runWith']([0x0]);else {
                        if (b295['readyUrl'] != ci4xgp) ixg['remove'](ngy4, ci4xgp, jny);
                    }
                },
                'fail': function (w_8ekh) {
                    jny != null && jny['runWith']([0x1, w_8ekh]);
                }
            });
        }, ixg['getFileNativePath'] = function (kynj_g) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + kynj_g;
        }, ixg['remove'] = function (c4xi, r16f3t, lb7$oz) {
            r16f3t === void 0x0 && (r16f3t = '');
            var xijgy4 = ixg['getFileInfo'](r16f3t),
                gxpic = ixg['getFileNativePath'](xijgy4['md5']);
            rdfq6['loader']['clearRes'](xijgy4['readyUrl']), ixg['fs']['unlink']({
                'filePath': gxpic,
                'success': function (d2uqv) {
                    if (r16f3t != '') ixg['onSaveFile'](r16f3t, c4xi);
                    lb7$oz != null && lb7$oz['runWith']([0x0]);
                },
                'fail': function (kj_ygn) {}
            });
        }, ixg['onSaveFile'] = function (y4ijng, vqf5d) {
            var gjyn4 = y4ijng['split']('?')[0x0];
            ixg['filesListObj'][gjyn4] = {
                'md5': vqf5d,
                'readyUrl': y4ijng
            }, ixg['fs']['writeFile']({
                'filePath': ixg['fileNativeDir'] + '/' + ixg['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](ixg['filesListObj']),
                'success': function (nk8_e) {
                    console['log']('写入测试测试成功：', nk8_e);
                },
                'fail': function (seha80) {
                    console['log']('写入测试测试失败：', seha80);
                }
            });
        }, ixg['existDir'] = function (pmozcx, qvfu5d) {
            ixg['fs']['mkdir']({
                'dirPath': pmozcx,
                'success': function (s0ea8h) {
                    qvfu5d != null && qvfu5d['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (ws_h8) {
                    if (ws_h8['errMsg']['indexOf']('file already exists') != -0x1) ixg['readSync'](ixg['fileListName'], 'utf8', qvfu5d);else qvfu5d != null && qvfu5d['runWith']([0x1, ws_h8]);
                }
            });
        }, ixg['readSync'] = function (w8en_, g4jiny, zxopc, u95) {
            g4jiny === void 0x0 && (g4jiny = 'ascill'), u95 === void 0x0 && (u95 = '');
            var u952qv = ixg['getFileNativePath'](w8en_),
                ygki;
            try {
                ygki = ixg['fs']['readFileSync'](u952qv), zxopc != null && zxopc['runWith']([0x0, { 'data': ygki }]);
            } catch (z7mol) {
                zxopc != null && zxopc['runWith']([0x1]);
            }
        }, ixg['readCache'] = function () {}, ixg['writeCache'] = function ($7lb) {
            var o7b$z = readyUrl['split']('?')[0x0];
            ixg['filesListObj'][o7b$z] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, ixg['fs']['writeFile']({
                'filePath': ixg['fileNativeDir'] + '/' + ixg['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](ixg['filesListObj']),
                'success': function (mlozc) {},
                'fail': function (_8swh) {}
            });
        }, ixg['setNativeFileDir'] = function (ob7$lz) {
            ixg['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + ob7$lz;
        }, ixg['filesListObj'] = {}, ixg['fileNativeDir'] = null, ixg['fileListName'] = 'layaairfiles.txt', ixg['ziyuFileData'] = {}, _ws8eh(ixg, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), ixg;
    }(zolm7c),
        ipgyx4 = function (ykgj) {
        function w_es8() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], w_es8['__super']['call'](this), this['_sound'] = w_es8['_createSound'](), this['_chanell'] = new ewnjk(this['_sound']);
        }
        im4xcp(w_es8, 'laya.wx.mini.MiniSound', ykgj);
        var a0h8se = w_es8['prototype'];
        return a0h8se['load'] = function (ygnjki) {
            var pxmoc4 = this;
            ygnjki = ygjnk['formatURL'](ygnjki), this['url'] = ygnjki;
            if (w_es8['_audioCache'][ygnjki]) {
                this['event']('complete');
                return;
            }
            function r36fd() {
                if (w_es8['_null'] != undefined) pxmoc4['_sound']['onCanplay'](w_es8['_null']), pxmoc4['_sound']['onError'](w_es8['_null']);else try {
                    pxmoc4['_sound']['onCanplay'](null), pxmoc4['_sound']['onError'](null), w_es8['_null'] = null;
                } catch (zlm$) {
                    console['warn']('[wxmini] _clearSound:' + zlm$), pxmoc4['_sound']['onCanplay'](v729b$), pxmoc4['_sound']['onError'](v729b$), w_es8['_null'] = v729b$;
                }
            }
            function lcm() {
                j4yx['loaded'] = !![], j4yx['event']('complete'), w_es8['_audioCache'][j4yx['url']] = j4yx;
            }
            function lzpmo(nwy_kj) {
                console['error']('errCode=' + nwy_kj['errCode'] + '  errMsg=' + nwy_kj['errMsg']), j4yx['event']('error');
            }
            function v729b$() {}
            this['_sound']['onCanplay'](lcm), this['_sound']['onError'](lzpmo), this['_sound']['src'] = ygnjki;
            var j4yx = this;
        }, a0h8se['play'] = function (_nekw8, pzlom) {
            _nekw8 === void 0x0 && (_nekw8 = 0x0), pzlom === void 0x0 && (pzlom = 0x0);
            var _wjenk, tr1f63;
            if (this['url'] == gyijx['_tMusic']) {
                if (!w_es8['_musicAudio']) w_es8['_musicAudio'] = this['_sound'];
                _wjenk = w_es8['_musicAudio'], tr1f63 = this['_chanell'];
            } else _wjenk = this['_sound'], tr1f63 = this['_chanell'];
            return _wjenk['src'] = this['url'], _wjenk['startTime'] = 0x0, tr1f63['isStopped'] && (tr1f63['url'] = this['url'], tr1f63['loops'] = pzlom, tr1f63['startTime'] = _nekw8, tr1f63['play'](), gyijx['addChannel'](tr1f63)), tr1f63;
        }, a0h8se['dispose'] = function () {
            var ufqv = w_es8['_audioCache'][this['url']];
            ufqv && (ufqv['src'] = '', delete w_es8['_audioCache'][this['url']]);
        }, zbl97(0x0, a0h8se, 'duration', function () {
            return this['_sound']['duration'];
        }), w_es8['_createSound'] = function () {
            w_es8['_id']++;
            var f13t = gykjni['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return f13t;
        }, w_es8['_musicAudio'] = null, w_es8['_id'] = 0x0, w_es8['_audioCache'] = {}, w_es8['_null'] = undefined, w_es8;
    }(zolm7c),
        ewnjk = function (t1f3r) {
        function se_8w(o7mzl) {
            this['_audio'] = null, this['_onEnd'] = null, se_8w['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = o7mzl, this['_onEnd'] = xgypi4['bind'](this['__onEnd'], this), o7mzl['onEnded'](this['_onEnd']);
        }
        im4xcp(se_8w, 'laya.wx.mini.MiniSoundChannel', t1f3r);
        var f3tr16 = se_8w['prototype'];
        return f3tr16['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (rdfq6['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, f3tr16['__onNull'] = function () {}, f3tr16['play'] = function () {
            this['isStopped'] = ![], gyijx['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, f3tr16['stop'] = function () {
            this['isStopped'] = !![], gyijx['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, f3tr16['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, f3tr16['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], gyijx['addChannel'](this), this['_audio']['play']();
        }, zbl97(0x0, f3tr16, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), zbl97(0x0, f3tr16, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), zbl97(0x0, f3tr16, 'volume', function () {
            return 0x1;
        }, function (jnky_g) {}), se_8w['_null'] = undefined, se_8w;
    }(uqf56),
        h_e8w = function () {
        function $9l7bz() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = gykjni['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        im4xcp($9l7bz, 'laya.wx.mini.MiniVideo');
        var bl$zo = $9l7bz['prototype'];
        return bl$zo['on'] = function (xcmoz, uf5qdv, lozcp) {
            if (xcmoz == 'loadedmetadata') this['onPlayFunc'] = lozcp['bind'](uf5qdv), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else xcmoz == 'ended' && (this['onEndedFunC'] = lozcp['bind'](uf5qdv), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, bl$zo['onTimeUpdateFunc'] = function (ngkij) {
            this['position'] = ngkij['position'], this['_duration'] = ngkij['duration'];
        }, bl$zo['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, bl$zo['onended'] = function (lm$7o, jy4gxi) {
            this['onEndedFunC'] = jy4gxi['bind'](lm$7o), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, bl$zo['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, bl$zo['off'] = function (_swe8h, z79$b, ub5v) {
            if (_swe8h == 'loadedmetadata') this['onPlayFunc'] = ub5v['bind'](z79$b), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else _swe8h == 'ended' && (this['onEndedFunC'] = ub5v['bind'](z79$b), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, bl$zo['load'] = function (omc7) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = omc7;
        }, bl$zo['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, bl$zo['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, bl$zo['size'] = function (a8hw, uv$b92) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = a8hw, this['videoElement']['height'] = uv$b92;
        }, bl$zo['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, bl$zo['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, zbl97(0x0, bl$zo, 'duration', function () {
            return this['_duration'];
        }), zbl97(0x0, bl$zo, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (u65df) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = u65df;
        }), zbl97(0x0, bl$zo, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), zbl97(0x0, bl$zo, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), zbl97(0x0, bl$zo, 'ended', function () {
            return this['videoend'];
        }), zbl97(0x0, bl$zo, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (l$z7) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = l$z7;
        }), zbl97(0x0, bl$zo, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (omclpz) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = omclpz;
        }), zbl97(0x0, bl$zo, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (tfdq) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = tfdq;
        }), zbl97(0x0, bl$zo, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), zbl97(0x0, bl$zo, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (moclpz) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = moclpz;
        }), zbl97(0x0, bl$zo, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (w8_hs) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = w8_hs;
        }), zbl97(0x0, bl$zo, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), zbl97(0x0, bl$zo, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (fr5) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = fr5;
        }), zbl97(0x0, bl$zo, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (uqdf5v) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = uqdf5v;
        }), zbl97(0x0, bl$zo, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (b9v5u2) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = b9v5u2;
        }), $9l7bz;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var kwjy in Laya) {
        var pigxc4 = Laya[kwjy];
        pigxc4 && pigxc4['__isclass'] && (exports[kwjy] = pigxc4);
    }
});