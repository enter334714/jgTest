var J = wx.h$;
(function (window, document, f9w$2s) {
    var pf9_2 = f9w$2s['un'],
        v7xni = f9w$2s['uns'],
        t86zc = f9w$2s['static'],
        hpczte = f9w$2s['class'],
        gqdk = f9w$2s['getset'],
        r5yjv = f9w$2s['__newvec'],
        pzhte_ = laya['utils']['Browser'],
        x1in47 = laya['events']['Event'],
        zht_ep = laya['events']['EventDispatcher'],
        _ezph = laya['resource']['HTMLImage'],
        ji7xrv = laya['utils']['Handler'],
        ovyqr5 = laya['display']['Input'],
        xrjy7v = laya['net']['Loader'],
        xnvij7 = laya['maths']['Matrix'],
        f9pw2_ = laya['renders']['Render'],
        jr7o = laya['utils']['RunDriver'],
        zcpet = laya['media']['Sound'],
        qo0kb = laya['media']['SoundChannel'],
        o5qk0b = laya['media']['SoundManager'],
        ivj7nx = laya['display']['Stage'],
        i43 = laya['net']['URL'],
        zth_e = laya['utils']['Utils'],
        j7xrvi = function () {
        function ht8cze() {}
        return hpczte(ht8cze, 'laya.wx.mini.MiniAdpter'), ht8cze['getJson'] = function (jyo5) {
            return JSON['parse'](jyo5);
        }, ht8cze['init'] = function (z8c6, phe2_z) {
            z8c6 === void 0x0 && (z8c6 = ![]), phe2_z === void 0x0 && (phe2_z = ![]);
            if (ht8cze['_inited']) return;
            ht8cze['window'] = window;
            if (ht8cze['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            ht8cze['_inited'] = !![], ht8cze['isZiYu'] = phe2_z, ht8cze['isPosMsgYu'] = z8c6, ht8cze['EnvConfig'] = {}, !ht8cze['isZiYu'] && (d6ckg['setNativeFileDir']('/layaairGame'), d6ckg['existDir'](d6ckg['fileNativeDir'], ji7xrv['create'](ht8cze, ht8cze['onMkdirCallBack']))), ht8cze['window']['focus'] = function () {}, f9w$2s['getUrlPath'] = function () {}, ht8cze['window']['logtime'] = function (yojv5r) {}, ht8cze['window']['alertTimeLog'] = function (l4ua3) {}, ht8cze['window']['resetShareInfo'] = function () {}, ht8cze['window']['CanvasRenderingContext2D'] = function () {}, ht8cze['window']['CanvasRenderingContext2D']['prototype'] = ht8cze['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], ht8cze['window']['document']['body']['appendChild'] = function () {}, ht8cze['EnvConfig']['pixelRatioInt'] = 0x0, jr7o['getPixelRatio'] = ht8cze['pixelRatio'], ht8cze['_preCreateElement'] = pzhte_['createElement'], pzhte_['createElement'] = ht8cze['createElement'], jr7o['createShaderCondition'] = ht8cze['createShaderCondition'], zth_e['parseXMLFromString'] = ht8cze['parseXMLFromString'], ovyqr5['_createInputElement'] = xrvi7j['_createInputElement'], ht8cze['EnvConfig']['load'] = xrjy7v['prototype']['load'], xrjy7v['prototype']['load'] = pezh2_['prototype']['load'], ht8cze['isZiYu'] && z8c6 && wx['onMessage'](function (kbo0q) {
                kbo0q['isLoad'] && (d6ckg['ziyuFileData'][kbo0q['url']] = kbo0q['data']);
            });
        }, ht8cze['onMkdirCallBack'] = function (c6g8, e2pzh_) {
            if (!c6g8) d6ckg['filesListObj'] = JSON['parse'](e2pzh_['data']);
        }, ht8cze['pixelRatio'] = function () {
            if (!ht8cze['EnvConfig']['pixelRatioInt']) try {
                var zeht_ = wx['getSystemInfoSync']();
                return ht8cze['EnvConfig']['pixelRatioInt'] = zeht_['pixelRatio'], zeht_ = zeht_, zeht_['pixelRatio'];
            } catch (dk60gb) {}
            return ht8cze['EnvConfig']['pixelRatioInt'];
        }, ht8cze['createElement'] = function (ry7jx) {
            if (ry7jx == 'canvas') {
                var r7xjyv;
                return ht8cze['idx'] == 0x1 ? ht8cze['isZiYu'] ? (r7xjyv = sharedCanvas, r7xjyv['style'] = {}) : r7xjyv = window['canvas'] : r7xjyv = window['wx']['createCanvas'](), ht8cze['idx']++, r7xjyv;
            } else {
                if (ry7jx == 'textarea' || ry7jx == 'input') return ht8cze['onCreateInput'](ry7jx);else {
                    if (ry7jx == 'div') {
                        var n7ix1 = ht8cze['_preCreateElement'](ry7jx);
                        return n7ix1['contains'] = function (u3ma4) {
                            return null;
                        }, n7ix1['removeChild'] = function (au3l4) {}, n7ix1;
                    } else return ht8cze['_preCreateElement'](ry7jx);
                }
            }
        }, ht8cze['onCreateInput'] = function (tzh86c) {
            var e_2wz = ht8cze['_preCreateElement'](tzh86c);
            return e_2wz['focus'] = xrvi7j['wxinputFocus'], e_2wz['blur'] = xrvi7j['wxinputblur'], e_2wz['style'] = {}, e_2wz['value'] = 0x0, e_2wz['parentElement'] = {}, e_2wz['placeholder'] = {}, e_2wz['type'] = {}, e_2wz['setColor'] = function (ehctp) {}, e_2wz['setType'] = function (kd0b6g) {}, e_2wz['setFontFace'] = function (czh86) {}, e_2wz['addEventListener'] = function (jyxvr7) {}, e_2wz['contains'] = function (n13x4i) {
                return null;
            }, e_2wz['removeChild'] = function ($wsf) {}, e_2wz;
        }, ht8cze['createShaderCondition'] = function (k8cgd) {
            var kg8d = this,
                _ezp2 = function () {
                var pfw_29 = k8cgd;
                return kg8d[k8cgd['replace']('this.', '')];
            };
            return _ezp2;
        }, ht8cze['EnvConfig'] = null, ht8cze['window'] = null, ht8cze['_preCreateElement'] = null, ht8cze['_inited'] = ![], ht8cze['wxRequest'] = null, ht8cze['systemInfo'] = null, ht8cze['version'] = '0.0.1', ht8cze['isZiYu'] = ![], ht8cze['isPosMsgYu'] = ![], ht8cze['parseXMLFromString'] = function (bo0k5q) {
            var w2$fs9, xi74;
            bo0k5q = bo0k5q['replace'](/>\s+</g, '><');
            try {
                w2$fs9 = new window['Parser']['DOMParser']()['parseFromString'](bo0k5q, 'text/xml');
            } catch (x7ryvj) {
                throw '需要引入xml解析库文件';
            }
            return w2$fs9;
        }, ht8cze['idx'] = 0x1, ht8cze;
    }(),
        kdc86 = function () {
        function ehzctp() {}
        hpczte(ehzctp, 'laya.wx.mini.MiniImage');
        var vj5yr = ehzctp['prototype'];
        return vj5yr['_loadImage'] = function (pht_e) {
            var u13la = this,
                gqb05k = ![];
            pht_e['indexOf']('layaNativeDir/') == -0x1 && (gqb05k = !![], pht_e = i43['formatURL'](pht_e));
            if (!d6ckg['getFileInfo'](pht_e)) {
                if (pht_e['indexOf']('http://') != -0x1 || pht_e['indexOf']('https://') != -0x1) d6ckg['downImg'](pht_e, new ji7xrv(ehzctp, ehzctp['onDownImgCallBack'], [pht_e, u13la]), pht_e);else ehzctp['onCreateImage'](pht_e, u13la, !![]);
            } else ehzctp['onCreateImage'](pht_e, u13la, !gqb05k);
        }, ehzctp['onDownImgCallBack'] = function (h8ecz, an431u, yxvr) {
            if (!yxvr) ehzctp['onCreateImage'](h8ecz, an431u);else an431u['onError'](null);
        }, ehzctp['onCreateImage'] = function (r7ix, d8kg, vo5ry) {
            vo5ry === void 0x0 && (vo5ry = ![]);
            var virjx;
            if (!vo5ry) {
                var vnij7x = d6ckg['getFileInfo'](r7ix),
                    kg0qb5 = vnij7x['md5'];
                virjx = d6ckg['getFileNativePath'](kg0qb5);
            } else virjx = r7ix;
            if (d8kg['imgCache'] == null) d8kg['imgCache'] = {};
            var _zhp;
            function qyovr5() {
                _zhp['onload'] = null, _zhp['onerror'] = null, delete d8kg['imgCache'][r7ix];
            }
            ;
            var dt6h8 = function () {
                qyovr5(), d8kg['onLoaded'](_zhp);
            },
                ew92 = function () {
                qyovr5(), d8kg['event']('error', 'Load image failed');
            };
            d8kg['_type'] == 'nativeimage' ? (_zhp = new pzhte_['window']['Image'](), _zhp['crossOrigin'] = '', _zhp['onload'] = dt6h8, _zhp['onerror'] = ew92, _zhp['src'] = virjx, d8kg['imgCache'][r7ix] = _zhp) : new _ezph['create'](virjx, {
                'onload': dt6h8,
                'onerror': ew92,
                'onCreate': function (nx43i1) {
                    _zhp = nx43i1, d8kg['imgCache'][r7ix] = nx43i1;
                }
            });
        }, ehzctp;
    }(),
        xrvi7j = function () {
        function xvin7() {}
        return hpczte(xvin7, 'laya.wx.mini.MiniInput'), xvin7['_createInputElement'] = function () {
            ovyqr5['_initInput'](ovyqr5['area'] = pzhte_['createElement']('textarea')), ovyqr5['_initInput'](ovyqr5['input'] = pzhte_['createElement']('input')), ovyqr5['inputContainer'] = pzhte_['createElement']('div'), ovyqr5['inputContainer']['style']['position'] = 'absolute', ovyqr5['inputContainer']['style']['zIndex'] = 0x186a0, pzhte_['container']['appendChild'](ovyqr5['inputContainer']), ovyqr5['inputContainer']['setPos'] = function (rjxyv, v5yrq) {
                ovyqr5['inputContainer']['style']['left'] = rjxyv + 'px', ovyqr5['inputContainer']['style']['top'] = v5yrq + 'px';
            }, f9w$2s['stage']['on']('resize', null, xvin7['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (tez8) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), o5qk0b['_soundClass'] = hc8d6t, o5qk0b['_musicClass'] = hc8d6t, window['_videoClass'] = td8g;
        }, xvin7['_onStageResize'] = function () {
            var d0k = f9w$2s['stage']['_canvasTransform']['identity']();
            d0k['scale'](pzhte_['width'] / f9pw2_['canvas']['width'] / jr7o['getPixelRatio'](), pzhte_['height'] / f9pw2_['canvas']['height'] / jr7o['getPixelRatio']());
        }, xvin7['wxinputFocus'] = function (jri) {
            var fs9$2w = ovyqr5['inputElement']['target'];
            if (fs9$2w && !fs9$2w['editable']) return;
            j7xrvi['window']['wx']['offKeyboardConfirm'](), j7xrvi['window']['wx']['offKeyboardInput'](), j7xrvi['window']['wx']['showKeyboard']({
                'defaultValue': fs9$2w['text'],
                'maxLength': fs9$2w['maxChars'],
                'multiple': fs9$2w['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (o50) {},
                'fail': function (jrvxy7) {}
            }), j7xrvi['window']['wx']['onKeyboardConfirm'](function (m3u) {
                var a4l = m3u ? m3u['value'] : '';
                fs9$2w['text'] = a4l, fs9$2w['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), j7xrvi['window']['wx']['onKeyboardInput'](function (n47xi) {
                var k05bg = n47xi ? n47xi['value'] : '';
                if (!fs9$2w['multiline']) {
                    if (k05bg['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                fs9$2w['text'] = k05bg, fs9$2w['event']('input');
            });
        }, xvin7['inputEnter'] = function () {
            ovyqr5['inputElement']['target']['focus'] = ![];
        }, xvin7['wxinputblur'] = function () {
            xvin7['hideKeyboard']();
        }, xvin7['hideKeyboard'] = function () {
            j7xrvi['window']['wx']['offKeyboardConfirm'](), j7xrvi['window']['wx']['offKeyboardInput'](), j7xrvi['window']['wx']['hideKeyboard']({
                'success': function (kqg0b5) {
                    console['log']('隐藏键盘');
                },
                'fail': function (ht_zpe) {
                    console['log']('隐藏键盘出错:' + (ht_zpe ? ht_zpe['errMsg'] : ''));
                }
            });
        }, xvin7;
    }(),
        pezh2_ = function () {
        function vrx() {}
        hpczte(vrx, 'laya.wx.mini.MiniLoader');
        var c86hd = vrx['prototype'];
        return c86hd['load'] = function (obyq5, hz68c, kbq0, j17ni, jyxr7v) {
            kbq0 === void 0x0 && (kbq0 = !![]), jyxr7v === void 0x0 && (jyxr7v = ![]);
            var p_2zw = this;
            p_2zw['_url'] = obyq5;
            if (obyq5['indexOf']('data:image') === 0x0) p_2zw['_type'] = hz68c = 'image';else p_2zw['_type'] = hz68c || (hz68c = p_2zw['getTypeFromUrl'](obyq5));
            p_2zw['_cache'] = kbq0, p_2zw['_data'] = null;
            var lum4 = 'ascii';
            if (obyq5['indexOf']('.fnt') != -0x1) lum4 = 'utf8';else hz68c == 'arraybuffer' && (lum4 = '');
            ;
            var _h2pz = zth_e['getFileExtension'](obyq5);
            if (vrx['_fileTypeArr']['indexOf'](_h2pz) != -0x1) j7xrvi['EnvConfig']['load']['call'](this, obyq5, hz68c, kbq0, j17ni, jyxr7v);else {
                if (!d6ckg['getFileInfo'](obyq5)) {
                    if (obyq5['indexOf']('layaNativeDir/') != -0x1) {
                        if (j7xrvi['isZiYu']) {
                            var qgdk0 = d6ckg['ziyuFileData'][obyq5];
                            p_2zw['onLoaded'](qgdk0);
                            return;
                        } else {
                            cosnole['log']('read read'), d6ckg['read'](obyq5, lum4, new ji7xrv(vrx, vrx['onReadNativeCallBack'], [lum4, obyq5, hz68c, kbq0, j17ni, jyxr7v, p_2zw]));
                            return;
                        }
                    }
                    if (i43['rootPath'] == '') var ui14n = obyq5;else ui14n = obyq5['split'](i43['rootPath'])[0x0];
                    obyq5['indexOf']('http://') != -0x1 || obyq5['indexOf']('https://') != -0x1 ? j7xrvi['EnvConfig']['load']['call'](p_2zw, obyq5, hz68c, kbq0, j17ni, jyxr7v) : d6ckg['readFile'](ui14n, lum4, new ji7xrv(vrx, vrx['onReadNativeCallBack'], [lum4, obyq5, hz68c, kbq0, j17ni, jyxr7v, p_2zw]), obyq5);
                } else j7xrvi['EnvConfig']['load']['call'](this, obyq5, hz68c, kbq0, j17ni, jyxr7v);
            }
        }, c86hd['resMgrLoad'] = function (am3, hzctep, d06kgb, w2ep_z, bq5yro, n1i43x, ovrj5) {
            d06kgb === void 0x0 && (d06kgb = 0x0), w2ep_z === void 0x0 && (w2ep_z = ![]), bq5yro === void 0x0 && (bq5yro = ![]), n1i43x === void 0x0 && (n1i43x = 0x0), ovrj5 === void 0x0 && (ovrj5 = 0x3), am3['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', am3), j7xrvi['EnvConfig']['resMgrLoad'](am3, (ch86dt, zthep, ni7xv) => {
                vrx['prototype']['resMgrLoadCallBack'](ch86dt, zthep, ni7xv, hzctep);
            }, d06kgb, w2ep_z, bq5yro, n1i43x, ovrj5);
        }, c86hd['resMgrLoadCallBack'] = function (i7jx, _w29, byoq0, qb0k5g) {
            console['log']('buff:::', i7jx, byoq0, d6ckg['fileNativeDir'] + '///' + d6ckg['fileListName']), qb0k5g(i7jx, _w29, byoq0);
        }, c86hd['clearRes'] = function (t8gdc6, zt86) {
            zt86 === void 0x0 && (zt86 = ![]);
            var bgk0d = this;
            bgk0d['clearRes'](t8gdc6, zt86);
            var thp_ze = d6ckg['getFileInfo'](t8gdc6);
            if (thp_ze && (t8gdc6['indexOf']('http://') != -0x1 || t8gdc6['indexOf']('https://') != -0x1)) {
                var e2wp_z = thp_ze['md5'],
                    ry7jvx = d6ckg['getFileNativePath'](e2wp_z);
                d6ckg['remove'](ry7jvx);
            }
        }, vrx['onReadNativeCallBack'] = function (g08k, z_teh, vqyr, y5orv, cg8d6k, mu34la, dk0, o5qr, n741) {
            y5orv === void 0x0 && (y5orv = !![]), mu34la === void 0x0 && (mu34la = ![]), o5qr === void 0x0 && (o5qr = 0x0);
            if (!o5qr) {
                var q05obk;
                if (vqyr == 'json' || vqyr == 'atlas') q05obk = j7xrvi['getJson'](n741['data']);else vqyr == 'xml' ? q05obk = zth_e['parseXMLFromString'](n741['data']) : q05obk = n741['data'];
                dk0['onLoaded'](q05obk), !j7xrvi['isZiYu'] && j7xrvi['isPosMsgYu'] && vqyr != 'arraybuffer' && wx['postMessage']({
                    'url': z_teh,
                    'data': q05obk,
                    'isLoad': !![]
                });
            } else o5qr == 0x1 && j7xrvi['EnvConfig']['load']['call'](dk0, z_teh, vqyr, y5orv, cg8d6k, mu34la);
        }, t86zc(vrx, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), vrx;
    }(),
        d6ckg = function (f9ws2) {
        function vxr7() {
            vxr7['__super']['call'](this);
            ;
        }
        return hpczte(vxr7, 'laya.wx.mini.MiniFileMgr', f9ws2), vxr7['isLoadFile'] = function (rvyo5q) {
            return vxr7['_fileTypeArr']['indexOf'](rvyo5q) != -0x1 ? !![] : ![];
        }, vxr7['getFileInfo'] = function (h8tcze) {
            var i13u4n = h8tcze['split']('?')[0x0],
                htecpz = vxr7['filesListObj'][i13u4n];
            if (htecpz == null) return null;else return htecpz;
            return null;
        }, vxr7['onFileUpdate'] = function ($_f9w2, gbq0d) {
            var bok5 = $_f9w2['split']('/'),
                nx71j = bok5[bok5['length'] - 0x1],
                _29p = vxr7['getFileInfo'](gbq0d);
            if (_29p == null) vxr7['onSaveFile'](gbq0d, nx71j);else {
                if (_29p['readyUrl'] != gbq0d) vxr7['remove'](nx71j, gbq0d);
            }
        }, vxr7['exits'] = function (yoqrv5, ry) {
            var teh8 = vxr7['getFileNativePath'](yoqrv5);
            vxr7['fs']['getFileInfo']({
                'filePath': teh8,
                'success': function (xn4i3) {
                    ry != null && ry['runWith']([0x0, xn4i3]);
                },
                'fail': function (ez_p2w) {
                    ry != null && ry['runWith']([0x1, ez_p2w]);
                }
            });
        }, vxr7['read'] = function (x3i4n1, xj7i1, thcez, pthz_e) {
            xj7i1 === void 0x0 && (xj7i1 = 'ascill'), pthz_e === void 0x0 && (pthz_e = '');
            var oyq5vr;
            pthz_e != '' ? oyq5vr = vxr7['getFileNativePath'](x3i4n1) : oyq5vr = x3i4n1, vxr7['fs']['readFile']({
                'filePath': oyq5vr,
                'encoding': xj7i1,
                'success': function (h_ztep) {
                    thcez != null && thcez['runWith']([0x0, h_ztep]);
                },
                'fail': function (k05qgb) {
                    if (k05qgb && pthz_e != '') vxr7['down'](pthz_e, xj7i1, thcez, pthz_e);else thcez != null && thcez['runWith']([0x1]);
                }
            });
        }, vxr7['readNativeFile'] = function (nij7xv, jvy7) {
            vxr7['fs']['readFile']({
                'filePath': nij7xv,
                'encoding': '',
                'success': function (jryv5) {
                    jvy7 != null && jvy7['runWith']([0x0]);
                },
                'fail': function (n14ui) {
                    jvy7 != null && jvy7['runWith']([0x1]);
                }
            });
        }, vxr7['down'] = function (cdg6k, tcd68, h2zep_, f2wp) {
            tcd68 === void 0x0 && (tcd68 = 'ascill'), f2wp === void 0x0 && (f2wp = '');
            var rj7o = vxr7['getFileNativePath'](f2wp),
                a31u = vxr7['wxdown']({
                'url': cdg6k,
                'filePath': rj7o,
                'success': function (in413) {
                    if (in413['statusCode'] === 0xc8) vxr7['readFile'](in413['filePath'], tcd68, h2zep_, f2wp);
                },
                'fail': function (rqoyv5) {
                    h2zep_ != null && h2zep_['runWith']([0x1, rqoyv5]);
                }
            });
            a31u['onProgressUpdate'](function (yvjx) {
                h2zep_ != null && h2zep_['runWith']([0x2, yvjx['progress']]);
            });
        }, vxr7['readFile'] = function (o0k5bq, v7rji, a13l, thzc6) {
            v7rji === void 0x0 && (v7rji = 'ascill'), thzc6 === void 0x0 && (thzc6 = ''), vxr7['fs']['readFile']({
                'filePath': o0k5bq,
                'encoding': v7rji,
                'success': function (gdk08) {
                    if (o0k5bq['indexOf']('http://') != -0x1 || o0k5bq['indexOf']('https://') != -0x1) vxr7['onFileUpdate'](o0k5bq, thzc6);
                    a13l != null && a13l['runWith']([0x0, gdk08]);
                },
                'fail': function (i3u1n) {
                    if (i3u1n) a13l != null && a13l['runWith']([0x1, i3u1n]);
                }
            });
        }, vxr7['downImg'] = function (hz86tc, n4xi7, yq05bo) {
            yq05bo === void 0x0 && (yq05bo = '');
            var zchpe = vxr7['wxdown']({
                'url': hz86tc,
                'success': function (ni17j) {
                    ni17j['statusCode'] === 0xc8 && vxr7['copyFile'](ni17j['tempFilePath'], yq05bo, n4xi7);
                },
                'fail': function (hc8ezt) {
                    n4xi7 != null && n4xi7['runWith']([0x1, hc8ezt]);
                }
            });
        }, vxr7['copyFile'] = function (nvj7x, h2pez, xn1i47) {
            var ehtcz = nvj7x['split']('/'),
                pe_thz = ehtcz[ehtcz['length'] - 0x1],
                c86kgd = h2pez['split']('?')[0x0],
                iv7rxj = vxr7['getFileInfo'](h2pez),
                an341 = vxr7['getFileNativePath'](pe_thz);
            vxr7['fs']['copyFile']({
                'srcPath': nvj7x,
                'destPath': an341,
                'success': function (x47ni1) {
                    if (!iv7rxj) vxr7['onSaveFile'](h2pez, pe_thz), xn1i47 != null && xn1i47['runWith']([0x0]);else {
                        if (iv7rxj['readyUrl'] != h2pez) vxr7['remove'](pe_thz, h2pez, xn1i47);
                    }
                },
                'fail': function (q05g) {
                    xn1i47 != null && xn1i47['runWith']([0x1, q05g]);
                }
            });
        }, vxr7['getFileNativePath'] = function (gdk80) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + gdk80;
        }, vxr7['remove'] = function (zh, h6c8, eh_) {
            h6c8 === void 0x0 && (h6c8 = '');
            var tehzpc = vxr7['getFileInfo'](h6c8),
                ezt8 = vxr7['getFileNativePath'](tehzpc['md5']);
            f9w$2s['loader']['clearRes'](tehzpc['readyUrl']), vxr7['fs']['unlink']({
                'filePath': ezt8,
                'success': function (v5jory) {
                    if (h6c8 != '') vxr7['onSaveFile'](h6c8, zh);
                    eh_ != null && eh_['runWith']([0x0]);
                },
                'fail': function (ry5jvo) {}
            });
        }, vxr7['onSaveFile'] = function (iun14, v7njx) {
            var h8cez = iun14['split']('?')[0x0];
            vxr7['filesListObj'][h8cez] = {
                'md5': v7njx,
                'readyUrl': iun14
            }, vxr7['fs']['writeFile']({
                'filePath': vxr7['fileNativeDir'] + '/' + vxr7['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](vxr7['filesListObj']),
                'success': function (yx7j) {
                    console['log']('写入测试测试成功：', yx7j);
                },
                'fail': function (e_p2) {
                    console['log']('写入测试测试失败：', e_p2);
                }
            });
        }, vxr7['existDir'] = function (jvxri, x1n43) {
            vxr7['fs']['mkdir']({
                'dirPath': jvxri,
                'success': function (q0boy) {
                    x1n43 != null && x1n43['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (boyrq) {
                    if (boyrq['errMsg']['indexOf']('file already exists') != -0x1) vxr7['readSync'](vxr7['fileListName'], 'utf8', x1n43);else x1n43 != null && x1n43['runWith']([0x1, boyrq]);
                }
            });
        }, vxr7['readSync'] = function (qbkg50, eht_z, p_f29, b0gdkq) {
            eht_z === void 0x0 && (eht_z = 'ascill'), b0gdkq === void 0x0 && (b0gdkq = '');
            var jxnv7 = vxr7['getFileNativePath'](qbkg50),
                $_9fw;
            try {
                $_9fw = vxr7['fs']['readFileSync'](jxnv7), p_f29 != null && p_f29['runWith']([0x0, { 'data': $_9fw }]);
            } catch (e_9p2w) {
                p_f29 != null && p_f29['runWith']([0x1]);
            }
        }, vxr7['readCache'] = function () {}, vxr7['writeCache'] = function (oqby5r) {
            var jxr7iv = readyUrl['split']('?')[0x0];
            vxr7['filesListObj'][jxr7iv] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, vxr7['fs']['writeFile']({
                'filePath': vxr7['fileNativeDir'] + '/' + vxr7['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](vxr7['filesListObj']),
                'success': function (yojvr) {},
                'fail': function (tz_hep) {}
            });
        }, vxr7['setNativeFileDir'] = function (t8dc6h) {
            vxr7['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + t8dc6h;
        }, vxr7['filesListObj'] = {}, vxr7['fileNativeDir'] = null, vxr7['fileListName'] = 'layaairfiles.txt', vxr7['ziyuFileData'] = {}, t86zc(vxr7, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), vxr7;
    }(zht_ep),
        hc8d6t = function (thz_p) {
        function vrj5y() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], vrj5y['__super']['call'](this), this['_sound'] = vrj5y['_createSound'](), this['_chanell'] = new w_p9(this['_sound']);
        }
        hpczte(vrj5y, 'laya.wx.mini.MiniSound', thz_p);
        var w2_p = vrj5y['prototype'];
        return w2_p['load'] = function (z2wpe_) {
            var _f29wp = this;
            z2wpe_ = i43['formatURL'](z2wpe_), this['url'] = z2wpe_;
            if (vrj5y['_audioCache'][z2wpe_]) {
                this['event']('complete');
                return;
            }
            function nx13() {
                if (vrj5y['_null'] != undefined) _f29wp['_sound']['onCanplay'](vrj5y['_null']), _f29wp['_sound']['onError'](vrj5y['_null']);else try {
                    _f29wp['_sound']['onCanplay'](null), _f29wp['_sound']['onError'](null), vrj5y['_null'] = null;
                } catch (yqb5or) {
                    console['warn']('[wxmini] _clearSound:' + yqb5or), _f29wp['_sound']['onCanplay'](yqbr), _f29wp['_sound']['onError'](yqbr), vrj5y['_null'] = yqbr;
                }
            }
            function by() {
                xrj7vy['loaded'] = !![], xrj7vy['event']('complete'), vrj5y['_audioCache'][xrj7vy['url']] = xrj7vy;
            }
            function g80k(n7x1ji) {
                console['error']('errCode=' + n7x1ji['errCode'] + '  errMsg=' + n7x1ji['errMsg']), xrj7vy['event']('error');
            }
            function yqbr() {}
            this['_sound']['onCanplay'](by), this['_sound']['onError'](g80k), this['_sound']['src'] = z2wpe_;
            var xrj7vy = this;
        }, w2_p['play'] = function (epw2_z, x7vjir) {
            epw2_z === void 0x0 && (epw2_z = 0x0), x7vjir === void 0x0 && (x7vjir = 0x0);
            var qyvor, fws92$;
            if (this['url'] == o5qk0b['_tMusic']) {
                if (!vrj5y['_musicAudio']) vrj5y['_musicAudio'] = this['_sound'];
                qyvor = vrj5y['_musicAudio'], fws92$ = this['_chanell'];
            } else qyvor = this['_sound'], fws92$ = this['_chanell'];
            return qyvor['src'] = this['url'], qyvor['startTime'] = 0x0, fws92$['isStopped'] && (fws92$['url'] = this['url'], fws92$['loops'] = x7vjir, fws92$['startTime'] = epw2_z, fws92$['play'](), o5qk0b['addChannel'](fws92$)), fws92$;
        }, w2_p['dispose'] = function () {
            var vjxi = vrj5y['_audioCache'][this['url']];
            vjxi && (vjxi['src'] = '', delete vrj5y['_audioCache'][this['url']]);
        }, gqdk(0x0, w2_p, 'duration', function () {
            return this['_sound']['duration'];
        }), vrj5y['_createSound'] = function () {
            vrj5y['_id']++;
            var z_p2he = j7xrvi['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return z_p2he;
        }, vrj5y['_musicAudio'] = null, vrj5y['_id'] = 0x0, vrj5y['_audioCache'] = {}, vrj5y['_null'] = undefined, vrj5y;
    }(zht_ep),
        w_p9 = function (wf_92$) {
        function ep9_(hztc6) {
            this['_audio'] = null, this['_onEnd'] = null, ep9_['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = hztc6, this['_onEnd'] = zth_e['bind'](this['__onEnd'], this), hztc6['onEnded'](this['_onEnd']);
        }
        hpczte(ep9_, 'laya.wx.mini.MiniSoundChannel', wf_92$);
        var qrob = ep9_['prototype'];
        return qrob['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (f9w$2s['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, qrob['__onNull'] = function () {}, qrob['play'] = function () {
            this['isStopped'] = ![], o5qk0b['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, qrob['stop'] = function () {
            this['isStopped'] = !![], o5qk0b['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, qrob['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, qrob['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], o5qk0b['addChannel'](this), this['_audio']['play']();
        }, gqdk(0x0, qrob, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), gqdk(0x0, qrob, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), gqdk(0x0, qrob, 'volume', function () {
            return 0x1;
        }, function (q0dkgb) {}), ep9_['_null'] = undefined, ep9_;
    }(qo0kb),
        td8g = function () {
        function w2pf9_() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = j7xrvi['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        hpczte(w2pf9_, 'laya.wx.mini.MiniVideo');
        var boyqr = w2pf9_['prototype'];
        return boyqr['on'] = function (pzh_e2, vjo5ry, j7ry) {
            if (pzh_e2 == 'loadedmetadata') this['onPlayFunc'] = j7ry['bind'](vjo5ry), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else pzh_e2 == 'ended' && (this['onEndedFunC'] = j7ry['bind'](vjo5ry), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, boyqr['onTimeUpdateFunc'] = function (g86t) {
            this['position'] = g86t['position'], this['_duration'] = g86t['duration'];
        }, boyqr['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, boyqr['onended'] = function (ezcpth, _$9fw) {
            this['onEndedFunC'] = _$9fw['bind'](ezcpth), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, boyqr['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, boyqr['off'] = function (w9$, ez2p_, jv7xri) {
            if (w9$ == 'loadedmetadata') this['onPlayFunc'] = jv7xri['bind'](ez2p_), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else w9$ == 'ended' && (this['onEndedFunC'] = jv7xri['bind'](ez2p_), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, boyqr['load'] = function (um43a) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = um43a;
        }, boyqr['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, boyqr['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, boyqr['size'] = function (pw2_ze, dt6c8g) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = pw2_ze, this['videoElement']['height'] = dt6c8g;
        }, boyqr['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, boyqr['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, gqdk(0x0, boyqr, 'duration', function () {
            return this['_duration'];
        }), gqdk(0x0, boyqr, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (zet8) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = zet8;
        }), gqdk(0x0, boyqr, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), gqdk(0x0, boyqr, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), gqdk(0x0, boyqr, 'ended', function () {
            return this['videoend'];
        }), gqdk(0x0, boyqr, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (p2wf9_) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = p2wf9_;
        }), gqdk(0x0, boyqr, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (r7xvy) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = r7xvy;
        }), gqdk(0x0, boyqr, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (tzec) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = tzec;
        }), gqdk(0x0, boyqr, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), gqdk(0x0, boyqr, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (gqk5) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = gqk5;
        }), gqdk(0x0, boyqr, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (d6gck8) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = d6gck8;
        }), gqdk(0x0, boyqr, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), gqdk(0x0, boyqr, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function (xirv7j) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = xirv7j;
        }), gqdk(0x0, boyqr, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (u3l1a) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = u3l1a;
        }), gqdk(0x0, boyqr, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (vr5yj) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = vr5yj;
        }), w2pf9_;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var bq05kg in Laya) {
        var zteh_ = Laya[bq05kg];
        zteh_ && zteh_['__isclass'] && (exports[bq05kg] = zteh_);
    }
});