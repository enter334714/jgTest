var J = wx.h$;
(function (window, document, $f_29) {
    var z_p2w = $f_29['un'],
        _teph = $f_29['uns'],
        f2wp_ = $f_29['static'],
        vq5roy = $f_29['class'],
        bq0g5k = $f_29['getset'],
        fwp_ = $f_29['__newvec'],
        zh68ct = laya['utils']['Browser'],
        xjvy7r = laya['events']['Event'],
        pe_t = laya['events']['EventDispatcher'],
        vo7y = laya['resource']['HTMLImage'],
        h_tez = laya['utils']['Handler'],
        _ze2hp = laya['display']['Input'],
        j7yr = laya['net']['Loader'],
        dht6c = laya['maths']['Matrix'],
        xyvr7 = laya['renders']['Render'],
        eh_p = laya['utils']['RunDriver'],
        d0bk6g = laya['media']['Sound'],
        ht68z = laya['media']['SoundChannel'],
        o5qk = laya['media']['SoundManager'],
        na3u41 = laya['display']['Stage'],
        jxv7ni = laya['net']['URL'],
        _we9p = laya['utils']['Utils'],
        zethp = function () {
        function ni314u() {}
        return vq5roy(ni314u, 'laya.wx.mini.MiniAdpter'), ni314u['getJson'] = function (jv5oyr) {
            return JSON['parse'](jv5oyr);
        }, ni314u['init'] = function (b05qko, zeht8) {
            b05qko === void 0x0 && (b05qko = ![]), zeht8 === void 0x0 && (zeht8 = ![]);
            if (ni314u['_inited']) return;
            ni314u['window'] = window;
            if (ni314u['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            ni314u['_inited'] = !![], ni314u['isZiYu'] = zeht8, ni314u['isPosMsgYu'] = b05qko, ni314u['EnvConfig'] = {}, !ni314u['isZiYu'] && (qby5o0['setNativeFileDir']('/layaairGame'), qby5o0['existDir'](qby5o0['fileNativeDir'], h_tez['create'](ni314u, ni314u['onMkdirCallBack']))), ni314u['window']['focus'] = function () {}, $f_29['getUrlPath'] = function () {}, ni314u['window']['logtime'] = function (yorq5b) {}, ni314u['window']['alertTimeLog'] = function (orvj7y) {}, ni314u['window']['resetShareInfo'] = function () {}, ni314u['window']['CanvasRenderingContext2D'] = function () {}, ni314u['window']['CanvasRenderingContext2D']['prototype'] = ni314u['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], ni314u['window']['document']['body']['appendChild'] = function () {}, ni314u['EnvConfig']['pixelRatioInt'] = 0x0, eh_p['getPixelRatio'] = ni314u['pixelRatio'], ni314u['_preCreateElement'] = zh68ct['createElement'], zh68ct['createElement'] = ni314u['createElement'], eh_p['createShaderCondition'] = ni314u['createShaderCondition'], _we9p['parseXMLFromString'] = ni314u['parseXMLFromString'], _ze2hp['_createInputElement'] = k0o['_createInputElement'], ni314u['EnvConfig']['load'] = j7yr['prototype']['load'], j7yr['prototype']['load'] = $_92w['prototype']['load'], ni314u['isZiYu'] && b05qko && wx['onMessage'](function (hpze2) {
                hpze2['isLoad'] && (qby5o0['ziyuFileData'][hpze2['url']] = hpze2['data']);
            });
        }, ni314u['onMkdirCallBack'] = function (zpeh2, zphcte) {
            if (!zpeh2) qby5o0['filesListObj'] = JSON['parse'](zphcte['data']);
        }, ni314u['pixelRatio'] = function () {
            if (!ni314u['EnvConfig']['pixelRatioInt']) try {
                var u1in3 = wx['getSystemInfoSync']();
                return ni314u['EnvConfig']['pixelRatioInt'] = u1in3['pixelRatio'], u1in3 = u1in3, u1in3['pixelRatio'];
            } catch (hdtc) {}
            return ni314u['EnvConfig']['pixelRatioInt'];
        }, ni314u['createElement'] = function (qy5rvo) {
            if (qy5rvo == 'canvas') {
                var r7vjix;
                return ni314u['idx'] == 0x1 ? ni314u['isZiYu'] ? (r7vjix = sharedCanvas, r7vjix['style'] = {}) : r7vjix = window['canvas'] : r7vjix = window['wx']['createCanvas'](), ni314u['idx']++, r7vjix;
            } else {
                if (qy5rvo == 'textarea' || qy5rvo == 'input') return ni314u['onCreateInput'](qy5rvo);else {
                    if (qy5rvo == 'div') {
                        var w2p9e = ni314u['_preCreateElement'](qy5rvo);
                        return w2p9e['contains'] = function (j5orv) {
                            return null;
                        }, w2p9e['removeChild'] = function (i34n1) {}, w2p9e;
                    } else return ni314u['_preCreateElement'](qy5rvo);
                }
            }
        }, ni314u['onCreateInput'] = function (g0bd6k) {
            var phte_z = ni314u['_preCreateElement'](g0bd6k);
            return phte_z['focus'] = k0o['wxinputFocus'], phte_z['blur'] = k0o['wxinputblur'], phte_z['style'] = {}, phte_z['value'] = 0x0, phte_z['parentElement'] = {}, phte_z['placeholder'] = {}, phte_z['type'] = {}, phte_z['setColor'] = function (pw_z) {}, phte_z['setType'] = function (qor5yb) {}, phte_z['setFontFace'] = function (f_9) {}, phte_z['addEventListener'] = function (z8hect) {}, phte_z['contains'] = function (tzecp) {
                return null;
            }, phte_z['removeChild'] = function (qvy5) {}, phte_z;
        }, ni314u['createShaderCondition'] = function (y0qb5) {
            var g6dc8t = this,
                yjro7v = function () {
                var gk0bdq = y0qb5;
                return g6dc8t[y0qb5['replace']('this.', '')];
            };
            return yjro7v;
        }, ni314u['EnvConfig'] = null, ni314u['window'] = null, ni314u['_preCreateElement'] = null, ni314u['_inited'] = ![], ni314u['wxRequest'] = null, ni314u['systemInfo'] = null, ni314u['version'] = '0.0.1', ni314u['isZiYu'] = ![], ni314u['isPosMsgYu'] = ![], ni314u['parseXMLFromString'] = function (p_2ew9) {
            var kcdg6, nu4i31;
            p_2ew9 = p_2ew9['replace'](/>\s+</g, '><');
            try {
                kcdg6 = new window['Parser']['DOMParser']()['parseFromString'](p_2ew9, 'text/xml');
            } catch (vy5qo) {
                throw '需要引入xml解析库文件';
            }
            return kcdg6;
        }, ni314u['idx'] = 0x1, ni314u;
    }(),
        cth = function () {
        function ni741() {}
        vq5roy(ni741, 'laya.wx.mini.MiniImage');
        var rxjiv = ni741['prototype'];
        return rxjiv['_loadImage'] = function (f_w$92) {
            var h6z8tc = this,
                czphet = ![];
            f_w$92['indexOf']('layaNativeDir/') == -0x1 && (czphet = !![], f_w$92 = jxv7ni['formatURL'](f_w$92));
            if (!qby5o0['getFileInfo'](f_w$92)) {
                if (f_w$92['indexOf']('http://') != -0x1 || f_w$92['indexOf']('https://') != -0x1) qby5o0['downImg'](f_w$92, new h_tez(ni741, ni741['onDownImgCallBack'], [f_w$92, h6z8tc]), f_w$92);else ni741['onCreateImage'](f_w$92, h6z8tc, !![]);
            } else ni741['onCreateImage'](f_w$92, h6z8tc, !czphet);
        }, ni741['onDownImgCallBack'] = function (t8c6z, f$_9w, k80dg) {
            if (!k80dg) ni741['onCreateImage'](t8c6z, f$_9w);else f$_9w['onError'](null);
        }, ni741['onCreateImage'] = function (yrv5j, hc68dt, qo50yb) {
            qo50yb === void 0x0 && (qo50yb = ![]);
            var yojrv5;
            if (!qo50yb) {
                var n41a3u = qby5o0['getFileInfo'](yrv5j),
                    j1nx7i = n41a3u['md5'];
                yojrv5 = qby5o0['getFileNativePath'](j1nx7i);
            } else yojrv5 = yrv5j;
            if (hc68dt['imgCache'] == null) hc68dt['imgCache'] = {};
            var v7jyor;
            function gkb60() {
                v7jyor['onload'] = null, v7jyor['onerror'] = null, delete hc68dt['imgCache'][yrv5j];
            }
            ;
            var q0ob5y = function () {
                gkb60(), hc68dt['onLoaded'](v7jyor);
            },
                x174in = function () {
                gkb60(), hc68dt['event']('error', 'Load image failed');
            };
            hc68dt['_type'] == 'nativeimage' ? (v7jyor = new zh68ct['window']['Image'](), v7jyor['crossOrigin'] = '', v7jyor['onload'] = q0ob5y, v7jyor['onerror'] = x174in, v7jyor['src'] = yojrv5, hc68dt['imgCache'][yrv5j] = v7jyor) : new vo7y['create'](yojrv5, {
                'onload': q0ob5y,
                'onerror': x174in,
                'onCreate': function (dk06b) {
                    v7jyor = dk06b, hc68dt['imgCache'][yrv5j] = dk06b;
                }
            });
        }, ni741;
    }(),
        k0o = function () {
        function bo5q0() {}
        return vq5roy(bo5q0, 'laya.wx.mini.MiniInput'), bo5q0['_createInputElement'] = function () {
            _ze2hp['_initInput'](_ze2hp['area'] = zh68ct['createElement']('textarea')), _ze2hp['_initInput'](_ze2hp['input'] = zh68ct['createElement']('input')), _ze2hp['inputContainer'] = zh68ct['createElement']('div'), _ze2hp['inputContainer']['style']['position'] = 'absolute', _ze2hp['inputContainer']['style']['zIndex'] = 0x186a0, zh68ct['container']['appendChild'](_ze2hp['inputContainer']), _ze2hp['inputContainer']['setPos'] = function (htec, yq50bo) {
                _ze2hp['inputContainer']['style']['left'] = htec + 'px', _ze2hp['inputContainer']['style']['top'] = yq50bo + 'px';
            }, $f_29['stage']['on']('resize', null, bo5q0['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (o5qbk0) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), o5qk['_soundClass'] = c8htz, o5qk['_musicClass'] = c8htz, window['_videoClass'] = z_h2pe;
        }, bo5q0['_onStageResize'] = function () {
            var qb5k = $f_29['stage']['_canvasTransform']['identity']();
            qb5k['scale'](zh68ct['width'] / xyvr7['canvas']['width'] / eh_p['getPixelRatio'](), zh68ct['height'] / xyvr7['canvas']['height'] / eh_p['getPixelRatio']());
        }, bo5q0['wxinputFocus'] = function (b0k5qg) {
            var q05b = _ze2hp['inputElement']['target'];
            if (q05b && !q05b['editable']) return;
            zethp['window']['wx']['offKeyboardConfirm'](), zethp['window']['wx']['offKeyboardInput'](), zethp['window']['wx']['showKeyboard']({
                'defaultValue': q05b['text'],
                'maxLength': q05b['maxChars'],
                'multiple': q05b['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (o5qy) {},
                'fail': function (dk6bg) {}
            }), zethp['window']['wx']['onKeyboardConfirm'](function (yojvr5) {
                var _w2ez = yojvr5 ? yojvr5['value'] : '';
                q05b['text'] = _w2ez, q05b['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), zethp['window']['wx']['onKeyboardInput'](function (vro7yj) {
                var ua34l1 = vro7yj ? vro7yj['value'] : '';
                if (!q05b['multiline']) {
                    if (ua34l1['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                q05b['text'] = ua34l1, q05b['event']('input');
            });
        }, bo5q0['inputEnter'] = function () {
            _ze2hp['inputElement']['target']['focus'] = ![];
        }, bo5q0['wxinputblur'] = function () {
            bo5q0['hideKeyboard']();
        }, bo5q0['hideKeyboard'] = function () {
            zethp['window']['wx']['offKeyboardConfirm'](), zethp['window']['wx']['offKeyboardInput'](), zethp['window']['wx']['hideKeyboard']({
                'success': function (n13a) {
                    console['log']('隐藏键盘');
                },
                'fail': function (eztph) {
                    console['log']('隐藏键盘出错:' + (eztph ? eztph['errMsg'] : ''));
                }
            });
        }, bo5q0;
    }(),
        $_92w = function () {
        function zep2h() {}
        vq5roy(zep2h, 'laya.wx.mini.MiniLoader');
        var vry7o = zep2h['prototype'];
        return vry7o['load'] = function (jixn1, zt6h8c, o5bqy, ew92, gk0q5) {
            o5bqy === void 0x0 && (o5bqy = !![]), gk0q5 === void 0x0 && (gk0q5 = ![]);
            var qovry = this;
            qovry['_url'] = jixn1;
            if (jixn1['indexOf']('data:image') === 0x0) qovry['_type'] = zt6h8c = 'image';else qovry['_type'] = zt6h8c || (zt6h8c = qovry['getTypeFromUrl'](jixn1));
            qovry['_cache'] = o5bqy, qovry['_data'] = null;
            var jyr5 = 'ascii';
            if (jixn1['indexOf']('.fnt') != -0x1) jyr5 = 'utf8';else zt6h8c == 'arraybuffer' && (jyr5 = '');
            ;
            var $29wf_ = _we9p['getFileExtension'](jixn1);
            if (zep2h['_fileTypeArr']['indexOf']($29wf_) != -0x1) zethp['EnvConfig']['load']['call'](this, jixn1, zt6h8c, o5bqy, ew92, gk0q5);else {
                if (!qby5o0['getFileInfo'](jixn1)) {
                    if (jixn1['indexOf']('layaNativeDir/') != -0x1) {
                        if (zethp['isZiYu']) {
                            var ze8th = qby5o0['ziyuFileData'][jixn1];
                            qovry['onLoaded'](ze8th);
                            return;
                        } else {
                            cosnole['log']('read read'), qby5o0['read'](jixn1, jyr5, new h_tez(zep2h, zep2h['onReadNativeCallBack'], [jyr5, jixn1, zt6h8c, o5bqy, ew92, gk0q5, qovry]));
                            return;
                        }
                    }
                    if (jxv7ni['rootPath'] == '') var j1in7x = jixn1;else j1in7x = jixn1['split'](jxv7ni['rootPath'])[0x0];
                    jixn1['indexOf']('http://') != -0x1 || jixn1['indexOf']('https://') != -0x1 ? zethp['EnvConfig']['load']['call'](qovry, jixn1, zt6h8c, o5bqy, ew92, gk0q5) : qby5o0['readFile'](j1in7x, jyr5, new h_tez(zep2h, zep2h['onReadNativeCallBack'], [jyr5, jixn1, zt6h8c, o5bqy, ew92, gk0q5, qovry]), jixn1);
                } else zethp['EnvConfig']['load']['call'](this, jixn1, zt6h8c, o5bqy, ew92, gk0q5);
            }
        }, vry7o['resMgrLoad'] = function (q5bo0y, yqr5o, f92wp, t8c6hd, yjrxv, s9f2$, zct6) {
            f92wp === void 0x0 && (f92wp = 0x0), t8c6hd === void 0x0 && (t8c6hd = ![]), yjrxv === void 0x0 && (yjrxv = ![]), s9f2$ === void 0x0 && (s9f2$ = 0x0), zct6 === void 0x0 && (zct6 = 0x3), q5bo0y['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', q5bo0y), zethp['EnvConfig']['resMgrLoad'](q5bo0y, (iun43, nixj1, cheztp) => {
                zep2h['prototype']['resMgrLoadCallBack'](iun43, nixj1, cheztp, yqr5o);
            }, f92wp, t8c6hd, yjrxv, s9f2$, zct6);
        }, vry7o['resMgrLoadCallBack'] = function (rbo5yq, yorj5, okb05, d6cht) {
            console['log']('buff:::', rbo5yq, okb05, qby5o0['fileNativeDir'] + '///' + qby5o0['fileListName']), d6cht(rbo5yq, yorj5, okb05);
        }, vry7o['clearRes'] = function (pez2, kg806) {
            kg806 === void 0x0 && (kg806 = ![]);
            var zpetch = this;
            zpetch['clearRes'](pez2, kg806);
            var yov7r = qby5o0['getFileInfo'](pez2);
            if (yov7r && (pez2['indexOf']('http://') != -0x1 || pez2['indexOf']('https://') != -0x1)) {
                var d6kb0g = yov7r['md5'],
                    x34n1i = qby5o0['getFileNativePath'](d6kb0g);
                qby5o0['remove'](x34n1i);
            }
        }, zep2h['onReadNativeCallBack'] = function (gdkc6, zthc86, t6cg8, ni174, gdck86, ehc, q5yob, c6g8, k0qgb) {
            ni174 === void 0x0 && (ni174 = !![]), ehc === void 0x0 && (ehc = ![]), c6g8 === void 0x0 && (c6g8 = 0x0);
            if (!c6g8) {
                var _f$2w;
                if (t6cg8 == 'json' || t6cg8 == 'atlas') _f$2w = zethp['getJson'](k0qgb['data']);else t6cg8 == 'xml' ? _f$2w = _we9p['parseXMLFromString'](k0qgb['data']) : _f$2w = k0qgb['data'];
                q5yob['onLoaded'](_f$2w), !zethp['isZiYu'] && zethp['isPosMsgYu'] && t6cg8 != 'arraybuffer' && wx['postMessage']({
                    'url': zthc86,
                    'data': _f$2w,
                    'isLoad': !![]
                });
            } else c6g8 == 0x1 && zethp['EnvConfig']['load']['call'](q5yob, zthc86, t6cg8, ni174, gdck86, ehc);
        }, f2wp_(zep2h, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), zep2h;
    }(),
        qby5o0 = function (zp_he2) {
        function _hep2z() {
            _hep2z['__super']['call'](this);
            ;
        }
        return vq5roy(_hep2z, 'laya.wx.mini.MiniFileMgr', zp_he2), _hep2z['isLoadFile'] = function (lu4ma) {
            return _hep2z['_fileTypeArr']['indexOf'](lu4ma) != -0x1 ? !![] : ![];
        }, _hep2z['getFileInfo'] = function (fw9$) {
            var in431x = fw9$['split']('?')[0x0],
                a14lu3 = _hep2z['filesListObj'][in431x];
            if (a14lu3 == null) return null;else return a14lu3;
            return null;
        }, _hep2z['onFileUpdate'] = function (tph_z, kg680d) {
            var zwe_p2 = tph_z['split']('/'),
                ezp = zwe_p2[zwe_p2['length'] - 0x1],
                oyr5qb = _hep2z['getFileInfo'](kg680d);
            if (oyr5qb == null) _hep2z['onSaveFile'](kg680d, ezp);else {
                if (oyr5qb['readyUrl'] != kg680d) _hep2z['remove'](ezp, kg680d);
            }
        }, _hep2z['exits'] = function (ct6dg8, v7yjxr) {
            var echzt8 = _hep2z['getFileNativePath'](ct6dg8);
            _hep2z['fs']['getFileInfo']({
                'filePath': echzt8,
                'success': function (bqkg5) {
                    v7yjxr != null && v7yjxr['runWith']([0x0, bqkg5]);
                },
                'fail': function (q0bgdk) {
                    v7yjxr != null && v7yjxr['runWith']([0x1, q0bgdk]);
                }
            });
        }, _hep2z['read'] = function (rqbo5, cehz, rvoq5, cthep) {
            cehz === void 0x0 && (cehz = 'ascill'), cthep === void 0x0 && (cthep = '');
            var $29wf;
            cthep != '' ? $29wf = _hep2z['getFileNativePath'](rqbo5) : $29wf = rqbo5, _hep2z['fs']['readFile']({
                'filePath': $29wf,
                'encoding': cehz,
                'success': function (yvr7j) {
                    rvoq5 != null && rvoq5['runWith']([0x0, yvr7j]);
                },
                'fail': function (sfw92$) {
                    if (sfw92$ && cthep != '') _hep2z['down'](cthep, cehz, rvoq5, cthep);else rvoq5 != null && rvoq5['runWith']([0x1]);
                }
            });
        }, _hep2z['readNativeFile'] = function (gt6, ptzhc) {
            _hep2z['fs']['readFile']({
                'filePath': gt6,
                'encoding': '',
                'success': function (jxi7r) {
                    ptzhc != null && ptzhc['runWith']([0x0]);
                },
                'fail': function (b5qok) {
                    ptzhc != null && ptzhc['runWith']([0x1]);
                }
            });
        }, _hep2z['down'] = function (a3u14n, oq5rby, i3x4n, y0boq) {
            oq5rby === void 0x0 && (oq5rby = 'ascill'), y0boq === void 0x0 && (y0boq = '');
            var ezh2_p = _hep2z['getFileNativePath'](y0boq),
                y7vorj = _hep2z['wxdown']({
                'url': a3u14n,
                'filePath': ezh2_p,
                'success': function (echpt) {
                    if (echpt['statusCode'] === 0xc8) _hep2z['readFile'](echpt['filePath'], oq5rby, i3x4n, y0boq);
                },
                'fail': function (c8zth6) {
                    i3x4n != null && i3x4n['runWith']([0x1, c8zth6]);
                }
            });
            y7vorj['onProgressUpdate'](function (gkd086) {
                i3x4n != null && i3x4n['runWith']([0x2, gkd086['progress']]);
            });
        }, _hep2z['readFile'] = function (pw9_e2, vyjr7o, s$w29, oqvy5) {
            vyjr7o === void 0x0 && (vyjr7o = 'ascill'), oqvy5 === void 0x0 && (oqvy5 = ''), _hep2z['fs']['readFile']({
                'filePath': pw9_e2,
                'encoding': vyjr7o,
                'success': function (an43u) {
                    if (pw9_e2['indexOf']('http://') != -0x1 || pw9_e2['indexOf']('https://') != -0x1) _hep2z['onFileUpdate'](pw9_e2, oqvy5);
                    s$w29 != null && s$w29['runWith']([0x0, an43u]);
                },
                'fail': function (jvory) {
                    if (jvory) s$w29 != null && s$w29['runWith']([0x1, jvory]);
                }
            });
        }, _hep2z['downImg'] = function (wep_2z, qbor5y, k8g0d) {
            k8g0d === void 0x0 && (k8g0d = '');
            var u1n43i = _hep2z['wxdown']({
                'url': wep_2z,
                'success': function (thezp_) {
                    thezp_['statusCode'] === 0xc8 && _hep2z['copyFile'](thezp_['tempFilePath'], k8g0d, qbor5y);
                },
                'fail': function (ctezhp) {
                    qbor5y != null && qbor5y['runWith']([0x1, ctezhp]);
                }
            });
        }, _hep2z['copyFile'] = function (ze8hct, pwe2z_, z8teh) {
            var bko5q = ze8hct['split']('/'),
                $f2_ = bko5q[bko5q['length'] - 0x1],
                i4u1n3 = pwe2z_['split']('?')[0x0],
                vxni7 = _hep2z['getFileInfo'](pwe2z_),
                bq5o0 = _hep2z['getFileNativePath']($f2_);
            _hep2z['fs']['copyFile']({
                'srcPath': ze8hct,
                'destPath': bq5o0,
                'success': function (i17xnj) {
                    if (!vxni7) _hep2z['onSaveFile'](pwe2z_, $f2_), z8teh != null && z8teh['runWith']([0x0]);else {
                        if (vxni7['readyUrl'] != pwe2z_) _hep2z['remove']($f2_, pwe2z_, z8teh);
                    }
                },
                'fail': function (w$_2f9) {
                    z8teh != null && z8teh['runWith']([0x1, w$_2f9]);
                }
            });
        }, _hep2z['getFileNativePath'] = function (pz2e_w) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + pz2e_w;
        }, _hep2z['remove'] = function (u3a4n, u13an4, anu14) {
            u13an4 === void 0x0 && (u13an4 = '');
            var c6tg8 = _hep2z['getFileInfo'](u13an4),
                oryj5 = _hep2z['getFileNativePath'](c6tg8['md5']);
            $f_29['loader']['clearRes'](c6tg8['readyUrl']), _hep2z['fs']['unlink']({
                'filePath': oryj5,
                'success': function (qkb50g) {
                    if (u13an4 != '') _hep2z['onSaveFile'](u13an4, u3a4n);
                    anu14 != null && anu14['runWith']([0x0]);
                },
                'fail': function (ctzh8e) {}
            });
        }, _hep2z['onSaveFile'] = function (_zhe2p, vijnx) {
            var _ewz = _zhe2p['split']('?')[0x0];
            _hep2z['filesListObj'][_ewz] = {
                'md5': vijnx,
                'readyUrl': _zhe2p
            }, _hep2z['fs']['writeFile']({
                'filePath': _hep2z['fileNativeDir'] + '/' + _hep2z['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](_hep2z['filesListObj']),
                'success': function (h6czt) {
                    console['log']('写入测试测试成功：', h6czt);
                },
                'fail': function (a13l4u) {
                    console['log']('写入测试测试失败：', a13l4u);
                }
            });
        }, _hep2z['existDir'] = function (c8zet, irv7j) {
            _hep2z['fs']['mkdir']({
                'dirPath': c8zet,
                'success': function (yv7roj) {
                    irv7j != null && irv7j['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (ry5vq) {
                    if (ry5vq['errMsg']['indexOf']('file already exists') != -0x1) _hep2z['readSync'](_hep2z['fileListName'], 'utf8', irv7j);else irv7j != null && irv7j['runWith']([0x1, ry5vq]);
                }
            });
        }, _hep2z['readSync'] = function (_2zwep, g86c, xjn7v, oyr7vj) {
            g86c === void 0x0 && (g86c = 'ascill'), oyr7vj === void 0x0 && (oyr7vj = '');
            var jvixn = _hep2z['getFileNativePath'](_2zwep),
                oyqvr;
            try {
                oyqvr = _hep2z['fs']['readFileSync'](jvixn), xjn7v != null && xjn7v['runWith']([0x0, { 'data': oyqvr }]);
            } catch (xi1nj7) {
                xjn7v != null && xjn7v['runWith']([0x1]);
            }
        }, _hep2z['readCache'] = function () {}, _hep2z['writeCache'] = function ($w_9) {
            var e2w = readyUrl['split']('?')[0x0];
            _hep2z['filesListObj'][e2w] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, _hep2z['fs']['writeFile']({
                'filePath': _hep2z['fileNativeDir'] + '/' + _hep2z['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](_hep2z['filesListObj']),
                'success': function (e9wp) {},
                'fail': function (yoq0) {}
            });
        }, _hep2z['setNativeFileDir'] = function (pew92_) {
            _hep2z['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + pew92_;
        }, _hep2z['filesListObj'] = {}, _hep2z['fileNativeDir'] = null, _hep2z['fileListName'] = 'layaairfiles.txt', _hep2z['ziyuFileData'] = {}, f2wp_(_hep2z, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), _hep2z;
    }(pe_t),
        c8htz = function (jyv7or) {
        function y5bo0q() {
            this['_sound'] = null, this['_chanell'] = null, this['url'] = null, this['loaded'] = ![], y5bo0q['__super']['call'](this), this['_sound'] = y5bo0q['_createSound'](), this['_chanell'] = new _f$9(this['_sound']);
        }
        vq5roy(y5bo0q, 'laya.wx.mini.MiniSound', jyv7or);
        var chepzt = y5bo0q['prototype'];
        return chepzt['load'] = function (fw9$2_) {
            var kb5q0 = this;
            fw9$2_ = jxv7ni['formatURL'](fw9$2_), this['url'] = fw9$2_;
            if (y5bo0q['_audioCache'][fw9$2_]) {
                this['event']('complete');
                return;
            }
            function wp29e() {
                if (y5bo0q['_null'] != undefined) kb5q0['_sound']['onCanplay'](y5bo0q['_null']), kb5q0['_sound']['onError'](y5bo0q['_null']);else try {
                    kb5q0['_sound']['onCanplay'](null), kb5q0['_sound']['onError'](null), y5bo0q['_null'] = null;
                } catch (pehzc) {
                    console['warn']('[wxmini] _clearSound:' + pehzc), kb5q0['_sound']['onCanplay'](qy5b0), kb5q0['_sound']['onError'](qy5b0), y5bo0q['_null'] = qy5b0;
                }
            }
            function dg8() {
                hezctp['loaded'] = !![], hezctp['event']('complete'), y5bo0q['_audioCache'][hezctp['url']] = hezctp;
            }
            function l1a34u(jr7vo) {
                console['error']('errCode=' + jr7vo['errCode'] + '  errMsg=' + jr7vo['errMsg']), hezctp['event']('error');
            }
            function qy5b0() {}
            this['_sound']['onCanplay'](dg8), this['_sound']['onError'](l1a34u), this['_sound']['src'] = fw9$2_;
            var hezctp = this;
        }, chepzt['play'] = function (zewp, i7xrj) {
            zewp === void 0x0 && (zewp = 0x0), i7xrj === void 0x0 && (i7xrj = 0x0);
            var ezh8c, _pzeth;
            if (this['url'] == o5qk['_tMusic']) {
                if (!y5bo0q['_musicAudio']) y5bo0q['_musicAudio'] = this['_sound'];
                ezh8c = y5bo0q['_musicAudio'], _pzeth = this['_chanell'];
            } else ezh8c = this['_sound'], _pzeth = this['_chanell'];
            return ezh8c['src'] = this['url'], ezh8c['startTime'] = 0x0, _pzeth['isStopped'] && (_pzeth['url'] = this['url'], _pzeth['loops'] = i7xrj, _pzeth['startTime'] = zewp, _pzeth['play'](), o5qk['addChannel'](_pzeth)), _pzeth;
        }, chepzt['dispose'] = function () {
            var hzet8c = y5bo0q['_audioCache'][this['url']];
            hzet8c && (hzet8c['src'] = '', delete y5bo0q['_audioCache'][this['url']]);
        }, bq0g5k(0x0, chepzt, 'duration', function () {
            return this['_sound']['duration'];
        }), y5bo0q['_createSound'] = function () {
            y5bo0q['_id']++;
            var rqob5 = zethp['window']['wx']['createInnerAudioContext']({ 'useWebAudioImplement': ![] });
            return rqob5;
        }, y5bo0q['_musicAudio'] = null, y5bo0q['_id'] = 0x0, y5bo0q['_audioCache'] = {}, y5bo0q['_null'] = undefined, y5bo0q;
    }(pe_t),
        _f$9 = function (x41i7) {
        function w_$92f(dkqg0b) {
            this['_audio'] = null, this['_onEnd'] = null, w_$92f['__super']['call'](this), this['isStopped'] = !![], this['_audio'] = dkqg0b, this['_onEnd'] = _we9p['bind'](this['__onEnd'], this), dkqg0b['onEnded'](this['_onEnd']);
        }
        vq5roy(w_$92f, 'laya.wx.mini.MiniSoundChannel', x41i7);
        var zthpc = w_$92f['prototype'];
        return zthpc['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && ($f_29['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, zthpc['__onNull'] = function () {}, zthpc['play'] = function () {
            this['isStopped'] = ![], o5qk['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, zthpc['stop'] = function () {
            this['isStopped'] = !![], o5qk['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
        }, zthpc['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, zthpc['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], o5qk['addChannel'](this), this['_audio']['play']();
        }, bq0g5k(0x0, zthpc, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), bq0g5k(0x0, zthpc, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), bq0g5k(0x0, zthpc, 'volume', function () {
            return 0x1;
        }, function (uan341) {}), w_$92f['_null'] = undefined, w_$92f;
    }(ht68z),
        z_h2pe = function () {
        function lm4ua() {
            this['videoend'] = ![], this['videourl'] = '', this['videoElement'] = zethp['window']['wx']['createVideo']({
                'showCenterPlayBtn': ![],
                'showProgressInControlMode': ![],
                'objectFit': 'fill'
            });
        }
        vq5roy(lm4ua, 'laya.wx.mini.MiniVideo');
        var vjnx7i = lm4ua['prototype'];
        return vjnx7i['on'] = function (zept_, l43, ixn74) {
            if (zept_ == 'loadedmetadata') this['onPlayFunc'] = ixn74['bind'](l43), this['videoElement']['onPlay'] = this['onPlayFunction']['bind'](this);else zept_ == 'ended' && (this['onEndedFunC'] = ixn74['bind'](l43), this['videoElement']['onEnded'] = this['onEndedFunction']['bind'](this));
            this['videoElement']['onTimeUpdate'] = this['onTimeUpdateFunc']['bind'](this);
        }, vjnx7i['onTimeUpdateFunc'] = function (ehpctz) {
            this['position'] = ehpctz['position'], this['_duration'] = ehpctz['duration'];
        }, vjnx7i['onPlayFunction'] = function () {
            if (this['videoElement']) this['videoElement']['readyState'] = 0xc8;
            console['log']('=====视频加载完成========'), this['onPlayFunc'] != null && this['onPlayFunc']();
        }, vjnx7i['onended'] = function (n4i3x, kq0gbd) {
            this['onEndedFunC'] = kq0gbd['bind'](n4i3x), this['videoElement']['onended'] = this['onEndedFunction']['bind'](this);
        }, vjnx7i['onEndedFunction'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], console['log']('=====视频播放完毕========'), this['onEndedFunC'] != null && this['onEndedFunC']();
        }, vjnx7i['off'] = function (ep_h2, okqb5, rx7iv) {
            if (ep_h2 == 'loadedmetadata') this['onPlayFunc'] = rx7iv['bind'](okqb5), this['videoElement']['offPlay'] = this['onPlayFunction']['bind'](this);else ep_h2 == 'ended' && (this['onEndedFunC'] = rx7iv['bind'](okqb5), this['videoElement']['offEnded'] = this['onEndedFunction']['bind'](this));
        }, vjnx7i['load'] = function (e_h2zp) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = e_h2zp;
        }, vjnx7i['play'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = ![], this['videoElement']['play']();
        }, vjnx7i['pause'] = function () {
            if (!this['videoElement']) return;
            this['videoend'] = !![], this['videoElement']['pause']();
        }, vjnx7i['size'] = function (oyrj5v, oy5qr) {
            if (!this['videoElement']) return;
            this['videoElement']['width'] = oyrj5v, this['videoElement']['height'] = oy5qr;
        }, vjnx7i['destroy'] = function () {
            if (this['videoElement']) this['videoElement']['destroy']();
            this['videoElement'] = null, this['onEndedFunC'] = null, this['onPlayFunc'] = null, this['videoend'] = ![], this['videourl'] = null;
        }, vjnx7i['reload'] = function () {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = this['videourl'];
        }, bq0g5k(0x0, vjnx7i, 'duration', function () {
            return this['_duration'];
        }), bq0g5k(0x0, vjnx7i, 'currentTime', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['initialTime'];
        }, function (i17jx) {
            if (!this['videoElement']) return;
            this['videoElement']['initialTime'] = i17jx;
        }), bq0g5k(0x0, vjnx7i, 'videoWidth', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['width'];
        }), bq0g5k(0x0, vjnx7i, 'videoHeight', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['height'];
        }), bq0g5k(0x0, vjnx7i, 'ended', function () {
            return this['videoend'];
        }), bq0g5k(0x0, vjnx7i, 'loop', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['loop'];
        }, function (u4mla) {
            if (!this['videoElement']) return;
            this['videoElement']['loop'] = u4mla;
        }), bq0g5k(0x0, vjnx7i, 'playbackRate', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['playbackRate'];
        }, function (_2epw9) {
            if (!this['videoElement']) return;
            this['videoElement']['playbackRate'] = _2epw9;
        }), bq0g5k(0x0, vjnx7i, 'muted', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['muted'];
        }, function (p_e9) {
            if (!this['videoElement']) return;
            this['videoElement']['muted'] = p_e9;
        }), bq0g5k(0x0, vjnx7i, 'paused', function () {
            if (!this['videoElement']) return ![];
            return this['videoElement']['paused'];
        }), bq0g5k(0x0, vjnx7i, 'x', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['x'];
        }, function (oq5) {
            if (!this['videoElement']) return;
            this['videoElement']['x'] = oq5;
        }), bq0g5k(0x0, vjnx7i, 'y', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['y'];
        }, function (sf9$) {
            if (!this['videoElement']) return;
            this['videoElement']['y'] = sf9$;
        }), bq0g5k(0x0, vjnx7i, 'currentSrc', function () {
            return this['videoElement']['src'];
        }), bq0g5k(0x0, vjnx7i, 'src', function () {
            if (!this['videoElement']) return 0x0;
            return this['videoElement']['src'];
        }, function ($w2f9s) {
            if (!this['videoElement']) return;
            this['videoElement']['src'] = $w2f9s;
        }), bq0g5k(0x0, vjnx7i, 'controls', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['controls'];
        }, function (tzpc) {
            if (!this['videoElement']) return;
            this['videoElement']['controls'] = tzpc;
        }), bq0g5k(0x0, vjnx7i, 'autoplay', function () {
            if (!this['videoElement']) return;
            return this['videoElement']['autoplay'];
        }, function (alu3) {
            if (!this['videoElement']) return;
            this['videoElement']['autoplay'] = alu3;
        }), lm4ua;
    }();
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var g6k0db in Laya) {
        var i31xn4 = Laya[g6k0db];
        i31xn4 && i31xn4['__isclass'] && (exports[g6k0db] = i31xn4);
    }
});