var J = wx.h$;
(function (window, document, qov5yr) {
    var t8dhc = qov5yr['un'],
        i7rjxv = qov5yr['uns'],
        bgq5 = qov5yr['static'],
        c6zth = qov5yr['class'],
        by5oq = qov5yr['getset'],
        hte8cz = qov5yr['__newvec'],
        qboy0 = laya['utils']['Browser'],
        epz2w = laya['events']['Event'],
        we_z2p = laya['events']['EventDispatcher'],
        n431u = laya['resource']['HTMLImage'],
        ua14n3 = laya['utils']['Handler'],
        tche8 = laya['display']['Input'],
        z_ = laya['net']['Loader'],
        oqb05y = laya['maths']['Matrix'],
        in7j = laya['renders']['Render'],
        x174ni = laya['utils']['RunDriver'],
        v5qyo = laya['media']['Sound'],
        he_zp2 = laya['media']['SoundChannel'],
        t6h = laya['media']['SoundManager'],
        h8z6ct = laya['display']['Stage'],
        hcd86 = laya['net']['URL'],
        th_ = laya['utils']['Utils'],
        in34u1 = function () {
        function ijvr7x() {}
        return c6zth(ijvr7x, 'laya.wx.mini.MiniAdpter'), ijvr7x['getJson'] = function (vnjxi7) {
            return JSON['parse'](vnjxi7);
        }, ijvr7x['init'] = function (ctdh, $9f_2w) {
            ctdh === void 0x0 && (ctdh = ![]), $9f_2w === void 0x0 && ($9f_2w = ![]);
            if (ijvr7x['_inited']) return;
            ijvr7x['window'] = window;
            if (ijvr7x['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            ijvr7x['_inited'] = !![], ijvr7x['isZiYu'] = $9f_2w, ijvr7x['isPosMsgYu'] = ctdh, ijvr7x['EnvConfig'] = {}, !ijvr7x['isZiYu'] && (ceph['setNativeFileDir']('/layaairGame'), ceph['existDir'](ceph['fileNativeDir'], ua14n3['create'](ijvr7x, ijvr7x['onMkdirCallBack']))), ijvr7x['window']['focus'] = function () {}, qov5yr['getUrlPath'] = function () {}, ijvr7x['window']['logtime'] = function (ovrqy5) {}, ijvr7x['window']['alertTimeLog'] = function (wf_p2) {}, ijvr7x['window']['resetShareInfo'] = function () {}, ijvr7x['window']['CanvasRenderingContext2D'] = function () {}, ijvr7x['window']['CanvasRenderingContext2D']['prototype'] = ijvr7x['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], ijvr7x['window']['document']['body']['appendChild'] = function () {}, ijvr7x['EnvConfig']['pixelRatioInt'] = 0x0, x174ni['getPixelRatio'] = ijvr7x['pixelRatio'], ijvr7x['_preCreateElement'] = qboy0['createElement'], qboy0['createElement'] = ijvr7x['createElement'], x174ni['createShaderCondition'] = ijvr7x['createShaderCondition'], th_['parseXMLFromString'] = ijvr7x['parseXMLFromString'], tche8['_createInputElement'] = un341i['_createInputElement'], ijvr7x['EnvConfig']['load'] = z_['prototype']['load'], z_['prototype']['load'] = kgq50b['prototype']['load'], ijvr7x['isZiYu'] && ctdh && wx['onMessage'](function (ep9_2w) {
                ep9_2w['isLoad'] && (ceph['ziyuFileData'][ep9_2w['url']] = ep9_2w['data']);
            });
        }, ijvr7x['onMkdirCallBack'] = function (zhcet8, q5oyv) {
            if (!zhcet8) ceph['filesListObj'] = JSON['parse'](q5oyv['data']);
        }, ijvr7x['pixelRatio'] = function () {
            if (!ijvr7x['EnvConfig']['pixelRatioInt']) try {
                var yjr5vo = wx['getSystemInfoSync']();
                return ijvr7x['EnvConfig']['pixelRatioInt'] = yjr5vo['pixelRatio'], yjr5vo = yjr5vo, yjr5vo['pixelRatio'];
            } catch (f29_w) {}
            return ijvr7x['EnvConfig']['pixelRatioInt'];
        }, ijvr7x['createElement'] = function (p_h2ez) {
            if (p_h2ez == 'canvas') {
                var rvj7y;
                return ijvr7x['idx'] == 0x1 ? ijvr7x['isZiYu'] ? (rvj7y = sharedCanvas, rvj7y['style'] = {}) : rvj7y = window['canvas'] : rvj7y = window['wx']['createCanvas'](), ijvr7x['idx']++, rvj7y;
            } else {
                if (p_h2ez == 'textarea' || p_h2ez == 'input') return ijvr7x['onCreateInput'](p_h2ez);else {
                    if (p_h2ez == 'div') {
                        var oj5yv = ijvr7x['_preCreateElement'](p_h2ez);
                        return oj5yv['contains'] = function (htcp) {
                            return null;
                        }, oj5yv['removeChild'] = function (vxyj7r) {}, oj5yv;
                    } else return ijvr7x['_preCreateElement'](p_h2ez);
                }
            }
        }, ijvr7x['onCreateInput'] = function (jvo7) {
            var z8ht = ijvr7x['_preCreateElement'](jvo7);
            return z8ht['focus'] = un341i['wxinputFocus'], z8ht['blur'] = un341i['wxinputblur'], z8ht['style'] = {}, z8ht['value'] = 0x0, z8ht['parentElement'] = {}, z8ht['placeholder'] = {}, z8ht['type'] = {}, z8ht['setColor'] = function (s2w$f) {}, z8ht['setType'] = function (oyr5vj) {}, z8ht['setFontFace'] = function (yjvor5) {}, z8ht['addEventListener'] = function (yor7j) {}, z8ht['contains'] = function (ua3ml4) {
                return null;
            }, z8ht['removeChild'] = function (jixnv) {}, z8ht;
        }, ijvr7x['createShaderCondition'] = function (vnxi7) {
            var oyvjr = this,
                g5kqb = function () {
                var x7j1n = vnxi7;
                return oyvjr[vnxi7['replace']('this.', '')];
            };
            return g5kqb;
        }, ijvr7x['EnvConfig'] = null, ijvr7x['window'] = null, ijvr7x['_preCreateElement'] = null, ijvr7x['_inited'] = ![], ijvr7x['wxRequest'] = null, ijvr7x['systemInfo'] = null, ijvr7x['version'] = '0.0.1', ijvr7x['isZiYu'] = ![], ijvr7x['isPosMsgYu'] = ![], ijvr7x['parseXMLFromString'] = function (n1ji7x) {
            var t6c8dh, jo7yv;
            n1ji7x = n1ji7x['replace'](/>\s+</g, '><');
            try {
                t6c8dh = new window['Parser']['DOMParser']()['parseFromString'](n1ji7x, 'text/xml');
            } catch (jvyx7r) {
                throw '需要引入xml解析库文件';
            }
            return t6c8dh;
        }, ijvr7x['idx'] = 0x1, ijvr7x;
    }(),
        qoyrb5 = function () {
        function c8zt() {}
        c6zth(c8zt, 'laya.wx.mini.MiniImage');
        var pf9w_2 = c8zt['prototype'];
        return pf9w_2['_loadImage'] = function (kd068g) {
            var z8h6 = this,
                $2s9wf = ![];
            kd068g['indexOf']('layaNativeDir/') == -0x1 && ($2s9wf = !![], kd068g = hcd86['formatURL'](kd068g));
            if (!ceph['getFileInfo'](kd068g)) {
                if (kd068g['indexOf']('http://') != -0x1 || kd068g['indexOf']('https://') != -0x1) ceph['downImg'](kd068g, new ua14n3(c8zt, c8zt['onDownImgCallBack'], [kd068g, z8h6]), kd068g);else c8zt['onCreateImage'](kd068g, z8h6, !![]);
            } else c8zt['onCreateImage'](kd068g, z8h6, !$2s9wf);
        }, c8zt['onDownImgCallBack'] = function (z86tch, tepzhc, d8gk6c) {
            if (!d8gk6c) c8zt['onCreateImage'](z86tch, tepzhc);else tepzhc['onError'](null);
        }, c8zt['onCreateImage'] = function (i7nxvj, v7ir, qg0k5) {
            qg0k5 === void 0x0 && (qg0k5 = ![]);
            var q0by5o;
            if (!qg0k5) {
                var ep2w9 = ceph['getFileInfo'](i7nxvj),
                    kqb = ep2w9['md5'];
                q0by5o = ceph['getFileNativePath'](kqb);
            } else q0by5o = i7nxvj;
            if (v7ir['imgCache'] == null) v7ir['imgCache'] = {};
            var u43n1;
            function gck86d() {
                u43n1['onload'] = null, u43n1['onerror'] = null, delete v7ir['imgCache'][i7nxvj];
            }
            ;
            var qbroy5 = function () {
                gck86d(), v7ir['onLoaded'](u43n1);
            },
                g086d = function () {
                gck86d(), v7ir['event']('error', 'Load image failed');
            };
            v7ir['_type'] == 'nativeimage' ? (u43n1 = new qboy0['window']['Image'](), u43n1['crossOrigin'] = '', u43n1['onload'] = qbroy5, u43n1['onerror'] = g086d, u43n1['src'] = q0by5o, v7ir['imgCache'][i7nxvj] = u43n1) : new n431u['create'](q0by5o, {
                'onload': qbroy5,
                'onerror': g086d,
                'onCreate': function (jo7ryv) {
                    u43n1 = jo7ryv, v7ir['imgCache'][i7nxvj] = jo7ryv;
                }
            });
        }, c8zt;
    }(),
        un341i = function () {
        function zwpe() {}
        return c6zth(zwpe, 'laya.wx.mini.MiniInput'), zwpe['_createInputElement'] = function () {
            tche8['_initInput'](tche8['area'] = qboy0['createElement']('textarea')), tche8['_initInput'](tche8['input'] = qboy0['createElement']('input')), tche8['inputContainer'] = qboy0['createElement']('div'), tche8['inputContainer']['style']['position'] = 'absolute', tche8['inputContainer']['style']['zIndex'] = 0x186a0, qboy0['container']['appendChild'](tche8['inputContainer']), tche8['inputContainer']['setPos'] = function (_9pf, joy7rv) {
                tche8['inputContainer']['style']['left'] = _9pf + 'px', tche8['inputContainer']['style']['top'] = joy7rv + 'px';
            }, qov5yr['stage']['on']('resize', null, zwpe['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (hc6d) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), t6h['_soundClass'] = nj71ix, t6h['_musicClass'] = nj71ix, window['_videoClass'] = h68td;
        }, zwpe['_onStageResize'] = function () {
            var i7x = qov5yr['stage']['_canvasTransform']['identity']();
            i7x['scale'](qboy0['width'] / in7j['canvas']['width'] / x174ni['getPixelRatio'](), qboy0['height'] / in7j['canvas']['height'] / x174ni['getPixelRatio']());
        }, zwpe['wxinputFocus'] = function (n41ix) {
            var phtze = tche8['inputElement']['target'];
            if (phtze && !phtze['editable']) return;
            in34u1['window']['wx']['offKeyboardConfirm'](), in34u1['window']['wx']['offKeyboardInput'](), in34u1['window']['wx']['showKeyboard']({
                'defaultValue': phtze['text'],
                'maxLength': phtze['maxChars'],
                'multiple': phtze['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (dg68k) {},
                'fail': function (qy50bo) {}
            }), in34u1['window']['wx']['onKeyboardConfirm'](function (oyr7) {
                var bq0dkg = oyr7 ? oyr7['value'] : '';
                phtze['text'] = bq0dkg, phtze['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), in34u1['window']['wx']['onKeyboardInput'](function (nj17ix) {
                var r5qbyo = nj17ix ? nj17ix['value'] : '';
                if (!phtze['multiline']) {
                    if (r5qbyo['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                phtze['text'] = r5qbyo, phtze['event']('input');
            });
        }, zwpe['inputEnter'] = function () {
            tche8['inputElement']['target']['focus'] = ![];
        }, zwpe['wxinputblur'] = function () {
            zwpe['hideKeyboard']();
        }, zwpe['hideKeyboard'] = function () {
            in34u1['window']['wx']['offKeyboardConfirm'](), in34u1['window']['wx']['offKeyboardInput'](), in34u1['window']['wx']['hideKeyboard']({
                'success': function (broqy) {
                    console['log']('隐藏键盘');
                },
                'fail': function (yb0qo5) {
                    console['log']('隐藏键盘出错:' + (yb0qo5 ? yb0qo5['errMsg'] : ''));
                }
            });
        }, zwpe;
    }(),
        kgq50b = function () {
        function la41() {}
        c6zth(la41, 'laya.wx.mini.MiniLoader');
        var kg0q5b = la41['prototype'];
        return kg0q5b['load'] = function (zp_w2e, _pe2hz, a3lm4, $w9_f2, b5ryoq) {
            a3lm4 === void 0x0 && (a3lm4 = !![]), b5ryoq === void 0x0 && (b5ryoq = ![]);
            var nijx1 = this;
            nijx1['_url'] = zp_w2e;
            if (zp_w2e['indexOf']('data:image') === 0x0) nijx1['_type'] = _pe2hz = 'image';else nijx1['_type'] = _pe2hz || (_pe2hz = nijx1['getTypeFromUrl'](zp_w2e));
            nijx1['_cache'] = a3lm4, nijx1['_data'] = null;
            var zpe2h = 'ascii';
            if (zp_w2e['indexOf']('.fnt') != -0x1) zpe2h = 'utf8';else _pe2hz == 'arraybuffer' && (zpe2h = '');
            ;
            var _we92 = th_['getFileExtension'](zp_w2e);
            if (la41['_fileTypeArr']['indexOf'](_we92) != -0x1) in34u1['EnvConfig']['load']['call'](this, zp_w2e, _pe2hz, a3lm4, $w9_f2, b5ryoq);else {
                if (!ceph['getFileInfo'](zp_w2e)) {
                    if (zp_w2e['indexOf']('layaNativeDir/') != -0x1) {
                        if (in34u1['isZiYu']) {
                            var x174in = ceph['ziyuFileData'][zp_w2e];
                            nijx1['onLoaded'](x174in);
                            return;
                        } else {
                            cosnole['log']('read read'), ceph['read'](zp_w2e, zpe2h, new ua14n3(la41, la41['onReadNativeCallBack'], [zpe2h, zp_w2e, _pe2hz, a3lm4, $w9_f2, b5ryoq, nijx1]));
                            return;
                        }
                    }
                    if (hcd86['rootPath'] == '') var thez_ = zp_w2e;else thez_ = zp_w2e['split'](hcd86['rootPath'])[0x0];
                    zp_w2e['indexOf']('http://') != -0x1 || zp_w2e['indexOf']('https://') != -0x1 ? in34u1['EnvConfig']['load']['call'](nijx1, zp_w2e, _pe2hz, a3lm4, $w9_f2, b5ryoq) : ceph['readFile'](thez_, zpe2h, new ua14n3(la41, la41['onReadNativeCallBack'], [zpe2h, zp_w2e, _pe2hz, a3lm4, $w9_f2, b5ryoq, nijx1]), zp_w2e);
                } else in34u1['EnvConfig']['load']['call'](this, zp_w2e, _pe2hz, a3lm4, $w9_f2, b5ryoq);
            }
        }, kg0q5b['resMgrLoad'] = function (pfw_92, _29w$, aul14, o05qkb, k0b, z8ecth, i1x7n4) {
            aul14 === void 0x0 && (aul14 = 0x0), o05qkb === void 0x0 && (o05qkb = ![]), k0b === void 0x0 && (k0b = ![]), z8ecth === void 0x0 && (z8ecth = 0x0), i1x7n4 === void 0x0 && (i1x7n4 = 0x3), pfw_92['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', pfw_92), in34u1['EnvConfig']['resMgrLoad'](pfw_92, (ctz, z_p2, ojry5) => {
                la41['prototype']['resMgrLoadCallBack'](ctz, z_p2, ojry5, _29w$);
            }, aul14, o05qkb, k0b, z8ecth, i1x7n4);
        }, kg0q5b['resMgrLoadCallBack'] = function (h_tep, n1xi, f92$ws, chpezt) {
            console['log']('buff:::', h_tep, f92$ws, ceph['fileNativeDir'] + '///' + ceph['fileListName']), chpezt(h_tep, n1xi, f92$ws);
        }, kg0q5b['clearRes'] = function (qrb5oy, zetph_) {
            zetph_ === void 0x0 && (zetph_ = ![]);
            var vjxi7n = this;
            vjxi7n['clearRes'](qrb5oy, zetph_);
            var i413nx = ceph['getFileInfo'](qrb5oy);
            if (i413nx && (qrb5oy['indexOf']('http://') != -0x1 || qrb5oy['indexOf']('https://') != -0x1)) {
                var irvj = i413nx['md5'],
                    f92 = ceph['getFileNativePath'](irvj);
                ceph['remove'](f92);
            }
        }, la41['onReadNativeCallBack'] = function (nivjx7, $s2fw9, rivjx, wf_9p2, z_htp, pth_z, l314au, pzehc, nxi) {
            wf_9p2 === void 0x0 && (wf_9p2 = !![]), pth_z === void 0x0 && (pth_z = ![]), pzehc === void 0x0 && (pzehc = 0x0);
            if (!pzehc) {
                var t8dh;
                if (rivjx == 'json' || rivjx == 'atlas') t8dh = in34u1['getJson'](nxi['data']);else rivjx == 'xml' ? t8dh = th_['parseXMLFromString'](nxi['data']) : t8dh = nxi['data'];
                l314au['onLoaded'](t8dh), !in34u1['isZiYu'] && in34u1['isPosMsgYu'] && rivjx != 'arraybuffer' && wx['postMessage']({
                    'url': $s2fw9,
                    'data': t8dh,
                    'isLoad': !![]
                });
            } else pzehc == 0x1 && in34u1['EnvConfig']['load']['call'](l314au, $s2fw9, rivjx, wf_9p2, z_htp, pth_z);
        }, bgq5(la41, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), la41;
    }(),
        ceph = function (we9p2_) {
        function obyrq() {
            obyrq['__super']['call'](this);
            ;
        }
        return c6zth(obyrq, 'laya.wx.mini.MiniFileMgr', we9p2_), obyrq['isLoadFile'] = function (xni417) {
            return obyrq['_fileTypeArr']['indexOf'](xni417) != -0x1 ? !![] : ![];
        }, obyrq['getFileInfo'] = function (_2wp9) {
            var okbq0 = _2wp9['split']('?')[0x0],
                xnv = obyrq['filesListObj'][okbq0];
            if (xnv == null) return null;else return xnv;
            return null;
        }, obyrq['onFileUpdate'] = function (j7n1ix, jroy5v) {
            var u41n3a = j7n1ix['split']('/'),
                q0gb = u41n3a[u41n3a['length'] - 0x1],
                yv7x = obyrq['getFileInfo'](jroy5v);
            if (yv7x == null) obyrq['onSaveFile'](jroy5v, q0gb);else {
                if (yv7x['readyUrl'] != jroy5v) obyrq['remove'](q0gb, jroy5v);
            }
        }, obyrq['exits'] = function (jyr7vo, qybo05) {
            var b0qdg = obyrq['getFileNativePath'](jyr7vo);
            obyrq['fs']['getFileInfo']({
                'filePath': b0qdg,
                'success': function (zpeh_) {
                    qybo05 != null && qybo05['runWith']([0x0, zpeh_]);
                },
                'fail': function (yrjov) {
                    qybo05 != null && qybo05['runWith']([0x1, yrjov]);
                }
            });
        }, obyrq['read'] = function (gqk0bd, in3u1, vijxn7, i4nu31) {
            in3u1 === void 0x0 && (in3u1 = 'ascill'), i4nu31 === void 0x0 && (i4nu31 = '');
            var i4x13;
            i4nu31 != '' ? i4x13 = obyrq['getFileNativePath'](gqk0bd) : i4x13 = gqk0bd, obyrq['fs']['readFile']({
                'filePath': i4x13,
                'encoding': in3u1,
                'success': function (e2wp_) {
                    vijxn7 != null && vijxn7['runWith']([0x0, e2wp_]);
                },
                'fail': function (yq05bo) {
                    if (yq05bo && i4nu31 != '') obyrq['down'](i4nu31, in3u1, vijxn7, i4nu31);else vijxn7 != null && vijxn7['runWith']([0x1]);
                }
            });
        }, obyrq['readNativeFile'] = function (yxjrv7, in13x) {
            obyrq['fs']['readFile']({
                'filePath': yxjrv7,
                'encoding': '',
                'success': function (vjxn) {
                    in13x != null && in13x['runWith']([0x0]);
                },
                'fail': function (tpch) {
                    in13x != null && in13x['runWith']([0x1]);
                }
            });
        }, obyrq['down'] = function (ixv7n, x14in7, n47i, n1ix74) {
            x14in7 === void 0x0 && (x14in7 = 'ascill'), n1ix74 === void 0x0 && (n1ix74 = '');
            var c8ht6 = obyrq['getFileNativePath'](n1ix74),
                bd0qk = obyrq['wxdown']({
                'url': ixv7n,
                'filePath': c8ht6,
                'success': function (ul3a4) {
                    if (ul3a4['statusCode'] === 0xc8) obyrq['readFile'](ul3a4['filePath'], x14in7, n47i, n1ix74);
                },
                'fail': function (_2pwf) {
                    n47i != null && n47i['runWith']([0x1, _2pwf]);
                }
            });
            bd0qk['onProgressUpdate'](function (jix7vr) {
                n47i != null && n47i['runWith']([0x2, jix7vr['progress']]);
            });
        }, obyrq['readFile'] = function (hz, qroy5b, gd068k, ijxr7) {
            qroy5b === void 0x0 && (qroy5b = 'ascill'), ijxr7 === void 0x0 && (ijxr7 = ''), obyrq['fs']['readFile']({
                'filePath': hz,
                'encoding': qroy5b,
                'success': function (p_2f9w) {
                    if (hz['indexOf']('http://') != -0x1 || hz['indexOf']('https://') != -0x1) obyrq['onFileUpdate'](hz, ijxr7);
                    gd068k != null && gd068k['runWith']([0x0, p_2f9w]);
                },
                'fail': function (c6h8td) {
                    if (c6h8td) gd068k != null && gd068k['runWith']([0x1, c6h8td]);
                }
            });
        }, obyrq['downImg'] = function (pf9w2_, eptcz, kboq0) {
            kboq0 === void 0x0 && (kboq0 = '');
            var vroj5 = obyrq['wxdown']({
                'url': pf9w2_,
                'success': function (_ewz2p) {
                    _ewz2p['statusCode'] === 0xc8 && obyrq['copyFile'](_ewz2p['tempFilePath'], kboq0, eptcz);
                },
                'fail': function (qbr5) {
                    eptcz != null && eptcz['runWith']([0x1, qbr5]);
                }
            });
        }, obyrq['copyFile'] = function (u13na, v7yrj, tczhp) {
            var epz_ht = u13na['split']('/'),
                sw2$f = epz_ht[epz_ht['length'] - 0x1],
                i741xn = v7yrj['split']('?')[0x0],
                d8kg = obyrq['getFileInfo'](v7yrj),
                ctz8h6 = obyrq['getFileNativePath'](sw2$f);
            obyrq['fs']['copyFile']({
                'srcPath': u13na,
                'destPath': ctz8h6,
                'success': function (qvory5) {
                    if (!d8kg) obyrq['onSaveFile'](v7yrj, sw2$f), tczhp != null && tczhp['runWith']([0x0]);else {
                        if (d8kg['readyUrl'] != v7yrj) obyrq['remove'](sw2$f, v7yrj, tczhp);
                    }
                },
                'fail': function (w_pze2) {
                    tczhp != null && tczhp['runWith']([0x1, w_pze2]);
                }
            });
        }, obyrq['getFileNativePath'] = function (m3ual) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + m3ual;
        }, obyrq['remove'] = function (t8cz6, k60gbd, tezhpc) {
            k60gbd === void 0x0 && (k60gbd = '');
            var vrq5 = obyrq['getFileInfo'](k60gbd),
                yvj5ro = obyrq['getFileNativePath'](vrq5['md5']);
            qov5yr['loader']['clearRes'](vrq5['readyUrl']), obyrq['fs']['unlink']({
                'filePath': yvj5ro,
                'success': function (p2_ezh) {
                    if (k60gbd != '') obyrq['onSaveFile'](k60gbd, t8cz6);
                    tezhpc != null && tezhpc['runWith']([0x0]);
                },
                'fail': function (j7oyrv) {}
            });
        }, obyrq['onSaveFile'] = function (b6kdg0, h8cdt) {
            var echzp = b6kdg0['split']('?')[0x0];
            obyrq['filesListObj'][echzp] = {
                'md5': h8cdt,
                'readyUrl': b6kdg0
            }, obyrq['fs']['writeFile']({
                'filePath': obyrq['fileNativeDir'] + '/' + obyrq['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](obyrq['filesListObj']),
                'success': function (tzpe_h) {
                    console['log']('写入测试测试成功：', tzpe_h);
                },
                'fail': function (i341nx) {
                    console['log']('写入测试测试失败：', i341nx);
                }
            });
        }, obyrq['existDir'] = function (z86thc, orqb) {
            obyrq['fs']['mkdir']({
                'dirPath': z86thc,
                'success': function (r7jixv) {
                    orqb != null && orqb['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (t6c8dg) {
                    if (t6c8dg['errMsg']['indexOf']('file already exists') != -0x1) obyrq['readSync'](obyrq['fileListName'], 'utf8', orqb);else orqb != null && orqb['runWith']([0x1, t6c8dg]);
                }
            });
        }, obyrq['readSync'] = function (l3amu4, vjy7rx, zewp_, g6kd) {
            vjy7rx === void 0x0 && (vjy7rx = 'ascill'), g6kd === void 0x0 && (g6kd = '');
            var w2e_p = obyrq['getFileNativePath'](l3amu4),
                kqb5g0;
            try {
                kqb5g0 = obyrq['fs']['readFileSync'](w2e_p), zewp_ != null && zewp_['runWith']([0x0, { 'data': kqb5g0 }]);
            } catch (tc6h8z) {
                zewp_ != null && zewp_['runWith']([0x1]);
            }
        }, obyrq['readCache'] = function () {}, obyrq['writeCache'] = function (pw) {
            var zh_pte = readyUrl['split']('?')[0x0];
            obyrq['filesListObj'][zh_pte] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, obyrq['fs']['writeFile']({
                'filePath': obyrq['fileNativeDir'] + '/' + obyrq['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](obyrq['filesListObj']),
                'success': function (x4n17i) {},
                'fail': function (z_p2w) {}
            });
        }, obyrq['setNativeFileDir'] = function (z_2epw) {
            obyrq['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + z_2epw;
        }, obyrq['filesListObj'] = {}, obyrq['fileNativeDir'] = null, obyrq['fileListName'] = 'layaairfiles.txt', obyrq['ziyuFileData'] = {}, bgq5(obyrq, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), obyrq;
    }(we_z2p),
        nj71ix = function (uma3l) {
        function u13n4i() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], u13n4i['__super']['call'](this), this['_sound'] = u13n4i['_createSound'](), this['_chanell'] = new ijvx(this['_sound']);
        }
        c6zth(u13n4i, 'laya.wx.mini.MiniSound', uma3l);
        var hptz_ = u13n4i['prototype'];
        return hptz_['load'] = function (qro5by) {
            var ezpct = this;
            qro5by = hcd86['formatURL'](qro5by), this['url'] = qro5by;
            if (u13n4i['_audioCache'][qro5by]) {
                this['event']('complete');
                return;
            }
            function ep2zw() {
                if (u13n4i['_null'] != undefined) ezpct['_sound']['onCanplay'](u13n4i['_null']), ezpct['_sound']['onError'](u13n4i['_null']);else try {
                    ezpct['_sound']['onCanplay'](null), ezpct['_sound']['onError'](null), u13n4i['_null'] = null;
                } catch (sw$f29) {
                    console['warn']('[wxmini] _clearSound:' + sw$f29), ezpct['_sound']['onCanplay'](uni34), ezpct['_sound']['onError'](uni34), u13n4i['_null'] = uni34;
                }
            }
            function yb5roq() {
                dch8t['loaded'] = !![], dch8t['event']('complete'), u13n4i['_audioCache'][dch8t['url']] = dch8t;
            }
            function t8g6dc(qv5yor) {
                console['error']('errCode=' + qv5yor['errCode'] + '  errMsg=' + qv5yor['errMsg']), dch8t['event']('error');
            }
            function uni34() {}
            this['_sound']['onCanplay'](yb5roq), this['_sound']['onError'](t8g6dc), this['_sound']['src'] = qro5by;
            var dch8t = this;
        }, hptz_['play'] = function (u4n3, u3a4l1) {
            u4n3 === void 0x0 && (u4n3 = 0x0), u3a4l1 === void 0x0 && (u3a4l1 = 0x0);
            var alu431, p9we2;
            if (this['url'] == t6h['_tMusic']) {
                if (!u13n4i['_musicAudio']) u13n4i['_musicAudio'] = this['_sound'];
                alu431 = u13n4i['_musicAudio'], p9we2 = this['_chanell'];
            } else alu431 = this['_sound'], p9we2 = this['_chanell'];
            return alu431['src'] = this['url'], alu431['startTime'] = 0x0, p9we2['isStopped'] && (p9we2['url'] = this['url'], p9we2['loops'] = u3a4l1, p9we2['startTime'] = u4n3, p9we2['play'](), t6h['addChannel'](p9we2)), p9we2;
        }, hptz_['dispose'] = function () {
            var e2zph = u13n4i['_audioCache'][this['url']];
            e2zph && (e2zph['src'] = '', delete u13n4i['_audioCache'][this['url']]);
        }, by5oq(0x0, hptz_, 'duration', function () {
            return this['_sound']['duration'];
        }), u13n4i['_createSound'] = function () {
            u13n4i['_id']++;
            var gk8d60 = in34u1['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return gk8d60;
        }, u13n4i['_musicAudio'] = null, u13n4i['_id'] = 0x0, u13n4i['_audioCache'] = {}, u13n4i['_null'] = undefined, u13n4i;
    }(we_z2p),
        ijvx = function (xj1n7i) {
        function g8t6(um3la) {
            this['_audio'] = null, this['_onEnd'] = null, g8t6['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = um3la, this['_onEnd'] = th_['bind'](this['__onEnd'], this), um3la['onEnded'](this['_onEnd']);
        }
        c6zth(g8t6, 'laya.wx.mini.MiniSoundChannel', xj1n7i);
        var orqy5b = g8t6['prototype'];
        return orqy5b['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (qov5yr['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, orqy5b['__onNull'] = function () {}, orqy5b['play'] = function () {
            this['isStopped'] = ![], t6h['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, orqy5b['stop'] = function () {
            this['isStopped'] = !![], t6h['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, orqy5b['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, orqy5b['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], t6h['addChannel'](this), this['_audio']['play']();
        }, by5oq(0x0, orqy5b, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), by5oq(0x0, orqy5b, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), by5oq(0x0, orqy5b, 'volume', function () {
            return 0x1;
        }, function (ix71jn) {}), g8t6['_null'] = undefined, g8t6;
    }(he_zp2),
        h68td = function () {
        function rq5oyb() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = in34u1['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        c6zth(rq5oyb, 'laya.wx.mini.MiniVideo');
        var ivx7nj = rq5oyb['prototype'];
        return ivx7nj['on'] = function (chd68t, _wp9e2, h_etp) {
            if (chd68t == 'loadedmetadata') this['onPlayFunc'] = h_etp['bind'](_wp9e2), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else chd68t == 'ended' && (this['onEndedFunC'] = h_etp['bind'](_wp9e2), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, ivx7nj['onTimeUpdateFunc'] = function (d8c6t) {
            this['position'] = d8c6t['position'], this['_duration'] = d8c6t['duration'];
        }, ivx7nj['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, ivx7nj['onended'] = function (i341un, ni1u43) {
            this['onEndedFunC'] = ni1u43['bind'](i341un), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, ivx7nj['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, ivx7nj['off'] = function (e_zh2p, r5voq, n1u3a4) {
            if (e_zh2p == 'loadedmetadata') this['onPlayFunc'] = n1u3a4['bind'](r5voq), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else e_zh2p == 'ended' && (this['onEndedFunC'] = n1u3a4['bind'](r5voq), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, ivx7nj['load'] = function (njxi7) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = njxi7;
        }, ivx7nj['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, ivx7nj['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, ivx7nj['size'] = function (ct8zh, au31n4) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = ct8zh, this['videoElement']['height'] = au31n4;
        }, ivx7nj['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, ivx7nj['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, by5oq(0x0, ivx7nj, 'duration', function () {
            return this['_duration'];
        }), by5oq(0x0, ivx7nj, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (hzepct) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = hzepct;
        }), by5oq(0x0, ivx7nj, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), by5oq(0x0, ivx7nj, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), by5oq(0x0, ivx7nj, 'ended', function () {
            return this['videoend'];
        }), by5oq(0x0, ivx7nj, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (ry) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = ry;
        }), by5oq(0x0, ivx7nj, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (w9fp2_) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = w9fp2_;
        }), by5oq(0x0, ivx7nj, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (y7ojr) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = y7ojr;
        }), by5oq(0x0, ivx7nj, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), by5oq(0x0, ivx7nj, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (htzc8) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = htzc8;
        }), by5oq(0x0, ivx7nj, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (vr7jix) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = vr7jix;
        }), by5oq(0x0, ivx7nj, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), by5oq(0x0, ivx7nj, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (ez2w_) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = ez2w_;
        }), by5oq(0x0, ivx7nj, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (h6tz8) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = h6tz8;
        }), by5oq(0x0, ivx7nj, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (zpwe) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = zpwe;
        }), rq5oyb;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var h_zpe2 in Laya) {
        var czeht = Laya[h_zpe2];
        czeht && czeht['__isclass'] && (exports[h_zpe2] = czeht);
    }
});