var f = wx.$B;
(function (window, document, jmqoa) {
    var qzleo = jmqoa['un'],
        jaomqu = jmqoa['uns'],
        ym6a9u = jmqoa['static'],
        mauojy = jmqoa['class'],
        p8_xi = jmqoa['getset'],
        r8$wi = jmqoa['__newvec'],
        am6ujy = laya['utils']['Browser'],
        pxi_$8 = laya['events']['Event'],
        tf7s = laya['events']['EventDispatcher'],
        kds7f = laya['resource']['HTMLImage'],
        eqo1 = laya['utils']['Handler'],
        bkf2gd = laya['display']['Input'],
        xi8wp$ = laya['net']['Loader'],
        oa1uq = laya['maths']['Matrix'],
        v329h0 = laya['renders']['Render'],
        $_nxpi = laya['utils']['RunDriver'],
        z1lojq = laya['media']['Sound'],
        j1lzo = laya['media']['SoundChannel'],
        fbskd4 = laya['media']['SoundManager'],
        bdvgf2 = laya['display']['Stage'],
        ksdb4 = laya['net']['URL'],
        skbfd = laya['utils']['Utils'],
        krs7t4 = function () {
        function h6a() {}
        return mauojy(h6a, 'laya.wx.mini.MiniAdpter'), h6a['getJson'] = function ($i8w) {
            return JSON['parse']($i8w);
        }, h6a['init'] = function (myj, dg2k) {
            myj === void 0x0 && (myj = ![]), dg2k === void 0x0 && (dg2k = ![]);
            if (h6a['_inited']) return;
            h6a['window'] = window;
            if (h6a['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            h6a['_inited'] = !![], h6a['isZiYu'] = dg2k, h6a['isPosMsgYu'] = myj, h6a['EnvConfig'] = {}, !h6a['isZiYu'] && (rxwi['setNativeFileDir']('/layaairGame'), rxwi['existDir'](rxwi['fileNativeDir'], eqo1['create'](h6a, h6a['onMkdirCallBack']))), h6a['window']['focus'] = function () {}, jmqoa['getUrlPath'] = function () {}, h6a['window']['logtime'] = function (s47tk) {}, h6a['window']['alertTimeLog'] = function (zljoq1) {}, h6a['window']['resetShareInfo'] = function () {}, h6a['window']['CanvasRenderingContext2D'] = function () {}, h6a['window']['CanvasRenderingContext2D']['prototype'] = h6a['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], h6a['window']['document']['body']['appendChild'] = function () {}, h6a['EnvConfig']['pixelRatioInt'] = 0x0, $_nxpi['getPixelRatio'] = h6a['pixelRatio'], h6a['_preCreateElement'] = am6ujy['createElement'], am6ujy['createElement'] = h6a['createElement'], $_nxpi['createShaderCondition'] = h6a['createShaderCondition'], skbfd['parseXMLFromString'] = h6a['parseXMLFromString'], bkf2gd['_createInputElement'] = qe1lzo['_createInputElement'], h6a['EnvConfig']['load'] = xi8wp$['prototype']['load'], xi8wp$['prototype']['load'] = yamuoj['prototype']['load'], h6a['isZiYu'] && myj && wx['onMessage'](function (ojq1u) {
                ojq1u['isLoad'] && (rxwi['ziyuFileData'][ojq1u['url']] = ojq1u['data']);
            });
        }, h6a['onMkdirCallBack'] = function (a9y, skb) {
            if (!a9y) rxwi['filesListObj'] = JSON['parse'](skb['data']);
        }, h6a['pixelRatio'] = function () {
            if (!h6a['EnvConfig']['pixelRatioInt']) try {
                var t78rsw = wx['getSystemInfoSync']();
                return h6a['EnvConfig']['pixelRatioInt'] = t78rsw['pixelRatio'], t78rsw = t78rsw, t78rsw['pixelRatio'];
            } catch (_8pix$) {}
            return h6a['EnvConfig']['pixelRatioInt'];
        }, h6a['createElement'] = function (ah6) {
            if (ah6 == 'canvas') {
                var h6y09;
                return h6a['idx'] == 0x1 ? h6a['isZiYu'] ? (h6y09 = sharedCanvas, h6y09['style'] = {}) : h6y09 = window['canvas'] : h6y09 = window['wx']['createCanvas'](), h6a['idx']++, h6y09;
            } else {
                if (ah6 == 'textarea' || ah6 == 'input') return h6a['onCreateInput'](ah6);else {
                    if (ah6 == 'div') {
                        var a9y6u = h6a['_preCreateElement'](ah6);
                        return a9y6u['contains'] = function (m69auy) {
                            return null;
                        }, a9y6u['removeChild'] = function (uamy96) {}, a9y6u;
                    } else return h6a['_preCreateElement'](ah6);
                }
            }
        }, h6a['onCreateInput'] = function (jlo1u) {
            var z1e5lq = h6a['_preCreateElement'](jlo1u);
            return z1e5lq['focus'] = qe1lzo['wxinputFocus'], z1e5lq['blur'] = qe1lzo['wxinputblur'], z1e5lq['style'] = {}, z1e5lq['value'] = 0x0, z1e5lq['parentElement'] = {}, z1e5lq['placeholder'] = {}, z1e5lq['type'] = {}, z1e5lq['setColor'] = function (hg3) {}, z1e5lq['setType'] = function (gv2h0) {}, z1e5lq['setFontFace'] = function (stk4f7) {}, z1e5lq['addEventListener'] = function (f74tsk) {}, z1e5lq['contains'] = function (eq15zl) {
                return null;
            }, z1e5lq['removeChild'] = function (v0) {}, z1e5lq;
        }, h6a['createShaderCondition'] = function ($8tx) {
            var d4kfgb = this,
                qujao = function () {
                var b4skfd = $8tx;
                return d4kfgb[$8tx['replace']('this.', '')];
            };
            return qujao;
        }, h6a['EnvConfig'] = null, h6a['window'] = null, h6a['_preCreateElement'] = null, h6a['_inited'] = ![], h6a['wxRequest'] = null, h6a['systemInfo'] = null, h6a['version'] = '0.0.1', h6a['isZiYu'] = ![], h6a['isPosMsgYu'] = ![], h6a['parseXMLFromString'] = function (l1qze5) {
            var dv2f, kfsd47;
            l1qze5 = l1qze5['replace'](/>\s+</g, '><');
            try {
                dv2f = new window['Parser']['DOMParser']()['parseFromString'](l1qze5, 'text/xml');
            } catch (g02h) {
                throw '需要引入xml解析库文件';
            }
            return dv2f;
        }, h6a['idx'] = 0x1, h6a;
    }(),
        a69hm = function () {
        function $8px_() {}
        mauojy($8px_, 'laya.wx.mini.MiniImage');
        var rt$7w = $8px_['prototype'];
        return rt$7w['_loadImage'] = function (pi8x$w) {
            var r8st = this,
                $_inx = ![];
            pi8x$w['indexOf']('layaNativeDir/') == -0x1 && ($_inx = !![], pi8x$w = ksdb4['formatURL'](pi8x$w));
            if (!rxwi['getFileInfo'](pi8x$w)) {
                if (pi8x$w['indexOf']('http://') != -0x1 || pi8x$w['indexOf']('https://') != -0x1) rxwi['downImg'](pi8x$w, new eqo1($8px_, $8px_['onDownImgCallBack'], [pi8x$w, r8st]), pi8x$w);else $8px_['onCreateImage'](pi8x$w, r8st, !![]);
            } else $8px_['onCreateImage'](pi8x$w, r8st, !$_inx);
        }, $8px_['onDownImgCallBack'] = function (jlzqo, f4dsb, s4r7k) {
            if (!s4r7k) $8px_['onCreateImage'](jlzqo, f4dsb);else f4dsb['onError'](null);
        }, $8px_['onCreateImage'] = function (quo1j, ip$8w, iw$x8p) {
            iw$x8p === void 0x0 && (iw$x8p = ![]);
            var oqjz1l;
            if (!iw$x8p) {
                var d7sf = rxwi['getFileInfo'](quo1j),
                    rk7 = d7sf['md5'];
                oqjz1l = rxwi['getFileNativePath'](rk7);
            } else oqjz1l = quo1j;
            if (ip$8w['imgCache'] == null) ip$8w['imgCache'] = {};
            var i8$xp_;
            function g3vd() {
                i8$xp_['onload'] = null, i8$xp_['onerror'] = null, delete ip$8w['imgCache'][quo1j];
            }
            ;
            var ftks7 = function () {
                g3vd(), ip$8w['onLoaded'](i8$xp_);
            },
                jq1luo = function () {
                g3vd(), ip$8w['event']('error', 'Load image failed');
            };
            ip$8w['_type'] == 'nativeimage' ? (i8$xp_ = new am6ujy['window']['Image'](), i8$xp_['crossOrigin'] = '', i8$xp_['onload'] = ftks7, i8$xp_['onerror'] = jq1luo, i8$xp_['src'] = oqjz1l, ip$8w['imgCache'][quo1j] = i8$xp_) : new kds7f['create'](oqjz1l, {
                'onload': ftks7,
                'onerror': jq1luo,
                'onCreate': function (x$8wr) {
                    i8$xp_ = x$8wr, ip$8w['imgCache'][quo1j] = x$8wr;
                }
            });
        }, $8px_;
    }(),
        qe1lzo = function () {
        function g302() {}
        return mauojy(g302, 'laya.wx.mini.MiniInput'), g302['_createInputElement'] = function () {
            bkf2gd['_initInput'](bkf2gd['area'] = am6ujy['createElement']('textarea')), bkf2gd['_initInput'](bkf2gd['input'] = am6ujy['createElement']('input')), bkf2gd['inputContainer'] = am6ujy['createElement']('div'), bkf2gd['inputContainer']['style']['position'] = 'absolute', bkf2gd['inputContainer']['style']['zIndex'] = 0x186a0, am6ujy['container']['appendChild'](bkf2gd['inputContainer']), bkf2gd['inputContainer']['setPos'] = function (uo1aq, gv3d2b) {
                bkf2gd['inputContainer']['style']['left'] = uo1aq + 'px', bkf2gd['inputContainer']['style']['top'] = gv3d2b + 'px';
            }, jmqoa['stage']['on']('resize', null, g302['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (s8r) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), fbskd4['_soundClass'] = xtw$r8, fbskd4['_musicClass'] = xtw$r8, window['_videoClass'] = wtr87;
        }, g302['_onStageResize'] = function () {
            var h320v9 = jmqoa['stage']['_canvasTransform']['identity']();
            h320v9['scale'](am6ujy['width'] / v329h0['canvas']['width'] / $_nxpi['getPixelRatio'](), am6ujy['height'] / v329h0['canvas']['height'] / $_nxpi['getPixelRatio']());
        }, g302['wxinputFocus'] = function (jymoua) {
            var dfksb4 = bkf2gd['inputElement']['target'];
            if (dfksb4 && !dfksb4['editable']) return;
            krs7t4['window']['wx']['offKeyboardConfirm'](), krs7t4['window']['wx']['offKeyboardInput'](), krs7t4['window']['wx']['showKeyboard']({
                'defaultValue': dfksb4['text'],
                'maxLength': dfksb4['maxChars'],
                'multiple': dfksb4['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (ayhm) {},
                'fail': function (v039h) {}
            }), krs7t4['window']['wx']['onKeyboardConfirm'](function (jauomy) {
                var dvg3b = jauomy ? jauomy['value'] : '';
                dfksb4['text'] = dvg3b, dfksb4['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), krs7t4['window']['wx']['onKeyboardInput'](function (b4sd) {
                var ayu6m = b4sd ? b4sd['value'] : '';
                if (!dfksb4['multiline']) {
                    if (ayu6m['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                dfksb4['text'] = ayu6m, dfksb4['event']('input');
            });
        }, g302['inputEnter'] = function () {
            bkf2gd['inputElement']['target']['focus'] = ![];
        }, g302['wxinputblur'] = function () {
            g302['hideKeyboard']();
        }, g302['hideKeyboard'] = function () {
            krs7t4['window']['wx']['offKeyboardConfirm'](), krs7t4['window']['wx']['offKeyboardInput'](), krs7t4['window']['wx']['hideKeyboard']({
                'success': function (i$pxw8) {
                    console['log']('隐藏键盘');
                },
                'fail': function (zq1ole) {
                    console['log']('隐藏键盘出错:' + (zq1ole ? zq1ole['errMsg'] : ''));
                }
            });
        }, g302;
    }(),
        yamuoj = function () {
        function t78rs() {}
        mauojy(t78rs, 'laya.wx.mini.MiniLoader');
        var $8xpiw = t78rs['prototype'];
        return $8xpiw['load'] = function (lj, ym069, umoay, xp$wi8, ha6y) {
            umoay === void 0x0 && (umoay = !![]), ha6y === void 0x0 && (ha6y = ![]);
            var a9my6u = this;
            a9my6u['_url'] = lj;
            if (lj['indexOf']('data:image') === 0x0) a9my6u['_type'] = ym069 = 'image';else a9my6u['_type'] = ym069 || (ym069 = a9my6u['getTypeFromUrl'](lj));
            a9my6u['_cache'] = umoay, a9my6u['_data'] = null;
            var d2kfb = 'ascii';
            if (lj['indexOf']('.fnt') != -0x1) d2kfb = 'utf8';else ym069 == 'arraybuffer' && (d2kfb = '');
            ;
            var pi_$x = skbfd['getFileExtension'](lj);
            if (t78rs['_fileTypeArr']['indexOf'](pi_$x) != -0x1) krs7t4['EnvConfig']['load']['call'](this, lj, ym069, umoay, xp$wi8, ha6y);else {
                if (!rxwi['getFileInfo'](lj)) {
                    if (lj['indexOf']('layaNativeDir/') != -0x1) {
                        if (krs7t4['isZiYu']) {
                            var uaojmy = rxwi['ziyuFileData'][lj];
                            a9my6u['onLoaded'](uaojmy);
                            return;
                        } else {
                            cosnole['log']('read read'), rxwi['read'](lj, d2kfb, new eqo1(t78rs, t78rs['onReadNativeCallBack'], [d2kfb, lj, ym069, umoay, xp$wi8, ha6y, a9my6u]));
                            return;
                        }
                    }
                    if (ksdb4['rootPath'] == '') var y639h0 = lj;else y639h0 = lj['split'](ksdb4['rootPath'])[0x0];
                    lj['indexOf']('http://') != -0x1 || lj['indexOf']('https://') != -0x1 ? krs7t4['EnvConfig']['load']['call'](a9my6u, lj, ym069, umoay, xp$wi8, ha6y) : rxwi['readFile'](y639h0, d2kfb, new eqo1(t78rs, t78rs['onReadNativeCallBack'], [d2kfb, lj, ym069, umoay, xp$wi8, ha6y, a9my6u]), lj);
                } else krs7t4['EnvConfig']['load']['call'](this, lj, ym069, umoay, xp$wi8, ha6y);
            }
        }, $8xpiw['resMgrLoad'] = function (i$8, ezl1oq, qlouj, d2gb3v, df7sk, d4s7k, tw$r78) {
            qlouj === void 0x0 && (qlouj = 0x0), d2gb3v === void 0x0 && (d2gb3v = ![]), df7sk === void 0x0 && (df7sk = ![]), d4s7k === void 0x0 && (d4s7k = 0x0), tw$r78 === void 0x0 && (tw$r78 = 0x3), i$8['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', i$8), krs7t4['EnvConfig']['resMgrLoad'](i$8, (gvd2b, h2390v, i$pn_x) => {
                t78rs['prototype']['resMgrLoadCallBack'](gvd2b, h2390v, i$pn_x, ezl1oq);
            }, qlouj, d2gb3v, df7sk, d4s7k, tw$r78);
        }, $8xpiw['resMgrLoadCallBack'] = function (r4kts7, h3v90, oua, _$ipx) {
            console['log']('buff:::', r4kts7, oua, rxwi['fileNativeDir'] + '///' + rxwi['fileListName']), _$ipx(r4kts7, h3v90, oua);
        }, $8xpiw['clearRes'] = function (ymju, x$rwt) {
            x$rwt === void 0x0 && (x$rwt = ![]);
            var kfd4g = this;
            kfd4g['clearRes'](ymju, x$rwt);
            var ixp8 = rxwi['getFileInfo'](ymju);
            if (ixp8 && (ymju['indexOf']('http://') != -0x1 || ymju['indexOf']('https://') != -0x1)) {
                var ya9mu6 = ixp8['md5'],
                    hv32 = rxwi['getFileNativePath'](ya9mu6);
                rxwi['remove'](hv32);
            }
        }, t78rs['onReadNativeCallBack'] = function (zjq1l, q1ljou, h32gv0, vg3b20, i8$wp, b3gv2d, qjzlo1, zl1oqe, vgbdf) {
            vg3b20 === void 0x0 && (vg3b20 = !![]), b3gv2d === void 0x0 && (b3gv2d = ![]), zl1oqe === void 0x0 && (zl1oqe = 0x0);
            if (!zl1oqe) {
                var ks74rt;
                if (h32gv0 == 'json' || h32gv0 == 'atlas') ks74rt = krs7t4['getJson'](vgbdf['data']);else h32gv0 == 'xml' ? ks74rt = skbfd['parseXMLFromString'](vgbdf['data']) : ks74rt = vgbdf['data'];
                qjzlo1['onLoaded'](ks74rt), !krs7t4['isZiYu'] && krs7t4['isPosMsgYu'] && h32gv0 != 'arraybuffer' && wx['postMessage']({
                    'url': q1ljou,
                    'data': ks74rt,
                    'isLoad': !![]
                });
            } else zl1oqe == 0x1 && krs7t4['EnvConfig']['load']['call'](qjzlo1, q1ljou, h32gv0, vg3b20, i8$wp, b3gv2d);
        }, ym6a9u(t78rs, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), t78rs;
    }(),
        rxwi = function (ym960) {
        function gh023() {
            gh023['__super']['call'](this);
            ;
        }
        return mauojy(gh023, 'laya.wx.mini.MiniFileMgr', ym960), gh023['isLoadFile'] = function (skb4df) {
            return gh023['_fileTypeArr']['indexOf'](skb4df) != -0x1 ? !![] : ![];
        }, gh023['getFileInfo'] = function ($npx) {
            var _pi8$x = $npx['split']('?')[0x0],
                jauym6 = gh023['filesListObj'][_pi8$x];
            if (jauym6 == null) return null;else return jauym6;
            return null;
        }, gh023['onFileUpdate'] = function (bsfdk, db2gfv) {
            var i$8pw = bsfdk['split']('/'),
                v32bg0 = i$8pw[i$8pw['length'] - 0x1],
                hv9306 = gh023['getFileInfo'](db2gfv);
            if (hv9306 == null) gh023['onSaveFile'](db2gfv, v32bg0);else {
                if (hv9306['readyUrl'] != db2gfv) gh023['remove'](v32bg0, db2gfv);
            }
        }, gh023['exits'] = function (mjaqo, bg4dk) {
            var n$pi = gh023['getFileNativePath'](mjaqo);
            gh023['fs']['getFileInfo']({
                'filePath': n$pi,
                'success': function (f7tks4) {
                    bg4dk != null && bg4dk['runWith']([0x0, f7tks4]);
                },
                'fail': function (xiwr) {
                    bg4dk != null && bg4dk['runWith']([0x1, xiwr]);
                }
            });
        }, gh023['read'] = function (t8xwr$, bsd4kf, h9v20, r$8xtw) {
            bsd4kf === void 0x0 && (bsd4kf = 'ascill'), r$8xtw === void 0x0 && (r$8xtw = '');
            var t8xrw$;
            r$8xtw != '' ? t8xrw$ = gh023['getFileNativePath'](t8xwr$) : t8xrw$ = t8xwr$, gh023['fs']['readFile']({
                'filePath': t8xrw$,
                'encoding': bsd4kf,
                'success': function (sk4t) {
                    h9v20 != null && h9v20['runWith']([0x0, sk4t]);
                },
                'fail': function (yh0m9) {
                    if (yh0m9 && r$8xtw != '') gh023['down'](r$8xtw, bsd4kf, h9v20, r$8xtw);else h9v20 != null && h9v20['runWith']([0x1]);
                }
            });
        }, gh023['readNativeFile'] = function ($inx_, $w8txr) {
            gh023['fs']['readFile']({
                'filePath': $inx_,
                'encoding': '',
                'success': function (sbdk) {
                    $w8txr != null && $w8txr['runWith']([0x0]);
                },
                'fail': function (yaou) {
                    $w8txr != null && $w8txr['runWith']([0x1]);
                }
            });
        }, gh023['down'] = function (_pi8$, amh96y, qul1, $x8i) {
            amh96y === void 0x0 && (amh96y = 'ascill'), $x8i === void 0x0 && ($x8i = '');
            var gfvd2 = gh023['getFileNativePath']($x8i),
                qojl1 = gh023['wxdown']({
                'url': _pi8$,
                'filePath': gfvd2,
                'success': function (r8ix$) {
                    if (r8ix$['statusCode'] === 0xc8) gh023['readFile'](r8ix$['filePath'], amh96y, qul1, $x8i);
                },
                'fail': function (uaoqj) {
                    qul1 != null && qul1['runWith']([0x1, uaoqj]);
                }
            });
            qojl1['onProgressUpdate'](function (p$ixn_) {
                qul1 != null && qul1['runWith']([0x2, p$ixn_['progress']]);
            });
        }, gh023['readFile'] = function (jauy6, ojlz1, $ri8xw, ha96y) {
            ojlz1 === void 0x0 && (ojlz1 = 'ascill'), ha96y === void 0x0 && (ha96y = ''), gh023['fs']['readFile']({
                'filePath': jauy6,
                'encoding': ojlz1,
                'success': function (gd2b3) {
                    if (jauy6['indexOf']('http://') != -0x1 || jauy6['indexOf']('https://') != -0x1) gh023['onFileUpdate'](jauy6, ha96y);
                    $ri8xw != null && $ri8xw['runWith']([0x0, gd2b3]);
                },
                'fail': function (kr4st7) {
                    if (kr4st7) $ri8xw != null && $ri8xw['runWith']([0x1, kr4st7]);
                }
            });
        }, gh023['downImg'] = function (o1uljq, xtw$, xw$pi8) {
            xw$pi8 === void 0x0 && (xw$pi8 = '');
            var x$wtr = gh023['wxdown']({
                'url': o1uljq,
                'success': function (x8trw$) {
                    x8trw$['statusCode'] === 0xc8 && gh023['copyFile'](x8trw$['tempFilePath'], xw$pi8, xtw$);
                },
                'fail': function (w47ts) {
                    xtw$ != null && xtw$['runWith']([0x1, w47ts]);
                }
            });
        }, gh023['copyFile'] = function (vd32, df47, bfvd) {
            var ujoma = vd32['split']('/'),
                lju = ujoma[ujoma['length'] - 0x1],
                ix_8$p = df47['split']('?')[0x0],
                ip8$_x = gh023['getFileInfo'](df47),
                wtr8s = gh023['getFileNativePath'](lju);
            gh023['fs']['copyFile']({
                'srcPath': vd32,
                'destPath': wtr8s,
                'success': function (bd4gk) {
                    if (!ip8$_x) gh023['onSaveFile'](df47, lju), bfvd != null && bfvd['runWith']([0x0]);else {
                        if (ip8$_x['readyUrl'] != df47) gh023['remove'](lju, df47, bfvd);
                    }
                },
                'fail': function (r8wi) {
                    bfvd != null && bfvd['runWith']([0x1, r8wi]);
                }
            });
        }, gh023['getFileNativePath'] = function (wt87s) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + wt87s;
        }, gh023['remove'] = function (rstk74, y3096h, youja) {
            y3096h === void 0x0 && (y3096h = '');
            var h0m69y = gh023['getFileInfo'](y3096h),
                sbdkf = gh023['getFileNativePath'](h0m69y['md5']);
            jmqoa['loader']['clearRes'](h0m69y['readyUrl']), gh023['fs']['unlink']({
                'filePath': sbdkf,
                'success': function (pn$_xi) {
                    if (y3096h != '') gh023['onSaveFile'](y3096h, rstk74);
                    youja != null && youja['runWith']([0x0]);
                },
                'fail': function (h39y) {}
            });
        }, gh023['onSaveFile'] = function (h03y69, y9a6u) {
            var y09m = h03y69['split']('?')[0x0];
            gh023['filesListObj'][y09m] = {
                'md5': y9a6u,
                'readyUrl': h03y69
            }, gh023['fs']['writeFile']({
                'filePath': gh023['fileNativeDir'] + '/' + gh023['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](gh023['filesListObj']),
                'success': function (uoj1lq) {
                    console['log']('写入测试测试成功：', uoj1lq);
                },
                'fail': function (loeqz) {
                    console['log']('写入测试测试失败：', loeqz);
                }
            });
        }, gh023['existDir'] = function (ipxn, kg4bfd) {
            gh023['fs']['mkdir']({
                'dirPath': ipxn,
                'success': function (kfdbg2) {
                    kg4bfd != null && kg4bfd['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (vb2d) {
                    if (vb2d['errMsg']['indexOf']('file already exists') != -0x1) gh023['readSync'](gh023['fileListName'], 'utf8', kg4bfd);else kg4bfd != null && kg4bfd['runWith']([0x1, vb2d]);
                }
            });
        }, gh023['readSync'] = function (st7fk, $7wr, zole1, x$8iwr) {
            $7wr === void 0x0 && ($7wr = 'ascill'), x$8iwr === void 0x0 && (x$8iwr = '');
            var jqamu = gh023['getFileNativePath'](st7fk),
                amoy;
            try {
                amoy = gh023['fs']['readFileSync'](jqamu), zole1 != null && zole1['runWith']([0x0, { 'data': amoy }]);
            } catch (ymajuo) {
                zole1 != null && zole1['runWith']([0x1]);
            }
        }, gh023['readCache'] = function () {}, gh023['writeCache'] = function (xip8) {
            var o1ju = readyUrl['split']('?')[0x0];
            gh023['filesListObj'][o1ju] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, gh023['fs']['writeFile']({
                'filePath': gh023['fileNativeDir'] + '/' + gh023['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](gh023['filesListObj']),
                'success': function (w8rxi) {},
                'fail': function (x$rwi8) {}
            });
        }, gh023['setNativeFileDir'] = function (v32hg0) {
            gh023['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + v32hg0;
        }, gh023['filesListObj'] = {}, gh023['fileNativeDir'] = null, gh023['fileListName'] = 'layaairfiles.txt', gh023['ziyuFileData'] = {}, ym6a9u(gh023, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), gh023;
    }(tf7s),
        xtw$r8 = function (leo) {
        function tk4s() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], tk4s['__super']['call'](this), this['_sound'] = tk4s['_createSound'](), this['_chanell'] = new rst4w(this['_sound']);
        }
        mauojy(tk4s, 'laya.wx.mini.MiniSound', leo);
        var gv023h = tk4s['prototype'];
        return gv023h['load'] = function (lou) {
            var i$xr8 = this;
            lou = ksdb4['formatURL'](lou), this['url'] = lou;
            if (tk4s['_audioCache'][lou]) {
                this['event']('complete');
                return;
            }
            function dsbk() {
                if (tk4s['_null'] != undefined) i$xr8['_sound']['onCanplay'](tk4s['_null']), i$xr8['_sound']['onError'](tk4s['_null']);else try {
                    i$xr8['_sound']['onCanplay'](null), i$xr8['_sound']['onError'](null), tk4s['_null'] = null;
                } catch (h906y) {
                    console['warn']('[wxmini] _clearSound:' + h906y), i$xr8['_sound']['onCanplay'](am9h), i$xr8['_sound']['onError'](am9h), tk4s['_null'] = am9h;
                }
            }
            function $_nxi() {
                ts7fk['loaded'] = !![], ts7fk['event']('complete'), tk4s['_audioCache'][ts7fk['url']] = ts7fk;
            }
            function wr8i$x(t$rx8) {
                console['error']('errCode=' + t$rx8['errCode'] + '  errMsg=' + t$rx8['errMsg']), ts7fk['event']('error');
            }
            function am9h() {}
            this['_sound']['onCanplay']($_nxi), this['_sound']['onError'](wr8i$x), this['_sound']['src'] = lou;
            var ts7fk = this;
        }, gv023h['play'] = function (ql15z, y9h036) {
            ql15z === void 0x0 && (ql15z = 0x0), y9h036 === void 0x0 && (y9h036 = 0x0);
            var k47f, w8srt;
            if (this['url'] == fbskd4['_tMusic']) {
                if (!tk4s['_musicAudio']) tk4s['_musicAudio'] = this['_sound'];
                k47f = tk4s['_musicAudio'], w8srt = this['_chanell'];
            } else k47f = this['_sound'], w8srt = this['_chanell'];
            return k47f['src'] = this['url'], k47f['startTime'] = 0x0, w8srt['isStopped'] && (w8srt['url'] = this['url'], w8srt['loops'] = y9h036, w8srt['startTime'] = ql15z, w8srt['play'](), fbskd4['addChannel'](w8srt)), w8srt;
        }, gv023h['dispose'] = function () {
            var mya96 = tk4s['_audioCache'][this['url']];
            mya96 && (mya96['src'] = '', delete tk4s['_audioCache'][this['url']]);
        }, p8_xi(0x0, gv023h, 'duration', function () {
            return this['_sound']['duration'];
        }), tk4s['_createSound'] = function () {
            tk4s['_id']++;
            var pxn_ = krs7t4['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return pxn_;
        }, tk4s['_musicAudio'] = null, tk4s['_id'] = 0x0, tk4s['_audioCache'] = {}, tk4s['_null'] = undefined, tk4s;
    }(tf7s),
        rst4w = function (b0vg2) {
        function l1uj(_$in) {
            this['_audio'] = null, this['_onEnd'] = null, l1uj['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = _$in, this['_onEnd'] = skbfd['bind'](this['__onEnd'], this), _$in['onEnded'](this['_onEnd']);
        }
        mauojy(l1uj, 'laya.wx.mini.MiniSoundChannel', b0vg2);
        var hym06 = l1uj['prototype'];
        return hym06['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (jmqoa['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, hym06['__onNull'] = function () {}, hym06['play'] = function () {
            this['isStopped'] = ![], fbskd4['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, hym06['stop'] = function () {
            this['isStopped'] = !![], fbskd4['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, hym06['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, hym06['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], fbskd4['addChannel'](this), this['_audio']['play']();
        }, p8_xi(0x0, hym06, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), p8_xi(0x0, hym06, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), p8_xi(0x0, hym06, 'volume', function () {
            return 0x1;
        }, function (x8rwt$) {}), l1uj['_null'] = undefined, l1uj;
    }(j1lzo),
        wtr87 = function () {
        function fdgk2() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = krs7t4['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        mauojy(fdgk2, 'laya.wx.mini.MiniVideo');
        var d2gf = fdgk2['prototype'];
        return d2gf['on'] = function (g4fbd, _nix, rx$) {
            if (g4fbd == 'loadedmetadata') this['onPlayFunc'] = rx$['bind'](_nix), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else g4fbd == 'ended' && (this['onEndedFunC'] = rx$['bind'](_nix), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, d2gf['onTimeUpdateFunc'] = function (wsr87t) {
            this['position'] = wsr87t['position'], this['_duration'] = wsr87t['duration'];
        }, d2gf['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, d2gf['onended'] = function (umoaj, ouqjl) {
            this['onEndedFunC'] = ouqjl['bind'](umoaj), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, d2gf['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, d2gf['off'] = function (b2kg, oaqu1j, n$_xip) {
            if (b2kg == 'loadedmetadata') this['onPlayFunc'] = n$_xip['bind'](oaqu1j), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else b2kg == 'ended' && (this['onEndedFunC'] = n$_xip['bind'](oaqu1j), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, d2gf['load'] = function (fts) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = fts;
        }, d2gf['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, d2gf['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, d2gf['size'] = function (dfgbk, qjomu) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = dfgbk, this['videoElement']['height'] = qjomu;
        }, d2gf['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, d2gf['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, p8_xi(0x0, d2gf, 'duration', function () {
            return this['_duration'];
        }), p8_xi(0x0, d2gf, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (i8wr$x) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = i8wr$x;
        }), p8_xi(0x0, d2gf, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), p8_xi(0x0, d2gf, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), p8_xi(0x0, d2gf, 'ended', function () {
            return this['videoend'];
        }), p8_xi(0x0, d2gf, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (uj6a) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = uj6a;
        }), p8_xi(0x0, d2gf, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (aojuym) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = aojuym;
        }), p8_xi(0x0, d2gf, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (eql1z5) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = eql1z5;
        }), p8_xi(0x0, d2gf, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), p8_xi(0x0, d2gf, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (kdb4g) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = kdb4g;
        }), p8_xi(0x0, d2gf, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (h6v90) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = h6v90;
        }), p8_xi(0x0, d2gf, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), p8_xi(0x0, d2gf, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (s47twr) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = s47twr;
        }), p8_xi(0x0, d2gf, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (xp8$) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = xp8$;
        }), p8_xi(0x0, d2gf, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (bvfgd2) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = bvfgd2;
        }), fdgk2;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var x$ip_ in Laya) {
        var ymuj6 = Laya[x$ip_];
        ymuj6 && ymuj6['__isclass'] && (exports[x$ip_] = ymuj6);
    }
});