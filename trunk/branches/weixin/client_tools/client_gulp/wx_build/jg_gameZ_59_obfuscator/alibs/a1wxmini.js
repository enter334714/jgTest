var c = wx.$a;
(function (window, document, ew2) {
    var _4c = ew2['un'],
        bly0c$ = ew2['uns'],
        ly$m = ew2['static'],
        ylmbc = ew2['class'],
        by0$l = ew2['getset'],
        fxu1g2 = ew2['__newvec'],
        f1gx2 = laya['utils']['Browser'],
        ktdq86 = laya['events']['Event'],
        mlb$cy = laya['events']['EventDispatcher'],
        alm$9 = laya['resource']['HTMLImage'],
        tdq58r = laya['utils']['Handler'],
        oewu4_ = laya['display']['Input'],
        o0ew_4 = laya['net']['Loader'],
        d6hkz = laya['maths']['Matrix'],
        $alm = laya['renders']['Render'],
        p7r35i = laya['utils']['RunDriver'],
        $ma9lb = laya['media']['Sound'],
        zvk6 = laya['media']['SoundChannel'],
        jfns1 = laya['media']['SoundManager'],
        o0b4cy = laya['display']['Stage'],
        kdvz = laya['net']['URL'],
        woe4 = laya['utils']['Utils'],
        dvh6kz = function () {
        function eo04w_() {}
        return ylmbc(eo04w_, 'laya.wx.mini.MiniAdpter'), eo04w_['getJson'] = function (hzk) {
            return JSON['parse'](hzk);
        }, eo04w_['init'] = function (jfxs, ow_40) {
            jfxs === void 0x0 && (jfxs = ![]), ow_40 === void 0x0 && (ow_40 = ![]);
            if (eo04w_['_inited']) return;
            eo04w_['window'] = window;
            if (eo04w_['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            eo04w_['_inited'] = !![], eo04w_['isZiYu'] = ow_40, eo04w_['isPosMsgYu'] = jfxs, eo04w_['EnvConfig'] = {}, !eo04w_['isZiYu'] && (e_4g['setNativeFileDir']('/layaairGame'), e_4g['existDir'](e_4g['fileNativeDir'], tdq58r['create'](eo04w_, eo04w_['onMkdirCallBack']))), eo04w_['window']['focus'] = function () {}, ew2['getUrlPath'] = function () {}, eo04w_['window']['logtime'] = function (_yco) {}, eo04w_['window']['alertTimeLog'] = function (fx1ug2) {}, eo04w_['window']['resetShareInfo'] = function () {}, eo04w_['window']['CanvasRenderingContext2D'] = function () {}, eo04w_['window']['CanvasRenderingContext2D']['prototype'] = eo04w_['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], eo04w_['window']['document']['body']['appendChild'] = function () {}, eo04w_['EnvConfig']['pixelRatioInt'] = 0x0, p7r35i['getPixelRatio'] = eo04w_['pixelRatio'], eo04w_['_preCreateElement'] = f1gx2['createElement'], f1gx2['createElement'] = eo04w_['createElement'], p7r35i['createShaderCondition'] = eo04w_['createShaderCondition'], woe4['parseXMLFromString'] = eo04w_['parseXMLFromString'], oewu4_['_createInputElement'] = wfg1u['_createInputElement'], eo04w_['EnvConfig']['load'] = o0ew_4['prototype']['load'], o0ew_4['prototype']['load'] = x2fg['prototype']['load'], eo04w_['isZiYu'] && jfxs && wx['onMessage'](function (o$c0b) {
                o$c0b['isLoad'] && (e_4g['ziyuFileData'][o$c0b['url']] = o$c0b['data']);
            });
        }, eo04w_['onMkdirCallBack'] = function (i75r3p, x2) {
            if (!i75r3p) e_4g['filesListObj'] = JSON['parse'](x2['data']);
        }, eo04w_['pixelRatio'] = function () {
            if (!eo04w_['EnvConfig']['pixelRatioInt']) try {
                var vzdhk6 = wx['getSystemInfoSync']();
                return eo04w_['EnvConfig']['pixelRatioInt'] = vzdhk6['pixelRatio'], vzdhk6 = vzdhk6, vzdhk6['pixelRatio'];
            } catch (sgxf21) {}
            return eo04w_['EnvConfig']['pixelRatioInt'];
        }, eo04w_['createElement'] = function (r8tqd) {
            if (r8tqd == 'canvas') {
                var c0yob4;
                return eo04w_['idx'] == 0x1 ? eo04w_['isZiYu'] ? (c0yob4 = sharedCanvas, c0yob4['style'] = {}) : c0yob4 = window['canvas'] : c0yob4 = window['wx']['createCanvas'](), eo04w_['idx']++, c0yob4;
            } else {
                if (r8tqd == 'textarea' || r8tqd == 'input') return eo04w_['onCreateInput'](r8tqd);else {
                    if (r8tqd == 'div') {
                        var kd86t = eo04w_['_preCreateElement'](r8tqd);
                        return kd86t['contains'] = function ($bcml) {
                            return null;
                        }, kd86t['removeChild'] = function (nfjvs) {}, kd86t;
                    } else return eo04w_['_preCreateElement'](r8tqd);
                }
            }
        }, eo04w_['onCreateInput'] = function (wu2e_) {
            var fx1g = eo04w_['_preCreateElement'](wu2e_);
            return fx1g['focus'] = wfg1u['wxinputFocus'], fx1g['blur'] = wfg1u['wxinputblur'], fx1g['style'] = {}, fx1g['value'] = 0x0, fx1g['parentElement'] = {}, fx1g['placeholder'] = {}, fx1g['type'] = {}, fx1g['setColor'] = function (f1s2j) {}, fx1g['setType'] = function (ylcmb) {}, fx1g['setFontFace'] = function (_y0co) {}, fx1g['addEventListener'] = function (g2u_) {}, fx1g['contains'] = function (g2wue1) {
                return null;
            }, fx1g['removeChild'] = function (q85rdt) {}, fx1g;
        }, eo04w_['createShaderCondition'] = function (hkqd6z) {
            var acml$b = this,
                s21gx = function () {
                var u1x2gf = hkqd6z;
                return acml$b[hkqd6z['replace']('this.', '')];
            };
            return s21gx;
        }, eo04w_['EnvConfig'] = null, eo04w_['window'] = null, eo04w_['_preCreateElement'] = null, eo04w_['_inited'] = ![], eo04w_['wxRequest'] = null, eo04w_['systemInfo'] = null, eo04w_['version'] = '0.0.1', eo04w_['isZiYu'] = ![], eo04w_['isPosMsgYu'] = ![], eo04w_['parseXMLFromString'] = function (cl$ba) {
            var vjznh, xfvjns;
            cl$ba = cl$ba['replace'](/>\s+</g, '><');
            try {
                vjznh = new window['Parser']['DOMParser']()['parseFromString'](cl$ba, 'text/xml');
            } catch (c$oy0b) {
                throw '需要引入xml解析库文件';
            }
            return vjznh;
        }, eo04w_['idx'] = 0x1, eo04w_;
    }(),
        v6nh = function () {
        function cy4_() {}
        ylmbc(cy4_, 'laya.wx.mini.MiniImage');
        var e_ou = cy4_['prototype'];
        return e_ou['_loadImage'] = function (o04byc) {
            var yboc$0 = this,
                _g4weu = ![];
            o04byc['indexOf']('layaNativeDir/') == -0x1 && (_g4weu = !![], o04byc = kdvz['formatURL'](o04byc));
            if (!e_4g['getFileInfo'](o04byc)) {
                if (o04byc['indexOf']('http://') != -0x1 || o04byc['indexOf']('https://') != -0x1) e_4g['downImg'](o04byc, new tdq58r(cy4_, cy4_['onDownImgCallBack'], [o04byc, yboc$0]), o04byc);else cy4_['onCreateImage'](o04byc, yboc$0, !![]);
            } else cy4_['onCreateImage'](o04byc, yboc$0, !_g4weu);
        }, cy4_['onDownImgCallBack'] = function (yco_0, xf2js1, w1geu2) {
            if (!w1geu2) cy4_['onCreateImage'](yco_0, xf2js1);else xf2js1['onError'](null);
        }, cy4_['onCreateImage'] = function (weo4u, ouw_4e, y4_0) {
            y4_0 === void 0x0 && (y4_0 = ![]);
            var q85rt;
            if (!y4_0) {
                var r537pi = e_4g['getFileInfo'](weo4u),
                    vnzjhs = r537pi['md5'];
                q85rt = e_4g['getFileNativePath'](vnzjhs);
            } else q85rt = weo4u;
            if (ouw_4e['imgCache'] == null) ouw_4e['imgCache'] = {};
            var sxhjn;
            function n1x() {
                sxhjn['onload'] = null, sxhjn['onerror'] = null, delete ouw_4e['imgCache'][weo4u];
            }
            ;
            var kqzd6h = function () {
                n1x(), ouw_4e['onLoaded'](sxhjn);
            },
                jvxsnf = function () {
                n1x(), ouw_4e['event']('error', 'Load image failed');
            };
            ouw_4e['_type'] == 'nativeimage' ? (sxhjn = new f1gx2['window']['Image'](), sxhjn['crossOrigin'] = '', sxhjn['onload'] = kqzd6h, sxhjn['onerror'] = jvxsnf, sxhjn['src'] = q85rt, ouw_4e['imgCache'][weo4u] = sxhjn) : new alm$9['create'](q85rt, {
                'onload': kqzd6h,
                'onerror': jvxsnf,
                'onCreate': function (xnhvs) {
                    sxhjn = xnhvs, ouw_4e['imgCache'][weo4u] = xnhvs;
                }
            });
        }, cy4_;
    }(),
        wfg1u = function () {
        function zn6kv() {}
        return ylmbc(zn6kv, 'laya.wx.mini.MiniInput'), zn6kv['_createInputElement'] = function () {
            oewu4_['_initInput'](oewu4_['area'] = f1gx2['createElement']('textarea')), oewu4_['_initInput'](oewu4_['input'] = f1gx2['createElement']('input')), oewu4_['inputContainer'] = f1gx2['createElement']('div'), oewu4_['inputContainer']['style']['position'] = 'absolute', oewu4_['inputContainer']['style']['zIndex'] = 0x186a0, f1gx2['container']['appendChild'](oewu4_['inputContainer']), oewu4_['inputContainer']['setPos'] = function (e0oy_4, d6qr) {
                oewu4_['inputContainer']['style']['left'] = e0oy_4 + 'px', oewu4_['inputContainer']['style']['top'] = d6qr + 'px';
            }, ew2['stage']['on']('resize', null, zn6kv['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (xfvnjs) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), jfns1['_soundClass'] = z6hkdv, jfns1['_musicClass'] = z6hkdv, window['_videoClass'] = alm$c;
        }, zn6kv['_onStageResize'] = function () {
            var nvhzkj = ew2['stage']['_canvasTransform']['identity']();
            nvhzkj['scale'](f1gx2['width'] / $alm['canvas']['width'] / p7r35i['getPixelRatio'](), f1gx2['height'] / $alm['canvas']['height'] / p7r35i['getPixelRatio']());
        }, zn6kv['wxinputFocus'] = function (q8rt75) {
            var oey04 = oewu4_['inputElement']['target'];
            if (oey04 && !oey04['editable']) return;
            dvh6kz['window']['wx']['offKeyboardConfirm'](), dvh6kz['window']['wx']['offKeyboardInput'](), dvh6kz['window']['wx']['showKeyboard']({
                'defaultValue': oey04['text'],
                'maxLength': oey04['maxChars'],
                'multiple': oey04['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (boy) {},
                'fail': function (t3r578) {}
            }), dvh6kz['window']['wx']['onKeyboardConfirm'](function (wge12) {
                var oy0c4b = wge12 ? wge12['value'] : '';
                oey04['text'] = oy0c4b, oey04['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), dvh6kz['window']['wx']['onKeyboardInput'](function (d6tk8) {
                var mbl$ca = d6tk8 ? d6tk8['value'] : '';
                if (!oey04['multiline']) {
                    if (mbl$ca['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                oey04['text'] = mbl$ca, oey04['event']('input');
            });
        }, zn6kv['inputEnter'] = function () {
            oewu4_['inputElement']['target']['focus'] = ![];
        }, zn6kv['wxinputblur'] = function () {
            zn6kv['hideKeyboard']();
        }, zn6kv['hideKeyboard'] = function () {
            dvh6kz['window']['wx']['offKeyboardConfirm'](), dvh6kz['window']['wx']['offKeyboardInput'](), dvh6kz['window']['wx']['hideKeyboard']({
                'success': function (nxsjf1) {
                    console['log']('隐藏键盘');
                },
                'fail': function (xhvnsj) {
                    console['log']('隐藏键盘出错:' + (xhvnsj ? xhvnsj['errMsg'] : ''));
                }
            });
        }, zn6kv;
    }(),
        x2fg = function () {
        function sjnfxv() {}
        ylmbc(sjnfxv, 'laya.wx.mini.MiniLoader');
        var _u4eg = sjnfxv['prototype'];
        return _u4eg['load'] = function (kzhn6, uo_e, uew4o_, znvjh, r6q8dt) {
            uew4o_ === void 0x0 && (uew4o_ = !![]), r6q8dt === void 0x0 && (r6q8dt = ![]);
            var uow4e = this;
            uow4e['_url'] = kzhn6;
            if (kzhn6['indexOf']('data:image') === 0x0) uow4e['_type'] = uo_e = 'image';else uow4e['_type'] = uo_e || (uo_e = uow4e['getTypeFromUrl'](kzhn6));
            uow4e['_cache'] = uew4o_, uow4e['_data'] = null;
            var q68dtr = 'ascii';
            if (kzhn6['indexOf']('.fnt') != -0x1) q68dtr = 'utf8';else uo_e == 'arraybuffer' && (q68dtr = '');
            ;
            var x21js = woe4['getFileExtension'](kzhn6);
            if (sjnfxv['_fileTypeArr']['indexOf'](x21js) != -0x1) dvh6kz['EnvConfig']['load']['call'](this, kzhn6, uo_e, uew4o_, znvjh, r6q8dt);else {
                if (!e_4g['getFileInfo'](kzhn6)) {
                    if (kzhn6['indexOf']('layaNativeDir/') != -0x1) {
                        if (dvh6kz['isZiYu']) {
                            var rdtq85 = e_4g['ziyuFileData'][kzhn6];
                            uow4e['onLoaded'](rdtq85);
                            return;
                        } else {
                            cosnole['log']('read read'), e_4g['read'](kzhn6, q68dtr, new tdq58r(sjnfxv, sjnfxv['onReadNativeCallBack'], [q68dtr, kzhn6, uo_e, uew4o_, znvjh, r6q8dt, uow4e]));
                            return;
                        }
                    }
                    if (kdvz['rootPath'] == '') var tqd68r = kzhn6;else tqd68r = kzhn6['split'](kdvz['rootPath'])[0x0];
                    kzhn6['indexOf']('http://') != -0x1 || kzhn6['indexOf']('https://') != -0x1 ? dvh6kz['EnvConfig']['load']['call'](uow4e, kzhn6, uo_e, uew4o_, znvjh, r6q8dt) : e_4g['readFile'](tqd68r, q68dtr, new tdq58r(sjnfxv, sjnfxv['onReadNativeCallBack'], [q68dtr, kzhn6, uo_e, uew4o_, znvjh, r6q8dt, uow4e]), kzhn6);
                } else dvh6kz['EnvConfig']['load']['call'](this, kzhn6, uo_e, uew4o_, znvjh, r6q8dt);
            }
        }, _u4eg['resMgrLoad'] = function (b9a$m, rdq6, cm$lb, fxj, alb, qk8dt, y_oc4) {
            cm$lb === void 0x0 && (cm$lb = 0x0), fxj === void 0x0 && (fxj = ![]), alb === void 0x0 && (alb = ![]), qk8dt === void 0x0 && (qk8dt = 0x0), y_oc4 === void 0x0 && (y_oc4 = 0x3), b9a$m['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', b9a$m), dvh6kz['EnvConfig']['resMgrLoad'](b9a$m, (yob0c4, x12fug, c4_y) => {
                sjnfxv['prototype']['resMgrLoadCallBack'](yob0c4, x12fug, c4_y, rdq6);
            }, cm$lb, fxj, alb, qk8dt, y_oc4);
        }, _u4eg['resMgrLoadCallBack'] = function (ue2w_g, egu21w, vznhs, ge4_) {
            console['log']('buff:::', ue2w_g, vznhs, e_4g['fileNativeDir'] + '///' + e_4g['fileListName']), ge4_(ue2w_g, egu21w, vznhs);
        }, _u4eg['clearRes'] = function (h6zd, mlb9a$) {
            mlb9a$ === void 0x0 && (mlb9a$ = ![]);
            var kdz8q6 = this;
            kdz8q6['clearRes'](h6zd, mlb9a$);
            var xsj12 = e_4g['getFileInfo'](h6zd);
            if (xsj12 && (h6zd['indexOf']('http://') != -0x1 || h6zd['indexOf']('https://') != -0x1)) {
                var y0bo$c = xsj12['md5'],
                    kzq8d = e_4g['getFileNativePath'](y0bo$c);
                e_4g['remove'](kzq8d);
            }
        }, sjnfxv['onReadNativeCallBack'] = function (kvzhd, ewug4_, i753pr, jnf1x, g2w, hnszvj, k6q8td, $bmyc, yclb0) {
            jnf1x === void 0x0 && (jnf1x = !![]), hnszvj === void 0x0 && (hnszvj = ![]), $bmyc === void 0x0 && ($bmyc = 0x0);
            if (!$bmyc) {
                var t78q;
                if (i753pr == 'json' || i753pr == 'atlas') t78q = dvh6kz['getJson'](yclb0['data']);else i753pr == 'xml' ? t78q = woe4['parseXMLFromString'](yclb0['data']) : t78q = yclb0['data'];
                k6q8td['onLoaded'](t78q), !dvh6kz['isZiYu'] && dvh6kz['isPosMsgYu'] && i753pr != 'arraybuffer' && wx['postMessage']({
                    'url': ewug4_,
                    'data': t78q,
                    'isLoad': !![]
                });
            } else $bmyc == 0x1 && dvh6kz['EnvConfig']['load']['call'](k6q8td, ewug4_, i753pr, jnf1x, g2w, hnszvj);
        }, ly$m(sjnfxv, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), sjnfxv;
    }(),
        e_4g = function (vnjs) {
        function kvz6d() {
            kvz6d['__super']['call'](this);
            ;
        }
        return ylmbc(kvz6d, 'laya.wx.mini.MiniFileMgr', vnjs), kvz6d['isLoadFile'] = function (bl9$a) {
            return kvz6d['_fileTypeArr']['indexOf'](bl9$a) != -0x1 ? !![] : ![];
        }, kvz6d['getFileInfo'] = function (w4geu_) {
            var k6vdz = w4geu_['split']('?')[0x0],
                g_4uew = kvz6d['filesListObj'][k6vdz];
            if (g_4uew == null) return null;else return g_4uew;
            return null;
        }, kvz6d['onFileUpdate'] = function ($mbca, ip5) {
            var ab$lcm = $mbca['split']('/'),
                cboy40 = ab$lcm[ab$lcm['length'] - 0x1],
                kv6hn = kvz6d['getFileInfo'](ip5);
            if (kv6hn == null) kvz6d['onSaveFile'](ip5, cboy40);else {
                if (kv6hn['readyUrl'] != ip5) kvz6d['remove'](cboy40, ip5);
            }
        }, kvz6d['exits'] = function (hjsnv, jnhz) {
            var qd86t = kvz6d['getFileNativePath'](hjsnv);
            kvz6d['fs']['getFileInfo']({
                'filePath': qd86t,
                'success': function (o0y4_) {
                    jnhz != null && jnhz['runWith']([0x0, o0y4_]);
                },
                'fail': function (pir57) {
                    jnhz != null && jnhz['runWith']([0x1, pir57]);
                }
            });
        }, kvz6d['read'] = function (wu4_oe, p73r, w4_o, d8q6kt) {
            p73r === void 0x0 && (p73r = 'ascill'), d8q6kt === void 0x0 && (d8q6kt = '');
            var hqz6dk;
            d8q6kt != '' ? hqz6dk = kvz6d['getFileNativePath'](wu4_oe) : hqz6dk = wu4_oe, kvz6d['fs']['readFile']({
                'filePath': hqz6dk,
                'encoding': p73r,
                'success': function (d5rt8) {
                    w4_o != null && w4_o['runWith']([0x0, d5rt8]);
                },
                'fail': function (r8qt75) {
                    if (r8qt75 && d8q6kt != '') kvz6d['down'](d8q6kt, p73r, w4_o, d8q6kt);else w4_o != null && w4_o['runWith']([0x1]);
                }
            });
        }, kvz6d['readNativeFile'] = function (vjhnx, zk6hvd) {
            kvz6d['fs']['readFile']({
                'filePath': vjhnx,
                'encoding': '',
                'success': function (mlc$yb) {
                    zk6hvd != null && zk6hvd['runWith']([0x0]);
                },
                'fail': function (ip735r) {
                    zk6hvd != null && zk6hvd['runWith']([0x1]);
                }
            });
        }, kvz6d['down'] = function (y40_oe, _ew0o, d68tq, oy0cb$) {
            _ew0o === void 0x0 && (_ew0o = 'ascill'), oy0cb$ === void 0x0 && (oy0cb$ = '');
            var bc$aml = kvz6d['getFileNativePath'](oy0cb$),
                y$ob0 = kvz6d['wxdown']({
                'url': y40_oe,
                'filePath': bc$aml,
                'success': function (w_ueg4) {
                    if (w_ueg4['statusCode'] === 0xc8) kvz6d['readFile'](w_ueg4['filePath'], _ew0o, d68tq, oy0cb$);
                },
                'fail': function (t86rq) {
                    d68tq != null && d68tq['runWith']([0x1, t86rq]);
                }
            });
            y$ob0['onProgressUpdate'](function (yb$oc0) {
                d68tq != null && d68tq['runWith']([0x2, yb$oc0['progress']]);
            });
        }, kvz6d['readFile'] = function (kz6q8, qz6d8k, l$0byc, d8trq5) {
            qz6d8k === void 0x0 && (qz6d8k = 'ascill'), d8trq5 === void 0x0 && (d8trq5 = ''), kvz6d['fs']['readFile']({
                'filePath': kz6q8,
                'encoding': qz6d8k,
                'success': function (j1nxsf) {
                    if (kz6q8['indexOf']('http://') != -0x1 || kz6q8['indexOf']('https://') != -0x1) kvz6d['onFileUpdate'](kz6q8, d8trq5);
                    l$0byc != null && l$0byc['runWith']([0x0, j1nxsf]);
                },
                'fail': function (dz68kq) {
                    if (dz68kq) l$0byc != null && l$0byc['runWith']([0x1, dz68kq]);
                }
            });
        }, kvz6d['downImg'] = function (xfjs21, tdqr, vxjnsf) {
            vxjnsf === void 0x0 && (vxjnsf = '');
            var ma$l9 = kvz6d['wxdown']({
                'url': xfjs21,
                'success': function (hnsjx) {
                    hnsjx['statusCode'] === 0xc8 && kvz6d['copyFile'](hnsjx['tempFilePath'], vxjnsf, tdqr);
                },
                'fail': function (tr53p7) {
                    tdqr != null && tdqr['runWith']([0x1, tr53p7]);
                }
            });
        }, kvz6d['copyFile'] = function (k6vhz, njsvzh, z6dkq) {
            var sxhn = k6vhz['split']('/'),
                tr8753 = sxhn[sxhn['length'] - 0x1],
                u4 = njsvzh['split']('?')[0x0],
                qh6dk = kvz6d['getFileInfo'](njsvzh),
                h6kvd = kvz6d['getFileNativePath'](tr8753);
            kvz6d['fs']['copyFile']({
                'srcPath': k6vhz,
                'destPath': h6kvd,
                'success': function (boc04y) {
                    if (!qh6dk) kvz6d['onSaveFile'](njsvzh, tr8753), z6dkq != null && z6dkq['runWith']([0x0]);else {
                        if (qh6dk['readyUrl'] != njsvzh) kvz6d['remove'](tr8753, njsvzh, z6dkq);
                    }
                },
                'fail': function (lm$9a) {
                    z6dkq != null && z6dkq['runWith']([0x1, lm$9a]);
                }
            });
        }, kvz6d['getFileNativePath'] = function (ablc) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + ablc;
        }, kvz6d['remove'] = function (yc$o0b, alb9$m, tk8qd) {
            alb9$m === void 0x0 && (alb9$m = '');
            var vxjn = kvz6d['getFileInfo'](alb9$m),
                fxs2g = kvz6d['getFileNativePath'](vxjn['md5']);
            ew2['loader']['clearRes'](vxjn['readyUrl']), kvz6d['fs']['unlink']({
                'filePath': fxs2g,
                'success': function (gw_2u) {
                    if (alb9$m != '') kvz6d['onSaveFile'](alb9$m, yc$o0b);
                    tk8qd != null && tk8qd['runWith']([0x0]);
                },
                'fail': function (gu21fx) {}
            });
        }, kvz6d['onSaveFile'] = function (z6hdq, vzhkd) {
            var hvsnj = z6hdq['split']('?')[0x0];
            kvz6d['filesListObj'][hvsnj] = {
                'md5': vzhkd,
                'readyUrl': z6hdq
            }, kvz6d['fs']['writeFile']({
                'filePath': kvz6d['fileNativeDir'] + '/' + kvz6d['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](kvz6d['filesListObj']),
                'success': function (hznvkj) {
                    console['log']('写入测试测试成功：', hznvkj);
                },
                'fail': function (s1jf) {
                    console['log']('写入测试测试失败：', s1jf);
                }
            });
        }, kvz6d['existDir'] = function (g2ewu1, $lbc0) {
            kvz6d['fs']['mkdir']({
                'dirPath': g2ewu1,
                'success': function (e4gu) {
                    $lbc0 != null && $lbc0['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (tr78) {
                    if (tr78['errMsg']['indexOf']('file already exists') != -0x1) kvz6d['readSync'](kvz6d['fileListName'], 'utf8', $lbc0);else $lbc0 != null && $lbc0['runWith']([0x1, tr78]);
                }
            });
        }, kvz6d['readSync'] = function (e4ugw, _4cyo, zshv, nkjh) {
            _4cyo === void 0x0 && (_4cyo = 'ascill'), nkjh === void 0x0 && (nkjh = '');
            var $lcmy = kvz6d['getFileNativePath'](e4ugw),
                nhs;
            try {
                nhs = kvz6d['fs']['readFileSync']($lcmy), zshv != null && zshv['runWith']([0x0, { 'data': nhs }]);
            } catch (_2gew) {
                zshv != null && zshv['runWith']([0x1]);
            }
        }, kvz6d['readCache'] = function () {}, kvz6d['writeCache'] = function (g12w) {
            var d6zk = readyUrl['split']('?')[0x0];
            kvz6d['filesListObj'][d6zk] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, kvz6d['fs']['writeFile']({
                'filePath': kvz6d['fileNativeDir'] + '/' + kvz6d['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](kvz6d['filesListObj']),
                'success': function (t7qr5) {},
                'fail': function (aml9b) {}
            });
        }, kvz6d['setNativeFileDir'] = function (p5tr7) {
            kvz6d['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + p5tr7;
        }, kvz6d['filesListObj'] = {}, kvz6d['fileNativeDir'] = null, kvz6d['fileListName'] = 'layaairfiles.txt', kvz6d['ziyuFileData'] = {}, ly$m(kvz6d, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), kvz6d;
    }(mlb$cy),
        z6hkdv = function (nshvjz) {
        function xg1u() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], xg1u['__super']['call'](this), this['_sound'] = xg1u['_createSound'](), this['_chanell'] = new e12wug(this['_sound']);
        }
        ylmbc(xg1u, 'laya.wx.mini.MiniSound', nshvjz);
        var uweo = xg1u['prototype'];
        return uweo['load'] = function (g2sx1) {
            var trp753 = this;
            g2sx1 = kdvz['formatURL'](g2sx1), this['url'] = g2sx1;
            if (xg1u['_audioCache'][g2sx1]) {
                this['event']('complete');
                return;
            }
            function _o4weu() {
                if (xg1u['_null'] != undefined) trp753['_sound']['onCanplay'](xg1u['_null']), trp753['_sound']['onError'](xg1u['_null']);else try {
                    trp753['_sound']['onCanplay'](null), trp753['_sound']['onError'](null), xg1u['_null'] = null;
                } catch (byc$) {
                    console['warn']('[wxmini] _clearSound:' + byc$), trp753['_sound']['onCanplay'](wgue21), trp753['_sound']['onError'](wgue21), xg1u['_null'] = wgue21;
                }
            }
            function mybcl$() {
                uweo4['loaded'] = !![], uweo4['event']('complete'), xg1u['_audioCache'][uweo4['url']] = uweo4;
            }
            function ipr75($9malb) {
                console['error']('errCode=' + $9malb['errCode'] + '  errMsg=' + $9malb['errMsg']), uweo4['event']('error');
            }
            function wgue21() {}
            this['_sound']['onCanplay'](mybcl$), this['_sound']['onError'](ipr75), this['_sound']['src'] = g2sx1;
            var uweo4 = this;
        }, uweo['play'] = function (clabm$, b$alm) {
            clabm$ === void 0x0 && (clabm$ = 0x0), b$alm === void 0x0 && (b$alm = 0x0);
            var rt5387, pr53i;
            if (this['url'] == jfns1['_tMusic']) {
                if (!xg1u['_musicAudio']) xg1u['_musicAudio'] = this['_sound'];
                rt5387 = xg1u['_musicAudio'], pr53i = this['_chanell'];
            } else rt5387 = this['_sound'], pr53i = this['_chanell'];
            return rt5387['src'] = this['url'], rt5387['startTime'] = 0x0, pr53i['isStopped'] && (pr53i['url'] = this['url'], pr53i['loops'] = b$alm, pr53i['startTime'] = clabm$, pr53i['play'](), jfns1['addChannel'](pr53i)), pr53i;
        }, uweo['dispose'] = function () {
            var s12gx = xg1u['_audioCache'][this['url']];
            s12gx && (s12gx['src'] = '', delete xg1u['_audioCache'][this['url']]);
        }, by0$l(0x0, uweo, 'duration', function () {
            return this['_sound']['duration'];
        }), xg1u['_createSound'] = function () {
            xg1u['_id']++;
            var oe0_w4 = dvh6kz['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return oe0_w4;
        }, xg1u['_musicAudio'] = null, xg1u['_id'] = 0x0, xg1u['_audioCache'] = {}, xg1u['_null'] = undefined, xg1u;
    }(mlb$cy),
        e12wug = function (jf12x) {
        function w_2ue(fx2sj) {
            this['_audio'] = null, this['_onEnd'] = null, w_2ue['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = fx2sj, this['_onEnd'] = woe4['bind'](this['__onEnd'], this), fx2sj['onEnded'](this['_onEnd']);
        }
        ylmbc(w_2ue, 'laya.wx.mini.MiniSoundChannel', jf12x);
        var yco4_0 = w_2ue['prototype'];
        return yco4_0['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (ew2['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, yco4_0['__onNull'] = function () {}, yco4_0['play'] = function () {
            this['isStopped'] = ![], jfns1['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, yco4_0['stop'] = function () {
            this['isStopped'] = !![], jfns1['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, yco4_0['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, yco4_0['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], jfns1['addChannel'](this), this['_audio']['play']();
        }, by0$l(0x0, yco4_0, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), by0$l(0x0, yco4_0, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), by0$l(0x0, yco4_0, 'volume', function () {
            return 0x1;
        }, function (hszjnv) {}), w_2ue['_null'] = undefined, w_2ue;
    }(zvk6),
        alm$c = function () {
        function d6kqzh() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = dvh6kz['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        ylmbc(d6kqzh, 'laya.wx.mini.MiniVideo');
        var pt37r = d6kqzh['prototype'];
        return pt37r['on'] = function (jvsn, $cy0ob, x12gu) {
            if (jvsn == 'loadedmetadata') this['onPlayFunc'] = x12gu['bind']($cy0ob), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else jvsn == 'ended' && (this['onEndedFunC'] = x12gu['bind']($cy0ob), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, pt37r['onTimeUpdateFunc'] = function (al$m9b) {
            this['position'] = al$m9b['position'], this['_duration'] = al$m9b['duration'];
        }, pt37r['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, pt37r['onended'] = function (nfx1js, $bylmc) {
            this['onEndedFunC'] = $bylmc['bind'](nfx1js), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, pt37r['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, pt37r['off'] = function (sxhvjn, gw_e4, b0yoc) {
            if (sxhvjn == 'loadedmetadata') this['onPlayFunc'] = b0yoc['bind'](gw_e4), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else sxhvjn == 'ended' && (this['onEndedFunC'] = b0yoc['bind'](gw_e4), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, pt37r['load'] = function (ouew) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = ouew;
        }, pt37r['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, pt37r['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, pt37r['size'] = function (vsx, w1gue2) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = vsx, this['videoElement']['height'] = w1gue2;
        }, pt37r['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, pt37r['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, by0$l(0x0, pt37r, 'duration', function () {
            return this['_duration'];
        }), by0$l(0x0, pt37r, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (la$m9) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = la$m9;
        }), by0$l(0x0, pt37r, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), by0$l(0x0, pt37r, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), by0$l(0x0, pt37r, 'ended', function () {
            return this['videoend'];
        }), by0$l(0x0, pt37r, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (_04) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = _04;
        }), by0$l(0x0, pt37r, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (rqd86t) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = rqd86t;
        }), by0$l(0x0, pt37r, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (_4w0) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = _4w0;
        }), by0$l(0x0, pt37r, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), by0$l(0x0, pt37r, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (fu2w1g) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = fu2w1g;
        }), by0$l(0x0, pt37r, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (kdvh6z) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = kdvh6z;
        }), by0$l(0x0, pt37r, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), by0$l(0x0, pt37r, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (jhsznv) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = jhsznv;
        }), by0$l(0x0, pt37r, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (o4w) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = o4w;
        }), by0$l(0x0, pt37r, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (d6hvzk) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = d6hvzk;
        }), d6kqzh;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var tdq86 in Laya) {
        var zsjhv = Laya[tdq86];
        zsjhv && zsjhv['__isclass'] && (exports[tdq86] = zsjhv);
    }
});