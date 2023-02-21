var P = wx.$y;
(function (window, document, y_qsl) {
    var u43 = y_qsl['un'],
        xy_qsg = y_qsl['uns'],
        o8$nd = y_qsl['static'],
        lcyr_ = y_qsl['class'],
        o$fd2k = y_qsl['getset'],
        w6epz = y_qsl['__newvec'],
        slmc_ = laya['utils']['Browser'],
        o$ndx8 = laya['events']['Event'],
        g8nodx = laya['events']['EventDispatcher'],
        slcm_r = laya['resource']['HTMLImage'],
        lrm7cs = laya['utils']['Handler'],
        etv6z = laya['display']['Input'],
        twzep6 = laya['net']['Loader'],
        wz26 = laya['maths']['Matrix'],
        kndo8 = laya['renders']['Render'],
        ab4i3u = laya['utils']['RunDriver'],
        tve6z1 = laya['media']['Sound'],
        scylq = laya['media']['SoundChannel'],
        mc7sl = laya['media']['SoundManager'],
        mclrs7 = laya['display']['Stage'],
        fkw$2 = laya['net']['URL'],
        qn8gxd = laya['utils']['Utils'],
        u437i = function () {
        function v6z1e0() {}
        return lcyr_(v6z1e0, 'laya.wx.mini.MiniAdpter'), v6z1e0['getJson'] = function ($kfw2p) {
            return JSON['parse']($kfw2p);
        }, v6z1e0['init'] = function (gd8xqn, dfok2$) {
            gd8xqn === void 0x0 && (gd8xqn = ![]), dfok2$ === void 0x0 && (dfok2$ = ![]);
            if (v6z1e0['_inited']) return;
            v6z1e0['window'] = window;
            if (v6z1e0['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            v6z1e0['_inited'] = !![], v6z1e0['isZiYu'] = dfok2$, v6z1e0['isPosMsgYu'] = gd8xqn, v6z1e0['EnvConfig'] = {}, !v6z1e0['isZiYu'] && (twp2fk['setNativeFileDir']('/layaairGame'), twp2fk['existDir'](twp2fk['fileNativeDir'], lrm7cs['create'](v6z1e0, v6z1e0['onMkdirCallBack']))), v6z1e0['window']['focus'] = function () {}, y_qsl['getUrlPath'] = function () {}, v6z1e0['window']['logtime'] = function (iau3) {}, v6z1e0['window']['alertTimeLog'] = function (blcr7m) {}, v6z1e0['window']['resetShareInfo'] = function () {}, v6z1e0['window']['CanvasRenderingContext2D'] = function () {}, v6z1e0['window']['CanvasRenderingContext2D']['prototype'] = v6z1e0['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], v6z1e0['window']['document']['body']['appendChild'] = function () {}, v6z1e0['EnvConfig']['pixelRatioInt'] = 0x0, ab4i3u['getPixelRatio'] = v6z1e0['pixelRatio'], v6z1e0['_preCreateElement'] = slmc_['createElement'], slmc_['createElement'] = v6z1e0['createElement'], ab4i3u['createShaderCondition'] = v6z1e0['createShaderCondition'], qn8gxd['parseXMLFromString'] = v6z1e0['parseXMLFromString'], etv6z['_createInputElement'] = gy_xqs['_createInputElement'], v6z1e0['EnvConfig']['load'] = twzep6['prototype']['load'], twzep6['prototype']['load'] = ui4ba3['prototype']['load'], v6z1e0['isZiYu'] && gd8xqn && wx['onMessage'](function (t2pkwf) {
                t2pkwf['isLoad'] && (twp2fk['ziyuFileData'][t2pkwf['url']] = t2pkwf['data']);
            });
        }, v6z1e0['onMkdirCallBack'] = function (lryc, q_gyls) {
            if (!lryc) twp2fk['filesListObj'] = JSON['parse'](q_gyls['data']);
        }, v6z1e0['pixelRatio'] = function () {
            if (!v6z1e0['EnvConfig']['pixelRatioInt']) try {
                var qxny_g = wx['getSystemInfoSync']();
                return v6z1e0['EnvConfig']['pixelRatioInt'] = qxny_g['pixelRatio'], qxny_g = qxny_g, qxny_g['pixelRatio'];
            } catch (e6twz) {}
            return v6z1e0['EnvConfig']['pixelRatioInt'];
        }, v6z1e0['createElement'] = function (sgx) {
            if (sgx == 'canvas') {
                var dof$;
                return v6z1e0['idx'] == 0x1 ? v6z1e0['isZiYu'] ? (dof$ = sharedCanvas, dof$['style'] = {}) : dof$ = window['canvas'] : dof$ = window['wx']['createCanvas'](), v6z1e0['idx']++, dof$;
            } else {
                if (sgx == 'textarea' || sgx == 'input') return v6z1e0['onCreateInput'](sgx);else {
                    if (sgx == 'div') {
                        var f$k2 = v6z1e0['_preCreateElement'](sgx);
                        return f$k2['contains'] = function ($odn8k) {
                            return null;
                        }, f$k2['removeChild'] = function (gx) {}, f$k2;
                    } else return v6z1e0['_preCreateElement'](sgx);
                }
            }
        }, v6z1e0['onCreateInput'] = function (fo8$) {
            var x_sqyg = v6z1e0['_preCreateElement'](fo8$);
            return x_sqyg['focus'] = gy_xqs['wxinputFocus'], x_sqyg['blur'] = gy_xqs['wxinputblur'], x_sqyg['style'] = {}, x_sqyg['value'] = 0x0, x_sqyg['parentElement'] = {}, x_sqyg['placeholder'] = {}, x_sqyg['type'] = {}, x_sqyg['setColor'] = function (rslcm7) {}, x_sqyg['setType'] = function (aib4u3) {}, x_sqyg['setFontFace'] = function (e60v1) {}, x_sqyg['addEventListener'] = function (o$d2k) {}, x_sqyg['contains'] = function (mrlcs7) {
                return null;
            }, x_sqyg['removeChild'] = function (ndxg8o) {}, x_sqyg;
        }, v6z1e0['createShaderCondition'] = function (iub4a) {
            var y_csr = this,
                dqgx8 = function () {
                var kf$2o = iub4a;
                return y_csr[iub4a['replace']('this.', '')];
            };
            return dqgx8;
        }, v6z1e0['EnvConfig'] = null, v6z1e0['window'] = null, v6z1e0['_preCreateElement'] = null, v6z1e0['_inited'] = ![], v6z1e0['wxRequest'] = null, v6z1e0['systemInfo'] = null, v6z1e0['version'] = '0.0.1', v6z1e0['isZiYu'] = ![], v6z1e0['isPosMsgYu'] = ![], v6z1e0['parseXMLFromString'] = function (bui3a) {
            var xo8$dn, wfo$;
            bui3a = bui3a['replace'](/>\s+</g, '><');
            try {
                xo8$dn = new window['Parser']['DOMParser']()['parseFromString'](bui3a, 'text/xml');
            } catch (epvt6z) {
                throw '需要引入xml解析库文件';
            }
            return xo8$dn;
        }, v6z1e0['idx'] = 0x1, v6z1e0;
    }(),
        b7cr3 = function () {
        function wptz() {}
        lcyr_(wptz, 'laya.wx.mini.MiniImage');
        var _rlsyc = wptz['prototype'];
        return _rlsyc['_loadImage'] = function (f$2k) {
            var _lsrcm = this,
                mcsrl7 = ![];
            f$2k['indexOf']('layaNativeDir/') == -0x1 && (mcsrl7 = !![], f$2k = fkw$2['formatURL'](f$2k));
            if (!twp2fk['getFileInfo'](f$2k)) {
                if (f$2k['indexOf']('http://') != -0x1 || f$2k['indexOf']('https://') != -0x1) twp2fk['downImg'](f$2k, new lrm7cs(wptz, wptz['onDownImgCallBack'], [f$2k, _lsrcm]), f$2k);else wptz['onCreateImage'](f$2k, _lsrcm, !![]);
            } else wptz['onCreateImage'](f$2k, _lsrcm, !mcsrl7);
        }, wptz['onDownImgCallBack'] = function (b34ui7, z2ptwf, jv9h0) {
            if (!jv9h0) wptz['onCreateImage'](b34ui7, z2ptwf);else z2ptwf['onError'](null);
        }, wptz['onCreateImage'] = function (evj60, m7rb34, xqn8g) {
            xqn8g === void 0x0 && (xqn8g = ![]);
            var z06e1;
            if (!xqn8g) {
                var df$8 = twp2fk['getFileInfo'](evj60),
                    k2f$od = df$8['md5'];
                z06e1 = twp2fk['getFileNativePath'](k2f$od);
            } else z06e1 = evj60;
            if (m7rb34['imgCache'] == null) m7rb34['imgCache'] = {};
            var vz01e6;
            function t2pzf() {
                vz01e6['onload'] = null, vz01e6['onerror'] = null, delete m7rb34['imgCache'][evj60];
            }
            ;
            var wp2tz6 = function () {
                t2pzf(), m7rb34['onLoaded'](vz01e6);
            },
                aib3u4 = function () {
                t2pzf(), m7rb34['event']('error', 'Load image failed');
            };
            m7rb34['_type'] == 'nativeimage' ? (vz01e6 = new slmc_['window']['Image'](), vz01e6['crossOrigin'] = '', vz01e6['onload'] = wp2tz6, vz01e6['onerror'] = aib3u4, vz01e6['src'] = z06e1, m7rb34['imgCache'][evj60] = vz01e6) : new slcm_r['create'](z06e1, {
                'onload': wp2tz6,
                'onerror': aib3u4,
                'onCreate': function (t61ez) {
                    vz01e6 = t61ez, m7rb34['imgCache'][evj60] = t61ez;
                }
            });
        }, wptz;
    }(),
        gy_xqs = function () {
        function twfz2() {}
        return lcyr_(twfz2, 'laya.wx.mini.MiniInput'), twfz2['_createInputElement'] = function () {
            etv6z['_initInput'](etv6z['area'] = slmc_['createElement']('textarea')), etv6z['_initInput'](etv6z['input'] = slmc_['createElement']('input')), etv6z['inputContainer'] = slmc_['createElement']('div'), etv6z['inputContainer']['style']['position'] = 'absolute', etv6z['inputContainer']['style']['zIndex'] = 0x186a0, slmc_['container']['appendChild'](etv6z['inputContainer']), etv6z['inputContainer']['setPos'] = function (w2pt6, q_gsxy) {
                etv6z['inputContainer']['style']['left'] = w2pt6 + 'px', etv6z['inputContainer']['style']['top'] = q_gsxy + 'px';
            }, y_qsl['stage']['on']('resize', null, twfz2['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (cr7sl) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), mc7sl['_soundClass'] = dn8o$k, mc7sl['_musicClass'] = dn8o$k, window['_videoClass'] = h5j9;
        }, twfz2['_onStageResize'] = function () {
            var yrl_ = y_qsl['stage']['_canvasTransform']['identity']();
            yrl_['scale'](slmc_['width'] / kndo8['canvas']['width'] / ab4i3u['getPixelRatio'](), slmc_['height'] / kndo8['canvas']['height'] / ab4i3u['getPixelRatio']());
        }, twfz2['wxinputFocus'] = function (_ygxnq) {
            var i473bu = etv6z['inputElement']['target'];
            if (i473bu && !i473bu['editable']) return;
            u437i['window']['wx']['offKeyboardConfirm'](), u437i['window']['wx']['offKeyboardInput'](), u437i['window']['wx']['showKeyboard']({
                'defaultValue': i473bu['text'],
                'maxLength': i473bu['maxChars'],
                'multiple': i473bu['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (nxy8qg) {},
                'fail': function (lcmb7r) {}
            }), u437i['window']['wx']['onKeyboardConfirm'](function (on8$xd) {
                var xsgq_y = on8$xd ? on8$xd['value'] : '';
                i473bu['text'] = xsgq_y, i473bu['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), u437i['window']['wx']['onKeyboardInput'](function (slmc7r) {
                var wfp2tz = slmc7r ? slmc7r['value'] : '';
                if (!i473bu['multiline']) {
                    if (wfp2tz['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                i473bu['text'] = wfp2tz, i473bu['event']('input');
            });
        }, twfz2['inputEnter'] = function () {
            etv6z['inputElement']['target']['focus'] = ![];
        }, twfz2['wxinputblur'] = function () {
            twfz2['hideKeyboard']();
        }, twfz2['hideKeyboard'] = function () {
            u437i['window']['wx']['offKeyboardConfirm'](), u437i['window']['wx']['offKeyboardInput'](), u437i['window']['wx']['hideKeyboard']({
                'success': function (l_gsqy) {
                    console['log']('隐藏键盘');
                },
                'fail': function (lqsc_) {
                    console['log']('隐藏键盘出错:' + (lqsc_ ? lqsc_['errMsg'] : ''));
                }
            });
        }, twfz2;
    }(),
        ui4ba3 = function () {
        function fpkt() {}
        lcyr_(fpkt, 'laya.wx.mini.MiniLoader');
        var on$8d = fpkt['prototype'];
        return on$8d['load'] = function (kdo8$, vej6, lcsry_, ok$d2, fdo$) {
            lcsry_ === void 0x0 && (lcsry_ = !![]), fdo$ === void 0x0 && (fdo$ = ![]);
            var yqlsg = this;
            yqlsg['_url'] = kdo8$;
            if (kdo8$['indexOf']('data:image') === 0x0) yqlsg['_type'] = vej6 = 'image';else yqlsg['_type'] = vej6 || (vej6 = yqlsg['getTypeFromUrl'](kdo8$));
            yqlsg['_cache'] = lcsry_, yqlsg['_data'] = null;
            var v10je9 = 'ascii';
            if (kdo8$['indexOf']('.fnt') != -0x1) v10je9 = 'utf8';else vej6 == 'arraybuffer' && (v10je9 = '');
            ;
            var ly_rsc = qn8gxd['getFileExtension'](kdo8$);
            if (fpkt['_fileTypeArr']['indexOf'](ly_rsc) != -0x1) u437i['EnvConfig']['load']['call'](this, kdo8$, vej6, lcsry_, ok$d2, fdo$);else {
                if (!twp2fk['getFileInfo'](kdo8$)) {
                    if (kdo8$['indexOf']('layaNativeDir/') != -0x1) {
                        if (u437i['isZiYu']) {
                            var lmr_c = twp2fk['ziyuFileData'][kdo8$];
                            yqlsg['onLoaded'](lmr_c);
                            return;
                        } else {
                            cosnole['log']('read read'), twp2fk['read'](kdo8$, v10je9, new lrm7cs(fpkt, fpkt['onReadNativeCallBack'], [v10je9, kdo8$, vej6, lcsry_, ok$d2, fdo$, yqlsg]));
                            return;
                        }
                    }
                    if (fkw$2['rootPath'] == '') var cmbr37 = kdo8$;else cmbr37 = kdo8$['split'](fkw$2['rootPath'])[0x0];
                    kdo8$['indexOf']('http://') != -0x1 || kdo8$['indexOf']('https://') != -0x1 ? u437i['EnvConfig']['load']['call'](yqlsg, kdo8$, vej6, lcsry_, ok$d2, fdo$) : twp2fk['readFile'](cmbr37, v10je9, new lrm7cs(fpkt, fpkt['onReadNativeCallBack'], [v10je9, kdo8$, vej6, lcsry_, ok$d2, fdo$, yqlsg]), kdo8$);
                } else u437i['EnvConfig']['load']['call'](this, kdo8$, vej6, lcsry_, ok$d2, fdo$);
            }
        }, on$8d['resMgrLoad'] = function (b4i7m3, clsq_, cm_, q8xdng, w2fpzt, v10j6e, p2tkw) {
            cm_ === void 0x0 && (cm_ = 0x0), q8xdng === void 0x0 && (q8xdng = ![]), w2fpzt === void 0x0 && (w2fpzt = ![]), v10j6e === void 0x0 && (v10j6e = 0x0), p2tkw === void 0x0 && (p2tkw = 0x3), b4i7m3['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', b4i7m3), u437i['EnvConfig']['resMgrLoad'](b4i7m3, (zp6vte, h190jv, wz62) => {
                fpkt['prototype']['resMgrLoadCallBack'](zp6vte, h190jv, wz62, clsq_);
            }, cm_, q8xdng, w2fpzt, v10j6e, p2tkw);
        }, on$8d['resMgrLoadCallBack'] = function (j06v, t6z1ev, evt6p, mblc) {
            console['log']('buff:::', j06v, evt6p, twp2fk['fileNativeDir'] + '///' + twp2fk['fileListName']), mblc(j06v, t6z1ev, evt6p);
        }, on$8d['clearRes'] = function (lc_sq, cbmlr) {
            cbmlr === void 0x0 && (cbmlr = ![]);
            var tpzew = this;
            tpzew['clearRes'](lc_sq, cbmlr);
            var ow$f2k = twp2fk['getFileInfo'](lc_sq);
            if (ow$f2k && (lc_sq['indexOf']('http://') != -0x1 || lc_sq['indexOf']('https://') != -0x1)) {
                var rml7s = ow$f2k['md5'],
                    _mcrl = twp2fk['getFileNativePath'](rml7s);
                twp2fk['remove'](_mcrl);
            }
        }, fpkt['onReadNativeCallBack'] = function (_lcsry, brm7, lrs, rly_cs, kf2tw, blr, r7bm, b7m, j1v9e) {
            rly_cs === void 0x0 && (rly_cs = !![]), blr === void 0x0 && (blr = ![]), b7m === void 0x0 && (b7m = 0x0);
            if (!b7m) {
                var h0195j;
                if (lrs == 'json' || lrs == 'atlas') h0195j = u437i['getJson'](j1v9e['data']);else lrs == 'xml' ? h0195j = qn8gxd['parseXMLFromString'](j1v9e['data']) : h0195j = j1v9e['data'];
                r7bm['onLoaded'](h0195j), !u437i['isZiYu'] && u437i['isPosMsgYu'] && lrs != 'arraybuffer' && wx['postMessage']({
                    'url': brm7,
                    'data': h0195j,
                    'isLoad': !![]
                });
            } else b7m == 0x1 && u437i['EnvConfig']['load']['call'](r7bm, brm7, lrs, rly_cs, kf2tw, blr);
        }, o8$nd(fpkt, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), fpkt;
    }(),
        twp2fk = function (sc7mrl) {
        function lycsr_() {
            lycsr_['__super']['call'](this);
            ;
        }
        return lcyr_(lycsr_, 'laya.wx.mini.MiniFileMgr', sc7mrl), lycsr_['isLoadFile'] = function (ev6z0) {
            return lycsr_['_fileTypeArr']['indexOf'](ev6z0) != -0x1 ? !![] : ![];
        }, lycsr_['getFileInfo'] = function (b3r7) {
            var ynx_q = b3r7['split']('?')[0x0],
                dfk8o = lycsr_['filesListObj'][ynx_q];
            if (dfk8o == null) return null;else return dfk8o;
            return null;
        }, lycsr_['onFileUpdate'] = function (b4m73r, e06v1) {
            var wzept6 = b4m73r['split']('/'),
                crml7b = wzept6[wzept6['length'] - 0x1],
                pkwf2t = lycsr_['getFileInfo'](e06v1);
            if (pkwf2t == null) lycsr_['onSaveFile'](e06v1, crml7b);else {
                if (pkwf2t['readyUrl'] != e06v1) lycsr_['remove'](crml7b, e06v1);
            }
        }, lycsr_['exits'] = function (qgxn_, mcr_l) {
            var fkp2 = lycsr_['getFileNativePath'](qgxn_);
            lycsr_['fs']['getFileInfo']({
                'filePath': fkp2,
                'success': function ($kpf2w) {
                    mcr_l != null && mcr_l['runWith']([0x0, $kpf2w]);
                },
                'fail': function (qys_lg) {
                    mcr_l != null && mcr_l['runWith']([0x1, qys_lg]);
                }
            });
        }, lycsr_['read'] = function (hv, j1ev, msl7c, yc_sq) {
            j1ev === void 0x0 && (j1ev = 'ascill'), yc_sq === void 0x0 && (yc_sq = '');
            var $2wfko;
            yc_sq != '' ? $2wfko = lycsr_['getFileNativePath'](hv) : $2wfko = hv, lycsr_['fs']['readFile']({
                'filePath': $2wfko,
                'encoding': j1ev,
                'success': function (k$f8od) {
                    msl7c != null && msl7c['runWith']([0x0, k$f8od]);
                },
                'fail': function (dnxg8) {
                    if (dnxg8 && yc_sq != '') lycsr_['down'](yc_sq, j1ev, msl7c, yc_sq);else msl7c != null && msl7c['runWith']([0x1]);
                }
            });
        }, lycsr_['readNativeFile'] = function (bi7u3, nyqxg8) {
            lycsr_['fs']['readFile']({
                'filePath': bi7u3,
                'encoding': '',
                'success': function (z2ftw) {
                    nyqxg8 != null && nyqxg8['runWith']([0x0]);
                },
                'fail': function (xqng8d) {
                    nyqxg8 != null && nyqxg8['runWith']([0x1]);
                }
            });
        }, lycsr_['down'] = function (tpwfz, h19j50, xgqd8n, zpe) {
            h19j50 === void 0x0 && (h19j50 = 'ascill'), zpe === void 0x0 && (zpe = '');
            var x8y = lycsr_['getFileNativePath'](zpe),
                d$fo8 = lycsr_['wxdown']({
                'url': tpwfz,
                'filePath': x8y,
                'success': function (z2tp6) {
                    if (z2tp6['statusCode'] === 0xc8) lycsr_['readFile'](z2tp6['filePath'], h19j50, xgqd8n, zpe);
                },
                'fail': function (n8qdg) {
                    xgqd8n != null && xgqd8n['runWith']([0x1, n8qdg]);
                }
            });
            d$fo8['onProgressUpdate'](function (r7cb) {
                xgqd8n != null && xgqd8n['runWith']([0x2, r7cb['progress']]);
            });
        }, lycsr_['readFile'] = function (evzt1, lrmc7b, sgx_y, k2fptw) {
            lrmc7b === void 0x0 && (lrmc7b = 'ascill'), k2fptw === void 0x0 && (k2fptw = ''), lycsr_['fs']['readFile']({
                'filePath': evzt1,
                'encoding': lrmc7b,
                'success': function (kod$n8) {
                    if (evzt1['indexOf']('http://') != -0x1 || evzt1['indexOf']('https://') != -0x1) lycsr_['onFileUpdate'](evzt1, k2fptw);
                    sgx_y != null && sgx_y['runWith']([0x0, kod$n8]);
                },
                'fail': function (d8$nko) {
                    if (d8$nko) sgx_y != null && sgx_y['runWith']([0x1, d8$nko]);
                }
            });
        }, lycsr_['downImg'] = function (odkn, vje0, nx8gdq) {
            nx8gdq === void 0x0 && (nx8gdq = '');
            var $dfo8k = lycsr_['wxdown']({
                'url': odkn,
                'success': function (j6e1v0) {
                    j6e1v0['statusCode'] === 0xc8 && lycsr_['copyFile'](j6e1v0['tempFilePath'], nx8gdq, vje0);
                },
                'fail': function (nx8d$o) {
                    vje0 != null && vje0['runWith']([0x1, nx8d$o]);
                }
            });
        }, lycsr_['copyFile'] = function (mb7r, ub43i7, qg8dxn) {
            var fp$w2k = mb7r['split']('/'),
                fztp2 = fp$w2k[fp$w2k['length'] - 0x1],
                dk8$f = ub43i7['split']('?')[0x0],
                ze061 = lycsr_['getFileInfo'](ub43i7),
                m7cb3 = lycsr_['getFileNativePath'](fztp2);
            lycsr_['fs']['copyFile']({
                'srcPath': mb7r,
                'destPath': m7cb3,
                'success': function (vz0e) {
                    if (!ze061) lycsr_['onSaveFile'](ub43i7, fztp2), qg8dxn != null && qg8dxn['runWith']([0x0]);else {
                        if (ze061['readyUrl'] != ub43i7) lycsr_['remove'](fztp2, ub43i7, qg8dxn);
                    }
                },
                'fail': function (od2k$) {
                    qg8dxn != null && qg8dxn['runWith']([0x1, od2k$]);
                }
            });
        }, lycsr_['getFileNativePath'] = function (qd8ng) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + qd8ng;
        }, lycsr_['remove'] = function (pzw6t2, xs_qg, kfwp2t) {
            xs_qg === void 0x0 && (xs_qg = '');
            var j9h10v = lycsr_['getFileInfo'](xs_qg),
                vtez1 = lycsr_['getFileNativePath'](j9h10v['md5']);
            y_qsl['loader']['clearRes'](j9h10v['readyUrl']), lycsr_['fs']['unlink']({
                'filePath': vtez1,
                'success': function (scrml7) {
                    if (xs_qg != '') lycsr_['onSaveFile'](xs_qg, pzw6t2);
                    kfwp2t != null && kfwp2t['runWith']([0x0]);
                },
                'fail': function (ft2pkw) {}
            });
        }, lycsr_['onSaveFile'] = function (pet6w, q_slgy) {
            var mlcrb = pet6w['split']('?')[0x0];
            lycsr_['filesListObj'][mlcrb] = {
                'md5': q_slgy,
                'readyUrl': pet6w
            }, lycsr_['fs']['writeFile']({
                'filePath': lycsr_['fileNativeDir'] + '/' + lycsr_['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](lycsr_['filesListObj']),
                'success': function (nqyxg_) {
                    console['log']('写入测试测试成功：', nqyxg_);
                },
                'fail': function (j60e1v) {
                    console['log']('写入测试测试失败：', j60e1v);
                }
            });
        }, lycsr_['existDir'] = function (odg8xn, k2w$f) {
            lycsr_['fs']['mkdir']({
                'dirPath': odg8xn,
                'success': function (p62wzt) {
                    k2w$f != null && k2w$f['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (zftw2) {
                    if (zftw2['errMsg']['indexOf']('file already exists') != -0x1) lycsr_['readSync'](lycsr_['fileListName'], 'utf8', k2w$f);else k2w$f != null && k2w$f['runWith']([0x1, zftw2]);
                }
            });
        }, lycsr_['readSync'] = function (df8ko$, $8xd, b4ua3i, v10h) {
            $8xd === void 0x0 && ($8xd = 'ascill'), v10h === void 0x0 && (v10h = '');
            var qd8n = lycsr_['getFileNativePath'](df8ko$),
                e6z1v0;
            try {
                e6z1v0 = lycsr_['fs']['readFileSync'](qd8n), b4ua3i != null && b4ua3i['runWith']([0x0, { 'data': e6z1v0 }]);
            } catch (o8$xdn) {
                b4ua3i != null && b4ua3i['runWith']([0x1]);
            }
        }, lycsr_['readCache'] = function () {}, lycsr_['writeCache'] = function (vtp6) {
            var w$k2of = readyUrl['split']('?')[0x0];
            lycsr_['filesListObj'][w$k2of] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, lycsr_['fs']['writeFile']({
                'filePath': lycsr_['fileNativeDir'] + '/' + lycsr_['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](lycsr_['filesListObj']),
                'success': function (kpwf2$) {},
                'fail': function (t6ep) {}
            });
        }, lycsr_['setNativeFileDir'] = function (uaib43) {
            lycsr_['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + uaib43;
        }, lycsr_['filesListObj'] = {}, lycsr_['fileNativeDir'] = null, lycsr_['fileListName'] = 'layaairfiles.txt', lycsr_['ziyuFileData'] = {}, o8$nd(lycsr_, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), lycsr_;
    }(g8nodx),
        dn8o$k = function (xgndq8) {
        function dng8xo() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], dng8xo['__super']['call'](this), this['_sound'] = dng8xo['_createSound'](), this['_chanell'] = new cs7rl(this['_sound']);
        }
        lcyr_(dng8xo, 'laya.wx.mini.MiniSound', xgndq8);
        var qgxy_s = dng8xo['prototype'];
        return qgxy_s['load'] = function (gny8q) {
            var w6ztp2 = this;
            gny8q = fkw$2['formatURL'](gny8q), this['url'] = gny8q;
            if (dng8xo['_audioCache'][gny8q]) {
                this['event']('complete');
                return;
            }
            function v01j9() {
                if (dng8xo['_null'] != undefined) w6ztp2['_sound']['onCanplay'](dng8xo['_null']), w6ztp2['_sound']['onError'](dng8xo['_null']);else try {
                    w6ztp2['_sound']['onCanplay'](null), w6ztp2['_sound']['onError'](null), dng8xo['_null'] = null;
                } catch (xon8d) {
                    console['warn']('[wxmini] _clearSound:' + xon8d), w6ztp2['_sound']['onCanplay'](lmrsc_), w6ztp2['_sound']['onError'](lmrsc_), dng8xo['_null'] = lmrsc_;
                }
            }
            function n_ygx() {
                g_syxq['loaded'] = !![], g_syxq['event']('complete'), dng8xo['_audioCache'][g_syxq['url']] = g_syxq;
            }
            function csrml_(tv6e1z) {
                console['error']('errCode=' + tv6e1z['errCode'] + '  errMsg=' + tv6e1z['errMsg']), g_syxq['event']('error');
            }
            function lmrsc_() {}
            this['_sound']['onCanplay'](n_ygx), this['_sound']['onError'](csrml_), this['_sound']['src'] = gny8q;
            var g_syxq = this;
        }, qgxy_s['play'] = function (_cql, ok$fw2) {
            _cql === void 0x0 && (_cql = 0x0), ok$fw2 === void 0x0 && (ok$fw2 = 0x0);
            var o8nxgd, g_qx;
            if (this['url'] == mc7sl['_tMusic']) {
                if (!dng8xo['_musicAudio']) dng8xo['_musicAudio'] = this['_sound'];
                o8nxgd = dng8xo['_musicAudio'], g_qx = this['_chanell'];
            } else o8nxgd = this['_sound'], g_qx = this['_chanell'];
            return o8nxgd['src'] = this['url'], o8nxgd['startTime'] = 0x0, g_qx['isStopped'] && (g_qx['url'] = this['url'], g_qx['loops'] = ok$fw2, g_qx['startTime'] = _cql, g_qx['play'](), mc7sl['addChannel'](g_qx)), g_qx;
        }, qgxy_s['dispose'] = function () {
            var x8ondg = dng8xo['_audioCache'][this['url']];
            x8ondg && (x8ondg['src'] = '', delete dng8xo['_audioCache'][this['url']]);
        }, o$fd2k(0x0, qgxy_s, 'duration', function () {
            return this['_sound']['duration'];
        }), dng8xo['_createSound'] = function () {
            dng8xo['_id']++;
            var t2zw = u437i['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return t2zw;
        }, dng8xo['_musicAudio'] = null, dng8xo['_id'] = 0x0, dng8xo['_audioCache'] = {}, dng8xo['_null'] = undefined, dng8xo;
    }(g8nodx),
        cs7rl = function (fwt2pz) {
        function zvt1(e16zv0) {
            this['_audio'] = null, this['_onEnd'] = null, zvt1['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = e16zv0, this['_onEnd'] = qn8gxd['bind'](this['__onEnd'], this), e16zv0['onEnded'](this['_onEnd']);
        }
        lcyr_(zvt1, 'laya.wx.mini.MiniSoundChannel', fwt2pz);
        var wf$pk2 = zvt1['prototype'];
        return wf$pk2['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (y_qsl['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, wf$pk2['__onNull'] = function () {}, wf$pk2['play'] = function () {
            this['isStopped'] = ![], mc7sl['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, wf$pk2['stop'] = function () {
            this['isStopped'] = !![], mc7sl['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, wf$pk2['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, wf$pk2['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], mc7sl['addChannel'](this), this['_audio']['play']();
        }, o$fd2k(0x0, wf$pk2, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), o$fd2k(0x0, wf$pk2, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), o$fd2k(0x0, wf$pk2, 'volume', function () {
            return 0x1;
        }, function (y_xqgn) {}), zvt1['_null'] = undefined, zvt1;
    }(scylq),
        h5j9 = function () {
        function ynxgq() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = u437i['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        lcyr_(ynxgq, 'laya.wx.mini.MiniVideo');
        var bm43i = ynxgq['prototype'];
        return bm43i['on'] = function (tez1, c7lbrm, lr) {
            if (tez1 == 'loadedmetadata') this['onPlayFunc'] = lr['bind'](c7lbrm), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else tez1 == 'ended' && (this['onEndedFunC'] = lr['bind'](c7lbrm), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, bm43i['onTimeUpdateFunc'] = function (abi3) {
            this['position'] = abi3['position'], this['_duration'] = abi3['duration'];
        }, bm43i['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, bm43i['onended'] = function (q8xgy, yc_ls) {
            this['onEndedFunC'] = yc_ls['bind'](q8xgy), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, bm43i['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, bm43i['off'] = function (j0e9v1, j01vh9, r7slcm) {
            if (j0e9v1 == 'loadedmetadata') this['onPlayFunc'] = r7slcm['bind'](j01vh9), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else j0e9v1 == 'ended' && (this['onEndedFunC'] = r7slcm['bind'](j01vh9), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, bm43i['load'] = function (syq_cl) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = syq_cl;
        }, bm43i['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, bm43i['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, bm43i['size'] = function (x$8dn, lsgq) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = x$8dn, this['videoElement']['height'] = lsgq;
        }, bm43i['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, bm43i['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, o$fd2k(0x0, bm43i, 'duration', function () {
            return this['_duration'];
        }), o$fd2k(0x0, bm43i, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (b73i4) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = b73i4;
        }), o$fd2k(0x0, bm43i, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), o$fd2k(0x0, bm43i, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), o$fd2k(0x0, bm43i, 'ended', function () {
            return this['videoend'];
        }), o$fd2k(0x0, bm43i, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (wpf2k) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = wpf2k;
        }), o$fd2k(0x0, bm43i, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (xdq8ng) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = xdq8ng;
        }), o$fd2k(0x0, bm43i, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (sgyq) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = sgyq;
        }), o$fd2k(0x0, bm43i, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), o$fd2k(0x0, bm43i, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (e106) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = e106;
        }), o$fd2k(0x0, bm43i, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (fok$w) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = fok$w;
        }), o$fd2k(0x0, bm43i, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), o$fd2k(0x0, bm43i, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (k2w$) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = k2w$;
        }), o$fd2k(0x0, bm43i, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (owfk2) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = owfk2;
        }), o$fd2k(0x0, bm43i, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (xdgn) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = xdgn;
        }), ynxgq;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var k$fod2 in Laya) {
        var tfwzp = Laya[k$fod2];
        tfwzp && tfwzp['__isclass'] && (exports[k$fod2] = tfwzp);
    }
});