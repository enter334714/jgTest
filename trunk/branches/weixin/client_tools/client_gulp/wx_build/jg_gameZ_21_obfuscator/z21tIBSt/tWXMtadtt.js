var v = wx.$d;
(function (window, document, z23_) {
    var tm$go = z23_['un'],
        lif1b = z23_['uns'],
        b6_8 = z23_['static'],
        mot$h = z23_['class'],
        qah4p = z23_['getset'],
        dfxau = z23_['__newvec'],
        ibl8u = laya['utils']['Browser'],
        q0$mho = laya['events']['Event'],
        x9fuad = laya['events']['EventDispatcher'],
        y3k2v = laya['resource']['HTMLImage'],
        _16bi = laya['utils']['Handler'],
        z23ykv = laya['display']['Input'],
        xd9af = laya['net']['Loader'],
        _zk = laya['maths']['Matrix'],
        ua9xd = laya['renders']['Render'],
        po4q5 = laya['utils']['RunDriver'],
        n7rcje = laya['media']['Sound'],
        y3zkw = laya['media']['SoundChannel'],
        yzv2 = laya['media']['SoundManager'],
        o4hmq = laya['display']['Stage'],
        bfu9ld = laya['net']['URL'],
        mt$0ho = laya['utils']['Utils'],
        yzwvk = function () {
        function h04poq() {}
        return mot$h(h04poq, 'laya.wx.mini.MiniAdpter'), h04poq['getJson'] = function (qp54o) {
            return JSON['parse'](qp54o);
        }, h04poq['init'] = function (ecn7r, apd9x) {
            ecn7r === void 0x0 && (ecn7r = ![]), apd9x === void 0x0 && (apd9x = ![]);
            if (h04poq['_inited']) return;
            h04poq['window'] = window;
            if (h04poq['window']['navigator']['userAgent']['indexOf']('MiniGame') < 0x0) return;
            h04poq['_inited'] = !![], h04poq['isZiYu'] = apd9x, h04poq['isPosMsgYu'] = ecn7r, h04poq['EnvConfig'] = {}, !h04poq['isZiYu'] && (ynck7w['setNativeFileDir']('/layaairGame'), ynck7w['existDir'](ynck7w['fileNativeDir'], _16bi['create'](h04poq, h04poq['onMkdirCallBack']))), h04poq['window']['focus'] = function () {}, z23_['getUrlPath'] = function () {}, h04poq['window']['logtime'] = function (f9ludx) {}, h04poq['window']['alertTimeLog'] = function (lbfi1) {}, h04poq['window']['resetShareInfo'] = function () {}, h04poq['window']['CanvasRenderingContext2D'] = function () {}, h04poq['window']['CanvasRenderingContext2D']['prototype'] = h04poq['window']['wx']['createCanvas']()['getContext']('2d')['__proto__'], h04poq['window']['document']['body']['appendChild'] = function () {}, h04poq['EnvConfig']['pixelRatioInt'] = 0x0, po4q5['getPixelRatio'] = h04poq['pixelRatio'], h04poq['_preCreateElement'] = ibl8u['createElement'], ibl8u['createElement'] = h04poq['createElement'], po4q5['createShaderCondition'] = h04poq['createShaderCondition'], mt$0ho['parseXMLFromString'] = h04poq['parseXMLFromString'], z23ykv['_createInputElement'] = oph0['_createInputElement'], h04poq['EnvConfig']['load'] = xd9af['prototype']['load'], xd9af['prototype']['load'] = yn7c['prototype']['load'], h04poq['isZiYu'] && ecn7r && wx['onMessage'](function (flib81) {
                flib81['isLoad'] && (ynck7w['ziyuFileData'][flib81['url']] = flib81['data']);
            });
        }, h04poq['onMkdirCallBack'] = function (ywc7e, wnr7ec) {
            if (!ywc7e) ynck7w['filesListObj'] = JSON['parse'](wnr7ec['data']);
        }, h04poq['pixelRatio'] = function () {
            if (!h04poq['EnvConfig']['pixelRatioInt']) try {
                var ot0$m = wx['getSystemInfoSync']();
                return h04poq['EnvConfig']['pixelRatioInt'] = ot0$m['pixelRatio'], ot0$m = ot0$m, ot0$m['pixelRatio'];
            } catch (dxp9) {}
            return h04poq['EnvConfig']['pixelRatioInt'];
        }, h04poq['createElement'] = function (ey7) {
            if (ey7 == 'canvas') {
                var bulfi;
                return h04poq['idx'] == 0x1 ? h04poq['isZiYu'] ? (bulfi = sharedCanvas, bulfi['style'] = {}) : bulfi = window['canvas'] : bulfi = window['wx']['createCanvas'](), h04poq['idx']++, bulfi;
            } else {
                if (ey7 == 'textarea' || ey7 == 'input') return h04poq['onCreateInput'](ey7);else {
                    if (ey7 == 'div') {
                        var nw7cey = h04poq['_preCreateElement'](ey7);
                        return nw7cey['contains'] = function (v_62z) {
                            return null;
                        }, nw7cey['removeChild'] = function ($tg0m) {}, nw7cey;
                    } else return h04poq['_preCreateElement'](ey7);
                }
            }
        }, h04poq['onCreateInput'] = function (hmot$0) {
            var fl18 = h04poq['_preCreateElement'](hmot$0);
            return fl18['focus'] = oph0['wxinputFocus'], fl18['blur'] = oph0['wxinputblur'], fl18['style'] = {}, fl18['value'] = 0x0, fl18['parentElement'] = {}, fl18['placeholder'] = {}, fl18['type'] = {}, fl18['setColor'] = function (hm40qo) {}, fl18['setType'] = function (luxf) {}, fl18['setFontFace'] = function (vz16) {}, fl18['addEventListener'] = function (t$hom) {}, fl18['contains'] = function (ud9lbf) {
                return null;
            }, fl18['removeChild'] = function (y3zwkc) {}, fl18;
        }, h04poq['createShaderCondition'] = function (oh0$mq) {
            var a5qx4p = this,
                o4mh = function () {
                var y3wvk = oh0$mq;
                return a5qx4p[oh0$mq['replace']('this.', '')];
            };
            return o4mh;
        }, h04poq['EnvConfig'] = null, h04poq['window'] = null, h04poq['_preCreateElement'] = null, h04poq['_inited'] = ![], h04poq['wxRequest'] = null, h04poq['systemInfo'] = null, h04poq['version'] = '0.0.1', h04poq['isZiYu'] = ![], h04poq['isPosMsgYu'] = ![], h04poq['parseXMLFromString'] = function (x4pa5q) {
            var v3k_2z, lbd9fu;
            x4pa5q = x4pa5q['replace'](/>\s+</g, '><');
            try {
                v3k_2z = new window['Parser']['DOMParser']()['parseFromString'](x4pa5q, 'text/xml');
            } catch (x9p5ad) {
                throw '需要引入xml解析库文件';
            }
            return v3k_2z;
        }, h04poq['idx'] = 0x1, h04poq;
    }(),
        zv3_ = function () {
        function cnje() {}
        mot$h(cnje, 'laya.wx.mini.MiniImage');
        var dbf8l = cnje['prototype'];
        return dbf8l['_loadImage'] = function (q4o0ph) {
            var cwre7 = this,
                x4q5p = ![];
            q4o0ph['indexOf']('layaNativeDir/') == -0x1 && (x4q5p = !![], q4o0ph = bfu9ld['formatURL'](q4o0ph));
            if (!ynck7w['getFileInfo'](q4o0ph)) {
                if (q4o0ph['indexOf']('http://') != -0x1 || q4o0ph['indexOf']('https://') != -0x1) ynck7w['downImg'](q4o0ph, new _16bi(cnje, cnje['onDownImgCallBack'], [q4o0ph, cwre7]), q4o0ph);else cnje['onCreateImage'](q4o0ph, cwre7, !![]);
            } else cnje['onCreateImage'](q4o0ph, cwre7, !x4q5p);
        }, cnje['onDownImgCallBack'] = function (kync7w, ce7rnj, ncr) {
            if (!ncr) cnje['onCreateImage'](kync7w, ce7rnj);else ce7rnj['onError'](null);
        }, cnje['onCreateImage'] = function ($o, hqpa54, mh0$to) {
            mh0$to === void 0x0 && (mh0$to = ![]);
            var fldu8;
            if (!mh0$to) {
                var otm$g0 = ynck7w['getFileInfo']($o),
                    m0$gto = otm$g0['md5'];
                fldu8 = ynck7w['getFileNativePath'](m0$gto);
            } else fldu8 = $o;
            if (hqpa54['imgCache'] == null) hqpa54['imgCache'] = {};
            var ogmt$0;
            function _i28() {
                ogmt$0['onload'] = null, ogmt$0['onerror'] = null, delete hqpa54['imgCache'][$o];
            }
            ;
            var nwky7c = function () {
                _i28(), hqpa54['onLoaded'](ogmt$0);
            },
                i_168b = function () {
                _i28(), hqpa54['event']('error', 'Load image failed');
            };
            hqpa54['_type'] == 'nativeimage' ? (ogmt$0 = new ibl8u['window']['Image'](), ogmt$0['crossOrigin'] = '', ogmt$0['onload'] = nwky7c, ogmt$0['onerror'] = i_168b, ogmt$0['src'] = fldu8, hqpa54['imgCache'][$o] = ogmt$0) : new y3k2v['create'](fldu8, {
                'onload': nwky7c,
                'onerror': i_168b,
                'onCreate': function (mq04o) {
                    ogmt$0 = mq04o, hqpa54['imgCache'][$o] = mq04o;
                }
            });
        }, cnje;
    }(),
        oph0 = function () {
        function u8dblf() {}
        return mot$h(u8dblf, 'laya.wx.mini.MiniInput'), u8dblf['_createInputElement'] = function () {
            z23ykv['_initInput'](z23ykv['area'] = ibl8u['createElement']('textarea')), z23ykv['_initInput'](z23ykv['input'] = ibl8u['createElement']('input')), z23ykv['inputContainer'] = ibl8u['createElement']('div'), z23ykv['inputContainer']['style']['position'] = 'absolute', z23ykv['inputContainer']['style']['zIndex'] = 0x186a0, ibl8u['container']['appendChild'](z23ykv['inputContainer']), z23ykv['inputContainer']['setPos'] = function (b8ulif, du8bf) {
                z23ykv['inputContainer']['style']['left'] = b8ulif + 'px', z23ykv['inputContainer']['style']['top'] = du8bf + 'px';
            }, z23_['stage']['on']('resize', null, u8dblf['_onStageResize']), wx['onWindowResize'] && wx['onWindowResize'](function (w3kyzc) {
                window['dispatchEvent'] && window['dispatchEvent']('resize');
            }), yzv2['_soundClass'] = o5p4h, yzv2['_musicClass'] = o5p4h;
        }, u8dblf['_onStageResize'] = function () {
            var hm0o = z23_['stage']['_canvasTransform']['identity']();
            hm0o['scale'](ibl8u['width'] / ua9xd['canvas']['width'] / po4q5['getPixelRatio'](), ibl8u['height'] / ua9xd['canvas']['height'] / po4q5['getPixelRatio']());
        }, u8dblf['wxinputFocus'] = function (axfd9u) {
            var v32yz = z23ykv['inputElement']['target'];
            if (v32yz && !v32yz['editable']) return;
            yzwvk['window']['wx']['offKeyboardConfirm'](), yzwvk['window']['wx']['offKeyboardInput'](), yzwvk['window']['wx']['showKeyboard']({
                'defaultValue': v32yz['text'],
                'maxLength': v32yz['maxChars'],
                'multiple': v32yz['multiline'],
                'confirmHold': !![],
                'confirmType': 'done',
                'success': function (k23vz) {},
                'fail': function (i8l1b6) {}
            }), yzwvk['window']['wx']['onKeyboardConfirm'](function (m0g) {
                var cyw7k3 = m0g ? m0g['value'] : '';
                v32yz['text'] = cyw7k3, v32yz['event']('input'), laya['wx']['mini']['MiniInput']['inputEnter']();
            }), yzwvk['window']['wx']['onKeyboardInput'](function (wkny7c) {
                var e7nrjc = wkny7c ? wkny7c['value'] : '';
                if (!v32yz['multiline']) {
                    if (e7nrjc['indexOf']('\x0a') != -0x1) {
                        laya['wx']['mini']['MiniInput']['inputEnter']();
                        return;
                    }
                }
                v32yz['text'] = e7nrjc, v32yz['event']('input');
            });
        }, u8dblf['inputEnter'] = function () {
            z23ykv['inputElement']['target']['focus'] = ![];
        }, u8dblf['wxinputblur'] = function () {
            u8dblf['hideKeyboard']();
        }, u8dblf['hideKeyboard'] = function () {
            yzwvk['window']['wx']['offKeyboardConfirm'](), yzwvk['window']['wx']['offKeyboardInput'](), yzwvk['window']['wx']['hideKeyboard']({
                'success': function (ceny) {
                    console['log']('隐藏键盘');
                },
                'fail': function (m$o0) {
                    console['log']('隐藏键盘出错:' + (m$o0 ? m$o0['errMsg'] : ''));
                }
            });
        }, u8dblf;
    }(),
        yn7c = function () {
        function w3zyvk() {}
        mot$h(w3zyvk, 'laya.wx.mini.MiniLoader');
        var auf9dx = w3zyvk['prototype'];
        return auf9dx['load'] = function (b1fi, nwkcy, v_z12, encrj, lbi816) {
            v_z12 === void 0x0 && (v_z12 = !![]), lbi816 === void 0x0 && (lbi816 = ![]);
            var f9dlx = this;
            f9dlx['_url'] = b1fi;
            if (b1fi['indexOf']('data:image') === 0x0) f9dlx['_type'] = nwkcy = 'image';else f9dlx['_type'] = nwkcy || (nwkcy = f9dlx['getTypeFromUrl'](b1fi));
            f9dlx['_cache'] = v_z12, f9dlx['_data'] = null;
            var i1b8fl = 'ascii';
            if (b1fi['indexOf']('.fnt') != -0x1) i1b8fl = 'utf8';else nwkcy == 'arraybuffer' && (i1b8fl = '');
            ;
            var apx5d = mt$0ho['getFileExtension'](b1fi);
            if (w3zyvk['_fileTypeArr']['indexOf'](apx5d) != -0x1) yzwvk['EnvConfig']['load']['call'](this, b1fi, nwkcy, v_z12, encrj, lbi816);else {
                if (!ynck7w['getFileInfo'](b1fi)) {
                    if (b1fi['indexOf']('layaNativeDir/') != -0x1) {
                        if (yzwvk['isZiYu']) {
                            var lb8i = ynck7w['ziyuFileData'][b1fi];
                            f9dlx['onLoaded'](lb8i);
                            return;
                        } else {
                            cosnole['log']('read read'), ynck7w['read'](b1fi, i1b8fl, new _16bi(w3zyvk, w3zyvk['onReadNativeCallBack'], [i1b8fl, b1fi, nwkcy, v_z12, encrj, lbi816, f9dlx]));
                            return;
                        }
                    }
                    if (bfu9ld['rootPath'] == '') var cw3ykz = b1fi;else cw3ykz = b1fi['split'](bfu9ld['rootPath'])[0x0];
                    b1fi['indexOf']('http://') != -0x1 || b1fi['indexOf']('https://') != -0x1 ? yzwvk['EnvConfig']['load']['call'](f9dlx, b1fi, nwkcy, v_z12, encrj, lbi816) : ynck7w['readFile'](cw3ykz, i1b8fl, new _16bi(w3zyvk, w3zyvk['onReadNativeCallBack'], [i1b8fl, b1fi, nwkcy, v_z12, encrj, lbi816, f9dlx]), b1fi);
                } else yzwvk['EnvConfig']['load']['call'](this, b1fi, nwkcy, v_z12, encrj, lbi816);
            }
        }, auf9dx['resMgrLoad'] = function (yk3wcz, u5a9, z_v16, yk37wc, omh04, mho04, dux) {
            z_v16 === void 0x0 && (z_v16 = 0x0), yk37wc === void 0x0 && (yk37wc = ![]), omh04 === void 0x0 && (omh04 = ![]), mho04 === void 0x0 && (mho04 = 0x0), dux === void 0x0 && (dux = 0x3), yk3wcz['indexOf']('mpack') != -0x1 && console['log']('=============resMgrLoad url:', yk3wcz), yzwvk['EnvConfig']['resMgrLoad'](yk3wcz, (z2kv3y, f1li, fblu9) => {
                w3zyvk['prototype']['resMgrLoadCallBack'](z2kv3y, f1li, fblu9, u5a9);
            }, z_v16, yk37wc, omh04, mho04, dux);
        }, auf9dx['resMgrLoadCallBack'] = function (uxdf9, ycwzk, q45ohp, iflu8) {
            console['log']('buff:::', uxdf9, q45ohp, ynck7w['fileNativeDir'] + '///' + ynck7w['fileListName']), iflu8(uxdf9, ycwzk, q45ohp);
        }, auf9dx['clearRes'] = function (i_8216, $0mgto) {
            $0mgto === void 0x0 && ($0mgto = ![]);
            var xapd95 = this;
            xapd95['clearRes'](i_8216, $0mgto);
            var p59dxa = ynck7w['getFileInfo'](i_8216);
            if (p59dxa && (i_8216['indexOf']('http://') != -0x1 || i_8216['indexOf']('https://') != -0x1)) {
                var bil1f = p59dxa['md5'],
                    b8l1if = ynck7w['getFileNativePath'](bil1f);
                ynck7w['remove'](b8l1if);
            }
        }, w3zyvk['onReadNativeCallBack'] = function (tm$ho, i6_21, k23v, nre7j, k7cy3w, oq40m, l81i, q0oh, xq4a) {
            nre7j === void 0x0 && (nre7j = !![]), oq40m === void 0x0 && (oq40m = ![]), q0oh === void 0x0 && (q0oh = 0x0);
            if (!q0oh) {
                var kcy3w;
                if (k23v == 'json' || k23v == 'atlas') kcy3w = yzwvk['getJson'](xq4a['data']);else k23v == 'xml' ? kcy3w = mt$0ho['parseXMLFromString'](xq4a['data']) : kcy3w = xq4a['data'];
                l81i['onLoaded'](kcy3w), !yzwvk['isZiYu'] && yzwvk['isPosMsgYu'] && k23v != 'arraybuffer' && wx['postMessage']({
                    'url': i6_21,
                    'data': kcy3w,
                    'isLoad': !![]
                });
            } else q0oh == 0x1 && yzwvk['EnvConfig']['load']['call'](l81i, i6_21, k23v, nre7j, k7cy3w, oq40m);
        }, b6_8(w3zyvk, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
        }]), w3zyvk;
    }(),
        ynck7w = function (nrw7ec) {
        function vwz3k() {
            vwz3k['__super']['call'](this);
            ;
        }
        return mot$h(vwz3k, 'laya.wx.mini.MiniFileMgr', nrw7ec), vwz3k['isLoadFile'] = function (_1i8) {
            return vwz3k['_fileTypeArr']['indexOf'](_1i8) != -0x1 ? !![] : ![];
        }, vwz3k['getFileInfo'] = function (xda9p5) {
            var fbu9dl = xda9p5['split']('?')[0x0],
                mh0q$ = vwz3k['filesListObj'][fbu9dl];
            if (mh0q$ == null) return null;else return mh0q$;
            return null;
        }, vwz3k['onFileUpdate'] = function (kczw3y, v2k_z3) {
            var uax9d = kczw3y['split']('/'),
                w37kyc = uax9d[uax9d['length'] - 0x1],
                e7nywc = vwz3k['getFileInfo'](v2k_z3);
            if (e7nywc == null) vwz3k['onSaveFile'](v2k_z3, w37kyc);else {
                if (e7nywc['readyUrl'] != v2k_z3) vwz3k['remove'](w37kyc, v2k_z3);
            }
        }, vwz3k['exits'] = function (n7jce, h0q$m) {
            var zv32_6 = vwz3k['getFileNativePath'](n7jce);
            vwz3k['fs']['getFileInfo']({
                'filePath': zv32_6,
                'success': function (aqpx5) {
                    h0q$m != null && h0q$m['runWith']([0x0, aqpx5]);
                },
                'fail': function (ud9fx) {
                    h0q$m != null && h0q$m['runWith']([0x1, ud9fx]);
                }
            });
        }, vwz3k['read'] = function (m4o, flu9d, kzw3vy, _3zv6) {
            flu9d === void 0x0 && (flu9d = 'ascill'), _3zv6 === void 0x0 && (_3zv6 = '');
            var ew7crn;
            _3zv6 != '' ? ew7crn = vwz3k['getFileNativePath'](m4o) : ew7crn = m4o, vwz3k['fs']['readFile']({
                'filePath': ew7crn,
                'encoding': flu9d,
                'success': function (zck3) {
                    kzw3vy != null && kzw3vy['runWith']([0x0, zck3]);
                },
                'fail': function (axu9d5) {
                    if (axu9d5 && _3zv6 != '') vwz3k['down'](_3zv6, flu9d, kzw3vy, _3zv6);else kzw3vy != null && kzw3vy['runWith']([0x1]);
                }
            });
        }, vwz3k['readNativeFile'] = function (erjn, k3ycw) {
            vwz3k['fs']['readFile']({
                'filePath': erjn,
                'encoding': '',
                'success': function (mq0h4o) {
                    k3ycw != null && k3ycw['runWith']([0x0]);
                },
                'fail': function (bl61i8) {
                    k3ycw != null && k3ycw['runWith']([0x1]);
                }
            });
        }, vwz3k['down'] = function (we7ycn, uf9bd, axu95, b81fl) {
            uf9bd === void 0x0 && (uf9bd = 'ascill'), b81fl === void 0x0 && (b81fl = '');
            var xafud = vwz3k['getFileNativePath'](b81fl),
                op54qh = vwz3k['wxdown']({
                'url': we7ycn,
                'filePath': xafud,
                'success': function (lu9fb) {
                    if (lu9fb['statusCode'] === 0xc8) vwz3k['readFile'](lu9fb['filePath'], uf9bd, axu95, b81fl);
                },
                'fail': function (ud9lxf) {
                    axu95 != null && axu95['runWith']([0x1, ud9lxf]);
                }
            });
            op54qh['onProgressUpdate'](function (x9d5) {
                axu95 != null && axu95['runWith']([0x2, x9d5['progress']]);
            });
        }, vwz3k['readFile'] = function (wkv3yz, oqh40p, bufl8d, b9fuld) {
            oqh40p === void 0x0 && (oqh40p = 'ascill'), b9fuld === void 0x0 && (b9fuld = ''), vwz3k['fs']['readFile']({
                'filePath': wkv3yz,
                'encoding': oqh40p,
                'success': function (zykw3c) {
                    if (wkv3yz['indexOf']('http://') != -0x1 || wkv3yz['indexOf']('https://') != -0x1) vwz3k['onFileUpdate'](wkv3yz, b9fuld);
                    bufl8d != null && bufl8d['runWith']([0x0, zykw3c]);
                },
                'fail': function (_1v6i2) {
                    if (_1v6i2) bufl8d != null && bufl8d['runWith']([0x1, _1v6i2]);
                }
            });
        }, vwz3k['downImg'] = function ($q0o, axq, yzkwc3) {
            yzkwc3 === void 0x0 && (yzkwc3 = '');
            var _2i186 = vwz3k['wxdown']({
                'url': $q0o,
                'success': function (lfb8d) {
                    lfb8d['statusCode'] === 0xc8 && vwz3k['copyFile'](lfb8d['tempFilePath'], yzkwc3, axq);
                },
                'fail': function (xlfd) {
                    axq != null && axq['runWith']([0x1, xlfd]);
                }
            });
        }, vwz3k['copyFile'] = function (dufb9l, th$mo0, ax9uf) {
            var ce7ynw = dufb9l['split']('/'),
                h40qo = ce7ynw[ce7ynw['length'] - 0x1],
                q$h0 = th$mo0['split']('?')[0x0],
                uxdf = vwz3k['getFileInfo'](th$mo0),
                xpa5q = vwz3k['getFileNativePath'](h40qo);
            vwz3k['fs']['copyFile']({
                'srcPath': dufb9l,
                'destPath': xpa5q,
                'success': function (ufbl9) {
                    if (!uxdf) vwz3k['onSaveFile'](th$mo0, h40qo), ax9uf != null && ax9uf['runWith']([0x0]);else {
                        if (uxdf['readyUrl'] != th$mo0) vwz3k['remove'](h40qo, th$mo0, ax9uf);
                    }
                },
                'fail': function (yz3kcw) {
                    ax9uf != null && ax9uf['runWith']([0x1, yz3kcw]);
                }
            });
        }, vwz3k['getFileNativePath'] = function (xpa45q) {
            return laya['wx']['mini']['MiniFileMgr']['fileNativeDir'] + '/' + xpa45q;
        }, vwz3k['remove'] = function (h5p4qa, fulx9d, e7cjr) {
            fulx9d === void 0x0 && (fulx9d = '');
            var ah45 = vwz3k['getFileInfo'](fulx9d),
                ot$m0g = vwz3k['getFileNativePath'](ah45['md5']);
            z23_['loader']['clearRes'](ah45['readyUrl']), vwz3k['fs']['unlink']({
                'filePath': ot$m0g,
                'success': function (q$0omh) {
                    if (fulx9d != '') vwz3k['onSaveFile'](fulx9d, h5p4qa);
                    e7cjr != null && e7cjr['runWith']([0x0]);
                },
                'fail': function (mh$0o) {}
            });
        }, vwz3k['onSaveFile'] = function (i6b81l, hoq$) {
            var vzwk3y = i6b81l['split']('?')[0x0];
            vwz3k['filesListObj'][vzwk3y] = {
                'md5': hoq$,
                'readyUrl': i6b81l
            }, vwz3k['fs']['writeFile']({
                'filePath': vwz3k['fileNativeDir'] + '/' + vwz3k['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](vwz3k['filesListObj']),
                'success': function (yzv) {
                    console['log']('写入测试测试成功：', yzv);
                },
                'fail': function (xa9udf) {
                    console['log']('写入测试测试失败：', xa9udf);
                }
            });
        }, vwz3k['existDir'] = function (o0h$mt, ykvz) {
            vwz3k['fs']['mkdir']({
                'dirPath': o0h$mt,
                'success': function (k37wcy) {
                    ykvz != null && ykvz['runWith']([0x0, { 'data': JSON['stringify']({}) }]);
                },
                'fail': function (yzwv) {
                    if (yzwv['errMsg']['indexOf']('file already exists') != -0x1) vwz3k['readSync'](vwz3k['fileListName'], 'utf8', ykvz);else ykvz != null && ykvz['runWith']([0x1, yzwv]);
                }
            });
        }, vwz3k['readSync'] = function (ne7rwc, ldu9b, _6281i, u59dax) {
            ldu9b === void 0x0 && (ldu9b = 'ascill'), u59dax === void 0x0 && (u59dax = '');
            var dafx9u = vwz3k['getFileNativePath'](ne7rwc),
                z23yk;
            try {
                z23yk = vwz3k['fs']['readFileSync'](dafx9u), _6281i != null && _6281i['runWith']([0x0, { 'data': z23yk }]);
            } catch (o0p) {
                _6281i != null && _6281i['runWith']([0x1]);
            }
        }, vwz3k['readCache'] = function () {}, vwz3k['writeCache'] = function (h$0qo) {
            var cr7jne = readyUrl['split']('?')[0x0];
            vwz3k['filesListObj'][cr7jne] = {
                'md5': md5Name,
                'readyUrl': readyUrl
            }, vwz3k['fs']['writeFile']({
                'filePath': vwz3k['fileNativeDir'] + '/' + vwz3k['fileListName'],
                'encoding': 'utf8',
                'data': JSON['stringify'](vwz3k['filesListObj']),
                'success': function (vz2k_3) {},
                'fail': function (zk3v_2) {}
            });
        }, vwz3k['setNativeFileDir'] = function (x9a45p) {
            vwz3k['fileNativeDir'] = wx['env']['USER_DATA_PATH'] + x9a45p;
        }, vwz3k['filesListObj'] = {}, vwz3k['fileNativeDir'] = null, vwz3k['fileListName'] = 'layaairfiles.txt', vwz3k['ziyuFileData'] = {}, b6_8(vwz3k, ['_fileTypeArr', function () {
            return this['_fileTypeArr'] = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
        }, 'fs', function () {
            return this['fs'] = wx['getFileSystemManager']();
        }, 'wxdown', function () {
            return this['wxdown'] = wx['downloadFile'];
        }]), vwz3k;
    }(x9fuad),
        o5p4h = function (h4oqp5) {
        function cnwk7y() {
            this['_sound'] = null, this['url'] = null, this['loaded'] = ![], cnwk7y['__super']['call'](this), this['_sound'] = cnwk7y['_createSound']();
        }
        mot$h(cnwk7y, 'laya.wx.mini.MiniSound', h4oqp5);
        var x9a5d = cnwk7y['prototype'];
        return x9a5d['load'] = function (ax95p4) {
            var k2vy3 = this;
            ax95p4 = bfu9ld['formatURL'](ax95p4), this['url'] = ax95p4;
            if (cnwk7y['_audioCache'][ax95p4]) {
                this['event']('complete');
                return;
            }
            function ycw3kz() {
                if (cnwk7y['_null'] != undefined) k2vy3['_sound']['onCanplay'](cnwk7y['_null']), k2vy3['_sound']['onError'](cnwk7y['_null']);else try {
                    k2vy3['_sound']['onCanplay'](null), k2vy3['_sound']['onError'](null), cnwk7y['_null'] = null;
                } catch (wcn7er) {
                    console['warn']('[wxmini] _clearSound:' + wcn7er), k2vy3['_sound']['onCanplay'](cjre), k2vy3['_sound']['onError'](cjre), cnwk7y['_null'] = cjre;
                }
            }
            function v2_6i() {
                ycw3kz(), $oqhm['loaded'] = !![], $oqhm['event']('complete'), cnwk7y['_audioCache'][$oqhm['url']] = $oqhm;
            }
            function lbfd8u(ib6l) {
                console['error']('errCode=' + ib6l['errCode'] + '  errMsg=' + ib6l['errMsg']), ycw3kz(), $oqhm['event']('error');
            }
            function cjre() {}
            this['_sound']['onCanplay'](v2_6i), this['_sound']['onError'](lbfd8u), this['_sound']['src'] = ax95p4;
            var $oqhm = this;
        }, x9a5d['play'] = function (yw7ck3, ax9dp5) {
            yw7ck3 === void 0x0 && (yw7ck3 = 0x0), ax9dp5 === void 0x0 && (ax9dp5 = 0x0);
            var l1b8if;
            if (this['url'] == yzv2['_tMusic']) {
                if (!cnwk7y['_musicAudio']) cnwk7y['_musicAudio'] = cnwk7y['_createSound']();
                l1b8if = cnwk7y['_musicAudio'];
            } else l1b8if = cnwk7y['_createSound']();
            l1b8if['src'] = this['url'];
            var lb816 = new dx5u(l1b8if);
            return lb816['url'] = this['url'], lb816['loops'] = ax9dp5, lb816['startTime'] = yw7ck3, lb816['play'](), yzv2['addChannel'](lb816), lb816;
        }, x9a5d['dispose'] = function () {
            var m0$g = cnwk7y['_audioCache'][this['url']];
            m0$g && (m0$g['src'] = '', delete cnwk7y['_audioCache'][this['url']]);
        }, qah4p(0x0, x9a5d, 'duration', function () {
            return this['_sound']['duration'];
        }), cnwk7y['_createSound'] = function () {
            return cnwk7y['_id']++, yzwvk['window']['wx']['createInnerAudioContext']();
        }, cnwk7y['_musicAudio'] = null, cnwk7y['_id'] = 0x0, cnwk7y['_audioCache'] = {}, cnwk7y['_null'] = undefined, cnwk7y;
    }(x9fuad),
        dx5u = function (nr7cw) {
        function zk32_(x59dap) {
            this['_audio'] = null, this['_onEnd'] = null, zk32_['__super']['call'](this), this['_audio'] = x59dap, this['_onEnd'] = mt$0ho['bind'](this['__onEnd'], this), x59dap['onEnded'](this['_onEnd']);
        }
        mot$h(zk32_, 'laya.wx.mini.MiniSoundChannel', nr7cw);
        var ph4q5a = zk32_['prototype'];
        return ph4q5a['__onEnd'] = function () {
            if (this['loops'] == 0x1) {
                this['completeHandler'] && (z23_['timer']['once'](0xa, this, this['__runComplete'], [this['completeHandler']], ![]), this['completeHandler'] = null);
                this['stop'](), this['event']('complete');
                return;
            }
            this['loops'] > 0x0 && this['loops']--, this['startTime'] = 0x0, this['play']();
        }, ph4q5a['__onNull'] = function () {}, ph4q5a['play'] = function () {
            this['isStopped'] = ![], yzv2['addChannel'](this);
            if (this['_audio']) this['_audio']['play']();
        }, ph4q5a['stop'] = function () {
            this['isStopped'] = !![], yzv2['removeChannel'](this), this['completeHandler'] = null;
            if (!this['_audio']) return;
            this['_audio']['stop']();
            if (zk32_['_null'] != undefined) this['_audio']['onEnded'](zk32_['_null']);else try {
                this['_audio']['onEnded'](null), zk32_['_null'] = null;
            } catch (bu9l) {
                console['warn']('[wxmini] stop:' + bu9l), this['_audio']['onEnded'](mt$0ho['bind'](this['__onNull'], this)), zk32_['_null'] = mt$0ho['bind'](this['__onNull'], this);
            }
            this['_audio'] = null;
        }, ph4q5a['pause'] = function () {
            this['isStopped'] = !![], this['_audio']['pause']();
        }, ph4q5a['resume'] = function () {
            if (!this['_audio']) return;
            this['isStopped'] = ![], yzv2['addChannel'](this), this['_audio']['play']();
        }, qah4p(0x0, ph4q5a, 'position', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['currentTime'];
        }), qah4p(0x0, ph4q5a, 'duration', function () {
            if (!this['_audio']) return 0x0;
            return this['_audio']['duration'];
        }), qah4p(0x0, ph4q5a, 'volume', function () {
            return 0x1;
        }, function (pa459) {}), zk32_['_null'] = undefined, zk32_;
    }(y3zkw);
})(window, document, Laya);
typeof define === 'function' && define['amd'] && define('laya.core', ['require', 'exports'], function (require, exports) {
    'use strict';

    Object['defineProperty'](exports, '__esModule', { 'value': !![] });
    for (var fxdl9 in Laya) {
        var i21_68 = Laya[fxdl9];
        i21_68 && i21_68['__isclass'] && (exports[fxdl9] = i21_68);
    }
});