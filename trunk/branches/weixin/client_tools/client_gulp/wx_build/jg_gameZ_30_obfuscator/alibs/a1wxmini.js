var c = wx.$a;
(function (window, document, u_wge4) {
    var vkdz6 = u_wge4['un'],
        jfnsv = u_wge4['uns'],
        sjvzh = u_wge4['static'],
        vzjhs = u_wge4['class'],
        wgue2_ = u_wge4['getset'],
        lcb0y$ = u_wge4['__newvec'],
        c$lb0 = laya['utils']['Browser'],
        jfn1s = laya['events']['Event'],
        sfgx12 = laya['events']['EventDispatcher'],
        k86qdt = laya['resource']['HTMLImage'],
        qtr6 = laya['utils']['Handler'],
        l$bacm = laya['display']['Input'],
        a$b9m = laya['net']['Loader'],
        eo_04y = laya['maths']['Matrix'],
        xu2gf1 = laya['renders']['Render'],
        b$malc = laya['utils']['RunDriver'],
        xnj1 = laya['media']['Sound'],
        jvhnz = laya['media']['SoundChannel'],
        dhv6zk = laya['media']['SoundManager'],
        zq8d6k = laya['display']['Stage'],
        aml9b$ = laya['net']['URL'],
        jxnvs = laya['utils']['Utils'],
        x1sj2 = function () {
        function eo4_0y() {}
        return vzjhs(eo4_0y, 'laya.wx.mini.MiniAdpter'), eo4_0y['getJson'] = function (hq6d) {
            return JSON['parse'](hq6d);
        }, eo4_0y['init'] = function (ob$c0y, u1fg2) {
            ob$c0y === void 0x0 && (ob$c0y = ![]), u1fg2 === void 0x0 && (u1fg2 = ![]);
            if (eo4_0y['_inited']) return;
            eo4_0y['window'] = window;
            if (eo4_0y['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            eo4_0y['_inited'] = !![], eo4_0y['isZiYu'] = u1fg2, eo4_0y['isPosMsgYu'] = ob$c0y, eo4_0y['EnvConfig'] = {}, !eo4_0y['isZiYu'] && (hjnk['setNativeFileDir']('/layaairGame'), hjnk['existDir'](hjnk['fileNativeDir'], qtr6['create'](eo4_0y, eo4_0y['onMkdirCallBack']))), eo4_0y['window']['focus'] = function () {}, u_wge4['getUrlPath'] = function () {}, eo4_0y['window']['logtime'] = function (wge_2) {}, eo4_0y['window']['alertTimeLog'] = function (wf21) {}, eo4_0y['window']['resetShareInfo'] = function () {}, eo4_0y['window']['CanvasRenderingContext2D'] = function () {}, eo4_0y['window']['CanvasRenderingContext2D']['prototype'] = eo4_0y['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], eo4_0y['window']['document']['body']['appendChild'] = function () {}, eo4_0y['EnvConfig']['pixelRatioInt'] = 0x0, b$malc['getPixelRatio'] = eo4_0y['pixelRatio'], eo4_0y['_preCreateElement'] = c$lb0['createElement'], c$lb0['createElement'] = eo4_0y['createElement'], b$malc['createShaderCondition'] = eo4_0y['createShaderCondition'], jxnvs['parseXMLFromString'] = eo4_0y['parseXMLFromString'], l$bacm['_createInputElement'] = _eo4w['_createInputElement'], eo4_0y['EnvConfig']['load'] = a$b9m['prototype']['load'], a$b9m['prototype']['load'] = o0yc_['prototype']['load'], eo4_0y['isZiYu'] && ob$c0y && wx['onMessage'](function (ue12wg) {
                ue12wg['isLoad'] && (hjnk['ziyuFileData'][ue12wg['url']] = ue12wg['data']);
            });
        }, eo4_0y['onMkdirCallBack'] = function (t853r, i3r75) {
            if (!t853r) hjnk['filesListObj'] = JSON['parse'](i3r75['data']);
        }, eo4_0y['pixelRatio'] = function () {
            if (!eo4_0y['EnvConfig']['pixelRatioInt']) try {
                var _4o0ye = wx['getSystemInfoSync']();
                return eo4_0y['EnvConfig']['pixelRatioInt'] = _4o0ye['pixelRatio'], _4o0ye = _4o0ye, _4o0ye['pixelRatio'];
            } catch (vhz) {}
            return eo4_0y['EnvConfig']['pixelRatioInt'];
        }, eo4_0y['createElement'] = function (t8k6d) {
            if (t8k6d == 'canvas') {
                var k6nz;
                return eo4_0y['idx'] == 0x1 ? eo4_0y['isZiYu'] ? (k6nz = sharedCanvas, k6nz['style'] = {}) : k6nz = window['canvas'] : k6nz = window['wx']['createCanvas'](), eo4_0y['idx']++, k6nz;
            } else {
                if (t8k6d == 'textarea' || t8k6d == 'input') return eo4_0y['onCreateInput'](t8k6d);else {
                    if (t8k6d == 'div') {
                        var w40_eo = eo4_0y['_preCreateElement'](t8k6d);
                        return w40_eo['contains'] = function (s2g1xf) {
                            return null;
                        }, w40_eo['removeChild'] = function (e21gu) {}, w40_eo;
                    } else return eo4_0y['_preCreateElement'](t8k6d);
                }
            }
        }, eo4_0y['onCreateInput'] = function (eu1) {
            var c0lb$ = eo4_0y['_preCreateElement'](eu1);
            return c0lb$['focus'] = _eo4w['wxinputFocus'], c0lb$['blur'] = _eo4w['wxinputblur'], c0lb$['style'] = {}, c0lb$['value'] = 0x0, c0lb$['parentElement'] = {}, c0lb$['placeholder'] = {}, c0lb$['type'] = {}, c0lb$['setColor'] = function (coy_) {}, c0lb$['setType'] = function (dqkz86) {}, c0lb$['setFontFace'] = function (zsnv) {}, c0lb$['addEventListener'] = function (khzv) {}, c0lb$['contains'] = function (ew0) {
                return null;
            }, c0lb$['removeChild'] = function (vnjzh) {}, c0lb$;
        }, eo4_0y['createShaderCondition'] = function (u_weo) {
            var rd8q6 = this,
                y4bc0 = function () {
                var _y40co = u_weo;
                return rd8q6[u_weo['replace']('this.', '')];
            };
            return y4bc0;
        }, eo4_0y['EnvConfig'] = null, eo4_0y['window'] = null, eo4_0y['_preCreateElement'] = null, eo4_0y['_inited'] = ![], eo4_0y['wxRequest'] = null, eo4_0y['systemInfo'] = null, eo4_0y['version'] = '0.0.1', eo4_0y['isZiYu'] = ![], eo4_0y['isPosMsgYu'] = ![], eo4_0y['parseXMLFromString'] = function (ma$lc) {
            var _eguw4, wg_eu;
            ma$lc = ma$lc['replace'](/>\s+</g, '><');
            try {
                _eguw4 = new window['Parser']['DOMParser']()['parseFromString'](ma$lc, 'text/xml');
            } catch (shnvj) {
                throw '需要引入xml解析库文件';
            }
            return _eguw4;
        }, eo4_0y['idx'] = 0x1, eo4_0y;
    }(),
        cmyl$b = function () {
        function ns1xj() {}
        vzjhs(ns1xj, 'laya.wx.mini.MiniImage');
        var nvh6k = ns1xj['prototype'];
        return nvh6k['_loadImage'] = function ($mab) {
            var sxg2f = this,
                by0oc = ![];
            $mab['indexOf']('layaNativeDir/') == -0x1 && (by0oc = !![], $mab = aml9b$['formatURL']($mab));
            if (!hjnk['getFileInfo']($mab)) {
                if ($mab['indexOf']('http://') != -0x1 || $mab['indexOf']('https://') != -0x1) hjnk['downImg']($mab, new qtr6(ns1xj, ns1xj['onDownImgCallBack'], [$mab, sxg2f]), $mab);else ns1xj['onCreateImage']($mab, sxg2f, !![]);
            } else ns1xj['onCreateImage']($mab, sxg2f, !by0oc);
        }, ns1xj['onDownImgCallBack'] = function (w1ug2e, we_u2, gx1) {
            if (!gx1) ns1xj['onCreateImage'](w1ug2e, we_u2);else we_u2['onError'](null);
        }, ns1xj['onCreateImage'] = function (hkn6, by$l, ug4w_e) {
            ug4w_e === void 0x0 && (ug4w_e = ![]);
            var d6kq;
            if (!ug4w_e) {
                var z6qhk = hjnk['getFileInfo'](hkn6),
                    yml$b = z6qhk['md5'];
                d6kq = hjnk['getFileNativePath'](yml$b);
            } else d6kq = hkn6;
            if (by$l['imgCache'] == null) by$l['imgCache'] = {};
            var xf1j2;
            function vxsjnf() {
                xf1j2['onload'] = null, xf1j2['onerror'] = null, delete by$l['imgCache'][hkn6];
            }
            ;
            var u1gew = function () {
                vxsjnf(), by$l['onLoaded'](xf1j2);
            },
                s2xg = function () {
                vxsjnf(), by$l['event']('error', 'Load image failed');
            };
            by$l['_type'] == 'nativeimage' ? (xf1j2 = new c$lb0['window']['Image'](), xf1j2['crossOrigin'] = '', xf1j2['onload'] = u1gew, xf1j2['onerror'] = s2xg, xf1j2['src'] = d6kq, by$l['imgCache'][hkn6] = xf1j2) : new k86qdt['create'](d6kq, {
                'onload': u1gew,
                'onerror': s2xg,
                'onCreate': function (yco_0) {
                    xf1j2 = yco_0, by$l['imgCache'][hkn6] = yco_0;
                }
            });
        }, ns1xj;
    }(),
        _eo4w = function () {
        function zjvnhs() {}
        return vzjhs(zjvnhs, 'laya.wx.mini.MiniInput'), zjvnhs['_createInputElement'] = function () {
            l$bacm['_initInput'](l$bacm['area'] = c$lb0['createElement']('textarea')), l$bacm['_initInput'](l$bacm['input'] = c$lb0['createElement']('input')), l$bacm['inputContainer'] = c$lb0['createElement']('div'), l$bacm['inputContainer']['style']['position'] = 'absolute', l$bacm['inputContainer']['style']['zIndex'] = 0x186a0, c$lb0['container']['appendChild'](l$bacm['inputContainer']), l$bacm['inputContainer']['setPos'] = function (xug1f2, nhsvj) {
                l$bacm['inputContainer']['style']['left'] = xug1f2 + 'px', l$bacm['inputContainer']['style']['top'] = nhsvj + 'px';
            }, u_wge4['stage']['on']('resize', null, zjvnhs['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (clby0$) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), dhv6zk['_soundClass'] = vsxfj, dhv6zk['_musicClass'] = vsxfj, window['_videoClass'] = u4wge;
        }, zjvnhs['_onStageResize'] = function () {
            var l$b9 = u_wge4['stage']['_canvasTransform']['identity']();
            l$b9['scale'](c$lb0['width'] / xu2gf1['canvas']['width'] / b$malc['getPixelRatio'](), c$lb0['height'] / xu2gf1['canvas']['height'] / b$malc['getPixelRatio']());
        }, zjvnhs['wxinputFocus'] = function (xfg1u) {
            var eu_2w = l$bacm['inputElement']['target'];
            if (eu_2w && !eu_2w['editable']) return;
            x1sj2['window']['wx']['offKeyboardConfirm'](), x1sj2['window']['wx']['offKeyboardInput'](), x1sj2['window']['wx']['showKeyboard']({
                'defaultValue': eu_2w['text'],
                'maxLength': eu_2w['maxChars'],
                'multiple': eu_2w['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (u1xf2g) {},
                'fail': function (u12ew) {}
            }), x1sj2['window']['wx']['onKeyboardConfirm'](function (zhdqk) {
                var f1jsx = zhdqk ? zhdqk['value'] : '';
                eu_2w['text'] = f1jsx, eu_2w['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), x1sj2['window']['wx']['onKeyboardInput'](function (hnvkj) {
                var t5pr7 = hnvkj ? hnvkj['value'] : '';
                if (!eu_2w['multiline']) {
                    if (t5pr7['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                eu_2w['text'] = t5pr7, eu_2w['event']('input');
            });
        }, zjvnhs['inputEnter'] = function () {
            l$bacm['inputElement']['target']['focus'] = ![];
        }, zjvnhs['wxinputblur'] = function () {
            zjvnhs['hideKeyboard']();
        }, zjvnhs['hideKeyboard'] = function () {
            x1sj2['window']['wx']['offKeyboardConfirm'](), x1sj2['window']['wx']['offKeyboardInput'](), x1sj2['window']['wx']['hideKeyboard']({
                'success': function (f1sjn) {
                    console['log']('隐藏键盘');
                },
                'fail': function (td86qr) {
                    console['log']('隐藏键盘出错:' + (td86qr ? td86qr['errMsg'] : ''));
                }
            });
        }, zjvnhs;
    }(),
        o0yc_ = function () {
        function gwu12() {}
        vzjhs(gwu12, 'laya.wx.mini.MiniLoader');
        var y$0lcb = gwu12['prototype'];
        return y$0lcb['load'] = function (nkvh6, njshvx, bo04yc, snvxhj, zvhnk6) {
            bo04yc === void 0x0 && (bo04yc = !![]), zvhnk6 === void 0x0 && (zvhnk6 = ![]);
            var y40_c = this;
            y40_c['_url'] = nkvh6;
            if (nkvh6['indexOf']('data:image') === 0x0) y40_c['_type'] = njshvx = 'image';else y40_c['_type'] = njshvx || (njshvx = y40_c['getTypeFromUrl'](nkvh6));
            y40_c['_cache'] = bo04yc, y40_c['_data'] = null;
            var sfj1x2 = 'ascii';
            if (nkvh6['indexOf']('.fnt') != -0x1) sfj1x2 = 'utf8';else njshvx == 'arraybuffer' && (sfj1x2 = '');
            ;
            var $yobc = jxnvs['getFileExtension'](nkvh6);
            if (gwu12['_fileTypeArr']['indexOf']($yobc) != -0x1) x1sj2['EnvConfig']['load']['call'](this, nkvh6, njshvx, bo04yc, snvxhj, zvhnk6);else {
                if (!hjnk['getFileInfo'](nkvh6)) {
                    if (nkvh6['indexOf']('layaNativeDir/') != -0x1) {
                        if (x1sj2['isZiYu']) {
                            var rtdq8 = hjnk['ziyuFileData'][nkvh6];
                            y40_c['onLoaded'](rtdq8);
                            return;
                        } else {
                            cosnole['log']('read read'), hjnk['read'](nkvh6, sfj1x2, new qtr6(gwu12, gwu12['onReadNativeCallBack'], [sfj1x2, nkvh6, njshvx, bo04yc, snvxhj, zvhnk6, y40_c]));
                            return;
                        }
                    }
                    if (aml9b$['rootPath'] == '') var hnkvz = nkvh6;else hnkvz = nkvh6['split'](aml9b$['rootPath'])[0x0];
                    nkvh6['indexOf']('http://') != -0x1 || nkvh6['indexOf']('https://') != -0x1 ? x1sj2['EnvConfig']['load']['call'](y40_c, nkvh6, njshvx, bo04yc, snvxhj, zvhnk6) : hjnk['readFile'](hnkvz, sfj1x2, new qtr6(gwu12, gwu12['onReadNativeCallBack'], [sfj1x2, nkvh6, njshvx, bo04yc, snvxhj, zvhnk6, y40_c]), nkvh6);
                } else x1sj2['EnvConfig']['load']['call'](this, nkvh6, njshvx, bo04yc, snvxhj, zvhnk6);
            }
        }, y$0lcb['resMgrLoad'] = function (jnzvs, jxnf1s, fxg2u1, ylb, q85tdr, vzk, f2gx1) {
            fxg2u1 === void 0x0 && (fxg2u1 = 0x0), ylb === void 0x0 && (ylb = ![]), q85tdr === void 0x0 && (q85tdr = ![]), vzk === void 0x0 && (vzk = 0x0), f2gx1 === void 0x0 && (f2gx1 = 0x3), jnzvs['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', jnzvs), x1sj2['EnvConfig']['resMgrLoad'](jnzvs, (z6nvh, mcb$, wu2f) => {
                gwu12['prototype']['resMgrLoadCallBack'](z6nvh, mcb$, wu2f, jxnf1s);
            }, fxg2u1, ylb, q85tdr, vzk, f2gx1);
        }, y$0lcb['resMgrLoadCallBack'] = function (qhz6d, cb$0o, zd8q6, jsf1) {
            console['log']('buff:::', qhz6d, zd8q6, hjnk['fileNativeDir'] + '///' + hjnk['fileListName']), jsf1(qhz6d, cb$0o, zd8q6);
        }, y$0lcb['clearRes'] = function (mbly$, p5ri) {
            p5ri === void 0x0 && (p5ri = ![]);
            var eyo_ = this;
            eyo_['clearRes'](mbly$, p5ri);
            var tp3r57 = hjnk['getFileInfo'](mbly$);
            if (tp3r57 && (mbly$['indexOf']('http://') != -0x1 || mbly$['indexOf']('https://') != -0x1)) {
                var $bmc = tp3r57['md5'],
                    cob40 = hjnk['getFileNativePath']($bmc);
                hjnk['remove'](cob40);
            }
        }, gwu12['onReadNativeCallBack'] = function (fu21g, kv6hn, r85qt7, dkzq6, rp753i, t8qr75, g2u1fx, qz8k6d, qtr5) {
            dkzq6 === void 0x0 && (dkzq6 = !![]), t8qr75 === void 0x0 && (t8qr75 = ![]), qz8k6d === void 0x0 && (qz8k6d = 0x0);
            if (!qz8k6d) {
                var g2xsf1;
                if (r85qt7 == 'json' || r85qt7 == 'atlas') g2xsf1 = x1sj2['getJson'](qtr5['data']);else r85qt7 == 'xml' ? g2xsf1 = jxnvs['parseXMLFromString'](qtr5['data']) : g2xsf1 = qtr5['data'];
                g2u1fx['onLoaded'](g2xsf1), !x1sj2['isZiYu'] && x1sj2['isPosMsgYu'] && r85qt7 != 'arraybuffer' && wx['postMessage']({
                    'url': kv6hn,
                    'data': g2xsf1,
                    'isLoad': !![]
                });
            } else qz8k6d == 0x1 && x1sj2['EnvConfig']['load']['call'](g2u1fx, kv6hn, r85qt7, dkzq6, rp753i, t8qr75);
        }, sjvzh(gwu12, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), gwu12;
    }(),
        hjnk = function (al9b) {
        function jhvnx() {
            jhvnx['__super']['call'](this);
            ;
        }
        return vzjhs(jhvnx, 'laya.wx.mini.MiniFileMgr', al9b), jhvnx['isLoadFile'] = function (k68dq) {
            return jhvnx['_fileTypeArr']['indexOf'](k68dq) != -0x1 ? !![] : ![];
        }, jhvnx['getFileInfo'] = function (_e4o) {
            var h6zdqk = _e4o['split']('?')[0x0],
                vdhk6 = jhvnx['filesListObj'][h6zdqk];
            if (vdhk6 == null) return null;else return vdhk6;
            return null;
        }, jhvnx['onFileUpdate'] = function (zv6nh, co4yb0) {
            var jnshxv = zv6nh['split']('/'),
                b$la9 = jnshxv[jnshxv['length'] - 0x1],
                khn6vz = jhvnx['getFileInfo'](co4yb0);
            if (khn6vz == null) jhvnx['onSaveFile'](co4yb0, b$la9);else {
                if (khn6vz['readyUrl'] != co4yb0) jhvnx['remove'](b$la9, co4yb0);
            }
        }, jhvnx['exits'] = function (o0_ew4, w4e_) {
            var r37t58 = jhvnx['getFileNativePath'](o0_ew4);
            jhvnx['fs']['getFileInfo']({
                'filePath': r37t58,
                'success': function (nfjvs) {
                    w4e_ != null && w4e_['runWith']([0x0, nfjvs]);
                },
                'fail': function (shvjnz) {
                    w4e_ != null && w4e_['runWith']([0x1, shvjnz]);
                }
            });
        }, jhvnx['read'] = function (_40coy, x1s2jf, xf2g1u, uowe4_) {
            x1s2jf === void 0x0 && (x1s2jf = 'ascill'), uowe4_ === void 0x0 && (uowe4_ = '');
            var svnhz;
            uowe4_ != '' ? svnhz = jhvnx['getFileNativePath'](_40coy) : svnhz = _40coy, jhvnx['fs']['readFile']({
                'filePath': svnhz,
                'encoding': x1s2jf,
                'success': function (uwg12) {
                    xf2g1u != null && xf2g1u['runWith']([0x0, uwg12]);
                },
                'fail': function (nzhvsj) {
                    if (nzhvsj && uowe4_ != '') jhvnx['down'](uowe4_, x1s2jf, xf2g1u, uowe4_);else xf2g1u != null && xf2g1u['runWith']([0x1]);
                }
            });
        }, jhvnx['readNativeFile'] = function (dk6h, nxshj) {
            jhvnx['fs']['readFile']({
                'filePath': dk6h,
                'encoding': '',
                'success': function (t6qdk) {
                    nxshj != null && nxshj['runWith']([0x0]);
                },
                'fail': function (ew2g) {
                    nxshj != null && nxshj['runWith']([0x1]);
                }
            });
        }, jhvnx['down'] = function (n1fs, e0o4w_, ux21gf, _ocy) {
            e0o4w_ === void 0x0 && (e0o4w_ = 'ascill'), _ocy === void 0x0 && (_ocy = '');
            var wf1 = jhvnx['getFileNativePath'](_ocy),
                c$b0ly = jhvnx['wxdown']({
                'url': n1fs,
                'filePath': wf1,
                'success': function (i7pr5) {
                    if (i7pr5['statusCode'] === 0xc8) jhvnx['readFile'](i7pr5['filePath'], e0o4w_, ux21gf, _ocy);
                },
                'fail': function (yo0_e) {
                    ux21gf != null && ux21gf['runWith']([0x1, yo0_e]);
                }
            });
            c$b0ly['onProgressUpdate'](function (blymc$) {
                ux21gf != null && ux21gf['runWith']([0x2, blymc$['progress']]);
            });
        }, jhvnx['readFile'] = function (k6vzhd, c0$o, zkqdh6, qt68rd) {
            c0$o === void 0x0 && (c0$o = 'ascill'), qt68rd === void 0x0 && (qt68rd = ''), jhvnx['fs']['readFile']({
                'filePath': k6vzhd,
                'encoding': c0$o,
                'success': function (khzvnj) {
                    if (k6vzhd['indexOf']('http://') != -0x1 || k6vzhd['indexOf']('https://') != -0x1) jhvnx['onFileUpdate'](k6vzhd, qt68rd);
                    zkqdh6 != null && zkqdh6['runWith']([0x0, khzvnj]);
                },
                'fail': function (o_u4we) {
                    if (o_u4we) zkqdh6 != null && zkqdh6['runWith']([0x1, o_u4we]);
                }
            });
        }, jhvnx['downImg'] = function (c0l$by, svhnj, xsgf12) {
            xsgf12 === void 0x0 && (xsgf12 = '');
            var qdkh = jhvnx['wxdown']({
                'url': c0l$by,
                'success': function ($lcybm) {
                    $lcybm['statusCode'] === 0xc8 && jhvnx['copyFile']($lcybm['tempFilePath'], xsgf12, svhnj);
                },
                'fail': function (xfj12) {
                    svhnj != null && svhnj['runWith']([0x1, xfj12]);
                }
            });
        }, jhvnx['copyFile'] = function (znjvs, $lbcam, gwu2_) {
            var o0e_y = znjvs['split']('/'),
                ybco04 = o0e_y[o0e_y['length'] - 0x1],
                js21x = $lbcam['split']('?')[0x0],
                a9$lm = jhvnx['getFileInfo']($lbcam),
                w0o4e_ = jhvnx['getFileNativePath'](ybco04);
            jhvnx['fs']['copyFile']({
                'srcPath': znjvs,
                'destPath': w0o4e_,
                'success': function (eu4w_o) {
                    if (!a9$lm) jhvnx['onSaveFile']($lbcam, ybco04), gwu2_ != null && gwu2_['runWith']([0x0]);else {
                        if (a9$lm['readyUrl'] != $lbcam) jhvnx['remove'](ybco04, $lbcam, gwu2_);
                    }
                },
                'fail': function (bc04y) {
                    gwu2_ != null && gwu2_['runWith']([0x1, bc04y]);
                }
            });
        }, jhvnx['getFileNativePath'] = function (wo04_e) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + wo04_e;
        }, jhvnx['remove'] = function (gfuw2, snvjxh, k6hq) {
            snvjxh === void 0x0 && (snvjxh = '');
            var rq8t75 = jhvnx['getFileInfo'](snvjxh),
                wug_4e = jhvnx['getFileNativePath'](rq8t75['md5']);
            u_wge4['loader']['clearRes'](rq8t75['readyUrl']), jhvnx['fs']['unlink']({
                'filePath': wug_4e,
                'success': function (by$l0) {
                    if (snvjxh != '') jhvnx['onSaveFile'](snvjxh, gfuw2);
                    k6hq != null && k6hq['runWith']([0x0]);
                },
                'fail': function ($bal9m) {}
            });
        }, jhvnx['onSaveFile'] = function (xj1snf, jxfvn) {
            var t8375r = xj1snf['split']('?')[0x0];
            jhvnx['filesListObj'][t8375r] = {
                'md5': jxfvn,
                'readyUrl': xj1snf
            }, jhvnx['fs']['writeFile']({
                'filePath': jhvnx['fileNativeDir'] + '/' + jhvnx['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](jhvnx['filesListObj']),
                'success': function (_eo4wu) {
                    console['log']('写入测试测试成功：', _eo4wu);
                },
                'fail': function (o4y0) {
                    console['log']('写入测试测试失败：', o4y0);
                }
            });
        }, jhvnx['existDir'] = function (sn1jf, vxsjn) {
            jhvnx['fs']['mkdir']({
                'dirPath': sn1jf,
                'success': function (nxs1) {
                    vxsjn != null && vxsjn['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (euwo_4) {
                    if (euwo_4['errMsg']['indexOf']('file already exists') != -0x1) jhvnx['readSync'](jhvnx['fileListName'], 'utf8', vxsjn);else vxsjn != null && vxsjn['runWith']([0x1, euwo_4]);
                }
            });
        }, jhvnx['readSync'] = function (ow_4e, r3578t, bcmla$, f2xgu) {
            r3578t === void 0x0 && (r3578t = 'ascill'), f2xgu === void 0x0 && (f2xgu = '');
            var wgeu_4 = jhvnx['getFileNativePath'](ow_4e),
                s21xfj;
            try {
                s21xfj = jhvnx['fs']['readFileSync'](wgeu_4), bcmla$ != null && bcmla$['runWith']([0x0, { 'data': s21xfj }]);
            } catch (jzkhn) {
                bcmla$ != null && bcmla$['runWith']([0x1]);
            }
        }, jhvnx['readCache'] = function () {}, jhvnx['writeCache'] = function (p53ri7) {
            var gf1x2s = readyUrl['split']('?')[0x0];
            jhvnx['filesListObj'][gf1x2s] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, jhvnx['fs']['writeFile']({
                'filePath': jhvnx['fileNativeDir'] + '/' + jhvnx['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](jhvnx['filesListObj']),
                'success': function (qdzk6h) {},
                'fail': function (p53r7i) {}
            });
        }, jhvnx['setNativeFileDir'] = function (_0oe4) {
            jhvnx['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + _0oe4;
        }, jhvnx['filesListObj'] = {}, jhvnx['fileNativeDir'] = null, jhvnx['fileListName'] = 'layaairfiles.txt', jhvnx['ziyuFileData'] = {}, sjvzh(jhvnx, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), jhvnx;
    }(sfgx12),
        vsxfj = function (g2fu) {
        function sxgf() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], sxgf['__super']['call'](this), this['_sound'] = sxgf['_createSound'](), this['_chanell'] = new ow4e_0(this['_sound']);
        }
        vzjhs(sxgf, 'laya.wx.mini.MiniSound', g2fu);
        var h6kzq = sxgf['prototype'];
        return h6kzq['load'] = function (c0y$b) {
            var zq6dk = this;
            c0y$b = aml9b$['formatURL'](c0y$b), this['url'] = c0y$b;
            if (sxgf['_audioCache'][c0y$b]) {
                this['event']('complete');
                return;
            }
            function ux2f1() {
                if (sxgf['_null'] != undefined) zq6dk['_sound']['onCanplay'](sxgf['_null']), zq6dk['_sound']['onError'](sxgf['_null']);else try {
                    zq6dk['_sound']['onCanplay'](null), zq6dk['_sound']['onError'](null), sxgf['_null'] = null;
                } catch (wug4_e) {
                    console['warn']('[wxmini] _clearSound:' + wug4_e), zq6dk['_sound']['onCanplay'](d6hz), zq6dk['_sound']['onError'](d6hz), sxgf['_null'] = d6hz;
                }
            }
            function hqz6dk() {
                ye['loaded'] = !![], ye['event']('complete'), sxgf['_audioCache'][ye['url']] = ye;
            }
            function wu_e2g(a$) {
                console['error']('errCode=' + a$['errCode'] + '  errMsg=' + a$['errMsg']), ye['event']('error');
            }
            function d6hz() {}
            this['_sound']['onCanplay'](hqz6dk), this['_sound']['onError'](wu_e2g), this['_sound']['src'] = c0y$b;
            var ye = this;
        }, h6kzq['play'] = function (fxs1nj, rt5dq8) {
            fxs1nj === void 0x0 && (fxs1nj = 0x0), rt5dq8 === void 0x0 && (rt5dq8 = 0x0);
            var c$0bl, lb0;
            if (this['url'] == dhv6zk['_tMusic']) {
                if (!sxgf['_musicAudio']) sxgf['_musicAudio'] = this['_sound'];
                c$0bl = sxgf['_musicAudio'], lb0 = this['_chanell'];
            } else c$0bl = this['_sound'], lb0 = this['_chanell'];
            return c$0bl['src'] = this['url'], c$0bl['startTime'] = 0x0, lb0['isStopped'] && (lb0['url'] = this['url'], lb0['loops'] = rt5dq8, lb0['startTime'] = fxs1nj, lb0['play'](), dhv6zk['addChannel'](lb0)), lb0;
        }, h6kzq['dispose'] = function () {
            var ri75p = sxgf['_audioCache'][this['url']];
            ri75p && (ri75p['src'] = '', delete sxgf['_audioCache'][this['url']]);
        }, wgue2_(0x0, h6kzq, 'duration', function () {
            return this['_sound']['duration'];
        }), sxgf['_createSound'] = function () {
            sxgf['_id']++;
            var qr8t57 = x1sj2['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return qr8t57;
        }, sxgf['_musicAudio'] = null, sxgf['_id'] = 0x0, sxgf['_audioCache'] = {}, sxgf['_null'] = undefined, sxgf;
    }(sfgx12),
        ow4e_0 = function (eow_0) {
        function tr3(e1ugw) {
            this['_audio'] = null, this['_onEnd'] = null, tr3['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = e1ugw, this['_onEnd'] = jxnvs['bind'](this['__onEnd'], this), e1ugw['onEnded'](this['_onEnd']);
        }
        vzjhs(tr3, 'laya.wx.mini.MiniSoundChannel', eow_0);
        var oc4b0 = tr3['prototype'];
        return oc4b0['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (u_wge4['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, oc4b0['__onNull'] = function () {}, oc4b0['play'] = function () {
            this['isStopped'] = ![], dhv6zk['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, oc4b0['stop'] = function () {
            this['isStopped'] = !![], dhv6zk['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, oc4b0['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, oc4b0['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], dhv6zk['addChannel'](this), this['_audio']['play']();
        }, wgue2_(0x0, oc4b0, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), wgue2_(0x0, oc4b0, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), wgue2_(0x0, oc4b0, 'volume', function () {
            return 0x1;
        }, function (baml$9) {}), tr3['_null'] = undefined, tr3;
    }(jvhnz),
        u4wge = function () {
        function jhvnk() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = x1sj2['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        vzjhs(jhvnk, 'laya.wx.mini.MiniVideo');
        var t86kd = jhvnk['prototype'];
        return t86kd['on'] = function (snxvfj, gfxu, ip5) {
            if (snxvfj == 'loadedmetadata') this['onPlayFunc'] = ip5['bind'](gfxu), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else snxvfj == 'ended' && (this['onEndedFunC'] = ip5['bind'](gfxu), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, t86kd['onTimeUpdateFunc'] = function (q8rt6) {
            this['position'] = q8rt6['position'], this['_duration'] = q8rt6['duration'];
        }, t86kd['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, t86kd['onended'] = function (eg_u2w, o0y4e) {
            this['onEndedFunC'] = o0y4e['bind'](eg_u2w), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, t86kd['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, t86kd['off'] = function (xjfsn, fux12, guf2) {
            if (xjfsn == 'loadedmetadata') this['onPlayFunc'] = guf2['bind'](fux12), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else xjfsn == 'ended' && (this['onEndedFunC'] = guf2['bind'](fux12), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, t86kd['load'] = function (uewg) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = uewg;
        }, t86kd['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, t86kd['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, t86kd['size'] = function (r7i5p3, fxs1n) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = r7i5p3, this['videoElement']['height'] = fxs1n;
        }, t86kd['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, t86kd['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, wgue2_(0x0, t86kd, 'duration', function () {
            return this['_duration'];
        }), wgue2_(0x0, t86kd, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (hn6vk) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = hn6vk;
        }), wgue2_(0x0, t86kd, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), wgue2_(0x0, t86kd, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), wgue2_(0x0, t86kd, 'ended', function () {
            return this['videoend'];
        }), wgue2_(0x0, t86kd, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (zhk6n) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = zhk6n;
        }), wgue2_(0x0, t86kd, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (snj1f) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = snj1f;
        }), wgue2_(0x0, t86kd, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (vhsznj) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = vhsznj;
        }), wgue2_(0x0, t86kd, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), wgue2_(0x0, t86kd, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function ($ylc0) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = $ylc0;
        }), wgue2_(0x0, t86kd, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function ($ma9b) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = $ma9b;
        }), wgue2_(0x0, t86kd, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), wgue2_(0x0, t86kd, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (r6t8) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = r6t8;
        }), wgue2_(0x0, t86kd, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (jhvnxs) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = jhvnxs;
        }), wgue2_(0x0, t86kd, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (gx1uf2) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = gx1uf2;
        }), jhvnk;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var k8t6d in Laya) {
        var xj1fns = Laya[k8t6d];
        xj1fns && xj1fns['__isclass'] && (exports[k8t6d] = xj1fns);
    }
});